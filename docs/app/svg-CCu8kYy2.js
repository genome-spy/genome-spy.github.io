import { Vt as e, ut as t, x as n, y as r } from "./paramUtils-BYI4rwyL.js";
import { pt as i, x as a } from "./viewSelectors-DGCspRN3.js";
import { a as o, o as s } from "./clipOptions-gqdb3fvW.js";
import { n as c, t as l } from "./viewRenderingContext-HtpqwS_x.js";
import { C as u, E as d, S as f, T as p, _ as m, a as h, b as g, c as _, d as v, f as y, g as b, h as x, i as S, l as C, m as w, n as T, o as E, p as D, r as ee, s as te, t as ne, u as re, v as ie, w as O, x as k, y as ae } from "./nativeText-DMO8gLt7.js";
import { n as A, t as j } from "./svgNumber-DNxESJQB.js";
//#region ../core/src/rendering/svg/svgElement.js
var M = "http://www.w3.org/2000/svg";
function N(e, t) {
	let n = document.createElementNS(M, e);
	if (t) for (let [e, r] of Object.entries(t)) n.setAttribute(e, "" + r);
	return n;
}
//#endregion
//#region ../core/src/rendering/svg/svgAttributes.js
function P(e, t) {
	let n = Object.entries(t).filter(([t, n]) => n.encoder.constant ? (e.setAttribute(t, "" + F(n, {})), !1) : !0);
	return (e) => Object.fromEntries(n.map(([t, n]) => [t, F(n, e)]));
}
function F(e, t) {
	let n = e.encoder(t);
	return e.transform ? e.transform(n) : "" + n;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/arrow.js
function oe(e, t) {
	let n = e, { coords: r, data: i, group: a, viewOpacity: o, visibleBounds: s } = t, c = n.encoders, l = P(a, {
		fill: {
			encoder: c.fill,
			transform: k
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: c.stroke,
			transform: k
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => j(+e)
		}
	});
	a.setAttribute("stroke-linejoin", "miter");
	let u = x(n);
	return b(n, u, {
		coords: r,
		data: i,
		visibleBounds: s,
		viewOpacity: o,
		countOnly: t.countOnly
	}, (e) => {
		t.countOnly || (e.headShapeFallback && t.warn(`SVG export rendered unsupported arrow headShape "${u.headShape}" as a triangle.`), a.appendChild(N("path", {
			d: e.boundaryLoops.map(se).join(" "),
			...l(e.datum)
		})));
	});
}
function se(e) {
	return `M ${e.map(ce).join(" L ")} Z`;
}
function ce(e) {
	return `${j(e.x)} ${j(e.y)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/link.js
function le(e, t) {
	let n = e, r = n.properties, i = g(n, r.arcFadingDistance), a = D(n), { coords: o, data: s, group: c, viewOpacity: l, visibleBounds: u } = t, d = n.encoders, f = g(n, r.noFadingOnPointSelection) ? ue(n, d) : [], p = P(c, {
		stroke: {
			encoder: d.color,
			transform: k
		},
		"stroke-opacity": {
			encoder: d.opacity,
			transform: (e) => +e * l
		},
		"stroke-width": {
			encoder: d.size,
			transform: (e) => j(+e)
		}
	});
	return c.setAttribute("fill", "none"), c.setAttribute("stroke-linecap", "butt"), w(n, a, {
		coords: o,
		data: s,
		visibleBounds: u
	}, ({ datum: e, points: n }) => {
		let [r, o, s, l] = n;
		if (t.countOnly) return;
		let u = p(e);
		if (a.shape == "arc" && i !== !1 && i[0] > 0 && i[1] > 0 && !de(e, f)) {
			let e = t.getLinkArcFadeMaskUrl({
				p1: r,
				p4: l,
				distances: i
			});
			e && (u.mask = e);
		}
		c.appendChild(N("path", {
			d: `M ${I(r)} C ${I(o)} ${I(s)} ${I(l)}`,
			...u
		}));
	});
}
function ue(e, t) {
	let i = new Set(Object.values(t).flatMap((e) => e.branches).map((e) => e.predicate?.param).filter((e) => e));
	return Array.from(i).map((t) => e.unitView.paramRuntime.findValue(t)).filter((e) => e && (n(e) || r(e)));
}
function de(e, r) {
	let i = e[t];
	return r.some((e) => n(e) ? e.uniqueId != null && e.uniqueId == i : e.data.has(i));
}
function I(e) {
	return e.map(j).join(" ");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/point.js
function L(e, t) {
	let n = e;
	g(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = v(n), { inwardStroke: i } = r, { group: a, viewOpacity: o } = t, s = n.encoders, c = P(a, {
		fill: {
			encoder: s.fill,
			transform: k
		},
		"fill-opacity": {
			encoder: s.fillOpacity,
			transform: (e) => +e * o
		},
		stroke: {
			encoder: s.stroke,
			transform: k
		},
		"stroke-opacity": {
			encoder: s.strokeOpacity,
			transform: (e) => +e * o
		},
		"stroke-width": {
			encoder: s.strokeWidth,
			transform: (e) => j(+e)
		}
	}), l = z();
	return y(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, shape: r, x: u, y: d, geometryRadius: f, angle: p, strokeWidth: m, lineShape: h } = e, g = {
			...c(n),
			...i && !h ? { "stroke-width": j(m) } : {},
			...h ? B(s, n, o) : {}
		}, _ = R(r, u, d, f, g, l);
		_ ? (p && _.setAttribute("transform", `rotate(${j(p)} ${j(u)} ${j(d)})`), a.appendChild(_)) : (t.warn(`SVG export rendered unsupported point shape "${r}" as a circle.`), a.appendChild(N("circle", {
			cx: j(u),
			cy: j(d),
			r: j(f),
			...g
		})));
	});
}
function R(e, t, n, r, i, a) {
	let o = j(t), s = j(n), c = j(r);
	if (e == "circle") return N("circle", {
		cx: o,
		cy: s,
		r: c,
		...i
	});
	if (e == "square") return N("rect", {
		x: j(t - r),
		y: j(n - r),
		width: j(r * 2),
		height: j(r * 2),
		...i
	});
	let l = a.build(e, t, n, r);
	return l ? N("path", {
		d: l,
		...i
	}) : void 0;
}
function z() {
	let e = "", t = (e, t) => `${j(e)} ${j(t)}`, n = {
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
		return e = "", re(t, r, i, a, n) ? e : void 0;
	} };
}
function B(e, t, n) {
	let r = e.stroke(t), i = m(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: k(a ? e.fill(t) : r),
		"stroke-opacity": (a ? m(e.fillOpacity, t) : i) * n,
		"stroke-width": j(m(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rect.js
function V(e, t) {
	let n = e, r = _(n), { shadow: i, hatch: a } = r, { group: o, viewOpacity: s } = t, c = n.encoders, l = P(o, {
		fill: {
			encoder: c.fill,
			transform: k
		},
		"fill-opacity": {
			encoder: c.fillOpacity,
			transform: (e) => +e * s
		},
		stroke: {
			encoder: c.stroke,
			transform: k
		},
		"stroke-opacity": {
			encoder: c.strokeOpacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: c.strokeWidth,
			transform: (e) => j(+e)
		}
	}), u = i.opacity > 0 ? {
		fill: i.color,
		"fill-opacity": 1,
		stroke: i.color,
		"stroke-opacity": 1,
		opacity: A(i.opacity * s),
		filter: t.getShadowFilterUrl(i)
	} : null;
	return C(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, x: r, y: i, width: d, height: f, radii: p, opacityFactor: h, strokeWidth: g, fill: _, fillOpacity: v } = e, y = {
			...l(n),
			...h == 1 ? {} : { opacity: A(h) }
		};
		if (a != "none" && g > 0 && (y.fill = t.getRectHatchPatternUrl({
			type: a,
			fill: k(c.fill(n)),
			fillOpacity: m(c.fillOpacity, n) * s,
			stroke: k(c.stroke(n)),
			strokeOpacity: m(c.strokeOpacity, n) * s,
			strokeWidth: g
		}), y["fill-opacity"] = 1), u) {
			let e = H(r, i, d, f, p, {
				...u,
				"stroke-width": j(g)
			});
			if (a == "none" && _ != "none" && v == 1 && h == 1) o.appendChild(e);
			else {
				let n = g / 2, a = Object.fromEntries(Object.entries(p).map(([e, t]) => [e, t + n])), s = U(r - n, i - n, d + n * 2, f + n * 2, a), c = N("g", { "clip-path": t.getShadowClipPathUrl(s) });
				c.appendChild(e), o.appendChild(c);
			}
		}
		o.appendChild(H(r, i, d, f, p, y));
	});
}
function H(e, t, n, r, i, a) {
	if (fe(i)) {
		let o = i.topLeft, s = j(e), c = j(t), l = j(e + n), u = j(t + r);
		return N("rect", {
			x: s,
			y: c,
			width: j(l - s),
			height: j(u - c),
			...o ? {
				rx: j(o),
				ry: j(o)
			} : {},
			...a
		});
	} else return N("path", {
		d: U(e, t, n, r, i),
		...a
	});
}
function fe(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function U(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${G(e + s, t)}`,
		`H ${j(a - c)}`,
		W(c, a, t + c, a, t),
		`V ${j(o - l)}`,
		W(l, a - l, o, a, o),
		`H ${j(e + u)}`,
		W(u, e, o - u, e, o),
		`V ${j(t + s)}`,
		W(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function W(e, t, n, r, i) {
	return e ? `A ${j(e)} ${j(e)} 0 0 1 ${G(t, n)}` : `L ${G(r, i)}`;
}
function G(e, t) {
	return `${j(e)} ${j(t)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rule.js
function K(e, t) {
	let n = e, r = E(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = n.properties.strokeDash, d = P(o, {
		stroke: {
			encoder: l.color,
			transform: k
		},
		"stroke-opacity": {
			encoder: l.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => j(+e)
		}
	});
	return o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), u && (o.setAttribute("stroke-dasharray", u.map(j).join(" ")), o.setAttribute("stroke-dashoffset", "" + j(n.properties.strokeDashOffset))), te(n, r, {
		coords: i,
		data: a,
		visibleBounds: c
	}, (e) => {
		t.countOnly || o.appendChild(N("line", {
			x1: j(e.x1),
			y1: j(e.y1),
			x2: j(e.x2),
			y2: j(e.y2),
			...d(e.datum)
		}));
	});
}
//#endregion
//#region ../core/src/rendering/svg/renderers/text.js
function pe(e, t) {
	let n = e, r = n.properties, i = S(n), { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: l, anchorCullBounds: u } = t, d = n.encoders, f = P(s, {
		fill: {
			encoder: d.color,
			transform: k
		},
		"fill-opacity": {
			encoder: d.opacity,
			transform: (e) => +e * c
		},
		"font-size": {
			encoder: d.size,
			transform: (e) => j(+e)
		}
	});
	s.setAttribute("font-family", ne(r.font)), s.setAttribute("font-style", r.fontStyle ?? "normal"), s.setAttribute("font-weight", "" + ee(r.fontWeight ?? "normal")), s.setAttribute("text-anchor", me[i.align]);
	let p = {
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
	}, m = h(n, i, {
		coords: a,
		data: o,
		visibleBounds: l,
		anchorCullBounds: u
	}, (e) => {
		if (t.countOnly) return;
		if (e.logoScale) {
			e.multiCharacterLogo && t.warn("SVG export stretches multi-character logo text as a single glyph cell.");
			let n = [`translate(${j(e.x)} ${j(e.y)})`];
			e.angle && n.push(`rotate(${j(e.angle)})`), (e.dx || e.dy) && n.push(`translate(${j(e.dx)} ${j(e.dy)})`), n.push(`scale(${j(e.logoScale.width)} ${j(e.logoScale.heightScale)})`);
			let r = N("text", {
				x: 0,
				y: 0,
				dy: T("middle", 1),
				"text-anchor": "middle",
				lengthAdjust: "spacingAndGlyphs",
				textLength: 1,
				transform: n.join(" "),
				...f(e.datum),
				"font-size": 1
			});
			r.textContent = e.text, s.appendChild(r);
			return;
		}
		let n = j(e.x), r = j(e.y), a = N("text", {
			x: n,
			y: r,
			dx: j(e.dx),
			dy: j(e.dy + T(i.baseline, e.size)),
			lengthAdjust: "spacingAndGlyphs",
			textLength: j(e.width),
			...f(e.datum),
			...e.scale == 1 ? {} : { "font-size": j(e.size) },
			...e.fadeOpacity == 1 ? {} : { opacity: A(e.fadeOpacity) }
		});
		a.textContent = e.text, e.angle && a.setAttribute("transform", `rotate(${j(e.angle)} ${n} ${r})`), s.appendChild(a);
	});
	if (!t.countOnly && s.childElementCount > 0) {
		let e = t.getViewportEdgeFadeMaskUrl(p);
		e && s.setAttribute("mask", e);
	}
	return m;
}
var me = {
	left: "start",
	center: "middle",
	right: "end"
}, q = 64;
function he(e, t) {
	let n = _e(e.unitView);
	if (!n) return;
	let r = e.unitView.getScaleResolution(n.channel)?.getScale();
	if (!r || !i(r.type)) return;
	let { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: l } = t;
	if (!o.length) return 0;
	let u = e.encoders, d = n.channel == "stroke" ? u.stroke : u.fill, f = ve(e.unitView.spec.encoding.x), m = Infinity, h = Infinity, g = -Infinity, _ = -Infinity, v = o.map((e) => {
		let [t, n] = ie(a, u, e), [r, i] = ae(a, u, e);
		return m = Math.min(m, t, n), h = Math.min(h, r, i), g = Math.max(g, t, n), _ = Math.max(_, r, i), {
			offset: Number(e.position),
			color: k(d(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!p(l, m, h, g, _)) return 0;
	if (t.countOnly) return o.length;
	let y = ge(v), b = [
		{
			offset: 0,
			color: y[0].color
		},
		...y,
		{
			offset: 1,
			color: y.at(-1).color
		}
	], x = t.getLegendGradientUrl({
		x1: m,
		y1: f ? h : _,
		x2: f ? g : m,
		y2: h,
		stops: b
	}), S = j(m), C = j(h), w = j(g), T = j(_), E = Number(u.fillOpacity(o[0])) * c;
	return s.appendChild(N("rect", {
		x: S,
		y: C,
		width: j(w - S),
		height: j(T - C),
		fill: x,
		"fill-opacity": A(E),
		stroke: "none"
	})), o.length;
}
function ge(e) {
	return e.length <= q ? e : Array.from({ length: q }, (t, n) => e[Math.round(n * (e.length - 1) / (q - 1))]);
}
function _e(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function ve(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/index.js
var ye = /* @__PURE__ */ new Map([
	["arrow", oe],
	["link", le],
	["point", L],
	["rect", V],
	["rule", K],
	["text", pe],
	["tick", K]
]);
function be(e, t) {
	if (e.getType() == "rect") {
		let n = he(e, t);
		if (n !== void 0) return n;
	}
	let n = ye.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/rendering/svg/rectHatchPattern.js
function xe(e, t) {
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
	].includes(t.type), o = r ? n * 7 : n * (i ? 6 : 4), s = a ? n * 2 : n, c = o, l = r ? o * 2 : o, u = N("pattern", {
		id: e,
		x: 0,
		y: 0,
		width: j(c),
		height: j(l),
		patternUnits: "userSpaceOnUse"
	});
	u.appendChild(N("rect", {
		width: j(c),
		height: j(l),
		fill: t.fill,
		"fill-opacity": A(t.fillOpacity)
	}));
	let d = N("g", {
		fill: "none",
		stroke: t.stroke,
		"stroke-opacity": A(t.strokeOpacity),
		"stroke-width": j(s),
		"stroke-linecap": "square"
	});
	return Se(d, t.type, o, s), u.appendChild(d), u;
}
function Se(e, t, n, r) {
	let i = (t) => e.appendChild(N("path", { d: t })), a = (e) => j(e), o = (e) => {
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
			let r = n * (t == "dots" ? .07 : t == "rings" ? .2 : .35), i = (t, n) => e.appendChild(N("circle", {
				cx: j(t),
				cy: j(n),
				r: j(r)
			}));
			i(n / 2, 0), i(n / 2, n * 2), i(0, n), i(n, n);
			break;
		}
		default: throw Error(`Unknown rectangle hatch pattern: ${t}`);
	}
}
//#endregion
//#region ../core/src/rendering/svg/linkArcFadeMask.js
var J = 4;
function Ce(e, t, n) {
	let r = t[0] - e[0], i = t[1] - e[1], a = Math.hypot(r, i);
	if (a == 0) return;
	let o = -i / a, s = r / a;
	(o < 0 || o == 0 && s < 0) && (o = -o, s = -s);
	let c = o * e[0] + s * e[1], [l, u] = n, d = JSON.stringify([
		Y(o, 6),
		Y(s, 6),
		Y(c, 1),
		Y(l, 1),
		Y(u, 1)
	]);
	return {
		normalX: o,
		normalY: s,
		offset: c,
		start: l,
		end: u,
		key: d
	};
}
function we(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = N("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: j(l - i * c),
		y1: j(u - a * c),
		x2: j(l + i * c),
		y2: j(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of Te(s, c)) f.appendChild(N("stop", {
		offset: Y(e, 3),
		"stop-color": "white",
		"stop-opacity": Y(t, 3)
	}));
	let p = N("mask", {
		id: e,
		x: 0,
		y: 0,
		width: j(t),
		height: j(n),
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance"
	});
	return p.appendChild(N("rect", {
		width: j(t),
		height: j(n),
		fill: `url(#${d})`
	})), {
		gradient: f,
		mask: p
	};
}
function Te(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= J; i++) {
			let a = i / J, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - Ee(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function Ee(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function Y(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/svg/svgViewRenderingContext.js
var X = class extends l {
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
	#f = N("g");
	#p;
	#m;
	#h = [];
	#g;
	#_ = 0;
	#v = 0;
	#y = 0;
	#b = 0;
	#x = 0;
	#S = 0;
	#C = 0;
	constructor(e, t) {
		super(e), this.width = t.width, this.height = t.height, this.#m = t.maxVectorInstances;
		let n = j(t.width), r = j(t.height);
		this.#e = N("svg", {
			xmlns: M,
			width: n,
			height: r,
			viewBox: `0 0 ${n} ${r}`
		}), this.#t = N("defs"), this.#e.appendChild(this.#t), t.background != null && this.#e.appendChild(N("rect", {
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
		this.#T();
		for (let e of this.#h) e.image || this.#E(e);
		return this.#h;
	}
	beginSampleFacetBatch() {
		if (this.#p) throw Error("Nested sample facet batches are not supported.");
		this.#p = {
			viewGroups: /* @__PURE__ */ new WeakMap(),
			markGroups: /* @__PURE__ */ new WeakMap(),
			markGroupElements: /* @__PURE__ */ new Set(),
			rasterRuns: /* @__PURE__ */ new WeakMap()
		};
	}
	endSampleFacetBatch() {
		let e = this.#p;
		if (!e) throw Error("No sample facet batch is active.");
		for (let t of e.markGroupElements) t.childElementCount || t.remove();
		this.#p = void 0;
	}
	pushView(t, n) {
		let r = t.getPathString();
		if (e(this.#n)?.exportExcluded || a(t) && t.name.startsWith("scrollbar-")) {
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
		let i = this.#p, o = i?.viewGroups.get(t);
		if (o) {
			if (o.parentNode !== this.currentNode) throw Error(`Sample-faceted view was rendered under multiple parents: ${r}`);
		} else {
			o = N("g", {
				id: De(t.name, this.#_++),
				"data-name": t.name,
				"data-view-path": r
			});
			let e = N("title");
			e.textContent = r, o.appendChild(e), this.currentNode.appendChild(o), i?.viewGroups.set(t, o);
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
	renderMark(t, n) {
		if (e(this.#n)?.exportExcluded || t.unitView.getEffectiveOpacity() <= 0) return;
		let r = o(n), i = s(r, t.properties.clip, this.currentCoords), a = u(this.width, this.height, i);
		if (!O(a)) return;
		let c = this.getVisibleInstanceCount(t);
		if (!this.#u && this.#m != null && c == 0) return;
		if (!this.#u && this.#m != null && c > this.#m) {
			this.#w(t, a);
			return;
		}
		let l = !this.#u && this.#p != null, p = l ? this.getClipPathUrl(i) : void 0, m = l ? this.#p.markGroups.get(t)?.get(p ?? "") : void 0;
		!this.#u && !m && this.#T();
		let h = this.#u ? this.#f : this.#D(t, p), g = f(this.currentCoords, r, t.properties.cullByVisibleRange);
		if (d(t, n, this.currentCoords, (e, n) => {
			let r = be(t, {
				coords: e,
				data: n,
				group: h,
				visibleBounds: a,
				anchorCullBounds: g,
				viewOpacity: t.unitView.getEffectiveOpacity(),
				countOnly: this.#u,
				getViewportEdgeFadeMaskUrl: (e) => this.#u ? void 0 : this.getViewportEdgeFadeMaskUrl(e),
				getShadowFilterUrl: (e) => this.#u ? "" : this.getShadowFilterUrl(e),
				getShadowClipPathUrl: (e) => this.#u ? "" : this.getShadowClipPathUrl(e),
				getRectHatchPatternUrl: (e) => this.#u ? "" : this.getRectHatchPatternUrl(e),
				getLinkArcFadeMaskUrl: (e) => this.#u ? void 0 : this.getLinkArcFadeMaskUrl(e),
				getLegendGradientUrl: (e) => this.#u ? "" : this.getLegendGradientUrl(e),
				warn: (e) => {
					this.#u || this.#l.add(`${e} View: ${t.unitView.getPathString()}`);
				}
			});
			this.#u && this.#d.set(t, this.getVisibleInstanceCount(t) + r);
		}, (e) => this.#l.add(`SVG export could not resolve sample facet index ${e}. View: ${t.unitView.getPathString()}`)), !this.#u && !l && h.childElementCount > 0) {
			let e = this.getClipPathUrl(i);
			e && h.setAttribute("clip-path", e), this.currentNode.appendChild(h);
		}
	}
	#w(e, t) {
		let n = this.#p?.rasterRuns.get(e);
		if (n) {
			Z(n.bounds, t), n.viewNodes.add(this.currentNode);
			return;
		}
		let r = this.#g;
		if (r) Z(r.bounds, t);
		else {
			let e = document.createComment("raster-run");
			this.currentNode.appendChild(e), r = {
				marks: /* @__PURE__ */ new Set(),
				targets: [],
				viewNodes: /* @__PURE__ */ new Set(),
				anchor: e,
				bounds: { ...t },
				image: void 0
			}, this.#g = r;
		}
		r.marks.add(e), r.targets.push({
			mark: e,
			instanceCount: this.getVisibleInstanceCount(e)
		}), r.viewNodes.add(this.currentNode), this.#p?.rasterRuns.set(e, r);
	}
	#T() {
		let e = this.#g;
		e && (this.#h.push(e), this.#g = void 0);
	}
	#E(e) {
		let t = Oe(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = N("g", {
			id: `rasterized-${n.join("-")}-${this.#C++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = N("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, ke(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) Ae(n, t);
		e.image = i;
	}
	#D(e, t) {
		let n = this.#p;
		if (!n) return N("g", { "data-mark-type": e.getType() });
		let r = n.markGroups.get(e);
		r || (r = /* @__PURE__ */ new Map(), n.markGroups.set(e, r));
		let i = t ?? "", a = r.get(i);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted mark was rendered under multiple parents: ${e.unitView.getPathString()}`);
		} else a = N("g", { "data-mark-type": e.getType() }), t && a.setAttribute("clip-path", t), this.currentNode.appendChild(a), r.set(i, a), n.markGroupElements.add(a);
		return a;
	}
	getClipPathUrl(e) {
		if (!e) return;
		let t = e.rect.flatten(), n = [
			e.clipX ? t.x : 0,
			e.clipY ? t.y : 0,
			e.clipX ? t.width : this.width,
			e.clipY ? t.height : this.height
		].map(j), r = n.join(","), i = this.#r.get(r);
		if (!i) {
			i = "clip-" + this.#v++;
			let e = N("clipPath", {
				id: i,
				clipPathUnits: "userSpaceOnUse"
			});
			e.appendChild(N("rect", {
				x: n[0],
				y: n[1],
				width: n[2],
				height: n[3]
			})), this.#t.appendChild(e), this.#r.set(r, i);
		}
		return `url(#${i})`;
	}
	getShadowFilterUrl(e) {
		let t = j(Math.max(e.blur / 2.5, .25)), n = j(e.offsetX), r = j(e.offsetY), i = [
			t,
			n,
			r
		].join(","), a = this.#a.get(i);
		if (!a) {
			a = "shadow-" + this.#b++;
			let e = N("filter", {
				id: a,
				x: 0,
				y: 0,
				width: j(this.width),
				height: j(this.height),
				filterUnits: "userSpaceOnUse",
				primitiveUnits: "userSpaceOnUse",
				"color-interpolation-filters": "sRGB"
			});
			e.appendChild(N("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: t,
				result: "blur"
			})), e.appendChild(N("feOffset", {
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
			t = "shadow-clip-" + this.#v++;
			let n = N("clipPath", {
				id: t,
				clipPathUnits: "userSpaceOnUse"
			});
			n.appendChild(N("path", {
				d: `M 0 0 V ${j(this.height)} H ${j(this.width)} V 0 Z ${e}`,
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
			A(e.fillOpacity),
			e.stroke,
			A(e.strokeOpacity),
			A(e.strokeWidth)
		]), n = this.#s.get(t);
		return n || (n = "rect-hatch-" + this.#x++, this.#t.appendChild(xe(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#S++, n = N("linearGradient", {
			id: t,
			gradientUnits: "userSpaceOnUse",
			x1: j(e.x1),
			y1: j(e.y1),
			x2: j(e.x2),
			y2: j(e.y2)
		});
		for (let t of e.stops) n.appendChild(N("stop", {
			offset: A(t.offset),
			"stop-color": t.color
		}));
		return this.#t.appendChild(n), `url(#${t})`;
	}
	getLinkArcFadeMaskUrl(e) {
		let t = Ce(e.p1, e.p4, e.distances);
		if (!t) return;
		let n = this.#c.get(t.key);
		if (!n) {
			n = "link-arc-fade-" + this.#y++;
			let { gradient: e, mask: r } = we(n, this.width, this.height, t);
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
			i = "edge-fade-" + this.#y++;
			let e = j(this.width), t = j(this.height), a = N("mask", {
				id: i,
				x: 0,
				y: 0,
				width: e,
				height: t,
				maskUnits: "userSpaceOnUse",
				maskContentUnits: "userSpaceOnUse",
				"mask-type": "luminance"
			});
			a.appendChild(N("rect", {
				width: e,
				height: t,
				fill: "white"
			}));
			for (let [o, s] of n) {
				let n = i + "-" + o, c = je(n, o, s, r.coords);
				this.#t.appendChild(c), a.appendChild(N("rect", {
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
function De(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function Z(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function Oe(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function ke(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function Ae(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function je(e, t, n, r) {
	let i = t == "top" ? r.y + n.distance : t == "right" ? r.x2 - n.distance : t == "bottom" ? r.y2 - n.distance : r.x + n.distance, a = t == "left" || t == "right", o = i + (t == "top" || t == "left" ? 1 : -1) * n.width, s = N("linearGradient", {
		id: e,
		gradientUnits: "userSpaceOnUse",
		x1: j(a ? i : 0),
		y1: j(a ? 0 : i),
		x2: j(a ? o : 0),
		y2: j(a ? 0 : o)
	});
	return s.appendChild(N("stop", {
		offset: 0,
		"stop-color": "black",
		"stop-opacity": 1
	})), s.appendChild(N("stop", {
		offset: 1,
		"stop-color": "black",
		"stop-opacity": 0
	})), s;
}
//#endregion
//#region ../core/src/rendering/svg/index.js
function Q({ viewRoot: e, logicalWidth: t, logicalHeight: n, background: r = "white" }) {
	let i = new X({ picking: !1 }, {
		width: t,
		height: n,
		background: r
	});
	return e.render(i, c.create(0, 0, t, n), { firstFacet: !0 }), {
		svg: i.getSvg(),
		warnings: i.getWarnings()
	};
}
function Me({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
	let r = new X({ picking: !1 }, {
		width: t,
		height: n,
		background: null
	});
	return r.beginInstanceCounting(), e.render(r, c.create(0, 0, t, n), { firstFacet: !0 }), r.endInstanceCounting(), { layers: Array.from(r.getVisibleInstanceCounts(), ([e, t]) => ({
		viewName: e.unitView.name,
		viewTitle: e.unitView.getTitleText(),
		viewPath: e.unitView.getPathString(),
		markType: e.getType(),
		instanceCount: t
	})).filter((e) => e.instanceCount > 0) };
}
async function Ne(e) {
	let t = e.rasterization;
	if (!t) return {
		...Q(e),
		rasterized: []
	};
	if ($(t), !e.webGLHelper) {
		let t = Q(e);
		return {
			...t,
			warnings: [...t.warnings, "SVG rasterization was requested but no WebGL context is available; exported all marks as vectors."],
			rasterized: []
		};
	}
	return Pe({
		...e,
		webGLHelper: e.webGLHelper,
		maxVectorInstances: t.maxVectorInstances,
		pixelRatio: t.pixelRatio
	});
}
async function Pe({ viewRoot: e, webGLHelper: t, logicalWidth: n, logicalHeight: r, background: i = "white", maxVectorInstances: a, pixelRatio: o = 2 }) {
	$({
		maxVectorInstances: a,
		pixelRatio: o
	});
	let s = new X({ picking: !1 }, {
		width: n,
		height: r,
		background: i,
		maxVectorInstances: a
	}), l = c.create(0, 0, n, r);
	s.beginInstanceCounting(), e.render(s, l, { firstFacet: !0 }), s.endInstanceCounting(), e.render(s, l, { firstFacet: !0 });
	let u = s.getRasterRuns();
	if (u.length) {
		let { rasterizeSvgRuns: i } = await import("./webgl-Dpz8a3TI.js");
		i({
			runs: u,
			viewRoot: e,
			webGLHelper: t,
			logicalWidth: n,
			logicalHeight: r,
			pixelRatio: o
		});
	}
	return {
		svg: s.getSvg(),
		warnings: s.getWarnings(),
		rasterized: u.map((e) => ({
			targets: e.targets.map((e) => ({
				markType: e.mark.getType(),
				instanceCount: e.instanceCount
			})),
			reason: "instance-threshold",
			maxVectorInstances: a,
			pixelRatio: o
		}))
	};
}
function $(e) {
	if (!Number.isInteger(e.maxVectorInstances) || e.maxVectorInstances < 0) throw RangeError("maxVectorInstances must be a non-negative integer.");
	if (e.pixelRatio != null && (!Number.isFinite(e.pixelRatio) || e.pixelRatio <= 0)) throw RangeError("SVG raster pixelRatio must be positive.");
}
//#endregion
export { Me as analyzeSvgExport, Ne as createSvgExport };
