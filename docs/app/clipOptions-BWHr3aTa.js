//#region ../../node_modules/vega-util/build/accessor.js
function e(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-util/build/getter.js
function t(e) {
	return e.length === 1 ? n(e[0]) : r(e);
}
var n = (e) => function(t) {
	return t[e];
}, r = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-util/build/error.js
function i(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/splitAccessPath.js
function a(e) {
	let t = [], n = e.length, r = null, a = 0, o = "", s, c, l;
	e += "";
	function u() {
		t.push(o + e.substring(s, c)), o = "", s = c + 1;
	}
	for (s = c = 0; c < n; ++c) if (l = e[c], l === "\\") o += e.substring(s, c++), s = c;
	else if (l === r) u(), r = null, a = -1;
	else if (r) continue;
	else s === a && l === "\"" || s === a && l === "'" ? (s = c + 1, r = l) : l === "." && !a ? c > s ? u() : s = c + 1 : l === "[" ? (c > s && u(), a = s = c + 1) : l === "]" && (a || i("Access path missing open bracket: " + e), a > 0 && u(), a = 0, s = c + 1);
	return a && i("Access path missing closing bracket: " + e), r && i("Access path missing closing quote: " + e), c > s && (c++, u()), t;
}
//#endregion
//#region ../../node_modules/vega-util/build/field.js
function o(n, r, i) {
	let o = a(n), s = o.length === 1 ? o[0] : n;
	return e((i && i.get || t)(o), [s], r || s);
}
o("id");
var s = e((e) => e, [], "identity");
e(() => 0, [], "zero"), e(() => 1, [], "one"), e(() => !0, [], "true"), e(() => !1, [], "false");
//#endregion
//#region ../../node_modules/vega-util/build/interpreter.js
var c = /* @__PURE__ */ new Set([...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"), "__proto__"]), l = Array.isArray;
//#endregion
//#region ../../node_modules/vega-util/build/isObject.js
function u(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/array.js
function d(e) {
	return e == null ? [] : l(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-util/build/isFunction.js
function f(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-util/build/hasOwnProperty.js
function p(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-util/build/isString.js
function m(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-util/build/stringValue.js
function h(e) {
	return l(e) ? `[${e.map((e) => e === null ? "null" : h(e))}]` : u(e) || m(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
//#endregion
//#region ../../node_modules/vega-util/build/toSet.js
function ee(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-array/src/range.js
function g(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatDecimal.js
function te(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function _(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../../node_modules/d3-format/src/exponent.js
function ne(e) {
	return e = _(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatGroup.js
function re(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatNumerals.js
function ie(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatSpecifier.js
var ae = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function v(e) {
	if (!(t = ae.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new y({
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
v.prototype = y.prototype;
function y(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
y.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../../node_modules/d3-format/src/formatTrim.js
function oe(e) {
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
var se;
function b(e, t) {
	var n = _(e, t);
	if (!n) return se = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (se = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + _(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../../node_modules/d3-format/src/formatRounded.js
function ce(e, t) {
	var n = _(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../../node_modules/d3-format/src/formatTypes.js
var le = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: te,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ce(e * 100, t),
	r: ce,
	s: b,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../../node_modules/d3-format/src/identity.js
function ue(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-format/src/locale.js
var de = Array.prototype.map, fe = [
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
function pe(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? ue : re(de.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ue : ie(de.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = v(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, ee = e.comma, g = e.precision, te = e.trim, _ = e.type;
		_ === "n" ? (ee = !0, _ = "g") : le[_] || (g === void 0 && (g = 12), te = !0, _ = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var ne = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : ""), re = (p === "$" ? r : /[%p]/.test(_) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), ie = le[_], ae = /[defgprs%]/.test(_);
		g = g === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
		function y(e) {
			var n = ne, r = re, o, l, p;
			if (_ === "c") r = ie(e) + r, e = "";
			else {
				e = +e;
				var v = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : ie(Math.abs(e), g), te && (e = oe(e)), v && +e == 0 && f !== "+" && (v = !1), n = (v ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (_ === "s" && !isNaN(e) && se !== void 0 ? fe[8 + se / 3] : "") + r + (v && f === "(" ? ")" : ""), ae) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			ee && !m && (e = t(e, Infinity));
			var y = n.length + e.length + r.length, b = y < h ? Array(h - y + 1).join(u) : "";
			switch (ee && m && (e = t(b + e, b.length ? h - r.length : Infinity), b = ""), d) {
				case "<":
					e = n + e + r + b;
					break;
				case "=":
					e = n + b + e + r;
					break;
				case "^":
					e = b.slice(0, y = b.length >> 1) + n + e + r + b.slice(y);
					break;
				default:
					e = b + n + e + r;
					break;
			}
			return a(e);
		}
		return y.toString = function() {
			return e + "";
		}, y;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(ne(t) / 3))) * 3, r = 10 ** -n, i = l((e = v(e), e.type = "f", e), { suffix: fe[8 + n / 3] });
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
var me, he, ge;
_e({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function _e(e) {
	return me = pe(e), he = me.format, ge = me.formatPrefix, me;
}
//#endregion
//#region ../core/src/utils/arrayUtils.js
function ve(e, t) {
	return e.length == t.length && e.every((n, r) => e[r] === t[r]);
}
function ye(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
function be(e) {
	return e[e.length - 1];
}
function xe(e, t, n) {
	if (t < 0 || t >= e.length) throw Error("Source index out of range.");
	if (n < 0 || n > e.length - 1) throw Error("Destination index out of range.");
	let [r] = e.splice(t, 1);
	e.splice(n, 0, r);
}
//#endregion
//#region ../core/node_modules/vega-util/build/vega-util.js
function x(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function Se(e) {
	return e == null ? null : e.fname;
}
function Ce(e) {
	return e == null ? null : e.fields;
}
function we(e) {
	return e.length === 1 ? Te(e[0]) : Ee(e);
}
var Te = (e) => function(t) {
	return t[e];
}, Ee = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function De(e) {
	throw Error(e);
}
function Oe(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || De("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && De("Access path missing closing bracket: " + e), r && De("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function ke(e, t, n) {
	let r = Oe(e);
	return e = r.length === 1 ? r[0] : e, x((n && n.get || we)(r), [e], t || e);
}
ke("id");
var Ae = x((e) => e, [], "identity");
x(() => 0, [], "zero"), x(() => 1, [], "one"), x(() => !0, [], "true"), x(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
var je = Array.isArray;
function Me(e) {
	return e === Object(e);
}
function Ne(e) {
	return e[e.length - 1];
}
function Pe(e) {
	return e == null || e === "" ? null : +e;
}
var Fe = (e) => (t) => e * Math.exp(t), Ie = (e) => (t) => Math.log(e * t), Le = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), Re = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, ze = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function Be(e, t, n, r) {
	let i = n(e[0]), a = n(Ne(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function Ve(e, t) {
	return Be(e, t, Pe, Ae);
}
function He(e, t) {
	var n = Math.sign(e[0]);
	return Be(e, t, Ie(n), Fe(n));
}
function Ue(e, t, n) {
	return Be(e, t, ze(n), ze(1 / n));
}
function We(e, t, n, r, i) {
	let a = r(e[0]), o = r(Ne(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function Ge(e, t, n) {
	return We(e, t, n, Pe, Ae);
}
function Ke(e, t, n) {
	let r = Math.sign(e[0]);
	return We(e, t, n, Ie(r), Fe(r));
}
function qe(e, t, n, r) {
	return We(e, t, n, ze(r), ze(1 / r));
}
function Je(e, t, n, r) {
	return We(e, t, n, Le(r), Re(r));
}
function Ye(e) {
	return e == null ? [] : je(e) ? e : [e];
}
function Xe(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function Ze(e) {
	return typeof e == "function";
}
var Qe = "descending";
function $e(e, t, n) {
	n ||= {}, t = Ye(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || tt;
	return Ye(e).forEach((e, o) => {
		e != null && (r.push(t[o] === Qe ? -1 : 1), i.push(e = Ze(e) ? e : ke(e, null, n)), (Ce(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : x(o(i, r), Object.keys(a));
}
var et = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e), tt = (e, t) => e.length === 1 ? nt(e[0], t[0]) : rt(e, t, e.length), nt = (e, t) => function(n, r) {
	return et(e(n), e(r)) * t;
}, rt = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = et(a(r), a(i));
	return o * t[s];
});
function it(e) {
	return typeof e == "boolean";
}
function at(e) {
	return typeof e == "number";
}
function ot(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function st(e) {
	return typeof e == "string";
}
function ct(e, t) {
	let n = e[0], r = Ne(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function lt(e) {
	return e && Ne(e) - e[0] || 0;
}
function ut(e) {
	return je(e) ? `[${e.map((e) => e === null ? "null" : ut(e))}]` : Me(e) || st(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function dt(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/data/sideInputBinding.js
var ft = class {
	#e;
	#t;
	#n = !1;
	#r = !0;
	#i = [];
	constructor(e) {
		this.#e = e, this.#t = Array.from(new Set(e.dataDependencies), (e) => ({
			collector: e,
			consumed: -1
		}));
		for (let t of this.#t) this.#i.push(t.collector.observe(() => {
			e.parent && e.completed && !this.isReady() && e.areDataDependenciesAvailable() && e.requestRepropagate();
		}));
	}
	dispose() {
		for (let e of this.#i) e();
		this.#i.length = 0;
	}
	reset() {
		this.#n = !1, this.#r = !0;
		for (let e of this.#t) e.consumed = -1;
	}
	consume() {
		if (!this.#e.areDataDependenciesAvailable()) this.#r = !1;
		else if (!this.#n) {
			for (let e of this.#t) e.consumed = e.collector.dataRevision;
			this.#n = !0;
		}
	}
	complete() {
		this.#n || this.consume();
	}
	isReady() {
		return this.#r && this.#n && this.#e.areDataDependenciesAvailable() && this.#t.every(({ collector: e, consumed: t }) => e.dataRevision === t);
	}
}, pt = class {
	stats = {
		count: 0,
		first: null
	};
	#e = !1;
	#t = !1;
	#n = [];
	#r;
	#i;
	paramRuntimeProvider = null;
	get behavior() {
		return 0;
	}
	get domainSensitiveScaleChannels() {
		return [];
	}
	get dataDependencies() {
		return [];
	}
	isDataReady() {
		return this.completed && !this.disposed && (!this.#i || this.#i.isReady());
	}
	areDataDependenciesAvailable() {
		return this.dataDependencies.every((e) => e.completed && !e.disposed);
	}
	consumeDataDependencies() {
		this.#i?.consume();
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
			view: mt(e, this.paramRuntimeProvider),
			domainSensitiveScaleChannels: this.domainSensitiveScaleChannels
		};
	}
	reset() {
		this.#i?.reset(), this.completed = !1;
		for (let e of this.children) e.reset();
		this.stats.count = 0, this.stats.first = null;
	}
	initialize() {}
	initializeOnce() {
		this.#e ||= (this.dataDependencies.length && (this.#i = new ft(this)), this.initialize(), !0);
	}
	#a() {
		this._propagate = Function("children", "stats", g(this.children.length).map((e) => `const child${e} = children[${e}];`).join("\n") + `return function propagate(datum) {
                    if (stats.count === 0) {
                        stats.first = structuredClone(datum);
                    }
                    stats.count++;
                ${g(this.children.length).map((e) => `child${e}.handle(datum);`).join("\n")}
                };`)(this.children, this.stats);
	}
	setParent(e) {
		this.parent = e;
	}
	addChild(e) {
		if (e.parent) throw Error("Cannot add the child! It already has a parent.");
		return this.children.push(e), e.setParent(this), this.#a(), this;
	}
	adopt(e) {
		e.parent && e.parent.removeChild(e), this.addChild(e);
	}
	adoptChildrenOf(e) {
		for (let t of e.children.slice()) this.adopt(t);
	}
	insertAsParent(e) {
		if (this.isRoot()) throw Error("Cannot insert a new parent for a root node!");
		e.parent = this.parent, this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#a(), this.parent = void 0, e.addChild(this);
	}
	removeChild(e) {
		let t = this.children.indexOf(e);
		if (t > -1) this.children.splice(t, 1), e.parent = void 0, this.#a();
		else throw Error("Trying to remove an unknown child node!");
	}
	excise() {
		if (this.isRoot()) throw Error("Cannot excise root node!");
		if (this.isTerminal()) this.parent.removeChild(this);
		else if (this.children.length == 1) {
			let e = this.children[0];
			e.setParent(this.parent), this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#a(), this.setParent(void 0), this.children.length = 0;
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
		this.#i?.complete(), this.completed = !0;
		for (let e of this.children) e.complete();
	}
	registerDisposer(e) {
		this.#t ? e() : this.#n.push(e);
	}
	dispose() {
		if (!this.#t) {
			this.#t = !0, this.#i?.dispose();
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
	get replaySource() {
		if (!this.parent) throw Error("Cannot replay data: no upstream replay source.");
		return this.parent.replaySource;
	}
	get replaysSynchronously() {
		return !1;
	}
	requestRepropagate() {
		let e = this.replaySource, t = this.paramRuntime.updateScheduler;
		e.#r ||= () => {
			e.disposed || (e.replaysSynchronously && e.visit((e) => {
				e.#r && t.cancelUpdate(e.#r);
			}), e.repropagate());
		};
		let n = 0;
		for (let t = e.parent; t; t = t.parent) n++;
		t.requestUpdate(e.#r, n, void 0, () => e.#o());
	}
	#o() {
		let e = /* @__PURE__ */ new Set();
		return this.visit((t) => {
			for (let n of t.dataDependencies) for (let t = n.parent; t; t = t.parent) t !== this && t.#r && e.add(t.#r);
		}), e;
	}
	repropagate() {
		if (this.parent) this.parent.repropagate();
		else throw Error("Cannot repropagate data, no FlowNode with stored data found!");
	}
	_propagate(e) {}
};
function mt(e, t) {
	if ("view" in e) return e.view;
	if (t && "getPathString" in t) return t;
}
function ht(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function gt(e) {
	return e.type == "file";
}
function _t(e) {
	return e.type == "facet";
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var vt = class extends pt {
	#e;
	constructor(e, t) {
		super(t), this.#e = e.type;
	}
	get label() {
		return this.#e;
	}
	watchExprRef(e, t) {
		if (G(e)) {
			let n = e;
			return this.paramRuntime.watchExpression(n.expr, t, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			});
		}
		return (() => e);
	}
}, S = "__uniqueId", yt = 1e4, bt = [null], xt = class extends vt {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this._blocks = [], this._usedBlocks = 0, this._id = -1;
	}
	initialize() {}
	reset() {
		super.reset(), this._usedBlocks = 0, this._id = -1;
	}
	handle(e) {
		e[S] = this.#e(), this._propagate(e);
	}
	#e() {
		return ++this._id % 1e4 == 0 && (this._id = this.#t() * yt), this._id;
	}
	#t() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this.#n();
	}
	#n() {
		let e = bt.length;
		return bt[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../core/src/utils/field.js
function St(e, t = e) {
	return /^[A-Za-z0-9_]+$/.test(e) ? x(Function("validator", `
                let validated = !validator;
                return function accessField(datum) {
                    if (!validated) {
                        validator(datum);
                        validated = true;
                    }
                    return datum[${JSON.stringify(e)}];
                }`)(function(t) {
		e in t || Ct(t, e);
	}), [e], t) : ke(e);
}
function Ct(e, t) {
	throw Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function wt(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = Dt(t), r.scaleChannel = ((Ht(t) && t.resolutionChannel) ?? (pn(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Ot({
			scaleChannel: r.scaleChannel,
			source: Et(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function i(e) {
		if (G(e)) {
			let t = r(n.createExpression(e.expr));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		} else {
			let t = e;
			return r(() => t);
		}
	}
	if (C(t)) try {
		return r(St(t.field));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	else if (qt(t)) return r(n.createExpression(t.expr));
	else if (Vt(t)) return i(t.datum);
	else if (Bt(t)) return i(t.value);
	else throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function Tt(e) {
	return e.scaleChannel !== void 0;
}
function Et(e) {
	if (C(e)) return {
		kind: "field",
		value: e.field
	};
	if (qt(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (Vt(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (Bt(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function Dt(e) {
	let t = Et(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + jt(t.value) : t.kind + "|" + At(t);
}
function Ot({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + At(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function kt(e, t) {
	let { domainKey: n, domainKeyBase: r } = Ot({
		scaleChannel: e.scaleChannel,
		source: Et(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function At(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return jt(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function jt(e) {
	return G(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../core/src/encoder/encoder.js
function Mt(e, t, n, r = "intersects") {
	let i, a = ia(!1), o = () => {
		if (i) return i;
		if (e.singleParam && !n.findValue(e.params[0])) return a;
		let o = e.params.map((r) => {
			let i = n.findValue(r);
			if (!i) throw Error(`Selection parameter "${r}" was not found.`);
			let a = {};
			if (H(i)) for (let n of Object.keys(i.intervals)) {
				let i = e.singleParam ? [n] : [n, ln(n)];
				for (let e of i) {
					let n = t[e];
					if (C(n)) a[e] = n.field;
					else if (n && "condition" in n) {
						let t = n.condition, r = (Array.isArray(t) ? t : [t]).find(C);
						C(r) && (a[e] = r.field);
					}
				}
				if (!a[n]) throw Error(`Selection "${r}" has an interval for "${n}" channel, but could not find a fieldDef: ${JSON.stringify(t[n])}`);
			}
			return {
				param: r,
				selection: i,
				fields: a
			};
		}), s = e.singleParam ? Fi({
			type: "filter",
			param: e.params[0],
			fields: o[0].fields,
			empty: e.empty
		}, o[0].selection) : Vi(o, e.empty, r);
		return i = n.createExpression(s), i;
	};
	return Object.assign((e) => o()(e), { selection: e });
}
function Nt(e, t, n, r, i = "intersects") {
	let a = Jt(t) || Yt(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], o = [...a, t], s = o.map((t, s) => {
		let c = a[s], l = wt(e, t, r), u = c ? Ii(c) : void 0;
		return {
			accessor: l,
			predicate: u ? Mt(u, n, r, i) : ia(s === o.length - 1)
		};
	});
	if (s.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return s;
}
function Pt(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale(), i = (t, n) => {
		let r = e.getScaleResolution(t);
		e.paramRuntime.operation("encoder scale", [r.getMappingRef()], () => r.getScale(), n);
	};
	for (let [a, o] of Object.entries(t)) {
		if (!o) continue;
		let s = a;
		Ft(s) || (n[s] = Rt(Nt(s, o, t, e.paramRuntime, e.mark.defaultHitTestMode), r, i));
	}
	return n;
}
function Ft(e) {
	return e === "key" || e === "search" || e === "tooltip" || e === "order";
}
function It(e) {
	return e.branches.map((e) => e.accessor);
}
function Lt(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function Rt(e, t, n) {
	if (e.length === 1) {
		let r = zt(e[0].accessor, t, n);
		return Object.assign(r, { branches: e });
	}
	let r = e.map((e) => e.predicate), i = e.map((e) => zt(e.accessor, t, n)), a = Object.assign((e) => {
		for (let t = 0; t < i.length; t++) if (r[t](e)) return i[t](e);
	}, {
		constant: !1,
		branches: e,
		channelDef: e.at(-1).accessor.channelDef
	});
	return Object.defineProperty(a, "scale", {
		enumerable: !0,
		get: () => i.find((e) => e.scale)?.scale
	});
}
function zt(e, t, n) {
	let { channel: r, scaleChannel: i, channelDef: a } = e, o = e.scaleChannel ? t(i) : void 0;
	if (i && !o) throw Error(`Missing scale! "${r}": ${JSON.stringify(a)}`);
	let s = Object.assign(o ? (t) => o(e(t)) : (t) => e(t), {
		scale: o,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: ia(!0)
		}],
		channelDef: a
	});
	return o && n?.(i, (e) => {
		o = e, s.scale = e;
	}), s;
}
function Bt(e) {
	return e && "value" in e;
}
function C(e) {
	return e && "field" in e;
}
function Vt(e) {
	return e && "datum" in e;
}
function Ht(e) {
	return C(e) || Vt(e) || qt(e) || Kt(e);
}
function Ut(e) {
	if (Yt(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => Ht(e));
	} else if (Ht(e)) return e;
}
function Wt(e) {
	let t = e && Ut(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function Gt(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = Ut(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function Kt(e) {
	return e && "chrom" in e;
}
function qt(e) {
	return e && "expr" in e;
}
function Jt(e) {
	return (C(e) || Vt(e)) && "condition" in e;
}
function Yt(e) {
	return Bt(e) && "condition" in e;
}
var Xt = ["x", "y"], Zt = ["x2", "y2"], Qt = ["xOffset", "yOffset"], $t = [...Xt, ...Zt];
function en(e) {
	return Xt.includes(e);
}
function tn(e) {
	return $t.includes(e);
}
function nn(e) {
	return Qt.includes(e);
}
function rn(e) {
	return un(e) == "x" ? "xOffset" : "yOffset";
}
function an(e, t, n) {
	return t ?? (n ? 0 : e);
}
var on = {
	x: "x2",
	y: "y2"
}, sn = Object.fromEntries(Object.entries(on).map((e) => [e[1], e[0]]));
function cn(e) {
	return e in sn;
}
function ln(e) {
	let t = on[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function un(e) {
	return sn[e] ?? e;
}
function dn(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(un(e));
}
function fn(e) {
	return ["shape", "direction"].includes(e);
}
function pn(e) {
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
function mn(e) {
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
function hn(e) {
	if (!fn(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(mn(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var gn = "RawCode", _n = "Literal", vn = "Property", yn = "Identifier", bn = "ArrayExpression", xn = "BinaryExpression", Sn = "CallExpression", Cn = "ConditionalExpression", wn = "LogicalExpression", Tn = "MemberExpression", En = "ObjectExpression", Dn = "UnaryExpression";
function w(e) {
	this.type = e;
}
w.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = On(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function On(e) {
	switch (e.type) {
		case bn: return e.elements;
		case xn:
		case wn: return [e.left, e.right];
		case Sn: return [e.callee].concat(e.arguments);
		case Cn: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case Tn: return [e.object, e.property];
		case En: return e.properties;
		case vn: return [e.key, e.value];
		case Dn: return [e.argument];
		case yn:
		case _n:
		case gn:
		default: return [];
	}
}
var T, E, D, O, k, kn = 1, An = 2, A = 3, j = 4, jn = 5, M = 6, N = 7, Mn = 8, Nn = 9;
T = {}, T[kn] = "Boolean", T[An] = "<end>", T[A] = "Identifier", T[j] = "Keyword", T[jn] = "Null", T[M] = "Numeric", T[N] = "Punctuator", T[Mn] = "String", T[Nn] = "RegularExpression";
var Pn = "ArrayExpression", Fn = "BinaryExpression", In = "CallExpression", Ln = "ConditionalExpression", Rn = "Identifier", zn = "Literal", Bn = "LogicalExpression", Vn = "MemberExpression", Hn = "ObjectExpression", Un = "Property", Wn = "UnaryExpression", P = "Unexpected token %0", Gn = "Unexpected number", Kn = "Unexpected string", qn = "Unexpected identifier", Jn = "Unexpected reserved word", Yn = "Unexpected end of input", Xn = "Invalid regular expression", Zn = "Invalid regular expression: missing /", Qn = "Octal literals are not allowed in strict mode.", $n = "Duplicate data property in object literal not allowed in strict mode", F = "ILLEGAL", er = "Disabled.", tr = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), nr = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function rr(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function I(e) {
	return e >= 48 && e <= 57;
}
function ir(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function ar(e) {
	return "01234567".includes(e);
}
function or(e) {
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
function sr(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function cr(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && tr.test(String.fromCharCode(e));
}
function lr(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && nr.test(String.fromCharCode(e));
}
var ur = {
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
function dr() {
	for (; D < O;) {
		let e = E.charCodeAt(D);
		if (or(e) || sr(e)) ++D;
		else break;
	}
}
function fr(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) D < O && ir(E[D]) ? (r = E[D++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : R({}, P, F);
	return String.fromCharCode(i);
}
function pr() {
	var e = E[D], t = 0, n, r;
	for (e === "}" && R({}, P, F); D < O && (e = E[D++], ir(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && R({}, P, F), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function mr() {
	var e = E.charCodeAt(D++), t = String.fromCharCode(e);
	for (e === 92 && (E.charCodeAt(D) !== 117 && R({}, P, F), ++D, e = fr("u"), (!e || e === "\\" || !cr(e.charCodeAt(0))) && R({}, P, F), t = e); D < O && (e = E.charCodeAt(D), lr(e));) ++D, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), E.charCodeAt(D) !== 117 && R({}, P, F), ++D, e = fr("u"), (!e || e === "\\" || !lr(e.charCodeAt(0))) && R({}, P, F), t += e);
	return t;
}
function hr() {
	for (var e = D++, t; D < O;) {
		if (t = E.charCodeAt(D), t === 92) return D = e, mr();
		if (lr(t)) ++D;
		else break;
	}
	return E.slice(e, D);
}
function gr() {
	var e = D, t = E.charCodeAt(D) === 92 ? mr() : hr();
	return {
		type: t.length === 1 ? A : ur.hasOwnProperty(t) ? j : t === "null" ? jn : t === "true" || t === "false" ? kn : A,
		value: t,
		start: e,
		end: D
	};
}
function _r() {
	var e = D, t = E.charCodeAt(D), n, r = E[D], i, a, o;
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
		case 126: return ++D, {
			type: N,
			value: String.fromCharCode(t),
			start: e,
			end: D
		};
		default: if (n = E.charCodeAt(D + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return D += 2, {
				type: N,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: D
			};
			case 33:
			case 61: return D += 2, E.charCodeAt(D) === 61 && ++D, {
				type: N,
				value: E.slice(e, D),
				start: e,
				end: D
			};
		}
	}
	if (o = E.substr(D, 4), o === ">>>=") return D += 4, {
		type: N,
		value: o,
		start: e,
		end: D
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return D += 3, {
		type: N,
		value: a,
		start: e,
		end: D
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return D += 2, {
		type: N,
		value: i,
		start: e,
		end: D
	};
	if (i === "//" && R({}, P, F), "<>=!+-*%&|^/".includes(r)) return ++D, {
		type: N,
		value: r,
		start: e,
		end: D
	};
	R({}, P, F);
}
function vr(e) {
	let t = "";
	for (; D < O && ir(E[D]);) t += E[D++];
	return t.length === 0 && R({}, P, F), cr(E.charCodeAt(D)) && R({}, P, F), {
		type: M,
		value: parseInt("0x" + t, 16),
		start: e,
		end: D
	};
}
function yr(e) {
	let t = "0" + E[D++];
	for (; D < O && ar(E[D]);) t += E[D++];
	return (cr(E.charCodeAt(D)) || I(E.charCodeAt(D))) && R({}, P, F), {
		type: M,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: D
	};
}
function br() {
	var e, t, n = E[D];
	if (rr(I(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = D, e = "", n !== ".") {
		if (e = E[D++], n = E[D], e === "0") {
			if (n === "x" || n === "X") return ++D, vr(t);
			if (ar(n)) return yr(t);
			n && I(n.charCodeAt(0)) && R({}, P, F);
		}
		for (; I(E.charCodeAt(D));) e += E[D++];
		n = E[D];
	}
	if (n === ".") {
		for (e += E[D++]; I(E.charCodeAt(D));) e += E[D++];
		n = E[D];
	}
	if (n === "e" || n === "E") if (e += E[D++], n = E[D], (n === "+" || n === "-") && (e += E[D++]), I(E.charCodeAt(D))) for (; I(E.charCodeAt(D));) e += E[D++];
	else R({}, P, F);
	return cr(E.charCodeAt(D)) && R({}, P, F), {
		type: M,
		value: parseFloat(e),
		start: t,
		end: D
	};
}
function xr() {
	var e = "", t, n, r, i, a = !1;
	for (t = E[D], rr(t === "'" || t === "\"", "String literal must starts with a quote"), n = D, ++D; D < O;) if (r = E[D++], r === t) {
		t = "";
		break;
	} else if (r === "\\") if (r = E[D++], !r || !sr(r.charCodeAt(0))) switch (r) {
		case "u":
		case "x":
			E[D] === "{" ? (++D, e += pr()) : e += fr(r);
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
			ar(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), D < O && ar(E[D]) && (a = !0, i = i * 8 + "01234567".indexOf(E[D++]), "0123".includes(r) && D < O && ar(E[D]) && (i = i * 8 + "01234567".indexOf(E[D++]))), e += String.fromCharCode(i)) : e += r;
			break;
	}
	else r === "\r" && E[D] === "\n" && ++D;
	else if (sr(r.charCodeAt(0))) break;
	else e += r;
	return t !== "" && R({}, P, F), {
		type: Mn,
		value: e,
		octal: a,
		start: n,
		end: D
	};
}
function Sr(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		R({}, Xn);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		R({}, Xn);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function Cr() {
	var e = E[D], t, n, r, i;
	for (rr(e === "/", "Regular expression literal must start with a slash"), t = E[D++], n = !1, r = !1; D < O;) if (e = E[D++], t += e, e === "\\") e = E[D++], sr(e.charCodeAt(0)) && R({}, Zn), t += e;
	else if (sr(e.charCodeAt(0))) R({}, Zn);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || R({}, Zn), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function wr() {
	for (var e, t = "", n = ""; D < O && (e = E[D], lr(e.charCodeAt(0)));) ++D, e === "\\" && D < O ? R({}, P, F) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && R({}, Xn, n), {
		value: n,
		literal: t
	};
}
function Tr() {
	var e, t, n, r;
	return k = null, dr(), e = D, t = Cr(), n = wr(), r = Sr(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: D
	};
}
function Er(e) {
	return e.type === A || e.type === j || e.type === kn || e.type === jn;
}
function Dr() {
	if (dr(), D >= O) return {
		type: An,
		start: D,
		end: D
	};
	let e = E.charCodeAt(D);
	return cr(e) ? gr() : e === 40 || e === 41 || e === 59 ? _r() : e === 39 || e === 34 ? xr() : e === 46 ? I(E.charCodeAt(D + 1)) ? br() : _r() : I(e) ? br() : _r();
}
function L() {
	let e = k;
	return D = e.end, k = Dr(), D = e.end, e;
}
function Or() {
	let e = D;
	k = Dr(), D = e;
}
function kr(e) {
	let t = new w(Pn);
	return t.elements = e, t;
}
function Ar(e, t, n) {
	let r = new w(e === "||" || e === "&&" ? Bn : Fn);
	return r.operator = e, r.left = t, r.right = n, r;
}
function jr(e, t) {
	let n = new w(In);
	return n.callee = e, n.arguments = t, n;
}
function Mr(e, t, n) {
	let r = new w(Ln);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function Nr(e) {
	let t = new w(Rn);
	return t.name = e, t;
}
function Pr(e) {
	let t = new w(zn);
	return t.value = e.value, t.raw = E.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function Fr(e, t, n) {
	let r = new w(Vn);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function Ir(e) {
	let t = new w(Hn);
	return t.properties = e, t;
}
function Lr(e, t, n) {
	let r = new w(Un);
	return r.key = t, r.value = n, r.kind = e, r;
}
function Rr(e, t) {
	let n = new w(Wn);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function R(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (rr(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = D, n.description = i, n;
}
function zr(e) {
	e.type === An && R(e, Yn), e.type === M && R(e, Gn), e.type === Mn && R(e, Kn), e.type === A && R(e, qn), e.type === j && R(e, Jn), R(e, P, e.value);
}
function z(e) {
	let t = L();
	(t.type !== N || t.value !== e) && zr(t);
}
function B(e) {
	return k.type === N && k.value === e;
}
function Br(e) {
	return k.type === j && k.value === e;
}
function Vr() {
	let e = [];
	for (D = k.start, z("["); !B("]");) B(",") ? (L(), e.push(null)) : (e.push(V()), B("]") || z(","));
	return L(), kr(e);
}
function Hr() {
	D = k.start;
	let e = L();
	return e.type === Mn || e.type === M ? (e.octal && R(e, Qn), Pr(e)) : Nr(e.value);
}
function Ur() {
	var e, t, n, r;
	if (D = k.start, e = k, e.type === A) return n = Hr(), z(":"), r = V(), Lr("init", n, r);
	if (e.type === An || e.type === N) zr(e);
	else return t = Hr(), z(":"), r = V(), Lr("init", t, r);
}
function Wr() {
	var e = [], t, n, r, i = {}, a = String;
	for (D = k.start, z("{"); !B("}");) t = Ur(), n = t.key.type === Rn ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? R({}, $n) : i[r] = !0, e.push(t), B("}") || z(",");
	return z("}"), Ir(e);
}
function Gr() {
	z("(");
	let e = ri();
	return z(")"), e;
}
var Kr = { if: 1 };
function qr() {
	var e, t, n;
	if (B("(")) return Gr();
	if (B("[")) return Vr();
	if (B("{")) return Wr();
	if (e = k.type, D = k.start, e === A || Kr[k.value]) n = Nr(L().value);
	else if (e === Mn || e === M) k.octal && R(k, Qn), n = Pr(L());
	else if (e === j) throw Error(er);
	else e === kn ? (t = L(), t.value = t.value === "true", n = Pr(t)) : e === jn ? (t = L(), t.value = null, n = Pr(t)) : B("/") || B("/=") ? (n = Pr(Tr()), Or()) : zr(L());
	return n;
}
function Jr() {
	let e = [];
	if (z("("), !B(")")) for (; D < O && (e.push(V()), !B(")"));) z(",");
	return z(")"), e;
}
function Yr() {
	D = k.start;
	let e = L();
	return Er(e) || zr(e), Nr(e.value);
}
function Xr() {
	return z("."), Yr();
}
function Zr() {
	z("[");
	let e = ri();
	return z("]"), e;
}
function Qr() {
	for (var e = qr(), t, n;;) if (B(".")) n = Xr(), e = Fr(".", e, n);
	else if (B("(")) t = Jr(), e = jr(e, t);
	else if (B("[")) n = Zr(), e = Fr("[", e, n);
	else break;
	return e;
}
function $r() {
	let e = Qr();
	if (k.type === N && (B("++") || B("--"))) throw Error(er);
	return e;
}
function ei() {
	var e, t;
	if (k.type !== N && k.type !== j) t = $r();
	else if (B("++") || B("--")) throw Error(er);
	else if (B("+") || B("-") || B("~") || B("!")) e = L(), t = ei(), t = Rr(e.value, t);
	else if (Br("delete") || Br("void") || Br("typeof")) throw Error(er);
	else t = $r();
	return t;
}
function ti(e) {
	let t = 0;
	if (e.type !== N && e.type !== j) return 0;
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
function ni() {
	var e = k, t, n, r, i, a, o, s, c = ei(), l;
	if (r = k, i = ti(r), i === 0) return c;
	for (r.prec = i, L(), t = [e, k], o = ei(), a = [
		c,
		r,
		o
	]; (i = ti(k)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = Ar(s, c, o), a.push(n);
		r = L(), r.prec = i, a.push(r), t.push(k), n = ei(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = Ar(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function V() {
	var e = ni(), t, n;
	return B("?") && (L(), t = V(), z(":"), n = V(), e = Mr(e, t, n)), e;
}
function ri() {
	let e = V();
	if (B(",")) throw Error(er);
	return e;
}
function ii(e) {
	E = e, D = 0, O = E.length, k = null, Or();
	let t = ri();
	if (k.type !== An) throw Error("Unexpect token after expression.");
	return t;
}
var ai = {
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
function oi(e) {
	function t(t, n, r, i) {
		let a = e(n[0]);
		return r && (a = r + "(" + a + ")", r.lastIndexOf("new ", 0) === 0 && (a = "(" + a + ")")), a + "." + t + (i < 0 ? "" : i === 0 ? "()" : "(" + n.slice(1).map(e).join(",") + ")");
	}
	function n(e, n, r) {
		return (i) => t(e, i, n, r);
	}
	let r = "new Date", a = "String", o = "RegExp";
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
			t.length < 3 && i("Missing arguments to clamp function."), t.length > 3 && i("Too many arguments to clamp function.");
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
		upper: n("toUpperCase", a, 0),
		lower: n("toLowerCase", a, 0),
		substring: n("substring", a),
		split: n("split", a),
		trim: n("trim", a, 0),
		btoa: "btoa",
		atob: "atob",
		regexp: o,
		test: n("test", o),
		if: function(t) {
			t.length < 3 && i("Missing arguments to if function."), t.length > 3 && i("Too many arguments to if function.");
			let n = t.map(e);
			return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
		}
	};
}
function si(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function ci(e) {
	e ||= {};
	let t = e.allowed ? ee(e.allowed) : {}, n = e.forbidden ? ee(e.forbidden) : {}, r = e.constants || ai, a = (e.functions || oi)(g), o = e.globalvar, s = e.fieldvar, l = f(o) ? o : (e) => `${o}["${e}"]`;
	[...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
	let u = {}, d = {}, h = 0;
	function g(e) {
		if (m(e)) return e;
		let t = te[e.type];
		return t ?? i("Unsupported type: " + e.type), t(e);
	}
	let te = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let a = e.name;
			return h > 0 ? a : p(n, a) ? i("Illegal identifier: " + a) : p(r, a) ? r[a] : p(t, a) ? a : (u[a] = 1, l(a));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = g(e.object);
			t && (h += 1);
			let r = g(e.property);
			return n === s && (d[si(r)] = 1), t && --h, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && i("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = p(a, t) && a[t];
			return r || i("Unrecognized function: " + t), f(r) ? r(n) : r + "(" + n.map(g).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(g).join(",") + "]",
		BinaryExpression: (e) => "(" + g(e.left) + " " + e.operator + " " + g(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + g(e.argument) + ")",
		ConditionalExpression: (e) => "(" + g(e.test) + "?" + g(e.consequent) + ":" + g(e.alternate) + ")",
		LogicalExpression: (e) => "(" + g(e.left) + e.operator + g(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.name;
				c.has(e) && i("Illegal property: " + e);
			}
			return "{" + e.properties.map(g).join(",") + "}";
		},
		Property: (e) => {
			h += 1;
			let t = g(e.key);
			return --h, t + ":" + g(e.value);
		}
	};
	function _(e) {
		let t = {
			code: g(e),
			globals: Object.keys(u),
			fields: Object.keys(d)
		};
		return u = {}, d = {}, t;
	}
	return _.functions = a, _.constants = r, _;
}
//#endregion
//#region ../core/src/utils/smoothstep.js
function li(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function ui(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function di(e, t, n) {
	return ui((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/utils/expression.js
function fi(e) {
	return je(e) || ArrayBuffer.isView(e) ? e : null;
}
function pi(e) {
	return fi(e) || (st(e) ? e : null);
}
var mi = {
	clamp: ui,
	format(e, t) {
		return he(t)(e);
	},
	join(e, t) {
		return fi(e).join(t);
	},
	indexof(e, t, n) {
		return pi(e).indexOf(t, n);
	},
	lastindexof(e, t, n) {
		return pi(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return st(e) ? Array.from(e).reverse().join("") : fi(e).slice().reverse();
	},
	slice(e, t, n) {
		return pi(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: je,
	isBoolean: it,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: at,
	isObject: Me,
	isRegExp: ot,
	isString: st,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: ct,
	linearstep: di,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return fi(e).slice().sort(et);
	},
	center(e) {
		let t = fi(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return lt(e);
	},
	smoothstep: li
};
function hi(e) {
	let t = !1, n = Ci(e, {}, { resolveScaleResolution: () => (t = !0, {
		channel: "analysis",
		getDomainRef: () => void 0,
		getMappingRef: () => void 0,
		getConfigurationRef: () => void 0,
		getZoomLevelRef: () => void 0
	}) });
	return {
		usesScaleHelper: t,
		globals: n.globals
	};
}
function gi(e, t) {
	let n = oi(e);
	for (let e in mi) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"linearize",
		"zoomLevel"
	]) n[r] = (n) => _i(e, t, r, n);
	return n;
}
function _i(e, t, n, r) {
	if (n === "zoomLevel" && r.length === 0) {
		let e = [];
		for (let r of ["x", "y"]) {
			let i = t.resolveScaleResolution?.(r);
			if (i) {
				let a = t.getScaleHelper(n, r, i);
				e.push(`${t.globalvar}["${a.codeName}"]()`);
			}
		}
		return `Math.sqrt(${e.join("*") || "1"})`;
	}
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert" || n === "linearize") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	if (n === "zoomLevel" && r.length > 1) throw Error("Scale helper \"zoomLevel\" accepts zero arguments or one literal channel name.");
	let i = vi(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function vi(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function yi(e, t) {
	let n = (n) => xi(t, e, n);
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
	if (e === "zoomLevel") return () => n(() => t.getZoomLevel());
	throw Error("Unknown scale helper: " + e);
}
var bi = /* @__PURE__ */ new WeakSet();
function xi(e, t, n) {
	if (bi.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	bi.add(e);
	try {
		return n();
	} finally {
		bi.delete(e);
	}
}
function Si(e, t) {
	return e === "domain" ? t.getDomainRef() : e === "linearize" ? t.getConfigurationRef() : e === "zoomLevel" ? t.getZoomLevelRef() : t.getMappingRef();
}
function Ci(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = 1, s = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, s) {
				let c = e + ":" + n, l = i.get(c);
				if (l) return l;
				let u = r.get(c);
				u || (u = Si(e, s), r.set(c, u));
				let d = "__scale_helper_" + o++, f = {
					codeName: d,
					dependency: u
				};
				return i.set(c, f), e === "zoomLevel" && a.add(s), t[d] = yi(e, s), f;
			}
		}, c = ci({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => gi(e, s)
		})(ii(e)), l = Function("datum", "globalObject", `"use strict";
            try {
                return (${c.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`).bind(mi), u = (e) => l(e, t);
		return u.fields = c.fields, u.globals = c.globals, u.code = c.code, u.scaleDependencies = Array.from(new Set(r.values())), u.zoomLevelResolutions = Array.from(a), u;
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
var wi = ci({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function Ti(e) {
	try {
		let t = wi(ii(e));
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
function Ei(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	} else return e;
}
function Di(e) {
	return e?.filter ? Ti(e.filter) : () => !0;
}
function Oi(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function ki(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[S]
	};
}
function Ai(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[S], e]))
	};
}
function ji(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => St(e)), r = (e) => n.map((t) => t(e));
	if (U(e)) return e.datum ? [r(e.datum)] : [];
	if (W(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function Mi(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? ki(i[0] ?? null) : Ai(i),
		unresolved: a
	};
}
function Ni(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function Pi(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[S], e);
	for (let e of n ?? []) i.delete(e[S]);
	for (let e of r ?? []) {
		let t = e[S];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function Fi(e, t) {
	let n = !!(e.empty ?? !0), r = $i(e.param), i = e.fields ?? {};
	if (U(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(S)}]`;
	if (W(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(S)}])`;
	if (H(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(en);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = ln(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${c} && ${l}) : ${n})`;
		}).join(" && ");
	} else throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function Ii(e) {
	if (!("param" in e) && !("test" in e)) return;
	let { param: t, empty: n = !0 } = "test" in e ? e.test : e;
	if (typeof t == "string") return {
		params: [$i(t)],
		empty: n,
		singleParam: !0
	};
	if (t.or.length === 0) throw Error("Selection test \"or\" must be a nonempty array.");
	return {
		params: Array.from(new Set(t.or.map($i))),
		empty: n,
		singleParam: !1
	};
}
function Li(e) {
	return e?.selection?.params ?? [];
}
function Ri(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of Object.values(e)) for (let { predicate: e } of n.branches) {
		let n = e.selection;
		if (n) for (let e of n.params) t.set(e, t.get(e) || !n.singleParam);
	}
	return t;
}
function zi(e, t) {
	if (U(t)) return `${e}.uniqueId == null`;
	if (W(t)) return `${e}.data.size == 0`;
	if (H(t)) {
		let n = Object.keys(t.intervals);
		return n.length == 0 ? "true" : `!(${n.map((t) => `${e}.intervals.${t}`).join(" || ")})`;
	}
	throw Error(`Unsupported selection type: ${t.type}`);
}
function Bi(e, t, n, r) {
	if (U(t)) return `${e}.uniqueId != null && ${e}.uniqueId === datum[${JSON.stringify(S)}]`;
	if (W(t)) return `${e}.data.size != 0 && mapHasKey(${e}.data, datum[${JSON.stringify(S)}])`;
	if (H(t)) {
		let i = Object.keys(t.intervals);
		if (i.length == 0) return "false";
		let a = (e) => `datum[${JSON.stringify(e)}]`, o = i.map((t) => {
			let i = ln(t), o = n[t], s = n[i] ?? n[t], c = `${e}.intervals.${t}`;
			return `(!${c} || ${r == "endpoints" ? `((${c}[0] <= ${a(o)} && ${a(o)} <= ${c}[1]) || (${c}[0] <= ${a(s)} && ${a(s)} <= ${c}[1]))` : r == "encloses" ? `(${c}[0] <= ${a(o)} && ${a(s)} <= ${c}[1])` : `(${c}[0] <= ${a(s)} && ${a(o)} <= ${c}[1])`})`;
		});
		return `!!(${i.map((t) => `${e}.intervals.${t}`).join(" || ")}) && (${o.join(" && ")})`;
	}
	throw Error(`Unsupported selection type: ${t.type}`);
}
function Vi(e, t, n = "intersects") {
	let r = `(${e.map(({ param: e, selection: t, fields: r }) => Bi(e, t, r, n)).join(" || ")})`;
	return t ? `((${e.map(({ param: e, selection: t }) => zi(e, t)).join(" && ")}) || ${r})` : r;
}
function H(e) {
	return e.type === "interval";
}
function U(e) {
	return e.type === "single";
}
function W(e) {
	return e.type === "multi";
}
function Hi(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? Ei(t.on) : Ui(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : Ei(t.clear), Ui(t) && t.on.type === "click" && (t.toggle = !0), t;
}
function Ui(e) {
	return e && e.type == "point";
}
function Wi(e) {
	return e && e.type == "interval";
}
function Gi(e) {
	if (U(e)) return e.uniqueId != null;
	if (W(e)) return e.data.size > 0;
	if (H(e)) return Ki(e);
	throw Error(`Unsupported selection type: ${e.type}`);
}
function Ki(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function qi(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] <= t[e] && n[1] >= t[e]);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function Ji(e = ["x"], t = {}) {
	let n = {};
	for (let r of e) n[r] = t[r] ?? null;
	return {
		type: "ruler",
		values: n
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramUtils.js
function G(e) {
	return typeof e == "object" && !!e && "expr" in e && st(e.expr);
}
function Yi(e) {
	if (G(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function Xi(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function Zi(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function Qi(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function $i(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function ea(e, t, n) {
	if ("select" in e) {
		let t = Hi(e.select);
		if (Ui(t)) return t.toggle ? Ai() : ki(null);
		if (Wi(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return Ni(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return Ji(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e.expr);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function ta(e, t, n, r, i = []) {
	let a = { ...t }, o = [];
	for (let [r, i] of Object.entries(t)) if (G(i)) {
		let t = e.createExpression(i.expr), s = o.push({
			key: r,
			fn: t
		}) - 1;
		Object.defineProperty(a, r, {
			enumerable: !0,
			get: n ? () => c.get()[s] : () => t(null)
		});
	} else a[r] = i;
	if (!n) return a;
	for (let { key: t, expr: n } of i) o.push({
		key: t,
		fn: e.createExpression(n.expr)
	});
	if (!o.length) return a;
	let s = Array.from(new Set(o.flatMap(({ fn: e }) => e.dependencies))), c = e.computed("expression properties", s, () => o.map(({ fn: e }) => e(null)), { equals: na }), l = c.get(), u = e.effect([c], () => {
		let e = c.get(), t = new Set(o.filter((t, n) => l[n] !== e[n]).map(({ key: e }) => e));
		l = e, n(t);
	});
	return r?.(c.dispose), r?.(u), a;
}
function na(e, t) {
	return e.every((e, n) => e === t[n]);
}
function ra(e, t, n, r) {
	if (!G(t)) return t;
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
function ia(e) {
	return Object.assign(() => e, {
		dependencies: [],
		subscribe: () => () => void 0,
		invalidate: () => void 0,
		identifier: () => "constant",
		fields: [],
		globals: [],
		code: JSON.stringify(e)
	});
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function aa(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function oa(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function K() {}
var q = .7, sa = 1 / q, J = "\\s*([+-]?\\d+)\\s*", ca = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", la = /^#([0-9a-f]{3,8})$/, ua = RegExp(`^rgb\\(${J},${J},${J}\\)$`), da = RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), fa = RegExp(`^rgba\\(${J},${J},${J},${ca}\\)$`), pa = RegExp(`^rgba\\(${Y},${Y},${Y},${ca}\\)$`), ma = RegExp(`^hsl\\(${ca},${Y},${Y}\\)$`), ha = RegExp(`^hsla\\(${ca},${Y},${Y},${ca}\\)$`), ga = {
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
aa(K, xa, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: _a,
	formatHex: _a,
	formatHex8: va,
	formatHsl: ya,
	formatRgb: ba,
	toString: ba
});
function _a() {
	return this.rgb().formatHex();
}
function va() {
	return this.rgb().formatHex8();
}
function ya() {
	return ja(this).formatHsl();
}
function ba() {
	return this.rgb().formatRgb();
}
function xa(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = la.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Sa(t) : n === 3 ? new X(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ca(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ca(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ua.exec(e)) ? new X(t[1], t[2], t[3], 1) : (t = da.exec(e)) ? new X(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fa.exec(e)) ? Ca(t[1], t[2], t[3], t[4]) : (t = pa.exec(e)) ? Ca(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ma.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, 1) : (t = ha.exec(e)) ? Aa(t[1], t[2] / 100, t[3] / 100, t[4]) : ga.hasOwnProperty(e) ? Sa(ga[e]) : e === "transparent" ? new X(NaN, NaN, NaN, 0) : null;
}
function Sa(e) {
	return new X(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ca(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new X(e, t, n, r);
}
function wa(e) {
	return e instanceof K || (e = xa(e)), e ? (e = e.rgb(), new X(e.r, e.g, e.b, e.opacity)) : new X();
}
function Ta(e, t, n, r) {
	return arguments.length === 1 ? wa(e) : new X(e, t, n, r ?? 1);
}
function X(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
aa(X, Ta, oa(K, {
	brighter(e) {
		return e = e == null ? sa : sa ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? q : q ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new X(Z(this.r), Z(this.g), Z(this.b), ka(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Ea,
	formatHex: Ea,
	formatHex8: Da,
	formatRgb: Oa,
	toString: Oa
}));
function Ea() {
	return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}`;
}
function Da() {
	return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}${Q((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Oa() {
	let e = ka(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Z(this.r)}, ${Z(this.g)}, ${Z(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ka(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Z(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Q(e) {
	return e = Z(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Aa(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $(e, t, n, r);
}
function ja(e) {
	if (e instanceof $) return new $(e.h, e.s, e.l, e.opacity);
	if (e instanceof K || (e = xa(e)), !e) return new $();
	if (e instanceof $) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new $(o, s, c, e.opacity);
}
function Ma(e, t, n, r) {
	return arguments.length === 1 ? ja(e) : new $(e, t, n, r ?? 1);
}
function $(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
aa($, Ma, oa(K, {
	brighter(e) {
		return e = e == null ? sa : sa ** +e, new $(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? q : q ** +e, new $(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new X(Fa(e >= 240 ? e - 240 : e + 120, i, r), Fa(e, i, r), Fa(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new $(Na(this.h), Pa(this.s), Pa(this.l), ka(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = ka(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Na(this.h)}, ${Pa(this.s) * 100}%, ${Pa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Na(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pa(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Fa(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../core/src/view/renderingContext/clipOptions.js
function Ia(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function La(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function Ra(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function za(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function Ba(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return Ra(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function Va(e, t) {
	if (e === !0) return Ra(t, !0, !0);
	if (e === "x") return Ra(t, !0, !1);
	if (e === "y") return Ra(t, !1, !0);
}
function Ha(e) {
	let t = e.mark;
	if (t) {
		let e = t.properties.clip;
		return {
			clipX: e === !0 || e === "x",
			clipY: e === !0 || e === "y"
		};
	}
	let n = !1, r = !0, i = !0;
	return e.visit((e) => {
		let t = e.mark;
		if (t) {
			n = !0;
			let e = t.properties.clip;
			r &&= e === !0 || e === "x", i &&= e === !0 || e === "y";
		}
	}), {
		clipX: n && r,
		clipY: n && i
	};
}
function Ua(e, t, n) {
	if (t !== "never") return Ba(e, Va(t, n));
}
//#endregion
export { di as $, Ue as $t, Ri as A, Tt as At, Ui as B, Se as Bt, Xi as C, u as Cn, en as Ct, Yi as D, i as Dn, an as Dt, $i as E, o as En, Xt as Et, Li as F, pt as Ft, Mi as G, it as Gt, U as H, $e as Ht, Ki as I, ht as It, Ei as J, Me as Jt, qi as K, Ze as Kt, H as L, _t as Lt, Ai as M, xt as Mt, ki as N, S as Nt, Ji as O, wt as Ot, ji as P, vt as Pt, Ci as Q, He as Qt, Wi as R, gt as Rt, Zi as S, d as Sn, tn as St, ra as T, s as Tn, Bt as Tt, Fi as U, De as Ut, Gi as V, Xe as Vt, Ii as W, je as Wt, Oi as X, ct as Xt, Di as Y, st as Yt, hi as Z, Ve as Zt, oa as _, ee as _n, fn as _t, Ha as a, Ke as an, Gt as at, G as b, p as bn, Wt as bt, K as c, ye as cn, Lt as ct, xa as d, ve as dn, ln as dt, Ne as en, ui as et, q as f, he as fn, Ht as ft, aa as g, g as gn, Vt as gt, wa as h, ne as hn, dn as ht, Ra as i, Ge as in, Ut as it, Ni as j, St as jt, Hi as k, kt, X as l, xe as ln, rn as lt, Ta as m, v as mn, Kt as mt, La as n, Oe as nn, Pt as nt, Ia as o, qe as on, hn as ot, Ma as p, ge as pn, pn as pt, Pi as q, at as qt, Ba as r, dt as rn, Mt as rt, Ua as s, Je as sn, It as st, za as t, lt as tn, li as tt, sa as u, be as un, un as ut, ta as v, h as vn, qt as vt, ia as w, l as wn, cn as wt, Qi as x, f as xn, nn as xt, ea as y, m as yn, C as yt, W as z, ut as zt };
