import { ir as e } from "./clipOptions-Dqn337WO.js";
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
export { m as a, c, a as d, n as f, p as i, s as l, t as m, u as n, f as o, r as p, d as r, l as s, v as t, o as u };
