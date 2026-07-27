import { n as e, t } from "./rolldown-runtime-DF993M8W.js";
import { $ as n, A as r, B as i, C as a, Ct as o, D as s, E as c, F as l, G as u, H as d, I as f, J as p, L as m, M as h, N as g, O as _, P as v, Q as y, R as b, S as x, T as S, U as C, V as w, W as T, X as E, Y as D, Z as O, _ as k, _t as A, a as ee, at as j, b as M, bt as N, c as P, ct as F, d as te, dt as ne, et as re, f as ie, ft as ae, g as oe, gt as se, h as ce, ht as le, i as ue, it as de, j as fe, k as pe, l as me, lt as he, m as ge, mt as _e, n as ve, nt as ye, o as be, ot as xe, p as Se, pt as Ce, r as we, rt as Te, s as Ee, st as De, t as Oe, tt as ke, u as Ae, ut as je, v as Me, vt as I, w as Ne, wt as Pe, x as Fe, xt as L, y as Ie, yt as Le, z as Re } from "./src-B9yDyTu1.js";
import { A as ze, At as Be, Cn as Ve, F as He, Fr as Ue, H as We, Ht as Ge, I as Ke, In as qe, Ir as Je, It as Ye, Jt as Xe, Kr as Ze, Kt as Qe, L as $e, Lr as et, Lt as tt, Mn as nt, Mr as rt, N as it, Nt as at, Qt as ot, Rr as st, S as ct, Ur as lt, Ut as ut, V as dt, Vr as ft, Wt as pt, Xt as mt, Yt as ht, Zt as gt, _ as _t, _n as vt, a as yt, bt, c as xt, d as St, dr as Ct, en as wt, f as Tt, g as Et, ht as Dt, jt as Ot, k as kt, l as At, lr as jt, mt as Mt, n as Nt, o as Pt, on as Ft, pt as It, q as Lt, qt as Rt, r as zt, s as Bt, sn as Vt, tn as Ht, v as Ut, wt as Wt, xt as Gt, y as Kt } from "./viewIdentityRegistry-DLQWeb1Y.js";
import { a as qt, c as Jt, i as Yt, l as Xt, n as Zt, o as Qt, r as $t, s as en, t as tn, u as nn } from "./ref-DgHhvQG9.js";
//#region ../../node_modules/d3-array/src/array.js
var rn = Array.prototype, an = rn.slice;
rn.map;
//#endregion
//#region ../../node_modules/d3-array/src/constant.js
function on(e) {
	return () => e;
}
//#endregion
//#region ../../node_modules/d3-array/src/nice.js
function sn(e, t, n) {
	let r;
	for (;;) {
		let i = ft(e, t, n);
		if (i === r || i === 0 || !isFinite(i)) return [e, t];
		i > 0 ? (e = Math.floor(e / i) * i, t = Math.ceil(t / i) * i) : i < 0 && (e = Math.ceil(e * i) / i, t = Math.floor(t * i) / i), r = i;
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/threshold/sturges.js
function cn(e) {
	return Math.max(1, Math.ceil(Math.log(se(e)) / Math.LN2) + 1);
}
//#endregion
//#region ../../node_modules/d3-array/src/bin.js
function ln() {
	var e = _e, t = le, n = cn;
	function r(r) {
		Array.isArray(r) || (r = Array.from(r));
		var i, a = r.length, o, s, c = Array(a);
		for (i = 0; i < a; ++i) c[i] = e(r[i], i, r);
		var l = t(c), u = l[0], d = l[1], f = n(c, u, d);
		if (!Array.isArray(f)) {
			let e = d, n = +f;
			if (t === le && ([u, d] = sn(u, d, n)), f = lt(u, d, n), f[0] <= u && (s = ft(u, d, n)), f[f.length - 1] >= d) if (e >= d && t === le) {
				let e = ft(u, d, n);
				isFinite(e) && (e > 0 ? d = (Math.floor(d / e) + 1) * e : e < 0 && (d = (Math.ceil(d * -e) + 1) / -e));
			} else f.pop();
		}
		for (var p = f.length, m = 0, h = p; f[m] <= u;) ++m;
		for (; f[h - 1] > d;) --h;
		(m || h < p) && (f = f.slice(m, h), p = h - m);
		var g = Array(p + 1), _;
		for (i = 0; i <= p; ++i) _ = g[i] = [], _.x0 = i > 0 ? f[i - 1] : u, _.x1 = i < p ? f[i] : d;
		if (isFinite(s)) {
			if (s > 0) for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[Math.min(p, Math.floor((o - u) / s))].push(r[i]);
			else if (s < 0) {
				for (i = 0; i < a; ++i) if ((o = c[i]) != null && u <= o && o <= d) {
					let e = Math.floor((u - o) * s);
					g[Math.min(p, e + (f[e] <= o))].push(r[i]);
				}
			}
		} else for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[Ze(f, o, 0, p)].push(r[i]);
		return g;
	}
	return r.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : on(t), r) : e;
	}, r.domain = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : on([e[0], e[1]]), r) : t;
	}, r.thresholds = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : on(Array.isArray(e) ? an.call(e) : e), r) : n;
	}, r;
}
//#endregion
//#region ../../node_modules/d3-ease/src/quad.js
function un(e) {
	return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2;
}
//#endregion
//#region ../../node_modules/d3-ease/src/math.js
function dn(e) {
	return (2 ** (-10 * e) - .0009765625) * 1.0009775171065494;
}
//#endregion
//#region ../../node_modules/d3-ease/src/exp.js
function fn(e) {
	return 1 - dn(e);
}
//#endregion
//#region ../../node_modules/redux/dist/redux.mjs
function R(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var pn = typeof Symbol == "function" && Symbol.observable || "@@observable", mn = () => Math.random().toString(36).substring(7).split("").join("."), hn = {
	INIT: `@@redux/INIT${/* @__PURE__ */ mn()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ mn()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mn()}`
};
function gn(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function _n(e, t, n) {
	if (typeof e != "function") throw Error(R(2));
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw Error(R(0));
	if (typeof t == "function" && n === void 0 && (n = t, t = void 0), n !== void 0) {
		if (typeof n != "function") throw Error(R(1));
		return n(_n)(e, t);
	}
	let r = e, i = t, a = /* @__PURE__ */ new Map(), o = a, s = 0, c = !1;
	function l() {
		o === a && (o = /* @__PURE__ */ new Map(), a.forEach((e, t) => {
			o.set(t, e);
		}));
	}
	function u() {
		if (c) throw Error(R(3));
		return i;
	}
	function d(e) {
		if (typeof e != "function") throw Error(R(4));
		if (c) throw Error(R(5));
		let t = !0;
		l();
		let n = s++;
		return o.set(n, e), function() {
			if (t) {
				if (c) throw Error(R(6));
				t = !1, l(), o.delete(n), a = null;
			}
		};
	}
	function f(e) {
		if (!gn(e)) throw Error(R(7));
		if (e.type === void 0) throw Error(R(8));
		if (typeof e.type != "string") throw Error(R(17));
		if (c) throw Error(R(9));
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
		if (typeof e != "function") throw Error(R(10));
		r = e, f({ type: hn.REPLACE });
	}
	function m() {
		let e = d;
		return {
			subscribe(t) {
				if (typeof t != "object" || !t) throw Error(R(11));
				function n() {
					let e = t;
					e.next && e.next(u());
				}
				return n(), { unsubscribe: e(n) };
			},
			[pn]() {
				return this;
			}
		};
	}
	return f({ type: hn.INIT }), {
		dispatch: f,
		subscribe: d,
		getState: u,
		replaceReducer: p,
		[pn]: m
	};
}
function vn(e) {
	Object.keys(e).forEach((t) => {
		let n = e[t];
		if (n(void 0, { type: hn.INIT }) === void 0) throw Error(R(12));
		if (n(void 0, { type: hn.PROBE_UNKNOWN_ACTION() }) === void 0) throw Error(R(13));
	});
}
function yn(e) {
	let t = Object.keys(e), n = {};
	for (let r = 0; r < t.length; r++) {
		let i = t[r];
		typeof e[i] == "function" && (n[i] = e[i]);
	}
	let r = Object.keys(n), i;
	try {
		vn(n);
	} catch (e) {
		i = e;
	}
	return function(e = {}, t) {
		if (i) throw i;
		let a = !1, o = {};
		for (let i = 0; i < r.length; i++) {
			let s = r[i], c = n[s], l = e[s], u = c(l, t);
			if (u === void 0) throw t && t.type, Error(R(14));
			o[s] = u, a ||= u !== l;
		}
		return a ||= r.length !== Object.keys(e).length, a ? o : e;
	};
}
function bn(...e) {
	return e.length === 0 ? (e) => e : e.length === 1 ? e[0] : e.reduce((e, t) => (...n) => e(t(...n)));
}
function xn(...e) {
	return (t) => (n, r) => {
		let i = t(n, r), a = () => {
			throw Error(R(15));
		}, o = {
			getState: i.getState,
			dispatch: (e, ...t) => a(e, ...t)
		};
		return a = bn(...e.map((e) => e(o)))(i.dispatch), {
			...i,
			dispatch: a
		};
	};
}
function Sn(e) {
	return gn(e) && "type" in e && typeof e.type == "string";
}
//#endregion
//#region ../../node_modules/immer/dist/immer.mjs
var Cn = Symbol.for("immer-nothing"), wn = Symbol.for("immer-draftable"), Tn = Symbol.for("immer-state");
function En(e, ...t) {
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var Dn = Object, On = Dn.getPrototypeOf, kn = "constructor", An = "prototype", jn = "configurable", Mn = "enumerable", Nn = "writable", Pn = "value", Fn = (e) => !!e && !!e[Tn];
function In(e) {
	return e ? zn(e) || qn(e) || !!e[wn] || !!e[kn]?.[wn] || Jn(e) || Yn(e) : !1;
}
var Ln = Dn[An][kn].toString(), Rn = /* @__PURE__ */ new WeakMap();
function zn(e) {
	if (!e || !Xn(e)) return !1;
	let t = On(e);
	if (t === null || t === Dn[An]) return !0;
	let n = Dn.hasOwnProperty.call(t, kn) && t[kn];
	if (n === Object) return !0;
	if (!Zn(n)) return !1;
	let r = Rn.get(n);
	return r === void 0 && (r = Function.toString.call(n), Rn.set(n, r)), r === Ln;
}
function Bn(e) {
	return Fn(e) || En(15, e), e[Tn].base_;
}
function Vn(e, t, n = !0) {
	Hn(e) === 0 ? (n ? Reflect.ownKeys(e) : Dn.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function Hn(e) {
	let t = e[Tn];
	return t ? t.type_ : qn(e) ? 1 : Jn(e) ? 2 : Yn(e) ? 3 : 0;
}
var Un = (e, t, n = Hn(e)) => n === 2 ? e.has(t) : Dn[An].hasOwnProperty.call(e, t), Wn = (e, t, n = Hn(e)) => n === 2 ? e.get(t) : e[t], Gn = (e, t, n, r = Hn(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Kn(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var qn = Array.isArray, Jn = (e) => e instanceof Map, Yn = (e) => e instanceof Set, Xn = (e) => typeof e == "object", Zn = (e) => typeof e == "function", Qn = (e) => typeof e == "boolean";
function $n(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var er = (e) => e.copy_ || e.base_, tr = (e) => e.modified_ ? e.copy_ : e.base_;
function nr(e, t) {
	if (Jn(e)) return new Map(e);
	if (Yn(e)) return new Set(e);
	if (qn(e)) return Array[An].slice.call(e);
	let n = zn(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = Dn.getOwnPropertyDescriptors(e);
		delete t[Tn];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[Nn] === !1 && (a[Nn] = !0, a[jn] = !0), (a.get || a.set) && (t[i] = {
				[jn]: !0,
				[Nn]: !0,
				[Mn]: a[Mn],
				[Pn]: e[i]
			});
		}
		return Dn.create(On(e), t);
	} else {
		let t = On(e);
		if (t !== null && n) return { ...e };
		let r = Dn.create(t);
		return Dn.assign(r, e);
	}
}
function rr(e, t = !1) {
	return or(e) || Fn(e) || !In(e) ? e : (Hn(e) > 1 && Dn.defineProperties(e, {
		set: ar,
		add: ar,
		clear: ar,
		delete: ar
	}), Dn.freeze(e), t && Vn(e, (e, t) => {
		rr(t, !0);
	}, !1), e);
}
function ir() {
	En(2);
}
var ar = { [Pn]: ir };
function or(e) {
	return e === null || !Xn(e) ? !0 : Dn.isFrozen(e);
}
var sr = "MapSet", cr = "Patches", lr = "ArrayMethods", ur = {};
function dr(e) {
	let t = ur[e];
	return t || En(0, e), t;
}
var fr = (e) => !!ur[e], pr, mr = () => pr, hr = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: fr(sr) ? dr(sr) : void 0,
	arrayMethodsPlugin_: fr(lr) ? dr(lr) : void 0
});
function gr(e, t) {
	t && (e.patchPlugin_ = dr(cr), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function _r(e) {
	vr(e), e.drafts_.forEach(br), e.drafts_ = null;
}
function vr(e) {
	e === pr && (pr = e.parent_);
}
var yr = (e) => pr = hr(pr, e);
function br(e) {
	let t = e[Tn];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function xr(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[Tn].modified_ && (_r(t), En(4)), In(e) && (e = Sr(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[Tn].base_, e, t);
	} else e = Sr(t, n);
	return Cr(t, e, !0), _r(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === Cn ? void 0 : e;
}
function Sr(e, t) {
	if (or(t)) return t;
	let n = t[Tn];
	if (!n) return jr(t, e.handledSet_, e);
	if (!Tr(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		kr(n, e);
	}
	return n.copy_;
}
function Cr(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && rr(t, n);
}
function wr(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Tr = (e, t) => e.scope_ === t, Er = [];
function Dr(e, t, n, r) {
	let i = er(e), a = e.type_;
	if (r !== void 0 && Wn(i, r, a) === t) {
		Gn(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Vn(i, (e, n) => {
			if (Fn(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? Er;
	for (let e of o) Gn(i, e, n, a);
}
function Or(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !Tr(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = tr(i);
		Dr(e, i.draft_ ?? i, a, n), kr(i, r);
	});
}
function kr(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		wr(e);
	}
}
function Ar(e, t, n) {
	let { scope_: r } = e;
	if (Fn(n)) {
		let i = n[Tn];
		Tr(i, r) && i.callbacks_.push(function() {
			zr(e), Dr(e, n, tr(i), t);
		});
	} else In(n) && e.callbacks_.push(function() {
		let i = er(e);
		e.type_ === 3 ? i.has(n) && jr(n, r.handledSet_, r) : Wn(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && jr(Wn(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function jr(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || Fn(e) || t.has(e) || !In(e) || or(e) ? e : (t.add(e), Vn(e, (r, i) => {
		if (Fn(i)) {
			let t = i[Tn];
			Tr(t, n) && (Gn(e, r, tr(t), e.type_), wr(t));
		} else In(i) && jr(i, t, n);
	}), e);
}
function Mr(e, t) {
	let n = qn(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : mr(),
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
	}, i = r, a = Nr;
	n && (i = [r], a = Pr);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var Nr = {
	get(e, t) {
		if (t === Tn) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = er(e);
		if (!Un(i, t, e.type_)) return Ir(e, i, t);
		let a = i[t];
		if (e.finalized_ || !In(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && $n(t)) return a;
		if (a === Fr(e.base_, t)) {
			zr(e);
			let n = e.type_ === 1 ? +t : t, r = Vr(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in er(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(er(e));
	},
	set(e, t, n) {
		let r = Lr(er(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = Fr(er(e), t), i = r?.[Tn];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (Kn(n, r) && (n !== void 0 || Un(e.base_, t, e.type_))) return !0;
			zr(e), Rr(e);
		}
		return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) ? !0 : (e.copy_[t] = n, e.assigned_.set(t, !0), Ar(e, t, n), !0);
	},
	deleteProperty(e, t) {
		return zr(e), Fr(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Rr(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = er(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[Nn]: !0,
			[jn]: e.type_ !== 1 || t !== "length",
			[Mn]: r[Mn],
			[Pn]: n[t]
		};
	},
	defineProperty() {
		En(11);
	},
	getPrototypeOf(e) {
		return On(e.base_);
	},
	setPrototypeOf() {
		En(12);
	}
}, Pr = {};
for (let e in Nr) {
	let t = Nr[e];
	Pr[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
Pr.deleteProperty = function(e, t) {
	return Pr.set.call(this, e, t, void 0);
}, Pr.set = function(e, t, n) {
	return Nr.set.call(this, e[0], t, n, e[0]);
};
function Fr(e, t) {
	let n = e[Tn];
	return (n ? er(n) : e)[t];
}
function Ir(e, t, n) {
	let r = Lr(t, n);
	return r ? Pn in r ? r[Pn] : r.get?.call(e.draft_) : void 0;
}
function Lr(e, t) {
	if (!(t in e)) return;
	let n = On(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = On(n);
	}
}
function Rr(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && Rr(e.parent_));
}
function zr(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), nr(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Br = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (Zn(e) && !Zn(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			Zn(t) || En(6), n !== void 0 && !Zn(n) && En(7);
			let r;
			if (In(e)) {
				let i = yr(this), a = Vr(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? _r(i) : vr(i);
				}
				return gr(i, n), xr(r, i);
			} else if (!e || !Xn(e)) {
				if (r = t(e), r === void 0 && (r = e), r === Cn && (r = void 0), this.autoFreeze_ && rr(r, !0), n) {
					let t = [], i = [];
					dr(cr).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			} else En(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (Zn(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, Qn(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), Qn(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), Qn(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		In(e) || En(8), Fn(e) && (e = Hr(e));
		let t = yr(this), n = Vr(t, e, void 0);
		return n[Tn].isManual_ = !0, vr(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[Tn];
		(!n || !n.isManual_) && En(9);
		let { scope_: r } = n;
		return gr(r, t), xr(void 0, r);
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
		let r = dr(cr).applyPatches_;
		return Fn(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function Vr(e, t, n, r) {
	let [i, a] = Jn(t) ? dr(sr).proxyMap_(t, n) : Yn(t) ? dr(sr).proxySet_(t, n) : Mr(t, n);
	return (n?.scope_ ?? mr()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? Or(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Hr(e) {
	return Fn(e) || En(10, e), Ur(e);
}
function Ur(e) {
	if (!In(e) || or(e)) return e;
	let t = e[Tn], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = nr(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = nr(e, !0);
	return Vn(n, (e, t) => {
		Gn(n, e, Ur(t));
	}, r), t && (t.finalized_ = !1), n;
}
var Wr = new Br().produce;
//#endregion
//#region ../../node_modules/reselect/dist/reselect.mjs
function Gr(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw TypeError(t);
}
function Kr(e, t = "expected all items to be functions, instead received the following types: ") {
	if (!e.every((e) => typeof e == "function")) {
		let n = e.map((e) => typeof e == "function" ? `function ${e.name || "unnamed"}()` : typeof e).join(", ");
		throw TypeError(`${t}[${n}]`);
	}
}
var qr = (e) => Array.isArray(e) ? e : [e];
function Jr(e) {
	let t = Array.isArray(e[0]) ? e[0] : e;
	return Kr(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Yr(e, t) {
	let n = [], { length: r } = e;
	for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
	return n;
}
var Xr = class {
	constructor(e) {
		this.value = e;
	}
	deref() {
		return this.value;
	}
}, Zr = typeof WeakRef > "u" ? Xr : WeakRef, Qr = 0, $r = 1;
function ei() {
	return {
		s: Qr,
		v: void 0,
		o: null,
		p: null
	};
}
function ti(e) {
	return e instanceof Zr ? e.deref() : e;
}
function ni(e, t = {}) {
	let n = ei(), { resultEqualityCheck: r } = t, i, a = 0;
	function o() {
		let t = n, { length: o } = arguments;
		for (let e = 0, n = o; e < n; e++) {
			let n = arguments[e];
			if (typeof n == "function" || typeof n == "object" && n) {
				let e = t.o;
				e === null && (t.o = e = /* @__PURE__ */ new WeakMap());
				let r = e.get(n);
				r === void 0 ? (t = ei(), e.set(n, t)) : t = r;
			} else {
				let e = t.p;
				e === null && (t.p = e = /* @__PURE__ */ new Map());
				let r = e.get(n);
				r === void 0 ? (t = ei(), e.set(n, t)) : t = r;
			}
		}
		let s = t, c;
		if (t.s === $r) c = t.v;
		else if (c = e.apply(null, arguments), a++, r) {
			let e = ti(i);
			e != null && r(e, c) && (c = e, a !== 0 && a--), i = typeof c == "object" && c || typeof c == "function" ? /* @__PURE__ */ new Zr(c) : c;
		}
		return s.s = $r, s.v = c, c;
	}
	return o.clearCache = () => {
		n = ei(), o.resetResultsCount();
	}, o.resultsCount = () => a, o.resetResultsCount = () => {
		a = 0;
	}, o;
}
function ri(e, ...t) {
	let n = typeof e == "function" ? {
		memoize: e,
		memoizeOptions: t
	} : e, r = (...e) => {
		let t = 0, r = 0, i, a = {}, o = e.pop();
		typeof o == "object" && (a = o, o = e.pop()), Gr(o, `createSelector expects an output function after the inputs, but received: [${typeof o}]`);
		let { memoize: s, memoizeOptions: c = [], argsMemoize: l = ni, argsMemoizeOptions: u = [] } = {
			...n,
			...a
		}, d = qr(c), f = qr(u), p = Jr(e), m = s(function() {
			return t++, o.apply(null, arguments);
		}, ...d), h = l(function() {
			r++;
			let e = Yr(p, arguments);
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
var ii = /* @__PURE__ */ ri(ni);
//#endregion
//#region ../../node_modules/redux-thunk/dist/redux-thunk.mjs
function ai(e) {
	return ({ dispatch: t, getState: n }) => (r) => (i) => typeof i == "function" ? i(t, n, e) : r(i);
}
var oi = ai(), si = ai, ci = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length !== 0) return typeof arguments[0] == "object" ? bn : bn.apply(null, arguments);
};
typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
function li(e, t) {
	function n(...n) {
		if (t) {
			let r = t(...n);
			if (!r) throw Error(Hi(0));
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
	return n.toString = () => `${e}`, n.type = e, n.match = (t) => Sn(t) && t.type === e, n;
}
var ui = class e extends Array {
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
function di(e) {
	return In(e) ? Wr(e, () => {}) : e;
}
function fi(e, t, n) {
	return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
function pi(e) {
	return typeof e == "boolean";
}
var mi = () => function(e) {
	let { thunk: t = !0, immutableCheck: n = !0, serializableCheck: r = !0, actionCreatorCheck: i = !0 } = e ?? {}, a = new ui();
	return t && (pi(t) ? a.push(oi) : a.push(si(t.extraArgument))), a;
}, hi = "RTK_autoBatch", gi = (e) => (t) => {
	setTimeout(t, e);
}, _i = (e, t) => (n) => {
	let r = !1, i = () => {
		r || (r = !0, cancelAnimationFrame(a), clearTimeout(o), n());
	}, a = e(i), o = setTimeout(i, t);
}, vi = (e = { type: "raf" }) => (t) => (...n) => {
	let r = t(...n), i = !0, a = !1, o = !1, s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? _i(window.requestAnimationFrame, 100) : gi(10) : e.type === "callback" ? e.queueNotification : gi(e.timeout), l = () => {
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
				return i = !e?.meta?.[hi], a = !i, a && (o || (o = !0, c(l))), r.dispatch(e);
			} finally {
				i = !0;
			}
		}
	});
}, yi = (e) => function(t) {
	let { autoBatch: n = !0 } = t ?? {}, r = new ui(e);
	return n && r.push(vi(typeof n == "object" ? n : void 0)), r;
};
function bi(e) {
	let t = mi(), { reducer: n = void 0, middleware: r, devTools: i = !0, duplicateMiddlewareCheck: a = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {}, c;
	if (typeof n == "function") c = n;
	else if (gn(n)) c = yn(n);
	else throw Error(Hi(1));
	let l;
	l = typeof r == "function" ? r(t) : t();
	let u = bn;
	i && (u = ci({
		trace: !1,
		...typeof i == "object" && i
	}));
	let d = yi(xn(...l)), f = typeof s == "function" ? s(d) : d(), p = u(...f);
	return _n(c, o, p);
}
function xi(e) {
	let t = {}, n = [], r, i = {
		addCase(e, n) {
			let r = typeof e == "string" ? e : e.type;
			if (!r) throw Error(Hi(28));
			if (r in t) throw Error(Hi(29));
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
function Si(e) {
	return typeof e == "function";
}
function Ci(e, t) {
	let [n, r, i] = xi(t), a;
	if (Si(e)) a = () => di(e());
	else {
		let t = di(e);
		a = () => t;
	}
	function o(e = a(), t) {
		let o = [n[t.type], ...r.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e)];
		return o.filter((e) => !!e).length === 0 && (o = [i]), o.reduce((e, n) => {
			if (n) if (Fn(e)) {
				let r = n(e, t);
				return r === void 0 ? e : r;
			} else if (In(e)) return Wr(e, (e) => n(e, t));
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
var wi = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Ti(e, t) {
	return `${e}/${t}`;
}
function Ei({ creators: e } = {}) {
	let t = e?.asyncThunk?.[wi];
	return function(e) {
		let { name: n, reducerPath: r = n } = e;
		if (!n) throw Error(Hi(11));
		let i = (typeof e.reducers == "function" ? e.reducers(ki()) : e.reducers) || {}, a = Object.keys(i), o = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		}, s = {
			addCase(e, t) {
				let n = typeof e == "string" ? e : e.type;
				if (!n) throw Error(Hi(12));
				if (n in o.sliceCaseReducersByType) throw Error(Hi(13));
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
				type: Ti(n, r),
				createNotation: typeof e.reducers == "function"
			};
			ji(a) ? Ni(o, a, s, t) : Ai(o, a, s);
		});
		function c() {
			let [t = {}, n = [], r = void 0] = typeof e.extraReducers == "function" ? xi(e.extraReducers) : [e.extraReducers], i = {
				...t,
				...o.sliceCaseReducersByType
			};
			return Ci(e.initialState, (e) => {
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
				return i === void 0 && n && (i = fi(d, r, m)), i;
			}
			function i(t = l) {
				return fi(fi(u, n, () => /* @__PURE__ */ new WeakMap()), t, () => {
					let r = {};
					for (let [i, a] of Object.entries(e.selectors ?? {})) r[i] = Di(a, t, () => fi(d, t, m), n);
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
function Di(e, t, n, r) {
	function i(i, ...a) {
		let o = t(i);
		return o === void 0 && r && (o = n()), e(o, ...a);
	}
	return i.unwrapped = e, i;
}
var Oi = /* @__PURE__ */ Ei();
function ki() {
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
function Ai({ type: e, reducerName: t, createNotation: n }, r, i) {
	let a, o;
	if ("reducer" in r) {
		if (n && !Mi(r)) throw Error(Hi(17));
		a = r.reducer, o = r.prepare;
	} else a = r;
	i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? li(e, o) : li(e));
}
function ji(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function Mi(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function Ni({ type: e, reducerName: t }, n, r, i) {
	if (!i) throw Error(Hi(18));
	let { payloadCreator: a, fulfilled: o, pending: s, rejected: c, settled: l, options: u } = n, d = i(e, a, u);
	r.exposeAction(t, d), o && r.addCase(d.fulfilled, o), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
		fulfilled: o || Pi,
		pending: s || Pi,
		rejected: c || Pi,
		settled: l || Pi
	});
}
function Pi() {}
var Fi = "listener", Ii = "completed", Li = "cancelled";
`${Li}`, `${Ii}`, `${Fi}${Li}`, `${Fi}${Ii}`;
var { assign: Ri } = Object, zi = "listenerMiddleware", Bi = /* @__PURE__ */ Ri(/* @__PURE__ */ li(`${zi}/add`), { withTypes: () => Bi });
`${zi}`;
var Vi = /* @__PURE__ */ Ri(/* @__PURE__ */ li(`${zi}/remove`), { withTypes: () => Vi });
function Hi(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region ../app/src/viewSettingsSlice.js
var Ui = { visibilities: {} }, Wi = Oi({
	name: "viewSettings",
	initialState: Ui,
	reducers: {
		setVisibility: (e, t) => {
			e.visibilities[t.payload.key] = t.payload.visibility;
		},
		restoreDefaultVisibility: (e, t) => {
			delete e.visibilities[t.payload];
		},
		restoreDefaultVisibilities: (e, t) => Ui,
		setViewSettings: (e, t) => ({
			...Ui,
			...t.payload ? t.payload : {}
		})
	}
});
//#endregion
//#region ../app/src/configurableVisibilityUtils.js
function Gi(e) {
	return e.spec.configurableVisibility;
}
function Ki(e) {
	let t = Gi(e);
	if (t && typeof t == "object" && typeof t.group == "string" && t.group.length) return t.group;
}
function qi(e) {
	let t = Gi(e);
	return t === void 0 ? !(e.layoutParent && e.layoutParent.spec && "layer" in e.layoutParent.spec) : t !== !1;
}
function Ji(e) {
	return Gi(e) !== void 0;
}
function Yi(e) {
	return "v:" + JSON.stringify({
		scope: e.scope,
		view: e.view
	});
}
function Xi(e) {
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
function Zi(e) {
	if (e.explicitName) return Yi(At(e));
}
function Qi(e, t) {
	let n = Zi(t);
	if (n && oa(e, n)) return e[n];
	let r = t.explicitName;
	if (r && oa(e, r)) return e[r];
}
function $i(e) {
	if (!e || !e.visibilities) return { visibilities: {} };
	let t = e.visibilities;
	if (Array.isArray(t)) {
		let e = {};
		for (let n of t) !n || !Array.isArray(n.scope) || typeof n.view != "string" || typeof n.visible == "boolean" && (e[Yi({
			scope: n.scope,
			view: n.view
		})] = n.visible);
		return { visibilities: e };
	}
	return typeof t == "object" ? { visibilities: { ...t } } : { visibilities: {} };
}
function ea(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) {
		let t = Xi(e);
		t && n.set(Yi(t), r);
	}
	let r = Object.keys(t).filter((e) => !Xi(e));
	if (r.length && e) {
		let i = new Set(r), a = /* @__PURE__ */ new Map();
		Kt(e, (e) => {
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
					let r = Zi(i);
					!r || n.has(r) || n.set(r, t[e]);
				}
			}
		}
	}
	let i = [];
	for (let [e, t] of n) {
		let n = Xi(e);
		n && i.push({
			scope: n.scope,
			view: n.view,
			visible: t
		});
	}
	return i;
}
function ta(e, t) {
	let n = ea(e, ia(e, t.visibilities));
	if (n.length) return { visibilities: n };
}
function na(e) {
	let t = /* @__PURE__ */ new Map();
	Kt(e, (e) => {
		let n = Zi(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function ra(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of aa(e)) {
		let e = r.map((e) => e.selectorKey);
		for (let i of r) t.set(i.selectorKey, {
			groupKey: n,
			memberKeys: e
		});
	}
	return t;
}
function ia(e, t) {
	let n = { ...t };
	for (let r of aa(e).values()) {
		let e = r.filter((e) => {
			let n = Qi(t, e.view);
			return n === void 0 ? e.view.isVisibleInSpec() : n;
		});
		if (e.length <= 1) continue;
		let i = e[0].selectorKey;
		for (let e of r) e.selectorKey !== i && (n[e.selectorKey] = !1);
	}
	return n;
}
function aa(e) {
	let t = /* @__PURE__ */ new Map();
	return Kt(e, (e) => {
		if (!qi(e) || !e.explicitName) return;
		let n = Ki(e);
		if (!n) return;
		let r = At(e), i = Yi(r), a = Pt(e)?.name && r.scope.length ? r.scope.slice(0, r.scope.length - 1) : r.scope, o = JSON.stringify({
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
function oa(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
//#endregion
//#region ../app/src/sampleView/sampleViewTypes.js
function sa(e) {
	return "aggregation" in e && "interval" in e && (ca(e.interval) || la(e.interval));
}
function ca(e) {
	return Array.isArray(e);
}
function la(e) {
	return typeof e == "object" && !!e && "type" in e && e.type === "selection" && "selector" in e;
}
//#endregion
//#region ../app/src/sampleView/intervalReferenceResolver.js
function ua(e, t) {
	if (ca(t)) return t;
	if (!la(t)) throw Error("Unsupported interval reference.");
	if (!e) throw Error("Cannot resolve selection-backed interval because the root view is unavailable.");
	let n = Et(e, t.selector);
	if (!n) throw Error(`Cannot resolve interval source selection "${t.selector.param}" in import scope ${JSON.stringify(t.selector.scope)}.`);
	let r = n.view.paramRuntime.getValue(t.selector.param);
	if (!r || !Xe(r) || !Rt(r)) throw Error(`Interval source selection "${t.selector.param}" is empty. Create a brush selection before running this action.`);
	let i = r.intervals.x;
	if (!i || i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number") throw Error(`Interval source selection "${t.selector.param}" must provide a numeric x interval.`);
	return [i[0], i[1]];
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFeatureTraversal.js
function da(e, t, n, r, i, a, o) {
	let s = !n || t && t.equals(n);
	for (let c of e) {
		let e = t(c);
		if (s) e >= i && e <= a && o(c, 1);
		else {
			let t = fa(e, n(c), i, a, r);
			t > 0 && o(c, t);
		}
	}
}
function fa(e, t, n, r, i) {
	return i === "endpoints" ? +(e >= n && e <= r || t >= n && t <= r) : i === "encloses" ? e >= n && t <= r ? t - e : 0 : Math.max(0, Math.min(t, r) - Math.max(e, n));
}
function pa(e, t) {
	if (!p(t)) return t;
	let n = e.getScale(), r = "genome" in n ? n.genome() : void 0;
	if (!r) throw Error("Encountered a chromosomal locus but no genome is available.");
	return r.toContinuous(t.chrom, t.pos);
}
function ma(e, t, n) {
	let r = pa(e, t[0]), i = pa(e, t[1]);
	if (typeof r != "number" || typeof i != "number") throw Error(n);
	return r <= i ? [r, i] : [i, r];
}
//#endregion
//#region ../app/src/sampleView/selectionFeatureFieldValues.js
function ha(e, t, n) {
	return ga(e, {
		type: "selection",
		selector: t
	}, n);
}
function ga(e, t, n) {
	let r = e.getCollector(), i = e.getDataAccessor("x");
	if (!r || !i) return;
	let a = ua(e.getLayoutAncestors().at(-1), t), [o, s] = ma(e.getScaleResolution("x"), a, "Selection feature summaries require numeric intervals."), c = e.getDataAccessor("x2"), l = e.mark?.defaultHitTestMode ?? "intersects", u = [];
	for (let e of r.facetBatches.values()) da(e, i, c, l, o, s, (e) => {
		u.push(e[n]);
	});
	return u;
}
//#endregion
//#region ../app/src/charts/boxplotChart.js
var _a = Object.freeze({
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
function va(e = {}) {
	let t = {
		..._a,
		...e
	};
	return t.groupTitle === void 0 && (t.groupTitle = t.groupField), t.valueTitle === void 0 && (t.valueTitle = t.valueField), t;
}
function ya(e) {
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
function ba(e = {}) {
	return ya(va(e));
}
//#endregion
//#region ../app/node_modules/vega-util/build/vega-util.js
function xa(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function Sa(e) {
	return e.length === 1 ? Ca(e[0]) : wa(e);
}
var Ca = (e) => function(t) {
	return t[e];
}, wa = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function Ta(e) {
	throw Error(e);
}
function Ea(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Ta("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Ta("Access path missing closing bracket: " + e), r && Ta("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function Da(e, t, n) {
	let r = Ea(e);
	return e = r.length === 1 ? r[0] : e, xa((n && n.get || Sa)(r), [e], t || e);
}
Da("id");
var Oa = xa((e) => e, [], "identity");
xa(() => 0, [], "zero"), xa(() => 1, [], "one"), xa(() => !0, [], "true"), xa(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
function ka(e) {
	return e === Object(e);
}
function Aa(e) {
	return e[e.length - 1];
}
function ja(e) {
	return e == null || e === "" ? null : +e;
}
function Ma(e, t, n, r, i) {
	let a = r(e[0]), o = r(Aa(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function Na(e, t, n) {
	return Ma(e, t, n, ja, Oa);
}
function Pa(e) {
	return typeof e == "number";
}
function Fa(e) {
	return typeof e == "string";
}
//#endregion
//#region ../app/src/utils/predicates/comparison.js
var Ia = {
	lt: (e, t) => e < t,
	lte: (e, t) => e <= t,
	eq: (e, t) => e == t,
	gte: (e, t) => e >= t,
	gt: (e, t) => e > t
};
function La(e, t) {
	let n = Ia[e];
	return (e) => n(e, t);
}
//#endregion
//#region ../app/src/sampleView/state/groupOperations.js
function Ra(e, t, n, r, i) {
	if (r && !n) throw Error("Custom labels need explicit group order!");
	let a = Ce(e.samples, t), o = n ? n.map((e, t) => ({
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
function za(e, t) {
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
function Ba(e, t, n, r) {
	let i = (e) => `Group ${e + 1}`, a = Ue(n.length - 1).reverse(), o = Ue(n.length - 1).map((e) => eo(n[e], n[e + 1])), s = za(r, o.length), c = Xa(t, n.slice(1, n.length - 1));
	Ra(e, (e) => i(c(e)), a.map(i), a.map((e) => s?.[e] ?? o[e]), a.map((e) => o[e]));
}
function Va(e, t, n, r) {
	Ba(e, t, [
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
function Ha(e, t) {
	let n = Qa(Za(e.samples, t, [
		0,
		.25,
		.5,
		.75,
		1
	]));
	n.length == 1 && n.push(n[0]), Ba(e, t, n.map((e, t, n) => ({
		operator: t == n.length - 1 ? "lte" : "lt",
		operand: e
	})));
}
function Ua(e, t) {
	if (t.length == 0) throw Error("Cannot remove the root sample group.");
	let n = e.groups.findIndex((e) => e.name == t[0]);
	if (n < 0) throw Error("Sample group path not found: " + t.join(" / "));
	if (t.length == 1) e.groups.splice(n, 1);
	else if (t.length > 1) {
		let r = e.groups[n];
		if (hc(r)) Ua(r, t.slice(1));
		else throw Error("Sample group path does not refer to a nested group: " + t.join(" / "));
	}
}
function Wa(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	Ya(e, t, (e) => {
		let t = e.groups.map((e, t) => ({
			group: e,
			index: t,
			size: Ja(e)
		})).sort((e, t) => e.size === t.size ? e.index - t.index : i === "descending" ? t.size - e.size : e.size - t.size).slice(0, r), n = new Set(t.map((e) => e.group));
		e.groups = e.groups.filter((e) => n.has(e));
	});
}
function Ga(e, t, n, r, i) {
	if (n !== "size") throw Error("Unsupported group measure: " + n);
	let a = La(r, i);
	Ya(e, t, (e) => {
		e.groups = e.groups.filter((e) => a(Ja(e)));
	});
}
function Ka(e, t) {
	Ya(e, t, (e) => {
		let t = e;
		t.samples = e.groups.flatMap((e) => qa(e)), delete e.groups;
	});
}
function qa(e) {
	return hc(e) ? e.groups.flatMap((e) => qa(e)) : e.samples;
}
function Ja(e) {
	return hc(e) ? e.groups.reduce((e, t) => e + Ja(t), 0) : e.samples.length;
}
function Ya(e, t, n) {
	if (!Number.isInteger(t) || t < 0) throw Error("Grouping level must be a non-negative integer.");
	let r = !1, i = (e, a) => {
		if (a === t) r = !0, n(e);
		else for (let t of e.groups) hc(t) && i(t, a + 1);
	};
	if (i(e, 0), !r) throw Error("Grouping level not found: " + t);
}
function Xa(e, t) {
	return (n) => {
		let r = e(n);
		if (!(!Pa(r) || isNaN(r))) {
			for (let e = 0; e < t.length; e++) if (t[e].operator == "lt") {
				if (r < t[e].operand) return e;
			} else if (r <= t[e].operand) return e;
			return t.length;
		}
	};
}
function Za(e, t, n) {
	let r = st(e.map(t).filter((e) => Pa(e) && !isNaN(e)));
	return n.map((e) => et(r, e));
}
function Qa(e) {
	let t = [e[0]];
	for (let n = 1; n < e.length; n++) e[n] != e[n - 1] && t.push(e[n]);
	return t;
}
var $a = rt(".3~r"), eo = (e, t) => `${e.operator == "lt" ? "[" : "("}${$a(e.operand)}, ${$a(t.operand)}${t.operator == "lte" ? "]" : ")"}`;
function to(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let [e, r] of Object.entries(t)) for (let t of r) n.set(t, e);
	return (t) => n.get(e(t));
}
//#endregion
//#region ../../node_modules/mapsort/compiled/esm/mapsort.min.js
function no(e, t) {
	var n = e + "", r = t + "";
	return n < r ? -1 : n == r ? 0 : 1;
}
function ro(e) {
	if (typeof e != "function") throw TypeError(e + " is not a function");
}
function io(e, t, n) {
	ro(t), n !== void 0 && ro(n);
	var r, i = [], a = [], o = [];
	i.forEach.call(e, function(e, s, c) {
		if (r = t(e, s, c), r === void 0) return void o.push(e);
		if (!n && typeof r == "symbol") throw TypeError("Can't convert symbol to string");
		i.push(s), a[s] = r;
	}), n ||= no, i.sort(function(e, t) {
		return n(a[e], a[t]);
	});
	var s = i.map(function(t) {
		return e[t];
	}).concat(o);
	return s.length != e.length && (s.length = e.length), s;
}
//#endregion
//#region ../app/src/sampleView/state/sampleOperations.js
function ao(e, t) {
	let n = (e) => e.copy().range(Ue(0, e.domain().length)).unknown(-1), r = (e) => e ?? "";
	switch (t.type) {
		case "quantitative":
			r = (e) => Pa(e) && !isNaN(e) ? e : -Infinity;
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
function oo(e, t) {
	let n = /* @__PURE__ */ new Set(), r = (e) => {
		let t = n.has(e);
		return n.add(e), t;
	};
	return e.filter((e) => !r(t(e)));
}
function so(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = (e) => (r.size < n && r.add(e), r.has(e));
	return e.filter((e) => i(t(e)));
}
function co(e, t, n, r) {
	if (r.operator === "in" && r.required === "all") return lo(e, t, n, r.values);
	let i = uo(r), a = /* @__PURE__ */ new Set();
	for (let r of e) i(n(r)) && a.add(t(r));
	return a;
}
function lo(e, t, n, r) {
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
function uo(e) {
	if (e.operator === "in") {
		let t = new Set(e.values);
		return (e) => t.has(e);
	} else return La(e.operator, e.operand);
}
function fo(e, t, n = !1) {
	return io(e, t, (e, t) => (n && ([e, t] = [t, e]), e < t ? -1 : +(e > t)));
}
function po(e, t, n, r) {
	let i = La(n, r);
	return e.filter((e) => i(t(e)));
}
function mo(e, t, n, r) {
	let i = new Set(r), a = (e) => i.has(e), o = n == "remove" ? (e) => !a(e) : a;
	return e.filter((e) => o(t(e)));
}
function ho(e, t) {
	let n = (e) => e != null;
	return e.filter((e) => n(t(e)));
}
function go(e, t) {
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
var _o = {
	UNDO: "@@redux-undo/UNDO",
	REDO: "@@redux-undo/REDO",
	JUMP_TO_FUTURE: "@@redux-undo/JUMP_TO_FUTURE",
	JUMP_TO_PAST: "@@redux-undo/JUMP_TO_PAST",
	JUMP: "@@redux-undo/JUMP",
	CLEAR_HISTORY: "@@redux-undo/CLEAR_HISTORY"
}, vo = {
	undo() {
		return { type: _o.UNDO };
	},
	redo() {
		return { type: _o.REDO };
	},
	jumpToFuture(e) {
		return {
			type: _o.JUMP_TO_FUTURE,
			index: e
		};
	},
	jumpToPast(e) {
		return {
			type: _o.JUMP_TO_PAST,
			index: e
		};
	},
	jump(e) {
		return {
			type: _o.JUMP,
			index: e
		};
	},
	clearHistory() {
		return { type: _o.CLEAR_HISTORY };
	}
};
function yo(e, t = []) {
	return Array.isArray(e) ? e : typeof e == "string" ? [e] : t;
}
function bo(e) {
	return typeof e.present < "u" && typeof e.future < "u" && typeof e.past < "u" && Array.isArray(e.future) && Array.isArray(e.past);
}
function xo(e, t, n, r = null) {
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
var So, Co, wo = {
	prevState: "#9E9E9E",
	action: "#03A9F4",
	nextState: "#4CAF50"
};
function To() {
	Co = {
		header: [],
		prev: [],
		action: [],
		next: [],
		msgs: []
	};
}
function Eo() {
	let { header: e, prev: t, next: n, action: r, msgs: i } = Co;
	console.group ? (console.groupCollapsed(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i), console.groupEnd()) : (console.log(...e), console.log(...t), console.log(...r), console.log(...n), console.log(...i));
}
function Do(e, t, n) {
	return [
		`%c${e}`,
		`color: ${t}; font-weight: bold`,
		n
	];
}
function Oo(e, t) {
	To(), So && (console.group ? (Co.header = [
		"%credux-undo",
		"font-style: italic",
		"action",
		e.type
	], Co.action = Do("action", wo.action, e), Co.prev = Do("prev history", wo.prevState, t)) : (Co.header = ["redux-undo action", e.type], Co.action = ["action", e], Co.prev = ["prev history", t]));
}
function ko(e) {
	So && (console.group ? Co.next = Do("next history", wo.nextState, e) : Co.next = ["next history", e], Eo());
}
function z(...e) {
	So && (Co.msgs = Co.msgs.concat([...e, "\n"]));
}
function Ao(e) {
	So = e;
}
function jo(e, t) {
	let n = xo([], e, []);
	return t && (n._latestUnfiltered = null), n;
}
function Mo(e, t, n, r) {
	let i = e.past.length + 1;
	z("inserting", t), z("new free: ", n - i);
	let { past: a, _latestUnfiltered: o } = e, s = n && n <= i, c = a.slice(+!!s);
	return xo(o == null ? c : [...c, o], t, [], r);
}
function No(e, t) {
	if (t < 0 || t >= e.future.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = [
		...n,
		i,
		...r.slice(0, t)
	], o = r[t];
	return xo(a, o, r.slice(t + 1));
}
function Po(e, t) {
	if (t < 0 || t >= e.past.length) return e;
	let { past: n, future: r, _latestUnfiltered: i } = e, a = n.slice(0, t), o = [
		...n.slice(t + 1),
		i,
		...r
	], s = n[t];
	return xo(a, s, o);
}
function Fo(e, t) {
	return t > 0 ? No(e, t - 1) : t < 0 ? Po(e, e.past.length + t) : e;
}
function Io(e, t) {
	return t.indexOf(e) > -1 ? e : !e;
}
function Lo(e, t = {}) {
	Ao(t.debug);
	let n = {
		limit: void 0,
		filter: () => !0,
		groupBy: () => null,
		undoType: _o.UNDO,
		redoType: _o.REDO,
		jumpToPastType: _o.JUMP_TO_PAST,
		jumpToFutureType: _o.JUMP_TO_FUTURE,
		jumpType: _o.JUMP,
		neverSkipReducer: !1,
		ignoreInitialState: !1,
		syncFilter: !1,
		...t,
		initTypes: yo(t.initTypes, ["@@redux-undo/INIT"]),
		clearHistoryType: yo(t.clearHistoryType, [_o.CLEAR_HISTORY])
	}, r = n.neverSkipReducer ? (t, n, ...r) => ({
		...t,
		present: e(t.present, n, ...r)
	}) : (e) => e, i;
	return (t = i, a = {}, ...o) => {
		Oo(a, t);
		let s = t;
		if (!i) {
			if (z("history is uninitialized"), t === void 0) return s = jo(e(t, { type: "@@redux-undo/CREATE_HISTORY" }, ...o), n.ignoreInitialState), z("do not set initialState on probe actions"), ko(s), s;
			bo(t) ? (s = i = n.ignoreInitialState ? t : xo(t.past, t.present, t.future), z("initialHistory initialized: initialState is a history", i)) : (s = i = jo(t, n.ignoreInitialState), z("initialHistory initialized: initialState is not a history", i));
		}
		let c;
		switch (a.type) {
			case void 0: return s;
			case n.undoType: return c = Fo(s, -1), z("perform undo"), ko(c), r(c, a, ...o);
			case n.redoType: return c = Fo(s, 1), z("perform redo"), ko(c), r(c, a, ...o);
			case n.jumpToPastType: return c = Po(s, a.index), z(`perform jumpToPast to ${a.index}`), ko(c), r(c, a, ...o);
			case n.jumpToFutureType: return c = No(s, a.index), z(`perform jumpToFuture to ${a.index}`), ko(c), r(c, a, ...o);
			case n.jumpType: return c = Fo(s, a.index), z(`perform jump to ${a.index}`), ko(c), r(c, a, ...o);
			case Io(a.type, n.clearHistoryType): return c = jo(s.present, n.ignoreInitialState), z("perform clearHistory"), ko(c), r(c, a, ...o);
			default:
				if (c = e(s.present, a, ...o), n.initTypes.some((e) => e === a.type)) return z("reset history due to init action"), ko(i), i;
				if (s._latestUnfiltered === c) return s;
				if (typeof n.filter == "function" && !n.filter(a, c, s)) {
					let e = xo(s.past, c, s.future, s.group);
					return n.syncFilter || (e._latestUnfiltered = s._latestUnfiltered), z("filter ignored action, not storing it in past"), ko(e), e;
				}
				let t = n.groupBy(a, c, s);
				if (t != null && t === s.group) {
					let e = xo(s.past, c, s.future, s.group);
					return z("groupBy grouped the action with the previous action"), ko(e), e;
				}
				return s = Mo(s, c, n.limit, t), z("inserted new state into history"), ko(s), s;
		}
	};
}
//#endregion
//#region ../app/src/state/provenanceReducerBuilder.js
var Ro = "_augmented";
function zo(e) {
	return (t) => (Array.isArray(e) ? e : Object.keys(e)).some((e) => Fa(e) && t.type.startsWith(e));
}
function Bo(e) {
	if ("payload" in e) {
		let t = e.payload;
		if (typeof t == "object" && "_augmented" in t) {
			let { [Ro]: n, ...r } = t;
			return {
				...e,
				payload: r
			};
		}
	}
	return e;
}
function Vo(e) {
	return (t, n) => e(n) ? Bo(n) : t ?? null;
}
function Ho(e, t = {}) {
	let n = zo(e), r = Vo(n);
	return Lo(yn({
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
function Uo(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Wo(e, t = "/") {
	let n = Uo(t);
	return e.replace(new RegExp(n, "g"), "\\" + t);
}
function Go(e, t = "/") {
	return e.map((e) => Wo(e, t)).join(t);
}
function Ko(e, t = "/") {
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
function qo(e, t = /* @__PURE__ */ new Set()) {
	if (e.length === 0) return {};
	let n = e[0], r = Object.keys(n).filter((e) => !t.has(e)), i = {};
	for (let t of r) i[t] = e.map((e) => e[t]);
	return i;
}
function Jo(e) {
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
function Yo(e, t) {
	if (Object.is(e, t)) return !0;
	if (Array.isArray(e) || Array.isArray(t)) {
		if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!Yo(e[n], t[n])) return !1;
		return !0;
	}
	if (!Xo(e) || !Xo(t)) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Yo(e[r], t[r])) return !1;
	return !0;
}
function Xo(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
var Zo = "(Root)";
function Qo(e) {
	return Ko(e, "/").at(-1) ?? "";
}
function $o(e, t) {
	let n = typeof t == "string" && t.length > 0 ? (e) => Ko(e, t) : (e) => [e], r = {
		part: Zo,
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
					path: Go(e.slice(0, n + 1), "/"),
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
function* es(e) {
	if (e) {
		yield e;
		for (let t of e.children.values()) yield* es(t);
	}
}
function* ts(e) {
	for (let t = e.parent; t != null; t = t.parent) yield t;
}
function ns(e) {
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
function rs(e) {
	return e.length ? Go(e, "/") + "/" : "";
}
function is(e, t = [], n = []) {
	if (!t.length) return e;
	let r = rs(t), i = {};
	for (let [t, a] of Object.entries(e)) n.includes(t) ? i[t] = a : i[r + t] = a;
	return i;
}
function as(e, t, n = "/") {
	return Go(Ko(e, t), n);
}
function os(e, t = {}, n, r, i = /* @__PURE__ */ new Set()) {
	let a = ls(e, i);
	if (n != null && typeof n != "string") throw Error("attributeGroupSeparator must be a string");
	return a = us(a, n), r ? (a = fs(a, r, n), t = ps(t, r, n)) : t[""] && (t = ss(t, { attributeNames: Object.keys(a).filter((e) => e !== "sample") })), {
		columnarMetadata: a,
		attributeDefs: t
	};
}
function ss(e, t) {
	let n = e[""];
	if (!n) return e;
	let r = {};
	for (let [t, n] of Object.entries(e)) t !== "" && (r[t] = n);
	for (let e of t.attributeNames) {
		if (r[e]) continue;
		let t = Ko(e, "/"), i = !1;
		for (let e = 1; e < t.length; e++) if (r[Go(t.slice(0, e), "/")]) {
			i = !0;
			break;
		}
		i || (r[e] = { ...n });
	}
	return r;
}
function cs(e, t, n) {
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
		a && (e.scale = a), u = ss({
			...u,
			"": e
		}, { attributeNames: Array.from(n.metadataNodeTypes.entries().filter(([, e]) => e === "inherit").map(([e]) => e)) });
	}
	let d = os(r, u, n.separator, n.addUnderGroup, l);
	if (n.addUnderGroup && s) {
		let e = Go(ds(n.addUnderGroup, n.separator ?? void 0), "/");
		if (e && !d.attributeDefs[e]) {
			let t = { type: i };
			a && (t.scale = a), d.attributeDefs[e] = t;
		}
	}
	return d;
}
function ls(e, t = /* @__PURE__ */ new Set()) {
	return qo(e, t);
}
function us(e, t) {
	let n = { sample: e.sample };
	for (let [r, i] of Object.entries(e)) {
		if (r === "sample") continue;
		let e = typeof t == "string" && t.length > 0 ? as(r, t, "/") : Go([r], "/");
		n[e] = i;
	}
	return n;
}
function ds(e, t) {
	return typeof t == "string" && t.length > 0 ? Ko(e, t) : [e];
}
function fs(e, t, n) {
	return ms(e, ds(t, n));
}
function ps(e, t, n) {
	let r = ds(t, n), i = Go(r, "/"), a = {}, o;
	for (let [t, n] of Object.entries(e)) t === "" ? o = n : a[t] = n;
	let s = is(a, r);
	return o && !s[i] && (s[i] = o), s;
}
function ms(e, t = []) {
	return is(e, t, ["sample"]);
}
function hs(e) {
	switch (je(e)) {
		case "integer":
		case "number": return "quantitative";
		default: return "nominal";
	}
}
function gs(e, t) {
	let n = /* @__PURE__ */ new Map();
	function r(t) {
		for (let e of ts(t)) {
			let t = n.get(e.path);
			if (t && t !== "unset") return "inherit";
		}
		if (t.children.size > 0) {
			let n = /* @__PURE__ */ new Set();
			for (let r of es(t)) if (r !== t && r.children.size === 0) {
				let t = e.get(r.attribute);
				t && n.add(t);
			}
			return n.size === 1 ? n.values().next().value : "unset";
		} else return e.get(t.attribute) ?? "unset";
	}
	for (let e of es(t)) n.set(e.path, r(e));
	return n;
}
function _s(e, t = {}, n) {
	let r = structuredClone(t ?? {}), i = $o(e.attributeNames, n), a = /* @__PURE__ */ new Map();
	function o(e) {
		e.path && a.set(e.path, e);
		for (let t of e.children.values()) o(t);
	}
	o(i);
	for (let t of e.attributeNames) {
		let i = r[t], o = null;
		if (n != null) {
			let e = as(t, n, "/"), i = a.get(e)?.parent;
			for (; i && (o = r[i.path]?.type, o == null);) i = i.parent;
		}
		if (!o && (i || (i = {}, r[t] = i), !i.type)) {
			let n = Object.values(e.entities).map((e) => e[t]);
			i.type = hs(n);
		}
	}
	return r;
}
function vs(e, t) {
	let n = new Set(e.attributeNames), r = new Set(t.attributeNames), i = n.intersection(r);
	if (i.size > 0) throw Error(`Duplicate attribute names: ${Array.from(i).join(", ")}`);
	let a = [...n, ...r], o = e.attributeDefs ?? {}, s = t.attributeDefs ?? {}, c = { ...o };
	for (let e of Object.keys(s)) {
		if (e in c) {
			c[e] = bs(c[e], s[e], e);
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
function ys(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function bs(e, t, n, r = "") {
	if (Yo(e, t)) return e;
	let i = { ...e };
	for (let [e, a] of Object.entries(t)) {
		if (!(e in i)) {
			i[e] = a;
			continue;
		}
		let t = i[e];
		if (Yo(t, a)) continue;
		if (ys(t) && ys(a)) {
			i[e] = bs(t, a, n, r ? r + "." + e : e);
			continue;
		}
		let o = r ? r + "." + e : e, s = xs(t), c = xs(a);
		throw Error("Conflicting attribute definition for key \"" + n + "\" at \"" + o + "\". Existing value: " + s + "; incoming value: " + c + ". Align the source-level/group defaults (type/scale/visibility) before importing into the same group.");
	}
	return i;
}
function xs(e) {
	try {
		return JSON.stringify(e) ?? String(e);
	} catch {
		return String(e);
	}
}
var Ss = new Map([
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
function Cs(e) {
	let t = Ss.get(e);
	if (!t) throw Error("Unknown aggregation op: " + e);
	return t;
}
function ws(e) {
	return Cs(e).label.toLowerCase();
}
function Ts(e) {
	return e === "count" ? "count" : ws(e);
}
function Es(e) {
	return e.operator === "in" ? e.field + " in {" + e.values.map(Os).join(", ") + "}" : e.field + " " + Ds(e.operator) + " " + Os(e.value);
}
function Ds(e) {
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
function Os(e) {
	return e === null ? "null" : String(e);
}
function ks(e) {
	let t = e.specifier;
	return !t || typeof t != "object" || !sa(t) ? !0 : Cs(t.aggregation.op).preservesScaleDomain;
}
function As(e, t, n) {
	let r = n ? " where " + Es(n) : "";
	return e === "itemCount" ? Ts(e) + (n ? "(" + r.trim() + ")" : "") : e === "count" ? Ts(e) + "(" + t + r + ")" : ws(e) + "(" + t + r + ")";
}
//#endregion
//#region ../app/src/utils/emptyToUndefined.js
function js(e) {
	return e ?? void 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataNameUtils.js
function Ms(e, t) {
	let n = Is(e);
	if (n.length === 0) return e.trim();
	let { prefix: r, restTokens: i } = Ns(n), a = r && i.length > 0 ? "_" : "", o = Math.max(0, t - r.length - a.length);
	if (i.length === 0) return r.length > 0 ? r : e.trim();
	let s = Fs(i, o, r.length > 0), c = r + a + s;
	if (a && c.length > t) {
		let e = r + s;
		e.length <= t && (c = e);
	}
	return c.length > t ? c.slice(0, t) : c;
}
function Ns(e) {
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
	]) if (Ps(t, n.match)) return {
		prefix: n.prefix,
		restTokens: e.slice(n.match.length)
	};
	return {
		prefix: "",
		restTokens: e
	};
}
function Ps(e, t) {
	if (e.length < t.length) return !1;
	for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return !1;
	return !0;
}
function Fs(e, t, n) {
	let r = [], i = Rs(e, !1), a = Rs(e, !0), o = n ? [a, i] : [i, a];
	for (let e of o) e.length > 0 && !r.includes(e) && r.push(e);
	if (e.length > 2) {
		let t = Rs([e[0], e[e.length - 1]], !0);
		t !== a && r.push(t);
	}
	for (let t = e.length - 1; t > 0; --t) {
		let n = Rs(e.slice(0, t), !0);
		r.includes(n) || r.push(n);
	}
	for (let e of r) if (e.length <= t) return e;
	return r[0].slice(0, t);
}
function Is(e) {
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
function Ls(e, t, n) {
	return /^[A-Z0-9]+$/.test(e) ? e : n && t === 0 ? e[0].toLowerCase() : e.length <= 4 ? e : e.length <= 8 ? e.slice(0, 4) : e.slice(0, 3);
}
function Rs(e, t) {
	return zs(e.map((e, n) => Ls(e, n, t)));
}
function zs(e) {
	return e.map((e, t) => t === 0 || e.length === 0 || /^[A-Z0-9]+$/.test(e) ? e : e[0].toUpperCase() + e.slice(1)).join("");
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataUtils.js
function Bs(e, t = {}) {
	if (!e) throw Error("Attribute info is missing.");
	let n = e.type;
	if (n === "nominal" || n === "ordinal" || n === "quantitative") return n;
	if (t.strict === !1) return null;
	throw Error("Unsupported data type: " + n);
}
function Vs(e, t, n, r) {
	let i = e.trim();
	if (i.length === 0) return "Attribute name is required.";
	let a = Hs(i, t.trim(), Bs(r));
	return n.includes(a) ? "Name already exists. Choose another name or group." : null;
}
function Hs(e, t, n) {
	let r = { [e]: { type: n } };
	if (t.length === 0) return Object.keys(r)[0];
	let i = ps(r, t, "/");
	return Object.keys(i)[0];
}
function Us(e, t) {
	let n = Ks(t.scale);
	return {
		attribute: e,
		name: t.name,
		groupPath: js(t.groupPath),
		...n ? { scale: n } : t.scale === null ? { scale: null } : {}
	};
}
function Ws(e, t) {
	return e.scale === void 0 ? Gs(t) : Ks(e.scale);
}
function Gs(e) {
	if (ks(e.attribute)) return Ks("scaleSpec" in e ? e.scaleSpec : e.scale?.props);
}
function Ks(e) {
	if (!e) return;
	let t = structuredClone(e), n = t.range;
	return n && (!Array.isArray(n) || !n.every(qs)) && delete t.range, Object.keys(t).length > 0 ? t : void 0;
}
function qs(e) {
	return typeof e == "string" && Wt(e) != null;
}
function Js(e, t) {
	let n = new Set(t), r = Ys(e) ?? (e.name && e.name.length > 0 ? e.name.trim() : "Derived"), i = [], a = r.length > 20, o = a ? Ms(r, 20) : "";
	if (a && o.length > 0 && o !== r && i.push(o), i.push(r), !a && n.has(r)) {
		let e = Ms(r, 20);
		e.length > 0 && e !== r && i.push(e);
	}
	for (let e of i) {
		let t = $s(e, n);
		if (t) return t;
	}
	throw Error("Unable to generate a unique metadata attribute name.");
}
function Ys(e) {
	let t = e.attribute.specifier;
	if (!t || typeof t != "object" || !sa(t) || !t.featureFilter) return null;
	let n = Xs(t.featureFilter);
	return t.aggregation.op === "count" || t.aggregation.op === "itemCount" ? n + "_count" : Qs(t.aggregation.op) + "_" + n + "_" + t.field;
}
function Xs(e) {
	return e.operator === "eq" ? Zs(Os(e.value)) : e.operator === "in" ? e.values.map((e) => Zs(Os(e))).join("_") : Zs(e.field) + "_" + e.operator + "_" + Zs(Os(e.value));
}
function Zs(e) {
	return e.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function Qs(e) {
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
function $s(e, t) {
	if (!t.has(e)) return e;
	for (let n = 2; n < 2 ** 53 - 1; n += 1) {
		let r = ec(e, "-" + String(n));
		if (!t.has(r)) return r;
	}
	return null;
}
function ec(e, t) {
	if (e.length + t.length <= 32) return e + t;
	let n = Math.max(1, 32 - t.length);
	return e.slice(0, n) + t;
}
//#endregion
//#region ../app/src/sampleView/state/sampleSlice.js
var tc = "sampleView";
function nc() {
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
function rc(e) {
	let t = e.payload[Ro]?.values;
	if (!t) throw Error("No accessed values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return (e) => t[e];
}
function ic(e) {
	let t = e.payload[Ro], n = t?.values, r = t?.conditionValues;
	if (!n || !r) throw Error("No accessed category and condition values provided. Did you remember to use SampleView.dispatchAttributeAction()?");
	return {
		categoryAccessor: (e) => n[e],
		conditionAccessor: (e) => r[e]
	};
}
function ac(e) {
	if (!Number.isInteger(e) || e < 1) throw Error("Grouping level must be a positive integer.");
	return e - 1;
}
function oc(e, t) {
	let n = {};
	for (let r of fc(e)) for (let e of r.samples) n[e] = t(e);
	return n;
}
function sc(e, t) {
	if (!e.sampleData) throw Error("Samples must be set before setting metadata!");
	let n = t.columnarMetadata, r = Object.keys(n).filter((e) => e !== "sample"), i = {
		entities: Object.fromEntries(Jo(n).map((e) => {
			let { sample: t, ...n } = e;
			return [String(t), n];
		})),
		attributeNames: r
	}, a = _s(i, t.attributeDefs, "/"), o = {
		...i,
		attributeDefs: a
	}, s = Bn(e.sampleMetadata) ?? e.sampleMetadata, c = t.replace ? o : vs(s, o);
	e.sampleMetadata = t.replace ? rr(o) : rr(c);
}
var cc = Oi({
	name: tc,
	initialState: nc(),
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
			sc(e, t.payload);
		},
		deriveMetadata: (e, t) => {
			let n = t.payload[Ro]?.metadata;
			if (!n) throw Error("Derived metadata payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			sc(e, n);
		},
		addMetadataFromSource: (e, t) => {
			let n = t.payload[Ro]?.metadata;
			if (!n) throw Error("Metadata source payload is missing. Did you remember to use IntentExecutor.dispatch()?");
			sc(e, n);
		},
		sortBy: (e, t) => {
			uc(e, (e) => fo(e, rc(t), lc(t.payload.order)));
		},
		retainFirstOfEach: (e, t) => {
			uc(e, (e) => oo(e, rc(t)));
		},
		retainFirstNCategories: (e, t) => {
			uc(e, (e) => so(e, rc(t), t.payload.n));
		},
		filterByQuantitative: (e, t) => {
			uc(e, (e) => po(e, rc(t), t.payload.operator, t.payload.operand));
		},
		retainCategoriesByAttribute: (e, t) => {
			let { categoryAccessor: n, conditionAccessor: r } = ic(t), i = co(fc(e).flatMap((e) => e.samples), n, r, t.payload.condition);
			uc(e, (e) => e.filter((e) => i.has(n(e))));
		},
		filterByNominal: (e, t) => {
			uc(e, (e) => mo(e, rc(t), t.payload.remove ? "remove" : "retain", t.payload.values));
		},
		removeUndefined: (e, t) => {
			uc(e, (e) => ho(e, rc(t)));
		},
		groupCustomCategories: (e, t) => {
			let n = to(rc(t), t.payload.groups);
			dc(e, (e) => Ra(e, n, Object.keys(t.payload.groups))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByNominal: (e, t) => {
			dc(e, (e) => Ra(e, rc(t), t.payload[Ro].domain)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupToQuartiles: (e, t) => {
			dc(e, (e) => Ha(e, rc(t))), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		groupByThresholds: (e, t) => {
			dc(e, (e) => Va(e, rc(t), t.payload.thresholds, t.payload.groupTitles)), e.groupMetadata.push({ attribute: t.payload.attribute });
		},
		removeGroup: (e, t) => {
			let n = e.rootGroup;
			if (hc(n)) Ua(n, t.payload.path);
			else throw Error("Cannot remove sample groups before grouping.");
		},
		retainGroupsByRank: (e, t) => {
			let n = e.rootGroup;
			if (hc(n)) Wa(n, ac(t.payload.level), t.payload.measure, t.payload.limit, t.payload.order);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		retainGroupsBySize: (e, t) => {
			let n = e.rootGroup;
			if (hc(n)) Ga(n, ac(t.payload.level), t.payload.measure, t.payload.operator, t.payload.operand);
			else throw Error("Cannot retain sample groups before grouping.");
		},
		ungroup: (e, t) => {
			let n = e.rootGroup;
			if (hc(n)) {
				let r = ac(t.payload.level);
				Ka(n, r), e.groupMetadata.splice(r);
			} else throw Error("Cannot ungroup samples before grouping.");
		},
		retainMatched: (e, t) => {
			let n = rc(t), r = go(fc(e).map((e) => e.samples), n);
			uc(e, (e) => mo(e, n, "retain", r));
		}
	}
});
function lc(e) {
	let t = e ?? "descending";
	if (t === "ascending") return !1;
	if (t === "descending") return !0;
	throw Error("Invalid sort order: " + t);
}
function uc(e, t) {
	for (let n of fc(e)) n.samples = t(n.samples);
}
function dc(e, t) {
	for (let n of fc(e)) t(n);
}
function fc(e) {
	return pc(e).map((e) => Ct(e));
}
function pc(e) {
	let t = [], n = [], r = (e) => {
		if (t.push(e), hc(e)) for (let t of e.groups) r(t);
		else n.push([...t]);
		t.pop();
	};
	return r(e.rootGroup), n;
}
function mc(e) {
	return "samples" in e;
}
function hc(e) {
	return "groups" in e;
}
function* gc(e) {
	if (yield [e], hc(e)) for (let t of e.groups) for (let n of gc(t)) yield [e, ...n];
}
var _c = ii((e) => e.sampleData?.entities, (e) => e && Object.values(e));
function vc(e, t, n) {
	if (!e.type.startsWith("sampleView/")) return e;
	let r = e.type.split("/")[1];
	if (!(r in cc.actions)) throw Error(`Invalid action type: ${r}`);
	if (!e.payload.attribute) return e;
	let i = n(e.payload.attribute);
	if (!i) throw Error(`Attribute info for attribute "${e.payload.attribute}" not found`);
	if (r === "deriveMetadata") return yc(e, t, i);
	let a = i.accessor, o = r == "sortBy" ? ao((e) => a(e, t), i) : a, s = { values: oc(t, (e) => o(e, t)) };
	if (r == "groupByNominal" && (s.domain = i.scale?.domain()), r === "retainCategoriesByAttribute") {
		let r = n(e.payload.condition.attribute);
		s.conditionValues = oc(t, (e) => r.accessor(e, t));
	}
	return {
		...e,
		payload: {
			...e.payload,
			[Ro]: s
		}
	};
}
function yc(e, t, n) {
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
	}, s = Bs(n, { strict: !1 }), c = Ws(e.payload, n), l = { [r]: {
		type: js(s),
		...c ? { scale: c } : {}
	} }, u = e.payload.groupPath?.trim() ?? "", d = u.length > 0 ? {
		columnarMetadata: fs(o, u, "/"),
		attributeDefs: ps(l, u, "/")
	} : {
		columnarMetadata: o,
		attributeDefs: l
	};
	return {
		...e,
		payload: {
			...e.payload,
			[Ro]: { metadata: d }
		}
	};
}
//#endregion
//#region ../app/src/sampleView/attributeValues.js
function bc(e) {
	return (t) => t.sampleIds.map((n) => e(n, t.sampleHierarchy));
}
function xc(e, t, n, r = {}) {
	return e.valuesProvider({
		sampleIds: t,
		sampleHierarchy: n,
		interval: r.interval,
		aggregation: r.aggregation
	});
}
//#endregion
//#region ../app/src/utils/templateResultToString.js
function Sc(e) {
	if (typeof document < "u" && document.createElement) {
		let t = document.createElement("div");
		return Le(e, t), wc(t.textContent ?? "");
	}
	return wc(Tc(Cc(e)));
}
function Cc(e) {
	if (e == null) return "";
	if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return String(e);
	if (Array.isArray(e)) return e.map((e) => Cc(e)).join("");
	if (typeof e == "object" && "strings" in e && "values" in e && Array.isArray(e.strings) && Array.isArray(e.values)) {
		let t = e.strings[0] ?? "";
		for (let n = 0; n < e.values.length; n++) t += Cc(e.values[n]) + (e.strings[n + 1] ?? "");
		return t;
	}
	return typeof e == "object" && Symbol.iterator in e && typeof e[Symbol.iterator] == "function" ? Array.from(e, (e) => Cc(e)).join("") : "";
}
function wc(e) {
	return e.replace(/\s+/g, " ").trim();
}
function Tc(e) {
	return e.replace(/<[^>]*>/g, "");
}
//#endregion
//#region ../app/src/charts/chartDataUtils.js
function Ec(e) {
	let t = e.attribute.specifier;
	return !t || typeof t != "object" ? {} : sa(t) && ca(t.interval) ? {
		interval: t.interval,
		aggregation: t.aggregation
	} : {};
}
function Dc(e, t) {
	let n = e[e.length - 1];
	return (e.length > 1 ? e.slice(1).map((e) => e.title || e.name) : [n.title || n.name]).join(t);
}
function Oc(e) {
	let t = e[e.length - 1];
	if (!("samples" in t)) throw Error("Expected a sample group leaf node.");
	return t.samples;
}
function kc(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function Ac(e, t, n = " / ") {
	return t.length === 0 ? null : t.map((t) => Sc(e.getAttributeInfo(t.attribute).title)).join(n);
}
//#endregion
//#region ../app/src/charts/hierarchyBarplotData.js
var jc = Object.freeze({
	categoryField: "category",
	groupField: "group",
	countField: "Count",
	groupLabelSeparator: " / ",
	grouped: void 0
});
function Mc(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "nominal" && t.type !== "ordinal") throw Error("Bar plot requires a categorical attribute.");
	let r = {
		...jc,
		grouped: e.groupMetadata.length > 0 || "groups" in e.rootGroup,
		...n
	}, i = [], a = [], o = /* @__PURE__ */ new Set(), s = [], c = [], l = Ec(t), u = 0, d = 0, f = 0;
	for (let n of pc(e)) {
		let p = Dc(n, r.groupLabelSeparator), m = Oc(n);
		u += m.length;
		let h = xc(t, m, e, l);
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
function Nc(e, t, n = {}) {
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
	let o = a.map((e) => e.v), s = Je(o, .25), c = Je(o, .5), l = Je(o, .75);
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
var Pc = Object.freeze({
	groupField: "group",
	valueField: "value",
	sampleField: "sample",
	groupLabelSeparator: " / ",
	coef: void 0,
	dropNaN: void 0
});
function Fc(e, t, n = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative") throw Error("Boxplot requires a quantitative attribute.");
	let r = t.attribute.specifier;
	if (typeof r == "string" && !e.sampleMetadata.attributeNames.includes(r)) throw Error("Unknown metadata attribute: " + String(r));
	let i = {
		...Pc,
		...n
	}, a = [], o = [], s = [], c = [], l = Ec(t), u = 0, d = 0, f = 0;
	for (let n of pc(e)) {
		let r = Dc(n, i.groupLabelSeparator), p = Oc(n);
		u += p.length;
		let m = xc(t, p, e, l);
		if (m.length !== p.length) throw Error("Attribute values length does not match sample ids.");
		let h = p.map((e, t) => ({
			[i.sampleField]: e,
			[i.valueField]: m[t]
		}));
		if (h.length === 0) continue;
		let { statistics: g, outliers: _ } = Nc(h, (e) => e[i.valueField], {
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
var Ic = Object.freeze({
	groupField: "group",
	xField: "x",
	yField: "y",
	sampleField: "sample",
	groupLabelSeparator: " / "
});
function Lc(e, t, n, r = {}) {
	if (!e.sampleData) throw Error("Sample data has not been initialized.");
	if (t.type !== "quantitative" || n.type !== "quantitative") throw Error("Scatterplot requires quantitative attributes.");
	let i = {
		...Ic,
		...r
	}, a = [], o = [], s = [], c = Ec(t), l = Ec(n), u = 0, d = 0;
	for (let r of pc(e)) {
		let f = Dc(r, i.groupLabelSeparator), p = Oc(r);
		u += p.length;
		let m = xc(t, p, e, c), h = xc(n, p, e, l);
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
var Rc = 15, zc = new Intl.Collator("en", {
	numeric: !0,
	sensitivity: "base"
});
function Bc(e, t, n, r = Rc) {
	let i = Array.from(e.entries()).sort(Hc), a = i.slice(0, r).map(([e, n]) => ({
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
function Vc(e, t) {
	let n = Array.from(e.entries()).sort(Hc)[0];
	return n ? {
		value: n[0],
		count: n[1],
		share: t > 0 ? n[1] / t : 0
	} : void 0;
}
function Hc(e, t) {
	return t[1] === e[1] ? zc.compare(String(e[0]), String(t[0])) : t[1] - e[1];
}
//#endregion
//#region ../app/src/utils/colorScaleSummary.js
function Uc(e) {
	let t = e;
	if (!t || typeof t.domain != "function" || typeof t.range != "function") return;
	let n = t.domain(), r = t.range();
	if (Array.isArray(n) && Array.isArray(r) && r.every((e) => typeof e == "string")) return {
		domain: n,
		range: r
	};
}
function Wc(e, t, n, r) {
	let i = Gc(n, r);
	return i ? e.map((e) => {
		let n = i.get(t(e));
		return n === void 0 ? e : {
			...e,
			color: n
		};
	}) : e;
}
function Gc(e, t) {
	if (!Array.isArray(e) || !Array.isArray(t) || !t.every((e) => typeof e == "string")) return;
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e, r) => {
		let i = t[r];
		typeof i == "string" && n.set(e, i);
	}), n;
}
//#endregion
//#region ../app/src/charts/hierarchySampleAttributePlots.js
var Kc = "hierarchy_barplot", qc = "hierarchy_boxplot_stats", Jc = "hierarchy_boxplot_outliers", Yc = "hierarchy_scatterplot_points";
function Xc(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = Sc(t.title), r = Sc(t.emphasizedName), i = t.type, a = Ac(e.attributeInfoSource, e.sampleHierarchy.groupMetadata) ?? "Group", o = "Count", { rows: s, categoryDomain: c, groupDomain: l, grouped: u, sampleCount: d, nonMissingCount: f, missingCount: p, groupSummaries: m } = Mc(e.sampleHierarchy, e.attributeInfo, {
		categoryField: n,
		groupField: a,
		countField: o
	}), h = ol(t, c), g = u ? a : n, _ = u ? a : r, v = u ? l : c, y = u ? "nominal" : i, b = {
		data: { name: Kc },
		mark: { type: "rect" },
		encoding: {
			x: {
				field: kc(g),
				type: y,
				band: .8,
				title: _,
				axis: { labelAngle: 0 }
			},
			y: u ? {
				field: "y0",
				type: "quantitative",
				title: "Count"
			} : {
				field: kc(o),
				type: "quantitative",
				title: "Count"
			},
			...u ? { y2: { field: "y1" } } : {},
			color: {
				field: kc(n),
				type: i,
				title: r,
				scale: h,
				legend: u ? {} : null
			}
		},
		...u ? { transform: [{
			type: "stack",
			field: kc(o),
			groupby: [kc(g)],
			as: ["y0", "y1"]
		}] } : {}
	}, x = b.encoding.x;
	return x.scale = {
		...x.scale ?? {},
		domain: v
	}, {
		kind: "sample_attribute_plot",
		plotType: "barplot",
		request: {
			plotType: "barplot",
			attribute: e.attributeInfo.attribute
		},
		title: `Bar plot of ${Sc(t.title)}`,
		spec: b,
		namedData: [{
			name: Kc,
			rows: s
		}],
		filename: "genomespy-barplot.png",
		summary: {
			groupCount: l.length > 0 ? l.length : 1,
			sampleCount: d,
			plottedCount: f
		},
		characterization: $c({
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
function Zc(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.attributeInfo.attribute), n = Ac(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), r = Sc(t.emphasizedName), i = n ?? "Group", a = Sc(t.title), { statsRows: o, outlierRows: s, groupDomain: c, sampleCount: l, nonMissingCount: u, groupSummaries: d } = Fc(e.sampleHierarchy, e.attributeInfo, {
		groupField: i,
		valueField: a,
		sampleField: "sample"
	}), f = ba({
		statsName: qc,
		outliersName: Jc,
		groupField: kc(i),
		valueField: kc(a),
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
		title: `Boxplot of ${Sc(t.title)}`,
		spec: f,
		namedData: [{
			name: qc,
			rows: o
		}, {
			name: Jc,
			rows: s
		}],
		filename: "genomespy-boxplot.png",
		summary: {
			groupCount: c.length > 0 ? c.length : 1,
			sampleCount: l,
			plottedCount: u
		},
		characterization: el(d)
	};
}
function Qc(e) {
	let t = e.attributeInfoSource.getAttributeInfo(e.xAttributeInfo.attribute), n = e.attributeInfoSource.getAttributeInfo(e.yAttributeInfo.attribute), r = Sc(t.title), i = Sc(n.title), a = Sc(t.emphasizedName), o = Sc(n.emphasizedName), s = Ac(e.attributeInfoSource, e.sampleHierarchy.groupMetadata), c = s ?? "Group", { rows: l, groupDomain: u, sampleCount: d, missingPairCount: f, groupSummaries: p } = Lc(e.sampleHierarchy, e.xAttributeInfo, e.yAttributeInfo, {
		groupField: c,
		xField: r,
		yField: i,
		sampleField: "sample"
	}), m = {
		x: {
			field: kc(r),
			type: "quantitative",
			title: a
		},
		y: {
			field: kc(i),
			type: "quantitative",
			title: o
		}
	}, h = e.colorScaleDomain ?? u, g = sl(u, c, s ?? "Group", h, e.colorScaleRange), _ = {
		data: { name: Yc },
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
			name: Yc,
			rows: l
		}],
		filename: "genomespy-scatterplot.png",
		summary: {
			groupCount: u.length > 0 ? u.length : 1,
			sampleCount: d,
			plottedCount: l.length
		},
		characterization: tl({
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
function $c(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.rows) {
		let r = n[e.categoryFieldName], i = Number(n[e.countFieldName]);
		t.set(r, (t.get(r) ?? 0) + i);
	}
	let n = Bc(t, e.nonMissingCount, e.missingCount), r = Wc(n.categories, (e) => e.value, e.colorScale.domain, e.colorScale.range);
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
			...nl(e.counts, e.nonMissingCount)
		})) } : {}
	};
}
function el(e) {
	let t = e.map((e) => ({ ...e })), n = t.filter((e) => e.nonMissingCount > 0).slice().sort((e, t) => e.median - t.median), r = n[0], i = n[n.length - 1];
	return {
		kind: "quantitative_distribution",
		groups: t,
		...i ? { highestMedianGroup: i.title } : {},
		...r ? { lowestMedianGroup: r.title } : {},
		...i && r ? { largestMedianDifference: i.median - r.median } : {}
	};
}
function tl(e) {
	let t = e.rows.map((t) => Number(t[e.xFieldName])), n = e.rows.map((t) => Number(t[e.yFieldName])), r = il(t, n);
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
		x: rl(t),
		y: rl(n),
		...r === void 0 ? {} : { correlation: al(r) },
		...e.groupSummaries.length > 1 ? { groups: Wc(e.groupSummaries, (e) => e.title, e.colorScaleDomain, e.colorScaleRange) } : {}
	};
}
function nl(e, t) {
	let n = Vc(e, t);
	return n ? { topCategory: n } : {};
}
function rl(e) {
	let t = e.filter((e) => Number.isFinite(e));
	return t.length === 0 ? {} : {
		min: Math.min(...t),
		max: Math.max(...t)
	};
}
function il(e, t) {
	if (e.length !== t.length || e.length < 3) return;
	let n = e.reduce((e, t) => e + t, 0) / e.length, r = t.reduce((e, t) => e + t, 0) / t.length, i = 0, a = 0, o = 0;
	for (let s = 0; s < e.length; s += 1) {
		let c = e[s] - n, l = t[s] - r;
		i += c * c, a += l * l, o += c * l;
	}
	if (!(i === 0 || a === 0)) return o / Math.sqrt(i * a);
}
function al(e) {
	return {
		method: "pearson",
		r: e
	};
}
function ol(e, t) {
	let n = e.scale, r = n && typeof n.domain == "function" ? n.domain() : t, i = n && typeof n.range == "function" ? n.range() : void 0;
	return {
		domain: r,
		...i ? { range: i } : {}
	};
}
function sl(e, t, n, r, i) {
	if (e.length !== 0) return {
		field: kc(t),
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
function cl(e) {
	if (e.sampleHierarchy.groupMetadata.length !== 1) return;
	let t = e.sampleHierarchy.groupMetadata[0].attribute;
	if (t.type !== "SAMPLE_ATTRIBUTE") return;
	let n = e.compositeAttributeInfoSource.getAttributeInfo(t);
	if (n.type === "quantitative") return;
	let r = Uc(n.scale);
	if (r) return {
		domain: r.domain.map(String),
		range: r.range
	};
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataValidation.js
function ll(e, t) {
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
			r(ul);
			continue;
		}
		if (e.sample == null || e.sample === "") {
			r(dl);
			continue;
		}
		let t = String(e.sample);
		a.has(t) && r(fl, 1, t), a.add(t);
	}
	return a.size === 0 && r(pl), n.size > 0 ? { error: Array.from(n.values()) } : { statistics: {
		unknownSamples: a.difference(i),
		notCoveredSamples: i.difference(a),
		samplesInBoth: a.intersection(i)
	} };
}
var ul = "Missing sample field in metadata record", dl = "Empty sample field in metadata record", fl = "Duplicate sample IDs found in metadata", pl = "No valid samples found in metadata";
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAttributes.js
function ml(e, t) {
	return t ? as(e, t, "/") : Go([e], "/");
}
function hl(e, t) {
	let n = e.attributes;
	if (!n) return {};
	let r = e.attributeGroupSeparator, i = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = Ko(ml(e, r), "/");
		for (let e = 1; e <= t.length; e++) i.add(Go(t.slice(0, e), "/"));
	}
	i.add("");
	let a = {}, o = /* @__PURE__ */ new Map();
	for (let [e, t] of Object.entries(n)) {
		let n = ml(e, r);
		if (!i.has(n)) continue;
		let s = o.get(n);
		if (s) throw Error("Metadata source attributes has conflicting keys \"" + s + "\" and \"" + e + "\" that both resolve to \"" + n + "\".");
		o.set(n, e), a[n] = { ...t };
	}
	return a;
}
//#endregion
//#region ../app/src/sampleView/metadata/exampleValues.js
function gl(e, t) {
	return m(e.map((e) => String(e ?? "").trim()).filter(Boolean), t, _l);
}
function _l(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/adapters/dataMetadataSourceAdapter.js
var vl = class {
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
			examples: gl((await this.listColumns(t)).map((e) => e.id), e)
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
		let o = ll(e.sampleIds, a);
		if ("error" in o) {
			let e = o.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		if (o.statistics.samplesInBoth.size === 0) throw Error("Metadata source rows do not match any sample ids in the current view.");
		let s = hl(this.#e, e.columnIds), c = e.groupPath ?? this.#e.groupPath, l = os(a, s, this.#e.attributeGroupSeparator, c);
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
		let n = He(this.#n, e.url), r = j(e, n), i = De(r.type), a;
		try {
			a = await fetch(n, { signal: t });
		} catch (e) {
			throw Error("Could not load metadata source: " + e.message, { cause: e });
		}
		if (!a.ok) throw Error("Could not load metadata source: " + a.status + " " + a.statusText);
		let o;
		return o = typeof a[i] == "function" ? await a[i]() : await a.text(), ae(o, F(r));
	}
	async #c(e) {
		let t = e.values, n = [];
		if (Array.isArray(t)) {
			if (t.length > 0) {
				let e = xe(t[0]);
				n = t.map((t) => e(t));
			}
		} else if (typeof t == "object") n = [t];
		else if (typeof t == "string") n = ae(t, F(j(e)));
		else throw Error("Inline metadata source values must be an array, object, or a string.");
		return n;
	}
	#l(e) {
		return this.#i.has(e);
	}
};
//#endregion
//#region ../../node_modules/@zarrita/storage/dist/src/util.js
function yl(e, t, n, r = {}) {
	return t !== void 0 && n !== void 0 && (r = {
		...r,
		headers: {
			...r.headers,
			Range: `bytes=${t}-${t + n - 1}`
		}
	}), fetch(e, r);
}
function bl(e, t) {
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
function xl(e, t) {
	let n = typeof e == "string" ? new URL(e) : e;
	n.pathname.endsWith("/") || (n.pathname += "/");
	let r = new URL(t.slice(1), n);
	return r.search = n.search, r;
}
async function Sl(e) {
	if (e.status !== 404) {
		if (e.status === 200 || e.status === 206) return new Uint8Array(await e.arrayBuffer());
		throw Error(`Unexpected response status ${e.status} ${e.statusText}`);
	}
}
async function Cl(e, t, n, r) {
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
	return yl(e, o - t, o, n);
}
var wl = class {
	url;
	#e;
	#t;
	constructor(e, t = {}) {
		this.url = e, this.#e = t.overrides ?? {}, this.#t = t.useSuffixRequest ?? !1;
	}
	#n(e) {
		return bl(this.#e, e);
	}
	async get(e, t = {}) {
		let n = xl(this.url, e).href;
		return Sl(await fetch(n, this.#n(t)));
	}
	async getRange(e, t, n = {}) {
		let r = xl(this.url, e), i = this.#n(n), a;
		return a = "suffixLength" in t ? await Cl(r, t.suffixLength, i, this.#t) : await yl(r, t.offset, t.length, i), Sl(a);
	}
}, Tl = class {
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
}, El = class {
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
}, Dl = class e {
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
function Ol(e) {
	let t = new TextDecoder().decode(e);
	return JSON.parse(t);
}
function kl(e, t) {
	let n = t / 2, r = t - 1, i = 0;
	for (let a = 0; a < e.length; a += t) for (let t = 0; t < n; t += 1) i = e[a + t], e[a + t] = e[a + r - t], e[a + r - t] = i;
}
function Al(e) {
	if (e === "v2:object") return globalThis.Array;
	let t = e.match(/v2:([US])(\d+)/);
	if (t) {
		let [, e, n] = t;
		return (e === "U" ? Dl : El).bind(null, Number(n));
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
		bool: Tl
	}[e];
	return B(n, `Unknown or unsupported data_type: ${e}`), n;
}
function jl(e, t) {
	let n = e.length;
	typeof t == "string" && (t = t === "C" ? Array.from({ length: n }, (e, t) => t) : Array.from({ length: n }, (e, t) => n - 1 - t)), B(n === t.length, "Order length must match the number of dimensions.");
	let r = 1, i = Array(n);
	for (let n = t.length - 1; n >= 0; n--) i[t[n]] = r, r *= e[t[n]];
	return i;
}
function Ml({ name: e, configuration: t }) {
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
function Nl(e) {
	if (e === "|O") return { data_type: "v2:object" };
	let t = e.match(/^([<|>])(.*)$/);
	B(t, `Invalid dtype: ${e}`);
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
	return B(i, `Unsupported or unknown dtype: ${e}`), n === "|" ? { data_type: i } : {
		data_type: i,
		endian: n === "<" ? "little" : "big"
	};
}
function Pl(e, t = {}) {
	let n = [], r = Nl(e.dtype);
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
function Fl(e, t = {}) {
	return {
		zarr_format: 3,
		node_type: "group",
		attributes: t
	};
}
function Il(e, t) {
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
function Ll(e) {
	return e?.name === "sharding_indexed";
}
function Rl(e) {
	return (e.data_type === "uint64" || e.data_type === "int64") && e.fill_value != null ? BigInt(e.fill_value) : e.fill_value;
}
function zl(e, ...t) {
	if (!t.some((t) => e instanceof t)) throw e;
}
function B(e, t = "") {
	if (!e) throw Error(t);
}
async function Bl(e, { format: t, signal: n }) {
	let r = e instanceof Response ? e : new Response(e);
	B(r.body, "Response does not contain body.");
	try {
		return await new Response(r.body.pipeThrough(new DecompressionStream(t), { signal: n })).arrayBuffer();
	} catch {
		throw n?.throwIfAborted(), Error(`Failed to decode ${t}`);
	}
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/bitround.js
var Vl = class e {
	kind = "array_to_array";
	constructor(e, t) {
		B(e.keepbits >= 0, "keepbits must be zero or positive");
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
}, Hl = Ul();
function Ul() {
	let e = new Uint32Array([305419896]);
	return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)[0] !== 18;
}
function Wl(e) {
	return "BYTES_PER_ELEMENT" in e ? e.BYTES_PER_ELEMENT : 4;
}
var Gl = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t) {
		this.#i = e?.endian, this.#t = Al(t.data_type), this.#r = t.shape, this.#e = jl(t.shape, "C");
		let n = new this.#t(0);
		this.#n = n.BYTES_PER_ELEMENT;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		let t = new Uint8Array(e.data.buffer);
		return Hl && this.#i === "big" && kl(t, Wl(this.#t)), t;
	}
	decode(e) {
		return Hl && this.#i === "big" && kl(e, Wl(this.#t)), {
			data: new this.#t(e.buffer, e.byteOffset, e.byteLength / this.#n),
			shape: this.#r,
			stride: this.#e
		};
	}
}, Kl = class e {
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
}, ql = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Gzip encoding is not enabled by default. Please register a custom codec with `numcodecs/gzip`.");
	}
	async decode(e) {
		let t = await Bl(e, { format: "gzip" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/json2.js
function Jl(e, t) {
	return B(!Number.isNaN(t), "JsonCodec allow_nan is false but NaN was encountered during encoding."), B(t !== Infinity, "JsonCodec allow_nan is false but Infinity was encountered during encoding."), B(t !== -Infinity, "JsonCodec allow_nan is false but -Infinity was encountered during encoding."), t;
}
function Yl(e, t) {
	return t instanceof Object && !Array.isArray(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t;
}
var Xl = class e {
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
		B(n === "utf-8", "JsonCodec does not yet support non-utf-8 encoding.");
		let s = [];
		B(i, "JsonCodec does not yet support skipping the check for circular references during encoding."), a || s.push(Jl), o && s.push(Yl);
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
		B(t, "JsonCodec does not yet support non-strict decoding.");
		let n = Ol(e), r = n.pop();
		return n.pop(), B(r, "0D not implemented for JsonCodec."), {
			data: n,
			shape: r,
			stride: jl(r, "C")
		};
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/transpose.js
function Zl(e) {
	return e instanceof Tl || e instanceof El || e instanceof Dl ? new Proxy(e, {
		get(e, t) {
			return e.get(Number(t));
		},
		set(e, t, n) {
			return e.set(Number(t), n), !0;
		}
	}) : e;
}
function Ql(e, t) {
	let n;
	return n = e.data instanceof El || e.data instanceof Dl ? new e.constructor(e.data.length, e.data.chars) : new e.constructor(e.data.length), {
		data: n,
		shape: e.shape,
		stride: jl(e.shape, t)
	};
}
function $l(e, t) {
	let n = Ql(e, t), r = e.shape.length, i = e.data.length, a = Array(r).fill(0), o = Zl(e.data), s = Zl(n.data);
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
function eu(e) {
	let t = e.shape.length;
	return B(t === e.stride.length, "Shape and stride must have the same length."), e.stride.map((e, t) => ({
		stride: e,
		index: t
	})).sort((e, t) => t.stride - e.stride).map((e) => e.index);
}
function tu(e, t) {
	let n = eu(e);
	return B(n.length === t.length, "Orders must match"), n.every((e, n) => e === t[n]);
}
var nu = class e {
	kind = "array_to_array";
	#e;
	#t;
	constructor(e, t) {
		let n = e.order ?? "C", r = t.shape.length, i = Array(r), a = Array(r);
		if (n === "C") for (let e = 0; e < r; ++e) i[e] = e, a[e] = e;
		else if (n === "F") for (let e = 0; e < r; ++e) i[e] = r - e - 1, a[e] = r - e - 1;
		else i = n, i.forEach((e, t) => {
			B(a[e] === void 0, `Invalid permutation: ${JSON.stringify(n)}`), a[e] = t;
		});
		this.#e = i, this.#t = a;
	}
	static fromConfig(t, n) {
		return new e(t, n);
	}
	encode(e) {
		return tu(e, this.#t) ? e : $l(e, this.#t);
	}
	decode(e) {
		return {
			data: e.data,
			shape: e.shape,
			stride: jl(e.shape, this.#e)
		};
	}
}, ru = class e {
	kind = "array_to_bytes";
	#e;
	#t;
	constructor(e) {
		this.#e = e, this.#t = jl(e, "C");
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
}, iu = class e {
	kind = "bytes_to_bytes";
	static fromConfig(t) {
		return new e();
	}
	encode(e) {
		throw Error("Zlib encoding is not enabled by default. Please register a codec with `numcodecs/zlib`.");
	}
	async decode(e) {
		let t = await Bl(e, { format: "deflate" });
		return new Uint8Array(t);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs.js
function au() {
	return (/* @__PURE__ */ new Map()).set("blosc", () => import("./blosc-JROzDOnd.js").then((e) => e.default)).set("lz4", () => import("./lz4-CUYSbVey.js").then((e) => e.default)).set("zstd", () => import("./zstd-YMzMcush.js").then((e) => e.default)).set("gzip", () => ql).set("zlib", () => iu).set("transpose", () => nu).set("bytes", () => Gl).set("crc32c", () => Kl).set("vlen-utf8", () => ru).set("json2", () => Xl).set("bitround", () => Vl);
}
var ou = au();
function su(e) {
	let t;
	return {
		async encode(n) {
			t ||= await cu(e);
			for (let e of t.array_to_array) n = await e.encode(n);
			let r = await t.array_to_bytes.encode(n);
			for (let e of t.bytes_to_bytes) r = await e.encode(r);
			return r;
		},
		async decode(n) {
			t ||= await cu(e);
			for (let e = t.bytes_to_bytes.length - 1; e >= 0; e--) n = await t.bytes_to_bytes[e].decode(n);
			let r = await t.array_to_bytes.decode(n);
			for (let e = t.array_to_array.length - 1; e >= 0; e--) r = await t.array_to_array[e].decode(r);
			return r;
		}
	};
}
async function cu(e) {
	let t = e.codecs.map(async (e) => {
		let t = await ou.get(e.name)?.();
		return B(t, `Unknown codec: ${e.name}`), {
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
	return r ||= (B(lu(e), `Cannot encode ${e.data_type} to bytes without a codec`), Gl.fromConfig({ endian: "little" }, e)), {
		array_to_array: n,
		array_to_bytes: r,
		bytes_to_bytes: i
	};
}
function lu(e) {
	return e.data_type !== "v2:object" && e.data_type !== "string";
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/codecs/sharding.js
var uu = 18446744073709551615n;
function du(e, t, n, r) {
	B(e.store.getRange, "Store does not support range requests");
	let i = e.store.getRange.bind(e.store), a = t.map((e, t) => e / r.chunk_shape[t]), o = su({
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
		if (!(g === uu && _ === uu)) return i(u, {
			offset: Number(g),
			length: Number(_)
		}, r);
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/hierarchy.js
var fu = class e {
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
function pu(e) {
	return new fu(e ?? /* @__PURE__ */ new Map());
}
var mu = class extends fu {
	kind = "group";
	#e;
	constructor(e, t, n) {
		super(e, t), this.#e = n;
	}
	get attrs() {
		return this.#e.attributes;
	}
};
function hu(e) {
	return e.find((e) => e.name === "transpose")?.configuration?.order ?? "C";
}
var gu = Symbol("zarrita.context");
function _u(e) {
	return e[gu];
}
function vu(e, t) {
	let { configuration: n } = t.codecs.find(Ll) ?? {}, r = {
		encode_chunk_key: Ml(t.chunk_key_encoding),
		TypedArray: Al(t.data_type),
		fill_value: t.fill_value
	};
	if (n) {
		let i = hu(n.codecs);
		return {
			...r,
			kind: "sharded",
			chunk_shape: n.chunk_shape,
			codec: su({
				data_type: t.data_type,
				shape: n.chunk_shape,
				codecs: n.codecs
			}),
			get_strides(e) {
				return jl(e, i);
			},
			get_chunk_bytes: du(e, t.chunk_grid.configuration.chunk_shape, r.encode_chunk_key, n)
		};
	}
	let i = hu(t.codecs);
	return {
		...r,
		kind: "regular",
		chunk_shape: t.chunk_grid.configuration.chunk_shape,
		codec: su({
			data_type: t.data_type,
			shape: t.chunk_grid.configuration.chunk_shape,
			codecs: t.codecs
		}),
		get_strides(e) {
			return jl(e, i);
		},
		async get_chunk_bytes(t, n) {
			let i = r.encode_chunk_key(t), a = e.resolve(i).path;
			return e.store.get(a, n);
		}
	};
}
var yu = class extends fu {
	kind = "array";
	#e;
	[gu];
	constructor(e, t, n) {
		super(e, t), this.#e = {
			...n,
			fill_value: Rl(n)
		}, this[gu] = vu(this, this.#e);
	}
	get attrs() {
		return this.#e.attributes;
	}
	get shape() {
		return this.#e.shape;
	}
	get chunks() {
		return this[gu].chunk_shape;
	}
	get dtype() {
		return this.#e.data_type;
	}
	async getChunk(e, t) {
		let n = this[gu], r = await n.get_chunk_bytes(e, t);
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
		return Il(this.dtype, e);
	}
};
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/util.js
function* bu(e, t, n = 1) {
	t === void 0 && (t = e, e = 0);
	for (let r = e; r < t; r += n) yield r;
}
function* xu(...e) {
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
function Su({ start: e, stop: t, step: n }, r) {
	if (n === 0) throw Error("slice step cannot be zero");
	n ??= 1;
	let i = n < 0, [a, o] = i ? [-1, r - 1] : [0, r];
	return e === null ? e = i ? o : a : e < 0 ? (e += r, e < a && (e = a)) : e > o && (e = o), t === null ? t = i ? a : o : t < 0 ? (t += r, t < a && (t = a)) : t > o && (t = o), [
		e,
		t,
		n
	];
}
function Cu(e, t, n = null) {
	return t === void 0 && (t = e, e = null), {
		start: e,
		stop: t,
		step: n
	};
}
function wu() {
	let e = [];
	return {
		add: (t) => e.push(t()),
		onIdle: () => Promise.all(e)
	};
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/indexer.js
var Tu = class extends Error {
	constructor(e) {
		super(e), this.name = "IndexError";
	}
};
function Eu(e, t) {
	throw new Tu(`too many indicies for array; expected ${t.length}, got ${e.length}`);
}
function Du(e) {
	throw new Tu(`index out of bounds for dimension with length ${e}`);
}
function Ou() {
	throw new Tu("only slices with step >= 1 are supported");
}
function ku(e, t) {
	e.length > t.length && Eu(e, t);
}
function Au(e, t) {
	return e = Math.trunc(e), e < 0 && (e = t + e), (e >= t || e < 0) && Du(t), e;
}
var ju = class {
	dim_sel;
	dim_len;
	dim_chunk_len;
	nitems;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		e = Au(e, t), this.dim_sel = e, this.dim_len = t, this.dim_chunk_len = n, this.nitems = 1;
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.dim_sel / this.dim_chunk_len), t = e * this.dim_chunk_len;
		yield {
			dim_chunk_ix: e,
			dim_chunk_sel: this.dim_sel - t
		};
	}
}, Mu = class {
	start;
	stop;
	step;
	dim_len;
	dim_chunk_len;
	nitems;
	nchunks;
	constructor({ dim_sel: e, dim_len: t, dim_chunk_len: n }) {
		let [r, i, a] = Su(e, t);
		this.start = r, this.stop = i, this.step = a, this.step < 1 && Ou(), this.dim_len = t, this.dim_chunk_len = n, this.nitems = Math.max(0, Math.ceil((this.stop - this.start) / this.step)), this.nchunks = Math.ceil(this.dim_len / this.dim_chunk_len);
	}
	*[Symbol.iterator]() {
		let e = Math.floor(this.start / this.dim_chunk_len), t = Math.ceil(this.stop / this.dim_chunk_len);
		for (let n of bu(e, t)) {
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
function Nu(e, t) {
	let n = [];
	return e === null ? n = t.map((e) => Cu(null)) : Array.isArray(e) && (n = e.map((e) => e ?? Cu(null))), ku(n, t), n;
}
var Pu = class {
	dim_indexers;
	shape;
	constructor({ selection: e, shape: t, chunk_shape: n }) {
		this.dim_indexers = Nu(e, t).map((e, r) => new (typeof e == "number" ? ju : Mu)({
			dim_sel: e,
			dim_len: t[r],
			dim_chunk_len: n[r]
		})), this.shape = this.dim_indexers.filter((e) => e instanceof Mu).map((e) => e.nitems);
	}
	*[Symbol.iterator]() {
		for (let e of xu(...this.dim_indexers)) yield {
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
function Fu(e, t) {
	return "get" in e ? e.get(t) : e[t];
}
async function Iu(e, t, n, r) {
	let i = _u(e), a = new Pu({
		selection: t,
		shape: e.shape,
		chunk_shape: e.chunks
	}), o = r.prepare(new i.TypedArray(a.shape.reduce((e, t) => e * t, 1)), a.shape, i.get_strides(a.shape)), s = n.create_queue?.() ?? wu();
	for (let { chunk_coords: t, mapping: i } of a) s.add(async () => {
		let { data: a, shape: s, stride: c } = await e.getChunk(t, n.opts), l = r.prepare(a, s, c);
		r.set_from_chunk(o, l, i);
	});
	return await s.onIdle(), a.shape.length === 0 ? Fu(o.data, 0) : o;
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/indexing/ops.js
function Lu(e, t = 0, n) {
	let r = n ?? e.length - t;
	return {
		length: r,
		subarray(n, i = r) {
			return Lu(e, t + n, i - n);
		},
		set(n, r = 0) {
			for (let i = 0; i < n.length; i++) e[t + r + i] = n.get(i);
		},
		get(n) {
			return e[t + n];
		}
	};
}
function Ru(e) {
	return globalThis.Array.isArray(e.data) ? {
		data: Lu(e.data),
		stride: e.stride,
		bytes_per_element: 1
	} : {
		data: new Uint8Array(e.data.buffer, e.data.byteOffset, e.data.byteLength),
		stride: e.stride,
		bytes_per_element: e.data.BYTES_PER_ELEMENT
	};
}
function zu(e) {
	return "chars" in e ? e.constructor.bind(null, e.chars) : e.constructor;
}
function Bu(e, t) {
	if (globalThis.Array.isArray(e.data)) return Lu([t]);
	let n = new (zu(e.data))([t]);
	return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
var Vu = {
	prepare(e, t, n) {
		return {
			data: e,
			shape: t,
			stride: n
		};
	},
	set_scalar(e, t, n) {
		let r = Ru(e);
		Wu(r, t, Bu(e, n), r.bytes_per_element);
	},
	set_from_chunk(e, t, n) {
		let r = Ru(e);
		Gu(r, Ru(t), r.bytes_per_element, n);
	}
};
async function Hu(e, t = null, n = {}) {
	return Iu(e, t, n, Vu);
}
function Uu(e, t, n) {
	return n < 0 && t < e ? Math.floor((e - t - 1) / -n) + 1 : e < t ? Math.floor((t - e - 1) / n) + 1 : 0;
}
function Wu(e, t, n, r) {
	if (t.length === 0) {
		e.data.set(n, 0);
		return;
	}
	let [i, ...a] = t, [o, ...s] = e.stride;
	if (typeof i == "number") {
		Wu({
			data: e.data.subarray(o * i * r),
			stride: s
		}, a, n, r);
		return;
	}
	let [c, l, u] = i, d = Uu(c, l, u);
	if (a.length === 0) {
		for (let t = 0; t < d; t++) e.data.set(n, o * (c + u * t) * r);
		return;
	}
	for (let t = 0; t < d; t++) Wu({
		data: e.data.subarray(o * (c + u * t) * r),
		stride: s
	}, a, n, r);
}
function Gu(e, t, n, r) {
	let [i, ...a] = r, [o, ...s] = e.stride, [c, ...l] = t.stride;
	if (i.from === null) {
		if (a.length === 0) {
			e.data.set(t.data.subarray(0, n), i.to * n);
			return;
		}
		Gu({
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
		Gu(e, {
			data: t.data.subarray(c * i.from * n),
			stride: l
		}, n, a);
		return;
	}
	let [u, d, f] = i.to, [p, m, h] = i.from, g = Uu(u, d, f);
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
	for (let r = 0; r < g; r++) Gu({
		data: e.data.subarray(o * (u + r * f) * n),
		stride: s
	}, {
		data: t.data.subarray(c * (p + r * h) * n),
		stride: l
	}, n, a);
}
//#endregion
//#region ../../node_modules/zarrita/dist/src/errors.js
var Ku = class extends Error {
	constructor(e, t = {}) {
		super(`Node not found: ${e}`, t), this.name = "NodeNotFoundError";
	}
}, qu = class extends Error {
	constructor(e) {
		super(`Missing key: ${e}`), this.name = "KeyError";
	}
}, Ju = Yu();
function Yu() {
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
async function Xu(e) {
	let t = await e.store.get(e.resolve(".zattrs").path);
	return t ? Ol(t) : {};
}
async function Zu(e, t = {}) {
	let n = "store" in e ? e : new fu(e), r = {};
	return (t.attrs ?? !0) && (r = await Xu(n)), t.kind === "array" ? Qu(n, r) : t.kind === "group" ? $u(n, r) : Qu(n, r).catch((e) => (zl(e, Ku), $u(n, r)));
}
async function Qu(e, t) {
	let { path: n } = e.resolve(".zarray"), r = await e.store.get(n);
	if (!r) throw new Ku("v2 array", { cause: new qu(n) });
	return Ju.increment(e.store, "v2"), new yu(e.store, e.path, Pl(Ol(r), t));
}
async function $u(e, t) {
	let { path: n } = e.resolve(".zgroup"), r = await e.store.get(n);
	if (!r) throw new Ku("v2 group", { cause: new qu(n) });
	return Ju.increment(e.store, "v2"), new mu(e.store, e.path, Fl(Ol(r), t));
}
async function ed(e) {
	let { store: t, path: n } = e.resolve("zarr.json"), r = await e.store.get(n);
	if (!r) throw new Ku("v3 array or group", { cause: new qu(n) });
	let i = Ol(r);
	return i.node_type === "array" && (i.fill_value = Rl(i)), i.node_type === "array" ? new yu(t, e.path, i) : new mu(t, e.path, i);
}
async function td(e, t = {}) {
	let n = "store" in e ? e : new fu(e), r = await ed(n);
	if (Ju.increment(n.store, "v3"), t.kind === void 0 || t.kind === "array" && r instanceof yu || t.kind === "group" && r instanceof mu) return r;
	let i = r instanceof yu ? "array" : "group";
	throw Error(`Expected node of kind ${t.kind}, found ${i}.`);
}
async function nd(e, t = {}) {
	let n = "store" in e ? e.store : e, r = Ju.version_max(n), i = r === "v2" ? nd.v2 : nd.v3, a = r === "v2" ? nd.v3 : nd.v2;
	return i(e, t).catch((n) => (zl(n, Ku), a(e, t)));
}
nd.v2 = Zu, nd.v3 = td;
//#endregion
//#region ../app/src/sampleView/metadata/adapters/zarrMetadataSourceAdapter.js
function rd(e) {
	return e.startsWith("/") ? e.slice(1) : e;
}
function id(e) {
	if (e.shape.length !== 1) throw Error("Expected a one-dimensional Zarr selection result.");
	let t = e.shape[0], n = e.stride[0], r = [];
	for (let i = 0; i < t; i++) {
		let t = i * n;
		typeof e.data?.get == "function" ? r.push(e.data.get(t)) : r.push(e.data[t]);
	}
	return r;
}
function ad(e, t, n, r = {}) {
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
var od = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e, t = {}) {
		this.#e = e, this.#t = e.backend, this.#n = new wl(He(t.baseUrl, this.#t.url)), this.#s = new Set(e.excludeColumns ?? []);
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
			let r = gl(await this.#h(n.path, t), e);
			return sd({
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
			let c = id(await Hu(n, [Cu(null), e], t ? { opts: { signal: t } } : void 0));
			for (let e = 0; e < o.length; e++) {
				let t = a.get(o[e]);
				s[e][r] = c[t];
			}
		}
		let c = ll(e.sampleIds, s);
		if ("error" in c) {
			let e = c.error[0];
			throw Error("Invalid metadata source payload: " + String(e.message));
		}
		let l = hl(this.#e, e.columnIds), u = e.groupPath ?? this.#e.groupPath, d = os(s, l, this.#e.attributeGroupSeparator, u);
		return e.replace !== void 0 && (d.replace = e.replace), d;
	}
	async #c() {
		let e = rd(this.#t.matrix?.valuesPath ?? "X");
		return nd(pu(this.#n).resolve(e), { kind: "array" });
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
		for (let e = 0; e < t.length; e++) this.#g(t[e]) || ad(n, t[e], e);
		for (let r of this.#t.identifiers ?? []) {
			let i = await this.#m(r.path, e);
			if (i.length !== t.length) throw Error("Identifier array \"" + r.path + "\" does not match the number of matrix columns.");
			for (let e = 0; e < i.length; e++) this.#g(t[e]) || ad(n, i[e], e, { stripVersionSuffix: r.stripVersionSuffix });
		}
		return n;
	}
	async #m(e, t) {
		return id(await Hu(await nd(pu(this.#n).resolve(rd(e)), { kind: "array" }), [Cu(null)], t ? { opts: { signal: t } } : void 0));
	}
	async #h(e, t) {
		return (await this.#m(e, t)).map((e) => String(e));
	}
	#g(e) {
		return this.#s.has(e);
	}
};
function sd(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceAdapters.js
async function cd(e, t) {
	try {
		return await C(e, { signal: t });
	} catch (t) {
		if (t instanceof d && t.kind === "json") throw Error("Invalid JSON in metadata source import " + e + ": " + t.message, { cause: t });
		let n = t instanceof Error ? t.message : String(t);
		throw Error("Could not load metadata source import from " + e + ": " + n, { cause: t });
	}
}
function ld(e) {
	if ("columnDefs" in e) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"columnDefs\". Use \"attributes\" instead.");
	}
	if (e.backend.backend === "zarr" && "synonymIndex" in e.backend) {
		let t = e.id ?? e.name ?? "(unnamed source)";
		throw Error("Metadata source \"" + t + "\" uses removed property \"backend.synonymIndex\". Use \"backend.identifiers\" instead.");
	}
}
function ud(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Metadata source import " + t + " must resolve to a single source object.");
	if ("import" in e) throw Error("Nested metadata source imports are not supported: " + t);
	if ("backend" in e) return e;
	throw Error("Metadata source import \"" + t + "\" is missing required property \"backend\".");
}
function dd(e, t) {
	if (e.backend.backend === "data") {
		let n = e.backend.data;
		return n && typeof n == "object" && !Array.isArray(n) && "url" in n && typeof n.url == "string" ? {
			...e,
			backend: {
				...e.backend,
				data: {
					...n,
					url: $e(t, n.url)
				}
			}
		} : e;
	}
	return "url" in e.backend && typeof e.backend.url == "string" ? {
		...e,
		backend: {
			...e.backend,
			url: $e(t, e.backend.url)
		}
	} : e;
}
async function fd(e, t = {}) {
	let n = e?.sources ?? [], r = t.loadJson ?? cd;
	return Promise.all(n.map(async (e) => {
		if (!("import" in e)) return ld(e), e;
		let n = $e(t.baseUrl, e.import.url), i = dd(ud(await r(n, t.signal), n), n);
		return ld(i), i;
	}));
}
function pd(e, t) {
	if (e.length === 0) throw Error("No metadata sources are configured.");
	if (t !== void 0) {
		let n = e.find((e) => e.id === t);
		if (!n) throw Error("Metadata source \"" + t + "\" was not found.");
		return n;
	}
	if (e.length !== 1) throw Error("Metadata source id is required when multiple sources are configured.");
	return e[0];
}
function md(e, t = {}) {
	if (e.backend.backend === "data") return new vl(e, t);
	if (e.backend.backend === "zarr") return new od(e, t);
	throw Error("Metadata backend \"" + e.backend.backend + "\" is not implemented yet.");
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceInitialLoad.js
function hd(e) {
	return e.initialLoad === void 0 ? e.backend.backend === "data" ? "*" : !1 : e.initialLoad;
}
async function gd(e, t, n) {
	let r = hd(e);
	return r === !1 ? [] : r === "*" ? (await t.listColumns(n)).map((e) => e.id) : (await t.resolveColumns(r, n)).columnIds;
}
function _d(e) {
	let t = [];
	for (let n = 0; n < e.length; n += 100) t.push(e.slice(n, n + 100));
	return t;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceSummaries.js
var vd = 3;
async function yd(e, t = {}) {
	let n = e.filter((e) => hd(e) === !1);
	return Promise.all(n.map((e) => bd(e, t)));
}
async function bd(e, t) {
	if (!t.getAdapter) throw Error("Metadata source summary adapter is required.");
	let n = await t.getAdapter(e).listIdentifierExamples(t.maxExamples ?? vd, t.signal);
	return Sd({
		sourceId: e.id,
		name: e.name,
		description: e.description,
		attributeDefaults: xd(e),
		identifiers: n
	});
}
function xd(e) {
	let t = e.attributes?.[""];
	if (t) return Sd({
		dataType: t.type,
		description: t.description
	});
}
function Sd(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntimeState.js
var Cd = /* @__PURE__ */ new WeakMap(), wd = class {
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
			delete e.signal, this.#n = fd(this.#e.spec.metadata, {
				...e,
				baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl()
			}).catch((e) => {
				throw this.#n = void 0, e;
			});
		}
		return this.#n;
	}
	async getSource(e) {
		return pd(await this.getSources(), e);
	}
	getAdapter(e) {
		let t = this.#r.get(e);
		return t || (t = md(e, { baseUrl: this.#t.baseUrl ?? this.#e.getBaseUrl() }), this.#r.set(e, t)), t;
	}
	getAgentSummaries(e) {
		return this.#i ||= this.getSources().then((t) => yd(t, {
			getAdapter: (e) => this.getAdapter(e),
			signal: e
		})).catch((e) => {
			throw this.#i = void 0, e;
		}), this.#i;
	}
};
function Td(e, t) {
	return new wd(e, t);
}
function Ed(e) {
	let t = Cd.get(e);
	return t || (t = Td(e), Cd.set(e, t)), t;
}
//#endregion
//#region ../app/src/sampleView/unknownAttributeInfoError.js
var Dd = class extends Error {
	constructor(e) {
		super(e), this.name = "UnknownAttributeInfoError";
	}
};
//#endregion
//#region ../app/src/charts/chartDialogUtils.js
function Od(e, t, n, r = ".chart-container") {
	if (!t) throw Error("Chart is not ready for export.");
	let i = e.querySelector(r);
	if (!i) throw Error("Cannot find chart container.");
	let a = t.exportCanvas(i.clientWidth, i.clientHeight, 3, "white"), o = document.createElement("a");
	o.href = a, o.download = n, document.body.appendChild(o), o.click(), document.body.removeChild(o);
}
async function kd(e, t) {
	return Oe(e, t.namedData.length > 0 ? {
		...t.spec,
		datasets: {
			...t.spec.datasets,
			...Object.fromEntries(t.namedData.map((e) => [e.name, e.rows]))
		}
	} : t.spec);
}
//#endregion
//#region ../app/src/agentApi/index.js
function Ad(e) {
	return {
		getSampleHierarchy() {
			return e.getSampleView()?.sampleHierarchy;
		},
		getMetadataSourceSummaries(t) {
			let n = e.getSampleView();
			return n ? Ed(n).getAgentSummaries(t) : Promise.resolve([]);
		},
		getAttributeInfo(t) {
			let n = e.getSampleView();
			if (n) try {
				return n.compositeAttributeInfoSource.getAttributeInfo(t);
			} catch (e) {
				if (e instanceof Dd) return;
				throw e;
			}
		},
		materializeAttributeIdentifier(t) {
			let n = e.getSampleView();
			if (!n || !Md(t)) return t;
			let r = t.specifier;
			return {
				...t,
				specifier: {
					...r,
					interval: ua(n, r.interval)
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
			if (n) return _t(n, t);
		},
		getSelectionFeatureFieldValues(t, n, r) {
			let i = e.genomeSpy.viewRoot;
			if (!i) return;
			let a = _t(i, t);
			if (a) return ha(a, n, r);
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
				let e = await jd(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "nominal" && e.type !== "ordinal") throw Error("Bar plots require a categorical sample attribute.");
				return Xc({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			} else if (i === "boxplot") {
				let e = await jd(r, t.attribute, t.attributeLabel);
				if (!e) throw Error("Could not resolve the requested sample attribute.");
				if (e.type !== "quantitative") throw Error("Box plots require a quantitative sample attribute.");
				return Zc({
					attributeInfo: e,
					sampleHierarchy: n.sampleHierarchy,
					attributeInfoSource: r
				});
			} else if (i === "scatterplot") {
				let e = await jd(r, t.xAttribute, t.xAttributeLabel), i = await jd(r, t.yAttribute, t.yAttributeLabel);
				if (!e || !i) throw Error("Could not resolve one of the requested sample attributes.");
				if (e.type !== "quantitative" || i.type !== "quantitative") throw Error("Scatter plots require two quantitative sample attributes.");
				let a = cl(n);
				return Qc({
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
			e.store.dispatch(Wi.actions.setVisibility({
				key: Yi(t),
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
async function jd(e, t, n) {
	let r;
	try {
		r = e.getAttributeInfo(t);
	} catch (e) {
		if (e instanceof Dd) return;
		throw e;
	}
	if (r) return r.ensureAvailability && await r.ensureAvailability({}), n ? {
		...r,
		title: n,
		emphasizedName: n
	} : r;
}
function Md(e) {
	let t = e.specifier;
	return e.type === "VALUE_AT_LOCUS" && typeof t == "object" && !!t && "interval" in t && la(t.interval);
}
//#endregion
//#region ../../node_modules/lit-html/directives/class-map.js
var Nd = re(class extends ke {
	constructor(e) {
		if (super(e), e.type !== ye.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return N;
	}
}), Pd = {
	prefix: "fas",
	iconName: "trash-can",
	icon: [
		448,
		512,
		[61460, "trash-alt"],
		"f2ed",
		"M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
	]
}, Fd = {
	prefix: "fas",
	iconName: "forward-step",
	icon: [
		320,
		512,
		["step-forward"],
		"f051",
		"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"
	]
}, Id = {
	prefix: "fas",
	iconName: "caret-right",
	icon: [
		256,
		512,
		[],
		"f0da",
		"M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
	]
}, Ld = {
	prefix: "fas",
	iconName: "paste",
	icon: [
		512,
		512,
		["file-clipboard"],
		"f0ea",
		"M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, Rd = {
	prefix: "fas",
	iconName: "table",
	icon: [
		512,
		512,
		[],
		"f0ce",
		"M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
	]
}, zd = {
	prefix: "fas",
	iconName: "caret-left",
	icon: [
		256,
		512,
		[],
		"f0d9",
		"M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
	]
}, Bd = {
	prefix: "fas",
	iconName: "circle-exclamation",
	icon: [
		512,
		512,
		["exclamation-circle"],
		"f06a",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
	]
}, Vd = {
	prefix: "fas",
	iconName: "pen-to-square",
	icon: [
		512,
		512,
		["edit"],
		"f044",
		"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
	]
}, Hd = {
	prefix: "fas",
	iconName: "bookmark",
	icon: [
		384,
		512,
		[128278, 61591],
		"f02e",
		"M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
	]
}, Ud = {
	prefix: "fas",
	iconName: "arrow-pointer",
	icon: [
		320,
		512,
		["mouse-pointer"],
		"f245",
		"M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
	]
}, Wd = {
	prefix: "fas",
	iconName: "maximize",
	icon: [
		512,
		512,
		["expand-arrows-alt"],
		"f31e",
		"M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"
	]
}, Gd = {
	prefix: "fas",
	iconName: "file-arrow-up",
	icon: [
		384,
		512,
		["file-upload"],
		"f574",
		"M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"
	]
}, Kd = {
	prefix: "fas",
	iconName: "file-import",
	icon: [
		512,
		512,
		["arrow-right-to-file"],
		"f56f",
		"M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z"
	]
}, qd = {
	prefix: "fas",
	iconName: "arrow-down-wide-short",
	icon: [
		576,
		512,
		["sort-amount-asc", "sort-amount-down"],
		"f160",
		"M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"
	]
}, Jd = qd, V = {
	prefix: "fas",
	iconName: "filter",
	icon: [
		512,
		512,
		[],
		"f0b0",
		"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
	]
}, Yd = {
	prefix: "fas",
	iconName: "object-group",
	icon: [
		576,
		512,
		[],
		"f247",
		"M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"
	]
}, Xd = {
	prefix: "fas",
	iconName: "circle",
	icon: [
		512,
		512,
		[
			128308,
			128309,
			128992,
			128993,
			128994,
			128995,
			128996,
			9679,
			9898,
			9899,
			11044,
			61708,
			61915
		],
		"f111",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
	]
}, Zd = {
	prefix: "fas",
	iconName: "wrench",
	icon: [
		512,
		512,
		[128295],
		"f0ad",
		"M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, Qd = {
	prefix: "fas",
	iconName: "file-image",
	icon: [
		384,
		512,
		[128443],
		"f1c5",
		"M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-88 0-40 0-48 0-48 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"
	]
}, $d = {
	prefix: "fas",
	iconName: "circle-question",
	icon: [
		512,
		512,
		[62108, "question-circle"],
		"f059",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
	]
}, ef = {
	prefix: "fas",
	iconName: "pen",
	icon: [
		512,
		512,
		[128394],
		"f304",
		"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
	]
}, tf = {
	prefix: "fas",
	iconName: "arrow-rotate-right",
	icon: [
		512,
		512,
		[
			8635,
			"arrow-right-rotate",
			"arrow-rotate-forward",
			"redo"
		],
		"f01e",
		"M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
	]
}, nf = {
	prefix: "fas",
	iconName: "trash",
	icon: [
		448,
		512,
		[],
		"f1f8",
		"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
	]
}, rf = {
	prefix: "fas",
	iconName: "circle-info",
	icon: [
		512,
		512,
		["info-circle"],
		"f05a",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
	]
}, af = {
	prefix: "fas",
	iconName: "arrow-rotate-left",
	icon: [
		512,
		512,
		[
			8634,
			"arrow-left-rotate",
			"arrow-rotate-back",
			"arrow-rotate-backward",
			"undo"
		],
		"f0e2",
		"M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
	]
}, of = {
	prefix: "fas",
	iconName: "backward-step",
	icon: [
		320,
		512,
		["step-backward"],
		"f048",
		"M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"
	]
}, sf = {
	prefix: "fas",
	iconName: "sliders",
	icon: [
		512,
		512,
		["sliders-h"],
		"f1de",
		"M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
	]
}, cf = {
	prefix: "fas",
	iconName: "ellipsis-vertical",
	icon: [
		128,
		512,
		["ellipsis-v"],
		"f142",
		"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
	]
}, lf = cf, uf = {
	prefix: "fas",
	iconName: "download",
	icon: [
		512,
		512,
		[],
		"f019",
		"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, df = {
	prefix: "fas",
	iconName: "arrow-up-wide-short",
	icon: [
		576,
		512,
		["sort-amount-up"],
		"f161",
		"M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
	]
}, ff = {
	prefix: "fas",
	iconName: "upload",
	icon: [
		512,
		512,
		[],
		"f093",
		"M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
	]
}, pf = {
	prefix: "fas",
	iconName: "ellipsis",
	icon: [
		448,
		512,
		["ellipsis-h"],
		"f141",
		"M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
	]
}, mf = {
	prefix: "fas",
	iconName: "medal",
	icon: [
		512,
		512,
		[127941],
		"f5a2",
		"M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
	]
}, hf = {
	prefix: "fas",
	iconName: "font",
	icon: [
		448,
		512,
		[],
		"f031",
		"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"
	]
}, gf = {
	prefix: "fas",
	iconName: "chevron-down",
	icon: [
		512,
		512,
		[],
		"f078",
		"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
	]
}, _f = {
	prefix: "fas",
	iconName: "arrow-up",
	icon: [
		384,
		512,
		[8593],
		"f062",
		"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
	]
}, vf = {
	prefix: "fas",
	iconName: "plus",
	icon: [
		448,
		512,
		[
			10133,
			61543,
			"add"
		],
		"2b",
		"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
	]
}, yf = {
	prefix: "fas",
	iconName: "expand",
	icon: [
		448,
		512,
		[],
		"f065",
		"M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"
	]
}, bf = {
	prefix: "fas",
	iconName: "xmark",
	icon: [
		384,
		512,
		[
			128473,
			10005,
			10006,
			10060,
			215,
			"close",
			"multiply",
			"remove",
			"times"
		],
		"f00d",
		"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
	]
}, xf = {
	prefix: "fas",
	iconName: "hashtag",
	icon: [
		448,
		512,
		[62098],
		"23",
		"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"
	]
}, Sf = {
	prefix: "fas",
	iconName: "up-down",
	icon: [
		256,
		512,
		[
			8597,
			11021,
			"arrows-alt-v"
		],
		"f338",
		"M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160l56 0 0 192-56 0c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4l-56 0 0-192 56 0c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112z"
	]
}, Cf = {
	prefix: "fas",
	iconName: "check",
	icon: [
		448,
		512,
		[10003, 10004],
		"f00c",
		"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
	]
}, wf = {
	prefix: "fas",
	iconName: "triangle-exclamation",
	icon: [
		512,
		512,
		[
			9888,
			"exclamation-triangle",
			"warning"
		],
		"f071",
		"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
	]
}, Tf = {
	prefix: "fas",
	iconName: "database",
	icon: [
		448,
		512,
		[],
		"f1c0",
		"M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"
	]
}, Ef = {
	prefix: "fas",
	iconName: "share",
	icon: [
		512,
		512,
		["mail-forward"],
		"f064",
		"M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
	]
}, Df = {
	prefix: "fas",
	iconName: "circle-xmark",
	icon: [
		512,
		512,
		[
			61532,
			"times-circle",
			"xmark-circle"
		],
		"f057",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
	]
}, Of = {
	prefix: "fas",
	iconName: "brush",
	icon: [
		384,
		512,
		[],
		"f55d",
		"M162.4 6c-1.5-3.6-5-6-8.9-6l-19 0c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6L48 0C21.5 0 0 21.5 0 48L0 224l0 22.4L0 256l9.6 0 364.8 0 9.6 0 0-9.6 0-22.4 0-176c0-26.5-21.5-48-48-48L230.5 0c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288l0 32c0 35.3 28.7 64 64 64l64 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 64 0c35.3 0 64-28.7 64-64l0-32L0 288zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
	]
};
//#endregion
//#region ../../node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function kf(e, t, n) {
	return (t = Mf(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Af(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function H(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Af(Object(n), !0).forEach(function(t) {
			kf(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Af(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function jf(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Mf(e) {
	var t = jf(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
var Nf = () => {}, Pf = {}, Ff = {}, If = null, Lf = {
	mark: Nf,
	measure: Nf
};
try {
	typeof window < "u" && (Pf = window), typeof document < "u" && (Ff = document), typeof MutationObserver < "u" && (If = MutationObserver), typeof performance < "u" && (Lf = performance);
} catch {}
var { userAgent: Rf = "" } = Pf.navigator || {}, zf = Pf, U = Ff, Bf = If, Vf = Lf;
zf.document;
var Hf = !!U.documentElement && !!U.head && typeof U.addEventListener == "function" && typeof U.createElement == "function", Uf = ~Rf.indexOf("MSIE") || ~Rf.indexOf("Trident/"), Wf = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Gf = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Kf = {
	classic: {
		fa: "solid",
		fas: "solid",
		"fa-solid": "solid",
		far: "regular",
		"fa-regular": "regular",
		fal: "light",
		"fa-light": "light",
		fat: "thin",
		"fa-thin": "thin",
		fab: "brands",
		"fa-brands": "brands"
	},
	duotone: {
		fa: "solid",
		fad: "solid",
		"fa-solid": "solid",
		"fa-duotone": "solid",
		fadr: "regular",
		"fa-regular": "regular",
		fadl: "light",
		"fa-light": "light",
		fadt: "thin",
		"fa-thin": "thin"
	},
	sharp: {
		fa: "solid",
		fass: "solid",
		"fa-solid": "solid",
		fasr: "regular",
		"fa-regular": "regular",
		fasl: "light",
		"fa-light": "light",
		fast: "thin",
		"fa-thin": "thin"
	},
	"sharp-duotone": {
		fa: "solid",
		fasds: "solid",
		"fa-solid": "solid",
		fasdr: "regular",
		"fa-regular": "regular",
		fasdl: "light",
		"fa-light": "light",
		fasdt: "thin",
		"fa-thin": "thin"
	}
}, qf = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, Jf = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], W = "classic", Yf = "duotone", Xf = [
	W,
	Yf,
	"sharp",
	"sharp-duotone"
], Zf = {
	classic: {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	duotone: {
		900: "fad",
		400: "fadr",
		300: "fadl",
		100: "fadt"
	},
	sharp: {
		900: "fass",
		400: "fasr",
		300: "fasl",
		100: "fast"
	},
	"sharp-duotone": {
		900: "fasds",
		400: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
}, Qf = {
	"Font Awesome 6 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 6 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	"Font Awesome 6 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 6 Duotone": {
		900: "fad",
		400: "fadr",
		normal: "fadr",
		300: "fadl",
		100: "fadt"
	},
	"Font Awesome 6 Sharp": {
		900: "fass",
		400: "fasr",
		normal: "fasr",
		300: "fasl",
		100: "fast"
	},
	"Font Awesome 6 Sharp Duotone": {
		900: "fasds",
		400: "fasdr",
		normal: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
}, $f = /* @__PURE__ */ new Map([
	["classic", {
		defaultShortPrefixId: "fas",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin",
			"brands"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp", {
		defaultShortPrefixId: "fass",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["duotone", {
		defaultShortPrefixId: "fad",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp-duotone", {
		defaultShortPrefixId: "fasds",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}]
]), ep = {
	classic: {
		solid: "fas",
		regular: "far",
		light: "fal",
		thin: "fat",
		brands: "fab"
	},
	duotone: {
		solid: "fad",
		regular: "fadr",
		light: "fadl",
		thin: "fadt"
	},
	sharp: {
		solid: "fass",
		regular: "fasr",
		light: "fasl",
		thin: "fast"
	},
	"sharp-duotone": {
		solid: "fasds",
		regular: "fasdr",
		light: "fasdl",
		thin: "fasdt"
	}
}, tp = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], np = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, rp = ["kit"], ip = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, ap = ["fak", "fakd"], op = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, sp = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, cp = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, lp = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], up = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], dp = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, fp = {
	classic: {
		"fa-brands": "fab",
		"fa-duotone": "fad",
		"fa-light": "fal",
		"fa-regular": "far",
		"fa-solid": "fas",
		"fa-thin": "fat"
	},
	duotone: {
		"fa-regular": "fadr",
		"fa-light": "fadl",
		"fa-thin": "fadt"
	},
	sharp: {
		"fa-solid": "fass",
		"fa-regular": "fasr",
		"fa-light": "fasl",
		"fa-thin": "fast"
	},
	"sharp-duotone": {
		"fa-solid": "fasds",
		"fa-regular": "fasdr",
		"fa-light": "fasdl",
		"fa-thin": "fasdt"
	}
}, pp = {
	classic: [
		"fas",
		"far",
		"fal",
		"fat",
		"fad"
	],
	duotone: [
		"fadr",
		"fadl",
		"fadt"
	],
	sharp: [
		"fass",
		"fasr",
		"fasl",
		"fast"
	],
	"sharp-duotone": [
		"fasds",
		"fasdr",
		"fasdl",
		"fasdt"
	]
}, mp = {
	classic: {
		fab: "fa-brands",
		fad: "fa-duotone",
		fal: "fa-light",
		far: "fa-regular",
		fas: "fa-solid",
		fat: "fa-thin"
	},
	duotone: {
		fadr: "fa-regular",
		fadl: "fa-light",
		fadt: "fa-thin"
	},
	sharp: {
		fass: "fa-solid",
		fasr: "fa-regular",
		fasl: "fa-light",
		fast: "fa-thin"
	},
	"sharp-duotone": {
		fasds: "fa-solid",
		fasdr: "fa-regular",
		fasdl: "fa-light",
		fasdt: "fa-thin"
	}
}, hp = [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands"
], gp = [
	"fa",
	"fas",
	"far",
	"fal",
	"fat",
	"fad",
	"fadr",
	"fadl",
	"fadt",
	"fab",
	"fass",
	"fasr",
	"fasl",
	"fast",
	"fasds",
	"fasdr",
	"fasdl",
	"fasdt",
	...lp,
	...hp
], _p = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands"
], vp = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
], yp = vp.concat([
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20
]), bp = [
	...Object.keys(pp),
	..._p,
	"2xs",
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"beat",
	"border",
	"fade",
	"beat-fade",
	"bounce",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"fw",
	"inverse",
	"layers-counter",
	"layers-text",
	"layers",
	"li",
	"pull-left",
	"pull-right",
	"pulse",
	"rotate-180",
	"rotate-270",
	"rotate-90",
	"rotate-by",
	"shake",
	"spin-pulse",
	"spin-reverse",
	"spin",
	"stack-1x",
	"stack-2x",
	"stack",
	"ul",
	cp.GROUP,
	cp.SWAP_OPACITY,
	cp.PRIMARY,
	cp.SECONDARY
].concat(vp.map((e) => `${e}x`), yp.map((e) => `w-${e}`)), xp = {
	"Font Awesome 5 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 5 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal"
	},
	"Font Awesome 5 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 5 Duotone": { 900: "fad" }
}, Sp = "___FONT_AWESOME___", Cp = 16, wp = "fa", Tp = "svg-inline--fa", Ep = "data-fa-i2svg", Dp = "data-fa-pseudo-element", Op = "data-fa-pseudo-element-pending", kp = "data-prefix", Ap = "data-icon", jp = "fontawesome-i2svg", Mp = "async", Np = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], Pp = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})();
function Fp(e) {
	return new Proxy(e, { get(e, t) {
		return t in e ? e[t] : e[W];
	} });
}
var Ip = H({}, Kf);
Ip[W] = H(H(H(H({}, { "fa-duotone": "duotone" }), Kf[W]), np.kit), np["kit-duotone"]);
var Lp = Fp(Ip), Rp = H({}, ep);
Rp[W] = H(H(H(H({}, { duotone: "fad" }), Rp[W]), sp.kit), sp["kit-duotone"]);
var zp = Fp(Rp), Bp = H({}, mp);
Bp[W] = H(H({}, Bp[W]), op.kit);
var Vp = Fp(Bp), Hp = H({}, fp);
Hp[W] = H(H({}, Hp[W]), ip.kit), Fp(Hp);
var Up = Wf, Wp = "fa-layers-text", Gp = Gf;
Fp(H({}, Zf));
var Kp = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], qp = qf, Jp = [...rp, ...bp], Yp = zf.FontAwesomeConfig || {};
function Xp(e) {
	var t = U.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function Zp(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
U && typeof U.querySelector == "function" && [
	["data-family-prefix", "familyPrefix"],
	["data-css-prefix", "cssPrefix"],
	["data-family-default", "familyDefault"],
	["data-style-default", "styleDefault"],
	["data-replacement-class", "replacementClass"],
	["data-auto-replace-svg", "autoReplaceSvg"],
	["data-auto-add-css", "autoAddCss"],
	["data-auto-a11y", "autoA11y"],
	["data-search-pseudo-elements", "searchPseudoElements"],
	["data-observe-mutations", "observeMutations"],
	["data-mutate-approach", "mutateApproach"],
	["data-keep-original-source", "keepOriginalSource"],
	["data-measure-performance", "measurePerformance"],
	["data-show-missing-icons", "showMissingIcons"]
].forEach((e) => {
	let [t, n] = e, r = Zp(Xp(t));
	r != null && (Yp[n] = r);
});
var Qp = {
	styleDefault: "solid",
	familyDefault: W,
	cssPrefix: wp,
	replacementClass: Tp,
	autoReplaceSvg: !0,
	autoAddCss: !0,
	autoA11y: !0,
	searchPseudoElements: !1,
	observeMutations: !0,
	mutateApproach: "async",
	keepOriginalSource: !0,
	measurePerformance: !1,
	showMissingIcons: !0
};
Yp.familyPrefix && (Yp.cssPrefix = Yp.familyPrefix);
var $p = H(H({}, Qp), Yp);
$p.autoReplaceSvg || ($p.observeMutations = !1);
var G = {};
Object.keys(Qp).forEach((e) => {
	Object.defineProperty(G, e, {
		enumerable: !0,
		set: function(t) {
			$p[e] = t, em.forEach((e) => e(G));
		},
		get: function() {
			return $p[e];
		}
	});
}), Object.defineProperty(G, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		$p.cssPrefix = e, em.forEach((e) => e(G));
	},
	get: function() {
		return $p.cssPrefix;
	}
}), zf.FontAwesomeConfig = G;
var em = [];
function tm(e) {
	return em.push(e), () => {
		em.splice(em.indexOf(e), 1);
	};
}
var nm = Cp, rm = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function im(e) {
	if (!e || !Hf) return;
	let t = U.createElement("style");
	t.setAttribute("type", "text/css"), t.innerHTML = e;
	let n = U.head.childNodes, r = null;
	for (let e = n.length - 1; e > -1; e--) {
		let t = n[e], i = (t.tagName || "").toUpperCase();
		["STYLE", "LINK"].indexOf(i) > -1 && (r = t);
	}
	return U.head.insertBefore(t, r), e;
}
var am = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function om() {
	let e = 12, t = "";
	for (; e-- > 0;) t += am[Math.random() * 62 | 0];
	return t;
}
function sm(e) {
	let t = [];
	for (let n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function cm(e) {
	return e.classList ? sm(e.classList) : (e.getAttribute("class") || "").split(" ").filter((e) => e);
}
function lm(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function um(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}="${lm(e[n])}" `, "").trim();
}
function dm(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}: ${e[n].trim()};`, "");
}
function fm(e) {
	return e.size !== rm.size || e.x !== rm.x || e.y !== rm.y || e.rotate !== rm.rotate || e.flipX || e.flipY;
}
function pm(e) {
	let { transform: t, containerWidth: n, iconWidth: r } = e;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function mm(e) {
	let { transform: t, width: n = Cp, height: r = Cp, startCentered: i = !1 } = e, a = "";
	return i && Uf ? a += `translate(${t.x / nm - n / 2}em, ${t.y / nm - r / 2}em) ` : i ? a += `translate(calc(-50% + ${t.x / nm}em), calc(-50% + ${t.y / nm}em)) ` : a += `translate(${t.x / nm}em, ${t.y / nm}em) `, a += `scale(${t.size / nm * (t.flipX ? -1 : 1)}, ${t.size / nm * (t.flipY ? -1 : 1)}) `, a += `rotate(${t.rotate}deg) `, a;
}
var hm = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function gm() {
	let e = wp, t = Tp, n = G.cssPrefix, r = G.replacementClass, i = hm;
	if (n !== e || r !== t) {
		let a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var _m = !1;
function vm() {
	G.autoAddCss && !_m && (im(gm()), _m = !0);
}
var ym = {
	mixout() {
		return { dom: {
			css: gm,
			insertCss: vm
		} };
	},
	hooks() {
		return {
			beforeDOMElementCreation() {
				vm();
			},
			beforeI2svg() {
				vm();
			}
		};
	}
}, bm = zf || {};
bm[Sp] || (bm[Sp] = {}), bm[Sp].styles || (bm[Sp].styles = {}), bm[Sp].hooks || (bm[Sp].hooks = {}), bm[Sp].shims || (bm[Sp].shims = []);
var xm = bm[Sp], Sm = [], Cm = function() {
	U.removeEventListener("DOMContentLoaded", Cm), wm = 1, Sm.map((e) => e());
}, wm = !1;
Hf && (wm = (U.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(U.readyState), wm || U.addEventListener("DOMContentLoaded", Cm));
function Tm(e) {
	Hf && (wm ? setTimeout(e, 0) : Sm.push(e));
}
function Em(e) {
	let { tag: t, attributes: n = {}, children: r = [] } = e;
	return typeof e == "string" ? lm(e) : `<${t} ${um(n)}>${r.map(Em).join("")}</${t}>`;
}
function Dm(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var Om = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, km = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : Om(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function Am(e) {
	let t = [], n = 0, r = e.length;
	for (; n < r;) {
		let i = e.charCodeAt(n++);
		if (i >= 55296 && i <= 56319 && n < r) {
			let r = e.charCodeAt(n++);
			(r & 64512) == 56320 ? t.push(((i & 1023) << 10) + (r & 1023) + 65536) : (t.push(i), n--);
		} else t.push(i);
	}
	return t;
}
function jm(e) {
	let t = Am(e);
	return t.length === 1 ? t[0].toString(16) : null;
}
function Mm(e, t) {
	let n = e.length, r = e.charCodeAt(t), i;
	return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Nm(e) {
	return Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function Pm(e, t) {
	let { skipHooks: n = !1 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Nm(t);
	typeof xm.hooks.addPack == "function" && !n ? xm.hooks.addPack(e, Nm(t)) : xm.styles[e] = H(H({}, xm.styles[e] || {}), r), e === "fas" && Pm("fa", t);
}
var { styles: Fm, shims: Im } = xm, Lm = Object.keys(Vp), Rm = Lm.reduce((e, t) => (e[t] = Object.keys(Vp[t]), e), {}), zm = null, Bm = {}, Vm = {}, Hm = {}, Um = {}, Wm = {};
function Gm(e) {
	return ~Jp.indexOf(e);
}
function Km(e, t) {
	let n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !Gm(i) ? i : null;
}
var qm = () => {
	let e = (e) => km(Fm, (t, n, r) => (t[r] = km(n, e, {}), t), {});
	Bm = e((e, t, n) => (t[3] && (e[t[3]] = n), t[2] && t[2].filter((e) => typeof e == "number").forEach((t) => {
		e[t.toString(16)] = n;
	}), e)), Vm = e((e, t, n) => (e[n] = n, t[2] && t[2].filter((e) => typeof e == "string").forEach((t) => {
		e[t] = n;
	}), e)), Wm = e((e, t, n) => {
		let r = t[2];
		return e[n] = n, r.forEach((t) => {
			e[t] = n;
		}), e;
	});
	let t = "far" in Fm || G.autoFetchSvg, n = km(Im, (e, n) => {
		let r = n[0], i = n[1], a = n[2];
		return i === "far" && !t && (i = "fas"), typeof r == "string" && (e.names[r] = {
			prefix: i,
			iconName: a
		}), typeof r == "number" && (e.unicodes[r.toString(16)] = {
			prefix: i,
			iconName: a
		}), e;
	}, {
		names: {},
		unicodes: {}
	});
	Hm = n.names, Um = n.unicodes, zm = nh(G.styleDefault, { family: G.familyDefault });
};
tm((e) => {
	zm = nh(e.styleDefault, { family: G.familyDefault });
}), qm();
function Jm(e, t) {
	return (Bm[e] || {})[t];
}
function Ym(e, t) {
	return (Vm[e] || {})[t];
}
function Xm(e, t) {
	return (Wm[e] || {})[t];
}
function Zm(e) {
	return Hm[e] || {
		prefix: null,
		iconName: null
	};
}
function Qm(e) {
	let t = Um[e], n = Jm("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function $m() {
	return zm;
}
var eh = () => ({
	prefix: null,
	iconName: null,
	rest: []
});
function th(e) {
	let t = W, n = Lm.reduce((e, t) => (e[t] = `${G.cssPrefix}-${t}`, e), {});
	return Xf.forEach((r) => {
		(e.includes(n[r]) || e.some((e) => Rm[r].includes(e))) && (t = r);
	}), t;
}
function nh(e) {
	let { family: t = W } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Lp[t][e];
	if (t === Yf && !e) return "fad";
	let r = zp[t][e] || zp[t][n], i = e in xm.styles ? e : null;
	return r || i || null;
}
function rh(e) {
	let t = [], n = null;
	return e.forEach((e) => {
		let r = Km(G.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function ih(e) {
	return e.sort().filter((e, t, n) => n.indexOf(e) === t);
}
function ah(e) {
	let { skipLookups: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = null, r = gp.concat(up), i = ih(e.filter((e) => r.includes(e))), a = ih(e.filter((e) => !gp.includes(e))), [o = null] = i.filter((e) => (n = e, !Jf.includes(e))), s = th(i), c = H(H({}, rh(a)), {}, { prefix: nh(o, { family: s }) });
	return H(H(H({}, c), lh({
		values: e,
		family: s,
		styles: Fm,
		config: G,
		canonical: c,
		givenPrefix: n
	})), oh(t, n, c));
}
function oh(e, t, n) {
	let { prefix: r, iconName: i } = n;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	let a = t === "fa" ? Zm(i) : {}, o = Xm(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !Fm.far && Fm.fas && !G.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var sh = Xf.filter((e) => e !== W || e !== Yf), ch = Object.keys(mp).filter((e) => e !== W).map((e) => Object.keys(mp[e])).flat();
function lh(e) {
	let { values: t, family: n, canonical: r, givenPrefix: i = "", styles: a = {}, config: o = {} } = e, s = n === Yf, c = t.includes("fa-duotone") || t.includes("fad"), l = o.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && sh.includes(n) && (Object.keys(a).find((e) => ch.includes(e)) || o.autoFetchSvg) && (r.prefix = $f.get(n).defaultShortPrefixId, r.iconName = Xm(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || i === "fa") && (r.prefix = $m() || "fas"), r;
}
var uh = class {
	constructor() {
		this.definitions = {};
	}
	add() {
		let e = [...arguments].reduce(this._pullDefinitions, {});
		Object.keys(e).forEach((t) => {
			this.definitions[t] = H(H({}, this.definitions[t] || {}), e[t]), Pm(t, e[t]);
			let n = Vp[W][t];
			n && Pm(n, e[t]), qm();
		});
	}
	reset() {
		this.definitions = {};
	}
	_pullDefinitions(e, t) {
		let n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
		return Object.keys(n).map((t) => {
			let { prefix: r, iconName: i, icon: a } = n[t], o = a[2];
			e[r] || (e[r] = {}), o.length > 0 && o.forEach((t) => {
				typeof t == "string" && (e[r][t] = a);
			}), e[r][i] = a;
		}), e;
	}
}, dh = [], fh = {}, ph = {}, mh = Object.keys(ph);
function hh(e, t) {
	let { mixoutsTo: n } = t;
	return dh = e, fh = {}, Object.keys(ph).forEach((e) => {
		mh.indexOf(e) === -1 && delete ph[e];
	}), dh.forEach((e) => {
		let t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach((e) => {
			typeof t[e] == "function" && (n[e] = t[e]), typeof t[e] == "object" && Object.keys(t[e]).forEach((r) => {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			let t = e.hooks();
			Object.keys(t).forEach((e) => {
				fh[e] || (fh[e] = []), fh[e].push(t[e]);
			});
		}
		e.provides && e.provides(ph);
	}), n;
}
function gh(e, t) {
	var n = [...arguments].slice(2);
	return (fh[e] || []).forEach((e) => {
		t = e.apply(null, [t, ...n]);
	}), t;
}
function _h(e) {
	var t = [...arguments].slice(1);
	(fh[e] || []).forEach((e) => {
		e.apply(null, t);
	});
}
function vh() {
	let e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return ph[e] ? ph[e].apply(null, t) : void 0;
}
function yh(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	let { iconName: t } = e, n = e.prefix || $m();
	if (t) return t = Xm(n, t) || t, Dm(bh.definitions, n, t) || Dm(xm.styles, n, t);
}
var bh = new uh(), xh = {
	noAuto: () => {
		G.autoReplaceSvg = !1, G.observeMutations = !1, _h("noAuto");
	},
	config: G,
	dom: {
		i2svg: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return Hf ? (_h("beforeI2svg", e), vh("pseudoElements2svg", e), vh("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: t } = e;
			G.autoReplaceSvg === !1 && (G.autoReplaceSvg = !0), G.observeMutations = !0, Tm(() => {
				Sh({ autoReplaceSvgRoot: t }), _h("watch", e);
			});
		}
	},
	parse: { icon: (e) => {
		if (e === null) return null;
		if (typeof e == "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: Xm(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			let t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = nh(e[0]);
			return {
				prefix: n,
				iconName: Xm(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${G.cssPrefix}-`) > -1 || e.match(Up))) {
			let t = ah(e.split(" "), { skipLookups: !0 });
			return {
				prefix: t.prefix || $m(),
				iconName: Xm(t.prefix, t.iconName) || t.iconName
			};
		}
		if (typeof e == "string") {
			let t = $m();
			return {
				prefix: t,
				iconName: Xm(t, e) || e
			};
		}
	} },
	library: bh,
	findIconDefinition: yh,
	toHtml: Em
}, Sh = function() {
	let { autoReplaceSvgRoot: e = U } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	(Object.keys(xm.styles).length > 0 || G.autoFetchSvg) && Hf && G.autoReplaceSvg && xh.dom.i2svg({ node: e });
};
function Ch(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map((e) => Em(e));
	} }), Object.defineProperty(e, "node", { get: function() {
		if (!Hf) return;
		let t = U.createElement("div");
		return t.innerHTML = e.html, t.children;
	} }), e;
}
function wh(e) {
	let { children: t, main: n, mask: r, attributes: i, styles: a, transform: o } = e;
	if (fm(o) && n.found && !r.found) {
		let { width: e, height: t } = n, r = {
			x: e / t / 2,
			y: .5
		};
		i.style = dm(H(H({}, a), {}, { "transform-origin": `${r.x + o.x / 16}em ${r.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function Th(e) {
	let { prefix: t, iconName: n, children: r, attributes: i, symbol: a } = e, o = a === !0 ? `${t}-${G.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: H(H({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function Eh(e) {
	let { icons: { main: t, mask: n }, prefix: r, iconName: i, transform: a, symbol: o, title: s, maskId: c, titleId: l, extra: u, watchable: d = !1 } = e, { width: f, height: p } = n.found ? n : t, m = ap.includes(r), h = [G.replacementClass, i ? `${G.cssPrefix}-${i}` : ""].filter((e) => u.classes.indexOf(e) === -1).filter((e) => e !== "" || !!e).concat(u.classes).join(" "), g = {
		children: [],
		attributes: H(H({}, u.attributes), {}, {
			"data-prefix": r,
			"data-icon": i,
			class: h,
			role: u.attributes.role || "img",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${f} ${p}`
		})
	}, _ = m && !~u.classes.indexOf("fa-fw") ? { width: `${f / p * 16 * .0625}em` } : {};
	d && (g.attributes[Ep] = ""), s && (g.children.push({
		tag: "title",
		attributes: { id: g.attributes["aria-labelledby"] || `title-${l || om()}` },
		children: [s]
	}), delete g.attributes.title);
	let v = H(H({}, g), {}, {
		prefix: r,
		iconName: i,
		main: t,
		mask: n,
		maskId: c,
		transform: a,
		symbol: o,
		styles: H(H({}, _), u.styles)
	}), { children: y, attributes: b } = n.found && t.found ? vh("generateAbstractMask", v) || {
		children: [],
		attributes: {}
	} : vh("generateAbstractIcon", v) || {
		children: [],
		attributes: {}
	};
	return v.children = y, v.attributes = b, o ? Th(v) : wh(v);
}
function Dh(e) {
	let { content: t, width: n, height: r, transform: i, title: a, extra: o, watchable: s = !1 } = e, c = H(H(H({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(" ") });
	s && (c[Ep] = "");
	let l = H({}, o.styles);
	fm(i) && (l.transform = mm({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	let u = dm(l);
	u.length > 0 && (c.style = u);
	let d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), a && d.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [a]
	}), d;
}
function Oh(e) {
	let { content: t, title: n, extra: r } = e, i = H(H(H({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(" ") }), a = dm(r.styles);
	a.length > 0 && (i.style = a);
	let o = [];
	return o.push({
		tag: "span",
		attributes: i,
		children: [t]
	}), n && o.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [n]
	}), o;
}
var { styles: kh } = xm;
function Ah(e) {
	let t = e[0], n = e[1], [r] = e.slice(4), i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${G.cssPrefix}-${qp.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${G.cssPrefix}-${qp.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${G.cssPrefix}-${qp.PRIMARY}`,
				fill: "currentColor",
				d: r[1]
			}
		}]
	} : {
		tag: "path",
		attributes: {
			fill: "currentColor",
			d: r
		}
	}, {
		found: !0,
		width: t,
		height: n,
		icon: i
	};
}
var jh = {
	found: !1,
	width: 512,
	height: 512
};
function Mh(e, t) {
	!Pp && !G.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function Nh(e, t) {
	let n = t;
	return t === "fa" && G.styleDefault !== null && (t = $m()), new Promise((r, i) => {
		if (n === "fa") {
			let n = Zm(e) || {};
			e = n.iconName || e, t = n.prefix || t;
		}
		if (e && t && kh[t] && kh[t][e]) {
			let n = kh[t][e];
			return r(Ah(n));
		}
		Mh(e, t), r(H(H({}, jh), {}, { icon: G.showMissingIcons && e && vh("missingIconAbstract") || {} }));
	});
}
var Ph = () => {}, Fh = G.measurePerformance && Vf && Vf.mark && Vf.measure ? Vf : {
	mark: Ph,
	measure: Ph
}, Ih = "FA \"6.7.2\"", Lh = (e) => (Fh.mark(`${Ih} ${e} begins`), () => Rh(e)), Rh = (e) => {
	Fh.mark(`${Ih} ${e} ends`), Fh.measure(`${Ih} ${e}`, `${Ih} ${e} begins`, `${Ih} ${e} ends`);
}, zh = {
	begin: Lh,
	end: Rh
}, Bh = () => {};
function Vh(e) {
	return typeof (e.getAttribute ? e.getAttribute(Ep) : null) == "string";
}
function Hh(e) {
	let t = e.getAttribute ? e.getAttribute(kp) : null, n = e.getAttribute ? e.getAttribute(Ap) : null;
	return t && n;
}
function Uh(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(G.replacementClass);
}
function Wh() {
	return G.autoReplaceSvg === !0 ? Yh.replace : Yh[G.autoReplaceSvg] || Yh.replace;
}
function Gh(e) {
	return U.createElementNS("http://www.w3.org/2000/svg", e);
}
function Kh(e) {
	return U.createElement(e);
}
function qh(e) {
	let { ceFn: t = e.tag === "svg" ? Gh : Kh } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (typeof e == "string") return U.createTextNode(e);
	let n = t(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		n.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		n.appendChild(qh(e, { ceFn: t }));
	}), n;
}
function Jh(e) {
	let t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var Yh = {
	replace: function(e) {
		let t = e[0];
		if (t.parentNode) if (e[1].forEach((e) => {
			t.parentNode.insertBefore(qh(e), t);
		}), t.getAttribute(Ep) === null && G.keepOriginalSource) {
			let e = U.createComment(Jh(t));
			t.parentNode.replaceChild(e, t);
		} else t.remove();
	},
	nest: function(e) {
		let t = e[0], n = e[1];
		if (~cm(t).indexOf(G.replacementClass)) return Yh.replace(e);
		let r = RegExp(`${G.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			let e = n[0].attributes.class.split(" ").reduce((e, t) => (t === G.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e), {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = e.toSvg.join(" "), e.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", e.toNode.join(" "));
		}
		let i = n.map((e) => Em(e)).join("\n");
		t.setAttribute(Ep, ""), t.innerHTML = i;
	}
};
function Xh(e) {
	e();
}
function Zh(e, t) {
	let n = typeof t == "function" ? t : Bh;
	if (e.length === 0) n();
	else {
		let t = Xh;
		G.mutateApproach === Mp && (t = zf.requestAnimationFrame || Xh), t(() => {
			let t = Wh(), r = zh.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var Qh = !1;
function $h() {
	Qh = !0;
}
function eg() {
	Qh = !1;
}
var tg = null;
function ng(e) {
	if (!Bf || !G.observeMutations) return;
	let { treeCallback: t = Bh, nodeCallback: n = Bh, pseudoElementsCallback: r = Bh, observeMutationsRoot: i = U } = e;
	tg = new Bf((e) => {
		if (Qh) return;
		let i = $m();
		sm(e).forEach((e) => {
			if (e.type === "childList" && e.addedNodes.length > 0 && !Vh(e.addedNodes[0]) && (G.searchPseudoElements && r(e.target), t(e.target)), e.type === "attributes" && e.target.parentNode && G.searchPseudoElements && r(e.target.parentNode), e.type === "attributes" && Vh(e.target) && ~Kp.indexOf(e.attributeName)) if (e.attributeName === "class" && Hh(e.target)) {
				let { prefix: t, iconName: n } = ah(cm(e.target));
				e.target.setAttribute(kp, t || i), n && e.target.setAttribute(Ap, n);
			} else Uh(e.target) && n(e.target);
		});
	}), Hf && tg.observe(i, {
		childList: !0,
		attributes: !0,
		characterData: !0,
		subtree: !0
	});
}
function rg() {
	tg && tg.disconnect();
}
function ig(e) {
	let t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce((e, t) => {
		let n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function ag(e) {
	let t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = ah(cm(e));
	return i.prefix ||= $m(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = Ym(i.prefix, e.innerText) || Jm(i.prefix, jm(e.innerText))), !i.iconName && G.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i);
}
function og(e) {
	let t = sm(e.attributes).reduce((e, t) => (e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
	return G.autoA11y && (n ? t["aria-labelledby"] = `${G.replacementClass}-title-${r || om()}` : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function sg() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: rm,
		symbol: !1,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		extra: {
			classes: [],
			styles: {},
			attributes: {}
		}
	};
}
function cg(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, { iconName: n, prefix: r, rest: i } = ag(e), a = og(e), o = gh("parseNodeAttributes", {}, e), s = t.styleParser ? ig(e) : [];
	return H({
		iconName: n,
		title: e.getAttribute("title"),
		titleId: e.getAttribute("data-fa-title-id"),
		prefix: r,
		transform: rm,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: i,
			styles: s,
			attributes: a
		}
	}, o);
}
var { styles: lg } = xm;
function ug(e) {
	let t = G.autoReplaceSvg === "nest" ? cg(e, { styleParser: !1 }) : cg(e);
	return ~t.extra.classes.indexOf(Wp) ? vh("generateLayersText", e, t) : vh("generateSvgReplacementMutation", e, t);
}
function dg() {
	return [...tp, ...gp];
}
function fg(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!Hf) return Promise.resolve();
	let n = U.documentElement.classList, r = (e) => n.add(`${jp}-${e}`), i = (e) => n.remove(`${jp}-${e}`), a = G.autoFetchSvg ? dg() : Jf.concat(Object.keys(lg));
	a.includes("fa") || a.push("fa");
	let o = [`.${Wp}:not([${Ep}])`].concat(a.map((e) => `.${e}:not([${Ep}])`)).join(", ");
	if (o.length === 0) return Promise.resolve();
	let s = [];
	try {
		s = sm(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	let c = zh.begin("onTree"), l = s.reduce((e, t) => {
		try {
			let n = ug(t);
			n && e.push(n);
		} catch (e) {
			Pp || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise((e, n) => {
		Promise.all(l).then((n) => {
			Zh(n, () => {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch((e) => {
			c(), n(e);
		});
	});
}
function pg(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	ug(e).then((e) => {
		e && Zh([e], t);
	});
}
function mg(e) {
	return function(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : yh(t || {}), { mask: i } = n;
		return i &&= (i || {}).icon ? i : yh(i || {}), e(r, H(H({}, n), {}, { mask: i }));
	};
}
var hg = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = rm, symbol: r = !1, mask: i = null, maskId: a = null, title: o = null, titleId: s = null, classes: c = [], attributes: l = {}, styles: u = {} } = t;
	if (!e) return;
	let { prefix: d, iconName: f, icon: p } = e;
	return Ch(H({ type: "icon" }, e), () => (_h("beforeDOMElementCreation", {
		iconDefinition: e,
		params: t
	}), G.autoA11y && (o ? l["aria-labelledby"] = `${G.replacementClass}-title-${s || om()}` : (l["aria-hidden"] = "true", l.focusable = "false")), Eh({
		icons: {
			main: Ah(p),
			mask: i ? Ah(i.icon) : {
				found: !1,
				width: null,
				height: null,
				icon: {}
			}
		},
		prefix: d,
		iconName: f,
		transform: H(H({}, rm), n),
		symbol: r,
		title: o,
		maskId: a,
		titleId: s,
		extra: {
			attributes: l,
			styles: u,
			classes: c
		}
	})));
}, gg = {
	mixout() {
		return { icon: mg(hg) };
	},
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.treeCallback = fg, e.nodeCallback = pg, e;
		} };
	},
	provides(e) {
		e.i2svg = function(e) {
			let { node: t = U, callback: n = () => {} } = e;
			return fg(t, n);
		}, e.generateSvgReplacementMutation = function(e, t) {
			let { iconName: n, title: r, titleId: i, prefix: a, transform: o, symbol: s, mask: c, maskId: l, extra: u } = t;
			return new Promise((t, d) => {
				Promise.all([Nh(n, a), c.iconName ? Nh(c.iconName, c.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then((c) => {
					let [d, f] = c;
					t([e, Eh({
						icons: {
							main: d,
							mask: f
						},
						prefix: a,
						iconName: n,
						transform: o,
						symbol: s,
						maskId: l,
						title: r,
						titleId: i,
						extra: u,
						watchable: !0
					})]);
				}).catch(d);
			});
		}, e.generateAbstractIcon = function(e) {
			let { children: t, attributes: n, main: r, transform: i, styles: a } = e, o = dm(a);
			o.length > 0 && (n.style = o);
			let s;
			return fm(i) && (s = vh("generateAbstractTransformGrouping", {
				main: r,
				transform: i,
				containerWidth: r.width,
				iconWidth: r.width
			})), t.push(s || r.icon), {
				children: t,
				attributes: n
			};
		};
	}
}, _g = { mixout() {
	return { layer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { classes: n = [] } = t;
		return Ch({ type: "layer" }, () => {
			_h("beforeDOMElementCreation", {
				assembler: e,
				params: t
			});
			let r = [];
			return e((e) => {
				Array.isArray(e) ? e.map((e) => {
					r = r.concat(e.abstract);
				}) : r = r.concat(e.abstract);
			}), [{
				tag: "span",
				attributes: { class: [`${G.cssPrefix}-layers`, ...n].join(" ") },
				children: r
			}];
		});
	} };
} }, vg = { mixout() {
	return { counter(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { title: n = null, classes: r = [], attributes: i = {}, styles: a = {} } = t;
		return Ch({
			type: "counter",
			content: e
		}, () => (_h("beforeDOMElementCreation", {
			content: e,
			params: t
		}), Oh({
			content: e.toString(),
			title: n,
			extra: {
				attributes: i,
				styles: a,
				classes: [`${G.cssPrefix}-layers-counter`, ...r]
			}
		})));
	} };
} }, yg = {
	mixout() {
		return { text(e) {
			let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = rm, title: r = null, classes: i = [], attributes: a = {}, styles: o = {} } = t;
			return Ch({
				type: "text",
				content: e
			}, () => (_h("beforeDOMElementCreation", {
				content: e,
				params: t
			}), Dh({
				content: e,
				transform: H(H({}, rm), n),
				title: r,
				extra: {
					attributes: a,
					styles: o,
					classes: [`${G.cssPrefix}-layers-text`, ...i]
				}
			})));
		} };
	},
	provides(e) {
		e.generateLayersText = function(e, t) {
			let { title: n, transform: r, extra: i } = t, a = null, o = null;
			if (Uf) {
				let t = parseInt(getComputedStyle(e).fontSize, 10), n = e.getBoundingClientRect();
				a = n.width / t, o = n.height / t;
			}
			return G.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, Dh({
				content: e.innerHTML,
				width: a,
				height: o,
				transform: r,
				title: n,
				extra: i,
				watchable: !0
			})]);
		};
	}
}, bg = /* @__PURE__ */ RegExp("\"", "ug"), xg = [1105920, 1112319], Sg = H(H(H(H({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), Qf), xp), dp), Cg = Object.keys(Sg).reduce((e, t) => (e[t.toLowerCase()] = Sg[t], e), {}), wg = Object.keys(Cg).reduce((e, t) => {
	let n = Cg[t];
	return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Tg(e) {
	let t = e.replace(bg, ""), n = Mm(t, 0), r = n >= xg[0] && n <= xg[1], i = t.length === 2 ? t[0] === t[1] : !1;
	return {
		value: jm(i ? t[0] : t),
		isSecondary: r || i
	};
}
function Eg(e, t) {
	let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (Cg[n] || {})[i] || wg[n];
}
function Dg(e, t) {
	let n = `${Op}${t.replace(":", "-")}`;
	return new Promise((r, i) => {
		if (e.getAttribute(n) !== null) return r();
		let a = sm(e.children).filter((e) => e.getAttribute(Dp) === t)[0], o = zf.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match(Gp), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			let u = o.getPropertyValue("content"), d = Eg(s, l), { value: f, isSecondary: p } = Tg(u), m = c[0].startsWith("FontAwesome"), h = Jm(d, f), g = h;
			if (m) {
				let e = Qm(f);
				e.iconName && e.prefix && (h = e.iconName, d = e.prefix);
			}
			if (h && !p && (!a || a.getAttribute(kp) !== d || a.getAttribute(Ap) !== g)) {
				e.setAttribute(n, g), a && e.removeChild(a);
				let o = sg(), { extra: s } = o;
				s.attributes[Dp] = t, Nh(h, d).then((i) => {
					let a = Eh(H(H({}, o), {}, {
						icons: {
							main: i,
							mask: eh()
						},
						prefix: d,
						iconName: g,
						extra: s,
						watchable: !0
					})), c = U.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(c, e.firstChild) : e.appendChild(c), c.outerHTML = a.map((e) => Em(e)).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function Og(e) {
	return Promise.all([Dg(e, "::before"), Dg(e, "::after")]);
}
function kg(e) {
	return e.parentNode !== document.head && !~Np.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Dp) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ag(e) {
	if (Hf) return new Promise((t, n) => {
		let r = sm(e.querySelectorAll("*")).filter(kg).map(Og), i = zh.begin("searchPseudoElements");
		$h(), Promise.all(r).then(() => {
			i(), eg(), t();
		}).catch(() => {
			i(), eg(), n();
		});
	});
}
var jg = {
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.pseudoElementsCallback = Ag, e;
		} };
	},
	provides(e) {
		e.pseudoElements2svg = function(e) {
			let { node: t = U } = e;
			G.searchPseudoElements && Ag(t);
		};
	}
}, Mg = !1, Ng = {
	mixout() {
		return { dom: { unwatch() {
			$h(), Mg = !0;
		} } };
	},
	hooks() {
		return {
			bootstrap() {
				ng(gh("mutationObserverCallbacks", {}));
			},
			noAuto() {
				rg();
			},
			watch(e) {
				let { observeMutationsRoot: t } = e;
				Mg ? eg() : ng(gh("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, Pg = (e) => e.toLowerCase().split(" ").reduce((e, t) => {
	let n = t.toLowerCase().split("-"), r = n[0], i = n.slice(1).join("-");
	if (r && i === "h") return e.flipX = !0, e;
	if (r && i === "v") return e.flipY = !0, e;
	if (i = parseFloat(i), isNaN(i)) return e;
	switch (r) {
		case "grow":
			e.size += i;
			break;
		case "shrink":
			e.size -= i;
			break;
		case "left":
			e.x -= i;
			break;
		case "right":
			e.x += i;
			break;
		case "up":
			e.y -= i;
			break;
		case "down":
			e.y += i;
			break;
		case "rotate":
			e.rotate += i;
			break;
	}
	return e;
}, {
	size: 16,
	x: 0,
	y: 0,
	flipX: !1,
	flipY: !1,
	rotate: 0
}), Fg = {
	mixout() {
		return { parse: { transform: (e) => Pg(e) } };
	},
	hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-transform");
			return n && (e.transform = Pg(n)), e;
		} };
	},
	provides(e) {
		e.generateAbstractTransformGrouping = function(e) {
			let { main: t, transform: n, containerWidth: r, iconWidth: i } = e, a = {
				outer: { transform: `translate(${r / 2} 256)` },
				inner: { transform: `${`translate(${n.x * 32}, ${n.y * 32}) `} ${`scale(${n.size / 16 * (n.flipX ? -1 : 1)}, ${n.size / 16 * (n.flipY ? -1 : 1)}) `} ${`rotate(${n.rotate} 0 0)`}` },
				path: { transform: `translate(${i / 2 * -1} -256)` }
			};
			return {
				tag: "g",
				attributes: H({}, a.outer),
				children: [{
					tag: "g",
					attributes: H({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: H(H({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, Ig = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function Lg(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Rg(e) {
	return e.tag === "g" ? e.children : [e];
}
hh([
	ym,
	gg,
	_g,
	vg,
	yg,
	jg,
	Ng,
	Fg,
	{
		hooks() {
			return { parseNodeAttributes(e, t) {
				let n = t.getAttribute("data-fa-mask"), r = n ? ah(n.split(" ").map((e) => e.trim())) : eh();
				return r.prefix ||= $m(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides(e) {
			e.generateAbstractMask = function(e) {
				let { children: t, attributes: n, main: r, mask: i, maskId: a, transform: o } = e, { width: s, icon: c } = r, { width: l, icon: u } = i, d = pm({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: H(H({}, Ig), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(Lg) } : {}, m = {
					tag: "g",
					attributes: H({}, d.inner),
					children: [Lg(H({
						tag: c.tag,
						attributes: H(H({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: H({}, d.outer),
					children: [m]
				}, g = `mask-${a || om()}`, _ = `clip-${a || om()}`, v = {
					tag: "mask",
					attributes: H(H({}, Ig), {}, {
						id: g,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse"
					}),
					children: [f, h]
				}, y = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: { id: _ },
						children: Rg(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: H({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, Ig)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides(e) {
		let t = !1;
		zf.matchMedia && (t = zf.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			let e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: H(H({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			let i = H(H({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: H(H({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: H(H({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: H(H({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: H(H({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: H(H({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: H(H({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: H(H({}, i), {}, { values: "0;0;1;1;0;0;" })
				}]
			}), {
				tag: "g",
				attributes: { class: "missing" },
				children: e
			};
		};
	} },
	{ hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-symbol");
			return e.symbol = n === null ? !1 : n === "" ? !0 : n, e;
		} };
	} }
], { mixoutsTo: xh }), xh.noAuto, xh.config, xh.library;
var zg = xh.dom;
xh.parse, xh.findIconDefinition, xh.toHtml;
var K = xh.icon;
xh.layer, xh.text, xh.counter;
//#endregion
//#region ../app/src/components/generic/componentStyles.js
var Bg = Pe(zg.css()), Vg = o`
    :host {
        --basic-spacing: var(--gs-basic-spacing, 10px);
        --form-control-color: #212529;
        --form-control-border-color: #ced4da;
        --form-control-border: 1px solid var(--form-control-border-color);
        --form-control-border-radius: 0.25em;
    }

    .btn {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.2em;

        &.reverse {
            flex-direction: row-reverse;
        }

        padding: 4px 12px;
        margin: 0;
        font-size: 1em;
        line-height: 20px;
        color: #333333;
        text-align: center;
        text-shadow: 0 1px 1px rgb(255 255 255 / 75%);
        vertical-align: middle;
        background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
        border: 1px solid #cccccc;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        border-bottom-color: #b3b3b3;
        border-radius: 4px;
        box-shadow:
            inset 0 1px 0 rgb(255 255 255 / 20%),
            0 1px 2px rgb(0 0 0 / 5%);

        transition: all 0.015s;

        &:hover:not(:disabled) {
            background-image: linear-gradient(to bottom, #f8f8f8, #d8d8d8);
        }

        &:active {
            border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2)
                rgba(0, 0, 0, 0.5);
        }

        &:disabled {
            color: #a0a0a0;
        }

        &:not(:disabled) {
            cursor: pointer;
        }

        svg:first-child:not(:last-child) {
            font-size: 85%;
            margin-right: 0.3em;
        }

        svg:last-child:not(:first-child) {
            font-size: 85%;
            margin-left: 0.3em;
        }
    }

    .btn[type="color"] {
        padding: 2px;
    }

    .btn-group {
        display: flex;

        /* TODO: Extract to another class */
        font-size: 1.3em;

        .btn {
            flex-grow: 1;
        }

        .btn:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;
        }
        .btn:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .btn.chosen {
            background-image: linear-gradient(to bottom, #f0f0f0, #d8d8d8);
            box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.3);
        }
    }

    .gs-form-group {
        > p:first-child {
            margin-top: 0;
        }

        &:not(:first-child) {
            margin-top: 0.5em;
        }

        &:not(:last-child) {
            margin-bottom: var(--basic-spacing);
        }

        label,
        div.label {
            display: inline-block;
            margin-bottom: 0.5em;
        }

        input[type="range"] {
            display: block;
            width: 100%;
        }

        input[type="text"],
        input[type="number"],
        select,
        textarea,
        .fake-input {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0.375em 0.75em;
            font-size: 1em;
            font-family: var(--font-family);
            line-height: 1.5;
            color: var(--form-control-color);
            background-color: #fff;
            background-clip: padding-box;
            border: var(--form-control-border);
            border-radius: var(--form-control-border-radius);
            transition:
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;

            /*
        // Doesn't work reliably
        &:invalid:not(:focus) {
            border-color: red;
            box-shadow: 0 0 5px 0px red;
        }
        */

            &::placeholder {
                color: #a0a0a0;
            }
        }

        select {
            /* Copy-pasted from Bootstrap 5.1 */
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            appearance: none;
        }

        :is(input, select, textarea, div) + small {
            display: block;
            margin-top: 0.3em;
            color: #606060;
        }

        :is(input, select, textarea).is-invalid,
        .fake-input.is-invalid {
            border-color: var(--danger-color, #dc3545);
            box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
        }

        .invalid-feedback {
            display: block;
            margin-top: 0.25em;
            color: var(--danger-color, #dc3545);
            font-size: 0.875em;
        }

        .threshold-flex {
            display: flex;
            gap: var(--basic-spacing);

            &:not(:last-child) {
                margin-bottom: var(--basic-spacing);
            }

            * {
                margin-bottom: 0 !important; /* TODO: without important */
            }

            > :first-child {
                width: 5em;
            }

            > :last-child {
                padding: 0 var(--basic-spacing);
            }
        }

        .input-group {
            display: flex;
            gap: var(--basic-spacing);
        }
    }

    .gs-alert {
        display: flex;
        align-items: center;

        position: relative;
        padding: var(--basic-spacing);
        margin-bottom: var(--basic-spacing);
        border: 1px solid transparent;
        border-radius: var(--form-control-border-radius);
        contain: inline-size;
        max-width: 100%;

        > svg:first-child {
            width: 2em;
            height: 2em;
            margin-right: var(--basic-spacing);
        }

        &.danger {
            color: #58151c;
            background-color: #f8d7da;
            border-color: #f1aeb5;
        }

        &.warning {
            color: #664d03;
            background-color: #fff3cd;
            border-color: #ffecb5;
        }

        &.info {
            color: #055160;
            background-color: #cff4fc;
            border-color: #b6effb;
        }

        > div,
        > span {
            flex: 1 1 auto;
            min-width: 0;
        }

        > div {
            > :first-child {
                margin-top: 0;
            }

            > :last-child {
                margin-bottom: 0;
            }
        }

        ul,
        ol {
            padding-inline-start: 2em;
        }
    }

    .badge {
        display: inline-block;
        padding: 0.25em 0.5em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        background-color: #d0d0d0;
        border-radius: 0.25rem;
    }

    .gs-tabs {
        margin: 0;

        .tabs {
            display: flex;
            list-style: none;
            padding: 0;
            margin-top: 0;

            &::after {
                flex-grow: 1;
                content: "";
                display: block;
                border-bottom: 1px solid var(--form-control-border-color);
            }

            button {
                font-size: 1em;
                background-color: transparent;
                align-items: center;
                padding: 0.6em var(--basic-spacing);

                border: 1px solid var(--form-control-border-color);

                --radius: 5px;
                border-top-left-radius: var(--radius);
                border-top-right-radius: var(--radius);
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;

                cursor: pointer;
            }

            > li:not(:first-child) > button {
                margin-left: -1px;
            }

            .active-tab button {
                border-bottom-color: transparent;
            }

            :not(.active-tab) button {
                border-color: transparent;
                border-bottom-color: var(--form-control-border-color);
            }
        }

        .panes > :not(.active-tab) {
            display: none;
        }
    }
`, Hg = /* @__PURE__ */ new Set([
	"text",
	"search",
	"email",
	"url",
	"password",
	"tel",
	"number",
	"date",
	"time",
	"datetime-local",
	"month",
	"week"
]), q = class extends A {
	static properties = {
		dialogTitle: {},
		modal: { type: Boolean }
	};
	#e;
	static styles = [
		Vg,
		Bg,
		o`
            dialog {
                font-family: var(--gs-font-family, sans-serif);
                font-size: var(--gs-font-size, 14px);
                padding: 0;

                box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);
                background: white;
                border-radius: 3px;
                border: none;
                min-width: 300px;

                opacity: 1;
                transform: translate(0, 0);
                transition:
                    opacity 0.2s ease-in-out,
                    transform 0.2s ease-in-out;

                @starting-style {
                    opacity: 0;
                    transform: translate(0, -15px);
                }
            }

            dialog.closing {
                opacity: 0;
                transform: translate(0, -15px);
            }

            dialog::backdrop {
                background-color: rgb(75, 75, 75);
                opacity: 0.4;
                transition: opacity 0.3s ease-in-out;

                @starting-style {
                    opacity: 0;
                }
            }

            dialog.closing::backdrop {
                opacity: 0;
            }

            header,
            section,
            footer {
                padding: var(--gs-basic-spacing, 10px);
            }

            header {
                font-weight: bold;
                padding-bottom: 0;
            }

            section {
                > :first-child {
                    margin-top: 0;
                }

                > :last-child {
                    margin-bottom: 0;
                }
            }

            footer {
                border-top: 1px solid var(--gs-dialog-stroke-color, #d0d0d0);
                padding: var(--gs-basic-spacing, 10px);

                > div {
                    display: flex;
                    justify-content: flex-end;
                    gap: var(--gs-basic-spacing, 10px);
                }
            }

            footer .btn.btn-primary {
                --gs-dialog-primary-bg: var(--gs-theme-primary, #6c82ab);
                --gs-dialog-primary-bg-hi: oklch(
                    from var(--gs-dialog-primary-bg) calc(l + 0.07) c h
                );
                --gs-dialog-primary-bg-lo: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.07) c h
                );
                background-color: var(--gs-dialog-primary-bg);
                background-image: linear-gradient(
                    to bottom,
                    var(--gs-dialog-primary-bg-hi),
                    var(--gs-dialog-primary-bg-lo)
                );
                border-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.08) c h
                );
                color: var(--gs-theme-on-primary, #ffffff);
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            }

            footer .btn.btn-primary:hover:not(:disabled) {
                background-image: linear-gradient(
                    to bottom,
                    oklch(from var(--gs-dialog-primary-bg) calc(l + 0.1) c h),
                    oklch(from var(--gs-dialog-primary-bg) calc(l - 0.04) c h)
                );
            }

            footer .btn.btn-primary svg {
                filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
            }

            footer .btn.btn-primary:disabled {
                background-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l + 0.08) c h
                );
                background-image: none;
                border-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.02) c h
                );
                color: oklch(
                    from var(--gs-theme-on-primary, #ffffff) l c h / 0.6
                );
                text-shadow: none;
            }

            footer .btn.btn-primary:disabled svg {
                filter: none;
            }
        `
	];
	constructor() {
		super(), this.dialogTitle = null, this.modal = !0, this.addEventListener("keydown", (e) => {
			this.#t(e), e.stopPropagation();
		});
	}
	#t(e) {
		if (!e.defaultPrevented && e.key == "Enter" && !e.isComposing && !e.altKey && !e.ctrlKey && !e.metaKey) {
			let t = e.composedPath().find((e) => e instanceof HTMLElement);
			if (this.#n(t)) {
				let t = this.#r();
				t && (e.preventDefault(), t.click());
			}
		}
	}
	#n(e) {
		let t = this.renderRoot instanceof ShadowRoot ? this.renderRoot : null, n = e ?? t?.activeElement;
		if (!n) return !0;
		let r = n.closest("input");
		if (!r) return !1;
		let i = (r.type || "text").toLowerCase();
		return Hg.has(i);
	}
	#r() {
		return this.renderRoot.querySelector("footer button[data-primary]:not(:disabled)");
	}
	firstUpdated() {
		this.#e = this.renderRoot.querySelector("dialog"), this.modal ? this.#e.showModal() : this.#e.show(), this.#i();
	}
	#i() {
		let e = this.renderRoot.querySelector("[autofocus]");
		e && (queueMicrotask(() => {
			this.isConnected && e.focus();
		}), requestAnimationFrame(() => {
			this.isConnected && e.focus();
		}));
	}
	finish(e) {
		this.dispatchEvent(new CustomEvent("gs-dialog-finished", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	#a(e) {
		e.preventDefault(), this.finish({
			ok: !1,
			reason: "cancel"
		}), this.triggerClose();
	}
	triggerClose() {
		this.#e.addEventListener("transitionend", () => {
			this.#e.close(), this.dispatchEvent(new CustomEvent("gs-dialog-closed", {
				bubbles: !0,
				composed: !0
			}));
		}), this.#e.classList.add("closing"), this.renderRoot.querySelector(".non-modal-backdrop")?.classList.add("closing");
	}
	onCloseButtonClick() {
		"requestClose" in this.#e ? this.#e.requestClose() : (this.finish({
			ok: !1,
			reason: "cancel"
		}), this.triggerClose());
	}
	renderHeader() {
		return L`${this.dialogTitle ? L`${this.dialogTitle}` : I}`;
	}
	renderBody() {
		return L``;
	}
	renderFooter() {
		let e = this.renderButtons();
		return e?.length ? L`<div>${e}</div>` : I;
	}
	renderButtons() {
		return [this.makeCloseButton()];
	}
	makeButton(e, t, n = {}) {
		let { iconDef: r, disabled: i = !1, preventMouseDown: a = !1, isPrimary: o = !1 } = n, s = e == "Next", c = ["btn"];
		return s && c.push("reverse"), o && c.push("btn-primary"), L`<button
            class=${c.join(" ")}
            type="button"
            title=${e}
            ?disabled=${i}
            ?data-primary=${o}
            @mousedown=${a ? (e) => e.preventDefault() : void 0}
            @click=${async () => {
			await t() || this.triggerClose();
		}}
        >
            ${r ? K(r).node[0] : I} ${e}
        </button>`;
	}
	makeCloseButton(e = "Close") {
		return this.makeButton(e, () => this.onCloseButtonClick(), { preventMouseDown: !0 });
	}
	render() {
		let e = this.renderHeader(), t = this.renderFooter();
		return L`
            ${this.modal ? I : L`<div class="non-modal-backdrop"></div>`}
            <dialog
                @cancel=${(e) => this.#a(e)}
            >
                ${e ? L`<header>${e}</header>` : I}
                <section>${this.renderBody()}</section>
                ${t ? L`<footer>${t}</footer>` : I}
            </dialog>
        `;
	}
};
function J(e, t) {
	return Gg(e, t).promise;
}
function Ug(e, t, n) {
	return J(e, t).then(n);
}
function Wg(e, t) {
	return Ug(e, t, (e) => !!e.ok);
}
function Gg(e, t) {
	let n = document.createElement(e);
	t && t(n);
	let r = new Promise((e) => {
		n.addEventListener("gs-dialog-finished", (t) => {
			e(t.detail);
		}, { once: !0 });
	});
	return n.addEventListener("gs-dialog-closed", () => {
		n.remove();
	}), document.body.appendChild(n), {
		element: n,
		promise: r
	};
}
//#endregion
//#region ../app/src/components/generic/messageDialog.js
var Kg = {
	warning: wf,
	error: Df,
	info: rf
}, qg = class extends q {
	static properties = {
		...super.properties,
		message: {},
		type: { type: String },
		confirm: { type: Boolean }
	};
	static styles = [...super.styles, o`
            .message-flex {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: calc(var(--gs-basic-spacing) * 2);
                padding: var(--gs-basic-spacing);
                box-sizing: border-box;
                max-width: 400px;
            }

            .icon svg {
                height: 3em;
            }
        `];
	constructor() {
		super(), this.message = "", this.type = "info", this.confirm = !1;
	}
	renderButtons() {
		return this.confirm ? [this.makeCloseButton("Cancel"), this.makeButton("OK", () => {
			this.finish({ ok: !0 }), this.triggerClose();
		}, { isPrimary: !0 })] : super.renderButtons();
	}
	renderBody() {
		if (this.type) {
			let e = Kg[this.type];
			return L`<div class="message-flex">
                ${e ? L`<div class="icon">${K(e).node[0]}</div>` : I}
                <div class="message">${this.message}</div>
            </div>`;
		} else return L`${this.message}`;
	}
};
customElements.define("gs-message-dialog", qg);
function Y(e, t = {}) {
	return Wg("gs-message-dialog", (n) => {
		n.message = e, n.dialogTitle = t.title, n.type = t.type, n.confirm = t.confirm;
	});
}
//#endregion
//#region ../../node_modules/lit-html/directives/repeat.js
var Jg = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, Yg = re(class extends ke {
	constructor(e) {
		if (super(e), e.type !== ye.CHILD) throw Error("repeat() can only be used in text expressions");
	}
	dt(e, t, n) {
		let r;
		n === void 0 ? n = t : t !== void 0 && (r = t);
		let i = [], a = [], o = 0;
		for (let t of e) i[o] = r ? r(t, o) : o, a[o] = n(t, o), o++;
		return {
			values: a,
			keys: i
		};
	}
	render(e, t, n) {
		return this.dt(e, t, n).values;
	}
	update(e, [t, n, r]) {
		let i = Yt(e), { values: a, keys: o } = this.dt(t, n, r);
		if (!Array.isArray(i)) return this.ut = o, a;
		let s = this.ut ??= [], c = [], l, u, d = 0, f = i.length - 1, p = 0, m = a.length - 1;
		for (; d <= f && p <= m;) if (i[d] === null) d++;
		else if (i[f] === null) f--;
		else if (s[d] === o[p]) c[p] = Xt(i[d], a[p]), d++, p++;
		else if (s[f] === o[m]) c[m] = Xt(i[f], a[m]), f--, m--;
		else if (s[d] === o[m]) c[m] = Xt(i[d], a[m]), nn(e, c[m + 1], i[d]), d++, m--;
		else if (s[f] === o[p]) c[p] = Xt(i[f], a[p]), nn(e, i[d], i[f]), f--, p++;
		else if (l === void 0 && (l = Jg(o, p, m), u = Jg(s, d, f)), l.has(s[d])) if (l.has(s[f])) {
			let t = u.get(o[p]), n = t === void 0 ? null : i[t];
			if (n === null) {
				let t = nn(e, i[d]);
				Xt(t, a[p]), c[p] = t;
			} else c[p] = Xt(n, a[p]), nn(e, i[d], n), i[t] = null;
			p++;
		} else qt(i[f]), f--;
		else qt(i[d]), d++;
		for (; p <= m;) {
			let t = nn(e, c[m + 1]);
			Xt(t, a[p]), c[p++] = t;
		}
		for (; d <= f;) {
			let e = i[d++];
			e !== null && qt(e);
		}
		return this.ut = o, en(e, c), N;
	}
}), Xg = L`
    <div class="gs-alert info">
        ${K(rf).node[0]}
        <span>
            <span
                style="float: right; cursor: pointer;"
                @click=${(e) => {
	e.target.closest(".gs-alert").style.display = "none";
}}
                >${K(bf).node[0]}</span
            >
            To create publication-quality images:
            <ol>
                <li>
                    Adjust the GenomeSpy window so the visualization and labels
                    appear as you want them.
                </li>
                <li>
                    Use the scale factor slider below to increase resolution.
                </li>
                <li>
                    Note: Smaller image dimensions with a higher scale factor
                    will produce relatively larger and clearer labels and
                    elements.
                </li>
            </ol>
        </span>
    </div>
`, Zg = class extends q {
	static properties = {
		...super.properties,
		genomeSpy: { type: Object },
		logicalWidth: { type: Number },
		logicalHeight: { type: Number },
		devicePixelRatio: { type: Number },
		imageWidth: { type: Number },
		imageHeight: { type: Number },
		transparentBackground: { type: Boolean },
		backgroundColor: { type: String }
	};
	static styles = [...super.styles, o`
            dialog {
                min-width: 500px;
            }
        `];
	constructor() {
		super(), this.genomeSpy = null, this.dialogTitle = "Save Visualization as PNG Image", this.devicePixelRatio = 2, this.logicalWidth = 800, this.logicalHeight = 600, this.imageWidth = 0, this.imageHeight = 0, this.transparentBackground = !1, this.backgroundColor = "#ffffff";
	}
	connectedCallback() {
		super.connectedCallback();
		let { width: e, height: t } = this.genomeSpy.getLogicalCanvasSize();
		this.logicalWidth = Qg(e), this.logicalHeight = Qg(t);
	}
	willUpdate(e) {
		if ([
			"logicalWidth",
			"logicalHeight",
			"devicePixelRatio"
		].some((t) => e.has(t))) {
			let e = this.devicePixelRatio;
			this.imageWidth = Math.round(this.logicalWidth * e), this.imageHeight = Math.round(this.logicalHeight * e);
		}
	}
	renderBody() {
		return L`
            ${Xg}

            <div class="gs-form-group">
                <label for="canvasDimensions">Visualization dimensions</label>
                <input
                    type="text"
                    id="canvasDimensions"
                    .value=${`${this.logicalWidth} x ${this.logicalHeight}`}
                    disabled
                />
            </div>

            <div class="gs-form-group">
                <label for="pngDevicePixelRatio">Scale factor</label>
                <div style="display: flex">
                    <input
                        type="range"
                        id="pngDevicePixelRatio"
                        min="0.5"
                        max="4"
                        step="0.5"
                        .value=${"" + this.devicePixelRatio}
                        @input=${e_((e) => {
			this.devicePixelRatio = e.valueAsNumber;
		})}
                    />
                    <span style="width: 2em; margin-left: 0.5em"
                        >${this.devicePixelRatio}</span
                    >
                </div>
            </div>

            <div class="gs-form-group">
                <label for="pngDimensions">Image dimensions</label>
                <input
                    type="text"
                    id="pngDimensions"
                    .value=${`${this.imageWidth} x ${this.imageHeight}`}
                    disabled
                />
            </div>

            <div class="gs-form-group">
                <div class="label">Background</div>
                <div style="display: flex; align-items: center">
                    <label class="checkbox" style="margin-bottom: 0"
                        ><input
                            type="checkbox"
                            ?checked=${this.transparentBackground}
                            @change=${e_((e) => {
			this.transparentBackground = e.checked;
		})}
                        />
                        Transparent</label
                    >
                    ${this.transparentBackground ? I : L`<input
                              type="color"
                              id="pngBackground"
                              style="margin-left: 1em"
                              .value=${this.backgroundColor}
                              @change=${e_((e) => {
			this.backgroundColor = e.value;
		})}
                          />`}
                </div>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeCloseButton("Cancel"), this.makeButton("Save PNG", () => {
			this.#e(), this.finish({ ok: !0 }), this.triggerClose();
		}, {
			iconDef: uf,
			isPrimary: !0
		})];
	}
	#e() {
		let e = this.genomeSpy.exportCanvas(this.logicalWidth, this.logicalHeight, this.devicePixelRatio, this.transparentBackground ? null : this.backgroundColor), t = document.createElement("a");
		t.href = e, t.download = "genomespy-visualization.png", document.body.appendChild(t), t.click(), document.body.removeChild(t);
	}
};
customElements.define("gs-save-image-dialog", Zg);
function Qg(e) {
	return Math.round(e / 2) * 2;
}
function $g(e) {
	return e.target;
}
function e_(e) {
	return (t) => {
		e($g(t), t);
	};
}
//#endregion
//#region ../app/src/components/generic/searchableCheckboxList.js
var t_ = class extends A {
	static properties = {
		items: { attribute: !1 },
		selectedValues: { attribute: !1 },
		placeholder: { type: String },
		selectedItemName: { type: String },
		itemMarker: { attribute: !1 },
		search: { state: !0 }
	};
	static styles = [
		Bg,
		Vg,
		o`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--gs-basic-spacing, 0.5em);
            }

            /** Duplicates gs-form-group styles. TODO: Fix. */
            input[type="text"] {
                display: block;
                width: 100%;
                box-sizing: border-box;
                padding: 0.375em 0.75em;
                font-size: 1em;
                font-family: var(--font-family);
                line-height: 1.5;
                color: var(--form-control-color);
                background-color: #fff;
                background-clip: padding-box;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                transition:
                    border-color 0.15s ease-in-out,
                    box-shadow 0.15s ease-in-out;
            }

            input[type="text"]::placeholder {
                color: #a0a0a0;
            }

            .checkbox-list-wrapper {
                position: relative;
            }

            .search-note {
                position: absolute;
                inset: 0;
                display: grid;
                justify-content: center;
                align-content: center;

                color: #808080;
                font-size: 85%;

                pointer-events: none;

                > * {
                    position: relative;
                    top: 0.7em;
                }
            }

            .checkbox-list {
                color: var(--form-control-color);
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                overflow: auto;
                max-height: 200px;
                box-sizing: border-box;

                padding: 0.375em 0.75em;

                margin: 0;
            }

            .color {
                display: inline-block;
                width: 0.5em;
                height: 1em;
                margin-right: 0.3em;
            }

            li {
                list-style: none;
            }

            label.checkbox {
                display: block;

                &:hover {
                    background-color: #f4f4f4;
                }
            }

            small {
                display: block;
                color: #606060;
                text-box-edge: cap alphabetic;
                text-box-trim: trim-both;
            }
        `
	];
	constructor() {
		super(), this.items = [], this.selectedValues = [], this.placeholder = "Type something to filter the list", this.selectedItemName = "items", this.itemMarker = () => I, this.search = "";
	}
	getFilteredItems() {
		return this.items.filter((e) => {
			let t = e.searchText ?? e.label.toLowerCase();
			return this.search.length === 0 || t.includes(this.search);
		});
	}
	#e(e) {
		this.search = e.value.toLowerCase();
	}
	#t(e) {
		let t = e.target, n = new Set(this.selectedValues), r = this.items[+t.value];
		t.checked ? n.add(r.value) : n.delete(r.value), this.selectedValues = this.items.map((e) => e.value).filter((e) => n.has(e)), this.dispatchEvent(new n_(this.selectedValues));
	}
	#n(e) {
		if (e.key == "ArrowDown") this.renderRoot.querySelector(".checkbox-list li:first-child input[type='checkbox']")?.focus(), e.preventDefault(), e.stopPropagation();
		else if (e.key == "Enter") {
			let t = this.getFilteredItems();
			if (t.length == 1) {
				let e = new Set(this.selectedValues);
				e.add(t[0].value), this.selectedValues = this.items.map((e) => e.value).filter((t) => e.has(t)), this.dispatchEvent(new n_(this.selectedValues));
			}
			e.stopPropagation();
		}
	}
	#r(e) {
		let t = e.target;
		if (t.type == "checkbox") if (e.key == "ArrowDown") (t.closest("li").nextElementSibling?.querySelector("input[type='checkbox']"))?.focus(), e.preventDefault();
		else if (e.key == "ArrowUp") {
			let n = t.closest("li").previousElementSibling?.querySelector("input[type='checkbox']");
			n ? n.focus() : this.#i(), e.preventDefault();
		} else e.key == "Esc" ? (this.#i(), e.stopPropagation()) : e.key == "Tab" && !e.shiftKey ? this.renderRoot.querySelector(".checkbox-list li:last-child input")?.focus() : e.key == "Tab" && e.shiftKey && this.renderRoot.querySelector(".checkbox-list li:first-child input")?.focus();
	}
	focus(e) {
		this.#i(e);
	}
	#i(e) {
		this.renderRoot.querySelector("input[type='text']")?.focus(e);
	}
	updated() {
		let e = this.renderRoot.querySelector(".checkbox-list");
		e && (e.style.minHeight = `${e.offsetHeight}px`);
	}
	render() {
		let e = new Set(this.selectedValues), t = this.getFilteredItems();
		return L`
            <input
                autofocus
                type="text"
                placeholder=${this.placeholder}
                @keydown=${(e) => this.#n(e)}
                @input=${e_((e) => this.#e(e))}
            />
            <div class="checkbox-list-wrapper">
                <ul
                    class="checkbox-list"
                    @input=${(e) => this.#t(e)}
                    @keydown=${(e) => this.#r(e)}
                >
                    ${Yg(t, (e) => e.value, (t) => L`<li>
                                <label class="checkbox">
                                    ${this.itemMarker(t.value)}
                                    <input
                                        type="checkbox"
                                        .checked=${e.has(t.value)}
                                        .value=${String(this.items.indexOf(t))}
                                    />
                                    ${t.label}
                                </label>
                            </li>`)}
                </ul>
                ${t.length == 0 ? L`<div class="search-note">
                          <div>Nothing found</div>
                      </div>` : t.length == 1 && this.items.length > 1 ? L`<div class="search-note">
                            <div>
                                ${K(_f).node[0]} Hit enter to select
                                the exact match
                            </div>
                        </div>` : I}
            </div>
            <small>
                The number of selected ${this.selectedItemName}:
                <strong>${e.size}</strong>
            </small>
        `;
	}
};
customElements.define("gs-searchable-checkbox-list", t_);
var n_ = class extends Event {
	values;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.values = e;
	}
}, r_ = [
	{
		value: "lt",
		label: "<",
		title: "less than"
	},
	{
		value: "lte",
		label: "≤",
		title: "less than or equal to"
	},
	{
		value: "eq",
		label: "=",
		title: "equal to"
	},
	{
		value: "gte",
		label: "≥",
		title: "greater than or equal to"
	},
	{
		value: "gt",
		label: ">",
		title: "greater than"
	}
], i_ = class extends A {
	static properties = {
		value: { type: String },
		options: { attribute: !1 }
	};
	static styles = [Vg, o`
            :host {
                display: block;
            }
        `];
	constructor() {
		super(), this.value = "lt", this.options = r_;
	}
	#e(e) {
		this.value = e, this.dispatchEvent(new a_(e));
	}
	render() {
		return L`<div class="btn-group" role="group">
            ${this.options.map((e) => L`<button
                        class=${Nd({
			btn: !0,
			chosen: e.value === this.value
		})}
                        .value=${e.value}
                        @click=${() => this.#e(e.value)}
                        title=${e.title}
                    >
                        ${e.label}
                    </button>`)}
        </div>`;
	}
};
customElements.define("gs-comparison-operator-buttons", i_);
var a_ = class extends Event {
	value;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.value = e;
	}
};
//#endregion
//#region ../core/src/utils/point.js
function o_(e, t) {
	var n = e.getBoundingClientRect();
	return [t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop];
}
//#endregion
//#region ../app/src/components/generic/histogram.js
var s_ = o`
    :host {
        display: block;
        font-size: inherit;
        font-family: inherit;
    }

    .histogram-widget {
        position: relative;

        --grid-color: #333;
        --background-color: #f0f0f0;
    }

    .histogram-plot {
        position: relative;
    }

    .histogram-bars {
        position: relative;
        height: 4em;
        background-color: var(--background-color);

        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;
        overflow: hidden;

        > div {
            position: absolute;
            background-color: #808080;
        }
    }

    .histogram-thresholds {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
    }

    .histogram-threshold {
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: black;
    }

    .histogram-knob {
        --size: 1.2em;
        position: absolute;
        top: calc(var(--size) * -0.5);
        left: calc(0.5px - var(--size) * 0.5);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);

        background: black;
        color: white;

        font-size: 80%;
        text-align: center;
        vertical-align: middle;

        cursor: col-resize;
    }

    .histogram-domain {
        position: absolute;
        width: 100%;

        height: 0.5em;

        border: 1px solid var(--grid-color);
        border-bottom-style: none;
    }

    .histogram-extent {
        display: flex;
        justify-content: space-between;

        font-size: 90%;

        > div {
            margin: 0.1em 0.3em;
            margin-bottom: 0;
        }
    }

    .histogram-hint {
        position: absolute;
        inset: 0;
        font-size: 85%;

        display: flex;
        align-items: center;
        justify-content: center;

        pointer-events: none;

        opacity: 0;
        transition: opacity 0.3s;

        &.visible {
            opacity: 1;
        }

        span {
            position: relative;
            top: -30%;

            background-color: color-mix(
                in srgb,
                var(--background-color) 70%,
                transparent
            );
            color: #333;
            cursor: default;
        }
    }
`, c_ = class extends A {
	static properties = {
		values: { attribute: !1 },
		thresholds: { attribute: !1 },
		operators: { attribute: !1 },
		colors: { attribute: !1 },
		showThresholdNumbers: { type: Boolean },
		binCount: {
			type: Number,
			attribute: "bin-count"
		}
	};
	static styles = s_;
	#e;
	#t;
	#n;
	#r = 0;
	constructor() {
		super(), this.values = [], this.thresholds = [], this.operators = [], this.colors = p_, this.showThresholdNumbers = !1, this.binCount = 40, this.#e = ln().thresholds(this.binCount), this.#t = this.#e([]), this.#n = Gt();
	}
	willUpdate(e) {
		e.has("binCount") && (this.#e = ln().thresholds(this.binCount)), (e.has("values") || e.has("binCount")) && (this.#t = this.#e(this.values), this.#n = Gt().domain(this.domain).range([0, 100]));
	}
	get domain() {
		return [this.#t.at(0).x0, this.#t.at(-1).x1];
	}
	#i(e) {
		if (performance.now() < this.#r + 200) return;
		let t = e.target, n = o_(t, e);
		this.#o("add", 0, n[0] / t.offsetWidth);
	}
	#a(e, t) {
		let n = e.target.closest(".histogram-threshold"), r = n.offsetLeft, i = n.offsetParent.offsetWidth;
		e.preventDefault(), e.stopPropagation(), this.style.cursor = "col-resize", u_(e, (e, n) => {
			this.#o("adjust", t, (r + e) / i);
		}, () => {
			this.#r = performance.now(), this.style.cursor = "";
		});
	}
	#o(e, t, n) {
		n = Ft(n, 0, 1), this.dispatchEvent(new l_(e, t, +this.#n.invert(n * 100).toPrecision(3)));
	}
	#s() {
		let e = this.#t, t = this.#n, n = 90 / e.map((e) => e.length).reduce((e, t) => Math.max(e, t), 0), r = [], i = this.thresholds.length == 1 && this.operators[0] == "eq", a = [
			-Infinity,
			...this.thresholds,
			Infinity
		], o = [
			!1,
			...this.operators.map((e) => ["lte", "gt"].includes(e)),
			!0
		], s = ["gt", "gte"].includes(this.operators[0]) ? (e) => a.length - e - 2 : (e) => e;
		for (let c = 0; c < e.length; c++) {
			let l = e[c], u = t(l.x0), d = 0;
			if (i) for (let e = 0; e <= 1; e++) {
				let t = f_(l, this.thresholds[0], e > 0);
				t && r.push({
					x: u,
					y: d * n,
					height: t * n,
					group: e
				}), d += t;
			}
			else if (this.thresholds.length) for (let e = 0; e < a.length - 1; e++) {
				let t = s(e), i = d_(l, a[t], a[t + 1], !o[t], o[t + 1]);
				i && r.push({
					x: u,
					y: d * n,
					height: i * n,
					group: e
				}), d += i;
			}
			else {
				let e = l.length;
				e && r.push({
					x: u,
					y: d,
					height: e * n,
					group: null
				});
			}
		}
		return r;
	}
	render() {
		let e = this.#n, t = 100 / this.#t.length;
		return L`<div class="histogram-widget">
            <div class="histogram-plot">
                <div class="histogram-bars">${this.#s().map((e) => L`<div
                    style=${n({
			width: t + .01 + "%",
			left: e.x + "%",
			bottom: e.y + "%",
			height: e.height + "%",
			backgroundColor: typeof e.group == "number" ? this.colors[e.group % this.colors.length] : "default"
		})}
                ></div>`)}</div>
                <div class="histogram-thresholds" @click=${this.#i}>
                    ${this.thresholds.map((t, r) => {
			let i = e(t);
			return i >= 0 && i <= 100 ? L`<div
                                  class="histogram-threshold"
                                  style=${n({ left: e(t) + "%" })}
                              >
                                  <div
                                      class="histogram-knob"
                                      @mousedown=${(e) => this.#a(e, r)}
                                  >
                                      ${this.showThresholdNumbers ? r + 1 : I}
                                  </div>
                              </div>` : I;
		})}
                </div>
                <div
                    class=${Nd({
			"histogram-hint": !0,
			visible: !this.thresholds.length
		})}
                >
                    <span>Click here to add a threshold!</span>
                </div>
            </div>
            <div class="histogram-domain"></div>
            <div class="histogram-extent">
                ${e.domain().map((e) => L`<div>${e}</div>`)}
            </div>
        </div>`;
	}
};
customElements.define("gs-histogram", c_);
var l_ = class extends Event {
	constructor(e, t, n) {
		super(e), this.index = t, this.value = n;
	}
};
function u_(e, t, n) {
	let r = e.clientX, i = e.clientY, a = function(e) {
		t(e.clientX - r, e.clientY - i);
	}, o = function(e) {
		document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o), n?.(e.clientX - r, e.clientY - i);
	};
	document.addEventListener("mousemove", a), document.addEventListener("mouseup", o);
}
function d_(e, t, n, r = !0, i = !1) {
	let a = r ? (e) => e >= t : (e) => e > t, o = i ? (e) => e <= n : (e) => e < n, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		a(n) && o(n) && s++;
	}
	return s;
}
function f_(e, t, n = !1) {
	let r = 0;
	for (let n = 0; n < e.length; n++) r += +(e[n] == t);
	return n ? e.length - r : r;
}
var p_ = [
	"#1f77b4",
	"#ff7f0e",
	"#2ca02c",
	"#d62728",
	"#9467bd",
	"#8c564b"
];
//#endregion
//#region ../app/src/components/generic/thresholdComparisonInput.js
function m_(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function h_(e) {
	return y_(e) ? [e] : [];
}
function g_(e, t) {
	return y_(e) ? e : t;
}
var __ = class extends A {
	static properties = {
		values: { attribute: !1 },
		operator: { type: String },
		operand: { type: Number },
		autofocus: {
			type: Boolean,
			reflect: !0
		},
		placeholder: { type: String }
	};
	static styles = [Vg, o`
            :host {
                display: block;
            }

            .operator {
                margin-bottom: 1em;
            }

            input {
                margin-top: 0.5em;
            }
        `];
	constructor() {
		super(), this.values = [], this.operator = "lt", this.operand = void 0, this.autofocus = !1, this.placeholder = "... or enter a numeric value here";
	}
	get #e() {
		return this.values.filter(y_);
	}
	#t(e) {
		e.stopPropagation(), this.operator = e.value, this.#a();
	}
	#n(e) {
		let t = e.target.value, n = m_(t);
		(n !== void 0 || t.trim() === "") && (this.operand = n, this.#a());
	}
	#r(e) {
		let t = g_(this.operand, e.value);
		t !== this.operand && (this.operand = t, this.#a());
	}
	#i(e) {
		this.operand = e.value, this.#a();
	}
	#a() {
		this.dispatchEvent(new v_(this.operator, this.operand));
	}
	focus(e) {
		this.renderRoot.querySelector("input")?.focus(e);
	}
	render() {
		let e = this.#e;
		return L`
            <div class="gs-form-group">
                <gs-comparison-operator-buttons
                    class="operator"
                    .value=${this.operator}
                    @change=${(e) => this.#t(e)}
                ></gs-comparison-operator-buttons>

                ${e.length ? L`<gs-histogram
                          .values=${e}
                          .thresholds=${h_(this.operand)}
                          .operators=${[this.operator]}
                          .colors=${["#1f77b4", "#ddd"]}
                          .showThresholdNumbers=${!1}
                          @add=${(e) => this.#r(e)}
                          @adjust=${(e) => this.#i(e)}
                      ></gs-histogram>` : I}

                <input
                    type="number"
                    placeholder=${this.placeholder}
                    .value=${y_(this.operand) ? String(this.operand) : ""}
                    @input=${(e) => this.#n(e)}
                />
            </div>
        `;
	}
};
customElements.define("gs-threshold-comparison-input", __);
var v_ = class extends Event {
	operator;
	operand;
	constructor(e, t) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.operator = e, this.operand = t;
	}
};
function y_(e) {
	return typeof e == "number" && Number.isFinite(e);
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/advancedAttributeFilterDialog.js
var b_ = class extends q {
	static properties = {
		...super.properties,
		categories: {},
		attributeInfo: {},
		sampleView: {},
		categoryToMarker: {}
	};
	constructor() {
		super(), this.categories = [], this.attributeInfo = null, this.sampleView = null, this.categoryToMarker = () => I, this.selection = [];
	}
	willUpdate(e) {
		e.has("attributeInfo") && (this.dialogTitle = `Filter by ${this.attributeInfo.name}`);
	}
	renderBody() {
		return L`<div class="gs-form-group">
            <p>Select one or more categories and choose an action.</p>
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.categories}
                .selectedValues=${this.selection}
                .selectedItemName=${"categories"}
                .itemMarker=${this.categoryToMarker}
                @change=${(e) => {
			this.selection = e.values;
		}}
            ></gs-searchable-checkbox-list>
        </div>`;
	}
	renderButtons() {
		return [
			this.makeButton("Cancel", () => this.finish({ ok: !1 })),
			this.makeButton("Remove", () => this.#e(!0), { iconDef: Pd }),
			this.makeButton("Retain", () => this.#e(!1), {
				iconDef: V,
				isPrimary: !0
			})
		];
	}
	#e(e) {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.filterByNominal({
			values: this.categories.map((e) => e.value).filter((e) => this.selection.includes(e)),
			attribute: this.attributeInfo.attribute,
			remove: e
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-discrete-attribute-filter-dialog", b_);
var x_ = class extends q {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		operator: {},
		operand: {}
	};
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.operator = "lt", this.operand = void 0;
	}
	willUpdate(e) {
		e.has("attributeInfo") && (this.dialogTitle = `Filter by ${this.attributeInfo.name}`);
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		let e = xc(this.attributeInfo, this.sampleView.leafSamples, this.sampleView.sampleHierarchy);
		return L`<div class="gs-form-group">
            <label
                >Retain samples where
                <em>${this.attributeInfo.name}</em> is</label
            >
            <gs-threshold-comparison-input
                autofocus
                .values=${e}
                .operator=${this.operator}
                .operand=${this.operand}
                @change=${(e) => this.#e(e)}
            ></gs-threshold-comparison-input>
        </div>`;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#t(), {
			iconDef: V,
			isPrimary: !0
		})];
	}
	#t() {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.filterByQuantitative({
			attribute: this.attributeInfo.attribute,
			operator: this.operator,
			operand: this.operand
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-quantitative-attribute-filter-dialog", x_);
function S_(e, t) {
	let n = e.scale?.type;
	Mt(n) ? w_(e, t) : It(n) || Dt(n) ? E_(e, t) : e.type === "identifier" ? C_(e, t) : Y("Not implemented (yet).");
}
function C_(e, t) {
	T_(t.getSamples().map((e) => e.id), e, t);
}
function w_(e, t) {
	let r = e.scale;
	T_(r.domain(), e, t, (e) => L`<span
            class="color"
            style=${n({ backgroundColor: r(e).toString() })}
        ></span>`);
}
function T_(e, t, n, r = (e) => I) {
	let i = new Set(xc(t, n.leafSamples, n.sampleHierarchy)), a = e.filter((e) => i.has(e)).map((e) => ({
		value: e,
		label: `${e}`,
		searchText: `${e}`.toLowerCase()
	}));
	return J("gs-discrete-attribute-filter-dialog", (e) => {
		e.categories = a, e.attributeInfo = t, e.sampleView = n, e.categoryToMarker = r;
	});
}
function E_(e, t) {
	return J("gs-quantitative-attribute-filter-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t;
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/groupByThresholdsDialog.js
var D_ = class extends q {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		thresholds: {},
		groupTitles: {},
		validationError: {},
		values: {}
	};
	static styles = [...super.styles, o`
            .group-by-thresholds-form {
                width: 27em;
            }

            .group-color {
                display: inline-block;
                width: 0.7em;
                height: 0.7em;
            }

            .threshold-groups {
                margin-top: var(--gs-basic-spacing);

                text-align: left;
                font-size: 90%;

                :is(th, td) {
                    padding-right: 1em;

                    &:nth-child(2) {
                        min-width: 9em;
                    }
                }

                input[type="text"] {
                    width: 12em;
                    margin-bottom: 0;
                    padding-top: 0.2em;
                    padding-bottom: 0.2em;
                }
            }

            gs-histogram {
                margin-top: var(--gs-basic-spacing, 10px);
                margin-bottom: var(--gs-basic-spacing, 10px);
            }
        `];
	constructor() {
		super(), this.thresholds = [], this.groupTitles = [], this.validationError = void 0, this.attributeInfo = null, this.sampleView = null, this.values = [];
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this.dialogTitle = `Group by threshold on ${this.attributeInfo.name}`);
	}
	#e(e, t) {
		return t > 0 && (e = Math.max(e, this.thresholds[t - 1].operand)), t < this.thresholds.length - 1 && (e = Math.min(e, this.thresholds[t + 1].operand)), e;
	}
	#t() {
		let e = this.thresholds.length + 1;
		for (; this.groupTitles.length < e;) this.groupTitles.push("");
		this.groupTitles.length > e && (this.groupTitles.length = e);
	}
	#n(e) {
		return this.groupTitles[e] ?? "";
	}
	#r() {
		return Array.from({ length: this.thresholds.length + 1 }, (e, t) => this.#n(t));
	}
	#i(e, t) {
		let n = e.target.value;
		this.thresholds[t].operator = n, this.validationError = void 0, this.requestUpdate();
	}
	#a(e, t) {
		let n = e.target.value;
		/^\d+(\.\d+)?$/.test(n) && (this.thresholds[t].operand = this.#e(+n, t), this.validationError = void 0, this.requestUpdate());
	}
	#o(e, t) {
		this.groupTitles[t] = e.target.value, this.validationError = void 0, this.requestUpdate();
	}
	#s(e) {
		let t = this.thresholds.findIndex((t) => t.operand > e.value), n = t < 0 ? this.thresholds.length : t;
		this.#t(), this.thresholds.splice(n, 0, {
			operand: e.value,
			operator: "lt"
		}), this.groupTitles.splice(n + 1, 0, ""), this.validationError = void 0, this.requestUpdate();
	}
	#c(e) {
		this.thresholds[e.index].operand = this.#e(e.value, e.index), this.validationError = void 0, this.requestUpdate();
	}
	#l(e) {
		this.#t(), this.thresholds.splice(e, 1), this.groupTitles.splice(e + 1, 1), this.validationError = void 0, this.requestUpdate();
	}
	#u() {
		let e = this.#r().map((e) => e.trim());
		if (e.every((e) => !e)) return;
		let t = e.findIndex((e) => !e);
		if (t >= 0) throw Error(`Group ${t + 1} is missing a title.`);
		let n = /* @__PURE__ */ new Set();
		for (let t of e) {
			if (n.has(t)) throw Error(`Duplicate group title: "${t}".`);
			n.add(t);
		}
		return e;
	}
	renderBody() {
		return L`<div class="gs-form-group group-by-thresholds-form">
            ${this.validationError ? L`<div class="gs-alert danger">
                      ${K(Bd).node[0]}
                      <span>${this.validationError}</span>
                  </div>` : I}

            <label>Split into groups using the thresholds:</label>

            <gs-histogram
                .values=${this.values}
                .thresholds=${this.thresholds.map((e) => e.operand)}
                .operators=${this.thresholds.map((e) => e.operator)}
                .showThresholdNumbers=${!0}
                @add=${(e) => this.#s(e)}
                @adjust=${(e) => this.#c(e)}
            ></gs-histogram>

            ${this.thresholds.map((e, t) => L` <div class="threshold-flex">
                        <select
                            .value=${e.operator}
                            @change=${(e) => this.#i(e, t)}
                        >
                            <option value="lt">${"<"}</option>
                            <option value="lte">${"≤"}</option>
                        </select>
                        <input
                            .value=${"" + e.operand}
                            type="text"
                            placeholder="Numeric value"
                            @input=${(e) => this.#a(e, t)}
                            @blur=${(e) => {
			e.target.value = "" + this.thresholds[t].operand;
		}}
                        />
                        <button
                            @click=${() => this.#l(t)}
                            class="btn"
                            title="Remove"
                        >
                            ${K(nf).node[0]}
                        </button>
                    </div>`)}
            ${this.thresholds.length ? L`<small>
                          The operator specifies whether the upper endpoint of
                          the interval (<em>i.e.</em>, the group) is exclusive
                          (&lt;) or inclusive(&le;).
                      </small>
                      ${(() => {
			let e = [
				{
					operand: -Infinity,
					operator: "lt"
				},
				...this.thresholds,
				{
					operand: Infinity,
					operator: "lte"
				}
			], t = Xa((e) => e, e), n = Array(e.length - 1).fill(0);
			for (let e of this.values) n[t(e) - 1]++;
			let r = [];
			for (let t = 1; t < e.length; t++) r.push({
				index: t - 1,
				name: t,
				interval: eo(e[t - 1], e[t]),
				n: n[t - 1]
			});
			return L`<table class="threshold-groups">
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Interval</th>
                        <th>n</th>
                        <th>Custom title</th>
                    </tr>
                </thead>
                <tbody>
                    ${r.map((e) => L`
                            <tr>
                                <td>
                                    <span
                                        class="group-color"
                                        style="background-color: ${p_[e.index]}"
                                    ></span>
                                    ${e.name}
                                </td>
                                <td>${e.interval}</td>
                                <td>${e.n}</td>
                                <td>
                                    <input
                                        .value=${this.#n(e.index)}
                                        type="text"
                                        placeholder="Defaults to interval"
                                        @input=${(t) => this.#o(t, e.index)}
                                    />
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>`;
		})()}` : I}
        </div>`;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Group", () => this.#d(), {
			iconDef: Yd,
			isPrimary: !0
		})];
	}
	#d() {
		if (!this.thresholds.length) throw Error("At least one threshold is required.");
		let e;
		try {
			e = this.#u();
		} catch (e) {
			return this.validationError = e.message, this.requestUpdate(), !0;
		}
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.groupByThresholds({
			attribute: this.attributeInfo.attribute,
			thresholds: this.thresholds,
			...e ? { groupTitles: e } : {}
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-group-by-thresholds-dialog", D_);
function O_(e, t) {
	return J("gs-group-by-thresholds-dialog", (n) => {
		n.thresholds = [], n.groupTitles = [""], n.validationError = void 0, n.attributeInfo = e, n.sampleView = t, n.values = xc(e, t.leafSamples, t.sampleHierarchy);
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/retainFirstNCategoriesDialog.js
var k_ = class extends q {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		n: { type: Number }
	};
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.n = 5;
	}
	firstUpdated() {
		super.firstUpdated?.();
		let e = this.attributeInfo?.title ?? "attribute";
		this.dialogTitle = L`Retain first n categories of <em>${e}</em>`;
	}
	renderBody() {
		let e = this.attributeInfo?.title ?? "attribute";
		return L`
            <div class="gs-alert info">
                ${K(rf).node[0]}
                <span>
                    Retain all samples from the first distinct
                    <em>${e}</em> values in the current sample order. Sort
                    samples first to control which values come first.
                </span>
            </div>
            <div class="gs-form-group">
                <label>Number of categories to retain:</label>
                <input
                    autofocus
                    type="number"
                    min="1"
                    .valueAsNumber=${this.n}
                    @change=${e_((e) => {
			this.n = e.valueAsNumber;
		})}
                />
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => {
			this.finish({ ok: !1 });
		}), this.makeButton("Retain", () => this.#e(), {
			iconDef: V,
			isPrimary: !0
		})];
	}
	#e() {
		try {
			this.sampleView.dispatchAttributeAction(this.sampleView.actions.retainFirstNCategories({
				attribute: this.attributeInfo.attribute,
				n: this.n
			})), this.finish({
				ok: !0,
				data: { n: this.n }
			});
		} catch (e) {
			console.warn(e), this.finish({
				ok: !1,
				reason: "error"
			});
		}
	}
};
customElements.define("gs-retain-first-n-categories-dialog", k_);
function A_(e, t) {
	return J("gs-retain-first-n-categories-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t;
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/retainCategoriesByAttributeDialog.js
var j_ = class extends q {
	static properties = {
		...super.properties,
		categoryAttributeInfo: {},
		conditionAttributeInfo: {},
		sampleView: {},
		operator: {},
		operand: {},
		values: {},
		required: {}
	};
	static styles = [...super.styles, o`
            .retain-categories-form {
                width: 25em;
            }

            .gs-form-group {
                .requirement-row {
                    margin-top: var(--gs-basic-spacing);
                    display: grid;
                    gap: 0.2em;

                    label {
                        margin-bottom: 0;
                    }
                }
            }
        `];
	constructor() {
		super(), this.categoryAttributeInfo = null, this.conditionAttributeInfo = null, this.sampleView = null, this.operator = "gt", this.operand = void 0, this.values = [], this.required = "any";
	}
	willUpdate(e) {
		(e.has("categoryAttributeInfo") || e.has("conditionAttributeInfo")) && (this.dialogTitle = "Retain categories by condition");
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		return L`<div class="gs-form-group retain-categories-form">
            <p>
                Retain all ${this.categoryAttributeInfo.title} categories where
                ${this.conditionAttributeInfo.type === "quantitative" ? "at least one sample has" : "samples have"}
                ${this.conditionAttributeInfo.title} matching:
            </p>
            ${this.conditionAttributeInfo.type === "quantitative" ? this.#t() : this.#n()}
        </div>`;
	}
	#t() {
		return L`<gs-threshold-comparison-input
            autofocus
            .values=${xc(this.conditionAttributeInfo, this.sampleView.leafSamples, this.sampleView.sampleHierarchy)}
            .operator=${this.operator}
            .operand=${this.operand}
            @change=${(e) => this.#e(e)}
        ></gs-threshold-comparison-input>`;
	}
	#n() {
		return L`
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.#a()}
                .selectedValues=${this.values}
                .selectedItemName=${"values"}
                .itemMarker=${this.#o()}
                @change=${(e) => {
			this.values = e.values;
		}}
            ></gs-searchable-checkbox-list>
            <div class="requirement-row">
                <label>
                    <input
                        type="radio"
                        name="required"
                        value="any"
                        .checked=${this.required === "any"}
                        @change=${() => {
			this.required = "any";
		}}
                    />
                    Any selected value exists
                </label>
                <label>
                    <input
                        type="radio"
                        name="required"
                        value="all"
                        .checked=${this.required === "all"}
                        @change=${() => {
			this.required = "all";
		}}
                    />
                    All selected values exist
                </label>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#i(), {
			iconDef: V,
			isPrimary: !0,
			disabled: this.#r()
		})];
	}
	#r() {
		return this.conditionAttributeInfo?.type === "quantitative" ? !y_(this.operand) : this.values.length === 0;
	}
	#i() {
		let e;
		if (this.conditionAttributeInfo.type === "quantitative") {
			if (!y_(this.operand)) throw Error("Quantitative category condition is missing a value.");
			e = {
				attribute: this.conditionAttributeInfo.attribute,
				operator: this.operator,
				operand: this.operand
			};
		} else e = {
			attribute: this.conditionAttributeInfo.attribute,
			operator: "in",
			values: this.values,
			required: this.required
		};
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.retainCategoriesByAttribute({
			attribute: this.categoryAttributeInfo.attribute,
			condition: e
		})), this.finish({ ok: !0 });
	}
	#a() {
		return N_(this.conditionAttributeInfo, this.sampleView).map((e) => ({
			value: e,
			label: `${e}`,
			searchText: `${e}`.toLowerCase()
		}));
	}
	#o() {
		let e = this.conditionAttributeInfo.scale;
		return e ? (t) => L`<span
                class="color"
                style=${n({ backgroundColor: e(t).toString() })}
            ></span>` : () => I;
	}
};
customElements.define("gs-retain-categories-by-attribute-dialog", j_);
function M_(e, t, n) {
	return J("gs-retain-categories-by-attribute-dialog", (r) => {
		r.categoryAttributeInfo = e, r.conditionAttributeInfo = t, r.sampleView = n, r.operator = "gt", r.operand = void 0, r.values = [], r.required = "any";
	});
}
function N_(e, t) {
	let n = e.scale?.domain?.();
	return Array.isArray(n) ? n.filter((n) => P_(e, t).has(n)) : Array.from(P_(e, t));
}
function P_(e, t) {
	return new Set(xc(e, t.leafSamples, t.sampleHierarchy));
}
//#endregion
//#region ../../node_modules/lit-html/directives/map.js
function* F_(e, t) {
	if (e !== void 0) {
		let n = 0;
		for (let r of e) yield t(r, n++);
	}
}
//#endregion
//#region ../../node_modules/lit-html/directives/join.js
function* I_(e, t) {
	let n = typeof t == "function";
	if (e !== void 0) {
		let r = -1;
		for (let i of e) r > -1 && (yield n ? t(r) : t), r++, yield i;
	}
}
//#endregion
//#region ../app/src/sampleView/attributeFormatting.js
function L_(e) {
	return e.shortTitle ? L`<em class="attribute">${e.shortTitle}</em>` : e.emphasizedName;
}
//#endregion
//#region ../app/src/sampleView/state/actionInfo.js
var R_ = rt(".4"), z_ = {
	lt: "<",
	lte: "≤",
	eq: "=",
	gte: "≥",
	gt: ">"
};
function B_(e, t = !0) {
	let n = Array.from(e, (e, t) => L`${t > 0 ? ", " : ""}<strong>${e}</strong>`);
	return t ? L`{${n}}` : L`${n}`;
}
function V_(e) {
	let t = e.slice(0, 3).map((e) => L`<em>${e}</em>`);
	return t.length === 1 ? L`${t[0]}` : t.length === 2 ? L`${t[0]} and ${t[1]}` : L`${t[0]}, ${t[1]}, and ${t[2]}`;
}
var H_ = {
	setSamples: ({ template: e }) => ({
		...e,
		title: "Set samples",
		icon: Cf
	}),
	addMetadata: ({ template: e, payload: t }) => ({
		...e,
		title: t.replace ? "Set metadata" : "Add metadata",
		icon: Rd
	}),
	deriveMetadata: ({ template: e, payload: t, attributeTitle: n }) => {
		let r = t.groupPath ? t.groupPath + "/" + t.name : t.name, i = n ?? "attribute";
		return {
			...e,
			title: "Add derived metadata",
			provenanceTitle: L`Add derived metadata
                <strong>${r}</strong> from ${i}`,
			icon: Rd
		};
	},
	addMetadataFromSource: ({ template: e, payload: t }) => {
		let n = Array.isArray(t.columnIds) ? t.columnIds : [], r = t.sourceId ? L` from <strong>${t.sourceId}</strong> source` : "", i = n.length === 1 ? "attribute" : "attributes", a = n.length > 0 && n.length <= 3 ? V_(n) : L`<strong>${n.length}</strong> ${i}`;
		return {
			...e,
			title: "Import metadata from source",
			provenanceTitle: L`Import ${a}${r}`,
			icon: Rd
		};
	},
	sortBy: ({ payload: e, template: t, attributeTitle: n }) => {
		let r = e.order ?? "descending";
		return {
			...t,
			title: "Sort " + r,
			provenanceTitle: L` Sort by ${n}, ${r} `,
			icon: r === "ascending" ? df : Jd
		};
	},
	retainFirstOfEach: ({ template: e, attributeName: t, attributeTitle: n }) => ({
		...e,
		title: L` Retain the first sample for each ${t} `,
		provenanceTitle: L`
            Retain the first sample for each ${n}
        `,
		icon: mf
	}),
	retainFirstNCategories: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => ({
		...t,
		title: L`
            Retain first <strong>n</strong> categories of ${n}...
        `,
		provenanceTitle: L`
            Retain first <strong>${e.n}</strong> categories of
            ${r}
        `,
		icon: mf
	}),
	filterByNominal: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => {
		let i = e.values, a = (t) => L`
            ${e.remove ? "Remove" : "Retain"} samples having
            ${i[0] === void 0 || i[0] === null ? L` undefined ${t} ` : L`${t}
                  ${i.length > 1 ? L`in ${B_(i)}` : L`<span class="operator">=</span>
                            <strong>${i[0]}</strong>`} `}
        `;
		return {
			...t,
			title: a(n),
			provenanceTitle: a(r),
			icon: e.remove ? Pd : V
		};
	},
	filterByQuantitative: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => {
		let i = (t) => L`
            Retain samples having ${t}
            <span class="operator"
                >${z_[e.operator]}</span
            >
            <strong>${R_(e.operand)}</strong>
        `;
		return {
			...t,
			title: i(n),
			provenanceTitle: i(r),
			icon: V
		};
	},
	retainCategoriesByAttribute: ({ payload: e, template: t, attributeName: n, attributeTitle: r, conditionAttributeName: i, conditionAttributeTitle: a }) => {
		let o = e.condition, s;
		return s = o.operator === "in" && o.required === "all" ? (e, t) => L`
                Retain ${e} values where samples include all ${t}
                values in ${B_(o.values)}
            ` : (e, t) => L`
                Retain ${e} values where any sample has ${t}
                ${U_(o)}
            `, {
			...t,
			title: s(n, i),
			provenanceTitle: s(r, a),
			icon: V
		};
	},
	removeUndefined: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Remove samples having missing attribute",
		provenanceTitle: L`
            Remove samples having missing ${t}
        `,
		icon: Pd
	}),
	groupCustomCategories: ({ payload: e, template: t, attributeTitle: n }) => {
		let r = e.groups, i = L`Create custom groups based on
        ${n}.
        ${F_(Object.entries(r), ([e, t], n) => L`${n > 0 ? ", " : ""}<strong>${e}</strong> =
                    ${B_(t)}`)}`;
		return {
			...t,
			title: "Group arbitrarily...",
			provenanceTitle: i,
			icon: Yd
		};
	},
	groupByNominal: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Group by",
		provenanceTitle: L` Group by ${t} `,
		icon: Yd
	}),
	groupToQuartiles: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Group by quartiles",
		provenanceTitle: L` Group by quartiles on ${t} `,
		icon: Yd
	}),
	groupByThresholds: ({ payload: e, template: t, attributeTitle: n }) => ({
		...t,
		title: "Group by thresholds",
		provenanceTitle: L`
            Group by thresholds
            ${B_(e.thresholds.map((e) => `${z_[e.operator]} ${e.operand}`))}
            ${e.groupTitles ? L` as
                      ${B_(e.groupTitles)}` : ""}
            on ${n}
        `,
		icon: Yd
	}),
	removeGroup: ({ payload: e }) => ({
		title: "Remove group",
		provenanceTitle: L`
            Remove group
            ${I_(e.path.map((e) => L`<strong>${e}</strong>`), " / ")}
        `,
		icon: Pd
	}),
	retainGroupsByRank: ({ payload: e }) => {
		let t = e.order === "descending" ? "largest" : "smallest";
		return {
			title: "Retain top/bottom-k groups by size",
			provenanceTitle: L`
                Retain the
                <strong>${e.limit}</strong>
                <strong>${t}</strong>
                groups by size at level
                <strong>${e.level}</strong>
            `,
			icon: V
		};
	},
	retainGroupsBySize: ({ payload: e }) => ({
		title: "Retain groups by size threshold",
		provenanceTitle: L`
            Retain groups at level
            <strong>${e.level}</strong>
            where size
            <span class="operator"
                >${z_[e.operator]}</span
            >
            <strong>${R_(e.operand)}</strong>
        `,
		icon: V
	}),
	ungroup: ({ payload: e }) => ({
		title: "Ungroup",
		provenanceTitle: L`
            Ungroup from level
            <strong>${e.level}</strong>
        `,
		icon: Yd
	}),
	retainMatched: ({ template: e, attributeName: t, attributeTitle: n }) => ({
		...e,
		title: "Retain values present in all groups",
		provenanceTitle: L`
            Retain ${n} values present in all groups
        `,
		icon: V
	})
};
function U_(e) {
	return e.operator === "in" ? L`in ${B_(e.values)}` : L`
            <span class="operator">${z_[e.operator]}</span>
            <strong>${R_(e.operand)}</strong>
        `;
}
function W_(e, t) {
	if (!e.type.startsWith("sampleView")) return;
	let n = e.payload && typeof e.payload == "object" ? e.payload : {}, r = (e) => {
		if (!e) return {};
		try {
			let n = t(e), r = e && typeof e == "object" && "specifier" in e && typeof e.specifier == "string" ? L` <em>${e.specifier}</em> ` : void 0, i = n ? L_(n) : r;
			return {
				attributeInfo: n,
				attributeName: i,
				attributeTitle: n?.title ?? i
			};
		} catch {
			let t = e && typeof e == "object" && "specifier" in e && typeof e.specifier == "string" ? L` <em>${e.specifier}</em> ` : void 0;
			return {
				attributeInfo: void 0,
				attributeName: t,
				attributeTitle: t
			};
		}
	}, { attributeName: i, attributeTitle: a } = r("attribute" in n && n.attribute ? n.attribute : null), { attributeName: o, attributeTitle: s } = r("condition" in n && n.condition && typeof n.condition == "object" && "attribute" in n.condition ? n.condition.attribute : null), c = { attributeName: i }, l = e.type.substring(tc.length + 1), u = H_[l];
	return u ? u({
		payload: n,
		template: c,
		attributeName: i,
		attributeTitle: a,
		conditionAttributeName: o,
		conditionAttributeTitle: s
	}) : {
		...c,
		title: l,
		provenanceTitle: l,
		icon: Xd
	};
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/createCustomGroupsDialog.js
var G_ = o`
    .group-arbitrarily-form {
        span.na {
            color: gray;
            font-style: italic;
            font-size: 90%;
        }

        span.color {
            display: inline-block;
            width: 0.7em;
            height: 1em;
            margin-right: 0.7em;
        }

        div.table {
            color: var(--form-control-color);
            border: var(--form-control-border);
            border-radius: var(--form-control-border-radius);
            overflow-x: auto;
            max-height: 20em;

            padding: 0.375em 0.75em;
            padding-top: 0;

            margin: 0;

            table {
                position: relative;
                border-collapse: collapse;
            }

            td:first-child {
                padding-right: 0.7em;
            }

            th {
                text-align: left;
                background: white;
                background: linear-gradient(
                    rgba(255, 255, 255, 1) 0%,
                    rgba(253, 253, 255, 1) 90%,
                    rgba(255, 255, 255, 0) 100%
                );

                position: sticky;
                top: 0;

                padding-top: 0.55em;
                padding-bottom: 0.375em;
            }
        }

        &.gs-form-group select {
            padding-top: 0.1em;
            padding-bottom: 0.1em;
        }
    }
`, K_ = class extends q {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		values: {},
		groups: {}
	};
	static styles = [...super.styles, G_];
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.values = [], this.groups = {};
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this.dialogTitle = L`Create custom groups using
                <em>${this.attributeInfo.name}</em>`);
	}
	#e(e, t) {
		for (let [t, n] of Object.entries(this.groups)) if (n.includes(e)) {
			let r = n.indexOf(e);
			n.splice(r, 1), n.length === 0 && delete this.groups[t];
		}
		t && (t in this.groups ? this.groups[t].push(e) : this.groups[t] = [e], this.requestUpdate());
	}
	#t(e, t) {
		let n = "", r = (e) => n = e.target.value;
		Y(L`<div class="gs-form-group">
                <input
                    type="text"
                    id="group-name"
                    @change=${r}
                    @keydown=${r}
                />
            </div>`, {
			confirm: !0,
			title: "Group name"
		}).then((r) => {
			n = n.trim(), r && n.length > 0 ? this.#e(e, n) : t && (t.value = ""), t?.focus();
		});
	}
	#n(e, t = "", n = "") {
		let r = L` <p>
                Select a large number of ${e} by pasting them into the text
                area below. The ${e} should be separated by a newline.
            </p>
            <div class="gs-form-group">
                <label for="paste-group-name">Group name</label>
                <input
                    type="text"
                    id="paste-group-name"
                    placeholder="New or existing group name"
                    .value=${t}
                    required
                    @change=${(e) => t = e.target.value}
                />

                <label for="paste-group-categories">${Y_(e)}</label>
                <textarea
                    id="paste-group-categories"
                    placeholder="Type or paste ${e} here, one per line"
                    .value=${n}
                    required
                    rows="8"
                    @change=${(e) => n = e.target.value}
                ></textarea>
            </div>`, i = async () => {
			if (t.trim().length === 0) return await Y("Please enter a group name.", {
				title: "There's a problem",
				type: "warning"
			}), !0;
			let r = n.split(/[\r\n]+/g).map((e) => e.trim()).filter((e) => e.length > 0), i = /* @__PURE__ */ new Set();
			for (let e of r) this.values.includes(e) || i.add(e);
			if (i.size > 0) return await Y(L`The following ${e} were not found:
                    ${B_(i, !1)}`, {
				title: "There's a problem",
				type: "warning"
			}), !0;
			for (let e of r) this.#e(e, t);
		};
		Y(r, {
			title: `Paste ${e}`,
			confirm: !0
		}).then(async (r) => {
			r && await i() && this.#n(e, t, n);
		});
	}
	#r(e, t) {
		let n = t.target, r = n.value;
		r === "__newGroup__" ? this.#t(e, n) : this.#e(e, r);
	}
	renderBody() {
		let e = this.attributeInfo, t = e.type == "identifier" ? "Identifier" : "Category", r = e.scale, i = r ? (e) => L`<span
                      class="color"
                      style=${n({ backgroundColor: r(e)?.toString() ?? "inherit" })}
                  ></span>` : () => I, a = to((e) => e, this.groups), o = Object.keys(this.groups);
		return L`
            <div class="gs-alert info">
                ${K(rf).node[0]}
                <span>
                    Define custom groups by collecting multiple categories or
                    identifiers under a single label. Each category or
                    identifier you assign determines how samples are grouped.
                </span>
            </div>
            <div class="gs-form-group group-arbitrarily-form">
                <div class="table">
                    <table>
                        <tr>
                            <th>${t}</th>
                            <th>Group</th>
                        </tr>
                        ${F_(this.values, (e) => {
			let t = a(e);
			return L`<tr>
                <td>
                    ${e == null ? L`<span class="na">NA</span>` : L`${i(e)}${e}`}
                </td>
                <td>
                    <select
                        @change=${(t) => this.#r(e, t)}
                        @keydown=${(e) => e.stopPropagation()}
                    >
                        <option .selected=${!t} value="">
                            - No group -
                        </option>
                        ${F_(o, (e) => L`<option
                                    .selected=${e === t}
                                    value=${e}
                                >
                                    ${e}
                                </option>`)}
                        <hr />
                        <option value="__newGroup__">Create new group</option>
                    </select>
                </td>
            </tr>`;
		})}
                    </table>
                </div>
            </div>
        `;
	}
	renderButtons() {
		let e = this.attributeInfo.type == "identifier" ? "identifiers" : "categories";
		return [
			this.makeButton("Paste " + e, () => (this.#n(e), !0), { iconDef: Ld }),
			this.makeButton("Cancel", () => this.finish({ ok: !1 })),
			this.makeButton("Group", () => this.#i(), {
				iconDef: Yd,
				isPrimary: !0
			})
		];
	}
	#i() {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.groupCustomCategories({
			attribute: this.attributeInfo.attribute,
			groups: this.groups
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-create-custom-groups-dialog", K_);
function q_(e, t) {
	return J("gs-create-custom-groups-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t, n.values = J_(e, t.leafSamples, t.sampleHierarchy), n.groups = {};
	});
}
function J_(e, t, n) {
	let r = e.accessor, i = new Set(t.map((e) => r(e, n)));
	return Array.from(i).sort();
}
function Y_(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var X_ = Math.min, Z_ = Math.max, Q_ = Math.round, $_ = Math.floor, ev = (e) => ({
	x: e,
	y: e
}), tv = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function nv(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function rv(e) {
	return e.split("-")[0];
}
function iv(e) {
	return e.split("-")[1];
}
function av(e) {
	return e === "x" ? "y" : "x";
}
function ov(e) {
	return e === "y" ? "height" : "width";
}
function sv(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function cv(e) {
	return av(sv(e));
}
function lv(e, t, n) {
	n === void 0 && (n = !1);
	let r = iv(e), i = cv(e), a = ov(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = vv(o)), [o, vv(o)];
}
function uv(e) {
	let t = vv(e);
	return [
		dv(e),
		t,
		dv(t)
	];
}
function dv(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var fv = ["left", "right"], pv = ["right", "left"], mv = ["top", "bottom"], hv = ["bottom", "top"];
function gv(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? pv : fv : t ? fv : pv;
		case "left":
		case "right": return t ? mv : hv;
		default: return [];
	}
}
function _v(e, t, n, r) {
	let i = iv(e), a = gv(rv(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(dv)))), a;
}
function vv(e) {
	let t = rv(e);
	return tv[t] + e.slice(t.length);
}
function yv(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function bv(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : yv(e);
}
function xv(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Sv(e, t, n) {
	let { reference: r, floating: i } = e, a = sv(t), o = cv(t), s = ov(o), c = rv(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (iv(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Cv(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = nv(t, e), p = bv(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = xv(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = xv(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var wv = 50, Tv = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Cv
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Sv(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < wv && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Sv(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ev = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = nv(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = rv(r), _ = sv(o), v = rv(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [vv(o)] : uv(o)), x = p !== "none";
			!d && x && b.push(..._v(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = lv(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== sv(t)) || T.every((e) => sv(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = sv(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, Dv = /*#__PURE__*/ new Set(["left", "top"]);
async function Ov(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = rv(n), s = iv(n), c = sv(n) === "y", l = Dv.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = nv(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var kv = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Ov(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
};
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Av() {
	return typeof window < "u";
}
function jv(e) {
	return Pv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mv(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nv(e) {
	return ((Pv(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Pv(e) {
	return Av() ? e instanceof Node || e instanceof Mv(e).Node : !1;
}
function Fv(e) {
	return Av() ? e instanceof Element || e instanceof Mv(e).Element : !1;
}
function Iv(e) {
	return Av() ? e instanceof HTMLElement || e instanceof Mv(e).HTMLElement : !1;
}
function Lv(e) {
	return !Av() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mv(e).ShadowRoot;
}
function Rv(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Yv(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function zv(e) {
	return /^(table|td|th)$/.test(jv(e));
}
function Bv(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Vv = /transform|translate|scale|rotate|perspective|filter/, Hv = /paint|layout|strict|content/, Uv = (e) => !!e && e !== "none", Wv;
function Gv(e) {
	let t = Fv(e) ? Yv(e) : e;
	return Uv(t.transform) || Uv(t.translate) || Uv(t.scale) || Uv(t.rotate) || Uv(t.perspective) || !qv() && (Uv(t.backdropFilter) || Uv(t.filter)) || Vv.test(t.willChange || "") || Hv.test(t.contain || "");
}
function Kv(e) {
	let t = Zv(e);
	for (; Iv(t) && !Jv(t);) {
		if (Gv(t)) return t;
		if (Bv(t)) return null;
		t = Zv(t);
	}
	return null;
}
function qv() {
	return Wv ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Wv;
}
function Jv(e) {
	return /^(html|body|#document)$/.test(jv(e));
}
function Yv(e) {
	return Mv(e).getComputedStyle(e);
}
function Xv(e) {
	return Fv(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Zv(e) {
	if (jv(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Lv(e) && e.host || Nv(e);
	return Lv(t) ? t.host : t;
}
function Qv(e) {
	let t = Zv(e);
	return Jv(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Iv(t) && Rv(t) ? t : Qv(t);
}
function $v(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Qv(e), i = r === e.ownerDocument?.body, a = Mv(r);
	if (i) {
		let e = ey(a);
		return t.concat(a, a.visualViewport || [], Rv(r) ? r : [], e && n ? $v(e) : []);
	} else return t.concat(r, $v(r, [], n));
}
function ey(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ty(e) {
	let t = Yv(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Iv(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Q_(n) !== a || Q_(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ny(e) {
	return Fv(e) ? e : e.contextElement;
}
function ry(e) {
	let t = ny(e);
	if (!Iv(t)) return ev(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ty(t), o = (a ? Q_(n.width) : n.width) / r, s = (a ? Q_(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var iy = /*#__PURE__*/ ev(0);
function ay(e) {
	let t = Mv(e);
	return !qv() || !t.visualViewport ? iy : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function oy(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Mv(e) ? !1 : t;
}
function sy(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ny(e), o = ev(1);
	t && (r ? Fv(r) && (o = ry(r)) : o = ry(e));
	let s = oy(a, n, r) ? ay(a) : ev(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Mv(a), t = r && Fv(r) ? Mv(r) : r, n = e, i = ey(n);
		for (; i && r && t !== n;) {
			let e = ry(i), t = i.getBoundingClientRect(), r = Yv(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Mv(i), i = ey(n);
		}
	}
	return xv({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function cy(e, t) {
	let n = Xv(e).scrollLeft;
	return t ? t.left + n : sy(Nv(e)).left + n;
}
function ly(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - cy(e, n),
		y: n.top + t.scrollTop
	};
}
function uy(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Nv(r), s = t ? Bv(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = ev(1), u = ev(0), d = Iv(r);
	if ((d || !d && !a) && ((jv(r) !== "body" || Rv(o)) && (c = Xv(r)), d)) {
		let e = sy(r);
		l = ry(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? ly(o, c) : ev(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function dy(e) {
	return Array.from(e.getClientRects());
}
function fy(e) {
	let t = Nv(e), n = Xv(e), r = e.ownerDocument.body, i = Z_(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Z_(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + cy(e), s = -n.scrollTop;
	return Yv(r).direction === "rtl" && (o += Z_(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var py = 25;
function my(e, t) {
	let n = Mv(e), r = Nv(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = qv();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = cy(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= py && (a -= o);
	} else l <= py && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function hy(e, t) {
	let n = sy(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Iv(e) ? ry(e) : ev(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function gy(e, t, n) {
	let r;
	if (t === "viewport") r = my(e, n);
	else if (t === "document") r = fy(Nv(e));
	else if (Fv(t)) r = hy(t, n);
	else {
		let n = ay(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return xv(r);
}
function _y(e, t) {
	let n = Zv(e);
	return n === t || !Fv(n) || Jv(n) ? !1 : Yv(n).position === "fixed" || _y(n, t);
}
function vy(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = $v(e, [], !1).filter((e) => Fv(e) && jv(e) !== "body"), i = null, a = Yv(e).position === "fixed", o = a ? Zv(e) : e;
	for (; Fv(o) && !Jv(o);) {
		let t = Yv(o), n = Gv(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Rv(o) && !n && _y(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Zv(o);
	}
	return t.set(e, r), r;
}
function yy(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Bv(t) ? [] : vy(t, this._c) : [].concat(n), r], o = gy(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = gy(t, a[e], i);
		s = Z_(n.top, s), c = X_(n.right, c), l = X_(n.bottom, l), u = Z_(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function by(e) {
	let { width: t, height: n } = ty(e);
	return {
		width: t,
		height: n
	};
}
function xy(e, t, n) {
	let r = Iv(t), i = Nv(t), a = n === "fixed", o = sy(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = ev(0);
	function l() {
		c.x = cy(i);
	}
	if (r || !r && !a) if ((jv(t) !== "body" || Rv(i)) && (s = Xv(t)), r) {
		let e = sy(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? ly(i, s) : ev(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Sy(e) {
	return Yv(e).position === "static";
}
function Cy(e, t) {
	if (!Iv(e) || Yv(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Nv(e) === n && (n = n.ownerDocument.body), n;
}
function wy(e, t) {
	let n = Mv(e);
	if (Bv(e)) return n;
	if (!Iv(e)) {
		let t = Zv(e);
		for (; t && !Jv(t);) {
			if (Fv(t) && !Sy(t)) return t;
			t = Zv(t);
		}
		return n;
	}
	let r = Cy(e, t);
	for (; r && zv(r) && Sy(r);) r = Cy(r, t);
	return r && Jv(r) && Sy(r) && !Gv(r) ? n : r || Kv(e) || n;
}
var Ty = async function(e) {
	let t = this.getOffsetParent || wy, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: xy(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ey(e) {
	return Yv(e).direction === "rtl";
}
var Dy = {
	convertOffsetParentRelativeRectToViewportRelativeRect: uy,
	getDocumentElement: Nv,
	getClippingRect: yy,
	getOffsetParent: wy,
	getElementRects: Ty,
	getClientRects: dy,
	getDimensions: by,
	getScale: ry,
	isElement: Fv,
	isRTL: Ey
};
function Oy(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ky(e, t) {
	let n = null, r, i = Nv(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = $_(d), h = $_(i.clientWidth - (u + f)), g = $_(i.clientHeight - (d + p)), _ = $_(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Z_(0, X_(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Oy(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Ay(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ny(e), u = i || a ? [...l ? $v(l) : [], ...t ? $v(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ky(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? sy(e) : null;
	c && g();
	function g() {
		let t = sy(e);
		h && !Oy(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var jy = kv, My = Ev, Ny = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Dy,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Tv(e, t, {
		...i,
		platform: a
	});
}, Py, Fy = [], Iy = he((e) => e(), 150, !1), Ly = { type: "divider" };
function Ry(e) {
	if (e?.type == "contextmenu") {
		e.preventDefault();
		return;
	}
	Py && (Py.remove(), Py = void 0, document.body.classList.remove(de), document.body.classList.remove(Te));
}
function zy(e) {
	if (!(e < 1)) {
		for (let t = e; t < Fy.length; t++) Fy[t]?.remove(), Fy[t] = void 0;
		for (let t of Fy[e - 1].querySelectorAll("li.active")) t.classList.remove("active");
	}
}
var By = () => L`<li class="menu-divider"></li>`, Vy = (e) => L`
    <li class="menu-header">${e.label || "-"}</li>
`, Hy = (e, t) => L`
    <li>
        <div
            class="submenu-item"
            @mouseenter=${(n) => Iy(() => {
	Uy(e, n.target.closest("li"), t + 1), n.stopPropagation();
})}
            @mouseleave=${() => Iy(() => zy(t + 1))}
        >
            ${e.customContent ? e.customContent : L`<span
                      >${e.icon ? K(e.icon).node[0] : I}
                      ${e.label}</span
                  >`}
        </div>
    </li>
`;
async function Uy(e, t, n) {
	try {
		let r = typeof e.submenu == "function" ? e.submenu() : e.submenu;
		if (r instanceof Promise) {
			qy([{ label: "Loading..." }], t, n);
			let e = await r;
			if (!t.isConnected || !t.classList.contains("active")) return;
			qy(e, t, n);
		} else qy(r, t, n);
	} catch {
		if (!t.isConnected) return;
		qy([{ label: "Could not open submenu." }], t, n);
	}
}
var Wy = (e) => L`
    <li>
        <a
            class="choice-item"
            @mouseup=${() => {
	Ry(), e.callback();
}}
        >
            <span
                >${e.icon ? K(e.icon).node[0] : ""} ${e.label}</span
            >
            ${e.shortcut ? L`<span class="kbd-shortcut">${e.shortcut}</span>` : I}
        </a>

        ${e.ellipsisCallback ? L` <a class="menu-ellipsis" @click=${e.ellipsisCallback}>
                  ${K(lf).node[0]}
              </a>` : I}
    </li>
`, Gy = (e) => L`
    <li>
        <span class="disabled-item">
            ${e.icon ? K(e.icon).node[0] : ""}
            ${e.label || "-"}</span
        >
    </li>
`;
function Ky(e, t = 1) {
	switch (e.type) {
		case "divider": return By();
		case "header": return Vy(e);
		default: return e.submenu ? Hy(e, t) : e.customContent ? e.customContent : e.callback ? Wy(e) : Gy(e);
	}
}
function qy(e, t, n) {
	Jy(e, t, n, "right-start"), t.classList.add("active");
}
function Jy(e, t, n, r) {
	let i = document.createElement("ul");
	i.classList.add("gs-context-menu"), i.style.top = "0", i.addEventListener("mouseenter", () => {
		Iy(() => {});
	}), i.addEventListener("mouseup", (e) => e.stopPropagation()), i.addEventListener("click", (e) => e.stopPropagation()), Le(e.map((e) => Ky(e, n)), i), Py.appendChild(i), zy(n), Fy[n] = i, r ??= "right-start";
	let a = !/^(top|bottom)/.test(r);
	Ny(t, i, {
		strategy: "fixed",
		placement: r,
		middleware: n < 1 && a ? [jy(2), My()] : [My()]
	}).then(({ x: e, y: t }) => {
		let n = i.querySelector(":scope > li");
		n && a && (t -= n.getBoundingClientRect().top), i.style.left = `${e}px`, i.style.top = `${t}px`;
	});
}
var Yy;
function Xy() {
	let e = document.body, t = performance.now();
	Py = document.createElement("div"), Py.classList.add("gs-context-menu-backdrop"), Py.addEventListener("click", Ry), Py.addEventListener("contextmenu", Ry), Py.addEventListener("mouseup", () => {
		performance.now() - t > 500 && Ry();
	}, { once: !0 }), e.appendChild(Py), document.body.classList.add(de), document.body.classList.add(Te);
}
function Zy(e, t, n) {
	n ??= "bottom-start", Py && Yy !== t && Ry(), Yy = t, Py ? Le(e.items.map((e) => Ky(e, 0)), Fy[0]) : (Xy(), Jy(e.items, t, 0, n));
}
function Qy(e, t) {
	Zy(e, $y(t), "right-start"), t.preventDefault();
}
function $y(e) {
	return { getBoundingClientRect() {
		return {
			width: 0,
			height: 0,
			x: e.clientX,
			y: e.clientY,
			top: e.clientY,
			left: e.clientX,
			right: e.clientX,
			bottom: e.clientY,
			toJSON: void 0
		};
	} };
}
//#endregion
//#region ../app/src/sampleView/attributeContextMenu.js
var eb = "SAMPLE_ATTRIBUTE", tb = 20;
function nb(e, t, n, r) {
	let i = cc.actions, a = t.attribute, o = r.sampleHierarchy, s = t?.type ?? "identifier", c = [];
	e && c.push({
		label: e,
		type: "header"
	});
	let l = (e, t, n, i) => {
		let a = r.provenance.getActionInfo(e);
		return {
			label: i ?? a.title,
			icon: a.icon,
			callback: t ? void 0 : n ?? (() => r.dispatchAttributeAction(e))
		};
	};
	return c.push({
		icon: qd,
		label: "Sort",
		submenu: [l(i.sortBy({
			attribute: a,
			order: "ascending"
		}), !1, void 0, "Ascending"), l(i.sortBy({
			attribute: a,
			order: "descending"
		}), !1, void 0, "Descending")]
	}), c.push({
		icon: V,
		label: "Filter",
		submenu: (() => {
			let e = [];
			if (s === "quantitative") {
				let r = Number(n);
				if (mb(n) && Number.isFinite(r)) {
					for (let { operator: o, label: s } of rb) e.push(l(i.filterByQuantitative({
						attribute: a,
						operator: o,
						operand: r
					}), !1, void 0, L`${L_(t)}
                            ${s} ${n}`));
					e.push(Ly);
				}
			} else mb(n) && e.push(l(i.filterByNominal({
				attribute: a,
				values: [n]
			}), !1, void 0, L`Retain <strong>${n}</strong>`), l(i.filterByNominal({
				attribute: a,
				remove: !0,
				values: [n]
			}), !1, void 0, L`Remove <strong>${n}</strong>`), Ly);
			if (e.push(l(i.removeUndefined({ attribute: a }), !1, void 0, "Remove missing values")), s != "quantitative" && s != "identifier") {
				let n = ib(t, r);
				n.length && e.push({
					icon: V,
					label: "Retain values based on another attribute",
					submenu: n
				});
			}
			return e.push({
				icon: V,
				label: "Advanced filter...",
				callback: () => S_(t, r)
			}), e;
		})()
	}), c.push({
		icon: Yd,
		label: "Group",
		submenu: (() => {
			let e = [];
			return s == "quantitative" ? e.push(l(i.groupToQuartiles({ attribute: a }), !1, void 0, "By quartiles"), {
				icon: Yd,
				label: "By thresholds...",
				callback: () => O_(t, r)
			}) : (s != "identifier" && e.push(l(i.groupByNominal({ attribute: a }), !1, void 0, L`By ${L_(t)}`)), e.push({
				icon: Yd,
				label: "By custom categories...",
				callback: () => q_(t, r)
			})), e;
		})()
	}), s != "quantitative" && s != "identifier" && c.push({
		icon: mf,
		label: "Retain",
		submenu: [
			{
				label: "By current order",
				type: "header"
			},
			l(i.retainFirstOfEach({ attribute: a }), !1, void 0, L`First sample for each
                        ${L_(t)}`),
			l(i.retainFirstNCategories({
				attribute: a,
				n: void 0
			}), !1, () => A_(t, r), L`First
                            <strong>n</strong> ${L_(t)}
                            values...`),
			Ly,
			l(i.retainMatched({ attribute: a }), !o.groupMetadata.length, void 0, "Values present in all groups")
		]
	}), c;
}
var rb = [
	{
		operator: "lt",
		label: "<"
	},
	{
		operator: "lte",
		label: "≤"
	},
	{
		operator: "eq",
		label: "="
	},
	{
		operator: "gte",
		label: "≥"
	},
	{
		operator: "gt",
		label: ">"
	}
];
function ib(e, t) {
	let n = e.attribute;
	if (n.type !== eb || typeof n.specifier != "string") return [];
	let r = (t.metadataView?.getVisibleAttributeNames() ?? t.sampleHierarchy.sampleMetadata.attributeNames).filter((e) => e !== n.specifier).map((e) => {
		let n = t.compositeAttributeInfoSource.getAttributeInfo({
			type: eb,
			specifier: e
		});
		if (fb(n)) return n;
	}).filter((e) => e);
	return [{
		label: L`Select
            ${L_(e)} using...`,
		type: "header"
	}, ...ab(e, r, t)];
}
function ab(e, t, n) {
	let r = new Map(t.map((e) => [e.name, e])), i = $o(t.map((e) => e.name), "/");
	return Array.from(i.children.values()).map((t) => ob(e, r, t, n));
}
function ob(e, t, n, r) {
	if (n.children.size > 0) return {
		label: n.part,
		submenu: () => Array.from(n.children.values()).map((n) => ob(e, t, n, r))
	};
	let i = t.get(n.path);
	if (!i) throw Error("No attribute info for menu leaf: " + n.path);
	return {
		icon: db(i),
		label: n.part,
		submenu: () => sb(e, i, r)
	};
}
function sb(e, t, n) {
	return [{
		label: L`Retain
            ${L_(e)} values where any
            sample has ${L_(t)}
            matching:`,
		type: "header"
	}, ...cb(e, t, n)];
}
function cb(e, t, n) {
	if (t.type === "quantitative") {
		let r = lb(t).map(({ label: t, condition: r }) => ub(e, n, t, r));
		return r.push({
			label: "Choose custom threshold...",
			callback: () => M_(e, t, n)
		}), r;
	} else {
		let { values: r, availableCount: i, unavailableCount: a } = pb(t, n), o = r.map((r) => ub(e, n, "= " + String(r), {
			attribute: t.attribute,
			operator: "in",
			values: [r]
		}));
		return a > 0 && o.push({
			label: `${a} unavailable omitted`,
			type: "header"
		}), i > r.length && o.push({
			label: `${r.length} of ${i} shown`,
			type: "header"
		}), o.push({
			label: "Choose custom values...",
			callback: () => M_(e, t, n)
		}), o;
	}
}
function lb(e) {
	let t = e.attribute;
	return [
		{
			label: "= 0",
			condition: {
				attribute: t,
				operator: "eq",
				operand: 0
			}
		},
		{
			label: "> 0",
			condition: {
				attribute: t,
				operator: "gt",
				operand: 0
			}
		},
		{
			label: ">= 1",
			condition: {
				attribute: t,
				operator: "gte",
				operand: 1
			}
		}
	];
}
function ub(e, t, n, r) {
	return {
		label: n,
		callback: () => t.dispatchAttributeAction(t.actions.retainCategoriesByAttribute({
			attribute: e.attribute,
			condition: r
		}))
	};
}
function db(e) {
	return e.type === "quantitative" ? xf : hf;
}
function fb(e) {
	return e.type === "quantitative" || e.type === "nominal" || e.type === "ordinal";
}
function pb(e, t) {
	let n = new Set(xc(e, t.leafSamples, t.sampleHierarchy)), r = e.scale?.domain?.();
	if (Array.isArray(r)) {
		let e = r.filter((e) => n.has(e));
		return {
			values: e.slice(0, tb),
			availableCount: e.length,
			unavailableCount: r.length - e.length
		};
	}
	let i = Array.from(n);
	return {
		values: i.slice(0, tb),
		availableCount: i.length,
		unavailableCount: 0
	};
}
function mb(e) {
	return e != null && e !== "" && !(typeof e == "number" && isNaN(e));
}
//#endregion
//#region ../app/src/components/forms/formController.js
var hb = class {
	constructor(e) {
		this._host = e, this._fields = /* @__PURE__ */ new Map(), this._errors = /* @__PURE__ */ new Map(), e.addController(this);
	}
	hostConnected() {}
	hostDisconnected() {}
	defineField(e, t) {
		if (this._fields.has(e)) throw Error("Field already defined: " + e);
		this._fields.set(e, t);
	}
	getValue(e) {
		let t = this.#e(e);
		return this._host[t.valueKey];
	}
	setValue(e, t) {
		let n = this.#e(e);
		this._host[n.valueKey] = t;
	}
	validateField(e) {
		return this.#e(e).validate(this.getValue(e));
	}
	error(e) {
		return this._errors.get(e) || null;
	}
	revalidate(e) {
		let t = this.validateField(e);
		this.#t(e, t);
	}
	getAffectedFields(e) {
		let t = this.#e(e);
		return t.affects ? t.affects : [];
	}
	validateAll() {
		let e = /* @__PURE__ */ new Map();
		for (let t of this._fields.keys()) {
			let n = this.validateField(t);
			n && e.set(t, n);
		}
		return this._errors = e, this._host.requestUpdate(), e.size > 0;
	}
	hasErrors() {
		for (let e of this._fields.keys()) if (this.validateField(e)) return !0;
		return !1;
	}
	reset() {
		this._errors = /* @__PURE__ */ new Map(), this._host.requestUpdate();
	}
	feedback(e) {
		let t = this.error(e);
		return t ? L`<div class="invalid-feedback">${t}</div>` : I;
	}
	#e(e) {
		let t = this._fields.get(e);
		if (t) return t;
		throw Error("Unknown field: " + e);
	}
	#t(e, t) {
		let n = new Map(this._errors);
		t ? n.set(e, t) : n.delete(e), this._errors = n, this._host.requestUpdate();
	}
}, gb = re(class extends ke {
	constructor(e) {
		if (super(e), e.type !== ye.ELEMENT) throw Error("formField must be used on an element part.");
		this._abortController = null;
	}
	render(e, t, n) {
		return I;
	}
	update(e, t) {
		let [n, r, i] = t, a = i?.validateOnInput === "always" ? "always" : "onError", o = e.element;
		if (!(o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement)) throw Error("formField requires an input, textarea, or select element.");
		let s = n.getValue(r);
		o.value !== s && (o.value = s);
		let c = () => {
			n.error(r) ? (o.classList.add("is-invalid"), o.setAttribute("aria-invalid", "true")) : (o.classList.remove("is-invalid"), o.setAttribute("aria-invalid", "false"));
		};
		return this._abortController && this._abortController.abort(), this._abortController = new AbortController(), o.addEventListener("input", (e) => {
			let t = e.currentTarget;
			n.setValue(r, t.value), (a === "always" || n.error(r)) && n.revalidate(r);
			for (let e of n.getAffectedFields(r)) n.error(e) && n.revalidate(e);
			c();
		}, { signal: this._abortController.signal }), o.addEventListener("blur", () => {
			n.revalidate(r);
			for (let e of n.getAffectedFields(r)) n.revalidate(e);
			c();
		}, { signal: this._abortController.signal }), c(), I;
	}
});
//#endregion
//#region ../app/src/components/dialogs/enterBookmarkDialog.js
function _b(e) {
	if (e != null) {
		let t = String(e).trim();
		if (t.length) return t;
	}
}
var vb = class extends q {
	static properties = {
		...super.properties,
		bookmarkDatabase: {},
		bookmark: {},
		mode: { type: String },
		originalName: {},
		bookmarkName: { state: !0 },
		bookmarkNotes: { state: !0 }
	};
	static styles = [...super.styles, o`
            dialog {
                width: 500px;
            }
        `];
	constructor() {
		super(), this.bookmarkDatabase = null, this.bookmark = null, this.mode = "add", this.originalName = void 0, this.bookmarkName = "", this.bookmarkNotes = "", this.dialogTitle = "", this._form = new hb(this), this._form.defineField("name", {
			valueKey: "bookmarkName",
			validate: () => this.#t()
		}), this._form.defineField("notes", {
			valueKey: "bookmarkNotes",
			validate: () => null
		});
	}
	willUpdate(e) {
		e.has("mode") && (this.dialogTitle = {
			add: "Add bookmark",
			edit: "Edit bookmark",
			share: "Share the current view state as a bookmark"
		}[this.mode] ?? "Bookmark");
	}
	renderBody() {
		let e = this.mode;
		return L`
            ${e == "edit" ? L`<div class="gs-alert warning">
                      ${K(Bd).node[0]} The current
                      visualization state will be updated to the bookmark you
                      are editing.
                  </div>` : void 0}
            ${e == "share" ? L`<div class="gs-alert info">
                      ${K(rf).node[0]}<span
                          >You can add an optional title and notes, which will
                          be shown to the recipient when the bookmark link is
                          opened.</span
                      >
                  </div>` : void 0}

            <div class="gs-form-group">
                <label for="bookmark-title">Title</label>
                <input
                    autofocus
                    id="bookmark-title"
                    type="text"
                    ${gb(this._form, "name")}
                    .placeholder=${e == "share" ? "Add an optional title" : ""}
                />
                ${this._form.feedback("name")}
            </div>

            <div class="gs-form-group">
                <label for="bookmark-notes">Notes (optional)</label>
                <textarea
                    id="bookmark-notes"
                    rows="4"
                    ${gb(this._form, "notes")}
                    .placeholder=${e == "share" ? "... and notes" : ""}
                ></textarea>
                <small
                    >Notes will be shown when the bookmark is loaded. You can
                    use
                    <a
                        href="https://www.markdownguide.org/basic-syntax/"
                        target="_blank"
                        rel="noopener"
                        >markdown</a
                    >
                    for formatting.</small
                >
            </div>
        `;
	}
	renderButtons() {
		let e = this._form.hasErrors();
		return [this.makeCloseButton("Cancel"), this.mode == "share" ? this.makeButton("Make a link", () => this.#e(), {
			iconDef: Ef,
			disabled: e,
			isPrimary: !0
		}) : this.makeButton("Save", () => this.#e(), {
			disabled: e,
			isPrimary: !0
		})];
	}
	async #e() {
		let e = this.bookmark, t = this.mode;
		if (this._form.validateAll()) return !0;
		if (!e) throw Error("Bookmark data is missing.");
		e.name = _b(this.bookmarkName), e.notes = _b(this.bookmarkNotes);
		let n = !0;
		try {
			this.bookmarkDatabase && !(t && e.name == this.originalName) && await this.bookmarkDatabase.get(e.name) && (n = await Y(L`A bookmark with the name
                        <em>${e.name}</em> already exists. It will be
                        overwritten.`, {
				title: "Bookmark already exists",
				confirm: !0,
				type: "warning"
			}));
		} catch (e) {
			console.warn(e);
		}
		if (n) this.finish({ ok: !0 });
		else return !0;
	}
	#t() {
		return this.mode == "share" ? null : this.bookmarkName.trim().length === 0 ? "Name is required." : null;
	}
};
customElements.define("gs-enter-bookmark-dialog", vb);
function yb(e, t, n) {
	return Wg("gs-enter-bookmark-dialog", (r) => {
		r.bookmarkDatabase = e, r.bookmark = t, r.mode = n, r.originalName = t.name, r.bookmarkName = t.name ?? "", r.bookmarkNotes = t.notes ?? "", r._form.reset();
	});
}
//#endregion
//#region ../../node_modules/lz-string/libs/lz-string.js
var bb = /* @__PURE__ */ t(((e, t) => {
	var n = (function() {
		var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r = {};
		function i(e, t) {
			if (!r[e]) {
				r[e] = {};
				for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
			}
			return r[e][t];
		}
		var a = {
			compressToBase64: function(e) {
				if (e == null) return "";
				var n = a._compress(e, 6, function(e) {
					return t.charAt(e);
				});
				switch (n.length % 4) {
					default:
					case 0: return n;
					case 1: return n + "===";
					case 2: return n + "==";
					case 3: return n + "=";
				}
			},
			decompressFromBase64: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32, function(n) {
					return i(t, e.charAt(n));
				});
			},
			compressToUTF16: function(t) {
				return t == null ? "" : a._compress(t, 15, function(t) {
					return e(t + 32);
				}) + " ";
			},
			decompressFromUTF16: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 16384, function(t) {
					return e.charCodeAt(t) - 32;
				});
			},
			compressToUint8Array: function(e) {
				for (var t = a.compress(e), n = new Uint8Array(t.length * 2), r = 0, i = t.length; r < i; r++) {
					var o = t.charCodeAt(r);
					n[r * 2] = o >>> 8, n[r * 2 + 1] = o % 256;
				}
				return n;
			},
			decompressFromUint8Array: function(t) {
				if (t == null) return a.decompress(t);
				for (var n = Array(t.length / 2), r = 0, i = n.length; r < i; r++) n[r] = t[r * 2] * 256 + t[r * 2 + 1];
				var o = [];
				return n.forEach(function(t) {
					o.push(e(t));
				}), a.decompress(o.join(""));
			},
			compressToEncodedURIComponent: function(e) {
				return e == null ? "" : a._compress(e, 6, function(e) {
					return n.charAt(e);
				});
			},
			decompressFromEncodedURIComponent: function(e) {
				return e == null ? "" : e == "" ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function(t) {
					return i(n, e.charAt(t));
				}));
			},
			compress: function(t) {
				return a._compress(t, 16, function(t) {
					return e(t);
				});
			},
			_compress: function(e, t, n) {
				if (e == null) return "";
				var r, i, a = {}, o = {}, s = "", c = "", l = "", u = 2, d = 3, f = 2, p = [], m = 0, h = 0, g;
				for (g = 0; g < e.length; g += 1) if (s = e.charAt(g), Object.prototype.hasOwnProperty.call(a, s) || (a[s] = d++, o[s] = !0), c = l + s, Object.prototype.hasOwnProperty.call(a, c)) l = c;
				else {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++), a[c] = d++, l = String(s);
				}
				if (l !== "") {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++);
				}
				for (i = 2, r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
				for (;;) if (m <<= 1, h == t - 1) {
					p.push(n(m));
					break;
				} else h++;
				return p.join("");
			},
			decompress: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32768, function(t) {
					return e.charCodeAt(t);
				});
			},
			_decompress: function(t, n, r) {
				var i = [], a = 4, o = 4, s = 3, c = "", l = [], u, d, f, p, m, h, g, _ = {
					val: r(0),
					position: n,
					index: 1
				};
				for (u = 0; u < 3; u += 1) i[u] = u;
				for (f = 0, m = 2 ** 2, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
				switch (f) {
					case 0:
						for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 1:
						for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 2: return "";
				}
				for (i[3] = g, d = g, l.push(g);;) {
					if (_.index > t) return "";
					for (f = 0, m = 2 ** s, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
					switch (g = f) {
						case 0:
							for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 1:
							for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 2: return l.join("");
					}
					if (a == 0 && (a = 2 ** s, s++), i[g]) c = i[g];
					else if (g === o) c = d + d.charAt(0);
					else return null;
					l.push(c), i[o++] = d + c.charAt(0), a--, d = c, a == 0 && (a = 2 ** s, s++);
				}
			}
		};
		return a;
	})();
	typeof define == "function" && define.amd ? define(function() {
		return n;
	}) : t !== void 0 && t != null ? t.exports = n : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
		return n;
	});
})), xb = /* @__PURE__ */ t(((e, t) => {
	t.exports = function() {
		if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
		if (typeof Symbol.iterator == "symbol") return !0;
		var e = {}, t = Symbol("test"), n = Object(t);
		if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
		var r = 42;
		for (var i in e[t] = r, e) return !1;
		if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
		var a = Object.getOwnPropertySymbols(e);
		if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
		if (typeof Object.getOwnPropertyDescriptor == "function") {
			var o = Object.getOwnPropertyDescriptor(e, t);
			if (o.value !== r || o.enumerable !== !0) return !1;
		}
		return !0;
	};
})), Sb = /* @__PURE__ */ t(((e, t) => {
	var n = xb();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), Cb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Object;
})), wb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Error;
})), Tb = /* @__PURE__ */ t(((e, t) => {
	t.exports = EvalError;
})), Eb = /* @__PURE__ */ t(((e, t) => {
	t.exports = RangeError;
})), Db = /* @__PURE__ */ t(((e, t) => {
	t.exports = ReferenceError;
})), Ob = /* @__PURE__ */ t(((e, t) => {
	t.exports = SyntaxError;
})), kb = /* @__PURE__ */ t(((e, t) => {
	t.exports = TypeError;
})), Ab = /* @__PURE__ */ t(((e, t) => {
	t.exports = URIError;
})), jb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.abs;
})), Mb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.floor;
})), Nb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.max;
})), Pb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.min;
})), Fb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.pow;
})), Ib = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.round;
})), Lb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), Rb = /* @__PURE__ */ t(((e, t) => {
	var n = Lb();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), zb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), Bb = /* @__PURE__ */ t(((e, t) => {
	var n = zb();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), Vb = /* @__PURE__ */ t(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), Hb = /* @__PURE__ */ t(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = xb();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), Ub = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), Wb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Cb().getPrototypeOf || null;
})), Gb = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype.toString, r = Math.max, i = "[object Function]", a = function(e, t) {
		for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
		for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
		return n;
	}, o = function(e, t) {
		for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
		return n;
	}, s = function(e, t) {
		for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
		return n;
	};
	t.exports = function(e) {
		var t = this;
		if (typeof t != "function" || n.apply(t) !== i) throw TypeError("Function.prototype.bind called on incompatible " + t);
		for (var c = o(arguments, 1), l, u = function() {
			if (this instanceof l) {
				var n = t.apply(this, a(c, arguments));
				return Object(n) === n ? n : this;
			}
			return t.apply(e, a(c, arguments));
		}, d = r(0, t.length - c.length), f = [], p = 0; p < d; p++) f[p] = "$" + p;
		if (l = Function("binder", "return function (" + s(f, ",") + "){ return binder.apply(this,arguments); }")(u), t.prototype) {
			var m = function() {};
			m.prototype = t.prototype, l.prototype = new m(), m.prototype = null;
		}
		return l;
	};
})), Kb = /* @__PURE__ */ t(((e, t) => {
	var n = Gb();
	t.exports = Function.prototype.bind || n;
})), qb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Function.prototype.call;
})), Jb = /* @__PURE__ */ t(((e, t) => {
	t.exports = Function.prototype.apply;
})), Yb = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Xb = /* @__PURE__ */ t(((e, t) => {
	var n = Kb(), r = Jb(), i = qb();
	t.exports = Yb() || n.call(i, r);
})), Zb = /* @__PURE__ */ t(((e, t) => {
	var n = Kb(), r = kb(), i = qb(), a = Xb();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Qb = /* @__PURE__ */ t(((e, t) => {
	var n = Zb(), r = Bb(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" ? function(e) {
		return s(e == null ? e : o(e));
	} : !1;
})), $b = /* @__PURE__ */ t(((e, t) => {
	var n = Ub(), r = Wb(), i = Qb();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), ex = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = Kb().call(n, r);
})), tx = /* @__PURE__ */ t(((e, t) => {
	var n, r = Cb(), i = wb(), a = Tb(), o = Eb(), s = Db(), c = Ob(), l = kb(), u = Ab(), d = jb(), f = Mb(), p = Nb(), m = Pb(), h = Fb(), g = Ib(), _ = Rb(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = Bb(), x = Vb(), S = function() {
		throw new l();
	}, C = b ? function() {
		try {
			return arguments.callee, S;
		} catch {
			try {
				return b(arguments, "callee").get;
			} catch {
				return S;
			}
		}
	}() : S, w = Hb()(), T = $b(), E = Wb(), D = Ub(), O = Jb(), k = qb(), A = {}, ee = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), j = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": A,
		"%AsyncGenerator%": A,
		"%AsyncGeneratorFunction%": A,
		"%AsyncIteratorPrototype%": A,
		"%Atomics%": typeof Atomics > "u" ? n : Atomics,
		"%BigInt%": typeof BigInt > "u" ? n : BigInt,
		"%BigInt64Array%": typeof BigInt64Array > "u" ? n : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array > "u" ? n : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView > "u" ? n : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": i,
		"%eval%": eval,
		"%EvalError%": a,
		"%Float16Array%": typeof Float16Array > "u" ? n : Float16Array,
		"%Float32Array%": typeof Float32Array > "u" ? n : Float32Array,
		"%Float64Array%": typeof Float64Array > "u" ? n : Float64Array,
		"%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? n : FinalizationRegistry,
		"%Function%": v,
		"%GeneratorFunction%": A,
		"%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
		"%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
		"%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": w && T ? T(T([][Symbol.iterator]())) : n,
		"%JSON%": typeof JSON == "object" ? JSON : n,
		"%Map%": typeof Map > "u" ? n : Map,
		"%MapIteratorPrototype%": typeof Map > "u" || !w || !T ? n : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": r,
		"%Object.getOwnPropertyDescriptor%": b,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise > "u" ? n : Promise,
		"%Proxy%": typeof Proxy > "u" ? n : Proxy,
		"%RangeError%": o,
		"%ReferenceError%": s,
		"%Reflect%": typeof Reflect > "u" ? n : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set > "u" ? n : Set,
		"%SetIteratorPrototype%": typeof Set > "u" || !w || !T ? n : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
		"%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": w && T ? T(""[Symbol.iterator]()) : n,
		"%Symbol%": w ? Symbol : n,
		"%SyntaxError%": c,
		"%ThrowTypeError%": C,
		"%TypedArray%": ee,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": k,
		"%Function.prototype.apply%": O,
		"%Object.defineProperty%": x,
		"%Object.getPrototypeOf%": E,
		"%Math.abs%": d,
		"%Math.floor%": f,
		"%Math.max%": p,
		"%Math.min%": m,
		"%Math.pow%": h,
		"%Math.round%": g,
		"%Math.sign%": _,
		"%Reflect.getPrototypeOf%": D
	};
	if (T) try {
		null.error;
	} catch (e) {
		j["%Error.prototype%"] = T(T(e));
	}
	var M = function e(t) {
		var n;
		if (t === "%AsyncFunction%") n = y("async function () {}");
		else if (t === "%GeneratorFunction%") n = y("function* () {}");
		else if (t === "%AsyncGeneratorFunction%") n = y("async function* () {}");
		else if (t === "%AsyncGenerator%") {
			var r = e("%AsyncGeneratorFunction%");
			r && (n = r.prototype);
		} else if (t === "%AsyncIteratorPrototype%") {
			var i = e("%AsyncGenerator%");
			i && T && (n = T(i.prototype));
		}
		return j[t] = n, n;
	}, N = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": [
			"Array",
			"prototype",
			"entries"
		],
		"%ArrayProto_forEach%": [
			"Array",
			"prototype",
			"forEach"
		],
		"%ArrayProto_keys%": [
			"Array",
			"prototype",
			"keys"
		],
		"%ArrayProto_values%": [
			"Array",
			"prototype",
			"values"
		],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype"
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": [
			"GeneratorFunction",
			"prototype",
			"prototype"
		],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": [
			"Object",
			"prototype",
			"toString"
		],
		"%ObjProto_valueOf%": [
			"Object",
			"prototype",
			"valueOf"
		],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": [
			"Promise",
			"prototype",
			"then"
		],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"]
	}, P = Kb(), F = ex(), te = P.call(k, Array.prototype.concat), ne = P.call(O, Array.prototype.splice), re = P.call(k, String.prototype.replace), ie = P.call(k, String.prototype.slice), ae = P.call(k, RegExp.prototype.exec), oe = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, se = /\\(\\)?/g, ce = function(e) {
		var t = ie(e, 0, 1), n = ie(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return re(e, oe, function(e, t, n, i) {
			r[r.length] = n ? re(i, se, "$1") : t || e;
		}), r;
	}, le = function(e, t) {
		var n = e, r;
		if (F(N, n) && (r = N[n], n = "%" + r[0] + "%"), F(j, n)) {
			var i = j[n];
			if (i === A && (i = M(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
			return {
				alias: r,
				name: n,
				value: i
			};
		}
		throw new c("intrinsic " + e + " does not exist!");
	};
	t.exports = function(e, t) {
		if (typeof e != "string" || e.length === 0) throw new l("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof t != "boolean") throw new l("\"allowMissing\" argument must be a boolean");
		if (ae(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = ce(e), r = n.length > 0 ? n[0] : "", i = le("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], ne(n, te([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = ie(p, 0, 1), h = ie(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", F(j, a)) o = j[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = F(o, p), o = o[p];
				f && !s && (j[a] = o);
			}
		}
		return o;
	};
})), nx = /* @__PURE__ */ t(((e, t) => {
	var n = tx(), r = Zb(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), rx = /* @__PURE__ */ t(((e, t) => {
	var n = Sb()(), r = nx()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), ix = /* @__PURE__ */ t(((e, t) => {
	var n = nx(), r = Sb()(), i = ex(), a = Bb(), o;
	if (r) {
		var s = n("RegExp.prototype.exec"), c = {}, l = function() {
			throw c;
		}, u = {
			toString: l,
			valueOf: l
		};
		typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = l), o = function(e) {
			if (!e || typeof e != "object") return !1;
			var t = a(e, "lastIndex");
			if (!(t && i(t, "value"))) return !1;
			try {
				s(e, u);
			} catch (e) {
				return e === c;
			}
		};
	} else {
		var d = n("Object.prototype.toString"), f = "[object RegExp]";
		o = function(e) {
			return !e || typeof e != "object" && typeof e != "function" ? !1 : d(e) === f;
		};
	}
	t.exports = o;
})), ax = /* @__PURE__ */ t(((e, t) => {
	var n = nx(), r = ix(), i = n("RegExp.prototype.exec"), a = kb();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), ox = /* @__PURE__ */ t(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), sx = /* @__PURE__ */ t(((e, t) => {
	var n = nx(), r = ax()(/^\s*(?:function)?\*/), i = Sb()(), a = $b(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = ox();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), cx = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.toString, r = typeof Reflect == "object" && Reflect !== null && Reflect.apply, i, a;
	if (typeof r == "function" && typeof Object.defineProperty == "function") try {
		i = Object.defineProperty({}, "length", { get: function() {
			throw a;
		} }), a = {}, r(function() {
			throw 42;
		}, null, i);
	} catch (e) {
		e !== a && (r = null);
	}
	else r = null;
	var o = /^\s*class\b/, s = function(e) {
		try {
			var t = n.call(e);
			return o.test(t);
		} catch {
			return !1;
		}
	}, c = function(e) {
		try {
			return s(e) ? !1 : (n.call(e), !0);
		} catch {
			return !1;
		}
	}, l = Object.prototype.toString, u = "[object Object]", d = "[object Function]", f = "[object GeneratorFunction]", p = "[object HTMLAllCollection]", m = "[object HTML document.all class]", h = "[object HTMLCollection]", g = typeof Symbol == "function" && !!Symbol.toStringTag, _ = !(0 in [,]), v = function() {
		return !1;
	};
	if (typeof document == "object") {
		var y = document.all;
		l.call(y) === l.call(document.all) && (v = function(e) {
			if ((_ || !e) && (e === void 0 || typeof e == "object")) try {
				var t = l.call(e);
				return (t === p || t === m || t === h || t === u) && e("") == null;
			} catch {}
			return !1;
		});
	}
	t.exports = r ? function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		try {
			r(e, null, i);
		} catch (e) {
			if (e !== a) return !1;
		}
		return !s(e) && c(e);
	} : function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		if (g) return c(e);
		if (s(e)) return !1;
		var t = l.call(e);
		return t !== d && t !== f && !/^\[object HTML/.test(t) ? !1 : c(e);
	};
})), lx = /* @__PURE__ */ t(((e, t) => {
	var n = cx(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
		for (var r = 0, a = e.length; r < a; r++) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	}, o = function(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) n == null ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
	}, s = function(e, t, n) {
		for (var r in e) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	};
	function c(e) {
		return r.call(e) === "[object Array]";
	}
	t.exports = function(e, t, r) {
		if (!n(t)) throw TypeError("iterator must be a function");
		var i;
		arguments.length >= 3 && (i = r), c(e) ? a(e, t, i) : typeof e == "string" ? o(e, t, i) : s(e, t, i);
	};
})), ux = /* @__PURE__ */ t(((e, t) => {
	t.exports = [
		"Float16Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Int16Array",
		"Int32Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array"
	];
})), dx = /* @__PURE__ */ t(((e, t) => {
	var n = ux(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), fx = /* @__PURE__ */ t(((e, t) => {
	var n = Vb(), r = Ob(), i = kb(), a = Bb();
	t.exports = function(e, t, o) {
		if (!e || typeof e != "object" && typeof e != "function") throw new i("`obj` must be an object or a function`");
		if (typeof t != "string" && typeof t != "symbol") throw new i("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new i("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new i("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new i("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new i("`loose`, if provided, must be a boolean");
		var s = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, d = !!a && a(e, t);
		if (n) n(e, t, {
			configurable: l === null && d ? d.configurable : !l,
			enumerable: s === null && d ? d.enumerable : !s,
			value: o,
			writable: c === null && d ? d.writable : !c
		});
		else if (u || !s && !c && !l) e[t] = o;
		else throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
})), px = /* @__PURE__ */ t(((e, t) => {
	var n = Vb(), r = function() {
		return !!n;
	};
	r.hasArrayLengthDefineBug = function() {
		if (!n) return null;
		try {
			return n([], "length", { value: 1 }).length !== 1;
		} catch {
			return !0;
		}
	}, t.exports = r;
})), mx = /* @__PURE__ */ t(((e, t) => {
	var n = tx(), r = fx(), i = px()(), a = Bb(), o = kb(), s = n("%Math.floor%");
	t.exports = function(e, t) {
		if (typeof e != "function") throw new o("`fn` is not a function");
		if (typeof t != "number" || t < 0 || t > 4294967295 || s(t) !== t) throw new o("`length` must be a positive 32-bit integer");
		var n = arguments.length > 2 && !!arguments[2], c = !0, l = !0;
		if ("length" in e && a) {
			var u = a(e, "length");
			u && !u.configurable && (c = !1), u && !u.writable && (l = !1);
		}
		return (c || l || !n) && (i ? r(e, "length", t, !0, !0) : r(e, "length", t)), e;
	};
})), hx = /* @__PURE__ */ t(((e, t) => {
	var n = Kb(), r = Jb(), i = Xb();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), gx = /* @__PURE__ */ t(((e, t) => {
	var n = mx(), r = Vb(), i = Zb(), a = hx();
	t.exports = function(e) {
		var t = i(arguments), r = 1 + e.length - (arguments.length - 1);
		return n(t, r > 0 ? r : 0, !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), _x = /* @__PURE__ */ t(((e, t) => {
	var n = lx(), r = dx(), i = gx(), a = nx(), o = Bb(), s = $b(), c = a("Object.prototype.toString"), l = Sb()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
		for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
		return -1;
	}, m = { __proto__: null };
	l && o && s ? n(d, function(e) {
		var t = new u[e]();
		if (Symbol.toStringTag in t && s) {
			var n = s(t), r = o(n, Symbol.toStringTag);
			if (!r && n && (r = o(s(n), Symbol.toStringTag)), r && r.get) {
				var a = i(r.get);
				m["$" + e] = a;
			}
		}
	}) : n(d, function(e) {
		var t = new u[e](), n = t.slice || t.set;
		if (n) {
			var r = i(n);
			m["$" + e] = r;
		}
	});
	function h(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				"$" + n(e) === r && (t = f(r, 1));
			} catch {}
		}), t;
	}
	function g(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				n(e), t = f(r, 1);
			} catch {}
		}), t;
	}
	function _(e) {
		return p(d, e) > -1;
	}
	t.exports = function(e) {
		if (!e || typeof e != "object") return !1;
		if (!l) {
			var t = f(c(e), 8, -1);
			return _(t) ? t : t === "Object" ? g(e) : !1;
		}
		return o ? h(e) : null;
	};
})), vx = /* @__PURE__ */ t(((e, t) => {
	var n = _x();
	t.exports = function(e) {
		return !!n(e);
	};
})), yx = /* @__PURE__ */ t(((e) => {
	var t = rx(), n = sx(), r = _x(), i = vx();
	function a(e) {
		return e.call.bind(e);
	}
	var o = typeof BigInt < "u", s = typeof Symbol < "u", c = a(Object.prototype.toString), l = a(Number.prototype.valueOf), u = a(String.prototype.valueOf), d = a(Boolean.prototype.valueOf);
	if (o) var f = a(BigInt.prototype.valueOf);
	if (s) var p = a(Symbol.prototype.valueOf);
	function m(e, t) {
		if (typeof e != "object") return !1;
		try {
			return t(e), !0;
		} catch {
			return !1;
		}
	}
	e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = i;
	function h(e) {
		return typeof Promise < "u" && e instanceof Promise || typeof e == "object" && !!e && typeof e.then == "function" && typeof e.catch == "function";
	}
	e.isPromise = h;
	function g(e) {
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || re(e);
	}
	e.isArrayBufferView = g;
	function _(e) {
		return r(e) === "Uint8Array";
	}
	e.isUint8Array = _;
	function v(e) {
		return r(e) === "Uint8ClampedArray";
	}
	e.isUint8ClampedArray = v;
	function y(e) {
		return r(e) === "Uint16Array";
	}
	e.isUint16Array = y;
	function b(e) {
		return r(e) === "Uint32Array";
	}
	e.isUint32Array = b;
	function x(e) {
		return r(e) === "Int8Array";
	}
	e.isInt8Array = x;
	function S(e) {
		return r(e) === "Int16Array";
	}
	e.isInt16Array = S;
	function C(e) {
		return r(e) === "Int32Array";
	}
	e.isInt32Array = C;
	function w(e) {
		return r(e) === "Float32Array";
	}
	e.isFloat32Array = w;
	function T(e) {
		return r(e) === "Float64Array";
	}
	e.isFloat64Array = T;
	function E(e) {
		return r(e) === "BigInt64Array";
	}
	e.isBigInt64Array = E;
	function D(e) {
		return r(e) === "BigUint64Array";
	}
	e.isBigUint64Array = D;
	function O(e) {
		return c(e) === "[object Map]";
	}
	O.working = typeof Map < "u" && O(/* @__PURE__ */ new Map());
	function k(e) {
		return typeof Map > "u" ? !1 : O.working ? O(e) : e instanceof Map;
	}
	e.isMap = k;
	function A(e) {
		return c(e) === "[object Set]";
	}
	A.working = typeof Set < "u" && A(/* @__PURE__ */ new Set());
	function ee(e) {
		return typeof Set > "u" ? !1 : A.working ? A(e) : e instanceof Set;
	}
	e.isSet = ee;
	function j(e) {
		return c(e) === "[object WeakMap]";
	}
	j.working = typeof WeakMap < "u" && j(/* @__PURE__ */ new WeakMap());
	function M(e) {
		return typeof WeakMap > "u" ? !1 : j.working ? j(e) : e instanceof WeakMap;
	}
	e.isWeakMap = M;
	function N(e) {
		return c(e) === "[object WeakSet]";
	}
	N.working = typeof WeakSet < "u" && N(/* @__PURE__ */ new WeakSet());
	function P(e) {
		return N(e);
	}
	e.isWeakSet = P;
	function F(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	F.working = typeof ArrayBuffer < "u" && F(/* @__PURE__ */ new ArrayBuffer());
	function te(e) {
		return typeof ArrayBuffer > "u" ? !1 : F.working ? F(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = te;
	function ne(e) {
		return c(e) === "[object DataView]";
	}
	ne.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && ne(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function re(e) {
		return typeof DataView > "u" ? !1 : ne.working ? ne(e) : e instanceof DataView;
	}
	e.isDataView = re;
	var ie = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function ae(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function oe(e) {
		return ie === void 0 ? !1 : (ae.working === void 0 && (ae.working = ae(new ie())), ae.working ? ae(e) : e instanceof ie);
	}
	e.isSharedArrayBuffer = oe;
	function se(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = se;
	function ce(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = ce;
	function le(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = le;
	function ue(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = ue;
	function de(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = de;
	function fe(e) {
		return m(e, l);
	}
	e.isNumberObject = fe;
	function pe(e) {
		return m(e, u);
	}
	e.isStringObject = pe;
	function me(e) {
		return m(e, d);
	}
	e.isBooleanObject = me;
	function he(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = he;
	function ge(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = ge;
	function _e(e) {
		return fe(e) || pe(e) || me(e) || he(e) || ge(e);
	}
	e.isBoxedPrimitive = _e;
	function ve(e) {
		return typeof Uint8Array < "u" && (te(e) || oe(e));
	}
	e.isAnyArrayBuffer = ve, [
		"isProxy",
		"isExternal",
		"isModuleNamespaceObject"
	].forEach(function(t) {
		Object.defineProperty(e, t, {
			enumerable: !1,
			value: function() {
				throw Error(t + " is not supported in userland");
			}
		});
	});
})), bx = /* @__PURE__ */ t(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), xx = /* @__PURE__ */ t(((e, t) => {
	typeof Object.create == "function" ? t.exports = function(e, t) {
		t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }));
	} : t.exports = function(e, t) {
		if (t) {
			e.super_ = t;
			var n = function() {};
			n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
		}
	};
})), Sx = /* @__PURE__ */ t(((e) => {
	var t = Object.getOwnPropertyDescriptors || function(e) {
		for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
		return n;
	}, n = /%[sdj%]/g;
	e.format = function(e) {
		if (!x(e)) {
			for (var t = [], r = 0; r < arguments.length; r++) t.push(o(arguments[r]));
			return t.join(" ");
		}
		for (var r = 1, i = arguments, a = i.length, s = String(e).replace(n, function(e) {
			if (e === "%%") return "%";
			if (r >= a) return e;
			switch (e) {
				case "%s": return String(i[r++]);
				case "%d": return Number(i[r++]);
				case "%j": try {
					return JSON.stringify(i[r++]);
				} catch {
					return "[Circular]";
				}
				default: return e;
			}
		}), c = i[r]; r < a; c = i[++r]) v(c) || !T(c) ? s += " " + c : s += " " + o(c);
		return s;
	}, e.deprecate = function(t, n) {
		if (typeof process < "u" && process.noDeprecation === !0) return t;
		if (typeof process > "u") return function() {
			return e.deprecate(t, n).apply(this, arguments);
		};
		var r = !1;
		function i() {
			if (!r) {
				if (process.throwDeprecation) throw Error(n);
				process.traceDeprecation ? console.trace(n) : console.error(n), r = !0;
			}
			return t.apply(this, arguments);
		}
		return i;
	};
	var r = {}, i = /^$/;
	if (process.env.NODE_DEBUG) {
		var a = process.env.NODE_DEBUG;
		a = a.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = RegExp("^" + a + "$", "i");
	}
	e.debuglog = function(t) {
		if (t = t.toUpperCase(), !r[t]) if (i.test(t)) {
			var n = process.pid;
			r[t] = function() {
				var r = e.format.apply(e, arguments);
				console.error("%s %d: %s", t, n, r);
			};
		} else r[t] = function() {};
		return r[t];
	};
	function o(t, n) {
		var r = {
			seen: [],
			stylize: c
		};
		return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(n) ? r.showHidden = n : n && e._extend(r, n), C(r.showHidden) && (r.showHidden = !1), C(r.depth) && (r.depth = 2), C(r.colors) && (r.colors = !1), C(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), u(r, t, r.depth);
	}
	e.inspect = o, o.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39]
	}, o.styles = {
		special: "cyan",
		number: "yellow",
		boolean: "yellow",
		undefined: "grey",
		null: "bold",
		string: "green",
		date: "magenta",
		regexp: "red"
	};
	function s(e, t) {
		var n = o.styles[t];
		return n ? "\x1B[" + o.colors[n][0] + "m" + e + "\x1B[" + o.colors[n][1] + "m" : e;
	}
	function c(e, t) {
		return e;
	}
	function l(e) {
		var t = {};
		return e.forEach(function(e, n) {
			t[e] = !0;
		}), t;
	}
	function u(t, n, r) {
		if (t.customInspect && n && O(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
			var i = n.inspect(r, t);
			return x(i) || (i = u(t, i, r)), i;
		}
		var a = d(t, n);
		if (a) return a;
		var o = Object.keys(n), s = l(o);
		if (t.showHidden && (o = Object.getOwnPropertyNames(n)), D(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return f(n);
		if (o.length === 0) {
			if (O(n)) {
				var c = n.name ? ": " + n.name : "";
				return t.stylize("[Function" + c + "]", "special");
			}
			if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
			if (E(n)) return t.stylize(Date.prototype.toString.call(n), "date");
			if (D(n)) return f(n);
		}
		var _ = "", v = !1, y = ["{", "}"];
		if (g(n) && (v = !0, y = ["[", "]"]), O(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), w(n) && (_ = " " + RegExp.prototype.toString.call(n)), E(n) && (_ = " " + Date.prototype.toUTCString.call(n)), D(n) && (_ = " " + f(n)), o.length === 0 && (!v || n.length == 0)) return y[0] + _ + y[1];
		if (r < 0) return w(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
		t.seen.push(n);
		var b = v ? p(t, n, r, s, o) : o.map(function(e) {
			return m(t, n, r, s, e, v);
		});
		return t.seen.pop(), h(b, _, y);
	}
	function d(e, t) {
		if (C(t)) return e.stylize("undefined", "undefined");
		if (x(t)) {
			var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
			return e.stylize(n, "string");
		}
		if (b(t)) return e.stylize("" + t, "number");
		if (_(t)) return e.stylize("" + t, "boolean");
		if (v(t)) return e.stylize("null", "null");
	}
	function f(e) {
		return "[" + Error.prototype.toString.call(e) + "]";
	}
	function p(e, t, n, r, i) {
		for (var a = [], o = 0, s = t.length; o < s; ++o) N(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), N(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
			return "  " + e;
		}).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
			return "   " + e;
		}).join("\n"))) : s = e.stylize("[Circular]", "special")), C(o)) {
			if (a && i.match(/^\d+$/)) return s;
			o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.slice(1, -1), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"));
		}
		return o + ": " + s;
	}
	function h(e, t, n) {
		var r = 0;
		return e.reduce(function(e, t) {
			return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
		}, 0) > 60 ? n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
	}
	e.types = yx();
	function g(e) {
		return Array.isArray(e);
	}
	e.isArray = g;
	function _(e) {
		return typeof e == "boolean";
	}
	e.isBoolean = _;
	function v(e) {
		return e === null;
	}
	e.isNull = v;
	function y(e) {
		return e == null;
	}
	e.isNullOrUndefined = y;
	function b(e) {
		return typeof e == "number";
	}
	e.isNumber = b;
	function x(e) {
		return typeof e == "string";
	}
	e.isString = x;
	function S(e) {
		return typeof e == "symbol";
	}
	e.isSymbol = S;
	function C(e) {
		return e === void 0;
	}
	e.isUndefined = C;
	function w(e) {
		return T(e) && A(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function E(e) {
		return T(e) && A(e) === "[object Date]";
	}
	e.isDate = E, e.types.isDate = E;
	function D(e) {
		return T(e) && (A(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = D, e.types.isNativeError = D;
	function O(e) {
		return typeof e == "function";
	}
	e.isFunction = O;
	function k(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = k, e.isBuffer = bx();
	function A(e) {
		return Object.prototype.toString.call(e);
	}
	function ee(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var j = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	function M() {
		var e = /* @__PURE__ */ new Date(), t = [
			ee(e.getHours()),
			ee(e.getMinutes()),
			ee(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			j[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", M(), e.format.apply(e, arguments));
	}, e.inherits = xx(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function N(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (P && e[P]) {
			var n = e[P];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, P, {
				value: n,
				enumerable: !1,
				writable: !1,
				configurable: !0
			}), n;
		}
		function n() {
			for (var t, n, r = new Promise(function(e, r) {
				t = e, n = r;
			}), i = [], a = 0; a < arguments.length; a++) i.push(arguments[a]);
			i.push(function(e, r) {
				e ? n(e) : t(r);
			});
			try {
				e.apply(this, i);
			} catch (e) {
				n(e);
			}
			return r;
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), P && Object.defineProperty(n, P, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = P;
	function F(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function te(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		function n() {
			for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
			var r = t.pop();
			if (typeof r != "function") throw TypeError("The last argument must be of type Function");
			var i = this, a = function() {
				return r.apply(i, arguments);
			};
			e.apply(this, t).then(function(e) {
				process.nextTick(a.bind(null, null, e));
			}, function(e) {
				process.nextTick(F.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = te;
})), Cx = bb();
function wx() {
	return typeof process < "u" ? new (Sx()).TextEncoder() : new TextEncoder();
}
var Tx;
function Ex() {
	let e, t = [];
	for (let n = 0; n < 256; n++) {
		e = n;
		for (let t = 0; t < 8; t++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
}
function Dx(e) {
	Tx ??= Ex();
	let t = -1, n = wx().encode(e);
	for (let e = 0; e < n.length; e++) t = t >>> 8 ^ Tx[(t ^ n[e]) & 255];
	return (t ^ -1) >>> 0;
}
function Ox(e) {
	return ("00000000" + Dx(e).toString(16)).slice(-8);
}
//#endregion
//#region ../app/src/utils/urlHash.js
function kx(e) {
	let t = (0, Cx.compressToEncodedURIComponent)(JSON.stringify(e));
	return "#" + t + Ox(t);
}
function Ax(e) {
	if (!e || e.length < 10) throw Error("The state string in the URL is too short.");
	let t = e.slice(1, -8), n = e.slice(-8);
	if (Ox(t) !== n) throw Error("The state string in the URL is corrupted.");
	return JSON.parse((0, Cx.decompressFromEncodedURIComponent)(t));
}
//#endregion
//#region ../app/src/utils/ui/tabs.js
function jx(e) {
	e.stopPropagation(), e.preventDefault();
	let t = e.target.parentElement, n = t.parentElement, r = n.parentElement.querySelector(".panes"), i = [...n.children].findIndex((e) => e == t);
	for (let e of n.children) e.classList.remove("active-tab");
	for (let e of r.children) e.classList.remove("active-tab");
	n.children.item(i).classList.add("active-tab"), r.children.item(i).classList.add("active-tab");
}
//#endregion
//#region ../app/src/components/dialogs/shareBookmarkDialog.js
var Mx = class extends q {
	static properties = {
		...super.properties,
		bookmark: {},
		global: { type: Boolean }
	};
	static styles = [...super.styles, o`
            .copy-url {
                position: relative;

                button {
                    --color: rgb(66, 127, 240);
                    position: absolute;

                    --pad: 0.4em;
                    right: var(--pad);
                    top: var(--pad);
                    bottom: var(--pad);

                    box-shadow: 0 0 var(--pad) * 0.5 var(--pad) * 0.5 white;
                    border: 1px solid var(--color);
                    border-radius: 3px;
                    color: var(--color);
                    background-color: white;

                    &:hover {
                        color: white;
                        background-color: var(--color);
                    }
                }
            }
        `];
	constructor() {
		super(), this.bookmark = null, this.global = !1, this.dialogTitle = "Share Bookmark";
	}
	renderBody() {
		let e = this.bookmark ?? { name: "" }, t = JSON.stringify(e, void 0, 2), n = window.location, r = n.origin + n.pathname + n.search + (this.global ? "#bookmark:" + e.name.replaceAll(" ", "-") : kx(e));
		return L`
            <div class="gs-tabs" style="width: 600px">
                <ul class="tabs" @click=${jx}>
                    <li class="active-tab"><button>URL</button></li>
                    <li><button>JSON</button></li>
                </ul>
                <div class="panes">
                    <div class="gs-form-group active-tab">
                        <label for="bookmark-url">Here's a link for you:</label>
                        <div class="copy-url">
                            <input
                                id="bookmark-url"
                                type="text"
                                .value=${r}
                            />
                            <button @click=${async () => {
			try {
				await navigator.clipboard.writeText(r), this.finish({ ok: !0 }), this.triggerClose();
			} catch {}
		}}>Copy</button>
                        </div>
                        <small>
                            The bookmark URL contains all the bookmarked data,
                            including the possible notes, which will be shown
                            when the link is opened.
                        </small>
                    </div>
                    <div class="gs-form-group">
                        <textarea id="bookmark-json" style="height: 250px">
${t}</textarea
                        >
                        <small>
                            The JSON-formatted bookmark is currently available
                            for development purposes.
                        </small>
                    </div>
                </div>
            </div>
        `;
	}
};
customElements.define("gs-share-bookmark-dialog", Mx);
function Nx(e, t) {
	return J("gs-share-bookmark-dialog", (n) => {
		n.bookmark = e, n.global = !!t;
	});
}
//#endregion
//#region ../app/src/charts/plotBookmarkActions.js
function Px(e) {
	return {
		kind: "sample_attribute_plot",
		definition: e.request
	};
}
async function Fx(e, t) {
	let n = e.getLocalBookmarkDatabase();
	if (!n) return;
	let r = e.createBookmark([Px(t)]);
	if (await yb(n, r, "add")) try {
		await e.saveLocalBookmark(r);
	} catch (e) {
		Y(`${e}`, { title: "Cannot save the bookmark!" });
	}
}
async function Ix(e, t) {
	let n = e.createBookmark([Px(t)]);
	await yb(void 0, n, "share") && Nx(n, !1);
}
//#endregion
//#region ../app/src/charts/plotDialog.js
var Lx = class extends q {
	static properties = {
		...super.properties,
		plot: {},
		bookmarkContext: {}
	};
	static styles = [...super.styles, o`
            .plot-shell {
                inline-size: min(70vw, 700px);
                block-size: min(60vh, 450px);
                display: flex;
            }

            .chart-container {
                flex: 1;
                min-width: 0;
                min-height: 0;
            }
        `];
	constructor() {
		super(), this.plot = null, this.bookmarkContext = void 0, this._api = null;
	}
	connectedCallback() {
		super.connectedCallback(), this.addEventListener("gs-dialog-closed", () => {
			this._api?.finalize(), this._api = null;
		}, { once: !0 });
	}
	firstUpdated() {
		super.firstUpdated?.(), this.#e();
	}
	renderBody() {
		return this.plot ? L`<div class="plot-shell">
            <div class="chart-container"></div>
        </div>` : L``;
	}
	renderButtons() {
		return this.plot ? [
			this.makeButton("Add bookmark", () => (this.#t(), !0), {
				iconDef: Hd,
				disabled: !this.bookmarkContext?.getLocalBookmarkDatabase()
			}),
			this.makeButton("Share", () => (this.#n(), !0), {
				iconDef: Ef,
				disabled: !this.bookmarkContext
			}),
			this.makeButton("Save PNG", () => (Od(this.renderRoot, this._api, this.plot.filename), !0), { iconDef: uf }),
			this.makeCloseButton()
		] : [this.makeCloseButton()];
	}
	async #e() {
		if (!this.plot) throw Error("Plot dialog requires a plot.");
		let e = this.renderRoot.querySelector(".chart-container");
		if (!e) throw Error("Cannot find chart container.");
		this._api = await kd(e, this.plot);
	}
	async #t() {
		!this.bookmarkContext || !this.plot || await Fx(this.bookmarkContext, this.plot);
	}
	async #n() {
		!this.bookmarkContext || !this.plot || await Ix(this.bookmarkContext, this.plot);
	}
};
customElements.define("gs-sample-attribute-plot-dialog", Lx);
function Rx(e, t = {}) {
	return J("gs-sample-attribute-plot-dialog", (n) => {
		let r = n;
		r.plot = e, r.bookmarkContext = t.bookmarkContext, r.dialogTitle = e.title;
	});
}
//#endregion
//#region ../app/src/sampleView/plotMenuItems.js
var zx = "SAMPLE_ATTRIBUTE";
function Bx(e, t, n, r = {}) {
	let { includeDivider: i = !0 } = r, a = t.type === "nominal" || t.type === "ordinal", o = t.type === "quantitative";
	if (!a && !o) return;
	if (i && e.push(Ly), a) {
		e.push({
			label: "Show bar plot...",
			callback: () => Rx(Xc({
				attributeInfo: t,
				sampleHierarchy: n.sampleHierarchy,
				attributeInfoSource: n.compositeAttributeInfoSource
			}), { bookmarkContext: n.plotBookmarkContext })
		});
		return;
	}
	if (!o) return;
	let s = n.sampleHierarchy.sampleMetadata.attributeNames.map((e) => n.compositeAttributeInfoSource.getAttributeInfo({
		type: zx,
		specifier: e
	})).filter((e) => e.type === "quantitative"), c = cl(n);
	e.push({
		label: "Show boxplot...",
		callback: () => Rx(Zc({
			attributeInfo: t,
			sampleHierarchy: n.sampleHierarchy,
			attributeInfoSource: n.compositeAttributeInfoSource
		}), { bookmarkContext: n.plotBookmarkContext })
	}), s.length !== 0 && e.push({
		label: "Create scatterplot against...",
		submenu: [{
			label: "Choose the secondary attribute",
			type: "header"
		}, ...s.map((e) => ({
			label: L_(e),
			callback: () => Rx(Qc({
				xAttributeInfo: t,
				yAttributeInfo: e,
				sampleHierarchy: n.sampleHierarchy,
				attributeInfoSource: n.compositeAttributeInfoSource,
				colorScaleDomain: c?.domain,
				colorScaleRange: c?.range
			}), { bookmarkContext: n.plotBookmarkContext })
		}))]
	});
}
//#endregion
//#region ../app/src/state/subscribeTo.js
function Vx(e, t, n, r = (e, t) => e === t) {
	let i = t(e.getState());
	return e.subscribe(() => {
		let a = t(e.getState());
		if (!r(i, a)) {
			let e = i;
			i = a, n(a, e);
		}
	});
}
function Hx(e) {
	let t = !1, n, r, i = () => {
		t = !1, e(n, r), r = void 0;
	};
	return (e, a) => {
		n = e, r ??= a, t || (t = !0, queueMicrotask(i));
	};
}
//#endregion
//#region ../app/src/utils/readyGate.js
function Ux() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function Wx() {
	return {
		promise: Promise.resolve(),
		resolve: () => void 0,
		reject: () => void 0
	};
}
function Gx(e, t, n, r) {
	return n ? new Promise((i, a) => {
		let o = () => {
			r && r(), a(Error(t));
		};
		if (n.aborted) {
			o();
			return;
		}
		n.addEventListener("abort", o, { once: !0 }), e.then((e) => {
			n.removeEventListener("abort", o), i(e);
		}, (e) => {
			n.removeEventListener("abort", o), a(e);
		});
	}) : e;
}
var Kx = class {
	#e;
	#t = Wx();
	constructor(e) {
		this.#e = e;
	}
	reset() {
		let e = Ux();
		return this.#t = e, e;
	}
	wait(e) {
		return Gx(this.#t.promise, this.#e, e);
	}
};
function qx(e) {
	let t = !1;
	return (n) => {
		t || (t = !0, n ? e.reject(n) : e.resolve());
	};
}
var Jx = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e) {
		this.#t = e;
	}
	wait(e, t) {
		let n, r = new Promise((e) => {
			n = e;
		}), i = {
			predicate: e,
			resolve: n
		};
		return this.#e.add(i), Gx(r, this.#t, t, () => {
			this.#e.delete(i);
		});
	}
	resolveMatching(e) {
		if (this.#e.size) for (let t of this.#e) t.predicate(e) && (this.#e.delete(t), t.resolve());
	}
}, Yx = "SAMPLE_ATTRIBUTE", Xx = class extends te {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = 0;
	#i = new Kx("Metadata readiness was aborted.");
	#a = /* @__PURE__ */ new WeakMap();
	#o;
	constructor(e, t) {
		let n = e.spec.metadata ?? {}, r = {
			name: "sample-metadata",
			title: typeof n.title == "string" ? { text: n.title } : n.title === void 0 ? {
				text: "Sample metadata",
				orient: "none"
			} : n.title,
			configurableVisibility: !0,
			datasets: { metadata: [] },
			data: { name: "metadata" },
			hconcat: [],
			spacing: n.spacing ?? 1,
			resolve: {
				scale: { default: "independent" },
				axis: { default: "independent" }
			}
		};
		super(r, e.context, t, t, "sample-metadata"), this.#e = e, this._attributeHighlighState = {
			backgroundOpacity: 1,
			currentAttribute: void 0,
			abortController: new AbortController()
		}, this.#o = (e) => this.getAttributeInfo(e.specifier), this.#e.compositeAttributeInfoSource.addAttributeInfoSource(Yx, this.#o), this.registerDisposer(Vx(this.#e.provenance.store, (e) => e.provenance.present.sampleView.sampleMetadata, (e) => {
			this.#u(e);
		})), this.addInteractionListener("contextmenu", this.handleContextMenu.bind(this)), this.addInteractionListener("mousemove", (e) => {
			let t = e.target, n = this.#e.findSampleForMouseEvent(e), r = this.#_(t)?.attribute.specifier;
			if (n && e.mouseEvent.buttons === 0) {
				let e = JSON.stringify([n.id, r]);
				this.context.updateTooltip(e, (e) => {
					let [t, n] = JSON.parse(e);
					return Promise.resolve(this.#v(t, n));
				});
			}
			r && this.#s(r);
		}), this.addInteractionListener("mouseleave", (e) => {
			this._attributeHighlighState.currentAttribute && (e.uiEvent.type !== "mouseout" && this.coords.containsPoint(e.point.x, e.point.y) || this.#s(void 0));
		});
	}
	getEncoding() {
		return {};
	}
	render(e, t, n = {}) {
		if (!this.isConfiguredVisible()) return;
		let r = t.shrink(this.getOverhang());
		super.render(e, t, {
			...n,
			clipRect: this.#e.locationManager.clipBySummary(r)
		});
	}
	#s(e) {
		let t = this._attributeHighlighState;
		if (e != t.currentAttribute) {
			if (e) {
				let n = !t.currentAttribute;
				t.currentAttribute = e, n && this.#c(.1, {
					duration: 1e3,
					delay: t.backgroundOpacity < 1 ? 0 : 500
				}), this.context.animator.requestRender();
				return;
			}
			t.currentAttribute && (t.currentAttribute = void 0, this.#c(1, {
				duration: 200,
				delay: 0
			}), this.context.animator.requestRender());
		}
	}
	#c(e, t) {
		let n = this._attributeHighlighState;
		n.abortController.abort(), n.abortController = new AbortController(), this.context.animator.transition({
			from: n.backgroundOpacity,
			to: e,
			...t,
			onUpdate: (e) => {
				n.backgroundOpacity = e;
			},
			easingFunction: un,
			signal: n.abortController.signal
		}).catch((e) => {});
	}
	#l(e) {
		let t = this._attributeHighlighState;
		return e == t.currentAttribute ? 1 : t.backgroundOpacity;
	}
	handleContextMenu(e) {
		let t = this.#e.findSampleForMouseEvent(e);
		if (!t) {
			e.mouseEvent.preventDefault();
			return;
		}
		let n = this.#e.sampleHierarchy.sampleMetadata.entities[t.id], r = [this.#e.makePeekMenuItem(e.point.y - this.#e.childCoords.y, t.id), Ly], i = this.#_(e.target);
		if (i) {
			let e = i.attribute.specifier, t = n?.[e];
			r.push(...nb(L`Attribute: <strong>${e}</strong>`, i, t, this.#e)), Bx(r, i, this.#e);
		}
		Qy({ items: r }, e.mouseEvent);
	}
	async #u(e) {
		this.#t = e.entities;
		let t = this.context.dataFlow, n = ++this.#r, r = qx(this.#i.reset());
		try {
			if (await this.#g(), await this.syncGuideViews(), this.#d(n)) {
				r();
				return;
			}
			c(this);
			let i = (e) => e.isConfiguredVisible(), a = this.#f(t, i, n);
			if (a.updateDynamicData(this.#p(e)), await this.#h(a, i), this.#d(n)) {
				r();
				return;
			}
			this.#m(), this.context.requestLayoutReflow();
		} catch (e) {
			throw r(e instanceof Error ? e : Error(String(e))), e;
		} finally {
			r();
		}
	}
	#d(e) {
		return e !== this.#r;
	}
	#f(e, t, n) {
		let { graphicsPromises: r } = h(this, e, t), a = this.flowHandle?.dataSource;
		if (!a) throw Error("Cannot find metadata data source handle!");
		return i(r, () => n === this.#r), a;
	}
	#p(e) {
		let t = this.#e.sampleHierarchy.sampleData.entities, n = Object.entries(e.entities).map(([e, n]) => ({
			sample: e,
			indexNumber: t[e]?.indexNumber,
			...n
		}));
		return n.findIndex((e) => e.indexNumber === void 0) >= 0 && console.warn("Some metadata entries do not match any sample data"), n;
	}
	#m() {
		let e = /* @__PURE__ */ new Set();
		this.visit((t) => {
			if (t instanceof T) {
				let n = t.getScaleResolution("color");
				n && e.add(n);
			}
		});
		for (let t of e) t.reconfigureDomain();
	}
	#h(e, t) {
		let n = fe(this, t);
		return n.delete(e), g(this, n);
	}
	awaitMetadataReady(e) {
		return this.#i.wait(e);
	}
	async #g() {
		this.setChildren([]), this.#n.clear();
		let e = $o(this.getAttributeNames(), "/"), t = this.#e.sampleHierarchy.sampleMetadata.attributeDefs, n = async (e, r, i) => {
			for (let o of e.children.values()) if (o.children.size == 0) {
				let e = o.path, n = new a(Zx(e, {
					...i,
					title: o.part,
					...t?.[e] ?? {}
				}, this.#e.spec.metadata), this.context, r, r, `attribute-${e}`);
				await n.initializeChildren();
				let s = n.findDescendantByName(eS(e));
				if (!(s instanceof T)) throw Error("Cannot find metadata foreground view for " + e);
				n.opacityFunction = (t) => t * this.#l(e), r.appendChild(n), this.#n.set(e, s);
				for (let t of n.getDescendants()) this.#a.set(t, e);
			} else {
				let e = t?.[o.path] ?? {}, a = `attributeGroup-${o.path}`, s = new te({
					name: a,
					hconcat: [],
					configurableVisibility: !0,
					title: {
						text: e.title ?? o.part,
						orient: "none"
					},
					visible: e.visible ?? !0,
					spacing: this.#e.spec.metadata?.spacing ?? 1,
					resolve: {
						scale: { default: "independent" },
						axis: { default: "independent" }
					}
				}, this.context, r, r, a);
				r.appendChild(s), await n(o, s, {
					...i,
					...e,
					visible: void 0,
					title: void 0
				});
			}
		};
		await n(e, this, {});
		for (let e of this.getDescendants()) e instanceof T && e.name.startsWith("title") && typeof e.spec.mark != "string" && (e.spec.mark.clip = "never");
		Re(this);
	}
	getAttributeNames() {
		return this.#e.sampleHierarchy.sampleMetadata.attributeNames;
	}
	getVisibleAttributeNames() {
		return Array.from(this.#n.entries()).filter(([, e]) => e.isVisible()).map(([e]) => e);
	}
	#_(e) {
		let t = this.#a.get(e);
		if (t) return this.getAttributeInfo(t);
	}
	getAttributeInfo(e) {
		let t = this.#n.get(e);
		if (!t) throw new Dd("No such attribute: " + e);
		let n = this.#e.sampleHierarchy.sampleMetadata.attributeDefs[e] ?? {}, r = t.getScaleResolution("color");
		return {
			name: e,
			attribute: {
				type: Yx,
				specifier: e
			},
			accessor: (t, n) => n.sampleMetadata.entities[t]?.[e],
			valuesProvider: bc((t, n) => n.sampleMetadata.entities[t]?.[e]),
			type: r.type,
			scale: r.getScale(),
			title: L`<em class="attribute">${e}</em>`,
			shortTitle: n.title ?? Qo(e),
			emphasizedName: e,
			description: t.spec.description
		};
	}
	#v(e, t) {
		let n = this.#n, i = (e, t) => rS(t) ? this.getAttributeInfo(e).scale(t) : "transparent", a = this.#t[e];
		return L`
            <div class="title">
                <strong>${e}</strong>
            </div>
            ${L`
            <div class="autoscroll-container">
                <table class="attributes">
                    ${Object.entries(a).filter(([e]) => n.get(e).isVisible()).map(([e, n]) => L`
                                <tr
                                    class=${Nd({ hovered: e == t })}
                                >
                                    <th>${nS(e)}</th>
                                    <td>${r(n)}</td>
                                    <td
                                        class="color"
                                        style="background-color: ${i(e, n)}"
                                    ></td>
                                </tr>
                            `)}
                </table>
            </div>
        `}
        `;
	}
	getDefaultResolution(e, t) {
		return t == "legend" ? "excluded" : "independent";
	}
	handleVerboseCommand(e) {
		let t = e, n = Object.values(this.#e.sampleHierarchy.sampleMetadata.entities);
		for (let e of this.getAttributeNames()) {
			let r = this.getAttributeInfo(e);
			if ((r.type == "ordinal" || r.type == "nominal") && n.find((e) => e[r.attribute.specifier] == t)) {
				let n = this.#e.actions.filterByNominal({
					attribute: {
						type: Yx,
						specifier: e
					},
					values: [t]
				}), r = this.#e.provenance.getPresentState().lastAction, i = this.#e.actions.filterByNominal.match(r) && !r.payload.remove && r.payload.attribute.type == Yx && r.payload.attribute.specifier == e && r.payload.values.length == 1, a = this.#e.provenance.store;
				return i && a.dispatch(vo.undo()), this.#e.dispatchAttributeAction(n), !0;
			}
		}
		return !1;
	}
	isPickingSupported() {
		return !1;
	}
	dispose() {
		super.dispose(), this.#e.compositeAttributeInfoSource.removeAttributeInfoSource(Yx, this.#o), this._attributeHighlighState.abortController.abort();
	}
};
function Zx(e, t, n) {
	if (!t) throw Error("No attribute definition for " + e);
	let r = tS(e), i = `datum[${JSON.stringify(e)}]`, a = {
		name: eS(e),
		transform: [{
			type: "filter",
			expr: `${i} != null`
		}],
		mark: {
			type: "rect",
			xOffset: -.5
		},
		encoding: {
			facetIndex: { field: "indexNumber" },
			color: {
				field: r,
				type: t.type,
				scale: t.scale,
				legend: null
			}
		},
		opacity: 1
	};
	t.barScale && t.type == "quantitative" && (a.encoding.x = {
		field: r,
		type: t.type,
		scale: t.barScale,
		axis: null
	});
	let o = {
		name: `attribute-${e}`,
		title: {
			text: t.title ?? e,
			orient: "bottom",
			align: "right",
			baseline: "middle",
			offset: 5,
			reserve: n?.titleReserve ?? !1,
			angle: n?.labelAngle ?? -90,
			dy: -.5,
			font: n?.labelFont,
			fontSize: n?.labelFontSize ?? 11,
			fontStyle: n?.labelFontStyle,
			fontWeight: n?.labelFontWeight
		},
		description: t.description,
		visible: t.visible ?? !0,
		width: t.width ?? n?.attributeWidth ?? 10,
		layer: [a]
	}, s = Qx(t, n);
	return s !== null && o.layer.unshift({
		name: $x(e),
		mark: {
			type: "rect",
			xOffset: -.5
		},
		encoding: {
			facetIndex: { field: "indexNumber" },
			fill: { value: s },
			fillOpacity: { value: 1 },
			stroke: { value: null }
		}
	}), o;
}
function Qx(e, t) {
	return e.missingValueColor === void 0 ? t?.missingValueColor === void 0 ? e.barScale ? null : "#f0f0f0" : t.missingValueColor : e.missingValueColor;
}
function $x(e) {
	return `attribute-${e}-missing-background`;
}
function eS(e) {
	return `attribute-${e}-value`;
}
function tS(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function nS(e) {
	return L`${Ko(e, "/").map((e, t) => L`${t > 0 ? L` <span style="color: gray;">&rsaquo;</span> ` : ""}${e}`)}`;
}
function rS(e) {
	return e !== "" && !(typeof e == "number" && isNaN(e)) && e !== null;
}
//#endregion
//#region ../app/src/sampleView/groupDialogs/retainGroupsByRankDialog.js
var iS = class extends q {
	static properties = {
		...super.properties,
		sampleView: {},
		level: { type: Number },
		limit: { type: Number },
		order: {}
	};
	constructor() {
		super(), this.sampleView = null, this.level = 1, this.limit = 5, this.order = "descending";
	}
	firstUpdated() {
		super.firstUpdated?.(), this.dialogTitle = this.sampleView.sampleHierarchy.groupMetadata.length > 1 ? "Retain ranked groups by size at this level" : "Retain ranked groups by size";
	}
	renderBody() {
		return L`
            <div class="gs-form-group">
                <p>
                    Keep the selected number of groups separately within each
                    ancestor group.
                </p>
                <label>Rank order:</label>
                <select
                    .value=${this.order}
                    @change=${e_((e) => {
			this.order = e.value;
		})}
                >
                    <option value="descending">Largest groups</option>
                    <option value="ascending">Smallest groups</option>
                </select>
            </div>
            <div class="gs-form-group">
                <label>Number of groups to retain:</label>
                <input
                    autofocus
                    type="number"
                    min="1"
                    .valueAsNumber=${this.limit}
                    @change=${e_((e) => {
			this.limit = e.valueAsNumber;
		})}
                />
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#e(), {
			iconDef: V,
			isPrimary: !0,
			disabled: !Number.isFinite(this.limit) || this.limit < 1
		})];
	}
	#e() {
		this.sampleView.provenance.store.dispatch(this.sampleView.actions.retainGroupsByRank({
			level: this.level,
			measure: "size",
			limit: this.limit,
			order: this.order
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-retain-groups-by-rank-dialog", iS);
function aS(e, t) {
	return J("gs-retain-groups-by-rank-dialog", (n) => {
		n.sampleView = e, n.level = t, n.limit = 5, n.order = "descending";
	});
}
//#endregion
//#region ../app/src/sampleView/groupDialogs/retainGroupsBySizeDialog.js
var oS = class extends q {
	static properties = {
		...super.properties,
		sampleView: {},
		level: { type: Number },
		operator: {},
		operand: {}
	};
	constructor() {
		super(), this.sampleView = null, this.level = 1, this.operator = "gte", this.operand = void 0;
	}
	firstUpdated() {
		super.firstUpdated?.(), this.dialogTitle = this.sampleView.sampleHierarchy.groupMetadata.length > 1 ? "Retain groups by size at this level" : "Retain groups by size";
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		return L`
            <div class="gs-form-group">
                <p>Keep groups where size matches:</p>
                <gs-threshold-comparison-input
                    autofocus
                    .operator=${this.operator}
                    .operand=${this.operand}
                    .placeholder=${"Enter sample-count threshold"}
                    @change=${(e) => this.#e(e)}
                ></gs-threshold-comparison-input>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#t(), {
			iconDef: V,
			isPrimary: !0,
			disabled: !y_(this.operand)
		})];
	}
	#t() {
		if (!y_(this.operand)) throw Error("Group size threshold is missing.");
		this.sampleView.provenance.store.dispatch(this.sampleView.actions.retainGroupsBySize({
			level: this.level,
			measure: "size",
			operator: this.operator,
			operand: this.operand
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-retain-groups-by-size-dialog", oS);
function sS(e, t) {
	return J("gs-retain-groups-by-size-dialog", (n) => {
		n.sampleView = e, n.level = t, n.operator = "gte", n.operand = void 0;
	});
}
//#endregion
//#region ../app/src/sampleView/sampleGroupView.js
var cS = { step: 24 }, lS = class extends a {
	#e = !0;
	constructor(e, t) {
		let n = {
			name: "sample-groups",
			title: {
				text: "Groups",
				orient: "none"
			},
			configurableVisibility: !0,
			width: cS,
			datasets: { groups: [] },
			data: { name: "groups" },
			transform: [
				{
					type: "filter",
					expr: "datum._depth > 0"
				},
				{
					type: "formula",
					as: "_y1",
					expr: "datum._index * 2"
				},
				{
					type: "formula",
					as: "_y2",
					expr: "datum._index * 2 + 1"
				},
				{
					type: "formula",
					as: "_title",
					expr: "datum.title || datum.name"
				},
				{
					type: "formula",
					as: "_NA",
					expr: "datum._title === null"
				},
				{
					type: "formula",
					as: "_title",
					expr: "datum._title !== null ? datum._title: 'NA'"
				}
			],
			encoding: {
				x: {
					field: "_depth",
					type: "ordinal",
					scale: {
						align: 0,
						paddingInner: .2272727,
						paddingOuter: 0
					},
					axis: null
				},
				y: {
					field: "_y1",
					type: "nominal",
					scale: {
						type: "ordinal",
						domain: Ue(500)
					},
					axis: null
				},
				y2: { field: "_y2" }
			},
			layer: [{
				title: "Group",
				mark: {
					type: "rect",
					clip: !0,
					color: "#e8e8e8",
					cornerRadiusBottomLeft: 14,
					cornerRadiusTopLeft: 14
				}
			}, {
				mark: {
					type: "text",
					clip: !0,
					angle: -90,
					paddingY: 5,
					tooltip: null
				},
				encoding: {
					text: { field: "_title" },
					opacity: {
						field: "_NA",
						type: "nominal",
						scale: {
							type: "ordinal",
							domain: [!1, !0],
							range: [1, .3]
						}
					}
				}
			}]
		};
		super(n, e.context, t, t, "sample-groups"), this.sampleView = e, this._addBroadcastHandler("layoutComputed", () => {
			this.updateRange();
		}), this.addInteractionListener("contextmenu", this.#t.bind(this));
	}
	#t(e) {
		let t = this.#n(), n = t?.length ?? this.#r(e.point);
		if (!n) {
			e.mouseEvent.preventDefault();
			return;
		}
		Qy({ items: this.#i(n, t) }, e.mouseEvent);
	}
	#n() {
		let e = this.context.getCurrentHover();
		if (!e?.datum._rawGroup) return;
		let t = e.datum._rawGroup;
		for (let e of gc(this.sampleView.sampleHierarchy.rootGroup)) if (e.at(-1) === t) return e.slice(1);
	}
	#r(e) {
		let t = this.sampleView.sampleHierarchy.groupMetadata.length;
		return uS(e.x - this.coords.x, this.coords.width, t);
	}
	#i(e, t) {
		let n = this.sampleView, r = n.provenance.store, i = n.sampleHierarchy.groupMetadata.length, a = i > 1, o = (e, t) => {
			let i = n.provenance.getActionInfo(e);
			return {
				label: t ?? i.title,
				icon: i.icon,
				callback: () => r.dispatch(e)
			};
		}, s = [{
			label: dS(this.#o()[e], e, i),
			type: "header"
		}];
		if (t) {
			let e = t.at(-1), r = n.actions.removeGroup({ path: t.map((e) => e.name) });
			s.push(o(r, fS(e.title ?? e.name)));
		}
		return s.push({
			icon: V,
			label: "Retain groups",
			submenu: [{
				icon: V,
				label: a ? "Ranked groups by size at this level..." : "Ranked groups by size...",
				callback: () => aS(n, e)
			}, {
				icon: V,
				label: a ? "Groups by size threshold at this level..." : "Groups by size threshold...",
				callback: () => sS(n, e)
			}]
		}, {
			...o(n.actions.ungroup({ level: e }), pS(i)),
			icon: Yd
		}), s;
	}
	async initializeChildren() {
		await super.initializeChildren(), this.registerSizeInvalidation();
	}
	isConfiguredVisible() {
		return this.#e && super.isConfiguredVisible();
	}
	updateRange() {
		let e = this.sampleView.locationManager.getLocations()?.groups;
		if (!e?.length) return;
		let t = this.sampleView?.childCoords.height ?? 0, n = this.getScaleResolution("y"), r = [];
		for (let n of e) r.push(1 - (n.locSize.location + n.locSize.size) / t), r.push(1 - n.locSize.location / t);
		n.scale.range(r);
	}
	updateGroups() {
		let e = this.sampleView.locationManager.getLocations()?.groups ?? [], t = e.some((e) => e.key.depth > 0);
		this.#a(t);
		let n = this.flowHandle?.dataSource;
		if (!n) throw Error("Cannot find sample group data source handle!");
		let r = this.#o(), i = e.map((e) => ({
			_index: e.key.index,
			_depth: e.key.depth,
			_rawGroup: e.key.group,
			attribute: r[e.key.depth],
			name: e.key.group.name,
			...e.key.group.name == e.key.group.title ? {} : { title: e.key.group.title },
			...e.key.group.generatedTitle ? { interval: e.key.group.generatedTitle } : {},
			n: e.key.n
		}));
		n.updateDynamicData(i), e.length && this.updateRange();
	}
	#a(e) {
		this.#e !== e && (this.#e = e, this.invalidateSizeCache());
	}
	#o() {
		let e = document.createElement("div");
		return [null, ...this.sampleView.sampleHierarchy.groupMetadata].map((t) => {
			if (!t) return "unknown";
			let n = this.sampleView.compositeAttributeInfoSource.getAttributeInfo(t.attribute).title;
			return n ? Fa(n) ? n : (Le(n, e), e.textContent.replace(/\s+/g, " ").trim()) : "unknown";
		});
	}
};
function uS(e, t, n) {
	if (!(n < 1 || t <= 0 || e < 0 || e >= t)) return Math.floor(e / t * n) + 1;
}
function dS(e, t, n) {
	return n > 1 ? `${e} (level ${t})` : e;
}
function fS(e) {
	return `Remove group ${e}`;
}
function pS(e) {
	return e > 1 ? "Ungroup from this level" : "Ungroup";
}
//#endregion
//#region ../app/src/state/provenanceBaseline.js
var mS = "/__baseline__";
function hS(e) {
	return !!e && e.type.endsWith("/__baseline__");
}
function gS(e, t) {
	e.dispatch(vo.clearHistory()), e.dispatch({ type: t + mS });
}
//#endregion
//#region ../app/src/sampleView/compositeAttributeInfoSource.js
var _S = class {
	constructor() {
		this.attributeInfoSourcesByType = {};
	}
	addAttributeInfoSource(e, t) {
		this.attributeInfoSourcesByType[e] = t;
	}
	removeAttributeInfoSource(e, t) {
		t && this.attributeInfoSourcesByType[e] !== t || delete this.attributeInfoSourcesByType[e];
	}
	getAttributeInfo(e) {
		let t = this.attributeInfoSourcesByType[e.type];
		if (!t) throw new Dd("Cannot find attribute info source for: " + JSON.stringify(e));
		let n = t(e);
		if (n) return n;
		throw new Dd("Unknown attribute: " + JSON.stringify(e));
	}
}, vS = 35, yS = 5, bS = 15, xS = .2, SS = class {
	#e = 0;
	#t = 0;
	#n = 0;
	#r = void 0;
	#i = void 0;
	#a = void 0;
	#o = void 0;
	#s;
	#c;
	#l = {
		height: 0,
		summaryHeight: 0,
		sampleHierarchy: void 0
	};
	#u = !0;
	#d = 0;
	#f = {
		peekState: 0,
		scrollOffset: 0,
		baseVersion: -1
	};
	#p = {
		baseVersion: -1,
		height: 0,
		peekState: 0,
		scrollOffset: 0,
		sampleCount: 0
	};
	constructor(e) {
		this.#c = e;
	}
	isCloseup() {
		return this.#e === 1;
	}
	resetLocations() {
		this.#u = !0, this.#a = void 0, this.#o = void 0, this.#s = void 0, this.#d += 1, this.#f.baseVersion = -1;
	}
	reset() {
		this.#e = 0, this.resetLocations();
	}
	getPeekState() {
		return this.#e;
	}
	getScrollOffset() {
		return this.#t;
	}
	setScrollOffset(e) {
		let t = Math.max(0, this.#n - this.#c.getHeight());
		this.#t = Ft(e, 0, t);
	}
	getScrollableHeight() {
		return this.#n;
	}
	getScrollMetrics(e, t = 0) {
		return kS({
			viewportHeight: e,
			summaryHeight: t,
			scrollableHeight: this.#n,
			scrollOffset: this.#t,
			peekState: this.#e
		});
	}
	getScrollbarLayout(e, t = 0) {
		let { effectiveViewportHeight: n, contentHeight: r, effectiveScrollOffset: i } = this.getScrollMetrics(e.height, t), a = t ? e.modify({
			y: () => e.y + t,
			height: () => n
		}) : e.modify({ height: () => n });
		return {
			viewportCoords: a,
			contentCoords: a.modify({ height: () => r }),
			effectiveScrollOffset: i
		};
	}
	handleWheelEvent(e) {
		this.setScrollOffset(this.#t + e.deltaY);
	}
	#m() {
		let e = this.#a.samples[0]?.locSize.size ?? 0;
		this.#c.onLocationUpdate({ sampleHeight: e });
	}
	togglePeek(e, t, n) {
		if (this.#e > 0 && this.#e < 1 || e !== void 0 && e == !!this.#e || !this.getLocations()) return Promise.resolve();
		let r = this.#c.viewContext, i = this.#c.getHeight(), a = {
			requestAnimationFrame: (e) => r.animator.requestTransition(e),
			onUpdate: (e) => {
				this.#e = e ** 2, this.#g(), r.animator.requestRender();
			},
			from: this.#e
		};
		if (this.#e == 0) {
			let e;
			if (n) e = ((e) => e.location + e.size / 2)(this.#s.samples.find((e) => e.key == n).locSize);
			else {
				let n = this.getSummaryAt(t);
				n && (e = this.#s.summaries[n.index].locSize.location - (n.location.locSize.location - t));
			}
			if (e ? this.#t = e - t : this.#t = (this.#n - i) / 2, this.#n > i) return Be({
				...a,
				to: 1,
				duration: 500,
				easingFunction: fn
			});
			{
				let e = (e) => (1 - (e * 2 - 1) ** 2) * .5;
				return Be({
					...a,
					from: 0,
					to: 1,
					duration: 300,
					easingFunction: e
				});
			}
		} else return Be({
			...a,
			to: 0,
			duration: 400,
			easingFunction: u
		});
	}
	getLocations() {
		if (this.#g()) return this.#a;
	}
	getGroupBackgroundRects(e) {
		let t = this.getLocations();
		if (!t) return [];
		let n = t.groups, r = n.map((e) => e.key.depth).reduce((e, t) => Math.max(e, t), 0), i = n.filter((e) => e.key.depth == r), a = this.#c.getSummaryHeight();
		e = e.flatten();
		let o = this.#c.isStickySummaries() && a > 0 ? e.shrink(new dt(a, 0, 0, 0)) : e;
		return [...i.values()].map((t) => ({
			coords: e.modify({
				y: () => {
					let n = t.locSize.location;
					return e.y + n + a;
				},
				height: () => t.locSize.size - a
			}).intersect(o),
			clipRect: o
		}));
	}
	updateFacetTexture() {
		let e = this.#c.getSampleHierarchy().sampleData, t = e?.ids?.length ?? 0, n = Math.max(4, Math.ceil(t * 2 / 4) * 4);
		(!this.#i || this.#i.length !== n) && (this.#i = new Float32Array(n));
		let r = this.#c.getHeight(), i = this.#g();
		if (this.#p.baseVersion === this.#d && this.#p.height === r && this.#p.peekState === this.#e && this.#p.scrollOffset === this.#t && this.#p.sampleCount === t) return;
		let a = this.#i;
		a.fill(0);
		let o = e?.entities;
		if (i && o) {
			let e = this.#a.samples;
			for (let t of e) {
				let e = o[t.key].indexNumber;
				a[e * 2 + 0] = t.locSize.location / r, a[e * 2 + 1] = t.locSize.size / r;
			}
		}
		let s = this.#c.viewContext.glHelper.gl;
		this.#r = O(s, {
			internalFormat: s.RG32F,
			format: s.RG,
			height: 1
		}, a, this.#r), this.#p.baseVersion = this.#d, this.#p.height = r, this.#p.peekState = this.#e, this.#p.scrollOffset = this.#t, this.#p.sampleCount = t;
	}
	getFacetTexture() {
		return this.#r;
	}
	getSummaryAt(e) {
		let t = this.getLocations().summaries, n = t.findIndex((t) => AS(t.locSize, e));
		return n >= 0 ? {
			index: n,
			location: t[n]
		} : void 0;
	}
	clipBySummary(e) {
		if (this.#c.isStickySummaries()) {
			let t = this.#c.getSummaryHeight();
			if (t > 0) return e.modify({
				y: () => e.y + t,
				height: () => e.height - t
			});
		}
		return e;
	}
	#h() {
		let e = this.#c.getHeight();
		if (!e) return !1;
		let t = this.#c.getSampleHierarchy(), n = this.#c.getSummaryHeight();
		if (!this.#u && this.#l.height === e && this.#l.summaryHeight === n && this.#l.sampleHierarchy === t) return !0;
		let r = pc(t), i = this.#c.sampleLayout ?? {}, a = ES(r, {
			viewHeight: e,
			groupSpacing: i.groupSpacing ?? yS,
			sampleSpacingFactor: i.sampleSpacingFactor ?? xS,
			summaryHeight: n
		}), o = ES(r, {
			sampleHeight: i.sampleHeight ?? vS,
			groupSpacing: i.peekGroupSpacing ?? bS,
			sampleSpacingFactor: i.sampleSpacingFactor ?? xS,
			summaryHeight: n
		});
		return this.#o = {
			fitted: a,
			scrollable: o
		}, this.#s = o, this.#n = o.summaries.map((e) => e.locSize.location + e.locSize.size).reduce((e, t) => Math.max(e, t), 0), this.setScrollOffset(this.#t), this.#l = {
			height: e,
			summaryHeight: n,
			sampleHierarchy: t
		}, this.#u = !1, this.#a = void 0, this.#d += 1, !0;
	}
	#g() {
		if (!this.#h()) return !1;
		this.#a || (this.#a = CS(this.#o.fitted), this.#f.baseVersion = -1);
		let e = this.#e, t = this.#t, n = this.#d, r = this.#f.baseVersion !== n, i = this.#f.peekState !== e, a = this.#f.scrollOffset !== t;
		return !r && !i && !a ? !0 : (wS(this.#a, this.#o, e, -t), this.#f.peekState = e, this.#f.scrollOffset = t, this.#f.baseVersion = n, (r || i) && this.#m(), !0);
	}
};
function CS(e) {
	let t = {
		samples: [],
		summaries: [],
		groups: []
	};
	for (let n of e.samples) t.samples.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	for (let n of e.summaries) t.summaries.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	for (let n of e.groups) t.groups.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	return t;
}
function wS(e, t, n, r) {
	let { fitted: i, scrollable: a } = t;
	TS(e.samples, i.samples, a.samples, n, r), TS(e.summaries, i.summaries, a.summaries, n, r), TS(e.groups, i.groups, a.groups, n, r);
}
function TS(e, t, n, r, i) {
	if (r === 0) {
		for (let n = 0; n < e.length; n++) {
			let r = e[n].locSize, i = t[n].locSize;
			r.location = i.location, r.size = i.size;
		}
		return;
	}
	if (r === 1) {
		for (let t = 0; t < e.length; t++) {
			let r = e[t].locSize, a = n[t].locSize;
			r.location = a.location + i, r.size = a.size;
		}
		return;
	}
	let a = 1 - r;
	for (let o = 0; o < e.length; o++) {
		let s = e[o].locSize, c = t[o].locSize, l = n[o].locSize;
		s.location = r * (l.location + i) + a * c.location, s.size = r * l.size + a * c.size;
	}
}
function ES(e, { viewHeight: t = 0, sampleHeight: n = 0, groupSpacing: r = 5, sampleSpacingFactor: i = xS, summaryHeight: a = 0 }) {
	if (!t && !n) throw Error("viewHeight or sampleHeight must be provided!");
	let o = (e) => Ct(e), s = e.map((e) => ({
		path: e,
		sampleGroup: o(e),
		samples: o(e).samples
	})).filter((e) => e.samples.length), c = n ? (e) => ({
		px: e.length * n + a,
		grow: 0
	}) : (e) => ({
		px: a,
		grow: e.length
	}), l = [];
	Lt(s.map((e) => c(e.samples)), t, { spacing: r }).forEach((e, t) => {
		l.push({
			key: s[t].path,
			locSize: e
		});
	});
	let u = [];
	for (let [e, t] of s.entries()) {
		let n = { grow: 1 }, r = t.samples;
		Lt(r.map((e) => n), Math.max(0, l[e].locSize.size - a), { offset: l[e].locSize.location + a }).forEach((e, t) => {
			let { size: n, location: a } = e, o = n * i * .5 * Vt(15, 22, n);
			e.location = a + o, e.size = n - 2 * o, u.push({
				key: r[t],
				locSize: e
			});
		});
	}
	function* d() {
		let e = [];
		for (let t of l) {
			let n = t.key, r = Ct(n);
			for (; e.length <= n.length && e.length && n[e.length - 1] != e[e.length - 1].group;) yield e.pop();
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r.locSize.size = t.locSize.location - r.locSize.location + t.locSize.size;
			}
			for (let r = e.length; r < n.length; r++) e.push({
				group: n[r],
				locSize: { ...t.locSize },
				depth: e.length,
				n: 0
			});
			for (let t of e) t.n += r.samples.length;
		}
		for (; e.length;) yield e.pop();
	}
	return {
		samples: u,
		summaries: l,
		groups: [...d()].sort((e, t) => e.depth - t.depth).map((e, t) => ({
			key: {
				index: t,
				group: e.group,
				depth: e.depth,
				n: e.n,
				attributeLabel: void 0
			},
			locSize: e.locSize
		}))
	};
}
function DS(e, t) {
	return t.find((t) => AS(t.locSize, e));
}
function OS(e, t) {
	if (!t?.length || !Number.isFinite(e)) return;
	let n = DS(e, t);
	if (n) return n;
	let r = t[0], i = jS(e, r.locSize);
	for (let n = 1; n < t.length; n++) {
		let a = t[n], o = jS(e, a.locSize);
		o < i && (r = a, i = o);
	}
	return r;
}
function kS({ viewportHeight: e, scrollableHeight: t, scrollOffset: n, peekState: r, summaryHeight: i = 0 }) {
	let a = Math.max(0, e - i), o = t || a;
	return {
		peekState: r,
		summaryHeight: i,
		effectiveViewportHeight: a,
		effectiveScrollableHeight: o,
		contentHeight: a + (o - a) * r,
		effectiveScrollOffset: n * r
	};
}
function AS(e, t) {
	return t >= e.location && t < e.location + e.size;
}
function jS(e, t) {
	return AS(t, e) ? 0 : e < t.location ? t.location - e : e - (t.location + t.size);
}
//#endregion
//#region ../app/src/sampleView/specGuards.js
function MS(e) {
	return "samples" in e && ka(e.samples) && "spec" in e && ka(e.spec);
}
function NS(e) {
	return e && (S(e) || Ne(e)) && "aggregateSamples" in e;
}
//#endregion
//#region ../app/src/sampleView/datumLookup.js
function PS(e, t = e.getCollector()) {
	let n = e.getDataAccessor("x"), r = e.getDataAccessor("x2"), i = e.getScaleResolution("x")?.getScale()?.type, a = i ? Mt(i) : !1;
	return !t || !n ? () => void 0 : a ? (e, r) => t.facetBatches.get(jt(e))?.find((e) => r == n(e)) : !a && r ? (e, i) => t.facetBatches.get(jt(e))?.find((e) => i >= n(e) && i < r(e)) : (e, r) => t.facetBatches.get(jt(e))?.find((e) => r == n(e));
}
//#endregion
//#region ../app/src/utils/predicates/featureFilter.js
function FS(e) {
	let t = e.field;
	if (e.operator === "eq") return (n) => n[t] === e.value;
	if (e.operator === "in") {
		let n = new Set(e.values);
		return (e) => n.has(e[t]);
	} else {
		let n = La(e.operator, e.value);
		return (e) => n(e[t]);
	}
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/attributeAggregation.js
function IS(e) {
	let t = e[0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		r < t && (t = r);
	}
	return t;
}
function LS(e) {
	let t = e[0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		r > t && (t = r);
	}
	return t;
}
function RS(e, t) {
	let n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = t[i];
		n += e[i] * a, r += a;
	}
	if (r !== 0) return n / r;
}
function zS(e, t) {
	let n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = t[i];
		n += e[i] * a, r += a;
	}
	if (r === 0) return;
	let i = n / r, a = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n] - i;
		a += t[n] * r * r;
	}
	return a / r;
}
function BS(e) {
	return e.length;
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/attributeAccessors.js
function VS(e, t, n) {
	if ("interval" in t) {
		let r = ua(n, t.interval);
		return [pa(e, r[0]), pa(e, r[1])];
	} else if ("locus" in t) {
		let n = pa(e, t.locus);
		return [n, n];
	} else throw Error("Unsupported view attribute specifier.");
}
function HS(e, t) {
	let n = e.getEncoding()?.x?.type;
	if ("aggregation" in t && (!n || ![
		"quantitative",
		"index",
		"locus"
	].includes(n))) throw Error("Interval aggregation requires an x encoding of type quantitative, index, or locus!");
	let r = e.getScaleResolution("x"), i = e.getLayoutAncestors().at(-1), a = e.getCollector(), o = e.getDataAccessor("x"), s = e.mark?.defaultHitTestMode ?? "intersects", c = e.getDataAccessor("x2");
	if (!a || !o) return () => void 0;
	let l, u = () => (l ||= VS(r, t, i), l);
	if (!("aggregation" in t)) {
		let n = PS(e, a);
		return (e) => n(e, u()[0])?.[t.field];
	}
	let d = (e) => e[t.field], f = t.featureFilter ? FS(t.featureFilter) : () => !0, p, m = () => {
		if (!p) {
			let e = u();
			if (typeof e[0] != "number" || typeof e[1] != "number") throw Error("Interval aggregation requires numeric coordinates!");
			p = e[0] <= e[1] ? e : [e[1], e[0]];
		}
		return p;
	}, h = t.aggregation.op, g = h === "weightedMean" || h === "variance", _ = (e, t, n, r) => {
		let i = d(e);
		i != null && (n.push(i), g && r.push(t));
	};
	return (e) => {
		let [t, n] = m(), r = a.facetBatches.get(jt(e));
		if (!r?.length) return h === "count" || h === "itemCount" ? 0 : void 0;
		let i = [], l = [], u = 0;
		switch (da(r, o, c, s, t, n, (e, t) => {
			f(e) && (u += 1, _(e, t, i, l));
		}), h) {
			case "itemCount": return u;
			case "count": return BS(i);
			case "min": return IS(i);
			case "max": return LS(i);
			case "weightedMean": return RS(i, l);
			case "variance": return zS(i, l);
			default: throw Error("Unknown aggregation op: " + h);
		}
	};
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFormatting.js
function US(e, t) {
	let n = e.getScaleResolution("x")?.getScale(), r = "genome" in n ? n.genome() : void 0;
	if (r) {
		let e = t.every(p) ? r.toContinuousInterval(t) : t;
		return r.formatInterval(e);
	}
	return D(t[0]) + " – " + D(t[1]);
}
//#endregion
//#region ../app/src/sampleView/viewRef.js
function WS(e) {
	if (!e.explicitName) throw Error("Cannot create a view reference without an explicit view name.");
	return At(e);
}
function GS(e, t) {
	return typeof t == "string" ? XS(e, t) : YS(e, t);
}
function KS(e) {
	if (!e.explicitName) return;
	let t = At(e);
	return JSON.stringify({
		s: t.scope,
		v: t.view
	});
}
function qS(e) {
	let t = /* @__PURE__ */ new Map();
	Kt(e, (e) => {
		let n = KS(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function JS(e) {
	return typeof e == "string" ? e : JSON.stringify(e);
}
function YS(e, t) {
	let n = _t(e, t);
	if (!n) throw Error("Cannot resolve view selector: " + JS(t));
	return n;
}
function XS(e, t) {
	let n = [];
	if (Kt(e, (e) => {
		e.explicitName === t && n.push(e);
	}), n.length === 1) return n[0];
	throw n.length === 0 ? Error("Cannot find view: " + t) : Error("Multiple views named \"" + t + "\" found. Name imports or use a selector object.");
}
//#endregion
//#region ../app/src/viewScopeUtils.js
function ZS(e, t, n) {
	if (!$S(e, t)) return n;
	let r = tC(t);
	return r.length ? r.join("/") + "/" + n : n;
}
function QS(e, t) {
	return !eC(e, t.param) || !Array.isArray(t.scope) || t.scope.length === 0 ? t.param : t.scope.join("/") + "/" + t.param;
}
function $S(e, t) {
	if (!e || typeof e.visit != "function") return !1;
	let n = t.explicitName;
	if (typeof n != "string" || n.length === 0) return !1;
	let r = 0;
	return Kt(e, (e) => {
		e.explicitName === n && (r += 1);
	}), r > 1;
}
function eC(e, t) {
	if (!e || typeof e.visit != "function") return !1;
	let n = 0;
	for (let r of yt(e)) r.selector.param === t && (n += 1);
	return n > 1;
}
function tC(e) {
	try {
		return xt(e);
	} catch {
		return [];
	}
}
//#endregion
//#region ../app/src/sampleView/viewAttributeInfoSource.js
function nC(e, t) {
	let n = t.specifier, r = GS(e, n.view), i = ZS(e, r, String(r.getTitleText() ?? r.name)), a = "aggregation" in n ? As(n.aggregation.op, n.field, n.featureFilter) : n.field, o = "aggregation" in n ? rC(n.aggregation.op, n.field, n.featureFilter) : L`<em class="attribute">${n.field}</em>`, s = "aggregation" in n ? rC(n.aggregation.op, n.field, n.featureFilter) : L`<em class="attribute">${n.field}</em>`, c = HS(r, n), l = bc(c), u = (e) => {
		if (!e.interval) return l(e);
		if (!e.aggregation) throw Error("Interval values require an aggregation specification!");
		let t = HS(r, {
			view: n.view,
			field: n.field,
			interval: e.interval,
			aggregation: e.aggregation
		});
		return e.sampleIds.map((n) => t(n, e.sampleHierarchy));
	}, d = Object.entries(r.getEncoding()).find(([e, t]) => "field" in t && t.field == n.field), f = d?.[0], p = d?.[1];
	if (!p && !("aggregation" in n)) throw Error(`Cannot resolve field '${n.field}' in view '${r.name}'`);
	if (!p && "aggregation" in n && n.aggregation.op !== "count" && n.aggregation.op !== "itemCount") throw Error(`Aggregation '${n.aggregation.op}' requires a field definition for '${n.field}' in view '${r.name}'`);
	let m = f && vt(f) ? r.getScaleResolution(f).getScale() : void 0, h = p && "scale" in p && p.scale && typeof p.scale == "object" ? p.scale : void 0, g = p && "type" in p ? p.type : void 0, _ = "aggregation" in n ? "quantitative" : g, v, y;
	if ("ensureViewAttributeAvailability" in e) {
		let t = e;
		v = (e) => t.ensureViewAttributeAvailability(n, e), y = (e) => t.awaitViewAttributeProcessed(n, e);
	}
	return {
		name: a,
		attribute: t,
		title: L`${s}
            <span class="viewTitle">(${i})</span>
            ${(() => {
			if (sa(n)) {
				if (ca(n.interval)) return L`in
                    <span class="interval"
                        >${US(r, n.interval)}</span
                    >`;
				if (la(n.interval)) return L`in
                    <span class="interval"
                        >selection <strong>${QS(e, n.interval.selector)}</strong></span
                    >`;
				throw Error("Unsupported interval reference.");
			} else if ("locus" in n) return L`at
                <span class="locus"
                    >${aC(n.locus)}</span
                >`;
			else throw Error("Unsupported view attribute specifier.");
		})()}`,
		accessor: c,
		valuesProvider: u,
		type: _,
		ensureAvailability: v,
		awaitProcessed: y,
		scale: m,
		scaleSpec: h,
		emphasizedName: o,
		description: p?.description
	};
}
function rC(e, t, n) {
	if (e === "itemCount") {
		let t = n ? L`(where ${iC(n)})` : "";
		return L`${Ts(e)}${t}`;
	}
	if (e === "count") {
		let r = n ? L` where ${iC(n)}` : "";
		return L`${Ts(e)}(<em class="attribute"
                >${t}</em
            >${r})`;
	}
	let r = n ? L` where ${iC(n)}` : "";
	return L`${ws(e)}(<em class="attribute">${t}</em
        >${r})`;
}
function iC(e) {
	return e.operator === "in" ? L`<em class="attribute">${e.field}</em> in
            {${F_(e.values, (e, t) => L`${t > 0 ? ", " : ""}<strong
                            >${Os(e)}</strong
                        >`)}}` : L`<em class="attribute">${e.field}</em>
        ${Ds(e.operator)}
        ${Os(e.value)}`;
}
function aC(e) {
	return p(e) || typeof e == "number" ? D(e) : String(e);
}
//#endregion
//#region ../app/src/sampleView/sampleLabelView.js
var oC = "SAMPLE_NAME", sC = "_indexNumber", cC = "_labelWidth", lC = "_labelTitle", uC = "_labelTitleWidth", dC = Object.freeze({
	name: "sample",
	title: L`<em class="attribute">Sample</em>`,
	emphasizedName: L`<em class="attribute">Sample</em>`,
	attribute: { type: oC },
	accessor: (e) => e,
	valuesProvider: bc((e) => e),
	type: "identifier",
	scale: void 0
}), fC = class extends T {
	#e;
	#t;
	#n;
	#r = [];
	constructor(e, t) {
		super(pC(e.spec.samples, e.spec.metadata), e.context, t, t, "metadata-sample-label"), this.#e = e, this.#t = e.spec.samples.labelLength == null, this.#n = () => dC, e.compositeAttributeInfoSource.addAttributeInfoSource(oC, this.#n), this.addInteractionListener("contextmenu", this.handleContextMenu.bind(this)), this.registerDisposer(Vx(e.provenance.store, (e) => e.provenance.present.sampleView.sampleData, (e) => {
			this.#i(Object.values(e.entities));
		})), this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
			this.#i(this.#r);
		}));
	}
	#i(e) {
		this.#r = e;
		let t = this.flowHandle?.dataSource;
		if (!t) return;
		let n = hC(this.#e.spec.samples) ?? "";
		t.updateDynamicData(e.map((e) => ({
			id: e.id,
			displayName: e.displayName ?? e.id,
			[sC]: e.indexNumber,
			[lC]: n
		}))), this.#t && this.#a();
	}
	render(e, t, n = {}) {
		this.isConfiguredVisible() && super.render(e, t, {
			...n,
			clipRect: this.#e.locationManager.clipBySummary(t)
		});
	}
	#a() {
		let e = this.getCollector();
		if (!e?.completed) return;
		let t = mC(e);
		this.spec.width !== t && (this.spec.width = t, this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
	handleContextMenu(e) {
		let t = this.#e.findSampleForMouseEvent(e);
		if (!t) {
			e.mouseEvent.preventDefault();
			return;
		}
		let n = [this.#e.makePeekMenuItem(e.point.y - this.#e.childCoords.y, t.id), Ly];
		n.push(...nb(L`Sample: <strong>${t.displayName}</strong>`, dC, t.id, this.#e)), Qy({ items: n }, e.mouseEvent);
	}
	dispose() {
		super.dispose(), this.#e.compositeAttributeInfoSource.removeAttributeInfoSource(oC, this.#n);
	}
};
function pC(e, t) {
	let n = hC(e), r = {
		name: "sample-labels",
		datasets: { samples: [] },
		data: { name: "samples" },
		width: e.labelLength ?? 0,
		configurableVisibility: !0,
		transform: [{
			type: "measureText",
			field: "displayName",
			as: cC,
			fontSize: e.labelFontSize ?? 11,
			font: e.labelFont,
			fontStyle: e.labelFontStyle,
			fontWeight: e.labelFontWeight
		}, {
			type: "measureText",
			field: lC,
			as: uC,
			fontSize: t?.labelFontSize ?? 11,
			font: t?.labelFont,
			fontStyle: t?.labelFontStyle,
			fontWeight: t?.labelFontWeight
		}],
		mark: {
			type: "text",
			baseline: "middle",
			font: e.labelFont,
			size: e.labelFontSize ?? 11,
			fontStyle: e.labelFontStyle,
			fontWeight: e.labelFontWeight,
			align: e.labelAlign ?? "left",
			flushY: !1
		},
		encoding: {
			facetIndex: { field: sC },
			x: { value: 0 },
			x2: { value: 1 },
			y: { value: 0 },
			y2: { value: 1 },
			text: { field: "displayName" }
		}
	};
	return n !== null && (r.title = {
		text: n,
		orient: "bottom",
		anchor: "start",
		offset: 5,
		font: t?.labelFont,
		fontSize: t?.labelFontSize ?? 11,
		fontStyle: t?.labelFontStyle,
		fontWeight: t?.labelFontWeight
	}), r;
}
function mC(e) {
	let t = 0;
	return e.visitData((e) => {
		t = Math.max(t, Number(e[cC]) || 0, Number(e[uC]) || 0);
	}), Math.ceil(t);
}
function hC(e) {
	return e.labelTitle === void 0 ? "Sample" : e.labelTitle;
}
//#endregion
//#region ../app/src/sampleView/sampleViewSpecNormalizer.js
var gC = "The samples.data, samples.attributeGroupSeparator, and samples.attributes properties are deprecated. Use metadata.sources instead.", _C = "samples.metadataSources is deprecated. Use metadata.sources instead.", vC = "Metadata layout properties under samples are deprecated. Use metadata layout properties instead.", yC = "samples.labelTitleText is deprecated. Use samples.labelTitle instead.";
function bC(e) {
	return typeof e == "object" && !!e && ("url" in e || "values" in e);
}
function xC(e) {
	return e.data !== void 0 || e.attributeGroupSeparator !== void 0 || e.attributes !== void 0;
}
function SC(e) {
	let t = {};
	return e.attributeSize !== void 0 && (t.attributeWidth = e.attributeSize), e.attributeSpacing !== void 0 && (t.spacing = e.attributeSpacing), e.attributeLabelFont !== void 0 && (t.labelFont = e.attributeLabelFont), e.attributeLabelFontSize !== void 0 && (t.labelFontSize = e.attributeLabelFontSize), e.attributeLabelFontStyle !== void 0 && (t.labelFontStyle = e.attributeLabelFontStyle), e.attributeLabelFontWeight !== void 0 && (t.labelFontWeight = e.attributeLabelFontWeight), e.attributeLabelAngle !== void 0 && (t.labelAngle = -90 + e.attributeLabelAngle), t;
}
function CC(e) {
	let t = e.data;
	if (!bC(t)) throw Error("Legacy samples.data must be UrlData or InlineData when mapping to metadata.sources.");
	let n = {
		initialLoad: "*",
		excludeColumns: ["displayName"],
		backend: {
			backend: "data",
			data: t,
			sampleIdField: "sample"
		}
	};
	return e.attributeGroupSeparator !== void 0 && (n.attributeGroupSeparator = e.attributeGroupSeparator), e.attributes !== void 0 && (n.attributes = e.attributes), n;
}
function wC(e) {
	let t = e.samples ?? {}, n = e.metadata ?? {}, r = [], i = n.sources !== void 0, a = t.metadataSources !== void 0, o = xC(t);
	if (i && a) throw Error("Cannot combine metadata.sources with samples.metadataSources. Use metadata.sources only.");
	if (i && o) throw Error("Cannot combine metadata.sources with legacy sample metadata fields (samples.data, samples.attributeGroupSeparator, and samples.attributes). Use metadata.sources only.");
	if (a && o) throw Error("Cannot combine samples.metadataSources with legacy sample metadata fields (samples.data, samples.attributeGroupSeparator, and samples.attributes). Use metadata.sources only.");
	let s = SC(t), c = Object.keys(s).length > 0, l = { ...t }, u = { ...n }, d = !1;
	return t.labelTitleText !== void 0 && t.labelTitle === void 0 && (l.labelTitle = t.labelTitleText, d = !0, r.push(yC)), o ? (l.identity = t.identity ?? {
		data: t.data,
		idField: "sample",
		displayNameField: "displayName"
	}, u.sources = [CC(t)], d = !0, r.push(gC)) : a && (u.sources = t.metadataSources, d = !0, r.push(_C)), c && (Object.assign(u, s, n), d = !0, r.push(vC)), d ? {
		spec: {
			...e,
			samples: l,
			metadata: u
		},
		warnings: r
	} : {
		spec: e,
		warnings: r
	};
}
//#endregion
//#region ../app/src/utils/ui/schemeToDataUrl.js
var TC = /* @__PURE__ */ "blues.greens.greys.oranges.purples.reds.blueGreen.bluePurple.greenBlue.orangeRed.purpleBlue.purpleBlueGreen.purpleRed.redPurple.yellowGreen.yellowOrangeBrown.yellowOrangeRed.blueOrange.brownBlueGreen.purpleGreen.purpleOrange.redBlue.redGrey.yellowGreenBlue.redYellowBlue.redYellowGreen.pinkYellowGreen.spectral.viridis.magma.inferno.plasma.cividis.rainbow.sinebow.turbo.browns.tealBlues.teals.warmGreys.goldGreen.goldOrange.goldRed.lightGreyRed.lightGreyTeal.lightMulti.lightOrange.lightTealBlue.darkBlue.darkGold.darkGreen.darkMulti.darkRed.accent.category10.category20.category20b.category20c.dark2.observable10.paired.pastel1.pastel2.set1.set2.set3.tableau10.tableau20".split(".");
function EC(e) {
	let t = document.createElement("canvas");
	t.width = 120, t.height = 14;
	let n = t.getContext("2d"), r = bt(e);
	if (!r) throw Error(`Unknown scheme name: ${e}`);
	if (typeof r == "function") {
		let e = r, i = t.width / 20;
		for (let r = 0; r < 20; r++) n.fillStyle = e(r / 19), n.fillRect(Math.floor(r * i), 0, Math.ceil(i), t.height);
	} else if (Array.isArray(r)) {
		let e = r, i = e.length, a = t.width / i;
		for (let r = 0; r < i; r++) n.fillStyle = e[r], n.fillRect(Math.floor(r * a), 0, Math.ceil(a), t.height);
	} else throw Error(`Unknown scheme format for scheme: ${e}`);
	return t.toDataURL();
}
//#endregion
//#region ../app/src/sampleView/metadata/scaleUtils.js
function DC(e, t) {
	if (e === "quantitative") {
		let e = Infinity, n = -Infinity;
		for (let r of t) {
			let t = Number(r);
			Number.isFinite(t) && (t < e && (e = t), t > n && (n = t));
		}
		return e === Infinity ? [] : [e, n];
	}
	let n = /* @__PURE__ */ new Set();
	for (let e of t) e != null && n.add(String(e));
	return Array.from(n);
}
//#endregion
//#region ../app/src/components/generic/customSelect.js
var OC = class extends A {
	static properties = {
		options: { type: Array },
		value: {},
		disabled: { type: Boolean },
		renderOption: { attribute: !1 },
		getValue: { attribute: !1 },
		getLabel: { attribute: !1 },
		_activeIndex: { state: !0 },
		_open: { state: !0 }
	};
	_popoverId;
	_cleanupAutoUpdate;
	constructor() {
		super(), this.options = [], this.value = null, this.disabled = !1, this.renderOption = null, this.getValue = (e) => e && typeof e == "object" && "value" in e ? e.value : e, this.getLabel = (e) => e && typeof e == "object" && "label" in e ? String(e.label) : String(e), this._activeIndex = -1, this._open = !1, this._popoverId = `gs-select-${Math.random().toString(36).slice(2)}`, this._cleanupAutoUpdate = null, this.addEventListener("keydown", (e) => {
			e.stopPropagation();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#d(), this.#u();
	}
	static styles = [Vg, o`
            :host {
                display: inline-block;
                font-size: inherit;
                font-family: inherit;
            }

            .container {
                position: relative;
                display: block;
                min-width: 12em;
            }

            .trigger.btn {
                width: 100%;
                justify-content: flex-start;
                gap: 0.5em;
            }

            .selected-content {
                display: inline-flex;
                align-items: center;
                gap: 0.5em;
                line-height: 1.4;
            }

            .panel {
                background: #fff;
                border: 1px solid var(--form-control-border-color);
                border-radius: var(--form-control-border-radius);
                box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.12);
                padding: 0.35em 0.35em;
                max-height: 300px;
                overflow: auto;
                min-width: 100%;
                /* Avoid default focus ring on the container when keyboard-opening */
                outline: none;
            }

            .panel:focus,
            .panel:focus-visible {
                outline: none;
            }

            /* Popover positioned with floating-ui */
            .panel[popover] {
                position: absolute;
                margin: 0;
                inset: unset;
                border: 1px solid var(--form-control-border-color);
            }

            .option {
                display: flex;
                align-items: center;
                gap: 0.5em;
                padding: 0.35em 0.5em;
                border-radius: 0.3em;
                cursor: pointer;
                user-select: none;
            }

            .option:hover {
                background-color: #f3f4f6;
            }

            .option[aria-selected="true"] {
                background-color: #e9ecef;
            }

            .option.active {
                background-color: #eef3ff;
                outline: 2px solid #c6dbff;
                outline-offset: -2px;
            }
        `];
	#e() {
		return this.renderRoot.querySelector(`#${this._popoverId}`);
	}
	#t() {
		return this.renderRoot.querySelector(".trigger");
	}
	#n() {
		let e = this.value;
		return this.options.findIndex((t) => this.getValue(t) === e);
	}
	#r() {
		let e = this.#n();
		return e >= 0 ? this.options[e] : null;
	}
	#i(e) {
		let t = this.getValue(e);
		this.dispatchEvent(new kC(t, e));
	}
	#a() {
		this._open = !0;
		let e = this.#n();
		this._activeIndex = e >= 0 ? e : 0, this.updateComplete.then(() => {
			let e = this.#e();
			e && (e.showPopover(), this.#l(), this.#s(), e.focus());
		});
	}
	#o() {
		this._open = !1, this.#u();
		let e = this.#e();
		e && e.hidePopover();
	}
	#s() {
		(this.#e()?.querySelector(`[data-index="${this._activeIndex}"]`))?.scrollIntoView({ block: "nearest" });
	}
	#c() {
		let e = this.#t(), t = this.#e();
		if (!e || !t) return;
		let n = e.getBoundingClientRect();
		t.style.minWidth = `${n.width}px`, Ny(e, t, {
			placement: "bottom-start",
			middleware: [jy(4), My()]
		}).then(({ x: e, y: n }) => {
			this._open && (t.style.left = `${e}px`, t.style.top = `${n}px`);
		});
	}
	#l() {
		let e = this.#t(), t = this.#e();
		!e || !t || (this.#u(), this.#c(), this._cleanupAutoUpdate = Ay(e, t, () => this.#c()));
	}
	#u() {
		this._cleanupAutoUpdate &&= (this._cleanupAutoUpdate(), null);
	}
	#d() {}
	#f(e) {
		e.preventDefault(), !this.disabled && (this._open ? this.#o() : this.#a());
	}
	#p(e) {
		this.disabled || (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " " || e.key === "Enter") && (e.preventDefault(), this.#a());
	}
	#m(e) {
		if (e.key === "Escape") {
			e.preventDefault(), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
			return;
		}
		if (e.key === "Enter") {
			e.preventDefault();
			let t = this._activeIndex;
			if (t >= 0 && t < this.options.length) {
				let e = this.options[t];
				this.value = this.getValue(e), this.#i(e), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
			}
			return;
		}
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			let t = e.key === "ArrowDown" ? 1 : -1, n = Math.max(0, Math.min(this.options.length - 1, this._activeIndex + t));
			this._activeIndex = n, this.#s();
		}
	}
	#h(e) {
		return this.renderOption && e ? L`<span class="selected-content"
                >${this.renderOption(e)}</span
            >` : L`<span class="selected-content">${e ? this.getLabel(e) : ""}</span>`;
	}
	#g(e, t) {
		let n = this.getValue(e) === this.value, r = t === this._activeIndex;
		return L`
            <div
                id=${`${this._popoverId}-opt-${t}`}
                class=${r ? "option active" : "option"}
                role="option"
                aria-selected=${n ? "true" : "false"}
                tabindex="-1"
                data-index=${t}
                @click=${() => {
			this.value = this.getValue(e), this.#i(e), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
		}}
                @mousemove=${() => {
			this._activeIndex = t;
		}}
            >
                ${this.renderOption ? this.renderOption(e) : L`${this.getLabel(e)}`}
            </div>
        `;
	}
	render() {
		let e = this.#r(), t = this._activeIndex >= 0 ? `${this._popoverId}-opt-${this._activeIndex}` : void 0;
		return L`
            <div class="container">
                <button
                    class="trigger btn"
                    type="button"
                    popovertarget=${this._popoverId}
                    aria-haspopup="listbox"
                    aria-expanded=${this._open}
                    ?disabled=${this.disabled}
                    @click=${(e) => this.#f(e)}
                    @keydown=${(e) => this.#p(e)}
                >
                    ${this.#h(e)}
                </button>

                <div
                    id=${this._popoverId}
                    class="panel"
                    popover="auto"
                    role="listbox"
                    tabindex="0"
                    aria-activedescendant=${t}
                    @keydown=${(e) => this.#m(e)}
                    @toggle=${(e) => {
			e.newState === "closed" && this._open && this.#o();
		}}
                >
                    ${this.options.map((e, t) => this.#g(e, t))}
                </div>
            </div>
        `;
	}
};
customElements.define("gs-custom-select", OC);
var kC = class extends Event {
	value;
	option;
	constructor(e, t) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.value = e, this.option = t;
	}
}, AC = "#808080";
function jC(e) {
	return e == null ? 2 : 3;
}
function MC(e) {
	return e === "nominal" || e === "ordinal";
}
function NC(e, t, n, r) {
	let i = MC(t), a = {
		dataType: t,
		colorMode: "scheme",
		domainMode: "observed",
		scaleType: r.scaleType,
		scheme: r.scheme,
		quantDomain: [],
		quantRange: [],
		domainMid: null,
		domainPairs: [],
		thresholds: [],
		thresholdRange: [],
		unsupportedPiecewise: !1
	};
	if (!e) return i && n.length > 0 ? a.domainPairs = n.map((e) => ({
		domain: String(e),
		range: AC
	})) : !i && n.length === 2 && (a.quantDomain = n), a;
	if (!i && e.type && (a.scaleType = e.type), e.scheme && (a.scheme = e.scheme), e.domainMid != null && (a.domainMid = e.domainMid), e.range && (a.colorMode = "manual"), e.domain && (a.domainMode = "explicit"), !i && e.type === "threshold") return a.colorMode = "manual", a.domainMode = "explicit", a.thresholds = e.domain ?? [], a.thresholdRange = e.range ?? [], a;
	if (!i && Array.isArray(e.domain) && e.domain.length > 2) {
		let t = e.domain, n = Array.isArray(e.range) ? e.range : null, r = e.range == null || n?.length === t.length;
		return t.length === 3 && r ? (a.domainMid = t[1], a.quantDomain = [t[0], t[2]], n && (a.quantRange = n)) : (a.unsupportedPiecewise = !0, a.quantDomain = t, n && (a.quantRange = n)), a;
	}
	if (i) {
		let t = Array.isArray(e.domain) ? e.domain.map((e) => String(e)) : [];
		if (a.colorMode === "manual") {
			let n = e.range ?? [];
			a.domainPairs = t.length > 0 ? t.map((e, t) => ({
				domain: e,
				range: n[t] ?? "#808080"
			})) : n.map((e) => ({
				domain: "",
				range: e
			}));
		} else a.domainPairs = t.map((e) => ({
			domain: e,
			range: AC
		}));
		return a;
	}
	return Array.isArray(e.domain) ? a.quantDomain = e.domain : n.length === 2 && (a.quantDomain = n), e.range && (a.quantRange = e.range), a;
}
function PC(e, t, n, r) {
	let i = n.length === 2, a = i ? Number(n[0]) : 0, o = i ? Number(n[1]) : 1, s = Array.isArray(e) ? [...e] : [];
	s.length === 0 ? s.push(a, o) : s.length === 1 && s.push(o);
	let c = [s[0] ?? a, s[s.length - 1] ?? o], l = jC(r), u = Array.isArray(t) ? [...t] : [];
	if (u.length < l) {
		let e = u[u.length - 1] ?? "#808080";
		for (; u.length < l;) u.push(e);
	} else u.length > l && (u = u.slice(0, l));
	return {
		quantDomain: c,
		quantRange: u
	};
}
function FC(e, t) {
	let n = Math.max(0, e.length + 1), r = [...t];
	if (r.length < n) {
		let e = r[r.length - 1] ?? "#808080";
		for (; r.length < n;) r.push(e);
	} else r.length > n && (r = r.slice(0, n));
	return {
		thresholds: [...e],
		thresholdRange: r
	};
}
function IC(e) {
	if (e.dataType === "quantitative") {
		if (e.scaleType === "threshold") return e.colorMode === "manual" ? e.domainMode === "explicit" ? e.thresholds.length === 0 ? "Add at least one threshold." : e.thresholdRange.length === e.thresholds.length + 1 ? null : "Threshold scales require one more color than thresholds." : "Threshold scales require an explicit domain." : "Threshold scales require manual colors.";
		if (e.unsupportedPiecewise) return "Piecewise quantitative scales support up to three domain stops.";
		if (e.domainMode === "explicit" && e.quantDomain.length !== 2) return "Explicit quantitative domains require min and max values.";
		if (e.colorMode === "manual") {
			let t = jC(e.domainMid);
			if (e.quantRange.length !== t) return "Manual quantitative ranges must match the domain stops.";
		}
		return null;
	}
	if (e.colorMode === "manual" && e.domainMode !== "explicit") return "Manual colors require an explicit domain.";
	if (e.domainMode === "explicit") {
		if (e.domainPairs.length === 0) return "Add at least one domain value.";
		if (e.domainPairs.some((e) => e.domain.trim() === "")) return "All domain values must be filled.";
	}
	return null;
}
function LC(e) {
	let t = {};
	if (e.unsupportedPiecewise) return null;
	if (e.scaleType === "threshold") return t.type = "threshold", e.colorMode !== "manual" || e.domainMode !== "explicit" || e.thresholds.length === 0 || e.thresholdRange.length !== e.thresholds.length + 1 ? null : (t.domain = e.thresholds, t.range = e.thresholdRange, t);
	if (e.scaleType && (t.type = e.scaleType), e.domainMid != null && (t.domainMid = e.domainMid), e.colorMode === "scheme") return e.scheme && (t.scheme = e.scheme), e.domainMode === "explicit" && (t.domain = e.quantDomain), zC(t);
	let n = jC(e.domainMid);
	if (e.quantRange.length !== n) return null;
	if (e.domainMode === "explicit") {
		if (e.quantDomain.length !== 2) return null;
		t.domain = e.quantDomain;
	}
	return t.range = e.quantRange, zC(t);
}
function RC(e) {
	let t = {};
	return e.colorMode === "scheme" ? (e.scheme && (t.scheme = e.scheme), e.domainMode === "explicit" && (t.domain = e.domainPairs.map((e) => e.domain)), zC(t)) : e.domainMode === "explicit" ? (t.domain = e.domainPairs.map((e) => e.domain), t.range = e.domainPairs.map((e) => e.range), zC(t)) : null;
}
function zC(e) {
	return Object.keys(e).length > 0 ? e : void 0;
}
var BC = class extends q {
	static properties = {
		...super.properties,
		dataType: { type: String },
		observedDomain: { type: Array },
		scale: { type: Object },
		colorMode: {
			type: String,
			state: !0
		},
		domainMode: {
			type: String,
			state: !0
		},
		scheme: {
			type: String,
			state: !0
		},
		scaleType: {
			type: String,
			state: !0
		},
		domainPairs: {
			type: Array,
			state: !0
		},
		quantDomain: {
			type: Array,
			state: !0
		},
		quantRange: {
			type: Array,
			state: !0
		},
		domainMid: {
			type: Number,
			state: !0
		},
		thresholds: {
			type: Array,
			state: !0
		},
		thresholdRange: {
			type: Array,
			state: !0
		},
		unsupportedPiecewise: {
			type: Boolean,
			state: !0
		}
	};
	constructor() {
		super(), this.dataType = "quantitative", this.observedDomain = [], this.scale = null, this.dialogTitle = "Configure Scale", this.colorMode = "scheme", this.domainMode = "observed", this.scheme = "", this.scaleType = "", this.domainPairs = [], this.quantDomain = [], this.quantRange = [], this.domainMid = null, this.thresholds = [], this.thresholdRange = [], this.unsupportedPiecewise = !1;
	}
	connectedCallback() {
		super.connectedCallback(), this.#e();
	}
	#e() {
		let e = NC(this.scale, this.dataType, this.observedDomain, {
			scheme: this.scheme,
			scaleType: this.scaleType
		});
		this.colorMode = e.colorMode, this.domainMode = e.domainMode, this.scheme = e.scheme, this.scaleType = e.scaleType, this.quantDomain = e.quantDomain, this.quantRange = e.quantRange, this.domainMid = e.domainMid, this.domainPairs = e.domainPairs, this.thresholds = e.thresholds, this.thresholdRange = e.thresholdRange, this.unsupportedPiecewise = e.unsupportedPiecewise, this.scaleType === "threshold" && this.#u();
	}
	static styles = [...super.styles, o`
            .gs-form-section {
                margin-bottom: var(--gs-basic-spacing, 10px);
            }

            .gs-form-section-title {
                font-weight: bold;
                margin-bottom: 0.5em;
            }

            .radio-group {
                display: flex;
                flex-direction: column;
            }

            .radio-group label {
                display: flex;
                align-items: center;
                gap: 0.3em;
            }

            .domain-range-list {
                display: flex;
                flex-direction: column;
                gap: 0.5em;
            }

            .domain-range-row {
                display: flex;
                align-items: center;
                gap: 0.5em;
            }

            .domain-range-row input[type="text"] {
                flex: 1;
            }

            .domain-range-row input[type="color"] {
                width: 50px;
                height: 30px;
            }

            .range-color-pickers {
                display: flex;
                gap: 0.75em;
                flex-wrap: wrap;
                align-items: center;
            }

            .range-color-btn {
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                gap: 0.35em;
                padding: 0.35em 0.9em;
                border-radius: var(--form-control-border-radius);
                background: #f0f0f0;
                white-space: nowrap;
            }

            .range-color-label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.15em;
            }

            .range-color-label code {
                font-size: 0.8em;
                color: var(--text-muted, #666);
            }

            .icon-btn {
                background: none;
                border: 1px solid var(--form-control-border-color);
                border-radius: var(--form-control-border-radius);
                padding: 0.3em 0.5em;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .icon-btn:hover {
                background-color: var(--button-hover-bg, #f0f0f0);
            }

            .icon-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .domain-inputs {
                display: flex;
                gap: 0.5em;
                align-items: center;
            }

            .domain-inputs input {
                width: 100px;
            }

            .error-msg {
                color: var(--danger-color, #dc3545);
                font-size: 0.85em;
                margin-top: 0.25em;
            }

            .form-input {
                display: block;
                width: 100%;
            }
        `];
	#t() {
		this.domainPairs = [...this.domainPairs, {
			domain: "",
			range: AC
		}];
	}
	#n(e) {
		this.domainPairs = this.domainPairs.filter((t, n) => n !== e);
	}
	#r(e, t, n) {
		this.domainPairs = this.domainPairs.map((r, i) => i === e ? {
			...r,
			[t]: n
		} : r);
	}
	#i(e, t) {
		this.quantRange = this.quantRange.map((n, r) => r === e ? t : n);
	}
	#a(e, t) {
		this.thresholds = this.thresholds.map((n, r) => r === e ? t : n);
	}
	#o(e, t) {
		this.thresholdRange = this.thresholdRange.map((n, r) => r === e ? t : n);
	}
	#s() {
		let e = this.thresholds[this.thresholds.length - 1] ?? 0;
		this.thresholds = [...this.thresholds, e], this.#u();
	}
	#c(e) {
		this.thresholds = this.thresholds.filter((t, n) => n !== e), this.#u();
	}
	#l() {
		if (this.unsupportedPiecewise) return;
		let e = PC(this.quantDomain, this.quantRange, this.observedDomain, this.domainMid);
		(this.quantDomain.length !== e.quantDomain.length || e.quantDomain.some((e, t) => e !== this.quantDomain[t])) && (this.quantDomain = e.quantDomain), (this.quantRange.length !== e.quantRange.length || e.quantRange.some((e, t) => e !== this.quantRange[t])) && (this.quantRange = e.quantRange);
	}
	#u() {
		let e = FC(this.thresholds, this.thresholdRange);
		(this.thresholds.length !== e.thresholds.length || e.thresholds.some((e, t) => e !== this.thresholds[t])) && (this.thresholds = e.thresholds), (this.thresholdRange.length !== e.thresholdRange.length || e.thresholdRange.some((e, t) => e !== this.thresholdRange[t])) && (this.thresholdRange = e.thresholdRange);
	}
	async #d() {
		let e = IC(this.#p());
		if (e) {
			await Y(e, {
				title: "Warning",
				type: "warning"
			});
			return;
		}
		let t = this.#f();
		t === null ? await Y("Unable to build scale from the current settings.", {
			title: "Warning",
			type: "warning"
		}) : (this.finish({
			ok: !0,
			data: t
		}), this.triggerClose());
	}
	#f() {
		return this.dataType === "quantitative" ? this.#m() : this.#h();
	}
	#p() {
		return {
			dataType: this.dataType,
			colorMode: this.colorMode,
			domainMode: this.domainMode,
			scaleType: this.scaleType,
			scheme: this.scheme,
			quantDomain: this.quantDomain,
			quantRange: this.quantRange,
			domainMid: this.domainMid,
			domainPairs: this.domainPairs,
			thresholds: this.thresholds,
			thresholdRange: this.thresholdRange,
			unsupportedPiecewise: this.unsupportedPiecewise
		};
	}
	#m() {
		return LC(this.#p());
	}
	#h() {
		return RC(this.#p());
	}
	#g() {
		return this.scaleType === "threshold" ? L`` : L`
            <div class="gs-form-group">
                <label for="schemeColorModeRadio">Color Mapping</label>
                <div class="radio-group">
                    ${this.#_("scheme", "Use Color Scheme", "schemeColorModeRadio")}
                    ${this.#_("manual", "Manual Colors", "manualColorModeRadio")}
                </div>
            </div>
        `;
	}
	#_(e, t, n) {
		return L`
            <label>
                <input
                    type="radio"
                    id=${n}
                    name="colorMode"
                    value=${e}
                    ?checked=${this.colorMode === e}
                    @change=${() => this.colorMode = e}
                />
                ${t}
            </label>
        `;
	}
	#v() {
		return L`
            <div class="gs-form-group">
                <label>Color Scheme</label>
                <gs-custom-select
                    class="form-input"
                    .options=${["", ...TC]}
                    .value=${this.scheme}
                    .getLabel=${(e) => e || "Auto"}
                    .renderOption=${(e) => e ? L`<img src=${EC(e)} />
                                  <span>${e}</span>` : L`<span>Auto</span>`}
                    @change=${(e) => {
			this.scheme = e.target.value;
		}}
                >
                </gs-custom-select>
            </div>
        `;
	}
	#y() {
		this.domainMode = "observed", this.dataType === "quantitative" && this.observedDomain.length === 2 && (this.quantDomain = this.observedDomain);
	}
	#b() {
		if (this.domainMode = "explicit", this.dataType === "quantitative" && this.quantDomain.length < 2) {
			let e = this.observedDomain.length === 2 ? this.observedDomain : [0, 1];
			this.quantDomain = [...e];
		}
	}
	#x() {
		let e = this.observedDomain.slice(0, 5), t = this.observedDomain.length > 5;
		return L`<span>
            Observed (${this.observedDomain.length}):
            ${e.map((e) => L`<code>${String(e)}</code> `)}
            ${t ? L`...` : ""}
        </span>`;
	}
	#S() {
		let e = this.scaleType === "threshold";
		return L`
            <div class="gs-form-group">
                <label for="observedDomainRadio">Domain Source</label>
                <div class="radio-group">
                    <label class="checkbox">
                        <input
                            id="observedDomainRadio"
                            type="radio"
                            name="domainMode"
                            value="observed"
                            ?checked=${this.domainMode === "observed"}
                            ?disabled=${e}
                            @change=${() => this.#y()}
                        />
                        Use observed values (updates with data)
                    </label>
                    <label class="checkbox">
                        <input
                            type="radio"
                            name="domainMode"
                            value="explicit"
                            ?checked=${this.domainMode === "explicit"}
                            ?disabled=${e}
                            @change=${() => this.#b()}
                        />
                        Explicit domain (fixed)
                    </label>
                </div>
                ${this.domainMode === "observed" && this.dataType !== "quantitative" ? L`<div
                          style="margin-top: 0.35em; font-size: 0.9em; color: #555;"
                      >
                          ${this.#x()}
                      </div>` : ""}
            </div>
        `;
	}
	#C(e) {
		return L`
            <div class="gs-form-group">
                <label>Domain and Range</label>
                <div class="domain-range-list">
                    ${this.domainPairs.map((t, n) => L`
                            <div class="domain-range-row">
                                <input
                                    type="text"
                                    placeholder="Domain value"
                                    .value=${t.domain}
                                    @input=${(e) => this.#r(n, "domain", e.target.value)}
                                />
                                ${e ? L`
                                          <input
                                              class="btn"
                                              type="color"
                                              .value=${t.range}
                                              @input=${(e) => this.#r(n, "range", e.target.value)}
                                          />
                                      ` : ""}
                                <button
                                    class="icon-btn"
                                    @click=${() => this.#n(n)}
                                    ?disabled=${this.domainPairs.length <= 1}
                                >
                                    ${K(nf).node[0]}
                                </button>
                            </div>
                        `)}
                    <button
                        class="icon-btn"
                        @click=${() => this.#t()}
                    >
                        ${K(vf).node[0]} Add Value
                    </button>
                </div>
            </div>
        `;
	}
	#w() {
		return L` ${this.#v()} `;
	}
	#T(e = !1) {
		return L`
            <div class="domain-inputs">
                <label style="display:flex;align-items:center;gap:0.4em;">
                    <span>Min</span>
                    <input
                        type="number"
                        .value=${String(this.quantDomain[0] ?? this.observedDomain[0] ?? 0)}
                        ?disabled=${e}
                        @input=${(e) => {
			let t = Number(e.target.value), n = [...this.quantDomain];
			n[0] = t, n.length < 2 && (n[1] = t), this.quantDomain = n;
		}}
                    />
                </label>
                <label style="display:flex;align-items:center;gap:0.4em;">
                    <span>Max</span>
                    <input
                        type="number"
                        .value=${String(this.quantDomain[1] ?? this.observedDomain[1] ?? this.quantDomain[0] ?? this.observedDomain[0] ?? 1)}
                        ?disabled=${e}
                        @input=${(e) => {
			let t = Number(e.target.value), n = [...this.quantDomain];
			n[1] = t, n.length < 2 && (n[0] = t), this.quantDomain = n;
		}}
                    />
                </label>
            </div>
        `;
	}
	#E() {
		return L`
            <div class="gs-form-group">
                <label>Domain Midpoint</label>
                <input
                    type="number"
                    placeholder="Optional: midpoint for diverging scales"
                    .value=${this.domainMid == null ? "" : String(this.domainMid)}
                    @input=${(e) => {
			let t = e.target.value;
			this.domainMid = t === "" ? null : Number(t);
		}}
                />
            </div>
        `;
	}
	#D() {
		return L`
            <div class="gs-form-group">
                <label for="scaleTypeSelect">Scale Type</label>
                <select
                    id="scaleTypeSelect"
                    .value=${this.scaleType}
                    @change=${(e) => {
			let t = e.target.value;
			this.scaleType = t, this.scaleType === "threshold" && (this.colorMode = "manual", this.domainMode = "explicit", this.thresholds.length === 0 && (this.thresholds = [0]), this.#u());
		}}
                >
                    ${[
			["", "Auto"],
			"linear",
			"log",
			"sqrt",
			"pow",
			"symlog",
			"threshold"
		].map((e) => L` <option value=${Array.isArray(e) ? e[0] : e}>${Array.isArray(e) ? e[1] : e}</option> `)}
                </select>
            </div>
        `;
	}
	#O() {
		return this.scaleType === "threshold" ? this.#k() : this.colorMode === "scheme" ? this.#w() : (this.#l(), this.#A());
	}
	#k() {
		return L`
            <div class="gs-form-group">
                <label>Thresholds</label>
                <div class="domain-range-list">
                    ${this.thresholds.map((e, t) => L`
                            <div class="domain-range-row">
                                <input
                                    type="number"
                                    .value=${String(e)}
                                    @input=${(e) => {
			let n = Number(e.target.value);
			this.#a(t, n);
		}}
                                />
                                <button
                                    class="icon-btn"
                                    @click=${() => this.#c(t)}
                                    ?disabled=${this.thresholds.length <= 1}
                                >
                                    ${K(nf).node[0]}
                                </button>
                            </div>
                        `)}
                    <button
                        class="icon-btn"
                        @click=${() => this.#s()}
                    >
                        ${K(vf).node[0]} Add Threshold
                    </button>
                </div>
            </div>
            <div class="gs-form-group">
                <label>Range colors</label>
                <div class="range-color-pickers">
                    ${this.thresholdRange.map((e, t) => L`
                            <label class="range-color-btn">
                                <span class="range-color-label">
                                    <strong>
                                        ${t === 0 ? "Below" : t === this.thresholdRange.length - 1 ? "Above" : "Between"}
                                    </strong>
                                </span>
                                <input
                                    class="btn"
                                    type="color"
                                    .value=${e}
                                    @input=${(e) => this.#o(t, e.target.value)}
                                />
                            </label>
                        `)}
                </div>
            </div>
        `;
	}
	#A() {
		let e = this.quantDomain[0] ?? this.observedDomain[0] ?? 0, t = this.quantDomain[1] ?? this.observedDomain[1] ?? this.quantDomain[0] ?? 1, n = this.domainMid != null, r = n ? [
			e,
			this.domainMid,
			t
		] : [e, t], i = n ? [
			"Min",
			"Mid",
			"Max"
		] : ["Min", "Max"];
		return L`
            <div class="gs-form-group">
                <label>Range colors</label>
                <div class="range-color-pickers">
                    ${r.map((e, t) => {
			let n = i[t] ?? "", r = e == null ? "" : String(e);
			return L`
                            <label class="range-color-btn">
                                <span class="range-color-label">
                                    <strong>${n}</strong>
                                    ${r ? L`<code>${r}</code>` : ""}
                                </span>
                                <input
                                    class="btn"
                                    type="color"
                                    .value=${this.quantRange[t] ?? "#808080"}
                                    @input=${(e) => this.#i(t, e.target.value)}
                                />
                            </label>
                        `;
		})}
                </div>
            </div>
        `;
	}
	#j() {
		return MC(this.dataType);
	}
	#M() {
		let e = this.domainMode === "explicit";
		return this.colorMode === "scheme" ? L`
                ${this.#v()}
                ${e ? this.#C(!1) : ""}
            ` : e ? this.#C(!0) : L`<div class="gs-alert info">
                Manual colors require an explicit domain.
            </div>`;
	}
	renderBody() {
		if (this.#j()) return L`
                ${this.#S()} ${this.#g()}
                ${this.#M()}
            `;
		{
			let e = this.scaleType === "threshold";
			return L`
                ${this.#D()} ${this.#S()}
                ${this.unsupportedPiecewise ? L`
                          <div class="gs-alert info">
                              This dialog supports up to three domain stops for
                              quantitative piecewise scales. Edit the spec
                              manually to use more.
                          </div>
                      ` : ""}
                ${e ? "" : this.#T(this.domainMode === "observed")}
                ${e ? "" : this.#E()}
                ${this.#g()}
                ${this.#O()}
            `;
		}
	}
	renderFooter() {
		return L`<div>
            ${this.makeButton("Cancel", () => this.triggerClose())}
            ${this.makeButton("Apply", () => this.#d(), {
			disabled: this.unsupportedPiecewise,
			isPrimary: !0
		})}
        </div>`;
	}
};
customElements.define("gs-configure-scale-dialog", BC);
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataConfigurator.js
var VC = class extends A {
	static properties = {
		attributeInfo: { attribute: !1 },
		values: { attribute: !1 },
		existingAttributeNames: { attribute: !1 },
		attributeName: { state: !0 },
		groupPath: { state: !0 },
		_scale: { state: !0 },
		_scaleConfigured: { state: !0 }
	};
	static styles = [
		Bg,
		Vg,
		o`
            :host {
                display: block;
            }

            .scale-summary {
                display: flex;
                gap: var(--gs-basic-spacing);
                color: var(--gs-muted-color, #666);

                img {
                    display: block;
                }
            }
        `
	];
	constructor() {
		super(), this.attributeInfo = null, this.values = null, this.existingAttributeNames = [], this.attributeName = "", this.groupPath = "", this._scale = null, this._scaleConfigured = !1, this._form = new hb(this), this._form.defineField("name", {
			valueKey: "attributeName",
			validate: () => this.#n()
		}), this._form.defineField("group", {
			valueKey: "groupPath",
			validate: () => null,
			affects: ["name"]
		}), this._observedDomain = null;
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this._scale = Gs(this.attributeInfo) ?? null, this._scaleConfigured = !1, this._observedDomain = null, this._form.reset());
	}
	updated(e) {
		(e.has("attributeInfo") || e.has("attributeName") || e.has("groupPath") || e.has("_scale") || e.has("_scaleConfigured")) && this.dispatchEvent(new CustomEvent("metadata-config-validity-change", {
			detail: { hasErrors: this.hasErrors() },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		if (!this.attributeInfo || !this.values) throw Error("Derived metadata configurator is missing data.");
		let e = Bs(this.attributeInfo), t = this._scaleConfigured && this._scale ? HC(this._scale) : "Auto";
		return L`
            <div class="gs-alert info">
                ${K(Bd).node[0]}
                <div>
                    <p>
                        You are creating a new metadata attribute derived
                        from:<br />
                        ${this.attributeInfo.title}.
                    </p>
                    <p>Data type: ${e}</p>
                </div>
            </div>

            <div class="gs-form-group">
                <label for="derivedAttributeName">Derived attribute name</label>
                <input
                    id="derivedAttributeName"
                    type="text"
                    ${gb(this._form, "name")}
                />
                ${this._form.feedback("name")}
                <small>Keep names concise (around 20 characters).</small>
            </div>

            <div class="gs-form-group">
                <label for="derivedAttributeGroup">Group (optional)</label>
                <input
                    id="derivedAttributeGroup"
                    type="text"
                    placeholder="A new or existing metadata group path"
                    ${gb(this._form, "group")}
                />
                <small
                    >Use ${"/"} to create hierarchy
                    levels.</small
                >
            </div>

            <div class="gs-form-group">
                <label>Scale</label>
                <div class="input-group">
                    <div class="fake-input">${t}</div>
                    <button
                        class="btn"
                        type="button"
                        title="Configure scale"
                        @click=${() => this.#e()}
                    >
                        ${K(Vd).node[0]} Configure
                    </button>
                </div>
            </div>
        `;
	}
	hasErrors() {
		return this._form.hasErrors();
	}
	getConfig() {
		return this._form.validateAll() ? null : {
			name: this.attributeName.trim(),
			groupPath: this.groupPath.trim(),
			...this._scaleConfigured ? this._scale && UC(this._scale) ? { scale: this._scale } : { scale: null } : {}
		};
	}
	async #e() {
		if (!this.attributeInfo || !this.values) throw Error("Scale configuration requires attribute data.");
		let e = Bs(this.attributeInfo), t = this.#t(), n = await J("gs-configure-scale-dialog", (n) => {
			n.dataType = e, n.observedDomain = t, this._scale && (n.scale = this._scale);
		});
		if (n.ok) {
			let e = Ks(n.data);
			this._scale = e ?? null, this._scaleConfigured = !0;
		}
	}
	#t() {
		if (!this.attributeInfo || !this.values) throw Error("Observed domain requires attribute values.");
		return this._observedDomain ||= DC(Bs(this.attributeInfo), this.values), this._observedDomain;
	}
	#n() {
		return Vs(this.attributeName, this.groupPath, this.existingAttributeNames, this.attributeInfo);
	}
};
customElements.define("gs-derived-metadata-configurator", VC);
function HC(e) {
	if (!e) return L`Auto`;
	let t = [];
	if (e.scheme) {
		let n = typeof e.scheme == "string" ? e.scheme : e.scheme.name;
		t.push(L`<img
                src=${EC(n)}
                alt=${n}
                title=${n}
            />`);
	}
	return e.type && t.push(L`<div class="badge">${e.type}</div>`), t.length === 0 && t.push(L`Auto`), L`<div class="scale-summary">${t}</div>`;
}
function UC(e) {
	return Object.keys(e).length > 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataDialog.js
var WC = class extends q {
	static properties = {
		...super.properties,
		attributeInfo: {},
		values: {},
		existingAttributeNames: {},
		attributeName: { state: !0 },
		_configHasErrors: { state: !0 }
	};
	static styles = [...super.styles, o`
            dialog {
                width: 520px;
            }
        `];
	constructor() {
		super(), this.attributeInfo = null, this.values = null, this.existingAttributeNames = [], this.attributeName = "", this._configHasErrors = !1, this.dialogTitle = "Add to metadata";
	}
	renderBody() {
		if (!this.attributeInfo || !this.values) throw Error("Derived metadata dialog is missing required data.");
		return L`
            <gs-derived-metadata-configurator
                .attributeInfo=${this.attributeInfo}
                .values=${this.values}
                .existingAttributeNames=${this.existingAttributeNames}
                .attributeName=${this.attributeName}
                @metadata-config-validity-change=${(e) => {
			this._configHasErrors = e.detail.hasErrors;
		}}
            ></gs-derived-metadata-configurator>
        `;
	}
	renderButtons() {
		return [this.makeCloseButton(), this.makeButton("Add", () => this.#e(), {
			iconDef: vf,
			disabled: this._configHasErrors,
			isPrimary: !0
		})];
	}
	#e() {
		let e = this.#t()?.getConfig();
		return e ? (this.finish({
			ok: !0,
			data: e
		}), !1) : !0;
	}
	#t() {
		return this.renderRoot.querySelector("gs-derived-metadata-configurator");
	}
};
customElements.define("gs-derived-metadata-dialog", WC);
function GC({ attributeInfo: e, values: t, existingAttributeNames: n, defaultName: r }) {
	return J("gs-derived-metadata-dialog", (i) => {
		i.attributeInfo = e, i.values = t, i.existingAttributeNames = n, i.attributeName = r, i._configHasErrors = !1;
	});
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataFlow.js
async function KC(e, t, n) {
	if (!t.sampleData) throw Error("Sample data has not been initialized.");
	let r = Js(e, t.sampleMetadata.attributeNames), i = t.sampleData.ids, a = e.valuesProvider({
		sampleIds: i,
		sampleHierarchy: t
	});
	if (a.length !== i.length) throw Error("Derived metadata values length does not match sample ids.");
	let o = await GC({
		attributeInfo: e,
		values: a,
		existingAttributeNames: t.sampleMetadata.attributeNames,
		defaultName: r
	});
	if (o.ok) {
		let t = o.data;
		n.intentExecutor.dispatch(n.actions.deriveMetadata(Us(e.attribute, t)));
	}
}
//#endregion
//#region ../app/src/components/generic/dialogWizardController.js
var qC = class {
	constructor(e, t) {
		this.host = e, this.pages = t, e.addController(this);
	}
	hostConnected() {}
	hostDisconnected() {}
	get currentPage() {
		let e = this.pages[this.host._page];
		if (!e) throw Error("Invalid wizard page.");
		return e;
	}
	get isFirstPage() {
		return this.host._page === 0;
	}
	get isLastPage() {
		return this.host._page === this.pages.length - 1;
	}
	reset() {
		this.host._page = 0;
	}
	canAdvance() {
		return this.currentPage.canAdvance?.() ?? !0;
	}
	advance(e) {
		if (e > 0 && !(this.currentPage.onAdvance?.() ?? !0)) return !1;
		let t = this.host._page + e;
		return t < 0 || t >= this.pages.length || (this.host._page = t), !0;
	}
}, JC = class extends q {
	static properties = {
		...super.properties,
		fieldInfo: {},
		aggregationFieldInfos: {},
		selectionIntervalComplex: {},
		selectionIntervalSource: {},
		aggregation: { state: !0 },
		aggregationField: { state: !0 },
		filterField: { state: !0 },
		operator: { state: !0 },
		operand: { state: !0 },
		selectedValues: { state: !0 },
		_filterFieldValues: { state: !0 },
		_page: { state: !0 },
		_attributeInfo: { state: !0 },
		_values: { state: !0 },
		_attributeName: { state: !0 },
		_metadataConfigHasErrors: { state: !0 }
	};
	static styles = [...super.styles, o`
            dialog {
                width: 560px;
            }

            .expression-summary {
                margin-top: var(--gs-basic-spacing, 10px);
                padding: 0.5em 0.75em;
                background-color: #f6f6f6;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
            }

            .expression-summary code {
                white-space: normal;
                overflow-wrap: anywhere;
            }
        `];
	#e;
	constructor() {
		super(), this.fieldInfo = null, this.aggregationFieldInfos = [], this.selectionIntervalComplex = null, this.selectionIntervalSource = null, this.aggregation = "count", this.aggregationField = "", this.filterField = "", this.operator = "in", this.operand = void 0, this.selectedValues = [], this._filterFieldValues = [], this.sampleHierarchy = null, this.attributeInfoSource = null, this.attributeType = null, this.sampleView = null, this._page = 0, this._attributeInfo = null, this._values = null, this._attributeName = "", this._metadataConfigHasErrors = !1, this.dialogTitle = "Create sample metadata from features", this.#e = new qC(this, [{
			render: () => this.#t(),
			canAdvance: () => this.#v(),
			onAdvance: () => this.#b()
		}, {
			render: () => this.#n(),
			canAdvance: () => !this._metadataConfigHasErrors,
			onAdvance: () => this.#x()
		}]);
	}
	willUpdate(e) {
		e.has("fieldInfo") && this.fieldInfo && (this.dialogTitle = "Create sample metadata from features", this.aggregationField = this.fieldInfo.field, this.#_(), this.filterField = this.fieldInfo.filterableFields[0]?.field ?? "", this.operator = this.#f() ? "gt" : "in", this.operand = void 0, this.selectedValues = []), (e.has("fieldInfo") || e.has("filterField") || e.has("selectionIntervalComplex") || e.has("selectionIntervalSource")) && (this._filterFieldValues = this.#w());
	}
	renderBody() {
		return this.#e.currentPage.render();
	}
	#t() {
		if (!this.fieldInfo) throw Error("Feature-filtered aggregation dialog is missing field info.");
		return L`
            ${this.#c()}

            <div class="gs-form-group">
                <label for="featureFilterField">Filter field</label>
                <select
                    id="featureFilterField"
                    .value=${this.filterField}
                    @change=${(e) => this.#i(e)}
                >
                    ${this.fieldInfo.filterableFields.map((e) => L`
                            <option value=${e.field}>
                                ${e.field} (${e.type})
                            </option>
                        `)}
                </select>
            </div>

            <div class="gs-form-group">
                <label>Filter condition</label>
                ${this.#f() ? this.#o() : this.#s()}
            </div>

            <div class="gs-form-group">
                <label for="featureAggregationField">Aggregation field</label>
                <select
                    id="featureAggregationField"
                    .value=${this.aggregationField}
                    @change=${(e) => {
			this.#r(e);
		}}
                >
                    ${this.#m().map((e) => L`
                            <option value=${e.field}>
                                ${e.field} (${e.type})
                            </option>
                        `)}
                </select>
            </div>

            <div class="gs-form-group">
                <label for="featureAggregation">Aggregation operation</label>
                <select
                    id="featureAggregation"
                    .value=${this.aggregation}
                    @change=${(e) => {
			this.aggregation = e.target.value;
		}}
                >
                    ${this.#g().map((e) => L`
                            <option value=${e}>
                                ${Cs(e).label}
                            </option>
                        `)}
                </select>
                ${this.aggregation === "itemCount" ? "" : L`<small>Only non-null values are considered.</small>`}
            </div>

            ${this.#l()}
        `;
	}
	#n() {
		if (!this._attributeInfo || !this._values || !this.sampleHierarchy) throw Error("Feature-filtered metadata page is missing data.");
		return L`
            <gs-derived-metadata-configurator
                .attributeInfo=${this._attributeInfo}
                .values=${this._values}
                .existingAttributeNames=${this.sampleHierarchy.sampleMetadata.attributeNames}
                .attributeName=${this._attributeName}
                @metadata-config-validity-change=${(e) => {
			this._metadataConfigHasErrors = e.detail.hasErrors;
		}}
            ></gs-derived-metadata-configurator>
        `;
	}
	renderButtons() {
		let e = this.#e.isLastPage;
		return [
			this.makeCloseButton("Cancel"),
			this.makeButton("Previous", () => this.#e.advance(-1), {
				iconDef: zd,
				disabled: this.#e.isFirstPage
			}),
			this.makeButton(e ? "Finish" : "Next", () => this.#e.advance(1), {
				iconDef: e ? vf : Id,
				isPrimary: !0,
				disabled: !this.#e.canAdvance()
			})
		];
	}
	#r(e) {
		this.aggregationField = e.target.value, this.#_();
	}
	#i(e) {
		this.filterField = e.target.value, this.operator = this.#f() ? "gt" : "in", this.operand = void 0, this.selectedValues = [], this._filterFieldValues = this.#w();
	}
	#a(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	#o() {
		return L`<gs-threshold-comparison-input
            autofocus
            placeholder="value"
            .values=${this._filterFieldValues}
            .operator=${this.operator}
            .operand=${this.operand}
            @change=${(e) => this.#a(e)}
        ></gs-threshold-comparison-input>`;
	}
	#s() {
		return L`
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.#C()}
                .selectedValues=${this.selectedValues}
                .selectedItemName=${"values"}
                @change=${(e) => {
			this.selectedValues = e.values;
		}}
            ></gs-searchable-checkbox-list>
            <small>
                A feature matches when ${this.filterField} is any selected
                value.
            </small>
        `;
	}
	#c() {
		return L`
            <div class="gs-alert info">
                ${K(rf).node[0]}
                <div>
                    <p>
                        Create a new sample metadata attribute by filtering
                        features in the selected interval and aggregating the
                        result separately for each sample.
                    </p>
                </div>
            </div>
        `;
	}
	#l() {
		return L`
            <div class="expression-summary">
                Result:
                <code>${this.#u()}</code>
                per sample
            </div>
        `;
	}
	#u() {
		if (!this.fieldInfo) return "";
		let e = this.#d(), t = this.aggregationField;
		return this.aggregation === "itemCount" ? `${Ts(this.aggregation)}(where ${e})` : this.aggregation === "count" ? `${Ts(this.aggregation)}(${t} where ${e})` : `${ws(this.aggregation)}(${t} where ${e})`;
	}
	#d() {
		return this.#f() ? this.filterField + " " + Ds(this.operator) + " " + (y_(this.operand) ? String(this.operand) : "...") : this.selectedValues.length === 0 ? this.filterField + " in {...}" : this.filterField + " in {" + this.selectedValues.map(String).join(", ") + "}";
	}
	#f() {
		return this.#p()?.type === "quantitative";
	}
	#p() {
		return this.fieldInfo?.filterableFields.find((e) => e.field === this.filterField);
	}
	#m() {
		return this.aggregationFieldInfos.length > 0 ? this.aggregationFieldInfos : this.fieldInfo ? [this.fieldInfo] : [];
	}
	#h() {
		return this.#m().find((e) => e.field === this.aggregationField);
	}
	#g() {
		return this.#h()?.supportedAggregations ?? [];
	}
	#_() {
		let e = this.#g();
		e.includes(this.aggregation) || (this.aggregation = e.includes("count") ? "count" : e[0]);
	}
	#v() {
		return !this.filterField || !this.aggregationField ? !1 : this.#f() ? y_(this.operand) : this.selectedValues.length > 0;
	}
	#y() {
		if (!this.#f()) return {
			field: this.filterField,
			operator: "in",
			values: this.selectedValues
		};
		if (!y_(this.operand)) throw Error("Quantitative feature filter is missing a value.");
		return {
			field: this.filterField,
			operator: this.operator,
			value: this.operand
		};
	}
	#b() {
		if (!this.fieldInfo || !this.sampleHierarchy || !this.attributeInfoSource || !this.attributeType) throw Error("Feature-filtered aggregation wizard is missing required data.");
		if (!this.sampleHierarchy.sampleData) throw Error("Sample data has not been initialized.");
		let e = {
			view: this.fieldInfo.viewSelector,
			field: this.aggregationField,
			interval: this.selectionIntervalSource ?? this.selectionIntervalComplex,
			aggregation: { op: this.aggregation },
			featureFilter: this.#y()
		}, t = this.attributeInfoSource.getAttributeInfo({
			type: this.attributeType,
			specifier: e
		}), n = this.sampleHierarchy.sampleData.ids, r = t.valuesProvider({
			sampleIds: n,
			sampleHierarchy: this.sampleHierarchy
		});
		if (r.length !== n.length) throw Error("Derived metadata values length does not match sample ids.");
		return this._attributeInfo = t, this._values = r, this._attributeName = Js(t, this.sampleHierarchy.sampleMetadata.attributeNames), this._metadataConfigHasErrors = !1, !0;
	}
	#x() {
		if (!this._attributeInfo || !this.sampleView) throw Error("Feature-filtered aggregation wizard is missing derived data.");
		let e = this.#S()?.getConfig();
		return e ? (this.sampleView.intentExecutor.dispatch(this.sampleView.actions.deriveMetadata(Us(this._attributeInfo.attribute, e))), this.finish({ ok: !0 }), !1) : !0;
	}
	#S() {
		return this.renderRoot.querySelector("gs-derived-metadata-configurator");
	}
	#C() {
		if (!this.fieldInfo || !this.selectionIntervalComplex) return [];
		let e = this._filterFieldValues;
		return Array.from(new Set(e.filter(XC))).map((e) => ({
			value: e,
			label: `${e}`,
			searchText: `${e}`.toLowerCase()
		}));
	}
	resetWizard() {
		this.#e.reset(), this._attributeInfo = null, this._values = null, this._attributeName = "", this._metadataConfigHasErrors = !1;
	}
	#w() {
		return !this.fieldInfo || !this.selectionIntervalComplex ? [] : ga(this.fieldInfo.view, this.selectionIntervalSource ?? this.selectionIntervalComplex, this.filterField) ?? [];
	}
};
customElements.define("gs-feature-filtered-aggregation-dialog", JC);
async function YC({ fieldInfo: e, aggregationFieldInfos: t, selectionIntervalComplex: n, selectionIntervalSource: r, sampleHierarchy: i, attributeInfoSource: a, attributeType: o, sampleView: s }) {
	await J("gs-feature-filtered-aggregation-dialog", (c) => {
		c.fieldInfo = e, c.aggregationFieldInfos = t, c.selectionIntervalComplex = n, c.selectionIntervalSource = r ?? null, c.sampleHierarchy = i, c.attributeInfoSource = a, c.attributeType = o, c.sampleView = s, c.operand = void 0, c.selectedValues = [], c.resetWizard();
	});
}
function XC(e) {
	return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
//#endregion
//#region ../app/src/sampleView/selectionAggregationCandidates.js
var ZC = ["count"], QC = ["itemCount"], $C = [
	"count",
	"min",
	"max",
	"weightedMean",
	"variance"
];
function ew(e, t, n) {
	let r = qS(t), i = iw(e).filter((e) => sw(e.view, r));
	if (n) try {
		let t = [];
		e.visit((e) => {
			e instanceof T && e.isVisible() && sw(e, r) && t.push(e);
		});
		for (let e of t) {
			let t = e.getEncoding(), n = t?.x && "field" in t.x, r = Object.entries(t).some(([e, t]) => ![
				"sample",
				"x",
				"x2"
			].includes(e) && t && "field" in t);
			n && !r && i.push({
				view: e,
				viewSelector: WS(e),
				viewTitle: String(e.getTitleText?.() ?? e.name),
				channel: "x",
				field: "Items",
				type: "nominal",
				description: void 0,
				supportedAggregations: QC,
				candidateId: fw(WS(e), "Items")
			});
		}
	} catch {}
	return n || (i = i.filter(cw)), uw(i.map((e) => {
		let t = e.viewSelector ?? WS(e.view);
		return {
			view: e.view,
			viewSelector: t,
			viewTitle: e.viewTitle ?? String(e.view.getTitleText?.() ?? e.view.name),
			channel: e.channel,
			field: e.field,
			type: e.type,
			description: e.description,
			supportedAggregations: e.supportedAggregations ?? lw(e.type),
			candidateId: e.candidateId ?? fw(t, e.field),
			filterableFields: e.filterableFields ?? nw(e.view)
		};
	}));
}
var tw = ew;
function nw(e) {
	return dw(iw(e).map((e) => ({
		channel: e.channel,
		field: e.field,
		type: e.type,
		description: e.description
	})));
}
function rw(e, t) {
	let n = qS(t);
	return Array.from(new Set(iw(e).filter((e) => !sw(e.view, n)).filter(cw).map((e) => e.view)));
}
function iw(e) {
	try {
		return w(e).filter((e) => ![
			"sample",
			"x",
			"x2"
		].includes(e.channel)).filter((e) => e.view.isVisible()).map((e) => ({
			...e,
			description: ow(e.view, e.channel, e.field)
		}));
	} catch {
		return aw(e);
	}
}
function aw(e) {
	let t = e.getEncoding?.();
	if (!t || typeof t != "object") return [];
	let n = [];
	for (let [r, i] of Object.entries(t)) [
		"sample",
		"x",
		"x2"
	].includes(r) || !i || typeof i != "object" || !("field" in i) || typeof i.field != "string" || n.push({
		view: e,
		channel: r,
		field: i.field,
		type: "type" in i && typeof i.type == "string" ? i.type : "nominal",
		description: ow(e, r, i.field)
	});
	return n;
}
function ow(e, t, n) {
	let r = e.getEncoding();
	if (!r || typeof r != "object") return;
	let i = r[t];
	if (i && typeof i == "object" && "description" in i) return i.description;
	for (let e of Object.values(r)) if (!(!e || typeof e != "object" || !("field" in e) || e.field !== n)) return e.description;
}
function sw(e, t) {
	let n = KS(e);
	return !!n && t.has(n);
}
function cw(e) {
	if (e.view.getEncoding()?.x2) return !0;
	let t = e.view.getScaleResolution("x")?.getScale()?.type;
	return t ? Mt(t) : !1;
}
function lw(e) {
	return e === "quantitative" ? $C : ZC;
}
function uw(e) {
	return Array.from(new Map(e.map((e) => [JSON.stringify([e.viewSelector, e.field]), e])).values());
}
function dw(e) {
	return Array.from(new Map(e.map((e) => [e.field, e])).values());
}
function fw(e, t) {
	return (e.scope.length > 0 ? e.scope.join("/") + "/" : "") + e.view + ":" + t;
}
//#endregion
//#region ../app/src/sampleView/contextMenuBuilder.js
var pw = "SAMPLE_ATTRIBUTE";
function mw(e, t, n) {
	let r = e.getAxisResolution("x")?.getTitle();
	return t.type === "locus" ? "Locus: " + (p(n) || typeof n == "number" ? D(n) : String(n)) : (r ? r + ": " : "") + n;
}
function hw(e, t) {
	if (!e || !t || e.selection.intervals.x?.length !== 2 || !Ht(e.selection, t)) return {};
	let n = e.selection.intervals.x, r = e.view.getScaleResolution("x")?.type === "locus" ? [e.view.getScaleResolution("x").toComplex(n[0]), e.view.getScaleResolution("x").toComplex(n[1])] : n;
	return {
		selectionInterval: n,
		selectionIntervalComplex: r,
		selectionIntervalLabel: US(e.view, r)
	};
}
function gw({ fieldInfo: e, aggregationFieldInfos: t, selectionIntervalComplex: n, selectionIntervalSource: r, sample: i, sampleHierarchy: a, attributeInfoSource: o, attributeType: s, sampleView: c }) {
	let l = e.filterableFields.length > 0 ? [
		{ type: "divider" },
		{
			type: "header",
			label: "Advanced interval aggregation"
		},
		{
			label: "Filter features and aggregate...",
			callback: () => {
				YC({
					fieldInfo: e,
					aggregationFieldInfos: t,
					selectionIntervalComplex: n,
					selectionIntervalSource: r,
					sampleHierarchy: a,
					attributeInfoSource: o,
					attributeType: s,
					sampleView: c
				});
			}
		}
	] : [];
	return [
		{
			label: "Interval aggregation",
			type: "header"
		},
		...e.supportedAggregations.map((t) => {
			let l = Cs(t), u = t === "itemCount" ? L`Using ${l.label.toLowerCase()} over interval...` : L`Using ${l.label.toLowerCase()}(<em
                              class="attribute"
                              >${e.field}</em
                          >) over interval...`, d = r ? {
				view: e.viewSelector,
				field: e.field,
				interval: r,
				aggregation: { op: t }
			} : {
				view: e.viewSelector,
				field: e.field,
				interval: n,
				aggregation: { op: t }
			}, f = o.getAttributeInfo({
				type: s,
				specifier: d
			}), p = nb(u, f, i ? f.accessor(i.id, a) : void 0, c);
			return yw(p, f, a, c), {
				label: l.label,
				submenu: p
			};
		}),
		...l
	];
}
function _w({ fieldInfo: e, complexX: t, sample: n, sampleHierarchy: r, attributeInfoSource: i, attributeType: a, sampleView: o }) {
	let s = {
		view: e.viewSelector,
		field: e.field,
		locus: t
	}, c = i.getAttributeInfo({
		type: a,
		specifier: s
	}), l = nb(null, c, n ? c.accessor(n.id, r) : void 0, o);
	return yw(l, c, r, o), l;
}
function vw(e, t, n, r) {
	if (!n.sampleData) throw Error("Sample data has not been initialized.");
	t.attribute.type !== pw && e.push({
		label: "Add to sample metadata...",
		callback: () => {
			KC(t, n, r);
		}
	});
}
function yw(e, t, n, r) {
	let i = t.attribute.type !== pw, a = t.type === "quantitative" || t.type === "nominal" || t.type === "ordinal";
	!i && !a || (e.push(Ly), vw(e, t, n, r), Bx(e, t, r, { includeDivider: !1 }));
}
//#endregion
//#region ../app/src/state/selectionExpansionContext.js
var bw = "multiplePointSelectionParams";
function xw(e, t) {
	if (!t || !t.datum || !t.mark?.unitView) return { status: "unavailable" };
	let n = t.mark.unitView, r = t.datum, i = [];
	for (let [e, t] of n.paramRuntime.paramConfigs) {
		if (!("select" in t) || t.persist === !1) continue;
		let n = Ge(t.select);
		gt(n) && n.toggle && i.push(e);
	}
	if (i.length === 0) return { status: "unavailable" };
	if (i.length > 1) return {
		status: "disabled",
		reason: bw
	};
	let a;
	try {
		a = zt(n.getEncoding());
	} catch {
		return { status: "unavailable" };
	}
	if (!a || a.length === 0) return { status: "unavailable" };
	let o = a.map((e) => nt(e)(r));
	if (o.some((e) => e == null)) return { status: "unavailable" };
	let s = i[0], c = Bt(n, s);
	try {
		Et(e, c);
	} catch {
		return { status: "unavailable" };
	}
	let l;
	try {
		l = At(n);
	} catch {
		return { status: "unavailable" };
	}
	let u, d = "this scope", f = n.getEncoding().sample;
	return f && !Array.isArray(f) && typeof f.field == "string" && (u = [f.field], d = "this sample"), {
		status: "available",
		context: {
			hoveredView: n,
			hoveredDatum: r,
			selector: c,
			originViewSelector: l,
			originKeyFields: a,
			originKeyTuple: o,
			defaultPartitionBy: u,
			defaultScopeLabel: d
		}
	};
}
function Sw(e) {
	let { hoveredView: t, hoveredDatum: n, selector: r, originViewSelector: i, originKeyFields: a, originKeyTuple: o, defaultPartitionBy: s, defaultScopeLabel: c } = e, l = /* @__PURE__ */ new Set([...a, ...s ?? []]), u = Cw(t), d = ww(t, n, l), f = Tw(n, l).filter((e) => !u.has(e)), p = [...d];
	for (let e of f) p.includes(e) || p.push(e);
	let m = [];
	for (let e of p) {
		let t = n[e], a = Dw(t), l = Ow(c), u = kw(c), d = [];
		d.push({
			label: "In " + l,
			payload: {
				selector: r,
				operation: "replace",
				rule: {
					kind: "sameFieldValue",
					field: e
				},
				partitionBy: s,
				origin: {
					view: i,
					keyTuple: o
				}
			}
		}), s?.length && d.push({
			label: u.charAt(0).toUpperCase() + u.slice(1),
			payload: {
				selector: r,
				operation: "replace",
				rule: {
					kind: "sameFieldValue",
					field: e
				},
				origin: {
					view: i,
					keyTuple: o
				}
			}
		}), m.push({
			fieldName: e,
			valueLabel: a,
			operations: d
		});
	}
	return m;
}
function Cw(e) {
	let t = e.getEncoding(), n = /* @__PURE__ */ new Set(), r = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return;
		let t = e;
		if (typeof t.field == "string" && n.add(t.field), typeof t.chrom == "string" && n.add(t.chrom), typeof t.pos == "string" && n.add(t.pos), "condition" in t) {
			let { condition: e } = t;
			if (Array.isArray(e)) for (let t of e) r(t);
			else r(e);
		}
	};
	for (let e of Object.values(t)) r(e);
	return n;
}
function ww(e, t, n) {
	let r = e.getEncoding(), i = [], a = /* @__PURE__ */ new Set(), o = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return;
		let r = e;
		if (typeof r.field == "string" && (r.type === "nominal" || r.type === "ordinal") && !a.has(r.field) && Ew(r.field, t, n) && (a.add(r.field), i.push(r.field)), "condition" in r) {
			let { condition: e } = r;
			if (Array.isArray(e)) for (let t of e) o(t);
			else o(e);
		}
	};
	for (let e of Object.values(r)) o(e);
	return i;
}
function Tw(e, t) {
	return Object.keys(e).filter((n) => Ew(n, e, t));
}
function Ew(e, t, n) {
	if (n.has(e) || e.startsWith("_")) return !1;
	let r = t[e];
	return typeof r == "boolean" ? !0 : typeof r == "string" ? r.trim().length > 0 : !1;
}
function Dw(e) {
	let t = String(e);
	return t.length > 20 ? t.slice(0, 17) + "..." : t;
}
function Ow(e) {
	return e.startsWith("this ") ? "current " + e.slice(5) : e;
}
function kw(e) {
	return e === "this sample" ? "across all samples" : e === "this patient" ? "across all patients" : e === "this scope" ? "across all scopes" : "across all";
}
var Aw = Oi({
	name: "paramProvenance",
	initialState: { entries: {} },
	reducers: {
		paramChange: (e, t) => {
			let n = St(t.payload.selector);
			e.entries[n] = t.payload;
		},
		expandPointSelection: (e, t) => {
			let n = t.payload, r = St(n.selector), i;
			if ("rule" in n && n.rule) i = { rule: n.rule };
			else if ("predicate" in n && n.predicate) i = { predicate: n.predicate };
			else throw Error("expandPointSelection requires either 'rule' or 'predicate'.");
			e.entries[r] = {
				selector: n.selector,
				value: {
					type: "pointExpand",
					operation: n.operation,
					partitionBy: n.partitionBy,
					origin: n.origin,
					...i
				}
			};
		}
	}
});
function jw(e) {
	if (Aw.actions.expandPointSelection.match(e) || !Aw.actions.paramChange.match(e)) return null;
	let t = e.payload, n = t?.selector;
	return !n || !Array.isArray(n.scope) || !n.param || t?.value?.type === "pointExpand" ? null : St(n);
}
//#endregion
//#region ../app/src/state/selectionExpansionMenu.js
function Mw(e, t) {
	return {
		label: "Select related items",
		submenu: () => Nw(e, t)
	};
}
function Nw(e, t) {
	let n = Sw(e);
	if (n.length === 0) return [{ label: "No suitable fields available." }];
	let r = [{
		type: "header",
		label: "Match values from clicked item"
	}, Ly];
	for (let e of n) {
		let n = Pw(e.fieldName, e.valueLabel);
		if (e.operations.length === 1) {
			let i = e.operations[0];
			r.push({
				label: n,
				callback: () => t(Aw.actions.expandPointSelection(i.payload))
			});
			continue;
		}
		r.push({
			label: n,
			submenu: () => {
				let r = [{
					type: "header",
					label: n
				}, Ly];
				for (let n of e.operations) r.push({
					label: n.label,
					callback: () => t(Aw.actions.expandPointSelection(n.payload))
				});
				return r;
			}
		});
	}
	return r;
}
function Pw(e, t) {
	return L`<em>${e}</em>
        <span class="operator">=</span>
        <strong>${t}</strong>`;
}
//#endregion
//#region ../app/src/sampleView/sampleChromeLayout.js
var Fw = 60, Iw = "all", Lw = 1e-6, Rw = class {
	#e;
	#t;
	#n;
	constructor(e = {}) {
		this.#e = e.sampleYAxis, this.#t = e.getActiveAxisCandidate ?? (() => void 0), this.#n = e.getPeekState ?? (() => 0);
	}
	getLeftReserve(e) {
		return this.#r("left", e);
	}
	getRightReserve(e) {
		return this.#r("right", e);
	}
	getHorizontalReserve(e) {
		return new dt(0, this.getRightReserve(e), 0, this.getLeftReserve(e));
	}
	hasHorizontalReserveChanged(e, t) {
		return this.getLeftReserve(e) !== this.getLeftReserve(t) || this.getRightReserve(e) !== this.getRightReserve(t);
	}
	getPlotCoords(e, t) {
		let n = this.getLeftReserve(t), r = this.getRightReserve(t);
		return !n && !r ? e : e.modify({
			x: () => e.x + n,
			width: () => e.width - n - r
		});
	}
	renderVerticalAxes(e, t, n, r = {}) {
		if (!this.#a(n) || this.#n() !== 0) return;
		let i = ze(r), a = i ? {
			...r,
			clip: kt(i.rect, !1, !0)
		} : r;
		for (let r of ["left", "right"]) {
			let i = this.#i(r);
			if (i) for (let o of this.#o(n)) {
				let n = t.modify({
					y: () => t.y + o.locSize.location,
					height: o.locSize.size
				});
				i.render(e, ie(n, r, i), a);
			}
		}
	}
	#r(e, t) {
		if (!this.#a(t)) return 0;
		let n = this.#i(e);
		return !n || n.axisProps.placement === "inside" ? 0 : n.getPerpendicularSize() + (n.axisProps.offset ?? 0);
	}
	#i(e) {
		return this.#t(e)?.axisView;
	}
	#a(e) {
		if (this.#e === null) return !1;
		let t = this.#e?.minSampleHeight ?? Fw;
		return e?.samples.some((e) => e.locSize.size >= t) ?? !1;
	}
	#o(e) {
		let t = this.#e?.minSampleHeight ?? Fw, n = e.samples.filter((e) => e.locSize.size >= t);
		switch (this.#e?.mode ?? Iw) {
			case "all": return n;
			case "top": return n.slice(0, 1);
			case "middle": {
				if (!n.length) return [];
				let t = e.samples[0], r = e.samples.at(-1), i = t && r ? (t.locSize.location + r.locSize.location + r.locSize.size) / 2 : 0, a = n[0], o = Infinity;
				for (let e of n) {
					let t = e.locSize.location + e.locSize.size / 2, n = Math.abs(t - i);
					n < o - Lw && (a = e, o = n);
				}
				return [a];
			}
			case "bottom": return n.slice(-1);
			default: throw Error(`Invalid sampleYAxis mode: ${this.#e?.mode}`);
		}
	}
}, zw = "VALUE_AT_LOCUS", Bw = class extends Nt {
	childCoords;
	sidebarCoords;
	locationManager;
	#e = 0;
	#t;
	#n;
	#r = -1;
	#i = !1;
	#a = new Jx("Subtree data readiness was aborted.");
	#o;
	#s;
	#c = [];
	#l;
	#u;
	#d;
	#f = [];
	#p;
	#m = !1;
	constructor(e, t, n, r, i, a, o, s = void 0) {
		super(e, t, n, r, i), this.provenance = a, this.plotBookmarkContext = s;
		let c = wC(e);
		for (let e of c.warnings) console.warn(e);
		this.spec = c.spec, this.#i = e.stickySummaries ?? !0, this.#w(), this.#g(), this.#C(), this.#h(), this.#T(o), this.#E(), this.#s = this.paramRuntime.allocateSetter("visibleSamples", []), this.#l = this.paramRuntime.allocateSetter("visibleSampleMetadata", Ww(this.sampleHierarchy, [])), this.getSamples = () => _c(this.sampleHierarchy), this.spec.samples.identity?.data && this.#A();
	}
	#h() {
		let e = cc;
		this.compositeAttributeInfoSource.addAttributeInfoSource(zw, (e) => nC(this, e));
		let t = (e) => this.compositeAttributeInfoSource.getAttributeInfo(e);
		this.provenance.addActionInfoSource((e) => W_(e, t)), this.actions = e.actions;
	}
	#g() {
		this._addBroadcastHandler("subtreeDataReady", (e) => {
			if (!e.payload || !("subtreeRoot" in e.payload)) return;
			let t = e.payload.subtreeRoot;
			this.#t?.view && (this.#_(t), (t === this.#t.view || this.#t.view.getDataAncestors().includes(t)) && this.#k());
		}), this._addBroadcastHandler("layout", () => {
			this.locationManager.resetLocations();
		});
	}
	#_(e) {
		this.#a.resolveMatching(e);
	}
	#v(e, t, n) {
		if (n && Ae(e, n)) return Promise.resolve();
		if (n) return P(this.context, e, n, t);
		let r = e.getDataAncestors();
		return this.#a.wait((t) => t === e || r.includes(t), t);
	}
	#y(e) {
		return GS(this, e.view);
	}
	#b(e) {
		for (let t of e.getLayoutAncestors()) {
			let e = Zi(t);
			e && this.provenance.store.dispatch(Wi.actions.setVisibility({
				key: e,
				visibility: !0
			}));
		}
	}
	#x(e) {
		let t, n = "domainAtActionTime" in e ? e.domainAtActionTime : void 0;
		if (n) t = n;
		else if ("interval" in e) t = ua(this, e.interval);
		else if ("locus" in e) t = [e.locus, e.locus];
		else throw Error("Unsupported view attribute specifier.");
		if (typeof t[0] == "string" || typeof t[1] == "string" || typeof t[0] == "boolean" || typeof t[1] == "boolean") throw Error("Cannot zoom x scale using a non-numeric or non-locus domain.");
		return t;
	}
	async #S(e, t) {
		let n = e.getScaleResolution("x");
		if (!n) throw Error(`No x scale resolution found for view: ${e.name}`);
		await n.zoomTo(t);
	}
	async awaitViewAttributeProcessed(e, t = {}) {
		let n = this.#y(e);
		await this.#v(n, t.signal, me(n, ["x"]));
	}
	awaitMetadataReady(e) {
		return this.metadataView?.awaitMetadataReady(e) ?? Promise.resolve();
	}
	async ensureViewAttributeAvailability(e, t = {}) {
		let n = this.#y(e), r = n.getScaleResolution("x");
		if (!r) throw Error(`No x scale resolution found for view: ${n.name}`);
		this.#b(n);
		let i = r.getScale();
		if (It(i.type) && !Mt(i.type)) {
			let t = this.#x(e);
			await this.#S(n, t);
		}
		await this.#v(n, t.signal, me(n, ["x"]));
	}
	#C() {
		let e = this.context;
		this.addInteractionListener("mousemove", (e) => {
			this.#r = e.point.y - this.childCoords.y;
		}), this.addInteractionListener("mouseleave", () => {
			this.#r = -1;
		}), this.addInteractionListener("wheel", (e) => {
			let t = e.wheelEvent;
			if (this.locationManager.isCloseup() && !t.ctrlKey) {
				this.locationManager.handleWheelEvent(t);
				let n = this.#t.scrollbars.vertical;
				n && n.setViewportOffset(this.locationManager.getScrollOffset(), {
					notify: !1,
					syncSmoother: !0
				}), this.sampleGroupView.updateRange(), this.context.animator.requestRender(), e.setWheelDeltas(t.deltaX, 0);
			}
		}, !0), e.addKeyboardListener("keydown", (e) => {
			e.code == "KeyE" && !e.repeat && this.#I();
		}), e.addKeyboardListener("keyup", (e) => {
			e.code == "KeyE" && this.#L(!1);
		});
	}
	#w() {
		this.compositeAttributeInfoSource = new _S(), this.childCoords = x.ZERO, this.sidebarCoords = x.ZERO, this.locationManager = new SS({
			getSampleHierarchy: () => this.sampleHierarchy,
			getHeight: () => this.#e || this.childCoords.height,
			getSummaryHeight: () => this.#t?.summaryViews.getSize().height.px,
			onLocationUpdate: ({ sampleHeight: e }) => {
				this.sampleGroupView.updateRange(), this.#o?.(e);
			},
			viewContext: this.context,
			isStickySummaries: () => this.#i,
			sampleLayout: this.spec.sampleLayout
		});
	}
	#T(e) {
		this.intentExecutor = e, this.#u = (e) => {
			let t = this.compositeAttributeInfoSource.getAttributeInfo.bind(this.compositeAttributeInfoSource);
			return vc(e, this.sampleHierarchy, t);
		}, e.addActionAugmenter(this.#u);
	}
	#E() {
		this.registerDisposer(Vx(this.provenance.store, () => this.sampleHierarchy.rootGroup, Hx(() => {
			this.locationManager.reset(), this.invalidateSizeCache(), this.sampleGroupView?.updateGroups(), this.#j(), this.#M(), this.context.requestLayoutReflow();
		}))), this.registerDisposer(Vx(this.provenance.store, () => this.sampleHierarchy.sampleMetadata, Hx(() => this.#M())));
	}
	async initializeChildren() {
		let e = structuredClone(this.spec.spec);
		e.params ??= [], e.params.push({
			name: "height",
			value: 0
		});
		let t = await this.context.createOrImportView({
			configurableVisibility: !1,
			resolve: {
				axis: { x: "shared" },
				scale: { x: "shared" }
			},
			spacing: 0,
			vconcat: []
		}, this, this, "sampleSummaries"), n = await this.context.createOrImportView(e, this, this, "sample-facets", void 0, { inheritEncoding: !0 });
		this.#t = new Hw(n, this, 0, t, this.spec.view), this.#o = (e) => {
			this.#t.view.paramRuntime.setValue("height", e);
		}, this.#j(), this.#n = await this.context.createOrImportView({
			name: "sample-sidebar",
			title: "Sidebar",
			configurableVisibility: !0,
			resolve: {
				scale: { default: "independent" },
				axis: { default: "independent" }
			},
			encoding: {
				y: null,
				facetIndex: null
			},
			hconcat: [],
			spacing: 8,
			padding: { right: 8 }
		}, this, this, "sample-sidebar"), Tt(this.#n, { skipSubtree: !0 }), this.sampleGroupView = new lS(this, this.#n), this.sampleLabelView = new fC(this, this.#n), this.metadataView = new Xx(this, this.#n), this.#n.setChildren([
			this.sampleGroupView,
			this.sampleLabelView,
			this.metadataView
		]);
		let r = (e) => {
			e.type === "mousedown" && e.mouseEvent.button !== 0 || e.stopPropagation();
		};
		this.#n.addInteractionListener("wheel", r, !0), this.#n.addInteractionListener("mousedown", r, !0), this.#n.addInteractionListener("touchgesture", r, !0), this.#t.scrollbars.vertical = new k(this.#t, "vertical", { onViewportOffsetChange: (e) => {
			this.locationManager.setScrollOffset(e), this.sampleGroupView.updateRange(), this.context.animator.requestRender();
		} }), this.#d = (e) => {
			this.#t.scrollbars.vertical.paramRuntime.setValue("scrollbarOpacity", e);
		}, pe(this), s(this), _(this), await this.#t.syncGuideViews(), await this.#W(), pe(this), s(this), _(this), await this.#t.summaryViews.syncGuideViews(), await this.sampleGroupView.initializeChildren(), await this.metadataView.initializeChildren(), this.#t.view.addInteractionListener("contextmenu", this.#V.bind(this));
	}
	getOverhang() {
		let e = this.#D().px ?? 0, t = this.locationManager.getLocations(), n = this.#t.sampleChromeLayout.getHorizontalReserve(t).add(new dt(0, 0, 0, e)), r = this.#O();
		return n.add(r.sampleOverhang.getHorizontal()).add(r.sharedVerticalOverhang);
	}
	prepareLayoutSize(e, t) {
		let n = this.locationManager.getLocations();
		this.#e = t;
		let r = this.locationManager.getLocations();
		return this.#t.sampleChromeLayout.hasHorizontalReserveChanged(n, r);
	}
	#D() {
		return this.#n.isConfiguredVisible() ? this.#n.getSize().addPadding(this.#n.getPadding()).width : { px: 0 };
	}
	#O() {
		let e = this.#t.getOverhangWithoutYAxes(), t = this.#n.isConfiguredVisible() ? this.#n.getOverhang().getVertical() : dt.zero();
		return {
			sampleOverhang: e,
			sidebarVerticalOverhang: t,
			sharedVerticalOverhang: e.getVertical().union(t)
		};
	}
	getSize() {
		return this._cache("size/size2", () => {
			let e = super.getSize(), t = ((e) => e.getSize().addPadding(e.getOverhang()).addPadding(e.getPadding()))(this.#t.view).width;
			return new We(t, e.height);
		});
	}
	*[Symbol.iterator]() {
		yield this.#n, yield* this.#t.getChildren();
	}
	#k() {
		if (this.getSamples()) return;
		let e = this.getScaleResolution("sample");
		if (e) {
			let t = [...e.getDataDomain()].map((e, t) => ({
				id: e,
				displayName: e,
				indexNumber: t
			}));
			this.provenance.store.dispatch(this.actions.setSamples({ samples: t })), gS(this.provenance.store, tc);
		} else throw Error("No explicit sample data nor sample channels found!");
	}
	#A() {
		let e = this.spec.samples.identity;
		if (!e) throw Error("Sample identity definition is missing.");
		let { dataSource: t, collector: n } = v(l(e.data, this), new Vw(e.idField ?? "sample", e.displayNameField)), r = n.observe(() => {
			let e = n.getData();
			this.provenance.store.dispatch(this.actions.setSamples({ samples: e })), gS(this.provenance.store, tc);
		});
		this.registerDisposer(r), this.context.dataFlow.addDataSource(t);
	}
	get sampleHierarchy() {
		return this.provenance.getPresentState()[tc];
	}
	get leafSamples() {
		return pc(this.sampleHierarchy).map((e) => e.at(-1)).map((e) => e.samples).flat();
	}
	#j() {
		if (!this.#s) return;
		let e = this.leafSamples;
		Uw(e, this.#c) || (this.#c = e, this.#s(e));
	}
	#M() {
		this.#l && this.#l(Ww(this.sampleHierarchy, this.leafSamples));
	}
	getSampleAt(e) {
		let t = DS(e, this.locationManager.getLocations().samples);
		if (t) return this.sampleHierarchy.sampleData.entities[t.key];
	}
	#N(e, t) {
		if (this.#p === e) return this.#f;
		let n = 1 / t;
		return this.#f = e.map((e, t) => ({
			sampleFacetRenderingOptions: {
				locSize: e.locSize,
				pixelToUnit: n
			},
			facetId: [e.key],
			firstFacet: t === 0
		})), this.#p = e, this.#f;
	}
	#P(e, t, n = {}) {
		let r = this.#t, i = n, a = () => {
			Se(r.legends, r.axes, t, e, i, (e, t, n) => n(), 0), r.renderTitle(e, t, i);
		}, o = r.groupBackground || Object.values(r.axes).length ? this.locationManager.getGroupBackgroundRects(this.childCoords) : [];
		for (let { coords: t, clipRect: i } of o) {
			r.groupBackground?.render(e, t, n);
			for (let a of Object.values(r.gridLines)) a.render(e, t, {
				...n,
				clipRect: i
			});
		}
		let s = kt(this.locationManager.clipBySummary(t), !0, !0), c = this.locationManager.getLocations();
		if (!c) {
			a();
			return;
		}
		let l = this.#N(c.samples, t.height), u = { ...n };
		delete u.facetId, delete u.firstFacet, delete u.sampleFacetRenderingOptions, delete u.clipRect, delete u.clip;
		let d = Object.keys(u).length > 0;
		for (let n of l) d && Object.assign(n, u), n.clip = s, r.background?.render(e, t, n), r.view.render(e, t, n), r.backgroundStroke?.render(e, t, n);
		for (let { coords: t } of o) r.groupBackgroundStroke?.render(e, t, n);
		for (let [n, i] of Object.entries(r.axes)) n === "left" || n === "right" || i.render(e, ie(t, n, i));
		r.sampleChromeLayout.renderVerticalAxes(e, t, c, {
			...n,
			clip: s
		});
		let f = r.summaryViews, p = f.getOverhang().getHorizontal();
		n = {
			...n,
			clip: kt(t.expand(p), !0, !0)
		};
		let m = f.getSize().height.px;
		for (let [r, i] of c.summaries.entries()) {
			let a = t.modify({
				y: () => {
					let e = i.locSize.location, n = t.y + e;
					return this.#i ? n + Ft(-e, 0, i.locSize.size - m) : n;
				},
				height: m
			}).expand(p);
			f.render(e, a, {
				...n,
				facetId: [r],
				firstFacet: r == 0
			});
		}
		a(), r.selectionRect?.view.render(e, t, n);
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#O();
		t = t.shrink(r.sampleOverhang.getHorizontal().add(r.sharedVerticalOverhang)), e.pushView(this, t);
		let i = Lt([this.#D(), { grow: 1 }], t.width), a = (e) => t.modify({
			x: e.location + t.x,
			width: e.size
		});
		this.sidebarCoords = a(i[0]);
		let o = a(i[1]);
		this.childCoords = o;
		let s = this.locationManager.getLocations();
		this.childCoords = this.#t.sampleChromeLayout.getPlotCoords(o, s), this.#n.render(e, this.sidebarCoords.expand(r.sidebarVerticalOverhang), n), this.#P(e, this.childCoords, n);
		let c = this.#t.scrollbars.vertical;
		c && c.render(e, t, n), e.popView(this);
	}
	onBeforeRender() {
		this.locationManager.updateFacetTexture();
		let e = this.#t?.scrollbars.vertical;
		if (!e || !this.childCoords.isDefined()) return;
		let t = this.#i ? this.#t.summaryViews.getSize().height.px : 0, { viewportCoords: n, contentCoords: r, effectiveScrollOffset: i } = this.locationManager.getScrollbarLayout(this.childCoords, t);
		e.updateScrollbar(n, r), e.setViewportOffset(i, {
			notify: !1,
			syncSmoother: !0
		}), this.#d(this.locationManager.getPeekState());
	}
	getSampleFacetTexture() {
		return this.locationManager.getFacetTexture();
	}
	makePeekMenuItem(e = this.#r, t = this.#F(e)?.id) {
		return {
			...this.locationManager.isCloseup() ? {
				label: "Close closeup",
				callback: () => this.#L(!1),
				icon: bf
			} : {
				label: "Open closeup",
				callback: () => this.#I(e, t),
				icon: Sf
			},
			shortcut: "E"
		};
	}
	findSampleForMouseEvent(e) {
		return this.getSampleAt(e.point.y - this.childCoords.y);
	}
	#F(e) {
		if (!Number.isFinite(e) || e < 0 || e > this.childCoords.height) return;
		let t = this.locationManager.getLocations().samples, n = OS(e, t);
		return n ? this.sampleHierarchy.sampleData.entities[n.key] : void 0;
	}
	#I(e = this.#r, t = this.#F(e)?.id) {
		this.#L(void 0, e, t);
	}
	#L(e, t, n) {
		let r = this.#R();
		Promise.resolve(this.locationManager.togglePeek(e, t, n)).finally(r);
	}
	#R() {
		if (!this.#t) return () => void 0;
		let e = Object.values(this.#t.legends).flatMap((e) => e.entries.map(({ legendView: e }) => e.suspendLayoutDataUpdates()));
		return () => {
			for (let t of e) t();
		};
	}
	#z() {
		let e = this.#t.view.getLayoutAncestors();
		for (let t of e) for (let [e, n] of t.paramRuntime.paramConfigs) {
			if (!("select" in n)) continue;
			let r = Ge(n.select);
			if (!ht(r) || !r.encodings?.includes("x")) continue;
			let i = t.paramRuntime.getValue(e);
			if (i && Rt(i)) return {
				selection: i,
				view: t,
				paramName: e,
				bookmarkable: n.persist !== !1
			};
		}
	}
	#B(e, t) {
		let n = this.childCoords.normalizePoint(t.point.x, t.point.y), r = {};
		for (let t of ["x", "y"]) {
			let i = e.getScaleResolution(t)?.getScale();
			if (!i || !("invert" in i)) continue;
			let a = t === "x" ? n.x : n.y, o = i.invert(a);
			["index", "locus"].includes(i.type) && (o += .5), r[t] = o;
		}
		return r;
	}
	#V(e) {
		let t = e.uiEvent, n = this.getLayoutAncestors().at(-1), r = this.childCoords.normalizePoint(e.point.x, e.point.y).x, i = this.findSampleForMouseEvent(e), a = this.#t.view, o = a.getScaleResolution("x"), s = o.invertToComplex(r), c = this.#z(), { selectionInterval: l, selectionIntervalComplex: u, selectionIntervalLabel: d } = hw(c, c ? this.#B(c.view, e) : void 0), f;
		if (c && c.bookmarkable) try {
			let e = Bt(c.view, c.paramName);
			Et(this, e), f = {
				type: "selection",
				selector: e
			};
		} catch {
			f = void 0;
		}
		let p = tw(a, n, !!l), m = l ? [] : rw(a, n), h = [
			this.makePeekMenuItem(e.point.y - this.childCoords.y, i?.id),
			Ly,
			{
				label: d ? `Interval: ${d}` : mw(a, o, s),
				type: "header"
			},
			Ly
		], g = xw(this, this.context.getCurrentHover()), _;
		g.status === "disabled" && g.reason === "multiplePointSelectionParams" ? this.#m ||= (console.warn("Selection expansion is disabled because multiple multi-point selection parameters are configured in the same UnitView."), !0) : g.status === "available" && (_ = g.context);
		let v = zw, y = {
			sample: i,
			sampleHierarchy: this.sampleHierarchy,
			attributeInfoSource: this.compositeAttributeInfoSource,
			attributeType: v,
			sampleView: this
		}, b = "", x = !1, S = (e) => e.getTitleText() ?? e.spec.name ?? e.explicitName ?? e.name ?? "View";
		for (let [e, t] of p.entries()) {
			let n = S(t.view);
			if (n != b && (e > 0 && h.push({ type: "divider" }), h.push({
				label: n,
				type: "header"
			}), b = n), l) {
				h.push({
					label: t.field,
					submenu: gw({
						fieldInfo: t,
						aggregationFieldInfos: p.filter((e) => e.view === t.view),
						selectionIntervalComplex: u,
						selectionIntervalSource: f,
						...y
					})
				});
				continue;
			}
			h.push({
				label: t.field,
				submenu: _w({
					fieldInfo: t,
					complexX: s,
					...y
				})
			});
			let r = p[e + 1];
			_ && !x && t.view === _.hoveredView && (!r || r.view !== t.view) && (h.push(Mw(_, (e) => this.intentExecutor.dispatch(e))), x = !0);
		}
		_ && !x && (h.at(-1)?.type !== "divider" && h.push(Ly), h.push({
			label: S(_.hoveredView),
			type: "header"
		}), h.push(Mw(_, (e) => this.intentExecutor.dispatch(e))));
		for (let e of m) h.at(-1)?.type !== "divider" && h.push(Ly), h.push({
			label: S(e),
			type: "header"
		}), h.push({ label: L`Actions unavailable.<br />
                    Add a unique explicit "name" to this view.` });
		Qy({ items: h }, t);
	}
	getKeyboardZoomAnchorX(e) {
		if (this.childCoords.containsPoint(e.x, e.y)) return this.childCoords.normalizePoint(e.x, e.y).x;
	}
	#H() {
		let e = this.childCoords.y, t = this.childCoords.y2;
		for (let n of Object.values(this.#t.axes)) {
			let r = n.coords;
			r && (n.axisProps.orient === "top" || n.axisProps.orient === "bottom") && (e = Math.min(e, r.y), t = Math.max(t, r.y2));
		}
		return this.childCoords.modify({
			y: e,
			height: t - e
		});
	}
	propagateInteraction(e) {
		Ie(this, e, () => {
			let t = this.#H(), n = this.childCoords.containsPoint(e.point.x, e.point.y), r = t.containsPoint(e.point.x, e.point.y);
			if (e.type === "wheelclaimprobe") {
				r && this.#t.view.getScaleResolution("x")?.isZoomable() && e.claimWheel();
				return;
			}
			for (let t of Object.values(this.#t.scrollbars)) if (M(e, () => t.coords.containsPoint(e.point.x, e.point.y), () => t.propagateInteraction(e)), e.stopped) return;
			n ? M(e, () => !0, () => this.#t.view.propagateInteraction(e), () => Me(e, t, (e) => this.#U(t, this.#t.view, e), this.context.getCurrentHover(), this.context.animator)) : r && Me(e, t, (e) => this.#U(t, this.#t.view, e), this.context.getCurrentHover(), this.context.animator), !e.stopped && M(e, () => this.sidebarCoords.containsPoint(e.point.x, e.point.y), () => this.#n.propagateInteraction(e));
		});
	}
	#U(e, t, n) {
		let r = this.#t.view.getScaleResolution("x");
		if (!r || !r.isZoomable()) return !1;
		let i = e.normalizePoint(n.x, n.y), a = e.normalizePoint(n.x + n.xDelta, n.y + n.yDelta);
		return r.zoom(2 ** n.zDelta, i.x, a.x - i.x) && this.context.animator.requestRender(), !0;
	}
	async #W() {
		let e = [];
		for (let t of this.#t.view.getDescendants()) {
			let n = t.spec;
			if (NS(n)) for (let r of n.aggregateSamples) {
				r.transform = [{ type: "mergeFacets" }, ...r.transform ?? []], r.encoding = {
					...r.encoding ?? {},
					sample: null
				};
				let n = await this.context.createOrImportView(r, this.#t.summaryViews, t, "summaryView", void 0, {
					axisLabelClipPolicy: { y: "anchor" },
					inheritEncoding: !0
				});
				n.getFacetFields = (e) => void 0, e.push(n);
			}
		}
		this.#t.summaryViews.setChildren(e);
	}
	getDefaultResolution(e, t) {
		if (t == "axis") return "independent";
		switch (e) {
			case "x":
			case "sample": return "shared";
			default: return "independent";
		}
	}
	getParentGridChromePolicy() {
		return {
			axes: !1,
			background: !1
		};
	}
	dispatchAttributeAction(e) {
		this.intentExecutor.dispatch(e);
	}
	dispose() {
		super.dispose(), this.intentExecutor.removeActionAugmenter(this.#u);
	}
}, Vw = class extends qe {
	#e;
	#t;
	#n = 0;
	constructor(e, t) {
		super(), this.#e = e, this.#t = t;
	}
	reset() {
		this.#n = 0;
	}
	handle(e) {
		let t = String(e[this.#e]), n = this.#t ? e[this.#t] : void 0, r = n == null ? t : String(n);
		this._propagate({
			id: t,
			displayName: r,
			indexNumber: this.#n++
		});
	}
}, Hw = class extends ge {
	constructor(e, t, n, r, i) {
		super(e, t, n), this.groupBackground = void 0, this.groupBackgroundStroke = void 0, this.sampleChromeLayout = new Rw({
			sampleYAxis: t.spec.sampleYAxis,
			getActiveAxisCandidate: (e) => this.getActiveAxisCandidate(e),
			getPeekState: () => t.locationManager.getPeekState()
		});
		let a = ce(i);
		a && (this.groupBackground = new T(a, t.context, t, e, "sample-group-background-" + n), Tt(this.groupBackground, { skipSubtree: !0 }));
		let o = oe(i);
		o && (this.groupBackgroundStroke = new T(o, t.context, t, e, "sample-group-background-stroke-" + n), Tt(this.groupBackgroundStroke, { skipSubtree: !0 })), this.summaryViews = r;
	}
	allowDuplicateAxes() {
		return !0;
	}
	async syncGuideViews() {
		if (await super.syncGuideViews(), this.legends.left) throw Error("SampleView child legends do not support left orientation because the sidebar owns the left side.");
	}
	getAxisLabelClipPolicy(e, t) {
		return e === "y" ? "anchor" : super.getAxisLabelClipPolicy(e, t);
	}
	getOverhangWithoutYAxes() {
		let e = (e) => Fe(this.axes[e]), t = new dt(0, e("right"), 0, e("left"));
		return this.getOverhang().subtract(t);
	}
	*getChildren() {
		this.groupBackground && (yield this.groupBackground), this.groupBackgroundStroke && (yield this.groupBackgroundStroke), yield this.summaryViews, yield* super.getChildren();
	}
};
function Uw(e, t) {
	return e.length == t.length && e.every((e, n) => e == t[n]);
}
function Ww(e, t, n = "", r = /* @__PURE__ */ new Map()) {
	let i = e.sampleMetadata.attributeNames, a = e.sampleMetadata.entities, o = (e) => i.some((t) => t.startsWith(e + "/")), s = (e) => {
		if (r.has(e)) return r.get(e);
		let n = [];
		for (let r of t) {
			let t = a[r]?.[e];
			t != null && t !== "" && n.push(t);
		}
		return r.set(e, n), n;
	};
	return new Proxy({}, { get(a, c) {
		if (typeof c != "string") return;
		let l = n ? n + "/" + c : c;
		return i.includes(l) ? s(l) : o(l) ? Ww(e, t, l, r) : Gw;
	} });
}
var Gw = new Proxy([], { get(e, t, n) {
	return t in e || typeof t != "string" ? Reflect.get(e, t, n) : Gw;
} }), Kw = (e, t) => t.some((t) => e instanceof t), qw, Jw;
function Yw() {
	return qw ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function Xw() {
	return Jw ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
var Zw = /* @__PURE__ */ new WeakMap(), Qw = /* @__PURE__ */ new WeakMap(), $w = /* @__PURE__ */ new WeakMap(), eT = /* @__PURE__ */ new WeakMap(), tT = /* @__PURE__ */ new WeakMap();
function nT(e) {
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("success", i), e.removeEventListener("error", a);
		}, i = () => {
			t(cT(e.result)), r();
		}, a = () => {
			n(e.error), r();
		};
		e.addEventListener("success", i), e.addEventListener("error", a);
	});
	return t.then((t) => {
		t instanceof IDBCursor && Zw.set(t, e);
	}).catch(() => {}), tT.set(t, e), t;
}
function rT(e) {
	if (Qw.has(e)) return;
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a);
		}, i = () => {
			t(), r();
		}, a = () => {
			n(e.error || new DOMException("AbortError", "AbortError")), r();
		};
		e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a);
	});
	Qw.set(e, t);
}
var iT = {
	get(e, t, n) {
		if (e instanceof IDBTransaction) {
			if (t === "done") return Qw.get(e);
			if (t === "objectStoreNames") return e.objectStoreNames || $w.get(e);
			if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
		}
		return cT(e[t]);
	},
	set(e, t, n) {
		return e[t] = n, !0;
	},
	has(e, t) {
		return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
	}
};
function aT(e) {
	iT = e(iT);
}
function oT(e) {
	return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
		let r = e.call(lT(this), t, ...n);
		return $w.set(r, t.sort ? t.sort() : [t]), cT(r);
	} : Xw().includes(e) ? function(...t) {
		return e.apply(lT(this), t), cT(Zw.get(this));
	} : function(...t) {
		return cT(e.apply(lT(this), t));
	};
}
function sT(e) {
	return typeof e == "function" ? oT(e) : (e instanceof IDBTransaction && rT(e), Kw(e, Yw()) ? new Proxy(e, iT) : e);
}
function cT(e) {
	if (e instanceof IDBRequest) return nT(e);
	if (eT.has(e)) return eT.get(e);
	let t = sT(e);
	return t !== e && (eT.set(e, t), tT.set(t, e)), t;
}
var lT = (e) => tT.get(e);
//#endregion
//#region ../../node_modules/idb/build/index.js
function uT(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = cT(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(cT(o.result), e.oldVersion, e.newVersion, cT(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
var dT = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
], fT = [
	"put",
	"add",
	"delete",
	"clear"
], pT = /* @__PURE__ */ new Map();
function mT(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (pT.get(t)) return pT.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = fT.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || dT.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return pT.set(t, a), a;
}
aT((e) => ({
	...e,
	get: (t, n, r) => mT(t, n) || e.get(t, n, r),
	has: (t, n) => !!mT(t, n) || e.has(t, n)
}));
//#endregion
//#region ../app/src/bookmark/bookmarkDatabase.js
var hT = class {
	constructor() {
		this.baseUrl = void 0;
	}
	isReadonly() {
		return !0;
	}
	async put(e, t) {
		this._checkReadonly();
	}
	async delete(e) {
		this._checkReadonly();
	}
	async getNames() {
		return [];
	}
	async get(e) {}
	_checkReadonly() {
		if (this.isReadonly()) throw Error("This bookmark");
	}
}, gT = "bookmarks", _T = class extends hT {
	constructor(e) {
		super(), this.specId = e, this._db = void 0;
	}
	async _getDB() {
		if (!this._db) {
			let e = `GenomeSpy: ${this.specId}`;
			this._db = uT(e, 1, {
				upgrade(e, t, n, r) {
					e.createObjectStore(gT, { keyPath: "name" });
				},
				blocked() {},
				blocking() {},
				terminated() {}
			});
		}
		return this._db;
	}
	isReadonly() {
		return !1;
	}
	async put(e, t) {
		let n = (await this._getDB()).transaction(gT, "readwrite");
		try {
			t && await n.store.delete(t), await n.store.put(e), await n.done;
		} catch (e) {
			throw n.abort(), e;
		}
	}
	async delete(e) {
		(await this._getDB()).delete(gT, e);
	}
	async getNames() {
		return (await this._getDB()).getAllKeys(gT);
	}
	async get(e) {
		return (await this._getDB()).get(gT, e);
	}
}, vT = {}, yT = re(class extends ke {
	constructor() {
		super(...arguments), this.ot = vT;
	}
	render(e, t) {
		return t();
	}
	update(e, [t, n]) {
		if (Array.isArray(t)) {
			if (Array.isArray(this.ot) && this.ot.length === t.length && t.every((e, t) => e === this.ot[t])) return N;
		} else if (this.ot === t) return N;
		return this.ot = Array.isArray(t) ? Array.from(t) : t, this.render(t, n);
	}
}), bT = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	constructor(e) {
		this.#e = e, this.#e.addController(this);
	}
	addUnsubscribeCallback(e) {
		this.#t.add(e);
	}
	hostConnected() {}
	hostDisconnected() {
		this.#t.forEach((e) => e()), this.#t.clear();
	}
	hostUpdate() {}
	hostUpdated() {}
}, xT = class extends A {
	constructor() {
		super(), this.inputRef = tn(), this.app = void 0, this._focused = !1, this._subscriptions = new bT(this), this.getDefaultValue = () => "";
	}
	get genomeSpy() {
		return this.app.genomeSpy;
	}
	get _inputField() {
		return this.inputRef.value;
	}
	static get properties() {
		return { app: { type: Object } };
	}
	connectedCallback() {
		super.connectedCallback(), this._initializeGenome();
		let e = (e) => {
			e.target !== this._inputField && this._inputField?.blur();
		};
		document.addEventListener("click", e), this._subscriptions.addUnsubscribeCallback(() => document.removeEventListener("click", e));
	}
	createRenderRoot() {
		return this;
	}
	focusInput() {
		this._inputField?.focus();
	}
	_initializeGenome() {
		let e = TT(this.genomeSpy.viewRoot);
		if (e) {
			this._genomeResolution = e;
			let t = e.getScale();
			if (!("genome" in t)) throw Error("Expected a zoomable locus scale to provide genome()");
			this._genome = t.genome(), this.getDefaultValue = () => this._genome.formatInterval(e.getDomain());
			let n = he(() => this.requestUpdate(), 60, !1);
			e.addEventListener("domain", n), this._subscriptions.addUnsubscribeCallback(() => e.removeEventListener("domain", n));
		}
	}
	async searchViews(e) {
		let t = new Intl.Collator("en", {
			usage: "search",
			sensitivity: "base"
		});
		for (let n of this.genomeSpy.getSearchableViews()) {
			let r = n.getSearchAccessors();
			if (r.length === 0) continue;
			let i = n.getDataAccessor("x").asNumberAccessor(), a = n.getDataAccessor("x2").asNumberAccessor(), o = n.getScaleResolution("x");
			if (!(!i || !a || !o?.isZoomable())) {
				for (let s of n.getCollector()?.getData() ?? []) if (CT(s, r, e, t)) {
					let e = Na([i(s), a(s)], null, 1.2);
					return await o.zoomTo(e), !0;
				}
			}
		}
		return !1;
	}
	async search(e) {
		await (async () => {
			if (this._genomeResolution && this._genome) {
				let t = this._genome.parseInterval(e);
				if (t) {
					this._genomeResolution.zoomTo(t);
					return;
				}
				if (await this.searchViews(e)) return;
				this.genomeSpy.viewRoot.visit((t) => {
					t instanceof Xx && t.handleVerboseCommand(e);
				});
			}
		})(), this._inputField.value = this.getDefaultValue(), this.requestUpdate();
	}
	_onSearchHelpClicked(e) {
		let t = e.target;
		t.tagName == "LI" && this._doExampleSearch(t.innerText);
	}
	_onSearchFocused(e) {
		let t = e.target;
		switch (e.type) {
			case "focus":
				this._focused = !0, t.select();
				break;
			case "blur":
				this._focused = !1;
				break;
			default:
		}
	}
	_onSearchKeyDown(e) {
		let t = e.target;
		e.code == "Enter" ? (e.preventDefault(), this.search(t.value).then(() => {
			t.focus(), t.select();
		}).catch((e) => {
			console.log(e), alert(e);
		})) : e.code == "Escape" ? t.blur() : e.stopPropagation();
	}
	_doExampleSearch(e) {
		ST(e, this._inputField).then(() => {
			this._inputField.blur(), this.search(e);
		});
	}
	_getSearchHelp() {
		let e = [];
		e.push(L`
            <p>Focus to a specific range. Examples:</p>
            <ul>
                <!-- TODO: Display only when using a genomic coordinate system-->
                <li>chr8</li>
                <li>chr8:21,445,873</li>
                <li>chr8:21,445,873-24,623,697</li>
                <li>chr4:166,014,727-chr15:23,731,397</li>
            </ul>
        `);
		for (let t of this.genomeSpy?.getSearchableViews() || []) {
			let n = t.getTitleText() ?? t.spec.name, r = t.getSearchAccessors(), i = r.flatMap((e) => e.fields).join(", "), a = wT(r, t.getCollector().getData(), 3);
			e.push(L`
                <p>Search <em>${n}</em> (${i}). Examples:</p>
                <ul>
                    ${a.map((e) => L` <li>${e}</li> `)}
                </ul>
            `);
		}
		let t = this.app.getSampleView()?.metadataView;
		if (t) {
			let n = t.getAttributeNames().map((e) => t.getAttributeInfo(e)).filter((e) => e.type == "nominal" || e.type == "ordinal").sort(() => .5 - Math.random()).map((e) => [...e.scale?.domain() ?? []].sort(() => .5 - Math.random())[0]).filter((e) => e !== void 0).slice(0, 3);
			n.length && e.push(L` <p>
                            Filter samples by categorical attributes. Examples:
                        </p>
                        <ul>
                            ${n.map((e) => L`<li>${e}</li>`)}
                        </ul>`);
		}
		return L`
            <div class="search-help" @click=${this._onSearchHelpClicked}>
                ${e}
            </div>
        `;
	}
	updated(e) {
		this._focused && this._inputField.select();
	}
	render() {
		return L`
            <div class="search">
                <input
                    type="text"
                    class="search-input"
                    .value=${this.getDefaultValue()}
                    @mousedown=${(e) => {
			this._focused || (this._inputField.focus(), e.preventDefault(), e.stopPropagation());
		}}
                    @keydown=${this._onSearchKeyDown.bind(this)}
                    @focus=${this._onSearchFocused}
                    @blur=${this._onSearchFocused}
                    ${Zt(this.inputRef)}
                />
                ${yT([123], () => this._getSearchHelp())}
            </div>
        `;
	}
};
customElements.define("genome-spy-search-field", xT);
function ST(e, t) {
	return new Promise((n) => {
		let r = 0, i = 700 / e.length + 30;
		function a() {
			t.value = e.substring(0, r), r >= e.length ? setTimeout(n, 500) : (r++, setTimeout(a, Math.random() * i * 2));
		}
		a();
	});
}
function CT(e, t, n, r) {
	for (let i of t) {
		let t = i(e);
		if (t != null && r.compare(String(t), n) === 0) return !0;
	}
	return !1;
}
function wT(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) for (let e of E(n, t, i)) if (e != null && r.add(String(e)), r.size >= n) return [...r];
	return [...r];
}
function TT(e) {
	let t;
	return e.visit((e) => {
		for (let n of ["x", "y"]) {
			let r = e.resolutions.scale[n];
			if (r && r.type == "locus" && r.isZoomable()) return t = r, ct;
		}
	}), t;
}
var ET = {
	name: "@genome-spy/app",
	description: "GenomeSpy-based visualization tool for analyzing multiple biological samples.",
	author: {
		name: "Kari Lavikka",
		email: "kari.lavikka@helsinki.fi"
	},
	contributors: [],
	license: "MIT",
	homepage: "https://genomespy.app/",
	version: "0.81.0",
	main: "dist/index.js",
	module: "dist/index.es.js",
	type: "module",
	types: "src/index.d.ts",
	exports: {
		".": {
			types: "./src/index.d.ts",
			development: "./src/index.js",
			import: "./dist/index.es.js",
			default: "./dist/index.js"
		},
		"./agentApi": {
			types: "./src/agentApi/index.d.ts",
			development: "./src/agentApi/index.js",
			import: "./dist/agentApi.es.js",
			default: "./dist/agentApi.es.js"
		},
		"./agentShared": {
			types: "./src/agentShared/index.d.ts",
			development: "./src/agentShared/index.js",
			import: "./dist/agentShared.es.js",
			default: "./dist/agentShared.es.js"
		},
		"./browser": {
			import: "./dist/index.es.js",
			default: "./dist/index.js"
		},
		"./dialog": {
			types: "./src/dialog/index.d.ts",
			development: "./src/dialog/index.js",
			import: "./dist/dialog.es.js",
			default: "./dist/dialog.es.js"
		},
		"./schema.json": "./dist/schema.json",
		"./style.css": "./dist/style.css"
	},
	files: ["dist/", "src/**/*.d.ts"],
	repository: {
		type: "git",
		url: "github:genome-spy/genome-spy",
		directory: "packages/app"
	},
	scripts: {
		dev: "node dev-server.mjs",
		build: "rm -rf dist && mkdir -p dist && vite build && vite build --config vite.agent-subpaths.config.js && npm run build:schema",
		"build:schema": "mkdir -p dist && ts-json-schema-generator --path 'src/spec/*.d.ts' --type AppRootSpec > dist/schema.json",
		"test:tsc": "npm run test:tsc:src && npm run test:tsc:tests",
		"test:tsc:src": "tsc -p tsconfig.json --noEmit",
		"test:tsc:tests": "tsc -p tsconfig.tests.json --noEmit",
		storybook: "storybook dev -p 6006",
		"build-storybook": "storybook build",
		prepublishOnly: "npm run build"
	},
	dependencies: {
		"@floating-ui/dom": "^1.6.1",
		"@fortawesome/fontawesome-free": "^6.4.2",
		"@fortawesome/fontawesome-svg-core": "^6.4.2",
		"@fortawesome/free-solid-svg-icons": "^6.4.2",
		"@genome-spy/core": "^0.81.0",
		"@reduxjs/toolkit": "^2.11.0",
		"d3-color": "^3.1.0",
		idb: "^7.1.1",
		lit: "^3.3.0",
		"lz-string": "^1.4.4",
		mapsort: "^1.0.5",
		micromark: "^4.0.0",
		"redux-undo": "^1.0.1",
		"vega-util": "2.1.0",
		zarrita: "^0.6.1"
	},
	devDependencies: {
		"@genome-spy/app-agent": "^0.81.0",
		"@genome-spy/inspector": "^0.81.0"
	}
};
//#endregion
//#region ../app/src/utils/version.js
function DT(e) {
	return L`<a
        href="https://github.com/genome-spy/genome-spy/releases/tag/v${e}"
        target="_blank"
        >v${e}</a
    >`;
}
//#endregion
//#region ../../node_modules/lit-html/directives/live.js
var OT = re(class extends ke {
	constructor(e) {
		if (super(e), e.type !== ye.PROPERTY && e.type !== ye.ATTRIBUTE && e.type !== ye.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
		if (!Jt(e)) throw Error("`live` bindings can only contain a single expression");
	}
	render(e) {
		return e;
	}
	update(e, [t]) {
		if (t === N || t === I) return t;
		let n = e.element, r = e.name;
		if (e.type === ye.PROPERTY) {
			if (t === n[r]) return N;
		} else if (e.type === ye.BOOLEAN_ATTRIBUTE) {
			if (!!t === n.hasAttribute(r)) return N;
		} else if (e.type === ye.ATTRIBUTE && n.getAttribute(r) === t + "") return N;
		return en(e), t;
	}
});
//#endregion
//#region ../app/src/utils/dependency.js
function kT(e, t) {
	return new CustomEvent("query-dependency", {
		detail: {
			name: e,
			setter: t
		},
		bubbles: !0
	});
}
//#endregion
//#region ../app/src/utils/nestPaths.js
function AT(e) {
	if (!e?.length) throw Error("Can't nest an empty array!");
	let t = jT(null);
	for (let n of e) {
		if (!n?.length) throw Error("Cannot nest, element has no path!");
		let e = t;
		for (let t of n) {
			let n = e.children.find((e) => e.item === t);
			n || (n = jT(t), e.children.push(n)), e = n;
		}
	}
	return t.children[0];
}
var jT = (e) => ({
	item: e,
	children: []
}), MT = class extends A {
	static properties = {
		items: { type: Array },
		rowHeight: { type: Number },
		buffer: { type: Number },
		blockMultiplier: { type: Number }
	};
	#e = 0;
	#t = 0;
	#n = null;
	#r = null;
	#i = null;
	#a = new bT(this);
	constructor() {
		super(), this.items = [], this.rowHeight = 32, this.buffer = 5, this.blockMultiplier = 3;
	}
	static styles = o`
        :host {
            display: block;
            position: relative;

            font-size: inherit;
            font-family: inherit;

            --dg-row-height: 32px;
            --dg-border: var(--form-control-border-color, #ccc);
        }

        .grid-root {
            border: 1px solid var(--dg-border);
            border-radius: var(--form-control-border-radius, 4px);
            overflow-x: auto;
            position: absolute;
            inset: 0;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .header-table,
        .body-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        .header-table th {
            text-align: left;
            padding: 0 0.5rem;
            height: var(--dg-row-height);
            box-sizing: border-box;
            border-bottom: 1px solid var(--dg-border);
            font-weight: 600;
        }

        .grid-body {
            overflow-y: auto;
            flex-grow: 1;
            position: relative;
            contain: content;
            -webkit-overflow-scrolling: touch;
        }

        .body-table tr {
            height: var(--dg-row-height);
        }

        .body-table td {
            padding: 0 0.5rem;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0, 0, 0, 0.03);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .body-table td.numeric,
        .header-table th.numeric {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }

        .cell {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    `;
	firstUpdated() {
		this.#r = this.renderRoot.querySelector(".grid-body"), this.#r.addEventListener("scroll", () => this.#o(), { passive: !0 }), this.#l(), this.#a.addUnsubscribeCallback(() => {
			this.#r.removeEventListener("scroll", this.#o);
		});
		let e = new ResizeObserver(() => this.#l());
		e.observe(this), this.#a.addUnsubscribeCallback(() => {
			e.disconnect();
		});
	}
	#o() {
		this.#l();
	}
	#s(e) {
		if (e == null) return 0;
		if (!this.#i) {
			let e = document.createElement("canvas");
			this.#i = e.getContext("2d");
		}
		let t = getComputedStyle(this), n = t.fontSize ?? "14px", r = t.fontFamily ?? "sans-serif", i = t.fontWeight ?? "400";
		this.#i.font = `${i} ${n} ${r}`;
		try {
			return this.#i.measureText(String(e)).width ?? 0;
		} catch {
			return String(e).length * (parseFloat(n) ?? 14) * .6;
		}
	}
	#c() {
		let e = this.items ?? [], t = e.length ? Object.keys(e[0]) : [], n = getComputedStyle(this), r = parseFloat(n.fontSize) || 14, i = 3 * r, a = 20 * r, o = Math.min(100, e.length), s = t.map((t) => {
			let n = this.#s(t ?? "");
			for (let r = 0; r < o; r++) {
				let i = e[r] ? e[r][t] : "", a = this.#s(i == null ? "" : String(i));
				a > n && (n = a);
			}
			return Math.ceil(Math.min(a, Math.max(i, n + 24)));
		}), c = t.map((t) => {
			let n = 0, r = 0;
			for (let i = 0; i < o; i++) {
				let a = e[i] ? e[i][t] : null;
				if (!(a == null || a === "")) {
					if (r++, typeof a == "number") n++;
					else if (typeof a == "string") {
						let e = a.trim();
						if (e === "") continue;
						let t = Number(e.replace(/[, ]+/g, ""));
						isFinite(t) && n++;
					}
				}
			}
			return r === 0 ? !1 : n / r >= .8;
		}), l = t.map((e, t) => ({
			key: e,
			label: e,
			width: s[t],
			isNumeric: c[t]
		}));
		this.#n = l;
	}
	#l() {
		if (!this.#r) return;
		let e = this.rowHeight, t = this.items.length, n = this.#r.clientHeight ?? 0, r = Math.max(1, Math.ceil(n / e)), i = this.#r.scrollTop ?? 0, a = Math.floor(i / e), o = this.blockMultiplier ?? 1, s = Math.max(1, Math.ceil(r * o)), c = Math.floor(a / s) * s, l = this.buffer ?? 0, u = Math.max(0, c - l), d = Math.max(0, Math.min(t - u, s + 2 * l)), f = this.#e !== u || this.#t !== d;
		this.#e = u, this.#t = d, f && this.requestUpdate();
	}
	updated(e) {
		(e.has("items") || e.has("columns")) && this.#c();
	}
	#u(e) {
		return L`${e.map((e) => L`<th class="cell ${e.isNumeric ? "numeric" : ""}">
                    ${e.label}
                </th>`)}`;
	}
	#d(e, t) {
		return L`${t.map((t) => L`<td class="cell ${t.isNumeric ? "numeric" : ""}">
                    ${this.#f(e[t.key])}
                </td>`)}`;
	}
	#f(e) {
		return e == null ? L`` : typeof e == "object" ? L`${JSON.stringify(e)}` : L`${String(e)}`;
	}
	render() {
		let e = this.items ?? [], t = e.length ? Object.keys(e[0]) : [], n = e.length * this.rowHeight, r = this.#e ?? 0, i = e.slice(r, r + this.#t), a = this.#n || t.map((e) => ({
			key: e,
			label: e,
			width: null,
			isNumeric: !1
		})), o = L`<colgroup>
            ${a.map((e) => e.width ? L`<col style="width:${e.width}px" />` : L`<col />`)}
        </colgroup>`, s = r * this.rowHeight, c = i.length * this.rowHeight, l = Math.max(0, n - s - c), u = this.#n && this.#n.reduce((e, t) => e + (t.width ?? 0), 0) || null, d = L`
            <table class="header-table" role="table">
                ${o}
                <thead>
                    <tr role="row">
                        ${this.#u(a)}
                    </tr>
                </thead>
            </table>
        `, f = L`
            <table class="body-table">
                ${o}
                <tbody>
                    <tr style="height:${s}px">
                        <td colspan="${a.length}"></td>
                    </tr>
                    ${i.map((e, t) => L`<tr role="row">
                                ${this.#d(e, a)}
                            </tr>`)}
                    <tr style="height:${l}px">
                        <td colspan="${a.length}"></td>
                    </tr>
                </tbody>
            </table>
        `;
		return L`
            <div class="grid-root">
                <div
                    class="container"
                    style="min-width:${u ? u + "px" : "100%"}"
                >
                    ${d}
                    <div class="grid-body" role="grid">${f}</div>
                </div>
            </div>
        `;
	}
};
customElements.define("gs-data-grid", MT);
//#endregion
//#region ../app/src/components/generic/uploadDropZone.js
var NT = class extends A {
	static properties = {
		accept: { type: String },
		multiple: { type: Boolean },
		dropText: { type: String },
		_dragOver: { state: !0 }
	};
	constructor() {
		super(), this.accept = "", this.multiple = !1, this.dropText = "Drop a file here or", this._dragOver = !1;
	}
	static styles = [
		Vg,
		Bg,
		o`
            :host {
                display: block;
                font-size: inherit;
                font-family: inherit;
            }

            .drop-zone {
                border: 2px dashed var(--form-control-border-color);
                border-radius: 8px;
                padding: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:
                    box-shadow 0.15s ease,
                    transform 0.12s ease,
                    background-color 0.12s ease;
            }

            .drop-zone.drop-over {
                background-color: rgba(106, 160, 255, 0.06);
                border-color: var(--gs-accent-color, #6aa0ff);
                box-shadow: 0 8px 24px rgba(106, 160, 255, 0.08);
            }

            .drop-inner {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            .drop-icon {
                font-size: 2rem;
            }
        `
	];
	render() {
		return L`
            <div
                class=${this._dragOver ? "drop-zone drop-over" : "drop-zone"}
                @dragover=${(e) => this.#t(e)}
                @dragleave=${(e) => this.#n(e)}
                @drop=${(e) => this.#r(e)}
            >
                <div class="drop-inner">
                    <div class="drop-icon">${K(ff).node[0]}</div>
                    <div class="drop-text">${this.dropText}</div>
                    <button
                        class="btn"
                        @click=${(e) => {
			e.stopPropagation(), this.#e().click();
		}}
                    >
                        Choose file
                    </button>
                </div>
                <input
                    id="file"
                    type="file"
                    accept=${this.accept}
                    ?multiple=${this.multiple}
                    @change=${(e) => this.#i(e)}
                    style="display: none"
                />
            </div>
        `;
	}
	#e() {
		return this.renderRoot.querySelector("#file");
	}
	#t(e) {
		e.preventDefault(), e.dataTransfer.dropEffect = "copy", this._dragOver = !0;
	}
	#n(e) {
		e.preventDefault(), this._dragOver = !1;
	}
	#r(e) {
		e.preventDefault(), this._dragOver = !1;
		let t = e.dataTransfer;
		if (t.files.length) {
			let e = t.files;
			this.#a(e);
		}
	}
	#i(e) {
		let t = e.target;
		t.files.length && this.#a(t.files);
	}
	#a(e) {
		let t = new CustomEvent("gs-files-chosen", {
			detail: { files: e },
			bubbles: !0,
			composed: !0
		});
		this.dispatchEvent(t);
	}
};
customElements.define("gs-upload-drop-zone", NT);
//#endregion
//#region ../app/src/sampleView/metadata/metadataHierarchyConfigurator.js
var PT = "sample", FT = class extends A {
	static properties = {
		_pathRoot: { state: !0 },
		metadataRecords: {},
		addUnderGroup: { state: !0 },
		separator: { type: String }
	};
	constructor() {
		super(), this.metadataRecords = [], this.addUnderGroup = "", this.separator = "", this._pathRoot = null, this._separatorManuallySet = !1, this._columns = [], this._scales = /* @__PURE__ */ new Map(), this._metadataNodeTypes = /* @__PURE__ */ new Map();
	}
	static styles = [Vg, o`
            :host {
                display: block;
            }

            .gs-form-group {
                margin-bottom: 12px;
            }

            .table-wrapper {
                border: 1px solid var(--form-control-border-color, #ccc);
                border-radius: var(--form-control-border-radius, 4px);
                overflow: hidden;
                margin-top: 0.5em;
            }

            table {
                width: 100%;
                border-collapse: collapse;

                .btn {
                    padding: 4px 8px;
                    margin-top: -2px;
                    margin-bottom: -2px;
                }
            }

            th,
            td {
                text-align: left;
                padding: 0.4em 0.6em;
                box-sizing: border-box;
                border-bottom: 1px solid rgba(0, 0, 0, 0.03);
            }

            th {
                font-weight: 600;
                border-bottom-color: var(--form-control-border-color, #ccc);
            }

            td {
                font-size: 90%;
            }

            .scheme-preview img {
                height: 16px;
                vertical-align: middle;
                margin-right: 6px;
            }

            .btn svg {
                width: 1em;
            }

            span.unset {
                text-decoration: line-through;
            }

            select.invalid {
                color: var(--danger-color, #dc3545);
                border-color: var(--danger-color, #dc3545);
            }
        `];
	#e() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.metadataRecords || []) for (let n of Object.keys(t)) e.add(n);
		this._columns = Array.from(e).filter((e) => e !== PT);
	}
	#t() {
		this._rawTypes = /* @__PURE__ */ new Map();
		for (let e of es(this._pathRoot)) if (e.path) {
			let t = hs(this.metadataRecords.map((t) => t[e.attribute]).filter((e) => e != null));
			this._rawTypes.set(e.attribute, t);
		}
	}
	#n() {
		let e = gs(this._rawTypes, this._pathRoot);
		for (let [t, n] of e.entries()) this._metadataNodeTypes.has(t) || this._metadataNodeTypes.set(t, n);
	}
	firstUpdated() {
		this.#e();
		let e = this._columns;
		if (e.length > 0 && !this._separatorManuallySet) {
			let t = ns(e);
			t && t !== this.separator && (this.separator = t);
		}
		this._pathRoot = $o(e, this.separator), this.#t(), this.#n(), this.#c();
	}
	updated(e) {
		super.updated(e), e.has("metadataRecords") && (this.#e(), this.#t()), e.has("separator") && (this._pathRoot = $o(this._columns, this.separator), this.#n(), this.#c());
	}
	#r(e) {
		this.addUnderGroup = e.target.value.trim(), this.#c();
	}
	#i(e) {
		this.separator = e.target.value, this._separatorManuallySet = !0, this.#c();
	}
	async #a(e) {
		let t = ((e) => {
			for (let t of [e, ...ts(e)]) {
				let e = this._metadataNodeTypes.get(t.path);
				if (e && e !== "unset" && e !== "inherit") return e;
			}
			return "nominal";
		})(e), n = [];
		for (let t of es(e)) if (t.attribute) for (let e of this.metadataRecords) {
			let r = e[t.attribute];
			r != null && n.push(r);
		}
		let r = n.length > 0 ? DC(t, n) : [], i = this._scales.get(e.path), a = await J("gs-configure-scale-dialog", (e) => {
			e.observedDomain = r, e.dataType = t, i && (e.scale = i);
		});
		if (a.ok) {
			let t = a.data;
			t && Object.keys(t).length > 0 ? this._scales.set(e.path, t) : this._scales.delete(e.path), this.requestUpdate(), this.#c();
		}
	}
	#o() {
		let e = (e) => {
			let t = e.target, n = t.dataset.path, r = t.value;
			this._metadataNodeTypes.set(n, r), this.requestUpdate(), this.#c();
		}, t = this.#s();
		return F_(es(this._pathRoot), (r) => {
			let i = (e) => {
				let t = 0, n = e.parent;
				for (; n;) t++, n = n.parent;
				return t;
			}, a = r.path, o = r.children.size === 0, s = this._scales.get(a), c = s?.type ?? "", l = s?.domain ? JSON.stringify(s.domain) : "", u = s?.range ? JSON.stringify(s.range) : "", d = s?.scheme ?? null, f = this._metadataNodeTypes.get(r.path) ?? "unset", p = r.parent === null, m = p && this.addUnderGroup ? this.addUnderGroup : r.part, h = { marginLeft: `${i(r) * 20}px` };
			p && !this.addUnderGroup && (h.color = "gray");
			let g = { unset: o && f === "unset" }, _ = { invalid: t.has(r.path) };
			return L`<tr>
                <td>
                    <span
                        style=${n(h)}
                        class=${Nd(g)}
                        >${m}</span
                    >
                </td>
                <td>
                    <select
                        data-path="${r.path}"
                        class=${Nd(_)}
                        @change=${e}
                    >
                        ${[
				"nominal",
				"ordinal",
				"quantitative",
				"unset",
				"inherit"
			].map((e) => L`<option
                                    value="${e}"
                                    ?selected=${f === e}
                                >
                                    ${e}
                                </option>`)}
                    </select>
                </td>
                <td>${c}</td>
                <td>${l}</td>
                <td>
                    ${u || (d ? L`<span class="scheme-preview"
                                ><img
                                    src="${EC(d)}"
                                    alt="${d}"
                                    title="${d}"
                                />${d}</span
                            >` : "")}
                </td>
                <td style="text-align: right;">
                    <button
                        class="btn"
                        @click=${() => this.#a(r)}
                        title="Configure scale"
                        ?disabled=${f === "unset" || f === "inherit"}
                    >
                        ${K(Vd).node[0]}
                    </button>
                </td>
            </tr>`;
		});
	}
	#s() {
		let e = /* @__PURE__ */ new Set(), t = (e) => e === "nominal" || e === "ordinal" || e === "quantitative", n = this._metadataNodeTypes.get(""), r = t(n) ? n : null, i = (n, r) => {
			let a = this._metadataNodeTypes.get(n.path), o = r;
			t(a) ? o = a : a === "inherit" && !o && n.children.size === 0 && e.add(n.path);
			for (let e of n.children.values()) i(e, o);
		};
		return this._pathRoot && i(this._pathRoot, r), e;
	}
	render() {
		return L`
            <div class="gs-form-group">
                <label for="group-name">Root group name</label>
                <input
                    id="group-name"
                    type="text"
                    .value=${this.addUnderGroup ?? ""}
                    placeholder="(optional) Group name under which to add new metadata"
                    @input=${this.#r}
                />
            </div>

            <div class="gs-form-group">
                <label for="separator">Hierarchy-level separator</label>
                <input
                    id="separator"
                    type="text"
                    .value=${this.separator ?? ""}
                    placeholder="(optional) Separator character for possible hierarchical groups (e.g. .)"
                    @input=${this.#i}
                />
            </div>

            <div>
                <label>Attributes</label>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Data type</th>
                                <th>Scale</th>
                                <th>Domain</th>
                                <th>Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.#o()}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
	}
	getConfig() {
		let e = [...this.#s()];
		return {
			separator: this.separator ? this.separator : null,
			addUnderGroup: this.addUnderGroup ? this.addUnderGroup : null,
			scales: new Map(this._scales.entries().map(([e, t]) => [e, structuredClone(t)])),
			metadataNodeTypes: new Map(this._metadataNodeTypes),
			invalidInheritLeafNodes: e
		};
	}
	#c() {
		this.dispatchEvent(new CustomEvent("metadata-config-change", {
			detail: this.getConfig(),
			bubbles: !0,
			composed: !0
		}));
	}
};
customElements.define("gs-metadata-hierarchy-configurator", FT);
//#endregion
//#region ../app/src/sampleView/metadata/metadataFileUtils.js
function IT(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => t(r.result), r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("Could not read file.")), r.readAsText(e);
	});
}
function LT(e, t) {
	return /\.json$/i.test(t) ? "json" : e.indexOf("	") >= 0 ? "tsv" : "csv";
}
//#endregion
//#region ../app/src/sampleView/metadata/uploadMetadataDialog.js
var RT = class extends q {
	static properties = {
		...super.properties,
		existingSampleIds: {},
		_fileName: { state: !0 },
		_parsedItems: { state: !0 },
		_page: { state: !0 }
	};
	#e;
	#t;
	#n;
	constructor() {
		super(), this.existingSampleIds = /* @__PURE__ */ new Set(), this.dialogTitle = "Load Custom Metadata", this._parsedItems = null, this._fileName = null, this._page = 0, this.#n = new qC(this, [
			{
				render: () => this.#o(),
				canAdvance: () => this._parsedItems != null
			},
			{
				render: () => this.#c(),
				canAdvance: () => this.#e?.statistics?.samplesInBoth?.size > 0
			},
			{
				render: () => this.#l(),
				onAdvance: () => this.#r()
			}
		]);
	}
	static styles = [...super.styles, o`
            dialog {
                width: 600px;
            }

            .upload-stats {
                margin-top: var(--gs-basic-spacing, 10px);
                font-size: 90%;
            }
        `];
	#r() {
		let e = this.#t;
		if (!e) throw Error("Metadata configuration is missing");
		if (e.invalidInheritLeafNodes.length > 0) return Y("Some leaf attributes are set to inherit a type, but no ancestor defines one. Select a concrete type for those leaves or define a type higher in the hierarchy.", {
			title: "Warning",
			type: "warning"
		}), !1;
		let t = cs(this._parsedItems, this.existingSampleIds, e);
		return this.finish({
			ok: !0,
			data: t
		}), this.triggerClose(), !1;
	}
	async #i(e) {
		let t = await IT(e), n = LT(t, e.name);
		this._parsedItems = ae(t, {
			type: n,
			parse: "auto"
		}), this._fileName = e.name, this.#e = ll(this.existingSampleIds, this._parsedItems), this.#n.advance(1);
	}
	async #a(e) {
		let t = e.detail.files[0];
		await this.#i(t);
	}
	#o() {
		return L`${zT}

            <gs-upload-drop-zone
                accept=".csv,.tsv,.json"
                @gs-files-chosen=${(e) => this.#a(e)}
            ></gs-upload-drop-zone>`;
	}
	#s() {
		if (this.#e.error) return L`<div class="gs-alert danger">
                ${K(Df).node[0]}
                <div>
                    <p>Errors found in metadata:</p>
                    <ul>
                        ${this.#e.error.map((e) => L`<li>${HT(e)}</li>`)}
                    </ul>
                    <p>Please fix the errors and try again.</p>
                </div>
            </div>`;
		if (this.#e.statistics) {
			let e = this.#e.statistics, t = e.unknownSamples.size > 0 || e.notCoveredSamples.size > 0;
			return L`<div
                class="${t ? "gs-alert warning" : "gs-alert info"}"
            >
                ${K(t ? Bd : rf).node[0]}
                <div>
                    <p>
                        ${t ? "Metadata loaded (with caveats)!" : "Metadata loaded successfully!"}
                    </p>
                    <ul>
                        <li>
                            Unknown samples to be ignored:
                            <span>${e.unknownSamples.size}</span
                            >${VT(e.unknownSamples)}
                        </li>
                        <li>
                            Existing samples not covered by loaded metadata:
                            <span>${e.notCoveredSamples.size}</span
                            >${VT(e.notCoveredSamples)}
                        </li>
                        <li>
                            Matching samples:
                            <span>${e.samplesInBoth.size}</span>
                        </li>
                    </ul>
                </div>
            </div>`;
		}
	}
	#c() {
		return L`
            ${this.#s()}

            <p>Data preview (<code>${this._fileName}</code>):</p>

            <div style="margin-top: var(--gs-basic-spacing, 10px)">
                <gs-data-grid
                    .items=${this._parsedItems}
                    style="height: 240px"
                ></gs-data-grid>
            </div>
        `;
	}
	#l() {
		return L`<gs-metadata-hierarchy-configurator
            .metadataRecords=${this._parsedItems}
            @metadata-config-change=${(e) => {
			this.#t = e.detail;
		}}
        ></gs-metadata-hierarchy-configurator>`;
	}
	renderBody() {
		return this.#n.currentPage.render();
	}
	renderButtons() {
		let e = this.#n.isLastPage ? {
			label: "Finish",
			icon: null
		} : {
			label: "Next",
			icon: Id
		};
		return [
			this.makeCloseButton("Cancel"),
			this.makeButton("Previous", () => this.#n.advance(-1), {
				iconDef: zd,
				disabled: this.#n.isFirstPage
			}),
			this.makeButton(e.label, () => this.#n.advance(1), {
				iconDef: e.icon ?? void 0,
				disabled: !this.#n.canAdvance(),
				isPrimary: !0
			})
		];
	}
	resetWizard() {
		this.#n.reset(), this._parsedItems = null, this._fileName = null;
	}
};
customElements.define("gs-upload-metadata-dialog", RT);
var zT = L`<p>
        This wizard helps you load custom metadata for samples in the current
        visualization.
    </p>

    <p>
        Select a metadata file (CSV, TSV, or JSON). The file must include a
        header row and a <em>sample</em> column that uniquely identifies each
        sample. Additional columns will be added as new metadata fields.
    </p>

    <p>
        After upload, you can preview the rows, configure attribute types and
        scales, and only samples that match existing IDs will be kept.
    </p>`;
function BT(e) {
	return Ug("gs-upload-metadata-dialog", (t) => {
		t.existingSampleIds = new Set(e.sampleHierarchy.sampleData.ids), t.resetWizard();
	}, (t) => {
		if (!t.ok) return !1;
		let n = t.data;
		return e.intentExecutor.dispatch(e.actions.addMetadata(n)), !0;
	});
}
function VT(e, t = 3) {
	let n = Array.from(e), r = (e, t = ", ") => e.map((e, n) => L`${n > 0 ? t : ""}<code>${e}</code>`);
	return n.length === 0 ? "" : n.length <= t ? L` (e.g., ${r(n)})` : L` (e.g., ${r(n.slice(0, t))} and
        ${n.length - t} more)`;
}
function HT(e) {
	return e.cases.length > 0 ? L`${e.message}${VT(e.cases)}` : e.count > 1 ? L`${e.message} (occurred ${e.count} times)` : e.message;
}
//#endregion
//#region ../app/src/components/generic/multiSelect.js
var UT = 0;
function WT(e) {
	return typeof e == "string" ? {
		id: e,
		label: e
	} : {
		id: e.id,
		label: e.label ?? e.id
	};
}
function GT(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = String(r).trim();
		e.length === 0 || t.has(e) || (t.add(e), n.push(e));
	}
	return n;
}
function KT(e) {
	return GT(e.split(/\r?\n/g));
}
var qT = class extends A {
	static properties = {
		selectedValues: { attribute: !1 },
		search: { attribute: !1 },
		commitDelimiters: { attribute: !1 },
		placeholder: { type: String },
		disabled: { type: Boolean },
		allowUnknown: {
			type: Boolean,
			attribute: "allow-unknown"
		},
		debounceMs: {
			type: Number,
			attribute: "debounce-ms"
		},
		maxSuggestions: {
			type: Number,
			attribute: "max-suggestions"
		},
		_query: { state: !0 },
		_loading: { state: !0 },
		_open: { state: !0 },
		_activeIndex: { state: !0 },
		_suggestions: { state: !0 },
		_inputHasFocus: { state: !0 }
	};
	static styles = [Vg, o`
            :host {
                display: block;
            }

            .control {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.2em;
                width: 100%;
                box-sizing: border-box;
                padding: 0.3em 0.5em;
                font-size: 1em;
                line-height: 1.5;
                color: var(--form-control-color);
                background-color: #fff;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                transition:
                    border-color 0.15s ease-in-out,
                    box-shadow 0.15s ease-in-out;
                cursor: text;
            }

            :host(.is-invalid) .control {
                border-color: var(--danger-color, #dc3545);
                box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 0.35em;
                max-width: 100%;
                background: #edf2f7;
                border: 1px solid #d4dce4;
                border-radius: 999px;
                padding: 0.1em 0.55em;
                font-size: 0.93em;
                line-height: 1.4;
            }

            .pill-label {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 18em;
            }

            .pill-remove {
                border: 0;
                background: transparent;
                color: #495057;
                font-size: 1.1em;
                line-height: 1;
                padding: 0;
                margin: 0;
                cursor: pointer;
            }

            .query {
                flex: 1;
                min-width: 8em;
                border: 0;
                outline: 0;
                padding: 0.1em 0.25em;
                margin: 0;
                background: transparent;
                font: inherit;
                color: inherit;
            }

            .query::placeholder {
                color: #a0a0a0;
            }

            .dropdown {
                position: fixed;
                margin: 0;
                inset: auto;
                max-height: 16rem;
                overflow: auto;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                background: #fff;
                box-shadow: 0 6px 16px rgb(0 0 0 / 12%);
                padding: 0.2em 0;
            }

            .option {
                padding: 0.35em 0.75em;
                cursor: pointer;
                background: transparent;
            }

            .option.active {
                background: #eef3ff;
                outline: 2px solid #c6dbff;
                outline-offset: -2px;
            }

            .status {
                padding: 0.35em 0.75em;
                color: #6c757d;
                font-size: 0.92em;
            }

            .control.disabled {
                background-color: #f4f4f4;
                cursor: default;
            }

            .control.disabled .pill-remove,
            .control.disabled .query {
                cursor: default;
            }
        `];
	#e;
	#t;
	#n;
	#r;
	constructor() {
		super(), this.selectedValues = [], this.search = null, this.commitDelimiters = [], this.placeholder = "Type to search", this.disabled = !1, this.allowUnknown = !1, this.debounceMs = 180, this.maxSuggestions = 50, this._query = "", this._loading = !1, this._open = !1, this._activeIndex = -1, this._suggestions = [], this._inputHasFocus = !1, this.#e = "gs-multiselect-listbox-" + String(UT++), this.#t = null, this.#n = 0, this.#r = null;
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#a(), this.#m();
	}
	willUpdate(e) {
		e.has("selectedValues") && (this.selectedValues = GT(Array.from(this.selectedValues, (e) => String(e))), this.#g());
	}
	updated(e) {
		e.has("_open") && this.#h(), e.has("_activeIndex") && this.#d(), this._open && (e.has("_suggestions") || e.has("_loading")) && this.#f();
	}
	get value() {
		return this.selectedValues;
	}
	set value(e) {
		this.selectedValues = GT(e);
	}
	focus() {
		this.#s();
	}
	refreshSuggestions() {
		this.search && (this._inputHasFocus && (this._open = !0), this.#i(this._query));
	}
	#i(e) {
		this.#a();
		let t = () => {
			this.#o(e);
		};
		this.#t = window.setTimeout(t, this.debounceMs);
	}
	#a() {
		this.#t !== null && (window.clearTimeout(this.#t), this.#t = null);
	}
	async #o(e) {
		if (!this.search) {
			this._suggestions = [], this._loading = !1, this._activeIndex = -1, this._open = !1;
			return;
		}
		let t = ++this.#n;
		this._loading = !0, this._open = this._inputHasFocus;
		try {
			let n = await this.search(e);
			if (t !== this.#n || e !== this._query) return;
			let r = new Set(this.selectedValues), i = [];
			for (let e of n) {
				let t = WT(e);
				if (!r.has(t.id) && (i.push(t), i.length >= this.maxSuggestions)) break;
			}
			this._suggestions = i, this._activeIndex = i.length > 0 ? 0 : -1, this._open = this._inputHasFocus;
		} finally {
			t === this.#n && (this._loading = !1);
		}
	}
	#s() {
		this.renderRoot.querySelector("input.query")?.focus();
	}
	#c() {
		return this.renderRoot.querySelector(".control");
	}
	#l() {
		return this.renderRoot.querySelector("#" + this.#e);
	}
	#u(e) {
		return this.#e + "-opt-" + e;
	}
	#d() {
		this._activeIndex < 0 || !this._open || this.renderRoot.querySelector("#" + this.#u(String(this._activeIndex)))?.scrollIntoView({ block: "nearest" });
	}
	#f() {
		let e = this.#c(), t = this.#l();
		if (!e || !t || !this._open) return;
		let n = e.getBoundingClientRect().width;
		t.style.minWidth = String(n) + "px", Ny(e, t, {
			placement: "bottom-start",
			strategy: "fixed",
			middleware: [jy(4), My()]
		}).then(({ x: e, y: n }) => {
			this._open && (t.style.left = String(e) + "px", t.style.top = String(n) + "px");
		});
	}
	#p() {
		let e = this.#c(), t = this.#l();
		!e || !t || (this.#m(), this.#f(), this.#r = Ay(e, t, () => this.#f()));
	}
	#m() {
		this.#r &&= (this.#r(), null);
	}
	#h() {
		let e = this.#l();
		if (!e) return;
		let t = typeof e.showPopover == "function" && typeof e.hidePopover == "function";
		this._open ? (t && !e.matches(":popover-open") && e.showPopover(), this.#p()) : (this.#m(), t && e.matches(":popover-open") && e.hidePopover());
	}
	#g() {
		let e = new Set(this.selectedValues);
		this._suggestions = this._suggestions.filter((t) => !e.has(t.id)), this._suggestions.length === 0 ? this._activeIndex = -1 : this._activeIndex >= this._suggestions.length && (this._activeIndex = this._suggestions.length - 1);
	}
	#_() {
		this.dispatchEvent(new JT(Array.from(this.selectedValues)));
	}
	#v(e) {
		let t = new Set(this.selectedValues), n = [];
		for (let r of e) {
			let e = String(r).trim();
			e.length === 0 || t.has(e) || (t.add(e), n.push(e));
		}
		return n.length === 0 ? !1 : (this.selectedValues = [...this.selectedValues, ...n], this.#_(), !0);
	}
	#y(e) {
		this.#v([e]);
	}
	#b(e) {
		let t = this.selectedValues.filter((t) => t !== e);
		t.length !== this.selectedValues.length && (this.selectedValues = t, this.#_());
	}
	#x() {
		this.selectedValues.length !== 0 && (this.selectedValues = this.selectedValues.slice(0, this.selectedValues.length - 1), this.#_());
	}
	#S(e) {
		let t = e.toLowerCase();
		return this._suggestions.find((e) => e.id.toLowerCase() === t) ?? null;
	}
	#C(e, t) {
		let n = (e + t).toLowerCase();
		return this._suggestions.some((e) => e.id.toLowerCase().startsWith(n));
	}
	#w(e) {
		let t = this._query.trim();
		if (t.length === 0) return !1;
		let n = this.#S(t);
		return !n || this.#C(t, e) ? !1 : (this.#y(n.id), this._query = "", this.#i(""), this.#s(), !0);
	}
	#T() {
		let e = this._activeIndex >= 0 && this._activeIndex < this._suggestions.length ? this._suggestions[this._activeIndex] : null, t = this._query.trim();
		if (e) this.#y(e.id);
		else if (t.length > 0) {
			let e = this.#S(t);
			e ? this.#y(e.id) : this.allowUnknown && this.#y(t);
		}
		this._query = "", this.#i(""), this.#s();
	}
	#E(e) {
		this.disabled || e.target instanceof HTMLElement && e.target.closest(".pill-remove") || (e.preventDefault(), this.#s());
	}
	#D(e) {
		let t = e.currentTarget;
		t && (this._query = t.value, this.#i(this._query), this._open = !0);
	}
	#O() {
		this._inputHasFocus = !0, this._open = !0, this.#i(this._query);
	}
	#k() {
		this._inputHasFocus = !1, this._open = !1, this._activeIndex = -1, this.#A();
	}
	async #A() {
		let e = this._query.trim();
		if (e.length === 0) return;
		let t = e.toLowerCase(), n = this._suggestions.find((e) => e.id.toLowerCase() === t) ?? null;
		if (!n && this.search) try {
			n = (await this.search(e)).map((e) => WT(e)).find((e) => e.id.toLowerCase() === t) ?? null;
		} catch {
			return;
		}
		n && (this.#y(n.id), this._query = "", this.#i(""));
	}
	#j(e) {
		let t = e.clipboardData?.getData("text/plain") ?? "";
		if (!t.includes("\n")) return;
		let n = KT(t);
		n.length !== 0 && (e.preventDefault(), this.#v(n), this._query = "", this._open = !1, this._activeIndex = -1, this.#i(""), this.#s());
	}
	#M(e) {
		if (!this.disabled) {
			if (this.commitDelimiters.includes(e.key)) {
				this.#w(e.key) && (e.preventDefault(), e.stopPropagation());
				return;
			}
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (e.preventDefault(), e.stopPropagation(), this._suggestions.length === 0) return;
				if (this._activeIndex < 0) {
					this._activeIndex = 0;
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1, n = Math.max(0, Math.min(this._suggestions.length - 1, this._activeIndex + t));
				this._activeIndex = n;
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault(), e.stopPropagation(), this.#T();
				return;
			}
			if (e.key === "Backspace" && this._query.length === 0) {
				e.stopPropagation(), this.#x();
				return;
			}
			if (e.key === "Tab") {
				this._open = !1, this._activeIndex = -1;
				return;
			}
			if (e.key === "Escape") {
				if (!this._open) return;
				e.preventDefault(), e.stopPropagation(), this._open = !1, this._activeIndex = -1;
			}
		}
	}
	#N(e) {
		let t = this._suggestions[e];
		t && (this.#y(t.id), this._query = "", this.#i(""), this._activeIndex = 0, this.#s());
	}
	render() {
		let e = this._activeIndex >= 0 ? this.#u(String(this._activeIndex)) : I;
		return L`
            <div
                class="control ${this.disabled ? "disabled" : ""}"
                @mousedown=${(e) => this.#E(e)}
            >
                ${this.selectedValues.map((e) => L`<span class="pill">
                            <span class="pill-label">${e}</span>
                            <button
                                class="pill-remove"
                                type="button"
                                aria-label=${"Remove " + e}
                                ?disabled=${this.disabled}
                                @click=${() => {
			this.#b(e), this.#s();
		}}
                            >
                                ×
                            </button>
                        </span>`)}

                <input
                    class="query"
                    type="text"
                    role="combobox"
                    aria-controls=${this.#e}
                    aria-expanded=${this._open ? "true" : "false"}
                    aria-autocomplete="list"
                    aria-activedescendant=${e}
                    placeholder=${this.placeholder}
                    .value=${this._query}
                    ?disabled=${this.disabled}
                    @focus=${() => this.#O()}
                    @blur=${() => this.#k()}
                    @paste=${(e) => this.#j(e)}
                    @input=${(e) => this.#D(e)}
                    @keydown=${(e) => this.#M(e)}
                />
            </div>

            <div
                id=${this.#e}
                class="dropdown"
                popover="auto"
                ?hidden=${!this._open}
                role="listbox"
                @toggle=${(e) => {
			e.newState === "closed" && this._open && (this._open = !1, this._activeIndex = -1);
		}}
            >
                ${this._loading ? L`<div class="status">Loading...</div>` : I}
                ${!this._loading && this._suggestions.length === 0 ? L`<div class="status">No matches</div>` : I}
                ${this._suggestions.map((e, t) => L`<div
                            id=${this.#u(String(t))}
                            class="option ${t === this._activeIndex ? "active" : ""}"
                            role="option"
                            aria-selected=${t === this._activeIndex ? "true" : "false"}
                            @mousedown=${(e) => e.preventDefault()}
                            @mouseenter=${() => {
			this._activeIndex = t;
		}}
                            @click=${() => this.#N(t)}
                        >
                            ${e.label ?? e.id}
                        </div>`)}
            </div>
        `;
	}
};
customElements.define("gs-multi-select", qT);
var JT = class extends Event {
	values;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.values = e;
	}
};
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceImportUtils.js
function YT(e) {
	let t = [];
	for (let n of e.split(/\r?\n/g)) {
		let e = n.trim();
		e && (t.includes(e) || t.push(e));
	}
	return t;
}
function XT({ queries: e, resolved: t }) {
	let n = t.ambiguous ?? [], r = t.columnIds.length > 100, i = t.columnIds.length > 0;
	return {
		queries: e,
		resolved: t,
		warnings: {
			missing: t.missing,
			ambiguous: n
		},
		blocking: {
			emptyInput: e.length === 0,
			noResolvableColumns: !i,
			overLimit: r
		}
	};
}
//#endregion
//#region ../app/src/utils/objectSearchIndex.js
var ZT = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = t, this.#t = [], this.replace(e);
	}
	replace(e) {
		this.#t = e.map((e, t) => {
			let n = String(this.#e(e));
			return {
				item: e,
				key: n,
				normalizedKey: n.toLowerCase(),
				insertionOrder: t
			};
		}).sort((e, t) => {
			let n = e.normalizedKey.localeCompare(t.normalizedKey);
			if (n !== 0) return n;
			let r = e.key.localeCompare(t.key);
			return r === 0 ? e.insertionOrder - t.insertionOrder : r;
		});
	}
	*searchByPrefix(e) {
		let t = this.#t;
		if (t.length === 0) return;
		let n = String(e).toLowerCase(), r = n.length === 0 ? 0 : this.#n(t, n);
		for (let e = r; e < t.length; e++) {
			let r = t[e];
			if (n.length > 0 && !r.normalizedKey.startsWith(n)) break;
			yield r.item;
		}
	}
	#n(e, t) {
		let n = 0, r = e.length;
		for (; n < r;) {
			let i = n + (r - n >> 1);
			e[i].normalizedKey.localeCompare(t) < 0 ? n = i + 1 : r = i;
		}
		return n;
	}
}, QT = "Type to search or paste one id per line", $T = 100, eE = [",", " "];
function tE(e, t) {
	if ("error" in e) {
		let t = e.error[0], n = typeof t?.message == "string" ? t.message : "Invalid sample ids in metadata source.";
		return {
			severity: "error",
			summary: "Sample-id alignment check failed: " + String(n)
		};
	}
	let n = e.statistics, r = n.unknownSamples.size, i = n.notCoveredSamples.size;
	if (n.samplesInBoth.size === 0) return {
		severity: "error",
		summary: "No matching sample IDs. Import cannot continue.",
		details: (r > 0 ? " source-only IDs: " + String(r) + t(n.unknownSamples) : "").trim()
	};
	if (r > 0 || i > 0) {
		let e = [];
		return r > 0 && e.push(String(r) + " source sample IDs are not in the loaded sample set" + t(n.unknownSamples)), i > 0 && e.push(String(i) + " loaded sample-set IDs are not in the source" + t(n.notCoveredSamples)), {
			severity: "warning",
			summary: "Some sample IDs do not match. Import can continue: values will be added only to matched samples.",
			details: e.join("; ")
		};
	}
	return null;
}
var nE = class extends q {
	static properties = {
		...super.properties,
		sampleView: {},
		intentPipeline: {},
		source: {},
		columnInput: { state: !0 },
		groupPath: { state: !0 },
		_loading: { state: !0 },
		_error: { state: !0 },
		_preview: { state: !0 },
		_columnPlaceholder: { state: !0 },
		_availableColumnCount: { state: !0 },
		_alignmentIssue: { state: !0 },
		_showAlignmentDetails: { state: !0 }
	};
	static styles = [...super.styles, o`
            dialog {
                width: min(680px, calc(100vw - 2rem));
            }

            .stack {
                display: block;
            }

            .stack > .gs-form-group {
                margin-top: 0;
                margin-bottom: 0;
            }

            .stack > .gs-form-group + .gs-form-group {
                margin-top: var(--gs-basic-spacing, 10px);
            }

            .inline-link {
                appearance: none;
                background: none;
                border: 0;
                color: inherit;
                cursor: pointer;
                font: inherit;
                padding: 0;
                text-decoration: underline;
            }
        `];
	constructor() {
		super(), this.sampleView = null, this.intentPipeline = null, this.source = null, this.columnInput = "", this.groupPath = "", this._loading = !1, this._error = "", this._preview = null, this._columnPlaceholder = QT, this._availableColumnCount = void 0, this._columnSearchIndex = new ZT([], (e) => e.id), this._previewVersion = 0, this._sourceContextVersion = 0, this._previewQueryKey = "", this._alignmentIssue = null, this._showAlignmentDetails = !1, this._columnValidationEnabled = !1, this._adapter = null, this._form = new hb(this), this._form.defineField("columns", {
			valueKey: "columnInput",
			validate: () => this.#m()
		}), this._form.defineField("group", {
			valueKey: "groupPath",
			validate: () => null
		}), this.dialogTitle = "Import metadata from source";
	}
	willUpdate(e) {
		!this.sampleView || !this.source || (e.has("sampleView") || e.has("source")) && this.#e();
	}
	renderBody() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		let e = this._preview?.readiness?.blocking, t = this._alignmentIssue, n = typeof this._availableColumnCount == "number" ? "Columns to import (" + String(this._availableColumnCount) + " available)" : "Columns to import";
		return L`
            <div class="stack">
                <div class="gs-alert info">
                    ${K(rf).node[0]}
                    <div>
                        Import one or more metadata columns by searching,
                        selecting, or pasting column ids.
                    </div>
                </div>

                ${t ? L`<div
                          class="gs-alert ${t.severity === "error" ? "danger" : t.severity}"
                      >
                          ${K(t.severity === "info" ? rf : t.severity === "warning" ? Bd : Df).node[0]}
                          <span>
                              ${t.summary}${t.details ? this._showAlignmentDetails ? L` ${t.details}` : L` <button
                                            class="inline-link"
                                            type="button"
                                            @click=${(e) => this.#d(e)}
                                        >
                                            Show the problems
                                        </button>` : I}
                          </span>
                      </div>` : I}
                ${this._error ? L`<div class="gs-alert danger">
                          ${K(Df).node[0]}
                          <span>${this._error}</span>
                      </div>` : I}

                <div class="gs-form-group">
                    <div class="label">${n}</div>
                    <gs-multi-select
                        id="columnInput"
                        autofocus
                        class=${this._form.error("columns") ? "is-invalid" : ""}
                        .debounceMs=${50}
                        .selectedValues=${YT(this.columnInput)}
                        .placeholder=${this._columnPlaceholder}
                        .search=${(e) => this.#o(e)}
                        .allowUnknown=${!0}
                        .commitDelimiters=${eE}
                        .maxSuggestions=${$T}
                        aria-invalid=${this._form.error("columns") ? "true" : "false"}
                        @focusin=${() => this.#n()}
                        @change=${(e) => this.#r(e)}
                    ></gs-multi-select>
                    ${this._form.feedback("columns")}
                </div>

                <div class="gs-form-group">
                    <label for="groupPath">Group path (optional)</label>
                    <input
                        id="groupPath"
                        type="text"
                        ${gb(this._form, "group")}
                    />
                </div>

                ${e?.overLimit ? L`<div class="gs-alert danger">
                          Import exceeds the hard limit of 100 columns.
                      </div>` : I}
            </div>
        `;
	}
	renderButtons() {
		let e = this.#f();
		return [this.makeCloseButton("Cancel"), this.makeButton("Import", () => this.#p(), {
			iconDef: Kd,
			isPrimary: !0,
			disabled: !e
		})];
	}
	async #e() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		this._previewVersion++, this._adapter = null, this._error = "", this._preview = null, this._alignmentIssue = null, this._showAlignmentDetails = !1, this._columnValidationEnabled = !1, this._columnSearchIndex.replace([]);
		let e = this.source.name ?? this.source.id ?? "source";
		this.dialogTitle = L`Import metadata from
            <em>${e}</em> source`, this.groupPath = this.source.groupPath ?? "", this.#c(), this.#s();
	}
	#t() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		return this._adapter ||= Ed(this.sampleView).getAdapter(this.source), this._adapter;
	}
	#n() {
		this._columnValidationEnabled = !0;
	}
	#r(e) {
		let t = e;
		this.#i(t.values);
	}
	#i(e) {
		let t = YT(e.join("\n"));
		this.columnInput = t.join("\n"), this.#s();
	}
	#a() {
		(this._columnValidationEnabled || this._form.error("columns")) && this._form.revalidate("columns");
	}
	async #o(e) {
		let t = e.trim();
		return Array.from(this._columnSearchIndex.searchByPrefix(t), (e) => e.id);
	}
	async #s() {
		if (!this.sampleView || !this.source) return;
		let e = ++this._previewVersion, t = YT(this.columnInput), n = this.#g(t);
		if (t.length === 0) {
			let e = XT({
				queries: t,
				resolved: {
					columnIds: [],
					missing: [],
					ambiguous: []
				}
			});
			this._preview = { readiness: e }, this._previewQueryKey = n, this._error = "", this.#a();
			return;
		}
		let r = this.#t();
		try {
			let i = await r.resolveColumns(t);
			if (e !== this._previewVersion) return;
			let a = XT({
				queries: t,
				resolved: i
			});
			this._preview = { readiness: a }, this._previewQueryKey = n, this._error = "", this.#a();
		} catch (t) {
			if (e !== this._previewVersion) return;
			this._error = String(t), this._preview = null, this._previewQueryKey = "", this.#a();
		}
	}
	#c() {
		if (!this.sampleView || !this.source) return;
		let e = ++this._sourceContextVersion, t = this.#t();
		t.listColumns().then((t) => {
			e === this._sourceContextVersion && this.#l(t);
		}).catch(() => {
			e === this._sourceContextVersion && (this._columnPlaceholder = QT, this._availableColumnCount = void 0, this._columnSearchIndex.replace([]));
		}), t.listSampleIds().then((t) => {
			e === this._sourceContextVersion && (this.#u(t), this._showAlignmentDetails = !1);
		}).catch((t) => {
			e === this._sourceContextVersion && (this._alignmentIssue = {
				severity: "error",
				summary: "Could not validate sample-id alignment: " + String(t)
			}, this._showAlignmentDetails = !1);
		});
	}
	#l(e) {
		this._columnSearchIndex.replace(e), this._availableColumnCount = e.length, this._columnPlaceholder = QT, this.updateComplete.then(() => {
			this.renderRoot.querySelector("#columnInput")?.refreshSuggestions();
		});
	}
	#u(e) {
		if (!this.sampleView) return;
		let t = this.sampleView.sampleHierarchy.sampleData?.ids;
		if (!t) {
			this._alignmentIssue = {
				severity: "error",
				summary: "Could not validate sample-id alignment: Sample data has not been initialized."
			};
			return;
		}
		let n = ll(t, e.map((e) => ({ sample: e })));
		this._alignmentIssue = tE(n, (e) => this.#v(e));
	}
	#d(e) {
		e.preventDefault(), this._showAlignmentDetails = !0;
	}
	#f() {
		if (this._loading || this._form.hasErrors() || this._alignmentIssue?.severity === "error") return !1;
		let e = YT(this.columnInput);
		if (e.length === 0 || !this.source) return !1;
		if (this.#h(e) && this._preview) {
			let e = this._preview.readiness.blocking;
			if (e.noResolvableColumns || e.overLimit) return !1;
		}
		return !0;
	}
	async #p() {
		if (!this.sampleView || !this.intentPipeline) throw Error("Import metadata dialog requires SampleView and IntentPipeline.");
		if (this._columnValidationEnabled = !0, await this.#s(), this._form.validateAll() || !this.#f() || !this.source) return !0;
		this._loading = !0, this._error = "";
		try {
			let e = { columnIds: this._preview.readiness.resolved.columnIds };
			return this.source.id && (e.sourceId = this.source.id), e.groupPath = this.groupPath.trim(), await this.intentPipeline.submit(this.sampleView.actions.addMetadataFromSource(e)), this.finish({ ok: !0 }), !1;
		} catch (e) {
			return this._error = String(e), this._loading = !1, !0;
		}
	}
	#m() {
		let e = YT(this.columnInput);
		if (e.length === 0) return this._columnValidationEnabled ? "Enter at least one column id." : null;
		let t = this._preview?.readiness;
		if (!t || !this.#h(e)) return null;
		let n = t.blocking;
		if (n.overLimit) return "Import exceeds the hard limit of 100 columns.";
		if (n.noResolvableColumns) return "No matching columns were found.";
		let r = [...t.warnings.missing, ...t.warnings.ambiguous];
		return r.length > 0 ? "Columns not found: " + this.#_(r) + ". Fix the list before importing." : null;
	}
	#h(e) {
		return this._previewQueryKey === this.#g(e);
	}
	#g(e) {
		return e.join("\n");
	}
	#_(e) {
		let t = Array.from(new Set(e));
		return t.length <= 8 ? t.join(", ") : t.slice(0, 8).join(", ") + " and " + String(t.length - 8) + " more";
	}
	#v(e, t = 3) {
		let n = Array.from(e);
		return n.length === 0 ? "" : n.length <= t ? " (e.g. " + n.join(", ") + ")" : " (e.g. " + n.slice(0, t).join(", ") + " and " + String(n.length - t) + " more)";
	}
};
customElements.define("gs-import-metadata-source-dialog", nE);
function rE(e, t, n) {
	if (!n) throw Error("Import metadata dialog requires a metadata source.");
	return J("gs-import-metadata-source-dialog", (r) => {
		r.sampleView = e, r.intentPipeline = t, r.source = n, r._columnValidationEnabled = !1, r._form.reset();
	});
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceMenu.js
var iE = class {
	async createImportMenuItem(e, t) {
		if (!e || !t) return;
		let n;
		try {
			n = await this.#e(e);
		} catch (e) {
			Y("Could not load metadata sources: " + String(e), {
				title: "Warning",
				type: "warning"
			});
			return;
		}
		if (n.length !== 0) if (n.length === 1) {
			let r = n[0];
			return {
				label: L`Import metadata from
                    <em>${r.label}</em> source`,
				icon: Tf,
				callback: () => rE(e, t, r.source)
			};
		} else return {
			label: "Import metadata from source",
			icon: Tf,
			submenu: n.map((n) => ({
				label: n.label,
				callback: () => {
					if (!n.source.id) {
						Y("Metadata source \"" + n.label + "\" is missing \"id\". Source ids are required when multiple metadata sources are configured.", {
							title: "Warning",
							type: "warning"
						});
						return;
					}
					rE(e, t, n.source);
				}
			}))
		};
	}
	async #e(e) {
		return (await Ed(e).getSources()).filter((e) => !(e.backend.backend === "data" && hd(e) === "*")).map((e, t) => ({
			source: e,
			label: e.name ?? e.id ?? "Source " + String(t + 1)
		}));
	}
}, aE = class extends A {
	#e;
	#t;
	#n = null;
	#r = tn();
	#i = new iE();
	constructor() {
		super(), this.subscriptionController = new bT(this), this.style.display = "none";
	}
	connectedCallback() {
		super.connectedCallback(), this.dispatchEvent(kT("app", (e) => {
			this.#e = e;
		})), this.subscriptionController.addUnsubscribeCallback(Vx(this.#e.store, (e) => e.lifecycle.appInitialized, (e) => this.#a(e))), this.subscriptionController.addUnsubscribeCallback(Vx(this.#e.store, (e) => e.viewSettings, () => this.requestUpdate()));
	}
	createRenderRoot() {
		return this;
	}
	#a(e) {
		e && (this.#u(), this.requestUpdate(), this.style.display = this.#t ? "block" : "none");
	}
	#o(e, t) {
		let n = e.target.checked, r = Zi(t);
		if (!r) throw Error("Cannot toggle view visibility without an explicit name.");
		n == t.isVisibleInSpec() ? (this.#e.store.dispatch(Wi.actions.restoreDefaultVisibility(r)), t.explicitName && t.explicitName !== r && this.#e.store.dispatch(Wi.actions.restoreDefaultVisibility(t.explicitName))) : this.#e.store.dispatch(Wi.actions.setVisibility({
			key: r,
			visibility: n
		})), this.#c(), this.requestUpdate(), this.#f(), e.stopPropagation();
	}
	#s(e, t, n) {
		if (!e.target.checked) {
			e.stopPropagation();
			return;
		}
		let r = Zi(t);
		if (!r) throw Error("Cannot toggle view visibility without an explicit name.");
		for (let e of n) this.#e.store.dispatch(Wi.actions.setVisibility({
			key: e,
			visibility: e === r
		}));
		this.#c(), this.requestUpdate(), this.#f(), e.stopPropagation();
	}
	#c() {
		this.#n = null, this.#e.genomeSpy.viewRoot.context.highlightView(null);
	}
	#l() {
		this.#e.store.dispatch(Wi.actions.restoreDefaultVisibilities()), this.#f();
	}
	#u() {
		let e = this.#e.genomeSpy.viewRoot;
		if (!e) return;
		let t = [];
		Kt(e, (e) => {
			t.push(e);
		});
		let n = t.filter(sE).map((t) => [...t.getDataAncestors()].filter((t) => t === e || sE(t)).reverse());
		if (!n.length) {
			this.#t = void 0;
			return;
		}
		this.#t = AT(n);
	}
	#d() {
		let e = this.#e.genomeSpy.viewRoot, t = this.getVisibilities(), n = e ? ia(e, t) : t, r = e ? na(e) : /* @__PURE__ */ new Set(), i = e ? ra(e) : /* @__PURE__ */ new Map(), a = [], o = (e, t = -1) => {
			let s = e.item, c = Qi(n, s), l = c === void 0 ? s.isVisibleInSpec() : c, u = Zi(s), d = u && i.has(u) ? i.get(u) : void 0, f = !!(d && d.memberKeys.length > 1), p = [];
			oE(s) && p.push({
				label: "Parameters",
				type: "header"
			}, { type: "divider" }, { customContent: L`<div class="gs-input-binding">
                            ${y(s.paramRuntime)}
                        </div>` }), s instanceof Xx && (p.length && p.push({ type: "divider" }), p.push({
				label: "Sample metadata",
				type: "header"
			}, { type: "divider" }, {
				label: "Upload custom metadata",
				icon: Gd,
				callback: () => this.#h()
			}));
			let m;
			if (s instanceof Xx) {
				let e = p.slice();
				m = async () => {
					let t = await this.#i.createImportMenuItem(this.#e.getSampleView(), this.#e.intentPipeline);
					return t ? [...e, t] : e;
				};
			} else p.length && (m = () => p);
			if (t >= 0) {
				let n = s.getTitleText() ?? s.name ?? "", i = !l && e.children.length > 0 ? n + "..." : n, o = L` <label
                    class="checkbox"
                    @mouseover=${(e) => this.#m(e, s)}
                    @mouseout=${(e) => this.#m(e, s)}
                >
                    <input
                        style=${`margin-left: ${t * 1.5}em;`}
                        type=${f ? "radio" : "checkbox"}
                        ?disabled=${!u || !r.has(u) || !qi(s)}
                        .checked=${OT(l)}
                        @change=${(e) => f ? this.#s(e, s, d.memberKeys) : this.#o(e, s)}
                    />${i}
                </label>`;
				a.push({
					customContent: m ? o : L`<li>${o}</li>`,
					submenu: m
				});
			}
			if (l) {
				t++;
				for (let n of e.children) o(n, t);
			}
		};
		if (!this.#t) return a;
		let s = this.#t.children.length ? -1 : 0;
		return o(this.#t, s), a;
	}
	#f() {
		this.#u();
		let e = this.#d();
		Zy({ items: [
			{
				label: "View visibility",
				type: "header"
			},
			{
				label: "Restore defaults",
				callback: Object.keys(this.getVisibilities()).length ? () => this.#l() : void 0
			},
			{ type: "divider" },
			...e
		] }, this.#r.value, "bottom-start");
	}
	#p() {
		this.#f();
	}
	render() {
		return L`
            <div class="dropdown bookmark-dropdown">
                <button
                    ${Zt(this.#r)}
                    class="tool-btn"
                    title="Toggle view visibilities"
                    @click=${this.#p.bind(this)}
                >
                    ${K(sf).node[0]}
                </button>
            </div>
        `;
	}
	getVisibilities() {
		return this.#e.store.getState().viewSettings.visibilities;
	}
	#m(e, t) {
		e.type == "mouseover" ? (this.#n = t, this.#e.genomeSpy.viewRoot.context.highlightView(t)) : (this.#n === t && (this.#n = null), this.#e.genomeSpy.viewRoot.context.highlightView(null));
	}
	#h() {
		let e = this.#e.getSampleView();
		if (e) BT(e);
		else throw Error("Cannot upload metadata without SampleView");
	}
}, oE = (e) => [...e.paramRuntime.paramConfigs.values()].some((e) => tt(e) && e.bind), sE = (e) => qi(e) && !!e.explicitName || oE(e) || e instanceof Xx;
customElements.define("genome-spy-view-visibility", aE);
//#endregion
//#region ../app/src/utils/ui/dropdown.js
var cE = /* @__PURE__ */ new Set();
function lE(e) {
	let t = e.currentTarget.parentNode, n = !t.classList.contains("show");
	for (let e of cE) e.classList.remove("show"), document.body.classList.remove(de), document.body.classList.remove(Te);
	return cE.clear(), e.stopPropagation(), n ? (cE.add(t), t.classList.add("show"), document.body.classList.add(de), document.body.classList.add(Te), window.addEventListener("click", (e) => {
		t.classList.contains("show") && (t.classList.remove("show"), document.body.classList.remove(de), document.body.classList.remove(Te), e.preventDefault());
	}, { once: !0 })) : window.dispatchEvent(new MouseEvent("click")), n;
}
//#endregion
//#region ../app/src/components/toolbar/provenanceToolbar.js
var uE = class extends A {
	constructor() {
		super(), this.provenance = void 0, this._subscriptions = new bT(this);
	}
	connectedCallback() {
		super.connectedCallback();
		let e = this.provenance.store.subscribe(() => {
			this.requestUpdate();
		});
		this._subscriptions.addUnsubscribeCallback(e);
	}
	createRenderRoot() {
		return this;
	}
	render() {
		return L`
            <div
                class="btn-group"
                @click=${(e) => e.stopPropagation()}
            >
                <button
                    class="tool-btn"
                    title="Undo (Z)"
                    ?disabled=${!this.provenance.isUndoable()}
                    @click=${() => this.provenance.undo()}
                >
                    ${K(af).node[0]}
                </button>
                ${L`
            <div class="dropdown provenance-dropdown">
                <button
                    class="tool-btn"
                    title="Provenance"
                    ?disabled=${this.provenance.isEmpty()}
                    @click=${lE}
                >
                    ${K(pf).node[0]}
                </button>
                <ol class="gs-dropdown-menu provenance-menu">
                    ${this.provenance.getFullActionHistory().map((e, t) => {
			if (!e) return I;
			let n = hS(e), r = n ? void 0 : this.provenance.getActionInfo(e);
			if (!n && !r) return I;
			let i = n ? L`${K(Cf).node[0]} Initial state` : L` ${K(r.icon ?? Xd).node[0]}
                  ${r.provenanceTitle ?? r.title}`;
			return L`
                <li>
                    <a
                        @click=${() => this.provenance.activateState(e.provenanceId)}
                        class=${t == this.provenance.getCurrentIndex() ? "active-state" : ""}
                        >${i}</a
                    >
                </li>
            `;
		})}
                </ol>
            </div>
        `}
                <button
                    class="tool-btn"
                    title="Redo"
                    ?disabled=${!this.provenance.isRedoable()}
                    @click=${() => this.provenance.redo()}
                >
                    ${K(tf).node[0]}
                </button>
            </div>
        `;
	}
};
customElements.define("genome-spy-provenance-buttons", uE);
//#endregion
//#region ../../node_modules/lit-html/directives/private-async-helpers.js
var dE = class {
	constructor(e) {
		this.G = e;
	}
	disconnect() {
		this.G = void 0;
	}
	reconnect(e) {
		this.G = e;
	}
	deref() {
		return this.G;
	}
}, fE = class {
	constructor() {
		this.Y = void 0, this.Z = void 0;
	}
	get() {
		return this.Y;
	}
	pause() {
		this.Y ??= new Promise((e) => this.Z = e);
	}
	resume() {
		this.Z?.(), this.Y = this.Z = void 0;
	}
}, pE = (e) => !Qt(e) && typeof e.then == "function", mE = 1073741823, hE = re(class extends $t {
	constructor() {
		super(...arguments), this._$Cwt = mE, this._$Cbt = [], this._$CK = new dE(this), this._$CX = new fE();
	}
	render(...e) {
		return e.find((e) => !pE(e)) ?? N;
	}
	update(e, t) {
		let n = this._$Cbt, r = n.length;
		this._$Cbt = t;
		let i = this._$CK, a = this._$CX;
		this.isConnected || this.disconnected();
		for (let e = 0; e < t.length && !(e > this._$Cwt); e++) {
			let o = t[e];
			if (!pE(o)) return this._$Cwt = e, o;
			e < r && o === n[e] || (this._$Cwt = mE, r = 0, Promise.resolve(o).then(async (e) => {
				for (; a.get();) await a.get();
				let t = i.deref();
				if (t !== void 0) {
					let n = t._$Cbt.indexOf(o);
					n > -1 && n < t._$Cwt && (t._$Cwt = n, t.setValue(e));
				}
			}));
		}
		return N;
	}
	disconnected() {
		this._$CK.disconnect(), this._$CX.pause();
	}
	reconnected() {
		this._$CK.reconnect(this), this._$CX.resume();
	}
}), gE = document.createElement("i");
function _E(e) {
	let t = "&" + e + ";";
	gE.innerHTML = t;
	let n = gE.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region ../../node_modules/micromark-util-chunked/index.js
function vE(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function X(e, t) {
	return e.length > 0 ? (vE(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/micromark-util-combine-extensions/index.js
var yE = {}.hasOwnProperty;
function bE(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) xE(t, e[n]);
	return t;
}
function xE(e, t) {
	let n;
	for (n in t) {
		let r = (yE.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			yE.call(r, a) || (r[a] = []);
			let e = i[a];
			SE(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function SE(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	vE(e, 0, 0, r);
}
function CE(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) wE(t, e[n]);
	return t;
}
function wE(e, t) {
	let n;
	for (n in t) {
		let r = (yE.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) r[a] = i[a];
	}
}
//#endregion
//#region ../../node_modules/micromark-util-decode-numeric-character-reference/index.js
function TE(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/micromark-util-encode/index.js
var EE = {
	"\"": "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};
function DE(e) {
	return e.replace(/["&<>]/g, t);
	function t(e) {
		return "&" + EE[e] + ";";
	}
}
//#endregion
//#region ../../node_modules/micromark-util-normalize-identifier/index.js
function OE(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/micromark-util-character/index.js
var kE = zE(/[A-Za-z]/), AE = zE(/[\dA-Za-z]/), jE = zE(/[#-'*+\--9=?A-Z^-~]/);
function ME(e) {
	return e !== null && (e < 32 || e === 127);
}
var NE = zE(/\d/), PE = zE(/[\dA-Fa-f]/), FE = zE(/[!-/:-@[-`{-~]/);
function Z(e) {
	return e !== null && e < -2;
}
function IE(e) {
	return e !== null && (e < 0 || e === 32);
}
function Q(e) {
	return e === -2 || e === -1 || e === 32;
}
var LE = zE(/\p{P}|\p{S}/u), RE = zE(/\s/);
function zE(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-sanitize-uri/index.js
function BE(e, t) {
	let n = DE(VE(e || ""));
	if (!t) return n;
	let r = n.indexOf(":"), i = n.indexOf("?"), a = n.indexOf("#"), o = n.indexOf("/");
	return r < 0 || o > -1 && r > o || i > -1 && r > i || a > -1 && r > a || t.test(n.slice(0, r)) ? n : "";
}
function VE(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && AE(e.charCodeAt(n + 1)) && AE(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/micromark/lib/compile.js
var HE = {}.hasOwnProperty, UE = /^(https?|ircs?|mailto|xmpp)$/i, WE = /^https?$/i;
function GE(e) {
	let t = e || {}, n = !0, r = {}, i = [[]], a = [], o = [], s = CE([{
		enter: {
			blockQuote: A,
			codeFenced: N,
			codeFencedFenceInfo: h,
			codeFencedFenceMeta: h,
			codeIndented: te,
			codeText: Pe,
			content: ye,
			definition: pe,
			definitionDestinationString: he,
			definitionLabelString: h,
			definitionTitleString: h,
			emphasis: I,
			htmlFlow: Ae,
			htmlText: Me,
			image: re,
			label: h,
			link: ie,
			listItemMarker: E,
			listItemValue: T,
			listOrdered: C,
			listUnordered: w,
			paragraph: j,
			reference: h,
			resource: ce,
			resourceDestinationString: le,
			resourceTitleString: h,
			setextHeading: xe,
			strong: Ne
		},
		exit: {
			atxHeading: Ce,
			atxHeadingSequence: be,
			autolinkEmail: Ve,
			autolinkProtocol: Be,
			blockQuote: ee,
			characterEscapeValue: Ee,
			characterReferenceMarkerHexadecimal: Re,
			characterReferenceMarkerNumeric: Re,
			characterReferenceValue: ze,
			codeFenced: ne,
			codeFencedFence: F,
			codeFencedFenceInfo: P,
			codeFencedFenceMeta: S,
			codeFlowValue: Oe,
			codeIndented: ne,
			codeText: Fe,
			codeTextData: Ee,
			data: Ee,
			definition: ve,
			definitionDestinationString: ge,
			definitionLabelString: me,
			definitionTitleString: _e,
			emphasis: L,
			hardBreakEscape: ke,
			hardBreakTrailing: ke,
			htmlFlow: je,
			htmlFlowData: Ee,
			htmlText: je,
			htmlTextData: Ee,
			image: fe,
			label: oe,
			labelText: ae,
			lineEnding: De,
			link: fe,
			listOrdered: D,
			listUnordered: O,
			paragraph: M,
			reference: S,
			referenceString: se,
			resource: S,
			resourceDestinationString: ue,
			resourceTitleString: de,
			setextHeading: Te,
			setextHeadingLineSequence: we,
			setextHeadingText: Se,
			strong: Ie,
			thematicBreak: Le
		}
	}, ...t.htmlExtensions || []]), c = {
		definitions: r,
		tightStack: o
	}, l = {
		buffer: h,
		encode: x,
		getData: m,
		lineEndingIfNeeded: b,
		options: t,
		raw: v,
		resume: g,
		setData: p,
		tag: _
	}, u = t.defaultLineEnding;
	return d;
	function d(e) {
		let t = -1, n = 0, r = [], a = [], o = [];
		for (; ++t < e.length;) !u && (e[t][1].type === "lineEnding" || e[t][1].type === "lineEndingBlank") && (u = e[t][2].sliceSerialize(e[t][1])), (e[t][1].type === "listOrdered" || e[t][1].type === "listUnordered") && (e[t][0] === "enter" ? r.push(t) : f(e.slice(r.pop(), t))), e[t][1].type === "definition" && (e[t][0] === "enter" ? (o = X(o, e.slice(n, t)), n = t) : (a = X(a, e.slice(n, t + 1)), n = t + 1));
		a = X(a, o), a = X(a, e.slice(n)), t = -1;
		let c = a;
		for (s.enter.null && s.enter.null.call(l); ++t < e.length;) {
			let e = s[c[t][0]], n = c[t][1].type, r = e[n];
			HE.call(e, n) && r && r.call({
				sliceSerialize: c[t][2].sliceSerialize,
				...l
			}, c[t][1]);
		}
		return s.exit.null && s.exit.null.call(l), i[0].join("");
	}
	function f(e) {
		let t = e.length, n = 0, r = 0, i = !1, a;
		for (; ++n < t;) {
			let t = e[n];
			if (t[1]._container) a = void 0, t[0] === "enter" ? r++ : r--;
			else switch (t[1].type) {
				case "listItemPrefix":
					t[0] === "exit" && (a = !0);
					break;
				case "linePrefix": break;
				case "lineEndingBlank":
					t[0] === "enter" && !r && (a ? a = void 0 : i = !0);
					break;
				default: a = void 0;
			}
		}
		e[0][1]._loose = i;
	}
	function p(e, t) {
		c[e] = t;
	}
	function m(e) {
		return c[e];
	}
	function h() {
		i.push([]);
	}
	function g() {
		return i.pop().join("");
	}
	function _(e) {
		n && (p("lastWasTag", !0), i[i.length - 1].push(e));
	}
	function v(e) {
		p("lastWasTag"), i[i.length - 1].push(e);
	}
	function y() {
		v(u || "\n");
	}
	function b() {
		let e = i[i.length - 1], t = e[e.length - 1], n = t ? t.charCodeAt(t.length - 1) : null;
		n === 10 || n === 13 || n === null || y();
	}
	function x(e) {
		return m("ignoreEncode") ? e : DE(e);
	}
	function S() {
		g();
	}
	function C(e) {
		o.push(!e._loose), b(), _("<ol"), p("expectFirstItem", !0);
	}
	function w(e) {
		o.push(!e._loose), b(), _("<ul"), p("expectFirstItem", !0);
	}
	function T(e) {
		if (m("expectFirstItem")) {
			let t = Number.parseInt(this.sliceSerialize(e), 10);
			t !== 1 && _(" start=\"" + x(String(t)) + "\"");
		}
	}
	function E() {
		m("expectFirstItem") ? _(">") : k(), b(), _("<li>"), p("expectFirstItem"), p("lastWasTag");
	}
	function D() {
		k(), o.pop(), y(), _("</ol>");
	}
	function O() {
		k(), o.pop(), y(), _("</ul>");
	}
	function k() {
		m("lastWasTag") && !m("slurpAllLineEndings") && b(), _("</li>"), p("slurpAllLineEndings");
	}
	function A() {
		o.push(!1), b(), _("<blockquote>");
	}
	function ee() {
		o.pop(), b(), _("</blockquote>"), p("slurpAllLineEndings");
	}
	function j() {
		o[o.length - 1] || (b(), _("<p>")), p("slurpAllLineEndings");
	}
	function M() {
		o[o.length - 1] ? p("slurpAllLineEndings", !0) : _("</p>");
	}
	function N() {
		b(), _("<pre><code"), p("fencesCount", 0);
	}
	function P() {
		_(" class=\"language-" + g() + "\"");
	}
	function F() {
		let e = m("fencesCount") || 0;
		e || (_(">"), p("slurpOneLineEnding", !0)), p("fencesCount", e + 1);
	}
	function te() {
		b(), _("<pre><code>");
	}
	function ne() {
		let e = m("fencesCount");
		e !== void 0 && e < 2 && c.tightStack.length > 0 && !m("lastWasTag") && y(), m("flowCodeSeenData") && b(), _("</code></pre>"), e !== void 0 && e < 2 && b(), p("flowCodeSeenData"), p("fencesCount"), p("slurpOneLineEnding");
	}
	function re() {
		a.push({ image: !0 }), n = void 0;
	}
	function ie() {
		a.push({});
	}
	function ae(e) {
		a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function oe() {
		a[a.length - 1].label = g();
	}
	function se(e) {
		a[a.length - 1].referenceId = this.sliceSerialize(e);
	}
	function ce() {
		h(), a[a.length - 1].destination = "";
	}
	function le() {
		h(), p("ignoreEncode", !0);
	}
	function ue() {
		a[a.length - 1].destination = g(), p("ignoreEncode");
	}
	function de() {
		a[a.length - 1].title = g();
	}
	function fe() {
		let e = a.length - 1, i = a[e], o = i.referenceId || i.labelId, s = i.destination === void 0 ? r[OE(o)] : i;
		for (n = !0; e--;) if (a[e].image) {
			n = void 0;
			break;
		}
		i.image ? (_("<img src=\"" + BE(s.destination, t.allowDangerousProtocol ? void 0 : WE) + "\" alt=\""), v(i.label), _("\"")) : _("<a href=\"" + BE(s.destination, t.allowDangerousProtocol ? void 0 : UE) + "\""), _(s.title ? " title=\"" + s.title + "\"" : ""), i.image ? _(" />") : (_(">"), v(i.label), _("</a>")), a.pop();
	}
	function pe() {
		h(), a.push({});
	}
	function me(e) {
		g(), a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function he() {
		h(), p("ignoreEncode", !0);
	}
	function ge() {
		a[a.length - 1].destination = g(), p("ignoreEncode");
	}
	function _e() {
		a[a.length - 1].title = g();
	}
	function ve() {
		let e = a[a.length - 1], t = OE(e.labelId);
		g(), HE.call(r, t) || (r[t] = a[a.length - 1]), a.pop();
	}
	function ye() {
		p("slurpAllLineEndings", !0);
	}
	function be(e) {
		m("headingRank") || (p("headingRank", this.sliceSerialize(e).length), b(), _("<h" + m("headingRank") + ">"));
	}
	function xe() {
		h(), p("slurpAllLineEndings");
	}
	function Se() {
		p("slurpAllLineEndings", !0);
	}
	function Ce() {
		_("</h" + m("headingRank") + ">"), p("headingRank");
	}
	function we(e) {
		p("headingRank", this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2);
	}
	function Te() {
		let e = g();
		b(), _("<h" + m("headingRank") + ">"), v(e), _("</h" + m("headingRank") + ">"), p("slurpAllLineEndings"), p("headingRank");
	}
	function Ee(e) {
		v(x(this.sliceSerialize(e)));
	}
	function De(e) {
		if (!m("slurpAllLineEndings")) {
			if (m("slurpOneLineEnding")) {
				p("slurpOneLineEnding");
				return;
			}
			if (m("inCodeText")) {
				v(" ");
				return;
			}
			v(x(this.sliceSerialize(e)));
		}
	}
	function Oe(e) {
		v(x(this.sliceSerialize(e))), p("flowCodeSeenData", !0);
	}
	function ke() {
		_("<br />");
	}
	function Ae() {
		b(), Me();
	}
	function je() {
		p("ignoreEncode");
	}
	function Me() {
		t.allowDangerousHtml && p("ignoreEncode", !0);
	}
	function I() {
		_("<em>");
	}
	function Ne() {
		_("<strong>");
	}
	function Pe() {
		p("inCodeText", !0), _("<code>");
	}
	function Fe() {
		p("inCodeText"), _("</code>");
	}
	function L() {
		_("</em>");
	}
	function Ie() {
		_("</strong>");
	}
	function Le() {
		b(), _("<hr />");
	}
	function Re(e) {
		p("characterReferenceType", e.type);
	}
	function ze(e) {
		let t = this.sliceSerialize(e);
		v(x(m("characterReferenceType") ? TE(t, m("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : _E(t))), p("characterReferenceType");
	}
	function Be(e) {
		let n = this.sliceSerialize(e);
		_("<a href=\"" + BE(n, t.allowDangerousProtocol ? void 0 : UE) + "\">"), v(x(n)), _("</a>");
	}
	function Ve(e) {
		let t = this.sliceSerialize(e);
		_("<a href=\"" + BE("mailto:" + t) + "\">"), v(x(t)), _("</a>");
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-space/index.js
function $(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/content.js
var KE = { tokenize: qE };
function qE(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return Z(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/document.js
var JE = { tokenize: XE }, YE = { tokenize: ZE };
function XE(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return vE(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(YE, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(YE, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return Z(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			vE(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function ZE(e, t, n) {
	return $(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/micromark-util-classify-character/index.js
function QE(e) {
	if (e === null || IE(e) || RE(e)) return 1;
	if (LE(e)) return 2;
}
//#endregion
//#region ../../node_modules/micromark-util-resolve-all/index.js
function $E(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/attention.js
var eD = {
	name: "attention",
	resolveAll: tD,
	tokenize: nD
};
function tD(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			rD(d, -c), rD(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = X(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = X(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = X(l, $E(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = X(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = X(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, vE(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function nD(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = QE(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = QE(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function rD(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/autolink.js
var iD = {
	name: "autolink",
	tokenize: aD
};
function aD(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return kE(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || AE(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || AE(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || ME(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : jE(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return AE(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || AE(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/blank-line.js
var oD = {
	partial: !0,
	tokenize: sD
};
function sD(e, t, n) {
	return r;
	function r(t) {
		return Q(t) ? $(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/block-quote.js
var cD = {
	continuation: { tokenize: uD },
	exit: dD,
	name: "blockQuote",
	tokenize: lD
};
function lD(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function uD(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Q(t) ? $(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(cD, t, n)(r);
	}
}
function dD(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-escape.js
var fD = {
	name: "characterEscape",
	tokenize: pD
};
function pD(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return FE(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-reference.js
var mD = {
	name: "characterReference",
	tokenize: hD
};
function hD(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = AE, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = PE, u) : (e.enter("characterReferenceValue"), a = 7, o = NE, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === AE && !_E(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-fenced.js
var gD = {
	partial: !0,
	tokenize: yD
}, _D = {
	concrete: !0,
	name: "codeFenced",
	tokenize: vD
};
function vD(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || Z(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(gD, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || Z(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Q(t) ? $(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || Z(t) ? e.check(gD, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Q(t) ? $(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Q(t) ? $(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || Z(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function yD(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-indented.js
var bD = {
	name: "codeIndented",
	tokenize: SD
}, xD = {
	partial: !0,
	tokenize: CD
};
function SD(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : Z(t) ? e.attempt(xD, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || Z(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function CD(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : $(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Z(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-text.js
var wD = {
	name: "codeText",
	previous: ED,
	resolve: TD,
	tokenize: DD
};
function TD(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function ED(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function DD(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || Z(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var OD = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && kD(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), kD(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), kD(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			kD(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			kD(this.left, t.reverse());
		}
	}
};
function kD(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/index.js
function AD(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new OD(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, jD(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return vE(e, 0, Infinity, u.slice(0)), !l;
}
function jD(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/content.js
var MD = {
	resolve: PD,
	tokenize: FD
}, ND = {
	partial: !0,
	tokenize: ID
};
function PD(e) {
	return AD(e), e;
}
function FD(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Z(t) ? e.check(ND, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function ID(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || Z(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-destination/index.js
function LD(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || ME(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || Z(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || IE(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || ME(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-label/index.js
function RD(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || Z(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-title/index.js
function zD(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), $(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || Z(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-whitespace/index.js
function BD(e, t) {
	let n;
	return r;
	function r(i) {
		return Z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? $(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/definition.js
var VD = {
	name: "definition",
	tokenize: UD
}, HD = {
	partial: !0,
	tokenize: WD
};
function UD(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return RD.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = OE(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return IE(t) ? BD(e, l)(t) : l(t);
	}
	function l(t) {
		return LD(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(HD, d, d)(t);
	}
	function d(t) {
		return Q(t) ? $(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Z(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function WD(e, t, n) {
	return r;
	function r(t) {
		return IE(t) ? BD(e, i)(t) : n(t);
	}
	function i(t) {
		return zD(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Q(t) ? $(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || Z(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var GD = {
	name: "hardBreakEscape",
	tokenize: KD
};
function KD(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return Z(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/heading-atx.js
var qD = {
	name: "headingAtx",
	resolve: JD,
	tokenize: YD
};
function JD(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, vE(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function YD(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || IE(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || Z(n) ? (e.exit("atxHeading"), t(n)) : Q(n) ? $(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || IE(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/micromark-util-html-tag-name/index.js
var XD = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), ZD = [
	"pre",
	"script",
	"style",
	"textarea"
], QD = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: tO,
	tokenize: nO
}, $D = {
	partial: !0,
	tokenize: iO
}, eO = {
	partial: !0,
	tokenize: rO
};
function tO(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function nO(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : F) : kE(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : kE(a) ? (e.consume(a), i = 4, r.interrupt ? t : F) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : F) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return kE(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || IE(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && ZD.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : XD.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || AE(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || kE(t) ? (e.consume(t), b) : Q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || AE(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || Z(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || IE(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || Z(t) ? O(t) : Q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), j) : t === 60 && i === 1 ? (e.consume(t), M) : t === 62 && i === 4 ? (e.consume(t), te) : t === 63 && i === 3 ? (e.consume(t), F) : t === 93 && i === 5 ? (e.consume(t), P) : Z(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check($D, ne, k)(t)) : t === null || Z(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(eO, A, ne)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return t === null || Z(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function j(t) {
		return t === 45 ? (e.consume(t), F) : O(t);
	}
	function M(t) {
		return t === 47 ? (e.consume(t), o = "", N) : O(t);
	}
	function N(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return ZD.includes(n) ? (e.consume(t), te) : O(t);
		}
		return kE(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), N) : O(t);
	}
	function P(t) {
		return t === 93 ? (e.consume(t), F) : O(t);
	}
	function F(t) {
		return t === 62 ? (e.consume(t), te) : t === 45 && i === 2 ? (e.consume(t), F) : O(t);
	}
	function te(t) {
		return t === null || Z(t) ? (e.exit("htmlFlowData"), ne(t)) : (e.consume(t), te);
	}
	function ne(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function rO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Z(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function iO(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(oD, t, n);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/html-text.js
var aO = {
	name: "htmlText",
	tokenize: oO
};
function oO(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : kE(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : kE(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Z(t) ? (o = d, M(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? j(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Z(t) ? (o = h, M(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? j(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? j(t) : Z(t) ? (o = v, M(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Z(t) ? (o = y, M(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? j(e) : y(e);
	}
	function x(t) {
		return kE(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || AE(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Z(t) ? (o = C, M(t)) : Q(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 45 || AE(t) ? (e.consume(t), w) : t === 47 || t === 62 || IE(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || kE(t) ? (e.consume(t), E) : Z(t) ? (o = T, M(t)) : Q(t) ? (e.consume(t), T) : j(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || AE(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : Z(t) ? (o = D, M(t)) : Q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : Z(t) ? (o = O, M(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, ee) : t === null ? n(t) : Z(t) ? (o = k, M(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || IE(t) ? T(t) : (e.consume(t), A);
	}
	function ee(e) {
		return e === 47 || e === 62 || IE(e) ? T(e) : n(e);
	}
	function j(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function M(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
	}
	function N(t) {
		return Q(t) ? $(e, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : P(t);
	}
	function P(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-end.js
var sO = {
	name: "labelEnd",
	resolveAll: dO,
	resolveTo: fO,
	tokenize: pO
}, cO = { tokenize: mO }, lO = { tokenize: hO }, uO = { tokenize: gO };
function dO(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && vE(e, 0, e.length, n), e;
}
function fO(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = X(s, e.slice(a + 1, a + r + 3)), s = X(s, [[
		"enter",
		u,
		t
	]]), s = X(s, $E(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = X(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = X(s, e.slice(o + 1)), s = X(s, [[
		"exit",
		c,
		t
	]]), vE(e, a, e.length, s), e;
}
function pO(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(OE(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(cO, u, o ? u : d)(t) : t === 91 ? e.attempt(lO, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(uO, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function mO(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return IE(t) ? BD(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : LD(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return IE(t) ? BD(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? zD(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return IE(t) ? BD(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function hO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return RD.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(OE(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function gO(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-image.js
var _O = {
	name: "labelStartImage",
	resolveAll: sO.resolveAll,
	tokenize: vO
};
function vO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-link.js
var yO = {
	name: "labelStartLink",
	resolveAll: sO.resolveAll,
	tokenize: bO
};
function bO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/line-ending.js
var xO = {
	name: "lineEnding",
	tokenize: SO
};
function SO(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), $(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/thematic-break.js
var CO = {
	name: "thematicBreak",
	tokenize: wO
};
function wO(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || Z(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Q(t) ? $(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/list.js
var TO = {
	continuation: { tokenize: kO },
	exit: jO,
	name: "list",
	tokenize: OO
}, EO = {
	partial: !0,
	tokenize: MO
}, DO = {
	partial: !0,
	tokenize: AO
};
function OO(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : NE(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(CO, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return NE(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(oD, r.interrupt ? n : u, e.attempt(EO, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function kO(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(oD, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(DO, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, $(e, e.attempt(TO, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function AO(e, t, n) {
	let r = this;
	return $(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function jO(e) {
	e.exit(this.containerState.type);
}
function MO(e, t, n) {
	let r = this;
	return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/setext-underline.js
var NO = {
	name: "setextUnderline",
	resolveTo: PO,
	tokenize: FO
};
function PO(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function FO(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Q(t) ? $(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || Z(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/flow.js
var IO = { tokenize: LO };
function LO(e) {
	let t = this, n = e.attempt(oD, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(MD, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/text.js
var RO = { resolveAll: HO() }, zO = VO("string"), BO = VO("text");
function VO(e) {
	return {
		resolveAll: HO(e === "text" ? UO : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function HO(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function UO(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/constructs.js
var WO = /* @__PURE__ */ e({
	attentionMarkers: () => QO,
	contentInitial: () => KO,
	disable: () => $O,
	document: () => GO,
	flow: () => JO,
	flowInitial: () => qO,
	insideSpan: () => ZO,
	string: () => YO,
	text: () => XO
}), GO = {
	42: TO,
	43: TO,
	45: TO,
	48: TO,
	49: TO,
	50: TO,
	51: TO,
	52: TO,
	53: TO,
	54: TO,
	55: TO,
	56: TO,
	57: TO,
	62: cD
}, KO = { 91: VD }, qO = {
	[-2]: bD,
	[-1]: bD,
	32: bD
}, JO = {
	35: qD,
	42: CO,
	45: [NO, CO],
	60: QD,
	61: NO,
	95: CO,
	96: _D,
	126: _D
}, YO = {
	38: mD,
	92: fD
}, XO = {
	[-5]: xO,
	[-4]: xO,
	[-3]: xO,
	33: _O,
	38: mD,
	42: eD,
	60: [iD, aO],
	91: yO,
	92: [GD, fD],
	93: sO,
	95: eD,
	96: wD
}, ZO = { null: [eD, RO] }, QO = { null: [42, 95] }, $O = { null: [] };
//#endregion
//#region ../../node_modules/micromark/lib/create-tokenizer.js
function ek(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = X(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = $E(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return nk(p(e), t);
	}
	function p(e) {
		return tk(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		Z(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && vE(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function tk(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function nk(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/micromark/lib/parse.js
function rk(e) {
	let t = {
		constructs: bE([WO, ...(e || {}).extensions || []]),
		content: n(KE),
		defined: [],
		document: n(JE),
		flow: n(IO),
		lazy: {},
		string: n(zO),
		text: n(BO)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return ek(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/postprocess.js
function ik(e) {
	for (; !AD(e););
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/preprocess.js
var ak = /[\0\t\n\r]/g;
function ok() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (ak.lastIndex = u, c = ak.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/micromark/index.js
function sk(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), GE(n)(ik(rk(n).document().write(ok()(e, t, !0))));
}
//#endregion
//#region ../app/src/utils/safeMarkdown.js
function ck(e, t = {}) {
	let n = sk(e), r = new DOMParser().parseFromString(`<!DOCTYPE html><html><body><div>${n}</div></body></html>`, "text/html");
	r.normalize(), lk(r.body);
	for (let e of r.querySelectorAll("a[href]")) e.setAttribute("target", "blank"), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("href", it(e.getAttribute("href"), t.baseUrl));
	for (let e of r.querySelectorAll("img[src]")) e.setAttribute("src", it(e.getAttribute("src"), t.baseUrl));
	let i = r.body.removeChild(r.querySelector("body > div"));
	return i.className = "markdown", i;
}
function lk(e) {
	if (e.nodeType !== 3) {
		if (e.nodeType !== 1 || /^(script|iframe|object|embed|svg)$/i.test(e.tagName)) return e.remove();
		for (let t = e.attributes.length; t--;) {
			let n = e.attributes[t].name;
			/^(class|id|name|href|src|alt|align|valign|(on[a-z]+))$/i.test(n) || e.attributes.removeNamedItem(n);
		}
		for (let t = e.childNodes.length; t--;) lk(e.childNodes[t]);
	}
}
//#endregion
//#region ../app/src/components/dialogs/bookmarkInfoBox.js
var uk = o`
    dialog {
        position: fixed;
        bottom: var(--gs-basic-spacing);
        margin-right: var(--gs-basic-spacing);
        max-width: 600px;
    }

    .markdown {
        img {
            max-width: 350px;
            display: block;
            margin: 1em auto;
        }

        p:first-child {
            margin-top: 0;
        }

        p:last-child {
            margin-bottom: 0;
        }
    }

    .collapse {
        all: unset;
        position: absolute;
        right: var(--gs-basic-spacing);
        top: var(--gs-basic-spacing);
        background: none;
        border: none;
        font-size: 1.1em;

        border-radius: 2px;
        padding: 0 0.2em;
        cursor: pointer;

        &:focus {
            outline: revert;
        }

        svg {
            transition: transform 0.5s;
        }

        &:hover {
            background-color: #e8e8e8;
        }
    }

    dialog:not(.collapsed) .content:not(:hover) .collapse {
        animation: move 0.25s 0.5s 3 linear;

        @keyframes move {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-2px);
            }
            75% {
                transform: translateY(2px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    dialog.collapsed {
        section,
        footer {
            display: none;
        }

        header {
            padding-bottom: var(--gs-basic-spacing);
            padding-right: 3em;
        }

        .collapse {
            svg {
                transform: rotate(180deg);
            }
        }
    }

    .non-modal-backdrop {
        pointer-events: none;

        position: fixed;
        inset: 0;

        opacity: 1;
        transition: opacity 0.2s ease-in-out;

        @starting-style {
            opacity: 0;
        }

        background: linear-gradient(
            160deg,
            transparent 70%,
            rgba(0, 0, 0, 0.2)
        );

        &.closing {
            opacity: 0;
        }
    }

    .bookmark-plot {
        margin-top: var(--gs-basic-spacing);
    }

    .bookmark-plot-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--gs-basic-spacing);
        margin-bottom: calc(var(--gs-basic-spacing) * 0.5);

        span {
            font-weight: bold;
            font-size: 90%;
        }
    }

    .bookmark-plot-preview {
        inline-size: min(520px, 70vw);
        block-size: 220px;
        border: 1px solid var(--gs-dialog-stroke-color, #d0d0d0);
    }

    .bookmark-plot-error {
        color: #8a1f11;
    }
`, dk = class extends q {
	static properties = {
		...super.properties,
		entry: {},
		mode: { type: String },
		allowImport: { type: Boolean },
		baseUrl: { type: String },
		plotResults: { state: !0 },
		plotBookmarkContext: {},
		entryIndex: { state: !0 }
	};
	static styles = [...super.styles, uk];
	constructor() {
		super(), this.entry = null, this.mode = "default", this.allowImport = !1, this.baseUrl = "", this.plotResults = [], this.plotBookmarkContext = void 0, this.modal = !1, this.names = [], this.entryIndex = -1, this.#e = [], this.#t = 0;
	}
	#e;
	#t;
	disconnectedCallback() {
		this.#i(), super.disconnectedCallback();
	}
	updated(e) {
		super.updated?.(e), e.has("plotResults") && this.#a();
	}
	willUpdate(e) {
		super.willUpdate(e);
		let t = this.names?.length ?? 0;
		t && (this.entryIndex = this.names.indexOf(this.entry?.name));
		let n = this.mode == "tour" && t ? ` ${this.entryIndex + 1} of ${this.names.length}` : "";
		this.dialogTitle = `${this.mode == "shared" ? "Shared bookmark" : "Bookmark"}${n}: ${this.entry.name ?? "Unnamed"}`;
	}
	async #n(e) {
		e < 0 || e >= this.names.length || this.dispatchEvent(new CustomEvent("gs-jump-to-bookmark", {
			bubbles: !0,
			composed: !0,
			detail: { name: this.names[e] }
		}));
	}
	renderHeader() {
		return L`${this.dialogTitle}
            <button
                title="Collapse"
                class="btn collapse"
                @click=${(e) => e.target.closest("dialog").classList.toggle("collapsed")}
            >
                ${K(gf).node[0]}
            </button> `;
	}
	renderBody() {
		let e = this.entry;
		return L`<div class="notes">${e.notes ? ck(e.notes, { baseUrl: this.baseUrl }) : L`<span class="no-notes">No notes provided</span>`}</div>
            ${this.#r()}`;
	}
	#r() {
		return this.plotResults.length ? L`<div class="bookmark-plots">
            ${this.plotResults.map((e, t) => e.error || !e.plot ? L`<div class="bookmark-plot bookmark-plot-error">
                        ${e.error ?? "Plot could not be rebuilt."}
                    </div>` : L`<div class="bookmark-plot">
                    <div class="bookmark-plot-title">
                        <span>${e.plot.title}</span>
                        <button
                            class="btn"
                            type="button"
                            @click=${() => Rx(e.plot, { bookmarkContext: this.plotBookmarkContext })}
                        >
                            ${K(yf).node[0]} Open larger
                        </button>
                    </div>
                    <div
                        class="bookmark-plot-preview"
                        data-plot-index=${t}
                    ></div>
                </div>`)}
        </div>` : "";
	}
	#i() {
		this.#t++;
		for (let e of this.#e) e.finalize();
		this.#e = [];
	}
	async #a() {
		this.#i();
		let e = this.#t;
		for (let [t, n] of this.plotResults.entries()) {
			if (!n.plot) continue;
			let r = this.renderRoot.querySelector(`.bookmark-plot-preview[data-plot-index="${t}"]`);
			if (r) {
				let t = await kd(r, n.plot);
				e === this.#t && this.isConnected ? this.#e.push(t) : t.finalize();
			}
		}
	}
	renderButtons() {
		return [
			this.mode == "shared" && this.allowImport ? this.makeButton("Import bookmark", () => (this.dispatchEvent(new CustomEvent("gs-import-bookmark", {
				bubbles: !0,
				composed: !0,
				detail: { entry: this.entry }
			})), !0), { iconDef: Hd }) : L``,
			this.makeCloseButton(this.mode == "tour" ? "End tour" : "Close"),
			this.names.length && this.mode == "tour" ? L`<button
                      class="btn"
                      @click=${async () => {
				await this.#n(this.entryIndex - 1);
			}}
                      ?disabled=${this.entryIndex <= 0}
                  >
                      ${K(of).node[0]} Previous
                  </button>` : L``,
			this.names.length && this.mode == "tour" ? L`<button
                      class="btn"
                      @click=${async () => {
				await this.#n(this.entryIndex + 1);
			}}
                      autofocus
                      ?disabled=${this.entryIndex >= this.names.length - 1}
                  >
                      Next ${K(Fd).node[0]}
                  </button>` : L``
		];
	}
	closeDialog() {
		this.triggerClose();
	}
};
customElements.define("gs-bookmark-info-box", dk);
//#endregion
//#region ../app/src/bookmark/scaleDomainUtils.js
function fk(e) {
	return !e.getLinkedSelectionDomainInfo?.()?.persist;
}
function pk(e, t) {
	let n = {};
	for (let [r, i] of e.getNamedScaleResolutions().entries()) t(i) && fk(i) && (n[r] = i.getComplexDomain());
	return n;
}
//#endregion
//#region ../app/src/bookmark/bookmarkState.js
function mk(e, t = {}) {
	let n = {
		name: void 0,
		actions: e.provenance.getBookmarkableActionHistory(),
		scaleDomains: {}
	}, r = e.store.getState().viewSettings, i = e.genomeSpy.viewRoot;
	if (i) {
		let e = ta(i, r);
		e && (n.viewSettings = e);
	}
	return n.scaleDomains = pk(e.genomeSpy, (e) => e.isZoomable()), t.plots?.length && (n.plots = t.plots.slice()), n;
}
function hk(e) {
	return {
		getLocalBookmarkDatabase: () => e.localBookmarkDatabase,
		createBookmark: (t) => mk(e, { plots: t }),
		saveLocalBookmark: (t) => e.localBookmarkDatabase.put(t)
	};
}
//#endregion
//#region ../app/src/bookmark/bookmark.js
function gk(e) {
	for (let t of e.genomeSpy.getNamedScaleResolutions().values()) t.isZoomable() && t.resetZoom();
	let t = e.store;
	e.provenance.isUndoable() && e.provenance.activateInitialState(), t.dispatch(Wi.actions.restoreDefaultVisibilities());
}
async function _k(e, t) {
	try {
		if (e.actions) {
			if (t.provenance.isUndoable() && (t.provenance.activateInitialState(), await t.getSampleView?.()?.awaitMetadataReady()), !t.intentPipeline) throw Error("Intent pipeline is required to restore bookmarks.");
			await t.intentPipeline.submit(e.actions, { submissionKind: "bookmark" }), await t.paramProvenanceBridge?.whenApplied();
		}
		let n = $i(e.viewSettings);
		t.store.dispatch(Wi.actions.setViewSettings(n));
		let r = [];
		for (let [n, i] of Object.entries(e.scaleDomains ?? {})) {
			let e = t.genomeSpy.getNamedScaleResolutions().get(n);
			e ? r.push(e.zoomTo(i)) : console.warn(`Cannot restore scale domain. Unknown name: ${n}`);
		}
		return await Promise.all(r), { plots: await vk(e, t) };
	} catch (e) {
		return console.error(e), t.store.getState().intentStatus?.status === "error" ? { plots: [] } : (Y(L`<p>Cannot restore the state:</p>
                <p>${e}</p>`, { type: "error" }), t.provenance.activateInitialState(), { plots: [] });
	}
}
async function vk(e, t) {
	let n = e.plots ?? [];
	if (!n.length) return [];
	let r = await t.getAgentApi(), i = [];
	for (let e of n) try {
		let t = await r.buildSampleAttributePlot(e.definition);
		if (!t) throw Error("Plot could not be rebuilt.");
		i.push({ plot: t });
	} catch (e) {
		i.push({ error: e instanceof Error ? e.message : String(e) });
	}
	return i;
}
async function yk(e, t) {
	if (await yb(t.localBookmarkDatabase, e, "add")) try {
		await t.localBookmarkDatabase.put(e);
	} catch (e) {
		console.warn(e), Y(`Cannot import bookmark: ${e}`, { type: "error" });
	}
}
async function bk(e, t, n = {}) {
	let r = await _k(e, t);
	if (r.plots.length || e.notes || n.mode == "shared" && (e.name || e.notes)) {
		await xk(e, t, {
			...n,
			plotResults: r.plots
		});
		return;
	}
	let i = document.body.querySelector("gs-bookmark-info-box");
	i && i.closeDialog();
}
async function xk(e, t, n = {}) {
	let r = document.body.querySelector("gs-bookmark-info-box");
	if (r) r.baseUrl = Sk(t, n), r.entry = e, r.mode = n.mode ?? "default", r.plotResults = n.plotResults ?? [], r.plotBookmarkContext = hk(t);
	else {
		J("gs-bookmark-info-box", async (r) => {
			r.baseUrl = Sk(t, n), r.entry = e, r.mode = n.mode ?? "default", r.plotResults = n.plotResults ?? [], r.plotBookmarkContext = hk(t), r.allowImport = !!n.database, n.database && (r.names = await n.database.getNames());
		}).then(async () => {
			if (n.mode == "tour") {
				let e = n.afterTourBookmark;
				if (typeof e == "string") {
					let r = await n.database.get(e);
					if (!r) throw Error(`No such bookmark: ${e}`);
					_k(r, t);
				} else e === null || gk(t);
			}
		});
		let r = document.body.querySelector("gs-bookmark-info-box");
		n.database && (r.addEventListener("gs-jump-to-bookmark", async (e) => {
			let r = e.detail.name;
			bk(await n.database.get(r), t, n);
		}), r.addEventListener("gs-import-bookmark", async (e) => {
			yk(e.detail.entry, t);
		}));
	}
}
function Sk(e, t) {
	return t.database?.baseUrl ?? t.baseUrl ?? e.genomeSpy.spec.baseUrl;
}
//#endregion
//#region ../app/src/components/toolbar/bookmarkButton.js
var Ck = class extends A {
	constructor() {
		super(), this.app = void 0;
	}
	connectedCallback() {
		super.connectedCallback(), this.dispatchEvent(kT("app", (e) => {
			this.app = e;
		}));
	}
	createRenderRoot() {
		return this;
	}
	#e() {
		return mk(this.app);
	}
	async #t() {
		let e = this.#e();
		await yb(void 0, e, "share") && Nx(e, !1);
	}
	async #n(e, t) {
		let n = t ? await e.get(t) : void 0, r = !!n, i = this.#e();
		if (i.name ??= n?.name, i.notes ??= n?.notes, i.plots ??= n?.plots, await yb(e, i, r ? "edit" : "add")) try {
			await e.put(i, n?.name), this.requestUpdate();
		} catch (e) {
			Y(`${e}`, { title: "Cannot save the bookmark!" });
		}
	}
	async #r(e, t) {
		let n = await e.get(t);
		n && bk(n, this.app, { database: e });
	}
	#i(e, t, n) {
		n.stopPropagation();
		let r = n.target.closest("li"), i = () => Y(L`The bookmark <em>${t}</em> will be deleted.`, {
			title: "Are you sure?",
			confirm: !0
		}).then(async (n) => {
			n && (await e.delete(t), this.requestUpdate());
		}), a = [], o = e == this.app.globalBookmarkDatabase;
		o || (a.push({
			label: "Edit and replace...",
			icon: ef,
			callback: () => this.#n(e, t)
		}), a.push({
			label: "Delete",
			icon: nf,
			callback: i
		})), a.push({
			label: "Share...",
			icon: Ef,
			callback: async () => Nx(await e.get(t), o)
		}), Zy({ items: a }, r, "right-start");
	}
	async #a(e, t) {
		let n = (await e.getNames()).map((t) => ({
			label: t,
			callback: () => this.#r(e, t),
			ellipsisCallback: (n) => this.#i(e, t, n)
		}));
		return n.length ? [
			{ type: "divider" },
			{
				label: t,
				type: "header"
			},
			...n
		].map((e) => Ky(e)) : I;
	}
	#o() {
		let e = (e, t) => e ? hE(this.#a(e, t), L`Loading...`) : I;
		return [e(this.app.globalBookmarkDatabase, "Bookmarks on the server"), e(this.app.localBookmarkDatabase, "Bookmarks in the web browser")];
	}
	render() {
		let e = this.app.localBookmarkDatabase, t = e ? L` <li>
                  <a @click=${() => this.#n(e)}
                      >Add bookmark...</a
                  >
              </li>` : I;
		return L`
            <div class="btn-group">
                ${e || this.app.globalBookmarkDatabase ? L`
                      <div class="dropdown bookmark-dropdown">
                          <button
                              class="tool-btn"
                              title="Bookmarks"
                              @click=${(e) => {
			lE(e) && this.requestUpdate();
		}}
                          >
                              ${K(Hd).node[0]}
                          </button>
                          <ul class="gs-dropdown-menu">
                              ${t} ${this.#o()}
                          </ul>
                      </div>
                  ` : I}
                <button
                    class="tool-btn"
                    title="Share"
                    @click=${() => this.#t()}
                >
                    ${K(Ef).node[0]}
                </button>
            </div>
        `;
	}
};
customElements.define("genome-spy-bookmark-button", Ck);
//#endregion
//#region ../app/src/components/dialogs/aboutDialog.js
var wk = class extends q {
	constructor() {
		super(), this.dialogTitle = "About GenomeSpy";
	}
	renderBody() {
		return L` <div style="display: flex; gap: 1em">
            <div style="width: 8em">
                <img title="GenomeSpy" alt="GenomeSpy" src="${be}" />
            </div>

            <div style="max-width: 28em">
                <p>
                    ${ET.description}<br />
                    Read more about it on
                    <a href="${ET.homepage}" target="_blank"
                        >${ET.homepage}</a
                    >.
                </p>
                <p>
                    Copyright 2026 ${ET.author?.name ?? "The author"}
                    and contributors.<br />
                    ${ET.license} license.
                </p>
                <p>
                    Version: ${DT(ET.version)}
                    ${"commitHash" in ET ? `(${ET.commitHash})` : I}
                </p>

                <p style="font-size: 85%">
                    GenomeSpy is developed in
                    <a
                        href="https://www.helsinki.fi/en/researchgroups/systems-biology-of-drug-resistance-in-cancer"
                        target="_blank"
                        >The Systems Biology of Drug Resistance in Cancer</a
                    >
                    group at the
                    <a href="https://www.helsinki.fi/en" target="_blank"
                        >University of Helsinki</a
                    >.
                </p>

                <p style="font-size: 85%">
                    This project has received funding from the European Union's
                    Horizon 2020 research and innovation programme under grant
                    agreement No. 965193
                    <a href="https://www.deciderproject.eu/" target="_blank"
                        >DECIDER</a
                    >
                    and No. 847912
                    <a href="https://www.rescuer.uio.no/" target="_blank"
                        >RESCUER</a
                    >, as well as from the Biomedicum Helsinki Foundation, the
                    Sigrid Jusélius Foundation, and the Cancer Foundation
                    Finland.
                </p>
            </div>
        </div>`;
	}
};
customElements.define("gs-about-dialog", wk);
//#endregion
//#region ../app/src/components/toolbar/toolbar.js
var Tk = class extends A {
	constructor() {
		super(), this.app = void 0;
	}
	static get properties() {
		return { app: { type: Object } };
	}
	createRenderRoot() {
		return this;
	}
	connectedCallback() {
		super.connectedCallback(), this.#e = Vx(this.app.store, (e) => e.lifecycle.appInitialized, () => this.requestUpdate()), this.app.ui.addEventListener("change", this.#t);
	}
	disconnectedCallback() {
		this.#e?.(), this.app.ui.removeEventListener("change", this.#t), super.disconnectedCallback();
	}
	#e = void 0;
	#t = () => {
		this.requestUpdate();
	};
	_getToolButtons() {
		let e = this.app.provenance, t = [];
		e.isEnabled() && t.push(L`
                <genome-spy-provenance-buttons
                    class="btn-group"
                    .provenance=${e}
                ></genome-spy-provenance-buttons>
            `), t.push(L`<genome-spy-view-visibility></genome-spy-view-visibility>`), this.app.isEmbedded() || t.push(L`
                <genome-spy-bookmark-button></genome-spy-bookmark-button>
            `);
		let n = this.app.rootSpec.description ? jt(this.app.rootSpec.description) : [];
		return n.length > 1 && t.push(L`
                <button
                    class="tool-btn"
                    title="Show a description of the visualization"
                    @click=${() => Y(L`${n.slice(1).map((e) => L`<p>${e}</p>`)}`, {
			title: n[0],
			type: "info"
		})}
                >
                    ${K(rf).node[0]}
                </button>
            `), n.length > 0 && t.push(L`
                <span class="vis-title">${n[0]}</span>
            `), t.push(L`
            <span class="spacer"></span>

            <span class="version"
                >${DT(ET.version)}</span
            >

            ${this.app.ui.toolbarButtons.size ? Array.from(this.app.ui.toolbarButtons).map((e) => this.#n(e)) : I}

            <div class="dropdown bookmark-dropdown">
                <button
                    class="tool-btn"
                    title="Additional functions"
                    @click=${(e) => lE(e)}
                >
                    ${K(cf).node[0]}
                </button>
                <ul class="gs-dropdown-menu gs-dropdown-menu-right">
                    ${this.#r()}
                </ul>
            </div>
        `), t;
	}
	#n(e) {
		return L`
            <button
                class="tool-btn"
                title=${e.title}
                aria-label=${e.title}
                @click=${() => {
			e.onClick();
		}}
            >
                ${K(e.icon).node[0]}
            </button>
        `;
	}
	#r() {
		let e = [];
		return e.push({
			label: "Save PNG",
			icon: Qd,
			callback: () => J("gs-save-image-dialog", (e) => {
				e.genomeSpy = this.app.genomeSpy;
			})
		}), e.push(...this.app.ui.toolbarMenuItems), this.app.appContainer.requestFullscreen && e.push({
			label: "Fullscreen",
			icon: Wd,
			callback: () => this.app.toggleFullScreen()
		}), e.push({
			label: "About GenomeSpy",
			icon: rf,
			callback: () => this.#i()
		}), e.push({
			label: "Help",
			icon: $d,
			callback: () => window.open("https://genomespy.app/docs/sample-collections/analyzing/", "_blank")
		}), e.map(Ky);
	}
	#i() {
		J("gs-about-dialog");
	}
	render() {
		let e = this.app.genomeSpy;
		return L`
            <nav class="gs-toolbar">
                <a href="https://genomespy.app" target="_blank" class="logo">
                    <img title="GenomeSpy" alt="GenomeSpy" src="${be}" />
                </a>

                ${this.app.store.getState().lifecycle.appInitialized && TT(e.viewRoot) ? L`
                          <genome-spy-search-field
                              .app=${this.app}
                          ></genome-spy-search-field>
                      ` : I}
                ${this._getToolButtons()}
            </nav>
        `;
	}
};
customElements.define("genome-spy-toolbar", Tk);
//#endregion
//#region ../app/src/state/provenance.js
function Ek() {
	let e = 0;
	return () => (t) => (n) => (n && typeof n == "object" && "type" in n && (n = {
		...n,
		provenanceId: `provenance-${e++}`
	}), t(n));
}
var Dk = class {
	#e;
	constructor(e) {
		this.#e = e, this.actionInfoSources = [];
	}
	get store() {
		return this.#e;
	}
	get _provenanceState() {
		return this.#e.getState().provenance;
	}
	isEnabled() {
		return !!this.getPresentState();
	}
	getPresentState() {
		return this._provenanceState.present;
	}
	addActionInfoSource(e) {
		this.actionInfoSources.push(e);
	}
	getActionInfo(e) {
		for (let t of this.actionInfoSources) {
			let n = t(e);
			if (n) return n;
		}
	}
	isRedoable() {
		return this.isEnabled() && this._provenanceState.future.length > 0;
	}
	redo() {
		this.#e.dispatch(vo.redo());
	}
	isUndoable() {
		return this.isEnabled() && this._provenanceState.past.length > 0;
	}
	undo() {
		this.#e.dispatch(vo.undo());
	}
	isAtInitialState() {
		return !this.isUndoable();
	}
	isEmpty() {
		let e = this._provenanceState, t = e.present?.lastAction, n = !!t && !hS(t);
		return !this.isEnabled() || e.past.length + e.future.length <= 0 && !n;
	}
	activateState(e) {
		let t = this.getFullActionHistory().findIndex((t) => t.provenanceId === e);
		if (t < 0) return;
		let n = this.getCurrentIndex();
		t < n ? this.#e.dispatch(vo.jumpToPast(t)) : t > n && this.#e.dispatch(vo.jumpToFuture(t - n - 1));
	}
	activateInitialState() {
		this.#e.dispatch(vo.jumpToPast(0));
	}
	getCurrentIndex() {
		return this._provenanceState.past?.length;
	}
	getActionHistory() {
		let e = this._provenanceState;
		return e.present ? [...e.past, e.present].map((e) => e.lastAction) : [...e.past].map((e) => e.lastAction);
	}
	getFullActionHistory() {
		let e = this._provenanceState;
		return [
			...e.past,
			e.present,
			...e.future
		].map((e) => e.lastAction);
	}
	getBookmarkableActionHistory() {
		return this.getActionHistory().filter((e) => !hS(e)).map((e) => {
			let { provenanceId: t, ...n } = e;
			return n;
		});
	}
};
//#endregion
//#region ../core/src/utils/kWayMerge.js
function Ok(e, t, n = (e) => +e) {
	let r = e.length, i = new Ot(), a = Array(r).fill(0);
	for (let [t, r] of e.entries()) r.length && i.push(t, n(r[0]));
	let o;
	for (; (o = i.pop()) !== void 0;) {
		let r = e[o], s = a[o], c = r[s++];
		if (t(c), s < r.length) {
			let e = n(r[s]);
			i.push(o, e), a[o] = s;
		}
	}
}
//#endregion
//#region ../app/src/sampleView/mergeFacets.js
var kk = "sampleCount", Ak = class extends qe {
	#e = !0;
	#t;
	constructor(e, t) {
		super(), this.view = t;
		let n = t.context.animator;
		if (this.provenance = jk(t), !this.provenance) throw Error("No SampleView was found!");
		let r = () => {
			this.#n && (this.#e && (this.#e = !1, this.reset(), this.complete()), n.requestTransition(() => {
				this.reset(), this.complete();
			}));
		}, i = Vx(this.provenance.store, (e) => e.provenance.present[tc], () => {
			r();
		});
		this.view.registerDisposer(i);
		let a = this.#n, o = this.provenance.store.subscribe(() => {
			let e = this.#n;
			e !== a && (a = e, e && r());
		});
		this.view.registerDisposer(o);
	}
	get label() {
		return "MergeSampleFacets";
	}
	initialize() {
		this.#t = this.paramRuntime.allocateSetter(kk, 0, !0);
		let e = this.view.getEncoding().x;
		if (Ve(e)) this.xAccessor = nt(e.field);
		else throw Error("Sample summarization requires a FieldDef. This is not a FieldDef: " + JSON.stringify(e));
	}
	handle(e) {}
	get #n() {
		return this.view.isConfiguredVisible();
	}
	#r() {
		if (this.parent instanceof b) return this.parent;
		throw Error("MergeFacetsTransform must be a direct child of a Collector");
	}
	complete() {
		this.#n && this.#i(this.provenance.getPresentState()[tc]), super.complete();
	}
	#i(e) {
		let t = [...gc(e.rootGroup)].filter((e) => mc(Ct(e)));
		for (let [e, n] of t.entries()) {
			let t = Ct(n);
			if (mc(t)) {
				this.beginBatch({
					type: "facet",
					facetId: [e]
				}, !0), this.#t(t.samples.length);
				let n = t.samples, r = this.#r();
				Ok(n.map((e) => r.facetBatches.get([e]) ?? []), (e) => this._propagate(e), this.xAccessor);
			}
		}
	}
	beginBatch(e, t) {
		if (t) for (let t of this.children) t.beginBatch(e);
	}
	setParent(e) {
		super.setParent(e);
	}
};
function jk(e) {
	for (let t of e.getLayoutAncestors()) if (t instanceof Bw) return t.provenance;
}
//#endregion
//#region ../app/src/bookmark/simpleBookmarkDatabase.js
var Mk = class extends hT {
	constructor(e, t = {}) {
		super(), this.baseUrl = t.baseUrl, this.bookmarks = e, this.names = e.map((e) => e.name);
	}
	async getNames() {
		return this.names;
	}
	async get(e) {
		return this.bookmarks.find((t) => t.name == e);
	}
}, Nk = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	constructor(e) {
		this.#e = e;
	}
	dispatch(e) {
		if ("payload" in e) {
			let t = e;
			for (let e of this.#t) t = e(t);
			e = t;
		}
		return this.#e.dispatch(e);
	}
	dispatchBatch(e) {
		for (let t of e) this.dispatch(t);
	}
	addActionAugmenter(e) {
		this.#t.add(e);
	}
	removeActionAugmenter(e) {
		this.#t.delete(e);
	}
}, Pk = Oi({
	name: "lifecycle",
	initialState: { appInitialized: !1 },
	reducers: { setInitialized: (e) => {
		if (e.appInitialized) throw Error("App is already initialized");
		e.appInitialized = !0;
	} }
}), Fk = { status: "idle" }, Ik = Oi({
	name: "intentStatus",
	initialState: Fk,
	reducers: {
		setRunning: (e, t) => ({
			...e,
			status: "running",
			submissionKind: t.payload.submissionKind ?? "user",
			startIndex: t.payload.startIndex,
			lastSuccessfulIndex: t.payload.startIndex,
			totalActions: t.payload.totalActions,
			currentIndex: 0,
			currentAction: void 0,
			failedAction: void 0,
			error: void 0
		}),
		setProgress: (e, t) => ({
			...e,
			status: "running",
			currentIndex: t.payload.currentIndex ?? e.currentIndex ?? 0,
			totalActions: t.payload.totalActions ?? e.totalActions,
			currentAction: t.payload.currentAction ?? e.currentAction
		}),
		setError: (e, t) => ({
			...e,
			status: "error",
			startIndex: t.payload.startIndex ?? e.startIndex,
			lastSuccessfulIndex: t.payload.lastSuccessfulIndex ?? e.lastSuccessfulIndex,
			failedAction: t.payload.failedAction ?? e.failedAction,
			submissionKind: t.payload.submissionKind ?? e.submissionKind,
			error: t.payload.error
		}),
		setCanceled: (e) => ({
			...e,
			status: "canceled"
		}),
		resolveError: (e, t) => Fk,
		clearStatus: () => Fk
	}
});
//#endregion
//#region ../app/src/state/setupStore.js
function Lk() {
	let e = Ho({
		[cc.name]: cc.reducer,
		[Aw.name]: Aw.reducer
	}, { groupBy: jw }), t = yn({
		lifecycle: Pk.reducer,
		viewSettings: Wi.reducer,
		intentStatus: Ik.reducer,
		provenance: e
	});
	return bi({
		middleware: (e) => e({
			serializableCheck: !1,
			immutableCheck: !1
		}).concat(Ek()),
		reducer: (n, r) => {
			let i = t(n, r);
			if (r.type === Ik.actions.setError.type) {
				let t = r.payload?.submissionKind === "agent" ? r.payload?.startIndex ?? n?.intentStatus?.startIndex : r.payload?.lastSuccessfulIndex ?? n?.intentStatus?.lastSuccessfulIndex;
				if (typeof t == "number") return {
					...i,
					provenance: e(i.provenance, vo.jumpToPast(t))
				};
			}
			if (r.type === Ik.actions.resolveError.type && r.payload.decision === "rollbackBatch") {
				let t = n?.intentStatus?.startIndex;
				if (typeof t == "number") return {
					...i,
					provenance: e(i.provenance, vo.jumpToPast(t))
				};
			}
			return i;
		}
	});
}
//#endregion
//#region ../app/src/state/intentPipeline.js
var Rk = class {
	#e;
	#t;
	#n;
	#r = [];
	#i = !1;
	#a = !1;
	#o;
	#s = /* @__PURE__ */ new Set();
	#c;
	constructor({ store: e, provenance: t, intentExecutor: n }) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	createContext(e) {
		return {
			store: this.#e,
			provenance: this.#t,
			intentExecutor: this.#n,
			getAttributeInfo: e?.getAttributeInfo ?? this.#o,
			signal: e?.signal
		};
	}
	setResolvers({ getAttributeInfo: e }) {
		this.#o = e;
	}
	registerActionHook(e) {
		return this.#s.add(e), () => {
			this.#s.delete(e);
		};
	}
	async submit(e, t) {
		let n = Array.isArray(e) ? e : [e], r = n.length > 1;
		if (this.#a) throw Error("Cannot submit actions while a batch is running.");
		if (r && this.#i) throw Error("Cannot submit a batch while actions are running.");
		return new Promise((e, r) => {
			let i = t?.signal ? void 0 : new AbortController(), a = i ? {
				...t,
				signal: i.signal
			} : t;
			this.#r.push({
				actions: n,
				options: a,
				resolve: e,
				reject: r,
				abortController: i
			}), this.#i || this.#l().catch(() => {});
		});
	}
	abortCurrent() {
		this.#c && this.#c.abort();
	}
	async #l() {
		if (this.#i) return;
		this.#i = !0;
		let e = !1;
		try {
			for (; this.#r.length;) {
				let t = this.#r.shift(), n = t.actions.length > 1;
				n && (this.#a = !0);
				let r = this.#e.getState().provenance.past.length, i = r;
				this.#e.dispatch(Ik.actions.setRunning({
					startIndex: r,
					totalActions: t.actions.length,
					submissionKind: t.options?.submissionKind
				})), this.#c = t.abortController;
				let a;
				try {
					for (let [e, n] of t.actions.entries()) a = n, this.#e.dispatch(Ik.actions.setProgress({
						currentIndex: e,
						currentAction: n
					})), await this.#u(n, t.options), i = this.#e.getState().provenance.past.length;
					t.resolve();
				} catch (n) {
					e = !0;
					let o = n instanceof Error ? n : Error(String(n)), s = t.options?.submissionKind;
					this.#e.dispatch(Ik.actions.setError({
						startIndex: r,
						lastSuccessfulIndex: i,
						failedAction: a,
						submissionKind: s,
						error: o.message
					})), s === "agent" && this.#e.dispatch(Ik.actions.clearStatus()), t.reject(o);
					let c = this.#r;
					this.#r = [];
					for (let e of c) e.reject(o);
					throw o;
				}
				n && (this.#a = !1);
			}
		} finally {
			this.#i = !1, this.#a = !1, this.#c = void 0, e || this.#e.dispatch(Ik.actions.clearStatus());
		}
	}
	async #u(e, t) {
		let n = this.createContext(t);
		if (n.signal?.aborted) throw Error("Action processing was aborted.");
		let r = zk(e), i = r && n.getAttributeInfo ? n.getAttributeInfo(r) : void 0;
		i?.ensureAvailability && await i.ensureAvailability({ signal: n.signal });
		let a = e;
		for (let e of this.#s) {
			if (!e.predicate(a) || !e.augment) continue;
			let t = await e.augment(n, a);
			t && (a = t);
		}
		n.intentExecutor.dispatch(a), i?.awaitProcessed && await i.awaitProcessed({ signal: n.signal });
		for (let e of this.#s) e.predicate(a) && (e.ensure && await e.ensure(n, a), e.awaitProcessed && await e.awaitProcessed(n, a));
	}
};
function zk(e) {
	if (!("payload" in e)) return;
	let t = e.payload;
	if (!t || typeof t != "object" || !("attribute" in t)) return;
	let n = t.attribute;
	if (!(!n || typeof n != "object") && "type" in n) return n;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourcePayloadAugmentation.js
async function Bk(e) {
	let { source: t, payload: n, sampleIds: r, baseUrl: i, signal: a, adapter: o, resolveColumns: s = !0 } = e;
	if (n._augmented?.metadata) return n;
	if (n.columnIds.length === 0) throw Error("No metadata columns requested from source.");
	if (n.columnIds.length > 100) throw Error("Metadata import exceeds the column limit (100).");
	let c = o ?? md(t, { baseUrl: i }), l = n.columnIds;
	if (s) {
		let e = await c.resolveColumns(l, a);
		if (e.columnIds.length === 0) throw Error(Vk(t, e));
		l = e.columnIds;
	}
	let u = await c.fetchColumns({
		columnIds: l,
		sampleIds: r,
		groupPath: n.groupPath,
		replace: n.replace
	}, a);
	return {
		...n,
		[Ro]: { metadata: u }
	};
}
function Vk(e, t) {
	let n = e.id ?? e.name ?? "(unnamed source)", r = [...t.missing ?? [], ...t.ambiguous ?? []], i = r.length > 0 ? ": " + r.join(", ") + "." : ".";
	return "None of the requested metadata columns could be resolved from source \"" + n + "\"" + i;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceFlow.js
async function Hk(e, t, n) {
	if (e.type !== t.actions.addMetadataFromSource.type) return e;
	if (!("payload" in e)) throw Error("Metadata source action payload is missing.");
	let r = e.payload, i = t.sampleHierarchy.sampleData?.ids;
	if (!i) throw Error("Sample data has not been initialized.");
	let a = Ed(t), o = await a.getSource(r.sourceId), s = await Bk({
		source: o,
		payload: r,
		sampleIds: i,
		adapter: a.getAdapter(o),
		signal: n
	});
	return {
		...e,
		payload: s
	};
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceBootstrap.js
async function Uk(e) {
	let t = e.sampleHierarchy.sampleData?.ids;
	return t && t.length > 0 ? t : (await new Promise((t, n) => {
		let r = setTimeout(() => {
			i(), n(/* @__PURE__ */ Error("Timed out while waiting for sample identifiers."));
		}, 1e4), i = Vx(e.provenance.store, () => e.sampleHierarchy.sampleData?.ids, (e) => {
			!e || e.length === 0 || (clearTimeout(r), i(), t(void 0));
		});
	}), e.sampleHierarchy.sampleData?.ids ?? []);
}
async function Wk(e, t) {
	let n = Ed(e), r = await n.getSources();
	if (r.length === 0) return;
	let i = await Uk(e);
	if (i.length === 0) throw Error("No sample identifiers are available for metadata.");
	let a = [], o = !0;
	for (let e of r) {
		let t = n.getAdapter(e), r = await gd(e, t);
		if (r.length === 0) continue;
		let s = _d(r);
		for (let n of s) {
			let r = {
				columnIds: n,
				replace: o
			};
			e.id && (r.sourceId = e.id);
			let s = await Bk({
				source: e,
				payload: r,
				sampleIds: i,
				adapter: t,
				resolveColumns: !1
			});
			a.push(cc.actions.addMetadataFromSource(s)), o = !1;
		}
	}
	a.length !== 0 && (await t.submit(a), gS(e.provenance.store, cc.name));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntime.js
async function Gk(e, t) {
	t.setResolvers({ getAttributeInfo: e.compositeAttributeInfoSource.getAttributeInfo.bind(e.compositeAttributeInfoSource) });
	let n = t.registerActionHook({
		predicate: (e) => e.type === cc.actions.addMetadata.type || e.type === cc.actions.deriveMetadata.type || e.type === cc.actions.addMetadataFromSource.type,
		awaitProcessed: (t) => e.awaitMetadataReady(t.signal)
	}), r = t.registerActionHook({
		predicate: (e) => e.type === cc.actions.addMetadataFromSource.type,
		augment: (t, n) => Hk(n, e, t.signal)
	});
	e.registerDisposer(n), e.registerDisposer(r), await Wk(e, t);
}
//#endregion
//#region ../app/src/components/dialogs/intentStatusDialog.js
var Kk = class extends q {
	static properties = {
		...super.properties,
		message: {},
		cancelLabel: { type: String }
	};
	static styles = [...super.styles, o`
            dialog {
                width: 450px;
            }
        `];
	constructor() {
		super(), this.message = "", this.cancelLabel = "Cancel", this.dialogTitle = "Processing";
	}
	renderBody() {
		return L`${this.message}`;
	}
	renderButtons() {
		return [this.makeButton(this.cancelLabel, () => {
			this.finish({ ok: !0 });
		})];
	}
	closeDialog() {
		this.triggerClose();
	}
};
customElements.define("gs-intent-status-dialog", Kk);
function qk(e) {
	return Gg("gs-intent-status-dialog", (t) => {
		t.message = e.message, t.dialogTitle = e.title ?? t.dialogTitle, e.cancelLabel && (t.cancelLabel = e.cancelLabel);
	});
}
//#endregion
//#region ../app/src/components/dialogs/intentErrorDialog.js
var Jk = class extends q {
	static properties = {
		...super.properties,
		message: {},
		rollbackLabel: { type: String },
		keepLabel: { type: String }
	};
	static styles = [...super.styles, o`
            dialog {
                max-width: 600px;
            }
        `];
	constructor() {
		super(), this.message = "", this.rollbackLabel = "Rollback entire batch", this.keepLabel = "Keep current state", this.dialogTitle = "Action interrupted";
	}
	renderBody() {
		return L`${this.message}`;
	}
	renderButtons() {
		return [this.makeButton(this.keepLabel, () => {
			this.finish({
				ok: !1,
				data: { decision: "accept" }
			});
		}), this.makeButton(this.rollbackLabel, () => {
			this.finish({
				ok: !0,
				data: { decision: "rollbackBatch" }
			});
		})];
	}
};
customElements.define("gs-intent-error-dialog", Jk);
function Yk(e) {
	return Ug("gs-intent-error-dialog", (t) => {
		t.message = e.message, t.dialogTitle = e.title ?? t.dialogTitle, e.rollbackLabel && (t.rollbackLabel = e.rollbackLabel), e.keepLabel && (t.keepLabel = e.keepLabel);
	}, (e) => e?.data?.decision ?? "accept");
}
//#endregion
//#region ../app/src/state/intentStatusUi.js
function Xk({ store: e, intentPipeline: t, provenance: n, delayMs: r = 800, minVisibleMs: i = 400 }) {
	let a, o, s, c, l = (e = !1) => {
		if (!o) return;
		if (c &&= (clearTimeout(c), void 0), e || !s) {
			o.closeDialog(), o = void 0, s = void 0;
			return;
		}
		let t = Date.now() - s;
		if (t >= i) {
			o.closeDialog(), o = void 0, s = void 0;
			return;
		}
		c = setTimeout(() => {
			o && (o.closeDialog(), o = void 0, s = void 0, c = void 0);
		}, i - t);
	}, u = (e) => {
		let t = e?.currentAction ? Qk(n, e.currentAction) : I, r = typeof e?.currentIndex == "number" && typeof e?.totalActions == "number" ? L` (${e.currentIndex + 1} of ${e.totalActions})` : I;
		return L` ${t ? L`<div>Performing${r}:</div>
                  <div class="action-title">${t}</div>` : L`<div>Processing actions${r}.</div>`}
            <p>Cancel if it takes too long.</p>`;
	}, d = () => {
		if (o) return;
		let n = e.getState().intentStatus, { element: r, promise: i } = qk({
			title: "Working…",
			message: u(n),
			cancelLabel: "Cancel"
		});
		o = r, s = Date.now(), i.then((n) => {
			n.ok && e.getState().intentStatus?.status === "running" && t.abortCurrent();
		});
	}, f = async (t, r) => {
		let i = t ? Qk(n, t) : "action", a = Zk(r), o = L`
            <p>
                ${a ? "Canceled while performing:" : "Failed to perform:"}
                ${i}
            </p>
            <p>
                ${r ? L`<p>Details:<br />${r}</p>` : I}
            </p>
            <p>
                The failed action was rolled back.<br />
                Roll back the entire batch, or keep the current state?
            </p>
        `, s = await Yk({
			title: a ? "Action canceled" : "Action interrupted",
			message: o,
			rollbackLabel: "Rollback entire batch",
			keepLabel: "Keep current state"
		});
		e.dispatch(Ik.actions.resolveError({ decision: s }));
	}, p = Vx(e, (e) => e.intentStatus, (t, n) => {
		if (t?.status === "running") {
			a ||= setTimeout(() => {
				a = void 0, e.getState().intentStatus?.status === "running" && d();
			}, r), c &&= (clearTimeout(c), void 0), o && (o.message = u(t));
			return;
		}
		a &&= (clearTimeout(a), void 0), t?.status === "error" ? l(!0) : l(), t?.status === "error" && n?.status !== "error" && t.submissionKind !== "agent" && f(t.failedAction, t.error);
	});
	return () => {
		a &&= (clearTimeout(a), void 0), c &&= (clearTimeout(c), void 0), l(), p();
	};
}
function Zk(e) {
	return typeof e == "string" && /abort|cancel/i.test(e);
}
function Qk(e, t) {
	let n = e.getActionInfo(t);
	return n?.provenanceTitle ?? n?.title ?? t.type ?? "action";
}
//#endregion
//#region ../core/src/utils/throttle.js
function $k(e, t) {
	let n = null, r = null, i = null, a = null, o = function() {
		a = this, i = arguments;
		let o = Date.now();
		if (r === null) {
			e.apply(a, i), r = o;
			return;
		}
		let s = t - (o - r);
		if (s <= 0) {
			n &&= (clearTimeout(n), null), e.apply(a, i), r = o;
			return;
		}
		n && clearTimeout(n), n = setTimeout(() => {
			n = null, r !== null && Date.now() - r >= t && (e.apply(a, i), r = Date.now());
		}, s);
	};
	return o.cancel = () => {
		n &&= (clearTimeout(n), null), i = null, a = null, r = null;
	}, o;
}
//#endregion
//#region ../app/src/state/selectionExpansion.js
function eA(e) {
	return "or" in e;
}
function tA(e) {
	return "and" in e;
}
function nA(e) {
	return "not" in e;
}
function rA(e, t) {
	return nA(e) ? { not: rA(e.not, t) } : tA(e) ? { and: e.and.map((e) => rA(e, t)) } : eA(e) ? { or: e.or.map((e) => rA(e, t)) } : lA(e, t);
}
function iA(e, t) {
	return rA(aA(e), t);
}
function aA(e) {
	if (dA(e)) {
		if (e.kind === "sameFieldValue") return {
			field: e.field,
			op: "eq",
			valueFromField: e.field
		};
		throw Error("Unknown selection expansion rule: " + JSON.stringify(e));
	}
	return e;
}
function oA(e, t, n) {
	return t?.length ? { and: [e, ...t.map((e) => ({
		field: e,
		op: "eq",
		value: cA(e)(n)
	}))] } : e;
}
function sA(e) {
	if (nA(e)) {
		let t = sA(e.not);
		return (e) => !t(e);
	}
	if (tA(e)) {
		let t = e.and.map(sA);
		return (e) => t.every((t) => t(e));
	}
	if (eA(e)) {
		let t = e.or.map(sA);
		return (e) => t.some((t) => t(e));
	}
	return uA(e);
}
function cA(e) {
	return (t) => t[e];
}
function lA(e, t) {
	if (e.op === "eq") {
		let n = "value" in e;
		if (n === "valueFromField" in e) throw Error("Selection expansion eq predicate must have exactly one of 'value' or 'valueFromField'.");
		if (n) return {
			field: e.field,
			op: "eq",
			value: e.value
		};
		if (!("valueFromField" in e)) throw Error("Selection expansion eq predicate is missing valueFromField.");
		let r = cA(e.valueFromField);
		return {
			field: e.field,
			op: "eq",
			value: r(t)
		};
	}
	if (e.op === "in") {
		if (!Array.isArray(e.values)) throw Error("Selection expansion in predicate requires an array of values.");
		return {
			field: e.field,
			op: "in",
			values: [...e.values]
		};
	}
	throw Error("Unknown selection expansion predicate operator: " + JSON.stringify(e));
}
function uA(e) {
	let t = cA(e.field);
	if (e.op === "eq") {
		let n = e.value;
		return (e) => t(e) === n;
	}
	if (e.op === "in") {
		let n = new Set(e.values);
		return (e) => n.has(t(e));
	}
	throw Error("Unknown resolved selection expansion predicate operator: " + JSON.stringify(e));
}
function dA(e) {
	return "kind" in e;
}
//#endregion
//#region ../app/src/state/selectionExpansionOrigin.js
function fA(e, t) {
	let n = e.getCollector?.();
	if (!n) return { reason: "missingCollector" };
	if (!n.completed) return {
		reason: "collectorNotCompleted",
		collector: n
	};
	if (!Array.isArray(t.keyTuple) || t.keyTuple.length === 0) return { reason: "invalidOriginKeyTuple" };
	let r;
	try {
		r = zt(e.getEncoding());
	} catch {
		return { reason: "missingEncodingKey" };
	}
	if (!r.length || r.length !== t.keyTuple.length) return { reason: "incompatibleOriginKeyTuple" };
	if (Array.isArray(t.keyFields) && (t.keyFields.length !== r.length || t.keyFields.some((e, t) => e !== r[t]))) return {
		reason: "legacyKeyFieldsMismatch",
		keyFields: r,
		legacyKeyFields: t.keyFields
	};
	try {
		return {
			reason: "ok",
			keyFields: r,
			datum: n.findDatumByKey(r, t.keyTuple)
		};
	} catch (e) {
		return {
			reason: "lookupError",
			error: e
		};
	}
}
//#endregion
//#region ../app/src/state/paramValueSerialization.js
function pA(e, t) {
	return !t || typeof t != "object" || t.type !== "interval" ? t : {
		type: "interval",
		intervals: mA(e, "intervals" in t && t.intervals ? t.intervals : "value" in t && Array.isArray(t.value) ? { x: t.value } : {})
	};
}
function mA(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) {
		if (!i) continue;
		let t = r, a = e.getScaleResolution(t);
		n[r] = [a && a.type === "locus" ? a.toComplex(i[0]) : i[0], a && a.type === "locus" ? a.toComplex(i[1]) : i[1]];
	}
	return n;
}
//#endregion
//#region ../app/src/state/paramProvenanceBridge.js
var hA = 150, gA = class {
	#e;
	#t;
	#n;
	#r = [];
	#i = /* @__PURE__ */ new Map();
	#a = !1;
	#o = [];
	#s = /* @__PURE__ */ new Set();
	#c = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#u = /* @__PURE__ */ new Set();
	#d = !1;
	#f = !1;
	#p = /* @__PURE__ */ new WeakSet();
	#m = /* @__PURE__ */ new Map();
	#h = Promise.resolve();
	constructor({ root: e, store: t, intentExecutor: n }) {
		this.#e = e, this.#t = t, this.#n = n, this.#g(), this.#_(), this.#v();
		let r = this.#y();
		Object.keys(r).length > 0 && this.#F(r);
	}
	dispose() {
		for (let e of this.#o) e();
		this.#o.length = 0, this.#O();
	}
	#g() {
		this.#r = yt(this.#e), this.#i.clear(), this.#u.clear();
		for (let e of this.#r) {
			let t = St(e.selector);
			this.#i.set(t, e), this.#X(e, t);
		}
	}
	#_() {
		for (let e of this.#r) {
			let t = e.selector.param, n = e.view.paramRuntime.subscribe(t, () => {
				this.#b(e);
			});
			this.#o.push(n);
		}
	}
	#v() {
		let e = Vx(this.#t, (e) => e.provenance.present.paramProvenance.entries, Hx((e) => {
			this.#F(e);
		}));
		this.#o.push(e);
	}
	#y() {
		return this.#t.getState().provenance.present.paramProvenance.entries;
	}
	#b(e) {
		if (this.#a) return;
		let t = St(e.selector);
		if (this.#u.has(t)) return;
		let n = this.#L(e);
		if (n === void 0 || Ye(e.param) && this.#Z(e.param, n) && this.#C(e, t)) return;
		let r = this.#P(e, n);
		if (r) {
			if (this.#x(e, n, t)) {
				this.#D(t), this.#t.dispatch(vo.undo());
				return;
			}
			if (this.#w(e.param)) {
				this.#E(t)(e, r);
				return;
			}
			this.#T(e, r);
		}
	}
	#x(e, t, n) {
		if (!Ye(e.param) || !this.#Z(e.param, t)) return !1;
		let { past: r, present: i } = this.#t.getState().provenance;
		if (r.length === 0) return !1;
		let a = i.lastAction;
		if (!a || !Aw.actions.paramChange.match(a)) return !1;
		let o = a.payload.selector;
		if (St(o) !== n) return !1;
		let s = r[r.length - 1].paramProvenance.entries[n];
		return s ? this.#S(e.param, s.value) : !0;
	}
	#S(e, t) {
		if (!t || !Ye(e)) return !0;
		if (t.type === "point") return t.keys.length === 0;
		if (t.type === "pointExpand") return !1;
		if (t.type === "interval") {
			let e = t.intervals ?? {};
			for (let t of Object.values(e)) if (t && t[0] != null && t[1] != null) return !1;
			return !0;
		}
		return !1;
	}
	#C(e, t) {
		let n = this.#y()[t];
		return n ? this.#S(e.param, n.value) : !0;
	}
	#w(e) {
		return Ye(e) ? !0 : tt(e) && !!e.bind;
	}
	#T(e, t) {
		let n = Aw.actions.paramChange({
			selector: e.selector,
			value: t
		});
		this.#n.dispatch(n);
	}
	#E(e) {
		let t = this.#m.get(e);
		return t || (t = $k((e, t) => {
			this.#a || this.#T(e, t);
		}, hA), this.#m.set(e, t)), t;
	}
	#D(e) {
		let t = this.#m.get(e);
		t && t.cancel();
	}
	#O() {
		for (let e of this.#m.values()) e.cancel();
		this.#m.clear();
	}
	#k(e) {
		return at(e.param, e.view.paramRuntime);
	}
	#A(e, t) {
		return this.#K(e.param, t), this.#k(e);
	}
	#j(e, t) {
		return this.#G(e.param, t), this.#k(e);
	}
	#M(e) {
		let t = e;
		if (typeof t.getCollector == "function") return t.getCollector();
	}
	#N(e, t) {
		let n;
		try {
			n = zt(e.view.getEncoding());
		} catch (n) {
			t === "persist" ? this.#q(e.param, `will not be saved because encoding.key is invalid: ${n}`) : this.#K(e.param, `cannot be restored because encoding.key is invalid: ${n}`);
			return;
		}
		if (!n) {
			t === "persist" ? this.#q(e.param, "will not be saved to bookmarks because encoding.key is missing on the owning view.") : this.#K(e.param, "cannot be restored because encoding.key is missing on the owning view.");
			return;
		}
		return n;
	}
	#P(e, t) {
		let n = e.param;
		if (Ye(n)) {
			let r = Ge(n.select);
			if (gt(r)) {
				let r = this.#N(e, "persist");
				if (!r) return;
				let i = Qe(t, r);
				if (!i) return;
				let a = this.#M(e.view);
				if (a && a.completed) try {
					for (let e of i) a.findDatumByKey(r, e);
				} catch (e) {
					this.#q(n, `will not be saved because encoding.key fields [${r.join(", ")}] are not unique in the current data: ${e}`);
					return;
				}
				return {
					type: "point",
					keyFields: r,
					keys: i
				};
			}
			if (ht(r)) {
				if (!Xe(t)) {
					this.#q(n, "has no value yet and will not be saved.");
					return;
				}
				return pA(e.view, t);
			}
			throw Error(`Unsupported selection config for parameter "${n.name}".`);
		}
		if (tt(n)) return {
			type: "value",
			value: t
		};
	}
	#F(e) {
		this.#a = !0;
		try {
			this.#e.paramRuntime.runInTransaction(() => {
				let t = new Set(this.#i.keys()), n = new Set(Object.keys(e));
				for (let t of this.#r) {
					let r = St(t.selector);
					if (n.delete(r), this.#u.has(r)) continue;
					let i = e[r], a = i ? this.#R(t, i) : this.#k(t);
					this.#I(t, a) || t.view.paramRuntime.setValue(t.selector.param, a, { animate: !1 });
				}
				for (let r of n) if (!t.has(r)) {
					let t = e[r].selector;
					this.#Y(t.param, t.scope);
				}
			}), this.#e.paramRuntime.flushNow(), this.#h = this.#e.paramRuntime.whenPropagated();
		} finally {
			this.#a = !1;
		}
	}
	#I(e, t) {
		return tt(e.param) && Object.is(e.view.paramRuntime.getTargetValue(e.selector.param), t);
	}
	#L(e) {
		let t = e.selector.param;
		return tt(e.param) ? e.view.paramRuntime.getTargetValue(t) : e.view.paramRuntime.getValue(t);
	}
	async whenApplied(e) {
		return await Promise.resolve(), await this.#h, this.#e.paramRuntime.whenPropagated(e);
	}
	#R(e, t) {
		let n = e.param, r = t.value;
		if (Ye(n)) {
			let i = Ge(n.select);
			if (gt(i)) {
				if (r.type === "pointExpand") return this.#z(e, r, i);
				if (r.type !== "point") return this.#A(e, "cannot be restored because the bookmark stored a different selection type.");
				let t = this.#N(e, "restore");
				if (!t) return this.#k(e);
				if (!Array.isArray(r.keyFields) || !Array.isArray(r.keys) || r.keys.some((e) => !Array.isArray(e))) return this.#A(e, "cannot be restored because the bookmark stores an invalid key tuple structure.");
				if (r.keyFields.length !== t.length || r.keyFields.some((e, n) => e !== t[n])) return this.#A(e, `cannot be restored because the bookmark uses key fields [${r.keyFields.join(", ")}] but the view now uses [${t.join(", ")}]. Update encoding.key or recreate the bookmark.`);
				let a = r.keys, o = this.#M(e.view);
				if (!o) return this.#A(e, "cannot be restored because the view does not expose data for key lookup.");
				if (!o.completed) return this.#V(o), this.#k(e);
				let s = i.toggle ? "multi" : "single", c;
				try {
					c = wt(s, t, a, (e, t) => o.findDatumByKey(e, t));
				} catch (r) {
					return String(r).includes("Duplicate key detected") ? this.#K(n, `cannot be restored because encoding.key fields [${t.join(", ")}] are not unique in the current data.`) : this.#K(n, `cannot be restored due to an error: ${r}`), this.#k(e);
				}
				return c.unresolved.length && this.#K(n, "has some points that could not be resolved. Ensure encoding.key is unique and present in the data."), c.selection;
			}
			if (ht(i)) {
				if (r.type !== "interval") return this.#A(e, "cannot be restored because the bookmark stored a different selection type.");
				let n = ut(i.encodings);
				this.#H(e.view, n, r.intervals);
				let a = this.#U(t.origin);
				return a && this.#H(e.view, n, a), n;
			}
			return this.#k(e);
		}
		return tt(n) ? r.type === "value" ? r.value : this.#j(e, "cannot be restored because the bookmark stored a different value type.") : this.#k(e);
	}
	#z(e, t, n) {
		if (!n.toggle) return this.#K(e.param, "cannot apply expansion because the target selection is not multi-point."), this.#k(e);
		if (t.operation !== "replace") return this.#K(e.param, `uses unsupported operation "${t.operation}". Only "replace" is supported in this version.`), this.#k(e);
		if (!this.#N(e, "restore")) return this.#k(e);
		let r = this.#M(e.view);
		if (!r) return this.#A(e, "cannot apply expansion because the view does not expose data.");
		if (!r.completed) return this.#V(r), this.#k(e);
		let i = this.#B(t);
		if (!i) return this.#k(e);
		try {
			let e = iA(_A(t), i);
			e = oA(e, t.partitionBy, i);
			let n = sA(e), a = [];
			return r.visitData((e) => {
				n(e) && a.push(e);
			}), pt(a);
		} catch (t) {
			return this.#K(e.param, `cannot apply expansion due to an error: ${t}`), this.#k(e);
		}
	}
	#B(e) {
		let t = e.origin, n = _t(this.#e, t.view);
		if (!n) {
			this.#J("the expansion origin view is missing in the current import scope.");
			return;
		}
		let r = fA(n, t);
		switch (r.reason) {
			case "ok":
				if (!r.datum) {
					this.#J("the expansion origin datum is missing in current data.");
					return;
				}
				return r.datum;
			case "missingCollector":
				this.#J("the expansion origin view does not expose data.");
				return;
			case "collectorNotCompleted":
				this.#V(r.collector);
				return;
			case "invalidOriginKeyTuple":
				this.#J("the expansion origin key tuple is invalid.");
				return;
			case "missingEncodingKey":
				this.#J("the expansion origin view does not define encoding.key.");
				return;
			case "incompatibleOriginKeyTuple":
				this.#J("the expansion origin key tuple is incompatible with current encoding.key.");
				return;
			case "legacyKeyFieldsMismatch":
				this.#J(`the expansion origin key fields [${r.legacyKeyFields.join(", ")}] differ from current encoding.key [${r.keyFields.join(", ")}].`);
				return;
			case "lookupError":
				this.#J("failed to resolve expansion origin datum: " + String(r.error));
				return;
			default: throw Error("Unknown origin resolution status: " + JSON.stringify(r));
		}
	}
	#V(e) {
		if (this.#p.has(e)) return;
		this.#p.add(e);
		let t = e.observe(() => {
			this.#p.delete(e), t(), this.#F(this.#y());
		});
		this.#o.push(t);
	}
	#H(e, t, n) {
		for (let [r, i] of Object.entries(n)) if (i) {
			let n = r, a = e.getScaleResolution(n);
			t.intervals[r] = [a?.fromComplex ? a.fromComplex(i[0]) : i[0], a?.fromComplex ? a.fromComplex(i[1]) : i[1]];
		}
	}
	#U(e) {
		if (!e || e.type !== "datum" || !e.intervalSources) return;
		let t = _t(this.#e, e.view);
		if (!t) {
			this.#J("the source view is missing. Using stored coordinates instead.");
			return;
		}
		let n = this.#M(t);
		if (!n) {
			this.#J("the source view does not expose data. Using stored coordinates instead.");
			return;
		}
		let r;
		try {
			r = n.findDatumByKey([e.keyField], [e.key]);
		} catch (e) {
			this.#J(`an error occurred: ${e}`);
			return;
		}
		if (!r) {
			this.#J("the origin datum is missing. Using stored coordinates instead.");
			return;
		}
		let i = {};
		for (let [t, n] of Object.entries(e.intervalSources)) {
			let e = n.start, a = n.end ?? n.start;
			if (!e || !a) continue;
			let o = nt(e), s = nt(a);
			i[t] = [o(r), s(r)];
		}
		return i;
	}
	#W(e) {
		return JSON.stringify(e ?? []);
	}
	#G(e, t) {
		this.#$(`Parameter "${e.name}" ${t}`);
	}
	#K(e, t) {
		this.#$(`Selection "${e.name}" ${t}`);
	}
	#q(e, t) {
		this.#Q(`Selection "${e.name}" ${t}`);
	}
	#J(e) {
		this.#$(`Cannot resolve selection origin: ${e}`);
	}
	#Y(e, t) {
		this.#$(`Cannot restore parameter "${e}" in import scope ${this.#W(t)}. The parameter is missing or no longer unique in that scope. Check import names and parameter names.`);
	}
	#X(e, t) {
		let n = e.param;
		Ye(n) && gt(Ge(n.select)) && (this.#N(e, "persist") || this.#u.add(t));
	}
	#Z(e, t) {
		let n = Ge(e.select);
		return gt(n) ? ot(t) ? !t.datum : mt(t) ? t.data.size === 0 : !0 : ht(n) ? !Rt(t) : !1;
	}
	#Q(e) {
		this.#l.has(e) || (this.#l.add(e), this.#s.add(e), !this.#d && (this.#d = !0, queueMicrotask(() => {
			this.#d = !1;
			let e = Array.from(this.#s);
			this.#s.clear(), e.length && Y(L`<p>
                        Some interactive parameters cannot be saved to bookmarks
                        or provenance. The visualization is still usable, but
                        those selections will not be preserved.
                    </p>
                    <p>
                        To fix this, add <code>encoding.key</code> or set
                        <code>persist: false</code> on ephemeral params.
                    </p>
                    <ul>
                        ${e.map((e) => L`<li>${e}</li>`)}
                    </ul>`, {
				title: "Bookmark persistence warnings",
				type: "warning"
			});
		})));
	}
	#$(e) {
		this.#c.add(e), !this.#f && (this.#f = !0, queueMicrotask(() => {
			this.#f = !1;
			let e = Array.from(this.#c);
			this.#c.clear(), e.length && Y(L`<p>
                        The visualization loaded, but some parameter state from
                        the bookmark could not be restored. Selections and bound
                        inputs may differ from the saved state.
                    </p>
                    <ul>
                        ${e.map((e) => L`<li>${e}</li>`)}
                    </ul>`, {
				title: "Parameter restore warnings",
				type: "warning"
			});
		}));
	}
};
function _A(e) {
	if ("rule" in e && e.rule) return e.rule;
	if ("predicate" in e && e.predicate) return e.predicate;
	throw Error("Point expansion payload must contain either 'rule' or 'predicate'.");
}
//#endregion
//#region ../app/src/state/paramActionInfo.js
var vA = /* @__PURE__ */ new WeakMap();
function yA(e, t) {
	let n = Aw.actions.paramChange.match(e), r = Aw.actions.expandPointSelection.match(e);
	if (!n && !r) return;
	let i = e.payload, a = i.selector, o = r && "rule" in i ? { rule: i.rule } : r ? { predicate: i.predicate } : {}, s = r ? {
		type: "pointExpand",
		operation: i.operation,
		partitionBy: i.partitionBy,
		origin: i.origin,
		...o
	} : i.value, c = i.origin, l = kA(Et, t, a), u = l ? l.view : void 0, d = u ? SA(u, t) : null, f = bA(e, u, a, s, c, t);
	return {
		title: d ? L`${f} in ${d}` : f,
		icon: OA(s)
	};
}
function bA(e, t, n, r, i, a) {
	let o = QS(a, n);
	if (r.type === "value") return L`Set <strong>${o}</strong> =
            <strong>${CA(r.value)}</strong>${xA(i, a)}`;
	if (r.type === "point") return r.keys.length === 0 ? L`Clear selection
                <strong>${o}</strong> ${xA(i, a)}` : r.keys.length === 1 ? L`Select <strong>${o}</strong> =
                ${wA(TA(r.keys[0]))}${xA(i, a)}` : L`Select <strong>${o}</strong> (${wA(r.keys.length)}
            points)${xA(i, a)}`;
	if (r.type === "pointExpand") {
		let t = AA(r.operation), n = jA(RA(r), {
			action: e,
			root: a,
			origin: r.origin
		});
		return L`${t}
            <strong>${o}</strong>
            ${LA(r.partitionBy)} by ${n}`;
	}
	if (r.type === "interval") {
		let e = r.intervals ?? {}, n = e.x, s = e.y, c = DA(n && t ? US(t, n) : EA(n), s ? EA(s) : null);
		return c ? L`Brush
            <strong>${o}</strong>
            ${c}${xA(i, a)}` : L`Clear selection
                <strong>${o}</strong> ${xA(i, a)}`;
	}
	return L`Update <strong>${o}</strong>`;
}
function xA(e, t) {
	if (!e || e.type !== "datum") return L``;
	let n = t ? kA(_t, t, e.view) : null;
	return n ? L` from ${SA(n, t)}` : L``;
}
function SA(e, t) {
	let n = (e.getTitleText ? e.getTitleText() : void 0) || e.explicitName || e.spec && e.spec.name || e.name || "view";
	return L`<strong>${ZS(t, e, String(n))}</strong>`;
}
function CA(e) {
	return Fa(e) || typeof e == "number" || typeof e == "boolean" ? String(e) : JSON.stringify(e);
}
function wA(e) {
	return L`<strong>${e}</strong>`;
}
function TA(e) {
	return e.length === 1 ? CA(e[0]) : "(" + e.map((e) => CA(e)).join(", ") + ")";
}
function EA(e) {
	return e ? `${e[0]} \u2013 ${e[1]}` : null;
}
function DA(e, t) {
	return e && t ? "(x: " + e + ", y: " + t + ")" : e ? "(" + e + ")" : t ? "(y: " + t + ")" : null;
}
function OA(e) {
	switch (e.type) {
		case "point":
		case "pointExpand": return Ud;
		case "interval": return Of;
		case "value": return Zd;
		default: return;
	}
}
function kA(e, ...t) {
	try {
		return e(...t);
	} catch {
		return;
	}
}
function AA(e) {
	switch (e) {
		case "replace": return "Replace";
		case "add": return "Add expanded";
		case "remove": return "Remove expanded";
		case "toggle": return "Toggle expanded";
		default: return "Replace";
	}
}
function jA(e, t) {
	return MA(aA(e), t);
}
function MA(e, t) {
	if (nA(e)) return L`not (${MA(e.not, t)})`;
	if (tA(e)) return FA(e.and.map((e) => MA(e, t)), " and ");
	if (eA(e)) return FA(e.or.map((e) => MA(e, t)), " or ");
	if (e.op === "eq") {
		if ("value" in e) return L`${NA(e.field)}
                <span class="operator">=</span>
                <strong>${CA(e.value)}</strong>`;
		if ("valueFromField" in e) {
			let n = IA(t.action, t.root, t.origin, e.valueFromField);
			if (n !== void 0) return L`${NA(e.field)}
                    <span class="operator">=</span>
                    <strong>${CA(n)}</strong>
                    (from clicked item)`;
			{
				let t = e.valueFromField === e.field ? "same as clicked item" : "same as clicked " + e.valueFromField;
				return L`${NA(e.field)}
                    <span class="operator">=</span>
                    <strong>${t}</strong>`;
			}
		}
	} else if (e.op === "in") return L`${NA(e.field)}
            <span class="operator">in</span>
            ${PA(e.values)}`;
	return L`predicate`;
}
function NA(e) {
	return L`<em>${e}</em>`;
}
function PA(e) {
	return L`{${e.map((e, t) => L`${t > 0 ? ", " : ""}<strong>${CA(e)}</strong>`)}}`;
}
function FA(e, t) {
	return L`${e.map((e, n) => L`${n > 0 ? t : ""}${e}`)}`;
}
function IA(e, t, n, r) {
	let i = vA.get(e);
	if (i?.has(r)) return i.get(r);
	if (!t) return;
	let a = kA(_t, t, n.view);
	if (!a) return;
	let o = fA(a, n);
	if (o.reason !== "ok") return;
	let s = o.datum;
	if (!s) return;
	let c = cA(r)(s);
	if (c !== void 0) return i || (i = /* @__PURE__ */ new Map(), vA.set(e, i)), i.set(r, c), c;
}
function LA(e) {
	if (!e?.length) return L` across all`;
	let t = e.map((e) => e.toLowerCase());
	return t.some((e) => e.includes("sample")) ? L` in current sample` : t.some((e) => e.includes("patient")) ? L` in current patient` : L` in current scope`;
}
function RA(e) {
	if ("rule" in e && e.rule) return e.rule;
	if ("predicate" in e && e.predicate) return e.predicate;
	throw Error("Point expansion payload must contain either 'rule' or 'predicate'.");
}
//#endregion
//#region ../app/src/viewSelectorConstraints.js
function zA(e) {
	let t = [...Ut(e)];
	return BA(e, t), VA(e, t), HA(e, t), t;
}
function BA(e, t) {
	Kt(e, (e) => {
		let n = Gi(e);
		if (!(!n || typeof n != "object") && (typeof n.group != "string" || n.group.length === 0)) {
			let n = xt(e);
			t.push({
				message: "Configurable visibility group must be a non-empty string in " + GA(n) + " for " + e.getPathString() + ".",
				scope: n
			});
		}
	});
}
function VA(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	Kt(e, (e) => {
		let i = xt(e), a = WA(i);
		if (n.has(a) || (n.set(a, i), r.set(a, /* @__PURE__ */ new Map())), !qi(e)) return;
		let o = e.explicitName;
		if (!o) {
			if (!Ji(e)) return;
			t.push({
				message: "Configurable view must have an explicit name in " + GA(i) + ".",
				scope: i
			});
			return;
		}
		let s = r.get(a), c = s.get(o);
		c ? c.push(e) : s.set(o, [e]);
	});
	for (let [e, i] of r) {
		let r = n.get(e);
		for (let [e, n] of i) {
			if (n.length <= 1) continue;
			let i = n.map((e) => e.getPathString()).join(", ");
			t.push({
				message: "Configurable view name \"" + e + "\" is not unique within " + GA(r) + ". Found in: " + i + ".",
				scope: r
			});
		}
	}
}
function HA(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	Kt(e, (e) => {
		let t = Pt(e), i = t ? t.name : void 0;
		if (typeof i != "string" || !i.length || !UA(e)) return;
		let a = xt(e);
		if (!a.length) return;
		let o = a.slice(0, a.length - 1), s = WA(o);
		n.has(s) || (n.set(s, o), r.set(s, /* @__PURE__ */ new Map()));
		let c = r.get(s);
		c.set(i, (c.get(i) ?? 0) + 1);
	});
	for (let [e, i] of r) {
		let r = n.get(e);
		for (let [e, n] of i) n <= 1 || t.push({
			message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + GA(r) + ".",
			scope: r
		});
	}
}
function UA(e) {
	let t = !1;
	return Kt(e, (e) => {
		if (qi(e) && (e.explicitName || Ji(e))) return t = !0, ct;
	}), t;
}
function WA(e) {
	return JSON.stringify(e);
}
function GA(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
//#endregion
//#region ../app/src/state/selectionExpansionContextMenu.js
function KA({ viewRoot: e, intentExecutor: t }) {
	let n = !1, r = (r) => {
		if (r.stopped || qA(r.target)) return;
		let i = xw(e, e.context.getCurrentHover());
		if (i.status === "disabled" && i.reason === "multiplePointSelectionParams") {
			n ||= (console.warn("Selection expansion is disabled because multiple multi-point selection parameters are configured in the same UnitView."), !0);
			return;
		}
		i.status === "available" && (Qy({ items: [Mw(i.context, (e) => t.dispatch(e))] }, r.mouseEvent), r.stopPropagation());
	};
	return e.addInteractionListener("contextmenu", r), () => e.removeInteractionListener("contextmenu", r);
}
function qA(e) {
	return e ? e.getLayoutAncestors().some((e) => e instanceof Bw) : !1;
}
//#endregion
//#region ../app/src/appKeyboardShortcuts.js
function JA({ viewRoot: e, shortcuts: t }) {
	e.context.addKeyboardListener("keydown", (e) => XA(e, t));
}
function YA({ provenance: e, focusSearchField: t }) {
	return [{
		code: "KeyZ",
		isEnabled: () => e.isUndoable(),
		run: () => (e.undo(), !0)
	}, {
		code: "KeyF",
		run: () => t()
	}];
}
function XA(e, t) {
	if (e.defaultPrevented) return !1;
	for (let n of t) if (ZA(e, n.code) && !(n.allowEditableTarget !== !0 && QA(e.target)) && !(n.isEnabled && !n.isEnabled()) && n.run(e) !== !1) return e.preventDefault(), !0;
	return !1;
}
function ZA(e, t) {
	return e.code == t && !e.repeat && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
}
function QA(e) {
	let t = e;
	if (!e || typeof e != "object" || typeof t.tagName != "string") return !1;
	if (t.isContentEditable === !0) return !0;
	let n = t.tagName.toUpperCase();
	return n == "INPUT" || n == "TEXTAREA" || n == "SELECT" ? !0 : typeof t.closest == "function" ? !!t.closest.call(e, "input, textarea, select, [contenteditable=true], [contenteditable='true']") : !1;
}
//#endregion
//#region ../app/src/appUiRegistry.js
var $A = class extends EventTarget {
	constructor() {
		super(), this.toolbarButtons = /* @__PURE__ */ new Set(), this.toolbarMenuItems = /* @__PURE__ */ new Set(), this.#n = void 0, this.#r = void 0;
	}
	toolbarButtons;
	toolbarMenuItems;
	#e = /* @__PURE__ */ new Map();
	#t = void 0;
	#n;
	#r;
	attachAppShell(e) {
		this.#n = e.querySelector(".genome-spy-side-panel-host") ?? this.#i(e), typeof ResizeObserver == "function" && (this.#r?.disconnect(), this.#r = new ResizeObserver(() => {
			this.#t && this.#a();
		}), this.#r.observe(e)), this.#a();
	}
	dispose() {
		this.#r?.disconnect(), this.#r = void 0;
		for (let e of this.#e.values()) e.element.remove();
		this.#e.clear(), this.#t = void 0, this.#n = void 0;
	}
	registerToolbarButton(e) {
		return this.toolbarButtons.add(e), this.#s(), () => {
			this.toolbarButtons.delete(e) && this.#s();
		};
	}
	registerToolbarMenuItem(e) {
		return this.toolbarMenuItems.add(e), this.#s(), () => {
			this.toolbarMenuItems.delete(e) && this.#s();
		};
	}
	registerSidePanel(e) {
		return this.#e.set(e.id, e), this.#a(), {
			show: () => {
				this.#t = e.id, this.#a();
			},
			hide: () => {
				this.#t === e.id && (this.#t = void 0, this.#a());
			},
			toggle: () => this.#t === e.id ? (this.#t = void 0, this.#a(), !1) : (this.#t = e.id, this.#a(), !0),
			isVisible: () => this.#t === e.id,
			dispose: () => {
				this.#e.delete(e.id) && (this.#t === e.id && (this.#t = void 0), e.element.remove(), this.#a());
			}
		};
	}
	#i(e) {
		let t = document.createElement("div");
		return t.className = "genome-spy-side-panel-host", e.append(t), t;
	}
	#a() {
		if (!this.#n) return;
		let e = this.#t ? this.#e.get(this.#t) : void 0;
		for (let t of this.#e.values()) t !== e && this.#c(t.element), t.element.parentElement !== this.#n && this.#n.append(t.element), t.element.hidden = t !== e;
		if (!e) {
			this.#n.classList.remove("is-open"), this.#n.style.removeProperty("width"), this.#s();
			return;
		}
		this.#n.classList.add("is-open"), this.#n.style.width = e.preferredWidth ?? "min(36vw, 600px)", this.#o(), this.#s();
	}
	#o() {
		if (!this.#n) return;
		let e = Math.round(this.#n.getBoundingClientRect().width);
		this.#n.style.width = e + "px";
	}
	#s() {
		this.dispatchEvent(new Event("change"));
	}
	#c(e) {
		let t = document.activeElement;
		if (!t || t === document.body || !e.contains(t)) return;
		let n = t;
		for (; n.shadowRoot?.activeElement;) n = n.shadowRoot.activeElement;
		e.contains(n) && n instanceof HTMLElement && n.blur();
	}
};
//#endregion
//#region ../app/src/app.js
f.mergeFacets = Ak;
var ej = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	#n = !1;
	constructor(e, t, n = {}) {
		this.rootSpec = t, this.options = {
			embedMode: "standalone",
			...n,
			inputBindingContainer: "none"
		}, this.ui = new $A(), this.#r(), this.#a(e), this.#i(), Le(L`<div class="genome-spy-app">
                <genome-spy-toolbar .app=${this}></genome-spy-toolbar>
                <div class="genome-spy-workspace">
                    <div class="genome-spy-container"></div>
                    ${this.isEmbedded() ? I : L`<div class="genome-spy-side-panel-host"></div>`}
                </div>
            </div>`, this.appContainer), this.isEmbedded() || this.ui.attachAppShell(this.appContainer.querySelector(".genome-spy-app")), this.appContainer.querySelector(".genome-spy-app").addEventListener("query-dependency", (e) => {
			e.detail.name == "app" && (e.detail.setter(this), e.stopPropagation());
		}), this.genomeSpy = new Ee(this.appContainer.getElementsByClassName("genome-spy-container")[0], this.rootSpec, this.options), this.debug = {
			getViewRoot: () => this.genomeSpy?.viewRoot,
			getModules: () => this.getDebugModules()
		}, this.genomeSpy.viewFactory.addViewType(MS, ((e, t, n, r, i) => new Bw(e, t, n, r, i, this.provenance, this.intentExecutor, hk(this)))), this.#o();
	}
	getAgentApi() {
		return this.#e ||= import("./agentApi-WXnEr73i.js").then((e) => e.createAgentApi(this)), this.#e;
	}
	async getDebugModules() {
		return import("./debug-jlJzKBR-.js");
	}
	#r() {
		this.store = Lk(), this.intentExecutor = new Nk(this.store), this.provenance = new Dk(this.store), this.intentPipeline = new Rk({
			store: this.store,
			provenance: this.provenance,
			intentExecutor: this.intentExecutor
		}), gS(this.store, Aw.name);
	}
	#i() {
		this.localBookmarkDatabase = this.isEmbedded() ? void 0 : typeof this.rootSpec.specId == "string" ? new _T(this.rootSpec.specId) : void 0, this.globalBookmarkDatabase = void 0;
	}
	#a(e) {
		this.appContainer = e, this.isFullPage() ? (this.appContainer.style.margin = "0", this.appContainer.style.padding = "0", this.appContainer.style.overflow = "hidden", nj(ee)) : this.appContainer.style.position = "relative";
	}
	#o() {
		let e = {}, t = (t) => t.viewSettings?.visibilities ?? e, n = e, r, i = e, a = () => {
			let e = t(this.store.getState()), a = this.genomeSpy.viewRoot;
			return e === n && a === r ? i : (n = e, r = a, i = a ? ia(a, e) : e, i);
		}, o = this.genomeSpy.viewVisibilityPredicate;
		this.genomeSpy.viewVisibilityPredicate = (e) => {
			let t = Qi(a(), e);
			return t === void 0 ? o(e) : t;
		};
	}
	#s() {
		let e = this.genomeSpy.viewRoot;
		if (!e) return;
		let t = zA(e);
		t.length && Y(L`<p>
                    The visualization loaded, but the view specification has
                    addressing problems. View visibility toggles, bookmarks, and
                    parameter bindings may be disabled or behave incorrectly
                    until these issues are fixed.
                </p>
                <ul>
                    ${t.map((e) => L`<li>${e.message}</li>`)}
                </ul>`, {
			title: "View specification warnings",
			type: "warning"
		});
	}
	toggleFullScreen() {
		document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : this.appContainer.requestFullscreen();
	}
	isFullPage() {
		return this.appContainer == document.body;
	}
	isEmbedded() {
		return this.options.embedMode === "embedded";
	}
	finalize() {
		if (!this.#n) {
			this.#n = !0;
			for (let e of Array.from(this.#t).reverse()) e();
			this.#t.clear(), this.ui.dispose();
		}
	}
	#c(e) {
		this.#t.add(e);
	}
	async launch() {
		let e = this.isEmbedded() ? Promise.resolve([]) : this.rootSpec.bookmarks?.remote ? ne({ baseURL: this.rootSpec.baseUrl }).load(this.rootSpec.bookmarks.remote.url).then((e) => Promise.resolve(JSON.parse(e))) : Promise.resolve([]);
		if (this.isEmbedded() || await this.#l(e), !await this.genomeSpy.launch()) return;
		this.#s();
		let t = this.genomeSpy.viewRoot;
		if (!t) throw Error("No view root after launch");
		this.paramProvenanceBridge = new gA({
			root: t,
			store: this.store,
			intentExecutor: this.intentExecutor
		}), t.registerDisposer(() => {
			this.paramProvenanceBridge.dispose();
		}), this.provenance.addActionInfoSource((e) => yA(e, t)), JA({
			viewRoot: t,
			shortcuts: YA({
				provenance: this.provenance,
				focusSearchField: () => {
					let e = this.appContainer.querySelector("genome-spy-search-field");
					return e && "focusInput" in e && typeof e.focusInput == "function" ? (e.focusInput(), !0) : !1;
				}
			})
		}), t.registerDisposer(KA({
			viewRoot: t,
			intentExecutor: this.intentExecutor
		}));
		let n = this.getSampleView();
		if (n) try {
			await Gk(n, this.intentPipeline);
		} catch (e) {
			console.error(e), Y("Could not load initial metadata sources: " + String(e), {
				title: "Metadata source warning",
				type: "warning"
			});
		}
		if (this.appContainer.querySelector("canvas").setAttribute("tabindex", "-1"), this.#c(Vx(this.store, (e) => e.viewSettings?.visibilities, Hx(() => {
			if (this.#n) return;
			this.genomeSpy.initializeVisibleViewData(), this.genomeSpy.viewRoot._invalidateCacheByPrefix("size", "progeny");
			let e = this.genomeSpy.viewRoot.context;
			rj(this.genomeSpy.viewRoot), e.highlightView(null), e.requestLayoutReflow();
		}))), this.#c(Xk({
			store: this.store,
			intentPipeline: this.intentPipeline,
			provenance: this.provenance
		})), !this.isEmbedded()) {
			try {
				await this.#f(e);
			} catch (e) {
				throw Error(`Cannot load remote bookmarks: ${e}`, { cause: e });
			}
			try {
				await this._restoreStateFromUrlOrBookmark();
			} catch (e) {
				Y(e.toString());
			}
			let t = () => this._restoreStateFromUrl().catch((e) => Y(e.toString()));
			window.addEventListener("hashchange", t, !1), this.#c(() => window.removeEventListener("hashchange", t, !1));
			let n = he(() => {
				this.#n || this._updateStateToUrl();
			}, 500, !1);
			this.#c(this.store.subscribe(n));
			for (let [, e] of this.genomeSpy.getNamedScaleResolutions()) e.isZoomable() && (e.addEventListener("domain", n), this.#c(() => e.removeEventListener("domain", n)));
		}
		let r = jt(this.genomeSpy.spec.description ?? []);
		this.isFullPage() && r.length > 0 && (document.title = "GenomeSpy - " + r), this.store.dispatch(Pk.actions.setInitialized());
	}
	async #l(e) {
		let t = window.location.hash;
		if (t) try {
			let n = await this.#u(t, e);
			if (n?.viewSettings) {
				let e = $i(n.viewSettings);
				this.store.dispatch(Wi.actions.setViewSettings(e));
			}
		} catch {}
	}
	async _restoreStateFromUrlOrBookmark() {
		let e = this.rootSpec.bookmarks?.remote, t = this.globalBookmarkDatabase;
		if (!await this._restoreStateFromUrl() && e && t) {
			let n = e.initialBookmark ?? (e.tour && (await t.getNames())[0]);
			if (n) {
				let r = await t.get(n);
				if (!r) throw Error(`No such bookmark: ${n}`);
				e.tour ? await bk(r, this, {
					mode: "tour",
					database: t,
					afterTourBookmark: e.afterTourBookmark
				}) : await _k(r, this);
			}
		}
	}
	_updateStateToUrl() {
		let e = {
			actions: [],
			scaleDomains: {}
		}, t = this.provenance.getBookmarkableActionHistory();
		t?.length && (e.actions = t), e.scaleDomains = pk(this.genomeSpy, (e) => e.isZoomed());
		let n = this.store.getState().viewSettings, r = this.genomeSpy.viewRoot;
		if (r) {
			let t = ta(r, n);
			t && (e.viewSettings = t);
		}
		let i = e.actions.length || Object.keys(e.scaleDomains).length || e.viewSettings ? kx(e) : "";
		window.history.replaceState(void 0, document.title, window.location.pathname + window.location.search + i);
	}
	async _restoreStateFromUrl() {
		let e = window.location.hash;
		if (e && e.length > 0) try {
			let t = await this.#d(e);
			if (!t) return !1;
			let { entry: n, mode: r, database: i, afterTourBookmark: a } = t;
			return await bk(n, this, {
				mode: r,
				database: i,
				afterTourBookmark: a
			}), !0;
		} catch (e) {
			console.error(e), Y(L`<p>Cannot restore the state:</p>
                        <p>${e}</p>`);
		}
		return !1;
	}
	async #u(e, t) {
		if (e.startsWith("#bookmark:")) {
			if (!this.rootSpec.bookmarks?.remote) return;
			let n = this.globalBookmarkDatabase ?? (t ? await this.#f(t) : void 0);
			if (!n) return;
			let r = e.match(/^#bookmark:(.+)$/)?.[1];
			if (!r) return;
			let i = (await n.getNames()).find((e) => e.replaceAll(" ", "-") == r);
			if (!i) throw Error(`No such bookmark: ${r}`);
			let a = await n.get(i);
			if (!a) throw Error(`No such bookmark: ${i}`);
			return a;
		}
		return Ax(e);
	}
	async #d(e) {
		let t = await this.#u(e);
		if (t) {
			if (e.startsWith("#bookmark:")) {
				let e = this.rootSpec.bookmarks?.remote;
				return {
					entry: t,
					mode: "tour",
					database: this.globalBookmarkDatabase,
					afterTourBookmark: e?.afterTourBookmark
				};
			}
			return {
				entry: t,
				mode: "shared",
				database: this.localBookmarkDatabase
			};
		}
	}
	async #f(e) {
		let t = await e;
		if (t.length) return this.globalBookmarkDatabase ||= new Mk(t, { baseUrl: tj(this.rootSpec) }), this.globalBookmarkDatabase;
	}
	getSampleView() {
		if (!this.genomeSpy?.viewRoot) return;
		let e;
		return this.genomeSpy.viewRoot.visit((t) => {
			if (t instanceof Bw) return e = t, ct;
		}), e;
	}
};
function tj(e) {
	let t = e.bookmarks?.remote;
	if (t) return Ke(He(e.baseUrl, t.url));
}
function nj(e) {
	let t = document.querySelector("head"), n = document.createElement("link");
	n.setAttribute("rel", "shortcut icon"), n.setAttribute("href", e), t.appendChild(n);
}
function rj(e) {
	e.visit((e) => {
		e.isVisible() || e.facetCoords.clear();
	});
}
//#endregion
//#region ../app/src/index.js
async function ij(e, t, n = {}) {
	let r;
	if (Fa(e)) {
		if (r = document.querySelector(e), !r) throw Error(`No such element: ${e}`);
	} else if (e instanceof HTMLElement) r = e;
	else throw Error(`Invalid element: ${e}`);
	let i, a, o = [];
	try {
		let e = ka(t) ? t : await ve(t);
		e.baseUrl ??= "", e.padding ??= 10;
		let { plugins: s = [], ...c } = {
			powerPreference: "high-performance",
			...n
		};
		a = new ej(r, e, c), i = a.genomeSpy, o = await oj(a, s), aj(i, c), await a.launch();
	} catch (e) {
		r.innerText = e.toString(), console.error(e);
	}
	return {
		views: ue(i),
		datasets: we(i),
		debug: a.debug,
		finalize() {
			let e = o;
			o = [];
			for (let t = e.length - 1; t >= 0; --t) e[t]();
			for (a?.finalize(), i?.destroy(), i = void 0; r.firstChild;) r.firstChild.remove();
		},
		addEventListener(e, t) {
			i.addEventListener(e, t);
		},
		removeEventListener(e, t) {
			i.removeEventListener(e, t);
		},
		getScaleResolutionByName(e) {
			return i.getNamedScaleResolutions().get(e);
		},
		getParam: i.getParam.bind(i),
		awaitVisibleLazyData: i.awaitVisibleLazyData.bind(i),
		getRenderedBounds: i.getRenderedBounds.bind(i),
		updateNamedData: i.updateNamedData.bind(i),
		getLogicalCanvasSize: i.getLogicalCanvasSize.bind(i),
		exportCanvas: i.exportCanvas.bind(i)
	};
}
function aj(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function oj(e, t) {
	let n = [];
	try {
		for (let r of t) {
			let t = await r.install(e);
			typeof t == "function" && n.push(t);
		}
	} catch (e) {
		for (let e = n.length - 1; e >= 0; --e) n[e]();
		throw e;
	}
	return n;
}
//#endregion
//#region ../app/dist/style.css?inline
var sj = ":root,:host{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Free\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Free\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Pro\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Pro\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-light:normal 300 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Duotone\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-thin:normal 100 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-duotone-solid:normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-light:normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\"}svg.svg-inline--fa:not(:root),svg.svg-inline--fa:not(:host){box-sizing:content-box;overflow:visible}.svg-inline--fa{display:var(--fa-display,inline-block);vertical-align:-.125em;height:1em;overflow:visible}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{margin:auto;position:absolute;inset:0}.fa-layers-counter,.fa-layers-text{text-align:center;display:inline-block;position:absolute}.fa-layers{text-align:center;vertical-align:-.125em;width:1em;height:1em;display:inline-block;position:relative}.fa-layers svg.svg-inline--fa{transform-origin:50%}.fa-layers-text{transform-origin:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:100% 0;overflow:hidden}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:100% 100%;top:auto}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:0 100%;top:auto;right:auto}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:100% 0}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:0 0}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{vertical-align:.225em;font-size:.625em;line-height:.1em}.fa-xs{vertical-align:.125em;font-size:.75em;line-height:.08333em}.fa-sm{vertical-align:.05357em;font-size:.875em;line-height:.07143em}.fa-lg{vertical-align:-.075em;font-size:1.25em;line-height:.05em}.fa-xl{vertical-align:-.125em;font-size:1.5em;line-height:.04167em}.fa-2xl{vertical-align:-.1875em;font-size:2em;line-height:.03125em}.fa-fw{text-align:center;width:1.25em}.fa-ul{margin-left:var(--fa-li-margin,2.5em);padding-left:0;list-style-type:none}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));text-align:center;width:var(--fa-li-width,2em);line-height:inherit;position:absolute}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28, .84, .42, 1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4, 0, .6, 1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4, 0, .6, 1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-bounce,.fa-fade,.fa-beat-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-iteration-count:1;animation-delay:-1ms}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1)translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1), var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9), var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05), var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1, 1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1)translateY(0)}to{transform:scale(1)translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0), var(--fa-flip-y,1), var(--fa-flip-z,0), var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}8%,24%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{vertical-align:middle;width:2.5em;height:2em;display:inline-block;position:relative}.fa-stack-1x,.fa-stack-2x{z-index:var(--fa-stack-z-index,auto);margin:auto;position:absolute;inset:0}.svg-inline--fa.fa-stack-1x{width:1.25em;height:1em}.svg-inline--fa.fa-stack-2x{width:2.5em;height:2em}.fa-inverse{color:var(--fa-inverse,#fff)}.sr-only,.fa-sr-only,.sr-only-focusable:not(:focus),.fa-sr-only-focusable:not(:focus){clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}:root{--gs-font-family:system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--gs-font-size:14px;--gs-basic-spacing:10px}.gs-input-binding{grid-template-columns:max-content max-content;justify-items:start;gap:.3em 1em;display:grid}.gs-input-binding>select,.gs-input-binding>input:not([type=checkbox]){width:100%}.gs-input-binding input[type=range]+span{font-variant-numeric:tabular-nums;min-width:2.2em;margin-left:.3em;display:inline-block}.gs-input-binding input[type=range],.gs-input-binding input[type=radio]{vertical-align:text-bottom}.gs-input-binding .radio-group{align-items:center;display:flex}.gs-input-binding .description{color:#777;grid-column:1/-1;max-width:26em;margin-top:-.5em;font-size:90%}.gs-input-bindings{flex-basis:content;padding:10px;font-size:14px}.gs-menu,.gs-context-menu,.gs-dropdown-menu{z-index:100;cursor:default;background:#f6f6f6;border:#e0e0e0;border-radius:2px;max-height:calc(100vh - 60px);margin:0;padding:7px 0;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:13px;line-height:22px;overflow-y:auto;box-shadow:0 3px 15px #00000036}.gs-menu li,.gs-context-menu li,.gs-dropdown-menu li{padding:0;list-style:none;display:block;position:relative}.gs-menu li.active>:is(a:first-child,.submenu-item),.gs-context-menu li.active>:is(a:first-child,.submenu-item),.gs-dropdown-menu li.active>:is(a:first-child,.submenu-item){background-color:#e8e8e8}.gs-menu li>:is(a:first-child,label,.submenu-item):hover,.gs-context-menu li>:is(a:first-child,label,.submenu-item):hover,.gs-dropdown-menu li>:is(a:first-child,label,.submenu-item):hover{background-color:#e0e0e0}.gs-menu li>span.disabled-item,.gs-menu li>a:first-child,.gs-context-menu li>span.disabled-item,.gs-context-menu li>a:first-child,.gs-dropdown-menu li>span.disabled-item,.gs-dropdown-menu li>a:first-child{display:block}.gs-menu li>span.disabled-item svg:first-child,.gs-menu li>a:first-child svg:first-child,.gs-context-menu li>span.disabled-item svg:first-child,.gs-context-menu li>a:first-child svg:first-child,.gs-dropdown-menu li>span.disabled-item svg:first-child,.gs-dropdown-menu li>a:first-child svg:first-child,.gs-menu li>.submenu-item svg:first-child,.gs-context-menu li>.submenu-item svg:first-child,.gs-dropdown-menu li>.submenu-item svg:first-child{width:1em;margin-right:.2em}.gs-menu .context,.gs-context-menu .context,.gs-dropdown-menu .context{color:#666;font-size:.9em}.gs-menu .context:before,.gs-context-menu .context:before,.gs-dropdown-menu .context:before{content:\"(\"}.gs-menu .context:after,.gs-context-menu .context:after,.gs-dropdown-menu .context:after{content:\")\"}.gs-menu .menu-divider,.gs-context-menu .menu-divider,.gs-dropdown-menu .menu-divider{border-top:1px solid #e0e0e0;margin:5px 0}.gs-menu .menu-header,.gs-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label),.gs-context-menu .menu-header,.gs-context-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label),.gs-dropdown-menu .menu-header,.gs-dropdown-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label){padding-left:15px;padding-right:15px}.gs-menu .menu-header,.gs-context-menu .menu-header,.gs-dropdown-menu .menu-header{color:#666;font-size:12px}.gs-menu li>:is(div.submenu-item,.choice-item),.gs-context-menu li>:is(div.submenu-item,.choice-item),.gs-dropdown-menu li>:is(div.submenu-item,.choice-item){justify-content:space-between;align-items:center;display:flex}.gs-menu li>:is(div.submenu-item,.choice-item)>:first-child,.gs-context-menu li>:is(div.submenu-item,.choice-item)>:first-child,.gs-dropdown-menu li>:is(div.submenu-item,.choice-item)>:first-child{flex-grow:1}.gs-menu li>.submenu-item:after,.gs-context-menu li>.submenu-item:after,.gs-dropdown-menu li>.submenu-item:after{content:\"\";border-top:.4em solid #0000;border-bottom:.4em solid #0000;border-left:.4em solid #000;width:0;height:0;margin-left:1em}.gs-menu li .kbd-shortcut,.gs-context-menu li .kbd-shortcut,.gs-dropdown-menu li .kbd-shortcut{color:#666;background-color:#ffffff80;border:1px solid #aaa;border-bottom-width:2px;border-radius:3px;margin-left:.5em;padding:3px;font-size:.9em;line-height:.7em}.gs-menu li>.disabled-item,.gs-context-menu li>.disabled-item,.gs-dropdown-menu li>.disabled-item{color:#999}.gs-menu a.menu-ellipsis,.gs-context-menu a.menu-ellipsis,.gs-dropdown-menu a.menu-ellipsis{color:#707070;background-color:#e0e0e0;border-radius:3em;align-items:center;height:22px;padding:0;display:flex;position:absolute;top:0;right:7.5px}.gs-menu a.menu-ellipsis svg,.gs-context-menu a.menu-ellipsis svg,.gs-dropdown-menu a.menu-ellipsis svg{width:22px;margin:0}.gs-menu a.menu-ellipsis:hover,.gs-context-menu a.menu-ellipsis:hover,.gs-dropdown-menu a.menu-ellipsis:hover{background-color:#e9e9e9}.gs-menu li:not(:hover) a.menu-ellipsis,.gs-context-menu li:not(:hover) a.menu-ellipsis,.gs-dropdown-menu li:not(:hover) a.menu-ellipsis{display:none}.gs-menu .gs-input-binding,.gs-context-menu .gs-input-binding,.gs-dropdown-menu .gs-input-binding{margin:0 15px;line-height:normal}.gs-menu .gs-input-binding .description,.gs-context-menu .gs-input-binding .description,.gs-dropdown-menu .gs-input-binding .description{margin-bottom:.2em}.gs-dropdown-menu-right{right:0}.gs-context-menu-backdrop{z-index:100;position:fixed;inset:0}.gs-context-menu{z-index:100;position:fixed}.gs-dropdown-menu{z-index:1;width:max-content;display:none;position:absolute;overflow:auto}.gs-dropdown-menu ul{padding-left:1.5em;list-style:none}.gs-dropdown-menu>li>ul{padding-left:0}label.checkbox{align-items:center;display:flex}label.checkbox input[type=checkbox]{flex:none;margin-right:.5em}:root{--gs-theme-primary:#6c82ab;--gs-theme-on-primary:#fff}.genome-spy-app{flex-direction:column;display:flex;position:absolute;inset:0}body>.genome-spy-app{background-color:#fff}.genome-spy-app{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:14px}.genome-spy-app .genome-spy-workspace{flex:auto;grid-template-columns:minmax(0,1fr) auto;min-width:0;min-height:0;display:grid}.genome-spy-app .genome-spy-container{min-width:0;min-height:0;position:relative;overflow:hidden}.genome-spy-app .genome-spy-side-panel-host{border-left:1px solid var(--gs-dialog-stroke-color,#d0d0d0);min-height:0;display:none;overflow:hidden}.genome-spy-app .genome-spy-side-panel-host.is-open{opacity:1;transition:opacity .26s,transform .28s;display:block;transform:translate(0)}@starting-style{.genome-spy-app .genome-spy-side-panel-host.is-open{opacity:0;transform:translate(20px)}}@media (prefers-reduced-motion:reduce){.genome-spy-app .genome-spy-side-panel-host.is-open{transition:none}}.gs-toolbar,.gs-toolbar .btn-group{flex-direction:row;align-items:center;display:flex}.gs-toolbar{--gs-toolbar-bg:var(--gs-theme-primary);--gs-toolbar-fg:var(--gs-theme-on-primary);--gs-toolbar-bg-hi:oklch(from var(--gs-toolbar-bg) calc(l + .06) c h);--gs-toolbar-bg-lo:oklch(from var(--gs-toolbar-bg) calc(l - .06) c h);--gs-toolbar-bg-dim:oklch(from var(--gs-toolbar-bg) calc(l - .05) c h);z-index:1;background-color:var(--gs-toolbar-bg);border-top:1px solid var(--gs-toolbar-bg-hi);border-bottom:1px solid var(--gs-toolbar-bg-lo);height:38px;box-shadow:0 0 3px #00000080}.gs-toolbar .spacer{flex-grow:1}.gs-toolbar .logo{display:block}.gs-toolbar .logo img{vertical-align:middle;width:34px}.gs-toolbar .vis-title,.gs-toolbar .version a{color:var(--gs-toolbar-fg);text-shadow:0 1px 2px #0003;font-weight:400}.gs-toolbar .version a{opacity:.5;font-size:80%;text-decoration:none}.gs-toolbar .version a:visited{color:var(--gs-toolbar-fg)}.gs-toolbar .search-input{background-color:var(--gs-toolbar-bg-dim);color:var(--gs-toolbar-fg);border:1px solid oklch(from var(--gs-toolbar-bg) calc(l - .1) c h);width:260px;box-shadow:0px 1px 3px #0000001a inset, 1px 1px 0px oklch(from var(--gs-toolbar-bg) calc(l + .04) c h);text-shadow:0 1px 2px #0000004d;outline:none;padding:3px 6px;font-size:1em;position:relative}.gs-toolbar .search-help{box-sizing:border-box;z-index:1000;visibility:hidden;background:#f6f6f6;border:none;padding:10px;font-size:90%;position:absolute;box-shadow:0 3px 14px #00000026}.gs-toolbar .search-help>:first-child{margin-top:0}.gs-toolbar .search-help>:last-child{margin-bottom:0}.gs-toolbar .search-help{opacity:0;transition:opacity .2s,transform .2s ease-in-out,visibility .2s;transform:translateY(13px)}.gs-toolbar .search-help p{margin-bottom:.5em}.gs-toolbar .search-help ul{margin-top:.5em;padding-left:2.5em}.gs-toolbar .search-help li{cursor:pointer}.gs-toolbar .search:focus-within .search-help{opacity:1;visibility:visible;transform:translateY(3px)}.gs-toolbar>*{padding-left:10px}.gs-toolbar>:last-child{margin-right:10px}.gs-toolbar .tool-btn{--gs-toolbar-btn-bg:oklch(from var(--gs-toolbar-bg) calc(l + .03) c h);background-color:var(--gs-toolbar-btn-bg);background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-btn-bg) calc(l + .05) calc(c - .005) h), oklch(from var(--gs-toolbar-btn-bg) calc(l - .02) c h));color:var(--gs-toolbar-fg);border:1px solid;border-top-color:oklch(from var(--gs-toolbar-btn-bg) calc(l + .08) c h);border-left-color:oklch(from var(--gs-toolbar-btn-bg) calc(l + .03) c h);border-right-color:oklch(from var(--gs-toolbar-btn-bg) calc(l - .08) c h);border-bottom-color:oklch(from var(--gs-toolbar-btn-bg) calc(l - .12) c h);border-radius:2px;justify-content:center;align-items:center;width:30px;height:26px;margin-left:10px;padding:0;font-size:1.15em;transition:color .15s;display:flex;box-shadow:0 1px 1px #00000026}.gs-toolbar .tool-btn>svg{filter:drop-shadow(0 0 1px #0000004d)}.gs-toolbar .tool-btn:active>*{position:relative;top:1px}.gs-toolbar .tool-btn:disabled{color:oklch(from var(--gs-toolbar-fg) l c h/.5)}.gs-toolbar .tool-btn:hover:not(:disabled){background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-btn-bg) calc(l + .07) c h), oklch(from var(--gs-toolbar-btn-bg) calc(l + .01) c h))}.gs-toolbar .tool-btn:hover:not(:disabled)>svg{filter:drop-shadow(0 0 3px #96c8ff)}.gs-toolbar .tool-btn:focus{outline:none}.gs-toolbar .btn-group .tool-btn,.gs-toolbar .dropdown .tool-btn{margin-left:0}.gs-toolbar .dropdown{position:relative}.gs-toolbar .dropdown.show .gs-dropdown-menu{display:block}.gs-toolbar .dropdown.show>button{background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-bg) calc(l + .09) c h), oklch(from var(--gs-toolbar-bg) calc(l + .06) c h))}.provenance-menu .operator{font-size:125%;line-height:.8}.gs-dropdown-menu.provenance-menu .active-state{background-color:#e0e0e0;border-left:5px solid silver;padding-left:10px}.gs-suppress-tooltip .genome-spy .tooltip{display:none}";
//#endregion
export { sj as appStyles, ij as embed, kd as n, Ad as t };
