//#region ../core/src/utils/warning.js
var e = /* @__PURE__ */ new Set();
function t(t) {
	e.has(t) || (e.add(t), console.warn(t));
}
//#endregion
export { t };
