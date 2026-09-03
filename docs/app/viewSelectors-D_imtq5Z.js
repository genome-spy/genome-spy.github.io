import { I as e, J as t, Jt as n, L as r, Mt as i, Nt as a, Ot as o, f as s, h as c, jt as l, l as u, o as d, p as f, rt as p, t as m, u as h, zt as ee } from "./clipOptions-taFzEljc.js";
import { E as te, at as ne, m as g, y as _ } from "./vega-scale-D46-iCaL.js";
import { a as v, n as re, r as ie, t as y } from "./viewError-BiR9VCgL.js";
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
}, x = Symbol("runtimeNode"), ae = 1e6;
function oe(e) {
	return e ? (t, n) => {
		e.addDisposer(t, n);
	} : () => void 0;
}
function se(e, t) {
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
function ce(e) {
	let t = e[x];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function le(e) {
	return typeof e.rank == "number" ? e.rank : ce(e).rank;
}
function ue(e) {
	for (let t of e) t();
}
var de = class {
	#e = 1;
	#t = 1;
	#n = 0;
	#r = !1;
	#i = !1;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s = new b();
	#c = new b();
	#l = /* @__PURE__ */ new Set();
	#u;
	constructor(e = {}) {
		this.#u = oe(e.lifecycleRegistry);
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
		};
		return this.#u(e, () => {
			s.disposed = !0, s.listeners.clear();
		}), se(s, (e) => {
			if (s.disposed) throw Error("Cannot set disposed parameter \"" + t + "\" (" + a + ").");
			e !== s.value && (s.value = e, o && ue(s.listeners));
		});
	}
	computed(e, t, n, r) {
		let i = n.reduce((e, t) => Math.max(e, le(t)), 0), a = {
			id: "n" + this.#e++,
			name: t,
			kind: "derived",
			rank: i + 1,
			value: r(),
			disposed: !1,
			listeners: /* @__PURE__ */ new Set(),
			fn: r,
			subscribe(e) {
				return a.listeners.add(e), () => {
					a.listeners.delete(e);
				};
			}
		}, o = n.map((e) => e.subscribe(() => {
			a.disposed || (this.#d(a), e.propagation === "sync" && this.flushNow());
		}));
		return this.#u(e, () => {
			a.disposed || (a.disposed = !0, o.forEach((e) => e()), a.listeners.clear(), this.#a.delete(a));
		}), se(a);
	}
	effect(e, t, n) {
		let r = t.reduce((e, t) => Math.max(e, le(t)), 0), i = {
			id: "n" + this.#e++,
			rank: r + 1,
			disposed: !1,
			fn: n
		}, a = () => {
			i.disposed || this.#f(i);
		}, o = t.map((e) => e.subscribe(a)), s = () => {
			i.disposed || (i.disposed = !0, o.forEach((e) => e()), this.#o.delete(i));
		};
		return this.#u(e, s), s;
	}
	runInTransaction(e) {
		this.#n += 1;
		try {
			return e();
		} finally {
			--this.#n, this.#n === 0 && this.#m();
		}
	}
	flushNow() {
		if (!(this.#n > 0 || this.#i)) {
			this.#r = !1, this.#i = !0;
			try {
				let e = !0;
				for (; e;) {
					for (e = !1; this.#s.length > 0;) {
						e = !0;
						let t = this.#s.pop();
						if (this.#a.delete(t), t.disposed) continue;
						let n = t.value, r = t.fn();
						r !== n && (t.value = r, ue(t.listeners));
					}
					for (; this.#c.length > 0;) {
						e = !0;
						let t = this.#c.pop();
						this.#o.delete(t), !t.disposed && t.fn();
					}
				}
			} finally {
				this.#i = !1, this.#g();
			}
		}
	}
	whenPropagated(e = {}) {
		if (this.#h()) return Promise.resolve();
		let { signal: t, timeoutMs: n } = e;
		return t?.aborted ? Promise.reject(/* @__PURE__ */ Error("whenPropagated aborted")) : new Promise((e, r) => {
			let i = {
				resolve: e,
				reject: r
			};
			t && (i.abortHandler = () => {
				this.#l.delete(i), r(/* @__PURE__ */ Error("whenPropagated aborted"));
			}, t.addEventListener("abort", i.abortHandler, { once: !0 })), n != null && (i.timeoutId = setTimeout(() => {
				this.#l.delete(i), i.abortHandler && t?.removeEventListener("abort", i.abortHandler), r(/* @__PURE__ */ Error("whenPropagated timeout after " + n + " ms"));
			}, n)), this.#l.add(i);
		});
	}
	#d(e) {
		this.#a.has(e) || (this.#a.add(e), this.#s.push(e, this.#p(e.rank)), this.#m());
	}
	#f(e) {
		this.#o.has(e) || (this.#o.add(e), this.#c.push(e, this.#p(e.rank)), this.#m());
	}
	#p(e) {
		let t = this.#t % ae;
		return this.#t += 1, e * ae + t;
	}
	#m() {
		this.#n > 0 || this.#r || this.#i || (this.#r = !0, queueMicrotask(() => {
			this.flushNow();
		}));
	}
	#h() {
		return this.#n === 0 && !this.#r && !this.#i && this.#s.length === 0 && this.#c.length === 0 && this.#a.size === 0 && this.#o.size === 0;
	}
	#g() {
		if (this.#h()) {
			for (let e of this.#l) e.timeoutId && clearTimeout(e.timeoutId), e.resolve();
			this.#l.clear();
		}
	}
}, fe = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createOwner(e, t) {
		let n = e + ":" + t + ":" + this.#e++;
		return this.#t.set(n, /* @__PURE__ */ new Set()), n;
	}
	addDisposer(e, t) {
		let n = this.#t.get(e);
		if (!n) throw Error("Unknown owner: " + e);
		n.add(t);
	}
	disposeOwner(e) {
		let t = this.#t.get(e);
		if (t) {
			for (let e of t) e();
			t.clear(), this.#t.delete(e);
		}
	}
}, pe = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createRootScope(e) {
		let t = "scope:" + this.#e++;
		return this.#t.set(t, {
			params: /* @__PURE__ */ new Map(),
			ownerId: e
		}), t;
	}
	createChildScope(e, t) {
		if (!this.#t.has(t)) throw Error("Unknown parent scope: " + t);
		let n = "scope:" + this.#e++;
		return this.#t.set(n, {
			parentScope: t,
			params: /* @__PURE__ */ new Map(),
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
		t.params.clear();
	}
	register(e, t, n) {
		c(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t)) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		c(t);
		let n = e;
		for (; n;) {
			let e = this.#t.get(n);
			if (!e) throw Error("Unknown scope: " + n);
			let r = e.params.get(t);
			if (r) return r;
			n = e.parentScope;
		}
	}
};
//#endregion
//#region ../core/src/paramRuntime/expressionCompiler.js
function me(e, t = {}, n = {}) {
	return r(e, t, n);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function he(e, t, n = {}) {
	let r = {}, i = me(e, r, n), a = /* @__PURE__ */ new Map();
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
	}, i.identifier = () => i.code + "|" + Array.from(a.values()).map((e) => e.id).concat((i.scaleDependencies ?? []).map((e) => e.id)).join(","), {
		expression: i,
		dependencies: Array.from(a.values()).concat(i.scaleDependencies ?? [])
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramRuntime.js
var ge = class {
	#e = new fe();
	#t = new de({ lifecycleRegistry: this.#e });
	#n = new pe();
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
	registerBase(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "base", n, r);
		return this.#n.register(e, t, a);
	}
	registerSelection(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "selection", n, r);
		return this.#n.register(e, t, a);
	}
	registerDerived(e, t, n, r) {
		let { expression: i, dependencies: a } = he(n, (t) => this.resolve(e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = he(t, (t) => this.resolve(e, t), n);
		return r;
	}
	resolve(e, t) {
		return this.#n.resolve(e, t);
	}
	runInTransaction(e) {
		return this.#t.runInTransaction(e);
	}
	flushNow() {
		this.#t.flushNow();
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
function xe(e, t, n, r, i) {
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
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = Se(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function Se() {
	let e = globalThis.document?.timeline?.currentTime;
	return typeof e == "number" ? e : performance.now();
}
//#endregion
//#region ../core/src/paramRuntime/viewParamRuntime.js
var S = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new Map();
	#a = /* @__PURE__ */ new Map();
	#o;
	#s;
	#c;
	#l;
	#u = !1;
	constructor(e, t, n, r = {}) {
		this.#o = e ?? (() => void 0), this.#s = t ?? (() => void 0), this.#c = n, this.#l = r.snapTransitionedUpdates ?? !1;
		let i = this.#o();
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new ge(), this.#t = this.#e.createScope());
	}
	registerParam(e) {
		let t = e.name;
		if (c(t), this.#i.has(t)) throw Error("Parameter \"" + t + "\" already registered in this scope.");
		we(e);
		let n, r;
		if (e.push == "outer") {
			let i = this.findRuntimeForParam(t);
			if (!i) throw Error(`Parameter "${t}" not found in outer scope!`);
			let a = i.paramConfigs.get(t);
			if (!a) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a || "ruler" in a) throw Error(`The outer parameter "${t}" must not have expr, select, or ruler properties!`);
			n = (e) => {
				i.setValue(t, e);
			}, this.#n.set(t, n), "ruler" in e && (r = u(e, this), n(r));
		} else if ("value" in e) r = u(e, this), n = "transition" in e ? this.#f(t, r, e.transition) : this.#d(t, r);
		else if ("expr" in e) {
			if ("transition" in e) this.#p(t, e.expr, e.transition);
			else {
				let n = this.#e.registerDerived(this.#t, t, e.expr, { resolveScaleResolution: this.#s });
				this.#r.set(t, n);
			}
			n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = u(e, this), n = this.#d(t, r);
		if ("select" in e) {
			if (r ??= u(e, this), !this.#n.has(t)) {
				let e = this.#e.registerSelection(this.#t, t, r);
				this.#r.set(t, e), this.#n.set(t, (t) => {
					e.set(t), this.#e.flushNow();
				}), n = this.#n.get(t);
			}
			n(r);
		}
		return this.#i.set(t, e), n;
	}
	allocateSetter(e, t, n = !1) {
		if (c(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#r.set(e, r);
		let i = (e) => {
			r.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, i), i;
	}
	setValue(e, t, n) {
		c(e);
		let r = this.#n.get(e);
		if (!r) throw Error("Writable parameter not found in this scope: " + e);
		r(t, n);
	}
	getValue(e) {
		return this.#r.get(e)?.get();
	}
	getTargetValue(e) {
		return c(e), this.#a.get(e)?.target ?? this.getValue(e);
	}
	subscribe(e, t) {
		c(e);
		let n = this.findRuntimeForParam(e);
		if (!n) throw Error("Parameter not found: " + e);
		let r = n.#r.get(e);
		if (!r) throw Error("Parameter found without local reference: " + e);
		return r.subscribe(t);
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
		return c(e), this.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return c(e), this.#i.has(e) ? !0 : this.#o()?.hasConfiguredParamInScopeChain(e) ?? !1;
	}
	findRuntimeForParam(e) {
		return this.#r.has(e) ? this : this.#o()?.findRuntimeForParam(e);
	}
	getDebugState() {
		let e = [];
		for (let [t, n] of this.#r) {
			let r = this.#i.get(t);
			e.push({
				name: t,
				kind: Ce(r),
				value: n.get(),
				writable: this.#n.has(t),
				configured: !!r,
				config: r ? structuredClone(r) : void 0,
				target: this.#a.get(t)?.target
			});
		}
		return {
			scopeId: this.#t,
			disposed: this.#u,
			params: e
		};
	}
	createExpression(e) {
		return this.#e.createExpression(this.#t, e, { resolveScaleResolution: this.#s });
	}
	watchExpression(e, t, n = {}) {
		let r = this.createExpression(e), i = r.subscribe(t);
		return (n.scopeOwned ?? !0) && this.#e.addScopeDisposer(this.#t, i), n.registerDisposer?.(i), r;
	}
	#d(e, t) {
		let n = this.#e.registerBase(this.#t, e, t);
		this.#r.set(e, n);
		let r = (e) => {
			n.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, r), r;
	}
	#f(e, t, n) {
		let r = this.#m(e, t, n), i = (t, n) => {
			this.#h(e, r, t, n);
		};
		return this.#n.set(e, i), i;
	}
	#p(e, t, n) {
		let r = this.createExpression(t), i = this.#m(e, r(null), n), a = r.subscribe(() => {
			this.#h(e, i, r(null), { animate: !this.#l });
		});
		this.#e.addScopeDisposer(this.#t, a);
	}
	#m(e, t, n) {
		let r = C(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#r.set(e, i);
		let a = this.#c;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = xe(a, ({ value: e }) => {
			i.set(e), this.#e.flushNow();
		}, n.halfLife ?? 80, n.epsilon ?? .01, { value: i.get() }), s = {
			target: i.get(),
			smoother: o,
			dispose: () => {
				o.stop(), this.#a.delete(e);
			}
		};
		return this.#a.set(e, s), this.#e.addScopeDisposer(this.#t, s.dispose), s;
	}
	#h(e, t, n, r = {}) {
		let i = C(e, n);
		t.target = i, r.animate === !1 ? t.smoother.snap({ value: i }) : t.smoother({ value: i });
	}
	evaluateAndGet(e) {
		return this.createExpression(e)();
	}
	runInTransaction(e) {
		return this.#e.runInTransaction(e);
	}
	flushNow() {
		this.#e.flushNow();
	}
	whenPropagated(e) {
		return this.#e.whenPropagated(e);
	}
	finalizeInitialization() {
		this.#l = !1;
	}
	dispose() {
		this.#u || (this.#u = !0, this.#e.disposeScope(this.#t), this.#n.clear(), this.#r.clear(), this.#i.clear(), this.#a.clear());
	}
	hasPointSelections() {
		for (let e of this.#i.values()) if (s(e)) {
			let t = e.select;
			if (a(t)) {
				if (t == "point") return !0;
			} else if (t.type == "point") return !0;
		}
		return !1;
	}
};
function Ce(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function we(e) {
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
function C(e, t) {
	if (typeof t != "number" || !Number.isFinite(t)) throw Error(`Transitioned parameter "${e}" must have a finite numeric value.`);
	return t;
}
//#endregion
//#region ../core/src/view/layout/flexLayout.js
function Te(e, t, { spacing: n, devicePixelRatio: r, offset: i, reverse: a } = {}) {
	n ||= 0, i ||= 0;
	let o = Ne(e, t, n), s = 0, c = 0;
	for (let t = 0; t < e.length; t++) s += o[t], D(e[t]) || c++;
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
	if (e.length == 1 && D(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (D(r)) d++;
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
function Ee(e, { spacing: t } = { spacing: 0 }) {
	let n = 0;
	for (let r of e) n += A(r) + (D(r) ? 0 : t);
	return Math.max(0, n - t);
}
function De(e, t, { spacing: n = 0 } = {}) {
	let r = [], i = [], a = 0, o = 0;
	for (let [s, c] of e.entries()) {
		let e = A(c), l = !D(c), u = o && l ? n : 0;
		i.length && a + u + e > t && (r.push(i), i = [], a = 0, o = 0), i.push(s), a += (o && l ? n : 0) + e, o += +!!l;
	}
	return i.length && r.push(i), r;
}
function Oe(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, A(o));
		let e = j(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return M({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function ke(e) {
	let t = {
		px: 0,
		grow: 0,
		minPx: 0,
		maxPx: 0
	}, n = !0;
	for (let r of e) {
		t.px += O(r.px), t.grow += O(r.grow), t.minPx += A(r);
		let e = j(r);
		e === void 0 ? n = !1 : t.maxPx += e;
	}
	return n || delete t.maxPx, M(t);
}
var w = class e {
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
		return new e(Le(this.width, t), Le(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, T = Object.freeze({
	px: 0,
	grow: 0
}), E = new w(T, T);
function D(e) {
	return !e.px && !e.grow && !e.minPx;
}
function Ae(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function O(e) {
	return e || 0;
}
function je(e) {
	return e && (l(e.px) || l(e.grow) || l(e.minPx) || l(e.maxPx));
}
function Me(e) {
	if (q(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (je(e)) return Fe(e), M(e);
	if (l(e)) return {
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
	for (let t of e) Fe(t), r ||= Ie(t);
	if (!r) return Pe(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) D(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		O(n.grow) || (i[t] = k(O(n.px), n), c.add(t));
	}
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += O(e[o].px), n += O(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = k(O(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t), l = 0, u = [], d = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = O(r.px) + O(r.grow) / n * o, s = k(a, r);
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
	for (let t of e) r += O(t.px) + (D(t) ? 0 : n), i += O(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = D(n) ? 0 : O(n.px) + (i ? O(n.grow) / i * a : 0);
	}
	return o;
}
function Fe(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function k(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function A(e) {
	return k(O(e.px), e);
}
function j(e) {
	return e.maxPx ?? (O(e.grow) ? void 0 : A(e));
}
function Ie(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function Le(e, t) {
	return M({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function M(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = Ie(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > O(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (O(t.grow) || e.maxPx < O(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var N = class e {
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
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : P;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return P;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Re(e, t) {
	return t ? new N(t.top === !1 ? 0 : e.top, t.right === !1 ? 0 : e.right, t.bottom === !1 ? 0 : e.bottom, t.left === !1 ? 0 : e.left) : e;
}
var P = N.createUniformPadding(0);
Object.freeze(P);
//#endregion
//#region ../core/src/utils/url.js
var ze = /^([A-Za-z]+:)?\/\//;
function F(e, t) {
	if (t && ze.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return I(n) + t;
}
function Be(e, t, n = Ve()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		} else if (n) return new URL(t, n).href;
	} catch {}
	return F(r, t);
}
function I(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function Ve() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function He(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function Ue(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function L(e) {
	return i(e) && !Array.isArray(e);
}
function We(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = R(r);
	return t;
}
function R(e) {
	return Array.isArray(e) ? e.map(R) : L(e) ? We(e) : e;
}
function z(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		L(r) && L(t) ? z(t, r) : e[n] = R(r);
	}
	return e;
}
function B(e) {
	let t = {};
	for (let n of e) n && z(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/viewChrome.js
var V = /* @__PURE__ */ new WeakMap();
function Ge(e, t) {
	V.set(e, t);
}
function Ke(e) {
	return V.get(e);
}
function H(e) {
	return V.has(e);
}
function U(e) {
	let t = e;
	for (; t;) {
		let n = V.get(t);
		if (n === "excludeSubtree" || t === e && n === "exclude") return !0;
		t = t.layoutParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/view/postScaleParams.js
var qe = /* @__PURE__ */ new WeakMap();
function Je(e, t) {
	qe.set(e, t);
}
function Ye(e) {
	return qe.get(e);
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var Xe = class {
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
}, Ze = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new Xe(t, e, () => n));
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
		return r || (r = new Xe(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, W = "VISIT_SKIP", G = "VISIT_STOP", K = (e) => e, Qe = class {
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
	constructor(t, n, r, i, a, o = {}) {
		if (!t) throw Error("View spec must be defined!");
		if (this.context = n, this.layoutParent = r, this.dataParent = i, this.#t = a, this.spec = t, this.namedDataScope = new Ze(this), i && t.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let s = i ? i.getConfigScopes() : [n.getBaseConfig()], c = t.config;
		if (this.#e = [...s, c].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, ie(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...o
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new S(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), n.animator, { snapTransitionedUpdates: !0 }), t.params) {
			let n = /* @__PURE__ */ new Set();
			for (let r of t.params) {
				if ("expr" in r) {
					let { usesScaleHelper: t, globals: i } = e(r.expr), a = i.some((e) => n.has(e));
					if (t || a) {
						n.add(r.name), this.#d.push(r);
						continue;
					}
				}
				this.paramRuntime.registerParam(r);
			}
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
		return B(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return h(e) ? this.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		h(n) && this.paramRuntime.watchExpression(n.expr, e, {
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
		return this._cache("size/padding", () => N.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return N.zero();
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new w(this.#g("width"), this.#g("height")) : E);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return E;
		let e = this.getSize();
		return new w(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	#g(e) {
		let { value: t, implicit: r } = this.#_(e), i = this.resolveSizeValue(e, t), a = q(i), o = e == "viewportWidth" || e == "viewportHeight";
		if (a) {
			if (o) throw new y(`Cannot use step-based size with "${e}"!`, this);
			let t = this.#x(e, i), a = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (a) {
				let r;
				if (_(a.type)) r = a.domain().length;
				else if (["locus", "index"].includes(a.type)) {
					let e = a.domain();
					r = n(e) - e[0];
				} else throw new y(`Cannot use step-based size with "${a.type}" scale!`, this);
				let o = a;
				r = g(r, o.paddingInner(), o.paddingOuter());
				let s = e == "width" ? "xOffset" : "yOffset", c = this.getScaleResolution(s)?.getScale(), l = i.for ?? (c && _(c.type) ? "offset" : "position"), u = t;
				if (l == "offset") {
					if (!c || !_(c.type)) throw new y(`Cannot use ${e}.step.for = "offset" without a discrete ${s} scale!`, this);
					let t = c, n = g(c.domain().length, t.paddingInner(), t.paddingOuter());
					u *= n / (1 - o.paddingInner());
				}
				return {
					px: r * u,
					grow: 0
				};
			} else if (r) return {
				px: t,
				grow: 0
			};
			else throw new y(`Cannot use step-based size with "${e}"!`, this);
		} else return (i && Me(i)) ?? (o ? void 0 : {
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
		if (U(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let n = e == "width" ? "x" : "y", r = this.getScaleResolution(n)?.getResolvedScaleType();
		return r && !_(r) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (!h(t)) return t;
		let n = this.#C(e)();
		if (rt(n) || n === "container") return n;
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
		h(t) ? this.#S(e, t.expr) : q(t) && h(t.step) && this.#S(e + ".step", t.step.expr);
	}
	#x(e, t) {
		let n = h(t.step) ? this.#C(e + ".step")() : t.step;
		if (rt(n)) return n;
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
		let e = [...this.#d, ...Ye(this.spec) ?? []];
		if (e.length && !this.#u) {
			this.#u = !0, this.#l = !1;
			for (let t of e) this.paramRuntime.registerParam(t);
			this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				this.#l = !0, this.#T();
			}));
		}
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === K) && (this.opacityFunction = et(this));
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
		if (n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, m(t, d(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? N.zero() : this.getPadding();
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
		return p(t) ? [t.field] : this.options.inheritEncoding ? this.layoutParent?.getFacetFields(this) : [];
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
		let n = t(e);
		return this.getDataAncestors().map((e) => e.resolutions.scale[n]).find((e) => e);
	}
	getAxisResolution(e) {
		let n = t(e);
		return this.getDataAncestors().map((e) => e.resolutions.axis[n]).find((e) => e);
	}
	getLegendResolution(e) {
		let n = t(e);
		return this.getDataAncestors().map((e) => e.resolutions.legend[n]).find((e) => e);
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
		return F(() => this.dataParent?.getBaseUrl(), Ue(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return a(e) ? e : h(e.text) ? this.paramRuntime.evaluateAndGet(e.text.expr) : e.text;
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
function $e(e) {
	return "unitsPerPixel" in e;
}
function et(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (l(t)) return (e) => e * t;
		if ($e(t)) {
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
			}, r = nt(t.values, "opacity.values", e);
			if (!o(t.unitsPerPixel)) throw new y("\"opacity.unitsPerPixel\" must be an array.", e);
			let i = () => 1, a = [], s = () => {
				let t = tt(nt(a.map((e) => e()), "opacity.unitsPerPixel", e), r, e), n = te().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				i = (e) => n(e);
			};
			a = t.unitsPerPixel.map((t) => {
				if (h(t)) {
					let n = e.paramRuntime.watchExpression(t.expr, () => {
						s(), e.context.animator.requestRender();
					});
					return () => n(null);
				} else return () => t;
			}), s();
			let c = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return ee(e.scale.domain()) / t;
			}, l;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) l = () => (c(t) + c(r)) / 2;
				else if (t) l = () => c(t);
				else if (r) l = () => c(r);
				else throw new y("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new y("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				l = () => c(r);
			}
			return (e) => i(l()) * e;
		} else if (h(t)) {
			let n = e.paramRuntime.watchExpression(t.expr, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return K;
}
function tt(e, t, n) {
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
function nt(e, t, n) {
	if (!o(e)) throw new y("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!l(e) || !Number.isFinite(e)) throw new y("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var q = (e) => !!e && typeof e == "object" && "step" in e;
function rt(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var J = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap();
function it(e, t) {
	ot(e, t, "Import");
}
function at(e, t) {
	ot(e, t, "View");
}
function ot(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	J.set(e, { name: t });
}
function st(e) {
	return J.get(e);
}
function ct(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Y.set(e, n);
}
function lt(e, t = {}) {
	Ge(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function ut(e) {
	return e.getLayoutAncestors().some(H);
}
function X(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = J.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function dt(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: X(e),
		view: t
	};
}
function ft(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: X(e),
		param: t
	};
}
function pt(e) {
	return xt(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function mt(e, t) {
	e.visit((e) => {
		let n = Ke(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function ht(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function gt(e, t) {
	if (St(t), !kt(e, t.scope)) return;
	let n = [];
	if ($(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function _t(e, t) {
	if (xt(t), !kt(e, t.scope)) return;
	let n = [];
	if ($(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Z(i) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function vt(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Z(r) && t({
			view: e,
			param: r,
			selector: ft(e, n)
		});
	});
}
function yt(e) {
	let t = [];
	return vt(e, (e) => t.push(e)), t;
}
function bt(e) {
	let t = [];
	for (let n of Ct(e)) {
		let r = wt(n);
		Tt(e, r, t), Et(e, r, t);
	}
	return t;
}
function xt(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function St(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Z(e) {
	return e.persist === !1 ? !1 : s(e) ? !0 : f(e) ? !!e.bind : !1;
}
function Ct(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = J.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function wt(e) {
	return X(e);
}
function Q(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function Tt(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	$(e, t, (e) => {
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
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + Q(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function Et(e, t, n) {
	let r = Dt(e, t);
	if (!r.length) return;
	let i = r.filter((e) => Ot(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = J.get(e), n = t ? t.name : void 0;
		typeof n != "string" || !n.length || a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + Q(t) + ".",
		scope: t
	});
}
function Dt(e, t) {
	let n = [];
	return $(e, t, (e) => {
		if (X(e).length !== t.length + 1) return;
		let r = J.get(e);
		!r || typeof r.name != "string" || n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function Ot(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Z(n)) return t = !0, G;
		}
	}), t;
}
function kt(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if ($(e, r, (e) => {
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
function $(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = J.get(e), a = Y.get(e);
		if (a === "excludeSubtree") return W;
		if (a !== "exclude" && At(e, t, r, i)) return n(e);
	});
}
function At(e, t, n, r) {
	let i = X(e);
	return jt(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : Mt(t, i);
}
function jt(e, t) {
	return e.length === t.length && Mt(e, t);
}
function Mt(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
export { w as A, S as B, B as C, Be as D, I as E, A as F, b as G, xe as H, Te as I, Me as L, Oe as M, Ee as N, N as O, j as P, ke as R, U as S, F as T, ve as U, be as V, ye as W, W as _, dt as a, Je as b, lt as c, at as d, _t as f, mt as g, ht as h, X as i, T as j, Re as k, ct as l, bt as m, st as n, ut as o, gt as p, ft as r, pt as s, yt as t, it as u, G as v, He as w, H as x, Qe as y, De as z };
