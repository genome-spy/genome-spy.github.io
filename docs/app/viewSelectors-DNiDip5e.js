import { C as e, E as t, Jt as n, Q as r, S as i, Wt as a, Yt as o, Z as s, b as c, o as l, qt as u, t as d, tn as f, un as p, ut as m, y as h, yt as ee } from "./clipOptions-BWHr3aTa.js";
import { E as te, it as ne, m as g, y as _ } from "./vega-scale-CypF85iS.js";
import { a as v, n as re, r as ie, t as y } from "./viewError-BiR9VCgL.js";
import { t as ae } from "./warning-CpIIpk8e.js";
//#region ../../node_modules/flatqueue/index.js
var b = class {
	constructor(e = Infinity, t = Float64Array, n = Uint32Array) {
		let r = e !== Infinity;
		this.ids = r ? new n(e) : [], this.values = r ? new t(e) : [], this.capacity = e, this.length = 0;
	}
	clear() {
		this.length = 0;
	}
	push(e, t) {
		if (this.length === this.capacity) throw RangeError("Queue is at capacity.");
		let n = this.length++;
		for (; n > 0;) {
			let e = n - 1 >> 1, r = this.values[e];
			if (t >= r) break;
			this.ids[n] = this.ids[e], this.values[n] = r, n = e;
		}
		this.ids[n] = e, this.values[n] = t;
	}
	pop() {
		if (this.length === 0) return;
		let e = this.ids, t = this.values, n = e[0], r = --this.length;
		if (r > 0) {
			let n = e[r], i = t[r], a = 0, o = r >> 1;
			for (; a < o;) {
				let n = (a << 1) + 1, o = n + 1, s = n + (o < r & +(t[o] < t[n]));
				if (t[s] >= i) break;
				e[a] = e[s], t[a] = t[s], a = s;
			}
			e[a] = n, t[a] = i;
		}
		return n;
	}
	peek() {
		return this.length > 0 ? this.ids[0] : void 0;
	}
	peekValue() {
		return this.length > 0 ? this.values[0] : void 0;
	}
	shrink() {
		Array.isArray(this.ids) && (this.ids.length = this.length), Array.isArray(this.values) && (this.values.length = this.length);
	}
}, x = Symbol("runtimeNode"), oe = 1e6;
function se(e) {
	return e ? (t, n) => e.addDisposer(t, n) : () => () => void 0;
}
function ce(e, t) {
	let n = {
		id: e.id,
		name: e.name,
		kind: e.kind,
		get() {
			return e.value;
		},
		subscribe(t) {
			return e.listeners.add(t), () => {
				e.listeners.delete(t);
			};
		}
	};
	return Object.defineProperty(n, x, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(n, { set(e) {
		t(e);
	} }) : n;
}
function le(e) {
	let t = e[x];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function ue(e) {
	return typeof e.rank == "number" ? e.rank : le(e).rank;
}
function de(e) {
	for (let t of e) t();
}
var fe = class {
	#e = 1;
	#t = 1;
	#n = 0;
	#r = 0;
	#i = !1;
	#a = !1;
	#o = !1;
	#s = 0;
	#c = !1;
	#l = /* @__PURE__ */ new Map();
	#u = /* @__PURE__ */ new Map();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Set();
	#p = new b();
	#m = new b();
	#h = /* @__PURE__ */ new Set();
	#g;
	constructor(e = {}) {
		this.#g = se(e.lifecycleRegistry);
	}
	createWritable(e, t, n, r, i = {}) {
		let a = "n" + this.#e++, o = i.notify ?? !0, s = {
			id: a,
			name: t,
			kind: n,
			value: r,
			rank: 0,
			disposed: !1,
			listeners: /* @__PURE__ */ new Set(),
			subscribe(e) {
				return s.listeners.add(e), () => {
					s.listeners.delete(e);
				};
			}
		}, c = (e) => {
			if (s.disposed) throw Error("Cannot set disposed parameter \"" + t + "\" (" + a + ").");
			e !== s.value && (s.value = e, o && this.#v(s.listeners));
		}, l = () => {
			s.disposed = !0, s.listeners.clear(), u();
		}, u = this.#g(e, l);
		return Object.assign(ce(s, c), { dispose: l });
	}
	computed(e, t, n, r, i = {}) {
		return this.#_(e, t, n, r, i);
	}
	operation(e, t, n, r, i, a = {}) {
		return this.#_(e, t, n, r, a, i);
	}
	#_(e, t, n, r, i, a) {
		let o = this.#b(() => s.dependencies), s = {
			id: "n" + this.#e++,
			name: t,
			kind: "derived",
			get rank() {
				return o();
			},
			dependencies: n,
			value: r(),
			disposed: !1,
			listeners: /* @__PURE__ */ new Set(),
			fn: r,
			apply: a,
			equals: i.equals ?? ((e, t) => e === t),
			subscribe(e) {
				return s.listeners.add(e), () => {
					s.listeners.delete(e);
				};
			}
		};
		a?.(s.value);
		let c = () => s.dependencies.map((e) => e.subscribe(() => {
			s.disposed || (this.#x(s), e.propagation === "sync" && this.flushNow());
		})), l = c(), u = () => {
			s.disposed || (s.disposed = !0, d(), l.forEach((e) => e()), s.listeners.clear(), this.#d.delete(s));
		}, d = this.#g(e, u);
		return Object.assign(ce(s), {
			dispose: u,
			rebind: (e, n) => {
				if (s.disposed) throw Error("Cannot rebind disposed operation: " + t);
				let r = /* @__PURE__ */ new Set(), i = (e) => {
					let n = e[x];
					if (n === s) throw Error("Reactive dependency cycle: " + t);
					if (!r.has(n)) {
						r.add(n);
						for (let e of n?.dependencies ?? []) i(e);
					}
				};
				e.forEach(i), l.forEach((e) => e()), s.dependencies = e, s.fn = n, this.#n++, l = c(), this.#x(s), this.#p.clear();
				for (let e of this.#d) this.#p.push(e, this.#C(e.rank));
				this.#m.clear();
				for (let e of this.#f) this.#m.push(e, this.#C(e.rank));
			}
		});
	}
	effect(e, t, n) {
		let r = this.#b(() => t), i = {
			id: "n" + this.#e++,
			get rank() {
				return r();
			},
			disposed: !1,
			fn: n
		}, a = t.map((e) => e.subscribe(() => {
			i.disposed || (this.#S(i), e.propagation === "sync" && this.flushNow());
		})), o = () => {
			i.disposed || (i.disposed = !0, s(), a.forEach((e) => e()), this.#f.delete(i));
		}, s = this.#g(e, o);
		return o;
	}
	runInTransaction(e) {
		this.#r += 1;
		try {
			return e();
		} finally {
			--this.#r, this.#r === 0 && (this.#i ? (this.#i = !1, this.flushNow()) : this.#w());
		}
	}
	flushNow({ afterTransaction: e = !1 } = {}) {
		if (e && this.#r > 0 && (this.#i = !0), this.#s > 0) {
			this.#c = !0;
			return;
		}
		if (this.#r > 0 || this.#o) return;
		this.#a = !1, this.#o = !0;
		let t;
		try {
			for (; this.#p.length || this.#l.size || this.#m.length;) {
				for (; this.#p.length;) {
					let e = this.#p.pop();
					if (this.#d.delete(e), e.disposed) continue;
					this.#y(e, e.name);
					let t, n;
					try {
						t = e.fn(), n = !e.equals(t, e.value), n && e.apply?.(t);
					} catch (t) {
						throw this.#x(e), t;
					}
					n && (e.value = t, this.#v(e.listeners));
				}
				if (this.#l.size) {
					let e = Infinity, n;
					for (let [t, { rank: r }] of this.#l) r < e && (n = t, e = r);
					let r = /* @__PURE__ */ new Set();
					for (;;) {
						if (r.has(n)) throw Error("Cyclic streaming publication dependencies");
						r.add(n);
						let e;
						for (let t of this.#l.get(n).prerequisites?.() ?? []) if (this.#l.has(t)) {
							e = t;
							break;
						}
						if (!e) break;
						n = e;
					}
					t = this.#l.get(n).onError, this.#l.delete(n), this.#y(n, "streaming update"), n(), t = void 0;
				} else if (this.#m.length) {
					let e = this.#m.pop();
					this.#f.delete(e), e.disposed || (this.#y(e, "effect " + e.id), e.fn());
				}
			}
		} catch (e) {
			let n = Array.from(this.#l.values());
			this.#l.clear(), t?.(e);
			for (let t of n) t.onError?.(e);
			for (let t of this.#h) t.reject(e);
			throw this.#h.clear(), e;
		} finally {
			this.#u.clear(), this.#o = !1, this.#E();
		}
	}
	requestUpdate(e, t = 0, n, r) {
		this.#l.set(e, {
			rank: t,
			onError: n,
			prerequisites: r
		}), this.#w();
	}
	cancelUpdate(e) {
		this.#l.delete(e);
	}
	#v(e) {
		this.#s++;
		try {
			de(e);
		} finally {
			this.#s--, !this.#s && this.#c && (this.#c = !1, this.flushNow());
		}
	}
	#y(e, t) {
		let n = (this.#u.get(e) ?? 0) + 1;
		if (n > 100) throw Error("Reactive propagation did not settle: " + t);
		this.#u.set(e, n);
	}
	whenPropagated(e = {}) {
		if (this.#T()) return Promise.resolve();
		let { signal: t, timeoutMs: n } = e;
		return t?.aborted ? Promise.reject(/* @__PURE__ */ Error("whenPropagated aborted")) : new Promise((e, r) => {
			let i, a = () => {
				this.#h.delete(o), t?.removeEventListener("abort", s), i !== void 0 && clearTimeout(i);
			}, o = {
				resolve: () => {
					a(), e();
				},
				reject: (e) => {
					a(), r(e);
				}
			}, s = () => o.reject(/* @__PURE__ */ Error("whenPropagated aborted"));
			t?.addEventListener("abort", s, { once: !0 }), n != null && (i = setTimeout(() => o.reject(/* @__PURE__ */ Error("whenPropagated timeout after " + n + " ms")), n)), this.#h.add(o);
		});
	}
	#b(e) {
		let t = -1, n = 0;
		return () => (t !== this.#n && (n = 1 + e().reduce((e, t) => Math.max(e, ue(t)), 0), t = this.#n), n);
	}
	#x(e) {
		if (this.#d.has(e)) {
			this.#w();
			return;
		}
		this.#d.add(e), this.#p.push(e, this.#C(e.rank)), this.#w();
	}
	#S(e) {
		if (this.#f.has(e)) {
			this.#w();
			return;
		}
		this.#f.add(e), this.#m.push(e, this.#C(e.rank)), this.#w();
	}
	#C(e) {
		let t = this.#t % oe;
		return this.#t += 1, e * oe + t;
	}
	#w() {
		this.#r > 0 || this.#a || this.#o || (this.#a = !0, queueMicrotask(() => {
			this.#a && this.flushNow();
		}));
	}
	#T() {
		return this.#r === 0 && !this.#a && !this.#o && this.#p.length === 0 && this.#m.length === 0 && this.#d.size === 0 && this.#f.size === 0 && this.#l.size === 0;
	}
	#E() {
		if (this.#T()) {
			for (let e of this.#h) e.resolve();
			this.#h.clear();
		}
	}
}, pe = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createOwner(e, t) {
		let n = e + ":" + t + ":" + this.#e++;
		return this.#t.set(n, /* @__PURE__ */ new Set()), n;
	}
	addDisposer(e, t) {
		let n = this.#t.get(e);
		if (!n) throw Error("Unknown owner: " + e);
		return n.add(t), () => {
			n.delete(t);
		};
	}
	disposeOwner(e) {
		let t = this.#t.get(e);
		if (t) {
			for (let e of t) e();
			t.clear(), this.#t.delete(e);
		}
	}
}, me = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createRootScope(e) {
		let t = "scope:" + this.#e++;
		return this.#t.set(t, {
			params: /* @__PURE__ */ new Map(),
			initializers: /* @__PURE__ */ new Map(),
			ownerId: e
		}), t;
	}
	createChildScope(e, t) {
		if (!this.#t.has(t)) throw Error("Unknown parent scope: " + t);
		let n = "scope:" + this.#e++;
		return this.#t.set(n, {
			parentScope: t,
			params: /* @__PURE__ */ new Map(),
			initializers: /* @__PURE__ */ new Map(),
			ownerId: e
		}), n;
	}
	getOwnerId(e) {
		let t = this.#t.get(e);
		if (!t) throw Error("Unknown scope: " + e);
		return t.ownerId;
	}
	clearScope(e) {
		let t = this.#t.get(e);
		if (!t) throw Error("Unknown scope: " + e);
		t.params.clear(), t.initializers.clear();
	}
	registerInitializer(e, n, r) {
		t(n);
		let i = this.#t.get(e);
		if (!i) throw Error("Unknown scope: " + e);
		if (i.params.has(n) || i.initializers.has(n)) throw Error(`Parameter "${n}" already exists in scope ${e}`);
		i.initializers.set(n, {
			initialize: r,
			initializing: !1
		});
	}
	register(e, n, r) {
		t(n);
		let i = this.#t.get(e);
		if (!i) throw Error("Unknown scope: " + e);
		if (i.params.has(n) || i.initializers.get(n)?.initializing === !1) throw Error("Parameter \"" + n + "\" already exists in scope " + e);
		return i.params.set(n, r), r;
	}
	resolve(e, n) {
		t(n);
		let r = e;
		for (; r;) {
			let e = this.#t.get(r);
			if (!e) throw Error("Unknown scope: " + r);
			let t = e.initializers.get(n);
			if (t) {
				if (t.initializing) throw Error(`Parameter dependency cycle while initializing "${n}" in ${r}.`);
				t.initializing = !0;
				try {
					if (t.initialize(), !e.params.has(n)) throw Error(`Initializer did not register parameter "${n}".`);
					e.initializers.delete(n);
				} finally {
					t.initializing = !1;
				}
			}
			let i = e.params.get(n);
			if (i) return i;
			r = e.parentScope;
		}
	}
};
//#endregion
//#region ../core/src/paramRuntime/expressionCompiler.js
function he(e, t = {}, n = {}) {
	return r(e, t, n);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function S(e, t, n = {}) {
	let r = {}, i = he(e, r, n), a = /* @__PURE__ */ new Map();
	for (let n of i.globals) {
		if (a.has(n)) continue;
		let i = t(n);
		if (!i) throw Error("Unknown variable \"" + n + "\" in expression: " + e);
		a.set(n, i), Object.defineProperty(r, n, {
			enumerable: !0,
			get() {
				return i.get();
			}
		});
	}
	let o = /* @__PURE__ */ new Set();
	return i.subscribe = (e) => {
		let t = [];
		for (let n of a.values()) t.push(n.subscribe(e));
		for (let n of i.scaleDependencies ?? []) t.push(n.subscribe(e));
		let n = !0, r = () => {
			n && (n = !1, o.delete(r), t.forEach((e) => e()));
		};
		return o.add(r), r;
	}, i.invalidate = () => {
		for (let e of o) e();
		o.clear();
	}, i.identifier = () => i.code + "|" + Array.from(a.values()).map((e) => e.id).concat((i.scaleDependencies ?? []).map((e) => e.id)).join(","), i.dependencies = Array.from(a.values()).concat(i.scaleDependencies ?? []), {
		expression: i,
		dependencies: i.dependencies
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramRuntime.js
var ge = class {
	#e = new pe();
	#t = new fe({ lifecycleRegistry: this.#e });
	#n = new me();
	createScope(e) {
		let t = this.#e.createOwner("scope", e ?? "root");
		return e ? this.#n.createChildScope(t, e) : this.#n.createRootScope(t);
	}
	disposeScope(e) {
		let t = this.#n.getOwnerId(e);
		this.#e.disposeOwner(t), this.#n.clearScope(e);
	}
	addScopeDisposer(e, t) {
		let n = this.#n.getOwnerId(e);
		this.#e.addDisposer(n, t);
	}
	registerInitializer(e, t, n) {
		this.#n.registerInitializer(e, t, n);
	}
	registerBase(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "base", n, r);
		return this.#n.register(e, t, a);
	}
	registerSelection(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "selection", n, r);
		return this.#n.register(e, t, a);
	}
	registerDerived(e, t, n, r) {
		let { expression: i, dependencies: a } = S(n, (t) => this.resolve(r?.expressionScope ?? e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = S(t, (t) => this.resolve(e, t), n);
		return r;
	}
	resolve(e, t) {
		return this.#n.resolve(e, t);
	}
	signal(e, t, n) {
		return this.#t.createWritable(this.#n.getOwnerId(e), t, "base", n);
	}
	computed(e, t, n, r, i) {
		return this.#t.computed(this.#n.getOwnerId(e), t, n, r, i);
	}
	operation(e, t, n, r, i, a) {
		return this.#t.operation(this.#n.getOwnerId(e), t, n, r, i, a);
	}
	effect(e, t, n) {
		return this.#t.effect(this.#n.getOwnerId(e), t, n);
	}
	requestUpdate(e, t = 0, n, r) {
		this.#t.requestUpdate(e, t, n, r);
	}
	cancelUpdate(e) {
		this.#t.cancelUpdate(e);
	}
	runInTransaction(e) {
		return this.#t.runInTransaction(e);
	}
	flushNow(e) {
		this.#t.flushNow(e);
	}
	whenPropagated(e) {
		return this.#t.whenPropagated(e);
	}
}, _e = (e) => new Promise((t) => setTimeout(t, e));
function ve() {
	return { canceled: !1 };
}
function ye(e) {
	let t = e.requestAnimationFrame || window.requestAnimationFrame, n = e.signal, r = e.cancelToken, i = () => new Promise((i, a) => {
		if (r?.canceled) return i();
		if (n?.aborted) return a("aborted");
		let o = performance.now(), s = o + (e.duration || 1e3), c = typeof e.from == "number" ? e.from : 0, l = typeof e.to == "number" ? e.to : 1, u = e.easingFunction || ((e) => e), d = (e) => (e - o) / (s - o), f = (e) => e * (l - c) + c, p = (e) => Math.max(0, Math.min(1, e)), m = (o) => {
			if (r?.canceled) {
				i();
				return;
			}
			n?.aborted ? a("aborted") : (e.onUpdate(f(u(p(d(o))))), o < s ? t(m) : (e.onUpdate(f(u(1))), i()));
		};
		t(m);
	});
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : _e(e.delay).then(i) : i();
}
//#endregion
//#region ../core/src/utils/animator.js
var be = class {
	constructor(e) {
		this._renderCallback = e, this._renderRequested = !1, this._finalized = !1, this._warn = !1, this._animationFrameRequest = void 0, this.transitions = [], this.transitionsEnabled = !0;
	}
	requestTransition(e) {
		this._finalized || (this.cancelTransition(e), this.transitions.push(e), this.requestRender());
	}
	cancelTransition(e) {
		let t = this.transitions.indexOf(e);
		t >= 0 && this.transitions.splice(t, 1);
	}
	requestRender() {
		this._finalized || (this._renderRequested ? this._warn && console.warn("Render already requested!") : (this._renderRequested = !0, this._animationFrameRequest = window.requestAnimationFrame((e) => {
			if (this._animationFrameRequest = void 0, this._finalized) return;
			this._renderRequested = !1;
			let t = this.transitions;
			this.transitions = [];
			let n;
			for (; n = t.shift();) n(e);
			this._finalized || this._renderCallback(e);
		})));
	}
	finalize() {
		this._finalized = !0, this._renderRequested = !1, this.transitions = [], this._animationFrameRequest !== void 0 && (window.cancelAnimationFrame(this._animationFrameRequest), this._animationFrameRequest = void 0);
	}
	transition(e) {
		return ye({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function C(e, t, n, r, i) {
	let a = 0, o = !0, s = !1, c = structuredClone(i), l = c;
	function u(e, t, n, r) {
		return t + (e - t) * 2 ** (-n / r);
	}
	function d(i) {
		if (s = !1, o) return;
		let d = i - a;
		a = i;
		for (let e of Object.keys(l)) c[e] = u(c[e], l[e], d, n);
		t(c);
		let p = -Infinity;
		for (let e of Object.keys(l)) p = Math.max(p, Math.abs(l[e] - c[e]));
		p < r ? (c = l, t(c), o = !0, p != 0 && e.requestRender()) : f();
	}
	function f() {
		s || (s = !0, e.requestTransition(d));
	}
	function p(n) {
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = xe(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function xe() {
	let e = globalThis.document?.timeline?.currentTime;
	return typeof e == "number" ? e : performance.now();
}
//#endregion
//#region ../core/src/paramRuntime/viewParamRuntime.js
var w = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new Map();
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Map();
	#s = /* @__PURE__ */ new Map();
	#c;
	#l;
	#u;
	#d;
	#f = !1;
	constructor(e, t, n, r = {}) {
		this.#c = e ?? (() => void 0), this.#l = t ?? (() => void 0), this.#u = n, this.#d = r.snapTransitionedUpdates ?? !1;
		let i = this.#c();
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new ge(), this.#t = this.#e.createScope());
	}
	get #p() {
		return { resolveScaleResolution: this.#l };
	}
	registerParam(e, n = {}) {
		let r = e.name;
		if (t(r), this.#i.has(r) || this.#a.has(r)) throw Error("Parameter \"" + r + "\" already registered in this scope.");
		if (Ce(e), n.defer) {
			if (!("expr" in e)) throw Error("Only expression parameters can be deferred.");
			return this.#e.registerInitializer(this.#t, r, () => {
				this.#m(e);
			}), this.#i.set(r, e), () => {
				throw Error("Cannot set derived parameter \"" + r + "\".");
			};
		}
		return this.#m(e);
	}
	registerLazyExpression(e, t, n) {
		this.#e.registerInitializer(this.#t, e, () => {
			n?.();
			let r = this.#e.registerDerived(this.#t, e, t, this.#p);
			this.#r.set(e, r);
		}), this.#a.add(e);
	}
	registerScopedExpression(e, t, n) {
		if (this.#e !== n.#e) throw Error("Scoped expressions must share a parameter runtime.");
		if (this.#i.has(e)) throw Error("Parameter \"" + e + "\" already registered in this scope.");
		this.#e.registerInitializer(this.#t, e, () => {
			let r = this.#e.registerDerived(this.#t, e, t, {
				expressionScope: n.#t,
				...n.#p
			});
			this.#r.set(e, r);
		}), this.#i.set(e, {
			name: e,
			expr: t
		});
	}
	#m(e) {
		let t = e.name, n, r;
		if (e.push == "outer") {
			let i = this.findRuntimeForParam(t);
			if (!i) throw Error(`Parameter "${t}" not found in outer scope!`);
			let a = i.paramConfigs.get(t);
			if (!a) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a || "ruler" in a) throw Error(`The outer parameter "${t}" must not have expr, select, or ruler properties!`);
			n = (e) => {
				i.setValue(t, e);
			}, this.#n.set(t, n), "ruler" in e && (r = h(e, this), n(r));
		} else if ("value" in e) r = h(e, this), n = "transition" in e ? this.#g(t, r, e.transition) : this.#h(t, r);
		else if ("expr" in e) {
			if ("transition" in e) this.#_(t, e.expr, e.transition);
			else {
				let n = this.#e.registerDerived(this.#t, t, e.expr, this.#p);
				this.#r.set(t, n);
			}
			n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = h(e, this), n = this.#h(t, r);
		if ("select" in e) {
			if (r ??= h(e, this), !this.#n.has(t)) {
				let e = this.#e.registerSelection(this.#t, t, r);
				this.#r.set(t, e), this.#n.set(t, (t) => {
					e.set(t), this.#e.flushNow();
				}), n = this.#n.get(t);
			}
			n(r);
		}
		return this.#i.set(t, e), n;
	}
	allocateSetter(e, n, r = !1) {
		if (t(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let i = this.#e.registerBase(this.#t, e, n, { notify: !r });
		this.#r.set(e, i);
		let a = (e) => {
			i.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, a), a;
	}
	setValue(e, n, r) {
		t(e);
		let i = this.#n.get(e);
		if (!i) throw Error("Writable parameter not found in this scope: " + e);
		i(n, r);
	}
	getValue(e) {
		return !this.#r.has(e) && this.hasLocalParam(e) && this.#e.resolve(this.#t, e), this.#r.get(e)?.get();
	}
	getParamRef(e) {
		t(e);
		let n = this.findRuntimeForParam(e);
		if (n) return n.#r.has(e) || n.#e.resolve(n.#t, e), n.#r.get(e);
	}
	getTargetValue(e) {
		return t(e), this.#s.get(e)?.target ?? this.getValue(e);
	}
	subscribe(e, t) {
		let n = this.getParamRef(e);
		if (!n) throw Error("Parameter not found: " + e);
		return n.subscribe(t);
	}
	findValue(e) {
		return this.findRuntimeForParam(e)?.getValue(e);
	}
	findTargetValue(e) {
		return this.findRuntimeForParam(e)?.getTargetValue(e);
	}
	get paramConfigs() {
		return this.#i;
	}
	hasLocalParam(e) {
		t(e);
		let n = this.#i.get(e);
		return this.#r.has(e) || this.#a.has(e) || n !== void 0 && "expr" in n;
	}
	isPendingParam(e) {
		let t = this.findRuntimeForParam(e);
		return t !== void 0 && !t.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return t(e), this.#i.has(e) ? !0 : this.#c()?.hasConfiguredParamInScopeChain(e) ?? !1;
	}
	findRuntimeForParam(e) {
		return this.hasLocalParam(e) ? this : this.#c()?.findRuntimeForParam(e);
	}
	findConfiguredParam(e) {
		let t = this.#i.get(e);
		return t ? {
			runtime: this,
			config: t
		} : this.#c()?.findConfiguredParam(e);
	}
	registerSelectionController(e, t) {
		let n = this.#o.get(e);
		return n || (n = /* @__PURE__ */ new Set(), this.#o.set(e, n)), n.add(t), () => {
			n.delete(t), n.size === 0 && this.#o.delete(e);
		};
	}
	getSelectionController(e) {
		let t = this.#o.get(e);
		if (t) {
			if (t.size > 1) throw Error(`Selection "${e}" has ambiguous interaction ownership.`);
			return t.values().next().value;
		}
	}
	getDebugState() {
		let e = [];
		for (let [t, n] of this.#r) {
			let r = this.#i.get(t);
			e.push({
				name: t,
				kind: Se(r),
				value: n.get(),
				writable: this.#n.has(t),
				configured: !!r,
				config: r ? structuredClone(r) : void 0,
				target: this.#s.get(t)?.target
			});
		}
		return {
			scopeId: this.#t,
			disposed: this.#f,
			params: e
		};
	}
	createExpression(e) {
		return this.#e.createExpression(this.#t, e, this.#p);
	}
	watchExpression(e, t, n = {}) {
		let r = this.createExpression(e), i = r.subscribe(t);
		return (n.scopeOwned ?? !0) && this.#e.addScopeDisposer(this.#t, i), n.registerDisposer?.(i), r;
	}
	signal(e, t) {
		return this.#e.signal(this.#t, e, t);
	}
	computed(e, t, n, r) {
		return this.#e.computed(this.#t, e, t, n, r);
	}
	operation(e, t, n, r, i) {
		return this.#e.operation(this.#t, e, t, n, r, i);
	}
	effect(e, t) {
		return this.#e.effect(this.#t, e, t);
	}
	get updateScheduler() {
		return this.#e;
	}
	requestUpdate(e, t = 0, n, r) {
		this.#e.requestUpdate(e, t, n, r);
	}
	cancelUpdate(e) {
		this.#e.cancelUpdate(e);
	}
	#h(e, t) {
		let n = this.#e.registerBase(this.#t, e, t);
		this.#r.set(e, n);
		let r = (e) => {
			n.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, r), r;
	}
	#g(e, t, n) {
		let r = this.#v(e, t, n), i = (t, n) => {
			this.#y(e, r, t, n);
		};
		return this.#n.set(e, i), i;
	}
	#_(e, t, n) {
		let r = this.createExpression(t), i = this.#v(e, r(null), n), a = r.subscribe(() => {
			this.#y(e, i, r(null), { animate: !this.#d });
		});
		this.#e.addScopeDisposer(this.#t, a);
	}
	#v(e, t, n) {
		let r = T(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#r.set(e, i);
		let a = this.#u;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = C(a, ({ value: e }) => {
			i.set(e), this.#e.flushNow();
		}, n.halfLife ?? 80, n.epsilon ?? .01, { value: i.get() }), s = {
			target: i.get(),
			smoother: o,
			dispose: () => {
				o.stop(), this.#s.delete(e);
			}
		};
		return this.#s.set(e, s), this.#e.addScopeDisposer(this.#t, s.dispose), s;
	}
	#y(e, t, n, r = {}) {
		let i = T(e, n);
		t.target = i, r.animate === !1 ? t.smoother.snap({ value: i }) : t.smoother({ value: i });
	}
	evaluateAndGet(e) {
		return this.createExpression(e)();
	}
	runInTransaction(e) {
		return this.#e.runInTransaction(e);
	}
	flushNow(e) {
		this.#e.flushNow(e);
	}
	whenPropagated(e) {
		return this.#e.whenPropagated(e);
	}
	finalizeInitialization() {
		this.#d = !1;
	}
	dispose() {
		this.#f || (this.#f = !0, this.#e.disposeScope(this.#t), this.#n.clear(), this.#r.clear(), this.#i.clear(), this.#a.clear(), this.#o.clear(), this.#s.clear());
	}
	hasPointSelections() {
		for (let e of this.#i.values()) if (i(e)) {
			let t = e.select;
			if (o(t)) {
				if (t == "point") return !0;
			} else if (t.type == "point") return !0;
		}
		return !1;
	}
};
function Se(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function Ce(e) {
	let t = e.name;
	if ("value" in e && "expr" in e) throw Error(`The parameter "${t}" must not have both value and expr properties!`);
	if ("expr" in e && "bind" in e) throw Error(`The parameter "${t}" must not have both expr and bind properties!`);
	if (!("transition" in e)) return;
	if ("select" in e || "ruler" in e || e.push === "outer") throw Error(`The parameter "${t}" must not use transition with select, ruler, or push.`);
	if (!("value" in e || "expr" in e)) throw Error(`The transitioned parameter "${t}" must have a value or expr property.`);
	let n = e.transition;
	if (!n) throw Error(`The parameter "${t}" must have a transition configuration.`);
	if (n.type !== "lerp") throw Error(`Unsupported transition type for parameter "${t}": ${n.type}`);
	if (n.halfLife != null && (!Number.isFinite(n.halfLife) || n.halfLife <= 0)) throw Error(`The transition halfLife for parameter "${t}" must be a positive finite number.`);
	if (n.epsilon != null && (!Number.isFinite(n.epsilon) || n.epsilon < 0)) throw Error(`The transition epsilon for parameter "${t}" must be a non-negative finite number.`);
}
function T(e, t) {
	if (typeof t != "number" || !Number.isFinite(t)) throw Error(`Transitioned parameter "${e}" must have a finite numeric value.`);
	return t;
}
//#endregion
//#region ../core/src/view/layout/flexLayout.js
function we(e, t, { spacing: n, devicePixelRatio: r, offset: i, reverse: a } = {}) {
	n ||= 0, i ||= 0;
	let o = Ne(e, t, n), s = 0, c = 0;
	for (let t = 0; t < e.length; t++) s += o[t], O(e[t]) || c++;
	let l = s + Math.max(0, c - 1) * n, u = r === void 0 ? (e) => e : (e) => Math.round(e * r) / r, d = 0, f = [], p = (e) => {
		let t = d;
		if (!t) return;
		let r = (e ? n : 0) * (a ? -1 : 1);
		m -= r;
		for (let e = 0; e < t; e++) f.push({
			location: m + (e + 1) / (t + 1) * r,
			size: 0
		});
		m += r, d = 0;
	}, m = a ? Math.max(t, l) : 0 + i;
	if (e.length == 1 && O(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (O(r)) d++;
		else {
			p(f.length > 0);
			let e = o[t];
			a && (m -= e), f.push({
				location: u(m),
				size: u(e)
			}), a ? m -= n : m += e + n;
		}
	}
	return m += a ? n : -n, p(!1), f;
}
function Te(e, { spacing: t } = { spacing: 0 }) {
	let n = 0;
	for (let r of e) n += M(r) + (O(r) ? 0 : t);
	return Math.max(0, n - t);
}
function Ee(e, t, { spacing: n = 0 } = {}) {
	let r = [], i = [], a = 0, o = 0;
	for (let [s, c] of e.entries()) {
		let e = M(c), l = !O(c), u = o && l ? n : 0;
		i.length && a + u + e > t && (r.push(i), i = [], a = 0, o = 0), i.push(s), a += (o && l ? n : 0) + e, o += +!!l;
	}
	return i.length && r.push(i), r;
}
function De(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, M(o));
		let e = N(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return I({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function Oe(e) {
	let t = {
		px: 0,
		grow: 0,
		minPx: 0,
		maxPx: 0
	}, n = !0;
	for (let r of e) {
		t.px += k(r.px), t.grow += k(r.grow), t.minPx += M(r);
		let e = N(r);
		e === void 0 ? n = !1 : t.maxPx += e;
	}
	return n || delete t.maxPx, I(t);
}
var E = class e {
	constructor(e, t) {
		this.width = e, this.height = t;
	}
	addPadding(e) {
		return this.#e(e.width, e.height);
	}
	subtractPadding(e) {
		return this.#e(-e.width, -e.height);
	}
	#e(t, n) {
		return new e(F(this.width, t), F(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, D = Object.freeze({
	px: 0,
	grow: 0
}), ke = new E(D, D);
function O(e) {
	return !e.px && !e.grow && !e.minPx;
}
function Ae(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function k(e) {
	return e || 0;
}
function je(e) {
	return e && (u(e.px) || u(e.grow) || u(e.minPx) || u(e.maxPx));
}
function Me(e) {
	if (q(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (je(e)) return A(e), I(e);
	if (u(e)) return {
		px: e,
		grow: 0
	};
	if (e === "container" || !e) return {
		px: 0,
		grow: 1
	};
	throw Error(`Invalid sizeDef: ${e}`);
}
function Ne(e, t, n) {
	let r = !1;
	for (let t of e) A(t), r ||= P(t);
	if (!r) return Pe(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) O(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		k(n.grow) || (i[t] = j(k(n.px), n), c.add(t));
	}
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += k(e[o].px), n += k(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = j(k(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t), l = 0, u = [], d = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = k(r.px) + k(r.grow) / n * o, s = j(a, r);
			i[t] = s;
			let f = s - a;
			l += f, f > 0 ? u.push(t) : f < 0 && d.push(t);
		}
		if (!u.length && !d.length) break;
		if (l > 0) for (let e of u) c.add(e);
		else if (l < 0) for (let e of d) c.add(e);
		else for (let e of a) c.add(e);
	}
	return i;
}
function Pe(e, t, n) {
	let r = 0, i = 0;
	for (let t of e) r += k(t.px) + (O(t) ? 0 : n), i += k(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = O(n) ? 0 : k(n.px) + (i ? k(n.grow) / i * a : 0);
	}
	return o;
}
function A(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function j(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function M(e) {
	return j(k(e.px), e);
}
function N(e) {
	return e.maxPx ?? (k(e.grow) ? void 0 : M(e));
}
function P(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function F(e, t) {
	return I({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function I(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = P(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > k(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (k(t.grow) || e.maxPx < k(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var L = class e {
	constructor(e, t, n, r) {
		this.top = e || 0, this.right = t || 0, this.bottom = n || 0, this.left = r || 0;
	}
	get width() {
		return this.left + this.right;
	}
	get height() {
		return this.top + this.bottom;
	}
	expand(t) {
		return t <= 0 ? this : new e(this.top + t, this.right + t, this.bottom + t, this.left + t);
	}
	add(t) {
		return new e(this.top + t.top, this.right + t.right, this.bottom + t.bottom, this.left + t.left);
	}
	subtract(t) {
		return new e(this.top - t.top, this.right - t.right, this.bottom - t.bottom, this.left - t.left);
	}
	union(t) {
		return new e(Math.max(this.top, t.top), Math.max(this.right, t.right), Math.max(this.bottom, t.bottom), Math.max(this.left, t.left));
	}
	getHorizontal() {
		return new e(0, this.right, 0, this.left);
	}
	getVertical() {
		return new e(this.top, 0, this.bottom, 0);
	}
	get horizontalTotal() {
		return this.left + this.right;
	}
	get verticalTotal() {
		return this.top + this.bottom;
	}
	static createFromConfig(e) {
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : R;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return R;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Fe(e, t) {
	return t ? new L(t.top === !1 ? 0 : e.top, t.right === !1 ? 0 : e.right, t.bottom === !1 ? 0 : e.bottom, t.left === !1 ? 0 : e.left) : e;
}
var R = L.createUniformPadding(0);
Object.freeze(R);
//#endregion
//#region ../core/src/utils/url.js
var Ie = /^([A-Za-z]+:)?\/\//;
function z(e, t) {
	if (t && Ie.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return B(n) + t;
}
function Le(e, t, n = Re()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		} else if (n) return new URL(t, n).href;
	} catch {}
	return z(r, t);
}
function B(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function Re() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function ze(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function Be(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function V(e) {
	return n(e) && !Array.isArray(e);
}
function Ve(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = H(r);
	return t;
}
function H(e) {
	return Array.isArray(e) ? e.map(H) : V(e) ? Ve(e) : e;
}
function He(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		V(r) && V(t) ? He(t, r) : e[n] = H(r);
	}
	return e;
}
function Ue(e) {
	let t = {};
	for (let n of e) n && He(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/viewChrome.js
var U = /* @__PURE__ */ new WeakMap();
function We(e, t) {
	U.set(e, t);
}
function Ge(e) {
	return U.get(e);
}
function Ke(e) {
	return U.has(e);
}
function qe(e) {
	let t = e;
	for (; t;) {
		let n = U.get(t);
		if (n === "excludeSubtree" || t === e && n === "exclude") return !0;
		t = t.layoutParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/view/postScaleParams.js
var Je = /* @__PURE__ */ new WeakMap();
function Ye(e, t) {
	Je.set(e, t);
}
function Xe(e) {
	return Je.get(e);
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var Ze = class {
	name;
	owner;
	getDefaultData;
	#e;
	#t = !1;
	#n = 0;
	#r = !1;
	constructor(e, t, n) {
		this.name = e, this.owner = t, this.getDefaultData = n;
	}
	get disposed() {
		return this.#r;
	}
	beginUpdate() {
		if (this.#r) throw Error(`Named dataset "${this.name}" has been disposed.`);
		return ++this.#n;
	}
	isCurrentUpdate(e) {
		return !this.#r && e === this.#n;
	}
	getData() {
		if (this.#r) throw Error(`Named dataset "${this.name}" has been disposed.`);
		let e = this.#t ? this.#e : this.getDefaultData();
		if (e === void 0) return [];
		if (!Array.isArray(e)) throw Error(`Named data "${this.name}" is not an array!`);
		return e;
	}
	setData(e) {
		if (!Array.isArray(e)) throw Error(`Named data "${this.name}" is not an array!`);
		this.#e = e, this.#t = !0;
	}
	resetData() {
		this.#e = void 0, this.#t = !1;
	}
	dispose() {
		this.#e = void 0, this.#t = !1, this.#n++, this.#r = !0;
	}
}, Qe = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new Ze(t, e, () => n));
	}
	getLocalBinding(e) {
		return this.#e.get(e);
	}
	findDeclaredBinding(e) {
		return this.#e.get(e) || this.view.dataParent?.namedDataScope.findDeclaredBinding(e);
	}
	resolve(e) {
		let t = this.#e.get(e);
		if (t) return t;
		let n = this.view.dataParent?.namedDataScope;
		if (n) return n.resolve(e);
		let r = this.#t.get(e);
		return r || (r = new Ze(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, W = "VISIT_SKIP", G = "VISIT_STOP", K = (e) => e, $e = class {
	spec;
	namedDataScope;
	#e;
	#t;
	#n = {};
	#r = {};
	#i = {};
	#a;
	#o;
	#s = !1;
	#c = !1;
	#l = void 0;
	#u = !1;
	#d = [];
	opacityFunction = K;
	#f = [];
	#p = "none";
	#m = /* @__PURE__ */ new Map();
	facetCoords = new ne([], JSON.stringify);
	constructor(e, t, n, r, i, a = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, this.#t = i, this.spec = e, this.namedDataScope = new Qe(this), r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let o = r ? r.getConfigScopes() : [t.getBaseConfig()], c = e.config;
		this.#e = [...o, c].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, ie(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...a
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new w(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), t.animator, { snapTransitionedUpdates: !0 }), "mark" in e && this.paramRuntime.registerLazyExpression("zoomLevel", "zoomLevel()", () => ae("The automatic zoomLevel parameter is deprecated. Use zoomLevel() or an explicit channel such as zoomLevel(\"x\") instead."));
		let l = [...e.params ?? [], ...Xe(e) ?? []];
		for (let e of l) {
			if ("expr" in e) {
				let { usesScaleHelper: t, globals: n } = s(e.expr), r = n.some((e) => this.paramRuntime.isPendingParam(e));
				if (t || r) {
					this.paramRuntime.registerParam(e, { defer: !0 }), this.#d.push(e.name);
					continue;
				}
			}
			this.paramRuntime.registerParam(e);
		}
		this.options.layoutSizeParams !== "inherit" && (this.#a = this.#h("width"), this.#o = this.#h("height"));
	}
	#h(e) {
		if (!(this.paramRuntime.hasLocalParam(e) || this.options.layoutSizeParams != "force" && this.paramRuntime.hasConfiguredParamInScopeChain(e))) return this.paramRuntime.allocateSetter(e, 0);
	}
	get name() {
		return this.spec.name ?? this.#t;
	}
	get explicitName() {
		return this.spec.name;
	}
	getZindex() {
		return this.spec.zindex ?? 0;
	}
	get defaultName() {
		return this.#t;
	}
	getConfig() {
		return Ue(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return c(e) ? this.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		c(n) && this.paramRuntime.watchExpression(n.expr, e, {
			scopeOwned: !1,
			registerDisposer: t
		});
	}
	getConfigScopes() {
		return this.#e.slice();
	}
	get coords() {
		return this.facetCoords.values().next().value;
	}
	getPadding() {
		return this._cache("size/padding", () => L.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return L.zero();
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new E(this.#g("width"), this.#g("height")) : ke);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return ke;
		let e = this.getSize();
		return new E(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	#g(e) {
		let { value: t, implicit: n } = this.#_(e), r = this.resolveSizeValue(e, t), i = q(r), a = e == "viewportWidth" || e == "viewportHeight";
		if (i) {
			if (a) throw new y(`Cannot use step-based size with "${e}"!`, this);
			let t = this.#x(e, r), i = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (i) {
				let n;
				if (_(i.type)) n = i.domain().length;
				else if (["locus", "index"].includes(i.type)) {
					let e = i.domain();
					n = p(e) - e[0];
				} else throw new y(`Cannot use step-based size with "${i.type}" scale!`, this);
				let a = i;
				n = g(n, a.paddingInner(), a.paddingOuter());
				let o = e == "width" ? "xOffset" : "yOffset", s = this.getScaleResolution(o)?.getScale(), c = r.for ?? (s && _(s.type) ? "offset" : "position"), l = t;
				if (c == "offset") {
					if (!s || !_(s.type)) throw new y(`Cannot use ${e}.step.for = "offset" without a discrete ${o} scale!`, this);
					let t = s, n = g(s.domain().length, t.paddingInner(), t.paddingOuter());
					l *= n / (1 - a.paddingInner());
				}
				return {
					px: n * l,
					grow: 0
				};
			} else if (n) return {
				px: t,
				grow: 0
			};
			else throw new y(`Cannot use step-based size with "${e}"!`, this);
		} else return (r && Me(r)) ?? (a ? void 0 : {
			px: 0,
			grow: 1
		});
	}
	#_(e) {
		let t = this.spec[e];
		return t != null || e == "viewportWidth" || e == "viewportHeight" ? {
			value: t,
			implicit: !1
		} : {
			value: this.#v(e),
			implicit: !0
		};
	}
	#v(e) {
		if (qe(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let n = e == "width" ? "x" : "y", r = this.getScaleResolution(n)?.getResolvedScaleType();
		return r && !_(r) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (!c(t)) return t;
		let n = this.#C(e)();
		if (it(n) || n === "container") return n;
		throw new y(`"${e}" ExprRef must resolve to a finite number or "container"!`, this);
	}
	registerSizeInvalidation() {
		this.#y("width", "x"), this.#y("height", "y"), this.#b("width"), this.#b("height"), this.#b("viewportWidth"), this.#b("viewportHeight");
	}
	#y(e, t) {
		let { value: n, implicit: r } = this.#_(e);
		if (!q(n)) return;
		let i = this.getScaleResolution(t);
		if (!i) {
			if (r) return;
			throw new y("Cannot use 'step' size without a scale!", this);
		}
		let a = () => {
			let t = this.getSize()[e];
			this.invalidateSizeCache();
			let n = this.getSize()[e];
			Ae(t, n) || this.context.requestLayoutReflow();
		};
		if (i.addEventListener("domain", a), this.registerDisposer(() => i.removeEventListener("domain", a)), n.for != "position") {
			let t = e == "width" ? "xOffset" : "yOffset", n = this.getScaleResolution(t);
			n && _(n.getResolvedScaleType()) && (n.addEventListener("domain", a), this.registerDisposer(() => n.removeEventListener("domain", a)));
		}
	}
	#b(e) {
		let { value: t } = this.#_(e);
		c(t) ? this.#S(e, t.expr) : q(t) && c(t.step) && this.#S(e + ".step", t.step.expr);
	}
	#x(e, t) {
		let n = c(t.step) ? this.#C(e + ".step")() : t.step;
		if (it(n)) return n;
		throw new y(`"${e}.step" ExprRef must resolve to a finite number!`, this);
	}
	#S(e, t) {
		if (!this.#m.has(e)) {
			let n = this.paramRuntime.watchExpression(t, () => {
				this.invalidateSizeCache(), this.context.requestLayoutReflow();
			});
			this.#m.set(e, n);
		}
	}
	#C(e) {
		let t = this.#m.get(e);
		if (!t) throw new y(`"${e}" ExprRef was not registered before layout!`, this);
		return t;
	}
	isConfiguredVisible() {
		return this.context.isViewConfiguredVisible(this);
	}
	isVisibleInSpec() {
		return this.spec.visible ?? !0;
	}
	isVisible() {
		return this.getLayoutAncestors().every((e) => e.isConfiguredVisible());
	}
	isDomainInert() {
		if (this.spec.domainInert) return !0;
		let e = this.dataParent;
		return e ? e.isDomainInert() : !1;
	}
	getDataInitializationState() {
		return this.#p;
	}
	_setDataInitializationState(e) {
		this.#p = e;
	}
	isDataInitialized() {
		return this.#p === "ready";
	}
	getEffectiveOpacity() {
		return this.opacityFunction(this.layoutParent?.getEffectiveOpacity() ?? 1);
	}
	getOpacity() {
		return this.opacityFunction(1);
	}
	hasLocalOpacity() {
		return this.opacityFunction !== K;
	}
	getPathString() {
		return this.getLayoutAncestors().map((e) => e.name).reverse().join("/");
	}
	#w(e) {
		let t = [], n = this;
		do
			t.push(n), n = n[e];
		while (n);
		return t;
	}
	getLayoutAncestors() {
		return this.#w("layoutParent");
	}
	getDataAncestors() {
		return this.#w("dataParent");
	}
	handleBroadcast(e) {
		for (let t of this.#n[e.type] || []) t(e);
	}
	_addBroadcastHandler(e, t) {
		let n = this.#n[e];
		return n || (n = [], this.#n[e] = n), n.push(t), () => {
			let n = this.#n[e];
			if (!n) return;
			let r = n.indexOf(t);
			r >= 0 && n.splice(r, 1);
		};
	}
	handleInteraction(e, t) {
		t && e.type === "mousemove" && e.pointedViews.add(this);
		let n = t ? this.#r : this.#i;
		for (let t of n[e.type] || []) t(e);
	}
	addInteractionListener(e, t, n) {
		let r = n ? this.#r : this.#i, i = r[e];
		i || (i = [], r[e] = i), i.push(t);
	}
	removeInteractionListener(e, t, n) {
		let r = (n ? this.#r : this.#i)?.[e];
		if (r) {
			let e = r.indexOf(t);
			e >= 0 && r.splice(e, 1);
		}
	}
	visit(e) {
		try {
			let t = e(this);
			if (e.postOrder && e.postOrder(this), t !== "VISIT_STOP") return t;
		} catch (e) {
			throw e.view = this, e;
		}
	}
	getDescendants() {
		let e = [];
		return this.visit((t) => {
			e.push(t);
		}), e;
	}
	dispose() {
		for (let e of this.#f) e();
		this.#f.length = 0;
		let e = this.flowHandle;
		e?.collector && (this.context.dataFlow.pruneCollectorBranch(e.collector), this.context.dataFlow.removeCollector(e.collector)), e?.dataSource && e.dataSource.view === this && !e.dataSource.shareKey && this.context.dataFlow.removeDataSource(e.dataSource), this.paramRuntime.dispose(), this.namedDataScope.dispose(), this.context.dataFlow.loadingStatusRegistry.delete(this), this.flowHandle = void 0;
	}
	registerDisposer(e) {
		this.#f.push(e);
	}
	disposeSubtree() {
		let e = () => void 0;
		e.postOrder = (e) => {
			e.dispose();
		}, this.visit(e);
	}
	configurePostScaleParams() {
		let e = this.#d;
		if (e.length && !this.#u) {
			this.#u = !0, this.#l = !1;
			for (let t of e) this.paramRuntime.getValue(t);
			this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				this.#l = !0, this.#T();
			}));
		}
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === K) && (this.opacityFunction = tt(this));
	}
	finalizeParamRuntimeInitialization() {
		this.#l === void 0 ? this.paramRuntime.finalizeInitialization() : this.#T();
	}
	onBeforeRender() {
		this.#s ||= !0;
	}
	hasRendered() {
		return this.#s;
	}
	arrange(e, t, n = {}) {
		if (n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, d(t, l(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? L.zero() : this.getPadding();
			this.#a?.(t.width - e.width - n.width), this.#o?.(t.height - e.height - n.height);
		}
		this.#c = !0, this.#T();
	}
	#T() {
		this.#l && this.#c && (this.#l = void 0, this.paramRuntime.finalizeInitialization());
	}
	getEncoding() {
		let e = this.dataParent && this.options.inheritEncoding ? this.dataParent.getEncoding() : {}, t = this.spec.encoding || {}, n = {
			...e,
			...t
		};
		for (let [e, t] of Object.entries(n)) t === null && delete n[e];
		return n;
	}
	getFacetAccessor(e) {
		if (this.layoutParent) return this.layoutParent.getFacetAccessor(this);
	}
	getFacetFields(e) {
		let t = this.getEncoding().sample;
		return ee(t) ? [t.field] : this.options.inheritEncoding ? this.layoutParent?.getFacetFields(this) : [];
	}
	usesSampleFacetRendering() {
		return this.layoutParent?.usesSampleFacetRendering() ?? !1;
	}
	getParentGridChromePolicy() {
		return {
			axes: !0,
			background: !0
		};
	}
	getScaleResolution(e) {
		let t = m(e);
		return this.getDataAncestors().map((e) => e.resolutions.scale[t]).find((e) => e);
	}
	getAxisResolution(e) {
		let t = m(e);
		return this.getDataAncestors().map((e) => e.resolutions.axis[t]).find((e) => e);
	}
	getLegendResolution(e) {
		let t = m(e);
		return this.getDataAncestors().map((e) => e.resolutions.legend[t]).find((e) => e);
	}
	getConfiguredResolution(e, t) {
		return this.spec.resolve?.[t]?.[e];
	}
	getConfiguredOrDefaultResolution(e, t) {
		return (this.getConfiguredResolution(e, t) ?? this.getConfiguredResolution("default", t)) || (t == "legend" ? this.getConfiguredOrDefaultResolution(e, "scale") : this.getDefaultResolution(e, t));
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
	getBaseUrl() {
		return z(() => this.dataParent?.getBaseUrl(), Be(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return o(e) ? e : c(e.text) ? this.paramRuntime.evaluateAndGet(e.text.expr) : e.text;
	}
	_cache(e, t) {
		return re(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				v(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) v(t, e);
				break;
			case "progeny":
				this.visit((t) => v(t, e));
				break;
			default:
		}
	}
	invalidateSizeCache() {
		v(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function et(e) {
	return "unitsPerPixel" in e;
}
function tt(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (u(t)) return (e) => e * t;
		if (et(t)) {
			let n = (t) => {
				let n = e.getScaleResolution(t), r = n?.getScale();
				if ([
					"linear",
					"index",
					"locus"
				].includes(r?.type)) return {
					scale: r,
					scaleResolution: n
				};
			}, r = rt(t.values, "opacity.values", e);
			if (!a(t.unitsPerPixel)) throw new y("\"opacity.unitsPerPixel\" must be an array.", e);
			let i = () => 1, o = [], s = () => {
				let t = nt(rt(o.map((e) => e()), "opacity.unitsPerPixel", e), r, e), n = te().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				i = (e) => n(e);
			};
			o = t.unitsPerPixel.map((t) => {
				if (c(t)) {
					let n = e.paramRuntime.watchExpression(t.expr, () => {
						s(), e.context.animator.requestRender();
					});
					return () => n(null);
				} else return () => t;
			}), s();
			let l = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return f(e.scale.domain()) / t;
			}, u;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) u = () => (l(t) + l(r)) / 2;
				else if (t) u = () => l(t);
				else if (r) u = () => l(r);
				else throw new y("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new y("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				u = () => l(r);
			}
			return (e) => i(u()) * e;
		} else if (c(t)) {
			let n = e.paramRuntime.watchExpression(t.expr, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return K;
}
function nt(e, t, n) {
	if (!e.length) throw new y("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new y("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new y("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new y("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function rt(e, t, n) {
	if (!a(e)) throw new y("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!u(e) || !Number.isFinite(e)) throw new y("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var q = (e) => !!e && typeof e == "object" && "step" in e;
function it(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var J = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap();
function at(e, t) {
	st(e, t, "Import");
}
function ot(e, t) {
	st(e, t, "View");
}
function st(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	J.set(e, { name: t });
}
function ct(e) {
	return J.get(e);
}
function lt(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Y.set(e, n);
}
function ut(e, t = {}) {
	We(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function dt(e) {
	return e.getLayoutAncestors().some(Ke);
}
function X(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = J.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function ft(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: X(e),
		view: t
	};
}
function pt(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: X(e),
		param: t
	};
}
function mt(e) {
	return St(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function ht(e, t) {
	e.visit((e) => {
		let n = Ge(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function gt(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function _t(e, t) {
	if (Ct(t), !jt(e, t.scope)) return;
	let n = [];
	if (Q(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function vt(e, t) {
	if (St(t), !jt(e, t.scope)) return;
	let n = [];
	if (Q(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Z(i) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function yt(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Z(r) && t({
			view: e,
			param: r,
			selector: pt(e, n)
		});
	});
}
function bt(e) {
	let t = [];
	return yt(e, (e) => t.push(e)), t;
}
function xt(e) {
	let t = [];
	for (let n of wt(e)) {
		let r = Tt(n);
		Dt(e, r, t), Ot(e, r, t);
	}
	return t;
}
function St(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function Ct(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Z(t) {
	return t.persist === !1 ? !1 : i(t) ? !0 : e(t) ? !!t.bind : !1;
}
function wt(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = J.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function Tt(e) {
	return X(e);
}
function Et(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function Dt(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	Q(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!Z(n)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + Et(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function Ot(e, t, n) {
	let r = kt(e, t);
	if (!r.length) return;
	let i = r.filter((e) => At(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = J.get(e), n = t ? t.name : void 0;
		typeof n != "string" || !n.length || a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + Et(t) + ".",
		scope: t
	});
}
function kt(e, t) {
	let n = [];
	return Q(e, t, (e) => {
		if (X(e).length !== t.length + 1) return;
		let r = J.get(e);
		!r || typeof r.name != "string" || n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function At(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Z(n)) return t = !0, G;
		}
	}), t;
}
function jt(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if (Q(e, r, (e) => {
			let n = J.get(e);
			if (!(!n || n.name !== i) && X(e).length === r.length + 1) {
				if (t) return a = !0, G;
				t = e;
			}
		}, { includeNamedImportRoots: !0 }), a) throw Error("Multiple import instances named \"" + i + "\" in scope.");
		if (t) n = t, r.push(i);
		else return;
	}
	return n;
}
function Q(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = J.get(e), a = Y.get(e);
		if (a === "excludeSubtree") return W;
		if (a !== "exclude" && Mt(e, t, r, i)) return n(e);
	});
}
function Mt(e, t, n, r) {
	let i = X(e);
	return Nt(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : $(t, i);
}
function Nt(e, t) {
	return e.length === t.length && $(e, t);
}
function $(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
export { E as A, w as B, Ue as C, Le as D, B as E, M as F, b as G, C as H, we as I, Me as L, De as M, Te as N, L as O, N as P, Oe as R, qe as S, z as T, ve as U, be as V, ye as W, W as _, ft as a, Ye as b, ut as c, ot as d, vt as f, ht as g, gt as h, X as i, D as j, Fe as k, lt as l, xt as m, ct as n, dt as o, _t as p, pt as r, mt as s, bt as t, at as u, G as v, ze as w, Ke as x, $e as y, Ee as z };
