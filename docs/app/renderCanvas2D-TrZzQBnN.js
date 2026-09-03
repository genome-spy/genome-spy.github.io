import { Jt as e, a as t, o as n, s as r } from "./clipOptions-taFzEljc.js";
import { t as i } from "./warning-CpIIpk8e.js";
import { n as a } from "./layoutResult-D50MSHXR.js";
import { n as o } from "./performanceProfiler-CPLEjApa.js";
import { C as s, E as c, O as l, S as u, T as d, _ as f, a as p, c as m, d as h, f as g, h as _, i as v, k as y, l as b, m as x, n as S, o as C, p as w, r as T, s as E, t as D, u as O, w as k, y as A } from "./nativeText-vT3AWE14.js";
//#region ../core/src/rendering/canvas2d/renderers/arrow.js
function j(e, t) {
	let n = e, r = t.context, i = n.encoders, a = _(n);
	r.lineJoin = "miter";
	let o, c;
	return f(n, a, t, (e) => {
		e.headShapeFallback && t.warn(`Canvas2D rendered unsupported arrow headShape "${a.headShape}" as a triangle.`), r.beginPath();
		for (let t of e.boundaryLoops) {
			let e = t[0];
			r.moveTo(e.x, e.y);
			for (let e = 1; e < t.length; e++) r.lineTo(t[e].x, t[e].y);
			r.closePath();
		}
		let n = s(i.fill(e.datum)), l = A(i.fillOpacity, e.datum) * t.viewOpacity;
		n != "none" && l > 0 && (o != n && (r.fillStyle = n, o = n), r.globalAlpha = l, r.fill());
		let u = s(i.stroke(e.datum)), d = A(i.strokeOpacity, e.datum) * t.viewOpacity;
		u != "none" && d > 0 && e.strokeWidth > 0 && (c != u && (r.strokeStyle = u, c = u), r.globalAlpha = d, r.lineWidth = e.strokeWidth, r.stroke());
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/link.js
function M(e, t) {
	let n = e, r = t.context, i = n.encoders, a = u(n, n.properties.arcFadingDistance), o = w(n);
	o.shape == "arc" && a !== !1 && a[0] > 0 && a[1] > 0 && t.warn("Canvas2D ignored unsupported link arc fading."), r.lineCap = "butt";
	let c;
	return x(n, o, t, (e) => {
		let n = s(i.color(e.datum)), a = A(i.opacity, e.datum) * t.viewOpacity;
		if (n == "none" || a <= 0 || e.strokeWidth <= 0) return;
		c != n && (r.strokeStyle = n, c = n), r.globalAlpha = a, r.lineWidth = e.strokeWidth;
		let [o, l, u, d] = e.points;
		r.beginPath(), r.moveTo(o[0], o[1]), r.bezierCurveTo(l[0], l[1], u[0], u[1], d[0], d[1]), r.stroke();
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/point.js
function N(e, t) {
	let n = e;
	u(n, n.properties.fillGradientStrength) && t.warn("Canvas2D ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("Canvas2D ignored unsupported point property geometricZoomBound.");
	let r = h(n), i = t.context, a = n.encoders, o, c;
	return g(n, r, t, (e) => {
		let n = e.datum, r = e.lineShape, l = s(a.fill(n)), u = A(a.fillOpacity, n) * t.viewOpacity, d = s(a.stroke(n)), f = A(a.strokeOpacity, n) * t.viewOpacity;
		r && (d == "none" || f <= 0) && (d = l, f = u), i.beginPath();
		let p = e.angle != 0 && e.shape != "circle";
		p && (i.save(), i.translate(e.x, e.y), i.rotate(e.angle * Math.PI / 180));
		let m = p ? 0 : e.x, h = p ? 0 : e.y, g = !0;
		if (e.shape == "circle") i.arc(m, h, e.geometryRadius, 0, Math.PI * 2);
		else if (e.shape == "square") {
			let t = e.geometryRadius * 2;
			i.rect(m - e.geometryRadius, h - e.geometryRadius, t, t);
		} else g = O(e.shape, m, h, e.geometryRadius, i);
		p && i.restore(), g || (t.warn(`Canvas2D rendered unsupported point shape "${e.shape}" as a circle.`), i.arc(e.x, e.y, e.geometryRadius, 0, Math.PI * 2)), !r && l != "none" && u > 0 && (o != l && (i.fillStyle = l, o = l), P(i, u), i.fill()), d != "none" && f > 0 && e.strokeWidth > 0 && (r && i.lineCap != "butt" && (i.lineCap = "butt"), c != d && (i.strokeStyle = d, c = d), P(i, f), F(i, e.strokeWidth), i.stroke());
	});
}
function P(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function F(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rect.js
function I(e, t) {
	let n = e, r = m(n);
	r.hatch != "none" && t.warn("Canvas2D ignored unsupported rect hatch.");
	let i = t.start ?? 0;
	if (i === (t.end ?? t.data.length)) return 0;
	let a = t.context, o = n.encoders, c, l, u = [
		0,
		0,
		0,
		0
	], d = o.stroke.constant, f = o.strokeOpacity.constant, p = d ? s(o.stroke(t.data[i])) : "none", h = d && p == "none", g = !h && f ? A(o.strokeOpacity, t.data[i]) : 0;
	return b(n, r, t, (e) => {
		r.shadow.opacity > 0 && L(e, r.shadow, t, u);
		let n = e.opacityFactor, i = e.fill != "none" && e.fillOpacity > 0, m = d ? p : s(o.stroke(e.datum)), _ = (f ? g : A(o.strokeOpacity, e.datum)) * t.viewOpacity * n, v = !h && m != "none" && _ > 0 && e.strokeWidth > 0, y = r.hasCornerRadii && (e.radii.topLeft != 0 || e.radii.topRight != 0 || e.radii.bottomRight != 0 || e.radii.bottomLeft != 0);
		y && (i || v) && (u[0] = e.radii.topLeft, u[1] = e.radii.topRight, u[2] = e.radii.bottomRight, u[3] = e.radii.bottomLeft, a.beginPath(), a.roundRect(e.x, e.y, e.width, e.height, u)), i && (c != e.fill && (a.fillStyle = e.fill, c = e.fill), R(a, e.fillOpacity * n), y ? a.fill() : a.fillRect(e.x, e.y, e.width, e.height)), v && (l != m && (a.strokeStyle = m, l = m), R(a, _), z(a, e.strokeWidth), y ? a.stroke() : a.strokeRect(e.x, e.y, e.width, e.height));
	});
}
function L(e, t, n, r) {
	let { context: i, devicePixelRatio: a, visibleBounds: o } = n, s = e.strokeWidth / 2, c = e.x - s, l = e.y - s, u = e.width + s * 2, d = e.height + s * 2;
	r[0] = e.radii.topLeft + s, r[1] = e.radii.topRight + s, r[2] = e.radii.bottomRight + s, r[3] = e.radii.bottomLeft + s, i.save();
	try {
		i.beginPath(), i.rect(o.x1, o.y1, o.x2 - o.x1, o.y2 - o.y1), i.roundRect(c, l, u, d, r), i.clip("evenodd"), i.shadowBlur = Math.max(t.blur / 2.5, .25) * 2 * a, i.shadowOffsetX = t.offsetX * a, i.shadowOffsetY = t.offsetY * a, i.shadowColor = t.color, i.globalAlpha = t.opacity * n.viewOpacity, i.fillStyle = "black", i.beginPath(), i.roundRect(c, l, u, d, r), i.fill();
	} finally {
		i.restore();
	}
}
function R(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function z(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rule.js
function B(e, t) {
	let n = e, r = t.context, i = n.encoders;
	r.lineCap = u(n, n.properties.strokeCap), r.setLineDash(u(n, n.properties.strokeDash) ?? []), r.lineDashOffset = u(n, n.properties.strokeDashOffset);
	let a;
	return E(n, C(n), t, (e) => {
		let n = s(i.color(e.datum)), o = A(i.opacity, e.datum) * t.viewOpacity;
		n == "none" || o <= 0 || e.strokeWidth <= 0 || (a != n && (r.strokeStyle = n, a = n), r.globalAlpha = o, r.lineWidth = e.strokeWidth, r.beginPath(), r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2), r.stroke());
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/text.js
function V(e, t) {
	let n = e, r = n.properties, i = v(n), a = t.context, o = n.encoders, c = D(r.font), l = `${r.fontStyle ?? "normal"} ${T(r.fontWeight ?? "normal")} `, d = i.baseline == "baseline" ? "alphabetic" : i.baseline;
	[
		r.viewportEdgeFadeWidthTop,
		r.viewportEdgeFadeWidthRight,
		r.viewportEdgeFadeWidthBottom,
		r.viewportEdgeFadeWidthLeft
	].some((e) => u(n, e) > 0) && t.warn("Canvas2D ignored unsupported text viewport edge fading.");
	let f, m;
	return i.logoLetters || (a.textAlign = i.align, a.textBaseline = d), p(n, i, t, (e) => {
		e.multiCharacterLogo && t.warn("Canvas2D stretches multi-character logo text as a single glyph cell.");
		let n = s(o.color(e.datum)), r = A(o.opacity, e.datum) * t.viewOpacity * e.fadeOpacity;
		if (!(n == "none" || r <= 0)) if (f != n && (a.fillStyle = n, f = n), a.globalAlpha = r, m != e.size && (a.font = `${l}${e.size}px ${c}`, m = e.size), e.logoScale) {
			a.save(), a.translate(e.x, e.y), a.rotate(e.angle * Math.PI / 180), a.translate(e.dx, e.dy);
			let t = a.measureText(e.text).width;
			a.scale(e.logoScale.width / t, e.logoScale.heightScale), a.textAlign = "center", a.textBaseline = "alphabetic", a.fillText(e.text, 0, S("middle", 1)), a.restore();
		} else e.angle ? (a.save(), a.translate(e.x, e.y), a.rotate(e.angle * Math.PI / 180), a.fillText(e.text, e.dx, e.dy, e.width), a.restore()) : a.fillText(e.text, e.x + e.dx, e.y + e.dy, e.width);
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/index.js
function H(e, t) {
	return e.getType() == "arrow" ? j(e, t) : e.getType() == "link" ? M(e, t) : e.getType() == "rect" ? I(e, t) : e.getType() == "point" ? N(e, t) : e.getType() == "rule" || e.getType() == "tick" ? B(e, t) : e.getType() == "text" ? V(e, t) : (t.warn(`Canvas2D rendering is not implemented for mark type "${e.getType()}".`), 0);
}
//#endregion
//#region ../core/src/rendering/sampleFacet.js
function U(e) {
	let t = e.pixelToUnit, n = e.locSize.location * t, r = e.locSize.size * t;
	return !(n > 1 || n + r < 0);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DViewRenderingContext.js
var W = 8, G = 16777216, K = class extends a {
	#e = [];
	#t = /* @__PURE__ */ new WeakSet();
	#n = /* @__PURE__ */ new WeakMap();
	#r;
	#i;
	#a = new l();
	#o;
	#s = [0, 0];
	#c;
	#l;
	#u = [];
	constructor(e, t) {
		if (super(e), this.context = t.context, this.width = t.width, this.height = t.height, this.devicePixelRatio = t.devicePixelRatio, this.paint = t.paint, this.#r = t.markPredicate ?? (() => !0), this.#i = o(), this.#o = t.xIndexManager, this.#l = t.opacityLayers ?? [], this.#c = {
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
	pushView(e, n) {
		this.paint && !this.#t.has(e) && (e.onBeforeRender(), this.#t.add(e));
		let r = e.getOpacity();
		if (this.paint && r > 0 && r !== 1) {
			let r = t(e), i = q(n, this.devicePixelRatio, this.#c, r), a = J(this.#l, this.#u.length, i.width, i.height);
			a.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, -i.x, -i.y), this.#u.push({
				context: this.context,
				bounds: this.#c
			}), this.context = a, this.#c = i;
		}
		this.#e.push({
			view: e,
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
		let a = this.#n.get(e.unitView);
		if (a === void 0 && (a = e.unitView.getEffectiveOpacity(), this.#n.set(e.unitView, a)), a <= 0) return;
		e.initializeRenderingRevisions([]);
		let o = t.sampleFacetRenderingOptions;
		if (o && !e.encoders.facetIndex && (this.#i?.addCount("canvasSampleFacetOccurrences"), !U(o))) {
			this.#i?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let s = this.currentCoords, l = n(t), u = r(l, e.properties.clip, s), f = d(this.width, this.height, u);
		if (!c(f)) return;
		let p = k(s, l, e.properties.cullByVisibleRange), m = this.#o?.prepare(e) ?? !1, h = this.context;
		if (h.save(), u) {
			let e = u.rect.flatten(), t = u.clipX ? e.x : 0, n = u.clipY ? e.y : 0, r = u.clipX ? e.width : this.width, i = u.clipY ? e.height : this.height;
			h.beginPath(), h.rect(t, n, r, i), h.clip();
		}
		try {
			y(e, t, s, this.#a, (t, n) => {
				let r = 0, a = n.length;
				return m && this.#o.query(n, this.#s) && (r = this.#s[0], a = this.#s[1]), H(e, {
					context: h,
					devicePixelRatio: this.devicePixelRatio,
					coords: t,
					data: n,
					start: r,
					end: a,
					visibleBounds: f,
					anchorCullBounds: p,
					viewOpacity: 1,
					warn: (t) => i(`${t} View: ${e.unitView.getPathString()}`)
				});
			}, (t) => i(`Canvas2D could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
		} finally {
			h.restore();
		}
	}
	get currentCoords() {
		let t = e(this.#e);
		if (!t) throw Error("No current view in Canvas2D rendering context.");
		return t.coords;
	}
};
function q(e, t, n, r) {
	let i = n.x + n.width, a = n.y + n.height, o = r.clipX ? Y(Math.floor(e.x * t), n.x, i) : n.x, s = r.clipY ? Y(Math.floor(e.y * t), n.y, a) : n.y, c = r.clipX ? Y(Math.ceil((e.x + e.width) * t), o, i) : i, l = r.clipY ? Y(Math.ceil((e.y + e.height) * t), s, a) : a;
	return {
		x: o,
		y: s,
		width: c - o,
		height: l - s
	};
}
function J(e, t, n, r) {
	let i = n * r, a = e[t], o = e.reduce((e, n, r) => r === t ? e : e + n.canvas.width * n.canvas.height, 0), s = t < W && o + i <= G;
	if (!a || !s) {
		if (a = document.createElement("canvas").getContext("2d"), !a) throw Error("Unable to create a Canvas2D view group.");
		s && (e[t] = a);
	}
	return a.canvas.width != n || a.canvas.height != r ? (a.canvas.width = n, a.canvas.height = r) : (a.resetTransform(), a.clearRect(0, 0, n, r)), a.globalAlpha = 1, a.globalCompositeOperation = "source-over", a;
}
function Y(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderCanvas2D.js
function X(e) {
	let t = new K({ picking: !1 }, e);
	e.layoutResult.collectRenderCommands(t);
}
//#endregion
export { U as n, X as t };
