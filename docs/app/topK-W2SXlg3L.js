import { C as e, J as t, Q as n, S as r, X as i, Y as a, Z as o, _ as s, b as c, d as l, f as u, h as d, l as f, m as ee, p, q as m, tt as h, u as g, v as te, w as _, x as ne, y as re } from "./flowNode-BSjy0Wz3.js";
import { o as v, u as y } from "./url-DeOdSRrv.js";
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/accessor.js
function b(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/getter.js
function ie(e) {
	return e.length === 1 ? ae(e[0]) : oe(e);
}
var ae = (e) => function(t) {
	return t[e];
}, oe = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/error.js
function x(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/splitAccessPath.js
function se(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || x("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && x("Access path missing closing bracket: " + e), r && x("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/field.js
function S(e, t, n) {
	let r = se(e), i = r.length === 1 ? r[0] : e;
	return b((n && n.get || ie)(r), [i], t || i);
}
S("id");
var C = b((e) => e, [], "identity");
b(() => 0, [], "zero"), b(() => 1, [], "one"), b(() => !0, [], "true"), b(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isArray.js
var w = Array.isArray;
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isObject.js
function ce(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toNumber.js
function T(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isFunction.js
function E(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/extend.js
function D(e, ...t) {
	for (let n of t) for (let t in n) e[t] = n[t];
	return e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/hasOwnProperty.js
function O(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isDate.js
function le(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isIterable.js
function ue(e) {
	return e != null && E(e[Symbol.iterator]);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isNumber.js
function de(e) {
	return typeof e == "number";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isString.js
function fe(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/stringValue.js
function k(e) {
	return w(e) ? `[${e.map((e) => e === null ? "null" : k(e))}]` : ce(e) || fe(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toBoolean.js
function pe(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toDate.js
var me = (e) => de(e) || le(e) ? e : Date.parse(e);
function he(e, t) {
	return t ||= me, e == null || e === "" ? null : t(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toString.js
function ge(e) {
	return e == null || e === "" ? null : e + "";
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var _e = {}, A = {}, j = 34, M = 10, N = 13;
function P(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function ve(e, t) {
	var n = P(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function F(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function I(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function ye(e) {
	return e < 0 ? "-" + I(-e, 6) : e > 9999 ? "+" + I(e, 6) : I(e, 4);
}
function be(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : ye(e.getUTCFullYear(), 4) + "-" + I(e.getUTCMonth() + 1, 2) + "-" + I(e.getUTCDate(), 2) + (i ? "T" + I(t, 2) + ":" + I(n, 2) + ":" + I(r, 2) + "." + I(i, 3) + "Z" : r ? "T" + I(t, 2) + ":" + I(n, 2) + ":" + I(r, 2) + "Z" : n || t ? "T" + I(t, 2) + ":" + I(n, 2) + "Z" : "");
}
function L(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? ve(e, t) : P(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === M && --i, e.charCodeAt(i - 1) === N && --i;
		function u() {
			if (c) return A;
			if (l) return l = !1, _e;
			var t, r = a, o;
			if (e.charCodeAt(r) === j) {
				for (; a++ < i && e.charCodeAt(a) !== j || e.charCodeAt(++a) === j;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === M ? l = !0 : o === N && (l = !0, e.charCodeAt(a) === M && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === M) l = !0;
				else if (o === N) l = !0, e.charCodeAt(a) === M && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== A;) {
			for (var d = []; s !== _e && s !== A;) d.push(s), s = u();
			t && (d = t(d, o++)) == null || r.push(d);
		}
		return r;
	}
	function a(t, n) {
		return t.map(function(t) {
			return n.map(function(e) {
				return u(t[e]);
			}).join(e);
		});
	}
	function o(t, n) {
		return n ??= F(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= F(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? be(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
	}
	return {
		parse: r,
		parseRows: i,
		format: o,
		formatBody: s,
		formatRows: c,
		formatRow: l,
		formatValue: u
	};
}
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function xe(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function Se(e) {
	if (e == null) return xe;
	var t, n, r = e.scale[0], i = e.scale[1], a = e.translate[0], o = e.translate[1];
	return function(e, s) {
		s || (t = n = 0);
		var c = 2, l = e.length, u = Array(l);
		for (u[0] = (t += e[0]) * r + a, u[1] = (n += e[1]) * i + o; c < l;) u[c] = e[c], ++c;
		return u;
	};
}
//#endregion
//#region ../../node_modules/topojson-client/src/reverse.js
function Ce(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function we(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return R(e, t);
		})
	} : R(e, t);
}
function R(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = z(e, t);
	return n == null && r == null ? {
		type: "Feature",
		properties: i,
		geometry: a
	} : r == null ? {
		type: "Feature",
		id: n,
		properties: i,
		geometry: a
	} : {
		type: "Feature",
		id: n,
		bbox: r,
		properties: i,
		geometry: a
	};
}
function z(e, t) {
	var n = Se(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && Ce(t, o);
	}
	function a(e) {
		return n(e);
	}
	function o(e) {
		for (var t = [], n = 0, r = e.length; n < r; ++n) i(e[n], t);
		return t.length < 2 && t.push(t[0]), t;
	}
	function s(e) {
		for (var t = o(e); t.length < 4;) t.push(t[0]);
		return t;
	}
	function c(e) {
		return e.map(s);
	}
	function l(e) {
		var t = e.type, n;
		switch (t) {
			case "GeometryCollection": return {
				type: t,
				geometries: e.geometries.map(l)
			};
			case "Point":
				n = a(e.coordinates);
				break;
			case "MultiPoint":
				n = e.coordinates.map(a);
				break;
			case "LineString":
				n = o(e.arcs);
				break;
			case "MultiLineString":
				n = e.arcs.map(o);
				break;
			case "Polygon":
				n = c(e.arcs);
				break;
			case "MultiPolygon":
				n = e.arcs.map(c);
				break;
			default: return null;
		}
		return {
			type: t,
			coordinates: n
		};
	}
	return l(t);
}
//#endregion
//#region ../../node_modules/topojson-client/src/stitch.js
function Te(e, t) {
	var n = {}, r = {}, i = {}, a = [], o = -1;
	t.forEach(function(n, r) {
		var i = e.arcs[n < 0 ? ~n : n], a;
		i.length < 3 && !i[1][0] && !i[1][1] && (a = t[++o], t[o] = n, t[r] = a);
	}), t.forEach(function(e) {
		var t = s(e), n = t[0], a = t[1], o, c;
		if (o = i[n]) {
			if (delete i[o.end], o.push(e), o.end = a, c = r[a]) {
				delete r[c.start];
				var l = c === o ? o : o.concat(c);
				r[l.start = o.start] = i[l.end = c.end] = l;
			} else r[o.start] = i[o.end] = o;
		} else if (o = r[a]) {
			if (delete r[o.start], o.unshift(e), o.start = n, c = i[n]) {
				delete i[c.end];
				var u = c === o ? o : c.concat(o);
				r[u.start = c.start] = i[u.end = o.end] = u;
			} else r[o.start] = i[o.end] = o;
		} else o = [e], r[o.start = n] = i[o.end = a] = o;
	});
	function s(t) {
		var n = e.arcs[t < 0 ? ~t : t], r = n[0], i;
		return e.transform ? (i = [0, 0], n.forEach(function(e) {
			i[0] += e[0], i[1] += e[1];
		})) : i = n[n.length - 1], t < 0 ? [i, r] : [r, i];
	}
	function c(e, t) {
		for (var r in e) {
			var i = e[r];
			delete t[i.start], delete i.start, delete i.end, i.forEach(function(e) {
				n[e < 0 ? ~e : e] = 1;
			}), a.push(i);
		}
	}
	return c(i, r), c(r, i), t.forEach(function(e) {
		n[e < 0 ? ~e : e] || a.push([e]);
	}), a;
}
//#endregion
//#region ../../node_modules/topojson-client/src/mesh.js
function Ee(e) {
	return z(e, De.apply(this, arguments));
}
function De(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = Oe(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: Te(e, r)
	};
}
function Oe(e, t, n) {
	var r = [], i = [], a;
	function o(e) {
		var t = e < 0 ? ~e : e;
		(i[t] || (i[t] = [])).push({
			i: e,
			g: a
		});
	}
	function s(e) {
		e.forEach(o);
	}
	function c(e) {
		e.forEach(s);
	}
	function l(e) {
		e.forEach(c);
	}
	function u(e) {
		switch (a = e, e.type) {
			case "GeometryCollection":
				e.geometries.forEach(u);
				break;
			case "LineString":
				s(e.arcs);
				break;
			case "MultiLineString":
			case "Polygon":
				c(e.arcs);
				break;
			case "MultiPolygon": l(e.arcs);
		}
	}
	return u(t), i.forEach(n == null ? function(e) {
		r.push(e[0].i);
	} : function(e) {
		n(e[0].g, e[e.length - 1].g) && r.push(e[0].i);
	}), r;
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/accessor.js
function B(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/getter.js
function ke(e) {
	return e.length === 1 ? Ae(e[0]) : je(e);
}
var Ae = (e) => function(t) {
	return t[e];
}, je = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/error.js
function V(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/splitAccessPath.js
function Me(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || V("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && V("Access path missing closing bracket: " + e), r && V("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/field.js
function Ne(e, t, n) {
	let r = Me(e), i = r.length === 1 ? r[0] : e;
	return B((n && n.get || ke)(r), [i], t || i);
}
Ne("id"), B((e) => e, [], "identity"), B(() => 0, [], "zero"), B(() => 1, [], "one"), B(() => !0, [], "true"), B(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/isObject.js
function Pe(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/isString.js
function H(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-format/build/vega-format.js
function U(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function Fe(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = Ie(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Ie(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function Le(e) {
	let r = U(e.format), i = e.formatPrefix;
	return {
		format: r,
		formatPrefix: i,
		formatFloat(e) {
			let t = n(e || ",");
			if (t.precision == null) {
				switch (t.precision = 12, t.type) {
					case "%":
						t.precision -= 2;
						break;
					case "e": --t.precision;
				}
				return Fe(r(t), r(".1f")(1)[1]);
			}
			return r(t);
		},
		formatSpan(e, o, s, c) {
			c = n(c ?? ",f");
			let l = h(e, o, s), u = Math.max(Math.abs(e), Math.abs(o)), d;
			if (c.precision == null) switch (c.type) {
				case "s": return isNaN(d = t(l, u)) || (c.precision = d), i(c, u);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(d = m(l, u)) || (c.precision = d - (c.type === "e"));
					break;
				case "f":
				case "%": isNaN(d = a(l)) || (c.precision = d - (c.type === "%") * 2);
			}
			return r(c);
		}
	};
}
Re();
function Re() {
	return Le({
		format: i,
		formatPrefix: o
	});
}
function W(e, t, n) {
	n ||= {}, Pe(n) || V(`Invalid time multi-format specifier: ${n}`);
	let i = t(c), a = t(s), o = t(d), l = t(ee), u = t(ne), f = t(te), p = t(re), m = t(r), h = e(n.milliseconds || ".%L"), g = e(n.seconds || ":%S"), _ = e(n.minutes || "%I:%M"), v = e(n.hours || "%I %p"), y = e(n.date || n.day || "%a %d"), b = e(n.week || "%b %d"), ie = e(n.month || "%B"), ae = e(n.quarter || "%B"), oe = e(n.year || "%Y");
	return (e) => (i(e) < e ? h : a(e) < e ? g : o(e) < e ? _ : l(e) < e ? v : f(e) < e ? u(e) < e ? y : b : m(e) < e ? p(e) < e ? ie : ae : oe)(e);
}
function ze(t) {
	let n = U(t.format), r = U(t.utcFormat);
	return {
		timeFormat: (t) => H(t) ? n(t) : W(n, e, t),
		utcFormat: (e) => H(e) ? r(e) : W(r, _, e),
		timeParse: U(t.parse),
		utcParse: U(t.utcParse)
	};
}
var G;
Be();
function Be() {
	return G = ze({
		format: f,
		parse: g,
		utcFormat: l,
		utcParse: u
	});
}
function Ve(e) {
	return ze(p(e));
}
function He(e) {
	return arguments.length ? G = Ve(e) : G;
}
//#endregion
//#region ../../node_modules/vega-loader/build/vega-loader.browser.js
var Ue = /^(data:|([A-Za-z]+:)?\/\/)/, We = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i, Ge = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g, Ke = "file://";
function qe(e) {
	return (t) => ({
		options: t || {},
		sanitize: Ye,
		load: Je,
		fileAccess: !1,
		file: Xe(e),
		http: Qe
	});
}
async function Je(e, t) {
	let n = await this.sanitize(e, t), r = n.href;
	return n.localFile ? this.file(r) : this.http(r, t?.http);
}
async function Ye(e, t) {
	t = D({}, this.options, t);
	let n = this.fileAccess, r = { href: null }, i, a, o, s = We.test(e.replace(Ge, ""));
	(e == null || typeof e != "string" || !s) && x("Sanitize failure, invalid URI: " + k(e));
	let c = Ue.test(e);
	return (o = t.baseURL) && !c && (!e.startsWith("/") && !o.endsWith("/") && (e = "/" + e), e = o + e), a = (i = e.startsWith(Ke)) || t.mode === "file" || t.mode !== "http" && !c && n, i ? e = e.slice(7) : e.startsWith("//") && (t.defaultProtocol === "file" ? (e = e.slice(2), a = !0) : e = (t.defaultProtocol || "http") + ":" + e), Object.defineProperty(r, "localFile", { value: !!a }), r.href = e, t.target && (r.target = t.target + ""), t.rel && (r.rel = t.rel + ""), t.context === "image" && t.crossOrigin && (r.crossOrigin = t.crossOrigin + ""), r;
}
function Xe(e) {
	return e ? (t) => new Promise((n, r) => {
		e.readFile(t, (e, t) => {
			e ? r(e) : n(t);
		});
	}) : Ze;
}
async function Ze() {
	x("No file system access.");
}
async function Qe(e, t) {
	let n = D({}, this.options.http, t), r = t && t.response, i = await fetch(e, n);
	return i.ok ? E(i[r]) ? i[r]() : i.text() : x(i.status + "" + i.statusText);
}
var $e = (e) => e != null && e === e, et = (e) => e === "true" || e === "false" || e === !0 || e === !1, tt = (e) => !Number.isNaN(Date.parse(e)), K = (e) => !Number.isNaN(+e) && !(e instanceof Date), nt = (e) => K(e) && Number.isInteger(+e), q = {
	boolean: pe,
	integer: T,
	number: T,
	date: he,
	string: ge,
	unknown: C
}, J = [
	et,
	nt,
	K,
	tt
], rt = [
	"boolean",
	"integer",
	"number",
	"date"
];
function Y(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = J.length, i = J.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && $e(c) && !J[s](c) && (i[s] = 0, ++o, o === J.length)) return "string";
	return rt[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function it(e, t) {
	return t.reduce((t, n) => (t[n] = Y(e, n), t), {});
}
function at(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return X(t, n ? D(n, r) : r);
	};
	return t.responseType = "text", t;
}
function X(e, t) {
	return t.header && (e = t.header.map(k).join(t.delimiter) + "\n" + e), L(t.delimiter).parse(e + "");
}
X.responseType = "text";
function ot(e) {
	return typeof Buffer == "function" && E(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function Z(e, t) {
	let n = t && t.property ? S(t.property) : C;
	return ce(e) && !ot(e) ? st(n(e), t) : n(JSON.parse(e));
}
Z.responseType = "json";
function st(e, t) {
	return !w(e) && ue(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var ct = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function lt(e, t) {
	let n, r, i, a;
	return e = Z(e, t), t && t.feature ? (n = we, i = t.feature) : t && t.mesh ? (n = Ee, i = t.mesh, a = ct[t.filter]) : x("Missing TopoJSON feature or mesh parameter."), r = (r = e.objects[i]) ? n(e, r, a) : x("Invalid TopoJSON object: " + i), r && r.features || [r];
}
lt.responseType = "json";
var Q = {
	dsv: X,
	csv: at(","),
	tsv: at("	"),
	json: Z,
	topojson: lt
};
function $(e, t) {
	return arguments.length > 1 ? (Q[e] = t, this) : O(Q, e) ? Q[e] : null;
}
function ut(e, t, n, r) {
	t ||= {};
	let i = $(t.type || "json");
	return i || x("Unknown data format type: " + t.type), e = i(e, t), t.parse && dt(e, t.parse, n, r), O(e, "columns") && delete e.columns, e;
}
function dt(e, t, n, r) {
	if (!e.length) return;
	let i = He();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = it(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!q[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return q[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
var ft = qe(null);
//#endregion
//#region ../core/src/data/sources/inlineSource.js
function pt(e) {
	return "values" in e;
}
var mt = class extends v {
	constructor(e, t) {
		if (super(t), this.params = e, typeof e.values == "string" && !e?.format?.type) throw Error("Data format type (csv, dsv, ...) must be specified if a string is provided!");
	}
	get label() {
		return "inlineSource";
	}
	isTrivial() {
		let e = this.params.values, t = Array.isArray(e) ? e[0] : e;
		return !!(t && Object.keys(t).length == 0 && t.constructor === Object);
	}
	updateDynamicData(e) {
		this.#e(e);
	}
	loadSynchronously() {
		this.#e(this.params.values);
	}
	#e(e) {
		let t = [], n = (e) => e;
		if (Array.isArray(e)) e.length > 0 && (t = e, n = Ct(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = ut(e, vt(_t(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, ht = /* @__PURE__ */ new Set([
	"csv",
	"tsv",
	"dsv"
]), gt = /* @__PURE__ */ new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function _t(e, t = []) {
	if (!pt(e) && !Ot(e)) return;
	let n = { ...e.format };
	if (n.type ??= Ot(e) && bt(t), n.parse === void 0 && kt(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function vt(e) {
	let t = { ...e };
	return (Et(t) || Dt(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function yt(e) {
	return $(e)?.responseType ?? "text";
}
function bt(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = St(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && gt.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && $(r)) return r;
	}
}
function xt(e) {
	let t = St(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && gt.has(n);
}
function St(e) {
	return e.replace(/[?#].*$/, "");
}
var Ct = (e) => typeof e == "object" ? Tt : wt, wt = (e) => ({ data: e }), Tt = (e) => e;
function Et(e) {
	return e.type == "csv" || e.type == "tsv";
}
function Dt(e) {
	return e.type == "dsv";
}
function Ot(e) {
	return "url" in e;
}
function kt(e) {
	return ht.has(e);
}
//#endregion
//#region ../core/src/utils/topK.js
function At(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = i - r;
	if (t <= 0 || a <= 0) return [];
	let o = new y(), s = 0;
	for (; s < t && s < a; s++) o.push(s, n(e[r + s]));
	for (; s < a; s++) {
		let t = n(e[r + s]);
		t > o.peekValue() && (o.push(s, t), o.pop());
	}
	let c = o.peekValue(), l = [], u = 0, d = 0;
	for (s = 0; s < a; s++) n(e[r + s]) > c && u++;
	let f = t - u;
	for (s = 0; s < a; s++) {
		let t = n(e[r + s]);
		(t > c || t === c && d++ < f) && l.push(s);
	}
	return l.sort((t, i) => {
		let a = n(e[r + t]), o = n(e[r + i]);
		return a > o ? -1 : a < o ? 1 : t - i;
	}), l.map((t) => e[r + t]);
}
//#endregion
export { yt as a, pt as c, ft as d, ut as f, Ct as i, $ as l, _t as n, vt as o, L as p, xt as r, mt as s, At as t, Y as u };
