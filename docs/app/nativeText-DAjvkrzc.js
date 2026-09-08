import { F as e, L as t, Ot as n, Wt as r, Y as i, b as a, ot as o, rt as s, sn as c, z as l } from "./clipOptions-H68pJyEZ.js";
import { t as u } from "./rectangle-DKnrAmKs.js";
//#region ../core/src/rendering/immediate/markData.js
var d = [], f = class {
	#e = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	#t = new u(() => this.#e.x, () => this.#e.y, () => this.#e.width, () => this.#e.height);
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
function p(e, t) {
	let n = e.unitView.getCollector();
	if (!n) throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);
	let r = n.facetBatches.get(void 0);
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? d;
}
function m(e, t, n, r, i, a) {
	let o = p(e, t);
	if (t.sampleFacetRenderingOptions) i(r.resolveFacet(n, t.sampleFacetRenderingOptions), o);
	else if (e.encoders.facetIndex) for (let [s, c] of h(e.encoders.facetIndex, o)) {
		let e = r.resolvePlacement(n, t.placement?.source, s);
		e ? i(e, c) : a(s);
	}
	else i(n, o);
}
function h(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
//#endregion
//#region ../core/src/rendering/immediate/bounds.js
function g(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function _(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function v(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function y(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function b(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/polygonUnion.js
var x = 1e-8;
function S(e) {
	let t = e.flatMap((e, t) => e.map((n, r) => ({
		a: n,
		b: e[(r + 1) % e.length],
		polygonIndex: t
	}))), n = [];
	for (let r of t) {
		let i = [0, 1];
		for (let e of t) r.polygonIndex != e.polygonIndex && C(r, e, i);
		i.sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let a = i[t], o = i[t + 1];
			if (o - a <= x) continue;
			let s = k(r.a, r.b, a), c = k(r.a, r.b, o), l = k(s, c, .5);
			e.some((e, t) => t != r.polygonIndex && D(l, e)) || n.push({
				a: s,
				b: c,
				polygonIndex: r.polygonIndex
			});
		}
	}
	return E(T(n));
}
function C(e, t, n) {
	let r = j(e.b, e.a), i = j(t.b, t.a), a = j(t.a, e.a), o = N(r, i);
	if (Math.abs(o) > x) {
		let e = N(a, i) / o, t = N(a, r) / o;
		e > x && e < 1 - x && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(N(a, r)) <= x && (w(e, t.a, n), w(e, t.b, n));
}
function w(e, t, n) {
	let r = j(e.b, e.a), i = M(r, r), a = M(j(t, e.a), r) / i;
	a > x && a < 1 - x && n.push(a);
}
function T(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = A(n.a) + ":" + A(n.b), r = A(n.b) + ":" + A(n.a);
		t.has(r) ? t.delete(r) : t.has(e) || t.set(e, n);
	}
	return Array.from(t.values());
}
function E(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = A(n.a), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	let n = new Set(e), r = [];
	for (; n.size;) {
		let e = n.values().next().value, i = [e.a], a = e;
		for (;;) {
			if (n.delete(a), i.push(a.b), A(a.b) == A(i[0])) {
				i.pop();
				break;
			}
			let e = (t.get(A(a.b)) ?? []).find((e) => n.has(e));
			if (!e) throw Error("Cannot chain SVG polygon union boundary.");
			a = e;
		}
		r.push(i);
	}
	return r;
}
function D(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let a = t[i], o = t[r];
		if (O(e, a, o)) return !1;
		a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}
function O(e, t, n) {
	return Math.abs(N(j(e, t), j(n, t))) <= x && M(j(e, t), j(e, n)) <= x;
}
function k(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function A(e) {
	return `${Math.round(e.x / x)},${Math.round(e.y / x)}`;
}
function j(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function M(e, t) {
	return e.x * t.x + e.y * t.y;
}
function N(e, t) {
	return e.x * t.y - e.y * t.x;
}
//#endregion
//#region ../core/src/rendering/immediate/markEncoding.js
function P(e, t, n) {
	return e.x + t * e.width + n;
}
function F(e, t, n) {
	return e.y + (1 - t) * e.height + n;
}
function I(e, t, n, r = [0, 0]) {
	return z(e, t.x, t.x2, t.xOffset, t.x2Offset, n, P, r);
}
function L(e, t, n, r = [0, 0]) {
	return z(e, t.y, t.y2, t.yOffset, t.y2Offset, n, F, r);
}
function R(e, t, n, r) {
	let i = t[n], a = t[n + "2"], o = t[n + "Offset"], s = t[n + "2Offset"], c = n == "x" ? e.width : e.height, l = n == "x" ? e.x : e.y + c, u = n == "x" ? c : -c, d = H(i), f = a ? H(a) : 0, p = i.constant ? B(i, r) + d : 0, m = a?.constant ? B(a, r) + f : 0, h = o.constant ? B(o, r) : 0, g = a && s?.constant ? B(s, r) : 0;
	return (e, t) => {
		let n = o.constant ? h : B(o, e), r = i.constant ? p : B(i, e) + d, c = l + r * u + n, _ = c;
		if (a) {
			let t = a.constant ? m : B(a, e) + f, r = s ? s.constant ? g : B(s, e) : n;
			_ = l + t * u + r;
		}
		return t[0] = c, t[1] = _, t;
	};
}
function z(e, t, n, r, i, a, o, s) {
	let c = B(r, a), l = o(e, V(t, a), c), u = n ? o(e, V(n, a), i ? B(i, a) : c) : l;
	return s[0] = l, s[1] = u, s;
}
function B(e, t) {
	return e(t);
}
function V(e, t) {
	return B(e, t) + H(e);
}
function H(e) {
	let t = e.scale;
	if (!t) return 0;
	let n = e.channelDef, r = n && "band" in n ? n.band ?? .5 : .5;
	if (t.type == "band" || t.type == "point") return t.bandwidth() * r;
	if (t.type == "index" || t.type == "locus") {
		let e = t;
		return Math.sign(e.step()) * e.bandwidth() * (r - e.align());
	} else return 0;
}
function ee(e, t) {
	return W(e(t));
}
function U(e, t) {
	return a(t) ? e.unitView.paramRuntime.evaluateAndGet(t.expr) : t;
}
function W(e) {
	return e == null ? "none" : "" + e;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/arrow.js
function te(e) {
	let t = e.properties, n = U(e, t.headSpacing);
	return {
		configuredRHeadSlope: de(U(e, t.headAngle)),
		configuredRHeadNotchSlope: de(U(e, t.headNotchAngle)),
		headShape: U(e, t.headShape),
		headWidth: U(e, t.headWidth),
		minSize: U(e, t.minSize),
		stem: U(e, t.stem),
		startNotch: U(e, t.startNotch),
		minStemLength: U(e, t.minStemLength),
		headSpacing: n,
		repeatHeads: n != null && n >= 0,
		headPlacement: U(e, t.headPlacement)
	};
}
function ne(e, t, n, r) {
	let { viewOpacity: i } = n, a = e.encoders;
	return re(e, t, n, (e) => {
		let n = t.stem ? oe(e.tail, e.tip, e.tangent, e.normal, e.stemHalfWidth, e.rHeadSlope, t.startNotch) : null, o = n ? [n] : [];
		ie(e, (t, n) => {
			let r = {
				x: t,
				y: n
			};
			o.push(e.renderedHeadShape == "open" ? se(r, e.tangent, e.normal, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope, e.size) : ae(r, e.tangent, e.normal, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope));
		});
		let s = W(a.stroke(e.datum)) != "none" && B(a.strokeOpacity, e.datum) * i > 0 && e.strokeWidth > 0;
		r({
			datum: e.datum,
			boundaryLoops: o.length == 1 || !s ? o : S(o),
			strokeWidth: e.strokeWidth,
			headShapeFallback: e.headShapeFallback
		});
	});
}
function re(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, countOnly: s } = n, c = e.encoders;
	if (a.length == 0) return 0;
	let l = R(i, c, "x", a[0]), u = R(i, c, "y", a[0]), d = [0, 0], f = [0, 0], p = {
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
	}, m = 0;
	for (let e of a) {
		l(e, d), u(e, f);
		let n = ee(c.direction, e) == "reverse", i = n ? d[1] : d[0], a = n ? f[1] : f[0], h = n ? d[0] : d[1], g = n ? f[0] : f[1], _ = h - i, v = g - a, y = Math.hypot(_, v);
		if (y == 0) continue;
		let x = _ / y, S = v / y, C = Math.max(B(c.size, e), t.minSize), w = C / 2, T = Math.max(t.headWidth * C, 0) / 2, E = ce({
			segmentLength: y,
			headHalfWidth: T,
			stemHalfWidth: t.stem ? w : -w,
			configuredRHeadSlope: t.configuredRHeadSlope,
			configuredRHeadNotchSlope: t.configuredRHeadNotchSlope,
			headRepeat: t.repeatHeads,
			headPlacement: t.headPlacement,
			startNotch: t.startNotch,
			minStemLength: t.minStemLength,
			headShape: t.headShape
		}), D = t.headShape == "open" ? E : Math.min(t.configuredRHeadNotchSlope, E), O = t.headShape == "open" ? C : 0, k = t.headPlacement == "outside" ? ue(T, E, D, O) : 0, A = h + x * k, j = g + S * k, M = T * E, N = Math.hypot(T, M), P = t.headShape == "open" && N > 0 ? C * T / N : 0, F = A - x * (M + P), I = j - S * (M + P), L = B(c.strokeWidth, e), R = Math.max(t.stem ? w : 0, T) + L * 2;
		if (!b(o, Math.min(i, A, F), Math.min(a, j, I), Math.max(i, A, F), Math.max(a, j, I), R) || (m++, s)) continue;
		let z = t.headShape == "triangle" || t.headShape == "open" ? t.headShape : "triangle", V = M + O / Math.hypot(E, 1) + L, H = t.repeatHeads ? Math.max((t.headSpacing ?? 0) * C, V) : Infinity;
		p.datum = e, q(p.tail, i, a), q(p.tip, A, j), q(p.tangent, x, S), q(p.normal, -S, x), p.size = C, p.stemHalfWidth = w, p.headHalfWidth = T, p.headAxisLength = M, p.rHeadSlope = E, p.rHeadNotchSlope = D, p.strokeWidth = L, p.repeatSpacing = H, p.headRepeatFootprint = V, p.geometryLength = Math.hypot(A - i, j - a), p.stemContainsHead = t.stem && z == "triangle" && !t.repeatHeads && T <= w, p.renderedHeadShape = z, p.headShapeFallback = z != t.headShape, r(p);
	}
	return m;
}
function ie(e, t) {
	for (let n = 0; !e.stemContainsHead && !(n > 0 && n + e.headRepeatFootprint - e.strokeWidth / 2 > e.geometryLength || (t(e.tip.x - e.tangent.x * n, e.tip.y - e.tangent.y * n), !(e.repeatSpacing > 0) || !Number.isFinite(e.repeatSpacing))); n += e.repeatSpacing);
}
function ae(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = G(G(e, K(t, -o)), K(n, r)), l = G(G(e, K(t, -o)), K(n, -r));
	return [
		e,
		c,
		G(e, K(t, -s)),
		l
	];
}
function oe(e, t, n, r, i, a, o) {
	let s = i * a, c = G(G(t, K(n, -s)), K(r, i)), l = G(G(t, K(n, -s)), K(r, -i)), u = G(e, K(r, i)), d = G(e, K(r, -i));
	return [
		t,
		c,
		u,
		...o ? [G(e, K(n, i * a))] : [],
		d,
		l
	];
}
function se(e, t, n, r, i, a, o) {
	let s = r * i, c = G(G(e, K(t, -s)), K(n, r)), l = G(G(e, K(t, -s)), K(n, -r)), u = Math.hypot(r, s), d = o * r / u, f = o * s / u, p = G(G(c, K(t, -d)), K(n, -f)), m = G(G(l, K(t, -d)), K(n, f));
	return [
		e,
		c,
		p,
		G(e, K(t, -(s + d - (r - f) * a))),
		m,
		l
	];
}
function ce({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l }) {
	if (a || n < 0) return r;
	if (o == "outside") return !s || n <= 0 ? r : Math.min(r, Math.max(e - c, 0) / n);
	if (l != "triangle") return r;
	let u = Math.max(e - c, 0);
	return le(n, t, r, i) <= u ? r : u < n * i ? n > 0 ? fe(u / n, 0, r) : 0 : fe((u + (t - n) * i) / t, 0, r);
}
function le(e, t, n, r) {
	return t * n - (t - e) * Math.min(r, n);
}
function ue(e, t, n, r) {
	if (e <= 0) return 0;
	let i = e * t, a = Math.hypot(e, i);
	return i + r * e / a - (e - r * i / a) * n;
}
function de(e) {
	let t = fe(e, 1, 90) * Math.PI / 180;
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
function fe(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../core/src/rendering/immediate/linkFading.js
var pe = 4;
function me(e, t, n) {
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
function he(e, t) {
	let n = U(e, e.properties.arcFadingDistance);
	if (t != "arc" && t != "dome" || n === !1 || n[0] <= 0 || n[1] <= 0) return () => !1;
	let r = e.encoders.uniqueId && U(e, e.properties.noFadingOnPointSelection) ? ge(e) : [];
	return (e) => !r.some((t) => t(e)) && n;
}
function ge(r) {
	let i = new Set(Object.values(r.encoders).flatMap((e) => e.branches).map((e) => e.predicate.param).filter((e) => e));
	return Array.from(i, (i) => {
		let a = r.unitView.paramRuntime.findValue(i);
		if (l(a)) return (e) => a.uniqueId != null && a.uniqueId == e.__uniqueId;
		if (t(a)) return (e) => a.data.has(e[n]);
		if (e(a)) {
			let e = Object.entries(a.intervals).map(([e, t]) => {
				if (e != "x" && e != "y") throw Error(`Unsupported link selection channel: ${e}`);
				let n = r.encoders[e], i = r.encoders[o(e)];
				return {
					interval: t,
					start: s(n) ?? n.branches[0].accessor,
					end: s(i) ?? i.branches[0].accessor
				};
			});
			return (t) => e.every(({ interval: e, start: n, end: r }) => {
				if (!e) return !1;
				let i = +n(t), a = +r(t);
				return e[0] <= i && i <= e[1] || e[0] <= a && a <= e[1];
			});
		} else throw Error(`Unsupported link selection type: ${a.type}`);
	});
}
function _e(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= pe; i++) {
			let a = i / pe, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - ve(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function ve(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function J(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/linkGeometry.js
function ye(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = X(a, i), s = Ce(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = Z(o, 1 / s), l = [-c[1], c[0]];
		s = be(i, a, s, r.maxChordLength, n);
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
		let s = Ce(X(a, i));
		be(i, a, s, r.maxChordLength, n), r.clampApex && xe(i, a, r.orient, n);
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
function be(e, t, n, r, i) {
	if (n <= r) return n;
	let a = Z(X(t, e), 1 / n);
	return Se(e, i, 2) ? (we(t, Y(e, Z(a, r))), r) : Se(t, i, 2) ? (we(e, X(t, Z(a, r))), r) : n;
}
function xe(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function Se(e, t, n) {
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
function Ce(e) {
	return Math.hypot(e[0], e[1]);
}
function we(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/rendering/immediate/marks/link.js
function Te(e) {
	let t = e.properties;
	return {
		shape: U(e, t.linkShape),
		orient: U(e, t.orient),
		arcHeightFactor: U(e, t.arcHeightFactor),
		minArcHeight: U(e, t.minArcHeight),
		maxChordLength: U(e, t.maxChordLength),
		clampApex: U(e, t.clampApex)
	};
}
function Ee(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = R(i, s, "x", a[0]), l = R(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = i.x, p = i.y, m = {
		width: i.width,
		height: i.height
	}, h = p + m.height, g = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, p] = d, _ = ye([n - f, h - a], [i - f, h - p], m, t);
		for (let e of _) e[0] += f, e[1] = h - e[1];
		let [v, y, x, S] = _, C = B(s.size, e);
		b(o, Math.min(v[0], y[0], x[0], S[0]), Math.min(v[1], y[1], x[1], S[1]), Math.max(v[0], y[0], x[0], S[0]), Math.max(v[1], y[1], x[1], S[1]), C / 2) && (g++, r({
			datum: e,
			points: _,
			strokeWidth: C
		}));
	}
	return g;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/point.js
function De(e) {
	return { inwardStroke: U(e, e.properties.inwardStroke) };
}
function Oe(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, anchorCullBounds: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = R(i, u, "x", a[c]), f = R(i, u, "y", a[c]), p = [0, 0], m = [0, 0], h = e.getSemanticThreshold(), g = {
		datum: {},
		shape: "circle",
		x: 0,
		y: 0,
		geometryRadius: 0,
		boundsRadius: 0,
		angle: 0,
		strokeWidth: 0,
		lineShape: !1
	}, _ = 0;
	for (let e = c; e < l; e++) {
		let n = a[e];
		if (B(u.semanticScore, n) < h) continue;
		d(n, p), f(n, m);
		let i = p[0] + B(u.dx, n), c = m[0] - B(u.dy, n);
		if (y(s, i, c)) continue;
		let l = Math.sqrt(B(u.size, n)) / 2;
		if (t.inwardStroke && l <= 0) continue;
		let v = ee(u.shape, n), x = B(u.strokeWidth, n), S = v == "x" || v == "+", C = t.inwardStroke && !S ? Math.min(x, l) : x, w = t.inwardStroke && !S ? l - C / 2 : l, T = t.inwardStroke ? 0 : x / 2, E = l * Math.SQRT2 + T;
		b(o, i - E, c - E, i + E, c + E) && (_++, g.datum = n, g.shape = v, g.x = i, g.y = c, g.geometryRadius = w, g.boundsRadius = E, g.angle = B(u.angle, n), g.strokeWidth = C, g.lineShape = S, r(g));
	}
	return _;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/pointPath.js
function ke(e, t, n, r, i) {
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
var Ae = .1;
function je(e) {
	let t = e.properties, n = U(e, t.cornerRadius), r = {
		topLeft: U(e, t.cornerRadiusTopLeft ?? n),
		topRight: U(e, t.cornerRadiusTopRight ?? n),
		bottomRight: U(e, t.cornerRadiusBottomRight ?? n),
		bottomLeft: U(e, t.cornerRadiusBottomLeft ?? n)
	}, i = {
		blur: U(e, t.shadowBlur ?? 0),
		color: U(e, t.shadowColor ?? "black"),
		offsetX: U(e, t.shadowOffsetX ?? 0),
		offsetY: U(e, t.shadowOffsetY ?? 0),
		opacity: U(e, t.shadowOpacity ?? 0)
	}, a = U(e, t.hatch ?? "none"), o = !Fe(r);
	return {
		cornerRadii: r,
		minWidth: U(e, t.minWidth),
		minHeight: U(e, t.minHeight),
		minOpacity: U(e, t.minOpacity),
		shadow: i,
		hatch: a,
		hasCornerRadii: o,
		canPadSeams: a == "none" && i.opacity == 0 && !o
	};
}
function Me(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, viewOpacity: s } = n, c = n.start ?? 0, l = n.end ?? a.length, u = e.encoders;
	if (c === l) return 0;
	let d = u.strokeWidth.constant, f = u.fillOpacity.constant, p = d ? B(u.strokeWidth, a[c]) : 0, m = f ? B(u.fillOpacity, a[c]) : 0, h = u.fill.constant, g = h ? W(u.fill(a[c])) : "none", _ = t.shadow.opacity > 0 ? t.shadow.blur + Math.max(Math.abs(t.shadow.offsetX), Math.abs(t.shadow.offsetY)) : 0, v = R(i, u, "x", a[c]), y = R(i, u, "y", a[c]), x = [0, 0], S = [0, 0], C = {
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
		v(n, x), y(n, S);
		let i = Math.min(x[0], x[1]), c = Math.min(S[0], S[1]), l = Math.abs(x[1] - x[0]), T = Math.abs(S[1] - S[0]), E = Ne(l, t.minWidth), D = Ne(T, t.minHeight), O = Math.max(t.minOpacity, E * D);
		l < t.minWidth && (i -= (t.minWidth - l) / 2, l = t.minWidth), T < t.minHeight && (c -= (t.minHeight - T) / 2, T = t.minHeight);
		let k = d ? p : B(u.strokeWidth, n), A = h ? g : W(u.fill(n)), j = (f ? m : B(u.fillOpacity, n)) * s, M = k == 0 && j == 1 && O == 1 && t.canPadSeams && A != "none" ? Ae : 0;
		M && (i -= M, c -= M, l += M * 2, T += M * 2), b(o, i, c, i + l, c + T, k / 2 + _) && (w++, C.datum = n, C.x = i, C.y = c, C.width = l, C.height = T, C.opacityFactor = O, C.strokeWidth = k, C.fill = A, C.fillOpacity = j, t.hasCornerRadii && Pe(t.cornerRadii, l, T, C.radii), r(C));
	}
	return w;
}
function Ne(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function Pe(e, t, n, r) {
	let i = Math.min(t, n) / 2;
	r.topLeft = Math.max(0, Math.min(e.topLeft, i)), r.topRight = Math.max(0, Math.min(e.topRight, i)), r.bottomRight = Math.max(0, Math.min(e.bottomRight, i)), r.bottomLeft = Math.max(0, Math.min(e.bottomLeft, i));
}
function Fe(e) {
	return e.topLeft == 0 && e.topRight == 0 && e.bottomRight == 0 && e.bottomLeft == 0;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rule.js
function Ie(e) {
	return { minLength: U(e, e.properties.minLength) };
}
function Le(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = R(i, s, "x", a[0]), l = R(i, s, "y", a[0]), u = [0, 0], d = [0, 0], f = {
		datum: {},
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		strokeWidth: 0
	}, p = 0;
	for (let e of a) {
		c(e, u), l(e, d);
		let [n, i] = u, [a, m] = d, h = i - n, g = m - a, _ = Math.hypot(h, g);
		if (_ > 0 && _ < t.minLength) {
			let e = (t.minLength - _) / 2, r = h / _, o = g / _;
			n -= r * e, a -= o * e, i += r * e, m += o * e;
		}
		let v = B(s.size, e);
		b(o, n, a, i, m, v / 2) && (p++, f.datum = e, f.x1 = n, f.y1 = a, f.x2 = i, f.y2 = m, f.strokeWidth = v, r(f));
	}
	return p;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/text.js
function Re(e) {
	let t = e.properties;
	return {
		align: U(e, t.align),
		baseline: U(e, t.baseline),
		logoLetters: U(e, t.logoLetters),
		paddingX: U(e, t.paddingX),
		paddingY: U(e, t.paddingY),
		flushX: U(e, t.flushX),
		flushY: U(e, t.flushY),
		squeeze: U(e, t.squeeze),
		dx: U(e, t.dx),
		dy: U(e, t.dy)
	};
}
function ze(e, t, n, a) {
	let { coords: o, data: s, visibleBounds: l, anchorCullBounds: u } = n, { align: d, baseline: f } = t, p = e.encoders;
	if (s.length == 0) return 0;
	let m = p.size.constant ? B(p.size, s[0]) : 0, h = p.angle.constant ? B(p.angle, s[0]) : 0, g = R(o, p, "x", s[0]), _ = R(o, p, "y", s[0]), v = e.encoding.text, b = "format" in v ? c(v.format) : (e) => e, x = [0, 0], S = [0, 0], C = {
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
		dx: t.dx,
		dy: t.dy,
		fadeOpacity: 1,
		scale: 1,
		logoScale: void 0,
		multiCharacterLogo: !1,
		boundsQuad: D
	}, k = !!p.x2, A = !!p.y2, j = 0;
	for (let n of s) {
		let s = b(p.text(n)), c = r(s) ? s : s === null ? "" : "" + s;
		if (!c) continue;
		g(n, x), _(n, S);
		let [v, M] = x, [N, P] = S, F = p.size.constant ? m : B(p.size, n), I = p.angle.constant ? h : B(p.angle, n);
		if (t.logoLetters) {
			let r = F, i = F;
			if (k && (r = M - v, v = (v + M) / 2), A && (i = N - P, N = (N + P) / 2), Be(D, v, N, Math.abs(r), Math.abs(i), "center", "middle", I, t.dx, t.dy), !r || !i || y(u, v, N) || !Ve(l, D)) continue;
			let o = e.font.metrics.getChar(c[0]), s = i * e.font.metrics.common.base * (o.height + 10) / (o.height * o.height);
			j++, O.datum = n, O.text = c, O.x = v, O.y = N, O.size = 1, O.width = 1, O.angle = I, O.fadeOpacity = 1, O.scale = 1, E.width = r, E.heightScale = s, O.logoScale = E, O.multiCharacterLogo = c.length > 1, a(O);
			continue;
		}
		let L = e.font.metrics.measureWidth(c, F);
		He(L, F, I, C), k || A ? We(d, f, I, w) : (w.x = Ge[d], w.y = Ke[f]);
		let R = 1;
		if (k && (Ue(Math.min(v, M), Math.max(v, M), C.width, t.paddingX, w.x, t.flushX, o.x, o.x2, T), v = T.position, R *= T.scale), A && (Ue(Math.min(N, P), Math.max(N, P), C.height * R, t.paddingY, w.y, t.flushY, o.y, o.y2, T), N = T.position, R *= T.scale), y(u, v, N)) continue;
		let z = 1;
		if (R < 1) {
			if (!t.squeeze || R < 3 / F) continue;
			z = i(3 / F, 6 / F, R);
		}
		let V = F * R, H = L * R;
		Be(D, v, N, H, V, d, f, I, t.dx, t.dy), Ve(l, D) && (j++, O.datum = n, O.text = c, O.x = v, O.y = N, O.size = V, O.width = H, O.angle = I, O.fadeOpacity = z, O.scale = R, O.logoScale = void 0, O.multiCharacterLogo = !1, a(O));
	}
	return j;
}
function Be(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - (Ge[a] + 1) / 2 * r, d = n + l - (Ke[o] + 1) / 2 * i, f = u + r, p = d + i, m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m);
	return $(e, 0, t, n, u, d, h, g), $(e, 2, t, n, f, d, h, g), $(e, 4, t, n, f, p, h, g), $(e, 6, t, n, u, p, h, g), e;
}
function Ve(e, t) {
	return b(e, Math.min(t[0], t[2], t[4], t[6]), Math.min(t[1], t[3], t[5], t[7]), Math.max(t[0], t[2], t[4], t[6]), Math.max(t[1], t[3], t[5], t[7]), 1);
}
function $(e, t, n, r, i, a, o, s) {
	e[t] = n + (i - n) * s - (a - r) * o, e[t + 1] = r + (i - n) * o + (a - r) * s;
}
function He(e, t, n, r) {
	let i = n * Math.PI / 180, a = Math.abs(Math.sin(i)), o = Math.abs(Math.cos(i));
	r.width = e * o + t * a, r.height = e * a + t * o;
}
function Ue(e, t, n, r, i, a, o, s, c) {
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
function We(e, t, n, r) {
	let i = Ge[e], a = -Ke[t], o = ((n + 45) % 360 + 360) % 360, s, c;
	o < 90 ? (s = i, c = a) : o < 180 ? (s = a, c = -i) : o < 270 ? (s = -i, c = a) : (s = -a, c = i), r.x = s, r.y = -c;
}
var Ge = {
	left: -1,
	center: 0,
	right: 1
}, Ke = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, qe = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function Je(e) {
	return typeof e == "number" ? e : qe[e];
}
//#endregion
//#region ../core/src/rendering/nativeText.js
var Ye = [
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
], Xe = /* @__PURE__ */ new Set([
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
function Ze(e) {
	let t = e ?? "Lato";
	return [t, ...Ye.filter((e) => e.toLowerCase() != t.toLowerCase())].map($e).join(", ");
}
function Qe(e, t) {
	switch (e) {
		case "top": return .79 * t;
		case "middle": return .35 * t;
		case "bottom": return -.21 * t;
		case "alphabetic":
		case "baseline": return 0;
		default: throw Error(`Unknown text baseline: ${e}`);
	}
}
function $e(e) {
	let t = e.toLowerCase();
	return Xe.has(t) ? t : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
export { b as A, I as C, _ as D, W as E, m as M, g as O, B as S, U as T, me as _, ze as a, ne as b, je as c, De as d, Oe as f, he as g, _e as h, Re as i, f as j, v as k, Me as l, Ee as m, Qe as n, Ie as o, Te as p, Je as r, Le as s, Ze as t, ke as u, te as v, L as w, re as x, ie as y };
