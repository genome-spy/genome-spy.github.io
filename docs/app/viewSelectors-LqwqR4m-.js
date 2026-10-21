import { E as e, m as t, y as n } from "./vega-scale-BVfPgT2e.js";
import { Dn as r, G as i, K as a, Ln as o, S as s, Xt as c, dn as l, f as u, fn as d, g as f, h as p, l as m, o as ee, p as h, sn as te, t as ne, un as g, ut as _, vn as re, y as v, yt as ie } from "./clipOptions-BKK6zTuk.js";
import { a as y, n as ae, r as oe, t as b } from "./viewError-C6VTtAWX.js";
import { t as se } from "./warning-CpIIpk8e.js";
//#region ../../node_modules/flatqueue/index.js
var x = class {
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
				let n = (a << 1) + 1, o = n + 1, s = n + (+(o < r) & t[o] < t[n]);
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
}, S = Symbol("runtimeNode"), ce = 1e6;
function le(e) {
	return e ? (t, n) => e.addDisposer(t, n) : () => () => void 0;
}
function ue(e, t, n = !0) {
	let r = {
		id: e.id,
		name: e.name,
		kind: e.kind,
		batchStable: n,
		get() {
			return e.value;
		},
		subscribe(t) {
			return e.listeners.add(t), () => {
				e.listeners.delete(t);
			};
		}
	};
	return Object.defineProperty(r, S, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(r, { set(e) {
		t(e);
	} }) : r;
}
function de(e) {
	let t = e[S];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function fe(e) {
	return typeof e.rank == "number" ? e.rank : de(e).rank;
}
function pe(e) {
	for (let t of e) t();
}
var me = class {
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
	#p = new x();
	#m = new x();
	#h = /* @__PURE__ */ new Set();
	#g;
	#_;
	constructor(e = {}) {
		this.#g = le(e.lifecycleRegistry), this.#_ = e.onError;
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
			e !== s.value && (s.value = e, o && this.#y(s.listeners));
		}, l = () => {
			s.disposed = !0, s.listeners.clear(), u();
		}, u = this.#g(e, l);
		return Object.assign(ue(s, c, o), { dispose: l });
	}
	computed(e, t, n, r, i = {}) {
		return this.#v(e, t, n, r, i);
	}
	operation(e, t, n, r, i, a = {}) {
		return this.#v(e, t, n, r, a, i);
	}
	#v(e, t, n, r, i, a) {
		let o = this.#S(() => s.dependencies), s = {
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
			s.disposed || (this.#C(s), e.propagation === "sync" && this.flushNow());
		})), l = c(), u = () => {
			s.disposed || (s.disposed = !0, d(), l.forEach((e) => e()), s.listeners.clear(), this.#d.delete(s));
		}, d = this.#g(e, u);
		return Object.assign(ue(s), {
			dispose: u,
			rebind: (e, n) => {
				if (s.disposed) throw Error("Cannot rebind disposed operation: " + t);
				let r = /* @__PURE__ */ new Set(), i = (e) => {
					let n = e[S];
					if (n === s) throw Error("Reactive dependency cycle: " + t);
					if (!r.has(n)) {
						r.add(n);
						for (let e of n?.dependencies ?? []) i(e);
					}
				};
				e.forEach(i), l.forEach((e) => e()), s.dependencies = e, s.fn = n, this.#n++, l = c(), this.#C(s), this.#p.clear();
				for (let e of this.#d) this.#p.push(e, this.#T(e.rank));
				this.#m.clear();
				for (let e of this.#f) this.#m.push(e, this.#T(e.rank));
			}
		});
	}
	effect(e, t, n) {
		let r = this.#S(() => t), i = {
			id: "n" + this.#e++,
			get rank() {
				return r();
			},
			disposed: !1,
			fn: n
		}, a = t.map((e) => e.subscribe(() => {
			i.disposed || (this.#w(i), e.propagation === "sync" && this.flushNow());
		})), o = () => {
			i.disposed || (i.disposed = !0, s(), a.forEach((e) => e()), this.#f.delete(i));
		}, s = this.#g(e, o);
		return o;
	}
	runInTransaction(e) {
		this.#r += 1;
		let t = !1;
		try {
			let n = e();
			return t = !0, n;
		} finally {
			--this.#r, this.#r === 0 && (t ? this.#i ? (this.#i = !1, this.flushNow()) : this.#E() : this.#i = !1);
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
					this.#x(e, e.name);
					let t, n;
					try {
						t = e.fn(), n = !e.equals(t, e.value), n && e.apply?.(t);
					} catch (t) {
						throw this.#C(e), t;
					}
					n && (e.value = t, this.#y(e.listeners));
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
					t = this.#l.get(n).onError, this.#l.delete(n), this.#x(n, "streaming update"), n(), t = void 0;
				} else if (this.#m.length) {
					let e = this.#m.pop();
					this.#f.delete(e), e.disposed || (this.#x(e, "effect " + e.id), e.fn());
				}
			}
		} catch (e) {
			throw this.#b(e, t), e;
		} finally {
			this.#u.clear(), this.#o = !1, this.#O();
		}
	}
	requestUpdate(e, t = 0, n, r) {
		this.#l.set(e, {
			rank: t,
			onError: n,
			prerequisites: r
		}), this.#E();
	}
	cancelUpdate(e) {
		this.#l.delete(e);
	}
	#y(e) {
		this.#s++;
		try {
			pe(e);
		} catch (e) {
			throw this.#c = !1, !this.#o && this.#s === 1 && this.#b(e), e;
		} finally {
			this.#s--, !this.#s && this.#c && (this.#c = !1, this.flushNow());
		}
	}
	#b(e, t) {
		this.#a = !1;
		let n = Array.from(this.#l.values());
		this.#l.clear(), t?.(e);
		for (let t of n) t.onError?.(e);
		for (let t of this.#h) t.reject(e);
		this.#h.clear();
		try {
			this.#_?.(e);
		} catch (e) {
			console.error(e);
		}
	}
	#x(e, t) {
		let n = (this.#u.get(e) ?? 0) + 1;
		if (n > 100) throw Error("Reactive propagation did not settle: " + t);
		this.#u.set(e, n);
	}
	whenPropagated(e = {}) {
		if (this.#D()) return Promise.resolve();
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
	#S(e) {
		let t = -1, n = 0;
		return () => (t !== this.#n && (n = 1 + e().reduce((e, t) => Math.max(e, fe(t)), 0), t = this.#n), n);
	}
	#C(e) {
		this.#d.has(e) || (this.#d.add(e), this.#p.push(e, this.#T(e.rank))), this.#E();
	}
	#w(e) {
		this.#f.has(e) || (this.#f.add(e), this.#m.push(e, this.#T(e.rank))), this.#E();
	}
	#T(e) {
		let t = this.#t % ce;
		return this.#t += 1, e * ce + t;
	}
	#E() {
		this.#r > 0 || this.#a || this.#o || (this.#a = !0, queueMicrotask(() => {
			this.#a && this.flushNow();
		}));
	}
	#D() {
		return this.#r === 0 && !this.#a && !this.#o && this.#p.length === 0 && this.#m.length === 0 && this.#d.size === 0 && this.#f.size === 0 && this.#l.size === 0;
	}
	#O() {
		if (this.#D()) {
			for (let e of this.#h) e.resolve();
			this.#h.clear();
		}
	}
}, he = class {
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
}, ge = class {
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
	registerInitializer(e, t, n) {
		v(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t) || r.initializers.has(t)) throw Error(`Parameter "${t}" already exists in scope ${e}`);
		r.initializers.set(t, {
			initialize: n,
			initializing: !1
		});
	}
	register(e, t, n) {
		v(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t) || r.initializers.get(t)?.initializing === !1) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		v(t);
		let n = e;
		for (; n;) {
			let e = this.#t.get(n);
			if (!e) throw Error("Unknown scope: " + n);
			let r = e.initializers.get(t);
			if (r) {
				if (r.initializing) throw Error(`Parameter dependency cycle while initializing "${t}" in ${n}.`);
				r.initializing = !0;
				try {
					if (r.initialize(), !e.params.has(t)) throw Error(`Initializer did not register parameter "${t}".`);
					e.initializers.delete(t);
				} finally {
					r.initializing = !1;
				}
			}
			let i = e.params.get(t);
			if (i) return i;
			n = e.parentScope;
		}
	}
};
//#endregion
//#region ../core/src/paramRuntime/expressionCompiler.js
function _e(e, t = {}, n = {}) {
	return a(e, t, n);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function C(e, t, n = {}) {
	let r = {}, i = _e(e, r, n), a = /* @__PURE__ */ new Map();
	try {
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
	} catch (e) {
		throw c(e, n.specLocation);
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
	}, i.createSnapshotEvaluator = () => {
		let e = {};
		for (let t of Object.keys(r)) a.has(t) || (e[t] = r[t]);
		for (let [t, n] of a) n.batchStable || Object.defineProperty(e, t, {
			enumerable: !0,
			get: () => n.get()
		});
		let t = Object.assign(i.createEvaluator(e), { refresh() {
			for (let [t, n] of a) n.batchStable && (e[t] = n.get());
		} });
		return t.refresh(), t;
	}, i.identifier = () => i.code + "|" + Array.from(a.values()).map((e) => e.id).concat((i.scaleDependencies ?? []).map((e) => e.id)).join(","), i.dependencies = Array.from(a.values()).concat(i.scaleDependencies ?? []), {
		expression: i,
		dependencies: i.dependencies
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramRuntime.js
var ve = class {
	#e = new he();
	#t;
	#n = new ge();
	constructor(e = {}) {
		this.#t = new me({
			lifecycleRegistry: this.#e,
			onError: e.onError
		});
	}
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
		let { expression: i, dependencies: a } = C(n, (t) => this.resolve(r?.expressionScope ?? e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = C(t, (t) => this.resolve(e, t), n);
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
}, ye = (e) => new Promise((t) => setTimeout(t, e));
function be() {
	return { canceled: !1 };
}
function xe(e) {
	let t = e.requestAnimationFrame || window.requestAnimationFrame, n = e.signal, r = e.cancelToken, i = () => new Promise((i, a) => {
		if (r?.canceled) return i();
		if (n?.aborted) return a("aborted");
		let o = performance.now(), s = o + (e.duration || 1e3), c = typeof e.from == "number" ? e.from : 0, l = typeof e.to == "number" ? e.to : 1, u = e.easingFunction || ((e) => e), d = (e) => (e - o) / (s - o), f = (e) => e * (l - c) + c, p = (e) => Math.max(0, Math.min(1, e)), m = (o) => {
			r?.canceled ? i() : n?.aborted ? a("aborted") : (e.onUpdate(f(u(p(d(o))))), o < s ? t(m) : (e.onUpdate(f(u(1))), i()));
		};
		t(m);
	});
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : ye(e.delay).then(i) : i();
}
//#endregion
//#region ../core/src/utils/animator.js
var Se = class {
	constructor(e, t) {
		this._renderCallback = e, this._onError = t, this._renderRequested = !1, this._finalized = !1, this._warn = !1, this._animationFrameRequest = void 0, this.transitions = [], this.transitionsEnabled = !0;
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
			try {
				let n;
				for (; n = t.shift();) n(e);
				this._finalized || this._renderCallback(e);
			} catch (e) {
				if (!this._onError) throw e;
				this._onError(e);
			}
		})));
	}
	finalize() {
		this._finalized = !0, this._renderRequested = !1, this.transitions = [], this._animationFrameRequest !== void 0 && (window.cancelAnimationFrame(this._animationFrameRequest), this._animationFrameRequest = void 0);
	}
	transition(e) {
		return xe({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function Ce(e, t, n, r, i) {
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
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = we(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function we() {
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
	#s;
	#c = /* @__PURE__ */ new Map();
	#l = /* @__PURE__ */ new Map();
	#u = /* @__PURE__ */ new Map();
	#d;
	#f;
	#p;
	#m;
	#h;
	#g = !1;
	constructor(e, t, n, r = {}) {
		this.#d = e ?? (() => void 0), this.#f = t ?? (() => void 0), this.#p = n, this.#h = r.getSpecOrigin, this.#m = r.settleTemporalUpdatesImmediately ?? !1;
		let i = this.#d();
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new ve({ onError: r.onError }), this.#t = this.#e.createScope());
	}
	setSelectionSource(e) {
		this.#s = e;
	}
	findSelectionCapability(e) {
		let t = this.findRuntimeForParam(e), n = t && t.#c.get(e);
		if (!n?.size) return;
		let r = Array.from(n, (t) => ({
			type: t.kind,
			components: t.components.map((e) => ({
				component: e,
				type: t.source?.getScaleResolution(e)?.type
			})),
			location: t.source?.name ?? e
		})), i = r[0], a = JSON.stringify(i.components), o = r.find(({ components: e }) => JSON.stringify(e) !== a);
		if (o) throw Error(`Conflicting selection declarations for "${e}" in "${i.location}" and "${o.location}".`);
		return i;
	}
	#_(e) {
		if (!("select" in e)) return;
		let t = s(e.select), n = t.type === "interval" ? "interval" : t.toggle ? "multi" : "single", r = t.type === "interval" ? Array.from(new Set(t.encodings)).sort() : [], i = e.push === "outer" ? this.findRuntimeForParam(e.name) : this, a = {
			kind: n,
			components: r,
			source: this.#s
		}, o = i.#c.get(e.name) ?? /* @__PURE__ */ new Set(), c = o.values().next().value;
		if (c && (c.kind !== n || JSON.stringify(c.components) !== JSON.stringify(r))) throw Error(`Conflicting selection declarations for "${e.name}" in "${c.source?.name ?? e.name}" and "${this.#s?.name ?? e.name}".`);
		o.add(a), i.#c.set(e.name, o), this.#e.addScopeDisposer(this.#t, () => {
			o.delete(a);
		});
	}
	#v(e) {
		return {
			resolveScaleResolution: this.#f,
			specLocation: this.getSpecLocation(e, ["expr"])
		};
	}
	registerParam(e, t = {}) {
		let n = e.name;
		try {
			v(n);
		} catch (t) {
			throw c(t, this.getSpecLocation(e, ["name"]));
		}
		if (this.#i.has(n) || this.#a.has(n)) throw c(/* @__PURE__ */ Error("Parameter \"" + n + "\" already registered in this scope."), this.getSpecLocation(e, ["name"]));
		if (Ee(e), t.defer) {
			if (!("expr" in e)) throw Error("Only expression parameters can be deferred.");
			return this.#e.registerInitializer(this.#t, n, () => {
				this.#y(e);
			}), this.#i.set(n, e), () => {
				throw Error("Cannot set derived parameter \"" + n + "\".");
			};
		}
		return this.#y(e);
	}
	registerLazyExpression(e, t, n) {
		this.#e.registerInitializer(this.#t, e, () => {
			n?.();
			let r = this.#e.registerDerived(this.#t, e, t, this.#v());
			this.#r.set(e, r);
		}), this.#a.add(e);
	}
	registerScopedExpression(e, t, n) {
		if (this.#e !== n.#e) throw Error("Scoped expressions must share a parameter runtime.");
		if (this.#i.has(e)) throw Error("Parameter \"" + e + "\" already registered in this scope.");
		this.#e.registerInitializer(this.#t, e, () => {
			let r = this.#e.registerDerived(this.#t, e, t, {
				expressionScope: n.#t,
				...n.#v()
			});
			this.#r.set(e, r);
		}), this.#i.set(e, {
			name: e,
			expr: t
		});
	}
	#y(e) {
		let t = e.name, n, r;
		if (e.push == "outer") {
			let i = this.findRuntimeForParam(t);
			if (!i) throw c(/* @__PURE__ */ Error(`Parameter "${t}" not found in outer scope!`), this.getSpecLocation(e, ["name"]));
			let a = i.paramConfigs.get(t);
			if (!a) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a || "ruler" in a) throw Error(`The outer parameter "${t}" must not have expr, select, or ruler properties!`);
			n = (e) => {
				i.setValue(t, e);
			}, this.#n.set(t, n), "ruler" in e && (r = u(e, this), n(r));
		} else if ("value" in e) r = u(e, this), n = "transition" in e ? this.#x(t, r, e.transition) : this.#b(t, r);
		else if (h(e)) {
			if ("transition" in e) this.#S(t, e, e.transition);
			else if ("debounce" in e) this.#C(t, e, e.debounce);
			else {
				let n = this.#e.registerDerived(this.#t, t, e.expr, this.#v(e));
				this.#r.set(t, n);
			}
			n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = u(e, this), n = this.#b(t, r);
		if ("select" in e) {
			if (r ??= u(e, this), !this.#n.has(t)) {
				let e = this.#e.registerSelection(this.#t, t, r);
				this.#r.set(t, e), this.#n.set(t, (t) => {
					e.set(t), this.#e.flushNow();
				}), n = this.#n.get(t);
			}
			n(r);
		}
		return this.#i.set(t, e), this.#_(e), n;
	}
	allocateSetter(e, t, n = !1) {
		if (v(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#r.set(e, r);
		let i = (e) => {
			r.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, i), i;
	}
	setValue(e, t, n) {
		v(e);
		let r = this.#n.get(e);
		if (!r) throw Error("Writable parameter not found in this scope: " + e);
		r(t, n);
	}
	getValue(e) {
		return !this.#r.has(e) && this.hasLocalParam(e) && this.#e.resolve(this.#t, e), this.#r.get(e)?.get();
	}
	getParamRef(e) {
		v(e);
		let t = this.findRuntimeForParam(e);
		if (t) return t.#r.has(e) || t.#e.resolve(t.#t, e), t.#r.get(e);
	}
	getTargetValue(e) {
		return v(e), this.#l.get(e)?.target ?? this.#u.get(e)?.target ?? this.getValue(e);
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
		v(e);
		let t = this.#i.get(e);
		return this.#r.has(e) || this.#a.has(e) || t !== void 0 && "expr" in t;
	}
	isPendingParam(e) {
		let t = this.findRuntimeForParam(e);
		return t !== void 0 && !t.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return v(e), this.#i.has(e) ? !0 : this.#d()?.hasConfiguredParamInScopeChain(e) ?? !1;
	}
	findRuntimeForParam(e) {
		return this.hasLocalParam(e) ? this : this.#d()?.findRuntimeForParam(e);
	}
	findConfiguredParam(e) {
		let t = this.#i.get(e);
		return t ? {
			runtime: this,
			config: t
		} : this.#d()?.findConfiguredParam(e);
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
				kind: Te(r),
				value: n.get(),
				writable: this.#n.has(t),
				configured: !!r,
				config: r ? structuredClone(r) : void 0,
				target: this.#l.get(t)?.target ?? this.#u.get(t)?.target
			});
		}
		return {
			scopeId: this.#t,
			disposed: this.#g,
			params: e
		};
	}
	getSpecLocation(e, t) {
		return m(e, this.#h, t);
	}
	createExpression(e) {
		return this.#e.createExpression(this.#t, typeof e == "string" ? e : e.expr, this.#v(typeof e == "string" ? void 0 : e));
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
	#b(e, t) {
		let n = this.#e.registerBase(this.#t, e, t);
		this.#r.set(e, n);
		let r = (e) => {
			n.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, r), r;
	}
	#x(e, t, n) {
		let r = this.#w(e, t, n), i = (t, n) => {
			this.#T(e, r, t, n);
		};
		return this.#n.set(e, i), i;
	}
	#S(e, t, n) {
		let r = this.createExpression(t), i = this.#w(e, r(null), n), a = r.subscribe(() => {
			this.#T(e, i, r(null), { animate: !this.#m });
		});
		this.#e.addScopeDisposer(this.#t, a);
	}
	#C(e, t, n) {
		let r = this.createExpression(t), i = r(null), a = this.#e.registerBase(this.#t, e, i);
		this.#r.set(e, a);
		let o = {
			target: i,
			timeout: void 0
		}, s = () => {
			o.timeout = void 0, a.set(o.target), this.#e.flushNow();
		}, c = r.subscribe(() => {
			o.target = r(null), clearTimeout(o.timeout), o.timeout = void 0, o.target !== a.get() && (this.#m ? s() : o.timeout = setTimeout(s, n));
		});
		this.#u.set(e, o), this.#e.addScopeDisposer(this.#t, () => {
			clearTimeout(o.timeout), c(), this.#u.delete(e);
		});
	}
	#w(e, t, n) {
		let r = T(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#r.set(e, i);
		let a = this.#p;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = Ce(a, ({ value: e }) => {
			i.set(e), this.#e.flushNow();
		}, n.halfLife ?? 80, n.epsilon ?? .01, { value: i.get() }), s = {
			target: i.get(),
			smoother: o,
			dispose: () => {
				o.stop(), this.#l.delete(e);
			}
		};
		return this.#l.set(e, s), this.#e.addScopeDisposer(this.#t, s.dispose), s;
	}
	#T(e, t, n, r = {}) {
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
		this.#m = !1;
	}
	dispose() {
		this.#g || (this.#g = !0, this.#e.disposeScope(this.#t), this.#n.clear(), this.#r.clear(), this.#i.clear(), this.#a.clear(), this.#o.clear(), this.#l.clear(), this.#u.clear());
	}
	hasPointSelections({ inherited: e = !1 } = {}) {
		for (let t = this; t; t = e ? t.#d() : void 0) for (let n of t.#i.values()) if (p(n) && (n.select === "point" || typeof n.select == "object" && n.select.type === "point") && (!e || this.findConfiguredParam(n.name).config === n)) return !0;
		return !1;
	}
};
function Te(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function Ee(e) {
	let t = e.name;
	if ("value" in e && "expr" in e) throw Error(`The parameter "${t}" must not have both value and expr properties!`);
	if ("expr" in e && "bind" in e) throw Error(`The parameter "${t}" must not have both expr and bind properties!`);
	if ("debounce" in e) {
		if (!("expr" in e) || e.push === "outer") throw Error(`The debounced parameter "${t}" must have an expr property and must not use push.`);
		if ("transition" in e) throw Error(`The parameter "${t}" must not use debounce and transition together.`);
		if (!Number.isFinite(e.debounce) || e.debounce < 0) throw Error(`The debounce for parameter "${t}" must be a non-negative finite number.`);
	}
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
function De(e, t, n = {}) {
	let { sizes: r } = A(e, t, n.spacing || 0);
	return Oe(e, r, t, n);
}
function Oe(e, t, n, { spacing: r, devicePixelRatio: i, offset: a, reverse: o } = {}) {
	r ||= 0, a ||= 0;
	let s = 0, c = 0;
	for (let n = 0; n < e.length; n++) s += t[n], O(e[n]) || c++;
	let l = s + Math.max(0, c - 1) * r, u = i === void 0 ? (e) => e : (e) => Math.round(e * i) / i, d = 0, f = [], p = (e) => {
		let t = d;
		if (!t) return;
		let n = (e ? r : 0) * (o ? -1 : 1);
		m -= n;
		for (let e = 0; e < t; e++) f.push({
			location: m + (e + 1) / (t + 1) * n,
			size: 0
		});
		m += n, d = 0;
	}, m = o ? Math.max(n, l) : 0 + a;
	if (e.length == 1 && O(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let n = 0; n < e.length; n++) {
		let i = e[n];
		if (O(i)) d++;
		else {
			p(f.length > 0);
			let e = t[n];
			o && (m -= e), f.push({
				location: u(m),
				size: u(e)
			}), o ? m -= r : m += e + r;
		}
	}
	return m += o ? r : -r, p(!1), f;
}
function ke(e, { spacing: t } = { spacing: 0 }) {
	let n = 0;
	for (let r of e) n += N(r) + (O(r) ? 0 : t);
	return Math.max(0, n - t);
}
function Ae(e, t, { spacing: n = 0 } = {}) {
	let r = [], i = [], a = 0, o = 0;
	for (let [s, c] of e.entries()) {
		let e = N(c), l = !O(c), u = o && l ? n : 0;
		i.length && a + u + e > t && (r.push(i), i = [], a = 0, o = 0), i.push(s), a += (o && l ? n : 0) + e, o += +!!l;
	}
	return i.length && r.push(i), r;
}
function je(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, N(o));
		let e = P(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return L({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function Me(e, t = 0, n = 0) {
	let r = Math.max(0, e.length - 1) * t, i = {
		px: r,
		grow: e.length ? 0 : n,
		minPx: r,
		maxPx: r
	}, a = e.length > 0;
	for (let t of e) {
		i.px += k(t.px), i.grow += k(t.grow), i.minPx += N(t);
		let e = P(t);
		e === void 0 ? a = !1 : i.maxPx += e;
	}
	return a || delete i.maxPx, L(i);
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
		return new e(I(this.width, t), I(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, Ne = Object.freeze({
	px: 0,
	grow: 0
}), D = new E(Ne, Ne);
function O(e) {
	return !e.px && !e.grow && !e.minPx;
}
function Pe(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function k(e) {
	return e || 0;
}
function Fe(e) {
	return e && (g(e.px) || g(e.grow) || g(e.minPx) || g(e.maxPx));
}
function Ie(e) {
	if (q(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (Fe(e)) return j(e), L(e);
	if (g(e)) return {
		px: e,
		grow: 0
	};
	if (e === "container" || !e) return {
		px: 0,
		grow: 1
	};
	throw Error(`Invalid sizeDef: ${e}`);
}
function A(e, t, n = 0) {
	let r = !1;
	for (let t of e) j(t), r ||= F(t);
	if (!r) return Le(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) O(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		k(n.grow) || (i[t] = M(k(n.px), n), c.add(t));
	}
	let l = 0;
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += k(e[o].px), n += k(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = M(k(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t);
		l = o / n;
		let u = 0, d = [], f = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = k(r.px) + k(r.grow) / n * o, s = M(a, r);
			i[t] = s;
			let l = s - a;
			u += l, l > 0 ? d.push(t) : l < 0 && f.push(t);
		}
		if (!d.length && !f.length) break;
		if (u > 0) for (let e of d) c.add(e);
		else if (u < 0) for (let e of f) c.add(e);
		else for (let e of a) c.add(e);
	}
	return {
		sizes: i,
		growth: l
	};
}
function Le(e, t, n) {
	let r = 0, i = 0;
	for (let t of e) r += k(t.px) + (O(t) ? 0 : n), i += k(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = O(n) ? 0 : k(n.px) + (i ? k(n.grow) / i * a : 0);
	}
	return {
		sizes: o,
		growth: i ? a / i : 0
	};
}
function j(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function M(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function N(e) {
	return M(k(e.px), e);
}
function P(e) {
	return e.maxPx ?? (k(e.grow) ? void 0 : N(e));
}
function F(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function I(e, t) {
	return L({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function L(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = F(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > k(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (k(t.grow) || e.maxPx < k(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var R = class e {
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
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : z;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return z;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Re(e, t, n = R.zero()) {
	return t ? new R(t.top === !1 ? n.top : e.top, t.right === !1 ? n.right : e.right, t.bottom === !1 ? n.bottom : e.bottom, t.left === !1 ? n.left : e.left) : e;
}
var z = R.createUniformPadding(0);
Object.freeze(z);
//#endregion
//#region ../core/src/utils/url.js
var ze = /^([A-Za-z]+:)?\/\//;
function B(e, t) {
	if (t && ze.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return Ve(n) + t;
}
function Be(e, t, n = He()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		}
		if (n) return new URL(t, n).href;
	} catch {}
	return B(r, t);
}
function Ve(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function He() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function Ue(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function We(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function V(e) {
	return l(e) && !Array.isArray(e) && !("expr" in e && typeof e.expr == "string");
}
function Ge(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = H(r);
	return t;
}
function H(e) {
	return Array.isArray(e) ? e.map(H) : V(e) ? Ge(e) : e;
}
function Ke(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		V(r) && V(t) ? Ke(t, r) : e[n] = H(r);
	}
	return e;
}
function qe(e) {
	let t = {};
	for (let n of e) n && Ke(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/viewChrome.js
var U = /* @__PURE__ */ new WeakMap();
function Je(e, t) {
	U.set(e, t);
}
function Ye(e) {
	return U.get(e);
}
function Xe(e) {
	return U.has(e);
}
function Ze(e) {
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
var Qe = /* @__PURE__ */ new WeakMap();
function $e(e, t) {
	Qe.set(e, t);
}
function et(e) {
	return Qe.get(e);
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var tt = class {
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
}, nt = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new tt(t, e, () => n));
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
		return r || (r = new tt(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, W = "VISIT_SKIP", G = "VISIT_STOP", K = (e) => e, rt = class {
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
	facetCoords = new o([], JSON.stringify);
	layoutCoords;
	constructor(e, t, n, r, a, o = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, o.chrome && Je(this, "excludeSubtree"), this.#t = a, this.spec = e, this.namedDataScope = new nt(this), r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let s = r ? r.getConfigScopes() : [t.getBaseConfig()], c = e.config;
		this.#e = [...s, c].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, oe(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...o
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new w(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), t.animator, {
			settleTemporalUpdatesImmediately: !0,
			onError: t.reportError,
			getSpecOrigin: t.getSpecOrigin
		}), this.paramRuntime.setSelectionSource(this), "mark" in e && this.paramRuntime.registerLazyExpression("zoomLevel", "zoomLevel()", () => se("The automatic zoomLevel parameter is deprecated. Use zoomLevel() or an explicit channel such as zoomLevel(\"x\") instead."));
		let l = [...e.params ?? [], ...et(e) ?? []];
		for (let e of l) {
			if ("expr" in e) {
				let { usesScaleHelper: t, globals: n } = i(e.expr, this.paramRuntime.getSpecLocation(e, ["expr"])), r = n.some((e) => this.paramRuntime.isPendingParam(e));
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
		return qe(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return h(e) ? this.paramRuntime.evaluateAndGet(e) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		h(n) && this.paramRuntime.watchExpression(n, e, {
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
		return this._cache("size/padding", () => R.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return R.zero();
	}
	getStructuralOverhang() {
		return R.zero();
	}
	getStructuralSizeDefs(e) {
		let t = this.getStructuralOverhang();
		return {
			before: { px: t[e === "x" ? "left" : "top"] },
			after: { px: t[e === "x" ? "right" : "bottom"] }
		};
	}
	getAlignment(e) {
		let t = e === "x" ? "width" : "height";
		return {
			size: this.getViewportSize().subtractPadding(this.getOverhang())[t],
			before: 0,
			after: 0
		};
	}
	getAlignmentCoords(e) {
		return this.coords.shrink(this.getOverhang());
	}
	getLayoutFootprints() {
		return [{
			view: this,
			coords: this.coords.shrink(this.getOverhang()),
			chrome: !1
		}];
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new E(this.#g("width"), this.#g("height")) : D);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return D;
		let e = this.getSize();
		return new E(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	#g(e) {
		let { value: i, implicit: a } = this.#_(e), o = this.resolveSizeValue(e, i), s = q(o), c = e == "viewportWidth" || e == "viewportHeight";
		if (s) {
			if (c) throw new b(`Cannot use step-based size with "${e}"!`, this);
			let i = this.#x(e, o), s = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (s) {
				let a;
				if (n(s.type)) a = s.domain().length;
				else if (["locus", "index"].includes(s.type)) {
					let e = s.domain();
					a = r(e) - e[0];
				} else throw new b(`Cannot use step-based size with "${s.type}" scale!`, this);
				let c = s;
				a = t(a, c.paddingInner(), c.paddingOuter());
				let l = e == "width" ? "xOffset" : "yOffset", u = this.getScaleResolution(l)?.getScale(), d = o.for ?? (u && n(u.type) ? "offset" : "position"), f = i;
				if (d == "offset") {
					if (!u || !n(u.type)) throw new b(`Cannot use ${e}.step.for = "offset" without a discrete ${l} scale!`, this);
					let r = u, i = t(u.domain().length, r.paddingInner(), r.paddingOuter());
					f *= i / (1 - c.paddingInner());
				}
				return {
					px: a * f,
					grow: 0
				};
			}
			if (a) return {
				px: i,
				grow: 0
			};
			throw new b(`Cannot use step-based size with "${e}"!`, this);
		}
		return (o && Ie(o)) ?? (c ? void 0 : {
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
		if (Ze(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let r = e == "width" ? "x" : "y", i = this.getScaleResolution(r)?.getResolvedScaleType();
		return i && !n(i) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (!h(t)) return t;
		let n = this.#C(e)();
		if (ct(n) || n === "container") return n;
		throw new b(`"${e}" ExprRef must resolve to a finite number or "container"!`, this);
	}
	registerSizeInvalidation() {
		this.#y("width", "x"), this.#y("height", "y"), this.#b("width"), this.#b("height"), this.#b("viewportWidth"), this.#b("viewportHeight");
	}
	#y(e, t) {
		let { value: r, implicit: i } = this.#_(e);
		if (!q(r)) return;
		let a = this.getScaleResolution(t);
		if (!a) {
			if (i) return;
			throw new b("Cannot use 'step' size without a scale!", this);
		}
		let o = () => {
			let t = this.getSize()[e];
			this.invalidateSizeCache();
			let n = this.getSize()[e];
			Pe(t, n) || this.context.requestLayoutReflow();
		};
		if (a.addEventListener("domain", o), this.registerDisposer(() => a.removeEventListener("domain", o)), r.for != "position") {
			let t = e == "width" ? "xOffset" : "yOffset", r = this.getScaleResolution(t);
			r && n(r.getResolvedScaleType()) && (r.addEventListener("domain", o), this.registerDisposer(() => r.removeEventListener("domain", o)));
		}
	}
	#b(e) {
		let { value: t } = this.#_(e);
		h(t) ? this.#S(e, t) : q(t) && h(t.step) && this.#S(e + ".step", t.step);
	}
	#x(e, t) {
		let n = h(t.step) ? this.#C(e + ".step")() : t.step;
		if (ct(n)) return n;
		throw new b(`"${e}.step" ExprRef must resolve to a finite number!`, this);
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
		if (!t) throw new b(`"${e}" ExprRef was not registered before layout!`, this);
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
		t && e.type === "mousemove" && e.pointedViews.set(this, e.facetId);
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
		e?.collector && (this.context.dataFlow.pruneCollectorBranch(e.collector), this.context.dataFlow.removeCollector(e.collector)), e?.dataSource && e.dataSource.view === this && !e.dataSource.shareKey && this.context.dataFlow.removeDataSource(e.dataSource), this.paramRuntime.dispose(), this.namedDataScope.dispose(), this.flowHandle = void 0, this.context.dataFlow.loadingStatusRegistry.delete(this);
	}
	registerDisposer(e) {
		this.#f.push(e);
	}
	disposeSubtree() {
		let e = (e) => {
			for (let t of Object.values(e.resolutions.scale)) t.dispose();
		};
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
		(!this.opacityFunction || this.opacityFunction === K) && (this.opacityFunction = at(this));
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
		if (this.layoutParent || this.visit((e) => {
			e.layoutCoords = void 0;
		}), this.layoutCoords = t, n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, ne(t, ee(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? R.zero() : this.getPadding();
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
		return ie(t) ? [t.field] : this.options.inheritEncoding ? this.layoutParent?.getFacetFields(this) : [];
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
		return this.#E(e, "scale");
	}
	getAxisResolution(e) {
		return this.#E(e, "axis");
	}
	#E(e, t) {
		let n = _(e);
		for (let e of this.getDataAncestors()) {
			let r = e.resolutions[t][n];
			if (r || e.isResolutionBoundary(n)) return r;
		}
	}
	isResolutionBoundary(e) {
		return this.options.resolutionBoundaryChannels?.some((t) => t === _(e)) ?? !1;
	}
	getLegendResolution(e) {
		let t = _(e);
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
		return B(() => this.dataParent?.getBaseUrl(), We(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return d(e) ? e : h(e.text) ? this.paramRuntime.evaluateAndGet(e.text) : e.text;
	}
	_cache(e, t) {
		return ae(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				y(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) y(t, e);
				break;
			case "progeny": this.visit((t) => y(t, e));
		}
	}
	invalidateSizeCache() {
		y(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function it(e) {
	return "unitsPerPixel" in e;
}
function at(t) {
	let n = "opacity" in t.spec ? t.spec.opacity : void 0;
	if (n !== void 0) {
		if (g(n)) return (e) => e * n;
		if (it(n)) {
			let r = (e) => {
				let n = t.getScaleResolution(e), r = n?.getScale();
				if ([
					"linear",
					"index",
					"locus"
				].includes(r?.type)) return {
					scale: r,
					scaleResolution: n
				};
			}, i = st(n.values, "opacity.values", t);
			if (!te(n.unitsPerPixel)) throw new b("\"opacity.unitsPerPixel\" must be an array.", t);
			let a = () => 1, o = [], s = () => {
				let n = ot(st(o.map((e) => e()), "opacity.unitsPerPixel", t), i, t), r = e().domain(n.unitsPerPixel).range(n.values).clamp(!0);
				a = (e) => r(e);
			};
			o = n.unitsPerPixel.map((e) => {
				if (h(e)) {
					let n = t.paramRuntime.watchExpression(e, () => {
						s(), t.context.animator.requestRender();
					});
					return () => n(null);
				}
				return () => e;
			}), s();
			let c = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return re(e.scale.domain()) / t;
			}, l;
			if (n.channel === "auto") {
				let e = r("x"), n = r("y");
				if (e && n) l = () => (c(e) + c(n)) / 2;
				else if (e) l = () => c(e);
				else if (n) l = () => c(n);
				else throw new b("Cannot find a resolved quantitative x or y scale for dynamic opacity!", t);
			} else {
				let e = n.channel ? r(n.channel) : r("x") ?? r("y");
				if (!e) throw new b("Cannot find a resolved quantitative scale for dynamic opacity!", t);
				l = () => c(e);
			}
			return (e) => a(l()) * e;
		}
		if (h(n)) {
			let e = t.paramRuntime.watchExpression(n, () => t.context.animator.requestRender());
			return (t) => e(null) * t;
		}
	}
	return K;
}
function ot(e, t, n) {
	if (!e.length) throw new b("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new b("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new b("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new b("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function st(e, t, n) {
	if (!te(e)) throw new b("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!g(e) || !Number.isFinite(e)) throw new b("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var q = (e) => !!e && typeof e == "object" && "step" in e;
function ct(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var J = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap();
function lt(e, t) {
	X(e, t, "Import");
}
function ut(e, t) {
	X(e, t, "View");
}
function X(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	J.set(e, { name: t });
}
function dt(e) {
	return J.get(e);
}
function ft(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Y.set(e, n);
}
function pt(e, t = {}) {
	Je(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function mt(e) {
	return e.getLayoutAncestors().some(Xe);
}
function Z(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = J.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function ht(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: Z(e),
		view: t
	};
}
function gt(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: Z(e),
		param: t
	};
}
function _t(e) {
	return Tt(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function vt(e, t) {
	e.visit((e) => {
		let n = Ye(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function yt(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function bt(e, t) {
	if (Et(t), !Pt(e, t.scope)) return;
	let n = [];
	if ($(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function xt(e, t) {
	if (Tt(t), !Pt(e, t.scope)) return;
	let n = [];
	if ($(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Q(i) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function St(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Q(r) && t({
			view: e,
			param: r,
			selector: gt(e, n)
		});
	});
}
function Ct(e) {
	let t = [];
	return St(e, (e) => t.push(e)), t;
}
function wt(e) {
	let t = [];
	for (let n of Dt(e)) {
		let r = Ot(n);
		At(e, r, t), jt(e, r, t);
	}
	return t;
}
function Tt(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function Et(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Q(e) {
	return e.persist === !1 ? !1 : p(e) ? !0 : f(e) ? !!e.bind : !1;
}
function Dt(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = J.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function Ot(e) {
	return Z(e);
}
function kt(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function At(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	$(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!Q(n)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + kt(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function jt(e, t, n) {
	let r = Mt(e, t);
	if (!r.length) return;
	let i = r.filter((e) => Nt(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = J.get(e), n = t ? t.name : void 0;
		typeof n == "string" && n.length && a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + kt(t) + ".",
		scope: t
	});
}
function Mt(e, t) {
	let n = [];
	return $(e, t, (e) => {
		if (Z(e).length !== t.length + 1) return;
		let r = J.get(e);
		r && typeof r.name == "string" && n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function Nt(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Q(n)) return t = !0, G;
		}
	}), t;
}
function Pt(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if ($(e, r, (e) => {
			let n = J.get(e);
			if (n && n.name === i && Z(e).length === r.length + 1) {
				if (t) return a = !0, G;
				t = e;
			}
		}, { includeNamedImportRoots: !0 }), a) throw Error("Multiple import instances named \"" + i + "\" in scope.");
		if (t) n = t, r.push(i);
		else return;
	}
	return n;
}
function $(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = J.get(e), a = Y.get(e);
		if (a === "excludeSubtree") return W;
		if (a !== "exclude" && Ft(e, t, r, i)) return n(e);
	});
}
function Ft(e, t, n, r) {
	let i = Z(e);
	return It(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : Lt(t, i);
}
function It(e, t) {
	return e.length === t.length && Lt(e, t);
}
function Lt(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
export { E as A, Oe as B, qe as C, Be as D, Ve as E, ke as F, Se as G, Me as H, P as I, xe as J, Ce as K, N as L, I as M, M as N, R as O, je as P, De as R, Ze as S, B as T, Ae as U, A as V, w as W, x as Y, W as _, ht as a, $e as b, pt as c, ut as d, xt as f, vt as g, yt as h, Z as i, D as j, Re as k, ft as l, wt as m, dt as n, mt as o, bt as p, be as q, gt as r, _t as s, Ct as t, lt as u, G as v, Ue as w, Xe as x, rt as y, Ie as z };
