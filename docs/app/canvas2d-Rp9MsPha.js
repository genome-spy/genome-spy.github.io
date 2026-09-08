import { X as e, an as t, o as n, rt as r, s as i } from "./clipOptions-H68pJyEZ.js";
import { v as a } from "./vega-scale-BGC53c22.js";
import { t as o } from "./rectangle-DKnrAmKs.js";
import { t as s } from "./warning-CpIIpk8e.js";
import { n as c, t as l } from "./layoutResult-D50MSHXR.js";
import { n as u, r as d, t as f } from "./performanceProfiler-CPLEjApa.js";
import { D as p, M as m, O as h, S as g, T as _, _ as v, a as y, c as b, d as x, f as S, g as C, i as w, j as T, k as E, l as D, m as O, o as ee, p as te, s as ne, v as re, x as ie, y as k } from "./nativeText-DAjvkrzc.js";
import { n as A, t as j } from "./renderCanvas2D-vEouBm--.js";
import { t as M } from "./canvasSizeHelper-7h_8rOcx.js";
import { exportCanvas as N, exportRaster as P } from "./rasterExport-C2a7S2vU.js";
import { createCanvas2DSvgRasterizer as F } from "./svgRasterizer-DNsZxH8y.js";
//#region ../core/src/rendering/canvas2d/picking/softwarePickingRasterizer.js
var I = 12, L = .5, R = class {
	#e = [];
	#t = [];
	#n = [
		0,
		0,
		0,
		0
	];
	#r = 0;
	#i = 0;
	#a = 0;
	#o = 0;
	#s = 0;
	#c = 0;
	#l = 0;
	#u = 0;
	#d = 0;
	#f = 0;
	constructor(e) {
		this.buffer = e, this.resetClip();
	}
	resetClip() {
		this.#r = 0, this.#i = 0, this.#a = this.buffer.width, this.#o = this.buffer.height;
	}
	resetStatistics() {
		this.#s = 0, this.#c = 0, this.#l = 0, this.#u = 0, this.#d = 0, this.#f = 0;
	}
	getStatistics() {
		return {
			rectangles: this.#s,
			squares: this.#c,
			polygons: this.#l,
			segments: this.#u,
			cubics: this.#d,
			spans: this.#f
		};
	}
	setClip(e, t, n, r) {
		if (!Number.isFinite(e) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r)) throw RangeError("Software picking clip must be finite.");
		this.#r = H(Math.floor(Math.min(e, n)), 0, this.buffer.width), this.#i = H(Math.floor(Math.min(t, r)), 0, this.buffer.height), this.#a = H(Math.ceil(Math.max(e, n)), this.#r, this.buffer.width), this.#o = H(Math.ceil(Math.max(t, r)), this.#i, this.buffer.height);
	}
	fillRect(e, t, n, r, i) {
		this.#s++, this.#p(e, t, n, r, i);
	}
	#p(e, t, n, r, i) {
		let a = t + r, o = n + i;
		if (!Number.isFinite(a) || !Number.isFinite(o) || r == 0 || i == 0) return;
		let s = Math.max(this.#r, Math.floor(Math.min(t, a))), c = Math.max(this.#i, Math.floor(Math.min(n, o))), l = Math.min(this.#a, Math.ceil(Math.max(t, a))), u = Math.min(this.#o, Math.ceil(Math.max(n, o)));
		if (!(s >= l || c >= u)) for (let t = c; t < u; t++) this.#m(e, t, s, l);
	}
	fillSquare(e, t, n, r) {
		!Number.isFinite(t) || !Number.isFinite(n) || !(r > 0) || !Number.isFinite(r) || (this.#c++, this.#h(e, t, n, r));
	}
	fillConvexPolygon(e, t) {
		if (t.length < 6 || t.length % 2 != 0) throw Error("A convex picking polygon requires at least three x/y pairs.");
		this.#l++;
		let n = Infinity, r = -Infinity;
		for (let e = 1; e < t.length; e += 2) {
			let i = t[e];
			if (!Number.isFinite(t[e - 1]) || !Number.isFinite(i)) return;
			n = Math.min(n, i), r = Math.max(r, i);
		}
		let i = Math.max(this.#i, Math.floor(n)), a = Math.min(this.#o, Math.ceil(r)), o = this.#t;
		for (let n = i; n < a; n++) {
			let r = n + .5;
			o.length = 0;
			let i = t.length - 2;
			for (let e = 0; e < t.length; e += 2) {
				let n = t[i], a = t[i + 1], s = t[e], c = t[e + 1];
				(a <= r && r < c || c <= r && r < a) && o.push(n + (r - a) * (s - n) / (c - a)), i = e;
			}
			o.sort((e, t) => e - t);
			for (let t = 0; t + 1 < o.length; t += 2) {
				let r = Math.max(this.#r, Math.floor(o[t])), i = Math.min(this.#a, Math.ceil(o[t + 1]));
				r < i && this.#m(e, n, r, i);
			}
		}
		let s = t.length - 2;
		for (let n = 0; n < t.length; n += 2) this.strokeSegment(e, t[s], t[s + 1], t[n], t[n + 1], 1), s = n;
	}
	strokeSegment(e, t, n, r, i, a, o) {
		if (!(a > 0) || !Number.isFinite(a)) return;
		this.#u++;
		let s = a / 2, c = this.#n;
		if (!z(t, n, r, i, this.#r - s, this.#i - s, this.#a + s, this.#o + s, c)) return;
		let l = c[2] - c[0], u = c[3] - c[1], d = Math.ceil(Math.max(Math.abs(l), Math.abs(u)));
		if (d == 0) {
			this.#h(e, c[0], c[1], s, o);
			return;
		}
		for (let t = 0; t <= d; t++) {
			let n = t / d;
			this.#h(e, c[0] + l * n, c[1] + u * n, s, o);
		}
	}
	strokeCubic(e, t, n, r, i, a, o, s, c, l, u = L, d) {
		if (!(l > 0) || !Number.isFinite(l) || !(u > 0) || !Number.isFinite(u) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s) || !Number.isFinite(c)) return;
		this.#d++;
		let f = this.#e;
		for (f.length = 0, f.push(t, n, r, i, a, o, s, c, 0); f.length;) {
			let t = f.pop(), n = f.pop(), r = f.pop(), i = f.pop(), a = f.pop(), o = f.pop(), s = f.pop(), c = f.pop(), p = f.pop();
			if (t >= I || B(p, c, s, o, a, i, r, n, u)) {
				this.strokeSegment(e, p, c, r, n, l, d);
				continue;
			}
			let m = (p + s) / 2, h = (c + o) / 2, g = (s + a) / 2, _ = (o + i) / 2, v = (a + r) / 2, y = (i + n) / 2, b = (m + g) / 2, x = (h + _) / 2, S = (g + v) / 2, C = (_ + y) / 2, w = (b + S) / 2, T = (x + C) / 2, E = t + 1;
			f.push(w, T, S, C, v, y, r, n, E, p, c, m, h, b, x, w, T, E);
		}
	}
	#m(e, t, n, r) {
		this.#f++;
		let i = t * this.buffer.width;
		this.buffer.ids.fill(e >>> 0, i + n, i + r);
	}
	#h(e, t, n, r, i) {
		let a = Math.max(this.#r, Math.floor(t - r)), o = Math.max(this.#i, Math.floor(n - r)), s = Math.min(this.#a, Math.ceil(t + r)), c = Math.min(this.#o, Math.ceil(n + r));
		if (a >= s || o >= c) return;
		let l = e >>> 0, u = this.buffer.ids, d = this.buffer.width, f = s - a;
		for (let e = o; e < c; e++) {
			this.#f++;
			let t = e * d + a, n = t + f;
			if (i) for (let t = a; t < s; t++) i(t + .5, e + .5) && (u[e * d + t] = l);
			else if (f > 16) u.fill(l, t, n);
			else for (let e = t; e < n; e++) u[e] = l;
		}
	}
};
function z(e, t, n, r, i, a, o, s, c) {
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
function B(e, t, n, r, i, a, o, s, c) {
	let l = o - e, u = s - t, d = l * l + u * u, f = c * c;
	if (d == 0) {
		let o = V(e, t, n, r), s = V(e, t, i, a);
		return Math.max(o, s) <= f;
	}
	let p = u * (n - e) - l * (r - t), m = u * (i - e) - l * (a - t);
	return Math.max(p * p, m * m) <= f * d;
}
function V(e, t, n, r) {
	let i = n - e, a = r - t;
	return i * i + a * a;
}
function H(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/renderers/index.js
var U = 1;
function W(e, t) {
	let n = e.getType();
	return n == "arrow" ? K(e, t) : n == "rect" ? q(e, t) : n == "point" ? J(e, t) : n == "rule" || n == "tick" ? ae(e, t) : n == "link" ? oe(e, t) : n == "text" ? se(e, t) : 0;
}
function G(e) {
	let t = e.getType();
	return t == "rect" || t == "arrow" || t == "point" || t == "rule" || t == "tick" || t == "link" || t == "text";
}
function K(e, t) {
	let n = e, r = re(n), i = Array(8).fill(0);
	return ie(n, r, t, (e) => {
		let a = Y(n, e.datum), o = e.strokeWidth / 2;
		r.stem && t.rasterizer.strokeSegment(a, e.tail.x, e.tail.y, e.tip.x, e.tip.y, e.stemHalfWidth * 2 + e.strokeWidth), k(e, (n, r) => {
			let s = e.headHalfWidth + o, c = n + e.tangent.x * o, l = r + e.tangent.y * o, u = e.headRepeatFootprint + o, d = n - e.tangent.x * u, f = r - e.tangent.y * u;
			ce(i, c, l, d, f, e.normal.x, e.normal.y, s), t.rasterizer.fillConvexPolygon(a, i);
		});
	});
}
function q(e, t) {
	let n = e;
	return D(n, b(n), t, (e) => t.rasterizer.fillRect(Y(n, e.datum), e.x, e.y, e.width, e.height));
}
function J(e, t) {
	let n = e, r = _(n, n.properties.minPickingSize);
	return S(n, x(n), t, (e) => t.rasterizer.fillSquare(Y(n, e.datum), e.x, e.y, Math.max(e.boundsRadius, r / 2)));
}
function ae(e, t) {
	let n = e;
	return ne(n, ee(n), t, (e) => t.rasterizer.strokeSegment(Y(n, e.datum), e.x1, e.y1, e.x2, e.y2, Math.max(e.strokeWidth, U)));
}
function oe(e, t) {
	let n = e, r = _(n, n.properties.minPickingSize), i = te(n), a = C(n, i.shape);
	return O(n, i, t, (e) => {
		let [i, o, s, c] = e.points, l = a(e.datum), u = l && v(i, c, l);
		t.rasterizer.strokeCubic(Y(n, e.datum), i[0], i[1], o[0], o[1], s[0], s[1], c[0], c[1], Math.max(e.strokeWidth, r), void 0, u ? (e, t) => Math.abs(u.normalX * e + u.normalY * t - u.offset) < u.end : void 0);
	});
}
function se(e, t) {
	let n = e;
	return y(n, w(n), t, (e) => t.rasterizer.fillConvexPolygon(Y(n, e.datum), e.boundsQuad));
}
function ce(e, t, n, r, i, a, o, s) {
	let c = a * s, l = o * s;
	e[0] = t + c, e[1] = n + l, e[2] = r + c, e[3] = i + l, e[4] = r - c, e[5] = i - l, e[6] = t - c, e[7] = n - l;
}
function Y(e, t) {
	let n = e.encoders;
	return g(n.uniqueId, t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingViewRenderingContext.js
var le = class extends c {
	#e = [];
	#t = /* @__PURE__ */ new Set();
	#n;
	#r = new T();
	#i;
	#a = [0, 0];
	constructor(e) {
		super({ picking: !0 }), this.width = e.width, this.height = e.height, this.devicePixelRatio = e.devicePixelRatio, this.getRasterizer = e.getRasterizer, this.#n = u(), this.#i = e.xIndexManager;
	}
	getDevicePixelRatio() {
		return this.devicePixelRatio;
	}
	pushView(e, t) {
		this.#t.has(e) || (e.onBeforeRender(), this.#t.add(e)), this.#e.push({
			view: e,
			coords: t
		});
	}
	popView(e) {
		if (this.#e.pop()?.view !== e) throw Error("Unbalanced software picking view rendering context stack.");
	}
	renderMark(e, t) {
		if (!e.isPickingParticipant() || !G(e)) return;
		let r = t.sampleFacetRenderingOptions;
		if (r && !e.encoders.facetIndex && (this.#n?.addCount("canvasSampleFacetOccurrences"), !A(r))) {
			this.#n?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let a = e.unitView.getEffectiveOpacity();
		if (a <= 0) return;
		let o = this.currentCoords, c = n(t), l = i(c, e.properties.clip, o), u = h(this.width, this.height, l);
		if (!E(u)) return;
		let d = p(o, c, e.properties.cullByVisibleRange), f = this.#i?.prepare(e) ?? !1;
		m(e, t, o, this.#r, (t, n) => {
			if (n.length == 0) return;
			let r = 0, i = n.length;
			if (f && this.#i.query(n, this.#a) && (r = this.#a[0], i = this.#a[1], r === i)) return;
			let o = this.getRasterizer();
			o.setClip(u.x1, u.y1, u.x2, u.y2), W(e, {
				rasterizer: o,
				coords: t,
				data: n,
				start: r,
				end: i,
				visibleBounds: u,
				anchorCullBounds: d,
				viewOpacity: a
			});
		}, (t) => s(`Canvas2D picking could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
	}
	get currentCoords() {
		let e = t(this.#e);
		if (!e) throw Error("No current view in software picking rendering context.");
		return e.coords;
	}
}, X = 2 ** 31 - 1, ue = -(2 ** 31);
function de(t, n, r, i = r) {
	let a = Array(t);
	a.fill(X);
	let o = ue, s = -Infinity, c = !1, l = Array(t);
	l.fill(0);
	let u = n[0], d = (n[1] - n[0]) / t, f = (n, r) => {
		let i = (n - u) / d, a = Math.floor(i);
		return e(r && a == i ? a - 1 : a, 0, t - 1);
	};
	function p(e, t, n) {
		if (c) return;
		if (t > o) o = t;
		else {
			c = !0;
			return;
		}
		let i = r(e);
		if (!Number.isFinite(i) || i < s) {
			c = !0;
			return;
		}
		s = i;
		let u = f(i, !1);
		a[u] > t && (a[u] = t), l[u] < n && (l[u] = n);
	}
	function m(e, t, n) {
		if (c) return;
		if (t > o) o = t;
		else {
			c = !0, console.debug("Items (vertices) are not ordered properly. Disabling binned index.");
			return;
		}
		let u = r(e), d = i(e);
		if (!Number.isFinite(u) || !Number.isFinite(d)) {
			c = !0;
			return;
		} else if (u < s) {
			c = !0;
			return;
		} else if (d < u) {
			c = !0;
			return;
		}
		s = u;
		let p = f(u, !1), m = u === d ? p : f(d, !0);
		for (let e = p; e <= m; e++) a[e] > t && (a[e] = t), l[e] < n && (l[e] = n);
	}
	let h = (e, t, n = [0, 0]) => {
		let r = f(e, !1), i = f(t, !0), o = a[r], s = Math.max(l[i], o);
		return n[0] = o, n[1] = s, n;
	}, g = () => {
		if (c) return;
		for (let e = 1; e < l.length; e++) l[e] < l[e - 1] && (l[e] = l[e - 1]);
		let e = !0;
		for (let t = a.length - 1; t > 0; t--) e && a[t] == X ? (a[t] = l[t], e = !1) : a[t - 1] > a[t] && (a[t - 1] = a[t]);
		return h;
	};
	return p.getIndex = g, m.getIndex = g, r == i ? p : m;
}
//#endregion
//#region ../core/src/rendering/xIndex/markXIndex.js
function fe(e, t, n = 0) {
	if (!t.length) return;
	let r = de(Math.min(256, Math.ceil(Math.sqrt(t.length))), e.indexDomain, e.xAccessor, e.x2Accessor);
	return t.forEach((e, t) => r(e, n + t, n + t + 1)), r.getIndex();
}
function pe(e) {
	let t = e.encoders?.x, n = e.encoders?.x2;
	if (!t?.channelDef || !("buildIndex" in t.channelDef) || !t.channelDef.buildIndex || !t.scale || !a(t.scale.type) && !["index", "locus"].includes(t.scale.type) || t.branches.length !== 1) return;
	let i = e.getType();
	if (i !== "point" && i !== "rect") return;
	let o = r(t)?.asNumberAccessor();
	if (!o) return;
	let s;
	if (n && (n.scale !== t.scale || n.branches.length !== 1 || (s = r(n)?.asNumberAccessor(), !s))) return;
	let c = e.unitView.getScaleResolution("x"), l = c?.zoomExtent;
	if (!(!c || !l || !Number.isFinite(l[0]) || !Number.isFinite(l[1]) || l[1] <= l[0])) return {
		xAccessor: o,
		x2Accessor: s,
		scaleResolution: c,
		indexDomain: [l[0], l[1]],
		domainStartOffset: ["index", "locus"].includes(t.scale.type) ? -1 : 0
	};
}
function me(e, t) {
	let n = e.scaleResolution.getScale().domain();
	if (n.length !== 2 || !Number.isFinite(n[0]) || !Number.isFinite(n[1]) || n[1] <= n[0]) return !1;
	let r = n[1] - n[0];
	return t[0] = n[0] + e.domainStartOffset - r, t[1] = n[1] + r, !0;
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvasXIndexManager.js
var he = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t = [0, 0];
	#n;
	prepare(e) {
		if (this.#n = void 0, e.encoders.facetIndex) return this.#r();
		let t = e.unitView.getCollector(), n = e.unitView.getScaleResolution("x"), r = n?.zoomExtent, i = this.#e.get(e);
		if (!i || i.collector !== t || i.dataRevision !== t.dataRevision || i.xEncoder !== e.encoders.x || i.x2Encoder !== e.encoders.x2 || i.xScaleResolution !== n || i.xIndexDomainStart !== r?.[0] || i.xIndexDomainEnd !== r?.[1]) {
			let a = pe(e);
			i = {
				collector: t,
				dataRevision: t.dataRevision,
				xEncoder: e.encoders.x,
				x2Encoder: e.encoders.x2,
				xScaleResolution: n,
				xIndexDomainStart: r?.[0],
				xIndexDomainEnd: r?.[1],
				spec: a,
				batches: /* @__PURE__ */ new WeakMap()
			}, this.#e.set(e, i);
		}
		let a = i.spec;
		return !a || !me(a, this.#t) ? this.#r() : (this.#n = i, !0);
	}
	query(e, t) {
		let n = this.#n;
		if (!n?.spec) throw Error("Canvas x-index query was not prepared.");
		f("canvasXIndexNativeItems", e.length);
		let r = n.batches.get(e);
		return r === void 0 && (r = fe(n.spec, e) ?? null, n.batches.set(e, r), f("canvasXIndexBuilds"), r || f("canvasXIndexRejectedBuilds")), r ? (r(this.#t[0], this.#t[1], t), f("canvasXIndexQueries"), f("canvasXIndexCandidateItems", t[1] - t[0]), t[0] === t[1] && f("canvasXIndexEmptyRanges"), !0) : this.#r();
	}
	#r() {
		return f("canvasXIndexFallbackQueries"), !1;
	}
}, Z = class {
	constructor(e) {
		this.viewRoot = e.viewRoot, this.context = e.context, this.surface = e.surface, this.getBackground = e.getBackground, this.broadcast = e.broadcast, this.onLayoutComputed = e.onLayoutComputed, this.layoutResult = void 0, this.pickingRasterizer = void 0, this.dirtyPickingBuffer = !0, this.xIndexManager = new he(), this.opacityLayers = [];
	}
	computeLayout() {
		this.broadcast("layout"), this.surface.invalidateSize();
		let e = 5;
		for (;;) {
			let t = this.#e();
			if (!t) return;
			if (!this.surface.invalidateSize()) {
				this.layoutResult = t, this.dirtyPickingBuffer = !0, this.onLayoutComputed(), this.broadcast("layoutComputed");
				return;
			}
			if (e--, e == 0) throw Error("Layout did not settle: canvas size kept changing.");
		}
	}
	renderAll() {
		let e = this.layoutResult;
		if (!e) return;
		let t = this.surface.getLogicalCanvasSize();
		if (isNaN(t.width) || isNaN(t.height)) return;
		let n = u();
		n?.beginFrame("canvas");
		try {
			d("render", () => j({
				layoutResult: e,
				context: this.context,
				width: t.width,
				height: t.height,
				devicePixelRatio: this.surface.getDevicePixelRatio(),
				background: this.getBackground(),
				paint: !0,
				xIndexManager: this.xIndexManager,
				opacityLayers: this.opacityLayers
			})), this.dirtyPickingBuffer = !0;
		} finally {
			n?.endFrame();
		}
	}
	renderPickingFramebuffer() {
		let e = this.layoutResult;
		if (!this.dirtyPickingBuffer || !e) return;
		let t = this.surface.getLogicalCanvasSize();
		if (isNaN(t.width) || isNaN(t.height)) return;
		this.surface.clearPickingBuffer();
		let n = this.pickingRasterizer, r = !1, i = new le({
			width: t.width,
			height: t.height,
			devicePixelRatio: this.surface.getDevicePixelRatio(),
			getRasterizer: () => (n || (n = new R(this.surface.getPickingBuffer()), this.pickingRasterizer = n), r ||= (n.resetClip(), n.resetStatistics(), !0), n),
			xIndexManager: this.xIndexManager
		}), a = u();
		a?.beginFrame("canvas", "picking");
		try {
			d("picking", () => e.collectRenderCommands(i)), this.dirtyPickingBuffer = !1, r && ge(n, a);
		} finally {
			a?.endFrame();
		}
	}
	createPickingBufferVisualization() {
		return this.dirtyPickingBuffer = !0, this.renderPickingFramebuffer(), this.surface.createPickingBufferVisualization();
	}
	#e() {
		let e = this.surface.getLogicalCanvasSize();
		if (!(isNaN(e.width) || isNaN(e.height))) return l(this.viewRoot, o.create(0, 0, e.width, e.height), {
			devicePixelRatio: this.surface.getDevicePixelRatio(),
			renderingOptions: { firstFacet: !0 }
		});
	}
};
function ge(e, t) {
	if (!t) return;
	let n = e.getStatistics();
	t.addCount("pickingRectangles", n.rectangles), t.addCount("pickingSquares", n.squares), t.addCount("pickingPolygons", n.polygons), t.addCount("pickingSegments", n.segments), t.addCount("pickingCubics", n.cubics), t.addCount("pickingSpans", n.spans);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingBuffer.js
var Q = /* @__PURE__ */ new Uint32Array(), _e = class {
	#e = Q;
	width = 0;
	height = 0;
	constructor(e = 0, t = 0) {
		this.resize(e, t);
	}
	get ids() {
		return this.#e;
	}
	resize(e, t) {
		let n = $(e, "width"), r = $(t, "height");
		if (n == this.width && r == this.height) return !1;
		let i = n * r;
		if (!Number.isSafeInteger(i)) throw RangeError("Software picking buffer is too large.");
		return this.width = n, this.height = r, this.#e = i ? new Uint32Array(i) : Q, !0;
	}
	clear() {
		this.#e.fill(0);
	}
	read(e, t) {
		if (!Number.isFinite(e) || !Number.isFinite(t)) return 0;
		let n = Math.floor(e), r = Math.floor(t);
		return n < 0 || r < 0 || n >= this.width || r >= this.height ? 0 : this.#e[r * this.width + n];
	}
	dispose() {
		this.width = 0, this.height = 0, this.#e = Q;
	}
};
function $(e, t) {
	if (!Number.isFinite(e) || e < 0) throw RangeError(`Software picking buffer ${t} must be a finite nonnegative number.`);
	return Math.floor(e);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DSurface.js
var ve = class {
	#e;
	#t;
	#n;
	#r = !1;
	constructor(e) {
		let t = document.createElement("canvas"), n = t.getContext("2d");
		if (!n) throw Error("Unable to initialize a Canvas2D rendering context.");
		this.canvas = t, this.context = n, e.container.appendChild(t);
		try {
			this.#e = new M(e.container, t, e.sizeSource, () => {
				this.#i() && e.onCanvasResize();
			}), this.#i();
		} catch (e) {
			throw this.#e?.finalize(), t.remove(), e;
		}
	}
	invalidateSize() {
		return this.#e.invalidate(), this.#i();
	}
	#i() {
		let e = this.getLogicalCanvasSize(), t = this.#e.getPhysicalCanvasSize(e);
		return this.#t?.logicalWidth == e.width && this.#t.logicalHeight == e.height && this.#t.physicalWidth == t.width && this.#t.physicalHeight == t.height ? !1 : (this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`, this.canvas.width = t.width, this.canvas.height = t.height, this.#t = {
			logicalWidth: e.width,
			logicalHeight: e.height,
			physicalWidth: t.width,
			physicalHeight: t.height
		}, this.#n?.resize(e.width, e.height), !0);
	}
	getLogicalCanvasSize() {
		return this.#e.getLogicalCanvasSize();
	}
	getDevicePixelRatio() {
		return this.#e.getDevicePixelRatio();
	}
	getPickingBuffer() {
		if (this.#r) throw Error("Canvas2D surface has been finalized.");
		let e = this.getLogicalCanvasSize();
		return this.#n ??= new _e(e.width, e.height), this.#n;
	}
	clearPickingBuffer() {
		this.#n?.clear();
	}
	readPickingId(e, t) {
		return this.#r ? 0 : this.#n?.read(e, t) ?? 0;
	}
	createPickingBufferVisualization() {
		if (this.#r) return;
		let e = this.getPickingBuffer(), t = document.createElement("canvas");
		t.width = e.width, t.height = e.height;
		let n = t.getContext("2d");
		if (!n) throw Error("Unable to initialize a Canvas2D picking visualization context.");
		if (e.width > 0 && e.height > 0) {
			let t = n.createImageData(e.width, e.height);
			for (let n = 0; n < e.ids.length; n++) {
				let r = e.ids[n], i = n * 4;
				if (r != 0) {
					let e = Math.imul(r ^ r >>> 16, 73244475);
					t.data[i] = 64 + (e & 127), t.data[i + 1] = 64 + (e >>> 8 & 127), t.data[i + 2] = 64 + (e >>> 16 & 127);
				}
				t.data[i + 3] = 255;
			}
			n.putImageData(t, 0, 0);
		}
		return t;
	}
	finalize() {
		this.#r || (this.#r = !0, this.#n?.dispose(), this.#n = void 0, this.#e.finalize(), this.canvas.remove());
	}
};
//#endregion
//#region ../core/src/rendering/canvas2d/index.js
function ye(e) {
	let t = new ve(e);
	return {
		surface: t,
		createRenderCoordinator: (e) => new Z({
			...e,
			surface: t,
			context: t.context
		}),
		exportCanvas: (e) => N({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio()
		}),
		exportRaster: (e) => P({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio()
		}),
		rasterizeSvgRuns: (e) => F()(e),
		readPickingId: (e, n) => t.readPickingId(e, n)
	};
}
//#endregion
export { ye as createCanvas2DRenderingBackend };
