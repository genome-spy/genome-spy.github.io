//#region ../../node_modules/internmap/src/index.js
var e = class extends Map {
	constructor(e, t = i) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(t(this, e));
	}
	has(e) {
		return super.has(t(this, e));
	}
	set(e, t) {
		return super.set(n(this, e), t);
	}
	delete(e) {
		return super.delete(r(this, e));
	}
};
function t({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function n({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function r({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function i(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var a = Math.sqrt(50), o = Math.sqrt(10), s = Math.sqrt(2);
function c(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), l = r / 10 ** i, u = l >= a ? 10 : l >= o ? 5 : l >= s ? 2 : 1, d, f, p;
	return i < 0 ? (p = 10 ** -i / u, d = Math.round(e * p), f = Math.round(t * p), d / p < e && ++d, f / p > t && --f, p = -p) : (p = 10 ** i * u, d = Math.round(e / p), f = Math.round(t / p), d * p < e && ++d, f * p > t && --f), f < d && .5 <= n && n < 2 ? c(e, t, n * 2) : [
		d,
		f,
		p
	];
}
function l(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? c(t, e, n) : c(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, l = Array(s);
	if (r) {
		if (o < 0) for (let e = 0; e < s; ++e) l[e] = (a - e) / -o;
		else for (let e = 0; e < s; ++e) l[e] = (a - e) * o;
	} else if (o < 0) for (let e = 0; e < s; ++e) l[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) l[e] = (i + e) * o;
	return l;
}
function u(e, t, n) {
	return t = +t, e = +e, n = +n, c(e, t, n)[2];
}
function d(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? u(t, e, n) : u(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/range.js
function f(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatDecimal.js
function p(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function m(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../../node_modules/d3-format/src/exponent.js
function h(e) {
	return e = m(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatGroup.js
function ee(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatNumerals.js
function g(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatSpecifier.js
var _ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function v(e) {
	if (!(t = _.exec(e))) throw Error("invalid format: " + e);
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
function te(e) {
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
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatPrefixAuto.js
var ne;
function re(e, t) {
	var n = m(e, t);
	if (!n) return ne = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (ne = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + m(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../../node_modules/d3-format/src/formatRounded.js
function ie(e, t) {
	var n = m(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../../node_modules/d3-format/src/formatTypes.js
var b = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: p,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ie(e * 100, t),
	r: ie,
	s: re,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../../node_modules/d3-format/src/identity.js
function ae(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-format/src/locale.js
var oe = Array.prototype.map, se = [
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
function x(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? ae : ee(oe.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ae : g(oe.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = v(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, ee = e.comma, g = e.precision, _ = e.trim, y = e.type;
		y === "n" ? (ee = !0, y = "g") : b[y] || (g === void 0 && (g = 12), _ = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var re = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), ie = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), ae = b[y], oe = /[defgprs%]/.test(y);
		g = g === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
		function x(e) {
			var n = re, r = ie, o, l, p;
			if (y === "c") r = ae(e) + r, e = "";
			else {
				e = +e;
				var v = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : ae(Math.abs(e), g), _ && (e = te(e)), v && +e == 0 && f !== "+" && (v = !1), n = (v ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && ne !== void 0 ? se[8 + ne / 3] : "") + r + (v && f === "(" ? ")" : ""), oe) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			ee && !m && (e = t(e, Infinity));
			var b = n.length + e.length + r.length, x = b < h ? Array(h - b + 1).join(u) : "";
			switch (ee && m && (e = t(x + e, x.length ? h - r.length : Infinity), x = ""), d) {
				case "<":
					e = n + e + r + x;
					break;
				case "=":
					e = n + x + e + r;
					break;
				case "^":
					e = x.slice(0, b = x.length >> 1) + n + e + r + x.slice(b);
					break;
				default: e = x + n + e + r;
			}
			return a(e);
		}
		return x.toString = function() {
			return e + "";
		}, x;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(h(t) / 3))) * 3, r = 10 ** -n, i = l((e = v(e), e.type = "f", e), { suffix: se[8 + n / 3] });
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
var ce, le, ue;
de({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function de(e) {
	return ce = x(e), le = ce.format, ue = ce.formatPrefix, ce;
}
//#endregion
//#region ../core/src/utils/arrayUtils.js
function fe(e, t) {
	return e.length == t.length && e.every((n, r) => e[r] === t[r]);
}
function pe(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
function me(e) {
	return e[e.length - 1];
}
function he(e, t, n) {
	if (t < 0 || t >= e.length) throw Error("Source index out of range.");
	if (n < 0 || n > e.length - 1) throw Error("Destination index out of range.");
	let [r] = e.splice(t, 1);
	e.splice(n, 0, r);
}
//#endregion
//#region ../../node_modules/vega-util/build/vega-util.js
function S(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function ge(e) {
	return e == null ? null : e.fname;
}
function _e(e) {
	return e == null ? null : e.fields;
}
function ve(e) {
	return e.length === 1 ? ye(e[0]) : be(e);
}
var ye = (e) => function(t) {
	return t[e];
}, be = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function xe(e) {
	throw Error(e);
}
function Se(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || xe("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && xe("Access path missing closing bracket: " + e), r && xe("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function Ce(e, t, n) {
	let r = Se(e);
	return e = r.length === 1 ? r[0] : e, S((n && n.get || ve)(r), [e], t || e);
}
Ce("id");
var we = S((e) => e, [], "identity");
S(() => 0, [], "zero"), S(() => 1, [], "one"), S(() => !0, [], "true"), S(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
var Te = Array.isArray;
function Ee(e) {
	return e === Object(e);
}
function De(e) {
	return e[e.length - 1];
}
function Oe(e) {
	return e == null || e === "" ? null : +e;
}
var ke = (e) => (t) => e * Math.exp(t), Ae = (e) => (t) => Math.log(e * t), je = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), Me = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, Ne = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function Pe(e, t, n, r) {
	let i = n(e[0]), a = n(De(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function Fe(e, t) {
	return Pe(e, t, Oe, we);
}
function Ie(e, t) {
	var n = Math.sign(e[0]);
	return Pe(e, t, Ae(n), ke(n));
}
function Le(e, t, n) {
	return Pe(e, t, Ne(n), Ne(1 / n));
}
function Re(e, t, n, r, i) {
	let a = r(e[0]), o = r(De(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function ze(e, t, n) {
	return Re(e, t, n, Oe, we);
}
function Be(e, t, n) {
	let r = Math.sign(e[0]);
	return Re(e, t, n, Ae(r), ke(r));
}
function Ve(e, t, n, r) {
	return Re(e, t, n, Ne(r), Ne(1 / r));
}
function He(e, t, n, r) {
	return Re(e, t, n, je(r), Me(r));
}
function Ue(e) {
	return e == null ? [] : Te(e) ? e : [e];
}
function We(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function Ge(e) {
	return typeof e == "function";
}
var Ke = "descending";
function qe(e, t, n) {
	n ||= {}, t = Ue(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || Ye;
	return Ue(e).forEach((e, o) => {
		e != null && (r.push(t[o] === Ke ? -1 : 1), i.push(e = Ge(e) ? e : Ce(e, null, n)), (_e(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : S(o(i, r), Object.keys(a));
}
var Je = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, (e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e)), Ye = (e, t) => e.length === 1 ? Xe(e[0], t[0]) : Ze(e, t, e.length), Xe = (e, t) => function(n, r) {
	return Je(e(n), e(r)) * t;
}, Ze = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = Je(a(r), a(i));
	return o * t[s];
});
function Qe(e, t, n, r) {
	let i = t[0], a = t[t.length - 1], o;
	return i > a && (o = i, i = a, a = o), n = n === void 0 || n, r = r === void 0 || r, (n ? i <= e : i < e) && (r ? e <= a : e < a);
}
function $e(e) {
	return typeof e == "boolean";
}
function et(e) {
	return typeof e == "number";
}
function tt(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function C(e) {
	return typeof e == "string";
}
function nt(e, t) {
	let n = e[0], r = De(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function rt(e) {
	return e && De(e) - e[0] || 0;
}
function it(e) {
	return Te(e) ? `[${e.map((e) => e === null ? "null" : it(e))}]` : Ee(e) || C(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function at(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/data/sideInputBinding.js
var ot = class {
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
}, st = class {
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
	get createsNewIdentity() {
		return !1;
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
			view: ct(e, this.paramRuntimeProvider),
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
		this.#e ||= (this.dataDependencies.length && (this.#i = new ot(this)), this.initialize(), !0);
	}
	#a() {
		this._propagate = Function("children", "stats", f(this.children.length).map((e) => `const child${e} = children[${e}];`).join("\n") + `return function propagate(datum) {
                    if (stats.count === 0) {
                        stats.first = structuredClone(datum);
                    }
                    stats.count++;
                ${f(this.children.length).map((e) => `child${e}.handle(datum);`).join("\n")}
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
function ct(e, t) {
	if ("view" in e) return e.view;
	if (t && "getPathString" in t) return t;
}
function lt(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function ut(e) {
	return e.type == "file";
}
function dt(e) {
	return e.type == "facet";
}
//#endregion
//#region ../core/src/utils/specError.js
function ft(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e instanceof Error && !t.has(e);) {
		t.add(e);
		let n = e.specLocation;
		if (n) return n;
		e = e.cause;
	}
}
function pt(e, t) {
	return e instanceof Error && t && !ft(e) && Object.assign(e, { specLocation: t }), e;
}
//#endregion
//#region ../core/src/utils/compileDatumAccessor.js
var mt = 0;
function ht(e, t, n, r) {
	let i = Array.from(t, (e) => {
		let t = JSON.stringify(e);
		return `if (!(${t} in datum)) missingField(datum, ${t});`;
	}).join("\n");
	return Function("missingField", "context", `"use strict";
        return function createAccessor(globalObject) {
            // accessor ${mt++}
            return function accessDatum(datum) {
                ${i}
                ${e}
            }${r ? ".bind(context)" : ""};
        };`)((e, t) => {
		throw pt(/* @__PURE__ */ Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`), n);
	}, r);
}
//#endregion
//#region ../core/src/utils/field.js
function w(e, t, n) {
	let r = Se(e), i = r.length === 1 ? r[0] : e;
	return S(ht(`return datum${r.map((e) => `[${JSON.stringify(e)}]`).join("")};`, r.length === 1 ? r : [], n)(), [i], t ?? i);
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var gt = class extends st {
	inFacet = !1;
	#e;
	#t;
	#n = 0;
	#r = 0;
	#i;
	#a = [];
	constructor(e, t) {
		super(t), this.#e = e.type;
		let n = e.debounce;
		if (n !== void 0) {
			if (!Number.isFinite(n) || n < 0) throw Error(`The debounce for the ${e.type} transform must be a non-negative finite number.`);
			this.#t = n, this.registerDisposer(() => clearTimeout(this.#i));
		}
	}
	complete() {
		let e = this.#n;
		super.complete(), this.#r = e, e == this.#n && (clearTimeout(this.#i), this.#i = void 0);
	}
	reset() {
		this.#s(), this.inFacet = !1, super.reset();
	}
	beginBatch(e) {
		e.type == "facet" && (this.inFacet = !0), this.#s(), super.beginBatch(e);
	}
	requestReactiveRepropagate() {
		if (this.#n++, this.#t === void 0) {
			this.requestRepropagate();
			return;
		}
		clearTimeout(this.#i), this.#i = void 0, this.completed && (this.#i = setTimeout(this.#o, this.#t));
	}
	#o = () => {
		this.#i = void 0, !this.disposed && this.completed && this.#r != this.#n && (this.requestRepropagate(), this.paramRuntime.flushNow());
	};
	get label() {
		return this.#e;
	}
	createFieldAccessor(e, t, { index: n, defaultValue: r } = {}) {
		let i = e[t], a = Array.isArray(i), o = this.paramRuntimeProvider?.paramRuntime;
		return w(a ? i[n] : i ?? r, void 0, o?.getSpecLocation(e, i == null ? [] : a ? [t, n] : [t]));
	}
	createFieldAccessors(e, t) {
		return pe(e[t]).map((n, r) => this.createFieldAccessor(e, t, { index: r }));
	}
	watchExprRef(e, t) {
		if ($(e)) {
			let n = e;
			return this.paramRuntime.watchExpression(n, t, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			});
		}
		return (() => e);
	}
	watchSnapshottedExpression(e) {
		let t, n;
		return t = this.paramRuntime.watchExpression(e, () => {
			n.refresh(), this.requestReactiveRepropagate();
		}, {
			scopeOwned: !1,
			registerDisposer: (e) => this.registerDisposer(e)
		}), n = t.createSnapshotEvaluator(), this.#a.push(n.refresh), n;
	}
	#s() {
		for (let e of this.#a) e();
	}
}, T = "__uniqueId", _t = 1e4, vt = [null], yt = class extends gt {
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
		return ++this._id % 1e4 == 0 && (this._id = this.#t() * _t), this._id;
	}
	#t() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this.#n();
	}
	#n() {
		let e = vt.length;
		return vt[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../core/src/selection/selectionPredicateTree.js
function bt(e, t) {
	if (!("test" in e) || !("ref" in e.test)) return e;
	let n = e.test.ref;
	if (!Object.hasOwn(t, n)) throw Error(`Unknown predicate "${n}" in unit view.`);
	return {
		...e,
		test: t[n]
	};
}
function xt(e) {
	let t = "test" in e ? e.test : {
		param: e.param,
		...e.empty === void 0 ? {} : { empty: e.empty },
		...e.project === void 0 ? {} : { project: e.project }
	}, n = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Selection predicate must be an object.");
		let t = e, r = [
			"param",
			"and",
			"or",
			"not"
		].filter((e) => e in t);
		if (r.length !== 1) throw Error("Selection predicate must have exactly one operator.");
		let i = r[0];
		if (i === "param") {
			if (typeof t.param == "string") {
				if (Object.keys(t).some((e) => ![
					"param",
					"empty",
					"project"
				].includes(e)) || typeof (t.empty ?? !0) != "boolean") throw Error("Invalid selection parameter predicate.");
				if (t.project !== void 0) {
					let e = t.project;
					if (!e || typeof e != "object" || Array.isArray(e) || Object.keys(e).length === 0 || Object.entries(e).some(([e, t]) => !["x", "y"].includes(e) || t !== e && t !== e + "2")) throw Error("Invalid interval selection projection.");
				}
				return {
					param: eo(t.param),
					empty: t.empty ?? !0,
					...t.project ? { project: { ...t.project } } : {}
				};
			}
			if (!t.param || typeof t.param != "object" || Object.keys(t.param).length !== 1 || !Array.isArray(t.param.or) || Object.keys(t).some((e) => !["param", "empty"].includes(e)) || typeof (t.empty ?? !0) != "boolean") throw Error("Invalid flat selection union.");
			if (t.param.or.length === 0) throw Error("Selection test \"or\" must be a nonempty array.");
			let e = Array.from(new Set(t.param.or.map(eo))), n = e.map((e) => ({ selectionActive: e })), r = e.map((e, t) => ({ all: [{
				param: e,
				empty: !0
			}, n[t]] }));
			return { any: t.empty === !1 ? r : [...r, { not: { any: n } }] };
		}
		if (Object.keys(t).length !== 1) throw Error("Selection predicate operators cannot be mixed.");
		if (i === "not") return { not: n(t.not) };
		let a = t[i];
		if (!Array.isArray(a) || a.length === 0) throw Error(`Selection test "${i}" must be a nonempty array.`);
		let o = a.map(n);
		return i === "and" ? { all: o } : { any: o };
	};
	return n(t);
}
function St(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if ("param" in e) t.add(e.param);
		else if ("selectionActive" in e) t.add(typeof e.selectionActive == "string" ? e.selectionActive : e.selectionActive.param);
		else if ("not" in e) n(e.not);
		else for (let t of "all" in e ? e.all : e.any) n(t);
	};
	return n(e), Array.from(t);
}
function Ct(e) {
	let t = /* @__PURE__ */ new Map(), n = (e) => {
		if ("param" in e) t.set(e.param, { selectionActive: {
			param: e.param,
			type: e.type,
			components: e.projections?.map(({ component: e }) => e) ?? []
		} });
		else if ("selectionActive" in e) t.set(e.selectionActive.param, e);
		else if ("not" in e) n(e.not);
		else for (let t of "all" in e ? e.all : e.any) n(t);
	};
	return n(e), { all: [e, { any: Array.from(t.values()) }] };
}
function wt(e) {
	if ("param" in e) return e.empty;
	if ("selectionActive" in e) return !1;
	if ("not" in e) return !wt(e.not);
	let t = "all" in e ? e.all : e.any;
	return "all" in e ? t.every(wt) : t.some(wt);
}
function Tt(e, t, n, r, i) {
	let a = (e) => {
		let t = n.findSelectionCapability?.(e);
		if (t) return t;
		let r = n.findValue(e);
		if (!r || ![
			"single",
			"multi",
			"interval"
		].includes(r.type)) throw Error(`Selection parameter "${e}" was not found.`);
		return {
			type: r.type,
			components: r.type === "interval" ? Object.keys(r.intervals).map((e) => ({ component: e })) : []
		};
	}, o = t, s = (e) => {
		let t = o[e];
		if (t && "field" in t) return t.field;
		if (t && "condition" in t) return (Array.isArray(t.condition) ? t.condition : [t.condition]).find((e) => "field" in e)?.field;
	}, c = (e) => {
		if ("all" in e) return { all: e.all.map(c) };
		if ("any" in e) return { any: e.any.map(c) };
		if ("not" in e) return { not: c(e.not) };
		let t = "param" in e ? e.param : e.selectionActive, n = a(t);
		if ("selectionActive" in e) return { selectionActive: {
			param: t,
			type: n.type,
			components: n.components.map(({ component: e }) => e)
		} };
		if (e.project && n.type !== "interval") throw Error(`Selection "${t}" is not an interval selection; project is invalid.`);
		if (n.type !== "interval") return {
			param: t,
			type: n.type,
			empty: e.empty
		};
		let l = n.components.map(({ component: e }) => e);
		if (e.project && (Object.keys(e.project).length !== l.length || l.some((t) => !(t in e.project)))) throw Error(`Selection "${t}" project must cover its declared components: ${l.join(", ")}.`);
		let u = n.components.map(({ component: n, type: a }) => {
			let c = e.project?.[n] ?? n;
			if (![
				"x",
				"x2",
				"y",
				"y2"
			].includes(c)) throw Error(`Selection "${t}" has unsupported component "${n}".`);
			let l = o[c];
			if (e.project && (!l || !("field" in l))) throw Error(`Selection "${t}" project target "${c}" must be an unconditional field encoding.`);
			let u = s(c);
			if (!u) throw Error(`Selection "${t}" has no field for "${c}".`);
			if (e.project) {
				let e = i?.(c) ?? ("type" in l ? l.type : void 0) ?? ("type" in o[n] ? o[n].type : void 0);
				if (![
					"quantitative",
					"index",
					"locus"
				].includes(a) || e !== a) throw Error(`Selection "${t}" project target "${c}" must have matching quantitative, index, or locus type (${a} vs ${e}).`);
			}
			let d = n + "2", f = e.project ? void 0 : s(d);
			return {
				component: n,
				input: c,
				field: u,
				...f && f !== u ? {
					secondaryInput: d,
					secondaryField: f,
					hitTest: r
				} : {}
			};
		});
		return {
			param: t,
			type: "interval",
			empty: e.empty,
			projections: u
		};
	};
	return c(e);
}
function Et(e, t) {
	if ("all" in e || "any" in e) {
		let n = ("all" in e ? e.all : e.any).map((e) => Et(e, t));
		return "all" in e ? (e) => n.every((t) => t(e)) : (e) => n.some((t) => t(e));
	}
	if ("not" in e) {
		let n = Et(e.not, t);
		return (e) => !n(e);
	}
	if ("selectionActive" in e) {
		let { param: n } = e.selectionActive;
		return () => Dt(t(n));
	}
	let { param: n, type: r, empty: i } = e;
	if (r === "single") return (e) => {
		let r = t(n);
		return r.uniqueId == null ? i : r.uniqueId === e[T];
	};
	if (r === "multi") return (e) => {
		let r = t(n);
		return r.data.size === 0 ? i : r.data.has(e[T]);
	};
	let a = e.projections.map((e) => ({
		...e,
		read: w(e.field),
		readSecondary: e.secondaryField ? w(e.secondaryField) : void 0
	}));
	return (e) => {
		let r = t(n);
		if (!Dt(r)) return i;
		for (let t of a) {
			let n = r.intervals[t.component], i = t.read(e), a = t.readSecondary?.(e), [o, s] = n;
			if (o === s || !(a === void 0 ? o <= i && i < s : t.hitTest === "endpoints" ? o <= i && i < s || o <= a && a < s : t.hitTest === "encloses" ? o <= Math.min(i, a) && Math.max(i, a) <= s : o < Math.max(i, a) && Math.min(i, a) < s)) return !1;
		}
		return !0;
	};
}
function Dt(e) {
	if (e.type === "single") return e.uniqueId != null;
	if (e.type === "multi") return e.data.size !== 0;
	if (e.type === "interval") return Object.values(e.intervals).every((e) => !!e);
	throw Error(`Unsupported selection type: ${e.type}`);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function Ot(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = jt(t), r.scaleChannel = ((En(t) && t.resolutionChannel) ?? (Xn(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Mt({
			scaleChannel: r.scaleChannel,
			source: At(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function i(e) {
		if ($(e)) {
			let t = r(n.createExpression(e));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		}
		{
			let t = e;
			return r(() => t);
		}
	}
	if (wn(t)) try {
		return r(w(t.field, void 0, n?.getSpecLocation?.(t, ["field"])));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	if (jn(t)) return r(n.createExpression(t));
	if (Tn(t)) return i(t.datum);
	if (Cn(t)) return i(t.value);
	throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function kt(e) {
	return e.scaleChannel !== void 0;
}
function At(e) {
	if (wn(e)) return {
		kind: "field",
		value: e.field
	};
	if (jn(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (Tn(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (Cn(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function jt(e) {
	let t = At(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + Ft(t.value) : t.kind + "|" + Pt(t);
}
function Mt({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + Pt(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function Nt(e, t) {
	let { domainKey: n, domainKeyBase: r } = Mt({
		scaleChannel: e.scaleChannel,
		source: At(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function Pt(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return Ft(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function Ft(e) {
	return $(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function It(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Lt(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function E() {}
var D = .7, Rt = 1 / D, zt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", O = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vt = /^#([0-9a-f]{3,8})$/, Ht = RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), Ut = RegExp(`^rgb\\(${O},${O},${O}\\)$`), Wt = RegExp(`^rgba\\(${zt},${zt},${zt},${Bt}\\)$`), Gt = RegExp(`^rgba\\(${O},${O},${O},${Bt}\\)$`), Kt = RegExp(`^hsl\\(${Bt},${O},${O}\\)$`), qt = RegExp(`^hsla\\(${Bt},${O},${O},${Bt}\\)$`), Jt = {
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
It(E, $t, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Yt,
	formatHex: Yt,
	formatHex8: Xt,
	formatHsl: Zt,
	formatRgb: Qt,
	toString: Qt
});
function Yt() {
	return this.rgb().formatHex();
}
function Xt() {
	return this.rgb().formatHex8();
}
function Zt() {
	return un(this).formatHsl();
}
function Qt() {
	return this.rgb().formatRgb();
}
function $t(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Vt.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? en(t) : n === 3 ? new k(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? tn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? tn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ht.exec(e)) ? new k(t[1], t[2], t[3], 1) : (t = Ut.exec(e)) ? new k(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Wt.exec(e)) ? tn(t[1], t[2], t[3], t[4]) : (t = Gt.exec(e)) ? tn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Kt.exec(e)) ? ln(t[1], t[2] / 100, t[3] / 100, 1) : (t = qt.exec(e)) ? ln(t[1], t[2] / 100, t[3] / 100, t[4]) : Jt.hasOwnProperty(e) ? en(Jt[e]) : e === "transparent" ? new k(NaN, NaN, NaN, 0) : null;
}
function en(e) {
	return new k(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function tn(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new k(e, t, n, r);
}
function nn(e) {
	return e instanceof E || (e = $t(e)), e ? (e = e.rgb(), new k(e.r, e.g, e.b, e.opacity)) : new k();
}
function rn(e, t, n, r) {
	return arguments.length === 1 ? nn(e) : new k(e, t, n, r ?? 1);
}
function k(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
It(k, rn, Lt(E, {
	brighter(e) {
		return e = e == null ? Rt : Rt ** +e, new k(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? D : D ** +e, new k(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new k(A(this.r), A(this.g), A(this.b), cn(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: an,
	formatHex: an,
	formatHex8: on,
	formatRgb: sn,
	toString: sn
}));
function an() {
	return `#${j(this.r)}${j(this.g)}${j(this.b)}`;
}
function on() {
	return `#${j(this.r)}${j(this.g)}${j(this.b)}${j((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sn() {
	let e = cn(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${A(this.r)}, ${A(this.g)}, ${A(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function cn(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function A(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function j(e) {
	return e = A(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ln(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new M(e, t, n, r);
}
function un(e) {
	if (e instanceof M) return new M(e.h, e.s, e.l, e.opacity);
	if (e instanceof E || (e = $t(e)), !e) return new M();
	if (e instanceof M) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new M(o, s, c, e.opacity);
}
function dn(e, t, n, r) {
	return arguments.length === 1 ? un(e) : new M(e, t, n, r ?? 1);
}
function M(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
It(M, dn, Lt(E, {
	brighter(e) {
		return e = e == null ? Rt : Rt ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? D : D ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new k(mn(e >= 240 ? e - 240 : e + 120, i, r), mn(e, i, r), mn(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new M(fn(this.h), pn(this.s), pn(this.l), cn(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = cn(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${fn(this.h)}, ${pn(this.s) * 100}%, ${pn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function fn(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pn(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function mn(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../core/src/encoder/encoder.js
function hn(e, t, n, r = "intersects", i) {
	let a, o, s = St(e), c = () => (a ??= Tt(e, t, n, r, i), a);
	return s.every((e) => n.findValue(e)) && c(), Object.defineProperty((e) => !s.some((e) => !n.findValue(e)) && (o ??= Et(c(), (e) => n.findValue(e)), o(e)), "selection", { get: c });
}
function gn(e, t, n, r, i = "intersects", a) {
	let o = Mn(t) || Nn(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], s = [...o, t], c = s.map((t, c) => {
		let l = o[c], u = Ot(e, t, r);
		if (Jn(e) && Cn(t)) {
			let e = t.value;
			if (e !== null && !$(e) && (typeof e != "string" || !$t(e))) throw pt(/* @__PURE__ */ Error("Invalid color: " + JSON.stringify(e)), r.getSpecLocation?.(t, ["value"]));
		}
		let d = l ? La(l) : void 0;
		return {
			accessor: u,
			predicate: d ? hn(d, n, r, i, a) : ao(c === s.length - 1)
		};
	});
	if (c.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return c;
}
function _n(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale(), i = (t, n) => {
		let r = e.getScaleResolution(t);
		e.paramRuntime.operation("encoder scale", [r.getMappingRef()], () => r.getScale(), n);
	};
	for (let [a, o] of Object.entries(t)) {
		if (!o) continue;
		let s = a;
		vn(s) || (n[s] = xn(gn(s, o, t, e.paramRuntime, e.mark.defaultHitTestMode, (t) => e.getScaleResolution(t)?.type), r, i));
	}
	return n;
}
function vn(e) {
	return e === "key" || e === "search" || e === "tooltip" || e === "order";
}
function yn(e) {
	return e.branches.map((e) => e.accessor);
}
function bn(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function xn(e, t, n) {
	if (e.length === 1) {
		let r = Sn(e[0].accessor, t, n);
		return Object.assign(r, { branches: e });
	}
	let r = e.map((e) => e.predicate), i = e.map((e) => Sn(e.accessor, t, n)), a = Object.assign((e) => {
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
function Sn(e, t, n) {
	let { channel: r, scaleChannel: i, channelDef: a } = e, o = e.scaleChannel ? t(i) : void 0;
	if (i && !o) throw Error(`Missing scale! "${r}": ${JSON.stringify(a)}`);
	let s = Object.assign(o ? (t) => o(e(t)) : (t) => e(t), {
		scale: o,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: ao(!0)
		}],
		channelDef: a
	});
	return o && n?.(i, (e) => {
		o = e, s.scale = e;
	}), s;
}
function Cn(e) {
	return e && "value" in e;
}
function wn(e) {
	return e && "field" in e;
}
function Tn(e) {
	return e && "datum" in e;
}
function En(e) {
	return wn(e) || Tn(e) || jn(e) || An(e);
}
function Dn(e) {
	if (Nn(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => En(e));
	}
	if (En(e)) return e;
}
function On(e) {
	let t = e && Dn(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function kn(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = Dn(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function An(e) {
	return e && "chrom" in e;
}
function jn(e) {
	return e && "expr" in e;
}
function Mn(e) {
	return (wn(e) || Tn(e)) && "condition" in e;
}
function Nn(e) {
	return Cn(e) && "condition" in e;
}
var Pn = ["x", "y"], Fn = ["x2", "y2"], In = ["xOffset", "yOffset"], Ln = [...Pn, ...Fn];
function Rn(e) {
	return Pn.includes(e);
}
function zn(e) {
	return Ln.includes(e);
}
function Bn(e) {
	return In.includes(e);
}
function Vn(e) {
	return qn(e) == "x" ? "xOffset" : "yOffset";
}
function Hn(e, t, n) {
	return t ?? (n ? 0 : e);
}
var Un = {
	x: "x2",
	y: "y2"
}, Wn = Object.fromEntries([
	...Object.entries(Un),
	["xOffset", "x2Offset"],
	["yOffset", "y2Offset"]
].map((e) => [e[1], e[0]]));
function Gn(e) {
	return e in Wn;
}
function Kn(e) {
	let t = Un[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function qn(e) {
	return Wn[e] ?? e;
}
function Jn(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(qn(e));
}
function Yn(e) {
	return ["shape", "direction"].includes(e);
}
function Xn(e) {
	return [
		"x",
		"y",
		"x2",
		"y2",
		"xOffset",
		"yOffset",
		"x2Offset",
		"y2Offset",
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
function Zn(e) {
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
		case "direction": return [
			"forward",
			"reverse",
			"both"
		];
	}
}
function Qn(e) {
	if (!Yn(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(Zn(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/accessor.js
function N(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/getter.js
function $n(e) {
	return e.length === 1 ? er(e[0]) : tr(e);
}
var er = (e) => function(t) {
	return t[e];
}, tr = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/error.js
function P(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/splitAccessPath.js
function nr(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || P("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && P("Access path missing closing bracket: " + e), r && P("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/field.js
function rr(e, t, n) {
	let r = nr(e), i = r.length === 1 ? r[0] : e;
	return N((n && n.get || $n)(r), [i], t || i);
}
rr("id"), N((e) => e, [], "identity"), N(() => 0, [], "zero"), N(() => 1, [], "one"), N(() => !0, [], "true"), N(() => !1, [], "false");
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/interpreter.js
var ir = /* @__PURE__ */ new Set([
	...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"),
	"__proto__",
	"then"
]);
Array.isArray;
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/isFunction.js
function ar(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/hasOwnProperty.js
function or(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/isString.js
function sr(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/toSet.js
function cr(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var lr = "RawCode", ur = "Literal", dr = "Property", fr = "Identifier", pr = "ArrayExpression", mr = "BinaryExpression", hr = "CallExpression", gr = "ConditionalExpression", _r = "LogicalExpression", vr = "MemberExpression", yr = "ObjectExpression", br = "UnaryExpression";
function F(e) {
	this.type = e;
}
F.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = xr(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function xr(e) {
	switch (e.type) {
		case pr: return e.elements;
		case mr:
		case _r: return [e.left, e.right];
		case hr: return [e.callee].concat(e.arguments);
		case gr: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case vr: return [e.object, e.property];
		case yr: return e.properties;
		case dr: return [e.key, e.value];
		case br: return [e.argument];
		case fr:
		case ur:
		case lr:
		default: return [];
	}
}
var I, L, R, z, B, Sr = 1, Cr = 2, V = 3, H = 4, wr = 5, U = 6, W = 7, Tr = 8, Er = 9;
I = {}, I[Sr] = "Boolean", I[Cr] = "<end>", I[V] = "Identifier", I[H] = "Keyword", I[wr] = "Null", I[U] = "Numeric", I[W] = "Punctuator", I[Tr] = "String", I[Er] = "RegularExpression";
var Dr = "ArrayExpression", Or = "BinaryExpression", kr = "CallExpression", Ar = "ConditionalExpression", jr = "Identifier", Mr = "Literal", Nr = "LogicalExpression", Pr = "MemberExpression", Fr = "ObjectExpression", Ir = "Property", Lr = "UnaryExpression", G = "Unexpected token %0", Rr = "Unexpected number", zr = "Unexpected string", Br = "Unexpected identifier", Vr = "Unexpected reserved word", Hr = "Unexpected end of input", Ur = "Invalid regular expression", Wr = "Invalid regular expression: missing /", Gr = "Octal literals are not allowed in strict mode.", Kr = "Duplicate data property in object literal not allowed in strict mode", K = "ILLEGAL", qr = "Disabled.", Jr = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), Yr = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function Xr(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function q(e) {
	return e >= 48 && e <= 57;
}
function Zr(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function Qr(e) {
	return "01234567".includes(e);
}
function $r(e) {
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
function ei(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function ti(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && Jr.test(String.fromCharCode(e));
}
function ni(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && Yr.test(String.fromCharCode(e));
}
var ri = {
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
function ii() {
	for (; R < z;) {
		let e = L.charCodeAt(R);
		if ($r(e) || ei(e)) ++R;
		else break;
	}
}
function ai(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) R < z && Zr(L[R]) ? (r = L[R++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : Y({}, G, K);
	return String.fromCharCode(i);
}
function oi() {
	var e = L[R], t = 0, n, r;
	for (e === "}" && Y({}, G, K); R < z && (e = L[R++], Zr(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && Y({}, G, K), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function si() {
	var e = L.charCodeAt(R++), t = String.fromCharCode(e);
	for (e === 92 && (L.charCodeAt(R) !== 117 && Y({}, G, K), ++R, e = ai("u"), (!e || e === "\\" || !ti(e.charCodeAt(0))) && Y({}, G, K), t = e); R < z && (e = L.charCodeAt(R), ni(e));) ++R, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), L.charCodeAt(R) !== 117 && Y({}, G, K), ++R, e = ai("u"), (!e || e === "\\" || !ni(e.charCodeAt(0))) && Y({}, G, K), t += e);
	return t;
}
function ci() {
	for (var e = R++, t; R < z;) {
		if (t = L.charCodeAt(R), t === 92) return R = e, si();
		if (ni(t)) ++R;
		else break;
	}
	return L.slice(e, R);
}
function li() {
	var e = R, t = L.charCodeAt(R) === 92 ? si() : ci();
	return {
		type: t.length === 1 ? V : ri.hasOwnProperty(t) ? H : t === "null" ? wr : t === "true" || t === "false" ? Sr : V,
		value: t,
		start: e,
		end: R
	};
}
function ui() {
	var e = R, t = L.charCodeAt(R), n, r = L[R], i, a, o;
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
		case 126: return ++R, {
			type: W,
			value: String.fromCharCode(t),
			start: e,
			end: R
		};
		default: if (n = L.charCodeAt(R + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return R += 2, {
				type: W,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: R
			};
			case 33:
			case 61: return R += 2, L.charCodeAt(R) === 61 && ++R, {
				type: W,
				value: L.slice(e, R),
				start: e,
				end: R
			};
		}
	}
	if (o = L.substr(R, 4), o === ">>>=") return R += 4, {
		type: W,
		value: o,
		start: e,
		end: R
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return R += 3, {
		type: W,
		value: a,
		start: e,
		end: R
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return R += 2, {
		type: W,
		value: i,
		start: e,
		end: R
	};
	if (i === "//" && Y({}, G, K), "<>=!+-*%&|^/".includes(r)) return ++R, {
		type: W,
		value: r,
		start: e,
		end: R
	};
	Y({}, G, K);
}
function di(e) {
	let t = "";
	for (; R < z && Zr(L[R]);) t += L[R++];
	return t.length === 0 && Y({}, G, K), ti(L.charCodeAt(R)) && Y({}, G, K), {
		type: U,
		value: parseInt("0x" + t, 16),
		start: e,
		end: R
	};
}
function fi(e) {
	let t = "0" + L[R++];
	for (; R < z && Qr(L[R]);) t += L[R++];
	return (ti(L.charCodeAt(R)) || q(L.charCodeAt(R))) && Y({}, G, K), {
		type: U,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: R
	};
}
function pi() {
	var e, t, n = L[R];
	if (Xr(q(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = R, e = "", n !== ".") {
		if (e = L[R++], n = L[R], e === "0") {
			if (n === "x" || n === "X") return ++R, di(t);
			if (Qr(n)) return fi(t);
			n && q(n.charCodeAt(0)) && Y({}, G, K);
		}
		for (; q(L.charCodeAt(R));) e += L[R++];
		n = L[R];
	}
	if (n === ".") {
		for (e += L[R++]; q(L.charCodeAt(R));) e += L[R++];
		n = L[R];
	}
	if (n === "e" || n === "E") {
		if (e += L[R++], n = L[R], (n === "+" || n === "-") && (e += L[R++]), q(L.charCodeAt(R))) for (; q(L.charCodeAt(R));) e += L[R++];
		else Y({}, G, K);
	}
	return ti(L.charCodeAt(R)) && Y({}, G, K), {
		type: U,
		value: parseFloat(e),
		start: t,
		end: R
	};
}
function mi() {
	var e = "", t, n, r, i, a = !1;
	for (t = L[R], Xr(t === "'" || t === "\"", "String literal must starts with a quote"), n = R, ++R; R < z;) {
		if (r = L[R++], r === t) {
			t = "";
			break;
		}
		if (r === "\\") {
			if (r = L[R++], !r || !ei(r.charCodeAt(0))) switch (r) {
				case "u":
				case "x":
					L[R] === "{" ? (++R, e += oi()) : e += ai(r);
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
				default: Qr(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), R < z && Qr(L[R]) && (a = !0, i = i * 8 + "01234567".indexOf(L[R++]), "0123".includes(r) && R < z && Qr(L[R]) && (i = i * 8 + "01234567".indexOf(L[R++]))), e += String.fromCharCode(i)) : e += r;
			}
			else r === "\r" && L[R] === "\n" && ++R;
		} else if (ei(r.charCodeAt(0))) break;
		else e += r;
	}
	return t !== "" && Y({}, G, K), {
		type: Tr,
		value: e,
		octal: a,
		start: n,
		end: R
	};
}
function hi(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		Y({}, Ur);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		Y({}, Ur);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function gi() {
	var e = L[R], t, n, r, i;
	for (Xr(e === "/", "Regular expression literal must start with a slash"), t = L[R++], n = !1, r = !1; R < z;) if (e = L[R++], t += e, e === "\\") e = L[R++], ei(e.charCodeAt(0)) && Y({}, Wr), t += e;
	else if (ei(e.charCodeAt(0))) Y({}, Wr);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || Y({}, Wr), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function _i() {
	for (var e, t = "", n = ""; R < z && (e = L[R], ni(e.charCodeAt(0)));) ++R, e === "\\" && R < z ? Y({}, G, K) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && Y({}, Ur, n), {
		value: n,
		literal: t
	};
}
function vi() {
	var e, t, n, r;
	return B = null, ii(), e = R, t = gi(), n = _i(), r = hi(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: R
	};
}
function yi(e) {
	return e.type === V || e.type === H || e.type === Sr || e.type === wr;
}
function bi() {
	if (ii(), R >= z) return {
		type: Cr,
		start: R,
		end: R
	};
	let e = L.charCodeAt(R);
	return ti(e) ? li() : e === 40 || e === 41 || e === 59 ? ui() : e === 39 || e === 34 ? mi() : e === 46 ? q(L.charCodeAt(R + 1)) ? pi() : ui() : q(e) ? pi() : ui();
}
function J() {
	let e = B;
	return R = e.end, B = bi(), R = e.end, e;
}
function xi() {
	let e = R;
	B = bi(), R = e;
}
function Si(e) {
	let t = new F(Dr);
	return t.elements = e, t;
}
function Ci(e, t, n) {
	let r = new F(e === "||" || e === "&&" ? Nr : Or);
	return r.operator = e, r.left = t, r.right = n, r;
}
function wi(e, t) {
	let n = new F(kr);
	return n.callee = e, n.arguments = t, n;
}
function Ti(e, t, n) {
	let r = new F(Ar);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function Ei(e) {
	let t = new F(jr);
	return t.name = e, t;
}
function Di(e) {
	let t = new F(Mr);
	return t.value = e.value, t.raw = L.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function Oi(e, t, n) {
	let r = new F(Pr);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function ki(e) {
	let t = new F(Fr);
	return t.properties = e, t;
}
function Ai(e, t, n) {
	let r = new F(Ir);
	return r.key = t, r.value = n, r.kind = e, r;
}
function ji(e, t) {
	let n = new F(Lr);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function Y(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (Xr(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = R, n.description = i, n;
}
function Mi(e) {
	e.type === Cr && Y(e, Hr), e.type === U && Y(e, Rr), e.type === Tr && Y(e, zr), e.type === V && Y(e, Br), e.type === H && Y(e, Vr), Y(e, G, e.value);
}
function X(e) {
	let t = J();
	(t.type !== W || t.value !== e) && Mi(t);
}
function Z(e) {
	return B.type === W && B.value === e;
}
function Ni(e) {
	return B.type === H && B.value === e;
}
function Pi() {
	let e = [];
	for (R = B.start, X("["); !Z("]");) Z(",") ? (J(), e.push(null)) : (e.push(Q()), Z("]") || X(","));
	return J(), Si(e);
}
function Fi() {
	R = B.start;
	let e = J();
	return e.type === Tr || e.type === U ? (e.octal && Y(e, Gr), Di(e)) : Ei(e.value);
}
function Ii() {
	var e, t, n, r;
	if (R = B.start, e = B, e.type === V) return n = Fi(), X(":"), r = Q(), Ai("init", n, r);
	if (e.type === Cr || e.type === W) Mi(e);
	else return t = Fi(), X(":"), r = Q(), Ai("init", t, r);
}
function Li() {
	var e = [], t, n, r, i = {}, a = String;
	for (R = B.start, X("{"); !Z("}");) t = Ii(), n = t.key.type === jr ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? Y({}, Kr) : i[r] = !0, e.push(t), Z("}") || X(",");
	return X("}"), ki(e);
}
function Ri() {
	X("(");
	let e = Xi();
	return X(")"), e;
}
var zi = { if: 1 };
function Bi() {
	var e, t, n;
	if (Z("(")) return Ri();
	if (Z("[")) return Pi();
	if (Z("{")) return Li();
	if (e = B.type, R = B.start, e === V || zi[B.value]) n = Ei(J().value);
	else if (e === Tr || e === U) B.octal && Y(B, Gr), n = Di(J());
	else if (e === H) throw Error(qr);
	else e === Sr ? (t = J(), t.value = t.value === "true", n = Di(t)) : e === wr ? (t = J(), t.value = null, n = Di(t)) : Z("/") || Z("/=") ? (n = Di(vi()), xi()) : Mi(J());
	return n;
}
function Vi() {
	let e = [];
	if (X("("), !Z(")")) for (; R < z && (e.push(Q()), !Z(")"));) X(",");
	return X(")"), e;
}
function Hi() {
	R = B.start;
	let e = J();
	return yi(e) || Mi(e), Ei(e.value);
}
function Ui() {
	return X("."), Hi();
}
function Wi() {
	X("[");
	let e = Xi();
	return X("]"), e;
}
function Gi() {
	for (var e = Bi(), t, n;;) if (Z(".")) n = Ui(), e = Oi(".", e, n);
	else if (Z("(")) t = Vi(), e = wi(e, t);
	else if (Z("[")) n = Wi(), e = Oi("[", e, n);
	else break;
	return e;
}
function Ki() {
	let e = Gi();
	if (B.type === W && (Z("++") || Z("--"))) throw Error(qr);
	return e;
}
function qi() {
	var e, t;
	if (B.type !== W && B.type !== H) t = Ki();
	else if (Z("++") || Z("--")) throw Error(qr);
	else if (Z("+") || Z("-") || Z("~") || Z("!")) e = J(), t = qi(), t = ji(e.value, t);
	else if (Ni("delete") || Ni("void") || Ni("typeof")) throw Error(qr);
	else t = Ki();
	return t;
}
function Ji(e) {
	let t = 0;
	if (e.type !== W && e.type !== H) return 0;
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
		case "%": t = 11;
	}
	return t;
}
function Yi() {
	var e = B, t, n, r, i, a, o, s, c = qi(), l;
	if (r = B, i = Ji(r), i === 0) return c;
	for (r.prec = i, J(), t = [e, B], o = qi(), a = [
		c,
		r,
		o
	]; (i = Ji(B)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = Ci(s, c, o), a.push(n);
		r = J(), r.prec = i, a.push(r), t.push(B), n = qi(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = Ci(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function Q() {
	var e = Yi(), t, n;
	return Z("?") && (J(), t = Q(), X(":"), n = Q(), e = Ti(e, t, n)), e;
}
function Xi() {
	let e = Q();
	if (Z(",")) throw Error(qr);
	return e;
}
function Zi(e) {
	L = e, R = 0, z = L.length, B = null, xi();
	let t = Xi();
	if (B.type !== Cr) throw Error("Unexpect token after expression.");
	return t;
}
var Qi = {
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
function $i(e) {
	function t(t, n, r, i) {
		let a = e(n[0]);
		return r && (a = r + "(" + a + ")", r.lastIndexOf("new ", 0) === 0 && (a = "(" + a + ")")), a + "." + t + (i < 0 ? "" : i === 0 ? "()" : "(" + n.slice(1).map(e).join(",") + ")");
	}
	function n(e, n, r) {
		return (i) => t(e, i, n, r);
	}
	let r = "new Date", i = "String", a = "RegExp";
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
			t.length < 3 && P("Missing arguments to clamp function."), t.length > 3 && P("Too many arguments to clamp function.");
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
		encodeURIComponent: "encodeURIComponent",
		regexp: a,
		test: n("test", a),
		if: function(t) {
			t.length < 3 && P("Missing arguments to if function."), t.length > 3 && P("Too many arguments to if function.");
			let n = t.map(e);
			return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
		}
	};
}
function ea(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function ta(e) {
	e ||= {};
	let t = e.allowed ? cr(e.allowed) : {}, n = e.forbidden ? cr(e.forbidden) : {}, r = e.constants || Qi, i = (e.functions || $i)(d), a = e.globalvar, o = e.fieldvar, s = ar(a) ? a : (e) => `${a}["${e}"]`, c = {}, l = {}, u = 0;
	function d(e) {
		if (sr(e)) return e;
		let t = f[e.type];
		return t ?? P("Unsupported type: " + e.type), t(e);
	}
	let f = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let i = e.name;
			return u > 0 ? i : or(n, i) ? P("Illegal identifier: " + i) : or(r, i) ? r[i] : or(t, i) ? i : (c[i] = 1, s(i));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = d(e.object);
			t && (u += 1);
			let r = d(e.property);
			return n === o && (l[ea(r)] = 1), t && --u, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && P("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = or(i, t) && i[t];
			return r || P("Unrecognized function: " + t), ar(r) ? r(n) : r + "(" + n.map(d).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(d).join(",") + "]",
		BinaryExpression: (e) => "(" + d(e.left) + " " + e.operator + " " + d(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + d(e.argument) + ")",
		ConditionalExpression: (e) => "(" + d(e.test) + "?" + d(e.consequent) + ":" + d(e.alternate) + ")",
		LogicalExpression: (e) => "(" + d(e.left) + e.operator + d(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.type === "Literal" ? String(t.key.value) : t.key.name;
				ir.has(e) && P("Illegal property: " + e);
			}
			return "{" + e.properties.map(d).join(",") + "}";
		},
		Property: (e) => {
			u += 1;
			let t = d(e.key);
			return --u, t + ":" + d(e.value);
		}
	};
	function p(e) {
		let t = {
			code: d(e),
			globals: Object.keys(c),
			fields: Object.keys(l)
		};
		return c = {}, l = {}, t;
	}
	return p.functions = i, p.constants = r, p;
}
//#endregion
//#region ../core/src/utils/smoothstep.js
function na(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function ra(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function ia(e, t, n) {
	return ra((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/genome/indexGapMapping.js
function aa(e, t, n = !1) {
	let r = 0, i = e.length;
	for (; r < i;) {
		let a = r + i >>> 1;
		e[a] < t || !n && e[a] === t ? r = a + 1 : i = a;
	}
	return r;
}
var oa = /* @__PURE__ */ new WeakSet();
function sa(e) {
	if (e && oa.has(e)) return e;
	let t = Array.from(new Set(e ?? [])).sort((e, t) => e - t);
	if (t.some((e) => !Number.isSafeInteger(e) || e < 0 || e >= 2 ** 44)) throw Error("Gap positions must be integers in [0, 2^44).");
	return oa.add(t), Object.freeze(t);
}
function ca(e = {}) {
	return e.gapWidth !== 0 && e.gapWidth !== null && e.gapPositions != null && !(Array.isArray(e.gapPositions) && e.gapPositions.length === 0);
}
function la(e) {
	return e.gapWidth > 0 && e.gapPositions.length > 0;
}
function ua(e) {
	let t = (t) => {
		let n = e[t]?.scale;
		return !!n && ca(n.props);
	};
	return Number(t("x")) | Number(t("y")) << 1;
}
function da({ domain: e, range: t, cuts: n, width: r, ranks: i, paddingInner: a, paddingOuter: o, align: s }) {
	let c = e[1] - e[0], l = t[1] - t[0], u = Math.sign(l), d = i?.[0] ?? aa(n, e[0]), f = i?.[1] ?? aa(n, e[1], !0), p = Math.abs(l) > r * (f - d), m = p ? r : 0, h = m * u, ee = l - h * (f - d), g = ee / Math.max(i ? 2 ** -52 : 1, c - a + 2 * o), _ = t[0] + (ee - g * (c - a)) * s;
	function v(t, r = 0, i = !1) {
		if (!p) return NaN;
		let o = Math.floor(t);
		return _ + (o - e[0]) * g + h * (aa(n, o, i) - d) + g * (1 - a) * r;
	}
	function y(t, r = g, i = _) {
		let a = (t - i) * u, o = r * u;
		if (o === 0) return {
			value: e[0],
			rank: d
		};
		let s = 0, c = n.length;
		for (; s < c;) {
			let t = s + c >>> 1;
			(n[t] - e[0]) * o + m * (t + 1 - d) < a ? s = t + 1 : c = t;
		}
		if (s < n.length && m > 0) {
			let t = (n[s] - e[0]) * o + m * (s - d);
			if (a >= t) return {
				value: n[s],
				rank: s + (a - t) / m
			};
		}
		return {
			value: e[0] + (a - m * (s - d)) / o,
			rank: s
		};
	}
	function te(t, n, r) {
		let i = y(n), s = Math.abs(l) / Math.max(1, 1 - a + 2 * o), c = u * Math.min(s, Math.abs(g) / t);
		return ne(c, n - c * (i.value - e[0]) - h * (i.rank - d) + r * l);
	}
	function ne(e, n) {
		let r = y(t[0] + e * 2 * o * s, e, n), i = y(t[1] + e * (a - 2 * o * (1 - s)), e, n);
		return {
			domain: [r.value, i.value],
			ranks: [r.rank, i.rank]
		};
	}
	function re(t, n) {
		let r = Math.log(t.step / g), i = g * Math.exp(n * r), a = r === 0 ? n : Math.expm1(n * r) / Math.expm1(r), o = t.start + (e[0] - t.domainStart) * t.step + h * (d - t.firstRank);
		return ne(i, _ + a * (o - _));
	}
	return {
		fits: p,
		position: v,
		invertPoint: y,
		navigate: te,
		interpolate: re,
		domainStart: e[0],
		step: g,
		start: _,
		firstRank: d,
		lastRank: f,
		gap: h
	};
}
//#endregion
//#region ../core/src/utils/expression.js
function fa(e) {
	return Te(e) || ArrayBuffer.isView(e) ? e : null;
}
function pa(e) {
	return fa(e) || (C(e) ? e : null);
}
var ma = {
	clamp: ra,
	tickStep: d,
	format(e, t) {
		return le(t)(e);
	},
	join(e, t) {
		return fa(e).join(t);
	},
	indexof(e, t, n) {
		return pa(e).indexOf(t, n);
	},
	inrange: Qe,
	lastindexof(e, t, n) {
		return pa(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return C(e) ? Array.from(e).reverse().join("") : fa(e).slice().reverse();
	},
	slice(e, t, n) {
		return pa(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: Te,
	isBoolean: $e,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: et,
	isObject: Ee,
	isRegExp: tt,
	isString: C,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: nt,
	linearstep: ia,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return fa(e).slice().sort(Je);
	},
	center(e) {
		let t = fa(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return rt(e);
	},
	smoothstep: na
};
function ha(e, t) {
	let n = !1, r = Ca(e, {}, {
		specLocation: t,
		resolveScaleResolution: () => (n = !0, {
			channel: "analysis",
			getDomainRef: () => void 0,
			getMappingRef: () => void 0,
			getConfigurationRef: () => void 0,
			getZoomLevelRef: () => void 0
		})
	});
	return {
		usesScaleHelper: n,
		globals: r.globals
	};
}
function ga(e, t) {
	let n = $i(e);
	for (let e in ma) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"bandstep",
		"linearize",
		"zoomLevel"
	]) n[r] = (n) => _a(e, t, r, n);
	return n;
}
function _a(e, t, n, r) {
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
	if (n === "bandstep" && r.length > 2) throw Error("Scale helper \"bandstep\" accepts a channel and an optional pixel extent.");
	let i = va(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function va(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function ya(e, t) {
	let n = (n) => xa(t, e, n);
	if (e === "domain") return () => n(() => t.getDomain());
	if (e === "range") return () => n(() => t.getScale().range());
	if (e === "bandwidth") return () => n(() => {
		let e = t.getScale();
		if (typeof e.bandwidth != "function") throw Error(`Scale channel "${t.channel}" does not support bandwidth().`);
		return e.bandwidth();
	});
	if (e === "bandstep") return (e) => n(() => {
		let n = t.getScale();
		if (typeof n.step != "function") throw Error(`Scale channel "${t.channel}" does not support bandstep().`);
		if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw Error("bandstep() extent must be finite and nonnegative.");
		if (ca(n.props) && e === void 0) throw Error("bandstep() requires a pixel extent for a scale with grouping gaps.");
		if (e === 0) return 0;
		let r = n.gapMapping?.(e)?.step ?? n.step(), i = n.range();
		return Math.sign(i[i.length - 1] - i[0]) * Math.abs(r);
	});
	if (e === "scale") return (e) => n(() => t.getScale()(e));
	if (e === "invert") return (e) => n(() => t.getScale().invert(e));
	if (e === "linearize") return (e) => n(() => e == null ? null : typeof t.fromComplex == "function" ? t.fromComplex(e) : e);
	if (e === "zoomLevel") return () => n(() => t.getZoomLevel());
	throw Error("Unknown scale helper: " + e);
}
var ba = /* @__PURE__ */ new WeakSet();
function xa(e, t, n) {
	if (ba.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	ba.add(e);
	try {
		return n();
	} finally {
		ba.delete(e);
	}
}
function Sa(e, t) {
	return e === "domain" ? t.getDomainRef() : e === "linearize" ? t.getConfigurationRef() : e === "zoomLevel" ? t.getZoomLevelRef() : t.getMappingRef();
}
function Ca(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = 1, s = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, s) {
				let c = e + ":" + n, l = i.get(c);
				if (l) return l;
				let u = r.get(c);
				u || (u = Sa(e, s), r.set(c, u));
				let d = "__scale_helper_" + o++, f = {
					codeName: d,
					dependency: u
				};
				return i.set(c, f), e === "zoomLevel" && a.add(s), t[d] = ya(e, s), f;
			}
		}, c = ta({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => ga(e, s)
		}), l = Zi(e), u = /* @__PURE__ */ new Set();
		l.visit((e) => {
			e.type === "MemberExpression" && e.object.type === "Identifier" && e.object.name === "datum" && (!e.computed && e.property.type === "Identifier" ? u.add(e.property.name) : e.computed && e.property.type === "Literal" && (typeof e.property.value == "string" || typeof e.property.value == "number") && u.add(String(e.property.value)));
		});
		let d = c(l), f = ht(`try {
                return (${d.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`, u, n.specLocation, ma), p = f(t);
		return p.createEvaluator = f, p.fields = d.fields, p.globals = d.globals, p.code = d.code, p.scaleDependencies = Array.from(new Set(r.values())), p.zoomLevelResolutions = Array.from(a), p;
	} catch (t) {
		throw pt(Error(`Invalid expression: ${e}, ${t.message}`, { cause: t }), n.specLocation);
	}
}
var wa = ta({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function Ta(e, t) {
	try {
		let t = wa(Zi(e));
		return Function("event", "globalObject", `"use strict";
            try {
                return !!(${t.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`);
	} catch (n) {
		throw pt(Error(`Invalid expression: ${e}, ${n.message}`, { cause: n }), t);
	}
}
//#endregion
//#region ../core/src/utils/interactionConfig.js
function Ea(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	}
	return e;
}
function Da(e, t) {
	return e?.filter ? Ta(e.filter, t) : () => !0;
}
function Oa(e, t, n) {
	return e.getSpecLocation(t, [n, ...typeof t?.[n] == "object" ? ["filter"] : []]);
}
function ka(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function Aa(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[T]
	};
}
function ja(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[T], e]))
	};
}
function Ma(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => w(e)), r = (e) => n.map((t) => t(e));
	if (Va(e)) return e.datum ? [r(e.datum)] : [];
	if (Ha(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function Na(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? Aa(i[0] ?? null) : ja(i),
		unresolved: a
	};
}
function Pa(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function Fa(e, { add: t, remove: n, toggle: r }) {
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
function Ia(e, t) {
	let n = !!(e.empty ?? !0), r = eo(e.param), i = e.fields ?? {};
	if (Va(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(T)}]`;
	if (Ha(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(T)}])`;
	if (Ba(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(Rn);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = Kn(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`, u = `${r}.intervals.${e}[0] < ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${u} && ${c} && ${l}) : ${n})`;
		}).join(" && ");
	}
	throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function La(e) {
	if ("param" in e || "test" in e) return xt(e);
}
function Ra(e) {
	return e?.selection ? St(e.selection) : [];
}
function za(e) {
	let t = Object.values(e).flatMap((e) => e.branches.flatMap(({ predicate: e }) => e.selection ? [e.selection] : [])), n = /* @__PURE__ */ new Set();
	return t.filter((e) => {
		let t = JSON.stringify(e);
		return !n.has(t) && (n.add(t), !0);
	});
}
function Ba(e) {
	return e.type === "interval";
}
function Va(e) {
	return e.type === "single";
}
function Ha(e) {
	return e.type === "multi";
}
function Ua(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? Ea(t.on) : Wa(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : Ea(t.clear), Wa(t) && t.on.type === "click" && t.toggle === void 0 && (t.toggle = !0), t;
}
function Wa(e) {
	return e && e.type == "point";
}
function Ga(e) {
	return e && e.type == "interval";
}
function Ka(e) {
	if (Va(e)) return e.uniqueId != null;
	if (Ha(e)) return e.data.size > 0;
	if (Ba(e)) return qa(e);
	throw Error(`Unsupported selection type: ${e.type}`);
}
function qa(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function Ja(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] < n[1] && n[0] <= t[e] && n[1] >= t[e]);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function Ya(e = ["x"], t = {}) {
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
	return typeof e == "object" && !!e && "expr" in e && C(e.expr);
}
function Xa(e) {
	if ($(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function Za(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function Qa(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function $a(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function eo(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function to(e, t, n) {
	if ("select" in e) {
		let t = Ua(e.select);
		if (Wa(t)) return t.toggle ? ja() : Aa(null);
		if (Ga(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return Pa(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return Ya(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function no(e, t, n, r, i = []) {
	let a = { ...t }, o = [];
	for (let [r, i] of Object.entries(t)) if ($(i)) {
		let t = e.createExpression(i), s = o.push({
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
		fn: e.createExpression(n)
	});
	if (!o.length) return a;
	let s = Array.from(new Set(o.flatMap(({ fn: e }) => e.dependencies))), c = e.computed("expression properties", s, () => o.map(({ fn: e }) => e(null)), { equals: ro }), l = c.get(), u = e.effect([c], () => {
		let e = c.get(), t = new Set(o.filter((t, n) => l[n] !== e[n]).map(({ key: e }) => e));
		l = e, n(t);
	});
	return r?.(c.dispose), r?.(u), a;
}
function ro(e, t) {
	return e.every((e, n) => e === t[n]);
}
function io(e, t, n, r) {
	if (!$(t)) return t;
	let i = () => {
		throw Error(n);
	}, a = e.watchExpression ? e.watchExpression(t, i, {
		scopeOwned: !1,
		registerDisposer: r
	}) : e.createExpression(t);
	if (!e.watchExpression) {
		let e = a.subscribe(i);
		r?.(e);
	}
	return a();
}
function ao(e) {
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
//#region ../core/src/utils/specOrigin.js
var oo = /* @__PURE__ */ new WeakMap();
function so(e, t, n) {
	let r = oo.get(e);
	return oo.set(t, {
		source: r?.source ?? e,
		path: n ?? r?.path
	}), t;
}
function co(e) {
	let t = structuredClone(e);
	function n(e, t) {
		if (e && typeof e == "object" && !oo.has(t)) {
			so(e, t);
			for (let r of Object.keys(e)) n(e[r], t[r]);
		}
	}
	return n(e, t), t;
}
function lo(e, t, n) {
	if (!e || !t) return;
	let r = oo.get(e), i = t(r?.source ?? e);
	return i === void 0 ? void 0 : {
		origin: i,
		path: r?.path ?? n
	};
}
//#endregion
//#region ../core/src/view/renderingContext/clipOptions.js
function uo(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function fo(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function po(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function mo(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function ho(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return po(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function go(e, t) {
	if (e === !0) return po(t, !0, !0);
	if (e === "x") return po(t, !0, !1);
	if (e === "y") return po(t, !1, !0);
}
function _o(e) {
	let t = !1, n = !0, r = !0, i = !1;
	return e.visit((e) => {
		let a = e.mark;
		if (a) {
			t = !0;
			let e = a.properties.clip;
			n &&= e === !0 || e === "x", r &&= e === !0 || e === "y", i ||= e === !0 || e === "x" || e === "y";
		}
	}), {
		clipX: t && n,
		clipY: t && r,
		all: n && r,
		any: i
	};
}
function vo(e, t, n) {
	if (t !== "never") return ho(e, go(t, n));
}
//#endregion
export { ia as $, lt as $t, Ba as A, ue as An, Rt as At, Fa as B, kt as Bt, za as C, Ve as Cn, Rn as Ct, Ma as D, me as Dn, Hn as Dt, Aa as E, he as En, Pn as Et, Va as F, d as Fn, nn as Ft, ha as G, wt as Gt, Da as H, bt as Ht, Ia as I, l as In, It, aa as J, gt as Jt, Ca as K, yt as Kt, La as L, e as Ln, Lt, Ha as M, h as Mn, D as Mt, Wa as N, f as Nn, dn as Nt, Ra as O, fe as On, E as Ot, Ka as P, u as Pn, rn as Pt, sa as Q, st as Qt, Na as R, Ot as Rt, Ua as S, Be as Sn, zn as St, ja as T, pe as Tn, Cn as Tt, Oa as U, St as Ut, Ea as V, Ct as Vt, ka as W, xt as Wt, la as X, pt as Xt, ua as Y, w as Yt, ca as Z, ft as Zt, ao as _, De as _n, Yn as _t, _o as a, qe as an, kn as at, Xa as b, at as bn, On as bt, co as c, $e as cn, bn as ct, no as d, Ee as dn, Kn as dt, dt as en, ra as et, to as f, C as fn, En as ft, Za as g, Le as gn, Tn as gt, Qa as h, Ie as hn, Jn as ht, po as i, We as in, Dn as it, Ga as j, v as jn, $t as jt, qa as k, le as kn, k as kt, lo as l, Ge as ln, Vn as lt, $a as m, Fe as mn, An as mt, fo as n, it as nn, _n as nt, uo as o, xe as on, Qn as ot, $ as p, nt as pn, Xn as pt, da as q, T as qt, ho as r, ge as rn, hn as rt, vo as s, Te as sn, yn as st, mo as t, ut as tn, na as tt, so as u, et as un, qn as ut, io as v, rt as vn, jn as vt, Pa as w, He as wn, Gn as wt, Ya as x, ze as xn, Bn as xt, eo as y, Se as yn, wn as yt, Ja as z, Nt as zt };
