import { $n as e, Bn as t, F as n, M as r, Rn as i, er as a, lr as o, rr as s, xn as c } from "./clipOptions-Dqn337WO.js";
import { H as l, R as u, st as d, t as f, z as p } from "./src-BLIo1n5a.js";
import { f as m } from "./scaleNull-CVYLNO2O.js";
import { $ as h, X as g, s as _ } from "./flowNode-BSjy0Wz3.js";
import { r as v, t as ee } from "./url-DeOdSRrv.js";
import { a as te, f as ne, h as re, n as ie, p as ae } from "./viewSelectors-B4CZ1cPy.js";
import { _ as oe, a as se, i as ce, l as le, n as ue, o as de, r as fe, t as pe, u as me, v as he } from "./tableMetadataSourceAdapter-CLdM_pCo.js";
//#region ../../node_modules/redux/dist/redux.mjs
function y(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ge = typeof Symbol == "function" && Symbol.observable || "@@observable", _e = () => Math.random().toString(36).substring(7).split("").join("."), ve = {
	INIT: `@@redux/INIT${/* @__PURE__ */ _e()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ _e()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_e()}`
};
function ye(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function be(e, t, n) {
	if (typeof e != "function") throw Error(y(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(y(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(y(1));
		return n(be)(e, t);
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
		if (!ye(e)) throw Error(y(7));
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
		r = e, f({ type: ve.REPLACE });
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
			[ge]() {
				return this;
			}
		};
	}
	return f({ type: ve.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[ge]: m
	};
}
function xe(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: ve.INIT }) === void 0) throw Error(y(12));
		if (n(void 0, { type: ve.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(y(13));
	});
}
function Se(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		xe(n);
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
function Ce(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function we(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(y(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = Ce(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function Te(e) {
	return ye(e) && "type" in e && typeof e.type == "string";
}
//#endregion
//#region ../../node_modules/immer/dist/immer.mjs
var Ee = Symbol.for("immer-nothing"), De = Symbol.for("immer-draftable"), b = Symbol.for("immer-state");
function x(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var S = Object, C = S.getPrototypeOf, Oe = "constructor", ke = "prototype", Ae = "configurable", je = "enumerable", Me = "writable", w = "value", T = (e) => !!e && !!e[b];
function E(e) {
	return e ? Fe(e) || He(e) || !!e[De] || !!e[Oe]?.[De] || Ue(e) || We(e) : !1;
}
var Ne = S[ke][Oe].toString(), Pe = /* @__PURE__ */ new WeakMap();
function Fe(e) {
	if (!e || !Ge(e)) return !1;
	let t = C(e);
	if (t === null || t === S[ke]) return !0;
	let n = S.hasOwnProperty.call(t, Oe) && t[Oe];
	if (n === Object) return !0;
	if (!O(n)) return !1;
	let r = Pe.get(n);
	return r === void 0 && (r = Function.toString.call(n), Pe.set(n, r)), r === Ne;
}
function Ie(e) {
	return T(e) || x(15, e), e[b].base_;
}
function Le(e, t, n = !0) {
	D(e) === 0 ? (n ? Reflect.ownKeys(e) : S.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function D(e) {
	let t = e[b];
	return t ? t.type_ : He(e) ? 1 : Ue(e) ? 2 : We(e) ? 3 : 0;
}
var Re = (e, t, n = D(e)) => n === 2 ? e.has(t) : S[ke].hasOwnProperty.call(e, t), ze = (e, t, n = D(e)) => n === 2 ? e.get(t) : e[t], Be = (e, t, n, r = D(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Ve(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var He = Array.isArray, Ue = (e) => e instanceof Map, We = (e) => e instanceof Set, Ge = (e) => typeof e == "object", O = (e) => typeof e == "function", Ke = (e) => typeof e == "boolean";
function qe(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var k = (e) => e.copy_ || e.base_, Je = (e) => e.modified_ ? e.copy_ : e.base_;
function Ye(e, t) {
	if (Ue(e)) return new Map(e);
	if (We(e)) return new Set(e);
	if (He(e)) return Array[ke].slice.call(e);
	let n = Fe(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = S.getOwnPropertyDescriptors(e);
		delete t[b];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[Me] === !1 && (a[Me] = !0, a[Ae] = !0), (a.get || a.set) && (t[i] = {
				[Ae]: !0,
				[Me]: !0,
				[je]: a[je],
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
function Xe(e, t = !1) {
	return $e(e) || T(e) || !E(e) || (D(e) > 1 && S.defineProperties(e, {
		set: Qe,
		add: Qe,
		clear: Qe,
		delete: Qe
	}), S.freeze(e), t && Le(e, (e, t) => {
		Xe(t, !0);
	}, !1)), e;
}
function Ze() {
	x(2);
}
var Qe = { [w]: Ze };
function $e(e) {
	return e === null || !Ge(e) || S.isFrozen(e);
}
var et = "MapSet", tt = "Patches", nt = "ArrayMethods", rt = {};
function A(e) {
	let t = rt[e];
	return t || x(0, e), t;
}
var it = (e) => !!rt[e], j, at = () => j, ot = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: it(et) ? A(et) : void 0,
	arrayMethodsPlugin_: it(nt) ? A(nt) : void 0
});
function st(e, t) {
	t && (e.patchPlugin_ = A(tt), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ct(e) {
	lt(e), e.drafts_.forEach(dt), e.drafts_ = null;
}
function lt(e) {
	e === j && (j = e.parent_);
}
var ut = (e) => j = ot(j, e);
function dt(e) {
	let t = e[b];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ft(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[b].modified_ && (ct(t), x(4)), E(e) && (e = pt(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[b].base_, e, t);
	} else e = pt(t, n);
	return mt(t, e, !0), ct(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === Ee ? void 0 : e;
}
function pt(e, t) {
	if ($e(t)) return t;
	let n = t[b];
	if (!n) return St(t, e.handledSet_, e);
	if (!gt(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		bt(n, e);
	}
	return n.copy_;
}
function mt(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Xe(t, n);
}
function ht(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var gt = (e, t) => e.scope_ === t, _t = [];
function vt(e, t, n, r) {
	let i = k(e), a = e.type_;
	if (r !== void 0 && ze(i, r, a) === t) {
		Be(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Le(i, (e, n) => {
			if (T(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? _t;
	for (let e of o) Be(i, e, n, a);
}
function yt(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !gt(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = Je(i);
		vt(e, i.draft_ ?? i, a, n), bt(i, r);
	});
}
function bt(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		ht(e);
	}
}
function xt(e, t, n) {
	let { scope_: r } = e;
	if (T(n)) {
		let i = n[b];
		gt(i, r) && i.callbacks_.push(function() {
			At(e), vt(e, n, Je(i), t);
		});
	} else E(n) && e.callbacks_.push(function() {
		let i = k(e);
		e.type_ === 3 ? i.has(n) && St(n, r.handledSet_, r) : ze(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && St(ze(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function St(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || T(e) || t.has(e) || !E(e) || $e(e) || (t.add(e), Le(e, (r, i) => {
		if (T(i)) {
			let t = i[b];
			gt(t, n) && (Be(e, r, Je(t), e.type_), ht(t));
		} else E(i) && St(i, t, n);
	})), e;
}
function Ct(e, t) {
	let n = He(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : at(),
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
	}, i = r, a = wt;
	n && (i = [r], a = M);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var wt = {
	get(e, t) {
		if (t === b) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = k(e);
		if (!Re(i, t, e.type_)) return Dt(e, i, t);
		let a = i[t];
		if (e.finalized_ || !E(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && qe(t)) return a;
		if (a === Tt(e.base_, t) || Et(e, t, a)) {
			At(e);
			let n = e.type_ === 1 ? +t : t, r = Mt(e.scope_, a, e, n);
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
		let r = Ot(k(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = Tt(k(e), t), i = r?.[b];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (Ve(n, r) && (n !== void 0 || Re(e.base_, t, e.type_))) return !0;
			At(e), kt(e);
		}
		return e.copy_[t] === n && (n !== void 0 || Re(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_.set(t, !0), xt(e, t, n)), !0;
	},
	deleteProperty(e, t) {
		return At(e), Tt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), kt(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = k(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[Me]: !0,
			[Ae]: e.type_ !== 1 || t !== "length",
			[je]: r[je],
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
}, M = {};
for (let e in wt) {
	let t = wt[e];
	M[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
M.deleteProperty = function(e, t) {
	return M.set.call(this, e, t, void 0);
}, M.set = function(e, t, n) {
	return wt.set.call(this, e[0], t, n, e[0]);
};
function Tt(e, t) {
	let n = e[b];
	return (n ? k(n) : e)[t];
}
function Et(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || e.assigned_?.get(t) || !E(n) || n[b] ? !1 : e.baseRefs_.has(n);
}
function Dt(e, t, n) {
	let r = Ot(t, n);
	return r ? w in r ? r[w] : r.get?.call(e.draft_) : void 0;
}
function Ot(e, t) {
	if (!(t in e)) return;
	let n = C(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = C(n);
	}
}
function kt(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && kt(e.parent_));
}
function At(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), Ye(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var jt = class {
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
				let i = ut(this), a = Mt(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? ct(i) : lt(i);
				}
				return st(i, n), ft(r, i);
			}
			if (!e || !Ge(e)) {
				if (r = t(e), r === void 0 && (r = e), r === Ee && (r = void 0), this.autoFreeze_ && Xe(r, !0), n) {
					let t = [], i = [];
					A(tt).generateReplacementPatches_(e, r, {
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
		}, Ke(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Ke(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Ke(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		E(e) || x(8), T(e) && (e = Nt(e));
		let t = ut(this), n = Mt(t, e, void 0);
		return n[b].isManual_ = !0, lt(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[b];
		(!n || !n.isManual_) && x(9);
		let { scope_: r } = n;
		return st(r, t), ft(void 0, r);
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
		let r = A(tt).applyPatches_;
		return T(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function Mt(e, t, n, r) {
	let [i, a] = Ue(t) ? A(et).proxyMap_(t, n) : We(t) ? A(et).proxySet_(t, n) : Ct(t, n);
	return (n?.scope_ ?? at()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? yt(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Nt(e) {
	return T(e) || x(10, e), Pt(e);
}
function Pt(e) {
	if (!E(e) || $e(e)) return e;
	let t = e[b], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = Ye(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = Ye(e, !0);
	return Le(n, (e, t) => {
		Be(n, e, Pt(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from;
var Ft = new jt().produce, It = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, Lt = typeof WeakRef > "u" ? It : WeakRef, Rt = 0, zt = 1;
function N() {
	return {
		s: Rt,
		v: void 0,
		o: null,
		p: null
	};
}
function Bt(e) {
	return e instanceof Lt ? e.deref() : e;
}
function Vt(e, t = {}) {
	let n = N(), { resultEqualityCheck: r, maxSize: i } = t, a = i !== void 0;
	if (a && (!Number.isInteger(i) || i < 1)) throw TypeError(`maxSize must be a positive integer, received: ${i}`);
	let o = null, s = 0, c, l = 0;
	function u() {
		s >= i && (o = n, n = N(), s = 0);
	}
	function d() {
		let t = n, { length: i } = arguments;
		for (let e = 0, n = i; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = N(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = N(), e.set(n, t), s++) : t = r;
			}
		}
		if (t.s === zt) return t.v;
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
			if (e !== null && e.s === zt) {
				let n = t;
				return n.s = zt, n.v = e.v, u(), e.v;
			}
		}
		let d = t, f = e.apply(null, arguments);
		if (l++, r) {
			let e = Bt(c);
			e != null && r(e, f) && (f = e, l !== 0 && l--), c = typeof f == "object" && f || typeof f == "function" ? /* @__PURE__ */ new Lt(f) : f;
		}
		return d.s = zt, d.v = f, a && u(), f;
	}
	return d.clearCache = () => {
		n = N(), o = null, s = 0, d.resetResultsCount();
	}, d.resultsCount = () => l, d.resetResultsCount = () => {
		l = 0;
	}, d;
}
function Ht(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Ut(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Wt = (e) => Array.isArray(e) ? e : [e];
function Gt(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return Ut(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Kt(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Ht(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = Vt, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = Wt(c), f = Wt(u), p = Gt(e), m = s(function() {
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
var qt = /* @__PURE__ */ Kt(Vt);
//#endregion
//#region ../../node_modules/redux-thunk/dist/redux-thunk.mjs
function Jt(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var Yt = Jt(), Xt = Jt, Zt = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ce : Ce.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function Qt(e, t) {
	function n(...n) {
		if (t) {
			let r = t(...n);
			if (!r) throw Error(P(0));
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
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => Te(t) && t.type === e, n;
}
var $t = class e extends Array {
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
function en(e) {
	return E(e) ? Ft(e, () => {}) : e;
}
function tn(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function nn(e) {
	return typeof e == "boolean";
}
var rn = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new $t();
	return t && (nn(t) ? a.push(Yt) : a.push(Xt(t.extraArgument))), a;
}, an = "RTK_autoBatch", on = (e) => (t) => {
	setTimeout(t, e);
}, sn = (e, t) => (n) => {
	let r = !1, i, a, o = () => {
		r || (r = !0, cancelAnimationFrame(i), clearTimeout(a), n());
	};
	i = e(o), a = setTimeout(o, t);
}, cn = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? sn(window.requestAnimationFrame, 100) : on(10) : e.type === "callback" ? e.queueNotification : on(e.timeout), l = () => {
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
				return i = !e?.meta?.[an], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, ln = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new $t(e);
	return n && r.push(cn(typeof n == "object" ? n : void 0)), r;
};
function un(e) {
	let t = rn(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (ye(n)) c = Se(n);
	else throw Error(P(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = Ce;
	i && (u = Zt({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = ln(we(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return be(c, o, p);
}
function dn(e) {
	let t = {}, n = [], r, i = {
		addCase(e, n) {
			let r = typeof e == "string" ? e : e.type;
			if (!r) throw Error(P(28));
			if (r in t) throw Error(P(29));
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
function fn(e) {
	return typeof e == "function";
}
function pn(e, t) {
	let [n, r, i] = dn(t), a;
	if (fn(e)) a = () => en(e());
	else {
		let t = en(e);
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
				if (E(e)) return Ft(e, (e) => n(e, t));
				{
					let r = n(e, t);
					if (r === void 0) {
						if (e === null) return e;
						throw Error(P(9));
					}
					return r;
				}
			}
			return e;
		}, e);
	}
	return o.getInitialState = a, o;
}
var mn = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function hn(e, t) {
	return `${e}/${t}`;
}
function gn({ creators: e } = {}) {
	let t = e?.asyncThunk?.[mn];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(P(11));
		let i = (typeof e.reducers == "function" ? e.reducers(yn()) : e.reducers) || {}, a = Object.keys(i), o = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		}, s = {
			addCase(e, t) {
				let n = typeof e == "string" ? e : e.type;
				if (!n) throw Error(P(12));
				if (n in o.sliceCaseReducersByType) throw Error(P(13));
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
				type: hn(n, r),
				createNotation: typeof e.reducers == "function"
			};
			xn(a) ? Cn(o, a, s, t) : bn(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? dn(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return pn(e.initialState, (e) => {
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
				return i === void 0 && n && (i = tn(d, r, m)), i;
			}
			function i(t = l) {
				return tn(tn(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = _n(a, t, () => tn(d, t, m), n);
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
function _n(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var vn = /* @__PURE__ */ gn();
function yn() {
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
function bn({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !Sn(r)) throw Error(P(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? Qt(e, o) : Qt(e));
}
function xn(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function Sn(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function Cn({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(P(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || wn,
		pending: s || wn,
		rejected: c || wn,
		settled: l || wn
	});
}
function wn() {}
var { assign: Tn } = Object;
function P(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region ../app/src/viewSettingsSlice.js
var En = { visibilities: {} }, Dn = vn({
	name: "viewSettings",
	initialState: En,
	reducers: {
		setVisibility: (e, t) => {
			e.visibilities[t.payload.key] = t.payload.visibility;
		},
		restoreDefaultVisibility: (e, t) => {
			delete e.visibilities[t.payload];
		},
		restoreDefaultVisibilities: (e, t) => En,
		setViewSettings: (e, t) => ({
			...En,
			...t.payload ? t.payload : {}
		})
	}
});
//#endregion
//#region ../app/src/configurableVisibilityUtils.js
function On(e) {
	return e.spec.configurableVisibility;
}
function kn(e) {
	let t = On(e);
	if (t && typeof t == "object" && typeof t.group == "string" && t.group.length) return t.group;
}
function An(e) {
	let t = On(e);
	return t === void 0 ? !(e.layoutParent && e.layoutParent.spec && "layer" in e.layoutParent.spec) : t !== !1;
}
function jn(e) {
	return On(e) !== void 0;
}
function F(e) {
	return "v:" + JSON.stringify({
		scope: e.scope,
		view: e.view
	});
}
function Mn(e) {
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
function Nn(e) {
	if (e.explicitName) return F(te(e));
}
function Pn(e, t) {
	let n = Nn(t);
	if (n && Hn(e, n)) return e[n];
	let r = t.explicitName;
	if (r && Hn(e, r)) return e[r];
}
function Fn(e) {
	if (!e || !e.visibilities) return { visibilities: {} };
	let t = e.visibilities;
	if (Array.isArray(t)) {
		let e = {};
		for (let n of t) n && Array.isArray(n.scope) && typeof n.view == "string" && typeof n.visible == "boolean" && (e[F({
			scope: n.scope,
			view: n.view
		})] = n.visible);
		return { visibilities: e };
	}
	return typeof t == "object" ? { visibilities: { ...t } } : { visibilities: {} };
}
function In(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) {
		let t = Mn(e);
		t && n.set(F(t), r);
	}
	let r = Object.keys(t).filter((e) => !Mn(e));
	if (r.length && e) {
		let i = new Set(r), a = /* @__PURE__ */ new Map();
		re(e, (e) => {
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
					let r = Nn(i);
					r && !n.has(r) && n.set(r, t[e]);
				}
			}
		}
	}
	let i = [];
	for (let [e, t] of n) {
		let n = Mn(e);
		n && i.push({
			scope: n.scope,
			view: n.view,
			visible: t
		});
	}
	return i;
}
function Ln(e, t) {
	let n = In(e, Bn(e, t.visibilities));
	if (n.length) return { visibilities: n };
}
function Rn(e) {
	let t = /* @__PURE__ */ new Map();
	re(e, (e) => {
		let n = Nn(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function zn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Vn(e)) {
		let e = r.map((e) => e.selectorKey);
		for (let i of r) t.set(i.selectorKey, {
			groupKey: n,
			memberKeys: e
		});
	}
	return t;
}
function Bn(e, t) {
	let n = { ...t };
	for (let r of Vn(e).values()) {
		let e = r.filter((e) => {
			let n = Pn(t, e.view);
			return n === void 0 ? e.view.isVisibleInSpec() : n;
		});
		if (e.length <= 1) continue;
		let i = e[0].selectorKey;
		for (let e of r) e.selectorKey !== i && (n[e.selectorKey] = !1);
	}
	return n;
}
function Vn(e) {
	let t = /* @__PURE__ */ new Map();
	return re(e, (e) => {
		if (!An(e) || !e.explicitName) return;
		let n = kn(e);
		if (!n) return;
		let r = te(e), i = F(r), a = ie(e)?.name && r.scope.length ? r.scope.slice(0, r.scope.length - 1) : r.scope, o = JSON.stringify({
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
function Hn(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../app/src/sampleView/sampleViewTypes.js
function Un(e) {
	return "aggregation" in e && "interval" in e && (Wn(e.interval) || Gn(e.interval));
}
function Wn(e) {
	return Array.isArray(e);
}
function Gn(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "selection" && "selector" in e;
}
//#endregion
//#region ../app/src/sampleView/intervalReferenceResolver.js
function Kn(e, t) {
	if (Wn(t)) return t;
	if (!Gn(t)) throw Error("Unsupported interval reference.");
	if (!e) throw Error("Cannot resolve selection-backed interval because the root view is unavailable.");
	let i = ne(e, t.selector);
	if (!i) throw Error(`Cannot resolve interval source selection "${t.selector.param}" in import scope ${JSON.stringify(t.selector.scope)}.`);
	let a = i.view.paramRuntime.getValue(t.selector.param);
	if (!a || !n(a) || !r(a)) throw Error(`Interval source selection "${t.selector.param}" is empty. Create a brush selection before running this action.`);
	let o = a.intervals.x;
	if (!o || o.length !== 2 || typeof o[0] != "number" || typeof o[1] != "number") throw Error(`Interval source selection "${t.selector.param}" must provide a numeric x interval.`);
	return [o[0], o[1]];
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFeatureTraversal.js
function qn(e, t, n, r, i, a, o) {
	let s = !n || t && t.equals(n);
	for (let c of e) {
		let e = t(c);
		if (s) e >= i && e <= a && o(c, 1);
		else {
			let t = Jn(e, n(c), i, a, r);
			t > 0 && o(c, t);
		}
	}
}
function Jn(e, t, n, r, i) {
	return i === "endpoints" ? +(e >= n && e <= r || t >= n && t <= r) : i === "encloses" ? e >= n && t <= r ? t - e : 0 : Math.max(0, Math.min(t, r) - Math.max(e, n));
}
function Yn(e, t) {
	if (!l(t)) return t;
	let n = e.getScale(), r = "genome" in n ? n.genome() : void 0;
	if (!r) throw Error("Encountered a chromosomal locus but no genome is available.");
	return r.toContinuous(t.chrom, t.pos);
}
function Xn(e, t, n) {
	let r = Yn(e, t[0]), i = Yn(e, t[1]);
	if (typeof r != "number" || typeof i != "number") throw Error(n);
	return r <= i ? [r, i] : [i, r];
}
//#endregion
//#region ../app/src/sampleView/selectionFeatureFieldValues.js
function Zn(e, t, n) {
	return Qn(e, {
		type: "selection",
		selector: t
	}, n);
}
function Qn(e, t, n) {
	let r = e.getCollector(), i = e.getDataAccessor("x");
	if (!r || !i) return;
	let a = Kn(e.getLayoutAncestors().at(-1), t), [o, s] = Xn(e.getScaleResolution("x"), a, "Selection feature summaries require numeric intervals."), c = e.getDataAccessor("x2"), l = e.mark?.defaultHitTestMode ?? "intersects", u = [];
	for (let e of r.facetBatches.values()) qn(e, i, c, l, o, s, (e) => {
		u.push(e[n]);
	});
	return u;
}
//#endregion
//#region ../app/src/charts/boxplotChart.js
var $n = Object.freeze({
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
function er(e = {}) {
	let t = {
		...$n,
		...e
	};
	return t.groupTitle === void 0 && (t.groupTitle = t.groupField), t.valueTitle === void 0 && (t.valueTitle = t.valueField), t;
}
function tr(e) {
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
function nr(e = {}) {
	return tr(er(e));
}
//#endregion
//#region ../app/src/utils/predicates/comparison.js
var rr = {
	lt: (e, t) => e < t,
	lte: (e, t) => e <= t,
	eq: (e, t) => e == t,
	gte: (e, t) => e >= t,
	gt: (e, t) => e > t
};
function ir(e, t) {
	let n = rr[e];
	return (e) => n(e, t);
}
//#endregion
//#region ../app/src/sampleView/state/groupOperations.js
function ar(e, t, n, r, i) {
	if (r && !n) throw Error("Custom labels need explicit group order!");
	let a = m(e.samples, t), o = n ? n.map((e, t) => ({
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
function or(e, t) {
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
function sr(e, t, n, r) {
	let i = (e) => `Group ${e + 1}`, a = h(n.length - 1).reverse(), o = h(n.length - 1).map((e) => xr(n[e], n[e + 1])), s = or(r, o.length), c = _r(t, n.slice(1, n.length - 1));
	ar(e, (e) => i(c(e)), a.map(i), a.map((e) => s?.[e] ?? o[e]), a.map((e) => o[e]));
}
function cr(e, t, n, r) {
	sr(e, t, [
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
function lr(e, t) {
	let n = yr(vr(e.samples, t, [
		0,
		.25,
		.5,
		.75,
		1
	]));
	n.length == 1 && n.push(n[0]), sr(e, t, n.map((e, t, n) => ({
		operator: t == n.length - 1 ? "lte" : "lt",
		operand: e
	})));
}
function ur(e, t) {
	if (t.length == 0) throw Error("Cannot remove the root sample group.");
	let n = e.groups.findIndex((e) => e.name == t[0]);
	if (n < 0) throw Error("Sample group path not found: " + t.join(" / "));
	if (t.length == 1) e.groups.splice(n, 1);
	else if (t.length > 1) {
		let r = e.groups[n];
		if (q(r)) ur(r, t.slice(1));
		else throw Error("Sample group path does not refer to a nested group: " + t.join(" / "));
	}
}
function dr(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	gr(e, t, (e) => {
		let t = e.groups.map((e, t) => ({
			group: e,
			index: t,
			size: hr(e)
		})).sort((e, t) => e.size === t.size ? e.index - t.index : i === "descending" ? t.size - e.size : e.size - t.size).slice(0, r), n = new Set(t.map((e) => e.group));
		e.groups = e.groups.filter((e) => n.has(e));
	});
}
function fr(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	let a = ir(r, i);
	gr(e, t, (e) => {
		e.groups = e.groups.filter((e) => a(hr(e)));
	});
}
function pr(e, t) {
	gr(e, t, (e) => {
		let t = e;
		t.samples = e.groups.flatMap((e) => mr(e)), delete e.groups;
	});
}
function mr(e) {
	return q(e) ? e.groups.flatMap((e) => mr(e)) : e.samples;
}
function hr(e) {
	return q(e) ? e.groups.reduce((e, t) => e + hr(t), 0) : e.samples.length;
}
function gr(e, t, n) {
	if (!Number.isInteger(t) || t < 0) throw Error("Grouping level must be a non-negative integer.");
	let r = !1, i = (e, a) => {
		if (a === t) r = !0, n(e);
		else for (let t of e.groups) q(t) && i(t, a + 1);
	};
	if (i(e, 0), !r) throw Error("Grouping level not found: " + t);
}
function _r(e, t) {
	return (n) => {
		let r = e(n);
		if (i(r) && !isNaN(r)) {
			for (let e = 0; e < t.length; e++) if (t[e].operator == "lt") {
				if (r < t[e].operand) return e;
			} else if (r <= t[e].operand) return e;
			return t.length;
		}
	};
}
function vr(e, t, n) {
	let r = s(e.map(t).filter((e) => i(e) && !isNaN(e)));
	return n.map((e) => a(r, e));
}
function yr(e) {
	let t = [e[0]];
	for (let n = 1; n < e.length; n++) e[n] != e[n - 1] && t.push(e[n]);
	return t;
}
var br = g(".3~r"), xr = (e, t) => `${e.operator == "lt" ? "[" : "("}${br(e.operand)}, ${br(t.operand)}${t.operator == "lte" ? "]" : ")"}`;
function Sr(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) for (let t of r) n.set(t, e);
	return (t) => n.get(e(t));
}
//#endregion
//#region ../../node_modules/mapsort/compiled/esm/mapsort.min.js
function Cr(e, t) {
	var n = e + "", r = t + "";
	return n < r ? -1 : n == r ? 0 : 1;
}
function wr(e) {
	if (typeof e != "function") throw TypeError(e + " is not a function");
}
function Tr(e, t, n) {
	wr(t), n !== void 0 && wr(n);
	var r, i = [], a = [], o = [];
	i.forEach.call(e, function(e, s, c) {
		if (r = t(e, s, c), r === void 0) return void o.push(e);
		if (!n && typeof r == "symbol") throw TypeError("Can't convert symbol to string");
		i.push(s), a[s] = r;
	}), n ||= Cr, i.sort(function(e, t) {
		return n(a[e], a[t]);
	});
	var s = i.map(function(t) {
		return e[t];
	}).concat(o);
	return s.length != e.length && (s.length = e.length), s;
}
//#endregion
//#region ../app/src/sampleView/state/sampleOperations.js
function Er(e, t) {
	let n = (e) => e.copy().range(h(0, e.domain().length)).unknown(-1), r = (e) => e ?? "";
	switch (t.type) {
		case "quantitative":
			r = (e) => i(e) && !isNaN(e) ? e : -Infinity;
			break;
		case "ordinal":
			r = n(t.scale);
			break;
		case "nominal": r = (e) => e || "";
	}
	return (t) => r(e(t));
}
function Dr(e, t) {
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let t = n.has(e);
		return n.add(e), t;
	};
	return e.filter((e) => !r(t(e)));
}
function Or(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = (e) => (r.size < n && r.add(e), r.has(e));
	return e.filter((e) => i(t(e)));
}
function kr(e, t, n, r) {
	if (r.operator === "in" && r.required === "all") return Ar(e, t, n, r.values);
	let i = jr(r), a = /* @__PURE__ */ new Set();
	for (let r of e) i(n(r)) && a.add(t(r));
	return a;
}
function Ar(e, t, n, r) {
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
function jr(e) {
	if (e.operator === "in") {
		let t = new Set(e.values);
		return (e) => t.has(e);
	}
	return ir(e.operator, e.operand);
}
function Mr(e, t, n = !1) {
	return Tr(e, t, (e, t) => (n && ([e, t] = [t, e]), e < t ? -1 : +(e > t)));
}
function Nr(e, t, n, r) {
	let i = ir(n, r);
	return e.filter((e) => i(t(e)));
}
function Pr(e, t, n, r) {
	let i = new Set(r), a = (e) => i.has(e), o = n == "remove" ? (e) => !a(e) : a;
	return e.filter((e) => o(t(e)));
}
function Fr(e, t) {
	let n = (e) => e != null;
	return e.filter((e) => n(t(e)));
}
function Ir(e, t) {
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
var I = {
	UNDO: "@@redux-undo/UNDO",
	REDO: "@@redux-undo/REDO",
	JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
	JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
	JUMP: "@@redux-undo/JUMP",
	CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
}, Lr = {
	undo() {
		return { type: I.UNDO };
	},
	redo() {
		return { type: I.REDO };
	},
	jumpToFuture(e) {
		return {
			type: I.JUMP_TO_FUTURE,
			index: e
		};
	},
	jumpToPast(e) {
		return {
			type: I.JUMP_TO_PAST,
			index: e
		};
	},
	jump(e) {
		return {
			type: I.JUMP,
			index: e
		};
	},
	clearHistory() {
		return { type: I.CLEAR_HISTORY };
	}
};
function Rr(e, t = []) {
	return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function zr(e) {
	return typeof e.present < "u" && typeof e.future < "u" && typeof e.past < "u" && Array.isArray(e.future) && Array.isArray(e.past);
}
function L(e, t, n, r = null) {
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
var Br, R, Vr = {
	prevState: "#9E9E9E",
	action: "#03A9F4",
	nextState: "#4CAF50"
};
function Hr() {
	R = {
		header: [],
		prev: [],
		action: [],
		next: [],
		msgs: []
	};
}
function Ur() {
	let { header: e, prev: t, next: n, action: r, msgs: i } = R;
	console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i));
}
function Wr(e, t, n) {
	return [
		`%c${e}`,
		`color: ${t}; font-weight: bold`,
		n
	];
}
function Gr(e, t) {
	Hr(), Br && (console.group ? (R.header = [
		"%credux-undo",
		"font-style: italic",
		"action",
		e.type
	], R.action = Wr("action", Vr.action, e), R.prev = Wr("prev history", Vr.prevState, t)) : (R.header = ["redux-undo action", e.type], R.action = ["action", e], R.prev = ["prev history", t]));
}
function z(e) {
	Br && (console.group ? R.next = Wr("next history", Vr.nextState, e) : R.next = ["next history", e], Ur());
}
function B(...e) {
	Br && (R.msgs = R.msgs.concat([...e, "\n"]));
}
function Kr(e) {
	Br = e;
}
function qr(e, t) {
	let n = L([], e, []);
	return t && (n._latestUnfiltered = null), n;
}
function Jr(e, t, n, r) {
	let i = e.past.length + 1;
	B("inserting", t), B("new free: ", n - i);
	let { past: a, _latestUnfiltered: o } = e, s = n && n <= i, c = a.slice(+!!s);
	return L(o == null ? c : [...c, o], t, [], r);
}
function Yr(e, t) {
	if (t < 0 || t >= e.future.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = [
		...n,
		i,
		...r.slice(0, t)
	], o = r[t];
	return L(a, o, r.slice(t + 1));
}
function Xr(e, t) {
	if (t < 0 || t >= e.past.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = n.slice(0, t), o = [
		...n.slice(t + 1),
		i,
		...r
	], s = n[t];
	return L(a, s, o);
}
function Zr(e, t) {
	return t > 0 ? Yr(e, t - 1) : t < 0 ? Xr(e, e.past.length + t) : e;
}
function Qr(e, t) {
	return t.indexOf(e) > -1 ? e : !e;
}
function $r(e, t = {}) {
	Kr(t.debug);
	let n = {
		limit: void 0,
		filter: () => !0,
		groupBy: () => null,
		undoType: I.UNDO,
		redoType: I.REDO,
		jumpToPastType: I.JUMP_TO_PAST,
		jumpToFutureType: I.JUMP_TO_FUTURE,
		jumpType: I.JUMP,
		neverSkipReducer: !1,
		ignoreInitialState: !1,
		syncFilter: !1,
		...t,
		initTypes: Rr(t.initTypes, ["@@redux-undo/INIT"]),
		clearHistoryType: Rr(t.clearHistoryType, [I.CLEAR_HISTORY])
	}, r = n.neverSkipReducer ? (t, n, ...r) => ({
		...t,
		present: e(t.present, n, ...r)
	}) : (e) => e, i;
	return (t = i, a = {}, ...o) => {
		Gr(a, t);
		let s = t;
		if (!i) {
			if (B("history is uninitialized"), t === void 0) return s = qr(e(t, { type: "@@redux-undo/CREATE_HISTORY" }, ...o), n.ignoreInitialState), B("do not set initialState on probe actions"), z(s), s;
			zr(t) ? (s = i = n.ignoreInitialState ? t : L(t.past, t.present, t.future), B("initialHistory initialized: initialState is a history", i)) : (s = i = qr(t, n.ignoreInitialState), B("initialHistory initialized: initialState is not a history", i));
		}
		let c;
		switch (a.type) {
			case void 0: return s;
			case n.undoType: return c = Zr(s, -1), B("perform undo"), z(c), r(c, a, ...o);
			case n.redoType: return c = Zr(s, 1), B("perform redo"), z(c), r(c, a, ...o);
			case n.jumpToPastType: return c = Xr(s, a.index), B(`perform jumpToPast to ${a.index}`), z(c), r(c, a, ...o);
			case n.jumpToFutureType: return c = Yr(s, a.index), B(`perform jumpToFuture to ${a.index}`), z(c), r(c, a, ...o);
			case n.jumpType: return c = Zr(s, a.index), B(`perform jump to ${a.index}`), z(c), r(c, a, ...o);
			case Qr(a.type, n.clearHistoryType): return c = qr(s.present, n.ignoreInitialState), B("perform clearHistory"), z(c), r(c, a, ...o);
			default:
				if (c = e(s.present, a, ...o), n.initTypes.some((e) => e === a.type)) return B("reset history due to init action"), z(i), i;
				if (s._latestUnfiltered === c) return s;
				if (typeof n.filter == "function" && !n.filter(a, c, s)) {
					let e = L(s.past, c, s.future, s.group);
					return n.syncFilter || (e._latestUnfiltered = s._latestUnfiltered), B("filter ignored action, not storing it in past"), z(e), e;
				}
				let t = n.groupBy(a, c, s);
				if (t != null && t === s.group) {
					let e = L(s.past, c, s.future, s.group);
					return B("groupBy grouped the action with the previous action"), z(e), e;
				}
				return s = Jr(s, c, n.limit, t), B("inserted new state into history"), z(s), s;
		}
	};
}
//#endregion
//#region ../app/src/state/provenanceReducerBuilder.js
var V = "_augmented";
function ei(e) {
	return (n) => (Array.isArray(e) ? e : Object.keys(e)).some((e) => t(e) && n.type.startsWith(e));
}
function ti(e) {
	if ("payload" in e) {
		let t = e.payload;
		if (typeof t == "object" && "_augmented" in t) {
			let { [V]: n, ...r } = t;
			return {
				...e,
				payload: r
			};
		}
	}
	return e;
}
function ni(e) {
	return (t, n) => e(n) ? ti(n) : t ?? null;
}
function ri(e, t = {}) {
	let n = ei(e), r = ni(n);
	return $r(Se({
		...e,
		lastAction: r
	}), {
		filter: n,
		ignoreInitialState: !0,
		...t
	});
}
var ii = new Map([
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
function ai(e) {
	let t = ii.get(e);
	if (!t) throw Error("Unknown aggregation op: " + e);
	return t;
}
function oi(e) {
	return ai(e).label.toLowerCase();
}
function si(e) {
	return e === "count" ? "count" : oi(e);
}
function ci(e) {
	return e.operator === "in" ? e.field + " in {" + e.values.map(H).join(", ") + "}" : e.field + " " + li(e.operator) + " " + H(e.value);
}
function li(e) {
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
function H(e) {
	return e === null ? "null" : String(e);
}
function ui(e) {
	let t = e.specifier;
	return !t || typeof t != "object" || !Un(t) || ai(t.aggregation.op).preservesScaleDomain;
}
function di(e, t, n) {
	let r = n ? " where " + ci(n) : "";
	return e === "itemCount" ? si(e) + (n ? "(" + r.trim() + ")" : "") : e === "count" ? si(e) + "(" + t + r + ")" : oi(e) + "(" + t + r + ")";
}
//#endregion
//#region ../app/src/utils/emptyToUndefined.js
function fi(e) {
	return e ?? void 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataNameUtils.js
function pi(e, t) {
	let n = _i(e);
	if (n.length === 0) return e.trim();
	let { prefix: r, restTokens: i } = mi(n), a = r && i.length > 0 ? "_" : "", o = Math.max(0, t - r.length - a.length);
	if (i.length === 0) return r.length > 0 ? r : e.trim();
	let s = gi(i, o, r.length > 0), c = r + a + s;
	if (a && c.length > t) {
		let e = r + s;
		e.length <= t && (c = e);
	}
	return c.length > t ? c.slice(0, t) : c;
}
function mi(e) {
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
	]) if (hi(t, n.match)) return {
		prefix: n.prefix,
		restTokens: e.slice(n.match.length)
	};
	return {
		prefix: "",
		restTokens: e
	};
}
function hi(e, t) {
	if (e.length < t.length) return !1;
	for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return !1;
	return !0;
}
function gi(e, t, n) {
	let r = [], i = yi(e, !1), a = yi(e, !0), o = n ? [a, i] : [i, a];
	for (let e of o) e.length > 0 && !r.includes(e) && r.push(e);
	if (e.length > 2) {
		let t = yi([e[0], e[e.length - 1]], !0);
		t !== a && r.push(t);
	}
	for (let t = e.length - 1; t > 0; --t) {
		let n = yi(e.slice(0, t), !0);
		r.includes(n) || r.push(n);
	}
	for (let e of r) if (e.length <= t) return e;
	return r[0].slice(0, t);
}
function _i(e) {
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
function vi(e, t, n) {
	return /^[A-Z0-9]+$/.test(e) ? e : n && t === 0 ? e[0].toLowerCase() : e.length <= 4 ? e : e.length <= 8 ? e.slice(0, 4) : e.slice(0, 3);
}
function yi(e, t) {
	return bi(e.map((e, n) => vi(e, n, t)));
}
function bi(e) {
	return e.map((e, t) => t === 0 || e.length === 0 || /^[A-Z0-9]+$/.test(e) ? e : e[0].toUpperCase() + e.slice(1)).join("");
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataUtils.js
function xi(e, t = {}) {
	if (!e) throw Error("Attribute info is missing.");
	let n = e.type;
	if (n === "nominal" || n === "ordinal" || n === "quantitative") return n;
	if (t.strict === !1) return null;
	throw Error("Unsupported data type: " + n);
}
function Si(e, t, n, r) {
	let i = e.trim();
	if (i.length === 0) return "Attribute name is required.";
	let a = Ci(i, t.trim(), xi(r));
	return n.includes(a) ? "Name already exists. Choose another name or group." : null;
}
function Ci(e, t, n) {
	let r = { [e]: { type: n } };
	if (t.length === 0) return Object.keys(r)[0];
	let i = se(r, t, "/");
	return Object.keys(i)[0];
}
function wi(e, t) {
	let n = Di(t.scale);
	return {
		attribute: e,
		name: t.name,
		groupPath: fi(t.groupPath),
		...n ? { scale: n } : t.scale === null ? { scale: null } : {}
	};
}
function Ti(e, t) {
	return e.scale === void 0 ? Ei(t) : Di(e.scale);
}
function Ei(e) {
	if (ui(e.attribute)) return Di("scaleSpec" in e ? e.scaleSpec : e.scale?.props);
}
function Di(e) {
	if (!e) return;
	let t = structuredClone(e), n = t.range;
	return n && (!Array.isArray(n) || !n.every(Oi)) && delete t.range, Object.keys(t).length > 0 ? t : void 0;
}
function Oi(e) {
	return typeof e == "string" && c(e) != null;
}
function ki(e, t) {
	let n = new Set(t), r = Ai(e) ?? (e.name && e.name.length > 0 ? e.name.trim() : "Derived"), i = [], a = r.length > 20, o = a ? pi(r, 20) : "";
	if (a && o.length > 0 && o !== r && i.push(o), i.push(r), !a && n.has(r)) {
		let e = pi(r, 20);
		e.length > 0 && e !== r && i.push(e);
	}
	for (let e of i) {
		let t = Pi(e, n);
		if (t) return t;
	}
	throw Error("Unable to generate a unique metadata attribute name.");
}
function Ai(e) {
	let t = e.attribute.specifier;
	if (!t || typeof t != "object" || !Un(t) || !t.featureFilter) return null;
	let n = ji(t.featureFilter);
	return t.aggregation.op === "count" || t.aggregation.op === "itemCount" ? n + "_count" : Ni(t.aggregation.op) + "_" + n + "_" + t.field;
}
function ji(e) {
	return e.operator === "eq" ? Mi(H(e.value)) : e.operator === "in" ? e.values.map((e) => Mi(H(e))).join("_") : Mi(e.field) + "_" + e.operator + "_" + Mi(H(e.value));
}
function Mi(e) {
	return e.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Ni(e) {
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
function Pi(e, t) {
	if (!t.has(e)) return e;
	for (let n = 2; n < 2 ** 53 - 1; n += 1) {
		let r = Fi(e, "-" + String(n));
		if (!t.has(r)) return r;
	}
	return null;
}
function Fi(e, t) {
	if (e.length + t.length <= 32) return e + t;
	let n = Math.max(1, 32 - t.length);
	return e.slice(0, n) + t;
}
//#endregion
//#region ../app/src/sampleView/state/sampleSlice.js
var Ii = "sampleView";
function Li() {
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
function U(e) {
	let t = e.payload[V]?.values;
	if (!t) throw Error("No accessed values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return (e) => t[e];
}
function Ri(e) {
	let t = e.payload[V], n = t?.values, r = t?.conditionValues;
	if (!n || !r) throw Error("No accessed category and condition values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return {
		categoryAccessor: (e) => n[e],
		conditionAccessor: (e) => r[e]
	};
}
function zi(e) {
	if (!Number.isInteger(e) || e < 1) throw Error("Grouping level must be a positive integer.");
	return e - 1;
}
function Bi(e, t) {
	let n = {};
	for (let r of G(e)) for (let e of r.samples) n[e] = t(e);
	return n;
}
function Vi(e, t) {
	if (!e.sampleData) throw Error("Samples must be set before setting metadata!");
	let n = t.columnarMetadata, r = Object.keys(n).filter((e) => e !== "sample"), i = {
		entities: Object.fromEntries(he(n).map((e) => {
			let { sample: t, ...n } = e;
			return [String(t), n];
		})),
		attributeNames: r
	}, a = me(i, t.attributeDefs, "/"), o = {
		...i,
		attributeDefs: a
	}, s = Ie(e.sampleMetadata) ?? e.sampleMetadata, c = t.replace ? o : le(s, o);
	e.sampleMetadata = t.replace ? Xe(o) : Xe(c);
}
var Hi = vn({
	name: Ii,
	initialState: Li(),
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
			Vi(e, t.payload);
		},
		deriveMetadata: (e, t) => {
			let n = t.payload[V]?.metadata;
			if (!n) throw Error("Derived metadata payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			Vi(e, n);
		},
		addMetadataFromSource: (e, t) => {
			let n = t.payload[V]?.metadata;
			if (!n) throw Error("Metadata source payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			Vi(e, n);
		},
		sortBy: (e, t) => {
			W(e, (e) => Mr(e, U(t), Ui(t.payload.order)));
		},
		retainFirstOfEach: (e, t) => {
			W(e, (e) => Dr(e, U(t)));
		},
		retainFirstNCategories: (e, t) => {
			W(e, (e) => Or(e, U(t), t.payload.n));
		},
		filterByQuantitative: (e, t) => {
			W(e, (e) => Nr(e, U(t), t.payload.operator, t.payload.operand));
		},
		retainCategoriesByAttribute: (e, t) => {
			let { categoryAccessor: n, conditionAccessor: r } = Ri(t), i = kr(G(e).flatMap((e) => e.samples), n, r, t.payload.condition);
			W(e, (e) => e.filter((e) => i.has(n(e))));
		},
		filterByNominal: (e, t) => {
			W(e, (e) => Pr(e, U(t), t.payload.remove ? "remove" : "retain", t.payload.values));
		},
		removeUndefined: (e, t) => {
			W(e, (e) => Fr(e, U(t)));
		},
		groupCustomCategories: (e, t) => {
			let n = Sr(U(t), t.payload.groups);
			Wi(e, (e) => ar(e, n, Object.keys(t.payload.groups))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByNominal: (e, t) => {
			Wi(e, (e) => ar(e, U(t), t.payload[V].domain)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupToQuartiles: (e, t) => {
			Wi(e, (e) => lr(e, U(t))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByThresholds: (e, t) => {
			Wi(e, (e) => cr(e, U(t), t.payload.thresholds, t.payload.groupTitles)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		removeGroup: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) ur(n, t.payload.path);
			else throw Error("Cannot remove sample groups before grouping.");
		},
		retainGroupsByRank: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) dr(n, zi(t.payload.level), t.payload.measure, t.payload.limit, t.payload.order);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		retainGroupsBySize: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) fr(n, zi(t.payload.level), t.payload.measure, t.payload.operator, t.payload.operand);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		ungroup: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) {
				let r = zi(t.payload.level);
				pr(n, r), e.groupMetadata.splice(r);
			} else throw Error("Cannot ungroup samples before grouping.");
		},
		retainMatched: (e, t) => {
			let n = U(t), r = Ir(G(e).map((e) => e.samples), n);
			W(e, (e) => Pr(e, n, "retain", r));
		}
	}
});
function Ui(e) {
	let t = e ?? "descending";
	if (t === "ascending") return !1;
	if (t === "descending") return !0;
	throw Error("Invalid sort order: " + t);
}
function W(e, t) {
	for (let n of G(e)) n.samples = t(n.samples);
}
function Wi(e, t) {
	for (let n of G(e)) t(n);
}
function G(e) {
	return K(e).map((e) => _(e));
}
function K(e) {
	let t = [], n = [], r = (e) => {
		if (t.push(e), q(e)) for (let t of e.groups) r(t);
		else n.push([...t]);
		t.pop();
	};
	return r(e.rootGroup), n;
}
function Gi(e) {
	return "samples" in e;
}
function q(e) {
	return "groups" in e;
}
function* Ki(e) {
	if (yield [e], q(e)) for (let t of e.groups) for (let n of Ki(t)) yield [e, ...n];
}
var qi = qt((e) => e.sampleData?.entities, (e) => e && Object.values(e));
function Ji(e, t, n) {
	if (!e.type.startsWith("sampleView/")) return e;
	let r = e.type.split("/")[1];
	if (!(r in Hi.actions)) throw Error(`Invalid action type: ${r}`);
	if (!e.payload.attribute) return e;
	let i = n(e.payload.attribute);
	if (!i) throw Error(`Attribute info for attribute "${e.payload.attribute}" not found`);
	if (r === "deriveMetadata") return Yi(e, t, i);
	let a = i.accessor, o = r == "sortBy" ? Er((e) => a(e, t), i) : a, s = { values: Bi(t, (e) => o(e, t)) };
	if (r == "groupByNominal" && (s.domain = i.scale?.domain()), r === "retainCategoriesByAttribute") {
		let r = n(e.payload.condition.attribute);
		s.conditionValues = Bi(t, (e) => r.accessor(e, t));
	}
	return {
		...e,
		payload: {
			...e.payload,
			[V]: s
		}
	};
}
function Yi(e, t, n) {
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
	}, s = xi(n, { strict: !1 }), c = Ti(e.payload, n), l = { [r]: {
		type: fi(s),
		...c ? { scale: c } : {}
	} }, u = e.payload.groupPath?.trim() ?? "", d = u.length > 0 ? {
		columnarMetadata: de(o, u, "/"),
		attributeDefs: se(l, u, "/")
	} : {
		columnarMetadata: o,
		attributeDefs: l
	};
	return {
		...e,
		payload: {
			...e.payload,
			[V]: { metadata: d }
		}
	};
}
//#endregion
//#region ../app/src/sampleView/attributeValues.js
function Xi(e) {
	return (t) => t.sampleIds.map((n) => e(n, t.sampleHierarchy));
}
function Zi(e, t, n, r = {}) {
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
		return d(e, t), $i(t.textContent ?? "");
	}
	return $i(ea(Qi(e)));
}
function Qi(e) {
	if (e == null) return "";
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return String(e);
	if (Array.isArray(e)) return e.map((e) => Qi(e)).join("");
	if (typeof e == "object" && "strings" in e && "values" in e && Array.isArray(e.strings) && Array.isArray(e.values)) {
		let t = e.strings[0] ?? "";
		for (let n = 0; n < e.values.length; n++) t += Qi(e.values[n]) + (e.strings[n + 1] ?? "");
		return t;
	}
	return typeof e == "object" && Symbol.iterator in e && typeof e[Symbol.iterator] == "function" ? Array.from(e, (e) => Qi(e)).join("") : "";
}
function $i(e) {
	return e.replace(/\s+/g, " ").trim();
}
function ea(e) {
	return e.replace(/<[^>]*>/g, "");
}
//#endregion
//#region ../app/src/charts/chartDataUtils.js
function ta(e) {
	let t = e.attribute.specifier;
	return !t || typeof t != "object" ? {} : Un(t) && Wn(t.interval) ? {
		interval: t.interval,
		aggregation: t.aggregation
	} : {};
}
function na(e, t) {
	let n = e[e.length - 1];
	return (e.length > 1 ? e.slice(1).map((e) => e.title || e.name) : [n.title || n.name]).join(t);
}
function ra(e) {
	let t = e[e.length - 1];
	if (!("samples" in t)) throw Error("Expected a sample group leaf node.");
	return t.samples;
}
function Y(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function ia(e, t, n = " / ") {
	return t.length === 0 ? null : t.map((t) => J(e.getAttributeInfo(t.attribute).title)).join(n);
}
//#endregion
//#region ../app/src/charts/hierarchyBarplotData.js
var aa = Object.freeze({
	categoryField: "category",
	groupField: "group",
	countField: "Count",
	groupLabelSeparator: " / ",
	grouped: void 0
});
function oa(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "nominal" && t.type !== "ordinal") throw Error("Bar plot requires a categorical attribute.");
	let r = {
		...aa,
		grouped: e.groupMetadata.length > 0 || "groups" in e.rootGroup,
		...n
	}, i = [], a = [], o = /* @__PURE__ */ new Set(), s = [], c = [], l = ta(t), u = 0, d = 0, f = 0;
	for (let n of K(e)) {
		let p = na(n, r.groupLabelSeparator), m = ra(n);
		u += m.length;
		let h = Zi(t, m, e, l);
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
function sa(t, n, r = {}) {
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
var ca = Object.freeze({
	groupField: "group",
	valueField: "value",
	sampleField: "sample",
	groupLabelSeparator: " / ",
	coef: void 0,
	dropNaN: void 0
});
function la(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative") throw Error("Boxplot requires a quantitative attribute.");
	let r = t.attribute.specifier;
	if (typeof r == "string" && !e.sampleMetadata.attributeNames.includes(r)) throw Error("Unknown metadata attribute: " + String(r));
	let i = {
		...ca,
		...n
	}, a = [], o = [], s = [], c = [], l = ta(t), u = 0, d = 0, f = 0;
	for (let n of K(e)) {
		let r = na(n, i.groupLabelSeparator), p = ra(n);
		u += p.length;
		let m = Zi(t, p, e, l);
		if (m.length !== p.length) throw Error("Attribute values length does not match sample ids.");
		let h = p.map((e, t) => ({
			[i.sampleField]: e,
			[i.valueField]: m[t]
		}));
		if (h.length === 0) continue;
		let { statistics: g, outliers: _ } = sa(h, (e) => e[i.valueField], {
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
var ua = Object.freeze({
	groupField: "group",
	xField: "x",
	yField: "y",
	sampleField: "sample",
	groupLabelSeparator: " / "
});
function da(e, t, n, r = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative" || n.type !== "quantitative") throw Error("Scatterplot requires quantitative attributes.");
	let i = {
		...ua,
		...r
	}, a = [], o = [], s = [], c = ta(t), l = ta(n), u = 0, d = 0;
	for (let r of K(e)) {
		let f = na(r, i.groupLabelSeparator), p = ra(r);
		u += p.length;
		let m = Zi(t, p, e, c), h = Zi(n, p, e, l);
		if (m.length !== p.length) throw Error("X attribute values length does not match sample ids.");
		if (h.length !== p.length) throw Error("Y attribute values length does not match sample ids.");
		let g = !1, _ = 0;
		for (let e = 0; e < p.length; e += 1) {
			let t = m[e], n = h[e];
			if (t == null || n == null) {
				d++;
				continue;
			}
			let r = typeof t == "number" ? t : Number(t), o = typeof n == "number" ? n : Number(n);
			!Number.isFinite(r) || !Number.isFinite(o) ? d++ : (a.push({
				[i.sampleField]: p[e],
				[i.xField]: r,
				[i.yField]: o,
				[i.groupField]: f
			}), g = !0, _++);
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
var fa = 15, pa = new Intl.Collator("en", {
	numeric: !0,
	sensitivity: "base"
});
function ma(e, t, n, r = fa) {
	let i = Array.from(e.entries()).sort(ga), a = i.slice(0, r).map(([e, n]) => ({
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
function ha(e, t) {
	let n = Array.from(e.entries()).sort(ga)[0];
	return n ? {
		value: n[0],
		count: n[1],
		share: t > 0 ? n[1] / t : 0
	} : void 0;
}
function ga(e, t) {
	return t[1] === e[1] ? pa.compare(String(e[0]), String(t[0])) : t[1] - e[1];
}
//#endregion
//#region ../app/src/utils/colorScaleSummary.js
function _a(e) {
	let t = e;
	if (!t || typeof t.domain != "function" || typeof t.range != "function") return;
	let n = t.domain(), r = t.range();
	if (Array.isArray(n) && Array.isArray(r) && r.every((e) => typeof e == "string")) return {
		domain: n,
		range: r
	};
}
function va(e, t, n, r) {
	let i = ya(n, r);
	return i ? e.map((e) => {
		let n = i.get(t(e));
		return n === void 0 ? e : {
			...e,
			color: n
		};
	}) : e;
}
function ya(e, t) {
	if (!Array.isArray(e) || !Array.isArray(t) || !t.every((e) => typeof e == "string")) return;
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e, r) => {
		let i = t[r];
		typeof i == "string" && n.set(e, i);
	}), n;
}
//#endregion
//#region ../app/src/charts/hierarchySampleAttributePlots.js
var ba = "hierarchy_barplot", xa = "hierarchy_boxplot_stats", Sa = "hierarchy_boxplot_outliers", Ca = "hierarchy_scatterplot_points";
function wa(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = J(t.title), r = J(t.emphasizedName), i = t.type, a = ia(e.attributeInfoSource, e.sampleHierarchy.groupMetadata) ?? "Group", o = "Count", { rows: s, categoryDomain: c, groupDomain: l, grouped: u, sampleCount: d, nonMissingCount: f, missingCount: p, groupSummaries: m } = oa(e.sampleHierarchy, e.attributeInfo, {
		categoryField: n,
		groupField: a,
		countField: o
	}), h = Pa(t, c), g = u ? a : n, _ = u ? a : r, v = u ? l : c, ee = u ? "nominal" : i, te = {
		data: { name: ba },
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
			name: ba,
			rows: s
		}],
		filename: "genomespy-barplot.png",
		summary: {
			groupCount: l.length > 0 ? l.length : 1,
			sampleCount: d,
			plottedCount: f
		},
		characterization: Da({
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
function Ta(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = ia(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), r = J(t.emphasizedName), i = n ?? "Group", a = J(t.title), { statsRows: o, outlierRows: s, groupDomain: c, sampleCount: l, nonMissingCount: u, groupSummaries: d } = la(e.sampleHierarchy, e.attributeInfo, {
		groupField: i,
		valueField: a,
		sampleField: "sample"
	}), f = nr({
		statsName: xa,
		outliersName: Sa,
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
			name: xa,
			rows: o
		}, {
			name: Sa,
			rows: s
		}],
		filename: "genomespy-boxplot.png",
		summary: {
			groupCount: c.length > 0 ? c.length : 1,
			sampleCount: l,
			plottedCount: u
		},
		characterization: Oa(d)
	};
}
function Ea(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.xAttributeInfo.attribute), n = e.attributeInfoSource.getAttributeInfo(e.yAttributeInfo.attribute), r = J(t.title), i = J(n.title), a = J(t.emphasizedName), o = J(n.emphasizedName), s = ia(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), c = s ?? "Group", { rows: l, groupDomain: u, sampleCount: d, missingPairCount: f, groupSummaries: p } = da(e.sampleHierarchy, e.xAttributeInfo, e.yAttributeInfo, {
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
	}, h = e.colorScaleDomain ?? u, g = Fa(u, c, s ?? "Group", h, e.colorScaleRange), _ = {
		data: { name: Ca },
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
			name: Ca,
			rows: l
		}],
		filename: "genomespy-scatterplot.png",
		summary: {
			groupCount: u.length > 0 ? u.length : 1,
			sampleCount: d,
			plottedCount: l.length
		},
		characterization: ka({
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
function Da(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.rows) {
		let r = n[e.categoryFieldName], i = Number(n[e.countFieldName]);
		t.set(r, (t.get(r) ?? 0) + i);
	}
	let n = ma(t, e.nonMissingCount, e.missingCount), r = va(n.categories, (e) => e.value, e.colorScale.domain, e.colorScale.range);
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
			...Aa(e.counts, e.nonMissingCount)
		})) } : {}
	};
}
function Oa(e) {
	let t = e.map((e) => ({ ...e })), n = t.filter((e) => e.nonMissingCount > 0).slice().sort((e, t) => e.median - t.median), r = n[0], i = n[n.length - 1];
	return {
		kind: "quantitative_distribution",
		groups: t,
		...i ? { highestMedianGroup: i.title } : {},
		...r ? { lowestMedianGroup: r.title } : {},
		...i && r ? { largestMedianDifference: i.median - r.median } : {}
	};
}
function ka(e) {
	let t = e.rows.map((t) => Number(t[e.xFieldName])), n = e.rows.map((t) => Number(t[e.yFieldName])), r = Ma(t, n);
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
		x: ja(t),
		y: ja(n),
		...r === void 0 ? {} : { correlation: Na(r) },
		...e.groupSummaries.length > 1 ? { groups: va(e.groupSummaries, (e) => e.title, e.colorScaleDomain, e.colorScaleRange) } : {}
	};
}
function Aa(e, t) {
	let n = ha(e, t);
	return n ? { topCategory: n } : {};
}
function ja(e) {
	let t = e.filter((e) => Number.isFinite(e));
	return t.length === 0 ? {} : {
		min: Math.min(...t),
		max: Math.max(...t)
	};
}
function Ma(e, t) {
	if (e.length !== t.length || e.length < 3) return;
	let n = e.reduce((e, t) => e + t, 0) / e.length, r = t.reduce((e, t) => e + t, 0) / t.length, i = 0, a = 0, o = 0;
	for (let s = 0; s < e.length; s += 1) {
		let c = e[s] - n, l = t[s] - r;
		i += c * c, a += l * l, o += c * l;
	}
	if (i !== 0 && a !== 0) return o / Math.sqrt(i * a);
}
function Na(e) {
	return {
		method: "pearson",
		r: e
	};
}
function Pa(e, t) {
	let n = e.scale, r = n && typeof n.domain == "function" ? n.domain() : t, i = n && typeof n.range == "function" ? n.range() : void 0;
	return {
		domain: r,
		...i ? { range: i } : {}
	};
}
function Fa(e, t, n, r, i) {
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
function Ia(e) {
	if (e.sampleHierarchy.groupMetadata.length !== 1) return;
	let t = e.sampleHierarchy.groupMetadata[0].attribute;
	if (t.type !== "SAMPLE_ATTRIBUTE") return;
	let n = e.compositeAttributeInfoSource.getAttributeInfo(t);
	if (n.type === "quantitative") return;
	let r = _a(n.scale);
	if (r) return {
		domain: r.domain.map(String),
		range: r.range
	};
}
//#endregion
//#region ../../node_modules/@zarrita/storage/dist/src/util.js
function La(e, t, n, r = {}) {
	return t !== void 0 && n !== void 0 && (r = {
		...r,
		headers: {
			...r.headers,
			Range: `bytes=${t}-${t + n - 1}`
		}
	}), fetch(e, r);
}
function Ra(e, t) {
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
function za(e, t) {
	let n = typeof e == "string" ? new URL(e) : e;
	n.pathname.endsWith("/") || (n.pathname += "/");
	let r = new URL(t.slice(1), n);
	return r.search = n.search, r;
}
async function Ba(e) {
	if (e.status !== 404) {
		if (e.status === 200 || e.status === 206) return new Uint8Array(await e.arrayBuffer());
		throw Error(`Unexpected response status ${e.status} ${e.statusText}`);
	}
}
async function Va(e, t, n, r) {
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
	return La(e, o - t, o, n);
}
var Ha = class {
	url;
	#e;
	#t;
	constructor(e, t = {}) {
		this.url = e, this.#e = t.overrides ?? {}, this.#t = t.useSuffixRequest ?? !1;
	}
	#n(e) {
		return Ra(this.#e, e);
	}
	async get(e, t = {}) {
		let n = za(this.url, e).href;
		return Ba(await fetch(n, this.#n(t)));
	}
	async getRange(e, t, n = {}) {
		let r = za(this.url, e), i = this.#n(n), a;
		return a = "suffixLength" in t ? await Va(r, t.suffixLength, i, this.#t) : await La(r, t.offset, t.length, i), Ba(a);
	}
}, Ua = class {
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
}, Wa = class {
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
}, Ga = class e {
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
function Ka(e) {
	let t = new TextDecoder().decode(e);
	return JSON.parse(t);
}
function qa(e, t) {
	let n = t / 2, r = t - 1, i = 0;
	for (let a = 0; a < e.length; a += t) for (let t = 0; t < n; t += 1) i = e[a + t], e[a + t] = e[a + r - t], e[a + r - t] = i;
}
function Ja(e) {
	if (e === "v2:object") return globalThis.Array;
	let t = e.match(/v2:([US])(\d+)/);
	if (t) {
		let [, e, n] = t;
		return (e === "U" ? Ga : Wa).bind(null, Number(n));
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
		bool: Ua
	}[e];
	return Z(n, `Unknown or unsupported data_type: ${e}`), n;
}
function X(e, t) {
	let n = e.length;
	typeof t == "string" && (t = t === "C" ? Array.from({ length: n }, (e, t) => t) : Array.from({ length: n }, (e, t) => n - 1 - t)), Z(n === t.length, "Order length must match the number of dimensions.");
	let r = 1, i = Array(n);
	for (let n = t.length - 1; n >= 0; n--) i[t[n]] = r, r *= e[t[n]];
	return i;
}
function Ya({ name: e, configuration: t }) {
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
function Xa(e) {
	if (e === "|O") return { data_type: "v2:object" };
	let t = e.match(/^([<|>])(.*)$/);
	Z(t, `Invalid dtype: ${e}`);
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
	return Z(i, `Unsupported or unknown dtype: ${e}`), n === "|" ? { data_type: i } : {
		data_type: i,
		endian: n === "<" ? "little" : "big"
	};
}
function Za(e, t = {}) {
	let n = [], r = Xa(e.dtype);
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
function Qa(e, t = {}) {
	return {
		zarr_format: 3,
		node_type: "group",
		attributes: t
	};
}
function $a(e, t) {
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
function eo(e) {
	return e?.name === "sharding_indexed";
}
function to(e) {
	return (e.data_type === "uint64" || e.data_type === "int64") && e.fill_value != null ? BigInt(e.fill_value) : e.fill_value;
}
function no(e, ...t) {
	if (!t.some((t) => e instanceof t)) throw e;
}
function Z(e, t = "") {
	if (!e) throw Error(t);
}
async function ro(e, { format: t, signal: n }) {
	let r = e instanceof Response ? e : new Response(e);
	Z(r.body, "Response does not contain body.");
	try {
		return await new Response(r.body.pipeThrough(new DecompressionStream(t), { signal: n })).arrayBuffer();
	} catch {
		throw n?.throwIfAborted(), Error(`Failed to decode ${t}`);
	}
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/bitround.js
var io = class e {
	kind = "array_to_array";
	constructor(e, t) {
		Z(e.keepbits >= 0, "keepbits must be zero or positive");
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
}, ao = oo();
function oo() {
	let e = new Uint32Array([305419896]);
	return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)[0] !== 18;
}
function so(e) {
	return "BYTES_PER_ELEMENT" in e ? e.BYTES_PER_ELEMENT : 4;
}
var co = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t) {
		this.#i = e?.endian, this.#t = Ja(t.data_type), this.#r = t.shape, this.#e = X(t.shape, "C");
		let n = new this.#t(0);
		this.#n = n.BYTES_PER_ELEMENT;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		let t = new Uint8Array(e.data.buffer);
		return ao && this.#i === "big" && qa(t, so(this.#t)), t;
	}
	decode(e) {
		return ao && this.#i === "big" && qa(e, so(this.#t)), {
			data: new this.#t(e.buffer, e.byteOffset, e.byteLength / this.#n),
			shape: this.#r,
			stride: this.#e
		};
	}
}, lo = class e {
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
}, uo = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Gzip encoding is not enabled by default. Please register a custom codec with `numcodecs/gzip`.");
	}
	async decode(e) {
		let t = await ro(e, { format: "gzip" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/json2.js
function fo(e, t) {
	return Z(!Number.isNaN(t), "JsonCodec allow_nan is false but NaN was encountered during encoding."), Z(t !== Infinity, "JsonCodec allow_nan is false but Infinity was encountered during encoding."), Z(t !== -Infinity, "JsonCodec allow_nan is false but -Infinity was encountered during encoding."), t;
}
function po(e, t) {
	return t instanceof Object && !Array.isArray(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t;
}
var mo = class e {
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
		Z(n === "utf-8", "JsonCodec does not yet support non-utf-8 encoding.");
		let s = [];
		Z(i, "JsonCodec does not yet support skipping the check for circular references during encoding."), a || s.push(fo), o && s.push(po);
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
		Z(t, "JsonCodec does not yet support non-strict decoding.");
		let n = Ka(e), r = n.pop();
		return n.pop(), Z(r, "0D not implemented for JsonCodec."), {
			data: n,
			shape: r,
			stride: X(r, "C")
		};
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/transpose.js
function ho(e) {
	return e instanceof Ua || e instanceof Wa || e instanceof Ga ? new Proxy(e, {
		get(e, t) {
			return e.get(Number(t));
		},
		set(e, t, n) {
			return e.set(Number(t), n), !0;
		}
	}) : e;
}
function go(e, t) {
	let n;
	return n = e.data instanceof Wa || e.data instanceof Ga ? new e.constructor(e.data.length, e.data.chars) : new e.constructor(e.data.length), {
		data: n,
		shape: e.shape,
		stride: X(e.shape, t)
	};
}
function _o(e, t) {
	let n = go(e, t), r = e.shape.length, i = e.data.length, a = Array(r).fill(0), o = ho(e.data), s = ho(n.data);
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
function vo(e) {
	let t = e.shape.length;
	return Z(t === e.stride.length, "Shape and stride must have the same length."), e.stride.map((e, t) => ({
		stride: e,
		index: t
	})).sort((e, t) => t.stride - e.stride).map((e) => e.index);
}
function yo(e, t) {
	let n = vo(e);
	return Z(n.length === t.length, "Orders must match"), n.every((e, n) => e === t[n]);
}
var bo = class e {
	kind = "array_to_array";
	#e;
	#t;
	constructor(e, t) {
		let n = e.order ?? "C", r = t.shape.length, i = Array(r), a = Array(r);
		if (n === "C") for (let e = 0; e < r; ++e) i[e] = e, a[e] = e;
		else if (n === "F") for (let e = 0; e < r; ++e) i[e] = r - e - 1, a[e] = r - e - 1;
		else i = n, i.forEach((e, t) => {
			Z(a[e] === void 0, `Invalid permutation: ${JSON.stringify(n)}`), a[e] = t;
		});
		this.#e = i, this.#t = a;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		return yo(e, this.#t) ? e : _o(e, this.#t);
	}
	decode(e) {
		return {
			data: e.data,
			shape: e.shape,
			stride: X(e.shape, this.#e)
		};
	}
}, xo = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = X(e, "C");
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
}, So = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Zlib encoding is not enabled by default. Please register a codec with `numcodecs/zlib`.");
	}
	async decode(e) {
		let t = await ro(e, { format: "deflate" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs.js
function Co() {
	return (/* @__PURE__ */ new Map()).set("blosc", () => import("./blosc-C-W97QwH.js").then((e) => e.default)).set("lz4", () => import("./lz4-BLPgBOlE.js").then((e) => e.default)).set("zstd", () => import("./zstd-YMzMcush.js").then((e) => e.default)).set("gzip", () => uo).set("zlib", () => So).set("transpose", () => bo).set("bytes", () => co).set("crc32c", () => lo).set("vlen-utf8", () => xo).set("json2", () => mo).set("bitround", () => io);
}
var wo = Co();
function To(e) {
	let t;
	return {
		async encode(n) {
			t ||= await Eo(e);
			for (let e of t.array_to_array) n = await e.encode(n);
			let r = await t.array_to_bytes.encode(n);
			for (let e of t.bytes_to_bytes) r = await e.encode(r);
			return r;
		},
		async decode(n) {
			t ||= await Eo(e);
			for (let e = t.bytes_to_bytes.length - 1; e >= 0; e--) n = await t.bytes_to_bytes[e].decode(n);
			let r = await t.array_to_bytes.decode(n);
			for (let e = t.array_to_array.length - 1; e >= 0; e--) r = await t.array_to_array[e].decode(r);
			return r;
		}
	};
}
async function Eo(e) {
	let t = e.codecs.map(async (e) => {
		let t = await wo.get(e.name)?.();
		return Z(t, `Unknown codec: ${e.name}`), {
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
	return r ||= (Z(Do(e), `Cannot encode ${e.data_type} to bytes without a codec`), co.fromConfig({ endian: "little" }, e)), {
		array_to_array: n,
		array_to_bytes: r,
		bytes_to_bytes: i
	};
}
function Do(e) {
	return e.data_type !== "v2:object" && e.data_type !== "string";
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/errors.js
var Q = class extends Error {
	constructor(e, t = {}) {
		super(`Node not found: ${e}`, t), this.name = "NodeNotFoundError";
	}
}, Oo = class extends Error {
	constructor(e) {
		super(`Missing key: ${e}`), this.name = "KeyError";
	}
}, ko = 18446744073709551615n;
function Ao(e, t, n, r) {
	Z(e.store.getRange, "Store does not support range requests");
	let i = e.store.getRange.bind(e.store), a = t.map((e, t) => e / r.chunk_shape[t]), o = To({
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
		if (g !== ko || _ !== ko) return i(u, {
			offset: Number(g),
			length: Number(_)
		}, r);
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/hierarchy.js
var jo = class e {
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
function Mo(e) {
	return new jo(e ?? /* @__PURE__ */ new Map());
}
var No = class extends jo {
	kind = "group";
	#e;
	constructor(e, t, n) {
		super(e, t), this.#e = n;
	}
	get attrs() {
		return this.#e.attributes;
	}
};
function Po(e) {
	return e.find((e) => e.name === "transpose")?.configuration?.order ?? "C";
}
var Fo = Symbol("zarrita.context");
function Io(e) {
	return e[Fo];
}
function Lo(e, t) {
	let { configuration: n } = t.codecs.find(eo) ?? {}, r = {
		encode_chunk_key: Ya(t.chunk_key_encoding),
		TypedArray: Ja(t.data_type),
		fill_value: t.fill_value
	};
	if (n) {
		let i = Po(n.codecs);
		return {
			...r,
			kind: "sharded",
			chunk_shape: n.chunk_shape,
			codec: To({
				data_type: t.data_type,
				shape: n.chunk_shape,
				codecs: n.codecs
			}),
			get_strides(e) {
				return X(e, i);
			},
			get_chunk_bytes: Ao(e, t.chunk_grid.configuration.chunk_shape, r.encode_chunk_key, n)
		};
	}
	let i = Po(t.codecs);
	return {
		...r,
		kind: "regular",
		chunk_shape: t.chunk_grid.configuration.chunk_shape,
		codec: To({
			data_type: t.data_type,
			shape: t.chunk_grid.configuration.chunk_shape,
			codecs: t.codecs
		}),
		get_strides(e) {
			return X(e, i);
		},
		async get_chunk_bytes(t, n) {
			let i = r.encode_chunk_key(t), a = e.resolve(i).path;
			return e.store.get(a, n);
		}
	};
}
var Ro = class extends jo {
	kind = "array";
	#e;
	[Fo];
	constructor(e, t, n) {
		super(e, t), this.#e = {
			...n,
			fill_value: to(n)
		}, this[Fo] = Lo(this, this.#e);
	}
	get attrs() {
		return this.#e.attributes;
	}
	get shape() {
		return this.#e.shape;
	}
	get chunks() {
		return this[Fo].chunk_shape;
	}
	get dtype() {
		return this.#e.data_type;
	}
	async getChunk(e, t) {
		let n = this[Fo], r = await n.get_chunk_bytes(e, t);
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
		return $a(this.dtype, e);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/util.js
function* zo(e, t, n = 1) {
	t === void 0 && (t = e, e = 0);
	for (let r = e; r < t; r += n) yield r;
}
function* Bo(...e) {
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
function Vo({ start: e, stop: t, step: n }, r) {
	if (n === 0) throw Error("slice step cannot be zero");
	n ??= 1;
	let i = n < 0, [a, o] = i ? [-1, r - 1] : [0, r];
	return e === null ? e = i ? o : a : e < 0 ? (e += r, e < a && (e = a)) : e > o && (e = o), t === null ? t = i ? a : o : t < 0 ? (t += r, t < a && (t = a)) : t > o && (t = o), [
		e,
		t,
		n
	];
}
function Ho(e, t, n = null) {
	return t === void 0 && (t = e, e = null), {
		start: e,
		stop: t,
		step: n
	};
}
function Uo() {
	let e = [];
	return {
		add: (t) => e.push(t()),
		onIdle: () => Promise.all(e)
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/indexer.js
var Wo = class extends Error {
	constructor(e) {
		super(e), this.name = "IndexError";
	}
};
function Go(e, t) {
	throw new Wo(`too many indicies for array; expected ${t.length}, got ${e.length}`);
}
function Ko(e) {
	throw new Wo(`index out of bounds for dimension with length ${e}`);
}
function qo() {
	throw new Wo("only slices with step >= 1 are supported");
}
function Jo(e, t) {
	e.length > t.length && Go(e, t);
}
function Yo(e, t) {
	return e = Math.trunc(e), e < 0 && (e = t + e), (e >= t || e < 0) && Ko(t), e;
}
var Xo = class {
	dim_sel;
	dim_len;
	dim_chunk_len;
	nitems;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		e = Yo(e, t), this.dim_sel = e, this.dim_len = t, this.dim_chunk_len = n, this.nitems = 1;
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.dim_sel / this.dim_chunk_len), t = e * this.dim_chunk_len;
		yield {
			dim_chunk_ix: e,
			dim_chunk_sel: this.dim_sel - t
		};
	}
}, Zo = class {
	start;
	stop;
	step;
	dim_len;
	dim_chunk_len;
	nitems;
	nchunks;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		let [r, i, a] = Vo(e, t);
		this.start = r, this.stop = i, this.step = a, this.step < 1 && qo(), this.dim_len = t, this.dim_chunk_len = n, this.nitems = Math.max(0, Math.ceil((this.stop - this.start) / this.step)), this.nchunks = Math.ceil(this.dim_len / this.dim_chunk_len);
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.start / this.dim_chunk_len), t = Math.ceil(this.stop / this.dim_chunk_len);
		for (let n of zo(e, t)) {
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
function Qo(e, t) {
	let n = [];
	return e === null ? n = t.map((e) => Ho(null)) : Array.isArray(e) && (n = e.map((e) => e ?? Ho(null))), Jo(n, t), n;
}
var $o = class {
	dim_indexers;
	shape;
	constructor({ selection: e, shape: t, chunk_shape: n }) {
		this.dim_indexers = Qo(e, t).map((e, r) => new (typeof e == "number" ? Xo : Zo)({
			dim_sel: e,
			dim_len: t[r],
			dim_chunk_len: n[r]
		})), this.shape = this.dim_indexers.filter((e) => e instanceof Zo).map((e) => e.nitems);
	}
	*[Symbol.iterator]() {
		for (let e of Bo(...this.dim_indexers)) yield {
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
function es(e, t) {
	return "get" in e ? e.get(t) : e[t];
}
async function ts(e, t, n, r) {
	let i = Io(e), a = new $o({
		selection: t,
		shape: e.shape,
		chunk_shape: e.chunks
	}), o = r.prepare(new i.TypedArray(a.shape.reduce((e, t) => e * t, 1)), a.shape, i.get_strides(a.shape)), s = n.create_queue?.() ?? Uo();
	for (let { chunk_coords: t, mapping: i } of a) s.add(async () => {
		let { data: a, shape: s, stride: c } = await e.getChunk(t, n.opts), l = r.prepare(a, s, c);
		r.set_from_chunk(o, l, i);
	});
	return await s.onIdle(), a.shape.length === 0 ? es(o.data, 0) : o;
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/ops.js
function ns(e, t = 0, n) {
	let r = n ?? e.length - t;
	return {
		length: r,
		subarray(n, i = r) {
			return ns(e, t + n, i - n);
		},
		set(n, r = 0) {
			for (let i = 0; i < n.length; i++) e[t + r + i] = n.get(i);
		},
		get(n) {
			return e[t + n];
		}
	};
}
function rs(e) {
	return globalThis.Array.isArray(e.data) ? {
		data: ns(e.data),
		stride: e.stride,
		bytes_per_element: 1
	} : {
		data: new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength),
		stride: e.stride,
		bytes_per_element: e.data.BYTES_PER_ELEMENT
	};
}
function is(e) {
	return "chars" in e ? e.constructor.bind(null, e.chars) : e.constructor;
}
function as(e, t) {
	if (globalThis.Array.isArray(e.data)) return ns([t]);
	let n = new (is(e.data))([t]);
	return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
var os = {
	prepare(e, t, n) {
		return {
			data: e,
			shape: t,
			stride: n
		};
	},
	set_scalar(e, t, n) {
		let r = rs(e);
		ls(r, t, as(e, n), r.bytes_per_element);
	},
	set_from_chunk(e, t, n) {
		let r = rs(e);
		us(r, rs(t), r.bytes_per_element, n);
	}
};
async function ss(e, t = null, n = {}) {
	return ts(e, t, n, os);
}
function cs(e, t, n) {
	return n < 0 && t < e ? Math.floor((e - t - 1) / -n) + 1 : e < t ? Math.floor((t - e - 1) / n) + 1 : 0;
}
function ls(e, t, n, r) {
	if (t.length === 0) {
		e.data.set(n, 0);
		return;
	}
	let [i, ...a] = t, [o, ...s] = e.stride;
	if (typeof i == "number") {
		ls({
			data: e.data.subarray(o * i * r),
			stride: s
		}, a, n, r);
		return;
	}
	let [c, l, u] = i, d = cs(c, l, u);
	if (a.length === 0) for (let t = 0; t < d; t++) e.data.set(n, o * (c + u * t) * r);
	else for (let t = 0; t < d; t++) ls({
		data: e.data.subarray(o * (c + u * t) * r),
		stride: s
	}, a, n, r);
}
function us(e, t, n, r) {
	let [i, ...a] = r, [o, ...s] = e.stride, [c, ...l] = t.stride;
	if (i.from === null) {
		if (a.length === 0) {
			e.data.set(t.data.subarray(0, n), i.to * n);
			return;
		}
		us({
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
		us(e, {
			data: t.data.subarray(c * i.from * n),
			stride: l
		}, n, a);
		return;
	}
	let [u, d, f] = i.to, [p, m, h] = i.from, g = cs(u, d, f);
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
	} else for (let r = 0; r < g; r++) us({
		data: e.data.subarray(o * (u + r * f) * n),
		stride: s
	}, {
		data: t.data.subarray(c * (p + r * h) * n),
		stride: l
	}, n, a);
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/open.js
var ds = fs();
function fs() {
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
async function ps(e) {
	let t = await e.store.get(e.resolve(".zattrs").path);
	return t ? Ka(t) : {};
}
async function ms(e, t = {}) {
	let n = "store" in e ? e : new jo(e), r = {};
	return (t.attrs ?? !0) && (r = await ps(n)), t.kind === "array" ? hs(n, r) : t.kind === "group" ? gs(n, r) : hs(n, r).catch((e) => (no(e, Q), gs(n, r)));
}
async function hs(e, t) {
	let { path: n } = e.resolve(".zarray"), r = await e.store.get(n);
	if (!r) throw new Q("v2 array", { cause: new Oo(n) });
	return ds.increment(e.store, "v2"), new Ro(e.store, e.path, Za(Ka(r), t));
}
async function gs(e, t) {
	let { path: n } = e.resolve(".zgroup"), r = await e.store.get(n);
	if (!r) throw new Q("v2 group", { cause: new Oo(n) });
	return ds.increment(e.store, "v2"), new No(e.store, e.path, Qa(Ka(r), t));
}
async function _s(e) {
	let { store: t, path: n } = e.resolve("zarr.json"), r = await e.store.get(n);
	if (!r) throw new Q("v3 array or group", { cause: new Oo(n) });
	let i = Ka(r);
	return i.node_type === "array" && (i.fill_value = to(i)), i.node_type === "array" ? new Ro(t, e.path, i) : new No(t, e.path, i);
}
async function vs(e, t = {}) {
	let n = "store" in e ? e : new jo(e), r = await _s(n);
	if (ds.increment(n.store, "v3"), t.kind === void 0 || t.kind === "array" && r instanceof Ro || t.kind === "group" && r instanceof No) return r;
	let i = r instanceof Ro ? "array" : "group";
	throw Error(`Expected node of kind ${t.kind}, found ${i}.`);
}
async function $(e, t = {}) {
	let n = "store" in e ? e.store : e, r = ds.version_max(n), i = r === "v2" ? $.v2 : $.v3, a = r === "v2" ? $.v3 : $.v2;
	return i(e, t).catch((n) => (no(n, Q), a(e, t)));
}
$.v2 = ms, $.v3 = vs;
//#endregion
//#region ../app/src/sampleView/metadata/adapters/zarrMetadataSourceAdapter.js
function ys(e) {
	return e.startsWith("/") ? e.slice(1) : e;
}
function bs(e) {
	if (e.shape.length !== 1) throw Error("Expected a one-dimensional Zarr selection result.");
	let t = e.shape[0], n = e.stride[0], r = [];
	for (let i = 0; i < t; i++) {
		let t = i * n;
		typeof e.data?.get == "function" ? r.push(e.data.get(t)) : r.push(e.data[t]);
	}
	return r;
}
function xs(e, t, n, r = {}) {
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
var Ss = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e, t = {}) {
		this.#e = e, this.#t = e.backend, this.#n = new Ha(ee(t.baseUrl, this.#t.url)), this.#s = new Set(e.excludeColumns ?? []);
	}
	async listColumns(e) {
		return (await this.#l(e)).filter((e) => !this.#g(e)).map((e) => ({ id: e }));
	}
	async listSampleIds(e) {
		return this.#u(e);
	}
	async listSamples(e = {}, t) {
		if (e.displayNameField) throw Error("Zarr metadata sources do not support displayNameField; sample labels use row IDs.");
		return (await this.#u(t)).map((e) => ({
			id: e,
			displayName: e
		}));
	}
	async listIdentifierExamples(e, t) {
		let n = this.#t.identifiers ?? [{
			name: "column",
			path: this.#t.matrix?.columnIdsPath ?? "var_names",
			primary: !0
		}];
		return Promise.all(n.map(async (n) => {
			let r = await this.#h(n.path, t), i = ue(r, e);
			return Cs({
				name: n.name,
				primary: n.primary,
				caseInsensitive: n.caseInsensitive,
				stripVersionSuffix: n.stripVersionSuffix,
				examples: i
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
			let c = bs(await ss(n, [Ho(null), e], t ? { opts: { signal: t } } : void 0));
			for (let e = 0; e < o.length; e++) {
				let t = a.get(o[e]);
				s[e][r] = c[t];
			}
		}
		let c = ce(e.sampleIds, s);
		if ("error" in c) {
			let e = c.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		let l = fe(this.#e, e.columnIds), u = e.groupPath ?? this.#e.groupPath, d = oe(s, l, this.#e.attributeGroupSeparator, u);
		return e.replace !== void 0 && (d.replace = e.replace), d;
	}
	async #c() {
		let e = ys(this.#t.matrix?.valuesPath ?? "X");
		return $(Mo(this.#n).resolve(e), { kind: "array" });
	}
	async #l(e) {
		return this.#r ||= this.#h(this.#t.matrix?.columnIdsPath ?? "var_names", e), this.#r;
	}
	async #u(e) {
		return this.#i ||= this.#m(this.#t.matrix?.rowIdsPath ?? "obs_names", e).then((e) => e.map((e) => String(e ?? ""))), this.#i;
	}
	async #d(e) {
		return this.#a ||= this.#l(e).then((e) => new Map(e.map((e, t) => [e, t]))), this.#a;
	}
	async #f(e) {
		return this.#o ||= this.#p(e), this.#o;
	}
	async #p(e) {
		let t = await this.#l(e), n = /* @__PURE__ */ new Map();
		for (let e = 0; e < t.length; e++) this.#g(t[e]) || xs(n, t[e], e);
		for (let r of this.#t.identifiers ?? []) {
			let i = await this.#m(r.path, e);
			if (i.length !== t.length) throw Error("Identifier array \"" + r.path + "\" does not match the number of matrix columns.");
			for (let e = 0; e < i.length; e++) this.#g(t[e]) || xs(n, i[e], e, { stripVersionSuffix: r.stripVersionSuffix });
		}
		return n;
	}
	async #m(e, t) {
		return bs(await ss(await $(Mo(this.#n).resolve(ys(e)), { kind: "array" }), [Ho(null)], t ? { opts: { signal: t } } : void 0));
	}
	async #h(e, t) {
		return (await this.#m(e, t)).map((e) => String(e));
	}
	#g(e) {
		return this.#s.has(e);
	}
};
function Cs(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAdapters.js
async function ws(e, t) {
	try {
		return await p(e, { signal: t });
	} catch (t) {
		if (t instanceof u && t.kind === "json") throw Error("Invalid JSON in metadata source import " + e + ": " + t.message, { cause: t });
		let n = t instanceof Error ? t.message : String(t);
		throw Error("Could not load metadata source import from " + e + ": " + n, { cause: t });
	}
}
function Ts(e) {
	if ("columnDefs" in e) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"columnDefs\". Use \"attributes\" instead.");
	}
	if (e.backend.backend === "zarr" && "synonymIndex" in e.backend) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"backend.synonymIndex\". Use \"backend.identifiers\" instead.");
	}
}
function Es(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Metadata source import " + t + " must resolve to a single source object.");
	if ("import" in e) throw Error("Nested metadata source imports are not supported: " + t);
	if ("backend" in e) return e;
	throw Error("Metadata source import \"" + t + "\" is missing required property \"backend\".");
}
function Ds(e, t) {
	if (e.backend.backend === "data") {
		let n = e.backend.data;
		return n && typeof n == "object" && !Array.isArray(n) && "url" in n && typeof n.url == "string" ? {
			...e,
			backend: {
				...e.backend,
				data: {
					...n,
					url: v(t, n.url)
				}
			}
		} : e;
	}
	return "url" in e.backend && typeof e.backend.url == "string" ? {
		...e,
		backend: {
			...e.backend,
			url: v(t, e.backend.url)
		}
	} : e;
}
async function Os(e, t = {}) {
	let n = e?.sources ?? [], r = t.loadJson ?? ws;
	return Promise.all(n.map(async (e) => {
		if (!("import" in e)) return Ts(e), e;
		let n = v(t.baseUrl, e.import.url), i = Ds(Es(await r(n, t.signal), n), n);
		return Ts(i), i;
	}));
}
function ks(e, t) {
	if (e.length === 0) throw Error("No metadata sources are configured.");
	if (t !== void 0) {
		let n = e.filter((e) => e.id === t);
		if (n.length === 0) throw Error("Metadata source \"" + t + "\" was not found.");
		if (n.length > 1) throw Error("Metadata source id \"" + t + "\" is not unique.");
		return n[0];
	}
	if (e.length !== 1) throw Error("Metadata source id is required when multiple sources are configured.");
	return e[0];
}
async function As(e, t = {}) {
	if (e.backend.backend === "data") return new pe(e, t);
	if (e.backend.backend === "figwig") {
		let { default: n } = await import("./figWigMetadataSourceAdapter-CiDTGy0M.js");
		return new n(e, t);
	}
	if (e.backend.backend === "zarr") return new Ss(e, t);
	throw Error("Metadata backend \"" + e.backend.backend + "\" is not implemented yet.");
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceInitialLoad.js
function js(e) {
	return e.initialLoad === void 0 ? e.backend.backend === "data" && "*" : e.initialLoad;
}
async function Ms(e, t, n) {
	let r = js(e);
	return r === !1 ? [] : r === "*" ? (await t.listColumns(n)).map((e) => e.id) : (await t.resolveColumns(r, n)).columnIds;
}
function Ns(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 100) t.push(e.slice(n, n + 100));
	return t;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceSummaries.js
var Ps = 3;
async function Fs(e, t = {}) {
	let n = e.filter((e) => js(e) === !1);
	return (await Promise.allSettled(n.map((e) => Is(e, t)))).map((e) => {
		if (e.status === "rejected") throw e.reason;
		return e.value;
	});
}
async function Is(e, t) {
	if (!t.getAdapter) throw Error("Metadata source summary adapter is required.");
	let n = await (await t.getAdapter(e)).listIdentifierExamples(t.maxExamples ?? Ps, t.signal);
	return Rs({
		sourceId: e.id,
		name: e.name,
		description: e.description,
		attributeDefaults: Ls(e),
		identifiers: n
	});
}
function Ls(e) {
	let t = e.attributes?.[""];
	if (t) return Rs({
		dataType: t.type,
		description: t.description
	});
}
function Rs(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntimeState.js
var zs = /* @__PURE__ */ new WeakMap(), Bs = class {
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
			delete e.signal, this.#n = Os(this.#e.spec.metadata, {
				...e,
				baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl()
			}).catch((e) => {
				throw this.#n = void 0, e;
			});
		}
		return this.#n;
	}
	async getSource(e) {
		return ks(await this.getSources(), e);
	}
	getAdapter(e) {
		let t = this.#r.get(e);
		return t || (t = As(e, { baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl() }).catch((t) => {
			throw this.#r.delete(e), t;
		}), this.#r.set(e, t)), t;
	}
	getAgentSummaries(e) {
		return this.#i ||= this.getSources().then((t) => Fs(t, {
			getAdapter: (e) => this.getAdapter(e),
			signal: e
		})).catch((e) => {
			throw this.#i = void 0, e;
		}), this.#i;
	}
};
function Vs(e, t) {
	return new Bs(e, t);
}
function Hs(e) {
	let t = zs.get(e);
	return t || (t = Vs(e), zs.set(e, t)), t;
}
//#endregion
//#region ../app/src/sampleView/unknownAttributeInfoError.js
var Us = class extends Error {
	constructor(e) {
		super(e), this.name = "UnknownAttributeInfoError";
	}
};
//#endregion
//#region ../app/src/charts/chartDialogUtils.js
async function Ws(e, t, n, r = ".chart-container") {
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
async function Gs(e, t) {
	let n = t.namedData.length > 0 ? {
		...t.spec,
		datasets: {
			...t.spec.datasets,
			...Object.fromEntries(t.namedData.map((e) => [e.name, e.rows]))
		}
	} : t.spec;
	return f(e, n);
}
//#endregion
//#region ../app/src/agentApi/index.js
var Ks = /* @__PURE__ */ o({ createAgentApi: () => qs });
function qs(e) {
	return {
		getSampleHierarchy() {
			return e.getSampleView()?.sampleHierarchy;
		},
		async getMetadataSourceSummaries(t) {
			return e.runCohortOperation(() => {
				let n = e.getSampleView();
				return n ? Hs(n).getAgentSummaries(t) : Promise.resolve([]);
			});
		},
		getAttributeInfo(t) {
			let n = e.getSampleView();
			if (n) try {
				return n.compositeAttributeInfoSource.getAttributeInfo(t);
			} catch (e) {
				if (e instanceof Us) return;
				throw e;
			}
		},
		materializeAttributeIdentifier(t) {
			let n = e.getSampleView();
			if (!n || !Ys(t)) return t;
			let r = t.specifier;
			return {
				...t,
				specifier: {
					...r,
					interval: Kn(n, r.interval)
				}
			};
		},
		getSampleViewScopedParamConfig(t) {
			let n = e.getSampleView();
			if (n?.paramRuntime?.paramConfigs) return n.paramRuntime.paramConfigs.get(t);
		},
		getDatumSearch() {
			return e.datumSearch;
		},
		getViewApi() {
			return e.views;
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
			if (n) return ae(n, t);
		},
		getSelectionFeatureFieldValues(t, n, r) {
			let i = e.genomeSpy.viewRoot;
			if (!i) return;
			let a = ae(i, t);
			if (a) return Zn(a, n, r);
		},
		getActionHistory() {
			return e.provenance.getActionHistory();
		},
		getActionInfo(t) {
			return e.provenance.getActionInfo(t);
		},
		async submitIntentActions(t, n) {
			return e.runCohortOperation(() => {
				if (!e.getSampleView() && t.some((e) => e.type.startsWith("sampleView/"))) throw Error("Sample actions require an active SampleView.");
				return e.intentPipeline.submit(t, n);
			});
		},
		getPresentProvenanceState() {
			return e.provenance.getPresentState();
		},
		async buildSampleAttributePlot(t) {
			let n = e.getSampleView();
			if (!n) throw Error("No sample view is available.");
			let r = n.compositeAttributeInfoSource, i = t.plotType;
			if (i === "bar" || i === "barplot") {
				let e = await Js(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "nominal" && e.type !== "ordinal") throw Error("Bar plots require a categorical sample attribute.");
				return wa({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			}
			if (i === "boxplot") {
				let e = await Js(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "quantitative") throw Error("Box plots require a quantitative sample attribute.");
				return Ta({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			}
			if (i === "scatterplot") {
				let e = await Js(r, t.xAttribute, t.xAttributeLabel), i = await Js(r, t.yAttribute, t.yAttributeLabel);
				if (!e || !i) throw Error("Could not resolve one of the requested sample attributes.");
				if (e.type !== "quantitative" || i.type !== "quantitative") throw Error("Scatter plots require two quantitative sample attributes.");
				let a = Ia(n);
				return Ea({
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
			e.runCohortOperation(() => e.store.dispatch(Dn.actions.setVisibility({
				key: F(t),
				visibility: n
			})));
		},
		jumpToProvenanceState(t) {
			return e.runCohortOperation(() => {
				let n = e.provenance.getCurrentIndex();
				return e.provenance.activateState(t), e.provenance.getCurrentIndex() !== n;
			});
		},
		jumpToInitialProvenanceState() {
			return e.runCohortOperation(() => {
				let t = e.provenance.getCurrentIndex();
				return e.provenance.activateInitialState(), e.provenance.getCurrentIndex() !== t;
			});
		}
	};
}
async function Js(e, t, n) {
	let r;
	try {
		r = e.getAttributeInfo(t);
	} catch (e) {
		if (e instanceof Us) return;
		throw e;
	}
	if (r) return r.ensureAvailability && await r.ensureAvailability({}), n ? {
		...r,
		title: n,
		emphasizedName: n
	} : r;
}
function Ys(e) {
	let t = e.specifier;
	return e.type === "VALUE_AT_LOCUS" && typeof t == "object" && !!t && "interval" in t && Gn(t.interval);
}
//#endregion
export { Pn as $, si as A, Sr as B, wi as C, Di as D, xi as E, V as F, Kn as G, Qn as H, ri as I, Wn as J, Gn as K, Lr as L, li as M, H as N, Si as O, ai as P, Nn as Q, _r as R, Hi as S, Ei as T, Yn as U, ir as V, qn as W, zn as X, Ln as Y, Rn as Z, Ji as _, Hs as a, Dn as at, Ki as b, Ms as c, vn as ct, wa as d, Fn as et, Ta as f, Ii as g, Zi as h, Us as i, An as it, oi as j, di as k, As as l, Se as lt, Xi as m, Ws as n, On as nt, Ns as o, un as ot, Ea as p, Un as q, Gs as r, jn as rt, js as s, Qt as st, Ks as t, Bn as tt, Ia as u, K as v, ki as w, qi as x, Gi as y, xr as z };
