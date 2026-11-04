import { Bn as e, at as t, ir as n, jt as r, m as i, ot as a } from "./clipOptions-Dqn337WO.js";
import { X as o } from "./flowNode-BSjy0Wz3.js";
import { a as s } from "./rasterization-QktH8Sn2.js";
import { l as c, t as l, u } from "./rectangle-CQIQpWfg.js";
import { t as d } from "./color-BM6tqh_h.js";
//#region ../core/src/rendering/immediate/markData.js
var f = [], p = ["x", "y"], m = class {
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
function h(e, t) {
	let n = e.unitView.getCollector();
	if (!n) throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);
	let r = n.facetBatches.get(void 0);
	return r?.length ? r : n.facetBatches.get(t.facetId) ?? f;
}
function g(e, t, n, r, i, a) {
	let o = h(e, t);
	if (t.sampleFacetRenderingOptions) {
		let a = r.resolveFacet(n, t.sampleFacetRenderingOptions);
		_(e, a) && i(a, o);
	} else if (e.encoders.facetIndex) for (let [s, c] of v(e.encoders.facetIndex, o)) {
		let o = r.resolvePlacement(n, t.placement?.source, s);
		o ? _(e, o) && i(o, c) : a(s);
	}
	else _(e, n) && i(n, o);
}
function _(e, t) {
	if (e.properties.clamp && t.height <= 0) return !1;
	for (let n of p) {
		let r = e.encoders[n]?.scale;
		if (r && "gapMapping" in r) {
			let e = n === "x" ? t.width : t.height;
			if (r.gapMapping(e)?.fits === !1) return !1;
		}
	}
	return !0;
}
function v(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) {
		let t = +e(r), i = n.get(t);
		i || (i = [], n.set(t, i)), i.push(r);
	}
	return n;
}
//#endregion
//#region ../core/src/rendering/immediate/bounds.js
function y(e, t, n) {
	return {
		x1: n?.clipX ? Math.max(0, n.rect.x) : 0,
		y1: n?.clipY ? Math.max(0, n.rect.y) : 0,
		x2: n?.clipX ? Math.min(e, n.rect.x2) : e,
		y2: n?.clipY ? Math.min(t, n.rect.y2) : t
	};
}
function b(e, t, n) {
	let r = n === !0 || n === "x", i = n === !0 || n === "y";
	return {
		x1: r ? t?.clipX ? t.rect.x : e.x : -Infinity,
		y1: i ? t?.clipY ? t.rect.y : e.y : -Infinity,
		x2: r ? t?.clipX ? t.rect.x2 : e.x2 : Infinity,
		y2: i ? t?.clipY ? t.rect.y2 : e.y2 : Infinity
	};
}
function x(e) {
	return e.x1 <= e.x2 && e.y1 <= e.y2;
}
function S(e, t, n) {
	return t < e.x1 || t > e.x2 || n < e.y1 || n > e.y2;
}
function C(e, t, n, r, i, a = 0) {
	return !(Math.max(t, r) + a < e.x1 || Math.min(t, r) - a > e.x2 || Math.max(n, i) + a < e.y1 || Math.min(n, i) - a > e.y2);
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/polygonUnion.js
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
		e > w && e < .99999999 && t >= -1e-8 && t <= 1.00000001 && n.push(e);
	} else Math.abs(I(a, r)) <= w && (D(e, t.a, n), D(e, t.b, n));
}
function D(e, t, n) {
	let r = P(e.b, e.a), i = F(r, r), a = F(P(t, e.a), r) / i;
	a > w && a < .99999999 && n.push(a);
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
//#region ../core/src/rendering/immediate/markEncoding.js
var L = /* @__PURE__ */ new WeakMap();
function R(e) {
	let t = L.get(e);
	if (!t) {
		let n = /* @__PURE__ */ new Map([["none", 0]]), r = "none", i = 0;
		t = (e) => {
			if (e !== r) {
				let t = n.get(e);
				t === void 0 && (t = d(e)[3], n.set(e, t)), r = e, i = t;
			}
			return i;
		}, L.set(e, t);
	}
	return t;
}
function z(e, t, n, r, i = !1) {
	let o = t[n], s = t[n + "2"], c = t[n + "Offset"], l = t[n + "2Offset"], u = n == "x" ? e.width : e.height, d = n == "x" ? e.x : e.y + u, f = n == "x" ? u : -u, p = n == "x" ? e.x : e.y, m = p + u, h = H(o), g = s ? H(s) : 0, _ = H(c), v = l ? H(l) : 0, y = V(o, u, s), b = s && V(s, u, o), x = o.constant && !y ? B(o, r) + h : 0, S = s?.constant && !b ? B(s, r) + g : 0, C = c.constant ? B(c, r) + _ : 0, w = s && l?.constant ? B(l, r) + v : 0;
	return (e, t) => {
		let n = c.constant ? C : B(c, e) + _, r = y ? y(e) : o.constant ? x : B(o, e) + h, u = d + r * f + n, T = u;
		if (s) {
			let t = b ? b(e) : s.constant ? S : B(s, e) + g, r = l ? l.constant ? w : B(l, e) + v : n;
			T = d + t * f + r;
		}
		return t[0] = i ? a(u, p, m) : u, t[1] = i ? a(T, p, m) : T, t;
	};
}
function B(e, t) {
	return e(t);
}
function V(e, t, n) {
	let i = e.scale;
	if (!i || !("gapMapping" in i)) return;
	let a = i.gapMapping(t);
	if (!a) return;
	let o = n && (i.type === "index" || i.type === "locus") && c(e.channelDef) && n.branches[0].accessor, s = o ? 0 : .5, l = e.branches.map(({ accessor: e }) => {
		let t = e.channelDef;
		if (r(t)) return e.asNumberAccessor();
		let n = "band" in t ? t.band ?? s : s;
		return (t) => {
			let r = e(t), i = !!o && Number(r) > Number(o(t));
			return a.position(r, n, i);
		};
	});
	return (t) => {
		for (let n = 0; n < l.length; n++) if (e.branches[n].predicate(t)) return l[n](t);
	};
}
function H(e) {
	let t = e.scale;
	if (!t) return 0;
	let n = e.channelDef, r = n && "band" in n ? n.band ?? .5 : .5;
	return s(t, r);
}
function U(e, t) {
	return K(e(t));
}
function W(e, t) {
	let n = t.start ?? 0;
	if (!e.constant || n === (t.end ?? t.data.length)) return;
	let r = e.branches[0].accessor, a = r.channelDef, o = "value" in a ? a.value : "datum" in a ? a.datum : a;
	if (i(o)) {
		let e = r;
		if (!/^[$A-Z_a-z][$\w]*(?:\s*\.\s*[$A-Z_a-z][$\w]*)*(?:\s*\|\|\s*(?:"(?:[^"\\]|\\.)*"|null))?$/.test(o.expr.trim()) || !e.dependencies?.every((e) => e.batchStable)) return;
	}
	return K(e(t.data[n]));
}
function G(e, t) {
	return i(t) ? e.unitView.paramRuntime.evaluateAndGet(t) : t;
}
function K(e) {
	return e == null ? "none" : "" + e;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/arrow.js
function ee(e) {
	let t = e.properties, n = G(e, t.headSpacing);
	return {
		configuredRHeadSlope: de(G(e, t.headAngle)),
		configuredRHeadNotchSlope: de(G(e, t.headNotchAngle)),
		headShape: G(e, t.headShape),
		headWidth: G(e, t.headWidth),
		minSize: G(e, t.minSize),
		stem: G(e, t.stem),
		startNotch: G(e, t.startNotch),
		minStemLength: G(e, t.minStemLength),
		headSpacing: n,
		repeatHeads: n != null && n >= 0,
		headPlacement: G(e, t.headPlacement)
	};
}
function te(e, t, n, r, i) {
	let { viewOpacity: a } = n, o = e.encoders, s = R(o.stroke);
	return ne(e, t, n, (e) => {
		let n = t.stem ? oe(e.tail, e.tip, e.tangent, e.normal, e.stemHalfWidth, e.rHeadSlope, t.startNotch && !e.bidirectional, e.bidirectional) : null, c = n ? [n] : [];
		ie(e, (t, n, r, i) => {
			let a = {
				x: t,
				y: n
			};
			c.push(e.renderedHeadShape == "open" ? se(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope, e.size) : ae(a, r, i, e.headHalfWidth, e.rHeadSlope, e.rHeadNotchSlope));
		});
		let l = i ?? K(o.stroke(e.datum)), u = B(o.strokeOpacity, e.datum) * s(l) * a > 0 && e.strokeWidth > 0;
		r({
			datum: e.datum,
			boundaryLoops: c.length == 1 || !u ? c : T(c),
			strokeWidth: e.strokeWidth,
			headShapeFallback: e.headShapeFallback
		});
	});
}
function ne(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, countOnly: s } = n, c = e.encoders;
	if (a.length == 0) return 0;
	let l = z(i, c, "x", a[0], u(e, "x")), d = z(i, c, "y", a[0], u(e, "y")), f = [0, 0], p = [0, 0], m = {
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
		l(e, f), d(e, p);
		let n = re(c.direction, e), i = n == "reverse", a = n == "both", u = i ? f[1] : f[0], g = i ? p[1] : p[0], _ = i ? f[0] : f[1], v = i ? p[0] : p[1], y = _ - u, b = v - g, x = Math.hypot(y, b);
		if (x == 0) continue;
		let S = y / x, w = b / x, T = Math.max(B(c.size, e), t.minSize), E = T / 2, D = Math.max(t.headWidth * T, 0) / 2, O = ce({
			segmentLength: x,
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
		}), k = t.headShape == "open" ? O : Math.min(t.configuredRHeadNotchSlope, O), A = t.headShape == "open" ? T : 0, j = t.headPlacement == "outside" ? ue(D, O, k, A) : 0, M = _ + S * j, N = v + w * j;
		a && (u -= S * j, g -= w * j);
		let P = D * O, F = Math.hypot(D, P), I = t.headShape == "open" && F > 0 ? T * D / F : 0, L = M - S * (P + I), R = N - w * (P + I), z = a ? u + S * (P + I) : u, V = a ? g + w * (P + I) : g, H = B(c.strokeWidth, e), U = Math.max(t.stem ? E : 0, D) + H * 2;
		if (!C(o, Math.min(u, M, L, z), Math.min(g, N, R, V), Math.max(u, M, L, z), Math.max(g, N, R, V), U) || (h++, s)) continue;
		let W = t.headShape == "triangle" || t.headShape == "open" ? t.headShape : "triangle", G = P + A / Math.hypot(O, 1) + H, K = !t.repeatHeads || a ? Infinity : Math.max((t.headSpacing ?? 0) * T, G);
		m.datum = e, Y(m.tail, u, g), Y(m.tip, M, N), Y(m.tangent, S, w), Y(m.normal, -w, S), Y(m.reverseTangent, -S, -w), Y(m.reverseNormal, w, -S), m.size = T, m.stemHalfWidth = E, m.headHalfWidth = D, m.headAxisLength = P, m.rHeadSlope = O, m.rHeadNotchSlope = k, m.strokeWidth = H, m.repeatSpacing = K, m.headRepeatFootprint = G, m.geometryLength = Math.hypot(M - u, N - g), m.bidirectional = a, m.stemContainsHead = t.stem && W == "triangle" && (!t.repeatHeads || a) && D <= E, m.renderedHeadShape = W, m.headShapeFallback = W != t.headShape, r(m);
	}
	return h;
}
function re(e, t) {
	let n = U(e, t);
	switch (n) {
		case "forward":
		case "reverse":
		case "both": return n;
		default: throw Error(`Invalid value for "direction" channel: ${n}`);
	}
}
function ie(e, t) {
	e.bidirectional && !e.stemContainsHead && t(e.tail.x, e.tail.y, e.reverseTangent, e.reverseNormal);
	for (let n = 0; !e.stemContainsHead && !(n > 0 && n + e.headRepeatFootprint - e.strokeWidth / 2 > e.geometryLength || (t(e.tip.x - e.tangent.x * n, e.tip.y - e.tangent.y * n, e.tangent, e.normal), !(e.repeatSpacing > 0) || !Number.isFinite(e.repeatSpacing))); n += e.repeatSpacing);
}
function ae(e, t, n, r, i, a) {
	let o = r * i, s = o - r * a, c = q(q(e, J(t, -o)), J(n, r)), l = q(q(e, J(t, -o)), J(n, -r));
	return [
		e,
		c,
		q(e, J(t, -s)),
		l
	];
}
function oe(e, t, n, r, i, a, o, s) {
	let c = i * a, l = q(q(t, J(n, -c)), J(r, i)), u = q(q(t, J(n, -c)), J(r, -i)), d = q(e, J(r, i)), f = q(e, J(r, -i));
	return s ? [
		t,
		l,
		q(q(e, J(n, c)), J(r, i)),
		e,
		q(q(e, J(n, c)), J(r, -i)),
		u
	] : [
		t,
		l,
		d,
		...o ? [q(e, J(n, i * a))] : [],
		f,
		u
	];
}
function se(e, t, n, r, i, a, o) {
	let s = r * i, c = q(q(e, J(t, -s)), J(n, r)), l = q(q(e, J(t, -s)), J(n, -r)), u = Math.hypot(r, s), d = u > 0 ? o * r / u : 0, f = u > 0 ? o * s / u : 0, p = q(q(c, J(t, -d)), J(n, -f)), m = q(q(l, J(t, -d)), J(n, f));
	return [
		e,
		c,
		p,
		q(e, J(t, -(s + d - (r - f) * a))),
		m,
		l
	];
}
function ce({ segmentLength: e, headHalfWidth: t, stemHalfWidth: n, configuredRHeadSlope: r, configuredRHeadNotchSlope: i, headRepeat: a, headPlacement: o, startNotch: s, minStemLength: c, headShape: l, bidirectional: u }) {
	if (a || n < 0) return r;
	if (o == "outside") return !s || n <= 0 ? r : Math.min(r, Math.max(e - c, 0) / n);
	if (l != "triangle") return r;
	let d = Math.max(e - c, 0) / (u ? 2 : 1);
	return le(n, t, r, i) <= d ? r : d < n * i ? n > 0 ? fe(d / n, 0, r) : 0 : fe((d + (t - n) * i) / t, 0, r);
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
function q(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function J(e, t) {
	return {
		x: e.x * t,
		y: e.y * t
	};
}
function Y(e, t, n) {
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
		X(o, 6),
		X(s, 6),
		X(c, 1),
		X(l, 1),
		X(u, 1)
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
function he(e, t, n = !1) {
	let r = G(e, e.properties.arcFadingDistance);
	return t != "arc" && t != "dome" || r === !1 || r[0] <= 0 || r[1] <= 0 || n && G(e, e.properties.noFadingOnSecondPass) ? !1 : r;
}
function ge(e, t) {
	let n = [], r = (r) => {
		for (let i = 0; i <= pe; i++) {
			let a = i / pe, o = r ? t + (e - t) * a : e + (t - e) * a, s = r ? (t - o) / (2 * t) : (t + o) / (2 * t), c = (o - e) / (t - e);
			n.push({
				offset: s,
				opacity: 1 - _e(c)
			});
		}
	};
	return r(!0), r(!1), n;
}
function _e(e) {
	let t = Math.max(0, Math.min(1, e));
	return t * t * (3 - 2 * t);
}
function X(e, t) {
	let n = 10 ** t;
	return Math.round(e * n) / n;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/linkGeometry.js
function ve(e, t, n, r) {
	return r.shape == "orthogonal" ? {
		type: "orthogonal",
		points: [
			e,
			r.orient == "horizontal" ? [e[0], t[1]] : [t[0], e[1]],
			t
		]
	} : {
		type: "cubic",
		points: ye(e, t, n, r)
	};
}
function ye(e, t, n, r) {
	if (r.shape == "arc") {
		let i = [...e], a = [...t], o = Ce(a, i), s = we(o);
		if (s == 0) return [
			i,
			i,
			a,
			a
		];
		let c = Q(o, 1 / s), l = [-c[1], c[0]];
		s = be(i, a, s, r.maxChordLength, n);
		let u = Q(l, Math.max(s / 2 * r.arcHeightFactor, r.minArcHeight) / .75);
		return [
			i,
			Z(i, u),
			Z(a, u),
			a
		];
	}
	if (r.shape == "dome") {
		let i, a, o;
		r.orient == "vertical" ? (i = [Math.min(e[0], t[0]), t[1]], a = [Math.max(e[0], t[0]), t[1]], o = [0, e[1] - t[1]]) : (i = [t[0], Math.min(e[1], t[1])], a = [t[0], Math.max(e[1], t[1])], o = [e[0] - t[0], 0]);
		let s = we(Ce(a, i));
		be(i, a, s, r.maxChordLength, n), r.clampApex && xe(i, a, r.orient, n);
		let c = Q(o, 1 / .75);
		return [
			i,
			Z(i, c),
			Z(a, c),
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
		let n = Q(Z(e, t), .5);
		return [
			e,
			n,
			n,
			t
		];
	}
	throw Error(`Unsupported link shape: ${r.shape}`);
}
function be(e, t, n, r, i) {
	if (n <= r) return n;
	let a = Q(Ce(t, e), 1 / n);
	return Se(e, i, 2) ? (Te(t, Z(e, Q(a, r))), r) : Se(t, i, 2) ? (Te(e, Ce(t, Q(a, r))), r) : n;
}
function xe(e, t, n, r) {
	n == "vertical" ? (t[0] > 0 && (e[0] = Math.max(e[0], -t[0])), e[0] < r.width && (t[0] = Math.min(t[0], 2 * r.width - e[0]))) : (t[1] > 0 && (e[1] = Math.max(e[1], -t[1])), e[1] < r.height && (t[1] = Math.min(t[1], 2 * r.height - e[1])));
}
function Se(e, t, n) {
	return e[0] >= -t.width * n && e[0] <= t.width * (1 + n) && e[1] >= -t.height * n && e[1] <= t.height * (1 + n);
}
function Z(e, t) {
	return [e[0] + t[0], e[1] + t[1]];
}
function Ce(e, t) {
	return [e[0] - t[0], e[1] - t[1]];
}
function Q(e, t) {
	return [e[0] * t, e[1] * t];
}
function we(e) {
	return Math.hypot(e[0], e[1]);
}
function Te(e, t) {
	e[0] = t[0], e[1] = t[1];
}
//#endregion
//#region ../core/src/rendering/immediate/marks/link.js
function Ee(e) {
	let t = e.properties;
	return {
		shape: G(e, t.linkShape),
		orient: G(e, t.orient),
		arcHeightFactor: G(e, t.arcHeightFactor),
		minArcHeight: G(e, t.minArcHeight),
		maxChordLength: G(e, t.maxChordLength),
		clampApex: G(e, t.clampApex)
	};
}
function De(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders;
	if (a.length == 0) return 0;
	let c = z(i, s, "x", a[0], u(e, "x")), l = z(i, s, "y", a[0], u(e, "y")), d = [0, 0], f = [0, 0], p = i.x, m = i.y, h = {
		width: i.width,
		height: i.height
	}, g = m + h.height, _ = u(e, "x") || u(e, "y"), v = 0;
	for (let e of a) {
		if (c(e, d), l(e, f), (_ || t.shape == "orthogonal") && d[0] === d[1] && f[0] === f[1]) continue;
		let [i, a] = d, [u, m] = f, y = ve([i - p, g - u], [a - p, g - m], h, t), b = Infinity, x = Infinity, S = -Infinity, w = -Infinity;
		for (let e of y.points) e[0] += p, e[1] = g - e[1], b = Math.min(b, e[0]), x = Math.min(x, e[1]), S = Math.max(S, e[0]), w = Math.max(w, e[1]);
		let T = B(s.size, e);
		C(o, b, x, S, w, Math.max(T, n.minPickingSize ?? 0) / 2) && (v++, r({
			datum: e,
			geometry: y,
			strokeWidth: T
		}));
	}
	return v;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/point.js
function Oe(e) {
	return { inwardStroke: G(e, e.properties.inwardStroke) };
}
function ke(e, t, n, r) {
	let { coords: i, data: o, visibleBounds: s, anchorCullBounds: c } = n, l = n.start ?? 0, d = n.end ?? o.length, f = e.encoders;
	if (l === d) return 0;
	let p = z(i, f, "x", o[l]), m = z(i, f, "y", o[l]), h = [0, 0], g = [0, 0], _ = e.getSemanticThreshold(), v = {
		datum: {},
		shape: "circle",
		x: 0,
		y: 0,
		radius: 0,
		geometryRadius: 0,
		boundsRadius: 0,
		angle: 0,
		strokeWidth: 0,
		lineShape: !1
	}, y = u(e, "x"), b = u(e, "y"), x = 0;
	for (let n = l; n < d; n++) {
		let l = o[n];
		if (B(f.semanticScore, l) < _ && !e.isPreservedBySelection(l)) continue;
		p(l, h), m(l, g);
		let u = h[0] + B(f.dx, l), d = g[0] - B(f.dy, l);
		if (y && (u = a(u, i.x, i.x2)), b && (d = a(d, i.y, i.y2)), S(c, u, d)) continue;
		let w = Math.sqrt(B(f.size, l)) / 2;
		if (t.inwardStroke && w <= 0) continue;
		let T = U(f.shape, l), E = B(f.strokeWidth, l), D = T == "x" || T == "+", O = t.inwardStroke && !D ? Math.min(E, w) : E, k = t.inwardStroke && !D ? w - O / 2 : w, A = t.inwardStroke ? 0 : E / 2, j = w * Math.SQRT2 + A;
		C(s, u - j, d - j, u + j, d + j) && (x++, v.datum = l, v.shape = T, v.x = u, v.y = d, v.radius = w, v.geometryRadius = k, v.boundsRadius = j, v.angle = B(f.angle, l), v.strokeWidth = O, v.lineShape = D, r(v));
	}
	return x;
}
//#endregion
//#region ../core/src/rendering/immediate/geometry/pointPath.js
function Ae(e, t, n, r, i) {
	let a = r * .4, o = r * .15, s = Math.sqrt(3) * r / 2;
	switch (e) {
		case "diamond": return i.moveTo(t, n - r), i.lineTo(t + r, n), i.lineTo(t, n + r), i.lineTo(t - r, n), i.closePath(), !0;
		case "cross": return i.moveTo(t - a, n - r), i.lineTo(t + a, n - r), i.lineTo(t + a, n - a), i.lineTo(t + r, n - a), i.lineTo(t + r, n + a), i.lineTo(t + a, n + a), i.lineTo(t + a, n + r), i.lineTo(t - a, n + r), i.lineTo(t - a, n + a), i.lineTo(t - r, n + a), i.lineTo(t - r, n - a), i.lineTo(t - a, n - a), i.closePath(), !0;
		case "triangle-up": return i.moveTo(t, n - s), i.lineTo(t + r, n + s), i.lineTo(t - r, n + s), i.closePath(), !0;
		case "triangle-right": return i.moveTo(t + s, n), i.lineTo(t - s, n + r), i.lineTo(t - s, n - r), i.closePath(), !0;
		case "triangle-down": return i.moveTo(t, n + s), i.lineTo(t - r, n - s), i.lineTo(t + r, n - s), i.closePath(), !0;
		case "triangle-left": return i.moveTo(t - s, n), i.lineTo(t + s, n - r), i.lineTo(t + s, n + r), i.closePath(), !0;
		case "tick-up": return je(i, t - o, n - r, t + o, n), !0;
		case "tick-right": return je(i, t, n - o, t + r, n + o), !0;
		case "tick-down": return je(i, t - o, n, t + o, n + r), !0;
		case "tick-left": return je(i, t - r, n - o, t, n + o), !0;
		case "+": return i.moveTo(t - r, n), i.lineTo(t + r, n), i.moveTo(t, n - r), i.lineTo(t, n + r), !0;
		case "x": return i.moveTo(t - r, n - r), i.lineTo(t + r, n + r), i.moveTo(t + r, n - r), i.lineTo(t - r, n + r), !0;
		default: return !1;
	}
}
function je(e, t, n, r, i) {
	e.moveTo(t, n), e.lineTo(r, n), e.lineTo(r, i), e.lineTo(t, i), e.closePath();
}
//#endregion
//#region ../core/src/rendering/immediate/marks/rect.js
var Me = .1;
function Ne(e) {
	let t = e.properties, n = G(e, t.cornerRadius), r = {
		topLeft: G(e, t.cornerRadiusTopLeft ?? n),
		topRight: G(e, t.cornerRadiusTopRight ?? n),
		bottomRight: G(e, t.cornerRadiusBottomRight ?? n),
		bottomLeft: G(e, t.cornerRadiusBottomLeft ?? n)
	}, i = {
		blur: G(e, t.shadowBlur ?? 0),
		color: G(e, t.shadowColor ?? "black"),
		offsetX: G(e, t.shadowOffsetX ?? 0),
		offsetY: G(e, t.shadowOffsetY ?? 0),
		opacity: G(e, t.shadowOpacity ?? 0)
	}, a = G(e, t.hatch ?? "none"), o = !Le(r);
	return {
		cornerRadii: r,
		minWidth: G(e, t.minWidth),
		minHeight: G(e, t.minHeight),
		minOpacity: G(e, t.minOpacity),
		shadow: i,
		hatch: a,
		hasCornerRadii: o,
		canPadSeams: a == "none" && i.opacity == 0 && !o
	};
}
function Pe(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o, viewOpacity: s } = n, c = n.start ?? 0, l = n.end ?? a.length, d = e.encoders;
	if (c === l) return 0;
	let f = R(d.fill), p = d.strokeWidth.constant, m = d.fillOpacity.constant, h = p ? B(d.strokeWidth, a[c]) : 0, g = m ? B(d.fillOpacity, a[c]) : 0, _ = W(d.fill, n), v = t.shadow.opacity > 0 ? t.shadow.blur + Math.max(Math.abs(t.shadow.offsetX), Math.abs(t.shadow.offsetY)) : 0, y = z(i, d, "x", a[c], u(e, "x")), b = z(i, d, "y", a[c], u(e, "y")), x = [0, 0], S = [0, 0], w = u(e, "x"), T = u(e, "y"), E = {
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
	}, D = 0;
	for (let e = c; e < l; e++) {
		let n = a[e];
		if (y(n, x), b(n, S), w && x[0] === x[1] || T && S[0] === S[1]) continue;
		let i = Math.min(x[0], x[1]), c = Math.min(S[0], S[1]), l = Math.abs(x[1] - x[0]), u = Math.abs(S[1] - S[0]), O = Fe(l, t.minWidth), k = Fe(u, t.minHeight), A = Math.max(t.minOpacity, O * k);
		l < t.minWidth && (i -= (t.minWidth - l) / 2, l = t.minWidth), u < t.minHeight && (c -= (t.minHeight - u) / 2, u = t.minHeight);
		let j = p ? h : B(d.strokeWidth, n), M = _ ?? K(d.fill(n)), N = (m ? g : B(d.fillOpacity, n)) * s, P = j == 0 && N * f(M) == 1 && A == 1 && t.canPadSeams && M != "none" ? Me : 0;
		P && (i -= P, c -= P, l += P * 2, u += P * 2), C(o, i, c, i + l, c + u, j / 2 + v) && (D++, E.datum = n, E.x = i, E.y = c, E.width = l, E.height = u, E.opacityFactor = A, E.strokeWidth = j, E.fill = M, E.fillOpacity = N, t.hasCornerRadii && Ie(t.cornerRadii, l, u, E.radii), r(E));
	}
	return D;
}
function Fe(e, t) {
	return t > 0 && e < t ? e / t : 1;
}
function Ie(e, t, n, r) {
	let i = Math.min(t, n) / 2;
	r.topLeft = Math.max(0, Math.min(e.topLeft, i)), r.topRight = Math.max(0, Math.min(e.topRight, i)), r.bottomRight = Math.max(0, Math.min(e.bottomRight, i)), r.bottomLeft = Math.max(0, Math.min(e.bottomLeft, i));
}
function Le(e) {
	return e.topLeft == 0 && e.topRight == 0 && e.bottomRight == 0 && e.bottomLeft == 0;
}
//#endregion
//#region ../core/src/utils/clipSegment.js
function Re(e, t, n, r, i, a, o, s, c) {
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
function ze(e) {
	let t = "strokeAlign" in e.properties ? G(e, e.properties.strokeAlign) : "outside";
	return {
		strokeAlign: t === "inside" || t === "center" ? t : "outside",
		minLength: G(e, e.properties.minLength),
		strokeCap: G(e, e.properties.strokeCap)
	};
}
function Be(e, t, n, r) {
	let { coords: i, data: a, visibleBounds: o } = n, s = e.encoders, c = n.start ?? 0, l = n.end ?? a.length;
	if (c === l) return 0;
	let d = z(i, s, "x", a[c]), f = z(i, s, "y", a[c]), p = [0, 0], m = [0, 0], h = {
		datum: {},
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		size: 0,
		strokeWidth: 0,
		stroke: "none",
		strokeOpacity: 0
	}, g = u(e, "x"), _ = u(e, "y"), v = [
		0,
		0,
		0,
		0
	], y = 0, b = e.getType() === "rule", x = b ? W(s.stroke, n) : "none", S = b ? R(s.stroke) : () => 0;
	for (let e = c; e < l; e++) {
		let n = a[e];
		d(n, p), f(n, m);
		let [c, l] = p, [u, w] = m, T = B(s.size, n);
		if (T <= 0) continue;
		let E = x ?? K(s.stroke(n)), D = b ? B(s.strokeOpacity, n) : 0, O = b && D * S(E) > 0 ? Math.max(0, B(s.strokeWidth, n)) : 0, k = T + 2 * O + t.minLength + 1, A = Math.max(o.x2 - o.x1, k), j = Math.max(o.y2 - o.y1, k);
		if (!Re(c, u, l, w, g ? i.x : o.x1 - A, _ ? i.y : o.y1 - j, g ? i.x2 : o.x2 + A, _ ? i.y2 : o.y2 + j, v) || ([c, u, l, w] = v, c === l && u === w)) continue;
		let M = l - c, N = w - u, P = Math.hypot(M, N);
		if (P > 0 && P < t.minLength) {
			let e = (t.minLength - P) / 2, n = M / P, r = N / P;
			c -= n * e, u -= r * e, l += n * e, w += r * e;
		}
		C(o, c, u, l, w, (T / 2 + O) * (t.strokeCap === "square" ? Math.SQRT2 : 1)) && (y++, h.datum = n, h.x1 = c, h.y1 = u, h.x2 = l, h.y2 = w, h.size = T, h.strokeWidth = O, h.stroke = E, h.strokeOpacity = D, r(h));
	}
	return y;
}
//#endregion
//#region ../core/src/rendering/immediate/marks/text.js
function Ve(e) {
	let t = e.properties;
	return {
		align: G(e, t.align),
		baseline: G(e, t.baseline),
		logoLetters: G(e, t.logoLetters),
		paddingX: G(e, t.paddingX),
		paddingY: G(e, t.paddingY),
		flushX: G(e, t.flushX),
		flushY: G(e, t.flushY),
		squeeze: G(e, t.squeeze),
		dx: G(e, t.dx),
		dy: G(e, t.dy)
	};
}
function He(n, r, i, a) {
	let { coords: s, data: c, visibleBounds: l, anchorCullBounds: d } = i, { align: f, baseline: p } = r, m = n.encoders;
	if (c.length == 0) return 0;
	let h = m.size.constant ? B(m.size, c[0]) : 0, g = m.angle.constant ? B(m.angle, c[0]) : 0, _ = z(s, m, "x", c[0], u(n, "x")), v = z(s, m, "y", c[0], u(n, "y")), y = n.encoding.text, b = "format" in y ? o(y.format) : (e) => e, x = [0, 0], C = [0, 0], w = {
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
		dx: r.dx,
		dy: r.dy,
		fadeOpacity: 1,
		scale: 1,
		logoTransform: void 0,
		multiCharacterLogo: !1,
		boundsQuad: O
	}, A = !!m.x2, j = !!m.y2, M = A && u(n, "x"), N = j && u(n, "y"), P = 0;
	for (let n of c) {
		let o = b(m.text(n)), c = e(o) ? o : o === null ? "" : "" + o;
		if (!c || (_(n, x), v(n, C), M && x[0] === x[1] || N && C[0] === C[1])) continue;
		let [u, y] = x, [F, I] = C, L = m.size.constant ? h : B(m.size, n), R = m.angle.constant ? g : B(m.angle, n);
		if (r.logoLetters) {
			let e = L, t = L;
			if (A && (e = y - u, u = (u + y) / 2), j && (t = F - I, F = (F + I) / 2), Ue(O, u, F, Math.abs(e), Math.abs(t), "center", "middle", R, r.dx, r.dy), !e || !t || S(d, u, F) || !We(l, O)) continue;
			let o = i.measureLogoInkBounds(c);
			if (!o) continue;
			P++, k.datum = n, k.text = c, k.x = u, k.y = F, k.size = 100, k.width = o.xMax - o.xMin, k.angle = R, k.fadeOpacity = 1, k.scale = 1, D.scaleX = e / k.width, D.scaleY = t / (o.yMax - o.yMin), D.originX = (o.xMin + o.xMax) / 2, D.originY = (o.yMin + o.yMax) / 2, k.logoTransform = D, k.multiCharacterLogo = c.length > 1, a(k);
			continue;
		}
		let z = i.fontMeasurement.measureWidth(c, L);
		Ge(z, L, R, w), A || j ? qe(f, p, R, T) : (T.x = Je[f], T.y = Ye[p]);
		let V = 1;
		if (A && (Ke(Math.min(u, y), Math.max(u, y), w.width, r.paddingX, T.x, r.flushX, s.x, s.x2, E), u = E.position, V *= E.scale), j && (Ke(Math.min(F, I), Math.max(F, I), w.height * V, r.paddingY, T.y, r.flushY, s.y, s.y2, E), F = E.position, V *= E.scale), S(d, u, F)) continue;
		let H = 1;
		if (V < 1) {
			if (!r.squeeze || V < 3 / L) continue;
			H = t(3 / L, 6 / L, V);
		}
		let U = L * V, W = z * V;
		Ue(O, u, F, W, U, f, p, R, r.dx, r.dy), We(l, O) && (P++, k.datum = n, k.text = c, k.x = u, k.y = F, k.size = L, k.width = W, k.angle = R, k.fadeOpacity = H, k.scale = V, k.logoTransform = void 0, k.multiCharacterLogo = !1, a(k));
	}
	return P;
}
function Ue(e, t, n, r, i, a, o, s, c, l) {
	let u = t + c - (Je[a] + 1) / 2 * r, d = n + l - (Ye[o] + 1) / 2 * i, f = u + r, p = d + i, m = s * Math.PI / 180, h = Math.sin(m), g = Math.cos(m);
	return $(e, 0, t, n, u, d, h, g), $(e, 2, t, n, f, d, h, g), $(e, 4, t, n, f, p, h, g), $(e, 6, t, n, u, p, h, g), e;
}
function We(e, t) {
	return C(e, Math.min(t[0], t[2], t[4], t[6]), Math.min(t[1], t[3], t[5], t[7]), Math.max(t[0], t[2], t[4], t[6]), Math.max(t[1], t[3], t[5], t[7]), 1);
}
function $(e, t, n, r, i, a, o, s) {
	e[t] = n + (i - n) * s - (a - r) * o, e[t + 1] = r + (i - n) * o + (a - r) * s;
}
function Ge(e, t, n, r) {
	let i = n * Math.PI / 180, a = Math.abs(Math.sin(i)), o = Math.abs(Math.cos(i));
	r.width = e * o + t * a, r.height = e * a + t * o;
}
function Ke(e, t, n, r, i, a, o, s, c) {
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
function qe(e, t, n, r) {
	let i = Je[e], a = -Ye[t], o = ((n + 45) % 360 + 360) % 360, s, c;
	o < 90 ? (s = i, c = a) : o < 180 ? (s = a, c = -i) : o < 270 ? (s = -i, c = a) : (s = -a, c = i), r.x = s, r.y = -c;
}
var Je = {
	left: -1,
	center: 0,
	right: 1
}, Ye = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Xe = [
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
], Ze = /* @__PURE__ */ new Set([
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
]), Qe = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
};
function $e(e) {
	let t = e ?? "Lato";
	return [t, ...Xe.filter((e) => e.toLowerCase() != t.toLowerCase())].map(rt).join(", ");
}
function et(e) {
	if (typeof e == "number") return e;
	let t = Qe[e];
	if (t === void 0) throw Error("Unknown font weight: " + e);
	return t;
}
function tt(e) {
	return {
		style: e.fontStyle ?? "normal",
		weight: et(e.fontWeight ?? "normal"),
		family: $e(e.font)
	};
}
function nt(e, t) {
	switch (e) {
		case "top": return .79 * t;
		case "middle": return .35 * t;
		case "bottom": return -.21 * t;
		case "alphabetic":
		case "baseline": return 0;
		default: throw Error(`Unknown text baseline: ${e}`);
	}
}
function rt(e) {
	let t = e.toLowerCase();
	return Ze.has(t) ? t : `'${e.replaceAll("\\", "\\\\").replaceAll("'", "\\'")}'`;
}
//#endregion
//#region ../core/src/rendering/nativeTextMetrics.js
var it = "Mg", at = 100, ot = class {
	#e;
	#t;
	#n = new n([], JSON.stringify);
	#r = [];
	#i;
	constructor(e, t) {
		this.#e = e, this.#t = t, e.fontKerning = "normal", e.direction = "ltr", e.textAlign = "left", e.textBaseline = "alphabetic";
	}
	requestFont(e) {
		let t = tt(e), n = this.#n.get(t);
		if (!n) {
			n = new st((e, n) => this.#a(t, e, n)), this.#n.set(t, n);
			let e = this.#t?.load(ut(t, 16));
			e && this.#r.push(e.then(() => n.invalidateCache()));
		}
		return n;
	}
	async waitUntilReady() {
		await Promise.all(this.#r);
	}
	#a(e, t, n) {
		let r = ut(e, n);
		return r != this.#i && (this.#e.font = r, this.#i = r), this.#e.measureText(t);
	}
}, st = class {
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
			let t = this.#e(it, e);
			this.#r = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent;
		}
		return this.#r;
	}
	measureInkBounds(e) {
		let t = e.length == 1 ? e.charCodeAt(0) : 128;
		if (t < 128 && this.#i[t] !== void 0) return this.#i[t];
		let n = ct(this.#e(e, at));
		return t < 128 && (this.#i[t] = n), n;
	}
	invalidateCache() {
		this.#t = NaN, this.#n.fill(NaN), this.#r = NaN, this.#i.fill(void 0);
	}
	#a(e) {
		e != this.#t && (this.#t = e, this.#n.fill(NaN), this.#r = NaN);
	}
};
function ct(e) {
	let t = {
		xMin: -e.actualBoundingBoxLeft,
		xMax: e.actualBoundingBoxRight,
		yMin: -e.actualBoundingBoxAscent,
		yMax: e.actualBoundingBoxDescent
	};
	return t.xMax > t.xMin && t.yMax > t.yMin ? t : null;
}
function lt(e, t) {
	let n = e.requestFont(t);
	return n instanceof st ? (e) => n.measureInkBounds(e) : (e) => {
		let t = n.measureWidth(e, at), r = n.getHeight(at);
		return t > 0 && r > 0 ? {
			xMin: 0,
			xMax: t,
			yMin: -r,
			yMax: 0
		} : null;
	};
}
function ut(e, t) {
	return `${e.style} ${e.weight} ${t}px ${e.family}`;
}
function dt(e) {
	let t = e.createElement("canvas").getContext("2d");
	if (!t) throw Error("Canvas2D text measurement is unavailable.");
	return new ot(t, e.fonts);
}
async function ft(e, t) {
	t.visit((t) => {
		let n = t.mark;
		n?.getType() == "text" && e.requestFont(n.properties);
	}), await e.waitUntilReady();
}
//#endregion
//#region ../core/src/rendering/immediate/order.js
function pt(e, t, n, r, i) {
	let a = [], o = [];
	for (let i = t; i < n; i++) {
		let t = e[i];
		(r(t) ? a : o).push(t);
	}
	return i.map((e) => e === "matching" ? a : o);
}
//#endregion
export { z as A, ee as C, B as D, ne as E, x as F, C as I, m as L, K as M, b as N, W as O, y as P, g as R, he as S, te as T, ke as _, $e as a, ge as b, Ve as c, Be as d, Re as f, Oe as g, Ae as h, lt as i, G as j, R as k, He as l, Pe as m, dt as n, nt as o, Ne as p, ft as r, et as s, pt as t, ze as u, Ee as v, ie as w, me as x, De as y };
