import { $ as e, Tn as t, _n as n, b as r, en as i } from "./clipOptions-DBJX_W31.js";
import { i as a } from "./rasterization-D0tOoKu_.js";
import { t as o } from "./rectangle-DE98gIxF.js";
//#region ../core/src/rendering/immediate/markData.js
var s = [], c = class {
	#e = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	#t = new o(() => this.#e.x, () => this.#e.y, () => this.#e.width, () => this.#e.height);
	#n;
	#r = 0;
	#i = 0;
	#a = NaN;
	#o = NaN;
	#s = NaN;
	resolveFacet(e, t) {
		this.#c(e);
		let n = t.locSize.location, r = t.locSize.size;
		return (this.#a !== n || this.#o !== r || this.#s !== t.pixelToUnit) && (this.#l(n, r, t.pixelToUnit), this.#a = n, this.#o = r, this.#s = t.pixelToUnit), this.#t;
	}
	resolvePlacement(e, t, n) {
		if (!t) return;
		let r = t.getSnapshot().rectangles, i = n * 4;
		if (!(i + 3 >= r.length)) return this.#c(e), this.#l(r[i + 1], r[i + 3], 1), this.#a = NaN, this.#o = NaN, this.#s = NaN, this.#t;
	}
	#c(e) {
		this.#n !== e && (this.#e.x = e.x, this.#r = e.y, this.#e.width = e.width, this.#i = e.height, this.#n = e, this.#a = NaN, this.#o = NaN, this.#s = NaN);
	}
	#l(e, t, n) {
		this.#e.y = this.#r + e * n * this.#i, this.#e.height = t * n * this.#i;
	}
};
function l(e, t) {
	let n = e.unitView.getCollector();
	if (!n) throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);
	let r = n.facetBatches.get(void 0);
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? s;
}
function u(e, t, n, r, i, a) {
	let o = l(e, t);
	if (t.sampleFacetRenderingOptions) i(r.resolveFacet(n, t.sampleFacetRenderingOptions), o);
	else if (e.encoders.facetIndex) for (let [s, c] of d(e.encoders.facetIndex, o)) {
		let e = r.resolvePlacement(n, t.placement?.source, s);
		e ? i(e, c) : a(s);
	}
	else i(n, o);
}
function d(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
//#endregion
//#region ../core/src/rendering/immediate/bounds.js
function f(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function p(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function m(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function h(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function g(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/polygonUnion.js
var _ = 1e-8;
function v(e) {
	let t = e.flatMap((e, t) => e.map((n, r) => ({
		a: n,
		b: e[(r + 1) % e.length],
		polygonIndex: t
	}))), n = [];
	for (let r of t) {
		let i = [0, 1];
		for (let e of t) r.polygonIndex != e.polygonIndex && y(r, e, i);
		i.sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let a = i[t], o = i[t + 1];
			if (o - a <= _) continue;
			let s = T(r.a, r.b, a), c = T(r.a, r.b, o), l = T(s, c, .5);
			e.some((e, t) => t != r.polygonIndex && C(l, e)) || n.push({
				a: s,
				b: c,
				polygonIndex: r.polygonIndex
			});
		}
	}
	return S(x(n));
}
function y(e, t, n) {
	let r = D(e.b, e.a), i = D(t.b, t.a), a = D(t.a, e.a), o = k(r, i);
	if (Math.abs(o) > _) {
		let e = k(a, i) / o, t = k(a, r) / o;
		e > _ && e < 1 - _ && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(k(a, r)) <= _ && (b(e, t.a, n), b(e, t.b, n));
}
function b(e, t, n) {
	let r = D(e.b, e.a), i = O(r, r), a = O(D(t, e.a), r) / i;
	a > _ && a < 1 - _ && n.push(a);
}
function x(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = E(n.a) + ":" + E(n.b), r = E(n.b) + ":" + E(n.a);
		t.has(r) ? t.delete(r) : t.has(e) || t.set(e, n);
	}
	return Array.from(t.values());
}
function S(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = E(n.a), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	let n = new Set(e), r = [];
	for (; n.size;) {
		let e = n.values().next().value, i = [e.a], a = e;
		for (;;) {
			if (n.delete(a), i.push(a.b), E(a.b) == E(i[0])) {
				i.pop();
				break;
			}
			let e = (t.get(E(a.b)) ?? []).find((e) => n.has(e));
			if (!e) throw Error("Cannot chain SVG polygon union boundary.");
			a = e;
		}
		r.push(i);
	}
	return r;
}
function C(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let a = t[i], o = t[r];
		if (w(e, a, o)) return !1;
		a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}
function w(e, t, n) {
	return Math.abs(k(D(e, t), D(n, t))) <= _ && O(D(e, t), D(e, n)) <= _;
}
function T(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function E(e) {
	return `${Math.round(e.x / _)},${Math.round(e.y / _)}`;
}
function D(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function O(e, t) {
	return e.x * t.x + e.y * t.y;
}
function k(e, t) {
	return e.x * t.y - e.y * t.x;
}
//#endregion
//#region ../core/src/rendering/immediate/markEncoding.js
function A(e, t, n) {
	return e.x + t * e.width + n;
}
function j(e, t, n) {
	return e.y + (1 - t) * e.height + n;
}
function M(e, t, n, r = [0, 0]) {
	return F(e, t.x, t.x2, t.xOffset, t.x2Offset, n, A, r);
}
function N(e, t, n, r = [0, 0]) {
	return F(e, t.y, t.y2, t.yOffset, t.y2Offset, n, j, r);
}
function P(e, t, n, r) {
	let i = t[n], a = t[n + "2"], o = t[n + "Offset"], s = t[n + "2Offset"], c = n == "x" ? e.width : e.height, l = n == "x" ? e.x : e.y + c, u = n == "x" ? c : -c, d = R(i), f = a ? R(a) : 0, p = i.constant ? I(i, r) + d : 0, m = a?.constant ? I(a, r) + f : 0, h = o.constant ? I(o, r) : 0, g = a && s?.constant ? I(s, r) : 0;
	return (e, t) => {
		let n = o.constant ? h : I(o, e), r = i.constant ? p : I(i, e) + d, c = l + r * u + n, _ = c;
		if (a) {
			let t = a.constant ? m : I(a, e) + f, r = s ? s.constant ? g : I(s, e) : n;
			_ = l + t * u + r;
		}
		return t[0] = c, t[1] = _, t;
	};
}
function F(e, t, n, r, i, a, o, s) {
	let c = I(r, a), l = o(e, L(t, a), c), u = n ? o(e, L(n, a), i ? I(i, a) : c) : l;
	return s[0] = l, s[1] = u, s;
}
function I(e, t) {
	return e(t);
}
function L(e, t) {
	return I(e, t) + R(e);
}
function R(e) {
	let t = e.scale;
	if (!t) return 0;
	let n = e.channelDef;
	return a(t, n && "band" in n ? n.band ?? .5 : .5);
}
function z(e, t) {
	return V(e(t));
}
function B(e, t) {
	return r(t) ? e.unitView.paramRuntime.evaluateAndGet(t.expr) : t;
}
function V(e) {
	return e == null ? "none" : "" + e;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/arrow.js
function H(e) {
	let t = e.properties, n = B(e, t.headSpacing);
	return {
		configuredRHeadSlope: ce(B(e, t.headAngle)),
		configuredRHeadNotchSlope: ce(B(e, t.headNotchAngle)),
		headShape: B(e, t.headShape),
		headWidth: B(e, t.headWidth),
		minSize: B(e, t.minSize),
		stem: B(e, t.stem),
		startNotch: B(e, t.startNotch),
		minStemLength: B(e, t.minStemLength),
		headSpacing: n,
		repeatHeads: n != null && n >= 0,
		headPlacement: B(e, t.headPlacement)
	};
}
function ee(e, t, n, r) {
	let { viewOpacity: i } = n, a = e.encoders;
	return U(e, t, n, (e) => {
		let n = t.stem ? re(e.tail, e.tip, e.tangent, e.normal, e.stemHalfWidth, e.rHeadSlope, t.startNotch && !e.bidirectional, e.bidirectional) : null, o = n ? [n] : [];
		W(e, (t, n, r, i) => {
			let a = {
				x: t,
				y: n
			};
			o.push(e.renderedHeadShape == "open" ? ie(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope, e.size) : ne(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope));
		});
		let s = V(a.stroke(e.datum)) != "none" && I(a.strokeOpacity, e.datum) * i > 0 && e.strokeWidth > 0;
		r({
			datum: e.datum,
			boundaryLoops: o.length == 1 || !s ? o : v(o),
			strokeWidth: e.strokeWidth,
			headShapeFallback: e.headShapeFallback
		});
	});
}
function U(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, countOnly: s } = n, c = e.encoders;
	if (a.length == 0) return 0;
	let l = P(i, c, "x", a[0]), u = P(i, c, "y", a[0]), d = [0, 0], f = [0, 0], p = {
		datum: {},
		tail: {
			x: 0,
			y: 0
		},
		tip: {
			x: 0,
			y: 0
		},
		tangent: {
			x: 0,
			y: 0
		},
		normal: {
			x: 0,
			y: 0
		},
		reverseTangent: {
			x: 0,
			y: 0
		},
		reverseNormal: {
			x: 0,
			y: 0
		},
		size: 0,
		stemHalfWidth: 0,
		headHalfWidth: 0,
		headAxisLength: 0,
		rHeadSlope: 0,
		rHeadNotchSlope: 0,
		strokeWidth: 0,
		repeatSpacing: Infinity,
		headRepeatFootprint: 0,
		geometryLength: 0,
		bidirectional: !1,
		stemContainsHead: !1,
		renderedHeadShape: "triangle",
		headShapeFallback: !1
	}, m = 0;
	for (let e of a) {
		l(e, d), u(e, f);
		let n = te(c.direction, e), i = n == "reverse", a = n == "both", h = i ? d[1] : d[0], _ = i ? f[1] : f[0], v = i ? d[0] : d[1], y = i ? f[0] : f[1], b = v - h, x = y - _, S = Math.hypot(b, x);
		if (S == 0) continue;
		let C = b / S, w = x / S, T = Math.max(I(c.size, e), t.minSize), E = T / 2, D = Math.max(t.headWidth * T, 0) / 2, O = ae({
			segmentLength: S,
			headHalfWidth: D,
			stemHalfWidth: t.stem ? E : -E,
			configuredRHeadSlope: t.configuredRHeadSlope,
			configuredRHeadNotchSlope: t.configuredRHeadNotchSlope,
			headRepeat: t.repeatHeads && !a,
			headPlacement: t.headPlacement,
			startNotch: t.startNotch && !a,
			minStemLength: t.minStemLength,
			headShape: t.headShape,
			bidirectional: a
		}), k = t.headShape == "open" ? O : Math.min(t.configuredRHeadNotchSlope, O), A = t.headShape == "open" ? T : 0, j = t.headPlacement == "outside" ? se(D, O, k, A) : 0, M = v + C * j, N = y + w * j;
		a && (h -= C * j, _ -= w * j);
		let P = D * O, F = Math.hypot(D, P), L = t.headShape == "open" && F > 0 ? T * D / F : 0, R = M - C * (P + L), z = N - w * (P + L), B = a ? h + C * (P + L) : h, V = a ? _ + w * (P + L) : _, H = I(c.strokeWidth, e), ee = Math.max(t.stem ? E : 0, D) + H * 2;
		if (!g(o, Math.min(h, M, R, B), Math.min(_, N, z, V), Math.max(h, M, R, B), Math.max(_, N, z, V), ee) || (m++, s)) continue;
		let U = t.headShape == "triangle" || t.headShape == "open" ? t.headShape : "triangle", W = P + A / Math.hypot(O, 1) + H, ne = !t.repeatHeads || a ? Infinity : Math.max((t.headSpacing ?? 0) * T, W);
		p.datum = e, q(p.tail, h, _), q(p.tip, M, N), q(p.tangent, C, w), q(p.normal, -w, C), q(p.reverseTangent, -C, -w), q(p.reverseNormal, w, -C), p.size = T, p.stemHalfWidth = E, p.headHalfWidth = D, p.headAxisLength = P, p.rHeadSlope = O, p.rHeadNotchSlope = k, p.strokeWidth = H, p.repeatSpacing = ne, p.headRepeatFootprint = W, p.geometryLength = Math.hypot(M - h, N - _), p.bidirectional = a, p.stemContainsHead = t.stem && U == "triangle" && (!t.repeatHeads || a) && D <= E, p.renderedHeadShape = U, p.headShapeFallback = U != t.headShape, r(p);
	}
	return m;
}
function te(e, t) {
	let n = z(e, t);
	switch (n) {
		case "forward":
		case "reverse":
		case "both": return n;
		default: throw Error(`Invalid value for "direction" channel: ${n}`);
	}
}
function W(e, t) {
	e.bidirectional && !e.stemContainsHead && t(e.tail.x, e.tail.y, e.reverseTangent, e.reverseNormal);
	for (let n = 0; !e.stemContainsHead && !(n > 0 && n + e.headRepeatFootprint - e.strokeWidth / 2 > e.geometryLength || (t(e.tip.x - e.tangent.x * n, e.tip.y - e.tangent.y * n, e.tangent, e.normal), !(e.repeatSpacing > 0) || !Number.isFinite(e.repeatSpacing))); n += e.repeatSpacing);
}
function ne(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = G(G(e, K(t, -o)), K(n, r)), l = G(G(e, K(t, -o)), K(n, -r));
	return [
		e,
		c,
		G(e, K(t, -s)),
		l
	];
}
function re(e, t, n, r, i, a, o, s) {
	let c = i * a, l = G(G(t, K(n, -c)), K(r, i)), u = G(G(t, K(n, -c)), K(r, -i)), d = G(e, K(r, i)), f = G(e, K(r, -i));
	return s ? [
		t,
		l,
		G(G(e, K(n, c)), K(r, i)),
		e,
		G(G(e, K(n, c)), K(r, -i)),
		u
	] : [
		t,
		l,
		d,
		...o ? [G(e, K(n, i * a))] : [],
		f,
		u
	];
}
function ie(e, t, n, r, i, a, o) {
	let s = r * i, c = G(G(e, K(t, -s)), K(n, r)), l = G(G(e, K(t, -s)), K(n, -r)), u = Math.hypot(r, s), d = u > 0 ? o * r / u : 0, f = u > 0 ? o * s / u : 0, p = G(G(c, K(t, -d)), K(n, -f)), m = G(G(l, K(t, -d)), K(n, f));
	return [
		e,
		c,
		p,
		G(e, K(t, -(s + d - (r - f) * a))),
		m,
		l
	];
}
function ae({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l, bidirectional: u }) {
	if (a || n < 0) return r;
	if (o == "outside") return !s || n <= 0 ? r : Math.min(r, Math.max(e - c, 0) / n);
	if (l != "triangle") return r;
	let d = Math.max(e - c, 0) / (u ? 2 : 1);
	return oe(n, t, r, i) <= d ? r : d < n * i ? n > 0 ? le(d / n, 0, r) : 0 : le((d + (t - n) * i) / t, 0, r);
}
function oe(e, t, n, r) {
	return t * n - (t - e) * Math.min(r, n);
}
function se(e, t, n, r) {
	if (e <= 0) return 0;
	let i = e * t, a = Math.hypot(e, i);
	return i + r * e / a - (e - r * i / a) * n;
}
function ce(e) {
	let t = le(e, 1, 90) * Math.PI / 180;
	return 1 / Math.max(Math.tan(t), 1e-6);
}
function G(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function K(e, t) {
	return {
		x: e.x * t,
		y: e.y * t
	};
}
function q(e, t, n) {
	e.x = t, e.y = n;
}
function le(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../core/src/rendering/immediate/linkFading.js
var ue = 4;
function de(e, t, n) {
	let r = t[0] - e[0], i = t[1] - e[1], a = Math.hypot(r, i);
	if (a == 0) return;
	let o = -i / a, s = r / a;
	(o < 0 || o == 0 && s < 0) && (o = -o, s = -s);
	let c = o * e[0] + s * e[1], [l, u] = n, d = JSON.stringify([
		J(o, 6),
		J(s, 6),
		J(c, 1),
		J(l, 1),
		J(u, 1)
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
function fe(e, t, n = !1) {
	let r = B(e, e.properties.arcFadingDistance);
	return t != "arc" && t != "dome" || r === !1 || r[0] <= 0 || r[1] <= 0 || n && B(e, e.properties.noFadingOnSecondPass) ? !1 : r;
}
function pe(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= ue; i++) {
			let a = i / ue, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - me(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function me(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function J(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/linkGeometry.js
function he(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = X(a, i), s = ye(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = Z(o, 1 / s), l = [-c[1], c[0]];
		s = ge(i, a, s, r.maxChordLength, n);
		let u = Z(l, Math.max(s / 2 * r.arcHeightFactor, r.minArcHeight) / .75);
		return [
			i,
			Y(i, u),
			Y(a, u),
			a
		];
	} else if (r.shape == "dome") {
		let i, a, o;
		r.orient == "vertical" ? (i = [Math.min(e[0], t[0]), t[1]], a = [Math.max(e[0], t[0]), t[1]], o = [0, e[1] - t[1]]) : (i = [t[0], Math.min(e[1], t[1])], a = [t[0], Math.max(e[1], t[1])], o = [e[0] - t[0], 0]);
		let s = ye(X(a, i));
		ge(i, a, s, r.maxChordLength, n), r.clampApex && _e(i, a, r.orient, n);
		let c = Z(o, 1 / .75);
		return [
			i,
			Y(i, c),
			Y(a, c),
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
		let n = Z(Y(e, t), .5);
		return [
			e,
			n,
			n,
			t
		];
	} else throw Error(`Unsupported link shape: ${r.shape}`);
}
function ge(e, t, n, r, i) {
	if (n <= r) return n;
	let a = Z(X(t, e), 1 / n);
	return ve(e, i, 2) ? (be(t, Y(e, Z(a, r))), r) : ve(t, i, 2) ? (be(e, X(t, Z(a, r))), r) : n;
}
function _e(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function ve(e, t, n) {
	return e[0] >= -t.width * n && e[0] <= t.width * (1 + n) && e[1] >= -t.height * n && e[1] <= t.height * (1 + n);
}
function Y(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function X(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function Z(e, t) {
	return [e[0] * t, e[1] * t];
}
function ye(e) {
	return Math.hypot(e[0], e[1]);
}
function be(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/rendering/immediate/marks/link.js
function xe(e) {
	let t = e.properties;
	return {
		shape: B(e, t.linkShape),
		orient: B(e, t.orient),
		arcHeightFactor: B(e, t.arcHeightFactor),
		minArcHeight: B(e, t.minArcHeight),
		maxChordLength: B(e, t.maxChordLength),
		clampApex: B(e, t.clampApex)
	};
}
function Se(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = P(i, s, "x", a[0]), l = P(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = i.x, p = i.y, m = {
		width: i.width,
		height: i.height
	}, h = p + m.height, _ = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, p] = d, v = he([n - f, h - a], [i - f, h - p], m, t);
		for (let e of v) e[0] += f, e[1] = h - e[1];
		let [y, b, x, S] = v, C = I(s.size, e);
		g(o, Math.min(y[0], b[0], x[0], S[0]), Math.min(y[1], b[1], x[1], S[1]), Math.max(y[0], b[0], x[0], S[0]), Math.max(y[1], b[1], x[1], S[1]), C / 2) && (_++, r({
			datum: e,
			points: v,
			strokeWidth: C
		}));
	}
	return _;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/point.js
function Ce(e) {
	return { inwardStroke: B(e, e.properties.inwardStroke) };
}
function we(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, anchorCullBounds: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = P(i, u, "x", a[c]), f = P(i, u, "y", a[c]), p = [0, 0], m = [0, 0], _ = e.getSemanticThreshold(), v = {
		datum: {},
		shape: "circle",
		x: 0,
		y: 0,
		geometryRadius: 0,
		boundsRadius: 0,
		angle: 0,
		strokeWidth: 0,
		lineShape: !1
	}, y = 0;
	for (let e = c; e < l; e++) {
		let n = a[e];
		if (I(u.semanticScore, n) < _) continue;
		d(n, p), f(n, m);
		let i = p[0] + I(u.dx, n), c = m[0] - I(u.dy, n);
		if (h(s, i, c)) continue;
		let l = Math.sqrt(I(u.size, n)) / 2;
		if (t.inwardStroke && l <= 0) continue;
		let b = z(u.shape, n), x = I(u.strokeWidth, n), S = b == "x" || b == "+", C = t.inwardStroke && !S ? Math.min(x, l) : x, w = t.inwardStroke && !S ? l - C / 2 : l, T = t.inwardStroke ? 0 : x / 2, E = l * Math.SQRT2 + T;
		g(o, i - E, c - E, i + E, c + E) && (y++, v.datum = n, v.shape = b, v.x = i, v.y = c, v.geometryRadius = w, v.boundsRadius = E, v.angle = I(u.angle, n), v.strokeWidth = C, v.lineShape = S, r(v));
	}
	return y;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/pointPath.js
function Te(e, t, n, r, i) {
	let a = r * .4, o = r * .15, s = Math.sqrt(3) * r / 2;
	switch (e) {
		case "diamond": return i.moveTo(t, n - r), i.lineTo(t + r, n), i.lineTo(t, n + r), i.lineTo(t - r, n), i.closePath(), !0;
		case "cross": return i.moveTo(t - a, n - r), i.lineTo(t + a, n - r), i.lineTo(t + a, n - a), i.lineTo(t + r, n - a), i.lineTo(t + r, n + a), i.lineTo(t + a, n + a), i.lineTo(t + a, n + r), i.lineTo(t - a, n + r), i.lineTo(t - a, n + a), i.lineTo(t - r, n + a), i.lineTo(t - r, n - a), i.lineTo(t - a, n - a), i.closePath(), !0;
		case "triangle-up": return i.moveTo(t, n - s), i.lineTo(t + r, n + s), i.lineTo(t - r, n + s), i.closePath(), !0;
		case "triangle-right": return i.moveTo(t + s, n), i.lineTo(t - s, n + r), i.lineTo(t - s, n - r), i.closePath(), !0;
		case "triangle-down": return i.moveTo(t, n + s), i.lineTo(t - r, n - s), i.lineTo(t + r, n - s), i.closePath(), !0;
		case "triangle-left": return i.moveTo(t - s, n), i.lineTo(t + s, n - r), i.lineTo(t + s, n + r), i.closePath(), !0;
		case "tick-up": return Q(i, t - o, n - r, t + o, n), !0;
		case "tick-right": return Q(i, t, n - o, t + r, n + o), !0;
		case "tick-down": return Q(i, t - o, n, t + o, n + r), !0;
		case "tick-left": return Q(i, t - r, n - o, t, n + o), !0;
		case "+": return i.moveTo(t - r, n), i.lineTo(t + r, n), i.moveTo(t, n - r), i.lineTo(t, n + r), !0;
		case "x": return i.moveTo(t - r, n - r), i.lineTo(t + r, n + r), i.moveTo(t + r, n - r), i.lineTo(t - r, n + r), !0;
		default: return !1;
	}
}
function Q(e, t, n, r, i) {
	e.moveTo(t, n), e.lineTo(r, n), e.lineTo(r, i), e.lineTo(t, i), e.closePath();
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rect.js
var Ee = .1;
function De(e) {
	let t = e.properties, n = B(e, t.cornerRadius), r = {
		topLeft: B(e, t.cornerRadiusTopLeft ?? n),
		topRight: B(e, t.cornerRadiusTopRight ?? n),
		bottomRight: B(e, t.cornerRadiusBottomRight ?? n),
		bottomLeft: B(e, t.cornerRadiusBottomLeft ?? n)
	}, i = {
		blur: B(e, t.shadowBlur ?? 0),
		color: B(e, t.shadowColor ?? "black"),
		offsetX: B(e, t.shadowOffsetX ?? 0),
		offsetY: B(e, t.shadowOffsetY ?? 0),
		opacity: B(e, t.shadowOpacity ?? 0)
	}, a = B(e, t.hatch ?? "none"), o = !je(r);
	return {
		cornerRadii: r,
		minWidth: B(e, t.minWidth),
		minHeight: B(e, t.minHeight),
		minOpacity: B(e, t.minOpacity),
		shadow: i,
		hatch: a,
		hasCornerRadii: o,
		canPadSeams: a == "none" && i.opacity == 0 && !o
	};
}
function Oe(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, viewOpacity: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = u.strokeWidth.constant, f = u.fillOpacity.constant, p = d ? I(u.strokeWidth, a[c]) : 0, m = f ? I(u.fillOpacity, a[c]) : 0, h = u.fill.constant, _ = h ? V(u.fill(a[c])) : "none", v = t.shadow.opacity > 0 ? t.shadow.blur + Math.max(Math.abs(t.shadow.offsetX), Math.abs(t.shadow.offsetY)) : 0, y = P(i, u, "x", a[c]), b = P(i, u, "y", a[c]), x = [0, 0], S = [0, 0], C = {
		datum: {},
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		radii: {
			topLeft: 0,
			topRight: 0,
			bottomRight: 0,
			bottomLeft: 0
		},
		opacityFactor: 1,
		strokeWidth: 0,
		fill: "none",
		fillOpacity: 0
	}, w = 0;
	for (let e = c; e < l; e++) {
		let n = a[e];
		y(n, x), b(n, S);
		let i = Math.min(x[0], x[1]), c = Math.min(S[0], S[1]), l = Math.abs(x[1] - x[0]), T = Math.abs(S[1] - S[0]), E = ke(l, t.minWidth), D = ke(T, t.minHeight), O = Math.max(t.minOpacity, E * D);
		l < t.minWidth && (i -= (t.minWidth - l) / 2, l = t.minWidth), T < t.minHeight && (c -= (t.minHeight - T) / 2, T = t.minHeight);
		let k = d ? p : I(u.strokeWidth, n), A = h ? _ : V(u.fill(n)), j = (f ? m : I(u.fillOpacity, n)) * s, M = k == 0 && j == 1 && O == 1 && t.canPadSeams && A != "none" ? Ee : 0;
		M && (i -= M, c -= M, l += M * 2, T += M * 2), g(o, i, c, i + l, c + T, k / 2 + v) && (w++, C.datum = n, C.x = i, C.y = c, C.width = l, C.height = T, C.opacityFactor = O, C.strokeWidth = k, C.fill = A, C.fillOpacity = j, t.hasCornerRadii && Ae(t.cornerRadii, l, T, C.radii), r(C));
	}
	return w;
}
function ke(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function Ae(e, t, n, r) {
	let i = Math.min(t, n) / 2;
	r.topLeft = Math.max(0, Math.min(e.topLeft, i)), r.topRight = Math.max(0, Math.min(e.topRight, i)), r.bottomRight = Math.max(0, Math.min(e.bottomRight, i)), r.bottomLeft = Math.max(0, Math.min(e.bottomLeft, i));
}
function je(e) {
	return e.topLeft == 0 && e.topRight == 0 && e.bottomRight == 0 && e.bottomLeft == 0;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rule.js
function Me(e) {
	return { minLength: B(e, e.properties.minLength) };
}
function Ne(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = P(i, s, "x", a[0]), l = P(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = {
		datum: {},
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		strokeWidth: 0
	}, p = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, m] = d, h = i - n, _ = m - a, v = Math.hypot(h, _);
		if (v > 0 && v < t.minLength) {
			let e = (t.minLength - v) / 2, r = h / v, o = _ / v;
			n -= r * e, a -= o * e, i += r * e, m += o * e;
		}
		let y = I(s.size, e);
		g(o, n, a, i, m, y / 2) && (p++, f.datum = e, f.x1 = n, f.y1 = a, f.x2 = i, f.y2 = m, f.strokeWidth = y, r(f));
	}
	return p;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/text.js
function Pe(e) {
	let t = e.properties;
	return {
		align: B(e, t.align),
		baseline: B(e, t.baseline),
		logoLetters: B(e, t.logoLetters),
		paddingX: B(e, t.paddingX),
		paddingY: B(e, t.paddingY),
		flushX: B(e, t.flushX),
		flushY: B(e, t.flushY),
		squeeze: B(e, t.squeeze),
		dx: B(e, t.dx),
		dy: B(e, t.dy)
	};
}
function Fe(t, r, a, o) {
	let { coords: s, data: c, visibleBounds: l, anchorCullBounds: u } = a, { align: d, baseline: f } = r, p = t.encoders;
	if (c.length == 0) return 0;
	let m = p.size.constant ? I(p.size, c[0]) : 0, g = p.angle.constant ? I(p.angle, c[0]) : 0, _ = P(s, p, "x", c[0]), v = P(s, p, "y", c[0]), y = t.encoding.text, b = "format" in y ? n(y.format) : (e) => e, x = [0, 0], S = [0, 0], C = {
		width: 0,
		height: 0
	}, w = {
		x: 0,
		y: 0
	}, T = {
		position: 0,
		scale: 0
	}, E = {
		scaleX: 0,
		scaleY: 0,
		originX: 0,
		originY: 0
	}, D = Array(8).fill(0), O = {
		datum: {},
		text: "",
		x: 0,
		y: 0,
		size: 0,
		width: 0,
		angle: 0,
		dx: r.dx,
		dy: r.dy,
		fadeOpacity: 1,
		scale: 1,
		logoTransform: void 0,
		multiCharacterLogo: !1,
		boundsQuad: D
	}, k = !!p.x2, A = !!p.y2, j = 0;
	for (let t of c) {
		let n = b(p.text(t)), c = i(n) ? n : n === null ? "" : "" + n;
		if (!c) continue;
		_(t, x), v(t, S);
		let [y, M] = x, [N, P] = S, F = p.size.constant ? m : I(p.size, t), L = p.angle.constant ? g : I(p.angle, t);
		if (r.logoLetters) {
			let e = F, n = F;
			if (k && (e = M - y, y = (y + M) / 2), A && (n = N - P, N = (N + P) / 2), Ie(D, y, N, Math.abs(e), Math.abs(n), "center", "middle", L, r.dx, r.dy), !e || !n || h(u, y, N) || !Le(l, D)) continue;
			let i = a.measureLogoInkBounds(c);
			if (!i) continue;
			j++, O.datum = t, O.text = c, O.x = y, O.y = N, O.size = 100, O.width = i.xMax - i.xMin, O.angle = L, O.fadeOpacity = 1, O.scale = 1, E.scaleX = e / O.width, E.scaleY = n / (i.yMax - i.yMin), E.originX = (i.xMin + i.xMax) / 2, E.originY = (i.yMin + i.yMax) / 2, O.logoTransform = E, O.multiCharacterLogo = c.length > 1, o(O);
			continue;
		}
		let R = a.fontMeasurement.measureWidth(c, F);
		Re(R, F, L, C), k || A ? Be(d, f, L, w) : (w.x = Ve[d], w.y = He[f]);
		let z = 1;
		if (k && (ze(Math.min(y, M), Math.max(y, M), C.width, r.paddingX, w.x, r.flushX, s.x, s.x2, T), y = T.position, z *= T.scale), A && (ze(Math.min(N, P), Math.max(N, P), C.height * z, r.paddingY, w.y, r.flushY, s.y, s.y2, T), N = T.position, z *= T.scale), h(u, y, N)) continue;
		let B = 1;
		if (z < 1) {
			if (!r.squeeze || z < 3 / F) continue;
			B = e(3 / F, 6 / F, z);
		}
		let V = F * z, H = R * z;
		Ie(D, y, N, H, V, d, f, L, r.dx, r.dy), Le(l, D) && (j++, O.datum = t, O.text = c, O.x = y, O.y = N, O.size = F, O.width = H, O.angle = L, O.fadeOpacity = B, O.scale = z, O.logoTransform = void 0, O.multiCharacterLogo = !1, o(O));
	}
	return j;
}
function Ie(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - (Ve[a] + 1) / 2 * r, d = n + l - (He[o] + 1) / 2 * i, f = u + r, p = d + i, m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m);
	return $(e, 0, t, n, u, d, h, g), $(e, 2, t, n, f, d, h, g), $(e, 4, t, n, f, p, h, g), $(e, 6, t, n, u, p, h, g), e;
}
function Le(e, t) {
	return g(e, Math.min(t[0], t[2], t[4], t[6]), Math.min(t[1], t[3], t[5], t[7]), Math.max(t[0], t[2], t[4], t[6]), Math.max(t[1], t[3], t[5], t[7]), 1);
}
function $(e, t, n, r, i, a, o, s) {
	e[t] = n + (i - n) * s - (a - r) * o, e[t + 1] = r + (i - n) * o + (a - r) * s;
}
function Re(e, t, n, r) {
	let i = n * Math.PI / 180, a = Math.abs(Math.sin(i)), o = Math.abs(Math.cos(i));
	r.width = e * o + t * a, r.height = e * a + t * o;
}
function ze(e, t, n, r, i, a, o, s, c) {
	let l = t - e, u = n + 2 * r;
	if (e > s || t < o) {
		c.position = 0, c.scale = 0;
		return;
	}
	let d = Math.max(0, l - u), f;
	if (i == 0) {
		let n = e + t;
		if (a) {
			let e = Math.max(0, 2 * o + u - n);
			n += Math.min(e, d);
			let t = Math.max(0, u + n - 2 * s);
			n -= Math.min(t, d);
		}
		f = n / 2;
	} else if (i < 0) {
		let t = e;
		a && (t += Math.min(Math.max(0, o - t), d)), f = t + r;
	} else {
		let e = t;
		a && (e -= Math.min(Math.max(0, e - s), d)), f = e - r;
	}
	c.position = f, c.scale = Math.max(0, Math.min(1, (l - r) / u));
}
function Be(e, t, n, r) {
	let i = Ve[e], a = -He[t], o = ((n + 45) % 360 + 360) % 360, s, c;
	o < 90 ? (s = i, c = a) : o < 180 ? (s = a, c = -i) : o < 270 ? (s = -i, c = a) : (s = -a, c = i), r.x = s, r.y = -c;
}
var Ve = {
	left: -1,
	center: 0,
	right: 1
}, He = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Ue = [
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
], We = /* @__PURE__ */ new Set([
	"serif",
	"sans-serif",
	"monospace",
	"cursive",
	"fantasy",
	"system-ui",
	"ui-serif",
	"ui-sans-serif",
	"ui-monospace",
	"ui-rounded",
	"emoji",
	"math",
	"fangsong"
]), Ge = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function Ke(e) {
	let t = e ?? "Lato";
	return [t, ...Ue.filter((e) => e.toLowerCase() != t.toLowerCase())].map(Xe).join(", ");
}
function qe(e) {
	if (typeof e == "number") return e;
	let t = Ge[e];
	if (t === void 0) throw Error("Unknown font weight: " + e);
	return t;
}
function Je(e) {
	return {
		style: e.fontStyle ?? "normal",
		weight: qe(e.fontWeight ?? "normal"),
		family: Ke(e.font)
	};
}
function Ye(e, t) {
	switch (e) {
		case "top": return .79 * t;
		case "middle": return .35 * t;
		case "bottom": return -.21 * t;
		case "alphabetic":
		case "baseline": return 0;
		default: throw Error(`Unknown text baseline: ${e}`);
	}
}
function Xe(e) {
	let t = e.toLowerCase();
	return We.has(t) ? t : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
//#region ../core/src/rendering/nativeTextMetrics.js
var Ze = "Mg", Qe = 100, $e = class {
	#e;
	#t;
	#n = new t([], JSON.stringify);
	#r = [];
	#i;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.fontKerning = "normal", e.direction = "ltr", e.textAlign = "left", e.textBaseline = "alphabetic";
	}
	requestFont(e) {
		let t = Je(e), n = this.#n.get(t);
		if (!n) {
			n = new et((e, n) => this.#a(t, e, n)), this.#n.set(t, n);
			let e = this.#t?.load(rt(t, 16));
			e && this.#r.push(e.then(() => n.invalidateCache()));
		}
		return n;
	}
	async waitUntilReady() {
		await Promise.all(this.#r);
	}
	#a(e, t, n) {
		let r = rt(e, n);
		return r != this.#i && (this.#e.font = r, this.#i = r), this.#e.measureText(t);
	}
}, et = class {
	#e;
	#t = NaN;
	#n = /* @__PURE__ */ new Float64Array(128);
	#r = NaN;
	#i = Array(128);
	constructor(e) {
		this.#e = e, this.#n.fill(NaN);
	}
	measureWidth(e, t) {
		this.#a(t);
		let n = e.length == 1 ? e.charCodeAt(0) : 128;
		if (n < 128) {
			let r = this.#n[n];
			if (!Number.isNaN(r)) return r;
			let i = this.#e(e, t).width;
			return this.#n[n] = i, i;
		}
		return this.#e(e, t).width;
	}
	getHeight(e) {
		if (this.#a(e), Number.isNaN(this.#r)) {
			let t = this.#e(Ze, e);
			this.#r = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
		}
		return this.#r;
	}
	measureInkBounds(e) {
		let t = e.length == 1 ? e.charCodeAt(0) : 128;
		if (t < 128 && this.#i[t] !== void 0) return this.#i[t];
		let n = tt(this.#e(e, Qe));
		return t < 128 && (this.#i[t] = n), n;
	}
	invalidateCache() {
		this.#t = NaN, this.#n.fill(NaN), this.#r = NaN, this.#i.fill(void 0);
	}
	#a(e) {
		e != this.#t && (this.#t = e, this.#n.fill(NaN), this.#r = NaN);
	}
};
function tt(e) {
	let t = {
		xMin: -e.actualBoundingBoxLeft,
		xMax: e.actualBoundingBoxRight,
		yMin: -e.actualBoundingBoxAscent,
		yMax: e.actualBoundingBoxDescent
	};
	return t.xMax > t.xMin && t.yMax > t.yMin ? t : null;
}
function nt(e, t) {
	let n = e.requestFont(t);
	return n instanceof et ? (e) => n.measureInkBounds(e) : (e) => {
		let t = n.measureWidth(e, Qe), r = n.getHeight(Qe);
		return t > 0 && r > 0 ? {
			xMin: 0,
			xMax: t,
			yMin: -r,
			yMax: 0
		} : null;
	};
}
function rt(e, t) {
	return `${e.style} ${e.weight} ${t}px ${e.family}`;
}
function it(e) {
	let t = e.createElement("canvas").getContext("2d");
	if (!t) throw Error("Canvas2D text measurement is unavailable.");
	return new $e(t, e.fonts);
}
async function at(e, t) {
	t.visit((t) => {
		let n = t.mark;
		n?.getType() == "text" && e.requestFont(n.properties);
	}), await e.waitUntilReady();
}
//#endregion
//#region ../core/src/rendering/immediate/order.js
function ot(e, t, n, r, i) {
	let a = [], o = [];
	for (let i = t; i < n; i++) {
		let t = e[i];
		(r(t) ? a : o).push(t);
	}
	return i.map((e) => e === "matching" ? a : o);
}
//#endregion
export { V as A, W as C, M as D, I as E, c as F, u as I, f as M, m as N, N as O, g as P, H as S, U as T, xe as _, Ke as a, de as b, Pe as c, Ne as d, De as f, we as g, Ce as h, nt as i, p as j, B as k, Fe as l, Te as m, it as n, Ye as o, Oe as p, at as r, qe as s, ot as t, Me as u, Se as v, ee as w, fe as x, pe as y };
