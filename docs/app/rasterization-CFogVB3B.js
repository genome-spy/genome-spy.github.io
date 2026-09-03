//#region ../core/src/rendering/renderingModuleRegistry.js
var e = {}, t = class extends Error {
	constructor(e, t) {
		super(e, t), this.name = "RasterizationUnavailableError";
	}
};
async function n(n, r) {
	if (n.exportRaster) try {
		return await n.exportRaster(r);
	} catch (e) {
		if (!(e instanceof t)) throw e;
	}
	if (!e.canvasRasterExport) throw i();
	let a;
	try {
		a = await e.canvasRasterExport();
	} catch (e) {
		throw i(e);
	}
	try {
		return await a.exportRaster({
			...r,
			liveSize: n.surface.getLogicalCanvasSize(),
			liveDevicePixelRatio: n.surface.getDevicePixelRatio()
		});
	} catch (e) {
		throw e instanceof t ? i(e) : e;
	}
}
async function r(n, r) {
	if (n.rasterizeSvgRuns) try {
		await n.rasterizeSvgRuns(r);
		return;
	} catch (e) {
		if (!(e instanceof t)) throw e;
	}
	if (!e.canvasSvgRasterizer) throw new t("No raster backend supports selective SVG rasterization. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.");
	let i;
	try {
		i = await e.canvasSvgRasterizer();
	} catch (e) {
		throw new t("No raster backend supports selective SVG rasterization.", { cause: e });
	}
	await i.createCanvas2DSvgRasterizer()(r);
}
function i(e) {
	return new t("Raster export is unsupported because no raster rendering backend is available. Import \"@genome-spy/core/rendering/canvas.js\" to enable the Canvas2D fallback.", { cause: e });
}
//#endregion
export { e as i, n, r, t };
