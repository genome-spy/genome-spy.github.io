import { An as e, At as t, Fn as n, Ft as r, In as i, It as a, Ln as o, Lt as s, Mn as c, Mt as l, Nn as u, Nt as d, Ot as f, Pn as p, Pt as m, jn as h, jt as g, kn as ee, kt as _ } from "./clipOptions-BnC5TVd8.js";
//#region \0rolldown/runtime.js
var v = Object.defineProperty, y = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), te = (e, t) => {
	let n = {};
	for (var r in e) v(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || v(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function b(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function ne(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function x(e) {
	let t, n, r;
	e.length === 2 ? (t = e === b || e === ne ? e : re, n = e, r = e) : (t = b, n = (t, n) => b(e(t), n), r = (t, n) => e(t) - n);
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
function re() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function ie(e) {
	return e === null ? NaN : +e;
}
function* ae(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var oe = x(b), S = oe.right, se = oe.left;
x(ie).center;
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function ce(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function le(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = de(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => de(n[e], n[t]))), ce(e, r);
	}
	return e.sort(ue(n));
}
function ue(e = b) {
	if (e === b) return de;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function de(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function fe(e, t) {
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
function pe(e, t) {
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
function me(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? de : ue(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			me(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (he(e, n, t), i(e[r], a) > 0 && he(e, n, r); o < s;) {
			for (he(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? he(e, n, s) : (++s, he(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function he(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function ge(e, t, n) {
	if (e = Float64Array.from(ae(e, n)), (r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return pe(e);
		if (t >= 1) return fe(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = fe(me(e, a).subarray(0, a + 1));
		return o + (pe(e.subarray(a + 1)) - o) * (i - a);
	}
}
function _e(e, t, n = ie) {
	if ((r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function ve(e) {
	return Math.max(0, -c(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function ye(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(c(t) / 3))) * 3 - c(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function be(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, c(t) - c(e)) + 1;
}
//#endregion
//#region ../../node_modules/vega-time/node_modules/vega-util/build/accessor.js
function xe(e, t, n) {
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
	return xe((n && n.get || Se)(r), [i], t || i);
}
De("id"), xe((e) => e, [], "identity"), xe(() => 0, [], "zero"), xe(() => 1, [], "one"), xe(() => !0, [], "true"), xe(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
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
var A = C((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / D, (e) => e.getUTCDate() - 1);
A.range;
var Re = C((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / D, (e) => Math.floor(e / D));
Re.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function j(e) {
	return C((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / je);
}
var ze = j(0), Be = j(1), Ve = j(2), He = j(3), Ue = j(4), We = j(5), Ge = j(6);
ze.range, Be.range, Ve.range, He.range, Ue.range, We.range, Ge.range;
function M(e) {
	return C((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / je);
}
var Ke = M(0), qe = M(1), Je = M(2), Ye = M(3), Xe = M(4), Ze = M(5), Qe = M(6);
Ke.range, qe.range, Je.range, Ye.range, Xe.range, Ze.range, Qe.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var $e = C((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
$e.range;
var et = C((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
et.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var N = C((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
N.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), N.range;
var P = C((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
P.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : C((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), P.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function tt(e, t, r, i, a, o) {
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
			t,
			1,
			Me
		],
		[
			t,
			3,
			3 * Me
		],
		[
			e,
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
	function l(t, r, i) {
		let a = Math.abs(r - t) / i, o = x(([, , e]) => e).right(s, a);
		if (o === s.length) return e.every(n(t / Ne, r / Ne, i));
		if (o === 0) return Ae.every(Math.max(n(t, r, i), 1));
		let [c, l] = s[a / s[o - 1][2] < s[o][2] / a ? o - 1 : o];
		return c.every(l);
	}
	return [c, l];
}
var [nt, rt] = tt(P, et, Ke, Re, Le, Fe), [it, at] = tt(N, $e, ze, k, Ie, Pe), F = "year", ot = "quarter", I = "month", st = "week", L = "isoweek", ct = "date", lt = "dayofyear", ut = "hours", dt = "minutes", ft = "seconds", pt = "milliseconds";
[
	F,
	ot,
	I,
	st,
	L,
	ct,
	"day",
	lt,
	ut,
	dt,
	ft,
	pt
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${F}${L}`, `${F}${I}`, `${F}${I}${ct}`, `${ut}${dt}`, st + "", F + L, L + "", st + "", F + L, L + "";
var mt = {
	[F]: N,
	[ot]: $e.every(3),
	[I]: $e,
	[st]: ze,
	[L]: Be,
	[ct]: k,
	day: k,
	[lt]: k,
	[ut]: Ie,
	[dt]: Pe,
	[ft]: O,
	[pt]: Ae
}, ht = {
	[F]: P,
	[ot]: et.every(3),
	[I]: et,
	[st]: Ke,
	[L]: qe,
	[ct]: A,
	day: A,
	[lt]: A,
	[ut]: Le,
	[dt]: Fe,
	[ft]: O,
	[pt]: Ae
};
function gt(e) {
	return mt[e];
}
function _t(e) {
	return ht[e];
}
var vt = 1e3, yt = vt * 60, bt = yt * 60, xt = bt * 24;
xt * 7;
var St = xt * 30;
xt * 365, [
	F,
	I,
	ct,
	ut,
	dt,
	ft,
	pt
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * vt, 15 * vt, 30 * vt, 5 * yt, 15 * yt, 30 * yt, 3 * bt, 6 * bt, 12 * bt, 3 * St;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function Ct(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function wt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tt(e, t, n) {
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
function Et(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = jt(i), u = Mt(i), d = jt(a), f = Mt(a), p = jt(o), m = Mt(o), h = jt(s), g = Mt(s), ee = jt(c), _ = Mt(c), v = {
		a: ue,
		A: de,
		b: fe,
		B: pe,
		c: null,
		d: $t,
		e: $t,
		f: an,
		g: gn,
		G: vn,
		H: en,
		I: tn,
		j: nn,
		L: rn,
		m: on,
		M: sn,
		p: me,
		q: he,
		Q: Vn,
		s: Hn,
		S: cn,
		u: ln,
		U: un,
		V: fn,
		w: pn,
		W: mn,
		x: null,
		X: null,
		y: hn,
		Y: _n,
		Z: yn,
		"%": Bn
	}, y = {
		a: ge,
		A: _e,
		b: ve,
		B: ye,
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
		p: be,
		q: xe,
		Q: Vn,
		s: Hn,
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
		"%": Bn
	}, te = {
		a: ie,
		A: ae,
		b: oe,
		B: S,
		c: se,
		d: Ut,
		e: Ut,
		f: Yt,
		g: zt,
		G: Rt,
		H: Gt,
		I: Gt,
		j: Wt,
		L: Jt,
		m: Ht,
		M: Kt,
		p: re,
		q: Vt,
		Q: Zt,
		s: Qt,
		S: qt,
		u: Pt,
		U: Ft,
		V: It,
		w: Nt,
		W: Lt,
		x: ce,
		X: le,
		y: zt,
		Y: Rt,
		Z: Bt,
		"%": Xt
	};
	v.x = b(n, v), v.X = b(r, v), v.c = b(t, v), y.x = b(n, y), y.X = b(r, y), y.c = b(t, y);
	function b(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = Dt[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function ne(e, t) {
		return function(n) {
			var r = Tt(1900, void 0, 1), i = x(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = wt(Tt(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? qe.ceil(a) : qe(a), a = A.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Ct(Tt(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Be.ceil(a) : Be(a), a = k.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? wt(Tt(r.y, 0, 1)).getUTCDay() : Ct(Tt(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, wt(r)) : Ct(r);
		};
	}
	function x(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = te[s in Dt ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function re(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ie(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ae(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, t, n) {
		var r = ee.exec(t.slice(n));
		return r ? (e.m = _.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function S(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function se(e, n, r) {
		return x(e, t, n, r);
	}
	function ce(e, t, r) {
		return x(e, n, t, r);
	}
	function le(e, t, n) {
		return x(e, r, t, n);
	}
	function ue(e) {
		return o[e.getDay()];
	}
	function de(e) {
		return a[e.getDay()];
	}
	function fe(e) {
		return c[e.getMonth()];
	}
	function pe(e) {
		return s[e.getMonth()];
	}
	function me(e) {
		return i[+(e.getHours() >= 12)];
	}
	function he(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function ge(e) {
		return o[e.getUTCDay()];
	}
	function _e(e) {
		return a[e.getUTCDay()];
	}
	function ve(e) {
		return c[e.getUTCMonth()];
	}
	function ye(e) {
		return s[e.getUTCMonth()];
	}
	function be(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function xe(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = b(e += "", v);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = ne(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = b(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = ne(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var Dt = {
	"-": "",
	_: " ",
	0: "0"
}, R = /^\s*\d+/, Ot = /^%/, kt = /[\\^$*+?|[\]().{}]/g;
function z(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function At(e) {
	return e.replace(kt, "\\$&");
}
function jt(e) {
	return RegExp("^(?:" + e.map(At).join("|") + ")", "i");
}
function Mt(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Nt(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Pt(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Ft(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function It(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Lt(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Rt(e, t, n) {
	var r = R.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function zt(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Bt(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Vt(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ht(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Ut(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Wt(e, t, n) {
	var r = R.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Gt(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Kt(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function qt(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Jt(e, t, n) {
	var r = R.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Yt(e, t, n) {
	var r = R.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Xt(e, t, n) {
	var r = Ot.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Zt(e, t, n) {
	var r = R.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Qt(e, t, n) {
	var r = R.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function $t(e, t) {
	return z(e.getDate(), t, 2);
}
function en(e, t) {
	return z(e.getHours(), t, 2);
}
function tn(e, t) {
	return z(e.getHours() % 12 || 12, t, 2);
}
function nn(e, t) {
	return z(1 + k.count(N(e), e), t, 3);
}
function rn(e, t) {
	return z(e.getMilliseconds(), t, 3);
}
function an(e, t) {
	return rn(e, t) + "000";
}
function on(e, t) {
	return z(e.getMonth() + 1, t, 2);
}
function sn(e, t) {
	return z(e.getMinutes(), t, 2);
}
function cn(e, t) {
	return z(e.getSeconds(), t, 2);
}
function ln(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function un(e, t) {
	return z(ze.count(N(e) - 1, e), t, 2);
}
function dn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Ue(e) : Ue.ceil(e);
}
function fn(e, t) {
	return e = dn(e), z(Ue.count(N(e), e) + (N(e).getDay() === 4), t, 2);
}
function pn(e) {
	return e.getDay();
}
function mn(e, t) {
	return z(Be.count(N(e) - 1, e), t, 2);
}
function hn(e, t) {
	return z(e.getFullYear() % 100, t, 2);
}
function gn(e, t) {
	return e = dn(e), z(e.getFullYear() % 100, t, 2);
}
function _n(e, t) {
	return z(e.getFullYear() % 1e4, t, 4);
}
function vn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Ue(e) : Ue.ceil(e), z(e.getFullYear() % 1e4, t, 4);
}
function yn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + z(t / 60 | 0, "0", 2) + z(t % 60, "0", 2);
}
function bn(e, t) {
	return z(e.getUTCDate(), t, 2);
}
function xn(e, t) {
	return z(e.getUTCHours(), t, 2);
}
function Sn(e, t) {
	return z(e.getUTCHours() % 12 || 12, t, 2);
}
function Cn(e, t) {
	return z(1 + A.count(P(e), e), t, 3);
}
function wn(e, t) {
	return z(e.getUTCMilliseconds(), t, 3);
}
function Tn(e, t) {
	return wn(e, t) + "000";
}
function En(e, t) {
	return z(e.getUTCMonth() + 1, t, 2);
}
function Dn(e, t) {
	return z(e.getUTCMinutes(), t, 2);
}
function On(e, t) {
	return z(e.getUTCSeconds(), t, 2);
}
function kn(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function An(e, t) {
	return z(Ke.count(P(e) - 1, e), t, 2);
}
function jn(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Xe(e) : Xe.ceil(e);
}
function Mn(e, t) {
	return e = jn(e), z(Xe.count(P(e), e) + (P(e).getUTCDay() === 4), t, 2);
}
function Nn(e) {
	return e.getUTCDay();
}
function Pn(e, t) {
	return z(qe.count(P(e) - 1, e), t, 2);
}
function Fn(e, t) {
	return z(e.getUTCFullYear() % 100, t, 2);
}
function In(e, t) {
	return e = jn(e), z(e.getUTCFullYear() % 100, t, 2);
}
function Ln(e, t) {
	return z(e.getUTCFullYear() % 1e4, t, 4);
}
function Rn(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Xe(e) : Xe.ceil(e), z(e.getUTCFullYear() % 1e4, t, 4);
}
function zn() {
	return "+0000";
}
function Bn() {
	return "%";
}
function Vn(e) {
	return +e;
}
function Hn(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var Un, Wn, Gn, Kn, qn;
Jn({
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
function Jn(e) {
	return Un = Et(e), Wn = Un.format, Gn = Un.parse, Kn = Un.utcFormat, qn = Un.utcParse, Un;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var Yn = Math.PI / 180, Xn = 180 / Math.PI, Zn = 18, Qn = .96422, $n = 1, er = .82521, tr = 4 / 29, nr = 6 / 29, rr = 3 * nr * nr, ir = nr * nr * nr;
function ar(e) {
	if (e instanceof B) return new B(e.l, e.a, e.b, e.opacity);
	if (e instanceof V) return pr(e);
	e instanceof _ || (e = r(e));
	var t = ur(e.r), n = ur(e.g), i = ur(e.b), a = sr((.2225045 * t + .7168786 * n + .0606169 * i) / $n), o, s;
	return t === n && n === i ? o = s = a : (o = sr((.4360747 * t + .3850649 * n + .1430804 * i) / Qn), s = sr((.0139322 * t + .0971045 * n + .7141733 * i) / er)), new B(116 * a - 16, 500 * (o - a), 200 * (a - s), e.opacity);
}
function or(e, t, n, r) {
	return arguments.length === 1 ? ar(e) : new B(e, t, n, r ?? 1);
}
function B(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
a(B, or, s(f, {
	brighter(e) {
		return new B(this.l + Zn * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new B(this.l - Zn * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Qn * cr(t), e = $n * cr(e), n = er * cr(n), new _(lr(3.1338561 * t - 1.6168667 * e - .4906146 * n), lr(-.9787684 * t + 1.9161415 * e + .033454 * n), lr(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function sr(e) {
	return e > ir ? e ** (1 / 3) : e / rr + tr;
}
function cr(e) {
	return e > nr ? e * e * e : rr * (e - tr);
}
function lr(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function ur(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function dr(e) {
	if (e instanceof V) return new V(e.h, e.c, e.l, e.opacity);
	if (e instanceof B || (e = ar(e)), e.a === 0 && e.b === 0) return new V(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Xn;
	return new V(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function fr(e, t, n, r) {
	return arguments.length === 1 ? dr(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function pr(e) {
	if (isNaN(e.h)) return new B(e.l, 0, 0, e.opacity);
	var t = e.h * Yn;
	return new B(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
a(V, fr, s(f, {
	brighter(e) {
		return new V(this.h, this.c, this.l + Zn * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new V(this.h, this.c, this.l - Zn * (e ?? 1), this.opacity);
	},
	rgb() {
		return pr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var mr = -.14861, hr = 1.78277, gr = -.29227, _r = -.90649, vr = 1.97294, yr = vr * _r, br = vr * hr, xr = hr * gr - _r * mr;
function Sr(e) {
	if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
	e instanceof _ || (e = r(e));
	var t = e.r / 255, n = e.g / 255, i = e.b / 255, a = (xr * i + yr * t - br * n) / (xr + yr - br), o = i - a, s = (vr * (n - a) - gr * o) / _r, c = Math.sqrt(s * s + o * o) / (vr * a * (1 - a)), l = c ? Math.atan2(s, o) * Xn - 120 : NaN;
	return new H(l < 0 ? l + 360 : l, c, a, e.opacity);
}
function Cr(e, t, n, r) {
	return arguments.length === 1 ? Sr(e) : new H(e, t, n, r ?? 1);
}
function H(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
a(H, Cr, s(f, {
	brighter(e) {
		return e = e == null ? t : t ** +e, new H(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? l : l ** +e, new H(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Yn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new _(255 * (t + n * (mr * r + hr * i)), 255 * (t + n * (gr * r + _r * i)), 255 * (t + vr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/accessor.js
function wr(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/getter.js
function Tr(e) {
	return e.length === 1 ? Er(e[0]) : Dr(e);
}
var Er = (e) => function(t) {
	return t[e];
}, Dr = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/error.js
function Or(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/splitAccessPath.js
function kr(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Or("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Or("Access path missing closing bracket: " + e), r && Or("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/field.js
function Ar(e, t, n) {
	let r = kr(e), i = r.length === 1 ? r[0] : e;
	return wr((n && n.get || Tr)(r), [i], t || i);
}
Ar("id"), wr((e) => e, [], "identity"), wr(() => 0, [], "zero"), wr(() => 1, [], "one"), wr(() => !0, [], "true"), wr(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/isArray.js
var jr = Array.isArray;
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/peek.js
function Mr(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toNumber.js
function Nr(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/array.js
function Pr(e) {
	return e == null ? [] : jr(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toSet.js
function Fr(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function U(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function W(e, t) {
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
var Ir = Symbol("implicit");
function Lr() {
	var e = new o(), t = [], n = [], r = Ir;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Ir) return r;
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
		return Lr(t, n).unknown(r);
	}, U.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function Rr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function zr(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Rr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Br(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return Rr((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Vr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Hr(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Ur(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Wr(e, t) {
	var n = t - e;
	return n ? Hr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Vr(isNaN(e) ? t : e);
}
function Gr(e) {
	return (e = +e) == 1 ? G : function(t, n) {
		return n - t ? Ur(t, n, e) : Vr(isNaN(t) ? n : t);
	};
}
function G(e, t) {
	var n = t - e;
	return n ? Hr(e, n) : Vr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Kr = (function e(t) {
	var n = Gr(t);
	function r(e, t) {
		var r = n((e = m(e)).r, (t = m(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = G(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function qr(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = m(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Jr = qr(zr), Yr = qr(Br);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function Xr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Zr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Qr(e, t) {
	return (Zr(t) ? Xr : $r)(e, t);
}
function $r(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = q(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function ei(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function K(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function ti(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = q(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var ni = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ri = new RegExp(ni.source, "g");
function ii(e) {
	return function() {
		return e;
	};
}
function ai(e) {
	return function(t) {
		return e(t) + "";
	};
}
function oi(e, t) {
	var n = ni.lastIndex = ri.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = ni.exec(e)) && (i = ri.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: K(r, i)
	})), n = ri.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? ai(c[0].x) : ii(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function q(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Vr(t) : (n === "number" ? K : n === "string" ? (r = g(t)) ? (t = r, Kr) : oi : t instanceof g ? Kr : t instanceof Date ? ei : Zr(t) ? Xr : Array.isArray(t) ? $r : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ti : K)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function si(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function ci(e, t) {
	var n = Wr(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function li(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var ui = 180 / Math.PI, di = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function fi(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * ui,
		skewX: Math.atan(c) * ui,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var pi;
function mi(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? di : fi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hi(e) {
	return e == null || (pi ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), pi.setAttribute("transform", e), !(e = pi.transform.baseVal.consolidate())) ? di : (e = e.matrix, fi(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function gi(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: K(e, i)
			}, {
				i: c - 2,
				x: K(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: K(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: K(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: K(e, n)
			}, {
				i: s - 2,
				x: K(t, r)
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
var _i = gi(mi, "px, ", "px)", "deg)"), vi = gi(hi, ", ", ")", ")"), yi = 1e-12;
function bi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function xi(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Si(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Ci = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < yi) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), ee = (u * u - s * s + r * p) / (2 * s * n * g), _ = (u * u - s * s - r * p) / (2 * u * n * g), v = Math.log(Math.sqrt(ee * ee + 1) - ee);
			h = (Math.log(Math.sqrt(_ * _ + 1) - _) - v) / t, m = function(e) {
				var r = e * h, i = bi(v), c = s / (n * g) * (i * Si(t * r + v) - xi(v));
				return [
					a + c * d,
					o + c * f,
					s * i / bi(t * r + v)
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
function wi(e) {
	return function(t, n) {
		var r = e((t = d(t)).h, (n = d(n)).h), i = G(t.s, n.s), a = G(t.l, n.l), o = G(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Ti = wi(Wr), Ei = wi(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function Di(e, t) {
	var n = G((e = or(e)).l, (t = or(t)).l), r = G(e.a, t.a), i = G(e.b, t.b), a = G(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function Oi(e) {
	return function(t, n) {
		var r = e((t = fr(t)).h, (n = fr(n)).h), i = G(t.c, n.c), a = G(t.l, n.l), o = G(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var ki = Oi(Wr), Ai = Oi(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function ji(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = Cr(t)).h, (r = Cr(r)).h), a = G(t.s, r.s), o = G(t.l, r.l), s = G(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var Mi = ji(Wr), Ni = ji(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function Pi(e, t) {
	t === void 0 && (t = e, e = q);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Fi(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Ii = /* @__PURE__ */ te({
	interpolate: () => q,
	interpolateArray: () => Qr,
	interpolateBasis: () => zr,
	interpolateBasisClosed: () => Br,
	interpolateCubehelix: () => Mi,
	interpolateCubehelixLong: () => Ni,
	interpolateDate: () => ei,
	interpolateDiscrete: () => si,
	interpolateHcl: () => ki,
	interpolateHclLong: () => Ai,
	interpolateHsl: () => Ti,
	interpolateHslLong: () => Ei,
	interpolateHue: () => ci,
	interpolateLab: () => Di,
	interpolateNumber: () => K,
	interpolateNumberArray: () => Xr,
	interpolateObject: () => ti,
	interpolateRgb: () => Kr,
	interpolateRgbBasis: () => Jr,
	interpolateRgbBasisClosed: () => Yr,
	interpolateRound: () => li,
	interpolateString: () => oi,
	interpolateTransformCss: () => _i,
	interpolateTransformSvg: () => vi,
	interpolateZoom: () => Ci,
	piecewise: () => Pi,
	quantize: () => Fi
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function Li(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function Ri(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var zi = [0, 1];
function J(e) {
	return e;
}
function Bi(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Li(isNaN(t) ? NaN : .5);
}
function Vi(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Hi(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Bi(i, r), a = n(o, a)) : (r = Bi(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Ui(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Bi(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = S(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Wi(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Gi() {
	var e = zi, t = zi, n = q, r, i, a, o = J, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== J && (o = Vi(e[0], e[n - 1])), s = n > 2 ? Ui : Hi, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), K))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Ri), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = li, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : J, u()) : o !== J;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Ki() {
	return Gi()(J, J);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function qi(t, r, i, a) {
	var o = n(t, r, i), s;
	switch (a = h(a ?? ",f"), a.type) {
		case "s":
			var c = Math.max(Math.abs(t), Math.abs(r));
			return a.precision == null && !isNaN(s = ye(o, c)) && (a.precision = s), e(a, c);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			a.precision == null && !isNaN(s = be(o, Math.max(Math.abs(t), Math.abs(r)))) && (a.precision = s - (a.type === "e"));
			break;
		case "f":
		case "%": a.precision == null && !isNaN(s = ve(o)) && (a.precision = s - (a.type === "%") * 2);
	}
	return ee(a);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function Ji(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return i(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return qi(r[0], r[r.length - 1], e ?? 10, n);
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
function Yi() {
	var e = Ki();
	return e.copy = function() {
		return Wi(e, Yi());
	}, U.apply(e, arguments), Ji(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Xi(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Ri), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Xi(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Ri) : [0, 1], Ji(n);
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
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = h(n)).precision == null && (n.trim = !0), n = ee(n)), e === Infinity) return n;
		let i = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / o(Math.round(a(e)));
			return t * r < r - .5 && (t *= r), t <= i ? n(e) : "";
		};
	}, t.nice = () => n(Zi(n(), {
		floor: (e) => o(Math.floor(a(e))),
		ceil: (e) => o(Math.ceil(a(e)))
	})), t;
}
function sa() {
	let e = oa(Gi()).domain([1, 10]);
	return e.copy = () => Wi(e, sa()).base(e.base()), U.apply(e, arguments), e;
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
	}, Ji(n);
}
function da() {
	var e = ua(Gi());
	return e.copy = function() {
		return Wi(e, da()).constant(e.constant());
	}, U.apply(e, arguments);
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
	var t = e(J, J), n = 1;
	function r() {
		return n === 1 ? e(J, J) : n === .5 ? e(pa, ma) : e(fa(n), fa(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Ji(t);
}
function ga() {
	var e = ha(Gi());
	return e.copy = function() {
		return Wi(e, ga()).exponent(e.exponent());
	}, U.apply(e, arguments), e;
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
		for (n = Array(i - 1); ++r < i;) n[r - 1] = _e(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[S(n, e)];
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
		return va().domain(e).range(t).unknown(r);
	}, U.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function ya() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[S(r, e, 0, n)] : a;
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
	}, U.apply(Ji(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function ba() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[S(e, i, 0, r)] : n;
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
	}, U.apply(i, arguments);
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
	var u = Ki(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), ee = l("%a %d"), _ = l("%b %d"), v = l("%B"), y = l("%Y");
	function te(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? ee : _ : n(e) < e ? v : y)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Sa)) : f().map(xa);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? te : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Zi(n, e)) : u;
	}, u.copy = function() {
		return Wi(u, Ca(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function wa() {
	return U.apply(Ca(it, at, N, $e, ze, k, Ie, Pe, O, Wn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function Ta() {
	return U.apply(Ca(nt, rt, P, et, Ke, A, Le, Fe, O, Kn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Ea() {
	var e = 0, t = 1, n, r, i, a, o = J, s = !1, c;
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
	return l.range = u(q), l.rangeRound = u(li), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Y(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Da() {
	var e = Ji(Ea()(J));
	return e.copy = function() {
		return Y(e, Da());
	}, W.apply(e, arguments);
}
function Oa() {
	var e = oa(Ea()).domain([1, 10]);
	return e.copy = function() {
		return Y(e, Oa()).base(e.base());
	}, W.apply(e, arguments);
}
function ka() {
	var e = ua(Ea());
	return e.copy = function() {
		return Y(e, ka()).constant(e.constant());
	}, W.apply(e, arguments);
}
function Aa() {
	var e = ha(Ea());
	return e.copy = function() {
		return Y(e, Aa()).exponent(e.exponent());
	}, W.apply(e, arguments);
}
function ja() {
	return Aa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Ma() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = J, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Pi(e, [
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
	return p.range = m(q), p.rangeRound = m(li), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Na() {
	var e = Ji(Ma()(J));
	return e.copy = function() {
		return Y(e, Na());
	}, W.apply(e, arguments);
}
function Pa() {
	var e = oa(Ma()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Y(e, Pa()).base(e.base());
	}, W.apply(e, arguments);
}
function Fa() {
	var e = ua(Ma());
	return e.copy = function() {
		return Y(e, Fa()).constant(e.constant());
	}, W.apply(e, arguments);
}
function Ia() {
	var e = ha(Ma());
	return e.copy = function() {
		return Y(e, Ia()).exponent(e.exponent());
	}, W.apply(e, arguments);
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
	let e = Lr().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function d() {
		let e = t().length, d = r[1] < r[0], f = r[1 - d], p = Ja(e, s, c), m = r[d - 0];
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
		if (c === c && l === l && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, S(o, c) - 1), d = c === l ? u : S(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return ho().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, d();
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
	return vo.call(e, Nr);
}
var bo = Array.prototype.slice;
function xo() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(S(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = yo(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = bo.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return qi(e[0], Mr(e), t ?? 10, n);
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
	return r.metadata = Fr(Pr(n)), r;
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
]), $(`${to}-pow`, Ia, [Z, Q]), $(`${to}-${Za}`, La, [Z, Q]), $(`${to}-${Qa}`, Fa, [Z, Q]), $(no, va, [uo, no]), $(ro, ya, uo), $(io, ba, uo), $(co, xo, [lo, uo]), $(ao, Lr, lo), $(so, ho, lo), $(oo, _o, lo);
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
	let n = t[0], r = Mr(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function Po(e, t, n) {
	return Pi(Io(t || "rgb", n), e);
}
function Fo(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function Io(e, t) {
	let n = Ii[Lo(e)];
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
	if (jr(e)) return e;
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
export { fe as $, Ir as A, I as B, Fo as C, Yi as D, sa as E, Et as F, gt as G, ft as H, ct as I, ye as J, _t as K, ut as L, Gn as M, Kn as N, li as O, qn as P, pe as Q, pt as R, jo as S, Uo as T, st as U, ot as V, F as W, ge as X, ve as Y, _e as Z, No as _, ao as a, te as at, Ao as b, ro as c, Qa as d, le as et, io as f, Po as g, Io as h, Xa as i, y as it, Wn as j, q as k, eo as l, Ja as m, co as n, S as nt, oo as o, $a as p, be as q, to as r, x as rt, no as s, so as t, se as tt, Za as u, Oo as v, $ as w, Mo as x, ko as y, dt as z };
