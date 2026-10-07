import { X as e, Z as t, at as n, et as r } from "./vega-scale-9laB5MTw.js";
import { F as i, G as a, I as o, M as s, R as c, at as l, et as u, ft as d, nt as f, rt as p, st as m, t as h, tt as g } from "./src-ejcdI7vN.js";
import { I as _, L as v, Qt as ee, _n as te, d as ne, en as re, hn as ie, xn as ae } from "./clipOptions-DXTezKOk.js";
import { p as oe } from "./indexer-DLP7rrqY.js";
import { D as se, T as ce, a as le, f as ue, h as de, n as fe, p as pe } from "./viewSelectors-D-JFMBCv.js";
//#region ../../node_modules/redux/dist/redux.mjs
function y(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var me = typeof Symbol == "function" && Symbol.observable || "@@observable", he = () => Math.random().toString(36).substring(7).split("").join("."), ge = {
	INIT: `@@redux/INIT${/* @__PURE__ */ he()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ he()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${he()}`
};
function _e(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ve(e, t, n) {
	if (typeof e != "function") throw Error(y(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(y(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(y(1));
		return n(ve)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(y(3));
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(y(4));
		if (c) throw Error(y(5));
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(y(6));
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!_e(e)) throw Error(y(7));
		if (e.type === void 0) throw Error(y(8));
		if (typeof e.type != "string") throw Error(y(17));
		if (c) throw Error(y(9));
		try {
			c = !0, i = r(i, e);
		} finally {
			c = !1;
		}
		return (a = o).forEach((e) => {
			e();
		}), e;
	}
	function p(e) {
		if (typeof e != "function") throw Error(y(10));
		r = e, f({ type: ge.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(y(11));
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[me]() {
				return this;
			}
		};
	}
	return f({ type: ge.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[me]: m
	};
}
function ye(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: ge.INIT }) === void 0) throw Error(y(12));
		if (n(void 0, { type: ge.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(y(13));
	});
}
function be(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		ye(n);
	} catch (e) {
		i = e;
	}
	return function(e = {}, t) {
		if (i) throw i;
		let a = !1, o = {};
		for (let i = 0; i < r.length; i++) {
			let s = r[i], c = n[s], l = e[s], u = c(l, t);
			if (u === void 0) throw t && t.type, Error(y(14));
			o[s] = u, a ||= u !== l;
		}
		return a ||= r.length !== Object.keys(e).length, a ? o : e;
	};
}
function xe(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function Se(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(y(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = xe(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function Ce(e) {
	return _e(e) && "type" in e && typeof e.type == "string";
}
//#endregion
//#region ../../node_modules/immer/dist/immer.mjs
var we = Symbol.for("immer-nothing"), Te = Symbol.for("immer-draftable"), b = Symbol.for("immer-state");
function x(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var S = Object, C = S.getPrototypeOf, Ee = "constructor", De = "prototype", Oe = "configurable", ke = "enumerable", Ae = "writable", w = "value", T = (e) => !!e && !!e[b];
function E(e) {
	return e ? Ne(e) || Be(e) || !!e[Te] || !!e[Ee]?.[Te] || Ve(e) || He(e) : !1;
}
var je = S[De][Ee].toString(), Me = /* @__PURE__ */ new WeakMap();
function Ne(e) {
	if (!e || !Ue(e)) return !1;
	let t = C(e);
	if (t === null || t === S[De]) return !0;
	let n = S.hasOwnProperty.call(t, Ee) && t[Ee];
	if (n === Object) return !0;
	if (!O(n)) return !1;
	let r = Me.get(n);
	return r === void 0 && (r = Function.toString.call(n), Me.set(n, r)), r === je;
}
function Pe(e) {
	return T(e) || x(15, e), e[b].base_;
}
function Fe(e, t, n = !0) {
	D(e) === 0 ? (n ? Reflect.ownKeys(e) : S.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function D(e) {
	let t = e[b];
	return t ? t.type_ : Be(e) ? 1 : Ve(e) ? 2 : He(e) ? 3 : 0;
}
var Ie = (e, t, n = D(e)) => n === 2 ? e.has(t) : S[De].hasOwnProperty.call(e, t), Le = (e, t, n = D(e)) => n === 2 ? e.get(t) : e[t], Re = (e, t, n, r = D(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function ze(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Be = Array.isArray, Ve = (e) => e instanceof Map, He = (e) => e instanceof Set, Ue = (e) => typeof e == "object", O = (e) => typeof e == "function", We = (e) => typeof e == "boolean";
function Ge(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var k = (e) => e.copy_ || e.base_, Ke = (e) => e.modified_ ? e.copy_ : e.base_;
function qe(e, t) {
	if (Ve(e)) return new Map(e);
	if (He(e)) return new Set(e);
	if (Be(e)) return Array[De].slice.call(e);
	let n = Ne(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = S.getOwnPropertyDescriptors(e);
		delete t[b];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[Ae] === !1 && (a[Ae] = !0, a[Oe] = !0), (a.get || a.set) && (t[i] = {
				[Oe]: !0,
				[Ae]: !0,
				[ke]: a[ke],
				[w]: e[i]
			});
		}
		return S.create(C(e), t);
	}
	{
		let t = C(e);
		if (t !== null && n) return { ...e };
		let r = S.create(t);
		return S.assign(r, e);
	}
}
function A(e, t = !1) {
	return Xe(e) || T(e) || !E(e) ? e : (D(e) > 1 && S.defineProperties(e, {
		set: Ye,
		add: Ye,
		clear: Ye,
		delete: Ye
	}), S.freeze(e), t && Fe(e, (e, t) => {
		A(t, !0);
	}, !1), e);
}
function Je() {
	x(2);
}
var Ye = { [w]: Je };
function Xe(e) {
	return e === null || !Ue(e) || S.isFrozen(e);
}
var Ze = "MapSet", Qe = "Patches", $e = "ArrayMethods", et = {};
function j(e) {
	let t = et[e];
	return t || x(0, e), t;
}
var tt = (e) => !!et[e], nt, rt = () => nt, it = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: tt(Ze) ? j(Ze) : void 0,
	arrayMethodsPlugin_: tt($e) ? j($e) : void 0
});
function at(e, t) {
	t && (e.patchPlugin_ = j(Qe), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ot(e) {
	st(e), e.drafts_.forEach(lt), e.drafts_ = null;
}
function st(e) {
	e === nt && (nt = e.parent_);
}
var ct = (e) => nt = it(nt, e);
function lt(e) {
	let t = e[b];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ut(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[b].modified_ && (ot(t), x(4)), E(e) && (e = dt(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[b].base_, e, t);
	} else e = dt(t, n);
	return ft(t, e, !0), ot(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === we ? void 0 : e;
}
function dt(e, t) {
	if (Xe(t)) return t;
	let n = t[b];
	if (!n) return bt(t, e.handledSet_, e);
	if (!mt(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		vt(n, e);
	}
	return n.copy_;
}
function ft(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && A(t, n);
}
function pt(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var mt = (e, t) => e.scope_ === t, ht = [];
function gt(e, t, n, r) {
	let i = k(e), a = e.type_;
	if (r !== void 0 && Le(i, r, a) === t) {
		Re(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Fe(i, (e, n) => {
			if (T(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? ht;
	for (let e of o) Re(i, e, n, a);
}
function _t(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !mt(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = Ke(i);
		gt(e, i.draft_ ?? i, a, n), vt(i, r);
	});
}
function vt(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		pt(e);
	}
}
function yt(e, t, n) {
	let { scope_: r } = e;
	if (T(n)) {
		let i = n[b];
		mt(i, r) && i.callbacks_.push(function() {
			kt(e), gt(e, n, Ke(i), t);
		});
	} else E(n) && e.callbacks_.push(function() {
		let i = k(e);
		e.type_ === 3 ? i.has(n) && bt(n, r.handledSet_, r) : Le(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && bt(Le(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function bt(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || T(e) || t.has(e) || !E(e) || Xe(e) ? e : (t.add(e), Fe(e, (r, i) => {
		if (T(i)) {
			let t = i[b];
			mt(t, n) && (Re(e, r, Ke(t), e.type_), pt(t));
		} else E(i) && bt(i, t, n);
	}), e);
}
function xt(e, t) {
	let n = Be(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : rt(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = St;
	n && (i = [r], a = Ct);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var St = {
	get(e, t) {
		if (t === b) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = k(e);
		if (!Ie(i, t, e.type_)) return Et(e, i, t);
		let a = i[t];
		if (e.finalized_ || !E(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && Ge(t)) return a;
		if (a === wt(e.base_, t) || Tt(e, t, a)) {
			kt(e);
			let n = e.type_ === 1 ? +t : t, r = jt(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in k(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(k(e));
	},
	set(e, t, n) {
		let r = Dt(k(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = wt(k(e), t), i = r?.[b];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (ze(n, r) && (n !== void 0 || Ie(e.base_, t, e.type_))) return !0;
			kt(e), Ot(e);
		}
		return e.copy_[t] === n && (n !== void 0 || Ie(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) ? !0 : (e.copy_[t] = n, e.assigned_.set(t, !0), yt(e, t, n), !0);
	},
	deleteProperty(e, t) {
		return kt(e), wt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Ot(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = k(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[Ae]: !0,
			[Oe]: e.type_ !== 1 || t !== "length",
			[ke]: r[ke],
			[w]: n[t]
		};
	},
	defineProperty() {
		x(11);
	},
	getPrototypeOf(e) {
		return C(e.base_);
	},
	setPrototypeOf() {
		x(12);
	}
}, Ct = {};
for (let e in St) {
	let t = St[e];
	Ct[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
Ct.deleteProperty = function(e, t) {
	return Ct.set.call(this, e, t, void 0);
}, Ct.set = function(e, t, n) {
	return St.set.call(this, e[0], t, n, e[0]);
};
function wt(e, t) {
	let n = e[b];
	return (n ? k(n) : e)[t];
}
function Tt(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || e.assigned_?.get(t) || !E(n) || n[b] ? !1 : e.baseRefs_.has(n);
}
function Et(e, t, n) {
	let r = Dt(t, n);
	return r ? w in r ? r[w] : r.get?.call(e.draft_) : void 0;
}
function Dt(e, t) {
	if (!(t in e)) return;
	let n = C(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = C(n);
	}
}
function Ot(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && Ot(e.parent_));
}
function kt(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), qe(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var At = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (O(e) && !O(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			O(t) || x(6), n !== void 0 && !O(n) && x(7);
			let r;
			if (E(e)) {
				let i = ct(this), a = jt(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? ot(i) : st(i);
				}
				return at(i, n), ut(r, i);
			}
			if (!e || !Ue(e)) {
				if (r = t(e), r === void 0 && (r = e), r === we && (r = void 0), this.autoFreeze_ && A(r, !0), n) {
					let t = [], i = [];
					j(Qe).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			}
			x(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (O(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, We(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), We(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), We(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		E(e) || x(8), T(e) && (e = Mt(e));
		let t = ct(this), n = jt(t, e, void 0);
		return n[b].isManual_ = !0, st(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[b];
		(!n || !n.isManual_) && x(9);
		let { scope_: r } = n;
		return at(r, t), ut(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = j(Qe).applyPatches_;
		return T(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function jt(e, t, n, r) {
	let [i, a] = Ve(t) ? j(Ze).proxyMap_(t, n) : He(t) ? j(Ze).proxySet_(t, n) : xt(t, n);
	return (n?.scope_ ?? rt()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? _t(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Mt(e) {
	return T(e) || x(10, e), Nt(e);
}
function Nt(e) {
	if (!E(e) || Xe(e)) return e;
	let t = e[b], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = qe(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = qe(e, !0);
	return Fe(n, (e, t) => {
		Re(n, e, Nt(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from;
var Pt = new At().produce, Ft = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, It = typeof WeakRef > "u" ? Ft : WeakRef, Lt = 0, Rt = 1;
function M() {
	return {
		s: Lt,
		v: void 0,
		o: null,
		p: null
	};
}
function zt(e) {
	return e instanceof It ? e.deref() : e;
}
function Bt(e, t = {}) {
	let n = M(), { resultEqualityCheck: r, maxSize: i } = t, a = i !== void 0;
	if (a && (!Number.isInteger(i) || i < 1)) throw TypeError(`maxSize must be a positive integer, received: ${i}`);
	let o = null, s = 0, c, l = 0;
	function u() {
		s >= i && (o = n, n = M(), s = 0);
	}
	function d() {
		let t = n, { length: i } = arguments;
		for (let e = 0, n = i; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = M(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = M(), e.set(n, t), s++) : t = r;
			}
		}
		if (t.s === Rt) return t.v;
		if (o !== null) {
			let e = o;
			for (let t = 0, n = i; t < n; t++) {
				let n = arguments[t], r;
				if (typeof n == "function" || typeof n == "object" && n) {
					let t = e.o;
					r = t === null ? void 0 : t.get(n);
				} else {
					let t = e.p;
					r = t === null ? void 0 : t.get(n);
				}
				if (r === void 0) {
					e = null;
					break;
				}
				e = r;
			}
			if (e !== null && e.s === Rt) {
				let n = t;
				return n.s = Rt, n.v = e.v, u(), e.v;
			}
		}
		let d = t, f = e.apply(null, arguments);
		if (l++, r) {
			let e = zt(c);
			e != null && r(e, f) && (f = e, l !== 0 && l--), c = typeof f == "object" && f || typeof f == "function" ? /* @__PURE__ */ new It(f) : f;
		}
		return d.s = Rt, d.v = f, a && u(), f;
	}
	return d.clearCache = () => {
		n = M(), o = null, s = 0, d.resetResultsCount();
	}, d.resultsCount = () => l, d.resetResultsCount = () => {
		l = 0;
	}, d;
}
function Vt(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Ht(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Ut = (e) => Array.isArray(e) ? e : [e];
function Wt(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return Ht(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Gt(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Vt(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = Bt, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = Ut(c), f = Ut(u), p = Wt(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let { length: e } = p, t = Array(e);
			for (let n = 0; n < e; n++) t[n] = p[n].apply(null, arguments);
			return i = m.apply(null, t), i;
		}, ...f);
		return Object.assign(h, {
			resultFunc: o,
			memoizedResultFunc: m,
			dependencies: p,
			dependencyRecomputations: () => r,
			resetDependencyRecomputations: () => {
				r = 0;
			},
			lastResult: () => i,
			recomputations: () => t,
			resetRecomputations: () => {
				t = 0;
			},
			memoize: s,
			argsMemoize: l
		});
	};
	return Object.assign(r, { withTypes: () => r }), r;
}
var Kt = /* @__PURE__ */ Gt(Bt);
//#endregion
//#region ../../node_modules/redux-thunk/dist/redux-thunk.mjs
function qt(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var Jt = qt(), Yt = qt, Xt = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? xe : xe.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function Zt(e, t) {
	function n(...n) {
		if (t) {
			let r = t(...n);
			if (!r) throw Error(N(0));
			return {
				type: e,
				payload: r.payload,
				..."meta" in r && { meta: r.meta },
				..."error" in r && { error: r.error }
			};
		}
		return {
			type: e,
			payload: n[0]
		};
	}
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => Ce(t) && t.type === e, n;
}
var Qt = class e extends Array {
	constructor(...t) {
		super(...t), Object.setPrototypeOf(this, e.prototype);
	}
	static get [Symbol.species]() {
		return e;
	}
	concat(...e) {
		return super.concat.apply(this, e);
	}
	prepend(...t) {
		return t.length === 1 && Array.isArray(t[0]) ? new e(...t[0].concat(this)) : new e(...t.concat(this));
	}
};
function $t(e) {
	return E(e) ? Pt(e, () => {}) : e;
}
function en(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function tn(e) {
	return typeof e == "boolean";
}
var nn = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new Qt();
	return t && (tn(t) ? a.push(Jt) : a.push(Yt(t.extraArgument))), a;
}, rn = "RTK_autoBatch", an = (e) => (t) => {
	setTimeout(t, e);
}, on = (e, t) => (n) => {
	let r = !1, i, a, o = () => {
		r || (r = !0, cancelAnimationFrame(i), clearTimeout(a), n());
	};
	i = e(o), a = setTimeout(o, t);
}, sn = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? on(window.requestAnimationFrame, 100) : an(10) : e.type === "callback" ? e.queueNotification : an(e.timeout), l = () => {
		o = !1, a && (a = !1, s.forEach((e) => e()));
	};
	return Object.assign({}, r, {
		subscribe(e) {
			let t = r.subscribe(() => i && e());
			return s.add(e), () => {
				t(), s.delete(e);
			};
		},
		dispatch(e) {
			try {
				return i = !e?.meta?.[rn], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, cn = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new Qt(e);
	return n && r.push(sn(typeof n == "object" ? n : void 0)), r;
};
function ln(e) {
	let t = nn(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (_e(n)) c = be(n);
	else throw Error(N(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = xe;
	i && (u = Xt({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = cn(Se(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return ve(c, o, p);
}
function un(e) {
	let t = {}, n = [], r, i = {
		addCase(e, n) {
			let r = typeof e == "string" ? e : e.type;
			if (!r) throw Error(N(28));
			if (r in t) throw Error(N(29));
			return t[r] = n, i;
		},
		addAsyncThunk(e, r) {
			return r.pending && (t[e.pending.type] = r.pending), r.rejected && (t[e.rejected.type] = r.rejected), r.fulfilled && (t[e.fulfilled.type] = r.fulfilled), r.settled && n.push({
				matcher: e.settled,
				reducer: r.settled
			}), i;
		},
		addMatcher(e, t) {
			return n.push({
				matcher: e,
				reducer: t
			}), i;
		},
		addDefaultCase(e) {
			return r = e, i;
		}
	};
	return e(i), [
		t,
		n,
		r
	];
}
function dn(e) {
	return typeof e == "function";
}
function fn(e, t) {
	let [n, r, i] = un(t), a;
	if (dn(e)) a = () => $t(e());
	else {
		let t = $t(e);
		a = () => t;
	}
	function o(e = a(), t) {
		let o = [n[t.type], ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e)];
		return o.filter((e) => !!e).length === 0 && (o = [i]), o.reduce((e, n) => {
			if (n) {
				if (T(e)) {
					let r = n(e, t);
					return r === void 0 ? e : r;
				}
				if (E(e)) return Pt(e, (e) => n(e, t));
				{
					let r = n(e, t);
					if (r === void 0) {
						if (e === null) return e;
						throw Error(N(9));
					}
					return r;
				}
			}
			return e;
		}, e);
	}
	return o.getInitialState = a, o;
}
var pn = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function mn(e, t) {
	return `${e}/${t}`;
}
function hn({ creators: e } = {}) {
	let t = e?.asyncThunk?.[pn];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(N(11));
		let i = (typeof e.reducers == "function" ? e.reducers(vn()) : e.reducers) || {}, a = Object.keys(i), o = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		}, s = {
			addCase(e, t) {
				let n = typeof e == "string" ? e : e.type;
				if (!n) throw Error(N(12));
				if (n in o.sliceCaseReducersByType) throw Error(N(13));
				return o.sliceCaseReducersByType[n] = t, s;
			},
			addMatcher(e, t) {
				return o.sliceMatchers.push({
					matcher: e,
					reducer: t
				}), s;
			},
			exposeAction(e, t) {
				return o.actionCreators[e] = t, s;
			},
			exposeCaseReducer(e, t) {
				return o.sliceCaseReducersByName[e] = t, s;
			}
		};
		a.forEach((r) => {
			let a = i[r], o = {
				reducerName: r,
				type: mn(n, r),
				createNotation: typeof e.reducers == "function"
			};
			bn(a) ? Sn(o, a, s, t) : yn(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? un(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return fn(e.initialState, (e) => {
				for (let t in i) e.addCase(t, i[t]);
				for (let t of o.sliceMatchers) e.addMatcher(t.matcher, t.reducer);
				for (let t of n) e.addMatcher(t.matcher, t.reducer);
				r && e.addDefaultCase(r);
			});
		}
		let l = (e) => e, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new WeakMap(), f;
		function p(e, t) {
			return f ||= c(), f(e, t);
		}
		function m() {
			return f ||= c(), f.getInitialState();
		}
		function h(t, n = !1) {
			function r(e) {
				let i = e[t];
				return i === void 0 && n && (i = en(d, r, m)), i;
			}
			function i(t = l) {
				return en(en(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = gn(a, t, () => en(d, t, m), n);
					return r;
				});
			}
			return {
				reducerPath: t,
				getSelectors: i,
				get selectors() {
					return i(r);
				},
				selectSlice: r
			};
		}
		let g = {
			name: n,
			reducer: p,
			actions: o.actionCreators,
			caseReducers: o.sliceCaseReducersByName,
			getInitialState: m,
			...h(r),
			injectInto(e, { reducerPath: t, ...n } = {}) {
				let i = t ?? r;
				return e.inject({
					reducerPath: i,
					reducer: p
				}, n), {
					...g,
					...h(i, !0)
				};
			}
		};
		return g;
	};
}
function gn(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var _n = /* @__PURE__ */ hn();
function vn() {
	function e(e, t) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator: e,
			...t
		};
	}
	return e.withTypes = () => e, {
		reducer(e) {
			return Object.assign({ [e.name](...t) {
				return e(...t);
			} }[e.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(e, t) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare: e,
				reducer: t
			};
		},
		asyncThunk: e
	};
}
function yn({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !xn(r)) throw Error(N(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? Zt(e, o) : Zt(e));
}
function bn(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function xn(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function Sn({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(N(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || Cn,
		pending: s || Cn,
		rejected: c || Cn,
		settled: l || Cn
	});
}
function Cn() {}
var wn = "listener", Tn = "completed", En = "cancelled";
`${En}`, `${Tn}`, `${wn}${En}`, `${wn}${Tn}`;
var { assign: Dn } = Object, On = "listenerMiddleware", kn = /* @__PURE__ */ Dn(/* @__PURE__ */ Zt(`${On}/add`), { withTypes: () => kn });
`${On}`;
var An = /* @__PURE__ */ Dn(/* @__PURE__ */ Zt(`${On}/remove`), { withTypes: () => An });
function N(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region ../app/src/viewSettingsSlice.js
var jn = { visibilities: {} }, Mn = _n({
	name: "viewSettings",
	initialState: jn,
	reducers: {
		setVisibility: (e, t) => {
			e.visibilities[t.payload.key] = t.payload.visibility;
		},
		restoreDefaultVisibility: (e, t) => {
			delete e.visibilities[t.payload];
		},
		restoreDefaultVisibilities: (e, t) => jn,
		setViewSettings: (e, t) => ({
			...jn,
			...t.payload ? t.payload : {}
		})
	}
});
//#endregion
//#region ../app/src/configurableVisibilityUtils.js
function Nn(e) {
	return e.spec.configurableVisibility;
}
function Pn(e) {
	let t = Nn(e);
	if (t && typeof t == "object" && typeof t.group == "string" && t.group.length) return t.group;
}
function Fn(e) {
	let t = Nn(e);
	return t === void 0 ? !(e.layoutParent && e.layoutParent.spec && "layer" in e.layoutParent.spec) : t !== !1;
}
function In(e) {
	return Nn(e) !== void 0;
}
function P(e) {
	return "v:" + JSON.stringify({
		scope: e.scope,
		view: e.view
	});
}
function Ln(e) {
	if (typeof e != "string" || !e.startsWith("v:")) return;
	let t = e.slice(2), n;
	try {
		n = JSON.parse(t);
	} catch {
		return;
	}
	if (n && Array.isArray(n.scope) && typeof n.view == "string") return {
		scope: n.scope,
		view: n.view
	};
}
function Rn(e) {
	if (e.explicitName) return P(le(e));
}
function zn(e, t) {
	let n = Rn(t);
	if (n && qn(e, n)) return e[n];
	let r = t.explicitName;
	if (r && qn(e, r)) return e[r];
}
function Bn(e) {
	if (!e || !e.visibilities) return { visibilities: {} };
	let t = e.visibilities;
	if (Array.isArray(t)) {
		let e = {};
		for (let n of t) n && Array.isArray(n.scope) && typeof n.view == "string" && typeof n.visible == "boolean" && (e[P({
			scope: n.scope,
			view: n.view
		})] = n.visible);
		return { visibilities: e };
	}
	return typeof t == "object" ? { visibilities: { ...t } } : { visibilities: {} };
}
function Vn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) {
		let t = Ln(e);
		t && n.set(P(t), r);
	}
	let r = Object.keys(t).filter((e) => !Ln(e));
	if (r.length && e) {
		let i = new Set(r), a = /* @__PURE__ */ new Map();
		de(e, (e) => {
			let t = e.explicitName;
			if (!t || !i.has(t)) return;
			let n = a.get(t) ?? [];
			n.push(e), a.set(t, n);
		});
		for (let e of r) {
			let r = a.get(e) ?? [];
			if (r.length) {
				r.length > 1 && console.warn("Legacy visibility key \"" + e + "\" matches multiple views. Applying to all matches.");
				for (let i of r) {
					let r = Rn(i);
					r && !n.has(r) && n.set(r, t[e]);
				}
			}
		}
	}
	let i = [];
	for (let [e, t] of n) {
		let n = Ln(e);
		n && i.push({
			scope: n.scope,
			view: n.view,
			visible: t
		});
	}
	return i;
}
function Hn(e, t) {
	let n = Vn(e, Gn(e, t.visibilities));
	if (n.length) return { visibilities: n };
}
function Un(e) {
	let t = /* @__PURE__ */ new Map();
	de(e, (e) => {
		let n = Rn(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function Wn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Kn(e)) {
		let e = r.map((e) => e.selectorKey);
		for (let i of r) t.set(i.selectorKey, {
			groupKey: n,
			memberKeys: e
		});
	}
	return t;
}
function Gn(e, t) {
	let n = { ...t };
	for (let r of Kn(e).values()) {
		let e = r.filter((e) => {
			let n = zn(t, e.view);
			return n === void 0 ? e.view.isVisibleInSpec() : n;
		});
		if (e.length <= 1) continue;
		let i = e[0].selectorKey;
		for (let e of r) e.selectorKey !== i && (n[e.selectorKey] = !1);
	}
	return n;
}
function Kn(e) {
	let t = /* @__PURE__ */ new Map();
	return de(e, (e) => {
		if (!Fn(e) || !e.explicitName) return;
		let n = Pn(e);
		if (!n) return;
		let r = le(e), i = P(r), a = fe(e)?.name && r.scope.length ? r.scope.slice(0, r.scope.length - 1) : r.scope, o = JSON.stringify({
			scope: a,
			group: n
		}), s = t.get(o);
		s ? s.push({
			view: e,
			selectorKey: i
		}) : t.set(o, [{
			view: e,
			selectorKey: i
		}]);
	}), t;
}
function qn(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../app/src/sampleView/sampleViewTypes.js
function Jn(e) {
	return "aggregation" in e && "interval" in e && (Yn(e.interval) || Xn(e.interval));
}
function Yn(e) {
	return Array.isArray(e);
}
function Xn(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "selection" && "selector" in e;
}
//#endregion
//#region ../app/src/sampleView/intervalReferenceResolver.js
function Zn(e, t) {
	if (Yn(t)) return t;
	if (!Xn(t)) throw Error("Unsupported interval reference.");
	if (!e) throw Error("Cannot resolve selection-backed interval because the root view is unavailable.");
	let n = ue(e, t.selector);
	if (!n) throw Error(`Cannot resolve interval source selection "${t.selector.param}" in import scope ${JSON.stringify(t.selector.scope)}.`);
	let r = n.view.paramRuntime.getValue(t.selector.param);
	if (!r || !v(r) || !_(r)) throw Error(`Interval source selection "${t.selector.param}" is empty. Create a brush selection before running this action.`);
	let i = r.intervals.x;
	if (!i || i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number") throw Error(`Interval source selection "${t.selector.param}" must provide a numeric x interval.`);
	return [i[0], i[1]];
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFeatureTraversal.js
function Qn(e, t, n, r, i, a, o) {
	let s = !n || t && t.equals(n);
	for (let c of e) {
		let e = t(c);
		if (s) e >= i && e <= a && o(c, 1);
		else {
			let t = $n(e, n(c), i, a, r);
			t > 0 && o(c, t);
		}
	}
}
function $n(e, t, n, r, i) {
	return i === "endpoints" ? +(e >= n && e <= r || t >= n && t <= r) : i === "encloses" ? e >= n && t <= r ? t - e : 0 : Math.max(0, Math.min(t, r) - Math.max(e, n));
}
function er(e, t) {
	if (!c(t)) return t;
	let n = e.getScale(), r = "genome" in n ? n.genome() : void 0;
	if (!r) throw Error("Encountered a chromosomal locus but no genome is available.");
	return r.toContinuous(t.chrom, t.pos);
}
function tr(e, t, n) {
	let r = er(e, t[0]), i = er(e, t[1]);
	if (typeof r != "number" || typeof i != "number") throw Error(n);
	return r <= i ? [r, i] : [i, r];
}
//#endregion
//#region ../app/src/sampleView/selectionFeatureFieldValues.js
function nr(e, t, n) {
	return rr(e, {
		type: "selection",
		selector: t
	}, n);
}
function rr(e, t, n) {
	let r = e.getCollector(), i = e.getDataAccessor("x");
	if (!r || !i) return;
	let a = Zn(e.getLayoutAncestors().at(-1), t), [o, s] = tr(e.getScaleResolution("x"), a, "Selection feature summaries require numeric intervals."), c = e.getDataAccessor("x2"), l = e.mark?.defaultHitTestMode ?? "intersects", u = [];
	for (let e of r.facetBatches.values()) Qn(e, i, c, l, o, s, (e) => {
		u.push(e[n]);
	});
	return u;
}
//#endregion
//#region ../app/src/charts/boxplotChart.js
var ir = Object.freeze({
	statsName: "boxplot_stats",
	outliersName: "boxplot_outliers",
	groupField: "group",
	valueField: "value",
	sampleField: "sample",
	groupType: "nominal",
	bandPadding: .3,
	groupTitle: void 0,
	valueTitle: void 0,
	width: void 0,
	height: void 0,
	embedOptions: void 0,
	coef: void 0,
	dropNaN: void 0
});
function ar(e = {}) {
	let t = {
		...ir,
		...e
	};
	return t.groupTitle === void 0 && (t.groupTitle = t.groupField), t.valueTitle === void 0 && (t.valueTitle = t.valueField), t;
}
function or(e) {
	let t = e.groupField, n = e.valueField, r = e.valueTitle, i = {
		data: { name: e.statsName },
		encoding: { x: {
			field: t,
			type: e.groupType,
			scale: { padding: e.bandPadding },
			title: e.groupTitle
		} },
		layer: []
	};
	e.width != null && (i.width = e.width), e.height != null && (i.height = e.height);
	let a = {
		name: "outliers",
		data: { name: e.outliersName },
		mark: {
			type: "point",
			filled: !1,
			size: 30,
			stroke: "black",
			opacity: .5
		},
		encoding: { y: {
			field: n,
			type: "quantitative"
		} }
	}, o = {
		name: "whiskers",
		transform: [
			{
				type: "formula",
				expr: "datum.q1",
				as: "lowerQuantile"
			},
			{
				type: "formula",
				expr: "datum.q3",
				as: "upperQuantile"
			},
			{
				type: "regexFold",
				columnRegex: ["^(.*)Quantile$", "^(.*)Whisker$"],
				asValue: ["quantile", "whisker"],
				asKey: "which"
			}
		],
		mark: {
			type: "rule",
			tooltip: null
		},
		encoding: {
			y: {
				field: "quantile",
				type: "quantitative"
			},
			y2: { field: "whisker" }
		}
	}, s = {
		name: "box",
		mark: {
			type: "rect",
			stroke: "black",
			strokeWidth: 1,
			fill: "#ccd5ae",
			tooltip: null
		},
		encoding: {
			y: {
				field: "q3",
				type: "quantitative",
				axis: { title: r }
			},
			y2: { field: "q1" }
		}
	}, c = {
		name: "median",
		mark: {
			type: "rule",
			color: "black",
			size: 2,
			strokeCap: "butt",
			tooltip: null
		},
		encoding: {
			y: {
				field: "median",
				type: "quantitative"
			},
			x: {
				field: t,
				type: e.groupType,
				band: 0,
				title: e.groupTitle,
				axis: { labelAngle: 0 }
			},
			x2: {
				field: t,
				band: 1
			}
		}
	};
	return i.layer.push(a, o, s, c), i;
}
function sr(e = {}) {
	return or(ar(e));
}
//#endregion
//#region ../app/src/utils/predicates/comparison.js
var cr = {
	lt: (e, t) => e < t,
	lte: (e, t) => e <= t,
	eq: (e, t) => e == t,
	gte: (e, t) => e >= t,
	gt: (e, t) => e > t
};
function lr(e, t) {
	let n = cr[e];
	return (e) => n(e, t);
}
//#endregion
//#region ../app/src/sampleView/state/groupOperations.js
function ur(e, t, n, r, i) {
	if (r && !n) throw Error("Custom labels need explicit group order!");
	let a = oe(e.samples, t), o = n ? n.map((e, t) => ({
		name: e,
		title: r ? r[t] : void 0,
		generatedTitle: i ? i[t] : void 0,
		samples: a.get(e)
	})).filter((e) => e.samples) : [...a].map(([e, t]) => ({
		name: e,
		title: void 0,
		generatedTitle: void 0,
		samples: t
	})), s = e;
	s.groups = o.map((e) => ({
		name: "" + e.name,
		title: e.title ?? e.name,
		...e.generatedTitle ? { generatedTitle: e.generatedTitle } : {},
		samples: e.samples
	})), delete e.samples;
}
function dr(e, t) {
	if (!e) return;
	if (e.length !== t) throw Error(`Expected ${t} threshold group titles, got ${e.length}.`);
	let n = e.map((e) => e.trim()), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (!e) throw Error("Threshold group titles must be non-empty.");
		if (r.has(e)) throw Error(`Duplicate threshold group title: "${e}".`);
		r.add(e);
	}
	return n;
}
function fr(e, t, n, r) {
	let i = (e) => `Group ${e + 1}`, a = ae(n.length - 1).reverse(), o = ae(n.length - 1).map((e) => Er(n[e], n[e + 1])), s = dr(r, o.length), c = Sr(t, n.slice(1, n.length - 1));
	ur(e, (e) => i(c(e)), a.map(i), a.map((e) => s?.[e] ?? o[e]), a.map((e) => o[e]));
}
function pr(e, t, n, r) {
	fr(e, t, [
		{
			operator: "lt",
			operand: -Infinity
		},
		...n,
		{
			operator: "lte",
			operand: Infinity
		}
	], r);
}
function mr(e, t) {
	let n = wr(Cr(e.samples, t, [
		0,
		.25,
		.5,
		.75,
		1
	]));
	n.length == 1 && n.push(n[0]), fr(e, t, n.map((e, t, n) => ({
		operator: t == n.length - 1 ? "lte" : "lt",
		operand: e
	})));
}
function hr(e, t) {
	if (t.length == 0) throw Error("Cannot remove the root sample group.");
	let n = e.groups.findIndex((e) => e.name == t[0]);
	if (n < 0) throw Error("Sample group path not found: " + t.join(" / "));
	if (t.length == 1) e.groups.splice(n, 1);
	else if (t.length > 1) {
		let r = e.groups[n];
		if (K(r)) hr(r, t.slice(1));
		else throw Error("Sample group path does not refer to a nested group: " + t.join(" / "));
	}
}
function gr(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	xr(e, t, (e) => {
		let t = e.groups.map((e, t) => ({
			group: e,
			index: t,
			size: br(e)
		})).sort((e, t) => e.size === t.size ? e.index - t.index : i === "descending" ? t.size - e.size : e.size - t.size).slice(0, r), n = new Set(t.map((e) => e.group));
		e.groups = e.groups.filter((e) => n.has(e));
	});
}
function _r(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	let a = lr(r, i);
	xr(e, t, (e) => {
		e.groups = e.groups.filter((e) => a(br(e)));
	});
}
function vr(e, t) {
	xr(e, t, (e) => {
		let t = e;
		t.samples = e.groups.flatMap((e) => yr(e)), delete e.groups;
	});
}
function yr(e) {
	return K(e) ? e.groups.flatMap((e) => yr(e)) : e.samples;
}
function br(e) {
	return K(e) ? e.groups.reduce((e, t) => e + br(t), 0) : e.samples.length;
}
function xr(e, t, n) {
	if (!Number.isInteger(t) || t < 0) throw Error("Grouping level must be a non-negative integer.");
	let r = !1, i = (e, a) => {
		if (a === t) r = !0, n(e);
		else for (let t of e.groups) K(t) && i(t, a + 1);
	};
	if (i(e, 0), !r) throw Error("Grouping level not found: " + t);
}
function Sr(e, t) {
	return (n) => {
		let r = e(n);
		if (ee(r) && !isNaN(r)) {
			for (let e = 0; e < t.length; e++) if (t[e].operator == "lt") {
				if (r < t[e].operand) return e;
			} else if (r <= t[e].operand) return e;
			return t.length;
		}
	};
}
function Cr(e, n, i) {
	let a = r(e.map(n).filter((e) => ee(e) && !isNaN(e)));
	return i.map((e) => t(a, e));
}
function wr(e) {
	let t = [e[0]];
	for (let n = 1; n < e.length; n++) e[n] != e[n - 1] && t.push(e[n]);
	return t;
}
var Tr = te(".3~r"), Er = (e, t) => `${e.operator == "lt" ? "[" : "("}${Tr(e.operand)}, ${Tr(t.operand)}${t.operator == "lte" ? "]" : ")"}`;
function Dr(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) for (let t of r) n.set(t, e);
	return (t) => n.get(e(t));
}
//#endregion
//#region ../../node_modules/mapsort/compiled/esm/mapsort.min.js
function Or(e, t) {
	var n = e + "", r = t + "";
	return n < r ? -1 : n == r ? 0 : 1;
}
function kr(e) {
	if (typeof e != "function") throw TypeError(e + " is not a function");
}
function Ar(e, t, n) {
	kr(t), n !== void 0 && kr(n);
	var r, i = [], a = [], o = [];
	i.forEach.call(e, function(e, s, c) {
		if (r = t(e, s, c), r === void 0) return void o.push(e);
		if (!n && typeof r == "symbol") throw TypeError("Can't convert symbol to string");
		i.push(s), a[s] = r;
	}), n ||= Or, i.sort(function(e, t) {
		return n(a[e], a[t]);
	});
	var s = i.map(function(t) {
		return e[t];
	}).concat(o);
	return s.length != e.length && (s.length = e.length), s;
}
//#endregion
//#region ../app/src/sampleView/state/sampleOperations.js
function jr(e, t) {
	let n = (e) => e.copy().range(ae(0, e.domain().length)).unknown(-1), r = (e) => e ?? "";
	switch (t.type) {
		case "quantitative":
			r = (e) => ee(e) && !isNaN(e) ? e : -Infinity;
			break;
		case "ordinal":
			r = n(t.scale);
			break;
		case "nominal": r = (e) => e || "";
	}
	return (t) => r(e(t));
}
function Mr(e, t) {
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let t = n.has(e);
		return n.add(e), t;
	};
	return e.filter((e) => !r(t(e)));
}
function Nr(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = (e) => (r.size < n && r.add(e), r.has(e));
	return e.filter((e) => i(t(e)));
}
function Pr(e, t, n, r) {
	if (r.operator === "in" && r.required === "all") return Fr(e, t, n, r.values);
	let i = Ir(r), a = /* @__PURE__ */ new Set();
	for (let r of e) i(n(r)) && a.add(t(r));
	return a;
}
function Fr(e, t, n, r) {
	if (r.length === 0) return /* @__PURE__ */ new Set();
	let i = new Set(r), a = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = n(r);
		if (!i.has(e)) continue;
		let o = t(r), s = a.get(o);
		s || (s = /* @__PURE__ */ new Set(), a.set(o, s)), s.add(e);
	}
	let o = /* @__PURE__ */ new Set();
	for (let [e, t] of a) r.every((e) => t.has(e)) && o.add(e);
	return o;
}
function Ir(e) {
	if (e.operator === "in") {
		let t = new Set(e.values);
		return (e) => t.has(e);
	}
	return lr(e.operator, e.operand);
}
function Lr(e, t, n = !1) {
	return Ar(e, t, (e, t) => (n && ([e, t] = [t, e]), e < t ? -1 : +(e > t)));
}
function Rr(e, t, n, r) {
	let i = lr(n, r);
	return e.filter((e) => i(t(e)));
}
function zr(e, t, n, r) {
	let i = new Set(r), a = (e) => i.has(e), o = n == "remove" ? (e) => !a(e) : a;
	return e.filter((e) => o(t(e)));
}
function Br(e, t) {
	let n = (e) => e != null;
	return e.filter((e) => n(t(e)));
}
function Vr(e, t) {
	let n = [];
	for (let r of e) {
		let e = /* @__PURE__ */ new Set();
		for (let n of r) e.add(t(n));
		e.size > 0 && n.push(e);
	}
	if (!n.length) return [];
	let r = [];
	for (let e of n[0]) {
		let t = !0;
		for (let r = 1; r < n.length && t; r++) t = n[r].has(e);
		t && r.push(e);
	}
	return r;
}
//#endregion
//#region ../../node_modules/redux-undo/dist/redux-undo.mjs
var F = {
	UNDO: "@@redux-undo/UNDO",
	REDO: "@@redux-undo/REDO",
	JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
	JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
	JUMP: "@@redux-undo/JUMP",
	CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
}, Hr = {
	undo() {
		return { type: F.UNDO };
	},
	redo() {
		return { type: F.REDO };
	},
	jumpToFuture(e) {
		return {
			type: F.JUMP_TO_FUTURE,
			index: e
		};
	},
	jumpToPast(e) {
		return {
			type: F.JUMP_TO_PAST,
			index: e
		};
	},
	jump(e) {
		return {
			type: F.JUMP,
			index: e
		};
	},
	clearHistory() {
		return { type: F.CLEAR_HISTORY };
	}
};
function Ur(e, t = []) {
	return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function Wr(e) {
	return typeof e.present < "u" && typeof e.future < "u" && typeof e.past < "u" && Array.isArray(e.future) && Array.isArray(e.past);
}
function I(e, t, n, r = null) {
	return {
		past: e,
		present: t,
		future: n,
		group: r,
		_latestUnfiltered: t,
		index: e.length,
		limit: e.length + n.length + 1
	};
}
var Gr, L, Kr = {
	prevState: "#9E9E9E",
	action: "#03A9F4",
	nextState: "#4CAF50"
};
function qr() {
	L = {
		header: [],
		prev: [],
		action: [],
		next: [],
		msgs: []
	};
}
function Jr() {
	let { header: e, prev: t, next: n, action: r, msgs: i } = L;
	console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i));
}
function Yr(e, t, n) {
	return [
		`%c${e}`,
		`color: ${t}; font-weight: bold`,
		n
	];
}
function Xr(e, t) {
	qr(), Gr && (console.group ? (L.header = [
		"%credux-undo",
		"font-style: italic",
		"action",
		e.type
	], L.action = Yr("action", Kr.action, e), L.prev = Yr("prev history", Kr.prevState, t)) : (L.header = ["redux-undo action", e.type], L.action = ["action", e], L.prev = ["prev history", t]));
}
function R(e) {
	Gr && (console.group ? L.next = Yr("next history", Kr.nextState, e) : L.next = ["next history", e], Jr());
}
function z(...e) {
	Gr && (L.msgs = L.msgs.concat([...e, "\n"]));
}
function Zr(e) {
	Gr = e;
}
function Qr(e, t) {
	let n = I([], e, []);
	return t && (n._latestUnfiltered = null), n;
}
function $r(e, t, n, r) {
	let i = e.past.length + 1;
	z("inserting", t), z("new free: ", n - i);
	let { past: a, _latestUnfiltered: o } = e, s = n && n <= i, c = a.slice(+!!s);
	return I(o == null ? c : [...c, o], t, [], r);
}
function ei(e, t) {
	if (t < 0 || t >= e.future.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = [
		...n,
		i,
		...r.slice(0, t)
	], o = r[t];
	return I(a, o, r.slice(t + 1));
}
function ti(e, t) {
	if (t < 0 || t >= e.past.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = n.slice(0, t), o = [
		...n.slice(t + 1),
		i,
		...r
	], s = n[t];
	return I(a, s, o);
}
function ni(e, t) {
	return t > 0 ? ei(e, t - 1) : t < 0 ? ti(e, e.past.length + t) : e;
}
function ri(e, t) {
	return t.indexOf(e) > -1 ? e : !e;
}
function ii(e, t = {}) {
	Zr(t.debug);
	let n = {
		limit: void 0,
		filter: () => !0,
		groupBy: () => null,
		undoType: F.UNDO,
		redoType: F.REDO,
		jumpToPastType: F.JUMP_TO_PAST,
		jumpToFutureType: F.JUMP_TO_FUTURE,
		jumpType: F.JUMP,
		neverSkipReducer: !1,
		ignoreInitialState: !1,
		syncFilter: !1,
		...t,
		initTypes: Ur(t.initTypes, ["@@redux-undo/INIT"]),
		clearHistoryType: Ur(t.clearHistoryType, [F.CLEAR_HISTORY])
	}, r = n.neverSkipReducer ? (t, n, ...r) => ({
		...t,
		present: e(t.present, n, ...r)
	}) : (e) => e, i;
	return (t = i, a = {}, ...o) => {
		Xr(a, t);
		let s = t;
		if (!i) {
			if (z("history is uninitialized"), t === void 0) return s = Qr(e(t, { type: "@@redux-undo/CREATE_HISTORY" }, ...o), n.ignoreInitialState), z("do not set initialState on probe actions"), R(s), s;
			Wr(t) ? (s = i = n.ignoreInitialState ? t : I(t.past, t.present, t.future), z("initialHistory initialized: initialState is a history", i)) : (s = i = Qr(t, n.ignoreInitialState), z("initialHistory initialized: initialState is not a history", i));
		}
		let c;
		switch (a.type) {
			case void 0: return s;
			case n.undoType: return c = ni(s, -1), z("perform undo"), R(c), r(c, a, ...o);
			case n.redoType: return c = ni(s, 1), z("perform redo"), R(c), r(c, a, ...o);
			case n.jumpToPastType: return c = ti(s, a.index), z(`perform jumpToPast to ${a.index}`), R(c), r(c, a, ...o);
			case n.jumpToFutureType: return c = ei(s, a.index), z(`perform jumpToFuture to ${a.index}`), R(c), r(c, a, ...o);
			case n.jumpType: return c = ni(s, a.index), z(`perform jump to ${a.index}`), R(c), r(c, a, ...o);
			case ri(a.type, n.clearHistoryType): return c = Qr(s.present, n.ignoreInitialState), z("perform clearHistory"), R(c), r(c, a, ...o);
			default:
				if (c = e(s.present, a, ...o), n.initTypes.some((e) => e === a.type)) return z("reset history due to init action"), R(i), i;
				if (s._latestUnfiltered === c) return s;
				if (typeof n.filter == "function" && !n.filter(a, c, s)) {
					let e = I(s.past, c, s.future, s.group);
					return n.syncFilter || (e._latestUnfiltered = s._latestUnfiltered), z("filter ignored action, not storing it in past"), R(e), e;
				}
				let t = n.groupBy(a, c, s);
				if (t != null && t === s.group) {
					let e = I(s.past, c, s.future, s.group);
					return z("groupBy grouped the action with the previous action"), R(e), e;
				}
				return s = $r(s, c, n.limit, t), z("inserted new state into history"), R(s), s;
		}
	};
}
//#endregion
//#region ../app/src/state/provenanceReducerBuilder.js
var B = "_augmented";
function ai(e) {
	return (t) => (Array.isArray(e) ? e : Object.keys(e)).some((e) => re(e) && t.type.startsWith(e));
}
function oi(e) {
	if ("payload" in e) {
		let t = e.payload;
		if (typeof t == "object" && "_augmented" in t) {
			let { [B]: n, ...r } = t;
			return {
				...e,
				payload: r
			};
		}
	}
	return e;
}
function si(e) {
	return (t, n) => e(n) ? oi(n) : t ?? null;
}
function ci(e, t = {}) {
	let n = ai(e), r = si(n);
	return ii(be({
		...e,
		lastAction: r
	}), {
		filter: n,
		ignoreInitialState: !0,
		...t
	});
}
//#endregion
//#region ../app/src/utils/escapeSeparator.js
function li(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ui(e, t = "/") {
	let n = li(t);
	return e.replace(new RegExp(n, "g"), "\\" + t);
}
function V(e, t = "/") {
	return e.map((e) => ui(e, t)).join(t);
}
function H(e, t = "/") {
	if (!t) return [e];
	let n = t, r = [], i = "";
	for (let t = 0; t < e.length; t++) {
		let a = e[t];
		if (a === "\\") {
			if (e.substring(t + 1, t + 1 + n.length) === n) {
				i += n, t += n.length;
				continue;
			}
			i += "\\";
		} else e.substring(t, t + n.length) === n ? (r.push(i), i = "", t += n.length - 1) : i += a;
	}
	return r.push(i), r;
}
//#endregion
//#region ../app/src/utils/dataLayout.js
function di(e, t = /* @__PURE__ */ new Set()) {
	if (e.length === 0) return {};
	let n = e[0], r = Object.keys(n).filter((e) => !t.has(e)), i = {};
	for (let t of r) i[t] = e.map((e) => e[t]);
	return i;
}
function fi(e) {
	let t = Object.keys(e);
	if (t.length === 0) return [];
	let n = e[t[0]]?.length ?? 0;
	for (let r of t) {
		if (!Array.isArray(e[r])) throw Error(`Column "${r}" is not an array`);
		if (e[r].length !== n) throw Error(`All columns must have identical lengths; "${r}" has length ${e[r].length}, expected ${n}`);
	}
	let r = [];
	for (let i = 0; i < n; i++) {
		let n = {};
		for (let r of t) n[r] = e[r][i];
		r.push(n);
	}
	return r;
}
var pi = "(Root)";
function mi(e) {
	return H(e, "/").at(-1) ?? "";
}
function hi(e, t) {
	let n = typeof t == "string" && t.length > 0 ? (e) => H(e, t) : (e) => [e], r = {
		part: pi,
		attribute: "",
		path: "",
		children: /* @__PURE__ */ new Map(),
		parent: null
	};
	for (let t of e) {
		let e = n(t), i = r;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (!i.children.has(r)) {
				let a = {
					part: r,
					path: V(e.slice(0, n + 1), "/"),
					attribute: t,
					children: /* @__PURE__ */ new Map(),
					parent: i
				};
				i.children.set(r, a);
			}
			i = i.children.get(r);
		}
	}
	return r;
}
function* gi(e) {
	if (e) {
		yield e;
		for (let t of e.children.values()) yield* gi(t);
	}
}
function* _i(e) {
	for (let t = e.parent; t != null; t = t.parent) yield t;
}
function vi(e) {
	for (let t of [
		".",
		"_",
		"/"
	]) {
		let n = [];
		for (let r of e || []) r && r.indexOf(t) >= 0 && n.push(r);
		if (n.length < 2) continue;
		let r = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = e.split(t);
			if (n.length >= 2) {
				let e = n[0];
				e && r.set(e, (r.get(e) || 0) + 1);
			}
		}
		for (let e of r.values()) if (e >= 2) return t;
	}
	return null;
}
function yi(e) {
	return e.length ? V(e, "/") + "/" : "";
}
function bi(e, t = [], n = []) {
	if (!t.length) return e;
	let r = yi(t), i = {};
	for (let [t, a] of Object.entries(e)) n.includes(t) ? i[t] = a : i[r + t] = a;
	return i;
}
function xi(e, t, n = "/") {
	return V(H(e, t), n);
}
function Si(e, t = {}, n, r, i = /* @__PURE__ */ new Set()) {
	let a = Ti(e, i);
	if (n != null && typeof n != "string") throw Error("attributeGroupSeparator must be a string");
	return a = Ei(a, n), r ? (a = Oi(a, r, n), t = ki(t, r, n)) : t[""] && (t = Ci(t, { attributeNames: Object.keys(a).filter((e) => e !== "sample") })), {
		columnarMetadata: a,
		attributeDefs: t
	};
}
function Ci(e, t) {
	let n = e[""];
	if (!n) return e;
	let r = {};
	for (let [t, n] of Object.entries(e)) t !== "" && (r[t] = n);
	for (let e of t.attributeNames) {
		if (r[e]) continue;
		let t = H(e, "/"), i = !1;
		for (let e = 1; e < t.length; e++) if (r[V(t.slice(0, e), "/")]) {
			i = !0;
			break;
		}
		i || (r[e] = { ...n });
	}
	return r;
}
function wi(e, t, n) {
	let r = e.filter((e) => t.has(String(e.sample))), i = n.metadataNodeTypes.get("") ?? null, a = n.scales.get("") ?? null, o = (e) => [
		"nominal",
		"ordinal",
		"quantitative"
	].includes(e), s = o(i), c = Array.from(n.metadataNodeTypes.entries().filter(([e, t]) => e !== "" && o(t)).map(([e]) => e)), l = new Set(n.metadataNodeTypes.entries().filter(([, e]) => e === "unset").map(([e]) => e)), u = Object.fromEntries(c.map((e) => {
		let t = { type: n.metadataNodeTypes.get(e) }, r = n.scales.get(e);
		return r && (t.scale = r), [e, t];
	}));
	if (!n.addUnderGroup && s) {
		let e = { type: i };
		a && (e.scale = a), u = Ci({
			...u,
			"": e
		}, { attributeNames: Array.from(n.metadataNodeTypes.entries().filter(([, e]) => e === "inherit").map(([e]) => e)) });
	}
	let d = Si(r, u, n.separator, n.addUnderGroup, l);
	if (n.addUnderGroup && s) {
		let e = V(Di(n.addUnderGroup, n.separator ?? void 0), "/");
		if (e && !d.attributeDefs[e]) {
			let t = { type: i };
			a && (t.scale = a), d.attributeDefs[e] = t;
		}
	}
	return d;
}
function Ti(e, t = /* @__PURE__ */ new Set()) {
	return di(e, t);
}
function Ei(e, t) {
	let n = { sample: e.sample };
	for (let [r, i] of Object.entries(e)) {
		if (r === "sample") continue;
		let e = typeof t == "string" && t.length > 0 ? xi(r, t, "/") : V([r], "/");
		n[e] = i;
	}
	return n;
}
function Di(e, t) {
	return typeof t == "string" && t.length > 0 ? H(e, t) : [e];
}
function Oi(e, t, n) {
	return Ai(e, Di(t, n));
}
function ki(e, t, n) {
	let r = Di(t, n), i = V(r, "/"), a = {}, o;
	for (let [t, n] of Object.entries(e)) t === "" ? o = n : a[t] = n;
	let s = bi(a, r);
	return o && !s[i] && (s[i] = o), s;
}
function Ai(e, t = []) {
	return bi(e, t, ["sample"]);
}
function ji(e) {
	switch (l(e)) {
		case "integer":
		case "number": return "quantitative";
		default: return "nominal";
	}
}
function Mi(e, t) {
	let n = /* @__PURE__ */ new Map();
	function r(t) {
		for (let e of _i(t)) {
			let t = n.get(e.path);
			if (t && t !== "unset") return "inherit";
		}
		if (t.children.size > 0) {
			let n = /* @__PURE__ */ new Set();
			for (let r of gi(t)) if (r !== t && r.children.size === 0) {
				let t = e.get(r.attribute);
				t && n.add(t);
			}
			return n.size === 1 ? n.values().next().value : "unset";
		}
		return e.get(t.attribute) ?? "unset";
	}
	for (let e of gi(t)) n.set(e.path, r(e));
	return n;
}
function Ni(e, t = {}, n) {
	let r = structuredClone(t ?? {}), i = hi(e.attributeNames, n), a = /* @__PURE__ */ new Map();
	function o(e) {
		e.path && a.set(e.path, e);
		for (let t of e.children.values()) o(t);
	}
	o(i);
	for (let t of e.attributeNames) {
		let i = r[t], o = null;
		if (n != null) {
			let e = xi(t, n, "/"), i = a.get(e)?.parent;
			for (; i && (o = r[i.path]?.type, o == null);) i = i.parent;
		}
		if (!o && (i || (i = {}, r[t] = i), !i.type)) {
			let n = Object.values(e.entities).map((e) => e[t]);
			i.type = ji(n);
		}
	}
	return r;
}
function Pi(e, t) {
	let n = new Set(e.attributeNames), r = new Set(t.attributeNames), i = n.intersection(r);
	if (i.size > 0) throw Error(`Duplicate attribute names: ${Array.from(i).join(", ")}`);
	let a = [...n, ...r], o = e.attributeDefs ?? {}, s = t.attributeDefs ?? {}, c = { ...o };
	for (let e of Object.keys(s)) {
		if (e in c) {
			c[e] = Ii(c[e], s[e], e);
			continue;
		}
		c[e] = s[e];
	}
	let l = Object.keys(e.entities), u = Object.keys(t.entities), d = /* @__PURE__ */ new Set([...l, ...u]), f = {};
	for (let r of d) {
		let i = e.entities[r] ?? {}, o = t.entities[r] ?? {}, s = {};
		for (let e of a) s[e] = n.has(e) ? i[e] : o[e];
		f[r] = s;
	}
	return {
		entities: f,
		attributeNames: a,
		attributeDefs: c
	};
}
function Fi(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Ii(e, t, n, r = "") {
	if (a(e, t)) return e;
	let i = { ...e };
	for (let [e, o] of Object.entries(t)) {
		if (!(e in i)) {
			i[e] = o;
			continue;
		}
		let t = i[e];
		if (a(t, o)) continue;
		if (Fi(t) && Fi(o)) {
			i[e] = Ii(t, o, n, r ? r + "." + e : e);
			continue;
		}
		let s = r ? r + "." + e : e, c = Li(t), l = Li(o);
		throw Error("Conflicting attribute definition for key \"" + n + "\" at \"" + s + "\". Existing value: " + c + "; incoming value: " + l + ". Align the source-level/group defaults (type/scale/visibility) before importing into the same group.");
	}
	return i;
}
function Li(e) {
	try {
		return JSON.stringify(e) ?? String(e);
	} catch {
		return String(e);
	}
}
var Ri = new Map([
	{
		op: "itemCount",
		label: "Item count",
		description: "Number of features in the interval",
		preservesScaleDomain: !1
	},
	{
		op: "count",
		label: "Count",
		description: "Number of non-missing values in the interval",
		preservesScaleDomain: !1
	},
	{
		op: "min",
		label: "Min",
		description: "Smallest value in the interval",
		preservesScaleDomain: !0
	},
	{
		op: "max",
		label: "Max",
		description: "Largest value in the interval",
		preservesScaleDomain: !0
	},
	{
		op: "weightedMean",
		label: "Weighted mean",
		description: "Mean weighted by clipped overlap length (or 1 for points)",
		preservesScaleDomain: !0
	},
	{
		op: "variance",
		label: "Variance",
		description: "Population variance weighted by clipped overlap length",
		preservesScaleDomain: !1
	}
].map((e) => [e.op, e]));
function zi(e) {
	let t = Ri.get(e);
	if (!t) throw Error("Unknown aggregation op: " + e);
	return t;
}
function Bi(e) {
	return zi(e).label.toLowerCase();
}
function Vi(e) {
	return e === "count" ? "count" : Bi(e);
}
function Hi(e) {
	return e.operator === "in" ? e.field + " in {" + e.values.map(U).join(", ") + "}" : e.field + " " + Ui(e.operator) + " " + U(e.value);
}
function Ui(e) {
	switch (e) {
		case "eq": return "=";
		case "lt": return "<";
		case "lte": return "<=";
		case "gt": return ">";
		case "gte": return ">=";
		case "in": return "in";
		default: throw Error("Unknown feature filter operator: " + e);
	}
}
function U(e) {
	return e === null ? "null" : String(e);
}
function Wi(e) {
	let t = e.specifier;
	return !t || typeof t != "object" || !Jn(t) || zi(t.aggregation.op).preservesScaleDomain;
}
function Gi(e, t, n) {
	let r = n ? " where " + Hi(n) : "";
	return e === "itemCount" ? Vi(e) + (n ? "(" + r.trim() + ")" : "") : e === "count" ? Vi(e) + "(" + t + r + ")" : Bi(e) + "(" + t + r + ")";
}
//#endregion
//#region ../app/src/utils/emptyToUndefined.js
function Ki(e) {
	return e ?? void 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataNameUtils.js
function qi(e, t) {
	let n = Zi(e);
	if (n.length === 0) return e.trim();
	let { prefix: r, restTokens: i } = Ji(n), a = r && i.length > 0 ? "_" : "", o = Math.max(0, t - r.length - a.length);
	if (i.length === 0) return r.length > 0 ? r : e.trim();
	let s = Xi(i, o, r.length > 0), c = r + a + s;
	if (a && c.length > t) {
		let e = r + s;
		e.length <= t && (c = e);
	}
	return c.length > t ? c.slice(0, t) : c;
}
function Ji(e) {
	let t = e.map((e) => e.toLowerCase());
	for (let n of [
		{
			match: ["weighted", "mean"],
			prefix: "wMean"
		},
		{
			match: ["item", "count"],
			prefix: "n"
		},
		{
			match: ["count"],
			prefix: "n"
		},
		{
			match: ["mean"],
			prefix: "mean"
		},
		{
			match: ["median"],
			prefix: "med"
		},
		{
			match: ["min"],
			prefix: "min"
		},
		{
			match: ["max"],
			prefix: "max"
		},
		{
			match: ["variance"],
			prefix: "var"
		},
		{
			match: ["stdev"],
			prefix: "sd"
		},
		{
			match: ["stddev"],
			prefix: "sd"
		},
		{
			match: ["sd"],
			prefix: "sd"
		},
		{
			match: ["sum"],
			prefix: "sum"
		}
	]) if (Yi(t, n.match)) return {
		prefix: n.prefix,
		restTokens: e.slice(n.match.length)
	};
	return {
		prefix: "",
		restTokens: e
	};
}
function Yi(e, t) {
	if (e.length < t.length) return !1;
	for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return !1;
	return !0;
}
function Xi(e, t, n) {
	let r = [], i = $i(e, !1), a = $i(e, !0), o = n ? [a, i] : [i, a];
	for (let e of o) e.length > 0 && !r.includes(e) && r.push(e);
	if (e.length > 2) {
		let t = $i([e[0], e[e.length - 1]], !0);
		t !== a && r.push(t);
	}
	for (let t = e.length - 1; t > 0; --t) {
		let n = $i(e.slice(0, t), !0);
		r.includes(n) || r.push(n);
	}
	for (let e of r) if (e.length <= t) return e;
	return r[0].slice(0, t);
}
function Zi(e) {
	let t = e.trim();
	if (!t) return [];
	let n = t.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/([a-zA-Z])([0-9])/g, "$1 $2").replace(/([0-9])([a-zA-Z])/g, "$1 $2").replace(/[^a-zA-Z0-9]+/g, " "), r = /* @__PURE__ */ new Set([
		"the",
		"of",
		"and",
		"or",
		"for",
		"to",
		"a",
		"an"
	]);
	return n.split(" ").map((e) => e.trim()).filter((e) => e.length > 0).filter((e) => !r.has(e.toLowerCase()));
}
function Qi(e, t, n) {
	return /^[A-Z0-9]+$/.test(e) ? e : n && t === 0 ? e[0].toLowerCase() : e.length <= 4 ? e : e.length <= 8 ? e.slice(0, 4) : e.slice(0, 3);
}
function $i(e, t) {
	return ea(e.map((e, n) => Qi(e, n, t)));
}
function ea(e) {
	return e.map((e, t) => t === 0 || e.length === 0 || /^[A-Z0-9]+$/.test(e) ? e : e[0].toUpperCase() + e.slice(1)).join("");
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataUtils.js
function ta(e, t = {}) {
	if (!e) throw Error("Attribute info is missing.");
	let n = e.type;
	if (n === "nominal" || n === "ordinal" || n === "quantitative") return n;
	if (t.strict === !1) return null;
	throw Error("Unsupported data type: " + n);
}
function na(e, t, n, r) {
	let i = e.trim();
	if (i.length === 0) return "Attribute name is required.";
	let a = ra(i, t.trim(), ta(r));
	return n.includes(a) ? "Name already exists. Choose another name or group." : null;
}
function ra(e, t, n) {
	let r = { [e]: { type: n } };
	if (t.length === 0) return Object.keys(r)[0];
	let i = ki(r, t, "/");
	return Object.keys(i)[0];
}
function ia(e, t) {
	let n = sa(t.scale);
	return {
		attribute: e,
		name: t.name,
		groupPath: Ki(t.groupPath),
		...n ? { scale: n } : t.scale === null ? { scale: null } : {}
	};
}
function aa(e, t) {
	return e.scale === void 0 ? oa(t) : sa(e.scale);
}
function oa(e) {
	if (Wi(e.attribute)) return sa("scaleSpec" in e ? e.scaleSpec : e.scale?.props);
}
function sa(e) {
	if (!e) return;
	let t = structuredClone(e), n = t.range;
	return n && (!Array.isArray(n) || !n.every(ca)) && delete t.range, Object.keys(t).length > 0 ? t : void 0;
}
function ca(e) {
	return typeof e == "string" && ne(e) != null;
}
function la(e, t) {
	let n = new Set(t), r = ua(e) ?? (e.name && e.name.length > 0 ? e.name.trim() : "Derived"), i = [], a = r.length > 20, o = a ? qi(r, 20) : "";
	if (a && o.length > 0 && o !== r && i.push(o), i.push(r), !a && n.has(r)) {
		let e = qi(r, 20);
		e.length > 0 && e !== r && i.push(e);
	}
	for (let e of i) {
		let t = ma(e, n);
		if (t) return t;
	}
	throw Error("Unable to generate a unique metadata attribute name.");
}
function ua(e) {
	let t = e.attribute.specifier;
	if (!t || typeof t != "object" || !Jn(t) || !t.featureFilter) return null;
	let n = da(t.featureFilter);
	return t.aggregation.op === "count" || t.aggregation.op === "itemCount" ? n + "_count" : pa(t.aggregation.op) + "_" + n + "_" + t.field;
}
function da(e) {
	return e.operator === "eq" ? fa(U(e.value)) : e.operator === "in" ? e.values.map((e) => fa(U(e))).join("_") : fa(e.field) + "_" + e.operator + "_" + fa(U(e.value));
}
function fa(e) {
	return e.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function pa(e) {
	switch (e) {
		case "itemCount": return "count";
		case "count": return "count";
		case "min": return "min";
		case "max": return "max";
		case "weightedMean": return "wMean";
		case "variance": return "var";
		default: throw Error("Unknown aggregation op: " + e);
	}
}
function ma(e, t) {
	if (!t.has(e)) return e;
	for (let n = 2; n < 2 ** 53 - 1; n += 1) {
		let r = ha(e, "-" + String(n));
		if (!t.has(r)) return r;
	}
	return null;
}
function ha(e, t) {
	if (e.length + t.length <= 32) return e + t;
	let n = Math.max(1, 32 - t.length);
	return e.slice(0, n) + t;
}
//#endregion
//#region ../app/src/sampleView/state/sampleSlice.js
var ga = "sampleView";
function _a() {
	return {
		sampleData: void 0,
		sampleMetadata: {
			entities: {},
			attributeNames: []
		},
		groupMetadata: [],
		rootGroup: {
			name: "ROOT",
			title: "Root",
			samples: []
		}
	};
}
function W(e) {
	let t = e.payload[B]?.values;
	if (!t) throw Error("No accessed values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return (e) => t[e];
}
function va(e) {
	let t = e.payload[B], n = t?.values, r = t?.conditionValues;
	if (!n || !r) throw Error("No accessed category and condition values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return {
		categoryAccessor: (e) => n[e],
		conditionAccessor: (e) => r[e]
	};
}
function ya(e) {
	if (!Number.isInteger(e) || e < 1) throw Error("Grouping level must be a positive integer.");
	return e - 1;
}
function ba(e, t) {
	let n = {};
	for (let r of Ta(e)) for (let e of r.samples) n[e] = t(e);
	return n;
}
function xa(e, t) {
	if (!e.sampleData) throw Error("Samples must be set before setting metadata!");
	let n = t.columnarMetadata, r = Object.keys(n).filter((e) => e !== "sample"), i = {
		entities: Object.fromEntries(fi(n).map((e) => {
			let { sample: t, ...n } = e;
			return [String(t), n];
		})),
		attributeNames: r
	}, a = Ni(i, t.attributeDefs, "/"), o = {
		...i,
		attributeDefs: a
	}, s = Pe(e.sampleMetadata) ?? e.sampleMetadata, c = t.replace ? o : Pi(s, o);
	e.sampleMetadata = t.replace ? A(o) : A(c);
}
var Sa = _n({
	name: ga,
	initialState: _a(),
	reducers: {
		setSamples: (e, t) => {
			let n = t.payload.samples;
			if (e.sampleData) throw Error("Samples have already been set!");
			if (n.some((e) => e.id === void 0 || e.id === null)) throw Error("The sample data contains missing sample ids or the \"sample\" column is missing!");
			if (new Set(n.map((e) => e.id)).size != n.length) throw Error("The sample data contains duplicate sample ids!");
			let r = n.map((e, t) => ({
				...e,
				indexNumber: t
			}));
			e.sampleData = {
				ids: r.map((e) => e.id),
				entities: Object.fromEntries(r.map((e) => [e.id, e]))
			}, e.rootGroup = {
				name: "ROOT",
				title: "Root",
				samples: e.sampleData.ids
			};
		},
		addMetadata: (e, t) => {
			xa(e, t.payload);
		},
		deriveMetadata: (e, t) => {
			let n = t.payload[B]?.metadata;
			if (!n) throw Error("Derived metadata payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			xa(e, n);
		},
		addMetadataFromSource: (e, t) => {
			let n = t.payload[B]?.metadata;
			if (!n) throw Error("Metadata source payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			xa(e, n);
		},
		sortBy: (e, t) => {
			G(e, (e) => Lr(e, W(t), Ca(t.payload.order)));
		},
		retainFirstOfEach: (e, t) => {
			G(e, (e) => Mr(e, W(t)));
		},
		retainFirstNCategories: (e, t) => {
			G(e, (e) => Nr(e, W(t), t.payload.n));
		},
		filterByQuantitative: (e, t) => {
			G(e, (e) => Rr(e, W(t), t.payload.operator, t.payload.operand));
		},
		retainCategoriesByAttribute: (e, t) => {
			let { categoryAccessor: n, conditionAccessor: r } = va(t), i = Pr(Ta(e).flatMap((e) => e.samples), n, r, t.payload.condition);
			G(e, (e) => e.filter((e) => i.has(n(e))));
		},
		filterByNominal: (e, t) => {
			G(e, (e) => zr(e, W(t), t.payload.remove ? "remove" : "retain", t.payload.values));
		},
		removeUndefined: (e, t) => {
			G(e, (e) => Br(e, W(t)));
		},
		groupCustomCategories: (e, t) => {
			let n = Dr(W(t), t.payload.groups);
			wa(e, (e) => ur(e, n, Object.keys(t.payload.groups))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByNominal: (e, t) => {
			wa(e, (e) => ur(e, W(t), t.payload[B].domain)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupToQuartiles: (e, t) => {
			wa(e, (e) => mr(e, W(t))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByThresholds: (e, t) => {
			wa(e, (e) => pr(e, W(t), t.payload.thresholds, t.payload.groupTitles)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		removeGroup: (e, t) => {
			let n = e.rootGroup;
			if (K(n)) hr(n, t.payload.path);
			else throw Error("Cannot remove sample groups before grouping.");
		},
		retainGroupsByRank: (e, t) => {
			let n = e.rootGroup;
			if (K(n)) gr(n, ya(t.payload.level), t.payload.measure, t.payload.limit, t.payload.order);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		retainGroupsBySize: (e, t) => {
			let n = e.rootGroup;
			if (K(n)) _r(n, ya(t.payload.level), t.payload.measure, t.payload.operator, t.payload.operand);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		ungroup: (e, t) => {
			let n = e.rootGroup;
			if (K(n)) {
				let r = ya(t.payload.level);
				vr(n, r), e.groupMetadata.splice(r);
			} else throw Error("Cannot ungroup samples before grouping.");
		},
		retainMatched: (e, t) => {
			let n = W(t), r = Vr(Ta(e).map((e) => e.samples), n);
			G(e, (e) => zr(e, n, "retain", r));
		}
	}
});
function Ca(e) {
	let t = e ?? "descending";
	if (t === "ascending") return !1;
	if (t === "descending") return !0;
	throw Error("Invalid sort order: " + t);
}
function G(e, t) {
	for (let n of Ta(e)) n.samples = t(n.samples);
}
function wa(e, t) {
	for (let n of Ta(e)) t(n);
}
function Ta(e) {
	return Ea(e).map((e) => ie(e));
}
function Ea(e) {
	let t = [], n = [], r = (e) => {
		if (t.push(e), K(e)) for (let t of e.groups) r(t);
		else n.push([...t]);
		t.pop();
	};
	return r(e.rootGroup), n;
}
function Da(e) {
	return "samples" in e;
}
function K(e) {
	return "groups" in e;
}
function* Oa(e) {
	if (yield [e], K(e)) for (let t of e.groups) for (let n of Oa(t)) yield [e, ...n];
}
var ka = Kt((e) => e.sampleData?.entities, (e) => e && Object.values(e));
function Aa(e, t, n) {
	if (!e.type.startsWith("sampleView/")) return e;
	let r = e.type.split("/")[1];
	if (!(r in Sa.actions)) throw Error(`Invalid action type: ${r}`);
	if (!e.payload.attribute) return e;
	let i = n(e.payload.attribute);
	if (!i) throw Error(`Attribute info for attribute "${e.payload.attribute}" not found`);
	if (r === "deriveMetadata") return ja(e, t, i);
	let a = i.accessor, o = r == "sortBy" ? jr((e) => a(e, t), i) : a, s = { values: ba(t, (e) => o(e, t)) };
	if (r == "groupByNominal" && (s.domain = i.scale?.domain()), r === "retainCategoriesByAttribute") {
		let r = n(e.payload.condition.attribute);
		s.conditionValues = ba(t, (e) => r.accessor(e, t));
	}
	return {
		...e,
		payload: {
			...e.payload,
			[B]: s
		}
	};
}
function ja(e, t, n) {
	if (!t.sampleData) throw Error("Sample data has not been initialized.");
	let r = e.payload.name.trim();
	if (r.length === 0) throw Error("Derived metadata name is missing.");
	let i = t.sampleData.ids, a = n.valuesProvider({
		sampleIds: i,
		sampleHierarchy: t
	});
	if (a.length !== i.length) throw Error("Derived metadata values length does not match sample ids.");
	let o = {
		sample: i,
		[r]: a
	}, s = ta(n, { strict: !1 }), c = aa(e.payload, n), l = { [r]: {
		type: Ki(s),
		...c ? { scale: c } : {}
	} }, u = e.payload.groupPath?.trim() ?? "", d = u.length > 0 ? {
		columnarMetadata: Oi(o, u, "/"),
		attributeDefs: ki(l, u, "/")
	} : {
		columnarMetadata: o,
		attributeDefs: l
	};
	return {
		...e,
		payload: {
			...e.payload,
			[B]: { metadata: d }
		}
	};
}
//#endregion
//#region ../app/src/sampleView/attributeValues.js
function Ma(e) {
	return (t) => t.sampleIds.map((n) => e(n, t.sampleHierarchy));
}
function q(e, t, n, r = {}) {
	return e.valuesProvider({
		sampleIds: t,
		sampleHierarchy: n,
		interval: r.interval,
		aggregation: r.aggregation
	});
}
//#endregion
//#region ../app/src/utils/templateResultToString.js
function J(e) {
	if (typeof document < "u" && document.createElement) {
		let t = document.createElement("div");
		return d(e, t), Pa(t.textContent ?? "");
	}
	return Pa(Fa(Na(e)));
}
function Na(e) {
	if (e == null) return "";
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return String(e);
	if (Array.isArray(e)) return e.map((e) => Na(e)).join("");
	if (typeof e == "object" && "strings" in e && "values" in e && Array.isArray(e.strings) && Array.isArray(e.values)) {
		let t = e.strings[0] ?? "";
		for (let n = 0; n < e.values.length; n++) t += Na(e.values[n]) + (e.strings[n + 1] ?? "");
		return t;
	}
	return typeof e == "object" && Symbol.iterator in e && typeof e[Symbol.iterator] == "function" ? Array.from(e, (e) => Na(e)).join("") : "";
}
function Pa(e) {
	return e.replace(/\s+/g, " ").trim();
}
function Fa(e) {
	return e.replace(/<[^>]*>/g, "");
}
//#endregion
//#region ../app/src/charts/chartDataUtils.js
function Ia(e) {
	let t = e.attribute.specifier;
	return !t || typeof t != "object" ? {} : Jn(t) && Yn(t.interval) ? {
		interval: t.interval,
		aggregation: t.aggregation
	} : {};
}
function La(e, t) {
	let n = e[e.length - 1];
	return (e.length > 1 ? e.slice(1).map((e) => e.title || e.name) : [n.title || n.name]).join(t);
}
function Ra(e) {
	let t = e[e.length - 1];
	if (!("samples" in t)) throw Error("Expected a sample group leaf node.");
	return t.samples;
}
function Y(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function za(e, t, n = " / ") {
	return t.length === 0 ? null : t.map((t) => J(e.getAttributeInfo(t.attribute).title)).join(n);
}
//#endregion
//#region ../app/src/charts/hierarchyBarplotData.js
var Ba = Object.freeze({
	categoryField: "category",
	groupField: "group",
	countField: "Count",
	groupLabelSeparator: " / ",
	grouped: void 0
});
function Va(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "nominal" && t.type !== "ordinal") throw Error("Bar plot requires a categorical attribute.");
	let r = {
		...Ba,
		grouped: e.groupMetadata.length > 0 || "groups" in e.rootGroup,
		...n
	}, i = [], a = [], o = /* @__PURE__ */ new Set(), s = [], c = [], l = Ia(t), u = 0, d = 0, f = 0;
	for (let n of Ea(e)) {
		let p = La(n, r.groupLabelSeparator), m = Ra(n);
		u += m.length;
		let h = q(t, m, e, l);
		if (h.length !== m.length) throw Error("Attribute values length does not match sample ids.");
		let g = /* @__PURE__ */ new Map(), _ = 0, v = 0;
		for (let e of h) {
			if (e == null) {
				f++, v++;
				continue;
			}
			let t = e;
			d++, _++, g.set(t, (g.get(t) ?? 0) + 1), o.has(t) || (o.add(t), a.push(t));
		}
		if (g.size !== 0) {
			c.push({
				title: p,
				sampleCount: m.length,
				nonMissingCount: _,
				missingCount: v,
				counts: g
			}), r.grouped && s.push(p);
			for (let [e, t] of g) i.push({
				[r.categoryField]: e,
				[r.countField]: t,
				...r.grouped ? { [r.groupField]: p } : {}
			});
		}
	}
	return {
		rows: i,
		categoryDomain: a,
		groupDomain: s,
		grouped: r.grouped,
		sampleCount: u,
		nonMissingCount: d,
		missingCount: f,
		groupSummaries: c
	};
}
//#endregion
//#region ../app/src/utils/statistics/boxplot.js
function Ha(t, n, r = {}) {
	let { coef: i = 1.5, dropNaN: a = !0 } = r, o = [];
	for (let e of t) {
		let t = n(e), r = typeof t == "number" ? t : Number(t);
		(!a || Number.isFinite(r)) && o.push({
			obj: e,
			v: r
		});
	}
	if (o.length === 0) return {
		statistics: null,
		outliers: []
	};
	o.sort((e, t) => e.v - t.v);
	let s = o.map((e) => e.v), c = e(s, .25), l = e(s, .5), u = e(s, .75);
	if (c == null || l == null || u == null) return {
		statistics: null,
		outliers: []
	};
	let d = u - c, f = c - i * d, p = u + i * d, m = s[0], h = s[s.length - 1], g, _, v = [];
	if (i === 0) g = m, _ = h;
	else {
		let e = 0;
		for (; e < s.length && s[e] < f;) e++;
		g = s[Math.min(e, s.length - 1)];
		let t = s.length - 1;
		for (; t >= 0 && s[t] > p;) t--;
		_ = s[Math.max(t, 0)];
		for (let e of o) (e.v < f || e.v > p) && v.push(e.obj);
	}
	return {
		statistics: {
			n: t.length,
			nValid: o.length,
			q1: c,
			median: l,
			q3: u,
			iqr: d,
			lowerFence: f,
			upperFence: p,
			lowerWhisker: g,
			upperWhisker: _,
			min: m,
			max: h
		},
		outliers: v
	};
}
//#endregion
//#region ../app/src/charts/hierarchyBoxplotData.js
var Ua = Object.freeze({
	groupField: "group",
	valueField: "value",
	sampleField: "sample",
	groupLabelSeparator: " / ",
	coef: void 0,
	dropNaN: void 0
});
function Wa(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative") throw Error("Boxplot requires a quantitative attribute.");
	let r = t.attribute.specifier;
	if (typeof r == "string" && !e.sampleMetadata.attributeNames.includes(r)) throw Error("Unknown metadata attribute: " + String(r));
	let i = {
		...Ua,
		...n
	}, a = [], o = [], s = [], c = [], l = Ia(t), u = 0, d = 0, f = 0;
	for (let n of Ea(e)) {
		let r = La(n, i.groupLabelSeparator), p = Ra(n);
		u += p.length;
		let m = q(t, p, e, l);
		if (m.length !== p.length) throw Error("Attribute values length does not match sample ids.");
		let h = p.map((e, t) => ({
			[i.sampleField]: e,
			[i.valueField]: m[t]
		}));
		if (h.length === 0) continue;
		let { statistics: g, outliers: _ } = Ha(h, (e) => e[i.valueField], {
			coef: i.coef,
			dropNaN: i.dropNaN
		});
		g ? (d += g.nValid, f += g.n - g.nValid, a.push({
			[i.groupField]: r,
			...g
		}), s.push(r), c.push({
			title: r,
			sampleCount: g.n,
			nonMissingCount: g.nValid,
			missingCount: g.n - g.nValid,
			min: g.min,
			q1: g.q1,
			median: g.median,
			q3: g.q3,
			max: g.max,
			iqr: g.iqr,
			outlierCount: _.length
		})) : f += h.length;
		for (let e of _) o.push({
			[i.groupField]: r,
			[i.sampleField]: e[i.sampleField],
			[i.valueField]: e[i.valueField]
		});
	}
	return {
		statsRows: a,
		outlierRows: o,
		groupDomain: s,
		sampleCount: u,
		nonMissingCount: d,
		missingCount: f,
		groupSummaries: c
	};
}
//#endregion
//#region ../app/src/charts/hierarchyScatterplotData.js
var Ga = Object.freeze({
	groupField: "group",
	xField: "x",
	yField: "y",
	sampleField: "sample",
	groupLabelSeparator: " / "
});
function Ka(e, t, n, r = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative" || n.type !== "quantitative") throw Error("Scatterplot requires quantitative attributes.");
	let i = {
		...Ga,
		...r
	}, a = [], o = [], s = [], c = Ia(t), l = Ia(n), u = 0, d = 0;
	for (let r of Ea(e)) {
		let f = La(r, i.groupLabelSeparator), p = Ra(r);
		u += p.length;
		let m = q(t, p, e, c), h = q(n, p, e, l);
		if (m.length !== p.length) throw Error("X attribute values length does not match sample ids.");
		if (h.length !== p.length) throw Error("Y attribute values length does not match sample ids.");
		let g = !1, _ = 0;
		for (let e = 0; e < p.length; e += 1) {
			let t = m[e], n = h[e];
			if (t == null) {
				d++;
				continue;
			}
			if (n == null) {
				d++;
				continue;
			}
			let r = typeof t == "number" ? t : Number(t), o = typeof n == "number" ? n : Number(n);
			if (!Number.isFinite(r) || !Number.isFinite(o)) {
				d++;
				continue;
			}
			a.push({
				[i.sampleField]: p[e],
				[i.xField]: r,
				[i.yField]: o,
				[i.groupField]: f
			}), g = !0, _++;
		}
		g && (o.push(f), s.push({
			title: f,
			plottedPointCount: _
		}));
	}
	return {
		rows: a,
		groupDomain: o,
		sampleCount: u,
		missingPairCount: d,
		groupSummaries: s
	};
}
//#endregion
//#region ../app/src/utils/statistics/fieldSummary.js
var qa = 15, Ja = new Intl.Collator("en", {
	numeric: !0,
	sensitivity: "base"
});
function Ya(e, t, n, r = qa) {
	let i = Array.from(e.entries()).sort(Za), a = i.slice(0, r).map(([e, n]) => ({
		value: e,
		count: n,
		share: t > 0 ? n / t : 0
	})), o = i.slice(r).reduce((e, [, t]) => e + t, 0), s = e.size > r;
	return {
		nonMissingCount: t,
		missingCount: n,
		distinctCount: e.size,
		categories: a,
		truncated: s,
		...s ? {
			otherCount: o,
			otherShare: t > 0 ? o / t : 0
		} : {}
	};
}
function Xa(e, t) {
	let n = Array.from(e.entries()).sort(Za)[0];
	return n ? {
		value: n[0],
		count: n[1],
		share: t > 0 ? n[1] / t : 0
	} : void 0;
}
function Za(e, t) {
	return t[1] === e[1] ? Ja.compare(String(e[0]), String(t[0])) : t[1] - e[1];
}
//#endregion
//#region ../app/src/utils/colorScaleSummary.js
function Qa(e) {
	let t = e;
	if (!t || typeof t.domain != "function" || typeof t.range != "function") return;
	let n = t.domain(), r = t.range();
	if (Array.isArray(n) && Array.isArray(r) && r.every((e) => typeof e == "string")) return {
		domain: n,
		range: r
	};
}
function $a(e, t, n, r) {
	let i = eo(n, r);
	return i ? e.map((e) => {
		let n = i.get(t(e));
		return n === void 0 ? e : {
			...e,
			color: n
		};
	}) : e;
}
function eo(e, t) {
	if (!Array.isArray(e) || !Array.isArray(t) || !t.every((e) => typeof e == "string")) return;
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e, r) => {
		let i = t[r];
		typeof i == "string" && n.set(e, i);
	}), n;
}
//#endregion
//#region ../app/src/charts/hierarchySampleAttributePlots.js
var to = "hierarchy_barplot", no = "hierarchy_boxplot_stats", ro = "hierarchy_boxplot_outliers", io = "hierarchy_scatterplot_points";
function ao(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = J(t.title), r = J(t.emphasizedName), i = t.type, a = za(e.attributeInfoSource, e.sampleHierarchy.groupMetadata) ?? "Group", o = "Count", { rows: s, categoryDomain: c, groupDomain: l, grouped: u, sampleCount: d, nonMissingCount: f, missingCount: p, groupSummaries: m } = Va(e.sampleHierarchy, e.attributeInfo, {
		categoryField: n,
		groupField: a,
		countField: o
	}), h = go(t, c), g = u ? a : n, _ = u ? a : r, v = u ? l : c, ee = u ? "nominal" : i, te = {
		data: { name: to },
		mark: { type: "rect" },
		encoding: {
			x: {
				field: Y(g),
				type: ee,
				band: .8,
				title: _,
				axis: { labelAngle: 0 }
			},
			y: u ? {
				field: "y0",
				type: "quantitative",
				title: "Count"
			} : {
				field: Y(o),
				type: "quantitative",
				title: "Count"
			},
			...u ? { y2: { field: "y1" } } : {},
			color: {
				field: Y(n),
				type: i,
				title: r,
				scale: h,
				legend: u ? {} : null
			}
		},
		...u ? { transform: [{
			type: "stack",
			field: Y(o),
			groupby: [Y(g)],
			as: ["y0", "y1"]
		}] } : {}
	}, ne = te.encoding.x;
	return ne.scale = {
		...ne.scale ?? {},
		domain: v
	}, {
		kind: "sample_attribute_plot",
		plotType: "barplot",
		request: {
			plotType: "barplot",
			attribute: e.attributeInfo.attribute
		},
		title: `Bar plot of ${J(t.title)}`,
		spec: te,
		namedData: [{
			name: to,
			rows: s
		}],
		filename: "genomespy-barplot.png",
		summary: {
			groupCount: l.length > 0 ? l.length : 1,
			sampleCount: d,
			plottedCount: f
		},
		characterization: co({
			rows: s,
			categoryFieldName: n,
			xTitle: _,
			colorTitle: u ? r : void 0,
			countFieldName: o,
			colorScale: h,
			nonMissingCount: f,
			missingCount: p,
			groupSummaries: m,
			grouped: u
		})
	};
}
function oo(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = za(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), r = J(t.emphasizedName), i = n ?? "Group", a = J(t.title), { statsRows: o, outlierRows: s, groupDomain: c, sampleCount: l, nonMissingCount: u, groupSummaries: d } = Wa(e.sampleHierarchy, e.attributeInfo, {
		groupField: i,
		valueField: a,
		sampleField: "sample"
	}), f = sr({
		statsName: no,
		outliersName: ro,
		groupField: Y(i),
		valueField: Y(a),
		sampleField: "sample",
		groupTitle: n ?? "Group",
		valueTitle: r
	}), p = f.encoding.x;
	return p.scale = {
		...p.scale ?? {},
		domain: c.slice().reverse()
	}, {
		kind: "sample_attribute_plot",
		plotType: "boxplot",
		request: {
			plotType: "boxplot",
			attribute: e.attributeInfo.attribute
		},
		title: `Boxplot of ${J(t.title)}`,
		spec: f,
		namedData: [{
			name: no,
			rows: o
		}, {
			name: ro,
			rows: s
		}],
		filename: "genomespy-boxplot.png",
		summary: {
			groupCount: c.length > 0 ? c.length : 1,
			sampleCount: l,
			plottedCount: u
		},
		characterization: lo(d)
	};
}
function so(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.xAttributeInfo.attribute), n = e.attributeInfoSource.getAttributeInfo(e.yAttributeInfo.attribute), r = J(t.title), i = J(n.title), a = J(t.emphasizedName), o = J(n.emphasizedName), s = za(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), c = s ?? "Group", { rows: l, groupDomain: u, sampleCount: d, missingPairCount: f, groupSummaries: p } = Ka(e.sampleHierarchy, e.xAttributeInfo, e.yAttributeInfo, {
		groupField: c,
		xField: r,
		yField: i,
		sampleField: "sample"
	}), m = {
		x: {
			field: Y(r),
			type: "quantitative",
			title: a
		},
		y: {
			field: Y(i),
			type: "quantitative",
			title: o
		}
	}, h = e.colorScaleDomain ?? u, g = _o(u, c, s ?? "Group", h, e.colorScaleRange), _ = {
		data: { name: io },
		mark: {
			type: "point",
			filled: !1,
			size: 30,
			opacity: .7
		},
		encoding: {
			...m,
			...g ? { color: g } : {}
		}
	};
	return {
		kind: "sample_attribute_plot",
		plotType: "scatterplot",
		request: {
			plotType: "scatterplot",
			xAttribute: e.xAttributeInfo.attribute,
			yAttribute: e.yAttributeInfo.attribute
		},
		title: `Scatterplot of ${r} vs ${i}`,
		spec: _,
		namedData: [{
			name: io,
			rows: l
		}],
		filename: "genomespy-scatterplot.png",
		summary: {
			groupCount: u.length > 0 ? u.length : 1,
			sampleCount: d,
			plottedCount: l.length
		},
		characterization: uo({
			rows: l,
			xFieldName: r,
			yFieldName: i,
			xAxisTitle: a,
			yAxisTitle: o,
			missingPairCount: f,
			groupSummaries: p,
			colorScaleDomain: h,
			colorScaleRange: e.colorScaleRange
		})
	};
}
function co(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.rows) {
		let r = n[e.categoryFieldName], i = Number(n[e.countFieldName]);
		t.set(r, (t.get(r) ?? 0) + i);
	}
	let n = Ya(t, e.nonMissingCount, e.missingCount), r = $a(n.categories, (e) => e.value, e.colorScale.domain, e.colorScale.range);
	return {
		kind: "category_counts",
		encoding: {
			x: {
				role: e.grouped ? "current_sample_groups" : "plotted_attribute",
				title: e.xTitle
			},
			y: {
				role: "count",
				title: "count"
			},
			...e.colorTitle ? { color: {
				role: "plotted_attribute",
				title: e.colorTitle
			} } : {}
		},
		...n,
		categories: r,
		...e.grouped ? { groups: e.groupSummaries.map((e) => ({
			title: e.title,
			sampleCount: e.sampleCount,
			nonMissingCount: e.nonMissingCount,
			missingCount: e.missingCount,
			...fo(e.counts, e.nonMissingCount)
		})) } : {}
	};
}
function lo(e) {
	let t = e.map((e) => ({ ...e })), n = t.filter((e) => e.nonMissingCount > 0).slice().sort((e, t) => e.median - t.median), r = n[0], i = n[n.length - 1];
	return {
		kind: "quantitative_distribution",
		groups: t,
		...i ? { highestMedianGroup: i.title } : {},
		...r ? { lowestMedianGroup: r.title } : {},
		...i && r ? { largestMedianDifference: i.median - r.median } : {}
	};
}
function uo(e) {
	let t = e.rows.map((t) => Number(t[e.xFieldName])), n = e.rows.map((t) => Number(t[e.yFieldName])), r = mo(t, n);
	return {
		kind: "quantitative_relationship",
		axisMapping: [{
			axis: "x",
			attributeIndex: 0,
			title: e.xAxisTitle
		}, {
			axis: "y",
			attributeIndex: 1,
			title: e.yAxisTitle
		}],
		missingPairCount: e.missingPairCount,
		x: po(t),
		y: po(n),
		...r === void 0 ? {} : { correlation: ho(r) },
		...e.groupSummaries.length > 1 ? { groups: $a(e.groupSummaries, (e) => e.title, e.colorScaleDomain, e.colorScaleRange) } : {}
	};
}
function fo(e, t) {
	let n = Xa(e, t);
	return n ? { topCategory: n } : {};
}
function po(e) {
	let t = e.filter((e) => Number.isFinite(e));
	return t.length === 0 ? {} : {
		min: Math.min(...t),
		max: Math.max(...t)
	};
}
function mo(e, t) {
	if (e.length !== t.length || e.length < 3) return;
	let n = e.reduce((e, t) => e + t, 0) / e.length, r = t.reduce((e, t) => e + t, 0) / t.length, i = 0, a = 0, o = 0;
	for (let s = 0; s < e.length; s += 1) {
		let c = e[s] - n, l = t[s] - r;
		i += c * c, a += l * l, o += c * l;
	}
	if (i !== 0 && a !== 0) return o / Math.sqrt(i * a);
}
function ho(e) {
	return {
		method: "pearson",
		r: e
	};
}
function go(e, t) {
	let n = e.scale, r = n && typeof n.domain == "function" ? n.domain() : t, i = n && typeof n.range == "function" ? n.range() : void 0;
	return {
		domain: r,
		...i ? { range: i } : {}
	};
}
function _o(e, t, n, r, i) {
	if (e.length !== 0) return {
		field: Y(t),
		type: "nominal",
		title: n,
		scale: {
			domain: r ?? e,
			...i ? { range: i } : {}
		}
	};
}
//#endregion
//#region ../app/src/charts/sampleAttributePlotUtils.js
function vo(e) {
	if (e.sampleHierarchy.groupMetadata.length !== 1) return;
	let t = e.sampleHierarchy.groupMetadata[0].attribute;
	if (t.type !== "SAMPLE_ATTRIBUTE") return;
	let n = e.compositeAttributeInfoSource.getAttributeInfo(t);
	if (n.type === "quantitative") return;
	let r = Qa(n.scale);
	if (r) return {
		domain: r.domain.map(String),
		range: r.range
	};
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataValidation.js
function yo(e, t) {
	let n = /* @__PURE__ */ new Map();
	function r(e, t = 1, r = null) {
		let i = n.get(e);
		i || (i = {
			message: e,
			count: 0,
			cases: []
		}, n.set(e, i)), i.count += t, r && i.cases.push(r);
	}
	let i = new Set(e), a = /* @__PURE__ */ new Set();
	for (let e of t) {
		if (!("sample" in e)) {
			r(bo);
			continue;
		}
		if (e.sample == null || e.sample === "") {
			r(xo);
			continue;
		}
		let t = String(e.sample);
		a.has(t) && r(So, 1, t), a.add(t);
	}
	return a.size === 0 && r(Co), n.size > 0 ? { error: Array.from(n.values()) } : { statistics: {
		unknownSamples: a.difference(i),
		notCoveredSamples: i.difference(a),
		samplesInBoth: a.intersection(i)
	} };
}
var bo = "Missing sample field in metadata record", xo = "Empty sample field in metadata record", So = "Duplicate sample IDs found in metadata", Co = "No valid samples found in metadata";
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAttributes.js
function wo(e, t) {
	return t ? xi(e, t, "/") : V([e], "/");
}
function To(e, t) {
	let n = e.attributes;
	if (!n) return {};
	let r = e.attributeGroupSeparator, i = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = H(wo(e, r), "/");
		for (let e = 1; e <= t.length; e++) i.add(V(t.slice(0, e), "/"));
	}
	i.add("");
	let a = {}, o = /* @__PURE__ */ new Map();
	for (let [e, t] of Object.entries(n)) {
		let n = wo(e, r);
		if (!i.has(n)) continue;
		let s = o.get(n);
		if (s) throw Error("Metadata source attributes has conflicting keys \"" + s + "\" and \"" + e + "\" that both resolve to \"" + n + "\".");
		o.set(n, e), a[n] = { ...t };
	}
	return a;
}
//#endregion
//#region ../app/src/sampleView/metadata/exampleValues.js
function Eo(e, t) {
	let n = e.map((e) => String(e ?? "").trim()).filter(Boolean);
	return s(n, t, Do);
}
function Do(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/adapters/dataMetadataSourceAdapter.js
var Oo = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t = {}) {
		this.#e = e, this.#t = e.backend, this.#n = t.baseUrl, this.#i = /* @__PURE__ */ new Set([this.#t.sampleIdField ?? "sample", ...e.excludeColumns ?? []]);
	}
	async listColumns(e) {
		let t = await this.#a(e), n = this.#t.sampleIdField ?? "sample", r = /* @__PURE__ */ new Set();
		for (let e of t) for (let t of Object.keys(e)) t !== n && (this.#l(t) || r.add(t));
		return Array.from(r).map((e) => ({ id: e }));
	}
	async listSampleIds(e) {
		let t = await this.#a(e), n = this.#t.sampleIdField ?? "sample";
		return t.map((e) => String(e[n] ?? ""));
	}
	async listIdentifierExamples(e, t) {
		return [{
			name: "column",
			primary: !0,
			examples: Eo((await this.listColumns(t)).map((e) => e.id), e)
		}];
	}
	async resolveColumns(e, t) {
		let n = await this.listColumns(t), r = new Set(n.map((e) => e.id)), i = [], a = /* @__PURE__ */ new Set();
		for (let t of e) r.has(t) ? i.includes(t) || i.push(t) : a.add(t);
		return {
			columnIds: i,
			missing: Array.from(a)
		};
	}
	async fetchColumns(e, t) {
		let n = await this.#a(t), r = this.#t.sampleIdField ?? "sample", i = new Set(e.sampleIds);
		for (let t of e.columnIds) if (this.#l(t)) throw Error("Column \"" + t + "\" is excluded by metadata source configuration.");
		let a = [];
		for (let t of n) {
			let n = String(t[r] ?? "");
			if (!i.has(n)) continue;
			let o = { sample: n };
			for (let n of e.columnIds) o[n] = t[n];
			a.push(o);
		}
		if (a.length === 0) throw Error("Metadata source rows do not match any sample ids in the current view.");
		let o = yo(e.sampleIds, a);
		if ("error" in o) {
			let e = o.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		if (o.statistics.samplesInBoth.size === 0) throw Error("Metadata source rows do not match any sample ids in the current view.");
		let s = To(this.#e, e.columnIds), c = e.groupPath ?? this.#e.groupPath, l = Si(a, s, this.#e.attributeGroupSeparator, c);
		return e.replace !== void 0 && (l.replace = e.replace), l;
	}
	async #a(e) {
		return this.#r ||= this.#o(e).catch((e) => {
			throw this.#r = void 0, e;
		}), this.#r;
	}
	async #o(e) {
		let t = this.#t.data;
		if ("url" in t) return this.#s(t, e);
		if ("values" in t) return this.#c(t);
		throw Error("Metadata source data backend supports only UrlData and InlineData.");
	}
	async #s(e, t) {
		if (typeof e.url != "string") throw Error("Metadata source UrlData currently supports only string URLs.");
		let n = ce(this.#n, e.url), r = u(e, n), i = f(r.type), a;
		try {
			a = await fetch(n, { signal: t });
		} catch (e) {
			throw Error("Could not load metadata source: " + e.message, { cause: e });
		}
		if (!a.ok) throw Error("Could not load metadata source: " + a.status + " " + a.statusText);
		let o;
		return o = typeof a[i] == "function" ? await a[i]() : await a.text(), m(o, p(r));
	}
	async #c(e) {
		let t = e.values, n = [];
		if (Array.isArray(t)) {
			if (t.length > 0) {
				let e = g(t[0]);
				n = t.map((t) => e(t));
			}
		} else if (typeof t == "object") n = [t];
		else if (typeof t == "string") n = m(t, p(u(e)));
		else throw Error("Inline metadata source values must be an array, object, or a string.");
		return n;
	}
	#l(e) {
		return this.#i.has(e);
	}
};
//#endregion
//#region ../../node_modules/@zarrita/storage/dist/src/util.js
function ko(e, t, n, r = {}) {
	return t !== void 0 && n !== void 0 && (r = {
		...r,
		headers: {
			...r.headers,
			Range: `bytes=${t}-${t + n - 1}`
		}
	}), fetch(e, r);
}
function Ao(e, t) {
	return {
		...e,
		...t,
		headers: {
			...e.headers,
			...t.headers
		}
	};
}
//#endregion
//#region ../../node_modules/@zarrita/storage/dist/src/fetch.js
function jo(e, t) {
	let n = typeof e == "string" ? new URL(e) : e;
	n.pathname.endsWith("/") || (n.pathname += "/");
	let r = new URL(t.slice(1), n);
	return r.search = n.search, r;
}
async function Mo(e) {
	if (e.status !== 404) {
		if (e.status === 200 || e.status === 206) return new Uint8Array(await e.arrayBuffer());
		throw Error(`Unexpected response status ${e.status} ${e.statusText}`);
	}
}
async function No(e, t, n, r) {
	if (r) return fetch(e, {
		...n,
		headers: {
			...n.headers,
			Range: `bytes=-${t}`
		}
	});
	let i = await fetch(e, {
		...n,
		method: "HEAD"
	});
	if (!i.ok) return i;
	let a = i.headers.get("Content-Length"), o = Number(a);
	return ko(e, o - t, o, n);
}
var Po = class {
	url;
	#e;
	#t;
	constructor(e, t = {}) {
		this.url = e, this.#e = t.overrides ?? {}, this.#t = t.useSuffixRequest ?? !1;
	}
	#n(e) {
		return Ao(this.#e, e);
	}
	async get(e, t = {}) {
		let n = jo(this.url, e).href;
		return Mo(await fetch(n, this.#n(t)));
	}
	async getRange(e, t, n = {}) {
		let r = jo(this.url, e), i = this.#n(n), a;
		return a = "suffixLength" in t ? await No(r, t.suffixLength, i, this.#t) : await ko(r, t.offset, t.length, i), Mo(a);
	}
}, Fo = class {
	#e;
	constructor(e, t, n) {
		this.#e = typeof e == "number" ? new Uint8Array(e) : e instanceof ArrayBuffer ? new Uint8Array(e, t, n) : new Uint8Array(Array.from(e, (e) => +!!e));
	}
	get BYTES_PER_ELEMENT() {
		return 1;
	}
	get byteOffset() {
		return this.#e.byteOffset;
	}
	get byteLength() {
		return this.#e.byteLength;
	}
	get buffer() {
		return this.#e.buffer;
	}
	get length() {
		return this.#e.length;
	}
	get(e) {
		let t = this.#e[e];
		return typeof t == "number" ? t !== 0 : t;
	}
	set(e, t) {
		this.#e[e] = +!!t;
	}
	fill(e) {
		this.#e.fill(+!!e);
	}
	*[Symbol.iterator]() {
		for (let e = 0; e < this.length; e++) yield this.get(e);
	}
}, Io = class {
	_data;
	chars;
	#e;
	constructor(e, t, n, r) {
		if (this.chars = e, this.#e = new TextEncoder(), typeof t == "number") this._data = new Uint8Array(t * e);
		else if (t instanceof ArrayBuffer) r && (r *= e), this._data = new Uint8Array(t, n, r);
		else {
			let n = Array.from(t);
			this._data = new Uint8Array(n.length * e);
			for (let e = 0; e < n.length; e++) this.set(e, n[e]);
		}
	}
	get BYTES_PER_ELEMENT() {
		return this.chars;
	}
	get byteOffset() {
		return this._data.byteOffset;
	}
	get byteLength() {
		return this._data.byteLength;
	}
	get buffer() {
		return this._data.buffer;
	}
	get length() {
		return this.byteLength / this.BYTES_PER_ELEMENT;
	}
	get(e) {
		let t = new Uint8Array(this.buffer, this.byteOffset + this.chars * e, this.chars);
		return new TextDecoder().decode(t).replace(/\x00/g, "");
	}
	set(e, t) {
		let n = new Uint8Array(this.buffer, this.byteOffset + this.chars * e, this.chars);
		n.fill(0), n.set(this.#e.encode(t));
	}
	fill(e) {
		let t = this.#e.encode(e);
		for (let e = 0; e < this.length; e++) this._data.set(t, e * this.chars);
	}
	*[Symbol.iterator]() {
		for (let e = 0; e < this.length; e++) yield this.get(e);
	}
}, Lo = class e {
	#e;
	chars;
	constructor(t, n, r, i) {
		if (this.chars = t, typeof n == "number") this.#e = new Int32Array(n * t);
		else if (n instanceof ArrayBuffer) i && (i *= t), this.#e = new Int32Array(n, r, i);
		else {
			let r = n, i = new e(t, 1);
			this.#e = new Int32Array((function* () {
				for (let e of r) i.set(0, e), yield* i.#e;
			})());
		}
	}
	get BYTES_PER_ELEMENT() {
		return this.#e.BYTES_PER_ELEMENT * this.chars;
	}
	get byteLength() {
		return this.#e.byteLength;
	}
	get byteOffset() {
		return this.#e.byteOffset;
	}
	get buffer() {
		return this.#e.buffer;
	}
	get length() {
		return this.#e.length / this.chars;
	}
	get(e) {
		let t = this.chars * e, n = "";
		for (let e = 0; e < this.chars; e++) n += String.fromCodePoint(this.#e[t + e]);
		return n.replace(/\u0000/g, "");
	}
	set(e, t) {
		let n = this.chars * e, r = this.#e.subarray(n, n + this.chars);
		r.fill(0);
		for (let e = 0; e < this.chars; e++) r[e] = t.codePointAt(e) ?? 0;
	}
	fill(e) {
		this.set(0, e);
		let t = this.#e.subarray(0, this.chars);
		for (let e = 1; e < this.length; e++) this.#e.set(t, e * this.chars);
	}
	*[Symbol.iterator]() {
		for (let e = 0; e < this.length; e++) yield this.get(e);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/util.js
function X(e) {
	let t = new TextDecoder().decode(e);
	return JSON.parse(t);
}
function Ro(e, t) {
	let n = t / 2, r = t - 1, i = 0;
	for (let a = 0; a < e.length; a += t) for (let t = 0; t < n; t += 1) i = e[a + t], e[a + t] = e[a + r - t], e[a + r - t] = i;
}
function zo(e) {
	if (e === "v2:object") return globalThis.Array;
	let t = e.match(/v2:([US])(\d+)/);
	if (t) {
		let [, e, n] = t;
		return (e === "U" ? Lo : Io).bind(null, Number(n));
	}
	if (e === "string") return globalThis.Array;
	let n = {
		int8: Int8Array,
		int16: Int16Array,
		int32: Int32Array,
		int64: globalThis.BigInt64Array,
		uint8: Uint8Array,
		uint16: Uint16Array,
		uint32: Uint32Array,
		uint64: globalThis.BigUint64Array,
		float16: globalThis.Float16Array,
		float32: Float32Array,
		float64: Float64Array,
		bool: Fo
	}[e];
	return Q(n, `Unknown or unsupported data_type: ${e}`), n;
}
function Z(e, t) {
	let n = e.length;
	typeof t == "string" && (t = t === "C" ? Array.from({ length: n }, (e, t) => t) : Array.from({ length: n }, (e, t) => n - 1 - t)), Q(n === t.length, "Order length must match the number of dimensions.");
	let r = 1, i = Array(n);
	for (let n = t.length - 1; n >= 0; n--) i[t[n]] = r, r *= e[t[n]];
	return i;
}
function Bo({ name: e, configuration: t }) {
	if (e === "default") {
		let e = t?.separator ?? "/";
		return (t) => ["c", ...t].join(e);
	}
	if (e === "v2") {
		let e = t?.separator ?? ".";
		return (t) => t.join(e) || "0";
	}
	throw Error(`Unknown chunk key encoding: ${e}`);
}
function Vo(e) {
	if (e === "|O") return { data_type: "v2:object" };
	let t = e.match(/^([<|>])(.*)$/);
	Q(t, `Invalid dtype: ${e}`);
	let [, n, r] = t, i = {
		b1: "bool",
		i1: "int8",
		u1: "uint8",
		i2: "int16",
		u2: "uint16",
		i4: "int32",
		u4: "uint32",
		i8: "int64",
		u8: "uint64",
		f2: "float16",
		f4: "float32",
		f8: "float64"
	}[r] ?? (r.startsWith("S") || r.startsWith("U") ? `v2:${r}` : void 0);
	return Q(i, `Unsupported or unknown dtype: ${e}`), n === "|" ? { data_type: i } : {
		data_type: i,
		endian: n === "<" ? "little" : "big"
	};
}
function Ho(e, t = {}) {
	let n = [], r = Vo(e.dtype);
	e.order === "F" && n.push({
		name: "transpose",
		configuration: { order: "F" }
	}), "endian" in r && r.endian === "big" && n.push({
		name: "bytes",
		configuration: { endian: "big" }
	});
	for (let { id: t, ...r } of e.filters ?? []) n.push({
		name: t,
		configuration: r
	});
	if (e.compressor) {
		let { id: t, ...r } = e.compressor;
		n.push({
			name: t,
			configuration: r
		});
	}
	return {
		zarr_format: 3,
		node_type: "array",
		shape: e.shape,
		data_type: r.data_type,
		chunk_grid: {
			name: "regular",
			configuration: { chunk_shape: e.chunks }
		},
		chunk_key_encoding: {
			name: "v2",
			configuration: { separator: e.dimension_separator ?? "." }
		},
		codecs: n,
		fill_value: e.fill_value,
		attributes: t
	};
}
function Uo(e, t = {}) {
	return {
		zarr_format: 3,
		node_type: "group",
		attributes: t
	};
}
function Wo(e, t) {
	if (t !== "number" && t !== "bigint" && t !== "boolean" && t !== "object" && t !== "string") return e === t;
	let n = e === "bool";
	if (t === "boolean") return n;
	let r = e.startsWith("v2:U") || e.startsWith("v2:S") || e === "string";
	if (t === "string") return r;
	let i = e === "int64" || e === "uint64";
	if (t === "bigint") return i;
	let a = e === "v2:object";
	return t === "object" ? a : !r && !i && !n && !a;
}
function Go(e) {
	return e?.name === "sharding_indexed";
}
function Ko(e) {
	return (e.data_type === "uint64" || e.data_type === "int64") && e.fill_value != null ? BigInt(e.fill_value) : e.fill_value;
}
function qo(e, ...t) {
	if (!t.some((t) => e instanceof t)) throw e;
}
function Q(e, t = "") {
	if (!e) throw Error(t);
}
async function Jo(e, { format: t, signal: n }) {
	let r = e instanceof Response ? e : new Response(e);
	Q(r.body, "Response does not contain body.");
	try {
		return await new Response(r.body.pipeThrough(new DecompressionStream(t), { signal: n })).arrayBuffer();
	} catch {
		throw n?.throwIfAborted(), Error(`Failed to decode ${t}`);
	}
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/bitround.js
var Yo = class e {
	kind = "array_to_array";
	constructor(e, t) {
		Q(e.keepbits >= 0, "keepbits must be zero or positive");
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		throw Error("`BitroundCodec.encode` is not implemented. Please open an issue at https://github.com/manzt/zarrita.js/issues.");
	}
	decode(e) {
		return e;
	}
}, Xo = Zo();
function Zo() {
	let e = new Uint32Array([305419896]);
	return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)[0] !== 18;
}
function Qo(e) {
	return "BYTES_PER_ELEMENT" in e ? e.BYTES_PER_ELEMENT : 4;
}
var $o = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t) {
		this.#i = e?.endian, this.#t = zo(t.data_type), this.#r = t.shape, this.#e = Z(t.shape, "C");
		let n = new this.#t(0);
		this.#n = n.BYTES_PER_ELEMENT;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		let t = new Uint8Array(e.data.buffer);
		return Xo && this.#i === "big" && Ro(t, Qo(this.#t)), t;
	}
	decode(e) {
		return Xo && this.#i === "big" && Ro(e, Qo(this.#t)), {
			data: new this.#t(e.buffer, e.byteOffset, e.byteLength / this.#n),
			shape: this.#r,
			stride: this.#e
		};
	}
}, es = class e {
	kind = "bytes_to_bytes";
	static fromConfig() {
		return new e();
	}
	encode(e) {
		throw Error("Not implemented");
	}
	decode(e) {
		return new Uint8Array(e.buffer, e.byteOffset, e.byteLength - 4);
	}
}, ts = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Gzip encoding is not enabled by default. Please register a custom codec with `numcodecs/gzip`.");
	}
	async decode(e) {
		let t = await Jo(e, { format: "gzip" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/json2.js
function ns(e, t) {
	return Q(!Number.isNaN(t), "JsonCodec allow_nan is false but NaN was encountered during encoding."), Q(t !== Infinity, "JsonCodec allow_nan is false but Infinity was encountered during encoding."), Q(t !== -Infinity, "JsonCodec allow_nan is false but -Infinity was encountered during encoding."), t;
}
function rs(e, t) {
	return t instanceof Object && !Array.isArray(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t;
}
var is = class e {
	configuration;
	kind = "array_to_bytes";
	#e;
	#t;
	constructor(e = {}) {
		this.configuration = e;
		let { encoding: t = "utf-8", skipkeys: n = !1, ensure_ascii: r = !0, check_circular: i = !0, allow_nan: a = !0, sort_keys: o = !0, indent: s, strict: c = !0 } = e, l = e.separators;
		l ||= s ? [", ", ": "] : [",", ":"], this.#e = {
			encoding: t,
			skipkeys: n,
			ensure_ascii: r,
			check_circular: i,
			allow_nan: a,
			indent: s,
			separators: l,
			sort_keys: o
		}, this.#t = { strict: c };
	}
	static fromConfig(t) {
		return new e(t);
	}
	encode(e) {
		let { indent: t, encoding: n, ensure_ascii: r, check_circular: i, allow_nan: a, sort_keys: o } = this.#e;
		Q(n === "utf-8", "JsonCodec does not yet support non-utf-8 encoding.");
		let s = [];
		Q(i, "JsonCodec does not yet support skipping the check for circular references during encoding."), a || s.push(ns), o && s.push(rs);
		let c = Array.from(e.data);
		c.push("|O"), c.push(e.shape);
		let l;
		s.length && (l = (e, t) => {
			let n = t;
			for (let t of s) n = t(e, n);
			return n;
		});
		let u = JSON.stringify(c, l, t);
		return r && (u = u.replace(/[\u007F-\uFFFF]/g, (e) => {
			let t = `0000${e.charCodeAt(0).toString(16)}`;
			return `\\u${t.substring(t.length - 4)}`;
		})), new TextEncoder().encode(u);
	}
	decode(e) {
		let { strict: t } = this.#t;
		Q(t, "JsonCodec does not yet support non-strict decoding.");
		let n = X(e), r = n.pop();
		return n.pop(), Q(r, "0D not implemented for JsonCodec."), {
			data: n,
			shape: r,
			stride: Z(r, "C")
		};
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/transpose.js
function as(e) {
	return e instanceof Fo || e instanceof Io || e instanceof Lo ? new Proxy(e, {
		get(e, t) {
			return e.get(Number(t));
		},
		set(e, t, n) {
			return e.set(Number(t), n), !0;
		}
	}) : e;
}
function os(e, t) {
	let n;
	return n = e.data instanceof Io || e.data instanceof Lo ? new e.constructor(e.data.length, e.data.chars) : new e.constructor(e.data.length), {
		data: n,
		shape: e.shape,
		stride: Z(e.shape, t)
	};
}
function ss(e, t) {
	let n = os(e, t), r = e.shape.length, i = e.data.length, a = Array(r).fill(0), o = as(e.data), s = as(n.data);
	for (let t = 0; t < i; t++) {
		let i = 0;
		for (let e = 0; e < r; e++) i += a[e] * n.stride[e];
		s[i] = o[t], a[0] += 1;
		for (let t = 0; t < r; t++) if (a[t] === e.shape[t]) {
			if (t + 1 === r) break;
			a[t] = 0, a[t + 1] += 1;
		}
	}
	return n;
}
function cs(e) {
	let t = e.shape.length;
	return Q(t === e.stride.length, "Shape and stride must have the same length."), e.stride.map((e, t) => ({
		stride: e,
		index: t
	})).sort((e, t) => t.stride - e.stride).map((e) => e.index);
}
function ls(e, t) {
	let n = cs(e);
	return Q(n.length === t.length, "Orders must match"), n.every((e, n) => e === t[n]);
}
var us = class e {
	kind = "array_to_array";
	#e;
	#t;
	constructor(e, t) {
		let n = e.order ?? "C", r = t.shape.length, i = Array(r), a = Array(r);
		if (n === "C") for (let e = 0; e < r; ++e) i[e] = e, a[e] = e;
		else if (n === "F") for (let e = 0; e < r; ++e) i[e] = r - e - 1, a[e] = r - e - 1;
		else i = n, i.forEach((e, t) => {
			Q(a[e] === void 0, `Invalid permutation: ${JSON.stringify(n)}`), a[e] = t;
		});
		this.#e = i, this.#t = a;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		return ls(e, this.#t) ? e : ss(e, this.#t);
	}
	decode(e) {
		return {
			data: e.data,
			shape: e.shape,
			stride: Z(e.shape, this.#e)
		};
	}
}, ds = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = Z(e, "C");
	}
	static fromConfig(t, n) {
		return new e(n.shape);
	}
	encode(e) {
		throw Error("Method not implemented.");
	}
	decode(e) {
		let t = new TextDecoder(), n = new DataView(e.buffer), r = Array(n.getUint32(0, !0)), i = 4;
		for (let a = 0; a < r.length; a++) {
			let o = n.getUint32(i, !0);
			i += 4, r[a] = t.decode(e.buffer.slice(i, i + o)), i += o;
		}
		return {
			data: r,
			shape: this.#e,
			stride: this.#t
		};
	}
}, fs = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Zlib encoding is not enabled by default. Please register a codec with `numcodecs/zlib`.");
	}
	async decode(e) {
		let t = await Jo(e, { format: "deflate" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs.js
function ps() {
	return (/* @__PURE__ */ new Map()).set("blosc", () => import("./blosc-JROzDOnd.js").then((e) => e.default)).set("lz4", () => import("./lz4-CUYSbVey.js").then((e) => e.default)).set("zstd", () => import("./zstd-YMzMcush.js").then((e) => e.default)).set("gzip", () => ts).set("zlib", () => fs).set("transpose", () => us).set("bytes", () => $o).set("crc32c", () => es).set("vlen-utf8", () => ds).set("json2", () => is).set("bitround", () => Yo);
}
var ms = ps();
function hs(e) {
	let t;
	return {
		async encode(n) {
			t ||= await gs(e);
			for (let e of t.array_to_array) n = await e.encode(n);
			let r = await t.array_to_bytes.encode(n);
			for (let e of t.bytes_to_bytes) r = await e.encode(r);
			return r;
		},
		async decode(n) {
			t ||= await gs(e);
			for (let e = t.bytes_to_bytes.length - 1; e >= 0; e--) n = await t.bytes_to_bytes[e].decode(n);
			let r = await t.array_to_bytes.decode(n);
			for (let e = t.array_to_array.length - 1; e >= 0; e--) r = await t.array_to_array[e].decode(r);
			return r;
		}
	};
}
async function gs(e) {
	let t = e.codecs.map(async (e) => {
		let t = await ms.get(e.name)?.();
		return Q(t, `Unknown codec: ${e.name}`), {
			Codec: t,
			meta: e
		};
	}), n = [], r, i = [];
	for await (let { Codec: a, meta: o } of t) {
		let t = a.fromConfig(o.configuration, e);
		switch (t.kind) {
			case "array_to_array":
				n.push(t);
				break;
			case "array_to_bytes":
				r = t;
				break;
			default: i.push(t);
		}
	}
	return r ||= (Q(_s(e), `Cannot encode ${e.data_type} to bytes without a codec`), $o.fromConfig({ endian: "little" }, e)), {
		array_to_array: n,
		array_to_bytes: r,
		bytes_to_bytes: i
	};
}
function _s(e) {
	return e.data_type !== "v2:object" && e.data_type !== "string";
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/errors.js
var vs = class extends Error {
	constructor(e, t = {}) {
		super(`Node not found: ${e}`, t), this.name = "NodeNotFoundError";
	}
}, ys = class extends Error {
	constructor(e) {
		super(`Missing key: ${e}`), this.name = "KeyError";
	}
}, bs = 18446744073709551615n;
function xs(e, t, n, r) {
	Q(e.store.getRange, "Store does not support range requests");
	let i = e.store.getRange.bind(e.store), a = t.map((e, t) => e / r.chunk_shape[t]), o = hs({
		data_type: "uint64",
		shape: [...a, 2],
		codecs: r.index_codecs
	}), s = 16 * a.reduce((e, t) => e * t, 1), c = {};
	return async (t, r) => {
		let l = t.map((e, t) => Math.floor(e / a[t])), u = e.resolve(n(l)).path;
		u in c || (c[u] = (async () => {
			let e = await i(u, { suffixLength: s + 4 }, r);
			return e ? await o.decode(e) : null;
		})().catch((e) => {
			throw delete c[u], e;
		}));
		let d = await c[u];
		if (d === null) return;
		let { data: f, shape: p, stride: m } = d, h = t.map((e, t) => e % p[t]).reduce((e, t, n) => e + t * m[n], 0), g = f[h], _ = f[h + 1];
		if (g !== bs || _ !== bs) return i(u, {
			offset: Number(g),
			length: Number(_)
		}, r);
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/hierarchy.js
var Ss = class e {
	store;
	path;
	constructor(e, t = "/") {
		this.store = e, this.path = t;
	}
	resolve(t) {
		let n = new URL(`file://${this.path.endsWith("/") ? this.path : `${this.path}/`}`);
		return new e(this.store, decodeURIComponent(new URL(t, n).pathname));
	}
};
function Cs(e) {
	return new Ss(e ?? /* @__PURE__ */ new Map());
}
var ws = class extends Ss {
	kind = "group";
	#e;
	constructor(e, t, n) {
		super(e, t), this.#e = n;
	}
	get attrs() {
		return this.#e.attributes;
	}
};
function Ts(e) {
	return e.find((e) => e.name === "transpose")?.configuration?.order ?? "C";
}
var Es = Symbol("zarrita.context");
function Ds(e) {
	return e[Es];
}
function Os(e, t) {
	let { configuration: n } = t.codecs.find(Go) ?? {}, r = {
		encode_chunk_key: Bo(t.chunk_key_encoding),
		TypedArray: zo(t.data_type),
		fill_value: t.fill_value
	};
	if (n) {
		let i = Ts(n.codecs);
		return {
			...r,
			kind: "sharded",
			chunk_shape: n.chunk_shape,
			codec: hs({
				data_type: t.data_type,
				shape: n.chunk_shape,
				codecs: n.codecs
			}),
			get_strides(e) {
				return Z(e, i);
			},
			get_chunk_bytes: xs(e, t.chunk_grid.configuration.chunk_shape, r.encode_chunk_key, n)
		};
	}
	let i = Ts(t.codecs);
	return {
		...r,
		kind: "regular",
		chunk_shape: t.chunk_grid.configuration.chunk_shape,
		codec: hs({
			data_type: t.data_type,
			shape: t.chunk_grid.configuration.chunk_shape,
			codecs: t.codecs
		}),
		get_strides(e) {
			return Z(e, i);
		},
		async get_chunk_bytes(t, n) {
			let i = r.encode_chunk_key(t), a = e.resolve(i).path;
			return e.store.get(a, n);
		}
	};
}
var ks = class extends Ss {
	kind = "array";
	#e;
	[Es];
	constructor(e, t, n) {
		super(e, t), this.#e = {
			...n,
			fill_value: Ko(n)
		}, this[Es] = Os(this, this.#e);
	}
	get attrs() {
		return this.#e.attributes;
	}
	get shape() {
		return this.#e.shape;
	}
	get chunks() {
		return this[Es].chunk_shape;
	}
	get dtype() {
		return this.#e.data_type;
	}
	async getChunk(e, t) {
		let n = this[Es], r = await n.get_chunk_bytes(e, t);
		if (!r) {
			let e = n.chunk_shape.reduce((e, t) => e * t, 1), t = new n.TypedArray(e);
			return t.fill(n.fill_value), {
				data: t,
				shape: n.chunk_shape,
				stride: n.get_strides(n.chunk_shape)
			};
		}
		return n.codec.decode(r);
	}
	is(e) {
		return Wo(this.dtype, e);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/util.js
function* As(e, t, n = 1) {
	t === void 0 && (t = e, e = 0);
	for (let r = e; r < t; r += n) yield r;
}
function* js(...e) {
	if (e.length === 0) return;
	let t = e.map((e) => e[Symbol.iterator]()), n = t.map((e) => e.next());
	if (n.some((e) => e.done)) throw Error("Input contains an empty iterator.");
	for (let r = 0;;) {
		if (n[r].done) {
			if (t[r] = e[r][Symbol.iterator](), n[r] = t[r].next(), ++r >= t.length) return;
		} else yield n.map(({ value: e }) => e), r = 0;
		n[r] = t[r].next();
	}
}
function Ms({ start: e, stop: t, step: n }, r) {
	if (n === 0) throw Error("slice step cannot be zero");
	n ??= 1;
	let i = n < 0, [a, o] = i ? [-1, r - 1] : [0, r];
	return e === null ? e = i ? o : a : e < 0 ? (e += r, e < a && (e = a)) : e > o && (e = o), t === null ? t = i ? a : o : t < 0 ? (t += r, t < a && (t = a)) : t > o && (t = o), [
		e,
		t,
		n
	];
}
function Ns(e, t, n = null) {
	return t === void 0 && (t = e, e = null), {
		start: e,
		stop: t,
		step: n
	};
}
function Ps() {
	let e = [];
	return {
		add: (t) => e.push(t()),
		onIdle: () => Promise.all(e)
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/indexer.js
var Fs = class extends Error {
	constructor(e) {
		super(e), this.name = "IndexError";
	}
};
function Is(e, t) {
	throw new Fs(`too many indicies for array; expected ${t.length}, got ${e.length}`);
}
function Ls(e) {
	throw new Fs(`index out of bounds for dimension with length ${e}`);
}
function Rs() {
	throw new Fs("only slices with step >= 1 are supported");
}
function zs(e, t) {
	e.length > t.length && Is(e, t);
}
function Bs(e, t) {
	return e = Math.trunc(e), e < 0 && (e = t + e), (e >= t || e < 0) && Ls(t), e;
}
var Vs = class {
	dim_sel;
	dim_len;
	dim_chunk_len;
	nitems;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		e = Bs(e, t), this.dim_sel = e, this.dim_len = t, this.dim_chunk_len = n, this.nitems = 1;
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.dim_sel / this.dim_chunk_len), t = e * this.dim_chunk_len;
		yield {
			dim_chunk_ix: e,
			dim_chunk_sel: this.dim_sel - t
		};
	}
}, Hs = class {
	start;
	stop;
	step;
	dim_len;
	dim_chunk_len;
	nitems;
	nchunks;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		let [r, i, a] = Ms(e, t);
		this.start = r, this.stop = i, this.step = a, this.step < 1 && Rs(), this.dim_len = t, this.dim_chunk_len = n, this.nitems = Math.max(0, Math.ceil((this.stop - this.start) / this.step)), this.nchunks = Math.ceil(this.dim_len / this.dim_chunk_len);
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.start / this.dim_chunk_len), t = Math.ceil(this.stop / this.dim_chunk_len);
		for (let n of As(e, t)) {
			let e = n * this.dim_chunk_len, t = Math.min(this.dim_len, (n + 1) * this.dim_chunk_len), r = t - e, i = 0, a = 0;
			if (this.start < e) {
				let t = (e - this.start) % this.step;
				t && (a += this.step - t), i = Math.ceil((e - this.start) / this.step);
			} else a = this.start - e;
			let o = this.stop > t ? r : this.stop - e, s = [
				a,
				o,
				this.step
			], c = Math.ceil((o - a) / this.step);
			yield {
				dim_chunk_ix: n,
				dim_chunk_sel: s,
				dim_out_sel: [
					i,
					i + c,
					1
				]
			};
		}
	}
};
function Us(e, t) {
	let n = [];
	return e === null ? n = t.map((e) => Ns(null)) : Array.isArray(e) && (n = e.map((e) => e ?? Ns(null))), zs(n, t), n;
}
var Ws = class {
	dim_indexers;
	shape;
	constructor({ selection: e, shape: t, chunk_shape: n }) {
		this.dim_indexers = Us(e, t).map((e, r) => new (typeof e == "number" ? Vs : Hs)({
			dim_sel: e,
			dim_len: t[r],
			dim_chunk_len: n[r]
		})), this.shape = this.dim_indexers.filter((e) => e instanceof Hs).map((e) => e.nitems);
	}
	*[Symbol.iterator]() {
		for (let e of js(...this.dim_indexers)) yield {
			chunk_coords: e.map((e) => e.dim_chunk_ix),
			mapping: e.map((e) => "dim_out_sel" in e ? {
				from: e.dim_chunk_sel,
				to: e.dim_out_sel
			} : {
				from: e.dim_chunk_sel,
				to: null
			})
		};
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/get.js
function Gs(e, t) {
	return "get" in e ? e.get(t) : e[t];
}
async function Ks(e, t, n, r) {
	let i = Ds(e), a = new Ws({
		selection: t,
		shape: e.shape,
		chunk_shape: e.chunks
	}), o = r.prepare(new i.TypedArray(a.shape.reduce((e, t) => e * t, 1)), a.shape, i.get_strides(a.shape)), s = n.create_queue?.() ?? Ps();
	for (let { chunk_coords: t, mapping: i } of a) s.add(async () => {
		let { data: a, shape: s, stride: c } = await e.getChunk(t, n.opts), l = r.prepare(a, s, c);
		r.set_from_chunk(o, l, i);
	});
	return await s.onIdle(), a.shape.length === 0 ? Gs(o.data, 0) : o;
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/ops.js
function qs(e, t = 0, n) {
	let r = n ?? e.length - t;
	return {
		length: r,
		subarray(n, i = r) {
			return qs(e, t + n, i - n);
		},
		set(n, r = 0) {
			for (let i = 0; i < n.length; i++) e[t + r + i] = n.get(i);
		},
		get(n) {
			return e[t + n];
		}
	};
}
function Js(e) {
	return globalThis.Array.isArray(e.data) ? {
		data: qs(e.data),
		stride: e.stride,
		bytes_per_element: 1
	} : {
		data: new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength),
		stride: e.stride,
		bytes_per_element: e.data.BYTES_PER_ELEMENT
	};
}
function Ys(e) {
	return "chars" in e ? e.constructor.bind(null, e.chars) : e.constructor;
}
function Xs(e, t) {
	if (globalThis.Array.isArray(e.data)) return qs([t]);
	let n = new (Ys(e.data))([t]);
	return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
var Zs = {
	prepare(e, t, n) {
		return {
			data: e,
			shape: t,
			stride: n
		};
	},
	set_scalar(e, t, n) {
		let r = Js(e);
		ec(r, t, Xs(e, n), r.bytes_per_element);
	},
	set_from_chunk(e, t, n) {
		let r = Js(e);
		tc(r, Js(t), r.bytes_per_element, n);
	}
};
async function Qs(e, t = null, n = {}) {
	return Ks(e, t, n, Zs);
}
function $s(e, t, n) {
	return n < 0 && t < e ? Math.floor((e - t - 1) / -n) + 1 : e < t ? Math.floor((t - e - 1) / n) + 1 : 0;
}
function ec(e, t, n, r) {
	if (t.length === 0) {
		e.data.set(n, 0);
		return;
	}
	let [i, ...a] = t, [o, ...s] = e.stride;
	if (typeof i == "number") {
		ec({
			data: e.data.subarray(o * i * r),
			stride: s
		}, a, n, r);
		return;
	}
	let [c, l, u] = i, d = $s(c, l, u);
	if (a.length === 0) {
		for (let t = 0; t < d; t++) e.data.set(n, o * (c + u * t) * r);
		return;
	}
	for (let t = 0; t < d; t++) ec({
		data: e.data.subarray(o * (c + u * t) * r),
		stride: s
	}, a, n, r);
}
function tc(e, t, n, r) {
	let [i, ...a] = r, [o, ...s] = e.stride, [c, ...l] = t.stride;
	if (i.from === null) {
		if (a.length === 0) {
			e.data.set(t.data.subarray(0, n), i.to * n);
			return;
		}
		tc({
			data: e.data.subarray(o * i.to * n),
			stride: s
		}, t, n, a);
		return;
	}
	if (i.to === null) {
		if (a.length === 0) {
			let r = i.from * n;
			e.data.set(t.data.subarray(r, r + n), 0);
			return;
		}
		tc(e, {
			data: t.data.subarray(c * i.from * n),
			stride: l
		}, n, a);
		return;
	}
	let [u, d, f] = i.to, [p, m, h] = i.from, g = $s(u, d, f);
	if (a.length === 0) {
		if (f === 1 && h === 1 && o === 1 && c === 1) {
			let r = p * n, i = g * n;
			e.data.set(t.data.subarray(r, r + i), u * n);
			return;
		}
		for (let r = 0; r < g; r++) {
			let i = c * (p + h * r) * n;
			e.data.set(t.data.subarray(i, i + n), o * (u + f * r) * n);
		}
		return;
	}
	for (let r = 0; r < g; r++) tc({
		data: e.data.subarray(o * (u + r * f) * n),
		stride: s
	}, {
		data: t.data.subarray(c * (p + r * h) * n),
		stride: l
	}, n, a);
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/open.js
var nc = rc();
function rc() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		let n = e.get(t) ?? {
			v2: 0,
			v3: 0
		};
		return e.set(t, n), n;
	}
	return {
		increment(e, n) {
			t(e)[n] += 1;
		},
		version_max(e) {
			let n = t(e);
			return n.v3 > n.v2 ? "v3" : "v2";
		}
	};
}
async function ic(e) {
	let t = await e.store.get(e.resolve(".zattrs").path);
	return t ? X(t) : {};
}
async function ac(e, t = {}) {
	let n = "store" in e ? e : new Ss(e), r = {};
	return (t.attrs ?? !0) && (r = await ic(n)), t.kind === "array" ? oc(n, r) : t.kind === "group" ? sc(n, r) : oc(n, r).catch((e) => (qo(e, vs), sc(n, r)));
}
async function oc(e, t) {
	let { path: n } = e.resolve(".zarray"), r = await e.store.get(n);
	if (!r) throw new vs("v2 array", { cause: new ys(n) });
	return nc.increment(e.store, "v2"), new ks(e.store, e.path, Ho(X(r), t));
}
async function sc(e, t) {
	let { path: n } = e.resolve(".zgroup"), r = await e.store.get(n);
	if (!r) throw new vs("v2 group", { cause: new ys(n) });
	return nc.increment(e.store, "v2"), new ws(e.store, e.path, Uo(X(r), t));
}
async function cc(e) {
	let { store: t, path: n } = e.resolve("zarr.json"), r = await e.store.get(n);
	if (!r) throw new vs("v3 array or group", { cause: new ys(n) });
	let i = X(r);
	return i.node_type === "array" && (i.fill_value = Ko(i)), i.node_type === "array" ? new ks(t, e.path, i) : new ws(t, e.path, i);
}
async function lc(e, t = {}) {
	let n = "store" in e ? e : new Ss(e), r = await cc(n);
	if (nc.increment(n.store, "v3"), t.kind === void 0 || t.kind === "array" && r instanceof ks || t.kind === "group" && r instanceof ws) return r;
	let i = r instanceof ks ? "array" : "group";
	throw Error(`Expected node of kind ${t.kind}, found ${i}.`);
}
async function $(e, t = {}) {
	let n = "store" in e ? e.store : e, r = nc.version_max(n), i = r === "v2" ? $.v2 : $.v3, a = r === "v2" ? $.v3 : $.v2;
	return i(e, t).catch((n) => (qo(n, vs), a(e, t)));
}
$.v2 = ac, $.v3 = lc;
//#endregion
//#region ../app/src/sampleView/metadata/adapters/zarrMetadataSourceAdapter.js
function uc(e) {
	return e.startsWith("/") ? e.slice(1) : e;
}
function dc(e) {
	if (e.shape.length !== 1) throw Error("Expected a one-dimensional Zarr selection result.");
	let t = e.shape[0], n = e.stride[0], r = [];
	for (let i = 0; i < t; i++) {
		let t = i * n;
		typeof e.data?.get == "function" ? r.push(e.data.get(t)) : r.push(e.data[t]);
	}
	return r;
}
function fc(e, t, n, r = {}) {
	let i = String(t ?? "").trim();
	if (i.length === 0) return;
	let a = /* @__PURE__ */ new Set([i, i.toLowerCase()]);
	if (r.stripVersionSuffix) {
		let e = i.replace(/\.\d+$/, "");
		a.add(e), a.add(e.toLowerCase());
	}
	for (let t of a) {
		let r = e.get(t);
		r || (r = /* @__PURE__ */ new Set(), e.set(t, r)), r.add(n);
	}
}
var pc = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e, t = {}) {
		this.#e = e, this.#t = e.backend, this.#n = new Po(ce(t.baseUrl, this.#t.url)), this.#s = new Set(e.excludeColumns ?? []);
	}
	async listColumns(e) {
		return (await this.#l(e)).filter((e) => !this.#g(e)).map((e) => ({ id: e }));
	}
	async listSampleIds(e) {
		return this.#u(e);
	}
	async listIdentifierExamples(e, t) {
		let n = this.#t.identifiers ?? [{
			name: "column",
			path: this.#t.matrix?.columnIdsPath ?? "var_names",
			primary: !0
		}];
		return Promise.all(n.map(async (n) => {
			let r = Eo(await this.#h(n.path, t), e);
			return mc({
				name: n.name,
				primary: n.primary,
				caseInsensitive: n.caseInsensitive,
				stripVersionSuffix: n.stripVersionSuffix,
				examples: r
			});
		}));
	}
	async resolveColumns(e, t) {
		let n = await this.#f(t), r = await this.#l(t), i = [], a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
		for (let t of e) {
			let e = String(t).trim(), s = n.get(e) ?? n.get(e.toLowerCase());
			if (!s || s.size === 0) {
				a.add(t);
				continue;
			}
			if (s.size > 1) {
				o.add(t);
				continue;
			}
			let c = r[Array.from(s)[0]];
			i.includes(c) || i.push(c);
		}
		return {
			columnIds: i,
			missing: Array.from(a),
			ambiguous: Array.from(o)
		};
	}
	async fetchColumns(e, t) {
		let n = await this.#c(), r = await this.#u(t), i = await this.#d(t), a = new Map(r.map((e, t) => [e, t])), o = e.sampleIds.filter((e) => a.has(e));
		if (o.length === 0) throw Error("Metadata source rows do not match any sample ids in the current view.");
		for (let t of e.columnIds) if (this.#g(t)) throw Error("Column \"" + t + "\" is excluded by metadata source configuration.");
		let s = o.map((e) => ({ sample: e }));
		for (let r of e.columnIds) {
			let e = i.get(r);
			if (e === void 0) throw Error("Column \"" + r + "\" was not found in Zarr metadata source.");
			let c = dc(await Qs(n, [Ns(null), e], t ? { opts: { signal: t } } : void 0));
			for (let e = 0; e < o.length; e++) {
				let t = a.get(o[e]);
				s[e][r] = c[t];
			}
		}
		let c = yo(e.sampleIds, s);
		if ("error" in c) {
			let e = c.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		let l = To(this.#e, e.columnIds), u = e.groupPath ?? this.#e.groupPath, d = Si(s, l, this.#e.attributeGroupSeparator, u);
		return e.replace !== void 0 && (d.replace = e.replace), d;
	}
	async #c() {
		let e = uc(this.#t.matrix?.valuesPath ?? "X");
		return $(Cs(this.#n).resolve(e), { kind: "array" });
	}
	async #l(e) {
		return this.#r ||= this.#h(this.#t.matrix?.columnIdsPath ?? "var_names", e), this.#r;
	}
	async #u(e) {
		return this.#i ||= this.#h(this.#t.matrix?.rowIdsPath ?? "obs_names", e), this.#i;
	}
	async #d(e) {
		return this.#a ||= this.#l(e).then((e) => new Map(e.map((e, t) => [e, t]))), this.#a;
	}
	async #f(e) {
		return this.#o ||= this.#p(e), this.#o;
	}
	async #p(e) {
		let t = await this.#l(e), n = /* @__PURE__ */ new Map();
		for (let e = 0; e < t.length; e++) this.#g(t[e]) || fc(n, t[e], e);
		for (let r of this.#t.identifiers ?? []) {
			let i = await this.#m(r.path, e);
			if (i.length !== t.length) throw Error("Identifier array \"" + r.path + "\" does not match the number of matrix columns.");
			for (let e = 0; e < i.length; e++) this.#g(t[e]) || fc(n, i[e], e, { stripVersionSuffix: r.stripVersionSuffix });
		}
		return n;
	}
	async #m(e, t) {
		return dc(await Qs(await $(Cs(this.#n).resolve(uc(e)), { kind: "array" }), [Ns(null)], t ? { opts: { signal: t } } : void 0));
	}
	async #h(e, t) {
		return (await this.#m(e, t)).map((e) => String(e));
	}
	#g(e) {
		return this.#s.has(e);
	}
};
function mc(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAdapters.js
async function hc(e, t) {
	try {
		return await o(e, { signal: t });
	} catch (t) {
		if (t instanceof i && t.kind === "json") throw Error("Invalid JSON in metadata source import " + e + ": " + t.message, { cause: t });
		let n = t instanceof Error ? t.message : String(t);
		throw Error("Could not load metadata source import from " + e + ": " + n, { cause: t });
	}
}
function gc(e) {
	if ("columnDefs" in e) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"columnDefs\". Use \"attributes\" instead.");
	}
	if (e.backend.backend === "zarr" && "synonymIndex" in e.backend) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"backend.synonymIndex\". Use \"backend.identifiers\" instead.");
	}
}
function _c(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Metadata source import " + t + " must resolve to a single source object.");
	if ("import" in e) throw Error("Nested metadata source imports are not supported: " + t);
	if ("backend" in e) return e;
	throw Error("Metadata source import \"" + t + "\" is missing required property \"backend\".");
}
function vc(e, t) {
	if (e.backend.backend === "data") {
		let n = e.backend.data;
		return n && typeof n == "object" && !Array.isArray(n) && "url" in n && typeof n.url == "string" ? {
			...e,
			backend: {
				...e.backend,
				data: {
					...n,
					url: se(t, n.url)
				}
			}
		} : e;
	}
	return "url" in e.backend && typeof e.backend.url == "string" ? {
		...e,
		backend: {
			...e.backend,
			url: se(t, e.backend.url)
		}
	} : e;
}
async function yc(e, t = {}) {
	let n = e?.sources ?? [], r = t.loadJson ?? hc;
	return Promise.all(n.map(async (e) => {
		if (!("import" in e)) return gc(e), e;
		let n = se(t.baseUrl, e.import.url), i = vc(_c(await r(n, t.signal), n), n);
		return gc(i), i;
	}));
}
function bc(e, t) {
	if (e.length === 0) throw Error("No metadata sources are configured.");
	if (t !== void 0) {
		let n = e.find((e) => e.id === t);
		if (!n) throw Error("Metadata source \"" + t + "\" was not found.");
		return n;
	}
	if (e.length !== 1) throw Error("Metadata source id is required when multiple sources are configured.");
	return e[0];
}
function xc(e, t = {}) {
	if (e.backend.backend === "data") return new Oo(e, t);
	if (e.backend.backend === "zarr") return new pc(e, t);
	throw Error("Metadata backend \"" + e.backend.backend + "\" is not implemented yet.");
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceInitialLoad.js
function Sc(e) {
	return e.initialLoad === void 0 ? e.backend.backend === "data" && "*" : e.initialLoad;
}
async function Cc(e, t, n) {
	let r = Sc(e);
	return r === !1 ? [] : r === "*" ? (await t.listColumns(n)).map((e) => e.id) : (await t.resolveColumns(r, n)).columnIds;
}
function wc(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 100) t.push(e.slice(n, n + 100));
	return t;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceSummaries.js
var Tc = 3;
async function Ec(e, t = {}) {
	let n = e.filter((e) => Sc(e) === !1);
	return Promise.all(n.map((e) => Dc(e, t)));
}
async function Dc(e, t) {
	if (!t.getAdapter) throw Error("Metadata source summary adapter is required.");
	let n = await t.getAdapter(e).listIdentifierExamples(t.maxExamples ?? Tc, t.signal);
	return kc({
		sourceId: e.id,
		name: e.name,
		description: e.description,
		attributeDefaults: Oc(e),
		identifiers: n
	});
}
function Oc(e) {
	let t = e.attributes?.[""];
	if (t) return kc({
		dataType: t.type,
		description: t.description
	});
}
function kc(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntimeState.js
var Ac = /* @__PURE__ */ new WeakMap(), jc = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ new Map();
	#i;
	constructor(e, t = {}) {
		this.#e = e, this.#t = t;
	}
	getSources() {
		if (!this.#n) {
			let e = { ...this.#t };
			delete e.signal, this.#n = yc(this.#e.spec.metadata, {
				...e,
				baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl()
			}).catch((e) => {
				throw this.#n = void 0, e;
			});
		}
		return this.#n;
	}
	async getSource(e) {
		return bc(await this.getSources(), e);
	}
	getAdapter(e) {
		let t = this.#r.get(e);
		return t || (t = xc(e, { baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl() }), this.#r.set(e, t)), t;
	}
	getAgentSummaries(e) {
		return this.#i ||= this.getSources().then((t) => Ec(t, {
			getAdapter: (e) => this.getAdapter(e),
			signal: e
		})).catch((e) => {
			throw this.#i = void 0, e;
		}), this.#i;
	}
};
function Mc(e, t) {
	return new jc(e, t);
}
function Nc(e) {
	let t = Ac.get(e);
	return t || (t = Mc(e), Ac.set(e, t)), t;
}
//#endregion
//#region ../app/src/sampleView/unknownAttributeInfoError.js
var Pc = class extends Error {
	constructor(e) {
		super(e), this.name = "UnknownAttributeInfoError";
	}
};
//#endregion
//#region ../app/src/charts/chartDialogUtils.js
async function Fc(e, t, n, r = ".chart-container") {
	if (!t) throw Error("Chart is not ready for export.");
	let i = e.querySelector(r);
	if (!i) throw Error("Cannot find chart container.");
	let { blob: a } = await t.imageExport.raster({
		logicalWidth: i.clientWidth,
		logicalHeight: i.clientHeight,
		pixelRatio: 3,
		background: "white"
	}), o = URL.createObjectURL(a), s = document.createElement("a");
	s.href = o, s.download = n, document.body.appendChild(s);
	try {
		s.click();
	} finally {
		s.remove(), URL.revokeObjectURL(o);
	}
}
async function Ic(e, t) {
	let n = t.namedData.length > 0 ? {
		...t.spec,
		datasets: {
			...t.spec.datasets,
			...Object.fromEntries(t.namedData.map((e) => [e.name, e.rows]))
		}
	} : t.spec;
	return h(e, n);
}
//#endregion
//#region ../app/src/agentApi/index.js
var Lc = /* @__PURE__ */ n({ createAgentApi: () => Rc });
function Rc(e) {
	return {
		getSampleHierarchy() {
			return e.getSampleView()?.sampleHierarchy;
		},
		getMetadataSourceSummaries(t) {
			let n = e.getSampleView();
			return n ? Nc(n).getAgentSummaries(t) : Promise.resolve([]);
		},
		getAttributeInfo(t) {
			let n = e.getSampleView();
			if (n) try {
				return n.compositeAttributeInfoSource.getAttributeInfo(t);
			} catch (e) {
				if (e instanceof Pc) return;
				throw e;
			}
		},
		materializeAttributeIdentifier(t) {
			let n = e.getSampleView();
			if (!n || !Bc(t)) return t;
			let r = t.specifier;
			return {
				...t,
				specifier: {
					...r,
					interval: Zn(n, r.interval)
				}
			};
		},
		getSampleViewScopedParamConfig(t) {
			let n = e.getSampleView();
			if (n?.paramRuntime?.paramConfigs) return n.paramRuntime.paramConfigs.get(t);
		},
		getSearchableViews() {
			return e.genomeSpy.getSearchableViews();
		},
		getViewRoot() {
			return e.genomeSpy.viewRoot;
		},
		getFocusedView() {
			return e.getSampleView();
		},
		getRootSpec() {
			return e.rootSpec;
		},
		getNamedScaleResolutions() {
			return e.genomeSpy.getNamedScaleResolutions();
		},
		resolveViewSelector(t) {
			let n = e.genomeSpy.viewRoot;
			if (n) return pe(n, t);
		},
		getSelectionFeatureFieldValues(t, n, r) {
			let i = e.genomeSpy.viewRoot;
			if (!i) return;
			let a = pe(i, t);
			if (a) return nr(a, n, r);
		},
		getActionHistory() {
			return e.provenance.getActionHistory();
		},
		getActionInfo(t) {
			return e.provenance.getActionInfo(t);
		},
		submitIntentActions(t, n) {
			return e.intentPipeline.submit(t, n);
		},
		getPresentProvenanceState() {
			return e.provenance.getPresentState();
		},
		async buildSampleAttributePlot(t) {
			let n = e.getSampleView();
			if (!n) throw Error("No sample view is available.");
			let r = n.compositeAttributeInfoSource, i = t.plotType;
			if (i === "bar" || i === "barplot") {
				let e = await zc(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "nominal" && e.type !== "ordinal") throw Error("Bar plots require a categorical sample attribute.");
				return ao({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			}
			if (i === "boxplot") {
				let e = await zc(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "quantitative") throw Error("Box plots require a quantitative sample attribute.");
				return oo({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			}
			if (i === "scatterplot") {
				let e = await zc(r, t.xAttribute, t.xAttributeLabel), i = await zc(r, t.yAttribute, t.yAttributeLabel);
				if (!e || !i) throw Error("Could not resolve one of the requested sample attributes.");
				if (e.type !== "quantitative" || i.type !== "quantitative") throw Error("Scatter plots require two quantitative sample attributes.");
				let a = vo(n);
				return so({
					xAttributeInfo: e,
					yAttributeInfo: i,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r,
					colorScaleDomain: a?.domain,
					colorScaleRange: a?.range
				});
			}
			throw Error("Unsupported sample attribute plot type: " + i);
		},
		setViewVisibility(t, n) {
			e.store.dispatch(Mn.actions.setVisibility({
				key: P(t),
				visibility: n
			}));
		},
		jumpToProvenanceState(t) {
			let n = e.provenance.getCurrentIndex();
			return e.provenance.activateState(t), e.provenance.getCurrentIndex() !== n;
		},
		jumpToInitialProvenanceState() {
			let t = e.provenance.getCurrentIndex();
			return e.provenance.activateInitialState(), e.provenance.getCurrentIndex() !== t;
		}
	};
}
async function zc(e, t, n) {
	let r;
	try {
		r = e.getAttributeInfo(t);
	} catch (e) {
		if (e instanceof Pc) return;
		throw e;
	}
	if (r) return r.ensureAvailability && await r.ensureAvailability({}), n ? {
		...r,
		title: n,
		emphasizedName: n
	} : r;
}
function Bc(e) {
	let t = e.specifier;
	return e.type === "VALUE_AT_LOCUS" && typeof t == "object" && !!t && "interval" in t && Xn(t.interval);
}
//#endregion
export { er as $, Gi as A, ji as B, Sa as C, ta as D, oa as E, zi as F, B as G, gi as H, hi as I, Sr as J, ci as K, wi as L, Bi as M, Ui as N, sa as O, U as P, rr as Q, mi as R, ka as S, la as T, _i as U, Mi as V, H as W, Dr as X, Er as Y, lr as Z, ga as _, _n as _t, Nc as a, Hn as at, Da as b, Cc as c, Rn as ct, vo as d, Gn as dt, Qn as et, ao as f, Nn as ft, q as g, ln as gt, Ma as h, Mn as ht, Pc as i, Yn as it, Vi as j, na as k, xc as l, zn as lt, so as m, Fn as mt, Fc as n, Xn as nt, wc as o, Wn as ot, oo as p, In as pt, Hr as q, Ic as r, Jn as rt, Sc as s, Un as st, Lc as t, Zn as tt, yo as u, Bn as ut, Aa as v, be as vt, ia as w, Oa as x, Ea as y, vi as z };
