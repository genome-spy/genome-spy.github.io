import { at as e } from "./vega-scale-D46-iCaL.js";
//#region ../../node_modules/d3-array/src/identity.js
function t(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-array/src/group.js
function n(e, ...n) {
	return i(e, t, t, n);
}
function r(e, ...n) {
	return i(e, Array.from, t, n);
}
function i(t, n, r, i) {
	return (function t(a, o) {
		if (o >= i.length) return r(a);
		let s = new e(), c = i[o++], l = -1;
		for (let e of a) {
			let t = c(e, ++l, a), n = s.get(t);
			n ? n.push(e) : s.set(t, [e]);
		}
		for (let [e, n] of s) s.set(e, t(n, o));
		return n(s);
	})(t, 0);
}
//#endregion
//#region ../core/src/scales/scaleResolutionConstants.js
var a = "quantitative", o = "ordinal", s = "nominal", c = "locus", l = "index";
//#endregion
//#region ../core/src/scales/indexLikeDomainUtils.js
function u(e) {
	return e === "index" || e === "locus";
}
function d(e) {
	return e[1] > 2 ** 32;
}
function f(e, t) {
	return u(e) ? h(t) : t;
}
function p(e, t) {
	return u(e) ? g(t) : t;
}
function m(e, t) {
	return t && u(e) ? h(t) : t;
}
function h(e) {
	return [e[0], e[1] + _(e)];
}
function g(e) {
	return [e[0], e[1] - _(e)];
}
function _(e) {
	return e[1] >= e[0] ? 1 : -1;
}
//#endregion
//#region ../core/src/utils/scaleNull.js
function v() {
	let e = (e) => e;
	return e.invert = (e) => e, e.copy = v, e.invertRange = () => {}, e.type = "null", e;
}
//#endregion
//#region ../core/src/utils/indexer.js
function y() {
	let e = 0, t, n = 0, r = /* @__PURE__ */ new Map(), i = (i) => i === t ? n : (n = r.get(i), n === void 0 && (n = e++, r.set(i, n)), t = i, n);
	return i.addAll = (e) => {
		for (let t of e) i(t);
	}, i.invert = (e) => {
		for (let t of r.entries()) if (t[1] == e) return t[0];
	}, i.domain = () => [...r.keys()], i;
}
//#endregion
export { p as a, l as c, o as d, a as f, t as h, d as i, c as l, r as m, v as n, m as o, n as p, u as r, f as s, y as t, s as u };
