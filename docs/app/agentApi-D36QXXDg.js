import { n as e } from "./rolldown-runtime-DF993M8W.js";
import { B as t, F as n, K as r, V as i, _t as a, at as o, ct as s, dt as c, it as l, ot as u, rt as d, t as f, ut as p } from "./src-BiBK3iof.js";
import { Br as m, F as h, Hr as g, Jr as _, Jt as ee, L as te, Lr as ne, Vr as v, Yt as re, _ as ie, g as ae, gr as oe, jt as se, l as ce, o as le, y as ue } from "./viewIdentityRegistry-EH5-Noyz.js";
//#region ../../node_modules/redux/dist/redux.mjs
function y(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var de = typeof Symbol == "function" && Symbol.observable || "@@observable", fe = () => Math.random().toString(36).substring(7).split("").join("."), pe = {
	INIT: `@@redux/INIT${/* @__PURE__ */ fe()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ fe()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${fe()}`
};
function me(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function he(e, t, n) {
	if (typeof e != "function") throw Error(y(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(y(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(y(1));
		return n(he)(e, t);
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
		if (!me(e)) throw Error(y(7));
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
		r = e, f({ type: pe.REPLACE });
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
			[de]() {
				return this;
			}
		};
	}
	return f({ type: pe.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[de]: m
	};
}
function ge(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: pe.INIT }) === void 0) throw Error(y(12));
		if (n(void 0, { type: pe.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(y(13));
	});
}
function _e(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		ge(n);
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
function ve(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function ye(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(y(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = ve(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function be(e) {
	return me(e) && "type" in e && typeof e.type == "string";
}
//#endregion
//#region ../../node_modules/immer/dist/immer.mjs
var xe = Symbol.for("immer-nothing"), Se = Symbol.for("immer-draftable"), b = Symbol.for("immer-state");
function x(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var S = Object, C = S.getPrototypeOf, Ce = "constructor", we = "prototype", Te = "configurable", Ee = "enumerable", De = "writable", w = "value", T = (e) => !!e && !!e[b];
function E(e) {
	return e ? Ae(e) || Le(e) || !!e[Se] || !!e[Ce]?.[Se] || Re(e) || ze(e) : !1;
}
var Oe = S[we][Ce].toString(), ke = /* @__PURE__ */ new WeakMap();
function Ae(e) {
	if (!e || !Be(e)) return !1;
	let t = C(e);
	if (t === null || t === S[we]) return !0;
	let n = S.hasOwnProperty.call(t, Ce) && t[Ce];
	if (n === Object) return !0;
	if (!O(n)) return !1;
	let r = ke.get(n);
	return r === void 0 && (r = Function.toString.call(n), ke.set(n, r)), r === Oe;
}
function je(e) {
	return T(e) || x(15, e), e[b].base_;
}
function Me(e, t, n = !0) {
	D(e) === 0 ? (n ? Reflect.ownKeys(e) : S.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function D(e) {
	let t = e[b];
	return t ? t.type_ : Le(e) ? 1 : Re(e) ? 2 : ze(e) ? 3 : 0;
}
var Ne = (e, t, n = D(e)) => n === 2 ? e.has(t) : S[we].hasOwnProperty.call(e, t), Pe = (e, t, n = D(e)) => n === 2 ? e.get(t) : e[t], Fe = (e, t, n, r = D(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Ie(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Le = Array.isArray, Re = (e) => e instanceof Map, ze = (e) => e instanceof Set, Be = (e) => typeof e == "object", O = (e) => typeof e == "function", Ve = (e) => typeof e == "boolean";
function He(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var k = (e) => e.copy_ || e.base_, Ue = (e) => e.modified_ ? e.copy_ : e.base_;
function We(e, t) {
	if (Re(e)) return new Map(e);
	if (ze(e)) return new Set(e);
	if (Le(e)) return Array[we].slice.call(e);
	let n = Ae(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = S.getOwnPropertyDescriptors(e);
		delete t[b];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[De] === !1 && (a[De] = !0, a[Te] = !0), (a.get || a.set) && (t[i] = {
				[Te]: !0,
				[De]: !0,
				[Ee]: a[Ee],
				[w]: e[i]
			});
		}
		return S.create(C(e), t);
	} else {
		let t = C(e);
		if (t !== null && n) return { ...e };
		let r = S.create(t);
		return S.assign(r, e);
	}
}
function Ge(e, t = !1) {
	return Je(e) || T(e) || !E(e) ? e : (D(e) > 1 && S.defineProperties(e, {
		set: qe,
		add: qe,
		clear: qe,
		delete: qe
	}), S.freeze(e), t && Me(e, (e, t) => {
		Ge(t, !0);
	}, !1), e);
}
function Ke() {
	x(2);
}
var qe = { [w]: Ke };
function Je(e) {
	return e === null || !Be(e) || S.isFrozen(e);
}
var Ye = "MapSet", Xe = "Patches", Ze = "ArrayMethods", Qe = {};
function A(e) {
	let t = Qe[e];
	return t || x(0, e), t;
}
var $e = (e) => !!Qe[e], j, et = () => j, tt = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: $e(Ye) ? A(Ye) : void 0,
	arrayMethodsPlugin_: $e(Ze) ? A(Ze) : void 0
});
function nt(e, t) {
	t && (e.patchPlugin_ = A(Xe), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function rt(e) {
	it(e), e.drafts_.forEach(ot), e.drafts_ = null;
}
function it(e) {
	e === j && (j = e.parent_);
}
var at = (e) => j = tt(j, e);
function ot(e) {
	let t = e[b];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function st(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[b].modified_ && (rt(t), x(4)), E(e) && (e = ct(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[b].base_, e, t);
	} else e = ct(t, n);
	return lt(t, e, !0), rt(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === xe ? void 0 : e;
}
function ct(e, t) {
	if (Je(t)) return t;
	let n = t[b];
	if (!n) return _t(t, e.handledSet_, e);
	if (!dt(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		ht(n, e);
	}
	return n.copy_;
}
function lt(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ge(t, n);
}
function ut(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var dt = (e, t) => e.scope_ === t, ft = [];
function pt(e, t, n, r) {
	let i = k(e), a = e.type_;
	if (r !== void 0 && Pe(i, r, a) === t) {
		Fe(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Me(i, (e, n) => {
			if (T(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? ft;
	for (let e of o) Fe(i, e, n, a);
}
function mt(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !dt(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = Ue(i);
		pt(e, i.draft_ ?? i, a, n), ht(i, r);
	});
}
function ht(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		ut(e);
	}
}
function gt(e, t, n) {
	let { scope_: r } = e;
	if (T(n)) {
		let i = n[b];
		dt(i, r) && i.callbacks_.push(function() {
			wt(e), pt(e, n, Ue(i), t);
		});
	} else E(n) && e.callbacks_.push(function() {
		let i = k(e);
		e.type_ === 3 ? i.has(n) && _t(n, r.handledSet_, r) : Pe(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && _t(Pe(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function _t(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || T(e) || t.has(e) || !E(e) || Je(e) ? e : (t.add(e), Me(e, (r, i) => {
		if (T(i)) {
			let t = i[b];
			dt(t, n) && (Fe(e, r, Ue(t), e.type_), ut(t));
		} else E(i) && _t(i, t, n);
	}), e);
}
function vt(e, t) {
	let n = Le(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : et(),
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
	}, i = r, a = yt;
	n && (i = [r], a = M);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var yt = {
	get(e, t) {
		if (t === b) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = k(e);
		if (!Ne(i, t, e.type_)) return xt(e, i, t);
		let a = i[t];
		if (e.finalized_ || !E(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && He(t)) return a;
		if (a === bt(e.base_, t)) {
			wt(e);
			let n = e.type_ === 1 ? +t : t, r = Et(e.scope_, a, e, n);
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
		let r = St(k(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = bt(k(e), t), i = r?.[b];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (Ie(n, r) && (n !== void 0 || Ne(e.base_, t, e.type_))) return !0;
			wt(e), Ct(e);
		}
		return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) ? !0 : (e.copy_[t] = n, e.assigned_.set(t, !0), gt(e, t, n), !0);
	},
	deleteProperty(e, t) {
		return wt(e), bt(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Ct(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = k(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[De]: !0,
			[Te]: e.type_ !== 1 || t !== "length",
			[Ee]: r[Ee],
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
for (let e in yt) {
	let t = yt[e];
	M[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
M.deleteProperty = function(e, t) {
	return M.set.call(this, e, t, void 0);
}, M.set = function(e, t, n) {
	return yt.set.call(this, e[0], t, n, e[0]);
};
function bt(e, t) {
	let n = e[b];
	return (n ? k(n) : e)[t];
}
function xt(e, t, n) {
	let r = St(t, n);
	return r ? w in r ? r[w] : r.get?.call(e.draft_) : void 0;
}
function St(e, t) {
	if (!(t in e)) return;
	let n = C(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = C(n);
	}
}
function Ct(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && Ct(e.parent_));
}
function wt(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), We(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Tt = class {
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
				let i = at(this), a = Et(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? rt(i) : it(i);
				}
				return nt(i, n), st(r, i);
			} else if (!e || !Be(e)) {
				if (r = t(e), r === void 0 && (r = e), r === xe && (r = void 0), this.autoFreeze_ && Ge(r, !0), n) {
					let t = [], i = [];
					A(Xe).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			} else x(1, e);
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
		}, Ve(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Ve(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Ve(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		E(e) || x(8), T(e) && (e = Dt(e));
		let t = at(this), n = Et(t, e, void 0);
		return n[b].isManual_ = !0, it(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[b];
		(!n || !n.isManual_) && x(9);
		let { scope_: r } = n;
		return nt(r, t), st(void 0, r);
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
		let r = A(Xe).applyPatches_;
		return T(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function Et(e, t, n, r) {
	let [i, a] = Re(t) ? A(Ye).proxyMap_(t, n) : ze(t) ? A(Ye).proxySet_(t, n) : vt(t, n);
	return (n?.scope_ ?? et()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? mt(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Dt(e) {
	return T(e) || x(10, e), Ot(e);
}
function Ot(e) {
	if (!E(e) || Je(e)) return e;
	let t = e[b], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = We(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = We(e, !0);
	return Me(n, (e, t) => {
		Fe(n, e, Ot(t));
	}, r), t && (t.finalized_ = !1), n;
}
var kt = new Tt().produce;
//#endregion
//#region ../../node_modules/reselect/dist/reselect.mjs
function At(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function jt(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var Mt = (e) => Array.isArray(e) ? e : [e];
function Nt(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return jt(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Pt(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var Ft = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, It = typeof WeakRef > "u" ? Ft : WeakRef, Lt = 0, Rt = 1;
function zt() {
	return {
		s: Lt,
		v: void 0,
		o: null,
		p: null
	};
}
function Bt(e) {
	return e instanceof It ? e.deref() : e;
}
function Vt(e, t = {}) {
	let n = zt(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = zt(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = zt(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === Rt) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = Bt(i);
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? /* @__PURE__ */ new It(c) : c;
		}
		return s.s = Rt, s.v = c, c;
	}
	return o.clearCache = () => {
		n = zt(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function Ht(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), At(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = Vt, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = Mt(c), f = Mt(u), p = Nt(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let e = Pt(p, arguments);
			return i = m.apply(null, e), i;
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
var Ut = /* @__PURE__ */ Ht(Vt);
//#endregion
//#region ../../node_modules/redux-thunk/dist/redux-thunk.mjs
function Wt(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var Gt = Wt(), Kt = Wt, qt = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? ve : ve.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function Jt(e, t) {
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
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => be(t) && t.type === e, n;
}
var Yt = class e extends Array {
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
function Xt(e) {
	return E(e) ? kt(e, () => {}) : e;
}
function Zt(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function Qt(e) {
	return typeof e == "boolean";
}
var $t = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new Yt();
	return t && (Qt(t) ? a.push(Gt) : a.push(Kt(t.extraArgument))), a;
}, en = "RTK_autoBatch", tn = (e) => (t) => {
	setTimeout(t, e);
}, nn = (e, t) => (n) => {
	let r = !1, i = () => {
		r || (r = !0, cancelAnimationFrame(a), clearTimeout(o), n());
	}, a = e(i), o = setTimeout(i, t);
}, rn = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? nn(window.requestAnimationFrame, 100) : tn(10) : e.type === "callback" ? e.queueNotification : tn(e.timeout), l = () => {
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
				return i = !e?.meta?.[en], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, an = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new Yt(e);
	return n && r.push(rn(typeof n == "object" ? n : void 0)), r;
};
function on(e) {
	let t = $t(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (me(n)) c = _e(n);
	else throw Error(N(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = ve;
	i && (u = qt({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = an(ye(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return he(c, o, p);
}
function sn(e) {
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
function cn(e) {
	return typeof e == "function";
}
function ln(e, t) {
	let [n, r, i] = sn(t), a;
	if (cn(e)) a = () => Xt(e());
	else {
		let t = Xt(e);
		a = () => t;
	}
	function o(e = a(), t) {
		let o = [n[t.type], ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e)];
		return o.filter((e) => !!e).length === 0 && (o = [i]), o.reduce((e, n) => {
			if (n) if (T(e)) {
				let r = n(e, t);
				return r === void 0 ? e : r;
			} else if (E(e)) return kt(e, (e) => n(e, t));
			else {
				let r = n(e, t);
				if (r === void 0) {
					if (e === null) return e;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return r;
			}
			return e;
		}, e);
	}
	return o.getInitialState = a, o;
}
var un = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function dn(e, t) {
	return `${e}/${t}`;
}
function fn({ creators: e } = {}) {
	let t = e?.asyncThunk?.[un];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(N(11));
		let i = (typeof e.reducers == "function" ? e.reducers(hn()) : e.reducers) || {}, a = Object.keys(i), o = {
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
				type: dn(n, r),
				createNotation: typeof e.reducers == "function"
			};
			_n(a) ? yn(o, a, s, t) : gn(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? sn(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return ln(e.initialState, (e) => {
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
				return i === void 0 && n && (i = Zt(d, r, m)), i;
			}
			function i(t = l) {
				return Zt(Zt(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = pn(a, t, () => Zt(d, t, m), n);
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
function pn(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var mn = /* @__PURE__ */ fn();
function hn() {
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
function gn({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !vn(r)) throw Error(N(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? Jt(e, o) : Jt(e));
}
function _n(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function vn(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function yn({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(N(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || bn,
		pending: s || bn,
		rejected: c || bn,
		settled: l || bn
	});
}
function bn() {}
var xn = "listener", Sn = "completed", Cn = "cancelled";
`${Cn}`, `${Sn}`, `${xn}${Cn}`, `${xn}${Sn}`;
var { assign: wn } = Object, Tn = "listenerMiddleware", En = /* @__PURE__ */ wn(/* @__PURE__ */ Jt(`${Tn}/add`), { withTypes: () => En });
`${Tn}`;
var Dn = /* @__PURE__ */ wn(/* @__PURE__ */ Jt(`${Tn}/remove`), { withTypes: () => Dn });
function N(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region ../app/src/viewSettingsSlice.js
var On = { visibilities: {} }, kn = mn({
	name: "viewSettings",
	initialState: On,
	reducers: {
		setVisibility: (e, t) => {
			e.visibilities[t.payload.key] = t.payload.visibility;
		},
		restoreDefaultVisibility: (e, t) => {
			delete e.visibilities[t.payload];
		},
		restoreDefaultVisibilities: (e, t) => On,
		setViewSettings: (e, t) => ({
			...On,
			...t.payload ? t.payload : {}
		})
	}
});
//#endregion
//#region ../app/src/configurableVisibilityUtils.js
function An(e) {
	return e.spec.configurableVisibility;
}
function jn(e) {
	let t = An(e);
	if (t && typeof t == "object" && typeof t.group == "string" && t.group.length) return t.group;
}
function Mn(e) {
	let t = An(e);
	return t === void 0 ? !(e.layoutParent && e.layoutParent.spec && "layer" in e.layoutParent.spec) : t !== !1;
}
function Nn(e) {
	return An(e) !== void 0;
}
function P(e) {
	return "v:" + JSON.stringify({
		scope: e.scope,
		view: e.view
	});
}
function Pn(e) {
	if (typeof e != "string" || !e.startsWith("v:")) return;
	let t = e.slice(2), n;
	try {
		n = JSON.parse(t);
	} catch {
		return;
	}
	if (!(!n || !Array.isArray(n.scope) || typeof n.view != "string")) return {
		scope: n.scope,
		view: n.view
	};
}
function Fn(e) {
	if (e.explicitName) return P(ce(e));
}
function In(e, t) {
	let n = Fn(t);
	if (n && Wn(e, n)) return e[n];
	let r = t.explicitName;
	if (r && Wn(e, r)) return e[r];
}
function Ln(e) {
	if (!e || !e.visibilities) return { visibilities: {} };
	let t = e.visibilities;
	if (Array.isArray(t)) {
		let e = {};
		for (let n of t) !n || !Array.isArray(n.scope) || typeof n.view != "string" || typeof n.visible == "boolean" && (e[P({
			scope: n.scope,
			view: n.view
		})] = n.visible);
		return { visibilities: e };
	}
	return typeof t == "object" ? { visibilities: { ...t } } : { visibilities: {} };
}
function Rn(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) {
		let t = Pn(e);
		t && n.set(P(t), r);
	}
	let r = Object.keys(t).filter((e) => !Pn(e));
	if (r.length && e) {
		let i = new Set(r), a = /* @__PURE__ */ new Map();
		ue(e, (e) => {
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
					let r = Fn(i);
					!r || n.has(r) || n.set(r, t[e]);
				}
			}
		}
	}
	let i = [];
	for (let [e, t] of n) {
		let n = Pn(e);
		n && i.push({
			scope: n.scope,
			view: n.view,
			visible: t
		});
	}
	return i;
}
function zn(e, t) {
	let n = Rn(e, Hn(e, t.visibilities));
	if (n.length) return { visibilities: n };
}
function Bn(e) {
	let t = /* @__PURE__ */ new Map();
	ue(e, (e) => {
		let n = Fn(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function Vn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Un(e)) {
		let e = r.map((e) => e.selectorKey);
		for (let i of r) t.set(i.selectorKey, {
			groupKey: n,
			memberKeys: e
		});
	}
	return t;
}
function Hn(e, t) {
	let n = { ...t };
	for (let r of Un(e).values()) {
		let e = r.filter((e) => {
			let n = In(t, e.view);
			return n === void 0 ? e.view.isVisibleInSpec() : n;
		});
		if (e.length <= 1) continue;
		let i = e[0].selectorKey;
		for (let e of r) e.selectorKey !== i && (n[e.selectorKey] = !1);
	}
	return n;
}
function Un(e) {
	let t = /* @__PURE__ */ new Map();
	return ue(e, (e) => {
		if (!Mn(e) || !e.explicitName) return;
		let n = jn(e);
		if (!n) return;
		let r = ce(e), i = P(r), a = le(e)?.name && r.scope.length ? r.scope.slice(0, r.scope.length - 1) : r.scope, o = JSON.stringify({
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
function Wn(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../app/src/sampleView/sampleViewTypes.js
function Gn(e) {
	return "aggregation" in e && "interval" in e && (Kn(e.interval) || qn(e.interval));
}
function Kn(e) {
	return Array.isArray(e);
}
function qn(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "selection" && "selector" in e;
}
//#endregion
//#region ../app/src/sampleView/intervalReferenceResolver.js
function Jn(e, t) {
	if (Kn(t)) return t;
	if (!qn(t)) throw Error("Unsupported interval reference.");
	if (!e) throw Error("Cannot resolve selection-backed interval because the root view is unavailable.");
	let n = ae(e, t.selector);
	if (!n) throw Error(`Cannot resolve interval source selection "${t.selector.param}" in import scope ${JSON.stringify(t.selector.scope)}.`);
	let r = n.view.paramRuntime.getValue(t.selector.param);
	if (!r || !re(r) || !ee(r)) throw Error(`Interval source selection "${t.selector.param}" is empty. Create a brush selection before running this action.`);
	let i = r.intervals.x;
	if (!i || i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number") throw Error(`Interval source selection "${t.selector.param}" must provide a numeric x interval.`);
	return [i[0], i[1]];
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFeatureTraversal.js
function Yn(e, t, n, r, i, a, o) {
	let s = !n || t && t.equals(n);
	for (let c of e) {
		let e = t(c);
		if (s) e >= i && e <= a && o(c, 1);
		else {
			let t = Xn(e, n(c), i, a, r);
			t > 0 && o(c, t);
		}
	}
}
function Xn(e, t, n, r, i) {
	return i === "endpoints" ? +(e >= n && e <= r || t >= n && t <= r) : i === "encloses" ? e >= n && t <= r ? t - e : 0 : Math.max(0, Math.min(t, r) - Math.max(e, n));
}
function Zn(e, t) {
	if (!r(t)) return t;
	let n = e.getScale(), i = "genome" in n ? n.genome() : void 0;
	if (!i) throw Error("Encountered a chromosomal locus but no genome is available.");
	return i.toContinuous(t.chrom, t.pos);
}
function Qn(e, t, n) {
	let r = Zn(e, t[0]), i = Zn(e, t[1]);
	if (typeof r != "number" || typeof i != "number") throw Error(n);
	return r <= i ? [r, i] : [i, r];
}
//#endregion
//#region ../app/src/sampleView/selectionFeatureFieldValues.js
function $n(e, t, n) {
	return er(e, {
		type: "selection",
		selector: t
	}, n);
}
function er(e, t, n) {
	let r = e.getCollector(), i = e.getDataAccessor("x");
	if (!r || !i) return;
	let a = Jn(e.getLayoutAncestors().at(-1), t), [o, s] = Qn(e.getScaleResolution("x"), a, "Selection feature summaries require numeric intervals."), c = e.getDataAccessor("x2"), l = e.mark?.defaultHitTestMode ?? "intersects", u = [];
	for (let e of r.facetBatches.values()) Yn(e, i, c, l, o, s, (e) => {
		u.push(e[n]);
	});
	return u;
}
//#endregion
//#region ../app/src/charts/boxplotChart.js
var tr = Object.freeze({
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
function nr(e = {}) {
	let t = {
		...tr,
		...e
	};
	return t.groupTitle === void 0 && (t.groupTitle = t.groupField), t.valueTitle === void 0 && (t.valueTitle = t.valueField), t;
}
function rr(e) {
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
function ir(e = {}) {
	return rr(nr(e));
}
//#endregion
//#region ../app/node_modules/vega-util/build/vega-util.js
function F(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function ar(e) {
	return e.length === 1 ? or(e[0]) : sr(e);
}
var or = (e) => function(t) {
	return t[e];
}, sr = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function cr(e) {
	throw Error(e);
}
function lr(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || cr("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && cr("Access path missing closing bracket: " + e), r && cr("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function ur(e, t, n) {
	let r = lr(e);
	return e = r.length === 1 ? r[0] : e, F((n && n.get || ar)(r), [e], t || e);
}
ur("id");
var dr = F((e) => e, [], "identity");
F(() => 0, [], "zero"), F(() => 1, [], "one"), F(() => !0, [], "true"), F(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
function fr(e) {
	return e === Object(e);
}
function pr(e) {
	return e[e.length - 1];
}
function mr(e) {
	return e == null || e === "" ? null : +e;
}
function hr(e, t, n, r, i) {
	let a = r(e[0]), o = r(pr(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function gr(e, t, n) {
	return hr(e, t, n, mr, dr);
}
function _r(e) {
	return typeof e == "number";
}
function vr(e) {
	return typeof e == "string";
}
//#endregion
//#region ../app/src/utils/predicates/comparison.js
var yr = {
	lt: (e, t) => e < t,
	lte: (e, t) => e <= t,
	eq: (e, t) => e == t,
	gte: (e, t) => e >= t,
	gt: (e, t) => e > t
};
function br(e, t) {
	let n = yr[e];
	return (e) => n(e, t);
}
//#endregion
//#region ../app/src/sampleView/state/groupOperations.js
function xr(e, t, n, r, i) {
	if (r && !n) throw Error("Custom labels need explicit group order!");
	let a = c(e.samples, t), o = n ? n.map((e, t) => ({
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
function Sr(e, t) {
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
function Cr(e, t, n, r) {
	let i = (e) => `Group ${e + 1}`, a = m(n.length - 1).reverse(), o = m(n.length - 1).map((e) => Lr(n[e], n[e + 1])), s = Sr(r, o.length), c = Nr(t, n.slice(1, n.length - 1));
	xr(e, (e) => i(c(e)), a.map(i), a.map((e) => s?.[e] ?? o[e]), a.map((e) => o[e]));
}
function wr(e, t, n, r) {
	Cr(e, t, [
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
function Tr(e, t) {
	let n = Fr(Pr(e.samples, t, [
		0,
		.25,
		.5,
		.75,
		1
	]));
	n.length == 1 && n.push(n[0]), Cr(e, t, n.map((e, t, n) => ({
		operator: t == n.length - 1 ? "lte" : "lt",
		operand: e
	})));
}
function Er(e, t) {
	if (t.length == 0) throw Error("Cannot remove the root sample group.");
	let n = e.groups.findIndex((e) => e.name == t[0]);
	if (n < 0) throw Error("Sample group path not found: " + t.join(" / "));
	if (t.length == 1) e.groups.splice(n, 1);
	else if (t.length > 1) {
		let r = e.groups[n];
		if (q(r)) Er(r, t.slice(1));
		else throw Error("Sample group path does not refer to a nested group: " + t.join(" / "));
	}
}
function Dr(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	Mr(e, t, (e) => {
		let t = e.groups.map((e, t) => ({
			group: e,
			index: t,
			size: jr(e)
		})).sort((e, t) => e.size === t.size ? e.index - t.index : i === "descending" ? t.size - e.size : e.size - t.size).slice(0, r), n = new Set(t.map((e) => e.group));
		e.groups = e.groups.filter((e) => n.has(e));
	});
}
function Or(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	let a = br(r, i);
	Mr(e, t, (e) => {
		e.groups = e.groups.filter((e) => a(jr(e)));
	});
}
function kr(e, t) {
	Mr(e, t, (e) => {
		let t = e;
		t.samples = e.groups.flatMap((e) => Ar(e)), delete e.groups;
	});
}
function Ar(e) {
	return q(e) ? e.groups.flatMap((e) => Ar(e)) : e.samples;
}
function jr(e) {
	return q(e) ? e.groups.reduce((e, t) => e + jr(t), 0) : e.samples.length;
}
function Mr(e, t, n) {
	if (!Number.isInteger(t) || t < 0) throw Error("Grouping level must be a non-negative integer.");
	let r = !1, i = (e, a) => {
		if (a === t) r = !0, n(e);
		else for (let t of e.groups) q(t) && i(t, a + 1);
	};
	if (i(e, 0), !r) throw Error("Grouping level not found: " + t);
}
function Nr(e, t) {
	return (n) => {
		let r = e(n);
		if (!(!_r(r) || isNaN(r))) {
			for (let e = 0; e < t.length; e++) if (t[e].operator == "lt") {
				if (r < t[e].operand) return e;
			} else if (r <= t[e].operand) return e;
			return t.length;
		}
	};
}
function Pr(e, t, n) {
	let r = _(e.map(t).filter((e) => _r(e) && !isNaN(e)));
	return n.map((e) => g(r, e));
}
function Fr(e) {
	let t = [e[0]];
	for (let n = 1; n < e.length; n++) e[n] != e[n - 1] && t.push(e[n]);
	return t;
}
var Ir = ne(".3~r"), Lr = (e, t) => `${e.operator == "lt" ? "[" : "("}${Ir(e.operand)}, ${Ir(t.operand)}${t.operator == "lte" ? "]" : ")"}`;
function Rr(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) for (let t of r) n.set(t, e);
	return (t) => n.get(e(t));
}
//#endregion
//#region ../../node_modules/mapsort/compiled/esm/mapsort.min.js
function zr(e, t) {
	var n = e + "", r = t + "";
	return n < r ? -1 : n == r ? 0 : 1;
}
function Br(e) {
	if (typeof e != "function") throw TypeError(e + " is not a function");
}
function Vr(e, t, n) {
	Br(t), n !== void 0 && Br(n);
	var r, i = [], a = [], o = [];
	i.forEach.call(e, function(e, s, c) {
		if (r = t(e, s, c), r === void 0) return void o.push(e);
		if (!n && typeof r == "symbol") throw TypeError("Can't convert symbol to string");
		i.push(s), a[s] = r;
	}), n ||= zr, i.sort(function(e, t) {
		return n(a[e], a[t]);
	});
	var s = i.map(function(t) {
		return e[t];
	}).concat(o);
	return s.length != e.length && (s.length = e.length), s;
}
//#endregion
//#region ../app/src/sampleView/state/sampleOperations.js
function Hr(e, t) {
	let n = (e) => e.copy().range(m(0, e.domain().length)).unknown(-1), r = (e) => e ?? "";
	switch (t.type) {
		case "quantitative":
			r = (e) => _r(e) && !isNaN(e) ? e : -Infinity;
			break;
		case "ordinal":
			r = n(t.scale);
			break;
		case "nominal":
			r = (e) => e || "";
			break;
		default:
	}
	return (t) => r(e(t));
}
function Ur(e, t) {
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let t = n.has(e);
		return n.add(e), t;
	};
	return e.filter((e) => !r(t(e)));
}
function Wr(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = (e) => (r.size < n && r.add(e), r.has(e));
	return e.filter((e) => i(t(e)));
}
function Gr(e, t, n, r) {
	if (r.operator === "in" && r.required === "all") return Kr(e, t, n, r.values);
	let i = qr(r), a = /* @__PURE__ */ new Set();
	for (let r of e) i(n(r)) && a.add(t(r));
	return a;
}
function Kr(e, t, n, r) {
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
function qr(e) {
	if (e.operator === "in") {
		let t = new Set(e.values);
		return (e) => t.has(e);
	} else return br(e.operator, e.operand);
}
function Jr(e, t, n = !1) {
	return Vr(e, t, (e, t) => (n && ([e, t] = [t, e]), e < t ? -1 : +(e > t)));
}
function Yr(e, t, n, r) {
	let i = br(n, r);
	return e.filter((e) => i(t(e)));
}
function Xr(e, t, n, r) {
	let i = new Set(r), a = (e) => i.has(e), o = n == "remove" ? (e) => !a(e) : a;
	return e.filter((e) => o(t(e)));
}
function Zr(e, t) {
	let n = (e) => e != null;
	return e.filter((e) => n(t(e)));
}
function Qr(e, t) {
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
}, $r = {
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
function ei(e, t = []) {
	return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function ti(e) {
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
var ni, R, ri = {
	prevState: "#9E9E9E",
	action: "#03A9F4",
	nextState: "#4CAF50"
};
function ii() {
	R = {
		header: [],
		prev: [],
		action: [],
		next: [],
		msgs: []
	};
}
function ai() {
	let { header: e, prev: t, next: n, action: r, msgs: i } = R;
	console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i));
}
function oi(e, t, n) {
	return [
		`%c${e}`,
		`color: ${t}; font-weight: bold`,
		n
	];
}
function si(e, t) {
	ii(), ni && (console.group ? (R.header = [
		"%credux-undo",
		"font-style: italic",
		"action",
		e.type
	], R.action = oi("action", ri.action, e), R.prev = oi("prev history", ri.prevState, t)) : (R.header = ["redux-undo action", e.type], R.action = ["action", e], R.prev = ["prev history", t]));
}
function z(e) {
	ni && (console.group ? R.next = oi("next history", ri.nextState, e) : R.next = ["next history", e], ai());
}
function B(...e) {
	ni && (R.msgs = R.msgs.concat([...e, "\n"]));
}
function ci(e) {
	ni = e;
}
function li(e, t) {
	let n = L([], e, []);
	return t && (n._latestUnfiltered = null), n;
}
function ui(e, t, n, r) {
	let i = e.past.length + 1;
	B("inserting", t), B("new free: ", n - i);
	let { past: a, _latestUnfiltered: o } = e, s = n && n <= i, c = a.slice(+!!s);
	return L(o == null ? c : [...c, o], t, [], r);
}
function di(e, t) {
	if (t < 0 || t >= e.future.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = [
		...n,
		i,
		...r.slice(0, t)
	], o = r[t];
	return L(a, o, r.slice(t + 1));
}
function fi(e, t) {
	if (t < 0 || t >= e.past.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = n.slice(0, t), o = [
		...n.slice(t + 1),
		i,
		...r
	], s = n[t];
	return L(a, s, o);
}
function pi(e, t) {
	return t > 0 ? di(e, t - 1) : t < 0 ? fi(e, e.past.length + t) : e;
}
function mi(e, t) {
	return t.indexOf(e) > -1 ? e : !e;
}
function hi(e, t = {}) {
	ci(t.debug);
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
		initTypes: ei(t.initTypes, ["@@redux-undo/INIT"]),
		clearHistoryType: ei(t.clearHistoryType, [I.CLEAR_HISTORY])
	}, r = n.neverSkipReducer ? (t, n, ...r) => ({
		...t,
		present: e(t.present, n, ...r)
	}) : (e) => e, i;
	return (t = i, a = {}, ...o) => {
		si(a, t);
		let s = t;
		if (!i) {
			if (B("history is uninitialized"), t === void 0) return s = li(e(t, { type: "@@redux-undo/CREATE_HISTORY" }, ...o), n.ignoreInitialState), B("do not set initialState on probe actions"), z(s), s;
			ti(t) ? (s = i = n.ignoreInitialState ? t : L(t.past, t.present, t.future), B("initialHistory initialized: initialState is a history", i)) : (s = i = li(t, n.ignoreInitialState), B("initialHistory initialized: initialState is not a history", i));
		}
		let c;
		switch (a.type) {
			case void 0: return s;
			case n.undoType: return c = pi(s, -1), B("perform undo"), z(c), r(c, a, ...o);
			case n.redoType: return c = pi(s, 1), B("perform redo"), z(c), r(c, a, ...o);
			case n.jumpToPastType: return c = fi(s, a.index), B(`perform jumpToPast to ${a.index}`), z(c), r(c, a, ...o);
			case n.jumpToFutureType: return c = di(s, a.index), B(`perform jumpToFuture to ${a.index}`), z(c), r(c, a, ...o);
			case n.jumpType: return c = pi(s, a.index), B(`perform jump to ${a.index}`), z(c), r(c, a, ...o);
			case mi(a.type, n.clearHistoryType): return c = li(s.present, n.ignoreInitialState), B("perform clearHistory"), z(c), r(c, a, ...o);
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
				return s = ui(s, c, n.limit, t), B("inserted new state into history"), z(s), s;
		}
	};
}
//#endregion
//#region ../app/src/state/provenanceReducerBuilder.js
var V = "_augmented";
function gi(e) {
	return (t) => (Array.isArray(e) ? e : Object.keys(e)).some((e) => vr(e) && t.type.startsWith(e));
}
function _i(e) {
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
function vi(e) {
	return (t, n) => e(n) ? _i(n) : t ?? null;
}
function yi(e, t = {}) {
	let n = gi(e), r = vi(n);
	return hi(_e({
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
function bi(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function xi(e, t = "/") {
	let n = bi(t);
	return e.replace(new RegExp(n, "g"), "\\" + t);
}
function H(e, t = "/") {
	return e.map((e) => xi(e, t)).join(t);
}
function U(e, t = "/") {
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
function Si(e, t = /* @__PURE__ */ new Set()) {
	if (e.length === 0) return {};
	let n = e[0], r = Object.keys(n).filter((e) => !t.has(e)), i = {};
	for (let t of r) i[t] = e.map((e) => e[t]);
	return i;
}
function Ci(e) {
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
//#endregion
//#region ../core/src/utils/deepEqual.js
function wi(e, t) {
	if (Object.is(e, t)) return !0;
	if (Array.isArray(e) || Array.isArray(t)) {
		if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!wi(e[n], t[n])) return !1;
		return !0;
	}
	if (!Ti(e) || !Ti(t)) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !wi(e[r], t[r])) return !1;
	return !0;
}
function Ti(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
var Ei = "(Root)";
function Di(e) {
	return U(e, "/").at(-1) ?? "";
}
function Oi(e, t) {
	let n = typeof t == "string" && t.length > 0 ? (e) => U(e, t) : (e) => [e], r = {
		part: Ei,
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
					path: H(e.slice(0, n + 1), "/"),
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
function* ki(e) {
	if (e) {
		yield e;
		for (let t of e.children.values()) yield* ki(t);
	}
}
function* Ai(e) {
	for (let t = e.parent; t != null; t = t.parent) yield t;
}
function ji(e) {
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
function Mi(e) {
	return e.length ? H(e, "/") + "/" : "";
}
function Ni(e, t = [], n = []) {
	if (!t.length) return e;
	let r = Mi(t), i = {};
	for (let [t, a] of Object.entries(e)) n.includes(t) ? i[t] = a : i[r + t] = a;
	return i;
}
function Pi(e, t, n = "/") {
	return H(U(e, t), n);
}
function Fi(e, t = {}, n, r, i = /* @__PURE__ */ new Set()) {
	let a = Ri(e, i);
	if (n != null && typeof n != "string") throw Error("attributeGroupSeparator must be a string");
	return a = zi(a, n), r ? (a = Vi(a, r, n), t = Hi(t, r, n)) : t[""] && (t = Ii(t, { attributeNames: Object.keys(a).filter((e) => e !== "sample") })), {
		columnarMetadata: a,
		attributeDefs: t
	};
}
function Ii(e, t) {
	let n = e[""];
	if (!n) return e;
	let r = {};
	for (let [t, n] of Object.entries(e)) t !== "" && (r[t] = n);
	for (let e of t.attributeNames) {
		if (r[e]) continue;
		let t = U(e, "/"), i = !1;
		for (let e = 1; e < t.length; e++) if (r[H(t.slice(0, e), "/")]) {
			i = !0;
			break;
		}
		i || (r[e] = { ...n });
	}
	return r;
}
function Li(e, t, n) {
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
		a && (e.scale = a), u = Ii({
			...u,
			"": e
		}, { attributeNames: Array.from(n.metadataNodeTypes.entries().filter(([, e]) => e === "inherit").map(([e]) => e)) });
	}
	let d = Fi(r, u, n.separator, n.addUnderGroup, l);
	if (n.addUnderGroup && s) {
		let e = H(Bi(n.addUnderGroup, n.separator ?? void 0), "/");
		if (e && !d.attributeDefs[e]) {
			let t = { type: i };
			a && (t.scale = a), d.attributeDefs[e] = t;
		}
	}
	return d;
}
function Ri(e, t = /* @__PURE__ */ new Set()) {
	return Si(e, t);
}
function zi(e, t) {
	let n = { sample: e.sample };
	for (let [r, i] of Object.entries(e)) {
		if (r === "sample") continue;
		let e = typeof t == "string" && t.length > 0 ? Pi(r, t, "/") : H([r], "/");
		n[e] = i;
	}
	return n;
}
function Bi(e, t) {
	return typeof t == "string" && t.length > 0 ? U(e, t) : [e];
}
function Vi(e, t, n) {
	return Ui(e, Bi(t, n));
}
function Hi(e, t, n) {
	let r = Bi(t, n), i = H(r, "/"), a = {}, o;
	for (let [t, n] of Object.entries(e)) t === "" ? o = n : a[t] = n;
	let s = Ni(a, r);
	return o && !s[i] && (s[i] = o), s;
}
function Ui(e, t = []) {
	return Ni(e, t, ["sample"]);
}
function Wi(e) {
	switch (s(e)) {
		case "integer":
		case "number": return "quantitative";
		default: return "nominal";
	}
}
function Gi(e, t) {
	let n = /* @__PURE__ */ new Map();
	function r(t) {
		for (let e of Ai(t)) {
			let t = n.get(e.path);
			if (t && t !== "unset") return "inherit";
		}
		if (t.children.size > 0) {
			let n = /* @__PURE__ */ new Set();
			for (let r of ki(t)) if (r !== t && r.children.size === 0) {
				let t = e.get(r.attribute);
				t && n.add(t);
			}
			return n.size === 1 ? n.values().next().value : "unset";
		} else return e.get(t.attribute) ?? "unset";
	}
	for (let e of ki(t)) n.set(e.path, r(e));
	return n;
}
function Ki(e, t = {}, n) {
	let r = structuredClone(t ?? {}), i = Oi(e.attributeNames, n), a = /* @__PURE__ */ new Map();
	function o(e) {
		e.path && a.set(e.path, e);
		for (let t of e.children.values()) o(t);
	}
	o(i);
	for (let t of e.attributeNames) {
		let i = r[t], o = null;
		if (n != null) {
			let e = Pi(t, n, "/"), i = a.get(e)?.parent;
			for (; i && (o = r[i.path]?.type, o == null);) i = i.parent;
		}
		if (!o && (i || (i = {}, r[t] = i), !i.type)) {
			let n = Object.values(e.entities).map((e) => e[t]);
			i.type = Wi(n);
		}
	}
	return r;
}
function qi(e, t) {
	let n = new Set(e.attributeNames), r = new Set(t.attributeNames), i = n.intersection(r);
	if (i.size > 0) throw Error(`Duplicate attribute names: ${Array.from(i).join(", ")}`);
	let a = [...n, ...r], o = e.attributeDefs ?? {}, s = t.attributeDefs ?? {}, c = { ...o };
	for (let e of Object.keys(s)) {
		if (e in c) {
			c[e] = Yi(c[e], s[e], e);
			continue;
		}
		c[e] = s[e];
	}
	let l = Object.keys(e.entities), u = Object.keys(t.entities), d = /* @__PURE__ */ new Set([...l, ...u]), f = {};
	for (let r of d) {
		let i = e.entities[r] ?? {}, o = t.entities[r] ?? {}, s = {};
		for (let e of a) n.has(e) ? s[e] = i[e] : s[e] = o[e];
		f[r] = s;
	}
	return {
		entities: f,
		attributeNames: a,
		attributeDefs: c
	};
}
function Ji(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function Yi(e, t, n, r = "") {
	if (wi(e, t)) return e;
	let i = { ...e };
	for (let [e, a] of Object.entries(t)) {
		if (!(e in i)) {
			i[e] = a;
			continue;
		}
		let t = i[e];
		if (wi(t, a)) continue;
		if (Ji(t) && Ji(a)) {
			i[e] = Yi(t, a, n, r ? r + "." + e : e);
			continue;
		}
		let o = r ? r + "." + e : e, s = Xi(t), c = Xi(a);
		throw Error("Conflicting attribute definition for key \"" + n + "\" at \"" + o + "\". Existing value: " + s + "; incoming value: " + c + ". Align the source-level/group defaults (type/scale/visibility) before importing into the same group.");
	}
	return i;
}
function Xi(e) {
	try {
		return JSON.stringify(e) ?? String(e);
	} catch {
		return String(e);
	}
}
var Zi = new Map([
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
function Qi(e) {
	let t = Zi.get(e);
	if (!t) throw Error("Unknown aggregation op: " + e);
	return t;
}
function $i(e) {
	return Qi(e).label.toLowerCase();
}
function ea(e) {
	return e === "count" ? "count" : $i(e);
}
function ta(e) {
	return e.operator === "in" ? e.field + " in {" + e.values.map(W).join(", ") + "}" : e.field + " " + na(e.operator) + " " + W(e.value);
}
function na(e) {
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
function W(e) {
	return e === null ? "null" : String(e);
}
function ra(e) {
	let t = e.specifier;
	return !t || typeof t != "object" || !Gn(t) || Qi(t.aggregation.op).preservesScaleDomain;
}
function ia(e, t, n) {
	let r = n ? " where " + ta(n) : "";
	return e === "itemCount" ? ea(e) + (n ? "(" + r.trim() + ")" : "") : e === "count" ? ea(e) + "(" + t + r + ")" : $i(e) + "(" + t + r + ")";
}
//#endregion
//#region ../app/src/utils/emptyToUndefined.js
function aa(e) {
	return e ?? void 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataNameUtils.js
function oa(e, t) {
	let n = ua(e);
	if (n.length === 0) return e.trim();
	let { prefix: r, restTokens: i } = sa(n), a = r && i.length > 0 ? "_" : "", o = Math.max(0, t - r.length - a.length);
	if (i.length === 0) return r.length > 0 ? r : e.trim();
	let s = la(i, o, r.length > 0), c = r + a + s;
	if (a && c.length > t) {
		let e = r + s;
		e.length <= t && (c = e);
	}
	return c.length > t ? c.slice(0, t) : c;
}
function sa(e) {
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
	]) if (ca(t, n.match)) return {
		prefix: n.prefix,
		restTokens: e.slice(n.match.length)
	};
	return {
		prefix: "",
		restTokens: e
	};
}
function ca(e, t) {
	if (e.length < t.length) return !1;
	for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return !1;
	return !0;
}
function la(e, t, n) {
	let r = [], i = fa(e, !1), a = fa(e, !0), o = n ? [a, i] : [i, a];
	for (let e of o) e.length > 0 && !r.includes(e) && r.push(e);
	if (e.length > 2) {
		let t = fa([e[0], e[e.length - 1]], !0);
		t !== a && r.push(t);
	}
	for (let t = e.length - 1; t > 0; --t) {
		let n = fa(e.slice(0, t), !0);
		r.includes(n) || r.push(n);
	}
	for (let e of r) if (e.length <= t) return e;
	return r[0].slice(0, t);
}
function ua(e) {
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
function da(e, t, n) {
	return /^[A-Z0-9]+$/.test(e) ? e : n && t === 0 ? e[0].toLowerCase() : e.length <= 4 ? e : e.length <= 8 ? e.slice(0, 4) : e.slice(0, 3);
}
function fa(e, t) {
	return pa(e.map((e, n) => da(e, n, t)));
}
function pa(e) {
	return e.map((e, t) => t === 0 || e.length === 0 || /^[A-Z0-9]+$/.test(e) ? e : e[0].toUpperCase() + e.slice(1)).join("");
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataUtils.js
function ma(e, t = {}) {
	if (!e) throw Error("Attribute info is missing.");
	let n = e.type;
	if (n === "nominal" || n === "ordinal" || n === "quantitative") return n;
	if (t.strict === !1) return null;
	throw Error("Unsupported data type: " + n);
}
function ha(e, t, n, r) {
	let i = e.trim();
	if (i.length === 0) return "Attribute name is required.";
	let a = ga(i, t.trim(), ma(r));
	return n.includes(a) ? "Name already exists. Choose another name or group." : null;
}
function ga(e, t, n) {
	let r = { [e]: { type: n } };
	if (t.length === 0) return Object.keys(r)[0];
	let i = Hi(r, t, "/");
	return Object.keys(i)[0];
}
function _a(e, t) {
	let n = ba(t.scale);
	return {
		attribute: e,
		name: t.name,
		groupPath: aa(t.groupPath),
		...n ? { scale: n } : t.scale === null ? { scale: null } : {}
	};
}
function va(e, t) {
	return e.scale === void 0 ? ya(t) : ba(e.scale);
}
function ya(e) {
	if (ra(e.attribute)) return ba("scaleSpec" in e ? e.scaleSpec : e.scale?.props);
}
function ba(e) {
	if (!e) return;
	let t = structuredClone(e), n = t.range;
	return n && (!Array.isArray(n) || !n.every(xa)) && delete t.range, Object.keys(t).length > 0 ? t : void 0;
}
function xa(e) {
	return typeof e == "string" && se(e) != null;
}
function Sa(e, t) {
	let n = new Set(t), r = Ca(e) ?? (e.name && e.name.length > 0 ? e.name.trim() : "Derived"), i = [], a = r.length > 20, o = a ? oa(r, 20) : "";
	if (a && o.length > 0 && o !== r && i.push(o), i.push(r), !a && n.has(r)) {
		let e = oa(r, 20);
		e.length > 0 && e !== r && i.push(e);
	}
	for (let e of i) {
		let t = Da(e, n);
		if (t) return t;
	}
	throw Error("Unable to generate a unique metadata attribute name.");
}
function Ca(e) {
	let t = e.attribute.specifier;
	if (!t || typeof t != "object" || !Gn(t) || !t.featureFilter) return null;
	let n = wa(t.featureFilter);
	return t.aggregation.op === "count" || t.aggregation.op === "itemCount" ? n + "_count" : Ea(t.aggregation.op) + "_" + n + "_" + t.field;
}
function wa(e) {
	return e.operator === "eq" ? Ta(W(e.value)) : e.operator === "in" ? e.values.map((e) => Ta(W(e))).join("_") : Ta(e.field) + "_" + e.operator + "_" + Ta(W(e.value));
}
function Ta(e) {
	return e.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Ea(e) {
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
function Da(e, t) {
	if (!t.has(e)) return e;
	for (let n = 2; n < 2 ** 53 - 1; n += 1) {
		let r = Oa(e, "-" + String(n));
		if (!t.has(r)) return r;
	}
	return null;
}
function Oa(e, t) {
	if (e.length + t.length <= 32) return e + t;
	let n = Math.max(1, 32 - t.length);
	return e.slice(0, n) + t;
}
//#endregion
//#region ../app/src/sampleView/state/sampleSlice.js
var ka = "sampleView";
function Aa() {
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
function G(e) {
	let t = e.payload[V]?.values;
	if (!t) throw Error("No accessed values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return (e) => t[e];
}
function ja(e) {
	let t = e.payload[V], n = t?.values, r = t?.conditionValues;
	if (!n || !r) throw Error("No accessed category and condition values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return {
		categoryAccessor: (e) => n[e],
		conditionAccessor: (e) => r[e]
	};
}
function Ma(e) {
	if (!Number.isInteger(e) || e < 1) throw Error("Grouping level must be a positive integer.");
	return e - 1;
}
function Na(e, t) {
	let n = {};
	for (let r of Ra(e)) for (let e of r.samples) n[e] = t(e);
	return n;
}
function Pa(e, t) {
	if (!e.sampleData) throw Error("Samples must be set before setting metadata!");
	let n = t.columnarMetadata, r = Object.keys(n).filter((e) => e !== "sample"), i = {
		entities: Object.fromEntries(Ci(n).map((e) => {
			let { sample: t, ...n } = e;
			return [String(t), n];
		})),
		attributeNames: r
	}, a = Ki(i, t.attributeDefs, "/"), o = {
		...i,
		attributeDefs: a
	}, s = je(e.sampleMetadata) ?? e.sampleMetadata, c = t.replace ? o : qi(s, o);
	e.sampleMetadata = t.replace ? Ge(o) : Ge(c);
}
var Fa = mn({
	name: ka,
	initialState: Aa(),
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
			Pa(e, t.payload);
		},
		deriveMetadata: (e, t) => {
			let n = t.payload[V]?.metadata;
			if (!n) throw Error("Derived metadata payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			Pa(e, n);
		},
		addMetadataFromSource: (e, t) => {
			let n = t.payload[V]?.metadata;
			if (!n) throw Error("Metadata source payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			Pa(e, n);
		},
		sortBy: (e, t) => {
			K(e, (e) => Jr(e, G(t), Ia(t.payload.order)));
		},
		retainFirstOfEach: (e, t) => {
			K(e, (e) => Ur(e, G(t)));
		},
		retainFirstNCategories: (e, t) => {
			K(e, (e) => Wr(e, G(t), t.payload.n));
		},
		filterByQuantitative: (e, t) => {
			K(e, (e) => Yr(e, G(t), t.payload.operator, t.payload.operand));
		},
		retainCategoriesByAttribute: (e, t) => {
			let { categoryAccessor: n, conditionAccessor: r } = ja(t), i = Gr(Ra(e).flatMap((e) => e.samples), n, r, t.payload.condition);
			K(e, (e) => e.filter((e) => i.has(n(e))));
		},
		filterByNominal: (e, t) => {
			K(e, (e) => Xr(e, G(t), t.payload.remove ? "remove" : "retain", t.payload.values));
		},
		removeUndefined: (e, t) => {
			K(e, (e) => Zr(e, G(t)));
		},
		groupCustomCategories: (e, t) => {
			let n = Rr(G(t), t.payload.groups);
			La(e, (e) => xr(e, n, Object.keys(t.payload.groups))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByNominal: (e, t) => {
			La(e, (e) => xr(e, G(t), t.payload[V].domain)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupToQuartiles: (e, t) => {
			La(e, (e) => Tr(e, G(t))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByThresholds: (e, t) => {
			La(e, (e) => wr(e, G(t), t.payload.thresholds, t.payload.groupTitles)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		removeGroup: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) Er(n, t.payload.path);
			else throw Error("Cannot remove sample groups before grouping.");
		},
		retainGroupsByRank: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) Dr(n, Ma(t.payload.level), t.payload.measure, t.payload.limit, t.payload.order);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		retainGroupsBySize: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) Or(n, Ma(t.payload.level), t.payload.measure, t.payload.operator, t.payload.operand);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		ungroup: (e, t) => {
			let n = e.rootGroup;
			if (q(n)) {
				let r = Ma(t.payload.level);
				kr(n, r), e.groupMetadata.splice(r);
			} else throw Error("Cannot ungroup samples before grouping.");
		},
		retainMatched: (e, t) => {
			let n = G(t), r = Qr(Ra(e).map((e) => e.samples), n);
			K(e, (e) => Xr(e, n, "retain", r));
		}
	}
});
function Ia(e) {
	let t = e ?? "descending";
	if (t === "ascending") return !1;
	if (t === "descending") return !0;
	throw Error("Invalid sort order: " + t);
}
function K(e, t) {
	for (let n of Ra(e)) n.samples = t(n.samples);
}
function La(e, t) {
	for (let n of Ra(e)) t(n);
}
function Ra(e) {
	return za(e).map((e) => oe(e));
}
function za(e) {
	let t = [], n = [], r = (e) => {
		if (t.push(e), q(e)) for (let t of e.groups) r(t);
		else n.push([...t]);
		t.pop();
	};
	return r(e.rootGroup), n;
}
function Ba(e) {
	return "samples" in e;
}
function q(e) {
	return "groups" in e;
}
function* Va(e) {
	if (yield [e], q(e)) for (let t of e.groups) for (let n of Va(t)) yield [e, ...n];
}
var Ha = Ut((e) => e.sampleData?.entities, (e) => e && Object.values(e));
function Ua(e, t, n) {
	if (!e.type.startsWith("sampleView/")) return e;
	let r = e.type.split("/")[1];
	if (!(r in Fa.actions)) throw Error(`Invalid action type: ${r}`);
	if (!e.payload.attribute) return e;
	let i = n(e.payload.attribute);
	if (!i) throw Error(`Attribute info for attribute "${e.payload.attribute}" not found`);
	if (r === "deriveMetadata") return Wa(e, t, i);
	let a = i.accessor, o = r == "sortBy" ? Hr((e) => a(e, t), i) : a, s = { values: Na(t, (e) => o(e, t)) };
	if (r == "groupByNominal" && (s.domain = i.scale?.domain()), r === "retainCategoriesByAttribute") {
		let r = n(e.payload.condition.attribute);
		s.conditionValues = Na(t, (e) => r.accessor(e, t));
	}
	return {
		...e,
		payload: {
			...e.payload,
			[V]: s
		}
	};
}
function Wa(e, t, n) {
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
	}, s = ma(n, { strict: !1 }), c = va(e.payload, n), l = { [r]: {
		type: aa(s),
		...c ? { scale: c } : {}
	} }, u = e.payload.groupPath?.trim() ?? "", d = u.length > 0 ? {
		columnarMetadata: Vi(o, u, "/"),
		attributeDefs: Hi(l, u, "/")
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
function Ga(e) {
	return (t) => t.sampleIds.map((n) => e(n, t.sampleHierarchy));
}
function Ka(e, t, n, r = {}) {
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
		return a(e, t), Ja(t.textContent ?? "");
	}
	return Ja(Ya(qa(e)));
}
function qa(e) {
	if (e == null) return "";
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return String(e);
	if (Array.isArray(e)) return e.map((e) => qa(e)).join("");
	if (typeof e == "object" && "strings" in e && "values" in e && Array.isArray(e.strings) && Array.isArray(e.values)) {
		let t = e.strings[0] ?? "";
		for (let n = 0; n < e.values.length; n++) t += qa(e.values[n]) + (e.strings[n + 1] ?? "");
		return t;
	}
	return typeof e == "object" && Symbol.iterator in e && typeof e[Symbol.iterator] == "function" ? Array.from(e, (e) => qa(e)).join("") : "";
}
function Ja(e) {
	return e.replace(/\s+/g, " ").trim();
}
function Ya(e) {
	return e.replace(/<[^>]*>/g, "");
}
//#endregion
//#region ../app/src/charts/chartDataUtils.js
function Xa(e) {
	let t = e.attribute.specifier;
	return !t || typeof t != "object" ? {} : Gn(t) && Kn(t.interval) ? {
		interval: t.interval,
		aggregation: t.aggregation
	} : {};
}
function Za(e, t) {
	let n = e[e.length - 1];
	return (e.length > 1 ? e.slice(1).map((e) => e.title || e.name) : [n.title || n.name]).join(t);
}
function Qa(e) {
	let t = e[e.length - 1];
	if (!("samples" in t)) throw Error("Expected a sample group leaf node.");
	return t.samples;
}
function Y(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function $a(e, t, n = " / ") {
	return t.length === 0 ? null : t.map((t) => J(e.getAttributeInfo(t.attribute).title)).join(n);
}
//#endregion
//#region ../app/src/charts/hierarchyBarplotData.js
var eo = Object.freeze({
	categoryField: "category",
	groupField: "group",
	countField: "Count",
	groupLabelSeparator: " / ",
	grouped: void 0
});
function to(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "nominal" && t.type !== "ordinal") throw Error("Bar plot requires a categorical attribute.");
	let r = {
		...eo,
		grouped: e.groupMetadata.length > 0 || "groups" in e.rootGroup,
		...n
	}, i = [], a = [], o = /* @__PURE__ */ new Set(), s = [], c = [], l = Xa(t), u = 0, d = 0, f = 0;
	for (let n of za(e)) {
		let p = Za(n, r.groupLabelSeparator), m = Qa(n);
		u += m.length;
		let h = Ka(t, m, e, l);
		if (h.length !== m.length) throw Error("Attribute values length does not match sample ids.");
		let g = /* @__PURE__ */ new Map(), _ = 0, ee = 0;
		for (let e of h) {
			if (e == null) {
				f++, ee++;
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
				missingCount: ee,
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
function no(e, t, n = {}) {
	let { coef: r = 1.5, dropNaN: i = !0 } = n, a = [];
	for (let n of e) {
		let e = t(n), r = typeof e == "number" ? e : Number(e);
		i && !Number.isFinite(r) || a.push({
			obj: n,
			v: r
		});
	}
	if (a.length === 0) return {
		statistics: null,
		outliers: []
	};
	a.sort((e, t) => e.v - t.v);
	let o = a.map((e) => e.v), s = v(o, .25), c = v(o, .5), l = v(o, .75);
	if (s == null || c == null || l == null) return {
		statistics: null,
		outliers: []
	};
	let u = l - s, d = s - r * u, f = l + r * u, p = o[0], m = o[o.length - 1], h, g, _ = [];
	if (r === 0) h = p, g = m;
	else {
		let e = 0;
		for (; e < o.length && o[e] < d;) e++;
		h = o[Math.min(e, o.length - 1)];
		let t = o.length - 1;
		for (; t >= 0 && o[t] > f;) t--;
		g = o[Math.max(t, 0)];
		for (let e of a) (e.v < d || e.v > f) && _.push(e.obj);
	}
	return {
		statistics: {
			n: e.length,
			nValid: a.length,
			q1: s,
			median: c,
			q3: l,
			iqr: u,
			lowerFence: d,
			upperFence: f,
			lowerWhisker: h,
			upperWhisker: g,
			min: p,
			max: m
		},
		outliers: _
	};
}
//#endregion
//#region ../app/src/charts/hierarchyBoxplotData.js
var ro = Object.freeze({
	groupField: "group",
	valueField: "value",
	sampleField: "sample",
	groupLabelSeparator: " / ",
	coef: void 0,
	dropNaN: void 0
});
function io(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative") throw Error("Boxplot requires a quantitative attribute.");
	let r = t.attribute.specifier;
	if (typeof r == "string" && !e.sampleMetadata.attributeNames.includes(r)) throw Error("Unknown metadata attribute: " + String(r));
	let i = {
		...ro,
		...n
	}, a = [], o = [], s = [], c = [], l = Xa(t), u = 0, d = 0, f = 0;
	for (let n of za(e)) {
		let r = Za(n, i.groupLabelSeparator), p = Qa(n);
		u += p.length;
		let m = Ka(t, p, e, l);
		if (m.length !== p.length) throw Error("Attribute values length does not match sample ids.");
		let h = p.map((e, t) => ({
			[i.sampleField]: e,
			[i.valueField]: m[t]
		}));
		if (h.length === 0) continue;
		let { statistics: g, outliers: _ } = no(h, (e) => e[i.valueField], {
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
var ao = Object.freeze({
	groupField: "group",
	xField: "x",
	yField: "y",
	sampleField: "sample",
	groupLabelSeparator: " / "
});
function oo(e, t, n, r = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative" || n.type !== "quantitative") throw Error("Scatterplot requires quantitative attributes.");
	let i = {
		...ao,
		...r
	}, a = [], o = [], s = [], c = Xa(t), l = Xa(n), u = 0, d = 0;
	for (let r of za(e)) {
		let f = Za(r, i.groupLabelSeparator), p = Qa(r);
		u += p.length;
		let m = Ka(t, p, e, c), h = Ka(n, p, e, l);
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
var so = 15, co = new Intl.Collator("en", {
	numeric: !0,
	sensitivity: "base"
});
function lo(e, t, n, r = so) {
	let i = Array.from(e.entries()).sort(fo), a = i.slice(0, r).map(([e, n]) => ({
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
function uo(e, t) {
	let n = Array.from(e.entries()).sort(fo)[0];
	return n ? {
		value: n[0],
		count: n[1],
		share: t > 0 ? n[1] / t : 0
	} : void 0;
}
function fo(e, t) {
	return t[1] === e[1] ? co.compare(String(e[0]), String(t[0])) : t[1] - e[1];
}
//#endregion
//#region ../app/src/utils/colorScaleSummary.js
function po(e) {
	let t = e;
	if (!t || typeof t.domain != "function" || typeof t.range != "function") return;
	let n = t.domain(), r = t.range();
	if (Array.isArray(n) && Array.isArray(r) && r.every((e) => typeof e == "string")) return {
		domain: n,
		range: r
	};
}
function mo(e, t, n, r) {
	let i = ho(n, r);
	return i ? e.map((e) => {
		let n = i.get(t(e));
		return n === void 0 ? e : {
			...e,
			color: n
		};
	}) : e;
}
function ho(e, t) {
	if (!Array.isArray(e) || !Array.isArray(t) || !t.every((e) => typeof e == "string")) return;
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e, r) => {
		let i = t[r];
		typeof i == "string" && n.set(e, i);
	}), n;
}
//#endregion
//#region ../app/src/charts/hierarchySampleAttributePlots.js
var go = "hierarchy_barplot", _o = "hierarchy_boxplot_stats", vo = "hierarchy_boxplot_outliers", yo = "hierarchy_scatterplot_points";
function bo(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = J(t.title), r = J(t.emphasizedName), i = t.type, a = $a(e.attributeInfoSource, e.sampleHierarchy.groupMetadata) ?? "Group", o = "Count", { rows: s, categoryDomain: c, groupDomain: l, grouped: u, sampleCount: d, nonMissingCount: f, missingCount: p, groupSummaries: m } = to(e.sampleHierarchy, e.attributeInfo, {
		categoryField: n,
		groupField: a,
		countField: o
	}), h = Ao(t, c), g = u ? a : n, _ = u ? a : r, ee = u ? l : c, te = u ? "nominal" : i, ne = {
		data: { name: go },
		mark: { type: "rect" },
		encoding: {
			x: {
				field: Y(g),
				type: te,
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
	}, v = ne.encoding.x;
	return v.scale = {
		...v.scale ?? {},
		domain: ee
	}, {
		kind: "sample_attribute_plot",
		plotType: "barplot",
		request: {
			plotType: "barplot",
			attribute: e.attributeInfo.attribute
		},
		title: `Bar plot of ${J(t.title)}`,
		spec: ne,
		namedData: [{
			name: go,
			rows: s
		}],
		filename: "genomespy-barplot.png",
		summary: {
			groupCount: l.length > 0 ? l.length : 1,
			sampleCount: d,
			plottedCount: f
		},
		characterization: Co({
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
function xo(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = $a(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), r = J(t.emphasizedName), i = n ?? "Group", a = J(t.title), { statsRows: o, outlierRows: s, groupDomain: c, sampleCount: l, nonMissingCount: u, groupSummaries: d } = io(e.sampleHierarchy, e.attributeInfo, {
		groupField: i,
		valueField: a,
		sampleField: "sample"
	}), f = ir({
		statsName: _o,
		outliersName: vo,
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
			name: _o,
			rows: o
		}, {
			name: vo,
			rows: s
		}],
		filename: "genomespy-boxplot.png",
		summary: {
			groupCount: c.length > 0 ? c.length : 1,
			sampleCount: l,
			plottedCount: u
		},
		characterization: wo(d)
	};
}
function So(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.xAttributeInfo.attribute), n = e.attributeInfoSource.getAttributeInfo(e.yAttributeInfo.attribute), r = J(t.title), i = J(n.title), a = J(t.emphasizedName), o = J(n.emphasizedName), s = $a(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), c = s ?? "Group", { rows: l, groupDomain: u, sampleCount: d, missingPairCount: f, groupSummaries: p } = oo(e.sampleHierarchy, e.xAttributeInfo, e.yAttributeInfo, {
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
	}, h = e.colorScaleDomain ?? u, g = jo(u, c, s ?? "Group", h, e.colorScaleRange), _ = {
		data: { name: yo },
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
			name: yo,
			rows: l
		}],
		filename: "genomespy-scatterplot.png",
		summary: {
			groupCount: u.length > 0 ? u.length : 1,
			sampleCount: d,
			plottedCount: l.length
		},
		characterization: To({
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
function Co(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.rows) {
		let r = n[e.categoryFieldName], i = Number(n[e.countFieldName]);
		t.set(r, (t.get(r) ?? 0) + i);
	}
	let n = lo(t, e.nonMissingCount, e.missingCount), r = mo(n.categories, (e) => e.value, e.colorScale.domain, e.colorScale.range);
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
			...Eo(e.counts, e.nonMissingCount)
		})) } : {}
	};
}
function wo(e) {
	let t = e.map((e) => ({ ...e })), n = t.filter((e) => e.nonMissingCount > 0).slice().sort((e, t) => e.median - t.median), r = n[0], i = n[n.length - 1];
	return {
		kind: "quantitative_distribution",
		groups: t,
		...i ? { highestMedianGroup: i.title } : {},
		...r ? { lowestMedianGroup: r.title } : {},
		...i && r ? { largestMedianDifference: i.median - r.median } : {}
	};
}
function To(e) {
	let t = e.rows.map((t) => Number(t[e.xFieldName])), n = e.rows.map((t) => Number(t[e.yFieldName])), r = Oo(t, n);
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
		x: Do(t),
		y: Do(n),
		...r === void 0 ? {} : { correlation: ko(r) },
		...e.groupSummaries.length > 1 ? { groups: mo(e.groupSummaries, (e) => e.title, e.colorScaleDomain, e.colorScaleRange) } : {}
	};
}
function Eo(e, t) {
	let n = uo(e, t);
	return n ? { topCategory: n } : {};
}
function Do(e) {
	let t = e.filter((e) => Number.isFinite(e));
	return t.length === 0 ? {} : {
		min: Math.min(...t),
		max: Math.max(...t)
	};
}
function Oo(e, t) {
	if (e.length !== t.length || e.length < 3) return;
	let n = e.reduce((e, t) => e + t, 0) / e.length, r = t.reduce((e, t) => e + t, 0) / t.length, i = 0, a = 0, o = 0;
	for (let s = 0; s < e.length; s += 1) {
		let c = e[s] - n, l = t[s] - r;
		i += c * c, a += l * l, o += c * l;
	}
	if (!(i === 0 || a === 0)) return o / Math.sqrt(i * a);
}
function ko(e) {
	return {
		method: "pearson",
		r: e
	};
}
function Ao(e, t) {
	let n = e.scale, r = n && typeof n.domain == "function" ? n.domain() : t, i = n && typeof n.range == "function" ? n.range() : void 0;
	return {
		domain: r,
		...i ? { range: i } : {}
	};
}
function jo(e, t, n, r, i) {
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
function Mo(e) {
	if (e.sampleHierarchy.groupMetadata.length !== 1) return;
	let t = e.sampleHierarchy.groupMetadata[0].attribute;
	if (t.type !== "SAMPLE_ATTRIBUTE") return;
	let n = e.compositeAttributeInfoSource.getAttributeInfo(t);
	if (n.type === "quantitative") return;
	let r = po(n.scale);
	if (r) return {
		domain: r.domain.map(String),
		range: r.range
	};
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataValidation.js
function No(e, t) {
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
			r(Po);
			continue;
		}
		if (e.sample == null || e.sample === "") {
			r(Fo);
			continue;
		}
		let t = String(e.sample);
		a.has(t) && r(Io, 1, t), a.add(t);
	}
	return a.size === 0 && r(Lo), n.size > 0 ? { error: Array.from(n.values()) } : { statistics: {
		unknownSamples: a.difference(i),
		notCoveredSamples: i.difference(a),
		samplesInBoth: a.intersection(i)
	} };
}
var Po = "Missing sample field in metadata record", Fo = "Empty sample field in metadata record", Io = "Duplicate sample IDs found in metadata", Lo = "No valid samples found in metadata";
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAttributes.js
function Ro(e, t) {
	return t ? Pi(e, t, "/") : H([e], "/");
}
function zo(e, t) {
	let n = e.attributes;
	if (!n) return {};
	let r = e.attributeGroupSeparator, i = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = U(Ro(e, r), "/");
		for (let e = 1; e <= t.length; e++) i.add(H(t.slice(0, e), "/"));
	}
	i.add("");
	let a = {}, o = /* @__PURE__ */ new Map();
	for (let [e, t] of Object.entries(n)) {
		let n = Ro(e, r);
		if (!i.has(n)) continue;
		let s = o.get(n);
		if (s) throw Error("Metadata source attributes has conflicting keys \"" + s + "\" and \"" + e + "\" that both resolve to \"" + n + "\".");
		o.set(n, e), a[n] = { ...t };
	}
	return a;
}
//#endregion
//#region ../app/src/sampleView/metadata/exampleValues.js
function Bo(e, t) {
	return n(e.map((e) => String(e ?? "").trim()).filter(Boolean), t, Vo);
}
function Vo(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/adapters/dataMetadataSourceAdapter.js
var Ho = class {
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
			examples: Bo((await this.listColumns(t)).map((e) => e.id), e)
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
		let o = No(e.sampleIds, a);
		if ("error" in o) {
			let e = o.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		if (o.statistics.samplesInBoth.size === 0) throw Error("Metadata source rows do not match any sample ids in the current view.");
		let s = zo(this.#e, e.columnIds), c = e.groupPath ?? this.#e.groupPath, l = Fi(a, s, this.#e.attributeGroupSeparator, c);
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
		let n = h(this.#n, e.url), r = d(e, n), i = o(r.type), a;
		try {
			a = await fetch(n, { signal: t });
		} catch (e) {
			throw Error("Could not load metadata source: " + e.message, { cause: e });
		}
		if (!a.ok) throw Error("Could not load metadata source: " + a.status + " " + a.statusText);
		let s;
		return s = typeof a[i] == "function" ? await a[i]() : await a.text(), p(s, u(r));
	}
	async #c(e) {
		let t = e.values, n = [];
		if (Array.isArray(t)) {
			if (t.length > 0) {
				let e = l(t[0]);
				n = t.map((t) => e(t));
			}
		} else if (typeof t == "object") n = [t];
		else if (typeof t == "string") n = p(t, u(d(e)));
		else throw Error("Inline metadata source values must be an array, object, or a string.");
		return n;
	}
	#l(e) {
		return this.#i.has(e);
	}
};
//#endregion
//#region ../../node_modules/@zarrita/storage/dist/src/util.js
function Uo(e, t, n, r = {}) {
	return t !== void 0 && n !== void 0 && (r = {
		...r,
		headers: {
			...r.headers,
			Range: `bytes=${t}-${t + n - 1}`
		}
	}), fetch(e, r);
}
function Wo(e, t) {
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
function Go(e, t) {
	let n = typeof e == "string" ? new URL(e) : e;
	n.pathname.endsWith("/") || (n.pathname += "/");
	let r = new URL(t.slice(1), n);
	return r.search = n.search, r;
}
async function Ko(e) {
	if (e.status !== 404) {
		if (e.status === 200 || e.status === 206) return new Uint8Array(await e.arrayBuffer());
		throw Error(`Unexpected response status ${e.status} ${e.statusText}`);
	}
}
async function qo(e, t, n, r) {
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
	return Uo(e, o - t, o, n);
}
var Jo = class {
	url;
	#e;
	#t;
	constructor(e, t = {}) {
		this.url = e, this.#e = t.overrides ?? {}, this.#t = t.useSuffixRequest ?? !1;
	}
	#n(e) {
		return Wo(this.#e, e);
	}
	async get(e, t = {}) {
		let n = Go(this.url, e).href;
		return Ko(await fetch(n, this.#n(t)));
	}
	async getRange(e, t, n = {}) {
		let r = Go(this.url, e), i = this.#n(n), a;
		return a = "suffixLength" in t ? await qo(r, t.suffixLength, i, this.#t) : await Uo(r, t.offset, t.length, i), Ko(a);
	}
}, Yo = class {
	#e;
	constructor(e, t, n) {
		typeof e == "number" ? this.#e = new Uint8Array(e) : e instanceof ArrayBuffer ? this.#e = new Uint8Array(e, t, n) : this.#e = new Uint8Array(Array.from(e, (e) => +!!e));
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
}, Xo = class {
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
}, Zo = class e {
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
function Qo(e) {
	let t = new TextDecoder().decode(e);
	return JSON.parse(t);
}
function $o(e, t) {
	let n = t / 2, r = t - 1, i = 0;
	for (let a = 0; a < e.length; a += t) for (let t = 0; t < n; t += 1) i = e[a + t], e[a + t] = e[a + r - t], e[a + r - t] = i;
}
function es(e) {
	if (e === "v2:object") return globalThis.Array;
	let t = e.match(/v2:([US])(\d+)/);
	if (t) {
		let [, e, n] = t;
		return (e === "U" ? Zo : Xo).bind(null, Number(n));
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
		bool: Yo
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
function ts({ name: e, configuration: t }) {
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
function ns(e) {
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
function rs(e, t = {}) {
	let n = [], r = ns(e.dtype);
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
function is(e, t = {}) {
	return {
		zarr_format: 3,
		node_type: "group",
		attributes: t
	};
}
function as(e, t) {
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
function os(e) {
	return e?.name === "sharding_indexed";
}
function ss(e) {
	return (e.data_type === "uint64" || e.data_type === "int64") && e.fill_value != null ? BigInt(e.fill_value) : e.fill_value;
}
function cs(e, ...t) {
	if (!t.some((t) => e instanceof t)) throw e;
}
function Z(e, t = "") {
	if (!e) throw Error(t);
}
async function ls(e, { format: t, signal: n }) {
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
var us = class e {
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
}, ds = fs();
function fs() {
	let e = new Uint32Array([305419896]);
	return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)[0] !== 18;
}
function ps(e) {
	return "BYTES_PER_ELEMENT" in e ? e.BYTES_PER_ELEMENT : 4;
}
var ms = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t) {
		this.#i = e?.endian, this.#t = es(t.data_type), this.#r = t.shape, this.#e = X(t.shape, "C");
		let n = new this.#t(0);
		this.#n = n.BYTES_PER_ELEMENT;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		let t = new Uint8Array(e.data.buffer);
		return ds && this.#i === "big" && $o(t, ps(this.#t)), t;
	}
	decode(e) {
		return ds && this.#i === "big" && $o(e, ps(this.#t)), {
			data: new this.#t(e.buffer, e.byteOffset, e.byteLength / this.#n),
			shape: this.#r,
			stride: this.#e
		};
	}
}, hs = class e {
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
}, gs = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Gzip encoding is not enabled by default. Please register a custom codec with `numcodecs/gzip`.");
	}
	async decode(e) {
		let t = await ls(e, { format: "gzip" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/json2.js
function _s(e, t) {
	return Z(!Number.isNaN(t), "JsonCodec allow_nan is false but NaN was encountered during encoding."), Z(t !== Infinity, "JsonCodec allow_nan is false but Infinity was encountered during encoding."), Z(t !== -Infinity, "JsonCodec allow_nan is false but -Infinity was encountered during encoding."), t;
}
function vs(e, t) {
	return t instanceof Object && !Array.isArray(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t;
}
var ys = class e {
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
		Z(i, "JsonCodec does not yet support skipping the check for circular references during encoding."), a || s.push(_s), o && s.push(vs);
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
		let n = Qo(e), r = n.pop();
		return n.pop(), Z(r, "0D not implemented for JsonCodec."), {
			data: n,
			shape: r,
			stride: X(r, "C")
		};
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/transpose.js
function bs(e) {
	return e instanceof Yo || e instanceof Xo || e instanceof Zo ? new Proxy(e, {
		get(e, t) {
			return e.get(Number(t));
		},
		set(e, t, n) {
			return e.set(Number(t), n), !0;
		}
	}) : e;
}
function xs(e, t) {
	let n;
	return n = e.data instanceof Xo || e.data instanceof Zo ? new e.constructor(e.data.length, e.data.chars) : new e.constructor(e.data.length), {
		data: n,
		shape: e.shape,
		stride: X(e.shape, t)
	};
}
function Ss(e, t) {
	let n = xs(e, t), r = e.shape.length, i = e.data.length, a = Array(r).fill(0), o = bs(e.data), s = bs(n.data);
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
function Cs(e) {
	let t = e.shape.length;
	return Z(t === e.stride.length, "Shape and stride must have the same length."), e.stride.map((e, t) => ({
		stride: e,
		index: t
	})).sort((e, t) => t.stride - e.stride).map((e) => e.index);
}
function ws(e, t) {
	let n = Cs(e);
	return Z(n.length === t.length, "Orders must match"), n.every((e, n) => e === t[n]);
}
var Ts = class e {
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
		return ws(e, this.#t) ? e : Ss(e, this.#t);
	}
	decode(e) {
		return {
			data: e.data,
			shape: e.shape,
			stride: X(e.shape, this.#e)
		};
	}
}, Es = class e {
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
}, Ds = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Zlib encoding is not enabled by default. Please register a codec with `numcodecs/zlib`.");
	}
	async decode(e) {
		let t = await ls(e, { format: "deflate" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs.js
function Os() {
	return (/* @__PURE__ */ new Map()).set("blosc", () => import("./blosc-JROzDOnd.js").then((e) => e.default)).set("lz4", () => import("./lz4-CUYSbVey.js").then((e) => e.default)).set("zstd", () => import("./zstd-YMzMcush.js").then((e) => e.default)).set("gzip", () => gs).set("zlib", () => Ds).set("transpose", () => Ts).set("bytes", () => ms).set("crc32c", () => hs).set("vlen-utf8", () => Es).set("json2", () => ys).set("bitround", () => us);
}
var ks = Os();
function As(e) {
	let t;
	return {
		async encode(n) {
			t ||= await js(e);
			for (let e of t.array_to_array) n = await e.encode(n);
			let r = await t.array_to_bytes.encode(n);
			for (let e of t.bytes_to_bytes) r = await e.encode(r);
			return r;
		},
		async decode(n) {
			t ||= await js(e);
			for (let e = t.bytes_to_bytes.length - 1; e >= 0; e--) n = await t.bytes_to_bytes[e].decode(n);
			let r = await t.array_to_bytes.decode(n);
			for (let e = t.array_to_array.length - 1; e >= 0; e--) r = await t.array_to_array[e].decode(r);
			return r;
		}
	};
}
async function js(e) {
	let t = e.codecs.map(async (e) => {
		let t = await ks.get(e.name)?.();
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
	return r ||= (Z(Ms(e), `Cannot encode ${e.data_type} to bytes without a codec`), ms.fromConfig({ endian: "little" }, e)), {
		array_to_array: n,
		array_to_bytes: r,
		bytes_to_bytes: i
	};
}
function Ms(e) {
	return e.data_type !== "v2:object" && e.data_type !== "string";
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/errors.js
var Ns = class extends Error {
	constructor(e, t = {}) {
		super(`Node not found: ${e}`, t), this.name = "NodeNotFoundError";
	}
}, Ps = class extends Error {
	constructor(e) {
		super(`Missing key: ${e}`), this.name = "KeyError";
	}
}, Fs = 18446744073709551615n;
function Is(e, t, n, r) {
	Z(e.store.getRange, "Store does not support range requests");
	let i = e.store.getRange.bind(e.store), a = t.map((e, t) => e / r.chunk_shape[t]), o = As({
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
		if (!(g === Fs && _ === Fs)) return i(u, {
			offset: Number(g),
			length: Number(_)
		}, r);
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/hierarchy.js
var Ls = class e {
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
function Rs(e) {
	return new Ls(e ?? /* @__PURE__ */ new Map());
}
var zs = class extends Ls {
	kind = "group";
	#e;
	constructor(e, t, n) {
		super(e, t), this.#e = n;
	}
	get attrs() {
		return this.#e.attributes;
	}
};
function Bs(e) {
	return e.find((e) => e.name === "transpose")?.configuration?.order ?? "C";
}
var Q = Symbol("zarrita.context");
function Vs(e) {
	return e[Q];
}
function Hs(e, t) {
	let { configuration: n } = t.codecs.find(os) ?? {}, r = {
		encode_chunk_key: ts(t.chunk_key_encoding),
		TypedArray: es(t.data_type),
		fill_value: t.fill_value
	};
	if (n) {
		let i = Bs(n.codecs);
		return {
			...r,
			kind: "sharded",
			chunk_shape: n.chunk_shape,
			codec: As({
				data_type: t.data_type,
				shape: n.chunk_shape,
				codecs: n.codecs
			}),
			get_strides(e) {
				return X(e, i);
			},
			get_chunk_bytes: Is(e, t.chunk_grid.configuration.chunk_shape, r.encode_chunk_key, n)
		};
	}
	let i = Bs(t.codecs);
	return {
		...r,
		kind: "regular",
		chunk_shape: t.chunk_grid.configuration.chunk_shape,
		codec: As({
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
var Us = class extends Ls {
	kind = "array";
	#e;
	[Q];
	constructor(e, t, n) {
		super(e, t), this.#e = {
			...n,
			fill_value: ss(n)
		}, this[Q] = Hs(this, this.#e);
	}
	get attrs() {
		return this.#e.attributes;
	}
	get shape() {
		return this.#e.shape;
	}
	get chunks() {
		return this[Q].chunk_shape;
	}
	get dtype() {
		return this.#e.data_type;
	}
	async getChunk(e, t) {
		let n = this[Q], r = await n.get_chunk_bytes(e, t);
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
		return as(this.dtype, e);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/util.js
function* Ws(e, t, n = 1) {
	t === void 0 && (t = e, e = 0);
	for (let r = e; r < t; r += n) yield r;
}
function* Gs(...e) {
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
function Ks({ start: e, stop: t, step: n }, r) {
	if (n === 0) throw Error("slice step cannot be zero");
	n ??= 1;
	let i = n < 0, [a, o] = i ? [-1, r - 1] : [0, r];
	return e === null ? e = i ? o : a : e < 0 ? (e += r, e < a && (e = a)) : e > o && (e = o), t === null ? t = i ? a : o : t < 0 ? (t += r, t < a && (t = a)) : t > o && (t = o), [
		e,
		t,
		n
	];
}
function qs(e, t, n = null) {
	return t === void 0 && (t = e, e = null), {
		start: e,
		stop: t,
		step: n
	};
}
function Js() {
	let e = [];
	return {
		add: (t) => e.push(t()),
		onIdle: () => Promise.all(e)
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/indexer.js
var Ys = class extends Error {
	constructor(e) {
		super(e), this.name = "IndexError";
	}
};
function Xs(e, t) {
	throw new Ys(`too many indicies for array; expected ${t.length}, got ${e.length}`);
}
function Zs(e) {
	throw new Ys(`index out of bounds for dimension with length ${e}`);
}
function Qs() {
	throw new Ys("only slices with step >= 1 are supported");
}
function $s(e, t) {
	e.length > t.length && Xs(e, t);
}
function ec(e, t) {
	return e = Math.trunc(e), e < 0 && (e = t + e), (e >= t || e < 0) && Zs(t), e;
}
var tc = class {
	dim_sel;
	dim_len;
	dim_chunk_len;
	nitems;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		e = ec(e, t), this.dim_sel = e, this.dim_len = t, this.dim_chunk_len = n, this.nitems = 1;
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.dim_sel / this.dim_chunk_len), t = e * this.dim_chunk_len;
		yield {
			dim_chunk_ix: e,
			dim_chunk_sel: this.dim_sel - t
		};
	}
}, nc = class {
	start;
	stop;
	step;
	dim_len;
	dim_chunk_len;
	nitems;
	nchunks;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		let [r, i, a] = Ks(e, t);
		this.start = r, this.stop = i, this.step = a, this.step < 1 && Qs(), this.dim_len = t, this.dim_chunk_len = n, this.nitems = Math.max(0, Math.ceil((this.stop - this.start) / this.step)), this.nchunks = Math.ceil(this.dim_len / this.dim_chunk_len);
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.start / this.dim_chunk_len), t = Math.ceil(this.stop / this.dim_chunk_len);
		for (let n of Ws(e, t)) {
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
function rc(e, t) {
	let n = [];
	return e === null ? n = t.map((e) => qs(null)) : Array.isArray(e) && (n = e.map((e) => e ?? qs(null))), $s(n, t), n;
}
var ic = class {
	dim_indexers;
	shape;
	constructor({ selection: e, shape: t, chunk_shape: n }) {
		this.dim_indexers = rc(e, t).map((e, r) => new (typeof e == "number" ? tc : nc)({
			dim_sel: e,
			dim_len: t[r],
			dim_chunk_len: n[r]
		})), this.shape = this.dim_indexers.filter((e) => e instanceof nc).map((e) => e.nitems);
	}
	*[Symbol.iterator]() {
		for (let e of Gs(...this.dim_indexers)) yield {
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
function ac(e, t) {
	return "get" in e ? e.get(t) : e[t];
}
async function oc(e, t, n, r) {
	let i = Vs(e), a = new ic({
		selection: t,
		shape: e.shape,
		chunk_shape: e.chunks
	}), o = r.prepare(new i.TypedArray(a.shape.reduce((e, t) => e * t, 1)), a.shape, i.get_strides(a.shape)), s = n.create_queue?.() ?? Js();
	for (let { chunk_coords: t, mapping: i } of a) s.add(async () => {
		let { data: a, shape: s, stride: c } = await e.getChunk(t, n.opts), l = r.prepare(a, s, c);
		r.set_from_chunk(o, l, i);
	});
	return await s.onIdle(), a.shape.length === 0 ? ac(o.data, 0) : o;
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/ops.js
function sc(e, t = 0, n) {
	let r = n ?? e.length - t;
	return {
		length: r,
		subarray(n, i = r) {
			return sc(e, t + n, i - n);
		},
		set(n, r = 0) {
			for (let i = 0; i < n.length; i++) e[t + r + i] = n.get(i);
		},
		get(n) {
			return e[t + n];
		}
	};
}
function cc(e) {
	return globalThis.Array.isArray(e.data) ? {
		data: sc(e.data),
		stride: e.stride,
		bytes_per_element: 1
	} : {
		data: new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength),
		stride: e.stride,
		bytes_per_element: e.data.BYTES_PER_ELEMENT
	};
}
function lc(e) {
	return "chars" in e ? e.constructor.bind(null, e.chars) : e.constructor;
}
function uc(e, t) {
	if (globalThis.Array.isArray(e.data)) return sc([t]);
	let n = new (lc(e.data))([t]);
	return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
var dc = {
	prepare(e, t, n) {
		return {
			data: e,
			shape: t,
			stride: n
		};
	},
	set_scalar(e, t, n) {
		let r = cc(e);
		mc(r, t, uc(e, n), r.bytes_per_element);
	},
	set_from_chunk(e, t, n) {
		let r = cc(e);
		hc(r, cc(t), r.bytes_per_element, n);
	}
};
async function fc(e, t = null, n = {}) {
	return oc(e, t, n, dc);
}
function pc(e, t, n) {
	return n < 0 && t < e ? Math.floor((e - t - 1) / -n) + 1 : e < t ? Math.floor((t - e - 1) / n) + 1 : 0;
}
function mc(e, t, n, r) {
	if (t.length === 0) {
		e.data.set(n, 0);
		return;
	}
	let [i, ...a] = t, [o, ...s] = e.stride;
	if (typeof i == "number") {
		mc({
			data: e.data.subarray(o * i * r),
			stride: s
		}, a, n, r);
		return;
	}
	let [c, l, u] = i, d = pc(c, l, u);
	if (a.length === 0) {
		for (let t = 0; t < d; t++) e.data.set(n, o * (c + u * t) * r);
		return;
	}
	for (let t = 0; t < d; t++) mc({
		data: e.data.subarray(o * (c + u * t) * r),
		stride: s
	}, a, n, r);
}
function hc(e, t, n, r) {
	let [i, ...a] = r, [o, ...s] = e.stride, [c, ...l] = t.stride;
	if (i.from === null) {
		if (a.length === 0) {
			e.data.set(t.data.subarray(0, n), i.to * n);
			return;
		}
		hc({
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
		hc(e, {
			data: t.data.subarray(c * i.from * n),
			stride: l
		}, n, a);
		return;
	}
	let [u, d, f] = i.to, [p, m, h] = i.from, g = pc(u, d, f);
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
	for (let r = 0; r < g; r++) hc({
		data: e.data.subarray(o * (u + r * f) * n),
		stride: s
	}, {
		data: t.data.subarray(c * (p + r * h) * n),
		stride: l
	}, n, a);
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/open.js
var gc = _c();
function _c() {
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
async function vc(e) {
	let t = await e.store.get(e.resolve(".zattrs").path);
	return t ? Qo(t) : {};
}
async function yc(e, t = {}) {
	let n = "store" in e ? e : new Ls(e), r = {};
	return (t.attrs ?? !0) && (r = await vc(n)), t.kind === "array" ? bc(n, r) : t.kind === "group" ? xc(n, r) : bc(n, r).catch((e) => (cs(e, Ns), xc(n, r)));
}
async function bc(e, t) {
	let { path: n } = e.resolve(".zarray"), r = await e.store.get(n);
	if (!r) throw new Ns("v2 array", { cause: new Ps(n) });
	return gc.increment(e.store, "v2"), new Us(e.store, e.path, rs(Qo(r), t));
}
async function xc(e, t) {
	let { path: n } = e.resolve(".zgroup"), r = await e.store.get(n);
	if (!r) throw new Ns("v2 group", { cause: new Ps(n) });
	return gc.increment(e.store, "v2"), new zs(e.store, e.path, is(Qo(r), t));
}
async function Sc(e) {
	let { store: t, path: n } = e.resolve("zarr.json"), r = await e.store.get(n);
	if (!r) throw new Ns("v3 array or group", { cause: new Ps(n) });
	let i = Qo(r);
	return i.node_type === "array" && (i.fill_value = ss(i)), i.node_type === "array" ? new Us(t, e.path, i) : new zs(t, e.path, i);
}
async function Cc(e, t = {}) {
	let n = "store" in e ? e : new Ls(e), r = await Sc(n);
	if (gc.increment(n.store, "v3"), t.kind === void 0 || t.kind === "array" && r instanceof Us || t.kind === "group" && r instanceof zs) return r;
	let i = r instanceof Us ? "array" : "group";
	throw Error(`Expected node of kind ${t.kind}, found ${i}.`);
}
async function $(e, t = {}) {
	let n = "store" in e ? e.store : e, r = gc.version_max(n), i = r === "v2" ? $.v2 : $.v3, a = r === "v2" ? $.v3 : $.v2;
	return i(e, t).catch((n) => (cs(n, Ns), a(e, t)));
}
$.v2 = yc, $.v3 = Cc;
//#endregion
//#region ../app/src/sampleView/metadata/adapters/zarrMetadataSourceAdapter.js
function wc(e) {
	return e.startsWith("/") ? e.slice(1) : e;
}
function Tc(e) {
	if (e.shape.length !== 1) throw Error("Expected a one-dimensional Zarr selection result.");
	let t = e.shape[0], n = e.stride[0], r = [];
	for (let i = 0; i < t; i++) {
		let t = i * n;
		typeof e.data?.get == "function" ? r.push(e.data.get(t)) : r.push(e.data[t]);
	}
	return r;
}
function Ec(e, t, n, r = {}) {
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
var Dc = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e, t = {}) {
		this.#e = e, this.#t = e.backend, this.#n = new Jo(h(t.baseUrl, this.#t.url)), this.#s = new Set(e.excludeColumns ?? []);
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
			let r = Bo(await this.#h(n.path, t), e);
			return Oc({
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
			let c = Tc(await fc(n, [qs(null), e], t ? { opts: { signal: t } } : void 0));
			for (let e = 0; e < o.length; e++) {
				let t = a.get(o[e]);
				s[e][r] = c[t];
			}
		}
		let c = No(e.sampleIds, s);
		if ("error" in c) {
			let e = c.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		let l = zo(this.#e, e.columnIds), u = e.groupPath ?? this.#e.groupPath, d = Fi(s, l, this.#e.attributeGroupSeparator, u);
		return e.replace !== void 0 && (d.replace = e.replace), d;
	}
	async #c() {
		let e = wc(this.#t.matrix?.valuesPath ?? "X");
		return $(Rs(this.#n).resolve(e), { kind: "array" });
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
		for (let e = 0; e < t.length; e++) this.#g(t[e]) || Ec(n, t[e], e);
		for (let r of this.#t.identifiers ?? []) {
			let i = await this.#m(r.path, e);
			if (i.length !== t.length) throw Error("Identifier array \"" + r.path + "\" does not match the number of matrix columns.");
			for (let e = 0; e < i.length; e++) this.#g(t[e]) || Ec(n, i[e], e, { stripVersionSuffix: r.stripVersionSuffix });
		}
		return n;
	}
	async #m(e, t) {
		return Tc(await fc(await $(Rs(this.#n).resolve(wc(e)), { kind: "array" }), [qs(null)], t ? { opts: { signal: t } } : void 0));
	}
	async #h(e, t) {
		return (await this.#m(e, t)).map((e) => String(e));
	}
	#g(e) {
		return this.#s.has(e);
	}
};
function Oc(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAdapters.js
async function kc(e, n) {
	try {
		return await i(e, { signal: n });
	} catch (n) {
		if (n instanceof t && n.kind === "json") throw Error("Invalid JSON in metadata source import " + e + ": " + n.message, { cause: n });
		let r = n instanceof Error ? n.message : String(n);
		throw Error("Could not load metadata source import from " + e + ": " + r, { cause: n });
	}
}
function Ac(e) {
	if ("columnDefs" in e) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"columnDefs\". Use \"attributes\" instead.");
	}
	if (e.backend.backend === "zarr" && "synonymIndex" in e.backend) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"backend.synonymIndex\". Use \"backend.identifiers\" instead.");
	}
}
function jc(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Metadata source import " + t + " must resolve to a single source object.");
	if ("import" in e) throw Error("Nested metadata source imports are not supported: " + t);
	if ("backend" in e) return e;
	throw Error("Metadata source import \"" + t + "\" is missing required property \"backend\".");
}
function Mc(e, t) {
	if (e.backend.backend === "data") {
		let n = e.backend.data;
		return n && typeof n == "object" && !Array.isArray(n) && "url" in n && typeof n.url == "string" ? {
			...e,
			backend: {
				...e.backend,
				data: {
					...n,
					url: te(t, n.url)
				}
			}
		} : e;
	}
	return "url" in e.backend && typeof e.backend.url == "string" ? {
		...e,
		backend: {
			...e.backend,
			url: te(t, e.backend.url)
		}
	} : e;
}
async function Nc(e, t = {}) {
	let n = e?.sources ?? [], r = t.loadJson ?? kc;
	return Promise.all(n.map(async (e) => {
		if (!("import" in e)) return Ac(e), e;
		let n = te(t.baseUrl, e.import.url), i = Mc(jc(await r(n, t.signal), n), n);
		return Ac(i), i;
	}));
}
function Pc(e, t) {
	if (e.length === 0) throw Error("No metadata sources are configured.");
	if (t !== void 0) {
		let n = e.find((e) => e.id === t);
		if (!n) throw Error("Metadata source \"" + t + "\" was not found.");
		return n;
	}
	if (e.length !== 1) throw Error("Metadata source id is required when multiple sources are configured.");
	return e[0];
}
function Fc(e, t = {}) {
	if (e.backend.backend === "data") return new Ho(e, t);
	if (e.backend.backend === "zarr") return new Dc(e, t);
	throw Error("Metadata backend \"" + e.backend.backend + "\" is not implemented yet.");
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceInitialLoad.js
function Ic(e) {
	return e.initialLoad === void 0 ? e.backend.backend === "data" && "*" : e.initialLoad;
}
async function Lc(e, t, n) {
	let r = Ic(e);
	return r === !1 ? [] : r === "*" ? (await t.listColumns(n)).map((e) => e.id) : (await t.resolveColumns(r, n)).columnIds;
}
function Rc(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 100) t.push(e.slice(n, n + 100));
	return t;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceSummaries.js
var zc = 3;
async function Bc(e, t = {}) {
	let n = e.filter((e) => Ic(e) === !1);
	return Promise.all(n.map((e) => Vc(e, t)));
}
async function Vc(e, t) {
	if (!t.getAdapter) throw Error("Metadata source summary adapter is required.");
	let n = await t.getAdapter(e).listIdentifierExamples(t.maxExamples ?? zc, t.signal);
	return Uc({
		sourceId: e.id,
		name: e.name,
		description: e.description,
		attributeDefaults: Hc(e),
		identifiers: n
	});
}
function Hc(e) {
	let t = e.attributes?.[""];
	if (t) return Uc({
		dataType: t.type,
		description: t.description
	});
}
function Uc(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntimeState.js
var Wc = /* @__PURE__ */ new WeakMap(), Gc = class {
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
			delete e.signal, this.#n = Nc(this.#e.spec.metadata, {
				...e,
				baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl()
			}).catch((e) => {
				throw this.#n = void 0, e;
			});
		}
		return this.#n;
	}
	async getSource(e) {
		return Pc(await this.getSources(), e);
	}
	getAdapter(e) {
		let t = this.#r.get(e);
		return t || (t = Fc(e, { baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl() }), this.#r.set(e, t)), t;
	}
	getAgentSummaries(e) {
		return this.#i ||= this.getSources().then((t) => Bc(t, {
			getAdapter: (e) => this.getAdapter(e),
			signal: e
		})).catch((e) => {
			throw this.#i = void 0, e;
		}), this.#i;
	}
};
function Kc(e, t) {
	return new Gc(e, t);
}
function qc(e) {
	let t = Wc.get(e);
	return t || (t = Kc(e), Wc.set(e, t)), t;
}
//#endregion
//#region ../app/src/sampleView/unknownAttributeInfoError.js
var Jc = class extends Error {
	constructor(e) {
		super(e), this.name = "UnknownAttributeInfoError";
	}
};
//#endregion
//#region ../app/src/charts/chartDialogUtils.js
function Yc(e, t, n, r = ".chart-container") {
	if (!t) throw Error("Chart is not ready for export.");
	let i = e.querySelector(r);
	if (!i) throw Error("Cannot find chart container.");
	let a = t.exportCanvas(i.clientWidth, i.clientHeight, 3, "white"), o = document.createElement("a");
	o.href = a, o.download = n, document.body.appendChild(o), o.click(), document.body.removeChild(o);
}
async function Xc(e, t) {
	return f(e, t.namedData.length > 0 ? {
		...t.spec,
		datasets: {
			...t.spec.datasets,
			...Object.fromEntries(t.namedData.map((e) => [e.name, e.rows]))
		}
	} : t.spec);
}
//#endregion
//#region ../app/src/agentApi/index.js
var Zc = /* @__PURE__ */ e({ createAgentApi: () => Qc });
function Qc(e) {
	return {
		getSampleHierarchy() {
			return e.getSampleView()?.sampleHierarchy;
		},
		getMetadataSourceSummaries(t) {
			let n = e.getSampleView();
			return n ? qc(n).getAgentSummaries(t) : Promise.resolve([]);
		},
		getAttributeInfo(t) {
			let n = e.getSampleView();
			if (n) try {
				return n.compositeAttributeInfoSource.getAttributeInfo(t);
			} catch (e) {
				if (e instanceof Jc) return;
				throw e;
			}
		},
		materializeAttributeIdentifier(t) {
			let n = e.getSampleView();
			if (!n || !el(t)) return t;
			let r = t.specifier;
			return {
				...t,
				specifier: {
					...r,
					interval: Jn(n, r.interval)
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
			if (n) return ie(n, t);
		},
		getSelectionFeatureFieldValues(t, n, r) {
			let i = e.genomeSpy.viewRoot;
			if (!i) return;
			let a = ie(i, t);
			if (a) return $n(a, n, r);
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
				let e = await $c(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "nominal" && e.type !== "ordinal") throw Error("Bar plots require a categorical sample attribute.");
				return bo({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			} else if (i === "boxplot") {
				let e = await $c(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "quantitative") throw Error("Box plots require a quantitative sample attribute.");
				return xo({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			} else if (i === "scatterplot") {
				let e = await $c(r, t.xAttribute, t.xAttributeLabel), i = await $c(r, t.yAttribute, t.yAttributeLabel);
				if (!e || !i) throw Error("Could not resolve one of the requested sample attributes.");
				if (e.type !== "quantitative" || i.type !== "quantitative") throw Error("Scatter plots require two quantitative sample attributes.");
				let a = Mo(n);
				return So({
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
			e.store.dispatch(kn.actions.setVisibility({
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
async function $c(e, t, n) {
	let r;
	try {
		r = e.getAttributeInfo(t);
	} catch (e) {
		if (e instanceof Jc) return;
		throw e;
	}
	if (r) return r.ensureAvailability && await r.ensureAvailability({}), n ? {
		...r,
		title: n,
		emphasizedName: n
	} : r;
}
function el(e) {
	let t = e.specifier;
	return e.type === "VALUE_AT_LOCUS" && typeof t == "object" && !!t && "interval" in t && qn(t.interval);
}
//#endregion
export { vr as $, ia as A, Wi as B, Fa as C, ma as D, ya as E, Qi as F, V as G, ki as H, Oi as I, Nr as J, yi as K, Li as L, $i as M, na as N, ba as O, W as P, fr as Q, Di as R, Ha as S, Sa as T, Ai as U, Gi as V, U as W, Rr as X, Lr as Y, br as Z, ka as _, Mn as _t, qc as a, qn as at, Ba as b, mn as bt, Lc as c, zn as ct, Mo as d, Fn as dt, gr as et, bo as f, In as ft, Ka as g, Nn as gt, Ga as h, An as ht, Jc as i, Jn as it, ea as j, ha as k, Fc as l, Vn as lt, So as m, Hn as mt, Yc as n, Zn as nt, Rc as o, Gn as ot, xo as p, Ln as pt, $r as q, Xc as r, Yn as rt, Ic as s, Kn as st, Zc as t, er as tt, No as u, Bn as ut, Ua as v, kn as vt, _a as w, Va as x, _e as xt, za as y, on as yt, ji as z };
