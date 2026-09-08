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
function g(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-array/src/range.js
function _(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatDecimal.js
function ee(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function v(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../../node_modules/d3-format/src/exponent.js
function te(e) {
	return e = v(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatGroup.js
function ne(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatNumerals.js
function re(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatSpecifier.js
var ie = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function y(e) {
	if (!(t = ie.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new b({
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
y.prototype = b.prototype;
function b(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
b.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../../node_modules/d3-format/src/formatTrim.js
function ae(e) {
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
var oe;
function x(e, t) {
	var n = v(e, t);
	if (!n) return oe = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (oe = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + v(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../../node_modules/d3-format/src/formatRounded.js
function se(e, t) {
	var n = v(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../../node_modules/d3-format/src/formatTypes.js
var ce = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: ee,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => se(e * 100, t),
	r: se,
	s: x,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../../node_modules/d3-format/src/identity.js
function le(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-format/src/locale.js
var ue = Array.prototype.map, de = [
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
function fe(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? le : ne(ue.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? le : re(ue.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = y(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, ee = e.trim, v = e.type;
		v === "n" ? (g = !0, v = "g") : ce[v] || (_ === void 0 && (_ = 12), ee = !0, v = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var te = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : ""), ne = (p === "$" ? r : /[%p]/.test(v) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), re = ce[v], ie = /[defgprs%]/.test(v);
		_ = _ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function b(e) {
			var n = te, r = ne, o, l, p;
			if (v === "c") r = re(e) + r, e = "";
			else {
				e = +e;
				var y = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : re(Math.abs(e), _), ee && (e = ae(e)), y && +e == 0 && f !== "+" && (y = !1), n = (y ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (v === "s" && !isNaN(e) && oe !== void 0 ? de[8 + oe / 3] : "") + r + (y && f === "(" ? ")" : ""), ie) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var b = n.length + e.length + r.length, x = b < h ? Array(h - b + 1).join(u) : "";
			switch (g && m && (e = t(x + e, x.length ? h - r.length : Infinity), x = ""), d) {
				case "<":
					e = n + e + r + x;
					break;
				case "=":
					e = n + x + e + r;
					break;
				case "^":
					e = x.slice(0, b = x.length >> 1) + n + e + r + x.slice(b);
					break;
				default:
					e = x + n + e + r;
					break;
			}
			return a(e);
		}
		return b.toString = function() {
			return e + "";
		}, b;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(te(t) / 3))) * 3, r = 10 ** -n, i = l((e = y(e), e.type = "f", e), { suffix: de[8 + n / 3] });
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
var pe, me, he;
ge({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function ge(e) {
	return pe = fe(e), me = pe.format, he = pe.formatPrefix, pe;
}
//#endregion
//#region ../core/src/utils/arrayUtils.js
function _e(e, t) {
	return e.length == t.length && e.every((n, r) => e[r] === t[r]);
}
function ve(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
function ye(e) {
	return e[e.length - 1];
}
function be(e, t, n) {
	if (t < 0 || t >= e.length) throw Error("Source index out of range.");
	if (n < 0 || n > e.length - 1) throw Error("Destination index out of range.");
	let [r] = e.splice(t, 1);
	e.splice(n, 0, r);
}
//#endregion
//#region ../core/node_modules/vega-util/build/vega-util.js
function S(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function xe(e) {
	return e == null ? null : e.fname;
}
function Se(e) {
	return e == null ? null : e.fields;
}
function Ce(e) {
	return e.length === 1 ? we(e[0]) : Te(e);
}
var we = (e) => function(t) {
	return t[e];
}, Te = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function Ee(e) {
	throw Error(e);
}
function De(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Ee("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Ee("Access path missing closing bracket: " + e), r && Ee("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function Oe(e, t, n) {
	let r = De(e);
	return e = r.length === 1 ? r[0] : e, S((n && n.get || Ce)(r), [e], t || e);
}
Oe("id");
var ke = S((e) => e, [], "identity");
S(() => 0, [], "zero"), S(() => 1, [], "one"), S(() => !0, [], "true"), S(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
var C = Array.isArray;
function Ae(e) {
	return e === Object(e);
}
function je(e) {
	return e[e.length - 1];
}
function Me(e) {
	return e == null || e === "" ? null : +e;
}
var Ne = (e) => (t) => e * Math.exp(t), Pe = (e) => (t) => Math.log(e * t), Fe = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), Ie = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, Le = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function Re(e, t, n, r) {
	let i = n(e[0]), a = n(je(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function ze(e, t) {
	return Re(e, t, Me, ke);
}
function Be(e, t) {
	var n = Math.sign(e[0]);
	return Re(e, t, Pe(n), Ne(n));
}
function Ve(e, t, n) {
	return Re(e, t, Le(n), Le(1 / n));
}
function He(e, t, n, r, i) {
	let a = r(e[0]), o = r(je(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function Ue(e, t, n) {
	return He(e, t, n, Me, ke);
}
function We(e, t, n) {
	let r = Math.sign(e[0]);
	return He(e, t, n, Pe(r), Ne(r));
}
function Ge(e, t, n, r) {
	return He(e, t, n, Le(r), Le(1 / r));
}
function Ke(e, t, n, r) {
	return He(e, t, n, Fe(r), Ie(r));
}
function qe(e) {
	return e == null ? [] : C(e) ? e : [e];
}
function Je(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function Ye(e) {
	return typeof e == "function";
}
var Xe = "descending";
function Ze(e, t, n) {
	n ||= {}, t = qe(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || $e;
	return qe(e).forEach((e, o) => {
		e != null && (r.push(t[o] === Xe ? -1 : 1), i.push(e = Ye(e) ? e : Oe(e, null, n)), (Se(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : S(o(i, r), Object.keys(a));
}
var Qe = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e), $e = (e, t) => e.length === 1 ? et(e[0], t[0]) : tt(e, t, e.length), et = (e, t) => function(n, r) {
	return Qe(e(n), e(r)) * t;
}, tt = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = Qe(a(r), a(i));
	return o * t[s];
});
function nt(e) {
	return typeof e == "boolean";
}
function rt(e) {
	return typeof e == "number";
}
function it(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function w(e) {
	return typeof e == "string";
}
function at(e, t) {
	let n = e[0], r = je(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function ot(e) {
	return e && je(e) - e[0] || 0;
}
function st(e) {
	return C(e) ? `[${e.map((e) => e === null ? "null" : st(e))}]` : Ae(e) || w(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function ct(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/data/sideInputBinding.js
var lt = class {
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
}, ut = class {
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
			view: dt(e, this.paramRuntimeProvider),
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
		this.#e ||= (this.dataDependencies.length && (this.#i = new lt(this)), this.initialize(), !0);
	}
	#a() {
		this._propagate = Function("children", "stats", _(this.children.length).map((e) => `const child${e} = children[${e}];`).join("\n") + `return function propagate(datum) {
                    if (stats.count === 0) {
                        stats.first = structuredClone(datum);
                    }
                    stats.count++;
                ${_(this.children.length).map((e) => `child${e}.handle(datum);`).join("\n")}
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
function dt(e, t) {
	if ("view" in e) return e.view;
	if (t && "getPathString" in t) return t;
}
function ft(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function pt(e) {
	return e.type == "file";
}
function mt(e) {
	return e.type == "facet";
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var ht = class extends ut {
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
}, T = "__uniqueId", gt = 1e4, _t = [null], vt = class extends ht {
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
		e[T] = this.#e(), this._propagate(e);
	}
	#e() {
		return ++this._id % 1e4 == 0 && (this._id = this.#t() * gt), this._id;
	}
	#t() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this.#n();
	}
	#n() {
		let e = _t.length;
		return _t[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../core/src/utils/field.js
function yt(e, t = e) {
	return /^[A-Za-z0-9_]+$/.test(e) ? S(Function("validator", `
                let validated = !validator;
                return function accessField(datum) {
                    if (!validated) {
                        validator(datum);
                        validated = true;
                    }
                    return datum[${JSON.stringify(e)}];
                }`)(function(t) {
		e in t || bt(t, e);
	}), [e], t) : Oe(e);
}
function bt(e, t) {
	throw Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function xt(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = wt(t), r.scaleChannel = ((zt(t) && t.resolutionChannel) ?? (un(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Tt({
			scaleChannel: r.scaleChannel,
			source: Ct(t)
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
	if (E(t)) try {
		return r(yt(t.field));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	else if (Wt(t)) return r(n.createExpression(t.expr));
	else if (Rt(t)) return i(t.datum);
	else if (Lt(t)) return i(t.value);
	else throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function St(e) {
	return e.scaleChannel !== void 0;
}
function Ct(e) {
	if (E(e)) return {
		kind: "field",
		value: e.field
	};
	if (Wt(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (Rt(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (Lt(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function wt(e) {
	let t = Ct(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + Ot(t.value) : t.kind + "|" + Dt(t);
}
function Tt({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + Dt(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function Et(e, t) {
	let { domainKey: n, domainKeyBase: r } = Tt({
		scaleChannel: e.scaleChannel,
		source: Ct(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function Dt(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return Ot(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function Ot(e) {
	return G(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../core/src/encoder/encoder.js
function kt(e, t, n, r) {
	let i, a = Xi(!1), o = () => {
		if (i) return i;
		let o = n.findValue(e);
		if (!o) return a;
		let s = {};
		if (Ni(o)) {
			let n = Object.keys(o.intervals);
			for (let r of n) {
				let n = t[r];
				if (E(n)) {
					s[r] = n.field;
					continue;
				} else if (n && "condition" in n) {
					let e = n.condition;
					if (E(e)) {
						s[r] = e.field;
						continue;
					}
				}
				throw Error(`Selection "${e}" has an interval for "${r}" channel, but could not find a fieldDef: ${JSON.stringify(t[r])}`);
			}
		}
		let c = Mi({
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
function At(e, t, n, r) {
	let i = Gt(t) || Kt(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], a = [...i, t], o = a.map((t, o) => {
		let s = i[o];
		return {
			accessor: xt(e, t, r),
			predicate: s?.param ? kt(s.param, n, r, s.empty) : Object.assign(Xi(o === a.length - 1), { empty: !1 })
		};
	});
	if (o.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return o;
}
function jt(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale(), i = (t, n) => {
		let r = e.getScaleResolution(t);
		e.paramRuntime.operation("encoder scale", [r.getMappingRef()], () => r.getScale(), n);
	};
	for (let [a, o] of Object.entries(t)) {
		if (!o) continue;
		let s = a;
		Mt(s) || (n[s] = Ft(At(s, o, t, e.paramRuntime), r, i));
	}
	return n;
}
function Mt(e) {
	return e === "key" || e === "search" || e === "tooltip";
}
function Nt(e) {
	return e.branches.map((e) => e.accessor);
}
function Pt(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function Ft(e, t, n) {
	if (e.length === 1) {
		let r = It(e[0].accessor, t, n);
		return Object.assign(r, { branches: e });
	}
	let r = e.map((e) => e.predicate), i = e.map((e) => It(e.accessor, t, n)), a = Object.assign((e) => {
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
function It(e, t, n) {
	let { channel: r, scaleChannel: i, channelDef: a } = e, o = e.scaleChannel ? t(i) : void 0;
	if (i && !o) throw Error(`Missing scale! "${r}": ${JSON.stringify(a)}`);
	let s = Object.assign(o ? (t) => o(e(t)) : (t) => e(t), {
		scale: o,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: Xi(!0)
		}],
		channelDef: a
	});
	return o && n?.(i, (e) => {
		o = e, s.scale = e;
	}), s;
}
function Lt(e) {
	return e && "value" in e;
}
function E(e) {
	return e && "field" in e;
}
function Rt(e) {
	return e && "datum" in e;
}
function zt(e) {
	return E(e) || Rt(e) || Wt(e) || Ut(e);
}
function Bt(e) {
	if (Kt(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => zt(e));
	} else if (zt(e)) return e;
}
function Vt(e) {
	let t = e && Bt(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function Ht(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = Bt(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function Ut(e) {
	return e && "chrom" in e;
}
function Wt(e) {
	return e && "expr" in e;
}
function Gt(e) {
	return (E(e) || Rt(e)) && "condition" in e;
}
function Kt(e) {
	return Lt(e) && "condition" in e;
}
var qt = ["x", "y"], Jt = ["x2", "y2"], Yt = ["xOffset", "yOffset"], Xt = [...qt, ...Jt];
function Zt(e) {
	return qt.includes(e);
}
function Qt(e) {
	return Xt.includes(e);
}
function $t(e) {
	return Yt.includes(e);
}
function en(e) {
	return sn(e) == "x" ? "xOffset" : "yOffset";
}
function tn(e, t, n) {
	return t ?? (n ? 0 : e);
}
var nn = {
	x: "x2",
	y: "y2"
}, rn = Object.fromEntries(Object.entries(nn).map((e) => [e[1], e[0]]));
function an(e) {
	return e in rn;
}
function on(e) {
	let t = nn[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function sn(e) {
	return rn[e] ?? e;
}
function cn(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(sn(e));
}
function ln(e) {
	return ["shape", "direction"].includes(e);
}
function un(e) {
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
function dn(e) {
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
function fn(e) {
	if (!ln(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(dn(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var pn = "RawCode", mn = "Literal", hn = "Property", gn = "Identifier", _n = "ArrayExpression", vn = "BinaryExpression", yn = "CallExpression", bn = "ConditionalExpression", xn = "LogicalExpression", Sn = "MemberExpression", Cn = "ObjectExpression", wn = "UnaryExpression";
function D(e) {
	this.type = e;
}
D.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = Tn(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function Tn(e) {
	switch (e.type) {
		case _n: return e.elements;
		case vn:
		case xn: return [e.left, e.right];
		case yn: return [e.callee].concat(e.arguments);
		case bn: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case Sn: return [e.object, e.property];
		case Cn: return e.properties;
		case hn: return [e.key, e.value];
		case wn: return [e.argument];
		case gn:
		case mn:
		case pn:
		default: return [];
	}
}
var O, k, A, j, M, En = 1, Dn = 2, N = 3, P = 4, On = 5, F = 6, I = 7, kn = 8, An = 9;
O = {}, O[En] = "Boolean", O[Dn] = "<end>", O[N] = "Identifier", O[P] = "Keyword", O[On] = "Null", O[F] = "Numeric", O[I] = "Punctuator", O[kn] = "String", O[An] = "RegularExpression";
var jn = "ArrayExpression", Mn = "BinaryExpression", Nn = "CallExpression", Pn = "ConditionalExpression", Fn = "Identifier", In = "Literal", Ln = "LogicalExpression", Rn = "MemberExpression", zn = "ObjectExpression", Bn = "Property", Vn = "UnaryExpression", L = "Unexpected token %0", Hn = "Unexpected number", Un = "Unexpected string", Wn = "Unexpected identifier", Gn = "Unexpected reserved word", Kn = "Unexpected end of input", qn = "Invalid regular expression", Jn = "Invalid regular expression: missing /", Yn = "Octal literals are not allowed in strict mode.", Xn = "Duplicate data property in object literal not allowed in strict mode", R = "ILLEGAL", Zn = "Disabled.", Qn = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), $n = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function er(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function z(e) {
	return e >= 48 && e <= 57;
}
function tr(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function nr(e) {
	return "01234567".includes(e);
}
function rr(e) {
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
function ir(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function ar(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && Qn.test(String.fromCharCode(e));
}
function or(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && $n.test(String.fromCharCode(e));
}
var sr = {
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
function cr() {
	for (; A < j;) {
		let e = k.charCodeAt(A);
		if (rr(e) || ir(e)) ++A;
		else break;
	}
}
function lr(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) A < j && tr(k[A]) ? (r = k[A++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : V({}, L, R);
	return String.fromCharCode(i);
}
function ur() {
	var e = k[A], t = 0, n, r;
	for (e === "}" && V({}, L, R); A < j && (e = k[A++], tr(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && V({}, L, R), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function dr() {
	var e = k.charCodeAt(A++), t = String.fromCharCode(e);
	for (e === 92 && (k.charCodeAt(A) !== 117 && V({}, L, R), ++A, e = lr("u"), (!e || e === "\\" || !ar(e.charCodeAt(0))) && V({}, L, R), t = e); A < j && (e = k.charCodeAt(A), or(e));) ++A, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), k.charCodeAt(A) !== 117 && V({}, L, R), ++A, e = lr("u"), (!e || e === "\\" || !or(e.charCodeAt(0))) && V({}, L, R), t += e);
	return t;
}
function fr() {
	for (var e = A++, t; A < j;) {
		if (t = k.charCodeAt(A), t === 92) return A = e, dr();
		if (or(t)) ++A;
		else break;
	}
	return k.slice(e, A);
}
function pr() {
	var e = A, t = k.charCodeAt(A) === 92 ? dr() : fr();
	return {
		type: t.length === 1 ? N : sr.hasOwnProperty(t) ? P : t === "null" ? On : t === "true" || t === "false" ? En : N,
		value: t,
		start: e,
		end: A
	};
}
function mr() {
	var e = A, t = k.charCodeAt(A), n, r = k[A], i, a, o;
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
		case 126: return ++A, {
			type: I,
			value: String.fromCharCode(t),
			start: e,
			end: A
		};
		default: if (n = k.charCodeAt(A + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return A += 2, {
				type: I,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: A
			};
			case 33:
			case 61: return A += 2, k.charCodeAt(A) === 61 && ++A, {
				type: I,
				value: k.slice(e, A),
				start: e,
				end: A
			};
		}
	}
	if (o = k.substr(A, 4), o === ">>>=") return A += 4, {
		type: I,
		value: o,
		start: e,
		end: A
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return A += 3, {
		type: I,
		value: a,
		start: e,
		end: A
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return A += 2, {
		type: I,
		value: i,
		start: e,
		end: A
	};
	if (i === "//" && V({}, L, R), "<>=!+-*%&|^/".includes(r)) return ++A, {
		type: I,
		value: r,
		start: e,
		end: A
	};
	V({}, L, R);
}
function hr(e) {
	let t = "";
	for (; A < j && tr(k[A]);) t += k[A++];
	return t.length === 0 && V({}, L, R), ar(k.charCodeAt(A)) && V({}, L, R), {
		type: F,
		value: parseInt("0x" + t, 16),
		start: e,
		end: A
	};
}
function gr(e) {
	let t = "0" + k[A++];
	for (; A < j && nr(k[A]);) t += k[A++];
	return (ar(k.charCodeAt(A)) || z(k.charCodeAt(A))) && V({}, L, R), {
		type: F,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: A
	};
}
function _r() {
	var e, t, n = k[A];
	if (er(z(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = A, e = "", n !== ".") {
		if (e = k[A++], n = k[A], e === "0") {
			if (n === "x" || n === "X") return ++A, hr(t);
			if (nr(n)) return gr(t);
			n && z(n.charCodeAt(0)) && V({}, L, R);
		}
		for (; z(k.charCodeAt(A));) e += k[A++];
		n = k[A];
	}
	if (n === ".") {
		for (e += k[A++]; z(k.charCodeAt(A));) e += k[A++];
		n = k[A];
	}
	if (n === "e" || n === "E") if (e += k[A++], n = k[A], (n === "+" || n === "-") && (e += k[A++]), z(k.charCodeAt(A))) for (; z(k.charCodeAt(A));) e += k[A++];
	else V({}, L, R);
	return ar(k.charCodeAt(A)) && V({}, L, R), {
		type: F,
		value: parseFloat(e),
		start: t,
		end: A
	};
}
function vr() {
	var e = "", t, n, r, i, a = !1;
	for (t = k[A], er(t === "'" || t === "\"", "String literal must starts with a quote"), n = A, ++A; A < j;) if (r = k[A++], r === t) {
		t = "";
		break;
	} else if (r === "\\") if (r = k[A++], !r || !ir(r.charCodeAt(0))) switch (r) {
		case "u":
		case "x":
			k[A] === "{" ? (++A, e += ur()) : e += lr(r);
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
			nr(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), A < j && nr(k[A]) && (a = !0, i = i * 8 + "01234567".indexOf(k[A++]), "0123".includes(r) && A < j && nr(k[A]) && (i = i * 8 + "01234567".indexOf(k[A++]))), e += String.fromCharCode(i)) : e += r;
			break;
	}
	else r === "\r" && k[A] === "\n" && ++A;
	else if (ir(r.charCodeAt(0))) break;
	else e += r;
	return t !== "" && V({}, L, R), {
		type: kn,
		value: e,
		octal: a,
		start: n,
		end: A
	};
}
function yr(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		V({}, qn);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		V({}, qn);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function br() {
	var e = k[A], t, n, r, i;
	for (er(e === "/", "Regular expression literal must start with a slash"), t = k[A++], n = !1, r = !1; A < j;) if (e = k[A++], t += e, e === "\\") e = k[A++], ir(e.charCodeAt(0)) && V({}, Jn), t += e;
	else if (ir(e.charCodeAt(0))) V({}, Jn);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || V({}, Jn), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function xr() {
	for (var e, t = "", n = ""; A < j && (e = k[A], or(e.charCodeAt(0)));) ++A, e === "\\" && A < j ? V({}, L, R) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && V({}, qn, n), {
		value: n,
		literal: t
	};
}
function Sr() {
	var e, t, n, r;
	return M = null, cr(), e = A, t = br(), n = xr(), r = yr(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: A
	};
}
function Cr(e) {
	return e.type === N || e.type === P || e.type === En || e.type === On;
}
function wr() {
	if (cr(), A >= j) return {
		type: Dn,
		start: A,
		end: A
	};
	let e = k.charCodeAt(A);
	return ar(e) ? pr() : e === 40 || e === 41 || e === 59 ? mr() : e === 39 || e === 34 ? vr() : e === 46 ? z(k.charCodeAt(A + 1)) ? _r() : mr() : z(e) ? _r() : mr();
}
function B() {
	let e = M;
	return A = e.end, M = wr(), A = e.end, e;
}
function Tr() {
	let e = A;
	M = wr(), A = e;
}
function Er(e) {
	let t = new D(jn);
	return t.elements = e, t;
}
function Dr(e, t, n) {
	let r = new D(e === "||" || e === "&&" ? Ln : Mn);
	return r.operator = e, r.left = t, r.right = n, r;
}
function Or(e, t) {
	let n = new D(Nn);
	return n.callee = e, n.arguments = t, n;
}
function kr(e, t, n) {
	let r = new D(Pn);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function Ar(e) {
	let t = new D(Fn);
	return t.name = e, t;
}
function jr(e) {
	let t = new D(In);
	return t.value = e.value, t.raw = k.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function Mr(e, t, n) {
	let r = new D(Rn);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function Nr(e) {
	let t = new D(zn);
	return t.properties = e, t;
}
function Pr(e, t, n) {
	let r = new D(Bn);
	return r.key = t, r.value = n, r.kind = e, r;
}
function Fr(e, t) {
	let n = new D(Vn);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function V(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (er(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = A, n.description = i, n;
}
function Ir(e) {
	e.type === Dn && V(e, Kn), e.type === F && V(e, Hn), e.type === kn && V(e, Un), e.type === N && V(e, Wn), e.type === P && V(e, Gn), V(e, L, e.value);
}
function H(e) {
	let t = B();
	(t.type !== I || t.value !== e) && Ir(t);
}
function U(e) {
	return M.type === I && M.value === e;
}
function Lr(e) {
	return M.type === P && M.value === e;
}
function Rr() {
	let e = [];
	for (A = M.start, H("["); !U("]");) U(",") ? (B(), e.push(null)) : (e.push(W()), U("]") || H(","));
	return B(), Er(e);
}
function zr() {
	A = M.start;
	let e = B();
	return e.type === kn || e.type === F ? (e.octal && V(e, Yn), jr(e)) : Ar(e.value);
}
function Br() {
	var e, t, n, r;
	if (A = M.start, e = M, e.type === N) return n = zr(), H(":"), r = W(), Pr("init", n, r);
	if (e.type === Dn || e.type === I) Ir(e);
	else return t = zr(), H(":"), r = W(), Pr("init", t, r);
}
function Vr() {
	var e = [], t, n, r, i = {}, a = String;
	for (A = M.start, H("{"); !U("}");) t = Br(), n = t.key.type === Fn ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? V({}, Xn) : i[r] = !0, e.push(t), U("}") || H(",");
	return H("}"), Nr(e);
}
function Hr() {
	H("(");
	let e = ei();
	return H(")"), e;
}
var Ur = { if: 1 };
function Wr() {
	var e, t, n;
	if (U("(")) return Hr();
	if (U("[")) return Rr();
	if (U("{")) return Vr();
	if (e = M.type, A = M.start, e === N || Ur[M.value]) n = Ar(B().value);
	else if (e === kn || e === F) M.octal && V(M, Yn), n = jr(B());
	else if (e === P) throw Error(Zn);
	else e === En ? (t = B(), t.value = t.value === "true", n = jr(t)) : e === On ? (t = B(), t.value = null, n = jr(t)) : U("/") || U("/=") ? (n = jr(Sr()), Tr()) : Ir(B());
	return n;
}
function Gr() {
	let e = [];
	if (H("("), !U(")")) for (; A < j && (e.push(W()), !U(")"));) H(",");
	return H(")"), e;
}
function Kr() {
	A = M.start;
	let e = B();
	return Cr(e) || Ir(e), Ar(e.value);
}
function qr() {
	return H("."), Kr();
}
function Jr() {
	H("[");
	let e = ei();
	return H("]"), e;
}
function Yr() {
	for (var e = Wr(), t, n;;) if (U(".")) n = qr(), e = Mr(".", e, n);
	else if (U("(")) t = Gr(), e = Or(e, t);
	else if (U("[")) n = Jr(), e = Mr("[", e, n);
	else break;
	return e;
}
function Xr() {
	let e = Yr();
	if (M.type === I && (U("++") || U("--"))) throw Error(Zn);
	return e;
}
function Zr() {
	var e, t;
	if (M.type !== I && M.type !== P) t = Xr();
	else if (U("++") || U("--")) throw Error(Zn);
	else if (U("+") || U("-") || U("~") || U("!")) e = B(), t = Zr(), t = Fr(e.value, t);
	else if (Lr("delete") || Lr("void") || Lr("typeof")) throw Error(Zn);
	else t = Xr();
	return t;
}
function Qr(e) {
	let t = 0;
	if (e.type !== I && e.type !== P) return 0;
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
function $r() {
	var e = M, t, n, r, i, a, o, s, c = Zr(), l;
	if (r = M, i = Qr(r), i === 0) return c;
	for (r.prec = i, B(), t = [e, M], o = Zr(), a = [
		c,
		r,
		o
	]; (i = Qr(M)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = Dr(s, c, o), a.push(n);
		r = B(), r.prec = i, a.push(r), t.push(M), n = Zr(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = Dr(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function W() {
	var e = $r(), t, n;
	return U("?") && (B(), t = W(), H(":"), n = W(), e = kr(e, t, n)), e;
}
function ei() {
	let e = W();
	if (U(",")) throw Error(Zn);
	return e;
}
function ti(e) {
	k = e, A = 0, j = k.length, M = null, Tr();
	let t = ei();
	if (M.type !== Dn) throw Error("Unexpect token after expression.");
	return t;
}
var ni = {
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
function ri(e) {
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
function ii(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function ai(e) {
	e ||= {};
	let t = e.allowed ? g(e.allowed) : {}, n = e.forbidden ? g(e.forbidden) : {}, r = e.constants || ni, a = (e.functions || ri)(_), o = e.globalvar, s = e.fieldvar, l = f(o) ? o : (e) => `${o}["${e}"]`;
	[...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
	let u = {}, d = {}, h = 0;
	function _(e) {
		if (m(e)) return e;
		let t = ee[e.type];
		return t ?? i("Unsupported type: " + e.type), t(e);
	}
	let ee = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let a = e.name;
			return h > 0 ? a : p(n, a) ? i("Illegal identifier: " + a) : p(r, a) ? r[a] : p(t, a) ? a : (u[a] = 1, l(a));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = _(e.object);
			t && (h += 1);
			let r = _(e.property);
			return n === s && (d[ii(r)] = 1), t && --h, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && i("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = p(a, t) && a[t];
			return r || i("Unrecognized function: " + t), f(r) ? r(n) : r + "(" + n.map(_).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(_).join(",") + "]",
		BinaryExpression: (e) => "(" + _(e.left) + " " + e.operator + " " + _(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + _(e.argument) + ")",
		ConditionalExpression: (e) => "(" + _(e.test) + "?" + _(e.consequent) + ":" + _(e.alternate) + ")",
		LogicalExpression: (e) => "(" + _(e.left) + e.operator + _(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.name;
				c.has(e) && i("Illegal property: " + e);
			}
			return "{" + e.properties.map(_).join(",") + "}";
		},
		Property: (e) => {
			h += 1;
			let t = _(e.key);
			return --h, t + ":" + _(e.value);
		}
	};
	function v(e) {
		let t = {
			code: _(e),
			globals: Object.keys(u),
			fields: Object.keys(d)
		};
		return u = {}, d = {}, t;
	}
	return v.functions = a, v.constants = r, v;
}
//#endregion
//#region ../core/src/utils/smoothstep.js
function oi(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function si(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function ci(e, t, n) {
	return si((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/utils/expression.js
function li(e) {
	return C(e) || ArrayBuffer.isView(e) ? e : null;
}
function ui(e) {
	return li(e) || (w(e) ? e : null);
}
var di = {
	clamp: si,
	format(e, t) {
		return me(t)(e);
	},
	join(e, t) {
		return li(e).join(t);
	},
	indexof(e, t, n) {
		return ui(e).indexOf(t, n);
	},
	lastindexof(e, t, n) {
		return ui(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return w(e) ? Array.from(e).reverse().join("") : li(e).slice().reverse();
	},
	slice(e, t, n) {
		return ui(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: C,
	isBoolean: nt,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: rt,
	isObject: Ae,
	isRegExp: it,
	isString: w,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: at,
	linearstep: ci,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return li(e).slice().sort(Qe);
	},
	center(e) {
		let t = li(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return ot(e);
	},
	smoothstep: oi
};
function fi(e) {
	let t = !1, n = bi(e, {}, { resolveScaleResolution: () => (t = !0, {
		channel: "analysis",
		getDomainRef: () => void 0,
		getMappingRef: () => void 0,
		getConfigurationRef: () => void 0
	}) });
	return {
		usesScaleHelper: t,
		globals: n.globals
	};
}
function pi(e, t) {
	let n = ri(e);
	for (let e in di) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"linearize"
	]) n[r] = (n) => mi(e, t, r, n);
	return n;
}
function mi(e, t, n, r) {
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert" || n === "linearize") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	let i = hi(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function hi(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function gi(e, t) {
	let n = (n) => vi(t, e, n);
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
var _i = /* @__PURE__ */ new WeakSet();
function vi(e, t, n) {
	if (_i.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	_i.add(e);
	try {
		return n();
	} finally {
		_i.delete(e);
	}
}
function yi(e, t) {
	return e === "domain" ? t.getDomainRef() : e === "linearize" ? t.getConfigurationRef() : t.getMappingRef();
}
function bi(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = 1, o = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, o) {
				let s = e + ":" + n, c = i.get(s);
				if (c) return c;
				let l = r.get(s);
				l || (l = yi(e, o), r.set(s, l));
				let u = "__scale_helper_" + a++, d = {
					codeName: u,
					dependency: l
				};
				return i.set(s, d), t[u] = gi(e, o), d;
			}
		}, s = ai({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => pi(e, o)
		})(ti(e)), c = Function("datum", "globalObject", `"use strict";
            try {
                return (${s.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`).bind(di), l = (e) => c(e, t);
		return l.fields = s.fields, l.globals = s.globals, l.code = s.code, l.scaleDependencies = Array.from(new Set(r.values())), l;
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
var xi = ai({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function Si(e) {
	try {
		let t = xi(ti(e));
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
function Ci(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	} else return e;
}
function wi(e) {
	return e?.filter ? Si(e.filter) : () => !0;
}
function Ti(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function Ei(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[T]
	};
}
function Di(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[T], e]))
	};
}
function Oi(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => yt(e)), r = (e) => n.map((t) => t(e));
	if (Pi(e)) return e.datum ? [r(e.datum)] : [];
	if (Fi(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function ki(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? Ei(i[0] ?? null) : Di(i),
		unresolved: a
	};
}
function Ai(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function ji(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[T], e);
	for (let e of n ?? []) i.delete(e[T]);
	for (let e of r ?? []) {
		let t = e[T];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function Mi(e, t) {
	let n = !!(e.empty ?? !0), r = Ki(e.param), i = e.fields ?? {};
	if (Pi(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(T)}]`;
	if (Fi(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(T)}])`;
	if (Ni(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(Zt);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = on(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${c} && ${l}) : ${n})`;
		}).join(" && ");
	} else throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function Ni(e) {
	return e.type === "interval";
}
function Pi(e) {
	return e.type === "single";
}
function Fi(e) {
	return e.type === "multi";
}
function Ii(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? Ci(t.on) : Li(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : Ci(t.clear), Li(t) && t.on.type === "click" && (t.toggle = !0), t;
}
function Li(e) {
	return e && e.type == "point";
}
function Ri(e) {
	return e && e.type == "interval";
}
function zi(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function Bi(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] <= t[e] && n[1] >= t[e]);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function Vi(e = ["x"], t = {}) {
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
	return typeof e == "object" && !!e && "expr" in e && w(e.expr);
}
function Hi(e) {
	if (G(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function Ui(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function Wi(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function Gi(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function Ki(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function qi(e, t, n) {
	if ("select" in e) {
		let t = Ii(e.select);
		if (Li(t)) return t.toggle ? Di() : Ei(null);
		if (Ri(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return Ai(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return Vi(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e.expr);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function Ji(e, t, n, r, i = {}) {
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
	for (let [i, o] of Object.entries(t)) if (G(o)) if (n) {
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
function Yi(e, t, n, r) {
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
function Xi(e) {
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
//#region ../../node_modules/d3-color/src/define.js
function Zi(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Qi(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function K() {}
var q = .7, $i = 1 / q, J = "\\s*([+-]?\\d+)\\s*", ea = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ta = /^#([0-9a-f]{3,8})$/, na = RegExp(`^rgb\\(${J},${J},${J}\\)$`), ra = RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), ia = RegExp(`^rgba\\(${J},${J},${J},${ea}\\)$`), aa = RegExp(`^rgba\\(${Y},${Y},${Y},${ea}\\)$`), oa = RegExp(`^hsl\\(${ea},${Y},${Y}\\)$`), sa = RegExp(`^hsla\\(${ea},${Y},${Y},${ea}\\)$`), ca = {
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
Zi(K, pa, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: la,
	formatHex: la,
	formatHex8: ua,
	formatHsl: da,
	formatRgb: fa,
	toString: fa
});
function la() {
	return this.rgb().formatHex();
}
function ua() {
	return this.rgb().formatHex8();
}
function da() {
	return Ca(this).formatHsl();
}
function fa() {
	return this.rgb().formatRgb();
}
function pa(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = ta.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ma(t) : n === 3 ? new X(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ha(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ha(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = na.exec(e)) ? new X(t[1], t[2], t[3], 1) : (t = ra.exec(e)) ? new X(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ia.exec(e)) ? ha(t[1], t[2], t[3], t[4]) : (t = aa.exec(e)) ? ha(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = oa.exec(e)) ? Sa(t[1], t[2] / 100, t[3] / 100, 1) : (t = sa.exec(e)) ? Sa(t[1], t[2] / 100, t[3] / 100, t[4]) : ca.hasOwnProperty(e) ? ma(ca[e]) : e === "transparent" ? new X(NaN, NaN, NaN, 0) : null;
}
function ma(e) {
	return new X(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ha(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new X(e, t, n, r);
}
function ga(e) {
	return e instanceof K || (e = pa(e)), e ? (e = e.rgb(), new X(e.r, e.g, e.b, e.opacity)) : new X();
}
function _a(e, t, n, r) {
	return arguments.length === 1 ? ga(e) : new X(e, t, n, r ?? 1);
}
function X(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Zi(X, _a, Qi(K, {
	brighter(e) {
		return e = e == null ? $i : $i ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? q : q ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new X(Z(this.r), Z(this.g), Z(this.b), xa(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: va,
	formatHex: va,
	formatHex8: ya,
	formatRgb: ba,
	toString: ba
}));
function va() {
	return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}`;
}
function ya() {
	return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}${Q((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ba() {
	let e = xa(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Z(this.r)}, ${Z(this.g)}, ${Z(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xa(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Z(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Q(e) {
	return e = Z(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Sa(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new $(e, t, n, r);
}
function Ca(e) {
	if (e instanceof $) return new $(e.h, e.s, e.l, e.opacity);
	if (e instanceof K || (e = pa(e)), !e) return new $();
	if (e instanceof $) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new $(o, s, c, e.opacity);
}
function wa(e, t, n, r) {
	return arguments.length === 1 ? Ca(e) : new $(e, t, n, r ?? 1);
}
function $(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Zi($, wa, Qi(K, {
	brighter(e) {
		return e = e == null ? $i : $i ** +e, new $(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? q : q ** +e, new $(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new X(Da(e >= 240 ? e - 240 : e + 120, i, r), Da(e, i, r), Da(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new $(Ta(this.h), Ea(this.s), Ea(this.l), xa(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = xa(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Ta(this.h)}, ${Ea(this.s) * 100}%, ${Ea(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Ta(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ea(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Da(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../core/src/view/renderingContext/clipOptions.js
function Oa(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function ka(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function Aa(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function ja(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function Ma(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return Aa(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function Na(e, t) {
	if (e === !0) return Aa(t, !0, !0);
	if (e === "x") return Aa(t, !0, !1);
	if (e === "y") return Aa(t, !1, !0);
}
function Pa(e) {
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
function Fa(e, t, n) {
	if (t !== "never") return Ma(e, Na(t, n));
}
//#endregion
export { Bt as $, Ue as $t, Ai as A, ut as At, Mi as B, nt as Bt, Ui as C, xt as Ct, Hi as D, vt as Dt, Ki as E, yt as Et, Ni as F, xe as Ft, wi as G, at as Gt, Bi as H, rt as Ht, Ri as I, Je as It, bi as J, Ve as Jt, Ti as K, ze as Kt, Fi as L, Ze as Lt, Ei as M, mt as Mt, Oi as N, pt as Nt, Vi as O, T as Ot, zi as P, st as Pt, jt as Q, ct as Qt, Li as R, Ee as Rt, Wi as S, i as Sn, tn as St, Yi as T, St as Tt, ji as U, Ae as Ut, ki as V, Ye as Vt, Ci as W, w as Wt, si as X, ot as Xt, ci as Y, je as Yt, oi as Z, De as Zt, Qi as _, d as _n, Qt as _t, Pa as a, ye as an, sn as at, G as b, s as bn, Lt as bt, K as c, he as cn, un as ct, pa as d, _ as dn, Rt as dt, We as en, Ht as et, q as f, g as fn, ln as ft, Zi as g, f as gn, $t as gt, ga as h, p as hn, Vt as ht, Aa as i, be as in, en as it, Di as j, ft as jt, Ii as k, ht as kt, X as l, y as ln, Ut as lt, _a as m, m as mn, E as mt, ka as n, Ke as nn, Nt as nt, Oa as o, _e as on, on as ot, wa as p, h as pn, Wt as pt, fi as q, Be as qt, Ma as r, ve as rn, Pt as rt, Fa as s, me as sn, zt as st, ja as t, Ge as tn, fn as tt, $i as u, te as un, cn as ut, Ji as v, u as vn, Zt as vt, Xi as w, Et as wt, Gi as x, o as xn, qt as xt, qi as y, l as yn, an as yt, Pi as z, C as zt };
