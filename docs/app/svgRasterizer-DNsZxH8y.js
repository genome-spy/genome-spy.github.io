import { t as e } from "./rasterization-CFogVB3B.js";
import { t } from "./rectangle-DKnrAmKs.js";
import { t as n } from "./layoutResult-D50MSHXR.js";
import { t as r } from "./renderCanvas2D-vEouBm--.js";
import { n as i, t as a } from "./rasterImage-B4rPLaW9.js";
//#region ../core/src/rendering/canvas2d/svgRasterizer.js
function o() {
	let o, s, c, l;
	try {
		o = document.createElement("canvas"), s = o.getContext("2d"), c = document.createElement("canvas"), l = c.getContext("2d");
	} catch (t) {
		throw new e("Unable to initialize Canvas2D SVG rasterization contexts.", { cause: t });
	}
	if (!s || !l) throw new e("Unable to initialize Canvas2D SVG rasterization contexts.");
	return (e) => {
		let u = Math.ceil(e.logicalWidth * e.pixelRatio), d = Math.ceil(e.logicalHeight * e.pixelRatio), f = [];
		o.width = u, o.height = d;
		let p = e.pixelRatio == 1 && e.layoutResult ? e.layoutResult : n(e.viewRoot, t.create(0, 0, e.logicalWidth, e.logicalHeight), {
			devicePixelRatio: e.pixelRatio,
			renderingOptions: { firstFacet: !0 }
		});
		for (let t of e.runs) {
			r({
				layoutResult: p,
				context: s,
				width: e.logicalWidth,
				height: e.logicalHeight,
				devicePixelRatio: e.pixelRatio,
				background: null,
				paint: !0,
				markPredicate: (e) => t.marks.has(e),
				opacityLayers: f
			});
			let n = a(t.bounds, e.pixelRatio, u, d);
			c.width = n.width, c.height = n.height, l.resetTransform(), l.clearRect(0, 0, n.width, n.height), l.drawImage(o, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i(t, n, e.pixelRatio, c.toDataURL("image/png"));
		}
	};
}
//#endregion
export { o as createCanvas2DSvgRasterizer };
