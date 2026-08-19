import { n as e } from "./rolldown-runtime-DF993M8W.js";
import { $t as t, A as n, Et as r, Gt as i, Jt as a, Kt as o, Mt as s, Tt as c, Ut as l, V as u, Vt as d, Wt as f, X as p, a as m, c as h, k as ee, n as g, o as te, qt as _, r as v, tn as ne, wt as y, xt as re } from "./paramUtils-BYI4rwyL.js";
import { a as ie, c as ae, d as oe, i as se, l as ce, n as le, o as ue, r as de, s as fe, t as pe, u as me } from "./color-W5zffv-z.js";
import { a as he, t as ge } from "./clipOptions-gqdb3fvW.js";
//#region ../../node_modules/vega-util/build/peek.js
function _e(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-util/build/toNumber.js
function ve(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function b(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function ye(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function be(e) {
	let t, n, r;
	e.length === 2 ? (t = e === b || e === ye ? e : xe, n = e, r = e) : (t = b, n = (t, n) => b(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function xe() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function Se(e) {
	return e === null ? NaN : +e;
}
function* Ce(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var we = be(b), x = we.right, Te = we.left;
be(Se).center;
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function Ee(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function De(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = ke(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => ke(n[e], n[t]))), Ee(e, r);
	}
	return e.sort(Oe(n));
}
function Oe(e = b) {
	if (e === b) return ke;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function ke(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var Ae = Math.sqrt(50), je = Math.sqrt(10), Me = Math.sqrt(2);
function Ne(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= Ae ? 10 : a >= je ? 5 : a >= Me ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? Ne(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function Pe(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? Ne(t, e, n) : Ne(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function Fe(e, t, n) {
	return t = +t, e = +e, n = +n, Ne(e, t, n)[2];
}
function Ie(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? Fe(t, e, n) : Fe(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function Le(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-array/src/min.js
function Re(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-array/src/quickselect.js
function ze(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? ke : Oe(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			ze(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (Be(e, n, t), i(e[r], a) > 0 && Be(e, n, r); o < s;) {
			for (Be(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? Be(e, n, s) : (++s, Be(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function Be(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function Ve(e, t, n) {
	if (e = Float64Array.from(Ce(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return Re(e);
		if (t >= 1) return Le(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Le(ze(e, a).subarray(0, a + 1));
		return o + (Re(e.subarray(a + 1)) - o) * (i - a);
	}
}
function He(e, t, n = Se) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function Ue(e) {
	return Math.max(0, -o(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function We(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(o(t) / 3))) * 3 - o(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function Ge(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, o(t) - o(e)) + 1;
}
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Ke = /* @__PURE__ */ new Date(), qe = /* @__PURE__ */ new Date();
function S(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => S((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Ke.setTime(+t), qe.setTime(+r), e(Ke), e(qe), Math.floor(n(Ke, qe))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var Je = S(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Je.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? S((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Je), Je.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var C = 1e3, w = C * 60, T = w * 60, E = T * 24, Ye = E * 7, Xe = E * 30, Ze = E * 365, D = S((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * C);
}, (e, t) => (t - e) / C, (e) => e.getUTCSeconds());
D.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var Qe = S((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * C);
}, (e, t) => {
	e.setTime(+e + t * w);
}, (e, t) => (t - e) / w, (e) => e.getMinutes());
Qe.range;
var $e = S((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * w);
}, (e, t) => (t - e) / w, (e) => e.getUTCMinutes());
$e.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var et = S((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * C - e.getMinutes() * w);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getHours());
et.range;
var tt = S((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getUTCHours());
tt.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var O = S((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * w) / E, (e) => e.getDate() - 1);
O.range;
var nt = S((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / E, (e) => e.getUTCDate() - 1);
nt.range;
var rt = S((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / E, (e) => Math.floor(e / E));
rt.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function k(e) {
	return S((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * w) / Ye);
}
var it = k(0), at = k(1), ot = k(2), st = k(3), ct = k(4), lt = k(5), ut = k(6);
it.range, at.range, ot.range, st.range, ct.range, lt.range, ut.range;
function A(e) {
	return S((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Ye);
}
var dt = A(0), ft = A(1), pt = A(2), mt = A(3), ht = A(4), gt = A(5), _t = A(6);
dt.range, ft.range, pt.range, mt.range, ht.range, gt.range, _t.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var vt = S((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
vt.range;
var yt = S((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
yt.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var j = S((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
j.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : S((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), j.range;
var M = S((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
M.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : S((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), M.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function bt(e, t, n, r, i, a) {
	let o = [
		[
			D,
			1,
			C
		],
		[
			D,
			5,
			5 * C
		],
		[
			D,
			15,
			15 * C
		],
		[
			D,
			30,
			30 * C
		],
		[
			a,
			1,
			w
		],
		[
			a,
			5,
			5 * w
		],
		[
			a,
			15,
			15 * w
		],
		[
			a,
			30,
			30 * w
		],
		[
			i,
			1,
			T
		],
		[
			i,
			3,
			3 * T
		],
		[
			i,
			6,
			6 * T
		],
		[
			i,
			12,
			12 * T
		],
		[
			r,
			1,
			E
		],
		[
			r,
			2,
			2 * E
		],
		[
			n,
			1,
			Ye
		],
		[
			t,
			1,
			Xe
		],
		[
			t,
			3,
			3 * Xe
		],
		[
			e,
			1,
			Ze
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = be(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Ie(t / Ze, n / Ze, r));
		if (a === 0) return Je.every(Math.max(Ie(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [xt, St] = bt(M, yt, dt, rt, tt, $e), [Ct, wt] = bt(j, vt, it, O, et, Qe), N = "year", Tt = "quarter", Et = "month", Dt = "week", Ot = "date", kt = "dayofyear", At = "hours", jt = "minutes", Mt = "seconds", Nt = "milliseconds";
[
	N,
	Tt,
	Et,
	Dt,
	Ot,
	"day",
	kt,
	At,
	jt,
	Mt,
	Nt
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${N}${Et}`, `${N}${Et}${Ot}`, `${At}${jt}`;
var Pt = {
	[N]: j,
	[Tt]: vt.every(3),
	[Et]: vt,
	[Dt]: it,
	[Ot]: O,
	day: O,
	[kt]: O,
	[At]: et,
	[jt]: Qe,
	[Mt]: D,
	[Nt]: Je
}, Ft = {
	[N]: M,
	[Tt]: yt.every(3),
	[Et]: yt,
	[Dt]: dt,
	[Ot]: nt,
	day: nt,
	[kt]: nt,
	[At]: tt,
	[jt]: $e,
	[Mt]: D,
	[Nt]: Je
};
function It(e) {
	return Pt[e];
}
function Lt(e) {
	return Ft[e];
}
var Rt = 1e3, zt = Rt * 60, Bt = zt * 60, Vt = Bt * 24;
Vt * 7;
var Ht = Vt * 30;
Vt * 365, [
	N,
	Et,
	Ot,
	At,
	jt,
	Mt,
	Nt
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * Rt, 15 * Rt, 30 * Rt, 5 * zt, 15 * zt, 30 * zt, 3 * Bt, 6 * Bt, 12 * Bt, 3 * Ht;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function Ut(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Wt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gt(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function Kt(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Zt(i), u = Qt(i), d = Zt(a), f = Qt(a), p = Zt(o), m = Qt(o), h = Zt(s), ee = Qt(s), g = Zt(c), te = Qt(c), _ = {
		a: pe,
		A: me,
		b: he,
		B: ge,
		c: null,
		d: bn,
		e: bn,
		f: Tn,
		g: In,
		G: Rn,
		H: xn,
		I: Sn,
		j: Cn,
		L: wn,
		m: En,
		M: Dn,
		p: _e,
		q: ve,
		Q: sr,
		s: cr,
		S: On,
		u: kn,
		U: An,
		V: Mn,
		w: Nn,
		W: Pn,
		x: null,
		X: null,
		y: Fn,
		Y: Ln,
		Z: zn,
		"%": or
	}, v = {
		a: b,
		A: ye,
		b: be,
		B: xe,
		c: null,
		d: Bn,
		e: Bn,
		f: Gn,
		g: nr,
		G: ir,
		H: Vn,
		I: Hn,
		j: Un,
		L: Wn,
		m: Kn,
		M: qn,
		p: Se,
		q: Ce,
		Q: sr,
		s: cr,
		S: Jn,
		u: Yn,
		U: Xn,
		V: Qn,
		w: $n,
		W: er,
		x: null,
		X: null,
		y: tr,
		Y: rr,
		Z: ar,
		"%": or
	}, ne = {
		a: oe,
		A: se,
		b: ce,
		B: le,
		c: ue,
		d: un,
		e: un,
		f: gn,
		g: on,
		G: an,
		H: fn,
		I: fn,
		j: dn,
		L: hn,
		m: ln,
		M: pn,
		p: ae,
		q: cn,
		Q: vn,
		s: yn,
		S: mn,
		u: en,
		U: tn,
		V: nn,
		w: $t,
		W: rn,
		x: de,
		X: fe,
		y: on,
		Y: an,
		Z: sn,
		"%": _n
	};
	_.x = y(n, _), _.X = y(r, _), _.c = y(t, _), v.x = y(n, v), v.X = y(r, v), v.c = y(t, v);
	function y(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = qt[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function re(e, t) {
		return function(n) {
			var r = Gt(1900, void 0, 1), i = ie(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Wt(Gt(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? ft.ceil(a) : ft(a), a = nt.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Ut(Gt(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? at.ceil(a) : at(a), a = O.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? Wt(Gt(r.y, 0, 1)).getUTCDay() : Ut(Gt(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Wt(r)) : Ut(r);
		};
	}
	function ie(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ne[s in qt ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ae(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function se(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ce(e, t, n) {
		var r = g.exec(t.slice(n));
		return r ? (e.m = te.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function le(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = ee.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ue(e, n, r) {
		return ie(e, t, n, r);
	}
	function de(e, t, r) {
		return ie(e, n, t, r);
	}
	function fe(e, t, n) {
		return ie(e, r, t, n);
	}
	function pe(e) {
		return o[e.getDay()];
	}
	function me(e) {
		return a[e.getDay()];
	}
	function he(e) {
		return c[e.getMonth()];
	}
	function ge(e) {
		return s[e.getMonth()];
	}
	function _e(e) {
		return i[+(e.getHours() >= 12)];
	}
	function ve(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function b(e) {
		return o[e.getUTCDay()];
	}
	function ye(e) {
		return a[e.getUTCDay()];
	}
	function be(e) {
		return c[e.getUTCMonth()];
	}
	function xe(e) {
		return s[e.getUTCMonth()];
	}
	function Se(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function Ce(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = y(e += "", _);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = re(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = y(e += "", v);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = re(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var qt = {
	"-": "",
	_: " ",
	0: "0"
}, P = /^\s*\d+/, Jt = /^%/, Yt = /[\\^$*+?|[\]().{}]/g;
function F(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Xt(e) {
	return e.replace(Yt, "\\$&");
}
function Zt(e) {
	return RegExp("^(?:" + e.map(Xt).join("|") + ")", "i");
}
function Qt(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function $t(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function en(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function tn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function nn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function rn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function an(e, t, n) {
	var r = P.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function on(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function sn(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function cn(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function ln(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function un(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function dn(e, t, n) {
	var r = P.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function fn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function pn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function mn(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function hn(e, t, n) {
	var r = P.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function gn(e, t, n) {
	var r = P.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function _n(e, t, n) {
	var r = Jt.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function vn(e, t, n) {
	var r = P.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function yn(e, t, n) {
	var r = P.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function bn(e, t) {
	return F(e.getDate(), t, 2);
}
function xn(e, t) {
	return F(e.getHours(), t, 2);
}
function Sn(e, t) {
	return F(e.getHours() % 12 || 12, t, 2);
}
function Cn(e, t) {
	return F(1 + O.count(j(e), e), t, 3);
}
function wn(e, t) {
	return F(e.getMilliseconds(), t, 3);
}
function Tn(e, t) {
	return wn(e, t) + "000";
}
function En(e, t) {
	return F(e.getMonth() + 1, t, 2);
}
function Dn(e, t) {
	return F(e.getMinutes(), t, 2);
}
function On(e, t) {
	return F(e.getSeconds(), t, 2);
}
function kn(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function An(e, t) {
	return F(it.count(j(e) - 1, e), t, 2);
}
function jn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? ct(e) : ct.ceil(e);
}
function Mn(e, t) {
	return e = jn(e), F(ct.count(j(e), e) + (j(e).getDay() === 4), t, 2);
}
function Nn(e) {
	return e.getDay();
}
function Pn(e, t) {
	return F(at.count(j(e) - 1, e), t, 2);
}
function Fn(e, t) {
	return F(e.getFullYear() % 100, t, 2);
}
function In(e, t) {
	return e = jn(e), F(e.getFullYear() % 100, t, 2);
}
function Ln(e, t) {
	return F(e.getFullYear() % 1e4, t, 4);
}
function Rn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? ct(e) : ct.ceil(e), F(e.getFullYear() % 1e4, t, 4);
}
function zn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + F(t / 60 | 0, "0", 2) + F(t % 60, "0", 2);
}
function Bn(e, t) {
	return F(e.getUTCDate(), t, 2);
}
function Vn(e, t) {
	return F(e.getUTCHours(), t, 2);
}
function Hn(e, t) {
	return F(e.getUTCHours() % 12 || 12, t, 2);
}
function Un(e, t) {
	return F(1 + nt.count(M(e), e), t, 3);
}
function Wn(e, t) {
	return F(e.getUTCMilliseconds(), t, 3);
}
function Gn(e, t) {
	return Wn(e, t) + "000";
}
function Kn(e, t) {
	return F(e.getUTCMonth() + 1, t, 2);
}
function qn(e, t) {
	return F(e.getUTCMinutes(), t, 2);
}
function Jn(e, t) {
	return F(e.getUTCSeconds(), t, 2);
}
function Yn(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function Xn(e, t) {
	return F(dt.count(M(e) - 1, e), t, 2);
}
function Zn(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function Qn(e, t) {
	return e = Zn(e), F(ht.count(M(e), e) + (M(e).getUTCDay() === 4), t, 2);
}
function $n(e) {
	return e.getUTCDay();
}
function er(e, t) {
	return F(ft.count(M(e) - 1, e), t, 2);
}
function tr(e, t) {
	return F(e.getUTCFullYear() % 100, t, 2);
}
function nr(e, t) {
	return e = Zn(e), F(e.getUTCFullYear() % 100, t, 2);
}
function rr(e, t) {
	return F(e.getUTCFullYear() % 1e4, t, 4);
}
function ir(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? ht(e) : ht.ceil(e), F(e.getUTCFullYear() % 1e4, t, 4);
}
function ar() {
	return "+0000";
}
function or() {
	return "%";
}
function sr(e) {
	return +e;
}
function cr(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var lr, ur, dr, fr, pr;
mr({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
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
	]
});
function mr(e) {
	return lr = Kt(e), ur = lr.format, dr = lr.parse, fr = lr.utcFormat, pr = lr.utcParse, lr;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function I(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default:
			this.range(t).domain(e);
			break;
	}
	return this;
}
function L(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default:
			this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
			break;
	}
	return this;
}
//#endregion
//#region ../../node_modules/d3-scale/src/ordinal.js
var hr = Symbol("implicit");
function gr() {
	var e = new oe(), t = [], n = [], r = hr;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== hr) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new oe();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return gr(t, n).unknown(r);
	}, I.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var _r = Math.PI / 180, vr = 180 / Math.PI, yr = 18, br = .96422, xr = 1, Sr = .82521, Cr = 4 / 29, wr = 6 / 29, Tr = 3 * wr * wr, Er = wr * wr * wr;
function Dr(e) {
	if (e instanceof R) return new R(e.l, e.a, e.b, e.opacity);
	if (e instanceof z) return Fr(e);
	e instanceof le || (e = ae(e));
	var t = Mr(e.r), n = Mr(e.g), r = Mr(e.b), i = kr((.2225045 * t + .7168786 * n + .0606169 * r) / xr), a, o;
	return t === n && n === r ? a = o = i : (a = kr((.4360747 * t + .3850649 * n + .1430804 * r) / br), o = kr((.0139322 * t + .0971045 * n + .7141733 * r) / Sr)), new R(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function Or(e, t, n, r) {
	return arguments.length === 1 ? Dr(e) : new R(e, t, n, r ?? 1);
}
function R(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
ce(R, Or, me(pe, {
	brighter(e) {
		return new R(this.l + yr * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new R(this.l - yr * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = br * Ar(t), e = xr * Ar(e), n = Sr * Ar(n), new le(jr(3.1338561 * t - 1.6168667 * e - .4906146 * n), jr(-.9787684 * t + 1.9161415 * e + .033454 * n), jr(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function kr(e) {
	return e > Er ? e ** (1 / 3) : e / Tr + Cr;
}
function Ar(e) {
	return e > wr ? e * e * e : Tr * (e - Cr);
}
function jr(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Mr(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Nr(e) {
	if (e instanceof z) return new z(e.h, e.c, e.l, e.opacity);
	if (e instanceof R || (e = Dr(e)), e.a === 0 && e.b === 0) return new z(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * vr;
	return new z(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Pr(e, t, n, r) {
	return arguments.length === 1 ? Nr(e) : new z(e, t, n, r ?? 1);
}
function z(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Fr(e) {
	if (isNaN(e.h)) return new R(e.l, 0, 0, e.opacity);
	var t = e.h * _r;
	return new R(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
ce(z, Pr, me(pe, {
	brighter(e) {
		return new z(this.h, this.c, this.l + yr * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new z(this.h, this.c, this.l - yr * (e ?? 1), this.opacity);
	},
	rgb() {
		return Fr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var Ir = -.14861, Lr = 1.78277, Rr = -.29227, zr = -.90649, Br = 1.97294, Vr = Br * zr, Hr = Br * Lr, Ur = Lr * Rr - zr * Ir;
function Wr(e) {
	if (e instanceof B) return new B(e.h, e.s, e.l, e.opacity);
	e instanceof le || (e = ae(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Ur * r + Vr * t - Hr * n) / (Ur + Vr - Hr), a = r - i, o = (Br * (n - i) - Rr * a) / zr, s = Math.sqrt(o * o + a * a) / (Br * i * (1 - i)), c = s ? Math.atan2(o, a) * vr - 120 : NaN;
	return new B(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function Gr(e, t, n, r) {
	return arguments.length === 1 ? Wr(e) : new B(e, t, n, r ?? 1);
}
function B(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ce(B, Gr, me(pe, {
	brighter(e) {
		return e = e == null ? de : de ** +e, new B(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ie : ie ** +e, new B(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * _r, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new le(255 * (t + n * (Ir * r + Lr * i)), 255 * (t + n * (Rr * r + zr * i)), 255 * (t + Br * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function Kr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function qr(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Kr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Jr(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return Kr((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Yr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Xr(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Zr(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Qr(e, t) {
	var n = t - e;
	return n ? Xr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Yr(isNaN(e) ? t : e);
}
function $r(e) {
	return (e = +e) == 1 ? V : function(t, n) {
		return n - t ? Zr(t, n, e) : Yr(isNaN(t) ? n : t);
	};
}
function V(e, t) {
	var n = t - e;
	return n ? Xr(e, n) : Yr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var ei = (function e(t) {
	var n = $r(t);
	function r(e, t) {
		var r = n((e = fe(e)).r, (t = fe(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = V(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function ti(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = fe(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var ni = ti(qr), ri = ti(Jr);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function ii(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function ai(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function oi(e, t) {
	return (ai(t) ? ii : si)(e, t);
}
function si(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = U(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function ci(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function H(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function li(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = U(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var ui = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, di = new RegExp(ui.source, "g");
function fi(e) {
	return function() {
		return e;
	};
}
function pi(e) {
	return function(t) {
		return e(t) + "";
	};
}
function mi(e, t) {
	var n = ui.lastIndex = di.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = ui.exec(e)) && (i = di.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: H(r, i)
	})), n = di.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? pi(c[0].x) : fi(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function U(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Yr(t) : (n === "number" ? H : n === "string" ? (r = se(t)) ? (t = r, ei) : mi : t instanceof se ? ei : t instanceof Date ? ci : ai(t) ? ii : Array.isArray(t) ? si : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? li : H)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function hi(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function gi(e, t) {
	var n = Qr(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function _i(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var vi = 180 / Math.PI, yi = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function bi(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * vi,
		skewX: Math.atan(c) * vi,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var xi;
function Si(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? yi : bi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Ci(e) {
	return e == null || (xi ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), xi.setAttribute("transform", e), !(e = xi.transform.baseVal.consolidate())) ? yi : (e = e.matrix, bi(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function wi(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: H(e, i)
			}, {
				i: c - 2,
				x: H(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: H(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: H(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: H(e, n)
			}, {
				i: s - 2,
				x: H(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Ti = wi(Si, "px, ", "px)", "deg)"), Ei = wi(Ci, ", ", ")", ")"), Di = 1e-12;
function Oi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ki(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Ai(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var ji = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Di) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var ee = Math.sqrt(p), g = (u * u - s * s + r * p) / (2 * s * n * ee), te = (u * u - s * s - r * p) / (2 * u * n * ee), _ = Math.log(Math.sqrt(g * g + 1) - g);
			h = (Math.log(Math.sqrt(te * te + 1) - te) - _) / t, m = function(e) {
				var r = e * h, i = Oi(_), c = s / (n * ee) * (i * Ai(t * r + _) - ki(_));
				return [
					a + c * d,
					o + c * f,
					s * i / Oi(t * r + _)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4);
//#endregion
//#region ../../node_modules/d3-interpolate/src/hsl.js
function Mi(e) {
	return function(t, n) {
		var r = e((t = ue(t)).h, (n = ue(n)).h), i = V(t.s, n.s), a = V(t.l, n.l), o = V(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Ni = Mi(Qr), Pi = Mi(V);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function Fi(e, t) {
	var n = V((e = Or(e)).l, (t = Or(t)).l), r = V(e.a, t.a), i = V(e.b, t.b), a = V(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function Ii(e) {
	return function(t, n) {
		var r = e((t = Pr(t)).h, (n = Pr(n)).h), i = V(t.c, n.c), a = V(t.l, n.l), o = V(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Li = Ii(Qr), Ri = Ii(V);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function zi(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = Gr(t)).h, (r = Gr(r)).h), a = V(t.s, r.s), o = V(t.l, r.l), s = V(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var Bi = zi(Qr), Vi = zi(V);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function Hi(e, t) {
	t === void 0 && (t = e, e = U);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Ui(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Wi = /* @__PURE__ */ e({
	interpolate: () => U,
	interpolateArray: () => oi,
	interpolateBasis: () => qr,
	interpolateBasisClosed: () => Jr,
	interpolateCubehelix: () => Bi,
	interpolateCubehelixLong: () => Vi,
	interpolateDate: () => ci,
	interpolateDiscrete: () => hi,
	interpolateHcl: () => Li,
	interpolateHclLong: () => Ri,
	interpolateHsl: () => Ni,
	interpolateHslLong: () => Pi,
	interpolateHue: () => gi,
	interpolateLab: () => Fi,
	interpolateNumber: () => H,
	interpolateNumberArray: () => ii,
	interpolateObject: () => li,
	interpolateRgb: () => ei,
	interpolateRgbBasis: () => ni,
	interpolateRgbBasisClosed: () => ri,
	interpolateRound: () => _i,
	interpolateString: () => mi,
	interpolateTransformCss: () => Ti,
	interpolateTransformSvg: () => Ei,
	interpolateZoom: () => ji,
	piecewise: () => Hi,
	quantize: () => Ui
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function Gi(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function Ki(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var qi = [0, 1];
function W(e) {
	return e;
}
function Ji(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Gi(isNaN(t) ? NaN : .5);
}
function Yi(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Xi(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Ji(i, r), a = n(o, a)) : (r = Ji(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Zi(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Ji(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = x(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Qi(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function $i() {
	var e = qi, t = qi, n = U, r, i, a, o = W, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== W && (o = Yi(e[0], e[n - 1])), s = n > 2 ? Zi : Xi, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), H))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Ki), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = _i, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : W, u()) : o !== W;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function ea() {
	return $i()(W, W);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function ta(e, t, n, r) {
	var a = Ie(e, t, n), o;
	switch (r = i(r ?? ",f"), r.type) {
		case "s":
			var s = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(o = We(a, s)) && (r.precision = o), f(r, s);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(o = Ge(a, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = o - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(o = Ue(a)) && (r.precision = o - (r.type === "%") * 2);
			break;
	}
	return l(r);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function na(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Pe(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return ta(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Fe(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function ra() {
	var e = ea();
	return e.copy = function() {
		return Qi(e, ra());
	}, I.apply(e, arguments), na(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function ia(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Ki), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return ia(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Ki) : [0, 1], na(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function aa(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function oa(e) {
	return Math.log(e);
}
function sa(e) {
	return Math.exp(e);
}
function ca(e) {
	return -Math.log(-e);
}
function la(e) {
	return -Math.exp(-e);
}
function ua(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function da(e) {
	return e === 10 ? ua : e === Math.E ? Math.exp : (t) => e ** +t;
}
function fa(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function pa(e) {
	return (t, n) => -e(-t, n);
}
function ma(e) {
	let t = e(oa, sa), n = t.domain, r = 10, a, o;
	function s() {
		return a = fa(r), o = da(r), n()[0] < 0 ? (a = pa(a), o = pa(o), e(ca, la)) : e(oa, sa), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, s()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), s()) : n();
	}, t.ticks = (e) => {
		let t = n(), i = t[0], s = t[t.length - 1], c = s < i;
		c && ([i, s] = [s, i]);
		let l = a(i), u = a(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), i > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / o(-l) : d * o(l), !(f < i)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / o(-l) : d * o(l), !(f < i)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = Pe(i, s, p));
		} else m = Pe(l, u, Math.min(u - l, p)).map(o);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = i(n)).precision == null && (n.trim = !0), n = l(n)), e === Infinity) return n;
		let s = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / o(Math.round(a(e)));
			return t * r < r - .5 && (t *= r), t <= s ? n(e) : "";
		};
	}, t.nice = () => n(aa(n(), {
		floor: (e) => o(Math.floor(a(e))),
		ceil: (e) => o(Math.ceil(a(e)))
	})), t;
}
function ha() {
	let e = ma($i()).domain([1, 10]);
	return e.copy = () => Qi(e, ha()).base(e.base()), I.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function ga(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function _a(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function va(e) {
	var t = 1, n = e(ga(t), _a(t));
	return n.constant = function(n) {
		return arguments.length ? e(ga(t = +n), _a(t)) : t;
	}, na(n);
}
function ya() {
	var e = va($i());
	return e.copy = function() {
		return Qi(e, ya()).constant(e.constant());
	}, I.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function ba(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function xa(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Sa(e) {
	return e < 0 ? -e * e : e * e;
}
function Ca(e) {
	var t = e(W, W), n = 1;
	function r() {
		return n === 1 ? e(W, W) : n === .5 ? e(xa, Sa) : e(ba(n), ba(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, na(t);
}
function wa() {
	var e = Ca($i());
	return e.copy = function() {
		return Qi(e, wa()).exponent(e.exponent());
	}, I.apply(e, arguments), e;
}
function Ta() {
	return wa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function Ea() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = He(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[x(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(b), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return Ea().domain(e).range(t).unknown(r);
	}, I.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function Da() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[x(r, e, 0, n)] : a;
	}
	function s() {
		var i = -1;
		for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
		return o;
	}
	return o.domain = function(n) {
		return arguments.length ? ([e, t] = n, e = +e, t = +t, s()) : [e, t];
	}, o.range = function(e) {
		return arguments.length ? (n = (i = Array.from(e)).length - 1, s()) : i.slice();
	}, o.invertExtent = function(a) {
		var o = i.indexOf(a);
		return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
	}, o.unknown = function(e) {
		return arguments.length && (a = e), o;
	}, o.thresholds = function() {
		return r.slice();
	}, o.copy = function() {
		return Da().domain([e, t]).range(i).unknown(a);
	}, I.apply(na(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function Oa() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[x(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return Oa().domain(e).range(t).unknown(n);
	}, I.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function ka(e) {
	return new Date(e);
}
function Aa(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ja(e, t, n, r, i, a, o, s, c, l) {
	var u = ea(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), ee = l("%I %p"), g = l("%a %d"), te = l("%b %d"), _ = l("%B"), v = l("%Y");
	function ne(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? ee : r(e) < e ? i(e) < e ? g : te : n(e) < e ? _ : v)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Aa)) : f().map(ka);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ne : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(aa(n, e)) : u;
	}, u.copy = function() {
		return Qi(u, ja(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function Ma() {
	return I.apply(ja(Ct, wt, j, vt, it, O, et, Qe, D, ur).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function Na() {
	return I.apply(ja(xt, St, M, yt, dt, nt, tt, $e, D, fr).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Pa() {
	var e = 0, t = 1, n, r, i, a, o = W, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(U), l.rangeRound = u(_i), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function G(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Fa() {
	var e = na(Pa()(W));
	return e.copy = function() {
		return G(e, Fa());
	}, L.apply(e, arguments);
}
function Ia() {
	var e = ma(Pa()).domain([1, 10]);
	return e.copy = function() {
		return G(e, Ia()).base(e.base());
	}, L.apply(e, arguments);
}
function La() {
	var e = va(Pa());
	return e.copy = function() {
		return G(e, La()).constant(e.constant());
	}, L.apply(e, arguments);
}
function Ra() {
	var e = Ca(Pa());
	return e.copy = function() {
		return G(e, Ra()).exponent(e.exponent());
	}, L.apply(e, arguments);
}
function za() {
	return Ra.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Ba() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = W, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = Hi(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(U), p.rangeRound = m(_i), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Va() {
	var e = na(Ba()(W));
	return e.copy = function() {
		return G(e, Va());
	}, L.apply(e, arguments);
}
function Ha() {
	var e = ma(Ba()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return G(e, Ha()).base(e.base());
	}, L.apply(e, arguments);
}
function Ua() {
	var e = va(Ba());
	return e.copy = function() {
		return G(e, Ua()).constant(e.constant());
	}, L.apply(e, arguments);
}
function Wa() {
	var e = Ca(Ba());
	return e.copy = function() {
		return G(e, Wa()).exponent(e.exponent());
	}, L.apply(e, arguments);
}
function Ga() {
	return Wa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function K(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Ka = K("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), qa = K("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Ja = K("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Ya = K("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Xa = K("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Za = K("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Qa = K("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), $a = K("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), eo = K("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), to = K("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function no(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var ro = "identity", io = "linear", ao = "sqrt", oo = "symlog", so = "time", co = "sequential", lo = "diverging", uo = "quantile", fo = "quantize", po = "threshold", mo = "ordinal", ho = "point", go = "band", _o = "bin-ordinal", q = "continuous", vo = "discrete", yo = "discretizing", J = "interpolating", bo = "temporal";
function xo(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function So(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function Co() {
	let e = gr().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function u() {
		let e = t().length, u = r[1] < r[0], d = r[1 - u], f = no(e, s, c), p = r[u - 0];
		i = (d - p) / (f || 1), o && (i = Math.floor(i)), p += (d - p - i * (e - s)) * l, a = i * (1 - s), o && (p = Math.round(p), a = Math.round(a));
		let m = _(e).map((e) => p + i * e);
		return n(u ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), u()) : t();
	}, e.range = function(e) {
		return arguments.length ? (r = [+e[0], +e[1]], u()) : r.slice();
	}, e.rangeRound = function(e) {
		return r = [+e[0], +e[1]], o = !0, u();
	}, e.bandwidth = function() {
		return a;
	}, e.step = function() {
		return i;
	}, e.round = function(e) {
		return arguments.length ? (o = !!e, u()) : o;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), s = c, u()) : s;
	}, e.paddingInner = function(e) {
		return arguments.length ? (s = Math.max(0, Math.min(1, e)), u()) : s;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), u()) : c;
	}, e.align = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), u()) : l;
	}, e.invertRange = function(e) {
		if (e[0] == null || e[1] == null) return;
		let i = r[1] < r[0], o = i ? n().reverse() : n(), s = o.length - 1, c = +e[0], l = +e[1], u, d, f;
		if (!(c !== c || l !== l) && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, x(o, c) - 1), d = c === l ? u : x(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return Co().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, u();
}
function wo(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return wo(t());
	}, e;
}
function To() {
	return wo(Co().paddingInner(1));
}
var Eo = Array.prototype.map;
function Do(e) {
	return Eo.call(e, ve);
}
var Oo = Array.prototype.slice;
function ko() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(x(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = Do(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = Oo.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return ta(e[0], _e(e), t ?? 10, n);
	}, n.copy = function() {
		return ko().domain(n.domain()).range(n.range());
	}, n;
}
var Ao = /* @__PURE__ */ new Map(), jo = Symbol("vega_scale");
function Mo(e) {
	return e[jo] = !0, e;
}
function No(e, n, r) {
	let i = function() {
		let t = n();
		return t.invertRange ||= t.invert ? xo(t) : t.invertExtent ? So(t) : void 0, t.type = e, Mo(t);
	};
	return i.metadata = a(t(r)), i;
}
function Y(e, t, n) {
	return arguments.length > 1 ? (Ao.set(e, No(e, t, n)), this) : Po(e) ? Ao.get(e) : void 0;
}
Y(ro, ia), Y(io, ra, q), Y("log", ha, [q, "log"]), Y("pow", wa, q), Y(ao, Ta, q), Y(oo, ya, q), Y(so, Ma, [q, bo]), Y("utc", Na, [q, bo]), Y(co, Fa, [q, J]), Y(`${co}-${io}`, Fa, [q, J]), Y(`${co}-log`, Ia, [
	q,
	J,
	"log"
]), Y(`${co}-pow`, Ra, [q, J]), Y(`${co}-${ao}`, za, [q, J]), Y(`${co}-${oo}`, La, [q, J]), Y(`${lo}-${io}`, Va, [q, J]), Y(`${lo}-log`, Ha, [
	q,
	J,
	"log"
]), Y(`${lo}-pow`, Wa, [q, J]), Y(`${lo}-${ao}`, Ga, [q, J]), Y(`${lo}-${oo}`, Ua, [q, J]), Y(uo, Ea, [yo, uo]), Y(fo, Da, yo), Y(po, Oa, yo), Y(_o, ko, [vo, yo]), Y(mo, gr, vo), Y(go, Co, vo), Y(ho, To, vo);
function Po(e) {
	return Ao.has(e);
}
function Fo(e, t) {
	let n = Ao.get(e);
	return n && n.metadata[t];
}
function Io(e) {
	return Fo(e, q);
}
function Lo(e) {
	return Fo(e, vo);
}
function Ro(e) {
	return Fo(e, yo);
}
function zo(e) {
	return Fo(e, "log");
}
function Bo(e) {
	return Fo(e, J);
}
function Vo(e, t) {
	let n = t[0], r = _e(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function Ho(e, t, n) {
	return Hi(Wo(t || "rgb", n), e);
}
function Uo(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function Wo(e, t) {
	let n = Wi[Go(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function Go(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var Ko = {
	blues: "cfe1f2bed8eca8cee58fc1de74b2d75ba3cf4592c63181bd206fb2125ca40a4a90",
	greens: "d3eecdc0e6baabdda594d3917bc77d60ba6c46ab5e329a512089430e7735036429",
	greys: "e2e2e2d4d4d4c4c4c4b1b1b19d9d9d8888887575756262624d4d4d3535351e1e1e",
	oranges: "fdd8b3fdc998fdb87bfda55efc9244f87f2cf06b18e4580bd14904b93d029f3303",
	purples: "e2e1efd4d4e8c4c5e0b4b3d6a3a0cc928ec3827cb97566ae684ea25c3696501f8c",
	reds: "fdc9b4fcb49afc9e80fc8767fa7051f6573fec3f2fdc2a25c81b1db21218970b13",
	blueGreen: "d5efedc1e8e0a7ddd18bd2be70c6a958ba9144ad77319c5d2089460e7736036429",
	bluePurple: "ccddecbad0e4a8c2dd9ab0d4919cc98d85be8b6db28a55a6873c99822287730f71",
	greenBlue: "d3eecec5e8c3b1e1bb9bd8bb82cec269c2ca51b2cd3c9fc7288abd1675b10b60a1",
	orangeRed: "fddcaffdcf9bfdc18afdad77fb9562f67d53ee6545e24932d32d1ebf130da70403",
	purpleBlue: "dbdaebc8cee4b1c3de97b7d87bacd15b9fc93a90c01e7fb70b70ab056199045281",
	purpleBlueGreen: "dbd8eac8cee4b0c3de93b7d872acd1549fc83892bb1c88a3097f8702736b016353",
	purpleRed: "dcc9e2d3b3d7ce9eccd186c0da6bb2e14da0e23189d91e6fc61159ab07498f023a",
	redPurple: "fccfccfcbec0faa9b8f98faff571a5ec539ddb3695c41b8aa908808d0179700174",
	yellowGreen: "e4f4acd1eca0b9e2949ed68880c97c62bb6e47aa5e3297502083440e723b036034",
	yellowOrangeBrown: "feeaa1fedd84fecc63feb746fca031f68921eb7215db5e0bc54c05ab3d038f3204",
	yellowOrangeRed: "fee087fed16ffebd59fea849fd903efc7335f9522bee3423de1b20ca0b22af0225",
	blueOrange: "134b852f78b35da2cb9dcae1d2e5eff2f0ebfce0bafbbf74e8932fc5690d994a07",
	brownBlueGreen: "704108a0651ac79548e3c78af3e6c6eef1eac9e9e48ed1c74da79e187a72025147",
	purpleGreen: "5b1667834792a67fb6c9aed3e6d6e8eff0efd9efd5aedda971bb75368e490e5e29",
	purpleOrange: "4114696647968f83b7b9b4d6dadbebf3eeeafce0bafbbf74e8932fc5690d994a07",
	redBlue: "8c0d25bf363adf745ef4ae91fbdbc9f2efeed2e5ef9dcae15da2cb2f78b3134b85",
	redGrey: "8c0d25bf363adf745ef4ae91fcdccbfaf4f1e2e2e2c0c0c0969696646464343434",
	yellowGreenBlue: "eff9bddbf1b4bde5b594d5b969c5be45b4c22c9ec02182b82163aa23479c1c3185",
	redYellowBlue: "a50026d4322cf16e43fcac64fedd90faf8c1dcf1ecabd6e875abd04a74b4313695",
	redYellowGreen: "a50026d4322cf16e43fcac63fedd8df9f7aed7ee8ea4d86e64bc6122964f006837",
	pinkYellowGreen: "8e0152c0267edd72adf0b3d6faddedf5f3efe1f2cab6de8780bb474f9125276419",
	spectral: "9e0142d13c4bf0704afcac63fedd8dfbf8b0e0f3a1a9dda269bda94288b55e4fa2",
	viridis: "440154470e61481a6c482575472f7d443a834144873d4e8a39568c35608d31688e2d708e2a788e27818e23888e21918d1f988b1fa08822a8842ab07f35b77943bf7154c56866cc5d7ad1518fd744a5db36bcdf27d2e21be9e51afde725",
	magma: "0000040404130b0924150e3720114b2c11603b0f704a107957157e651a80721f817f24828c29819a2e80a8327db6377ac43c75d1426fde4968e95462f1605df76f5cfa7f5efc8f65fe9f6dfeaf78febf84fece91fddea0fcedaffcfdbf",
	inferno: "0000040403130c0826170c3b240c4f330a5f420a68500d6c5d126e6b176e781c6d86216b932667a12b62ae305cbb3755c73e4cd24644dd513ae65c30ed6925f3771af8850ffb9506fca50afcb519fac62df6d645f2e661f3f484fcffa4",
	plasma: "0d088723069033059742039d5002a25d01a66a00a87801a88405a7900da49c179ea72198b12a90ba3488c33d80cb4779d35171da5a69e16462e76e5bed7953f2834cf68f44fa9a3dfca636fdb32ffec029fcce25f9dc24f5ea27f0f921",
	cividis: "00205100235800265d002961012b65042e670831690d346b11366c16396d1c3c6e213f6e26426e2c456e31476e374a6e3c4d6e42506e47536d4c566d51586e555b6e5a5e6e5e616e62646f66676f6a6a706e6d717270717573727976737c79747f7c75827f758682768985778c8877908b78938e789691789a94789e9778a19b78a59e77a9a177aea575b2a874b6ab73bbaf71c0b26fc5b66dc9b96acebd68d3c065d8c462ddc85fe2cb5ce7cf58ebd355f0d652f3da4ff7de4cfae249fce647",
	rainbow: "6e40aa883eb1a43db3bf3cafd83fa4ee4395fe4b83ff576eff6659ff7847ff8c38f3a130e2b72fcfcc36bee044aff05b8ff4576ff65b52f6673af27828ea8d1ddfa319d0b81cbecb23abd82f96e03d82e14c6edb5a5dd0664dbf6e40aa",
	sinebow: "ff4040fc582af47218e78d0bd5a703bfbf00a7d5038de70b72f41858fc2a40ff402afc5818f4720be78d03d5a700bfbf03a7d50b8de71872f42a58fc4040ff582afc7218f48d0be7a703d5bf00bfd503a7e70b8df41872fc2a58ff4040",
	turbo: "23171b32204a3e2a71453493493eae4b49c54a53d7485ee44569ee4074f53c7ff8378af93295f72e9ff42ba9ef28b3e926bce125c5d925cdcf27d5c629dcbc2de3b232e9a738ee9d3ff39347f68950f9805afc7765fd6e70fe667cfd5e88fc5795fb51a1f84badf545b9f140c5ec3cd0e637dae034e4d931ecd12ef4c92bfac029ffb626ffad24ffa223ff9821ff8d1fff821dff771cfd6c1af76118f05616e84b14df4111d5380fcb2f0dc0260ab61f07ac1805a313029b0f00950c00910b00",
	browns: "eedbbdecca96e9b97ae4a865dc9856d18954c7784cc0673fb85536ad44339f3632",
	tealBlues: "bce4d89dd3d181c3cb65b3c245a2b9368fae347da0306a932c5985",
	teals: "bbdfdfa2d4d58ac9c975bcbb61b0af4da5a43799982b8b8c1e7f7f127273006667",
	warmGreys: "dcd4d0cec5c1c0b8b4b3aaa7a59c9998908c8b827f7e7673726866665c5a59504e",
	goldGreen: "f4d166d5ca60b6c35c98bb597cb25760a6564b9c533f8f4f33834a257740146c36",
	goldOrange: "f4d166f8be5cf8aa4cf5983bf3852aef701be2621fd65322c54923b142239e3a26",
	goldRed: "f4d166f6be59f9aa51fc964ef6834bee734ae56249db5247cf4244c43141b71d3e",
	lightGreyRed: "efe9e6e1dad7d5cbc8c8bdb9bbaea9cd967ddc7b43e15f19df4011dc000b",
	lightGreyTeal: "e4eaead6dcddc8ced2b7c2c7a6b4bc64b0bf22a6c32295c11f85be1876bc",
	lightMulti: "e0f1f2c4e9d0b0de9fd0e181f6e072f6c053f3993ef77440ef4a3c",
	lightOrange: "f2e7daf7d5baf9c499fab184fa9c73f68967ef7860e8645bde515bd43d5b",
	lightTealBlue: "e3e9e0c0dccf9aceca7abfc859afc0389fb9328dad2f7ca0276b95255988",
	darkBlue: "3232322d46681a5c930074af008cbf05a7ce25c0dd38daed50f3faffffff",
	darkGold: "3c3c3c584b37725e348c7631ae8b2bcfa424ecc31ef9de30fff184ffffff",
	darkGreen: "3a3a3a215748006f4d048942489e4276b340a6c63dd2d836ffeb2cffffaa",
	darkMulti: "3737371f5287197d8c29a86995ce3fffe800ffffff",
	darkRed: "3434347036339e3c38cc4037e75d1eec8620eeab29f0ce32ffeb2c"
}, qo = {
	accent: qa,
	category10: Ka,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: Ja,
	observable10: Ya,
	paired: Xa,
	pastel1: Za,
	pastel2: Qa,
	set1: $a,
	set2: eo,
	set3: to,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Jo(e) {
	if (ne(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function Yo(e, t) {
	for (let n in e) Zo(n, t(e[n]));
}
var Xo = {};
Yo(qo, Jo), Yo(Ko, (e) => Ho(Jo(e)));
function Zo(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (Xo[e] = t, this) : Xo[e];
}
//#endregion
//#region ../../node_modules/flatqueue/index.js
var Qo = class {
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
}, $o = Symbol("runtimeNode"), es = 1e6;
function ts(e) {
	return e ? (t, n) => {
		e.addDisposer(t, n);
	} : () => void 0;
}
function ns(e, t) {
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
	return Object.defineProperty(n, $o, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(n, { set(e) {
		t(e);
	} }) : n;
}
function rs(e) {
	let t = e[$o];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function is(e) {
	return typeof e.rank == "number" ? e.rank : rs(e).rank;
}
function as(e) {
	for (let t of e) t();
}
var os = class {
	#e = 1;
	#t = 1;
	#n = 0;
	#r = !1;
	#i = !1;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s = new Qo();
	#c = new Qo();
	#l = /* @__PURE__ */ new Set();
	#u;
	constructor(e = {}) {
		this.#u = ts(e.lifecycleRegistry);
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
		}), ns(s, (e) => {
			if (s.disposed) throw Error("Cannot set disposed parameter \"" + t + "\" (" + a + ").");
			e !== s.value && (s.value = e, o && (as(s.listeners), this.#m()));
		});
	}
	computed(e, t, n, r) {
		let i = n.reduce((e, t) => Math.max(e, is(t)), 0), a = {
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
		}), ns(a);
	}
	effect(e, t, n) {
		let r = t.reduce((e, t) => Math.max(e, is(t)), 0), i = {
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
						r !== n && (t.value = r, as(t.listeners));
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
		let t = this.#t % es;
		return this.#t += 1, e * es + t;
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
}, ss = class {
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
}, cs = class {
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
		h(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t)) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		h(t);
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
function ls(e, t = {}, r = {}) {
	return n(e, t, r);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function us(e, t, n = {}) {
	let r = {}, i = ls(e, r, n), a = /* @__PURE__ */ new Map();
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
var ds = class {
	#e = new ss();
	#t = new os({ lifecycleRegistry: this.#e });
	#n = new cs();
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
		let { expression: i, dependencies: a } = us(n, (t) => this.resolve(e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = us(t, (t) => this.resolve(e, t), n);
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
}, fs = (e) => new Promise((t) => setTimeout(t, e));
function ps() {
	return { canceled: !1 };
}
function ms(e) {
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
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : fs(e.delay).then(i) : i();
}
//#endregion
//#region ../core/src/utils/animator.js
var hs = class {
	constructor(e) {
		this._renderCallback = e, this._renderRequested = !1, this._warn = !1, this.transitions = [], this.transitionsEnabled = !0;
	}
	requestTransition(e) {
		this.cancelTransition(e), this.transitions.push(e), this.requestRender();
	}
	cancelTransition(e) {
		let t = this.transitions.indexOf(e);
		t >= 0 && this.transitions.splice(t, 1);
	}
	requestRender() {
		this._renderRequested ? this._warn && console.warn("Render already requested!") : (this._renderRequested = !0, window.requestAnimationFrame((e) => {
			this._renderRequested = !1;
			let t = this.transitions;
			this.transitions = [];
			let n;
			for (; n = t.shift();) n(e);
			this._renderCallback(e);
		}));
	}
	transition(e) {
		return ms({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function gs(e, t, n, r, i) {
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
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = _s(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function _s() {
	let e = globalThis.document?.timeline?.currentTime;
	return typeof e == "number" ? e : performance.now();
}
//#endregion
//#region ../core/src/paramRuntime/viewParamRuntime.js
var vs = class {
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
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new ds(), this.#t = this.#e.createScope());
	}
	registerParam(e) {
		let t = e.name;
		if (h(t), this.#i.has(t)) throw Error("Parameter \"" + t + "\" already registered in this scope.");
		bs(e);
		let n, r;
		if (e.push == "outer") {
			let i = this.findRuntimeForParam(t);
			if (!i) throw Error(`Parameter "${t}" not found in outer scope!`);
			let a = i.paramConfigs.get(t);
			if (!a) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a || "ruler" in a) throw Error(`The outer parameter "${t}" must not have expr, select, or ruler properties!`);
			n = (e) => {
				i.setValue(t, e);
			}, this.#n.set(t, n), "ruler" in e && (r = g(e, this), n(r));
		} else if ("value" in e) r = g(e, this), n = "transition" in e ? this.#f(t, r, e.transition) : this.#d(t, r);
		else if ("expr" in e) {
			if ("transition" in e) this.#p(t, e.expr, e.transition);
			else {
				let n = this.#e.registerDerived(this.#t, t, e.expr, { resolveScaleResolution: this.#s });
				this.#r.set(t, n);
			}
			n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = g(e, this), n = this.#d(t, r);
		if ("select" in e) {
			if (r ??= g(e, this), !this.#n.has(t)) {
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
		if (h(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#r.set(e, r);
		let i = (e) => {
			r.set(e), this.#e.flushNow();
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
		return this.#r.get(e)?.get();
	}
	getTargetValue(e) {
		return h(e), this.#a.get(e)?.target ?? this.getValue(e);
	}
	subscribe(e, t) {
		h(e);
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
		return h(e), this.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return h(e), this.#i.has(e) ? !0 : this.#o()?.hasConfiguredParamInScopeChain(e) ?? !1;
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
				kind: ys(r),
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
		let r = xs(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#r.set(e, i);
		let a = this.#c;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = gs(a, ({ value: e }) => {
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
		let i = xs(e, n);
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
		for (let e of this.#i.values()) if (m(e)) {
			let t = e.select;
			if (r(t)) {
				if (t == "point") return !0;
			} else if (t.type == "point") return !0;
		}
		return !1;
	}
};
function ys(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function bs(e) {
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
function xs(e, t) {
	if (typeof t != "number" || !Number.isFinite(t)) throw Error(`Transitioned parameter "${e}" must have a finite numeric value.`);
	return t;
}
//#endregion
//#region ../core/src/view/layout/flexLayout.js
function Ss(e, t, { spacing: n, devicePixelRatio: r, offset: i, reverse: a } = {}) {
	n ||= 0, i ||= 0;
	let o = Ns(e, t, n), s = 0, c = 0;
	for (let t = 0; t < e.length; t++) s += o[t], X(e[t]) || c++;
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
	if (e.length == 1 && X(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (X(r)) d++;
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
function Cs(e, { spacing: t } = { spacing: 0 }) {
	let n = 0;
	for (let r of e) n += Ls(r) + (X(r) ? 0 : t);
	return Math.max(0, n - t);
}
function ws(e, t, { spacing: n = 0 } = {}) {
	let r = [], i = [], a = 0, o = 0;
	for (let [s, c] of e.entries()) {
		let e = Ls(c), l = !X(c), u = o && l ? n : 0;
		i.length && a + u + e > t && (r.push(i), i = [], a = 0, o = 0), i.push(s), a += (o && l ? n : 0) + e, o += +!!l;
	}
	return i.length && r.push(i), r;
}
function Ts(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, Ls(o));
		let e = Rs(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return Vs({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function Es(e) {
	let t = {
		px: 0,
		grow: 0,
		minPx: 0,
		maxPx: 0
	}, n = !0;
	for (let r of e) {
		t.px += Z(r.px), t.grow += Z(r.grow), t.minPx += Ls(r);
		let e = Rs(r);
		e === void 0 ? n = !1 : t.maxPx += e;
	}
	return n || delete t.maxPx, Vs(t);
}
var Ds = class e {
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
		return new e(Bs(this.width, t), Bs(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, Os = Object.freeze({
	px: 0,
	grow: 0
}), ks = new Ds(Os, Os);
function X(e) {
	return !e.px && !e.grow && !e.minPx;
}
function As(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function Z(e) {
	return e || 0;
}
function js(e) {
	return e && (y(e.px) || y(e.grow) || y(e.minPx) || y(e.maxPx));
}
function Ms(e) {
	if (Dc(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (js(e)) return Fs(e), Vs(e);
	if (y(e)) return {
		px: e,
		grow: 0
	};
	if (e === "container" || !e) return {
		px: 0,
		grow: 1
	};
	throw Error(`Invalid sizeDef: ${e}`);
}
function Ns(e, t, n) {
	let r = !1;
	for (let t of e) Fs(t), r ||= zs(t);
	if (!r) return Ps(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) X(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		Z(n.grow) || (i[t] = Is(Z(n.px), n), c.add(t));
	}
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += Z(e[o].px), n += Z(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = Is(Z(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t), l = 0, u = [], d = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = Z(r.px) + Z(r.grow) / n * o, s = Is(a, r);
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
function Ps(e, t, n) {
	let r = 0, i = 0;
	for (let t of e) r += Z(t.px) + (X(t) ? 0 : n), i += Z(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = X(n) ? 0 : Z(n.px) + (i ? Z(n.grow) / i * a : 0);
	}
	return o;
}
function Fs(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function Is(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function Ls(e) {
	return Is(Z(e.px), e);
}
function Rs(e) {
	return e.maxPx ?? (Z(e.grow) ? void 0 : Ls(e));
}
function zs(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function Bs(e, t) {
	return Vs({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function Vs(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = zs(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > Z(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (Z(t.grow) || e.maxPx < Z(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var Hs = class e {
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
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : Ws;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return Ws;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Us(e, t) {
	return t ? new Hs(t.top === !1 ? 0 : e.top, t.right === !1 ? 0 : e.right, t.bottom === !1 ? 0 : e.bottom, t.left === !1 ? 0 : e.left) : e;
}
var Ws = Hs.createUniformPadding(0);
Object.freeze(Ws);
//#endregion
//#region ../core/src/utils/propertyCacher.js
var Gs = Symbol("cacheMap");
function Ks(e, t, n) {
	let r = Xs(e).get(t);
	return r === void 0 && (r = n(t), Xs(e).set(t, r)), r;
}
function qs(e, t) {
	Xs(e).delete(t);
}
function Js(e, t) {
	let n = Xs(e);
	for (let e of n.keys()) e.startsWith(t) && n.delete(e);
	Xs(e).delete(t);
}
function Ys(e) {
	e[Gs] = /* @__PURE__ */ new Map();
}
function Xs(e) {
	return e[Gs] || Ys(e), e[Gs];
}
//#endregion
//#region ../core/src/utils/url.js
var Zs = /^([A-Za-z]+:)?\/\//;
function Qs(e, t) {
	if (t && Zs.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return ec(n) + t;
}
function $s(e, t, n = tc()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		} else if (n) return new URL(t, n).href;
	} catch {}
	return Qs(r, t);
}
function ec(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function tc() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../core/src/view/viewError.js
var Q = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ViewError", this.view = t;
	}
};
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function nc(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function rc(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function ic(e) {
	return c(e) && !Array.isArray(e);
}
function ac(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = oc(r);
	return t;
}
function oc(e) {
	return Array.isArray(e) ? e.map(oc) : ic(e) ? ac(e) : e;
}
function sc(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		ic(r) && ic(t) ? sc(t, r) : e[n] = oc(r);
	}
	return e;
}
function cc(e) {
	let t = {};
	for (let n of e) n && sc(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/viewChrome.js
var lc = /* @__PURE__ */ new WeakMap();
function uc(e, t) {
	lc.set(e, t);
}
function dc(e) {
	return lc.get(e);
}
function fc(e) {
	return lc.has(e);
}
function pc(e) {
	let t = e;
	for (; t;) {
		let n = lc.get(t);
		if (n === "excludeSubtree" || t === e && n === "exclude") return !0;
		t = t.layoutParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/view/postScaleParams.js
var mc = /* @__PURE__ */ new WeakMap();
function hc(e, t) {
	mc.set(e, t);
}
function gc(e) {
	return mc.get(e);
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var _c = class {
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
}, vc = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new _c(t, e, () => n));
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
		return r || (r = new _c(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, yc = "VISIT_SKIP", bc = "VISIT_STOP", xc = (e) => e, Sc = class {
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
	opacityFunction = xc;
	#f = [];
	#p = "none";
	#m = /* @__PURE__ */ new Map();
	facetCoords = new oe([], JSON.stringify);
	constructor(e, t, n, r, i, a = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, this.#t = i, this.spec = e, this.namedDataScope = new vc(this), r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let o = r ? r.getConfigScopes() : [t.getBaseConfig()], s = e.config;
		if (this.#e = [...o, s].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, Ys(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...a
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new vs(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), t.animator, { snapTransitionedUpdates: !0 }), e.params) {
			let t = /* @__PURE__ */ new Set();
			for (let n of e.params) {
				if ("expr" in n) {
					let { usesScaleHelper: e, globals: r } = ee(n.expr), i = r.some((e) => t.has(e));
					if (e || i) {
						t.add(n.name), this.#d.push(n);
						continue;
					}
				}
				this.paramRuntime.registerParam(n);
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
		return cc(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return v(e) ? this.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		v(n) && this.paramRuntime.watchExpression(n.expr, e, {
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
		return this._cache("size/padding", () => Hs.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return Hs.zero();
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new Ds(this.#g("width"), this.#g("height")) : ks);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return ks;
		let e = this.getSize();
		return new Ds(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	#g(e) {
		let { value: t, implicit: n } = this.#_(e), r = this.resolveSizeValue(e, t), i = Dc(r), a = e == "viewportWidth" || e == "viewportHeight";
		if (i) {
			if (a) throw new Q(`Cannot use step-based size with "${e}"!`, this);
			let t = this.#x(e, r), i = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (i) {
				let n;
				if (Lo(i.type)) n = i.domain().length;
				else if (["locus", "index"].includes(i.type)) {
					let e = i.domain();
					n = d(e) - e[0];
				} else throw new Q(`Cannot use step-based size with "${i.type}" scale!`, this);
				let a = i;
				n = no(n, a.paddingInner(), a.paddingOuter());
				let o = e == "width" ? "xOffset" : "yOffset", s = this.getScaleResolution(o)?.getScale(), c = r.for ?? (s && Lo(s.type) ? "offset" : "position"), l = t;
				if (c == "offset") {
					if (!s || !Lo(s.type)) throw new Q(`Cannot use ${e}.step.for = "offset" without a discrete ${o} scale!`, this);
					let t = s, n = no(s.domain().length, t.paddingInner(), t.paddingOuter());
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
			else throw new Q(`Cannot use step-based size with "${e}"!`, this);
		} else return (r && Ms(r)) ?? (a ? void 0 : {
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
		if (pc(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let n = e == "width" ? "x" : "y", r = this.getScaleResolution(n)?.getResolvedScaleType();
		return r && !Lo(r) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (!v(t)) return t;
		let n = this.#C(e)();
		if (Oc(n) || n === "container") return n;
		throw new Q(`"${e}" ExprRef must resolve to a finite number or "container"!`, this);
	}
	registerSizeInvalidation() {
		this.#y("width", "x"), this.#y("height", "y"), this.#b("width"), this.#b("height"), this.#b("viewportWidth"), this.#b("viewportHeight");
	}
	#y(e, t) {
		let { value: n, implicit: r } = this.#_(e);
		if (!Dc(n)) return;
		let i = this.getScaleResolution(t);
		if (!i) {
			if (r) return;
			throw new Q("Cannot use 'step' size without a scale!", this);
		}
		let a = () => {
			let t = this.getSize()[e];
			this.invalidateSizeCache();
			let n = this.getSize()[e];
			As(t, n) || this.context.requestLayoutReflow();
		};
		if (i.addEventListener("domain", a), this.registerDisposer(() => i.removeEventListener("domain", a)), n.for != "position") {
			let t = e == "width" ? "xOffset" : "yOffset", n = this.getScaleResolution(t);
			n && Lo(n.getResolvedScaleType()) && (n.addEventListener("domain", a), this.registerDisposer(() => n.removeEventListener("domain", a)));
		}
	}
	#b(e) {
		let { value: t } = this.#_(e);
		v(t) ? this.#S(e, t.expr) : Dc(t) && v(t.step) && this.#S(e + ".step", t.step.expr);
	}
	#x(e, t) {
		let n = v(t.step) ? this.#C(e + ".step")() : t.step;
		if (Oc(n)) return n;
		throw new Q(`"${e}.step" ExprRef must resolve to a finite number!`, this);
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
		if (!t) throw new Q(`"${e}" ExprRef was not registered before layout!`, this);
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
		let e = [...this.#d, ...gc(this.spec) ?? []];
		if (e.length && !this.#u) {
			this.#u = !0, this.#l = !1;
			for (let t of e) this.paramRuntime.registerParam(t);
			this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				this.#l = !0, this.#T();
			}));
		}
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === xc) && (this.opacityFunction = wc(this));
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
	render(e, t, n = {}) {
		if (n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, ge(t, he(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? Hs.zero() : this.getPadding();
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
	getSampleFacetTexture() {}
	getSampleFacetPosition(e) {}
	getParentGridChromePolicy() {
		return {
			axes: !0,
			background: !0
		};
	}
	getScaleResolution(e) {
		let t = u(e);
		return this.getDataAncestors().map((e) => e.resolutions.scale[t]).find((e) => e);
	}
	getAxisResolution(e) {
		let t = u(e);
		return this.getDataAncestors().map((e) => e.resolutions.axis[t]).find((e) => e);
	}
	getLegendResolution(e) {
		let t = u(e);
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
		return Qs(() => this.dataParent?.getBaseUrl(), rc(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return r(e) ? e : v(e.text) ? this.paramRuntime.evaluateAndGet(e.text.expr) : e.text;
	}
	_cache(e, t) {
		return Ks(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				Js(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) Js(t, e);
				break;
			case "progeny":
				this.visit((t) => Js(t, e));
				break;
			default:
		}
	}
	invalidateSizeCache() {
		Js(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function Cc(e) {
	return "unitsPerPixel" in e;
}
function wc(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (y(t)) return (e) => e * t;
		if (Cc(t)) {
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
			}, r = Ec(t.values, "opacity.values", e);
			if (!re(t.unitsPerPixel)) throw new Q("\"opacity.unitsPerPixel\" must be an array.", e);
			let i = () => 1, a = [], o = () => {
				let t = Tc(Ec(a.map((e) => e()), "opacity.unitsPerPixel", e), r, e), n = ha().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				i = (e) => n(e);
			};
			a = t.unitsPerPixel.map((t) => {
				if (v(t)) {
					let n = e.paramRuntime.watchExpression(t.expr, () => {
						o(), e.context.animator.requestRender();
					});
					return () => n(null);
				} else return () => t;
			}), o();
			let c = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return s(e.scale.domain()) / t;
			}, l;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) l = () => (c(t) + c(r)) / 2;
				else if (t) l = () => c(t);
				else if (r) l = () => c(r);
				else throw new Q("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new Q("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				l = () => c(r);
			}
			return (e) => i(l()) * e;
		} else if (v(t)) {
			let n = e.paramRuntime.watchExpression(t.expr, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return (e) => e;
}
function Tc(e, t, n) {
	if (!e.length) throw new Q("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new Q("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new Q("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new Q("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function Ec(e, t, n) {
	if (!re(e)) throw new Q("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!y(e) || !Number.isFinite(e)) throw new Q("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var Dc = (e) => !!e && typeof e == "object" && "step" in e;
function Oc(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var $ = /* @__PURE__ */ new WeakMap(), kc = /* @__PURE__ */ new WeakMap();
function Ac(e, t) {
	Mc(e, t, "Import");
}
function jc(e, t) {
	Mc(e, t, "View");
}
function Mc(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	$.set(e, { name: t });
}
function Nc(e) {
	return $.get(e);
}
function Pc(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	kc.set(e, n);
}
function Fc(e, t = {}) {
	uc(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function Ic(e) {
	return e.getLayoutAncestors().some(fc);
}
function Lc(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = $.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function Rc(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: Lc(e),
		view: t
	};
}
function zc(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: Lc(e),
		param: t
	};
}
function Bc(e) {
	return Jc(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function Vc(e, t) {
	e.visit((e) => {
		let n = dc(e);
		if (n === "excludeSubtree") return yc;
		if (n !== "exclude") return t(e);
	});
}
function Hc(e, t) {
	e.visit((e) => {
		let n = kc.get(e);
		if (n === "excludeSubtree") return yc;
		if (n !== "exclude") return t(e);
	});
}
function Uc(e, t) {
	if (Yc(t), !il(e, t.scope)) return;
	let n = [];
	if (al(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function Wc(e, t) {
	if (Jc(t), !il(e, t.scope)) return;
	let n = [];
	if (al(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Xc(i) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function Gc(e, t) {
	e.visit((e) => {
		let n = kc.get(e);
		if (n === "excludeSubtree") return yc;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Xc(r) && t({
			view: e,
			param: r,
			selector: zc(e, n)
		});
	});
}
function Kc(e) {
	let t = [];
	return Gc(e, (e) => t.push(e)), t;
}
function qc(e) {
	let t = [];
	for (let n of Zc(e)) {
		let r = Qc(n);
		el(e, r, t), tl(e, r, t);
	}
	return t;
}
function Jc(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function Yc(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Xc(e) {
	return e.persist === !1 ? !1 : m(e) ? !0 : te(e) ? !!e.bind : !1;
}
function Zc(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = $.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function Qc(e) {
	return Lc(e);
}
function $c(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function el(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	al(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!Xc(n)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + $c(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function tl(e, t, n) {
	let r = nl(e, t);
	if (!r.length) return;
	let i = r.filter((e) => rl(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = $.get(e), n = t ? t.name : void 0;
		typeof n != "string" || !n.length || a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + $c(t) + ".",
		scope: t
	});
}
function nl(e, t) {
	let n = [];
	return al(e, t, (e) => {
		if (Lc(e).length !== t.length + 1) return;
		let r = $.get(e);
		!r || typeof r.name != "string" || n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function rl(e) {
	let t = !1;
	return e.visit((e) => {
		let n = kc.get(e);
		if (n === "excludeSubtree") return yc;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Xc(n)) return t = !0, bc;
		}
	}), t;
}
function il(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if (al(e, r, (e) => {
			let n = $.get(e);
			if (!(!n || n.name !== i) && Lc(e).length === r.length + 1) {
				if (t) return a = !0, bc;
				t = e;
			}
		}, { includeNamedImportRoots: !0 }), a) throw Error("Multiple import instances named \"" + i + "\" in scope.");
		if (t) n = t, r.push(i);
		else return;
	}
	return n;
}
function al(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = $.get(e), a = kc.get(e);
		if (a === "excludeSubtree") return yc;
		if (a !== "exclude" && ol(e, t, r, i)) return n(e);
	});
}
function ol(e, t, n, r) {
	let i = Lc(e);
	return sl(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : cl(t, i);
}
function sl(e, t) {
	return e.length === t.length && cl(e, t);
}
function cl(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
export { io as $, x as $t, qs as A, Ot as At, Ss as B, Lt as Bt, cc as C, U as Ct, ec as D, fr as Dt, Qs as E, dr as Et, Os as F, Tt as Ft, hs as G, He as Gt, Es as H, We as Ht, Ts as I, Mt as It, ms as J, Fe as Jt, gs as K, Re as Kt, Cs as L, Dt as Lt, Hs as M, Nt as Mt, Us as N, jt as Nt, $s as O, pr as Ot, Ds as P, Et as Pt, lo as Q, Te as Qt, Rs as R, N as Rt, pc as S, _i as St, Q as T, ur as Tt, ws as U, Ue as Ut, Ms as V, Ge as Vt, vs as W, Ve as Wt, go as X, Pe as Xt, Qo as Y, Ie as Yt, _o as Z, De as Zt, yc as _, zo as _t, Rc as a, ao as at, hc as b, Zo as bt, Fc as c, so as ct, jc as d, Ho as dt, be as en, mo as et, Wc as f, Vo as ft, Vc as g, Bo as gt, Hc as h, Ro as ht, Lc as i, co as it, Js as j, At as jt, Ks as k, Kt as kt, Pc as l, no as lt, qc as m, Lo as mt, Nc as n, uo as nt, Ic as o, oo as ot, Uc as p, Io as pt, ps as q, Le as qt, zc as r, fo as rt, Bc as s, po as st, Kc as t, ve as tn, ho as tt, Ac as u, Wo as ut, bc as v, Uo as vt, nc as w, hr as wt, fc as x, ra as xt, Sc as y, Y as yt, Ls as z, It as zt };
