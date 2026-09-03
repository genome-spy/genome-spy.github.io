import { Nt as e, R as t, Xt as n, u as r } from "./clipOptions-taFzEljc.js";
import { t as i } from "./rectangle-DKnrAmKs.js";
//#region ../core/src/rendering/immediate/markData.js
var a = [], o = class {
	#e = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	#t = new i(() => this.#e.x, () => this.#e.y, () => this.#e.width, () => this.#e.height);
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
function s(e, t) {
	let n = e.unitView.getCollector();
	if (!n) throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);
	let r = n.facetBatches.get(void 0);
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? a;
}
function c(e, t, n, r, i, a) {
	let o = s(e, t);
	if (t.sampleFacetRenderingOptions) i(r.resolveFacet(n, t.sampleFacetRenderingOptions), o);
	else if (e.encoders.facetIndex) for (let [s, c] of l(e.encoders.facetIndex, o)) {
		let e = r.resolvePlacement(n, t.placement?.source, s);
		e ? i(e, c) : a(s);
	}
	else i(n, o);
}
function l(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
//#endregion
//#region ../core/src/rendering/immediate/bounds.js
function u(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function d(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function f(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function p(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function m(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/polygonUnion.js
var h = 1e-8;
function g(e) {
	let t = e.flatMap((e, t) => e.map((n, r) => ({
		a: n,
		b: e[(r + 1) % e.length],
		polygonIndex: t
	}))), n = [];
	for (let r of t) {
		let i = [0, 1];
		for (let e of t) r.polygonIndex != e.polygonIndex && _(r, e, i);
		i.sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let a = i[t], o = i[t + 1];
			if (o - a <= h) continue;
			let s = C(r.a, r.b, a), c = C(r.a, r.b, o), l = C(s, c, .5);
			e.some((e, t) => t != r.polygonIndex && x(l, e)) || n.push({
				a: s,
				b: c,
				polygonIndex: r.polygonIndex
			});
		}
	}
	return b(y(n));
}
function _(e, t, n) {
	let r = T(e.b, e.a), i = T(t.b, t.a), a = T(t.a, e.a), o = D(r, i);
	if (Math.abs(o) > h) {
		let e = D(a, i) / o, t = D(a, r) / o;
		e > h && e < 1 - h && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(D(a, r)) <= h && (v(e, t.a, n), v(e, t.b, n));
}
function v(e, t, n) {
	let r = T(e.b, e.a), i = E(r, r), a = E(T(t, e.a), r) / i;
	a > h && a < 1 - h && n.push(a);
}
function y(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = w(n.a) + ":" + w(n.b), r = w(n.b) + ":" + w(n.a);
		t.has(r) ? t.delete(r) : t.has(e) || t.set(e, n);
	}
	return Array.from(t.values());
}
function b(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = w(n.a), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	let n = new Set(e), r = [];
	for (; n.size;) {
		let e = n.values().next().value, i = [e.a], a = e;
		for (;;) {
			if (n.delete(a), i.push(a.b), w(a.b) == w(i[0])) {
				i.pop();
				break;
			}
			let e = (t.get(w(a.b)) ?? []).find((e) => n.has(e));
			if (!e) throw Error("Cannot chain SVG polygon union boundary.");
			a = e;
		}
		r.push(i);
	}
	return r;
}
function x(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let a = t[i], o = t[r];
		if (S(e, a, o)) return !1;
		a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}
function S(e, t, n) {
	return Math.abs(D(T(e, t), T(n, t))) <= h && E(T(e, t), T(e, n)) <= h;
}
function C(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function w(e) {
	return `${Math.round(e.x / h)},${Math.round(e.y / h)}`;
}
function T(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function E(e, t) {
	return e.x * t.x + e.y * t.y;
}
function D(e, t) {
	return e.x * t.y - e.y * t.x;
}
//#endregion
//#region ../core/src/rendering/immediate/markEncoding.js
function O(e, t, n) {
	return e.x + t * e.width + n;
}
function k(e, t, n) {
	return e.y + (1 - t) * e.height + n;
}
function A(e, t, n, r = [0, 0]) {
	return N(e, t.x, t.x2, t.xOffset, t.x2Offset, n, O, r);
}
function j(e, t, n, r = [0, 0]) {
	return N(e, t.y, t.y2, t.yOffset, t.y2Offset, n, k, r);
}
function M(e, t, n, r) {
	let i = t[n], a = t[n + "2"], o = t[n + "Offset"], s = t[n + "2Offset"], c = n == "x" ? e.width : e.height, l = n == "x" ? e.x : e.y + c, u = n == "x" ? c : -c, d = I(i), f = a ? I(a) : 0, p = i.constant ? P(i, r) + d : 0, m = a?.constant ? P(a, r) + f : 0, h = o.constant ? P(o, r) : 0, g = a && s?.constant ? P(s, r) : 0;
	return (e, t) => {
		let n = o.constant ? h : P(o, e), r = i.constant ? p : P(i, e) + d, c = l + r * u + n, _ = c;
		if (a) {
			let t = a.constant ? m : P(a, e) + f, r = s ? s.constant ? g : P(s, e) : n;
			_ = l + t * u + r;
		}
		return t[0] = c, t[1] = _, t;
	};
}
function N(e, t, n, r, i, a, o, s) {
	let c = P(r, a), l = o(e, F(t, a), c), u = n ? o(e, F(n, a), i ? P(i, a) : c) : l;
	return s[0] = l, s[1] = u, s;
}
function P(e, t) {
	return e(t);
}
function F(e, t) {
	return P(e, t) + I(e);
}
function I(e) {
	let t = e.scale;
	if (!t) return 0;
	let n = e.channelDef, r = n && "band" in n ? n.band ?? .5 : .5;
	if (t.type == "band" || t.type == "point") return t.bandwidth() * r;
	if (t.type == "index" || t.type == "locus") {
		let e = t;
		return Math.sign(e.step()) * e.bandwidth() * (r - e.align());
	} else return 0;
}
function L(e, t) {
	return z(e(t));
}
function R(e, t) {
	return r(t) ? e.unitView.paramRuntime.evaluateAndGet(t.expr) : t;
}
function z(e) {
	return e == null ? "none" : "" + e;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/arrow.js
function B(e) {
	let t = e.properties, n = R(e, t.headSpacing);
	return {
		configuredRHeadSlope: oe(R(e, t.headAngle)),
		configuredRHeadNotchSlope: oe(R(e, t.headNotchAngle)),
		headShape: R(e, t.headShape),
		headWidth: R(e, t.headWidth),
		minSize: R(e, t.minSize),
		stem: R(e, t.stem),
		startNotch: R(e, t.startNotch),
		minStemLength: R(e, t.minStemLength),
		headSpacing: n,
		repeatHeads: n != null && n >= 0,
		headPlacement: R(e, t.headPlacement)
	};
}
function V(e, t, n, r) {
	let { viewOpacity: i } = n, a = e.encoders;
	return H(e, t, n, (e) => {
		let n = t.stem ? te(e.tail, e.tip, e.tangent, e.normal, e.stemHalfWidth, e.rHeadSlope, t.startNotch) : null, o = n ? [n] : [];
		U(e, (t, n) => {
			let r = {
				x: t,
				y: n
			};
			o.push(e.renderedHeadShape == "open" ? ne(r, e.tangent, e.normal, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope, e.size) : ee(r, e.tangent, e.normal, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope));
		});
		let s = z(a.stroke(e.datum)) != "none" && P(a.strokeOpacity, e.datum) * i > 0 && e.strokeWidth > 0;
		r({
			datum: e.datum,
			boundaryLoops: o.length == 1 || !s ? o : g(o),
			strokeWidth: e.strokeWidth,
			headShapeFallback: e.headShapeFallback
		});
	});
}
function H(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, countOnly: s } = n, c = e.encoders;
	if (a.length == 0) return 0;
	let l = M(i, c, "x", a[0]), u = M(i, c, "y", a[0]), d = [0, 0], f = [0, 0], p = {
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
		stemContainsHead: !1,
		renderedHeadShape: "triangle",
		headShapeFallback: !1
	}, h = 0;
	for (let e of a) {
		l(e, d), u(e, f);
		let n = L(c.direction, e) == "reverse", i = n ? d[1] : d[0], a = n ? f[1] : f[0], g = n ? d[0] : d[1], _ = n ? f[0] : f[1], v = g - i, y = _ - a, b = Math.hypot(v, y);
		if (b == 0) continue;
		let x = v / b, S = y / b, C = Math.max(P(c.size, e), t.minSize), w = C / 2, T = Math.max(t.headWidth * C, 0) / 2, E = re({
			segmentLength: b,
			headHalfWidth: T,
			stemHalfWidth: t.stem ? w : -w,
			configuredRHeadSlope: t.configuredRHeadSlope,
			configuredRHeadNotchSlope: t.configuredRHeadNotchSlope,
			headRepeat: t.repeatHeads,
			headPlacement: t.headPlacement,
			startNotch: t.startNotch,
			minStemLength: t.minStemLength,
			headShape: t.headShape
		}), D = t.headShape == "open" ? E : Math.min(t.configuredRHeadNotchSlope, E), O = t.headShape == "open" ? C : 0, k = t.headPlacement == "outside" ? ae(T, E, D, O) : 0, A = g + x * k, j = _ + S * k, M = T * E, N = Math.hypot(T, M), F = t.headShape == "open" && N > 0 ? C * T / N : 0, I = A - x * (M + F), R = j - S * (M + F), z = P(c.strokeWidth, e), B = Math.max(t.stem ? w : 0, T) + z * 2;
		if (!m(o, Math.min(i, A, I), Math.min(a, j, R), Math.max(i, A, I), Math.max(a, j, R), B) || (h++, s)) continue;
		let V = t.headShape == "triangle" || t.headShape == "open" ? t.headShape : "triangle", H = M + O / Math.hypot(E, 1) + z, U = t.repeatHeads ? Math.max((t.headSpacing ?? 0) * C, H) : Infinity;
		p.datum = e, K(p.tail, i, a), K(p.tip, A, j), K(p.tangent, x, S), K(p.normal, -S, x), p.size = C, p.stemHalfWidth = w, p.headHalfWidth = T, p.headAxisLength = M, p.rHeadSlope = E, p.rHeadNotchSlope = D, p.strokeWidth = z, p.repeatSpacing = U, p.headRepeatFootprint = H, p.geometryLength = Math.hypot(A - i, j - a), p.stemContainsHead = t.stem && V == "triangle" && !t.repeatHeads && T <= w, p.renderedHeadShape = V, p.headShapeFallback = V != t.headShape, r(p);
	}
	return h;
}
function U(e, t) {
	for (let n = 0; !e.stemContainsHead && !(n > 0 && n + e.headRepeatFootprint - e.strokeWidth / 2 > e.geometryLength || (t(e.tip.x - e.tangent.x * n, e.tip.y - e.tangent.y * n), !(e.repeatSpacing > 0) || !Number.isFinite(e.repeatSpacing))); n += e.repeatSpacing);
}
function ee(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = W(W(e, G(t, -o)), G(n, r)), l = W(W(e, G(t, -o)), G(n, -r));
	return [
		e,
		c,
		W(e, G(t, -s)),
		l
	];
}
function te(e, t, n, r, i, a, o) {
	let s = i * a, c = W(W(t, G(n, -s)), G(r, i)), l = W(W(t, G(n, -s)), G(r, -i)), u = W(e, G(r, i)), d = W(e, G(r, -i));
	return [
		t,
		c,
		u,
		...o ? [W(e, G(n, i * a))] : [],
		d,
		l
	];
}
function ne(e, t, n, r, i, a, o) {
	let s = r * i, c = W(W(e, G(t, -s)), G(n, r)), l = W(W(e, G(t, -s)), G(n, -r)), u = Math.hypot(r, s), d = o * r / u, f = o * s / u, p = W(W(c, G(t, -d)), G(n, -f)), m = W(W(l, G(t, -d)), G(n, f));
	return [
		e,
		c,
		p,
		W(e, G(t, -(s + d - (r - f) * a))),
		m,
		l
	];
}
function re({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l }) {
	if (a || n < 0) return r;
	if (o == "outside") return !s || n <= 0 ? r : Math.min(r, Math.max(e - c, 0) / n);
	if (l != "triangle") return r;
	let u = Math.max(e - c, 0);
	return ie(n, t, r, i) <= u ? r : u < n * i ? n > 0 ? q(u / n, 0, r) : 0 : q((u + (t - n) * i) / t, 0, r);
}
function ie(e, t, n, r) {
	return t * n - (t - e) * Math.min(r, n);
}
function ae(e, t, n, r) {
	if (e <= 0) return 0;
	let i = e * t, a = Math.hypot(e, i);
	return i + r * e / a - (e - r * i / a) * n;
}
function oe(e) {
	let t = q(e, 1, 90) * Math.PI / 180;
	return 1 / Math.max(Math.tan(t), 1e-6);
}
function W(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function G(e, t) {
	return {
		x: e.x * t,
		y: e.y * t
	};
}
function K(e, t, n) {
	e.x = t, e.y = n;
}
function q(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/linkGeometry.js
function se(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = Y(a, i), s = de(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = X(o, 1 / s), l = [-c[1], c[0]];
		s = ce(i, a, s, r.maxChordLength, n);
		let u = X(l, Math.max(s / 2 * r.arcHeightFactor, r.minArcHeight) / .75);
		return [
			i,
			J(i, u),
			J(a, u),
			a
		];
	} else if (r.shape == "dome") {
		let i, a, o;
		r.orient == "vertical" ? (i = [Math.min(e[0], t[0]), t[1]], a = [Math.max(e[0], t[0]), t[1]], o = [0, e[1] - t[1]]) : (i = [t[0], Math.min(e[1], t[1])], a = [t[0], Math.max(e[1], t[1])], o = [e[0] - t[0], 0]);
		let s = de(Y(a, i));
		ce(i, a, s, r.maxChordLength, n), r.clampApex && le(i, a, r.orient, n);
		let c = X(o, 1 / .75);
		return [
			i,
			J(i, c),
			J(a, c),
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
		let n = X(J(e, t), .5);
		return [
			e,
			n,
			n,
			t
		];
	} else throw Error(`Unsupported link shape: ${r.shape}`);
}
function ce(e, t, n, r, i) {
	if (n <= r) return n;
	let a = X(Y(t, e), 1 / n);
	return ue(e, i, 2) ? (fe(t, J(e, X(a, r))), r) : ue(t, i, 2) ? (fe(e, Y(t, X(a, r))), r) : n;
}
function le(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function ue(e, t, n) {
	return e[0] >= -t.width * n && e[0] <= t.width * (1 + n) && e[1] >= -t.height * n && e[1] <= t.height * (1 + n);
}
function J(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function Y(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function X(e, t) {
	return [e[0] * t, e[1] * t];
}
function de(e) {
	return Math.hypot(e[0], e[1]);
}
function fe(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/rendering/immediate/marks/link.js
function pe(e) {
	let t = e.properties;
	return {
		shape: R(e, t.linkShape),
		orient: R(e, t.orient),
		arcHeightFactor: R(e, t.arcHeightFactor),
		minArcHeight: R(e, t.minArcHeight),
		maxChordLength: R(e, t.maxChordLength),
		clampApex: R(e, t.clampApex)
	};
}
function me(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = M(i, s, "x", a[0]), l = M(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = i.x, p = i.y, h = {
		width: i.width,
		height: i.height
	}, g = p + h.height, _ = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, p] = d, v = se([n - f, g - a], [i - f, g - p], h, t);
		for (let e of v) e[0] += f, e[1] = g - e[1];
		let [y, b, x, S] = v, C = P(s.size, e);
		m(o, Math.min(y[0], b[0], x[0], S[0]), Math.min(y[1], b[1], x[1], S[1]), Math.max(y[0], b[0], x[0], S[0]), Math.max(y[1], b[1], x[1], S[1]), C / 2) && (_++, r({
			datum: e,
			points: v,
			strokeWidth: C
		}));
	}
	return _;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/point.js
function he(e) {
	return { inwardStroke: R(e, e.properties.inwardStroke) };
}
function ge(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, anchorCullBounds: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = M(i, u, "x", a[c]), f = M(i, u, "y", a[c]), h = [0, 0], g = [0, 0], _ = e.getSemanticThreshold(), v = {
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
		if (P(u.semanticScore, n) < _) continue;
		d(n, h), f(n, g);
		let i = h[0] + P(u.dx, n), c = g[0] - P(u.dy, n);
		if (p(s, i, c)) continue;
		let l = Math.sqrt(P(u.size, n)) / 2;
		if (t.inwardStroke && l <= 0) continue;
		let b = L(u.shape, n), x = P(u.strokeWidth, n), S = b == "x" || b == "+", C = t.inwardStroke && !S ? Math.min(x, l) : x, w = t.inwardStroke && !S ? l - C / 2 : l, T = t.inwardStroke ? 0 : x / 2, E = l * Math.SQRT2 + T;
		m(o, i - E, c - E, i + E, c + E) && (y++, v.datum = n, v.shape = b, v.x = i, v.y = c, v.geometryRadius = w, v.boundsRadius = E, v.angle = P(u.angle, n), v.strokeWidth = C, v.lineShape = S, r(v));
	}
	return y;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/pointPath.js
function _e(e, t, n, r, i) {
	let a = r * .4, o = r * .15, s = Math.sqrt(3) * r / 2;
	switch (e) {
		case "diamond": return i.moveTo(t, n - r), i.lineTo(t + r, n), i.lineTo(t, n + r), i.lineTo(t - r, n), i.closePath(), !0;
		case "cross": return i.moveTo(t - a, n - r), i.lineTo(t + a, n - r), i.lineTo(t + a, n - a), i.lineTo(t + r, n - a), i.lineTo(t + r, n + a), i.lineTo(t + a, n + a), i.lineTo(t + a, n + r), i.lineTo(t - a, n + r), i.lineTo(t - a, n + a), i.lineTo(t - r, n + a), i.lineTo(t - r, n - a), i.lineTo(t - a, n - a), i.closePath(), !0;
		case "triangle-up": return i.moveTo(t, n - s), i.lineTo(t + r, n + s), i.lineTo(t - r, n + s), i.closePath(), !0;
		case "triangle-right": return i.moveTo(t + s, n), i.lineTo(t - s, n + r), i.lineTo(t - s, n - r), i.closePath(), !0;
		case "triangle-down": return i.moveTo(t, n + s), i.lineTo(t - r, n - s), i.lineTo(t + r, n - s), i.closePath(), !0;
		case "triangle-left": return i.moveTo(t - s, n), i.lineTo(t + s, n - r), i.lineTo(t + s, n + r), i.closePath(), !0;
		case "tick-up": return Z(i, t - o, n - r, t + o, n), !0;
		case "tick-right": return Z(i, t, n - o, t + r, n + o), !0;
		case "tick-down": return Z(i, t - o, n, t + o, n + r), !0;
		case "tick-left": return Z(i, t - r, n - o, t, n + o), !0;
		case "+": return i.moveTo(t - r, n), i.lineTo(t + r, n), i.moveTo(t, n - r), i.lineTo(t, n + r), !0;
		case "x": return i.moveTo(t - r, n - r), i.lineTo(t + r, n + r), i.moveTo(t + r, n - r), i.lineTo(t - r, n + r), !0;
		default: return !1;
	}
}
function Z(e, t, n, r, i) {
	e.moveTo(t, n), e.lineTo(r, n), e.lineTo(r, i), e.lineTo(t, i), e.closePath();
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rect.js
var ve = .1;
function ye(e) {
	let t = e.properties, n = R(e, t.cornerRadius), r = {
		topLeft: R(e, t.cornerRadiusTopLeft ?? n),
		topRight: R(e, t.cornerRadiusTopRight ?? n),
		bottomRight: R(e, t.cornerRadiusBottomRight ?? n),
		bottomLeft: R(e, t.cornerRadiusBottomLeft ?? n)
	}, i = {
		blur: R(e, t.shadowBlur ?? 0),
		color: R(e, t.shadowColor ?? "black"),
		offsetX: R(e, t.shadowOffsetX ?? 0),
		offsetY: R(e, t.shadowOffsetY ?? 0),
		opacity: R(e, t.shadowOpacity ?? 0)
	}, a = R(e, t.hatch ?? "none"), o = !Ce(r);
	return {
		cornerRadii: r,
		minWidth: R(e, t.minWidth),
		minHeight: R(e, t.minHeight),
		minOpacity: R(e, t.minOpacity),
		shadow: i,
		hatch: a,
		hasCornerRadii: o,
		canPadSeams: a == "none" && i.opacity == 0 && !o
	};
}
function be(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, viewOpacity: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = u.strokeWidth.constant, f = u.fillOpacity.constant, p = d ? P(u.strokeWidth, a[c]) : 0, h = f ? P(u.fillOpacity, a[c]) : 0, g = u.fill.constant, _ = g ? z(u.fill(a[c])) : "none", v = t.shadow.opacity > 0 ? t.shadow.blur + Math.max(Math.abs(t.shadow.offsetX), Math.abs(t.shadow.offsetY)) : 0, y = M(i, u, "x", a[c]), b = M(i, u, "y", a[c]), x = [0, 0], S = [0, 0], C = {
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
		let i = Math.min(x[0], x[1]), c = Math.min(S[0], S[1]), l = Math.abs(x[1] - x[0]), T = Math.abs(S[1] - S[0]), E = xe(l, t.minWidth), D = xe(T, t.minHeight), O = Math.max(t.minOpacity, E * D);
		l < t.minWidth && (i -= (t.minWidth - l) / 2, l = t.minWidth), T < t.minHeight && (c -= (t.minHeight - T) / 2, T = t.minHeight);
		let k = d ? p : P(u.strokeWidth, n), A = g ? _ : z(u.fill(n)), j = (f ? h : P(u.fillOpacity, n)) * s, M = k == 0 && j == 1 && O == 1 && t.canPadSeams && A != "none" ? ve : 0;
		M && (i -= M, c -= M, l += M * 2, T += M * 2), m(o, i, c, i + l, c + T, k / 2 + v) && (w++, C.datum = n, C.x = i, C.y = c, C.width = l, C.height = T, C.opacityFactor = O, C.strokeWidth = k, C.fill = A, C.fillOpacity = j, t.hasCornerRadii && Se(t.cornerRadii, l, T, C.radii), r(C));
	}
	return w;
}
function xe(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function Se(e, t, n, r) {
	let i = Math.min(t, n) / 2;
	r.topLeft = Math.max(0, Math.min(e.topLeft, i)), r.topRight = Math.max(0, Math.min(e.topRight, i)), r.bottomRight = Math.max(0, Math.min(e.bottomRight, i)), r.bottomLeft = Math.max(0, Math.min(e.bottomLeft, i));
}
function Ce(e) {
	return e.topLeft == 0 && e.topRight == 0 && e.bottomRight == 0 && e.bottomLeft == 0;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rule.js
function we(e) {
	return { minLength: R(e, e.properties.minLength) };
}
function Te(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = M(i, s, "x", a[0]), l = M(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = {
		datum: {},
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		strokeWidth: 0
	}, p = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, h] = d, g = i - n, _ = h - a, v = Math.hypot(g, _);
		if (v > 0 && v < t.minLength) {
			let e = (t.minLength - v) / 2, r = g / v, o = _ / v;
			n -= r * e, a -= o * e, i += r * e, h += o * e;
		}
		let y = P(s.size, e);
		m(o, n, a, i, h, y / 2) && (p++, f.datum = e, f.x1 = n, f.y1 = a, f.x2 = i, f.y2 = h, f.strokeWidth = y, r(f));
	}
	return p;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/text.js
function Ee(e) {
	let t = e.properties;
	return {
		align: R(e, t.align),
		baseline: R(e, t.baseline),
		logoLetters: R(e, t.logoLetters),
		paddingX: R(e, t.paddingX),
		paddingY: R(e, t.paddingY),
		flushX: R(e, t.flushX),
		flushY: R(e, t.flushY),
		squeeze: R(e, t.squeeze),
		dx: R(e, t.dx),
		dy: R(e, t.dy)
	};
}
function De(r, i, a, o) {
	let { coords: s, data: c, visibleBounds: l, anchorCullBounds: u } = a, { align: d, baseline: f } = i, m = r.encoders;
	if (c.length == 0) return 0;
	let h = m.size.constant ? P(m.size, c[0]) : 0, g = m.angle.constant ? P(m.angle, c[0]) : 0, _ = M(s, m, "x", c[0]), v = M(s, m, "y", c[0]), y = r.encoding.text, b = "format" in y ? n(y.format) : (e) => e, x = [0, 0], S = [0, 0], C = {
		width: 0,
		height: 0
	}, w = {
		x: 0,
		y: 0
	}, T = {
		position: 0,
		scale: 0
	}, E = {
		width: 0,
		heightScale: 0
	}, D = Array(8).fill(0), O = {
		datum: {},
		text: "",
		x: 0,
		y: 0,
		size: 0,
		width: 0,
		angle: 0,
		dx: i.dx,
		dy: i.dy,
		fadeOpacity: 1,
		scale: 1,
		logoScale: void 0,
		multiCharacterLogo: !1,
		boundsQuad: D
	}, k = !!m.x2, A = !!m.y2, j = 0;
	for (let n of c) {
		let a = b(m.text(n)), c = e(a) ? a : a === null ? "" : "" + a;
		if (!c) continue;
		_(n, x), v(n, S);
		let [y, M] = x, [N, F] = S, I = m.size.constant ? h : P(m.size, n), L = m.angle.constant ? g : P(m.angle, n);
		if (i.logoLetters) {
			let e = I, t = I;
			if (k && (e = M - y, y = (y + M) / 2), A && (t = N - F, N = (N + F) / 2), Oe(D, y, N, Math.abs(e), Math.abs(t), "center", "middle", L, i.dx, i.dy), !e || !t || p(u, y, N) || !ke(l, D)) continue;
			let a = r.font.metrics.getChar(c[0]), s = t * r.font.metrics.common.base * (a.height + 10) / (a.height * a.height);
			j++, O.datum = n, O.text = c, O.x = y, O.y = N, O.size = 1, O.width = 1, O.angle = L, O.fadeOpacity = 1, O.scale = 1, E.width = e, E.heightScale = s, O.logoScale = E, O.multiCharacterLogo = c.length > 1, o(O);
			continue;
		}
		let R = r.font.metrics.measureWidth(c, I);
		Ae(R, I, L, C), k || A ? Me(d, f, L, w) : (w.x = $[d], w.y = Ne[f]);
		let z = 1;
		if (k && (je(Math.min(y, M), Math.max(y, M), C.width, i.paddingX, w.x, i.flushX, s.x, s.x2, T), y = T.position, z *= T.scale), A && (je(Math.min(N, F), Math.max(N, F), C.height * z, i.paddingY, w.y, i.flushY, s.y, s.y2, T), N = T.position, z *= T.scale), p(u, y, N)) continue;
		let B = 1;
		if (z < 1) {
			if (!i.squeeze || z < 3 / I) continue;
			B = t(3 / I, 6 / I, z);
		}
		let V = I * z, H = R * z;
		Oe(D, y, N, H, V, d, f, L, i.dx, i.dy), ke(l, D) && (j++, O.datum = n, O.text = c, O.x = y, O.y = N, O.size = V, O.width = H, O.angle = L, O.fadeOpacity = B, O.scale = z, O.logoScale = void 0, O.multiCharacterLogo = !1, o(O));
	}
	return j;
}
function Oe(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - ($[a] + 1) / 2 * r, d = n + l - (Ne[o] + 1) / 2 * i, f = u + r, p = d + i, m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m);
	return Q(e, 0, t, n, u, d, h, g), Q(e, 2, t, n, f, d, h, g), Q(e, 4, t, n, f, p, h, g), Q(e, 6, t, n, u, p, h, g), e;
}
function ke(e, t) {
	return m(e, Math.min(t[0], t[2], t[4], t[6]), Math.min(t[1], t[3], t[5], t[7]), Math.max(t[0], t[2], t[4], t[6]), Math.max(t[1], t[3], t[5], t[7]), 1);
}
function Q(e, t, n, r, i, a, o, s) {
	e[t] = n + (i - n) * s - (a - r) * o, e[t + 1] = r + (i - n) * o + (a - r) * s;
}
function Ae(e, t, n, r) {
	let i = n * Math.PI / 180, a = Math.abs(Math.sin(i)), o = Math.abs(Math.cos(i));
	r.width = e * o + t * a, r.height = e * a + t * o;
}
function je(e, t, n, r, i, a, o, s, c) {
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
function Me(e, t, n, r) {
	let i = $[e], a = -Ne[t], o = ((n + 45) % 360 + 360) % 360, s, c;
	o < 90 ? (s = i, c = a) : o < 180 ? (s = a, c = -i) : o < 270 ? (s = -i, c = a) : (s = -a, c = i), r.x = s, r.y = -c;
}
var $ = {
	left: -1,
	center: 0,
	right: 1
}, Ne = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Pe = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function Fe(e) {
	return typeof e == "number" ? e : Pe[e];
}
//#endregion
//#region ../core/src/rendering/nativeText.js
var Ie = [
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
], Le = /* @__PURE__ */ new Set([
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
]);
function Re(e) {
	let t = e ?? "Lato";
	return [t, ...Ie.filter((e) => e.toLowerCase() != t.toLowerCase())].map(Be).join(", ");
}
function ze(e, t) {
	switch (e) {
		case "top": return .79 * t;
		case "middle": return .35 * t;
		case "bottom": return -.21 * t;
		case "alphabetic":
		case "baseline": return 0;
		default: throw Error(`Unknown text baseline: ${e}`);
	}
}
function Be(e) {
	let t = e.toLowerCase();
	return Le.has(t) ? t : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
export { z as C, m as D, f as E, o as O, R as S, u as T, V as _, De as a, A as b, ye as c, he as d, ge as f, U as g, B as h, Ee as i, c as k, be as l, me as m, ze as n, we as o, pe as p, Fe as r, Te as s, Re as t, _e as u, H as v, d as w, j as x, P as y };
