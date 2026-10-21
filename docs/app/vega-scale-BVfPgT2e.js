import { An as e, At as t, Fn as n, Ft as r, In as i, It as a, Ln as o, Lt as s, Mn as c, Mt as l, Nn as u, Nt as d, Ot as f, Pn as p, Pt as m, jn as h, jt as g, kn as _, kt as v } from "./clipOptions-BKK6zTuk.js";
//#region \0rolldown/runtime.js
var y = Object.defineProperty, b = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), ee = (e, t) => {
	let n = {};
	for (var r in e) y(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || y(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function x(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function te(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function S(e) {
	let t, n, r;
	e.length === 2 ? (t = e === x || e === te ? e : ne, n = e, r = e) : (t = x, n = (t, n) => x(e(t), n), r = (t, n) => e(t) - n);
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
function ne() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function re(e) {
	return e === null ? NaN : +e;
}
function* ie(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var ae = S(x), C = ae.right, oe = ae.left;
S(re).center;
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function se(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function ce(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = ue(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => ue(n[e], n[t]))), se(e, r);
	}
	return e.sort(le(n));
}
function le(e = x) {
	if (e === x) return ue;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function ue(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function de(e, t) {
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
function fe(e, t) {
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
function pe(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? ue : le(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			pe(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (me(e, n, t), i(e[r], a) > 0 && me(e, n, r); o < s;) {
			for (me(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? me(e, n, s) : (++s, me(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function me(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function he(e, t, n) {
	if (e = Float64Array.from(ie(e, n)), (r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return fe(e);
		if (t >= 1) return de(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = de(pe(e, a).subarray(0, a + 1));
		return o + (fe(e.subarray(a + 1)) - o) * (i - a);
	}
}
function ge(e, t, n = re) {
	if ((r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function _e(e) {
	return Math.max(0, -c(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function ve(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(c(t) / 3))) * 3 - c(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function ye(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, c(t) - c(e)) + 1;
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/accessor.js
function w(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/getter.js
function be(e) {
	return e.length === 1 ? xe(e[0]) : Se(e);
}
var xe = (e) => function(t) {
	return t[e];
}, Se = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/error.js
function Ce(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/splitAccessPath.js
function we(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Ce("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Ce("Access path missing closing bracket: " + e), r && Ce("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/field.js
function Te(e, t, n) {
	let r = we(e), i = r.length === 1 ? r[0] : e;
	return w((n && n.get || be)(r), [i], t || i);
}
Te("id"), w((e) => e, [], "identity"), w(() => 0, [], "zero"), w(() => 1, [], "one"), w(() => !0, [], "true"), w(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Ee = /* @__PURE__ */ new Date(), De = /* @__PURE__ */ new Date();
function T(e, t, n, r) {
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
	}, i.filter = (n) => T((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) {
			if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
			else for (; --r >= 0;) for (; t(e, 1), !n(e););
		}
	}), n && (i.count = (t, r) => (Ee.setTime(+t), De.setTime(+r), e(Ee), e(De), Math.floor(n(Ee, De))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var Oe = T(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Oe.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? T((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Oe), Oe.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var E = 1e3, D = E * 60, O = D * 60, k = O * 24, ke = k * 7, Ae = k * 30, je = k * 365, A = T((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * E);
}, (e, t) => (t - e) / E, (e) => e.getUTCSeconds());
A.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var Me = T((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * E);
}, (e, t) => {
	e.setTime(+e + t * D);
}, (e, t) => (t - e) / D, (e) => e.getMinutes());
Me.range;
var Ne = T((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * D);
}, (e, t) => (t - e) / D, (e) => e.getUTCMinutes());
Ne.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var Pe = T((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * E - e.getMinutes() * D);
}, (e, t) => {
	e.setTime(+e + t * O);
}, (e, t) => (t - e) / O, (e) => e.getHours());
Pe.range;
var Fe = T((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * O);
}, (e, t) => (t - e) / O, (e) => e.getUTCHours());
Fe.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var j = T((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * D) / k, (e) => e.getDate() - 1);
j.range;
var Ie = T((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / k, (e) => e.getUTCDate() - 1);
Ie.range;
var Le = T((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / k, (e) => Math.floor(e / k));
Le.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function Re(e) {
	return T((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * D) / ke);
}
var ze = Re(0), Be = Re(1), Ve = Re(2), He = Re(3), Ue = Re(4), We = Re(5), Ge = Re(6);
ze.range, Be.range, Ve.range, He.range, Ue.range, We.range, Ge.range;
function M(e) {
	return T((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / ke);
}
var Ke = M(0), qe = M(1), Je = M(2), Ye = M(3), Xe = M(4), Ze = M(5), Qe = M(6);
Ke.range, qe.range, Je.range, Ye.range, Xe.range, Ze.range, Qe.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var $e = T((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
$e.range;
var et = T((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
et.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var N = T((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
N.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : T((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), N.range;
var P = T((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
P.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : T((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), P.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function tt(e, t, r, i, a, o) {
	let s = [
		[
			A,
			1,
			E
		],
		[
			A,
			5,
			5 * E
		],
		[
			A,
			15,
			15 * E
		],
		[
			A,
			30,
			30 * E
		],
		[
			o,
			1,
			D
		],
		[
			o,
			5,
			5 * D
		],
		[
			o,
			15,
			15 * D
		],
		[
			o,
			30,
			30 * D
		],
		[
			a,
			1,
			O
		],
		[
			a,
			3,
			3 * O
		],
		[
			a,
			6,
			6 * O
		],
		[
			a,
			12,
			12 * O
		],
		[
			i,
			1,
			k
		],
		[
			i,
			2,
			2 * k
		],
		[
			r,
			1,
			ke
		],
		[
			t,
			1,
			Ae
		],
		[
			t,
			3,
			3 * Ae
		],
		[
			e,
			1,
			je
		]
	];
	function c(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : l(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function l(t, r, i) {
		let a = Math.abs(r - t) / i, o = S(([, , e]) => e).right(s, a);
		if (o === s.length) return e.every(n(t / je, r / je, i));
		if (o === 0) return Oe.every(Math.max(n(t, r, i), 1));
		let [c, l] = s[a / s[o - 1][2] < s[o][2] / a ? o - 1 : o];
		return c.every(l);
	}
	return [c, l];
}
var [nt, rt] = tt(P, et, Ke, Le, Fe, Ne), [it, at] = tt(N, $e, ze, j, Pe, Me), F = "year", ot = "quarter", st = "month", ct = "week", I = "isoweek", lt = "date", ut = "dayofyear", dt = "hours", ft = "minutes", pt = "seconds", mt = "milliseconds";
[
	F,
	ot,
	st,
	ct,
	I,
	lt,
	"day",
	ut,
	dt,
	ft,
	pt,
	mt
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), ct + "", F + I, I + "", ct + "", F + I, I + "";
var ht = {
	[F]: N,
	[ot]: $e.every(3),
	[st]: $e,
	[ct]: ze,
	[I]: Be,
	[lt]: j,
	day: j,
	[ut]: j,
	[dt]: Pe,
	[ft]: Me,
	[pt]: A,
	[mt]: Oe
}, gt = {
	[F]: P,
	[ot]: et.every(3),
	[st]: et,
	[ct]: Ke,
	[I]: qe,
	[lt]: Ie,
	day: Ie,
	[ut]: Ie,
	[dt]: Fe,
	[ft]: Ne,
	[pt]: A,
	[mt]: Oe
};
function _t(e) {
	return ht[e];
}
function vt(e) {
	return gt[e];
}
[
	F,
	st,
	lt,
	dt,
	ft,
	pt,
	mt
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1);
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function yt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function bt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xt(e, t, n) {
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
function St(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Dt(i), u = Ot(i), d = Dt(a), f = Ot(a), p = Dt(o), m = Ot(o), h = Dt(s), g = Ot(s), _ = Dt(c), v = Ot(c), y = {
		a: le,
		A: ue,
		b: de,
		B: fe,
		c: null,
		d: Yt,
		e: Yt,
		f: en,
		g: fn,
		G: mn,
		H: Xt,
		I: Zt,
		j: Qt,
		L: $t,
		m: tn,
		M: nn,
		p: pe,
		q: me,
		Q: Ln,
		s: Rn,
		S: rn,
		u: an,
		U: on,
		V: cn,
		w: ln,
		W: un,
		x: null,
		X: null,
		y: dn,
		Y: pn,
		Z: hn,
		"%": In
	}, b = {
		a: he,
		A: ge,
		b: _e,
		B: ve,
		c: null,
		d: gn,
		e: gn,
		f: xn,
		g: Mn,
		G: Pn,
		H: _n,
		I: vn,
		j: yn,
		L: bn,
		m: Sn,
		M: Cn,
		p: ye,
		q: w,
		Q: Ln,
		s: Rn,
		S: wn,
		u: Tn,
		U: En,
		V: On,
		w: kn,
		W: An,
		x: null,
		X: null,
		y: jn,
		Y: Nn,
		Z: Fn,
		"%": In
	}, ee = {
		a: re,
		A: ie,
		b: ae,
		B: C,
		c: oe,
		d: zt,
		e: zt,
		f: Gt,
		g: Ft,
		G: Pt,
		H: Vt,
		I: Vt,
		j: Bt,
		L: Wt,
		m: Rt,
		M: Ht,
		p: ne,
		q: Lt,
		Q: qt,
		s: Jt,
		S: Ut,
		u: At,
		U: jt,
		V: Mt,
		w: kt,
		W: Nt,
		x: se,
		X: ce,
		y: Ft,
		Y: Pt,
		Z: It,
		"%": Kt
	};
	y.x = x(n, y), y.X = x(r, y), y.c = x(t, y), b.x = x(n, b), b.X = x(r, b), b.c = x(t, b);
	function x(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = Ct[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function te(e, t) {
		return function(n) {
			var r = xt(1900, void 0, 1), i = S(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = bt(xt(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? qe.ceil(a) : qe(a), a = Ie.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = yt(xt(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Be.ceil(a) : Be(a), a = j.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? bt(xt(r.y, 0, 1)).getUTCDay() : yt(xt(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, bt(r)) : yt(r);
		};
	}
	function S(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ee[s in Ct ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ne(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function re(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ie(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ae(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function C(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, n, r) {
		return S(e, t, n, r);
	}
	function se(e, t, r) {
		return S(e, n, t, r);
	}
	function ce(e, t, n) {
		return S(e, r, t, n);
	}
	function le(e) {
		return o[e.getDay()];
	}
	function ue(e) {
		return a[e.getDay()];
	}
	function de(e) {
		return c[e.getMonth()];
	}
	function fe(e) {
		return s[e.getMonth()];
	}
	function pe(e) {
		return i[+(e.getHours() >= 12)];
	}
	function me(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function he(e) {
		return o[e.getUTCDay()];
	}
	function ge(e) {
		return a[e.getUTCDay()];
	}
	function _e(e) {
		return c[e.getUTCMonth()];
	}
	function ve(e) {
		return s[e.getUTCMonth()];
	}
	function ye(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function w(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = x(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = te(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = x(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = te(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var Ct = {
	"-": "",
	_: " ",
	0: "0"
}, L = /^\s*\d+/, wt = /^%/, Tt = /[\\^$*+?|[\]().{}]/g;
function R(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Et(e) {
	return e.replace(Tt, "\\$&");
}
function Dt(e) {
	return RegExp("^(?:" + e.map(Et).join("|") + ")", "i");
}
function Ot(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function kt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function At(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function jt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Mt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Nt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Pt(e, t, n) {
	var r = L.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Ft(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function It(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Lt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Rt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function zt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Bt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Vt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ht(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Ut(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Wt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Gt(e, t, n) {
	var r = L.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Kt(e, t, n) {
	var r = wt.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function qt(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Jt(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Yt(e, t) {
	return R(e.getDate(), t, 2);
}
function Xt(e, t) {
	return R(e.getHours(), t, 2);
}
function Zt(e, t) {
	return R(e.getHours() % 12 || 12, t, 2);
}
function Qt(e, t) {
	return R(1 + j.count(N(e), e), t, 3);
}
function $t(e, t) {
	return R(e.getMilliseconds(), t, 3);
}
function en(e, t) {
	return $t(e, t) + "000";
}
function tn(e, t) {
	return R(e.getMonth() + 1, t, 2);
}
function nn(e, t) {
	return R(e.getMinutes(), t, 2);
}
function rn(e, t) {
	return R(e.getSeconds(), t, 2);
}
function an(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function on(e, t) {
	return R(ze.count(N(e) - 1, e), t, 2);
}
function sn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Ue(e) : Ue.ceil(e);
}
function cn(e, t) {
	return e = sn(e), R(Ue.count(N(e), e) + (N(e).getDay() === 4), t, 2);
}
function ln(e) {
	return e.getDay();
}
function un(e, t) {
	return R(Be.count(N(e) - 1, e), t, 2);
}
function dn(e, t) {
	return R(e.getFullYear() % 100, t, 2);
}
function fn(e, t) {
	return e = sn(e), R(e.getFullYear() % 100, t, 2);
}
function pn(e, t) {
	return R(e.getFullYear() % 1e4, t, 4);
}
function mn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Ue(e) : Ue.ceil(e), R(e.getFullYear() % 1e4, t, 4);
}
function hn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + R(t / 60 | 0, "0", 2) + R(t % 60, "0", 2);
}
function gn(e, t) {
	return R(e.getUTCDate(), t, 2);
}
function _n(e, t) {
	return R(e.getUTCHours(), t, 2);
}
function vn(e, t) {
	return R(e.getUTCHours() % 12 || 12, t, 2);
}
function yn(e, t) {
	return R(1 + Ie.count(P(e), e), t, 3);
}
function bn(e, t) {
	return R(e.getUTCMilliseconds(), t, 3);
}
function xn(e, t) {
	return bn(e, t) + "000";
}
function Sn(e, t) {
	return R(e.getUTCMonth() + 1, t, 2);
}
function Cn(e, t) {
	return R(e.getUTCMinutes(), t, 2);
}
function wn(e, t) {
	return R(e.getUTCSeconds(), t, 2);
}
function Tn(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function En(e, t) {
	return R(Ke.count(P(e) - 1, e), t, 2);
}
function Dn(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Xe(e) : Xe.ceil(e);
}
function On(e, t) {
	return e = Dn(e), R(Xe.count(P(e), e) + (P(e).getUTCDay() === 4), t, 2);
}
function kn(e) {
	return e.getUTCDay();
}
function An(e, t) {
	return R(qe.count(P(e) - 1, e), t, 2);
}
function jn(e, t) {
	return R(e.getUTCFullYear() % 100, t, 2);
}
function Mn(e, t) {
	return e = Dn(e), R(e.getUTCFullYear() % 100, t, 2);
}
function Nn(e, t) {
	return R(e.getUTCFullYear() % 1e4, t, 4);
}
function Pn(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Xe(e) : Xe.ceil(e), R(e.getUTCFullYear() % 1e4, t, 4);
}
function Fn() {
	return "+0000";
}
function In() {
	return "%";
}
function Ln(e) {
	return +e;
}
function Rn(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var zn, Bn, Vn, Hn, Un;
Wn({
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
function Wn(e) {
	return zn = St(e), Bn = zn.format, Vn = zn.parse, Hn = zn.utcFormat, Un = zn.utcParse, zn;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var Gn = Math.PI / 180, Kn = 180 / Math.PI, qn = 18, Jn = .96422, Yn = 1, Xn = .82521, Zn = 4 / 29, Qn = 6 / 29, $n = 3 * Qn * Qn, er = Qn * Qn * Qn;
function tr(e) {
	if (e instanceof z) return new z(e.l, e.a, e.b, e.opacity);
	if (e instanceof B) return lr(e);
	e instanceof v || (e = r(e));
	var t = or(e.r), n = or(e.g), i = or(e.b), a = rr((.2225045 * t + .7168786 * n + .0606169 * i) / Yn), o, s;
	return t === n && n === i ? o = s = a : (o = rr((.4360747 * t + .3850649 * n + .1430804 * i) / Jn), s = rr((.0139322 * t + .0971045 * n + .7141733 * i) / Xn)), new z(116 * a - 16, 500 * (o - a), 200 * (a - s), e.opacity);
}
function nr(e, t, n, r) {
	return arguments.length === 1 ? tr(e) : new z(e, t, n, r ?? 1);
}
function z(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
a(z, nr, s(f, {
	brighter(e) {
		return new z(this.l + qn * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new z(this.l - qn * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Jn * ir(t), e = Yn * ir(e), n = Xn * ir(n), new v(ar(3.1338561 * t - 1.6168667 * e - .4906146 * n), ar(-.9787684 * t + 1.9161415 * e + .033454 * n), ar(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function rr(e) {
	return e > er ? e ** (1 / 3) : e / $n + Zn;
}
function ir(e) {
	return e > Qn ? e * e * e : $n * (e - Zn);
}
function ar(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function or(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function sr(e) {
	if (e instanceof B) return new B(e.h, e.c, e.l, e.opacity);
	if (e instanceof z || (e = tr(e)), e.a === 0 && e.b === 0) return new B(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Kn;
	return new B(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function cr(e, t, n, r) {
	return arguments.length === 1 ? sr(e) : new B(e, t, n, r ?? 1);
}
function B(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function lr(e) {
	if (isNaN(e.h)) return new z(e.l, 0, 0, e.opacity);
	var t = e.h * Gn;
	return new z(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
a(B, cr, s(f, {
	brighter(e) {
		return new B(this.h, this.c, this.l + qn * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new B(this.h, this.c, this.l - qn * (e ?? 1), this.opacity);
	},
	rgb() {
		return lr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var ur = -.14861, dr = 1.78277, fr = -.29227, pr = -.90649, mr = 1.97294, hr = mr * pr, gr = mr * dr, _r = dr * fr - pr * ur;
function vr(e) {
	if (e instanceof br) return new br(e.h, e.s, e.l, e.opacity);
	e instanceof v || (e = r(e));
	var t = e.r / 255, n = e.g / 255, i = e.b / 255, a = (_r * i + hr * t - gr * n) / (_r + hr - gr), o = i - a, s = (mr * (n - a) - fr * o) / pr, c = Math.sqrt(s * s + o * o) / (mr * a * (1 - a)), l = c ? Math.atan2(s, o) * Kn - 120 : NaN;
	return new br(l < 0 ? l + 360 : l, c, a, e.opacity);
}
function yr(e, t, n, r) {
	return arguments.length === 1 ? vr(e) : new br(e, t, n, r ?? 1);
}
function br(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
a(br, yr, s(f, {
	brighter(e) {
		return e = e == null ? t : t ** +e, new br(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? l : l ** +e, new br(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Gn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new v(255 * (t + n * (ur * r + dr * i)), 255 * (t + n * (fr * r + pr * i)), 255 * (t + mr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/accessor.js
function xr(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/getter.js
function Sr(e) {
	return e.length === 1 ? Cr(e[0]) : wr(e);
}
var Cr = (e) => function(t) {
	return t[e];
}, wr = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/error.js
function Tr(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/splitAccessPath.js
function Er(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Tr("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Tr("Access path missing closing bracket: " + e), r && Tr("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/field.js
function Dr(e, t, n) {
	let r = Er(e), i = r.length === 1 ? r[0] : e;
	return xr((n && n.get || Sr)(r), [i], t || i);
}
Dr("id"), xr((e) => e, [], "identity"), xr(() => 0, [], "zero"), xr(() => 1, [], "one"), xr(() => !0, [], "true"), xr(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/isArray.js
var Or = Array.isArray;
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/peek.js
function kr(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toNumber.js
function Ar(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/array.js
function jr(e) {
	return e == null ? [] : Or(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toSet.js
function Mr(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function V(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function H(e, t) {
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
var Nr = Symbol("implicit");
function Pr() {
	var e = new o(), t = [], n = [], r = Nr;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Nr) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new o();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Pr(t, n).unknown(r);
	}, V.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function Fr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function Ir(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Fr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Lr(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return Fr((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Rr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function zr(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Br(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Vr(e, t) {
	var n = t - e;
	return n ? zr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Rr(isNaN(e) ? t : e);
}
function Hr(e) {
	return (e = +e) == 1 ? U : function(t, n) {
		return n - t ? Br(t, n, e) : Rr(isNaN(t) ? n : t);
	};
}
function U(e, t) {
	var n = t - e;
	return n ? zr(e, n) : Rr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Ur = (function e(t) {
	var n = Hr(t);
	function r(e, t) {
		var r = n((e = m(e)).r, (t = m(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = U(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Wr(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = m(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Gr = Wr(Ir), Kr = Wr(Lr);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function qr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Jr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Yr(e, t) {
	return (Jr(t) ? qr : Xr)(e, t);
}
function Xr(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = G(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function Zr(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function W(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function Qr(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = G(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var $r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ei = new RegExp($r.source, "g");
function ti(e) {
	return function() {
		return e;
	};
}
function ni(e) {
	return function(t) {
		return e(t) + "";
	};
}
function ri(e, t) {
	var n = $r.lastIndex = ei.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = $r.exec(e)) && (i = ei.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: W(r, i)
	})), n = ei.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ni(c[0].x) : ti(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function G(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Rr(t) : (n === "number" ? W : n === "string" ? (r = g(t)) ? (t = r, Ur) : ri : t instanceof g ? Ur : t instanceof Date ? Zr : Jr(t) ? qr : Array.isArray(t) ? Xr : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Qr : W)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function ii(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function ai(e, t) {
	var n = Vr(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function oi(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var si = 180 / Math.PI, ci = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function li(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * si,
		skewX: Math.atan(c) * si,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var ui;
function di(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? ci : li(t.a, t.b, t.c, t.d, t.e, t.f);
}
function fi(e) {
	return e == null || (ui ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), ui.setAttribute("transform", e), !(e = ui.transform.baseVal.consolidate())) ? ci : (e = e.matrix, li(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function pi(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: W(e, i)
			}, {
				i: c - 2,
				x: W(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: W(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: W(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: W(e, n)
			}, {
				i: s - 2,
				x: W(t, r)
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
var mi = pi(di, "px, ", "px)", "deg)"), hi = pi(fi, ", ", ")", ")"), gi = 1e-12;
function _i(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function vi(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function yi(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var bi = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < gi) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = _i(y), c = s / (n * g) * (i * yi(t * r + y) - vi(y));
				return [
					a + c * d,
					o + c * f,
					s * i / _i(t * r + y)
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
function xi(e) {
	return function(t, n) {
		var r = e((t = d(t)).h, (n = d(n)).h), i = U(t.s, n.s), a = U(t.l, n.l), o = U(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Si = xi(Vr), Ci = xi(U);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function wi(e, t) {
	var n = U((e = nr(e)).l, (t = nr(t)).l), r = U(e.a, t.a), i = U(e.b, t.b), a = U(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function Ti(e) {
	return function(t, n) {
		var r = e((t = cr(t)).h, (n = cr(n)).h), i = U(t.c, n.c), a = U(t.l, n.l), o = U(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Ei = Ti(Vr), Di = Ti(U);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function Oi(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = yr(t)).h, (r = yr(r)).h), a = U(t.s, r.s), o = U(t.l, r.l), s = U(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var ki = Oi(Vr), Ai = Oi(U);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function ji(e, t) {
	t === void 0 && (t = e, e = G);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Mi(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Ni = /* @__PURE__ */ ee({
	interpolate: () => G,
	interpolateArray: () => Yr,
	interpolateBasis: () => Ir,
	interpolateBasisClosed: () => Lr,
	interpolateCubehelix: () => ki,
	interpolateCubehelixLong: () => Ai,
	interpolateDate: () => Zr,
	interpolateDiscrete: () => ii,
	interpolateHcl: () => Ei,
	interpolateHclLong: () => Di,
	interpolateHsl: () => Si,
	interpolateHslLong: () => Ci,
	interpolateHue: () => ai,
	interpolateLab: () => wi,
	interpolateNumber: () => W,
	interpolateNumberArray: () => qr,
	interpolateObject: () => Qr,
	interpolateRgb: () => Ur,
	interpolateRgbBasis: () => Gr,
	interpolateRgbBasisClosed: () => Kr,
	interpolateRound: () => oi,
	interpolateString: () => ri,
	interpolateTransformCss: () => mi,
	interpolateTransformSvg: () => hi,
	interpolateZoom: () => bi,
	piecewise: () => ji,
	quantize: () => Mi
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function Pi(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function Fi(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var Ii = [0, 1];
function K(e) {
	return e;
}
function Li(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Pi(isNaN(t) ? NaN : .5);
}
function Ri(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function zi(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Li(i, r), a = n(o, a)) : (r = Li(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Bi(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Li(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = C(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Vi(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Hi() {
	var e = Ii, t = Ii, n = G, r, i, a, o = K, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== K && (o = Ri(e[0], e[n - 1])), s = n > 2 ? Bi : zi, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), W))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Fi), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = oi, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : K, u()) : o !== K;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Ui() {
	return Hi()(K, K);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function Wi(t, r, i, a) {
	var o = n(t, r, i), s;
	switch (a = h(a ?? ",f"), a.type) {
		case "s":
			var c = Math.max(Math.abs(t), Math.abs(r));
			return a.precision == null && !isNaN(s = ve(o, c)) && (a.precision = s), e(a, c);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			a.precision == null && !isNaN(s = ye(o, Math.max(Math.abs(t), Math.abs(r)))) && (a.precision = s - (a.type === "e"));
			break;
		case "f":
		case "%": a.precision == null && !isNaN(s = _e(o)) && (a.precision = s - (a.type === "%") * 2);
	}
	return _(a);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function q(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return i(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Wi(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = p(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Gi() {
	var e = Ui();
	return e.copy = function() {
		return Vi(e, Gi());
	}, V.apply(e, arguments), q(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Ki(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Fi), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Ki(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Fi) : [0, 1], q(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function qi(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Ji(e) {
	return Math.log(e);
}
function Yi(e) {
	return Math.exp(e);
}
function Xi(e) {
	return -Math.log(-e);
}
function Zi(e) {
	return -Math.exp(-e);
}
function Qi(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function $i(e) {
	return e === 10 ? Qi : e === Math.E ? Math.exp : (t) => e ** +t;
}
function ea(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function ta(e) {
	return (t, n) => -e(-t, n);
}
function na(e) {
	let t = e(Ji, Yi), n = t.domain, r = 10, a, o;
	function s() {
		return a = ea(r), o = $i(r), n()[0] < 0 ? (a = ta(a), o = ta(o), e(Xi, Zi)) : e(Ji, Yi), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, s()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), s()) : n();
	}, t.ticks = (e) => {
		let t = n(), s = t[0], c = t[t.length - 1], l = c < s;
		l && ([s, c] = [c, s]);
		let u = a(s), d = a(c), f, p, m = e == null ? 10 : +e, h = [];
		if (!(r % 1) && d - u < m) {
			if (u = Math.floor(u), d = Math.ceil(d), s > 0) {
				for (; u <= d; ++u) for (f = 1; f < r; ++f) if (p = u < 0 ? f / o(-u) : f * o(u), !(p < s)) {
					if (p > c) break;
					h.push(p);
				}
			} else for (; u <= d; ++u) for (f = r - 1; f >= 1; --f) if (p = u > 0 ? f / o(-u) : f * o(u), !(p < s)) {
				if (p > c) break;
				h.push(p);
			}
			h.length * 2 < m && (h = i(s, c, m));
		} else h = i(u, d, Math.min(d - u, m)).map(o);
		return l ? h.reverse() : h;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = h(n)).precision == null && (n.trim = !0), n = _(n)), e === Infinity) return n;
		let i = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / o(Math.round(a(e)));
			return t * r < r - .5 && (t *= r), t <= i ? n(e) : "";
		};
	}, t.nice = () => n(qi(n(), {
		floor: (e) => o(Math.floor(a(e))),
		ceil: (e) => o(Math.ceil(a(e)))
	})), t;
}
function ra() {
	let e = na(Hi()).domain([1, 10]);
	return e.copy = () => Vi(e, ra()).base(e.base()), V.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function ia(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function aa(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function oa(e) {
	var t = 1, n = e(ia(t), aa(t));
	return n.constant = function(n) {
		return arguments.length ? e(ia(t = +n), aa(t)) : t;
	}, q(n);
}
function sa() {
	var e = oa(Hi());
	return e.copy = function() {
		return Vi(e, sa()).constant(e.constant());
	}, V.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function ca(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function la(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ua(e) {
	return e < 0 ? -e * e : e * e;
}
function da(e) {
	var t = e(K, K), n = 1;
	function r() {
		return n === 1 ? e(K, K) : n === .5 ? e(la, ua) : e(ca(n), ca(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, q(t);
}
function fa() {
	var e = da(Hi());
	return e.copy = function() {
		return Vi(e, fa()).exponent(e.exponent());
	}, V.apply(e, arguments), e;
}
function pa() {
	return fa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function ma() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = ge(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[C(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(x), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return ma().domain(e).range(t).unknown(r);
	}, V.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function ha() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[C(r, e, 0, n)] : a;
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
		return ha().domain([e, t]).range(i).unknown(a);
	}, V.apply(q(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function ga() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[C(e, i, 0, r)] : n;
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
		return ga().domain(e).range(t).unknown(n);
	}, V.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function _a(e) {
	return new Date(e);
}
function va(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ya(e, t, n, r, i, a, o, s, c, l) {
	var u = Ui(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function ee(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, va)) : f().map(_a);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ee : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(qi(n, e)) : u;
	}, u.copy = function() {
		return Vi(u, ya(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function ba() {
	return V.apply(ya(it, at, N, $e, ze, j, Pe, Me, A, Bn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function xa() {
	return V.apply(ya(nt, rt, P, et, Ke, Ie, Fe, Ne, A, Hn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Sa() {
	var e = 0, t = 1, n, r, i, a, o = K, s = !1, c;
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
	return l.range = u(G), l.rangeRound = u(oi), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function J(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ca() {
	var e = q(Sa()(K));
	return e.copy = function() {
		return J(e, Ca());
	}, H.apply(e, arguments);
}
function wa() {
	var e = na(Sa()).domain([1, 10]);
	return e.copy = function() {
		return J(e, wa()).base(e.base());
	}, H.apply(e, arguments);
}
function Ta() {
	var e = oa(Sa());
	return e.copy = function() {
		return J(e, Ta()).constant(e.constant());
	}, H.apply(e, arguments);
}
function Ea() {
	var e = da(Sa());
	return e.copy = function() {
		return J(e, Ea()).exponent(e.exponent());
	}, H.apply(e, arguments);
}
function Da() {
	return Ea.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Oa() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = K, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = ji(e, [
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
	return p.range = m(G), p.rangeRound = m(oi), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function ka() {
	var e = q(Oa()(K));
	return e.copy = function() {
		return J(e, ka());
	}, H.apply(e, arguments);
}
function Aa() {
	var e = na(Oa()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return J(e, Aa()).base(e.base());
	}, H.apply(e, arguments);
}
function ja() {
	var e = oa(Oa());
	return e.copy = function() {
		return J(e, ja()).constant(e.constant());
	}, H.apply(e, arguments);
}
function Ma() {
	var e = da(Oa());
	return e.copy = function() {
		return J(e, Ma()).exponent(e.exponent());
	}, H.apply(e, arguments);
}
function Na() {
	return Ma.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function Y(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Pa = Y("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Fa = Y("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Ia = Y("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), La = Y("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Ra = Y("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), za = Y("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Ba = Y("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Va = Y("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Ha = Y("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Ua = Y("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function Wa(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Ga = "identity", Ka = "linear", qa = "sqrt", Ja = "symlog", Ya = "time", X = "sequential", Xa = "diverging", Za = "quantile", Qa = "quantize", $a = "threshold", eo = "ordinal", to = "point", no = "band", ro = "bin-ordinal", Z = "continuous", io = "discrete", ao = "discretizing", Q = "interpolating", oo = "temporal";
function so(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function co(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function lo() {
	let e = Pr().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function d() {
		let e = t().length, d = r[1] < r[0], f = r[1 - d], p = Wa(e, s, c), m = r[d - 0];
		i = (f - m) / (p || 1), o && (i = Math.floor(i)), m += (f - m - i * (e - s)) * l, a = i * (1 - s), o && (m = Math.round(m), a = Math.round(a));
		let h = u(e).map((e) => m + i * e);
		return n(d ? h.reverse() : h);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? (r = [+e[0], +e[1]], d()) : r.slice();
	}, e.rangeRound = function(e) {
		return r = [+e[0], +e[1]], o = !0, d();
	}, e.bandwidth = function() {
		return a;
	}, e.step = function() {
		return i;
	}, e.round = function(e) {
		return arguments.length ? (o = !!e, d()) : o;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), s = c, d()) : s;
	}, e.paddingInner = function(e) {
		return arguments.length ? (s = Math.max(0, Math.min(1, e)), d()) : s;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), d()) : c;
	}, e.align = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), d()) : l;
	}, e.invertRange = function(e) {
		if (e[0] == null || e[1] == null) return;
		let i = r[1] < r[0], o = i ? n().reverse() : n(), s = o.length - 1, c = +e[0], l = +e[1], u, d, f;
		if (c === c && l === l && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, C(o, c) - 1), d = c === l ? u : C(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return lo().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, d();
}
function uo(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return uo(t());
	}, e;
}
function fo() {
	return uo(lo().paddingInner(1));
}
var po = Array.prototype.map;
function mo(e) {
	return po.call(e, Ar);
}
var ho = Array.prototype.slice;
function go() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(C(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = mo(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = ho.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return Wi(e[0], kr(e), t ?? 10, n);
	}, n.copy = function() {
		return go().domain(n.domain()).range(n.range());
	}, n;
}
var _o = /* @__PURE__ */ new Map(), vo = Symbol("vega_scale");
function yo(e) {
	return e[vo] = !0, e;
}
function bo(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? so(n) : n.invertExtent ? co(n) : void 0, n.type = e, yo(n);
	};
	return r.metadata = Mr(jr(n)), r;
}
function $(e, t, n) {
	return arguments.length > 1 ? (_o.set(e, bo(e, t, n)), this) : xo(e) ? _o.get(e) : void 0;
}
$(Ga, Ki), $(Ka, Gi, Z), $("log", ra, [Z, "log"]), $("pow", fa, Z), $(qa, pa, Z), $(Ja, sa, Z), $(Ya, ba, [Z, oo]), $("utc", xa, [Z, oo]), $(X, Ca, [Z, Q]), $(`${X}-${Ka}`, Ca, [Z, Q]), $(`${X}-log`, wa, [
	Z,
	Q,
	"log"
]), $(`${X}-pow`, Ea, [Z, Q]), $(`${X}-${qa}`, Da, [Z, Q]), $(`${X}-${Ja}`, Ta, [Z, Q]), $(`${Xa}-${Ka}`, ka, [Z, Q]), $(`${Xa}-log`, Aa, [
	Z,
	Q,
	"log"
]), $(`${Xa}-pow`, Ma, [Z, Q]), $(`${Xa}-${qa}`, Na, [Z, Q]), $(`${Xa}-${Ja}`, ja, [Z, Q]), $(Za, ma, [ao, Za]), $(Qa, ha, ao), $($a, ga, ao), $(ro, go, [io, ao]), $(eo, Pr, io), $(no, lo, io), $(to, fo, io);
function xo(e) {
	return _o.has(e);
}
function So(e, t) {
	let n = _o.get(e);
	return n && n.metadata[t];
}
function Co(e) {
	return So(e, Z);
}
function wo(e) {
	return So(e, io);
}
function To(e) {
	return So(e, ao);
}
function Eo(e) {
	return So(e, "log");
}
function Do(e) {
	return So(e, Q);
}
function Oo(e, t) {
	let n = t[0], r = kr(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function ko(e, t, n) {
	return ji(jo(t || "rgb", n), e);
}
function Ao(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function jo(e, t) {
	let n = Ni[Mo(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function Mo(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var No = {
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
}, Po = {
	accent: Fa,
	category10: Pa,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: Ia,
	observable10: La,
	paired: Ra,
	pastel1: za,
	pastel2: Ba,
	set1: Va,
	set2: Ha,
	set3: Ua,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Fo(e) {
	if (Or(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function Io(e, t) {
	for (let n in e) Ro(n, t(e[n]));
}
var Lo = {};
Io(Po, Fo), Io(No, (e) => ko(Fo(e)));
function Ro(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (Lo[e] = t, this) : Lo[e];
}
//#endregion
export { de as $, Nr as A, st as B, Ao as C, Gi as D, ra as E, St as F, _t as G, pt as H, lt as I, ve as J, vt as K, dt as L, Vn as M, Hn as N, oi as O, Un as P, fe as Q, mt as R, Eo as S, Ro as T, ct as U, ot as V, F as W, he as X, _e as Y, ge as Z, Oo as _, eo as a, ee as at, To as b, Qa as c, Ja as d, ce as et, $a as f, ko as g, jo as h, Ka as i, b as it, Bn as j, G as k, X as l, Wa as m, ro as n, C as nt, to as o, Ya as p, ye as q, Xa as r, S as rt, Za as s, no as t, oe as tt, qa as u, Co as v, $ as w, Do as x, wo as y, ft as z };
