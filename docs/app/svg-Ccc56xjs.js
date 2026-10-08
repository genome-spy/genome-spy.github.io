import { v as e } from "./vega-scale-9laB5MTw.js";
import { hn as t, o as n, s as r } from "./clipOptions-DXTezKOk.js";
import { x as i } from "./viewSelectors-fcD5-mIw.js";
import { t as a } from "./rasterization-B05bDo5e.js";
import { t as o } from "./rectangle-DE98gIxF.js";
import { n as s, t as c } from "./layoutResult-D50MSHXR.js";
import { A as l, D as u, E as d, F as f, I as p, M as m, N as h, O as g, P as _, S as v, _ as y, a as b, b as x, c as S, d as C, f as w, g as T, h as E, i as D, j as O, k, l as A, m as ee, n as te, o as ne, p as j, r as re, s as ie, t as ae, u as oe, v as se, w as ce, x as le, y as ue } from "./order-SJAbVYXZ.js";
import { n as M, t as N } from "./svgNumber-DNxESJQB.js";
//#region ../core/src/rendering/svg/svgElement.js
var P = "http://www.w3.org/2000/svg";
function F(e, t) {
	let n = document.createElementNS(P, e);
	if (t) for (let [e, r] of Object.entries(t)) n.setAttribute(e, "" + r);
	return n;
}
//#endregion
//#region ../core/src/rendering/svg/svgAttributes.js
function I(e, t) {
	let n = Object.entries(t).filter(([t, n]) => !n.encoder.constant || (e.setAttribute(t, "" + L(n, {})), !1));
	return (e) => Object.fromEntries(n.map(([t, n]) => [t, L(n, e)]));
}
function L(e, t) {
	let n = e.encoder(t);
	return e.transform ? e.transform(n) : "" + n;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/arrow.js
function de(e, t) {
	let n = e, { coords: r, data: i, group: a, viewOpacity: o, visibleBounds: s } = t, c = n.encoders, u = I(a, {
		fill: {
			encoder: c.fill,
			transform: l
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: c.stroke,
			transform: l
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => N(+e)
		}
	});
	a.setAttribute("stroke-linejoin", "miter");
	let d = v(n);
	return ce(n, d, {
		coords: r,
		data: i,
		visibleBounds: s,
		viewOpacity: o,
		countOnly: t.countOnly
	}, (e) => {
		t.countOnly || (e.headShapeFallback && t.warn(`SVG export rendered unsupported arrow headShape "${d.headShape}" as a triangle.`), a.appendChild(F("path", {
			d: e.boundaryLoops.map(fe).join(" "),
			...u(e.datum)
		})));
	});
}
function fe(e) {
	return `M ${e.map(pe).join(" L ")} Z`;
}
function pe(e) {
	return `${N(e.x)} ${N(e.y)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/link.js
function me(e, t) {
	let n = e, r = y(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, u = n.encoders, f = le(n, r.shape, t.secondOrderPass), p = .5, m = u.opacity.constant && u.size.constant, h = (e) => d(u.opacity, e) * s * Math.max(0, Math.min(d(u.size, e) / p, 1));
	m && o.setAttribute("stroke-opacity", "" + h({}));
	let g = I(o, {
		stroke: {
			encoder: u.color,
			transform: l
		},
		"stroke-width": {
			encoder: u.size,
			transform: (e) => N(Math.max(+e, p))
		}
	});
	o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "butt");
	let _ = o, v;
	return se(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, ({ datum: e, points: n }) => {
		let [r, i, a, s] = n;
		if (t.countOnly) return;
		let c = g(e);
		m || (c["stroke-opacity"] = h(e));
		let l = f ? t.getLinkArcFadeMaskUrl({
			p1: r,
			p4: s,
			distances: f
		}) : void 0;
		l !== v && (v = l, _ = l ? F("g", { mask: l }) : o, l && o.appendChild(_)), _.appendChild(F("path", {
			d: `M ${R(r)} C ${R(i)} ${R(a)} ${R(s)}`,
			...c
		}));
	});
}
function R(e) {
	return e.map(N).join(" ");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/point.js
function z(e, t) {
	let n = e;
	k(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = E(n), { inwardStroke: i } = r, { group: a, viewOpacity: o } = t, s = n.encoders, c = I(a, {
		fill: {
			encoder: s.fill,
			transform: l
		},
		"fill-opacity": {
			encoder: s.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: s.stroke,
			transform: l
		},
		"stroke-opacity": {
			encoder: s.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: s.strokeWidth,
			transform: (e) => N(+e)
		}
	}), u = ge();
	return T(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, shape: r, x: l, y: d, geometryRadius: f, angle: p, strokeWidth: m, lineShape: h } = e, g = {
			...c(n),
			...i && !h ? { "stroke-width": N(m) } : {},
			...h ? _e(s, n, o) : {}
		}, _ = he(r, l, d, f, g, u);
		_ ? (p && _.setAttribute("transform", `rotate(${N(p)} ${N(l)} ${N(d)})`), a.appendChild(_)) : (t.warn(`SVG export rendered unsupported point shape "${r}" as a circle.`), a.appendChild(F("circle", {
			cx: N(l),
			cy: N(d),
			r: N(f),
			...g
		})));
	});
}
function he(e, t, n, r, i, a) {
	let o = N(t), s = N(n), c = N(r);
	if (e == "circle") return F("circle", {
		cx: o,
		cy: s,
		r: c,
		...i
	});
	if (e == "square") return F("rect", {
		x: N(t - r),
		y: N(n - r),
		width: N(r * 2),
		height: N(r * 2),
		...i
	});
	let l = a.build(e, t, n, r);
	return l ? F("path", {
		d: l,
		...i
	}) : void 0;
}
function ge() {
	let e = "", t = (e, t) => `${N(e)} ${N(t)}`, n = {
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
		return e = "", ee(t, r, i, a, n) ? e : void 0;
	} };
}
function _e(e, t, n) {
	let r = e.stroke(t), i = d(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: l(a ? e.fill(t) : r),
		"stroke-opacity": (a ? d(e.fillOpacity, t) : i) * n,
		"stroke-width": N(d(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rect.js
function ve(e, t) {
	let n = e, r = w(n), { shadow: i, hatch: a } = r, { group: o, viewOpacity: s } = t, c = n.encoders, u = I(o, {
		fill: {
			encoder: c.fill,
			transform: l
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * s
		},
		stroke: {
			encoder: c.stroke,
			transform: l
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => N(+e)
		}
	}), f = i.opacity > 0 ? {
		fill: i.color,
		"fill-opacity": 1,
		stroke: i.color,
		"stroke-opacity": 1,
		opacity: M(i.opacity * s),
		filter: t.getShadowFilterUrl(i)
	} : null;
	return j(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, x: r, y: i, width: p, height: m, radii: h, opacityFactor: g, strokeWidth: _, fill: v, fillOpacity: y } = e, b = {
			...u(n),
			...g == 1 ? {} : { opacity: M(g) }
		};
		if (a != "none" && _ > 0 && (b.fill = t.getRectHatchPatternUrl({
			type: a,
			fill: l(c.fill(n)),
			fillOpacity: d(c.fillOpacity, n) * s,
			stroke: l(c.stroke(n)),
			strokeOpacity: d(c.strokeOpacity, n) * s,
			strokeWidth: _
		}), b["fill-opacity"] = 1), f) {
			let e = B(r, i, p, m, h, {
				...f,
				"stroke-width": N(_)
			});
			if (a == "none" && v != "none" && y == 1 && g == 1) o.appendChild(e);
			else {
				let n = _ / 2, a = Object.fromEntries(Object.entries(h).map(([e, t]) => [e, t + n])), s = V(r - n, i - n, p + n * 2, m + n * 2, a), c = F("g", { "clip-path": t.getShadowClipPathUrl(s) });
				c.appendChild(e), o.appendChild(c);
			}
		}
		o.appendChild(B(r, i, p, m, h, b));
	});
}
function B(e, t, n, r, i, a) {
	if (ye(i)) {
		let o = i.topLeft, s = N(e), c = N(t), l = N(e + n), u = N(t + r);
		return F("rect", {
			x: s,
			y: c,
			width: N(l - s),
			height: N(u - c),
			...o ? {
				rx: N(o),
				ry: N(o)
			} : {},
			...a
		});
	}
	return F("path", {
		d: V(e, t, n, r, i),
		...a
	});
}
function ye(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function V(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${U(e + s, t)}`,
		`H ${N(a - c)}`,
		H(c, a, t + c, a, t),
		`V ${N(o - l)}`,
		H(l, a - l, o, a, o),
		`H ${N(e + u)}`,
		H(u, e, o - u, e, o),
		`V ${N(t + s)}`,
		H(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function H(e, t, n, r, i) {
	return e ? `A ${N(e)} ${N(e)} 0 0 1 ${U(t, n)}` : `L ${U(r, i)}`;
}
function U(e, t) {
	return `${N(e)} ${N(t)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rule.js
function W(e, t) {
	let n = e, r = oe(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, u = n.encoders, d = n.properties.strokeDash, f = I(o, {
		stroke: {
			encoder: u.color,
			transform: l
		},
		"stroke-opacity": {
			encoder: u.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: u.size,
			transform: (e) => N(+e)
		}
	});
	return o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), d && (o.setAttribute("stroke-dasharray", d.map(N).join(" ")), o.setAttribute("stroke-dashoffset", "" + N(n.properties.strokeDashOffset))), C(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, (e) => {
		t.countOnly || o.appendChild(F("line", {
			x1: N(e.x1),
			y1: N(e.y1),
			x2: N(e.x2),
			y2: N(e.y2),
			...f(e.datum)
		}));
	});
}
//#endregion
//#region ../core/src/rendering/svg/renderers/text.js
function be(e, t) {
	let n = e, r = n.properties, i = t.textMetrics ?? n.unitView.context.textMetrics, a = i.requestFont(r), o = D(i, r), s = S(n), { coords: c, data: u, group: d, viewOpacity: f, visibleBounds: p, anchorCullBounds: m } = t, h = n.encoders, g = I(d, {
		fill: {
			encoder: h.color,
			transform: l
		},
		"fill-opacity": {
			encoder: h.opacity,
			transform: (e) => +e * f
		},
		"font-size": {
			encoder: h.size,
			transform: (e) => N(+e)
		}
	});
	d.setAttribute("font-family", b(r.font)), d.setAttribute("font-style", r.fontStyle ?? "normal"), d.setAttribute("font-weight", "" + ie(r.fontWeight ?? "normal")), d.setAttribute("text-anchor", xe[s.align]);
	let _ = {
		top: {
			width: k(n, r.viewportEdgeFadeWidthTop),
			distance: k(n, r.viewportEdgeFadeDistanceTop)
		},
		right: {
			width: k(n, r.viewportEdgeFadeWidthRight),
			distance: k(n, r.viewportEdgeFadeDistanceRight)
		},
		bottom: {
			width: k(n, r.viewportEdgeFadeWidthBottom),
			distance: k(n, r.viewportEdgeFadeDistanceBottom)
		},
		left: {
			width: k(n, r.viewportEdgeFadeWidthLeft),
			distance: k(n, r.viewportEdgeFadeDistanceLeft)
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
			let n = [`translate(${N(e.x)} ${N(e.y)})`];
			e.angle && n.push(`rotate(${N(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${N(e.dx)} ${N(e.dy)})`), n.push(`scale(${N(e.logoTransform.scaleX)} ${N(e.logoTransform.scaleY)})`), n.push(`translate(${N(-e.logoTransform.originX)} ${N(-e.logoTransform.originY)})`);
			let r = F("text", {
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
		let n = [`translate(${N(e.x)} ${N(e.y)})`];
		e.angle && n.push(`rotate(${N(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${N(e.dx)} ${N(e.dy)})`), e.scale != 1 && n.push(`scale(${N(e.scale)})`);
		let r = F("text", {
			x: 0,
			y: 0,
			dy: N(ne(s.baseline, e.size)),
			...g(e.datum),
			...e.fadeOpacity == 1 ? {} : { opacity: M(e.fadeOpacity) },
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
var xe = {
	left: "start",
	center: "middle",
	right: "end"
}, G = 64;
function Se(t, n) {
	let r = we(t.unitView);
	if (!r) return;
	let i = t.unitView.getScaleResolution(r.channel)?.getScale();
	if (!i || !e(i.type)) return;
	let { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: d } = n;
	if (!o.length) return 0;
	let f = t.encoders, p = r.channel == "stroke" ? f.stroke : f.fill, m = Te(t.unitView.spec.encoding.x), h = Infinity, v = Infinity, y = -Infinity, b = -Infinity, x = o.map((e) => {
		let [t, n] = u(a, f, e), [r, i] = g(a, f, e);
		return h = Math.min(h, t, n), v = Math.min(v, r, i), y = Math.max(y, t, n), b = Math.max(b, r, i), {
			offset: Number(e.position),
			color: l(p(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!_(d, h, v, y, b)) return 0;
	if (n.countOnly) return o.length;
	let S = Ce(x), C = [
		{
			offset: 0,
			color: S[0].color
		},
		...S,
		{
			offset: 1,
			color: S.at(-1).color
		}
	], w = n.getLegendGradientUrl({
		x1: h,
		y1: m ? v : b,
		x2: m ? y : h,
		y2: v,
		stops: C
	}), T = N(h), E = N(v), D = N(y), O = N(b), k = Number(f.fillOpacity(o[0])) * c;
	return s.appendChild(F("rect", {
		x: T,
		y: E,
		width: N(D - T),
		height: N(O - E),
		fill: w,
		"fill-opacity": M(k),
		stroke: "none"
	})), o.length;
}
function Ce(e) {
	return e.length <= G ? e : Array.from({ length: G }, (t, n) => e[Math.round(n * (e.length - 1) / 63)]);
}
function we(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function Te(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/index.js
var Ee = /* @__PURE__ */ new Map([
	["arrow", de],
	["link", me],
	["point", z],
	["rect", ve],
	["rule", W],
	["text", be],
	["tick", W]
]);
function De(e, t) {
	if (e.getType() == "rect") {
		let n = Se(e, t);
		if (n !== void 0) return n;
	}
	let n = Ee.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/rendering/svg/rectHatchPattern.js
function Oe(e, t) {
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
	].includes(t.type), o = r ? n * 7 : n * (i ? 6 : 4), s = a ? n * 2 : n, c = o, l = r ? o * 2 : o, u = F("pattern", {
		id: e,
		x: 0,
		y: 0,
		width: N(c),
		height: N(l),
		patternUnits: "userSpaceOnUse"
	});
	u.appendChild(F("rect", {
		width: N(c),
		height: N(l),
		fill: t.fill,
		"fill-opacity": M(t.fillOpacity)
	}));
	let d = F("g", {
		fill: "none",
		stroke: t.stroke,
		"stroke-opacity": M(t.strokeOpacity),
		"stroke-width": N(s),
		"stroke-linecap": "square"
	});
	return ke(d, t.type, o, s), u.appendChild(d), u;
}
function ke(e, t, n, r) {
	let i = (t) => e.appendChild(F("path", { d: t })), a = (e) => N(e), o = (e) => {
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
			let r = n * (t == "dots" ? .07 : t == "rings" ? .2 : .35), i = (t, n) => e.appendChild(F("circle", {
				cx: N(t),
				cy: N(n),
				r: N(r)
			}));
			i(n / 2, 0), i(n / 2, n * 2), i(0, n), i(n, n);
			break;
		}
		default: throw Error(`Unknown rectangle hatch pattern: ${t}`);
	}
}
//#endregion
//#region ../core/src/rendering/svg/linkArcFadeMask.js
function Ae(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = F("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: N(l - i * c),
		y1: N(u - a * c),
		x2: N(l + i * c),
		y2: N(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of ue(s, c)) f.appendChild(F("stop", {
		offset: K(e, 3),
		"stop-color": "white",
		"stop-opacity": K(t, 3)
	}));
	let p = F("mask", {
		id: e,
		x: 0,
		y: 0,
		width: N(t),
		height: N(n),
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance"
	});
	return p.appendChild(F("rect", {
		width: N(t),
		height: N(n),
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
	#f = new f();
	#p = F("g");
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
		let n = N(t.width), r = N(t.height);
		this.#e = F("svg", {
			xmlns: P,
			width: n,
			height: r,
			viewBox: `0 0 ${n} ${r}`
		}), this.#t = F("defs"), this.#e.appendChild(this.#t), t.background != null && this.#e.appendChild(F("rect", {
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
			o = F("g", {
				id: je(e.name, this.#v++),
				"data-name": e.name,
				"data-view-path": r
			});
			let t = F("title");
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
		let a = n(i), o = r(a, e.properties.clip, this.currentCoords), s = m(this.width, this.height, o);
		if (!h(s)) return;
		let c = this.getVisibleInstanceCount(e);
		if (!this.#u && this.#h != null && c == 0) return;
		if (!this.#u && this.#h != null && c > this.#h) {
			this.#T(e, s);
			return;
		}
		let l = !this.#u && this.#m != null, u = l ? this.getClipPathUrl(o) : void 0, d = l ? this.#m.markGroups.get(e)?.get(u ?? "") : void 0;
		!this.#u && !d && this.#E();
		let f = this.#u ? this.#p : this.#O(e, u), g = O(this.currentCoords, a, e.properties.cullByVisibleRange), _ = e.getOrder?.(), v = !this.#u && _ && _.isActive();
		if (p(e, i, this.currentCoords, this.#f, (t, n) => {
			let r = (n, r = !1) => {
				let i = De(e, {
					coords: t,
					data: n,
					group: f,
					visibleBounds: s,
					anchorCullBounds: g,
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
			if (!v) {
				r(n);
				return;
			}
			let i = ae(n, 0, n.length, _.predicate, _.passes);
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
		let t = Me(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = F("g", {
			id: `rasterized-${n.join("-")}-${this.#w++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = F("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, Ne(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) Pe(n, t);
		e.image = i;
	}
	#O(e, t) {
		let n = this.#m;
		if (!n) return F("g", { "data-mark-type": e.getType() });
		let r = n.markGroups.get(e);
		r || (r = /* @__PURE__ */ new Map(), n.markGroups.set(e, r));
		let i = t ?? "", a = r.get(i);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted mark was rendered under multiple parents: ${e.unitView.getPathString()}`);
		} else a = F("g", { "data-mark-type": e.getType() }), t && a.setAttribute("clip-path", t), this.currentNode.appendChild(a), r.set(i, a), n.markGroupElements.add(a);
		return a;
	}
	getClipPathUrl(e) {
		if (!e) return;
		let t = e.rect.flatten(), n = [
			e.clipX ? t.x : 0,
			e.clipY ? t.y : 0,
			e.clipX ? t.width : this.width,
			e.clipY ? t.height : this.height
		].map(N), r = n.join(","), i = this.#r.get(r);
		if (!i) {
			i = "clip-" + this.#y++;
			let e = F("clipPath", {
				id: i,
				clipPathUnits: "userSpaceOnUse"
			});
			e.appendChild(F("rect", {
				x: n[0],
				y: n[1],
				width: n[2],
				height: n[3]
			})), this.#t.appendChild(e), this.#r.set(r, i);
		}
		return `url(#${i})`;
	}
	getShadowFilterUrl(e) {
		let t = N(Math.max(e.blur / 2.5, .25)), n = N(e.offsetX), r = N(e.offsetY), i = [
			t,
			n,
			r
		].join(","), a = this.#a.get(i);
		if (!a) {
			a = "shadow-" + this.#x++;
			let e = F("filter", {
				id: a,
				x: 0,
				y: 0,
				width: N(this.width),
				height: N(this.height),
				filterUnits: "userSpaceOnUse",
				primitiveUnits: "userSpaceOnUse",
				"color-interpolation-filters": "sRGB"
			});
			e.appendChild(F("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: t,
				result: "blur"
			})), e.appendChild(F("feOffset", {
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
			let n = F("clipPath", {
				id: t,
				clipPathUnits: "userSpaceOnUse"
			});
			n.appendChild(F("path", {
				d: `M 0 0 V ${N(this.height)} H ${N(this.width)} V 0 Z ${e}`,
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
			M(e.fillOpacity),
			e.stroke,
			M(e.strokeOpacity),
			M(e.strokeWidth)
		]), n = this.#s.get(t);
		return n || (n = "rect-hatch-" + this.#S++, this.#t.appendChild(Oe(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#C++, n = F("linearGradient", {
			id: t,
			gradientUnits: "userSpaceOnUse",
			x1: N(e.x1),
			y1: N(e.y1),
			x2: N(e.x2),
			y2: N(e.y2)
		});
		for (let t of e.stops) n.appendChild(F("stop", {
			offset: M(t.offset),
			"stop-color": t.color
		}));
		return this.#t.appendChild(n), `url(#${t})`;
	}
	getLinkArcFadeMaskUrl(e) {
		let t = x(e.p1, e.p4, e.distances);
		if (!t) return;
		let n = this.#c.get(t.key);
		if (!n) {
			n = "link-arc-fade-" + this.#b++;
			let { gradient: e, mask: r } = Ae(n, this.width, this.height, t);
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
			let e = N(this.width), t = N(this.height), a = F("mask", {
				id: i,
				x: 0,
				y: 0,
				width: e,
				height: t,
				maskUnits: "userSpaceOnUse",
				maskContentUnits: "userSpaceOnUse",
				"mask-type": "luminance"
			});
			a.appendChild(F("rect", {
				width: e,
				height: t,
				fill: "white"
			}));
			for (let [o, s] of n) {
				let n = i + "-" + o, c = Fe(n, o, s, r.coords);
				this.#t.appendChild(c), a.appendChild(F("rect", {
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
function je(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function J(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function Me(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function Ne(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function Pe(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function Fe(e, t, n, r) {
	let i = t == "top" ? r.y + n.distance : t == "right" ? r.x2 - n.distance : t == "bottom" ? r.y2 - n.distance : r.x + n.distance, a = t == "left" || t == "right", o = i + (t == "top" || t == "left" ? 1 : -1) * n.width, s = F("linearGradient", {
		id: e,
		gradientUnits: "userSpaceOnUse",
		x1: N(a ? i : 0),
		y1: N(a ? 0 : i),
		x2: N(a ? o : 0),
		y2: N(a ? 0 : o)
	});
	return s.appendChild(F("stop", {
		offset: 0,
		"stop-color": "black",
		"stop-opacity": 1
	})), s.appendChild(F("stop", {
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
async function Ie({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
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
async function Le(e) {
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
	let t = te(document);
	return await re(t, e), t;
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
export { Ie as analyzeSvgExport, X as createRasterizedSvg, Y as createSvg, Le as createSvgExport };
