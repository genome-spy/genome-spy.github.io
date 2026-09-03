import { Jt as e, K as t, o as n, s as r, z as i } from "./clipOptions-taFzEljc.js";
import { v as a } from "./vega-scale-D46-iCaL.js";
import { t as o } from "./rectangle-DKnrAmKs.js";
import { t as s } from "./warning-CpIIpk8e.js";
import { n as c, t as l } from "./layoutResult-D50MSHXR.js";
import { n as u, r as d, t as f } from "./performanceProfiler-CPLEjApa.js";
import { E as p, O as m, S as h, T as g, a as _, c as v, d as y, f as b, g as x, h as S, i as C, k as w, l as T, m as E, o as D, p as ee, s as te, v as ne, w as re, y as ie } from "./nativeText-vT3AWE14.js";
import { n as O, t as k } from "./renderCanvas2D-TrZzQBnN.js";
import { t as A } from "./canvasSizeHelper-7h_8rOcx.js";
import { exportCanvas as j, exportRaster as M } from "./rasterExport-DwXdfHiS.js";
import { createCanvas2DSvgRasterizer as N } from "./svgRasterizer-DkWQUl8W.js";
//#region ../core/src/rendering/canvas2d/picking/softwarePickingRasterizer.js
var P = 12, F = .5, I = class {
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
		this.#r = B(Math.floor(Math.min(e, n)), 0, this.buffer.width), this.#i = B(Math.floor(Math.min(t, r)), 0, this.buffer.height), this.#a = B(Math.ceil(Math.max(e, n)), this.#r, this.buffer.width), this.#o = B(Math.ceil(Math.max(t, r)), this.#i, this.buffer.height);
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
	strokeSegment(e, t, n, r, i, a) {
		if (!(a > 0) || !Number.isFinite(a)) return;
		this.#u++;
		let o = a / 2, s = this.#n;
		if (!L(t, n, r, i, this.#r - o, this.#i - o, this.#a + o, this.#o + o, s)) return;
		let c = s[2] - s[0], l = s[3] - s[1], u = Math.ceil(Math.max(Math.abs(c), Math.abs(l)));
		if (u == 0) {
			this.#h(e, s[0], s[1], o);
			return;
		}
		for (let t = 0; t <= u; t++) {
			let n = t / u;
			this.#h(e, s[0] + c * n, s[1] + l * n, o);
		}
	}
	strokeCubic(e, t, n, r, i, a, o, s, c, l, u = F) {
		if (!(l > 0) || !Number.isFinite(l) || !(u > 0) || !Number.isFinite(u) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s) || !Number.isFinite(c)) return;
		this.#d++;
		let d = this.#e;
		for (d.length = 0, d.push(t, n, r, i, a, o, s, c, 0); d.length;) {
			let t = d.pop(), n = d.pop(), r = d.pop(), i = d.pop(), a = d.pop(), o = d.pop(), s = d.pop(), c = d.pop(), f = d.pop();
			if (t >= P || R(f, c, s, o, a, i, r, n, u)) {
				this.strokeSegment(e, f, c, r, n, l);
				continue;
			}
			let p = (f + s) / 2, m = (c + o) / 2, h = (s + a) / 2, g = (o + i) / 2, _ = (a + r) / 2, v = (i + n) / 2, y = (p + h) / 2, b = (m + g) / 2, x = (h + _) / 2, S = (g + v) / 2, C = (y + x) / 2, w = (b + S) / 2, T = t + 1;
			d.push(C, w, x, S, _, v, r, n, T, f, c, p, m, y, b, C, w, T);
		}
	}
	#m(e, t, n, r) {
		this.#f++;
		let i = t * this.buffer.width;
		this.buffer.ids.fill(e >>> 0, i + n, i + r);
	}
	#h(e, t, n, r) {
		let i = Math.max(this.#r, Math.floor(t - r)), a = Math.max(this.#i, Math.floor(n - r)), o = Math.min(this.#a, Math.ceil(t + r)), s = Math.min(this.#o, Math.ceil(n + r));
		if (i >= o || a >= s) return;
		let c = e >>> 0, l = this.buffer.ids, u = this.buffer.width, d = o - i;
		for (let e = a; e < s; e++) {
			this.#f++;
			let t = e * u + i, n = t + d;
			if (d > 16) l.fill(c, t, n);
			else for (let e = t; e < n; e++) l[e] = c;
		}
	}
};
function L(e, t, n, r, i, a, o, s, c) {
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
function R(e, t, n, r, i, a, o, s, c) {
	let l = o - e, u = s - t, d = l * l + u * u, f = c * c;
	if (d == 0) {
		let o = z(e, t, n, r), s = z(e, t, i, a);
		return Math.max(o, s) <= f;
	}
	let p = u * (n - e) - l * (r - t), m = u * (i - e) - l * (a - t);
	return Math.max(p * p, m * m) <= f * d;
}
function z(e, t, n, r) {
	let i = n - e, a = r - t;
	return i * i + a * a;
}
function B(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/renderers/index.js
var V = 1;
function H(e, t) {
	let n = e.getType();
	return n == "arrow" ? ae(e, t) : n == "rect" ? W(e, t) : n == "point" ? G(e, t) : n == "rule" || n == "tick" ? K(e, t) : n == "link" ? q(e, t) : n == "text" ? J(e, t) : 0;
}
function U(e) {
	let t = e.getType();
	return t == "rect" || t == "arrow" || t == "point" || t == "rule" || t == "tick" || t == "link" || t == "text";
}
function ae(e, t) {
	let n = e, r = S(n), i = Array(8).fill(0);
	return ne(n, r, t, (e) => {
		let a = Y(n, e.datum), o = e.strokeWidth / 2;
		r.stem && t.rasterizer.strokeSegment(a, e.tail.x, e.tail.y, e.tip.x, e.tip.y, e.stemHalfWidth * 2 + e.strokeWidth), x(e, (n, r) => {
			let s = e.headHalfWidth + o, c = n + e.tangent.x * o, l = r + e.tangent.y * o, u = e.headRepeatFootprint + o, d = n - e.tangent.x * u, f = r - e.tangent.y * u;
			oe(i, c, l, d, f, e.normal.x, e.normal.y, s), t.rasterizer.fillConvexPolygon(a, i);
		});
	});
}
function W(e, t) {
	let n = e;
	return T(n, v(n), t, (e) => t.rasterizer.fillRect(Y(n, e.datum), e.x, e.y, e.width, e.height));
}
function G(e, t) {
	let n = e, r = h(n, n.properties.minPickingSize);
	return b(n, y(n), t, (e) => t.rasterizer.fillSquare(Y(n, e.datum), e.x, e.y, Math.max(e.boundsRadius, r / 2)));
}
function K(e, t) {
	let n = e;
	return te(n, D(n), t, (e) => t.rasterizer.strokeSegment(Y(n, e.datum), e.x1, e.y1, e.x2, e.y2, Math.max(e.strokeWidth, V)));
}
function q(e, t) {
	let n = e, r = h(n, n.properties.minPickingSize);
	return E(n, ee(n), t, (e) => {
		let [i, a, o, s] = e.points;
		t.rasterizer.strokeCubic(Y(n, e.datum), i[0], i[1], a[0], a[1], o[0], o[1], s[0], s[1], Math.max(e.strokeWidth, r));
	});
}
function J(e, t) {
	let n = e;
	return _(n, C(n), t, (e) => t.rasterizer.fillConvexPolygon(Y(n, e.datum), e.boundsQuad));
}
function oe(e, t, n, r, i, a, o, s) {
	let c = a * s, l = o * s;
	e[0] = t + c, e[1] = n + l, e[2] = r + c, e[3] = i + l, e[4] = r - c, e[5] = i - l, e[6] = t - c, e[7] = n - l;
}
function Y(e, t) {
	let n = e.encoders;
	return ie(n.uniqueId, t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingViewRenderingContext.js
var se = class extends c {
	#e = [];
	#t = /* @__PURE__ */ new Set();
	#n;
	#r = new m();
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
		if (!e.isPickingParticipant() || !U(e)) return;
		let i = t.sampleFacetRenderingOptions;
		if (i && !e.encoders.facetIndex && (this.#n?.addCount("canvasSampleFacetOccurrences"), !O(i))) {
			this.#n?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let a = e.unitView.getEffectiveOpacity();
		if (a <= 0) return;
		let o = this.currentCoords, c = n(t), l = r(c, e.properties.clip, o), u = g(this.width, this.height, l);
		if (!p(u)) return;
		let d = re(o, c, e.properties.cullByVisibleRange), f = this.#i?.prepare(e) ?? !1;
		w(e, t, o, this.#r, (t, n) => {
			if (n.length == 0) return;
			let r = 0, i = n.length;
			if (f && this.#i.query(n, this.#a) && (r = this.#a[0], i = this.#a[1], r === i)) return;
			let o = this.getRasterizer();
			o.setClip(u.x1, u.y1, u.x2, u.y2), H(e, {
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
		let t = e(this.#e);
		if (!t) throw Error("No current view in software picking rendering context.");
		return t.coords;
	}
}, X = 2 ** 31 - 1, ce = -(2 ** 31);
function le(e, t, n, r = n) {
	let a = Array(e);
	a.fill(X);
	let o = ce, s = -Infinity, c = !1, l = Array(e);
	l.fill(0);
	let u = t[0], d = (t[1] - t[0]) / e, f = (t, n) => {
		let r = (t - u) / d, a = Math.floor(r);
		return i(n && a == r ? a - 1 : a, 0, e - 1);
	};
	function p(e, t, r) {
		if (c) return;
		if (t > o) o = t;
		else {
			c = !0;
			return;
		}
		let i = n(e);
		if (!Number.isFinite(i) || i < s) {
			c = !0;
			return;
		}
		s = i;
		let u = f(i, !1);
		a[u] > t && (a[u] = t), l[u] < r && (l[u] = r);
	}
	function m(e, t, i) {
		if (c) return;
		if (t > o) o = t;
		else {
			c = !0, console.debug("Items (vertices) are not ordered properly. Disabling binned index.");
			return;
		}
		let u = n(e), d = r(e);
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
		for (let e = p; e <= m; e++) a[e] > t && (a[e] = t), l[e] < i && (l[e] = i);
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
	return p.getIndex = g, m.getIndex = g, n == r ? p : m;
}
//#endregion
//#region ../core/src/rendering/xIndex/markXIndex.js
function ue(e, t, n = 0) {
	if (!t.length) return;
	let r = le(Math.min(256, Math.ceil(Math.sqrt(t.length))), e.indexDomain, e.xAccessor, e.x2Accessor);
	return t.forEach((e, t) => r(e, n + t, n + t + 1)), r.getIndex();
}
function de(e) {
	let n = e.encoders?.x, r = e.encoders?.x2;
	if (!n?.channelDef || !("buildIndex" in n.channelDef) || !n.channelDef.buildIndex || !n.scale || !a(n.scale.type) && !["index", "locus"].includes(n.scale.type) || n.branches.length !== 1) return;
	let i = e.getType();
	if (i !== "point" && i !== "rect") return;
	let o = t(n)?.asNumberAccessor();
	if (!o) return;
	let s;
	if (r && (r.scale !== n.scale || r.branches.length !== 1 || (s = t(r)?.asNumberAccessor(), !s))) return;
	let c = e.unitView.getScaleResolution("x"), l = c?.zoomExtent;
	if (!(!c || !l || !Number.isFinite(l[0]) || !Number.isFinite(l[1]) || l[1] <= l[0])) return {
		xAccessor: o,
		x2Accessor: s,
		scaleResolution: c,
		indexDomain: [l[0], l[1]],
		domainStartOffset: ["index", "locus"].includes(n.scale.type) ? -1 : 0
	};
}
function fe(e, t) {
	let n = e.scaleResolution.getScale().domain();
	if (n.length !== 2 || !Number.isFinite(n[0]) || !Number.isFinite(n[1]) || n[1] <= n[0]) return !1;
	let r = n[1] - n[0];
	return t[0] = n[0] + e.domainStartOffset - r, t[1] = n[1] + r, !0;
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvasXIndexManager.js
var pe = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t = [0, 0];
	#n;
	prepare(e) {
		if (this.#n = void 0, e.encoders.facetIndex) return this.#r();
		let t = e.unitView.getCollector(), n = e.unitView.getScaleResolution("x"), r = n?.zoomExtent, i = this.#e.get(e);
		if (!i || i.collector !== t || i.dataRevision !== t.dataRevision || i.xEncoder !== e.encoders.x || i.x2Encoder !== e.encoders.x2 || i.xScaleResolution !== n || i.xIndexDomainStart !== r?.[0] || i.xIndexDomainEnd !== r?.[1]) {
			let a = de(e);
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
		return !a || !fe(a, this.#t) ? this.#r() : (this.#n = i, !0);
	}
	query(e, t) {
		let n = this.#n;
		if (!n?.spec) throw Error("Canvas x-index query was not prepared.");
		f("canvasXIndexNativeItems", e.length);
		let r = n.batches.get(e);
		return r === void 0 && (r = ue(n.spec, e) ?? null, n.batches.set(e, r), f("canvasXIndexBuilds"), r || f("canvasXIndexRejectedBuilds")), r ? (r(this.#t[0], this.#t[1], t), f("canvasXIndexQueries"), f("canvasXIndexCandidateItems", t[1] - t[0]), t[0] === t[1] && f("canvasXIndexEmptyRanges"), !0) : this.#r();
	}
	#r() {
		return f("canvasXIndexFallbackQueries"), !1;
	}
}, me = class {
	constructor(e) {
		this.viewRoot = e.viewRoot, this.context = e.context, this.surface = e.surface, this.getBackground = e.getBackground, this.broadcast = e.broadcast, this.onLayoutComputed = e.onLayoutComputed, this.layoutResult = void 0, this.pickingRasterizer = void 0, this.dirtyPickingBuffer = !0, this.xIndexManager = new pe(), this.opacityLayers = [];
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
			d("render", () => k({
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
		let n = this.pickingRasterizer, r = !1, i = new se({
			width: t.width,
			height: t.height,
			devicePixelRatio: this.surface.getDevicePixelRatio(),
			getRasterizer: () => (n || (n = new I(this.surface.getPickingBuffer()), this.pickingRasterizer = n), r ||= (n.resetClip(), n.resetStatistics(), !0), n),
			xIndexManager: this.xIndexManager
		}), a = u();
		a?.beginFrame("canvas", "picking");
		try {
			d("picking", () => e.collectRenderCommands(i)), this.dirtyPickingBuffer = !1, r && he(n, a);
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
function he(e, t) {
	if (!t) return;
	let n = e.getStatistics();
	t.addCount("pickingRectangles", n.rectangles), t.addCount("pickingSquares", n.squares), t.addCount("pickingPolygons", n.polygons), t.addCount("pickingSegments", n.segments), t.addCount("pickingCubics", n.cubics), t.addCount("pickingSpans", n.spans);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingBuffer.js
var Z = /* @__PURE__ */ new Uint32Array(), ge = class {
	#e = Z;
	width = 0;
	height = 0;
	constructor(e = 0, t = 0) {
		this.resize(e, t);
	}
	get ids() {
		return this.#e;
	}
	resize(e, t) {
		let n = Q(e, "width"), r = Q(t, "height");
		if (n == this.width && r == this.height) return !1;
		let i = n * r;
		if (!Number.isSafeInteger(i)) throw RangeError("Software picking buffer is too large.");
		return this.width = n, this.height = r, this.#e = i ? new Uint32Array(i) : Z, !0;
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
		this.width = 0, this.height = 0, this.#e = Z;
	}
};
function Q(e, t) {
	if (!Number.isFinite(e) || e < 0) throw RangeError(`Software picking buffer ${t} must be a finite nonnegative number.`);
	return Math.floor(e);
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvas2DSurface.js
var $ = class {
	#e;
	#t;
	#n;
	#r = !1;
	constructor(e) {
		let t = document.createElement("canvas"), n = t.getContext("2d");
		if (!n) throw Error("Unable to initialize a Canvas2D rendering context.");
		this.canvas = t, this.context = n, e.container.appendChild(t);
		try {
			this.#e = new A(e.container, t, e.sizeSource, () => {
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
		return this.#n ??= new ge(e.width, e.height), this.#n;
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
function _e(e) {
	let t = new $(e);
	return {
		surface: t,
		createRenderCoordinator: (e) => new me({
			...e,
			surface: t,
			context: t.context
		}),
		exportCanvas: (e) => j({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio()
		}),
		exportRaster: (e) => M({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio()
		}),
		rasterizeSvgRuns: (e) => N()(e),
		readPickingId: (e, n) => t.readPickingId(e, n)
	};
}
//#endregion
export { _e as createCanvas2DRenderingBackend };
