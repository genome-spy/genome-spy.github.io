//#region ../core/src/scales/scalePosition.js
function e(e, t = .5) {
	if (e.type == "band" || e.type == "point") return e.bandwidth() * t;
	if (e.type == "index" || e.type == "locus") {
		let n = e;
		return Math.sign(n.step()) * n.bandwidth() * t;
	}
	return 0;
}
function t(e, t, n) {
	if ("gapMapping" in e) {
		let r = e;
		return r.gapMapping(n)?.invertPoint(t).value ?? r.invert(t);
	}
	return e.invert(t);
}
//#endregion
//#region ../core/src/rendering/renderingModuleRegistry.js
var n = {}, r = class extends Error {
	constructor(e, t) {
		super(e, t), this.name = "RasterizationUnavailableError";
	}
};
async function i(e, t) {
	if (e.exportRaster) try {
		return await e.exportRaster(t);
	} catch (e) {
		if (!(e instanceof r)) throw e;
	}
	if (!n.canvasRasterExport) throw o();
	let i;
	try {
		i = await n.canvasRasterExport();
	} catch (e) {
		throw o(e);
	}
	try {
		return await i.exportRaster({
			...t,
			liveSize: e.surface.getLogicalCanvasSize(),
			liveDevicePixelRatio: e.surface.getDevicePixelRatio()
		});
	} catch (e) {
		throw e instanceof r ? o(e) : e;
	}
}
async function a(e, t) {
	if (e.rasterizeSvgRuns) try {
		await e.rasterizeSvgRuns(t);
		return;
	} catch (e) {
		if (!(e instanceof r)) throw e;
	}
	if (!n.canvasSvgRasterizer) throw new r("No raster backend supports selective SVG rasterization. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.");
	let i;
	try {
		i = await n.canvasSvgRasterizer();
	} catch (e) {
		throw new r("No raster backend supports selective SVG rasterization.", { cause: e });
	}
	await i.createCanvas2DSvgRasterizer()(t);
}
function o(e) {
	return new r("Raster export is unsupported because no raster rendering backend is available. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.", { cause: e });
}
//#endregion
export { e as a, n as i, i as n, t as o, a as r, r as t };
