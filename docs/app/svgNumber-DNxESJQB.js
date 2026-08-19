//#region ../core/src/rendering/svg/svgNumber.js
function e(e) {
	let t = +e.toFixed(1);
	return Object.is(t, -0) ? 0 : t;
}
function t(e) {
	let t = +e.toFixed(3);
	return Object.is(t, -0) ? 0 : t;
}
//#endregion
export { t as n, e as t };
