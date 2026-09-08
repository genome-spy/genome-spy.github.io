import { a as e, an as t, m as n, o as r, s as i } from "./clipOptions-H68pJyEZ.js";
import { t as a } from "./warning-CpIIpk8e.js";
import { n as o } from "./layoutResult-D50MSHXR.js";
import { n as s } from "./performanceProfiler-CPLEjApa.js";
import { D as c, E as l, M as u, O as d, S as f, T as p, _ as m, a as h, b as g, c as _, d as v, f as y, g as b, h as x, i as S, j as C, k as w, l as T, m as E, n as D, o as O, p as k, r as A, s as j, t as M, u as N, v as P } from "./nativeText-DAjvkrzc.js";
//#region ../core/src/rendering/canvas2d/renderers/arrow.js
function F(e, t) {
	let n = e, r = t.context, i = n.encoders, a = P(n);
	r.lineJoin = "miter";
	let o, s;
	return g(n, a, t, (e) => {
		e.headShapeFallback && t.warn(`Canvas2D rendered unsupported arrow headShape "${a.headShape}" as a triangle.`), r.beginPath();
		for (let t of e.boundaryLoops) {
			let e = t[0];
			r.moveTo(e.x, e.y);
			for (let e = 1; e < t.length; e++) r.lineTo(t[e].x, t[e].y);
			r.closePath();
		}
		let n = l(i.fill(e.datum)), c = f(i.fillOpacity, e.datum) * t.viewOpacity;
		n != "none" && c > 0 && (o != n && (r.fillStyle = n, o = n), r.globalAlpha = c, r.fill());
		let u = l(i.stroke(e.datum)), d = f(i.strokeOpacity, e.datum) * t.viewOpacity;
		u != "none" && d > 0 && e.strokeWidth > 0 && (s != u && (r.strokeStyle = u, s = u), r.globalAlpha = d, r.lineWidth = e.strokeWidth, r.stroke());
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/link.js
function I(e, t) {
	let r = e, i = t.context, a = r.encoders, o = k(r), s = b(r, o.shape);
	i.lineCap = "butt";
	let c;
	return E(r, o, t, (e) => {
		let r = l(a.color(e.datum)), o = f(a.opacity, e.datum) * t.viewOpacity;
		if (r == "none" || o <= 0 || e.strokeWidth <= 0) return;
		let u = s(e.datum), d = u && m(e.points[0], e.points[3], u);
		if (d) {
			let { normalX: e, normalY: t, offset: a, start: o, end: s } = d, l = i.createLinearGradient(e * (a - s), t * (a - s), e * (a + s), t * (a + s)), u = n(r), f = u.opacity;
			for (let e of x(o, s)) u.opacity = f * e.opacity, l.addColorStop(e.offset, u.formatRgb());
			i.strokeStyle = l, c = void 0;
		} else c != r && (i.strokeStyle = r, c = r);
		i.globalAlpha = o, i.lineWidth = e.strokeWidth;
		let [p, h, g, _] = e.points;
		i.beginPath(), i.moveTo(p[0], p[1]), i.bezierCurveTo(h[0], h[1], g[0], g[1], _[0], _[1]), i.stroke();
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/point.js
function L(e, t) {
	let n = e;
	p(n, n.properties.fillGradientStrength) && t.warn("Canvas2D ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("Canvas2D ignored unsupported point property geometricZoomBound.");
	let r = v(n), i = t.context, a = n.encoders, o, s;
	return y(n, r, t, (e) => {
		let n = e.datum, r = e.lineShape, c = l(a.fill(n)), u = f(a.fillOpacity, n) * t.viewOpacity, d = l(a.stroke(n)), p = f(a.strokeOpacity, n) * t.viewOpacity;
		r && (d == "none" || p <= 0) && (d = c, p = u), i.beginPath();
		let m = e.angle != 0 && e.shape != "circle";
		m && (i.save(), i.translate(e.x, e.y), i.rotate(e.angle * Math.PI / 180));
		let h = m ? 0 : e.x, g = m ? 0 : e.y, _ = !0;
		if (e.shape == "circle") i.arc(h, g, e.geometryRadius, 0, Math.PI * 2);
		else if (e.shape == "square") {
			let t = e.geometryRadius * 2;
			i.rect(h - e.geometryRadius, g - e.geometryRadius, t, t);
		} else _ = N(e.shape, h, g, e.geometryRadius, i);
		m && i.restore(), _ || (t.warn(`Canvas2D rendered unsupported point shape "${e.shape}" as a circle.`), i.arc(e.x, e.y, e.geometryRadius, 0, Math.PI * 2)), !r && c != "none" && u > 0 && (o != c && (i.fillStyle = c, o = c), R(i, u), i.fill()), d != "none" && p > 0 && e.strokeWidth > 0 && (r && i.lineCap != "butt" && (i.lineCap = "butt"), s != d && (i.strokeStyle = d, s = d), R(i, p), z(i, e.strokeWidth), i.stroke());
	});
}
function R(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function z(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rect.js
function B(e, t) {
	let n = e, r = _(n);
	r.hatch != "none" && t.warn("Canvas2D ignored unsupported rect hatch.");
	let i = t.start ?? 0;
	if (i === (t.end ?? t.data.length)) return 0;
	let a = t.context, o = n.encoders, s, c, u = [
		0,
		0,
		0,
		0
	], d = o.stroke.constant, p = o.strokeOpacity.constant, m = d ? l(o.stroke(t.data[i])) : "none", h = d && m == "none", g = !h && p ? f(o.strokeOpacity, t.data[i]) : 0;
	return T(n, r, t, (e) => {
		r.shadow.opacity > 0 && V(e, r.shadow, t, u);
		let n = e.opacityFactor, i = e.fill != "none" && e.fillOpacity > 0, _ = d ? m : l(o.stroke(e.datum)), v = (p ? g : f(o.strokeOpacity, e.datum)) * t.viewOpacity * n, y = !h && _ != "none" && v > 0 && e.strokeWidth > 0, b = r.hasCornerRadii && (e.radii.topLeft != 0 || e.radii.topRight != 0 || e.radii.bottomRight != 0 || e.radii.bottomLeft != 0);
		b && (i || y) && (u[0] = e.radii.topLeft, u[1] = e.radii.topRight, u[2] = e.radii.bottomRight, u[3] = e.radii.bottomLeft, a.beginPath(), a.roundRect(e.x, e.y, e.width, e.height, u)), i && (s != e.fill && (a.fillStyle = e.fill, s = e.fill), H(a, e.fillOpacity * n), b ? a.fill() : a.fillRect(e.x, e.y, e.width, e.height)), y && (c != _ && (a.strokeStyle = _, c = _), H(a, v), U(a, e.strokeWidth), b ? a.stroke() : a.strokeRect(e.x, e.y, e.width, e.height));
	});
}
function V(e, t, n, r) {
	let { context: i, devicePixelRatio: a, visibleBounds: o } = n, s = e.strokeWidth / 2, c = e.x - s, l = e.y - s, u = e.width + s * 2, d = e.height + s * 2;
	r[0] = e.radii.topLeft + s, r[1] = e.radii.topRight + s, r[2] = e.radii.bottomRight + s, r[3] = e.radii.bottomLeft + s, i.save();
	try {
		i.beginPath(), i.rect(o.x1, o.y1, o.x2 - o.x1, o.y2 - o.y1), i.roundRect(c, l, u, d, r), i.clip("evenodd"), i.shadowBlur = Math.max(t.blur / 2.5, .25) * 2 * a, i.shadowOffsetX = t.offsetX * a, i.shadowOffsetY = t.offsetY * a, i.shadowColor = t.color, i.globalAlpha = t.opacity * n.viewOpacity, i.fillStyle = "black", i.beginPath(), i.roundRect(c, l, u, d, r), i.fill();
	} finally {
		i.restore();
	}
}
function H(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function U(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rule.js
function W(e, t) {
	let n = e, r = t.context, i = n.encoders;
	r.lineCap = p(n, n.properties.strokeCap), r.setLineDash(p(n, n.properties.strokeDash) ?? []), r.lineDashOffset = p(n, n.properties.strokeDashOffset);
	let a;
	return j(n, O(n), t, (e) => {
		let n = l(i.color(e.datum)), o = f(i.opacity, e.datum) * t.viewOpacity;
		n == "none" || o <= 0 || e.strokeWidth <= 0 || (a != n && (r.strokeStyle = n, a = n), r.globalAlpha = o, r.lineWidth = e.strokeWidth, r.beginPath(), r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2), r.stroke());
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/text.js
function G(e, t) {
	let n = e, r = n.properties, i = S(n), a = t.context, o = n.encoders, s = M(r.font), c = `${r.fontStyle ?? "normal"} ${A(r.fontWeight ?? "normal")} `, u = i.baseline == "baseline" ? "alphabetic" : i.baseline;
	[
		r.viewportEdgeFadeWidthTop,
		r.viewportEdgeFadeWidthRight,
		r.viewportEdgeFadeWidthBottom,
		r.viewportEdgeFadeWidthLeft
	].some((e) => p(n, e) > 0) && t.warn("Canvas2D ignored unsupported text viewport edge fading.");
	let d, m;
	return i.logoLetters || (a.textAlign = i.align, a.textBaseline = u), h(n, i, t, (e) => {
		e.multiCharacterLogo && t.warn("Canvas2D stretches multi-character logo text as a single glyph cell.");
		let n = l(o.color(e.datum)), r = f(o.opacity, e.datum) * t.viewOpacity * e.fadeOpacity;
		if (!(n == "none" || r <= 0)) if (d != n && (a.fillStyle = n, d = n), a.globalAlpha = r, m != e.size && (a.font = `${c}${e.size}px ${s}`, m = e.size), e.logoScale) {
			a.save(), a.translate(e.x, e.y), a.rotate(e.angle * Math.PI / 180), a.translate(e.dx, e.dy);
			let t = a.measureText(e.text).width;
			a.scale(e.logoScale.width / t, e.logoScale.heightScale), a.textAlign = "center", a.textBaseline = "alphabetic", a.fillText(e.text, 0, D("middle", 1)), a.restore();
		} else e.angle ? (a.save(), a.translate(e.x, e.y), a.rotate(e.angle * Math.PI / 180), a.fillText(e.text, e.dx, e.dy, e.width), a.restore()) : a.fillText(e.text, e.x + e.dx, e.y + e.dy, e.width);
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/index.js
function K(e, t) {
	return e.getType() == "arrow" ? F(e, t) : e.getType() == "link" ? I(e, t) : e.getType() == "rect" ? B(e, t) : e.getType() == "point" ? L(e, t) : e.getType() == "rule" || e.getType() == "tick" ? W(e, t) : e.getType() == "text" ? G(e, t) : (t.warn(`Canvas2D rendering is not implemented for mark type "${e.getType()}".`), 0);
}
//#endregion
//#region ../core/src/rendering/sampleFacet.js
function q(e) {
	let t = e.pixelToUnit, n = e.locSize.location * t, r = e.locSize.size * t;
	return !(n > 1 || n + r < 0);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DViewRenderingContext.js
var J = 8, Y = 16777216, X = class extends o {
	#e = [];
	#t = /* @__PURE__ */ new WeakSet();
	#n = /* @__PURE__ */ new WeakMap();
	#r;
	#i;
	#a = new C();
	#o;
	#s = [0, 0];
	#c;
	#l;
	#u = [];
	constructor(e, t) {
		if (super(e), this.context = t.context, this.width = t.width, this.height = t.height, this.devicePixelRatio = t.devicePixelRatio, this.paint = t.paint, this.#r = t.markPredicate ?? (() => !0), this.#i = s(), this.#o = t.xIndexManager, this.#l = t.opacityLayers ?? [], this.#c = {
			x: 0,
			y: 0,
			width: this.context.canvas.width,
			height: this.context.canvas.height
		}, this.paint) {
			let e = this.context;
			e.resetTransform(), e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0), e.globalAlpha = 1, e.globalCompositeOperation = "source-over", t.background != null && (e.fillStyle = t.background, e.fillRect(0, 0, this.width, this.height));
		}
	}
	getDevicePixelRatio() {
		return this.devicePixelRatio;
	}
	pushView(t, n) {
		this.paint && !this.#t.has(t) && (t.onBeforeRender(), this.#t.add(t));
		let r = t.getOpacity();
		if (this.paint && r > 0 && r !== 1) {
			let r = e(t), i = Z(n, this.devicePixelRatio, this.#c, r), a = Q(this.#l, this.#u.length, i.width, i.height);
			a.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, -i.x, -i.y), this.#u.push({
				context: this.context,
				bounds: this.#c
			}), this.context = a, this.#c = i;
		}
		this.#e.push({
			view: t,
			coords: n,
			opacity: r
		});
	}
	popView(e) {
		let t = this.#e.pop();
		if (t?.view !== e) throw Error("Unbalanced Canvas2D view rendering context stack.");
		if (this.paint && t.opacity > 0 && t.opacity !== 1) {
			let e = this.#u.pop();
			if (!e) throw Error("Missing Canvas2D opacity parent target.");
			let n = this.context.canvas, r = this.#c;
			this.context = e.context, this.#c = e.bounds, this.context.save();
			try {
				this.context.globalAlpha = t.opacity, r.width && r.height && this.context.drawImage(n, r.x / this.devicePixelRatio, r.y / this.devicePixelRatio, r.width / this.devicePixelRatio, r.height / this.devicePixelRatio);
			} finally {
				this.context.restore();
			}
		}
	}
	renderMark(e, t) {
		if (!this.paint || !this.#r(e)) return;
		let n = this.#n.get(e.unitView);
		if (n === void 0 && (n = e.unitView.getEffectiveOpacity(), this.#n.set(e.unitView, n)), n <= 0) return;
		e.initializeRenderingRevisions(Object.keys(e.properties));
		let o = t.sampleFacetRenderingOptions;
		if (o && !e.encoders.facetIndex && (this.#i?.addCount("canvasSampleFacetOccurrences"), !q(o))) {
			this.#i?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let s = this.currentCoords, l = r(t), f = i(l, e.properties.clip, s), p = d(this.width, this.height, f);
		if (!w(p)) return;
		let m = c(s, l, e.properties.cullByVisibleRange), h = this.#o?.prepare(e) ?? !1, g = this.context;
		if (g.save(), f) {
			let e = f.rect.flatten(), t = f.clipX ? e.x : 0, n = f.clipY ? e.y : 0, r = f.clipX ? e.width : this.width, i = f.clipY ? e.height : this.height;
			g.beginPath(), g.rect(t, n, r, i), g.clip();
		}
		try {
			u(e, t, s, this.#a, (t, n) => {
				let r = 0, i = n.length;
				return h && this.#o.query(n, this.#s) && (r = this.#s[0], i = this.#s[1]), K(e, {
					context: g,
					devicePixelRatio: this.devicePixelRatio,
					coords: t,
					data: n,
					start: r,
					end: i,
					visibleBounds: p,
					anchorCullBounds: m,
					viewOpacity: 1,
					warn: (t) => a(`${t} View: ${e.unitView.getPathString()}`)
				});
			}, (t) => a(`Canvas2D could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
		} finally {
			g.restore();
		}
	}
	get currentCoords() {
		let e = t(this.#e);
		if (!e) throw Error("No current view in Canvas2D rendering context.");
		return e.coords;
	}
};
function Z(e, t, n, r) {
	let i = n.x + n.width, a = n.y + n.height, o = r.clipX ? $(Math.floor(e.x * t), n.x, i) : n.x, s = r.clipY ? $(Math.floor(e.y * t), n.y, a) : n.y, c = r.clipX ? $(Math.ceil((e.x + e.width) * t), o, i) : i, l = r.clipY ? $(Math.ceil((e.y + e.height) * t), s, a) : a;
	return {
		x: o,
		y: s,
		width: c - o,
		height: l - s
	};
}
function Q(e, t, n, r) {
	let i = n * r, a = e[t], o = e.reduce((e, n, r) => r === t ? e : e + n.canvas.width * n.canvas.height, 0), s = t < J && o + i <= Y;
	if (!a || !s) {
		if (a = document.createElement("canvas").getContext("2d"), !a) throw Error("Unable to create a Canvas2D view group.");
		s && (e[t] = a);
	}
	return a.canvas.width != n || a.canvas.height != r ? (a.canvas.width = n, a.canvas.height = r) : (a.resetTransform(), a.clearRect(0, 0, n, r)), a.globalAlpha = 1, a.globalCompositeOperation = "source-over", a;
}
function $(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderCanvas2D.js
function ee(e) {
	let t = new X({ picking: !1 }, e);
	e.layoutResult.collectRenderCommands(t);
}
//#endregion
export { q as n, ee as t };
