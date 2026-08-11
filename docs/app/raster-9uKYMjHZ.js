import { n as e, r as t, s as n } from "./framebufferReadback-Bje9lHb7.js";
import { n as r } from "./viewRenderingContext-HtpqwS_x.js";
import { t as i } from "./svgNumber-C6aRPc8Z.js";
//#region ../core/src/svg/raster/index.js
function a({ runs: a, viewRoot: c, webGLHelper: l, logicalWidth: u, logicalHeight: d, pixelRatio: f }) {
	let p = l.gl, m = Math.ceil(u * f), h = Math.ceil(d * f);
	o(p, m, h);
	let g = n(p, [{
		format: p.RGBA,
		type: p.UNSIGNED_BYTE,
		minMag: p.LINEAR,
		wrap: p.CLAMP_TO_EDGE
	}], m, h);
	try {
		for (let n of a) {
			let a = new t({ picking: !1 }, {
				webGLHelper: l,
				canvasSize: {
					width: u,
					height: d
				},
				devicePixelRatio: f,
				framebufferInfo: g,
				markPredicate: (e) => n.marks.has(e),
				pixelOffset: 0
			});
			c.render(a, r.create(0, 0, u, d), { firstFacet: !0 }), a.render();
			let o = s(n.bounds, f, m, h), _ = e(p, g, "image/png", {
				...o,
				unpremultiplyAlpha: !0
			}), v = n.image;
			if (!v) throw Error("Raster run has no SVG image placeholder.");
			v.setAttribute("x", "" + i(o.x / f)), v.setAttribute("y", "" + i(o.y / f)), v.setAttribute("width", "" + i(o.width / f)), v.setAttribute("height", "" + i(o.height / f)), v.setAttribute("href", _);
		}
	} finally {
		p.bindFramebuffer(p.FRAMEBUFFER, null), p.deleteTexture(g.attachments[0]), p.deleteFramebuffer(g.framebuffer);
	}
}
function o(e, t, n) {
	let r = e.getParameter(e.MAX_RENDERBUFFER_SIZE), i = e.getParameter(e.MAX_TEXTURE_SIZE), a = Math.min(r, i);
	if (t <= 0 || n <= 0 || t > a || n > a) throw RangeError(`SVG raster dimensions ${t} x ${n} exceed the WebGL limit ${a}.`);
}
function s(e, t, n, r) {
	let i = Math.max(0, Math.floor(e.x1 * t)), a = Math.max(0, Math.floor(e.y1 * t)), o = Math.min(n, Math.ceil(e.x2 * t)), s = Math.min(r, Math.ceil(e.y2 * t));
	return {
		x: i,
		y: a,
		width: o - i,
		height: s - a
	};
}
//#endregion
export { a as rasterizeSvgRuns };
