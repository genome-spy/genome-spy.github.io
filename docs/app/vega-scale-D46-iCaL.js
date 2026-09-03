import { n as e } from "./rolldown-runtime-DF993M8W.js";
import { $t as t, Qt as n, Xt as r, Zt as i, cn as a, en as o, on as s, tn as c } from "./clipOptions-taFzEljc.js";
//#region ../../node_modules/vega-util/build/peek.js
function l(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-util/build/toNumber.js
function u(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function d(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function f(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function p(e) {
	let t, n, r;
	e.length === 2 ? (t = e === d || e === f ? e : m, n = e, r = e) : (t = d, n = (t, n) => d(e(t), n), r = (t, n) => e(t) - n);
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
function m() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function h(e) {
	return e === null ? NaN : +e;
}
function* ee(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var te = p(d), g = te.right, _ = te.left;
p(h).center;
//#endregion
//#region ../../node_modules/internmap/src/index.js
var v = class extends Map {
	constructor(e, t = ie) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(ne(this, e));
	}
	has(e) {
		return super.has(ne(this, e));
	}
	set(e, t) {
		return super.set(y(this, e), t);
	}
	delete(e) {
		return super.delete(re(this, e));
	}
};
function ne({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function y({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function re({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function ie(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function ae(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function oe(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = ce(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => ce(n[e], n[t]))), ae(e, r);
	}
	return e.sort(se(n));
}
function se(e = d) {
	if (e === d) return ce;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function ce(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var le = Math.sqrt(50), ue = Math.sqrt(10), de = Math.sqrt(2);
function fe(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= le ? 10 : a >= ue ? 5 : a >= de ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? fe(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function pe(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? fe(t, e, n) : fe(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function me(e, t, n) {
	return t = +t, e = +e, n = +n, fe(e, t, n)[2];
}
function he(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? me(t, e, n) : me(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function ge(e, t) {
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
function _e(e, t) {
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
function ve(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? ce : se(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			ve(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (ye(e, n, t), i(e[r], a) > 0 && ye(e, n, r); o < s;) {
			for (ye(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? ye(e, n, s) : (++s, ye(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function ye(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function be(e, t, n) {
	if (e = Float64Array.from(ee(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return _e(e);
		if (t >= 1) return ge(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = ge(ve(e, a).subarray(0, a + 1));
		return o + (_e(e.subarray(a + 1)) - o) * (i - a);
	}
}
function xe(e, t, n = h) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function Se(e) {
	return Math.max(0, -t(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function Ce(e, n) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(t(n) / 3))) * 3 - t(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function we(e, n) {
	return e = Math.abs(e), n = Math.abs(n) - e, Math.max(0, t(n) - t(e)) + 1;
}
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Te = /* @__PURE__ */ new Date(), Ee = /* @__PURE__ */ new Date();
function b(e, t, n, r) {
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
	}, i.filter = (n) => b((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Te.setTime(+t), Ee.setTime(+r), e(Te), e(Ee), Math.floor(n(Te, Ee))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var De = b(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
De.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? b((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : De), De.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var x = 1e3, S = x * 60, C = S * 60, w = C * 24, Oe = w * 7, ke = w * 30, Ae = w * 365, T = b((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * x);
}, (e, t) => (t - e) / x, (e) => e.getUTCSeconds());
T.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var je = b((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * x);
}, (e, t) => {
	e.setTime(+e + t * S);
}, (e, t) => (t - e) / S, (e) => e.getMinutes());
je.range;
var Me = b((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * S);
}, (e, t) => (t - e) / S, (e) => e.getUTCMinutes());
Me.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var Ne = b((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * x - e.getMinutes() * S);
}, (e, t) => {
	e.setTime(+e + t * C);
}, (e, t) => (t - e) / C, (e) => e.getHours());
Ne.range;
var Pe = b((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * C);
}, (e, t) => (t - e) / C, (e) => e.getUTCHours());
Pe.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var E = b((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * S) / w, (e) => e.getDate() - 1);
E.range;
var D = b((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / w, (e) => e.getUTCDate() - 1);
D.range;
var Fe = b((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / w, (e) => Math.floor(e / w));
Fe.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function O(e) {
	return b((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * S) / Oe);
}
var Ie = O(0), Le = O(1), Re = O(2), ze = O(3), Be = O(4), Ve = O(5), He = O(6);
Ie.range, Le.range, Re.range, ze.range, Be.range, Ve.range, He.range;
function k(e) {
	return b((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Oe);
}
var Ue = k(0), We = k(1), Ge = k(2), Ke = k(3), qe = k(4), Je = k(5), Ye = k(6);
Ue.range, We.range, Ge.range, Ke.range, qe.range, Je.range, Ye.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var Xe = b((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Xe.range;
var Ze = b((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ze.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var A = b((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
A.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : b((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), A.range;
var j = b((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
j.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : b((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), j.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function Qe(e, t, n, r, i, a) {
	let o = [
		[
			T,
			1,
			x
		],
		[
			T,
			5,
			5 * x
		],
		[
			T,
			15,
			15 * x
		],
		[
			T,
			30,
			30 * x
		],
		[
			a,
			1,
			S
		],
		[
			a,
			5,
			5 * S
		],
		[
			a,
			15,
			15 * S
		],
		[
			a,
			30,
			30 * S
		],
		[
			i,
			1,
			C
		],
		[
			i,
			3,
			3 * C
		],
		[
			i,
			6,
			6 * C
		],
		[
			i,
			12,
			12 * C
		],
		[
			r,
			1,
			w
		],
		[
			r,
			2,
			2 * w
		],
		[
			n,
			1,
			Oe
		],
		[
			t,
			1,
			ke
		],
		[
			t,
			3,
			3 * ke
		],
		[
			e,
			1,
			Ae
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = p(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(he(t / Ae, n / Ae, r));
		if (a === 0) return De.every(Math.max(he(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [$e, et] = Qe(j, Ze, Ue, Fe, Pe, Me), [tt, nt] = Qe(A, Xe, Ie, E, Ne, je), M = "year", rt = "quarter", N = "month", it = "week", at = "date", ot = "dayofyear", st = "hours", ct = "minutes", lt = "seconds", ut = "milliseconds";
[
	M,
	rt,
	N,
	it,
	at,
	"day",
	ot,
	st,
	ct,
	lt,
	ut
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${M}${N}`, `${M}${N}${at}`, `${st}${ct}`;
var dt = {
	[M]: A,
	[rt]: Xe.every(3),
	[N]: Xe,
	[it]: Ie,
	[at]: E,
	day: E,
	[ot]: E,
	[st]: Ne,
	[ct]: je,
	[lt]: T,
	[ut]: De
}, ft = {
	[M]: j,
	[rt]: Ze.every(3),
	[N]: Ze,
	[it]: Ue,
	[at]: D,
	day: D,
	[ot]: D,
	[st]: Pe,
	[ct]: Me,
	[lt]: T,
	[ut]: De
};
function pt(e) {
	return dt[e];
}
function mt(e) {
	return ft[e];
}
var ht = 1e3, gt = ht * 60, _t = gt * 60, vt = _t * 24;
vt * 7;
var yt = vt * 30;
vt * 365, [
	M,
	N,
	at,
	st,
	ct,
	lt,
	ut
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * ht, 15 * ht, 30 * ht, 5 * gt, 15 * gt, 30 * gt, 3 * _t, 6 * _t, 12 * _t, 3 * yt;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function bt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function xt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function St(e, t, n) {
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
function Ct(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Ot(i), u = kt(i), d = Ot(a), f = kt(a), p = Ot(o), m = kt(o), h = Ot(s), ee = kt(s), te = Ot(c), g = kt(c), _ = {
		a: pe,
		A: me,
		b: he,
		B: ge,
		c: null,
		d: Xt,
		e: Xt,
		f: tn,
		g: pn,
		G: hn,
		H: Zt,
		I: Qt,
		j: $t,
		L: en,
		m: nn,
		M: rn,
		p: _e,
		q: ve,
		Q: Rn,
		s: zn,
		S: an,
		u: on,
		U: sn,
		V: ln,
		w: un,
		W: dn,
		x: null,
		X: null,
		y: fn,
		Y: mn,
		Z: gn,
		"%": Ln
	}, v = {
		a: ye,
		A: be,
		b: xe,
		B: Se,
		c: null,
		d: _n,
		e: _n,
		f: Sn,
		g: Nn,
		G: Fn,
		H: vn,
		I: yn,
		j: bn,
		L: xn,
		m: Cn,
		M: wn,
		p: Ce,
		q: we,
		Q: Rn,
		s: zn,
		S: Tn,
		u: En,
		U: Dn,
		V: kn,
		w: An,
		W: jn,
		x: null,
		X: null,
		y: Mn,
		Y: Pn,
		Z: In,
		"%": Ln
	}, ne = {
		a: oe,
		A: se,
		b: ce,
		B: le,
		c: ue,
		d: Bt,
		e: Bt,
		f: Kt,
		g: It,
		G: Ft,
		H: Ht,
		I: Ht,
		j: Vt,
		L: Gt,
		m: zt,
		M: Ut,
		p: ae,
		q: Rt,
		Q: Jt,
		s: Yt,
		S: Wt,
		u: jt,
		U: Mt,
		V: Nt,
		w: At,
		W: Pt,
		x: de,
		X: fe,
		y: It,
		Y: Ft,
		Z: Lt,
		"%": qt
	};
	_.x = y(n, _), _.X = y(r, _), _.c = y(t, _), v.x = y(n, v), v.X = y(r, v), v.c = y(t, v);
	function y(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = wt[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function re(e, t) {
		return function(n) {
			var r = St(1900, void 0, 1), i = ie(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = xt(St(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? We.ceil(a) : We(a), a = D.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = bt(St(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Le.ceil(a) : Le(a), a = E.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? xt(St(r.y, 0, 1)).getUTCDay() : bt(St(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, xt(r)) : bt(r);
		};
	}
	function ie(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ne[s in wt ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
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
		var r = te.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
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
	function ye(e) {
		return o[e.getUTCDay()];
	}
	function be(e) {
		return a[e.getUTCDay()];
	}
	function xe(e) {
		return c[e.getUTCMonth()];
	}
	function Se(e) {
		return s[e.getUTCMonth()];
	}
	function Ce(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function we(e) {
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
var wt = {
	"-": "",
	_: " ",
	0: "0"
}, P = /^\s*\d+/, Tt = /^%/, Et = /[\\^$*+?|[\]().{}]/g;
function F(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Dt(e) {
	return e.replace(Et, "\\$&");
}
function Ot(e) {
	return RegExp("^(?:" + e.map(Dt).join("|") + ")", "i");
}
function kt(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function At(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function jt(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Mt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Nt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Pt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Ft(e, t, n) {
	var r = P.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function It(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Lt(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Rt(e, t, n) {
	var r = P.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function zt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Bt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Vt(e, t, n) {
	var r = P.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Ht(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ut(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Wt(e, t, n) {
	var r = P.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Gt(e, t, n) {
	var r = P.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Kt(e, t, n) {
	var r = P.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function qt(e, t, n) {
	var r = Tt.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Jt(e, t, n) {
	var r = P.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Yt(e, t, n) {
	var r = P.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Xt(e, t) {
	return F(e.getDate(), t, 2);
}
function Zt(e, t) {
	return F(e.getHours(), t, 2);
}
function Qt(e, t) {
	return F(e.getHours() % 12 || 12, t, 2);
}
function $t(e, t) {
	return F(1 + E.count(A(e), e), t, 3);
}
function en(e, t) {
	return F(e.getMilliseconds(), t, 3);
}
function tn(e, t) {
	return en(e, t) + "000";
}
function nn(e, t) {
	return F(e.getMonth() + 1, t, 2);
}
function rn(e, t) {
	return F(e.getMinutes(), t, 2);
}
function an(e, t) {
	return F(e.getSeconds(), t, 2);
}
function on(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function sn(e, t) {
	return F(Ie.count(A(e) - 1, e), t, 2);
}
function cn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Be(e) : Be.ceil(e);
}
function ln(e, t) {
	return e = cn(e), F(Be.count(A(e), e) + (A(e).getDay() === 4), t, 2);
}
function un(e) {
	return e.getDay();
}
function dn(e, t) {
	return F(Le.count(A(e) - 1, e), t, 2);
}
function fn(e, t) {
	return F(e.getFullYear() % 100, t, 2);
}
function pn(e, t) {
	return e = cn(e), F(e.getFullYear() % 100, t, 2);
}
function mn(e, t) {
	return F(e.getFullYear() % 1e4, t, 4);
}
function hn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Be(e) : Be.ceil(e), F(e.getFullYear() % 1e4, t, 4);
}
function gn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + F(t / 60 | 0, "0", 2) + F(t % 60, "0", 2);
}
function _n(e, t) {
	return F(e.getUTCDate(), t, 2);
}
function vn(e, t) {
	return F(e.getUTCHours(), t, 2);
}
function yn(e, t) {
	return F(e.getUTCHours() % 12 || 12, t, 2);
}
function bn(e, t) {
	return F(1 + D.count(j(e), e), t, 3);
}
function xn(e, t) {
	return F(e.getUTCMilliseconds(), t, 3);
}
function Sn(e, t) {
	return xn(e, t) + "000";
}
function Cn(e, t) {
	return F(e.getUTCMonth() + 1, t, 2);
}
function wn(e, t) {
	return F(e.getUTCMinutes(), t, 2);
}
function Tn(e, t) {
	return F(e.getUTCSeconds(), t, 2);
}
function En(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function Dn(e, t) {
	return F(Ue.count(j(e) - 1, e), t, 2);
}
function On(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? qe(e) : qe.ceil(e);
}
function kn(e, t) {
	return e = On(e), F(qe.count(j(e), e) + (j(e).getUTCDay() === 4), t, 2);
}
function An(e) {
	return e.getUTCDay();
}
function jn(e, t) {
	return F(We.count(j(e) - 1, e), t, 2);
}
function Mn(e, t) {
	return F(e.getUTCFullYear() % 100, t, 2);
}
function Nn(e, t) {
	return e = On(e), F(e.getUTCFullYear() % 100, t, 2);
}
function Pn(e, t) {
	return F(e.getUTCFullYear() % 1e4, t, 4);
}
function Fn(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? qe(e) : qe.ceil(e), F(e.getUTCFullYear() % 1e4, t, 4);
}
function In() {
	return "+0000";
}
function Ln() {
	return "%";
}
function Rn(e) {
	return +e;
}
function zn(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var Bn, Vn, Hn, Un, Wn;
Gn({
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
function Gn(e) {
	return Bn = Ct(e), Vn = Bn.format, Hn = Bn.parse, Un = Bn.utcFormat, Wn = Bn.utcParse, Bn;
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
var Kn = Symbol("implicit");
function qn() {
	var e = new v(), t = [], n = [], r = Kn;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Kn) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new v();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return qn(t, n).unknown(r);
	}, I.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function Jn(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Yn(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function R() {}
var z = .7, Xn = 1 / z, Zn = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", B = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $n = /^#([0-9a-f]{3,8})$/, er = RegExp(`^rgb\\(${Zn},${Zn},${Zn}\\)$`), tr = RegExp(`^rgb\\(${B},${B},${B}\\)$`), nr = RegExp(`^rgba\\(${Zn},${Zn},${Zn},${Qn}\\)$`), rr = RegExp(`^rgba\\(${B},${B},${B},${Qn}\\)$`), ir = RegExp(`^hsl\\(${Qn},${B},${B}\\)$`), ar = RegExp(`^hsla\\(${Qn},${B},${B},${Qn}\\)$`), or = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Jn(R, dr, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: sr,
	formatHex: sr,
	formatHex8: cr,
	formatHsl: lr,
	formatRgb: ur,
	toString: ur
});
function sr() {
	return this.rgb().formatHex();
}
function cr() {
	return this.rgb().formatHex8();
}
function lr() {
	return Cr(this).formatHsl();
}
function ur() {
	return this.rgb().formatRgb();
}
function dr(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = $n.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? fr(t) : n === 3 ? new V(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = er.exec(e)) ? new V(t[1], t[2], t[3], 1) : (t = tr.exec(e)) ? new V(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = nr.exec(e)) ? pr(t[1], t[2], t[3], t[4]) : (t = rr.exec(e)) ? pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ir.exec(e)) ? Sr(t[1], t[2] / 100, t[3] / 100, 1) : (t = ar.exec(e)) ? Sr(t[1], t[2] / 100, t[3] / 100, t[4]) : or.hasOwnProperty(e) ? fr(or[e]) : e === "transparent" ? new V(NaN, NaN, NaN, 0) : null;
}
function fr(e) {
	return new V(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function pr(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new V(e, t, n, r);
}
function mr(e) {
	return e instanceof R || (e = dr(e)), e ? (e = e.rgb(), new V(e.r, e.g, e.b, e.opacity)) : new V();
}
function hr(e, t, n, r) {
	return arguments.length === 1 ? mr(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Jn(V, hr, Yn(R, {
	brighter(e) {
		return e = e == null ? Xn : Xn ** +e, new V(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? z : z ** +e, new V(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new V(br(this.r), br(this.g), br(this.b), yr(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: gr,
	formatHex: gr,
	formatHex8: _r,
	formatRgb: vr,
	toString: vr
}));
function gr() {
	return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}`;
}
function _r() {
	return `#${xr(this.r)}${xr(this.g)}${xr(this.b)}${xr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vr() {
	let e = yr(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${br(this.r)}, ${br(this.g)}, ${br(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function yr(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function br(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function xr(e) {
	return e = br(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sr(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new H(e, t, n, r);
}
function Cr(e) {
	if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
	if (e instanceof R || (e = dr(e)), !e) return new H();
	if (e instanceof H) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new H(o, s, c, e.opacity);
}
function wr(e, t, n, r) {
	return arguments.length === 1 ? Cr(e) : new H(e, t, n, r ?? 1);
}
function H(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Jn(H, wr, Yn(R, {
	brighter(e) {
		return e = e == null ? Xn : Xn ** +e, new H(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? z : z ** +e, new H(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new V(Dr(e >= 240 ? e - 240 : e + 120, i, r), Dr(e, i, r), Dr(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new H(Tr(this.h), Er(this.s), Er(this.l), yr(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = yr(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Tr(this.h)}, ${Er(this.s) * 100}%, ${Er(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Tr(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Er(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Dr(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var Or = Math.PI / 180, kr = 180 / Math.PI, Ar = 18, jr = .96422, Mr = 1, Nr = .82521, Pr = 4 / 29, Fr = 6 / 29, Ir = 3 * Fr * Fr, Lr = Fr * Fr * Fr;
function Rr(e) {
	if (e instanceof U) return new U(e.l, e.a, e.b, e.opacity);
	if (e instanceof W) return Kr(e);
	e instanceof V || (e = mr(e));
	var t = Ur(e.r), n = Ur(e.g), r = Ur(e.b), i = Br((.2225045 * t + .7168786 * n + .0606169 * r) / Mr), a, o;
	return t === n && n === r ? a = o = i : (a = Br((.4360747 * t + .3850649 * n + .1430804 * r) / jr), o = Br((.0139322 * t + .0971045 * n + .7141733 * r) / Nr)), new U(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function zr(e, t, n, r) {
	return arguments.length === 1 ? Rr(e) : new U(e, t, n, r ?? 1);
}
function U(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Jn(U, zr, Yn(R, {
	brighter(e) {
		return new U(this.l + Ar * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new U(this.l - Ar * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = jr * Vr(t), e = Mr * Vr(e), n = Nr * Vr(n), new V(Hr(3.1338561 * t - 1.6168667 * e - .4906146 * n), Hr(-.9787684 * t + 1.9161415 * e + .033454 * n), Hr(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Br(e) {
	return e > Lr ? e ** (1 / 3) : e / Ir + Pr;
}
function Vr(e) {
	return e > Fr ? e * e * e : Ir * (e - Pr);
}
function Hr(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Ur(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Wr(e) {
	if (e instanceof W) return new W(e.h, e.c, e.l, e.opacity);
	if (e instanceof U || (e = Rr(e)), e.a === 0 && e.b === 0) return new W(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * kr;
	return new W(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Gr(e, t, n, r) {
	return arguments.length === 1 ? Wr(e) : new W(e, t, n, r ?? 1);
}
function W(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Kr(e) {
	if (isNaN(e.h)) return new U(e.l, 0, 0, e.opacity);
	var t = e.h * Or;
	return new U(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Jn(W, Gr, Yn(R, {
	brighter(e) {
		return new W(this.h, this.c, this.l + Ar * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new W(this.h, this.c, this.l - Ar * (e ?? 1), this.opacity);
	},
	rgb() {
		return Kr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var qr = -.14861, Jr = 1.78277, Yr = -.29227, Xr = -.90649, Zr = 1.97294, Qr = Zr * Xr, $r = Zr * Jr, ei = Jr * Yr - Xr * qr;
function ti(e) {
	if (e instanceof ri) return new ri(e.h, e.s, e.l, e.opacity);
	e instanceof V || (e = mr(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (ei * r + Qr * t - $r * n) / (ei + Qr - $r), a = r - i, o = (Zr * (n - i) - Yr * a) / Xr, s = Math.sqrt(o * o + a * a) / (Zr * i * (1 - i)), c = s ? Math.atan2(o, a) * kr - 120 : NaN;
	return new ri(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function ni(e, t, n, r) {
	return arguments.length === 1 ? ti(e) : new ri(e, t, n, r ?? 1);
}
function ri(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Jn(ri, ni, Yn(R, {
	brighter(e) {
		return e = e == null ? Xn : Xn ** +e, new ri(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? z : z ** +e, new ri(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Or, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new V(255 * (t + n * (qr * r + Jr * i)), 255 * (t + n * (Yr * r + Xr * i)), 255 * (t + Zr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function ii(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function ai(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return ii((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function oi(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return ii((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var si = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function ci(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function li(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ui(e, t) {
	var n = t - e;
	return n ? ci(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : si(isNaN(e) ? t : e);
}
function di(e) {
	return (e = +e) == 1 ? G : function(t, n) {
		return n - t ? li(t, n, e) : si(isNaN(t) ? n : t);
	};
}
function G(e, t) {
	var n = t - e;
	return n ? ci(e, n) : si(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var fi = (function e(t) {
	var n = di(t);
	function r(e, t) {
		var r = n((e = hr(e)).r, (t = hr(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = G(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function pi(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = hr(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var mi = pi(ai), hi = pi(oi);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function gi(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function _i(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function vi(e, t) {
	return (_i(t) ? gi : yi)(e, t);
}
function yi(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = q(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function bi(e, t) {
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
function xi(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = q(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var Si = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ci = new RegExp(Si.source, "g");
function wi(e) {
	return function() {
		return e;
	};
}
function Ti(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ei(e, t) {
	var n = Si.lastIndex = Ci.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Si.exec(e)) && (i = Ci.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: K(r, i)
	})), n = Ci.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ti(c[0].x) : wi(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function q(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? si(t) : (n === "number" ? K : n === "string" ? (r = dr(t)) ? (t = r, fi) : Ei : t instanceof dr ? fi : t instanceof Date ? bi : _i(t) ? gi : Array.isArray(t) ? yi : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xi : K)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function Di(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function Oi(e, t) {
	var n = ui(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function ki(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var Ai = 180 / Math.PI, ji = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Mi(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Ai,
		skewX: Math.atan(c) * Ai,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var Ni;
function Pi(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? ji : Mi(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Fi(e) {
	return e == null || (Ni ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Ni.setAttribute("transform", e), !(e = Ni.transform.baseVal.consolidate())) ? ji : (e = e.matrix, Mi(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function Ii(e, t, n, r) {
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
var Li = Ii(Pi, "px, ", "px)", "deg)"), Ri = Ii(Fi, ", ", ")", ")"), zi = 1e-12;
function Bi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Vi(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Hi(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Ui = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < zi) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var ee = Math.sqrt(p), te = (u * u - s * s + r * p) / (2 * s * n * ee), g = (u * u - s * s - r * p) / (2 * u * n * ee), _ = Math.log(Math.sqrt(te * te + 1) - te);
			h = (Math.log(Math.sqrt(g * g + 1) - g) - _) / t, m = function(e) {
				var r = e * h, i = Bi(_), c = s / (n * ee) * (i * Hi(t * r + _) - Vi(_));
				return [
					a + c * d,
					o + c * f,
					s * i / Bi(t * r + _)
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
function Wi(e) {
	return function(t, n) {
		var r = e((t = wr(t)).h, (n = wr(n)).h), i = G(t.s, n.s), a = G(t.l, n.l), o = G(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Gi = Wi(ui), Ki = Wi(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function qi(e, t) {
	var n = G((e = zr(e)).l, (t = zr(t)).l), r = G(e.a, t.a), i = G(e.b, t.b), a = G(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function Ji(e) {
	return function(t, n) {
		var r = e((t = Gr(t)).h, (n = Gr(n)).h), i = G(t.c, n.c), a = G(t.l, n.l), o = G(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Yi = Ji(ui), Xi = Ji(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function Zi(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = ni(t)).h, (r = ni(r)).h), a = G(t.s, r.s), o = G(t.l, r.l), s = G(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var Qi = Zi(ui), $i = Zi(G);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function ea(e, t) {
	t === void 0 && (t = e, e = q);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function ta(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var na = /* @__PURE__ */ e({
	interpolate: () => q,
	interpolateArray: () => vi,
	interpolateBasis: () => ai,
	interpolateBasisClosed: () => oi,
	interpolateCubehelix: () => Qi,
	interpolateCubehelixLong: () => $i,
	interpolateDate: () => bi,
	interpolateDiscrete: () => Di,
	interpolateHcl: () => Yi,
	interpolateHclLong: () => Xi,
	interpolateHsl: () => Gi,
	interpolateHslLong: () => Ki,
	interpolateHue: () => Oi,
	interpolateLab: () => qi,
	interpolateNumber: () => K,
	interpolateNumberArray: () => gi,
	interpolateObject: () => xi,
	interpolateRgb: () => fi,
	interpolateRgbBasis: () => mi,
	interpolateRgbBasisClosed: () => hi,
	interpolateRound: () => ki,
	interpolateString: () => Ei,
	interpolateTransformCss: () => Li,
	interpolateTransformSvg: () => Ri,
	interpolateZoom: () => Ui,
	piecewise: () => ea,
	quantize: () => ta
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function ra(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function ia(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var aa = [0, 1];
function J(e) {
	return e;
}
function oa(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : ra(isNaN(t) ? NaN : .5);
}
function sa(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function ca(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = oa(i, r), a = n(o, a)) : (r = oa(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function la(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = oa(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = g(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function ua(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function da() {
	var e = aa, t = aa, n = q, r, i, a, o = J, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== J && (o = sa(e[0], e[n - 1])), s = n > 2 ? la : ca, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), K))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, ia), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = ki, u();
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
function fa() {
	return da()(J, J);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function pa(e, t, a, o) {
	var s = he(e, t, a), c;
	switch (o = n(o ?? ",f"), o.type) {
		case "s":
			var l = Math.max(Math.abs(e), Math.abs(t));
			return o.precision == null && !isNaN(c = Ce(s, l)) && (o.precision = c), i(o, l);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			o.precision == null && !isNaN(c = we(s, Math.max(Math.abs(e), Math.abs(t)))) && (o.precision = c - (o.type === "e"));
			break;
		case "f":
		case "%":
			o.precision == null && !isNaN(c = Se(s)) && (o.precision = c - (o.type === "%") * 2);
			break;
	}
	return r(o);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function ma(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return pe(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return pa(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = me(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function ha() {
	var e = fa();
	return e.copy = function() {
		return ua(e, ha());
	}, I.apply(e, arguments), ma(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function ga(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, ia), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return ga(e).unknown(t);
	}, e = arguments.length ? Array.from(e, ia) : [0, 1], ma(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function _a(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function va(e) {
	return Math.log(e);
}
function ya(e) {
	return Math.exp(e);
}
function ba(e) {
	return -Math.log(-e);
}
function xa(e) {
	return -Math.exp(-e);
}
function Sa(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Ca(e) {
	return e === 10 ? Sa : e === Math.E ? Math.exp : (t) => e ** +t;
}
function wa(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ta(e) {
	return (t, n) => -e(-t, n);
}
function Ea(e) {
	let t = e(va, ya), i = t.domain, a = 10, o, s;
	function c() {
		return o = wa(a), s = Ca(a), i()[0] < 0 ? (o = Ta(o), s = Ta(s), e(ba, xa)) : e(va, ya), t;
	}
	return t.base = function(e) {
		return arguments.length ? (a = +e, c()) : a;
	}, t.domain = function(e) {
		return arguments.length ? (i(e), c()) : i();
	}, t.ticks = (e) => {
		let t = i(), n = t[0], r = t[t.length - 1], c = r < n;
		c && ([n, r] = [r, n]);
		let l = o(n), u = o(r), d, f, p = e == null ? 10 : +e, m = [];
		if (!(a % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), n > 0) {
				for (; l <= u; ++l) for (d = 1; d < a; ++d) if (f = l < 0 ? d / s(-l) : d * s(l), !(f < n)) {
					if (f > r) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = a - 1; d >= 1; --d) if (f = l > 0 ? d / s(-l) : d * s(l), !(f < n)) {
				if (f > r) break;
				m.push(f);
			}
			m.length * 2 < p && (m = pe(n, r, p));
		} else m = pe(l, u, Math.min(u - l, p)).map(s);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, i) => {
		if (e ??= 10, i ??= a === 10 ? "s" : ",", typeof i != "function" && (!(a % 1) && (i = n(i)).precision == null && (i.trim = !0), i = r(i)), e === Infinity) return i;
		let c = Math.max(1, a * e / t.ticks().length);
		return (e) => {
			let t = e / s(Math.round(o(e)));
			return t * a < a - .5 && (t *= a), t <= c ? i(e) : "";
		};
	}, t.nice = () => i(_a(i(), {
		floor: (e) => s(Math.floor(o(e))),
		ceil: (e) => s(Math.ceil(o(e)))
	})), t;
}
function Da() {
	let e = Ea(da()).domain([1, 10]);
	return e.copy = () => ua(e, Da()).base(e.base()), I.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function Oa(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function ka(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Aa(e) {
	var t = 1, n = e(Oa(t), ka(t));
	return n.constant = function(n) {
		return arguments.length ? e(Oa(t = +n), ka(t)) : t;
	}, ma(n);
}
function ja() {
	var e = Aa(da());
	return e.copy = function() {
		return ua(e, ja()).constant(e.constant());
	}, I.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function Ma(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function Na(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Pa(e) {
	return e < 0 ? -e * e : e * e;
}
function Fa(e) {
	var t = e(J, J), n = 1;
	function r() {
		return n === 1 ? e(J, J) : n === .5 ? e(Na, Pa) : e(Ma(n), Ma(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, ma(t);
}
function Ia() {
	var e = Fa(da());
	return e.copy = function() {
		return ua(e, Ia()).exponent(e.exponent());
	}, I.apply(e, arguments), e;
}
function La() {
	return Ia.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function Ra() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = xe(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[g(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(d), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return Ra().domain(e).range(t).unknown(r);
	}, I.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function za() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[g(r, e, 0, n)] : a;
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
		return za().domain([e, t]).range(i).unknown(a);
	}, I.apply(ma(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function Ba() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[g(e, i, 0, r)] : n;
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
		return Ba().domain(e).range(t).unknown(n);
	}, I.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function Va(e) {
	return new Date(e);
}
function Ha(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ua(e, t, n, r, i, a, o, s, c, l) {
	var u = fa(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), ee = l("%I %p"), te = l("%a %d"), g = l("%b %d"), _ = l("%B"), v = l("%Y");
	function ne(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? ee : r(e) < e ? i(e) < e ? te : g : n(e) < e ? _ : v)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Ha)) : f().map(Va);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ne : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(_a(n, e)) : u;
	}, u.copy = function() {
		return ua(u, Ua(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function Wa() {
	return I.apply(Ua(tt, nt, A, Xe, Ie, E, Ne, je, T, Vn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function Ga() {
	return I.apply(Ua($e, et, j, Ze, Ue, D, Pe, Me, T, Un).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Ka() {
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
	return l.range = u(q), l.rangeRound = u(ki), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Y(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function qa() {
	var e = ma(Ka()(J));
	return e.copy = function() {
		return Y(e, qa());
	}, L.apply(e, arguments);
}
function Ja() {
	var e = Ea(Ka()).domain([1, 10]);
	return e.copy = function() {
		return Y(e, Ja()).base(e.base());
	}, L.apply(e, arguments);
}
function Ya() {
	var e = Aa(Ka());
	return e.copy = function() {
		return Y(e, Ya()).constant(e.constant());
	}, L.apply(e, arguments);
}
function Xa() {
	var e = Fa(Ka());
	return e.copy = function() {
		return Y(e, Xa()).exponent(e.exponent());
	}, L.apply(e, arguments);
}
function Za() {
	return Xa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Qa() {
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
			return arguments.length ? ([n, r, i] = t, l = ea(e, [
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
	return p.range = m(q), p.rangeRound = m(ki), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function $a() {
	var e = ma(Qa()(J));
	return e.copy = function() {
		return Y(e, $a());
	}, L.apply(e, arguments);
}
function eo() {
	var e = Ea(Qa()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Y(e, eo()).base(e.base());
	}, L.apply(e, arguments);
}
function to() {
	var e = Aa(Qa());
	return e.copy = function() {
		return Y(e, to()).constant(e.constant());
	}, L.apply(e, arguments);
}
function no() {
	var e = Fa(Qa());
	return e.copy = function() {
		return Y(e, no()).exponent(e.exponent());
	}, L.apply(e, arguments);
}
function ro() {
	return no.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function X(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var io = X("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ao = X("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), oo = X("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), so = X("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), co = X("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), lo = X("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), uo = X("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), fo = X("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), po = X("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), mo = X("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function ho(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var go = "identity", _o = "linear", vo = "sqrt", yo = "symlog", bo = "time", xo = "sequential", So = "diverging", Co = "quantile", wo = "quantize", To = "threshold", Eo = "ordinal", Do = "point", Oo = "band", ko = "bin-ordinal", Z = "continuous", Ao = "discrete", jo = "discretizing", Q = "interpolating", Mo = "temporal";
function No(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function Po(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function Fo() {
	let e = qn().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		let e = t().length, d = r[1] < r[0], f = r[1 - d], p = ho(e, c, l), m = r[d - 0];
		i = (f - m) / (p || 1), s && (i = Math.floor(i)), m += (f - m - i * (e - c)) * u, a = i * (1 - c), s && (m = Math.round(m), a = Math.round(a));
		let h = o(e).map((e) => m + i * e);
		return n(d ? h.reverse() : h);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? (r = [+e[0], +e[1]], d()) : r.slice();
	}, e.rangeRound = function(e) {
		return r = [+e[0], +e[1]], s = !0, d();
	}, e.bandwidth = function() {
		return a;
	}, e.step = function() {
		return i;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), c = l, d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.invertRange = function(e) {
		if (e[0] == null || e[1] == null) return;
		let i = r[1] < r[0], o = i ? n().reverse() : n(), s = o.length - 1, c = +e[0], l = +e[1], u, d, f;
		if (!(c !== c || l !== l) && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, g(o, c) - 1), d = c === l ? u : g(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return Fo().domain(t()).range(r).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, d();
}
function Io(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return Io(t());
	}, e;
}
function Lo() {
	return Io(Fo().paddingInner(1));
}
var Ro = Array.prototype.map;
function zo(e) {
	return Ro.call(e, u);
}
var Bo = Array.prototype.slice;
function Vo() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(g(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = zo(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = Bo.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return pa(e[0], l(e), t ?? 10, n);
	}, n.copy = function() {
		return Vo().domain(n.domain()).range(n.range());
	}, n;
}
var Ho = /* @__PURE__ */ new Map(), Uo = Symbol("vega_scale");
function Wo(e) {
	return e[Uo] = !0, e;
}
function Go(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? No(n) : n.invertExtent ? Po(n) : void 0, n.type = e, Wo(n);
	};
	return r.metadata = c(s(n)), r;
}
function $(e, t, n) {
	return arguments.length > 1 ? (Ho.set(e, Go(e, t, n)), this) : Ko(e) ? Ho.get(e) : void 0;
}
$(go, ga), $(_o, ha, Z), $("log", Da, [Z, "log"]), $("pow", Ia, Z), $(vo, La, Z), $(yo, ja, Z), $(bo, Wa, [Z, Mo]), $("utc", Ga, [Z, Mo]), $(xo, qa, [Z, Q]), $(`${xo}-${_o}`, qa, [Z, Q]), $(`${xo}-log`, Ja, [
	Z,
	Q,
	"log"
]), $(`${xo}-pow`, Xa, [Z, Q]), $(`${xo}-${vo}`, Za, [Z, Q]), $(`${xo}-${yo}`, Ya, [Z, Q]), $(`${So}-${_o}`, $a, [Z, Q]), $(`${So}-log`, eo, [
	Z,
	Q,
	"log"
]), $(`${So}-pow`, no, [Z, Q]), $(`${So}-${vo}`, ro, [Z, Q]), $(`${So}-${yo}`, to, [Z, Q]), $(Co, Ra, [jo, Co]), $(wo, za, jo), $(To, Ba, jo), $(ko, Vo, [Ao, jo]), $(Eo, qn, Ao), $(Oo, Fo, Ao), $(Do, Lo, Ao);
function Ko(e) {
	return Ho.has(e);
}
function qo(e, t) {
	let n = Ho.get(e);
	return n && n.metadata[t];
}
function Jo(e) {
	return qo(e, Z);
}
function Yo(e) {
	return qo(e, Ao);
}
function Xo(e) {
	return qo(e, jo);
}
function Zo(e) {
	return qo(e, "log");
}
function Qo(e) {
	return qo(e, Q);
}
function $o(e, t) {
	let n = t[0], r = l(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function es(e, t, n) {
	return ea(ns(t || "rgb", n), e);
}
function ts(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function ns(e, t) {
	let n = na[rs(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function rs(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var is = {
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
}, as = {
	accent: ao,
	category10: io,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: oo,
	observable10: so,
	paired: co,
	pastel1: lo,
	pastel2: uo,
	set1: fo,
	set2: po,
	set3: mo,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function os(e) {
	if (a(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function ss(e, t) {
	for (let n in e) ls(n, t(e[n]));
}
var cs = {};
ss(as, os), ss(is, (e) => es(os(e)));
function ls(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (cs[e] = t, this) : cs[e];
}
//#endregion
export { _e as $, dr as A, ct as B, ts as C, ha as D, Da as E, Wn as F, M as G, rt as H, Ct as I, we as J, pt as K, at as L, Vn as M, Hn as N, ki as O, Un as P, xe as Q, st as R, Zo as S, ls as T, lt as U, N as V, it as W, Se as X, Ce as Y, be as Z, $o as _, Eo as a, v as at, Xo as b, wo as c, p as ct, yo as d, ge as et, To as f, es as g, ns as h, _o as i, oe as it, Kn as j, q as k, xo as l, u as lt, ho as m, ko as n, he as nt, Do as o, _ as ot, bo as p, mt as q, So as r, pe as rt, Co as s, g as st, Oo as t, me as tt, vo as u, Jo as v, $ as w, Qo as x, Yo as y, ut as z };
