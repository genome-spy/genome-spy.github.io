import { Bn as e, C as t, E as n, Fn as r, K as i, Kn as a, M as o, On as s, P as c, Q as l, Rn as u, Tt as d, Z as f, _ as p, _n as m, an as ee, b as h, f as g, g as _, gt as v, ir as te, l as ne, m as y, o as re, p as ie, t as ae, un as b, zn as oe } from "./clipOptions-Dqn337WO.js";
import { i as se, l as ce, t as le, u as ue } from "./url-DeOdSRrv.js";
import { a as x, n as de, r as fe, t as S } from "./viewError-BJNuAb_4.js";
import { t as pe } from "./warning-CpIIpk8e.js";
//#region ../core/src/paramRuntime/graphRuntime.js
var me = Symbol("runtimeNode"), C = 1e6;
function he(e) {
	return e ? (t, n) => e.addDisposer(t, n) : () => () => void 0;
}
function w(e, t, n = !0) {
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
	return Object.defineProperty(r, me, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(r, { set(e) {
		t(e);
	} }) : r;
}
function T(e) {
	let t = e[me];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function ge(e, t) {
	let n = T(t), r = /* @__PURE__ */ new Set(), i = (e) => {
		let t = T(e);
		return t === n || !r.has(t) && (r.add(t), (t.dependencies ?? []).some(i));
	};
	return i(e);
}
function _e(e) {
	return typeof e.rank == "number" ? e.rank : T(e).rank;
}
function ve(e) {
	for (let t of e) t();
}
var ye = class {
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
	#p = new ue();
	#m = new ue();
	#h = /* @__PURE__ */ new Set();
	#g;
	#_;
	constructor(e = {}) {
		this.#g = he(e.lifecycleRegistry), this.#_ = e.onError;
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
		return Object.assign(w(s, c, o), { dispose: l });
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
		return Object.assign(w(s), {
			dispose: u,
			rebind: (e, n) => {
				if (s.disposed) throw Error("Cannot rebind disposed operation: " + t);
				let r = w(s);
				if (e.some((e) => ge(e, r))) throw Error("Reactive dependency cycle: " + t);
				l.forEach((e) => e()), s.dependencies = e, s.fn = n, this.#n++, l = c(), this.#C(s), this.#p.clear();
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
			ve(e);
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
		return () => (t !== this.#n && (n = 1 + e().reduce((e, t) => Math.max(e, _e(t)), 0), t = this.#n), n);
	}
	#C(e) {
		this.#d.has(e) || (this.#d.add(e), this.#p.push(e, this.#T(e.rank))), this.#E();
	}
	#w(e) {
		this.#f.has(e) || (this.#f.add(e), this.#m.push(e, this.#T(e.rank))), this.#E();
	}
	#T(e) {
		let t = this.#t % C;
		return this.#t += 1, e * C + t;
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
}, be = class {
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
}, xe = class {
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
		h(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t) || r.initializers.has(t)) throw Error(`Parameter "${t}" already exists in scope ${e}`);
		r.initializers.set(t, {
			initialize: n,
			initializing: !1
		});
	}
	register(e, t, n) {
		h(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t) || r.initializers.get(t)?.initializing === !1) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		h(t);
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
function Se(e, t = {}, n = {}) {
	return l(e, t, n);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function Ce(e, t, n = {}) {
	let r = {}, i = Se(e, r, n), a = /* @__PURE__ */ new Map();
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
		throw s(e, n.specLocation);
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
var we = class {
	#e = new be();
	#t;
	#n = new xe();
	constructor(e = {}) {
		this.#t = new ye({
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
		let { expression: i, dependencies: a } = Ce(n, (t) => this.resolve(r?.expressionScope ?? e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	registerComputed(e, t, n, r) {
		return this.#n.register(e, t, this.#t.computed(this.#n.getOwnerId(e), t, n, r));
	}
	createExpression(e, t, n) {
		let { expression: r } = Ce(t, (t) => this.resolve(e, t), n);
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
}, Te = class {
	#e;
	#t;
	#n;
	#r;
	#i = /* @__PURE__ */ new Set();
	#a = !1;
	#o;
	#s;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n, this.#o = e.signal("intervalCompletion", 0), this.#s = e.effect([e.getParamRef(t), this.#o], () => {
			if (this.#a) {
				this.#a = !1;
				for (let n of Array.from(this.#i)) try {
					n(e.getValue(t));
				} catch (e) {
					console.error(e);
				}
			}
		});
	}
	beforeWrite(e, t) {
		let n = this.#n;
		if (n) {
			if (e?.type !== "interval") throw Error(`Parameter "${this.#t}" requires an interval selection.`);
			i(e.intervals, n);
		}
		this.#r && t !== this.#r.host && this.cancel(), this.#a = !this.#r && !ce(e, this.#e.getValue(this.#t));
	}
	begin(e, t) {
		this.cancel(), this.#r = {
			host: e,
			cancel: t,
			initial: structuredClone(this.#e.getValue(this.#t))
		};
	}
	finish(e, t) {
		if (this.#r?.host !== e) return;
		let n = this.#r.initial;
		this.#r = void 0, t && !ce(n, this.#e.getValue(this.#t)) && (this.#a = !0, this.#o.set(this.#o.get() + 1), this.#e.flushNow());
	}
	cancel() {
		let e = this.#r;
		this.#r = void 0, e?.cancel();
	}
	clear() {
		this.cancel();
		let e = this.#e.getValue(this.#t);
		o(e) && this.#e.setValue(this.#t, n(Object.keys(e.intervals)));
	}
	subscribeCommit(e) {
		return this.#i.add(e), () => {
			this.#i.delete(e);
		};
	}
	dispose() {
		this.cancel(), this.#s(), this.#i.clear();
	}
}, Ee = (e) => new Promise((t) => setTimeout(t, e));
function De() {
	return { canceled: !1 };
}
function E(e) {
	let t = e.requestAnimationFrame || window.requestAnimationFrame, n = e.signal, r = e.cancelToken, i = () => new Promise((i, a) => {
		if (r?.canceled) return i();
		if (n?.aborted) return a("aborted");
		let o = performance.now(), s = o + (e.duration || 1e3), c = typeof e.from == "number" ? e.from : 0, l = typeof e.to == "number" ? e.to : 1, u = e.easingFunction || ((e) => e), d = (e) => (e - o) / (s - o), f = (e) => e * (l - c) + c, p = (e) => Math.max(0, Math.min(1, e)), m = (o) => {
			r?.canceled ? i() : n?.aborted ? a("aborted") : (e.onUpdate(f(u(p(d(o))))), o < s ? t(m) : (e.onUpdate(f(u(1))), i()));
		};
		t(m);
	});
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : Ee(e.delay).then(i) : i();
}
//#endregion
//#region ../core/src/utils/animator.js
var Oe = class {
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
		return E({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function D(e, t, n, r, i) {
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
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = ke(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function ke() {
	let e = globalThis.document?.timeline?.currentTime;
	return typeof e == "number" ? e : performance.now();
}
//#endregion
//#region ../core/src/paramRuntime/viewParamRuntime.js
var O = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = !0;
	#a = /* @__PURE__ */ new Map();
	#o = /* @__PURE__ */ new Map();
	#s = /* @__PURE__ */ new Map();
	#c = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Map();
	#u = /* @__PURE__ */ new Map();
	#d;
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Map();
	#m = /* @__PURE__ */ new Map();
	#h;
	#g;
	#_;
	#v;
	#y;
	#b = !1;
	constructor(e, t, n, r = {}) {
		this.#h = e ?? (() => void 0), this.#g = t ?? (() => void 0), this.#_ = n, this.#y = r.getSpecOrigin, this.#v = r.settleTemporalUpdatesImmediately ?? !1;
		let i = this.#h();
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new we({ onError: r.onError }), this.#t = this.#e.createScope());
	}
	setSelectionSource(e) {
		this.#d = e;
	}
	findSelectionCapability(e) {
		let t = this.findRuntimeForParam(e), n = t && t.#f.get(e);
		if (!n?.size) return;
		let r = Array.from(n, (t) => ({
			type: t.kind,
			components: t.components.map((e) => ({
				component: e,
				type: t.kind === "interval" ? t.source?.getScaleResolution(e)?.type : void 0
			})),
			location: t.source?.name ?? e
		})), i = r[0], a = JSON.stringify(i.components), o = r.find(({ components: e }) => JSON.stringify(e) !== a);
		if (o) throw Error(`Conflicting selection declarations for "${e}" in "${i.location}" and "${o.location}".`);
		return i;
	}
	#x(e) {
		if (!("select" in e)) return;
		let n = t(e.select), r = n.type === "interval" ? "interval" : n.encodings ? "categories" : n.toggle ? "multi" : "single", i = n.encodings ? Array.from(new Set(n.encodings)).sort() : [], a = e.push === "outer" ? this.findRuntimeForParam(e.name) : this, o = {
			kind: r,
			toggle: n.type === "point" ? !!n.toggle : void 0,
			components: i,
			source: this.#d
		}, s = a.#f.get(e.name) ?? /* @__PURE__ */ new Set(), c = s.values().next().value;
		if (c && (c.kind !== r || c.toggle !== o.toggle || JSON.stringify(c.components) !== JSON.stringify(i))) throw Error(`Conflicting selection declarations for "${e.name}" in "${c.source?.name ?? e.name}" and "${this.#d?.name ?? e.name}".`);
		s.add(o), a.#f.set(e.name, s), this.#e.addScopeDisposer(this.#t, () => {
			s.delete(o);
		});
	}
	#S(e) {
		return {
			resolveScaleResolution: this.#g,
			specLocation: this.getSpecLocation(e, ["expr"])
		};
	}
	registerOutput(e) {
		return this.registerParam({ name: e }), this.#C(e);
	}
	#C(e) {
		let t = this.#r.get(e);
		if (t) return t;
		if (!this.#i) throw Error("Cannot add a transform output to configured ancestor parameter \"" + e + "\". Create its owner and producer together.");
		let n = this.#s.get(e);
		if (!n || Object.keys(n).some((e) => e !== "name" && e !== "description") || this.#a.get(e)?.size) throw Error("Transform output target \"" + e + "\" must be a bare parameter with no other writers.");
		let r = this.#o.get(e), i = new se(r);
		return i.owner = this.#d, this.#n.delete(e), this.#r.set(e, i), this.#s.set(e, {
			...n,
			persist: !1
		}), r.set(Object.freeze([])), this.#e.flushNow(), i;
	}
	finalizeOutputDeclarations() {
		this.#i = !1;
	}
	getOutput(e) {
		let t = this.#r.get(e);
		if (!t) throw Error("Output parameter \"" + e + "\" is not declared.");
		return t;
	}
	resolveOutput(e) {
		if (typeof e == "string") return this.getOutput(e);
		if (e.push !== "outer") throw Error("Transform output pushing requires push: \"outer\".");
		let t = this.#h()?.findRuntimeForParam(e.name);
		if (!t) throw Error("Output parameter \"" + e.name + "\" not found in outer scope.");
		return t.#C(e.name);
	}
	get outputs() {
		return this.#r.values();
	}
	isWritable(e) {
		return this.#n.has(e);
	}
	registerParam(e, t = {}) {
		let n = e.name;
		try {
			h(n);
		} catch (t) {
			throw s(t, this.getSpecLocation(e, ["name"]));
		}
		if (this.#s.has(n) || this.#c.has(n)) throw s(/* @__PURE__ */ Error("Parameter \"" + n + "\" already registered in this scope."), this.getSpecLocation(e, ["name"]));
		if (je(e), t.defer) {
			if (!("expr" in e)) throw Error("Only expression parameters can be deferred.");
			return this.#e.registerInitializer(this.#t, n, () => {
				this.#w(e);
			}), this.#s.set(n, e), () => {
				throw Error("Cannot set derived parameter \"" + n + "\".");
			};
		}
		return this.#w(e);
	}
	registerLazyExpression(e, t, n) {
		this.#e.registerInitializer(this.#t, e, () => {
			n?.();
			let r = this.#e.registerDerived(this.#t, e, t, this.#S());
			this.#o.set(e, r);
		}), this.#c.add(e);
	}
	registerComputed(e, t, n) {
		this.#e.registerInitializer(this.#t, e, () => {
			this.#o.set(e, this.#e.registerComputed(this.#t, e, t(), n));
		}), this.#c.add(e);
	}
	registerScopedExpression(e, t, n) {
		if (this.#e !== n.#e) throw Error("Scoped expressions must share a parameter runtime.");
		if (this.#s.has(e)) throw Error("Parameter \"" + e + "\" already registered in this scope.");
		this.#e.registerInitializer(this.#t, e, () => {
			let r = this.#e.registerDerived(this.#t, e, t, {
				expressionScope: n.#t,
				...n.#S()
			});
			this.#o.set(e, r);
		}), this.#s.set(e, {
			name: e,
			expr: t
		});
	}
	#w(e) {
		let n = e.name, r, i;
		if (e.push == "outer") {
			let t = this.findRuntimeForParam(n);
			if (!t) throw s(/* @__PURE__ */ Error(`Parameter "${n}" not found in outer scope!`), this.getSpecLocation(e, ["name"]));
			let a = t.paramConfigs.get(n);
			if (!a) throw Error(`Outer parameter "${n}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a && !("select" in e) || "ruler" in a || !t.isWritable(n)) throw Error(`The outer parameter "${n}" must not have expr, select, or ruler properties!`);
			r = (e, r = {}) => {
				t.setValue(n, e, r);
			}, this.#n.set(n, r);
			let o = t.#a.get(n) ?? /* @__PURE__ */ new Set();
			o.add(this), t.#a.set(n, o), this.#e.addScopeDisposer(this.#t, () => {
				o.delete(this);
			}), "ruler" in e && (i = g(e, this), r(i));
		} else if ("value" in e) i = g(e, this), r = "transition" in e ? this.#T(n, i, e.transition) : this.allocateSetter(n, i);
		else if (y(e)) {
			if ("transition" in e) this.#E(n, e, e.transition);
			else if ("debounce" in e) this.#D(n, e, e.debounce);
			else {
				let t = this.#e.registerDerived(this.#t, n, e.expr, this.#S(e));
				this.#o.set(n, t);
			}
			r = () => {
				throw Error("Cannot set derived parameter \"" + n + "\".");
			};
		} else i = g(e, this), r = this.allocateSetter(n, i);
		if ("select" in e) {
			if (e.push === "outer") {
				let e = this.findValue(n);
				e && [
					"single",
					"multi",
					"categories",
					"interval"
				].includes(e.type) && (i = e);
			}
			if (i ??= g(e, this), !this.#n.has(n)) {
				let e = this.#e.registerSelection(this.#t, n, i);
				this.#o.set(n, e), this.#n.set(n, (t, r) => {
					this.#u.get(n)?.beforeWrite(t, r?.intervalGesture), e.set(t), this.#e.flushNow();
				}), r = this.#n.get(n);
			}
			r(i);
		}
		return this.#s.set(n, e), this.#x(e), "select" in e && t(e.select).type === "interval" && this.getIntervalSelectionState(n).beforeWrite(this.findValue(n)), r;
	}
	allocateSetter(e, t, n = !1) {
		if (h(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#o.set(e, r);
		let i = (t, n = {}) => {
			if (this.#r.has(e)) throw Error("Cannot set output parameter \"" + e + "\".");
			this.#u.get(e)?.beforeWrite(t, n?.intervalGesture), r.set(t), this.#e.flushNow();
		};
		return this.#n.set(e, i), i;
	}
	setValue(e, t, n) {
		h(e);
		let r = this.#n.get(e);
		if (!r) throw Error("Writable parameter not found in this scope: " + e);
		r(t, n);
	}
	getValue(e) {
		return !this.#o.has(e) && this.hasLocalParam(e) && this.#e.resolve(this.#t, e), this.#o.get(e)?.get();
	}
	getParamRef(e) {
		h(e);
		let t = this.findRuntimeForParam(e);
		if (t) return t.#o.has(e) || t.#e.resolve(t.#t, e), t.#o.get(e);
	}
	getTargetValue(e) {
		return h(e), this.#p.get(e)?.target ?? this.#m.get(e)?.target ?? this.getValue(e);
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
		return this.#s;
	}
	hasLocalParam(e) {
		h(e);
		let t = this.#s.get(e);
		return this.#o.has(e) || this.#c.has(e) || t !== void 0 && "expr" in t;
	}
	isPendingParam(e) {
		let t = this.findRuntimeForParam(e);
		return t !== void 0 && !t.#o.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return h(e), this.#s.has(e) ? !0 : this.#h()?.hasConfiguredParamInScopeChain(e) ?? !1;
	}
	findRuntimeForParam(e) {
		return this.hasLocalParam(e) ? this : this.#h()?.findRuntimeForParam(e);
	}
	findConfiguredParam(e) {
		let t = this.#s.get(e);
		return t ? {
			runtime: this,
			config: t
		} : this.#h()?.findConfiguredParam(e);
	}
	getIntervalSelectionState(e) {
		let t = this.findRuntimeForParam(e), n = t.#u.get(e);
		if (!n) {
			let r = t.#f.get(e)?.values().next().value;
			n = new Te(t, e, r?.components.find(c)), t.#u.set(e, n);
		}
		return n;
	}
	getComplexIntervals(e, t) {
		let n = this.findRuntimeForParam(e).#f.get(e)?.values().next().value?.source;
		return Object.fromEntries(Object.entries(t).map(([e, t]) => {
			let r = n?.getScaleResolution(e);
			return [e, t ? t.map((e) => r ? r.toComplex(e) : e) : null];
		}));
	}
	registerSelectionController(e, t) {
		let n = this.#l.get(e);
		return n || (n = /* @__PURE__ */ new Set(), this.#l.set(e, n)), n.add(t), () => {
			n.delete(t), n.size === 0 && this.#l.delete(e);
		};
	}
	getSelectionController(e) {
		let t = this.#l.get(e);
		if (t) {
			if (t.size > 1) throw Error(`Selection "${e}" has ambiguous interaction ownership.`);
			return t.values().next().value;
		}
	}
	getDebugState() {
		let e = [];
		for (let [t, n] of this.#o) {
			let r = this.#s.get(t);
			e.push({
				name: t,
				kind: Ae(r),
				value: n.get(),
				writable: this.#n.has(t),
				configured: !!r,
				config: r ? structuredClone(r) : void 0,
				target: this.#p.get(t)?.target ?? this.#m.get(t)?.target
			});
		}
		return {
			scopeId: this.#t,
			disposed: this.#b,
			params: e
		};
	}
	getSpecLocation(e, t) {
		return ne(e, this.#y, t);
	}
	createExpression(e) {
		return this.#e.createExpression(this.#t, typeof e == "string" ? e : e.expr, this.#S(typeof e == "string" ? void 0 : e));
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
	#T(e, t, n) {
		let r = this.#O(e, t, n), i = (t, n) => {
			this.#k(e, r, t, n);
		};
		return this.#n.set(e, i), i;
	}
	#E(e, t, n) {
		let r = this.createExpression(t), i = this.#O(e, r(null), n), a = r.subscribe(() => {
			this.#k(e, i, r(null), { animate: !this.#v });
		});
		this.#e.addScopeDisposer(this.#t, a);
	}
	#D(e, t, n) {
		let r = this.createExpression(t), i = r(null), a = this.#e.registerBase(this.#t, e, i);
		this.#o.set(e, a);
		let o = {
			target: i,
			timeout: void 0
		}, s = () => {
			o.timeout = void 0, a.set(o.target), this.#e.flushNow();
		}, c = r.subscribe(() => {
			o.target = r(null), clearTimeout(o.timeout), o.timeout = void 0, o.target !== a.get() && (this.#v ? s() : o.timeout = setTimeout(s, n));
		});
		this.#m.set(e, o), this.#e.addScopeDisposer(this.#t, () => {
			clearTimeout(o.timeout), c(), this.#m.delete(e);
		});
	}
	#O(e, t, n) {
		let r = k(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#o.set(e, i);
		let a = this.#_;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = D(a, ({ value: e }) => {
			i.set(e), this.#e.flushNow();
		}, n.halfLife ?? 80, n.epsilon ?? .01, { value: i.get() }), s = {
			target: i.get(),
			smoother: o,
			dispose: () => {
				o.stop(), this.#p.delete(e);
			}
		};
		return this.#p.set(e, s), this.#e.addScopeDisposer(this.#t, s.dispose), s;
	}
	#k(e, t, n, r = {}) {
		let i = k(e, n);
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
		this.#v = !1;
	}
	dispose() {
		if (!this.#b) {
			this.#b = !0;
			for (let e of this.#u.values()) e.dispose();
			this.#u.clear(), this.#e.disposeScope(this.#t), this.#n.clear(), this.#o.clear(), this.#r.clear(), this.#a.clear(), this.#s.clear(), this.#c.clear(), this.#l.clear(), this.#p.clear(), this.#m.clear();
		}
	}
	hasPointSelections({ inherited: e = !1, recordsOnly: t = !1, inputOnly: n = !1 } = {}) {
		for (let r = this; r; r = e ? r.#h() : void 0) for (let i of r.#s.values()) if (_(i) && (!n || ie(i)) && (i.select === "point" || typeof i.select == "object" && i.select.type === "point") && (!t || typeof i.select == "string" || !("encodings" in i.select && i.select.encodings)) && (!e || this.findConfiguredParam(i.name).config === i)) return !0;
		return !1;
	}
};
function Ae(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function je(e) {
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
function k(e, t) {
	if (typeof t != "number" || !Number.isFinite(t)) throw Error(`Transitioned parameter "${e}" must have a finite numeric value.`);
	return t;
}
//#endregion
//#region ../core/src/view/layout/flexLayout.js
function Me(e, t, n = {}) {
	let { sizes: r } = He(e, t, n.spacing || 0);
	return Ne(e, r, t, n);
}
function Ne(e, t, n, { spacing: r, devicePixelRatio: i, offset: a, reverse: o } = {}) {
	r ||= 0, a ||= 0;
	let s = 0, c = 0;
	for (let n = 0; n < e.length; n++) s += t[n], M(e[n]) || c++;
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
	if (e.length == 1 && M(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let n = 0; n < e.length; n++) {
		let i = e[n];
		if (M(i)) d++;
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
function Pe(e, { spacing: t } = { spacing: 0 }) {
	let n = 0;
	for (let r of e) n += F(r) + (M(r) ? 0 : t);
	return Math.max(0, n - t);
}
function Fe(e, t, { spacing: n = 0 } = {}) {
	let r = [], i = [], a = 0, o = 0;
	for (let [s, c] of e.entries()) {
		let e = F(c), l = !M(c), u = o && l ? n : 0;
		i.length && a + u + e > t && (r.push(i), i = [], a = 0, o = 0), i.push(s), a += (o && l ? n : 0) + e, o += +!!l;
	}
	return i.length && r.push(i), r;
}
function Ie(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, F(o));
		let e = I(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return R({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function Le(e, t = 0, n = 0) {
	let r = Math.max(0, e.length - 1) * t, i = {
		px: r,
		grow: e.length ? 0 : n,
		minPx: r,
		maxPx: r
	}, a = e.length > 0;
	for (let t of e) {
		i.px += N(t.px), i.grow += N(t.grow), i.minPx += F(t);
		let e = I(t);
		e === void 0 ? a = !1 : i.maxPx += e;
	}
	return a || delete i.maxPx, R(i);
}
var A = class e {
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
		return new e(L(this.width, t), L(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, Re = Object.freeze({
	px: 0,
	grow: 0
}), j = new A(Re, Re);
function M(e) {
	return !e.px && !e.grow && !e.minPx;
}
function ze(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function N(e) {
	return e || 0;
}
function Be(e) {
	return e && (u(e.px) || u(e.grow) || u(e.minPx) || u(e.maxPx));
}
function Ve(e) {
	if (q(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (Be(e)) return We(e), R(e);
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
function He(e, t, n = 0) {
	let r = !1;
	for (let t of e) We(t), r ||= Ge(t);
	if (!r) return Ue(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) M(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		N(n.grow) || (i[t] = P(N(n.px), n), c.add(t));
	}
	let l = 0;
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += N(e[o].px), n += N(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = P(N(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t);
		l = o / n;
		let u = 0, d = [], f = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = N(r.px) + N(r.grow) / n * o, s = P(a, r);
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
function Ue(e, t, n) {
	let r = 0, i = 0;
	for (let t of e) r += N(t.px) + (M(t) ? 0 : n), i += N(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = M(n) ? 0 : N(n.px) + (i ? N(n.grow) / i * a : 0);
	}
	return {
		sizes: o,
		growth: i ? a / i : 0
	};
}
function We(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function P(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function F(e) {
	return P(N(e.px), e);
}
function I(e) {
	return e.maxPx ?? (N(e.grow) ? void 0 : F(e));
}
function Ge(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function L(e, t) {
	return R({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function R(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = Ge(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > N(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (N(t.grow) || e.maxPx < N(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var z = class e {
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
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : B;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return B;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Ke(e, t, n = z.zero()) {
	return t ? new z(t.top === !1 ? n.top : e.top, t.right === !1 ? n.right : e.right, t.bottom === !1 ? n.bottom : e.bottom, t.left === !1 ? n.left : e.left) : e;
}
var B = z.createUniformPadding(0);
Object.freeze(B);
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function qe(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function Je(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function V(e) {
	return oe(e) && !Array.isArray(e) && !("expr" in e && typeof e.expr == "string");
}
function Ye(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = H(r);
	return t;
}
function H(e) {
	return Array.isArray(e) ? e.map(H) : V(e) ? Ye(e) : e;
}
function Xe(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		V(r) && V(t) ? Xe(t, r) : e[n] = H(r);
	}
	return e;
}
function Ze(e) {
	let t = {};
	for (let n of e) n && Xe(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/viewChrome.js
var U = /* @__PURE__ */ new WeakMap();
function Qe(e, t) {
	U.set(e, t);
}
function $e(e) {
	return U.get(e);
}
function et(e) {
	return U.has(e);
}
function tt(e) {
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
var nt = /* @__PURE__ */ new WeakMap();
function rt(e, t) {
	nt.set(e, t);
}
function it(e) {
	return nt.get(e);
}
//#endregion
//#region ../core/src/view/transformOutputDeclarations.js
function* at(e) {
	for (let t of e) t.type === "values" ? yield {
		transform: t,
		property: "param",
		param: t.param
	} : t.type === "dendrogram" && t.domainParam !== void 0 ? yield {
		transform: t,
		property: "domainParam",
		param: t.domainParam
	} : t.type === "branch" && (yield* at(t.transform));
}
function ot(e) {
	e.visit((e) => {
		e.paramRuntime.finalizeOutputDeclarations();
	});
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var st = class {
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
}, ct = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new st(t, e, () => n));
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
		return r || (r = new st(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, W = "VISIT_SKIP", G = "VISIT_STOP", K = (e) => e, lt = class {
	spec;
	namedDataScope;
	flowOutputs = /* @__PURE__ */ new Set();
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
	facetCoords = new te([], JSON.stringify);
	layoutCoords;
	constructor(e, t, n, r, i, a = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, a.chrome && Qe(this, "excludeSubtree"), this.#t = i, this.spec = e, this.namedDataScope = new ct(this), r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let o = r ? r.getConfigScopes() : [t.getBaseConfig()], c = e.config;
		this.#e = [...o, c].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, fe(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...a
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new O(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), t.animator, {
			settleTemporalUpdatesImmediately: !0,
			onError: t.reportError,
			getSpecOrigin: t.getSpecOrigin
		}), this.paramRuntime.setSelectionSource(this), "mark" in e && this.paramRuntime.registerLazyExpression("zoomLevel", "zoomLevel()", () => pe("The automatic zoomLevel parameter is deprecated. Use zoomLevel() or an explicit channel such as zoomLevel(\"x\") instead."));
		for (let { transform: t, property: n, param: r } of at(e.transform ?? [])) try {
			typeof r == "string" && this.paramRuntime.registerOutput(r);
			let e = this.paramRuntime.resolveOutput(r);
			if (e.producerView) throw Error("Duplicate transform output producer.");
			e.producerView = this, this.flowOutputs.add(e);
		} catch (e) {
			throw s(e, this.paramRuntime.getSpecLocation(t, [n]));
		}
		let l = [...e.params ?? [], ...it(e) ?? []];
		this.options.layoutSizeParams !== "inherit" && (l.some((e) => e.name === "width") || (this.#a = this.#h("width")), l.some((e) => e.name === "height") || (this.#o = this.#h("height")));
		for (let e of l) {
			if ("expr" in e) {
				let { usesScaleHelper: t, globals: n } = f(e.expr, this.paramRuntime.getSpecLocation(e, ["expr"])), r = n.some((e) => this.paramRuntime.isPendingParam(e));
				if (t || r) {
					this.paramRuntime.registerParam(e, { defer: !0 }), this.#d.push(e.name);
					continue;
				}
			}
			this.paramRuntime.registerParam(e);
		}
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
		return Ze(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return y(e) ? this.paramRuntime.evaluateAndGet(e) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		y(n) && this.paramRuntime.watchExpression(n, e, {
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
		return this._cache("size/padding", () => z.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return z.zero();
	}
	getStructuralOverhang() {
		return z.zero();
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
		return this._cache("size/size", () => this.isConfiguredVisible() ? new A(this.#g("width"), this.#g("height")) : j);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return j;
		let e = this.getSize();
		return new A(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	getViewportAnchor(e) {
		let t = this.spec[e];
		if (!t || typeof t != "object" || !("anchor" in t)) return "start";
		if (e !== "viewportWidth" && e !== "viewportHeight") throw new S("Anchors are supported only on viewport sizes.", this);
		if (!Be(t) && !y(t)) throw new S("An anchored viewport must define a size.", this);
		let n = t.anchor === void 0 ? "start" : t.anchor;
		if (n !== "start" && n !== "end") throw new S("Viewport anchor must be \"start\" or \"end\".", this);
		return n;
	}
	#g(e) {
		let { value: t, implicit: n } = this.#_(e), r = this.resolveSizeValue(e, t), i = q(r), a = e == "viewportWidth" || e == "viewportHeight";
		if (i) {
			if (a) throw new S(`Cannot use step-based size with "${e}"!`, this);
			let t = this.#x(e, r), i = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (i) {
				if (!("sizeForStep" in i)) throw new S(`Cannot use step-based size with "${i.type}" scale!`, this);
				let n = e == "width" ? "xOffset" : "yOffset", a = this.getScaleResolution(n)?.getScale(), o = r.for ?? (a && b(a.type) ? "offset" : "position"), s = t;
				if (o == "offset") {
					let t = i.paddingInner?.() ?? 1;
					if (t === 1) throw new S("Offset-step sizing requires a primary scale with nonzero bandwidth.", this);
					if (!a || !b(a.type)) throw new S(`Cannot use ${e}.step.for = "offset" without a discrete ${n} scale!`, this);
					let r = a, o = ee(a.domain().length, a.type === "point" ? 1 : r.paddingInner(), r.paddingOuter());
					s *= o / (1 - t);
				}
				return {
					px: i.sizeForStep(s),
					grow: 0
				};
			}
			if (n) return {
				px: t,
				grow: 0
			};
			throw new S(`Cannot use step-based size with "${e}"!`, this);
		}
		return (r && Ve(r)) ?? (a ? void 0 : {
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
		if (tt(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let n = e == "width" ? "x" : "y", r = this.getScaleResolution(n)?.getResolvedScaleType();
		return r && !b(r) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (this.getViewportAnchor(e), !y(t)) return t;
		let n = this.#C(e)();
		if (mt(n) || n === "container") return n;
		throw new S(`"${e}" ExprRef must resolve to a finite number or "container"!`, this);
	}
	registerSizeInvalidation() {
		this.#b("width"), this.#b("height"), this.#b("viewportWidth"), this.#b("viewportHeight");
	}
	isStepSized(e) {
		return q(this.#_(e).value);
	}
	#y(e, t) {
		let { value: n, implicit: r } = this.#_(e);
		if (!q(n)) return;
		let i = this.getScaleResolution(t);
		if (!i) {
			if (r) return;
			throw new S("Cannot use 'step' size without a scale!", this);
		}
		let a = () => {
			let t = this.getSize()[e];
			this.invalidateSizeCache();
			let n = this.getSize()[e];
			ze(t, n) || this.context.requestLayoutReflow();
		};
		if (this.registerDisposer(i.observeMapping(a)), n.for != "position") {
			let t = e == "width" ? "xOffset" : "yOffset", n = this.getScaleResolution(t);
			n && b(n.getResolvedScaleType()) && this.registerDisposer(n.observeMapping(a));
		}
	}
	#b(e) {
		let { value: t } = this.#_(e);
		y(t) ? this.#S(e, t) : q(t) && y(t.step) && this.#S(e + ".step", t.step);
	}
	#x(e, t) {
		let n = y(t.step) ? this.#C(e + ".step")() : t.step;
		if (mt(n)) return n;
		throw new S(`"${e}.step" ExprRef must resolve to a finite number!`, this);
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
		if (!t) throw new S(`"${e}" ExprRef was not registered before layout!`, this);
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
		for (let t of e?.terminals ?? []) t.children.length === 0 && this.context.dataFlow.pruneBranch(t);
		e?.collector && (this.context.dataFlow.pruneBranch(e.collector), this.context.dataFlow.removeCollector(e.collector)), e?.dataSource && e.dataSource.view === this && !e.dataSource.shareKey && this.context.dataFlow.removeDataSource(e.dataSource), this.paramRuntime.dispose(), this.namedDataScope.dispose();
		for (let e of this.flowOutputs) e.producerView = void 0;
		this.flowOutputs.clear(), this.flowHandle = void 0, this.context.dataFlow.loadingStatusRegistry.delete(this);
	}
	registerDisposer(e) {
		this.#f.push(e);
	}
	assertCanDisposeSubtree() {
		let e = new Set(this.getDescendants());
		for (let t of e) for (let n of t.flowOutputs) if (n.owner && !e.has(n.owner)) throw Error("Cannot remove a shared output producer while its owner survives.");
	}
	disposeSubtree({ checkDependencies: e = !0 } = {}) {
		e && this.assertCanDisposeSubtree();
		let t = (e) => {
			for (let t of Object.values(e.resolutions.scale)) t.dispose();
		};
		t.postOrder = (e) => {
			e.dispose();
		}, this.visit(t);
	}
	configurePostScaleParams() {
		if (this.#u) return;
		this.#u = !0, this.#y("width", "x"), this.#y("height", "y");
		let e = this.#d;
		if (e.length) {
			this.#l = !1;
			for (let t of e) this.paramRuntime.getValue(t);
			this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				this.#l = !0, this.#T();
			}));
		}
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === K) && (this.opacityFunction = dt(this));
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
		}), this.layoutCoords = t, n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, ae(t, re(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? z.zero() : this.getPadding();
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
		return d(t) ? [t.field] : this.options.inheritEncoding ? this.layoutParent?.getFacetFields(this) : [];
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
		let n = v(e);
		for (let e of this.getDataAncestors()) {
			let r = e.resolutions[t][n];
			if (r || e.isResolutionBoundary(n)) return r;
		}
	}
	isResolutionBoundary(e) {
		return this.options.resolutionBoundaryChannels?.some((t) => t === v(e)) ?? !1;
	}
	getLegendResolution(e) {
		let t = v(e);
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
		return le(() => this.dataParent?.getBaseUrl(), Je(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let t = this.spec.title;
		if (t) return e(t) ? t : y(t.text) ? this.paramRuntime.evaluateAndGet(t.text) : t.text;
	}
	_cache(e, t) {
		return de(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				x(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) x(t, e);
				break;
			case "progeny": this.visit((t) => x(t, e));
		}
	}
	invalidateSizeCache() {
		x(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function ut(e) {
	return "unitsPerPixel" in e;
}
function dt(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (u(t)) return (e) => e * t;
		if (ut(t)) {
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
			}, i = pt(t.values, "opacity.values", e);
			if (!r(t.unitsPerPixel)) throw new S("\"opacity.unitsPerPixel\" must be an array.", e);
			let o = () => 1, s = [], c = () => {
				let t = ft(pt(s.map((e) => e()), "opacity.unitsPerPixel", e), i, e), n = m().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				o = (e) => n(e);
			};
			s = t.unitsPerPixel.map((t) => {
				if (y(t)) {
					let n = e.paramRuntime.watchExpression(t, () => {
						c(), e.context.animator.requestRender();
					});
					return () => n(null);
				}
				return () => t;
			}), c();
			let l = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return a(e.scale.domain()) / t;
			}, u;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) u = () => (l(t) + l(r)) / 2;
				else if (t) u = () => l(t);
				else if (r) u = () => l(r);
				else throw new S("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new S("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				u = () => l(r);
			}
			return (e) => o(u()) * e;
		}
		if (y(t)) {
			let n = e.paramRuntime.watchExpression(t, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return K;
}
function ft(e, t, n) {
	if (!e.length) throw new S("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new S("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new S("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new S("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function pt(e, t, n) {
	if (!r(e)) throw new S("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!u(e) || !Number.isFinite(e)) throw new S("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var q = (e) => !!e && typeof e == "object" && "step" in e;
function mt(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var J = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakMap();
function ht(e, t) {
	_t(e, t, "Import");
}
function gt(e, t) {
	_t(e, t, "View");
}
function _t(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	J.set(e, { name: t });
}
function vt(e) {
	return J.get(e);
}
function yt(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Y.set(e, n);
}
function bt(e, t = {}) {
	Qe(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function xt(e) {
	return e.getLayoutAncestors().some(et);
}
function X(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = J.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function St(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: X(e),
		view: t
	};
}
function Ct(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: X(e),
		param: t
	};
}
function wt(e) {
	return Mt(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function Tt(e, t) {
	e.visit((e) => {
		let n = $e(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function Et(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") return t(e);
	});
}
function Dt(e, t) {
	if (Nt(t), !Vt(e, t.scope)) return;
	let n = [];
	if (Q(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function Ot(e, t) {
	if (Mt(t), !Vt(e, t.scope)) return;
	let n = [];
	if (Q(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Z(i, e) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function kt(e, t) {
	e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Z(r, e) && t({
			view: e,
			param: r,
			selector: Ct(e, n)
		});
	});
}
function At(e) {
	let t = [];
	return kt(e, (e) => t.push(e)), t;
}
function jt(e) {
	let t = [];
	for (let n of Pt(e)) {
		let r = Ft(n);
		Lt(e, r, t), Rt(e, r, t);
	}
	return t;
}
function Mt(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function Nt(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Z(e, t) {
	if (e.persist === !1) return !1;
	if (e.push === "outer") {
		let n = t.paramRuntime.findRuntimeForParam(e.name);
		if (_(n.paramConfigs.get(e.name))) return !1;
	}
	return _(e) ? !0 : p(e) ? !!e.bind : !1;
}
function Pt(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = J.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function Ft(e) {
	return X(e);
}
function It(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function Lt(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	Q(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!Z(n, e)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + It(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function Rt(e, t, n) {
	let r = zt(e, t);
	if (!r.length) return;
	let i = r.filter((e) => Bt(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = J.get(e), n = t ? t.name : void 0;
		typeof n == "string" && n.length && a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + It(t) + ".",
		scope: t
	});
}
function zt(e, t) {
	let n = [];
	return Q(e, t, (e) => {
		if (X(e).length !== t.length + 1) return;
		let r = J.get(e);
		r && typeof r.name == "string" && n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function Bt(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Y.get(e);
		if (n === "excludeSubtree") return W;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Z(n, e)) return t = !0, G;
		}
	}), t;
}
function Vt(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if (Q(e, r, (e) => {
			let n = J.get(e);
			if (n && n.name === i && X(e).length === r.length + 1) {
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
		if (a !== "exclude" && Ht(e, t, r, i)) return n(e);
	});
}
function Ht(e, t, n, r) {
	let i = X(e);
	return Ut(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : $(t, i);
}
function Ut(e, t) {
	return e.length === t.length && $(e, t);
}
function $(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
export { L as A, Le as B, tt as C, Ke as D, z as E, F, De as G, O as H, Me as I, E as K, Ve as L, Ie as M, Pe as N, A as O, I as P, Ne as R, et as S, qe as T, Oe as U, Fe as V, D as W, W as _, St as a, ot as b, bt as c, gt as d, Ot as f, Tt as g, Et as h, X as i, P as j, j as k, yt as l, jt as m, vt as n, xt as o, Dt as p, ge as q, Ct as r, wt as s, At as t, ht as u, G as v, Ze as w, rt as x, lt as y, He as z };
