import { n as e } from "./rolldown-runtime-DF993M8W.js";
//#region ../../node_modules/vega-util/build/accessor.js
function t(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-util/build/getter.js
function n(e) {
	return e.length === 1 ? r(e[0]) : i(e);
}
var r = (e) => function(t) {
	return t[e];
}, i = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-util/build/error.js
function a(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/splitAccessPath.js
function o(e) {
	let t = [], n = e.length, r = null, i = 0, o = "", s, c, l;
	e += "";
	function u() {
		t.push(o + e.substring(s, c)), o = "", s = c + 1;
	}
	for (s = c = 0; c < n; ++c) if (l = e[c], l === "\\") o += e.substring(s, c++), s = c;
	else if (l === r) u(), r = null, i = -1;
	else if (r) continue;
	else s === i && l === "\"" || s === i && l === "'" ? (s = c + 1, r = l) : l === "." && !i ? c > s ? u() : s = c + 1 : l === "[" ? (c > s && u(), i = s = c + 1) : l === "]" && (i || a("Access path missing open bracket: " + e), i > 0 && u(), i = 0, s = c + 1);
	return i && a("Access path missing closing bracket: " + e), r && a("Access path missing closing quote: " + e), c > s && (c++, u()), t;
}
//#endregion
//#region ../../node_modules/vega-util/build/field.js
function s(e, r, i) {
	let a = o(e), s = a.length === 1 ? a[0] : e;
	return t((i && i.get || n)(a), [s], r || s);
}
s("id");
var c = t((e) => e, [], "identity");
t(() => 0, [], "zero"), t(() => 1, [], "one"), t(() => !0, [], "true"), t(() => !1, [], "false");
//#endregion
//#region ../../node_modules/vega-util/build/interpreter.js
var l = /* @__PURE__ */ new Set([...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"), "__proto__"]), u = Array.isArray;
//#endregion
//#region ../../node_modules/vega-util/build/isObject.js
function d(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/peek.js
function f(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-util/build/toNumber.js
function p(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-util/build/array.js
function m(e) {
	return e == null ? [] : u(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-util/build/isFunction.js
function h(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-util/build/hasOwnProperty.js
function g(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-util/build/isString.js
function _(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-util/build/stringValue.js
function v(e) {
	return u(e) ? `[${e.map((e) => e === null ? "null" : v(e))}]` : d(e) || _(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
//#endregion
//#region ../../node_modules/vega-util/build/toSet.js
function y(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function b(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function ee(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function x(e) {
	let t, n, r;
	e.length === 2 ? (t = e === b || e === ee ? e : te, n = e, r = e) : (t = b, n = (t, n) => b(e(t), n), r = (t, n) => e(t) - n);
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
function te() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function S(e) {
	return e === null ? NaN : +e;
}
function* ne(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var C = x(b), re = C.right, ie = C.left;
x(S).center;
//#endregion
//#region ../../node_modules/internmap/src/index.js
var ae = class extends Map {
	constructor(e, t = le) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(oe(this, e));
	}
	has(e) {
		return super.has(oe(this, e));
	}
	set(e, t) {
		return super.set(se(this, e), t);
	}
	delete(e) {
		return super.delete(ce(this, e));
	}
};
function oe({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function se({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function ce({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function le(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function ue(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function de(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = pe(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => pe(n[e], n[t]))), ue(e, r);
	}
	return e.sort(fe(n));
}
function fe(e = b) {
	if (e === b) return pe;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function pe(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var me = Math.sqrt(50), he = Math.sqrt(10), ge = Math.sqrt(2);
function _e(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= me ? 10 : a >= he ? 5 : a >= ge ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? _e(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function ve(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? _e(t, e, n) : _e(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function ye(e, t, n) {
	return t = +t, e = +e, n = +n, _e(e, t, n)[2];
}
function be(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? ye(t, e, n) : ye(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function xe(e, t) {
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
function Se(e, t) {
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
function Ce(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? pe : fe(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			Ce(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (we(e, n, t), i(e[r], a) > 0 && we(e, n, r); o < s;) {
			for (we(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? we(e, n, s) : (++s, we(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function we(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function Te(e, t, n) {
	if (e = Float64Array.from(ne(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return Se(e);
		if (t >= 1) return xe(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = xe(Ce(e, a).subarray(0, a + 1));
		return o + (Se(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Ee(e, t, n = S) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/range.js
function De(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatDecimal.js
function Oe(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ke(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../../node_modules/d3-format/src/exponent.js
function Ae(e) {
	return e = ke(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatGroup.js
function je(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatNumerals.js
function Me(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatSpecifier.js
var Ne = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pe(e) {
	if (!(t = Ne.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Fe({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
Pe.prototype = Fe.prototype;
function Fe(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Fe.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../../node_modules/d3-format/src/formatTrim.js
function Ie(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
			break;
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatPrefixAuto.js
var Le;
function Re(e, t) {
	var n = ke(e, t);
	if (!n) return Le = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Le = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + ke(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../../node_modules/d3-format/src/formatRounded.js
function ze(e, t) {
	var n = ke(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../../node_modules/d3-format/src/formatTypes.js
var Be = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: Oe,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ze(e * 100, t),
	r: ze,
	s: Re,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../../node_modules/d3-format/src/identity.js
function Ve(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-format/src/locale.js
var He = Array.prototype.map, Ue = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function We(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Ve : je(He.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ve : Me(He.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = Pe(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Be[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), ee = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), x = Be[y], te = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function S(e) {
			var n = b, r = ee, o, l, p;
			if (y === "c") r = x(e) + r, e = "";
			else {
				e = +e;
				var S = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : x(Math.abs(e), _), v && (e = Ie(e)), S && +e == 0 && f !== "+" && (S = !1), n = (S ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Le !== void 0 ? Ue[8 + Le / 3] : "") + r + (S && f === "(" ? ")" : ""), te) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var ne = n.length + e.length + r.length, C = ne < h ? Array(h - ne + 1).join(u) : "";
			switch (g && m && (e = t(C + e, C.length ? h - r.length : Infinity), C = ""), d) {
				case "<":
					e = n + e + r + C;
					break;
				case "=":
					e = n + C + e + r;
					break;
				case "^":
					e = C.slice(0, ne = C.length >> 1) + n + e + r + C.slice(ne);
					break;
				default:
					e = C + n + e + r;
					break;
			}
			return a(e);
		}
		return S.toString = function() {
			return e + "";
		}, S;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(Ae(t) / 3))) * 3, r = 10 ** -n, i = l((e = Pe(e), e.type = "f", e), { suffix: Ue[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/defaultLocale.js
var Ge, Ke, qe;
Je({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Je(e) {
	return Ge = We(e), Ke = Ge.format, qe = Ge.formatPrefix, Ge;
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function Ye(e) {
	return Math.max(0, -Ae(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function Xe(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ae(t) / 3))) * 3 - Ae(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function Ze(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ae(t) - Ae(e)) + 1;
}
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var Qe = /* @__PURE__ */ new Date(), $e = /* @__PURE__ */ new Date();
function w(e, t, n, r) {
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
	}, i.filter = (n) => w((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Qe.setTime(+t), $e.setTime(+r), e(Qe), e($e), Math.floor(n(Qe, $e))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var et = w(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
et.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? w((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : et), et.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var tt = 1e3, T = tt * 60, nt = T * 60, rt = nt * 24, it = rt * 7, at = rt * 30, ot = rt * 365, st = w((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * tt);
}, (e, t) => (t - e) / tt, (e) => e.getUTCSeconds());
st.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var ct = w((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * tt);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getMinutes());
ct.range;
var lt = w((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * T);
}, (e, t) => (t - e) / T, (e) => e.getUTCMinutes());
lt.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var ut = w((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * tt - e.getMinutes() * T);
}, (e, t) => {
	e.setTime(+e + t * nt);
}, (e, t) => (t - e) / nt, (e) => e.getHours());
ut.range;
var dt = w((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * nt);
}, (e, t) => (t - e) / nt, (e) => e.getUTCHours());
dt.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var ft = w((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / rt, (e) => e.getDate() - 1);
ft.range;
var pt = w((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rt, (e) => e.getUTCDate() - 1);
pt.range;
var mt = w((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / rt, (e) => Math.floor(e / rt));
mt.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function ht(e) {
	return w((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * T) / it);
}
var gt = ht(0), _t = ht(1), vt = ht(2), yt = ht(3), bt = ht(4), xt = ht(5), St = ht(6);
gt.range, _t.range, vt.range, yt.range, bt.range, xt.range, St.range;
function Ct(e) {
	return w((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / it);
}
var wt = Ct(0), Tt = Ct(1), Et = Ct(2), Dt = Ct(3), Ot = Ct(4), kt = Ct(5), At = Ct(6);
wt.range, Tt.range, Et.range, Dt.range, Ot.range, kt.range, At.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var jt = w((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
jt.range;
var Mt = w((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Mt.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var Nt = w((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Nt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : w((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), Nt.range;
var Pt = w((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Pt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : w((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), Pt.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function Ft(e, t, n, r, i, a) {
	let o = [
		[
			st,
			1,
			tt
		],
		[
			st,
			5,
			5 * tt
		],
		[
			st,
			15,
			15 * tt
		],
		[
			st,
			30,
			30 * tt
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
			nt
		],
		[
			i,
			3,
			3 * nt
		],
		[
			i,
			6,
			6 * nt
		],
		[
			i,
			12,
			12 * nt
		],
		[
			r,
			1,
			rt
		],
		[
			r,
			2,
			2 * rt
		],
		[
			n,
			1,
			it
		],
		[
			t,
			1,
			at
		],
		[
			t,
			3,
			3 * at
		],
		[
			e,
			1,
			ot
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = x(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(be(t / ot, n / ot, r));
		if (a === 0) return et.every(Math.max(be(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [It, Lt] = Ft(Pt, Mt, wt, mt, dt, lt), [Rt, zt] = Ft(Nt, jt, gt, ft, ut, ct), Bt = "year", Vt = "quarter", Ht = "month", Ut = "week", Wt = "date", Gt = "dayofyear", Kt = "hours", qt = "minutes", Jt = "seconds", Yt = "milliseconds";
[
	Bt,
	Vt,
	Ht,
	Ut,
	Wt,
	"day",
	Gt,
	Kt,
	qt,
	Jt,
	Yt
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${Bt}${Ht}`, `${Bt}${Ht}${Wt}`, `${Kt}${qt}`;
var Xt = {
	[Bt]: Nt,
	[Vt]: jt.every(3),
	[Ht]: jt,
	[Ut]: gt,
	[Wt]: ft,
	day: ft,
	[Gt]: ft,
	[Kt]: ut,
	[qt]: ct,
	[Jt]: st,
	[Yt]: et
}, Zt = {
	[Bt]: Pt,
	[Vt]: Mt.every(3),
	[Ht]: Mt,
	[Ut]: wt,
	[Wt]: pt,
	day: pt,
	[Gt]: pt,
	[Kt]: dt,
	[qt]: lt,
	[Jt]: st,
	[Yt]: et
};
function Qt(e) {
	return Xt[e];
}
function $t(e) {
	return Zt[e];
}
var en = 1e3, tn = en * 60, nn = tn * 60, rn = nn * 24;
rn * 7;
var an = rn * 30;
rn * 365, [
	Bt,
	Ht,
	Wt,
	Kt,
	qt,
	Jt,
	Yt
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * en, 15 * en, 30 * en, 5 * tn, 15 * tn, 30 * tn, 3 * nn, 6 * nn, 12 * nn, 3 * an;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function on(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function sn(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function cn(e, t, n) {
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
function ln(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = mn(i), u = hn(i), d = mn(a), f = hn(a), p = mn(o), m = hn(o), h = mn(s), g = hn(s), _ = mn(c), v = hn(c), y = {
		a: le,
		A: ue,
		b: de,
		B: fe,
		c: null,
		d: In,
		e: In,
		f: Vn,
		g: Qn,
		G: er,
		H: Ln,
		I: Rn,
		j: zn,
		L: Bn,
		m: Hn,
		M: Un,
		p: pe,
		q: me,
		Q: Cr,
		s: wr,
		S: Wn,
		u: Gn,
		U: Kn,
		V: Jn,
		w: Yn,
		W: Xn,
		x: null,
		X: null,
		y: Zn,
		Y: $n,
		Z: tr,
		"%": Sr
	}, b = {
		a: he,
		A: ge,
		b: _e,
		B: ve,
		c: null,
		d: nr,
		e: nr,
		f: sr,
		g: vr,
		G: br,
		H: rr,
		I: ir,
		j: ar,
		L: or,
		m: cr,
		M: lr,
		p: ye,
		q: be,
		Q: Cr,
		s: wr,
		S: ur,
		u: dr,
		U: fr,
		V: mr,
		w: hr,
		W: gr,
		x: null,
		X: null,
		y: _r,
		Y: yr,
		Z: xr,
		"%": Sr
	}, ee = {
		a: C,
		A: re,
		b: ie,
		B: ae,
		c: oe,
		d: En,
		e: En,
		f: Mn,
		g: Sn,
		G: xn,
		H: On,
		I: On,
		j: Dn,
		L: jn,
		m: Tn,
		M: kn,
		p: ne,
		q: wn,
		Q: Pn,
		s: Fn,
		S: An,
		u: _n,
		U: vn,
		V: yn,
		w: gn,
		W: bn,
		x: se,
		X: ce,
		y: Sn,
		Y: xn,
		Z: Cn,
		"%": Nn
	};
	y.x = x(n, y), y.X = x(r, y), y.c = x(t, y), b.x = x(n, b), b.X = x(r, b), b.c = x(t, b);
	function x(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = un[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function te(e, t) {
		return function(n) {
			var r = cn(1900, void 0, 1), i = S(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = sn(cn(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? Tt.ceil(a) : Tt(a), a = pt.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = on(cn(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? _t.ceil(a) : _t(a), a = ft.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? sn(cn(r.y, 0, 1)).getUTCDay() : on(cn(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, sn(r)) : on(r);
		};
	}
	function S(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ee[s in un ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ne(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function C(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function re(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ie(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ae(e, t, n) {
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
	function be(e) {
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
var un = {
	"-": "",
	_: " ",
	0: "0"
}, E = /^\s*\d+/, dn = /^%/, fn = /[\\^$*+?|[\]().{}]/g;
function D(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function pn(e) {
	return e.replace(fn, "\\$&");
}
function mn(e) {
	return RegExp("^(?:" + e.map(pn).join("|") + ")", "i");
}
function hn(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function gn(e, t, n) {
	var r = E.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function _n(e, t, n) {
	var r = E.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function vn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function yn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function bn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function xn(e, t, n) {
	var r = E.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Sn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Cn(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function wn(e, t, n) {
	var r = E.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Tn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function En(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Dn(e, t, n) {
	var r = E.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function On(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function kn(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function An(e, t, n) {
	var r = E.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function jn(e, t, n) {
	var r = E.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Mn(e, t, n) {
	var r = E.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Nn(e, t, n) {
	var r = dn.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Pn(e, t, n) {
	var r = E.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Fn(e, t, n) {
	var r = E.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function In(e, t) {
	return D(e.getDate(), t, 2);
}
function Ln(e, t) {
	return D(e.getHours(), t, 2);
}
function Rn(e, t) {
	return D(e.getHours() % 12 || 12, t, 2);
}
function zn(e, t) {
	return D(1 + ft.count(Nt(e), e), t, 3);
}
function Bn(e, t) {
	return D(e.getMilliseconds(), t, 3);
}
function Vn(e, t) {
	return Bn(e, t) + "000";
}
function Hn(e, t) {
	return D(e.getMonth() + 1, t, 2);
}
function Un(e, t) {
	return D(e.getMinutes(), t, 2);
}
function Wn(e, t) {
	return D(e.getSeconds(), t, 2);
}
function Gn(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function Kn(e, t) {
	return D(gt.count(Nt(e) - 1, e), t, 2);
}
function qn(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? bt(e) : bt.ceil(e);
}
function Jn(e, t) {
	return e = qn(e), D(bt.count(Nt(e), e) + (Nt(e).getDay() === 4), t, 2);
}
function Yn(e) {
	return e.getDay();
}
function Xn(e, t) {
	return D(_t.count(Nt(e) - 1, e), t, 2);
}
function Zn(e, t) {
	return D(e.getFullYear() % 100, t, 2);
}
function Qn(e, t) {
	return e = qn(e), D(e.getFullYear() % 100, t, 2);
}
function $n(e, t) {
	return D(e.getFullYear() % 1e4, t, 4);
}
function er(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? bt(e) : bt.ceil(e), D(e.getFullYear() % 1e4, t, 4);
}
function tr(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + D(t / 60 | 0, "0", 2) + D(t % 60, "0", 2);
}
function nr(e, t) {
	return D(e.getUTCDate(), t, 2);
}
function rr(e, t) {
	return D(e.getUTCHours(), t, 2);
}
function ir(e, t) {
	return D(e.getUTCHours() % 12 || 12, t, 2);
}
function ar(e, t) {
	return D(1 + pt.count(Pt(e), e), t, 3);
}
function or(e, t) {
	return D(e.getUTCMilliseconds(), t, 3);
}
function sr(e, t) {
	return or(e, t) + "000";
}
function cr(e, t) {
	return D(e.getUTCMonth() + 1, t, 2);
}
function lr(e, t) {
	return D(e.getUTCMinutes(), t, 2);
}
function ur(e, t) {
	return D(e.getUTCSeconds(), t, 2);
}
function dr(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function fr(e, t) {
	return D(wt.count(Pt(e) - 1, e), t, 2);
}
function pr(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Ot(e) : Ot.ceil(e);
}
function mr(e, t) {
	return e = pr(e), D(Ot.count(Pt(e), e) + (Pt(e).getUTCDay() === 4), t, 2);
}
function hr(e) {
	return e.getUTCDay();
}
function gr(e, t) {
	return D(Tt.count(Pt(e) - 1, e), t, 2);
}
function _r(e, t) {
	return D(e.getUTCFullYear() % 100, t, 2);
}
function vr(e, t) {
	return e = pr(e), D(e.getUTCFullYear() % 100, t, 2);
}
function yr(e, t) {
	return D(e.getUTCFullYear() % 1e4, t, 4);
}
function br(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Ot(e) : Ot.ceil(e), D(e.getUTCFullYear() % 1e4, t, 4);
}
function xr() {
	return "+0000";
}
function Sr() {
	return "%";
}
function Cr(e) {
	return +e;
}
function wr(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var Tr, Er, Dr, Or, kr;
Ar({
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
function Ar(e) {
	return Tr = ln(e), Er = Tr.format, Dr = Tr.parse, Or = Tr.utcFormat, kr = Tr.utcParse, Tr;
}
//#endregion
//#region ../core/src/utils/arrayUtils.js
function jr(e, t) {
	return e.length == t.length && e.every((n, r) => e[r] === t[r]);
}
function Mr(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
function Nr(e) {
	return e[e.length - 1];
}
function Pr(e, t, n) {
	if (t < 0 || t >= e.length) throw Error("Source index out of range.");
	if (n < 0 || n > e.length - 1) throw Error("Destination index out of range.");
	let [r] = e.splice(t, 1);
	e.splice(n, 0, r);
}
//#endregion
//#region ../core/node_modules/vega-util/build/vega-util.js
function Fr(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function Ir(e) {
	return e == null ? null : e.fname;
}
function Lr(e) {
	return e == null ? null : e.fields;
}
function Rr(e) {
	return e.length === 1 ? zr(e[0]) : Br(e);
}
var zr = (e) => function(t) {
	return t[e];
}, Br = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function Vr(e) {
	throw Error(e);
}
function Hr(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Vr("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Vr("Access path missing closing bracket: " + e), r && Vr("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function Ur(e, t, n) {
	let r = Hr(e);
	return e = r.length === 1 ? r[0] : e, Fr((n && n.get || Rr)(r), [e], t || e);
}
Ur("id");
var Wr = Fr((e) => e, [], "identity");
Fr(() => 0, [], "zero"), Fr(() => 1, [], "one"), Fr(() => !0, [], "true"), Fr(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
var Gr = Array.isArray;
function Kr(e) {
	return e === Object(e);
}
function qr(e) {
	return e[e.length - 1];
}
function Jr(e) {
	return e == null || e === "" ? null : +e;
}
var Yr = (e) => (t) => e * Math.exp(t), Xr = (e) => (t) => Math.log(e * t), Zr = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), Qr = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, $r = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function ei(e, t, n, r) {
	let i = n(e[0]), a = n(qr(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function ti(e, t) {
	return ei(e, t, Jr, Wr);
}
function ni(e, t) {
	var n = Math.sign(e[0]);
	return ei(e, t, Xr(n), Yr(n));
}
function ri(e, t, n) {
	return ei(e, t, $r(n), $r(1 / n));
}
function ii(e, t, n, r, i) {
	let a = r(e[0]), o = r(qr(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function ai(e, t, n) {
	return ii(e, t, n, Jr, Wr);
}
function oi(e, t, n) {
	let r = Math.sign(e[0]);
	return ii(e, t, n, Xr(r), Yr(r));
}
function si(e, t, n, r) {
	return ii(e, t, n, $r(r), $r(1 / r));
}
function ci(e, t, n, r) {
	return ii(e, t, n, Zr(r), Qr(r));
}
function li(e) {
	return e == null ? [] : Gr(e) ? e : [e];
}
function ui(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function di(e) {
	return typeof e == "function";
}
var fi = "descending";
function pi(e, t, n) {
	n ||= {}, t = li(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || hi;
	return li(e).forEach((e, o) => {
		e != null && (r.push(t[o] === fi ? -1 : 1), i.push(e = di(e) ? e : Ur(e, null, n)), (Lr(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : Fr(o(i, r), Object.keys(a));
}
var mi = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e), hi = (e, t) => e.length === 1 ? gi(e[0], t[0]) : _i(e, t, e.length), gi = (e, t) => function(n, r) {
	return mi(e(n), e(r)) * t;
}, _i = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = mi(a(r), a(i));
	return o * t[s];
});
function vi(e) {
	return typeof e == "boolean";
}
function yi(e) {
	return typeof e == "number";
}
function bi(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function xi(e) {
	return typeof e == "string";
}
function Si(e, t) {
	let n = e[0], r = qr(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function Ci(e) {
	return e && qr(e) - e[0] || 0;
}
function wi(e) {
	return Gr(e) ? `[${e.map((e) => e === null ? "null" : wi(e))}]` : Kr(e) || xi(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function Ti(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/data/flowNode.js
var Ei = class {
	stats = {
		count: 0,
		first: null
	};
	#e = !1;
	#t = !1;
	#n = [];
	paramRuntimeProvider = null;
	get behavior() {
		return 0;
	}
	get domainSensitiveScaleChannels() {
		return [];
	}
	get label() {
		return `(${this.constructor.name})`;
	}
	constructor(e) {
		this.paramRuntimeProvider = e, this.children = [], this.parent = void 0, this.completed = !1;
	}
	get disposed() {
		return this.#t;
	}
	getDebugState() {
		let e = this;
		return {
			label: this.label,
			children: this.children.slice(),
			parent: this.parent,
			stats: {
				count: this.stats.count,
				first: this.stats.first
			},
			completed: this.completed,
			initialized: this.#e,
			disposed: this.#t,
			params: "params" in e ? structuredClone(e.params) : void 0,
			view: Di(e, this.paramRuntimeProvider),
			domainSensitiveScaleChannels: this.domainSensitiveScaleChannels
		};
	}
	reset() {
		this.completed = !1;
		for (let e of this.children) e.reset();
		this.stats.count = 0, this.stats.first = null;
	}
	initialize() {}
	initializeOnce() {
		this.#e ||= (this.initialize(), !0);
	}
	#r() {
		this._propagate = Function("children", "stats", De(this.children.length).map((e) => `const child${e} = children[${e}];`).join("\n") + `return function propagate(datum) {
                    if (stats.count === 0) {
                        stats.first = structuredClone(datum);
                    }
                    stats.count++;
                ${De(this.children.length).map((e) => `child${e}.handle(datum);`).join("\n")}
                };`)(this.children, this.stats);
	}
	setParent(e) {
		this.parent = e;
	}
	addChild(e) {
		if (e.parent) throw Error("Cannot add the child! It already has a parent.");
		return this.children.push(e), e.setParent(this), this.#r(), this;
	}
	adopt(e) {
		e.parent && e.parent.removeChild(e), this.addChild(e);
	}
	adoptChildrenOf(e) {
		for (let t of e.children.slice()) this.adopt(t);
	}
	insertAsParent(e) {
		if (this.isRoot()) throw Error("Cannot insert a new parent for a root node!");
		e.parent = this.parent, this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#r(), this.parent = void 0, e.addChild(this);
	}
	removeChild(e) {
		let t = this.children.indexOf(e);
		if (t > -1) this.children.splice(t, 1), e.parent = void 0, this.#r();
		else throw Error("Trying to remove an unknown child node!");
	}
	excise() {
		if (this.isRoot()) throw Error("Cannot excise root node!");
		if (this.isTerminal()) this.parent.removeChild(this);
		else if (this.children.length == 1) {
			let e = this.children[0];
			e.setParent(this.parent), this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#r(), this.setParent(void 0), this.children.length = 0;
		} else throw Error("Cannot excise a node that has multiple children!");
	}
	isRoot() {
		return !this.parent;
	}
	isBranching() {
		return this.children.length > 1;
	}
	isTerminal() {
		return this.children.length == 0;
	}
	visit(e) {
		e(this);
		for (let t of this.children) t.visit(e);
		e.afterChildren && e.afterChildren(this);
	}
	subtreeToString(e = 0) {
		let t = this.children.map((t) => t.subtreeToString(e + 1)).join("");
		return `${" ".repeat(e * 2)}* ${this.label}${"identifier" in this && this.identifier ? ": " + this.identifier : ""} \n${t}`;
	}
	handle(e) {
		this._propagate(e);
	}
	complete() {
		this.completed = !0;
		for (let e of this.children) e.complete();
	}
	registerDisposer(e) {
		this.#t ? e() : this.#n.push(e);
	}
	dispose() {
		if (!this.#t) {
			this.#t = !0;
			for (let e of this.#n) e();
			this.#n.length = 0;
		}
	}
	disposeSubtree() {
		let e = () => void 0;
		e.afterChildren = (e) => {
			e.dispose();
		}, this.visit(e);
	}
	beginBatch(e) {
		for (let t of this.children) t.beginBatch(e);
	}
	get paramRuntime() {
		if (this.paramRuntimeProvider && this.paramRuntimeProvider.paramRuntime) return this.paramRuntimeProvider.paramRuntime;
		if (!this.parent) throw Error("Cannot find paramRuntime!");
		return this.parent.paramRuntime;
	}
	repropagate() {
		if (this.parent) this.parent.repropagate();
		else throw Error("Cannot repropagate data, no FlowNode with stored data found!");
	}
	_propagate(e) {}
};
function Di(e, t) {
	if ("view" in e) return e.view;
	if (t && "getPathString" in t) return t;
}
function Oi(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function ki(e) {
	return e.type == "file";
}
function Ai(e) {
	return e.type == "facet";
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var ji = class extends Ei {
	#e;
	constructor(e, t) {
		super(t), this.#e = e.type;
	}
	get label() {
		return this.#e;
	}
}, Mi = "_uniqueId", Ni = 1e4, Pi = [null], Fi = class extends ji {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.as = e.as ?? "_uniqueId", this._blocks = [], this._usedBlocks = 0, this._id = -1;
	}
	initialize() {}
	reset() {
		super.reset(), this._usedBlocks = 0, this._id = -1;
	}
	handle(e) {
		e[this.as] = this._nextId(), this._propagate(e);
	}
	_nextId() {
		return ++this._id % 1e4 == 0 && (this._id = this._getBlock() * Ni), this._id;
	}
	_getBlock() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this._reserveBlock();
	}
	_reserveBlock() {
		let e = Pi.length;
		return Pi[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../core/src/utils/field.js
function Ii(e, t = e) {
	return /^[A-Za-z0-9_]+$/.test(e) ? Fr(Function("validator", `
                let validated = !validator;
                return function accessField(datum) {
                    if (!validated) {
                        validator(datum);
                        validated = true;
                    }
                    return datum[${JSON.stringify(e)}];
                }`)(function(t) {
		e in t || Li(t, e);
	}), [e], t) : Ur(e);
}
function Li(e, t) {
	throw Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function Ri(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = Vi(t), r.scaleChannel = ((ra(t) && t.resolutionChannel) ?? (Da(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Hi({
			scaleChannel: r.scaleChannel,
			source: Bi(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function i(e) {
		if (V(e)) {
			let t = r(n.createExpression(e.expr));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		} else {
			let t = e;
			return r(() => t);
		}
	}
	if (ta(t)) try {
		return r(Ii(t.field));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	else if (ca(t)) return r(n.createExpression(t.expr));
	else if (na(t)) return i(t.datum);
	else if (ea(t)) return i(t.value);
	else throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function zi(e) {
	return e.scaleChannel !== void 0;
}
function Bi(e) {
	if (ta(e)) return {
		kind: "field",
		value: e.field
	};
	if (ca(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (na(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (ea(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function Vi(e) {
	let t = Bi(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + Gi(t.value) : t.kind + "|" + Wi(t);
}
function Hi({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + Wi(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function Ui(e, t) {
	let { domainKey: n, domainKeyBase: r } = Hi({
		scaleChannel: e.scaleChannel,
		source: Bi(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function Wi(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return Gi(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function Gi(e) {
	return V(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../core/src/encoder/encoder.js
function Ki(e, t, n, r) {
	let i, a = vc(!1), o = () => {
		if (i) return i;
		let o = n.findValue(e);
		if (!o) return a;
		let s = {};
		if (nc(o)) {
			let n = Object.keys(o.intervals);
			for (let r of n) {
				let n = t[r];
				if (ta(n)) {
					s[r] = n.field;
					continue;
				} else if (n && "condition" in n) {
					let e = n.condition;
					if (ta(e)) {
						s[r] = e.field;
						continue;
					}
				}
				throw Error(`Selection "${e}" has an interval for "${r}" channel, but could not find a fieldDef: ${JSON.stringify(t[r])}`);
			}
		}
		let c = tc({
			type: "filter",
			param: e,
			fields: s,
			empty: r
		}, o);
		return i = n.createExpression(c), i;
	};
	return Object.assign((e) => o()(e), {
		param: e,
		empty: r ?? !0
	});
}
function qi(e, t, n, r) {
	let i = la(t) || ua(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], a = [...i, t], o = a.map((t, o) => {
		let s = i[o];
		return {
			accessor: Ri(e, t, r),
			predicate: s?.param ? Ki(s.param, n, r, s.empty) : Object.assign(vc(o === a.length - 1), { empty: !1 })
		};
	});
	if (o.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return o;
}
function Ji(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale();
	for (let [i, a] of Object.entries(t)) {
		if (!a) continue;
		let o = i;
		Yi(o) || (n[o] = Qi(qi(o, a, t, e.paramRuntime), r));
	}
	return n;
}
function Yi(e) {
	return e === "key" || e === "search" || e === "tooltip";
}
function Xi(e) {
	return e.branches.map((e) => e.accessor);
}
function Zi(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function Qi(e, t) {
	if (e.length === 1) {
		let n = $i(e[0].accessor, t);
		return Object.assign(n, { branches: e });
	}
	let n = e.map((e) => e.predicate), r = e.map((e) => $i(e.accessor, t));
	return Object.assign((e) => {
		for (let t = 0; t < r.length; t++) if (n[t](e)) return r[t](e);
	}, {
		constant: !1,
		branches: e,
		scale: r.map((e) => e.scale).find((e) => e),
		channelDef: e.at(-1).accessor.channelDef
	});
}
function $i(e, t) {
	let { channel: n, scaleChannel: r, channelDef: i } = e, a = e.scaleChannel ? t(r) : void 0;
	if (r && !a) throw Error(`Missing scale! "${n}": ${JSON.stringify(i)}`);
	return Object.assign(a ? (t) => a(e(t)) : (t) => e(t), {
		scale: a,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: vc(!0)
		}],
		channelDef: i
	});
}
function ea(e) {
	return e && "value" in e;
}
function ta(e) {
	return e && "field" in e;
}
function na(e) {
	return e && "datum" in e;
}
function ra(e) {
	return ta(e) || na(e) || ca(e) || sa(e);
}
function ia(e) {
	if (ua(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => ra(e));
	} else if (ra(e)) return e;
}
function aa(e) {
	let t = e && ia(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function oa(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = ia(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function sa(e) {
	return e && "chrom" in e;
}
function ca(e) {
	return e && "expr" in e;
}
function la(e) {
	return (ta(e) || na(e)) && "condition" in e;
}
function ua(e) {
	return ea(e) && "condition" in e;
}
var da = ["x", "y"], fa = ["x2", "y2"], pa = ["xOffset", "yOffset"], ma = [...da, ...fa];
function ha(e) {
	return da.includes(e);
}
function ga(e) {
	return ma.includes(e);
}
function _a(e) {
	return pa.includes(e);
}
function va(e) {
	return wa(e) == "x" ? "xOffset" : "yOffset";
}
function ya(e, t, n) {
	return t ?? (n ? 0 : e);
}
var ba = {
	x: "x2",
	y: "y2"
}, xa = Object.fromEntries(Object.entries(ba).map((e) => [e[1], e[0]]));
function Sa(e) {
	return e in xa;
}
function Ca(e) {
	let t = ba[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function wa(e) {
	return xa[e] ?? e;
}
function Ta(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(wa(e));
}
function Ea(e) {
	return ["shape", "direction"].includes(e);
}
function Da(e) {
	return [
		"x",
		"y",
		"x2",
		"y2",
		"xOffset",
		"yOffset",
		"color",
		"fill",
		"stroke",
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"strokeWidth",
		"size",
		"shape",
		"direction",
		"angle",
		"dx",
		"dy",
		"sample"
	].includes(e);
}
function Oa(e) {
	switch (e) {
		case "shape": return [
			"circle",
			"square",
			"cross",
			"diamond",
			"triangle-up",
			"triangle-right",
			"triangle-down",
			"triangle-left",
			"tick-up",
			"tick-right",
			"tick-down",
			"tick-left",
			"x",
			"+"
		];
		case "direction": return ["forward", "reverse"];
		default:
	}
}
function ka(e) {
	if (!Ea(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(Oa(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var Aa = "RawCode", ja = "Literal", Ma = "Property", Na = "Identifier", Pa = "ArrayExpression", Fa = "BinaryExpression", Ia = "CallExpression", La = "ConditionalExpression", Ra = "LogicalExpression", za = "MemberExpression", Ba = "ObjectExpression", Va = "UnaryExpression";
function O(e) {
	this.type = e;
}
O.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = Ha(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function Ha(e) {
	switch (e.type) {
		case Pa: return e.elements;
		case Fa:
		case Ra: return [e.left, e.right];
		case Ia: return [e.callee].concat(e.arguments);
		case La: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case za: return [e.object, e.property];
		case Ba: return e.properties;
		case Ma: return [e.key, e.value];
		case Va: return [e.argument];
		case Na:
		case ja:
		case Aa:
		default: return [];
	}
}
var k, A, j, M, N, Ua = 1, Wa = 2, Ga = 3, Ka = 4, qa = 5, Ja = 6, P = 7, Ya = 8, Xa = 9;
k = {}, k[Ua] = "Boolean", k[Wa] = "<end>", k[Ga] = "Identifier", k[Ka] = "Keyword", k[qa] = "Null", k[Ja] = "Numeric", k[P] = "Punctuator", k[Ya] = "String", k[Xa] = "RegularExpression";
var Za = "ArrayExpression", Qa = "BinaryExpression", $a = "CallExpression", eo = "ConditionalExpression", to = "Identifier", no = "Literal", ro = "LogicalExpression", io = "MemberExpression", ao = "ObjectExpression", oo = "Property", so = "UnaryExpression", F = "Unexpected token %0", co = "Unexpected number", lo = "Unexpected string", uo = "Unexpected identifier", fo = "Unexpected reserved word", po = "Unexpected end of input", mo = "Invalid regular expression", ho = "Invalid regular expression: missing /", go = "Octal literals are not allowed in strict mode.", _o = "Duplicate data property in object literal not allowed in strict mode", I = "ILLEGAL", vo = "Disabled.", yo = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), bo = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function xo(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function So(e) {
	return e >= 48 && e <= 57;
}
function Co(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function wo(e) {
	return "01234567".includes(e);
}
function To(e) {
	return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [
		5760,
		6158,
		8192,
		8193,
		8194,
		8195,
		8196,
		8197,
		8198,
		8199,
		8200,
		8201,
		8202,
		8239,
		8287,
		12288,
		65279
	].includes(e);
}
function Eo(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Do(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && yo.test(String.fromCharCode(e));
}
function Oo(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && bo.test(String.fromCharCode(e));
}
var ko = {
	if: 1,
	in: 1,
	do: 1,
	var: 1,
	for: 1,
	new: 1,
	try: 1,
	let: 1,
	this: 1,
	else: 1,
	case: 1,
	void: 1,
	with: 1,
	enum: 1,
	while: 1,
	break: 1,
	catch: 1,
	throw: 1,
	const: 1,
	yield: 1,
	class: 1,
	super: 1,
	return: 1,
	typeof: 1,
	delete: 1,
	switch: 1,
	export: 1,
	import: 1,
	public: 1,
	static: 1,
	default: 1,
	finally: 1,
	extends: 1,
	package: 1,
	private: 1,
	function: 1,
	continue: 1,
	debugger: 1,
	interface: 1,
	protected: 1,
	instanceof: 1,
	implements: 1
};
function Ao() {
	for (; j < M;) {
		let e = A.charCodeAt(j);
		if (To(e) || Eo(e)) ++j;
		else break;
	}
}
function jo(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) j < M && Co(A[j]) ? (r = A[j++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : R({}, F, I);
	return String.fromCharCode(i);
}
function Mo() {
	var e = A[j], t = 0, n, r;
	for (e === "}" && R({}, F, I); j < M && (e = A[j++], Co(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && R({}, F, I), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function No() {
	var e = A.charCodeAt(j++), t = String.fromCharCode(e);
	for (e === 92 && (A.charCodeAt(j) !== 117 && R({}, F, I), ++j, e = jo("u"), (!e || e === "\\" || !Do(e.charCodeAt(0))) && R({}, F, I), t = e); j < M && (e = A.charCodeAt(j), Oo(e));) ++j, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), A.charCodeAt(j) !== 117 && R({}, F, I), ++j, e = jo("u"), (!e || e === "\\" || !Oo(e.charCodeAt(0))) && R({}, F, I), t += e);
	return t;
}
function Po() {
	for (var e = j++, t; j < M;) {
		if (t = A.charCodeAt(j), t === 92) return j = e, No();
		if (Oo(t)) ++j;
		else break;
	}
	return A.slice(e, j);
}
function Fo() {
	var e = j, t = A.charCodeAt(j) === 92 ? No() : Po();
	return {
		type: t.length === 1 ? Ga : ko.hasOwnProperty(t) ? Ka : t === "null" ? qa : t === "true" || t === "false" ? Ua : Ga,
		value: t,
		start: e,
		end: j
	};
}
function Io() {
	var e = j, t = A.charCodeAt(j), n, r = A[j], i, a, o;
	switch (t) {
		case 46:
		case 40:
		case 41:
		case 59:
		case 44:
		case 123:
		case 125:
		case 91:
		case 93:
		case 58:
		case 63:
		case 126: return ++j, {
			type: P,
			value: String.fromCharCode(t),
			start: e,
			end: j
		};
		default: if (n = A.charCodeAt(j + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return j += 2, {
				type: P,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: j
			};
			case 33:
			case 61: return j += 2, A.charCodeAt(j) === 61 && ++j, {
				type: P,
				value: A.slice(e, j),
				start: e,
				end: j
			};
		}
	}
	if (o = A.substr(j, 4), o === ">>>=") return j += 4, {
		type: P,
		value: o,
		start: e,
		end: j
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return j += 3, {
		type: P,
		value: a,
		start: e,
		end: j
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return j += 2, {
		type: P,
		value: i,
		start: e,
		end: j
	};
	if (i === "//" && R({}, F, I), "<>=!+-*%&|^/".includes(r)) return ++j, {
		type: P,
		value: r,
		start: e,
		end: j
	};
	R({}, F, I);
}
function Lo(e) {
	let t = "";
	for (; j < M && Co(A[j]);) t += A[j++];
	return t.length === 0 && R({}, F, I), Do(A.charCodeAt(j)) && R({}, F, I), {
		type: Ja,
		value: parseInt("0x" + t, 16),
		start: e,
		end: j
	};
}
function Ro(e) {
	let t = "0" + A[j++];
	for (; j < M && wo(A[j]);) t += A[j++];
	return (Do(A.charCodeAt(j)) || So(A.charCodeAt(j))) && R({}, F, I), {
		type: Ja,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: j
	};
}
function zo() {
	var e, t, n = A[j];
	if (xo(So(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = j, e = "", n !== ".") {
		if (e = A[j++], n = A[j], e === "0") {
			if (n === "x" || n === "X") return ++j, Lo(t);
			if (wo(n)) return Ro(t);
			n && So(n.charCodeAt(0)) && R({}, F, I);
		}
		for (; So(A.charCodeAt(j));) e += A[j++];
		n = A[j];
	}
	if (n === ".") {
		for (e += A[j++]; So(A.charCodeAt(j));) e += A[j++];
		n = A[j];
	}
	if (n === "e" || n === "E") if (e += A[j++], n = A[j], (n === "+" || n === "-") && (e += A[j++]), So(A.charCodeAt(j))) for (; So(A.charCodeAt(j));) e += A[j++];
	else R({}, F, I);
	return Do(A.charCodeAt(j)) && R({}, F, I), {
		type: Ja,
		value: parseFloat(e),
		start: t,
		end: j
	};
}
function Bo() {
	var e = "", t, n, r, i, a = !1;
	for (t = A[j], xo(t === "'" || t === "\"", "String literal must starts with a quote"), n = j, ++j; j < M;) if (r = A[j++], r === t) {
		t = "";
		break;
	} else if (r === "\\") if (r = A[j++], !r || !Eo(r.charCodeAt(0))) switch (r) {
		case "u":
		case "x":
			A[j] === "{" ? (++j, e += Mo()) : e += jo(r);
			break;
		case "n":
			e += "\n";
			break;
		case "r":
			e += "\r";
			break;
		case "t":
			e += "	";
			break;
		case "b":
			e += "\b";
			break;
		case "f":
			e += "\f";
			break;
		case "v":
			e += "\v";
			break;
		default:
			wo(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), j < M && wo(A[j]) && (a = !0, i = i * 8 + "01234567".indexOf(A[j++]), "0123".includes(r) && j < M && wo(A[j]) && (i = i * 8 + "01234567".indexOf(A[j++]))), e += String.fromCharCode(i)) : e += r;
			break;
	}
	else r === "\r" && A[j] === "\n" && ++j;
	else if (Eo(r.charCodeAt(0))) break;
	else e += r;
	return t !== "" && R({}, F, I), {
		type: Ya,
		value: e,
		octal: a,
		start: n,
		end: j
	};
}
function Vo(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		R({}, mo);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		R({}, mo);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function Ho() {
	var e = A[j], t, n, r, i;
	for (xo(e === "/", "Regular expression literal must start with a slash"), t = A[j++], n = !1, r = !1; j < M;) if (e = A[j++], t += e, e === "\\") e = A[j++], Eo(e.charCodeAt(0)) && R({}, ho), t += e;
	else if (Eo(e.charCodeAt(0))) R({}, ho);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || R({}, ho), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function Uo() {
	for (var e, t = "", n = ""; j < M && (e = A[j], Oo(e.charCodeAt(0)));) ++j, e === "\\" && j < M ? R({}, F, I) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && R({}, mo, n), {
		value: n,
		literal: t
	};
}
function Wo() {
	var e, t, n, r;
	return N = null, Ao(), e = j, t = Ho(), n = Uo(), r = Vo(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: j
	};
}
function Go(e) {
	return e.type === Ga || e.type === Ka || e.type === Ua || e.type === qa;
}
function Ko() {
	if (Ao(), j >= M) return {
		type: Wa,
		start: j,
		end: j
	};
	let e = A.charCodeAt(j);
	return Do(e) ? Fo() : e === 40 || e === 41 || e === 59 ? Io() : e === 39 || e === 34 ? Bo() : e === 46 ? So(A.charCodeAt(j + 1)) ? zo() : Io() : So(e) ? zo() : Io();
}
function L() {
	let e = N;
	return j = e.end, N = Ko(), j = e.end, e;
}
function qo() {
	let e = j;
	N = Ko(), j = e;
}
function Jo(e) {
	let t = new O(Za);
	return t.elements = e, t;
}
function Yo(e, t, n) {
	let r = new O(e === "||" || e === "&&" ? ro : Qa);
	return r.operator = e, r.left = t, r.right = n, r;
}
function Xo(e, t) {
	let n = new O($a);
	return n.callee = e, n.arguments = t, n;
}
function Zo(e, t, n) {
	let r = new O(eo);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function Qo(e) {
	let t = new O(to);
	return t.name = e, t;
}
function $o(e) {
	let t = new O(no);
	return t.value = e.value, t.raw = A.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function es(e, t, n) {
	let r = new O(io);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function ts(e) {
	let t = new O(ao);
	return t.properties = e, t;
}
function ns(e, t, n) {
	let r = new O(oo);
	return r.key = t, r.value = n, r.kind = e, r;
}
function rs(e, t) {
	let n = new O(so);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function R(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (xo(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = j, n.description = i, n;
}
function is(e) {
	e.type === Wa && R(e, po), e.type === Ja && R(e, co), e.type === Ya && R(e, lo), e.type === Ga && R(e, uo), e.type === Ka && R(e, fo), R(e, F, e.value);
}
function z(e) {
	let t = L();
	(t.type !== P || t.value !== e) && is(t);
}
function B(e) {
	return N.type === P && N.value === e;
}
function as(e) {
	return N.type === Ka && N.value === e;
}
function os() {
	let e = [];
	for (j = N.start, z("["); !B("]");) B(",") ? (L(), e.push(null)) : (e.push(Ss()), B("]") || z(","));
	return L(), Jo(e);
}
function ss() {
	j = N.start;
	let e = L();
	return e.type === Ya || e.type === Ja ? (e.octal && R(e, go), $o(e)) : Qo(e.value);
}
function cs() {
	var e, t, n, r;
	if (j = N.start, e = N, e.type === Ga) return n = ss(), z(":"), r = Ss(), ns("init", n, r);
	if (e.type === Wa || e.type === P) is(e);
	else return t = ss(), z(":"), r = Ss(), ns("init", t, r);
}
function ls() {
	var e = [], t, n, r, i = {}, a = String;
	for (j = N.start, z("{"); !B("}");) t = cs(), n = t.key.type === to ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? R({}, _o) : i[r] = !0, e.push(t), B("}") || z(",");
	return z("}"), ts(e);
}
function us() {
	z("(");
	let e = Cs();
	return z(")"), e;
}
var ds = { if: 1 };
function fs() {
	var e, t, n;
	if (B("(")) return us();
	if (B("[")) return os();
	if (B("{")) return ls();
	if (e = N.type, j = N.start, e === Ga || ds[N.value]) n = Qo(L().value);
	else if (e === Ya || e === Ja) N.octal && R(N, go), n = $o(L());
	else if (e === Ka) throw Error(vo);
	else e === Ua ? (t = L(), t.value = t.value === "true", n = $o(t)) : e === qa ? (t = L(), t.value = null, n = $o(t)) : B("/") || B("/=") ? (n = $o(Wo()), qo()) : is(L());
	return n;
}
function ps() {
	let e = [];
	if (z("("), !B(")")) for (; j < M && (e.push(Ss()), !B(")"));) z(",");
	return z(")"), e;
}
function ms() {
	j = N.start;
	let e = L();
	return Go(e) || is(e), Qo(e.value);
}
function hs() {
	return z("."), ms();
}
function gs() {
	z("[");
	let e = Cs();
	return z("]"), e;
}
function _s() {
	for (var e = fs(), t, n;;) if (B(".")) n = hs(), e = es(".", e, n);
	else if (B("(")) t = ps(), e = Xo(e, t);
	else if (B("[")) n = gs(), e = es("[", e, n);
	else break;
	return e;
}
function vs() {
	let e = _s();
	if (N.type === P && (B("++") || B("--"))) throw Error(vo);
	return e;
}
function ys() {
	var e, t;
	if (N.type !== P && N.type !== Ka) t = vs();
	else if (B("++") || B("--")) throw Error(vo);
	else if (B("+") || B("-") || B("~") || B("!")) e = L(), t = ys(), t = rs(e.value, t);
	else if (as("delete") || as("void") || as("typeof")) throw Error(vo);
	else t = vs();
	return t;
}
function bs(e) {
	let t = 0;
	if (e.type !== P && e.type !== Ka) return 0;
	switch (e.value) {
		case "||":
			t = 1;
			break;
		case "&&":
			t = 2;
			break;
		case "|":
			t = 3;
			break;
		case "^":
			t = 4;
			break;
		case "&":
			t = 5;
			break;
		case "==":
		case "!=":
		case "===":
		case "!==":
			t = 6;
			break;
		case "<":
		case ">":
		case "<=":
		case ">=":
		case "instanceof":
		case "in":
			t = 7;
			break;
		case "<<":
		case ">>":
		case ">>>":
			t = 8;
			break;
		case "+":
		case "-":
			t = 9;
			break;
		case "*":
		case "/":
		case "%":
			t = 11;
			break;
	}
	return t;
}
function xs() {
	var e = N, t, n, r, i, a, o, s, c = ys(), l;
	if (r = N, i = bs(r), i === 0) return c;
	for (r.prec = i, L(), t = [e, N], o = ys(), a = [
		c,
		r,
		o
	]; (i = bs(N)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = Yo(s, c, o), a.push(n);
		r = L(), r.prec = i, a.push(r), t.push(N), n = ys(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = Yo(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function Ss() {
	var e = xs(), t, n;
	return B("?") && (L(), t = Ss(), z(":"), n = Ss(), e = Zo(e, t, n)), e;
}
function Cs() {
	let e = Ss();
	if (B(",")) throw Error(vo);
	return e;
}
function ws(e) {
	A = e, j = 0, M = A.length, N = null, qo();
	let t = Cs();
	if (N.type !== Wa) throw Error("Unexpect token after expression.");
	return t;
}
var Ts = {
	NaN: "NaN",
	E: "Math.E",
	LN2: "Math.LN2",
	LN10: "Math.LN10",
	LOG2E: "Math.LOG2E",
	LOG10E: "Math.LOG10E",
	PI: "Math.PI",
	SQRT1_2: "Math.SQRT1_2",
	SQRT2: "Math.SQRT2",
	MIN_VALUE: "Number.MIN_VALUE",
	MAX_VALUE: "Number.MAX_VALUE"
};
function Es(e) {
	function t(t, n, r, i) {
		let a = e(n[0]);
		return r && (a = r + "(" + a + ")", r.lastIndexOf("new ", 0) === 0 && (a = "(" + a + ")")), a + "." + t + (i < 0 ? "" : i === 0 ? "()" : "(" + n.slice(1).map(e).join(",") + ")");
	}
	function n(e, n, r) {
		return (i) => t(e, i, n, r);
	}
	let r = "new Date", i = "String", o = "RegExp";
	return {
		isNaN: "Number.isNaN",
		isFinite: "Number.isFinite",
		abs: "Math.abs",
		acos: "Math.acos",
		asin: "Math.asin",
		atan: "Math.atan",
		atan2: "Math.atan2",
		ceil: "Math.ceil",
		cos: "Math.cos",
		exp: "Math.exp",
		floor: "Math.floor",
		hypot: "Math.hypot",
		log: "Math.log",
		max: "Math.max",
		min: "Math.min",
		pow: "Math.pow",
		random: "Math.random",
		round: "Math.round",
		sin: "Math.sin",
		sqrt: "Math.sqrt",
		tan: "Math.tan",
		clamp: function(t) {
			t.length < 3 && a("Missing arguments to clamp function."), t.length > 3 && a("Too many arguments to clamp function.");
			let n = t.map(e);
			return "Math.max(" + n[1] + ", Math.min(" + n[2] + "," + n[0] + "))";
		},
		now: "Date.now",
		utc: "Date.UTC",
		datetime: r,
		date: n("getDate", r, 0),
		day: n("getDay", r, 0),
		year: n("getFullYear", r, 0),
		month: n("getMonth", r, 0),
		hours: n("getHours", r, 0),
		minutes: n("getMinutes", r, 0),
		seconds: n("getSeconds", r, 0),
		milliseconds: n("getMilliseconds", r, 0),
		time: n("getTime", r, 0),
		timezoneoffset: n("getTimezoneOffset", r, 0),
		utcdate: n("getUTCDate", r, 0),
		utcday: n("getUTCDay", r, 0),
		utcyear: n("getUTCFullYear", r, 0),
		utcmonth: n("getUTCMonth", r, 0),
		utchours: n("getUTCHours", r, 0),
		utcminutes: n("getUTCMinutes", r, 0),
		utcseconds: n("getUTCSeconds", r, 0),
		utcmilliseconds: n("getUTCMilliseconds", r, 0),
		length: n("length", null, -1),
		parseFloat: "parseFloat",
		parseInt: "parseInt",
		upper: n("toUpperCase", i, 0),
		lower: n("toLowerCase", i, 0),
		substring: n("substring", i),
		split: n("split", i),
		trim: n("trim", i, 0),
		btoa: "btoa",
		atob: "atob",
		regexp: o,
		test: n("test", o),
		if: function(t) {
			t.length < 3 && a("Missing arguments to if function."), t.length > 3 && a("Too many arguments to if function.");
			let n = t.map(e);
			return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
		}
	};
}
function Ds(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function Os(e) {
	e ||= {};
	let t = e.allowed ? y(e.allowed) : {}, n = e.forbidden ? y(e.forbidden) : {}, r = e.constants || Ts, i = (e.functions || Es)(p), o = e.globalvar, s = e.fieldvar, c = h(o) ? o : (e) => `${o}["${e}"]`;
	[...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
	let u = {}, d = {}, f = 0;
	function p(e) {
		if (_(e)) return e;
		let t = m[e.type];
		return t ?? a("Unsupported type: " + e.type), t(e);
	}
	let m = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let i = e.name;
			return f > 0 ? i : g(n, i) ? a("Illegal identifier: " + i) : g(r, i) ? r[i] : g(t, i) ? i : (u[i] = 1, c(i));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = p(e.object);
			t && (f += 1);
			let r = p(e.property);
			return n === s && (d[Ds(r)] = 1), t && --f, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && a("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = g(i, t) && i[t];
			return r || a("Unrecognized function: " + t), h(r) ? r(n) : r + "(" + n.map(p).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(p).join(",") + "]",
		BinaryExpression: (e) => "(" + p(e.left) + " " + e.operator + " " + p(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + p(e.argument) + ")",
		ConditionalExpression: (e) => "(" + p(e.test) + "?" + p(e.consequent) + ":" + p(e.alternate) + ")",
		LogicalExpression: (e) => "(" + p(e.left) + e.operator + p(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.name;
				l.has(e) && a("Illegal property: " + e);
			}
			return "{" + e.properties.map(p).join(",") + "}";
		},
		Property: (e) => {
			f += 1;
			let t = p(e.key);
			return --f, t + ":" + p(e.value);
		}
	};
	function v(e) {
		let t = {
			code: p(e),
			globals: Object.keys(u),
			fields: Object.keys(d)
		};
		return u = {}, d = {}, t;
	}
	return v.functions = i, v.constants = r, v;
}
//#endregion
//#region ../core/src/utils/smoothstep.js
function ks(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function As(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function js(e, t, n) {
	return As((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/utils/expression.js
function Ms(e) {
	return Gr(e) || ArrayBuffer.isView(e) ? e : null;
}
function Ns(e) {
	return Ms(e) || (xi(e) ? e : null);
}
var Ps = {
	clamp: As,
	format(e, t) {
		return Ke(t)(e);
	},
	join(e, t) {
		return Ms(e).join(t);
	},
	indexof(e, t, n) {
		return Ns(e).indexOf(t, n);
	},
	lastindexof(e, t, n) {
		return Ns(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return xi(e) ? Array.from(e).reverse().join("") : Ms(e).slice().reverse();
	},
	slice(e, t, n) {
		return Ns(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: Gr,
	isBoolean: vi,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: yi,
	isObject: Kr,
	isRegExp: bi,
	isString: xi,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: Si,
	linearstep: js,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return Ms(e).slice().sort(mi);
	},
	center(e) {
		let t = Ms(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return Ci(e);
	},
	smoothstep: ks
};
function Fs(e) {
	let t = !1, n = Us(e, {}, { resolveScaleResolution: () => (t = !0, { channel: "analysis" }) });
	return {
		usesScaleHelper: t,
		globals: n.globals
	};
}
function Is(e, t) {
	let n = Es(e);
	for (let e in Ps) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"linearize"
	]) n[r] = (n) => Ls(e, t, r, n);
	return n;
}
function Ls(e, t, n, r) {
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert" || n === "linearize") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	let i = Rs(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function Rs(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function zs(e, t) {
	let n = (n) => Vs(t, e, n);
	if (e === "domain") return () => n(() => t.getDomain());
	if (e === "range") return () => n(() => t.getScale().range());
	if (e === "bandwidth") return () => n(() => {
		let e = t.getScale();
		if (typeof e.bandwidth != "function") throw Error(`Scale channel "${t.channel}" does not support bandwidth().`);
		return e.bandwidth();
	});
	if (e === "scale") return (e) => n(() => t.getScale()(e));
	if (e === "invert") return (e) => n(() => t.getScale().invert(e));
	if (e === "linearize") return (e) => n(() => e == null ? null : typeof t.fromComplex == "function" ? t.fromComplex(e) : e);
	throw Error("Unknown scale helper: " + e);
}
var Bs = /* @__PURE__ */ new WeakSet();
function Vs(e, t, n) {
	if (Bs.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	Bs.add(e);
	try {
		return n();
	} finally {
		Bs.delete(e);
	}
}
function Hs(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = () => {
		for (let e of i) e();
	}, o = () => {
		e === "domain" ? n.addEventListener("domain", a) : (e === "range" || n.addEventListener("domain", a), n.addEventListener("range", a));
	}, s = () => {
		e === "domain" ? n.removeEventListener("domain", a) : (e === "range" || n.removeEventListener("domain", a), n.removeEventListener("range", a));
	};
	return {
		id: `scale:${t}:${r}`,
		name: `scale(${t})`,
		kind: "derived",
		rank: 0,
		propagation: "sync",
		get() {
			return n.getScale();
		},
		subscribe(e) {
			let t = i.size === 0;
			return i.add(e), t && o(), () => {
				i.delete(e) && i.size === 0 && s();
			};
		}
	};
}
function Us(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = 1, o = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, o) {
				let s = e + ":" + n, c = i.get(s);
				if (c) return c;
				let l = r.get(s);
				l || (l = Hs(e, n, o, "__scale_dependency_" + a++), r.set(s, l));
				let u = "__scale_helper_" + a++, d = {
					codeName: u,
					dependency: l
				};
				return i.set(s, d), t[u] = zs(e, o), d;
			}
		}, s = Os({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => Is(e, o)
		})(ws(e)), c = Function("datum", "globalObject", `"use strict";
            try {
                return (${s.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`).bind(Ps), l = (e) => c(e, t);
		return l.fields = s.fields, l.globals = s.globals, l.code = s.code, l.scaleDependencies = Array.from(r.values()), l;
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
var Ws = Os({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function Gs(e) {
	try {
		let t = Ws(ws(e));
		return Function("event", "globalObject", `"use strict";
            try {
                return !!(${t.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`);
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
//#endregion
//#region ../core/src/utils/interactionConfig.js
function Ks(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	} else return e;
}
function qs(e) {
	return e?.filter ? Gs(e.filter) : () => !0;
}
function Js(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function Ys(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[Mi]
	};
}
function Xs(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[Mi], e]))
	};
}
function Zs(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => Ii(e)), r = (e) => n.map((t) => t(e));
	if (rc(e)) return e.datum ? [r(e.datum)] : [];
	if (ic(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function Qs(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? Ys(i[0] ?? null) : Xs(i),
		unresolved: a
	};
}
function $s(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function ec(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[Mi], e);
	for (let e of n ?? []) i.delete(e[Mi]);
	for (let e of r ?? []) {
		let t = e[Mi];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function tc(e, t) {
	let n = !!(e.empty ?? !0), r = H(e.param), i = e.fields ?? {};
	if (rc(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(Mi)}]`;
	if (ic(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(Mi)}])`;
	if (nc(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(ha);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = Ca(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${c} && ${l}) : ${n})`;
		}).join(" && ");
	} else throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function nc(e) {
	return e.type === "interval";
}
function rc(e) {
	return e.type === "single";
}
function ic(e) {
	return e.type === "multi";
}
function ac(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? Ks(t.on) : oc(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : Ks(t.clear), oc(t) && t.on.type === "click" && (t.toggle = !0), t;
}
function oc(e) {
	return e && e.type == "point";
}
function sc(e) {
	return e && e.type == "interval";
}
function cc(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function lc(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] <= t[e] && n[1] >= t[e]);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function uc(e = ["x"], t = {}) {
	let n = {};
	for (let r of e) n[r] = t[r] ?? null;
	return {
		type: "ruler",
		values: n
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramUtils.js
function V(e) {
	return typeof e == "object" && !!e && "expr" in e && xi(e.expr);
}
function dc(e) {
	if (V(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function fc(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function pc(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function mc(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function H(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function hc(e, t, n) {
	if ("select" in e) {
		let t = ac(e.select);
		if (oc(t)) return t.toggle ? Xs() : Ys(null);
		if (sc(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return $s(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return uc(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e.expr);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function gc(e, t, n, r, i = {}) {
	let a = { ...t }, o = /* @__PURE__ */ new Set(), s = !1, c = !1, l = i.batchMode ?? "microtask";
	r?.(() => {
		c = !0, o.clear(), s = !1;
	});
	let u = () => {
		if (c) return;
		if (!n || o.size === 0) {
			s = !1;
			return;
		}
		let e = new Set(o);
		o.clear(), s = !1, n(e);
	}, d = (t) => {
		c || (o.add(t), s || (s = !0, queueMicrotask(() => {
			c || (l == "whenPropagated" && e.whenPropagated ? e.whenPropagated().then(u).catch(() => {
				u();
			}) : u());
		})));
	};
	for (let [i, o] of Object.entries(t)) if (V(o)) if (n) {
		let t = () => d(i), n = e.watchExpression ? e.watchExpression(o.expr, t, {
			scopeOwned: !r,
			registerDisposer: r
		}) : e.createExpression(o.expr);
		if (!e.watchExpression) {
			let e = n.subscribe(t);
			r?.(e);
		}
		Object.defineProperty(a, i, {
			enumerable: !0,
			get() {
				return n();
			}
		});
	} else {
		let t = e.createExpression(o.expr);
		Object.defineProperty(a, i, {
			enumerable: !0,
			get() {
				return t();
			}
		});
	}
	else a[i] = o;
	return a;
}
function _c(e, t, n, r) {
	if (!V(t)) return t;
	let i = () => {
		throw Error(n);
	}, a = e.watchExpression ? e.watchExpression(t.expr, i, {
		scopeOwned: !1,
		registerDisposer: r
	}) : e.createExpression(t.expr);
	if (!e.watchExpression) {
		let e = a.subscribe(i);
		r?.(e);
	}
	return a();
}
function vc(e) {
	return Object.assign(() => e, {
		subscribe: () => () => void 0,
		invalidate: () => void 0,
		identifier: () => "constant",
		fields: [],
		globals: [],
		code: JSON.stringify(e)
	});
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function U(e, t) {
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
function yc(e, t) {
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
var bc = Symbol("implicit");
function xc() {
	var e = new ae(), t = [], n = [], r = bc;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== bc) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new ae();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return xc(t, n).unknown(r);
	}, U.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function Sc(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Cc(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function wc() {}
var Tc = .7, Ec = 1 / Tc, Dc = "\\s*([+-]?\\d+)\\s*", Oc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", kc = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ac = /^#([0-9a-f]{3,8})$/, jc = RegExp(`^rgb\\(${Dc},${Dc},${Dc}\\)$`), Mc = RegExp(`^rgb\\(${kc},${kc},${kc}\\)$`), Nc = RegExp(`^rgba\\(${Dc},${Dc},${Dc},${Oc}\\)$`), Pc = RegExp(`^rgba\\(${kc},${kc},${kc},${Oc}\\)$`), Fc = RegExp(`^hsl\\(${Oc},${kc},${kc}\\)$`), Ic = RegExp(`^hsla\\(${Oc},${kc},${kc},${Oc}\\)$`), Lc = {
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
Sc(wc, Hc, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Rc,
	formatHex: Rc,
	formatHex8: zc,
	formatHsl: Bc,
	formatRgb: Vc,
	toString: Vc
});
function Rc() {
	return this.rgb().formatHex();
}
function zc() {
	return this.rgb().formatHex8();
}
function Bc() {
	return el(this).formatHsl();
}
function Vc() {
	return this.rgb().formatRgb();
}
function Hc(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Ac.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Uc(t) : n === 3 ? new W(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Wc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Wc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = jc.exec(e)) ? new W(t[1], t[2], t[3], 1) : (t = Mc.exec(e)) ? new W(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Nc.exec(e)) ? Wc(t[1], t[2], t[3], t[4]) : (t = Pc.exec(e)) ? Wc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Fc.exec(e)) ? $c(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ic.exec(e)) ? $c(t[1], t[2] / 100, t[3] / 100, t[4]) : Lc.hasOwnProperty(e) ? Uc(Lc[e]) : e === "transparent" ? new W(NaN, NaN, NaN, 0) : null;
}
function Uc(e) {
	return new W(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Wc(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new W(e, t, n, r);
}
function Gc(e) {
	return e instanceof wc || (e = Hc(e)), e ? (e = e.rgb(), new W(e.r, e.g, e.b, e.opacity)) : new W();
}
function Kc(e, t, n, r) {
	return arguments.length === 1 ? Gc(e) : new W(e, t, n, r ?? 1);
}
function W(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Sc(W, Kc, Cc(wc, {
	brighter(e) {
		return e = e == null ? Ec : Ec ** +e, new W(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Tc : Tc ** +e, new W(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new W(Zc(this.r), Zc(this.g), Zc(this.b), Xc(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: qc,
	formatHex: qc,
	formatHex8: Jc,
	formatRgb: Yc,
	toString: Yc
}));
function qc() {
	return `#${Qc(this.r)}${Qc(this.g)}${Qc(this.b)}`;
}
function Jc() {
	return `#${Qc(this.r)}${Qc(this.g)}${Qc(this.b)}${Qc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yc() {
	let e = Xc(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Zc(this.r)}, ${Zc(this.g)}, ${Zc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Xc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Zc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Qc(e) {
	return e = Zc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function $c(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new G(e, t, n, r);
}
function el(e) {
	if (e instanceof G) return new G(e.h, e.s, e.l, e.opacity);
	if (e instanceof wc || (e = Hc(e)), !e) return new G();
	if (e instanceof G) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new G(o, s, c, e.opacity);
}
function tl(e, t, n, r) {
	return arguments.length === 1 ? el(e) : new G(e, t, n, r ?? 1);
}
function G(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Sc(G, tl, Cc(wc, {
	brighter(e) {
		return e = e == null ? Ec : Ec ** +e, new G(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Tc : Tc ** +e, new G(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new W(il(e >= 240 ? e - 240 : e + 120, i, r), il(e, i, r), il(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new G(nl(this.h), rl(this.s), rl(this.l), Xc(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Xc(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${nl(this.h)}, ${rl(this.s) * 100}%, ${rl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function nl(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function rl(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function il(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var al = Math.PI / 180, ol = 180 / Math.PI, sl = 18, cl = .96422, ll = 1, ul = .82521, dl = 4 / 29, fl = 6 / 29, pl = 3 * fl * fl, ml = fl * fl * fl;
function hl(e) {
	if (e instanceof _l) return new _l(e.l, e.a, e.b, e.opacity);
	if (e instanceof wl) return Tl(e);
	e instanceof W || (e = Gc(e));
	var t = xl(e.r), n = xl(e.g), r = xl(e.b), i = vl((.2225045 * t + .7168786 * n + .0606169 * r) / ll), a, o;
	return t === n && n === r ? a = o = i : (a = vl((.4360747 * t + .3850649 * n + .1430804 * r) / cl), o = vl((.0139322 * t + .0971045 * n + .7141733 * r) / ul)), new _l(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function gl(e, t, n, r) {
	return arguments.length === 1 ? hl(e) : new _l(e, t, n, r ?? 1);
}
function _l(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Sc(_l, gl, Cc(wc, {
	brighter(e) {
		return new _l(this.l + sl * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new _l(this.l - sl * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = cl * yl(t), e = ll * yl(e), n = ul * yl(n), new W(bl(3.1338561 * t - 1.6168667 * e - .4906146 * n), bl(-.9787684 * t + 1.9161415 * e + .033454 * n), bl(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function vl(e) {
	return e > ml ? e ** (1 / 3) : e / pl + dl;
}
function yl(e) {
	return e > fl ? e * e * e : pl * (e - dl);
}
function bl(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function xl(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Sl(e) {
	if (e instanceof wl) return new wl(e.h, e.c, e.l, e.opacity);
	if (e instanceof _l || (e = hl(e)), e.a === 0 && e.b === 0) return new wl(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * ol;
	return new wl(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Cl(e, t, n, r) {
	return arguments.length === 1 ? Sl(e) : new wl(e, t, n, r ?? 1);
}
function wl(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Tl(e) {
	if (isNaN(e.h)) return new _l(e.l, 0, 0, e.opacity);
	var t = e.h * al;
	return new _l(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Sc(wl, Cl, Cc(wc, {
	brighter(e) {
		return new wl(this.h, this.c, this.l + sl * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new wl(this.h, this.c, this.l - sl * (e ?? 1), this.opacity);
	},
	rgb() {
		return Tl(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var El = -.14861, Dl = 1.78277, Ol = -.29227, kl = -.90649, Al = 1.97294, jl = Al * kl, Ml = Al * Dl, Nl = Dl * Ol - kl * El;
function Pl(e) {
	if (e instanceof Il) return new Il(e.h, e.s, e.l, e.opacity);
	e instanceof W || (e = Gc(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Nl * r + jl * t - Ml * n) / (Nl + jl - Ml), a = r - i, o = (Al * (n - i) - Ol * a) / kl, s = Math.sqrt(o * o + a * a) / (Al * i * (1 - i)), c = s ? Math.atan2(o, a) * ol - 120 : NaN;
	return new Il(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function Fl(e, t, n, r) {
	return arguments.length === 1 ? Pl(e) : new Il(e, t, n, r ?? 1);
}
function Il(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Sc(Il, Fl, Cc(wc, {
	brighter(e) {
		return e = e == null ? Ec : Ec ** +e, new Il(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Tc : Tc ** +e, new Il(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * al, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new W(255 * (t + n * (El * r + Dl * i)), 255 * (t + n * (Ol * r + kl * i)), 255 * (t + Al * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function Ll(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function Rl(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Ll((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function zl(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return Ll((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var Bl = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Vl(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Hl(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Ul(e, t) {
	var n = t - e;
	return n ? Vl(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Bl(isNaN(e) ? t : e);
}
function Wl(e) {
	return (e = +e) == 1 ? K : function(t, n) {
		return n - t ? Hl(t, n, e) : Bl(isNaN(t) ? n : t);
	};
}
function K(e, t) {
	var n = t - e;
	return n ? Vl(e, n) : Bl(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Gl = (function e(t) {
	var n = Wl(t);
	function r(e, t) {
		var r = n((e = Kc(e)).r, (t = Kc(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = K(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Kl(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = Kc(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var ql = Kl(Rl), Jl = Kl(zl);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function Yl(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Xl(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Zl(e, t) {
	return (Xl(t) ? Yl : Ql)(e, t);
}
function Ql(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = ou(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function $l(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function q(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function eu(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = ou(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var tu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nu = new RegExp(tu.source, "g");
function ru(e) {
	return function() {
		return e;
	};
}
function iu(e) {
	return function(t) {
		return e(t) + "";
	};
}
function au(e, t) {
	var n = tu.lastIndex = nu.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = tu.exec(e)) && (i = nu.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: q(r, i)
	})), n = nu.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? iu(c[0].x) : ru(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function ou(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Bl(t) : (n === "number" ? q : n === "string" ? (r = Hc(t)) ? (t = r, Gl) : au : t instanceof Hc ? Gl : t instanceof Date ? $l : Xl(t) ? Yl : Array.isArray(t) ? Ql : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? eu : q)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function su(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function cu(e, t) {
	var n = Ul(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function lu(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var uu = 180 / Math.PI, du = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function fu(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * uu,
		skewX: Math.atan(c) * uu,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var pu;
function mu(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? du : fu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function hu(e) {
	return e == null || (pu ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), pu.setAttribute("transform", e), !(e = pu.transform.baseVal.consolidate())) ? du : (e = e.matrix, fu(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function gu(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: q(e, i)
			}, {
				i: c - 2,
				x: q(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: q(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: q(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: q(e, n)
			}, {
				i: s - 2,
				x: q(t, r)
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
var _u = gu(mu, "px, ", "px)", "deg)"), vu = gu(hu, ", ", ")", ")"), yu = 1e-12;
function bu(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function xu(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Su(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Cu = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < yu) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = bu(y), c = s / (n * g) * (i * Su(t * r + y) - xu(y));
				return [
					a + c * d,
					o + c * f,
					s * i / bu(t * r + y)
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
function wu(e) {
	return function(t, n) {
		var r = e((t = tl(t)).h, (n = tl(n)).h), i = K(t.s, n.s), a = K(t.l, n.l), o = K(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Tu = wu(Ul), Eu = wu(K);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function Du(e, t) {
	var n = K((e = gl(e)).l, (t = gl(t)).l), r = K(e.a, t.a), i = K(e.b, t.b), a = K(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function Ou(e) {
	return function(t, n) {
		var r = e((t = Cl(t)).h, (n = Cl(n)).h), i = K(t.c, n.c), a = K(t.l, n.l), o = K(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var ku = Ou(Ul), Au = Ou(K);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function ju(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = Fl(t)).h, (r = Fl(r)).h), a = K(t.s, r.s), o = K(t.l, r.l), s = K(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var Mu = ju(Ul), Nu = ju(K);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function Pu(e, t) {
	t === void 0 && (t = e, e = ou);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function Fu(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var Iu = /* @__PURE__ */ e({
	interpolate: () => ou,
	interpolateArray: () => Zl,
	interpolateBasis: () => Rl,
	interpolateBasisClosed: () => zl,
	interpolateCubehelix: () => Mu,
	interpolateCubehelixLong: () => Nu,
	interpolateDate: () => $l,
	interpolateDiscrete: () => su,
	interpolateHcl: () => ku,
	interpolateHclLong: () => Au,
	interpolateHsl: () => Tu,
	interpolateHslLong: () => Eu,
	interpolateHue: () => cu,
	interpolateLab: () => Du,
	interpolateNumber: () => q,
	interpolateNumberArray: () => Yl,
	interpolateObject: () => eu,
	interpolateRgb: () => Gl,
	interpolateRgbBasis: () => ql,
	interpolateRgbBasisClosed: () => Jl,
	interpolateRound: () => lu,
	interpolateString: () => au,
	interpolateTransformCss: () => _u,
	interpolateTransformSvg: () => vu,
	interpolateZoom: () => Cu,
	piecewise: () => Pu,
	quantize: () => Fu
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function Lu(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function Ru(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var zu = [0, 1];
function J(e) {
	return e;
}
function Bu(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Lu(isNaN(t) ? NaN : .5);
}
function Vu(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Hu(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Bu(i, r), a = n(o, a)) : (r = Bu(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Uu(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Bu(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = re(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Wu(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Gu() {
	var e = zu, t = zu, n = ou, r, i, a, o = J, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== J && (o = Vu(e[0], e[n - 1])), s = n > 2 ? Uu : Hu, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), q))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Ru), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = lu, u();
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
function Ku() {
	return Gu()(J, J);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function qu(e, t, n, r) {
	var i = be(e, t, n), a;
	switch (r = Pe(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Xe(i, o)) && (r.precision = a), qe(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Ze(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = Ye(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return Ke(r);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function Ju(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return ve(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return qu(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = ye(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Yu() {
	var e = Ku();
	return e.copy = function() {
		return Wu(e, Yu());
	}, U.apply(e, arguments), Ju(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Xu(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, Ru), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Xu(e).unknown(t);
	}, e = arguments.length ? Array.from(e, Ru) : [0, 1], Ju(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function Zu(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Qu(e) {
	return Math.log(e);
}
function $u(e) {
	return Math.exp(e);
}
function ed(e) {
	return -Math.log(-e);
}
function td(e) {
	return -Math.exp(-e);
}
function nd(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function rd(e) {
	return e === 10 ? nd : e === Math.E ? Math.exp : (t) => e ** +t;
}
function id(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function ad(e) {
	return (t, n) => -e(-t, n);
}
function od(e) {
	let t = e(Qu, $u), n = t.domain, r = 10, i, a;
	function o() {
		return i = id(r), a = rd(r), n()[0] < 0 ? (i = ad(i), a = ad(a), e(ed, td)) : e(Qu, $u), t;
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
			m.length * 2 < p && (m = ve(o, s, p));
		} else m = ve(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = Pe(n)).precision == null && (n.trim = !0), n = Ke(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Zu(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function sd() {
	let e = od(Gu()).domain([1, 10]);
	return e.copy = () => Wu(e, sd()).base(e.base()), U.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function cd(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function ld(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function ud(e) {
	var t = 1, n = e(cd(t), ld(t));
	return n.constant = function(n) {
		return arguments.length ? e(cd(t = +n), ld(t)) : t;
	}, Ju(n);
}
function dd() {
	var e = ud(Gu());
	return e.copy = function() {
		return Wu(e, dd()).constant(e.constant());
	}, U.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function fd(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function pd(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function md(e) {
	return e < 0 ? -e * e : e * e;
}
function hd(e) {
	var t = e(J, J), n = 1;
	function r() {
		return n === 1 ? e(J, J) : n === .5 ? e(pd, md) : e(fd(n), fd(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Ju(t);
}
function gd() {
	var e = hd(Gu());
	return e.copy = function() {
		return Wu(e, gd()).exponent(e.exponent());
	}, U.apply(e, arguments), e;
}
function _d() {
	return gd.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function vd() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Ee(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[re(n, e)];
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
		return vd().domain(e).range(t).unknown(r);
	}, U.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function yd() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[re(r, e, 0, n)] : a;
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
		return yd().domain([e, t]).range(i).unknown(a);
	}, U.apply(Ju(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function bd() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[re(e, i, 0, r)] : n;
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
		return bd().domain(e).range(t).unknown(n);
	}, U.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function xd(e) {
	return new Date(e);
}
function Sd(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Cd(e, t, n, r, i, a, o, s, c, l) {
	var u = Ku(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function ee(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Sd)) : f().map(xd);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ee : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Zu(n, e)) : u;
	}, u.copy = function() {
		return Wu(u, Cd(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function wd() {
	return U.apply(Cd(Rt, zt, Nt, jt, gt, ft, ut, ct, st, Er).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function Td() {
	return U.apply(Cd(It, Lt, Pt, Mt, wt, pt, dt, lt, st, Or).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function Ed() {
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
	return l.range = u(ou), l.rangeRound = u(lu), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function Dd(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Od() {
	var e = Ju(Ed()(J));
	return e.copy = function() {
		return Dd(e, Od());
	}, yc.apply(e, arguments);
}
function kd() {
	var e = od(Ed()).domain([1, 10]);
	return e.copy = function() {
		return Dd(e, kd()).base(e.base());
	}, yc.apply(e, arguments);
}
function Ad() {
	var e = ud(Ed());
	return e.copy = function() {
		return Dd(e, Ad()).constant(e.constant());
	}, yc.apply(e, arguments);
}
function jd() {
	var e = hd(Ed());
	return e.copy = function() {
		return Dd(e, jd()).exponent(e.exponent());
	}, yc.apply(e, arguments);
}
function Md() {
	return jd.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function Nd() {
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
			return arguments.length ? ([n, r, i] = t, l = Pu(e, [
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
	return p.range = m(ou), p.rangeRound = m(lu), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Pd() {
	var e = Ju(Nd()(J));
	return e.copy = function() {
		return Dd(e, Pd());
	}, yc.apply(e, arguments);
}
function Fd() {
	var e = od(Nd()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Dd(e, Fd()).base(e.base());
	}, yc.apply(e, arguments);
}
function Id() {
	var e = ud(Nd());
	return e.copy = function() {
		return Dd(e, Id()).constant(e.constant());
	}, yc.apply(e, arguments);
}
function Ld() {
	var e = hd(Nd());
	return e.copy = function() {
		return Dd(e, Ld()).exponent(e.exponent());
	}, yc.apply(e, arguments);
}
function Rd() {
	return Ld.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function zd(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Bd = zd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Vd = zd("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Hd = zd("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Ud = zd("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Wd = zd("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Gd = zd("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Kd = zd("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), qd = zd("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Jd = zd("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Yd = zd("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function Xd(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Zd = "identity", Qd = "linear", $d = "sqrt", ef = "symlog", tf = "time", nf = "sequential", rf = "diverging", af = "quantile", of = "quantize", sf = "threshold", cf = "ordinal", lf = "point", uf = "band", df = "bin-ordinal", Y = "continuous", ff = "discrete", pf = "discretizing", X = "interpolating", mf = "temporal";
function hf(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function gf(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function _f() {
	let e = xc().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function u() {
		let e = t().length, u = r[1] < r[0], d = r[1 - u], f = Xd(e, s, c), p = r[u - 0];
		i = (d - p) / (f || 1), o && (i = Math.floor(i)), p += (d - p - i * (e - s)) * l, a = i * (1 - s), o && (p = Math.round(p), a = Math.round(a));
		let m = De(e).map((e) => p + i * e);
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
		if (!(c !== c || l !== l) && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, re(o, c) - 1), d = c === l ? u : re(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return _f().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, u();
}
function vf(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return vf(t());
	}, e;
}
function yf() {
	return vf(_f().paddingInner(1));
}
var bf = Array.prototype.map;
function xf(e) {
	return bf.call(e, p);
}
var Sf = Array.prototype.slice;
function Cf() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(re(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = xf(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = Sf.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return qu(e[0], f(e), t ?? 10, n);
	}, n.copy = function() {
		return Cf().domain(n.domain()).range(n.range());
	}, n;
}
var wf = /* @__PURE__ */ new Map(), Tf = Symbol("vega_scale");
function Ef(e) {
	return e[Tf] = !0, e;
}
function Df(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? hf(n) : n.invertExtent ? gf(n) : void 0, n.type = e, Ef(n);
	};
	return r.metadata = y(m(n)), r;
}
function Z(e, t, n) {
	return arguments.length > 1 ? (wf.set(e, Df(e, t, n)), this) : Of(e) ? wf.get(e) : void 0;
}
Z(Zd, Xu), Z(Qd, Yu, Y), Z("log", sd, [Y, "log"]), Z("pow", gd, Y), Z($d, _d, Y), Z(ef, dd, Y), Z(tf, wd, [Y, mf]), Z("utc", Td, [Y, mf]), Z(nf, Od, [Y, X]), Z(`${nf}-${Qd}`, Od, [Y, X]), Z(`${nf}-log`, kd, [
	Y,
	X,
	"log"
]), Z(`${nf}-pow`, jd, [Y, X]), Z(`${nf}-${$d}`, Md, [Y, X]), Z(`${nf}-${ef}`, Ad, [Y, X]), Z(`${rf}-${Qd}`, Pd, [Y, X]), Z(`${rf}-log`, Fd, [
	Y,
	X,
	"log"
]), Z(`${rf}-pow`, Ld, [Y, X]), Z(`${rf}-${$d}`, Rd, [Y, X]), Z(`${rf}-${ef}`, Id, [Y, X]), Z(af, vd, [pf, af]), Z(of, yd, pf), Z(sf, bd, pf), Z(df, Cf, [ff, pf]), Z(cf, xc, ff), Z(uf, _f, ff), Z(lf, yf, ff);
function Of(e) {
	return wf.has(e);
}
function kf(e, t) {
	let n = wf.get(e);
	return n && n.metadata[t];
}
function Af(e) {
	return kf(e, Y);
}
function jf(e) {
	return kf(e, ff);
}
function Mf(e) {
	return kf(e, pf);
}
function Nf(e) {
	return kf(e, "log");
}
function Pf(e) {
	return kf(e, X);
}
function Ff(e, t) {
	let n = t[0], r = f(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function If(e, t, n) {
	return Pu(Rf(t || "rgb", n), e);
}
function Lf(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function Rf(e, t) {
	let n = Iu[zf(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function zf(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var Bf = {
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
}, Vf = {
	accent: Vd,
	category10: Bd,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: Hd,
	observable10: Ud,
	paired: Wd,
	pastel1: Gd,
	pastel2: Kd,
	set1: qd,
	set2: Jd,
	set3: Yd,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Hf(e) {
	if (u(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function Uf(e, t) {
	for (let n in e) Gf(n, t(e[n]));
}
var Wf = {};
Uf(Vf, Hf), Uf(Bf, (e) => If(Hf(e)));
function Gf(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (Wf[e] = t, this) : Wf[e];
}
//#endregion
//#region ../../node_modules/flatqueue/index.js
var Kf = class {
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
}, qf = Symbol("runtimeNode"), Jf = 1e6;
function Yf(e) {
	return e ? (t, n) => {
		e.addDisposer(t, n);
	} : () => void 0;
}
function Xf(e, t) {
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
	return Object.defineProperty(n, qf, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(n, { set(e) {
		t(e);
	} }) : n;
}
function Zf(e) {
	let t = e[qf];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function Qf(e) {
	return typeof e.rank == "number" ? e.rank : Zf(e).rank;
}
function $f(e) {
	for (let t of e) t();
}
var ep = class {
	#e = 1;
	#t = 1;
	#n = 0;
	#r = !1;
	#i = !1;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s = new Kf();
	#c = new Kf();
	#l = /* @__PURE__ */ new Set();
	#u;
	constructor(e = {}) {
		this.#u = Yf(e.lifecycleRegistry);
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
		}), Xf(s, (e) => {
			if (s.disposed) throw Error("Cannot set disposed parameter \"" + t + "\" (" + a + ").");
			e !== s.value && (s.value = e, o && ($f(s.listeners), this.#m()));
		});
	}
	computed(e, t, n, r) {
		let i = n.reduce((e, t) => Math.max(e, Qf(t)), 0), a = {
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
		}), Xf(a);
	}
	effect(e, t, n) {
		let r = t.reduce((e, t) => Math.max(e, Qf(t)), 0), i = {
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
						r !== n && (t.value = r, $f(t.listeners));
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
		let t = this.#t % Jf;
		return this.#t += 1, e * Jf + t;
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
}, tp = class {
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
}, np = class {
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
		H(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t)) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		H(t);
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
function rp(e, t = {}, n = {}) {
	return Us(e, t, n);
}
//#endregion
//#region ../core/src/paramRuntime/expressionRef.js
function ip(e, t, n = {}) {
	let r = {}, i = rp(e, r, n), a = /* @__PURE__ */ new Map();
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
var ap = class {
	#e = new tp();
	#t = new ep({ lifecycleRegistry: this.#e });
	#n = new np();
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
		let { expression: i, dependencies: a } = ip(n, (t) => this.resolve(e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = ip(t, (t) => this.resolve(e, t), n);
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
}, op = (e) => new Promise((t) => setTimeout(t, e));
function sp() {
	return { canceled: !1 };
}
function cp(e) {
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
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : op(e.delay).then(i) : i();
}
//#endregion
//#region ../core/src/utils/animator.js
var lp = class {
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
		return cp({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function up(e, t, n, r, i) {
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
		l = n, e.transitionsEnabled === !1 ? (c = l, o = !0, s = !1, e.cancelTransition(d), t(c)) : o && (o = !1, a = dp(), d(a));
	}
	return p.stop = () => {
		o = !0, s = !1, e.cancelTransition(d);
	}, p.snap = (e) => {
		l = e, c = e, p.stop(), t(c);
	}, p;
}
function dp() {
	let e = globalThis.document?.timeline?.currentTime;
	return typeof e == "number" ? e : performance.now();
}
//#endregion
//#region ../core/src/paramRuntime/viewParamRuntime.js
var fp = class {
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
		i ? (this.#e = i.#e, this.#t = this.#e.createScope(i.#t)) : (this.#e = new ap(), this.#t = this.#e.createScope());
	}
	registerParam(e) {
		let t = e.name;
		if (H(t), this.#i.has(t)) throw Error("Parameter \"" + t + "\" already registered in this scope.");
		mp(e);
		let n, r;
		if (e.push == "outer") {
			let i = this.findRuntimeForParam(t);
			if (!i) throw Error(`Parameter "${t}" not found in outer scope!`);
			let a = i.paramConfigs.get(t);
			if (!a) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in a || "select" in a || "ruler" in a) throw Error(`The outer parameter "${t}" must not have expr, select, or ruler properties!`);
			n = (e) => {
				i.setValue(t, e);
			}, this.#n.set(t, n), "ruler" in e && (r = hc(e, this), n(r));
		} else if ("value" in e) r = hc(e, this), n = "transition" in e ? this.#f(t, r, e.transition) : this.#d(t, r);
		else if ("expr" in e) {
			if ("transition" in e) this.#p(t, e.expr, e.transition);
			else {
				let n = this.#e.registerDerived(this.#t, t, e.expr, { resolveScaleResolution: this.#s });
				this.#r.set(t, n);
			}
			n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = hc(e, this), n = this.#d(t, r);
		if ("select" in e) {
			if (r ??= hc(e, this), !this.#n.has(t)) {
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
		if (H(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#r.set(e, r);
		let i = (e) => {
			r.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, i), i;
	}
	setValue(e, t, n) {
		H(e);
		let r = this.#n.get(e);
		if (!r) throw Error("Writable parameter not found in this scope: " + e);
		r(t, n);
	}
	getValue(e) {
		return this.#r.get(e)?.get();
	}
	getTargetValue(e) {
		return H(e), this.#a.get(e)?.target ?? this.getValue(e);
	}
	subscribe(e, t) {
		H(e);
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
		return H(e), this.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return H(e), this.#i.has(e) ? !0 : this.#o()?.hasConfiguredParamInScopeChain(e) ?? !1;
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
				kind: pp(r),
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
		let r = hp(e, t), i = this.#e.registerBase(this.#t, e, r);
		this.#r.set(e, i);
		let a = this.#c;
		if (!a) throw Error(`The parameter "${e}" uses transition but no animator is available.`);
		let o = up(a, ({ value: e }) => {
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
		let i = hp(e, n);
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
		for (let e of this.#i.values()) if (pc(e)) {
			let t = e.select;
			if (xi(t)) {
				if (t == "point") return !0;
			} else if (t.type == "point") return !0;
		}
		return !1;
	}
};
function pp(e) {
	return e ? e.push === "outer" ? "push" : "select" in e ? "selection" : "ruler" in e ? "ruler" : "expr" in e ? "derived" : "base" : "auto";
}
function mp(e) {
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
function hp(e, t) {
	if (typeof t != "number" || !Number.isFinite(t)) throw Error(`Transitioned parameter "${e}" must have a finite numeric value.`);
	return t;
}
//#endregion
//#region ../core/src/view/layout/flexLayout.js
function gp(e, t, { spacing: n, devicePixelRatio: r, offset: i, reverse: a } = {}) {
	n ||= 0, i ||= 0;
	let o = Ep(e, t, n), s = 0, c = 0;
	for (let t = 0; t < e.length; t++) s += o[t], Sp(e[t]) || c++;
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
	if (e.length == 1 && Sp(e[0])) return [{
		location: m,
		size: 0
	}];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Sp(r)) d++;
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
function _p(e) {
	let t = 0, n = 0, r = 0, i, a = !0;
	for (let o of e) {
		t = Math.max(t, o.px ?? 0), n = Math.max(n, o.grow ?? 0), r = Math.max(r, Ap(o));
		let e = jp(o);
		e === void 0 ? a = !1 : i = i === void 0 ? e : Math.max(i, e);
	}
	return Pp({
		px: t,
		grow: n,
		minPx: r,
		maxPx: a ? i : void 0
	});
}
function vp(e) {
	let t = {
		px: 0,
		grow: 0,
		minPx: 0,
		maxPx: 0
	}, n = !0;
	for (let r of e) {
		t.px += Q(r.px), t.grow += Q(r.grow), t.minPx += Ap(r);
		let e = jp(r);
		e === void 0 ? n = !1 : t.maxPx += e;
	}
	return n || delete t.maxPx, Pp(t);
}
var yp = class e {
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
		return new e(Np(this.width, t), Np(this.height, n));
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, bp = Object.freeze({
	px: 0,
	grow: 0
}), xp = new yp(bp, bp);
function Sp(e) {
	return !e.px && !e.grow && !e.minPx;
}
function Cp(e, t) {
	return !e || !t ? !1 : e.px === t.px && e.grow === t.grow && e.minPx === t.minPx && e.maxPx === t.maxPx;
}
function Q(e) {
	return e || 0;
}
function wp(e) {
	return e && (yi(e.px) || yi(e.grow) || yi(e.minPx) || yi(e.maxPx));
}
function Tp(e) {
	if (Dm(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (wp(e)) return Op(e), Pp(e);
	if (yi(e)) return {
		px: e,
		grow: 0
	};
	if (e === "container" || !e) return {
		px: 0,
		grow: 1
	};
	throw Error(`Invalid sizeDef: ${e}`);
}
function Ep(e, t, n) {
	let r = !1;
	for (let t of e) Op(t), r ||= Mp(t);
	if (!r) return Dp(e, t, n);
	let i = Array(e.length).fill(0), a = [];
	for (let t = 0; t < e.length; t++) Sp(e[t]) || a.push(t);
	let o = Math.max(0, a.length - 1) * n, s = Math.max(0, t - o), c = /* @__PURE__ */ new Set();
	for (let t of a) {
		let n = e[t];
		Q(n.grow) || (i[t] = kp(Q(n.px), n), c.add(t));
	}
	for (;;) {
		let t = 0, n = 0, r = 0;
		for (let o of a) c.has(o) ? r += i[o] : (t += Q(e[o].px), n += Q(e[o].grow));
		if (!n) {
			for (let t of a) c.has(t) || (i[t] = kp(Q(e[t].px), e[t]), c.add(t));
			break;
		}
		let o = Math.max(0, s - r - t), l = 0, u = [], d = [];
		for (let t of a) {
			if (c.has(t)) continue;
			let r = e[t], a = Q(r.px) + Q(r.grow) / n * o, s = kp(a, r);
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
function Dp(e, t, n) {
	let r = 0, i = 0;
	for (let t of e) r += Q(t.px) + (Sp(t) ? 0 : n), i += Q(t.grow);
	r -= n;
	let a = Math.max(0, t - r), o = Array(e.length);
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		o[t] = Sp(n) ? 0 : Q(n.px) + (i ? Q(n.grow) / i * a : 0);
	}
	return o;
}
function Op(e) {
	if (e.minPx !== void 0 && e.maxPx !== void 0 && e.minPx > e.maxPx) throw Error("SizeDef minPx cannot be greater than maxPx.");
}
function kp(e, t) {
	return Math.min(Math.max(e, t.minPx ?? 0), t.maxPx ?? Infinity);
}
function Ap(e) {
	return kp(Q(e.px), e);
}
function jp(e) {
	return e.maxPx ?? (Q(e.grow) ? void 0 : Ap(e));
}
function Mp(e) {
	return e.minPx !== void 0 || e.maxPx !== void 0;
}
function Np(e, t) {
	return Pp({
		px: (e.px ?? 0) + t,
		grow: e.grow,
		minPx: e.minPx === void 0 ? void 0 : Math.max(0, e.minPx + t),
		maxPx: e.maxPx === void 0 ? void 0 : Math.max(0, e.maxPx + t)
	});
}
function Pp(e) {
	let t = {}, n = e.px !== void 0, r = e.grow !== void 0, i = Mp(e);
	return e.px ? t.px = e.px : e.px === 0 && (t.px = 0), e.grow ? t.grow = e.grow : e.grow === 0 ? t.grow = 0 : !n && !r && i && (t.grow = 1), e.minPx && e.minPx > Q(e.px) && (t.minPx = e.minPx), e.maxPx !== void 0 && (Q(t.grow) || e.maxPx < Q(e.px)) && (t.maxPx = e.maxPx), t;
}
//#endregion
//#region ../core/src/view/layout/padding.js
var Fp = class e {
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
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : Lp;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return Lp;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
};
function Ip(e, t) {
	return t ? new Fp(t.top === !1 ? 0 : e.top, t.right === !1 ? 0 : e.right, t.bottom === !1 ? 0 : e.bottom, t.left === !1 ? 0 : e.left) : e;
}
var Lp = Fp.createUniformPadding(0);
Object.freeze(Lp);
//#endregion
//#region ../core/src/utils/propertyCacher.js
var Rp = Symbol("cacheMap");
function zp(e, t, n) {
	let r = Up(e).get(t);
	return r === void 0 && (r = n(t), Up(e).set(t, r)), r;
}
function Bp(e, t) {
	Up(e).delete(t);
}
function Vp(e, t) {
	let n = Up(e);
	for (let e of n.keys()) e.startsWith(t) && n.delete(e);
	Up(e).delete(t);
}
function Hp(e) {
	e[Rp] = /* @__PURE__ */ new Map();
}
function Up(e) {
	return e[Rp] || Hp(e), e[Rp];
}
//#endregion
//#region ../core/src/utils/url.js
var Wp = /^([A-Za-z]+:)?\/\//;
function Gp(e, t) {
	if (t && Wp.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return qp(n) + t;
}
function Kp(e, t, n = Jp()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		} else if (n) return new URL(t, n).href;
	} catch {}
	return Gp(r, t);
}
function qp(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function Jp() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../core/src/view/viewError.js
var $ = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ViewError", this.view = t;
	}
};
//#endregion
//#region ../core/src/utils/addBaseUrl.js
function Yp(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function Xp(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region ../core/src/config/mergeConfig.js
function Zp(e) {
	return Kr(e) && !Array.isArray(e);
}
function Qp(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = $p(r);
	return t;
}
function $p(e) {
	return Array.isArray(e) ? e.map($p) : Zp(e) ? Qp(e) : e;
}
function em(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		Zp(r) && Zp(t) ? em(t, r) : e[n] = $p(r);
	}
	return e;
}
function tm(e) {
	let t = {};
	for (let n of e) n && em(t, n);
	return t;
}
//#endregion
//#region ../core/src/view/renderingContext/clipOptions.js
function nm(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function rm(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function im(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function am(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function om(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return im(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function sm(e, t) {
	if (e === !0) return im(t, !0, !0);
	if (e === "x") return im(t, !0, !1);
	if (e === "y") return im(t, !1, !0);
}
function cm(e, t, n) {
	if (t !== "never") return om(e, sm(t, n));
}
//#endregion
//#region ../core/src/view/viewChrome.js
var lm = /* @__PURE__ */ new WeakMap();
function um(e, t) {
	lm.set(e, t);
}
function dm(e) {
	return lm.get(e);
}
function fm(e) {
	return lm.has(e);
}
function pm(e) {
	let t = e;
	for (; t;) {
		let n = lm.get(t);
		if (n === "excludeSubtree" || t === e && n === "exclude") return !0;
		t = t.layoutParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/view/postScaleParams.js
var mm = /* @__PURE__ */ new WeakMap();
function hm(e, t) {
	mm.set(e, t);
}
function gm(e) {
	return mm.get(e);
}
//#endregion
//#region ../core/src/data/namedDataScope.js
var _m = class {
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
}, vm = class {
	view;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	constructor(e) {
		this.view = e;
		for (let [t, n] of Object.entries(e.spec.datasets ?? {})) this.#e.set(t, new _m(t, e, () => n));
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
		return r || (r = new _m(e, void 0, () => this.view.context.getNamedDataFromProvider(e)), this.#t.set(e, r)), r;
	}
	dispose() {
		for (let e of this.#e.values()) e.dispose();
		this.#e.clear();
		for (let e of this.#t.values()) e.dispose();
		this.#t.clear();
	}
}, ym = "VISIT_SKIP", bm = "VISIT_STOP", xm = (e) => e, Sm = class {
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
	opacityFunction = xm;
	#f = [];
	#p = "none";
	#m = /* @__PURE__ */ new Map();
	facetCoords = new ae([], JSON.stringify);
	constructor(e, t, n, r, i, a = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, this.#t = i, this.spec = e, this.namedDataScope = new vm(this), r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let o = r ? r.getConfigScopes() : [t.getBaseConfig()], s = e.config;
		if (this.#e = [...o, s].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {},
			legend: {}
		}, Hp(this), this.options = {
			inheritEncoding: !1,
			layoutSizeParams: "own",
			...a
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new fp(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e), t.animator, { snapTransitionedUpdates: !0 }), e.params) {
			let t = /* @__PURE__ */ new Set();
			for (let n of e.params) {
				if ("expr" in n) {
					let { usesScaleHelper: e, globals: r } = Fs(n.expr), i = r.some((e) => t.has(e));
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
	get defaultName() {
		return this.#t;
	}
	getConfig() {
		return tm(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return V(e) ? this.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		V(n) && this.paramRuntime.watchExpression(n.expr, e, {
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
		return this._cache("size/padding", () => Fp.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return Fp.zero();
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new yp(this.#g("width"), this.#g("height")) : xp);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return xp;
		let e = this.getSize();
		return new yp(this.#g("viewportWidth") ?? e.width, this.#g("viewportHeight") ?? e.height);
	}
	#g(e) {
		let { value: t, implicit: n } = this.#_(e), r = this.resolveSizeValue(e, t), i = Dm(r), a = e == "viewportWidth" || e == "viewportHeight";
		if (i) {
			if (a) throw new $(`Cannot use step-based size with "${e}"!`, this);
			let t = this.#x(e, r), i = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (i) {
				let n;
				if (jf(i.type)) n = i.domain().length;
				else if (["locus", "index"].includes(i.type)) {
					let e = i.domain();
					n = Nr(e) - e[0];
				} else throw new $(`Cannot use step-based size with "${i.type}" scale!`, this);
				let a = i;
				n = Xd(n, a.paddingInner(), a.paddingOuter());
				let o = e == "width" ? "xOffset" : "yOffset", s = this.getScaleResolution(o)?.getScale(), c = r.for ?? (s && jf(s.type) ? "offset" : "position"), l = t;
				if (c == "offset") {
					if (!s || !jf(s.type)) throw new $(`Cannot use ${e}.step.for = "offset" without a discrete ${o} scale!`, this);
					let t = s, n = Xd(s.domain().length, t.paddingInner(), t.paddingOuter());
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
			else throw new $(`Cannot use step-based size with "${e}"!`, this);
		} else return (r && Tp(r)) ?? (a ? void 0 : {
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
		if (pm(this)) return;
		let t = this.getConfig().view;
		if (!t) return;
		let n = e == "width" ? "x" : "y", r = this.getScaleResolution(n)?.getResolvedScaleType();
		return r && !jf(r) ? e == "width" ? t.continuousWidth : t.continuousHeight : (e == "width" ? t.discreteWidth : t.discreteHeight) ?? (t.step === void 0 ? void 0 : { step: t.step });
	}
	resolveSizeValue(e, t) {
		if (!V(t)) return t;
		let n = this.#C(e)();
		if (Om(n) || n === "container") return n;
		throw new $(`"${e}" ExprRef must resolve to a finite number or "container"!`, this);
	}
	registerSizeInvalidation() {
		this.#y("width", "x"), this.#y("height", "y"), this.#b("width"), this.#b("height"), this.#b("viewportWidth"), this.#b("viewportHeight");
	}
	#y(e, t) {
		let { value: n, implicit: r } = this.#_(e);
		if (!Dm(n)) return;
		let i = this.getScaleResolution(t);
		if (!i) {
			if (r) return;
			throw new $("Cannot use 'step' size without a scale!", this);
		}
		let a = () => {
			let t = this.getSize()[e];
			this.invalidateSizeCache();
			let n = this.getSize()[e];
			Cp(t, n) || this.context.requestLayoutReflow();
		};
		if (i.addEventListener("domain", a), this.registerDisposer(() => i.removeEventListener("domain", a)), n.for != "position") {
			let t = e == "width" ? "xOffset" : "yOffset", n = this.getScaleResolution(t);
			n && jf(n.getResolvedScaleType()) && (n.addEventListener("domain", a), this.registerDisposer(() => n.removeEventListener("domain", a)));
		}
	}
	#b(e) {
		let { value: t } = this.#_(e);
		V(t) ? this.#S(e, t.expr) : Dm(t) && V(t.step) && this.#S(e + ".step", t.step.expr);
	}
	#x(e, t) {
		let n = V(t.step) ? this.#C(e + ".step")() : t.step;
		if (Om(n)) return n;
		throw new $(`"${e}.step" ExprRef must resolve to a finite number!`, this);
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
		if (!t) throw new $(`"${e}" ExprRef was not registered before layout!`, this);
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
		let e = [...this.#d, ...gm(this.spec) ?? []];
		if (e.length && !this.#u) {
			this.#u = !0, this.#l = !1;
			for (let t of e) this.paramRuntime.registerParam(t);
			this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				this.#l = !0, this.#T();
			}));
		}
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === xm) && (this.opacityFunction = wm(this));
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
		if (n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, am(t, nm(n))), this.#a || this.#o) {
			let e = this.getOverhang(), n = this.layoutParent ? Fp.zero() : this.getPadding();
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
		return ta(t) ? [t.field] : this.options.inheritEncoding ? this.layoutParent?.getFacetFields(this) : [];
	}
	getSampleFacetTexture() {}
	getParentGridChromePolicy() {
		return {
			axes: !0,
			background: !0
		};
	}
	getScaleResolution(e) {
		let t = wa(e);
		return this.getDataAncestors().map((e) => e.resolutions.scale[t]).find((e) => e);
	}
	getAxisResolution(e) {
		let t = wa(e);
		return this.getDataAncestors().map((e) => e.resolutions.axis[t]).find((e) => e);
	}
	getLegendResolution(e) {
		let t = wa(e);
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
		return Gp(() => this.dataParent?.getBaseUrl(), Xp(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return xi(e) ? e : V(e.text) ? this.paramRuntime.evaluateAndGet(e.text.expr) : e.text;
	}
	_cache(e, t) {
		return zp(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				Vp(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) Vp(t, e);
				break;
			case "progeny":
				this.visit((t) => Vp(t, e));
				break;
			default:
		}
	}
	invalidateSizeCache() {
		Vp(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function Cm(e) {
	return "unitsPerPixel" in e;
}
function wm(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (yi(t)) return (e) => e * t;
		if (Cm(t)) {
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
			}, r = Em(t.values, "opacity.values", e);
			if (!Gr(t.unitsPerPixel)) throw new $("\"opacity.unitsPerPixel\" must be an array.", e);
			let i = () => 1, a = [], o = () => {
				let t = Tm(Em(a.map((e) => e()), "opacity.unitsPerPixel", e), r, e), n = sd().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				i = (e) => n(e);
			};
			a = t.unitsPerPixel.map((t) => {
				if (V(t)) {
					let n = e.paramRuntime.watchExpression(t.expr, () => {
						o(), e.context.animator.requestRender();
					});
					return () => n(null);
				} else return () => t;
			}), o();
			let s = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return Ci(e.scale.domain()) / t;
			}, c;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) c = () => (s(t) + s(r)) / 2;
				else if (t) c = () => s(t);
				else if (r) c = () => s(r);
				else throw new $("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new $("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				c = () => s(r);
			}
			return (e) => i(c()) * e;
		} else if (V(t)) {
			let n = e.paramRuntime.watchExpression(t.expr, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return (e) => e;
}
function Tm(e, t, n) {
	if (!e.length) throw new $("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new $("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new $("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new $("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function Em(e, t, n) {
	if (!Gr(e)) throw new $("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!yi(e) || !Number.isFinite(e)) throw new $("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var Dm = (e) => !!e && typeof e == "object" && "step" in e;
function Om(e) {
	return typeof e == "number" && Number.isFinite(e);
}
var km = /* @__PURE__ */ new WeakMap(), Am = /* @__PURE__ */ new WeakMap();
function jm(e, t) {
	Nm(e, t, "Import");
}
function Mm(e, t) {
	Nm(e, t, "View");
}
function Nm(e, t, n) {
	if (t !== null && typeof t != "string") throw Error(n + " scope name must be a string or null.");
	km.set(e, { name: t });
}
function Pm(e) {
	return km.get(e);
}
function Fm(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Am.set(e, n);
}
function Im(e, t = {}) {
	um(e, t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude");
}
function Lm(e) {
	return e.getLayoutAncestors().some(fm);
}
function Rm(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = km.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function zm(e) {
	let t = e.explicitName;
	if (!t) throw Error("Cannot build a selector for a view without a name.");
	return {
		scope: Rm(e),
		view: t
	};
}
function Bm(e, t) {
	if (!t) throw Error("Cannot build a selector for a parameter without a name.");
	return {
		scope: Rm(e),
		param: t
	};
}
function Vm(e) {
	return Ym(e), "p:" + JSON.stringify({
		scope: e.scope,
		param: e.param
	});
}
function Hm(e, t) {
	e.visit((e) => {
		let n = dm(e);
		if (n === "excludeSubtree") return ym;
		if (n !== "exclude") return t(e);
	});
}
function Um(e, t) {
	e.visit((e) => {
		let n = Am.get(e);
		if (n === "excludeSubtree") return ym;
		if (n !== "exclude") return t(e);
	});
}
function Wm(e, t) {
	if (Xm(t), !ah(e, t.scope)) return;
	let n = [];
	if (oh(e, t.scope, (e) => {
		e.explicitName === t.view && n.push(e);
	}, { includeNamedImportRoots: !0 }), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("View selector is ambiguous for view \"" + t.view + "\" in scope " + JSON.stringify(t.scope));
}
function Gm(e, t) {
	if (Ym(t), !ah(e, t.scope)) return;
	let n = [];
	if (oh(e, t.scope, (e) => {
		for (let [r, i] of e.paramRuntime.paramConfigs) r === t.param && Zm(i) && n.push({
			view: e,
			param: i
		});
	}), n.length === 1) return n[0];
	if (n.length !== 0) throw Error("Param selector is ambiguous for param \"" + t.param + "\" in scope " + JSON.stringify(t.scope));
}
function Km(e, t) {
	e.visit((e) => {
		let n = Am.get(e);
		if (n === "excludeSubtree") return ym;
		if (n !== "exclude") for (let [n, r] of e.paramRuntime.paramConfigs) Zm(r) && t({
			view: e,
			param: r,
			selector: Bm(e, n)
		});
	});
}
function qm(e) {
	let t = [];
	return Km(e, (e) => t.push(e)), t;
}
function Jm(e) {
	let t = [];
	for (let n of Qm(e)) {
		let r = $m(n);
		th(e, r, t), nh(e, r, t);
	}
	return t;
}
function Ym(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("Param selector scope must be an array.");
	if (typeof e.param != "string" || !e.param.length) throw Error("Param selector param must be a non-empty string.");
}
function Xm(e) {
	if (!e || !Array.isArray(e.scope)) throw Error("View selector scope must be an array.");
	if (typeof e.view != "string" || !e.view.length) throw Error("View selector view must be a non-empty string.");
}
function Zm(e) {
	return e.persist === !1 ? !1 : pc(e) ? !0 : fc(e) ? !!e.bind : !1;
}
function Qm(e) {
	let t = /* @__PURE__ */ new Set([e]);
	return e.visit((e) => {
		let n = km.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function $m(e) {
	return Rm(e);
}
function eh(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function th(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	oh(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!Zm(n)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + eh(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function nh(e, t, n) {
	let r = rh(e, t);
	if (!r.length) return;
	let i = r.filter((e) => ih(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = km.get(e), n = t ? t.name : void 0;
		typeof n != "string" || !n.length || a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + eh(t) + ".",
		scope: t
	});
}
function rh(e, t) {
	let n = [];
	return oh(e, t, (e) => {
		if (Rm(e).length !== t.length + 1) return;
		let r = km.get(e);
		!r || typeof r.name != "string" || n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function ih(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Am.get(e);
		if (n === "excludeSubtree") return ym;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (Zm(n)) return t = !0, bm;
		}
	}), t;
}
function ah(e, t) {
	let n = e, r = [];
	for (let i of t) {
		if (typeof i != "string" || !i.length) throw Error("Scope names must be non-empty strings.");
		let t, a = !1;
		if (oh(e, r, (e) => {
			let n = km.get(e);
			if (!(!n || n.name !== i) && Rm(e).length === r.length + 1) {
				if (t) return a = !0, bm;
				t = e;
			}
		}, { includeNamedImportRoots: !0 }), a) throw Error("Multiple import instances named \"" + i + "\" in scope.");
		if (t) n = t, r.push(i);
		else return;
	}
	return n;
}
function oh(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = km.get(e), a = Am.get(e);
		if (a === "excludeSubtree") return ym;
		if (a !== "exclude" && sh(e, t, r, i)) return n(e);
	});
}
function sh(e, t, n, r) {
	let i = Rm(e);
	return ch(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : lh(t, i);
}
function ch(e, t) {
	return e.length === t.length && lh(e, t);
}
function lh(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../core/src/encoder/metadataChannels.js
function uh(e) {
	return fh(e?.key, "key");
}
function dh(e) {
	return fh(e?.search, "search");
}
function fh(e, t) {
	if (!e) return;
	let n = Array.isArray(e) ? e : [e];
	if (n.length === 0) throw Error("The " + t + " channel array must not be empty.");
	let r = [];
	for (let e of n) {
		if (!e || typeof e != "object" || !("field" in e)) throw Error("The " + t + " channel must be a field definition or an array of field definitions.");
		let n = e.field;
		if (typeof n != "string") throw Error("The " + t + " channel field definition must include a string field name.");
		r.push(n);
	}
	return r;
}
//#endregion
//#region ../core/src/view/containerView.js
var ph = class e extends Sm {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
	}
	async initializeChildren() {}
	getNextAutoName(e) {
		let t = this.#e.get(e) ?? 0;
		return this.#e.set(e, t + 1), e + t;
	}
	*[Symbol.iterator]() {}
	visit(e) {
		let t;
		try {
			t = e(this);
		} catch (e) {
			throw e.view = this, e;
		}
		if (t === "VISIT_STOP") return t;
		if (t !== "VISIT_SKIP") {
			e.beforeChildren && e.beforeChildren(this);
			for (let t of this) {
				let n = t.visit(e);
				if (n === "VISIT_STOP") return n;
			}
			e.afterChildren && e.afterChildren(this), e.postOrder && e.postOrder(this);
		}
	}
	findDescendantByPath(t) {
		let n = this;
		for (let r = 0; r < t.length; r++) {
			if (!(n instanceof e)) return;
			let i = n.#t(t[r]);
			if (!i) return;
			if (r === t.length - 1) return i;
			n = i;
		}
	}
	#t(e) {
		for (let t of this) if (t.name === e) return t;
	}
	findDescendantByName(e) {
		let t;
		return this.visit((n) => {
			if (n.name == e) return t = n, bm;
		}), t;
	}
	getDefaultResolution(e, t) {
		return "shared";
	}
}, mh = /* @__PURE__ */ new WeakMap();
function hh(e) {
	let t = mh.get(e);
	return t || (t = new gh(), mh.set(e, t)), t;
}
var gh = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t = /* @__PURE__ */ new Map();
	#n = 0;
	getId(e) {
		let t = this.#e.get(e);
		return t || (t = "view-" + String(this.#n), this.#n++, this.#e.set(e, t), this.#t.set(t, e)), t;
	}
	getView(e) {
		return this.#t.get(e);
	}
};
//#endregion
export { up as $, yi as $n, v as $r, rc as $t, nm as A, Sa as An, Ut as Ar, ou as At, Vp as B, ji as Bn, De as Br, H as Bt, Sm as C, Ea as Cn, Wt as Cr, Pf as Ct, rm as D, _a as Dn, Ht as Dr, Gf as Dt, am as E, aa as En, qt as Er, Z as Et, Gp as F, Ui as Fn, Xe as Fr, V as Ft, _p as G, wi as Gn, ye as Gr, Xs as Gt, Ip as H, Oi as Hn, Ee as Hr, uc as Ht, qp as I, zi as In, Ye as Ir, mc as It, gp as J, pi as Jn, de as Jr, cc as Jt, jp as K, Ir as Kn, be as Kr, Ys as Kt, Kp as L, Ii as Ln, Ke as Lr, pc as Lt, tm as M, da as Mn, Qt as Mr, bc as Mt, Yp as N, ya as Nn, $t as Nr, gc as Nt, om as O, ga as On, Vt as Or, Yu as Ot, $ as P, Ri as Pn, Ze as Pr, hc as Pt, lp as Q, di as Qn, x as Qr, oc as Qt, zp as R, Fi as Rn, qe as Rr, fc as Rt, bm as S, na as Sn, ln as Sr, Mf as St, fm as T, ta as Tn, Yt as Tr, Lf as Tt, yp as U, Ai as Un, Se as Ur, ac as Ut, Fp as V, Ei as Vn, Te as Vr, dc as Vt, bp as W, ki as Wn, xe as Wr, $s as Wt, vp as X, Gr as Xn, ie as Xr, sc as Xt, Tp as Y, Vr as Yn, ae as Yr, nc as Yt, fp as Z, vi as Zn, re as Zr, ic as Zt, Wm as _, Ca as _n, jr as _r, Rf as _t, qm as a, u as ai, qs as an, ri as ar, rf as at, Hm as b, sa as bn, Or as br, Af as bt, Rm as c, a as ci, ks as cn, Hr as cr, lf as ct, Vm as d, oa as dn, oi as dr, nf as dt, _ as ei, tc as en, Kr as er, sp as et, Im as f, ka as fn, si as fr, $d as ft, Gm as g, wa as gn, Nr as gr, Xd as gt, Mm as h, va as hn, Pr as hr, tf as ht, dh as i, d as ii, Ks as in, ni as ir, df as it, cm as j, ea as jn, Bt as jr, Hc as jt, im as k, ha as kn, Jt as kr, lu as kt, zm as l, Ji as ln, Ti as lr, af as lt, jm as m, Zi as mn, Mr as mr, sf as mt, ph as n, h as ni, lc as nn, Si as nr, Kf as nt, Pm as o, c as oi, Js as on, qr as or, Qd as ot, Fm as p, Xi as pn, ci as pr, ef as pt, Ap as q, ui as qn, ve as qr, Zs as qt, uh as r, p as ri, ec as rn, ti as rr, uf as rt, Bm as s, s as si, As as sn, Ci as sr, cf as st, hh as t, g as ti, Qs as tn, xi as tr, cp as tt, Lm as u, ia as un, ai as ur, of as ut, Jm as v, ra as vn, Er as vr, If as vt, hm as w, ca as wn, Kt as wr, Nf as wt, ym as x, Ta as xn, kr as xr, jf as xt, Um as y, Da as yn, Dr as yr, Ff as yt, Bp as z, Mi as zn, Pe as zr, _c as zt };
