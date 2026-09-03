//#region ../core/src/utils/propertyCacher.js
var e = Symbol("cacheMap");
function t(e, t, n) {
	let r = a(e).get(t);
	return r === void 0 && (r = n(t), a(e).set(t, r)), r;
}
function n(e, t) {
	a(e).delete(t);
}
function r(e, t) {
	let n = a(e);
	for (let e of n.keys()) e.startsWith(t) && n.delete(e);
	a(e).delete(t);
}
function i(t) {
	t[e] = /* @__PURE__ */ new Map();
}
function a(t) {
	return t[e] || i(t), t[e];
}
//#endregion
//#region ../core/src/view/viewError.js
var o = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ViewError", this.view = t;
	}
};
//#endregion
export { r as a, n as i, t as n, i as r, o as t };
