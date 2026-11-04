import { ln as e, mt as t, o as n, ot as r, s as i } from "./clipOptions-Dqn337WO.js";
import { s as a } from "./flowNode-BSjy0Wz3.js";
import { t as o } from "./warning-CpIIpk8e.js";
import { t as s, u as c } from "./rectangle-CQIQpWfg.js";
import { n as l, r as u } from "./color-BM6tqh_h.js";
import { n as d, r as f, t as p } from "./performanceProfiler-CPLEjApa.js";
import { C as m, D as h, E as g, F as _, L as v, N as y, P as b, R as x, S, _ as C, c as w, d as T, f as E, g as D, i as O, j as k, l as ee, m as te, n as ne, p as re, u as ie, v as ae, w as A, x as j, y as M } from "./order-C8ixZgC9.js";
import { n as N, t as P } from "./renderCanvas2D-BpVZEZWy.js";
import { t as F } from "./canvasSizeHelper-foL2YvGL.js";
import { exportCanvas as I, exportRaster as L } from "./rasterExport-Cl5roTTb.js";
import { createCanvas2DSvgRasterizer as R } from "./svgRasterizer-DURxdrT9.js";
//#region ../core/src/rendering/canvas2d/picking/softwarePickingRasterizer.js
var z = 12, B = .5, V = class {
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
		this.#r = W(Math.floor(Math.min(e, n)), 0, this.buffer.width), this.#i = W(Math.floor(Math.min(t, r)), 0, this.buffer.height), this.#a = W(Math.ceil(Math.max(e, n)), this.#r, this.buffer.width), this.#o = W(Math.ceil(Math.max(t, r)), this.#i, this.buffer.height);
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
		Number.isFinite(t) && Number.isFinite(n) && r > 0 && Number.isFinite(r) && (this.#c++, this.#h(e, t, n, r));
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
		if (!E(t, n, r, i, this.#r - s, this.#i - s, this.#a + s, this.#o + s, c)) return;
		let l = c[2] - c[0], u = c[3] - c[1], d = Math.ceil(Math.max(Math.abs(l), Math.abs(u)));
		if (d == 0) this.#h(e, c[0], c[1], s, o);
		else for (let t = 0; t <= d; t++) {
			let n = t / d;
			this.#h(e, c[0] + l * n, c[1] + u * n, s, o);
		}
	}
	strokeCubic(e, t, n, r, i, a, o, s, c, l, u = B, d) {
		if (!(l > 0) || !Number.isFinite(l) || !(u > 0) || !Number.isFinite(u) || !Number.isFinite(t) || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s) || !Number.isFinite(c)) return;
		this.#d++;
		let f = this.#e;
		for (f.length = 0, f.push(t, n, r, i, a, o, s, c, 0); f.length;) {
			let t = f.pop(), n = f.pop(), r = f.pop(), i = f.pop(), a = f.pop(), o = f.pop(), s = f.pop(), c = f.pop(), p = f.pop();
			if (t >= z || H(p, c, s, o, a, i, r, n, u)) {
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
function H(e, t, n, r, i, a, o, s, c) {
	let l = o - e, u = s - t, d = l * l + u * u, f = c * c;
	if (d == 0) {
		let o = U(e, t, n, r), s = U(e, t, i, a);
		return Math.max(o, s) <= f;
	}
	let p = u * (n - e) - l * (r - t), m = u * (i - e) - l * (a - t);
	return Math.max(p * p, m * m) <= f * d;
}
function U(e, t, n, r) {
	let i = n - e, a = r - t;
	return i * i + a * a;
}
function W(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/renderers/index.js
var G = 1;
function K(e, t) {
	let n = e.getType();
	return n == "arrow" ? J(e, t) : n == "rect" ? oe(e, t) : n == "point" ? se(e, t) : n == "rule" || n == "tick" ? ce(e, t) : n == "link" ? le(e, t) : n == "text" ? ue(e, t) : 0;
}
function q(e) {
	let t = e.getType();
	return t == "rect" || t == "arrow" || t == "point" || t == "rule" || t == "tick" || t == "link" || t == "text";
}
function J(e, t) {
	let n = e, r = m(n), i = Array(8).fill(0);
	return g(n, r, t, (e) => {
		let a = Y(n, e.datum), o = e.strokeWidth / 2;
		r.stem && t.rasterizer.strokeSegment(a, e.tail.x, e.tail.y, e.tip.x, e.tip.y, e.stemHalfWidth * 2 + e.strokeWidth), A(e, (n, r, s, c) => {
			let l = e.headHalfWidth + o, u = n + s.x * o, d = r + s.y * o, f = e.headRepeatFootprint + o, p = n - s.x * f, m = r - s.y * f;
			de(i, u, d, p, m, c.x, c.y, l), t.rasterizer.fillConvexPolygon(a, i);
		});
	});
}
function oe(e, t) {
	let n = e;
	return te(n, re(n), t, (e) => t.rasterizer.fillRect(Y(n, e.datum), e.x, e.y, e.width, e.height));
}
function se(e, t) {
	let n = e, r = k(n, n.properties.minPickingSize);
	return C(n, D(n), t, (e) => t.rasterizer.fillSquare(Y(n, e.datum), e.x, e.y, Math.max(e.boundsRadius, r / 2)));
}
function ce(e, t) {
	let n = e, r = ie(n);
	return T(n, r, t, (e) => {
		let i = e.x2 - e.x1, a = e.y2 - e.y1, o = r.strokeCap === "square" && e.strokeWidth > 0 ? (e.size / 2 + e.strokeWidth) / Math.hypot(i, a) : 0;
		t.rasterizer.strokeSegment(Y(n, e.datum), e.x1 - i * o, e.y1 - a * o, e.x2 + i * o, e.y2 + a * o, Math.max(e.size + 2 * e.strokeWidth, G));
	});
}
function le(e, t) {
	let n = e, r = k(n, n.properties.minPickingSize), i = ae(n), a = S(n, i.shape);
	return M(n, i, {
		...t,
		minPickingSize: r
	}, (e) => {
		let { geometry: i } = e;
		if (i.type == "orthogonal") {
			let [a, o, s] = i.points, c = Y(n, e.datum), l = Math.max(e.strokeWidth, r) / 2;
			for (let e = 0; e < 2; e++) {
				let n = i.points[e], r = i.points[e + 1], a = Math.abs(r[0] - n[0]), o = Math.abs(r[1] - n[1]);
				(a != 0 || o != 0) && t.rasterizer.fillRect(c, Math.min(n[0], r[0]) - (a == 0 ? l : 0), Math.min(n[1], r[1]) - (o == 0 ? l : 0), a + (a == 0 ? 2 * l : 0), o + (o == 0 ? 2 * l : 0));
			}
			if ((a[0] != o[0] || a[1] != o[1]) && (s[0] != o[0] || s[1] != o[1])) {
				let e = o[0] + l * (Math.sign(o[0] - a[0]) - Math.sign(s[0] - o[0])), n = o[1] + l * (Math.sign(o[1] - a[1]) - Math.sign(s[1] - o[1]));
				t.rasterizer.fillRect(c, Math.min(o[0], e), Math.min(o[1], n), l, l);
			}
			return;
		}
		let [o, s, c, l] = i.points, u = a && j(o, l, a);
		t.rasterizer.strokeCubic(Y(n, e.datum), o[0], o[1], s[0], s[1], c[0], c[1], l[0], l[1], Math.max(e.strokeWidth, r), void 0, u ? (e, t) => Math.abs(u.normalX * e + u.normalY * t - u.offset) < u.end : void 0);
	});
}
function ue(e, t) {
	let n = e, r = t.textMetrics ?? n.unitView.context.textMetrics, i = r.requestFont(n.properties), a = O(r, n.properties);
	return ee(n, w(n), {
		...t,
		fontMeasurement: i,
		measureLogoInkBounds: a
	}, (e) => t.rasterizer.fillConvexPolygon(Y(n, e.datum), e.boundsQuad));
}
function de(e, t, n, r, i, a, o, s) {
	let c = a * s, l = o * s;
	e[0] = t + c, e[1] = n + l, e[2] = r + c, e[3] = i + l, e[4] = r - c, e[5] = i - l, e[6] = t - c, e[7] = n - l;
}
function Y(e, t) {
	let n = e.encoders;
	return h(n.uniqueId, t);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingViewRenderingContext.js
var fe = class extends u {
	#e = [];
	#t = /* @__PURE__ */ new Set();
	#n;
	#r = new v();
	#i;
	#a = [0, 0];
	constructor(e) {
		super({ picking: !0 }), this.width = e.width, this.height = e.height, this.devicePixelRatio = e.devicePixelRatio, this.getRasterizer = e.getRasterizer, this.textMetrics = e.textMetrics, this.#n = d(), this.#i = e.xIndexManager;
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
		if (!e.isPickingParticipant() || !q(e)) return;
		let r = t.sampleFacetRenderingOptions;
		if (r && !e.encoders.facetIndex && (this.#n?.addCount("canvasSampleFacetOccurrences"), !N(r))) {
			this.#n?.addCount("canvasCulledSampleFacetOccurrences");
			return;
		}
		let a = e.unitView.getEffectiveOpacity();
		if (a <= 0) return;
		let s = this.currentCoords, c = n(t), l = i(c, e.properties.clip, s), u = b(this.width, this.height, l);
		if (!_(u)) return;
		let d = y(s, c, e.properties.cullByVisibleRange), f = this.#i?.prepare(e) ?? !1;
		x(e, t, s, this.#r, (t, n) => {
			if (n.length == 0) return;
			let r = 0, i = n.length;
			if (f && this.#i.query(n, this.#a) && (r = this.#a[0], i = this.#a[1], r === i)) return;
			let o = this.getRasterizer();
			o.setClip(u.x1, u.y1, u.x2, u.y2), K(e, {
				rasterizer: o,
				coords: t,
				data: n,
				start: r,
				end: i,
				visibleBounds: u,
				anchorCullBounds: d,
				viewOpacity: a,
				textMetrics: this.textMetrics
			});
		}, (t) => o(`Canvas2D picking could not resolve sample facet index ${t}. View: ${e.unitView.getPathString()}`));
	}
	get currentCoords() {
		let e = a(this.#e);
		if (!e) throw Error("No current view in software picking rendering context.");
		return e.coords;
	}
}, X = 2 ** 31 - 1, pe = -(2 ** 31);
function me(e, t, n, i = n) {
	let a = Array(e);
	a.fill(X);
	let o = pe, s = -Infinity, c = !1, l = Array(e);
	l.fill(0);
	let u = t[0], d = (t[1] - t[0]) / e, f = (t, n) => {
		let i = (t - u) / d, a = Math.floor(i);
		return r(n && a == i ? a - 1 : a, 0, e - 1);
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
	function m(e, t, r) {
		if (c) return;
		if (t > o) o = t;
		else {
			c = !0, console.debug("Items (vertices) are not ordered properly. Disabling binned index.");
			return;
		}
		let u = n(e), d = i(e);
		if (!Number.isFinite(u) || !Number.isFinite(d) || u < s || d < u) {
			c = !0;
			return;
		}
		s = u;
		let p = f(u, !1), m = u === d ? p : f(d, !0);
		for (let e = p; e <= m; e++) a[e] > t && (a[e] = t), l[e] < r && (l[e] = r);
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
	return p.getIndex = g, m.getIndex = g, n == i ? p : m;
}
//#endregion
//#region ../core/src/utils/forEachInBatch.js
var he = 0;
function ge(e, t) {
	if (e.length > 1e4) Function("data", "visit", `
            // batch loop ${he++}
            for (let i = 0; i < data.length; i++) {
                visit(data[i], i);
            }
        `)(e, t);
	else for (let n = 0; n < e.length; n++) t(e[n], n);
}
//#endregion
//#region ../core/src/rendering/xIndex/markXIndex.js
function _e(e, t, n = 0) {
	if (!t.length) return;
	let r = me(Math.min(256, Math.ceil(Math.sqrt(t.length))), e.indexDomain, e.xAccessor, e.x2Accessor);
	return ge(t, (e, t) => {
		let i = n + t;
		r(e, i, i + 1);
	}), r.getIndex();
}
function ve(n) {
	let r = n.encoders?.x, i = n.encoders?.x2;
	if (!r?.channelDef || !("buildIndex" in r.channelDef) || !r.channelDef.buildIndex || !r.scale || !e(r.scale.type) && !["index", "locus"].includes(r.scale.type) || r.branches.length !== 1) return;
	let a = n.getType();
	if (a === "point" && c(n, "x") || a !== "point" && a !== "rect") return;
	let o = t(r)?.asNumberAccessor();
	if (!o) return;
	let s;
	if (i && (i.scale !== r.scale || i.branches.length !== 1 || (s = t(i)?.asNumberAccessor(), !s))) return;
	let l = n.unitView.getScaleResolution("x"), u = l?.zoomExtent;
	if (!(!l || !u || !Number.isFinite(u[0]) || !Number.isFinite(u[1]) || u[1] <= u[0])) return {
		xAccessor: o,
		x2Accessor: s,
		scaleResolution: l,
		indexDomain: [u[0], u[1]],
		domainStartOffset: ["index", "locus"].includes(r.scale.type) ? -1 : 0
	};
}
function Z(e, t) {
	let n = e.scaleResolution.getScale().domain();
	if (n.length !== 2 || !Number.isFinite(n[0]) || !Number.isFinite(n[1]) || n[1] <= n[0]) return !1;
	let r = n[1] - n[0];
	return t[0] = n[0] + e.domainStartOffset - r, t[1] = n[1] + r, !0;
}
//#endregion
//#region ../core/src/rendering/canvas2d/canvasXIndexManager.js
var ye = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t = [0, 0];
	#n;
	prepare(e) {
		if (this.#n = void 0, e.encoders.facetIndex) return this.#r();
		let t = e.unitView.getCollector(), n = e.unitView.getScaleResolution("x"), r = n?.zoomExtent, i = this.#e.get(e);
		if (!i || i.collector !== t || i.dataRevision !== t.dataRevision || i.xEncoder !== e.encoders.x || i.x2Encoder !== e.encoders.x2 || i.xScaleResolution !== n || i.xIndexDomainStart !== r?.[0] || i.xIndexDomainEnd !== r?.[1]) {
			let a = ve(e);
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
		return !a || !Z(a, this.#t) ? this.#r() : (this.#n = i, !0);
	}
	query(e, t) {
		let n = this.#n;
		if (!n?.spec) throw Error("Canvas x-index query was not prepared.");
		p("canvasXIndexNativeItems", e.length);
		let r = n.batches.get(e);
		return r === void 0 && (r = _e(n.spec, e) ?? null, n.batches.set(e, r), p("canvasXIndexBuilds"), r || p("canvasXIndexRejectedBuilds")), r ? (r(this.#t[0], this.#t[1], t), p("canvasXIndexQueries"), p("canvasXIndexCandidateItems", t[1] - t[0]), t[0] === t[1] && p("canvasXIndexEmptyRanges"), !0) : this.#r();
	}
	#r() {
		return p("canvasXIndexFallbackQueries"), !1;
	}
}, be = class {
	constructor(e) {
		this.viewRoot = e.viewRoot, this.context = e.context, this.surface = e.surface, this.textMetrics = e.textMetrics, this.getBackground = e.getBackground, this.broadcast = e.broadcast, this.onLayoutComputed = e.onLayoutComputed, this.layoutResult = void 0, this.pickingRasterizer = void 0, this.dirtyPickingBuffer = !0, this.xIndexManager = new ye(), this.opacityLayers = [];
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
		let n = d();
		n?.beginFrame("canvas");
		try {
			f("render", () => P({
				layoutResult: e,
				context: this.context,
				width: t.width,
				height: t.height,
				devicePixelRatio: this.surface.getDevicePixelRatio(),
				background: this.getBackground(),
				paint: !0,
				textMetrics: this.textMetrics,
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
		let n = this.pickingRasterizer, r = !1, i = new fe({
			width: t.width,
			height: t.height,
			devicePixelRatio: this.surface.getDevicePixelRatio(),
			textMetrics: this.textMetrics,
			getRasterizer: () => (n || (n = new V(this.surface.getPickingBuffer()), this.pickingRasterizer = n), r ||= (n.resetClip(), n.resetStatistics(), !0), n),
			xIndexManager: this.xIndexManager
		}), a = d();
		a?.beginFrame("canvas", "picking");
		try {
			f("picking", () => e.collectRenderCommands(i)), this.dirtyPickingBuffer = !1, r && xe(n, a);
		} finally {
			a?.endFrame();
		}
	}
	createPickingBufferVisualization() {
		return this.dirtyPickingBuffer = !0, this.renderPickingFramebuffer(), this.surface.createPickingBufferVisualization();
	}
	#e() {
		let e = this.surface.getLogicalCanvasSize();
		if (!(isNaN(e.width) || isNaN(e.height))) return l(this.viewRoot, s.create(0, 0, e.width, e.height), {
			devicePixelRatio: this.surface.getDevicePixelRatio(),
			renderingOptions: { firstFacet: !0 }
		});
	}
};
function xe(e, t) {
	if (!t) return;
	let n = e.getStatistics();
	t.addCount("pickingRectangles", n.rectangles), t.addCount("pickingSquares", n.squares), t.addCount("pickingPolygons", n.polygons), t.addCount("pickingSegments", n.segments), t.addCount("pickingCubics", n.cubics), t.addCount("pickingSpans", n.spans);
}
//#endregion
//#region ../core/src/rendering/canvas2d/picking/softwarePickingBuffer.js
var Q = /* @__PURE__ */ new Uint32Array(), Se = class {
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
var Ce = class {
	#e;
	#t;
	#n;
	#r = !1;
	constructor(e) {
		let t = document.createElement("canvas"), n = t.getContext("2d");
		if (!n) throw Error("Unable to initialize a Canvas2D rendering context.");
		this.canvas = t, this.context = n, e.container.appendChild(t);
		try {
			this.#e = new F(e.container, t, e.sizeSource, () => {
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
		return this.#n ??= new Se(e.width, e.height), this.#n;
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
function we(e) {
	let t = new Ce(e), n = ne(e.container.ownerDocument);
	return {
		surface: t,
		textMetrics: n,
		createRenderCoordinator: (e) => new be({
			...e,
			surface: t,
			context: t.context,
			textMetrics: n
		}),
		exportCanvas: (e) => I({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio(),
			textMetrics: n
		}),
		exportRaster: (e) => L({
			...e,
			liveSize: t.getLogicalCanvasSize(),
			liveDevicePixelRatio: t.getDevicePixelRatio(),
			textMetrics: n
		}),
		rasterizeSvgRuns: (e) => R()(e),
		readPickingId: (e, n) => t.readPickingId(e, n)
	};
}
//#endregion
export { we as createCanvas2DRenderingBackend };
