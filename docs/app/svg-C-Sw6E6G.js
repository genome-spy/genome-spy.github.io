import { E as e, Jt as t, O as n, _t as r, o as i, s as a } from "./clipOptions-taFzEljc.js";
import { v as o } from "./vega-scale-D46-iCaL.js";
import { x as s } from "./viewSelectors-D_imtq5Z.js";
import { t as c } from "./rasterization-CFogVB3B.js";
import { t as l } from "./rectangle-DKnrAmKs.js";
import { n as u, t as d } from "./layoutResult-D50MSHXR.js";
import { C as f, D as p, E as m, O as h, S as g, T as _, _ as v, a as y, b as ee, c as b, d as x, f as S, h as C, i as w, k as T, l as E, m as D, n as O, o as te, p as ne, r as re, s as ie, t as ae, u as oe, w as se, x as ce, y as k } from "./nativeText-vT3AWE14.js";
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
function le(e, t) {
	let n = e, { coords: r, data: i, group: a, viewOpacity: o, visibleBounds: s } = t, c = n.encoders, l = P(a, {
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
			transform: (e) => j(+e)
		}
	});
	a.setAttribute("stroke-linejoin", "miter");
	let u = C(n);
	return v(n, u, {
		coords: r,
		data: i,
		visibleBounds: s,
		viewOpacity: o,
		countOnly: t.countOnly
	}, (e) => {
		t.countOnly || (e.headShapeFallback && t.warn(`SVG export rendered unsupported arrow headShape "${u.headShape}" as a triangle.`), a.appendChild(N("path", {
			d: e.boundaryLoops.map(ue).join(" "),
			...l(e.datum)
		})));
	});
}
function ue(e) {
	return `M ${e.map(de).join(" L ")} Z`;
}
function de(e) {
	return `${j(e.x)} ${j(e.y)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/link.js
function fe(e, t) {
	let n = e, r = n.properties, i = g(n, r.arcFadingDistance), a = ne(n), { coords: o, data: s, group: c, viewOpacity: l, visibleBounds: u } = t, d = n.encoders, p = g(n, r.noFadingOnPointSelection) ? pe(n, d) : [], m = P(c, {
		stroke: {
			encoder: d.color,
			transform: f
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
	return c.setAttribute("fill", "none"), c.setAttribute("stroke-linecap", "butt"), D(n, a, {
		coords: o,
		data: s,
		visibleBounds: u
	}, ({ datum: e, points: n }) => {
		let [r, o, s, l] = n;
		if (t.countOnly) return;
		let u = m(e);
		if (a.shape == "arc" && i !== !1 && i[0] > 0 && i[1] > 0 && !me(e, p)) {
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
function pe(t, r) {
	let i = new Set(Object.values(r).flatMap((e) => e.branches).map((e) => e.predicate?.param).filter((e) => e));
	return Array.from(i).map((e) => t.unitView.paramRuntime.findValue(e)).filter((t) => t && (n(t) || e(t)));
}
function me(e, t) {
	let i = e[r];
	return t.some((e) => n(e) ? e.uniqueId != null && e.uniqueId == i : e.data.has(i));
}
function I(e) {
	return e.map(j).join(" ");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/point.js
function he(e, t) {
	let n = e;
	g(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = x(n), { inwardStroke: i } = r, { group: a, viewOpacity: o } = t, s = n.encoders, c = P(a, {
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
			transform: (e) => j(+e)
		}
	}), l = R();
	return S(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, shape: r, x: u, y: d, geometryRadius: f, angle: p, strokeWidth: m, lineShape: h } = e, g = {
			...c(n),
			...i && !h ? { "stroke-width": j(m) } : {},
			...h ? ge(s, n, o) : {}
		}, _ = L(r, u, d, f, g, l);
		_ ? (p && _.setAttribute("transform", `rotate(${j(p)} ${j(u)} ${j(d)})`), a.appendChild(_)) : (t.warn(`SVG export rendered unsupported point shape "${r}" as a circle.`), a.appendChild(N("circle", {
			cx: j(u),
			cy: j(d),
			r: j(f),
			...g
		})));
	});
}
function L(e, t, n, r, i, a) {
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
function R() {
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
		return e = "", oe(t, r, i, a, n) ? e : void 0;
	} };
}
function ge(e, t, n) {
	let r = e.stroke(t), i = k(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: f(a ? e.fill(t) : r),
		"stroke-opacity": (a ? k(e.fillOpacity, t) : i) * n,
		"stroke-width": j(k(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rect.js
function _e(e, t) {
	let n = e, r = b(n), { shadow: i, hatch: a } = r, { group: o, viewOpacity: s } = t, c = n.encoders, l = P(o, {
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
	return E(n, r, t, (e) => {
		if (t.countOnly) return;
		let { datum: n, x: r, y: i, width: d, height: p, radii: m, opacityFactor: h, strokeWidth: g, fill: _, fillOpacity: v } = e, y = {
			...l(n),
			...h == 1 ? {} : { opacity: A(h) }
		};
		if (a != "none" && g > 0 && (y.fill = t.getRectHatchPatternUrl({
			type: a,
			fill: f(c.fill(n)),
			fillOpacity: k(c.fillOpacity, n) * s,
			stroke: f(c.stroke(n)),
			strokeOpacity: k(c.strokeOpacity, n) * s,
			strokeWidth: g
		}), y["fill-opacity"] = 1), u) {
			let e = z(r, i, d, p, m, {
				...u,
				"stroke-width": j(g)
			});
			if (a == "none" && _ != "none" && v == 1 && h == 1) o.appendChild(e);
			else {
				let n = g / 2, a = Object.fromEntries(Object.entries(m).map(([e, t]) => [e, t + n])), s = B(r - n, i - n, d + n * 2, p + n * 2, a), c = N("g", { "clip-path": t.getShadowClipPathUrl(s) });
				c.appendChild(e), o.appendChild(c);
			}
		}
		o.appendChild(z(r, i, d, p, m, y));
	});
}
function z(e, t, n, r, i, a) {
	if (ve(i)) {
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
		d: B(e, t, n, r, i),
		...a
	});
}
function ve(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function B(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${H(e + s, t)}`,
		`H ${j(a - c)}`,
		V(c, a, t + c, a, t),
		`V ${j(o - l)}`,
		V(l, a - l, o, a, o),
		`H ${j(e + u)}`,
		V(u, e, o - u, e, o),
		`V ${j(t + s)}`,
		V(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function V(e, t, n, r, i) {
	return e ? `A ${j(e)} ${j(e)} 0 0 1 ${H(t, n)}` : `L ${H(r, i)}`;
}
function H(e, t) {
	return `${j(e)} ${j(t)}`;
}
//#endregion
//#region ../core/src/rendering/svg/renderers/rule.js
function U(e, t) {
	let n = e, r = te(n), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = n.properties.strokeDash, d = P(o, {
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
			transform: (e) => j(+e)
		}
	});
	return o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), u && (o.setAttribute("stroke-dasharray", u.map(j).join(" ")), o.setAttribute("stroke-dashoffset", "" + j(n.properties.strokeDashOffset))), ie(n, r, {
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
function ye(e, t) {
	let n = e, r = n.properties, i = w(n), { coords: a, data: o, group: s, viewOpacity: c, visibleBounds: l, anchorCullBounds: u } = t, d = n.encoders, p = P(s, {
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
			transform: (e) => j(+e)
		}
	});
	s.setAttribute("font-family", ae(r.font)), s.setAttribute("font-style", r.fontStyle ?? "normal"), s.setAttribute("font-weight", "" + re(r.fontWeight ?? "normal")), s.setAttribute("text-anchor", W[i.align]);
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
	}, h = y(n, i, {
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
				dy: O("middle", 1),
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
		let n = j(e.x), r = j(e.y), a = N("text", {
			x: n,
			y: r,
			dx: j(e.dx),
			dy: j(e.dy + O(i.baseline, e.size)),
			lengthAdjust: "spacingAndGlyphs",
			textLength: j(e.width),
			...p(e.datum),
			...e.scale == 1 ? {} : { "font-size": j(e.size) },
			...e.fadeOpacity == 1 ? {} : { opacity: A(e.fadeOpacity) }
		});
		a.textContent = e.text, e.angle && a.setAttribute("transform", `rotate(${j(e.angle)} ${n} ${r})`), s.appendChild(a);
	});
	if (!t.countOnly && s.childElementCount > 0) {
		let e = t.getViewportEdgeFadeMaskUrl(m);
		e && s.setAttribute("mask", e);
	}
	return h;
}
var W = {
	left: "start",
	center: "middle",
	right: "end"
}, G = 64;
function be(e, t) {
	let n = Se(e.unitView);
	if (!n) return;
	let r = e.unitView.getScaleResolution(n.channel)?.getScale();
	if (!r || !o(r.type)) return;
	let { coords: i, data: a, group: s, viewOpacity: c, visibleBounds: l } = t;
	if (!a.length) return 0;
	let u = e.encoders, d = n.channel == "stroke" ? u.stroke : u.fill, m = Ce(e.unitView.spec.encoding.x), h = Infinity, g = Infinity, _ = -Infinity, v = -Infinity, y = a.map((e) => {
		let [t, n] = ee(i, u, e), [r, a] = ce(i, u, e);
		return h = Math.min(h, t, n), g = Math.min(g, r, a), _ = Math.max(_, t, n), v = Math.max(v, r, a), {
			offset: Number(e.position),
			color: f(d(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!p(l, h, g, _, v)) return 0;
	if (t.countOnly) return a.length;
	let b = xe(y), x = [
		{
			offset: 0,
			color: b[0].color
		},
		...b,
		{
			offset: 1,
			color: b.at(-1).color
		}
	], S = t.getLegendGradientUrl({
		x1: h,
		y1: m ? g : v,
		x2: m ? _ : h,
		y2: g,
		stops: x
	}), C = j(h), w = j(g), T = j(_), E = j(v), D = Number(u.fillOpacity(a[0])) * c;
	return s.appendChild(N("rect", {
		x: C,
		y: w,
		width: j(T - C),
		height: j(E - w),
		fill: S,
		"fill-opacity": A(D),
		stroke: "none"
	})), a.length;
}
function xe(e) {
	return e.length <= G ? e : Array.from({ length: G }, (t, n) => e[Math.round(n * (e.length - 1) / (G - 1))]);
}
function Se(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function Ce(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/rendering/svg/renderers/index.js
var we = /* @__PURE__ */ new Map([
	["arrow", le],
	["link", fe],
	["point", he],
	["rect", _e],
	["rule", U],
	["text", ye],
	["tick", U]
]);
function Te(e, t) {
	if (e.getType() == "rect") {
		let n = be(e, t);
		if (n !== void 0) return n;
	}
	let n = we.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/rendering/svg/rectHatchPattern.js
function Ee(e, t) {
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
	return De(d, t.type, o, s), u.appendChild(d), u;
}
function De(e, t, n, r) {
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
var K = 4;
function Oe(e, t, n) {
	let r = t[0] - e[0], i = t[1] - e[1], a = Math.hypot(r, i);
	if (a == 0) return;
	let o = -i / a, s = r / a;
	(o < 0 || o == 0 && s < 0) && (o = -o, s = -s);
	let c = o * e[0] + s * e[1], [l, u] = n, d = JSON.stringify([
		q(o, 6),
		q(s, 6),
		q(c, 1),
		q(l, 1),
		q(u, 1)
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
function ke(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = N("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: j(l - i * c),
		y1: j(u - a * c),
		x2: j(l + i * c),
		y2: j(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of Ae(s, c)) f.appendChild(N("stop", {
		offset: q(e, 3),
		"stop-color": "white",
		"stop-opacity": q(t, 3)
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
function Ae(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= K; i++) {
			let a = i / K, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - je(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function je(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function q(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/svg/svgViewRenderingContext.js
var J = class extends u {
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
	#f = new h();
	#p = N("g");
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
		if (t(this.#n)?.exportExcluded || s(e) && e.name.startsWith("scrollbar-")) {
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
		let i = this.#m, a = i?.viewGroups.get(e);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted view was rendered under multiple parents: ${r}`);
		} else {
			a = N("g", {
				id: Me(e.name, this.#v++),
				"data-name": e.name,
				"data-view-path": r
			});
			let t = N("title");
			t.textContent = r, a.appendChild(t), this.currentNode.appendChild(a), i?.viewGroups.set(e, a);
		}
		this.#n.push({
			view: e,
			node: a,
			coords: n,
			exportExcluded: !1
		});
	}
	popView(e) {
		if (this.#n.pop()?.view !== e) throw Error("Unbalanced SVG view rendering context stack.");
	}
	renderMark(e, n) {
		if (t(this.#n)?.exportExcluded || e.unitView.getEffectiveOpacity() <= 0) return;
		let r = i(n), o = a(r, e.properties.clip, this.currentCoords), s = _(this.width, this.height, o);
		if (!m(s)) return;
		let c = this.getVisibleInstanceCount(e);
		if (!this.#u && this.#h != null && c == 0) return;
		if (!this.#u && this.#h != null && c > this.#h) {
			this.#T(e, s);
			return;
		}
		let l = !this.#u && this.#m != null, u = l ? this.getClipPathUrl(o) : void 0, d = l ? this.#m.markGroups.get(e)?.get(u ?? "") : void 0;
		!this.#u && !d && this.#E();
		let f = this.#u ? this.#p : this.#O(e, u), p = se(this.currentCoords, r, e.properties.cullByVisibleRange);
		if (T(e, n, this.currentCoords, this.#f, (t, n) => {
			let r = Te(e, {
				coords: t,
				data: n,
				group: f,
				visibleBounds: s,
				anchorCullBounds: p,
				viewOpacity: e.unitView.getEffectiveOpacity(),
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
			this.#u && this.#d.set(e, this.getVisibleInstanceCount(e) + r);
		}, (t) => this.#l.add(`SVG export could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`)), !this.#u && !l && f.childElementCount > 0) {
			let e = this.getClipPathUrl(o);
			e && f.setAttribute("clip-path", e), this.currentNode.appendChild(f);
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
		let t = Ne(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = N("g", {
			id: `rasterized-${n.join("-")}-${this.#w++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = N("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, Pe(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) Fe(n, t);
		e.image = i;
	}
	#O(e, t) {
		let n = this.#m;
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
			i = "clip-" + this.#y++;
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
			a = "shadow-" + this.#x++;
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
			t = "shadow-clip-" + this.#y++;
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
		return n || (n = "rect-hatch-" + this.#S++, this.#t.appendChild(Ee(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#C++, n = N("linearGradient", {
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
		let t = Oe(e.p1, e.p4, e.distances);
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
				let n = i + "-" + o, c = Ie(n, o, s, r.coords);
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
		return t(this.#n)?.node ?? this.#e;
	}
	get currentCoords() {
		let e = t(this.#n);
		if (!e) throw Error("No current view in SVG rendering context.");
		return e.coords;
	}
};
function Me(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function Y(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function Ne(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function Pe(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function Fe(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function Ie(e, t, n, r) {
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
function X({ viewRoot: e, logicalWidth: t, logicalHeight: n, background: r = "white" }) {
	let i = new J({ picking: !1 }, {
		width: t,
		height: n,
		background: r
	});
	return d(e, l.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(i), {
		svg: i.getSvg(),
		warnings: i.getWarnings()
	};
}
function Le({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
	let r = new J({ picking: !1 }, {
		width: t,
		height: n,
		background: null
	});
	return r.beginInstanceCounting(), d(e, l.create(0, 0, t, n), { renderingOptions: { firstFacet: !0 } }).collectRenderCommands(r), r.endInstanceCounting(), { layers: Array.from(r.getVisibleInstanceCounts(), ([e, t]) => ({
		viewName: e.unitView.name,
		viewTitle: e.unitView.getTitleText(),
		viewPath: e.unitView.getPathString(),
		markType: e.getType(),
		instanceCount: t
	})).filter((e) => e.instanceCount > 0) };
}
async function Re(e) {
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
async function Z({ viewRoot: e, rasterizeSvgRuns: t, logicalWidth: n, logicalHeight: r, background: i = "white", maxVectorInstances: a, pixelRatio: o = 2 }) {
	$({
		maxVectorInstances: a,
		pixelRatio: o
	});
	let s = new J({ picking: !1 }, {
		width: n,
		height: r,
		background: i,
		maxVectorInstances: a
	}), u = d(e, l.create(0, 0, n, r), { renderingOptions: { firstFacet: !0 } });
	s.beginInstanceCounting(), u.collectRenderCommands(s), s.endInstanceCounting(), u.collectRenderCommands(s);
	let f = s.getRasterRuns();
	if (f.length) try {
		await t({
			runs: f,
			viewRoot: e,
			layoutResult: u,
			logicalWidth: n,
			logicalHeight: r,
			pixelRatio: o
		});
	} catch (t) {
		if (t instanceof c) return Q({
			viewRoot: e,
			logicalWidth: n,
			logicalHeight: r,
			background: i
		});
		throw t;
	}
	return {
		svg: s.getSvg(),
		warnings: s.getWarnings(),
		rasterized: f.map((e) => ({
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
export { Le as analyzeSvgExport, Z as createRasterizedSvg, X as createSvg, Re as createSvgExport };
