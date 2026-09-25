import { $t as e, An as t, At as n, B as r, Bt as i, C as a, Cn as o, Ct as s, D as c, Dn as l, Dt as u, Et as d, F as f, Fn as p, Ft as m, Gt as h, H as g, Ht as _, I as v, In as y, It as b, J as x, Jt as S, K as C, Kt as w, L as T, Lt as E, M as D, Mn as O, Mt as k, N as A, Nn as j, Nt as ee, O as M, On as te, Ot as N, Pn as ne, Pt as re, Qt as ie, R as ae, Rt as oe, S as se, St as ce, T as le, Tn as ue, Tt as P, U as de, Ut as fe, V as pe, Vt as me, W as he, Wt as ge, X as _e, Xt as ve, Y as ye, Yt as be, Zt as xe, _n as F, _t as Se, an as Ce, at as we, b as I, bt as Te, cn as Ee, ct as De, dn as Oe, dt as ke, en as Ae, et as je, fn as Me, ft as Ne, gn as L, gt as Pe, hn as Fe, ht as Ie, i as Le, in as Re, it as ze, j as Be, k as Ve, kn as He, kt as Ue, ln as We, lt as Ge, mn as Ke, mt as qe, nn as Je, nt as Ye, o as Xe, on as Ze, pn as R, pt as Qe, q as $e, qt as et, r as tt, rn as nt, rt, sn as it, st as at, t as ot, tn as st, un as ct, ut as lt, v as ut, vn as dt, vt as ft, w as pt, wn as mt, wt as ht, x as gt, xn as _t, xt as vt, yn as yt, yt as bt, z as xt, zt as z } from "./clipOptions-DBJX_W31.js";
import { $ as St, A as Ct, B as wt, C as Tt, F as Et, G as Dt, H as Ot, I as kt, J as At, K as jt, L as Mt, M as Nt, N as Pt, O as Ft, P as It, Q as Lt, S as Rt, T as zt, U as Bt, V as Vt, W as Ht, X as Ut, Y as Wt, Z as Gt, _ as Kt, a as qt, g as Jt, h as Yt, i as Xt, it as Zt, j as Qt, k as $t, l as en, m as tn, nt as nn, q as rn, r as an, rt as on, tt as sn, v as B, w as cn, x as ln, y as V, z as un } from "./vega-scale-BJaDSHBJ.js";
import { a as dn, d as fn, f as pn, m as mn, n as hn, o as gn, p as _n, s as vn, t as yn, u as bn } from "./indexer-Cdt_U05k.js";
import { A as xn, B as Sn, C as H, D as Cn, E as wn, F as Tn, G as En, H as Dn, I as On, L as kn, M as An, N as jn, O as Mn, P as Nn, R as Pn, S as Fn, T as In, U as Ln, V as Rn, _ as zn, a as Bn, b as Vn, c as Hn, d as Un, g as Wn, h as Gn, i as Kn, j as qn, k as Jn, l as U, m as Yn, n as Xn, o as Zn, p as Qn, u as $n, v as er, x as tr, y as nr, z as rr } from "./viewSelectors-C5q3qBiR.js";
import { a as ir, i as ar, n as or, t as sr } from "./viewError-BiR9VCgL.js";
import { t as cr } from "./warning-CpIIpk8e.js";
import { a as lr, i as ur, n as dr, r as fr } from "./rasterization-D0tOoKu_.js";
import { i as pr, n as mr, t as hr } from "./viewIdentityRegistry-BvCJajXG.js";
import { t as W } from "./rectangle-DE98gIxF.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var gr = globalThis, _r = gr.ShadowRoot && (gr.ShadyCSS === void 0 || gr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, vr = Symbol(), yr = /* @__PURE__ */ new WeakMap(), br = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== vr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (_r && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = yr.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && yr.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, xr = (e) => new br(typeof e == "string" ? e : e + "", void 0, vr), Sr = (e, ...t) => new br(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, vr), Cr = (e, t) => {
	if (_r) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = gr.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, wr = _r ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return xr(t);
})(e) : e, { is: Tr, defineProperty: Er, getOwnPropertyDescriptor: Dr, getOwnPropertyNames: Or, getOwnPropertySymbols: kr, getPrototypeOf: Ar } = Object, jr = globalThis, Mr = jr.trustedTypes, Nr = Mr ? Mr.emptyScript : "", Pr = jr.reactiveElementPolyfillSupport, Fr = (e, t) => e, Ir = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Nr : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, Lr = (e, t) => !Tr(e, t), Rr = {
	attribute: !0,
	type: String,
	converter: Ir,
	reflect: !1,
	useDefault: !1,
	hasChanged: Lr
};
Symbol.metadata ??= Symbol("metadata"), jr.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var zr = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = Rr) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && Er(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = Dr(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? Rr;
	}
	static _$Ei() {
		if (this.hasOwnProperty(Fr("elementProperties"))) return;
		let e = Ar(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(Fr("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Fr("properties"))) {
			let e = this.properties, t = [...Or(e), ...kr(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(wr(e));
		} else e !== void 0 && t.push(wr(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return Cr(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? Ir : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? Ir : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? Lr)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
zr.elementStyles = [], zr.shadowRootOptions = { mode: "open" }, zr[Fr("elementProperties")] = /* @__PURE__ */ new Map(), zr[Fr("finalized")] = /* @__PURE__ */ new Map(), Pr?.({ ReactiveElement: zr }), (jr.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var Br = globalThis, Vr = (e) => e, Hr = Br.trustedTypes, Ur = Hr ? Hr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Wr = "$lit$", Gr = `lit$${Math.random().toFixed(9).slice(2)}$`, Kr = "?" + Gr, qr = `<${Kr}>`, Jr = document, Yr = () => Jr.createComment(""), Xr = (e) => e === null || typeof e != "object" && typeof e != "function", Zr = Array.isArray, Qr = (e) => Zr(e) || typeof e?.[Symbol.iterator] == "function", $r = "[ 	\n\f\r]", ei = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ti = /-->/g, ni = />/g, ri = RegExp(`>|${$r}(?:([^\\s"'>=/]+)(${$r}*=${$r}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ii = /'/g, ai = /"/g, oi = /^(?:script|style|textarea|title)$/i, G = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), si = Symbol.for("lit-noChange"), K = Symbol.for("lit-nothing"), ci = /* @__PURE__ */ new WeakMap(), li = Jr.createTreeWalker(Jr, 129);
function ui(e, t) {
	if (!Zr(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return Ur === void 0 ? t : Ur.createHTML(t);
}
var di = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ei;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ei ? c[1] === "!--" ? o = ti : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = ri) : (oi.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = ri) : o = ni : o === ri ? c[0] === ">" ? (o = i ?? ei, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? ri : c[3] === "\"" ? ai : ii) : o === ai || o === ii ? o = ri : o === ti || o === ni ? o = ei : (o = ri, i = void 0);
		let d = o === ri && e[t + 1].startsWith("/>") ? " " : "";
		a += o === ei ? n + qr : l >= 0 ? (r.push(s), n.slice(0, l) + Wr + n.slice(l) + Gr + d) : n + Gr + (l === -2 ? t : d);
	}
	return [ui(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, fi = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = di(t, n);
		if (this.el = e.createElement(l, r), li.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = li.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(Wr)) {
					let t = u[o++], n = i.getAttribute(e).split(Gr), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? _i : r[1] === "?" ? vi : r[1] === "@" ? yi : gi
					}), i.removeAttribute(e);
				} else e.startsWith(Gr) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (oi.test(i.tagName)) {
					let e = i.textContent.split(Gr), t = e.length - 1;
					if (t > 0) {
						i.textContent = Hr ? Hr.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], Yr()), li.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], Yr());
					}
				}
			} else if (i.nodeType === 8) if (i.data === Kr) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(Gr, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += Gr.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = Jr.createElement("template");
		return n.innerHTML = e, n;
	}
};
function pi(e, t, n = e, r) {
	if (t === si) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = Xr(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = pi(e, i._$AS(e, t.values), i, r)), t;
}
var mi = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? Jr).importNode(t, !0);
		li.currentNode = r;
		let i = li.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new hi(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new bi(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = li.nextNode(), a++);
		}
		return li.currentNode = Jr, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, hi = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = K, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = pi(this, e, t), Xr(e) ? e === K || e == null || e === "" ? (this._$AH !== K && this._$AR(), this._$AH = K) : e !== this._$AH && e !== si && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? Qr(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== K && Xr(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Jr.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = fi.createElement(ui(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new mi(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = ci.get(e.strings);
		return t === void 0 && ci.set(e.strings, t = new fi(e)), t;
	}
	k(t) {
		Zr(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(Yr()), this.O(Yr()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = Vr(e).nextSibling;
			Vr(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, gi = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = K, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = K;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = pi(this, e, t, 0), a = !Xr(e) || e !== this._$AH && e !== si, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = pi(this, r[n + o], t, o), s === si && (s = this._$AH[o]), a ||= !Xr(s) || s !== this._$AH[o], s === K ? e = K : e !== K && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === K ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, _i = class extends gi {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === K ? void 0 : e;
	}
}, vi = class extends gi {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== K);
	}
}, yi = class extends gi {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = pi(this, e, t, 0) ?? K) === si) return;
		let n = this._$AH, r = e === K && n !== K || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== K && (n === K || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, bi = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		pi(this, e);
	}
}, xi = {
	M: Wr,
	P: Gr,
	A: Kr,
	C: 1,
	L: di,
	R: mi,
	D: Qr,
	V: pi,
	I: hi,
	H: gi,
	N: vi,
	U: yi,
	B: _i,
	F: bi
}, Si = Br.litHtmlPolyfillSupport;
Si?.(fi, hi), (Br.litHtmlVersions ??= []).push("3.3.3");
var Ci = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new hi(t.insertBefore(Yr(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, wi = globalThis, Ti = class extends zr {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ci(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return si;
	}
};
Ti._$litElement$ = !0, Ti.finalized = !0, wi.litElementHydrateSupport?.({ LitElement: Ti });
var Ei = wi.litElementPolyfillSupport;
Ei?.({ LitElement: Ti }), (wi.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/vega-util/build/extend.js
function Di(e, ...t) {
	for (let n of t) for (let t in n) e[t] = n[t];
	return e;
}
//#endregion
//#region ../../node_modules/vega-util/build/isDate.js
function Oi(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/vega-util/build/isIterable.js
function ki(e) {
	return e != null && t(e[Symbol.iterator]);
}
//#endregion
//#region ../../node_modules/vega-util/build/isNumber.js
function Ai(e) {
	return typeof e == "number";
}
//#endregion
//#region ../../node_modules/vega-util/build/toBoolean.js
function ji(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
//#endregion
//#region ../../node_modules/vega-util/build/toDate.js
var Mi = (e) => Ai(e) || Oi(e) ? e : Date.parse(e);
function Ni(e, t) {
	return t ||= Mi, e == null || e === "" ? null : t(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/toString.js
function Pi(e) {
	return e == null || e === "" ? null : e + "";
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var Fi = {}, Ii = {}, Li = 34, Ri = 10, zi = 13;
function Bi(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function Vi(e, t) {
	var n = Bi(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function Hi(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function q(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function Ui(e) {
	return e < 0 ? "-" + q(-e, 6) : e > 9999 ? "+" + q(e, 6) : q(e, 4);
}
function Wi(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : Ui(e.getUTCFullYear(), 4) + "-" + q(e.getUTCMonth() + 1, 2) + "-" + q(e.getUTCDate(), 2) + (i ? "T" + q(t, 2) + ":" + q(n, 2) + ":" + q(r, 2) + "." + q(i, 3) + "Z" : r ? "T" + q(t, 2) + ":" + q(n, 2) + ":" + q(r, 2) + "Z" : n || t ? "T" + q(t, 2) + ":" + q(n, 2) + "Z" : "");
}
function Gi(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? Vi(e, t) : Bi(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === Ri && --i, e.charCodeAt(i - 1) === zi && --i;
		function u() {
			if (c) return Ii;
			if (l) return l = !1, Fi;
			var t, r = a, o;
			if (e.charCodeAt(r) === Li) {
				for (; a++ < i && e.charCodeAt(a) !== Li || e.charCodeAt(++a) === Li;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === Ri ? l = !0 : o === zi && (l = !0, e.charCodeAt(a) === Ri && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === Ri) l = !0;
				else if (o === zi) l = !0, e.charCodeAt(a) === Ri && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== Ii;) {
			for (var d = []; s !== Fi && s !== Ii;) d.push(s), s = u();
			t && (d = t(d, o++)) == null || r.push(d);
		}
		return r;
	}
	function a(t, n) {
		return t.map(function(t) {
			return n.map(function(e) {
				return u(t[e]);
			}).join(e);
		});
	}
	function o(t, n) {
		return n ??= Hi(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= Hi(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? Wi(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
	}
	return {
		parse: r,
		parseRows: i,
		format: o,
		formatBody: s,
		formatRows: c,
		formatRow: l,
		formatValue: u
	};
}
//#endregion
//#region ../../node_modules/d3-dsv/src/tsv.js
var Ki = Gi("	");
Ki.parse;
var qi = Ki.parseRows;
Ki.format, Ki.formatBody, Ki.formatRows, Ki.formatRow, Ki.formatValue;
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function Ji(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function Yi(e) {
	if (e == null) return Ji;
	var t, n, r = e.scale[0], i = e.scale[1], a = e.translate[0], o = e.translate[1];
	return function(e, s) {
		s || (t = n = 0);
		var c = 2, l = e.length, u = Array(l);
		for (u[0] = (t += e[0]) * r + a, u[1] = (n += e[1]) * i + o; c < l;) u[c] = e[c], ++c;
		return u;
	};
}
//#endregion
//#region ../../node_modules/topojson-client/src/reverse.js
function Xi(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function Zi(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return Qi(e, t);
		})
	} : Qi(e, t);
}
function Qi(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = $i(e, t);
	return n == null && r == null ? {
		type: "Feature",
		properties: i,
		geometry: a
	} : r == null ? {
		type: "Feature",
		id: n,
		properties: i,
		geometry: a
	} : {
		type: "Feature",
		id: n,
		bbox: r,
		properties: i,
		geometry: a
	};
}
function $i(e, t) {
	var n = Yi(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && Xi(t, o);
	}
	function a(e) {
		return n(e);
	}
	function o(e) {
		for (var t = [], n = 0, r = e.length; n < r; ++n) i(e[n], t);
		return t.length < 2 && t.push(t[0]), t;
	}
	function s(e) {
		for (var t = o(e); t.length < 4;) t.push(t[0]);
		return t;
	}
	function c(e) {
		return e.map(s);
	}
	function l(e) {
		var t = e.type, n;
		switch (t) {
			case "GeometryCollection": return {
				type: t,
				geometries: e.geometries.map(l)
			};
			case "Point":
				n = a(e.coordinates);
				break;
			case "MultiPoint":
				n = e.coordinates.map(a);
				break;
			case "LineString":
				n = o(e.arcs);
				break;
			case "MultiLineString":
				n = e.arcs.map(o);
				break;
			case "Polygon":
				n = c(e.arcs);
				break;
			case "MultiPolygon":
				n = e.arcs.map(c);
				break;
			default: return null;
		}
		return {
			type: t,
			coordinates: n
		};
	}
	return l(t);
}
//#endregion
//#region ../../node_modules/topojson-client/src/stitch.js
function ea(e, t) {
	var n = {}, r = {}, i = {}, a = [], o = -1;
	t.forEach(function(n, r) {
		var i = e.arcs[n < 0 ? ~n : n], a;
		i.length < 3 && !i[1][0] && !i[1][1] && (a = t[++o], t[o] = n, t[r] = a);
	}), t.forEach(function(e) {
		var t = s(e), n = t[0], a = t[1], o, c;
		if (o = i[n]) if (delete i[o.end], o.push(e), o.end = a, c = r[a]) {
			delete r[c.start];
			var l = c === o ? o : o.concat(c);
			r[l.start = o.start] = i[l.end = c.end] = l;
		} else r[o.start] = i[o.end] = o;
		else if (o = r[a]) if (delete r[o.start], o.unshift(e), o.start = n, c = i[n]) {
			delete i[c.end];
			var u = c === o ? o : c.concat(o);
			r[u.start = c.start] = i[u.end = o.end] = u;
		} else r[o.start] = i[o.end] = o;
		else o = [e], r[o.start = n] = i[o.end = a] = o;
	});
	function s(t) {
		var n = e.arcs[t < 0 ? ~t : t], r = n[0], i;
		return e.transform ? (i = [0, 0], n.forEach(function(e) {
			i[0] += e[0], i[1] += e[1];
		})) : i = n[n.length - 1], t < 0 ? [i, r] : [r, i];
	}
	function c(e, t) {
		for (var r in e) {
			var i = e[r];
			delete t[i.start], delete i.start, delete i.end, i.forEach(function(e) {
				n[e < 0 ? ~e : e] = 1;
			}), a.push(i);
		}
	}
	return c(i, r), c(r, i), t.forEach(function(e) {
		n[e < 0 ? ~e : e] || a.push([e]);
	}), a;
}
//#endregion
//#region ../../node_modules/topojson-client/src/mesh.js
function ta(e) {
	return $i(e, na.apply(this, arguments));
}
function na(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = ra(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: ea(e, r)
	};
}
function ra(e, t, n) {
	var r = [], i = [], a;
	function o(e) {
		var t = e < 0 ? ~e : e;
		(i[t] || (i[t] = [])).push({
			i: e,
			g: a
		});
	}
	function s(e) {
		e.forEach(o);
	}
	function c(e) {
		e.forEach(s);
	}
	function l(e) {
		e.forEach(c);
	}
	function u(e) {
		switch (a = e, e.type) {
			case "GeometryCollection":
				e.geometries.forEach(u);
				break;
			case "LineString":
				s(e.arcs);
				break;
			case "MultiLineString":
			case "Polygon":
				c(e.arcs);
				break;
			case "MultiPolygon":
				l(e.arcs);
				break;
		}
	}
	return u(t), i.forEach(n == null ? function(e) {
		r.push(e[0].i);
	} : function(e) {
		n(e[0].g, e[e.length - 1].g) && r.push(e[0].i);
	}), r;
}
//#endregion
//#region ../../node_modules/d3-array/src/count.js
function ia(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && ++n;
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (i = +i) >= i && ++n;
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-array/src/variance.js
function aa(e, t) {
	let n = 0, r, i = 0, a = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (r = t - i, i += r / ++n, a += r * (t - i));
	else {
		let o = -1;
		for (let s of e) (s = t(s, ++o, e)) != null && (s = +s) >= s && (r = s - i, i += r / ++n, a += r * (s - i));
	}
	if (n > 1) return a / (n - 1);
}
//#endregion
//#region ../../node_modules/d3-array/src/extent.js
function oa(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region ../../node_modules/d3-array/src/mean.js
function sa(e, t) {
	let n = 0, r = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (++n, r += t);
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (a = +a) >= a && (++n, r += a);
	}
	if (n) return r / n;
}
//#endregion
//#region ../../node_modules/d3-array/src/median.js
function ca(e, t) {
	return Ut(e, .5, t);
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function la(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/vega-format/build/vega-format.js
function ua(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function da(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = fa(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function fa(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function pa(e) {
	let t = ua(e.format), n = e.formatPrefix;
	return {
		format: t,
		formatPrefix: n,
		formatFloat(e) {
			let n = yt(e || ",");
			if (n.precision == null) {
				switch (n.precision = 12, n.type) {
					case "%":
						n.precision -= 2;
						break;
					case "e":
						--n.precision;
						break;
				}
				return da(t(n), t(".1f")(1)[1]);
			} else return t(n);
		},
		formatSpan(e, r, i, a) {
			a = yt(a ?? ",f");
			let s = o(e, r, i), c = Math.max(Math.abs(e), Math.abs(r)), l;
			if (a.precision == null) switch (a.type) {
				case "s": return isNaN(l = At(s, c)) || (a.precision = l), n(a, c);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(l = rn(s, c)) || (a.precision = l - (a.type === "e"));
					break;
				case "f":
				case "%":
					isNaN(l = Wt(s)) || (a.precision = l - (a.type === "%") * 2);
					break;
			}
			return t(a);
		}
	};
}
ma();
function ma() {
	return pa({
		format: F,
		formatPrefix: dt
	});
}
function ha(e, t, n) {
	n ||= {}, O(n) || y(`Invalid time multi-format specifier: ${n}`);
	let r = t(Ot), i = t(un), a = t(Mt), o = t(kt), s = t(Bt), c = t(wt), l = t(Vt), u = t(Ht), d = e(n.milliseconds || ".%L"), f = e(n.seconds || ":%S"), p = e(n.minutes || "%I:%M"), m = e(n.hours || "%I %p"), h = e(n.date || n.day || "%a %d"), g = e(n.week || "%b %d"), _ = e(n.month || "%B"), v = e(n.quarter || "%B"), b = e(n.year || "%Y");
	return (e) => (r(e) < e ? d : i(e) < e ? f : a(e) < e ? p : o(e) < e ? m : c(e) < e ? s(e) < e ? h : g : u(e) < e ? l(e) < e ? _ : v : b)(e);
}
function ga(e) {
	let t = ua(e.format), n = ua(e.utcFormat);
	return {
		timeFormat: (e) => te(e) ? t(e) : ha(t, Dt, e),
		utcFormat: (e) => te(e) ? n(e) : ha(n, jt, e),
		timeParse: ua(e.parse),
		utcParse: ua(e.utcParse)
	};
}
var _a;
va();
function va() {
	return _a = ga({
		format: Qt,
		parse: Nt,
		utcFormat: Pt,
		utcParse: It
	});
}
function ya(e) {
	return ga(Et(e));
}
function ba(e) {
	return arguments.length ? _a = ya(e) : _a;
}
//#endregion
//#region ../../node_modules/vega-loader/build/vega-loader.browser.js
var xa = /^(data:|([A-Za-z]+:)?\/\/)/, Sa = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i, Ca = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g, wa = "file://";
function Ta(e) {
	return (e) => ({
		options: e || {},
		sanitize: Da,
		load: Ea,
		fileAccess: !1,
		file: Oa(),
		http: Aa
	});
}
async function Ea(e, t) {
	let n = await this.sanitize(e, t), r = n.href;
	return n.localFile ? this.file(r) : this.http(r, t?.http);
}
async function Da(e, t) {
	t = Di({}, this.options, t);
	let n = this.fileAccess, r = { href: null }, i, a, o, s = Sa.test(e.replace(Ca, ""));
	(e == null || typeof e != "string" || !s) && y("Sanitize failure, invalid URI: " + l(e));
	let c = xa.test(e);
	return (o = t.baseURL) && !c && (!e.startsWith("/") && !o.endsWith("/") && (e = "/" + e), e = o + e), a = (i = e.startsWith(wa)) || t.mode === "file" || t.mode !== "http" && !c && n, i ? e = e.slice(7) : e.startsWith("//") && (t.defaultProtocol === "file" ? (e = e.slice(2), a = !0) : e = (t.defaultProtocol || "http") + ":" + e), Object.defineProperty(r, "localFile", { value: !!a }), r.href = e, t.target && (r.target = t.target + ""), t.rel && (r.rel = t.rel + ""), t.context === "image" && t.crossOrigin && (r.crossOrigin = t.crossOrigin + ""), r;
}
function Oa(e) {
	return ka;
}
async function ka() {
	y("No file system access.");
}
async function Aa(e, n) {
	let r = Di({}, this.options.http, n), i = n && n.response, a = await fetch(e, r);
	return a.ok ? t(a[i]) ? a[i]() : a.text() : y(a.status + "" + a.statusText);
}
var ja = (e) => e != null && e === e, Ma = (e) => e === "true" || e === "false" || e === !0 || e === !1, Na = (e) => !Number.isNaN(Date.parse(e)), Pa = (e) => !Number.isNaN(+e) && !(e instanceof Date), Fa = (e) => Pa(e) && Number.isInteger(+e), Ia = {
	boolean: ji,
	integer: Zt,
	number: Zt,
	date: Ni,
	string: Pi,
	unknown: ne
}, La = [
	Ma,
	Fa,
	Pa,
	Na
], Ra = [
	"boolean",
	"integer",
	"number",
	"date"
];
function za(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = La.length, i = La.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && ja(c) && !La[s](c) && (i[s] = 0, ++o, o === La.length)) return "string";
	return Ra[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function Ba(e, t) {
	return t.reduce((t, n) => (t[n] = za(e, n), t), {});
}
function Va(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return Ha(t, n ? Di(n, r) : r);
	};
	return t.responseType = "text", t;
}
function Ha(e, t) {
	return t.header && (e = t.header.map(l).join(t.delimiter) + "\n" + e), Gi(t.delimiter).parse(e + "");
}
Ha.responseType = "text";
function Ua(e) {
	return typeof Buffer == "function" && t(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function Wa(e, t) {
	let n = t && t.property ? p(t.property) : ne;
	return O(e) && !Ua(e) ? Ga(n(e), t) : n(JSON.parse(e));
}
Wa.responseType = "json";
function Ga(e, t) {
	return !j(e) && ki(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var Ka = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function qa(e, t) {
	let n, r, i, a;
	return e = Wa(e, t), t && t.feature ? (n = Zi, i = t.feature) : t && t.mesh ? (n = ta, i = t.mesh, a = Ka[t.filter]) : y("Missing TopoJSON feature or mesh parameter."), r = (r = e.objects[i]) ? n(e, r, a) : y("Invalid TopoJSON object: " + i), r && r.features || [r];
}
qa.responseType = "json";
var Ja = {
	dsv: Ha,
	csv: Va(","),
	tsv: Va("	"),
	json: Wa,
	topojson: qa
};
function Ya(e, t) {
	return arguments.length > 1 ? (Ja[e] = t, this) : He(Ja, e) ? Ja[e] : null;
}
function Xa(e, t, n, r) {
	t ||= {};
	let i = Ya(t.type || "json");
	return i || y("Unknown data format type: " + t.type), e = i(e, t), t.parse && Za(e, t.parse, n, r), He(e, "columns") && delete e.columns, e;
}
function Za(e, t, n, r) {
	if (!e.length) return;
	let i = ba();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = Ba(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!Ia[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return Ia[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
var Qa = Ta();
//#endregion
//#region ../core/src/data/formats/parquet.js
async function $a() {
	let { parquetReadObjects: e } = await import("./parquetRead-Cs2xRrvz.js");
	return e;
}
async function eo(e) {
	return await (await $a())({ file: e instanceof Uint8Array ? to(e) : e });
}
function to(e) {
	if (e.buffer instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) return e.buffer;
	{
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t.buffer;
	}
}
eo.responseType = "arrayBuffer", Ya("parquet", eo);
//#endregion
//#region ../core/src/data/formats/arrow.js
async function no() {
	let { tableFromIPC: e } = await import("./src-DjOlFqSn.js");
	return e;
}
async function ro(e) {
	return (await no())(io(e)).toArray();
}
function io(e) {
	if (e instanceof Uint8Array && e.byteOffset % 8 != 0) {
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t;
	} else return e;
}
ro.responseType = "arrayBuffer", Ya("arrow", ro);
//#endregion
//#region ../core/src/data/formats/bed.js
var ao = /^\s*$/, oo = /^\s*(?:browser\b|track\b|#)/, so;
async function co() {
	return so ??= import("./esm-D-iG_TIX.js").then((e) => e.default), so;
}
async function lo(e) {
	let t = new (await (co()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (ao.test(a) || oo.test(a)) continue;
				n = !0;
			}
			try {
				r.push(t.parseLine(a));
			} catch (t) {
				throw Error(`Cannot parse BED line ${e + 1}: ${t.message}`, { cause: t });
			}
		}
	}
	return r;
}
Ya("bed", lo);
//#endregion
//#region ../core/src/data/formats/bedpe.js
var uo = /^\s*$/, fo = /^\s*(?:browser\b|track\b|#)/, po = [
	"chrom1",
	"start1",
	"end1",
	"chrom2",
	"start2",
	"end2",
	"name",
	"score",
	"strand1",
	"strand2"
], mo = po.slice(0, 6), ho = (e) => e, go = (e) => e == "." ? null : e, _o = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, vo = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, yo = {
	chrom1: go,
	chrom2: go,
	name: go,
	strand1: _o,
	strand2: _o,
	start1: vo,
	end1: vo,
	start2: vo,
	end2: vo,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function bo(e) {
	if (e.length < mo.length) return !1;
	for (let t = 0; t < mo.length; t++) if (e[t] != mo[t]) return !1;
	return !0;
}
function xo(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if (uo.test(e) || fo.test(e)) continue;
			i = !0;
		}
		if (uo.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (bo(t) ? t : po);
			for (let t of e) s.push(t), c.push(yo[t] ?? ho);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(ho);
		if (t.length < mo.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${mo.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
Ya("bedpe", xo);
//#endregion
//#region ../core/src/data/formats/fasta.js
function So(e, t) {
	let n = [], r, i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let t = i[e], a = e + 1;
		if (t.trim() != "") if (t.startsWith(">")) {
			let [e] = t.slice(1).trim().split(/\s+/);
			if (!e) throw Error(`Invalid FASTA header on line ${a}: missing identifier`);
			r = {
				identifier: e,
				sequence: ""
			}, n.push(r);
		} else if (r) r.sequence += t.replace(/\s/g, "");
		else throw Error(`Invalid FASTA file on line ${a}: sequence data before the first header`);
	}
	return n;
}
Ya("fasta", So);
//#endregion
//#region ../core/src/data/formats/wig.js
var Co = /^(?:variableStep|fixedStep)(?:\s|$)/, wo = /^(?:browser\b|track\b|#)/;
function To(e) {
	let t, n = [], r = e.split(/\r?\n/);
	for (let e = 0; e < r.length; e++) {
		let i = e + 1, a = r[e].trim();
		if (!a || wo.test(a)) continue;
		if (Co.test(a)) {
			t = Eo(a, i);
			continue;
		}
		if (!t) throw Ao(i, "data appears before a declaration");
		let o = a.split(/\s+/);
		if (t.type == "fixedStep") {
			if (o.length != 1) throw Ao(i, "fixedStep data must contain one value");
			let e = ko(o[0], i), r = t.nextPosition - 1;
			n.push({
				chrom: t.chrom,
				start: r,
				end: r + t.span,
				score: e
			}), t.nextPosition += t.step;
		} else {
			if (o.length != 2) throw Ao(i, "variableStep data must contain a position and value");
			let e = Oo(o[0], "position", i) - 1;
			n.push({
				chrom: t.chrom,
				start: e,
				end: e + t.span,
				score: ko(o[1], i)
			});
		}
	}
	return n;
}
function Eo(e, t) {
	let [n, ...r] = e.split(/\s+/), i = {};
	for (let e of r) {
		let n = e.indexOf("=");
		if (n <= 0 || n == e.length - 1) throw Ao(t, `invalid declaration attribute "${e}"`);
		let r = e.slice(0, n);
		if (r in i) throw Ao(t, `duplicate attribute "${r}"`);
		i[r] = e.slice(n + 1);
	}
	return n == "variableStep" ? (Do(i, "chrom", n, t), {
		type: "variableStep",
		chrom: i.chrom,
		span: i.span ? Oo(i.span, "span", t) : 1
	}) : (Do(i, "chrom", n, t), Do(i, "start", n, t), {
		type: "fixedStep",
		chrom: i.chrom,
		nextPosition: Oo(i.start, "start", t),
		step: i.step ? Oo(i.step, "step", t) : 1,
		span: i.span ? Oo(i.span, "span", t) : 1
	});
}
function Do(e, t, n, r) {
	if (!(t in e)) throw Ao(r, `${n} declaration is missing "${t}"`);
}
function Oo(e, t, n) {
	let r = Number(e);
	if (!Number.isInteger(r) || r <= 0) throw Ao(n, `${t} must be a positive integer`);
	return r;
}
function ko(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Ao(t, "score must be a finite number");
	return n;
}
function Ao(e, t) {
	return /* @__PURE__ */ Error(`Cannot parse WIG line ${e}: ${t}`);
}
Ya("wig", To);
//#endregion
//#region ../core/src/data/formats/vcfParser.js
async function jo(e) {
	let t = (await import("./esm-lwYrRdbg.js")).default;
	return new t({ header: e });
}
function Mo(e) {
	return delete e.GENOTYPES, e.SAMPLES = e.SAMPLES(), e;
}
function No(e, t) {
	return e.map((e) => Mo(t.parseLine(e)));
}
//#endregion
//#region ../core/src/data/formats/vcf.js
function* Po(e) {
	let t = 1, n = 0;
	for (; n <= e.length;) {
		let r = e.indexOf("\n", n), i = r == -1 ? e.length : r, a = i > n && e.charCodeAt(i - 1) == 13;
		if (yield {
			line: e.slice(n, a ? i - 1 : i),
			lineNumber: t
		}, r == -1) break;
		n = r + 1, t++;
	}
}
async function Fo(e) {
	let t = [], n = [], r;
	for (let { line: i, lineNumber: a } of Po(e)) if (i) {
		if (!r && i.startsWith("#")) {
			t.push(i);
			continue;
		}
		r ??= await jo(t.join("\n"));
		try {
			n.push(Mo(r.parseLine(i)));
		} catch (e) {
			throw Error(`Cannot parse VCF line ${a}`, { cause: e });
		}
	}
	return r || await jo(t.join("\n")), n;
}
Ya("vcf", Fo);
//#endregion
//#region ../core/src/scale/ticks.js
function Io(t, n, r) {
	return ie(n) && r != null && (n = Math.min(n, ~~(Ze(t.domain()) / r) || 1)), e(n) && (n.step, n = n.interval), n;
}
function Lo(e, t, n) {
	var r = e.range(), i = Math.floor(r[0]), a = Math.ceil(Ce(r));
	if (i > a && (r = a, a = i, i = r), t = t.filter(function(t) {
		return t = e(t), i <= t && t <= a;
	}), n > 0 && t.length > 1) {
		for (var o = [t[0], Ce(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = o);
	}
	return t;
}
function Ro(e, t) {
	return e.bins ? Lo(e, zo(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function zo(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function Bo(e, t, n) {
	let r = typeof t == "number" && (!Number.isFinite(t) || t <= 0) ? void 0 : t;
	var i = e.tickFormat ? e.tickFormat(r, n) : n ? F(n) : String;
	if (Rt(e.type)) {
		var a = Ho(n);
		i = e.bins ? a : Vo(i, a);
	}
	return i;
}
function Vo(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function Ho(e) {
	var t = yt(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e":
				--t.precision;
				break;
		}
		return Uo(F(t), F(".1f")(1)[1]);
	} else return F(t);
}
function Uo(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = Wo(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Wo(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region ../core/src/data/sources/lazy/lazyDataSourceRegistry.js
var Go = [], Ko = [];
function qo(e, t) {
	Ko.push({
		guard: e,
		Source: t
	});
}
function Jo(e, t) {
	for (let n of Go) if (n.guard(e)) return new n.Source(e, t);
	for (let n of Ko) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/data/sources/dataSource.js
var Yo = class extends i {
	view;
	constructor(e) {
		super(), this.view = e;
	}
	get identifier() {}
	get shareKey() {
		return this.identifier;
	}
	setLoadingStatus(e, t) {
		this.view.context.dataFlow.loadingStatusRegistry.set(this.view, e, t);
	}
	get paramRuntime() {
		return this.view.paramRuntime;
	}
	handle(e) {
		throw Error("Source does not handle incoming data!");
	}
	async load() {}
	complete() {
		let e = this.view?.paramRuntime;
		e ? e.runInTransaction(() => super.complete()) : super.complete();
	}
	activate() {}
	get replaySource() {
		return this;
	}
	get replaysSynchronously() {
		return "loadSynchronously" in this;
	}
	repropagate() {
		this.activate(), "loadSynchronously" in this && typeof this.loadSynchronously == "function" ? this.loadSynchronously() : this.load();
	}
}, Xo = class extends Yo {
	#e = !1;
	#t;
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw Zo(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
		}
		this.#t = () => {
			!this.disposed && this.view.isVisible() && this.#n(this.scaleResolution.getDomain());
		};
	}
	activate() {
		this.#e || (this.#e = !0, this.scaleResolution.addEventListener("domain", this.#t), this.registerDisposer(() => this.scaleResolution.removeEventListener("domain", this.#t)), this.view.context.addBroadcastListener("layoutComputed", this.#t), this.registerDisposer(() => this.view.context.removeBroadcastListener("layoutComputed", this.#t)));
	}
	get genome() {
		let e = this.scaleResolution.getScale();
		if ("genome" in e) {
			let t = e.genome();
			if (t) return t;
		}
		throw Error("No genome has been defined!");
	}
	onDomainChanged(e, t) {}
	requestRender() {
		this.view.context.animator.requestRender();
	}
	async load() {
		this.reset(), this.complete();
	}
	invalidateData() {
		this._lastLoadedDomain = void 0, this.reset(), this.complete();
	}
	publishData(e, t = this.scaleResolution.getDomain()) {
		this._lastLoadedDomain = Array.from(t), this.reset(), this.beginBatch({ type: "file" });
		for (let t of e) for (let e of t) this._propagate(e);
		this.complete();
	}
	repropagate() {
		this.requestDataForDomain(this.scaleResolution.getDomain());
	}
	ensureDataForDomain(e) {
		this.isDataReadyForDomain({ [this.channel]: e }) || this.requestDataForDomain(e);
	}
	getLoadedDomain() {
		return this._lastLoadedDomain;
	}
	isDataReady() {
		return super.isDataReady() && this._lastLoadedDomain !== void 0 && this.isDataReadyForDomain({ [this.channel]: this._lastLoadedDomain });
	}
	requestDataForDomain(e) {
		this.#n(e);
	}
	#n(e) {
		let t = "getComplexDomain" in this.scaleResolution ? this.scaleResolution.getComplexDomain() : void 0;
		this.onDomainChanged(e, t);
	}
	isDataReadyForDomain(e) {
		let t = e[this.channel];
		if (!t || !this._lastLoadedDomain) return !1;
		let [n, r] = t[0] <= t[1] ? t : [t[1], t[0]], [i, a] = this._lastLoadedDomain[0] <= this._lastLoadedDomain[1] ? this._lastLoadedDomain : [this._lastLoadedDomain[1], this._lastLoadedDomain[0]];
		return n >= i && r <= a;
	}
};
function Zo(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region ../core/src/data/sources/lazy/axisTickSource.js
var Qo = class extends Xo {
	ticks = [];
	zoomExtentTicks = [];
	#e;
	#t;
	constructor(e, t) {
		let n = {
			axis: {},
			...e
		};
		super(t, n.channel), this.params = n, this.registerDisposer(this.scaleResolution.subscribeZoomExtent(() => {
			this.completed && this.onDomainChanged();
		}));
		let r = n.axis.tickCount;
		if (I(r)) {
			let e = new Sn(() => t.paramRuntime, (e) => t.getScaleResolution(e));
			this.#t = e.allocateSetter("axisLength", 0, !0), this.#e = e.watchExpression(r.expr, () => {
				this.onDomainChanged();
			}, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			}), this.registerDisposer(() => e.dispose());
		}
	}
	get label() {
		return "axisTickSource";
	}
	async load() {
		this.ticks = null, await this.onDomainChanged();
	}
	async onDomainChanged() {
		let e = this.scaleResolution.getScale(), t = this.scaleResolution.getAxisLength(), n = this.params.axis;
		this.#t?.(t);
		let r = this.#e ? this.#e() : n.tickCount, i = Io(e, r, n.tickMinStep), a = n.values ? Lo(e, n.values, i) : Ro(e, i), o = !n.values && n.extraValues && B(e.type) ? Lo(e, n.extraValues) : [], s = o.length ? $o(a, o) : a, c = this.scaleResolution.hasConfiguredZoomExtent() ? dn(e.type, this.scaleResolution.zoomExtent) : [];
		if (this.ticks == null || !L(s, this.ticks) || !L(c, this.zoomExtentTicks)) {
			this.ticks = s, this.zoomExtentTicks = c;
			let t = Bo(e, r, n.format), i = new Set(n.values ? s : o), a = new Set(c), l = e.type == "locus" ? e.genome() : void 0;
			this.publishData([s.map((e) => {
				let n = {
					value: e,
					label: t(e),
					explicit: i.has(e),
					...a.has(e) ? { zoomExtent: !0 } : {}
				};
				if (l) {
					let t = l.toChromosome(e);
					return {
						...n,
						chromLabel: t.name
					};
				} else return n;
			})]);
		}
	}
};
function $o(e, t) {
	let n = new Set(e);
	return t.forEach((e) => n.add(e)), Array.from(n).sort((e, t) => e - t);
}
function es(e) {
	return e?.type == "axisTicks";
}
qo(es, Qo);
//#endregion
//#region ../core/src/data/sources/lazy/axisGenomeSource.js
var ts = class extends Xo {
	#e = !1;
	constructor(e, t) {
		super(t, e.channel);
	}
	get label() {
		return "axisGenomeSource";
	}
	async load() {
		this.#e = !0, this.publishData([this.genome.chromosomes]);
	}
	requestDataForDomain(e) {
		this.load();
	}
	isDataReadyForDomain(e) {
		return this.#e;
	}
};
function ns(e) {
	return e?.type == "axisGenome";
}
qo(ns, ts);
//#endregion
//#region ../core/src/view/legend/legendEntries.js
function rs(e, t = String) {
	return e.getDomain().map((e, n) => ({
		value: e,
		label: t(e),
		_legendIndex: n
	}));
}
//#endregion
//#region ../core/src/utils/suspension.js
var is = class {
	#e = 0;
	#t;
	constructor(e = () => void 0) {
		this.#t = e;
	}
	get active() {
		return this.#e > 0;
	}
	suspend() {
		this.#e += 1;
		let e = !1;
		return () => {
			e || (e = !0, --this.#e, this.#e == 0 && this.#t());
		};
	}
}, as = 5, os = "_legendSymbolSize", ss = "_legendStrokeWidth", cs = class extends Yo {
	#e = void 0;
	#t = !1;
	#n = new is(() => this.#i());
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = ls(t, e.channel), !this.scaleResolution) throw Error(`The legend entries data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#a();
		if (this.scaleResolution.addEventListener("domain", n), e.channel == "size") {
			let e = () => {
				this.#r() || (this.#e = void 0, this.#a());
			};
			this.scaleResolution.addEventListener("range", e), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("range", e));
		}
		this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	get label() {
		return "legendEntriesSource";
	}
	async load() {
		this.#r() || (this.#e = void 0, this.#a());
	}
	suspendRangeUpdates() {
		return this.params.channel == "size" ? this.#n.suspend() : () => void 0;
	}
	#r() {
		return this.params.channel != "size" || !this.#n.active || !this.#e ? !1 : (this.#t = !0, !0);
	}
	#i() {
		this.#t && (this.#t = !1, this.#e = void 0, this.#a());
	}
	#a() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !L(e, this.#e)) {
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" });
			for (let e of this.#o()) this._propagate(e);
			this.complete();
		}
	}
	#o() {
		let e = this.params.dataType == "quantitative" ? this.#c() : this.#s();
		if (this.params.channel == "size") {
			let t = this.scaleResolution.getScale();
			for (let n of e) this.params.sizeMode == "strokeWidth" ? n[ss] = t(n.value) : n[os] = t(n.value);
		}
		return e;
	}
	#s() {
		let e = this.params.format, t = e ? (t) => F(e)(Number(t)) : void 0, n = rs(this.scaleResolution, t);
		if (!this.params.values) return n;
		let r = new Map(n.map((e) => [e.value, e]));
		return this.params.values.flatMap((e) => r.has(e) ? [r.get(e)] : []);
	}
	#c() {
		let e = this.scaleResolution.getScale(), t = this.params.count ?? as, n = Bo(e, t, this.params.format);
		return (this.params.values ? Lo(e, this.params.values, t) : Ro(e, t)).flatMap((e) => {
			let t = n(e);
			return t ? [{
				value: e,
				label: t
			}] : [];
		}).map((e, t) => ({
			...e,
			_legendIndex: t
		}));
	}
};
function ls(e, t) {
	let n = e.dataParent;
	for (; n && tr(n);) n = n.dataParent;
	return n?.getScaleResolution(t) ?? e.getScaleResolution(t);
}
function us(e) {
	return e?.type == "legendEntries";
}
qo(us, cs);
//#endregion
//#region ../core/src/scale/scale.js
var ds = "locus", fs = "index", ps = 5;
function ms(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function hs(e) {
	return B(e) && ![
		"sequential",
		fs,
		ds
	].includes(e);
}
function gs(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var _s = Ee(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.fp64.name".split("."));
function vs(e, t, n, r = !1) {
	n = gs(n), ys(t, e, n);
	let i = Ts(t, e, n, r);
	i.domain && t.domain(i.domain), i.applyOrdinalUnknown && t.unknown(i.ordinalUnknown), As(t, e, ks(t, e, i.count));
}
function ys(e, t, n) {
	n = gs(n);
	for (let r in t) if (!_s[r]) {
		if (r === "padding" && hs(e.type)) continue;
		xe(e[r]) ? e[r](t[r]) : n.warn("Unsupported scale property: " + r);
	}
}
function bs(e, t) {
	As(e, t, ks(e, t, e.domain().length));
}
function xs(e, t) {
	let n = !e.domain && !e.domainRaw && B(e.type), r = n ? {
		...e,
		domain: [0, 0]
	} : e, i = Ss(r), a = cn(i);
	if (!a) throw Error("Unknown scale type: " + i);
	let o = a();
	return vs(r, o, t, n), o;
}
function Ss(e) {
	var t = e.type, n = "", r;
	return t === "sequential" ? en + "-" + Xt : (Cs(e) && (r = e.rawDomain ? e.rawDomain.length : e.domain ? e.domain.length + +(e.domainMid != null) : 0, n = r === 2 ? en + "-" : r === 3 ? an + "-" : ""), (n + t || "linear").toLowerCase());
}
function Cs(e) {
	let t = e.type;
	return B(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(Ae));
}
function ws(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function Ts(e, t, n, r = !1) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	n = gs(n);
	let i = ws(e);
	var a = Es(i, t.domainRaw, n);
	if (a > -1) return {
		domain: i.domain(),
		count: a,
		ordinalUnknown: i.type === "ordinal" && t.domainImplicit ? Ct : void 0,
		applyOrdinalUnknown: !1
	};
	var o = t.domain, s = i.type, c = t.zero || t.zero === void 0 && ms(i), l, u;
	return o ? (hs(s) && t.padding && o[0] !== Ce(o) && (o = Ds(s, o, t.range, t.padding, t.exponent, t.constant)), (c || t.domainMin != null || t.domainMax != null || t.domainMid != null) && (l = (o = o.slice()).length - 1 || 1, c && (o[0] > 0 && (o[0] = 0), o[l] < 0 && (o[l] = 0)), t.domainMin != null && (o[0] = t.domainMin), t.domainMax != null && (o[l] = t.domainMax), t.domainMid != null && (u = t.domainMid, (u < o[0] || u > o[l]) && n.warn("Scale domainMid exceeds domain min or max.", u), o.splice(l, 0, u))), i.domain(Os(s, o, n, r)), t.nice && i.nice && i.nice(t.nice !== !0 && Io(i, t.nice) || null), {
		domain: i.domain(),
		count: o.length,
		ordinalUnknown: s === "ordinal" && t.domainImplicit ? Ct : void 0,
		applyOrdinalUnknown: s === qt
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function Es(e, t, n) {
	return t ? (e.domain(Os(e.type, t, n)), t.length) : -1;
}
function Ds(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(Ce(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? ct(t, null, s) : e === "sqrt" ? Oe(t, null, s, .5) : e === "pow" ? Oe(t, null, s, i || 1) : e === "symlog" ? Me(t, null, s, a || 1) : We(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function Os(e, t, n, r = !1) {
	return Rt(e) && !r && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : +(t > 0));
	}, 0)) !== t.length && n.warn("Log scale domain includes zero: " + ge(t)), t;
}
function ks(e, t, n) {
	let r = t.bins;
	if (r && !be(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? Ce(t) : r.stop, a = r.step;
		a || S("Scale bins parameter missing step property."), r = _t(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function As(e, t, n) {
	var r = e.type, i = t.round || !1, a = t.range;
	if (t.rangeStep != null) a = js(r, t, n);
	else if (t.scheme && (a = Ms(r, t, n), xe(a))) {
		if (e.interpolator) return e.interpolator(a);
		S(`Scale type ${r} does not support interpolating color schemes.`);
	}
	if (a && ln(r)) return e.interpolator(Jt(Ps(a, t.reverse), t.interpolate, t.interpolateGamma));
	a && t.interpolate && e.interpolate ? e.interpolate(Yt(t.interpolate, t.interpolateGamma)) : xe(e.round) ? e.round(i) : xe(e.rangeRound) && e.interpolate(i ? Ft : $t), a && e.range(Ps(a, t.reverse));
}
function js(e, t, n) {
	e !== "band" && e !== "point" && S("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * tn(n, i, r)];
}
function Ms(e, t, n) {
	var r = t.schemeExtent, i = t.schemeCount, a, o;
	return be(t.scheme) ? o = Jt(t.scheme, t.interpolate, t.interpolateGamma) : (Ae(t.scheme) ? a = t.scheme.toLowerCase() : (a = t.scheme.name.toLowerCase(), r = t.scheme.extent ?? r, i = t.scheme.count ?? i), o = zt(a), o || S(`Unrecognized scheme name: ${t.scheme}`)), n = e === "threshold" ? n + 1 : e === "bin-ordinal" ? n - 1 : e === "quantile" || e === "quantize" ? +i || ps : n, ln(e) ? Ns(o, r, t.reverse) : xe(o) ? Tt(Ns(o, r), n) : e === "ordinal" ? o : o.slice(0, n);
}
function Ns(e, t, n) {
	return xe(e) && (t || n) ? Kt(e, Ps(t || [0, 1], n)) : e;
}
function Ps(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region ../core/src/data/sources/lazy/legendGradientSource.js
var Fs = 64, Is = 5;
function Ls(e, t, n) {
	let r = Rs(e, t, n), i = zs(r.length);
	if ("copy" in e && typeof e.copy == "function" && "invert" in e && typeof e.invert == "function") {
		let t = e.copy();
		return t.domain(r), t.range(i), t;
	}
	let a = e.props, o = a?.type;
	if (o) {
		let e = { ...a }, t = e;
		delete e.range, delete e.scheme, delete t.domainMin, delete t.domainMid, delete t.domainMax, delete t.schemeExtent, delete t.schemeCount;
		let n = xs({
			...e,
			type: o,
			domain: r,
			range: i,
			zero: !1,
			nice: !1
		});
		if ("invert" in n && typeof n.invert == "function") return n;
	}
	return Vs(t, n);
}
function Rs(e, t, n) {
	if ("domain" in e && typeof e.domain == "function") {
		let r = e.domain().map(Ws);
		if (r.length >= 2) return [
			t,
			...r.slice(1, -1),
			n
		];
	}
	return [t, n];
}
function zs(e) {
	let t = e - 1;
	return Array.from({ length: e }, (e, n) => n / t);
}
function Bs(e, t) {
	return (n) => e + (t - e) * n;
}
function Vs(e, t) {
	let n = ((n) => (n - e) / (t - e));
	return n.invert = Bs(e, t), n;
}
function Hs(e) {
	let t = e[0], n = e.at(-1), r = n - t, i = e.length - 1, a = i ? r / i : .1;
	return [t - a, n + a];
}
function Us(e) {
	return e.type == "quantize" && "range" in e && typeof e.range == "function" && "invertExtent" in e && typeof e.invertExtent == "function" && "thresholds" in e && typeof e.thresholds == "function";
}
function Ws(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
var Gs = class extends Yo {
	#e = void 0;
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = ls(t, e.channel), !this.scaleResolution) throw Error(`The gradient legend data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#t();
		this.scaleResolution.addEventListener("domain", n), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	async load() {
		this.#e = void 0, this.#t();
	}
	#t() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !L(e, this.#e)) {
			let t = Number(e[0]), n = Number(e.at(-1));
			if (!Number.isFinite(t) || !Number.isFinite(n)) throw Error("Gradient legends require a finite numeric scale domain.");
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" }), this.publishData(t, n), this.complete();
		}
	}
	publishData(e, t) {
		throw Error("Gradient legend data source must implement publishData.");
	}
}, Ks = class extends Gs {
	get label() {
		return "legendGradientSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale();
		if (n.type == "threshold") {
			this.#t();
			return;
		} else if (Us(n)) {
			this.#e(e, t, n);
			return;
		}
		let r = this.params.count ?? Fs, i = Ls(n, e, t), a = (e) => i.invert(e);
		for (let e = 0; e < r; e++) {
			let t = e / r, n = (e + 1) / r, i = (e + .5) / r;
			this._propagate({
				position0: t,
				position1: n,
				position: i,
				value: a(i),
				_legendGradientIndex: e
			});
		}
	}
	#e(e, t, n) {
		let r = Vs(e, t);
		for (let [e, t] of n.range().entries()) {
			let [i, a] = n.invertExtent(t).map(Ws), o = (i + a) / 2;
			this._propagate({
				position0: r(i),
				position1: r(a),
				position: r(o),
				value: o,
				_legendGradientIndex: e
			});
		}
	}
	#t() {
		let e = this.scaleResolution.getDomain().map(Number), [t, n] = Hs(e), r = Vs(t, n), i = [
			t,
			...e,
			n
		];
		for (let e = 0; e < i.length - 1; e++) {
			let t = i[e], n = i[e + 1], a = (t + n) / 2;
			this._propagate({
				position0: r(t),
				position1: r(n),
				position: r(a),
				value: a,
				_legendGradientIndex: e
			});
		}
	}
}, qs = class extends Gs {
	get label() {
		return "legendGradientTicksSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale(), r = n.type == "threshold" ? Hs(this.scaleResolution.getDomain().map(Number)) : [e, t], i = Ls(n, r[0], r[1]), a = this.params.count ?? Is, o = Io(n, a, void 0), s = Bo(n, a, this.params.format), c = this.params.values ? this.params.values.map(Ws).filter((e) => {
			let t = i(e);
			return Number.isFinite(t) && t >= 0 && t <= 1;
		}) : Us(n) ? n.thresholds().map(Ws) : Ro(n, o).map(Ws);
		for (let e of c) {
			let t = s(e);
			t && this._propagate({
				value: e,
				position: i(e),
				label: t
			});
		}
	}
};
function Js(e) {
	return e?.type == "legendGradient";
}
function Ys(e) {
	return e?.type == "legendGradientTicks";
}
qo(Js, Ks), qo(Ys, qs);
//#endregion
//#region ../core/src/data/sources/urlDescriptor.js
var Xs = class extends Error {
	count;
	maxValues;
	constructor(e, t) {
		super(`URL expansion resolved ${e} distinct values, exceeding maxValues ${t}.`), this.name = "UrlLimitExceededError", this.count = e, this.maxValues = t;
	}
};
async function Zs(e) {
	return lc(ic(e.url, e).map((t) => ({
		...t,
		url: In(e.baseUrl, t.url),
		indexUrl: t.indexUrl ? In(e.baseUrl, t.indexUrl) : void 0
	})), pc(e.url));
}
function Qs(e) {
	return dc(e) && I(e.values) ? [{
		key: "url",
		expr: e.values
	}] : [];
}
function $s(e) {
	if (!e) return (e) => e;
	let t = Object.entries(e);
	if (t.length == 1) {
		let [e, n] = t[0];
		return (t) => {
			if (e in t && t[e] !== n) throw Error(`Descriptor field "${e}" conflicts with loaded datum.`);
			return t[e] = n, t;
		};
	}
	return (e) => {
		for (let [n, r] of t) if (n in e && e[n] !== r) throw Error(`Descriptor field "${n}" conflicts with loaded datum.`);
		for (let [n, r] of t) e[n] = r;
		return e;
	};
}
function ec(e, t) {
	if (!t) return e;
	let n = $s(t);
	for (let t = 0; t < e.length; t++) e[t] = n(e[t]);
	return e;
}
function tc(e, t) {
	return e.onLoadError == "skip" ? (console.warn(`Skipping failed URL: ${e.url}`, t), !0) : !1;
}
async function nc(e, t) {
	try {
		return await t();
	} catch (t) {
		if (tc(e, t)) return;
		throw t;
	}
}
function rc(e) {
	return JSON.stringify({
		url: e.url,
		indexUrl: e.indexUrl,
		fields: e.fields ? Object.fromEntries(Object.entries(e.fields).sort()) : void 0
	});
}
function ic(e, t) {
	if (dc(e)) return ac(e, t.indexUrl, t);
	let n = oc(e, t), r = oc(t.indexUrl, t);
	return (Array.isArray(n) ? n : [n]).map((e) => {
		let t = sc(e);
		return typeof r == "string" && !t.indexUrl ? {
			...t,
			indexUrl: r
		} : t;
	});
}
function ac(e, t, n) {
	let r = oc(e.values, n);
	if (!Array.isArray(r)) throw Error("URL template values must resolve to an array.");
	return r.map((n) => {
		let r = uc(n), i = e.attach === !1 ? void 0 : { [e.field]: r };
		return {
			url: cc(e.template, e.field, r),
			indexUrl: fc(t) ? cc(t.template, e.field, r) : c(t),
			fields: i,
			onLoadError: e.onLoadError
		};
	});
}
function oc(e, t) {
	return I(e) ? mc(t).createExpression(e.expr)() : e;
}
function sc(e) {
	if (typeof e == "string") return { url: e };
	if (e && typeof e == "object" && "url" in e && typeof e.url == "string") return e;
	throw Error("URL descriptor must be a string or an object with url.");
}
function cc(e, t, n) {
	let r = "{" + t + "}";
	if (!e.includes(r)) throw Error(`URL template must contain ${r}.`);
	return e.replaceAll(r, encodeURIComponent(String(n)));
}
function lc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.url + "\n" + (t.indexUrl ?? "");
		n.has(e) || n.set(e, t);
	}
	let r = Array.from(n.values());
	if (t !== void 0 && r.length > t) throw new Xs(r.length, t);
	return r;
}
function uc(e) {
	if (e == null || typeof e == "object" || typeof e == "function") throw Error("URL template values must be scalar in this version.");
	return e;
}
function dc(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function fc(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function pc(e) {
	return dc(e) ? e.maxValues : void 0;
}
function mc(e) {
	if (!e.paramRuntime) throw Error("URL ExprRef evaluation requires a parameter runtime.");
	return e.paramRuntime;
}
//#endregion
//#region ../core/src/utils/debounce.js
function hc(e, t, n = !0) {
	let r, i = (e) => void 0;
	return function(...a) {
		return new Promise((o, s) => {
			n && i("debounced"), clearTimeout(r), i = s, r = setTimeout(() => {
				clearTimeout(r), i = (e) => void 0, o(e(...a));
			}, typeof t == "function" ? t() : t);
		});
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/intervalUrlSource.js
var gc = class extends Xo {
	#e = new AbortController();
	#t = /* @__PURE__ */ new Map();
	#n = [0, 0];
	#r = 0;
	#i;
	#a = (e, t) => this.requestInterval(e, t);
	params;
	#o;
	constructor(e, t) {
		super(e, t), this.registerDisposer(() => {
			this.#e.abort(), this.#t.clear();
		});
	}
	setupUrlLoading(e) {
		this.#o = e;
		let t = () => c(this.params.debounce), n = this.params.debounceMode;
		if (n == "domain") this.onDomainChanged = hc(this.onDomainChanged.bind(this), t, !1);
		else if (n == "window") this.#a = hc(this.#a, t, !1);
		else throw Error("Invalid debounceMode: " + n);
	}
	reloadUrlDescriptors() {
		this.#e.abort(), this.#n = [0, 0], this.#r = 0, this.invalidateData(), this.setLoadingStatus("loading"), this.onDomainChanged(this.scaleResolution.getDomain());
	}
	reloadLastDomain() {
		this.#e.abort(), this.#n = [0, 0], this.#r = 0, this._lastLoadedDomain = void 0, this.onDomainChanged(this.#i ?? this.scaleResolution.getDomain());
	}
	requestDataForDomain(e) {
		this.#i = e, this.reloadLastDomain();
	}
	onDomainChanged(e) {
		this.#i = e;
		let t = c(this.params.windowSize) ?? -1;
		if (e[1] - e[0] <= t) {
			let n = this.getChangedWindow(e, t);
			n && this.#a(n, t);
		}
	}
	queueDomain(e) {
		this.#i = e, this.#a(e);
	}
	async requestInterval(e, t) {
		if (this.disposed) return;
		this.#e.abort(), this.#e = new AbortController();
		let n = this.#e.signal;
		this.setLoadingStatus("loading");
		try {
			let r = await this.#s(n);
			if (n.throwIfAborted(), !r.length) this.#u([], e, r, t);
			else {
				let i = await this.loadWindow(e, r, n);
				if (n.throwIfAborted(), i) {
					let e = i.windowSize ?? t;
					this.#u(i.data, i.interval, r, e);
				}
			}
			n.aborted || this.setLoadingStatus("complete");
		} catch (e) {
			if (n.aborted) return;
			this._lastLoadedDomain = void 0, this.setLoadingStatus("error", e.message);
		}
	}
	async loadWindow(e, t, n) {}
	publishInterval(e, t, n) {
		this.publishData(e, t);
	}
	async discretizeAndLoad(e, t, n) {
		let r = this.genome.continuousToDiscreteChromosomeIntervals(e), i = typeof t == "function" ? { load: t } : t, a = i.loadBatch ? await i.loadBatch(r, n) : await Promise.all(r.map((e) => i.load(e, n)));
		if (a.length !== r.length) throw Error("Batched lazy loader must return one chunk per interval.");
		return a;
	}
	getChangedWindow(e, t) {
		let n = [Math.max(Math.floor(e[0] / t) * t, 0), Math.min(Math.ceil(e[1] / t) * t, this.genome.totalSize)], r = this.#n;
		return t !== this.#r || n[0] < r[0] || n[1] > r[1] ? n : void 0;
	}
	async #s(e) {
		let t = await this.#l();
		if (e.throwIfAborted(), !t.length) return [];
		let n = await this.#o.loadModules();
		return e.throwIfAborted(), (await Promise.all(t.map((e) => nc(e, () => this.#c(e, n))))).filter((e) => e !== void 0);
	}
	#c(e, t) {
		let n = this.#o.cacheKey?.(e) ?? rc(e), r = this.#t.get(n);
		return r || (r = this.#o.createHandle(e, t).catch((e) => {
			throw this.#t.delete(n), e;
		}), this.#t.set(n, r)), r;
	}
	async #l() {
		let e = {
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		};
		try {
			let t = await Zs(e);
			if (this.#o.singleUrl && t.length !== 1) throw Error(`Data source "${this.label}" supports exactly one resolved URL.`);
			return t;
		} catch (e) {
			if (e instanceof Xs) return [];
			throw e;
		}
	}
	#u(e, t, n, r) {
		this._lastLoadedDomain = Array.from(t), this.#n = Array.from(t), r !== void 0 && (this.#r = r);
		try {
			this.publishInterval(e, t, n);
		} catch (e) {
			throw this._lastLoadedDomain = void 0, e;
		}
	}
}, _c = class extends gc {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 7e3,
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, c(n.channel)), this.params = ut(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Qs(n.url)), !this.params.url) throw Error("No URL provided for IndexedFastaSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: vc,
			createHandle: async (e, { IndexedFasta: t, RemoteFile: n }) => new t({
				fasta: new n(e.url),
				fai: new n(e.indexUrl ?? e.url + ".fai")
			})
		});
	}
	get label() {
		return "indexedFastaSource";
	}
	async loadWindow(e, t, n) {
		let r = t[0];
		return {
			interval: e,
			data: [(await this.discretizeAndLoad(e, async (e, t) => r.getSequence(e.chrom, e.startPos, e.endPos, { signal: t }).then((t) => {
				if (t != null) return {
					chrom: e.chrom,
					start: e.startPos,
					sequence: t
				};
				console.log(`No sequence found for interval ${e.chrom}:${e.startPos}-${e.endPos}`);
			}), n)).filter((e) => e !== void 0)]
		};
	}
};
async function vc() {
	let [{ IndexedFasta: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CcylTaSF.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		IndexedFasta: e,
		RemoteFile: t
	};
}
function yc(e) {
	return e?.type == "indexedFasta";
}
qo(yc, _c);
//#endregion
//#region ../core/src/data/sources/lazy/bigWigSource.js
var bc = class extends gc {
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = c(n.channel);
		if (super(t, r), this.params = ut(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Qs(n.url)), !this.params.url) throw Error("No URL provided for BigWigSource");
		this.setupUrlLoading({
			loadModules: Sc,
			createHandle: (e, { BigWig: t, RemoteFile: n }) => this.#e(e, t, n)
		});
	}
	get label() {
		return "bigWigSource";
	}
	async #e(e, t, n) {
		let r = new t({ filehandle: new n(e.url) }), i = (await r.getHeader()).zoomLevels.map((e) => e.reductionLevel).reverse();
		return i.push(1), {
			bbi: r,
			attachFields: $s(e.fields),
			reductionLevels: i,
			url: e.url
		};
	}
	onDomainChanged(e) {
		this.queueDomain(e);
	}
	async loadWindow(e, t, n) {
		let r = this.scaleResolution.getAxisLength() || 700, i = t.map((t) => wc(e, r, t.reductionLevels)), a = Math.max(...i.map((e) => e * r), 5e3), o = this.getChangedWindow(e, a);
		if (o) return {
			interval: o,
			windowSize: a,
			data: await this.discretizeAndLoad(o, {
				load: (e, n) => this.#t(e, t, i, n),
				loadBatch: (e, n) => this.#n(e, t, i, n)
			}, n)
		};
	}
	async #t(e, t, n, r) {
		return (await Promise.all(t.map((t, i) => {
			let a = Tc(n[i], c(this.params.pixelsPerBin));
			return t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, {
				scale: a,
				signal: r
			}).then((n) => Cc(e.chrom, n, t.attachFields));
		}))).flat();
	}
	async #n(e, t, n, r) {
		let i = await Promise.all(t.map((t, i) => {
			let a = Tc(n[i], c(this.params.pixelsPerBin));
			return t.bbi.getFeaturesMulti(e.map((e) => ({
				refName: e.chrom,
				start: e.startPos,
				end: e.endPos
			})), {
				scale: a,
				signal: r
			}).then((n) => n.map((n, r) => Cc(e[r].chrom, n, t.attachFields)));
		}));
		return e.map((e, t) => i.flatMap((e) => e[t]));
	}
};
function xc(e) {
	return e?.type == "bigwig";
}
qo(xc, bc);
async function Sc() {
	let [{ BigWig: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CkwcW56F.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		BigWig: e,
		RemoteFile: t
	};
}
function Cc(e, t, n) {
	return t.map((t) => n({
		chrom: e,
		start: t.start,
		end: t.end,
		score: t.score
	}));
}
function wc(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
function Tc(e, t) {
	return 1 / 2 / e / t;
}
//#endregion
//#region ../core/src/data/sources/lazy/bigBedSource.js
var Ec = class extends gc {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = c(n.channel);
		if (super(t, r), this.params = ut(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Qs(n.url)), !this.params.url) throw Error("No URL provided for BigBedSource");
		this.setupUrlLoading({
			loadModules: kc,
			createHandle: (e, { BigBed: t, RemoteFile: n, BED: r }) => this.#e(e, t, n, r)
		});
	}
	get label() {
		return "bigBedSource";
	}
	async #e(e, t, n, r) {
		let i = new t({ filehandle: new n(e.url) }), a = new r({ autoSql: (await i.getHeader()).autoSql }), o;
		try {
			let e = Dc(a);
			o = (t, n) => e(t, n.start, n.end, n.rest);
		} catch {
			o = (e, t) => a.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
		}
		return {
			attachFields: $s(e.fields),
			bbi: i,
			parseLine: o,
			url: e.url
		};
	}
	async loadWindow(e, t, n) {
		return {
			interval: e,
			data: await this.discretizeAndLoad(e, async (e, n) => (await Promise.all(t.map((t) => t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, { signal: n }).then((n) => n.map((n) => t.attachFields(t.parseLine(e.chrom, n))))))).flat(), n)
		};
	}
};
function Dc(e) {
	let t = e.autoSql.fields.filter((e) => e.type).slice(3), n = 0, r = "", i = 0, a = {};
	function o() {
		let e = r.indexOf("	", n);
		e < 0 && (e = i);
		let t = r.substring(n, e);
		return n = e + 1, t;
	}
	function s() {
		let e = 0, t = r.charCodeAt(n), a = 1;
		t === 45 && (a = -1, n++, t = r.charCodeAt(n));
		do {
			if (t === 9) {
				n++;
				break;
			}
			e = e * 10 + t - 48, t = r.charCodeAt(++n);
		} while (n < i);
		return e * a;
	}
	let c = t.map((e) => `${JSON.stringify(e.name)}: ${e.isNumeric ? "0" : "emptyString"}`), l = Function(`
        const emptyString = "";
        return function makeTemplate(chrom, chromStart, chromEnd) {
            return {
                chrom,
                chromStart,
                chromEnd,
                ${c.join(",\n")}
            }
        };`)(), u = Ac(t.map((e) => {
		let t = e.type, n = JSON.stringify(e.name);
		if ([
			"ubyte",
			"int",
			"uint"
		].includes(t)) return `d[${n}] = parseInt();`;
		if (e.isNumeric) return `d[${n}] = Number(parseString());`;
		if ([
			"char",
			"string",
			"lstring"
		].includes(t)) return `d[${n}] = parseString();`;
		throw Error("Unsupported type: " + t);
	}), 50).map((e, t) => Function("parseInt", "parseString", `return function parseFieldChunk${t}(d) {
            ${e.join("\n")}
        }`)(s, o));
	function d(e) {
		r = e, i = e.length, n = 0;
	}
	function f(e, t, n, r) {
		d(r), a = l(e, t, n);
		for (let e of u) e(a);
		return a;
	}
	return f;
}
function Oc(e) {
	return e?.type == "bigbed";
}
qo(Oc, Ec);
async function kc() {
	let [e, { BigBed: t }, { RemoteFile: n }] = await Promise.all([
		import("./esm-D-iG_TIX.js"),
		import("./esm-CkwcW56F.js"),
		import("./browser-kyCRRjQB.js").then((e) => e.n)
	]);
	return {
		BigBed: t,
		RemoteFile: n,
		BED: e.default
	};
}
function Ac(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region ../core/src/data/sources/lazy/bamSource.js
var jc = class extends gc {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		}, r = c(n.channel);
		if (super(t, r), this.params = ut(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Qs(n.url)), !this.params.url) throw Error("No URL provided for BamSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: Mc,
			createHandle: (e, { BamFile: t, RemoteFile: n }) => this.#e(e, t, n)
		});
	}
	get label() {
		return "bamSource";
	}
	async #e(e, t, n) {
		let r = new t({
			bamFilehandle: new n(e.url),
			baiFilehandle: new n(e.indexUrl ?? e.url + ".bai")
		});
		await r.getHeader();
		let i = this.genome.hasChrPrefix(), a = r.indexToChr?.[0]?.refName.startsWith("chr");
		return {
			bam: r,
			fixChrPrefix: i && !a ? (e) => e.replace("chr", "") : !i && a ? (e) => "chr" + e : (e) => e
		};
	}
	async loadWindow(e, t, n) {
		let r = t[0];
		return {
			interval: e,
			data: await this.discretizeAndLoad(e, async (e, t) => r.bam.getRecordsForRange(r.fixChrPrefix(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => Pc(e.chrom, t))), n)
		};
	}
};
async function Mc() {
	let [{ BamFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-DzVhgwiP.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		BamFile: e,
		RemoteFile: t
	};
}
function Nc(e) {
	return e?.type == "bam";
}
qo(Nc, jc);
function Pc(e, t) {
	return {
		chrom: e,
		start: t.start,
		end: t.end,
		name: t.name,
		cigar: t.CIGAR || "*",
		mapq: t.mq,
		strand: t.strand === 1 ? "+" : "-",
		seq: t.seq,
		qual: t.qual ? Array.from(t.qual) : void 0,
		md: t.getTag("MD"),
		flags: t.flags,
		isPaired: t.isPaired(),
		isProperPair: t.isProperlyPaired(),
		isDuplicate: t.isDuplicate(),
		isQcFail: t.isFailedQc(),
		isSecondary: t.isSecondary(),
		isSupplementary: t.isSupplementary()
	};
}
//#endregion
//#region ../core/src/data/sources/inlineSource.js
function Fc(e) {
	return "values" in e;
}
var Ic = class extends Yo {
	constructor(e, t) {
		if (super(t), this.params = e, typeof e.values == "string" && !e?.format?.type) throw Error("Data format type (csv, dsv, ...) must be specified if a string is provided!");
	}
	get label() {
		return "inlineSource";
	}
	isTrivial() {
		let e = this.params.values, t = Array.isArray(e) ? e[0] : e;
		return !!(t && Object.keys(t).length == 0 && t.constructor === Object);
	}
	updateDynamicData(e) {
		this.#e(e);
	}
	loadSynchronously() {
		this.#e(this.params.values);
	}
	#e(e) {
		let t = [], n = (e) => e;
		if (Array.isArray(e)) e.length > 0 && (t = e, n = Gc(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = Xa(e, Bc(zc(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Lc = /* @__PURE__ */ new Set([
	"csv",
	"tsv",
	"dsv"
]), Rc = /* @__PURE__ */ new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function zc(e, t = []) {
	if (!Fc(e) && !Xc(e)) return;
	let n = { ...e.format };
	if (n.type ??= Xc(e) && Hc(t), n.parse === void 0 && Zc(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function Bc(e) {
	let t = { ...e };
	return (Jc(t) || Yc(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function Vc(e) {
	return Ya(e)?.responseType ?? "text";
}
function Hc(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = Wc(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && Rc.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && Ya(r)) return r;
	}
}
function Uc(e) {
	let t = Wc(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && Rc.has(n);
}
function Wc(e) {
	return e.replace(/[?#].*$/, "");
}
var Gc = (e) => typeof e == "object" ? qc : Kc, Kc = (e) => ({ data: e }), qc = (e) => e;
function Jc(e) {
	return e.type == "csv" || e.type == "tsv";
}
function Yc(e) {
	return e.type == "dsv";
}
function Xc(e) {
	return "url" in e;
}
function Zc(e) {
	return Lc.has(e);
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixSource.js
var Qc = class extends gc {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = c(n.channel);
		if (super(t, r), this.params = ut(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Qs(n.url)), !c(this.params.url)) throw Error("No URL provided for TabixSource");
		this.setupUrlLoading({
			cacheKey: (e) => rc(e) + "\n" + c(this.params.addChrPrefix),
			loadModules: async () => {
				let { TabixIndexedFile: e, RemoteFile: t } = await $c(), n = c(this.params.addChrPrefix);
				return {
					TabixIndexedFile: e,
					RemoteFile: t,
					renameRefSeqs: n === !0 ? (e) => "chr" + e : n ? (e) => n + e : void 0
				};
			},
			createHandle: (e, { TabixIndexedFile: t, RemoteFile: n, renameRefSeqs: r }) => this.#e(e, t, n, r)
		});
	}
	async #e(e, t, n, r) {
		let i = new t({
			filehandle: new n(e.url),
			tbiFilehandle: new n(e.indexUrl ?? e.url + ".tbi"),
			renameRefSeqs: r
		}), a = await i.getHeader();
		return {
			tbiIndex: i,
			fields: e.fields,
			parserContext: await this._createParser(a, i),
			url: e.url
		};
	}
	async loadWindow(e, t, n) {
		return {
			interval: e,
			data: await this.discretizeAndLoad(e, async (e, n) => await Promise.all(t.map(async (t) => {
				let r = [];
				return await t.tbiIndex.getLines(e.chrom, e.startPos, e.endPos, {
					lineCallback: (e) => {
						r.push(e);
					},
					signal: n
				}), [t, ec(this._parseFeatures(r, t.parserContext), t.fields)];
			})), n)
		};
	}
	publishInterval(e, t, n) {
		this.#t(n, e);
	}
	async _createParser(e, t) {}
	async _readFilePrefix(e) {
		let { maxBlockSize: t } = await e.getMetadata(), n = await e.filehandle.read(t, 0), { unzip: r } = await import("./esm-BA6yMcc-.js").then((e) => e.t), i = await r(n);
		return new TextDecoder("utf-8").decode(i);
	}
	_parseFeatures(e, t) {
		return [];
	}
	#t(e, t) {
		this.reset();
		for (let [n, r] of e.entries()) {
			this.beginBatch({
				type: "file",
				url: r.url
			});
			for (let e of t) {
				let [t, i] = e[n];
				if (t !== r) throw Error("Tabix feature chunks are out of order.");
				for (let e of i) this._propagate(e);
			}
		}
		this.complete();
	}
};
async function $c() {
	let [{ TabixIndexedFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-C4UgxbPA.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		TabixIndexedFile: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixTsvSource.js
function el(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function tl(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function nl(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = Xa(e.join("\n"), Bc(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var rl = class extends Qc {
	get label() {
		return "tabixSource";
	}
	async _createParser(e, t) {
		let n = this.params, r = c(n.columns) ?? el(e);
		if (r?.length || (r = tl(await this._readFilePrefix(t))), !r?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
		return r;
	}
	_parseFeatures(e, t) {
		let n = this.params;
		return nl(e, t ?? [], c(n.parse));
	}
};
function il(e) {
	return e?.type == "tabix";
}
qo(il, rl);
//#endregion
//#region ../core/src/data/sources/lazy/gff3Source.js
var al = class extends Qc {
	get label() {
		return "gff3Source";
	}
	async _createParser(e) {
		return await import("./esm-BdLYkz-m.js");
	}
	_parseFeatures(e, t) {
		return t.parseStringSync(e.join("\n"));
	}
};
function ol(e) {
	return e?.type == "gff3";
}
qo(ol, al);
//#endregion
//#region ../core/src/data/sources/lazy/vcfSource.js
var sl = class extends Qc {
	get label() {
		return "vcfSource";
	}
	async _createParser(e) {
		return await jo(e);
	}
	_parseFeatures(e, t) {
		return No(e, t);
	}
};
function cl(e) {
	return e?.type == "vcf";
}
//#endregion
//#region ../core/src/rendering/registerWebGL.js
qo(cl, sl), lr.canvasBackend = async (e) => {
	let { createCanvas2DRenderingBackend: t } = await import("./canvas2d-DhQ8eW4A.js");
	return t(e);
}, lr.canvasRasterExport = () => import("./rasterExport-BImWbs27.js"), lr.canvasSvgRasterizer = () => import("./svgRasterizer-C53QUe37.js"), lr.svgRenderer = () => import("./svg-Ag36-h_I.js"), lr.webglBackend = async (e) => {
	let { createWebGLRenderingBackend: t } = await import("./webgl-D3TDN13Z.js");
	return t(e);
};
//#endregion
//#region ../core/src/data/dataReadiness.js
function* ll(e) {
	let t = [e], n = /* @__PURE__ */ new Set();
	for (; t.length;) {
		let e = t.pop();
		n.has(e) || (n.add(e), yield e, e.parent && t.push(e.parent), t.push(...e.dataDependencies));
	}
}
function ul(e, t) {
	for (let n of ll(e)) if (!n.isDataReady() || t && "isDataReadyForDomain" in n && !n.isDataReadyForDomain(t)) return !1;
	return !0;
}
//#endregion
//#region ../core/src/styles/genome-spy.css.js
var dl = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.gs-tooltip {\nposition: fixed;\ninset: auto;\nmargin: 0;\nborder: 0;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: #f6f6f6;\nbackground: var(--background-color);\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid black;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, black 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\n&:first-child {\nmargin-top: 0;\n}\n\nborder-collapse: collapse;\n\nth,\ntd {\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px white;\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid black;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: #e0e0e0;\n}\n}\n\n.autoscroll-container {\nmax-height: min(40em, 50vh);\noverflow-x: hidden;\noverflow-y: auto;\npadding-right: var(--genome-spy-basic-spacing);\nmargin-right: calc(-1 * var(--genome-spy-basic-spacing));\n}\n\n.na {\ncolor: #aaa;\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\n}\n}\n}\n", fl = "gs-suppress-tooltip", pl = "gs-freeze-interaction", ml = "gs-tooltip", hl = class {
	#e = !1;
	#t = !0;
	#n = void 0;
	#r = 0;
	#i = void 0;
	#a = 0;
	#o;
	#s = !1;
	#c = [!0];
	constructor(e) {
		this.#o = document.createElement("div"), this.#o.className = ml, this.#o.setAttribute("popover", "manual"), e.appendChild(this.#o), this.clear();
	}
	set sticky(e) {
		!e && this.#e && this.clear(), this.#e = e, this.#o.classList.toggle("sticky", this.#e);
	}
	get sticky() {
		return this.#e;
	}
	set visible(e) {
		e != this.#t && (this.#o.style.display = e ? null : "none", this.#l(e), this.#t = e);
	}
	get visible() {
		return this.#t;
	}
	get enabled() {
		return Fe(this.#c) ?? !0;
	}
	containsEvent(e) {
		return e.composedPath().includes(this.#o);
	}
	pushEnabledState(e) {
		this.#c.push(e), e || (this.visible = !1);
	}
	popEnabledState() {
		this.#c.pop();
	}
	handleMouseMove(e) {
		if (this.#e) return;
		this.mouseCoords = [e.clientX, e.clientY];
		let t = performance.now();
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && _l(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 10;
		n > window.innerWidth - 10 - this.#o.offsetWidth && (n = e - 10 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 10, window.innerHeight - 10 - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		if (!this.#e) {
			if (!e || !this.enabled || this._isPenalty()) {
				this.visible &&= (Ci("", this.#o), !1), this.#n = void 0;
				return;
			}
			Ci(e, this.#o), this.#o.querySelectorAll(".autoscroll-container").forEach(gl), this.visible = !0, this.updatePlacement();
		}
	}
	clear() {
		this.#n = void 0, this.setContent(void 0);
	}
	updateWithDatum(e, t) {
		if (e !== this.#n) {
			this.#n = e, t ||= (e) => Promise.resolve(G` ${JSON.stringify(e)} `);
			let n = e;
			t(e).then((e) => {
				this.#n === n && this.setContent(e);
			}).catch((e) => {
				if (e !== "debounced") throw e;
			});
		}
	}
	_isPenalty() {
		return this.#r && this.#r > performance.now();
	}
	#l(e) {
		e != this.#s && (e && this.#o.showPopover ? this.#o.showPopover() : !e && this.#o.hidePopover && this.#o.hidePopover(), this.#s = e);
	}
};
function gl(e) {
	e && queueMicrotask(() => {
		e.querySelector("tr.hovered")?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	});
}
function _l(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region ../core/src/genomeSpy/containerUi.js
function vl(e) {
	e.classList.add("genome-spy");
	let t = document.createElement("style");
	t.innerHTML = dl, e.appendChild(t);
	let n = bl("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: bl("div", { class: "loading-indicators" }),
		tooltip: new hl(e),
		styleElement: t
	};
}
function yl(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	r.textContent = t, n.appendChild(r), e.appendChild(n);
}
function bl(e, t) {
	let n = document.createElement(e);
	for (let [e, r] of Object.entries(t)) [
		"innerHTML",
		"innerText",
		"className"
	].includes(e) && (n[e] = r), n.setAttribute(e, r);
	return n;
}
//#endregion
//#region ../../node_modules/lit-html/directive.js
var xl = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Sl = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Cl = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, wl = "important", Tl = " !important", El = Sl(class extends Cl {
	constructor(e) {
		if (super(e), e.type !== xl.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return Object.keys(e).reduce((t, n) => {
			let r = e[n];
			return r == null ? t : t + `${n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
		}, "");
	}
	update(e, [t]) {
		let { style: n } = e.element;
		if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
		for (let e of this.ft) t[e] ?? (this.ft.delete(e), e.includes("-") ? n.removeProperty(e) : n[e] = null);
		for (let e in t) {
			let r = t[e];
			if (r != null) {
				this.ft.add(e);
				let t = typeof r == "string" && r.endsWith(Tl);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? wl : "") : n[e] = r;
			}
		}
		return si;
	}
}), Dl = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", Ol = class {
	#e;
	#t;
	#n = null;
	constructor(e, t) {
		this.#e = e, this.#t = t, this.#n = this.#t.subscribe(() => this.updateLayout()), this.updateLayout();
	}
	destroy() {
		this.#n &&= (this.#n(), null);
	}
	updateLayout() {
		let e = [], t = () => {
			for (let [, e] of this.#t.entries()) if (e.status == "loading" || e.status == "error") return !0;
			return !1;
		}, n, r = !1;
		for (let [t, i] of this.#t.entries()) {
			let a = i.status == "loading" || i.status == "error", o = t.coords;
			if (!o && a && !n && (n = i), o) {
				a && (r = !0);
				let t = {
					left: `${o.x}px`,
					top: `${o.y}px`,
					width: `${o.width}px`,
					height: `${o.height}px`
				};
				e.push(G`<div style=${El(t)}>
                        <div class=${i.status}>
                            ${i.status == "error" ? G`<span
                                      >Loading
                                      failed${i.detail ? G`: ${i.detail}` : K}</span
                                  >` : G`
                                      <img src="${Dl}" alt="" />
                                      <span>Loading...</span>
                                  `}
                        </div>
                    </div>`);
			}
		}
		n && !r && e.push(G`<div style=${El({
			left: "0px",
			top: "0px",
			width: "100%",
			height: "100%"
		})}>
                    <div class=${n.status}>
                        ${n.status == "error" ? G`<span
                                  >Loading
                                  failed${n.detail ? G`: ${n.detail}` : K}</span
                              >` : G`
                                  <img src="${Dl}" alt="" />
                                  <span>Loading...</span>
                              `}
                    </div>
                </div>`), t() ? this.#e.style.display = "block" : setTimeout(() => {
			t() || (this.#e.style.display = "none");
		}, 3e3), Ci(e, this.#e);
	}
}, kl = class {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Set();
	set(e, t, n) {
		if (!e) throw Error("LoadingStatusRegistry.set requires a view.");
		this.#e.set(e, {
			status: t,
			detail: n
		});
		let r = {
			view: e,
			status: t,
			detail: n
		};
		for (let e of this.#t) e(r);
	}
	delete(e) {
		let t = this.#e.get(e);
		if (!t) return;
		this.#e.delete(e);
		let n = {
			view: e,
			status: t.status,
			detail: t.detail
		};
		for (let e of this.#t) e(n);
	}
	get(e) {
		return this.#e.get(e);
	}
	entries() {
		return this.#e.entries();
	}
	subscribe(e) {
		return this.#t.add(e), () => {
			this.#t.delete(e);
		};
	}
};
//#endregion
//#region ../core/src/genomeSpy/viewHighlight.js
function Al(e) {
	return (t) => {
		if (e.querySelector(".view-highlight")?.remove(), t) {
			if (!t.isVisible()) return;
			let n = t.coords;
			if (n) {
				let t = document.createElement("div");
				t.className = "view-highlight", t.style.position = "absolute", t.style.left = n.x + "px", t.style.top = n.y + "px", t.style.width = n.width + "px", t.style.height = n.height + "px", t.style.border = "1px solid green", t.style.backgroundColor = "rgba(0, 255, 0, 0.05)", t.style.pointerEvents = "none", e.appendChild(t);
			}
		}
	};
}
//#endregion
//#region ../core/src/genomeSpy/keyboardListenerManager.js
var jl = class {
	#e;
	constructor() {
		this.#e = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		document.addEventListener(e, t);
		let n = this.#e.get(e);
		n || (n = [], this.#e.set(e, n)), n.push(t);
	}
	removeAll() {
		for (let [e, t] of this.#e) for (let n of t) document.removeEventListener(e, n);
		this.#e.clear();
	}
}, Ml = class {
	#e;
	constructor() {
		this.#e = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		let n = this.#e.get(e);
		n || (n = /* @__PURE__ */ new Set(), this.#e.set(e, n)), n.add(t);
	}
	remove(e, t) {
		this.#e.get(e)?.delete(t);
	}
	emit(e, t, n) {
		if (!n) {
			this.#e.get(e)?.forEach((e) => e(t));
			return;
		}
		this.#e.get(e)?.forEach((e) => {
			try {
				e(t);
			} catch (e) {
				n(e);
			}
		});
	}
	clear() {
		this.#e.clear();
	}
};
//#endregion
//#region ../core/src/utils/inputBinding.js
function Nl(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!a(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let s = r.name, c = (t) => {
			e.setValue(s, t);
		}, l = e.getTargetValue?.(s) ?? e.getValue(s), u = i.name ?? s, d = i.debounce ? hc(c, i.debounce, !1) : c, f = `${t}-param-${s}`;
		if (i.input == "range") n.push(G`<label for=${f}>${u}</label>
                    <div>
                        <input
                            id=${f}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? o(i.min, i.max, 100)}
                            .value=${l}
                            @input=${(e) => {
			d(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${l}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(G`<label for=${f}>${u}</label>
                    <input
                        id=${f}
                        type="checkbox"
                        ?checked=${l}
                        @input=${(e) => d(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(G`<span class="label">${u}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => G`<label>
                                    <input
                                        type="radio"
                                        name=${s}
                                        value=${e}
                                        .checked=${l == e}
                                        @input=${(e) => d(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(G`<label for=${f}>${u}</label>
                    <select
                        id=${f}
                        @input=${(e) => d(e.target.value)}
                    >
                        ${i.options.map((e, t) => G`<option
                                    value=${e}
                                    ?selected=${l == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(G`<label for=${f}>${u}</label>
                    <div>
                        <input
                            id=${f}
                            type=${i.input}
                            placeholder=${i.placeholder ?? ""}
                            autocomplete=${i.autocomplete ?? "off"}
                            .value=${l}
                            @focus=${(e) => e.target.select()}
                            @input=${(e) => {
			d(i.input == "number" ? e.target.valueAsNumber : e.target.value);
		}}
                        />
                    </div>`);
		else throw Error("Unsupported input type: " + i.input);
		i.description && n.push(G`<div class="description">${i.description}</div>`);
	}
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/inputBindingManager.js
var Pl = class {
	#e;
	#t;
	#n;
	constructor(e, t) {
		this.#e = e, this.#t = t, this.#n = void 0;
	}
	initialize(e) {
		let t = [];
		e.visit((e) => {
			let n = e.paramRuntime;
			t.push(...Nl(n));
		});
		let n = this.#t.inputBindingContainer;
		if (!(!n || n == "none" || !t.length)) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && Ci(G`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
};
//#endregion
//#region ../core/src/utils/variableTools.js
function Fl(e) {
	return Ae(e) || ie(e) || ve(e);
}
//#endregion
//#region ../core/src/config/styleUtils.js
function Il(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function Ll(e, t) {
	let n = Il(t);
	return H(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region ../core/src/config/markConfig.js
function Rl(e, t, n) {
	let r = [t, ...Il(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return H([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region ../core/src/marks/markUtils.js
function zl(e) {
	for (let t of ["x", "y"]) {
		let n = ke(t), r = e[t], i = e[n];
		if (r && i && P(r) && !ze(r) && ze(i)) throw Error(`Cannot combine encoding.${t}.value with scale-backed encoding.${n}. Use encoding.${t}.datum for a constant data-domain endpoint, or use encoding.${n}.value for a visual-domain endpoint.`);
	}
}
function Bl(e, t, n = !1) {
	let r = ke(t), i = e[t] && { ...e[t] }, a = e[r] && { ...e[r] };
	if (!(P(i) || P(a))) {
		if (i) {
			if (!Ne(e[t])) return;
			if (!a) if (i.type == "quantitative") a = {
				datum: 0,
				domainInert: !0
			};
			else {
				a = { ...i };
				let e = (1 - (i.band ?? 1)) / 2;
				i.band = 0 + e, a.band = n ? i.band : 1 - e;
			}
			else if (i.type != "quantitative") {
				let e = (1 - (i.band || 1)) / 2;
				i.band = e, a.band = -e;
			}
		} else i = { value: 0 }, a = { value: 1 };
		e[t] = i, e[r] = a;
	}
}
function Vl(e, t) {
	let n = ke(t), r = e[t], i = e[n];
	if (!r || !i || P(r) || P(i) || !Ne(r) || !Ne(i) || !["index", "locus"].includes(r.type)) return;
	let a = r.band, o = i.band, s = a ?? o ?? 0;
	e[t] = {
		...r,
		band: s
	}, e[n] = {
		...i,
		band: o ?? s
	};
}
function Hl(e, t) {
	let n = ze(e);
	n && (n.resolutionChannel = t);
}
function Ul(e, t) {
	e.stroke || (t ? e.stroke = { value: null } : (e.stroke = structuredClone(e.color), Hl(e.stroke, "color"))), P(e.stroke) && e.stroke.value === null && (e.strokeWidth = { value: 0 }), e.strokeOpacity || (e.strokeOpacity = structuredClone(e.opacity), Hl(e.strokeOpacity, "opacity"));
}
function Wl(e, t) {
	P(e.fill) && e.fill.value === null ? e.fillOpacity = { value: 0 } : e.fill || (e.fill = structuredClone(e.color), Hl(e.fill, "color"), !t && !e.fillOpacity && (e.fillOpacity = { value: 0 })), e.fillOpacity || (t ? (e.fillOpacity = structuredClone(e.opacity), Hl(e.fillOpacity, "opacity")) : e.fillOpacity = { value: 0 });
}
//#endregion
//#region ../core/src/selection/order.js
function Gl(e, t, n, r, i) {
	if (e === void 0) return;
	let { condition: a, value: o } = e;
	if (!Number.isFinite(o) || a && !Number.isFinite(a.value)) throw Error("Order levels must be finite numbers.");
	if (!a || o === a.value) return;
	let s = rt(he(a), t, n, r, i), c = ee(s.selection);
	return {
		predicate: s,
		params: c,
		passes: a.value < o ? ["matching", "nonmatching"] : ["nonmatching", "matching"],
		isActive: () => c.some((e) => pe(n.findValue(e)))
	};
}
//#endregion
//#region ../core/src/marks/mark.js
var Kl = class {
	#e;
	#t = 0;
	#n;
	#r = !1;
	constructor(e) {
		this.unitView = e, this.encoders = void 0;
		let t = typeof e.spec.mark == "object" ? e.spec.mark : {}, n = Rl(e.getConfigScopes(), e.getMarkType(), t.style), r = n;
		for (let [e, n] of Object.entries(t)) n !== void 0 && (r[e] = n);
		n.clip === void 0 && Object.defineProperty(n, "clip", {
			configurable: !0,
			enumerable: !0,
			get() {
				let t = e.getScaleResolution("x")?.isZoomable(), r = e.getScaleResolution("y")?.isZoomable(), i = !!(t || r);
				return Object.defineProperty(n, "clip", {
					configurable: !0,
					enumerable: !0,
					writable: !0,
					value: i
				}), i;
			}
		}), this.properties = n;
	}
	getCursorSpec() {
		return this.properties.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return I(e) ? this.unitView.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		I(n) && this.unitView.paramRuntime.watchExpression(n.expr, e, {
			scopeOwned: !1,
			registerDisposer: t
		});
	}
	get defaultHitTestMode() {
		return "intersects";
	}
	getSupportedChannels() {
		return [
			"sample",
			"facetIndex",
			"x",
			"y",
			"xOffset",
			"yOffset",
			"color",
			"opacity",
			"search",
			"tooltip",
			"uniqueId",
			"order"
		];
	}
	fixEncoding(e) {
		return e;
	}
	getOffsetBand(e) {
		return .5;
	}
	watchEncodedDataExpressions(e) {
		for (let t of e) {
			let e = this.properties[t];
			I(e) && this.unitView.paramRuntime.watchExpression(e.expr, () => {
				this.unitView.getCollector()?.completed && (this.#t++, this.unitView.context.animator.requestRender());
			});
		}
	}
	get encoding() {
		return or(this, "encoding", () => {
			let e = this.unitView.getEncoding(), t = (e) => {
				let t = this.properties[e];
				return Fl(t) || I(t) ? { value: t } : void 0;
			}, n = Object.fromEntries(this.getSupportedChannels().map((e) => [e, t(e)]).filter((e) => P(e[1]))), r = this.fixEncoding({
				...this.isPickingParticipant() ? { uniqueId: { field: oe } } : {},
				...n,
				...e
			}), i = r, a = (e, t) => {
				let n = structuredClone(e), r = ze(n);
				if (!r) throw Error("Cannot add scale properties to an unscaled channel definition.");
				return Object.assign(r, t), n;
			};
			for (let n of ["x", "y"]) {
				let r = n == "x" ? "x2" : "y2", o = n + "Offset", s = r + "Offset", c = i[o];
				if (Te(c)) {
					let e = i[n], t = e && ze(e), r = t;
					t && r && t.type != "quantitative" && r.band == null && (i[n] = a(e, { band: 0 })), ze(c).band ?? (i[o] = a(c, { band: this.getOffsetBand(o) }));
				}
				let l = u(i[o], t(s), e[r] != null);
				if (typeof l == "number") i[s] = { value: l };
				else if (l && ze(l)) {
					let e = { resolutionChannel: o };
					Te(l) && (e.band = this.getOffsetBand(s)), i[s] = a(l, e);
				} else i[s] = l;
			}
			zl(r), r.x && (r.x.buildIndex ??= this.properties.buildIndex ?? !0);
			let o = this.unitView.spec.predicates ?? {};
			for (let [e, t] of Object.entries(r)) {
				if (!t || !("condition" in t)) continue;
				let n = R(t.condition), r = n.map((e) => k(e, o));
				r.some((e, t) => e !== n[t]) && (i[e] = {
					...t,
					condition: Array.isArray(t.condition) ? r : r[0]
				});
			}
			return r;
		});
	}
	getType() {
		return this.unitView.getMarkType();
	}
	initializeData() {}
	initializeEncoders() {
		this.encoders = Ye(this.unitView, this.encoding);
	}
	getOrder() {
		return this.#r ||= (this.#n = Gl(this.encoding.order, this.encoding, this.unitView.paramRuntime, this.defaultHitTestMode, (e) => this.unitView.getScaleResolution(e)?.type), !0), this.#n;
	}
	initializeRenderingRevisions(e, t = {}) {
		let n = t.trackResources ?? !0, r = this.#e, i = r ?? (this.#e = {
			configuration: 0,
			resources: 0,
			expressions: /* @__PURE__ */ new Set()
		}), a = (e, t) => {
			let n = t + ":" + e;
			i.expressions.has(n) || (this.unitView.paramRuntime.watchExpression(e, () => {
				i[t]++, this.unitView.context.animator.requestRender();
			}), i.expressions.add(n));
		};
		if (!r) {
			let e = /* @__PURE__ */ new Set();
			for (let [t, r] of Object.entries(this.encoders)) {
				for (let e of r.branches ?? []) {
					let r = e.accessor.channelDef;
					ft(r) && a(r.expr, "configuration");
					let i = t === "text" ? "configuration" : "resources";
					if (!n && i === "resources") continue;
					for (let t of f(e.predicate)) a(t, i);
					let o = [P(r) ? r.value : void 0, Pe(r) ? r.datum : void 0];
					for (let e of o) I(e) && a(e.expr, i);
				}
				if (n && r.scale) {
					let n = ze(r.channelDef)?.resolutionChannel ?? t;
					if (Qe(n)) {
						let t = this.unitView.getScaleResolution(n);
						t && !e.has(t) && (this.unitView.registerDisposer(t.observeMapping(() => i.resources++)), e.add(t));
					}
				}
			}
		}
		if (n) {
			for (let e of this.getOrder()?.params ?? []) a(e, "resources");
			for (let t of e) {
				let e = this.properties[t];
				I(e) && a(e.expr, "resources");
			}
		}
	}
	getRenderingRevision(e) {
		return this.#e?.[e] ?? 0;
	}
	getEncodedDataRevision() {
		return this.#t;
	}
	isPickingParticipant() {
		if (this.properties.tooltip === null && !this.unitView.paramRuntime.hasPointSelections()) return !1;
		for (let e of this.unitView.getLayoutAncestors()) if (!e.isPickingSupported()) return !1;
		return !0;
	}
	getDebugState() {
		return { properties: { ...this.properties } };
	}
}, ql = class extends Kl {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"fill",
			"stroke",
			"fillOpacity",
			"strokeOpacity",
			"strokeWidth"
		];
	}
	getOffsetBand(e) {
		return +(e == "x2Offset" || e == "y2Offset");
	}
	fixEncoding(e) {
		return Bl(e, "x", Te(e.xOffset)), Bl(e, "y", Te(e.yOffset)), Ul(e, this.properties.filled), Wl(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
//#endregion
//#region ../core/src/marks/ruleLikeEncoding.js
function Jl(e, t) {
	if (!(e.x && e.y && e.x2 && e.y2)) if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
	else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
	else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
	else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
	else if (e.x && e.y && e.y2) e.x2 = e.x;
	else if (e.y && e.x && e.x2) e.y2 = e.y;
	else if (e.y && e.x) if (!e.x2 && Ne(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
	else if (!e.y2 && Ne(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
	else throw Error(`Cannot infer ${t} mark's secondary position channel from the encoding: ` + JSON.stringify(e));
	else throw Error(`At a minimum, either the x or y channel must be defined in the ${t} mark's encoding: ` + JSON.stringify(e));
	return e;
}
//#endregion
//#region ../core/src/marks/arrow.js
var Yl = class extends Kl {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"fill",
			"stroke",
			"fillOpacity",
			"strokeOpacity",
			"strokeWidth",
			"size",
			"direction"
		];
	}
	fixEncoding(e) {
		return Jl(e, "arrow"), !e.size && Xl(this.properties.size) && (e.size = Zl(this.properties.size, this.properties.size.channel ?? "auto", e)), Ul(e, this.properties.filled), Wl(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
function Xl(e) {
	return typeof e == "object" && !!e && "band" in e && typeof e.band == "number";
}
function Zl(e, t, n) {
	let r = Ql(t, n), i = r == "x" ? "width" : "height", a = n[r];
	return { value: { expr: `${Ne(a) && a.scale !== null ? `bandwidth("${r}") * ${i}` : i} * ${e.band}` } };
}
function Ql(e, t) {
	if (e == "auto") return $l(t);
	if (eu(t)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return e;
}
function $l(e) {
	if (eu(e)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return tu(e) ? "y" : "x";
}
function eu(e) {
	return tu(e) && nu(e);
}
function tu(e) {
	return e.x2 != null && e.x2 !== e.x;
}
function nu(e) {
	return e.y2 != null && e.y2 !== e.y;
}
//#endregion
//#region ../core/src/data/transforms/sample.js
var ru = class extends z {
	constructor(e) {
		super(e), this.params = e, this.k = e.size || 500, this.reset();
	}
	reset() {
		super.reset(), this.reservoir = [], this.W = void 0, this.ingester = this._initialIngester;
	}
	_initialIngester(e) {
		this.reservoir.push(e), this.reservoir.length == this.k && (this.W = Math.exp(Math.log(Math.random()) / this.k), this.i = this.k, this.next = this.i, this.ingester = this._finalIngester, this._setNextStop());
	}
	_finalIngester(e) {
		++this.i == this.next && (this.reservoir[Math.floor(Math.random() * this.k)] = e, this.W *= Math.exp(Math.log(Math.random()) / this.k), this._setNextStop());
	}
	_setNextStop() {
		this.next += Math.floor(Math.log(Math.random()) / Math.log(1 - this.W)) + 1;
	}
	handle(e) {
		this.ingester(e);
	}
	complete() {
		for (let e of this.reservoir) this._propagate(e);
		super.complete();
	}
};
function iu(e, t, n) {
	let r = new ru({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region ../core/src/marks/point.js
var au = class extends Kl {
	#e = () => 0;
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		if (t != null) if (I(t)) {
			let e = this.unitView.paramRuntime.watchExpression(t.expr, () => this.unitView.context.animator.requestRender());
			this.#e = e;
		} else this.#e = () => t;
		"geometricZoomBound" in this.properties && console.warn("geometricZoomBound is deprecated. Use something like the following instead: \"size\": { \"expr\": \"min(0.5 * pow(zoomLevel, 2), 200)\" }.");
	}
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"size",
			"semanticScore",
			"shape",
			"strokeWidth",
			"dx",
			"dy",
			"fill",
			"stroke",
			"fillOpacity",
			"strokeOpacity",
			"angle"
		];
	}
	fixEncoding(e) {
		let t = this.unitView.getEncoding(), n = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, r = !P(e.shape) || e.shape.value === "x" || e.shape.value === "+", i = e.strokeWidth;
		for (let [e, r] of [["dx", "xOffset"], ["dy", "yOffset"]]) {
			let i = t[e] != null || e in n, a = t[r] != null || r in n;
			if (i && a) throw Error(`Point marks cannot combine legacy ${e} with ${r}. Use only ${r}.`);
		}
		return Ul(e, this.properties.filled), Wl(e, this.properties.filled), r && P(e.stroke) && e.stroke.value === null && (e.strokeOpacity = { value: 0 }, i && (e.strokeWidth = i)), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		let e = this.encoders.semanticScore ? De(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(iu(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	getSemanticThreshold() {
		if (!this.sampledSemanticScores || this.sampledSemanticScores.length === 0) return -1;
		let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
		return e <= 0 ? -Infinity : e >= 1 ? Infinity : Gt(this.sampledSemanticScores, e);
	}
}, ou = "horizontal", su = "vertical", cu = class extends Kl {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"size"
		];
	}
	fixEncoding(e) {
		return this.getType() == "tick" ? this.fixTickEncoding(e) : Jl(e, "rule");
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? lu(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return uu(e, n), e;
	}
};
function lu(e) {
	if (!e.y) return su;
	if (!e.x) return ou;
	let t = du(e.x), n = du(e.y);
	if (!t && n) return su;
	if (t && !n) return ou;
}
function uu(e, t) {
	t == su ? (e.x2 = e.x, du(e.y) ? [e.y, e.y2] = pu(e.y) : (e.y = { value: 0 }, e.y2 = { value: 1 })) : (e.y2 = e.y, du(e.x) ? [e.x, e.x2] = pu(e.x) : (e.x = { value: 0 }, e.x2 = { value: 1 }));
}
function du(e) {
	return Ne(e) && (e.type == "ordinal" || e.type == "nominal");
}
function fu(e, t) {
	return {
		...e,
		band: t
	};
}
function pu(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [fu(e, t), fu(e, 1 - t)];
}
//#endregion
//#region ../core/src/marks/link.js
var mu = class extends Kl {
	constructor(e) {
		super(e), this.properties.noFadingOnSecondPass ??= this.properties.noFadingOnPointSelection ?? !1;
	}
	get defaultHitTestMode() {
		return "endpoints";
	}
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"size"
		];
	}
	fixEncoding(e) {
		return e.x2 || (Ne(e.x) ? e.x2 = { datum: 0 } : e.x2 = e.x), e.y2 || (Ne(e.y) ? e.y2 = { datum: 0 } : e.y2 = e.y), e;
	}
};
//#endregion
//#region ../core/src/fonts/textMetrics.js
function hu(e, t) {
	return e.requestFont(t);
}
function gu(e, t, n) {
	return {
		width: e.measureWidth(t, n),
		height: e.getHeight(n)
	};
}
function _u(e, t, n) {
	let r = t * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return n == "vertical" ? e.width * i + e.height * a : e.width * a + e.height * i;
}
//#endregion
//#region ../core/src/marks/text.js
var vu = class extends Kl {
	#e;
	constructor(e) {
		super(e), this.#e = le(e.paramRuntime, this.properties.fitToBand, "Reactive text fitToBand changes are not supported.", (t) => e.registerDisposer(t)) ?? !1, this.fontMeasurement = hu(e.context.textMetrics, this.properties);
	}
	initializeEncoders() {
		let e = !this.encoders;
		super.initializeEncoders(), e && this.watchEncodedDataExpressions(["text", "logoLetters"]);
	}
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"size",
			"text",
			"angle"
		];
	}
	fixEncoding(e) {
		for (let t of d) this.#e ? Bl(e, t) : Vl(e, t);
		return e;
	}
};
//#endregion
//#region ../core/src/utils/deepEqual.js
function yu(e, t) {
	if (Object.is(e, t)) return !0;
	if (Array.isArray(e) || Array.isArray(t)) {
		if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!yu(e[n], t[n])) return !1;
		return !0;
	}
	if (!bu(e) || !bu(t)) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !yu(e[r], t[r])) return !1;
	return !0;
}
function bu(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function xu(e) {
	return --e * e * e + 1;
}
function Su(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../core/src/utils/eerp.js
function Cu(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region ../core/src/scales/domainLifecycle.js
function wu(e, t) {
	return {
		visibleDomain: e,
		resetDomain: t,
		initialReference: void 0,
		dataExtent: void 0,
		phase: "collecting",
		transition: void 0,
		transitionSerial: 0
	};
}
function Tu(e, t, n) {
	switch (t.type) {
		case "set": return Du(e, t.domain, 0, n);
		case "frame":
		case "finish": {
			if (e.transition?.id !== t.id) return ku(e);
			let r = t.type === "finish" ? e.transition.target : t.domain;
			return Ou(t.type === "finish" ? {
				...e,
				transition: void 0
			} : e, r, n);
		}
		case "navigate":
			if (n.scaleKind === "discrete") throw Error("Discrete domains do not support navigation or reset.");
			return Du(e.phase === "collecting" ? {
				...e,
				phase: "interacted"
			} : e, t.domain, t.duration, n);
		case "data":
		case "configuration":
		case "expression":
		case "selection":
		case "selection-sync":
		case "viewport":
		case "membership": return Eu(e, t, n);
		default: throw Error("Unknown domain update: " + t.type);
	}
}
function Eu(e, t, n) {
	let r = {
		...e,
		resetDomain: t.resetDomain,
		dataExtent: t.dataExtent,
		initialReference: e.phase === "ready" ? e.initialReference : t.referenceDomain ?? e.initialReference,
		phase: t.readiness === "ready" ? "ready" : e.phase
	};
	if (t.candidate === void 0) return ku(r);
	let i = t.type === "selection" || t.type === "selection-sync";
	if (!(n.selectionLinked || i || t.type === "configuration" || t.type === "expression" && !n.animateChanges) && e.phase !== "collecting" && n.zoomable) return ku(r);
	let a = t.type === "selection-sync" || t.type === "data" || t.type === "membership";
	if (n.selectionLinked && a && e.transition && L(t.candidate, e.visibleDomain)) return ku(r);
	let o = e.phase === "ready" && n.scaleKind === "continuous" && n.rendered && n.animateChanges && !n.selectionLinked && !i;
	return o && e.transition && L(t.candidate, e.transition.target) ? ku(r) : Du(r, t.candidate, o ? 500 : 0, n);
}
function Du(e, t, n, r) {
	if (n > 0 && r.scaleKind !== "discrete" && e.visibleDomain.length === 2 && t.length === 2 && Number.isFinite(t[1] - +t[0]) && Number.isFinite(e.visibleDomain[1] - +e.visibleDomain[0]) && (t[1] - +t[0]) * (e.visibleDomain[1] - +e.visibleDomain[0]) > 0 && !L(t, e.visibleDomain)) {
		let r = e.transitionSerial + 1;
		return {
			state: {
				...e,
				transition: {
					id: r,
					target: t
				},
				transitionSerial: r
			},
			domainChanged: !1,
			syncSelection: !1,
			transition: {
				type: "start",
				id: r,
				from: e.visibleDomain,
				to: t,
				duration: n
			}
		};
	}
	return {
		...Ou({
			...e,
			transition: void 0
		}, t, r),
		transition: e.transition ? { type: "cancel" } : { type: "none" }
	};
}
function Ou(e, t, n) {
	let r = !L(t, e.visibleDomain);
	return {
		state: r ? {
			...e,
			visibleDomain: t
		} : e,
		domainChanged: r,
		syncSelection: n.selectionLinked && n.zoomable,
		transition: { type: "none" }
	};
}
function ku(e) {
	return {
		state: e,
		domainChanged: !1,
		syncSelection: !1,
		transition: { type: "none" }
	};
}
//#endregion
//#region ../core/src/scales/domainRuntime.js
var Au = 2 ** 53 - 1 - 1, ju = class {
	#e;
	#t;
	#n;
	#r;
	policy = () => {
		throw Error("Domain inputs are not bound.");
	};
	#i = [];
	#a;
	#o = !1;
	#s = !1;
	#c = !1;
	#l = !1;
	#u;
	#d;
	syncSelection = () => void 0;
	constructor({ runtime: e, manager: t, animator: n, domain: r, resetDomain: i, notifyDomain: a, publishZoom: o, renderImmediately: s }) {
		let c = new Sn(() => e);
		this.#e = c, this.#t = t, this.#n = n, this.#r = c.signal("domain state", wu(r, i)), this.domain = c.computed("displayed domain", [this.#r], () => this.state.visibleDomain, { equals: L }), this.#u = o, c.effect([this.domain], a), this.#d = c.signal("domain render publication", 0), c.effect([this.domain, this.#d], () => {
			if (!this.#s && !this.#c) return;
			let e = this.#c;
			this.#c = !1, this.#s = !1, e ? s() : n.requestRender();
		});
	}
	domain;
	get runtime() {
		return this.#e;
	}
	get state() {
		return this.#r.get();
	}
	update(e, t = !0) {
		if (this.#o) return Promise.resolve();
		let n = new Promise((n, r) => {
			this.#i.push({
				update: e,
				render: t,
				resolve: n,
				reject: r
			});
		});
		return this.#e.requestUpdate(this.#f, Au, this.#p), n.catch(() => {}), this.#e.flushNow({ afterTransaction: !0 }), n;
	}
	cancelSourceUpdates() {
		this.#i = this.#i.filter((e) => "candidate" in e.update ? (e.resolve(), !1) : !0), this.#l = !1, this.#e.cancelUpdate(this.#m);
	}
	#f = () => {
		if (this.#i.length) {
			let e = this.#i.shift();
			try {
				let t = e.update;
				if (t.type === "selection-sync" && !L(t.candidate, this.state.visibleDomain)) {
					e.resolve();
					return;
				}
				"domain" in t && (t = {
					...t,
					domain: this.#t.normalizeDomain(t.domain)
				}), "readiness" in t && this.state.phase !== "ready" && (t.type !== "selection-sync" && (this.#l = t.readiness === "ready", this.#e.requestUpdate(this.#m, Au + 1, this.#p)), t = {
					...t,
					readiness: "pending"
				});
				let n = this.state, r = Tu(n, t, this.policy());
				if (r.transition.type !== "none" && this.#g(), r.domainChanged && (this.#t.mirrorDomain(r.state.visibleDomain), this.#s ||= e.render), this.#r.set(r.state), r.syncSelection && (this.syncSelection(), this.#o)) {
					e.resolve();
					return;
				}
				if ((r.domainChanged || !yu(n.initialReference, r.state.initialReference) || !yu(n.dataExtent, r.state.dataExtent)) && (this.#u(), this.#o)) {
					e.resolve();
					return;
				}
				this.#s && this.#h(), r.transition.type === "start" ? this.#_(r.transition).then(e.resolve, e.reject) : e.resolve();
			} catch (t) {
				throw e.reject(t), this.#p(t), t;
			} finally {
				this.#i.length && this.#e.requestUpdate(this.#f, Au, this.#p);
			}
		}
	};
	#p = (e) => {
		this.#l = !1;
		for (let t of this.#i.splice(0)) t.reject(e);
	};
	#m = () => {
		!this.#o && this.#l && this.state.phase !== "ready" && this.#r.set({
			...this.state,
			phase: "ready"
		});
	};
	#h() {
		this.#d.set(this.#d.get() + 1);
	}
	renderImmediately() {
		this.#o || (this.#c = !0, this.#h(), this.#e.flushNow({ afterTransaction: !0 }));
	}
	#g() {
		this.#a &&= (this.#a.canceled = !0, void 0);
	}
	async #_(e) {
		let t = e.from, n = e.to, r = t[1] - t[0], i = n[1] - n[0], a = t[0] + r / 2, o = n[0] + i / 2, s = Ln();
		this.#a = s, await this.#n.transition({
			duration: e.duration,
			easingFunction: Su,
			cancelToken: s,
			onUpdate: (c) => {
				if (s.canceled) return;
				let l = Cu(r, i, c), u = r === i ? c : (r - l) / (r - i), d = u * o + (1 - u) * a;
				this.update({
					type: "frame",
					id: e.id,
					domain: [t[0] === n[0] ? t[0] : d - l / 2, t[1] === n[1] ? t[1] : d + l / 2]
				});
			}
		}), !s.canceled && this.state.transition?.id === e.id && (this.#a = void 0, await this.update({
			type: "finish",
			id: e.id
		}));
	}
	dispose() {
		this.#o = !0, this.#g(), this.#e.cancelUpdate(this.#f), this.#e.cancelUpdate(this.#m);
		for (let e of this.#i.splice(0)) e.resolve();
		this.#e.dispose();
	}
};
//#endregion
//#region ../core/src/scales/selectionDomainUtils.js
function Mu(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function Nu(e, t) {
	if (e) {
		if (!T(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function Pu(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? Mu(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: Nu(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function Fu(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !se(a)) return;
		let o = Ve(a.select);
		!ae(o) || !o.encodings?.includes(r) || e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function Iu(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !se(e)) continue;
		let o = Ve(e.select);
		if (!(!ae(o) || !o.encodings?.includes(r)) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function Lu(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.round(a), o = Math.round(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region ../core/src/utils/domainArray.js
var Ru = class e extends Array {
	constructor() {
		super(), this.type = void 0;
	}
	extend(e) {
		return this;
	}
	extendAll(t) {
		if (t instanceof e && t.type != this.type) throw Error(`Cannot combine different types of domains: ${this.type} and ${t.type}`);
		for (let e of t) this.extend(e);
		return this;
	}
	extendAllWithAccessor(e, t) {
		for (let n of e) this.extend(t(n));
		return this;
	}
}, zu = class extends Ru {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) ? this : (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e)), this);
	}
}, Bu = class extends Ru {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, Vu = class extends Bu {
	constructor() {
		super(), this.type = "nominal";
	}
}, Hu = class extends Ru {
	constructor(e) {
		super();
		let t = 0;
		for (let n = 1; n < e.length; n++) t += Math.sign(e[n] - e[n - 1]);
		if (Math.abs(t) != e.length - 1) throw Error("Piecewise domain must be strictly increasing or decreasing: " + JSON.stringify(e));
		e.forEach((e) => this.push(e));
	}
	extend(e) {
		if (this.includes(e)) return this;
		throw Error("Piecewise domains are immutable and cannot be unioned!");
	}
}, Uu = {
	quantitative: zu,
	index: zu,
	locus: zu,
	nominal: Vu,
	ordinal: Bu
};
function Wu(e, t) {
	if (e == "quantitative" && Gu(t)) {
		let n = new Hu(t);
		return n.type = e, n;
	} else if (Uu[e]) {
		let n = new Uu[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function Gu(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region ../core/src/scales/domainExpressions.js
function Ku(e, t) {
	return I(e) ? t(e.expr)() : Array.isArray(e) ? e.map((e) => Ku(e, t)) : e;
}
function qu(e) {
	return I(e) ? [e] : Array.isArray(e) ? e.flatMap((e) => qu(e)) : [];
}
//#endregion
//#region ../core/src/utils/iterateNestedMaps.js
function* Ju(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of Ju(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region ../core/src/utils/radixSort.js
var Yu = 2147483647, Xu = Qu([Yu]);
function Zu(e) {
	for (let t = 1; t < e.length; t++) if (e[t] < e[t - 1]) return !1;
	return !0;
}
function Qu(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) e[n] > t && (t = e[n]);
	return Math.floor(Math.log2(t) / 4) + 1;
}
function $u(e) {
	let t = Qu(e), n = Array.from({ length: e.length }, (e, t) => t);
	if (Zu(e)) return n;
	let r = Array(e.length), i = Array(16);
	for (let a = 0; a < t; a++) {
		i.fill(0);
		let t = a * 4, o = 16 ** a, s = (r) => {
			let i = e[n[r]];
			return a >= Xu ? i > Yu ? Math.floor(i / o) % 16 : 0 : i >> t & 15;
		};
		for (let t = 0; t < e.length; t++) i[s(t)]++;
		for (let e = 1; e < 16; e++) i[e] += i[e - 1];
		for (let t = e.length - 1; t >= 0; t--) r[--i[s(t)]] = n[t];
		[n, r] = [r, n];
	}
	return n;
}
//#endregion
//#region ../core/src/data/keyIndex.js
var ed = "|", td = "\\", nd = class {
	#e = null;
	#t = null;
	#n = !1;
	invalidate() {
		this.#e = null, this.#t = null, this.#n = !1;
	}
	findDatum(e, t, n) {
		if (!e || e.length === 0) return;
		let r = e.join(", ");
		if (e.length !== t.length) throw Error(`Key tuple length ${t.length} does not match fields [${r}]`);
		(!this.#e || !this.#i(e)) && this.#r(e, n);
		let i = this.#t, a;
		if (this.#n) {
			let e = "";
			for (let n = 0; n < t.length; n++) {
				n > 0 && (e += ed);
				let r = i[n], a = rd(t[n], r);
				e += ad(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = rd(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => b(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += ed);
				let r = e[t], i = rd(n[t](o), r);
				s += ad(i);
			}
			if (r.get(s) !== void 0) {
				let e = n.map((e) => e(o));
				throw Error(`Duplicate key detected for fields [${i}]: ${JSON.stringify(e)}`);
			}
			r.set(s, o);
		}
		else {
			let a = n[0], o = e[0];
			for (let e of t) for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t], s = rd(a(n), o);
				if (r.get(s) !== void 0) throw Error(`Duplicate key detected for fields [${i}]: ${JSON.stringify(s)}`);
				r.set(s, n);
			}
		}
		this.#e = r, this.#t = [...e], this.#n = a;
	}
	#i(e) {
		if (!this.#t || this.#t.length !== e.length) return !1;
		for (let t = 0; t < e.length; t++) if (this.#t[t] !== e[t]) return !1;
		return !0;
	}
};
function rd(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function id(e) {
	if (!(e.indexOf(td) !== -1 || e.indexOf(ed) !== -1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === td || r === ed) && (t += td), t += r;
	}
	return t;
}
function ad(e) {
	return typeof e == "string" ? id(e) : String(e);
}
//#endregion
//#region ../core/src/data/viewportDomain.js
var od = 256, sd = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		this.sortField = R(e.sort?.field)[0], this.getBatches = t, this.isCompleted = n;
	}
	reset() {
		for (let e of this.#e.values()) e.batches = void 0;
	}
	complete() {
		for (let e of this.#e.values()) e.batches = ld(this.getBatches(), e);
	}
	getDomain(e, t, n, r) {
		let i = r.find((e) => e.channel === "x");
		if (!i || !this.#t(i)) return md(this.getBatches(), t, n, r);
		let a = cd(i), o = this.#e.get(a);
		return o || (o = {
			accessor: i.accessor,
			accessor2: i.accessor2,
			targets: /* @__PURE__ */ new Map(),
			batches: void 0
		}, this.#e.set(a, o)), r.length === 1 && o.targets.get(e) !== n && (o.targets.set(e, n), o.batches && fd(o.batches, e, n)), !o.batches && this.isCompleted() && (o.batches = ld(this.getBatches(), o)), o.batches ? pd(o, e, t, n, r) : Wu(t);
	}
	getIndexCount() {
		let e = 0;
		for (let t of this.#e.values()) e += Number(t.batches !== void 0);
		return e;
	}
	#t(e) {
		let t = e.accessor.channelDef, n = "field" in t ? t.field : void 0;
		return typeof n == "string" && this.sortField === n;
	}
};
function cd(e) {
	return e.accessor.sourceKey + "|" + (e.accessor2?.sourceKey ?? "point");
}
function ld(e, t) {
	let n = Array.from(e, (e) => ud(e, t));
	for (let [e, r] of t.targets) fd(n, e, r);
	return n;
}
function ud(e, t) {
	let n = Math.ceil(e.length / od), r = dd(n, Infinity), i = dd(n, -Infinity), a = dd(n, Infinity), o = dd(n, -Infinity), s = new Uint8Array(n);
	for (let n = 0; n < e.length; n++) {
		let c = Math.floor(n / od), l = vd(e[n], t.accessor, t.accessor2);
		l ? (r[c] = Math.min(r[c], l.start), i[c] = Math.max(i[c], l.start), a[c] = Math.min(a[c], l.end), o[c] = Math.max(o[c], l.end), t.accessor2 && l.start === l.end && (s[c] = 1)) : s[c] = 1;
	}
	return {
		data: e,
		minStart: r,
		maxStart: i,
		minEnd: a,
		maxEnd: o,
		uncertain: s,
		targets: /* @__PURE__ */ new Map()
	};
}
function dd(e, t) {
	let n = new Float64Array(e);
	return n.fill(t), n;
}
function fd(e, t, n) {
	for (let r of e) {
		let e = Math.ceil(r.data.length / od), i = {
			min: dd(e, Infinity),
			max: dd(e, -Infinity),
			valid: new Uint8Array(e),
			uncertain: new Uint8Array(e)
		};
		r.targets.set(t, i);
		for (let e = 0; e < r.data.length; e++) {
			let t = n(r.data[e]);
			if (t == null || Number.isNaN(t)) continue;
			let a = Math.floor(e / od), o = +t;
			Number.isNaN(o) ? i.uncertain[a] = 1 : (i.valid[a] = 1, i.min[a] = Math.min(i.min[a], o), i.max[a] = Math.max(i.max[a], o));
		}
	}
}
function pd(e, t, n, r, i) {
	if (!e.batches) throw Error("Viewport index has not been built.");
	let a = i.map(gd), o = a.find((e) => e.channel === "x"), s = Wu(n);
	for (let n of e.batches) {
		let i = Math.ceil(n.data.length / od);
		for (let c = 0; c < i; c++) {
			let i = n.uncertain[c] === 1;
			if (!i && yd(n, c, o.domain, !!e.accessor2)) continue;
			if (a.length === 1 && !i && bd(n, c, o.domain, !!e.accessor2)) {
				let e = n.targets.get(t);
				if (e && e.uncertain[c] === 0) {
					e.valid[c] === 1 && (s.extend(e.min[c]), s.extend(e.max[c]));
					continue;
				}
			}
			let l = c * od;
			hd(n.data, l, Math.min(l + od, n.data.length), s, r, a);
		}
	}
	return s;
}
function md(e, t, n, r) {
	let i = Wu(t), a = r.map(gd);
	for (let t of e) hd(t, 0, t.length, i, n, a);
	return i;
}
function hd(e, t, n, r, i, a) {
	for (let o = t; o < n; o++) {
		let t = e[o];
		a.every((e) => _d(t, e)) && r.extend(i(t));
	}
}
function gd(e) {
	let t = Math.min(e.domain[0], e.domain[1]), n = Math.max(e.domain[0], e.domain[1]);
	return {
		...e,
		domain: [t, n]
	};
}
function _d(e, t) {
	let n = vd(e, t.accessor, t.accessor2);
	if (!n) return !1;
	let [r, i] = t.domain;
	return n.start === n.end ? n.start >= r && n.start <= i : n.start < i && n.end > r;
}
function vd(e, t, n) {
	let r = t(e), i = n ? n(e) : r;
	if (r == null || i == null) return;
	let a = +r, o = +i;
	if (!(Number.isNaN(a) || Number.isNaN(o))) return {
		start: Math.min(a, o),
		end: Math.max(a, o)
	};
}
function yd(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxEnd[t] <= i || e.minStart[t] >= a : e.maxStart[t] < i || e.minStart[t] > a;
}
function bd(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxStart[t] < a && e.minEnd[t] > i : e.minStart[t] >= i && e.maxStart[t] <= a;
}
//#endregion
//#region ../core/src/data/collector.js
var xd = class extends i {
	#e = [];
	#t = b(oe);
	#n = [];
	#r = new nd();
	#i;
	#a;
	#o = new Sd();
	#s;
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e) {
		super(), this.params = e ?? { type: "collect" }, this.#s = new sd(this.params, () => this.facetBatches.values(), () => this.completed), this.observers = /* @__PURE__ */ new Set(), this.dataRevision = 0, this.facetBatches = new ue([], JSON.stringify), this.#a = Ed(this.params?.sort), this.#c();
	}
	#c() {
		this.#e = [], this.#n = [], this.#r.invalidate(), this.#s.reset(), this.facetBatches.clear(), this.facetBatches.set(void 0, this.#e);
	}
	reset() {
		super.reset(), this.#c();
	}
	handle(e) {
		this.#e.push(e);
	}
	beginBatch(e) {
		this.#r.invalidate(), _(e) && (this.#e = [], this.facetBatches.set(R(e.facetId), this.#e));
	}
	complete() {
		if (this.#e = [], this.params.groupby?.length) {
			let e = this.params.groupby.map((e) => b(e)), t = wd(this.facetBatches.size > 1 ? Cd(this.facetBatches.values()) : this.facetBatches.get(void 0), e);
			this.facetBatches.clear();
			for (let [e, n] of Ju(t)) this.facetBatches.set(e, n);
		}
		if (this.#a) for (let e of this.facetBatches.values()) e.sort(this.#a);
		this.#s.complete(), this.#m(), this.#l(), super.complete(), this.dataRevision++, this.#p(), this.#d();
	}
	observe(e) {
		return this.observers.add(e), () => {
			this.observers.delete(e);
		};
	}
	#l() {
		if (this.children.length) for (let [e, t] of this.facetBatches.entries()) {
			if (e) {
				let t = {
					type: "facet",
					facetId: e
				};
				for (let e of this.children) e.beginBatch(t);
			}
			for (let e = 0, n = t.length; e < n; e++) this._propagate(t[e]);
		}
	}
	get replaySource() {
		return this;
	}
	get replaysSynchronously() {
		return !0;
	}
	repropagate() {
		this.completed && (this.parent ? this.paramRuntime.runInTransaction(() => this.#u()) : this.#u());
	}
	#u() {
		for (let e of this.children) e.reset();
		this.#l();
		for (let e of this.children) e.complete();
		this.#p(), this.#d();
	}
	#d() {
		for (let e of this.observers) e(this);
	}
	getDomain(e, t, n) {
		return this.#o.getDomain(e, () => {
			let e = Wu(t);
			if (n.constant) e.extend(n({}));
			else if (this.completed) for (let t of this.facetBatches.values()) for (let r = 0, i = t.length; r < i; r++) e.extend(n(t[r]));
			return e;
		});
	}
	getViewportDomain(e, t, n, r) {
		return this.#s.getDomain(e, t, n, r);
	}
	getViewportIndexCount() {
		return this.#s.getIndexCount();
	}
	subscribeDomainChanges(e, t) {
		return this.#o.subscribe(e, t);
	}
	getData() {
		switch (this.#f(), this.facetBatches.size) {
			case 0: return [];
			case 1: return [...this.facetBatches.values()][0];
			default: {
				let e = this.facetBatches;
				return { [Symbol.iterator]: function* () {
					for (let t of e.values()) yield* t;
				} };
			}
		}
	}
	visitData(e) {
		this.#f();
		for (let t of this.facetBatches.values()) for (let n = 0; n < t.length; n++) e(t[n]);
	}
	getItemCount() {
		let e = 0;
		for (let t of this.facetBatches.values()) e += t.length;
		return e;
	}
	#f() {
		if (!this.completed) throw Error("Data propagation is not completed! No data are available.");
	}
	#p() {
		this.#o.hasCachedDomains() && this.#o.clear(), this.#o.notify();
	}
	#m() {
		this.#i = [];
		let e = this.facetBatches.values().next().value?.[0];
		if (e == null || !("__uniqueId" in e)) return;
		let t = 0, n = [], r = this.#t;
		for (let [e, i] of this.facetBatches) {
			this.#i.push({
				start: t,
				stop: t + i.length,
				facetId: e
			}), t += i.length;
			for (let e = 0, t = i.length; e < t; e++) n.push(r(i[e]));
		}
		this.#n = $u(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#n.length) return;
		let t = on((e) => e.start).right, n = this.#t, r = on((e) => n(i(e))).left, i = (e) => {
			let n = t(this.#i, e), r = this.#i[n - 1];
			if (!(!r || e >= r.stop)) return this.facetBatches.get(r.facetId)[e - r.start];
		}, a = r(this.#n, e);
		if (a >= 0) {
			let t = i(this.#n[a]);
			if (t && n(t) === e) return t;
		}
	}
	findDatumByKey(e, t) {
		return this.#f(), this.#r.findDatum(e, t, this.facetBatches.values());
	}
}, Sd = class {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	hasCachedDomains() {
		return this.#e.size > 0;
	}
	clear() {
		this.#e.clear();
	}
	getDomain(e, t) {
		let n = this.#e.get(e);
		if (n) return n;
		{
			let n = t();
			return this.#e.set(e, n), n;
		}
	}
	subscribe(e, t) {
		let n = this.#t.get(e);
		return n || (n = /* @__PURE__ */ new Set(), this.#t.set(e, n)), n.add(t), () => {
			let n = this.#t.get(e);
			n && (n.delete(t), n.size === 0 && this.#t.delete(e));
		};
	}
	notify() {
		if (this.#t.size === 0) return;
		let e = /* @__PURE__ */ new Set();
		for (let t of this.#t.values()) for (let n of t) e.add(n);
		for (let t of e) t();
	}
};
function Cd(e) {
	return { [Symbol.iterator]: function* () {
		for (let t of e) yield* t;
	} };
}
function wd(e, t) {
	return t.length > 1 ? _n(e, ...t) : Td(e, t[0]);
}
function Td(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = t(r), i = n.get(e);
		i || (i = [], n.set(e, i)), i.push(r);
	}
	return n;
}
function Ed(e) {
	if (e?.field) {
		let t = R(e.field);
		if (t.length == 1 && !t[0].includes(".")) {
			let n = R(e.order)[0] ?? "ascending", r = JSON.stringify(t[0]);
			return Function("a", "b", `return ${n === "ascending" ? `a[${r}] - b[${r}]` : `b[${r}] - a[${r}]`};`);
		}
		return et(e.field, e.order);
	}
}
//#endregion
//#region ../core/src/view/dataReadiness.js
function Dd(e, t) {
	let n = {};
	for (let r of t) {
		let t = e.getScaleResolution(r);
		t && (n[r] = Array.from(t.getDomain()));
	}
	return Object.keys(n).length ? n : void 0;
}
function Od(e, t, n) {
	for (let r of jd(e, n)) {
		let e = Array.from(ll(r)).filter((e) => e instanceof Xo);
		if (e.length && (!ul(r) || e.some((e) => !Pd(e, t)))) return !1;
	}
	return !0;
}
function kd(e, t, n, r, i) {
	let a = i ?? Md;
	return new Promise((i, o) => {
		let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = () => {
			f(), d();
		}, u = () => {
			for (let e of s) e();
			s.clear(), e.removeBroadcastListener("subtreeDataReady", l), r && r.removeEventListener("abort", p);
		}, d = () => {
			Od(t, n, a) && (u(), i());
		}, f = () => {
			for (let e of jd(t, a)) for (let t of ll(e)) t instanceof xd && !c.has(t) && (c.add(t), s.add(t.observe(d)));
		}, p = () => {
			u(), o(/* @__PURE__ */ Error("Lazy subtree readiness was aborted."));
		};
		if (e.addBroadcastListener("subtreeDataReady", l), r) {
			if (r.aborted) {
				p();
				return;
			}
			r.addEventListener("abort", p, { once: !0 });
		}
		try {
			f(), Nd(t, n, a), d();
		} catch (e) {
			u(), o(e);
		}
	});
}
function Ad(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of jd(e, t)) for (let e of ll(r)) e instanceof Xo && n.add(e);
	return n;
}
function jd(e, t) {
	let n = t ?? Md, r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		e instanceof J && n(e) && e.flowHandle?.collector && r.add(e.flowHandle.collector);
	}), r;
}
function Md(e) {
	return e.isConfiguredVisible() && e.getEffectiveOpacity() > 0;
}
function Nd(e, t, n) {
	for (let r of Ad(e, n)) {
		let e = Fd(r, t);
		e && r.ensureDataForDomain(e);
	}
}
function Pd(e, t) {
	let n = Fd(e, t);
	return !!n && e.isDataReadyForDomain({ [e.channel]: n });
}
function Fd(e, t) {
	return t?.[e.channel] ?? (t ? void 0 : Array.from(e.scaleResolution.getDomain()));
}
//#endregion
//#region ../core/src/scales/viewportDomain.js
var Id = 150;
function Ld(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && e.source === "viewport";
}
function Rd(e, t) {
	let n = [];
	t?.domain !== void 0 && n.push(t);
	for (let t of e) {
		let e = t.channelDef.scale?.domain;
		t.contributesToDomain && e !== void 0 && n.push({
			channel: t.channel,
			type: t.channelDef.type,
			domain: e
		});
	}
	let r = n.filter((e) => Ld(e.domain));
	for (let e of r) if (e.type === "nominal" || e.type === "ordinal") throw Error(`Viewport-derived domains require a continuous scale, but channel "${e.channel}" has type "${e.type}".`);
	if (r.length > 0 && r.length !== n.length) throw Error("Cannot mix viewport-derived and other configured domains on a shared scale.");
	return r.length > 0;
}
function zd(e, t, n, r) {
	let i = t(), a = Wu(i), o = !1;
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let s = r(t), c = t.view.getCollector();
		for (let t of e) c ? (a.extendAll(c.getViewportDomain(Ue(t, i), i, t, s)), o = !0) : t.constant && (a.extend(t({})), o = !0);
	}
	return o ? a : void 0;
}
function Bd(e, t, n, r) {
	let i = [];
	for (let n of d) {
		let a = e.view.getScaleResolution(n);
		if (!a || a === t) continue;
		if (r(a)) throw Error(`Viewport-derived scale domains form a dependency cycle in view "${e.view.getPathString()}".`);
		let o = a.getScale();
		if (!B(o.type) || V(o.type)) continue;
		let s = e.view.mark.encoders?.[n];
		if (!s) continue;
		let c = Wd(s);
		if (!c) continue;
		let l = n === "x" ? "x2" : "y2", u = e.view.mark.encoders?.[l], d = u ? Wd(u) : void 0, f = a.getDomain();
		i.push({
			channel: n,
			domain: [f[0], f.at(-1)],
			accessor: c,
			...d && { accessor2: d }
		});
	}
	if (i.length === 0) {
		let t = e.view.getPathString?.() ?? e.view.name ?? "(unknown)";
		throw Error(`Viewport-derived ${n} domain in view "${t}" requires an independent continuous positional scale.`);
	}
	return i;
}
function Vd(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) for (let e of d) {
		let i = r.view.getScaleResolution(e);
		i && i !== t && n.add(i);
	}
	return n;
}
function Hd(e, t) {
	for (let n of e) {
		if (!n.view.getCollector()?.completed) return !1;
		let e = {};
		for (let r of t(n)) e[r.channel] = Array.from(r.domain);
		if (!Od(n.view, e, (e) => e === n.view)) return !1;
	}
	return !0;
}
var Ud = class {
	#e;
	#t = !1;
	constructor({ isReady: e, update: t }) {
		this.isReady = e, this.update = t;
	}
	schedule(e) {
		if (e && this.#t && this.isReady()) {
			this.#t = !1, this.update();
			return;
		}
		clearTimeout(this.#e), this.#t = !1, this.#e = setTimeout(() => {
			this.#e = void 0, this.isReady() ? this.update() : this.#t = !0;
		}, Id);
	}
	clear() {
		clearTimeout(this.#e), this.#e = void 0, this.#t = !1;
	}
};
function Wd(e) {
	return De(e) ?? at(e).find(n);
}
//#endregion
//#region ../core/src/genome/locusFormat.js
var Gd = F(",d");
function Kd(e) {
	return e.chrom + ":" + Gd(Math.floor(e.pos + 1));
}
function qd(e) {
	return !ie(e) && "chrom" in e ? Kd(e) : "" + e;
}
function Jd(e, t) {
	return e.chrom + ":" + Gd(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + Gd(Math.ceil(t.pos));
}
//#endregion
//#region ../core/src/genome/genomes.js
var Yd = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function Xd(e) {
	if (!(e in Yd)) throw Error(`Unknown assembly: ${e}`);
	return Yd[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region ../core/src/genome/genome.js
var Zd = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/grammar/genomic-coordinates/.");
		if (!nf(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, af(this.config)) this.setChromSizes(this.config.contigs);
		else if (!rf(this.config)) {
			let e = Xd(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/grammar/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (rf(this.config)) try {
			let t = In(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(Qd(await n.text()));
		} catch (e) {
			throw Error(`Could not load chrom sizes: ${this.config.url}. Reason: ${e.message}`, { cause: e });
		}
	}
	hasChrPrefix() {
		return this.chromosomes.some((e) => e.name.startsWith("chr"));
	}
	setChromSizes(e) {
		this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map();
		let t = 0;
		this.startByIndex = [0];
		for (let n = 0; n < e.length; n++) {
			this.startByIndex.push(t);
			let r = e[n].size, i = {
				...e[n],
				continuousStart: t,
				continuousEnd: t + r,
				continuousInterval: [t, t + r],
				index: n,
				number: n + 1,
				odd: !(n & 1)
			};
			this.chromosomes.push(i);
			let a = i.name.replace(/^chr/i, "");
			for (let e of [
				"chr" + a,
				"CHR" + a,
				"Chr" + a,
				i.number,
				"" + i.number,
				a,
				i.name
			]) this.cumulativeChromPositions.set(e, t), this.chromosomesByName.set(e, i);
			t += i.size;
		}
		this.totalSize = t;
	}
	getExtent() {
		return [0, this.totalSize];
	}
	toContinuous(e, t) {
		let n = this.cumulativeChromPositions.get(e);
		if (n === void 0) throw Error("Unknown chromosome/contig: " + e);
		return n + +t;
	}
	toChromosome(e) {
		if (e > this.totalSize) return;
		e = Math.floor(e);
		let t = nn(this.startByIndex, e) - 1;
		if (t > 0 && t <= this.chromosomes.length) return this.chromosomes[t - 1];
	}
	toChromosomal(e) {
		let t = this.toChromosome(e);
		if (t) return {
			chrom: t.name,
			pos: Math.floor(e) - t.continuousStart
		};
	}
	getChromosome(e) {
		return this.chromosomesByName.get(e);
	}
	formatInterval(e) {
		return Jd(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return Kd(t);
	}
	toChromosomalInterval(e) {
		let t = this.toChromosomal(e[0] + .5), n = this.toChromosomal(e[1] - .5);
		return n.pos += 1, [t, n];
	}
	toContinuousInterval(e) {
		let [t, n] = e;
		return n ||= t, [this.toContinuous(t.chrom, t.pos ?? 0), this.toContinuous(n.chrom, n.pos ?? this.chromosomesByName.get(n.chrom)?.size)];
	}
	toDiscreteChromosomeIntervals(e) {
		let t = e[0], n = e[1], r = [];
		if (t.chrom === n.chrom) r.push({
			chrom: t.chrom,
			startPos: t.pos,
			endPos: n.pos
		});
		else {
			let e = this.chromosomes.findIndex((e) => e.name === t.chrom), i = this.chromosomes.findIndex((e) => e.name === n.chrom);
			r.push({
				chrom: t.chrom,
				startPos: t.pos,
				endPos: this.chromosomes[e].size
			});
			for (let t = e + 1; t < i; t++) r.push({
				chrom: this.chromosomes[t].name,
				startPos: 0,
				endPos: this.chromosomes[t].size
			});
			r.push({
				chrom: n.chrom,
				startPos: 0,
				endPos: n.pos
			});
		}
		return r;
	}
	continuousToDiscreteChromosomeIntervals(e) {
		return this.toDiscreteChromosomeIntervals([this.toChromosomal(e[0]), this.toChromosomal(e[1])]);
	}
	parseInterval(e) {
		let t = e.match(/^(chr[0-9A-Z]+)(?::([0-9,]+)(?:-(?:(chr[0-9A-Z]+):)?([0-9,]+))?)?$/);
		if (t) {
			let e = t[1];
			if (t.slice(2).every((e) => e === void 0)) {
				let t = this.getChromosome(e);
				return t ? [t.continuousStart, t.continuousEnd] : void 0;
			}
			let n = t[3] || e, r = parseInt(t[2].replace(/,/g, "")), i = t[4] === void 0 ? r : parseInt(t[4].replace(/,/g, ""));
			return [this.toContinuous(e, r - 1), this.toContinuous(n, i)];
		}
	}
};
function Qd(e) {
	return qi(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function $d(t) {
	return e(t) && "chrom" in t;
}
function ef(e) {
	return e.every($d);
}
function tf(e) {
	return ef(e) && (e[1] ?? e[0]).pos !== void 0;
}
function nf(t) {
	return e(t) && ("name" in t || rf(t) || af(t));
}
function rf(e) {
	return nf(e) && "url" in e;
}
function af(e) {
	return nf(e) && "contigs" in e;
}
//#endregion
//#region ../core/src/scales/domainPlanner.js
function of(e, t, n, r, i, a) {
	let o = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => {
		let t = e.channelDef.scale?.domain;
		return t && !Ld(t);
	}), s = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	t?.domain !== void 0 && !Ld(t.domain) && cf(s, lf(t, n, r, i, a));
	for (let e of o) cf(s, lf({
		channel: e.channel,
		type: e.channelDef.type,
		domain: e.channelDef.scale.domain
	}, n, r, i, a));
	return ff(s);
}
function sf(e, t, n) {
	let r = Array.from(e).filter((e) => e.contributesToDomain).map((e) => ({
		channel: e.channel,
		domain: e.channelDef.scale?.domain
	}));
	t && r.push(t);
	let i = !1, a;
	for (let { channel: e, domain: t } of r) {
		if (t === void 0 || Ld(t)) continue;
		if (!_f(t)) {
			i = !0;
			continue;
		}
		let r = gf(e, t, t.param), { runtime: o } = n(t.param, r);
		if (a && (a.runtime !== o || a.param !== t.param || a.encoding !== r)) throw Error("Conflicting selection domain references on a shared scale: " + a.param + "." + a.encoding + " vs " + t.param + "." + r + ".");
		a = {
			runtime: o,
			param: t.param,
			encoding: r,
			hasInitial: (a?.hasInitial ?? !1) || t.initial !== void 0
		};
	}
	if (a && i) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	return a;
}
function cf(e, t) {
	t.kind === "selection" ? uf(e, t) : df(e, t);
}
function lf(e, t, n, r, i) {
	let a = e.domain;
	return _f(a) ? {
		kind: "selection",
		...pf(e, a, n, r, i)
	} : {
		kind: "literal",
		domain: mf(e.type, Ku(a, t), r)
	};
}
function uf(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function df(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function ff(e) {
	return e.domains.length > 0 ? {
		domain: e.domains.reduce((e, t) => e.extendAll(t)),
		selectionRef: e.selectionRef
	} : e.selectionRuntime ? {
		domain: void 0,
		selectionRef: e.selectionRef
	} : {
		domain: void 0,
		selectionRef: void 0
	};
}
function pf(e, t, n, r, i) {
	let a = t.param, o = gf(e.channel, t, a), s = n(a, o), c = t.initial !== void 0, l = s.selection?.intervals[o], u = a + "." + o;
	return !l || l.length !== 2 ? {
		domain: i && t.initial ? mf(e.type, t.initial, r) : void 0,
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	} : {
		domain: Wu(e.type, r(l)),
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	};
}
function mf(e, t, n) {
	let r = n(t);
	return Wu(e, e === "locus" && ef(t) && !tf(t) ? r : vn(e, r));
}
function hf(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => Iu(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function gf(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = lt(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function _f(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function vf(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = Ue(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = Wu(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = Wu(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function yf(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? n?.length ? gn(e, n) : [] : n ?? [];
}
function bf(e) {
	let t = e.view.mark.encoders?.[e.channel];
	return t ? at(t).filter(n) : [];
}
//#endregion
//#region ../core/src/scales/domainInputs.js
function xf({ owner: e, manager: t, props: n, explicit: r, type: i, members: a, dataMembers: o, viewLevelDomain: s, createExpression: c, resolveSelectionBinding: l, fromComplexInterval: u, getLocusExtent: d, link: f, viewport: p, viewportDependencies: m, getConstraints: h, getZoomExtent: g, ignoreSelectionInitial: _, lastVisible: v }) {
	let y = e.runtime, b = Array.from(a, (e) => e.view);
	e.policy = () => ({
		zoomable: B(n.type) && !V(n.type) && !!n.zoom,
		scaleKind: n.type === "index" ? "index" : B(n.type) && !V(n.type) ? "continuous" : "discrete",
		rendered: b.some((e) => e.hasRendered()),
		animateChanges: n.domainTransition !== !1,
		selectionLinked: !!f
	});
	let x = [];
	try {
		let b = /* @__PURE__ */ new Map();
		for (let e of [s?.domain, ...Array.from(a, (e) => e.contributesToDomain ? e.channelDef.scale?.domain : void 0)]) for (let t of qu(e)) b.has(t.expr) || b.set(t.expr, c(t.expr));
		let S = new Set(Array.from(b.values()).flatMap((e) => (e.zoomLevelResolutions ?? []).filter((e) => e.isZoomable()))), C = new Map(Array.from(o, (e) => [e, bf(e).filter((e) => !e.channelDef.domainInert)])), w = new Map(Array.from(o, (e) => [e, (p && e.view.mark.encoders ? h(e) : []).map((t) => {
			let n = e.view.getScaleResolution(t.channel);
			return {
				...t,
				get domain() {
					let e = n.getDomain();
					return [e[0], e.at(-1)];
				}
			};
		})])), T = y.signal("selection domain input", {
			value: f ? Nu(f.runtime.getValue(f.param), f.param) : void 0,
			own: !1,
			ignoreInitial: _
		});
		x.push(T.dispose);
		let E, D, O = [], k = !1, A = y.computed("configured domain", [T, ...Array.from(b.values()).flatMap((e) => e.dependencies)], () => of(a, s, (e) => b.get(e), f ? () => ({
			runtime: f.runtime,
			selection: T.get().value
		}) : l, u, !T.get().ignoreInitial).domain, { equals: (e, t) => yu(e, t) });
		x.push(A.dispose);
		let j = () => {
			if (p) {
				let e = zd(o, () => i, (e) => C.get(e), (e) => w.get(e));
				return e?.length && (v = e), e?.length ? e : v;
			}
			return vf(o, () => i, (e) => C.get(e));
		}, ee = () => Array.from(o).every((e) => {
			if (!e.view.isDataInitialized()) {
				let t = e.channelDef.scale?.domain;
				return t !== void 0 && !Ld(t);
			}
			if (!e.view.mark.encoders?.[e.channel]) return !1;
			if (C.get(e).every((e) => e.constant)) return !0;
			let t = e.view.getCollector();
			return !!t && ul(t);
		}), M = (e) => yf(i, d, e, n.assembly), te = () => {
			let a = D;
			if (D = void 0, k || !a) return;
			if (a === "selection-sync") {
				e.update({
					type: a,
					candidate: e.state.visibleDomain,
					resetDomain: t.normalizeDomain(A.get() ?? M(void 0)),
					referenceDomain: e.state.initialReference,
					dataExtent: e.state.dataExtent,
					readiness: e.state.phase === "ready" ? "ready" : "pending"
				});
				return;
			}
			let s = A.get(), c = i !== "locus" && (!s || f) || typeof n.zoom == "object" && n.zoom.extent === "data" ? j() : void 0;
			O = M(c);
			let l = s ?? O, u = t.domainProps(n, l, r), d = t.prepareDomain(u);
			d.applyOrdinalUnknown && t.scale.unknown(d.ordinalUnknown), V(n.type) && (t.scale.props.domainIndexer = u.domainIndexer);
			let p = a === "viewport" && !Hd(o, (e) => w.get(e)) ? void 0 : d.domain ?? void 0;
			e.update({
				type: a,
				candidate: p,
				resetDomain: t.normalizeDomain(s ?? M(void 0)),
				referenceDomain: f ? O : p,
				dataExtent: typeof n.zoom == "object" && n.zoom.extent === "data" && c?.length ? Array.from(gn(i, c)) : void 0,
				readiness: e.state.phase === "ready" || ee() ? "ready" : "pending"
			});
		}, N = (e) => {
			(!D || e === "selection" || D !== "selection" && e !== "selection-sync" && (e !== "data" || D === "selection-sync")) && (D = e), y.requestUpdate(te, Au - 1, () => {
				D = void 0;
			});
		}, ne = new Ud({
			isReady: () => Hd(o, (e) => w.get(e)),
			update: () => {
				N("viewport"), y.flushNow({ afterTransaction: !0 });
			}
		});
		for (let t of m) x.push(t.getDomainRef().subscribe(() => {
			e.state.phase === "ready" ? ne.schedule(!1) : N("viewport");
		}));
		x.push(() => ne.clear()), x.push(A.subscribe(() => N(f ? T.get().own ? "selection-sync" : "selection" : "expression"))), f && x.push(f.runtime.subscribe(f.param, () => {
			let e = T.get(), t = Nu(f.runtime.getValue(f.param), f.param), n = t?.intervals[f.encoding], r = E !== void 0 && t === E;
			T.set({
				value: t,
				own: r,
				ignoreInitial: n ? !1 : e.value?.intervals[f.encoding] ? !0 : e.ignoreInitial
			}), N(r ? "selection-sync" : "selection");
		}));
		let re = () => {
			p && e.state.phase === "ready" ? ne.schedule(!0) : N("data"), y.flushNow({ afterTransaction: !0 });
		}, ie = /* @__PURE__ */ new Map();
		for (let e of o) {
			let t = e.view.getCollector();
			if (!t) continue;
			let n = ie.get(t);
			n || (n = {
				keys: /* @__PURE__ */ new Set(),
				sensitive: me(t)
			}, ie.set(t, n));
			for (let t of C.get(e)) !r && n.sensitive.has(lt(t.scaleChannel)) || n.keys.add(Ue(t, i));
		}
		for (let [e, { keys: t }] of ie) for (let n of t) x.push(e.subscribeDomainChanges(n, re));
		return {
			zoomLevelResolutions: S,
			get lastVisible() {
				return v;
			},
			get ignoreSelectionInitial() {
				return T.get().ignoreInitial;
			},
			request: N,
			readData: j,
			syncSelection() {
				if (!f || !n.zoom || !B(n.type) || V(n.type)) return;
				let t = Nu(f.runtime.getValue(f.param), f.param);
				if (!t) return;
				let r = Lu(e.state.visibleDomain, g());
				if (!r) return;
				let i = yu(r, Lu(O, g())) ? null : r;
				if (yu(t.intervals[f.encoding] ?? null, i)) return;
				let a = {
					...t,
					intervals: {
						...t.intervals,
						[f.encoding]: i
					}
				};
				E = a;
				try {
					f.runtime.setValue(f.param, a);
				} finally {
					E = void 0;
				}
			},
			dispose() {
				k = !0, y.cancelUpdate(te);
				for (let e of x) e();
			}
		};
	} catch (e) {
		for (let e of x.reverse()) e();
		throw e;
	}
}
//#endregion
//#region ../core/src/genome/scaleIndex.js
var Sf = 1;
function Cf() {
	let e = [0, 1], t = [0, 1], n = 1, r = 1, i = 0, a = 0, s = .5, c = 0, l = () => r / Math.max(1, n - i + a * 2), u = (e = l()) => t[0] + (r - e * (n - i)) * s, d = (e = l()) => e * (1 - i), f = (t) => {
		let n = l();
		return u(n) + (Math.floor(t) - e[0]) * n + d(n) * s;
	};
	return f.invert = (t) => (t - u() - d() * s) / l() + e[0], f.domain = function(t) {
		if (arguments.length) {
			e = oa(t), n = e[1] - e[0];
			let r = e[0] === 0 && e[0] === 0;
			if (n < Sf && !r) {
				n = Sf;
				let t = (e[0] + e[1]) / 2;
				e[0] = t - n / 2, e[1] = t + n / 2;
			}
			return f;
		} else return e.slice();
	}, f.range = function(e) {
		return arguments.length ? (t = [...e], r = t[1] - t[0], f) : t;
	}, f.numberingOffset = function(e) {
		return arguments.length ? (c = e, f) : c;
	}, f.padding = function(e) {
		return arguments.length ? (a = e, i = Math.min(1, e), f) : i;
	}, f.paddingInner = function(e) {
		return arguments.length ? (i = Math.min(1, e), f) : i;
	}, f.paddingOuter = function(e) {
		return arguments.length ? (a = e, f) : a;
	}, f.align = function(e) {
		return arguments.length ? (s = Math.max(0, Math.min(1, e)), f) : s;
	}, f.step = l, f.bandwidth = () => Math.abs(d()), f.ticks = (t) => {
		let r = f.align(), i = f.numberingOffset();
		return mt(e[0] - r + i, e[1] - r + i, Math.min(t, Math.ceil(n))).filter(Number.isInteger).map((e) => e - c);
	}, f.tickFormat = (t, r) => {
		if (r) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = o(e[0], e[1], Math.min(t, Math.ceil(n))) < 1e5 ? F(",") : F(".3s");
		return (e) => i(e + c);
	}, f.copy = () => Cf().domain(e).range(t).paddingInner(i).paddingOuter(a).align(s).numberingOffset(c), f;
}
//#endregion
//#region ../core/src/genome/scaleLocus.js
var wf = 1e6, Tf = .65;
function Ef() {
	let e = Cf().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), s = t.toChromosome(Math.max(r[0], 0)), c = t.toChromosome(Math.min(r[1], t.totalSize - 1)), l = Math.max(1, Math.min(n ?? 10, Math.floor(i))), u = o(r[0], r[1], l);
		u < wf && (u = o(r[0], r[1], l * Tf)), u = Math.max(1, u);
		let d = [];
		for (let e = s.index; e <= c.index; e++) {
			let n = t.chromosomes[e], i = Math.max(n.continuousStart + u, r[0] - (r[0] - n.continuousStart) % u), o = Math.min(n.continuousEnd - u / 4, r[1] + 1);
			for (let e = i; e <= o; e += u) {
				let t = e - a;
				t >= r[0] && t < r[1] && d.push(t);
			}
		}
		return d;
	}, e.tickFormat = (n, r) => {
		if (!t) return;
		if (r) throw Error("Locus scale's tickFormat does not support a specifier!");
		let i = e.domain(), a = i[1] - i[0], s = e.numberingOffset(), c = o(i[0], i[1], Math.max(1, Math.min(n ?? 10, Math.floor(a)))) < wf ? F(",") : F(".3s"), l = (e) => e - t.toChromosome(e).continuousStart;
		return (e) => c(l(e) + s);
	};
	let n = e.copy;
	return e.copy = () => {
		let e = n(), r = t;
		return e.genome = function(t) {
			return arguments.length ? (r = t, e) : r;
		}, e.genome(t);
	}, e;
}
function Df(e) {
	return e.type == "locus";
}
function Of(e, t) {
	let n = Nf(e);
	return n ? n.toChromosomal(t) : t;
}
function kf(e, t) {
	let n = Nf(e);
	return n && $d(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function Af(e, t) {
	let n = Nf(e);
	return n && ef(t) ? n.toContinuousInterval(t) : t;
}
function jf(e, t) {
	let n = Nf(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function Mf(e) {
	let t = Nf(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function Nf(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region ../core/src/scales/scaleInstanceManager.js
var Pf = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	mapping;
	#a;
	#o = !1;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p = !1;
	#m;
	#h;
	constructor({ getRuntime: e, createExpression: t, onRangeChange: n, onDomainChange: r, getGenomeStore: i }) {
		this.#r = e, this.#c = t, this.#l = n, this.#u = r, this.#f = i;
	}
	get scale() {
		return this.#e;
	}
	get initializingRange() {
		return this.#p;
	}
	resetScale() {
		this.#o = !1, this.#a?.set(null), this.#e = void 0, this.#s = void 0, this.#d = void 0, this.#h = void 0, this.#t = void 0;
	}
	getLocusGenome(e) {
		let t = this.#f();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e, t) {
		let n = xs({
			...this.#y(e),
			range: void 0
		});
		n.props = e, "unknown" in n && n.unknown(null), this.#e = n, this.#t = typeof n.range == "function" ? n.range() : void 0, this.#g(e), this.#d = n.domain, n.type !== "null" && (this.#i = t(n.domain())), this.#s = n.range, this.#n || (this.#n = new Sn(() => this.#r()), this.#a = this.#n.signal("range command", null), this.mapping = this.#n.operation("scale mapping", [], () => null, (e) => {
			e && this.#v(e);
		}, { equals: If }), this.#n.effect([this.mapping], this.#l)), this.#p = !0;
		try {
			this.configureMapping(e), this.#n.flushNow();
		} finally {
			this.#p = !1;
		}
		return this.#b(), this.#e;
	}
	#g(e) {
		let t = this.#e;
		!t || !Df(t) || t.genome(this.getLocusGenome(e.assembly));
	}
	domainProps(e, t, n) {
		let r = { ...e };
		if (V(e.type)) {
			let e = this.#m ??= yn();
			e.addAll(t ?? []);
			let i = t && new Set(t), a = n ? t ?? [] : e.domain().filter((e) => !i || i.has(e));
			r.domain = a.length ? a : new Vu(), r.domainIndexer = e;
		} else t?.length && (r.domain = t);
		return !r.domain && r.domainMid !== void 0 && (r.domain = [r.domainMin ?? 0, r.domainMax ?? 1]), r;
	}
	prepareDomain(e) {
		let t = this.#e.copy();
		return t.type = this.#e.type, ys(t, this.#y(e)), Ts(t, e);
	}
	configureProperties(e) {
		this.#h = void 0, this.#e.props = e;
	}
	configureMapping(e) {
		let t = this.#e, n = t.type === "null" ? [] : [this.#i, this.#a], r = Array.isArray(e.range) ? e.range.map((e) => {
			if (!I(e)) return () => e;
			let t = this.#c(e.expr);
			return n.push(...t.dependencies), t;
		}) : void 0;
		this.#p = !1, this.mapping.rebind(n, () => {
			let n = r?.map((e) => e(null));
			e.reverse && n?.reverse();
			let i = this.#a.get(), a = this.#o && i !== null && i.props === e && Ff(i.configuredRange, n);
			i && !a && (this.#o = !1);
			let o = i && a ? i.range : n, s = this.mapping.get(), c = t.type === "null" || s?.scale === t && s?.props === e ? void 0 : this.#_(e);
			return {
				scale: t,
				props: e,
				domain: t.type === "null" ? [] : this.#i.get(),
				configuredRange: n,
				range: o,
				prepared: c
			};
		}), this.#n.flushNow({ afterTransaction: !0 });
	}
	#_(e) {
		e = this.#y(e);
		let t = this.#e.copy();
		return t.type = this.#e.type, ys(t, e), bs(t, {
			...e,
			range: void 0
		}), Object.assign(t, { props: e });
	}
	#v({ props: e, range: t, prepared: n }) {
		!this.#e || this.#e.type === "null" || (n && (ys(this.#e, n.props), this.#s && this.#s(n.range()), "interpolator" in n && "interpolator" in this.#e && this.#e.interpolator(n.interpolator()), "bins" in n ? this.#e.bins = n.bins : delete this.#e.bins), t ? this.#s(t) : e.scheme === void 0 && !("rangeStep" in e) && this.#t && this.#s(this.#t));
	}
	normalizeDomain(e) {
		return this.#h ??= this.#e.copy(), this.#h.domain(Array.from(e)), this.#h.domain();
	}
	mirrorDomain(e) {
		this.#d(Array.from(e));
	}
	#y(e) {
		let { assembly: t, domainIndexer: n, ...r } = e;
		return r;
	}
	#b() {
		let e = this.#e, t = e.range, n = e.domain, r = (e) => {
			let t = this.mapping.get();
			this.#o = !0, this.#a.set({
				range: Array.from(e),
				configuredRange: t.configuredRange,
				props: t.props
			}), this.#n.flushNow({ afterTransaction: !0 });
		}, i = this.#u;
		typeof t == "function" && (e.range = (function(n) {
			return arguments.length ? (r(n), e) : t();
		})), typeof n == "function" && (e.domain = (function(t) {
			return arguments.length ? (i(Array.from(t)), e) : n();
		}));
	}
	dispose() {
		this.#n?.dispose();
	}
};
function Ff(e, t) {
	return e === t || !!e && !!t && L(e, t);
}
function If(e, t) {
	return e === t || !!e && !!t && e.scale === t.scale && e.props === t.props && L(e.domain, t.domain) && Ff(e.configuredRange, t.configuredRange) && Ff(e.range, t.range);
}
//#endregion
//#region ../core/src/utils/mergeObjects.js
function Lf(t, n, r) {
	if (r ||= [], t.some((e) => e === null)) {
		if (t.every((e) => e === null)) return null;
		throw console.warn(t), Error("Cannot merge objects with nulls!");
	}
	let i = {}, a = (t, n) => t === n || Rf(t) && Rf(n) || Rf(t) && n === !0 || t === !0 && e(n) || Array.isArray(t) && Array.isArray(n) && t.length === n.length && t.every((e, t) => e === n[t]), o = (e) => {
		for (let t in e) {
			let o = e[t];
			if (!r.includes(t) && o !== void 0) if (i[t] !== void 0 && !a(i[t], o)) console.warn(`Conflicting property ${t} of ${n}: (${JSON.stringify(i[t])} and ${JSON.stringify(e[t])}). Using ${JSON.stringify(i[t])}.`);
			else {
				let e = i[t];
				if (Rf(e)) Rf(o) && (i[t] = Lf([e, o], t));
				else if (Rf(o)) {
					if (!(e === !0 || e === void 0)) throw Error("Bug in merge! Target is: " + e);
					i[t] = Lf([{}, o], t);
				} else i[t] = o;
			}
		}
	};
	for (let e of t) o(e);
	return i;
}
function Rf(t) {
	return e(t) && !Array.isArray(t);
}
//#endregion
//#region ../core/src/config/scaleConfig.js
var zf = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, Bf = /* @__PURE__ */ new Set(["rect"]), Vf = /* @__PURE__ */ new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function Hf(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function Uf(e) {
	return Vf.has(e);
}
function Wf(e, t) {
	if (Uf(t)) return Jf(e)[t];
}
function Gf(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function Kf(e) {
	if (!e) return {};
	let t = { ...e };
	for (let e of [
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus",
		"nominalColorScheme",
		"ordinalColorScheme",
		"quantitativeColorScheme",
		"indexColorScheme",
		"locusColorScheme"
	]) delete t[e];
	return t;
}
function qf(e, t) {
	let n = Gf(t);
	return H(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function Jf(e) {
	return H(e.map((e) => e.range));
}
function Yf(e, { channel: t, dataType: n, isExplicitDomain: r, markTypes: i, hasDomainMid: a }) {
	let o = qf(e, n), s = Jf(e), c = { ...Kf(o) };
	if (r ? c.zero = !1 : c.zero === void 0 && o.zero !== void 0 && (c.zero = o.zero), ce(t) && c.nice === void 0 && (c.nice = o.nice === void 0 ? !r : o.nice), Ie(t) && c.scheme === void 0) if (n == "quantitative") {
		let e = a || o.domainMid !== void 0 ? s.diverging : i?.length && i.every((e) => Bf.has(e)) ? s.heatmap : s.ramp, t = Hf(e) ? e : o.quantitativeColorScheme;
		Hf(t) && (c.scheme = t);
	} else {
		let e = o[zf[n] ?? zf.quantitative];
		Hf(e) && (c.scheme = e);
	}
	else Se(t) && c.range === void 0 ? t == "shape" ? c.range = s.shape ?? [] : t == "direction" ? c.range = ["forward", "reverse"] : c.range = [] : t == "size" && c.range === void 0 ? c.range = s.size : t == "angle" && c.range === void 0 && (c.range = s.angle);
	return c;
}
//#endregion
//#region ../core/src/scales/scaleRules.js
function Xf(e, t) {
	if (t == "index" || t == "locus") {
		if (s(e)) return t;
		throw Error(e + " does not support " + t + " data type. Only positional channels do.");
	}
	let n = {
		x: [
			"band",
			"band",
			"linear"
		],
		y: [
			"band",
			"band",
			"linear"
		],
		xOffset: [
			"band",
			"band",
			"linear"
		],
		yOffset: [
			"band",
			"band",
			"linear"
		],
		size: [
			void 0,
			"point",
			"linear"
		],
		opacity: [
			void 0,
			"point",
			"linear"
		],
		fillOpacity: [
			void 0,
			"point",
			"linear"
		],
		strokeOpacity: [
			void 0,
			"point",
			"linear"
		],
		color: [
			"ordinal",
			"ordinal",
			"linear"
		],
		fill: [
			"ordinal",
			"ordinal",
			"linear"
		],
		stroke: [
			"ordinal",
			"ordinal",
			"linear"
		],
		strokeWidth: [
			void 0,
			void 0,
			"linear"
		],
		shape: [
			"ordinal",
			"ordinal",
			void 0
		],
		dx: [
			void 0,
			void 0,
			"null"
		],
		dy: [
			void 0,
			void 0,
			"null"
		],
		angle: [
			void 0,
			void 0,
			"linear"
		],
		sample: [
			"null",
			void 0,
			void 0
		]
	}, r = ["sample"].includes(e) ? "null" : n[e] ? n[e][[
		bn,
		fn,
		pn
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function Zf(e, t, n, r) {
	if (n) {
		if (["index", "locus"].includes(n) && !s(e)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${e}" resolves to scale type "${n}".`);
		if (["index", "locus"].includes(t) && n !== t || n === "locus" && n !== t) throw Error(`${r} "${n}" is incompatible with "${t}" data.`);
	}
}
function Qf(e, t) {
	ce(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && B(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region ../core/src/scales/scalePropsResolver.js
function $f({ channel: e, dataType: t, orderedMembers: n, viewLevelScaleProps: r, isExplicitDomain: i, configScopes: a, getOwnerScaleResolution: o }) {
	let c = n, l = c.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), u = Lf(r ? [r.props] : c.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (u === null || u.type == "null") return { type: "null" };
	let d = {
		...Yf(a, {
			channel: e,
			dataType: t,
			isExplicitDomain: i,
			markTypes: l,
			hasDomainMid: u.domainMid !== void 0
		}),
		...u
	};
	if (d.type ||= Xf(e, t), s(e) && c.some((t) => Te(t.view.getEncoding()[Ge(e)])) && d.type == "band" && d.padding === void 0 && (d.paddingInner ??= .2, d.paddingOuter ??= .2), Zf(e, t, r ? d.type : void 0, `View-level scales.${e}.type`), typeof d.range == "string") {
		if (!Uf(d.range)) throw Error("Unknown named scale range \"" + d.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let t = Wf(a, d.range);
		if (t === void 0) throw Error("Named scale range \"" + d.range + "\" is not configured in config.range.");
		Ie(e) && (typeof t == "string" || typeof t == "object" && t && !Array.isArray(t)) ? (d.scheme = t, delete d.range) : d.range = t;
	}
	if (e == "y" && V(d.type) && d.reverse == null && (d.reverse = !0), vt(e) && V(d.type) && !d.range) {
		let t = e == "xOffset" ? "x" : "y", n = o?.(t);
		n?.getResolvedScaleType() == "band" && (n.getScale(), d.range = [0, { expr: `bandwidth("${t}") * ${t == "x" ? "width" : "height"}` }]);
	}
	if (d.range && d.scheme && delete d.scheme, d.domainTransition === void 0 && (d.domainTransition = !(c.some((e) => qu(e.channelDef.scale?.domain).length > 0) || qu(r?.props.domain).length > 0)), !("zoom" in d)) {
		let e = qf(a, t);
		e.zoom === void 0 ? ["index", "locus"].includes(d.type) && (d.zoom = !0) : d.zoom = e.zoom;
	}
	return Qf(d, e), d;
}
//#endregion
//#region ../core/src/scales/zoomDomainUtils.js
function ep(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type) {
		case "linear":
		case "index":
		case "locus": return We(t, n, r);
		case "log": return ct(t, n, r);
		case "pow":
		case "sqrt": return Oe(t, n, r, e.exponent());
		case "symlog": return Me(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region ../core/src/scales/scaleInteractionController.js
var tp = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor({ getScale: e, navigate: t, renderImmediately: n, getInitialDomainSnapshot: r, getDataZoomExtent: i, getResetDomain: a, fromComplexInterval: o, getGenomeExtent: s }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o, this.#s = s;
	}
	getZoomExtent() {
		let e = this.#e(), t = e.props.zoom;
		return rp(e, t, this.#o, this.#s, this.#r, this.#i);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return B(e) && !V(e);
	}
	isZoomed() {
		return this.isZoomingSupported() && !L(this.#a(), this.#e().domain());
	}
	zoom(e, t, n) {
		if (!this.isZoomingSupported()) return !1;
		let r = this.#e(), i = r.domain(), a = ip(r, i, e, t, n), o = this.getZoomExtent();
		return a = w(a, o[0], o[1]), [0, 1].some((e) => a[e] != i[e]) ? (this.#t(a, 0), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		let { duration: n, renderImmediately: r } = np(t);
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let i = ap(this.#e().type, e, this.#o);
		if (n > 0 && r) throw Error("renderImmediately is not supported for animated zooms.");
		let a = this.#t(i, n, r);
		return r && this.#n(), a;
	}
	resetZoom() {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let e = this.#e(), t = e.domain(), n = this.#a();
		return this.#t(n, 0), !L(t, e.domain());
	}
	getZoomLevel() {
		if (this.isZoomable()) {
			let e = this.getZoomExtent();
			return Ze(e.every(Number.isFinite) ? e : this.#r() ?? this.#e().domain()) / Ze(this.#e().domain());
		}
		return 1;
	}
};
function np(e) {
	if (e === void 0) return {
		duration: 0,
		renderImmediately: !1
	};
	if (ve(e)) return {
		duration: e ? 700 : 0,
		renderImmediately: !1
	};
	if (typeof e == "number") return {
		duration: e,
		renderImmediately: !1
	};
	let t = e.duration ?? 0;
	return {
		duration: ve(t) ? t ? 700 : 0 : t,
		renderImmediately: e.renderImmediately === !0
	};
}
function rp(e, t, n, r, i, a) {
	if (op(t)) {
		if (be(t.extent)) return ap(e.props.type, t.extent, n);
		if (t.extent === "data") return a() ?? i() ?? e.domain();
		if (t.extent === "unbounded") {
			if (e.props.type === "locus") throw Error("Zoom extent \"unbounded\" is not supported for locus scales.");
			return [-Infinity, Infinity];
		}
	}
	return t && e.props.type == "locus" ? r() : i() ?? e.domain();
}
function ip(e, t, n, r, i) {
	let a = [...t], o = e.invert(r);
	switch (e.props.reverse && (i = -i), "align" in e && (o += e.align()), e.type) {
		case "linear":
		case "index":
		case "locus":
			a = Je(a, i || 0);
			break;
		case "log":
			a = nt(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = Re(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	return ep(e, a, o, n);
}
function ap(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && ef(t) && !tf(t) ? r : vn(e, r);
}
function op(t) {
	return e(t);
}
//#endregion
//#region ../core/src/scales/resolutionMemberOrder.js
function sp(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function cp(e) {
	return Array.from(e).sort((e, t) => sp(e).localeCompare(sp(t)));
}
//#endregion
//#region ../core/src/scales/resolutionOwnerPrecedence.js
function lp(e, t) {
	return e === t || e.getDataAncestors().includes(t) ? "incoming" : t.getDataAncestors().includes(e) ? "current" : "conflict";
}
cn("index", Cf, ["continuous"]), cn("locus", Ef, ["continuous"]), cn("null", hn, []);
var up = class {
	#e = /* @__PURE__ */ new Set();
	#t = !1;
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#i;
	#a;
	get #o() {
		return this.#i?.state;
	}
	#s = /* @__PURE__ */ new Set();
	#c;
	#l = {
		domain: /* @__PURE__ */ new Set(),
		range: /* @__PURE__ */ new Set()
	};
	#u;
	#d;
	#f = !1;
	#p;
	#m;
	#h = 0;
	#g = !1;
	#_;
	#v;
	#y;
	#b;
	get #x() {
		return this.#_ ??= new Sn(() => this.#C.paramRuntime);
	}
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#p = t, this.isExplicitlyOwned() && t.registerDisposer(() => this.dispose()), this.#u = new Pf({
			getRuntime: () => this.#x,
			createExpression: (e) => this.#T(e),
			onRangeChange: () => this.#N("range"),
			onDomainChange: (e) => {
				this.#ie({
					type: "set",
					domain: e
				});
			},
			getGenomeStore: () => this.#A.genomeStore
		}), this.#d = new tp({
			getScale: () => this.#u.scale ?? this.getScale(),
			navigate: (e, t, n = !1) => this.#ie({
				type: "navigate",
				domain: e,
				duration: t
			}, !n),
			renderImmediately: () => this.#i.renderImmediately(),
			getInitialDomainSnapshot: () => this.#o.initialReference,
			getDataZoomExtent: () => this.#o.dataExtent,
			getResetDomain: () => this.#o.resetDomain,
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#j()
		});
	}
	get #S() {
		let e = this.#e.values().next().value;
		if (!e) throw Error("ScaleResolution has no members!");
		return e.view;
	}
	isExplicitlyOwned() {
		let e = this.#p?.spec.scales?.[this.channel]?.type;
		return !!e && e !== "null";
	}
	get #C() {
		return this.#p ?? this.#S;
	}
	get #w() {
		if (!this.#m) {
			let e;
			for (let t of this.#e) if (!Fn(t.view)) {
				if (!e) e = t.view;
				else if (t.view !== e) return this.#C;
			}
			if (e) return e;
		}
		return this.#C;
	}
	#T(e) {
		try {
			return this.#w.paramRuntime.createExpression(e);
		} catch (e) {
			let t = e instanceof Error ? e.message : "", n = /^Unknown variable "([^"]+)" in expression: /.exec(t);
			throw n ? this.#O(n[1], e) : e;
		}
	}
	#E(e) {
		return this === e || Array.from(this.#a?.zoomLevelResolutions ?? []).some((t) => t.#E(e));
	}
	#D(e, t) {
		try {
			return Pu(this.#w, e, t);
		} catch (t) {
			throw !(t instanceof Error) || t.message !== `Selection domain parameter "${e}" was not found.` ? t : this.#O(e, t);
		}
	}
	#O(e, t) {
		let n = this.#w === this.#C && (this.#e.size > 1 || Array.from(this.#e).some((e) => e.view !== this.#C));
		return Error(`Parameter "${e}" is not visible from the ${n ? "shared " : ""}${this.channel} scale resolution. Move the parameter to the resolution-owning view and use push: "outer" if a child must update it.`, { cause: t });
	}
	#k(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			if (!e.isConfiguredVisible()) continue;
			let r = n.channelDef?.scale?.domain;
			!e.isDataInitialized() && (r === void 0 || Ld(r)) || t.add(n);
		}
		return t;
	}
	get #A() {
		return this.#C.context;
	}
	get zoomExtent() {
		return (this.#u.scale && B(this.#u.scale.type) && this.#d.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#j(e) {
		return Mf(this.#M(e));
	}
	#M(e) {
		if (this.type === "locus") return this.#u.scale ?? this.#u.getLocusGenome(e);
	}
	addEventListener(e, t) {
		this.#l[e].add(t);
	}
	removeEventListener(e, t) {
		this.#l[e].delete(t);
	}
	subscribeZoomExtent(e) {
		return this.#s.add(e), () => this.#s.delete(e);
	}
	#N(e) {
		let t = this.#C.paramRuntime;
		t.runInTransaction(() => {
			for (let t of this.#l[e].values()) t({
				type: e,
				scaleResolution: this
			});
		}), t.flushNow();
	}
	syncLinkedSelectionFromDomain() {
		this.#a?.syncSelection();
	}
	#P() {
		let e = sf(this.#k(), this.#W(), (e, t) => this.#D(e, t));
		return hf(this.#e, e), e;
	}
	#F() {
		return Rd(this.#e, this.#W());
	}
	#I() {
		return !(this.#a?.ignoreSelectionInitial ?? this.#f);
	}
	#L(e) {
		return of(this.#k(), this.#W(), (e) => this.#T(e), (e, t) => this.#D(e, t), this.fromComplexInterval.bind(this), this.#I()).domain ?? yf(this.type, (e) => this.#j(e), void 0, e);
	}
	#R() {
		let e = this.#m?.props.domain;
		if (e !== void 0 && !Ld(e)) return !0;
		for (let e of this.#e) {
			let t = e.channelDef.scale?.domain;
			if (e.contributesToDomain && t !== void 0 && !Ld(t)) return !0;
		}
		return !1;
	}
	#z(e) {
		let t = dp(e), { channel: n, channelDef: r } = t;
		this.#q(t);
		let i = r.type == null && this.type;
		if (n != "sample" && !r.type && !ht(n) && !i) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(r)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let a = n == "sample" ? "nominal" : r.type, o = r?.scale?.name, s = r.scale?.type ?? (a === "index" || a === "locus" ? a : void 0);
		if (Zf(this.channel, a, s, `encoding.${n}.scale.type`), o) {
			if (this.name !== void 0 && o != this.name) throw Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);
			this.name = o;
		}
		if (!i) {
			if (!this.type || this.#e.size === 0) this.type = a;
			else if (a !== this.type && !ht(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${a}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#r.add(t), t;
	}
	#B() {
		this.#t || (this.#Z(), this.#X(), this.#u.scale && (this.#e.size > 0 || this.isExplicitlyOwned()) && this.reconfigure());
	}
	#V() {
		this.#g || this.#B();
	}
	#H() {
		this.#Z(), this.#X();
		let e = this.#Y().range;
		if (this.#u.scale && (this.#L(), Array.isArray(e))) for (let t of e) I(t) && this.#T(t.expr);
	}
	static registerInBatch(e, t) {
		let n = Array.from(e);
		if (n.some((e) => e.#g)) throw Error("Overlapping scale registration batches are not supported.");
		let r = !1, i = n.map((e) => ({
			resolution: e,
			members: new Set(e.#e),
			dataDomainMembers: new Set(e.#r),
			type: e.type,
			name: e.name
		}));
		for (let e of n) e.#g = !0;
		try {
			let e = t();
			for (let e of n) e.#g = !1;
			for (let e of n) e.#H();
			r = !0;
			for (let e of n) e.#B();
			return e;
		} catch (e) {
			for (let e of i) {
				let t = e.resolution;
				t.#e = e.members, t.#r = e.dataDomainMembers, t.type = e.type, t.name = e.name, t.#g = !1, t.#Z(), t.#X();
			}
			if (r) try {
				for (let e of n) e.#B();
			} catch (t) {
				e && typeof e == "object" && (e.rollbackError = t);
			}
			throw e;
		}
	}
	registerMember(e) {
		let t = this.#z(e);
		return this.#V(), () => {
			let e = this.#e.delete(t);
			return e && (this.#r.delete(t), this.#V()), e && this.#e.size === 0 && !this.isExplicitlyOwned();
		};
	}
	attachViewLevelScaleProps(e, t) {
		if (this.#m && this.#m.view !== e) {
			let t = lp(this.#m.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level scale declarations target the same ${this.channel} scale resolution.`);
		}
		for (let e of this.#e) this.#J(e);
		let n = this.#m?.props;
		(t.name || n?.name) && (this.name = t.name), this.#m = {
			view: e,
			props: t
		}, this.#X(), this.#U(fp(n, t) ? "configuration" : "membership");
	}
	clearViewLevelScaleProps(e) {
		if (this.#m?.view === e) {
			let e = this.#m.props;
			this.#m = void 0, e.name && (this.name = void 0), this.#X(), this.#U(fp(e, void 0) ? "configuration" : "membership");
		}
	}
	#U(e) {
		this.#u.scale && this.#x.runInTransaction(() => {
			this.#u.resetScale(), this.initializeScale(), this.#re(e, !0), this.#x.flushNow({ afterTransaction: !0 });
		});
	}
	getViewLevelScaleProps() {
		return this.#m;
	}
	#W() {
		let e = this.#m;
		if (e) return {
			channel: this.channel,
			type: this.type,
			domain: e.props.domain
		};
	}
	#G(e) {
		return Bd(e, this, this.channel, (e) => this.#K(e, /* @__PURE__ */ new Set()));
	}
	#K(e, t) {
		if (e === this) return !0;
		if (t.has(e) || !e.#F()) return !1;
		t.add(e);
		for (let n of e.#r) for (let r of d) {
			let i = n.view.getScaleResolution(r);
			if (i && i !== e && this.#K(i, t)) return !0;
		}
		return !1;
	}
	#q(e) {
		this.#m && this.#J(e);
	}
	#J(e) {
		if (e.channelDef.scale !== void 0) throw Error(`Cannot mix view-level scales.${this.channel} with encoding.${e.channel}.scale in the same scale resolution.`);
	}
	registerDisposer(e) {
		return this.#n.add(e), () => {
			this.#n.delete(e);
		};
	}
	dispose() {
		this.#t = !0;
		for (let e of this.#n) e();
		this.#n.clear(), this.#a?.dispose(), this.#s.clear(), this.#l.domain.clear(), this.#l.range.clear(), this.#i?.dispose(), this.#u.dispose(), this.#_?.dispose();
	}
	bindDomainInputs() {
		let e = this.#a?.lastVisible;
		this.#i?.cancelSourceUpdates(), this.#a &&= (this.#f = this.#a.ignoreSelectionInitial, this.#a.dispose(), void 0);
		let t = this.#u.scale;
		if (!t || t.type === "null" || !this.#e.size && !this.isExplicitlyOwned()) return;
		let n = new Set(this.#e.values().filter((e) => e.view.isConfiguredVisible())), r = new Set(this.#r.values().filter((e) => e.view.isConfiguredVisible())), i = this.#Y(), a = this.#P(), o = this.#F(), s = xf({
			owner: this.#i,
			manager: this.#u,
			props: i,
			explicit: this.#R(),
			type: this.type,
			members: n,
			dataMembers: r,
			viewLevelDomain: this.#W(),
			createExpression: (e) => this.#T(e),
			resolveSelectionBinding: (e, t) => this.#D(e, t),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getLocusExtent: (e) => this.#j(e),
			link: a,
			viewport: o,
			viewportDependencies: o ? Vd(r, this) : /* @__PURE__ */ new Set(),
			getConstraints: (e) => this.#G(e),
			getZoomExtent: () => this.zoomExtent,
			ignoreSelectionInitial: this.#f,
			lastVisible: e
		}), c = Array.from(s.zoomLevelResolutions).find((e) => e.#E(this));
		if (c) throw s.dispose(), Error(`Scale zoom dependency cycle: ${this.channel} domain reads the zoom level of ${c.channel}.`);
		this.#a = s;
	}
	isDomainDefinedExplicitly() {
		return this.#R();
	}
	isDomainInitialized() {
		let e = this.#u.scale;
		if (!e) return !1;
		let t = e.domain();
		return B(e.type) ? t.length > 2 || t.length === 2 && t.some((e) => e !== 0) : t.length > 0;
	}
	#Y() {
		return or(this, "mergedScaleProps", () => {
			let e = $f({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#Q(),
				viewLevelScaleProps: this.#m,
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#C.getConfigScopes(),
				getOwnerScaleResolution: (e) => this.#C.getScaleResolution(e)
			});
			return this.#ee(e), this.#te(e), e;
		});
	}
	#X() {
		ar(this, "mergedScaleProps"), this.#v && this.#v.set(this.#v.get() + 1);
	}
	#Z() {
		this.#c = void 0;
	}
	#Q() {
		return this.#c ||= cp(this.#e), this.#c;
	}
	getOrderedMembers() {
		return this.#Q().slice();
	}
	getDebugState() {
		let e = this.#u.scale, t = e && typeof e.domain == "function", n = e && typeof e.range == "function";
		return {
			kind: "scale",
			channel: this.channel,
			hostView: this.#C,
			name: this.name,
			type: this.type,
			resolvedScaleType: this.getResolvedScaleType(),
			domain: t ? this.getDomain() : void 0,
			complexDomain: t ? this.getComplexDomain() : void 0,
			range: n ? e.range() : void 0,
			zoomable: this.isZoomable(),
			zoomed: this.isZoomable() ? this.isZoomed() : !1,
			members: this.#Q().map((e) => this.#$(e)),
			activeMemberCount: this.#k().size,
			dataDomainMemberCount: this.#r.size,
			viewLevelScaleProps: this.#m ? {
				view: this.#m.view,
				props: structuredClone(this.#m.props)
			} : void 0
		};
	}
	#$(e) {
		return {
			view: e.view,
			channel: e.channel,
			channelDef: structuredClone(e.channelDef),
			contributesToDomain: e.contributesToDomain,
			active: this.#k().has(e)
		};
	}
	#ee(e) {
		let t = this.#P();
		if (!t || e === null || e.type === "null") return;
		let n = B(e.type) && !V(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	#te(e) {
		if (!(!this.#F() || e === null || e.type === "null")) {
			if (!B(e.type) || V(e.type)) throw Error(`Viewport-derived domains require a continuous ${this.channel} scale.`);
			if ((this.channel === "x" || this.channel === "y") && e.zoom) throw Error(`Viewport-derived domains cannot target a zoomable ${this.channel} scale.`);
		}
	}
	getAssemblyRequirement() {
		if (this.type !== "locus") return {
			assembly: void 0,
			needsDefaultAssembly: !1
		};
		let e = this.#m ? [this.#m.props] : this.#Q().map((e) => e.channelDef.scale).filter((e) => e !== void 0);
		if (e.some((e) => e === null || e.type === "null")) return {
			assembly: void 0,
			needsDefaultAssembly: !1
		};
		let t = e.find((e) => e?.assembly !== void 0)?.assembly;
		return {
			assembly: t,
			needsDefaultAssembly: t === void 0
		};
	}
	getResolvedScaleType() {
		let e = this.#Y();
		if (!(e === null || e.type === "null")) return e.type;
	}
	#ne() {
		let e = this.#Y();
		if (e === null || e.type == "null") return { type: "null" };
		this.#h += 1;
		let t;
		try {
			t = this.#L(e.type === "locus" ? e.assembly : void 0);
		} finally {
			--this.#h;
		}
		return this.#u.domainProps(e, t, this.#R());
	}
	reconfigure() {
		this.#x.runInTransaction(() => {
			this.#X(), this.bindDomainInputs(), this.#re("membership", !0);
		});
	}
	reconfigureDomain(e = "data") {
		this.#re(e, !1);
	}
	#re(e, t) {
		let n = this.#u.scale;
		if (!n || n.type === "null") return;
		let r = this.#Y();
		t && this.#u.configureProperties(r), this.#a.request(e), this.#i.runtime.flushNow({ afterTransaction: !0 }), t && this.#u.scale === n && n.props === r && this.#u.configureMapping(r);
	}
	#ie(e, t = !0) {
		return this.#i.update(e, t);
	}
	get scale() {
		if (this.#u.scale) return this.#u.scale;
		throw Error("ScaleResolution.scale accessed before initialization. Call initializeScale().");
	}
	getScale() {
		if (this.#h > 0) throw Error(`Scale dependency cycle: channel "${this.channel}" cannot read its own scale while its domain is being resolved.`);
		if (this.#u.initializingRange) throw Error(`Scale dependency cycle: channel "${this.channel}" reads its scale while its range is being initialized.`);
		return this.#u.scale ?? this.initializeScale();
	}
	initializeScale() {
		if (this.#u.scale) return this.#u.scale;
		let e = this.#ne(), t = this.#i;
		try {
			let t = this.#u.createScale(e, (e) => (this.#o ? this.#u.mirrorDomain(this.#o.visibleDomain) : (this.#i = new ju({
				runtime: this.#C.paramRuntime,
				manager: this.#u,
				animator: this.#A.animator,
				domain: e,
				resetDomain: this.#u.normalizeDomain(this.#L()),
				renderImmediately: () => this.#A.renderImmediately(),
				notifyDomain: () => this.#N("domain"),
				publishZoom: () => {
					this.#y && this.#y.set(this.#y.get() + 1);
					for (let e of this.#s) e();
				}
			}), this.#i.syncSelection = () => this.syncLinkedSelectionFromDomain()), this.#i.domain));
			return this.bindDomainInputs(), t;
		} catch (e) {
			throw this.#a?.dispose(), this.#a = void 0, this.#u.resetScale(), this.#i !== t && this.#i?.dispose(), this.#i = t, e;
		}
	}
	getMappingRef() {
		return this.#u.initializingRange || this.getScale(), this.#u.mapping;
	}
	observeMapping(e) {
		return this.#x.effect([this.getMappingRef()], e);
	}
	getConfigurationRef() {
		return this.#v ??= this.#x.signal("scale configuration", 0);
	}
	getDomainRef() {
		return this.getDomain(), this.#i.domain;
	}
	getDomain() {
		if (this.#h > 0) throw Error(`Scale dependency cycle: channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.#u.scale || this.initializeScale(), Array.from(this.#o.visibleDomain);
	}
	getDataDomain() {
		if (this.#a) return this.#a.readData();
		let e = this.#k(this.#r), t = (e) => bf(e).filter((e) => !e.channelDef.domainInert);
		return this.#F() ? zd(e, () => this.type, t, (e) => this.#G(e)) : vf(e, () => this.type, t);
	}
	getComplexDomain() {
		return jf(this.#M(), dn(this.type, this.getDomain()));
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#P();
		if (!e) return;
		let t = this.#C.getLayoutAncestors().at(-1), n = t ? Fu(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
		return {
			param: e.param,
			encoding: e.encoding,
			persist: n
		};
	}
	isZoomed() {
		return this.#d.isZoomed();
	}
	isZoomable() {
		let e = this.#Y();
		return e === null || e.type === "null" ? !1 : B(e.type) && !V(e.type) && !!e.zoom;
	}
	hasConfiguredZoomExtent() {
		let e = this.#Y().zoom;
		return typeof e == "object" && e.extent !== void 0 && e.extent !== "unbounded";
	}
	zoom(e, t, n) {
		return this.#d.zoom(e, t, n);
	}
	async zoomTo(e, t = !1) {
		return this.#d.zoomTo(e, t);
	}
	resetZoom() {
		return this.#d.resetZoom();
	}
	getZoomLevel() {
		return this.isZoomable() ? this.#d.getZoomLevel() : 1;
	}
	getZoomLevelRef() {
		return this.#b ||= (this.#y = this.#x.signal("zoom publication revision", 0), this.#x.computed("scale zoom level", [this.#y, this.getConfigurationRef()], () => this.getZoomLevel())), this.#b;
	}
	getAxisLength() {
		if (this.channel !== "x" && this.channel !== "y") throw Error("Axis length is only defined for x and y channels!");
		let e = Array.from(this.#e).map((e) => e.view.coords?.[this.channel === "x" ? "width" : "height"]).filter((e) => e > 0);
		return e.length ? e.reduce((e, t) => Math.min(e, t), 1e4) : 0;
	}
	invertToComplex(e) {
		let t = this.getScale();
		if ("invert" in t) {
			let n = t.invert(e);
			return this.toComplex(n);
		} else throw Error("The scale does not support inverting!");
	}
	toComplex(e) {
		return Of(this.#M(), e);
	}
	fromComplex(e) {
		return kf(this.#M(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? Af(this.#M(this.getAssemblyRequirement().assembly), e) : e;
	}
};
function dp(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = Cn(e.view.getBaseUrl(), n.url);
	return r === n.url ? e : {
		...e,
		channelDef: {
			...e.channelDef,
			scale: {
				...t,
				assembly: {
					...n,
					url: r
				}
			}
		}
	};
}
function fp(e, t) {
	return [
		"domain",
		"domainMin",
		"domainMid",
		"domainMax",
		"domainRaw",
		"nice",
		"zero",
		"padding",
		"exponent",
		"constant",
		"assembly",
		"type"
	].some((n) => {
		let r = n, i = e?.[r], a = t?.[r];
		return !yu(i, a);
	});
}
//#endregion
//#region ../core/src/utils/coalesce.js
function pp(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region ../core/src/scales/axisResolution.js
var mp = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e, t, n) {
		this.channel = e, this.scaleResolution = t, this.hostView = n;
	}
	registerMember(e) {
		return this.#i(e), this.#e.add(e), ar(this, "axisProps"), () => {
			this.#e.delete(e), ar(this, "axisProps");
		};
	}
	hasVisibleNonChromeMember() {
		for (let e of this.#n()) if (e.view.isVisible()) return !0;
		return !1;
	}
	isVisible() {
		return this.hostView.isVisible() && (this.scaleResolution.isExplicitlyOwned() && this.scaleResolution.getViewLevelScaleProps().view.isVisible() || this.hasVisibleNonChromeMember());
	}
	getDebugState() {
		return {
			kind: "axis",
			channel: this.channel,
			hostView: this.hostView,
			scaleResolution: this.scaleResolution,
			title: this.getTitle(),
			axisProps: this.getAxisProps(),
			hasVisibleNonChromeMember: this.hasVisibleNonChromeMember(),
			members: cp(this.#e).map((e) => ({
				view: e.view,
				channel: e.channel,
				channelDef: structuredClone(e.channelDef)
			})),
			viewLevelAxisProps: this.#t ? {
				view: this.#t.view,
				props: structuredClone(this.#t.props)
			} : void 0
		};
	}
	getAxisProps() {
		return or(this, "axisProps", () => {
			let e;
			if (this.#t) e = [this.#t.props];
			else {
				let t = this.#n();
				if (!t.length) return this.scaleResolution.isExplicitlyOwned() ? {} : null;
				e = t.map((e) => {
					let t = e.view.mark.encoding[e.channel];
					return "axis" in t && t.axis;
				});
			}
			return e.length > 0 && e.some((e) => e === null) ? null : Lf(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		if (this.#t?.props.title !== void 0) return this.#t.props.title;
		let e = this.#n().map((e) => {
			let t = we(e.view, e.channel);
			if (!P(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: pp("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: pp(bt(t) ? t.field : void 0, ft(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (ht(t.member.channel) && !t.explicitTitle) {
				let n = lt(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), r = new Set(n.map((e) => pp(e.explicitTitle, e.implicitTitle)).filter(Ae));
		return r.size ? [...r].join(", ") : null;
	}
	attachViewLevelAxisProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = lp(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level axis declarations target the same ${this.channel} axis resolution.`);
		}
		for (let e of this.#n()) {
			let t = e.view.mark.encoding[e.channel];
			if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
		}
		this.#t = {
			view: e,
			props: t
		}, ar(this, "axisProps");
	}
	clearViewLevelAxisProps(e) {
		this.#t?.view === e && (this.#t = void 0, ar(this, "axisProps"));
	}
	getViewLevelAxisProps() {
		return this.#t;
	}
	#n() {
		return cp(this.#e).filter((e) => !this.#r(e));
	}
	#r(e) {
		return e.view.getLayoutAncestors().some(tr);
	}
	#i(e) {
		if (!this.#t || this.#r(e)) return;
		let t = e.view.mark.encoding[e.channel];
		if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
	}
};
//#endregion
//#region ../core/src/config/configLayers.js
function hp() {
	let e = [];
	return {
		appendConfig(t, n) {
			gp(e, t, n);
		},
		appendStyle(t, n) {
			_p(e, t, n);
		},
		merge() {
			return H(e.map((e) => e.config));
		}
	};
}
function gp(e, t, n) {
	n && (_p(e, t, Object.hasOwn(n, "style") ? n.style : void 0), e.push({
		kind: "config",
		config: n
	}));
}
function _p(e, t, n) {
	if (n === void 0) return;
	if (n === null) {
		vp(e);
		return;
	}
	let r = Ll(t, n);
	e.push({
		kind: "style",
		config: r
	});
}
function vp(e) {
	for (let t = e.length - 1; t >= 0; t--) e[t].kind == "style" && e.splice(t, 1);
}
//#endregion
//#region ../core/src/config/legendConfig.js
function yp(e, t) {
	let n = H(e.map((e) => e.legend?.layout)), r = n[t], i = [
		"left",
		"right",
		"top",
		"bottom"
	].includes(t);
	return {
		anchor: r?.anchor ?? n.anchor ?? "start",
		direction: r?.direction ?? n.direction ?? (t == "left" || t == "right" ? "vertical" : "horizontal"),
		wrap: i && (r?.wrap ?? n.wrap ?? !0)
	};
}
function bp(e, t, n = {}) {
	let r = e[0], i = e.slice(1), a = hp();
	xp(a, e, r, n.track);
	for (let [t, r] of i.entries()) {
		let i = e.slice(0, t + 2);
		Sp(a, i, r, n.track), Cp(a, i, r.legend);
	}
	Cp(a, e, t);
	let o = a.merge();
	return delete o.layout, o;
}
function xp(e, t, n, r) {
	let i = t.slice(0, 1);
	Cp(e, i, n?.legend), Sp(e, i, n, r);
}
function Sp(e, t, n, r) {
	r && Cp(e, t, n?.legendTrack);
}
function Cp(e, t, n) {
	e.appendConfig(t, n);
}
//#endregion
//#region ../core/src/scales/legendResolution.js
var wp = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"shape",
	"size"
]), Tp = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke"
]), Ep = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e) {
		this.channel = e;
	}
	registerMember(e) {
		return this.#r(e), this.#e.add(e), () => this.removeMember(e) && this.#e.size === 0;
	}
	removeMember(e) {
		return this.#e.delete(e);
	}
	getLegendDefs() {
		let e = /* @__PURE__ */ new Set(), t = [];
		for (let n of cp(this.#e)) {
			let r = this.#n(n);
			r && !e.has(r.scaleResolution) && (e.add(r.scaleResolution), t.push(r));
		}
		return t;
	}
	#n(e) {
		let { channel: t, view: n } = e;
		if (Pp(t, n)) return;
		let r = jp(t, n);
		if (!r || P(r)) return;
		let i = "legend" in r ? r.legend : void 0;
		if (!this.#t && i === null || "scale" in r && r.scale === null) return;
		let a = this.#t?.props ?? i, o = a === void 0 ? void 0 : {
			disable: !1,
			...a
		}, s = n.getScaleResolution(t);
		if (!s) return;
		let c = bp(n.getConfigScopes(), o, { track: kp(n) });
		if (c.disable === !0) return;
		let l = Ap(t, r);
		if (!l) return;
		let u = "title" in r ? r.title : void 0, d = c.title === void 0 ? u === void 0 ? bt(r) ? r.field : void 0 : u : c.title, f = "format" in r ? r.format : void 0, p = l == "symbol" ? Fp(t, n) : void 0, m = l == "symbol" ? Op(t, n) : void 0;
		return {
			view: n,
			channel: t,
			field: bt(r) ? r.field : void 0,
			type: l,
			symbolChannels: p,
			symbolGeometry: m,
			legend: {
				...c,
				title: d
			},
			format: f,
			dataType: r.type,
			scaleResolution: s
		};
	}
	hasVisibleNonChromeMember() {
		for (let e of this.#e) if (e.view.isVisible() && !e.view.getLayoutAncestors().some(tr)) return !0;
		return !1;
	}
	getDebugState() {
		let e = this.getLegendDefs();
		return {
			kind: "legend",
			channel: this.channel,
			hostView: e[0]?.scaleResolution.getDebugState().hostView ?? this.#t?.view ?? this.#e.values().next().value?.view,
			legendDefs: e.map((e) => ({
				...e,
				view: e.view,
				scaleResolution: e.scaleResolution,
				legend: structuredClone(e.legend)
			})),
			hasVisibleNonChromeMember: this.hasVisibleNonChromeMember(),
			members: cp(this.#e).map((e) => ({
				view: e.view,
				channel: e.channel
			})),
			viewLevelLegendProps: this.#t ? {
				view: this.#t.view,
				props: structuredClone(this.#t.props)
			} : void 0
		};
	}
	attachViewLevelLegendProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = lp(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level legend declarations target the same ${this.channel} legend resolution.`);
		}
		let n = Array.from(this.#e).find((e) => Dp(e));
		if (n) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${n.channel}.legend in the same legend resolution.`);
		this.#t = {
			view: e,
			props: t
		};
	}
	clearViewLevelLegendProps(e) {
		this.#t?.view === e && (this.#t = void 0);
	}
	getViewLevelLegendProps() {
		return this.#t;
	}
	#r(e) {
		if (this.#t && Dp(e)) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${e.channel}.legend in the same legend resolution.`);
	}
};
function Dp(e) {
	let t = jp(e.channel, e.view);
	return !!(t && "legend" in t && t.legend !== void 0);
}
function Op(e, t) {
	let n = t.getMarkType();
	return e == "size" && (n == "rule" || n == "link") ? "stroke" : "point";
}
function kp(e) {
	let t = jp("x", e), n = e.getScaleResolution("x")?.getResolvedScaleType();
	return t?.type == "index" || t?.type == "locus" || n == "index" || n == "locus";
}
function Ap(e, t) {
	if ([
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"size"
	].includes(e) && t.type == "quantitative" || (t.type === "nominal" || t.type === "ordinal") && wp.has(e)) return "symbol";
	if (t.type === "quantitative" && Tp.has(e)) return "gradient";
}
function jp(e, t) {
	return ze(t.getEncoding()[e]);
}
function Mp(e, t) {
	let n = jp(e, t);
	return !!(n && "legend" in n && n.legend === null);
}
function Np(e, t, n) {
	let r = jp(e, n), i = jp(t, n), a = n.getScaleResolution(e), o = n.getScaleResolution(t);
	return bt(r) && bt(i) && r.field === i.field && a && o && L(a.getDomain(), o.getDomain());
}
function Pp(e, t) {
	if (e !== "shape" || !bt(jp(e, t))) return !1;
	for (let n of [
		"color",
		"fill",
		"stroke"
	]) if (Np(n, e, t) && !Mp(n, t)) return !0;
	return !1;
}
function Fp(e, t) {
	if (!Ie(e)) return {};
	let n = jp(e, t), r = jp("shape", t), i = t.getScaleResolution("shape");
	return bt(n) && bt(r) && i && Np(e, "shape", t) && !Mp("shape", t) ? { shape: i.name ?? "shape" } : {};
}
//#endregion
//#region ../core/src/view/resolutionPlanner.js
var Ip = (e, t, n) => {
	let r = e;
	for (; (Lp(r, t, n) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes(Lp(r.dataParent, t, n))) && Lp(r, t, n) != "excluded" && !(t === "scale" && r.resolutions.scale[n]?.isExplicitlyOwned());) r = r.dataParent;
	return r;
};
function Lp(e, t, n) {
	let r = e.getConfiguredOrDefaultResolution(n, t);
	switch (r) {
		case "independent":
		case "shared":
		case "excluded":
		case "forced": return r;
		case "collected":
			if (t == "legend") return Lp(e, "scale", n);
			throw Error(`Resolution behavior "collected" is only supported for legends, not ${t}s.`);
		default: throw Error(`Unknown ${t} resolution behavior: ${r}`);
	}
}
var Rp = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let e = new up(n, t);
		t.resolutions.scale[n] = e;
	}
	return t.resolutions.scale[n];
}, zp = (e, t, n, r) => {
	let i = ze(r);
	if (!i) return;
	let a = lt(i.resolutionChannel ?? n);
	if (Qe(a) && !(t == "axis" && !ce(a)) && !(t == "legend" && (ce(a) || vt(a))) && !(t == "legend" && Lp(e, t, a) == "excluded" && Fn(e))) return {
		view: Ip(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, Bp = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) !r || Array.isArray(r) || t(n, r);
}, Vp = (e) => {
	let t = [];
	for (let [n, r] of Object.entries(e.getEncoding())) {
		if (!r || Array.isArray(r)) continue;
		let i = zp(e, "legend", n, r);
		i && !ce(i.channel) && t.push(i);
	}
	return t;
}, Hp = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Bp(e, (n, r) => {
		let i = zp(e, "scale", n, r);
		if (!i) return;
		let a = Rp(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
};
function Up(e, t, n) {
	let r = e.resolutions.axis[t];
	if (e.getScaleResolution(t) !== n) throw Error(`Shared axes must have a shared scale! Declare or share the ${t} scale at the axis host or an ancestor.`);
	if (!r) {
		r = new mp(t, n, e), e.resolutions.axis[t] = r;
		let i = n.registerDisposer(() => {
			delete e.resolutions.axis[t];
		});
		e.registerDisposer(() => {
			i(), delete e.resolutions.axis[t];
		});
	}
	return r;
}
var Wp = (e) => {
	Bp(e, (t, n) => {
		let r = zp(e, "axis", t, n);
		if (!r || !ce(t) || !s(r.targetChannel)) return;
		let i = Up(r.view, r.targetChannel, e.getScaleResolution(r.targetChannel));
		e.registerDisposer(i.registerMember({
			view: e,
			channel: t,
			channelDef: r.channelDef
		}));
	});
}, Gp = (e, t) => {
	for (let { view: n, channel: r, targetChannel: i } of t) {
		if (ce(r)) continue;
		let t = i;
		n.resolutions.legend[t] || (n.resolutions.legend[t] = new Ep(t));
		let a = n.resolutions.legend[t], o = a.registerMember({
			view: e,
			channel: r
		});
		e.registerDisposer(() => {
			o() && n.resolutions.legend[t] === a && delete n.resolutions.legend[t];
		});
	}
}, Kp = (e, t) => {
	up.registerInBatch(t.keys(), () => {
		for (let [n, r] of t) for (let { view: t, channel: i, channelDef: a, targetChannel: o } of r) {
			let r = o, s = !e.isDomainInert(), c = n.registerMember({
				view: e,
				channel: i,
				channelDef: a,
				contributesToDomain: s
			});
			e.registerDisposer(() => {
				c() && t.resolutions.scale[r] === n && (n.dispose(), delete t.resolutions.scale[r]);
			});
		}
	});
}, qp = (e, t) => {
	if (!t) {
		qp(e, "scale"), qp(e, "axis");
		return;
	}
	t == "axis" ? Wp(e) : t == "legend" ? Gp(e, Vp(e)) : Kp(e, Hp(e));
}, Jp = {
	point: au,
	rect: ql,
	arrow: Yl,
	rule: cu,
	tick: cu,
	link: mu,
	text: vu
}, J = class extends nr {
	#e = null;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		let o = Jp[this.getMarkType()];
		if (o) this.mark = new o(this);
		else throw Error(`No such mark: ${this.getMarkType()}`);
		this.resolve(), this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
			for (let e of d) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
		})), this.needsAxes = {
			x: !0,
			y: !0
		}, this.#t();
	}
	#t() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t)) continue;
			let n = Ve(t.select), i = n.on, a = n.clear;
			if (r(n)) {
				let t = 0, r = (t) => {
					this.paramRuntime.setValue(e, t);
				}, o = () => {
					let e = this.context.getCurrentHover();
					return e?.mark?.unitView === this ? e.datum : null;
				}, s = ye(i), c = () => {
					t = 0;
					let e = n.toggle ? D() : A(null);
					r(e);
				}, l = (i) => {
					if (!s(i.proxiedMouseEvent)) return;
					let a = o(), c = a ? a[oe] : 0, l;
					n.toggle ? i.mouseEvent.shiftKey ? a && (l = $e(this.paramRuntime.getValue(e), { toggle: [a] })) : l = D(a ? [a] : null) : c != t && (t = c, l = A(a)), l !== void 0 && r(l);
				}, u = ["mouseover", "pointerover"].includes(i.type);
				this.addInteractionListener(u ? "mousemove" : i.type, l), u && this.addInteractionListener("mouseleave", c);
				let d = u && a?.type === "mouseleave";
				if (a && !d) {
					let e = ye(a);
					this.addInteractionListener(a.type, (t) => {
						e(t.proxiedMouseEvent) && c();
					});
				}
			}
		}
	}
	arrange(e, t, n = {}) {
		super.arrange(e, t, n), this.isConfiguredVisible() && (e.pushView(this, t), e.renderMark(this.mark, n), e.popView(this));
	}
	getMarkType() {
		return typeof this.spec.mark == "object" ? this.spec.mark.type : this.spec.mark;
	}
	getEncoding() {
		let e = super.getEncoding(), t = this.mark.getSupportedChannels();
		for (let n of Object.keys(e)) n !== "key" && (t.includes(n) || delete e[n]);
		return e;
	}
	resolve(e) {
		if (!e) {
			this.resolve("scale"), this.resolve("axis"), this.resolve("legend");
			return;
		}
		qp(this, e);
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? De(t[e]) : void 0;
	}
	getSearchAccessors() {
		if (!this.#e) {
			let e = pr(this.getEncoding()) ?? [];
			this.#e = e.map((e) => b(e));
		}
		return this.#e;
	}
	getFacetAccessor(e) {
		return this.getDataAccessor("sample") || super.getFacetAccessor(this);
	}
	getCollector() {
		return this.flowHandle?.collector;
	}
	getZoomLevel() {
		return d.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
}, Yp = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function Xp(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new Yp("network", String(e));
	}
	if (!n.ok) throw new Yp("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new Yp("json", String(e));
	}
}
//#endregion
//#region ../core/src/view/viewUtils.js
function Zp(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function Qp(e) {
	for (let t of d) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function $p(e) {
	let t = [];
	return e.visit((e) => {
		if (e instanceof J) {
			let n = e.getEncoding(), r = (n, i) => {
				if (!(!i || typeof i != "object" || Array.isArray(i)) && (bt(i) && "type" in i ? t.push({
					view: e,
					channel: n,
					field: i.field,
					type: i.type
				}) : bt(i) && n === "semanticScore" && t.push({
					view: e,
					channel: n,
					field: i.field,
					type: "quantitative"
				}), "condition" in i)) {
					let { condition: e } = i;
					if (Array.isArray(e)) for (let t of e) r(n, t);
					else r(n, e);
				}
			};
			for (let [e, t] of Object.entries(n)) r(e, t);
			return zn;
		}
	}), t;
}
async function em(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = In(t, r.url), a;
	try {
		a = await Xp(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = In(wn(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function tm(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region ../core/src/utils/cloner.js
function nm(e, t = {}) {
	return im(am(e, t.copyFields ? new Set(t.copyFields) : void 0));
}
function rm(e = {}) {
	let t = e.copyFields ? new Set(e.copyFields) : void 0, n, r = ((e) => (n ||= im(am(e, t)), n(e)));
	return r.reset = () => {
		n = void 0;
	}, r;
}
function im(e) {
	let t = Function("source", "return { " + e.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return t.properties = e, t;
}
function am(e, t) {
	return om(e).filter((e) => typeof e == "string" && (!t || t.has(e)));
}
function om(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region ../core/src/data/transforms/lookup.js
var sm = class extends z {
	#e;
	get dataDependencies() {
		return this.#e ? [this.#e] : [];
	}
	get behavior() {
		return 1;
	}
	constructor(e, t, n = {}) {
		super(e), this.#e = t, this.params = e;
		let r = cm(e);
		if (!r && !t) throw Error("Lookup transform requires a foreign collector.");
		let i = R(e.key), a = R(e.fields ?? i);
		if (a.length === 0) throw Error("The \"fields\" property must not be empty.");
		if (i.length !== a.length) throw Error("The \"fields\" and \"key\" properties must have the same number of fields.");
		let o = e.values, s = e.as;
		if (!o && s) throw Error("The \"as\" property requires explicit \"values\".");
		if (o && s && s.length !== o.length) throw Error("The \"as\" property must contain one output field for every lookup value.");
		if (o?.length === 0) throw Error("The \"values\" property must not be empty.");
		let c = i.map((e) => b(e)), l = a.map((e) => b(e)), u = !o, d = o?.map((e) => b(e)) ?? [], f = s ?? o ?? [], p = e.default ?? null, m = !1, h = -1, g = [], _, v = !1, y, x = null, S, C = l[0], w = n.isForeignDataReady ?? (() => !0);
		n.isForeignDataReady && (this.areDataDependenciesAvailable = () => t.completed && !t.disposed && w());
		let T = n.requestForeignData ?? (() => void 0), E = n.prepareBatch ?? (() => void 0), D = !!n.acceptsDatum, O = n.acceptsDatum ?? (() => !0), k = i.length === 1 ? (e) => x.get(C(e)) : (e) => {
			let t = x;
			for (let n = 0; n < l.length - 1; n++) {
				let r = t.get(l[n](e));
				if (!r) return;
				t = r;
			}
			return t.get(l.at(-1)(e));
		}, A = (n) => {
			if (E(), t && h !== t.dataRevision && (x = null), x) {
				this.consumeDataDependencies();
				return;
			}
			if (!n && !t.completed) throw Error("Lookup table must be loaded before primary data.");
			let r = n ?? t.getData();
			if (u) {
				let e = dm(r[Symbol.iterator]().next().value, i);
				f = e, d = e.map((e) => b(e));
			}
			x = um(r, c, e.key), S = fm(f, d, p), t && (h = t.dataRevision), this.consumeDataDependencies();
		}, j = (e) => {
			let t = y(e), n = k(e);
			S(t, n), this._propagate(t);
		}, ee = D ? (e) => {
			O(e) && j(e);
		} : j, M = (e) => {
			if (!w() && (T(), !w())) {
				m = !0, this.consumeDataDependencies(), this.handle = lm;
				return;
			}
			if (A(), !(r && u)) {
				for (let t of f) if (Object.hasOwn(e, t)) throw Error(`Lookup output field "${t}" already exists in primary data.`);
			}
			y = nm(e), this.handle = ee, ee(e);
		}, te = () => {
			A(g), this.handle = M, y = void 0, v && re(_);
			for (let e of g) this.handle(e);
			g = [], _ = void 0, v = !1, x = null, u && (d = [], f = []), this.handle = N;
		};
		function N(e) {
			g.push(e);
		}
		let ne = this.reset.bind(this);
		this.reset = () => {
			ne(), m = !1, y = void 0, r ? (g = [], _ = void 0, v = !1, x = null, u && (d = [], f = []), this.handle = N) : this.handle = M;
		};
		let re = this.beginBatch.bind(this);
		this.beginBatch = (e) => {
			r ? ((v || g.length > 0) && te(), _ = e, v = !0) : (w() || T(), w() ? (A(), this.handle = M) : (m = !0, this.consumeDataDependencies(), this.handle = lm), re(e));
		};
		let ie = this.complete.bind(this);
		this.complete = () => {
			r && (v || g.length > 0) && te(), t && !m && !w() && T(), ie();
		}, this.handle = r ? N : M;
	}
};
function cm(e) {
	return e.type == "lookup" && "source" in e.from && e.from.source == "input";
}
function lm(e) {}
function um(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	if (t.length === 1) {
		let i = t[0];
		for (let t of e) {
			let e = i(t);
			if (r.has(e)) throw Error(`Duplicate lookup key ${JSON.stringify([e])} in fields ${JSON.stringify(n)}.`);
			r.set(e, t);
		}
	} else for (let i of e) {
		let e = r;
		for (let n = 0; n < t.length - 1; n++) {
			let r = t[n](i), a = e.get(r);
			a || (a = /* @__PURE__ */ new Map(), e.set(r, a)), e = a;
		}
		let a = t.at(-1)(i);
		if (e.has(a)) {
			let e = t.map((e) => e(i));
			throw Error(`Duplicate lookup key ${JSON.stringify(e)} in fields ${JSON.stringify(n)}.`);
		}
		e.set(a, i);
	}
	return r;
}
function dm(e, t) {
	if (!e) return [];
	let n = Object.keys(e);
	if (t.filter((e) => !n.includes(e)).length) throw Error("Omitting \"values\" requires top-level lookup key fields.");
	return n.filter((e) => !t.includes(e));
}
function fm(e, t, n) {
	let r = e.map((e) => JSON.stringify(e)), i = JSON.stringify(n), a = r.map((e, t) => `output[${e}] = accessors[${t}](foreignDatum);`).join("\n"), o = r.map((e) => `output[${e}] = ${i};`).join("\n");
	return Function("accessors", `return (output, foreignDatum) => {
                if (foreignDatum) {
                    ${a}
                } else {
                    ${o}
                }
            };`)(t);
}
//#endregion
//#region ../core/src/data/transforms/auxiliaryData.js
function pm(e) {
	return e.type == "lookup" && !cm(e) || e.type == "coordinateLookup" || e.type == "cross";
}
function mm(e) {
	if (e.type == "lookup") {
		let t = e;
		if (cm(t)) return;
		if ("lazy" in t.from) throw Error("Lookup tables cannot use lazy data sources.");
		return {
			data: t.from,
			transforms: []
		};
	} else if (e.type == "coordinateLookup") {
		let t = e;
		return {
			data: t.from.data,
			transforms: t.from.transform ?? []
		};
	} else if (e.type == "cross") {
		let t = e;
		if ("lazy" in t.from.data) throw Error("Cross cannot use lazy foreign data.");
		return {
			data: t.from.data,
			transforms: t.from.transform ?? []
		};
	}
}
//#endregion
//#region ../core/src/data/transforms/cigarUtils.js
var hm = {
	M: {
		consumesQuery: !0,
		consumesReference: !0,
		cigarType: "aligned"
	},
	I: {
		consumesQuery: !0,
		consumesReference: !1,
		cigarType: "insertion"
	},
	D: {
		consumesQuery: !1,
		consumesReference: !0,
		cigarType: "deletion"
	},
	N: {
		consumesQuery: !1,
		consumesReference: !0,
		cigarType: "skip"
	},
	S: {
		consumesQuery: !0,
		consumesReference: !1,
		cigarType: "softClip"
	},
	H: {
		consumesQuery: !1,
		consumesReference: !1,
		cigarType: "hardClip"
	},
	P: {
		consumesQuery: !1,
		consumesReference: !1,
		cigarType: "padding"
	},
	"=": {
		consumesQuery: !0,
		consumesReference: !0,
		cigarType: "aligned"
	},
	X: {
		consumesQuery: !0,
		consumesReference: !0,
		cigarType: "aligned"
	}
}, gm = /([0-9]+)([MIDNSHP=X])/g;
function _m(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(e)}`);
	if (e === "*") return [];
	let t = [], n = 0, r;
	for (gm.lastIndex = 0; (r = gm.exec(e)) !== null;) {
		if (r.index !== n) throw Error(`Malformed CIGAR string: ${e}`);
		let i = Number(r[1]);
		if (i <= 0) throw Error(`Malformed CIGAR string: ${e}`);
		t.push({
			op: r[2],
			length: i
		}), n = gm.lastIndex;
	}
	if (n !== e.length) throw Error(`Malformed CIGAR string: ${e}`);
	return t;
}
function* vm(e, t) {
	if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
	let n = t, r = 0;
	for (let { op: t, length: i } of _m(e)) {
		let e = hm[t], a = n, o = r;
		e.consumesReference && (n += i), e.consumesQuery && (r += i), yield {
			cigarOp: t,
			cigarLength: i,
			cigarStart: a,
			cigarEnd: n,
			readStart: o,
			readEnd: r,
			cigarType: e.cigarType
		};
	}
}
//#endregion
//#region ../core/src/data/transforms/mdUtils.js
var ym = /[0-9]/, bm = /[A-Z]/;
function xm(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed MD tag: ${JSON.stringify(e)}`);
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		if (!ym.test(e[n])) throw Error(`Malformed MD tag: ${e}`);
		let i = n;
		for (; n < e.length && ym.test(e[n]);) n++;
		if (r += Number(e.slice(i, n)), n < e.length) {
			if (e[n] == "^") {
				n++;
				let i = n;
				for (; n < e.length && bm.test(e[n]);) n++;
				if (n == i) throw Error(`Malformed MD tag: ${e}`);
				let a = e.slice(i, n);
				t.push({
					type: "deletion",
					refOffset: r,
					refBases: a
				}), r += a.length;
			} else if (bm.test(e[n])) t.push({
				type: "mismatch",
				refOffset: r,
				refBase: e[n]
			}), n++, r++;
			else throw Error(`Malformed MD tag: ${e}`);
			if (n == e.length) throw Error(`Malformed MD tag: ${e}`);
		}
	}
	return t;
}
//#endregion
//#region ../core/src/data/transforms/alignmentMismatches.js
var Sm = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = b(e.start ?? "start"), n = b(e.cigar ?? "cigar"), r = b(e.sequence ?? "seq"), i = b(e.quality ?? "qual"), a = b(e.md ?? "md"), o = rm({ copyFields: e.copyFields });
		this.handle = (e) => {
			let s = n(e);
			if (typeof s != "string" || s.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(s)}`);
			if (s == "*") return;
			let c = t(e);
			if (!Number.isFinite(c)) throw Error(`Invalid CIGAR start coordinate: ${c}`);
			let l = Cm(a, e);
			if (typeof l != "string" || l.length == 0) throw Error("alignmentMismatches requires the MD tag");
			let u = new Map(xm(l).filter((e) => e.type == "mismatch").map((e) => [e.refOffset, e.refBase])), d = Cm(r, e), f = Cm(i, e);
			for (let t of vm(s, c)) if (t.cigarOp == "M") for (let [n, r] of u) {
				let i = c + n;
				if (i >= t.cigarStart && i < t.cigarEnd) {
					let n = t.readStart + (i - t.cigarStart);
					this.#e(e, d, f, i, n, r, o);
				}
			}
			else if (t.cigarOp == "X") for (let n = 0; n < t.cigarLength; n++) {
				let r = t.cigarStart + n, i = r - c, a = u.get(i);
				if (a == null) throw Error("MD tag does not provide a reference base for X operation");
				this.#e(e, d, f, r, t.readStart + n, a, o);
			}
		}, this.beginBatch = (e) => {
			o.reset(), super.beginBatch(e);
		};
	}
	#e(e, t, n, r, i, a, o) {
		if (typeof t != "string") throw Error("alignmentMismatches requires read sequence");
		let s = t[i];
		if (typeof s != "string") throw Error(`Read sequence is too short for mismatch offset: ${i}`);
		let c = Object.assign(o(e), {
			mismatchStart: r,
			mismatchEnd: r + 1,
			readOffset: i,
			base: s,
			refBase: a
		});
		Array.isArray(n) && n[i] != null && (c.baseQuality = n[i]), this._propagate(c);
	}
};
function Cm(e, t) {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Error && e.message.startsWith("Invalid field")) return;
		throw e;
	}
}
//#endregion
//#region ../core/src/data/transforms/coordinateLookup.js
var wm = class extends sm {
	constructor(e, t, n, r) {
		let i = e.channel ?? "x";
		if (!(n instanceof Xo)) throw Error("Coordinate lookup requires a single-axis lazy side data source.");
		if (n.channel !== i || n.scaleResolution !== r.getScaleResolution(i)) throw Error("Coordinate lookup data must use the same positional scale and channel.");
		let a = Tm(e.fields ?? e.key, n), o = 0, s = 0;
		super(e, t, {
			isForeignDataReady: () => t.completed && n.isDataReadyForDomain({ [i]: n.scaleResolution.getDomain() }),
			requestForeignData: () => n.ensureDataForDomain(n.scaleResolution.getDomain()),
			prepareBatch: () => {
				let e = n.getLoadedDomain();
				if (!e) throw Error("Coordinate lookup data has no loaded domain.");
				[o, s] = e[0] <= e[1] ? e : [e[1], e[0]];
			},
			acceptsDatum: (e) => {
				let t = a(e);
				return t >= o && t <= s;
			}
		});
	}
};
function Tm(e, t) {
	if (typeof e == "string") {
		let t = b(e);
		return (e) => +t(e);
	} else if (e.length == 2) {
		let n = t.scaleResolution.getScale(), r = "genome" in n ? n.genome() : void 0;
		if (!r) throw Error("A chrom/pos coordinate lookup requires a locus scale.");
		let i = b(e[0]), a = b(e[1]);
		return (e) => r.toContinuous(i(e), +a(e));
	} else throw Error("Coordinate lookup requires one continuous field or chrom/pos fields.");
}
//#endregion
//#region ../core/src/data/transforms/cross.js
var Em = class extends z {
	get behavior() {
		return 1;
	}
	#e;
	#t;
	#n;
	#r;
	#i = -1;
	#a = !1;
	get dataDependencies() {
		return [this.#e];
	}
	constructor(e, t) {
		super(e), this.#e = t;
	}
	reset() {
		super.reset(), this.#a = !1;
	}
	beginBatch(e) {
		this.#a = !1, super.beginBatch(e);
	}
	handle(e) {
		this.#a ||= (this.#o(), this.#t.length && (this.#r = Dm(om(e), this.#n)), this.consumeDataDependencies(), !0);
		for (let t of this.#t) this._propagate(this.#r(e, t));
	}
	#o() {
		if (this.#i !== this.#e.dataRevision && (this.#t = void 0), this.#t) return;
		if (!this.#e.completed) throw Error("Cross foreign data must be loaded before primary data.");
		this.#t = Array.from(this.#e.getData()), this.#n = this.#t.length === 0 ? [] : om(this.#t[0]);
		let e = new Set(this.#n);
		for (let t = 1; t < this.#t.length; t++) {
			let n = om(this.#t[t]);
			if (n.length !== e.size || n.some((t) => !e.has(t))) throw Error("Cross foreign data must have homogeneous fields.");
		}
		this.#i = this.#e.dataRevision;
	}
};
function Dm(e, t) {
	let n = new Set(e), r = t.filter((e) => n.has(e));
	if (r.length > 0) throw Error(`Cross fields must be unique. Duplicate fields: ${JSON.stringify(r)}.`);
	let i = [...e.map((e) => Om("primary", e)), ...t.map((e) => Om("foreign", e))];
	return Function("primary", "foreign", `return { ${i.join(",\n")} };`);
}
function Om(e, t) {
	let n = JSON.stringify(t);
	return `${n}: ${e}[${n}]`;
}
//#endregion
//#region ../core/src/data/transforms/coverage.js
var km = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e, this.startAccessor = b(e.start), this.endAccessor = b(e.end), this.chromAccessor = e.chrom ? b(e.chrom) : (e) => void 0, this.weightAccessor = e.weight ? b(e.weight) : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new En();
	}
	reset() {
		super.reset(), this.initialize();
	}
	initialize() {
		let e = this.as.coverage, t = this.as.end, n = this.as.chrom, r = this.startAccessor, i = this.endAccessor, a = this.chromAccessor, o = this.weightAccessor, s, c, l, u = 0, d = NaN, f = this.ends;
		f.clear();
		let p = (e) => {
			this._propagate(e), s = null;
		}, m = (n, r, i) => {
			if (n == r) return;
			let a = !1;
			s && (s[e] === i ? (s[t] = r, a = !0) : s[e] != 0 && p(s)), a || (s = this.createSegment(n, r, i, l));
		}, h = () => {
			let e;
			for (; (e = f.peekValue()) !== void 0;) m(d, e, u), d = e, u -= f.pop();
			d = NaN, s && p(s);
		};
		this.handle = (e) => {
			let t = r(e), s;
			for (; (s = f.peekValue()) !== void 0 && s < t;) m(d, s, u), d = s, u -= f.pop();
			if (n) {
				let t = a(e);
				t !== c && (h(), l = t, c = l);
			}
			isNaN(d) || m(d, t, u), d = t;
			let p = o(e);
			u += p, f.push(p, i(e));
		}, this.complete = () => {
			h(), super.complete();
		}, this.beginBatch = (e) => {
			h(), c = null, super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/transforms/displace1dSolver.js
function Am(e, t, n, r = []) {
	if (e.length != t.length) throw Error("displace1d positions and lengths must have the same number of values.");
	if (n && (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || n[0] > n[1])) throw Error("displace1d extent must contain finite ascending bounds.");
	let i = [], a = [];
	r.length = e.length;
	let o = 0, s = 0, c = -Infinity, l = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n], u = t[n];
		if (!Number.isFinite(r)) throw Error("displace1d positions must be finite numbers.");
		if (!Number.isFinite(u) || u < 0) throw Error("displace1d lengths must be finite non-negative numbers.");
		if (r < c) throw Error("displace1d items must be ordered by ascending position.");
		n > 0 && (o += (s + u) / 2);
		let d = r - o;
		for (l += d, i.push(1), a.push(d); a.length > 1 && a.at(-2) > a.at(-1);) {
			let e = i.pop(), t = a.pop(), n = i.length - 1, r = i[n], o = r + e;
			a[n] = (a[n] * r + t * e) / o, i[n] = o;
		}
		s = u, c = r;
	}
	let u = -Infinity, d = Infinity, f;
	n && e.length > 0 && (u = n[0] + t[0] / 2, d = n[1] - t.at(-1) / 2 - o, u > d && (f = Math.max(d, Math.min(u, l / e.length)))), o = 0, s = 0;
	let p = 0, m = i[0] ?? 0;
	for (let n = 0; n < e.length; n++) {
		let c = e[n], l = t[n];
		n > 0 && (o += (s + l) / 2);
		let h = f ?? a[p];
		r[n] = Math.max(u, Math.min(d, h)) + o - c, m--, m == 0 && (p++, m = i[p] ?? 0), s = l;
	}
	return r;
}
//#endregion
//#region ../core/src/data/transforms/displace1d.js
var jm = class extends z {
	#e = void 0;
	#t = !1;
	#n = () => 0;
	#r = () => 1;
	#i = () => void 0;
	#a = [];
	get behavior() {
		return 6;
	}
	constructor(e, t) {
		super(e, t), this.as = e.as ?? "displacement", this.positionAccessor = b(e.pos), this.length = typeof e.length == "number" ? e.length : 0;
		let n;
		if (typeof e.length == "number") {
			let t = e.length;
			n = () => t;
		} else n = I(e.length) ? () => this.length : b(e.length);
		this.lengthAccessor = n, this.extent = I(e.extent) ? void 0 : e.extent, this.#e = e.extent ? [0, 0] : void 0, this.positionFactor = I(e.positionFactor) ? 1 : e.positionFactor ?? 1, this.#t = !(I(e.length) || I(e.positionFactor) || I(e.extent));
		let r = () => {
			this.#t && this.#s() && this.completed && this.repropagate();
		};
		this.#n = this.watchExprRef(I(e.length) ? e.length : this.length, r), this.#r = this.watchExprRef(e.positionFactor ?? 1, r), this.#i = this.watchExprRef(e.extent, r), this.#o(this.length, this.positionFactor, this.extent);
	}
	complete() {
		let e = this.#a;
		if (!this.#t) {
			for (let t of e) t[this.as] = 0, this._propagate(t);
			super.complete(), e.length = 0, this.#s(), this.#t = !0, queueMicrotask(() => this.repropagate());
			return;
		}
		let t = Array(e.length), n = Array(e.length);
		for (let r = 0; r < e.length; r++) t[r] = this.positionAccessor(e[r]) * this.positionFactor, n[r] = this.lengthAccessor(e[r]);
		if (this.extent) {
			let e = this.extent[0] * this.positionFactor, t = this.extent[1] * this.positionFactor;
			this.#e[0] = Math.min(e, t), this.#e[1] = Math.max(e, t);
		}
		let r = Am(t, n, this.#e);
		for (let t = 0; t < e.length; t++) e[t][this.as] = r[t], this._propagate(e[t]);
		super.complete(), e.length = 0;
	}
	#o(e, t, n) {
		if (!Number.isFinite(t)) throw Error("displace1d positionFactor must be a finite number.");
		if (!Number.isFinite(e) || e < 0) throw Error("displace1d length must be a finite non-negative number.");
		if (n !== void 0 && (!Array.isArray(n) || n.length != 2 || !Number.isFinite(n[0]) || !Number.isFinite(n[1]) || n[0] > n[1])) throw Error("displace1d extent must contain finite ascending bounds.");
	}
	#s() {
		let e = this.#n(), t = this.#r(), n = this.#i();
		this.#o(e, t, n);
		let r = e != this.length || t != this.positionFactor || n?.[0] != this.extent?.[0] || n?.[1] != this.extent?.[1];
		return this.length = e, this.positionFactor = t, this.extent = n ? [n[0], n[1]] : void 0, r;
	}
	reset() {
		super.reset(), this.#a.length = 0;
	}
	handle(e) {
		this.#a.push(e);
	}
}, Mm = .02, Y = 2, Nm = .9, Pm = 1.5, Fm = 32, Im = 32, Lm = 128, Rm = 8, zm = 1, Bm = 40, Vm = Math.PI * (3 - Math.sqrt(5)), Hm = .01, Um = .05, Wm = 4, Gm = 800, Km = class {
	items;
	xExtent;
	yExtent;
	#e;
	#t;
	#n;
	#r = 0;
	#i = 0;
	#a = !0;
	constructor(e, t, n) {
		let r = e.some(({ anchorX: e, anchorY: t, width: n, height: r, anchorWidth: i, anchorHeight: a }) => ![
			e,
			t,
			n,
			r,
			i,
			a
		].every(Number.isFinite) || Math.min(n, r, i, a) < 0), i = [t, n].some((e) => e && (!Number.isFinite(e[0]) || !Number.isFinite(e[1]) || e[0] > e[1]));
		if (r || i) throw Error("displace2d received invalid geometry.");
		this.items = e, this.xExtent = t, this.yExtent = n, this.#e = new Float64Array(e.length), this.#t = new Float64Array(e.length), this.#n = Float64Array.from(e, (t) => th(t.priority, e.length));
	}
	get active() {
		return this.#a;
	}
	compactTowardAnchors() {
		let e = !1;
		for (let t = 0; t < this.items.length; t++) {
			let n = this.items[t];
			if (n.width == 0 || n.height == 0) {
				e ||= n.x != n.anchorX || n.y != n.anchorY, n.x = n.anchorX, n.y = n.anchorY;
				continue;
			}
			let r = n.x - n.anchorX, i = n.y - n.anchorY;
			for (let a = 0; a < Fm; a++) {
				let o = a / Fm, s = n.anchorX + r * o, c = n.anchorY + i * o;
				if (this.#l(t, s, c)) {
					e ||= s != n.x || c != n.y, n.x = s, n.y = c;
					break;
				}
			}
		}
		return e;
	}
	step() {
		if (!this.#a) return !1;
		let e = this.items;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			this.#e[t] = n.x, this.#t[t] = n.y, (n.width == 0 || n.height == 0) && (n.x = n.anchorX, n.y = n.anchorY);
		}
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			n.width > 0 && n.height > 0 && (this.#s(t), this.#c(t));
		}
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (!(n.width == 0 || n.height == 0)) {
				for (let r = t + 1; r < e.length; r++) {
					let i = e[r];
					if (i.width == 0 || i.height == 0) continue;
					let a = Jm(n.x, n.y, n.width + Y, n.height + Y, i.x, i.y, i.width + Y, i.height + Y, t, r);
					if (!a) continue;
					let o = this.#n[t], s = this.#n[r], c = o + s;
					this.#o(t, a.x * o * Nm / c, a.y * o * Nm / c), this.#o(r, -a.x * s * Nm / c, -a.y * s * Nm / c);
				}
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.anchorWidth == 0 || i.anchorHeight == 0) continue;
					let a = Jm(n.x, n.y, n.width + Y, n.height + Y, i.anchorX, i.anchorY, i.anchorWidth + Y, i.anchorHeight + Y, t, e.length + r);
					a && this.#o(t, a.x * Nm, a.y * Nm);
				}
				this.#s(t);
			}
		}
		let t = 0;
		for (let n = 0; n < e.length; n++) this.#s(n), t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		let n = (this.#r + 1) % Im == 0, r = t > Hm && !n || Ym(e);
		if (r && n && this.#u()) {
			r = Ym(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		if (!r && t <= Hm && this.#d()) {
			r = Ym(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		return this.#r++, !r && t <= Hm ? this.#i++ : this.#i = 0, (this.#i >= Wm || this.#r >= Gm) && (this.#a = !1), t > 0;
	}
	solve() {
		for (; this.#a;) this.step();
	}
	#o(e, t, n) {
		let r = this.items[e];
		r.x = nh(r.x + t, this.#e[e] - Pm, this.#e[e] + Pm), r.y = nh(r.y + n, this.#t[e] - Pm, this.#t[e] + Pm);
	}
	#s(e) {
		let t = this.items[e];
		this.xExtent && t.width <= this.xExtent[1] - this.xExtent[0] && this.#o(e, nh(t.x, this.xExtent[0] + t.width / 2, this.xExtent[1] - t.width / 2) - t.x, 0), this.yExtent && t.height <= this.yExtent[1] - this.yExtent[0] && this.#o(e, 0, nh(t.y, this.yExtent[0] + t.height / 2, this.yExtent[1] - t.height / 2) - t.y);
	}
	#c(e) {
		let t = this.items[e], n = nh(t.x + (t.anchorX - t.x) * Mm, this.#e[e] - Pm, this.#e[e] + Pm), r = nh(t.y + (t.anchorY - t.y) * Mm, this.#t[e] - Pm, this.#t[e] + Pm);
		n == t.x && r == t.y || this.#l(e, n, r) && (t.x = n, t.y = r);
	}
	#l(e, t, n) {
		let r = this.items[e];
		if (!Qm(t, r.width, this.xExtent) || !Qm(n, r.height, this.yExtent)) return !1;
		for (let i = 0; i < this.items.length; i++) {
			let a = this.items[i];
			if (i != e && Zm(t, n, r.width, r.height, a.x, a.y, a.width, a.height) || Zm(t, n, r.width, r.height, a.anchorX, a.anchorY, a.anchorWidth, a.anchorHeight)) return !1;
		}
		return !0;
	}
	#u() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t];
			if (n.width == 0 || n.height == 0 || this.#l(t, n.x, n.y)) continue;
			let r = Math.max(4, Math.sqrt(n.width * n.height) / 4), i = eh(t, this.items.length) / 2 ** 32 * Math.PI * 2;
			if (this.#f(t, r, i, Infinity, !0) && e++, e >= Rm) break;
		}
		return e > 0;
	}
	#d() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t], r = Math.hypot(n.x - n.anchorX, n.y - n.anchorY);
			if (n.width == 0 || n.height == 0 || r <= zm) continue;
			let i = Math.max(4, Math.min(n.width, n.height) / 3), a = eh(t, this.items.length + 1) / 2 ** 32 * Math.PI * 2, o = r + qm(this.items, t, n.x, n.y);
			if (this.#f(t, i, a, o, !1) && e++, e >= Rm) break;
		}
		return e > 0;
	}
	#f(e, t, n, r, i) {
		let a = this.items[e], o = a.x, s = a.y;
		for (let c = 0; c < Lm; c++) {
			let l = t * Math.sqrt(c + 1) * (i ? 1 + c / (4 * (Lm - 1)) : 1);
			if (l + zm >= r) break;
			let u = n + c * Vm, d = a.anchorX + Math.cos(u) * l, f = a.anchorY + Math.sin(u) * l;
			if (this.#l(e, d, f)) {
				let t = l + qm(this.items, e, d, f);
				t + zm < r && (r = t, o = d, s = f);
			}
		}
		return o == a.x && s == a.y ? !1 : (a.x = o, a.y = s, !0);
	}
};
function qm(e, t, n, r) {
	let i = e[t], a = n - i.anchorX, o = r - i.anchorY, s = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (n == t || r.width == 0 || r.height == 0) continue;
		let c = 2 / r.width, l = 2 / r.height, u = (i.anchorX - r.x) * c, d = (i.anchorY - r.y) * l, f = a * c, p = o * l, m = f * f + p * p, h = nh(-(u * f + d * p) / m, 0, 1), g = u + h * f, _ = d + h * p, v = Math.max(0, 1 - (g * g + _ * _) / 2);
		s = Math.max(s, Bm * v * v);
	}
	return s;
}
function Jm(e, t, n, r, i, a, o, s, c, l) {
	let u = e - i, d = t - a, f = (n + o) / 2 - Math.abs(u), p = (r + s) / 2 - Math.abs(d);
	if (f > 0 && p > 0) {
		if (u == 0 && d == 0) {
			let e = (r + s) / (n + o + r + s);
			return eh(c, l) / 2 ** 32 < e ? {
				x: f * $m(u, c, l),
				y: 0
			} : {
				x: 0,
				y: p * $m(d, c, l)
			};
		}
		return f < p || f == p && eh(c, l) % 2 == 0 ? {
			x: f * $m(u, c, l),
			y: 0
		} : {
			x: 0,
			y: p * $m(d, c, l)
		};
	}
}
function Ym(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!(n.width == 0 || n.height == 0)) {
			for (let r = t + 1; r < e.length; r++) if (Xm(n, e[r]) > Um) return !0;
			for (let t of e) {
				if (t.anchorWidth == 0 || t.anchorHeight == 0) continue;
				let e = (n.width + t.anchorWidth) / 2 + Y - Math.abs(n.x - t.anchorX), r = (n.height + t.anchorHeight) / 2 + Y - Math.abs(n.y - t.anchorY);
				if (e > Um && r > Um) return !0;
			}
		}
	}
	return !1;
}
function Xm(e, t) {
	if (t.width == 0 || t.height == 0) return 0;
	let n = (e.width + t.width) / 2 + Y - Math.abs(e.x - t.x), r = (e.height + t.height) / 2 + Y - Math.abs(e.y - t.y);
	return n > 0 && r > 0 ? Math.min(n, r) : 0;
}
function Zm(e, t, n, r, i, a, o, s) {
	return n > 0 && r > 0 && o > 0 && s > 0 && Math.abs(e - i) * 2 < n + o + Y * 2 && Math.abs(t - a) * 2 < r + s + Y * 2;
}
function Qm(e, t, n) {
	return !n || t > n[1] - n[0] || e - t / 2 >= n[0] && e + t / 2 <= n[1];
}
function $m(e, t, n) {
	return e == 0 ? eh(t, n) & 2 ? -1 : 1 : Math.sign(e);
}
function eh(e, t) {
	return (Math.imul(e + 1, 2654435761) ^ Math.imul(t + 1, 2246822507)) >>> 0;
}
function th(e, t) {
	return t <= 1 ? 1 : .2 + .8 * e / (t - 1);
}
function nh(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/data/transforms/displace2d.js
var rh = 4, ih = 2, ah = 64, oh = 60, sh = 10, ch = .05, lh = 1e3 / 60, uh = class extends z {
	#e = !1;
	#t;
	#n;
	#r = [];
	#i = [];
	#a = [];
	#o = [];
	#s = [];
	#c;
	#l = !1;
	#u;
	#d;
	#f;
	#p;
	#m;
	#h;
	#g;
	#_;
	#v;
	#y;
	get behavior() {
		return 6;
	}
	constructor(e, t) {
		if (super(e, t), this.#d = t?.context?.animator, this.#f = e.as ?? ["xDisplacement", "yDisplacement"], e.key && this.#f.includes(e.key)) throw Error("displace2d output fields must preserve the key.");
		this.#p = b(e.x), this.#m = b(e.y), this.#h = e.key ? b(e.key) : void 0, this.#c = e.key ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new WeakMap();
		let n = {
			width: e.width,
			height: e.height,
			anchorWidth: e.anchorWidth ?? 0,
			anchorHeight: e.anchorHeight ?? 0
		}, r = Object.values(n).some(I) ? ut(this.paramRuntime, n, () => {
			this.#e && this.completed && this.#F();
		}, (e) => this.registerDisposer(e)) : n;
		this.#g = dh(e.width, () => r.width), this.#_ = dh(e.height, () => r.height), this.#v = dh(e.anchorWidth, () => r.anchorWidth), this.#y = dh(e.anchorHeight, () => r.anchorHeight);
		let i = t;
		if (this.#t = i.getScaleResolution("x"), this.#n = i.getScaleResolution("y"), !this.#t || !this.#n) throw Error("displace2d requires x and y scales.");
		let a = () => this.#F();
		for (let e of [this.#t, this.#n]) this.registerDisposer(e.getMappingRef().subscribe(a));
		this.registerDisposer(i._addBroadcastHandler("layoutComputed", () => this.#F())), this.registerDisposer(() => {
			this.#I(), this.#T();
		});
	}
	complete() {
		let e = !this.#e;
		if (e || !this.#M()) {
			for (let e of this.#r) e[this.#f[0]] = 0, e[this.#f[1]] = 0;
			this.#C(), e && (this.#e = !0, this.#F());
			return;
		}
		this.#x(), this.#C(), this.#w();
	}
	#b(e, t) {
		let n = this.#h, r = this.#t.getScale(), i = this.#n.getScale(), a = this.#t.getAxisLength(), o = this.#n.getAxisLength(), s = ur(r), c = ur(i), l = [0, a], u = [0, o], d = [], f = this.#d && this.#d.transitionsEnabled !== !1, p = !1, m = !1;
		for (let l = 0; l < e.length; l++) {
			let u = e[l], h = n ? n(u) : u;
			if (n && (fh(h), t.has(h))) throw Error(`displace2d key must be unique: ${h}`);
			let g = f ? this.#c.get(h) : void 0;
			n && t.set(h, g);
			let _ = (r(this.#p(u)) + s) * a, v = (1 - i(this.#m(u)) - c) * o;
			if (!(_ >= 0 && _ <= a && v >= 0 && v <= o)) {
				u[this.#f[0]] = 0, u[this.#f[1]] = 0;
				continue;
			}
			if (g) {
				m = !0;
				let e = _ - g.anchorX, t = v - g.anchorY;
				g.x += e, g.y += t, g.displayX += e, g.displayY += t, g.datum = u, g.anchorX = _, g.anchorY = v, g.width = this.#g(u), g.height = this.#_(u), g.anchorWidth = this.#v(u), g.anchorHeight = this.#y(u), g.priority = d.length;
			} else p = !0, g = {
				datum: u,
				anchorX: _,
				anchorY: v,
				x: _,
				y: v,
				width: this.#g(u),
				height: this.#_(u),
				anchorWidth: this.#v(u),
				anchorHeight: this.#y(u),
				priority: d.length,
				displayX: _,
				displayY: v
			};
			f && t.set(h, g), d.push(g);
		}
		if (d.length == 0) return;
		let h = new Km(d, l, u);
		if (f) {
			if (m && h.compactTowardAnchors(), p) for (let e = 0; e < ih; e++) h.step();
		} else h.solve();
		for (let e of d) e.datum[this.#f[0]] = (f ? e.displayX : e.x) - e.anchorX, e.datum[this.#f[1]] = (f ? e.displayY : e.y) - e.anchorY;
		return f ? h : void 0;
	}
	#x() {
		this.#s = [];
		let e = this.#h ? /* @__PURE__ */ new Map() : this.#c, t = 0;
		for (let { index: n, flowBatch: r } of this.#i) if (r.type == "facet") {
			if (n > t) {
				let r = this.#b(this.#r.slice(t, n), e);
				r && this.#s.push(r);
			}
			t = n;
		}
		if (t < this.#r.length) {
			let n = this.#b(t == 0 ? this.#r : this.#r.slice(t), e);
			n && this.#s.push(n);
		}
		this.#c = e;
	}
	#S(e, t) {
		let n = 0;
		for (let { index: r, flowBatch: i } of t) {
			for (; n < r;) this._propagate(e[n++]);
			super.beginBatch(i);
		}
		for (; n < e.length;) this._propagate(e[n++]);
	}
	#C() {
		this.#S(this.#r, this.#i), super.complete(), this.#a = this.#r.slice(), this.#o = this.#i.slice(), this.#j();
	}
	#w() {
		!this.#d || this.#d.transitionsEnabled === !1 || this.#l || this.#s.length == 0 || (this.#l = !0, this.#d.requestTransition(this.#E));
	}
	#T() {
		this.#d?.cancelTransition(this.#E), this.#l = !1, this.#u = void 0;
	}
	#E = (e) => {
		if (this.#l = !1, this.disposed) return;
		let t = Math.min(50, Math.max(1, this.#u === void 0 ? lh : e - this.#u));
		this.#u = e;
		let n = performance.now(), r = !1;
		for (let e = 0; e < ah && (r = this.#D(), !(!r || performance.now() - n >= rh)); e++);
		let i = this.#O(t);
		i != 0 && (this.#k(), this.#A()), (r || i == 2) && this.#w();
	};
	#D() {
		let e = !1;
		for (let t of this.#s) t.active && t.step(), e ||= t.active;
		return e;
	}
	#O(e) {
		let t = 1 - 2 ** (-e / oh), n = !1, r = !1;
		for (let e of this.#s) for (let i of e.items) {
			let e = i, a = i.x - e.displayX, o = i.y - e.displayY;
			a != 0 && (e.displayX += Math.abs(a) <= ch ? a : ph(a * t, -10, sh), n = !0), o != 0 && (e.displayY += Math.abs(o) <= ch ? o : ph(o * t, -10, sh), n = !0), r ||= Math.abs(i.x - e.displayX) > ch || Math.abs(i.y - e.displayY) > ch;
		}
		return n ? r ? 2 : 1 : 0;
	}
	#k() {
		for (let e of this.#s) for (let t of e.items) {
			let e = t;
			t.datum[this.#f[0]] = e.displayX - t.anchorX, t.datum[this.#f[1]] = e.displayY - t.anchorY;
		}
	}
	#A() {
		for (let e of this.children) e.reset();
		this.#S(this.#a, this.#o);
		for (let e of this.children) e.complete();
	}
	#j() {
		this.#r.length = 0, this.#i.length = 0;
	}
	beginBatch(e) {
		this.#i.push({
			index: this.#r.length,
			flowBatch: e
		});
	}
	#M() {
		return this.#t.getAxisLength() > 0 && this.#n.getAxisLength() > 0;
	}
	#N = () => {
		this.#P() && this.requestRepropagate();
	};
	#P() {
		return this.#e && !this.disposed && this.completed && this.#M();
	}
	#F() {
		this.#I(), this.#P() && this.paramRuntime.requestUpdate(this.#N);
	}
	#I() {
		this.paramRuntimeProvider?.paramRuntime?.cancelUpdate(this.#N);
	}
	reset() {
		this.#T(), super.reset(), this.#j();
	}
	handle(e) {
		this.#r.push(e);
	}
};
function dh(e, t) {
	return typeof e == "string" ? b(e) : () => t();
}
function fh(e) {
	if (typeof e != "string" && !(typeof e == "number" && Number.isFinite(e))) throw Error("displace2d keys must be strings or finite numbers.");
}
function ph(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/topK.js
function mh(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = i - r;
	if (t <= 0 || a <= 0) return [];
	let o = new En(), s;
	for (s = 0; s < t && s < a; s++) o.push(s, n(e[r + s]));
	for (; s < a; s++) {
		let t = n(e[r + s]);
		t > o.peekValue() && (o.push(s, t), o.pop());
	}
	let c = o.peekValue(), l = [], u = 0, d = 0;
	for (s = 0; s < a; s++) n(e[r + s]) > c && u++;
	let f = t - u;
	for (s = 0; s < a; s++) {
		let t = n(e[r + s]);
		(t > c || t === c && d++ < f) && l.push(s);
	}
	return l.sort((t, i) => {
		let a = n(e[r + t]), o = n(e[r + i]);
		return a > o ? -1 : a < o ? 1 : t - i;
	}), l.map((t) => e[r + t]);
}
//#endregion
//#region ../core/src/utils/reservationMap.js
var hh = class {
	constructor(e, t = -Infinity, n = Infinity) {
		this.maxSize = e, this.lowerLimit = t, this.upperLimit = n;
		let r = this.maxSize * 2 + 1;
		this.lowerLimits = new Float64Array(r), this.upperLimits = new Float64Array(r), this.lowerChildren = new Int32Array(r), this.upperChildren = new Int32Array(r), this.reset();
	}
	reset() {
		this.lowerLimits.fill(0), this.upperLimits.fill(0), this.lowerChildren.fill(0), this.upperChildren.fill(0), this.n = 1, this.lowerLimits[0] = this.lowerLimit, this.upperLimits[0] = this.upperLimit;
	}
	_findSlot(e, t, n = 0) {
		if (e >= this.lowerLimits[n] && t <= this.upperLimits[n]) {
			let r = this.lowerChildren[n];
			if (r) {
				let i = this._findSlot(e, t, r);
				return i >= 0 ? i : this._findSlot(e, t, this.upperChildren[n]);
			} else return n;
		} else return -1;
	}
	reserve(e, t) {
		if (t - e <= 0) throw Error("Cannot reserve an empty or negative-size slot!");
		if (this.n + 1 > this.lowerLimits.length) return !1;
		let n = this._findSlot(e, t);
		if (n < 0) return !1;
		let r = this.n++, i = this.n++;
		return this.lowerLimits[r] = this.lowerLimits[n], this.upperLimits[r] = e, this.lowerLimits[i] = t, this.upperLimits[i] = this.upperLimits[n], this.lowerChildren[n] = r, this.upperChildren[n] = i, !0;
	}
}, gh = class extends z {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = b(this.params.pos), this.endPosAccessor = b(this.params.pos2 ?? this.params.pos), this.startPosBisector = on(this.startPosAccessor), this.endPosBisector = on(this.endPosAccessor), this.scoreAccessor = b(this.params.score), this.widthAccessor = b(this.params.width), this.laneAccessor = this.params.lane ? b(this.params.lane) : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
		let n = () => this._filterAndPropagate();
		this.schedule = () => t.context.animator.requestTransition(n);
		let r = () => this._filterAndPropagate();
		this.resolution.addEventListener("domain", r), this.registerDisposer(() => this.resolution.removeEventListener("domain", r));
		let i = t._addBroadcastHandler("layoutComputed", () => this.schedule());
		this.registerDisposer(i);
	}
	complete() {
		let e = this.startPosAccessor;
		this._data.sort((t, n) => e(t) - e(n));
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new hh(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = this.resolution.getAxisLength();
		if (!t) return;
		for (let e of this.reservationMaps.values()) e.reset();
		let n = e.domain(), r = mh(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, n[0]), this.startPosBisector.right(this._data, n[1]));
		for (let n of r) {
			let r = e(this.startPosAccessor(n)) * t, i = e(this.endPosAccessor(n)) * t, a = i - r, o = this.widthAccessor(n) + this.padding * 2, s = (r + i) / 2, c = Math.max(0, (a - o) / 2);
			if (c > 0) {
				let e = Math.max(0, o / 2 - s);
				s += Math.min(e, c);
				let n = Math.max(0, o / 2 + s - t);
				s -= Math.min(n, c);
			}
			if (this.reservationMaps.get(this.laneAccessor(n)).reserve(s - o / 2, s + o / 2)) if (this.params.asMidpoint) {
				let r = Object.assign({}, n);
				r[this.params.asMidpoint] = e.invert(s / t), this._propagate(r);
			} else this._propagate(n);
		}
		super.complete();
	}
	reset() {
		super.reset(), this._data = [], this.groups = /* @__PURE__ */ new Map();
	}
	handle(e) {
		this._data.push(e);
	}
};
//#endregion
//#region ../core/src/data/transforms/axisLabelOverlap.js
function _h(e, t, n, r) {
	if (e.length < 3 || !bh(e, t, r)) return e;
	let i = e;
	do
		switch (n) {
			case "parity":
				i = vh(i);
				break;
			case "greedy":
				i = yh(i, t, r);
				break;
			default: throw Error("Invalid axis label overlap method: " + n);
		}
	while (i.length >= 3 && bh(i, t, r));
	let a = e.at(-1);
	return i.length < 3 && i.at(-1) !== a && (i.length > 1 && i.pop(), i.push(a)), i;
}
function vh(e) {
	return e.filter((e, t) => t % 2 == 0);
}
function yh(e, t, n) {
	let r = [], i;
	for (let a of e) {
		let e = t(a);
		(i == null || !xh(i, e, n)) && (r.push(a), i = e);
	}
	return r;
}
function bh(e, t, n) {
	let r = t(e[0]);
	for (let i = 1; i < e.length; i++) {
		let a = t(e[i]);
		if (xh(r, a, n)) return !0;
		r = a;
	}
	return !1;
}
function xh(e, t, n) {
	return n > Math.max(t[0] - e[1], e[0] - t[1]);
}
//#endregion
//#region ../core/src/data/transforms/axisLabelLayout.js
var Sh = class extends z {
	get behavior() {
		return 6;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this.channel = e.channel, this.labelWidthAccessor = b(e.labelWidth), this.chromLabelWidthAccessor = e.chromLabelWidth ? b(e.chromLabelWidth) : void 0, (e.labelOverlap || e.labelFlush !== !1 || e.labelFlushZoomExtent) && !Dh(e.labelAngle)) throw Error("Axis label layout requires an axis-aligned label angle.");
		this.data = [], this.nextOutputData = [], this.outputValueSet = /* @__PURE__ */ new Set(), this.visibleLabelValueSet = /* @__PURE__ */ new Set(), this.nextVisibleLabelValueSet = /* @__PURE__ */ new Set(), this.flushOffsetMap = /* @__PURE__ */ new Map(), this.nextFlushOffsetMap = /* @__PURE__ */ new Map(), this.hasPublished = !1, this.resolution = t.getScaleResolution(this.channel);
		let n = () => this.filterAndPropagate();
		this.schedule = () => t.context.animator.requestTransition(n);
		let r = () => this.filterAndPropagate();
		this.resolution.addEventListener("domain", r), this.registerDisposer(() => this.resolution.removeEventListener("domain", r)), this.registerDisposer(t._addBroadcastHandler("layoutComputed", this.schedule));
	}
	complete() {
		this.resolution.getAxisLength() ? this.filterAndPropagate() : (this.schedule(), this.hasPublished ? this.completed = !0 : this.propagateIfChanged());
	}
	filterAndPropagate() {
		let e = this.resolution.getAxisLength();
		if (!e) return;
		this.nextOutputData.length = 0;
		let t = this.resolution.getScale(), n = this.chromLabelWidthAccessor ? t.genome() : void 0;
		for (let r of this.data) (!n || !this.chromosomeLabelOverlaps(r, t, n, e)) && this.nextOutputData.push(r);
		this.nextFlushOffsetMap.clear();
		for (let n of this.nextOutputData) {
			let r = t(n.value) * e, i = this.params.labelFlushZoomExtent && n.zoomExtent ? jh(r, this.getLabelBounds(n, 0), e, this.params.labelFlushOffset) : this.params.labelFlush === !1 ? 0 : Ah(r, this.getLabelBounds(n, 0), e, this.params.labelFlush, this.params.labelFlushOffset), a = this.channel == "x" ? i : -i;
			n[this.params.labelOffset] = a, this.nextFlushOffsetMap.set(n.value, a);
		}
		let r = this.getOverlapMethod(t), i = this.nextOutputData.filter((e) => e.label !== ""), a = r ? Ch(i, (n) => {
			let r = this.getLabelBounds(n, t(n.value) * e), i = n[this.params.labelOffset], a = this.channel == "x" ? i : -i;
			return [r[0] + a, r[1] + a];
		}, r, this.params.labelSeparation) : i;
		this.nextVisibleLabelValueSet.clear();
		for (let e of a) this.nextVisibleLabelValueSet.add(e.value);
		for (let e of this.nextOutputData) e[this.params.labelVisible] = this.nextVisibleLabelValueSet.has(e.value);
		this.propagateIfChanged();
	}
	propagateIfChanged() {
		if (!this.hasPublished || this.nextOutputData.length != this.outputValueSet.size || this.nextOutputData.some((e) => !this.outputValueSet.has(e.value)) || !Oh(this.nextVisibleLabelValueSet, this.visibleLabelValueSet) || !kh(this.nextFlushOffsetMap, this.flushOffsetMap)) {
			this.outputValueSet.clear();
			for (let e of this.nextOutputData) this.outputValueSet.add(e.value);
			let e = this.visibleLabelValueSet;
			this.visibleLabelValueSet = this.nextVisibleLabelValueSet, this.nextVisibleLabelValueSet = e;
			let t = this.flushOffsetMap;
			this.flushOffsetMap = this.nextFlushOffsetMap, this.nextFlushOffsetMap = t, super.reset();
			for (let e of this.nextOutputData) this._propagate(e);
			this.hasPublished = !0, super.complete();
		} else this.completed = !0;
		this.nextOutputData.length = 0, this.nextVisibleLabelValueSet.clear(), this.nextFlushOffsetMap.clear();
	}
	chromosomeLabelOverlaps(e, t, n, r) {
		let i = n.getChromosome(e.chromLabel);
		return xh(this.getLabelBounds(e, t(e.value) * r), Mh(t(i.continuousStart) * r, t(i.continuousEnd) * r, this.chromLabelWidthAccessor(e), this.params.chromLabelPadding, this.params.chromLabelAlign, r), this.params.chromLabelSpacing);
	}
	getLabelBounds(e, t) {
		return wh(t, this.labelWidthAccessor(e), this.params.labelFontSize, this.params.labelAngle, this.channel, this.params.labelAlign, this.params.labelBaseline);
	}
	getOverlapMethod(e) {
		switch (this.params.labelOverlap) {
			case !1: return !1;
			case "auto": return Rt(e.type) || e.type == "symlog" ? "greedy" : "parity";
			case "parity":
			case "greedy": return this.params.labelOverlap;
			default: throw Error("Invalid axis label overlap method: " + this.params.labelOverlap);
		}
	}
	reset() {
		this.completed = !1, this.data.length = 0, this.nextOutputData.length = 0;
	}
	handle(e) {
		this.data.push(e);
	}
};
function Ch(e, t, n, r) {
	let i = _h(e.filter((e) => e.explicit), t, n, r), a = _h(e.filter((e) => !e.explicit && i.every((n) => !xh(t(e), t(n), r))), t, n, r);
	return i.concat(a);
}
function wh(e, t, n, r, i, a, o) {
	let s = -Th(a) * t, c = s + t, l = -Eh(o) * n, u = l + n, d = -r * Math.PI / 180, f = Math.sin(d), p = Math.cos(d), m = i == "x" ? s * p - l * f : s * f + l * p, h = i == "x" ? c * p - l * f : c * f + l * p, g = i == "x" ? c * p - u * f : c * f + u * p, _ = i == "x" ? s * p - u * f : s * f + u * p;
	return [e + Math.min(m, h, g, _), e + Math.max(m, h, g, _)];
}
function Th(e) {
	switch (e) {
		case "left": return 0;
		case "center": return .5;
		case "right": return 1;
		default: throw Error("Invalid label alignment: " + e);
	}
}
function Eh(e) {
	switch (e) {
		case "top": return 0;
		case "middle": return .5;
		case "bottom":
		case "alphabetic":
		case "baseline": return 1;
		default: throw Error("Invalid label baseline: " + e);
	}
}
function Dh(e) {
	return e % 90 == 0;
}
function Oh(e, t) {
	return e.size == t.size && e.isSubsetOf(t);
}
function kh(e, t) {
	if (e.size != t.size) return !1;
	for (let [n, r] of e) if (t.get(n) !== r) return !1;
	return !0;
}
function Ah(e, t, n, r, i) {
	let a = Math.abs(e), o = Math.abs(n - e);
	return a < o && a <= r ? -t[0] - i : o <= r ? -t[1] + i : 0;
}
function jh(e, t, n, r) {
	return e < n - e ? Math.max(0, -e - t[0] - r) : Math.min(0, n - e - t[1] + r);
}
function Mh(e, t, n, r, i, a) {
	let o = Math.min(e, t), s = Math.max(e, t), c = s - o, l = Math.max(0, o), u = Math.min(a, s);
	if (n + 2 * r > c - r) return [l, u];
	switch (i) {
		case "left": {
			let e = l + r;
			return [e, e + n];
		}
		case "center": {
			let e = Math.max(n / 2, Math.min(a - n / 2, (l + u) / 2));
			return [e - n / 2, e + n / 2];
		}
		case "right": {
			let e = u - r;
			return [e - n, e];
		}
		default: throw Error("Invalid chromosome label alignment: " + i);
	}
}
//#endregion
//#region ../core/src/data/transforms/filter.js
var Nh = class extends z {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (Ph(this.params)) e = this.params.expr;
		else if (Fh(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = de(this.params, t);
		} else throw Error("Invalid filter params: " + JSON.stringify(this.params));
		this.predicate = this.watchSnapshottedExpression(e);
	}
	handle(e) {
		this.predicate(e) && this._propagate(e);
	}
};
function Ph(e) {
	return "expr" in e;
}
function Fh(e) {
	return "param" in e;
}
//#endregion
//#region ../core/src/data/transforms/flatten.js
var Ih = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = e.index;
		if (e.fields) {
			let n = R(e.fields).map((e) => b(e)), r = R(e.as || e.fields);
			if (n.length !== r.length) throw Error(`Lengths of "fields" (${n.length}), and "as" (${r.length}) do not match!`);
			this.handle = (e) => {
				let i = n.map((t, n) => t(e) ?? []), a = i[0].length;
				for (let o = 0; o < a; o++) {
					let a = Object.assign({}, e);
					for (let e = 0; e < n.length; e++) a[r[e]] = o < i[e].length ? i[e][o] : null;
					t && (a[t] = o), this._propagate(a);
				}
			};
		} else this.handle = (e) => {
			for (let n = 0; n < e.length; n++) {
				let r = Object.assign({}, e[n]);
				t && (r[t] = n), this._propagate(r);
			}
		};
	}
}, Lh = 48;
function* Rh(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - Lh;
	}
	yield r;
}
//#endregion
//#region ../core/src/data/transforms/flattenCompressedExons.js
var zh = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = b(e.exons ?? "exons"), n = b(e.start ?? "start"), [r, i] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let a = n(e), o = a, s = !0, c = t(e);
			for (let t of Rh(c)) {
				if (s) o = a + t;
				else {
					a = o + t;
					let n = Object.assign({}, e);
					n[r] = o, n[i] = a, this._propagate(n);
				}
				s = !s;
			}
		};
	}
}, Bh = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = b(e.start ?? "start"), n = b(e.cigar ?? "cigar"), r = rm({ copyFields: e.copyFields });
		this.handle = (e) => {
			let i = t(e);
			if (!Number.isFinite(i)) throw Error(`Invalid CIGAR start coordinate: ${i}`);
			let a = n(e);
			if (typeof a != "string" || a.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(a)}`);
			for (let t of vm(a, i)) this._propagate(Object.assign(r(e), t));
		}, this.beginBatch = (e) => {
			r.reset(), super.beginBatch(e);
		};
	}
}, Vh = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = R(e.field).map((e) => b(e)), n = R(e.separator), r = R(e.as || e.field);
		if (t.length !== n.length || t.length !== r.length) throw Error(`Lengths of "separator" (${n.length}), "fields" (${t.length}), and "as" (${r.length}) do not match!`);
		this.handle = (e) => {
			if (t.some((t) => !t(e))) return;
			let i = t.map((t, r) => t(e).split(n[r]));
			Hh(i, e);
			let a = i[0].length;
			for (let n = 0; n < a; n++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < t.length; e++) a[r[e]] = i[e][n];
				this._propagate(a);
			}
		};
	}
};
function Hh(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region ../core/src/data/transforms/formula.js
var Uh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.as = e.as, this.fn = void 0;
	}
	initialize() {
		this.fn = this.watchSnapshottedExpression(this.params.expr);
	}
	handle(e) {
		e[this.as] = this.fn(e), this._propagate(e);
	}
}, Wh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		e = {
			channel: "x",
			...e
		}, super(e), this.params = e;
		let n = e.channel;
		if (!["x", "y"].includes(n)) throw Error("Invalid channel: " + n);
		let r = t.getScaleResolution(n).getScale(), i = "genome" in r ? r.genome() : void 0;
		if (!i) throw Error("LinearizeGenomicCoordinate transform requires a locus scale!");
		let a = b(e.chrom), o = R(e.pos).map((e) => b(e)), s = R(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = R(e.offset), l;
		if (c.length == 0) l = Array(o.length).fill(0);
		else if (c.length == 1) l = Array(o.length).fill(c[0]);
		else if (c.length == o.length) l = c;
		else throw Error(`Invalid "offset" parameter: ${JSON.stringify(e.offset)}!`);
		let u = Function("datum", "chromOffset", "posAccessors", s.map((e, t) => `datum[${JSON.stringify(e)}] = chromOffset + +posAccessors[${t}](datum) - ${l[t]};`).join("\n")), d, f = 0, p = (e) => {
			if (e !== d) {
				if (f = i.cumulativeChromPositions.get(e), f === void 0) return;
				d = e;
			}
			return f;
		};
		this.handle = (e) => {
			let t = a(e), n = p(t);
			if (n === void 0) throw Error(`Unknown chromosome/contig "${t}" in datum: ${JSON.stringify(e)}`);
			u(e, n, o), this._propagate(e);
		};
	}
}, Gh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = b(e.field), r = e.as, i = 0, a = this.watchExprRef(e.fontSize, () => {
			let e = a();
			e != i && (i = e, this.repropagate());
		});
		i = a(), this.handle = (e) => {
			let t = n(e);
			t === void 0 ? e[r] = 0 : e[r] = this.fontMeasurement.measureWidth(t, i), this._propagate(e);
		};
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.textMetrics;
		this.fontMeasurement = hu(e, this.params);
	}
};
//#endregion
//#region ../core/src/data/transforms/packLegendLabels.js
function Kh(e, t) {
	let n = Number(e), r = Number.isFinite(n) && n >= 0 ? n : 100, i = Number(t);
	return Math.sqrt(r) + (Number.isFinite(i) ? i : 0);
}
var qh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.labelWidthAccessor = b(e.labelWidth), this.symbolSizeAccessor = typeof e.symbolSize == "string" ? b(e.symbolSize) : () => e.symbolSize ?? 100, this.symbolStrokeWidthAccessor = typeof e.symbolStrokeWidth == "string" ? b(e.symbolStrokeWidth) : () => e.symbolStrokeWidth ?? 0, this.yExtent = void 0;
		let n = this.watchExprRef(e.yExtent, () => {
			let e = n();
			e != this.yExtent && (this.yExtent = e, this.repropagate());
		});
		this.yExtent = n(), this.buffer = [];
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	handle(e) {
		this.buffer.push(e);
	}
	complete() {
		let e = this.params, t = e.direction ?? "vertical", n = e.rowPadding ?? 0, r = e.columnPadding ?? 0, i = e.labelOffset ?? 0, a = e.fontSize ?? 10, o = e.xOffset ?? 0, s = e.yOffset ?? 0, c = e.symbolOffset ?? 0, l = this.yExtent, u = this.buffer.length, d = e.columns && e.columns > 0 ? e.columns : t == "horizontal" ? u : 1, f = Math.ceil(u / Math.max(d, 1)), p = Array.from({ length: d }, () => 0), m = Array.from({ length: d }, () => 0), h = Array.from({ length: d }, () => 0), g = Array.from({ length: f }, () => 0), _ = [];
		for (let e = 0; e < u; e++) {
			let n = this.buffer[e], r = t == "horizontal" ? Math.floor(e / d) : e % f, i = t == "horizontal" ? e % d : Math.floor(e / f), o = Kh(this.symbolSizeAccessor(n), this.symbolStrokeWidthAccessor(n)), s = this.labelWidthAccessor(n);
			_.push({
				row: r,
				column: i,
				symbolExtent: o
			}), m[i] = Math.max(m[i], o), h[i] = Math.max(h[i], s), g[r] = Math.max(g[r], o, a);
		}
		for (let e = 0; e < d; e++) p[e] = m[e] + i + h[e];
		let v = [];
		for (let e = 0, t = 0; e < d; e++) v[e] = t, t += p[e] + r;
		let y = [];
		for (let e = 0, t = 0; e < f; e++) y[e] = t, t += g[e] + n;
		for (let e = 0; e < u; e++) {
			let t = this.buffer[e], n = _[e], r = v[n.column], a = y[n.row], u = m[n.column], d = u / 2;
			t.row = n.row, t.column = n.column;
			let f = a + s, h = a + s + g[n.row] / 2;
			t.symbolX = r + o + c, t.symbolX2 = r + o + c + u, t.entryX = r + o + c + d, t.entryY = f, t.entryWidth = p[n.column], t.entryHeight = g[n.row], t.labelX = r + o + u + i, t.labelY = h, l != null && (t.entryY2 = l - f, t.labelY2 = l - h), this._propagate(t);
		}
		super.complete();
	}
}, Jh = 65536, Yh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e;
	}
	reset() {
		super.reset(), this.initialize();
	}
	initialize() {
		let e = this.params, t = e.as || "lane", n = ie(e.spacing) ? e.spacing : 1, r = b(e.start), i = b(e.end);
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(Jh), o = b(e.preference), s = e.preferredOrder, c = Infinity;
			this.handle = (e) => {
				let l = r(e);
				l < c && a.fill(-Infinity), c = l;
				let u = s.indexOf(o(e)), d;
				if (u >= 0 && a[u] < l) d = u;
				else {
					let t = r(e);
					for (d = 0; d < a.length && !(a[d] < t); d++);
					if (d >= a.length) throw Error("Out of lanes!");
				}
				a[d] = i(e) + n, e[t] = d, this._propagate(e);
			};
		} else {
			let e = new En(), a = new En(), o = -Infinity, s = 0;
			this.handle = (c) => {
				let l = r(c);
				for (; e.length && (e.peekValue() <= l || l < o);) {
					let t = e.pop();
					a.push(t, t);
				}
				o = l;
				let u = a.pop();
				u === void 0 && (u = s++), c[t] = u, this._propagate(c), e.push(u, i(c) + n);
			};
		}
	}
}, Xh = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let t = e.fields.map((e) => b(e)), n = e.as ? e.as : t.map(h);
		this.handle = (e) => {
			let r = {};
			for (let i = 0; i < t.length; i++) r[n[i]] = t[i](e);
			this._propagate(r);
		};
	}
}, Zh = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = new RegExp(e.regex), n = typeof e.as == "string" ? [e.as] : e.as, r = b(e.field);
		this.handle = (i) => {
			let a = r(i);
			if (Ae(a)) {
				let r = a.match(t);
				if (r) {
					if (r.length - 1 != n.length) throw Error("The number of RegEx groups and the length of \"as\" do not match!");
					for (let e = 0; e < n.length; e++) i[n[e]] = r[e + 1];
				} else if (e.skipInvalidInput) for (let e = 0; e < n.length; e++) i[n[e]] = void 0;
				else throw Error(`"${a}" does not match the given regex: ${t.toString()}`);
			} else if (!e.skipInvalidInput) throw Error(`Trying to match a non-string field. Encountered type: ${typeof a}, field content: "${a}".`);
			this._propagate(i);
		};
	}
}, Qh = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = R(e.columnRegex).map((e) => new RegExp(e));
		for (let e of t) if (RegExp("|" + e.source).exec("").length - 1 != 1) throw Error(`Regex ${e.toString()} must have exactly one capturing group!`);
		let n = R(e.asValue);
		if (t.length != n.length) throw Error("Lengths of \"columnRegex\" and \"as\" are not equal!");
		let r = e.skipRegex ? new RegExp(e.skipRegex) : void 0, i = e.asKey || "sample", a, o, s, c = (e) => {
			let c = Object.keys(e);
			for (let e of t) if (!c.some((t) => e.test(t))) throw Error(`No columns matching the regex ${e.toString()} found in the data!`);
			let l = /* @__PURE__ */ new Map();
			for (let [e, n] of t.entries()) for (let t of c) {
				let r = n.exec(t)?.[1];
				if (r !== void 0) {
					let n = l.get(r);
					n || (n = [], l.set(r, n)), n[e] = t;
				}
			}
			a = [...l.entries()], o = c.filter((e) => !t.some((t) => t.test(e)) && !(r && r.test(e)));
			let u = [
				...o.map((e) => JSON.stringify(e) + ": datum[" + JSON.stringify(e) + "]"),
				JSON.stringify(i) + ": sampleId",
				...n.map((e, t) => JSON.stringify(e) + `: datum[attrs[${t}]]`)
			];
			s = Function("datum", "sampleId", "attrs", "return {\n" + u.join(",\n") + "\n};");
		}, l = (e) => {
			a || c(e);
			for (let t = 0; t < a.length; t++) {
				let [n, r] = a[t], i = s(e, n, r);
				this._propagate(i);
			}
		}, u = (e) => {
			c(e), l(e), this.handle = l;
		};
		this.handle = u, this.beginBatch = (e) => {
			fe(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, $h = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = Array.isArray(e.element) ? e.element : [e.element];
		if (t.length == 0) throw Error("\"element\" must contain at least one field.");
		if (e.membership === "") throw Error("\"membership\" must name a non-empty field.");
		this.elementAccessors = t.map((e) => b(e)), this.setAccessor = b(e.set), this.membershipAccessor = e.membership ? b(e.membership) : null, this.#e();
	}
	#e() {
		this.elementRoot = /* @__PURE__ */ new Map(), this.elements = [], this.setIndexes = /* @__PURE__ */ new Map(), this.sets = [];
	}
	reset() {
		super.reset(), this.#e();
	}
	#t(e, t) {
		if (!(typeof e == "string" || typeof e == "number" || typeof e == "boolean") || typeof e == "number" && !Number.isFinite(e)) throw Error(`The ${t} field must contain finite scalar values. Received: ${String(e)}`);
	}
	#n(e) {
		if (e === !0 || e === 1) return !0;
		if (e === !1 || e === 0) return !1;
		throw Error(`The membership field must contain true, false, 1, or 0. Received: ${String(e)}`);
	}
	#r(e) {
		let t = this.elementRoot, n = this.elementAccessors.length - 1;
		for (let r = 0; r < n; r++) {
			let n = this.elementAccessors[r](e);
			this.#t(n, "element");
			let i = t.get(n);
			i || (i = /* @__PURE__ */ new Map(), t.set(n, i)), t = i;
		}
		let r = this.elementAccessors[n](e);
		this.#t(r, "element");
		let i = t.get(r);
		return i || (i = /* @__PURE__ */ new Map(), t.set(r, i), this.elements.push(i)), i;
	}
	handle(e) {
		let t = this.setAccessor(e);
		this.#t(t, "set");
		let n = this.setIndexes.get(t);
		n === void 0 && (n = this.sets.length, this.setIndexes.set(t, n), this.sets.push(t));
		let r = !this.membershipAccessor || this.#n(this.membershipAccessor(e)), i = this.#r(e);
		if (i.has(n) && i.get(n) !== r) throw Error("Conflicting membership values for the same element and set.");
		i.set(n, r);
	}
	#i() {
		let e = this.sets, t = this.elements;
		this.#e();
		let n = /* @__PURE__ */ new Map();
		for (let r of t) {
			let t = e.map((e, t) => r.get(t) === !0), i = t.map((e) => e ? "1" : "0").join(""), a = n.get(i);
			a ? a.profileSize++ : n.set(i, {
				profileKey: i,
				profileSize: 1,
				profileDegree: t.filter(Boolean).length,
				memberships: t
			});
		}
		for (let t of n.values()) for (let [n, r] of e.entries()) this._propagate({
			profileKey: t.profileKey,
			profileSize: t.profileSize,
			profileDegree: t.profileDegree,
			set: r,
			setIndex: n,
			member: t.memberships[n]
		});
	}
	beginBatch(e) {
		this.elements.length > 0 && this.#i(), super.beginBatch(e);
	}
	complete() {
		this.elements.length > 0 && this.#i(), super.complete();
	}
}, eg = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.buffer = [];
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	handle(e) {
		this.buffer.push(e);
	}
	complete() {
		let e = this.params, t = e.as || ["y0", "y1"], n = e.sort ? et(e.sort.field, e.sort.order) : void 0, r = e.field ? b(e.field) : () => 1, i = e.groupby.map((e) => b(e)), a = mn(this.buffer, (e) => i.map((t) => t(e)).join()).map((e) => e[1]), o = (e) => !0;
		if (e.baseField) {
			let t = b(e.baseField);
			o = (e) => t(e) !== null;
		}
		let s, c;
		switch (e.offset) {
			case "normalize":
				s = (e, t) => e / t, c = (e, t) => la(e, t);
				break;
			case "center":
				s = (e, t) => e - t / 2, c = (e, t) => la(e, t);
				break;
			case "information":
				{
					let t = Math.log2(e.cardinality ?? 4);
					s = (e, t) => e / t, c = (e, n) => {
						let r = la(e, (e) => +!o(e)), i = la(e, n), a = i - r, s = 0;
						for (let t = 0; t < e.length; t++) {
							let r = e[t];
							if (o(r)) {
								let e = n(r) / a;
								s -= e * Math.log2(e);
							}
						}
						return a / (t - (s + 0)) * (a / i);
					};
				}
				break;
			default: s = (e, t) => e, c = (e, t) => 1;
		}
		for (let e of a) {
			n && e.sort(n);
			let i = c(e, r), a = 0;
			for (let n of e) {
				let e = a + r(n);
				o(n) && (n[t[0]] = s(a, i), n[t[1]] = s(e, i), this._propagate(n), a = e);
			}
		}
		super.complete();
	}
}, tg = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = b(e.field ?? "sequence"), [n, r] = e.as ?? ["pos", "sequence"];
		this.handle = (e) => {
			let i = Object.assign({}, e, {
				[r]: "",
				[n]: 0
			}), a = t(e);
			for (let e = 0; e < a.length; e++) {
				let t = Object.assign({}, i);
				t[n] = e, t[r] = a.charAt(e), this._propagate(t);
			}
		};
	}
}, ng = {
	count: (e) => e.length,
	valid: ia,
	sum: la,
	min: Lt,
	max: St,
	mean: sa,
	q1: (e, t) => Ut(e, .25, t),
	median: ca,
	q3: (e, t) => Ut(e, .75, t),
	variance: aa
}, rg = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
			if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
			if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
			e.fields.forEach((t, n) => {
				let r = b(t), i = ng[e.ops[n]];
				this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
			});
		} else this.ops.push((e) => ng.count(e)), this.as.push("count");
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	#e() {
		let e = this.params?.groupby;
		if (e?.length > 0) {
			let t = e.map((e) => b(e)), n = _n(this.buffer, ...t);
			for (let [t, r] of Ju(n)) {
				let n = {};
				for (let r = 0; r < e.length; r++) n[e[r]] = t[r];
				this.ops.forEach((e, t) => {
					n[this.as[t]] = e(r);
				}), this._propagate(n);
			}
		} else {
			let e = {};
			this.ops.forEach((t, n) => {
				e[this.as[n]] = t(this.buffer);
			}), this._propagate(e);
		}
	}
	handle(e) {
		this.buffer.push(e);
	}
	beginBatch(e) {
		this.buffer.length > 0 && (this.#e(), this.buffer = []), super.beginBatch(e);
	}
	complete() {
		this.buffer.length > 0 && this.#e(), super.complete();
	}
}, ig = "...";
function ag(e, t, n, r, i) {
	if (t === void 0 || !Number.isFinite(t)) return e;
	if (t <= 0) return "";
	if (!n || n(e, r) <= t) return e;
	if (n(i, r) > t) return "";
	let a = 0, o = e.length;
	for (; a < o;) {
		let s = Math.ceil((a + o) / 2);
		n(e.slice(0, s) + i, r) <= t ? a = s : o = s - 1;
	}
	return e.slice(0, a) + i;
}
var og = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.accessor = b(e.field), this.as = e.as ?? e.field, this.fontSize = e.fontSize, this.ellipsis = e.ellipsis ?? ig;
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.textMetrics;
		this.fontMeasurement = e.requestFont(this.params);
	}
	handle(e) {
		let t = this.accessor(e);
		t == null ? e[this.as] = "" : e[this.as] = ag("" + t, this.params.limit, (e, t) => this.fontMeasurement.measureWidth(e, t), this.fontSize, this.ellipsis), this._propagate(e);
	}
}, sg = /* @__PURE__ */ new Set([
	"count",
	"valid",
	"sum",
	"min",
	"max",
	"mean",
	"q1",
	"median",
	"q3",
	"variance"
]), cg = /* @__PURE__ */ new Set([
	"min",
	"max",
	"q1",
	"median",
	"q3"
]), lg = /* @__PURE__ */ new Set(["mean", "variance"]);
function ug(e, t) {
	let n = t.map(({ op: e }) => e), r = t.map(({ resultIndex: e }) => e), i = t.map(({ op: e }) => dg(e));
	return ((t, a, o) => {
		let s = new fg(e, n), c = r.map((e) => o[e]), l = a.starts, u = a.stops, d = 0, f = 0;
		for (let e = 0; e < t.length; e++) {
			let n = l[e], r = u[e];
			for (; d < n;) s.remove(t[d++]);
			for (; d > n;) s.add(t[--d]);
			for (; f < r;) s.add(t[f++]);
			for (; f > r;) s.remove(t[--f]);
			for (let t = 0; t < i.length; t++) c[t][e] = i[t](s);
		}
	});
}
function dg(e) {
	switch (e) {
		case "valid": return (e) => e.valid;
		case "sum": return (e) => e.valid ? e.sum : void 0;
		case "min": return (e) => e.valid ? e.values[0] : void 0;
		case "max": return (e) => e.valid ? e.values[e.values.length - 1] : void 0;
		case "mean": return (e) => e.valid ? e.mean : void 0;
		case "q1": return (e) => e.valid ? e.q1() : void 0;
		case "median": return (e) => e.valid ? e.median() : void 0;
		case "q3": return (e) => e.valid ? e.q3() : void 0;
		case "variance": return (e) => e.valid > 1 ? e.m2 / (e.valid - 1) : void 0;
		default: throw Error(`Unsupported aggregate window operation: ${e}`);
	}
}
var fg = class {
	accessor;
	needsSum;
	needsMoments;
	needsOrderedValues;
	valid;
	sum;
	mean;
	m2;
	values;
	constructor(e, t) {
		this.accessor = e, this.needsSum = t.includes("sum"), this.needsMoments = t.some((e) => lg.has(e)), this.needsOrderedValues = t.some((e) => cg.has(e)), this.reset();
	}
	reset() {
		this.valid = 0, this.sum = 0, this.mean = 0, this.m2 = 0, this.values = [];
	}
	add(e) {
		let t = this.accessor(e);
		if (t == null || t === "" || Number.isNaN(t) || (this.valid += 1, !this.needsSum && !this.needsMoments && !this.needsOrderedValues)) return;
		let n = +t;
		if (this.needsSum && (this.sum += n), this.needsMoments) {
			let e = n - this.mean;
			this.mean += e / this.valid, this.m2 += e * (n - this.mean);
		}
		this.needsOrderedValues && this.values.splice(sn(this.values, n), 0, n);
	}
	remove(e) {
		let t = this.accessor(e);
		if (t == null || t === "" || Number.isNaN(t)) return;
		let n = this.valid;
		if (--this.valid, !this.needsSum && !this.needsMoments && !this.needsOrderedValues) return;
		let r = +t;
		if (this.needsSum && (this.sum -= r), this.needsMoments) if (this.valid) {
			let e = this.mean;
			this.mean = (e * n - r) / this.valid, this.m2 -= (r - e) * (r - this.mean);
		} else this.mean = 0, this.m2 = 0;
		if (this.needsOrderedValues) {
			let e = sn(this.values, r);
			if (this.values[e] !== r) throw Error("Window aggregate state is inconsistent.");
			this.values.splice(e, 1);
		}
	}
	q1() {
		return Gt(this.values, .25);
	}
	median() {
		return Gt(this.values, .5);
	}
	q3() {
		return Gt(this.values, .75);
	}
}, pg = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile",
	"lag",
	"lead",
	"first_value",
	"last_value",
	"nth_value",
	"prev_value",
	"next_value"
]), mg = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile"
]);
function hg(e, t, n) {
	let r = t;
	switch (e) {
		case "row_number": return (e, t, n) => {
			for (let t = 0; t < e.length; t++) n[t] = t + 1;
		};
		case "rank": return (e, t, n) => {
			let r = t.peerStarts;
			for (let t = 0; t < e.length; t++) n[t] = r[t] + 1;
		};
		case "dense_rank": return (e, t, n) => {
			let r = t.peerStarts, i = 0;
			for (let t = 0; t < e.length; t++) r[t] == t && (i += 1), n[t] = i;
		};
		case "percent_rank": return (e, t, n) => {
			let r = t.peerStarts, i = e.length - 1;
			for (let t = 0; t < e.length; t++) n[t] = r[t] / i;
		};
		case "cume_dist": return (e, t, n) => {
			let r = t.peerStops, i = e.length;
			for (let t = 0; t < e.length; t++) n[t] = r[t] / i;
		};
		case "ntile": {
			let e = n;
			return (t, n, r) => {
				let i = n.peerStops, a = t.length;
				for (let n = 0; n < t.length; n++) r[n] = Math.ceil(e * i[n] / a);
			};
		}
		case "lag": {
			let e = Number(n) || 1;
			return (t, n, i) => {
				for (let n = 0; n < t.length; n++) i[n] = n >= e ? r(t[n - e]) : null;
			};
		}
		case "lead": {
			let e = Number(n) || 1;
			return (t, n, i) => {
				let a = t.length - e;
				for (let n = 0; n < t.length; n++) i[n] = n < a ? r(t[n + e]) : null;
			};
		}
		case "first_value": return (e, t, n) => {
			let i = t.starts, a = t.stops;
			for (let t = 0; t < e.length; t++) n[t] = i[t] < a[t] ? r(e[i[t]]) : null;
		};
		case "last_value": return (e, t, n) => {
			let i = t.starts, a = t.stops;
			for (let t = 0; t < e.length; t++) n[t] = i[t] < a[t] ? r(e[a[t] - 1]) : null;
		};
		case "nth_value": {
			let e = n;
			return (t, n, i) => {
				let a = n.starts, o = n.stops;
				for (let n = 0; n < t.length; n++) {
					let s = a[n] + e - 1;
					i[n] = s < o[n] ? r(t[s]) : null;
				}
			};
		}
		case "prev_value": return (e, t, n) => {
			let i = null;
			for (let t = 0; t < e.length; t++) {
				let a = r(e[t]);
				a != null && (i = a), n[t] = i;
			}
		};
		case "next_value": return (e, t, n) => {
			let i = -1, a = null;
			for (let t = 0; t < e.length; t++) {
				if (t > i) {
					for (i = t; i < e.length && (a = r(e[i])) == null;) i += 1;
					i == e.length && (a = null);
				}
				n[t] = a;
			}
		};
	}
}
//#endregion
//#region ../core/src/data/transforms/window.js
var gg = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.buffer = [];
		let t = _g(e);
		this.frame = t.frame, this.ignorePeers = t.ignorePeers, this.comparator = t.comparator, this.groupAccessors = t.groupAccessors, this.partitionEvaluators = t.partitionEvaluators, this.outputFields = t.outputFields;
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	handle(e) {
		this.buffer.push(e);
	}
	beginBatch(e) {
		this.#e(), super.beginBatch(e);
	}
	complete() {
		this.#e(), super.complete();
	}
	#e() {
		if (this.buffer.length == 0) return;
		let e = this.buffer;
		this.buffer = [];
		for (let t of Eg(e, this.groupAccessors)) this.#t(t);
		for (let t of e) this._propagate(t);
	}
	#t(e) {
		let t = Cg(e, this.comparator), n = wg(t, this.comparator, this.frame, this.ignorePeers), r = this.outputFields.map(() => Array(t.length));
		for (let e of this.partitionEvaluators) e(t, n, r);
		bg(t, r, this.outputFields);
	}
};
function _g(e) {
	if (!Array.isArray(e.ops) || e.ops.length == 0) throw Error("The \"ops\" property must contain at least one operation.");
	xg("fields", e.fields, e.ops.length), xg("params", e.params, e.ops.length), xg("as", e.as, e.ops.length);
	let t = e.frame ?? [null, 0];
	if (!Array.isArray(t) || t.length != 2) throw Error("The \"frame\" property must contain exactly two offsets.");
	for (let e of t) if (e != null && (!Number.isInteger(e) || !Number.isFinite(e))) throw Error("Window frame offsets must be integers or null.");
	let n = (e.groupby ?? []).map((e) => b(e)), r = e.sort ? et(e.sort.field, e.sort.order) : void 0, i = [], a = [], o = /* @__PURE__ */ new Map(), s = [], c = [];
	for (let t = 0; t < e.ops.length; t++) {
		let n = vg(e, t);
		if (c.push(n.as), n.kind == "window") {
			let e = hg(n.op, n.accessor, n.parameter);
			i.push((n, r, i) => e(n, r, i[t]));
		} else if (n.op == "count") s.push({ resultIndex: t });
		else {
			let e = n.field, r = o.get(e);
			r || (r = {
				accessor: n.accessor,
				results: []
			}, o.set(e, r), a.push(r)), r.results.push({
				op: n.op,
				resultIndex: t
			});
		}
	}
	s.length && i.push(yg(s));
	for (let e of a) i.push(ug(e.accessor, e.results));
	return {
		frame: t,
		ignorePeers: e.ignorePeers ?? !1,
		comparator: r,
		groupAccessors: n,
		partitionEvaluators: i,
		outputFields: c
	};
}
function vg(e, t) {
	let n = e.ops[t], r = e.fields?.[t] ?? null, i = e.params?.[t], a = pg.has(n) ? "window" : sg.has(n) ? "aggregate" : null;
	if (!a) throw Error(`Unsupported window operation: ${n}`);
	if ((a == "window" ? !mg.has(n) : n != "count") && r == null) throw Error(`Window operation "${n}" requires a field.`);
	if (n == "ntile" || n == "nth_value") {
		if (!Number.isInteger(i) || i <= 0) throw Error(`Window operation "${n}" requires a positive integer parameter.`);
	} else if (i != null && !Number.isFinite(i)) throw Error(`Window operation "${n}" requires a numeric parameter.`);
	let o = e.as?.[t];
	if (o != null && (typeof o != "string" || o.length == 0)) throw Error("Window output field names must be non-empty strings.");
	return {
		op: n,
		kind: a,
		field: r,
		accessor: r == null ? void 0 : b(r),
		parameter: i,
		as: o ?? Sg(n, r)
	};
}
function yg(e) {
	let t = e.map(({ resultIndex: e }) => e);
	return (e, n, r) => {
		let i = t.map((e) => r[e]), a = n.starts, o = n.stops;
		for (let t = 0; t < e.length; t++) {
			let e = o[t] - a[t];
			for (let n of i) n[t] = e;
		}
	};
}
function bg(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		for (let e = 0; e < n.length; e++) i[n[e]] = t[e][r];
	}
}
function xg(e, t, n) {
	if (t && t.length != n) throw Error(`The "${e}" property must contain one entry for every window operation.`);
}
function Sg(e, t) {
	return t == null ? e : `${e}_${t}`;
}
function Cg(e, t) {
	return t ? e.slice().sort(t) : e;
}
function wg(e, t, n, r) {
	let i = e.length, a = Array(i), o = Array(i), s = Array(i), c = Array(i);
	if (t) {
		let n = 0;
		for (let r = 1; r <= i; r++) if (r == i || t(e[n], e[r]) != 0) {
			for (let e = n; e < r; e++) a[e] = n, o[e] = r;
			n = r;
		}
	} else for (let e = 0; e < i; e++) a[e] = e, o[e] = e + 1;
	for (let e = 0; e < i; e++) {
		let l = n[0] == null ? 0 : Tg(e + n[0], 0, i), u = n[1] == null ? i : Tg(e + n[1] + 1, 0, i);
		t && !r && (l > 0 && l < i && a[l] != l && (l = a[l]), u > 0 && u < i && (u = o[u - 1])), l > u && (u = l), s[e] = l, c[e] = u;
	}
	return {
		starts: s,
		stops: c,
		peerStarts: a,
		peerStops: o
	};
}
function Tg(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function Eg(e, t) {
	if (t.length == 0) return [e];
	let n = /* @__PURE__ */ new Map(), r = [];
	for (let i of e) {
		let e = n;
		for (let n = 0; n < t.length - 1; n++) {
			let r = t[n](i), a = e.get(r);
			a || (a = /* @__PURE__ */ new Map(), e.set(r, a)), e = a;
		}
		let a = t.at(-1)(i), o = e.get(a);
		o || (o = [], e.set(a, o), r.push(o)), o.push(i);
	}
	return r;
}
//#endregion
//#region ../core/src/data/transforms/transformFactory.js
var Dg = {
	aggregate: rg,
	alignmentMismatches: Sm,
	collect: xd,
	coverage: km,
	displace1d: jm,
	displace2d: uh,
	axisLabelLayout: Sh,
	filterScoredLabels: gh,
	filter: Nh,
	flatten: Ih,
	flattenCigar: Bh,
	flattenCompressedExons: zh,
	flattenDelimited: Vh,
	flattenSequence: tg,
	formula: Uh,
	identifier: E,
	linearizeGenomicCoordinate: Wh,
	measureText: Gh,
	packLegendLabels: qh,
	pileup: Yh,
	project: Xh,
	regexExtract: Zh,
	regexFold: Qh,
	sample: ru,
	setIntersection: $h,
	truncateText: og,
	window: gg,
	stack: eg
};
function Og(e, t, n) {
	if (e.type == "lookup") {
		let t = e;
		if (!n && !cm(t)) throw Error("Lookup transform requires a foreign collector.");
		return new sm(t, n?.collector);
	} else if (e.type == "coordinateLookup") {
		if (!n || !t) throw Error("Coordinate lookup requires a view and a foreign data source.");
		return new wm(e, n.collector, n.source, t);
	} else if (e.type == "cross") {
		if (!n) throw Error("Cross transform requires a foreign collector.");
		return new Em(e, n.collector);
	}
	let r = Dg[e.type];
	if (r) return new r(e, t);
	throw Error("Unknown transform: " + e.type);
}
//#endregion
//#region ../core/src/data/sources/urlSource.js
var kg = /* @__PURE__ */ new Set(["application/gzip", "application/x-gzip"]), Ag = new TextDecoder(), jg = class extends Yo {
	#e = 0;
	constructor(e, t) {
		super(t), this.params = ut(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), Qs(e.url)), this.baseUrl = t?.getBaseUrl();
	}
	get identifier() {
		return JSON.stringify({
			params: this.params,
			baseUrl: this.baseUrl
		});
	}
	get label() {
		return "urlSource";
	}
	async #t(e) {
		let t = In(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" }, r = await fetch(t);
		if (!r.ok) throw Error(`Cannot load "${t}": ${r.status} ${r.statusText}`);
		return Xa(await Rg(r, t, Vc(n.type)), Bc(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => In(t, e));
	}
	async load() {
		if (this.disposed) return;
		let e = ++this.#e, t = () => !this.disposed && e === this.#e;
		this.setLoadingStatus("loading"), this.reset();
		try {
			let e = c(this.params.url), n = typeof e == "object" && "urlsFromFile" in e ? (await this.#t(e)).map((e) => ({ url: e })) : await Zs({
				url: this.params.url,
				baseUrl: this.baseUrl,
				paramRuntime: this.paramRuntime
			});
			if (!t()) return;
			let r = n.map((e) => e.url);
			if (r.length > 0 && r[0]) {
				let e = zc(this.params, r), i = Vc(e.type), a = async (e) => {
					try {
						let t = await fetch(e);
						if (!t.ok) throw Error(`${t.status} ${t.statusText}`);
						return await Rg(t, e, i);
					} catch (t) {
						throw Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t });
					}
				}, o = async (n, r) => {
					try {
						let i = Xa(n, Bc(e)), a = i instanceof Promise ? await i : i;
						if (!t()) return;
						this.beginBatch({
							type: "file",
							url: r.url
						});
						let o = $s(r.fields);
						for (let e of a) this._propagate(o(e));
					} catch (e) {
						if (!t()) return;
						throw console.warn(e), Error(`Cannot parse: ${r.url}: ${e.message}`, { cause: e });
					}
				}, s = await Promise.all(n.map((e) => nc(e, async () => ({
					descriptor: e,
					content: await a(e.url)
				}))));
				if (!t()) return;
				await Promise.all(s.map((e) => e ? o(e.content, e.descriptor) : void 0));
			}
			if (!t()) return;
			this.setLoadingStatus("complete");
		} catch (e) {
			if (!t()) return;
			e instanceof Xs ? this.setLoadingStatus("complete") : this.setLoadingStatus("error", e.message);
		}
		this.complete();
	}
};
function Mg(e) {
	return "url" in e;
}
function Ng(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && (e[3] & 224) == 0;
}
function Pg(e) {
	return e ? kg.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function Fg(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function Ig(e) {
	return new Uint8Array(e).buffer;
}
async function Lg(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(Ig(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function Rg(e, t, n) {
	if (!(Uc(t) || Pg(e.headers.get("content-type")) || Fg(e.headers.get("content-encoding")))) return zg(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return Bg(Ng(r) ? await Lg(r) : r, n);
}
function zg(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function Bg(e, t) {
	return t == "arrayBuffer" ? Ig(e) : Ag.decode(e);
}
//#endregion
//#region ../core/src/data/sources/sequenceSource.js
function Vg(e) {
	return "sequence" in e;
}
var Hg = class extends Yo {
	constructor(e, t) {
		if (super(t), this.sequence = ut(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e)), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = c(this.sequence.as) ?? "data", t = c(this.sequence.start) ?? 0, n = c(this.sequence.step) ?? 1, r = c(this.sequence.stop);
		this.reset(), this.beginBatch({ type: "file" });
		for (let i = t; i < r; i += n) this._propagate({ [e]: i });
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/data/sources/dataSourceFactory.js
function Ug(e, t) {
	if (Fc(e)) return new Ic(e, t);
	if (Mg(e)) return new jg(e, t);
	if (Vg(e)) return new Hg(e, t);
	if (Wg(e)) return Jo(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function Wg(e) {
	return "lazy" in e;
}
//#endregion
//#region ../core/src/data/transforms/clone.js
var Gg = class extends z {
	get behavior() {
		return 1;
	}
	#e = rm();
	constructor() {
		super({ type: "clone" }), this.handle = (e) => this._propagate(this.#e(e)), this.beginBatch = (e) => {
			this.#e.reset(), super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/sources/namedSource.js
function Kg(e) {
	return "name" in e;
}
var qg = class extends Yo {
	constructor(e, t) {
		super(t), this.params = e, this.binding = t.namedDataScope.resolve(e.name);
	}
	get identifier() {
		return this.params.name;
	}
	get shareKey() {
		return this.binding;
	}
	get label() {
		return "namedSource";
	}
	updateDynamicData(e) {
		this.view.context.dataFlow.updateNamedDataBinding(this.binding, e);
	}
	loadSynchronously() {
		let e = this.binding.getData(), t = (e) => e;
		Array.isArray(e) && e.length > 0 && (t = Gc(e[0])), this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Jg = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new kl();
	}
	get dataSources() {
		return [...this.#e];
	}
	get collectors() {
		return [...this.#t];
	}
	replaceDataSources(e) {
		this.#e = new Set(e);
	}
	addDataSource(e) {
		this.#e.add(e);
	}
	removeDataSource(e) {
		e.disposeSubtree(), this.#e.delete(e);
	}
	addCollector(e) {
		this.#t.add(e);
	}
	removeCollector(e) {
		e.parent && e.parent.removeChild(e), e.disposeSubtree(), e.observers.clear(), this.#t.delete(e);
	}
	pruneCollectorBranch(e) {
		let t = e.parent;
		for (t && t.removeChild(e), e.disposeSubtree(); t && t.children.length === 0;) {
			let e = t;
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof Yo ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof qg && e === n.identifier) {
			if (t && t !== n) throw Error(`Named data "${e}" is ambiguous across scoped datasets. Use the dataset owner's ViewHandle.datasets.set() method.`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
	updateNamedDataBinding(e, t) {
		e.beginUpdate(), t === void 0 ? e.resetData() : e.setData(t);
		for (let t of this.#e.values()) t instanceof qg && t.binding === e && t.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/utils/trees.js
function Yg(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [];
	for (let t of e) n.set(t, {
		ref: t,
		children: []
	});
	for (let e of n.values()) {
		let i = n.get(t(e.ref));
		i ? i.children.push(e) : r.push(e);
	}
	return r;
}
function Xg(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = Xg(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function Zg(e, t) {
	return Xg(e, t, (e) => e.children);
}
//#endregion
//#region ../core/src/view/flowBuilder.js
function Qg(e, t, n, r) {
	let i = [], a = [], o, s = t ?? new Jg(), c = [], l = r ?? (() => !0);
	function u(e, t = () => void 0) {
		if (!o) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return o.addChild(e), o = e, i.push(e), e;
	}
	function d(e, t) {
		return u(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function f(e, t) {
		e.behavior & 2 && t(new Gg()), t(e);
	}
	function p(e, t) {
		for (let n of e) {
			let e, r;
			try {
				let i = mm(n);
				i && (r = m(i.data, i.transforms, t)), e = Og(n, t, r);
			} catch (e) {
				throw r && h(t, r.collector), console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			f(e, d), r && e.registerDisposer(() => h(t, r.collector));
		}
	}
	function m(e, t, n) {
		let r = Kg(e) ? new qg(e, n) : Ug(e, n), i = r;
		try {
			for (let e of t) {
				if (pm(e)) throw Error("Transforms with side inputs cannot be used in a side-input transform pipeline.");
				f(Og(e, n), (e) => {
					i.addChild(e), i = e;
				});
			}
		} catch (e) {
			throw r.disposeSubtree(), e;
		}
		let a = new xd({ type: "collect" });
		return i.addChild(a), s.addDataSource(r), s.addCollector(a), n.flowHandle ??= {}, n.flowHandle.auxiliaryCollectors ??= /* @__PURE__ */ new Set(), n.flowHandle.auxiliaryCollectors.add(a), {
			collector: a,
			source: r
		};
	}
	function h(e, t) {
		e.flowHandle?.auxiliaryCollectors?.delete(t), s.pruneCollectorBranch(t), s.removeCollector(t);
	}
	function g() {
		return i.findLastIndex((e) => e instanceof E) > i.findLastIndex((e) => e instanceof Yo);
	}
	let _ = (e) => {
		if (!l(e)) {
			let t = e.flowHandle?.node;
			if (t) {
				t !== o && (o = t, i.push(t));
				return;
			}
			if (e.spec.data || e.spec.transform || e instanceof J) throw Error("Cannot reuse missing flow nodes for " + e.getPathString());
			return;
		}
		if (e.spec.data) {
			let t = e.flowHandle?.dataSource;
			t && t.view === e && !t.shareKey && s.removeDataSource(t);
			let n = Kg(e.spec.data) ? new qg(e.spec.data, e) : Ug(e.spec.data, e);
			o = n, i.push(n), s.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
		}
		if (e.spec.transform && p(e.spec.transform, e), e instanceof J) {
			if (!o) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
			let t = e_(e);
			if (t) {
				c.push(t.rewrite);
				for (let e of t.transforms) d(e);
			}
			e.mark.isPickingParticipant() && !g() && (d(new Gg()), d(new E({ type: "identifier" })));
			let n = new xd({
				type: "collect",
				groupby: e.getFacetFields(),
				sort: t_(e, t?.rewrittenEncoding)
			});
			u(n);
			let r = e.flowHandle?.collector;
			r && s.removeCollector(r), s.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
		}
		o && (e.flowHandle ??= {}, e.flowHandle.node = o);
	}, v = Yg($g(e, n), (e) => e.dataParent);
	for (let e of v) Zg(e, {
		preOrder: (e) => {
			a.push({
				view: e.ref,
				nodeStackDepth: i.length
			}), _(e.ref);
		},
		postOrder: () => {
			let { nodeStackDepth: e } = a.pop();
			i.length = e, o = i.at(-1);
		}
	});
	return c.forEach((e) => e()), s;
}
function $g(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return zn;
		n.push(e);
	}), n;
}
function e_(e) {
	let t = [], n = {}, r = e.mark.encoding, i = e.getEncoding(), a = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		lt(n) !== n && !(n in i) || ce(n) && !Array.isArray(t) && qe(t) && a.push({
			channel: n,
			chromPosDef: t
		});
	}
	let o = _n(a, (e) => lt(e.channel), (e) => e.chromPosDef.chrom);
	for (let [a, s] of o.entries()) for (let [o, c] of s.entries()) {
		let s = [], l = [], u = [];
		for (let { channel: t, chromPosDef: a } of c) {
			let o = (e) => e.replace(/[^A-Za-z0-9_]/g, ""), c = [
				"_linearized_",
				o(a.chrom),
				"_",
				o(a.pos)
			].join(""), d = {
				...e.spec.encoding?.[t] ?? i[t] ?? r[t] ?? {},
				field: c
			};
			delete d.chrom, delete d.pos, !d.type && a.type && (d.type = a.type), n[t] = d, s.push(a.pos), u.push(a.offset ?? 0), l.push(c);
		}
		t.push(new Gg()), t.push(new Wh({
			type: "linearizeGenomicCoordinate",
			channel: a,
			chrom: o,
			pos: s,
			offset: u,
			as: l
		}, e));
	}
	return t.length ? {
		transforms: t,
		rewrittenEncoding: n,
		rewrite: () => {
			e.spec.encoding = {
				...e.spec.encoding,
				...n
			}, ar(e.mark, "encoding");
		}
	} : void 0;
}
function t_(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x, r = e.mark.encoding.x;
	if (Ne(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (bt(n)) return Ne(r) && "buildIndex" in r && r.buildIndex ? { field: n.field } : null;
		if (!Pe(n) && ft(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
function n_(e, ...t) {
	let n = e;
	for (let e of t) n.addChild(e), n = e;
	let r;
	n instanceof xd ? r = n : (r = new xd(), n.addChild(r));
	let i;
	return i = e instanceof Yo ? async () => (await e.load(), r.getData()) : async () => {
		throw Error("The root node is not derived from DataSource!");
	}, {
		dataSource: e,
		collector: r,
		loadAndCollect: i
	};
}
//#endregion
//#region ../core/src/data/flowOptimizer.js
function r_(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!r_(t, e)) return !1;
	return !0;
}
function i_(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof Gg) if (t) t = !1;
	else {
		let n = e.children[0];
		e.excise(), n && i_(n, t);
		return;
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) i_(e.children[n], t || r > 1);
}
function a_(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.shareKey && !n.has(e.shareKey) && n.set(e.shareKey, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.shareKey) {
		let t = n.get(e.shareKey);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function o_(e) {
	if (i_(e), !r_(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function s_(e) {
	let t = a_(e);
	for (let t of e.dataSources) o_(t);
	return t;
}
//#endregion
//#region ../core/src/data/flowInit.js
var c_ = /* @__PURE__ */ new WeakMap(), l_ = /* @__PURE__ */ new WeakMap();
function u_(e, t) {
	let n = c_.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = l_.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => u_(e)).finally(() => {
			l_.delete(e);
		});
		return l_.set(e, i), i;
	}
	let r = Promise.resolve().then(() => (e.activate(), e.load())).finally(() => {
		c_.delete(e);
	});
	return c_.set(e, r), r;
}
function d_(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r);
	}
}
function f_(e) {
	for (; e && !(e instanceof Yo);) e = e.parent;
	return e instanceof Yo ? e : void 0;
}
function p_(e, t, r, i) {
	let a = i ?? (() => !0), o = y_(e, r).filter(a);
	if (o.length === 0) return {
		dataFlow: t,
		unitViews: [],
		dataSources: /* @__PURE__ */ new Set()
	};
	let s = new Set(o);
	for (let e of o) e._setDataInitializationState("pending");
	let c;
	try {
		c = Qg(e, t, r, (e) => s.has(e)), d_(e, s_(c));
	} catch (e) {
		for (let e of o) e._setDataInitializationState("none");
		throw e;
	}
	let l = m_(o);
	for (let e of l) e.visit((e) => e.initializeOnce());
	let u = o.filter((e) => e instanceof J);
	for (let e of o) for (let [t, n] of e.paramRuntime.paramConfigs) "select" in n && e.paramRuntime.findSelectionCapability(t);
	for (let e of u) {
		let t = e.mark;
		t.initializeEncoders(), e.registerDisposer(e.flowHandle.collector.observe((n) => {
			t.initializeData(), e.context.animator.requestRender();
		}));
	}
	for (let e of o) e._setDataInitializationState("ready");
	let d = new Set(u.flatMap((e) => Object.values(e.mark.encoders).flatMap(at).filter(n).map((t) => e.getScaleResolution(t.scaleChannel))));
	for (let e of d) e.bindDomainInputs();
	return {
		dataFlow: c,
		unitViews: u,
		dataSources: l
	};
}
function m_(e, t) {
	let n = Array.isArray(e) ? e : y_(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource), __(e, r);
	}
	return r;
}
function h_(e, t) {
	let n = /* @__PURE__ */ new Set();
	return g_(e, n, t), e.visit((e) => {
		if (t && !t(e)) return zn;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), zn;
	}), n;
}
function g_(e, t, n) {
	for (let r of y_(e, n)) __(r, t);
}
function __(e, t) {
	for (let n of e.flowHandle?.auxiliaryCollectors ?? []) {
		let e = f_(n);
		e && t.add(e);
	}
}
function v_(e, t, n, r) {
	t ||= h_(e, n);
	let i = /* @__PURE__ */ new Set();
	g_(e, i, n);
	let a = Array.from(t).filter((e) => i.has(e)), o = Array.from(t).filter((e) => !i.has(e));
	return Promise.all(a.map((e) => u_(e, r))).then((e) => Promise.all(o.map((e) => u_(e, r))).then((t) => e.concat(t))).then((t) => (b_(e), t));
}
function y_(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return zn;
		n.push(e);
	}), n) : e.getDescendants();
}
function b_(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region ../core/src/genomeSpy/viewDataInit.js
async function x_(e, t, n, r) {
	let i = (e) => e.isConfiguredVisible(), { dataFlow: a } = p_(e, t, i);
	return r(a), await n.waitUntilReady(), e.invalidateSizeCache(), await v_(e, new Set(a.dataSources), i), a;
}
async function S_(e, t, n) {
	return C_(e, t, n, w_(e, (e) => e.isConfiguredVisible()).filter((e) => e.getDataInitializationState() === "none"));
}
async function C_(e, t, n, r) {
	let i = new Set(r), a = (e) => e.isConfiguredVisible(), o = w_(e, a).filter((e) => i.has(e) && e.getDataInitializationState() === "none");
	if (o.length === 0) return t;
	let s = new Set(o), c = (e) => s.has(e), l = /* @__PURE__ */ new Set(), u = [];
	for (let e of o) {
		if (e.spec.data || e.spec.transform?.some(pm)) {
			u.push(e);
			continue;
		}
		let t = E_(e);
		t ? l.add(t) : u.push(e);
	}
	let { dataFlow: d } = p_(e, t, a, c);
	await n.waitUntilReady(), e.invalidateSizeCache();
	for (let e of l) e.repropagate();
	if (u.length) {
		let e = T_(u);
		await Promise.all(Array.from(e.entries()).map(([e, t]) => v_(e, t, void 0, { queueReload: !0 })));
	}
	return b_(e), d;
}
function w_(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return zn;
		n.push(e);
	}), n;
}
function T_(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n;
		for (; e && !e.flowHandle?.dataSource;) e = e.dataParent;
		if (!e?.flowHandle?.dataSource) {
			if (n.spec.data) throw Error("No data source found for view " + n.getPathString());
			continue;
		}
		let r = t.get(e);
		r || (r = /* @__PURE__ */ new Set(), t.set(e, r)), r.add(e.flowHandle.dataSource);
		for (let e of n.flowHandle?.auxiliaryCollectors ?? []) {
			let t = f_(e);
			t && r.add(t);
		}
	}
	return t;
}
function E_(e) {
	let t = e.dataParent;
	for (; t;) {
		let e = t.flowHandle?.collector;
		if (e) return e.completed ? e : void 0;
		t = t.dataParent;
	}
}
//#endregion
//#region ../core/src/genome/genomeStore.js
var D_ = class {
	constructor(e) {
		this.genomes = /* @__PURE__ */ new Map(), this.#e = /* @__PURE__ */ new Map(), this.#t = /* @__PURE__ */ new Map(), this.#n = /* @__PURE__ */ new Map(), this.#r = 0, this.#i = void 0, this.baseUrl = e;
	}
	#e;
	#t;
	#n;
	#r;
	#i;
	async initialize(e) {
		let { name: t, ...n } = e;
		this.configureGenomes(/* @__PURE__ */ new Map([[t, n]]), t), await this.ensureAssembly(t);
	}
	configureGenomes(e, t) {
		this.genomes.clear(), this.#t.clear(), this.#n.clear(), this.#r = 0, this.#e = new Map(e), this.#i = t;
	}
	getDefaultAssemblyName() {
		if (this.#i) return this.#i;
		if (this.#e.size === 1) return this.#e.keys().next().value;
		if (this.#e.size === 0 && this.genomes.size === 1) return this.genomes.keys().next().value;
	}
	async ensureAssemblies(e) {
		let t = [], n = /* @__PURE__ */ new Set();
		for (let r of e) {
			if (!r) continue;
			let e = O_(r);
			n.has(e) || (n.add(e), t.push(this.ensureAssembly(r)));
		}
		await Promise.all(t);
	}
	async ensureAssembly(e) {
		if (typeof e == "object") return this.#d(e);
		let t = this.genomes.get(e);
		if (t) return t;
		let n = this.#e.get(e);
		if (n) return this.#u(e, n);
		let r = this.#s(e);
		if (r) return r;
		throw this.#o(e);
	}
	getGenome(e) {
		if (e && typeof e == "object") return this.#f(e);
		if (typeof e == "string") {
			let t = this.genomes.get(e);
			if (t) return t;
			if (this.#e.has(e)) throw Error(`Genome ${e} has not been loaded yet. Call ensureAssembly("${e}") before accessing it.`);
			let n = this.#s(e);
			if (n) return n;
			throw this.#o(e);
		}
		let t = this.getDefaultAssemblyName();
		if (t) return this.getGenome(t);
		if (this.#e.size > 1) throw Error("Cannot pick a default genome! More than one have been configured!");
		if (this.genomes.size === 0 && this.#e.size) throw Error("Default genome is not loaded. Define root `assembly` or call ensureAssembly() first.");
		if (this.genomes.size > 1) throw Error("Cannot pick a default genome! More than one have been configured!");
		if (this.genomes.size === 0) throw Error("No genomes have been configured!");
		return this.genomes.values().next().value;
	}
	#a(e) {
		try {
			return new Zd({ name: e });
		} catch {
			return;
		}
	}
	#o(e) {
		return /* @__PURE__ */ Error(`No genome with the name ${e} has been configured!`);
	}
	#s(e) {
		let t = this.#a(e);
		if (t) return this.genomes.set(e, t), t;
	}
	async #c(e, t) {
		let n = this.#t.get(e);
		if (!n) throw Error(`No pending genome load for ${e}.`);
		await n;
		let r = this.genomes.get(e);
		if (!r) throw Error(t);
		return r;
	}
	async #l(e, t) {
		let n = t.load(this.baseUrl);
		this.#t.set(e, n);
		try {
			await n;
		} catch (t) {
			throw this.genomes.delete(e), t;
		} finally {
			this.#t.delete(e);
		}
		return t;
	}
	async #u(e, t) {
		let n = this.genomes.get(e);
		if (n) return this.#t.has(e) ? this.#c(e, `Loading genome ${e} failed before it became available.`) : n;
		if (this.#t.has(e)) return this.#c(e, `Loading genome ${e} failed before it became available.`);
		let r = new Zd({
			name: e,
			...t
		});
		return this.genomes.set(e, r), "url" in t ? this.#l(e, r) : r;
	}
	async #d(e) {
		this.#p(e);
		let t = this.#m(e), n = this.genomes.get(t);
		if (n) return this.#t.has(t) ? this.#c(t, `Loading inline assembly ${t} failed before it became available.`) : n;
		if (this.#t.has(t)) return this.#c(t, `Loading inline assembly ${t} failed before it became available.`);
		if ("contigs" in e) {
			let n = new Zd({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new Zd({
			name: t,
			url: e.url
		});
		return this.genomes.set(t, r), this.#l(t, r);
	}
	#f(e) {
		this.#p(e);
		let t = this.#m(e), n = this.genomes.get(t);
		if (n) {
			if (this.#t.has(t)) throw Error(`Inline URL assembly ${t} has not been loaded yet. Call ensureAssembly() before accessing it.`);
			return n;
		}
		if ("url" in e) throw Error("Inline URL assemblies must be loaded first. Call ensureAssembly() before accessing it.");
		let r = new Zd({
			name: t,
			contigs: e.contigs
		});
		return this.genomes.set(t, r), r;
	}
	#p(e) {
		if ("contigs" in e == "url" in e) throw Error("Inline `scale.assembly` objects must define exactly one of `contigs` or `url`.");
	}
	#m(e) {
		let t = JSON.stringify(e), n = this.#n.get(t);
		if (n) return n;
		let r = `inline_assembly_${this.#r}`;
		for (this.#r += 1; this.genomes.has(r) || this.#e.has(r) || this.#t.has(r);) r = `inline_assembly_${this.#r}`, this.#r += 1;
		return this.#n.set(t, r), r;
	}
};
function O_(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
//#endregion
//#region ../core/src/tooltip/refseqGeneTooltipHandler.js
var k_ = /* @__PURE__ */ new Map(), A_ = { Organism: "Homo sapiens" };
async function j_(e, t, n = {}) {
	let r = e.symbol, i = {
		...A_,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = k_.get(r) ?? await P_(i);
	return a ? (k_.set(r, a), G`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function M_(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: F_(e),
		sort: "relevance",
		retmax: "1",
		retmode: "json"
	}).toString();
	let r = (await fetch(n.toString(), t).then((e) => e.json())).esearchresult.idlist[0];
	if (r) {
		let e = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi");
		return e.search = new URLSearchParams({
			db: "gene",
			id: r,
			retmode: "json"
		}).toString(), (await fetch(e.toString(), t).then((e) => e.json())).result[r];
	} else return null;
}
var N_ = hc(M_, 500);
function P_(e) {
	return N_(e);
}
function F_(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region ../core/src/utils/formatObject.js
var I_ = F(".4~r"), L_ = F(".4~e");
function R_(e) {
	return e == null ? G` <span class="na">NA</span> ` : Ae(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : ie(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? L_(e) : I_(e) : ve(e) ? e ? "True" : "False" : be(e) ? G`${e.map((t, n) => [R_(t), n < e.length - 1 ? ", " : K])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region ../core/src/tooltip/flattenDatumRows.js
function z_(e) {
	let t = [];
	return B_(Object.entries(e), t), t;
}
function B_(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? B_(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region ../core/src/tooltip/configuredTooltipRows.js
var V_ = /* @__PURE__ */ new WeakMap();
function H_(e, t) {
	let n = t.encoding.tooltip;
	if (n === void 0) return;
	if (n === null) return [];
	let r = Array.isArray(n) ? n : [n];
	if (r.length === 0) throw Error("The tooltip channel array must not be empty.");
	return r.map((n) => U_(e, t, n));
}
function U_(e, t, n) {
	let r = W_(t, n), i = r(e), a = "format" in n && n.format && typeof i == "number" && Number.isFinite(i) ? F(n.format)(i) : i;
	return {
		key: G_(n),
		value: a,
		...r.sourceField ? { sourceField: r.sourceField } : {},
		...a === i ? {} : { formatted: !0 }
	};
}
function W_(e, t) {
	let n = V_.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), V_.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = N("tooltip", t, e.unitView.paramRuntime);
	return "field" in t && (i.sourceField = t.field), n.set(t, i), i;
}
function G_(e) {
	if ("title" in e && e.title !== void 0) return e.title === null ? "" : e.title;
	if ("field" in e) return e.field;
	if ("expr" in e) return e.expr;
	if ("datum" in e) return "datum";
	if ("value" in e) return "value";
	throw Error("Invalid tooltip channel definition: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/tooltip/tooltipContext.js
var K_ = {
	x: "x2",
	y: "y2"
}, q_ = /* @__PURE__ */ new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), J_ = /* @__PURE__ */ new WeakMap();
function Y_(e, t, n) {
	let r = X_(t), i = Q_("x", e, t, r, uv(n, "x")), a = Q_("y", e, t, r, uv(n, "y")), o = i.rows.length > 0 && a.rows.length > 0, s = [...o ? Z_("x", i.rows) : i.rows, ...o ? Z_("y", a.rows) : a.rows], c = /* @__PURE__ */ new Set();
	for (let n of [i, a]) for (let i of n.usedLinearizedFields) {
		let n = r.get(i);
		!n || n.ambiguous || dv(e, i, n, t) && (c.add(n.chrom), c.add(n.pos));
	}
	return {
		tooltipRows: H_(e, t),
		hiddenRowKeys: [...c],
		genomicRows: s,
		flattenDatumRows: () => z_(e),
		formatGenomicLocus: (e, n) => sv(t, e, n),
		formatGenomicInterval: (e, n) => cv(t, e, n)
	};
}
function X_(e) {
	let t = J_.get(e);
	if (t) return t;
	let n = av(e);
	return J_.set(e, n), n;
}
function Z_(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function Q_(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = iv(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = iv(n, K_[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? $_(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = tv(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: sv(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: sv(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: cv(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: sv(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function $_(e, t, n) {
	if (!t || e.value === t.value) return "locus";
	let r = ev(e.field, n), i = ev(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function ev(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function tv(e, t, n) {
	let r = nv(e.field, n), i = nv(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function nv(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = rv(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function rv(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function iv(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = De(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function av(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = R(e.as), i = R(e.pos), a = ov(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
			for (let n = 0; n < r.length; n++) {
				if (n >= i.length) continue;
				let c = t.get(r[n]);
				c ? c.ambiguous = !0 : t.set(r[n], {
					groupId: o,
					chrom: e.chrom,
					pos: i[n],
					offset: a[n],
					channel: s,
					ambiguous: !1
				});
			}
		}
		r = r.parent;
	}
	return t;
}
function ov(e, t) {
	let n = R(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function sv(e, t, n) {
	return lv(e, t)?.formatLocus(n);
}
function cv(e, t, n) {
	return lv(e, t)?.formatInterval(n);
}
function lv(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function uv(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!q_.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function dv(e, t, n, r) {
	let i = lv(r, n.channel);
	if (!i) return !1;
	let a = e[n.chrom], o = e[n.pos], s = e[t];
	if (a === void 0 || o === void 0 || s === void 0) return !1;
	let c = +o, l = +s;
	if (!Number.isFinite(c) || !Number.isFinite(l)) return !1;
	let u;
	try {
		u = i.toContinuous(a, c - n.offset);
	} catch {
		return !1;
	}
	return Math.abs(u - l) < 1e-6;
}
//#endregion
//#region ../core/src/tooltip/dataTooltipHandler.js
async function fv(e, t, n, r) {
	let i = (e) => it(e).join("."), a = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), o = (e, n, r) => {
		for (let [o, s] of Object.entries(t.encoders)) {
			let t = s ? De(s)?.fields : void 0;
			if (t && t.some((t) => t === e || i(t) === e)) switch (o) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? a(n) ? G`
                                <span
                                    class="color-legend color-legend-unmapped"
                                ></span>
                            ` : "" : G`
                                <span
                                    class="color-legend"
                                    style=${"background-color: " + String(e)}
                                ></span>
                            `;
				}
				default:
			}
		}
		return "";
	}, s = r ?? Y_(e, t, n), c = s.tooltipRows ? s.tooltipRows : s.flattenDatumRows ? s.flattenDatumRows() : z_(e), l = s.genomicRows ?? [], u = new Set(s.hiddenRowKeys ?? []), d = c.filter((t) => !u.has(t.key) || o(t.sourceField ?? t.key, t.value, e)), f = [...l, ...d];
	if (!f.length) return;
	let p = G`
        <table class="attributes">
            ${f.map((t) => {
		let n = t.formatted ? t.value : R_(t.value), r = o(t.sourceField ?? t.key, t.value, e);
		return G`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, m = t.unitView.getTitleText();
	return G`${m ? G`
              <div class="title">
                  <strong>${m}</strong>
              </div>
          ` : ""}${p}`;
}
//#endregion
//#region ../core/src/genome/assemblyPreflight.js
function pv(e) {
	let t = [], n = !1, r = hv(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function mv(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = pv(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function hv(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), Gn(e, r), t;
}
//#endregion
//#region ../core/src/scales/viewLevelScaleProps.js
function gv(e) {
	let t = [];
	for (let n of e.getDescendants()) {
		let e = n.spec.scales;
		if (e) for (let [r, i] of Object.entries(e)) t.push(yv(n, r, i));
	}
	return t;
}
function _v(e) {
	vv(e);
	for (let t of gv(e)) {
		let { view: e, channel: n, props: r } = t;
		if (t.resolution ??= yv(e, n, r).resolution, !t.resolution && r.type && r.type !== "null") {
			let t = new up(n, e);
			t.type = r.type === "locus" || r.type === "index" ? r.type : V(r.type) ? "nominal" : "quantitative", e.resolutions.scale[n] = t;
		}
	}
	let t = gv(e);
	for (let e of t) e.resolution && e.resolution.attachViewLevelScaleProps(e.view, e.props);
	return t;
}
function vv(e) {
	let t = new Set(e.getDescendants()), n = xv(e);
	for (let e of n) {
		let n = e.getViewLevelScaleProps();
		n && t.has(n.view) && !e.isExplicitlyOwned() && e.clearViewLevelScaleProps(n.view);
	}
}
function yv(e, t, n) {
	let r = bv(e, t);
	if (r.size > 1) throw Error(`View-level scales.${t} maps to multiple scale resolutions. Move scales.${t} closer to the intended subtree or configure scale resolution explicitly.`);
	return {
		view: e,
		channel: t,
		props: n,
		resolution: r.values().next().value
	};
}
function bv(e, t) {
	let n = /* @__PURE__ */ new Set();
	return Wn(e, (r) => {
		if (r !== e && r.getConfiguredOrDefaultResolution(t, "scale") === "excluded") return zn;
		let i = r.getScaleResolution(t);
		i && n.add(i);
	}), n;
}
function xv(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getDescendants()) for (let e of Object.values(n.resolutions.scale)) t.add(e);
	return t;
}
//#endregion
//#region ../core/src/scales/viewLevelGuideProps.js
var Sv = {
	declarationKey: "axes",
	resolutionType: "axis",
	getResolution: (e, t) => e.getAxisResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.axis),
	attach: (e, t, n) => e.attachViewLevelAxisProps(t, n),
	getAttachedProps: (e) => e.getViewLevelAxisProps(),
	clear: (e, t) => e.clearViewLevelAxisProps(t)
}, Cv = {
	declarationKey: "legends",
	resolutionType: "legend",
	getResolution: (e, t) => e.getLegendResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.legend),
	attach: (e, t, n) => e.attachViewLevelLegendProps(t, n),
	getAttachedProps: (e) => e.getViewLevelLegendProps(),
	clear: (e, t) => e.clearViewLevelLegendProps(t)
};
function wv(e) {
	return Wn(e, (e) => {
		for (let t of Object.keys(e.spec.axes ?? {})) {
			let n = e.getScaleResolution(t);
			n && Up(Ip(e, "axis", t), t, n);
		}
	}), Dv(e, Sv);
}
function Tv(e) {
	return Dv(e, Cv);
}
function Ev(e) {
	jv(e, Sv), jv(e, Cv);
}
function Dv(e, t) {
	jv(e, t);
	let n = Ov(e, t);
	for (let e of n) e.resolution && t.attach(e.resolution, e.view, e.props);
	return n;
}
function Ov(e, t) {
	let n = [];
	for (let r of e.getDescendants()) {
		let e = r.spec[t.declarationKey];
		if (e) for (let [i, a] of Object.entries(e)) n.push(kv(r, t, i, a));
	}
	return n;
}
function kv(e, t, n, r) {
	let i = Av(e, t, n);
	if (i.size > 1) throw Error(`View-level ${t.declarationKey}.${n} maps to multiple ${t.resolutionType} resolutions. Move ${t.declarationKey}.${n} closer to the intended subtree or configure ${t.resolutionType} resolution explicitly.`);
	return {
		view: e,
		channel: n,
		props: r,
		resolution: i.values().next().value
	};
}
function Av(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	return Wn(e, (i) => {
		if (i !== e && i.getConfiguredOrDefaultResolution(n, t.resolutionType) === "excluded") return zn;
		let a = t.getResolution(i, n);
		a && r.add(a);
	}), r;
}
function jv(e, t) {
	let n = new Set(e.getDescendants()), r = Mv(e, t);
	for (let e of r) {
		let r = t.getAttachedProps(e);
		r && n.has(r.view) && t.clear(e, r.view);
	}
}
function Mv(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e.getDescendants()) for (let e of t.getAllResolutions(r)) n.add(e);
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/viewHierarchyConfig.js
function Nv(e) {
	Zp(e), Qp(e);
}
function Pv(e) {
	Fv(e.getDescendants());
}
function Fv(e) {
	e = Array.from(e);
	for (let t of e) for (let e of Object.values(t.resolutions.scale)) e.initializeScale();
	for (let t of e) t.configurePostScaleParams(), t.configureViewOpacity(), t.finalizeParamRuntimeInitialization();
}
//#endregion
//#region ../core/src/view/containerMutationHelper.js
function Iv(e) {
	return typeof e == "object" && !!e && typeof e.getChildren == "function";
}
var Lv = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n, insertAt: r, removeAt: i } = this.options.getChildSpecs(), a = t ?? n.length, o = this.options.defaultName?.(a, e) ?? this.container.getNextAutoName("child"), s = !1, c = !1, l = await this.container.context.createOrImportView(e, this.container, this.container, o, void 0, this.options.createViewOptions);
		try {
			r(a, e), s = !0;
			let t = this.options.insertView(l, a);
			c = !0, _v(this.container), wv(this.container), Tv(this.container), await mv(l, this.container.context.genomeStore), this.options.prepareView && await this.options.prepareView(l, a, t);
			let n = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(l, a, t) : void 0, i = Rv(this.container, l, t, n);
			Fv(i), await C_(this.container, this.container.context.dataFlow, this.container.context.textMetrics, i);
		} catch (e) {
			throw c ? await this.#e(a, e) : s && i(a), e;
		}
		return this.options.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow()), l;
	}
	async #e(e, t) {
		try {
			await this.removeChildAt(e, { requestLayout: !1 });
		} catch (e) {
			t.rollbackError = e;
		}
	}
	async removeChildAt(e, t = {}) {
		let { removeAt: n } = this.options.getChildSpecs();
		vv(this.container), Ev(this.container), this.options.removeView(e), n(e), this.options.afterRemove && await this.options.afterRemove(e), _v(this.container), wv(this.container), Tv(this.container);
		let r = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(void 0, void 0, void 0) : void 0;
		await this.initializeUninitializedChromeViews(r), this.options.requestLayout !== !1 && t.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
	}
	async initializeUninitializedChromeViews(e = [this.container]) {
		if (this.container.getDataInitializationState() === "none") return;
		let t = /* @__PURE__ */ new Set();
		for (let n of e) zv(n, t);
		Fv(t), await C_(this.container, this.container.context.dataFlow, this.container.context.textMetrics, t);
	}
};
function Rv(e, t, n, r) {
	let i = Bv(t, n);
	for (let t of r ?? [e]) zv(t, i);
	return i;
}
function zv(e, t = /* @__PURE__ */ new Set()) {
	for (let n of e.getDescendants()) if (tr(n) && n.getDataInitializationState() === "none") for (let e of n.getDescendants()) e.getDataInitializationState() === "none" && t.add(e);
	return t;
}
function Bv(e, t) {
	return Iv(t) ? new Set(Array.from(t.getChildren()).flatMap((e) => e.getDescendants())) : new Set(e.getDescendants());
}
//#endregion
//#region ../core/src/view/multiscale.js
var Vv = .5;
function Hv(e) {
	return "multiscale" in e && be(e.multiscale);
}
function Uv(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = Wv(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => {
		if (e.multiscale.length === 1) return n;
		let i = {
			...Kv(r, e.multiscale.length, t),
			layer: [n]
		};
		return t.transition && Vn(i, [{
			name: "multiscaleOpacity",
			expr: qv(r, e.multiscale.length, t),
			transition: t.transition
		}]), i;
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function Wv(t, n) {
	let r = "unitsPerPixel", i, a = "auto", o = Vv, s;
	if (be(t)) i = Gv(t, n, "stops");
	else if (e(t)) r = t.metric ?? "unitsPerPixel", i = Gv(t.values, n, "stops.values"), a = t.channel ?? "auto", s = t.transition, o = s ? Vv : t.fade ?? Vv;
	else throw Error("\"stops\" must be an array or an object with \"values\".");
	if (r !== "unitsPerPixel") throw Error("Only \"unitsPerPixel\" is supported for \"stops.metric\" in multiscale.");
	if (![
		"x",
		"y",
		"auto"
	].includes(a)) throw Error("\"stops.channel\" must be one of \"x\", \"y\", or \"auto\".");
	if (!s && (!Number.isFinite(o) || o < 0 || o > .5)) throw Error("\"stops.fade\" must be a finite number in range [0, 0.5].");
	if (s && a === "auto") throw Error("Transitioned multiscale stops require \"stops.channel\" to be \"x\" or \"y\".");
	if (i.forEach((e, t) => {
		if (!I(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !i.some(I)) {
		let e = i;
		for (let t = 1; t < e.length; t++) if (e[t - 1] <= e[t]) throw Error("\"stops.values\" must be strictly decreasing for \"unitsPerPixel\".");
		if (!s) {
			for (let t = 0; t < e.length - 1; t++) if (e[t] * (1 - o) <= e[t + 1] * (1 + o)) throw Error("Adjacent transitions overlap. Reduce fade or increase stop spacing.");
		}
	}
	return {
		metric: r,
		values: i,
		channel: a,
		fade: o,
		transition: s
	};
}
function Gv(e, t, n) {
	if (!be(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!I(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function Kv(e, t, n) {
	return n.transition ? { opacity: { expr: "multiscaleOpacity" } } : { opacity: Yv(e, t, n) };
}
function qv(e, t, n) {
	let r = n.channel === "x" ? "width" : "height", i = `abs(span(domain('${n.channel}'))) / max(${r}, 1)`;
	return e === 0 ? i + " >= " + Jv(n.values[0]) + " ? 1 : 0" : e === t - 1 ? i + " < " + Jv(n.values.at(-1)) + " ? 1 : 0" : i + " < " + Jv(n.values[e - 1]) + " && " + i + " >= " + Jv(n.values[e]) + " ? 1 : 0";
}
function Jv(e) {
	return I(e) ? "(" + e.expr + ")" : String(e);
}
function Yv(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: Xv(e, 1 + n.fade),
		lo: Xv(e, 1 - n.fade)
	}));
	if (e === 0) r = [a[0].hi, a[0].lo];
	else if (e === t - 1) {
		let e = a.at(-1);
		r = [e.hi, e.lo];
	} else {
		let t = a[e - 1], n = a[e];
		r = [
			t.hi,
			t.lo,
			n.hi,
			n.lo
		];
	}
	return i = e === 0 ? [1, 0] : e === t - 1 ? [0, 1] : [
		0,
		1,
		1,
		0
	], {
		channel: n.channel,
		unitsPerPixel: r,
		values: i
	};
}
function Xv(e, t) {
	return I(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region ../core/src/view/viewSpecGuards.js
function Zv(t) {
	return "mark" in t && (Ae(t.mark) || e(t.mark));
}
function Qv(t) {
	return "layer" in t && e(t.layer);
}
function $v(e) {
	return "import" in e;
}
function ey(e) {
	return "vconcat" in e && be(e.vconcat);
}
function ty(e) {
	return "hconcat" in e && be(e.hconcat);
}
function ny(e) {
	return "concat" in e && be(e.concat);
}
//#endregion
//#region ../core/src/view/layerView.js
var X = class extends mr {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e, this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		this.#e = await Promise.all(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!Qv(e) && !Zv(e) && !Hv(e)) throw new sr("LayerView accepts only unit, layer, or multiscale specs as children!", this);
		}, {
			inheritEncoding: !0,
			layoutSizeParams: "inherit"
		})));
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	moveChildAt(e, t) {
		Ke(this.spec.layer, e, t), Ke(this.#e, e, t), this.context.requestLayoutReflow();
	}
	#t() {
		return new Lv(this, {
			getChildSpecs: () => ({
				specs: this.spec.layer,
				insertAt: (e, t) => {
					this.spec.layer.splice(e, 0, t);
				},
				removeAt: (e) => {
					this.spec.layer.splice(e, 1);
				}
			}),
			insertView: (e, t) => (e.layoutParent ??= this, this.#e.splice(t, 0, e), e),
			removeView: (e) => {
				let t = this.#e[e];
				if (!t) throw Error("Child index out of range!");
				t.disposeSubtree(), this.#e.splice(e, 1);
			},
			defaultName: () => this.getNextAutoName("layer"),
			createViewOptions: {
				inheritEncoding: !0,
				layoutSizeParams: "inherit"
			}
		});
	}
	get children() {
		return this.#e.slice();
	}
	#n() {
		return this.#e.toSorted((e, t) => e.getZindex() - t.getZindex());
	}
	*[Symbol.iterator]() {
		for (let e of this.#e) yield e;
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#n()) r.arrange(e, t, n);
			e.popView(this);
		}
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0);
		let t = this.#n();
		for (let n = t.length - 1; n >= 0; n--) if (t[n].propagateInteraction(e), e.stopped) return;
		this.handleInteraction(e, !1);
	}
}, ry = class {
	constructor(e, t) {
		this.n = e, this.maxCols = t ?? Infinity;
	}
	get nRows() {
		return this.maxCols == Infinity ? 1 : Math.ceil(this.n / this.maxCols);
	}
	get nCols() {
		return Math.min(this.n, this.maxCols);
	}
	get rowIndices() {
		let e = [], t = this.nCols, n = this.nRows;
		for (let r = 0; r < n; r++) {
			let n = [];
			e.push(n);
			for (let e = 0; e < t; e++) {
				let i = r * t + e;
				i < this.n && n.push(i);
			}
		}
		return e;
	}
	get colIndices() {
		let e = [], t = this.nCols, n = this.nRows;
		for (let r = 0; r < t; r++) {
			let i = [];
			e.push(i);
			for (let e = 0; e < n; e++) {
				let n = e * t + r;
				n < this.n && i.push(n);
			}
		}
		return e;
	}
	getCellIndex(e, t) {
		let n;
		if (this.maxCols == Infinity) n = t == 0 ? e : void 0;
		else if (e >= this.maxCols) return;
		else n = t * this.nCols + e;
		return n < this.n ? n : void 0;
	}
	getCellCoords(e) {
		if (!(e < 0 || e >= this.n)) return [e % this.nCols, Math.floor(e / this.nCols)];
	}
}, iy = {
	x: "axisX",
	y: "axisY"
}, ay = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, oy = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function sy(e, { channel: t, orient: n, type: r, style: i }) {
	let a = hp();
	for (let [o, s] of e.entries()) {
		let c = iy[t], l = n ? ay[n] : void 0, u = r ? oy[r] : void 0, d = e.slice(0, o + 1), f = [
			s.axis,
			c ? s[c] : void 0,
			l ? s[l] : void 0,
			u ? s[u] : void 0
		];
		for (let e of f) a.appendConfig(d, e);
		a.appendStyle(d, i);
	}
	return a.merge();
}
//#endregion
//#region ../core/src/view/axisView.js
var cy = "chromosome_ticks_and_labels", ly = "labels_main", uy = "ticks_and_labels", dy = "axisExtent", fy = "labelWidth", py = "labelVisible", my = "labelOffset", hy = "chromLabelWidth", gy = 4, _y = 5, vy = 10, yy = 2;
function by(e) {
	return e == "x" ? "y" : "x";
}
var xy = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, Sy = {
	bottom: "x",
	top: "x",
	left: "y",
	right: "y"
};
function Cy(e) {
	return Sy[e];
}
function wy(e) {
	switch (e) {
		case "left": return "right";
		case "right": return "left";
		case "top": return "bottom";
		case "bottom": return "top";
		default: throw Error("Invalid axis orient: " + e);
	}
}
function Ty(e) {
	let t = e.placement === "inside" ? wy(e.orient) : e.orient;
	return {
		tickSide: t,
		anchor: +(t == "bottom" || t == "left"),
		offsetDirection: t == "bottom" || t == "right" ? 1 : -1
	};
}
function Ey(e) {
	return !e || e.axisProps.placement === "inside" ? 0 : Math.max(e.getPerpendicularSize() + (e.axisProps.offset ?? 0), 0);
}
var Dy = class extends X {
	#e;
	#t;
	#n;
	#r = !1;
	#i = !1;
	constructor(e, t, n, r, i, a) {
		let o = Cy(e.orient), s = i.getScaleResolution(o), c = s.isZoomable(), l = s.hasConfiguredZoomExtent(), u = sy(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), d = Rl(i.getConfigScopes(), "text", void 0), f = {
			...u,
			...e
		}, p = t == "locus", m = {
			...u,
			...Fy(t, f),
			...e,
			...p ? Py(f) : {}
		};
		super(p ? Vy(m, t, d, c, l) : By(m, t, c, l, a?.labelClipPolicy ?? "pixel", d), n, r, i, `axis_${e.orient}`, a), this.labelClipPolicy = a?.labelClipPolicy ?? "pixel", this.axisProps = m, this.#e = ky(m), this.#t = this.paramRuntime.allocateSetter(dy, this.#e), U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof J && e.name === ly);
		e instanceof J && (this.#n = e), !(!this.axisProps.labels || !this.#n) && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#o()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return Sy[this.axisProps.orient] == "x" ? new xn(t, e) : new xn(e, t);
	}
	getPerpendicularSize() {
		return this.#e;
	}
	isPickingSupported() {
		return !1;
	}
	#a() {
		this.#i || (this.#i = !0, queueMicrotask(() => {
			this.#i = !1, this.#s();
		}));
	}
	#o() {
		if (this.#r) return;
		let e = this.#n?.getCollector();
		e && (this.#r = !0, this.registerDisposer(e.observe(() => this.#a())), e.completed && this.#a());
	}
	#s() {
		let e = Cy(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !Oy(t.getScale())) return;
		let n = Ny(this.axisProps, this.#n);
		if (n === void 0) return;
		let r = ky(this.axisProps, n);
		r >= this.#e + yy && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function Oy(e) {
	let t = e.domain();
	return B(e.type) ? t.length >= 2 && t.every((e) => Number.isFinite(Number(e))) && t.some((e) => Number(e) !== Number(t[0])) : t.length > 0;
}
function ky(e, t) {
	let n = Ay(e);
	return e.labels && (n += t ?? jy(e)), My(e, n);
}
function Ay(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function jy(e) {
	return Cy(e.orient) == "x" ? e.labelFontSize : vy;
}
function My(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function Ny(e, t) {
	let n = t?.getCollector();
	if (!n?.completed) return;
	let r = 0;
	n.visitData((e) => {
		r = Math.max(r, Number(e[fy]) || 0);
	});
	let i = t.mark, a = i.fontMeasurement.getHeight(Number(i.properties.size)), o = _u({
		width: r,
		height: a
	}, e.labelAngle, Cy(e.orient) == "x" ? "vertical" : "horizontal");
	return Math.ceil(o);
}
function Py(e) {
	switch (Ty(e).tickSide) {
		case "bottom":
		case "top": return {};
		case "left": return {
			labelAngle: -90,
			labelAlign: "center",
			labelPadding: 6
		};
		case "right": return {
			labelAngle: 90,
			labelAlign: "center",
			labelPadding: 6
		};
		default: throw Error("Invalid axis orient: " + e.orient);
	}
}
function Fy(e, t) {
	let n = Ty(t).tickSide, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
	switch (n) {
		case "left":
			i = "right";
			break;
		case "right":
			i = "left";
			break;
		case "top":
		case "bottom":
			Math.abs(o) > 30 ? (i = o > 0 == (n == "bottom") ? "left" : "right", a = "middle") : a = n == "top" ? "alphabetic" : "top";
			break;
		default:
	}
	return {
		labelAlign: i,
		labelAngle: o,
		labelBaseline: a
	};
}
function Iy(e, t) {
	let n = t.labelAngle % 90 == 0, r = t.labelOverlap;
	if (r === void 0) return zy(e) && n ? "auto" : !1;
	if (r === !1) return !1;
	if (n) return r === !0 ? "parity" : r;
	throw Error("Axis label overlap removal requires an axis-aligned label angle.");
}
function Ly(e, t, n) {
	let r = t.labelAngle % 90 == 0, i = t.labelFlush;
	if (i === void 0) return Cy(t.orient) == "x" && zy(e) && !n && r ? 1 : !1;
	if (i === !1) return !1;
	if (!zy(e)) throw Error("Axis label flushing requires a quantitative, index, or locus axis.");
	if (r) return i === !0 ? 1 : i;
	throw Error("Axis label flushing requires an axis-aligned label angle.");
}
function Ry(e, t, n, r) {
	return t.labelFlush !== !1 && Cy(t.orient) == "x" && zy(e) && t.labelAngle % 90 == 0 && n && r;
}
function zy(e) {
	switch (e) {
		case "quantitative":
		case "index":
		case "locus": return !0;
		case "nominal":
		case "ordinal": return !1;
		default: throw Error("Invalid axis field type: " + e);
	}
}
function By(e, t, n, r, i = "pixel", a = {}, o) {
	let s = e, c = Hy(s.labelFont, s.labelFontStyle, s.labelFontWeight, s.labelFontSize, a), l = Iy(t, s), u = Ly(t, s, n), d = Ry(t, s, n, r), f = !!o || !!l || u !== !1 || d, p = Cy(s.orient), m = by(p), { anchor: h, offsetDirection: g, tickSide: _ } = Ty(s), v = () => ({
		field: "value",
		type: t
	}), y = () => {
		let e = [{
			type: "measureText",
			field: "label",
			as: fy,
			fontSize: c.size,
			font: c.font,
			fontStyle: c.fontStyle,
			fontWeight: c.fontWeight
		}];
		if (o) {
			let t = o.textStyle;
			e.push({
				type: "measureText",
				field: "chromLabel",
				as: hy,
				fontSize: t.size,
				font: t.font,
				fontStyle: t.fontStyle,
				fontWeight: t.fontWeight
			});
		}
		return f && e.push({
			type: "axisLabelLayout",
			channel: p,
			labelWidth: fy,
			labelFontSize: c.size,
			labelAngle: s.labelAngle,
			labelAlign: s.labelAlign,
			labelBaseline: s.labelBaseline,
			labelFlush: u,
			labelFlushZoomExtent: d,
			labelFlushOffset: s.labelFlushOffset ?? 0,
			labelOffset: my,
			labelOverlap: l,
			labelSeparation: s.labelSeparation ?? 2,
			labelVisible: py,
			...o ? {
				chromLabelWidth: hy,
				chromLabelAlign: o.align,
				chromLabelPadding: o.padding,
				chromLabelSpacing: _y
			} : {}
		}), e;
	}, b = {
		resolve: { scale: { [p]: "forced" } },
		domainInert: !0,
		data: { lazy: {
			type: "axisTicks",
			channel: p,
			axis: e
		} },
		layer: []
	};
	if (s.domain && b.layer.push({
		name: "domain",
		data: { values: [{}] },
		mark: {
			type: "rule",
			clip: !1,
			strokeDash: s.domainDash,
			strokeCap: s.domainCap,
			color: s.domainColor,
			[m]: h,
			size: s.domainWidth
		}
	}), s.ticks || s.labels) {
		let e = {
			name: uy,
			transform: s.labels ? y() : void 0,
			encoding: { [p]: v() },
			layer: []
		};
		s.ticks && e.layer.push({
			name: "ticks",
			mark: {
				type: "rule",
				clip: !1,
				strokeDash: s.tickDash,
				strokeCap: s.tickCap,
				color: s.tickColor,
				size: s.tickWidth
			},
			encoding: {
				[m]: { value: h },
				[m + "2"]: { value: { expr: `${h} - ${s.tickSize} / ${dy} * ${h ? 1 : -1}` } }
			}
		}), s.labels && e.layer.push({
			name: ly,
			transform: f ? [{
				type: "filter",
				expr: `datum.${py}`
			}] : void 0,
			mark: {
				type: "text",
				clip: i === "anchor" && "never",
				cullByVisibleRange: i === "anchor" ? p : void 0,
				align: s.labelAlign,
				angle: s.labelAngle,
				baseline: s.labelBaseline,
				font: c.font,
				fontStyle: c.fontStyle,
				fontWeight: c.fontWeight,
				[m + "Offset"]: (s.tickSize + s.labelPadding) * g,
				[m]: h,
				size: c.size,
				color: s.labelColor
			},
			encoding: {
				[p]: v(),
				...u !== !1 || d ? { [p + "Offset"]: {
					field: my,
					type: "quantitative",
					scale: null
				} } : {},
				text: { field: "label" }
			}
		}), b.layer.push(e);
	}
	if (s.title) {
		let e = s.titleFit === "range" ? {
			[p]: 0,
			[p + "2"]: 1,
			[p === "x" ? "flushX" : "flushY"]: !0
		} : { [p]: .5 };
		b.layer.push({
			name: "title",
			data: { values: [{}] },
			mark: {
				...e,
				type: "text",
				clip: !1,
				align: "center",
				baseline: _ == "bottom" ? "bottom" : "top",
				angle: [
					0,
					90,
					0,
					-90
				][[
					"top",
					"right",
					"bottom",
					"left"
				].indexOf(_)],
				text: s.title,
				color: s.titleColor,
				font: s.titleFont,
				size: s.titleFontSize,
				fontStyle: s.titleFontStyle,
				fontWeight: s.titleFontWeight,
				[m]: 1 - h
			}
		});
	}
	return b;
}
function Vy(e, t, n = {}, r = !0, i = !1) {
	let a = e, o = Hy(a.chromLabelFont, a.chromLabelFontStyle, a.chromLabelFontWeight, a.chromLabelFontSize, n), s = Cy(a.orient), c = by(s), { anchor: l, tickSide: u } = Ty(a), d = {
		textStyle: o,
		align: u == "right" ? "left" : a.chromLabelAlign,
		padding: gy
	}, f = By({
		...e,
		...Py(e)
	}, t, r, i, "pixel", n, e.chromLabels ? d : void 0);
	if (e.chromTicks || e.chromLabels) {
		let n = {
			name: cy,
			data: { lazy: {
				type: "axisGenome",
				channel: s
			} },
			encoding: { [s]: {
				field: "continuousStart",
				type: t,
				band: 0
			} },
			layer: []
		};
		if (e.chromTicks && n.layer.push({
			name: "chromosome_ticks",
			mark: {
				type: "rule",
				strokeDash: e.chromTickDash,
				strokeDashOffset: e.chromTickDashOffset,
				[c]: l,
				[c + "2"]: { expr: `${l} - ${a.chromTickSize} / ${dy} * ${l ? 1 : -1}` },
				color: e.chromTickColor,
				size: a.chromTickWidth
			}
		}), e.chromLabels) {
			let r = s === "x", i = r ? {
				viewportEdgeFadeWidthLeft: 20,
				viewportEdgeFadeWidthRight: 20,
				viewportEdgeFadeDistanceRight: -10,
				viewportEdgeFadeDistanceLeft: -20
			} : u === "left" ? {
				viewportEdgeFadeWidthBottom: 20,
				viewportEdgeFadeWidthTop: 20,
				viewportEdgeFadeDistanceBottom: -20,
				viewportEdgeFadeDistanceTop: -10
			} : {};
			n.layer.push({
				name: "chromosome_labels",
				mark: {
					type: "text",
					size: o.size,
					font: o.font,
					fontWeight: o.fontWeight,
					fontStyle: o.fontStyle,
					color: a.chromLabelColor,
					align: u === "right" ? "right" : e.chromLabelAlign,
					baseline: "alphabetic",
					clip: !1,
					[c]: l,
					angle: r ? 0 : u === "left" ? -90 : 90,
					[r ? "paddingX" : "paddingY"]: d.padding,
					dy: u === "bottom" ? a.chromLabelPadding + a.chromLabelFontSize * .73 : -a.chromLabelPadding,
					...i
				},
				encoding: {
					[s + "2"]: {
						field: "continuousEnd",
						type: t
					},
					text: { field: "name" }
				}
			});
		}
		f.layer.push(n);
	}
	return f;
}
function Hy(e, t, n, r, i) {
	return {
		font: e ?? i.font,
		fontStyle: t ?? i.fontStyle,
		fontWeight: n ?? i.fontWeight,
		size: r ?? i.size
	};
}
//#endregion
//#region ../core/src/view/interactionRouting.js
function Uy(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function Wy(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region ../core/src/utils/ringBuffer.js
var Gy = class {
	#e;
	#t = 0;
	#n = 0;
	constructor(e) {
		this.#e = Array(e);
	}
	push(e) {
		this.#e[this.#t] = e, this.#t = (this.#t + 1) % this.size, this.#n = Math.min(this.#n + 1, this.size);
	}
	get() {
		let e = this.#e;
		return this.#n < this.size ? e.slice(0, this.#n) : e.slice(this.#t, this.size).concat(e.slice(0, this.#t));
	}
	get size() {
		return this.#e.length;
	}
	get length() {
		return this.#n;
	}
};
//#endregion
//#region ../core/src/utils/interactionEvent.js
function Ky(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function qy(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function Jy(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function Yy(e) {
	let t = (e) => e === null || typeof e != "object" && typeof e != "function";
	return new Proxy(e, {
		get(e, n, r) {
			let i = Reflect.get(e, n, e);
			if (!t(i)) throw Error(`Access to non-primitive property "${String(n)}" is not allowed.`);
			return i;
		},
		getPrototypeOf() {
			return null;
		},
		ownKeys(e) {
			return Reflect.ownKeys(e).filter((n) => t(e[n])).map((e) => typeof e == "symbol" ? e : String(e));
		},
		getOwnPropertyDescriptor(e, n) {
			let r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && !("get" in r || "set" in r) && t(r.value)) return {
				value: r.value,
				writable: !!r.writable,
				enumerable: !!r.enumerable,
				configurable: !!r.configurable
			};
		},
		has(e, n) {
			return n in e && t(e[n]);
		}
	});
}
//#endregion
//#region ../core/src/utils/documentDrag.js
function Xy({ onMove: e, onFinish: t, onRelease: n, hoverContext: r }) {
	let i = !0, a = (a) => i ? (i = !1, document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", o), t?.(), r?.resumeHoverTracking(a), a && n?.(a), !0) : !1, o = (e) => a(e);
	return r?.suspendHoverTracking(), document.addEventListener("mousemove", e), document.addEventListener("mouseup", o), () => a(void 0);
}
//#endregion
//#region ../core/src/view/layout/point.js
var Z = class e {
	static fromMouseEvent(t) {
		return new e(t.clientX, t.clientY);
	}
	constructor(e, t) {
		this.x = e, this.y = t;
	}
	subtract(t) {
		return new e(this.x - t.x, this.y - t.y);
	}
	add(t) {
		return new e(this.x - t.x, this.y - t.y);
	}
	multiply(t) {
		return new e(this.x * t, this.y * t);
	}
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
	equals(e) {
		return e ? e === this || e.x === this.x && e.y === this.y : !1;
	}
}, Zy = 0, Qy = /* @__PURE__ */ new WeakMap(), $y = cb(), eb = 6;
function tb() {
	Zy = performance.now();
}
function nb() {
	return performance.now() - Zy < 50;
}
function rb(e) {
	return function(...t) {
		return tb(), e(...t);
	};
}
function ib(e, t, n, r, i) {
	n = rb(n);
	let a = lb(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, o = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		a.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = ab(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = ob(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - ob(e.y, r.datum)) * t.height + t.y);
			}
		}
		(Math.abs(i.deltaX) < Math.abs(i.deltaY) ? n({
			x: s,
			y: c,
			xDelta: 0,
			yDelta: 0,
			zDelta: i.deltaY * o / 300
		}) === !0 : n({
			x: s,
			y: c,
			xDelta: -i.deltaX * o,
			yDelta: 0,
			zDelta: 0
		}) === !0) && i.preventDefault();
	} else if (e.type == "mousedown" && e.mouseEvent.button === 0) {
		a.smoother && a.smoother.stop();
		let t = new Gy(30), r = e.mouseEvent;
		r.preventDefault();
		let o = Z.fromMouseEvent(r);
		return Xy({
			onMove: (e) => {
				let r = Z.fromMouseEvent(e);
				t.push({
					point: r,
					timestamp: performance.now()
				});
				let i = r.subtract(o);
				n({
					x: o.x,
					y: o.y,
					xDelta: i.x,
					yDelta: i.y,
					zDelta: 0
				}), o = r;
			},
			hoverContext: e.target?.context,
			onRelease: () => db(a, t, o, n, i, { minSampleCount: 5 })
		});
	} else if (e.type == "touchgesture") {
		if (!Ky(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: o, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && db(a, a.touchPanEventBuffer, a.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), ub(a);
			return;
		}
		a.touchPanPointerCount !== t.pointerCount && (ub(a), a.touchPanPointerCount = t.pointerCount);
		let c = new Z(e.point.x + r, e.point.y + o);
		if (a.touchPanLastPoint = c, t.pointerCount === 1 && (r !== 0 || o !== 0) && a.touchPanEventBuffer.push({
			point: c,
			timestamp: performance.now()
		}), r === 0 && o === 0 && s === 0) return;
		a.smoother?.stop(), n({
			x: e.point.x,
			y: e.point.y,
			xDelta: r,
			yDelta: o,
			zDelta: s
		});
	}
}
function ab(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = ob(r.x, n.datum) * t.width + t.x, s = (1 - ob(r.y, n.datum)) * t.height + t.y, c = ob(r.x2, n.datum) * t.width + t.x, l = (1 - ob(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, eb) : eb, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function ob(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = sb(e.channelDef);
	if (r.type === "band" || r.type === "point") return Number.isFinite(i) ? n + r.bandwidth() * i : n;
	if (r.type === "index" || r.type === "locus") {
		if (!Number.isFinite(i)) return n;
		let e = r;
		return n + e.step() * (i - e.align());
	} else return n;
}
function sb(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function cb() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new Gy(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function lb(e) {
	if (!e) return $y;
	let t = Qy.get(e);
	return t || (t = cb(), Qy.set(e, t)), t;
}
function ub(e) {
	e.touchPanEventBuffer = new Gy(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function db(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && fb(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = Dn(i, (e) => {
		r({
			x: e.x,
			y: e.y,
			xDelta: p - e.x,
			yDelta: m - e.y,
			zDelta: 0
		}), p = e.x, m = e.y;
	}, 150, .5, {
		x: p,
		y: m
	}), e.smoother({
		x: n.x - f.x * 250,
		y: n.y - f.y * 250
	});
}
function fb(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region ../core/src/view/axisGridView.js
var pb = class extends X {
	constructor(e, t, n, r, i, a) {
		super(_b(e, t), n, r, i, `axisGrid_${e.orient}`, a), this.axisProps = e, U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function mb(e, t) {
	let n = e, r = Cy(n.orient);
	return {
		name: "grid_lines",
		data: { lazy: {
			type: "axisTicks",
			channel: r,
			axis: e
		} },
		mark: {
			type: "rule",
			strokeDash: n.gridDash,
			strokeCap: n.gridCap,
			color: n.gridColor,
			size: n.gridWidth,
			opacity: n.gridOpacity
		},
		encoding: { [r]: {
			field: "value",
			type: t
		} }
	};
}
function hb(e, t) {
	let n = e, r = Cy(n.orient);
	return {
		name: "chromosome_lines",
		data: { lazy: {
			type: "axisGenome",
			channel: r
		} },
		mark: {
			type: "rule",
			strokeDash: n.chromGridDash,
			strokeCap: n.chromGridCap,
			color: n.chromGridColor,
			size: n.chromGridWidth,
			opacity: n.chromGridOpacity
		},
		encoding: { [r]: {
			field: "continuousStart",
			type: t,
			band: 0
		} }
	};
}
function gb(e, t) {
	let n = e, r = Cy(n.orient);
	return {
		name: "chromosome_fill",
		data: { lazy: {
			type: "axisGenome",
			channel: r
		} },
		mark: { type: "rect" },
		encoding: {
			[r]: {
				field: "continuousStart",
				type: t,
				band: 0
			},
			[r + "2"]: {
				field: "continuousEnd",
				band: 0
			},
			fill: {
				field: "odd",
				type: "nominal",
				scale: {
					domain: [!1, !0],
					range: [n.chromGridFillEven ?? "white", n.chromGridFillOdd ?? "white"]
				}
			},
			opacity: {
				field: "odd",
				type: "nominal",
				scale: {
					type: "ordinal",
					domain: [!1, !0],
					range: [+!!n.chromGridFillEven, +!!n.chromGridFillOdd]
				}
			}
		}
	};
}
function _b(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push(gb(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(hb(n, t)), n.grid && n.gridOpacity > 0 && r.push(mb(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[Cy(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region ../core/src/config/titleConfig.js
function vb(e) {
	return H(e.map((e) => e.title));
}
function yb(e, t) {
	return Ll(e, t);
}
//#endregion
//#region ../core/src/view/titleView.js
var bb = {
	start: 0,
	middle: .5,
	end: 1
}, xb = {
	start: "left",
	middle: "center",
	end: "right"
}, Sb = "group-title", Cb = "group-subtitle";
function wb(e) {
	return Eb({
		subtitleColor: e.color,
		subtitleFont: e.font,
		subtitleFontSize: e.fontSize,
		subtitleFontStyle: e.fontStyle,
		subtitleFontWeight: e.fontWeight
	});
}
function Tb(e) {
	return Eb({
		subtitleColor: e.subtitleColor,
		subtitleFont: e.subtitleFont,
		subtitleFontSize: e.subtitleFontSize,
		subtitleFontStyle: e.subtitleFontStyle,
		subtitleFontWeight: e.subtitleFontWeight,
		subtitlePadding: e.subtitlePadding
	});
}
function Eb(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function Db(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = bb[e.anchor ?? "middle"];
	switch (e.orient) {
		case "top":
			n = {
				x: r,
				y: 1
			}, t = {
				baseline: "alphabetic",
				angle: 0
			};
			break;
		case "right":
			n = {
				x: 1,
				y: 1 - r
			}, t = {
				baseline: "alphabetic",
				angle: 90
			};
			break;
		case "bottom":
			n = {
				x: r,
				y: 0
			}, t = {
				baseline: "top",
				angle: 0
			};
			break;
		case "left":
			n = {
				x: 0,
				y: r
			}, t = {
				baseline: "alphabetic",
				angle: -90
			};
			break;
		default:
	}
	return {
		orientConfig: t,
		xy: n
	};
}
function Ob(e, t = []) {
	if (!e) return;
	let n = Ae(e) ? { text: e } : e;
	if (!n.text) return;
	let r = vb(t), i = yb(t, n.style ?? Sb), a = wb(yb(t, Cb)), o = {
		...r,
		...i,
		...a,
		...Tb(r),
		...n
	};
	if (o.orient == "none") return;
	let { orientConfig: s } = Db(o);
	return {
		...r,
		...s,
		...i,
		...a,
		...Tb(r),
		...n
	};
}
function kb(e, t) {
	let n = e.subtitle ? zb(e, t) + (e.subtitlePadding ?? 0) : 0, r = e.offset + (jb(e.orient) ? n : 0);
	return Mb(e.orient, r);
}
function Ab(e, t) {
	let n = Rb(e, t) + (e.subtitlePadding ?? 0), r = e.offset + (jb(e.orient) ? 0 : n);
	return Mb(e.orient, r);
}
function jb(e) {
	switch (e) {
		case "top":
		case "left": return !0;
		case "right":
		case "bottom": return !1;
		default: return !1;
	}
}
function Mb(e, t) {
	let n = {
		xOffset: 0,
		yOffset: 0
	};
	switch (e) {
		case "top":
			n.yOffset = -t;
			break;
		case "right":
			n.xOffset = t;
			break;
		case "bottom":
			n.yOffset = t;
			break;
		case "left":
			n.xOffset = -t;
			break;
		default:
	}
	return n;
}
function Nb(e, t) {
	return hu(t.textMetrics, e ?? {});
}
function Pb(e, t) {
	return hu(t.textMetrics, Hb(e));
}
function Fb(e, t) {
	Nb(e, t), e.subtitle && Pb(e, t);
}
function Ib(e, t) {
	if (!e || e.reserve === !1 || e.orient == "none" || e.offset < 0) return Mn.zero();
	let n = Lb(e, t), r = Math.ceil(n + Math.max(e.offset ?? 0, 0));
	switch (e.orient) {
		case "top": return new Mn(r, 0, 0, 0);
		case "right": return new Mn(0, r, 0, 0);
		case "bottom": return new Mn(0, 0, r, 0);
		case "left": return new Mn(0, 0, 0, r);
		default: return Mn.zero();
	}
}
function Lb(e, t) {
	let n = Rb(e, t);
	if (!e.subtitle) return n;
	let r = zb(e, t);
	return n + (e.subtitlePadding ?? 0) + r;
}
function Rb(e, t) {
	let n = Nb(e, t), r = Bb(e.fontSize, 12);
	return Vb(e, e.text, n, r);
}
function zb(e, t) {
	let n = Pb(e, t), r = Bb(e.subtitleFontSize, 11);
	return Vb(e, e.subtitle, n, r);
}
function Bb(e, t) {
	return I(e) ? t : e ?? t;
}
function Vb(e, t, n, r) {
	let i = I(e.angle) ? 0 : e.angle ?? 0, a = e.orient == "top" || e.orient == "bottom" ? "vertical" : "horizontal";
	return _u(Ub(t, n, r), i, a);
}
function Hb(e) {
	return {
		font: e.subtitleFont,
		fontStyle: e.subtitleFontStyle,
		fontWeight: e.subtitleFontWeight
	};
}
function Ub(e, t, n) {
	return gu(t, typeof e == "string" ? e : String(e.expr), n);
}
function Wb(e, t, n, r) {
	return {
		type: "text",
		tooltip: null,
		clip: !1,
		...t,
		...n,
		text: r ? e.subtitle : e.text,
		align: e.align ?? xb[e.anchor ?? "middle"],
		angle: e.angle,
		baseline: e.baseline,
		dx: e.dx,
		dy: e.dy,
		color: r ? e.subtitleColor : e.color,
		font: r ? e.subtitleFont : e.font,
		size: r ? e.subtitleFontSize : e.fontSize,
		fontStyle: r ? e.subtitleFontStyle : e.fontStyle,
		fontWeight: r ? e.subtitleFontWeight : e.fontWeight
	};
}
function Gb(e, t) {
	let { xy: n } = Db(e), r = [{
		name: "title",
		data: { values: [{}] },
		mark: Wb(e, n, kb(e, t), !1)
	}];
	return e.subtitle && r.push({
		name: "subtitle",
		data: { values: [{}] },
		mark: Wb(e, n, Ab(e, t), !0)
	}), r;
}
var Kb = class e extends mr {
	#e;
	titleSpec;
	static create(t, n, r, i, a, o, s) {
		let c = Ob(t, n);
		return c ? new e(c, r, i, a, o, s) : void 0;
	}
	constructor(e, t, n, r, i, a) {
		Fb(e, t);
		let o = Gb(e, t);
		super({ layer: [] }, t, n, r, i, a), this.titleSpec = e, U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 }), this.#e = o.map((e, n) => new J(e, t, this, r, i + "-" + (e.name ?? n)));
	}
	*[Symbol.iterator]() {
		yield* this.#e;
	}
	getOverhang() {
		return Ib(this.titleSpec, this.context);
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.arrange(e, t, n);
			e.popView(this);
		}
	}
}, qb = class extends J {
	#e;
	#t = W.ZERO;
	#n = W.ZERO;
	#r = W.ZERO;
	viewportOffset = 0;
	#i;
	#a = () => !1;
	constructor(e, t, n = {}) {
		let r = {
			scrollbarSize: 8,
			scrollbarPadding: 2,
			scrollbarMinLength: 20
		};
		super({
			params: [{
				name: "scrollbarOpacity",
				value: 1
			}],
			opacity: { expr: "scrollbarOpacity" },
			data: { values: [{}] },
			mark: {
				type: "rect",
				fill: "#b0b0b0",
				fillOpacity: .6,
				stroke: "white",
				strokeWidth: 1,
				strokeOpacity: 1,
				cornerRadius: 5,
				clip: !1
			}
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t), U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 }), this.config = r, this.#e = t, this.#i = n.onViewportOffsetChange, this.registerDisposer(() => this.#a());
		let i = this.config.scrollbarPadding, a = this.config.scrollbarSize;
		this.#t = this.#e == "vertical" ? new W(() => this.#n.x + this.#n.width - a - i, () => this.#n.y + i + this.scrollOffset, () => a, () => this.#c()) : new W(() => this.#n.x + i + this.scrollOffset, () => this.#n.y + this.#n.height - a - i, () => this.#c(), () => a), this.#p(this.viewportOffset), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#l() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault();
			let r = this.scrollOffset, i = n(e.mouseEvent), a = (e) => {
				let t = this.#l();
				if (t <= 0) return;
				let a = je(n(e) - i + r, 0, t);
				this.interpolateViewportOffset({ x: this.#d(a) });
			};
			this.#a = Xy({
				onMove: a,
				hoverContext: this.context
			});
		});
	}
	get scrollOffset() {
		return this.#u(this.viewportOffset);
	}
	setViewportOffset(e, { notify: t = !0, syncSmoother: n = !1 } = {}) {
		this.viewportOffset = je(e, 0, this.#f()), n && this.#p(this.viewportOffset), t && this.#i && this.#i(this.viewportOffset);
	}
	#o() {
		let e = this.#e == "horizontal" ? "width" : "height", t = this.#n[e], n = this.#r[e];
		return n > 0 ? Math.min(1, t / n) : 1;
	}
	#s() {
		let e = this.#e == "horizontal" ? "width" : "height";
		return Math.max(0, this.#n[e] - 2 * this.config.scrollbarPadding);
	}
	#c() {
		let e = this.#s(), t = this.#o() * e, n = this.config.scrollbarMinLength;
		return Math.min(e, Math.max(n, t));
	}
	#l() {
		return Math.max(0, this.#s() - this.#c());
	}
	#u(e) {
		let t = this.#f(), n = this.#l();
		return t <= 0 || n <= 0 ? 0 : e / t * n;
	}
	#d(e) {
		let t = this.#f(), n = this.#l();
		return t <= 0 || n <= 0 ? 0 : e / n * t;
	}
	#f() {
		let e = this.#e == "horizontal" ? "width" : "height";
		return Math.max(0, this.#r[e] - this.#n[e]);
	}
	arrange(e, t, n) {
		super.arrange(e, this.#t, n);
	}
	updateScrollbar(e, t) {
		this.#n = e.flatten(), this.#r = t, this.setViewportOffset(this.viewportOffset, {
			notify: !1,
			syncSmoother: !0
		});
	}
	#p(e) {
		this.interpolateViewportOffset = Dn(this.context.animator, (e) => {
			this.setViewportOffset(e.x, {
				notify: !0,
				syncSmoother: !1
			});
		}, 35, .4, { x: e });
	}
};
//#endregion
//#region ../core/src/config/viewConfig.js
function Jb(e, t) {
	let n = ["cell", ...Il(t?.style)];
	return H(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
var Yb = {
	disable: !1,
	orient: "right",
	direction: "vertical",
	offset: 18,
	padding: 0,
	spacing: 10,
	columnPadding: 10,
	rowPadding: 2,
	labelAlign: "left",
	labelBaseline: "middle",
	labelLimit: 160,
	labelOffset: 4,
	gradientThickness: 12,
	gradientOpacity: 1,
	gradientStrokeWidth: 0,
	tickCount: 5,
	symbolSize: 100,
	symbolOffset: 0,
	symbolBaseFillColor: "transparent",
	symbolBaseStrokeColor: "#888",
	titleLimit: 180,
	titleOrient: "top",
	titlePadding: 5
}, Xb = {
	orient: "bottom",
	direction: "horizontal",
	titleOrient: "left",
	spacing: 15,
	offset: 3
}, Zb = {
	"track-bottom-legend": Xb,
	"track-bottom": Xb
}, Qb = { style: "track-bottom-legend" }, $b = "_legendLabelWidth", ex = "_legendSymbolSize", tx = "_legendStrokeWidth", nx = 200, rx = 256, ix = 4, ax = 40, ox = 2, sx = {
	fillOpacity: 0,
	shadowOpacity: 0,
	strokeOpacity: 0
};
function cx(e) {
	e.resolve = {
		...e.resolve,
		axis: {
			default: "excluded",
			...e.resolve?.axis
		},
		legend: {
			default: "excluded",
			...e.resolve?.legend
		}
	};
	for (let t of [
		e.layer,
		e.vconcat,
		e.hconcat
	]) t?.forEach(cx);
	return e;
}
function lx(e) {
	return {
		fill: e.backgroundFill,
		fillOpacity: e.backgroundFill ? e.backgroundFillOpacity ?? 1 : 0,
		stroke: e.backgroundStroke,
		strokeWidth: e.backgroundStrokeWidth,
		strokeOpacity: e.backgroundStroke ? e.backgroundStrokeOpacity ?? 1 : 0,
		shadowOpacity: 0
	};
}
function ux(e, t) {
	let n = e.title;
	if (!n) return;
	let r = e.titleFontSize ?? 11, i = e.titlePadding ?? 5, a = hx(e), o = Math.ceil(Ix(e, t)) + i;
	return {
		name: "title",
		width: a ? o : void 0,
		height: a ? { grow: 1 } : r + i,
		view: sx,
		data: { values: [{ label: n }] },
		transform: [{
			type: "truncateText",
			field: "label",
			limit: e.titleLimit,
			fontSize: r,
			font: e.titleFont,
			fontStyle: e.titleFontStyle,
			fontWeight: e.titleFontWeight
		}],
		mark: {
			type: "text",
			clip: !1,
			x: mx(e) == "right" && o > 0 ? i / o : 0,
			y: .5,
			align: "left",
			baseline: "middle",
			color: e.titleColor,
			font: e.titleFont,
			fontStyle: e.titleFontStyle,
			fontWeight: e.titleFontWeight,
			size: r
		},
		encoding: { text: { field: "label" } }
	};
}
function dx(e, t, n, r = []) {
	let i = ux(e, n), a;
	return a = i ? mx(e) == "bottom" ? { vconcat: [t, i] } : mx(e) == "left" ? { hconcat: [i, t] } : mx(e) == "right" ? { hconcat: [t, i] } : { vconcat: [i, t] } : { vconcat: [t] }, cx({
		name: "legend_" + (e.orient ?? "right"),
		padding: e.padding,
		view: lx(e),
		resolve: { scale: Object.fromEntries(r.map((e) => [e, "forced"])) },
		spacing: 0,
		...a
	});
}
function fx(e) {
	return e.direction == "horizontal";
}
function px(e) {
	return e.orient == "top" || e.orient == "bottom";
}
function mx(e) {
	return e.titleOrient ?? "top";
}
function hx(e) {
	let t = mx(e);
	return t == "left" || t == "right";
}
function gx(e) {
	return e.gradientStrokeColor === void 0 ? 0 : e.gradientStrokeWidth ?? 0;
}
function _x(e) {
	if (e !== void 0) return e == "transparent" ? { value: null } : { value: e };
}
function vx({ channel: e, dataType: t, horizontalPixelScale: n, verticalPixelScale: r, legend: i, symbolStyle: a }) {
	let o = a.encoding ?? {}, s = _x(i.symbolStrokeColor) ?? o.color ?? o.stroke ?? o.fill ?? _x(i.symbolBaseStrokeColor);
	return {
		name: "symbols",
		mark: {
			type: "rule",
			clip: !1,
			cullByVisibleRange: !1,
			opacity: a.mark?.opacity
		},
		encoding: {
			x: {
				field: "symbolX",
				type: "quantitative",
				scale: n,
				axis: null,
				buildIndex: !1
			},
			x2: {
				field: "symbolX2",
				type: "quantitative",
				scale: n,
				axis: null
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: r,
				axis: null
			},
			y2: {
				field: "labelY2",
				type: "quantitative",
				scale: r,
				axis: null
			},
			[e]: {
				field: "value",
				type: t,
				domainInert: !0
			},
			...s ? { color: s } : {},
			...o.opacity ? { opacity: o.opacity } : {}
		}
	};
}
function yx({ entries: e, channel: t, symbolChannels: n = {}, symbolStyle: r = {}, symbolGeometry: i = "point", legend: a, format: o, dataType: s, context: c }) {
	let l = i == "stroke", u = a.labelAlign ?? "left", d = a.labelBaseline ?? "middle", f = a.labelFontSize ?? 10, p = /* @__PURE__ */ new Set([t, ...Object.keys(n)]), m = r.mark?.filled ?? t == "fill", h = new Set(p);
	h.has("color") && h.add(m ? "fill" : "stroke");
	let g = { ...r.encoding };
	for (let [e, t] of [
		["opacity", a.symbolOpacity],
		["fill", a.symbolFillColor],
		["stroke", a.symbolStrokeColor],
		["size", a.symbolSize],
		["shape", a.symbolType],
		["strokeWidth", a.symbolStrokeWidth]
	]) t !== void 0 && !h.has(e) && (g[e] = e == "fill" || e == "stroke" ? _x(t) : { value: t });
	a.symbolFillColor !== void 0 && !h.has("fill") && !h.has("fillOpacity") && (g.fillOpacity ??= p.has("opacity") ? {
		field: "value",
		type: s,
		resolutionChannel: "opacity",
		domainInert: !0
	} : g.opacity ?? { value: r.mark?.fillOpacity ?? r.mark?.opacity ?? 1 }), r = {
		...r,
		encoding: g
	};
	let _ = (e) => p.has(e) || p.has("color"), v = Object.fromEntries([["fill", _x(a.symbolBaseFillColor)], ["stroke", _x(a.symbolBaseStrokeColor)]].filter(([e, t]) => !_(e) && t !== void 0).map(([e, t]) => [e, t])), y = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, b = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, x = [l ? vx({
		channel: t,
		dataType: s,
		horizontalPixelScale: y,
		verticalPixelScale: b,
		legend: a,
		symbolStyle: r
	}) : {
		name: "symbols",
		mark: {
			type: "point",
			clip: !1,
			cullByVisibleRange: !1,
			filled: t == "fill",
			shape: a.symbolType ?? "circle",
			size: a.symbolSize,
			strokeWidth: a.symbolStrokeWidth ?? 1.5,
			...r.mark
		},
		encoding: {
			x: {
				field: "entryX",
				type: "quantitative",
				scale: y,
				axis: null,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: b,
				axis: null
			},
			[t]: {
				field: "value",
				type: s,
				domainInert: !0
			},
			...v,
			...r.encoding,
			...Object.fromEntries(Object.entries(n).map(([e]) => [e, {
				field: "value",
				type: s,
				domainInert: !0
			}]))
		}
	}];
	return x.push({
		name: "labels",
		mark: {
			type: "text",
			clip: !1,
			cullByVisibleRange: !1,
			align: u,
			baseline: d,
			color: a.labelColor,
			font: a.labelFont,
			fontStyle: a.labelFontStyle,
			fontWeight: a.labelFontWeight,
			size: f
		},
		encoding: {
			x: {
				field: "labelX",
				type: "quantitative",
				scale: y,
				axis: null,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: b,
				axis: null
			},
			text: { field: "label" }
		}
	}), dx(a, {
		name: "legendBody",
		height: { grow: 1 },
		view: sx,
		resolve: {
			scale: {
				x: "excluded",
				y: "excluded"
			},
			axis: {
				x: "excluded",
				y: "excluded"
			}
		},
		data: e ? { values: e } : { lazy: {
			type: "legendEntries",
			channel: t,
			dataType: s,
			format: o,
			values: a.values,
			sizeMode: l ? "strokeWidth" : "area"
		} },
		transform: [
			{
				type: "truncateText",
				field: "label",
				limit: a.labelLimit,
				fontSize: f,
				font: a.labelFont,
				fontStyle: a.labelFontStyle,
				fontWeight: a.labelFontWeight
			},
			{
				type: "measureText",
				field: "label",
				as: $b,
				fontSize: f,
				font: a.labelFont,
				fontStyle: a.labelFontStyle,
				fontWeight: a.labelFontWeight
			},
			{
				type: "packLegendLabels",
				labelWidth: $b,
				columns: a.columns,
				symbolSize: l ? a.symbolSize : t == "size" ? ex : a.symbolSize,
				symbolStrokeWidth: l ? tx : a.symbolStrokeWidth,
				labelOffset: a.labelOffset,
				fontSize: f,
				rowPadding: a.rowPadding,
				columnPadding: a.columnPadding,
				symbolOffset: a.symbolOffset,
				yOffset: 0,
				yExtent: { expr: "height" },
				direction: a.direction ?? "vertical"
			}
		],
		layer: x
	}, c, [t, ...Object.keys(n)]);
}
function bx({ channel: e, legend: t, format: n, context: r }) {
	let i = fx(t), a = t.gradientThickness ?? 12, o = t.gradientStrokeWidth ?? 0, s = gx(t), c = s > 0, l = t.gradientLength === void 0 ? {
		grow: 1,
		minPx: ax + s
	} : t.gradientLength + s, u = i ? "center" : t.labelAlign ?? "left", d = i ? "top" : t.labelBaseline ?? "middle", f = t.labelFontSize ?? 10, p = t.labelOffset ?? 4, m = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, h = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, g = {
		domain: [0, 1],
		domainTransition: !1,
		zero: !1,
		nice: !1
	}, _ = f, v = _ + p, y = v + ix, b = y, x = b + a, S = a, C = a + ix, w = C + p, T = i ? "x" : "y", E = T + "2", D = i ? "y" : "x", O = D + "2", k = i ? h : m, A = "_legendGradientBandStart", j = "_legendGradientBandStop", ee = "_legendGradientTickStart", M = "_legendGradientTickStop", te = "_legendGradientLabelPosition", N = (e, t, n) => ({
		field: e,
		type: "quantitative",
		scale: t,
		axis: null,
		...n ? { buildIndex: !1 } : {}
	}), ne = { lazy: {
		type: "legendGradientTicks",
		channel: e,
		count: t.tickCount ?? 5,
		format: n,
		values: t.values
	} }, re = [
		{
			type: "formula",
			expr: "" + (i ? v : S),
			as: ee
		},
		{
			type: "formula",
			expr: "" + (i ? y : C),
			as: M
		},
		{
			type: "formula",
			expr: "" + (i ? _ : w),
			as: te
		}
	], ie = [{
		name: "gradientRamp",
		transform: [{
			type: "formula",
			expr: "" + (i ? b : 0),
			as: A
		}, {
			type: "formula",
			expr: "" + (i ? x : a),
			as: j
		}],
		mark: {
			type: "rect",
			clip: !1,
			opacity: t.gradientOpacity
		},
		encoding: {
			[T]: N(i ? "position0" : "position1", g, T == "x"),
			[E]: {
				field: i ? "position1" : "position0",
				type: "quantitative",
				scale: g
			},
			[D]: N(A, k, D == "x"),
			[O]: {
				field: j,
				type: "quantitative",
				scale: k
			},
			[e]: {
				field: "value",
				type: "quantitative",
				domainInert: !0
			}
		}
	}, {
		name: "gradientGuide",
		data: ne,
		transform: re,
		layer: [{
			name: "gradientTicks",
			mark: {
				type: "rule",
				clip: !1
			},
			encoding: {
				[T]: N("position", g, T == "x"),
				[E]: {
					field: "position",
					type: "quantitative",
					scale: g
				},
				[D]: N(ee, k, D == "x"),
				[O]: {
					field: M,
					type: "quantitative",
					scale: k
				}
			}
		}, {
			name: "gradientLabels",
			transform: [{
				type: "truncateText",
				field: "label",
				limit: t.labelLimit,
				fontSize: f,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight
			}, {
				type: "measureText",
				field: "label",
				as: $b,
				fontSize: f,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight
			}],
			mark: {
				type: "text",
				clip: !1,
				align: u,
				baseline: d,
				color: t.labelColor,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight,
				size: f
			},
			encoding: {
				[T]: N("position", g, T == "x"),
				[D]: N(te, k, D == "x"),
				text: { field: "label" }
			}
		}]
	}];
	return c && ie.push({
		name: "gradientBorder",
		data: { values: [{
			position0: 0,
			position1: 1,
			[A]: i ? b : 0,
			[j]: i ? x : a
		}] },
		mark: {
			type: "rect",
			clip: !1,
			fillOpacity: 0,
			stroke: t.gradientStrokeColor,
			strokeWidth: o
		},
		encoding: {
			[T]: N("position0", g, T == "x"),
			[E]: {
				field: "position1",
				type: "quantitative",
				scale: g
			},
			[D]: N(A, k, D == "x"),
			[O]: {
				field: j,
				type: "quantitative",
				scale: k
			}
		}
	}), dx(t, {
		name: "gradientBody",
		padding: s / 2,
		width: i ? l : void 0,
		height: i ? { grow: 1 } : l,
		view: sx,
		resolve: {
			scale: {
				x: "excluded",
				y: "excluded"
			},
			axis: {
				x: "excluded",
				y: "excluded"
			}
		},
		data: { lazy: {
			type: "legendGradient",
			channel: e,
			count: rx
		} },
		layer: ie
	}, r, [e]);
}
function xx(e) {
	return e ? e.getPerpendicularSize() + e.getOffset() : 0;
}
function Sx(e, t, n) {
	return n == "horizontal" ? {
		name: e,
		spacing: t,
		hconcat: []
	} : {
		name: e,
		spacing: t,
		vconcat: []
	};
}
var Cx = class extends mr {
	#e;
	#t = [];
	#n;
	#r;
	#i;
	#a;
	#o;
	constructor(e, t, n, r, i, a, o, s) {
		super(Sx("legend_region_" + e, i, n), a, o, s, "legend_region_" + e), this.needsAxes = {
			x: !1,
			y: !1
		}, this.orient = e, this.#a = t, this.#o = n, this.#r = r, this.#n = i, U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		this.#e = await this.context.createOrImportView(Sx("legendStack", this.#n, this.#o), this, this, this.getNextAutoName("legendStack")), U(this.#e, { skipSubtree: !0 }), Hn(this.#e, { skipSubtree: !0 });
	}
	addLegendView(e) {
		if (!this.#e) throw Error("Legend region has not been initialized!");
		e.layoutParent = this.#e, this.#t.push(e), this.#e.appendChildView(e);
	}
	#s() {
		return this.#t.filter((e) => e.isActive());
	}
	prepareLayoutSize(e, t) {
		if (!this.#r) return !1;
		let n = this.#s(), r = this.#o == "horizontal", i = rr(n.map((e) => {
			let t = e.getSize();
			return r ? t.width : t.height;
		}), r ? e : t, { spacing: this.#n }), a = !wx(this.#i, i);
		return this.#i = i, a;
	}
	*[Symbol.iterator]() {
		this.#e && (yield this.#e);
	}
	getSize() {
		let { width: e, height: t } = this.#c();
		return new xn(e, t);
	}
	#c() {
		let e = this.#s();
		if (!e.length) {
			let e = {
				px: 0,
				grow: 0
			};
			return {
				width: e,
				height: e
			};
		}
		let t = e.map((e) => e.getSize().width), n = e.map((e) => e.getSize().height), r = (e) => Pn([...e, {
			px: this.#n * Math.max(0, e.length - 1),
			grow: 0
		}]);
		if (this.#r && this.#i && this.#i.length > 1) {
			let e = r(this.#i.map((e) => An(e.map((e) => this.#o == "horizontal" ? n[e] : t[e])))), i = {
				grow: 1,
				minPx: 0
			};
			return this.#o == "horizontal" ? {
				width: i,
				height: e
			} : {
				width: e,
				height: i
			};
		}
		return this.#o == "horizontal" ? {
			width: r(t),
			height: An(n)
		} : {
			width: An(t),
			height: r(n)
		};
	}
	getPerpendicularSize() {
		let e = this.getSize();
		return Tn(this.orient == "top" || this.orient == "bottom" ? e.height : e.width);
	}
	getWidth() {
		return Tn(this.getSize().width);
	}
	getHeight() {
		return Tn(this.getSize().height);
	}
	getOffset() {
		return Math.max(0, ...this.#s().map((e) => e.getOffset()));
	}
	getAnchor() {
		return this.#a;
	}
	getParallelSize() {
		if (!this.#s().length) return 0;
		if (this.#r && this.#i && this.#i.length > 1) return;
		let e = this.getSize(), t = this.orient == "top" || this.orient == "bottom" ? e.width : e.height;
		if (Nn(t) !== void 0) return Tn(t);
	}
	isPickingSupported() {
		return !1;
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		e.pushView(this, t);
		let r = this.#s(), i = this.#o == "horizontal", a = r.map((e) => {
			let t = e.getSize();
			return i ? t.width : t.height;
		}), o = r.map((e) => {
			let t = e.getSize();
			return i ? t.height : t.width;
		}), s = this.#i ?? [r.map((e, t) => t)], c = On(s.map((e) => An(e.map((e) => o[e]))), i ? t.height : t.width, { spacing: this.#n });
		for (let [l, u] of s.entries()) {
			let s = u.map((e) => a[e]), d = i ? t.width : t.height, f = s.every((e) => Nn(e) !== void 0) ? jn(s, { spacing: this.#n }) : d, p = Tx(this.#a) * Math.max(0, d - f), m = On(s, f, {
				spacing: this.#n,
				offset: p,
				devicePixelRatio: e.getDevicePixelRatio()
			}), h = c[l];
			for (let [a, s] of u.entries()) {
				let c = r[s], l = m[a], u = Tn(o[s]), d = c.legendProps.title != null && mx(c.legendProps) == "top" ? 0 : Math.max(0, (h.size - u) / 2), f = i ? new W(() => t.x + l.location, () => t.y + h.location + d, () => l.size, () => u) : new W(() => t.x + h.location + d, () => t.y + l.location, () => u, () => l.size);
				c.arrange(e, f, n);
			}
		}
		e.popView(this);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), this.#e?.propagateInteraction(e), this.handleInteraction(e, !1);
	}
};
function wx(e, t) {
	return e?.length == t.length && e.every((e, n) => e.length == t[n].length && e.every((e, r) => e == t[n][r]));
}
function Tx(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
var Ex = class extends mr {
	#e;
	#t;
	#n;
	#r = () => !0;
	#i;
	#a = 0;
	#o = [];
	#s = /* @__PURE__ */ new Set();
	#c = !1;
	constructor({ entries: e, channel: t, symbolChannels: n, symbolStyle: r, symbolGeometry: i, type: a, legend: o, format: s, dataType: c }, l, u, d, f) {
		let p = a == "gradient" ? bx({
			channel: t,
			legend: o,
			format: s,
			context: l
		}) : yx({
			entries: e,
			channel: t,
			symbolChannels: n,
			symbolStyle: r,
			symbolGeometry: i,
			legend: o,
			format: s,
			dataType: c,
			context: l
		});
		super(p, l, u, d, "legend_" + (o.orient ?? "right"), f), this.needsAxes = {
			x: !1,
			y: !1
		}, this.legendProps = o, this.#n = a ?? "symbol", this.#e = kx(this.#n, this.legendProps), U(this, { skipSubtree: !0 }), Hn(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		let e = { ...this.spec };
		delete e.name, this.#t = await this.context.createOrImportView(e, this, this, this.getNextAutoName("legend"), void 0, { layoutSizeParams: "force" }), U(this.#t, { skipSubtree: !0 }), Hn(this.#t, { skipSubtree: !0 }), this.#o = [];
		for (let e of this.getDescendants()) e instanceof J && (e.name === "labels" || e.name === "gradientLabels") && this.#o.push(e);
		this.#o.length > 0 && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#p())), this.#a = this.getStackedParallelSize();
	}
	*[Symbol.iterator]() {
		this.#t && (yield this.#t);
	}
	getSize() {
		if (!this.isActive()) return new xn({
			px: 0,
			grow: 0
		}, {
			px: 0,
			grow: 0
		});
		let e = fx(this.legendProps), t = { px: this.getPerpendicularSize() }, n = this.#u() ? this.#l() : { px: this.getStackedParallelSize() };
		return e ? new xn(n, t) : new xn(t, n);
	}
	#l() {
		if (!this.#t) return {
			grow: 1,
			minPx: ax
		};
		let e = this.#t.getSize();
		return fx(this.legendProps) ? e.width : e.height;
	}
	#u() {
		return this.#d() && fx(this.legendProps) == px(this.legendProps);
	}
	#d() {
		return this.#n == "gradient" && this.legendProps.gradientLength === void 0;
	}
	getPerpendicularSize() {
		return this.#e;
	}
	getOffset() {
		return this.legendProps.offset ?? 0;
	}
	setActivePredicate(e) {
		this.#r = e;
	}
	isActive() {
		return super.isConfiguredVisible() && this.#r();
	}
	getStackedParallelSize() {
		let e = this.#i ?? Dx(this.#o);
		return Ax(this.legendProps, this.#n, e, this.context);
	}
	#f() {
		this.#c || (this.#c = !0, queueMicrotask(() => {
			this.#c = !1, this.#m();
		}));
	}
	#p() {
		for (let e of this.#o) {
			let t = e.getCollector();
			!t || this.#s.has(t) || (this.#s.add(t), this.registerDisposer(t.observe(() => this.#f())), t.completed && this.#f());
		}
	}
	#m() {
		let e = Dx(this.#o);
		if (e === void 0) return;
		let t = this.#a;
		this.#i = e;
		let n = Ox(this.legendProps, this.#n, e, this.context), r = n >= this.#e + ox, i = this.getStackedParallelSize(), a = Math.abs(i - t) >= ox;
		!r && !a || (r && (this.#e = n), this.#a = i, this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
	suspendLayoutDataUpdates() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.getDescendants()) {
			let n = t.flowHandle?.dataSource;
			n && "suspendRangeUpdates" in n && e.add(n);
		}
		let t = Array.from(e).map((e) => e.suspendRangeUpdates());
		return () => {
			for (let e of t) e();
		};
	}
	isPickingSupported() {
		return !1;
	}
	arrange(e, t, n = {}) {
		super.arrange(e, t, n), this.isActive() && (e.pushView(this, t), this.#t?.arrange(e, t, n), e.popView(this));
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), this.#t?.propagateInteraction(e), this.handleInteraction(e, !1);
	}
};
function Dx(e) {
	let t = 0, n = 0, r = 0, i = 0, a = !1;
	for (let o of e) {
		let e = o.getCollector();
		if (!e?.completed) return;
		a = !0, e.visitData((e) => {
			t = Math.max(t, Number(e[$b]) || 0), n = Math.max(n, Number(e.entryWidth) || 0), r = Math.max(r, (Number(e.labelX) || 0) + (Number(e[$b]) || 0)), i = Math.max(i, Number(e.labelY) || 0);
		});
	}
	return a ? {
		maxWidth: Math.ceil(t),
		maxEntryWidth: Math.ceil(n),
		maxX: Math.ceil(r),
		maxY: Math.ceil(i)
	} : void 0;
}
function Ox(e, t, n, r) {
	if (fx(e)) return jx(e, t, n);
	let i = hx(e) ? Fx(e, r) : Ix(e, r), a = e.labelOffset ?? 4, o = t == "gradient" ? (e.gradientThickness ?? 12) + gx(e) + ix + a + n.maxWidth : n.maxEntryWidth || Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5) + a + n.maxWidth;
	return Math.ceil(Math.max(kx(t, e), hx(e) ? o + i : o, i));
}
function kx(e, t) {
	return fx(t) && e == "gradient" ? (t.labelFontSize ?? 10) + (t.labelOffset ?? 4) + ix + (t.gradientThickness ?? 12) + gx(t) + 2 : 0;
}
function Ax(e, t, n, r) {
	let i = Px(e, r), a = hx(e), o = (t) => fx(e) == a ? Math.ceil(i + t) : Math.ceil(Math.max(i, t));
	if (t == "gradient") return o((e.gradientLength ?? nx) + gx(e));
	if (n) {
		let t = e.labelFontSize ?? 10;
		return o(fx(e) ? n.maxX : n.maxY + t / 2);
	} else return o(Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5));
}
function jx(e, t, n) {
	let r = e.labelFontSize ?? 10, i = e.labelOffset ?? 4, a = Nx(e), o = t == "gradient" ? r + i + ix + (e.gradientThickness ?? 12) + gx(e) + 2 : n.maxY + r / 2;
	return Math.ceil(Math.max(kx(t, e), hx(e) ? Math.max(a, o) : a + o));
}
function Mx(e) {
	return e.title ? e.titleFontSize ?? 11 : 0;
}
function Nx(e) {
	return e.title ? Mx(e) + (hx(e) ? 0 : e.titlePadding ?? 5) : 0;
}
function Px(e, t) {
	return hx(e) ? Fx(e, t) : Nx(e);
}
function Fx(e, t) {
	return e.title ? Ix(e, t) + (e.titlePadding ?? 5) : 0;
}
function Ix(e, t) {
	if (!e.title) return 0;
	let n = hu(t.textMetrics, {
		font: e.titleFont,
		fontStyle: e.titleFontStyle,
		fontWeight: e.titleFontWeight
	}), r = e.titleFontSize ?? 11;
	return gu(n, ag(e.title, e.titleLimit, (e, t) => n.measureWidth(e, t), r, "..."), r).width;
}
//#endregion
//#region ../core/src/view/gridView/gridChildLegends.js
var Lx = [
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"strokeWidth",
	"shape"
], Rx = /* @__PURE__ */ new Set([
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
]), zx = /* @__PURE__ */ new Set([
	"left",
	"right",
	"top",
	"bottom",
	...Rx
]);
function Bx(e) {
	let t = e.legendProps.orient ?? "right";
	return Rx.has(t);
}
function Vx(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.visit((e) => {
		t.has(e) || t.set(e, t.size);
	});
	return t;
}
function Hx(e) {
	return String(e.legend.title ?? e.field ?? e.channel).toLocaleLowerCase();
}
function Ux(e) {
	let t = Vx(e), n = [];
	for (let t of e) for (let e of Object.values(t.resolutions.legend)) for (let r of e.getLegendDefs()) n.push({
		definition: r,
		resolution: e,
		owner: t
	});
	return n.sort((e, n) => {
		let r = (t.get(e.definition.view) ?? 2 ** 53 - 1) - (t.get(n.definition.view) ?? 2 ** 53 - 1);
		if (r != 0) return r;
		let i = Hx(e.definition).localeCompare(Hx(n.definition));
		return i == 0 ? e.definition.channel.localeCompare(n.definition.channel) : i;
	}), n;
}
function Wx(e, t) {
	if (e && "condition" in e) {
		let n = R(e.condition);
		for (let e of n) if (m(re(k(e, t))) && "value" in e) return { value: e.value };
	}
	return P(e) ? { value: e.value } : void 0;
}
function Gx(e) {
	return typeof e == "string";
}
function Kx(e, t, n, r) {
	Gx(n.fill) && !t.has("fill") && (e.fill = { value: n.fill }), Gx(n.stroke) && !t.has("stroke") && (e.stroke = { value: n.stroke }), Gx(n.color) && !t.has("color") && (n.filled ? (t.has("fill") || (e.fill = { value: n.color }), t.has("stroke") || (e.stroke = { value: null }), !t.has("strokeWidth") && r.symbolStrokeColor === void 0 && (e.strokeWidth = { value: 0 })) : (t.has("stroke") || (e.stroke = { value: n.color }), t.has("fill") || (e.fill = { value: n.color }), !t.has("fillOpacity") && r.symbolFillColor === void 0 && (e.fillOpacity = { value: 0 })));
}
function qx(e, t) {
	return !!ze(e.spec.encoding?.[t]);
}
function Jx(e, t, n) {
	[
		"color",
		"fill",
		"stroke"
	].some((e) => !t.has(e) && qx(n, e)) && !t.has("fill") && (e.fill = { value: "black" });
}
function Yx(e, t, n, r) {
	let i = /* @__PURE__ */ new Set([e, ...Object.keys(t)]), a = {
		mark: {},
		encoding: {}
	}, o = n.mark.properties, s = a.encoding, c = a.mark;
	o.filled !== void 0 && (c.filled = o.filled), o.opacity !== void 0 && (c.opacity = o.opacity), o.fillOpacity !== void 0 && (c.fillOpacity = o.fillOpacity), o.strokeOpacity !== void 0 && (c.strokeOpacity = o.strokeOpacity), o.strokeWidth !== void 0 && (c.strokeWidth = o.strokeWidth), o.shape === void 0 ? n.getMarkType() == "rect" && (c.shape = "square") : c.shape = o.shape, Kx(s, i, o, r), Jx(s, i, n);
	let l = n.spec.encoding?.color, u = o.filled, d = Wx(l, n.spec.predicates ?? {});
	d && !i.has("color") && (u ? (s.fill = d, s.stroke = { value: null }, r.symbolStrokeColor === void 0 && (s.strokeWidth = { value: 0 })) : (s.stroke = d, s.fill = d, r.symbolFillColor === void 0 && (s.fillOpacity = { value: 0 })));
	for (let e of Lx) {
		if (e == "color" || i.has(e)) continue;
		let t = n.spec.encoding?.[e], r = Wx(t, n.spec.predicates ?? {});
		r && (s[e] = r);
	}
	return a;
}
function Xx(e) {
	if (!zx.has(e)) throw Error(`Invalid legend orientation "${e}"!`);
}
function Zx(e, t, n) {
	let r = le(t.paramRuntime, e.orient, "Reactive legend orient changes are not supported.", n);
	return r !== void 0 && Xx(r), r === e.orient ? e : {
		...e,
		orient: r
	};
}
function Qx(e, t, n, r) {
	let i = Zx(e, t, n);
	return ut(t.paramRuntime, i, (e) => {
		e.has("disable") && r();
	}, n);
}
async function $x(e, t) {
	let n = e.view, r = [], i, a = Qx(e.legend, n, (e) => r.push(e), () => {
		if (!i) throw Error("Legend has not been initialized!");
		i.invalidateSizeCache(), i.context.requestLayoutReflow();
	}), o = e.type == "symbol" ? Yx(e.channel, e.symbolChannels ?? {}, e.scaleResolution.getOrderedMembers()[0].view, a) : void 0;
	i = new Ex({
		channel: e.channel,
		type: e.type,
		symbolChannels: e.symbolChannels,
		symbolGeometry: e.symbolGeometry,
		symbolStyle: o,
		legend: a,
		format: e.format,
		dataType: e.dataType
	}, t.context, t, n);
	for (let e of r) i.registerDisposer(e);
	return await i.initializeChildren(), i;
}
async function eS(e, t, n) {
	let r = t.legendProps.orient ?? "right", i = e[r];
	if (!i) {
		let { anchor: n, direction: a, wrap: o } = yp(t.layoutParent.getConfigScopes(), r), s = new Cx(r, n, a, o, t.legendProps.spacing ?? 0, t.context, t.layoutParent, t.dataParent);
		await s.initializeChildren(), i = {
			legendView: s,
			entries: []
		}, e[r] = i;
	}
	t.setActivePredicate(() => !t.legendProps.disable && n.hasVisibleNonChromeMember()), i.legendView.addLegendView(t), i.entries.push({
		legendView: t,
		resolution: n
	});
}
function* tS(e) {
	for (let t of Object.values(e)) yield t.legendView;
}
function nS(e, t, n) {
	let r = !1;
	for (let i of tS(e)) {
		let e = i.prepareLayoutSize(t, n);
		r ||= e;
	}
	return r;
}
function rS(e) {
	for (let t of tS(e)) t.disposeSubtree();
}
function iS(e, t) {
	let n = e[t];
	return n && oS(n) ? xx(n.legendView) : 0;
}
function aS(e) {
	return e.resolution.hasVisibleNonChromeMember();
}
function oS(e) {
	return e.entries.some(aS);
}
//#endregion
//#region ../core/src/view/gridView/legendCollection.js
function sS(e) {
	return cS(e.getDescendants());
}
function cS(e) {
	return e.filter((e) => !Zn(e) && Object.keys(e.resolutions.legend).length > 0);
}
function lS(e, t) {
	for (let n of e.getDataAncestors()) {
		let e = n.getConfiguredResolution(t, "legend") ?? n.getConfiguredResolution("default", "legend");
		if (e == "excluded") return;
		if (e == "collected") return n;
	}
}
//#endregion
//#region ../core/src/ruler/rulerDisabled.js
function uS(e) {
	let { config: t, paramRuntime: n, paramName: r, channels: i } = e, a = I(t.disabled) ? n.createExpression(t.disabled.expr) : pt(t.disabled ?? !1), o = () => {
		let t = e.disabled;
		e.disabled = !!a(), e.disabled && !t && n.setValue(r, M(i));
	}, s = a.subscribe(o);
	return o(), s;
}
//#endregion
//#region ../core/src/view/scaleProjection.js
function dS(e, t) {
	return t.length === 1 && (ey(e.spec) && t[0] === "x" || ty(e.spec) && t[0] === "y");
}
function fS(e, t, n, r) {
	let i = e.getOrderedMembers().filter(({ view: e }) => !Fn(e) && !e.getLayoutAncestors().some((e) => e.layoutParent instanceof hC && e.layoutParent.getAnnotationLayer() === e) && e.isVisible() && (!r || e.getLayoutAncestors().includes(r))).map(({ view: e }) => e.coords).filter((e) => e !== void 0 && e.width > 0 && e.height > 0);
	if (i.length === 0) return n;
	let a = Math.min(...i.map((e) => t === "x" ? e.x : e.y)), o = Math.max(...i.map((e) => t === "x" ? e.x2 : e.y2));
	return t === "x" ? n.modify({
		x: a,
		width: o - a
	}) : n.modify({
		y: a,
		height: o - a
	});
}
function pS(e, t, n) {
	return dS(e, t) && e instanceof hC ? e.getTrackPlotGeometry(n)?.content ?? e.coords : e.coords;
}
//#endregion
//#region ../core/src/view/viewInteractionListenerTracker.js
var mS = class {
	constructor(e) {
		this.view = e;
	}
	view;
	#e = [];
	add(e, t, n) {
		this.view.addInteractionListener(e, t, n), this.#e.push({
			type: e,
			listener: t,
			capture: n
		});
	}
	dispose() {
		for (let { type: e, listener: t, capture: n } of this.#e) this.view.removeInteractionListener(e, t, n);
		this.#e = [];
	}
};
//#endregion
//#region ../core/src/ruler/rulerCoordinate.js
function hS(e, t) {
	return t === "integer" ? !0 : t === "auto" ? e === "index" || e === "locus" : !1;
}
function gS(e, t, n = "auto") {
	if (e == null) return null;
	let r = t.getResolvedScaleType(), i = hS(r, n) ? Math.round(e) : e;
	return r === "locus" && t.toComplex ? t.toComplex(i) : i;
}
//#endregion
//#region ../core/src/ruler/rulerMouseEventController.js
var _S = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.#e = new mS(e.view), this.eventConfig = x(n.on ?? "mousemove"), _e(this.eventConfig, ["mousemove", "mousedown"], `Ruler param "${t}" currently supports only "mousemove" and "mousedown" in "on".`), this.eventPredicate = ye(this.eventConfig), this.clear = n.clear ?? (this.eventConfig.type === "mousemove" && "mouseleave"), this.disposeDisabled = uS(this), this.#r();
	}
	#e;
	eventConfig;
	eventPredicate;
	clear;
	disabled = !1;
	dragging = !1;
	#t = () => !1;
	#n(e, t, n) {
		this.#e.add(e, (e) => {
			this.disabled || t(e);
		}, n);
	}
	dispose() {
		this.#t(), this.disposeDisabled(), this.#e.dispose();
	}
	#r() {
		this.eventConfig.type === "mousemove" ? this.#i() : this.#a();
	}
	#i() {
		if (this.#n("mousemove", (e) => {
			this.eventPredicate(e.proxiedMouseEvent) && this.#s(this.#o(e.point));
		}), this.clear === "mouseleave") this.#n("mouseleave", () => {
			this.#s(M(this.channels));
		});
		else if (this.clear !== !1) throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave" or false in "clear" for mousemove rulers.`);
	}
	#a() {
		if (this.#n("mousedown", (e) => {
			if (e.mouseEvent.button !== 0 || !this.eventPredicate(e.proxiedMouseEvent)) return;
			e.stopPropagation(), this.dragging = !0, this.#s(this.#o(e.point));
			let t = Z.fromMouseEvent(e.mouseEvent).subtract(new Z(e.point.x, e.point.y)), n = (e) => {
				let n = Z.fromMouseEvent(e).subtract(t);
				this.#s(this.#o(n));
			};
			this.#t = Xy({
				onMove: n,
				onFinish: () => {
					this.dragging = !1;
				},
				onRelease: () => {
					this.clear === "mouseup" && this.#s(M(this.channels));
				}
			});
		}), this.clear === "mouseleave") this.#n("mouseleave", () => {
			this.dragging || this.#s(M(this.channels));
		});
		else if (this.clear !== !1 && this.clear !== "mouseup") throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave", "mouseup", or false in "clear" for mousedown rulers.`);
	}
	#o(e) {
		let t = M(this.channels), n = pS(this.gridChild.view, this.channels, this.channels[0]).normalizePoint(e.x, e.y, !0);
		for (let e of this.channels) {
			let r = this.scaleResolutions[e], i = r.getScale().invert(e === "x" ? n.x : n.y);
			t.values[e] = gS(i, r, this.config.snap ?? "auto");
		}
		return t;
	}
	#s(e) {
		this.disabled || this.paramRuntime.setValue(this.paramName, e);
	}
}, vS = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		if (n.on !== void 0) throw Error(`Ruler param "${t}" with source "viewport" must not define "on".`);
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.listeners = [], this.disposeDisabled = uS(this), this.update(), this.#e();
	}
	listeners;
	disabled = !1;
	#e() {
		for (let e of this.channels) {
			let t = this.scaleResolutions[e], n = () => this.update();
			t.addEventListener("domain", n), t.addEventListener("range", n), this.listeners.push({
				scaleResolution: t,
				type: "domain",
				listener: n
			}, {
				scaleResolution: t,
				type: "range",
				listener: n
			});
		}
	}
	dispose() {
		this.disposeDisabled();
		for (let { scaleResolution: e, type: t, listener: n } of this.listeners) e.removeEventListener(t, n);
		this.listeners = [];
	}
	update() {
		if (this.disabled) return;
		let e = M(this.channels);
		for (let t of this.channels) {
			let n = this.scaleResolutions[t], r = n.getScale().invert(.5);
			e.values[t] = gS(r, n, this.config.snap ?? "auto");
		}
		this.paramRuntime.setValue(this.paramName, e);
	}
};
//#endregion
//#region ../core/src/view/gridView/generatedChromeOverlay.js
function yS(e) {
	U(e, { skipSubtree: !0 }), Hn(e, { skipSubtree: !0 });
}
function bS({ spec: e, context: t, layoutParent: n, dataParent: r, name: i, zindex: a = 1 }) {
	let o = new X(e, t, n, r, i);
	return yS(o), {
		view: o,
		zindex: a
	};
}
//#endregion
//#region ../core/src/view/gridView/rulerOverlay.js
function xS({ paramName: e, channels: t, display: n = "line", mark: r = {} }) {
	let { opacity: i, ...a } = r, o = {
		name: "rulerOverlay_" + e,
		domainInert: !0,
		opacity: i ?? (n === "band" ? 1 : .8),
		resolve: {
			scale: {
				x: "forced",
				y: "forced"
			},
			axis: {
				x: "excluded",
				y: "excluded"
			}
		},
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: ES(e, t)
		}],
		encoding: {},
		layer: []
	};
	if (n === "band") {
		let n = o.encoding;
		for (let r of t) o.encoding[r] = TS(DS(e, r)), n[r + "2"] = TS(OS(e, r));
		o.layer.push({
			name: "rulerOverlayBand",
			mark: {
				type: "rect",
				clip: !0,
				fill: "black",
				fillOpacity: .15,
				stroke: "black",
				strokeWidth: 1,
				opacity: 1,
				...a,
				tooltip: null
			}
		});
	} else for (let r of t) {
		let i = TS(DS(e, r));
		n === "center" && (i.band = .5);
		let s = {
			name: "rulerOverlayRule" + r.toUpperCase(),
			mark: {
				type: "rule",
				clip: !0,
				color: a.stroke ?? "black",
				size: a.strokeWidth ?? 1,
				strokeDash: a.strokeDash,
				opacity: 1,
				tooltip: null
			}
		};
		t.length === 1 ? o.encoding[r] = i : s.encoding = { [r]: i }, o.layer.push(s);
	}
	return o;
}
function SS({ paramName: e, channels: t, display: n, mark: r, context: i, layoutParent: a, dataParent: o, name: s, expressionRuntime: c }) {
	let l = /* @__PURE__ */ new Map(), u = bS({
		spec: xS({
			paramName: e,
			channels: t,
			display: n,
			mark: Object.fromEntries(Object.entries(r ?? {}).map(([t, n]) => {
				if (I(n)) {
					let r = "__ruler_" + e + "_" + t;
					return l.set(r, n.expr), [t, { expr: r }];
				} else return [t, n];
			}))
		}),
		context: i,
		layoutParent: a,
		dataParent: o,
		name: s,
		zindex: r?.zindex ?? 1
	});
	for (let [e, t] of l) u.view.paramRuntime.registerScopedExpression(e, t, c);
	return u;
}
function CS({ config: e, scaleResolution: t, ...n }) {
	return SS({
		...n,
		display: wS(t.getResolvedScaleType(), e.snap, e.display),
		mark: e.mark
	});
}
function wS(e, t, n) {
	return n || ((e === "index" || e === "locus") && (t === void 0 || t === "auto" || t === "integer") ? "center" : "line");
}
function TS(e) {
	return {
		datum: { expr: e },
		axis: null,
		type: null,
		title: null
	};
}
function ES(e, t) {
	return [e + ".type === 'ruler'", ...t.map((t) => e + ".values." + t + " != null")].join(" && ");
}
function DS(e, t) {
	return `linearize('${t}', ${e}.values.${t})`;
}
function OS(e, t) {
	return DS(e, t) + " + 1";
}
//#endregion
//#region ../core/src/view/gridView/selectionRectSpec.js
var kS = "intervalDragActive";
function AS({ scaleResolutionSource: e, selectionExpression: t, selection: n, channels: r = Object.keys(n.intervals), brushConfig: i = {} }) {
	let a = { ...i };
	if (delete a.zindex, d.every((e) => !r.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
	let o = r.includes("x") ? r.includes("y") ? !0 : "x" : "y", s = {
		name: "selectionRect",
		domainInert: !0,
		params: [{
			name: kS,
			value: !1
		}],
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: jS(t, r)
		}],
		encoding: {},
		layer: []
	};
	r.includes("x") && (s.encoding.x = MS(e, t, "x", 0), s.encoding.x2 = MS(e, t, "x", 1)), r.includes("y") && (s.encoding.y = MS(e, t, "y", 0), s.encoding.y2 = MS(e, t, "y", 1)), s.layer.push({
		name: "selectionRectRect",
		mark: {
			type: "rect",
			clip: o,
			fill: "#808080",
			fillOpacity: .05,
			stroke: "black",
			strokeWidth: 1,
			strokeOpacity: .2,
			cursor: a.cursor ?? { expr: "intervalDragActive ? 'grabbing' : 'move'" },
			...a
		}
	});
	let c = (n) => {
		let r = e.getScaleResolution(n);
		return `format(${t}.intervals.${n}[1] - ${t}.intervals.${n}[0], '.3s')` + (r.type === "locus" ? " + 'b'" : "");
	}, l = i.measure == "inside" ? 9 : i.measure == "outside" ? -9 : 0;
	return r.includes("x") && l != 0 && s.layer.push({
		name: "selectionRectTextX",
		mark: {
			type: "text",
			align: "center",
			paddingX: 5,
			dy: l,
			tooltip: null
		},
		encoding: {
			text: { expr: c("x") },
			y: r.includes("y") ? MS(e, t, "y", 1) : { value: 1 },
			y2: null
		}
	}), r.includes("y") && l != 0 && s.layer.push({
		name: "selectionRectTextY",
		mark: {
			type: "text",
			align: "center",
			paddingY: 5,
			dy: l,
			tooltip: null,
			angle: -90
		},
		encoding: {
			text: { expr: c("y") },
			x2: null
		}
	}), s;
}
function jS(e, t) {
	return [e + ".type === 'interval'", ...t.map((t) => e + ".intervals." + t + " != null")].join(" && ");
}
function MS(e, t, n, r) {
	return {
		datum: { expr: NS(t, n, r) },
		type: e.getScaleResolution(n).type,
		title: null,
		axis: null
	};
}
function NS(e, t, n) {
	let r = `${e}.intervals.${t}`;
	return `(${r} != null ? ${r}[${n}] : 0)`;
}
//#endregion
//#region ../core/src/view/gridView/selectionRect.js
function PS({ selectionExpr: e, selectionExpression: t, channels: n, brushConfig: r = {}, context: i, layoutParent: a, dataParent: o, scaleResolutionSource: s, name: c = "selectionRect" }) {
	let l = e() ?? Be(n), { zindex: u = 1, ...d } = r;
	return bS({
		spec: AS({
			scaleResolutionSource: s,
			selectionExpression: t,
			selection: l,
			channels: n,
			brushConfig: d
		}),
		context: i,
		layoutParent: a,
		dataParent: o,
		name: c,
		zindex: u
	});
}
//#endregion
//#region ../core/src/view/gridView/intervalSelectionController.js
var FS = class {
	constructor(e, t, n, r, i = e.view.paramRuntime, a = !0, o) {
		this.host = e, this.#i = t, this.#a = i, this.#e = new mS(e.view), this.#l(t, n, r, i, a, o), this.#r = i.registerSelectionController(t, this);
	}
	host;
	#e;
	#t = () => !1;
	#n = () => !1;
	#r = () => {};
	#i;
	#a;
	#o;
	#s = /* @__PURE__ */ new Set();
	#c(e, t, n = this.host.captureInteractions) {
		this.#e.add(e, t, n);
	}
	dispose() {
		this.#t(), this.#r(), this.#e.dispose(), this.#s.clear();
	}
	contains(e) {
		return this.#n(e);
	}
	getComplexIntervals(e) {
		return Object.fromEntries(Object.entries(e).map(([e, t]) => {
			let n = e;
			return [n, t ? [this.#o[n].toComplex(t[0]), this.#o[n].toComplex(t[1])] : null];
		}));
	}
	subscribeCommit(e) {
		let t = { listener: e };
		return this.#s.add(t), () => this.#s.delete(t);
	}
	clear() {
		this.#t(), this.#u();
	}
	#l(e, t, n, r, i, a) {
		let o = this.host.view, s = n.encodings ?? ["x"], c = Object.fromEntries(s.map((t) => {
			let n = o.getScaleResolution(t), r = n?.getResolvedScaleType();
			if (!n || !r || !B(r)) throw Error(`No continuous scale found for interval selection param "${e}" on channel "${t}"! Scale type is "${r ?? "none"}".`);
			return [t, n];
		}));
		this.#o = c;
		let l = s.some((e) => c[e].isZoomable()), u = n.on ?? (l ? {
			type: "mousedown",
			filter: "event.shiftKey"
		} : { type: "mousedown" });
		if (u.type !== "mousedown") throw Error(`Interval selection param "${e}" currently supports only "mousedown" in "on".`);
		let d = ye(u), f = IS(n.zoom, l, e), p = ye(f), m = n.clear, h = ye(m), g = !1, _, y = null, b = (e, t) => Object.fromEntries(s.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), x = r.createExpression(e), S = (t) => {
			r.setValue(e, t);
		};
		t.value && S({
			type: "interval",
			intervals: t.value
		});
		let T = () => {
			v(x()) && S(Be(s));
		};
		this.#u = T;
		let E = (e) => this.host.getInteractionCoords()?.containsPoint(e.x, e.y) ?? !1, D = (t) => this.host.ownsInteraction?.(e, t) ?? !0, O = a;
		if (i) {
			if (!this.host.getSelectionRect || !this.host.setSelectionRect) throw Error("Interval selection hosts must provide a selection rectangle.");
			if (this.host.getSelectionRect()) throw Error("Only one interval selection per container is currently allowed!");
			O = PS({
				selectionExpr: x,
				selectionExpression: e,
				channels: s,
				brushConfig: n.mark,
				context: this.host.context,
				layoutParent: this.host.layoutParent,
				dataParent: o,
				scaleResolutionSource: o
			}), this.host.setSelectionRect(O);
		}
		let k = O ? (e) => {
			O.view.paramRuntime.setValue(kS, e);
		} : () => {}, A = (e) => {
			let t = {
				x: 0,
				y: 0
			}, n = this.host.getProjectionCoords(s[0]).normalizePoint(e.x, e.y, !0);
			for (let e of s) {
				let r = c[e].getScale();
				t[e] = r.invert(e === "x" ? n.x : n.y) + (["index", "locus"].includes(r.type) ? .5 : 0);
			}
			return t;
		}, j = (e) => {
			let { intervals: t } = e, n = this.host.getProjectionCoords(s[0]), r = (e) => {
				let r = (n) => {
					let r = t[n]?.[e];
					return r == null ? e : c[n].getScale()(r);
				};
				return n.denormalizePoint(r("x"), r("y"), !0);
			}, i = r(0), a = r(1);
			return W.create(i.x, i.y, a.x - i.x, a.y - i.y);
		};
		this.#c("mousedown", (e) => {
			if (e.mouseEvent.button != 0 || !E(e.point) || !D(e.point)) return;
			let t = x();
			_ = void 0;
			let n = v(t) && C(t, A(e.point)) ? j(t) : null;
			if (n) g = !0;
			else {
				let n = e.point;
				if (v(x()) && (g = !0), !d(e.proxiedMouseEvent)) {
					if (!m || !v(t)) return;
					_ = n;
					return;
				}
			}
			e.stopPropagation();
			let r = {
				start: e.point,
				translatedRectangle: n
			};
			y = r, k(!!n), n || T();
			let i = Z.fromMouseEvent(e.mouseEvent).subtract(r.start), a = (e) => {
				let t = Z.fromMouseEvent(e).subtract(i), n;
				if (r.translatedRectangle) {
					let e = t.subtract(r.start), i = r.translatedRectangle.translate(e.x, e.y);
					n = b(A(new Z(i.x, i.y)), A(new Z(i.x2, i.y2)));
				} else n = b(A(r.start), A(t));
				for (let e of s) {
					let t = c[e], { zoomExtent: i } = t, a = r.translatedRectangle ? w(n[e], i[0], i[1]) : n[e];
					n[e] = LS(t, a) ?? [i[0], i[0]];
				}
				S({
					type: "interval",
					intervals: n
				});
			};
			this.#t = Xy({
				onMove: a,
				hoverContext: o.context,
				onFinish: () => {
					y = null, k(!1);
				},
				onRelease: () => this.#d()
			});
		}), this.#e.add("mouseup", (e) => {
			if (!_) return;
			let t = _;
			_ = void 0, t.subtract(e.point).length < 2 && T();
		}), this.#c("click", (e) => {
			e.mouseEvent.button == 0 && (g &&= (e.stopPropagation(), !1));
		}, !0);
		let ee = (e) => C(x(), A(e));
		this.#n = (e) => E(e) && D(e) && v(x()) && ee(e), m && this.#c(m.type, (e) => {
			h(e.proxiedMouseEvent) && E(e.point) && D(e.point) && ee(e.point) && (T(), e.stopPropagation());
		}, !0), this.#c("wheel", (e) => {
			let t = e.wheelEvent;
			if (!f || !p(Yy(t)) || !E(e.point) || !D(e.point) || Math.abs(t.deltaX) >= Math.abs(t.deltaY) || !ee(e.point)) return;
			let n = x();
			if (!v(n)) return;
			let r = t.deltaMode ? 120 : 1, i = 2 ** (t.deltaY * r / 300), a = A(e.point), o = { ...n.intervals }, l = !1;
			for (let e of s) {
				let t = o[e];
				if (!t || t.length !== 2) continue;
				let n = c[e], r = LS(n, ep(n.getScale(), [...t], a[e], i, { onUnsupported: "identity" }));
				r && (r[0] !== t[0] || r[1] !== t[1]) && (o[e] = r, l = !0);
			}
			l && (S({
				...n,
				type: "interval",
				intervals: o
			}), t.preventDefault(), e.stopPropagation());
		});
		let M = r.getParamRef(e);
		this.host.view.registerDisposer(r.effect([M], () => {
			y || this.#d();
		}));
	}
	#u = () => {};
	#d() {
		let e = this.#a.getValue(this.#i);
		for (let t of [...this.#s]) try {
			t.listener(e);
		} catch (e) {
			console.error(e);
		}
	}
};
function IS(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = x(r);
	return _e(i, ["wheel"], `Interval selection param "${n}" currently supports only "wheel" in "zoom".`), i;
}
function LS(e, t) {
	let n = e.getScale();
	return Lu(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
//#endregion
//#region ../core/src/view/gridView/overlayExtent.js
function RS({ extent: e, ownerSpec: t, channels: n, isAligned: r, label: i }) {
	let a = n.length === 1 ? n[0] : void 0;
	if (!a) {
		if (e === "container") throw Error(`${i} cannot use extent "container" for multiple channels.`);
		return "view";
	}
	let o = e ?? "auto";
	if (!(o === "container" || o === "auto")) return "view";
	if (!(a === "x" && ey(t) || a === "y" && ty(t))) {
		if (o === "container") throw Error(`${i} cannot use extent "container" for channel "${a}" in this view.`);
		return "view";
	}
	if (!r(a)) {
		if (o === "container") throw Error(`${i} cannot use extent "container" because its ${a} projections do not align.`);
		return "view";
	}
	return "container";
}
//#endregion
//#region ../core/src/view/gridView/gridChild.js
function zS(e) {
	return Zn(e) ? [] : e instanceof J ? Object.keys(e.resolutions.legend).length > 0 ? [e] : [] : e instanceof X ? [...Object.keys(e.resolutions.legend).length > 0 ? [e] : [], ...Array.from(e).flatMap((e) => zS(e))] : [];
}
function BS(e) {
	return ey(e) || ty(e) || ny(e);
}
function VS(e, t) {
	if (!dS(e, t)) return !1;
	let n = t[0], r = e.getScaleResolution(n);
	return r !== void 0 && e.children.every((e) => e.getScaleResolution(n) === r);
}
function HS(e, t, n, r) {
	if (!e) return;
	let i = new J(e, t.context, t, n, r);
	return U(i, { skipSubtree: !0 }), Hn(i, { skipSubtree: !0 }), i;
}
var US = class {
	#e = [];
	#t = [];
	#n = [];
	#r;
	#i = !1;
	constructor(e, t, n) {
		this.layoutParent = t, this.view = e, this.#r = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {}, this.scrollbars = {}, this.selectionRect = void 0, this.rulerOverlays = [], this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.coords = W.ZERO, this.plotCoords = W.ZERO;
		let r = e.needsAxes.x || e.needsAxes.y, i = e.getParentGridChromePolicy(), a = e.spec, o = "view" in a ? a.view : void 0;
		if (i.background && (r || o)) {
			let r = Jb(e.getConfigScopes(), o);
			this.backgroundZindex = r?.zindex ?? 0, this.backgroundStrokeZindex = r?.strokeZindex, this.background = HS(WS(r), t, e, "background" + n), this.backgroundStroke = HS(GS(r), t, e, "backgroundStroke" + n);
		}
		this.title = e.spec.title ? Kb.create(e.spec.title, e.getConfigScopes(), t.context, t, e, "title" + n) : void 0, e.spec.viewportWidth != null && (this.scrollbars.horizontal = new qb(this, "horizontal")), e.spec.viewportHeight != null && (this.scrollbars.vertical = new qb(this, "vertical")), Zn(e) || (this.#u(), this.#a());
	}
	#a() {
		for (let { owner: e, paramName: t, param: n } of this.#o()) {
			if (!gt(n)) continue;
			let r = n.ruler, i = r.encodings ?? ["x"];
			if (BS(this.view.spec) && (r.source === "viewport" || e !== this.view || !VS(this.view, i))) continue;
			let a = this.#l(t, i);
			r.source === "viewport" ? this.#n.push(new vS(this, t, r, i, a, e.paramRuntime)) : this.#t.push(new _S(this, t, r, i, a, e.paramRuntime)), r.display !== "none" && (this.#s(e, i, r.extent, `Ruler param "${t}"`) || this.rulerOverlays.push(CS({
				paramName: t,
				channels: i,
				config: r,
				scaleResolution: a[i[0]],
				context: this.layoutParent.context,
				layoutParent: this.layoutParent,
				dataParent: this.view,
				name: "rulerOverlay" + this.#r + "_" + t,
				expressionRuntime: e.paramRuntime
			})));
		}
	}
	*#o() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.view.getDataAncestors()) for (let [n, r] of t.paramRuntime.paramConfigs) e.has(n) || (e.add(n), yield {
			owner: t,
			paramName: n,
			param: r
		});
	}
	#s(e, t, n, r) {
		return RS({
			extent: n,
			ownerSpec: e.spec,
			channels: t,
			isAligned: (t) => e.getScaleResolution?.(t) === this.view.getScaleResolution(t),
			label: r
		}) === "container";
	}
	async #c() {
		if (!this.#i) {
			let e = [...this.selectionRect ? [this.selectionRect] : [], ...this.rulerOverlays];
			await Promise.all(e.map((e) => e.view.initializeChildren())), this.#i = !0;
		}
	}
	#l(e, t) {
		return Object.fromEntries(t.map((t) => {
			let n = this.view.getScaleResolution(t);
			if (!n?.getResolvedScaleType?.()) throw Error(`No scale found for ruler param "${e}" on channel "${t}".`);
			return [t, n];
		}));
	}
	#u() {
		for (let { owner: e, paramName: t, param: n } of this.#o()) {
			if (!("select" in n)) continue;
			let r = Ve(n.select);
			if (!ae(r) || e === this.view && BS(e.spec)) continue;
			let i = r.encodings ?? ["x"];
			this.#s(e, i, r.extent, `Interval selection param "${t}"`) || this.#e.push(new FS(this, t, n, r, e.paramRuntime, !0));
		}
	}
	get context() {
		return this.layoutParent.context;
	}
	getInteractionCoords() {
		return this.coords.width > 0 && this.coords.height > 0 ? this.coords : this.view.coords;
	}
	getProjectionCoords() {
		return this.view.coords;
	}
	getSelectionRect() {
		return this.selectionRect;
	}
	setSelectionRect(e) {
		this.selectionRect = e;
	}
	*getChildren() {
		this.background && (yield this.background), this.backgroundStroke && (yield this.backgroundStroke), this.title && (yield this.title);
		for (let e of this.axisCandidates) yield e.axisView;
		yield* tS(this.legends), yield* Object.values(this.gridLines), yield this.view, yield* Object.values(this.scrollbars), this.selectionRect && (yield this.selectionRect.view);
		for (let e of this.rulerOverlays) yield e.view;
	}
	async syncGuideViews(e = {}) {
		this.#d(), await this.#c();
		let { view: t, axes: n, gridLines: r } = this, i = t.getParentGridChromePolicy(), a = (e, t) => {
			let r = e.getAxisProps();
			if (r === null) return;
			let i = r ? { ...r } : {};
			if (!i.orient) {
				for (let e of xy[t]) if (!n[e]) {
					i.orient = e;
					break;
				}
				if (!i.orient) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			}
			if (i.title === void 0 && (i.title = e.getTitle()), !xy[t].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${t}"!`);
			return i;
		}, o = async (e, r, i) => {
			let o = a(e, r);
			if (o) {
				if (n[o.orient] && !this.allowDuplicateAxes()) throw Error(`An axis with the orient "${o.orient}" already exists!`);
				let a = new Dy(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i, { labelClipPolicy: this.getAxisLabelClipPolicy(r, t) });
				n[o.orient] ??= a, this.axisCandidates.push({
					axisView: a,
					channel: r,
					orient: o.orient,
					resolution: e
				}), await a.initializeChildren();
			}
		}, s = async (e, t, n) => {
			let i = a(e, t);
			if (!i) return;
			let o = {
				...sy(n.getConfigScopes(), {
					channel: t,
					orient: i.orient,
					type: e.scaleResolution.type,
					style: i.style
				}),
				...i
			};
			if (o.grid || o.chromGrid) {
				let t = new pb(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, n);
				r[i.orient] = t, await t.initializeChildren();
			}
		};
		if (i.axes) {
			for (let e of d) if (t.needsAxes[e]) {
				let n = t.resolutions.axis[e];
				if (!n) continue;
				await o(n, e, t);
			}
			for (let e of d) if (t.needsAxes[e] && t.getConfiguredOrDefaultResolution(e, "axis") != "excluded") {
				let n = t.getAxisResolution(e);
				if (!n) continue;
				await s(n, e, t);
			}
			if (t instanceof X) {
				for (let e of t) for (let [t, n] of Object.entries(e.resolutions.axis)) {
					let r = n.getAxisProps();
					r && r.orient && await o(n, t, e);
				}
				for (let e of t) for (let [t, n] of Object.entries(e.resolutions.axis)) {
					let r = n.getAxisProps();
					r && !r.orient && await o(n, t, e);
				}
			}
		}
		for (let { definition: n, resolution: r, owner: i } of Ux(e.legendOwners ?? zS(t))) {
			if (lS(i, r.channel) !== void 0) continue;
			let t = await $x(n, this.layoutParent);
			if (e.legendFilter && !e.legendFilter(t, i)) {
				t.disposeSubtree();
				continue;
			}
			await eS(this.legends, t, r);
		}
		[
			...this.axisCandidates.map((e) => e.axisView),
			...Object.values(r),
			...tS(this.legends)
		].forEach((e) => e.visit((e) => {
			e instanceof J && e.resolve("scale");
		}));
	}
	allowDuplicateAxes() {
		return !1;
	}
	getActiveAxisCandidate(e) {
		return this.axisCandidates.filter((t) => t.orient === e && t.resolution.isVisible()).at(-1);
	}
	dispose() {
		for (let e of [
			this.#e,
			this.#n,
			this.#t
		]) for (let t of e) t.dispose();
		this.#e = [], this.#n = [], this.#t = [], this.#d();
	}
	#d() {
		for (let e of this.axisCandidates) e.axisView.disposeSubtree();
		for (let e of Object.values(this.gridLines)) e.disposeSubtree();
		rS(this.legends), this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {};
	}
	getAxisLabelClipPolicy(e, t) {
		return t.options.axisLabelClipPolicy?.[e] || (e === "x" && (t.spec.viewportWidth != null || this.layoutParent.spec.viewportWidth != null) || e === "y" && (t.spec.viewportHeight != null || this.layoutParent.spec.viewportHeight != null) ? "anchor" : "pixel");
	}
	getOverhang() {
		return Jn(this.#f().add(this.title?.getOverhang() ?? Mn.zero()).add(this.view.getOverhang()), this.view.spec.overhang);
	}
	prepareLegendLayoutSize(e, t) {
		return nS(this.legends, e, t);
	}
	getViewOverhang() {
		return Jn(this.view.getOverhang(), this.view.spec.overhang);
	}
	#f() {
		let e = (e) => Ey(this.axes[e]), t = (e) => iS(this.legends, e);
		return new Mn(e("top") + t("top"), e("right") + t("right"), e("bottom") + t("bottom"), e("left") + t("left"));
	}
	getTitleZindex() {
		return this.title?.titleSpec.zindex ?? 1;
	}
	arrangeTitle(e, t, n) {
		this.title?.arrange(e, this.#p(t), n);
	}
	#p(e) {
		let t = this.title?.titleSpec;
		if (!t) return e;
		let n = e.expand(this.#f()), r = t.frame ?? "group";
		if (t.reserve === !1) return r == "bounds" ? n : e;
		if (r == "bounds") return n;
		switch (t.orient) {
			case "top":
			case "bottom": return n.modify({
				x: () => e.x,
				width: () => e.width
			});
			case "left":
			case "right": return n.modify({
				y: () => e.y,
				height: () => e.height
			});
			default: return e;
		}
	}
	getOverhangAndPadding() {
		return this.getOverhang().add(this.view.getPadding());
	}
};
function WS(e) {
	let t = e?.fillOpacity ?? +!!e?.fill, n = e?.shadowOpacity ?? 0;
	if (e?.fill && t !== 0 || n !== 0) return {
		data: { values: [{}] },
		mark: {
			color: e.fill,
			opacity: t,
			type: "rect",
			clip: !1,
			tooltip: null,
			minHeight: 1,
			minOpacity: 0,
			shadowBlur: e.shadowBlur,
			shadowColor: e.shadowColor,
			shadowOffsetX: e.shadowOffsetX,
			shadowOffsetY: e.shadowOffsetY,
			shadowOpacity: e.shadowOpacity
		}
	};
}
function GS(e) {
	if (!(!e || !e.stroke || e.strokeWidth === 0 || e.strokeOpacity === 0)) return {
		resolve: {
			scale: {
				x: "excluded",
				y: "excluded"
			},
			axis: {
				x: "excluded",
				y: "excluded"
			}
		},
		data: { values: [
			{
				x: 0,
				y: 0,
				x2: 1,
				y2: 0
			},
			{
				x: 1,
				y: 0,
				x2: 1,
				y2: 1
			},
			{
				x: 1,
				y: 1,
				x2: 0,
				y2: 1
			},
			{
				x: 0,
				y: 1,
				x2: 0,
				y2: 0
			}
		] },
		mark: {
			size: e.strokeWidth ?? 1,
			color: e.stroke ?? "lightgray",
			strokeCap: "square",
			opacity: e.strokeOpacity ?? 1,
			type: "rule",
			clip: "never",
			tooltip: null
		},
		encoding: {
			x: {
				field: "x",
				type: "quantitative",
				scale: null
			},
			y: {
				field: "y",
				type: "quantitative",
				scale: null
			},
			x2: { field: "x2" },
			y2: { field: "y2" }
		}
	};
}
//#endregion
//#region ../core/src/utils/keyboardZoomMotion.js
var KS = {
	pan: {
		baseSpeed: 1,
		maxExtraSpeed: 3,
		pressHalfLifeMs: 30,
		releaseHalfLifeMs: 100,
		holdGrowthHalfLifeMs: 800,
		stopVelocity: .01
	},
	zoom: {
		baseSpeed: 3,
		maxExtraSpeed: 15,
		pressHalfLifeMs: 10,
		releaseHalfLifeMs: 100,
		holdGrowthHalfLifeMs: 600,
		stopVelocity: .01
	}
}, qS = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = KS) {
		this.#r = e.pan, this.#i = e.zoom, this.#e = {
			KeyW: !1,
			KeyA: !1,
			KeyS: !1,
			KeyD: !1
		}, this.#t = {
			velocity: 0,
			holdMs: 0,
			direction: 0
		}, this.#n = {
			velocity: 0,
			holdMs: 0,
			direction: 0
		};
	}
	isNavigationKey(e) {
		return e === "KeyW" || e === "KeyA" || e === "KeyS" || e === "KeyD";
	}
	handleKeyDown(e) {
		return this.#a(e, !0);
	}
	handleKeyUp(e) {
		return this.#a(e, !1);
	}
	reset() {
		this.#e.KeyW = !1, this.#e.KeyA = !1, this.#e.KeyS = !1, this.#e.KeyD = !1, this.#t.velocity = 0, this.#t.holdMs = 0, this.#t.direction = 0, this.#n.velocity = 0, this.#n.holdMs = 0, this.#n.direction = 0;
	}
	step(e) {
		if (e <= 0) return {
			panDelta: 0,
			zoomDelta: 0,
			active: this.isActive()
		};
		{
			let t = JS(this.#e.KeyD, this.#e.KeyA), n = JS(this.#e.KeyW, this.#e.KeyS), r = YS(this.#t, t, e, this.#r), i = YS(this.#n, n, e, this.#i), a = e / 1e3;
			return {
				panDelta: r * a,
				zoomDelta: i * a,
				active: this.isActive()
			};
		}
	}
	isActive() {
		return this.#e.KeyW || this.#e.KeyA || this.#e.KeyS || this.#e.KeyD ? !0 : this.#t.velocity !== 0 || this.#n.velocity !== 0;
	}
	#a(e, t) {
		if (this.isNavigationKey(e)) {
			let n = e;
			return this.#e[n] === t ? !1 : (this.#e[n] = t, !0);
		} else return !1;
	}
};
function JS(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function YS(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = XS(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = XS(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function XS(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region ../core/src/view/gridView/zoomNavigationUtils.js
function ZS(e) {
	let t = {
		x: /* @__PURE__ */ new Set(),
		y: /* @__PURE__ */ new Set()
	};
	return e.visit((e) => {
		for (let [n, r] of Object.entries(t)) {
			let t = e.getScaleResolution(n);
			t && t.isZoomable() && r.add(t);
		}
	}), t;
}
function QS(e) {
	let t = ZS(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region ../core/src/view/gridView/keyboardZoomController.js
var $S = class {
	#e;
	#t;
	#n = .5;
	#r = new qS();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = QS(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (tb(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
	};
	constructor({ context: e, viewRoot: t }) {
		this.#e = e, this.#t = t, this.#s();
	}
	handlePointerEvent(e, t) {
		if (e) {
			let n = e.view;
			if (typeof n.getKeyboardZoomAnchorX == "function") {
				let e = n.getKeyboardZoomAnchorX(t.point);
				Number.isFinite(e) && (this.#n = Math.max(0, Math.min(1, e)));
			} else {
				let n = e.coords.normalizePoint(t.point.x, t.point.y);
				this.#n = n.x;
			}
		} else return;
	}
	#s() {
		let e = this.#e.addKeyboardListener;
		typeof e == "function" && (e("keydown", (e) => {
			eC(e) || this.#r.isNavigationKey(e.code) && QS(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		}), e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && QS(this.#t) && (e.preventDefault(), this.#c());
		}));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function eC(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || tC(e.target));
}
function tC(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (t.isContentEditable) return !0;
	if (typeof t.nodeName == "string") {
		let e = t.nodeName.toLowerCase();
		return e === "input" || e === "textarea" || e === "select";
	}
	return !1;
}
//#endregion
//#region ../core/src/view/gridView/legendLayout.js
var nC = 1;
function rC(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
function iC(e, t, n, r = 0) {
	let i = n.getPerpendicularSize(), a = n.getOffset(), o = t == "top" || t == "bottom" ? e.width : e.height, s = n.getParallelSize?.() ?? o, c = rC(n.getAnchor?.() ?? "start") * (o - s), l = n.getParallelSize?.() ?? e.height - 2 * a, u = n.getWidth?.() ?? i, d = n.getHeight?.() ?? l;
	if (t == "bottom") return e.translate(c, e.height + r + a).modify({
		width: s,
		height: i
	});
	if (t == "top") return e.translate(c, -i - r - a).modify({
		width: s,
		height: i
	});
	if (t == "left") return e.translate(-i - r - a, c).modify({
		width: i,
		height: s
	});
	if (t == "right") return e.translate(e.width + r + a, c).modify({
		width: i,
		height: s
	});
	if (t == "top-left") return e.translate(r + a, a).modify({
		width: u,
		height: d
	});
	if (t == "top-right") return e.translate(e.width - u - r - a, a).modify({
		width: u,
		height: d
	});
	if (t == "bottom-left") return e.translate(r + a, e.height - d - a).modify({
		width: u,
		height: d
	});
	if (t == "bottom-right") return e.translate(e.width - u - r - a, e.height - d - a).modify({
		width: u,
		height: d
	});
	throw Error(`Invalid legend orientation: ${t}`);
}
function aC(e, t, n, r, i, a, o) {
	for (let [s, c] of Object.entries(e)) {
		if (!oS(c)) continue;
		let e = Ey(t[s]), l = c.legendView, u = iC(n, s, l, e);
		a(nC, o, () => l.arrange(r, u, i));
	}
}
//#endregion
//#region ../core/src/view/gridView/separatorView.js
var oC = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), sC = class {
	#e;
	#t;
	#n;
	#r;
	#i = [];
	#a = [];
	#o = {
		x: [0, 0],
		y: [0, 0]
	};
	constructor({ direction: e, props: t, context: n, layoutParent: r, dataParent: i, getName: a }) {
		this.#e = e, this.#t = t.includePlotMargin ?? !0, this.#r = t.zindex ?? 0;
		let o = { ...t };
		delete o.includePlotMargin, delete o.zindex, this.#n = this.#l(o, n, r, i, a);
	}
	get view() {
		return this.#n;
	}
	getZindex() {
		return this.#r;
	}
	update(e, t, n, r, i, a) {
		this.#s(e, t, r, i), this.#c(n, a);
	}
	arrange(e, t, n) {
		this.#n.arrange(e, t, n);
	}
	#s(e, t, n, r) {
		if (this.#a.length = 0, t < 2) return;
		let i = this.#e === "vertical" ? "column" : "row", a = r ? 3 : 2;
		for (let r = 1; r < t; r++) {
			let t = e[n(i, r) - a], o = t ? t.location : 0, s = t ? t.size : 0;
			this.#a.push(o + s / 2);
		}
	}
	#c(e, t) {
		let n = this.#t ? 0 : t.left, r = this.#t ? e.width : e.width - t.right, i = this.#t ? 0 : t.bottom, a = this.#t ? e.height : e.height - t.top;
		this.#i.length = this.#a.length;
		for (let t = 0; t < this.#a.length; t++) {
			let o = this.#a[t], s = this.#i[t] ?? {};
			if (this.#e === "vertical") s.x = o, s.x2 = o, s.y = i, s.y2 = a;
			else {
				let t = e.height - o;
				s.x = n, s.x2 = r, s.y = t, s.y2 = t;
			}
			this.#i[t] = s;
		}
		let o = this.#n.flowHandle?.dataSource;
		if (!o) return;
		o.updateDynamicData(this.#i), this.#o.x[1] = e.width, this.#o.y[1] = e.height;
		let s = this.#n.getScaleResolution("x")?.getScale();
		s && s.domain(this.#o.x);
		let c = this.#n.getScaleResolution("y")?.getScale();
		c && c.domain(this.#o.y);
	}
	#l(e, t, n, r, i) {
		let a = new J(lC(e), t, n, r, this.#e === "horizontal" ? i("separatorHorizontal") : i("separatorVertical"));
		return U(a, { skipSubtree: !0 }), Hn(a, { skipSubtree: !0 }), a;
	}
};
function cC(e) {
	if (!e) return null;
	let t = e === !0 ? { ...oC } : {
		...oC,
		...e
	};
	return t.strokeDash === oC.strokeDash && (t.strokeDash = oC.strokeDash.slice()), t;
}
function lC(e) {
	return {
		domainInert: !0,
		data: { values: [] },
		resolve: {
			scale: {
				x: "excluded",
				y: "excluded"
			},
			axis: {
				x: "excluded",
				y: "excluded"
			}
		},
		mark: {
			...e,
			type: "rule",
			clip: e.clip ?? !1,
			tooltip: null
		},
		encoding: {
			x: {
				field: "x",
				type: "quantitative",
				scale: {
					nice: !1,
					zero: !1
				}
			},
			y: {
				field: "y",
				type: "quantitative",
				scale: {
					nice: !1,
					zero: !1
				}
			},
			x2: { field: "x2" },
			y2: { field: "y2" }
		}
	};
}
//#endregion
//#region ../core/src/view/gridView/gridView.js
var Q = Object.freeze({
	background: 0,
	separator: 10,
	grid: 20,
	backgroundStroke: 30,
	axis: 40,
	legend: 50,
	selectionRect: 80,
	ruler: 82,
	scrollbar: 90,
	title: 100
}), uC = 10, dC = .5;
function fC(e, t) {
	return Math.max(0, Math.min(e.size, t - e.location));
}
var pC = 10;
function mC(e, t) {
	let n = e.grow ?? 0, r = e.px ?? 0, i = Math.max(Tn(e), Tn(t));
	if (!n) return {
		px: Math.max(r, i),
		grow: 0
	};
	let a = {
		px: Math.max(r, t.px ?? 0),
		grow: n
	};
	i > (a.px ?? 0) && (a.minPx = i);
	let o = Nn(e);
	return o !== void 0 && o >= i && (a.maxPx = o), a;
}
var hC = class e extends mr {
	#e = Infinity;
	#t = 10;
	#n = [];
	#r = {};
	#i = {};
	#a;
	#o = 0;
	#s = {};
	#c = null;
	#l = () => !1;
	#u = [];
	constructor(e, t, n, r, i, a, o) {
		super(e, t, n, r, i, o), this.spec = e, this.#t = e.spacing ?? 10, this.#e = a, this.wrappingFacet = !1;
		let s = cC(e.separator);
		if (s) for (let t of SC(e)) this.#s[t] = new sC({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#c = new $S({
			context: this.context,
			viewRoot: this
		}));
	}
	appendChild(e) {
		this.appendChildView(e);
	}
	appendChildView(e) {
		return this.insertChildViewAt(e, this.#n.length);
	}
	insertChildViewAt(e, t) {
		e.layoutParent ??= this;
		let n = new US(e, this, this.#o);
		return this.#o++, this.#n.splice(t, 0, n), this.invalidateSizeCache(), n;
	}
	removeChildView(e) {
		let t = this.#n.findIndex((t) => t.view === e);
		if (t < 0) throw Error("Not my child view!");
		this.removeChildAt(t);
	}
	removeChildAt(e) {
		let t = this.#n[e];
		if (!t) throw Error("Child index out of range!");
		this.#p(t), this.#n.splice(e, 1), this.invalidateSizeCache();
	}
	moveChildAt(e, t) {
		Ke(this.#n, e, t), this.invalidateSizeCache();
	}
	get #d() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get #f() {
		return new ry(this.#d.length, this.#e ?? Infinity);
	}
	setChildren(e) {
		for (let e of this.#n) this.#p(e);
		this.#n = [];
		for (let t of e) this.appendChild(t);
		this.invalidateSizeCache();
	}
	#p(e) {
		e.dispose();
		for (let t of e.getChildren()) t.disposeSubtree();
	}
	get children() {
		return this.#n.map((e) => e.view);
	}
	get childCount() {
		return this.#n.length;
	}
	getAnnotationLayer() {}
	get view() {
		return this;
	}
	get captureInteractions() {
		return !0;
	}
	ownsInteraction(t, n) {
		let r = this.#d.find((e) => e.coords.containsPoint(n.x, n.y));
		if (!r) return !0;
		if (r.view instanceof e && !r.view.ownsInteraction(t, n)) return !1;
		for (let e of r.view.getDataAncestors()) {
			if (e === this) return !0;
			if (e.paramRuntime.paramConfigs.has(t)) return !1;
		}
		return !0;
	}
	getInteractionCoords() {
		let e = this.#A();
		return e ? wC(this.#d, this.#r, e) : void 0;
	}
	getProjectionCoords(e) {
		let t = this.getTrackPlotGeometry(e);
		if (!t) throw Error(`Cannot project a container interval on an empty ${e} grid.`);
		return t.content;
	}
	getTrackPlotPlacements() {
		let t = [];
		for (let n of this.#d) {
			if (n.view instanceof e) {
				t.push(...n.view.getTrackPlotPlacements());
				continue;
			}
			let r = [];
			n.view.visit((e) => {
				if (!e.isConfiguredVisible()) return zn;
				e instanceof J && !Fn(e) && r.push(e);
			}), r.length !== 0 && t.push({
				content: n.plotCoords,
				viewport: n.coords,
				views: r
			});
		}
		return t;
	}
	getTrackPlotGeometry(e) {
		return this._cache("trackPlotGeometry/" + e, () => {
			let t = this.getTrackPlotPlacements().filter(({ content: e, viewport: t }) => e.width > 0 && e.height > 0 && t.width > 0 && t.height > 0);
			if (t.length === 0) return;
			if (e) {
				let n = dC / (typeof window > "u" ? 1 : window.devicePixelRatio ?? 1), r = this.getScaleResolution(e), i = new Set(t.flatMap(({ views: e }) => e));
				if (!r?.getOrderedMembers().some(({ view: e }) => i.has(e))) throw Error(`Container annotations require a shared ${e} scale defined by tracks.`);
				let a = t[0].content[e === "x" ? "width" : "height"], o = t[0].content[e === "x" ? "x" : "y"];
				for (let i of t) {
					for (let t of i.views) if (t.getScaleResolution(e) !== r) throw Error(`Container annotations require all visible tracks to use the shared ${e} scale resolution.`);
					let t = i.content[e === "x" ? "width" : "height"], s = i.content[e === "x" ? "x" : "y"];
					if (Math.abs(t - a) > n || Math.abs(s - o) > n) throw Error(`Container annotations require equal aligned visible plotting spans on the shared ${e} axis.`);
				}
			}
			let n = CC(t.map(({ content: e }) => e)), r = t.map(({ viewport: e }) => e), i = e ? wC(this.#d, this.#r, e) : CC(r);
			if (!(!n || !i)) return {
				content: n,
				viewport: i
			};
		});
	}
	setLegendFilter(e) {
		this.#a = e;
	}
	async syncGuideViews(e = {}) {
		let t = e.gridChildren ?? this.#n;
		await Promise.all([
			this.#m(),
			this.#h(e.legendOwners),
			this.#g()
		]), await Promise.all(t.map((e) => e.syncGuideViews({ legendFilter: this.#a }))), this.invalidateSizeCache();
	}
	async syncLegendViews() {
		await this.#h(sS(this)), this.invalidateSizeCache();
	}
	async #m() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of d) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new Dy({
				title: n.getTitle(),
				orient: xy[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	async #h(e) {
		rS(this.#i), this.#i = {};
		let t = e ?? sS(this);
		for (let { definition: e, resolution: n, owner: r } of Ux(t)) {
			if (_C(r, n.channel) !== this) continue;
			let t = await $x(e, this);
			if (this.#a && !this.#a(t, r)) {
				t.disposeSubtree();
				continue;
			}
			await eS(this.#i, t, n);
		}
	}
	async #g() {
		this.#D();
		let e = [];
		for (let [t, n] of this.paramRuntime.paramConfigs) if ("select" in n) {
			let r = Ve(n.select);
			if (!ae(r)) continue;
			let i = r.encodings ?? ["x"], a = this.#_(i, r.extent, `Interval selection param "${t}"`);
			if (!a) continue;
			let o = this.paramRuntime.createExpression(t), s = o();
			(!s || !T(s)) && this.paramRuntime.setValue(t, n.value ? {
				type: "interval",
				intervals: n.value
			} : Be(i));
			let c = PS({
				selectionExpr: o,
				selectionExpression: t,
				channels: i,
				brushConfig: r.mark,
				context: this.context,
				layoutParent: this,
				dataParent: this,
				scaleResolutionSource: this
			});
			this.#u.push({
				overlay: c,
				order: Q.selectionRect,
				channel: a,
				controller: new FS(this, t, n, r, this.paramRuntime, !1, c)
			}), e.push(c.view.initializeChildren());
		} else if (gt(n) && n.ruler.display !== "none") {
			let r = n.ruler.encodings ?? ["x"], i = this.#_(r, n.ruler.extent, `Ruler param "${t}"`);
			if (!i) continue;
			let a = CS({
				paramName: t,
				channels: r,
				config: n.ruler,
				scaleResolution: this.getScaleResolution(i),
				context: this.context,
				layoutParent: this,
				dataParent: this,
				name: "rulerOverlay_" + t,
				expressionRuntime: this.paramRuntime
			});
			this.#u.push({
				overlay: a,
				order: Q.ruler,
				channel: i
			}), e.push(a.view.initializeChildren());
		}
		await Promise.all(e);
	}
	#_(e, t, n) {
		if (e.length === 1) return RS({
			extent: t,
			ownerSpec: this.spec,
			channels: e,
			isAligned: (e) => this.#v(e),
			label: n
		}) === "container" ? e[0] : void 0;
	}
	#v(e) {
		let t = this.getScaleResolution(e);
		return t != null && this.#n.every((n) => n.view.getScaleResolution(e) === t);
	}
	*[Symbol.iterator]() {
		for (let e of this.#n) yield* e.getChildren();
		for (let { overlay: e } of this.#u) yield e.view;
		let e = this.getAnnotationLayer();
		e && (yield e);
		for (let e of Object.values(this.#s)) yield e.view;
		for (let e of Object.values(this.#r)) yield e;
		yield* tS(this.#i);
	}
	#y(e) {
		let t = e == "column" ? "width" : "height", n = (t, n) => t.map((t) => {
			let r = this.#d[t].getOverhangAndPadding();
			return e == "column" ? n ? r.right : r.left : n ? r.bottom : r.top;
		}).reduce((e, t) => Math.max(e, t), 0), r = (n) => {
			let r = n.view.getViewportSize()[t], i = n.getViewOverhang(), a = e == "column" ? i.width : i.height;
			return {
				px: Math.max((r.px ?? 0) - a, 0),
				grow: r.grow,
				minPx: r.minPx === void 0 ? void 0 : Math.max(r.minPx - a, 0),
				maxPx: r.maxPx === void 0 ? void 0 : Math.max(r.maxPx - a, 0)
			};
		};
		return this._cache(`size/directionSizes/${e}`, () => this.#f[e == "column" ? "colIndices" : "rowIndices"].map((e) => ({
			axisBefore: n(e, 0),
			axisAfter: n(e, 1),
			view: An(e.map((e) => r(this.#d[e])))
		})));
	}
	#b(e) {
		let t = this.#y(e), n = [];
		n.push(qn);
		for (let [e, r] of t.entries()) e > 0 && n.push({
			px: this.#t,
			grow: 0
		}), (e == 0 || this.wrappingFacet) && n.push(qn), n.push({
			px: r.axisBefore,
			grow: 0
		}), n.push(r.view), n.push({
			px: r.axisAfter,
			grow: 0
		}), (e == t.length - 1 || this.wrappingFacet) && n.push(qn);
		return n;
	}
	#x(e) {
		let t = 0, n = 0, r = 0, i = 0, a = !0, o = e == "row" ? this.spec.height : this.spec.width, s = o || o === 0 ? kn(this.resolveSizeValue(e == "row" ? "height" : "width", o)) : void 0, c = s && (e == "column" ? this.#f.colIndices.length == 1 : this.#f.rowIndices.length == 1), l = this.#y(e);
		for (let [e, o] of l.entries()) {
			e > 0 && (n += this.#t, r += this.#t, i += this.#t), n += o.axisBefore, r += o.axisBefore, i += o.axisBefore;
			let l = c ? mC(s, o.view) : o.view;
			n += l.px ?? 0, t += l.grow ?? 0, r += Tn(l);
			let u = Nn(l);
			u === void 0 ? a = !1 : i += u, n += o.axisAfter, r += o.axisAfter, i += o.axisAfter;
		}
		let u = {
			px: n,
			grow: t,
			minPx: r || void 0,
			maxPx: l.length && a ? i : void 0
		};
		return s && !c ? mC(s, u) : u;
	}
	#S(e, t) {
		return e == "row" && this.wrappingFacet ? 1 + 6 * t + 2 : 2 + 4 * t + 1;
	}
	getOverhang() {
		return this.#C().add(this.#w());
	}
	#C() {
		let e = this.#y("column"), t = this.#y("row");
		return !e.length || !t.length ? Mn.zero() : new Mn(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#w() {
		let e = (e) => {
			let t = Sy[e], n = this.#r[t];
			return (n?.axisProps.orient === e ? Ey(n) : 0) + iS(this.#i, e);
		};
		return new Mn(e("top"), e("right"), e("bottom"), e("left"));
	}
	#T() {
		let e = {};
		for (let t of Object.values(this.#r)) e[t.axisProps.orient] = t;
		return e;
	}
	getSize() {
		return this._cache("size", () => new xn(this.#x("column"), this.#x("row")).addPadding(this.#w()));
	}
	arrange(e, t, n = {}) {
		if (this._invalidateCacheByPrefix("trackPlotGeometry"), super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#w(), i = uC;
		for (;;) {
			let e = t.shrink(r);
			if (!nS(this.#i, e.width, e.height)) {
				t = e;
				break;
			}
			if (i--, !i) throw Error("Shared legend layout did not settle.");
			this.invalidateSizeCache(), r = this.#w();
		}
		e.pushView(this, t);
		let a = e.getDevicePixelRatio(), o = { devicePixelRatio: a }, s = On(this.#b("column"), t.width, o), c = On(this.#b("row"), t.height, o), l = new ry(this.#d.length, this.#e ?? Infinity), u = uC;
		for (;;) {
			let e = !1;
			for (let [n, r] of this.#d.entries()) {
				let [i, a] = l.getCellCoords(n), o = s[this.#S("column", i)], u = c[this.#S("row", a)], d = fC(o, t.width), f = fC(u, t.height), p = r.view.prepareLayoutSize?.(d, f) === !0, m = r.prepareLegendLayoutSize(d, f);
				e ||= p || m;
			}
			if (!e) break;
			if (u--, !u) throw Error("Legend layout did not settle.");
			this.invalidateSizeCache(), s = On(this.#b("column"), t.width, o), c = On(this.#b("row"), t.height, o);
		}
		let d = (e) => Math.round(e * a) / a, f = [];
		for (let [e, r] of this.#d.entries()) {
			let { view: i } = r, [a, o] = l.getCellCoords(e), u = s[this.#S("column", a)], p = c[this.#S("row", o)], m = i.getViewportSize(), h = i.getSize(), g = r.getViewOverhang(), _ = u.location - g.left, v = p.location - g.top, y = (e, t, n = !1) => n ? e[t].grow ? (t == "width" ? u : p).size : e[t].px : (t == "width" ? u : p).size + g[t], b = y(m, "width", i.spec.viewportWidth != null), x = y(m, "height", i.spec.viewportHeight != null), S = y(h, "width", i.spec.viewportWidth != null), C = y(h, "height", i.spec.viewportHeight != null), w = r.scrollbars.horizontal, T = r.scrollbars.vertical, E = w ? () => d(w.viewportOffset) : () => 0, D = T ? () => d(T.viewportOffset) : () => 0, O = new W(() => t.x + _, () => t.y + v, () => b, () => x), k = i.isScrollable(), A = k ? new W(() => t.x + _ - E(), () => t.y + v - D(), () => S, () => C) : O;
			r.coords = O, r.plotCoords = A;
			let j = Xe(n), ee = ot(O, j);
			f.push({
				col: a,
				row: o,
				viewportCoords: O,
				viewCoords: A,
				parentClip: j,
				visibleChildCoords: ee,
				viewWidth: S,
				viewHeight: C,
				scrollable: k,
				gridChild: r
			});
		}
		let p = this.#C(), m = CC(f.map((e) => e.viewCoords)), h = [], g = [], _ = [], v = 0, y = (e, t, n) => {
			(e > 0 ? g : h).push({
				zindex: e,
				order: t,
				sequence: v++,
				arrange: n
			});
		}, b = (e) => {
			e.sort((e, t) => e.zindex - t.zindex || e.order - t.order || e.sequence - t.sequence);
			for (let t of e) t.arrange();
		};
		for (let t of f) {
			let { background: r } = t.gridChild;
			r && y(t.gridChild.backgroundZindex, Q.background, () => r.arrange(e, t.visibleChildCoords, {
				...n,
				clipRect: void 0
			}));
		}
		for (let r of ["vertical", "horizontal"]) {
			let i = this.#s[r];
			i && (i.update(r === "vertical" ? s : c, r === "vertical" ? l.nCols : l.nRows, t, (e, t) => this.#S(e, t), this.wrappingFacet, p), y(i.getZindex(), Q.separator, () => i.arrange(e, t, n)));
		}
		if (m) for (let { overlay: t, order: r, channel: i } of this.#u) y(t.zindex, r, () => {
			let r = t.zindex > 0 ? this.getTrackPlotGeometry(i) : void 0;
			t.view.arrange(e, r?.content ?? fS(this.getScaleResolution(i), i, m, this), n);
		});
		for (let r of f) {
			let { viewportCoords: i, viewCoords: a, parentClip: o, visibleChildCoords: s, viewWidth: c, viewHeight: u, scrollable: d, gridChild: f, col: p, row: m } = r, { view: h, axes: g, gridLines: v, backgroundStroke: b, title: x, selectionRect: S, rulerOverlays: C } = f, w = yC(h), T = w || d, E = bC(h) || d;
			for (let t of Object.values(v)) y(t.axisProps.zindex ?? 0, Q.grid, () => t.arrange(e, i, n));
			let D = T ? tt(o, Le(s, w || !!f.scrollbars.horizontal, w || !!f.scrollbars.vertical)) : n.clip;
			_.push({
				zindex: h.getZindex(),
				arrange: () => h.arrange(e, a, T ? {
					...n,
					clipRect: D?.rect,
					clip: D
				} : n)
			}), b && y(EC(f.backgroundStrokeZindex, E), Q.backgroundStroke, () => b?.arrange(e, s, {
				...n,
				clipRect: void 0
			}));
			for (let [t, r] of Object.entries(g)) {
				let o = t == "left" || t == "right" ? "vertical" : "horizontal", s = f.scrollbars[o], l = DC(s ? i.modify(o == "vertical" ? {
					y: () => a.y,
					height: u
				} : {
					x: () => a.x,
					width: c
				}) : i, t, r), d = Xe(n), p = d?.rect;
				if (s) {
					let e = Le(i, o == "horizontal", o == "vertical");
					d = tt(d, e), p = d?.rect;
				}
				d && r.labelClipPolicy === "anchor" && (d = Le(d.rect, Sy[t] === "x", Sy[t] === "y"), p = d?.rect), y(TC(r.axisProps, E), Q.axis, () => r.arrange(e, l, {
					...n,
					clipRect: p,
					clip: d
				}));
			}
			aC(f.legends, this.#E(g, p, m, l), i, e, n, y, Q.legend);
			for (let t of Object.values(this.#r)) {
				let r = t.axisProps.orient;
				(r == "left" && p == 0 || r == "right" && p == l.nCols - 1 || r == "top" && m == 0 || r == "bottom" && m == l.nRows - 1) && y(TC(t.axisProps, E), Q.axis, () => t.arrange(e, DC(i.shrink(f.getViewOverhang()), r, t), n));
			}
			S && y(S.zindex, Q.selectionRect, () => S.view.arrange(e, a, n));
			for (let t of C) y(t.zindex, Q.ruler, () => t.view.arrange(e, a, n));
			for (let r of Object.values(f.scrollbars)) y(1, Q.scrollbar, () => {
				r.updateScrollbar(i, a), r.arrange(e, t, n);
			});
			x && y(f.getTitleZindex(), Q.title, () => f.arrangeTitle(e, i, n));
		}
		if (!f.length) for (let r of Object.values(this.#r)) {
			let { orient: i } = r.axisProps, a = DC(t, i, r);
			y(TC(r.axisProps, !1), Q.axis, () => r.arrange(e, a, n));
		}
		aC(this.#i, this.#T(), t, e, n, y, Q.legend), b(h);
		for (let e of _.toSorted((e, t) => e.zindex - t.zindex)) e.arrange();
		b(g);
		let x = this.getAnnotationLayer(), S = x ? this.getTrackPlotGeometry(this.#A()) : void 0;
		if (x && S) {
			let t = tt(Xe(n), Le(S.viewport, !0, !0));
			x.arrange(e, S.content, {
				...n,
				clipRect: t?.rect,
				clip: t
			});
		}
		e.popView(this);
	}
	#E(e, t, n, r) {
		let i = { ...e };
		for (let e of Object.values(this.#r)) {
			let a = e.axisProps.orient;
			(a == "left" && t == 0 || a == "right" && t == r.nCols - 1 || a == "top" && n == 0 || a == "bottom" && n == r.nRows - 1) && !i[a] && (i[a] = e);
		}
		return i;
	}
	dispose() {
		this.#l();
		for (let { controller: e } of this.#u) e?.dispose();
		super.dispose();
	}
	#D() {
		for (let { controller: e, overlay: t } of this.#u) e?.dispose(), t.view.disposeSubtree();
		this.#u = [];
	}
	propagateInteraction(e) {
		Uy(this, e, () => {
			let t = this.#d.find((t) => t.coords.containsPoint(e.point.x, e.point.y)), n = t?.view;
			if (e.type === "wheelclaimprobe") {
				this.#O(e, n);
				return;
			}
			this.#c?.handlePointerEvent(t, e);
			for (let n of Object.values(t?.scrollbars ?? {})) if (Wy(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			let r = this.getAnnotationLayer(), i = r ? this.getTrackPlotGeometry(this.#A())?.viewport : void 0;
			if (!(r && i?.containsPoint(e.point.x, e.point.y) && this.context.getCurrentHover()?.mark?.unitView?.getLayoutAncestors().includes(r) && (r.propagateInteraction(e), e.stopped))) {
				if (!n) {
					let t = this.#k(e.point);
					t && this.#j(e, t.coords, t.zoomableResolutions);
					return;
				}
				Wy(e, () => !0, () => n.propagateInteraction(e), xC(n) ? () => this.#j(e, t.coords, ZS(n)) : void 0);
			}
		});
	}
	#O(e, t) {
		if (!t) {
			this.#k(e.point) && e.claimWheel();
			return;
		}
		if (!xC(t)) {
			t.propagateInteraction(e);
			return;
		}
		let n = ZS(t);
		Object.values(n).some((e) => e.size > 0) && e.claimWheel();
	}
	#k(e) {
		let t = this.#A();
		if (!t) return;
		let n = this.getScaleResolution(t);
		if (!n?.isZoomable()) return;
		let r = wC(this.#d, this.#r, t);
		if (!r?.containsPoint(e.x, e.y)) return;
		let i = {
			x: /* @__PURE__ */ new Set(),
			y: /* @__PURE__ */ new Set()
		};
		return i[t].add(n), {
			coords: r,
			zoomableResolutions: i
		};
	}
	#A() {
		return ey(this.spec) ? "x" : ty(this.spec) ? "y" : void 0;
	}
	#j(e, t, n) {
		e.target ??= this;
		let r = ib(e, t, (e) => vC(t, e, n, this.context.animator), this.context.getCurrentHover(), this.context.animator);
		r && (this.#l(), this.#l = r);
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
};
function gC(e, t) {
	let n = e.getLayoutAncestors().find((e) => e instanceof hC);
	if (!n) throw Error(`Legend collection for channel "${t}" declared at view "${e.name}" requires a GridView layout host.`);
	return n;
}
function _C(e, t) {
	let n = lS(e, t);
	if (n) return gC(n, t);
	let r = e.getLayoutAncestors();
	for (let e of r) {
		if (!(e instanceof hC)) continue;
		let t = e.getAnnotationLayer();
		if (t && r.includes(t)) return e;
	}
	return e instanceof hC ? e : void 0;
}
function vC(e, t, n, r) {
	let i = !1, a = !1, o = e.normalizePoint(t.x, t.y), s = e.normalizePoint(t.x + t.xDelta, t.y + t.yDelta), c = {
		x: s.x - o.x,
		y: s.y - o.y
	};
	for (let [e, r] of Object.entries(n)) if (!(r.size <= 0)) {
		i = !0;
		for (let n of r) a = n.zoom(2 ** t.zDelta, e == "y" ? 1 - o[e] : o[e], e == "x" ? c.x : -c.y) || a;
	}
	return a && r.requestRender(), i;
}
function yC(e) {
	let t = !0;
	return e.visit((e) => {
		e instanceof J && (t &&= e.mark.properties.clip === !0);
	}), t;
}
function bC(e) {
	let t = !1;
	return e.visit((e) => {
		if (e instanceof J) {
			let n = e.mark.properties.clip;
			t ||= n === !0 || n === "x" || n === "y";
		}
	}), t;
}
function xC(e) {
	return e instanceof J || e instanceof X;
}
function SC(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function CC(e) {
	if (e.length === 0) return;
	let t = Math.min(...e.map((e) => e.x)), n = Math.min(...e.map((e) => e.y)), r = Math.max(...e.map((e) => e.x2)), i = Math.max(...e.map((e) => e.y2));
	return W.create(t, n, r - t, i - n);
}
function wC(e, t, n) {
	if (e.length === 0) return;
	let [r, i, a, o, s, c] = n == "x" ? [
		"x",
		"x2",
		"y",
		"y2",
		"top",
		"bottom"
	] : [
		"y",
		"y2",
		"x",
		"x2",
		"left",
		"right"
	], l = -Infinity, u = Infinity, d = Infinity, f = -Infinity;
	for (let t of e) {
		let { coords: e } = t, n = t.getOverhang();
		l = Math.max(l, e[r]), u = Math.min(u, e[i]), d = Math.min(d, e[a] - n[s]), f = Math.max(f, e[o] + n[c]);
	}
	let p = [s, c];
	for (let e of Object.values(t)) {
		let t = e.coords;
		!t || !p.includes(e.axisProps.orient) || (d = Math.min(d, t[a]), f = Math.max(f, t[o]));
	}
	let m = r == "x" ? 0 : 1, h = [d, d], g = [f, f];
	if (h[m] = l, g[m] = u, !(h[0] >= g[0] || h[1] >= g[1])) return W.create(h[0], h[1], g[0] - h[0], g[1] - h[1]);
}
function TC(e, t) {
	return e.zindex === void 0 ? e.placement === "inside" ? 1 : t ? pC : 0 : e.zindex;
}
function EC(e, t) {
	return e ?? (t ? pC : 0);
}
function DC(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize(), a = r.placement === "inside", o = r.offset ?? 0;
	if (t == "bottom") return a ? e.translate(0, e.height - i - o).modify({ height: i }) : e.translate(0, e.height + o).modify({ height: i });
	if (t == "top") return a ? e.translate(0, o).modify({ height: i }) : e.translate(0, -i - o).modify({ height: i });
	if (t == "left") return a ? e.translate(o, 0).modify({ width: i }) : e.translate(-i - o, 0).modify({ width: i });
	if (t == "right") return a ? e.translate(e.width - i - o, 0).modify({ width: i }) : e.translate(e.width + o, 0).modify({ width: i });
}
//#endregion
//#region ../core/src/view/concatView.js
var OC = class extends hC {
	#e;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, ny(e) ? e.columns : ey(e) ? 1 : Infinity, a), this.spec = e;
	}
	async initializeChildren() {
		let e = this.spec, t = ny(e) ? e.concat : ey(e) ? e.vconcat : e.hconcat, n = { inheritEncoding: !0 };
		this.options.layoutSizeParams == "force" && (n.layoutSizeParams = "force"), this.setChildren(await Promise.all(t.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("grid"), void 0, n)))), await this.#t(), await this.syncGuideViews();
	}
	getAnnotationLayer() {
		return this.#e;
	}
	async #t() {
		let e = ey(this.spec) ? "x" : ty(this.spec) ? "y" : void 0, t = ey(this.spec) || ty(this.spec) ? this.spec.annotate : void 0;
		if (!t?.length || !e) return;
		let n = e === "x" ? "y" : "x", r = {
			layer: t.map((t) => kC(structuredClone(t), e, n)),
			resolve: { scale: { [e]: "forced" } }
		};
		this.#e = await this.context.createOrImportView(r, this, this, this.getNextAutoName("annotation"), void 0, {
			inheritEncoding: !1,
			layoutSizeParams: "inherit"
		}), U(this.#e);
	}
	async addChildSpec(e, t) {
		return this.#r().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#r().removeChildAt(e);
	}
	async moveChildAt(e, t) {
		let n = this.#r(), { specs: r } = this.#n();
		Ke(r, e, t), super.moveChildAt(e, t);
		let i = await this.#i([]);
		await n.initializeUninitializedChromeViews(i), this.context.requestLayoutReflow();
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : ey(this.spec) && e === "x" || ty(this.spec) && e === "y" ? "shared" : "independent";
	}
	#n() {
		let e = this.spec, t;
		return t = ny(e) ? e.concat : ey(e) ? e.vconcat : e.hconcat, {
			specs: t,
			insertAt: (e, n) => {
				t.splice(e, 0, n);
			},
			removeAt: (e) => {
				t.splice(e, 1);
			}
		};
	}
	#r() {
		let e = { inheritEncoding: !0 };
		return this.options.layoutSizeParams == "force" && (e.layoutSizeParams = "force"), new Lv(this, {
			getChildSpecs: this.#n.bind(this),
			insertView: (e, t) => this.insertChildViewAt(e, t),
			removeView: (e) => super.removeChildAt(e),
			syncMutationGuideViews: (e, t, n) => this.#i(n ? [n] : []),
			defaultName: () => this.getNextAutoName("grid"),
			createViewOptions: e
		});
	}
	async #i(e) {
		await this.syncGuideViews({
			gridChildren: e,
			legendOwners: sS(this)
		});
		let t = /* @__PURE__ */ new Set([this]);
		for (let e of this.getDataAncestors()) if (Object.values(e.spec.resolve?.legend ?? {}).includes("collected")) {
			let n = e.getLayoutAncestors().find((e) => e instanceof hC);
			n && !t.has(n) && (await n.syncLegendViews(), t.add(n));
		}
		return t;
	}
};
function kC(e, t, n) {
	if (!Zv(e) && !Qv(e)) throw Error("Container annotations accept only unit or layer specifications.");
	let r = e.resolve?.scale, i = r?.[t] ?? r?.default;
	if (i === "independent" || i === "excluded") throw Error(`Container annotations cannot use an independent ${t} scale.`);
	if (e.scales?.[t] !== void 0 || e.scales?.[n] !== void 0) throw Error("Container annotations cannot override positional scale settings.");
	return e.encoding && AC(e.encoding, t, n), Qv(e) && (e.resolve = {
		...e.resolve,
		scale: {
			...e.resolve?.scale,
			[t]: "forced"
		}
	}, e.layer = e.layer.map((e) => kC(e, t, n))), e;
}
function AC(e, t, n) {
	for (let [n, r] of Object.entries(e)) Array.isArray(r) || jC(r, (e) => {
		let r = e.resolutionChannel;
		if (r !== void 0 && ce(lt(r)) && lt(n) !== t) throw Error(`Container annotation channel ${n} cannot resolve through positional channel ${r}.`);
	});
	for (let n of [t, ke(t)]) {
		let r = e[n];
		r && jC(r, (e) => {
			if (e.scale !== void 0) throw Error(`Container annotation encodings on ${n} cannot define scale settings.`);
			if (e.resolutionChannel !== void 0 && lt(e.resolutionChannel) !== t) throw Error(`Container annotation channel ${n} must resolve through ${t}.`);
			"value" in e || (e.domainInert = !0);
		});
	}
	for (let t of [n, ke(n)]) {
		let n = e[t];
		n && jC(n, (e) => {
			if (!("value" in e) && e.scale !== null) throw Error(`Container annotation encodings on ${t} must use scale: null.`);
		});
	}
}
function jC(e, t) {
	if (!e || typeof e != "object") return;
	t(e);
	let n = e.condition;
	if (n) for (let e of Array.isArray(n) ? n : [n]) e && typeof e == "object" && t(e);
}
//#endregion
//#region ../core/src/config/resolveConfig.js
function MC({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return H([
		e,
		t,
		n
	]);
}
function NC(e, t) {
	if (!(!e && !t)) return H([e, t]);
}
//#endregion
//#region ../core/src/view/viewFactory.js
var PC = "viewRoot", FC = /* @__PURE__ */ new WeakMap();
function IC(e) {
	return FC.get(e) ?? e;
}
var LC = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(Qv, t(X)), this.addViewType(Hv, ((e, t, n, r, i, a) => new X(Uv(e), t, n, r, i, a))), this.addViewType(Zv, t(J)), this.addViewType(ey, t(OC)), this.addViewType(ty, t(OC)), this.addViewType(ny, t(OC));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw BC(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let s, c = $v(e) ? e.name ?? null : void 0;
		if ($v(e)) {
			let i;
			if ("url" in e.import) if (this.options.allowImport) i = await em(e, r.getBaseUrl(), t);
			else throw new sr("Importing views is not allowed!", n);
			else if ("template" in e.import) i = RC(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), zC(i, e), s = i;
		} else s = e;
		let l = (e) => e?.params?.some((e) => se(e) && Ve(e.select).type == "interval"), u = ey(s) || ty(s) || ny(s), d = !r && this.options.wrapRoot && i === "viewRoot" && (!u || s.title !== void 0 || l(s));
		if (d) {
			let e = { ...s };
			delete e.theme, s = {
				name: "implicitRoot",
				vconcat: [e]
			};
		}
		let f = this.createView(s, t, n, r, i, o);
		if (c !== void 0 && $n(f, c), d && U(f), f instanceof mr && await f.initializeChildren(), d) {
			let e = f;
			FC.set(f, e.children[0]);
		}
		return f.registerSizeInvalidation(), f;
	}
};
function RC(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return structuredClone(n);
	if (t.dataParent) return RC(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function zC(t, n) {
	n.name != null && (t.name = n.name), n.visible != null && (t.visible = n.visible), n.zindex != null && (t.zindex = n.zindex), t.config = NC(n.config, t.config);
	let r = be(n.params) ? n.params : e(n.params) ? Object.entries(n.params).map(([e, t]) => ({
		name: e,
		value: t
	})) : [];
	if (r.length) {
		t.params ??= [];
		for (let e of r) {
			let n = t.params.findIndex((t) => t.name == e.name);
			n >= 0 && (t.params[n] = e);
		}
		for (let e of r) t.params.some((t) => t.name == e.name) || t.params.push(e);
	}
}
function BC(t) {
	return "samples" in t && e(t.samples) && "spec" in t && e(t.spec);
}
//#endregion
//#region ../core/src/utils/inertia.js
var VC = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = Dn(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = st([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
	}
	setMomentum(e, t) {
		if (this.disabled) {
			t(e);
			return;
		}
		this.callback = t;
		let n = je(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function HC(e) {
	let t = {}, n = [
		"string",
		"number",
		"boolean"
	], r = [
		"wheelDelta",
		"wheelDeltaX",
		"wheelDeltaY"
	];
	for (let i in e) {
		let a = i;
		!r.includes(i) && n.includes(typeof e[a]) && (t[a] = e[a]);
	}
	return t;
}
//#endregion
//#region ../core/src/utils/interaction.js
var UC = class {
	#e;
	#t;
	constructor(e, t, n) {
		this.point = e, this.#n = t, this.stopped = !1, this.wheelClaimed = !1, this.#r = n, this.pointedViews = /* @__PURE__ */ new Set(), this.target = void 0, this.currentTarget = void 0, this.relatedTarget = void 0;
	}
	#n;
	#r;
	#i;
	get uiEvent() {
		return this.#n;
	}
	set uiEvent(e) {
		this.#n = e, this.#e = void 0, this.#t = void 0, this.#i = void 0;
	}
	stopPropagation() {
		this.stopped = !0;
	}
	claimWheel() {
		if (this.type !== "wheel" && this.type !== "wheelclaimprobe") throw Error("Can claim wheel only for wheel events!");
		this.wheelClaimed = !0;
	}
	setWheelDeltas(e, t) {
		if (!qy(this.uiEvent)) throw Error("Not a WheelEvent!");
		this.#i = {
			deltaX: e,
			deltaY: t
		}, this.#t = void 0;
	}
	get type() {
		return this.#r ?? this.uiEvent.type;
	}
	set type(e) {
		this.#r = e;
	}
	get proxiedMouseEvent() {
		return this.#e ||= Yy(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if (!qy(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= Jy(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
}, WC = class {
	#e;
	#t;
	#n;
	#r = [];
	#i = /* @__PURE__ */ new Set();
	constructor({ viewRoot: e }) {
		this.#e = e;
	}
	dispatch(e, t) {
		this.#t = e;
		let n = new UC(e, t);
		return this.#e.propagateInteraction(n), this.#n = n.target, n.type === "mousemove" && this.#a(n), n;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.length === 0) {
			this.#r = [], this.#i.clear(), this.#n = void 0;
			return;
		}
		let t = new UC(this.#t, e, "mouseleave");
		this.#o(t, this.#r, "mouseleave", void 0), this.#r = [], this.#i.clear(), this.#n = void 0;
	}
	getCurrentTarget() {
		return this.#n;
	}
	#a(e) {
		let t = e.pointedViews.size > 0 ? Array.from(e.pointedViews) : this.#s(e.target), n = e.pointedViews.size > 0 ? e.pointedViews : new Set(t), r = this.#r.filter((e) => !n.has(e)), i = t.filter((e) => !this.#i.has(e));
		r.length > 0 && this.#o(e, r, "mouseleave", t.at(-1)), i.length > 0 && this.#o(e, i, "mouseenter", this.#r.at(-1)), this.#r = t, this.#i = n;
	}
	#o(e, t, n, r) {
		for (let i = 0; i < t.length; i++) {
			let a = t[n === "mouseleave" ? t.length - 1 - i : i], o = new UC(e.point, e.uiEvent, n);
			if (o.target = a, o.currentTarget = a, o.relatedTarget = r, this.#c(a, o), o.stopped) return;
		}
	}
	#s(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#c(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, GC = class {
	#e;
	#t;
	#n;
	#r;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#i(KC(e, t));
	}
	clear() {
		this.#i(void 0);
	}
	#i(e) {
		let t = e?.getCursorSpec?.();
		if (this.#t === e && this.#n === t) {
			this.#a();
			return;
		}
		this.#r?.(), this.#r = void 0, this.#t = e, this.#n = t, e?.watchCursor?.(() => this.#a(), (e) => {
			this.#r = e;
		}), this.#a();
	}
	#a() {
		let e = this.#t?.getCursor();
		this.#e.style.cursor = typeof e == "string" ? e : "";
	}
};
function KC(e, t) {
	let n = t?.mark;
	if (n?.getCursorSpec?.() !== void 0) return n;
	for (let t of e?.getLayoutAncestors() ?? []) if (t.getCursorSpec?.() !== void 0) return t;
}
//#endregion
//#region ../core/src/genomeSpy/interactionController.js
var qC = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = !1;
	#h = !1;
	#g = !1;
	#_ = 0;
	#v = !1;
	#y = 0;
	#b = new Ml();
	#x = /* @__PURE__ */ new Set();
	#S = /* @__PURE__ */ new Set();
	#C;
	#w = (e) => console.error(e);
	#T = () => !0;
	#E() {
		this.#n.sticky = !1, this.#g = !0, this.#n.clear();
	}
	constructor({ viewRoot: e, canvas: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, readPickingId: s, reportError: c, canPick: l }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o ?? (() => {}), this.#s = s, this.#w = c ?? this.#w, this.#T = l ?? this.#T, this.#c = new WC({ viewRoot: e }), this.#l = new GC({ canvas: t }), this.#u = void 0, this.#d = new VC(this.#r), this.#f = void 0, this.#p = void 0;
	}
	getCurrentHover() {
		return this.#u;
	}
	subscribeMarkEvent(e, t, n) {
		if (![
			"click",
			"dblclick",
			"contextmenu"
		].includes(t)) throw Error(`Unsupported mark event type: ${t}`);
		let r = {
			view: e,
			type: t,
			listener: n
		};
		return this.#x.add(r), () => this.#x.delete(r);
	}
	subscribeHover(e, t) {
		let n = {
			view: e,
			listener: t
		};
		this.#S.add(n);
		try {
			t(this.#R(e));
		} catch (e) {
			this.#w(e);
		}
		return () => this.#S.delete(n);
	}
	async pick(e, t) {
		if (!this.#s) throw Error("Explicit picking is not supported by this renderer.");
		let n = new Z(e.x, e.y);
		if (!this.#O(n)) throw Error("Pick point must be inside the canvas.");
		if (!this.#T()) return { status: "invalidated" };
		let r = this.#y;
		this.#o();
		let i = await this.#s(e.x, e.y);
		if (r !== this.#y) return { status: "invalidated" };
		let a = this.#I(e.x, e.y, i ?? 0, t);
		return a ? {
			status: "hit",
			hit: a
		} : { status: "empty" };
	}
	invalidatePendingPicks() {
		this.#y++;
	}
	subscribeNativeEvent(e, t) {
		if (![
			"click",
			"dblclick",
			"contextmenu",
			"mousedown",
			"mouseup",
			"mousemove",
			"mouseenter",
			"mouseleave",
			"wheel"
		].includes(e)) throw Error(`Unsupported native event type: ${e}`);
		return this.#b.add(e, t), () => this.#b.remove(e, t);
	}
	suspendHoverTracking() {
		this.#_++, !this.#h && (this.#B(), this.#M());
	}
	resumeHoverTracking(e) {
		if (!(this.#_ <= 0) && (this.#_--, !(this.#_ > 0) && (this.#M(), !this.#N()))) {
			if (e) {
				let t = this.#D(e);
				if (this.#p = t, this.#O(t)) {
					this.#A(t);
					return;
				}
				this.#c.handlePointerLeave(e);
			} else if (this.#p && this.#O(this.#p)) {
				this.#A(this.#p);
				return;
			}
			this.#B(), this.#l.clear();
		}
	}
	registerInteractionEvents() {
		let e = this.#t, t = [], n = (e, n, r, i) => {
			e.addEventListener(n, r, i), t.push(() => e.removeEventListener(n, r, i));
		}, r = performance.now(), i = !1, a;
		globalThis.document?.addEventListener && n(document, "mousedown", (t) => {
			this.#n.sticky && !t.composedPath().includes(e) && !this.#n.containsEvent(t) && this.#E();
		}, { capture: !0 });
		let o = (e, t) => {
			let n = this.#c.dispatch(e, t);
			return !this.#m && !this.#h && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#_ === 0 && this.#j(n.target), n;
		}, s, c, l = (e, t) => {
			let n = {};
			c = n;
			let r = this.#P(e.x, e.y, () => c === n && !s);
			if (!r) {
				c = void 0, o(e, t);
				return;
			}
			r.then((r) => {
				if (c !== n) return;
				c = void 0, r && o(e, t);
				let i = s;
				s = void 0, i && l(i.point, i.event);
			});
		}, u = (e) => {
			let t = performance.now(), n = t - r < 200;
			if (e instanceof MouseEvent) {
				let a = this.#D(e), u = !1;
				if (this.#b.emit(e.type, {
					sourceEvent: e,
					point: a,
					preventViewDefault: () => {
						u = !0;
					}
				}, this.#w), u) return;
				let d;
				if ([
					"click",
					"dblclick",
					"contextmenu"
				].includes(e.type) && (d = this.#P(a.x, a.y, void 0, (t) => this.#L(e, a, t))), e.type !== "contextmenu" && this.#N()) return;
				this.#p = a;
				let f = !1;
				if (e.type == "mousemove" && !n && this.#_ === 0 && (this.#g = !1, this.#n.handleMouseMove(e), this.#m = !1, e.buttons == 0 && !nb() && (c ? s = {
					point: a,
					event: e
				} : l(a, e), f = !0)), e.type == "mousemove" && !f && (c = void 0, s = void 0), f) {
					this.#d.cancel();
					return;
				}
				let p = (e) => {
					o(a, e);
				};
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !nb()) this.#o();
				else if (e.type == "wheel") {
					r = t, this.#m = !1;
					let n = e;
					if (Math.abs(n.deltaX) > Math.abs(n.deltaY)) this.#B(), this.#d.cancel();
					else if (o(a, { type: "wheelclaimprobe" }).wheelClaimed) {
						let e = HC(n);
						this.#d.setMomentum(n.deltaY * (n.deltaMode ? 80 : 1), (t) => {
							let n = new WheelEvent("wheel", {
								...e,
								deltaMode: 0,
								deltaX: 0,
								deltaY: t
							});
							p(n);
						}), n.preventDefault();
						return;
					} else this.#d.cancel();
				}
				if (e.type == "click") {
					if (i) return;
					let t = this.#f?.subtract(Z.fromMouseEvent(e)).length >= 3, n = () => {
						let n = this.#u ? {
							type: e.type,
							viewPath: this.#u.mark.unitView.getLayoutAncestors().map((e) => e.name).reverse(),
							datum: this.#u.datum
						} : {
							type: e.type,
							viewPath: null,
							datum: null
						};
						if (this.#i("click", n), !t) return o(a, e);
					};
					if (d) {
						d.then((e) => {
							e && n();
						});
						return;
					}
					return n();
				}
				let m = o(a, e);
				return e.type == "dblclick" && this.#_ === 0 && this.#O(a) && this.#k(), m;
			}
		};
		n(e, "mousedown", (e) => {
			this.#f = Z.fromMouseEvent(e), this.#h = !1;
			let t = e.shiftKey || e.ctrlKey || e.metaKey;
			this.#n.sticky ? (this.#E(), i = !0) : i = !1;
			let n = () => {
				document.addEventListener("mouseup", () => this.#n.popEnabledState(), {
					once: !0,
					capture: !0
				}), this.#n.pushEnabledState(!1);
			};
			if (e.button == 2) n();
			else if (e.button == 0 && this.#n.visible) {
				this.#h = !0;
				let e;
				t || (e = setTimeout(() => {
					i = !0, this.#h = !1, this.#n.sticky = !0;
				}, 400));
				let n = (t) => {
					clearTimeout(e), this.#h && (this.#h = !1, t && this.#_ > 0 && this.#M());
				};
				document.addEventListener("mouseup", () => n(!1), { once: !0 }), document.addEventListener("mousemove", () => n(!0), { once: !0 });
			}
		}), [
			"mousedown",
			"mouseup",
			"wheel",
			"click",
			"mousemove",
			"contextmenu",
			"dblclick",
			"mouseenter",
			"mouseleave"
		].forEach((t) => n(e, t, u));
		let d = (e) => {
			if (e.length <= 0) return;
			let t = e[0];
			if (e.length === 1) return {
				pointerCount: 1,
				centerX: t.clientX,
				centerY: t.clientY,
				distance: 0
			};
			let n = e[1];
			return {
				pointerCount: 2,
				centerX: (t.clientX + n.clientX) / 2,
				centerY: (t.clientY + n.clientY) / 2,
				distance: JC(t, n)
			};
		}, f = (t, n, r, i, a, s, c) => {
			let l = YC(e, t, n);
			o(l, {
				type: "touchgesture",
				phase: r,
				pointerCount: i,
				xDelta: a,
				yDelta: s,
				zDelta: c
			});
		}, p = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#m = !1;
			let t = d(e.touches);
			if (!t) {
				a = void 0;
				return;
			}
			if (!a || a.pointerCount !== t.pointerCount) {
				a = t;
				return;
			}
			let n = t.centerX - a.centerX, r = t.centerY - a.centerY, i = t.pointerCount === 2 ? XC(a.distance, t.distance) : 0;
			(n !== 0 || r !== 0 || i !== 0) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && f(a.centerX, a.centerY, "move", t.pointerCount, n, r, i), a = t;
		}, m = (e) => {
			e.preventDefault(), this.#m = !1, a && e.touches.length === 0 && f(a.centerX, a.centerY, "end", a.pointerCount, 0, 0, 0), a = d(e.touches);
		};
		return n(e, "touchstart", p, { passive: !1 }), n(e, "touchmove", p, { passive: !1 }), n(e, "touchend", m, { passive: !1 }), n(e, "touchcancel", m, { passive: !1 }), n(e, "dragstart", (e) => e.stopPropagation()), n(e, "mouseout", (e) => {
			if (!this.#N()) {
				if (this.#_ > 0) {
					this.#M();
					return;
				}
				this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#B(), this.#p = void 0, c = void 0, s = void 0;
			}
		}), () => {
			for (let e of t) e();
			this.#b.clear(), this.#x.clear(), this.#S.clear();
		};
	}
	#D(e) {
		return YC(this.#t, e.clientX, e.clientY);
	}
	#O(e) {
		let t = this.#t;
		return e.x >= 0 && e.y >= 0 && e.x <= t.clientWidth && e.y <= t.clientHeight;
	}
	#k() {
		this.#v || (this.#v = !0, this.#r.requestRender(), window.requestAnimationFrame(() => {
			if (this.#v = !1, this.#_ > 0 || this.#N()) return;
			let e = this.#p;
			if (!e || !this.#O(e)) {
				this.#B(), this.#l.clear();
				return;
			}
			this.#M(), this.#A(e);
		}));
	}
	#A(e) {
		if (!nb()) {
			this.#P(e.x, e.y, () => this.#_ === 0 && !this.#N() && this.#p === e, () => this.#j(this.#c.getCurrentTarget()));
			return;
		}
		this.#j(this.#c.getCurrentTarget());
	}
	#j(e) {
		this.#l.update({
			target: e,
			hover: this.#u
		});
	}
	#M() {
		this.#n.clear(), this.#m = !1;
	}
	#N() {
		return typeof document < "u" && !!document.body && document.body.classList.contains("gs-freeze-interaction");
	}
	#P(e, t, n = () => !0, r) {
		let i = this.#y;
		this.#o();
		let a = this.#s?.(e, t) ?? 0, o = (a) => {
			if (i !== this.#y || !n()) return !1;
			this.#m = !1;
			let o = this.#I(e, t, a ?? 0);
			return this.#F(i, o), r?.(o), !0;
		};
		if (a instanceof Promise) return a.then(o, (e) => (console.error("Picking failed.", e), !1));
		o(a);
	}
	#F(e, t) {
		if (this.#C = e, this.#z(t ?? null), this.#u) {
			let e = this.#u.mark;
			this.updateTooltip(this.#u.datum, async (t) => {
				if (!e.isPickingParticipant()) return;
				let n = e.properties.tooltip;
				if (n !== null && n !== !1) {
					let r = n?.handler ?? "default", i = this.#a[r];
					if (!i) throw Error("No such tooltip handler: " + r);
					let a = Y_(t, e, n?.params);
					return i(t, e, n?.params, a);
				}
			});
		}
	}
	#I(e, t, n, r) {
		if (n === 0) return;
		let i;
		return this.#e.visit((a) => {
			if (a instanceof J && a.mark.isPickingParticipant() && (!r || a.getLayoutAncestors().includes(r)) && [...a.facetCoords.values()].some((n) => n.containsPoint(e, t))) {
				let e = a.getCollector()?.findDatumByUniqueId(n);
				e && (i = {
					mark: a.mark,
					datum: e,
					uniqueId: n
				});
			}
			if (i) return er;
		}), i;
	}
	#L(e, t, n) {
		if (n) {
			for (let r of [...this.#x]) if (r.type === e.type && n.mark.unitView.getLayoutAncestors().includes(r.view)) try {
				let i = r.listener({
					sourceEvent: e,
					point: t,
					hit: n
				});
				i instanceof Promise && i.catch(this.#w);
			} catch (e) {
				this.#w(e);
			}
		}
	}
	#R(e) {
		let t = this.#u;
		return t && this.#C === this.#y && t.mark.isPickingParticipant() && t.mark.unitView.getLayoutAncestors().includes(e) ? t : void 0;
	}
	#z(e) {
		let t = this.#u;
		if (this.#u = e, !(!t && !this.#u || t && this.#u && t.mark === this.#u.mark && t.uniqueId === this.#u.uniqueId && t.datum === this.#u.datum)) for (let e of [...this.#S]) try {
			e.listener(this.#R(e.view));
		} catch (e) {
			this.#w(e);
		}
	}
	#B() {
		this.#z(null);
	}
	updateTooltip(e, t) {
		if (!this.#g) if (!this.#m || !e) this.#n.updateWithDatum(e, t), this.#m = !0;
		else throw Error("Tooltip has already been updated! Duplicate event handler?");
	}
};
function JC(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function YC(e, t, n) {
	let r = e.getBoundingClientRect();
	return new Z(t - r.left - e.clientLeft, n - r.top - e.clientTop);
}
function XC(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region ../core/src/rendering/renderingBackend.js
async function ZC(e) {
	if (e.renderer == "canvas") {
		if (!lr.canvasBackend) throw QC("canvas");
		return lr.canvasBackend(e);
	} else if (e.renderer == "webgpu") {
		if (lr.webgpuBackend) return lr.webgpuBackend(e);
		throw Error("The experimental WebGPU renderer is only available in development and the playground preview.");
	} else if (e.renderer != "auto" && e.renderer != "webgl") throw Error("Unknown renderer: " + e.renderer);
	let t = lr.webglBackend, n = lr.canvasBackend;
	if (!t) {
		if (e.renderer == "webgl") throw QC("webgl");
		if (n) return n(e);
		throw Error("No rendering backend is registered. Import \"@genome-spy/core/rendering/webgl.js\" or \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".");
	}
	try {
		return await t(e);
	} catch (t) {
		if (e.renderer == "webgl") throw t;
		if (!n) throw Error("WebGL2 initialization failed and the Canvas2D fallback is not registered. Import \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".", { cause: t });
		let r = await n(e);
		return cr("WebGL2 is unavailable. Using the Canvas2D compatibility renderer."), r;
	}
}
function QC(e) {
	return /* @__PURE__ */ Error(`The "${e}" rendering backend is not registered. Import "@genome-spy/core/rendering/${e}.js" when using "@genome-spy/core/minimal".`);
}
//#endregion
//#region ../core/src/genomeSpy/viewContextFactory.js
function $C(e) {
	let t = (e) => {
		throw Error("ViewContext." + e + " is not configured.");
	}, n = {
		dataFlow: e.dataFlow ?? t("dataFlow"),
		getMarkRenderingDebugState: e.getMarkRenderingDebugState,
		animator: e.animator ?? t("animator"),
		genomeStore: e.genomeStore,
		textMetrics: e.textMetrics ?? t("textMetrics"),
		createOrImportView: async function(t, r, i, a, o, s) {
			let c = e.createOrImportViewWithContext;
			return c ? c(n, t, r, i, a, o, s) : Promise.reject(/* @__PURE__ */ Error("ViewContext.createOrImportView is not configured."));
		}
	}, r = [
		"requestLayoutReflow",
		"renderImmediately",
		"updateTooltip",
		"getNamedDataFromProvider",
		"getCurrentHover",
		"suspendHoverTracking",
		"resumeHoverTracking",
		"addKeyboardListener",
		"addBroadcastListener",
		"removeBroadcastListener",
		"highlightView",
		"isViewConfiguredVisible",
		"isViewSpec",
		"getBaseConfig"
	], i = e, a = n;
	for (let e of r) a[e] = i[e] ?? (() => t(e));
	return n;
}
//#endregion
//#region ../core/src/config/defaults/markDefaults.js
var ew = {
	xOffset: 0,
	yOffset: 0,
	opacity: 1
}, tw = {
	x: .5,
	y: .5,
	filled: !0,
	size: 100,
	semanticScore: 0,
	shape: "circle",
	strokeWidth: 2,
	fillGradientStrength: 0,
	dx: 0,
	dy: 0,
	angle: 0,
	sampleFacetPadding: .1,
	semanticZoomFraction: .02,
	minPickingSize: 2
}, nw = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 3,
	cornerRadius: 0,
	minWidth: .5,
	minHeight: .5,
	minOpacity: 1
}, rw = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 1,
	direction: "forward",
	headAngle: 45,
	headNotchAngle: 90,
	headShape: "triangle",
	size: 8,
	minSize: 1,
	stem: !0,
	headWidth: 3,
	startNotch: !1,
	minStemLength: 0,
	headSpacing: null,
	headPlacement: "inside"
}, iw = {
	"arrow-transcript": {
		headShape: "open",
		headAngle: 45,
		headWidth: 7,
		size: 1,
		headSpacing: 10,
		color: "black"
	},
	"arrow-block": {
		headShape: "triangle",
		headAngle: 45,
		headNotchAngle: 90,
		headWidth: 1,
		size: { band: 1 }
	},
	"arrow-block-notch": {
		headShape: "triangle",
		headAngle: 45,
		headNotchAngle: 90,
		headWidth: 1,
		size: { band: 1 },
		startNotch: !0,
		headPlacement: "outside",
		minStemLength: 15
	}
}, aw = {
	x2: void 0,
	y2: void 0,
	size: 1,
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt"
}, ow = {
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt",
	orient: void 0,
	thickness: 1
}, sw = {
	x: .5,
	y: .5,
	x2: void 0,
	y2: void 0,
	text: "",
	size: 11,
	font: void 0,
	fontStyle: void 0,
	fontWeight: void 0,
	align: "center",
	baseline: "middle",
	dx: 0,
	dy: 0,
	angle: 0,
	fitToBand: !1,
	squeeze: !0,
	paddingX: 0,
	paddingY: 0,
	flushX: !0,
	flushY: !0,
	logoLetters: !1,
	viewportEdgeFadeWidthTop: 0,
	viewportEdgeFadeWidthRight: 0,
	viewportEdgeFadeWidthBottom: 0,
	viewportEdgeFadeWidthLeft: 0,
	viewportEdgeFadeDistanceTop: -Infinity,
	viewportEdgeFadeDistanceRight: -Infinity,
	viewportEdgeFadeDistanceBottom: -Infinity,
	viewportEdgeFadeDistanceLeft: -Infinity
}, cw = {
	x: 0,
	x2: void 0,
	y: 0,
	y2: void 0,
	size: 1,
	segments: 101,
	arcHeightFactor: 1,
	minArcHeight: 1.5,
	minPickingSize: 3,
	clampApex: !1,
	maxChordLength: 5e4,
	arcFadingDistance: !1,
	linkShape: "arc",
	orient: "vertical"
}, lw = {
	values: null,
	minExtent: 20,
	maxExtent: Infinity,
	offset: 0,
	domain: !0,
	domainWidth: 1,
	domainColor: "gray",
	domainDash: null,
	domainDashOffset: 0,
	domainCap: "square",
	ticks: !0,
	tickSize: 5,
	tickWidth: 1,
	tickColor: "gray",
	tickDash: null,
	tickDashOffset: 0,
	tickCap: "square",
	tickCount: null,
	tickMinStep: null,
	labels: !0,
	labelAlign: "center",
	labelBaseline: "middle",
	labelPadding: 4,
	labelFontSize: 10,
	labelLimit: 180,
	labelColor: "black",
	format: null,
	titleColor: "black",
	titleFont: "sans-serif",
	titleFontSize: 10,
	titlePadding: 3,
	grid: !1,
	gridCap: "butt",
	gridColor: "lightgray",
	gridDash: null,
	gridOpacity: 1,
	gridWidth: 1
}, uw = { expr: "round(axisLength / (30 + 55 * smoothstep(100, 700, axisLength)))" }, dw = { tickCount: uw }, fw = { tickCount: uw }, pw = {
	tickCount: { expr: "round(axisLength / 85)" },
	chromTicks: !0,
	chromTickSize: 18,
	chromTickWidth: 1,
	chromTickColor: "#989898",
	chromTickDash: [4, 2],
	chromTickDashOffset: 1,
	chromLabels: !0,
	chromLabelFontSize: 13,
	chromLabelFontWeight: "normal",
	chromLabelFontStyle: "normal",
	chromLabelColor: "black",
	chromLabelAlign: "left",
	chromLabelPadding: 7,
	chromGrid: !1,
	chromGridCap: "butt",
	chromGridColor: "gray",
	chromGridDash: [1, 5],
	chromGridOpacity: 1,
	chromGridWidth: 1
}, mw = {
	nominalColorScheme: "tableau10",
	ordinalColorScheme: "blues",
	quantitativeColorScheme: "viridis"
}, hw = {
	shape: [
		"circle",
		"square",
		"triangle-up",
		"cross",
		"diamond"
	],
	size: [0, 400],
	angle: [0, 360],
	heatmap: "yellowgreenblue"
}, gw = {
	anchor: "middle",
	frame: "group",
	offset: 10,
	orient: "top",
	reserve: !0,
	align: void 0,
	angle: 0,
	baseline: "alphabetic",
	dx: 0,
	dy: 0,
	color: void 0,
	font: void 0,
	fontSize: 13,
	fontStyle: "normal",
	fontWeight: "normal",
	subtitlePadding: 3
}, _w = {
	orient: "top",
	frame: "group",
	reserve: !1,
	anchor: "start",
	align: "left",
	baseline: "top",
	offset: -10,
	dx: 10,
	fontSize: 12
}, vw = {
	view: {},
	mark: ew,
	point: tw,
	rect: nw,
	arrow: rw,
	rule: aw,
	tick: ow,
	text: sw,
	link: cw,
	axis: lw,
	axisX: dw,
	axisY: fw,
	axisLocus: pw,
	legend: Yb,
	legendTrack: Qb,
	scale: mw,
	range: hw,
	title: gw,
	style: {
		"group-title": {},
		"track-title": {
			orient: "left",
			frame: "group",
			reserve: !0,
			anchor: "middle",
			align: "right",
			baseline: "middle",
			angle: 0,
			fontSize: 12
		},
		overlay: _w,
		"overlay-title": _w,
		"group-subtitle": {
			fontSize: 11,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		...Zb,
		...iw
	}
};
//#endregion
//#region ../core/src/view/gridView/guideViewSync.js
async function yw(e) {
	let t = e.getDescendants(), n = /* @__PURE__ */ new Map();
	for (let e of cS(t)) for (let t of new Set(Object.values(e.resolutions.legend))) {
		let r = _C(e, t.channel);
		if (r) {
			let t = n.get(r) ?? [];
			t.includes(e) || (t.push(e), n.set(r, t));
		}
	}
	let r = t.filter((e) => e instanceof hC);
	for (let e of r) await e.syncGuideViews({ legendOwners: n.get(e) ?? [] });
}
//#endregion
//#region ../core/src/genomeSpy/headlessBootstrap.js
function bw(e) {
	Nv(e), Pv(e);
}
//#endregion
//#region ../core/src/utils/bindDisposer.js
function xw(e, t) {
	let n = !1, r = () => {
		n || (n = !0, t());
	};
	return e(r), r;
}
//#endregion
//#region ../core/src/paramRuntime/embedParamApi.js
function Sw(e, t = {}) {
	return {
		get(n) {
			return ww(e, n, t);
		},
		getSelection(n) {
			return Tw(e, n, t);
		}
	};
}
function Cw(e, t, n, r) {
	jw(r);
	let i = e.paramRuntime.findConfiguredParam(t);
	if (!i) throw Error(`${n} "${t}" not found.`);
	let a = i.runtime.findRuntimeForParam(t);
	return {
		...i,
		valueRuntime: a
	};
}
function ww(e, t, n = {}) {
	let { config: r, runtime: i, valueRuntime: a } = Cw(e, t, "Parameter", n), o = "expr" in r;
	return Aw(a, t, n, (e) => {
		if (o) throw Error("Cannot set computed parameter \"" + t + "\".");
		i.setValue(t, e);
	});
}
function Tw(e, t, n = {}) {
	let { config: i, runtime: a, valueRuntime: o } = Cw(e, t, "Selection", n);
	if (!("select" in i)) throw Error("Parameter \"" + t + "\" is not a selection in this scope.");
	let s = Ve(i.select), c = ae(s) ? a.getSelectionController(t) : void 0;
	if (ae(s) && !c) throw Error("Selection \"" + t + "\" has no interaction host in this scope.");
	return {
		type: s.type,
		getValue() {
			return jw(n), Ew(o.getValue(t), c);
		},
		subscribe(e, r = {}) {
			return jw(n), r.delivery === "commit" && c ? Mw(n, c.subscribeCommit((t) => e(Ew(t, c)))) : kw(o, t, () => {
				Ow(e, Ew(o.getValue(t), c));
			}, n);
		},
		clear() {
			jw(n), c ? c.clear() : r(s) && s.toggle ? a.setValue(t, D()) : a.setValue(t, A(null));
		},
		...c ? { contains(e) {
			return jw(n), c.contains(e);
		} } : {}
	};
}
function Ew(e, t) {
	if (T(e)) return {
		type: "interval",
		active: Object.values(e.intervals).some((e) => e !== null),
		intervals: Object.fromEntries(Object.entries(e.intervals).map(([e, t]) => [e, t ? [...t] : null])),
		complexIntervals: t.getComplexIntervals(e.intervals)
	};
	let n;
	if (g(e)) n = e.datum ? [e.datum] : [];
	else if (xt(e)) n = Array.from(e.data.values());
	else throw Error(`Selection snapshot does not support "${e.type}" selections.`);
	return {
		type: "point",
		active: n.length > 0,
		data: n.map(Dw)
	};
}
function Dw(e) {
	let t = { ...e };
	return delete t.__uniqueId, t;
}
function Ow(e, t) {
	try {
		e(t);
	} catch (e) {
		console.error(e);
	}
}
function kw(e, t, n, r) {
	let i = e.getParamRef(t);
	return Mw(r, e.effect([i], n));
}
function Aw(e, t, n, r) {
	return {
		getValue() {
			return jw(n), e.getValue(t);
		},
		setValue(e) {
			jw(n), r(e);
		},
		subscribe(r) {
			return jw(n), kw(e, t, () => {
				Ow(r, e.getValue(t));
			}, n);
		}
	};
}
function jw(e) {
	if (e.isActive && !e.isActive()) throw Error("Cannot use a parameter or selection handle after the embed was finalized.");
	if (e.isLive && !e.isLive()) throw Error("Cannot use a parameter or selection handle after its view was removed.");
}
function Mw(e, t) {
	return e.registerDisposer ? xw(e.registerDisposer, t) : t;
}
function Nw(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (e.visit((e) => {
		let i = e.paramRuntime.paramConfigs.get(t);
		if (!i) return;
		let a = e.paramRuntime.findRuntimeForParam(t), o = n.get(a);
		n.set(a, {
			runtime: a,
			readOnly: !!(o?.readOnly || "expr" in i),
			pointSelection: !!(o?.pointSelection || "select" in i && r(Ve(i.select)))
		});
	}), n.size === 0) throw Error("Parameter \"" + t + "\" not found.");
	if (n.size > 1) throw Error("Parameter \"" + t + "\" is ambiguous.");
	let { runtime: i, readOnly: a, pointSelection: o } = n.values().next().value;
	return Aw(i, t, {}, (n) => {
		if (a) throw Error("Cannot set computed parameter \"" + t + "\".");
		if (o) throw Error("Cannot set point selection parameter \"" + t + "\" through the embed API.");
		i.setValue(t, n), e.context.animator.requestRender();
	});
}
//#endregion
//#region ../core/src/genome/rootGenomeConfig.js
function Pw(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && Iw(t) ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: Fw()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !Iw(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function Fw() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function Iw(e) {
	try {
		return Xd(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../core/src/config/themes.js
var Lw = {
	mark: { color: "#4c78a8" },
	point: {
		filled: !1,
		size: 30
	},
	rule: { color: "black" },
	text: { color: "black" },
	view: {
		continuousWidth: 300,
		continuousHeight: 300,
		step: 20,
		stroke: "#ddd",
		strokeWidth: 1
	},
	axis: {
		grid: !1,
		domain: !0,
		tickColor: "gray",
		domainColor: "gray",
		gridColor: "#ddd",
		labelColor: "#333",
		titleColor: "black",
		titleFontSize: 11,
		titleFontWeight: "bold"
	},
	axisX: { tickCount: { expr: "ceil(axisLength / 40)" } },
	axisY: { tickCount: { expr: "ceil(axisLength / 40)" } },
	legend: {
		titleColor: "black",
		titleFontSize: 11,
		titleFontWeight: "bold"
	},
	style: {
		"group-title": {
			color: "black",
			fontSize: 13,
			fontWeight: "bold"
		},
		"group-subtitle": {
			color: "black",
			fontSize: 12
		}
	},
	axisQuantitative: { grid: !0 },
	scale: {
		nominalColorScheme: "tableau10",
		ordinalColorScheme: "blues",
		quantitativeColorScheme: "blues"
	},
	range: {
		heatmap: "yellowgreenblue",
		ramp: "blues",
		diverging: "blueorange"
	}
}, Rw = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: "black" },
		text: { color: "black" },
		link: { color: "black" }
	},
	vegalite: Lw,
	quartz: H([Lw, {
		background: "#f9f9f9",
		view: { fill: "#f9f9f9" },
		mark: { color: "#ab5787" },
		point: { size: 30 },
		axis: {
			domainColor: "#979797",
			domainWidth: .5,
			gridWidth: .2,
			labelColor: "#979797",
			tickColor: "#979797",
			tickWidth: .2,
			titleColor: "#979797"
		},
		axisX: {
			grid: !0,
			tickSize: 10
		},
		axisY: {
			domain: !1,
			grid: !0,
			tickSize: 0
		}
	}]),
	dark: H([Lw, {
		background: "#333",
		view: {
			fill: "#333",
			stroke: "#888"
		},
		title: { color: "#fff" },
		axis: {
			domainColor: "#fff",
			gridColor: "#888",
			tickColor: "#fff",
			labelColor: "#fff",
			titleColor: "#fff"
		},
		text: { color: "#fff" },
		rule: { color: "#fff" }
	}]),
	fivethirtyeight: H([Lw, {
		background: "#f0f0f0",
		view: { fill: "#f0f0f0" },
		mark: { color: "#30a2da" },
		point: {
			filled: !0,
			shape: "circle"
		},
		axis: {
			domainColor: "#cbcbcb",
			grid: !0,
			gridColor: "#cbcbcb",
			gridWidth: 1,
			labelColor: "#999",
			labelFontSize: 10,
			titleColor: "#333",
			tickColor: "#cbcbcb",
			tickSize: 10,
			titleFontSize: 14,
			titlePadding: 10,
			labelPadding: 4
		},
		axisNominal: { grid: !1 },
		axisOrdinal: { grid: !1 },
		title: {
			anchor: "start",
			fontSize: 24,
			fontWeight: 600,
			offset: 20
		}
	}]),
	urbaninstitute: H([Lw, {
		background: "#FFFFFF",
		view: {
			fill: "#FFFFFF",
			stroke: "#000000",
			strokeOpacity: 0
		},
		mark: { color: "#1696d2" },
		point: { filled: !0 },
		text: {
			font: "Lato",
			color: "#1696d2",
			size: 11,
			align: "center",
			fontWeight: 400
		},
		title: {
			anchor: "start",
			fontSize: 18,
			font: "Lato"
		},
		axisX: {
			domain: !0,
			domainColor: "#000000",
			domainWidth: 1,
			grid: !1,
			labelFontSize: 12,
			labelFont: "Lato",
			labelAngle: 0,
			tickColor: "#000000",
			tickSize: 5,
			titleFontSize: 12,
			titlePadding: 10,
			titleFont: "Lato"
		},
		axisY: {
			domain: !1,
			domainWidth: 1,
			grid: !0,
			gridColor: "#DEDDDD",
			gridWidth: 1,
			labelFontSize: 12,
			labelFont: "Lato",
			labelPadding: 8,
			ticks: !1,
			titleFontSize: 12,
			titlePadding: 10,
			titleFont: "Lato"
		}
	}])
}, zw = Object.keys(Rw);
function Bw(e) {
	let t = { ...Rw[e] };
	return delete t.background, t;
}
function Vw(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in Rw));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + zw.join(", "));
	return t;
}
var Hw = "genomespy";
function Uw(e) {
	return Rw[e].background;
}
function Ww(e) {
	let t = Vw(e);
	if (t.length != 0) return H(t.map((e) => Bw(e)));
}
//#endregion
//#region ../core/src/genomeSpy/canvasBackground.js
function Gw(e) {
	if (e.background !== void 0) return e.background;
	let t = e.theme ? Array.isArray(e.theme) ? e.theme : [e.theme] : [], n;
	for (let e of t) {
		let t = Uw(e);
		t !== void 0 && (n = t);
	}
	return n;
}
function Kw(e, t) {
	return t.background === void 0 ? Gw(e) ?? "white" : t.background;
}
//#endregion
//#region ../core/src/genomeSpyBase.js
var qw = class {
	#e = [];
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	#c = !1;
	#l = !1;
	#u = !1;
	#d;
	#f = /* @__PURE__ */ new Set();
	#p = new jl();
	#m = new Ml();
	#h = new Ml();
	constructor(e, t, n = {}) {
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new LC(), this.namedDataProviders = [], this.animator = new Rn(() => this.renderAll()), this._layoutReflowTransition = () => this.computeLayout(), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: fv,
			refseqgene: j_,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#i = new Pl(e, n), this.dpr = window.devicePixelRatio;
	}
	get #g() {
		return this.container.querySelector(".canvas-wrapper");
	}
	get #_() {
		return this.#o.surface;
	}
	#v() {
		this.#i.initialize(this.viewRoot);
	}
	registerNamedDataProvider(e) {
		cr("The `namedDataProvider` embed option is deprecated. Declare named datasets explicitly and update them through `api.datasets` or the owning `ViewHandle.datasets`."), this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		cr("`updateNamedData()` is deprecated. Update an explicitly declared dataset through `api.datasets` or its owning `ViewHandle.datasets`.");
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
	}
	getParam(e) {
		return Nw(this.viewRoot, e);
	}
	addEventListener(e, t) {
		this.#m.add(e, t);
	}
	removeEventListener(e, t) {
		this.#m.remove(e, t);
	}
	broadcast(e, t) {
		let n = {
			type: e,
			payload: t
		};
		this.viewRoot.visit((e) => e.handleBroadcast(n)), this.#h.emit(e, n);
	}
	#y = () => {};
	#b() {
		this.dpr = this.#_.getDevicePixelRatio();
		let e = this.viewRoot.paramRuntime.allocateSetter("devicePixelRatio", this.dpr), t = () => {
			this.#_.invalidateSize(), this.dpr = this.#_.getDevicePixelRatio(), e(this.dpr), this.computeLayout(), this.renderAll();
		};
		if (this.#y = t, this.viewRoot.getSize().isGrowing()) {
			let e = new ResizeObserver(t);
			e.observe(this.container), this.#e.push(() => e.disconnect());
		}
		let n = null, r = () => {
			n != null && (n(), t());
			let e = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
			e.addEventListener("change", r), n = () => {
				e.removeEventListener("change", r);
			};
		};
		r(), n && this.#e.push(n);
	}
	async #x() {
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = vl(this.container), r = await ZC({
			renderer: this.options.renderer ?? "auto",
			container: e,
			sizeSource: () => this.viewRoot ? tm(this.viewRoot) : {
				width: void 0,
				height: void 0
			},
			powerPreference: this.options.powerPreference ?? "default",
			onCanvasResize: () => this.#y(),
			onRenderInvalidated: () => this.animator.requestRender(),
			onError: (e) => this.#A(e),
			...this.options.fontCatalog === void 0 ? {} : { fontCatalog: this.options.fontCatalog }
		});
		if (this.#l) throw r.surface.finalize(), Error("GenomeSpy was destroyed during launch.");
		this.#o = r, e.appendChild(t), this.tooltip = n, this.#r = new kl(), this.#n = new Ol(t, this.#r);
	}
	destroy() {
		if (this.#l) return;
		this.#l = !0, this.#a?.invalidatePendingPicks(), this.animator.finalize();
		let e = this.#g;
		for (this.container.classList.remove("genome-spy"), e?.classList.remove("loading"), this.#p.removeAll(), this.#e.forEach((e) => e()), this.#S(), this.#i.remove(), this.#n?.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	#S() {
		this.viewRoot && this.#s !== this.viewRoot && (this.viewRoot.disposeSubtree(), this.#s = this.viewRoot), this.#o && !this.#c && (this.#o.surface.finalize(), this.#c = !0);
	}
	async #C() {
		await this.#w();
		let e = this.#T();
		await this.#D(e), await x_(this.viewRoot, e.dataFlow, e.textMetrics, (e) => this.broadcast("dataFlowBuilt", e)), this.#k(e);
	}
	async #w() {
		this.genomeStore = new D_(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = Pw(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#T() {
		let e = new Jg();
		e.loadingStatusRegistry = this.#r;
		let t = MC({
			defaultConfig: vw,
			builtInTheme: Ww(Hw),
			theme: H([this.options.theme, Ww(this.spec.theme)])
		});
		return $C({
			dataFlow: e,
			getMarkRenderingDebugState: this.#o.getMarkRenderingDebugState,
			animator: this.animator,
			genomeStore: this.genomeStore,
			textMetrics: this.#o.textMetrics,
			updateTooltip: this.updateTooltip.bind(this),
			getNamedDataFromProvider: this.getNamedDataFromProvider.bind(this),
			getCurrentHover: () => this.#a.getCurrentHover(),
			suspendHoverTracking: () => this.#a?.suspendHoverTracking(),
			resumeHoverTracking: (e) => this.#a?.resumeHoverTracking(e),
			addKeyboardListener: (e, t) => {
				this.#p.add(e, (n) => {
					this.#E(e, n) && t(n);
				});
			},
			addBroadcastListener: (e, t) => this.#h.add(e, t),
			removeBroadcastListener: (e, t) => this.#h.remove(e, t),
			renderImmediately: this.renderAll.bind(this),
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: Al(this.container)
		});
	}
	#E(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #D(e) {
		let t = this.spec;
		this.viewRoot = await e.createOrImportView(t, null, null, PC), _v(this.viewRoot), wv(this.viewRoot), Tv(this.viewRoot), await mv(this.viewRoot, this.genomeStore), await yw(this.viewRoot), this.#r.set(this.viewRoot, "loading"), this.#g.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#v(), bw(this.viewRoot), this.#O(), this.#_.invalidateSize(), this.#t = this.#o.createRenderCoordinator({
			viewRoot: this.viewRoot,
			getBackground: () => Gw(this.spec),
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#n.updateLayout()
		}), e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.#b();
	}
	#O() {
		let e = Yn(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#k(e) {
		e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.viewRoot.visit((e) => ir(e, "size")), this.#_.invalidateSize(), this.#a = new qC({
			viewRoot: this.viewRoot,
			canvas: this.#_.canvas,
			tooltip: this.tooltip,
			animator: this.animator,
			emitEvent: this.#m.emit.bind(this.#m),
			tooltipHandlers: this.tooltipHandlers,
			renderPickingFramebuffer: this.#o.readPickingId ? this.renderPickingFramebuffer.bind(this) : void 0,
			readPickingId: this.#o.readPickingId,
			reportError: this.#A.bind(this),
			canPick: () => !!this.viewRoot?.hasRendered()
		});
	}
	async launch() {
		let e = !1;
		this.#u = !0, this.#d = void 0;
		try {
			return await this.#x(), this.#j(), await this.#C(), this.#j(), this.#e.push(this.#a.registerInteractionEvents()), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			return this.#M(this.#d ?? e), !1;
		} finally {
			this.#u = !1, this.#g?.classList.remove("loading"), this.#l && this.#S(), e && this.viewRoot && this.#r.set(this.viewRoot, "complete");
		}
	}
	#A(e) {
		this.#l || (this.#u && !this.#d && (this.#d = e), this.#M(e));
	}
	#j() {
		if (this.#l) throw Error("GenomeSpy was destroyed during launch.");
		if (this.#d) throw this.#d;
	}
	#M(e) {
		if (this.#l || this.#f.has(e)) return;
		this.#f.add(e);
		let t = `${e.view ? `At "${e.view.getPathString()}": ` : ""}${e.toString()}`;
		console.error(e.stack), this.options.onError?.(e, this.container) || yl(this.container, t), this.viewRoot && this.#r && this.#r.set(this.viewRoot, "error", t);
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await S_(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.textMetrics), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#_.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await kd(this.viewRoot.context, this.viewRoot, void 0, e, (e) => Md(e) && Yw(e));
	}
	updateTooltip(e, t) {
		this.#a.updateTooltip(e, t);
	}
	subscribeNativeEvent(e, t) {
		return this.#a.subscribeNativeEvent(e, t);
	}
	subscribeMarkEvent(e, t, n) {
		return this.#a.subscribeMarkEvent(e, t, n);
	}
	subscribeHover(e, t) {
		return this.#a.subscribeHover(e, t);
	}
	pick(e, t) {
		return this.#a.pick(e, t);
	}
	exportCanvas(e, t, n, r = "white") {
		try {
			return this.#o.exportCanvas({
				viewRoot: this.viewRoot,
				logicalWidth: e,
				logicalHeight: t,
				devicePixelRatio: n,
				clearColor: r
			});
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	async exportRaster(e = {}) {
		let t = Kw(this.spec, e);
		try {
			return { blob: await dr(this.#o, {
				viewRoot: this.viewRoot,
				logicalWidth: e.logicalWidth,
				logicalHeight: e.logicalHeight,
				pixelRatio: e.pixelRatio,
				clearColor: t,
				mimeType: e.mimeType
			}) };
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	async exportSvg(e = {}) {
		let t = this.#_.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height, i = Kw(this.spec, e);
		try {
			let { createSvgExport: t } = await Jw(), { svg: a, warnings: o, rasterized: s } = await t({
				viewRoot: this.viewRoot,
				rasterizeSvgRuns: (e) => fr(this.#o, e),
				logicalWidth: n,
				logicalHeight: r,
				background: i,
				rasterization: e.rasterization
			});
			return {
				blob: new Blob([new XMLSerializer().serializeToString(a)], { type: "image/svg+xml" }),
				warnings: o,
				rasterized: s
			};
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	async analyzeSvgExport(e = {}) {
		let t = this.#_.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height;
		try {
			return (await Jw()).analyzeSvgExport({
				viewRoot: this.viewRoot,
				logicalWidth: n,
				logicalHeight: r
			});
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	getLogicalCanvasSize() {
		return this.#_.getLogicalCanvasSize();
	}
	getRenderedBounds() {
		let e = {
			width: void 0,
			height: void 0
		};
		return this.viewRoot.visit((t) => {
			for (let n of t.facetCoords.values()) e.width = Math.max(e.width ?? 0, n.x2), e.height = Math.max(e.height ?? 0, n.y2);
		}), e;
	}
	computeLayout() {
		this.#t.computeLayout();
	}
	requestLayoutReflow() {
		this.animator.requestTransition(this._layoutReflowTransition);
	}
	renderAll() {
		this.#a?.invalidatePendingPicks(), this.#t.renderAll();
	}
	renderPickingFramebuffer() {
		this.#t.renderPickingFramebuffer?.();
	}
	createPickingBufferVisualization() {
		return this.#t.createPickingBufferVisualization?.();
	}
	getSearchableViews() {
		let e = [];
		return this.viewRoot.visit((t) => {
			t instanceof J && t.getSearchAccessors().length > 0 && e.push(t);
		}), e;
	}
	getNamedScaleResolutions() {
		let e = /* @__PURE__ */ new Map();
		return this.viewRoot.visit((t) => {
			for (let n of Object.values(t.resolutions.scale)) n.name && e.set(n.name, n);
		}), e;
	}
};
async function Jw() {
	let e = lr.svgRenderer;
	if (!e) throw Error("SVG export is not registered. Import \"@genome-spy/core/rendering/svg.js\" when using \"@genome-spy/core/minimal\".");
	return e();
}
function Yw(e) {
	let t = e.flowHandle?.collector;
	return !!t && ll(t).some((e) => e instanceof gc);
}
//#endregion
//#region ../core/src/data/formats/readBinary.js
async function Xw(e, t) {
	let n = t?.type;
	if (n !== "arrow" && n !== "parquet") throw Error("Unsupported binary data format: " + String(n));
	let r = Ya(n);
	if (!r) throw Error("Data format is not registered: " + n);
	let i = await r(Zw(e), t);
	if (!Array.isArray(i)) throw Error(`The ${n} data reader did not return an array.`);
	return i;
}
function Zw(e) {
	if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
	if (e instanceof ArrayBuffer) return new Uint8Array(e);
	throw TypeError("Binary data must be an ArrayBuffer or ArrayBufferView.");
}
//#endregion
//#region ../core/src/view/viewMutationApi.js
var $ = class extends Error {
	constructor(e, t, n) {
		super(t, n), this.name = "ViewMutationError", this.code = e;
	}
};
function Qw(e, t) {
	let n = () => e.viewRoot;
	return $w(() => IC(n()), n, t);
}
function $w(e, t, n = () => !0) {
	return {
		set(r, i) {
			eT(n);
			let a = e();
			iT(a, rT(a, r, t), i);
		},
		async load(r, i, a) {
			eT(n);
			let o = e(), s = rT(o, r, t), c = s.beginUpdate(), l = a?.type ?? "unknown", u = () => (eT(n), rT(o, r, t) === s && s.isCurrentUpdate(c)), d;
			try {
				d = await Xw(i, a);
			} catch (e) {
				if (!u()) return;
				throw new $("datasetLoadFailed", `Cannot load named dataset "${r}" as ${l}: ${tT(e)}`, { cause: e });
			}
			u() && iT(o, s, d);
		},
		reset(r) {
			eT(n);
			let i = e();
			iT(i, rT(i, r, t));
		}
	};
}
function eT(e) {
	if (!e()) throw new $("staleEmbed", "Cannot update named data through a finalized embed.");
}
function tT(e) {
	return e instanceof Error ? e.message : String(e);
}
function nT(e, t) {
	let n = t();
	return e === n || !!n?.getDescendants?.().includes(e);
}
function rT(e, t, n) {
	if (!nT(e, n)) throw new $("staleHandle", "Cannot update named data through a stale view handle.");
	if (typeof t != "string" || !t.length) throw new $("invalidNamedData", "Named dataset name must be a non-empty string.");
	let r = e.namedDataScope.getLocalBinding(t);
	if (r) return r;
	throw e.namedDataScope.findDeclaredBinding(t) ? new $("namedDataOwnerMismatch", "Named dataset \"" + t + "\" is declared by an ancestor view. Use the dataset owner's handle.") : new $("namedDataNotDeclared", "View does not declare named dataset \"" + t + "\". Add it to the view's datasets object before updating it.");
}
function iT(e, t, n) {
	e.context.dataFlow.updateNamedDataBinding(t, n), e.context.animator.requestRender();
}
function aT(e, t = () => !0) {
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = e, a = Promise.resolve(), o;
	function s() {
		return e.viewRoot;
	}
	function c(e) {
		return e instanceof OC ? "concat" : e instanceof X ? "layer" : e instanceof J ? "unit" : e instanceof hC ? "grid" : "unknown";
	}
	function l(e) {
		if (e.explicitName) try {
			return Bn(e);
		} catch {
			return;
		}
	}
	function u(e) {
		let i = n.get(e);
		return i || (i = {
			id: hr(s()).getId(e),
			get name() {
				return e.explicitName;
			},
			get selector() {
				return l(e);
			},
			get type() {
				return c(e);
			},
			isAlive: () => nT(e, s),
			parent: () => {
				if (!(!nT(e, s) || !e.layoutParent)) return u(e.layoutParent);
			},
			children: () => {
				let t = g(e);
				return !nT(e, s) || !t ? [] : t.map((e) => u(e));
			},
			datasets: $w(() => e, s, t),
			params: Sw(e, {
				isActive: t,
				isLive: () => nT(e, s),
				registerDisposer: (t) => e.registerDisposer(t)
			}),
			marks: d(e)
		}, n.set(e, i), r.set(i, e), i);
	}
	function d(e) {
		return {
			subscribe(n, r) {
				return m(t), h(e), xw((t) => e.registerDisposer(t), i.subscribeMarkEvent(e, n, (e) => r({
					sourceEvent: e.sourceEvent,
					point: p(e.point),
					hit: f(e.hit)
				})));
			},
			observeHover(n) {
				return m(t), h(e), xw((t) => e.registerDisposer(t), i.subscribeHover(e, (e) => n(e ? f(e) : void 0)));
			},
			pick(n) {
				return m(t), h(e), i.pick(n, e).then((e) => e.status === "hit" ? {
					status: "hit",
					hit: f(e.hit)
				} : e);
			}
		};
	}
	function f(e) {
		let t = { ...e.datum };
		return delete t[oe], {
			view: u(e.mark.unitView),
			uniqueId: e.uniqueId,
			datum: t
		};
	}
	function p(e) {
		return Object.freeze({
			x: e.x,
			y: e.y
		});
	}
	function m(e) {
		if (!e()) throw new $("staleEmbed", "Cannot use an API handle after the embed was finalized.");
	}
	function h(e) {
		if (!nT(e, s)) throw new $("staleHandle", "Cannot use a mark API handle for a removed view.");
	}
	function g(e) {
		let t = e.children;
		return Array.isArray(t) ? t : void 0;
	}
	function _(e) {
		if (e === "root") return u(s());
		if (oT(e)) return r.has(e) && e.isAlive() ? e : void 0;
		if (sT(e)) {
			let t = Qn(s(), e);
			return t ? u(t) : void 0;
		} else throw new $("invalidAddress", "View address must be a handle, selector, or \"root\".");
	}
	function v(e) {
		let t = _(e);
		if (t) return t;
		throw oT(e) && r.has(e) ? new $("staleHandle", "Stale view handle no longer refers to a live view.") : new $("unresolvedAddress", "View address did not resolve to a live view.");
	}
	function y(e) {
		let t = v(e), n = r.get(t);
		if (!n) throw new $("invalidAddress", "View handle is not owned by this GenomeSpy instance.");
		return n;
	}
	function b(e) {
		let t = _(e);
		if (!t) return;
		let n = r.get(t)?.coords;
		if (n) return {
			x: n.x,
			y: n.y,
			width: n.width,
			height: n.height
		};
	}
	function x(e) {
		let t = s().context, n = () => e();
		return t.addBroadcastListener("layoutComputed", n), () => t.removeBroadcastListener("layoutComputed", n);
	}
	function S(e) {
		return o ? w(o, e) : C(e);
	}
	function C(e) {
		let t = a.then(e, e);
		return a = t.then(T, T), t;
	}
	function w(e, t) {
		let n = e.queue.then(t, t);
		return e.queue = n.then(T, (t) => {
			e.failed = !0, e.error = t;
		}), n;
	}
	function T() {}
	function E() {
		let e = o;
		if (e) return e.depth++, e;
		let t = s().context, n = t.requestLayoutReflow, r = {
			depth: 1,
			queue: Promise.resolve(),
			failed: !1,
			error: void 0,
			requestedLayoutReflow: !1,
			restoreLayoutReflow: () => {
				t.requestLayoutReflow = n, r.requestedLayoutReflow && n.call(t);
			}
		};
		return t.requestLayoutReflow = () => {
			r.requestedLayoutReflow = !0;
		}, o = r, r;
	}
	function D(e) {
		e.depth--, e.depth === 0 && (e.restoreLayoutReflow(), o = void 0);
	}
	async function O(e) {
		let t;
		do
			t = e.queue, await t;
		while (e.queue !== t);
	}
	async function k(e) {
		let t = E(), n = t.failed, r, i, a = !1;
		try {
			r = await e(ue);
		} catch (e) {
			i = e, a = !0;
		}
		await O(t);
		try {
			if (a) throw i;
			if (t.failed && t.failed !== n) throw t.error;
			return r;
		} finally {
			D(t);
		}
	}
	function A(e, t, n = {}) {
		return S(async () => {
			let r = y(e), i = j(r), a = M(n.index, i), o = te(t, n);
			o !== void 0 && typeof o == "string" && N(r, o);
			let s = await ee(r, structuredClone(t), a);
			return n.scope !== void 0 && Un(s, n.scope), u(s);
		});
	}
	function j(e) {
		if (!(e instanceof OC) && !(e instanceof X)) throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
		let t = g(e);
		if (!t) throw new $("unsupportedContainer", "Mutable container does not expose layout children.");
		return t.length;
	}
	async function ee(e, t, n) {
		if (e instanceof OC) return e.addChildSpec(t, n);
		if (e instanceof X) {
			if (!re(t)) throw new $("unsupportedChildSpec", "Layer views accept only unit, layer, multiscale, or import specs as children.");
			return e.addChildSpec(t, n);
		}
		throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
	}
	function M(e, t) {
		let n = e ?? t;
		if (!Number.isInteger(n)) throw new $("invalidIndex", "Insert index must be an integer.");
		if (n < 0 || n > t) throw new $("invalidIndex", "Insert index must be between 0 and the current child count.");
		return n;
	}
	function te(e, t) {
		let n = $v(e) && "name" in e ? e.name : void 0;
		if (t.scope !== void 0 && n !== void 0 && t.scope !== n) throw new $("scopeMismatch", "Insert scope must match the import instance name.");
		return t.scope ?? n;
	}
	function N(e, t) {
		let n = Kn(e).concat(t);
		s().visit((e) => {
			let r = Xn(e);
			if (r && r.name === t && ne(Kn(e), n)) throw new $("duplicateScope", "Scope \"" + t + "\" already exists.");
		});
	}
	function ne(e, t) {
		return e.length === t.length && e.every((e, n) => e === t[n]);
	}
	function re(e) {
		if ($v(e)) return !0;
		let t = e;
		return Zv(t) || Qv(t) || Hv(t);
	}
	function ie(e) {
		return S(async () => {
			let t = y(e);
			if (t === s() || !t.layoutParent) throw new $("cannotRemoveRoot", "Removing the root view is not supported.");
			let n = t.layoutParent, r = g(n);
			if (!r) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let i = r.indexOf(t);
			if (i < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			await ae(n, i);
		});
	}
	async function ae(e, t) {
		if (e instanceof OC) await e.removeChildAt(t);
		else if (e instanceof X) await e.removeChildAt(t);
		else throw new $("unsupportedContainer", "Only concat and layer views support child removal.");
	}
	function se(e, t) {
		return S(async () => {
			let n = y(e);
			if (n === s() || !n.layoutParent) throw new $("cannotMoveRoot", "Moving the root view is not supported.");
			let r = n.layoutParent, i = g(r);
			if (!i) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let a = i.indexOf(n);
			if (a < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			if (!t) throw new $("invalidIndex", "Move options with an index are required.");
			return await le(r, a, ce(t.index, i.length - 1)), u(n);
		});
	}
	function ce(e, t) {
		if (!Number.isInteger(e)) throw new $("invalidIndex", "Move index must be an integer.");
		if (e < 0 || e > t) throw new $("invalidIndex", "Move index must be between 0 and the remaining child count.");
		return e;
	}
	async function le(e, t, n) {
		if (e instanceof OC) await e.moveChildAt(t, n);
		else if (e instanceof X) e.moveChildAt(t, n);
		else throw new $("unsupportedContainer", "Only concat and layer views support child reordering.");
	}
	let ue = {
		root: () => u(s()),
		resolve: _,
		get: v,
		getLayoutBounds: b,
		subscribeToLayout: x,
		insert: A,
		remove: ie,
		move: se,
		transaction: (e) => o ? k(e) : C(() => k(e))
	};
	return ue;
}
function oT(e) {
	return typeof e == "object" && !!e && typeof e.isAlive == "function";
}
function sT(e) {
	return typeof e == "object" && !!e && Array.isArray(e.scope) && typeof e.view == "string";
}
//#endregion
//#region ../core/src/embedApi.js
function cT({ genomeSpy: e, isActive: t, debug: n, finalize: r }) {
	return {
		views: aT(e, t),
		datasets: Qw(e, t),
		events: { subscribe(n, r) {
			if (!t()) throw Error("Cannot subscribe to events through a finalized embed.");
			return e.subscribeNativeEvent(n, (e) => r({
				sourceEvent: e.sourceEvent,
				point: Object.freeze({
					x: e.point.x,
					y: e.point.y
				}),
				preventViewDefault: e.preventViewDefault
			}));
		} },
		params: Sw(IC(e.viewRoot), { isActive: t }),
		finalize: r,
		addEventListener: e.addEventListener.bind(e),
		removeEventListener: e.removeEventListener.bind(e),
		getScaleResolutionByName(t) {
			return e.getNamedScaleResolutions().get(t);
		},
		getParam: e.getParam.bind(e),
		awaitVisibleLazyData: e.awaitVisibleLazyData.bind(e),
		getRenderedBounds: e.getRenderedBounds.bind(e),
		updateNamedData: e.updateNamedData.bind(e),
		getLogicalCanvasSize: e.getLogicalCanvasSize.bind(e),
		exportCanvas: e.exportCanvas.bind(e),
		imageExport: {
			raster: e.exportRaster.bind(e),
			svg: e.exportSvg.bind(e),
			analyzeSvg: e.analyzeSvgExport.bind(e)
		},
		debug: n
	};
}
//#endregion
//#region ../core/src/utils/inferSpecBaseUrl.js
var lT = [
	["/docs/example-specs/", "/docs/example-specs/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], uT = /^(?:[a-z]+:)?\/\//i, dT = "https://example.invalid";
function fT(e) {
	return uT.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function pT(e) {
	let t = new URL(e, dT), n = lT.find(([e]) => t.pathname.startsWith(e));
	if (n) return hT(n[1], t, fT(e));
}
function mT(e) {
	let t = pT(e);
	if (t) return t;
	let n = new URL(e, dT);
	return hT(new URL("./", n).pathname, n, fT(e));
}
function hT(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region ../core/src/embedFactory.js
function gT(t) {
	return async function(n, r, i = {}) {
		let a = !0, o = () => a, s;
		if (Ae(n)) {
			if (s = document.querySelector(n), !s) throw Error(`No such element: ${n}`);
		} else if (n instanceof HTMLElement) s = n;
		else throw Error(`Invalid element: ${n}`);
		let c;
		try {
			let n = e(r) ? r : await vT(r);
			if (n.baseUrl ??= "", n.padding ??= 10, s == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", s.appendChild(e), s = e;
			}
			c = new t(s, n, i), _T(c, i), await c.launch();
		} catch (e) {
			s.innerText = e.toString(), console.error(e);
		}
		return cT({
			genomeSpy: c,
			isActive: o,
			debug: {
				getViewRoot() {
					return c ? c.viewRoot : void 0;
				},
				getModules() {
					return import("./debug-DQj_7mFm.js");
				},
				createPickingBufferVisualization() {
					return a ? c.createPickingBufferVisualization() : void 0;
				}
			},
			finalize() {
				a = !1, c.destroy(), s.replaceChildren();
			}
		});
	};
}
function _T(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function vT(e) {
	let t;
	try {
		t = await Xp(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl ||= mT(e), t;
}
//#endregion
//#region ../core/src/index.js
var yT = gT(qw);
//#endregion
export { fl as $, Ug as A, kd as B, Tv as C, p_ as D, m_ as E, Yp as F, yu as G, Od as H, Xp as I, El as J, iu as K, J as L, mh as M, Zp as N, v_ as O, $p as P, pl as Q, $d as R, wv as S, R_ as T, xd as U, Dd as V, xu as W, Cl as X, Sl as Y, xl as Z, Ey as _, xr as _t, OC as a, za as at, Zv as b, US as c, oa as ct, sS as d, K as dt, zc as et, Bx as f, Ci as ft, Wy as g, Sr as gt, Uy as h, xi as ht, qw as i, hc as it, Dg as j, n_ as k, WS as l, ia as lt, ib as m, G as mt, vT as n, Vc as nt, DC as o, Qa as ot, qb as p, si as pt, Nl as q, cT as r, Bc as rt, aC as s, Xa as st, yT as t, Gc as tt, GS as u, Ti as ut, X as v, _v as w, Pv as x, Qv as y, qd as z };
