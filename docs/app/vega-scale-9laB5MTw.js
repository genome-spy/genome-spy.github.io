import { Cn as e, Sn as t, Tn as n, _ as r, _n as i, bn as a, c as o, d as s, f as c, g as l, h as u, l as d, m as f, p, u as m, vn as h, wn as g, xn as ee, yn as te } from "./clipOptions-DXTezKOk.js";
//#region \0rolldown/runtime.js
var _ = Object.defineProperty, v = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ne = (e, t) => {
	let n = {};
	for (var r in e) _(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || _(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function y(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function re(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function b(e) {
	let t, n, r;
	e.length === 2 ? (t = e === y || e === re ? e : ie, n = e, r = e) : (t = y, n = (t, n) => y(e(t), n), r = (t, n) => e(t) - n);
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
function ie() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function ae(e) {
	return e === null ? NaN : +e;
}
function* oe(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var se = b(y), x = se.right, ce = se.left;
b(ae).center;
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function le(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function ue(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = fe(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => fe(n[e], n[t]))), le(e, r);
	}
	return e.sort(de(n));
}
function de(e = y) {
	if (e === y) return fe;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function fe(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function pe(e, t) {
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
function me(e, t) {
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
function he(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? fe : de(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			he(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (ge(e, n, t), i(e[r], a) > 0 && ge(e, n, r); o < s;) {
			for (ge(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? ge(e, n, s) : (++s, ge(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function ge(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function _e(e, t, n) {
	if (e = Float64Array.from(oe(e, n)), (r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return me(e);
		if (t >= 1) return pe(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = pe(he(e, a).subarray(0, a + 1));
		return o + (me(e.subarray(a + 1)) - o) * (i - a);
	}
}
function ve(e, t, n = ae) {
	if ((r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function ye(e) {
	return Math.max(0, -a(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function be(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(a(t) / 3))) * 3 - a(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function xe(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, a(t) - a(e)) + 1;
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/accessor.js
function S(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/getter.js
function Se(e) {
	return e.length === 1 ? Ce(e[0]) : we(e);
}
var Ce = (e) => function(t) {
	return t[e];
}, we = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/error.js
function Te(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/splitAccessPath.js
function Ee(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Te("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Te("Access path missing closing bracket: " + e), r && Te("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/field.js
function De(e, t, n) {
	let r = Ee(e), i = r.length === 1 ? r[0] : e;
	return S((n && n.get || Se)(r), [i], t || i);
}
De("id"), S((e) => e, [], "identity"), S(() => 0, [], "zero"), S(() => 1, [], "one"), S(() => !0, [], "true"), S(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Oe = /* @__PURE__ */ new Date(), ke = /* @__PURE__ */ new Date();
function C(e, t, n, r) {
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
	}, i.filter = (n) => C((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) {
			if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
			else for (; --r >= 0;) for (; t(e, 1), !n(e););
		}
	}), n && (i.count = (t, r) => (Oe.setTime(+t), ke.setTime(+r), e(Oe), e(ke), Math.floor(n(Oe, ke))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var Ae = C(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Ae.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? C((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Ae), Ae.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var w = 1e3, T = w * 60, E = T * 60, D = E * 24, je = D * 7, Me = D * 30, Ne = D * 365, O = C((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * w);
}, (e, t) => (t - e) / w, (e) => e.getUTCSeconds());
O.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var Pe = C((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * w);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getMinutes());
Pe.range;
var Fe = C((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getUTCMinutes());
Fe.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var Ie = C((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * w - e.getMinutes() * T);
}, (e, t) => {
	e.setTime(+e + t * E);
}, (e, t) => (t - e) / E, (e) => e.getHours());
Ie.range;
var Le = C((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * E);
}, (e, t) => (t - e) / E, (e) => e.getUTCHours());
Le.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var k = C((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / D, (e) => e.getDate() - 1);
k.range;
var Re = C((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / D, (e) => e.getUTCDate() - 1);
Re.range;
var ze = C((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / D, (e) => Math.floor(e / D));
ze.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function A(e) {
	return C((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / je);
}
var Be = A(0), Ve = A(1), He = A(2), Ue = A(3), We = A(4), Ge = A(5), Ke = A(6);
Be.range, Ve.range, He.range, Ue.range, We.range, Ge.range, Ke.range;
function j(e) {
	return C((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / je);
}
var qe = j(0), Je = j(1), Ye = j(2), Xe = j(3), Ze = j(4), Qe = j(5), $e = j(6);
qe.range, Je.range, Ye.range, Xe.range, Ze.range, Qe.range, $e.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var et = C((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
et.range;
var tt = C((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
tt.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var M = C((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
M.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), M.range;
var N = C((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
N.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), N.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function nt(t, n, r, i, a, o) {
	let s = [
		[
			O,
			1,
			w
		],
		[
			O,
			5,
			5 * w
		],
		[
			O,
			15,
			15 * w
		],
		[
			O,
			30,
			30 * w
		],
		[
			o,
			1,
			T
		],
		[
			o,
			5,
			5 * T
		],
		[
			o,
			15,
			15 * T
		],
		[
			o,
			30,
			30 * T
		],
		[
			a,
			1,
			E
		],
		[
			a,
			3,
			3 * E
		],
		[
			a,
			6,
			6 * E
		],
		[
			a,
			12,
			12 * E
		],
		[
			i,
			1,
			D
		],
		[
			i,
			2,
			2 * D
		],
		[
			r,
			1,
			je
		],
		[
			n,
			1,
			Me
		],
		[
			n,
			3,
			3 * Me
		],
		[
			t,
			1,
			Ne
		]
	];
	function c(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : l(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function l(n, r, i) {
		let a = Math.abs(r - n) / i, o = b(([, , e]) => e).right(s, a);
		if (o === s.length) return t.every(e(n / Ne, r / Ne, i));
		if (o === 0) return Ae.every(Math.max(e(n, r, i), 1));
		let [c, l] = s[a / s[o - 1][2] < s[o][2] / a ? o - 1 : o];
		return c.every(l);
	}
	return [c, l];
}
var [rt, it] = nt(N, tt, qe, ze, Le, Fe), [at, ot] = nt(M, et, Be, k, Ie, Pe), P = "year", st = "quarter", F = "month", ct = "week", I = "isoweek", lt = "date", ut = "dayofyear", dt = "hours", ft = "minutes", pt = "seconds", mt = "milliseconds";
[
	P,
	st,
	F,
	ct,
	I,
	lt,
	"day",
	ut,
	dt,
	ft,
	pt,
	mt
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${P}${I}`, `${P}${F}`, `${P}${F}${lt}`, `${dt}${ft}`, ct + "", P + I, I + "", ct + "", P + I, I + "";
var ht = {
	[P]: M,
	[st]: et.every(3),
	[F]: et,
	[ct]: Be,
	[I]: Ve,
	[lt]: k,
	day: k,
	[ut]: k,
	[dt]: Ie,
	[ft]: Pe,
	[pt]: O,
	[mt]: Ae
}, gt = {
	[P]: N,
	[st]: tt.every(3),
	[F]: tt,
	[ct]: qe,
	[I]: Je,
	[lt]: Re,
	day: Re,
	[ut]: Re,
	[dt]: Le,
	[ft]: Fe,
	[pt]: O,
	[mt]: Ae
};
function _t(e) {
	return ht[e];
}
function vt(e) {
	return gt[e];
}
var yt = 1e3, bt = yt * 60, xt = bt * 60, St = xt * 24;
St * 7;
var Ct = St * 30;
St * 365, [
	P,
	F,
	lt,
	dt,
	ft,
	pt,
	mt
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * yt, 15 * yt, 30 * yt, 5 * bt, 15 * bt, 30 * bt, 3 * xt, 6 * xt, 12 * xt, 3 * Ct;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function wt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Tt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Et(e, t, n) {
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
function Dt(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Mt(i), u = Nt(i), d = Mt(a), f = Nt(a), p = Mt(o), m = Nt(o), h = Mt(s), g = Nt(s), ee = Mt(c), te = Nt(c), _ = {
		a: de,
		A: fe,
		b: pe,
		B: me,
		c: null,
		d: en,
		e: en,
		f: on,
		g: _n,
		G: yn,
		H: tn,
		I: nn,
		j: rn,
		L: an,
		m: sn,
		M: cn,
		p: he,
		q: ge,
		Q: Hn,
		s: Un,
		S: ln,
		u: un,
		U: dn,
		V: pn,
		w: mn,
		W: hn,
		x: null,
		X: null,
		y: gn,
		Y: vn,
		Z: bn,
		"%": Vn
	}, v = {
		a: _e,
		A: ve,
		b: ye,
		B: be,
		c: null,
		d: xn,
		e: xn,
		f: En,
		g: Ln,
		G: zn,
		H: Sn,
		I: Cn,
		j: wn,
		L: Tn,
		m: Dn,
		M: On,
		p: xe,
		q: S,
		Q: Hn,
		s: Un,
		S: kn,
		u: An,
		U: jn,
		V: Nn,
		w: Pn,
		W: Fn,
		x: null,
		X: null,
		y: In,
		Y: Rn,
		Z: Bn,
		"%": Vn
	}, ne = {
		a: ae,
		A: oe,
		b: se,
		B: x,
		c: ce,
		d: Wt,
		e: Wt,
		f: Xt,
		g: Bt,
		G: zt,
		H: Kt,
		I: Kt,
		j: Gt,
		L: Yt,
		m: Ut,
		M: qt,
		p: ie,
		q: Ht,
		Q: Qt,
		s: $t,
		S: Jt,
		u: Ft,
		U: It,
		V: Lt,
		w: Pt,
		W: Rt,
		x: le,
		X: ue,
		y: Bt,
		Y: zt,
		Z: Vt,
		"%": Zt
	};
	_.x = y(n, _), _.X = y(r, _), _.c = y(t, _), v.x = y(n, v), v.X = y(r, v), v.c = y(t, v);
	function y(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = Ot[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function re(e, t) {
		return function(n) {
			var r = Et(1900, void 0, 1), i = b(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Tt(Et(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? Je.ceil(a) : Je(a), a = Re.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = wt(Et(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Ve.ceil(a) : Ve(a), a = k.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? Tt(Et(r.y, 0, 1)).getUTCDay() : wt(Et(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Tt(r)) : wt(r);
		};
	}
	function b(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ne[s in Ot ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ie(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ae(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function se(e, t, n) {
		var r = ee.exec(t.slice(n));
		return r ? (e.m = te.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function x(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ce(e, n, r) {
		return b(e, t, n, r);
	}
	function le(e, t, r) {
		return b(e, n, t, r);
	}
	function ue(e, t, n) {
		return b(e, r, t, n);
	}
	function de(e) {
		return o[e.getDay()];
	}
	function fe(e) {
		return a[e.getDay()];
	}
	function pe(e) {
		return c[e.getMonth()];
	}
	function me(e) {
		return s[e.getMonth()];
	}
	function he(e) {
		return i[+(e.getHours() >= 12)];
	}
	function ge(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function _e(e) {
		return o[e.getUTCDay()];
	}
	function ve(e) {
		return a[e.getUTCDay()];
	}
	function ye(e) {
		return c[e.getUTCMonth()];
	}
	function be(e) {
		return s[e.getUTCMonth()];
	}
	function xe(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function S(e) {
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
var Ot = {
	"-": "",
	_: " ",
	0: "0"
}, L = /^\s*\d+/, kt = /^%/, At = /[\\^$*+?|[\]().{}]/g;
function R(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function jt(e) {
	return e.replace(At, "\\$&");
}
function Mt(e) {
	return RegExp("^(?:" + e.map(jt).join("|") + ")", "i");
}
function Nt(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Pt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Ft(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function It(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Lt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Rt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function zt(e, t, n) {
	var r = L.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Bt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Vt(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ht(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ut(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Wt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Gt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Kt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function qt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Jt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Yt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Xt(e, t, n) {
	var r = L.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Zt(e, t, n) {
	var r = kt.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Qt(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function $t(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function en(e, t) {
	return R(e.getDate(), t, 2);
}
function tn(e, t) {
	return R(e.getHours(), t, 2);
}
function nn(e, t) {
	return R(e.getHours() % 12 || 12, t, 2);
}
function rn(e, t) {
	return R(1 + k.count(M(e), e), t, 3);
}
function an(e, t) {
	return R(e.getMilliseconds(), t, 3);
}
function on(e, t) {
	return an(e, t) + "000";
}
function sn(e, t) {
	return R(e.getMonth() + 1, t, 2);
}
function cn(e, t) {
	return R(e.getMinutes(), t, 2);
}
function ln(e, t) {
	return R(e.getSeconds(), t, 2);
}
function un(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function dn(e, t) {
	return R(Be.count(M(e) - 1, e), t, 2);
}
function fn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? We(e) : We.ceil(e);
}
function pn(e, t) {
	return e = fn(e), R(We.count(M(e), e) + (M(e).getDay() === 4), t, 2);
}
function mn(e) {
	return e.getDay();
}
function hn(e, t) {
	return R(Ve.count(M(e) - 1, e), t, 2);
}
function gn(e, t) {
	return R(e.getFullYear() % 100, t, 2);
}
function _n(e, t) {
	return e = fn(e), R(e.getFullYear() % 100, t, 2);
}
function vn(e, t) {
	return R(e.getFullYear() % 1e4, t, 4);
}
function yn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? We(e) : We.ceil(e), R(e.getFullYear() % 1e4, t, 4);
}
function bn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + R(t / 60 | 0, "0", 2) + R(t % 60, "0", 2);
}
function xn(e, t) {
	return R(e.getUTCDate(), t, 2);
}
function Sn(e, t) {
	return R(e.getUTCHours(), t, 2);
}
function Cn(e, t) {
	return R(e.getUTCHours() % 12 || 12, t, 2);
}
function wn(e, t) {
	return R(1 + Re.count(N(e), e), t, 3);
}
function Tn(e, t) {
	return R(e.getUTCMilliseconds(), t, 3);
}
function En(e, t) {
	return Tn(e, t) + "000";
}
function Dn(e, t) {
	return R(e.getUTCMonth() + 1, t, 2);
}
function On(e, t) {
	return R(e.getUTCMinutes(), t, 2);
}
function kn(e, t) {
	return R(e.getUTCSeconds(), t, 2);
}
function An(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function jn(e, t) {
	return R(qe.count(N(e) - 1, e), t, 2);
}
function Mn(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Ze(e) : Ze.ceil(e);
}
function Nn(e, t) {
	return e = Mn(e), R(Ze.count(N(e), e) + (N(e).getUTCDay() === 4), t, 2);
}
function Pn(e) {
	return e.getUTCDay();
}
function Fn(e, t) {
	return R(Je.count(N(e) - 1, e), t, 2);
}
function In(e, t) {
	return R(e.getUTCFullYear() % 100, t, 2);
}
function Ln(e, t) {
	return e = Mn(e), R(e.getUTCFullYear() % 100, t, 2);
}
function Rn(e, t) {
	return R(e.getUTCFullYear() % 1e4, t, 4);
}
function zn(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Ze(e) : Ze.ceil(e), R(e.getUTCFullYear() % 1e4, t, 4);
}
function Bn() {
	return "+0000";
}
function Vn() {
	return "%";
}
function Hn(e) {
	return +e;
}
function Un(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var Wn, Gn, Kn, qn, Jn;
Yn({
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
function Yn(e) {
	return Wn = Dt(e), Gn = Wn.format, Kn = Wn.parse, qn = Wn.utcFormat, Jn = Wn.utcParse, Wn;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/accessor.js
function Xn(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/getter.js
function Zn(e) {
	return e.length === 1 ? Qn(e[0]) : $n(e);
}
var Qn = (e) => function(t) {
	return t[e];
}, $n = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/error.js
function er(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/splitAccessPath.js
function tr(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || er("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && er("Access path missing closing bracket: " + e), r && er("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/field.js
function nr(e, t, n) {
	let r = tr(e), i = r.length === 1 ? r[0] : e;
	return Xn((n && n.get || Zn)(r), [i], t || i);
}
nr("id"), Xn((e) => e, [], "identity"), Xn(() => 0, [], "zero"), Xn(() => 1, [], "one"), Xn(() => !0, [], "true"), Xn(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/isArray.js
var rr = Array.isArray;
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/peek.js
function ir(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toNumber.js
function ar(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/array.js
function or(e) {
	return e == null ? [] : rr(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toSet.js
function sr(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function z(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function B(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
//#endregion
//#region ../../node_modules/d3-scale/src/ordinal.js
var cr = Symbol("implicit");
function lr() {
	var e = new n(), t = [], r = [], i = cr;
	function a(n) {
		let a = e.get(n);
		if (a === void 0) {
			if (i !== cr) return i;
			e.set(n, a = t.push(n) - 1);
		}
		return r[a % r.length];
	}
	return a.domain = function(r) {
		if (!arguments.length) return t.slice();
		t = [], e = new n();
		for (let n of r) e.has(n) || e.set(n, t.push(n) - 1);
		return a;
	}, a.range = function(e) {
		return arguments.length ? (r = Array.from(e), a) : r.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (i = e, a) : i;
	}, a.copy = function() {
		return lr(t, r).unknown(i);
	}, z.apply(a, arguments), a;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var ur = Math.PI / 180, dr = 180 / Math.PI, fr = 18, pr = .96422, mr = 1, hr = .82521, gr = 4 / 29, _r = 6 / 29, vr = 3 * _r * _r, yr = _r * _r * _r;
function br(e) {
	if (e instanceof V) return new V(e.l, e.a, e.b, e.opacity);
	if (e instanceof H) return Or(e);
	e instanceof d || (e = u(e));
	var t = Tr(e.r), n = Tr(e.g), r = Tr(e.b), i = Sr((.2225045 * t + .7168786 * n + .0606169 * r) / mr), a, o;
	return t === n && n === r ? a = o = i : (a = Sr((.4360747 * t + .3850649 * n + .1430804 * r) / pr), o = Sr((.0139322 * t + .0971045 * n + .7141733 * r) / hr)), new V(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function xr(e, t, n, r) {
	return arguments.length === 1 ? br(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
l(V, xr, r(o, {
	brighter(e) {
		return new V(this.l + fr * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new V(this.l - fr * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = pr * Cr(t), e = mr * Cr(e), n = hr * Cr(n), new d(wr(3.1338561 * t - 1.6168667 * e - .4906146 * n), wr(-.9787684 * t + 1.9161415 * e + .033454 * n), wr(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Sr(e) {
	return e > yr ? e ** (1 / 3) : e / vr + gr;
}
function Cr(e) {
	return e > _r ? e * e * e : vr * (e - gr);
}
function wr(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Tr(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Er(e) {
	if (e instanceof H) return new H(e.h, e.c, e.l, e.opacity);
	if (e instanceof V || (e = br(e)), e.a === 0 && e.b === 0) return new H(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * dr;
	return new H(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Dr(e, t, n, r) {
	return arguments.length === 1 ? Er(e) : new H(e, t, n, r ?? 1);
}
function H(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Or(e) {
	if (isNaN(e.h)) return new V(e.l, 0, 0, e.opacity);
	var t = e.h * ur;
	return new V(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
l(H, Dr, r(o, {
	brighter(e) {
		return new H(this.h, this.c, this.l + fr * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new H(this.h, this.c, this.l - fr * (e ?? 1), this.opacity);
	},
	rgb() {
		return Or(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var kr = -.14861, Ar = 1.78277, jr = -.29227, Mr = -.90649, Nr = 1.97294, Pr = Nr * Mr, Fr = Nr * Ar, Ir = Ar * jr - Mr * kr;
function Lr(e) {
	if (e instanceof U) return new U(e.h, e.s, e.l, e.opacity);
	e instanceof d || (e = u(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Ir * r + Pr * t - Fr * n) / (Ir + Pr - Fr), a = r - i, o = (Nr * (n - i) - jr * a) / Mr, s = Math.sqrt(o * o + a * a) / (Nr * i * (1 - i)), c = s ? Math.atan2(o, a) * dr - 120 : NaN;
	return new U(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function Rr(e, t, n, r) {
	return arguments.length === 1 ? Lr(e) : new U(e, t, n, r ?? 1);
}
function U(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
l(U, Rr, r(o, {
	brighter(e) {
		return e = e == null ? m : m ** +e, new U(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? c : c ** +e, new U(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * ur, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new d(255 * (t + n * (kr * r + Ar * i)), 255 * (t + n * (jr * r + Mr * i)), 255 * (t + Nr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function zr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function Br(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return zr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Vr(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return zr((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Hr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Ur(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Wr(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Gr(e, t) {
	var n = t - e;
	return n ? Ur(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Hr(isNaN(e) ? t : e);
}
function Kr(e) {
	return (e = +e) == 1 ? W : function(t, n) {
		return n - t ? Wr(t, n, e) : Hr(isNaN(t) ? n : t);
	};
}
function W(e, t) {
	var n = t - e;
	return n ? Ur(e, n) : Hr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var qr = (function e(t) {
	var n = Kr(t);
	function r(e, t) {
		var r = n((e = f(e)).r, (t = f(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = W(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Jr(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = f(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Yr = Jr(Br), Xr = Jr(Vr);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function Zr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Qr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function $r(e, t) {
	return (Qr(t) ? Zr : ei)(e, t);
}
function ei(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = K(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function ti(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function G(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function ni(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = K(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var ri = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ii = new RegExp(ri.source, "g");
function ai(e) {
	return function() {
		return e;
	};
}
function oi(e) {
	return function(t) {
		return e(t) + "";
	};
}
function si(e, t) {
	var n = ri.lastIndex = ii.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = ri.exec(e)) && (i = ii.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: G(r, i)
	})), n = ii.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? oi(c[0].x) : ai(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function K(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Hr(t) : (n === "number" ? G : n === "string" ? (r = s(t)) ? (t = r, qr) : si : t instanceof s ? qr : t instanceof Date ? ti : Qr(t) ? Zr : Array.isArray(t) ? ei : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ni : G)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function ci(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function li(e, t) {
	var n = Gr(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function ui(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var di = 180 / Math.PI, fi = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function pi(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * di,
		skewX: Math.atan(c) * di,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var mi;
function hi(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? fi : pi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gi(e) {
	return e == null || (mi ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), mi.setAttribute("transform", e), !(e = mi.transform.baseVal.consolidate())) ? fi : (e = e.matrix, pi(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function _i(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: G(e, i)
			}, {
				i: c - 2,
				x: G(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: G(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: G(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: G(e, n)
			}, {
				i: s - 2,
				x: G(t, r)
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
var vi = _i(hi, "px, ", "px)", "deg)"), yi = _i(gi, ", ", ")", ")"), bi = 1e-12;
function xi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Si(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Ci(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var wi = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < bi) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), ee = (u * u - s * s + r * p) / (2 * s * n * g), te = (u * u - s * s - r * p) / (2 * u * n * g), _ = Math.log(Math.sqrt(ee * ee + 1) - ee);
			h = (Math.log(Math.sqrt(te * te + 1) - te) - _) / t, m = function(e) {
				var r = e * h, i = xi(_), c = s / (n * g) * (i * Ci(t * r + _) - Si(_));
				return [
					a + c * d,
					o + c * f,
					s * i / xi(t * r + _)
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
function Ti(e) {
	return function(t, n) {
		var r = e((t = p(t)).h, (n = p(n)).h), i = W(t.s, n.s), a = W(t.l, n.l), o = W(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Ei = Ti(Gr), Di = Ti(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function Oi(e, t) {
	var n = W((e = xr(e)).l, (t = xr(t)).l), r = W(e.a, t.a), i = W(e.b, t.b), a = W(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function ki(e) {
	return function(t, n) {
		var r = e((t = Dr(t)).h, (n = Dr(n)).h), i = W(t.c, n.c), a = W(t.l, n.l), o = W(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Ai = ki(Gr), ji = ki(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function Mi(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = Rr(t)).h, (r = Rr(r)).h), a = W(t.s, r.s), o = W(t.l, r.l), s = W(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var Ni = Mi(Gr), Pi = Mi(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function Fi(e, t) {
	t === void 0 && (t = e, e = K);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Ii(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Li = /* @__PURE__ */ ne({
	interpolate: () => K,
	interpolateArray: () => $r,
	interpolateBasis: () => Br,
	interpolateBasisClosed: () => Vr,
	interpolateCubehelix: () => Ni,
	interpolateCubehelixLong: () => Pi,
	interpolateDate: () => ti,
	interpolateDiscrete: () => ci,
	interpolateHcl: () => Ai,
	interpolateHclLong: () => ji,
	interpolateHsl: () => Ei,
	interpolateHslLong: () => Di,
	interpolateHue: () => li,
	interpolateLab: () => Oi,
	interpolateNumber: () => G,
	interpolateNumberArray: () => Zr,
	interpolateObject: () => ni,
	interpolateRgb: () => qr,
	interpolateRgbBasis: () => Yr,
	interpolateRgbBasisClosed: () => Xr,
	interpolateRound: () => ui,
	interpolateString: () => si,
	interpolateTransformCss: () => vi,
	interpolateTransformSvg: () => yi,
	interpolateZoom: () => wi,
	piecewise: () => Fi,
	quantize: () => Ii
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function Ri(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function zi(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var Bi = [0, 1];
function q(e) {
	return e;
}
function Vi(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Ri(isNaN(t) ? NaN : .5);
}
function Hi(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Ui(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Vi(i, r), a = n(o, a)) : (r = Vi(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Wi(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Vi(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = x(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Gi(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ki() {
	var e = Bi, t = Bi, n = K, r, i, a, o = q, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== q && (o = Hi(e[0], e[n - 1])), s = n > 2 ? Wi : Ui, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), G))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, zi), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = ui, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : q, u()) : o !== q;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function qi() {
	return Ki()(q, q);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function Ji(t, n, r, a) {
	var o = e(t, n, r), s;
	switch (a = te(a ?? ",f"), a.type) {
		case "s":
			var c = Math.max(Math.abs(t), Math.abs(n));
			return a.precision == null && !isNaN(s = be(o, c)) && (a.precision = s), h(a, c);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			a.precision == null && !isNaN(s = xe(o, Math.max(Math.abs(t), Math.abs(n)))) && (a.precision = s - (a.type === "e"));
			break;
		case "f":
		case "%": a.precision == null && !isNaN(s = ye(o)) && (a.precision = s - (a.type === "%") * 2);
	}
	return i(a);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function J(e) {
	var n = e.domain;
	return e.ticks = function(e) {
		var t = n();
		return g(t[0], t[t.length - 1], e ?? 10);
	}, e.tickFormat = function(e, t) {
		var r = n();
		return Ji(r[0], r[r.length - 1], e ?? 10, t);
	}, e.nice = function(r) {
		r ??= 10;
		var i = n(), a = 0, o = i.length - 1, s = i[a], c = i[o], l, u, d = 10;
		for (c < s && (u = s, s = c, c = u, u = a, a = o, o = u); d-- > 0;) {
			if (u = t(s, c, r), u === l) return i[a] = s, i[o] = c, n(i);
			if (u > 0) s = Math.floor(s / u) * u, c = Math.ceil(c / u) * u;
			else if (u < 0) s = Math.ceil(s * u) / u, c = Math.floor(c * u) / u;
			else break;
			l = u;
		}
		return e;
	}, e;
}
function Yi() {
	var e = qi();
	return e.copy = function() {
		return Gi(e, Yi());
	}, z.apply(e, arguments), J(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Xi(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, zi), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Xi(e).unknown(t);
	}, e = arguments.length ? Array.from(e, zi) : [0, 1], J(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function Zi(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Qi(e) {
	return Math.log(e);
}
function $i(e) {
	return Math.exp(e);
}
function ea(e) {
	return -Math.log(-e);
}
function ta(e) {
	return -Math.exp(-e);
}
function na(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ra(e) {
	return e === 10 ? na : e === Math.E ? Math.exp : (t) => e ** +t;
}
function ia(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function aa(e) {
	return (t, n) => -e(-t, n);
}
function oa(e) {
	let t = e(Qi, $i), n = t.domain, r = 10, a, o;
	function s() {
		return a = ia(r), o = ra(r), n()[0] < 0 ? (a = aa(a), o = aa(o), e(ea, ta)) : e(Qi, $i), t;
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
			m.length * 2 < p && (m = g(i, s, p));
		} else m = g(l, u, Math.min(u - l, p)).map(o);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = te(n)).precision == null && (n.trim = !0), n = i(n)), e === Infinity) return n;
		let s = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / o(Math.round(a(e)));
			return t * r < r - .5 && (t *= r), t <= s ? n(e) : "";
		};
	}, t.nice = () => n(Zi(n(), {
		floor: (e) => o(Math.floor(a(e))),
		ceil: (e) => o(Math.ceil(a(e)))
	})), t;
}
function sa() {
	let e = oa(Ki()).domain([1, 10]);
	return e.copy = () => Gi(e, sa()).base(e.base()), z.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function ca(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function la(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function ua(e) {
	var t = 1, n = e(ca(t), la(t));
	return n.constant = function(n) {
		return arguments.length ? e(ca(t = +n), la(t)) : t;
	}, J(n);
}
function da() {
	var e = ua(Ki());
	return e.copy = function() {
		return Gi(e, da()).constant(e.constant());
	}, z.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function fa(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function pa(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ma(e) {
	return e < 0 ? -e * e : e * e;
}
function ha(e) {
	var t = e(q, q), n = 1;
	function r() {
		return n === 1 ? e(q, q) : n === .5 ? e(pa, ma) : e(fa(n), fa(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, J(t);
}
function ga() {
	var e = ha(Ki());
	return e.copy = function() {
		return Gi(e, ga()).exponent(e.exponent());
	}, z.apply(e, arguments), e;
}
function _a() {
	return ga.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function va() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = ve(e, r / i);
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
		return e.sort(y), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return va().domain(e).range(t).unknown(r);
	}, z.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function ya() {
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
		return ya().domain([e, t]).range(i).unknown(a);
	}, z.apply(J(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function ba() {
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
		return ba().domain(e).range(t).unknown(n);
	}, z.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function xa(e) {
	return new Date(e);
}
function Sa(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ca(e, t, n, r, i, a, o, s, c, l) {
	var u = qi(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), ee = l("%a %d"), te = l("%b %d"), _ = l("%B"), v = l("%Y");
	function ne(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? ee : te : n(e) < e ? _ : v)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Sa)) : f().map(xa);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ne : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Zi(n, e)) : u;
	}, u.copy = function() {
		return Gi(u, Ca(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function wa() {
	return z.apply(Ca(at, ot, M, et, Be, k, Ie, Pe, O, Gn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function Ta() {
	return z.apply(Ca(rt, it, N, tt, qe, Re, Le, Fe, O, qn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Ea() {
	var e = 0, t = 1, n, r, i, a, o = q, s = !1, c;
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
	return l.range = u(K), l.rangeRound = u(ui), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Y(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Da() {
	var e = J(Ea()(q));
	return e.copy = function() {
		return Y(e, Da());
	}, B.apply(e, arguments);
}
function Oa() {
	var e = oa(Ea()).domain([1, 10]);
	return e.copy = function() {
		return Y(e, Oa()).base(e.base());
	}, B.apply(e, arguments);
}
function ka() {
	var e = ua(Ea());
	return e.copy = function() {
		return Y(e, ka()).constant(e.constant());
	}, B.apply(e, arguments);
}
function Aa() {
	var e = ha(Ea());
	return e.copy = function() {
		return Y(e, Aa()).exponent(e.exponent());
	}, B.apply(e, arguments);
}
function ja() {
	return Aa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Ma() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = q, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Fi(e, [
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
	return p.range = m(K), p.rangeRound = m(ui), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Na() {
	var e = J(Ma()(q));
	return e.copy = function() {
		return Y(e, Na());
	}, B.apply(e, arguments);
}
function Pa() {
	var e = oa(Ma()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Y(e, Pa()).base(e.base());
	}, B.apply(e, arguments);
}
function Fa() {
	var e = ua(Ma());
	return e.copy = function() {
		return Y(e, Fa()).constant(e.constant());
	}, B.apply(e, arguments);
}
function Ia() {
	var e = ha(Ma());
	return e.copy = function() {
		return Y(e, Ia()).exponent(e.exponent());
	}, B.apply(e, arguments);
}
function La() {
	return Ia.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function X(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Ra = X("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), za = X("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Ba = X("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Va = X("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Ha = X("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Ua = X("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Wa = X("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Ga = X("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Ka = X("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), qa = X("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function Ja(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Ya = "identity", Xa = "linear", Za = "sqrt", Qa = "symlog", $a = "time", eo = "sequential", to = "diverging", no = "quantile", ro = "quantize", io = "threshold", ao = "ordinal", oo = "point", so = "band", co = "bin-ordinal", Z = "continuous", lo = "discrete", uo = "discretizing", Q = "interpolating", fo = "temporal";
function po(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function mo(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function ho() {
	let e = lr().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function u() {
		let e = t().length, u = r[1] < r[0], d = r[1 - u], f = Ja(e, s, c), p = r[u - 0];
		i = (d - p) / (f || 1), o && (i = Math.floor(i)), p += (d - p - i * (e - s)) * l, a = i * (1 - s), o && (p = Math.round(p), a = Math.round(a));
		let m = ee(e).map((e) => p + i * e);
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
		if (c === c && l === l && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, x(o, c) - 1), d = c === l ? u : x(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return ho().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, u();
}
function go(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return go(t());
	}, e;
}
function _o() {
	return go(ho().paddingInner(1));
}
var vo = Array.prototype.map;
function yo(e) {
	return vo.call(e, ar);
}
var bo = Array.prototype.slice;
function xo() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(x(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = yo(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = bo.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return Ji(e[0], ir(e), t ?? 10, n);
	}, n.copy = function() {
		return xo().domain(n.domain()).range(n.range());
	}, n;
}
var So = /* @__PURE__ */ new Map(), Co = Symbol("vega_scale");
function wo(e) {
	return e[Co] = !0, e;
}
function To(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? po(n) : n.invertExtent ? mo(n) : void 0, n.type = e, wo(n);
	};
	return r.metadata = sr(or(n)), r;
}
function $(e, t, n) {
	return arguments.length > 1 ? (So.set(e, To(e, t, n)), this) : Eo(e) ? So.get(e) : void 0;
}
$(Ya, Xi), $(Xa, Yi, Z), $("log", sa, [Z, "log"]), $("pow", ga, Z), $(Za, _a, Z), $(Qa, da, Z), $($a, wa, [Z, fo]), $("utc", Ta, [Z, fo]), $(eo, Da, [Z, Q]), $(`${eo}-${Xa}`, Da, [Z, Q]), $(`${eo}-log`, Oa, [
	Z,
	Q,
	"log"
]), $(`${eo}-pow`, Aa, [Z, Q]), $(`${eo}-${Za}`, ja, [Z, Q]), $(`${eo}-${Qa}`, ka, [Z, Q]), $(`${to}-${Xa}`, Na, [Z, Q]), $(`${to}-log`, Pa, [
	Z,
	Q,
	"log"
]), $(`${to}-pow`, Ia, [Z, Q]), $(`${to}-${Za}`, La, [Z, Q]), $(`${to}-${Qa}`, Fa, [Z, Q]), $(no, va, [uo, no]), $(ro, ya, uo), $(io, ba, uo), $(co, xo, [lo, uo]), $(ao, lr, lo), $(so, ho, lo), $(oo, _o, lo);
function Eo(e) {
	return So.has(e);
}
function Do(e, t) {
	let n = So.get(e);
	return n && n.metadata[t];
}
function Oo(e) {
	return Do(e, Z);
}
function ko(e) {
	return Do(e, lo);
}
function Ao(e) {
	return Do(e, uo);
}
function jo(e) {
	return Do(e, "log");
}
function Mo(e) {
	return Do(e, Q);
}
function No(e, t) {
	let n = t[0], r = ir(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function Po(e, t, n) {
	return Fi(Io(t || "rgb", n), e);
}
function Fo(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function Io(e, t) {
	let n = Li[Lo(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function Lo(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var Ro = {
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
}, zo = {
	accent: za,
	category10: Ra,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: Ba,
	observable10: Va,
	paired: Ha,
	pastel1: Ua,
	pastel2: Wa,
	set1: Ga,
	set2: Ka,
	set3: qa,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Bo(e) {
	if (rr(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function Vo(e, t) {
	for (let n in e) Uo(n, t(e[n]));
}
var Ho = {};
Vo(zo, Bo), Vo(Ro, (e) => Po(Bo(e)));
function Uo(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (Ho[e] = t, this) : Ho[e];
}
//#endregion
export { pe as $, cr as A, F as B, Fo as C, Yi as D, sa as E, Dt as F, _t as G, pt as H, lt as I, be as J, vt as K, dt as L, Kn as M, qn as N, ui as O, Jn as P, me as Q, mt as R, jo as S, Uo as T, ct as U, st as V, P as W, _e as X, ye as Y, ve as Z, No as _, ao as a, ne as at, Ao as b, ro as c, Qa as d, ue as et, io as f, Po as g, Io as h, Xa as i, v as it, Gn as j, K as k, eo as l, Ja as m, co as n, x as nt, oo as o, $a as p, xe as q, to as r, b as rt, no as s, so as t, ce as tt, Za as u, Oo as v, $ as w, Mo as x, ko as y, ft as z };
