import { Sn as e, a as t, o as n, s as r } from "./clipOptions-Dqn337WO.js";
import { s as i } from "./flowNode-BSjy0Wz3.js";
import { t as a } from "./warning-CpIIpk8e.js";
import { r as o } from "./color-BM6tqh_h.js";
import { n as s } from "./performanceProfiler-CPLEjApa.js";
import { C as c, D as l, F as u, L as d, M as f, N as p, O as m, P as h, R as g, S as _, T as v, _ as y, a as b, b as x, c as S, d as ee, g as C, h as w, i as T, j as E, k as D, l as O, m as k, p as A, s as j, t as M, u as N, v as P, x as F, y as I } from "./order-C8ixZgC9.js";
//#region ../core/src/rendering/canvas2d/renderers/arrow.js
function L(e, t) {
	let n = e, r = t.context, i = n.encoders, a = c(n);
	r.lineJoin = "miter";
	let o = m(i.fill, t), s = m(i.stroke, t), u, d;
	return v(n, a, t, (e) => {
		e.headShapeFallback && t.warn(`Canvas2D rendered unsupported arrow headShape "${a.headShape}" as a triangle.`), r.beginPath();
		for (let t of e.boundaryLoops) {
			let e = t[0];
			r.moveTo(e.x, e.y);
			for (let e = 1; e < t.length; e++) r.lineTo(t[e].x, t[e].y);
			r.closePath();
		}
		let n = o ?? f(i.fill(e.datum)), c = l(i.fillOpacity, e.datum) * t.viewOpacity;
		n != "none" && c > 0 && (u != n && (r.fillStyle = n, u = n), r.globalAlpha = c, r.fill());
		let p = s ?? f(i.stroke(e.datum)), m = l(i.strokeOpacity, e.datum) * t.viewOpacity;
		p != "none" && m > 0 && e.strokeWidth > 0 && (d != p && (r.strokeStyle = p, d = p), r.globalAlpha = m, r.lineWidth = e.strokeWidth, r.stroke());
	}, s);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/link.js
function R(t, n) {
	let r = t, i = n.context, a = 1 / n.devicePixelRatio, o = r.encoders, s = P(r), c = _(r, s.shape, n.secondOrderPass);
	i.lineCap = "butt", i.lineJoin = "miter", i.miterLimit = 2;
	let u = m(o.color, n), d;
	return I(r, s, n, (t) => {
		let r = u ?? f(o.color(t.datum)), s = l(o.opacity, t.datum) * n.viewOpacity;
		if (r == "none" || s <= 0 || t.strokeWidth <= 0) return;
		let p = c && t.geometry.type == "cubic" && F(t.geometry.points[0], t.geometry.points[3], c);
		if (p) {
			let { normalX: t, normalY: n, offset: a, start: o, end: s } = p, c = i.createLinearGradient(t * (a - s), n * (a - s), t * (a + s), n * (a + s)), l = e(r), u = l.opacity;
			for (let e of x(o, s)) l.opacity = u * e.opacity, c.addColorStop(e.offset, l.formatRgb());
			i.strokeStyle = c, d = void 0;
		} else d != r && (i.strokeStyle = r, d = r);
		i.globalAlpha = s * Math.min(t.strokeWidth / a, 1), i.lineWidth = Math.max(t.strokeWidth, a);
		let { geometry: m } = t, h = m.points[0];
		if (i.beginPath(), i.moveTo(h[0], h[1]), m.type == "orthogonal") for (let e of m.points.slice(1)) i.lineTo(e[0], e[1]);
		else {
			let [, e, t, n] = m.points;
			i.bezierCurveTo(e[0], e[1], t[0], t[1], n[0], n[1]);
		}
		i.stroke();
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/point.js
function z(e, t) {
	let n = e;
	E(n, n.properties.fillGradientStrength) && t.warn("Canvas2D ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("Canvas2D ignored unsupported point property geometricZoomBound.");
	let r = C(n), i = t.context, a = n.encoders, o = D(a.fill), s = D(a.stroke), c = m(a.fill, t), u = m(a.stroke, t), d, p;
	return y(n, r, t, (e) => {
		let n = e.datum, r = e.lineShape, m = c ?? f(a.fill(n)), h = l(a.fillOpacity, n) * t.viewOpacity, g = u ?? f(a.stroke(n)), _ = l(a.strokeOpacity, n) * t.viewOpacity, v = e.strokeWidth > 0 && _ > 0 ? _ * s(g) : 0;
		r && v <= 0 && (g = m, _ = h, v = h * o(m));
		let y = !r && h * o(m) > 0, b = v < 1 ? e.radius : e.geometryRadius;
		B(i, e, y ? b : e.geometryRadius, t.warn), y && (d != m && (i.fillStyle = m, d = m), V(i, h), i.fill()), v > 0 && e.strokeWidth > 0 && (y && b != e.geometryRadius && B(i, e, e.geometryRadius, t.warn), r && i.lineCap != "butt" && (i.lineCap = "butt"), p != g && (i.strokeStyle = g, p = g), V(i, _), H(i, e.strokeWidth), i.stroke());
	});
}
function B(e, t, n, r) {
	e.beginPath();
	let i = t.angle != 0 && t.shape != "circle";
	i && (e.save(), e.translate(t.x, t.y), e.rotate(t.angle * Math.PI / 180));
	let a = i ? 0 : t.x, o = i ? 0 : t.y, s = !0;
	t.shape == "circle" ? e.arc(a, o, n, 0, Math.PI * 2) : t.shape == "square" ? e.rect(a - n, o - n, n * 2, n * 2) : s = w(t.shape, a, o, n, e), i && e.restore(), s || (r(`Canvas2D rendered unsupported point shape "${t.shape}" as a circle.`), e.arc(t.x, t.y, n, 0, Math.PI * 2));
}
function V(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function H(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rect.js
function U(e, t) {
	let n = e, r = A(n);
	r.hatch != "none" && t.warn("Canvas2D ignored unsupported rect hatch.");
	let i = t.start ?? 0;
	if (i === (t.end ?? t.data.length)) return 0;
	let a = t.context, o = n.encoders, s, c, u = [
		0,
		0,
		0,
		0
	], d = o.strokeOpacity.constant, p = m(o.stroke, t), h = p == "none", g = !h && d ? l(o.strokeOpacity, t.data[i]) : 0;
	return k(n, r, t, (e) => {
		r.shadow.opacity > 0 && W(e, r.shadow, t, u);
		let n = e.opacityFactor, i = e.fill != "none" && e.fillOpacity > 0, m = p ?? f(o.stroke(e.datum)), _ = (d ? g : l(o.strokeOpacity, e.datum)) * t.viewOpacity * n, v = !h && m != "none" && _ > 0 && e.strokeWidth > 0, y = r.hasCornerRadii && (e.radii.topLeft != 0 || e.radii.topRight != 0 || e.radii.bottomRight != 0 || e.radii.bottomLeft != 0);
		y && (i || v) && (u[0] = e.radii.topLeft, u[1] = e.radii.topRight, u[2] = e.radii.bottomRight, u[3] = e.radii.bottomLeft, a.beginPath(), a.roundRect(e.x, e.y, e.width, e.height, u)), i && (s != e.fill && (a.fillStyle = e.fill, s = e.fill), G(a, e.fillOpacity * n), y ? a.fill() : a.fillRect(e.x, e.y, e.width, e.height)), v && (c != m && (a.strokeStyle = m, c = m), G(a, _), K(a, e.strokeWidth), y ? a.stroke() : a.strokeRect(e.x, e.y, e.width, e.height));
	});
}
function W(e, t, n, r) {
	let { context: i, devicePixelRatio: a, visibleBounds: o } = n, s = e.strokeWidth / 2, c = e.x - s, l = e.y - s, u = e.width + s * 2, d = e.height + s * 2;
	r[0] = e.radii.topLeft + s, r[1] = e.radii.topRight + s, r[2] = e.radii.bottomRight + s, r[3] = e.radii.bottomLeft + s, i.save();
	try {
		i.beginPath(), i.rect(o.x1, o.y1, o.x2 - o.x1, o.y2 - o.y1), i.roundRect(c, l, u, d, r), i.clip("evenodd"), i.shadowBlur = Math.max(t.blur / 2.5, .25) * 2 * a, i.shadowOffsetX = t.offsetX * a, i.shadowOffsetY = t.offsetY * a, i.shadowColor = t.color, i.globalAlpha = t.opacity * n.viewOpacity, i.fillStyle = "black", i.beginPath(), i.roundRect(c, l, u, d, r), i.fill();
	} finally {
		i.restore();
	}
}
function G(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function K(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rule.js
function q(e, t) {
	let n = e, r = t.context, i = n.encoders;
	r.lineCap = E(n, n.properties.strokeCap), r.setLineDash(E(n, n.properties.strokeDash) ?? []), r.lineDashOffset = E(n, n.properties.strokeDashOffset);
	let a = n.getType() === "rule", o = m(i.fill, t), s;
	return ee(n, N(n), t, (e) => {
		let n = o ?? f(i.fill(e.datum)), c = l(i.opacity, e.datum) * t.viewOpacity;
		c <= 0 || (r.beginPath(), r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2), e.strokeWidth > 0 && (r.strokeStyle = e.stroke, s = e.stroke, r.globalAlpha = c * e.strokeOpacity, r.lineWidth = e.size + 2 * e.strokeWidth, r.stroke()), n !== "none" && (s !== n && (r.strokeStyle = n, s = n), r.globalAlpha = c * (a ? l(i.fillOpacity, e.datum) : 1), r.lineWidth = e.size, r.stroke()));
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/text.js
function J(e, t) {
	let n = e, r = n.properties, i = t.textMetrics ?? n.unitView.context.textMetrics, a = i.requestFont(r), o = T(i, r), s = S(n), c = t.context, u = n.encoders, d = b(r.font), p = `${r.fontStyle ?? "normal"} ${j(r.fontWeight ?? "normal")} `, h = s.baseline == "baseline" ? "alphabetic" : s.baseline;
	[
		r.viewportEdgeFadeWidthTop,
		r.viewportEdgeFadeWidthRight,
		r.viewportEdgeFadeWidthBottom,
		r.viewportEdgeFadeWidthLeft
	].some((e) => E(n, e) > 0) && t.warn("Canvas2D ignored unsupported text viewport edge fading.");
	let g = m(u.color, t), _, v;
	return s.logoLetters || (c.textAlign = s.align, c.textBaseline = h), O(n, s, {
		...t,
		fontMeasurement: a,
		measureLogoInkBounds: o
	}, (e) => {
		e.multiCharacterLogo && t.warn("Canvas2D stretches multi-character logo text as a single glyph cell.");
		let n = g ?? f(u.color(e.datum)), r = l(u.opacity, e.datum) * t.viewOpacity * e.fadeOpacity;
		n == "none" || r <= 0 || (_ != n && (c.fillStyle = n, _ = n), c.globalAlpha = r, v != e.size && (c.font = `${p}${e.size}px ${d}`, v = e.size), e.logoTransform ? (c.save(), c.translate(e.x, e.y), c.rotate(e.angle * Math.PI / 180), c.translate(e.dx, e.dy), c.scale(e.logoTransform.scaleX, e.logoTransform.scaleY), c.translate(-e.logoTransform.originX, -e.logoTransform.originY), c.textAlign = "left", c.textBaseline = "alphabetic", c.fillText(e.text, 0, 0), c.restore()) : e.angle || e.scale != 1 ? (c.save(), c.translate(e.x, e.y), c.rotate(e.angle * Math.PI / 180), c.translate(e.dx, e.dy), c.scale(e.scale, e.scale), c.fillText(e.text, 0, 0), c.restore()) : c.fillText(e.text, e.x + e.dx, e.y + e.dy));
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/index.js
function Y(e, t) {
	return (t.start ?? 0) === (t.end ?? t.data.length) ? 0 : e.getType() == "arrow" ? L(e, t) : e.getType() == "link" ? R(e, t) : e.getType() == "rect" ? U(e, t) : e.getType() == "point" ? z(e, t) : e.getType() == "rule" || e.getType() == "tick" ? q(e, t) : e.getType() == "text" ? J(e, t) : (t.warn(`Canvas2D rendering is not implemented for mark type "${e.getType()}".`), 0);
}
//#endregion
//#region ../core/src/rendering/sampleFacet.js
function X(e) {
	let t = e.pixelToUnit, n = e.locSize.location * t, r = e.locSize.size * t;
	return !(n > 1 || n + r < 0);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DViewRenderingContext.js
var Z = 8, Q = 16777216, te = class extends o {
	#e = [];
	#t = /* @__PURE__ */ new WeakSet();
	#n = /* @__PURE__ */ new WeakMap();
	#r;
	#i;
	#a = new d();
	#o;
	#s = [0, 0];
	#c;
	#l;
	#u = [];
	constructor(e, t) {
		if (super(e), this.context = t.context, this.width = t.width, this.height = t.height, this.devicePixelRatio = t.devicePixelRatio, this.paint = t.paint, this.textMetrics = t.textMetrics, this.#r = t.markPredicate ?? (() => !0), this.#i = s(), this.#o = t.xIndexManager, this.#l = t.opacityLayers ?? [], this.#c = {
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
			let r = t(e), i = ne(n, this.devicePixelRatio, this.#c, r), a = re(this.#l, this.#u.length, i.width, i.height);
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
		let i = this.#n.get(e.unitView);
		if (i === void 0 && (i = e.unitView.getEffectiveOpacity(), this.#n.set(e.unitView, i)), i <= 0) return;
		e.initializeRenderingRevisions(Object.keys(e.properties));
		let o = t.sampleFacetRenderingOptions;
		if (o && !e.encoders.facetIndex && (this.#i?.addCount("canvasSampleFacetOccurrences"), !X(o))) {
			this.#i?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let s = this.currentCoords, c = n(t), l = r(c, e.properties.clip, s), d = h(this.width, this.height, l);
		if (!u(d)) return;
		let f = p(s, c, e.properties.cullByVisibleRange), m = this.#o?.prepare(e) ?? !1, _ = this.context;
		if (_.save(), l) {
			let e = l.rect.flatten(), t = l.clipX ? e.x : 0, n = l.clipY ? e.y : 0, r = l.clipX ? e.width : this.width, i = l.clipY ? e.height : this.height;
			_.beginPath(), _.rect(t, n, r, i), _.clip();
		}
		try {
			let n = e.getOrder?.(), r = n && n.isActive();
			g(e, t, s, this.#a, (t, i) => {
				let o = 0, s = i.length;
				m && this.#o.query(i, this.#s) && (o = this.#s[0], s = this.#s[1]);
				let c = (n, r, i, o = !1) => Y(e, {
					context: _,
					devicePixelRatio: this.devicePixelRatio,
					coords: t,
					data: n,
					secondOrderPass: o,
					start: r,
					end: i,
					visibleBounds: d,
					anchorCullBounds: f,
					viewOpacity: 1,
					textMetrics: this.textMetrics,
					warn: (t) => a(`${t} View: ${e.unitView.getPathString()}`)
				});
				if (!r) return c(i, o, s);
				let l = 0, u = M(i, o, s, n.predicate, n.passes);
				for (let [e, t] of u.entries()) t.length > 0 && (l += c(t, 0, t.length, e === 1));
				return l;
			}, (t) => a(`Canvas2D could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
		} finally {
			_.restore();
		}
	}
	get currentCoords() {
		let e = i(this.#e);
		if (!e) throw Error("No current view in Canvas2D rendering context.");
		return e.coords;
	}
};
function ne(e, t, n, r) {
	let i = n.x + n.width, a = n.y + n.height, o = r.clipX ? $(Math.floor(e.x * t), n.x, i) : n.x, s = r.clipY ? $(Math.floor(e.y * t), n.y, a) : n.y, c = r.clipX ? $(Math.ceil((e.x + e.width) * t), o, i) : i, l = r.clipY ? $(Math.ceil((e.y + e.height) * t), s, a) : a;
	return {
		x: o,
		y: s,
		width: c - o,
		height: l - s
	};
}
function re(e, t, n, r) {
	let i = n * r, a = e[t], o = e.reduce((e, n, r) => r === t ? e : e + n.canvas.width * n.canvas.height, 0), s = t < Z && o + i <= Q;
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
function ie(e) {
	let t = new te({ picking: !1 }, e);
	e.layoutResult.collectRenderCommands(t);
}
//#endregion
export { X as n, ie as t };
