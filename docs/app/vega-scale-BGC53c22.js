import { n as e } from "./rolldown-runtime-DF993M8W.js";
import { _ as t, _n as n, c as r, cn as i, d as a, dn as o, f as s, fn as c, g as l, h as u, l as d, ln as f, m as p, p as m, sn as h, u as g, un as _, yn as ee } from "./clipOptions-H68pJyEZ.js";
//#region ../../node_modules/vega-util/build/peek.js
function v(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-util/build/toNumber.js
function y(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function b(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function x(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function te(e) {
	let t, n, r;
	e.length === 2 ? (t = e === b || e === x ? e : ne, n = e, r = e) : (t = b, n = (t, n) => b(e(t), n), r = (t, n) => e(t) - n);
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
var ae = te(b), S = ae.right, oe = ae.left;
te(re).center;
//#endregion
//#region ../../node_modules/internmap/src/index.js
var se = class extends Map {
	constructor(e, t = de) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(ce(this, e));
	}
	has(e) {
		return super.has(ce(this, e));
	}
	set(e, t) {
		return super.set(le(this, e), t);
	}
	delete(e) {
		return super.delete(ue(this, e));
	}
};
function ce({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function le({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function ue({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function de(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function fe(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function pe(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = he(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => he(n[e], n[t]))), fe(e, r);
	}
	return e.sort(me(n));
}
function me(e = b) {
	if (e === b) return he;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function he(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var ge = Math.sqrt(50), _e = Math.sqrt(10), ve = Math.sqrt(2);
function ye(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= ge ? 10 : a >= _e ? 5 : a >= ve ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? ye(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function be(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? ye(t, e, n) : ye(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function xe(e, t, n) {
	return t = +t, e = +e, n = +n, ye(e, t, n)[2];
}
function Se(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? xe(t, e, n) : xe(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function Ce(e, t) {
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
function we(e, t) {
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
function Te(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? he : me(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			Te(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (Ee(e, n, t), i(e[r], a) > 0 && Ee(e, n, r); o < s;) {
			for (Ee(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? Ee(e, n, s) : (++s, Ee(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function Ee(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function De(e, t, n) {
	if (e = Float64Array.from(ie(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return we(e);
		if (t >= 1) return Ce(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Ce(Te(e, a).subarray(0, a + 1));
		return o + (we(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Oe(e, t, n = re) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function ke(e) {
	return Math.max(0, -_(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function Ae(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_(t) / 3))) * 3 - _(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function je(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, _(t) - _(e)) + 1;
}
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Me = /* @__PURE__ */ new Date(), Ne = /* @__PURE__ */ new Date();
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
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Me.setTime(+t), Ne.setTime(+r), e(Me), e(Ne), Math.floor(n(Me, Ne))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var Pe = C(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Pe.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? C((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Pe), Pe.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var w = 1e3, T = w * 60, E = T * 60, D = E * 24, Fe = D * 7, Ie = D * 30, Le = D * 365, O = C((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * w);
}, (e, t) => (t - e) / w, (e) => e.getUTCSeconds());
O.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var Re = C((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * w);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getMinutes());
Re.range;
var ze = C((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getUTCMinutes());
ze.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var Be = C((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * w - e.getMinutes() * T);
}, (e, t) => {
	e.setTime(+e + t * E);
}, (e, t) => (t - e) / E, (e) => e.getHours());
Be.range;
var Ve = C((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * E);
}, (e, t) => (t - e) / E, (e) => e.getUTCHours());
Ve.range;
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
var He = C((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / D, (e) => Math.floor(e / D));
He.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function j(e) {
	return C((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / Fe);
}
var Ue = j(0), We = j(1), Ge = j(2), Ke = j(3), qe = j(4), Je = j(5), Ye = j(6);
Ue.range, We.range, Ge.range, Ke.range, qe.range, Je.range, Ye.range;
function M(e) {
	return C((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Fe);
}
var Xe = M(0), Ze = M(1), Qe = M(2), $e = M(3), et = M(4), tt = M(5), nt = M(6);
Xe.range, Ze.range, Qe.range, $e.range, et.range, tt.range, nt.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var rt = C((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
rt.range;
var it = C((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
it.range;
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
function at(e, t, n, r, i, a) {
	let o = [
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
			a,
			1,
			T
		],
		[
			a,
			5,
			5 * T
		],
		[
			a,
			15,
			15 * T
		],
		[
			a,
			30,
			30 * T
		],
		[
			i,
			1,
			E
		],
		[
			i,
			3,
			3 * E
		],
		[
			i,
			6,
			6 * E
		],
		[
			i,
			12,
			12 * E
		],
		[
			r,
			1,
			D
		],
		[
			r,
			2,
			2 * D
		],
		[
			n,
			1,
			Fe
		],
		[
			t,
			1,
			Ie
		],
		[
			t,
			3,
			3 * Ie
		],
		[
			e,
			1,
			Le
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = te(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Se(t / Le, n / Le, r));
		if (a === 0) return Pe.every(Math.max(Se(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [ot, st] = at(P, it, Xe, He, Ve, ze), [ct, lt] = at(N, rt, Ue, k, Be, Re), F = "year", ut = "quarter", I = "month", dt = "week", ft = "date", pt = "dayofyear", mt = "hours", ht = "minutes", gt = "seconds", _t = "milliseconds";
[
	F,
	ut,
	I,
	dt,
	ft,
	"day",
	pt,
	mt,
	ht,
	gt,
	_t
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${F}${I}`, `${F}${I}${ft}`, `${mt}${ht}`;
var vt = {
	[F]: N,
	[ut]: rt.every(3),
	[I]: rt,
	[dt]: Ue,
	[ft]: k,
	day: k,
	[pt]: k,
	[mt]: Be,
	[ht]: Re,
	[gt]: O,
	[_t]: Pe
}, yt = {
	[F]: P,
	[ut]: it.every(3),
	[I]: it,
	[dt]: Xe,
	[ft]: A,
	day: A,
	[pt]: A,
	[mt]: Ve,
	[ht]: ze,
	[gt]: O,
	[_t]: Pe
};
function bt(e) {
	return vt[e];
}
function xt(e) {
	return yt[e];
}
var St = 1e3, Ct = St * 60, wt = Ct * 60, Tt = wt * 24;
Tt * 7;
var Et = Tt * 30;
Tt * 365, [
	F,
	I,
	ft,
	mt,
	ht,
	gt,
	_t
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * St, 15 * St, 30 * St, 5 * Ct, 15 * Ct, 30 * Ct, 3 * wt, 6 * wt, 12 * wt, 3 * Et;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function Dt(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ot(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function kt(e, t, n) {
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
function At(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Ft(i), u = It(i), d = Ft(a), f = It(a), p = Ft(o), m = It(o), h = Ft(s), g = It(s), _ = Ft(c), ee = It(c), v = {
		a: ue,
		A: de,
		b: fe,
		B: pe,
		c: null,
		d: rn,
		e: rn,
		f: ln,
		g: bn,
		G: Sn,
		H: an,
		I: on,
		j: sn,
		L: cn,
		m: un,
		M: dn,
		p: me,
		q: he,
		Q: Gn,
		s: Kn,
		S: fn,
		u: pn,
		U: mn,
		V: gn,
		w: _n,
		W: vn,
		x: null,
		X: null,
		y: yn,
		Y: xn,
		Z: Cn,
		"%": Wn
	}, y = {
		a: ge,
		A: _e,
		b: ve,
		B: ye,
		c: null,
		d: wn,
		e: wn,
		f: kn,
		g: Bn,
		G: Hn,
		H: Tn,
		I: En,
		j: Dn,
		L: On,
		m: An,
		M: jn,
		p: be,
		q: xe,
		Q: Gn,
		s: Kn,
		S: Mn,
		u: Nn,
		U: Pn,
		V: In,
		w: Ln,
		W: Rn,
		x: null,
		X: null,
		y: zn,
		Y: Vn,
		Z: Un,
		"%": Wn
	}, b = {
		a: ie,
		A: ae,
		b: S,
		B: oe,
		c: se,
		d: qt,
		e: qt,
		f: $t,
		g: Ut,
		G: Ht,
		H: Yt,
		I: Yt,
		j: Jt,
		L: Qt,
		m: Kt,
		M: Xt,
		p: re,
		q: Gt,
		Q: tn,
		s: nn,
		S: Zt,
		u: Rt,
		U: zt,
		V: Bt,
		w: Lt,
		W: Vt,
		x: ce,
		X: le,
		y: Ut,
		Y: Ht,
		Z: Wt,
		"%": en
	};
	v.x = x(n, v), v.X = x(r, v), v.c = x(t, v), y.x = x(n, y), y.X = x(r, y), y.c = x(t, y);
	function x(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = jt[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function te(e, t) {
		return function(n) {
			var r = kt(1900, void 0, 1), i = ne(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Ot(kt(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? Ze.ceil(a) : Ze(a), a = A.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Dt(kt(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? We.ceil(a) : We(a), a = k.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? Ot(kt(r.y, 0, 1)).getUTCDay() : Dt(kt(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Ot(r)) : Dt(r);
		};
	}
	function ne(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = b[s in jt ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
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
	function S(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = ee.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function se(e, n, r) {
		return ne(e, t, n, r);
	}
	function ce(e, t, r) {
		return ne(e, n, t, r);
	}
	function le(e, t, n) {
		return ne(e, r, t, n);
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
			var t = x(e += "", v);
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
			var t = x(e += "", y);
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
var jt = {
	"-": "",
	_: " ",
	0: "0"
}, L = /^\s*\d+/, Mt = /^%/, Nt = /[\\^$*+?|[\]().{}]/g;
function R(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Pt(e) {
	return e.replace(Nt, "\\$&");
}
function Ft(e) {
	return RegExp("^(?:" + e.map(Pt).join("|") + ")", "i");
}
function It(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Lt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Rt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function zt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Bt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Vt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Ht(e, t, n) {
	var r = L.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Ut(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Wt(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Gt(e, t, n) {
	var r = L.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Kt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function qt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Jt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Yt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Xt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Zt(e, t, n) {
	var r = L.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Qt(e, t, n) {
	var r = L.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function $t(e, t, n) {
	var r = L.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function en(e, t, n) {
	var r = Mt.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function tn(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function nn(e, t, n) {
	var r = L.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function rn(e, t) {
	return R(e.getDate(), t, 2);
}
function an(e, t) {
	return R(e.getHours(), t, 2);
}
function on(e, t) {
	return R(e.getHours() % 12 || 12, t, 2);
}
function sn(e, t) {
	return R(1 + k.count(N(e), e), t, 3);
}
function cn(e, t) {
	return R(e.getMilliseconds(), t, 3);
}
function ln(e, t) {
	return cn(e, t) + "000";
}
function un(e, t) {
	return R(e.getMonth() + 1, t, 2);
}
function dn(e, t) {
	return R(e.getMinutes(), t, 2);
}
function fn(e, t) {
	return R(e.getSeconds(), t, 2);
}
function pn(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function mn(e, t) {
	return R(Ue.count(N(e) - 1, e), t, 2);
}
function hn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? qe(e) : qe.ceil(e);
}
function gn(e, t) {
	return e = hn(e), R(qe.count(N(e), e) + (N(e).getDay() === 4), t, 2);
}
function _n(e) {
	return e.getDay();
}
function vn(e, t) {
	return R(We.count(N(e) - 1, e), t, 2);
}
function yn(e, t) {
	return R(e.getFullYear() % 100, t, 2);
}
function bn(e, t) {
	return e = hn(e), R(e.getFullYear() % 100, t, 2);
}
function xn(e, t) {
	return R(e.getFullYear() % 1e4, t, 4);
}
function Sn(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? qe(e) : qe.ceil(e), R(e.getFullYear() % 1e4, t, 4);
}
function Cn(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + R(t / 60 | 0, "0", 2) + R(t % 60, "0", 2);
}
function wn(e, t) {
	return R(e.getUTCDate(), t, 2);
}
function Tn(e, t) {
	return R(e.getUTCHours(), t, 2);
}
function En(e, t) {
	return R(e.getUTCHours() % 12 || 12, t, 2);
}
function Dn(e, t) {
	return R(1 + A.count(P(e), e), t, 3);
}
function On(e, t) {
	return R(e.getUTCMilliseconds(), t, 3);
}
function kn(e, t) {
	return On(e, t) + "000";
}
function An(e, t) {
	return R(e.getUTCMonth() + 1, t, 2);
}
function jn(e, t) {
	return R(e.getUTCMinutes(), t, 2);
}
function Mn(e, t) {
	return R(e.getUTCSeconds(), t, 2);
}
function Nn(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function Pn(e, t) {
	return R(Xe.count(P(e) - 1, e), t, 2);
}
function Fn(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? et(e) : et.ceil(e);
}
function In(e, t) {
	return e = Fn(e), R(et.count(P(e), e) + (P(e).getUTCDay() === 4), t, 2);
}
function Ln(e) {
	return e.getUTCDay();
}
function Rn(e, t) {
	return R(Ze.count(P(e) - 1, e), t, 2);
}
function zn(e, t) {
	return R(e.getUTCFullYear() % 100, t, 2);
}
function Bn(e, t) {
	return e = Fn(e), R(e.getUTCFullYear() % 100, t, 2);
}
function Vn(e, t) {
	return R(e.getUTCFullYear() % 1e4, t, 4);
}
function Hn(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? et(e) : et.ceil(e), R(e.getUTCFullYear() % 1e4, t, 4);
}
function Un() {
	return "+0000";
}
function Wn() {
	return "%";
}
function Gn(e) {
	return +e;
}
function Kn(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var qn, Jn, Yn, Xn, Zn;
Qn({
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
function Qn(e) {
	return qn = At(e), Jn = qn.format, Yn = qn.parse, Xn = qn.utcFormat, Zn = qn.utcParse, qn;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function z(e, t) {
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
function B(e, t) {
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
var $n = Symbol("implicit");
function er() {
	var e = new se(), t = [], n = [], r = $n;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== $n) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new se();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return er(t, n).unknown(r);
	}, z.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var tr = Math.PI / 180, nr = 180 / Math.PI, rr = 18, ir = .96422, ar = 1, or = .82521, sr = 4 / 29, cr = 6 / 29, lr = 3 * cr * cr, ur = cr * cr * cr;
function dr(e) {
	if (e instanceof V) return new V(e.l, e.a, e.b, e.opacity);
	if (e instanceof H) return yr(e);
	e instanceof d || (e = u(e));
	var t = gr(e.r), n = gr(e.g), r = gr(e.b), i = pr((.2225045 * t + .7168786 * n + .0606169 * r) / ar), a, o;
	return t === n && n === r ? a = o = i : (a = pr((.4360747 * t + .3850649 * n + .1430804 * r) / ir), o = pr((.0139322 * t + .0971045 * n + .7141733 * r) / or)), new V(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function fr(e, t, n, r) {
	return arguments.length === 1 ? dr(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
l(V, fr, t(r, {
	brighter(e) {
		return new V(this.l + rr * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new V(this.l - rr * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = ir * mr(t), e = ar * mr(e), n = or * mr(n), new d(hr(3.1338561 * t - 1.6168667 * e - .4906146 * n), hr(-.9787684 * t + 1.9161415 * e + .033454 * n), hr(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function pr(e) {
	return e > ur ? e ** (1 / 3) : e / lr + sr;
}
function mr(e) {
	return e > cr ? e * e * e : lr * (e - sr);
}
function hr(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function gr(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function _r(e) {
	if (e instanceof H) return new H(e.h, e.c, e.l, e.opacity);
	if (e instanceof V || (e = dr(e)), e.a === 0 && e.b === 0) return new H(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * nr;
	return new H(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function vr(e, t, n, r) {
	return arguments.length === 1 ? _r(e) : new H(e, t, n, r ?? 1);
}
function H(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function yr(e) {
	if (isNaN(e.h)) return new V(e.l, 0, 0, e.opacity);
	var t = e.h * tr;
	return new V(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
l(H, vr, t(r, {
	brighter(e) {
		return new H(this.h, this.c, this.l + rr * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new H(this.h, this.c, this.l - rr * (e ?? 1), this.opacity);
	},
	rgb() {
		return yr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var br = -.14861, xr = 1.78277, Sr = -.29227, Cr = -.90649, wr = 1.97294, Tr = wr * Cr, Er = wr * xr, Dr = xr * Sr - Cr * br;
function Or(e) {
	if (e instanceof U) return new U(e.h, e.s, e.l, e.opacity);
	e instanceof d || (e = u(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Dr * r + Tr * t - Er * n) / (Dr + Tr - Er), a = r - i, o = (wr * (n - i) - Sr * a) / Cr, s = Math.sqrt(o * o + a * a) / (wr * i * (1 - i)), c = s ? Math.atan2(o, a) * nr - 120 : NaN;
	return new U(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function kr(e, t, n, r) {
	return arguments.length === 1 ? Or(e) : new U(e, t, n, r ?? 1);
}
function U(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
l(U, kr, t(r, {
	brighter(e) {
		return e = e == null ? g : g ** +e, new U(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? s : s ** +e, new U(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * tr, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new d(255 * (t + n * (br * r + xr * i)), 255 * (t + n * (Sr * r + Cr * i)), 255 * (t + wr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function Ar(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function jr(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Ar((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Mr(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return Ar((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Nr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Pr(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Fr(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Ir(e, t) {
	var n = t - e;
	return n ? Pr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Nr(isNaN(e) ? t : e);
}
function Lr(e) {
	return (e = +e) == 1 ? W : function(t, n) {
		return n - t ? Fr(t, n, e) : Nr(isNaN(t) ? n : t);
	};
}
function W(e, t) {
	var n = t - e;
	return n ? Pr(e, n) : Nr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Rr = (function e(t) {
	var n = Lr(t);
	function r(e, t) {
		var r = n((e = p(e)).r, (t = p(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = W(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function zr(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = p(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Br = zr(jr), Vr = zr(Mr);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function Hr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Ur(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Wr(e, t) {
	return (Ur(t) ? Hr : Gr)(e, t);
}
function Gr(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = K(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function Kr(e, t) {
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
function qr(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = K(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var Jr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yr = new RegExp(Jr.source, "g");
function Xr(e) {
	return function() {
		return e;
	};
}
function Zr(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Qr(e, t) {
	var n = Jr.lastIndex = Yr.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Jr.exec(e)) && (i = Yr.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: G(r, i)
	})), n = Yr.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Zr(c[0].x) : Xr(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function K(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Nr(t) : (n === "number" ? G : n === "string" ? (r = a(t)) ? (t = r, Rr) : Qr : t instanceof a ? Rr : t instanceof Date ? Kr : Ur(t) ? Hr : Array.isArray(t) ? Gr : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qr : G)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function $r(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function ei(e, t) {
	var n = Ir(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function ti(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var ni = 180 / Math.PI, ri = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function ii(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * ni,
		skewX: Math.atan(c) * ni,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var ai;
function oi(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? ri : ii(t.a, t.b, t.c, t.d, t.e, t.f);
}
function si(e) {
	return e == null || (ai ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), ai.setAttribute("transform", e), !(e = ai.transform.baseVal.consolidate())) ? ri : (e = e.matrix, ii(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function ci(e, t, n, r) {
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
var li = ci(oi, "px, ", "px)", "deg)"), ui = ci(si, ", ", ")", ")"), di = 1e-12;
function fi(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function pi(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function mi(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var hi = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < di) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), ee = (u * u - s * s - r * p) / (2 * u * n * g), v = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(ee * ee + 1) - ee) - v) / t, m = function(e) {
				var r = e * h, i = fi(v), c = s / (n * g) * (i * mi(t * r + v) - pi(v));
				return [
					a + c * d,
					o + c * f,
					s * i / fi(t * r + v)
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
function gi(e) {
	return function(t, n) {
		var r = e((t = m(t)).h, (n = m(n)).h), i = W(t.s, n.s), a = W(t.l, n.l), o = W(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var _i = gi(Ir), vi = gi(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function yi(e, t) {
	var n = W((e = fr(e)).l, (t = fr(t)).l), r = W(e.a, t.a), i = W(e.b, t.b), a = W(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function bi(e) {
	return function(t, n) {
		var r = e((t = vr(t)).h, (n = vr(n)).h), i = W(t.c, n.c), a = W(t.l, n.l), o = W(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var xi = bi(Ir), Si = bi(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function Ci(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = kr(t)).h, (r = kr(r)).h), a = W(t.s, r.s), o = W(t.l, r.l), s = W(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var wi = Ci(Ir), Ti = Ci(W);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function Ei(e, t) {
	t === void 0 && (t = e, e = K);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Di(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Oi = /* @__PURE__ */ e({
	interpolate: () => K,
	interpolateArray: () => Wr,
	interpolateBasis: () => jr,
	interpolateBasisClosed: () => Mr,
	interpolateCubehelix: () => wi,
	interpolateCubehelixLong: () => Ti,
	interpolateDate: () => Kr,
	interpolateDiscrete: () => $r,
	interpolateHcl: () => xi,
	interpolateHclLong: () => Si,
	interpolateHsl: () => _i,
	interpolateHslLong: () => vi,
	interpolateHue: () => ei,
	interpolateLab: () => yi,
	interpolateNumber: () => G,
	interpolateNumberArray: () => Hr,
	interpolateObject: () => qr,
	interpolateRgb: () => Rr,
	interpolateRgbBasis: () => Br,
	interpolateRgbBasisClosed: () => Vr,
	interpolateRound: () => ti,
	interpolateString: () => Qr,
	interpolateTransformCss: () => li,
	interpolateTransformSvg: () => ui,
	interpolateZoom: () => hi,
	piecewise: () => Ei,
	quantize: () => Di
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function ki(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function Ai(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var ji = [0, 1];
function q(e) {
	return e;
}
function Mi(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : ki(isNaN(t) ? NaN : .5);
}
function Ni(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Pi(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Mi(i, r), a = n(o, a)) : (r = Mi(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Fi(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Mi(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = S(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Ii(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Li() {
	var e = ji, t = ji, n = K, r, i, a, o = q, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== q && (o = Ni(e[0], e[n - 1])), s = n > 2 ? Fi : Pi, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), G))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Ai), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = ti, u();
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
function Ri() {
	return Li()(q, q);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function zi(e, t, n, r) {
	var a = Se(e, t, n), o;
	switch (r = f(r ?? ",f"), r.type) {
		case "s":
			var s = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(o = Ae(a, s)) && (r.precision = o), i(r, s);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(o = je(a, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = o - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(o = ke(a)) && (r.precision = o - (r.type === "%") * 2);
			break;
	}
	return h(r);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function J(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return be(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return zi(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = xe(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Bi() {
	var e = Ri();
	return e.copy = function() {
		return Ii(e, Bi());
	}, z.apply(e, arguments), J(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Vi(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Ai), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Vi(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Ai) : [0, 1], J(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function Hi(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Ui(e) {
	return Math.log(e);
}
function Wi(e) {
	return Math.exp(e);
}
function Gi(e) {
	return -Math.log(-e);
}
function Ki(e) {
	return -Math.exp(-e);
}
function qi(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Ji(e) {
	return e === 10 ? qi : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Yi(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Xi(e) {
	return (t, n) => -e(-t, n);
}
function Zi(e) {
	let t = e(Ui, Wi), n = t.domain, r = 10, i, a;
	function o() {
		return i = Yi(r), a = Ji(r), n()[0] < 0 ? (i = Xi(i), a = Xi(a), e(Gi, Ki)) : e(Ui, Wi), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = be(o, s, p));
		} else m = be(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = f(n)).precision == null && (n.trim = !0), n = h(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Hi(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Qi() {
	let e = Zi(Li()).domain([1, 10]);
	return e.copy = () => Ii(e, Qi()).base(e.base()), z.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function $i(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function ea(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function ta(e) {
	var t = 1, n = e($i(t), ea(t));
	return n.constant = function(n) {
		return arguments.length ? e($i(t = +n), ea(t)) : t;
	}, J(n);
}
function na() {
	var e = ta(Li());
	return e.copy = function() {
		return Ii(e, na()).constant(e.constant());
	}, z.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function ra(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function ia(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function aa(e) {
	return e < 0 ? -e * e : e * e;
}
function oa(e) {
	var t = e(q, q), n = 1;
	function r() {
		return n === 1 ? e(q, q) : n === .5 ? e(ia, aa) : e(ra(n), ra(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, J(t);
}
function sa() {
	var e = oa(Li());
	return e.copy = function() {
		return Ii(e, sa()).exponent(e.exponent());
	}, z.apply(e, arguments), e;
}
function ca() {
	return sa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function la() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Oe(e, r / i);
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
		return la().domain(e).range(t).unknown(r);
	}, z.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function ua() {
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
		return ua().domain([e, t]).range(i).unknown(a);
	}, z.apply(J(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function da() {
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
		return da().domain(e).range(t).unknown(n);
	}, z.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function fa(e) {
	return new Date(e);
}
function pa(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ma(e, t, n, r, i, a, o, s, c, l) {
	var u = Ri(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), ee = l("%b %d"), v = l("%B"), y = l("%Y");
	function b(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : ee : n(e) < e ? v : y)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, pa)) : f().map(fa);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? b : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Hi(n, e)) : u;
	}, u.copy = function() {
		return Ii(u, ma(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function ha() {
	return z.apply(ma(ct, lt, N, rt, Ue, k, Be, Re, O, Jn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function ga() {
	return z.apply(ma(ot, st, P, it, Xe, A, Ve, ze, O, Xn).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function _a() {
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
	return l.range = u(K), l.rangeRound = u(ti), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Y(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function va() {
	var e = J(_a()(q));
	return e.copy = function() {
		return Y(e, va());
	}, B.apply(e, arguments);
}
function ya() {
	var e = Zi(_a()).domain([1, 10]);
	return e.copy = function() {
		return Y(e, ya()).base(e.base());
	}, B.apply(e, arguments);
}
function ba() {
	var e = ta(_a());
	return e.copy = function() {
		return Y(e, ba()).constant(e.constant());
	}, B.apply(e, arguments);
}
function xa() {
	var e = oa(_a());
	return e.copy = function() {
		return Y(e, xa()).exponent(e.exponent());
	}, B.apply(e, arguments);
}
function Sa() {
	return xa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Ca() {
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
			return arguments.length ? ([n, r, i] = t, l = Ei(e, [
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
	return p.range = m(K), p.rangeRound = m(ti), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function wa() {
	var e = J(Ca()(q));
	return e.copy = function() {
		return Y(e, wa());
	}, B.apply(e, arguments);
}
function Ta() {
	var e = Zi(Ca()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Y(e, Ta()).base(e.base());
	}, B.apply(e, arguments);
}
function Ea() {
	var e = ta(Ca());
	return e.copy = function() {
		return Y(e, Ea()).constant(e.constant());
	}, B.apply(e, arguments);
}
function Da() {
	var e = oa(Ca());
	return e.copy = function() {
		return Y(e, Da()).exponent(e.exponent());
	}, B.apply(e, arguments);
}
function Oa() {
	return Da.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function X(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var ka = X("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Aa = X("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), ja = X("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Ma = X("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Na = X("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Pa = X("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Fa = X("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Ia = X("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), La = X("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Ra = X("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function za(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Ba = "identity", Va = "linear", Ha = "sqrt", Ua = "symlog", Wa = "time", Ga = "sequential", Ka = "diverging", qa = "quantile", Ja = "quantize", Ya = "threshold", Xa = "ordinal", Za = "point", Qa = "band", $a = "bin-ordinal", Z = "continuous", eo = "discrete", to = "discretizing", Q = "interpolating", no = "temporal";
function ro(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function io(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function ao() {
	let e = er().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		let e = t().length, d = r[1] < r[0], f = r[1 - d], p = za(e, c, l), m = r[d - 0];
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
		if (!(c !== c || l !== l) && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, S(o, c) - 1), d = c === l ? u : S(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return ao().domain(t()).range(r).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, d();
}
function oo(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return oo(t());
	}, e;
}
function so() {
	return oo(ao().paddingInner(1));
}
var co = Array.prototype.map;
function lo(e) {
	return co.call(e, y);
}
var uo = Array.prototype.slice;
function fo() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(S(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = lo(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = uo.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return zi(e[0], v(e), t ?? 10, n);
	}, n.copy = function() {
		return fo().domain(n.domain()).range(n.range());
	}, n;
}
var po = /* @__PURE__ */ new Map(), mo = Symbol("vega_scale");
function ho(e) {
	return e[mo] = !0, e;
}
function go(e, t, r) {
	let i = function() {
		let n = t();
		return n.invertRange ||= n.invert ? ro(n) : n.invertExtent ? io(n) : void 0, n.type = e, ho(n);
	};
	return i.metadata = c(n(r)), i;
}
function $(e, t, n) {
	return arguments.length > 1 ? (po.set(e, go(e, t, n)), this) : _o(e) ? po.get(e) : void 0;
}
$(Ba, Vi), $(Va, Bi, Z), $("log", Qi, [Z, "log"]), $("pow", sa, Z), $(Ha, ca, Z), $(Ua, na, Z), $(Wa, ha, [Z, no]), $("utc", ga, [Z, no]), $(Ga, va, [Z, Q]), $(`${Ga}-${Va}`, va, [Z, Q]), $(`${Ga}-log`, ya, [
	Z,
	Q,
	"log"
]), $(`${Ga}-pow`, xa, [Z, Q]), $(`${Ga}-${Ha}`, Sa, [Z, Q]), $(`${Ga}-${Ua}`, ba, [Z, Q]), $(`${Ka}-${Va}`, wa, [Z, Q]), $(`${Ka}-log`, Ta, [
	Z,
	Q,
	"log"
]), $(`${Ka}-pow`, Da, [Z, Q]), $(`${Ka}-${Ha}`, Oa, [Z, Q]), $(`${Ka}-${Ua}`, Ea, [Z, Q]), $(qa, la, [to, qa]), $(Ja, ua, to), $(Ya, da, to), $($a, fo, [eo, to]), $(Xa, er, eo), $(Qa, ao, eo), $(Za, so, eo);
function _o(e) {
	return po.has(e);
}
function vo(e, t) {
	let n = po.get(e);
	return n && n.metadata[t];
}
function yo(e) {
	return vo(e, Z);
}
function bo(e) {
	return vo(e, eo);
}
function xo(e) {
	return vo(e, to);
}
function So(e) {
	return vo(e, "log");
}
function Co(e) {
	return vo(e, Q);
}
function wo(e, t) {
	let n = t[0], r = v(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function To(e, t, n) {
	return Ei(Do(t || "rgb", n), e);
}
function Eo(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function Do(e, t) {
	let n = Oi[Oo(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function Oo(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var ko = {
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
}, Ao = {
	accent: Aa,
	category10: ka,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: ja,
	observable10: Ma,
	paired: Na,
	pastel1: Pa,
	pastel2: Fa,
	set1: Ia,
	set2: La,
	set3: Ra,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function jo(e) {
	if (ee(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function Mo(e, t) {
	for (let n in e) Po(n, t(e[n]));
}
var No = {};
Mo(Ao, jo), Mo(ko, (e) => To(jo(e)));
function Po(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (No[e] = t, this) : No[e];
}
//#endregion
export { Ce as $, $n as A, I as B, Eo as C, Bi as D, Qi as E, At as F, bt as G, gt as H, ft as I, Ae as J, xt as K, mt as L, Yn as M, Xn as N, ti as O, Zn as P, we as Q, _t as R, So as S, Po as T, dt as U, ut as V, F as W, De as X, ke as Y, Oe as Z, wo as _, Xa as a, oe as at, xo as b, Ja as c, y as ct, Ua as d, xe as et, Ya as f, To as g, Do as h, Va as i, se as it, Jn as j, K as k, Ga as l, za as m, $a as n, be as nt, Za as o, S as ot, Wa as p, je as q, Ka as r, pe as rt, qa as s, te as st, Qa as t, Se as tt, Ha as u, yo as v, $ as w, Co as x, bo as y, ht as z };
