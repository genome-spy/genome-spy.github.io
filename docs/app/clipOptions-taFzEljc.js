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
function w(e) {
	return e[e.length - 1];
}
function je(e) {
	return e == null || e === "" ? null : +e;
}
var Me = (e) => (t) => e * Math.exp(t), Ne = (e) => (t) => Math.log(e * t), Pe = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), Fe = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, Ie = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function Le(e, t, n, r) {
	let i = n(e[0]), a = n(w(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function Re(e, t) {
	return Le(e, t, je, ke);
}
function ze(e, t) {
	var n = Math.sign(e[0]);
	return Le(e, t, Ne(n), Me(n));
}
function Be(e, t, n) {
	return Le(e, t, Ie(n), Ie(1 / n));
}
function Ve(e, t, n, r, i) {
	let a = r(e[0]), o = r(w(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function He(e, t, n) {
	return Ve(e, t, n, je, ke);
}
function Ue(e, t, n) {
	let r = Math.sign(e[0]);
	return Ve(e, t, n, Ne(r), Me(r));
}
function We(e, t, n, r) {
	return Ve(e, t, n, Ie(r), Ie(1 / r));
}
function Ge(e, t, n, r) {
	return Ve(e, t, n, Pe(r), Fe(r));
}
function Ke(e) {
	return e == null ? [] : C(e) ? e : [e];
}
function qe(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function Je(e) {
	return typeof e == "function";
}
var Ye = "descending";
function Xe(e, t, n) {
	n ||= {}, t = Ke(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || Qe;
	return Ke(e).forEach((e, o) => {
		e != null && (r.push(t[o] === Ye ? -1 : 1), i.push(e = Je(e) ? e : Oe(e, null, n)), (Se(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : S(o(i, r), Object.keys(a));
}
var Ze = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e), Qe = (e, t) => e.length === 1 ? $e(e[0], t[0]) : et(e, t, e.length), $e = (e, t) => function(n, r) {
	return Ze(e(n), e(r)) * t;
}, et = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = Ze(a(r), a(i));
	return o * t[s];
});
function tt(e) {
	return typeof e == "boolean";
}
function nt(e) {
	return typeof e == "number";
}
function rt(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function T(e) {
	return typeof e == "string";
}
function it(e, t) {
	let n = e[0], r = w(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function at(e) {
	return e && w(e) - e[0] || 0;
}
function ot(e) {
	return C(e) ? `[${e.map((e) => e === null ? "null" : ot(e))}]` : Ae(e) || T(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function st(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/data/flowNode.js
var ct = class {
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
			view: lt(e, this.paramRuntimeProvider),
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
function lt(e, t) {
	if ("view" in e) return e.view;
	if (t && "getPathString" in t) return t;
}
function ut(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function dt(e) {
	return e.type == "file";
}
function ft(e) {
	return e.type == "facet";
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var pt = class extends ct {
	#e;
	constructor(e, t) {
		super(t), this.#e = e.type;
	}
	get label() {
		return this.#e;
	}
	watchExprRef(e, t) {
		if ($(e)) {
			let n = e;
			return this.paramRuntime.watchExpression(n.expr, t, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			});
		}
		return (() => e);
	}
}, E = "__uniqueId", mt = 1e4, ht = [null], gt = class extends pt {
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
		e[E] = this.#e(), this._propagate(e);
	}
	#e() {
		return ++this._id % 1e4 == 0 && (this._id = this.#t() * mt), this._id;
	}
	#t() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this.#n();
	}
	#n() {
		let e = ht.length;
		return ht[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../core/src/utils/field.js
function _t(e, t = e) {
	return /^[A-Za-z0-9_]+$/.test(e) ? S(Function("validator", `
                let validated = !validator;
                return function accessField(datum) {
                    if (!validated) {
                        validator(datum);
                        validated = true;
                    }
                    return datum[${JSON.stringify(e)}];
                }`)(function(t) {
		e in t || vt(t, e);
	}), [e], t) : Oe(e);
}
function vt(e, t) {
	throw Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function yt(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = St(t), r.scaleChannel = ((Lt(t) && t.resolutionChannel) ?? (cn(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Ct({
			scaleChannel: r.scaleChannel,
			source: xt(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function i(e) {
		if ($(e)) {
			let t = r(n.createExpression(e.expr));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		} else {
			let t = e;
			return r(() => t);
		}
	}
	if (D(t)) try {
		return r(_t(t.field));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	else if (Ht(t)) return r(n.createExpression(t.expr));
	else if (It(t)) return i(t.datum);
	else if (Ft(t)) return i(t.value);
	else throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function bt(e) {
	return e.scaleChannel !== void 0;
}
function xt(e) {
	if (D(e)) return {
		kind: "field",
		value: e.field
	};
	if (Ht(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (It(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (Ft(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function St(e) {
	let t = xt(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + Et(t.value) : t.kind + "|" + Tt(t);
}
function Ct({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + Tt(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function wt(e, t) {
	let { domainKey: n, domainKeyBase: r } = Ct({
		scaleChannel: e.scaleChannel,
		source: xt(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function Tt(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return Et(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function Et(e) {
	return $(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../core/src/encoder/encoder.js
function Dt(e, t, n, r) {
	let i, a = Vi(!1), o = () => {
		if (i) return i;
		let o = n.findValue(e);
		if (!o) return a;
		let s = {};
		if (wi(o)) {
			let n = Object.keys(o.intervals);
			for (let r of n) {
				let n = t[r];
				if (D(n)) {
					s[r] = n.field;
					continue;
				} else if (n && "condition" in n) {
					let e = n.condition;
					if (D(e)) {
						s[r] = e.field;
						continue;
					}
				}
				throw Error(`Selection "${e}" has an interval for "${r}" channel, but could not find a fieldDef: ${JSON.stringify(t[r])}`);
			}
		}
		let c = Ci({
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
function Ot(e, t, n, r) {
	let i = Ut(t) || Wt(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], a = [...i, t], o = a.map((t, o) => {
		let s = i[o];
		return {
			accessor: yt(e, t, r),
			predicate: s?.param ? Dt(s.param, n, r, s.empty) : Object.assign(Vi(o === a.length - 1), { empty: !1 })
		};
	});
	if (o.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return o;
}
function kt(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale();
	for (let [i, a] of Object.entries(t)) {
		if (!a) continue;
		let o = i;
		At(o) || (n[o] = Nt(Ot(o, a, t, e.paramRuntime), r));
	}
	return n;
}
function At(e) {
	return e === "key" || e === "search" || e === "tooltip";
}
function jt(e) {
	return e.branches.map((e) => e.accessor);
}
function Mt(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function Nt(e, t) {
	if (e.length === 1) {
		let n = Pt(e[0].accessor, t);
		return Object.assign(n, { branches: e });
	}
	let n = e.map((e) => e.predicate), r = e.map((e) => Pt(e.accessor, t));
	return Object.assign((e) => {
		for (let t = 0; t < r.length; t++) if (n[t](e)) return r[t](e);
	}, {
		constant: !1,
		branches: e,
		scale: r.map((e) => e.scale).find((e) => e),
		channelDef: e.at(-1).accessor.channelDef
	});
}
function Pt(e, t) {
	let { channel: n, scaleChannel: r, channelDef: i } = e, a = e.scaleChannel ? t(r) : void 0;
	if (r && !a) throw Error(`Missing scale! "${n}": ${JSON.stringify(i)}`);
	return Object.assign(a ? (t) => a(e(t)) : (t) => e(t), {
		scale: a,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: Vi(!0)
		}],
		channelDef: i
	});
}
function Ft(e) {
	return e && "value" in e;
}
function D(e) {
	return e && "field" in e;
}
function It(e) {
	return e && "datum" in e;
}
function Lt(e) {
	return D(e) || It(e) || Ht(e) || Vt(e);
}
function Rt(e) {
	if (Wt(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => Lt(e));
	} else if (Lt(e)) return e;
}
function zt(e) {
	let t = e && Rt(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function Bt(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = Rt(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function Vt(e) {
	return e && "chrom" in e;
}
function Ht(e) {
	return e && "expr" in e;
}
function Ut(e) {
	return (D(e) || It(e)) && "condition" in e;
}
function Wt(e) {
	return Ft(e) && "condition" in e;
}
var Gt = ["x", "y"], Kt = ["x2", "y2"], qt = ["xOffset", "yOffset"], Jt = [...Gt, ...Kt];
function Yt(e) {
	return Gt.includes(e);
}
function Xt(e) {
	return Jt.includes(e);
}
function Zt(e) {
	return qt.includes(e);
}
function Qt(e) {
	return an(e) == "x" ? "xOffset" : "yOffset";
}
function $t(e, t, n) {
	return t ?? (n ? 0 : e);
}
var en = {
	x: "x2",
	y: "y2"
}, tn = Object.fromEntries(Object.entries(en).map((e) => [e[1], e[0]]));
function nn(e) {
	return e in tn;
}
function rn(e) {
	let t = en[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function an(e) {
	return tn[e] ?? e;
}
function on(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(an(e));
}
function sn(e) {
	return ["shape", "direction"].includes(e);
}
function cn(e) {
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
function ln(e) {
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
function un(e) {
	if (!sn(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(ln(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var dn = "RawCode", fn = "Literal", pn = "Property", mn = "Identifier", hn = "ArrayExpression", gn = "BinaryExpression", _n = "CallExpression", vn = "ConditionalExpression", yn = "LogicalExpression", bn = "MemberExpression", xn = "ObjectExpression", Sn = "UnaryExpression";
function O(e) {
	this.type = e;
}
O.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = Cn(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function Cn(e) {
	switch (e.type) {
		case hn: return e.elements;
		case gn:
		case yn: return [e.left, e.right];
		case _n: return [e.callee].concat(e.arguments);
		case vn: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case bn: return [e.object, e.property];
		case xn: return e.properties;
		case pn: return [e.key, e.value];
		case Sn: return [e.argument];
		case mn:
		case fn:
		case dn:
		default: return [];
	}
}
var k, A, j, M, N, wn = 1, P = 2, F = 3, I = 4, Tn = 5, L = 6, R = 7, z = 8, En = 9;
k = {}, k[wn] = "Boolean", k[P] = "<end>", k[F] = "Identifier", k[I] = "Keyword", k[Tn] = "Null", k[L] = "Numeric", k[R] = "Punctuator", k[z] = "String", k[En] = "RegularExpression";
var Dn = "ArrayExpression", On = "BinaryExpression", kn = "CallExpression", An = "ConditionalExpression", jn = "Identifier", Mn = "Literal", Nn = "LogicalExpression", Pn = "MemberExpression", Fn = "ObjectExpression", In = "Property", Ln = "UnaryExpression", B = "Unexpected token %0", Rn = "Unexpected number", zn = "Unexpected string", Bn = "Unexpected identifier", Vn = "Unexpected reserved word", Hn = "Unexpected end of input", Un = "Invalid regular expression", Wn = "Invalid regular expression: missing /", Gn = "Octal literals are not allowed in strict mode.", Kn = "Duplicate data property in object literal not allowed in strict mode", V = "ILLEGAL", H = "Disabled.", qn = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), Jn = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function Yn(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function U(e) {
	return e >= 48 && e <= 57;
}
function Xn(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function W(e) {
	return "01234567".includes(e);
}
function Zn(e) {
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
function G(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function K(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && qn.test(String.fromCharCode(e));
}
function Qn(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && Jn.test(String.fromCharCode(e));
}
var $n = {
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
function er() {
	for (; j < M;) {
		let e = A.charCodeAt(j);
		if (Zn(e) || G(e)) ++j;
		else break;
	}
}
function tr(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) j < M && Xn(A[j]) ? (r = A[j++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : Y({}, B, V);
	return String.fromCharCode(i);
}
function nr() {
	var e = A[j], t = 0, n, r;
	for (e === "}" && Y({}, B, V); j < M && (e = A[j++], Xn(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && Y({}, B, V), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function rr() {
	var e = A.charCodeAt(j++), t = String.fromCharCode(e);
	for (e === 92 && (A.charCodeAt(j) !== 117 && Y({}, B, V), ++j, e = tr("u"), (!e || e === "\\" || !K(e.charCodeAt(0))) && Y({}, B, V), t = e); j < M && (e = A.charCodeAt(j), Qn(e));) ++j, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), A.charCodeAt(j) !== 117 && Y({}, B, V), ++j, e = tr("u"), (!e || e === "\\" || !Qn(e.charCodeAt(0))) && Y({}, B, V), t += e);
	return t;
}
function ir() {
	for (var e = j++, t; j < M;) {
		if (t = A.charCodeAt(j), t === 92) return j = e, rr();
		if (Qn(t)) ++j;
		else break;
	}
	return A.slice(e, j);
}
function ar() {
	var e = j, t = A.charCodeAt(j) === 92 ? rr() : ir();
	return {
		type: t.length === 1 ? F : $n.hasOwnProperty(t) ? I : t === "null" ? Tn : t === "true" || t === "false" ? wn : F,
		value: t,
		start: e,
		end: j
	};
}
function or() {
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
			type: R,
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
				type: R,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: j
			};
			case 33:
			case 61: return j += 2, A.charCodeAt(j) === 61 && ++j, {
				type: R,
				value: A.slice(e, j),
				start: e,
				end: j
			};
		}
	}
	if (o = A.substr(j, 4), o === ">>>=") return j += 4, {
		type: R,
		value: o,
		start: e,
		end: j
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return j += 3, {
		type: R,
		value: a,
		start: e,
		end: j
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return j += 2, {
		type: R,
		value: i,
		start: e,
		end: j
	};
	if (i === "//" && Y({}, B, V), "<>=!+-*%&|^/".includes(r)) return ++j, {
		type: R,
		value: r,
		start: e,
		end: j
	};
	Y({}, B, V);
}
function sr(e) {
	let t = "";
	for (; j < M && Xn(A[j]);) t += A[j++];
	return t.length === 0 && Y({}, B, V), K(A.charCodeAt(j)) && Y({}, B, V), {
		type: L,
		value: parseInt("0x" + t, 16),
		start: e,
		end: j
	};
}
function cr(e) {
	let t = "0" + A[j++];
	for (; j < M && W(A[j]);) t += A[j++];
	return (K(A.charCodeAt(j)) || U(A.charCodeAt(j))) && Y({}, B, V), {
		type: L,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: j
	};
}
function lr() {
	var e, t, n = A[j];
	if (Yn(U(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = j, e = "", n !== ".") {
		if (e = A[j++], n = A[j], e === "0") {
			if (n === "x" || n === "X") return ++j, sr(t);
			if (W(n)) return cr(t);
			n && U(n.charCodeAt(0)) && Y({}, B, V);
		}
		for (; U(A.charCodeAt(j));) e += A[j++];
		n = A[j];
	}
	if (n === ".") {
		for (e += A[j++]; U(A.charCodeAt(j));) e += A[j++];
		n = A[j];
	}
	if (n === "e" || n === "E") if (e += A[j++], n = A[j], (n === "+" || n === "-") && (e += A[j++]), U(A.charCodeAt(j))) for (; U(A.charCodeAt(j));) e += A[j++];
	else Y({}, B, V);
	return K(A.charCodeAt(j)) && Y({}, B, V), {
		type: L,
		value: parseFloat(e),
		start: t,
		end: j
	};
}
function ur() {
	var e = "", t, n, r, i, a = !1;
	for (t = A[j], Yn(t === "'" || t === "\"", "String literal must starts with a quote"), n = j, ++j; j < M;) if (r = A[j++], r === t) {
		t = "";
		break;
	} else if (r === "\\") if (r = A[j++], !r || !G(r.charCodeAt(0))) switch (r) {
		case "u":
		case "x":
			A[j] === "{" ? (++j, e += nr()) : e += tr(r);
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
			W(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), j < M && W(A[j]) && (a = !0, i = i * 8 + "01234567".indexOf(A[j++]), "0123".includes(r) && j < M && W(A[j]) && (i = i * 8 + "01234567".indexOf(A[j++]))), e += String.fromCharCode(i)) : e += r;
			break;
	}
	else r === "\r" && A[j] === "\n" && ++j;
	else if (G(r.charCodeAt(0))) break;
	else e += r;
	return t !== "" && Y({}, B, V), {
		type: z,
		value: e,
		octal: a,
		start: n,
		end: j
	};
}
function dr(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		Y({}, Un);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		Y({}, Un);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function fr() {
	var e = A[j], t, n, r, i;
	for (Yn(e === "/", "Regular expression literal must start with a slash"), t = A[j++], n = !1, r = !1; j < M;) if (e = A[j++], t += e, e === "\\") e = A[j++], G(e.charCodeAt(0)) && Y({}, Wn), t += e;
	else if (G(e.charCodeAt(0))) Y({}, Wn);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || Y({}, Wn), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function pr() {
	for (var e, t = "", n = ""; j < M && (e = A[j], Qn(e.charCodeAt(0)));) ++j, e === "\\" && j < M ? Y({}, B, V) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && Y({}, Un, n), {
		value: n,
		literal: t
	};
}
function mr() {
	var e, t, n, r;
	return N = null, er(), e = j, t = fr(), n = pr(), r = dr(t.value, n.value), {
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
function hr(e) {
	return e.type === F || e.type === I || e.type === wn || e.type === Tn;
}
function gr() {
	if (er(), j >= M) return {
		type: P,
		start: j,
		end: j
	};
	let e = A.charCodeAt(j);
	return K(e) ? ar() : e === 40 || e === 41 || e === 59 ? or() : e === 39 || e === 34 ? ur() : e === 46 ? U(A.charCodeAt(j + 1)) ? lr() : or() : U(e) ? lr() : or();
}
function q() {
	let e = N;
	return j = e.end, N = gr(), j = e.end, e;
}
function _r() {
	let e = j;
	N = gr(), j = e;
}
function vr(e) {
	let t = new O(Dn);
	return t.elements = e, t;
}
function yr(e, t, n) {
	let r = new O(e === "||" || e === "&&" ? Nn : On);
	return r.operator = e, r.left = t, r.right = n, r;
}
function br(e, t) {
	let n = new O(kn);
	return n.callee = e, n.arguments = t, n;
}
function xr(e, t, n) {
	let r = new O(An);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function Sr(e) {
	let t = new O(jn);
	return t.name = e, t;
}
function J(e) {
	let t = new O(Mn);
	return t.value = e.value, t.raw = A.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function Cr(e, t, n) {
	let r = new O(Pn);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function wr(e) {
	let t = new O(Fn);
	return t.properties = e, t;
}
function Tr(e, t, n) {
	let r = new O(In);
	return r.key = t, r.value = n, r.kind = e, r;
}
function Er(e, t) {
	let n = new O(Ln);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function Y(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (Yn(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = j, n.description = i, n;
}
function Dr(e) {
	e.type === P && Y(e, Hn), e.type === L && Y(e, Rn), e.type === z && Y(e, zn), e.type === F && Y(e, Bn), e.type === I && Y(e, Vn), Y(e, B, e.value);
}
function X(e) {
	let t = q();
	(t.type !== R || t.value !== e) && Dr(t);
}
function Z(e) {
	return N.type === R && N.value === e;
}
function Or(e) {
	return N.type === I && N.value === e;
}
function kr() {
	let e = [];
	for (j = N.start, X("["); !Z("]");) Z(",") ? (q(), e.push(null)) : (e.push(Q()), Z("]") || X(","));
	return q(), vr(e);
}
function Ar() {
	j = N.start;
	let e = q();
	return e.type === z || e.type === L ? (e.octal && Y(e, Gn), J(e)) : Sr(e.value);
}
function jr() {
	var e, t, n, r;
	if (j = N.start, e = N, e.type === F) return n = Ar(), X(":"), r = Q(), Tr("init", n, r);
	if (e.type === P || e.type === R) Dr(e);
	else return t = Ar(), X(":"), r = Q(), Tr("init", t, r);
}
function Mr() {
	var e = [], t, n, r, i = {}, a = String;
	for (j = N.start, X("{"); !Z("}");) t = jr(), n = t.key.type === jn ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? Y({}, Kn) : i[r] = !0, e.push(t), Z("}") || X(",");
	return X("}"), wr(e);
}
function Nr() {
	X("(");
	let e = Gr();
	return X(")"), e;
}
var Pr = { if: 1 };
function Fr() {
	var e, t, n;
	if (Z("(")) return Nr();
	if (Z("[")) return kr();
	if (Z("{")) return Mr();
	if (e = N.type, j = N.start, e === F || Pr[N.value]) n = Sr(q().value);
	else if (e === z || e === L) N.octal && Y(N, Gn), n = J(q());
	else if (e === I) throw Error(H);
	else e === wn ? (t = q(), t.value = t.value === "true", n = J(t)) : e === Tn ? (t = q(), t.value = null, n = J(t)) : Z("/") || Z("/=") ? (n = J(mr()), _r()) : Dr(q());
	return n;
}
function Ir() {
	let e = [];
	if (X("("), !Z(")")) for (; j < M && (e.push(Q()), !Z(")"));) X(",");
	return X(")"), e;
}
function Lr() {
	j = N.start;
	let e = q();
	return hr(e) || Dr(e), Sr(e.value);
}
function Rr() {
	return X("."), Lr();
}
function zr() {
	X("[");
	let e = Gr();
	return X("]"), e;
}
function Br() {
	for (var e = Fr(), t, n;;) if (Z(".")) n = Rr(), e = Cr(".", e, n);
	else if (Z("(")) t = Ir(), e = br(e, t);
	else if (Z("[")) n = zr(), e = Cr("[", e, n);
	else break;
	return e;
}
function Vr() {
	let e = Br();
	if (N.type === R && (Z("++") || Z("--"))) throw Error(H);
	return e;
}
function Hr() {
	var e, t;
	if (N.type !== R && N.type !== I) t = Vr();
	else if (Z("++") || Z("--")) throw Error(H);
	else if (Z("+") || Z("-") || Z("~") || Z("!")) e = q(), t = Hr(), t = Er(e.value, t);
	else if (Or("delete") || Or("void") || Or("typeof")) throw Error(H);
	else t = Vr();
	return t;
}
function Ur(e) {
	let t = 0;
	if (e.type !== R && e.type !== I) return 0;
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
function Wr() {
	var e = N, t, n, r, i, a, o, s, c = Hr(), l;
	if (r = N, i = Ur(r), i === 0) return c;
	for (r.prec = i, q(), t = [e, N], o = Hr(), a = [
		c,
		r,
		o
	]; (i = Ur(N)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = yr(s, c, o), a.push(n);
		r = q(), r.prec = i, a.push(r), t.push(N), n = Hr(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = yr(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function Q() {
	var e = Wr(), t, n;
	return Z("?") && (q(), t = Q(), X(":"), n = Q(), e = xr(e, t, n)), e;
}
function Gr() {
	let e = Q();
	if (Z(",")) throw Error(H);
	return e;
}
function Kr(e) {
	A = e, j = 0, M = A.length, N = null, _r();
	let t = Gr();
	if (N.type !== P) throw Error("Unexpect token after expression.");
	return t;
}
var qr = {
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
function Jr(e) {
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
function Yr(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function Xr(e) {
	e ||= {};
	let t = e.allowed ? g(e.allowed) : {}, n = e.forbidden ? g(e.forbidden) : {}, r = e.constants || qr, a = (e.functions || Jr)(_), o = e.globalvar, s = e.fieldvar, l = f(o) ? o : (e) => `${o}["${e}"]`;
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
			return n === s && (d[Yr(r)] = 1), t && --h, n + (t ? "." + r : "[" + r + "]");
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
function Zr(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function Qr(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function $r(e, t, n) {
	return Qr((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/utils/expression.js
function ei(e) {
	return C(e) || ArrayBuffer.isView(e) ? e : null;
}
function ti(e) {
	return ei(e) || (T(e) ? e : null);
}
var ni = {
	clamp: Qr,
	format(e, t) {
		return me(t)(e);
	},
	join(e, t) {
		return ei(e).join(t);
	},
	indexof(e, t, n) {
		return ti(e).indexOf(t, n);
	},
	lastindexof(e, t, n) {
		return ti(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return T(e) ? Array.from(e).reverse().join("") : ei(e).slice().reverse();
	},
	slice(e, t, n) {
		return ti(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: C,
	isBoolean: tt,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: nt,
	isObject: Ae,
	isRegExp: rt,
	isString: T,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: it,
	linearstep: $r,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return ei(e).slice().sort(Ze);
	},
	center(e) {
		let t = ei(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return at(e);
	},
	smoothstep: Zr
};
function ri(e) {
	let t = !1, n = di(e, {}, { resolveScaleResolution: () => (t = !0, { channel: "analysis" }) });
	return {
		usesScaleHelper: t,
		globals: n.globals
	};
}
function ii(e, t) {
	let n = Jr(e);
	for (let e in ni) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"linearize"
	]) n[r] = (n) => ai(e, t, r, n);
	return n;
}
function ai(e, t, n, r) {
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert" || n === "linearize") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	let i = oi(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function oi(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function si(e, t) {
	let n = (n) => li(t, e, n);
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
var ci = /* @__PURE__ */ new WeakSet();
function li(e, t, n) {
	if (ci.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	ci.add(e);
	try {
		return n();
	} finally {
		ci.delete(e);
	}
}
function ui(e, t, n, r) {
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
function di(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = 1, o = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, o) {
				let s = e + ":" + n, c = i.get(s);
				if (c) return c;
				let l = r.get(s);
				l || (l = ui(e, n, o, "__scale_dependency_" + a++), r.set(s, l));
				let u = "__scale_helper_" + a++, d = {
					codeName: u,
					dependency: l
				};
				return i.set(s, d), t[u] = si(e, o), d;
			}
		}, s = Xr({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => ii(e, o)
		})(Kr(e)), c = Function("datum", "globalObject", `"use strict";
            try {
                return (${s.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`).bind(ni), l = (e) => c(e, t);
		return l.fields = s.fields, l.globals = s.globals, l.code = s.code, l.scaleDependencies = Array.from(r.values()), l;
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
var fi = Xr({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function pi(e) {
	try {
		let t = fi(Kr(e));
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
function mi(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	} else return e;
}
function hi(e) {
	return e?.filter ? pi(e.filter) : () => !0;
}
function gi(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function _i(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[E]
	};
}
function vi(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[E], e]))
	};
}
function yi(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => _t(e)), r = (e) => n.map((t) => t(e));
	if (Ti(e)) return e.datum ? [r(e.datum)] : [];
	if (Ei(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function bi(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? _i(i[0] ?? null) : vi(i),
		unresolved: a
	};
}
function xi(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function Si(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[E], e);
	for (let e of n ?? []) i.delete(e[E]);
	for (let e of r ?? []) {
		let t = e[E];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function Ci(e, t) {
	let n = !!(e.empty ?? !0), r = Li(e.param), i = e.fields ?? {};
	if (Ti(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(E)}]`;
	if (Ei(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(E)}])`;
	if (wi(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(Yt);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = rn(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${c} && ${l}) : ${n})`;
		}).join(" && ");
	} else throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function wi(e) {
	return e.type === "interval";
}
function Ti(e) {
	return e.type === "single";
}
function Ei(e) {
	return e.type === "multi";
}
function Di(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? mi(t.on) : Oi(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : mi(t.clear), Oi(t) && t.on.type === "click" && (t.toggle = !0), t;
}
function Oi(e) {
	return e && e.type == "point";
}
function ki(e) {
	return e && e.type == "interval";
}
function Ai(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function ji(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] <= t[e] && n[1] >= t[e]);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function Mi(e = ["x"], t = {}) {
	let n = {};
	for (let r of e) n[r] = t[r] ?? null;
	return {
		type: "ruler",
		values: n
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramUtils.js
function $(e) {
	return typeof e == "object" && !!e && "expr" in e && T(e.expr);
}
function Ni(e) {
	if ($(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function Pi(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function Fi(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function Ii(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function Li(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function Ri(e, t, n) {
	if ("select" in e) {
		let t = Di(e.select);
		if (Oi(t)) return t.toggle ? vi() : _i(null);
		if (ki(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return xi(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return Mi(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e.expr);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function zi(e, t, n, r, i = {}) {
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
	for (let [i, o] of Object.entries(t)) if ($(o)) if (n) {
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
function Bi(e, t, n, r) {
	if (!$(t)) return t;
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
function Vi(e) {
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
//#region ../core/src/view/renderingContext/clipOptions.js
function Hi(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function Ui(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function Wi(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function Gi(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function Ki(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return Wi(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function qi(e, t) {
	if (e === !0) return Wi(t, !0, !0);
	if (e === "x") return Wi(t, !0, !1);
	if (e === "y") return Wi(t, !1, !0);
}
function Ji(e) {
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
function Yi(e, t, n) {
	if (t !== "never") return Ki(e, qi(t, n));
}
//#endregion
export { on as $, te as $t, bi as A, Je as At, Zr as B, De as Bt, Ai as C, ot as Ct, Oi as D, Ee as Dt, Ei as E, Xe as Et, gi as F, Re as Ft, jt as G, Ge as Gt, Rt as H, He as Ht, ri as I, ze as It, an as J, ye as Jt, Mt as K, ve as Kt, di as L, Be as Lt, Si as M, Ae as Mt, mi as N, T as Nt, Ti as O, C as Ot, hi as P, it as Pt, Vt as Q, y as Qt, $r as R, w as Rt, yi as S, dt as St, ki as T, qe as Tt, Bt as U, Ue as Ut, kt as V, st as Vt, un as W, We as Wt, Lt as X, me as Xt, rn as Y, _e as Yt, cn as Z, he as Zt, Mi as _, E as _t, Ji as a, f as an, Zt as at, vi as b, ut as bt, zi as c, l as cn, nn as ct, Ii as d, i as dn, $t as dt, _ as en, It as et, Fi as f, yt as ft, Ni as g, gt, Li as h, _t as ht, Wi as i, p as in, zt as it, ji as j, nt as jt, Ci as k, tt as kt, Ri as l, s as ln, Ft as lt, Bi as m, bt as mt, Ui as n, h as nn, Ht as nt, Hi as o, d as on, Xt as ot, Pi as p, wt as pt, Qt as q, be as qt, Ki as r, m as rn, D as rt, Yi as s, u as sn, Yt as st, Gi as t, g as tn, sn as tt, $ as u, o as un, Gt as ut, Di as v, pt as vt, wi as w, xe as wt, _i as x, ft as xt, xi as y, ct as yt, Qr as z, at as zt };
