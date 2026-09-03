import { t as e } from "./svgNumber-DNxESJQB.js";
//#region ../core/src/rendering/svg/raster/rasterImage.js
function t(e, t, n, r) {
	let i = Math.max(0, Math.floor(e.x1 * t)), a = Math.max(0, Math.floor(e.y1 * t)), o = Math.min(n, Math.ceil(e.x2 * t)), s = Math.min(r, Math.ceil(e.y2 * t));
	return {
		x: i,
		y: a,
		width: o - i,
		height: s - a
	};
}
function n(t, n, r, i) {
	let a = t.image;
	if (!a) throw Error("Raster run has no SVG image placeholder.");
	a.setAttribute("x", "" + e(n.x / r)), a.setAttribute("y", "" + e(n.y / r)), a.setAttribute("width", "" + e(n.width / r)), a.setAttribute("height", "" + e(n.height / r)), a.setAttribute("href", i);
}
//#endregion
export { n, t };
