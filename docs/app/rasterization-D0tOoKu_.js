//#region ../core/src/rendering/renderingModuleRegistry.js
var e = {};
//#endregion
//#region ../core/src/scales/scalePosition.js
function t(e, t = .5) {
	if (e.type == "band" || e.type == "point") return e.bandwidth() * t;
	if (e.type == "index" || e.type == "locus") {
		let n = e;
		return Math.sign(n.step()) * n.bandwidth() * (t - n.align());
	} else return 0;
}
//#endregion
//#region ../core/src/rendering/rasterization.js
var n = class extends Error {
	constructor(e, t) {
		super(e, t), this.name = "RasterizationUnavailableError";
	}
};
async function r(t, r) {
	if (t.exportRaster) try {
		return await t.exportRaster(r);
	} catch (e) {
		if (!(e instanceof n)) throw e;
	}
	if (!e.canvasRasterExport) throw a();
	let i;
	try {
		i = await e.canvasRasterExport();
	} catch (e) {
		throw a(e);
	}
	try {
		return await i.exportRaster({
			...r,
			liveSize: t.surface.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.surface.getDevicePixelRatio()
		});
	} catch (e) {
		throw e instanceof n ? a(e) : e;
	}
}
async function i(t, r) {
	if (t.rasterizeSvgRuns) try {
		await t.rasterizeSvgRuns(r);
		return;
	} catch (e) {
		if (!(e instanceof n)) throw e;
	}
	if (!e.canvasSvgRasterizer) throw new n("No raster backend supports selective SVG rasterization. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.");
	let i;
	try {
		i = await e.canvasSvgRasterizer();
	} catch (e) {
		throw new n("No raster backend supports selective SVG rasterization.", { cause: e });
	}
	await i.createCanvas2DSvgRasterizer()(r);
}
function a(e) {
	return new n("Raster export is unsupported because no raster rendering backend is available. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.", { cause: e });
}
//#endregion
export { e as a, t as i, r as n, i as r, n as t };
