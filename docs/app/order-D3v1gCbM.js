import { $ as e, Ln as t, et as n, fn as r, kn as i, p as a } from "./clipOptions-BKK6zTuk.js";
import { a as o } from "./rasterization-DFj3Cvx4.js";
import { c as s, l as c, t as l } from "./rectangle-B8otIL7D.js";
//#region ../core/src/rendering/immediate/markData.js
var u = [], d = ["x", "y"], f = class {
	#e = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	#t = new l(() => this.#e.x, () => this.#e.y, () => this.#e.width, () => this.#e.height);
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
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? u;
}
function m(e, t, n, r, i, a) {
	let o = p(e, t);
	if (t.sampleFacetRenderingOptions) {
		let a = r.resolveFacet(n, t.sampleFacetRenderingOptions);
		h(e, a) && i(a, o);
	} else if (e.encoders.facetIndex) for (let [s, c] of g(e.encoders.facetIndex, o)) {
		let o = r.resolvePlacement(n, t.placement?.source, s);
		o ? h(e, o) && i(o, c) : a(s);
	}
	else h(e, n) && i(n, o);
}
function h(e, t) {
	if (e.properties.clamp && t.height <= 0) return !1;
	for (let n of d) {
		let r = e.encoders[n]?.scale;
		if (r && "gapMapping" in r) {
			let e = n === "x" ? t.width : t.height;
			if (r.gapMapping(e)?.fits === !1) return !1;
		}
	}
	return !0;
}
function g(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
//#endregion
//#region ../core/src/rendering/immediate/bounds.js
function _(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function v(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function y(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function b(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function x(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/polygonUnion.js
var S = 1e-8;
function C(e) {
	let t = e.flatMap((e, t) => e.map((n, r) => ({
		a: n,
		b: e[(r + 1) % e.length],
		polygonIndex: t
	}))), n = [];
	for (let r of t) {
		let i = [0, 1];
		for (let e of t) r.polygonIndex != e.polygonIndex && w(r, e, i);
		i.sort((e, t) => e - t);
		for (let t = 0; t < i.length - 1; t++) {
			let a = i[t], o = i[t + 1];
			if (o - a <= S) continue;
			let s = A(r.a, r.b, a), c = A(r.a, r.b, o), l = A(s, c, .5);
			e.some((e, t) => t != r.polygonIndex && O(l, e)) || n.push({
				a: s,
				b: c,
				polygonIndex: r.polygonIndex
			});
		}
	}
	return D(E(n));
}
function w(e, t, n) {
	let r = M(e.b, e.a), i = M(t.b, t.a), a = M(t.a, e.a), o = P(r, i);
	if (Math.abs(o) > S) {
		let e = P(a, i) / o, t = P(a, r) / o;
		e > S && e < .99999999 && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(P(a, r)) <= S && (T(e, t.a, n), T(e, t.b, n));
}
function T(e, t, n) {
	let r = M(e.b, e.a), i = N(r, r), a = N(M(t, e.a), r) / i;
	a > S && a < .99999999 && n.push(a);
}
function E(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = j(n.a) + ":" + j(n.b), r = j(n.b) + ":" + j(n.a);
		t.has(r) ? t.delete(r) : t.has(e) || t.set(e, n);
	}
	return Array.from(t.values());
}
function D(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = j(n.a), r = t.get(e) ?? [];
		r.push(n), t.set(e, r);
	}
	let n = new Set(e), r = [];
	for (; n.size;) {
		let e = n.values().next().value, i = [e.a], a = e;
		for (;;) {
			if (n.delete(a), i.push(a.b), j(a.b) == j(i[0])) {
				i.pop();
				break;
			}
			let e = (t.get(j(a.b)) ?? []).find((e) => n.has(e));
			if (!e) throw Error("Cannot chain SVG polygon union boundary.");
			a = e;
		}
		r.push(i);
	}
	return r;
}
function O(e, t) {
	let n = !1;
	for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
		let a = t[i], o = t[r];
		if (k(e, a, o)) return !1;
		a.y > e.y != o.y > e.y && e.x < (o.x - a.x) * (e.y - a.y) / (o.y - a.y) + a.x && (n = !n);
	}
	return n;
}
function k(e, t, n) {
	return Math.abs(P(M(e, t), M(n, t))) <= S && N(M(e, t), M(e, n)) <= S;
}
function A(e, t, n) {
	return {
		x: e.x + (t.x - e.x) * n,
		y: e.y + (t.y - e.y) * n
	};
}
function j(e) {
	return `${Math.round(e.x / S)},${Math.round(e.y / S)}`;
}
function M(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function N(e, t) {
	return e.x * t.x + e.y * t.y;
}
function P(e, t) {
	return e.x * t.y - e.y * t.x;
}
//#endregion
//#region ../core/src/rendering/immediate/markEncoding.js
function F(e, t, r, i, a = !1) {
	let o = t[r], s = t[r + "2"], c = t[r + "Offset"], l = t[r + "2Offset"], u = r == "x" ? e.width : e.height, d = r == "x" ? e.x : e.y + u, f = r == "x" ? u : -u, p = r == "x" ? e.x : e.y, m = p + u, h = R(o), g = s ? R(s) : 0, _ = R(c), v = l ? R(l) : 0, y = L(o, u, s), b = s && L(s, u, o), x = o.constant && !y ? I(o, i) + h : 0, S = s?.constant && !b ? I(s, i) + g : 0, C = c.constant ? I(c, i) + _ : 0, w = s && l?.constant ? I(l, i) + v : 0;
	return (e, t) => {
		let r = c.constant ? C : I(c, e) + _, i = y ? y(e) : o.constant ? x : I(o, e) + h, u = d + i * f + r, T = u;
		if (s) {
			let t = b ? b(e) : s.constant ? S : I(s, e) + g, n = l ? l.constant ? w : I(l, e) + v : r;
			T = d + t * f + n;
		}
		return t[0] = a ? n(u, p, m) : u, t[1] = a ? n(T, p, m) : T, t;
	};
}
function I(e, t) {
	return e(t);
}
function L(e, t, n) {
	let r = e.scale;
	if (!r || !("gapMapping" in r)) return;
	let i = r.gapMapping(t);
	if (!i) return;
	let a = e.branches[0].accessor, o = a.channelDef, c = n && s(e.channelDef) && n.branches[0].accessor, l = c ? 0 : .5, u = "band" in o ? o.band ?? l : l;
	return (e) => {
		let t = Number(a(e)), n = !!c && t > Number(c(e));
		return i.position(t, u, n);
	};
}
function R(e) {
	let t = e.scale;
	if (!t) return 0;
	let n = e.channelDef, r = n && "band" in n ? n.band ?? .5 : .5;
	return o(t, r);
}
function z(e, t) {
	return H(e(t));
}
function B(e, t) {
	let n = t.start ?? 0;
	if (!e.constant || n === (t.end ?? t.data.length)) return;
	let r = e.branches[0].accessor, i = r.channelDef, o = "value" in i ? i.value : "datum" in i ? i.datum : i;
	if (a(o)) {
		let e = r;
		if (!/^[$A-Z_a-z][$\w]*(?:\s*\.\s*[$A-Z_a-z][$\w]*)*(?:\s*\|\|\s*(?:"(?:[^"\\]|\\.)*"|null))?$/.test(o.expr.trim()) || !e.dependencies?.every((e) => e.batchStable)) return;
	}
	return H(e(t.data[n]));
}
function V(e, t) {
	return a(t) ? e.unitView.paramRuntime.evaluateAndGet(t) : t;
}
function H(e) {
	return e == null ? "none" : "" + e;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/arrow.js
function ee(e) {
	let t = e.properties, n = V(e, t.headSpacing);
	return {
		configuredRHeadSlope: le(V(e, t.headAngle)),
		configuredRHeadNotchSlope: le(V(e, t.headNotchAngle)),
		headShape: V(e, t.headShape),
		headWidth: V(e, t.headWidth),
		minSize: V(e, t.minSize),
		stem: V(e, t.stem),
		startNotch: V(e, t.startNotch),
		minStemLength: V(e, t.minStemLength),
		headSpacing: n,
		repeatHeads: n != null && n >= 0,
		headPlacement: V(e, t.headPlacement)
	};
}
function U(e, t, n, r, i) {
	let { viewOpacity: a } = n, o = e.encoders;
	return W(e, t, n, (e) => {
		let n = t.stem ? ie(e.tail, e.tip, e.tangent, e.normal, e.stemHalfWidth, e.rHeadSlope, t.startNotch && !e.bidirectional, e.bidirectional) : null, s = n ? [n] : [];
		ne(e, (t, n, r, i) => {
			let a = {
				x: t,
				y: n
			};
			s.push(e.renderedHeadShape == "open" ? ae(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope, e.size) : re(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope));
		});
		let c = (i ?? H(o.stroke(e.datum))) != "none" && I(o.strokeOpacity, e.datum) * a > 0 && e.strokeWidth > 0;
		r({
			datum: e.datum,
			boundaryLoops: s.length == 1 || !c ? s : C(s),
			strokeWidth: e.strokeWidth,
			headShapeFallback: e.headShapeFallback
		});
	});
}
function W(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, countOnly: s } = n, l = e.encoders;
	if (a.length == 0) return 0;
	let u = F(i, l, "x", a[0], c(e, "x")), d = F(i, l, "y", a[0], c(e, "y")), f = [0, 0], p = [0, 0], m = {
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
	}, h = 0;
	for (let e of a) {
		u(e, f), d(e, p);
		let n = te(l.direction, e), i = n == "reverse", a = n == "both", c = i ? f[1] : f[0], g = i ? p[1] : p[0], _ = i ? f[0] : f[1], v = i ? p[0] : p[1], y = _ - c, b = v - g, S = Math.hypot(y, b);
		if (S == 0) continue;
		let C = y / S, w = b / S, T = Math.max(I(l.size, e), t.minSize), E = T / 2, D = Math.max(t.headWidth * T, 0) / 2, O = oe({
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
		}), k = t.headShape == "open" ? O : Math.min(t.configuredRHeadNotchSlope, O), A = t.headShape == "open" ? T : 0, j = t.headPlacement == "outside" ? ce(D, O, k, A) : 0, M = _ + C * j, N = v + w * j;
		a && (c -= C * j, g -= w * j);
		let P = D * O, F = Math.hypot(D, P), L = t.headShape == "open" && F > 0 ? T * D / F : 0, R = M - C * (P + L), z = N - w * (P + L), B = a ? c + C * (P + L) : c, V = a ? g + w * (P + L) : g, H = I(l.strokeWidth, e), ee = Math.max(t.stem ? E : 0, D) + H * 2;
		if (!x(o, Math.min(c, M, R, B), Math.min(g, N, z, V), Math.max(c, M, R, B), Math.max(g, N, z, V), ee) || (h++, s)) continue;
		let U = t.headShape == "triangle" || t.headShape == "open" ? t.headShape : "triangle", W = P + A / Math.hypot(O, 1) + H, ne = !t.repeatHeads || a ? Infinity : Math.max((t.headSpacing ?? 0) * T, W);
		m.datum = e, q(m.tail, c, g), q(m.tip, M, N), q(m.tangent, C, w), q(m.normal, -w, C), q(m.reverseTangent, -C, -w), q(m.reverseNormal, w, -C), m.size = T, m.stemHalfWidth = E, m.headHalfWidth = D, m.headAxisLength = P, m.rHeadSlope = O, m.rHeadNotchSlope = k, m.strokeWidth = H, m.repeatSpacing = ne, m.headRepeatFootprint = W, m.geometryLength = Math.hypot(M - c, N - g), m.bidirectional = a, m.stemContainsHead = t.stem && U == "triangle" && (!t.repeatHeads || a) && D <= E, m.renderedHeadShape = U, m.headShapeFallback = U != t.headShape, r(m);
	}
	return h;
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
function ne(e, t) {
	e.bidirectional && !e.stemContainsHead && t(e.tail.x, e.tail.y, e.reverseTangent, e.reverseNormal);
	for (let n = 0; !e.stemContainsHead && !(n > 0 && n + e.headRepeatFootprint - e.strokeWidth / 2 > e.geometryLength || (t(e.tip.x - e.tangent.x * n, e.tip.y - e.tangent.y * n, e.tangent, e.normal), !(e.repeatSpacing > 0) || !Number.isFinite(e.repeatSpacing))); n += e.repeatSpacing);
}
function re(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = G(G(e, K(t, -o)), K(n, r)), l = G(G(e, K(t, -o)), K(n, -r));
	return [
		e,
		c,
		G(e, K(t, -s)),
		l
	];
}
function ie(e, t, n, r, i, a, o, s) {
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
function ae(e, t, n, r, i, a, o) {
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
function oe({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l, bidirectional: u }) {
	if (a || n < 0) return r;
	if (o == "outside") return !s || n <= 0 ? r : Math.min(r, Math.max(e - c, 0) / n);
	if (l != "triangle") return r;
	let d = Math.max(e - c, 0) / (u ? 2 : 1);
	return se(n, t, r, i) <= d ? r : d < n * i ? n > 0 ? ue(d / n, 0, r) : 0 : ue((d + (t - n) * i) / t, 0, r);
}
function se(e, t, n, r) {
	return t * n - (t - e) * Math.min(r, n);
}
function ce(e, t, n, r) {
	if (e <= 0) return 0;
	let i = e * t, a = Math.hypot(e, i);
	return i + r * e / a - (e - r * i / a) * n;
}
function le(e) {
	let t = ue(e, 1, 90) * Math.PI / 180;
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
function ue(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region ../core/src/rendering/immediate/linkFading.js
var de = 4;
function fe(e, t, n) {
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
function pe(e, t, n = !1) {
	let r = V(e, e.properties.arcFadingDistance);
	return t != "arc" && t != "dome" || r === !1 || r[0] <= 0 || r[1] <= 0 || n && V(e, e.properties.noFadingOnSecondPass) ? !1 : r;
}
function me(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= de; i++) {
			let a = i / de, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - he(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function he(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function J(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/linkGeometry.js
function ge(e, t, n, r) {
	return r.shape == "orthogonal" ? {
		type: "orthogonal",
		points: [
			e,
			r.orient == "horizontal" ? [e[0], t[1]] : [t[0], e[1]],
			t
		]
	} : {
		type: "cubic",
		points: _e(e, t, n, r)
	};
}
function _e(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = X(a, i), s = xe(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = Z(o, 1 / s), l = [-c[1], c[0]];
		s = ve(i, a, s, r.maxChordLength, n);
		let u = Z(l, Math.max(s / 2 * r.arcHeightFactor, r.minArcHeight) / .75);
		return [
			i,
			Y(i, u),
			Y(a, u),
			a
		];
	}
	if (r.shape == "dome") {
		let i, a, o;
		r.orient == "vertical" ? (i = [Math.min(e[0], t[0]), t[1]], a = [Math.max(e[0], t[0]), t[1]], o = [0, e[1] - t[1]]) : (i = [t[0], Math.min(e[1], t[1])], a = [t[0], Math.max(e[1], t[1])], o = [e[0] - t[0], 0]);
		let s = xe(X(a, i));
		ve(i, a, s, r.maxChordLength, n), r.clampApex && ye(i, a, r.orient, n);
		let c = Z(o, 1 / .75);
		return [
			i,
			Y(i, c),
			Y(a, c),
			a
		];
	}
	if (r.shape == "diagonal") {
		if (r.orient == "vertical") {
			let n = (e[1] + t[1]) / 2;
			return [
				e,
				[e[0], n],
				[t[0], n],
				t
			];
		}
		{
			let n = (e[0] + t[0]) / 2;
			return [
				e,
				[n, e[1]],
				[n, t[1]],
				t
			];
		}
	}
	if (r.shape == "line") {
		let n = Z(Y(e, t), .5);
		return [
			e,
			n,
			n,
			t
		];
	}
	throw Error(`Unsupported link shape: ${r.shape}`);
}
function ve(e, t, n, r, i) {
	if (n <= r) return n;
	let a = Z(X(t, e), 1 / n);
	return be(e, i, 2) ? (Se(t, Y(e, Z(a, r))), r) : be(t, i, 2) ? (Se(e, X(t, Z(a, r))), r) : n;
}
function ye(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function be(e, t, n) {
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
function xe(e) {
	return Math.hypot(e[0], e[1]);
}
function Se(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/rendering/immediate/marks/link.js
function Ce(e) {
	let t = e.properties;
	return {
		shape: V(e, t.linkShape),
		orient: V(e, t.orient),
		arcHeightFactor: V(e, t.arcHeightFactor),
		minArcHeight: V(e, t.minArcHeight),
		maxChordLength: V(e, t.maxChordLength),
		clampApex: V(e, t.clampApex)
	};
}
function we(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let l = F(i, s, "x", a[0], c(e, "x")), u = F(i, s, "y", a[0], c(e, "y")), d = [0, 0], f = [0, 0], p = i.x, m = i.y, h = {
		width: i.width,
		height: i.height
	}, g = m + h.height, _ = c(e, "x") || c(e, "y"), v = 0;
	for (let e of a) {
		if (l(e, d), u(e, f), (_ || t.shape == "orthogonal") && d[0] === d[1] && f[0] === f[1]) continue;
		let [i, a] = d, [c, m] = f, y = ge([i - p, g - c], [a - p, g - m], h, t), b = Infinity, S = Infinity, C = -Infinity, w = -Infinity;
		for (let e of y.points) e[0] += p, e[1] = g - e[1], b = Math.min(b, e[0]), S = Math.min(S, e[1]), C = Math.max(C, e[0]), w = Math.max(w, e[1]);
		let T = I(s.size, e);
		x(o, b, S, C, w, Math.max(T, n.minPickingSize ?? 0) / 2) && (v++, r({
			datum: e,
			geometry: y,
			strokeWidth: T
		}));
	}
	return v;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/point.js
function Te(e) {
	return { inwardStroke: V(e, e.properties.inwardStroke) };
}
function Ee(e, t, r, i) {
	let { coords: a, data: o, visibleBounds: s, anchorCullBounds: l } = r, u = r.start ?? 0, d = r.end ?? o.length, f = e.encoders;
	if (u === d) return 0;
	let p = F(a, f, "x", o[u]), m = F(a, f, "y", o[u]), h = [0, 0], g = [0, 0], _ = e.getSemanticThreshold(), v = {
		datum: {},
		shape: "circle",
		x: 0,
		y: 0,
		geometryRadius: 0,
		boundsRadius: 0,
		angle: 0,
		strokeWidth: 0,
		lineShape: !1
	}, y = c(e, "x"), S = c(e, "y"), C = 0;
	for (let e = u; e < d; e++) {
		let r = o[e];
		if (I(f.semanticScore, r) < _) continue;
		p(r, h), m(r, g);
		let c = h[0] + I(f.dx, r), u = g[0] - I(f.dy, r);
		if (y && (c = n(c, a.x, a.x2)), S && (u = n(u, a.y, a.y2)), b(l, c, u)) continue;
		let d = Math.sqrt(I(f.size, r)) / 2;
		if (t.inwardStroke && d <= 0) continue;
		let w = z(f.shape, r), T = I(f.strokeWidth, r), E = w == "x" || w == "+", D = t.inwardStroke && !E ? Math.min(T, d) : T, O = t.inwardStroke && !E ? d - D / 2 : d, k = t.inwardStroke ? 0 : T / 2, A = d * Math.SQRT2 + k;
		x(s, c - A, u - A, c + A, u + A) && (C++, v.datum = r, v.shape = w, v.x = c, v.y = u, v.geometryRadius = O, v.boundsRadius = A, v.angle = I(f.angle, r), v.strokeWidth = D, v.lineShape = E, i(v));
	}
	return C;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/pointPath.js
function De(e, t, n, r, i) {
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
var Oe = .1;
function ke(e) {
	let t = e.properties, n = V(e, t.cornerRadius), r = {
		topLeft: V(e, t.cornerRadiusTopLeft ?? n),
		topRight: V(e, t.cornerRadiusTopRight ?? n),
		bottomRight: V(e, t.cornerRadiusBottomRight ?? n),
		bottomLeft: V(e, t.cornerRadiusBottomLeft ?? n)
	}, i = {
		blur: V(e, t.shadowBlur ?? 0),
		color: V(e, t.shadowColor ?? "black"),
		offsetX: V(e, t.shadowOffsetX ?? 0),
		offsetY: V(e, t.shadowOffsetY ?? 0),
		opacity: V(e, t.shadowOpacity ?? 0)
	}, a = V(e, t.hatch ?? "none"), o = !Ne(r);
	return {
		cornerRadii: r,
		minWidth: V(e, t.minWidth),
		minHeight: V(e, t.minHeight),
		minOpacity: V(e, t.minOpacity),
		shadow: i,
		hatch: a,
		hasCornerRadii: o,
		canPadSeams: a == "none" && i.opacity == 0 && !o
	};
}
function Ae(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, viewOpacity: s } = n, l = n.start ?? 0, u = n.end ?? a.length, d = e.encoders;
	if (l === u) return 0;
	let f = d.strokeWidth.constant, p = d.fillOpacity.constant, m = f ? I(d.strokeWidth, a[l]) : 0, h = p ? I(d.fillOpacity, a[l]) : 0, g = B(d.fill, n), _ = t.shadow.opacity > 0 ? t.shadow.blur + Math.max(Math.abs(t.shadow.offsetX), Math.abs(t.shadow.offsetY)) : 0, v = F(i, d, "x", a[l], c(e, "x")), y = F(i, d, "y", a[l], c(e, "y")), b = [0, 0], S = [0, 0], C = c(e, "x"), w = c(e, "y"), T = {
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
	}, E = 0;
	for (let e = l; e < u; e++) {
		let n = a[e];
		if (v(n, b), y(n, S), C && b[0] === b[1] || w && S[0] === S[1]) continue;
		let i = Math.min(b[0], b[1]), c = Math.min(S[0], S[1]), l = Math.abs(b[1] - b[0]), u = Math.abs(S[1] - S[0]), D = je(l, t.minWidth), O = je(u, t.minHeight), k = Math.max(t.minOpacity, D * O);
		l < t.minWidth && (i -= (t.minWidth - l) / 2, l = t.minWidth), u < t.minHeight && (c -= (t.minHeight - u) / 2, u = t.minHeight);
		let A = f ? m : I(d.strokeWidth, n), j = g ?? H(d.fill(n)), M = (p ? h : I(d.fillOpacity, n)) * s, N = A == 0 && M == 1 && k == 1 && t.canPadSeams && j != "none" ? Oe : 0;
		N && (i -= N, c -= N, l += N * 2, u += N * 2), x(o, i, c, i + l, c + u, A / 2 + _) && (E++, T.datum = n, T.x = i, T.y = c, T.width = l, T.height = u, T.opacityFactor = k, T.strokeWidth = A, T.fill = j, T.fillOpacity = M, t.hasCornerRadii && Me(t.cornerRadii, l, u, T.radii), r(T));
	}
	return E;
}
function je(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function Me(e, t, n, r) {
	let i = Math.min(t, n) / 2;
	r.topLeft = Math.max(0, Math.min(e.topLeft, i)), r.topRight = Math.max(0, Math.min(e.topRight, i)), r.bottomRight = Math.max(0, Math.min(e.bottomRight, i)), r.bottomLeft = Math.max(0, Math.min(e.bottomLeft, i));
}
function Ne(e) {
	return e.topLeft == 0 && e.topRight == 0 && e.bottomRight == 0 && e.bottomLeft == 0;
}
//#endregion
//#region ../core/src/utils/clipSegment.js
function Pe(e, t, n, r, i, a, o, s, c) {
	if (!Number.isFinite(e) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r)) return !1;
	let l = n - e, u = r - t, d = 0, f = 1;
	if (l == 0) {
		if (e < i || e > o) return !1;
	} else {
		let t = (i - e) / l, n = (o - e) / l;
		d = Math.max(d, Math.min(t, n)), f = Math.min(f, Math.max(t, n));
	}
	if (u == 0) {
		if (t < a || t > s) return !1;
	} else {
		let e = (a - t) / u, n = (s - t) / u;
		d = Math.max(d, Math.min(e, n)), f = Math.min(f, Math.max(e, n));
	}
	return d > f ? !1 : (c[0] = e + d * l, c[1] = t + d * u, c[2] = e + f * l, c[3] = t + f * u, !0);
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rule.js
function Fe(e) {
	return { minLength: V(e, e.properties.minLength) };
}
function Ie(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let l = F(i, s, "x", a[0]), u = F(i, s, "y", a[0]), d = [0, 0], f = [0, 0], p = {
		datum: {},
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		strokeWidth: 0
	}, m = c(e, "x"), h = c(e, "y"), g = [
		0,
		0,
		0,
		0
	], _ = 0;
	for (let e of a) {
		l(e, d), u(e, f);
		let [n, a] = d, [c, v] = f, y = I(s.size, e), b = y + t.minLength + 1, S = Math.max(o.x2 - o.x1, b), C = Math.max(o.y2 - o.y1, b);
		if (!Pe(n, c, a, v, m ? i.x : o.x1 - S, h ? i.y : o.y1 - C, m ? i.x2 : o.x2 + S, h ? i.y2 : o.y2 + C, g) || ([n, c, a, v] = g, n === a && c === v)) continue;
		let w = a - n, T = v - c, E = Math.hypot(w, T);
		if (E > 0 && E < t.minLength) {
			let e = (t.minLength - E) / 2, r = w / E, i = T / E;
			n -= r * e, c -= i * e, a += r * e, v += i * e;
		}
		x(o, n, c, a, v, y / 2) && (_++, p.datum = e, p.x1 = n, p.y1 = c, p.x2 = a, p.y2 = v, p.strokeWidth = y, r(p));
	}
	return _;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/text.js
function Le(e) {
	let t = e.properties;
	return {
		align: V(e, t.align),
		baseline: V(e, t.baseline),
		logoLetters: V(e, t.logoLetters),
		paddingX: V(e, t.paddingX),
		paddingY: V(e, t.paddingY),
		flushX: V(e, t.flushX),
		flushY: V(e, t.flushY),
		squeeze: V(e, t.squeeze),
		dx: V(e, t.dx),
		dy: V(e, t.dy)
	};
}
function Re(t, n, a, o) {
	let { coords: s, data: l, visibleBounds: u, anchorCullBounds: d } = a, { align: f, baseline: p } = n, m = t.encoders;
	if (l.length == 0) return 0;
	let h = m.size.constant ? I(m.size, l[0]) : 0, g = m.angle.constant ? I(m.angle, l[0]) : 0, _ = F(s, m, "x", l[0], c(t, "x")), v = F(s, m, "y", l[0], c(t, "y")), y = t.encoding.text, x = "format" in y ? i(y.format) : (e) => e, S = [0, 0], C = [0, 0], w = {
		width: 0,
		height: 0
	}, T = {
		x: 0,
		y: 0
	}, E = {
		position: 0,
		scale: 0
	}, D = {
		scaleX: 0,
		scaleY: 0,
		originX: 0,
		originY: 0
	}, O = Array(8).fill(0), k = {
		datum: {},
		text: "",
		x: 0,
		y: 0,
		size: 0,
		width: 0,
		angle: 0,
		dx: n.dx,
		dy: n.dy,
		fadeOpacity: 1,
		scale: 1,
		logoTransform: void 0,
		multiCharacterLogo: !1,
		boundsQuad: O
	}, A = !!m.x2, j = !!m.y2, M = A && c(t, "x"), N = j && c(t, "y"), P = 0;
	for (let t of l) {
		let i = x(m.text(t)), c = r(i) ? i : i === null ? "" : "" + i;
		if (!c || (_(t, S), v(t, C), M && S[0] === S[1] || N && C[0] === C[1])) continue;
		let [l, y] = S, [F, L] = C, R = m.size.constant ? h : I(m.size, t), z = m.angle.constant ? g : I(m.angle, t);
		if (n.logoLetters) {
			let e = R, r = R;
			if (A && (e = y - l, l = (l + y) / 2), j && (r = F - L, F = (F + L) / 2), ze(O, l, F, Math.abs(e), Math.abs(r), "center", "middle", z, n.dx, n.dy), !e || !r || b(d, l, F) || !Be(u, O)) continue;
			let i = a.measureLogoInkBounds(c);
			if (!i) continue;
			P++, k.datum = t, k.text = c, k.x = l, k.y = F, k.size = 100, k.width = i.xMax - i.xMin, k.angle = z, k.fadeOpacity = 1, k.scale = 1, D.scaleX = e / k.width, D.scaleY = r / (i.yMax - i.yMin), D.originX = (i.xMin + i.xMax) / 2, D.originY = (i.yMin + i.yMax) / 2, k.logoTransform = D, k.multiCharacterLogo = c.length > 1, o(k);
			continue;
		}
		let B = a.fontMeasurement.measureWidth(c, R);
		Ve(B, R, z, w), A || j ? Ue(f, p, z, T) : (T.x = We[f], T.y = Ge[p]);
		let V = 1;
		if (A && (He(Math.min(l, y), Math.max(l, y), w.width, n.paddingX, T.x, n.flushX, s.x, s.x2, E), l = E.position, V *= E.scale), j && (He(Math.min(F, L), Math.max(F, L), w.height * V, n.paddingY, T.y, n.flushY, s.y, s.y2, E), F = E.position, V *= E.scale), b(d, l, F)) continue;
		let H = 1;
		if (V < 1) {
			if (!n.squeeze || V < 3 / R) continue;
			H = e(3 / R, 6 / R, V);
		}
		let ee = R * V, U = B * V;
		ze(O, l, F, U, ee, f, p, z, n.dx, n.dy), Be(u, O) && (P++, k.datum = t, k.text = c, k.x = l, k.y = F, k.size = R, k.width = U, k.angle = z, k.fadeOpacity = H, k.scale = V, k.logoTransform = void 0, k.multiCharacterLogo = !1, o(k));
	}
	return P;
}
function ze(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - (We[a] + 1) / 2 * r, d = n + l - (Ge[o] + 1) / 2 * i, f = u + r, p = d + i, m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m);
	return $(e, 0, t, n, u, d, h, g), $(e, 2, t, n, f, d, h, g), $(e, 4, t, n, f, p, h, g), $(e, 6, t, n, u, p, h, g), e;
}
function Be(e, t) {
	return x(e, Math.min(t[0], t[2], t[4], t[6]), Math.min(t[1], t[3], t[5], t[7]), Math.max(t[0], t[2], t[4], t[6]), Math.max(t[1], t[3], t[5], t[7]), 1);
}
function $(e, t, n, r, i, a, o, s) {
	e[t] = n + (i - n) * s - (a - r) * o, e[t + 1] = r + (i - n) * o + (a - r) * s;
}
function Ve(e, t, n, r) {
	let i = n * Math.PI / 180, a = Math.abs(Math.sin(i)), o = Math.abs(Math.cos(i));
	r.width = e * o + t * a, r.height = e * a + t * o;
}
function He(e, t, n, r, i, a, o, s, c) {
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
function Ue(e, t, n, r) {
	let i = We[e], a = -Ge[t], o = ((n + 45) % 360 + 360) % 360, s, c;
	o < 90 ? (s = i, c = a) : o < 180 ? (s = a, c = -i) : o < 270 ? (s = -i, c = a) : (s = -a, c = i), r.x = s, r.y = -c;
}
var We = {
	left: -1,
	center: 0,
	right: 1
}, Ge = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Ke = [
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
], qe = /* @__PURE__ */ new Set([
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
]), Je = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function Ye(e) {
	let t = e ?? "Lato";
	return [t, ...Ke.filter((e) => e.toLowerCase() != t.toLowerCase())].map($e).join(", ");
}
function Xe(e) {
	if (typeof e == "number") return e;
	let t = Je[e];
	if (t === void 0) throw Error("Unknown font weight: " + e);
	return t;
}
function Ze(e) {
	return {
		style: e.fontStyle ?? "normal",
		weight: Xe(e.fontWeight ?? "normal"),
		family: Ye(e.font)
	};
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
	return qe.has(t) ? t : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
//#region ../core/src/rendering/nativeTextMetrics.js
var et = "Mg", tt = 100, nt = class {
	#e;
	#t;
	#n = new t([], JSON.stringify);
	#r = [];
	#i;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.fontKerning = "normal", e.direction = "ltr", e.textAlign = "left", e.textBaseline = "alphabetic";
	}
	requestFont(e) {
		let t = Ze(e), n = this.#n.get(t);
		if (!n) {
			n = new rt((e, n) => this.#a(t, e, n)), this.#n.set(t, n);
			let e = this.#t?.load(ot(t, 16));
			e && this.#r.push(e.then(() => n.invalidateCache()));
		}
		return n;
	}
	async waitUntilReady() {
		await Promise.all(this.#r);
	}
	#a(e, t, n) {
		let r = ot(e, n);
		return r != this.#i && (this.#e.font = r, this.#i = r), this.#e.measureText(t);
	}
}, rt = class {
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
			let t = this.#e(et, e);
			this.#r = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
		}
		return this.#r;
	}
	measureInkBounds(e) {
		let t = e.length == 1 ? e.charCodeAt(0) : 128;
		if (t < 128 && this.#i[t] !== void 0) return this.#i[t];
		let n = it(this.#e(e, tt));
		return t < 128 && (this.#i[t] = n), n;
	}
	invalidateCache() {
		this.#t = NaN, this.#n.fill(NaN), this.#r = NaN, this.#i.fill(void 0);
	}
	#a(e) {
		e != this.#t && (this.#t = e, this.#n.fill(NaN), this.#r = NaN);
	}
};
function it(e) {
	let t = {
		xMin: -e.actualBoundingBoxLeft,
		xMax: e.actualBoundingBoxRight,
		yMin: -e.actualBoundingBoxAscent,
		yMax: e.actualBoundingBoxDescent
	};
	return t.xMax > t.xMin && t.yMax > t.yMin ? t : null;
}
function at(e, t) {
	let n = e.requestFont(t);
	return n instanceof rt ? (e) => n.measureInkBounds(e) : (e) => {
		let t = n.measureWidth(e, tt), r = n.getHeight(tt);
		return t > 0 && r > 0 ? {
			xMin: 0,
			xMax: t,
			yMin: -r,
			yMax: 0
		} : null;
	};
}
function ot(e, t) {
	return `${e.style} ${e.weight} ${t}px ${e.family}`;
}
function st(e) {
	let t = e.createElement("canvas").getContext("2d");
	if (!t) throw Error("Canvas2D text measurement is unavailable.");
	return new nt(t, e.fonts);
}
async function ct(e, t) {
	t.visit((t) => {
		let n = t.mark;
		n?.getType() == "text" && e.requestFont(n.properties);
	}), await e.waitUntilReady();
}
//#endregion
//#region ../core/src/rendering/immediate/order.js
function lt(e, t, n, r, i) {
	let a = [], o = [];
	for (let i = t; i < n; i++) {
		let t = e[i];
		(r(t) ? a : o).push(t);
	}
	return i.map((e) => e === "matching" ? a : o);
}
//#endregion
export { V as A, ee as C, I as D, W as E, x as F, f as I, m as L, v as M, _ as N, B as O, y as P, pe as S, U as T, Ee as _, Ye as a, me as b, Le as c, Ie as d, Pe as f, Te as g, De as h, at as i, H as j, F as k, Re as l, Ae as m, st as n, Qe as o, ke as p, ct as r, Xe as s, lt as t, Fe as u, Ce as v, ne as w, fe as x, we as y };
