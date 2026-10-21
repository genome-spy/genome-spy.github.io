import { Dn as e, Pt as t, a as n, o as r, s as i } from "./clipOptions-BKK6zTuk.js";
import { t as a } from "./warning-CpIIpk8e.js";
import { n as o } from "./layoutResult-D50MSHXR.js";
import { n as s } from "./performanceProfiler-CPLEjApa.js";
import { A as c, C as l, D as u, I as d, L as f, M as p, N as m, O as h, P as g, S as _, T as v, _ as y, a as b, b as ee, c as x, d as S, g as C, h as w, i as T, j as E, l as D, m as O, p as k, s as A, t as j, u as M, v as N, x as P, y as F } from "./order-D3v1gCbM.js";
//#region ../core/src/rendering/canvas2d/renderers/arrow.js
function I(e, t) {
	let n = e, r = t.context, i = n.encoders, a = l(n);
	r.lineJoin = "miter";
	let o = h(i.fill, t), s = h(i.stroke, t), c, d;
	return v(n, a, t, (e) => {
		e.headShapeFallback && t.warn(`Canvas2D rendered unsupported arrow headShape "${a.headShape}" as a triangle.`), r.beginPath();
		for (let t of e.boundaryLoops) {
			let e = t[0];
			r.moveTo(e.x, e.y);
			for (let e = 1; e < t.length; e++) r.lineTo(t[e].x, t[e].y);
			r.closePath();
		}
		let n = o ?? E(i.fill(e.datum)), l = u(i.fillOpacity, e.datum) * t.viewOpacity;
		n != "none" && l > 0 && (c != n && (r.fillStyle = n, c = n), r.globalAlpha = l, r.fill());
		let f = s ?? E(i.stroke(e.datum)), p = u(i.strokeOpacity, e.datum) * t.viewOpacity;
		f != "none" && p > 0 && e.strokeWidth > 0 && (d != f && (r.strokeStyle = f, d = f), r.globalAlpha = p, r.lineWidth = e.strokeWidth, r.stroke());
	}, s);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/link.js
function L(e, n) {
	let r = e, i = n.context, a = 1 / n.devicePixelRatio, o = r.encoders, s = N(r), c = _(r, s.shape, n.secondOrderPass);
	i.lineCap = "butt", i.lineJoin = "miter", i.miterLimit = 2;
	let l = h(o.color, n), d;
	return F(r, s, n, (e) => {
		let r = l ?? E(o.color(e.datum)), s = u(o.opacity, e.datum) * n.viewOpacity;
		if (r == "none" || s <= 0 || e.strokeWidth <= 0) return;
		let f = c && e.geometry.type == "cubic" && P(e.geometry.points[0], e.geometry.points[3], c);
		if (f) {
			let { normalX: e, normalY: n, offset: a, start: o, end: s } = f, c = i.createLinearGradient(e * (a - s), n * (a - s), e * (a + s), n * (a + s)), l = t(r), u = l.opacity;
			for (let e of ee(o, s)) l.opacity = u * e.opacity, c.addColorStop(e.offset, l.formatRgb());
			i.strokeStyle = c, d = void 0;
		} else d != r && (i.strokeStyle = r, d = r);
		i.globalAlpha = s * Math.min(e.strokeWidth / a, 1), i.lineWidth = Math.max(e.strokeWidth, a);
		let { geometry: p } = e, m = p.points[0];
		if (i.beginPath(), i.moveTo(m[0], m[1]), p.type == "orthogonal") for (let e of p.points.slice(1)) i.lineTo(e[0], e[1]);
		else {
			let [, e, t, n] = p.points;
			i.bezierCurveTo(e[0], e[1], t[0], t[1], n[0], n[1]);
		}
		i.stroke();
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/point.js
function R(e, t) {
	let n = e;
	c(n, n.properties.fillGradientStrength) && t.warn("Canvas2D ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("Canvas2D ignored unsupported point property geometricZoomBound.");
	let r = C(n), i = t.context, a = n.encoders, o = h(a.fill, t), s = h(a.stroke, t), l, d;
	return y(n, r, t, (e) => {
		let n = e.datum, r = e.lineShape, c = o ?? E(a.fill(n)), f = u(a.fillOpacity, n) * t.viewOpacity, p = s ?? E(a.stroke(n)), m = u(a.strokeOpacity, n) * t.viewOpacity;
		r && (p == "none" || m <= 0) && (p = c, m = f), i.beginPath();
		let h = e.angle != 0 && e.shape != "circle";
		h && (i.save(), i.translate(e.x, e.y), i.rotate(e.angle * Math.PI / 180));
		let g = h ? 0 : e.x, _ = h ? 0 : e.y, v = !0;
		if (e.shape == "circle") i.arc(g, _, e.geometryRadius, 0, Math.PI * 2);
		else if (e.shape == "square") {
			let t = e.geometryRadius * 2;
			i.rect(g - e.geometryRadius, _ - e.geometryRadius, t, t);
		} else v = w(e.shape, g, _, e.geometryRadius, i);
		h && i.restore(), v || (t.warn(`Canvas2D rendered unsupported point shape "${e.shape}" as a circle.`), i.arc(e.x, e.y, e.geometryRadius, 0, Math.PI * 2)), !r && c != "none" && f > 0 && (l != c && (i.fillStyle = c, l = c), z(i, f), i.fill()), p != "none" && m > 0 && e.strokeWidth > 0 && (r && i.lineCap != "butt" && (i.lineCap = "butt"), d != p && (i.strokeStyle = p, d = p), z(i, m), B(i, e.strokeWidth), i.stroke());
	});
}
function z(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function B(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rect.js
function V(e, t) {
	let n = e, r = k(n);
	r.hatch != "none" && t.warn("Canvas2D ignored unsupported rect hatch.");
	let i = t.start ?? 0;
	if (i === (t.end ?? t.data.length)) return 0;
	let a = t.context, o = n.encoders, s, c, l = [
		0,
		0,
		0,
		0
	], d = o.strokeOpacity.constant, f = h(o.stroke, t), p = f == "none", m = !p && d ? u(o.strokeOpacity, t.data[i]) : 0;
	return O(n, r, t, (e) => {
		r.shadow.opacity > 0 && H(e, r.shadow, t, l);
		let n = e.opacityFactor, i = e.fill != "none" && e.fillOpacity > 0, h = f ?? E(o.stroke(e.datum)), g = (d ? m : u(o.strokeOpacity, e.datum)) * t.viewOpacity * n, _ = !p && h != "none" && g > 0 && e.strokeWidth > 0, v = r.hasCornerRadii && (e.radii.topLeft != 0 || e.radii.topRight != 0 || e.radii.bottomRight != 0 || e.radii.bottomLeft != 0);
		v && (i || _) && (l[0] = e.radii.topLeft, l[1] = e.radii.topRight, l[2] = e.radii.bottomRight, l[3] = e.radii.bottomLeft, a.beginPath(), a.roundRect(e.x, e.y, e.width, e.height, l)), i && (s != e.fill && (a.fillStyle = e.fill, s = e.fill), U(a, e.fillOpacity * n), v ? a.fill() : a.fillRect(e.x, e.y, e.width, e.height)), _ && (c != h && (a.strokeStyle = h, c = h), U(a, g), W(a, e.strokeWidth), v ? a.stroke() : a.strokeRect(e.x, e.y, e.width, e.height));
	});
}
function H(e, t, n, r) {
	let { context: i, devicePixelRatio: a, visibleBounds: o } = n, s = e.strokeWidth / 2, c = e.x - s, l = e.y - s, u = e.width + s * 2, d = e.height + s * 2;
	r[0] = e.radii.topLeft + s, r[1] = e.radii.topRight + s, r[2] = e.radii.bottomRight + s, r[3] = e.radii.bottomLeft + s, i.save();
	try {
		i.beginPath(), i.rect(o.x1, o.y1, o.x2 - o.x1, o.y2 - o.y1), i.roundRect(c, l, u, d, r), i.clip("evenodd"), i.shadowBlur = Math.max(t.blur / 2.5, .25) * 2 * a, i.shadowOffsetX = t.offsetX * a, i.shadowOffsetY = t.offsetY * a, i.shadowColor = t.color, i.globalAlpha = t.opacity * n.viewOpacity, i.fillStyle = "black", i.beginPath(), i.roundRect(c, l, u, d, r), i.fill();
	} finally {
		i.restore();
	}
}
function U(e, t) {
	e.globalAlpha != t && (e.globalAlpha = t);
}
function W(e, t) {
	e.lineWidth != t && (e.lineWidth = t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/rule.js
function G(e, t) {
	let n = e, r = t.context, i = n.encoders;
	r.lineCap = c(n, n.properties.strokeCap), r.setLineDash(c(n, n.properties.strokeDash) ?? []), r.lineDashOffset = c(n, n.properties.strokeDashOffset);
	let a = h(i.color, t), o;
	return S(n, M(n), t, (e) => {
		let n = a ?? E(i.color(e.datum)), s = u(i.opacity, e.datum) * t.viewOpacity;
		n == "none" || s <= 0 || e.strokeWidth <= 0 || (o != n && (r.strokeStyle = n, o = n), r.globalAlpha = s, r.lineWidth = e.strokeWidth, r.beginPath(), r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2), r.stroke());
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/text.js
function K(e, t) {
	let n = e, r = n.properties, i = t.textMetrics ?? n.unitView.context.textMetrics, a = i.requestFont(r), o = T(i, r), s = x(n), l = t.context, d = n.encoders, f = b(r.font), p = `${r.fontStyle ?? "normal"} ${A(r.fontWeight ?? "normal")} `, m = s.baseline == "baseline" ? "alphabetic" : s.baseline;
	[
		r.viewportEdgeFadeWidthTop,
		r.viewportEdgeFadeWidthRight,
		r.viewportEdgeFadeWidthBottom,
		r.viewportEdgeFadeWidthLeft
	].some((e) => c(n, e) > 0) && t.warn("Canvas2D ignored unsupported text viewport edge fading.");
	let g = h(d.color, t), _, v;
	return s.logoLetters || (l.textAlign = s.align, l.textBaseline = m), D(n, s, {
		...t,
		fontMeasurement: a,
		measureLogoInkBounds: o
	}, (e) => {
		e.multiCharacterLogo && t.warn("Canvas2D stretches multi-character logo text as a single glyph cell.");
		let n = g ?? E(d.color(e.datum)), r = u(d.opacity, e.datum) * t.viewOpacity * e.fadeOpacity;
		n == "none" || r <= 0 || (_ != n && (l.fillStyle = n, _ = n), l.globalAlpha = r, v != e.size && (l.font = `${p}${e.size}px ${f}`, v = e.size), e.logoTransform ? (l.save(), l.translate(e.x, e.y), l.rotate(e.angle * Math.PI / 180), l.translate(e.dx, e.dy), l.scale(e.logoTransform.scaleX, e.logoTransform.scaleY), l.translate(-e.logoTransform.originX, -e.logoTransform.originY), l.textAlign = "left", l.textBaseline = "alphabetic", l.fillText(e.text, 0, 0), l.restore()) : e.angle || e.scale != 1 ? (l.save(), l.translate(e.x, e.y), l.rotate(e.angle * Math.PI / 180), l.translate(e.dx, e.dy), l.scale(e.scale, e.scale), l.fillText(e.text, 0, 0), l.restore()) : l.fillText(e.text, e.x + e.dx, e.y + e.dy));
	});
}
//#endregion
//#region ../core/src/rendering/canvas2d/renderers/index.js
function q(e, t) {
	return (t.start ?? 0) === (t.end ?? t.data.length) ? 0 : e.getType() == "arrow" ? I(e, t) : e.getType() == "link" ? L(e, t) : e.getType() == "rect" ? V(e, t) : e.getType() == "point" ? R(e, t) : e.getType() == "rule" || e.getType() == "tick" ? G(e, t) : e.getType() == "text" ? K(e, t) : (t.warn(`Canvas2D rendering is not implemented for mark type "${e.getType()}".`), 0);
}
//#endregion
//#region ../core/src/rendering/sampleFacet.js
function J(e) {
	let t = e.pixelToUnit, n = e.locSize.location * t, r = e.locSize.size * t;
	return !(n > 1 || n + r < 0);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DViewRenderingContext.js
var Y = 8, X = 16777216, Z = class extends o {
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
	pushView(e, t) {
		this.paint && !this.#t.has(e) && (e.onBeforeRender(), this.#t.add(e));
		let r = e.getOpacity();
		if (this.paint && r > 0 && r !== 1) {
			let r = n(e), i = Q(t, this.devicePixelRatio, this.#c, r), a = te(this.#l, this.#u.length, i.width, i.height);
			a.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, -i.x, -i.y), this.#u.push({
				context: this.context,
				bounds: this.#c
			}), this.context = a, this.#c = i;
		}
		this.#e.push({
			view: e,
			coords: t,
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
		if (o && !e.encoders.facetIndex && (this.#i?.addCount("canvasSampleFacetOccurrences"), !J(o))) {
			this.#i?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let s = this.currentCoords, c = r(t), l = i(c, e.properties.clip, s), u = m(this.width, this.height, l);
		if (!g(u)) return;
		let d = p(s, c, e.properties.cullByVisibleRange), h = this.#o?.prepare(e) ?? !1, _ = this.context;
		if (_.save(), l) {
			let e = l.rect.flatten(), t = l.clipX ? e.x : 0, n = l.clipY ? e.y : 0, r = l.clipX ? e.width : this.width, i = l.clipY ? e.height : this.height;
			_.beginPath(), _.rect(t, n, r, i), _.clip();
		}
		try {
			let n = e.getOrder?.(), r = n && n.isActive();
			f(e, t, s, this.#a, (t, i) => {
				let o = 0, s = i.length;
				h && this.#o.query(i, this.#s) && (o = this.#s[0], s = this.#s[1]);
				let c = (n, r, i, o = !1) => q(e, {
					context: _,
					devicePixelRatio: this.devicePixelRatio,
					coords: t,
					data: n,
					secondOrderPass: o,
					start: r,
					end: i,
					visibleBounds: u,
					anchorCullBounds: d,
					viewOpacity: 1,
					textMetrics: this.textMetrics,
					warn: (t) => a(`${t} View: ${e.unitView.getPathString()}`)
				});
				if (!r) return c(i, o, s);
				let l = 0, f = j(i, o, s, n.predicate, n.passes);
				for (let [e, t] of f.entries()) t.length > 0 && (l += c(t, 0, t.length, e === 1));
				return l;
			}, (t) => a(`Canvas2D could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
		} finally {
			_.restore();
		}
	}
	get currentCoords() {
		let t = e(this.#e);
		if (!t) throw Error("No current view in Canvas2D rendering context.");
		return t.coords;
	}
};
function Q(e, t, n, r) {
	let i = n.x + n.width, a = n.y + n.height, o = r.clipX ? $(Math.floor(e.x * t), n.x, i) : n.x, s = r.clipY ? $(Math.floor(e.y * t), n.y, a) : n.y, c = r.clipX ? $(Math.ceil((e.x + e.width) * t), o, i) : i, l = r.clipY ? $(Math.ceil((e.y + e.height) * t), s, a) : a;
	return {
		x: o,
		y: s,
		width: c - o,
		height: l - s
	};
}
function te(e, t, n, r) {
	let i = n * r, a = e[t], o = e.reduce((e, n, r) => r === t ? e : e + n.canvas.width * n.canvas.height, 0), s = t < Y && o + i <= X;
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
function ne(e) {
	let t = new Z({ picking: !1 }, e);
	e.layoutResult.collectRenderCommands(t);
}
//#endregion
export { J as n, ne as t };
