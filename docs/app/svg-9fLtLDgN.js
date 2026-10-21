import { v as e } from "./vega-scale-BVfPgT2e.js";
import { Dn as t, o as n, s as r } from "./clipOptions-BKK6zTuk.js";
import { x as i } from "./viewSelectors-LqwqR4m-.js";
import { t as a } from "./rasterization-DFj3Cvx4.js";
import { t as o } from "./rectangle-B8otIL7D.js";
import { n as s, t as c } from "./layoutResult-D50MSHXR.js";
import { A as l, C as u, D as d, F as f, I as p, L as m, M as h, N as g, P as _, S as v, T as y, _ as b, a as x, b as S, c as C, d as w, g as T, h as E, i as D, j as O, k, l as A, m as j, n as M, o as ee, p as te, r as ne, s as re, t as ie, u as ae, v as oe, x as se, y as ce } from "./order-D3v1gCbM.js";
import { n as N, t as P } from "./svgNumber-DNxESJQB.js";
//#region ../core/src/rendering/svg/svgElement.js
var F = "http://www.w3.org/2000/svg";
function I(e, t) {
	let n = document.createElementNS(F, e);
	if (t) for (let [e, r] of Object.entries(t)) n.setAttribute(e, "" + r);
	return n;
}
//#endregion
//#region ../core/src/rendering/svg/svgAttributes.js
function L(e, t) {
	let n = Object.entries(t).filter(([t, n]) => !n.encoder.constant || (e.setAttribute(t, "" + R(n, {})), !1));
	return (e) => Object.fromEntries(n.map(([t, n]) => [t, R(n, e)]));
}
function R(e, t) {
	let n = e.encoder(t);
	return e.transform ? e.transform(n) : "" + n;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/arrow.js
function le(e, t) {
	let n = e, { coords: r, data: i, group: a, viewOpacity: o, visibleBounds: s } = t, c = n.encoders, l = L(a, {
		fill: {
			encoder: c.fill,
			transform: O
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: c.stroke,
			transform: O
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => P(+e)
		}
	});
	a.setAttribute("stroke-linejoin", "miter");
	let d = u(n);
	return y(n, d, {
		coords: r,
		data: i,
		visibleBounds: s,
		viewOpacity: o,
		countOnly: t.countOnly
	}, (e) => {
		t.countOnly || (e.headShapeFallback && t.warn(`SVG export rendered unsupported arrow headShape "${d.headShape}" as a triangle.`), a.appendChild(I("path", {
			d: e.boundaryLoops.map(ue).join(" "),
			...l(e.datum)
		})));
	});
}
function ue(e) {
	return `M ${e.map(de).join(" L ")} Z`;
}
function de(e) {
	return `${P(e.x)} ${P(e.y)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/link.js
function fe(e, t) {
	let n = e, r = oe(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = v(n, r.shape, t.secondOrderPass), f = .5, p = l.opacity.constant && l.size.constant, m = (e) => d(l.opacity, e) * s * Math.max(0, Math.min(d(l.size, e) / f, 1));
	p && o.setAttribute("stroke-opacity", "" + m({}));
	let h = L(o, {
		stroke: {
			encoder: l.color,
			transform: O
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => P(Math.max(+e, f))
		}
	});
	o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "miter"), o.setAttribute("stroke-miterlimit", "2");
	let g = o, _;
	return ce(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, ({ datum: e, geometry: n }) => {
		if (t.countOnly) return;
		let r = h(e);
		p || (r["stroke-opacity"] = m(e));
		let i = u && n.type == "cubic" ? t.getLinkArcFadeMaskUrl({
			p1: n.points[0],
			p4: n.points[3],
			distances: u
		}) : void 0;
		i !== _ && (_ = i, g = i ? I("g", { mask: i }) : o, i && o.appendChild(g)), g.appendChild(I("path", {
			d: n.type == "orthogonal" ? `M ${z(n.points[0])} L ${z(n.points[1])} L ${z(n.points[2])}` : `M ${z(n.points[0])} C ${n.points.slice(1).map(z).join(" ")}`,
			...r
		}));
	});
}
function z(e) {
	return e.map(P).join(" ");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/point.js
function pe(e, t) {
	let n = e;
	l(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = T(n), { inwardStroke: i } = r, { group: a, viewOpacity: o } = t, s = n.encoders, c = L(a, {
		fill: {
			encoder: s.fill,
			transform: O
		},
		"fill-opacity": {
			encoder: s.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: s.stroke,
			transform: O
		},
		"stroke-opacity": {
			encoder: s.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: s.strokeWidth,
			transform: (e) => P(+e)
		}
	}), u = he();
	return b(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, shape: r, x: l, y: d, geometryRadius: f, angle: p, strokeWidth: m, lineShape: h } = e, g = {
			...c(n),
			...i && !h ? { "stroke-width": P(m) } : {},
			...h ? ge(s, n, o) : {}
		}, _ = me(r, l, d, f, g, u);
		_ ? (p && _.setAttribute("transform", `rotate(${P(p)} ${P(l)} ${P(d)})`), a.appendChild(_)) : (t.warn(`SVG export rendered unsupported point shape "${r}" as a circle.`), a.appendChild(I("circle", {
			cx: P(l),
			cy: P(d),
			r: P(f),
			...g
		})));
	});
}
function me(e, t, n, r, i, a) {
	let o = P(t), s = P(n), c = P(r);
	if (e == "circle") return I("circle", {
		cx: o,
		cy: s,
		r: c,
		...i
	});
	if (e == "square") return I("rect", {
		x: P(t - r),
		y: P(n - r),
		width: P(r * 2),
		height: P(r * 2),
		...i
	});
	let l = a.build(e, t, n, r);
	return l ? I("path", {
		d: l,
		...i
	}) : void 0;
}
function he() {
	let e = "", t = (e, t) => `${P(e)} ${P(t)}`, n = {
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
		return e = "", E(t, r, i, a, n) ? e : void 0;
	} };
}
function ge(e, t, n) {
	let r = e.stroke(t), i = d(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: O(a ? e.fill(t) : r),
		"stroke-opacity": (a ? d(e.fillOpacity, t) : i) * n,
		"stroke-width": P(d(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rect.js
function _e(e, t) {
	let n = e, r = te(n), { shadow: i, hatch: a } = r, { group: o, viewOpacity: s } = t, c = n.encoders, l = L(o, {
		fill: {
			encoder: c.fill,
			transform: O
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * s
		},
		stroke: {
			encoder: c.stroke,
			transform: O
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => P(+e)
		}
	}), u = i.opacity > 0 ? {
		fill: i.color,
		"fill-opacity": 1,
		stroke: i.color,
		"stroke-opacity": 1,
		opacity: N(i.opacity * s),
		filter: t.getShadowFilterUrl(i)
	} : null;
	return j(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, x: r, y: i, width: f, height: p, radii: m, opacityFactor: h, strokeWidth: g, fill: _, fillOpacity: v } = e, y = {
			...l(n),
			...h == 1 ? {} : { opacity: N(h) }
		};
		if (a != "none" && g > 0 && (y.fill = t.getRectHatchPatternUrl({
			type: a,
			fill: O(c.fill(n)),
			fillOpacity: d(c.fillOpacity, n) * s,
			stroke: O(c.stroke(n)),
			strokeOpacity: d(c.strokeOpacity, n) * s,
			strokeWidth: g
		}), y["fill-opacity"] = 1), u) {
			let e = B(r, i, f, p, m, {
				...u,
				"stroke-width": P(g)
			});
			if (a == "none" && _ != "none" && v == 1 && h == 1) o.appendChild(e);
			else {
				let n = g / 2, a = Object.fromEntries(Object.entries(m).map(([e, t]) => [e, t + n])), s = V(r - n, i - n, f + n * 2, p + n * 2, a), c = I("g", { "clip-path": t.getShadowClipPathUrl(s) });
				c.appendChild(e), o.appendChild(c);
			}
		}
		o.appendChild(B(r, i, f, p, m, y));
	});
}
function B(e, t, n, r, i, a) {
	if (ve(i)) {
		let o = i.topLeft, s = P(e), c = P(t), l = P(e + n), u = P(t + r);
		return I("rect", {
			x: s,
			y: c,
			width: P(l - s),
			height: P(u - c),
			...o ? {
				rx: P(o),
				ry: P(o)
			} : {},
			...a
		});
	}
	return I("path", {
		d: V(e, t, n, r, i),
		...a
	});
}
function ve(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function V(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${U(e + s, t)}`,
		`H ${P(a - c)}`,
		H(c, a, t + c, a, t),
		`V ${P(o - l)}`,
		H(l, a - l, o, a, o),
		`H ${P(e + u)}`,
		H(u, e, o - u, e, o),
		`V ${P(t + s)}`,
		H(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function H(e, t, n, r, i) {
	return e ? `A ${P(e)} ${P(e)} 0 0 1 ${U(t, n)}` : `L ${U(r, i)}`;
}
function U(e, t) {
	return `${P(e)} ${P(t)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rule.js
function W(e, t) {
	let n = e, r = ae(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = n.properties.strokeDash, d = L(o, {
		stroke: {
			encoder: l.color,
			transform: O
		},
		"stroke-opacity": {
			encoder: l.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => P(+e)
		}
	});
	return o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), u && (o.setAttribute("stroke-dasharray", u.map(P).join(" ")), o.setAttribute("stroke-dashoffset", "" + P(n.properties.strokeDashOffset))), w(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, (e) => {
		t.countOnly || o.appendChild(I("line", {
			x1: P(e.x1),
			y1: P(e.y1),
			x2: P(e.x2),
			y2: P(e.y2),
			...d(e.datum)
		}));
	});
}
//#endregion
//#region ../core/src/rendering/svg/renderers/text.js
function ye(e, t) {
	let n = e, r = n.properties, i = t.textMetrics ?? n.unitView.context.textMetrics, a = i.requestFont(r), o = D(i, r), s = C(n), { coords: c, data: u, group: d, viewOpacity: f, visibleBounds: p, anchorCullBounds: m } = t, h = n.encoders, g = L(d, {
		fill: {
			encoder: h.color,
			transform: O
		},
		"fill-opacity": {
			encoder: h.opacity,
			transform: (e) => +e * f
		},
		"font-size": {
			encoder: h.size,
			transform: (e) => P(+e)
		}
	});
	d.setAttribute("font-family", x(r.font)), d.setAttribute("font-style", r.fontStyle ?? "normal"), d.setAttribute("font-weight", "" + re(r.fontWeight ?? "normal")), d.setAttribute("text-anchor", be[s.align]);
	let _ = {
		top: {
			width: l(n, r.viewportEdgeFadeWidthTop),
			distance: l(n, r.viewportEdgeFadeDistanceTop)
		},
		right: {
			width: l(n, r.viewportEdgeFadeWidthRight),
			distance: l(n, r.viewportEdgeFadeDistanceRight)
		},
		bottom: {
			width: l(n, r.viewportEdgeFadeWidthBottom),
			distance: l(n, r.viewportEdgeFadeDistanceBottom)
		},
		left: {
			width: l(n, r.viewportEdgeFadeWidthLeft),
			distance: l(n, r.viewportEdgeFadeDistanceLeft)
		}
	}, v = A(n, s, {
		coords: c,
		data: u,
		visibleBounds: p,
		anchorCullBounds: m,
		fontMeasurement: a,
		measureLogoInkBounds: o
	}, (e) => {
		if (t.countOnly) return;
		if (e.logoTransform) {
			e.multiCharacterLogo && t.warn("SVG export stretches multi-character logo text as a single glyph cell.");
			let n = [`translate(${P(e.x)} ${P(e.y)})`];
			e.angle && n.push(`rotate(${P(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${P(e.dx)} ${P(e.dy)})`), n.push(`scale(${P(e.logoTransform.scaleX)} ${P(e.logoTransform.scaleY)})`), n.push(`translate(${P(-e.logoTransform.originX)} ${P(-e.logoTransform.originY)})`);
			let r = I("text", {
				x: 0,
				y: 0,
				"text-anchor": "start",
				transform: n.join(" "),
				...g(e.datum),
				"font-size": e.size
			});
			r.textContent = e.text, d.appendChild(r);
			return;
		}
		let n = [`translate(${P(e.x)} ${P(e.y)})`];
		e.angle && n.push(`rotate(${P(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${P(e.dx)} ${P(e.dy)})`), e.scale != 1 && n.push(`scale(${P(e.scale)})`);
		let r = I("text", {
			x: 0,
			y: 0,
			dy: P(ee(s.baseline, e.size)),
			...g(e.datum),
			...e.fadeOpacity == 1 ? {} : { opacity: N(e.fadeOpacity) },
			transform: n.join(" ")
		});
		r.textContent = e.text, d.appendChild(r);
	});
	if (!t.countOnly && d.childElementCount > 0) {
		let e = t.getViewportEdgeFadeMaskUrl(_);
		e && d.setAttribute("mask", e);
	}
	return v;
}
var be = {
	left: "start",
	center: "middle",
	right: "end"
}, G = 64;
function xe(t, n) {
	let r = Ce(t.unitView);
	if (!r) return;
	let i = t.unitView.getScaleResolution(r.channel)?.getScale();
	if (!i || !e(i.type)) return;
	let { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: l } = n;
	if (!o.length) return 0;
	let u = t.encoders, d = r.channel == "stroke" ? u.stroke : u.fill, p = we(t.unitView.spec.encoding.x), m = Infinity, h = Infinity, g = -Infinity, _ = -Infinity, v = k(a, u, "x", o[0]), y = k(a, u, "y", o[0]), b = [0, 0], x = [0, 0], S = o.map((e) => {
		let [t, n] = v(e, b), [r, i] = y(e, x);
		return m = Math.min(m, t, n), h = Math.min(h, r, i), g = Math.max(g, t, n), _ = Math.max(_, r, i), {
			offset: Number(e.position),
			color: O(d(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!f(l, m, h, g, _)) return 0;
	if (n.countOnly) return o.length;
	let C = Se(S), w = [
		{
			offset: 0,
			color: C[0].color
		},
		...C,
		{
			offset: 1,
			color: C.at(-1).color
		}
	], T = n.getLegendGradientUrl({
		x1: m,
		y1: p ? h : _,
		x2: p ? g : m,
		y2: h,
		stops: w
	}), E = P(m), D = P(h), A = P(g), j = P(_), M = Number(u.fillOpacity(o[0])) * c;
	return s.appendChild(I("rect", {
		x: E,
		y: D,
		width: P(A - E),
		height: P(j - D),
		fill: T,
		"fill-opacity": N(M),
		stroke: "none"
	})), o.length;
}
function Se(e) {
	return e.length <= G ? e : Array.from({ length: G }, (t, n) => e[Math.round(n * (e.length - 1) / 63)]);
}
function Ce(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function we(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/index.js
var Te = /* @__PURE__ */ new Map([
	["arrow", le],
	["link", fe],
	["point", pe],
	["rect", _e],
	["rule", W],
	["text", ye],
	["tick", W]
]);
function Ee(e, t) {
	if (e.getType() == "rect") {
		let n = xe(e, t);
		if (n !== void 0) return n;
	}
	let n = Te.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/rendering/svg/rectHatchPattern.js
function De(e, t) {
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
	].includes(t.type), o = r ? n * 7 : n * (i ? 6 : 4), s = a ? n * 2 : n, c = o, l = r ? o * 2 : o, u = I("pattern", {
		id: e,
		x: 0,
		y: 0,
		width: P(c),
		height: P(l),
		patternUnits: "userSpaceOnUse"
	});
	u.appendChild(I("rect", {
		width: P(c),
		height: P(l),
		fill: t.fill,
		"fill-opacity": N(t.fillOpacity)
	}));
	let d = I("g", {
		fill: "none",
		stroke: t.stroke,
		"stroke-opacity": N(t.strokeOpacity),
		"stroke-width": P(s),
		"stroke-linecap": "square"
	});
	return Oe(d, t.type, o, s), u.appendChild(d), u;
}
function Oe(e, t, n, r) {
	let i = (t) => e.appendChild(I("path", { d: t })), a = (e) => P(e), o = (e) => {
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
			let r = n * (t == "dots" ? .07 : t == "rings" ? .2 : .35), i = (t, n) => e.appendChild(I("circle", {
				cx: P(t),
				cy: P(n),
				r: P(r)
			}));
			i(n / 2, 0), i(n / 2, n * 2), i(0, n), i(n, n);
			break;
		}
		default: throw Error(`Unknown rectangle hatch pattern: ${t}`);
	}
}
//#endregion
//#region ../core/src/rendering/svg/linkArcFadeMask.js
function ke(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = I("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: P(l - i * c),
		y1: P(u - a * c),
		x2: P(l + i * c),
		y2: P(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of S(s, c)) f.appendChild(I("stop", {
		offset: K(e, 3),
		"stop-color": "white",
		"stop-opacity": K(t, 3)
	}));
	let p = I("mask", {
		id: e,
		x: 0,
		y: 0,
		width: P(t),
		height: P(n),
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance"
	});
	return p.appendChild(I("rect", {
		width: P(t),
		height: P(n),
		fill: `url(#${d})`
	})), {
		gradient: f,
		mask: p
	};
}
function K(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/svg/svgViewRenderingContext.js
var q = class extends s {
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
	#f = new p();
	#p = I("g");
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
		super(e), this.width = t.width, this.height = t.height, this.textMetrics = t.textMetrics, this.#h = t.maxVectorInstances;
		let n = P(t.width), r = P(t.height);
		this.#e = I("svg", {
			xmlns: F,
			width: n,
			height: r,
			viewBox: `0 0 ${n} ${r}`
		}), this.#t = I("defs"), this.#e.appendChild(this.#t), t.background != null && this.#e.appendChild(I("rect", {
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
	pushView(e, n) {
		let r = e.getPathString();
		if (t(this.#n)?.exportExcluded || i(e) && e.name.startsWith("scrollbar-")) {
			this.#n.push({
				view: e,
				node: this.currentNode,
				coords: n,
				exportExcluded: !0
			});
			return;
		}
		if (this.#u) {
			this.#n.push({
				view: e,
				node: this.currentNode,
				coords: n,
				exportExcluded: !1
			});
			return;
		}
		let a = this.#m, o = a?.viewGroups.get(e);
		if (o) {
			if (o.parentNode !== this.currentNode) throw Error(`Sample-faceted view was rendered under multiple parents: ${r}`);
		} else {
			o = I("g", {
				id: Ae(e.name, this.#v++),
				"data-name": e.name,
				"data-view-path": r
			});
			let t = I("title");
			t.textContent = r, o.appendChild(t), this.currentNode.appendChild(o), a?.viewGroups.set(e, o);
		}
		this.#n.push({
			view: e,
			node: o,
			coords: n,
			exportExcluded: !1
		});
	}
	popView(e) {
		if (this.#n.pop()?.view !== e) throw Error("Unbalanced SVG view rendering context stack.");
	}
	renderMark(e, i) {
		if (t(this.#n)?.exportExcluded || e.unitView.getEffectiveOpacity() <= 0) return;
		let a = n(i), o = r(a, e.properties.clip, this.currentCoords), s = g(this.width, this.height, o);
		if (!_(s)) return;
		let c = this.getVisibleInstanceCount(e);
		if (!this.#u && this.#h != null && c == 0) return;
		if (!this.#u && this.#h != null && c > this.#h) {
			this.#T(e, s);
			return;
		}
		let l = !this.#u && this.#m != null, u = l ? this.getClipPathUrl(o) : void 0, d = l ? this.#m.markGroups.get(e)?.get(u ?? "") : void 0;
		!this.#u && !d && this.#E();
		let f = this.#u ? this.#p : this.#O(e, u), p = h(this.currentCoords, a, e.properties.cullByVisibleRange), v = e.getOrder?.(), y = !this.#u && v && v.isActive();
		if (m(e, i, this.currentCoords, this.#f, (t, n) => {
			let r = (n, r = !1) => {
				let i = Ee(e, {
					coords: t,
					data: n,
					group: f,
					visibleBounds: s,
					anchorCullBounds: p,
					viewOpacity: e.unitView.getEffectiveOpacity(),
					textMetrics: this.textMetrics,
					secondOrderPass: r,
					countOnly: this.#u,
					getViewportEdgeFadeMaskUrl: (e) => this.#u ? void 0 : this.getViewportEdgeFadeMaskUrl(e),
					getShadowFilterUrl: (e) => this.#u ? "" : this.getShadowFilterUrl(e),
					getShadowClipPathUrl: (e) => this.#u ? "" : this.getShadowClipPathUrl(e),
					getRectHatchPatternUrl: (e) => this.#u ? "" : this.getRectHatchPatternUrl(e),
					getLinkArcFadeMaskUrl: (e) => this.#u ? void 0 : this.getLinkArcFadeMaskUrl(e),
					getLegendGradientUrl: (e) => this.#u ? "" : this.getLegendGradientUrl(e),
					warn: (t) => {
						this.#u || this.#l.add(`${t} View: ${e.unitView.getPathString()}`);
					}
				});
				this.#u && this.#d.set(e, this.getVisibleInstanceCount(e) + i);
			};
			if (!y) {
				r(n);
				return;
			}
			let i = ie(n, 0, n.length, v.predicate, v.passes);
			for (let [e, t] of i.entries()) t.length !== 0 && r(t, e === 1);
		}, (t) => this.#l.add(`SVG export could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`)), !this.#u && !l && f.childElementCount > 0) {
			let e = this.getClipPathUrl(o);
			e && f.setAttribute("clip-path", e), this.currentNode.appendChild(f);
		}
	}
	#T(e, t) {
		let n = this.#m?.rasterRuns.get(e);
		if (n) {
			J(n.bounds, t), n.viewNodes.add(this.currentNode);
			return;
		}
		let r = this.#_;
		if (r) J(r.bounds, t);
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
		let t = je(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = I("g", {
			id: `rasterized-${n.join("-")}-${this.#w++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = I("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, Me(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) Ne(n, t);
		e.image = i;
	}
	#O(e, t) {
		let n = this.#m;
		if (!n) return I("g", { "data-mark-type": e.getType() });
		let r = n.markGroups.get(e);
		r || (r = /* @__PURE__ */ new Map(), n.markGroups.set(e, r));
		let i = t ?? "", a = r.get(i);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted mark was rendered under multiple parents: ${e.unitView.getPathString()}`);
		} else a = I("g", { "data-mark-type": e.getType() }), t && a.setAttribute("clip-path", t), this.currentNode.appendChild(a), r.set(i, a), n.markGroupElements.add(a);
		return a;
	}
	getClipPathUrl(e) {
		if (!e) return;
		let t = e.rect.flatten(), n = [
			e.clipX ? t.x : 0,
			e.clipY ? t.y : 0,
			e.clipX ? t.width : this.width,
			e.clipY ? t.height : this.height
		].map(P), r = n.join(","), i = this.#r.get(r);
		if (!i) {
			i = "clip-" + this.#y++;
			let e = I("clipPath", {
				id: i,
				clipPathUnits: "userSpaceOnUse"
			});
			e.appendChild(I("rect", {
				x: n[0],
				y: n[1],
				width: n[2],
				height: n[3]
			})), this.#t.appendChild(e), this.#r.set(r, i);
		}
		return `url(#${i})`;
	}
	getShadowFilterUrl(e) {
		let t = P(Math.max(e.blur / 2.5, .25)), n = P(e.offsetX), r = P(e.offsetY), i = [
			t,
			n,
			r
		].join(","), a = this.#a.get(i);
		if (!a) {
			a = "shadow-" + this.#x++;
			let e = I("filter", {
				id: a,
				x: 0,
				y: 0,
				width: P(this.width),
				height: P(this.height),
				filterUnits: "userSpaceOnUse",
				primitiveUnits: "userSpaceOnUse",
				"color-interpolation-filters": "sRGB"
			});
			e.appendChild(I("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: t,
				result: "blur"
			})), e.appendChild(I("feOffset", {
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
			let n = I("clipPath", {
				id: t,
				clipPathUnits: "userSpaceOnUse"
			});
			n.appendChild(I("path", {
				d: `M 0 0 V ${P(this.height)} H ${P(this.width)} V 0 Z ${e}`,
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
			N(e.fillOpacity),
			e.stroke,
			N(e.strokeOpacity),
			N(e.strokeWidth)
		]), n = this.#s.get(t);
		return n || (n = "rect-hatch-" + this.#S++, this.#t.appendChild(De(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#C++, n = I("linearGradient", {
			id: t,
			gradientUnits: "userSpaceOnUse",
			x1: P(e.x1),
			y1: P(e.y1),
			x2: P(e.x2),
			y2: P(e.y2)
		});
		for (let t of e.stops) n.appendChild(I("stop", {
			offset: N(t.offset),
			"stop-color": t.color
		}));
		return this.#t.appendChild(n), `url(#${t})`;
	}
	getLinkArcFadeMaskUrl(e) {
		let t = se(e.p1, e.p4, e.distances);
		if (!t) return;
		let n = this.#c.get(t.key);
		if (!n) {
			n = "link-arc-fade-" + this.#b++;
			let { gradient: e, mask: r } = ke(n, this.width, this.height, t);
			this.#t.appendChild(e), this.#t.appendChild(r), this.#c.set(t.key, n);
		}
		return `url(#${n})`;
	}
	getViewportEdgeFadeMaskUrl(e) {
		let n = Object.entries(e).filter(([, e]) => e.width > 0 && Number.isFinite(e.distance));
		if (!n.length) return;
		let r = t(this.#n);
		if (!r) throw Error("No current view in SVG rendering context.");
		let i = this.#i.get(r.view);
		if (!i) {
			i = "edge-fade-" + this.#b++;
			let e = P(this.width), t = P(this.height), a = I("mask", {
				id: i,
				x: 0,
				y: 0,
				width: e,
				height: t,
				maskUnits: "userSpaceOnUse",
				maskContentUnits: "userSpaceOnUse",
				"mask-type": "luminance"
			});
			a.appendChild(I("rect", {
				width: e,
				height: t,
				fill: "white"
			}));
			for (let [o, s] of n) {
				let n = i + "-" + o, c = Pe(n, o, s, r.coords);
				this.#t.appendChild(c), a.appendChild(I("rect", {
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
		return t(this.#n)?.node ?? this.#e;
	}
	get currentCoords() {
		let e = t(this.#n);
		if (!e) throw Error("No current view in SVG rendering context.");
		return e.coords;
	}
};
function Ae(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function J(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function je(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function Me(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function Ne(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function Pe(e, t, n, r) {
	let i = t == "top" ? r.y + n.distance : t == "right" ? r.x2 - n.distance : t == "bottom" ? r.y2 - n.distance : r.x + n.distance, a = t == "left" || t == "right", o = i + (t == "top" || t == "left" ? 1 : -1) * n.width, s = I("linearGradient", {
		id: e,
		gradientUnits: "userSpaceOnUse",
		x1: P(a ? i : 0),
		y1: P(a ? 0 : i),
		x2: P(a ? o : 0),
		y2: P(a ? 0 : o)
	});
	return s.appendChild(I("stop", {
		offset: 0,
		"stop-color": "black",
		"stop-opacity": 1
	})), s.appendChild(I("stop", {
		offset: 1,
		"stop-color": "black",
		"stop-opacity": 0
	})), s;
}
//#endregion
//#region ../core/src/rendering/svg/index.js
function Y({ viewRoot: e, logicalWidth: t, logicalHeight: n, background: r = "white", textMetrics: i = e.context.textMetrics }) {
	let a = new q({ picking: !1 }, {
		width: t,
		height: n,
		background: r,
		textMetrics: i
	});
	return c(e, o.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(a), {
		svg: a.getSvg(),
		warnings: a.getWarnings()
	};
}
async function Fe({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
	let r = new q({ picking: !1 }, {
		width: t,
		height: n,
		background: null,
		textMetrics: await Z(e)
	});
	return r.beginInstanceCounting(), c(e, o.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(r), r.endInstanceCounting(), { layers: Array.from(r.getVisibleInstanceCounts(), ([e, t]) => ({
		viewName: e.unitView.name,
		viewTitle: e.unitView.getTitleText(),
		viewPath: e.unitView.getPathString(),
		markType: e.getType(),
		instanceCount: t
	})).filter((e) => e.instanceCount > 0) };
}
async function Ie(e) {
	let t = await Z(e.viewRoot), n = {
		...e,
		textMetrics: t
	}, r = e.rasterization;
	return r ? ($(r), e.rasterizeSvgRuns ? X({
		...n,
		rasterizeSvgRuns: e.rasterizeSvgRuns,
		maxVectorInstances: r.maxVectorInstances,
		pixelRatio: r.pixelRatio
	}) : Q(n)) : {
		...Y(n),
		rasterized: []
	};
}
async function X({ viewRoot: e, rasterizeSvgRuns: t, logicalWidth: n, logicalHeight: r, background: i = "white", maxVectorInstances: s, pixelRatio: l = 2, textMetrics: u }) {
	u ??= await Z(e), $({
		maxVectorInstances: s,
		pixelRatio: l
	});
	let d = new q({ picking: !1 }, {
		width: n,
		height: r,
		background: i,
		maxVectorInstances: s,
		textMetrics: u
	}), f = o.create(0, 0, n, r), p = c(e, f, { renderingOptions: { firstFacet: !0 } });
	d.beginInstanceCounting(), p.collectRenderCommands(d), d.endInstanceCounting(), p.collectRenderCommands(d);
	let m = d.getRasterRuns();
	if (m.length) try {
		await t({
			runs: m,
			viewRoot: e,
			layoutResult: p,
			textMetrics: u,
			logicalWidth: n,
			logicalHeight: r,
			pixelRatio: l
		});
	} catch (t) {
		if (t instanceof a) return Q({
			viewRoot: e,
			logicalWidth: n,
			logicalHeight: r,
			background: i,
			textMetrics: u
		});
		throw t;
	}
	return {
		svg: d.getSvg(),
		warnings: d.getWarnings(),
		rasterized: m.map((e) => ({
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
async function Z(e) {
	if (!document.fonts) return e.context.textMetrics;
	let t = M(document);
	return await ne(t, e), t;
}
function Q(e) {
	let t = Y(e);
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
export { Fe as analyzeSvgExport, X as createRasterizedSvg, Y as createSvg, Ie as createSvgExport };
