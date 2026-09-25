import { t as e } from "./rasterization-D0tOoKu_.js";
import { t } from "./rectangle-DE98gIxF.js";
import { t as n } from "./layoutResult-D50MSHXR.js";
import { r } from "./order-DIxlclRN.js";
import { t as i } from "./renderCanvas2D-2KY9dfd1.js";
//#region ../core/src/rendering/canvas2d/rasterExport.js
async function a(e) {
	let t = e.mimeType ?? "image/png";
	if (t != "image/png") throw Error(`Unsupported raster export MIME type: ${t}`);
	let n = e.textMetrics ?? e.viewRoot.context.textMetrics;
	await r(n, e.viewRoot);
	let i = s({
		...e,
		textMetrics: n
	});
	return new Promise((e, n) => {
		i.toBlob((t) => {
			t ? e(t) : n(/* @__PURE__ */ Error("Canvas2D could not encode the raster export."));
		}, t);
	});
}
function o(e) {
	return s({
		...e,
		pixelRatio: e.devicePixelRatio ?? e.pixelRatio
	}).toDataURL("image/png");
}
function s(r) {
	let a = r.logicalWidth ?? r.liveSize.width, o = r.logicalHeight ?? r.liveSize.height, s = r.pixelRatio ?? r.liveDevicePixelRatio, c, l;
	try {
		c = document.createElement("canvas"), c.width = Math.floor(a * s), c.height = Math.floor(o * s), l = c.getContext("2d");
	} catch (t) {
		throw new e("Unable to initialize a Canvas2D export context.", { cause: t });
	}
	if (!l) throw new e("Unable to initialize a Canvas2D export context.");
	return i({
		layoutResult: n(r.viewRoot, t.create(0, 0, a, o), {
			devicePixelRatio: s,
			renderingOptions: { firstFacet: !0 }
		}),
		context: l,
		width: a,
		height: o,
		devicePixelRatio: s,
		background: r.clearColor ?? null,
		paint: !0,
		textMetrics: r.textMetrics ?? r.viewRoot.context.textMetrics
	}), c;
}
//#endregion
export { o as exportCanvas, a as exportRaster };
