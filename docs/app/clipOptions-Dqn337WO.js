import { $ as e, A as t, B as n, D as r, E as i, F as a, G as o, H as s, I as c, J as l, K as u, L as d, M as f, N as p, O as m, P as h, Q as ee, R as g, T as te, U as _, V as ne, W as re, X as ie, Y as ae, Z as oe, a as se, d as ce, et as le, j as ue, k as de, l as fe, nt as pe, q as me, t as he, tt as ge, z as _e } from "./flowNode-BSjy0Wz3.js";
//#region \0rolldown/runtime.js
var ve = Object.defineProperty, ye = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), be = (e, t) => {
	let n = {};
	for (var r in e) ve(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ve(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region ../../node_modules/d3-array/src/ascending.js
function xe(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function Se(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function Ce(e) {
	let t, n, r;
	e.length === 2 ? (t = e === xe || e === Se ? e : we, n = e, r = e) : (t = xe, n = (t, n) => xe(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function we() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function Te(e) {
	return e === null ? NaN : +e;
}
function* Ee(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var De = Ce(xe), v = De.right, Oe = De.left;
Ce(Te).center;
//#endregion
//#region ../../node_modules/internmap/src/index.js
var ke = class extends Map {
	constructor(e, t = Ne) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(Ae(this, e));
	}
	has(e) {
		return super.has(Ae(this, e));
	}
	set(e, t) {
		return super.set(je(this, e), t);
	}
	delete(e) {
		return super.delete(Me(this, e));
	}
};
function Ae({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function je({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Me({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function Ne(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/permute.js
function Pe(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function Fe(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = Le(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => Le(n[e], n[t]))), Pe(e, r);
	}
	return e.sort(Ie(n));
}
function Ie(e = xe) {
	if (e === xe) return Le;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function Le(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function Re(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-array/src/min.js
function ze(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-array/src/quickselect.js
function Be(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? Le : Ie(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			Be(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (Ve(e, n, t), i(e[r], a) > 0 && Ve(e, n, r); o < s;) {
			for (Ve(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? Ve(e, n, s) : (++s, Ve(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function Ve(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function He(e, t, n) {
	if (e = Float64Array.from(Ee(e, n)), (r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return ze(e);
		if (t >= 1) return Re(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Re(Be(e, a).subarray(0, a + 1));
		return o + (ze(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Ue(e, t, n = Te) {
	if ((r = e.length) && !isNaN(t = +t)) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function We(e, t, r, i, a, c) {
	let l = [
		[
			g,
			1,
			_
		],
		[
			g,
			5,
			5 * _
		],
		[
			g,
			15,
			15 * _
		],
		[
			g,
			30,
			30 * _
		],
		[
			c,
			1,
			ne
		],
		[
			c,
			5,
			5 * ne
		],
		[
			c,
			15,
			15 * ne
		],
		[
			c,
			30,
			30 * ne
		],
		[
			a,
			1,
			n
		],
		[
			a,
			3,
			3 * n
		],
		[
			a,
			6,
			6 * n
		],
		[
			a,
			12,
			12 * n
		],
		[
			i,
			1,
			_e
		],
		[
			i,
			2,
			2 * _e
		],
		[
			r,
			1,
			re
		],
		[
			t,
			1,
			s
		],
		[
			t,
			3,
			3 * s
		],
		[
			e,
			1,
			o
		]
	];
	function d(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : f(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function f(t, n, r) {
		let i = Math.abs(n - t) / r, a = Ce(([, , e]) => e).right(l, i);
		if (a === l.length) return e.every(ge(t / o, n / o, r));
		if (a === 0) return u.every(Math.max(ge(t, n, r), 1));
		let [s, c] = l[i / l[a - 1][2] < l[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [d, f];
}
var [Ge, Ke] = We(i, m, t, f, a, d), [qe, Je] = We(te, r, de, ue, h, c);
//#endregion
//#region ../../node_modules/vega-util/build/vega-util.js
function y(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function Ye(e) {
	return e == null ? null : e.fname;
}
function Xe(e) {
	return e == null ? null : e.fields;
}
function Ze(e) {
	return e.length === 1 ? Qe(e[0]) : $e(e);
}
var Qe = (e) => function(t) {
	return t[e];
}, $e = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function et(e) {
	throw Error(e);
}
function tt(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || et("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && et("Access path missing closing bracket: " + e), r && et("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function nt(e, t, n) {
	let r = tt(e);
	return e = r.length === 1 ? r[0] : e, y((n && n.get || Ze)(r), [e], t || e);
}
nt("id");
var rt = y((e) => e, [], "identity");
y(() => 0, [], "zero"), y(() => 1, [], "one"), y(() => !0, [], "true"), y(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
var it = Array.isArray;
function at(e) {
	return e === Object(e);
}
function ot(e) {
	return e[e.length - 1];
}
function st(e) {
	return e == null || e === "" ? null : +e;
}
var ct = (e) => (t) => e * Math.exp(t), lt = (e) => (t) => Math.log(e * t), ut = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), dt = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, ft = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function pt(e, t, n, r) {
	let i = n(e[0]), a = n(ot(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function mt(e, t) {
	return pt(e, t, st, rt);
}
function ht(e, t) {
	var n = Math.sign(e[0]);
	return pt(e, t, lt(n), ct(n));
}
function gt(e, t, n) {
	return pt(e, t, ft(n), ft(1 / n));
}
function _t(e, t, n, r, i) {
	let a = r(e[0]), o = r(ot(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function vt(e, t, n) {
	return _t(e, t, n, st, rt);
}
function yt(e, t, n) {
	let r = Math.sign(e[0]);
	return _t(e, t, n, lt(r), ct(r));
}
function bt(e, t, n, r) {
	return _t(e, t, n, ft(r), ft(1 / r));
}
function xt(e, t, n, r) {
	return _t(e, t, n, ut(r), dt(r));
}
function St(e) {
	return e == null ? [] : it(e) ? e : [e];
}
function Ct(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function wt(e) {
	return typeof e == "function";
}
var Tt = "descending";
function Et(e, t, n) {
	n ||= {}, t = St(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || Ot;
	return St(e).forEach((e, o) => {
		e != null && (r.push(t[o] === Tt ? -1 : 1), i.push(e = wt(e) ? e : nt(e, null, n)), (Xe(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : y(o(i, r), Object.keys(a));
}
var Dt = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, (e = e instanceof Date ? +e : e) !== e && t === t ? -1 : +(t !== t && e === e)), Ot = (e, t) => e.length === 1 ? kt(e[0], t[0]) : At(e, t, e.length), kt = (e, t) => function(n, r) {
	return Dt(e(n), e(r)) * t;
}, At = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = Dt(a(r), a(i));
	return o * t[s];
});
function jt(e, t, n, r) {
	let i = t[0], a = t[t.length - 1], o;
	return i > a && (o = i, i = a, a = o), n = n === void 0 || n, r = r === void 0 || r, (n ? i <= e : i < e) && (r ? e <= a : e < a);
}
function Mt(e) {
	return typeof e == "boolean";
}
function Nt(e) {
	return typeof e == "number";
}
function Pt(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Ft(e) {
	return typeof e == "string";
}
function It(e, t) {
	let n = e[0], r = ot(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function Lt(e) {
	return e && ot(e) - e[0] || 0;
}
function Rt(e) {
	return it(e) ? `[${e.map((e) => e === null ? "null" : Rt(e))}]` : at(e) || Ft(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function zt(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../core/src/utils/specError.js
function Bt(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e instanceof Error && !t.has(e);) {
		t.add(e);
		let n = e.specLocation;
		if (n) return n;
		e = e.cause;
	}
}
function Vt(e, t) {
	return e instanceof Error && t && !Bt(e) && Object.assign(e, { specLocation: t }), e;
}
//#endregion
//#region ../core/src/utils/compileDatumAccessor.js
var Ht = 0;
function Ut(e, t, n, r) {
	let i = Array.from(t, (e) => {
		let t = JSON.stringify(e);
		return `if (!(${t} in datum)) missingField(datum, ${t});`;
	}).join("\n");
	return Function("missingField", "context", `"use strict";
        return function createAccessor(globalObject) {
            // accessor ${Ht++}
            return function accessDatum(datum) {
                ${i}
                ${e}
            }${r ? ".bind(context)" : ""};
        };`)((e, t) => {
		throw Vt(/* @__PURE__ */ Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`), n);
	}, r);
}
//#endregion
//#region ../core/src/utils/field.js
function Wt(e, t, n) {
	let r = tt(e), i = r.length === 1 ? r[0] : e;
	return y(Ut(`return datum${r.map((e) => `[${JSON.stringify(e)}]`).join("")};`, r.length === 1 ? r : [], n)(), [i], t ?? i);
}
//#endregion
//#region ../core/src/data/transforms/transform.js
var Gt = class extends he {
	inFacet = !1;
	#e;
	#t;
	#n = 0;
	#r = 0;
	#i;
	#a = [];
	constructor(e, t) {
		super(t), this.#e = e.type;
		let n = e.debounce;
		if (n !== void 0) {
			if (!Number.isFinite(n) || n < 0) throw Error(`The debounce for the ${e.type} transform must be a non-negative finite number.`);
			this.#t = n, this.registerDisposer(() => clearTimeout(this.#i));
		}
	}
	complete() {
		let e = this.#n;
		super.complete(), this.#r = e, e == this.#n && (clearTimeout(this.#i), this.#i = void 0);
	}
	reset() {
		this.#s(), this.inFacet = !1, super.reset();
	}
	beginBatch(e) {
		e.type == "facet" && (this.inFacet = !0), this.#s(), super.beginBatch(e);
	}
	requestReactiveRepropagate() {
		this.#n++, this.#t === void 0 ? this.requestRepropagate() : (clearTimeout(this.#i), this.#i = void 0, this.completed && (this.#i = setTimeout(this.#o, this.#t)));
	}
	#o = () => {
		this.#i = void 0, !this.disposed && this.completed && this.#r != this.#n && (this.requestRepropagate(), this.paramRuntime.flushNow());
	};
	get label() {
		return this.#e;
	}
	createFieldAccessor(e, t, { index: n, defaultValue: r } = {}) {
		let i = e[t], a = Array.isArray(i), o = this.paramRuntimeProvider?.paramRuntime;
		return Wt(a ? i[n] : i ?? r, void 0, o?.getSpecLocation(e, i == null ? [] : a ? [t, n] : [t]));
	}
	createFieldAccessors(e, t) {
		return se(e[t]).map((n, r) => this.createFieldAccessor(e, t, { index: r }));
	}
	watchExprRef(e, t) {
		if (Hu(e)) {
			let n = e;
			return this.paramRuntime.watchExpression(n, t, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			});
		}
		return (() => e);
	}
	watchSnapshottedExpression(e) {
		let t, n;
		return t = this.paramRuntime.watchExpression(e, () => {
			n.refresh(), this.requestReactiveRepropagate();
		}, {
			scopeOwned: !1,
			registerDisposer: (e) => this.registerDisposer(e)
		}), n = t.createSnapshotEvaluator(), this.#a.push(n.refresh), n;
	}
	#s() {
		for (let e of this.#a) e();
	}
}, b = "__uniqueId", Kt = 1e4, qt = [null], Jt = class extends Gt {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this._blocks = [], this._usedBlocks = 0, this._id = -1;
	}
	initialize() {}
	reset() {
		super.reset(), this._usedBlocks = 0, this._id = -1;
	}
	handle(e) {
		e[b] = this.#e(), this._propagate(e);
	}
	#e() {
		return ++this._id % 1e4 == 0 && (this._id = this.#t() * Kt), this._id;
	}
	#t() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this.#n();
	}
	#n() {
		let e = qt.length;
		return qt[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/accessor.js
function Yt(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/getter.js
function Xt(e) {
	return e.length === 1 ? Zt(e[0]) : Qt(e);
}
var Zt = (e) => function(t) {
	return t[e];
}, Qt = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/error.js
function $t(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/splitAccessPath.js
function en(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || $t("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && $t("Access path missing closing bracket: " + e), r && $t("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/field.js
function tn(e, t, n) {
	let r = en(e), i = r.length === 1 ? r[0] : e;
	return Yt((n && n.get || Xt)(r), [i], t || i);
}
tn("id"), Yt((e) => e, [], "identity"), Yt(() => 0, [], "zero"), Yt(() => 1, [], "one"), Yt(() => !0, [], "true"), Yt(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/isArray.js
var nn = Array.isArray;
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/peek.js
function rn(e) {
	return e[e.length - 1];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toNumber.js
function an(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/array.js
function on(e) {
	return e == null ? [] : nn(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/vega-scale/node_modules/vega-util/build/toSet.js
function sn(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function x(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function S(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
//#endregion
//#region ../../node_modules/d3-scale/src/ordinal.js
var cn = Symbol("implicit");
function ln() {
	var e = new ke(), t = [], n = [], r = cn;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== cn) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new ke();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return ln(t, n).unknown(r);
	}, x.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function un(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function dn(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function C() {}
var fn = .7, pn = 1 / fn, mn = "\\s*([+-]?\\d+)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", w = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gn = /^#([0-9a-f]{3,8})$/, _n = RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`), vn = RegExp(`^rgb\\(${w},${w},${w}\\)$`), yn = RegExp(`^rgba\\(${mn},${mn},${mn},${hn}\\)$`), bn = RegExp(`^rgba\\(${w},${w},${w},${hn}\\)$`), xn = RegExp(`^hsl\\(${hn},${w},${w}\\)$`), Sn = RegExp(`^hsla\\(${hn},${w},${w},${hn}\\)$`), Cn = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
un(C, On, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: wn,
	formatHex: wn,
	formatHex8: Tn,
	formatHsl: En,
	formatRgb: Dn,
	toString: Dn
});
function wn() {
	return this.rgb().formatHex();
}
function Tn() {
	return this.rgb().formatHex8();
}
function En() {
	return Bn(this).formatHsl();
}
function Dn() {
	return this.rgb().formatRgb();
}
function On(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = gn.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? kn(t) : n === 3 ? new T(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? An(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? An(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _n.exec(e)) ? new T(t[1], t[2], t[3], 1) : (t = vn.exec(e)) ? new T(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = yn.exec(e)) ? An(t[1], t[2], t[3], t[4]) : (t = bn.exec(e)) ? An(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xn.exec(e)) ? zn(t[1], t[2] / 100, t[3] / 100, 1) : (t = Sn.exec(e)) ? zn(t[1], t[2] / 100, t[3] / 100, t[4]) : Cn.hasOwnProperty(e) ? kn(Cn[e]) : e === "transparent" ? new T(NaN, NaN, NaN, 0) : null;
}
function kn(e) {
	return new T(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function An(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new T(e, t, n, r);
}
function jn(e) {
	return e instanceof C || (e = On(e)), e ? (e = e.rgb(), new T(e.r, e.g, e.b, e.opacity)) : new T();
}
function Mn(e, t, n, r) {
	return arguments.length === 1 ? jn(e) : new T(e, t, n, r ?? 1);
}
function T(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
un(T, Mn, dn(C, {
	brighter(e) {
		return e = e == null ? pn : pn ** +e, new T(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? fn : fn ** +e, new T(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new T(Ln(this.r), Ln(this.g), Ln(this.b), In(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Nn,
	formatHex: Nn,
	formatHex8: Pn,
	formatRgb: Fn,
	toString: Fn
}));
function Nn() {
	return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}`;
}
function Pn() {
	return `#${Rn(this.r)}${Rn(this.g)}${Rn(this.b)}${Rn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fn() {
	let e = In(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Ln(this.r)}, ${Ln(this.g)}, ${Ln(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function In(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ln(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Rn(e) {
	return e = Ln(e), (e < 16 ? "0" : "") + e.toString(16);
}
function zn(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new E(e, t, n, r);
}
function Bn(e) {
	if (e instanceof E) return new E(e.h, e.s, e.l, e.opacity);
	if (e instanceof C || (e = On(e)), !e) return new E();
	if (e instanceof E) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new E(o, s, c, e.opacity);
}
function Vn(e, t, n, r) {
	return arguments.length === 1 ? Bn(e) : new E(e, t, n, r ?? 1);
}
function E(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
un(E, Vn, dn(C, {
	brighter(e) {
		return e = e == null ? pn : pn ** +e, new E(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? fn : fn ** +e, new E(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new T(Wn(e >= 240 ? e - 240 : e + 120, i, r), Wn(e, i, r), Wn(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new E(Hn(this.h), Un(this.s), Un(this.l), In(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = In(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Hn(this.h)}, ${Un(this.s) * 100}%, ${Un(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Hn(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Un(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Wn(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var Gn = Math.PI / 180, Kn = 180 / Math.PI, qn = 18, Jn = .96422, Yn = 1, Xn = .82521, Zn = 4 / 29, Qn = 6 / 29, $n = 3 * Qn * Qn, er = Qn * Qn * Qn;
function tr(e) {
	if (e instanceof D) return new D(e.l, e.a, e.b, e.opacity);
	if (e instanceof O) return lr(e);
	e instanceof T || (e = jn(e));
	var t = or(e.r), n = or(e.g), r = or(e.b), i = rr((.2225045 * t + .7168786 * n + .0606169 * r) / Yn), a, o;
	return t === n && n === r ? a = o = i : (a = rr((.4360747 * t + .3850649 * n + .1430804 * r) / Jn), o = rr((.0139322 * t + .0971045 * n + .7141733 * r) / Xn)), new D(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function nr(e, t, n, r) {
	return arguments.length === 1 ? tr(e) : new D(e, t, n, r ?? 1);
}
function D(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
un(D, nr, dn(C, {
	brighter(e) {
		return new D(this.l + qn * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new D(this.l - qn * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Jn * ir(t), e = Yn * ir(e), n = Xn * ir(n), new T(ar(3.1338561 * t - 1.6168667 * e - .4906146 * n), ar(-.9787684 * t + 1.9161415 * e + .033454 * n), ar(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function rr(e) {
	return e > er ? e ** (1 / 3) : e / $n + Zn;
}
function ir(e) {
	return e > Qn ? e * e * e : $n * (e - Zn);
}
function ar(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function or(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function sr(e) {
	if (e instanceof O) return new O(e.h, e.c, e.l, e.opacity);
	if (e instanceof D || (e = tr(e)), e.a === 0 && e.b === 0) return new O(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Kn;
	return new O(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function cr(e, t, n, r) {
	return arguments.length === 1 ? sr(e) : new O(e, t, n, r ?? 1);
}
function O(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function lr(e) {
	if (isNaN(e.h)) return new D(e.l, 0, 0, e.opacity);
	var t = e.h * Gn;
	return new D(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
un(O, cr, dn(C, {
	brighter(e) {
		return new O(this.h, this.c, this.l + qn * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new O(this.h, this.c, this.l - qn * (e ?? 1), this.opacity);
	},
	rgb() {
		return lr(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var ur = -.14861, dr = 1.78277, fr = -.29227, pr = -.90649, mr = 1.97294, hr = mr * pr, gr = mr * dr, _r = dr * fr - pr * ur;
function vr(e) {
	if (e instanceof br) return new br(e.h, e.s, e.l, e.opacity);
	e instanceof T || (e = jn(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (_r * r + hr * t - gr * n) / (_r + hr - gr), a = r - i, o = (mr * (n - i) - fr * a) / pr, s = Math.sqrt(o * o + a * a) / (mr * i * (1 - i)), c = s ? Math.atan2(o, a) * Kn - 120 : NaN;
	return new br(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function yr(e, t, n, r) {
	return arguments.length === 1 ? vr(e) : new br(e, t, n, r ?? 1);
}
function br(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
un(br, yr, dn(C, {
	brighter(e) {
		return e = e == null ? pn : pn ** +e, new br(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? fn : fn ** +e, new br(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Gn, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new T(255 * (t + n * (ur * r + dr * i)), 255 * (t + n * (fr * r + pr * i)), 255 * (t + mr * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function xr(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function Sr(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return xr((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function Cr(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return xr((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var wr = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function Tr(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Er(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Dr(e, t) {
	var n = t - e;
	return n ? Tr(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : wr(isNaN(e) ? t : e);
}
function Or(e) {
	return (e = +e) == 1 ? k : function(t, n) {
		return n - t ? Er(t, n, e) : wr(isNaN(t) ? n : t);
	};
}
function k(e, t) {
	var n = t - e;
	return n ? Tr(e, n) : wr(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var kr = (function e(t) {
	var n = Or(t);
	function r(e, t) {
		var r = n((e = Mn(e)).r, (t = Mn(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = k(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Ar(e) {
	return function(t) {
		for (var n = t.length, r = Array(n), i = Array(n), a = Array(n), o = 0, s; o < n; ++o) s = Mn(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var jr = Ar(Sr), Mr = Ar(Cr);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function Nr(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Pr(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function Fr(e, t) {
	return (Pr(t) ? Nr : Ir)(e, t);
}
function Ir(e, t) {
	for (var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o = 0; o < r; ++o) i[o] = j(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function Lr(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function A(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function Rr(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = j(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Br = new RegExp(zr.source, "g");
function Vr(e) {
	return function() {
		return e;
	};
}
function Hr(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ur(e, t) {
	var n = zr.lastIndex = Br.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = zr.exec(e)) && (i = Br.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: A(r, i)
	})), n = Br.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Hr(c[0].x) : Vr(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function j(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? wr(t) : (n === "number" ? A : n === "string" ? (r = On(t)) ? (t = r, kr) : Ur : t instanceof On ? kr : t instanceof Date ? Lr : Pr(t) ? Nr : Array.isArray(t) ? Ir : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rr : A)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function Wr(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function Gr(e, t) {
	var n = Dr(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function Kr(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var qr = 180 / Math.PI, Jr = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Yr(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * qr,
		skewX: Math.atan(c) * qr,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var Xr;
function Zr(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Jr : Yr(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Qr(e) {
	return e == null || (Xr ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Xr.setAttribute("transform", e), !(e = Xr.transform.baseVal.consolidate())) ? Jr : (e = e.matrix, Yr(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function $r(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: A(e, i)
			}, {
				i: c - 2,
				x: A(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: A(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: A(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: A(e, n)
			}, {
				i: s - 2,
				x: A(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var ei = $r(Zr, "px, ", "px)", "deg)"), ti = $r(Qr, ", ", ")", ")"), ni = 1e-12;
function ri(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ii(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function ai(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var oi = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < ni) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var ee = Math.sqrt(p), g = (u * u - s * s + r * p) / (2 * s * n * ee), te = (u * u - s * s - r * p) / (2 * u * n * ee), _ = Math.log(Math.sqrt(g * g + 1) - g);
			h = (Math.log(Math.sqrt(te * te + 1) - te) - _) / t, m = function(e) {
				var r = e * h, i = ri(_), c = s / (n * ee) * (i * ai(t * r + _) - ii(_));
				return [
					a + c * d,
					o + c * f,
					s * i / ri(t * r + _)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4);
//#endregion
//#region ../../node_modules/d3-interpolate/src/hsl.js
function si(e) {
	return function(t, n) {
		var r = e((t = Vn(t)).h, (n = Vn(n)).h), i = k(t.s, n.s), a = k(t.l, n.l), o = k(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var ci = si(Dr), li = si(k);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function ui(e, t) {
	var n = k((e = nr(e)).l, (t = nr(t)).l), r = k(e.a, t.a), i = k(e.b, t.b), a = k(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function di(e) {
	return function(t, n) {
		var r = e((t = cr(t)).h, (n = cr(n)).h), i = k(t.c, n.c), a = k(t.l, n.l), o = k(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var fi = di(Dr), pi = di(k);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function mi(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = yr(t)).h, (r = yr(r)).h), a = k(t.s, r.s), o = k(t.l, r.l), s = k(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var hi = mi(Dr), gi = mi(k);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function _i(e, t) {
	t === void 0 && (t = e, e = j);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function vi(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var yi = /* @__PURE__ */ be({
	interpolate: () => j,
	interpolateArray: () => Fr,
	interpolateBasis: () => Sr,
	interpolateBasisClosed: () => Cr,
	interpolateCubehelix: () => hi,
	interpolateCubehelixLong: () => gi,
	interpolateDate: () => Lr,
	interpolateDiscrete: () => Wr,
	interpolateHcl: () => fi,
	interpolateHclLong: () => pi,
	interpolateHsl: () => ci,
	interpolateHslLong: () => li,
	interpolateHue: () => Gr,
	interpolateLab: () => ui,
	interpolateNumber: () => A,
	interpolateNumberArray: () => Nr,
	interpolateObject: () => Rr,
	interpolateRgb: () => kr,
	interpolateRgbBasis: () => jr,
	interpolateRgbBasisClosed: () => Mr,
	interpolateRound: () => Kr,
	interpolateString: () => Ur,
	interpolateTransformCss: () => ei,
	interpolateTransformSvg: () => ti,
	interpolateZoom: () => oi,
	piecewise: () => _i,
	quantize: () => vi
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function bi(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function xi(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var Si = [0, 1];
function M(e) {
	return e;
}
function Ci(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : bi(isNaN(t) ? NaN : .5);
}
function wi(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Ti(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Ci(i, r), a = n(o, a)) : (r = Ci(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Ei(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Ci(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = v(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Di(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Oi() {
	var e = Si, t = Si, n = j, r, i, a, o = M, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== M && (o = wi(e[0], e[n - 1])), s = n > 2 ? Ei : Ti, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), A))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, xi), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Kr, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : M, u()) : o !== M;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function ki() {
	return Oi()(M, M);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function Ai(e, t, n, r) {
	var i = ge(e, t, n), a;
	switch (r = ee(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = l(i, o)) && (r.precision = a), oe(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = me(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = ae(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return ie(r);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function ji(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return pe(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Ai(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = le(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Mi() {
	var e = ki();
	return e.copy = function() {
		return Di(e, Mi());
	}, x.apply(e, arguments), ji(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Ni(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, xi), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Ni(e).unknown(t);
	}, e = arguments.length ? Array.from(e, xi) : [0, 1], ji(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function Pi(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Fi(e) {
	return Math.log(e);
}
function Ii(e) {
	return Math.exp(e);
}
function Li(e) {
	return -Math.log(-e);
}
function Ri(e) {
	return -Math.exp(-e);
}
function zi(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Bi(e) {
	return e === 10 ? zi : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Vi(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Hi(e) {
	return (t, n) => -e(-t, n);
}
function Ui(e) {
	let t = e(Fi, Ii), n = t.domain, r = 10, i, a;
	function o() {
		return i = Vi(r), a = Bi(r), n()[0] < 0 ? (i = Hi(i), a = Hi(a), e(Li, Ri)) : e(Fi, Ii), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = pe(o, s, p));
		} else m = pe(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = ee(n)).precision == null && (n.trim = !0), n = ie(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Pi(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Wi() {
	let e = Ui(Oi()).domain([1, 10]);
	return e.copy = () => Di(e, Wi()).base(e.base()), x.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function Gi(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function Ki(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function qi(e) {
	var t = 1, n = e(Gi(t), Ki(t));
	return n.constant = function(n) {
		return arguments.length ? e(Gi(t = +n), Ki(t)) : t;
	}, ji(n);
}
function Ji() {
	var e = qi(Oi());
	return e.copy = function() {
		return Di(e, Ji()).constant(e.constant());
	}, x.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function Yi(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function Xi(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Zi(e) {
	return e < 0 ? -e * e : e * e;
}
function Qi(e) {
	var t = e(M, M), n = 1;
	function r() {
		return n === 1 ? e(M, M) : n === .5 ? e(Xi, Zi) : e(Yi(n), Yi(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, ji(t);
}
function $i() {
	var e = Qi(Oi());
	return e.copy = function() {
		return Di(e, $i()).exponent(e.exponent());
	}, x.apply(e, arguments), e;
}
function ea() {
	return $i.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function ta() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Ue(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[v(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(xe), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return ta().domain(e).range(t).unknown(r);
	}, x.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function na() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[v(r, e, 0, n)] : a;
	}
	function s() {
		var i = -1;
		for (r = Array(n); ++i < n;) r[i] = ((i + 1) * t - (i - n) * e) / (n + 1);
		return o;
	}
	return o.domain = function(n) {
		return arguments.length ? ([e, t] = n, e = +e, t = +t, s()) : [e, t];
	}, o.range = function(e) {
		return arguments.length ? (n = (i = Array.from(e)).length - 1, s()) : i.slice();
	}, o.invertExtent = function(a) {
		var o = i.indexOf(a);
		return o < 0 ? [NaN, NaN] : o < 1 ? [e, r[0]] : o >= n ? [r[n - 1], t] : [r[o - 1], r[o]];
	}, o.unknown = function(e) {
		return arguments.length && (a = e), o;
	}, o.thresholds = function() {
		return r.slice();
	}, o.copy = function() {
		return na().domain([e, t]).range(i).unknown(a);
	}, x.apply(ji(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function ra() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[v(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return ra().domain(e).range(t).unknown(n);
	}, x.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function ia(e) {
	return new Date(e);
}
function aa(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function oa(e, t, n, r, i, a, o, s, c, l) {
	var u = ki(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), ee = l("%I %p"), g = l("%a %d"), te = l("%b %d"), _ = l("%B"), ne = l("%Y");
	function re(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? ee : r(e) < e ? i(e) < e ? g : te : n(e) < e ? _ : ne)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, aa)) : f().map(ia);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? re : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Pi(n, e)) : u;
	}, u.copy = function() {
		return Di(u, oa(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function sa() {
	return x.apply(oa(qe, Je, te, r, de, ue, h, c, g, fe).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function ca() {
	return x.apply(oa(Ge, Ke, i, m, t, p, a, d, g, ce).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function la() {
	var e = 0, t = 1, n, r, i, a, o = M, s = !1, c;
	function l(e) {
		return e == null || isNaN(e = +e) ? c : o(i === 0 ? .5 : (e = (a(e) - n) * i, s ? Math.max(0, Math.min(1, e)) : e));
	}
	l.domain = function(o) {
		return arguments.length ? ([e, t] = o, n = a(e = +e), r = a(t = +t), i = n === r ? 0 : 1 / (r - n), l) : [e, t];
	}, l.clamp = function(e) {
		return arguments.length ? (s = !!e, l) : s;
	}, l.interpolator = function(e) {
		return arguments.length ? (o = e, l) : o;
	};
	function u(e) {
		return function(t) {
			var n, r;
			return arguments.length ? ([n, r] = t, o = e(n, r), l) : [o(0), o(1)];
		};
	}
	return l.range = u(j), l.rangeRound = u(Kr), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function N(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ua() {
	var e = ji(la()(M));
	return e.copy = function() {
		return N(e, ua());
	}, S.apply(e, arguments);
}
function da() {
	var e = Ui(la()).domain([1, 10]);
	return e.copy = function() {
		return N(e, da()).base(e.base());
	}, S.apply(e, arguments);
}
function fa() {
	var e = qi(la());
	return e.copy = function() {
		return N(e, fa()).constant(e.constant());
	}, S.apply(e, arguments);
}
function pa() {
	var e = Qi(la());
	return e.copy = function() {
		return N(e, pa()).exponent(e.exponent());
	}, S.apply(e, arguments);
}
function ma() {
	return pa.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function ha() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = M, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = _i(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(j), p.rangeRound = m(Kr), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function ga() {
	var e = ji(ha()(M));
	return e.copy = function() {
		return N(e, ga());
	}, S.apply(e, arguments);
}
function _a() {
	var e = Ui(ha()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return N(e, _a()).base(e.base());
	}, S.apply(e, arguments);
}
function va() {
	var e = qi(ha());
	return e.copy = function() {
		return N(e, va()).constant(e.constant());
	}, S.apply(e, arguments);
}
function ya() {
	var e = Qi(ha());
	return e.copy = function() {
		return N(e, ya()).exponent(e.exponent());
	}, S.apply(e, arguments);
}
function ba() {
	return ya.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function P(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var xa = P("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Sa = P("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Ca = P("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), wa = P("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Ta = P("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Ea = P("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Da = P("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Oa = P("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), ka = P("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Aa = P("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function ja(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Ma = "identity", Na = "linear", Pa = "sqrt", Fa = "symlog", Ia = "time", La = "sequential", Ra = "diverging", za = "quantile", Ba = "quantize", Va = "threshold", Ha = "ordinal", Ua = "point", Wa = "band", Ga = "bin-ordinal", F = "continuous", Ka = "discrete", qa = "discretizing", I = "interpolating", Ja = "temporal";
function Ya(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function Xa(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function Za() {
	let t = ln().unknown(void 0), n = t.domain, r = t.range, i = [0, 1], a, o, s = !1, c = 0, l = 0, u = .5;
	delete t.unknown;
	function d() {
		let t = n().length, d = i[1] < i[0], f = i[1 - d], p = ja(t, c, l), m = i[d - 0];
		a = (f - m) / (p || 1), s && (a = Math.floor(a)), m += (f - m - a * (t - c)) * u, o = a * (1 - c), s && (m = Math.round(m), o = Math.round(o));
		let h = e(t).map((e) => m + a * e);
		return r(d ? h.reverse() : h);
	}
	return t.domain = function(e) {
		return arguments.length ? (n(e), d()) : n();
	}, t.range = function(e) {
		return arguments.length ? (i = [+e[0], +e[1]], d()) : i.slice();
	}, t.rangeRound = function(e) {
		return i = [+e[0], +e[1]], s = !0, d();
	}, t.bandwidth = function() {
		return o;
	}, t.step = function() {
		return a;
	}, t.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, t.padding = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), c = l, d()) : c;
	}, t.paddingInner = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), d()) : c;
	}, t.paddingOuter = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), d()) : l;
	}, t.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, t.invertRange = function(e) {
		if (e[0] == null || e[1] == null) return;
		let t = i[1] < i[0], a = t ? r().reverse() : r(), s = a.length - 1, c = +e[0], l = +e[1], u, d, f;
		if (c === c && l === l && (l < c && (f = c, c = l, l = f), !(l < a[0] || c > i[1 - t]))) return u = Math.max(0, v(a, c) - 1), d = c === l ? u : v(a, l) - 1, c - a[u] > o + 1e-10 && ++u, t && (f = u, u = s - d, d = s - f), u > d ? void 0 : n().slice(u, d + 1);
	}, t.invert = function(e) {
		let n = t.invertRange([e, e]);
		return n && n[0];
	}, t.copy = function() {
		return Za().domain(n()).range(i).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, d();
}
function Qa(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return Qa(t());
	}, e;
}
function $a() {
	return Qa(Za().paddingInner(1));
}
var eo = Array.prototype.map;
function to(e) {
	return eo.call(e, an);
}
var no = Array.prototype.slice;
function ro() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(v(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = to(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = no.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return Ai(e[0], rn(e), t ?? 10, n);
	}, n.copy = function() {
		return ro().domain(n.domain()).range(n.range());
	}, n;
}
var io = /* @__PURE__ */ new Map(), ao = Symbol("vega_scale");
function oo(e) {
	return e[ao] = !0, e;
}
function so(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? Ya(n) : n.invertExtent ? Xa(n) : void 0, n.type = e, oo(n);
	};
	return r.metadata = sn(on(n)), r;
}
function L(e, t, n) {
	return arguments.length > 1 ? (io.set(e, so(e, t, n)), this) : co(e) ? io.get(e) : void 0;
}
L(Ma, Ni), L(Na, Mi, F), L("log", Wi, [F, "log"]), L("pow", $i, F), L(Pa, ea, F), L(Fa, Ji, F), L(Ia, sa, [F, Ja]), L("utc", ca, [F, Ja]), L(La, ua, [F, I]), L(`${La}-${Na}`, ua, [F, I]), L(`${La}-log`, da, [
	F,
	I,
	"log"
]), L(`${La}-pow`, pa, [F, I]), L(`${La}-${Pa}`, ma, [F, I]), L(`${La}-${Fa}`, fa, [F, I]), L(`${Ra}-${Na}`, ga, [F, I]), L(`${Ra}-log`, _a, [
	F,
	I,
	"log"
]), L(`${Ra}-pow`, ya, [F, I]), L(`${Ra}-${Pa}`, ba, [F, I]), L(`${Ra}-${Fa}`, va, [F, I]), L(za, ta, [qa, za]), L(Ba, na, qa), L(Va, ra, qa), L(Ga, ro, [Ka, qa]), L(Ha, ln, Ka), L(Wa, Za, Ka), L(Ua, $a, Ka);
function co(e) {
	return io.has(e);
}
function lo(e, t) {
	let n = io.get(e);
	return n && n.metadata[t];
}
function uo(e) {
	return lo(e, F);
}
function fo(e) {
	return lo(e, Ka);
}
function po(e) {
	return lo(e, qa);
}
function mo(e) {
	return lo(e, "log");
}
function ho(e) {
	return lo(e, I);
}
function go(e, t) {
	let n = t[0], r = rn(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function _o(e, t, n) {
	return _i(yo(t || "rgb", n), e);
}
function vo(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function yo(e, t) {
	let n = yi[bo(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function bo(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var xo = {
	blues: "cfe1f2bed8eca8cee58fc1de74b2d75ba3cf4592c63181bd206fb2125ca40a4a90",
	greens: "d3eecdc0e6baabdda594d3917bc77d60ba6c46ab5e329a512089430e7735036429",
	greys: "e2e2e2d4d4d4c4c4c4b1b1b19d9d9d8888887575756262624d4d4d3535351e1e1e",
	oranges: "fdd8b3fdc998fdb87bfda55efc9244f87f2cf06b18e4580bd14904b93d029f3303",
	purples: "e2e1efd4d4e8c4c5e0b4b3d6a3a0cc928ec3827cb97566ae684ea25c3696501f8c",
	reds: "fdc9b4fcb49afc9e80fc8767fa7051f6573fec3f2fdc2a25c81b1db21218970b13",
	blueGreen: "d5efedc1e8e0a7ddd18bd2be70c6a958ba9144ad77319c5d2089460e7736036429",
	bluePurple: "ccddecbad0e4a8c2dd9ab0d4919cc98d85be8b6db28a55a6873c99822287730f71",
	greenBlue: "d3eecec5e8c3b1e1bb9bd8bb82cec269c2ca51b2cd3c9fc7288abd1675b10b60a1",
	orangeRed: "fddcaffdcf9bfdc18afdad77fb9562f67d53ee6545e24932d32d1ebf130da70403",
	purpleBlue: "dbdaebc8cee4b1c3de97b7d87bacd15b9fc93a90c01e7fb70b70ab056199045281",
	purpleBlueGreen: "dbd8eac8cee4b0c3de93b7d872acd1549fc83892bb1c88a3097f8702736b016353",
	purpleRed: "dcc9e2d3b3d7ce9eccd186c0da6bb2e14da0e23189d91e6fc61159ab07498f023a",
	redPurple: "fccfccfcbec0faa9b8f98faff571a5ec539ddb3695c41b8aa908808d0179700174",
	yellowGreen: "e4f4acd1eca0b9e2949ed68880c97c62bb6e47aa5e3297502083440e723b036034",
	yellowOrangeBrown: "feeaa1fedd84fecc63feb746fca031f68921eb7215db5e0bc54c05ab3d038f3204",
	yellowOrangeRed: "fee087fed16ffebd59fea849fd903efc7335f9522bee3423de1b20ca0b22af0225",
	blueOrange: "134b852f78b35da2cb9dcae1d2e5eff2f0ebfce0bafbbf74e8932fc5690d994a07",
	brownBlueGreen: "704108a0651ac79548e3c78af3e6c6eef1eac9e9e48ed1c74da79e187a72025147",
	purpleGreen: "5b1667834792a67fb6c9aed3e6d6e8eff0efd9efd5aedda971bb75368e490e5e29",
	purpleOrange: "4114696647968f83b7b9b4d6dadbebf3eeeafce0bafbbf74e8932fc5690d994a07",
	redBlue: "8c0d25bf363adf745ef4ae91fbdbc9f2efeed2e5ef9dcae15da2cb2f78b3134b85",
	redGrey: "8c0d25bf363adf745ef4ae91fcdccbfaf4f1e2e2e2c0c0c0969696646464343434",
	yellowGreenBlue: "eff9bddbf1b4bde5b594d5b969c5be45b4c22c9ec02182b82163aa23479c1c3185",
	redYellowBlue: "a50026d4322cf16e43fcac64fedd90faf8c1dcf1ecabd6e875abd04a74b4313695",
	redYellowGreen: "a50026d4322cf16e43fcac63fedd8df9f7aed7ee8ea4d86e64bc6122964f006837",
	pinkYellowGreen: "8e0152c0267edd72adf0b3d6faddedf5f3efe1f2cab6de8780bb474f9125276419",
	spectral: "9e0142d13c4bf0704afcac63fedd8dfbf8b0e0f3a1a9dda269bda94288b55e4fa2",
	viridis: "440154470e61481a6c482575472f7d443a834144873d4e8a39568c35608d31688e2d708e2a788e27818e23888e21918d1f988b1fa08822a8842ab07f35b77943bf7154c56866cc5d7ad1518fd744a5db36bcdf27d2e21be9e51afde725",
	magma: "0000040404130b0924150e3720114b2c11603b0f704a107957157e651a80721f817f24828c29819a2e80a8327db6377ac43c75d1426fde4968e95462f1605df76f5cfa7f5efc8f65fe9f6dfeaf78febf84fece91fddea0fcedaffcfdbf",
	inferno: "0000040403130c0826170c3b240c4f330a5f420a68500d6c5d126e6b176e781c6d86216b932667a12b62ae305cbb3755c73e4cd24644dd513ae65c30ed6925f3771af8850ffb9506fca50afcb519fac62df6d645f2e661f3f484fcffa4",
	plasma: "0d088723069033059742039d5002a25d01a66a00a87801a88405a7900da49c179ea72198b12a90ba3488c33d80cb4779d35171da5a69e16462e76e5bed7953f2834cf68f44fa9a3dfca636fdb32ffec029fcce25f9dc24f5ea27f0f921",
	cividis: "00205100235800265d002961012b65042e670831690d346b11366c16396d1c3c6e213f6e26426e2c456e31476e374a6e3c4d6e42506e47536d4c566d51586e555b6e5a5e6e5e616e62646f66676f6a6a706e6d717270717573727976737c79747f7c75827f758682768985778c8877908b78938e789691789a94789e9778a19b78a59e77a9a177aea575b2a874b6ab73bbaf71c0b26fc5b66dc9b96acebd68d3c065d8c462ddc85fe2cb5ce7cf58ebd355f0d652f3da4ff7de4cfae249fce647",
	rainbow: "6e40aa883eb1a43db3bf3cafd83fa4ee4395fe4b83ff576eff6659ff7847ff8c38f3a130e2b72fcfcc36bee044aff05b8ff4576ff65b52f6673af27828ea8d1ddfa319d0b81cbecb23abd82f96e03d82e14c6edb5a5dd0664dbf6e40aa",
	sinebow: "ff4040fc582af47218e78d0bd5a703bfbf00a7d5038de70b72f41858fc2a40ff402afc5818f4720be78d03d5a700bfbf03a7d50b8de71872f42a58fc4040ff582afc7218f48d0be7a703d5bf00bfd503a7e70b8df41872fc2a58ff4040",
	turbo: "23171b32204a3e2a71453493493eae4b49c54a53d7485ee44569ee4074f53c7ff8378af93295f72e9ff42ba9ef28b3e926bce125c5d925cdcf27d5c629dcbc2de3b232e9a738ee9d3ff39347f68950f9805afc7765fd6e70fe667cfd5e88fc5795fb51a1f84badf545b9f140c5ec3cd0e637dae034e4d931ecd12ef4c92bfac029ffb626ffad24ffa223ff9821ff8d1fff821dff771cfd6c1af76118f05616e84b14df4111d5380fcb2f0dc0260ab61f07ac1805a313029b0f00950c00910b00",
	browns: "eedbbdecca96e9b97ae4a865dc9856d18954c7784cc0673fb85536ad44339f3632",
	tealBlues: "bce4d89dd3d181c3cb65b3c245a2b9368fae347da0306a932c5985",
	teals: "bbdfdfa2d4d58ac9c975bcbb61b0af4da5a43799982b8b8c1e7f7f127273006667",
	warmGreys: "dcd4d0cec5c1c0b8b4b3aaa7a59c9998908c8b827f7e7673726866665c5a59504e",
	goldGreen: "f4d166d5ca60b6c35c98bb597cb25760a6564b9c533f8f4f33834a257740146c36",
	goldOrange: "f4d166f8be5cf8aa4cf5983bf3852aef701be2621fd65322c54923b142239e3a26",
	goldRed: "f4d166f6be59f9aa51fc964ef6834bee734ae56249db5247cf4244c43141b71d3e",
	lightGreyRed: "efe9e6e1dad7d5cbc8c8bdb9bbaea9cd967ddc7b43e15f19df4011dc000b",
	lightGreyTeal: "e4eaead6dcddc8ced2b7c2c7a6b4bc64b0bf22a6c32295c11f85be1876bc",
	lightMulti: "e0f1f2c4e9d0b0de9fd0e181f6e072f6c053f3993ef77440ef4a3c",
	lightOrange: "f2e7daf7d5baf9c499fab184fa9c73f68967ef7860e8645bde515bd43d5b",
	lightTealBlue: "e3e9e0c0dccf9aceca7abfc859afc0389fb9328dad2f7ca0276b95255988",
	darkBlue: "3232322d46681a5c930074af008cbf05a7ce25c0dd38daed50f3faffffff",
	darkGold: "3c3c3c584b37725e348c7631ae8b2bcfa424ecc31ef9de30fff184ffffff",
	darkGreen: "3a3a3a215748006f4d048942489e4276b340a6c63dd2d836ffeb2cffffaa",
	darkMulti: "3737371f5287197d8c29a86995ce3fffe800ffffff",
	darkRed: "3434347036339e3c38cc4037e75d1eec8620eeab29f0ce32ffeb2c"
}, So = {
	accent: Sa,
	category10: xa,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: Ca,
	observable10: wa,
	paired: Ta,
	pastel1: Ea,
	pastel2: Da,
	set1: Oa,
	set2: ka,
	set3: Aa,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Co(e) {
	if (nn(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function wo(e, t) {
	for (let n in e) Eo(n, t(e[n]));
}
var To = {};
wo(So, Co), wo(xo, (e) => _o(Co(e)));
function Eo(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (To[e] = t, this) : To[e];
}
//#endregion
//#region ../core/src/selection/categorySelection.js
function Do(e) {
	return typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e);
}
function Oo(e, t = [], n = !0) {
	let r = new Set(t);
	if (!Array.from(r).every(Do)) throw Error("Category selections require finite scalar values.");
	if (!n && r.size > 1) throw Error("Single category selections accept at most one distinct value.");
	return {
		type: "categories",
		component: e,
		values: r
	};
}
function ko(e, t) {
	if (!Array.isArray(t) || t.some((e) => !Array.isArray(e) || e.length !== 1)) throw Error("Category tuples must contain exactly one finite scalar value.");
	return Oo(e.encodings[0], t.map((e) => e[0]), !!e.toggle);
}
function Ao(e, t, n) {
	if (!Do(t)) return n ? void 0 : Oo(e.component);
	let r = n ? new Set(e.values) : /* @__PURE__ */ new Set();
	return n && r.has(t) ? r.delete(t) : r.add(t), {
		...e,
		values: r
	};
}
function jo(e, t, n) {
	return e.values.size === 0 ? n : Do(t) && e.values.has(t);
}
function Mo(e, t, n) {
	let r = Object.entries(e), [i, a] = r.find(([e]) => e === t) ?? r.find(([, e]) => e?.resolutionChannel === t) ?? [];
	if (!a || !("field" in a) || "condition" in a) throw Error(`Category selection input "${t}" must be an unconditional field encoding.`);
	let o = n(a.resolutionChannel ?? t);
	if (!["nominal", "ordinal"].includes(a.type) || !o || !fo(o.type)) throw Error(`Category selection input "${t}" requires a nominal or ordinal field with a discrete scale.`);
	return {
		input: i,
		field: a.field
	};
}
//#endregion
//#region ../core/src/selection/selectionPredicateTree.js
function No(e, t) {
	if (!("test" in e) || !("ref" in e.test)) return e;
	let n = e.test.ref;
	if (!Object.hasOwn(t, n)) throw Error(`Unknown predicate "${n}" in unit view.`);
	return {
		...e,
		test: t[n]
	};
}
function Po(e) {
	let t = "test" in e ? e.test : {
		param: e.param,
		...e.empty === void 0 ? {} : { empty: e.empty },
		...e.project === void 0 ? {} : { project: e.project }
	}, n = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Selection predicate must be an object.");
		let t = e, r = [
			"param",
			"and",
			"or",
			"not"
		].filter((e) => e in t);
		if (r.length !== 1) throw Error("Selection predicate must have exactly one operator.");
		let i = r[0];
		if (i === "param") {
			if (typeof t.param == "string") {
				if (Object.keys(t).some((e) => ![
					"param",
					"empty",
					"project"
				].includes(e)) || typeof (t.empty ?? !0) != "boolean") throw Error("Invalid selection parameter predicate.");
				return {
					param: Ju(t.param),
					empty: t.empty ?? !0,
					...t.project ? { project: { ...t.project } } : {}
				};
			}
			if (!t.param || typeof t.param != "object" || Object.keys(t.param).length !== 1 || !Array.isArray(t.param.or) || Object.keys(t).some((e) => !["param", "empty"].includes(e)) || typeof (t.empty ?? !0) != "boolean") throw Error("Invalid flat selection union.");
			if (t.param.or.length === 0) throw Error("Selection test \"or\" must be a nonempty array.");
			let e = Array.from(new Set(t.param.or.map(Ju))), n = e.map((e) => ({ selectionActive: e })), r = e.map((e, t) => ({ all: [{
				param: e,
				empty: !0
			}, n[t]] }));
			return { any: t.empty === !1 ? r : [...r, { not: { any: n } }] };
		}
		if (Object.keys(t).length !== 1) throw Error("Selection predicate operators cannot be mixed.");
		if (i === "not") return { not: n(t.not) };
		let a = t[i];
		if (!Array.isArray(a) || a.length === 0) throw Error(`Selection test "${i}" must be a nonempty array.`);
		let o = a.map(n);
		return i === "and" ? { all: o } : { any: o };
	};
	return n(t);
}
function Fo(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if ("param" in e) t.add(e.param);
		else if ("selectionActive" in e) t.add(typeof e.selectionActive == "string" ? e.selectionActive : e.selectionActive.param);
		else if ("not" in e) n(e.not);
		else for (let t of "all" in e ? e.all : e.any) n(t);
	};
	return n(e), Array.from(t);
}
function Io(e) {
	let t = /* @__PURE__ */ new Map(), n = (e) => {
		if ("param" in e) {
			if (e.type !== "categories" && !(e.type === "interval" && e.projections.some((e) => Ru(e.component)))) {
				let n = {
					...e,
					empty: !1
				};
				t.set(JSON.stringify(n), n);
			}
		} else if ("not" in e) n(e.not);
		else if ("all" in e || "any" in e) for (let t of "all" in e ? e.all : e.any) n(t);
	};
	for (let t of e) n(t);
	return Array.from(t.values());
}
function Lo(e) {
	if ("param" in e) return e.empty;
	if ("selectionActive" in e) return !1;
	if ("not" in e) return !Lo(e.not);
	let t = "all" in e ? e.all : e.any;
	return "all" in e ? t.every(Lo) : t.some(Lo);
}
function Ro(e, t, n, r, i, a) {
	let o = (e) => {
		let t = n.findSelectionCapability?.(e);
		if (t) return t;
		let r = n.findValue(e);
		if (!r || ![
			"single",
			"multi",
			"interval",
			"categories"
		].includes(r.type)) throw Error(`Selection parameter "${e}" was not found.`);
		return {
			type: r.type,
			components: r.type === "categories" ? [{ component: r.component }] : r.type === "interval" ? Object.keys(r.intervals).map((e) => ({ component: e })) : []
		};
	}, s = t, c = (e) => {
		let t = s[e];
		if (t && "field" in t) return t.field;
		if (t && "condition" in t) return (Array.isArray(t.condition) ? t.condition : [t.condition]).find((e) => "field" in e)?.field;
	}, l = (e) => {
		if ("all" in e) return { all: e.all.map(l) };
		if ("any" in e) return { any: e.any.map(l) };
		if ("not" in e) return { not: l(e.not) };
		let n = "param" in e ? e.param : e.selectionActive, u = o(n);
		if ("selectionActive" in e) return { selectionActive: {
			param: n,
			type: u.type,
			components: u.components.map(({ component: e }) => e)
		} };
		if (u.type === "categories") {
			let r = u.components[0].component;
			if (e.project && (Object.keys(e.project).length !== 1 || !(r in e.project))) throw Error(`Selection "${n}" project must cover its declared component: ${r}.`);
			let i = Mo(t, e.project ? e.project[r] : r, a);
			return {
				param: n,
				type: "categories",
				empty: e.empty,
				projections: [{
					component: r,
					input: i.input,
					field: i.field
				}]
			};
		}
		if (e.project && u.type !== "interval") throw Error(`Selection "${n}" is not an interval selection; project is invalid.`);
		if (u.type !== "interval") return {
			param: n,
			type: u.type,
			empty: e.empty
		};
		let d = u.components.map(({ component: e }) => e);
		if (e.project && (Object.keys(e.project).length !== d.length || d.some((t) => !(t in e.project)))) throw Error(`Selection "${n}" project must cover its declared components: ${d.join(", ")}.`);
		let f = u.components.map(({ component: t, type: a }) => {
			if (Ru(t)) {
				let r = e.project?.[t] ?? t, i = (r === "color" ? [
					"color",
					"fill",
					"stroke"
				] : [r]).find((e) => s[e] && "field" in s[e] && !("condition" in s[e])), a = s[i];
				if (!i || !Ru(r) || a.type !== "quantitative") throw Error(`Selection "${n}" requires an unconditional quantitative input for "${r}".`);
				return {
					component: t,
					input: i,
					field: a.field
				};
			}
			let o = e.project?.[t] ?? t;
			if (![t, t + "2"].includes(o)) throw Error(`Selection "${n}" has unsupported component "${t}".`);
			let l = s[o];
			if (e.project && (!l || !("field" in l))) throw Error(`Selection "${n}" project target "${o}" must be an unconditional field encoding.`);
			let u = c(o);
			if (!u) throw Error(`Selection "${n}" has no field for "${o}".`);
			if (e.project) {
				let e = i?.(o) ?? ("type" in l ? l.type : void 0) ?? ("type" in s[t] ? s[t].type : void 0);
				if (![
					"quantitative",
					"index",
					"locus"
				].includes(a) || e !== a) throw Error(`Selection "${n}" project target "${o}" must have matching quantitative, index, or locus type (${a} vs ${e}).`);
			}
			let d = t + "2", f = e.project ? void 0 : c(d);
			return {
				component: t,
				input: o,
				field: u,
				...f && f !== u ? {
					secondaryInput: d,
					secondaryField: f,
					hitTest: r
				} : {}
			};
		});
		return {
			param: n,
			type: "interval",
			empty: e.empty,
			projections: f
		};
	};
	return l(e);
}
function zo(e, t) {
	if ("all" in e || "any" in e) {
		let n = ("all" in e ? e.all : e.any).map((e) => zo(e, t));
		return "all" in e ? (e) => n.every((t) => t(e)) : (e) => n.some((t) => t(e));
	}
	if ("not" in e) {
		let n = zo(e.not, t);
		return (e) => !n(e);
	}
	if ("selectionActive" in e) {
		let { param: n } = e.selectionActive;
		return () => Bo(t(n));
	}
	let { param: n, type: r, empty: i } = e;
	if (r === "categories") {
		let r = Wt(e.projections[0].field);
		return (e) => jo(t(n), r(e), i);
	}
	if (r === "single") return (e) => {
		let r = t(n);
		return r.uniqueId == null ? i : r.uniqueId === e[b];
	};
	if (r === "multi") return (e) => {
		let r = t(n);
		return r.data.size === 0 ? i : r.data.has(e[b]);
	};
	let a = e.projections.map((e) => ({
		...e,
		read: Wt(e.field),
		readSecondary: e.secondaryField ? Wt(e.secondaryField) : void 0
	}));
	return (e) => {
		let r = t(n);
		if (!Bo(r)) return i;
		for (let t of a) {
			let n = r.intervals[t.component], i = t.read(e), a = t.readSecondary?.(e);
			if (Ru(t.component) && !Number.isFinite(i)) return !1;
			let [o, s] = n;
			if (o === s || !(a === void 0 ? o <= i && i < s : t.hitTest === "endpoints" ? o <= i && i < s || o <= a && a < s : t.hitTest === "encloses" ? o <= Math.min(i, a) && Math.max(i, a) <= s : o < Math.max(i, a) && Math.min(i, a) < s)) return !1;
		}
		return !0;
	};
}
function Bo(e) {
	return e.type === "interval" ? Object.values(e.intervals).every((e) => !!e) : Fu(e);
}
//#endregion
//#region ../core/src/encoder/accessor.js
function Vo(e, t, n, r) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function i(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = Wo(t), r.scaleChannel = ((os(t) && t.resolutionChannel) ?? (As(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = Go({
			scaleChannel: r.scaleChannel,
			source: Uo(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function a(e) {
		if (Hu(e)) {
			let t = i(n.createExpression(e));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		}
		{
			let t = e;
			return i(() => t);
		}
	}
	if (is(t)) try {
		let e = Wt(t.field, void 0, n?.getSpecLocation?.(t, ["field"]));
		return ("type" in t ? t.type : r) === "quantitative" ? i(Object.assign((t) => {
			let n = e(t);
			return Number.isFinite(n) ? n : NaN;
		}, { fields: e.fields })) : i(e);
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	if (ds(t)) return i(n.createExpression(t));
	if (as(t)) return a(t.datum);
	if (rs(t)) return a(t.value);
	throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function Ho(e) {
	return e.scaleChannel !== void 0;
}
function Uo(e) {
	if (is(e)) return {
		kind: "field",
		value: e.field
	};
	if (ds(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (as(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (rs(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function Wo(e) {
	let t = Uo(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + Jo(t.value) : t.kind + "|" + qo(t);
}
function Go({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + qo(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function Ko(e, t) {
	let { domainKey: n, domainKeyBase: r } = Go({
		scaleChannel: e.scaleChannel,
		source: Uo(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function qo(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return Jo(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function Jo(e) {
	return Hu(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region ../core/src/encoder/encoder.js
function Yo(e, t, n, r = "intersects", i, a) {
	let o, s, c = Fo(e), l = () => (o ??= Ro(e, t, n, r, i, a), o);
	return c.every((e) => n.findValue(e)) && l(), Object.defineProperty((e) => !c.some((e) => !n.findValue(e)) && (s ??= zo(l(), (e) => n.findValue(e)), s(e)), "selection", { get: l });
}
function Xo(e, t, n, r, i = "intersects", a, o) {
	let s = fs(t) || ps(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], c = [...s, t], l = c.map((t, l) => {
		let u = s[l], d = Vo(e, t, r, ys(e) ? a?.(e) : void 0);
		if (Os(e) && rs(t)) {
			let e = t.value;
			if (e !== null && !Hu(e) && (typeof e != "string" || !On(e))) throw Vt(/* @__PURE__ */ Error("Invalid color: " + JSON.stringify(e)), r.getSpecLocation?.(t, ["value"]));
		}
		let f = u ? xu(u) : void 0;
		return {
			accessor: d,
			predicate: f ? Yo(f, n, r, i, a, o) : $u(l === c.length - 1)
		};
	});
	if (l.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return l;
}
function Zo(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale(), i = (t, n) => {
		let r = e.getScaleResolution(t);
		e.paramRuntime.operation("encoder scale", [r.getMappingRef()], () => r.getScale(), n);
	};
	for (let [a, o] of Object.entries(t)) {
		if (!o) continue;
		let s = a;
		Qo(s) || (n[s] = ts(Xo(s, o, t, e.paramRuntime, e.mark.defaultHitTestMode, (t) => e.getScaleResolution(t)?.type, r), r, i));
	}
	return n;
}
function Qo(e) {
	return e === "key" || e === "search" || e === "tooltip" || e === "order";
}
function $o(e) {
	return e.branches.map((e) => e.accessor);
}
function es(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function ts(e, t, n) {
	if (e.length === 1) {
		let r = ns(e[0].accessor, t, n);
		return Object.assign(r, { branches: e });
	}
	let r = e.map((e) => e.predicate), i = e.map((e) => ns(e.accessor, t, n)), a = Object.assign((e) => {
		for (let t = 0; t < i.length; t++) if (r[t](e)) return i[t](e);
	}, {
		constant: !1,
		branches: e,
		channelDef: e.at(-1).accessor.channelDef
	});
	return Object.defineProperty(a, "scale", {
		enumerable: !0,
		get: () => i.find((e) => e.scale)?.scale
	});
}
function ns(e, t, n) {
	let { channel: r, scaleChannel: i, channelDef: a } = e, o = e.scaleChannel ? t(i) : void 0;
	if (i && !o) throw Error(`Missing scale! "${r}": ${JSON.stringify(a)}`);
	let s = Object.assign(o ? (t) => o(e(t)) : (t) => e(t), {
		scale: o,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: $u(!0)
		}],
		channelDef: a
	});
	return o && n?.(i, (e) => {
		o = e, s.scale = e;
	}), s;
}
function rs(e) {
	return e && "value" in e;
}
function is(e) {
	return e && "field" in e;
}
function as(e) {
	return e && "datum" in e;
}
function os(e) {
	return is(e) || as(e) || ds(e) || us(e);
}
function ss(e) {
	if (ps(e)) {
		let t = e.condition;
		return (Array.isArray(t) ? t : [t]).find((e) => os(e));
	}
	if (os(e)) return e;
}
function cs(e) {
	let t = e && ss(e);
	return t != null && t.type != "quantitative" && t.scale !== null;
}
function ls(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = ss(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function us(e) {
	return e && "chrom" in e;
}
function ds(e) {
	return e && "expr" in e;
}
function fs(e) {
	return (is(e) || as(e)) && "condition" in e;
}
function ps(e) {
	return rs(e) && "condition" in e;
}
var ms = ["x", "y"], hs = ["x2", "y2"], gs = ["xOffset", "yOffset"], _s = [...ms, ...hs];
function vs(e) {
	return ms.includes(e);
}
function ys(e) {
	return _s.includes(e);
}
function bs(e) {
	return gs.includes(e);
}
function xs(e) {
	return Ds(e) == "x" ? "xOffset" : "yOffset";
}
function Ss(e, t, n) {
	return t ?? (n ? 0 : e);
}
var Cs = {
	x: "x2",
	y: "y2"
}, ws = Object.fromEntries([
	...Object.entries(Cs),
	["xOffset", "x2Offset"],
	["yOffset", "y2Offset"]
].map((e) => [e[1], e[0]]));
function Ts(e) {
	return e in ws;
}
function Es(e) {
	let t = Cs[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function Ds(e) {
	return ws[e] ?? e;
}
function Os(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(Ds(e));
}
function ks(e) {
	return ["shape", "direction"].includes(e);
}
function As(e) {
	return [
		"x",
		"y",
		"x2",
		"y2",
		"xOffset",
		"yOffset",
		"x2Offset",
		"y2Offset",
		"color",
		"fill",
		"stroke",
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"strokeWidth",
		"size",
		"shape",
		"direction",
		"angle",
		"dx",
		"dy",
		"sample"
	].includes(e);
}
function js(e) {
	switch (e) {
		case "shape": return [
			"circle",
			"square",
			"cross",
			"diamond",
			"triangle-up",
			"triangle-right",
			"triangle-down",
			"triangle-left",
			"tick-up",
			"tick-right",
			"tick-down",
			"tick-left",
			"x",
			"+"
		];
		case "direction": return [
			"forward",
			"reverse",
			"both"
		];
	}
}
function Ms(e) {
	if (!ks(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(js(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/accessor.js
function Ns(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/getter.js
function Ps(e) {
	return e.length === 1 ? Fs(e[0]) : Is(e);
}
var Fs = (e) => function(t) {
	return t[e];
}, Is = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/error.js
function R(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/splitAccessPath.js
function Ls(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || R("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && R("Access path missing closing bracket: " + e), r && R("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/field.js
function Rs(e, t, n) {
	let r = Ls(e), i = r.length === 1 ? r[0] : e;
	return Ns((n && n.get || Ps)(r), [i], t || i);
}
Rs("id"), Ns((e) => e, [], "identity"), Ns(() => 0, [], "zero"), Ns(() => 1, [], "one"), Ns(() => !0, [], "true"), Ns(() => !1, [], "false");
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/interpreter.js
var zs = /* @__PURE__ */ new Set([
	...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"),
	"__proto__",
	"then"
]);
Array.isArray;
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/isFunction.js
function Bs(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/hasOwnProperty.js
function Vs(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/isString.js
function Hs(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-expression/node_modules/vega-util/build/toSet.js
function Us(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r] + ""] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/vega-expression/build/vega-expression.js
var Ws = "RawCode", Gs = "Literal", Ks = "Property", qs = "Identifier", Js = "ArrayExpression", Ys = "BinaryExpression", Xs = "CallExpression", Zs = "ConditionalExpression", Qs = "LogicalExpression", $s = "MemberExpression", ec = "ObjectExpression", tc = "UnaryExpression";
function z(e) {
	this.type = e;
}
z.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = nc(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function nc(e) {
	switch (e.type) {
		case Js: return e.elements;
		case Ys:
		case Qs: return [e.left, e.right];
		case Xs: return [e.callee].concat(e.arguments);
		case Zs: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case $s: return [e.object, e.property];
		case ec: return e.properties;
		case Ks: return [e.key, e.value];
		case tc: return [e.argument];
		case qs:
		case Gs:
		case Ws:
		default: return [];
	}
}
var B, V, H, U, W, rc = 1, ic = 2, ac = 3, G = 4, oc = 5, sc = 6, K = 7, cc = 8, lc = 9;
B = {}, B[rc] = "Boolean", B[ic] = "<end>", B[ac] = "Identifier", B[G] = "Keyword", B[oc] = "Null", B[sc] = "Numeric", B[K] = "Punctuator", B[cc] = "String", B[lc] = "RegularExpression";
var uc = "ArrayExpression", dc = "BinaryExpression", fc = "CallExpression", pc = "ConditionalExpression", mc = "Identifier", hc = "Literal", gc = "LogicalExpression", _c = "MemberExpression", vc = "ObjectExpression", yc = "Property", bc = "UnaryExpression", q = "Unexpected token %0", xc = "Unexpected number", Sc = "Unexpected string", Cc = "Unexpected identifier", wc = "Unexpected reserved word", Tc = "Unexpected end of input", Ec = "Invalid regular expression", Dc = "Invalid regular expression: missing /", Oc = "Octal literals are not allowed in strict mode.", kc = "Duplicate data property in object literal not allowed in strict mode", J = "ILLEGAL", Ac = "Disabled.", jc = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), Mc = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function Nc(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function Y(e) {
	return e >= 48 && e <= 57;
}
function Pc(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function Fc(e) {
	return "01234567".includes(e);
}
function Ic(e) {
	return e === 32 || e === 9 || e === 11 || e === 12 || e === 160 || e >= 5760 && [
		5760,
		6158,
		8192,
		8193,
		8194,
		8195,
		8196,
		8197,
		8198,
		8199,
		8200,
		8201,
		8202,
		8239,
		8287,
		12288,
		65279
	].includes(e);
}
function Lc(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function Rc(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && jc.test(String.fromCharCode(e));
}
function zc(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && Mc.test(String.fromCharCode(e));
}
var Bc = {
	if: 1,
	in: 1,
	do: 1,
	var: 1,
	for: 1,
	new: 1,
	try: 1,
	let: 1,
	this: 1,
	else: 1,
	case: 1,
	void: 1,
	with: 1,
	enum: 1,
	while: 1,
	break: 1,
	catch: 1,
	throw: 1,
	const: 1,
	yield: 1,
	class: 1,
	super: 1,
	return: 1,
	typeof: 1,
	delete: 1,
	switch: 1,
	export: 1,
	import: 1,
	public: 1,
	static: 1,
	default: 1,
	finally: 1,
	extends: 1,
	package: 1,
	private: 1,
	function: 1,
	continue: 1,
	debugger: 1,
	interface: 1,
	protected: 1,
	instanceof: 1,
	implements: 1
};
function Vc() {
	for (; H < U;) {
		let e = V.charCodeAt(H);
		if (Ic(e) || Lc(e)) ++H;
		else break;
	}
}
function Hc(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) H < U && Pc(V[H]) ? (r = V[H++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : Z({}, q, J);
	return String.fromCharCode(i);
}
function Uc() {
	var e = V[H], t = 0, n, r;
	for (e === "}" && Z({}, q, J); H < U && (e = V[H++], Pc(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && Z({}, q, J), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function Wc() {
	var e = V.charCodeAt(H++), t = String.fromCharCode(e);
	for (e === 92 && (V.charCodeAt(H) !== 117 && Z({}, q, J), ++H, e = Hc("u"), (!e || e === "\\" || !Rc(e.charCodeAt(0))) && Z({}, q, J), t = e); H < U && (e = V.charCodeAt(H), zc(e));) ++H, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), V.charCodeAt(H) !== 117 && Z({}, q, J), ++H, e = Hc("u"), (!e || e === "\\" || !zc(e.charCodeAt(0))) && Z({}, q, J), t += e);
	return t;
}
function Gc() {
	for (var e = H++, t; H < U;) {
		if (t = V.charCodeAt(H), t === 92) return H = e, Wc();
		if (zc(t)) ++H;
		else break;
	}
	return V.slice(e, H);
}
function Kc() {
	var e = H, t = V.charCodeAt(H) === 92 ? Wc() : Gc();
	return {
		type: t.length === 1 ? ac : Bc.hasOwnProperty(t) ? G : t === "null" ? oc : t === "true" || t === "false" ? rc : ac,
		value: t,
		start: e,
		end: H
	};
}
function qc() {
	var e = H, t = V.charCodeAt(H), n, r = V[H], i, a, o;
	switch (t) {
		case 46:
		case 40:
		case 41:
		case 59:
		case 44:
		case 123:
		case 125:
		case 91:
		case 93:
		case 58:
		case 63:
		case 126: return ++H, {
			type: K,
			value: String.fromCharCode(t),
			start: e,
			end: H
		};
		default: if (n = V.charCodeAt(H + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return H += 2, {
				type: K,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: H
			};
			case 33:
			case 61: return H += 2, V.charCodeAt(H) === 61 && ++H, {
				type: K,
				value: V.slice(e, H),
				start: e,
				end: H
			};
		}
	}
	if (o = V.substr(H, 4), o === ">>>=") return H += 4, {
		type: K,
		value: o,
		start: e,
		end: H
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return H += 3, {
		type: K,
		value: a,
		start: e,
		end: H
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return H += 2, {
		type: K,
		value: i,
		start: e,
		end: H
	};
	if (i === "//" && Z({}, q, J), "<>=!+-*%&|^/".includes(r)) return ++H, {
		type: K,
		value: r,
		start: e,
		end: H
	};
	Z({}, q, J);
}
function Jc(e) {
	let t = "";
	for (; H < U && Pc(V[H]);) t += V[H++];
	return t.length === 0 && Z({}, q, J), Rc(V.charCodeAt(H)) && Z({}, q, J), {
		type: sc,
		value: parseInt("0x" + t, 16),
		start: e,
		end: H
	};
}
function Yc(e) {
	let t = "0" + V[H++];
	for (; H < U && Fc(V[H]);) t += V[H++];
	return (Rc(V.charCodeAt(H)) || Y(V.charCodeAt(H))) && Z({}, q, J), {
		type: sc,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: H
	};
}
function Xc() {
	var e, t, n = V[H];
	if (Nc(Y(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = H, e = "", n !== ".") {
		if (e = V[H++], n = V[H], e === "0") {
			if (n === "x" || n === "X") return ++H, Jc(t);
			if (Fc(n)) return Yc(t);
			n && Y(n.charCodeAt(0)) && Z({}, q, J);
		}
		for (; Y(V.charCodeAt(H));) e += V[H++];
		n = V[H];
	}
	if (n === ".") {
		for (e += V[H++]; Y(V.charCodeAt(H));) e += V[H++];
		n = V[H];
	}
	if (n === "e" || n === "E") {
		if (e += V[H++], n = V[H], (n === "+" || n === "-") && (e += V[H++]), Y(V.charCodeAt(H))) for (; Y(V.charCodeAt(H));) e += V[H++];
		else Z({}, q, J);
	}
	return Rc(V.charCodeAt(H)) && Z({}, q, J), {
		type: sc,
		value: parseFloat(e),
		start: t,
		end: H
	};
}
function Zc() {
	var e = "", t, n, r, i, a = !1;
	for (t = V[H], Nc(t === "'" || t === "\"", "String literal must starts with a quote"), n = H, ++H; H < U;) {
		if (r = V[H++], r === t) {
			t = "";
			break;
		}
		if (r === "\\") {
			if (r = V[H++], !r || !Lc(r.charCodeAt(0))) switch (r) {
				case "u":
				case "x":
					V[H] === "{" ? (++H, e += Uc()) : e += Hc(r);
					break;
				case "n":
					e += "\n";
					break;
				case "r":
					e += "\r";
					break;
				case "t":
					e += "	";
					break;
				case "b":
					e += "\b";
					break;
				case "f":
					e += "\f";
					break;
				case "v":
					e += "\v";
					break;
				default: Fc(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), H < U && Fc(V[H]) && (a = !0, i = i * 8 + "01234567".indexOf(V[H++]), "0123".includes(r) && H < U && Fc(V[H]) && (i = i * 8 + "01234567".indexOf(V[H++]))), e += String.fromCharCode(i)) : e += r;
			}
			else r === "\r" && V[H] === "\n" && ++H;
		} else if (Lc(r.charCodeAt(0))) break;
		else e += r;
	}
	return t !== "" && Z({}, q, J), {
		type: cc,
		value: e,
		octal: a,
		start: n,
		end: H
	};
}
function Qc(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		Z({}, Ec);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		Z({}, Ec);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function $c() {
	var e = V[H], t, n, r, i;
	for (Nc(e === "/", "Regular expression literal must start with a slash"), t = V[H++], n = !1, r = !1; H < U;) if (e = V[H++], t += e, e === "\\") e = V[H++], Lc(e.charCodeAt(0)) && Z({}, Dc), t += e;
	else if (Lc(e.charCodeAt(0))) Z({}, Dc);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || Z({}, Dc), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function el() {
	for (var e, t = "", n = ""; H < U && (e = V[H], zc(e.charCodeAt(0)));) ++H, e === "\\" && H < U ? Z({}, q, J) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && Z({}, Ec, n), {
		value: n,
		literal: t
	};
}
function tl() {
	var e, t, n, r;
	return W = null, Vc(), e = H, t = $c(), n = el(), r = Qc(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: H
	};
}
function nl(e) {
	return e.type === ac || e.type === G || e.type === rc || e.type === oc;
}
function rl() {
	if (Vc(), H >= U) return {
		type: ic,
		start: H,
		end: H
	};
	let e = V.charCodeAt(H);
	return Rc(e) ? Kc() : e === 40 || e === 41 || e === 59 ? qc() : e === 39 || e === 34 ? Zc() : e === 46 ? Y(V.charCodeAt(H + 1)) ? Xc() : qc() : Y(e) ? Xc() : qc();
}
function X() {
	let e = W;
	return H = e.end, W = rl(), H = e.end, e;
}
function il() {
	let e = H;
	W = rl(), H = e;
}
function al(e) {
	let t = new z(uc);
	return t.elements = e, t;
}
function ol(e, t, n) {
	let r = new z(e === "||" || e === "&&" ? gc : dc);
	return r.operator = e, r.left = t, r.right = n, r;
}
function sl(e, t) {
	let n = new z(fc);
	return n.callee = e, n.arguments = t, n;
}
function cl(e, t, n) {
	let r = new z(pc);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function ll(e) {
	let t = new z(mc);
	return t.name = e, t;
}
function ul(e) {
	let t = new z(hc);
	return t.value = e.value, t.raw = V.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function dl(e, t, n) {
	let r = new z(_c);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function fl(e) {
	let t = new z(vc);
	return t.properties = e, t;
}
function pl(e, t, n) {
	let r = new z(yc);
	return r.key = t, r.value = n, r.kind = e, r;
}
function ml(e, t) {
	let n = new z(bc);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function Z(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (Nc(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = H, n.description = i, n;
}
function hl(e) {
	e.type === ic && Z(e, Tc), e.type === sc && Z(e, xc), e.type === cc && Z(e, Sc), e.type === ac && Z(e, Cc), e.type === G && Z(e, wc), Z(e, q, e.value);
}
function Q(e) {
	let t = X();
	(t.type !== K || t.value !== e) && hl(t);
}
function $(e) {
	return W.type === K && W.value === e;
}
function gl(e) {
	return W.type === G && W.value === e;
}
function _l() {
	let e = [];
	for (H = W.start, Q("["); !$("]");) $(",") ? (X(), e.push(null)) : (e.push(Nl()), $("]") || Q(","));
	return X(), al(e);
}
function vl() {
	H = W.start;
	let e = X();
	return e.type === cc || e.type === sc ? (e.octal && Z(e, Oc), ul(e)) : ll(e.value);
}
function yl() {
	var e, t, n, r;
	if (H = W.start, e = W, e.type === ac) return n = vl(), Q(":"), r = Nl(), pl("init", n, r);
	if (e.type === ic || e.type === K) hl(e);
	else return t = vl(), Q(":"), r = Nl(), pl("init", t, r);
}
function bl() {
	var e = [], t, n, r, i = {}, a = String;
	for (H = W.start, Q("{"); !$("}");) t = yl(), n = t.key.type === mc ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? Z({}, kc) : i[r] = !0, e.push(t), $("}") || Q(",");
	return Q("}"), fl(e);
}
function xl() {
	Q("(");
	let e = Pl();
	return Q(")"), e;
}
var Sl = { if: 1 };
function Cl() {
	var e, t, n;
	if ($("(")) return xl();
	if ($("[")) return _l();
	if ($("{")) return bl();
	if (e = W.type, H = W.start, e === ac || Sl[W.value]) n = ll(X().value);
	else if (e === cc || e === sc) W.octal && Z(W, Oc), n = ul(X());
	else if (e === G) throw Error(Ac);
	else e === rc ? (t = X(), t.value = t.value === "true", n = ul(t)) : e === oc ? (t = X(), t.value = null, n = ul(t)) : $("/") || $("/=") ? (n = ul(tl()), il()) : hl(X());
	return n;
}
function wl() {
	let e = [];
	if (Q("("), !$(")")) for (; H < U && (e.push(Nl()), !$(")"));) Q(",");
	return Q(")"), e;
}
function Tl() {
	H = W.start;
	let e = X();
	return nl(e) || hl(e), ll(e.value);
}
function El() {
	return Q("."), Tl();
}
function Dl() {
	Q("[");
	let e = Pl();
	return Q("]"), e;
}
function Ol() {
	for (var e = Cl(), t, n;;) if ($(".")) n = El(), e = dl(".", e, n);
	else if ($("(")) t = wl(), e = sl(e, t);
	else if ($("[")) n = Dl(), e = dl("[", e, n);
	else break;
	return e;
}
function kl() {
	let e = Ol();
	if (W.type === K && ($("++") || $("--"))) throw Error(Ac);
	return e;
}
function Al() {
	var e, t;
	if (W.type !== K && W.type !== G) t = kl();
	else if ($("++") || $("--")) throw Error(Ac);
	else if ($("+") || $("-") || $("~") || $("!")) e = X(), t = Al(), t = ml(e.value, t);
	else if (gl("delete") || gl("void") || gl("typeof")) throw Error(Ac);
	else t = kl();
	return t;
}
function jl(e) {
	let t = 0;
	if (e.type !== K && e.type !== G) return 0;
	switch (e.value) {
		case "||":
			t = 1;
			break;
		case "&&":
			t = 2;
			break;
		case "|":
			t = 3;
			break;
		case "^":
			t = 4;
			break;
		case "&":
			t = 5;
			break;
		case "==":
		case "!=":
		case "===":
		case "!==":
			t = 6;
			break;
		case "<":
		case ">":
		case "<=":
		case ">=":
		case "instanceof":
		case "in":
			t = 7;
			break;
		case "<<":
		case ">>":
		case ">>>":
			t = 8;
			break;
		case "+":
		case "-":
			t = 9;
			break;
		case "*":
		case "/":
		case "%": t = 11;
	}
	return t;
}
function Ml() {
	var e = W, t, n, r, i, a, o, s, c = Al(), l;
	if (r = W, i = jl(r), i === 0) return c;
	for (r.prec = i, X(), t = [e, W], o = Al(), a = [
		c,
		r,
		o
	]; (i = jl(W)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = ol(s, c, o), a.push(n);
		r = X(), r.prec = i, a.push(r), t.push(W), n = Al(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = ol(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function Nl() {
	var e = Ml(), t, n;
	return $("?") && (X(), t = Nl(), Q(":"), n = Nl(), e = cl(e, t, n)), e;
}
function Pl() {
	let e = Nl();
	if ($(",")) throw Error(Ac);
	return e;
}
function Fl(e) {
	V = e, H = 0, U = V.length, W = null, il();
	let t = Pl();
	if (W.type !== ic) throw Error("Unexpect token after expression.");
	return t;
}
var Il = {
	NaN: "NaN",
	E: "Math.E",
	LN2: "Math.LN2",
	LN10: "Math.LN10",
	LOG2E: "Math.LOG2E",
	LOG10E: "Math.LOG10E",
	PI: "Math.PI",
	SQRT1_2: "Math.SQRT1_2",
	SQRT2: "Math.SQRT2",
	MIN_VALUE: "Number.MIN_VALUE",
	MAX_VALUE: "Number.MAX_VALUE"
};
function Ll(e) {
	function t(t, n, r, i) {
		let a = e(n[0]);
		return r && (a = r + "(" + a + ")", r.lastIndexOf("new ", 0) === 0 && (a = "(" + a + ")")), a + "." + t + (i < 0 ? "" : i === 0 ? "()" : "(" + n.slice(1).map(e).join(",") + ")");
	}
	function n(e, n, r) {
		return (i) => t(e, i, n, r);
	}
	let r = "new Date", i = "String", a = "RegExp";
	return {
		isNaN: "Number.isNaN",
		isFinite: "Number.isFinite",
		abs: "Math.abs",
		acos: "Math.acos",
		asin: "Math.asin",
		atan: "Math.atan",
		atan2: "Math.atan2",
		ceil: "Math.ceil",
		cos: "Math.cos",
		exp: "Math.exp",
		floor: "Math.floor",
		hypot: "Math.hypot",
		log: "Math.log",
		max: "Math.max",
		min: "Math.min",
		pow: "Math.pow",
		random: "Math.random",
		round: "Math.round",
		sin: "Math.sin",
		sqrt: "Math.sqrt",
		tan: "Math.tan",
		clamp: function(t) {
			t.length < 3 && R("Missing arguments to clamp function."), t.length > 3 && R("Too many arguments to clamp function.");
			let n = t.map(e);
			return "Math.max(" + n[1] + ", Math.min(" + n[2] + "," + n[0] + "))";
		},
		now: "Date.now",
		utc: "Date.UTC",
		datetime: r,
		date: n("getDate", r, 0),
		day: n("getDay", r, 0),
		year: n("getFullYear", r, 0),
		month: n("getMonth", r, 0),
		hours: n("getHours", r, 0),
		minutes: n("getMinutes", r, 0),
		seconds: n("getSeconds", r, 0),
		milliseconds: n("getMilliseconds", r, 0),
		time: n("getTime", r, 0),
		timezoneoffset: n("getTimezoneOffset", r, 0),
		utcdate: n("getUTCDate", r, 0),
		utcday: n("getUTCDay", r, 0),
		utcyear: n("getUTCFullYear", r, 0),
		utcmonth: n("getUTCMonth", r, 0),
		utchours: n("getUTCHours", r, 0),
		utcminutes: n("getUTCMinutes", r, 0),
		utcseconds: n("getUTCSeconds", r, 0),
		utcmilliseconds: n("getUTCMilliseconds", r, 0),
		length: n("length", null, -1),
		parseFloat: "parseFloat",
		parseInt: "parseInt",
		upper: n("toUpperCase", i, 0),
		lower: n("toLowerCase", i, 0),
		substring: n("substring", i),
		split: n("split", i),
		trim: n("trim", i, 0),
		btoa: "btoa",
		atob: "atob",
		encodeURIComponent: "encodeURIComponent",
		regexp: a,
		test: n("test", a),
		if: function(t) {
			t.length < 3 && R("Missing arguments to if function."), t.length > 3 && R("Too many arguments to if function.");
			let n = t.map(e);
			return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
		}
	};
}
function Rl(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function zl(e) {
	e ||= {};
	let t = e.allowed ? Us(e.allowed) : {}, n = e.forbidden ? Us(e.forbidden) : {}, r = e.constants || Il, i = (e.functions || Ll)(d), a = e.globalvar, o = e.fieldvar, s = Bs(a) ? a : (e) => `${a}["${e}"]`, c = {}, l = {}, u = 0;
	function d(e) {
		if (Hs(e)) return e;
		let t = f[e.type];
		return t ?? R("Unsupported type: " + e.type), t(e);
	}
	let f = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let i = e.name;
			return u > 0 ? i : Vs(n, i) ? R("Illegal identifier: " + i) : Vs(r, i) ? r[i] : Vs(t, i) ? i : (c[i] = 1, s(i));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = d(e.object);
			t && (u += 1);
			let r = d(e.property);
			return n === o && (l[Rl(r)] = 1), t && --u, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && R("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = Vs(i, t) && i[t];
			return r || R("Unrecognized function: " + t), Bs(r) ? r(n) : r + "(" + n.map(d).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(d).join(",") + "]",
		BinaryExpression: (e) => "(" + d(e.left) + " " + e.operator + " " + d(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + d(e.argument) + ")",
		ConditionalExpression: (e) => "(" + d(e.test) + "?" + d(e.consequent) + ":" + d(e.alternate) + ")",
		LogicalExpression: (e) => "(" + d(e.left) + e.operator + d(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.type === "Literal" ? String(t.key.value) : t.key.name;
				zs.has(e) && R("Illegal property: " + e);
			}
			return "{" + e.properties.map(d).join(",") + "}";
		},
		Property: (e) => {
			u += 1;
			let t = d(e.key);
			return --u, t + ":" + d(e.value);
		}
	};
	function p(e) {
		let t = {
			code: d(e),
			globals: Object.keys(c),
			fields: Object.keys(l)
		};
		return c = {}, l = {}, t;
	}
	return p.functions = i, p.constants = r, p;
}
//#endregion
//#region ../core/src/utils/smoothstep.js
function Bl(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../core/src/utils/clamp.js
function Vl(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/linearstep.js
function Hl(e, t, n) {
	return Vl((n - e) / (t - e), 0, 1);
}
//#endregion
//#region ../core/src/genome/indexGapMapping.js
function Ul(e, t, n = !1) {
	let r = 0, i = e.length;
	for (; r < i;) {
		let a = r + i >>> 1;
		e[a] < t || !n && e[a] === t ? r = a + 1 : i = a;
	}
	return r;
}
var Wl = /* @__PURE__ */ new WeakSet();
function Gl(e) {
	if (e && Wl.has(e)) return e;
	let t = Array.from(new Set(e ?? [])).sort((e, t) => e - t);
	if (t.some((e) => !Number.isSafeInteger(e) || e < 0 || e >= 2 ** 44)) throw Error("Gap positions must be integers in [0, 2^44).");
	return Wl.add(t), Object.freeze(t);
}
function Kl(e = {}) {
	return e.gapWidth !== 0 && e.gapWidth !== null && e.gapPositions != null && !(Array.isArray(e.gapPositions) && e.gapPositions.length === 0);
}
function ql(e, t) {
	let n = {
		positions: [],
		width: 0,
		axisLength: () => 1
	};
	return Object.assign(e, {
		gapPositions(r) {
			return arguments.length ? (n.positions = Gl(r), t(), e) : n.positions;
		},
		gapWidth(r) {
			if (!arguments.length) return n.width;
			if (r != null && (!Number.isFinite(r) || r < 0)) throw Error("Gap width must be a finite nonnegative number.");
			return n.width = r ?? 0, t(), e;
		},
		axisLength(r) {
			return arguments.length ? (n.axisLength = typeof r == "function" ? r : () => r, t(), e) : n.axisLength();
		}
	}), Object.assign(n, { enabled: () => e.props ? Kl(e.props) : n.width > 0 && n.positions.length > 0 });
}
function Jl(e) {
	return e.gapWidth > 0 && e.gapPositions.length > 0;
}
function Yl(e) {
	let t = (t) => {
		let n = e[t]?.scale;
		return !!n && Kl(n.props);
	};
	return Number(t("x")) | Number(t("y")) << 1;
}
//#endregion
//#region ../core/src/utils/expression.js
function Xl(e) {
	return it(e) || ArrayBuffer.isView(e) ? e : null;
}
function Zl(e) {
	return Xl(e) || (Ft(e) ? e : null);
}
var Ql = {
	selectionActive: Fu,
	selectionValues: ku,
	selectionContains: Au,
	selectionBounds: ju,
	clamp: Vl,
	tickStep: ge,
	format(e, t) {
		return ie(t)(e);
	},
	join(e, t) {
		return Xl(e).join(t);
	},
	indexof(e, t, n) {
		return Zl(e).indexOf(t, n);
	},
	inrange: jt,
	lastindexof(e, t, n) {
		return Zl(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return Ft(e) ? Array.from(e).reverse().join("") : Xl(e).slice().reverse();
	},
	slice(e, t, n) {
		return Zl(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: it,
	isBoolean: Mt,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: Nt,
	isObject: at,
	isRegExp: Pt,
	isString: Ft,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: It,
	linearstep: Hl,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return Xl(e).slice().sort(Dt);
	},
	center(e) {
		let t = Xl(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return Lt(e);
	},
	smoothstep: Bl
};
function $l(e, t) {
	let n = !1, r = su(e, {}, {
		specLocation: t,
		resolveScaleResolution: () => (n = !0, {
			channel: "analysis",
			getDomainRef: () => void 0,
			getMappingRef: () => void 0,
			getConfigurationRef: () => void 0,
			getZoomLevelRef: () => void 0
		})
	});
	return {
		usesScaleHelper: n,
		globals: r.globals
	};
}
function eu(e, t) {
	let n = Ll(e);
	for (let e in Ql) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range",
		"bandwidth",
		"bandstep",
		"linearize",
		"zoomLevel"
	]) n[r] = (n) => tu(e, t, r, n);
	return n;
}
function tu(e, t, n, r) {
	if (n === "zoomLevel" && r.length === 0) {
		let e = [];
		for (let r of ["x", "y"]) {
			let i = t.resolveScaleResolution?.(r);
			if (i) {
				let a = t.getScaleHelper(n, r, i);
				e.push(`${t.globalvar}["${a.codeName}"]()`);
			}
		}
		return `Math.sqrt(${e.join("*") || "1"})`;
	}
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert" || n === "linearize") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	if (n === "zoomLevel" && r.length > 1) throw Error("Scale helper \"zoomLevel\" accepts zero arguments or one literal channel name.");
	if (n === "bandstep" && r.length > 2) throw Error("Scale helper \"bandstep\" accepts a channel and an optional pixel extent.");
	let i = nu(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function nu(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function ru(e, t) {
	let n = (n) => au(t, e, n);
	if (e === "domain") return () => n(() => t.getDomain());
	if (e === "range") return () => n(() => t.getScale().range());
	if (e === "bandwidth") return () => n(() => {
		let e = t.getScale();
		if (typeof e.bandwidth != "function") throw Error(`Scale channel "${t.channel}" does not support bandwidth().`);
		return e.bandwidth();
	});
	if (e === "bandstep") return (e) => n(() => {
		let n = t.getScale();
		if (typeof n.step != "function") throw Error(`Scale channel "${t.channel}" does not support bandstep().`);
		if (e !== void 0 && (!Number.isFinite(e) || e < 0)) throw Error("bandstep() extent must be finite and nonnegative.");
		if (Kl(n.props) && e === void 0) throw Error("bandstep() requires a pixel extent for a scale with grouping gaps.");
		if (e === 0) return 0;
		let r = n.gapMapping?.(e)?.step ?? n.step(), i = n.range();
		return Math.sign(i[i.length - 1] - i[0]) * Math.abs(r);
	});
	if (e === "scale") return (e) => n(() => t.getScale()(e));
	if (e === "invert") return (e) => n(() => t.getScale().invert(e));
	if (e === "linearize") return (e) => n(() => e == null ? null : typeof t.fromComplex == "function" ? t.fromComplex(e) : e);
	if (e === "zoomLevel") return () => n(() => t.getZoomLevel());
	throw Error("Unknown scale helper: " + e);
}
var iu = /* @__PURE__ */ new WeakSet();
function au(e, t, n) {
	if (iu.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	iu.add(e);
	try {
		return n();
	} finally {
		iu.delete(e);
	}
}
function ou(e, t) {
	return e === "domain" ? t.getDomainRef() : e === "linearize" ? t.getConfigurationRef() : e === "zoomLevel" ? t.getZoomLevelRef() : t.getMappingRef();
}
function su(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = 1, s = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, s) {
				let c = e + ":" + n, l = i.get(c);
				if (l) return l;
				let u = r.get(c);
				u || (u = ou(e, s), r.set(c, u));
				let d = "__scale_helper_" + o++, f = {
					codeName: d,
					dependency: u
				};
				return i.set(c, f), e === "zoomLevel" && a.add(s), t[d] = ru(e, s), f;
			}
		}, c = zl({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => eu(e, s)
		}), l = Fl(e), u = /* @__PURE__ */ new Set();
		l.visit((e) => {
			e.type === "MemberExpression" && e.object.type === "Identifier" && e.object.name === "datum" && (!e.computed && e.property.type === "Identifier" ? u.add(e.property.name) : e.computed && e.property.type === "Literal" && (typeof e.property.value == "string" || typeof e.property.value == "number") && u.add(String(e.property.value)));
		});
		let d = c(l), f = Ut(`try {
                return (${d.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`, u, n.specLocation, Ql), p = f(t);
		return p.createEvaluator = f, p.fields = d.fields, p.globals = d.globals, p.code = d.code, p.scaleDependencies = Array.from(new Set(r.values())), p.zoomLevelResolutions = Array.from(a), p;
	} catch (t) {
		throw Vt(Error(`Invalid expression: ${e}, ${t.message}`, { cause: t }), n.specLocation);
	}
}
var cu = zl({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function lu(e, t) {
	try {
		let t = cu(Fl(e));
		return Function("event", "globalObject", `"use strict";
            try {
                return !!(${t.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`);
	} catch (n) {
		throw Vt(Error(`Invalid expression: ${e}, ${n.message}`, { cause: n }), t);
	}
}
//#endregion
//#region ../core/src/utils/interactionConfig.js
function uu(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	}
	return e;
}
function du(e, t) {
	return e?.filter ? lu(e.filter, t) : () => !0;
}
function fu(e, t, n) {
	return e.getSpecLocation(t, [n, ...typeof t?.[n] == "object" ? ["filter"] : []]);
}
function pu(e, t, n) {
	if (!t.includes(e.type)) throw Error(n);
	return e;
}
//#endregion
//#region ../core/src/selection/selection.js
function mu(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[b]
	};
}
function hu(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[b], e]))
	};
}
function gu(e, t) {
	if (!t || t.length === 0) return;
	let n = t.map((e) => Wt(e)), r = (e) => n.map((t) => t(e));
	if (Tu(e)) return e.datum ? [r(e.datum)] : [];
	if (Eu(e)) return [...e.data.values()].map(r);
	throw Error(`Expected a point selection, got: ${JSON.stringify(e)}`);
}
function _u(e, t, n, r) {
	if (!t || t.length === 0) return;
	if (e === "single" && n.length > 1) throw Error("Single point selections expect at most one key tuple.");
	let i = [], a = [];
	for (let e of n) {
		let n = r(t, e);
		n ? i.push(n) : a.push(e);
	}
	return {
		selection: e === "single" ? mu(i[0] ?? null) : hu(i),
		unresolved: a
	};
}
function vu(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function yu(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[b], e);
	for (let e of n ?? []) i.delete(e[b]);
	for (let e of r ?? []) {
		let t = e[b];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function bu(e, t) {
	let n = !!(e.empty ?? !0), r = Ju(e.param), i = e.fields ?? {};
	if (Du(t)) {
		if (Object.keys(i).length !== 1 || !i[t.component]) throw Error(`Category filter fields must map the declared component "${t.component}".`);
		return `${r}.values.size == 0 ? ${n} : mapHasKey(${r}.values, datum${tt(i[t.component]).map((e) => `[${JSON.stringify(e)}]`).join("")})`;
	}
	if (Tu(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify(b)}]`;
	if (Eu(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify(b)}])`;
	if (wu(t)) {
		let a = Object.keys(t.intervals);
		if (a.some(Ru)) {
			let e = a[0];
			if (Object.keys(i).length !== 1 || !i[e]) throw Error(`Numeric filter fields must map "${e}".`);
			let t = "datum" + tt(i[e]).map((e) => `[${JSON.stringify(e)}]`).join(""), o = `${r}.intervals.${e}`;
			return `${o} ? (isNumber(${t}) && isFinite(${t}) && ${o}[0] < ${o}[1] && ${o}[0] <= ${t} && ${t} < ${o}[1]) : ${n}`;
		}
		let o = Object.keys(i).filter(vs);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = Es(e), a = i[e], o = i[t] ?? i[e], c = `${r}.intervals.${e}[0] <= ${s(o)}`, l = `${s(a)} <= ${r}.intervals.${e}[1]`, u = `${r}.intervals.${e}[0] < ${r}.intervals.${e}[1]`;
			return `(${r}.intervals.${e} ? (${u} && ${c} && ${l}) : ${n})`;
		}).join(" && ");
	}
	throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function xu(e) {
	if ("param" in e || "test" in e) return Po(e);
}
function Su(e) {
	return e?.selection ? Fo(e.selection) : [];
}
function Cu(e) {
	let t = Object.values(e).flatMap((e) => e.branches.flatMap(({ predicate: e }) => e.selection ? [e.selection] : [])), n = /* @__PURE__ */ new Set();
	return t.filter((e) => {
		let t = JSON.stringify(e);
		return !n.has(t) && (n.add(t), !0);
	});
}
function wu(e) {
	return e.type === "interval";
}
function Tu(e) {
	return e.type === "single";
}
function Eu(e) {
	return e.type === "multi";
}
function Du(e) {
	return e.type === "categories";
}
function Ou(e) {
	return e.encodings ? Oo(e.encodings[0]) : e.toggle ? hu() : mu(null);
}
function ku(e, t) {
	if (!Du(e)) throw Error("selectionValues requires a category point selection.");
	if (e.component !== t) throw Error(`Undeclared selection component "${t}".`);
	return Array.from(e.values);
}
function Au(e, t, n) {
	if (!Du(e)) throw Error("selectionContains requires a category point selection.");
	if (e.component !== t) throw Error(`Undeclared selection component "${t}".`);
	return jo(e, n, !1);
}
function ju(e, t) {
	if (!wu(e)) throw Error("selectionBounds requires an interval selection.");
	if (!Object.hasOwn(e.intervals, t)) throw Error(`Undeclared selection component "${t}".`);
	let n = e.intervals[t];
	return n ? n.slice() : null;
}
function Mu(e, t) {
	let n = typeof e == "string" ? { type: e } : { ...e };
	return n.on = n.on ? uu(n.on) : Nu(n) ? { type: "click" } : void 0, n.clear = n.clear === !1 || t === "legend" && n.type === "point" && n.clear == null ? void 0 : n.clear === !0 || n.clear == null ? { type: "dblclick" } : uu(n.clear), Nu(n) && n.on.type === "click" && n.toggle === void 0 && (n.toggle = !0), n;
}
function Nu(e) {
	return e && e.type == "point";
}
function Pu(e) {
	return e && e.type == "interval";
}
function Fu(e) {
	if (Tu(e)) return e.uniqueId != null;
	if (Eu(e)) return e.data.size > 0;
	if (Du(e)) return e.values.size > 0;
	if (wu(e)) return Iu(e);
	throw Error("Unsupported selection value.");
}
function Iu(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function Lu(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] < n[1] && n[0] <= t[e] && n[1] >= t[e]);
}
function Ru(e) {
	return e === "color" || e === "fill" || e === "stroke";
}
function zu(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t && Ru(e) && t[1] === "Infinity" ? [t[0], Infinity] : t]));
}
function Bu(e, t) {
	let n = e?.[t];
	if (!e || Object.keys(e).length !== 1 || n === void 0 || n !== null && (!Array.isArray(n) || n.length !== 2 || !Number.isFinite(n[0]) || !(Number.isFinite(n[1]) || n[1] === Infinity) || n[0] > n[1])) throw Error(`Interval requires a finite lower and finite or unbounded upper endpoint for "${t}".`);
}
//#endregion
//#region ../core/src/ruler/rulerValue.js
function Vu(e = ["x"], t = {}) {
	let n = {};
	for (let r of e) n[r] = t[r] ?? null;
	return {
		type: "ruler",
		values: n
	};
}
//#endregion
//#region ../core/src/paramRuntime/paramUtils.js
function Hu(e) {
	return typeof e == "object" && !!e && "expr" in e && Ft(e.expr);
}
function Uu(e) {
	if (Hu(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function Wu(e) {
	return ("expr" in e || "bind" in e) && !("select" in e) && !("ruler" in e);
}
function Gu(e) {
	return !("expr" in e) && "select" in e;
}
function Ku(e) {
	return !("bind" in e && e.bind === "legend") || "select" in e && typeof e.select == "object" && e.select.on !== void 0;
}
function qu(e) {
	return !("expr" in e || "bind" in e || "select" in e) && "ruler" in e;
}
function Ju(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function Yu(e, t, n) {
	if ("select" in e) {
		let t = Mu(e.select);
		if (Nu(t)) {
			if (t.encodings && e.value !== void 0) {
				let n = t.encodings[0], r = e.value;
				return Oo(n, r.map((e) => e[n]), !!t.toggle);
			}
			return Ou(t);
		}
		if (Pu(t)) {
			if (t.encodings?.some(Ru) && (!("bind" in e) || e.bind !== "legend" || t.encodings.length !== 1 || t.extent !== void 0)) throw Error(`Numeric interval "${e.name}" requires one legend-bound color, fill, or stroke component without an extent.`);
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return e.value ? {
				type: "interval",
				intervals: {
					...vu(t.encodings).intervals,
					...zu(e.value)
				}
			} : vu(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("ruler" in e) return Vu(e.ruler.encodings, e.value);
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function Xu(e, t, n, r, i = []) {
	let a = { ...t }, o = [];
	for (let [r, i] of Object.entries(t)) if (Hu(i)) {
		let t = e.createExpression(i), s = o.push({
			key: r,
			fn: t
		}) - 1;
		Object.defineProperty(a, r, {
			enumerable: !0,
			get: n ? () => c.get()[s] : () => t(null)
		});
	} else a[r] = i;
	if (!n) return a;
	for (let { key: t, expr: n } of i) o.push({
		key: t,
		fn: e.createExpression(n)
	});
	if (!o.length) return a;
	let s = Array.from(new Set(o.flatMap(({ fn: e }) => e.dependencies))), c = e.computed("expression properties", s, () => o.map(({ fn: e }) => e(null)), { equals: Zu }), l = c.get(), u = e.effect([c], () => {
		let e = c.get(), t = new Set(o.filter((t, n) => l[n] !== e[n]).map(({ key: e }) => e));
		l = e, n(t);
	});
	return r?.(c.dispose), r?.(u), a;
}
function Zu(e, t) {
	return e.every((e, n) => e === t[n]);
}
function Qu(e, t, n, r) {
	if (!Hu(t)) return t;
	let i = () => {
		throw Error(n);
	}, a = e.watchExpression ? e.watchExpression(t, i, {
		scopeOwned: !1,
		registerDisposer: r
	}) : e.createExpression(t);
	if (!e.watchExpression) {
		let e = a.subscribe(i);
		r?.(e);
	}
	return a();
}
function $u(e) {
	return Object.assign(() => e, {
		dependencies: [],
		subscribe: () => () => void 0,
		invalidate: () => void 0,
		identifier: () => "constant",
		fields: [],
		globals: [],
		code: JSON.stringify(e)
	});
}
//#endregion
//#region ../core/src/utils/specOrigin.js
var ed = /* @__PURE__ */ new WeakMap();
function td(e, t, n) {
	let r = ed.get(e);
	return ed.set(t, {
		source: r?.source ?? e,
		path: n ?? r?.path
	}), t;
}
function nd(e) {
	let t = structuredClone(e);
	function n(e, t) {
		if (e && typeof e == "object" && !ed.has(t)) {
			td(e, t);
			for (let r of Object.keys(e)) n(e[r], t[r]);
		}
	}
	return n(e, t), t;
}
function rd(e, t, n) {
	if (!e || !t) return;
	let r = ed.get(e), i = t(r?.source ?? e);
	return i === void 0 ? void 0 : {
		origin: i,
		path: r?.path ?? n
	};
}
//#endregion
//#region ../core/src/view/renderingContext/clipOptions.js
function id(e) {
	if (e.clip) return e.clip;
	if (e.clipRect) return {
		rect: e.clipRect,
		clipX: !0,
		clipY: !0
	};
}
function ad(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.clipX === t.clipX && e.clipY === t.clipY && e.rect.equals(t.rect);
}
function od(e, t, n) {
	return t || n ? {
		rect: e,
		clipX: t,
		clipY: n
	} : void 0;
}
function sd(e, t) {
	return t ? t.clipX && t.clipY ? e.intersect(t.rect) : t.clipX ? e.intersectX(t.rect) : t.clipY ? e.intersectY(t.rect) : e : e;
}
function cd(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = e.clipX || t.clipX, r = e.clipY || t.clipY, i = e.clipX && t.clipX ? e.rect.intersectX(t.rect) : t.clipX ? t.rect : e.rect, a = e.clipY && t.clipY ? e.rect.intersectY(t.rect) : t.clipY ? t.rect : e.rect;
	return od(e.rect.modify({
		x: () => i.x,
		y: () => a.y,
		width: () => i.width,
		height: () => a.height
	}), n, r);
}
function ld(e, t) {
	if (e === !0) return od(t, !0, !0);
	if (e === "x") return od(t, !0, !1);
	if (e === "y") return od(t, !1, !0);
}
function ud(e) {
	let t = !1, n = !0, r = !0, i = !1;
	return e.visit((e) => {
		let a = e.mark;
		if (a) {
			t = !0;
			let e = a.properties.clip;
			n &&= e === !0 || e === "x", r &&= e === !0 || e === "y", i ||= e === !0 || e === "x" || e === "y";
		}
	}), {
		clipX: t && n,
		clipY: t && r,
		all: n && r,
		any: i
	};
}
function dd(e, t, n) {
	if (t !== "never") return cd(e, ld(t, n));
}
//#endregion
export { Ul as $, He as $n, Ba as $t, gu as A, Rt as An, Ts as At, Tu as B, Ft as Bn, Fo as Bt, Mu as C, cn as Cn, ks as Ct, hu as D, Wt as Dn, bs as Dt, vu as E, Gt as En, cs as Et, wu as F, it as Fn, Ko as Ft, yu as G, ot as Gn, Ao as Gt, xu as H, mt as Hn, Lo as Ht, Pu as I, Mt as In, Ho as It, du as J, zt as Jn, Ra as Jt, Bu as K, Lt as Kn, Wa as Kt, Eu as L, wt as Ln, Io as Lt, Iu as M, Ct as Mn, ms as Mt, Du as N, Et as Nn, Ss as Nt, mu as O, Vt as On, ys as Ot, Ru as P, et as Pn, Vo as Pt, su as Q, xt as Qn, za as Qt, Nu as R, Nt as Rn, zo as Rt, Vu as S, Mn as Sn, as as St, Cu as T, b as Tn, is as Tt, _u as U, ht as Un, ko as Ut, bu as V, It as Vn, Po as Vt, Lu as W, gt as Wn, Mo as Wt, pu as X, yt as Xn, Ha as Xt, fu as Y, vt as Yn, Na as Yt, $l as Z, bt as Zn, Ua as Zt, Wu as _, Wi as _n, Es as _t, ud as a, ja as an, Oe as ar, Hl as at, Ju as b, j as bn, us as bt, nd as c, go as cn, ye as cr, Zo as ct, Xu as d, po as dn, ls as dt, La as en, Ue as er, Yl as et, Yu as f, ho as fn, Ms as ft, Gu as g, Eo as gn, Ds as gt, qu as h, L as hn, xs as ht, od as i, Ia as in, ke as ir, Gl as it, Su as j, Ye as jn, rs as jt, zu as k, Bt as kn, vs as kt, rd as l, uo as ln, be as lr, Yo as lt, Hu as m, vo as mn, es as mt, ad as n, Fa as nn, Re as nr, Kl as nt, id as o, yo as on, v as or, Vl as ot, Ku as p, mo as pn, $o as pt, uu as q, tt as qn, Ga as qt, cd as r, Va as rn, Fe as rr, ql as rt, dd as s, _o as sn, Ce as sr, Bl as st, sd as t, Pa as tn, ze as tr, Jl as tt, td as u, fo as un, ss as ut, $u as v, Mi as vn, os as vt, Ou as w, Jt as wn, ds as wt, Uu as x, On as xn, Os as xt, Qu as y, Kr as yn, As as yt, Fu as z, at as zn, No as zt };
