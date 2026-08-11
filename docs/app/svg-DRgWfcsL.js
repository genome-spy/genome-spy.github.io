import { Dt as e, Gt as t, Ut as n, cr as r, jn as i, kr as a, pt as o, qn as s, x as c } from "./viewSelectors-BhW4mTR1.js";
import { a as l, o as u } from "./clipOptions-Dqco1p8b.js";
import { n as d, t as f } from "./viewRenderingContext-HtpqwS_x.js";
import { n as p, t as m } from "./svgNumber-C6aRPc8Z.js";
//#region ../core/src/svg/svgBounds.js
function h(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function g(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function _(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function v(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function y(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/svg/markData.js
var b = [];
function x(e, t) {
	let n = e.unitView.getCollector();
	if (!n) throw Error(`Cannot export an uninitialized mark as SVG. View: ${e.unitView.getPathString()}`);
	let r = n.facetBatches.get(void 0);
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? b;
}
//#endregion
//#region ../core/src/svg/svgElement.js
var S = "http://www.w3.org/2000/svg";
function C(e, t) {
	let n = document.createElementNS(S, e);
	if (t) for (let [e, r] of Object.entries(t)) n.setAttribute(e, "" + r);
	return n;
}
//#endregion
//#region ../core/src/svg/polygonUnion.js
var w = 1e-8;
function T(e) {
	let t = e.flatMap((e, t) => e.map((n, r) => ({
		a: n,
		b: e[(r + 1) % e.length],
		polygonIndex: t
	}))), n = [];
	for (let r of t) {
		let i = [0, 1];
		for (let e of t) r.polygonIndex != e.polygonIndex && E(r, e, i);
		i.sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let a = i[t], o = i[t + 1];
			if (o - a <= w) continue;
			let s = M(r.a, r.b, a), c = M(r.a, r.b, o), l = M(s, c, .5);
			e.some((e, t) => t != r.polygonIndex && A(l, e)) || n.push({
				a: s,
				b: c,
				polygonIndex: r.polygonIndex
			});
		}
	}
	return k(O(n));
}
function E(e, t, n) {
	let r = P(e.b, e.a), i = P(t.b, t.a), a = P(t.a, e.a), o = I(r, i);
	if (Math.abs(o) > w) {
		let e = I(a, i) / o, t = I(a, r) / o;
		e > w && e < 1 - w && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(I(a, r)) <= w && (D(e, t.a, n), D(e, t.b, n));
}
function D(e, t, n) {
	let r = P(e.b, e.a), i = F(r, r), a = F(P(t, e.a), r) / i;
	a > w && a < 1 - w && n.push(a);
}
function O(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = N(n.a) + ":" + N(n.b), r = N(n.b) + ":" + N(n.a);
		t.has(r) ? t.delete(r) : t.has(e) || t.set(e, n);
	}
	return Array.from(t.values());
}
function k(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = N(n.a), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	let n = new Set(e), r = [];
	for (; n.size;) {
		let e = n.values().next().value, i = [e.a], a = e;
		for (;;) {
			if (n.delete(a), i.push(a.b), N(a.b) == N(i[0])) {
				i.pop();
				break;
			}
			let e = (t.get(N(a.b)) ?? []).find((e) => n.has(e));
			if (!e) throw Error("Cannot chain SVG polygon union boundary.");
			a = e;
		}
		r.push(i);
	}
	return r;
}
function A(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let a = t[i], o = t[r];
		if (j(e, a, o)) return !1;
		a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}
function j(e, t, n) {
	return Math.abs(I(P(e, t), P(n, t))) <= w && F(P(e, t), P(e, n)) <= w;
}
function M(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function N(e) {
	return `${Math.round(e.x / w)},${Math.round(e.y / w)}`;
}
function P(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function F(e, t) {
	return e.x * t.x + e.y * t.y;
}
function I(e, t) {
	return e.x * t.y - e.y * t.x;
}
//#endregion
//#region ../core/src/svg/svgMarkUtils.js
function L(e, t, n) {
	return e.x + t * e.width + n;
}
function R(e, t, n) {
	return e.y + (1 - t) * e.height + n;
}
function z(e, t, n) {
	return B(e, t.x, t.x2, t.xOffset, t.x2Offset, n, L);
}
function ee(e, t, n) {
	return B(e, t.y, t.y2, t.yOffset, t.y2Offset, n, R);
}
function B(e, t, n, r, i, a, o) {
	let s = V(r, a), c = o(e, H(t, a), s);
	return [c, n ? o(e, H(n, a), i ? V(i, a) : s) : c];
}
function V(e, t) {
	return e(t);
}
function H(e, t) {
	let n = V(e, t), r = e.scale;
	if (!r) return n;
	let i = e.channelDef, a = i && "band" in i ? i.band ?? .5 : .5;
	if (r.type == "band" || r.type == "point") return n + r.bandwidth() * a;
	if (r.type == "index" || r.type == "locus") {
		let e = r;
		return n + Math.sign(e.step()) * e.bandwidth() * (a - e.align());
	} else return n;
}
function te(e, t) {
	return W(e(t));
}
function U(t, n) {
	return e(n) ? t.unitView.paramRuntime.evaluateAndGet(n.expr) : n;
}
function W(e) {
	return e == null ? "none" : "" + e;
}
function G(e, t) {
	let n = Object.entries(t).filter(([t, n]) => n.encoder.constant ? (e.setAttribute(t, "" + K(n, {})), !1) : !0);
	return (e) => Object.fromEntries(n.map(([t, n]) => [t, K(n, e)]));
}
function K(e, t) {
	let n = e.encoder(t);
	return e.transform ? e.transform(n) : "" + n;
}
//#endregion
//#region ../core/src/svg/renderers/arrow.js
function ne(e, t) {
	let n = e, r = n.properties, i = le(U(n, r.headAngle)), a = le(U(n, r.headNotchAngle)), o = U(n, r.headShape), s = U(n, r.headWidth), c = U(n, r.minSize), l = U(n, r.stem), u = U(n, r.startNotch), d = U(n, r.minStemLength), f = U(n, r.headSpacing), p = f != null && f >= 0, h = U(n, r.headPlacement), { coords: g, data: _, group: v, viewOpacity: b, visibleBounds: x } = t, S = n.encoders, w = G(v, {
		fill: {
			encoder: S.fill,
			transform: W
		},
		"fill-opacity": {
			encoder: S.fillOpacity,
			transform: (e) => +e * b
		},
		stroke: {
			encoder: S.stroke,
			transform: W
		},
		"stroke-opacity": {
			encoder: S.strokeOpacity,
			transform: (e) => +e * b
		},
		"stroke-width": {
			encoder: S.strokeWidth,
			transform: (e) => m(+e)
		}
	});
	v.setAttribute("stroke-linejoin", "miter");
	let E = 0;
	for (let e of _) {
		let [n, r] = z(g, S, e), [m, _] = ee(g, S, e), D = {
			x: n,
			y: m
		}, O = {
			x: r,
			y: _
		}, k = te(S.direction, e), A = k == "reverse" ? O : D, j = k == "reverse" ? D : O, M = fe(j, A), N = Math.hypot(M.x, M.y);
		if (N == 0) continue;
		let P = J(M, 1 / N), F = {
			x: -P.y,
			y: P.x
		}, I = Math.max(V(S.size, e), c), L = I / 2, R = Math.max(s * I, 0) / 2, B = oe({
			segmentLength: N,
			headHalfWidth: R,
			stemHalfWidth: l ? L : -L,
			configuredRHeadSlope: i,
			configuredRHeadNotchSlope: a,
			headRepeat: p,
			headPlacement: h,
			startNotch: u,
			minStemLength: d,
			headShape: o
		}), H = o == "open" ? B : Math.min(a, B), U = o == "open" ? I : 0, G = h == "outside" ? ce(R, B, H, U) : 0, K = h == "outside" ? q(j, J(P, G)) : j, ne = R * B, se = Math.hypot(R, ne), le = o == "open" && se > 0 ? I * R / se : 0, de = q(K, J(P, -ne - le)), Y = V(S.strokeWidth, e), pe = Math.max(l ? L : 0, R) + Y * 2;
		if (!y(x, Math.min(A.x, K.x, de.x), Math.min(A.y, K.y, de.y), Math.max(A.x, K.x, de.x), Math.max(A.y, K.y, de.y), pe) || (E++, t.countOnly)) continue;
		let me = o == "triangle" || o == "open" ? o : "triangle";
		me != o && t.warn(`SVG export rendered unsupported arrow headShape "${o}" as a triangle.`);
		let he = l ? ie(A, K, P, F, L, B, u) : null, X = he ? [he] : [], ge = he && me == "triangle" && !p && R <= L, _e = ne + U / Math.hypot(B, 1) + Y, ve = p ? Math.max((f ?? 0) * I, _e) : Infinity, ye = Math.hypot(K.x - A.x, K.y - A.y);
		for (let e = 0; !ge && !(e > 0 && e + _e - Y / 2 > ye); e += ve) {
			let t = q(K, J(P, -e));
			if (X.push(me == "open" ? ae(t, P, F, R, B, H, I) : re(t, P, F, R, B, H)), !p || ve <= 0) break;
		}
		let Z = W(S.stroke(e)) != "none" && V(S.strokeOpacity, e) * b > 0 && Y > 0, be = C("path", {
			d: (X.length == 1 || !Z ? X : T(X)).map(ue).join(" "),
			...w(e)
		});
		v.appendChild(be);
	}
	return E;
}
function re(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = q(q(e, J(t, -o)), J(n, r)), l = q(q(e, J(t, -o)), J(n, -r));
	return [
		e,
		c,
		q(e, J(t, -s)),
		l
	];
}
function ie(e, t, n, r, i, a, o) {
	let s = i * a, c = q(q(t, J(n, -s)), J(r, i)), l = q(q(t, J(n, -s)), J(r, -i)), u = q(e, J(r, i)), d = q(e, J(r, -i));
	return [
		t,
		c,
		u,
		...o ? [q(e, J(n, i * a))] : [],
		d,
		l
	];
}
function ae(e, t, n, r, i, a, o) {
	let s = r * i, c = q(q(e, J(t, -s)), J(n, r)), l = q(q(e, J(t, -s)), J(n, -r)), u = Math.hypot(r, s), d = o * r / u, f = o * s / u, p = q(q(c, J(t, -d)), J(n, -f)), m = q(q(l, J(t, -d)), J(n, f));
	return [
		e,
		c,
		p,
		q(e, J(t, -(s + d - (r - f) * a))),
		m,
		l
	];
}
function oe({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l }) {
	if (a || n < 0) return r;
	if (o == "outside") {
		if (!s || n <= 0) return r;
		let t = Math.max(e - c, 0);
		return Math.min(r, t / n);
	} else if (l != "triangle") return r;
	let u = Math.max(e - c, 0);
	return se(n, t, r, i) <= u ? r : u < n * i ? n > 0 ? Y(u / n, 0, r) : 0 : Y((u + (t - n) * i) / t, 0, r);
}
function se(e, t, n, r) {
	let i = Math.min(r, n);
	return t * n - (t - e) * i;
}
function ce(e, t, n, r) {
	if (e <= 0) return 0;
	let i = e * t, a = Math.hypot(e, i);
	return i + r * e / a - (e - r * i / a) * n;
}
function le(e) {
	let t = Y(e, 1, 90) * Math.PI / 180;
	return 1 / Math.max(Math.tan(t), 1e-6);
}
function ue(e) {
	return `M ${e.map(de).join(" L ")} Z`;
}
function de(e) {
	return `${m(e.x)} ${m(e.y)}`;
}
function q(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function fe(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function J(e, t) {
	return {
		x: e.x * t,
		y: e.y * t
	};
}
function Y(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../core/src/svg/renderers/link.js
function pe(e, t) {
	let n = e, r = n.properties, i = U(n, r.arcFadingDistance), a = U(n, r.linkShape), o = {
		shape: a,
		orient: U(n, r.orient),
		arcHeightFactor: U(n, r.arcHeightFactor),
		minArcHeight: U(n, r.minArcHeight),
		maxChordLength: U(n, r.maxChordLength),
		clampApex: U(n, r.clampApex)
	}, { coords: s, data: c, group: l, viewOpacity: u, visibleBounds: d } = t, f = n.encoders, p = U(n, r.noFadingOnPointSelection) ? me(n, f) : [], h = G(l, {
		stroke: {
			encoder: f.color,
			transform: W
		},
		"stroke-opacity": {
			encoder: f.opacity,
			transform: (e) => +e * u
		},
		"stroke-width": {
			encoder: f.size,
			transform: (e) => m(+e)
		}
	});
	l.setAttribute("fill", "none"), l.setAttribute("stroke-linecap", "butt");
	let g = 0;
	for (let e of c) {
		let [n, r] = z(s, f, e), [c, u] = ee(s, f, e), [m, _, v, b] = ge([n - s.x, s.y2 - c], [r - s.x, s.y2 - u], {
			width: s.width,
			height: s.height
		}, o).map(([e, t]) => [s.x + e, s.y + s.height - t]), x = V(f.size, e) / 2;
		if (!y(d, Math.min(m[0], _[0], v[0], b[0]), Math.min(m[1], _[1], v[1], b[1]), Math.max(m[0], _[0], v[0], b[0]), Math.max(m[1], _[1], v[1], b[1]), x) || (g++, t.countOnly)) continue;
		let S = h(e);
		if (a == "arc" && i !== !1 && i[0] > 0 && i[1] > 0 && !he(e, p)) {
			let e = t.getLinkArcFadeMaskUrl({
				p1: m,
				p4: b,
				distances: i
			});
			e && (S.mask = e);
		}
		l.appendChild(C("path", {
			d: `M ${X(m)} C ${X(_)} ${X(v)} ${X(b)}`,
			...S
		}));
	}
	return g;
}
function me(e, r) {
	let i = new Set(Object.values(r).flatMap((e) => e.branches).map((e) => e.predicate?.param).filter((e) => e));
	return Array.from(i).map((t) => e.unitView.paramRuntime.findValue(t)).filter((e) => e && (t(e) || n(e)));
}
function he(e, n) {
	let r = e[i];
	return n.some((e) => t(e) ? e.uniqueId != null && e.uniqueId == r : e.data.has(r));
}
function X(e) {
	return e.map(m).join(" ");
}
function ge(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = be(a, i), s = xe(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = Q(o, 1 / s), l = [-c[1], c[0]];
		s = _e(i, a, s, r.maxChordLength, n);
		let u = Q(l, Math.max(s / 2 * r.arcHeightFactor, r.minArcHeight) / .75);
		return [
			i,
			Z(i, u),
			Z(a, u),
			a
		];
	} else if (r.shape == "dome") {
		let i, a, o;
		r.orient == "vertical" ? (i = [Math.min(e[0], t[0]), t[1]], a = [Math.max(e[0], t[0]), t[1]], o = [0, e[1] - t[1]]) : (i = [t[0], Math.min(e[1], t[1])], a = [t[0], Math.max(e[1], t[1])], o = [e[0] - t[0], 0]);
		let s = xe(be(a, i));
		_e(i, a, s, r.maxChordLength, n), r.clampApex && ve(i, a, r.orient, n);
		let c = Q(o, 1 / .75);
		return [
			i,
			Z(i, c),
			Z(a, c),
			a
		];
	} else if (r.shape == "diagonal") if (r.orient == "vertical") {
		let n = (e[1] + t[1]) / 2;
		return [
			e,
			[e[0], n],
			[t[0], n],
			t
		];
	} else {
		let n = (e[0] + t[0]) / 2;
		return [
			e,
			[n, e[1]],
			[n, t[1]],
			t
		];
	}
	else if (r.shape == "line") {
		let n = Q(Z(e, t), .5);
		return [
			e,
			n,
			n,
			t
		];
	} else throw Error(`Unsupported link shape: ${r.shape}`);
}
function _e(e, t, n, r, i) {
	if (n <= r) return n;
	let a = Q(be(t, e), 1 / n);
	return ye(e, i, 2) ? (Se(t, Z(e, Q(a, r))), r) : ye(t, i, 2) ? (Se(e, be(t, Q(a, r))), r) : n;
}
function ve(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function ye(e, t, n) {
	return e[0] >= -t.width * n && e[0] <= t.width * (1 + n) && e[1] >= -t.height * n && e[1] <= t.height * (1 + n);
}
function Z(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function be(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function Q(e, t) {
	return [e[0] * t, e[1] * t];
}
function xe(e) {
	return Math.hypot(e[0], e[1]);
}
function Se(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/svg/renderers/point.js
function Ce(e, t) {
	let n = e;
	U(n, n.properties.fillGradientStrength) && t.warn("SVG export ignored unsupported point property fillGradientStrength."), n.properties.geometricZoomBound && t.warn("SVG export ignored unsupported point property geometricZoomBound.");
	let r = U(n, n.properties.inwardStroke), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c, anchorCullBounds: l } = t, u = n.encoders, d = n.getSemanticThreshold(), f = G(o, {
		fill: {
			encoder: u.fill,
			transform: W
		},
		"fill-opacity": {
			encoder: u.fillOpacity,
			transform: (e) => +e * s
		},
		stroke: {
			encoder: u.stroke,
			transform: W
		},
		"stroke-opacity": {
			encoder: u.strokeOpacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: u.strokeWidth,
			transform: (e) => m(+e)
		}
	}), p = 0;
	for (let e of a) {
		let n = te(u.shape, e);
		if (V(u.semanticScore, e) < d) continue;
		let a = L(i, H(u.x, e), V(u.xOffset, e) + V(u.dx, e)), h = R(i, H(u.y, e), V(u.yOffset, e) - V(u.dy, e));
		if (v(l, a, h)) continue;
		let g = Math.sqrt(V(u.size, e)) / 2;
		if (r && g <= 0) continue;
		let _ = V(u.angle, e), b = V(u.strokeWidth, e), x = n == "x" || n == "+", S = r && !x ? Math.min(b, g) : b, w = r && !x ? g - S / 2 : g, T = r ? 0 : b / 2, E = g * Math.SQRT2 + T;
		if (!y(c, a - E, h - E, a + E, h + E) || (p++, t.countOnly)) continue;
		let D = {
			...f(e),
			...r && !x ? { "stroke-width": m(S) } : {},
			...x ? Ee(u, e, s) : {}
		}, O = we(n, a, h, w, D);
		O ? (_ && O.setAttribute("transform", `rotate(${m(_)} ${m(a)} ${m(h)})`), o.appendChild(O)) : (t.warn(`SVG export rendered unsupported point shape "${n}" as a circle.`), o.appendChild(C("circle", {
			cx: m(a),
			cy: m(h),
			r: m(w),
			...D
		})));
	}
	return p;
}
function we(e, t, n, r, i) {
	let a = m(t), o = m(n), s = m(r);
	if (e == "circle") return C("circle", {
		cx: a,
		cy: o,
		r: s,
		...i
	});
	if (e == "square") return C("rect", {
		x: m(t - r),
		y: m(n - r),
		width: m(r * 2),
		height: m(r * 2),
		...i
	});
	let c = Te(e, t, n, r);
	return c ? C("path", {
		d: c,
		...i
	}) : void 0;
}
function Te(e, t, n, r) {
	let i = (e) => e.map(m).join(" "), a = (e) => `M ${e.map(i).join(" L ")} Z`, o = r * .4, s = r * .15, c = Math.sqrt(3) * r / 2;
	if (e == "diamond") return a([
		[t, n - r],
		[t + r, n],
		[t, n + r],
		[t - r, n]
	]);
	if (e == "cross") return a([
		[t - o, n - r],
		[t + o, n - r],
		[t + o, n - o],
		[t + r, n - o],
		[t + r, n + o],
		[t + o, n + o],
		[t + o, n + r],
		[t - o, n + r],
		[t - o, n + o],
		[t - r, n + o],
		[t - r, n - o],
		[t - o, n - o]
	]);
	if (e.startsWith("triangle-")) {
		let i = {
			"triangle-up": [
				[t, n - c],
				[t + r, n + c],
				[t - r, n + c]
			],
			"triangle-right": [
				[t + c, n],
				[t - c, n + r],
				[t - c, n - r]
			],
			"triangle-down": [
				[t, n + c],
				[t - r, n - c],
				[t + r, n - c]
			],
			"triangle-left": [
				[t - c, n],
				[t + c, n - r],
				[t + c, n + r]
			]
		}[e];
		return i ? a(i) : void 0;
	} else if (e.startsWith("tick-")) {
		let i = {
			"tick-up": [
				-s,
				-r,
				s,
				0
			],
			"tick-right": [
				0,
				-s,
				r,
				s
			],
			"tick-down": [
				-s,
				0,
				s,
				r
			],
			"tick-left": [
				-r,
				-s,
				0,
				s
			]
		}[e];
		if (i) {
			let [e, r, o, s] = i;
			return a([
				[t + e, n + r],
				[t + o, n + r],
				[t + o, n + s],
				[t + e, n + s]
			]);
		}
	} else if (e == "+") return `M ${i([t - r, n])} L ${i([t + r, n])} M ${i([t, n - r])} L ${i([t, n + r])}`;
	else if (e == "x") return `M ${i([t - r, n - r])} L ${i([t + r, n + r])} M ${i([t + r, n - r])} L ${i([t - r, n + r])}`;
}
function Ee(e, t, n) {
	let r = e.stroke(t), i = V(e.strokeOpacity, t), a = r == null || i <= 0;
	return {
		fill: "none",
		stroke: W(a ? e.fill(t) : r),
		"stroke-opacity": (a ? V(e.fillOpacity, t) : i) * n,
		"stroke-width": m(V(e.strokeWidth, t)),
		"stroke-linecap": "butt"
	};
}
//#endregion
//#region ../core/src/svg/renderers/rect.js
var De = .1;
function Oe(e, t) {
	let n = e, r = n.properties, i = U(n, r.cornerRadius), a = {
		topLeft: U(n, r.cornerRadiusTopLeft ?? i),
		topRight: U(n, r.cornerRadiusTopRight ?? i),
		bottomRight: U(n, r.cornerRadiusBottomRight ?? i),
		bottomLeft: U(n, r.cornerRadiusBottomLeft ?? i)
	}, o = U(n, r.minWidth), s = U(n, r.minHeight), c = U(n, r.minOpacity), l = {
		blur: U(n, r.shadowBlur ?? 0),
		color: U(n, r.shadowColor ?? "black"),
		offsetX: U(n, r.shadowOffsetX ?? 0),
		offsetY: U(n, r.shadowOffsetY ?? 0),
		opacity: U(n, r.shadowOpacity ?? 0)
	}, u = U(n, r.hatch ?? "none"), d = u == "none" && l.opacity == 0 && Ne(a), { coords: f, data: h, group: g, viewOpacity: _, visibleBounds: v } = t, b = n.encoders, x = G(g, {
		fill: {
			encoder: b.fill,
			transform: W
		},
		"fill-opacity": {
			encoder: b.fillOpacity,
			transform: (e) => +e * _
		},
		stroke: {
			encoder: b.stroke,
			transform: W
		},
		"stroke-opacity": {
			encoder: b.strokeOpacity,
			transform: (e) => +e * _
		},
		"stroke-width": {
			encoder: b.strokeWidth,
			transform: (e) => m(+e)
		}
	}), S = l.opacity > 0 ? {
		fill: l.color,
		"fill-opacity": 1,
		stroke: l.color,
		"stroke-opacity": 1,
		opacity: p(l.opacity * _),
		filter: t.getShadowFilterUrl(l)
	} : null, w = 0;
	for (let e of h) {
		let [n, r] = z(f, b, e), [i, h] = ee(f, b, e), T = Math.min(n, r), E = Math.min(i, h), D = Math.abs(r - n), O = Math.abs(h - i), k = Ae(D, o), A = Ae(O, s), j = Math.max(c, k * A);
		D < o && (T -= (o - D) / 2, D = o), O < s && (E -= (s - O) / 2, O = s);
		let M = V(b.strokeWidth, e), N = W(b.fill(e)), P = V(b.fillOpacity, e) * _, F = M == 0 && P == 1 && j == 1 && d && N != "none" ? De : 0;
		F && (T -= F, E -= F, D += F * 2, O += F * 2);
		let I = M / 2, L = l.opacity > 0 ? l.blur + Math.max(Math.abs(l.offsetX), Math.abs(l.offsetY)) : 0;
		if (!y(v, T, E, T + D, E + O, I + L) || (w++, t.countOnly)) continue;
		let R = je(a, D, O), B = {
			...x(e),
			...j == 1 ? {} : { opacity: p(j) }
		};
		if (u != "none" && M > 0 && (B.fill = t.getRectHatchPatternUrl({
			type: u,
			fill: W(b.fill(e)),
			fillOpacity: V(b.fillOpacity, e) * _,
			stroke: W(b.stroke(e)),
			strokeOpacity: V(b.strokeOpacity, e) * _,
			strokeWidth: M
		}), B["fill-opacity"] = 1), S) {
			let e = ke(T, E, D, O, R, {
				...S,
				"stroke-width": m(M)
			});
			if (u == "none" && N != "none" && P == 1 && j == 1) g.appendChild(e);
			else {
				let n = M / 2, r = Object.fromEntries(Object.entries(R).map(([e, t]) => [e, t + n])), i = Pe(T - n, E - n, D + n * 2, O + n * 2, r), a = C("g", { "clip-path": t.getShadowClipPathUrl(i) });
				a.appendChild(e), g.appendChild(a);
			}
		}
		g.appendChild(ke(T, E, D, O, R, B));
	}
	return w;
}
function ke(e, t, n, r, i, a) {
	if (Me(i)) {
		let o = i.topLeft, s = m(e), c = m(t), l = m(e + n), u = m(t + r);
		return C("rect", {
			x: s,
			y: c,
			width: m(l - s),
			height: m(u - c),
			...o ? {
				rx: m(o),
				ry: m(o)
			} : {},
			...a
		});
	} else return C("path", {
		d: Pe(e, t, n, r, i),
		...a
	});
}
function Ae(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function je(e, t, n) {
	let r = Math.min(t, n) / 2;
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Math.min(t, r)]));
}
function Me(e) {
	return Object.values(e).every((t) => t == e.topLeft);
}
function Ne(e) {
	return Object.values(e).every((e) => e == 0);
}
function Pe(e, t, n, r, i) {
	let a = e + n, o = t + r, { topLeft: s, topRight: c, bottomRight: l, bottomLeft: u } = i;
	return [
		`M ${Ie(e + s, t)}`,
		`H ${m(a - c)}`,
		Fe(c, a, t + c, a, t),
		`V ${m(o - l)}`,
		Fe(l, a - l, o, a, o),
		`H ${m(e + u)}`,
		Fe(u, e, o - u, e, o),
		`V ${m(t + s)}`,
		Fe(s, e + s, t, e, t),
		"Z"
	].join(" ");
}
function Fe(e, t, n, r, i) {
	return e ? `A ${m(e)} ${m(e)} 0 0 1 ${Ie(t, n)}` : `L ${Ie(r, i)}`;
}
function Ie(e, t) {
	return `${m(e)} ${m(t)}`;
}
//#endregion
//#region ../core/src/svg/renderers/rule.js
function Le(e, t) {
	let n = e, r = U(n, n.properties.minLength), { coords: i, data: a, group: o, viewOpacity: s, visibleBounds: c } = t, l = n.encoders, u = n.properties.strokeDash, d = G(o, {
		stroke: {
			encoder: l.color,
			transform: W
		},
		"stroke-opacity": {
			encoder: l.opacity,
			transform: (e) => +e * s
		},
		"stroke-width": {
			encoder: l.size,
			transform: (e) => m(+e)
		}
	});
	o.setAttribute("stroke-linecap", "" + n.properties.strokeCap), u && (o.setAttribute("stroke-dasharray", u.map(m).join(" ")), o.setAttribute("stroke-dashoffset", "" + m(n.properties.strokeDashOffset)));
	let f = 0;
	for (let e of a) {
		let [n, a] = z(i, l, e), [s, u] = ee(i, l, e), p = a - n, h = u - s, g = Math.hypot(p, h);
		if (g > 0 && g < r) {
			let e = (r - g) / 2, t = p / g, i = h / g;
			n -= t * e, s -= i * e, a += t * e, u += i * e;
		}
		let _ = V(l.size, e) / 2;
		y(c, n, s, a, u, _) && (f++, !t.countOnly && o.appendChild(C("line", {
			x1: m(n),
			y1: m(s),
			x2: m(a),
			y2: m(u),
			...d(e)
		})));
	}
	return f;
}
//#endregion
//#region ../core/src/svg/renderers/text.js
var Re = [
	"Lato",
	"Avenir Next",
	"Avenir",
	"Segoe UI",
	"Ubuntu",
	"Noto Sans",
	"Helvetica Neue",
	"Helvetica",
	"Arial",
	"sans-serif"
];
function ze(e, t) {
	let n = e, r = n.properties, i = U(n, r.logoLetters), o = U(n, r.paddingX), c = U(n, r.paddingY), l = U(n, r.flushX), u = U(n, r.flushY), d = U(n, r.squeeze), f = U(n, r.dx), h = U(n, r.dy), { coords: g, data: _, group: y, viewOpacity: b, visibleBounds: x, anchorCullBounds: S } = t, w = n.encoders, T = n.encoding.text, E = "format" in T ? a(T.format) : (e) => e, D = G(y, {
		fill: {
			encoder: w.color,
			transform: W
		},
		"fill-opacity": {
			encoder: w.opacity,
			transform: (e) => +e * b
		},
		"font-size": {
			encoder: w.size,
			transform: (e) => m(+e)
		}
	});
	y.setAttribute("font-family", Be(r.font)), y.setAttribute("font-style", r.fontStyle ?? "normal"), y.setAttribute("font-weight", "" + Qe(r.fontWeight ?? "normal")), y.setAttribute("text-anchor", Ye[r.align]);
	let O = {
		top: {
			width: U(n, r.viewportEdgeFadeWidthTop),
			distance: U(n, r.viewportEdgeFadeDistanceTop)
		},
		right: {
			width: U(n, r.viewportEdgeFadeWidthRight),
			distance: U(n, r.viewportEdgeFadeDistanceRight)
		},
		bottom: {
			width: U(n, r.viewportEdgeFadeWidthBottom),
			distance: U(n, r.viewportEdgeFadeDistanceBottom)
		},
		left: {
			width: U(n, r.viewportEdgeFadeWidthLeft),
			distance: U(n, r.viewportEdgeFadeDistanceLeft)
		}
	}, k = 0;
	for (let e of _) {
		let a = E(w.text(e)), _ = s(a) ? a : a === null ? "" : "" + a;
		if (!_) continue;
		let [b, T] = z(g, w, e), [O, A] = ee(g, w, e), j = V(w.size, e), M = V(w.angle, e), N = !!w.x2, P = !!w.y2;
		if (i) {
			_.length > 1 && t.warn("SVG export stretches multi-character logo text as a single glyph cell.");
			let r = j, i = j;
			N && (r = T - b, b = (b + T) / 2), P && (i = O - A, O = (O + A) / 2);
			let a = n.font.metrics.getChar(_[0]), o = i * n.font.metrics.common.base * (a.height + 10) / (a.height * a.height);
			if (!r || !i || v(S, b, O) || !He(x, b, O, Math.abs(r), Math.abs(i), "center", "middle", M, f, h) || (k++, t.countOnly)) continue;
			let s = [`translate(${m(b)} ${m(O)})`];
			M && s.push(`rotate(${m(M)})`), (f || h) && s.push(`translate(${m(f)} ${m(h)})`), s.push(`scale(${m(r)} ${m(o)})`);
			let c = C("text", {
				x: 0,
				y: 0,
				dy: Xe("middle", 1),
				"text-anchor": "middle",
				lengthAdjust: "spacingAndGlyphs",
				textLength: 1,
				transform: s.join(" "),
				...D(e),
				"font-size": 1
			});
			c.textContent = _, y.appendChild(c);
			continue;
		}
		let F = n.font.metrics.measureWidth(_, j), I = Ue(F, j, M), L = N || P ? Ge(r.align, r.baseline, M) : {
			x: qe[r.align],
			y: Je[r.baseline]
		}, R = 1;
		if (N) {
			let e = We(Math.min(b, T), Math.max(b, T), I.width, o, L.x, l, g.x, g.x2);
			b = e.position, R *= e.scale;
		}
		if (P) {
			let e = We(Math.min(O, A), Math.max(O, A), I.height * R, c, L.y, u, g.y, g.y2);
			O = e.position, R *= e.scale;
		}
		if (v(S, b, O)) continue;
		let B = 1;
		if (R < 1) {
			if (!d || R < 3 / j) continue;
			B = Ke(3 / j, 6 / j, R);
		}
		let H = j * R, te = F * R;
		if (!He(x, b, O, te, H, r.align, r.baseline, M, f, h) || (k++, t.countOnly)) continue;
		let U = m(b), W = m(O), G = C("text", {
			x: U,
			y: W,
			dx: m(f),
			dy: m(h + Xe(r.baseline, H)),
			lengthAdjust: "spacingAndGlyphs",
			textLength: m(te),
			...D(e),
			...R == 1 ? {} : { "font-size": m(H) },
			...B == 1 ? {} : { opacity: p(B) }
		});
		G.textContent = _, M && G.setAttribute("transform", `rotate(${m(M)} ${U} ${W})`), y.appendChild(G);
	}
	if (!t.countOnly && y.childElementCount > 0) {
		let e = t.getViewportEdgeFadeMaskUrl(O);
		e && y.setAttribute("mask", e);
	}
	return k;
}
function Be(e) {
	let t = e ?? "Lato";
	return [t, ...Re.filter((e) => e.toLowerCase() != t.toLowerCase())].map(Ve).join(", ");
}
function Ve(e) {
	return e == "sans-serif" ? e : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
function He(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - (qe[a] + 1) / 2 * r, d = n + l - (Je[o] + 1) / 2 * i, f = u + r, p = d + i;
	if (!s) return y(e, u, d, f, p, 1);
	let m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m), _ = t + (u - t) * g - (d - n) * h, v = n + (u - t) * h + (d - n) * g, b = t + (f - t) * g - (d - n) * h, x = n + (f - t) * h + (d - n) * g, S = t + (f - t) * g - (p - n) * h, C = n + (f - t) * h + (p - n) * g, w = t + (u - t) * g - (p - n) * h, T = n + (u - t) * h + (p - n) * g;
	return y(e, Math.min(_, b, S, w), Math.min(v, x, C, T), Math.max(_, b, S, w), Math.max(v, x, C, T), 1);
}
function Ue(e, t, n) {
	let r = n * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return {
		width: e * a + t * i,
		height: e * i + t * a
	};
}
function We(e, t, n, r, i, a, o, s) {
	let c = t - e, l = n + 2 * r;
	if (e > s || t < o) return {
		position: 0,
		scale: 0
	};
	let u = Math.max(0, c - l), d;
	if (i == 0) {
		let n = e + t;
		if (a) {
			let e = Math.max(0, 2 * o + l - n);
			n += Math.min(e, u);
			let t = Math.max(0, l + n - 2 * s);
			n -= Math.min(t, u);
		}
		d = n / 2;
	} else if (i < 0) {
		let t = e;
		a && (t += Math.min(Math.max(0, o - t), u)), d = t + r;
	} else {
		let e = t;
		a && (e -= Math.min(Math.max(0, e - s), u)), d = e - r;
	}
	return {
		position: d,
		scale: Math.max(0, Math.min(1, (c - r) / l))
	};
}
function Ge(e, t, n) {
	let r = qe[e], i = -Je[t], a = ((n + 45) % 360 + 360) % 360, o, s;
	return a < 90 ? (o = r, s = i) : a < 180 ? (o = i, s = -r) : a < 270 ? (o = -r, s = i) : (o = -i, s = r), {
		x: o,
		y: -s
	};
}
function Ke(e, t, n) {
	return Math.max(0, Math.min(1, (n - e) / (t - e)));
}
var qe = {
	left: -1,
	center: 0,
	right: 1
}, Je = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Ye = {
	left: "start",
	center: "middle",
	right: "end"
};
function Xe(e, t) {
	switch (e) {
		case "top": return .79 * t;
		case "middle": return .35 * t;
		case "bottom": return -.21 * t;
		case "alphabetic":
		case "baseline": return 0;
		default: throw Error(`Unknown text baseline: ${e}`);
	}
}
var Ze = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function Qe(e) {
	return typeof e == "number" ? e : Ze[e];
}
//#endregion
//#region ../core/src/svg/legendGradient.js
var $e = 64;
function et(e, t) {
	let n = nt(e.unitView);
	if (!n) return;
	let r = e.unitView.getScaleResolution(n.channel)?.getScale();
	if (!r || !o(r.type)) return;
	let { coords: i, data: a, group: s, viewOpacity: c, visibleBounds: l } = t;
	if (!a.length) return 0;
	let u = e.encoders, d = n.channel == "stroke" ? u.stroke : u.fill, f = rt(e.unitView.spec.encoding.x), h = Infinity, g = Infinity, _ = -Infinity, v = -Infinity, b = a.map((e) => {
		let [t, n] = z(i, u, e), [r, a] = ee(i, u, e);
		return h = Math.min(h, t, n), g = Math.min(g, r, a), _ = Math.max(_, t, n), v = Math.max(v, r, a), {
			offset: Number(e.position),
			color: W(d(e))
		};
	}).sort((e, t) => e.offset - t.offset);
	if (!y(l, h, g, _, v)) return 0;
	if (t.countOnly) return a.length;
	let x = tt(b), S = [
		{
			offset: 0,
			color: x[0].color
		},
		...x,
		{
			offset: 1,
			color: x.at(-1).color
		}
	], w = t.getLegendGradientUrl({
		x1: h,
		y1: f ? g : v,
		x2: f ? _ : h,
		y2: g,
		stops: S
	}), T = m(h), E = m(g), D = m(_), O = m(v), k = Number(u.fillOpacity(a[0])) * c;
	return s.appendChild(C("rect", {
		x: T,
		y: E,
		width: m(D - T),
		height: m(O - E),
		fill: w,
		"fill-opacity": p(k),
		stroke: "none"
	})), a.length;
}
function tt(e) {
	return e.length <= $e ? e : Array.from({ length: $e }, (t, n) => e[Math.round(n * (e.length - 1) / ($e - 1))]);
}
function nt(e) {
	let t = e;
	for (; t;) {
		let e = t.spec.data;
		if (e) return "lazy" in e && e.lazy.type == "legendGradient" ? e.lazy : void 0;
		t = t.dataParent;
	}
}
function rt(e) {
	return e != null && "field" in e && (e.field == "position0" || e.field == "position1");
}
//#endregion
//#region ../core/src/svg/renderers/index.js
var it = /* @__PURE__ */ new Map([
	["arrow", ne],
	["link", pe],
	["point", Ce],
	["rect", Oe],
	["rule", Le],
	["text", ze],
	["tick", Le]
]);
function at(e, t) {
	if (e.getType() == "rect") {
		let n = et(e, t);
		if (n !== void 0) return n;
	}
	let n = it.get(e.getType());
	if (!n) throw Error(`SVG rendering is not implemented for mark type "${e.getType()}". View: ${e.unitView.getPathString()}`);
	return n(e, t);
}
//#endregion
//#region ../core/src/svg/rectHatchPattern.js
function ot(e, t) {
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
	].includes(t.type), o = r ? n * 7 : n * (i ? 6 : 4), s = a ? n * 2 : n, c = o, l = r ? o * 2 : o, u = C("pattern", {
		id: e,
		x: 0,
		y: 0,
		width: m(c),
		height: m(l),
		patternUnits: "userSpaceOnUse"
	});
	u.appendChild(C("rect", {
		width: m(c),
		height: m(l),
		fill: t.fill,
		"fill-opacity": p(t.fillOpacity)
	}));
	let d = C("g", {
		fill: "none",
		stroke: t.stroke,
		"stroke-opacity": p(t.strokeOpacity),
		"stroke-width": m(s),
		"stroke-linecap": "square"
	});
	return st(d, t.type, o, s), u.appendChild(d), u;
}
function st(e, t, n, r) {
	let i = (t) => e.appendChild(C("path", { d: t })), a = (e) => m(e), o = (e) => {
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
			let r = n * (t == "dots" ? .07 : t == "rings" ? .2 : .35), i = (t, n) => e.appendChild(C("circle", {
				cx: m(t),
				cy: m(n),
				r: m(r)
			}));
			i(n / 2, 0), i(n / 2, n * 2), i(0, n), i(n, n);
			break;
		}
		default: throw Error(`Unknown rectangle hatch pattern: ${t}`);
	}
}
//#endregion
//#region ../core/src/svg/linkArcFadeMask.js
var ct = 4;
function lt(e, t, n) {
	let r = t[0] - e[0], i = t[1] - e[1], a = Math.hypot(r, i);
	if (a == 0) return;
	let o = -i / a, s = r / a;
	(o < 0 || o == 0 && s < 0) && (o = -o, s = -s);
	let c = o * e[0] + s * e[1], [l, u] = n, d = JSON.stringify([
		$(o, 6),
		$(s, 6),
		$(c, 1),
		$(l, 1),
		$(u, 1)
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
function ut(e, t, n, r) {
	let { normalX: i, normalY: a, offset: o, start: s, end: c } = r, l = i * o, u = a * o, d = e + "-gradient", f = C("linearGradient", {
		id: d,
		gradientUnits: "userSpaceOnUse",
		x1: m(l - i * c),
		y1: m(u - a * c),
		x2: m(l + i * c),
		y2: m(u + a * c),
		spreadMethod: "pad"
	});
	for (let { offset: e, opacity: t } of dt(s, c)) f.appendChild(C("stop", {
		offset: $(e, 3),
		"stop-color": "white",
		"stop-opacity": $(t, 3)
	}));
	let p = C("mask", {
		id: e,
		x: 0,
		y: 0,
		width: m(t),
		height: m(n),
		maskUnits: "userSpaceOnUse",
		maskContentUnits: "userSpaceOnUse",
		"mask-type": "luminance"
	});
	return p.appendChild(C("rect", {
		width: m(t),
		height: m(n),
		fill: `url(#${d})`
	})), {
		gradient: f,
		mask: p
	};
}
function dt(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= ct; i++) {
			let a = i / ct, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - ft(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function ft(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function $(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/svg/svgViewRenderingContext.js
var pt = class extends f {
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
	#f = C("g");
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
		let n = m(t.width), r = m(t.height);
		this.#e = C("svg", {
			xmlns: S,
			width: n,
			height: r,
			viewBox: `0 0 ${n} ${r}`
		}), this.#t = C("defs"), this.#e.appendChild(this.#t), t.background != null && this.#e.appendChild(C("rect", {
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
	pushView(e, t) {
		let n = e.getPathString();
		if (r(this.#n)?.exportExcluded || c(e) && e.name.startsWith("scrollbar-")) {
			this.#n.push({
				view: e,
				node: this.currentNode,
				coords: t,
				exportExcluded: !0
			});
			return;
		}
		if (this.#u) {
			this.#n.push({
				view: e,
				node: this.currentNode,
				coords: t,
				exportExcluded: !1
			});
			return;
		}
		let i = this.#p, a = i?.viewGroups.get(e);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted view was rendered under multiple parents: ${n}`);
		} else {
			a = C("g", {
				id: mt(e.name, this.#_++),
				"data-name": e.name,
				"data-view-path": n
			});
			let t = C("title");
			t.textContent = n, a.appendChild(t), this.currentNode.appendChild(a), i?.viewGroups.set(e, a);
		}
		this.#n.push({
			view: e,
			node: a,
			coords: t,
			exportExcluded: !1
		});
	}
	popView(e) {
		if (this.#n.pop()?.view !== e) throw Error("Unbalanced SVG view rendering context stack.");
	}
	renderMark(e, t) {
		if (r(this.#n)?.exportExcluded || e.unitView.getEffectiveOpacity() <= 0) return;
		let n = l(t), i = u(n, e.properties.clip, this.currentCoords), a = h(this.width, this.height, i);
		if (!_(a)) return;
		let o = this.getVisibleInstanceCount(e);
		if (!this.#u && this.#m != null && o == 0) return;
		if (!this.#u && this.#m != null && o > this.#m) {
			this.#w(e, a);
			return;
		}
		let s = !this.#u && this.#p != null, c = s ? this.getClipPathUrl(i) : void 0, d = s ? this.#p.markGroups.get(e)?.get(c ?? "") : void 0;
		!this.#u && !d && this.#T();
		let f = this.#u ? this.#f : this.#D(e, c), p = g(this.currentCoords, n, e.properties.cullByVisibleRange), m = x(e, t), v = (t, n) => {
			let r = at(e, {
				coords: t,
				data: n,
				group: f,
				visibleBounds: a,
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
		};
		if (t.sampleFacetRenderingOptions) v(ht(this.currentCoords, t.sampleFacetRenderingOptions), m);
		else if (e.encoders.facetIndex) for (let [t, n] of gt(e.encoders.facetIndex, m)) {
			let r = this.#O(e, t);
			r ? v(ht(this.currentCoords, {
				locSize: r,
				pixelToUnit: 1
			}), n) : this.#l.add(`SVG export could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`);
		}
		else v(this.currentCoords, m);
		if (!this.#u && !s && f.childElementCount > 0) {
			let e = this.getClipPathUrl(i);
			e && f.setAttribute("clip-path", e), this.currentNode.appendChild(f);
		}
	}
	#w(e, t) {
		let n = this.#p?.rasterRuns.get(e);
		if (n) {
			_t(n.bounds, t), n.viewNodes.add(this.currentNode);
			return;
		}
		let r = this.#g;
		if (r) _t(r.bounds, t);
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
		let t = vt(e.viewNodes), n = e.targets.map((e) => e.mark.getType()), r = C("g", {
			id: `rasterized-${n.join("-")}-${this.#C++}`,
			"data-name": `Rasterized ${n.join(", ")}`,
			"data-rasterized": ""
		}), i = C("image", { preserveAspectRatio: "none" });
		r.appendChild(i);
		let a = e.anchor.parentNode;
		t == a ? t.insertBefore(r, e.anchor) : t.insertBefore(r, yt(a, t)), e.anchor.remove();
		for (let n of e.viewNodes) bt(n, t);
		e.image = i;
	}
	#D(e, t) {
		let n = this.#p;
		if (!n) return C("g", { "data-mark-type": e.getType() });
		let r = n.markGroups.get(e);
		r || (r = /* @__PURE__ */ new Map(), n.markGroups.set(e, r));
		let i = t ?? "", a = r.get(i);
		if (a) {
			if (a.parentNode !== this.currentNode) throw Error(`Sample-faceted mark was rendered under multiple parents: ${e.unitView.getPathString()}`);
		} else a = C("g", { "data-mark-type": e.getType() }), t && a.setAttribute("clip-path", t), this.currentNode.appendChild(a), r.set(i, a), n.markGroupElements.add(a);
		return a;
	}
	getClipPathUrl(e) {
		if (!e) return;
		let t = e.rect.flatten(), n = [
			e.clipX ? t.x : 0,
			e.clipY ? t.y : 0,
			e.clipX ? t.width : this.width,
			e.clipY ? t.height : this.height
		].map(m), r = n.join(","), i = this.#r.get(r);
		if (!i) {
			i = "clip-" + this.#v++;
			let e = C("clipPath", {
				id: i,
				clipPathUnits: "userSpaceOnUse"
			});
			e.appendChild(C("rect", {
				x: n[0],
				y: n[1],
				width: n[2],
				height: n[3]
			})), this.#t.appendChild(e), this.#r.set(r, i);
		}
		return `url(#${i})`;
	}
	#O(e, t) {
		for (let n of e.unitView.getLayoutAncestors()) {
			let e = n.getSampleFacetPosition(t);
			if (e) return e;
		}
	}
	getShadowFilterUrl(e) {
		let t = m(Math.max(e.blur / 2.5, .25)), n = m(e.offsetX), r = m(e.offsetY), i = [
			t,
			n,
			r
		].join(","), a = this.#a.get(i);
		if (!a) {
			a = "shadow-" + this.#b++;
			let e = C("filter", {
				id: a,
				x: 0,
				y: 0,
				width: m(this.width),
				height: m(this.height),
				filterUnits: "userSpaceOnUse",
				primitiveUnits: "userSpaceOnUse",
				"color-interpolation-filters": "sRGB"
			});
			e.appendChild(C("feGaussianBlur", {
				in: "SourceGraphic",
				stdDeviation: t,
				result: "blur"
			})), e.appendChild(C("feOffset", {
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
			let n = C("clipPath", {
				id: t,
				clipPathUnits: "userSpaceOnUse"
			});
			n.appendChild(C("path", {
				d: `M 0 0 V ${m(this.height)} H ${m(this.width)} V 0 Z ${e}`,
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
			p(e.fillOpacity),
			e.stroke,
			p(e.strokeOpacity),
			p(e.strokeWidth)
		]), n = this.#s.get(t);
		return n || (n = "rect-hatch-" + this.#x++, this.#t.appendChild(ot(n, e)), this.#s.set(t, n)), `url(#${n})`;
	}
	getLegendGradientUrl(e) {
		let t = "legend-gradient-" + this.#S++, n = C("linearGradient", {
			id: t,
			gradientUnits: "userSpaceOnUse",
			x1: m(e.x1),
			y1: m(e.y1),
			x2: m(e.x2),
			y2: m(e.y2)
		});
		for (let t of e.stops) n.appendChild(C("stop", {
			offset: p(t.offset),
			"stop-color": t.color
		}));
		return this.#t.appendChild(n), `url(#${t})`;
	}
	getLinkArcFadeMaskUrl(e) {
		let t = lt(e.p1, e.p4, e.distances);
		if (!t) return;
		let n = this.#c.get(t.key);
		if (!n) {
			n = "link-arc-fade-" + this.#y++;
			let { gradient: e, mask: r } = ut(n, this.width, this.height, t);
			this.#t.appendChild(e), this.#t.appendChild(r), this.#c.set(t.key, n);
		}
		return `url(#${n})`;
	}
	getViewportEdgeFadeMaskUrl(e) {
		let t = Object.entries(e).filter(([, e]) => e.width > 0 && Number.isFinite(e.distance));
		if (!t.length) return;
		let n = r(this.#n);
		if (!n) throw Error("No current view in SVG rendering context.");
		let i = this.#i.get(n.view);
		if (!i) {
			i = "edge-fade-" + this.#y++;
			let e = m(this.width), r = m(this.height), a = C("mask", {
				id: i,
				x: 0,
				y: 0,
				width: e,
				height: r,
				maskUnits: "userSpaceOnUse",
				maskContentUnits: "userSpaceOnUse",
				"mask-type": "luminance"
			});
			a.appendChild(C("rect", {
				width: e,
				height: r,
				fill: "white"
			}));
			for (let [o, s] of t) {
				let t = i + "-" + o, c = xt(t, o, s, n.coords);
				this.#t.appendChild(c), a.appendChild(C("rect", {
					width: e,
					height: r,
					fill: `url(#${t})`
				}));
			}
			this.#t.appendChild(a), this.#i.set(n.view, i);
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
		return r(this.#n)?.node ?? this.#e;
	}
	get currentCoords() {
		let e = r(this.#n);
		if (!e) throw Error("No current view in SVG rendering context.");
		return e.coords;
	}
};
function mt(e, t) {
	let n = e.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "");
	return `${/^[A-Za-z_]/.test(n) ? n : n ? "view-" + n : "view"}-${t}`;
}
function ht(e, t) {
	if (!t) return e;
	let n = t.locSize.location * t.pixelToUnit, r = t.locSize.size * t.pixelToUnit;
	return e.modify({
		y: () => e.y + n * e.height,
		height: () => r * e.height
	});
}
function gt(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
function _t(e, t) {
	e.x1 = Math.min(e.x1, t.x1), e.y1 = Math.min(e.y1, t.y1), e.x2 = Math.max(e.x2, t.x2), e.y2 = Math.max(e.y2, t.y2);
}
function vt(e) {
	let [t, ...n] = Array.from(e), r = t;
	for (; n.some((e) => !r.contains(e));) r = r.parentNode;
	return r;
}
function yt(e, t) {
	let n = e;
	for (; n.parentNode != t;) n = n.parentNode;
	return n;
}
function bt(e, t) {
	let n = e;
	for (; n != t && n.matches("g[data-view-path]") && Array.from(n.children).every((e) => e.tagName == "title");) {
		let e = n.parentNode;
		n.remove(), n = e;
	}
}
function xt(e, t, n, r) {
	let i = t == "top" ? r.y + n.distance : t == "right" ? r.x2 - n.distance : t == "bottom" ? r.y2 - n.distance : r.x + n.distance, a = t == "left" || t == "right", o = i + (t == "top" || t == "left" ? 1 : -1) * n.width, s = C("linearGradient", {
		id: e,
		gradientUnits: "userSpaceOnUse",
		x1: m(a ? i : 0),
		y1: m(a ? 0 : i),
		x2: m(a ? o : 0),
		y2: m(a ? 0 : o)
	});
	return s.appendChild(C("stop", {
		offset: 0,
		"stop-color": "black",
		"stop-opacity": 1
	})), s.appendChild(C("stop", {
		offset: 1,
		"stop-color": "black",
		"stop-opacity": 0
	})), s;
}
//#endregion
//#region ../core/src/svg/index.js
function St({ viewRoot: e, logicalWidth: t, logicalHeight: n, background: r = "white" }) {
	let i = new pt({ picking: !1 }, {
		width: t,
		height: n,
		background: r
	});
	return e.render(i, d.create(0, 0, t, n), { firstFacet: !0 }), {
		svg: i.getSvg(),
		warnings: i.getWarnings()
	};
}
function Ct({ viewRoot: e, logicalWidth: t, logicalHeight: n }) {
	let r = new pt({ picking: !1 }, {
		width: t,
		height: n,
		background: null
	});
	return r.beginInstanceCounting(), e.render(r, d.create(0, 0, t, n), { firstFacet: !0 }), r.endInstanceCounting(), { layers: Array.from(r.getVisibleInstanceCounts(), ([e, t]) => ({
		viewName: e.unitView.name,
		viewTitle: e.unitView.getTitleText(),
		viewPath: e.unitView.getPathString(),
		markType: e.getType(),
		instanceCount: t
	})).filter((e) => e.instanceCount > 0) };
}
async function wt(e) {
	let t = e.rasterization;
	if (!t) return {
		...St(e),
		rasterized: []
	};
	if (Et(t), !e.webGLHelper) {
		let t = St(e);
		return {
			...t,
			warnings: [...t.warnings, "SVG rasterization was requested but no WebGL context is available; exported all marks as vectors."],
			rasterized: []
		};
	}
	return Tt({
		...e,
		webGLHelper: e.webGLHelper,
		maxVectorInstances: t.maxVectorInstances,
		pixelRatio: t.pixelRatio
	});
}
async function Tt({ viewRoot: e, webGLHelper: t, logicalWidth: n, logicalHeight: r, background: i = "white", maxVectorInstances: a, pixelRatio: o = 2 }) {
	Et({
		maxVectorInstances: a,
		pixelRatio: o
	});
	let s = new pt({ picking: !1 }, {
		width: n,
		height: r,
		background: i,
		maxVectorInstances: a
	}), c = d.create(0, 0, n, r);
	s.beginInstanceCounting(), e.render(s, c, { firstFacet: !0 }), s.endInstanceCounting(), e.render(s, c, { firstFacet: !0 });
	let l = s.getRasterRuns();
	if (l.length) {
		let { rasterizeSvgRuns: i } = await import("./raster-9uKYMjHZ.js");
		i({
			runs: l,
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
		rasterized: l.map((e) => ({
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
function Et(e) {
	if (!Number.isInteger(e.maxVectorInstances) || e.maxVectorInstances < 0) throw RangeError("maxVectorInstances must be a non-negative integer.");
	if (e.pixelRatio != null && (!Number.isFinite(e.pixelRatio) || e.pixelRatio <= 0)) throw RangeError("SVG raster pixelRatio must be positive.");
}
//#endregion
export { Ct as analyzeSvgExport, wt as createSvgExport };
