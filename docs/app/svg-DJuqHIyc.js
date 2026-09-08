import { an as e, o as t, s as n } from "./clipOptions-H68pJyEZ.js";
import { v as r } from "./vega-scale-BGC53c22.js";
import { x as i } from "./viewSelectors-DYYlOt91.js";
import { t as a } from "./rasterization-CFogVB3B.js";
import { t as o } from "./rectangle-DKnrAmKs.js";
import { n as s, t as c } from "./layoutResult-D50MSHXR.js";
import { A as l, C as u, D as d, E as f, M as p, O as m, S as h, T as g, _, a as v, b as y, c as b, d as x, f as S, g as C, h as w, i as T, j as E, k as D, l as O, m as ee, n as k, o as A, p as te, r as ne, s as re, t as ie, u as ae, v as oe, w as se } from "./nativeText-DAjvkrzc.js";
import { n as j, t as M } from "./svgNumber-DNxESJQB.js";
//#region ../core/src/rendering/svg/svgElement.js
var N = "http://www.w3.org/2000/svg";
function P(e, t) {
	let n = document.createElementNS(N, e);
	if (t) for (let [e, r] of Object.entries(t)) n.setAttribute(e, "" + r);
	return n;
}
//#endregion
//#region ../core/src/rendering/svg/svgAttributes.js
function F(e, t) {
	let n = Object.entries(t).filter(([t, n]) => n.encoder.constant ? (e.setAttribute(t, "" + I(n, {})), !1) : !0);
	return (e) => Object.fromEntries(n.map(([t, n]) => [t, I(n, e)]));
}
function I(e, t) {
	let n = e.encoder(t);
	return e.transform ? e.transform(n) : "" + n;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/arrow.js
function ce(e, t) {
	let n = e, { coords: r, data: i, group: a, viewOpacity: o, visibleBounds: s } = t, c = n.encoders, l = F(a, {
		fill: {
			encoder: c.fill,
			transform: f
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: c.stroke,
			transform: f
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => M(+e)
		}
	});
	a.setAttribute("stroke-linejoin", "miter");
	let u = oe(n);
	return y(n, u, {
		coords: r,
		data: i,
		visibleBounds: s,
		viewOpacity: o,
		countOnly: t.countOnly
	}, (e) => {
		t.countOnly || (e.headShapeFallback && t.warn(`SVG export rendered unsupported arrow headShape "${u.headShape}" as a triangle.`), a.appendChild(P("path", {
			d: e.boundaryLoops.map(le).join(" "),
			...l(e.datum)
		})));
	});
}
function le(e) {
	return `M ${e.map(ue).join(" L ")} Z`;
}
function ue(e) {
	return `${M(e.x)} ${M(e.y)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/link.js
function de(e, t) {
	let n = e, r = te(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = C(n, r.shape), d = F(o, {
		stroke: {
			encoder: l.color,
			transform: f
		},
		"stroke-opacity": {
			encoder: l.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => M(+e)
		}
	});
	return o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "butt"), ee(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, ({ datum: e, points: n }) => {
		let [r, i, a, s] = n;
		if (t.countOnly) return;
		let c = d(e), l = u(e);
		if (l) {
			let e = t.getLinkArcFadeMaskUrl({
				p1: r,
				p4: s,
				distances: l
			});
			e && (c.mask = e);
		}
		o.appendChild(P("path", {
			d: `M ${L(r)} C ${L(i)} ${L(a)} ${L(s)}`,
			...c
		}));
	});
}
function L(e) {
	return e.map(M).join(" ");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/point.js
function fe(e, t) {
	let n = e;
	g(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = x(n), { inwardStroke: i } = r, { group: a, viewOpacity: o } = t, s = n.encoders, c = F(a, {
		fill: {
			encoder: s.fill,
			transform: f
		},
		"fill-opacity": {
			encoder: s.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: s.stroke,
			transform: f
		},
		"stroke-opacity": {
			encoder: s.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: s.strokeWidth,
			transform: (e) => M(+e)
		}
	}), l = R();
	return S(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, shape: r, x: u, y: d, geometryRadius: f, angle: p, strokeWidth: m, lineShape: h } = e, g = {
			...c(n),
			...i && !h ? { "stroke-width": M(m) } : {},
			...h ? z(s, n, o) : {}
		}, _ = pe(r, u, d, f, g, l);
		_ ? (p && _.setAttribute("transform", `rotate(${M(p)} ${M(u)} ${M(d)})`), a.appendChild(_)) : (t.warn(`SVG export rendered unsupported point shape "${r}" as a circle.`), a.appendChild(P("circle", {
			cx: M(u),
			cy: M(d),
			r: M(f),
			...g
		})));
	});
}
function pe(e, t, n, r, i, a) {
	let o = M(t), s = M(n), c = M(r);
	if (e == "circle") return P("circle", {
		cx: o,
		cy: s,
		r: c,
		...i
	});
	if (e == "square") return P("rect", {
		x: M(t - r),
		y: M(n - r),
		width: M(r * 2),
		height: M(r * 2),
		...i
	});
	let l = a.build(e, t, n, r);
	return l ? P("path", {
		d: l,
		...i
	}) : void 0;
}
function R() {
	let e = "", t = (e, t) => `${M(e)} ${M(t)}`, n = {
		moveTo(n, r) {
			e += `${e ? " M" : "M"} ${t(n, r)}`;
		},
		lineTo(n, r) {
			e += ` L ${t(n, r)}`;
		},
		closePath() {
			e += " Z";
		}
	};
	return { build(t, r, i, a) {
		return e = "", ae(t, r, i, a, n) ? e : void 0;
	} };
}
function z(e, t, n) {
	let r = e.stroke(t), i = h(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: f(a ? e.fill(t) : r),
		"stroke-opacity": (a ? h(e.fillOpacity, t) : i) * n,
		"stroke-width": M(h(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rect.js
function B(e, t) {
	let n = e, r = b(n), { shadow: i, hatch: a } = r, { group: o, viewOpacity: s } = t, c = n.encoders, l = F(o, {
		fill: {
			encoder: c.fill,
			transform: f
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * s
		},
		stroke: {
			encoder: c.stroke,
			transform: f
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => M(+e)
		}
	}), u = i.opacity > 0 ? {
		fill: i.color,
		"fill-opacity": 1,
		stroke: i.color,
		"stroke-opacity": 1,
		opacity: j(i.opacity * s),
		filter: t.getShadowFilterUrl(i)
	} : null;
	return O(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, x: r, y: i, width: d, height: p, radii: m, opacityFactor: g, strokeWidth: _, fill: v, fillOpacity: y } = e, b = {
			...l(n),
			...g == 1 ? {} : { opacity: j(g) }
		};
		if (a != "none" && _ > 0 && (b.fill = t.getRectHatchPatternUrl({
			type: a,
			fill: f(c.fill(n)),
			fillOpacity: h(c.fillOpacity, n) * s,
			stroke: f(c.stroke(n)),
			strokeOpacity: h(c.strokeOpacity, n) * s,
			strokeWidth: _
		}), b["fill-opacity"] = 1), u) {
			let e = V(r, i, d, p, m, {
				...u,
				"stroke-width": M(_)
			});
			if (a == "none" && v != "none" && y == 1 && g == 1) o.appendChild(e);
			else {
				let n = _ / 2, a = Object.fromEntries(Object.entries(m).map(([e, t]) => [e, t + n])), s = H(r - n, i - n, d + n * 2, p + n * 2, a), c = P("g", { "clip-path": t.getShadowClipPathUrl(s) });
				c.appendChild(e), o.appendChild(c);
			}
		}
		o.appendChild(V(r, i, d, p, m, b));
	});
}
function V(e, t, n, r, i, a) {
	if (me(i)) {
		let o = i.topLeft, s = M(e), c = M(t), l = M(e + n), u = M(t + r);
		return P("rect", {
			x: s,
			y: c,
			width: M(l - s),
			height: M(u - c),
			...o ? {
				rx: M(o),
				ry: M(o)
			} : {},
			...a
		});
	} else return P("path", {
		d: H(e, t, n, r, i),
		...a
	});
}
function me(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function H(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${W(e + s, t)}`,
		`H ${M(a - c)}`,
		U(c, a, t + c, a, t),
		`V ${M(o - l)}`,
		U(l, a - l, o, a, o),
		`H ${M(e + u)}`,
		U(u, e, o - u, e, o),
		`V ${M(t + s)}`,
		U(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function U(e, t, n, r, i) {
	return e ? `A ${M(e)} ${M(e)} 0 0 1 ${W(t, n)}` : `L ${W(r, i)}`;
}
function W(e, t) {
	return `${M(e)} ${M(t)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rule.js
function G(e, t) {
	let n = e, r = A(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = n.properties.strokeDash, d = F(o, {
		stroke: {
			encoder: l.color,
			transform: f
		},
		"stroke-opacity": {
			encoder: l.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => M(+e)
		}
	});
	return o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), u && (o.setAttribute("stroke-dasharray", u.map(M).join(" ")), o.setAttribute("stroke-dashoffset", "" + M(n.properties.strokeDashOffset))), re(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, (e) => {
		t.countOnly || o.appendChild(P("line", {
			x1: M(e.x1),
			y1: M(e.y1),
			x2: M(e.x2),
			y2: M(e.y2),
			...d(e.datum)
		}));
	});
}
//#endregion
//#region ../core/src/rendering/svg/renderers/text.js
function he(e, t) {
	let n = e, r = n.properties, i = T(n), { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: l, anchorCullBounds: u } = t, d = n.encoders, p = F(s, {
		fill: {
			encoder: d.color,
			transform: f
		},
		"fill-opacity": {
			encoder: d.opacity,
			transform: (e) => +e * c
		},
		"font-size": {
			encoder: d.size,
			transform: (e) => M(+e)
		}
	});
	s.setAttribute("font-family", ie(r.font)), s.setAttribute("font-style", r.fontStyle ?? "normal"), s.setAttribute("font-weight", "" + ne(r.fontWeight ?? "normal")), s.setAttribute("text-anchor", ge[i.align]);
	let m = {
		top: {
			width: g(n, r.viewportEdgeFadeWidthTop),
			distance: g(n, r.viewportEdgeFadeDistanceTop)
		},
		right: {
			width: g(n, r.viewportEdgeFadeWidthRight),
			distance: g(n, r.viewportEdgeFadeDistanceRight)
		},
		bottom: {
			width: g(n, r.viewportEdgeFadeWidthBottom),
			distance: g(n, r.viewportEdgeFadeDistanceBottom)
		},
		left: {
			width: g(n, r.viewportEdgeFadeWidthLeft),
			distance: g(n, r.viewportEdgeFadeDistanceLeft)
		}
	}, h = v(n, i, {
		coords: a,
		data: o,
		visibleBounds: l,
		anchorCullBounds: u
	}, (e) => {
		if (t.countOnly) return;
		if (e.logoScale) {
			e.multiCharacterLogo && t.warn("SVG export stretches multi-character logo text as a single glyph cell.");
			let n = [`translate(${M(e.x)} ${M(e.y)})`];
			e.angle && n.push(`rotate(${M(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${M(e.dx)} ${M(e.dy)})`), n.push(`scale(${M(e.logoScale.width)} ${M(e.logoScale.heightScale)})`);
			let r = P("text", {
				x: 0,
				y: 0,
				dy: k("middle", 1),
				"text-anchor": "middle",
				lengthAdjust: "spacingAndGlyphs",
				textLength: 1,
				transform: n.join(" "),
				...p(e.datum),
				"font-size": 1
			});
			r.textContent = e.text, s.appendChild(r);
			return;
		}
		let n = M(e.x), r = M(e.y), a = P("text", {
			x: n,
			y: r,
			dx: M(e.dx),
			dy: M(e.dy + k(i.baseline, e.size)),
			lengthAdjust: "spacingAndGlyphs",
			textLength: M(e.width),
			...p(e.datum),
			...e.scale == 1 ? {} : { "font-size": M(e.size) },
			...e.fadeOpacity == 1 ? {} : { opacity: j(e.fadeOpacity) }
		});
		a.textContent = e.text, e.angle && a.setAttribute("transform", `rotate(${M(e.angle)} ${n} ${r})`), s.appendChild(a);
	});
	if (!t.countOnly && s.childElementCount > 0) {
		let e = t.getViewportEdgeFadeMaskUrl(m);
		e && s.setAttribute("mask", e);
	}
	return h;
}
var ge = {
	left: "start",
	center: "middle",
	right: "end"
}, K = 64;
function _e(e, t) {
	let n = ye(e.unitView);
	if (!n) return;
	let i = e.unitView.getScaleResolution(n.channel)?.getScale();
	if (!i || !r(i.type)) return;
	let { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: d } = t;
	if (!o.length) return 0;
	let p = e.encoders, m = n.channel == "stroke" ? p.stroke : p.fill, h = be(e.unitView.spec.encoding.x), g = Infinity, _ = Infinity, v = -Infinity, y = -Infinity, b = o.map((e) => {
		let [t, n] = u(a, p, e), [r, i] = se(a, p, e);
		return g = Math.min(g, t, n), _ = Math.min(_, r, i), v = Math.max(v, t, n), y = Math.max(y, r, i), {
			offset: Number(e.position),
			color: f(m(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!l(d, g, _, v, y)) return 0;
	if (t.countOnly) return o.length;
	let x = ve(b), S = [
		{
			offset: 0,
			color: x[0].color
		},
		...x,
		{
			offset: 1,
			color: x.at(-1).color
		}
	], C = t.getLegendGradientUrl({
		x1: g,
		y1: h ? _ : y,
		x2: h ? v : g,
		y2: _,
		stops: S
	}), w = M(g), T = M(_), E = M(v), D = M(y), O = Number(p.fillOpacity(o[0])) * c;
	return s.appendChild(P("rect", {
		x: w,
		y: T,
		width: M(E - w),
		height: M(D - T),
		fill: C,
		"fill-opacity": j(O),
		stroke: "none"
	})), o.length;
}
function ve(e) {
	return e.length <= K ? e : Array.from({ length: K }, (t, n) => e[Math.round(n * (e.length - 1) / (K - 1))]);
}
function ye(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function be(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/index.js
var xe = /* @__PURE__ */ new Map([
	["arrow", ce],
	["link", de],
	["point", fe],
	["rect", B],
	["rule", G],
	["text", he],
	["tick", G]
]);
function Se(e, t) {
	if (e.getType() == "rect") {
		let n = _e(e, t);
		if (n !== void 0) return n;
	}
	let n = xe.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/rendering/svg/rectHatchPattern.js
function Ce(e, t) {
	let n = t.strokeWidth, r = [
		"dots",
		"rings",
		"ringsLarge"
	].includes(t.type), i = [
		"diagonal",
		"antiDiagonal",
		"cross"
	].includes(t.type), a = [
		"vertical",
		"horizontal",
		"grid"
	].includes(t.type), o = r ? n * 7 : n * (i ? 6 : 4), s = a ? n * 2 : n, c = o, l = r ? o * 2 : o, u = P("pattern", {
		id: e,
		x: 0,
		y: 0,
		width: M(c),
		height: M(l),
		patternUnits: "userSpaceOnUse"
	});
	u.appendChild(P("rect", {
		width: M(c),
		height: M(l),
		fill: t.fill,
		"fill-opacity": j(t.fillOpacity)
	}));
	let d = P("g", {
		fill: "none",
		stroke: t.stroke,
		"stroke-opacity": j(t.strokeOpacity),
		"stroke-width": M(s),
		"stroke-linecap": "square"
	});
	return we(d, t.type, o, s), u.appendChild(d), u;
}
function we(e, t, n, r) {
	let i = (t) => e.appendChild(P("path", { d: t })), a = (e) => M(e), o = (e) => {
		for (let t of [
			-n,
			0,
			n
		]) i(`M ${a(t - r)} ${a(e ? -r : n + r)} L ${a(t + n + r)} ${a(e ? n + r : -r)}`);
	};
	switch (t) {
		case "diagonal":
			o(!0);
			break;
		case "antiDiagonal":
			o(!1);
			break;
		case "cross":
			o(!0), o(!1);
			break;
		case "vertical":
			i(`M 0 ${a(-r)} V ${a(n + r)}`);
			break;
		case "horizontal":
			i(`M ${a(-r)} 0 H ${a(n + r)}`);
			break;
		case "grid":
			i(`M 0 ${a(-r)} V ${a(n + r)} M ${a(-r)} 0 H ${a(n + r)}`);
			break;
		case "dots":
		case "rings":
		case "ringsLarge": {
			let r = n * (t == "dots" ? .07 : t == "rings" ? .2 : .35), i = (t, n) => e.appendChild(P("circle", {
				cx: M(t),
				cy: M(n),
				r: M(r)
			}));
			i(n / 2, 0), i(n / 2, n * 2), i(0, n), i(n, n);
			break;
		}
		default: throw Error(`Unknown rectangle hatch pattern: ${t}`);
	}
}
//#endregion
//#region ../core/src/rendering/svg/linkArcFadeMask.js
function Te(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = P("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: M(l - i * c),
		y1: M(u - a * c),
		x2: M(l + i * c),
		y2: M(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of w(s, c)) f.appendChild(P("stop", {
		offset: q(e, 3),
		"stop-color": "white",
		"stop-opacity": q(t, 3)
	}));
	let p = P("mask", {
		id: e,
		x: 0,
		y: 0,
		width: M(t),
		height: M(n),
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance"
	});
	return p.appendChild(P("rect", {
		width: M(t),
		height: M(n),
		fill: `url(#${d})`
	})), {
		gradient: f,
		mask: p
	};
}
function q(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/svg/svgViewRenderingContext.js
var J = class extends s {
	#e;
	#t;
	#n = [];
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new WeakMap();
	#a = /* @__PURE__ */ new Map();
	#o = /* @__PURE__ */ new Map();
	#s = /* @__PURE__ */ new Map();
	#c = /* @__PURE__ */ new Map();
	#l = /* @__PURE__ */ new Set();
	#u = !1;
	#d = /* @__PURE__ */ new Map();
	#f = new E();
	#p = P("g");
	#m;
	#h;
	#g = [];
	#_;
	#v = 0;
	#y = 0;
	#b = 0;
	#x = 0;
	#S = 0;
	#C = 0;
	#w = 0;
	constructor(e, t) {
		super(e), this.width = t.width, this.height = t.height, this.#h = t.maxVectorInstances;
		let n = M(t.width), r = M(t.height);
		this.#e = P("svg", {
			xmlns: N,
			width: n,
			height: r,
			viewBox: `0 0 ${n} ${r}`
		}), this.#t = P("defs"), this.#e.appendChild(this.#t), t.background != null && this.#e.appendChild(P("rect", {
			width: n,
			height: r,
			fill: t.background,
			"data-export-background": ""
		}));
	}
	beginInstanceCounting() {
		if (this.#n.length || this.#u) throw Error("Cannot start SVG instance counting during traversal.");
		this.#d = /* @__PURE__ */ new Map(), this.#u = !0;
	}
	endInstanceCounting() {
		if (this.#n.length || !this.#u) throw Error("SVG instance counting is not active or traversal is incomplete.");
		this.#u = !1;
	}
	getVisibleInstanceCount(e) {
		return this.#d.get(e) ?? 0;
	}
	getVisibleInstanceCounts() {
		return new Map(this.#d);
	}
	getRasterRuns() {
		this.#E();
		for (let e of this.#g) e.image || this.#D(e);
		return this.#g;
	}
	beginSampleFacetBatch() {
		if (this.#m) throw Error("Nested sample facet batches are not supported.");
		this.#m = {
			viewGroups: /* @__PURE__ */ new WeakMap(),
			markGroups: /* @__PURE__ */ new WeakMap(),
			markGroupElements: /* @__PURE__ */ new Set(),
			rasterRuns: /* @__PURE__ */ new WeakMap()
		};
	}
	endSampleFacetBatch() {
		let e = this.#m;
		if (!e) throw Error("No sample facet batch is active.");
		for (let t of e.markGroupElements) t.childElementCount || t.remove();
		this.#m = void 0;
	}
	pushView(t, n) {
		let r = t.getPathString();
		if (e(this.#n)?.exportExcluded || i(t) && t.name.startsWith("scrollbar-")) {
			this.#n.push({
				view: t,
				node: this.currentNode,
				coords: n,
				exportExcluded: !0
			});
			return;
		}
		if (this.#u) {
			this.#n.push({
				view: t,
				node: this.currentNode,
				coords: n,
				exportExcluded: !1
			});
			return;
		}
		let a = this.#m, o = a?.viewGroups.get(t);
		if (o) {
			if (o.parentNode !== this.currentNode) throw Error(`Sample-faceted view was rendered under multiple parents: ${r}`);
		} else {
			o = P("g", {
				id: Ee(t.name, this.#v++),
				"data-name": t.name,
				"data-view-path": r
			});
			let e = P("title");
			e.textContent = r, o.appendChild(e), this.currentNode.appendChild(o), a?.viewGroups.set(t, o);
		}
		this.#n.push({
			view: t,
			node: o,
			coords: n,
			exportExcluded: !1
		});
	}
	popView(e) {
		if (this.#n.pop()?.view !== e) throw Error("Unbalanced SVG view rendering context stack.");
	}
	renderMark(r, i) {
		if (e(this.#n)?.exportExcluded || r.unitView.getEffectiveOpacity() <= 0) return;
		let a = t(i), o = n(a, r.properties.clip, this.currentCoords), s = m(this.width, this.height, o);
		if (!D(s)) return;
		let c = this.getVisibleInstanceCount(r);
		if (!this.#u && this.#h != null && c == 0) return;
		if (!this.#u && this.#h != null && c > this.#h) {
			this.#T(r, s);
			return;
		}
		let l = !this.#u && this.#m != null, u = l ? this.getClipPathUrl(o) : void 0, f = l ? this.#m.markGroups.get(r)?.get(u ?? "") : void 0;
		!this.#u && !f && this.#E();
		let h = this.#u ? this.#p : this.#O(r, u), g = d(this.currentCoords, a, r.properties.cullByVisibleRange);
		if (p(r, i, this.currentCoords, this.#f, (e, t) => {
			let n = Se(r, {
				coords: e,
				data: t,
				group: h,
				visibleBounds: s,
				anchorCullBounds: g,
				viewOpacity: r.unitView.getEffectiveOpacity(),
				countOnly: this.#u,
				getViewportEdgeFadeMaskUrl: (e) => this.#u ? void 0 : this.getViewportEdgeFadeMaskUrl(e),
				getShadowFilterUrl: (e) => this.#u ? "" : this.getShadowFilterUrl(e),
				getShadowClipPathUrl: (e) => this.#u ? "" : this.getShadowClipPathUrl(e),
				getRectHatchPatternUrl: (e) => this.#u ? "" : this.getRectHatchPatternUrl(e),
				getLinkArcFadeMaskUrl: (e) => this.#u ? void 0 : this.getLinkArcFadeMaskUrl(e),
				getLegendGradientUrl: (e) => this.#u ? "" : this.getLegendGradientUrl(e),
				warn: (e) => {
					this.#u || this.#l.add(`${e} View: ${r.unitView.getPathString()}`);
				}
			});
			this.#u && this.#d.set(r, this.getVisibleInstanceCount(r) + n);
		}, (e) => this.#l.add(`SVG export could not resolve sample facet index ${e}. View: ${r.unitView.getPathString()}`)), !this.#u && !l && h.childElementCount > 0) {
			let e = this.getClipPathUrl(o);
			e && h.setAttribute("clip-path", e), this.currentNode.appendChild(h);
		}
	}
	#T(e, t) {
		let n = this.#m?.rasterRuns.get(e);
		if (n) {
			Y(n.bounds, t), n.viewNodes.add(this.currentNode);
			return;
		}
		let r = this.#_;
		if (r) Y(r.bounds, t);
		else {
			let e = document.createComment("raster-run");
			this.currentNode.appendChild(e), r = {
				marks: /* @__PURE__ */ new Set(),
				targets: [],
				viewNodes: /* @__PURE__ */ new Set(),
				anchor: e,
				bounds: { ...t },
				image: void 0
			}, this.#_ = r;
		}
		r.marks.add(e), r.targets.push({
			mark: e,
			instanceCount: this.getVisibleInstanceCount(e)
		}), r.viewNodes.add(this.currentNode), this.#m?.rasterRuns.set(e, r);
	}
	#E() {
		let e = this.#_;
		e && (this.#g.push(e), this.#_ = void 0);
	}
	#D(e) {
		let t = De(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = P("g", {
			id: `rasterized-${n.join("-")}-${this.#w++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = P("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, Oe(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) ke(n, t);
		e.image = i;
	}
	#O(e, t) {
		let n = this.#m;
		if (!n) return P("g", { "data-mark-type": e.getType() });
		let r = n.markGroups.get(e);
		r || (r = /* @__PURE__ */ new Map(), n.markGroups.set(e, r));
		let i = t ?? "", a = r.get(i);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted mark was rendered under multiple parents: ${e.unitView.getPathString()}`);
		} else a = P("g", { "data-mark-type": e.getType() }), t && a.setAttribute("clip-path", t), this.currentNode.appendChild(a), r.set(i, a), n.markGroupElements.add(a);
		return a;
	}
	getClipPathUrl(e) {
		if (!e) return;
		let t = e.rect.flatten(), n = [
			e.clipX ? t.x : 0,
			e.clipY ? t.y : 0,
			e.clipX ? t.width : this.width,
			e.clipY ? t.height : this.height
		].map(M), r = n.join(","), i = this.#r.get(r);
		if (!i) {
			i = "clip-" + this.#y++;
			let e = P("clipPath", {
				id: i,
				clipPathUnits: "userSpaceOnUse"
			});
			e.appendChild(P("rect", {
				x: n[0],
				y: n[1],
				width: n[2],
				height: n[3]
			})), this.#t.appendChild(e), this.#r.set(r, i);
		}
		return `url(#${i})`;
	}
	getShadowFilterUrl(e) {
		let t = M(Math.max(e.blur / 2.5, .25)), n = M(e.offsetX), r = M(e.offsetY), i = [
			t,
			n,
			r
		].join(","), a = this.#a.get(i);
		if (!a) {
			a = "shadow-" + this.#x++;
			let e = P("filter", {
				id: a,
				x: 0,
				y: 0,
				width: M(this.width),
				height: M(this.height),
				filterUnits: "userSpaceOnUse",
				primitiveUnits: "userSpaceOnUse",
				"color-interpolation-filters": "sRGB"
			});
			e.appendChild(P("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: t,
				result: "blur"
			})), e.appendChild(P("feOffset", {
				in: "blur",
				dx: n,
				dy: r,
				result: "offsetBlur"
			})), this.#t.appendChild(e), this.#a.set(i, a);
		}
		return `url(#${a})`;
	}
	getShadowClipPathUrl(e) {
		let t = this.#o.get(e);
		if (!t) {
			t = "shadow-clip-" + this.#y++;
			let n = P("clipPath", {
				id: t,
				clipPathUnits: "userSpaceOnUse"
			});
			n.appendChild(P("path", {
				d: `M 0 0 V ${M(this.height)} H ${M(this.width)} V 0 Z ${e}`,
				"clip-rule": "evenodd",
				"fill-rule": "evenodd"
			})), this.#t.appendChild(n), this.#o.set(e, t);
		}
		return `url(#${t})`;
	}
	getRectHatchPatternUrl(e) {
		let t = JSON.stringify([
			e.type,
			e.fill,
			j(e.fillOpacity),
			e.stroke,
			j(e.strokeOpacity),
			j(e.strokeWidth)
		]), n = this.#s.get(t);
		return n || (n = "rect-hatch-" + this.#S++, this.#t.appendChild(Ce(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#C++, n = P("linearGradient", {
			id: t,
			gradientUnits: "userSpaceOnUse",
			x1: M(e.x1),
			y1: M(e.y1),
			x2: M(e.x2),
			y2: M(e.y2)
		});
		for (let t of e.stops) n.appendChild(P("stop", {
			offset: j(t.offset),
			"stop-color": t.color
		}));
		return this.#t.appendChild(n), `url(#${t})`;
	}
	getLinkArcFadeMaskUrl(e) {
		let t = _(e.p1, e.p4, e.distances);
		if (!t) return;
		let n = this.#c.get(t.key);
		if (!n) {
			n = "link-arc-fade-" + this.#b++;
			let { gradient: e, mask: r } = Te(n, this.width, this.height, t);
			this.#t.appendChild(e), this.#t.appendChild(r), this.#c.set(t.key, n);
		}
		return `url(#${n})`;
	}
	getViewportEdgeFadeMaskUrl(t) {
		let n = Object.entries(t).filter(([, e]) => e.width > 0 && Number.isFinite(e.distance));
		if (!n.length) return;
		let r = e(this.#n);
		if (!r) throw Error("No current view in SVG rendering context.");
		let i = this.#i.get(r.view);
		if (!i) {
			i = "edge-fade-" + this.#b++;
			let e = M(this.width), t = M(this.height), a = P("mask", {
				id: i,
				x: 0,
				y: 0,
				width: e,
				height: t,
				maskUnits: "userSpaceOnUse",
				maskContentUnits: "userSpaceOnUse",
				"mask-type": "luminance"
			});
			a.appendChild(P("rect", {
				width: e,
				height: t,
				fill: "white"
			}));
			for (let [o, s] of n) {
				let n = i + "-" + o, c = Ae(n, o, s, r.coords);
				this.#t.appendChild(c), a.appendChild(P("rect", {
					width: e,
					height: t,
					fill: `url(#${n})`
				}));
			}
			this.#t.appendChild(a), this.#i.set(r.view, i);
		}
		return `url(#${i})`;
	}
	getSvg() {
		return this.#e;
	}
	getWarnings() {
		return Array.from(this.#l);
	}
	get currentNode() {
		return e(this.#n)?.node ?? this.#e;
	}
	get currentCoords() {
		let t = e(this.#n);
		if (!t) throw Error("No current view in SVG rendering context.");
		return t.coords;
	}
};
function Ee(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function Y(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function De(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function Oe(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function ke(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function Ae(e, t, n, r) {
	let i = t == "top" ? r.y + n.distance : t == "right" ? r.x2 - n.distance : t == "bottom" ? r.y2 - n.distance : r.x + n.distance, a = t == "left" || t == "right", o = i + (t == "top" || t == "left" ? 1 : -1) * n.width, s = P("linearGradient", {
		id: e,
		gradientUnits: "userSpaceOnUse",
		x1: M(a ? i : 0),
		y1: M(a ? 0 : i),
		x2: M(a ? o : 0),
		y2: M(a ? 0 : o)
	});
	return s.appendChild(P("stop", {
		offset: 0,
		"stop-color": "black",
		"stop-opacity": 1
	})), s.appendChild(P("stop", {
		offset: 1,
		"stop-color": "black",
		"stop-opacity": 0
	})), s;
}
//#endregion
//#region ../core/src/rendering/svg/index.js
function X({ viewRoot: e, logicalWidth: t, logicalHeight: n, background: r = "white" }) {
	let i = new J({ picking: !1 }, {
		width: t,
		height: n,
		background: r
	});
	return c(e, o.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(i), {
		svg: i.getSvg(),
		warnings: i.getWarnings()
	};
}
function je({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
	let r = new J({ picking: !1 }, {
		width: t,
		height: n,
		background: null
	});
	return r.beginInstanceCounting(), c(e, o.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(r), r.endInstanceCounting(), { layers: Array.from(r.getVisibleInstanceCounts(), ([e, t]) => ({
		viewName: e.unitView.name,
		viewTitle: e.unitView.getTitleText(),
		viewPath: e.unitView.getPathString(),
		markType: e.getType(),
		instanceCount: t
	})).filter((e) => e.instanceCount > 0) };
}
async function Me(e) {
	let t = e.rasterization;
	return t ? ($(t), e.rasterizeSvgRuns ? Z({
		...e,
		rasterizeSvgRuns: e.rasterizeSvgRuns,
		maxVectorInstances: t.maxVectorInstances,
		pixelRatio: t.pixelRatio
	}) : Q(e)) : {
		...X(e),
		rasterized: []
	};
}
async function Z({ viewRoot: e, rasterizeSvgRuns: t, logicalWidth: n, logicalHeight: r, background: i = "white", maxVectorInstances: s, pixelRatio: l = 2 }) {
	$({
		maxVectorInstances: s,
		pixelRatio: l
	});
	let u = new J({ picking: !1 }, {
		width: n,
		height: r,
		background: i,
		maxVectorInstances: s
	}), d = c(e, o.create(0, 0, n, r), { renderingOptions: { firstFacet: !0 } });
	u.beginInstanceCounting(), d.collectRenderCommands(u), u.endInstanceCounting(), d.collectRenderCommands(u);
	let f = u.getRasterRuns();
	if (f.length) try {
		await t({
			runs: f,
			viewRoot: e,
			layoutResult: d,
			logicalWidth: n,
			logicalHeight: r,
			pixelRatio: l
		});
	} catch (t) {
		if (t instanceof a) return Q({
			viewRoot: e,
			logicalWidth: n,
			logicalHeight: r,
			background: i
		});
		throw t;
	}
	return {
		svg: u.getSvg(),
		warnings: u.getWarnings(),
		rasterized: f.map((e) => ({
			targets: e.targets.map((e) => ({
				markType: e.mark.getType(),
				instanceCount: e.instanceCount
			})),
			reason: "instance-threshold",
			maxVectorInstances: s,
			pixelRatio: l
		}))
	};
}
function Q(e) {
	let t = X(e);
	return {
		...t,
		warnings: [...t.warnings, "SVG rasterization was requested but no raster rendering backend is available; exported all marks as vectors."],
		rasterized: []
	};
}
function $(e) {
	if (!Number.isInteger(e.maxVectorInstances) || e.maxVectorInstances < 0) throw RangeError("maxVectorInstances must be a non-negative integer.");
	if (e.pixelRatio != null && (!Number.isFinite(e.pixelRatio) || e.pixelRatio <= 0)) throw RangeError("SVG raster pixelRatio must be positive.");
}
//#endregion
export { je as analyzeSvgExport, Z as createRasterizedSvg, X as createSvg, Me as createSvgExport };
