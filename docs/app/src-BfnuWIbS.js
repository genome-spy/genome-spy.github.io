import { $ as e, At as t, Bt as n, C as r, Ct as i, D as a, Dt as o, Et as s, F as c, Ft as l, G as u, Gt as d, H as f, Ht as p, It as m, J as h, Jt as g, K as _, Kt as v, Lt as y, M as b, Mt as x, N as S, Nt as C, Ot as w, P as T, Pt as E, Q as D, Qt as O, Rt as k, St as ee, T as A, Tt as te, U as ne, Ut as re, V as j, Vt as ie, Wt as ae, X as M, Xt as N, Y as oe, Yt as se, Z as ce, Zt as le, _ as ue, _t as de, an as fe, at as pe, b as me, bt as he, c as ge, cn as _e, ct as ve, d as ye, dn as be, dt as xe, en as Se, et as Ce, f as we, ft as Te, g as P, gt as Ee, ht as F, i as De, in as Oe, it as ke, j as Ae, jt as je, k as Me, kt as Ne, ln as Pe, lt as I, m as Fe, mt as Ie, nn as Le, nt as Re, o as ze, ot as Be, p as Ve, pt as He, q as Ue, qt as We, r as Ge, rn as Ke, rt as qe, sn as Je, st as Ye, t as Xe, tt as Ze, u as L, un as Qe, ut as $e, v as et, vt as R, w as tt, wt as nt, x as rt, xt as it, y as at, yt as ot, z as st, zt as ct } from "./clipOptions-taFzEljc.js";
import { $ as lt, B as ut, C as dt, F as ft, G as pt, H as mt, I as ht, J as gt, K as _t, L as vt, M as yt, N as bt, O as xt, P as St, Q as Ct, R as wt, S as Tt, T as Et, U as Dt, V as Ot, W as kt, X as At, Y as jt, Z as Mt, _ as Nt, a as Pt, at as Ft, ct as It, et as Lt, g as Rt, h as zt, i as Bt, j as Vt, k as Ht, l as Ut, lt as Wt, m as Gt, nt as Kt, ot as qt, q as Jt, r as Yt, rt as Xt, st as Zt, v as z, w as Qt, x as $t, y as en } from "./vega-scale-D46-iCaL.js";
import { a as tn, d as nn, f as rn, m as an, n as on, o as sn, p as cn, s as ln, t as un, u as dn } from "./indexer-qiFctgR3.js";
import { A as fn, B as pn, C as B, D as mn, E as hn, F as gn, G as _n, H as vn, I as yn, L as bn, M as xn, N as Sn, O as V, P as Cn, R as wn, S as Tn, T as En, U as Dn, V as On, _ as kn, a as An, b as jn, c as H, d as Mn, g as Nn, h as Pn, i as Fn, j as In, k as Ln, l as U, m as Rn, n as zn, o as Bn, p as Vn, u as Hn, v as Un, x as Wn, y as Gn, z as Kn } from "./viewSelectors-D_imtq5Z.js";
import { a as qn, i as Jn, n as Yn, t as Xn } from "./viewError-BiR9VCgL.js";
import { i as Zn, n as Qn, r as $n } from "./rasterization-CFogVB3B.js";
import { i as er, n as tr, t as nr } from "./viewIdentityRegistry-CDtVktJD.js";
import { n as rr, t as W } from "./rectangle-DKnrAmKs.js";
import { t as ir } from "./warning-CpIIpk8e.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var ar = globalThis, or = ar.ShadowRoot && (ar.ShadyCSS === void 0 || ar.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, sr = Symbol(), cr = /* @__PURE__ */ new WeakMap(), lr = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== sr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (or && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = cr.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && cr.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, ur = (e) => new lr(typeof e == "string" ? e : e + "", void 0, sr), dr = (e, ...t) => new lr(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, sr), fr = (e, t) => {
	if (or) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = ar.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, pr = or ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return ur(t);
})(e) : e, { is: mr, defineProperty: hr, getOwnPropertyDescriptor: gr, getOwnPropertyNames: _r, getOwnPropertySymbols: vr, getPrototypeOf: yr } = Object, br = globalThis, xr = br.trustedTypes, Sr = xr ? xr.emptyScript : "", Cr = br.reactiveElementPolyfillSupport, wr = (e, t) => e, Tr = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Sr : null;
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
}, Er = (e, t) => !mr(e, t), Dr = {
	attribute: !0,
	type: String,
	converter: Tr,
	reflect: !1,
	useDefault: !1,
	hasChanged: Er
};
Symbol.metadata ??= Symbol("metadata"), br.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var Or = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = Dr) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && hr(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = gr(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? Dr;
	}
	static _$Ei() {
		if (this.hasOwnProperty(wr("elementProperties"))) return;
		let e = yr(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(wr("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(wr("properties"))) {
			let e = this.properties, t = [..._r(e), ...vr(e)];
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
			for (let e of n) t.unshift(pr(e));
		} else e !== void 0 && t.push(pr(e));
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
		return fr(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? Tr : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? Tr : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? Er)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
Or.elementStyles = [], Or.shadowRootOptions = { mode: "open" }, Or[wr("elementProperties")] = /* @__PURE__ */ new Map(), Or[wr("finalized")] = /* @__PURE__ */ new Map(), Cr?.({ ReactiveElement: Or }), (br.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var kr = globalThis, Ar = (e) => e, jr = kr.trustedTypes, Mr = jr ? jr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Nr = "$lit$", Pr = `lit$${Math.random().toFixed(9).slice(2)}$`, Fr = "?" + Pr, Ir = `<${Fr}>`, Lr = document, Rr = () => Lr.createComment(""), zr = (e) => e === null || typeof e != "object" && typeof e != "function", Br = Array.isArray, Vr = (e) => Br(e) || typeof e?.[Symbol.iterator] == "function", Hr = "[ 	\n\f\r]", Ur = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Wr = /-->/g, Gr = />/g, Kr = RegExp(`>|${Hr}(?:([^\\s"'>=/]+)(${Hr}*=${Hr}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), qr = /'/g, Jr = /"/g, Yr = /^(?:script|style|textarea|title)$/i, G = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), Xr = Symbol.for("lit-noChange"), K = Symbol.for("lit-nothing"), Zr = /* @__PURE__ */ new WeakMap(), Qr = Lr.createTreeWalker(Lr, 129);
function $r(e, t) {
	if (!Br(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return Mr === void 0 ? t : Mr.createHTML(t);
}
var ei = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Ur;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === Ur ? c[1] === "!--" ? o = Wr : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = Kr) : (Yr.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = Kr) : o = Gr : o === Kr ? c[0] === ">" ? (o = i ?? Ur, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? Kr : c[3] === "\"" ? Jr : qr) : o === Jr || o === qr ? o = Kr : o === Wr || o === Gr ? o = Ur : (o = Kr, i = void 0);
		let d = o === Kr && e[t + 1].startsWith("/>") ? " " : "";
		a += o === Ur ? n + Ir : l >= 0 ? (r.push(s), n.slice(0, l) + Nr + n.slice(l) + Pr + d) : n + Pr + (l === -2 ? t : d);
	}
	return [$r(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ti = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ei(t, n);
		if (this.el = e.createElement(l, r), Qr.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Qr.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(Nr)) {
					let t = u[o++], n = i.getAttribute(e).split(Pr), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? oi : r[1] === "?" ? si : r[1] === "@" ? ci : ai
					}), i.removeAttribute(e);
				} else e.startsWith(Pr) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Yr.test(i.tagName)) {
					let e = i.textContent.split(Pr), t = e.length - 1;
					if (t > 0) {
						i.textContent = jr ? jr.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], Rr()), Qr.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], Rr());
					}
				}
			} else if (i.nodeType === 8) if (i.data === Fr) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(Pr, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += Pr.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = Lr.createElement("template");
		return n.innerHTML = e, n;
	}
};
function ni(e, t, n = e, r) {
	if (t === Xr) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = zr(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = ni(e, i._$AS(e, t.values), i, r)), t;
}
var ri = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? Lr).importNode(t, !0);
		Qr.currentNode = r;
		let i = Qr.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new ii(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new li(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Qr.nextNode(), a++);
		}
		return Qr.currentNode = Lr, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, ii = class e {
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
		e = ni(this, e, t), zr(e) ? e === K || e == null || e === "" ? (this._$AH !== K && this._$AR(), this._$AH = K) : e !== this._$AH && e !== Xr && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? Vr(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== K && zr(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Lr.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ti.createElement($r(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new ri(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Zr.get(e.strings);
		return t === void 0 && Zr.set(e.strings, t = new ti(e)), t;
	}
	k(t) {
		Br(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(Rr()), this.O(Rr()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = Ar(e).nextSibling;
			Ar(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, ai = class {
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
		if (i === void 0) e = ni(this, e, t, 0), a = !zr(e) || e !== this._$AH && e !== Xr, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = ni(this, r[n + o], t, o), s === Xr && (s = this._$AH[o]), a ||= !zr(s) || s !== this._$AH[o], s === K ? e = K : e !== K && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === K ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, oi = class extends ai {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === K ? void 0 : e;
	}
}, si = class extends ai {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== K);
	}
}, ci = class extends ai {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = ni(this, e, t, 0) ?? K) === Xr) return;
		let n = this._$AH, r = e === K && n !== K || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== K && (n === K || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, li = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		ni(this, e);
	}
}, ui = {
	M: Nr,
	P: Pr,
	A: Fr,
	C: 1,
	L: ei,
	R: ri,
	D: Vr,
	V: ni,
	I: ii,
	H: ai,
	N: si,
	U: ci,
	B: oi,
	F: li
}, di = kr.litHtmlPolyfillSupport;
di?.(ti, ii), (kr.litHtmlVersions ??= []).push("3.3.3");
var fi = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new ii(t.insertBefore(Rr(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, pi = globalThis, mi = class extends Or {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = fi(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return Xr;
	}
};
mi._$litElement$ = !0, mi.finalized = !0, pi.litElementHydrateSupport?.({ LitElement: mi });
var hi = pi.litElementPolyfillSupport;
hi?.({ LitElement: mi }), (pi.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/vega-util/build/extend.js
function gi(e, ...t) {
	for (let n of t) for (let t in n) e[t] = n[t];
	return e;
}
//#endregion
//#region ../../node_modules/vega-util/build/isDate.js
function _i(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/vega-util/build/isIterable.js
function vi(e) {
	return e != null && fe(e[Symbol.iterator]);
}
//#endregion
//#region ../../node_modules/vega-util/build/isNumber.js
function yi(e) {
	return typeof e == "number";
}
//#endregion
//#region ../../node_modules/vega-util/build/toBoolean.js
function bi(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
//#endregion
//#region ../../node_modules/vega-util/build/toDate.js
var xi = (e) => yi(e) || _i(e) ? e : Date.parse(e);
function Si(e, t) {
	return t ||= xi, e == null || e === "" ? null : t(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/toString.js
function Ci(e) {
	return e == null || e === "" ? null : e + "";
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var wi = {}, Ti = {}, Ei = 34, Di = 10, Oi = 13;
function ki(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function Ai(e, t) {
	var n = ki(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function ji(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function q(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function Mi(e) {
	return e < 0 ? "-" + q(-e, 6) : e > 9999 ? "+" + q(e, 6) : q(e, 4);
}
function Ni(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : Mi(e.getUTCFullYear(), 4) + "-" + q(e.getUTCMonth() + 1, 2) + "-" + q(e.getUTCDate(), 2) + (i ? "T" + q(t, 2) + ":" + q(n, 2) + ":" + q(r, 2) + "." + q(i, 3) + "Z" : r ? "T" + q(t, 2) + ":" + q(n, 2) + ":" + q(r, 2) + "Z" : n || t ? "T" + q(t, 2) + ":" + q(n, 2) + "Z" : "");
}
function Pi(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? Ai(e, t) : ki(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === Di && --i, e.charCodeAt(i - 1) === Oi && --i;
		function u() {
			if (c) return Ti;
			if (l) return l = !1, wi;
			var t, r = a, o;
			if (e.charCodeAt(r) === Ei) {
				for (; a++ < i && e.charCodeAt(a) !== Ei || e.charCodeAt(++a) === Ei;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === Di ? l = !0 : o === Oi && (l = !0, e.charCodeAt(a) === Di && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === Di) l = !0;
				else if (o === Oi) l = !0, e.charCodeAt(a) === Di && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== Ti;) {
			for (var d = []; s !== wi && s !== Ti;) d.push(s), s = u();
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
		return n ??= ji(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= ji(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? Ni(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
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
var Fi = Pi("	");
Fi.parse;
var Ii = Fi.parseRows;
Fi.format, Fi.formatBody, Fi.formatRows, Fi.formatRow, Fi.formatValue;
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function Li(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function Ri(e) {
	if (e == null) return Li;
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
function zi(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function Bi(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return Vi(e, t);
		})
	} : Vi(e, t);
}
function Vi(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = Hi(e, t);
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
function Hi(e, t) {
	var n = Ri(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && zi(t, o);
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
function Ui(e, t) {
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
function Wi(e) {
	return Hi(e, Gi.apply(this, arguments));
}
function Gi(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = Ki(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: Ui(e, r)
	};
}
function Ki(e, t, n) {
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
function qi(e, t) {
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
function Ji(e, t) {
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
function Yi(e, t) {
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
function Xi(e, t) {
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
function Zi(e, t) {
	return Mt(e, .5, t);
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function Qi(e, t) {
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
function $i(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function ea(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = ta(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function ta(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function na(e) {
	let t = $i(e.format), n = e.formatPrefix;
	return {
		format: t,
		formatPrefix: n,
		formatFloat(e) {
			let n = O(e || ",");
			if (n.precision == null) {
				switch (n.precision = 12, n.type) {
					case "%":
						n.precision -= 2;
						break;
					case "e":
						--n.precision;
						break;
				}
				return ea(t(n), t(".1f")(1)[1]);
			} else return t(n);
		},
		formatSpan(e, r, i, a) {
			a = O(a ?? ",f");
			let o = Kt(e, r, i), s = Math.max(Math.abs(e), Math.abs(r)), c;
			if (a.precision == null) switch (a.type) {
				case "s": return isNaN(c = jt(o, s)) || (a.precision = c), n(a, s);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(c = gt(o, s)) || (a.precision = c - (a.type === "e"));
					break;
				case "f":
				case "%":
					isNaN(c = At(o)) || (a.precision = c - (a.type === "%") * 2);
					break;
			}
			return t(a);
		}
	};
}
ra();
function ra() {
	return na({
		format: N,
		formatPrefix: le
	});
}
function ia(e, t, n) {
	n ||= {}, Je(n) || be(`Invalid time multi-format specifier: ${n}`);
	let r = t(Dt), i = t(ut), a = t(wt), o = t(vt), s = t(kt), c = t(Ot), l = t(mt), u = t(pt), d = e(n.milliseconds || ".%L"), f = e(n.seconds || ":%S"), p = e(n.minutes || "%I:%M"), m = e(n.hours || "%I %p"), h = e(n.date || n.day || "%a %d"), g = e(n.week || "%b %d"), _ = e(n.month || "%B"), v = e(n.quarter || "%B"), y = e(n.year || "%Y");
	return (e) => (r(e) < e ? d : i(e) < e ? f : a(e) < e ? p : o(e) < e ? m : c(e) < e ? s(e) < e ? h : g : u(e) < e ? l(e) < e ? _ : v : y)(e);
}
function aa(e) {
	let t = $i(e.format), n = $i(e.utcFormat);
	return {
		timeFormat: (e) => Ke(e) ? t(e) : ia(t, _t, e),
		utcFormat: (e) => Ke(e) ? n(e) : ia(n, Jt, e),
		timeParse: $i(e.parse),
		utcParse: $i(e.utcParse)
	};
}
var oa;
sa();
function sa() {
	return oa = aa({
		format: yt,
		parse: bt,
		utcFormat: St,
		utcParse: ft
	});
}
function ca(e) {
	return aa(ht(e));
}
function la(e) {
	return arguments.length ? oa = ca(e) : oa;
}
//#endregion
//#region ../../node_modules/vega-loader/build/vega-loader.browser.js
var ua = /^(data:|([A-Za-z]+:)?\/\/)/, da = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i, fa = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g, pa = "file://";
function ma(e) {
	return (e) => ({
		options: e || {},
		sanitize: ga,
		load: ha,
		fileAccess: !1,
		file: _a(),
		http: ya
	});
}
async function ha(e, t) {
	let n = await this.sanitize(e, t), r = n.href;
	return n.localFile ? this.file(r) : this.http(r, t?.http);
}
async function ga(e, t) {
	t = gi({}, this.options, t);
	let n = this.fileAccess, r = { href: null }, i, a, o, s = da.test(e.replace(fa, ""));
	(e == null || typeof e != "string" || !s) && be("Sanitize failure, invalid URI: " + Le(e));
	let c = ua.test(e);
	return (o = t.baseURL) && !c && (!e.startsWith("/") && !o.endsWith("/") && (e = "/" + e), e = o + e), a = (i = e.startsWith(pa)) || t.mode === "file" || t.mode !== "http" && !c && n, i ? e = e.slice(7) : e.startsWith("//") && (t.defaultProtocol === "file" ? (e = e.slice(2), a = !0) : e = (t.defaultProtocol || "http") + ":" + e), Object.defineProperty(r, "localFile", { value: !!a }), r.href = e, t.target && (r.target = t.target + ""), t.rel && (r.rel = t.rel + ""), t.context === "image" && t.crossOrigin && (r.crossOrigin = t.crossOrigin + ""), r;
}
function _a(e) {
	return va;
}
async function va() {
	be("No file system access.");
}
async function ya(e, t) {
	let n = gi({}, this.options.http, t), r = t && t.response, i = await fetch(e, n);
	return i.ok ? fe(i[r]) ? i[r]() : i.text() : be(i.status + "" + i.statusText);
}
var ba = (e) => e != null && e === e, xa = (e) => e === "true" || e === "false" || e === !0 || e === !1, Sa = (e) => !Number.isNaN(Date.parse(e)), Ca = (e) => !Number.isNaN(+e) && !(e instanceof Date), wa = (e) => Ca(e) && Number.isInteger(+e), Ta = {
	boolean: bi,
	integer: Wt,
	number: Wt,
	date: Si,
	string: Ci,
	unknown: Pe
}, Ea = [
	xa,
	wa,
	Ca,
	Sa
], Da = [
	"boolean",
	"integer",
	"number",
	"date"
];
function Oa(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = Ea.length, i = Ea.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && ba(c) && !Ea[s](c) && (i[s] = 0, ++o, o === Ea.length)) return "string";
	return Da[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function ka(e, t) {
	return t.reduce((t, n) => (t[n] = Oa(e, n), t), {});
}
function Aa(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return ja(t, n ? gi(n, r) : r);
	};
	return t.responseType = "text", t;
}
function ja(e, t) {
	return t.header && (e = t.header.map(Le).join(t.delimiter) + "\n" + e), Pi(t.delimiter).parse(e + "");
}
ja.responseType = "text";
function Ma(e) {
	return typeof Buffer == "function" && fe(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function Na(e, t) {
	let n = t && t.property ? Qe(t.property) : Pe;
	return Je(e) && !Ma(e) ? Pa(n(e), t) : n(JSON.parse(e));
}
Na.responseType = "json";
function Pa(e, t) {
	return !_e(e) && vi(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var Fa = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function Ia(e, t) {
	let n, r, i, a;
	return e = Na(e, t), t && t.feature ? (n = Bi, i = t.feature) : t && t.mesh ? (n = Wi, i = t.mesh, a = Fa[t.filter]) : be("Missing TopoJSON feature or mesh parameter."), r = (r = e.objects[i]) ? n(e, r, a) : be("Invalid TopoJSON object: " + i), r && r.features || [r];
}
Ia.responseType = "json";
var La = {
	dsv: ja,
	csv: Aa(","),
	tsv: Aa("	"),
	json: Na,
	topojson: Ia
};
function Ra(e, t) {
	return arguments.length > 1 ? (La[e] = t, this) : Oe(La, e) ? La[e] : null;
}
function za(e, t, n, r) {
	t ||= {};
	let i = Ra(t.type || "json");
	return i || be("Unknown data format type: " + t.type), e = i(e, t), t.parse && Ba(e, t.parse, n, r), Oe(e, "columns") && delete e.columns, e;
}
function Ba(e, t, n, r) {
	if (!e.length) return;
	let i = la();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = ka(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!Ta[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return Ta[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
var Va = ma();
//#endregion
//#region ../core/src/data/formats/parquet.js
async function Ha() {
	let { parquetReadObjects: e } = await import("./parquetRead-Cs2xRrvz.js");
	return e;
}
async function Ua(e) {
	return await (await Ha())({ file: e instanceof Uint8Array ? Wa(e) : e });
}
function Wa(e) {
	if (e.buffer instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) return e.buffer;
	{
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t.buffer;
	}
}
Ua.responseType = "arrayBuffer", Ra("parquet", Ua);
//#endregion
//#region ../core/src/data/formats/arrow.js
async function Ga() {
	let { tableFromIPC: e } = await import("./src-DjOlFqSn.js");
	return e;
}
async function Ka(e) {
	return (await Ga())(qa(e)).toArray();
}
function qa(e) {
	if (e instanceof Uint8Array && e.byteOffset % 8 != 0) {
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t;
	} else return e;
}
Ka.responseType = "arrayBuffer", Ra("arrow", Ka);
//#endregion
//#region ../core/src/data/formats/bed.js
var Ja = /^\s*$/, Ya = /^\s*(?:browser\b|track\b|#)/, Xa;
async function Za() {
	return Xa ??= import("./esm-D-iG_TIX.js").then((e) => e.default), Xa;
}
async function Qa(e) {
	let t = new (await (Za()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (Ja.test(a) || Ya.test(a)) continue;
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
Ra("bed", Qa);
//#endregion
//#region ../core/src/data/formats/bedpe.js
var $a = /^\s*$/, eo = /^\s*(?:browser\b|track\b|#)/, to = [
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
], no = to.slice(0, 6), ro = (e) => e, io = (e) => e == "." ? null : e, ao = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, oo = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, so = {
	chrom1: io,
	chrom2: io,
	name: io,
	strand1: ao,
	strand2: ao,
	start1: oo,
	end1: oo,
	start2: oo,
	end2: oo,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function co(e) {
	if (e.length < no.length) return !1;
	for (let t = 0; t < no.length; t++) if (e[t] != no[t]) return !1;
	return !0;
}
function lo(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if ($a.test(e) || eo.test(e)) continue;
			i = !0;
		}
		if ($a.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (co(t) ? t : to);
			for (let t of e) s.push(t), c.push(so[t] ?? ro);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(ro);
		if (t.length < no.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${no.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
Ra("bedpe", lo);
//#endregion
//#region ../core/src/data/formats/fasta.js
function uo(e, t) {
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
Ra("fasta", uo);
//#endregion
//#region ../core/src/data/formats/wig.js
var fo = /^(?:variableStep|fixedStep)(?:\s|$)/, po = /^(?:browser\b|track\b|#)/;
function mo(e) {
	let t, n = [], r = e.split(/\r?\n/);
	for (let e = 0; e < r.length; e++) {
		let i = e + 1, a = r[e].trim();
		if (!a || po.test(a)) continue;
		if (fo.test(a)) {
			t = ho(a, i);
			continue;
		}
		if (!t) throw yo(i, "data appears before a declaration");
		let o = a.split(/\s+/);
		if (t.type == "fixedStep") {
			if (o.length != 1) throw yo(i, "fixedStep data must contain one value");
			let e = vo(o[0], i), r = t.nextPosition - 1;
			n.push({
				chrom: t.chrom,
				start: r,
				end: r + t.span,
				score: e
			}), t.nextPosition += t.step;
		} else {
			if (o.length != 2) throw yo(i, "variableStep data must contain a position and value");
			let e = _o(o[0], "position", i) - 1;
			n.push({
				chrom: t.chrom,
				start: e,
				end: e + t.span,
				score: vo(o[1], i)
			});
		}
	}
	return n;
}
function ho(e, t) {
	let [n, ...r] = e.split(/\s+/), i = {};
	for (let e of r) {
		let n = e.indexOf("=");
		if (n <= 0 || n == e.length - 1) throw yo(t, `invalid declaration attribute "${e}"`);
		let r = e.slice(0, n);
		if (r in i) throw yo(t, `duplicate attribute "${r}"`);
		i[r] = e.slice(n + 1);
	}
	return n == "variableStep" ? (go(i, "chrom", n, t), {
		type: "variableStep",
		chrom: i.chrom,
		span: i.span ? _o(i.span, "span", t) : 1
	}) : (go(i, "chrom", n, t), go(i, "start", n, t), {
		type: "fixedStep",
		chrom: i.chrom,
		nextPosition: _o(i.start, "start", t),
		step: i.step ? _o(i.step, "step", t) : 1,
		span: i.span ? _o(i.span, "span", t) : 1
	});
}
function go(e, t, n, r) {
	if (!(t in e)) throw yo(r, `${n} declaration is missing "${t}"`);
}
function _o(e, t, n) {
	let r = Number(e);
	if (!Number.isInteger(r) || r <= 0) throw yo(n, `${t} must be a positive integer`);
	return r;
}
function vo(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw yo(t, "score must be a finite number");
	return n;
}
function yo(e, t) {
	return /* @__PURE__ */ Error(`Cannot parse WIG line ${e}: ${t}`);
}
Ra("wig", mo);
//#endregion
//#region ../core/src/data/formats/vcfParser.js
async function bo(e) {
	let t = (await import("./esm-lwYrRdbg.js")).default;
	return new t({ header: e });
}
function xo(e) {
	return delete e.GENOTYPES, e.SAMPLES = e.SAMPLES(), e;
}
function So(e, t) {
	return e.map((e) => xo(t.parseLine(e)));
}
//#endregion
//#region ../core/src/data/formats/vcf.js
function* Co(e) {
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
async function wo(e) {
	let t = [], n = [], r;
	for (let { line: i, lineNumber: a } of Co(e)) if (i) {
		if (!r && i.startsWith("#")) {
			t.push(i);
			continue;
		}
		r ??= await bo(t.join("\n"));
		try {
			n.push(xo(r.parseLine(i)));
		} catch (e) {
			throw Error(`Cannot parse VCF line ${a}`, { cause: e });
		}
	}
	return r || await bo(t.join("\n")), n;
}
Ra("vcf", wo);
//#endregion
//#region ../core/src/scale/ticks.js
function To(e, t, n) {
	return je(t) && n != null && (t = Math.min(t, ~~(ct(e.domain()) / n) || 1)), x(t) && (t.step, t = t.interval), t;
}
function Eo(e, t, n) {
	var r = e.range(), i = Math.floor(r[0]), a = Math.ceil(k(r));
	if (i > a && (r = a, a = i, i = r), t = t.filter(function(t) {
		return t = e(t), i <= t && t <= a;
	}), n > 0 && t.length > 1) {
		for (var o = [t[0], k(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = o);
	}
	return t;
}
function Do(e, t) {
	return e.bins ? Eo(e, Oo(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function Oo(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function ko(e, t, n) {
	var r = e.tickFormat ? e.tickFormat(t, n) : n ? N(n) : String;
	if (Tt(e.type)) {
		var i = jo(n);
		r = e.bins ? i : Ao(r, i);
	}
	return r;
}
function Ao(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function jo(e) {
	var t = O(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e":
				--t.precision;
				break;
		}
		return Mo(N(t), N(".1f")(1)[1]);
	} else return N(t);
}
function Mo(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = No(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function No(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region ../core/src/data/sources/lazy/lazyDataSourceRegistry.js
var Po = [], Fo = [];
function Io(e, t) {
	Fo.push({
		guard: e,
		Source: t
	});
}
function Lo(e, t) {
	for (let n of Po) if (n.guard(e)) return new n.Source(e, t);
	for (let n of Fo) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/data/sources/dataSource.js
var Ro = class extends ot {
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
	activate() {}
	repropagate() {
		this.activate(), this.load();
	}
}, zo = class extends Ro {
	#e = !1;
	#t;
	initializedPromise = Promise.resolve();
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw Bo(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
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
function Bo(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region ../core/src/data/sources/lazy/axisTickSource.js
var Vo = class extends zo {
	ticks = [];
	zoomExtentTicks = [];
	#e;
	#t;
	constructor(e, t) {
		let n = {
			axis: {},
			...e
		};
		super(t, n.channel), this.params = n;
		let r = n.axis.tickCount;
		if (L(r)) {
			let e = new pn(() => t.paramRuntime, (e) => t.getScaleResolution(e));
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
		let r = this.#e ? this.#e() : n.tickCount, i = To(e, r, n.tickMinStep), a = n.values ? Eo(e, n.values, i) : Do(e, i), o = !n.values && n.extraValues && z(e.type) ? Eo(e, n.extraValues) : [], s = o.length ? Ho(a, o) : a, c = this.scaleResolution.hasConfiguredZoomExtent() ? tn(e.type, this.scaleResolution.zoomExtent) : [];
		if (this.ticks == null || !se(s, this.ticks) || !se(c, this.zoomExtentTicks)) {
			this.ticks = s, this.zoomExtentTicks = c;
			let t = ko(e, r, n.format), i = new Set(n.values ? s : o), a = new Set(c), l = e.type == "locus" ? e.genome() : void 0;
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
function Ho(e, t) {
	let n = new Set(e);
	return t.forEach((e) => n.add(e)), Array.from(n).sort((e, t) => e - t);
}
function Uo(e) {
	return e?.type == "axisTicks";
}
Io(Uo, Vo);
//#endregion
//#region ../core/src/data/sources/lazy/axisGenomeSource.js
var Wo = class extends zo {
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
function Go(e) {
	return e?.type == "axisGenome";
}
Io(Go, Wo);
//#endregion
//#region ../core/src/view/legend/legendEntries.js
function Ko(e, t = String) {
	return e.getDomain().map((e, n) => ({
		value: e,
		label: t(e),
		_legendIndex: n
	}));
}
//#endregion
//#region ../core/src/utils/suspension.js
var qo = class {
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
}, Jo = 5, Yo = "_legendSymbolSize", Xo = "_legendStrokeWidth", Zo = class extends Ro {
	#e = void 0;
	#t = !1;
	#n = new qo(() => this.#i());
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = Qo(t, e.channel), !this.scaleResolution) throw Error(`The legend entries data source cannot find a resolved scale for channel "${e.channel}".`);
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
		if (!this.#e || !se(e, this.#e)) {
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" });
			for (let e of this.#o()) this._propagate(e);
			this.complete();
		}
	}
	#o() {
		let e = this.params.dataType == "quantitative" ? this.#c() : this.#s();
		if (this.params.channel == "size") {
			let t = this.scaleResolution.getScale();
			for (let n of e) this.params.sizeMode == "strokeWidth" ? n[Xo] = t(n.value) : n[Yo] = t(n.value);
		}
		return e;
	}
	#s() {
		let e = this.params.format, t = e ? (t) => N(e)(Number(t)) : void 0, n = Ko(this.scaleResolution, t);
		if (!this.params.values) return n;
		let r = new Map(n.map((e) => [e.value, e]));
		return this.params.values.flatMap((e) => r.has(e) ? [r.get(e)] : []);
	}
	#c() {
		let e = this.scaleResolution.getScale(), t = this.params.count ?? Jo, n = ko(e, t, this.params.format);
		return (this.params.values ? Eo(e, this.params.values, t) : Do(e, t)).flatMap((e) => {
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
function Qo(e, t) {
	let n = e.dataParent;
	for (; n && Wn(n);) n = n.dataParent;
	return n?.getScaleResolution(t) ?? e.getScaleResolution(t);
}
function $o(e) {
	return e?.type == "legendEntries";
}
Io($o, Zo);
//#endregion
//#region ../core/src/scale/scale.js
var es = "locus", ts = "index", ns = 5;
function rs(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function is(e) {
	return z(e) && ![
		"sequential",
		ts,
		es
	].includes(e);
}
function as(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var os = ie(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.fp64.name".split("."));
function ss(e, n, r, i = !1) {
	r = as(r);
	for (let i in e) if (!os[i]) {
		if (i === "padding" && is(n.type)) continue;
		t(n[i]) ? n[i](e[i]) : r.warn("Unsupported scale property: " + i);
	}
	let a = fs(n, e, r, i);
	a.domain && n.domain(a.domain), a.applyOrdinalUnknown && n.unknown(a.ordinalUnknown), _s(n, e, gs(n, e, a.count));
}
function cs(e, t) {
	let n = !e.domain && !e.domainRaw && z(e.type), r = n ? {
		...e,
		domain: [0, 0]
	} : e, i = ls(r), a = Qt(i);
	if (!a) throw Error("Unknown scale type: " + i);
	let o = a();
	return ss(r, o, t, n), o;
}
function ls(e) {
	var t = e.type, n = "", r;
	return t === "sequential" ? Ut + "-" + Bt : (us(e) && (r = e.rawDomain ? e.rawDomain.length : e.domain ? e.domain.length + +(e.domainMid != null) : 0, n = r === 2 ? Ut + "-" : r === 3 ? Yt + "-" : ""), (n + t || "linear").toLowerCase());
}
function us(e) {
	let t = e.type;
	return z(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(C));
}
function ds(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function fs(e, t, n, r = !1) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	n = as(n);
	let i = ds(e);
	var a = ps(i, t.domainRaw, n);
	if (a > -1) return {
		domain: i.domain(),
		count: a,
		ordinalUnknown: i.type === "ordinal" && t.domainImplicit ? Vt : void 0,
		applyOrdinalUnknown: !1
	};
	var o = t.domain, s = i.type, c = t.zero || t.zero === void 0 && rs(i), l, u;
	return o ? (is(s) && t.padding && o[0] !== k(o) && (o = ms(s, o, t.range, t.padding, t.exponent, t.constant)), (c || t.domainMin != null || t.domainMax != null || t.domainMid != null) && (l = (o = o.slice()).length - 1 || 1, c && (o[0] > 0 && (o[0] = 0), o[l] < 0 && (o[l] = 0)), t.domainMin != null && (o[0] = t.domainMin), t.domainMax != null && (o[l] = t.domainMax), t.domainMid != null && (u = t.domainMid, (u < o[0] || u > o[l]) && n.warn("Scale domainMid exceeds domain min or max.", u), o.splice(l, 0, u))), i.domain(hs(s, o, n, r)), t.nice && i.nice && i.nice(t.nice !== !0 && To(i, t.nice) || null), {
		domain: i.domain(),
		count: o.length,
		ordinalUnknown: s === "ordinal" && t.domainImplicit ? Vt : void 0,
		applyOrdinalUnknown: s === Pt
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function ps(e, t, n) {
	return t ? (e.domain(hs(e.type, t, n)), t.length) : -1;
}
function ms(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(k(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? re(t, null, s) : e === "sqrt" ? ae(t, null, s, .5) : e === "pow" ? ae(t, null, s, i || 1) : e === "symlog" ? d(t, null, s, a || 1) : p(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function hs(e, t, n, r = !1) {
	return Tt(e) && !r && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : +(t > 0));
	}, 0)) !== t.length && n.warn("Log scale domain includes zero: " + i(t)), t;
}
function gs(e, t, n) {
	let r = t.bins;
	if (r && !w(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? k(t) : r.stop, a = r.step;
		a || o("Scale bins parameter missing step property."), r = Se(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function _s(e, n, r) {
	var i = e.type, a = n.round || !1, s = n.range;
	if (n.rangeStep != null) s = vs(i, n, r);
	else if (n.scheme && (s = ys(i, n, r), t(s))) {
		if (e.interpolator) return e.interpolator(s);
		o(`Scale type ${i} does not support interpolating color schemes.`);
	}
	if (s && $t(i)) return e.interpolator(Rt(xs(s, n.reverse), n.interpolate, n.interpolateGamma));
	s && n.interpolate && e.interpolate ? e.interpolate(zt(n.interpolate, n.interpolateGamma)) : t(e.round) ? e.round(a) : t(e.rangeRound) && e.interpolate(a ? xt : Ht), s && e.range(xs(s, n.reverse));
}
function vs(e, t, n) {
	e !== "band" && e !== "point" && o("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * Gt(n, i, r)];
}
function ys(e, n, r) {
	var i = n.schemeExtent, a = n.schemeCount, s, c;
	return w(n.scheme) ? c = Rt(n.scheme, n.interpolate, n.interpolateGamma) : (C(n.scheme) ? s = n.scheme.toLowerCase() : (s = n.scheme.name.toLowerCase(), i = n.scheme.extent ?? i, a = n.scheme.count ?? a), c = Et(s), c || o(`Unrecognized scheme name: ${n.scheme}`)), r = e === "threshold" ? r + 1 : e === "bin-ordinal" ? r - 1 : e === "quantile" || e === "quantize" ? +a || ns : r, $t(e) ? bs(c, i, n.reverse) : t(c) ? dt(bs(c, i), r) : e === "ordinal" ? c : c.slice(0, r);
}
function bs(e, n, r) {
	return t(e) && (n || r) ? Nt(e, xs(n || [0, 1], r)) : e;
}
function xs(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region ../core/src/data/sources/lazy/legendGradientSource.js
var Ss = 64, Cs = 5;
function ws(e, t, n) {
	let r = Ts(e, t, n), i = Es(r.length);
	if ("copy" in e && typeof e.copy == "function" && "invert" in e && typeof e.invert == "function") {
		let t = e.copy();
		return t.domain(r), t.range(i), t;
	}
	let a = e.props, o = a?.type;
	if (o) {
		let e = { ...a }, t = e;
		delete e.range, delete e.scheme, delete t.domainMin, delete t.domainMid, delete t.domainMax, delete t.schemeExtent, delete t.schemeCount;
		let n = cs({
			...e,
			type: o,
			domain: r,
			range: i,
			zero: !1,
			nice: !1
		});
		if ("invert" in n && typeof n.invert == "function") return n;
	}
	return Os(t, n);
}
function Ts(e, t, n) {
	if ("domain" in e && typeof e.domain == "function") {
		let r = e.domain().map(js);
		if (r.length >= 2) return [
			t,
			...r.slice(1, -1),
			n
		];
	}
	return [t, n];
}
function Es(e) {
	let t = e - 1;
	return Array.from({ length: e }, (e, n) => n / t);
}
function Ds(e, t) {
	return (n) => e + (t - e) * n;
}
function Os(e, t) {
	let n = ((n) => (n - e) / (t - e));
	return n.invert = Ds(e, t), n;
}
function ks(e) {
	let t = e[0], n = e.at(-1), r = n - t, i = e.length - 1, a = i ? r / i : .1;
	return [t - a, n + a];
}
function As(e) {
	return e.type == "quantize" && "range" in e && typeof e.range == "function" && "invertExtent" in e && typeof e.invertExtent == "function" && "thresholds" in e && typeof e.thresholds == "function";
}
function js(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
var Ms = class extends Ro {
	#e = void 0;
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = Qo(t, e.channel), !this.scaleResolution) throw Error(`The gradient legend data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#t();
		this.scaleResolution.addEventListener("domain", n), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	async load() {
		this.#e = void 0, this.#t();
	}
	#t() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !se(e, this.#e)) {
			let t = Number(e[0]), n = Number(e.at(-1));
			if (!Number.isFinite(t) || !Number.isFinite(n)) throw Error("Gradient legends require a finite numeric scale domain.");
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" }), this.publishData(t, n), this.complete();
		}
	}
	publishData(e, t) {
		throw Error("Gradient legend data source must implement publishData.");
	}
}, Ns = class extends Ms {
	get label() {
		return "legendGradientSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale();
		if (n.type == "threshold") {
			this.#t();
			return;
		} else if (As(n)) {
			this.#e(e, t, n);
			return;
		}
		let r = this.params.count ?? Ss, i = ws(n, e, t), a = (e) => i.invert(e);
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
		let r = Os(e, t);
		for (let [e, t] of n.range().entries()) {
			let [i, a] = n.invertExtent(t).map(js), o = (i + a) / 2;
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
		let e = this.scaleResolution.getDomain().map(Number), [t, n] = ks(e), r = Os(t, n), i = [
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
}, Ps = class extends Ms {
	get label() {
		return "legendGradientTicksSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale(), r = n.type == "threshold" ? ks(this.scaleResolution.getDomain().map(Number)) : [e, t], i = ws(n, r[0], r[1]), a = this.params.count ?? Cs, o = To(n, a, void 0), s = ko(n, a, this.params.format), c = this.params.values ? this.params.values.map(js).filter((e) => {
			let t = i(e);
			return Number.isFinite(t) && t >= 0 && t <= 1;
		}) : As(n) ? n.thresholds().map(js) : Do(n, o).map(js);
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
function Fs(e) {
	return e?.type == "legendGradient";
}
function Is(e) {
	return e?.type == "legendGradientTicks";
}
Io(Fs, Ns), Io(Is, Ps);
//#endregion
//#region ../core/src/data/sources/urlDescriptor.js
var Ls = class extends Error {
	count;
	maxValues;
	constructor(e, t) {
		super(`URL expansion resolved ${e} distinct values, exceeding maxValues ${t}.`), this.name = "UrlLimitExceededError", this.count = e, this.maxValues = t;
	}
};
async function Rs(e) {
	return Zs(Ks(e.url, e).map((t) => ({
		...t,
		url: En(e.baseUrl, t.url),
		indexUrl: t.indexUrl ? En(e.baseUrl, t.indexUrl) : void 0
	})), tc(e.url));
}
async function zs(e, t) {
	let n = await Rs(e);
	if (n.length !== 1) throw Error(`${t} supports exactly one resolved URL.`);
	return n[0];
}
function Bs(e) {
	let t = rc(e.url, e.indexUrl);
	for (let n of t) {
		let t = e.paramRuntime.watchExpression ? e.paramRuntime.watchExpression(n, e.listener, {
			scopeOwned: !e.registerDisposer,
			registerDisposer: e.registerDisposer
		}) : e.paramRuntime.createExpression(n);
		if (!e.paramRuntime.watchExpression && t.subscribe) {
			let n = t.subscribe(e.listener);
			e.registerDisposer?.(n);
		}
	}
}
function Vs(e) {
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
function Hs(e, t) {
	if (!t) return e;
	let n = Vs(t);
	for (let t = 0; t < e.length; t++) e[t] = n(e[t]);
	return e;
}
function Us(e, t) {
	return e.onLoadError == "skip" ? (console.warn(`Skipping failed URL: ${e.url}`, t), !0) : !1;
}
async function Ws(e, t) {
	try {
		return await t();
	} catch (t) {
		if (Us(e, t)) return;
		throw t;
	}
}
function Gs(e) {
	return JSON.stringify({
		url: e.url,
		indexUrl: e.indexUrl,
		fields: e.fields ? Object.fromEntries(Object.entries(e.fields).sort()) : void 0
	});
}
function Ks(e, t) {
	if ($s(e)) return qs(e, t.indexUrl, t);
	let n = L(e) ? nc(t).createExpression(e.expr)() : e;
	return (Array.isArray(n) ? n : [n]).map(Ys);
}
function qs(e, t, n) {
	let r = Js(e.values, n);
	if (!Array.isArray(r)) throw Error("URL template values must resolve to an array.");
	return r.map((n) => {
		let r = Qs(n), i = e.attach === !1 ? void 0 : { [e.field]: r };
		return {
			url: Xs(e.template, e.field, r),
			indexUrl: ec(t) ? Xs(t.template, e.field, r) : P(t),
			fields: i,
			onLoadError: e.onLoadError
		};
	});
}
function Js(e, t) {
	return L(e) ? nc(t).createExpression(e.expr)() : e;
}
function Ys(e) {
	if (typeof e == "string") return { url: e };
	if (e && typeof e == "object" && "url" in e && typeof e.url == "string") return e;
	throw Error("URL descriptor must be a string or an object with url.");
}
function Xs(e, t, n) {
	let r = "{" + t + "}";
	if (!e.includes(r)) throw Error(`URL template must contain ${r}.`);
	return e.replaceAll(r, encodeURIComponent(String(n)));
}
function Zs(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.url + "\n" + (t.indexUrl ?? "");
		n.has(e) || n.set(e, t);
	}
	let r = Array.from(n.values());
	if (t !== void 0 && r.length > t) throw new Ls(r.length, t);
	return r;
}
function Qs(e) {
	if (e == null || typeof e == "object" || typeof e == "function") throw Error("URL template values must be scalar in this version.");
	return e;
}
function $s(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function ec(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function tc(e) {
	return $s(e) ? e.maxValues : void 0;
}
function nc(e) {
	if (!e.paramRuntime) throw Error("URL ExprRef evaluation requires a parameter runtime.");
	return e.paramRuntime;
}
function rc(e, t) {
	let n = [];
	return L(e) && n.push(e.expr), $s(e) && L(e.values) && n.push(e.values.expr), L(t) && n.push(t.expr), n;
}
//#endregion
//#region ../core/src/utils/debounce.js
function ic(e, t, n = !0) {
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
//#region ../core/src/data/sources/lazy/singleAxisWindowedSource.js
var ac = class extends zo {
	#e = new AbortController();
	#t = [0, 0];
	#n;
	#r = 0;
	params;
	setupDebouncing(e) {
		let t = () => P(e.debounce), n = e.debounceMode;
		if (n == "domain") this.onDomainChanged = ic(this.onDomainChanged.bind(this), t, !1);
		else if (n == "window") this.loadInterval = ic(this.loadInterval.bind(this), t, !1);
		else throw Error("Invalid debounceMode: " + n);
	}
	onDomainChanged(e) {
		this.#n = e;
		let t = P(this.params?.windowSize) ?? -1;
		e[1] - e[0] > t || this.callIfWindowsChanged(e, t, async (e) => {
			await this.initializedPromise, this.loadInterval(e);
		});
	}
	reloadLastDomain() {
		let e = this.#n ?? this.scaleResolution.getDomain();
		this.#i(e);
	}
	requestDataForDomain(e) {
		this.#i(e);
	}
	#i(e) {
		this.#t = [0, 0], this._lastLoadedDomain = void 0, this.onDomainChanged(e);
	}
	async loadInterval(e) {}
	publishData(e) {
		super.publishData(e, this._lastLoadedDomain);
	}
	async discretizeAndLoad(e, t) {
		this.#e.abort(), this.setLoadingStatus("loading"), this.#e = new AbortController();
		let n = this.#e.signal, r = this.genome.continuousToDiscreteChromosomeIntervals(e), i = typeof t == "function" ? { load: t } : t;
		try {
			let t = i.loadBatch ? await i.loadBatch(r, n) : await Promise.all(r.map(async (e) => i.load(e, n)));
			if (t.length !== r.length) throw Error("Batched lazy loader must return one chunk per interval.");
			if (!n.aborted) return this.setLoadingStatus("complete"), this._lastLoadedDomain = Array.from(e), t;
		} catch (e) {
			if (!n.aborted) throw this.setLoadingStatus("error", e.message), e;
		}
	}
	callIfWindowsChanged(e, t, n) {
		let r = [Math.max(Math.floor(e[0] / t) * t, 0), Math.min(Math.ceil(e[1] / t) * t, this.genome.totalSize)], i = this.#t;
		(t !== this.#r || r[0] < i[0] || r[1] > i[1]) && (this.#t = r, this.#r = t, n(r));
	}
}, oc = class extends ac {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 7e3,
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, n.channel), this.params = n, !this.params.url) throw Error("No URL provided for IndexedFastaSource");
		this.setupDebouncing(this.params), this.#e();
	}
	get label() {
		return "bigWigSource";
	}
	#e() {
		return this.initializedPromise = this.#t(), this.initializedPromise;
	}
	async #t() {
		let e = await zs({
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		}, "IndexedFastaSource"), [{ IndexedFasta: t }, { RemoteFile: n }] = await Promise.all([import("./esm-CcylTaSF.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
		this.fasta = new t({
			fasta: new n(e.url),
			fai: new n(e.indexUrl ?? e.url + ".fai")
		});
	}
	async loadInterval(e) {
		let t = await this.discretizeAndLoad(e, async (e, t) => this.fasta.getSequence(e.chrom, e.startPos, e.endPos, { signal: t }).then((t) => {
			if (t != null) return {
				chrom: e.chrom,
				start: e.startPos,
				sequence: t
			};
			console.log(`No sequence found for interval ${e.chrom}:${e.startPos}-${e.endPos}`);
		}));
		this.publishData([t.filter((e) => e !== void 0)]);
	}
};
function sc(e) {
	return e?.type == "indexedFasta";
}
Io(sc, oc);
//#endregion
//#region ../core/src/data/sources/urlDescriptorController.js
var cc = class {
	#e;
	#t;
	#n;
	constructor(e, t) {
		this.#e = e, this.#t = t.getUrl, this.#n = t.getIndexUrl;
		let n = this.#t(), r = this.#n?.();
		(lc(n) || lc(r)) && Bs({
			url: n,
			indexUrl: r,
			paramRuntime: e.paramRuntime,
			listener: t.onChange,
			registerDisposer: (t) => e.registerDisposer(t)
		});
	}
	async normalize() {
		return Rs({
			url: this.#t(),
			indexUrl: this.#n?.(),
			baseUrl: this.#e.view.getBaseUrl(),
			paramRuntime: this.#e.paramRuntime
		});
	}
};
function lc(e) {
	return !!(e && typeof e == "object" && !L(e));
}
//#endregion
//#region ../core/src/data/sources/urlDescriptorState.js
var uc = class {
	#e = /* @__PURE__ */ new Map();
	#t = [];
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	get handles() {
		return this.#t;
	}
	get activeSetLoaded() {
		return this.#n.isSubsetOf(this.#r);
	}
	markLoaded() {
		this.#r = new Set(this.#n);
	}
	clearActive() {
		this.#t = [], this.#n = /* @__PURE__ */ new Set(), this.#r = /* @__PURE__ */ new Set();
	}
	async update(e, t) {
		let n = e.map(Gs), r = await Promise.all(e.map((e, r) => this.#i(e, n[r], t)));
		this.#t = r.filter((e) => e.handle).map((e) => e.handle), this.#n = new Set(r.filter((e) => e.handle).map((e) => e.descriptorKey));
	}
	async #i(e, t, n) {
		let r = this.#e.get(t);
		if (r) return {
			descriptorKey: t,
			handle: r
		};
		let i = await n(e, t);
		return i && this.#e.set(t, i), {
			descriptorKey: t,
			handle: i
		};
	}
};
async function dc(e) {
	try {
		let t = await e.controller.normalize(), n = await e.loadModules();
		e.setLoadingStatus("loading"), await e.state.update(t, (t) => Ws(t, () => e.createHandle(t, n))), e.setLoadingStatus("complete");
	} catch (t) {
		if (e.clearData(), t instanceof Ls) e.state.clearActive(), e.setLoadingStatus("complete");
		else throw e.setLoadingStatus("error", t.message), t;
	}
}
//#endregion
//#region ../core/src/data/sources/lazy/bigWigSource.js
var fc = class extends ac {
	#e = new uc();
	#t;
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = P(n.channel);
		if (super(t, r), this.params = ge(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#r() : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new cc(this, {
			getUrl: () => this.params.url,
			onChange: () => this.#r()
		}), !this.params.url) throw Error("No URL provided for BigWigSource");
		this.setupDebouncing(this.params), this.#n();
	}
	get label() {
		return "bigWigSource";
	}
	#n() {
		let e = this.#i();
		return this.initializedPromise = e, e;
	}
	async #r() {
		try {
			await this.#n(), this.isDataReadyForDomain({ [this.channel]: this.scaleResolution.getDomain() }) || this.reloadLastDomain();
		} catch {}
	}
	async #i() {
		await dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: mc,
			createHandle: (e, { BigWig: t, RemoteFile: n }) => this.#a(e, t, n)
		});
	}
	async #a(e, t, n) {
		let r = new t({ filehandle: new n(e.url) }), i = (await r.getHeader()).zoomLevels.map((e) => e.reductionLevel).reverse();
		return i.push(1), {
			bbi: r,
			attachFields: Vs(e.fields),
			reductionLevels: i,
			url: e.url
		};
	}
	async onDomainChanged(e) {
		await this.initializedPromise;
		let t = this.#e.handles;
		if (!t.length) {
			this.publishData([]), this.#e.markLoaded();
			return;
		}
		let n = this.scaleResolution.getAxisLength() || 700, r = t.map((t) => gc(e, n, t.reductionLevels)), i = Math.max(...r.map((e) => e * n), 5e3);
		this.callIfWindowsChanged(e, i, (e) => this.loadInterval(e, r));
	}
	async loadInterval(e, t) {
		let n = this.#e.handles, r = await this.discretizeAndLoad(e, {
			load: (e, r) => this.#o(e, n, t, r),
			loadBatch: (e, r) => this.#s(e, n, t, r)
		});
		r && (this.#e.markLoaded(), this.publishData(r));
	}
	async #o(e, t, n, r) {
		return (await Promise.all(t.map((t, i) => {
			let a = _c(n[i], P(this.params.pixelsPerBin));
			return t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, {
				scale: a,
				signal: r
			}).then((n) => hc(e.chrom, n, t.attachFields));
		}))).flat();
	}
	async #s(e, t, n, r) {
		let i = await Promise.all(t.map((t, i) => {
			let a = _c(n[i], P(this.params.pixelsPerBin));
			return t.bbi.getFeaturesMulti(e.map((e) => ({
				refName: e.chrom,
				start: e.startPos,
				end: e.endPos
			})), {
				scale: a,
				signal: r
			}).then((n) => n.map((n, r) => hc(e[r].chrom, n, t.attachFields)));
		}));
		return e.map((e, t) => i.flatMap((e) => e[t]));
	}
	isDataReadyForDomain(e) {
		return this.#e.activeSetLoaded && super.isDataReadyForDomain(e);
	}
};
function pc(e) {
	return e?.type == "bigwig";
}
Io(pc, fc);
async function mc() {
	let [{ BigWig: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CkwcW56F.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		BigWig: e,
		RemoteFile: t
	};
}
function hc(e, t, n) {
	return t.map((t) => n({
		chrom: e,
		start: t.start,
		end: t.end,
		score: t.score
	}));
}
function gc(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
function _c(e, t) {
	return 1 / 2 / e / t;
}
//#endregion
//#region ../core/src/data/sources/lazy/bigBedSource.js
var vc = class extends ac {
	#e = new uc();
	#t;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = P(n.channel);
		if (super(t, r), this.params = ge(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#r() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new cc(this, {
			getUrl: () => this.params.url,
			onChange: () => this.#r()
		}), !this.params.url) throw Error("No URL provided for BigBedSource");
		this.setupDebouncing(this.params), this.#n();
	}
	get label() {
		return "bigBedSource";
	}
	#n() {
		let e = this.#i();
		return this.initializedPromise = e, e;
	}
	async #r() {
		try {
			await this.#n(), this.isDataReadyForDomain({ [this.channel]: this.scaleResolution.getDomain() }) || this.reloadLastDomain();
		} catch {}
	}
	async #i() {
		await dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: xc,
			createHandle: (e, { BigBed: t, RemoteFile: n, BED: r }) => this.#a(e, t, n, r)
		});
	}
	async #a(e, t, n, r) {
		let i = new t({ filehandle: new n(e.url) }), a = new r({ autoSql: (await i.getHeader()).autoSql }), o;
		try {
			let e = yc(a);
			o = (t, n) => e(t, n.start, n.end, n.rest);
		} catch {
			o = (e, t) => a.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
		}
		return {
			attachFields: Vs(e.fields),
			bbi: i,
			parseLine: o,
			url: e.url
		};
	}
	async loadInterval(e) {
		let t = this.#e.handles, n = await this.discretizeAndLoad(e, async (e, n) => (await Promise.all(t.map((t) => t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, { signal: n }).then((n) => n.map((n) => t.attachFields(t.parseLine(e.chrom, n))))))).flat());
		n && (this.#e.markLoaded(), this.publishData(n));
	}
	isDataReadyForDomain(e) {
		return this.#e.activeSetLoaded && super.isDataReadyForDomain(e);
	}
};
function yc(e) {
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
        };`)(), u = Sc(t.map((e) => {
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
function bc(e) {
	return e?.type == "bigbed";
}
Io(bc, vc);
async function xc() {
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
function Sc(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region ../core/src/data/sources/lazy/bamSource.js
var Cc = class extends ac {
	#e;
	chrPrefixFixer = (e) => e;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		}, r = P(n.channel);
		if (super(t, r), this.params = ge(t.paramRuntime, n, (e) => {
			e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !this.params.url) throw Error("No URL provided for BamSource");
		this.setupDebouncing(this.params), this.#t();
	}
	get label() {
		return "bamSource";
	}
	#t() {
		return this.initializedPromise = this.#n(), this.initializedPromise;
	}
	async #n() {
		let e = await zs({
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		}, "BamSource"), [{ BamFile: t }, { RemoteFile: n }] = await Promise.all([import("./esm-DzVhgwiP.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
		this.#e = new t({
			bamFilehandle: new n(e.url),
			baiFilehandle: new n(e.indexUrl ?? e.url + ".bai")
		}), await this.#e.getHeader();
		let r = this.genome.hasChrPrefix(), i = this.#e.indexToChr?.[0]?.refName.startsWith("chr");
		r && !i ? this.chrPrefixFixer = (e) => e.replace("chr", "") : !r && i && (this.chrPrefixFixer = (e) => "chr" + e);
	}
	async loadInterval(e) {
		let t = await this.discretizeAndLoad(e, async (e, t) => this.#e.getRecordsForRange(this.chrPrefixFixer(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => Tc(e.chrom, t))));
		t && this.publishData(t);
	}
};
function wc(e) {
	return e?.type == "bam";
}
Io(wc, Cc);
function Tc(e, t) {
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
function Ec(e) {
	return "values" in e;
}
var Dc = class extends Ro {
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
		if (Array.isArray(e)) e.length > 0 && (t = e, n = Ic(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = za(e, jc(Ac(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Oc = /* @__PURE__ */ new Set([
	"csv",
	"tsv",
	"dsv"
]), kc = /* @__PURE__ */ new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function Ac(e, t = []) {
	if (!Ec(e) && !Vc(e)) return;
	let n = { ...e.format };
	if (n.type ??= Vc(e) && Nc(t), n.parse === void 0 && Hc(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function jc(e) {
	let t = { ...e };
	return (zc(t) || Bc(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function Mc(e) {
	return Ra(e)?.responseType ?? "text";
}
function Nc(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = Fc(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && kc.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && Ra(r)) return r;
	}
}
function Pc(e) {
	let t = Fc(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && kc.has(n);
}
function Fc(e) {
	return e.replace(/[?#].*$/, "");
}
var Ic = (e) => typeof e == "object" ? Rc : Lc, Lc = (e) => ({ data: e }), Rc = (e) => e;
function zc(e) {
	return e.type == "csv" || e.type == "tsv";
}
function Bc(e) {
	return e.type == "dsv";
}
function Vc(e) {
	return "url" in e;
}
function Hc(e) {
	return Oc.has(e);
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixSource.js
var Uc = class extends ac {
	#e = new uc();
	#t;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = P(n.channel);
		if (super(t, r), this.params = ge(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.#r() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new cc(this, {
			getUrl: () => this.params.url,
			getIndexUrl: () => this.params.indexUrl,
			onChange: () => this.#r()
		}), !P(this.params.url)) throw Error("No URL provided for TabixSource");
		this.setupDebouncing(this.params), this.#n();
	}
	#n() {
		return this.initializedPromise = this.#i(), this.initializedPromise;
	}
	async #r() {
		try {
			await this.#n(), this.isDataReadyForDomain({ [this.channel]: this.scaleResolution.getDomain() }) || this.reloadLastDomain();
		} catch {}
	}
	async #i() {
		await dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: async () => {
				let { TabixIndexedFile: e, RemoteFile: t } = await Wc(), n = P(this.params.addChrPrefix);
				return {
					TabixIndexedFile: e,
					RemoteFile: t,
					renameRefSeqs: n === !0 ? (e) => "chr" + e : n ? (e) => n + e : void 0
				};
			},
			createHandle: (e, { TabixIndexedFile: t, RemoteFile: n, renameRefSeqs: r }) => this.#a(e, t, n, r)
		});
	}
	async #a(e, t, n, r) {
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
	async loadInterval(e) {
		await this.initializedPromise;
		let t = this.#e.handles, n = await this.discretizeAndLoad(e, async (e, n) => await Promise.all(t.map(async (t) => {
			let r = [];
			return await t.tbiIndex.getLines(e.chrom, e.startPos, e.endPos, {
				lineCallback: (e) => {
					r.push(e);
				},
				signal: n
			}), [t, Hs(this._parseFeatures(r, t.parserContext), t.fields)];
		})));
		n && this.#o(t, n);
	}
	async _createParser(e, t) {}
	async _readFilePrefix(e) {
		let { maxBlockSize: t } = await e.getMetadata(), n = await e.filehandle.read(t, 0), { unzip: r } = await import("./esm-BA6yMcc-.js").then((e) => e.t), i = await r(n);
		return new TextDecoder("utf-8").decode(i);
	}
	_parseFeatures(e, t) {
		return [];
	}
	#o(e, t) {
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
		this.#e.markLoaded(), this.complete();
	}
	isDataReadyForDomain(e) {
		return this.#e.activeSetLoaded && super.isDataReadyForDomain(e);
	}
};
async function Wc() {
	let [{ TabixIndexedFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-C4UgxbPA.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		TabixIndexedFile: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixTsvSource.js
function Gc(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function Kc(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function qc(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = za(e.join("\n"), jc(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var Jc = class extends Uc {
	get label() {
		return "tabixSource";
	}
	async _createParser(e, t) {
		let n = this.params, r = P(n.columns) ?? Gc(e);
		if (r?.length || (r = Kc(await this._readFilePrefix(t))), !r?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
		return r;
	}
	_parseFeatures(e, t) {
		let n = this.params;
		return qc(e, t ?? [], P(n.parse));
	}
};
function Yc(e) {
	return e?.type == "tabix";
}
Io(Yc, Jc);
//#endregion
//#region ../core/src/data/sources/lazy/gff3Source.js
var Xc = class extends Uc {
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
function Zc(e) {
	return e?.type == "gff3";
}
Io(Zc, Xc);
//#endregion
//#region ../core/src/data/sources/lazy/vcfSource.js
var Qc = class extends Uc {
	get label() {
		return "vcfSource";
	}
	async _createParser(e) {
		return await bo(e);
	}
	_parseFeatures(e, t) {
		return So(e, t);
	}
};
function $c(e) {
	return e?.type == "vcf";
}
//#endregion
//#region ../core/src/rendering/registerWebGL.js
Io($c, Qc), Zn.canvasBackend = async (e) => {
	let { createCanvas2DRenderingBackend: t } = await import("./canvas2d-DU0IMBtn.js");
	return t(e);
}, Zn.canvasRasterExport = () => import("./rasterExport-DwXdfHiS.js"), Zn.canvasSvgRasterizer = () => import("./svgRasterizer-DkWQUl8W.js"), Zn.svgRenderer = () => import("./svg-C-Sw6E6G.js"), Zn.webglBackend = async (e) => {
	let { createWebGLRenderingBackend: t } = await import("./webgl-BT6gtsqG.js");
	return t(e);
};
//#endregion
//#region ../core/src/styles/genome-spy.css.js
var el = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.gs-tooltip {\nposition: fixed;\ninset: auto;\nmargin: 0;\nborder: 0;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: #f6f6f6;\nbackground: var(--background-color);\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid black;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, black 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\n&:first-child {\nmargin-top: 0;\n}\n\nborder-collapse: collapse;\n\nth,\ntd {\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px white;\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid black;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: #e0e0e0;\n}\n}\n\n.autoscroll-container {\nmax-height: min(40em, 50vh);\noverflow-x: hidden;\noverflow-y: auto;\npadding-right: var(--genome-spy-basic-spacing);\nmargin-right: calc(-1 * var(--genome-spy-basic-spacing));\n}\n\n.na {\ncolor: #aaa;\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\n}\n}\n}\n", tl = "gs-suppress-tooltip", nl = "gs-freeze-interaction", rl = "gs-tooltip", il = class {
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
		this.#o = document.createElement("div"), this.#o.className = rl, this.#o.setAttribute("popover", "manual"), e.appendChild(this.#o), this.clear();
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
		return g(this.#c) ?? !0;
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
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && ol(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 10;
		n > window.innerWidth - 10 - this.#o.offsetWidth && (n = e - 10 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 10, window.innerHeight - 10 - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		if (!this.#e) {
			if (!e || !this.enabled || this._isPenalty()) {
				this.visible &&= (fi("", this.#o), !1), this.#n = void 0;
				return;
			}
			fi(e, this.#o), this.#o.querySelectorAll(".autoscroll-container").forEach(al), this.visible = !0, this.updatePlacement();
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
function al(e) {
	e && queueMicrotask(() => {
		e.querySelector("tr.hovered")?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	});
}
function ol(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region ../core/src/genomeSpy/containerUi.js
function sl(e) {
	e.classList.add("genome-spy");
	let t = document.createElement("style");
	t.innerHTML = el, e.appendChild(t);
	let n = ll("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: ll("div", { class: "loading-indicators" }),
		tooltip: new il(e),
		styleElement: t
	};
}
function cl(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	r.textContent = t, n.appendChild(r), e.appendChild(n);
}
function ll(e, t) {
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
var ul = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, dl = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), fl = class {
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
}, pl = "important", ml = " !important", hl = dl(class extends fl {
	constructor(e) {
		if (super(e), e.type !== ul.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				let t = typeof r == "string" && r.endsWith(ml);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? pl : "") : n[e] = r;
			}
		}
		return Xr;
	}
}), gl = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", _l = class {
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
				e.push(G`<div style=${hl(t)}>
                        <div class=${i.status}>
                            ${i.status == "error" ? G`<span
                                      >Loading
                                      failed${i.detail ? G`: ${i.detail}` : K}</span
                                  >` : G`
                                      <img src="${gl}" alt="" />
                                      <span>Loading...</span>
                                  `}
                        </div>
                    </div>`);
			}
		}
		n && !r && e.push(G`<div style=${hl({
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
                                  <img src="${gl}" alt="" />
                                  <span>Loading...</span>
                              `}
                    </div>
                </div>`), t() ? this.#e.style.display = "block" : setTimeout(() => {
			t() || (this.#e.style.display = "none");
		}, 3e3), fi(e, this.#e);
	}
}, vl = class {
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
function yl(e) {
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
var bl = class {
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
}, xl = class {
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
	emit(e, t) {
		this.#e.get(e)?.forEach((e) => e(t));
	}
};
//#endregion
//#region ../core/src/utils/inputBinding.js
function Sl(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!Ve(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let a = r.name, o = (t) => {
			e.setValue(a, t);
		}, s = e.getTargetValue?.(a) ?? e.getValue(a), c = i.name ?? a, l = i.debounce ? ic(o, i.debounce, !1) : o, u = `${t}-param-${a}`;
		if (i.input == "range") n.push(G`<label for=${u}>${c}</label>
                    <div>
                        <input
                            id=${u}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? Kt(i.min, i.max, 100)}
                            .value=${s}
                            @input=${(e) => {
			l(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${s}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(G`<label for=${u}>${c}</label>
                    <input
                        id=${u}
                        type="checkbox"
                        ?checked=${s}
                        @input=${(e) => l(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(G`<span class="label">${c}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => G`<label>
                                    <input
                                        type="radio"
                                        name=${a}
                                        value=${e}
                                        .checked=${s == e}
                                        @input=${(e) => l(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(G`<label for=${u}>${c}</label>
                    <select
                        id=${u}
                        @input=${(e) => l(e.target.value)}
                    >
                        ${i.options.map((e, t) => G`<option
                                    value=${e}
                                    ?selected=${s == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(G`<label for=${u}>${c}</label>
                    <div>
                        <input
                            id=${u}
                            type=${i.input}
                            placeholder=${i.placeholder ?? ""}
                            autocomplete=${i.autocomplete ?? "off"}
                            .value=${s}
                            @focus=${(e) => e.target.select()}
                            @input=${(e) => {
			l(i.input == "number" ? e.target.valueAsNumber : e.target.value);
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
var Cl = class {
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
			t.push(...Sl(n));
		});
		let n = this.#t.inputBindingContainer;
		if (!(!n || n == "none" || !t.length)) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && fi(G`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
};
//#endregion
//#region ../core/src/utils/variableTools.js
function wl(e) {
	return C(e) || je(e) || Ne(e);
}
//#endregion
//#region ../core/src/config/styleUtils.js
function Tl(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function El(e, t) {
	let n = Tl(t);
	return B(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region ../core/src/config/markConfig.js
function Dl(e, t, n) {
	let r = [t, ...Tl(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return B([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region ../core/src/marks/markUtils.js
function Ol(e) {
	for (let t of ["x", "y"]) {
		let n = oe(t), r = e[t], i = e[n];
		if (r && i && I(r) && !f(r) && f(i)) throw Error(`Cannot combine encoding.${t}.value with scale-backed encoding.${n}. Use encoding.${t}.datum for a constant data-domain endpoint, or use encoding.${n}.value for a visual-domain endpoint.`);
	}
}
function kl(e, t, n = !1) {
	let r = oe(t), i = e[t] && { ...e[t] }, a = e[r] && { ...e[r] };
	if (!(I(i) || I(a))) {
		if (i) {
			if (!M(e[t])) return;
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
function Al(e, t) {
	let n = oe(t), r = e[t], i = e[n];
	if (!r || !i || I(r) || I(i) || !M(r) || !M(i) || !["index", "locus"].includes(r.type)) return;
	let a = r.band, o = i.band, s = a ?? o ?? 0;
	e[t] = {
		...r,
		band: s
	}, e[n] = {
		...i,
		band: o ?? s
	};
}
function jl(e, t) {
	let n = f(e);
	n && (n.resolutionChannel = t);
}
function Ml(e, t) {
	e.stroke || (t ? e.stroke = { value: null } : (e.stroke = structuredClone(e.color), jl(e.stroke, "color"))), I(e.stroke) && e.stroke.value === null && (e.strokeWidth = { value: 0 }), e.strokeOpacity || (e.strokeOpacity = structuredClone(e.opacity), jl(e.strokeOpacity, "opacity"));
}
function Nl(e, t) {
	I(e.fill) && e.fill.value === null ? e.fillOpacity = { value: 0 } : e.fill || (e.fill = structuredClone(e.color), jl(e.fill, "color"), !t && !e.fillOpacity && (e.fillOpacity = { value: 0 })), e.fillOpacity || (t ? (e.fillOpacity = structuredClone(e.opacity), jl(e.fillOpacity, "opacity")) : e.fillOpacity = { value: 0 });
}
//#endregion
//#region ../core/src/marks/mark.js
var Pl = class {
	#e;
	#t = 0;
	constructor(e) {
		this.unitView = e, this.encoders = void 0;
		let t = typeof e.spec.mark == "object" ? e.spec.mark : {}, n = Dl(e.getConfigScopes(), e.getMarkType(), t.style), r = n;
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
		return L(e) ? this.unitView.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		L(n) && this.unitView.paramRuntime.watchExpression(n.expr, e, {
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
			"uniqueId"
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
			L(e) && this.unitView.paramRuntime.watchExpression(e.expr, () => {
				this.unitView.getCollector()?.completed && (this.#t++, this.unitView.context.animator.requestRender());
			});
		}
	}
	get encoding() {
		return Yn(this, "encoding", () => {
			let e = this.unitView.getEncoding(), t = (e) => {
				let t = this.properties[e];
				return wl(t) || L(t) ? { value: t } : void 0;
			}, n = Object.fromEntries(this.getSupportedChannels().map((e) => [e, t(e)]).filter((e) => I(e[1]))), r = this.fixEncoding({
				...this.isPickingParticipant() ? { uniqueId: { field: de } } : {},
				...n,
				...e
			}), i = r, a = (e, t) => {
				let n = structuredClone(e), r = f(n);
				if (!r) throw Error("Cannot add scale properties to an unscaled channel definition.");
				return Object.assign(r, t), n;
			};
			for (let n of ["x", "y"]) {
				let r = n == "x" ? "x2" : "y2", o = n + "Offset", s = r + "Offset", c = i[o];
				if (ke(c)) {
					let e = i[n], t = e && f(e), r = t;
					t && r && t.type != "quantitative" && r.band == null && (i[n] = a(e, { band: 0 })), f(c).band ?? (i[o] = a(c, { band: this.getOffsetBand(o) }));
				}
				let l = xe(i[o], t(s), e[r] != null);
				if (typeof l == "number") i[s] = { value: l };
				else if (l && f(l)) {
					let e = { resolutionChannel: o };
					ke(l) && (e.band = this.getOffsetBand(s)), i[s] = a(l, e);
				} else i[s] = l;
			}
			return Ol(r), r.x && (r.x.buildIndex ??= this.properties.buildIndex ?? !0), r;
		});
	}
	getType() {
		return this.unitView.getMarkType();
	}
	initializeData() {}
	initializeEncoders() {
		this.encoders = j(this.unitView, this.encoding);
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
					let t = e.accessor.channelDef;
					if (Re(t) && a(t.expr, "configuration"), !n) continue;
					e.predicate?.param && a(e.predicate.param, "resources");
					let r = [I(t) ? t.value : void 0, Ce(t) ? t.datum : void 0];
					for (let e of r) L(e) && a(e.expr, "resources");
				}
				if (n && r.scale) {
					let n = f(r.channelDef)?.resolutionChannel ?? t;
					if (ce(n)) {
						let t = this.unitView.getScaleResolution(n);
						if (t && !e.has(t)) {
							let n = () => i.resources++;
							t.addEventListener("domain", n), t.addEventListener("range", n), this.unitView.registerDisposer(() => {
								t.removeEventListener("domain", n), t.removeEventListener("range", n);
							}), e.add(t);
						}
					}
				}
			}
		}
		if (n) for (let t of e) {
			let e = this.properties[t];
			L(e) && a(e.expr, "resources");
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
}, Fl = class extends Pl {
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
		return kl(e, "x", ke(e.xOffset)), kl(e, "y", ke(e.yOffset)), Ml(e, this.properties.filled), Nl(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
//#endregion
//#region ../core/src/marks/ruleLikeEncoding.js
function Il(e, t) {
	if (!(e.x && e.y && e.x2 && e.y2)) if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
	else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
	else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
	else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
	else if (e.x && e.y && e.y2) e.x2 = e.x;
	else if (e.y && e.x && e.x2) e.y2 = e.y;
	else if (e.y && e.x) if (!e.x2 && M(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
	else if (!e.y2 && M(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
	else throw Error(`Cannot infer ${t} mark's secondary position channel from the encoding: ` + JSON.stringify(e));
	else throw Error(`At a minimum, either the x or y channel must be defined in the ${t} mark's encoding: ` + JSON.stringify(e));
	return e;
}
//#endregion
//#region ../core/src/marks/arrow.js
var Ll = class extends Pl {
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
		return Il(e, "arrow"), !e.size && Rl(this.properties.size) && (e.size = zl(this.properties.size, this.properties.size.channel ?? "auto", e)), Ml(e, this.properties.filled), Nl(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
function Rl(e) {
	return typeof e == "object" && !!e && "band" in e && typeof e.band == "number";
}
function zl(e, t, n) {
	let r = Bl(t, n), i = r == "x" ? "width" : "height", a = n[r];
	return { value: { expr: `${M(a) && a.scale !== null ? `bandwidth("${r}") * ${i}` : i} * ${e.band}` } };
}
function Bl(e, t) {
	if (e == "auto") return Vl(t);
	if (Hl(t)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return e;
}
function Vl(e) {
	if (Hl(e)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return Ul(e) ? "y" : "x";
}
function Hl(e) {
	return Ul(e) && Wl(e);
}
function Ul(e) {
	return e.x2 != null && e.x2 !== e.x;
}
function Wl(e) {
	return e.y2 != null && e.y2 !== e.y;
}
//#endregion
//#region ../core/src/data/transforms/sample.js
var Gl = class extends R {
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
function Kl(e, t, n) {
	let r = new Gl({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region ../core/src/marks/point.js
var ql = class extends Pl {
	#e = () => 0;
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		if (t != null) if (L(t)) {
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
		let t = this.unitView.getEncoding(), n = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, r = !I(e.shape) || e.shape.value === "x" || e.shape.value === "+", i = e.strokeWidth;
		for (let [e, r] of [["dx", "xOffset"], ["dy", "yOffset"]]) {
			let i = t[e] != null || e in n, a = t[r] != null || r in n;
			if (i && a) throw Error(`Point marks cannot combine legacy ${e} with ${r}. Use only ${r}.`);
		}
		return Ml(e, this.properties.filled), Nl(e, this.properties.filled), r && I(e.stroke) && e.stroke.value === null && (e.strokeOpacity = { value: 0 }, i && (e.strokeWidth = i)), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		let e = this.encoders.semanticScore ? _(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(Kl(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	getSemanticThreshold() {
		if (!this.sampledSemanticScores || this.sampledSemanticScores.length === 0) return -1;
		let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
		return e <= 0 ? -Infinity : e >= 1 ? Infinity : Ct(this.sampledSemanticScores, e);
	}
}, Jl = "horizontal", Yl = "vertical", Xl = class extends Pl {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"size"
		];
	}
	fixEncoding(e) {
		return this.getType() == "tick" ? this.fixTickEncoding(e) : Il(e, "rule");
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? Zl(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return Ql(e, n), e;
	}
};
function Zl(e) {
	if (!e.y) return Yl;
	if (!e.x) return Jl;
	let t = $l(e.x), n = $l(e.y);
	if (!t && n) return Yl;
	if (t && !n) return Jl;
}
function Ql(e, t) {
	t == Yl ? (e.x2 = e.x, $l(e.y) ? [e.y, e.y2] = tu(e.y) : (e.y = { value: 0 }, e.y2 = { value: 1 })) : (e.y2 = e.y, $l(e.x) ? [e.x, e.x2] = tu(e.x) : (e.x = { value: 0 }, e.x2 = { value: 1 }));
}
function $l(e) {
	return M(e) && (e.type == "ordinal" || e.type == "nominal");
}
function eu(e, t) {
	return {
		...e,
		band: t
	};
}
function tu(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [eu(e, t), eu(e, 1 - t)];
}
//#endregion
//#region ../core/src/marks/link.js
var nu = class extends Pl {
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
		return e.x2 || (M(e.x) ? e.x2 = { datum: 0 } : e.x2 = e.x), e.y2 || (M(e.y) ? e.y2 = { datum: 0 } : e.y2 = e.y), e;
	}
};
//#endregion
//#region ../core/src/fonts/textMetrics.js
function ru(e, t) {
	return e.getFont(t.font, t.fontStyle, t.fontWeight);
}
function iu(e, t) {
	return (e.capHeight + e.descent) / e.common.base * t;
}
function au(e, t, n) {
	return {
		width: e.measureWidth(t, n),
		height: iu(e, n)
	};
}
function ou(e, t, n) {
	let r = t * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return n == "vertical" ? e.width * i + e.height * a : e.width * a + e.height * i;
}
//#endregion
//#region ../core/src/marks/text.js
var su = class extends Pl {
	#e;
	constructor(e) {
		super(e), this.#e = Fe(e.paramRuntime, this.properties.fitToBand, "Reactive text fitToBand changes are not supported.", (t) => e.registerDisposer(t)) ?? !1, this.font = ru(e.context.fontManager, this.properties), this.watchEncodedDataExpressions(["text", "logoLetters"]);
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
		for (let t of $e) this.#e ? kl(e, t) : Al(e, t);
		return e;
	}
}, cu = 1;
function lu() {
	let e = [0, 1], t = [0, 1], n = 1, r = 1, i = 0, a = 0, o = .5, s = 0, c = () => r / Math.max(1, n - i + a * 2), l = (e = c()) => t[0] + (r - e * (n - i)) * o, u = (e = c()) => e * (1 - i), d = (t) => {
		let n = c();
		return l(n) + (Math.floor(t) - e[0]) * n + u(n) * o;
	};
	return d.invert = (t) => (t - l() - u() * o) / c() + e[0], d.domain = function(t) {
		if (arguments.length) {
			e = Yi(t), n = e[1] - e[0];
			let r = e[0] === 0 && e[0] === 0;
			if (n < cu && !r) {
				n = cu;
				let t = (e[0] + e[1]) / 2;
				e[0] = t - n / 2, e[1] = t + n / 2;
			}
			return d;
		} else return e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = [...e], r = t[1] - t[0], d) : t;
	}, d.numberingOffset = function(e) {
		return arguments.length ? (s = e, d) : s;
	}, d.padding = function(e) {
		return arguments.length ? (a = e, i = Math.min(1, e), d) : i;
	}, d.paddingInner = function(e) {
		return arguments.length ? (i = Math.min(1, e), d) : i;
	}, d.paddingOuter = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, d.align = function(e) {
		return arguments.length ? (o = Math.max(0, Math.min(1, e)), d) : o;
	}, d.step = c, d.bandwidth = () => Math.abs(u()), d.ticks = (t) => {
		let r = d.align(), i = d.numberingOffset();
		return Xt(e[0] - r + i, e[1] - r + i, Math.min(t, Math.ceil(n))).filter(Number.isInteger).map((e) => e - s);
	}, d.tickFormat = (t, r) => {
		if (r) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = Kt(e[0], e[1], Math.min(t, Math.ceil(n))) < 1e5 ? N(",") : N(".3s");
		return (e) => i(e + s);
	}, d.copy = () => lu().domain(e).range(t).paddingInner(i).paddingOuter(a).align(o).numberingOffset(s), d;
}
//#endregion
//#region ../core/src/genome/locusFormat.js
var uu = N(",d");
function du(e) {
	return e.chrom + ":" + uu(Math.floor(e.pos + 1));
}
function fu(e) {
	return !je(e) && "chrom" in e ? du(e) : "" + e;
}
function pu(e, t) {
	return e.chrom + ":" + uu(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + uu(Math.ceil(t.pos));
}
//#endregion
//#region ../core/src/genome/genomes.js
var mu = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function hu(e) {
	if (!(e in mu)) throw Error(`Unknown assembly: ${e}`);
	return mu[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region ../core/src/genome/genome.js
var gu = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/grammar/genomic-coordinates/.");
		if (!xu(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, Cu(this.config)) this.setChromSizes(this.config.contigs);
		else if (!Su(this.config)) {
			let e = hu(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/grammar/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (Su(this.config)) try {
			let t = En(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(_u(await n.text()));
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
		let t = Zt(this.startByIndex, e) - 1;
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
		return pu(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return du(t);
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
function _u(e) {
	return Ii(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function vu(e) {
	return x(e) && "chrom" in e;
}
function yu(e) {
	return e.every(vu);
}
function bu(e) {
	return yu(e) && (e[1] ?? e[0]).pos !== void 0;
}
function xu(e) {
	return x(e) && ("name" in e || Su(e) || Cu(e));
}
function Su(e) {
	return xu(e) && "url" in e;
}
function Cu(e) {
	return xu(e) && "contigs" in e;
}
//#endregion
//#region ../core/src/genome/scaleLocus.js
var wu = 1e6, Tu = .65;
function Eu() {
	let e = lu().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), o = t.toChromosome(Math.max(r[0], 0)), s = t.toChromosome(Math.min(r[1], t.totalSize - 1)), c = Math.max(1, Math.min(n ?? 10, Math.floor(i))), l = Kt(r[0], r[1], c);
		l < wu && (l = Kt(r[0], r[1], c * Tu)), l = Math.max(1, l);
		let u = [];
		for (let e = o.index; e <= s.index; e++) {
			let n = t.chromosomes[e], i = Math.max(n.continuousStart + l, r[0] - (r[0] - n.continuousStart) % l), o = Math.min(n.continuousEnd - l / 4, r[1] + 1);
			for (let e = i; e <= o; e += l) {
				let t = e - a;
				t >= r[0] && t < r[1] && u.push(t);
			}
		}
		return u;
	}, e.tickFormat = (n, r) => {
		if (!t) return;
		if (r) throw Error("Locus scale's tickFormat does not support a specifier!");
		let i = e.domain(), a = i[1] - i[0], o = e.numberingOffset(), s = Kt(i[0], i[1], Math.max(1, Math.min(n ?? 10, Math.floor(a)))) < wu ? N(",") : N(".3s"), c = (e) => e - t.toChromosome(e).continuousStart;
		return (e) => s(c(e) + o);
	};
	let n = e.copy;
	return e.copy = () => {
		let e = n(), r = t;
		return e.genome = function(t) {
			return arguments.length ? (r = t, e) : r;
		}, e.genome(t);
	}, e;
}
function Du(e) {
	return e.type == "locus";
}
function Ou(e, t) {
	let n = Nu(e);
	return n ? n.toChromosomal(t) : t;
}
function ku(e, t) {
	let n = Nu(e);
	return n && vu(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function Au(e, t) {
	let n = Nu(e);
	return n && yu(t) ? n.toContinuousInterval(t) : t;
}
function ju(e, t) {
	let n = Nu(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function Mu(e) {
	let t = Nu(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function Nu(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region ../core/src/scales/scaleInstanceManager.js
var Pu = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Set();
	#r;
	#i;
	#a;
	#o;
	#s = 0;
	constructor({ createExpression: e, onRangeChange: t, onDomainChange: n, getGenomeStore: r }) {
		this.#r = e, this.#i = t, this.#a = n, this.#o = r;
	}
	get scale() {
		return this.#e;
	}
	resetScale() {
		this.dispose(), this.#e = void 0, this.#t = void 0;
	}
	getLocusGenome(e) {
		let t = this.#o?.();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e) {
		let t = cs({
			...this.#l(e),
			range: void 0
		});
		return t.props = e, "unknown" in t && t.unknown(null), this.#e = t, this.#t = typeof t.range == "function" ? t.range() : void 0, this.#c(e), this.#u(), this.#d(), this.#e;
	}
	#c(e) {
		let t = this.#e;
		!t || !Du(t) || t.genome(this.getLocusGenome(e.assembly));
	}
	reconfigureScale(e) {
		let t = this.#e;
		!t || t.type == "null" || (ss({
			...this.#l(e),
			range: void 0
		}, t), t.props = e, this.#u());
	}
	withDomainNotificationsSuppressed(e) {
		this.#s += 1;
		try {
			e();
		} finally {
			--this.#s;
		}
	}
	#l(e) {
		let { assembly: t, domainIndexer: n, ...r } = e;
		return r;
	}
	#u() {
		let e = this.#e;
		if (!e) return;
		let t = e.props;
		this.#n.forEach((e) => e.invalidate()), this.#n.clear();
		let n = Iu({
			range: t.range,
			reverse: t.reverse,
			createExpression: this.#r,
			registerExpr: (e) => this.#n.add(e)
		});
		if (!n) {
			t.scheme === void 0 && !("rangeStep" in t) && this.#t && e.range(this.#t);
			return;
		}
		if ("values" in n) {
			e.range(n.values);
			return;
		}
		let r = () => e.range(n.evaluate());
		n.setup(r), r();
	}
	#d() {
		let e = this.#e;
		if (!e) return;
		let t = e.range, n = e.domain, r = () => this.#i?.();
		Fu(e, {
			onRangeChange: r,
			onDomainChange: () => {
				this.#s > 0 || this.#a?.();
			},
			range: t,
			domain: n
		}), r();
	}
	dispose() {
		this.#n.forEach((e) => e.invalidate()), this.#n.clear();
	}
};
function Fu(e, { onRangeChange: t, onDomainChange: n, range: r, domain: i }) {
	typeof r == "function" && (e.range = (function(e) {
		if (arguments.length) r(e), t?.();
		else return r();
	})), typeof i == "function" && (e.domain = (function(e) {
		if (arguments.length) i(e), n?.();
		else return i();
	}));
}
function Iu({ range: e, reverse: t, createExpression: n, registerExpr: r }) {
	if (!e || !w(e)) return null;
	let i = (e, t) => t ? e.slice().reverse() : e;
	if (e.some(L)) {
		let a;
		return {
			dynamic: !0,
			evaluate: () => i(a.map((e) => e()), t),
			setup: (t) => {
				a = e.map((e) => {
					if (L(e)) {
						let i = n(e.expr);
						return i.subscribe(t), r(i), () => i(null);
					}
					return () => e;
				});
			}
		};
	}
	return {
		dynamic: !1,
		values: i(e, t)
	};
}
//#endregion
//#region ../core/src/utils/mergeObjects.js
function Lu(e, t, n) {
	if (n ||= [], e.some((e) => e === null)) {
		if (e.every((e) => e === null)) return null;
		throw console.warn(e), Error("Cannot merge objects with nulls!");
	}
	let r = {}, i = (e, t) => e === t || Ru(e) && Ru(t) || Ru(e) && t === !0 || e === !0 && x(t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => e === t[n]), a = (e) => {
		for (let a in e) {
			let o = e[a];
			if (!n.includes(a) && o !== void 0) if (r[a] !== void 0 && !i(r[a], o)) console.warn(`Conflicting property ${a} of ${t}: (${JSON.stringify(r[a])} and ${JSON.stringify(e[a])}). Using ${JSON.stringify(r[a])}.`);
			else {
				let e = r[a];
				if (Ru(e)) Ru(o) && (r[a] = Lu([e, o], a));
				else if (Ru(o)) {
					if (!(e === !0 || e === void 0)) throw Error("Bug in merge! Target is: " + e);
					r[a] = Lu([{}, o], a);
				} else r[a] = o;
			}
		}
	};
	for (let t of e) a(t);
	return r;
}
function Ru(e) {
	return x(e) && !Array.isArray(e);
}
//#endregion
//#region ../core/src/config/scaleConfig.js
var zu = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, Bu = /* @__PURE__ */ new Set(["rect"]), Vu = /* @__PURE__ */ new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function Hu(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function Uu(e) {
	return Vu.has(e);
}
function Wu(e, t) {
	if (Uu(t)) return Ju(e)[t];
}
function Gu(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function Ku(e) {
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
function qu(e, t) {
	let n = Gu(t);
	return B(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function Ju(e) {
	return B(e.map((e) => e.range));
}
function Yu(t, { channel: n, dataType: r, isExplicitDomain: i, markTypes: a, hasDomainMid: o }) {
	let s = qu(t, r), c = Ju(t), l = { ...Ku(s) };
	if (i ? l.zero = !1 : l.zero === void 0 && s.zero !== void 0 && (l.zero = s.zero), Be(n) && l.nice === void 0 && (l.nice = s.nice === void 0 ? !i : s.nice), e(n) && l.scheme === void 0) if (r == "quantitative") {
		let e = o || s.domainMid !== void 0 ? c.diverging : a?.length && a.every((e) => Bu.has(e)) ? c.heatmap : c.ramp, t = Hu(e) ? e : s.quantitativeColorScheme;
		Hu(t) && (l.scheme = t);
	} else {
		let e = s[zu[r] ?? zu.quantitative];
		Hu(e) && (l.scheme = e);
	}
	else Ze(n) && l.range === void 0 ? n == "shape" ? l.range = c.shape ?? [] : n == "direction" ? l.range = ["forward", "reverse"] : l.range = [] : n == "size" && l.range === void 0 ? l.range = c.size : n == "angle" && l.range === void 0 && (l.range = c.angle);
	return l;
}
//#endregion
//#region ../core/src/scales/domainExpressions.js
function Xu(e, t) {
	return L(e) ? t(e.expr)() : Array.isArray(e) ? e.map((e) => Xu(e, t)) : e;
}
function Zu(e) {
	return L(e) ? [e] : Array.isArray(e) ? e.flatMap((e) => Zu(e)) : [];
}
//#endregion
//#region ../core/src/scales/scaleRules.js
function Qu(e, t) {
	if (t == "index" || t == "locus") {
		if (Ye(e)) return t;
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
		dn,
		nn,
		rn
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function $u(e, t, n, r) {
	if (n) {
		if (["index", "locus"].includes(n) && !Ye(e)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${e}" resolves to scale type "${n}".`);
		if (["index", "locus"].includes(t) && n !== t || n === "locus" && n !== t) throw Error(`${r} "${n}" is incompatible with "${t}" data.`);
	}
}
function ed(e, t) {
	Be(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && z(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region ../core/src/scales/scalePropsResolver.js
function td({ channel: t, dataType: n, orderedMembers: r, viewLevelScaleProps: i, isExplicitDomain: a, configScopes: o, getOwnerScaleResolution: s }) {
	let c = r, l = c.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), u = Lu(i ? [i.props] : c.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (u === null || u.type == "null") return { type: "null" };
	let d = {
		...Yu(o, {
			channel: t,
			dataType: n,
			isExplicitDomain: a,
			markTypes: l,
			hasDomainMid: u.domainMid !== void 0
		}),
		...u
	};
	if (d.type ||= Qu(t, n), Ye(t) && c.some((e) => ke(e.view.getEncoding()[Ue(t)])) && d.type == "band" && d.padding === void 0 && (d.paddingInner ??= .2, d.paddingOuter ??= .2), $u(t, n, i ? d.type : void 0, `View-level scales.${t}.type`), typeof d.range == "string") {
		if (!Uu(d.range)) throw Error("Unknown named scale range \"" + d.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let n = Wu(o, d.range);
		if (n === void 0) throw Error("Named scale range \"" + d.range + "\" is not configured in config.range.");
		e(t) && (typeof n == "string" || typeof n == "object" && n && !Array.isArray(n)) ? (d.scheme = n, delete d.range) : d.range = n;
	}
	if (t == "y" && en(d.type) && d.reverse == null && (d.reverse = !0), pe(t) && en(d.type) && !d.range) {
		let e = t == "xOffset" ? "x" : "y", n = s?.(e);
		n?.getResolvedScaleType() == "band" && (n.getScale(), d.range = [0, { expr: `bandwidth("${e}") * ${e == "x" ? "width" : "height"}` }]);
	}
	if (d.range && d.scheme && delete d.scheme, d.domainTransition === void 0 && (d.domainTransition = !(c.some((e) => Zu(e.channelDef.scale?.domain).length > 0) || Zu(i?.props.domain).length > 0)), !("zoom" in d)) {
		let e = qu(o, n);
		e.zoom === void 0 ? ["index", "locus"].includes(d.type) && (d.zoom = !0) : d.zoom = e.zoom;
	}
	return ed(d, t), d;
}
//#endregion
//#region ../core/src/scales/selectionDomainUtils.js
function nd(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function rd(e, t) {
	if (e) {
		if (!tt(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function id(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? nd(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: rd(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function ad(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !we(a)) return;
		let o = et(a.select);
		!A(o) || !o.encodings?.includes(r) || e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function od(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !we(e)) continue;
		let o = et(e.select);
		if (!(!A(o) || !o.encodings?.includes(r)) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function sd(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.ceil(a), o = Math.ceil(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region ../core/src/utils/domainArray.js
var cd = class e extends Array {
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
}, ld = class extends cd {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) ? this : (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e)), this);
	}
}, ud = class extends cd {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, dd = class extends ud {
	constructor() {
		super(), this.type = "nominal";
	}
}, fd = class extends cd {
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
}, pd = {
	quantitative: ld,
	index: ld,
	locus: ld,
	nominal: dd,
	ordinal: ud
};
function md(e, t) {
	if (e == "quantitative" && hd(t)) {
		let n = new fd(t);
		return n.type = e, n;
	} else if (pd[e]) {
		let n = new pd[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function hd(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region ../core/src/view/dataReadiness.js
function gd(e, t) {
	let n = {};
	for (let r of t) {
		let t = e.getScaleResolution(r);
		t && (n[r] = Array.from(t.getDomain()));
	}
	return Object.keys(n).length ? n : void 0;
}
function _d(e, t, n) {
	let r = yd(e, n);
	if (!r.size) return !0;
	for (let e of r) if (!Sd(e, t)) return !1;
	return !0;
}
function vd(e, t, n, r, i) {
	let a = i ?? bd;
	return new Promise((i, o) => {
		let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = () => {
			f(), d();
		}, u = () => {
			for (let e of s) e();
			s.clear(), e.removeBroadcastListener("subtreeDataReady", l), r && r.removeEventListener("abort", p);
		}, d = () => {
			_d(t, n, a) && (u(), i());
		}, f = () => {
			t.visit((e) => {
				if (!(e instanceof J) || !a(e)) return;
				let t = e.flowHandle?.collector;
				t && (c.has(t) || (c.add(t), s.add(t.observe(d))));
			});
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
		f(), xd(t, n, a), d();
	});
}
function yd(e, t) {
	let n = t ?? bd, r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		if (!(e instanceof J) || !n(e)) return;
		let t = e;
		for (; t && !(t.flowHandle && t.flowHandle.dataSource);) t = t.dataParent;
		if (!t || !t.flowHandle) return;
		let i = t.flowHandle.dataSource;
		i instanceof zo && r.add(i);
	}), r;
}
function bd(e) {
	return e.isConfiguredVisible() && e.getEffectiveOpacity() > 0;
}
function xd(e, t, n) {
	for (let r of yd(e, n)) {
		let e = Cd(r, t);
		e && r.ensureDataForDomain(e);
	}
}
function Sd(e, t) {
	let n = Cd(e, t);
	return !!n && e.isDataReadyForDomain({ [e.channel]: n });
}
function Cd(e, t) {
	return t?.[e.channel] ?? (t ? void 0 : Array.from(e.scaleResolution.getDomain()));
}
//#endregion
//#region ../core/src/scales/viewportDomain.js
var wd = 150;
function Td(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && e.source === "viewport";
}
function Ed(e, t) {
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
	let r = n.filter((e) => Td(e.domain));
	for (let e of r) if (e.type === "nominal" || e.type === "ordinal") throw Error(`Viewport-derived domains require a continuous scale, but channel "${e.channel}" has type "${e.type}".`);
	if (r.length > 0 && r.length !== n.length) throw Error("Cannot mix viewport-derived and other configured domains on a shared scale.");
	return r.length > 0;
}
function Dd(e, t, n, r) {
	let i = t(), a = md(i), o = !1;
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let s = r(t), c = t.view.getCollector();
		for (let t of e) c ? (a.extendAll(c.getViewportDomain(He(t, i), i, t, s)), o = !0) : t.constant && (a.extend(t({})), o = !0);
	}
	return o ? a : void 0;
}
function Od(e, t, n, r) {
	let i = [];
	for (let n of $e) {
		let a = e.view.getScaleResolution(n);
		if (!a || a === t) continue;
		if (r(a)) throw Error(`Viewport-derived scale domains form a dependency cycle in view "${e.view.getPathString()}".`);
		let o = a.getScale();
		if (!z(o.type) || en(o.type)) continue;
		let s = e.view.mark.encoders?.[n];
		if (!s) continue;
		let c = Md(s);
		if (!c) continue;
		let l = n === "x" ? "x2" : "y2", u = e.view.mark.encoders?.[l], d = u ? Md(u) : void 0, f = a.getDomain();
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
function kd(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) for (let e of $e) {
		let i = r.view.getScaleResolution(e);
		i && i !== t && n.add(i);
	}
	return n;
}
function Ad(e, t) {
	for (let n of e) {
		if (!n.view.getCollector()?.completed) return !1;
		let e = {};
		for (let r of t(n)) e[r.channel] = Array.from(r.domain);
		if (!_d(n.view, e, (e) => e === n.view)) return !1;
	}
	return !0;
}
var jd = class {
	#e = [];
	#t;
	#n = !1;
	constructor({ hasViewportDomain: e, getDependencies: t, isReady: n, update: r }) {
		this.hasViewportDomain = e, this.getDependencies = t, this.isReady = n, this.update = r;
	}
	refresh() {
		if (this.clear(), !this.hasViewportDomain()) return;
		let e = () => this.schedule(!1);
		for (let t of this.getDependencies()) t.addEventListener("domain", e), this.#e.push(() => t.removeEventListener("domain", e));
	}
	schedule(e) {
		if (e && this.#n && this.isReady()) {
			this.#n = !1, this.update();
			return;
		}
		clearTimeout(this.#t), this.#n = !1, this.#t = setTimeout(() => {
			this.#t = void 0, this.isReady() ? this.update() : this.#n = !0;
		}, wd);
	}
	clear() {
		for (let e of this.#e) e();
		this.#e = [], clearTimeout(this.#t), this.#t = void 0, this.#n = !1;
	}
};
function Md(e) {
	return _(e) ?? u(e).find(Ie);
}
//#endregion
//#region ../core/src/scales/domainPlanner.js
var Nd = class {
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
	#d = void 0;
	#f = !1;
	#p;
	#m = !0;
	#h = /* @__PURE__ */ new Map();
	#g = /* @__PURE__ */ new WeakMap();
	constructor({ getActiveMembers: e, getAllMembers: t, getDataMembers: n, getViewLevelDomainSource: r, createExpression: i, resolveSelectionBinding: a, getViewportConstraints: o, getType: s, getLocusExtent: c, fromComplexInterval: l }) {
		this.#e = e, this.#t = t ?? e, this.#n = n ?? e, this.#r = r, this.#i = i, this.#a = a, this.#o = o, this.#s = s, this.#c = c, this.#l = l;
	}
	get initialDomainSnapshot() {
		return this.#u;
	}
	hasConfiguredDomain(e = {}) {
		return !!this.getConfiguredDomain(e);
	}
	hasSelectionConfiguredDomain() {
		return this.getSelectionConfiguredDomainBindingInfo(), !!this.#d;
	}
	getSelectionConfiguredDomainBindingInfo() {
		return this.#d || !this.#m || this.getConfiguredDomain(), this.#d;
	}
	getSelectionConfiguredDomainInfo() {
		let e = this.getSelectionConfiguredDomainBindingInfo();
		if (e) return {
			param: e.param,
			encoding: e.encoding
		};
	}
	invalidateConfiguredDomain() {
		this.#m = !0, this.#d = void 0, this.#f = !1, this.#p = void 0, this.#h.clear();
	}
	hasViewportDomain() {
		return this.getConfiguredDomain(), this.#f;
	}
	getDefaultDomain(e = !1, t) {
		let n = this.#s();
		return Kd(n, this.#c, e && n !== "locus" ? this.getDataDomain() : void 0, t);
	}
	getConfiguredOrDefaultDomain(e = !1, t, n = {}) {
		return this.getConfiguredDomain(n) ?? this.getDefaultDomain(e, t);
	}
	getConfiguredDomain(e = {}) {
		let t = e.includeSelectionInitial ?? !0;
		if (!this.#m && this.#h.has(t)) return this.#h.get(t);
		let n = this.#r?.(), r = Ed(this.#t(), n), i = Pd(this.#e(), n, this.#i, this.#a, this.#l, t);
		return Hd(this.#t(), i.selectionRef), this.#d = i.selectionRef, this.#f = r, this.#h.set(t, i.domain), this.#m = !1, i.domain;
	}
	getDataDomain() {
		let e = this.#n(), t = (e) => this.#_(e);
		if (this.hasViewportDomain()) {
			if (!this.#o) throw Error("Viewport-domain extraction requires positional constraints.");
			let n = Dd(e, this.#s, t, this.#o);
			return n && n.length > 0 && (this.#p = n), n?.length ? n : this.#p;
		} else return Gd(e, this.#s, t);
	}
	getDataZoomExtent() {
		return sn(this.#s(), this.getDataDomain());
	}
	captureInitialDomain(e, t, n) {
		if (!this.#u && z(e.type)) {
			let t = n ?? e.domain();
			ct(t) > 0 && (this.#u = t);
		}
		return t ? !1 : (this.#u = n ?? e.domain(), !0);
	}
	#_(e) {
		let t = this.#g.get(e);
		if (t) return t;
		let n = e.view.mark.encoders;
		if (!n) return [];
		let r = n[e.channel];
		if (!r) return [];
		let i = u(r);
		if (i.length === 0) return [];
		let a = i.filter(Ie).filter((e) => !e.channelDef.domainInert);
		return this.#g.set(e, a), a;
	}
};
function Pd(e, t, n, r, i, a) {
	let o = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => {
		let t = e.channelDef.scale?.domain;
		return t && !Td(t);
	}), s = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	t?.domain !== void 0 && !Td(t.domain) && Fd(s, Id(t, n, r, i, a));
	for (let e of o) Fd(s, Id({
		channel: e.channel,
		type: e.channelDef.type,
		domain: e.channelDef.scale.domain
	}, n, r, i, a));
	return zd(s);
}
function Fd(e, t) {
	t.kind === "selection" ? Ld(e, t) : Rd(e, t);
}
function Id(e, t, n, r, i) {
	let a = e.domain;
	return Wd(a) ? {
		kind: "selection",
		...Bd(e, a, n, r, i)
	} : {
		kind: "literal",
		domain: Vd(e.type, Xu(a, t), r)
	};
}
function Ld(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function Rd(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function zd(e) {
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
function Bd(e, t, n, r, i) {
	let a = t.param, o = Ud(e.channel, t, a), s = n(a, o), c = t.initial !== void 0, l = s.selection?.intervals[o], u = a + "." + o;
	return !l || l.length !== 2 ? {
		domain: i && t.initial ? Vd(e.type, t.initial, r) : void 0,
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	} : {
		domain: md(e.type, r(l)),
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	};
}
function Vd(e, t, n) {
	let r = n(t);
	return md(e, e === "locus" && yu(t) && !bu(t) ? r : ln(e, r));
}
function Hd(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => od(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function Ud(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = h(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function Wd(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function Gd(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = He(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = md(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = md(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function Kd(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? sn(e, n) ?? [] : n ?? [];
}
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function qd(e) {
	return --e * e * e + 1;
}
function Jd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../core/src/utils/eerp.js
function Yd(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region ../core/src/scales/zoomDomainUtils.js
function Xd(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type) {
		case "linear":
		case "index":
		case "locus": return p(t, n, r);
		case "log": return re(t, n, r);
		case "pow":
		case "sqrt": return ae(t, n, r, e.exponent());
		case "symlog": return d(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region ../core/src/scales/scaleInteractionController.js
var Zd = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	#c = null;
	constructor({ getScale: e, getAnimator: t, renderImmediately: n, getInitialDomainSnapshot: r, getDataZoomExtent: i, getResetDomain: a, fromComplexInterval: o, getGenomeExtent: s }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o, this.#s = s;
	}
	getZoomExtent() {
		let e = this.#e(), t = e.props.zoom;
		return $d(e, t, this.#o, this.#s, this.#r, this.#i);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return z(e) && !en(e);
	}
	getDomainChangeAction(e, t) {
		return se(t, e) ? "none" : this.isZoomable() ? "restore" : this.#e().type === "index" ? "notify" : this.isZoomingSupported() ? "animate" : "notify";
	}
	isZoomed() {
		return this.isZoomingSupported() && !se(this.#a(), this.#e().domain());
	}
	zoom(e, t, n) {
		if (!this.isZoomingSupported()) return !1;
		let r = this.#e(), i = r.domain(), a = ef(r, i, e, t, n), o = this.getZoomExtent();
		return a = te(a, o[0], o[1]), [0, 1].some((e) => a[e] != i[e]) ? (r.domain(a), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		let { duration: n, renderImmediately: r } = Qd(t);
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let i = this.#e(), a = tf(i.type, e, this.#o), o = this.#t(), s = i.domain();
		if (n > 0 && s.length == 2) {
			if (r) throw Error("renderImmediately is not supported for animated zooms.");
			let e = s[1] - s[0], t = a[1] - a[0], c = s[0] + e / 2, l = a[0] + t / 2, u = s[0] == a[0], d = s[1] == a[1];
			this.#l();
			let f = Dn();
			if (this.#c = f, await o.transition({
				duration: n,
				easingFunction: Jd,
				cancelToken: f,
				onUpdate: (n) => {
					let r = Yd(e, t, n), a = e == t ? n : (e - r) / (e - t), o = a * l + (1 - a) * c, f = [u ? s[0] : o - r / 2, d ? s[1] : o + r / 2];
					i.domain(f);
				}
			}), this.#c !== f) return;
			this.#c = null, i.domain(a);
		} else this.#l(), i.domain(a), r ? this.#n() : o?.requestRender();
	}
	#l() {
		this.#c &&= (this.#c.canceled = !0, null);
	}
	resetZoom() {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let e = this.#e(), t = e.domain(), n = this.#a();
		return [0, 1].some((e) => n[e] != t[e]) ? (e.domain(n), !0) : !1;
	}
	getZoomLevel() {
		if (this.isZoomable()) {
			let e = this.getZoomExtent();
			return ct(e.every(Number.isFinite) ? e : this.#r() ?? this.#e().domain()) / ct(this.#e().domain());
		}
		return 1;
	}
};
function Qd(e) {
	if (e === void 0) return {
		duration: 0,
		renderImmediately: !1
	};
	if (Ne(e)) return {
		duration: e ? 700 : 0,
		renderImmediately: !1
	};
	if (typeof e == "number") return {
		duration: e,
		renderImmediately: !1
	};
	let t = e.duration ?? 0;
	return {
		duration: Ne(t) ? t ? 700 : 0 : t,
		renderImmediately: e.renderImmediately === !0
	};
}
function $d(e, t, n, r, i, a) {
	if (nf(t)) {
		if (w(t.extent)) return tf(e.props.type, t.extent, n);
		if (t.extent === "data") return a() ?? i() ?? e.domain();
		if (t.extent === "unbounded") {
			if (e.props.type === "locus") throw Error("Zoom extent \"unbounded\" is not supported for locus scales.");
			return [-Infinity, Infinity];
		}
	}
	return t && e.props.type == "locus" ? r() : i() ?? e.domain();
}
function ef(e, t, n, r, i) {
	let a = [...t], o = e.invert(r);
	switch (e.props.reverse && (i = -i), "align" in e && (o += e.align()), e.type) {
		case "linear":
		case "index":
		case "locus":
			a = l(a, i || 0);
			break;
		case "log":
			a = m(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = y(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	return Xd(e, a, o, n);
}
function tf(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && yu(t) && !bu(t) ? r : ln(e, r);
}
function nf(e) {
	return x(e);
}
//#endregion
//#region ../core/src/scales/resolutionMemberOrder.js
function rf(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function af(e) {
	return Array.from(e).sort((e, t) => rf(e).localeCompare(rf(t)));
}
//#endregion
//#region ../core/src/scales/resolutionOwnerPrecedence.js
function of(e, t) {
	return e === t || e.getDataAncestors().includes(t) ? "incoming" : t.getDataAncestors().includes(e) ? "current" : "conflict";
}
Qt("index", lu, ["continuous"]), Qt("locus", Eu, ["continuous"]), Qt("null", on, []);
var sf = class {
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n = !1;
	#r;
	#i = {
		domain: /* @__PURE__ */ new Set(),
		range: /* @__PURE__ */ new Set()
	};
	#a;
	#o;
	#s;
	#c;
	#l;
	#u = !1;
	#d = [];
	#f = 0;
	#p = [];
	#m = !1;
	#h = void 0;
	#g;
	#_;
	#v = 0;
	#y = 0;
	#b = !1;
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#g = t, this.#s = new Nd({
			getActiveMembers: () => this.#D(),
			getAllMembers: () => this.#e,
			getDataMembers: () => this.#D(this.#t),
			getViewLevelDomainSource: () => this.#G(),
			createExpression: (e) => this.#w(e),
			resolveSelectionBinding: (e, t) => this.#T(e, t),
			getViewportConstraints: (e) => this.#K(e),
			getType: () => this.type,
			getLocusExtent: (e) => this.#k(e),
			fromComplexInterval: this.fromComplexInterval.bind(this)
		}), this.#a = new jd({
			hasViewportDomain: () => this.#s.hasViewportDomain(),
			getDependencies: () => kd(this.#t, this),
			isReady: () => Ad(this.#D(this.#t), (e) => this.#K(e)),
			update: () => this.reconfigureDomain()
		}), this.#o = new Pu({
			createExpression: (e) => this.#w(e),
			onRangeChange: () => this.#j("range"),
			onDomainChange: () => this.#j("domain"),
			getGenomeStore: () => this.#O.genomeStore
		}), this.#c = new Zd({
			getScale: () => this.getScale(),
			getAnimator: () => this.#O.animator,
			renderImmediately: () => this.#O.renderImmediately(),
			getInitialDomainSnapshot: () => this.#s.initialDomainSnapshot,
			getDataZoomExtent: () => this.#s.getDataZoomExtent(),
			getResetDomain: () => this.#I(),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#k()
		});
	}
	get #x() {
		let e = this.#e.values().next().value;
		if (!e) throw Error("ScaleResolution has no members!");
		return e.view;
	}
	get #S() {
		return this.#g ?? this.#x;
	}
	get #C() {
		if (!this.#_) {
			let e;
			for (let t of this.#e) if (!Tn(t.view)) {
				if (!e) e = t.view;
				else if (t.view !== e) return this.#S;
			}
			if (e) return e;
		}
		return this.#S;
	}
	#w(e) {
		try {
			return this.#C.paramRuntime.createExpression(e);
		} catch (e) {
			let t = e instanceof Error ? e.message : "", n = /^Unknown variable "([^"]+)" in expression: /.exec(t);
			throw n ? this.#E(n[1], e) : e;
		}
	}
	#T(e, t) {
		try {
			return id(this.#C, e, t);
		} catch (t) {
			throw !(t instanceof Error) || t.message !== `Selection domain parameter "${e}" was not found.` ? t : this.#E(e, t);
		}
	}
	#E(e, t) {
		let n = this.#C === this.#S && (this.#e.size > 1 || Array.from(this.#e).some((e) => e.view !== this.#S));
		return Error(`Parameter "${e}" is not visible from the ${n ? "shared " : ""}${this.channel} scale resolution. Move the parameter to the resolution-owning view and use push: "outer" if a child must update it.`, { cause: t });
	}
	#D(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			if (!e.isConfiguredVisible()) continue;
			let r = n.channelDef?.scale?.domain;
			!e.isDataInitialized() && (r === void 0 || Td(r)) || t.add(n);
		}
		return t;
	}
	get #O() {
		return this.#S.context;
	}
	get zoomExtent() {
		return (this.#o.scale && z(this.#o.scale.type) && this.#c.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#k(e) {
		return Mu(this.#A(e));
	}
	#A(e) {
		if (this.type === "locus") return this.#o.scale ?? this.#o.getLocusGenome(e);
	}
	addEventListener(e, t) {
		this.#i[e].add(t);
	}
	removeEventListener(e, t) {
		this.#i[e].delete(t);
	}
	#j(e) {
		e === "domain" && this.#f === 0 && this.syncLinkedSelectionFromDomain();
		for (let t of this.#i[e].values()) t({
			type: e,
			scaleResolution: this
		});
	}
	#M(e) {
		this.#f += 1;
		try {
			e();
		} finally {
			--this.#f;
		}
	}
	syncLinkedSelectionFromDomain() {
		let e = this.#s.getSelectionConfiguredDomainBindingInfo();
		if (!e || !this.isZoomable()) return;
		let t = rd(e.runtime.getValue(e.param), e.param);
		if (!t) return;
		let n = this.#N(this.getScale().domain());
		if (!n) return;
		let r = this.#N(this.#s.getDefaultDomain(!0)), i = r && se(n, r) ? null : n;
		cf(t.intervals[e.encoding] ?? null, i) || e.runtime.setValue(e.param, {
			...t,
			type: "interval",
			intervals: {
				...t.intervals,
				[e.encoding]: i
			}
		});
	}
	#N(e) {
		return sd(e, this.zoomExtent);
	}
	#P() {
		return this.#s.getSelectionConfiguredDomainBindingInfo();
	}
	#F() {
		return !this.#m;
	}
	#I(e = !1, t) {
		return this.#s.getConfiguredOrDefaultDomain(e, t, { includeSelectionInitial: this.#F() });
	}
	#L() {
		let e = this.#_?.props.domain;
		if (e !== void 0 && !Td(e)) return !0;
		for (let e of this.#e) {
			let t = e.channelDef.scale?.domain;
			if (e.contributesToDomain && t !== void 0 && !Td(t)) return !0;
		}
		return !1;
	}
	#R(e) {
		let t = rd(e.runtime.getValue(e.param), e.param);
		if (!t) return null;
		let n = t.intervals[e.encoding];
		return n && n.length === 2 ? n : null;
	}
	#z(e, t) {
		t ? this.#m = !1 : e && (this.#m = !0);
	}
	#B(e) {
		let t = uf(e), { channel: n, channelDef: r } = t;
		this.#J(t);
		let i = r.type == null && this.type;
		if (n != "sample" && !r.type && !ve(n) && !i) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(r)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let a = n == "sample" ? "nominal" : r.type, o = r?.scale?.name, s = r.scale?.type ?? (a === "index" || a === "locus" ? a : void 0);
		if ($u(this.channel, a, s, `encoding.${n}.scale.type`), o) {
			if (this.name !== void 0 && o != this.name) throw Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);
			this.name = o;
		}
		if (!i) {
			if (!this.type) this.type = a;
			else if (a !== this.type && !ve(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${a}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#t.add(t), t;
	}
	#V() {
		this.#b = !1, this.#oe(), this.#le(), this.#Q(), this.#$(), this.#a.refresh(), this.#o.scale && this.#e.size > 0 && this.reconfigure();
	}
	#H() {
		this.#y > 0 ? this.#b = !0 : this.#V();
	}
	#U() {
		this.#oe(), this.#le();
		let e = this.#ie().range;
		if (Array.isArray(e)) for (let t of e) L(t) && this.#w(t.expr);
	}
	static registerInBatch(e, t) {
		let n = Array.from(e), r = !1, i = n.map((e) => ({
			resolution: e,
			members: new Set(e.#e),
			dataDomainMembers: new Set(e.#t),
			type: e.type,
			name: e.name,
			batchDepth: e.#y,
			membersDirty: e.#b
		}));
		for (let e of n) e.#y++;
		try {
			let e = t();
			for (let e of n) e.#y--;
			let i = n.filter((e) => e.#y === 0 && e.#b);
			for (let e of i) e.#U();
			r = !0;
			for (let e of i) e.#V();
			return e;
		} catch (e) {
			for (let e of i) {
				let t = e.resolution;
				t.#e = e.members, t.#t = e.dataDomainMembers, t.type = e.type, t.name = e.name, t.#y = e.batchDepth, t.#b = e.membersDirty;
			}
			if (r) try {
				for (let e of i) {
					let t = e.resolution;
					e.batchDepth === 0 ? t.#V() : t.#b = !0;
				}
			} catch (t) {
				e && typeof e == "object" && (e.rollbackError = t);
			}
			else for (let e of i) e.resolution.#oe(), e.resolution.#le();
			throw e;
		}
	}
	registerMember(e) {
		let t = this.#B(e);
		return this.#H(), () => {
			let e = this.#e.delete(t);
			return e && (this.#t.delete(t), this.#H()), e && this.#e.size === 0;
		};
	}
	attachViewLevelScaleProps(e, t) {
		if (this.#_ && this.#_.view !== e) {
			let t = of(this.#_.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level scale declarations target the same ${this.channel} scale resolution.`);
		}
		for (let e of this.#e) this.#Y(e);
		this.#_ = {
			view: e,
			props: t
		}, this.#ae(), this.#le(), this.#Q(), this.#$(), this.#a.refresh(), this.#W();
	}
	clearViewLevelScaleProps(e) {
		this.#_?.view === e && (this.#_ = void 0, this.#ae(), this.#le(), this.#Q(), this.#$(), this.#a.refresh(), this.#W());
	}
	#W() {
		this.#o.scale && (this.#o.resetScale(), this.initializeScale(), this.#j("domain"));
	}
	getViewLevelScaleProps() {
		return this.#_;
	}
	#G() {
		let e = this.#_;
		if (e) return {
			channel: this.channel,
			type: this.type,
			domain: e.props.domain
		};
	}
	#K(e) {
		return Od(e, this, this.channel, (e) => this.#q(e, /* @__PURE__ */ new Set()));
	}
	#q(e, t) {
		if (e === this) return !0;
		if (t.has(e) || !e.#s.hasViewportDomain()) return !1;
		t.add(e);
		for (let n of e.#t) for (let r of $e) {
			let i = n.view.getScaleResolution(r);
			if (i && i !== e && this.#q(i, t)) return !0;
		}
		return !1;
	}
	#J(e) {
		this.#_ && this.#Y(e);
	}
	#Y(e) {
		if (e.channelDef.scale !== void 0) throw Error(`Cannot mix view-level scales.${this.channel} with encoding.${e.channel}.scale in the same scale resolution.`);
	}
	dispose() {
		this.#X(), this.#Z(), this.#a.clear(), this.#i.domain.clear(), this.#i.range.clear(), this.#o.dispose();
	}
	#X() {
		for (let e of this.#d) e();
		this.#d = [], this.#h = void 0;
	}
	#Z() {
		for (let e of this.#p) e();
		this.#p = [];
	}
	#Q() {
		if (this.#X(), this.#e.size === 0) return;
		let e = this.#P();
		e && (this.#h = this.#R(e), this.#d.push(e.runtime.subscribe(e.param, () => {
			let t = this.#h, n = this.#R(e);
			this.#z(t, n), this.#h = n, this.#le(), this.reconfigureDomain();
		})));
	}
	#$() {
		if (this.#Z(), this.#e.size === 0) return;
		let e = () => {
			this.#le(), this.reconfigureDomain();
		};
		for (let t of this.#e) {
			if (!t.contributesToDomain) continue;
			let n = t.channelDef.scale?.domain, r = Zu(n);
			if (r.length !== 0) for (let t of r) {
				let n = this.#w(t.expr).subscribe(e);
				this.#p.push(n);
			}
		}
		let t = this.#_?.props.domain, n = Zu(t);
		for (let t of n) {
			let n = this.#w(t.expr).subscribe(e);
			this.#p.push(n);
		}
	}
	#ee() {
		for (let e of this.#e) if (e.view.hasRendered()) return !0;
		return !1;
	}
	#te() {
		if (this.#n) return !1;
		for (let e of this.#t) {
			let t = e.view;
			if (t.isConfiguredVisible()) {
				if (!t.isDataInitialized()) {
					let t = e.channelDef.scale?.domain;
					if (t === void 0 || Td(t)) return !1;
					continue;
				}
				if (!this.#ne(e)) return !1;
			}
		}
		return this.#n = !0, !0;
	}
	#ne(e) {
		if (!e.view.mark.encoders?.[e.channel]) return !1;
		let t = lf(e).filter((e) => !e.constant && !e.channelDef.domainInert);
		if (t.length === 0) return !0;
		let n = e.view.getCollector();
		return !n || !n.completed ? !1 : t.some((e) => n.getDomain(He(e, this.type), this.type, e).length > 0);
	}
	#re() {
		if (this.#n) return;
		let e = this.getScale(), t = this.#s.hasSelectionConfiguredDomain() ? this.#s.getDefaultDomain(!0) : void 0;
		this.#n = !0, this.#s.captureInitialDomain(e, this.isDomainInitialized(), t);
	}
	registerCollectorSubscriptions(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let e of t) e.channelDef.domainInert || n.add(He(e, this.type));
		if (n.size === 0) return () => void 0;
		let r = () => {
			this.#s.hasViewportDomain() && this.#n ? this.#a.schedule(!0) : this.reconfigureDomain();
		}, i = [];
		for (let t of n) i.push(e.subscribeDomainChanges(t, r));
		return () => {
			for (let e of i) e();
		};
	}
	isDomainDefinedExplicitly() {
		return this.#L();
	}
	isDomainInitialized() {
		let e = this.#o.scale;
		if (!e) return !1;
		let t = e.domain();
		return z(e.type) ? t.length > 2 || t.length == 2 && (t[0] !== 0 || t[1] !== 0) : t.length > 0;
	}
	#ie() {
		return Yn(this, "mergedScaleProps", () => {
			let e = td({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#se(),
				viewLevelScaleProps: this.#_,
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#S.getConfigScopes(),
				getOwnerScaleResolution: (e) => this.#S.getScaleResolution(e)
			});
			return this.#ue(e), this.#de(e), e;
		});
	}
	#ae() {
		Jn(this, "mergedScaleProps");
	}
	#oe() {
		this.#r = void 0;
	}
	#se() {
		return this.#r ||= af(this.#e), this.#r;
	}
	getOrderedMembers() {
		return this.#se().slice();
	}
	getDebugState() {
		let e = this.#o.scale, t = e && typeof e.domain == "function", n = e && typeof e.range == "function";
		return {
			kind: "scale",
			channel: this.channel,
			hostView: this.#S,
			name: this.name,
			type: this.type,
			resolvedScaleType: this.getResolvedScaleType(),
			domain: t ? this.getDomain() : void 0,
			complexDomain: t ? this.getComplexDomain() : void 0,
			range: n ? e.range() : void 0,
			zoomable: this.isZoomable(),
			zoomed: this.isZoomable() ? this.isZoomed() : !1,
			members: this.#se().map((e) => this.#ce(e)),
			activeMemberCount: this.#D().size,
			dataDomainMemberCount: this.#t.size,
			viewLevelScaleProps: this.#_ ? {
				view: this.#_.view,
				props: structuredClone(this.#_.props)
			} : void 0
		};
	}
	#ce(e) {
		return {
			view: e.view,
			channel: e.channel,
			channelDef: structuredClone(e.channelDef),
			contributesToDomain: e.contributesToDomain,
			active: this.#D().has(e)
		};
	}
	#le() {
		this.#s.invalidateConfiguredDomain(), this.#ae();
	}
	#ue(e) {
		let t = this.#P();
		if (!t || e === null || e.type === "null") return;
		let n = z(e.type) && !en(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	#de(e) {
		if (!(!this.#s.hasViewportDomain() || e === null || e.type === "null")) {
			if (!z(e.type) || en(e.type)) throw Error(`Viewport-derived domains require a continuous ${this.channel} scale.`);
			if ((this.channel === "x" || this.channel === "y") && e.zoom) throw Error(`Viewport-derived domains cannot target a zoomable ${this.channel} scale.`);
		}
	}
	getAssemblyRequirement() {
		if (this.type !== "locus") return {
			assembly: void 0,
			needsDefaultAssembly: !1
		};
		let e = this.#_ ? [this.#_.props] : this.#se().map((e) => e.channelDef.scale).filter((e) => e !== void 0);
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
		let e = this.#ie();
		if (!(e === null || e.type === "null")) return e.type;
	}
	#fe(e = !1) {
		let t = this.#ie();
		if (t === null || t.type == "null") return { type: "null" };
		let n = { ...t };
		this.#v += 1;
		let r;
		try {
			r = this.#I(e, n.type === "locus" ? n.assembly : void 0);
		} finally {
			--this.#v;
		}
		if (en(n.type)) {
			let t = this.isDomainDefinedExplicitly(), i = this.#pe(t);
			if (r != null) {
				if (t && i.domain().length > 0 && !se(i.domain(), r)) return this.#l = void 0, this.#fe(e);
				i.addAll(r);
				let a = new Set(r), o = i.domain().filter((e) => a.has(e));
				n.domain = o.length > 0 ? o : new dd();
			} else {
				let e = i.domain();
				n.domain = e.length > 0 ? e : new dd();
			}
			n.domainIndexer = i;
		} else r && r.length > 0 && (n.domain = r);
		return !n.domain && n.domainMid !== void 0 && (n.domain = [n.domainMin ?? 0, n.domainMax ?? 1]), n;
	}
	#pe(e) {
		return (!this.#l || this.#u !== e) && (this.#l = un(), this.#u = e), this.#l;
	}
	reconfigure() {
		this.#M(() => {
			this.#le();
			let e = this.#me(!0);
			e && (this.#he(e, (e, t) => this.#o.reconfigureScale(t)), this.#ge(e));
		});
	}
	reconfigureDomain() {
		this.#M(() => {
			let e = this.#me(!0, !0);
			if (!e) return;
			let { domainConfig: t, targetDomain: n } = e, r = n != null && se(n, e.scale.domain());
			n != null && !r && this.#he(e, (e) => {
				e.domain(n), t.applyOrdinalUnknown && e.unknown(t.ordinalUnknown);
			}), this.#ge(e), this.syncLinkedSelectionFromDomain();
		});
	}
	#me(e, t = !1) {
		let n = this.#o.scale;
		if (!n || n.type == "null") return;
		let r = {
			scale: n,
			props: this.#fe(e),
			previousDomain: n.domain(),
			domainWasInitialized: this.isDomainInitialized(),
			hasSelectionConfiguredDomain: this.#s.hasSelectionConfiguredDomain()
		};
		if (t) {
			let e = fs(n, r.props);
			return {
				...r,
				domainConfig: e,
				targetDomain: e.domain
			};
		}
		return r;
	}
	#he(e, t) {
		this.#o.withDomainNotificationsSuppressed(() => {
			t(e.scale, e.props);
		});
	}
	#ge(e) {
		let { scale: t, previousDomain: n, domainWasInitialized: r, hasSelectionConfiguredDomain: i } = e, a = i ? this.#s.getDefaultDomain(!0) : void 0, o = this.#te();
		if (this.#n && this.#s.captureInitialDomain(t, r, a)) {
			this.#j("domain");
			return;
		}
		if (!this.#n || o) {
			(!r || !se(n, t.domain())) && this.#j("domain");
			return;
		}
		if (t.props.domainTransition === !1) {
			this.#j("domain");
			return;
		}
		let s = t.domain(), c = this.#c.getDomainChangeAction(n, s);
		c === "restore" ? i ? this.#j("domain") : this.#o.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}) : c === "animate" ? i ? this.#j("domain") : this.#ee() ? (this.#o.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}), this.zoomTo(s, 500)) : this.#j("domain") : c === "notify" && this.#j("domain");
	}
	get scale() {
		if (this.#o.scale) return this.#o.scale;
		throw Error("ScaleResolution.scale accessed before initialization. Call initializeScale().");
	}
	getScale() {
		if (this.#v > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own scale while its domain is being resolved.`);
		return this.#o.scale ?? this.initializeScale();
	}
	initializeScale() {
		if (this.#o.scale) return this.#o.scale;
		let e = this.#fe();
		return this.#o.createScale(e);
	}
	getDomain() {
		if (this.#v > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.getScale().domain();
	}
	getDataDomain() {
		return this.#s.getDataDomain();
	}
	getComplexDomain() {
		return ju(this.#A(), tn(this.type, this.getDomain()));
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#P();
		if (!e) return;
		let t = this.#S.getLayoutAncestors().at(-1), n = t ? ad(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
		return {
			param: e.param,
			encoding: e.encoding,
			persist: n
		};
	}
	isZoomed() {
		return this.#c.isZoomed();
	}
	isZoomable() {
		let e = this.#ie();
		return e === null || e.type === "null" ? !1 : z(e.type) && !en(e.type) && !!e.zoom;
	}
	hasConfiguredZoomExtent() {
		let e = this.#ie().zoom;
		return typeof e == "object" && e.extent !== void 0 && e.extent !== "unbounded";
	}
	zoom(e, t, n) {
		return this.#c.isZoomingSupported() && this.#re(), this.#c.zoom(e, t, n);
	}
	async zoomTo(e, t = !1) {
		return this.#c.isZoomingSupported() && this.#re(), this.#c.zoomTo(e, t);
	}
	resetZoom() {
		return this.#c.resetZoom();
	}
	getZoomLevel() {
		return this.#c.getZoomLevel();
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
		return Ou(this.#A(), e);
	}
	fromComplex(e) {
		return ku(this.#A(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? Au(this.#A(this.getAssemblyRequirement().assembly), e) : e;
	}
};
function cf(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.length === t.length && se(e, t);
}
function lf(e) {
	let t = e.view.mark.encoders?.[e.channel];
	return t ? u(t).filter(Ie) : [];
}
function uf(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = mn(e.view.getBaseUrl(), n.url);
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
//#endregion
//#region ../core/src/utils/coalesce.js
function df(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region ../core/src/scales/axisResolution.js
var ff = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e) {
		this.channel = e;
	}
	get scaleResolution() {
		return this.#e.values().next().value?.view.getScaleResolution(this.channel);
	}
	#n(e) {
		let { view: t } = e, n = t.getScaleResolution(this.channel);
		if (!n) throw Error("Cannot find a scale resolution!");
		if (this.scaleResolution && n !== this.scaleResolution) throw Error(`Shared axes must have a shared scale! Channel: ${this.channel}, existing views: [${Array.from(this.#e).map((e) => e.view.getPathString()).join(", ")}], new view: ${t.getPathString()}.`);
		this.#e.add(e), Jn(this, "axisProps");
	}
	registerMember(e) {
		return this.#a(e), this.#n(e), () => this.removeMember(e) && this.#e.size === 0;
	}
	removeMember(e) {
		let t = this.#e.delete(e);
		return t && Jn(this, "axisProps"), t;
	}
	hasVisibleNonChromeMember() {
		for (let e of this.#r()) if (e.view.isVisible()) return !0;
		return !1;
	}
	getDebugState() {
		return {
			kind: "axis",
			channel: this.channel,
			hostView: this.scaleResolution?.getDebugState().hostView ?? this.#t?.view ?? this.#e.values().next().value?.view,
			scaleResolution: this.scaleResolution,
			title: this.getTitle(),
			axisProps: this.getAxisProps(),
			hasVisibleNonChromeMember: this.hasVisibleNonChromeMember(),
			members: af(this.#e).map((e) => ({
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
		return Yn(this, "axisProps", () => {
			let e;
			if (this.#t) e = [this.#t.props];
			else {
				let t = this.#r();
				if (!t.length) return null;
				e = t.map((e) => {
					let t = e.view.mark.encoding[e.channel];
					return "axis" in t && t.axis;
				});
			}
			return e.length > 0 && e.some((e) => e === null) ? null : Lu(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		if (this.#t?.props.title !== void 0) return this.#t.props.title;
		let e = this.#r().map((e) => {
			let t = ne(e.view, e.channel);
			if (!I(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: df("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: df(qe(t) ? t.field : void 0, Re(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (ve(t.member.channel) && !t.explicitTitle) {
				let n = h(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), r = new Set(n.map((e) => df(e.explicitTitle, e.implicitTitle)).filter(C));
		return r.size ? [...r].join(", ") : null;
	}
	attachViewLevelAxisProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = of(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level axis declarations target the same ${this.channel} axis resolution.`);
		}
		for (let e of this.#r()) {
			let t = e.view.mark.encoding[e.channel];
			if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
		}
		this.#t = {
			view: e,
			props: t
		}, Jn(this, "axisProps");
	}
	clearViewLevelAxisProps(e) {
		this.#t?.view === e && (this.#t = void 0, Jn(this, "axisProps"));
	}
	getViewLevelAxisProps() {
		return this.#t;
	}
	#r() {
		return af(this.#e).filter((e) => !this.#i(e));
	}
	#i(e) {
		return e.view.getLayoutAncestors().some(Wn);
	}
	#a(e) {
		if (!this.#t || this.#i(e)) return;
		let t = e.view.mark.encoding[e.channel];
		if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
	}
};
//#endregion
//#region ../core/src/config/configLayers.js
function pf() {
	let e = [];
	return {
		appendConfig(t, n) {
			mf(e, t, n);
		},
		appendStyle(t, n) {
			hf(e, t, n);
		},
		merge() {
			return B(e.map((e) => e.config));
		}
	};
}
function mf(e, t, n) {
	n && (hf(e, t, Object.hasOwn(n, "style") ? n.style : void 0), e.push({
		kind: "config",
		config: n
	}));
}
function hf(e, t, n) {
	if (n === void 0) return;
	if (n === null) {
		gf(e);
		return;
	}
	let r = El(t, n);
	e.push({
		kind: "style",
		config: r
	});
}
function gf(e) {
	for (let t = e.length - 1; t >= 0; t--) e[t].kind == "style" && e.splice(t, 1);
}
//#endregion
//#region ../core/src/config/legendConfig.js
function _f(e, t) {
	let n = B(e.map((e) => e.legend?.layout)), r = n[t], i = [
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
function vf(e, t, n = {}) {
	let r = e[0], i = e.slice(1), a = pf();
	yf(a, e, r, n.track);
	for (let [t, r] of i.entries()) {
		let i = e.slice(0, t + 2);
		bf(a, i, r, n.track), xf(a, i, r.legend);
	}
	xf(a, e, t);
	let o = a.merge();
	return delete o.layout, o;
}
function yf(e, t, n, r) {
	let i = t.slice(0, 1);
	xf(e, i, n?.legend), bf(e, i, n, r);
}
function bf(e, t, n, r) {
	r && xf(e, t, n?.legendTrack);
}
function xf(e, t, n) {
	e.appendConfig(t, n);
}
//#endregion
//#region ../core/src/scales/legendResolution.js
var Sf = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"shape",
	"size"
]), Cf = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke"
]), wf = class {
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
		for (let n of af(this.#e)) {
			let r = this.#n(n);
			r && !e.has(r.scaleResolution) && (e.add(r.scaleResolution), t.push(r));
		}
		return t;
	}
	#n(e) {
		let { channel: t, view: n } = e;
		if (Mf(t, n)) return;
		let r = kf(t, n);
		if (!r || I(r)) return;
		let i = "legend" in r ? r.legend : void 0;
		if (!this.#t && i === null || "scale" in r && r.scale === null) return;
		let a = this.#t?.props ?? i, o = a === void 0 ? void 0 : {
			disable: !1,
			...a
		}, s = n.getScaleResolution(t);
		if (!s) return;
		let c = vf(n.getConfigScopes(), o, { track: Df(n) });
		if (c.disable === !0) return;
		let l = Of(t, r);
		if (!l) return;
		let u = "title" in r ? r.title : void 0, d = c.title === void 0 ? u === void 0 ? qe(r) ? r.field : void 0 : u : c.title, f = "format" in r ? r.format : void 0, p = l == "symbol" ? Nf(t, n) : void 0, m = l == "symbol" ? Ef(t, n) : void 0;
		return {
			view: n,
			channel: t,
			field: qe(r) ? r.field : void 0,
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
		for (let e of this.#e) if (e.view.isVisible() && !e.view.getLayoutAncestors().some(Wn)) return !0;
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
			members: af(this.#e).map((e) => ({
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
			let t = of(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level legend declarations target the same ${this.channel} legend resolution.`);
		}
		let n = Array.from(this.#e).find((e) => Tf(e));
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
		if (this.#t && Tf(e)) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${e.channel}.legend in the same legend resolution.`);
	}
};
function Tf(e) {
	let t = kf(e.channel, e.view);
	return !!(t && "legend" in t && t.legend !== void 0);
}
function Ef(e, t) {
	let n = t.getMarkType();
	return e == "size" && (n == "rule" || n == "link") ? "stroke" : "point";
}
function Df(e) {
	let t = kf("x", e), n = e.getScaleResolution("x")?.getResolvedScaleType();
	return t?.type == "index" || t?.type == "locus" || n == "index" || n == "locus";
}
function Of(e, t) {
	if ([
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"size"
	].includes(e) && t.type == "quantitative" || (t.type === "nominal" || t.type === "ordinal") && Sf.has(e)) return "symbol";
	if (t.type === "quantitative" && Cf.has(e)) return "gradient";
}
function kf(e, t) {
	return f(t.getEncoding()[e]);
}
function Af(e, t) {
	let n = kf(e, t);
	return !!(n && "legend" in n && n.legend === null);
}
function jf(e, t, n) {
	let r = kf(e, n), i = kf(t, n), a = n.getScaleResolution(e), o = n.getScaleResolution(t);
	return qe(r) && qe(i) && r.field === i.field && a && o && se(a.getDomain(), o.getDomain());
}
function Mf(e, t) {
	if (e !== "shape" || !qe(kf(e, t))) return !1;
	for (let n of [
		"color",
		"fill",
		"stroke"
	]) if (jf(n, e, t) && !Af(n, t)) return !0;
	return !1;
}
function Nf(t, n) {
	if (!e(t)) return {};
	let r = kf(t, n), i = kf("shape", n), a = n.getScaleResolution("shape");
	return qe(r) && qe(i) && a && jf(t, "shape", n) && !Af("shape", n) ? { shape: a.name ?? "shape" } : {};
}
//#endregion
//#region ../core/src/view/resolutionPlanner.js
var Pf = (e, t, n) => {
	let r = e;
	for (; (Ff(r, t, n) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes(Ff(r.dataParent, t, n))) && Ff(r, t, n) != "excluded";) r = r.dataParent;
	return r;
};
function Ff(e, t, n) {
	let r = e.getConfiguredOrDefaultResolution(n, t);
	switch (r) {
		case "independent":
		case "shared":
		case "excluded":
		case "forced": return r;
		case "collected":
			if (t == "legend") return Ff(e, "scale", n);
			throw Error(`Resolution behavior "collected" is only supported for legends, not ${t}s.`);
		default: throw Error(`Unknown ${t} resolution behavior: ${r}`);
	}
}
var If = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let e = new sf(n, t);
		t.resolutions.scale[n] = e;
	}
	return t.resolutions.scale[n];
}, Lf = (e, t, n, r) => {
	let i = f(r);
	if (!i) return;
	let a = h(i.resolutionChannel ?? n);
	if (ce(a) && !(t == "axis" && !Be(a)) && !(t == "legend" && (Be(a) || pe(a))) && !(t == "legend" && Ff(e, t, a) == "excluded" && Tn(e))) return {
		view: Pf(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, Rf = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) !r || Array.isArray(r) || t(n, r);
}, zf = (e) => {
	let t = [];
	return Rf(e, (n, r) => {
		let i = Lf(e, "axis", n, r);
		i && Be(i.channel) && t.push(i);
	}), t;
}, Bf = (e) => {
	let t = [];
	for (let [n, r] of Object.entries(e.getEncoding())) {
		if (!r || Array.isArray(r)) continue;
		let i = Lf(e, "legend", n, r);
		i && !Be(i.channel) && t.push(i);
	}
	return t;
}, Vf = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Rf(e, (n, r) => {
		let i = Lf(e, "scale", n, r);
		if (!i) return;
		let a = If(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
}, Hf = (e, t) => {
	for (let { view: n, channel: r, channelDef: i, targetChannel: a } of t) {
		if (!Be(r) || !Ye(a)) continue;
		n.resolutions.axis[a] || (n.resolutions.axis[a] = new ff(a));
		let t = n.resolutions.axis[a], o = t.registerMember({
			view: e,
			channel: r,
			channelDef: i
		});
		e.registerDisposer(() => {
			o() && n.resolutions.axis[a] === t && delete n.resolutions.axis[a];
		});
	}
}, Uf = (e, t) => {
	for (let { view: n, channel: r, targetChannel: i } of t) {
		if (Be(r)) continue;
		let t = i;
		n.resolutions.legend[t] || (n.resolutions.legend[t] = new wf(t));
		let a = n.resolutions.legend[t], o = a.registerMember({
			view: e,
			channel: r
		});
		e.registerDisposer(() => {
			o() && n.resolutions.legend[t] === a && delete n.resolutions.legend[t];
		});
	}
}, Wf = (e, t) => {
	sf.registerInBatch(t.keys(), () => {
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
}, Gf = (e, t) => {
	if (!t) {
		Gf(e, "scale"), Gf(e, "axis");
		return;
	}
	t == "axis" ? Hf(e, zf(e)) : t == "legend" ? Uf(e, Bf(e)) : Wf(e, Vf(e));
}, Kf = {
	point: ql,
	rect: Fl,
	arrow: Ll,
	rule: Xl,
	tick: Xl,
	link: nu,
	text: su
}, J = class extends Gn {
	#e;
	#t = !1;
	#n = null;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		let o = Kf[this.getMarkType()];
		if (o) this.mark = new o(this);
		else throw Error(`No such mark: ${this.getMarkType()}`);
		this.#e = this.paramRuntime.allocateSetter("zoomLevel", 1), this.resolve();
		for (let e of ["x", "y"]) {
			let t = this.getScaleResolution(e);
			if (t) {
				let e = () => {
					this.#e(Math.sqrt(this.getZoomLevel()));
				};
				t.addEventListener("domain", e), this.registerDisposer(() => t.removeEventListener("domain", e));
			}
		}
		this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
			for (let e of $e) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
		})), this.needsAxes = {
			x: !0,
			y: !0
		}, this.#r();
	}
	#r() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t)) continue;
			let n = et(t.select), r = n.on, i = n.clear;
			if (a(n)) {
				let t = 0, a = (t) => {
					this.paramRuntime.setValue(e, t);
				}, o = () => {
					let e = this.context.getCurrentHover();
					return e?.mark?.unitView === this ? e.datum : null;
				}, s = T(r), c = () => {
					t = 0;
					let e = n.toggle ? me() : rt(null);
					a(e);
				}, l = (r) => {
					if (!s(r.proxiedMouseEvent)) return;
					let i = o(), c = i ? i[de] : 0, l;
					n.toggle ? r.mouseEvent.shiftKey ? i && (l = b(this.paramRuntime.getValue(e), { toggle: [i] })) : l = me(i ? [i] : null) : c != t && (t = c, l = rt(i)), l !== void 0 && a(l);
				}, u = ["mouseover", "pointerover"].includes(r.type);
				this.addInteractionListener(u ? "mousemove" : r.type, l), u && this.addInteractionListener("mouseleave", c);
				let d = u && i?.type === "mouseleave";
				if (i && !d) {
					let e = T(i);
					this.addInteractionListener(i.type, (t) => {
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
		Gf(this, e);
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? _(t[e]) : void 0;
	}
	getSearchAccessors() {
		if (!this.#n) {
			let e = er(this.getEncoding()) ?? [];
			this.#n = e.map((e) => F(e));
		}
		return this.#n;
	}
	getFacetAccessor(e) {
		return this.getDataAccessor("sample") || super.getFacetAccessor(this);
	}
	getCollector() {
		return this.flowHandle?.collector;
	}
	registerDomainSubscriptions() {
		if (this.#t || this.isDomainInert()) return;
		let e = this.getCollector();
		if (!e) return;
		let t = this.mark.encoders;
		if (!t) throw Error("Encoders are not initialized!");
		this.#t = !0;
		let n = he(e), r = /* @__PURE__ */ new Map();
		for (let e of Object.values(t)) {
			if (!e) continue;
			let t = u(e);
			if (t.length !== 0) for (let e of t) {
				if (!Ie(e)) continue;
				let t = this.getScaleResolution(e.scaleChannel);
				if (!t) throw Error("Missing scale resolution for channel: " + e.scaleChannel);
				if (e.channelDef.domainInert || qf(e, t, n)) continue;
				let i = r.get(t);
				i || (i = /* @__PURE__ */ new Set(), r.set(t, i)), i.add(e);
			}
		}
		for (let [t, n] of r) {
			if (n.size === 0) continue;
			let r = t.registerCollectorSubscriptions(e, n);
			this.registerDisposer(r);
		}
	}
	getZoomLevel() {
		return $e.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
};
function qf(e, t, n) {
	return !t.isDomainDefinedExplicitly() && n.has(h(e.scaleChannel));
}
//#endregion
//#region ../core/src/utils/fetchUtils.js
var Jf = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function Yf(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new Jf("network", String(e));
	}
	if (!n.ok) throw new Jf("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new Jf("json", String(e));
	}
}
//#endregion
//#region ../core/src/view/viewUtils.js
function Xf(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function Zf(e) {
	for (let t of $e) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function Qf(e) {
	let t = [];
	return e.visit((e) => {
		if (e instanceof J) {
			let n = e.getEncoding(), r = (n, i) => {
				if (!(!i || typeof i != "object" || Array.isArray(i)) && (qe(i) && "type" in i ? t.push({
					view: e,
					channel: n,
					field: i.field,
					type: i.type
				}) : qe(i) && n === "semanticScore" && t.push({
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
			return kn;
		}
	}), t;
}
async function $f(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = En(t, r.url), a;
	try {
		a = await Yf(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = En(hn(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function ep(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region ../core/src/utils/iterateNestedMaps.js
function* tp(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of tp(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region ../core/src/utils/radixSort.js
var np = 2147483647, rp = ap([np]);
function ip(e) {
	for (let t = 1; t < e.length; t++) if (e[t] < e[t - 1]) return !1;
	return !0;
}
function ap(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) e[n] > t && (t = e[n]);
	return Math.floor(Math.log2(t) / 4) + 1;
}
function op(e) {
	let t = ap(e), n = Array.from({ length: e.length }, (e, t) => t);
	if (ip(e)) return n;
	let r = Array(e.length), i = Array(16);
	for (let a = 0; a < t; a++) {
		i.fill(0);
		let t = a * 4, o = 16 ** a, s = (r) => {
			let i = e[n[r]];
			return a >= rp ? i > np ? Math.floor(i / o) % 16 : 0 : i >> t & 15;
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
var sp = "|", cp = "\\", lp = class {
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
				n > 0 && (e += sp);
				let r = i[n], a = up(t[n], r);
				e += fp(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = up(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => F(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += sp);
				let r = e[t], i = up(n[t](o), r);
				s += fp(i);
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
				let n = e[t], s = up(a(n), o);
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
function up(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function dp(e) {
	if (!(e.indexOf(cp) !== -1 || e.indexOf(sp) !== -1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === cp || r === sp) && (t += cp), t += r;
	}
	return t;
}
function fp(e) {
	return typeof e == "string" ? dp(e) : String(e);
}
//#endregion
//#region ../core/src/data/viewportDomain.js
var pp = 256, mp = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		this.sortField = v(e.sort?.field)[0], this.getBatches = t, this.isCompleted = n;
	}
	reset() {
		for (let e of this.#e.values()) e.batches = void 0;
	}
	complete() {
		for (let e of this.#e.values()) e.batches = gp(this.getBatches(), e);
	}
	getDomain(e, t, n, r) {
		let i = r.find((e) => e.channel === "x");
		if (!i || !this.#t(i)) return xp(this.getBatches(), t, n, r);
		let a = hp(i), o = this.#e.get(a);
		return o || (o = {
			accessor: i.accessor,
			accessor2: i.accessor2,
			targets: /* @__PURE__ */ new Map(),
			batches: void 0
		}, this.#e.set(a, o)), r.length === 1 && o.targets.get(e) !== n && (o.targets.set(e, n), o.batches && yp(o.batches, e, n)), !o.batches && this.isCompleted() && (o.batches = gp(this.getBatches(), o)), o.batches ? bp(o, e, t, n, r) : md(t);
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
function hp(e) {
	return e.accessor.sourceKey + "|" + (e.accessor2?.sourceKey ?? "point");
}
function gp(e, t) {
	let n = Array.from(e, (e) => _p(e, t));
	for (let [e, r] of t.targets) yp(n, e, r);
	return n;
}
function _p(e, t) {
	let n = Math.ceil(e.length / pp), r = vp(n, Infinity), i = vp(n, -Infinity), a = vp(n, Infinity), o = vp(n, -Infinity), s = new Uint8Array(n);
	for (let n = 0; n < e.length; n++) {
		let c = Math.floor(n / pp), l = Tp(e[n], t.accessor, t.accessor2);
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
function vp(e, t) {
	let n = new Float64Array(e);
	return n.fill(t), n;
}
function yp(e, t, n) {
	for (let r of e) {
		let e = Math.ceil(r.data.length / pp), i = {
			min: vp(e, Infinity),
			max: vp(e, -Infinity),
			valid: new Uint8Array(e),
			uncertain: new Uint8Array(e)
		};
		r.targets.set(t, i);
		for (let e = 0; e < r.data.length; e++) {
			let t = n(r.data[e]);
			if (t == null || Number.isNaN(t)) continue;
			let a = Math.floor(e / pp), o = +t;
			Number.isNaN(o) ? i.uncertain[a] = 1 : (i.valid[a] = 1, i.min[a] = Math.min(i.min[a], o), i.max[a] = Math.max(i.max[a], o));
		}
	}
}
function bp(e, t, n, r, i) {
	if (!e.batches) throw Error("Viewport index has not been built.");
	let a = i.map(Cp), o = a.find((e) => e.channel === "x"), s = md(n);
	for (let n of e.batches) {
		let i = Math.ceil(n.data.length / pp);
		for (let c = 0; c < i; c++) {
			let i = n.uncertain[c] === 1;
			if (!i && Ep(n, c, o.domain, !!e.accessor2)) continue;
			if (a.length === 1 && !i && Dp(n, c, o.domain, !!e.accessor2)) {
				let e = n.targets.get(t);
				if (e && e.uncertain[c] === 0) {
					e.valid[c] === 1 && (s.extend(e.min[c]), s.extend(e.max[c]));
					continue;
				}
			}
			let l = c * pp;
			Sp(n.data, l, Math.min(l + pp, n.data.length), s, r, a);
		}
	}
	return s;
}
function xp(e, t, n, r) {
	let i = md(t), a = r.map(Cp);
	for (let t of e) Sp(t, 0, t.length, i, n, a);
	return i;
}
function Sp(e, t, n, r, i, a) {
	for (let o = t; o < n; o++) {
		let t = e[o];
		a.every((e) => wp(t, e)) && r.extend(i(t));
	}
}
function Cp(e) {
	let t = Math.min(e.domain[0], e.domain[1]), n = Math.max(e.domain[0], e.domain[1]);
	return {
		...e,
		domain: [t, n]
	};
}
function wp(e, t) {
	let n = Tp(e, t.accessor, t.accessor2);
	if (!n) return !1;
	let [r, i] = t.domain;
	return n.start === n.end ? n.start >= r && n.start <= i : n.start < i && n.end > r;
}
function Tp(e, t, n) {
	let r = t(e), i = n ? n(e) : r;
	if (r == null || i == null) return;
	let a = +r, o = +i;
	if (!(Number.isNaN(a) || Number.isNaN(o))) return {
		start: Math.min(a, o),
		end: Math.max(a, o)
	};
}
function Ep(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxEnd[t] <= i || e.minStart[t] >= a : e.maxStart[t] < i || e.minStart[t] > a;
}
function Dp(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxStart[t] < a && e.minEnd[t] > i : e.minStart[t] >= i && e.maxStart[t] <= a;
}
//#endregion
//#region ../core/src/data/collector.js
var Op = class extends ot {
	#e = [];
	#t = F(de);
	#n = [];
	#r = new lp();
	#i;
	#a;
	#o = new kp();
	#s;
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e) {
		super(), this.params = e ?? { type: "collect" }, this.#s = new mp(this.params, () => this.facetBatches.values(), () => this.completed), this.observers = /* @__PURE__ */ new Set(), this.dataRevision = 0, this.facetBatches = new Ft([], JSON.stringify), this.#a = Np(this.params?.sort), this.#c();
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
		this.#r.invalidate(), it(e) && (this.#e = [], this.facetBatches.set(v(e.facetId), this.#e));
	}
	complete() {
		if (this.#e = [], this.params.groupby?.length) {
			let e = this.params.groupby.map((e) => F(e)), t = jp(this.facetBatches.size > 1 ? Ap(this.facetBatches.values()) : this.facetBatches.get(void 0), e);
			this.facetBatches.clear();
			for (let [e, n] of tp(t)) this.facetBatches.set(e, n);
		}
		if (this.#a) for (let e of this.facetBatches.values()) e.sort(this.#a);
		this.#s.complete(), this.#p(), this.#l(), super.complete(), this.dataRevision++, this.#f(), this.#u();
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
	repropagate() {
		for (let e of this.children) e.reset();
		this.#l();
		for (let e of this.children) e.complete();
		this.#f(), this.#u();
	}
	#u() {
		for (let e of this.observers) e(this);
	}
	getDomain(e, t, n) {
		return this.#o.getDomain(e, () => {
			let e = md(t);
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
		switch (this.#d(), this.facetBatches.size) {
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
		this.#d();
		for (let t of this.facetBatches.values()) for (let n = 0; n < t.length; n++) e(t[n]);
	}
	getItemCount() {
		let e = 0;
		for (let t of this.facetBatches.values()) e += t.length;
		return e;
	}
	#d() {
		if (!this.completed) throw Error("Data propagation is not completed! No data are available.");
	}
	#f() {
		this.#o.hasCachedDomains() && this.#o.clear(), this.#o.notify();
	}
	#p() {
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
		this.#n = op(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#n.length) return;
		let t = It((e) => e.start).right, n = this.#t, r = It((e) => n(i(e))).left, i = (e) => {
			let n = t(this.#i, e), r = this.#i[n - 1];
			if (!(!r || e >= r.stop)) return this.facetBatches.get(r.facetId)[e - r.start];
		}, a = r(this.#n, e);
		if (a >= 0) {
			let t = i(this.#n[a]);
			if (t && n(t) === e) return t;
		}
	}
	findDatumByKey(e, t) {
		return this.#d(), this.#r.findDatum(e, t, this.facetBatches.values());
	}
}, kp = class {
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
function Ap(e) {
	return { [Symbol.iterator]: function* () {
		for (let t of e) yield* t;
	} };
}
function jp(e, t) {
	return t.length > 1 ? cn(e, ...t) : Mp(e, t[0]);
}
function Mp(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = t(r), i = n.get(e);
		i || (i = [], n.set(e, i)), i.push(r);
	}
	return n;
}
function Np(e) {
	if (e?.field) {
		let t = v(e.field);
		if (t.length == 1 && !t[0].includes(".")) {
			let n = v(e.order)[0] ?? "ascending", r = JSON.stringify(t[0]);
			return Function("a", "b", `return ${n === "ascending" ? `a[${r}] - b[${r}]` : `b[${r}] - a[${r}]`};`);
		}
		return s(e.field, e.order);
	}
}
//#endregion
//#region ../core/src/utils/cloner.js
function Pp(e, t = {}) {
	return Ip(Lp(e, t.copyFields ? new Set(t.copyFields) : void 0));
}
function Fp(e = {}) {
	let t = e.copyFields ? new Set(e.copyFields) : void 0, n, r = ((e) => (n ||= Ip(Lp(e, t)), n(e)));
	return r.reset = () => {
		n = void 0;
	}, r;
}
function Ip(e) {
	let t = Function("source", "return { " + e.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return t.properties = e, t;
}
function Lp(e, t) {
	return Rp(e).filter((e) => typeof e == "string" && (!t || t.has(e)));
}
function Rp(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region ../core/src/data/transforms/lookup.js
var zp = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e, t, n = {}) {
		super(e), this.params = e;
		let r = Bp(e);
		if (!r && !t) throw Error("Lookup transform requires a foreign collector.");
		let i = v(e.key), a = v(e.fields ?? i);
		if (a.length === 0) throw Error("The \"fields\" property must not be empty.");
		if (i.length !== a.length) throw Error("The \"fields\" and \"key\" properties must have the same number of fields.");
		let o = e.values, s = e.as;
		if (!o && s) throw Error("The \"as\" property requires explicit \"values\".");
		if (o && s && s.length !== o.length) throw Error("The \"as\" property must contain one output field for every lookup value.");
		if (o?.length === 0) throw Error("The \"values\" property must not be empty.");
		let c = i.map((e) => F(e)), l = a.map((e) => F(e)), u = !o, d = o?.map((e) => F(e)) ?? [], f = s ?? o ?? [], p = e.default ?? null, m = !1, h = [], g, _ = !1, y, b = null, x, S = l[0], C = n.isForeignDataReady ?? (() => !0), w = n.requestForeignData ?? (() => void 0), T = n.prepareBatch ?? (() => void 0), E = !!n.acceptsDatum, D = n.acceptsDatum ?? (() => !0), O = i.length === 1 ? (e) => b.get(S(e)) : (e) => {
			let t = b;
			for (let n = 0; n < l.length - 1; n++) {
				let r = t.get(l[n](e));
				if (!r) return;
				t = r;
			}
			return t.get(l.at(-1)(e));
		}, k = (n) => {
			if (T(), b) return;
			if (!n && !t.completed) throw Error("Lookup table must be loaded before primary data.");
			let r = n ?? t.getData();
			if (u) {
				let e = Up(r[Symbol.iterator]().next().value, i);
				f = e, d = e.map((e) => F(e));
			}
			b = Hp(r, c, e.key), x = Wp(f, d, p);
		}, ee = (e) => {
			let t = y(e), n = O(e);
			x(t, n), this._propagate(t);
		}, A = E ? (e) => {
			D(e) && ee(e);
		} : ee, te = (e) => {
			if (k(), !(r && u)) {
				for (let t of f) if (Object.hasOwn(e, t)) throw Error(`Lookup output field "${t}" already exists in primary data.`);
			}
			y = Pp(e), this.handle = A, A(e);
		}, ne = () => {
			b = null, u && (d = [], f = []), this.handle = te;
		}, re = () => {
			m && this.parent && this.repropagate();
		};
		t && this.registerDisposer(t.observe(() => {
			ne(), re();
		}));
		let j = () => {
			k(h), this.handle = te, y = void 0, _ && M(g);
			for (let e of h) this.handle(e);
			h = [], g = void 0, _ = !1, b = null, u && (d = [], f = []), this.handle = ie;
		};
		function ie(e) {
			h.push(e);
		}
		let ae = this.reset.bind(this);
		this.reset = () => {
			ae(), m = !1, y = void 0, r ? (h = [], g = void 0, _ = !1, b = null, u && (d = [], f = []), this.handle = ie) : this.handle = te;
		};
		let M = this.beginBatch.bind(this);
		this.beginBatch = (e) => {
			r ? ((_ || h.length > 0) && j(), g = e, _ = !0) : (C() ? (k(), this.handle = te) : (w(), this.handle = Vp), M(e));
		};
		let N = this.complete.bind(this);
		this.complete = () => {
			r && (_ || h.length > 0) && j(), m = !0, N();
		}, this.handle = r ? ie : te;
	}
};
function Bp(e) {
	return e.type == "lookup" && "source" in e.from && e.from.source == "input";
}
function Vp(e) {}
function Hp(e, t, n) {
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
function Up(e, t) {
	if (!e) return [];
	let n = Object.keys(e);
	if (t.filter((e) => !n.includes(e)).length) throw Error("Omitting \"values\" requires top-level lookup key fields.");
	return n.filter((e) => !t.includes(e));
}
function Wp(e, t, n) {
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
function Gp(e) {
	return e.type == "lookup" && !Bp(e) || e.type == "coordinateLookup" || e.type == "cross";
}
function Kp(e) {
	if (e.type == "lookup") {
		let t = e;
		if (Bp(t)) return;
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
var qp = {
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
}, Jp = /([0-9]+)([MIDNSHP=X])/g;
function Yp(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(e)}`);
	if (e === "*") return [];
	let t = [], n = 0, r;
	for (Jp.lastIndex = 0; (r = Jp.exec(e)) !== null;) {
		if (r.index !== n) throw Error(`Malformed CIGAR string: ${e}`);
		let i = Number(r[1]);
		if (i <= 0) throw Error(`Malformed CIGAR string: ${e}`);
		t.push({
			op: r[2],
			length: i
		}), n = Jp.lastIndex;
	}
	if (n !== e.length) throw Error(`Malformed CIGAR string: ${e}`);
	return t;
}
function* Xp(e, t) {
	if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
	let n = t, r = 0;
	for (let { op: t, length: i } of Yp(e)) {
		let e = qp[t], a = n, o = r;
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
var Zp = /[0-9]/, Qp = /[A-Z]/;
function $p(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed MD tag: ${JSON.stringify(e)}`);
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		if (!Zp.test(e[n])) throw Error(`Malformed MD tag: ${e}`);
		let i = n;
		for (; n < e.length && Zp.test(e[n]);) n++;
		if (r += Number(e.slice(i, n)), n < e.length) {
			if (e[n] == "^") {
				n++;
				let i = n;
				for (; n < e.length && Qp.test(e[n]);) n++;
				if (n == i) throw Error(`Malformed MD tag: ${e}`);
				let a = e.slice(i, n);
				t.push({
					type: "deletion",
					refOffset: r,
					refBases: a
				}), r += a.length;
			} else if (Qp.test(e[n])) t.push({
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
var em = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = F(e.start ?? "start"), n = F(e.cigar ?? "cigar"), r = F(e.sequence ?? "seq"), i = F(e.quality ?? "qual"), a = F(e.md ?? "md"), o = Fp({ copyFields: e.copyFields });
		this.handle = (e) => {
			let s = n(e);
			if (typeof s != "string" || s.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(s)}`);
			if (s == "*") return;
			let c = t(e);
			if (!Number.isFinite(c)) throw Error(`Invalid CIGAR start coordinate: ${c}`);
			let l = tm(a, e);
			if (typeof l != "string" || l.length == 0) throw Error("alignmentMismatches requires the MD tag");
			let u = new Map($p(l).filter((e) => e.type == "mismatch").map((e) => [e.refOffset, e.refBase])), d = tm(r, e), f = tm(i, e);
			for (let t of Xp(s, c)) if (t.cigarOp == "M") for (let [n, r] of u) {
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
function tm(e, t) {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Error && e.message.startsWith("Invalid field")) return;
		throw e;
	}
}
//#endregion
//#region ../core/src/data/transforms/coordinateLookup.js
var nm = class extends zp {
	constructor(e, t, n, r) {
		let i = e.channel ?? "x";
		if (!(n instanceof zo)) throw Error("Coordinate lookup requires a single-axis lazy side data source.");
		if (n.channel !== i || n.scaleResolution !== r.getScaleResolution(i)) throw Error("Coordinate lookup data must use the same positional scale and channel.");
		let a = rm(e.fields ?? e.key, n), o = 0, s = 0;
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
function rm(e, t) {
	if (typeof e == "string") {
		let t = F(e);
		return (e) => +t(e);
	} else if (e.length == 2) {
		let n = t.scaleResolution.getScale(), r = "genome" in n ? n.genome() : void 0;
		if (!r) throw Error("A chrom/pos coordinate lookup requires a locus scale.");
		let i = F(e[0]), a = F(e[1]);
		return (e) => r.toContinuous(i(e), +a(e));
	} else throw Error("Coordinate lookup requires one continuous field or chrom/pos fields.");
}
//#endregion
//#region ../core/src/data/transforms/cross.js
var im = class extends R {
	get behavior() {
		return 1;
	}
	#e;
	#t;
	#n;
	#r;
	#i = !1;
	constructor(e, t) {
		super(e), this.#e = t, this.registerDisposer(t.observe(() => {
			this.#t = void 0, this.#n = void 0, this.#r = void 0, this.#i && this.parent && this.repropagate();
		}));
	}
	reset() {
		super.reset(), this.#r = void 0, this.#i = !1;
	}
	beginBatch(e) {
		this.#r = void 0, super.beginBatch(e);
	}
	handle(e) {
		if (this.#a(), this.#t.length !== 0) {
			this.#r ??= am(Rp(e), this.#n);
			for (let t of this.#t) this._propagate(this.#r(e, t));
		}
	}
	complete() {
		this.#i = !0, super.complete();
	}
	#a() {
		if (this.#t) return;
		if (!this.#e.completed) throw Error("Cross foreign data must be loaded before primary data.");
		this.#t = Array.from(this.#e.getData()), this.#n = this.#t.length === 0 ? [] : Rp(this.#t[0]);
		let e = new Set(this.#n);
		for (let t = 1; t < this.#t.length; t++) {
			let n = Rp(this.#t[t]);
			if (n.length !== e.size || n.some((t) => !e.has(t))) throw Error("Cross foreign data must have homogeneous fields.");
		}
	}
};
function am(e, t) {
	let n = new Set(e), r = t.filter((e) => n.has(e));
	if (r.length > 0) throw Error(`Cross fields must be unique. Duplicate fields: ${JSON.stringify(r)}.`);
	let i = [...e.map((e) => om("primary", e)), ...t.map((e) => om("foreign", e))];
	return Function("primary", "foreign", `return { ${i.join(",\n")} };`);
}
function om(e, t) {
	let n = JSON.stringify(t);
	return `${n}: ${e}[${n}]`;
}
//#endregion
//#region ../core/src/data/transforms/coverage.js
var sm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e, this.startAccessor = F(e.start), this.endAccessor = F(e.end), this.chromAccessor = e.chrom ? F(e.chrom) : (e) => void 0, this.weightAccessor = e.weight ? F(e.weight) : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new _n();
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
function cm(e, t, n, r = []) {
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
var lm = class extends R {
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
		super(e, t), this.as = e.as ?? "displacement", this.positionAccessor = F(e.pos), this.length = typeof e.length == "number" ? e.length : 0;
		let n;
		if (typeof e.length == "number") {
			let t = e.length;
			n = () => t;
		} else n = L(e.length) ? () => this.length : F(e.length);
		this.lengthAccessor = n, this.extent = L(e.extent) ? void 0 : e.extent, this.#e = e.extent ? [0, 0] : void 0, this.positionFactor = L(e.positionFactor) ? 1 : e.positionFactor ?? 1, this.#t = !(L(e.length) || L(e.positionFactor) || L(e.extent));
		let r = () => {
			this.#t && this.#s() && this.completed && this.repropagate();
		};
		this.#n = this.watchExprRef(L(e.length) ? e.length : this.length, r), this.#r = this.watchExprRef(e.positionFactor ?? 1, r), this.#i = this.watchExprRef(e.extent, r), this.#o(this.length, this.positionFactor, this.extent);
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
		let r = cm(t, n, this.#e);
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
};
//#endregion
//#region ../core/src/utils/topK.js
function um(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = new _n(), o = i - r, s;
	for (s = 0; s < t && s < o; s++) a.push(s, n(e[r + s]));
	for (; s < o; s++) {
		let t = n(e[r + s]);
		t >= a.peekValue() && (a.push(s, t), a.pop());
	}
	let c = [], l;
	for (; (l = a.pop()) !== void 0;) c.push(e[r + l]);
	return c.reverse();
}
//#endregion
//#region ../core/src/utils/reservationMap.js
var dm = class {
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
}, fm = class extends R {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = F(this.params.pos), this.endPosAccessor = F(this.params.pos2 ?? this.params.pos), this.startPosBisector = It(this.startPosAccessor), this.endPosBisector = It(this.endPosAccessor), this.scoreAccessor = F(this.params.score), this.widthAccessor = F(this.params.width), this.laneAccessor = this.params.lane ? F(this.params.lane) : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
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
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new dm(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = this.resolution.getAxisLength();
		if (!t) return;
		for (let e of this.reservationMaps.values()) e.reset();
		let n = e.domain(), r = um(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, n[0]), this.startPosBisector.right(this._data, n[1]));
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
function pm(e, t, n, r) {
	if (e.length < 3 || !gm(e, t, r)) return e;
	let i = e;
	do
		switch (n) {
			case "parity":
				i = mm(i);
				break;
			case "greedy":
				i = hm(i, t, r);
				break;
			default: throw Error("Invalid axis label overlap method: " + n);
		}
	while (i.length >= 3 && gm(i, t, r));
	let a = e.at(-1);
	return i.length < 3 && i.at(-1) !== a && (i.length > 1 && i.pop(), i.push(a)), i;
}
function mm(e) {
	return e.filter((e, t) => t % 2 == 0);
}
function hm(e, t, n) {
	let r = [], i;
	for (let a of e) {
		let e = t(a);
		(i == null || !_m(i, e, n)) && (r.push(a), i = e);
	}
	return r;
}
function gm(e, t, n) {
	let r = t(e[0]);
	for (let i = 1; i < e.length; i++) {
		let a = t(e[i]);
		if (_m(r, a, n)) return !0;
		r = a;
	}
	return !1;
}
function _m(e, t, n) {
	return n > Math.max(t[0] - e[1], e[0] - t[1]);
}
//#endregion
//#region ../core/src/data/transforms/axisLabelLayout.js
var vm = class extends R {
	get behavior() {
		return 6;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this.channel = e.channel, this.labelWidthAccessor = F(e.labelWidth), this.chromLabelWidthAccessor = e.chromLabelWidth ? F(e.chromLabelWidth) : void 0, (e.labelOverlap || e.labelFlush !== !1 || e.labelFlushZoomExtent) && !Cm(e.labelAngle)) throw Error("Axis label layout requires an axis-aligned label angle.");
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
			let r = t(n.value) * e, i = this.params.labelFlushZoomExtent && n.zoomExtent ? Dm(r, this.getLabelBounds(n, 0), e, this.params.labelFlushOffset) : this.params.labelFlush === !1 ? 0 : Em(r, this.getLabelBounds(n, 0), e, this.params.labelFlush, this.params.labelFlushOffset), a = this.channel == "x" ? i : -i;
			n[this.params.labelOffset] = a, this.nextFlushOffsetMap.set(n.value, a);
		}
		let r = this.getOverlapMethod(t), i = this.nextOutputData.filter((e) => e.label !== ""), a = r ? ym(i, (n) => {
			let r = this.getLabelBounds(n, t(n.value) * e), i = n[this.params.labelOffset], a = this.channel == "x" ? i : -i;
			return [r[0] + a, r[1] + a];
		}, r, this.params.labelSeparation) : i;
		this.nextVisibleLabelValueSet.clear();
		for (let e of a) this.nextVisibleLabelValueSet.add(e.value);
		for (let e of this.nextOutputData) e[this.params.labelVisible] = this.nextVisibleLabelValueSet.has(e.value);
		this.propagateIfChanged();
	}
	propagateIfChanged() {
		if (!this.hasPublished || this.nextOutputData.length != this.outputValueSet.size || this.nextOutputData.some((e) => !this.outputValueSet.has(e.value)) || !wm(this.nextVisibleLabelValueSet, this.visibleLabelValueSet) || !Tm(this.nextFlushOffsetMap, this.flushOffsetMap)) {
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
		return _m(this.getLabelBounds(e, t(e.value) * r), Om(t(i.continuousStart) * r, t(i.continuousEnd) * r, this.chromLabelWidthAccessor(e), this.params.chromLabelPadding, this.params.chromLabelAlign, r), this.params.chromLabelSpacing);
	}
	getLabelBounds(e, t) {
		return bm(t, this.labelWidthAccessor(e), this.params.labelFontSize, this.params.labelAngle, this.channel, this.params.labelAlign, this.params.labelBaseline);
	}
	getOverlapMethod(e) {
		switch (this.params.labelOverlap) {
			case !1: return !1;
			case "auto": return Tt(e.type) || e.type == "symlog" ? "greedy" : "parity";
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
function ym(e, t, n, r) {
	let i = pm(e.filter((e) => e.explicit), t, n, r), a = pm(e.filter((e) => !e.explicit && i.every((n) => !_m(t(e), t(n), r))), t, n, r);
	return i.concat(a);
}
function bm(e, t, n, r, i, a, o) {
	let s = -xm(a) * t, c = s + t, l = -Sm(o) * n, u = l + n, d = -r * Math.PI / 180, f = Math.sin(d), p = Math.cos(d), m = i == "x" ? s * p - l * f : s * f + l * p, h = i == "x" ? c * p - l * f : c * f + l * p, g = i == "x" ? c * p - u * f : c * f + u * p, _ = i == "x" ? s * p - u * f : s * f + u * p;
	return [e + Math.min(m, h, g, _), e + Math.max(m, h, g, _)];
}
function xm(e) {
	switch (e) {
		case "left": return 0;
		case "center": return .5;
		case "right": return 1;
		default: throw Error("Invalid label alignment: " + e);
	}
}
function Sm(e) {
	switch (e) {
		case "top": return 0;
		case "middle": return .5;
		case "bottom":
		case "alphabetic":
		case "baseline": return 1;
		default: throw Error("Invalid label baseline: " + e);
	}
}
function Cm(e) {
	return e % 90 == 0;
}
function wm(e, t) {
	return e.size == t.size && e.isSubsetOf(t);
}
function Tm(e, t) {
	if (e.size != t.size) return !1;
	for (let [n, r] of e) if (t.get(n) !== r) return !1;
	return !0;
}
function Em(e, t, n, r, i) {
	let a = Math.abs(e), o = Math.abs(n - e);
	return a < o && a <= r ? -t[0] - i : o <= r ? -t[1] + i : 0;
}
function Dm(e, t, n, r) {
	return e < n - e ? Math.max(0, -e - t[0] - r) : Math.min(0, n - e - t[1] + r);
}
function Om(e, t, n, r, i, a) {
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
var km = class extends R {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (Am(this.params)) e = this.params.expr;
		else if (jm(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = Me(this.params, t);
		} else throw Error("Invalid filter params: " + JSON.stringify(this.params));
		this.predicate = this.paramRuntime.watchExpression(e, () => this.repropagate(), {
			scopeOwned: !1,
			registerDisposer: (e) => this.registerDisposer(e)
		});
	}
	handle(e) {
		this.predicate(e) && this._propagate(e);
	}
};
function Am(e) {
	return "expr" in e;
}
function jm(e) {
	return "param" in e;
}
//#endregion
//#region ../core/src/data/transforms/flatten.js
var Mm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = e.index;
		if (e.fields) {
			let n = v(e.fields).map((e) => F(e)), r = v(e.as || e.fields);
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
}, Nm = 48;
function* Pm(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - Nm;
	}
	yield r;
}
//#endregion
//#region ../core/src/data/transforms/flattenCompressedExons.js
var Fm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = F(e.exons ?? "exons"), n = F(e.start ?? "start"), [r, i] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let a = n(e), o = a, s = !0, c = t(e);
			for (let t of Pm(c)) {
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
}, Im = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = F(e.start ?? "start"), n = F(e.cigar ?? "cigar"), r = Fp({ copyFields: e.copyFields });
		this.handle = (e) => {
			let i = t(e);
			if (!Number.isFinite(i)) throw Error(`Invalid CIGAR start coordinate: ${i}`);
			let a = n(e);
			if (typeof a != "string" || a.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(a)}`);
			for (let t of Xp(a, i)) this._propagate(Object.assign(r(e), t));
		}, this.beginBatch = (e) => {
			r.reset(), super.beginBatch(e);
		};
	}
}, Lm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = v(e.field).map((e) => F(e)), n = v(e.separator), r = v(e.as || e.field);
		if (t.length !== n.length || t.length !== r.length) throw Error(`Lengths of "separator" (${n.length}), "fields" (${t.length}), and "as" (${r.length}) do not match!`);
		this.handle = (e) => {
			if (t.some((t) => !t(e))) return;
			let i = t.map((t, r) => t(e).split(n[r]));
			Rm(i, e);
			let a = i[0].length;
			for (let n = 0; n < a; n++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < t.length; e++) a[r[e]] = i[e][n];
				this._propagate(a);
			}
		};
	}
};
function Rm(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region ../core/src/data/transforms/formula.js
var zm = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.as = e.as, this.fn = void 0;
	}
	initialize() {
		this.fn = this.paramRuntime.watchExpression(this.params.expr, () => this.repropagate(), {
			scopeOwned: !1,
			registerDisposer: (e) => this.registerDisposer(e)
		});
	}
	handle(e) {
		e[this.as] = this.fn(e), this._propagate(e);
	}
}, Bm = class extends R {
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
		let a = F(e.chrom), o = v(e.pos).map((e) => F(e)), s = v(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = v(e.offset), l;
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
}, Vm = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = F(e.field), r = e.as, i = 0, a = this.watchExprRef(e.fontSize, () => {
			let e = a();
			e != i && (i = e, this.repropagate());
		});
		i = a(), this.handle = (e) => {
			let t = n(e);
			t === void 0 ? e[r] = 0 : e[r] = this.font.metrics.measureWidth(t, i), this._propagate(e);
		};
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.fontManager;
		this.font = ru(e, this.params);
	}
};
//#endregion
//#region ../core/src/data/transforms/packLegendLabels.js
function Hm(e, t) {
	let n = Number(e), r = Number.isFinite(n) && n >= 0 ? n : 100, i = Number(t);
	return Math.sqrt(r) + (Number.isFinite(i) ? i : 0);
}
var Um = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.labelWidthAccessor = F(e.labelWidth), this.symbolSizeAccessor = typeof e.symbolSize == "string" ? F(e.symbolSize) : () => e.symbolSize ?? 100, this.symbolStrokeWidthAccessor = typeof e.symbolStrokeWidth == "string" ? F(e.symbolStrokeWidth) : () => e.symbolStrokeWidth ?? 0, this.yExtent = void 0;
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
			let n = this.buffer[e], r = t == "horizontal" ? Math.floor(e / d) : e % f, i = t == "horizontal" ? e % d : Math.floor(e / f), o = Hm(this.symbolSizeAccessor(n), this.symbolStrokeWidthAccessor(n)), s = this.labelWidthAccessor(n);
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
}, Wm = 65536, Gm = class extends R {
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
		let e = this.params, t = e.as || "lane", n = je(e.spacing) ? e.spacing : 1, r = F(e.start), i = F(e.end);
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(Wm), o = F(e.preference), s = e.preferredOrder, c = Infinity;
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
			let e = new _n(), a = new _n(), o = -Infinity, s = 0;
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
}, Km = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let t = e.fields.map((e) => F(e)), n = e.as ? e.as : t.map(nt);
		this.handle = (e) => {
			let r = {};
			for (let i = 0; i < t.length; i++) r[n[i]] = t[i](e);
			this._propagate(r);
		};
	}
}, qm = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = new RegExp(e.regex), n = typeof e.as == "string" ? [e.as] : e.as, r = F(e.field);
		this.handle = (i) => {
			let a = r(i);
			if (C(a)) {
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
}, Jm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = v(e.columnRegex).map((e) => new RegExp(e));
		for (let e of t) if (RegExp("|" + e.source).exec("").length - 1 != 1) throw Error(`Regex ${e.toString()} must have exactly one capturing group!`);
		let n = v(e.asValue);
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
			ee(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, Ym = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = Array.isArray(e.element) ? e.element : [e.element];
		if (t.length == 0) throw Error("\"element\" must contain at least one field.");
		if (e.membership === "") throw Error("\"membership\" must name a non-empty field.");
		this.elementAccessors = t.map((e) => F(e)), this.setAccessor = F(e.set), this.membershipAccessor = e.membership ? F(e.membership) : null, this.#e();
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
}, Xm = class extends R {
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
		let e = this.params, t = e.as || ["y0", "y1"], n = e.sort ? s(e.sort.field, e.sort.order) : void 0, r = e.field ? F(e.field) : () => 1, i = e.groupby.map((e) => F(e)), a = an(this.buffer, (e) => i.map((t) => t(e)).join()).map((e) => e[1]), o = (e) => !0;
		if (e.baseField) {
			let t = F(e.baseField);
			o = (e) => t(e) !== null;
		}
		let c, l;
		switch (e.offset) {
			case "normalize":
				c = (e, t) => e / t, l = (e, t) => Qi(e, t);
				break;
			case "center":
				c = (e, t) => e - t / 2, l = (e, t) => Qi(e, t);
				break;
			case "information":
				{
					let t = Math.log2(e.cardinality ?? 4);
					c = (e, t) => e / t, l = (e, n) => {
						let r = Qi(e, (e) => +!o(e)), i = Qi(e, n), a = i - r, s = 0;
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
			default: c = (e, t) => e, l = (e, t) => 1;
		}
		for (let e of a) {
			n && e.sort(n);
			let i = l(e, r), a = 0;
			for (let n of e) {
				let e = a + r(n);
				o(n) && (n[t[0]] = c(a, i), n[t[1]] = c(e, i), this._propagate(n), a = e);
			}
		}
		super.complete();
	}
}, Zm = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = F(e.field ?? "sequence"), [n, r] = e.as ?? ["pos", "sequence"];
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
}, Qm = {
	count: (e) => e.length,
	valid: qi,
	sum: Qi,
	min: lt,
	max: Lt,
	mean: Xi,
	q1: (e, t) => Mt(e, .25, t),
	median: Zi,
	q3: (e, t) => Mt(e, .75, t),
	variance: Ji
}, $m = class extends R {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
			if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
			if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
			e.fields.forEach((t, n) => {
				let r = F(t), i = Qm[e.ops[n]];
				this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
			});
		} else this.ops.push((e) => Qm.count(e)), this.as.push("count");
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	#e() {
		let e = this.params?.groupby;
		if (e?.length > 0) {
			let t = e.map((e) => F(e)), n = cn(this.buffer, ...t);
			for (let [t, r] of tp(n)) {
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
}, eh = "...";
function th(e, t, n, r, i) {
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
var nh = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.accessor = F(e.field), this.as = e.as ?? e.field, this.fontSize = e.fontSize, this.ellipsis = e.ellipsis ?? eh;
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.fontManager;
		this.font = this.params.font ? e.getFont(this.params.font, this.params.fontStyle, this.params.fontWeight) : e.getDefaultFont();
	}
	handle(e) {
		let t = this.accessor(e);
		t == null ? e[this.as] = "" : e[this.as] = th("" + t, this.params.limit, this.font.metrics?.measureWidth, this.fontSize, this.ellipsis), this._propagate(e);
	}
}, rh = /* @__PURE__ */ new Set([
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
]), ih = /* @__PURE__ */ new Set([
	"min",
	"max",
	"q1",
	"median",
	"q3"
]), ah = /* @__PURE__ */ new Set(["mean", "variance"]);
function oh(e, t) {
	let n = t.map(({ op: e }) => e), r = t.map(({ resultIndex: e }) => e), i = t.map(({ op: e }) => sh(e));
	return ((t, a, o) => {
		let s = new ch(e, n), c = r.map((e) => o[e]), l = a.starts, u = a.stops, d = 0, f = 0;
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
function sh(e) {
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
var ch = class {
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
		this.accessor = e, this.needsSum = t.includes("sum"), this.needsMoments = t.some((e) => ah.has(e)), this.needsOrderedValues = t.some((e) => ih.has(e)), this.reset();
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
		this.needsOrderedValues && this.values.splice(qt(this.values, n), 0, n);
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
			let e = qt(this.values, r);
			if (this.values[e] !== r) throw Error("Window aggregate state is inconsistent.");
			this.values.splice(e, 1);
		}
	}
	q1() {
		return Ct(this.values, .25);
	}
	median() {
		return Ct(this.values, .5);
	}
	q3() {
		return Ct(this.values, .75);
	}
}, lh = /* @__PURE__ */ new Set([
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
]), uh = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile"
]);
function dh(e, t, n) {
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
var fh = class extends R {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.buffer = [];
		let t = ph(e);
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
		for (let t of Sh(e, this.groupAccessors)) this.#t(t);
		for (let t of e) this._propagate(t);
	}
	#t(e) {
		let t = yh(e, this.comparator), n = bh(t, this.comparator, this.frame, this.ignorePeers), r = this.outputFields.map(() => Array(t.length));
		for (let e of this.partitionEvaluators) e(t, n, r);
		gh(t, r, this.outputFields);
	}
};
function ph(e) {
	if (!Array.isArray(e.ops) || e.ops.length == 0) throw Error("The \"ops\" property must contain at least one operation.");
	_h("fields", e.fields, e.ops.length), _h("params", e.params, e.ops.length), _h("as", e.as, e.ops.length);
	let t = e.frame ?? [null, 0];
	if (!Array.isArray(t) || t.length != 2) throw Error("The \"frame\" property must contain exactly two offsets.");
	for (let e of t) if (e != null && (!Number.isInteger(e) || !Number.isFinite(e))) throw Error("Window frame offsets must be integers or null.");
	let n = (e.groupby ?? []).map((e) => F(e)), r = e.sort ? s(e.sort.field, e.sort.order) : void 0, i = [], a = [], o = /* @__PURE__ */ new Map(), c = [], l = [];
	for (let t = 0; t < e.ops.length; t++) {
		let n = mh(e, t);
		if (l.push(n.as), n.kind == "window") {
			let e = dh(n.op, n.accessor, n.parameter);
			i.push((n, r, i) => e(n, r, i[t]));
		} else if (n.op == "count") c.push({ resultIndex: t });
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
	c.length && i.push(hh(c));
	for (let e of a) i.push(oh(e.accessor, e.results));
	return {
		frame: t,
		ignorePeers: e.ignorePeers ?? !1,
		comparator: r,
		groupAccessors: n,
		partitionEvaluators: i,
		outputFields: l
	};
}
function mh(e, t) {
	let n = e.ops[t], r = e.fields?.[t] ?? null, i = e.params?.[t], a = lh.has(n) ? "window" : rh.has(n) ? "aggregate" : null;
	if (!a) throw Error(`Unsupported window operation: ${n}`);
	if ((a == "window" ? !uh.has(n) : n != "count") && r == null) throw Error(`Window operation "${n}" requires a field.`);
	if (n == "ntile" || n == "nth_value") {
		if (!Number.isInteger(i) || i <= 0) throw Error(`Window operation "${n}" requires a positive integer parameter.`);
	} else if (i != null && !Number.isFinite(i)) throw Error(`Window operation "${n}" requires a numeric parameter.`);
	let o = e.as?.[t];
	if (o != null && (typeof o != "string" || o.length == 0)) throw Error("Window output field names must be non-empty strings.");
	return {
		op: n,
		kind: a,
		field: r,
		accessor: r == null ? void 0 : F(r),
		parameter: i,
		as: o ?? vh(n, r)
	};
}
function hh(e) {
	let t = e.map(({ resultIndex: e }) => e);
	return (e, n, r) => {
		let i = t.map((e) => r[e]), a = n.starts, o = n.stops;
		for (let t = 0; t < e.length; t++) {
			let e = o[t] - a[t];
			for (let n of i) n[t] = e;
		}
	};
}
function gh(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		for (let e = 0; e < n.length; e++) i[n[e]] = t[e][r];
	}
}
function _h(e, t, n) {
	if (t && t.length != n) throw Error(`The "${e}" property must contain one entry for every window operation.`);
}
function vh(e, t) {
	return t == null ? e : `${e}_${t}`;
}
function yh(e, t) {
	return t ? e.slice().sort(t) : e;
}
function bh(e, t, n, r) {
	let i = e.length, a = Array(i), o = Array(i), s = Array(i), c = Array(i);
	if (t) {
		let n = 0;
		for (let r = 1; r <= i; r++) if (r == i || t(e[n], e[r]) != 0) {
			for (let e = n; e < r; e++) a[e] = n, o[e] = r;
			n = r;
		}
	} else for (let e = 0; e < i; e++) a[e] = e, o[e] = e + 1;
	for (let e = 0; e < i; e++) {
		let l = n[0] == null ? 0 : xh(e + n[0], 0, i), u = n[1] == null ? i : xh(e + n[1] + 1, 0, i);
		t && !r && (l > 0 && l < i && a[l] != l && (l = a[l]), u > 0 && u < i && (u = o[u - 1])), l > u && (u = l), s[e] = l, c[e] = u;
	}
	return {
		starts: s,
		stops: c,
		peerStarts: a,
		peerStops: o
	};
}
function xh(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function Sh(e, t) {
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
var Ch = {
	aggregate: $m,
	alignmentMismatches: em,
	collect: Op,
	coverage: sm,
	displace1d: lm,
	axisLabelLayout: vm,
	filterScoredLabels: fm,
	filter: km,
	flatten: Mm,
	flattenCigar: Im,
	flattenCompressedExons: Fm,
	flattenDelimited: Lm,
	flattenSequence: Zm,
	formula: zm,
	identifier: Ee,
	linearizeGenomicCoordinate: Bm,
	measureText: Vm,
	packLegendLabels: Um,
	pileup: Gm,
	project: Km,
	regexExtract: qm,
	regexFold: Jm,
	sample: Gl,
	setIntersection: Ym,
	truncateText: nh,
	window: fh,
	stack: Xm
};
function wh(e, t, n) {
	if (e.type == "lookup") {
		let t = e;
		if (!n && !Bp(t)) throw Error("Lookup transform requires a foreign collector.");
		return new zp(t, n?.collector);
	} else if (e.type == "coordinateLookup") {
		if (!n || !t) throw Error("Coordinate lookup requires a view and a foreign data source.");
		return new nm(e, n.collector, n.source, t);
	} else if (e.type == "cross") {
		if (!n) throw Error("Cross transform requires a foreign collector.");
		return new im(e, n.collector);
	}
	let r = Ch[e.type];
	if (r) return new r(e, t);
	throw Error("Unknown transform: " + e.type);
}
//#endregion
//#region ../core/src/data/sources/urlSource.js
var Th = /* @__PURE__ */ new Set(["application/gzip", "application/x-gzip"]), Eh = new TextDecoder(), Dh = class extends Ro {
	#e;
	constructor(e, t) {
		super(t), this.params = ge(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.baseUrl = t?.getBaseUrl(), this.#e = new cc(this, {
			getUrl: () => this.params.url,
			onChange: () => this.load()
		});
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
		let t = En(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" }, r = await fetch(t);
		if (!r.ok) throw Error(`Cannot load "${t}": ${r.status} ${r.statusText}`);
		return za(await Ph(r, t, Mc(n.type)), jc(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => En(t, e));
	}
	async load() {
		this.setLoadingStatus("loading"), this.reset();
		try {
			let e = P(this.params.url), t = typeof e == "object" && "urlsFromFile" in e ? (await this.#t(e)).map((e) => ({ url: e })) : await this.#e.normalize(), n = t.map((e) => e.url);
			if (n.length > 0 && n[0]) {
				let e = Ac(this.params, n), r = Mc(e.type), i = async (e) => {
					try {
						let t = await fetch(e);
						if (!t.ok) throw Error(`${t.status} ${t.statusText}`);
						return await Ph(t, e, r);
					} catch (t) {
						throw Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t });
					}
				}, a = async (t, n) => {
					try {
						let r = za(t, jc(e)), i = r instanceof Promise ? await r : r;
						this.beginBatch({
							type: "file",
							url: n.url
						});
						let a = Vs(n.fields);
						for (let e of i) this._propagate(a(e));
					} catch (e) {
						throw console.warn(e), Error(`Cannot parse: ${n.url}: ${e.message}`, { cause: e });
					}
				}, o = await Promise.all(t.map((e) => Ws(e, async () => ({
					descriptor: e,
					content: await i(e.url)
				}))));
				await Promise.all(o.map((e) => e ? a(e.content, e.descriptor) : void 0));
			}
			this.setLoadingStatus("complete");
		} catch (e) {
			e instanceof Ls ? this.setLoadingStatus("complete") : this.setLoadingStatus("error", e.message);
		}
		this.complete();
	}
};
function Oh(e) {
	return "url" in e;
}
function kh(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && (e[3] & 224) == 0;
}
function Ah(e) {
	return e ? Th.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function jh(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function Mh(e) {
	return new Uint8Array(e).buffer;
}
async function Nh(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(Mh(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function Ph(e, t, n) {
	if (!(Pc(t) || Ah(e.headers.get("content-type")) || jh(e.headers.get("content-encoding")))) return Fh(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return Ih(kh(r) ? await Nh(r) : r, n);
}
function Fh(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function Ih(e, t) {
	return t == "arrayBuffer" ? Mh(e) : Eh.decode(e);
}
//#endregion
//#region ../core/src/data/sources/sequenceSource.js
function Lh(e) {
	return "sequence" in e;
}
var Rh = class extends Ro {
	constructor(e, t) {
		if (super(t), this.sequence = ge(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = P(this.sequence.as) ?? "data", t = P(this.sequence.start) ?? 0, n = P(this.sequence.step) ?? 1, r = P(this.sequence.stop);
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
function zh(e, t) {
	if (Ec(e)) return new Dc(e, t);
	if (Oh(e)) return new Dh(e, t);
	if (Lh(e)) return new Rh(e, t);
	if (Bh(e)) return Lo(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function Bh(e) {
	return "lazy" in e;
}
//#endregion
//#region ../core/src/data/transforms/clone.js
var Vh = class extends R {
	get behavior() {
		return 1;
	}
	#e = Fp();
	constructor() {
		super({ type: "clone" }), this.handle = (e) => this._propagate(this.#e(e)), this.beginBatch = (e) => {
			this.#e.reset(), super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/sources/namedSource.js
function Hh(e) {
	return "name" in e;
}
var Uh = class extends Ro {
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
		Array.isArray(e) && e.length > 0 && (t = Ic(e[0])), this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Wh = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new vl();
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
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof Ro ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof Uh && e === n.identifier) {
			if (t && t !== n) throw Error(`Named data "${e}" is ambiguous across scoped datasets. Use the dataset owner's ViewHandle.datasets.set() method.`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
	updateNamedDataBinding(e, t) {
		e.beginUpdate(), t === void 0 ? e.resetData() : e.setData(t);
		for (let t of this.#e.values()) t instanceof Uh && t.binding === e && t.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/utils/trees.js
function Gh(e, t) {
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
function Kh(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = Kh(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function qh(e, t) {
	return Kh(e, t, (e) => e.children);
}
//#endregion
//#region ../core/src/view/flowBuilder.js
function Jh(e, t, n, r) {
	let i = [], a = [], o, s = t ?? new Wh(), c = [], l = r ?? (() => !0);
	function u(e, t = () => void 0) {
		if (!o) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return o.addChild(e), o = e, i.push(e), e;
	}
	function d(e, t) {
		return u(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function f(e, t) {
		e.behavior & 2 && t(new Vh()), t(e);
	}
	function p(e, t) {
		for (let n of e) {
			let e, r;
			try {
				let i = Kp(n);
				i && (r = m(i.data, i.transforms, t)), e = wh(n, t, r);
			} catch (e) {
				throw r && h(t, r.collector), console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			f(e, d), r && e.registerDisposer(() => h(t, r.collector));
		}
	}
	function m(e, t, n) {
		let r = Hh(e) ? new Uh(e, n) : zh(e, n), i = r;
		try {
			for (let e of t) {
				if (Gp(e)) throw Error("Transforms with side inputs cannot be used in a side-input transform pipeline.");
				f(wh(e, n), (e) => {
					i.addChild(e), i = e;
				});
			}
		} catch (e) {
			throw r.disposeSubtree(), e;
		}
		let a = new Op({ type: "collect" });
		return i.addChild(a), s.addDataSource(r), s.addCollector(a), n.flowHandle ??= {}, n.flowHandle.auxiliaryCollectors ??= /* @__PURE__ */ new Set(), n.flowHandle.auxiliaryCollectors.add(a), {
			collector: a,
			source: r
		};
	}
	function h(e, t) {
		e.flowHandle?.auxiliaryCollectors?.delete(t), s.pruneCollectorBranch(t), s.removeCollector(t);
	}
	function g() {
		return i.findLastIndex((e) => e instanceof Ee) > i.findLastIndex((e) => e instanceof Ro);
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
			let n = Hh(e.spec.data) ? new Uh(e.spec.data, e) : zh(e.spec.data, e);
			o = n, i.push(n), s.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
		}
		if (e.spec.transform && p(e.spec.transform, e), e instanceof J) {
			if (!o) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
			let t = Xh(e);
			if (t) {
				c.push(t.rewrite);
				for (let e of t.transforms) d(e);
			}
			e.mark.isPickingParticipant() && !g() && (d(new Vh()), d(new Ee({ type: "identifier" })));
			let n = new Op({
				type: "collect",
				groupby: e.getFacetFields(),
				sort: Zh(e, t?.rewrittenEncoding)
			});
			u(n);
			let r = e.flowHandle?.collector;
			r && s.removeCollector(r), s.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
		}
		o && (e.flowHandle ??= {}, e.flowHandle.node = o);
	}, v = Gh(Yh(e, n), (e) => e.dataParent);
	for (let e of v) qh(e, {
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
function Yh(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return kn;
		n.push(e);
	}), n;
}
function Xh(e) {
	let t = [], n = {}, r = e.mark.encoding, i = e.getEncoding(), a = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		h(n) !== n && !(n in i) || Be(n) && !Array.isArray(t) && D(t) && a.push({
			channel: n,
			chromPosDef: t
		});
	}
	let o = cn(a, (e) => h(e.channel), (e) => e.chromPosDef.chrom);
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
		t.push(new Vh()), t.push(new Bm({
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
			}, Jn(e.mark, "encoding");
		}
	} : void 0;
}
function Zh(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x, r = e.mark.encoding.x;
	if (M(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (qe(n)) return M(r) && "buildIndex" in r && r.buildIndex ? { field: n.field } : null;
		if (!Ce(n) && Re(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
function Qh(e, ...t) {
	let n = e;
	for (let e of t) n.addChild(e), n = e;
	let r;
	n instanceof Op ? r = n : (r = new Op(), n.addChild(r));
	let i;
	return i = e instanceof Ro ? async () => (await e.load(), r.getData()) : async () => {
		throw Error("The root node is not derived from DataSource!");
	}, {
		dataSource: e,
		collector: r,
		loadAndCollect: i
	};
}
//#endregion
//#region ../core/src/data/flowOptimizer.js
function $h(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!$h(t, e)) return !1;
	return !0;
}
function eg(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof Vh) if (t) t = !1;
	else {
		let n = e.children[0];
		e.excise(), n && eg(n, t);
		return;
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) eg(e.children[n], t || r > 1);
}
function tg(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.shareKey && !n.has(e.shareKey) && n.set(e.shareKey, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.shareKey) {
		let t = n.get(e.shareKey);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function ng(e) {
	if (eg(e), !$h(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function rg(e) {
	let t = tg(e);
	for (let t of e.dataSources) ng(t);
	return t;
}
//#endregion
//#region ../core/src/data/flowInit.js
var ig = /* @__PURE__ */ new WeakMap(), ag = /* @__PURE__ */ new WeakMap();
function og(e, t) {
	let n = ig.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = ag.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => og(e)).finally(() => {
			ag.delete(e);
		});
		return ag.set(e, i), i;
	}
	let r = Promise.resolve().then(() => (e.activate(), e.load())).finally(() => {
		ig.delete(e);
	});
	return ig.set(e, r), r;
}
function sg(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r);
	}
}
function cg(e) {
	for (; e && !(e instanceof Ro);) e = e.parent;
	return e instanceof Ro ? e : void 0;
}
function lg(e, t, n, r) {
	let i = r ?? (() => !0), a = hg(e, n).filter(i);
	if (a.length === 0) return {
		dataFlow: t,
		unitViews: [],
		dataSources: /* @__PURE__ */ new Set()
	};
	let o = new Set(a);
	for (let e of a) e._setDataInitializationState("pending");
	let s;
	try {
		s = Jh(e, t, n, (e) => o.has(e)), sg(e, rg(s));
	} catch (e) {
		for (let e of a) e._setDataInitializationState("none");
		throw e;
	}
	let c = ug(a);
	for (let e of c) e.visit((e) => e.initializeOnce());
	let l = a.filter((e) => e instanceof J);
	for (let e of l) {
		let t = e.mark;
		t.initializeEncoders(), e.registerDomainSubscriptions(), e.registerDisposer(e.flowHandle.collector.observe((n) => {
			t.initializeData(), e.context.animator.requestRender();
		}));
	}
	for (let e of a) e._setDataInitializationState("ready");
	return {
		dataFlow: s,
		unitViews: l,
		dataSources: c
	};
}
function ug(e, t) {
	let n = Array.isArray(e) ? e : hg(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource), pg(e, r);
	}
	return r;
}
function dg(e, t) {
	let n = /* @__PURE__ */ new Set();
	return fg(e, n, t), e.visit((e) => {
		if (t && !t(e)) return kn;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), kn;
	}), n;
}
function fg(e, t, n) {
	for (let r of hg(e, n)) pg(r, t);
}
function pg(e, t) {
	for (let n of e.flowHandle?.auxiliaryCollectors ?? []) {
		let e = cg(n);
		e && t.add(e);
	}
}
function mg(e, t, n, r) {
	t ||= dg(e, n);
	let i = /* @__PURE__ */ new Set();
	fg(e, i, n);
	let a = Array.from(t).filter((e) => i.has(e)), o = Array.from(t).filter((e) => !i.has(e));
	return Promise.all(a.map((e) => og(e, r))).then((e) => Promise.all(o.map((e) => og(e, r))).then((t) => e.concat(t))).then((t) => (gg(e), t));
}
function hg(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return kn;
		n.push(e);
	}), n) : e.getDescendants();
}
function gg(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region ../core/src/genomeSpy/viewDataInit.js
async function _g(e, t, n, r) {
	let i = (e) => e.isConfiguredVisible(), { dataFlow: a } = lg(e, t, i);
	return r(a), await n.waitUntilReady(), e.invalidateSizeCache(), await mg(e, new Set(a.dataSources), i), a;
}
async function vg(e, t, n) {
	return yg(e, t, n, bg(e, (e) => e.isConfiguredVisible()).filter((e) => e.getDataInitializationState() === "none"));
}
async function yg(e, t, n, r) {
	let i = new Set(r), a = (e) => e.isConfiguredVisible(), o = bg(e, a).filter((e) => i.has(e) && e.getDataInitializationState() === "none");
	if (o.length === 0) return t;
	let s = new Set(o), c = (e) => s.has(e), l = /* @__PURE__ */ new Set(), u = [];
	for (let e of o) {
		if (e.spec.data || e.spec.transform?.some(Gp)) {
			u.push(e);
			continue;
		}
		let t = Sg(e);
		t ? l.add(t) : u.push(e);
	}
	let { dataFlow: d } = lg(e, t, a, c);
	await n.waitUntilReady(), e.invalidateSizeCache();
	for (let e of l) e.repropagate();
	if (u.length) {
		let e = xg(u);
		await Promise.all(Array.from(e.entries()).map(([e, t]) => mg(e, t, void 0, { queueReload: !0 })));
	}
	return gg(e), d;
}
function bg(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return kn;
		n.push(e);
	}), n;
}
function xg(e) {
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
			let t = cg(e);
			t && r.add(t);
		}
	}
	return t;
}
function Sg(e) {
	let t = e.dataParent;
	for (; t;) {
		let e = t.flowHandle?.collector;
		if (e) return e.completed ? e : void 0;
		t = t.dataParent;
	}
}
//#endregion
//#region ../core/src/genome/genomeStore.js
var Cg = class {
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
			let e = wg(r);
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
			return new gu({ name: e });
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
		let r = new gu({
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
			let n = new gu({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new gu({
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
		let r = new gu({
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
function wg(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
var Tg = {
	pages: ["Lato-Regular.png"],
	chars: [
		{
			id: 87,
			width: 53,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 43.491,
			chnl: 15,
			x: 0,
			y: 0,
			page: 0
		},
		{
			id: 124,
			width: 17,
			height: 50,
			xoffset: 0,
			yoffset: -32.193000000000005,
			xadvance: 10.521,
			chnl: 15,
			x: 0,
			y: 42,
			page: 0
		},
		{
			id: 40,
			width: 20,
			height: 49,
			xoffset: 0,
			yoffset: -32.571000000000005,
			xadvance: 11.214,
			chnl: 15,
			x: 0,
			y: 94,
			page: 0
		},
		{
			id: 41,
			width: 19,
			height: 49,
			xoffset: 0,
			yoffset: -32.571000000000005,
			xadvance: 11.214,
			chnl: 15,
			x: 0,
			y: 145,
			page: 0
		},
		{
			id: 36,
			width: 32,
			height: 49,
			xoffset: 0,
			yoffset: -34.419000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 0,
			y: 196,
			page: 0
		},
		{
			id: 125,
			width: 21,
			height: 48,
			xoffset: 0,
			yoffset: -32.193000000000005,
			xadvance: 12.642000000000001,
			chnl: 15,
			x: 0,
			y: 247,
			page: 0
		},
		{
			id: 91,
			width: 22,
			height: 48,
			xoffset: 0,
			yoffset: -32.193000000000005,
			xadvance: 12.852,
			chnl: 15,
			x: 0,
			y: 297,
			page: 0
		},
		{
			id: 93,
			width: 19,
			height: 48,
			xoffset: 0,
			yoffset: -32.193000000000005,
			xadvance: 12.852,
			chnl: 15,
			x: 0,
			y: 347,
			page: 0
		},
		{
			id: 123,
			width: 21,
			height: 48,
			xoffset: 0,
			yoffset: -32.193000000000005,
			xadvance: 12.642000000000001,
			chnl: 15,
			x: 0,
			y: 397,
			page: 0
		},
		{
			id: 106,
			width: 19,
			height: 48,
			xoffset: 0,
			yoffset: -30.639000000000003,
			xadvance: 10.08,
			chnl: 15,
			x: 0,
			y: 447,
			page: 0
		},
		{
			id: 81,
			width: 43,
			height: 47,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 33.621,
			chnl: 15,
			x: 21,
			y: 447,
			page: 0
		},
		{
			id: 77,
			width: 45,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 38.997,
			chnl: 15,
			x: 66,
			y: 447,
			page: 0
		},
		{
			id: 64,
			width: 43,
			height: 44,
			xoffset: 0,
			yoffset: -28.539,
			xadvance: 35.133,
			chnl: 15,
			x: 23,
			y: 397,
			page: 0
		},
		{
			id: 92,
			width: 28,
			height: 43,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 18.984,
			chnl: 15,
			x: 68,
			y: 397,
			page: 0
		},
		{
			id: 47,
			width: 28,
			height: 43,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 18.984,
			chnl: 15,
			x: 98,
			y: 397,
			page: 0
		},
		{
			id: 109,
			width: 42,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 34.545,
			chnl: 15,
			x: 113,
			y: 447,
			page: 0
		},
		{
			id: 119,
			width: 42,
			height: 31,
			xoffset: 0,
			yoffset: -21.315,
			xadvance: 32.991,
			chnl: 15,
			x: 157,
			y: 447,
			page: 0
		},
		{
			id: 42,
			width: 25,
			height: 42,
			xoffset: 0,
			yoffset: -31.626,
			xadvance: 17.85,
			chnl: 15,
			x: 128,
			y: 397,
			page: 0
		},
		{
			id: 37,
			width: 42,
			height: 41,
			xoffset: 0,
			yoffset: -30.387,
			xadvance: 33.663000000000004,
			chnl: 15,
			x: 155,
			y: 397,
			page: 0
		},
		{
			id: 79,
			width: 42,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 33.621,
			chnl: 15,
			x: 199,
			y: 397,
			page: 0
		},
		{
			id: 102,
			width: 24,
			height: 41,
			xoffset: 0,
			yoffset: -30.534000000000002,
			xadvance: 14.721,
			chnl: 15,
			x: 243,
			y: 397,
			page: 0
		},
		{
			id: 100,
			width: 31,
			height: 41,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 23.520000000000003,
			chnl: 15,
			x: 269,
			y: 397,
			page: 0
		},
		{
			id: 98,
			width: 32,
			height: 41,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 23.520000000000003,
			chnl: 15,
			x: 302,
			y: 397,
			page: 0
		},
		{
			id: 56,
			width: 32,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 336,
			y: 397,
			page: 0
		},
		{
			id: 38,
			width: 40,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 29.904000000000003,
			chnl: 15,
			x: 370,
			y: 397,
			page: 0
		},
		{
			id: 108,
			width: 17,
			height: 41,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 9.912,
			chnl: 15,
			x: 412,
			y: 397,
			page: 0
		},
		{
			id: 107,
			width: 31,
			height: 41,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 21.336000000000002,
			chnl: 15,
			x: 431,
			y: 397,
			page: 0
		},
		{
			id: 48,
			width: 33,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 464,
			y: 397,
			page: 0
		},
		{
			id: 71,
			width: 38,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 30.681,
			chnl: 15,
			x: 21,
			y: 347,
			page: 0
		},
		{
			id: 83,
			width: 31,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 22.785,
			chnl: 15,
			x: 61,
			y: 347,
			page: 0
		},
		{
			id: 63,
			width: 27,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 18.795,
			chnl: 15,
			x: 94,
			y: 347,
			page: 0
		},
		{
			id: 105,
			width: 18,
			height: 41,
			xoffset: 0,
			yoffset: -30.639000000000003,
			xadvance: 10.08,
			chnl: 15,
			x: 123,
			y: 347,
			page: 0
		},
		{
			id: 51,
			width: 32,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 143,
			y: 347,
			page: 0
		},
		{
			id: 104,
			width: 31,
			height: 41,
			xoffset: 0,
			yoffset: -30.933000000000003,
			xadvance: 23.436,
			chnl: 15,
			x: 177,
			y: 347,
			page: 0
		},
		{
			id: 67,
			width: 37,
			height: 41,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 28.056,
			chnl: 15,
			x: 210,
			y: 347,
			page: 0
		},
		{
			id: 88,
			width: 37,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 27.258000000000003,
			chnl: 15,
			x: 249,
			y: 347,
			page: 0
		},
		{
			id: 68,
			width: 40,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 31.941000000000003,
			chnl: 15,
			x: 288,
			y: 347,
			page: 0
		},
		{
			id: 70,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 23.751,
			chnl: 15,
			x: 330,
			y: 347,
			page: 0
		},
		{
			id: 34,
			width: 23,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 15.561000000000002,
			chnl: 15,
			x: 364,
			y: 347,
			page: 0
		},
		{
			id: 72,
			width: 38,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 32.067,
			chnl: 15,
			x: 389,
			y: 347,
			page: 0
		},
		{
			id: 73,
			width: 18,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 11.760000000000002,
			chnl: 15,
			x: 429,
			y: 347,
			page: 0
		},
		{
			id: 74,
			width: 24,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 17.745,
			chnl: 15,
			x: 449,
			y: 347,
			page: 0
		},
		{
			id: 75,
			width: 38,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 27.825000000000003,
			chnl: 15,
			x: 24,
			y: 297,
			page: 0
		},
		{
			id: 76,
			width: 31,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 21.567,
			chnl: 15,
			x: 475,
			y: 347,
			page: 0
		},
		{
			id: 66,
			width: 35,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 27.153000000000002,
			chnl: 15,
			x: 64,
			y: 297,
			page: 0
		},
		{
			id: 78,
			width: 38,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 32.067,
			chnl: 15,
			x: 101,
			y: 297,
			page: 0
		},
		{
			id: 33,
			width: 18,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 11.298,
			chnl: 15,
			x: 141,
			y: 297,
			page: 0
		},
		{
			id: 80,
			width: 34,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 25.221,
			chnl: 15,
			x: 161,
			y: 297,
			page: 0
		},
		{
			id: 65,
			width: 38,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 28.434,
			chnl: 15,
			x: 197,
			y: 297,
			page: 0
		},
		{
			id: 82,
			width: 36,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 26.313000000000002,
			chnl: 15,
			x: 237,
			y: 297,
			page: 0
		},
		{
			id: 35,
			width: 33,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 275,
			y: 297,
			page: 0
		},
		{
			id: 84,
			width: 34,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.801000000000002,
			chnl: 15,
			x: 310,
			y: 297,
			page: 0
		},
		{
			id: 85,
			width: 37,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 30.891000000000002,
			chnl: 15,
			x: 346,
			y: 297,
			page: 0
		},
		{
			id: 86,
			width: 38,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 28.434,
			chnl: 15,
			x: 385,
			y: 297,
			page: 0
		},
		{
			id: 39,
			width: 16,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 8.568000000000001,
			chnl: 15,
			x: 425,
			y: 297,
			page: 0
		},
		{
			id: 69,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.255000000000003,
			chnl: 15,
			x: 443,
			y: 297,
			page: 0
		},
		{
			id: 89,
			width: 36,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 26.208000000000002,
			chnl: 15,
			x: 23,
			y: 247,
			page: 0
		},
		{
			id: 90,
			width: 34,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 25.284000000000002,
			chnl: 15,
			x: 477,
			y: 297,
			page: 0
		},
		{
			id: 49,
			width: 31,
			height: 40,
			xoffset: 0,
			yoffset: -30.156000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 61,
			y: 247,
			page: 0
		},
		{
			id: 50,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 94,
			y: 247,
			page: 0
		},
		{
			id: 57,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 128,
			y: 247,
			page: 0
		},
		{
			id: 94,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 162,
			y: 247,
			page: 0
		},
		{
			id: 96,
			width: 21,
			height: 40,
			xoffset: 0,
			yoffset: -30.429000000000002,
			xadvance: 16.8,
			chnl: 15,
			x: 196,
			y: 247,
			page: 0
		},
		{
			id: 55,
			width: 33,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 219,
			y: 247,
			page: 0
		},
		{
			id: 54,
			width: 33,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 254,
			y: 247,
			page: 0
		},
		{
			id: 53,
			width: 32,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 289,
			y: 247,
			page: 0
		},
		{
			id: 52,
			width: 33,
			height: 40,
			xoffset: 0,
			yoffset: -30.093000000000004,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 323,
			y: 247,
			page: 0
		},
		{
			id: 103,
			width: 31,
			height: 39,
			xoffset: 0,
			yoffset: -21.630000000000003,
			xadvance: 21.84,
			chnl: 15,
			x: 358,
			y: 247,
			page: 0
		},
		{
			id: 112,
			width: 32,
			height: 39,
			xoffset: 0,
			yoffset: -21.651,
			xadvance: 23.541,
			chnl: 15,
			x: 391,
			y: 247,
			page: 0
		},
		{
			id: 113,
			width: 31,
			height: 39,
			xoffset: 0,
			yoffset: -21.651,
			xadvance: 23.520000000000003,
			chnl: 15,
			x: 425,
			y: 247,
			page: 0
		},
		{
			id: 116,
			width: 25,
			height: 39,
			xoffset: 0,
			yoffset: -28.182000000000002,
			xadvance: 15.057,
			chnl: 15,
			x: 458,
			y: 247,
			page: 0
		},
		{
			id: 121,
			width: 31,
			height: 38,
			xoffset: 0,
			yoffset: -21.273,
			xadvance: 21.651,
			chnl: 15,
			x: 34,
			y: 196,
			page: 0
		},
		{
			id: 59,
			width: 18,
			height: 36,
			xoffset: 0,
			yoffset: -20.706,
			xadvance: 10.983,
			chnl: 15,
			x: 485,
			y: 247,
			page: 0
		},
		{
			id: 43,
			width: 32,
			height: 34,
			xoffset: 0,
			yoffset: -24.486,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 67,
			y: 196,
			page: 0
		},
		{
			id: 60,
			width: 30,
			height: 33,
			xoffset: 0,
			yoffset: -23.331000000000003,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 101,
			y: 196,
			page: 0
		},
		{
			id: 62,
			width: 31,
			height: 33,
			xoffset: 0,
			yoffset: -23.331000000000003,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 133,
			y: 196,
			page: 0
		},
		{
			id: 117,
			width: 30,
			height: 32,
			xoffset: 0,
			yoffset: -21.273,
			xadvance: 23.415000000000003,
			chnl: 15,
			x: 166,
			y: 196,
			page: 0
		},
		{
			id: 99,
			width: 29,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 20.055,
			chnl: 15,
			x: 198,
			y: 196,
			page: 0
		},
		{
			id: 110,
			width: 31,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 23.436,
			chnl: 15,
			x: 229,
			y: 196,
			page: 0
		},
		{
			id: 111,
			width: 32,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 23.814,
			chnl: 15,
			x: 262,
			y: 196,
			page: 0
		},
		{
			id: 126,
			width: 32,
			height: 26,
			xoffset: 0,
			yoffset: -16.128,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 201,
			y: 447,
			page: 0
		},
		{
			id: 101,
			width: 31,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 22.176000000000002,
			chnl: 15,
			x: 296,
			y: 196,
			page: 0
		},
		{
			id: 114,
			width: 25,
			height: 32,
			xoffset: 0,
			yoffset: -21.651,
			xadvance: 15.288,
			chnl: 15,
			x: 329,
			y: 196,
			page: 0
		},
		{
			id: 115,
			width: 27,
			height: 32,
			xoffset: 0,
			yoffset: -21.609,
			xadvance: 18.186,
			chnl: 15,
			x: 356,
			y: 196,
			page: 0
		},
		{
			id: 97,
			width: 28,
			height: 32,
			xoffset: 0,
			yoffset: -21.651,
			xadvance: 20.874000000000002,
			chnl: 15,
			x: 385,
			y: 196,
			page: 0
		},
		{
			id: 118,
			width: 31,
			height: 31,
			xoffset: 0,
			yoffset: -21.273,
			xadvance: 21.672,
			chnl: 15,
			x: 415,
			y: 196,
			page: 0
		},
		{
			id: 61,
			width: 31,
			height: 29,
			xoffset: 0,
			yoffset: -19.089000000000002,
			xadvance: 24.360000000000003,
			chnl: 15,
			x: 448,
			y: 196,
			page: 0
		},
		{
			id: 120,
			width: 30,
			height: 31,
			xoffset: 0,
			yoffset: -21.273,
			xadvance: 20.916,
			chnl: 15,
			x: 21,
			y: 145,
			page: 0
		},
		{
			id: 58,
			width: 18,
			height: 31,
			xoffset: 0,
			yoffset: -20.706,
			xadvance: 10.5,
			chnl: 15,
			x: 53,
			y: 145,
			page: 0
		},
		{
			id: 122,
			width: 28,
			height: 31,
			xoffset: 0,
			yoffset: -21.273,
			xadvance: 18.984,
			chnl: 15,
			x: 73,
			y: 145,
			page: 0
		},
		{
			id: 95,
			width: 28,
			height: 16,
			xoffset: 0,
			yoffset: 0,
			xadvance: 19.278000000000002,
			chnl: 15,
			x: 235,
			y: 447,
			page: 0
		},
		{
			id: 45,
			width: 23,
			height: 24,
			xoffset: 0,
			yoffset: -14.175,
			xadvance: 15.603000000000002,
			chnl: 15,
			x: 481,
			y: 196,
			page: 0
		},
		{
			id: 44,
			width: 17,
			height: 21,
			xoffset: 0,
			yoffset: -4.956,
			xadvance: 9.534,
			chnl: 15,
			x: 103,
			y: 145,
			page: 0
		},
		{
			id: 46,
			width: 18,
			height: 15,
			xoffset: 0,
			yoffset: -4.956,
			xadvance: 9.912,
			chnl: 15,
			x: 0,
			y: 497,
			page: 0
		},
		{
			id: 32,
			width: 0,
			height: 0,
			xoffset: 0,
			yoffset: 0,
			xadvance: 10.752,
			chnl: 15,
			x: 20,
			y: 497,
			page: 0
		}
	],
	info: {
		face: "Lato Regular",
		size: 42,
		bold: 0,
		italic: 0,
		charset: /* @__PURE__ */ " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".split(""),
		unicode: 1,
		stretchH: 100,
		smooth: 1,
		aa: 1,
		padding: [
			0,
			0,
			0,
			0
		],
		spacing: [2, 2]
	},
	common: {
		lineHeight: 50.400000000000006,
		base: 41.454,
		scaleW: 512,
		scaleH: 512,
		pages: 1,
		packed: 0,
		alphaChnl: 0,
		redChnl: 0,
		greenChnl: 0,
		blueChnl: 0
	},
	kernings: []
}, Eg = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
}, Dg = {
	family: "Lato",
	style: "normal",
	weight: 400
}, Og = class {
	constructor(e, t) {
		this._prepareBitmap = e, this.fontRepository = "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/", this._fonts = new Ft([], JSON.stringify), this._metadataPromises = /* @__PURE__ */ new Map(), this._fontPromises = /* @__PURE__ */ new Map(), this._promises = [];
		let n = t && e?.(t);
		this._defaultFontEntry = {
			metrics: rr(Tg),
			bitmapUrl: t
		}, n && this._promises.push(n), this._fonts.set(Dg, this._defaultFontEntry);
	}
	async waitUntilReady() {
		await Promise.all(this._promises);
	}
	getFont(e = Dg.family, t = "normal", n = 400) {
		let r = kg(e, t, n), i = this._fonts.get(r);
		return i || (i = {
			metrics: void 0,
			bitmapUrl: void 0
		}, this._fonts.set(r, i), this._promises.push(this._loadFontEntry(i, r))), i;
	}
	async _loadFontEntry(e, t) {
		try {
			let n = Ng(await this._loadMetadata(t.family), t), r = this.fontRepository + jg(t.family) + "/" + n.replace(/\.\w+/, "");
			e.bitmapUrl = r + ".png";
			let i = this._loadFont(r + ".json"), a = this._prepareBitmap?.(e.bitmapUrl), [o] = await Promise.all([i, a]);
			e.metrics = o;
		} catch {
			console.warn(`Cannot load font: "${t.family}". Using the embedded default font.`), e.metrics = this._defaultFontEntry.metrics, e.bitmapUrl = this._defaultFontEntry.bitmapUrl;
		}
	}
	_loadFont(e) {
		let t = this._fontPromises.get(e);
		return t || (t = fetch(e).then((e) => {
			if (!e.ok) throw Error("Could not load font: " + e.status);
			return e;
		}).then((e) => e.json()).then((e) => rr(e)), this._fontPromises.set(e, t)), t;
	}
	_loadMetadata(e) {
		let t = jg(e), n = this._metadataPromises.get(t);
		if (!n) {
			let e = this.fontRepository + t + "/METADATA.pb";
			n = fetch(e).then((t) => {
				if (!t.ok) throw Error("Could not load font metadata. Response status: " + t.status + ", url: " + e);
				return t;
			}).then((e) => e.text()).then((e) => Mg(e)).catch((e) => {
				console.warn(e.message);
			}), this._metadataPromises.set(t, n);
		}
		return n;
	}
	getDefaultFont() {
		return this._defaultFontEntry;
	}
};
function kg(e, t, n) {
	return {
		family: e.toLowerCase() == "sans-serif" ? Dg.family : e,
		style: t,
		weight: Ag(n)
	};
}
function Ag(e) {
	if (C(e)) {
		let t = Eg[e.toLowerCase()];
		if (!t) throw Error("Unknown font weight: " + e);
		return t;
	}
	return e;
}
function jg(e) {
	return e.toLowerCase().replaceAll(/[^\w]/g, "");
}
function Mg(e) {
	let t = e.split("\n"), n = [], r;
	for (let e of t) if (e.startsWith("fonts {") && (r = {
		name: void 0,
		style: void 0,
		weight: void 0,
		filename: void 0,
		post_script_name: void 0,
		full_name: void 0,
		copyright: void 0
	}), e.startsWith("}") && (n.push(r), r = void 0), r) {
		let t = e.match(/^\s*([A-Za-z_]+):[ ]?"(.*)"$/);
		if (t) {
			let e = t[1];
			r[e] = t[2];
		}
		if (t = e.match(/^\s*([A-Za-z_]+):[ ]?(\d+)$/), t) {
			let e = t[1];
			r[e] = +t[2];
		}
	}
	return n;
}
function Ng(e, t) {
	let n, r = Infinity;
	for (let i of e) if (t.family.localeCompare(i.name, void 0, { sensitivity: "accent" }) == 0 && t.style == i.style) {
		let e = Math.abs(t.weight - i.weight);
		e < r && (r = e, n = i);
	}
	return n?.filename;
}
//#endregion
//#region ../core/src/tooltip/refseqGeneTooltipHandler.js
var Pg = /* @__PURE__ */ new Map(), Fg = { Organism: "Homo sapiens" };
async function Ig(e, t, n = {}) {
	let r = e.symbol, i = {
		...Fg,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = Pg.get(r) ?? await zg(i);
	return a ? (Pg.set(r, a), G`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function Lg(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: Bg(e),
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
var Rg = ic(Lg, 500);
function zg(e) {
	return Rg(e);
}
function Bg(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region ../core/src/utils/formatObject.js
var Vg = N(".4~r"), Hg = N(".4~e");
function Ug(e) {
	return e == null ? G` <span class="na">NA</span> ` : C(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : je(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? Hg(e) : Vg(e) : Ne(e) ? e ? "True" : "False" : w(e) ? G`${e.map((t, n) => [Ug(t), n < e.length - 1 ? ", " : K])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region ../core/src/tooltip/flattenDatumRows.js
function Wg(e) {
	let t = [];
	return Gg(Object.entries(e), t), t;
}
function Gg(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? Gg(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region ../core/src/tooltip/configuredTooltipRows.js
var Kg = /* @__PURE__ */ new WeakMap();
function qg(e, t) {
	let n = t.encoding.tooltip;
	if (n === void 0) return;
	if (n === null) return [];
	let r = Array.isArray(n) ? n : [n];
	if (r.length === 0) throw Error("The tooltip channel array must not be empty.");
	return r.map((n) => Jg(e, t, n));
}
function Jg(e, t, n) {
	let r = Yg(t, n), i = r(e), a = "format" in n && n.format && typeof i == "number" && Number.isFinite(i) ? N(n.format)(i) : i;
	return {
		key: Xg(n),
		value: a,
		...r.sourceField ? { sourceField: r.sourceField } : {},
		...a === i ? {} : { formatted: !0 }
	};
}
function Yg(e, t) {
	let n = Kg.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), Kg.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = Te("tooltip", t, e.unitView.paramRuntime);
	return "field" in t && (i.sourceField = t.field), n.set(t, i), i;
}
function Xg(e) {
	if ("title" in e && e.title !== void 0) return e.title === null ? "" : e.title;
	if ("field" in e) return e.field;
	if ("expr" in e) return e.expr;
	if ("datum" in e) return "datum";
	if ("value" in e) return "value";
	throw Error("Invalid tooltip channel definition: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/tooltip/tooltipContext.js
var Zg = {
	x: "x2",
	y: "y2"
}, Qg = /* @__PURE__ */ new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), $g = /* @__PURE__ */ new WeakMap();
function e_(e, t, n) {
	let r = t_(t), i = r_("x", e, t, r, h_(n, "x")), a = r_("y", e, t, r, h_(n, "y")), o = i.rows.length > 0 && a.rows.length > 0, s = [...o ? n_("x", i.rows) : i.rows, ...o ? n_("y", a.rows) : a.rows], c = /* @__PURE__ */ new Set();
	for (let n of [i, a]) for (let i of n.usedLinearizedFields) {
		let n = r.get(i);
		!n || n.ambiguous || g_(e, i, n, t) && (c.add(n.chrom), c.add(n.pos));
	}
	return {
		tooltipRows: qg(e, t),
		hiddenRowKeys: [...c],
		genomicRows: s,
		flattenDatumRows: () => Wg(e),
		formatGenomicLocus: (e, n) => f_(t, e, n),
		formatGenomicInterval: (e, n) => p_(t, e, n)
	};
}
function t_(e) {
	let t = $g.get(e);
	if (t) return t;
	let n = u_(e);
	return $g.set(e, n), n;
}
function n_(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function r_(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = l_(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = l_(n, Zg[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? i_(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = o_(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: f_(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: f_(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: p_(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: f_(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function i_(e, t, n) {
	if (!t || e.value === t.value) return "locus";
	let r = a_(e.field, n), i = a_(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function a_(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function o_(e, t, n) {
	let r = s_(e.field, n), i = s_(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function s_(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = c_(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function c_(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function l_(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = _(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function u_(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = v(e.as), i = v(e.pos), a = d_(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
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
function d_(e, t) {
	let n = v(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function f_(e, t, n) {
	return m_(e, t)?.formatLocus(n);
}
function p_(e, t, n) {
	return m_(e, t)?.formatInterval(n);
}
function m_(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function h_(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!Qg.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function g_(e, t, n, r) {
	let i = m_(r, n.channel);
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
async function __(e, t, r, i) {
	let a = (e) => n(e).join("."), o = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), s = (e, n, r) => {
		for (let [i, s] of Object.entries(t.encoders)) {
			let t = s ? _(s)?.fields : void 0;
			if (t && t.some((t) => t === e || a(t) === e)) switch (i) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? o(n) ? G`
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
	}, c = i ?? e_(e, t, r), l = c.tooltipRows ? c.tooltipRows : c.flattenDatumRows ? c.flattenDatumRows() : Wg(e), u = c.genomicRows ?? [], d = new Set(c.hiddenRowKeys ?? []), f = l.filter((t) => !d.has(t.key) || s(t.sourceField ?? t.key, t.value, e)), p = [...u, ...f];
	if (!p.length) return;
	let m = G`
        <table class="attributes">
            ${p.map((t) => {
		let n = t.formatted ? t.value : Ug(t.value), r = s(t.sourceField ?? t.key, t.value, e);
		return G`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, h = t.unitView.getTitleText();
	return G`${h ? G`
              <div class="title">
                  <strong>${h}</strong>
              </div>
          ` : ""}${m}`;
}
//#endregion
//#region ../core/src/genome/assemblyPreflight.js
function v_(e) {
	let t = [], n = !1, r = b_(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function y_(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = v_(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function b_(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), Pn(e, r), t;
}
//#endregion
//#region ../core/src/scales/viewLevelScaleProps.js
function x_(e) {
	let t = [];
	for (let n of e.getDescendants()) {
		let e = n.spec.scales;
		if (e) for (let [r, i] of Object.entries(e)) t.push(w_(n, r, i));
	}
	return t;
}
function S_(e) {
	C_(e);
	let t = x_(e);
	for (let e of t) e.resolution && e.resolution.attachViewLevelScaleProps(e.view, e.props);
	return t;
}
function C_(e) {
	let t = new Set(e.getDescendants()), n = E_(e);
	for (let e of n) {
		let n = e.getViewLevelScaleProps();
		n && t.has(n.view) && e.clearViewLevelScaleProps(n.view);
	}
}
function w_(e, t, n) {
	let r = T_(e, t);
	if (r.size > 1) throw Error(`View-level scales.${t} maps to multiple scale resolutions. Move scales.${t} closer to the intended subtree or configure scale resolution explicitly.`);
	return {
		view: e,
		channel: t,
		props: n,
		resolution: r.values().next().value
	};
}
function T_(e, t) {
	let n = /* @__PURE__ */ new Set();
	return Nn(e, (r) => {
		if (r !== e && r.getConfiguredOrDefaultResolution(t, "scale") === "excluded") return kn;
		let i = r.getScaleResolution(t);
		i && n.add(i);
	}), n;
}
function E_(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getDescendants()) for (let e of Object.values(n.resolutions.scale)) t.add(e);
	return t;
}
//#endregion
//#region ../core/src/scales/viewLevelGuideProps.js
var D_ = {
	declarationKey: "axes",
	resolutionType: "axis",
	getResolution: (e, t) => e.getAxisResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.axis),
	attach: (e, t, n) => e.attachViewLevelAxisProps(t, n),
	getAttachedProps: (e) => e.getViewLevelAxisProps(),
	clear: (e, t) => e.clearViewLevelAxisProps(t)
}, O_ = {
	declarationKey: "legends",
	resolutionType: "legend",
	getResolution: (e, t) => e.getLegendResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.legend),
	attach: (e, t, n) => e.attachViewLevelLegendProps(t, n),
	getAttachedProps: (e) => e.getViewLevelLegendProps(),
	clear: (e, t) => e.clearViewLevelLegendProps(t)
};
function k_(e) {
	return M_(e, D_);
}
function A_(e) {
	return M_(e, O_);
}
function j_(e) {
	I_(e, D_), I_(e, O_);
}
function M_(e, t) {
	I_(e, t);
	let n = N_(e, t);
	for (let e of n) e.resolution && t.attach(e.resolution, e.view, e.props);
	return n;
}
function N_(e, t) {
	let n = [];
	for (let r of e.getDescendants()) {
		let e = r.spec[t.declarationKey];
		if (e) for (let [i, a] of Object.entries(e)) n.push(P_(r, t, i, a));
	}
	return n;
}
function P_(e, t, n, r) {
	let i = F_(e, t, n);
	if (i.size > 1) throw Error(`View-level ${t.declarationKey}.${n} maps to multiple ${t.resolutionType} resolutions. Move ${t.declarationKey}.${n} closer to the intended subtree or configure ${t.resolutionType} resolution explicitly.`);
	return {
		view: e,
		channel: n,
		props: r,
		resolution: i.values().next().value
	};
}
function F_(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	return Nn(e, (i) => {
		if (i !== e && i.getConfiguredOrDefaultResolution(n, t.resolutionType) === "excluded") return kn;
		let a = t.getResolution(i, n);
		a && r.add(a);
	}), r;
}
function I_(e, t) {
	let n = new Set(e.getDescendants()), r = L_(e, t);
	for (let e of r) {
		let r = t.getAttachedProps(e);
		r && n.has(r.view) && t.clear(e, r.view);
	}
}
function L_(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e.getDescendants()) for (let e of t.getAllResolutions(r)) n.add(e);
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/viewHierarchyConfig.js
function R_(e) {
	Xf(e), Zf(e);
}
function z_(e) {
	B_(e.getDescendants());
}
function B_(e) {
	for (let t of e) t.configurePostScaleParams(), t.configureViewOpacity(), t.finalizeParamRuntimeInitialization();
}
//#endregion
//#region ../core/src/view/containerMutationHelper.js
function V_(e) {
	return typeof e == "object" && !!e && typeof e.getChildren == "function";
}
var H_ = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n, insertAt: r, removeAt: i } = this.options.getChildSpecs(), a = t ?? n.length, o = this.options.defaultName?.(a, e) ?? this.container.getNextAutoName("child"), s = !1, c = !1, l = await this.container.context.createOrImportView(e, this.container, this.container, o, void 0, this.options.createViewOptions);
		try {
			r(a, e), s = !0;
			let t = this.options.insertView(l, a);
			c = !0, S_(this.container), k_(this.container), A_(this.container), await y_(l, this.container.context.genomeStore), this.options.prepareView && await this.options.prepareView(l, a, t);
			let n = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(l, a, t) : void 0, i = U_(this.container, l, t, n);
			B_(i), await yg(this.container, this.container.context.dataFlow, this.container.context.fontManager, i);
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
		C_(this.container), j_(this.container), this.options.removeView(e), n(e), this.options.afterRemove && await this.options.afterRemove(e), S_(this.container), k_(this.container), A_(this.container);
		let r = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(void 0, void 0, void 0) : void 0;
		await this.initializeUninitializedChromeViews(r), this.options.requestLayout !== !1 && t.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
	}
	async initializeUninitializedChromeViews(e = [this.container]) {
		if (this.container.getDataInitializationState() === "none") return;
		let t = /* @__PURE__ */ new Set();
		for (let n of e) W_(n, t);
		B_(t), await yg(this.container, this.container.context.dataFlow, this.container.context.fontManager, t);
	}
};
function U_(e, t, n, r) {
	let i = G_(t, n);
	for (let t of r ?? [e]) W_(t, i);
	return i;
}
function W_(e, t = /* @__PURE__ */ new Set()) {
	for (let n of e.getDescendants()) if (Wn(n) && n.getDataInitializationState() === "none") for (let e of n.getDescendants()) e.getDataInitializationState() === "none" && t.add(e);
	return t;
}
function G_(e, t) {
	return V_(t) ? new Set(Array.from(t.getChildren()).flatMap((e) => e.getDescendants())) : new Set(e.getDescendants());
}
//#endregion
//#region ../core/src/view/multiscale.js
var K_ = .5;
function q_(e) {
	return "multiscale" in e && w(e.multiscale);
}
function J_(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = Y_(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => {
		if (e.multiscale.length === 1) return n;
		let i = {
			...Z_(r, e.multiscale.length, t),
			layer: [n]
		};
		return t.transition && jn(i, [{
			name: "multiscaleOpacity",
			expr: Q_(r, e.multiscale.length, t),
			transition: t.transition
		}]), i;
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function Y_(e, t) {
	let n = "unitsPerPixel", r, i = "auto", a = K_, o;
	if (w(e)) r = X_(e, t, "stops");
	else if (x(e)) n = e.metric ?? "unitsPerPixel", r = X_(e.values, t, "stops.values"), i = e.channel ?? "auto", o = e.transition, a = o ? K_ : e.fade ?? K_;
	else throw Error("\"stops\" must be an array or an object with \"values\".");
	if (n !== "unitsPerPixel") throw Error("Only \"unitsPerPixel\" is supported for \"stops.metric\" in multiscale.");
	if (![
		"x",
		"y",
		"auto"
	].includes(i)) throw Error("\"stops.channel\" must be one of \"x\", \"y\", or \"auto\".");
	if (!o && (!Number.isFinite(a) || a < 0 || a > .5)) throw Error("\"stops.fade\" must be a finite number in range [0, 0.5].");
	if (o && i === "auto") throw Error("Transitioned multiscale stops require \"stops.channel\" to be \"x\" or \"y\".");
	if (r.forEach((e, t) => {
		if (!L(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !r.some(L)) {
		let e = r;
		for (let t = 1; t < e.length; t++) if (e[t - 1] <= e[t]) throw Error("\"stops.values\" must be strictly decreasing for \"unitsPerPixel\".");
		if (!o) {
			for (let t = 0; t < e.length - 1; t++) if (e[t] * (1 - a) <= e[t + 1] * (1 + a)) throw Error("Adjacent transitions overlap. Reduce fade or increase stop spacing.");
		}
	}
	return {
		metric: n,
		values: r,
		channel: i,
		fade: a,
		transition: o
	};
}
function X_(e, t, n) {
	if (!w(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!L(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function Z_(e, t, n) {
	return n.transition ? { opacity: { expr: "multiscaleOpacity" } } : { opacity: ev(e, t, n) };
}
function Q_(e, t, n) {
	let r = n.channel === "x" ? "width" : "height", i = `abs(span(domain('${n.channel}'))) / max(${r}, 1)`;
	return e === 0 ? i + " >= " + $_(n.values[0]) + " ? 1 : 0" : e === t - 1 ? i + " < " + $_(n.values.at(-1)) + " ? 1 : 0" : i + " < " + $_(n.values[e - 1]) + " && " + i + " >= " + $_(n.values[e]) + " ? 1 : 0";
}
function $_(e) {
	return L(e) ? "(" + e.expr + ")" : String(e);
}
function ev(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: tv(e, 1 + n.fade),
		lo: tv(e, 1 - n.fade)
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
function tv(e, t) {
	return L(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region ../core/src/view/viewSpecGuards.js
function nv(e) {
	return "mark" in e && (C(e.mark) || x(e.mark));
}
function rv(e) {
	return "layer" in e && x(e.layer);
}
function iv(e) {
	return "import" in e;
}
function av(e) {
	return "vconcat" in e && w(e.vconcat);
}
function ov(e) {
	return "hconcat" in e && w(e.hconcat);
}
function sv(e) {
	return "concat" in e && w(e.concat);
}
//#endregion
//#region ../core/src/view/layerView.js
var Y = class extends tr {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e, this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		this.#e = await Promise.all(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!rv(e) && !nv(e) && !q_(e)) throw new Xn("LayerView accepts only unit, layer, or multiscale specs as children!", this);
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
		We(this.spec.layer, e, t), We(this.#e, e, t), this.context.requestLayoutReflow();
	}
	#t() {
		return new H_(this, {
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
}, cv = class {
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
}, lv = {
	x: "axisX",
	y: "axisY"
}, uv = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, dv = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function fv(e, { channel: t, orient: n, type: r, style: i }) {
	let a = pf();
	for (let [o, s] of e.entries()) {
		let c = lv[t], l = n ? uv[n] : void 0, u = r ? dv[r] : void 0, d = e.slice(0, o + 1), f = [
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
var pv = "chromosome_ticks_and_labels", mv = "labels_main", hv = "ticks_and_labels", gv = "axisExtent", _v = "labelWidth", vv = "labelVisible", yv = "labelOffset", bv = "chromLabelWidth", xv = 4, Sv = 5, Cv = 10, wv = 2;
function Tv(e) {
	return e == "x" ? "y" : "x";
}
var Ev = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, Dv = Object.fromEntries(Object.entries(Ev).map(([e, t]) => t.map((t) => [t, e])).flat(1));
function X(e) {
	return Dv[e];
}
function Ov(e) {
	switch (e) {
		case "left": return "right";
		case "right": return "left";
		case "top": return "bottom";
		case "bottom": return "top";
		default: throw Error("Invalid axis orient: " + e);
	}
}
function kv(e) {
	let t = e.placement === "inside" ? Ov(e.orient) : e.orient;
	return {
		tickSide: t,
		anchor: +(t == "bottom" || t == "left"),
		offsetDirection: t == "bottom" || t == "right" ? 1 : -1
	};
}
function Av(e) {
	return !e || e.axisProps.placement === "inside" ? 0 : Math.max(e.getPerpendicularSize() + (e.axisProps.offset ?? 0), 0);
}
var jv = class extends Y {
	#e;
	#t;
	#n;
	#r = !1;
	#i = !1;
	constructor(e, t, n, r, i, a) {
		let o = X(e.orient), s = i.getScaleResolution(o), c = s.isZoomable(), l = s.hasConfiguredZoomExtent(), u = fv(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), d = Dl(i.getConfigScopes(), "text", void 0), f = {
			...u,
			...e
		}, p = t == "locus", m = {
			...u,
			...zv(t, f),
			...e,
			...p ? Rv(f) : {}
		};
		super(p ? Gv(m, t, d, c, l) : Wv(m, t, c, l, a?.labelClipPolicy ?? "pixel", d), n, r, i, `axis_${e.orient}`, a), this.labelClipPolicy = a?.labelClipPolicy ?? "pixel", this.axisProps = m, this.#e = Nv(m), this.#t = this.paramRuntime.allocateSetter(gv, this.#e), U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof J && e.name === mv);
		e instanceof J && (this.#n = e), !(!this.axisProps.labels || !this.#n) && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#o()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return Dv[this.axisProps.orient] == "x" ? new fn(t, e) : new fn(e, t);
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
		let e = X(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !t.isDomainDefinedExplicitly() && !t.isDomainInitialized() || t && Mv(t.getScale())) return;
		let n = Lv(this.axisProps, this.#n);
		if (n === void 0) return;
		let r = Nv(this.axisProps, n);
		r >= this.#e + wv && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function Mv(e) {
	let t = e.domain();
	return z(e.type) && t.length >= 2 && t.every((e) => e === t[0]);
}
function Nv(e, t) {
	let n = Pv(e);
	return e.labels && (n += t ?? Fv(e)), Iv(e, n);
}
function Pv(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function Fv(e) {
	return X(e.orient) == "x" ? e.labelFontSize : Cv;
}
function Iv(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function Lv(e, t) {
	let n = t?.getCollector();
	if (!n?.completed) return;
	let r = 0;
	n.visitData((e) => {
		r = Math.max(r, Number(e[_v]) || 0);
	});
	let i = t.mark, a = i.font.metrics;
	if (!a) return;
	let o = iu(a, Number(i.properties.size)), s = ou({
		width: r,
		height: o
	}, e.labelAngle, X(e.orient) == "x" ? "vertical" : "horizontal");
	return Math.ceil(s);
}
function Rv(e) {
	switch (kv(e).tickSide) {
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
function zv(e, t) {
	let n = kv(t).tickSide, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
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
function Bv(e, t) {
	let n = t.labelAngle % 90 == 0, r = t.labelOverlap;
	if (r === void 0) return Uv(e) && n ? "auto" : !1;
	if (r === !1) return !1;
	if (n) return r === !0 ? "parity" : r;
	throw Error("Axis label overlap removal requires an axis-aligned label angle.");
}
function Vv(e, t, n) {
	let r = t.labelAngle % 90 == 0, i = t.labelFlush;
	if (i === void 0) return X(t.orient) == "x" && Uv(e) && !n && r ? 1 : !1;
	if (i === !1) return !1;
	if (!Uv(e)) throw Error("Axis label flushing requires a quantitative, index, or locus axis.");
	if (r) return i === !0 ? 1 : i;
	throw Error("Axis label flushing requires an axis-aligned label angle.");
}
function Hv(e, t, n, r) {
	return t.labelFlush !== !1 && X(t.orient) == "x" && Uv(e) && t.labelAngle % 90 == 0 && n && r;
}
function Uv(e) {
	switch (e) {
		case "quantitative":
		case "index":
		case "locus": return !0;
		case "nominal":
		case "ordinal": return !1;
		default: throw Error("Invalid axis field type: " + e);
	}
}
function Wv(e, t, n, r, i = "pixel", a = {}, o) {
	let s = e, c = Kv(s.labelFont, s.labelFontStyle, s.labelFontWeight, s.labelFontSize, a), l = Bv(t, s), u = Vv(t, s, n), d = Hv(t, s, n, r), f = !!o || !!l || u !== !1 || d, p = X(s.orient), m = Tv(p), { anchor: h, offsetDirection: g, tickSide: _ } = kv(s), v = () => ({
		field: "value",
		type: t
	}), y = () => ({
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
	}), b = () => ({
		name: mv,
		transform: f ? [{
			type: "filter",
			expr: `datum.${vv}`
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
				field: yv,
				type: "quantitative",
				scale: null
			} } : {},
			text: { field: "label" }
		}
	}), x = () => {
		let e = [{
			type: "measureText",
			field: "label",
			as: _v,
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
				as: bv,
				fontSize: t.size,
				font: t.font,
				fontStyle: t.fontStyle,
				fontWeight: t.fontWeight
			});
		}
		return f && e.push({
			type: "axisLabelLayout",
			channel: p,
			labelWidth: _v,
			labelFontSize: c.size,
			labelAngle: s.labelAngle,
			labelAlign: s.labelAlign,
			labelBaseline: s.labelBaseline,
			labelFlush: u,
			labelFlushZoomExtent: d,
			labelFlushOffset: s.labelFlushOffset ?? 0,
			labelOffset: yv,
			labelOverlap: l,
			labelSeparation: s.labelSeparation ?? 2,
			labelVisible: vv,
			...o ? {
				chromLabelWidth: bv,
				chromLabelAlign: o.align,
				chromLabelPadding: o.padding,
				chromLabelSpacing: Sv
			} : {}
		}), e;
	}, S = () => ({
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
			[m + "2"]: { value: { expr: `${h} - ${s.tickSize} / ${gv} * ${h ? 1 : -1}` } }
		}
	}), C = () => ({
		name: "title",
		data: { values: [{}] },
		mark: {
			...s.titleFit === "range" ? {
				[p]: 0,
				[p + "2"]: 1,
				[p === "x" ? "flushX" : "flushY"]: !0
			} : { [p]: .5 },
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
	}), w = () => {
		let e = {
			name: hv,
			transform: s.labels ? x() : void 0,
			encoding: { [p]: v() },
			layer: []
		};
		return s.ticks && e.layer.push(S()), s.labels && e.layer.push(b()), e;
	}, T = {
		resolve: { scale: { [p]: "forced" } },
		domainInert: !0,
		data: { lazy: {
			type: "axisTicks",
			channel: p,
			axis: e
		} },
		layer: []
	};
	return s.domain && T.layer.push(y()), (s.ticks || s.labels) && T.layer.push(w()), s.title && T.layer.push(C()), T;
}
function Gv(e, t, n = {}, r = !0, i = !1) {
	let a = e, o = Kv(a.chromLabelFont, a.chromLabelFontStyle, a.chromLabelFontWeight, a.chromLabelFontSize, n), s = X(a.orient), c = Tv(s), { anchor: l, tickSide: u } = kv(a), d = {
		textStyle: o,
		align: u == "right" ? "left" : a.chromLabelAlign,
		padding: xv
	}, f = () => ({
		name: "chromosome_ticks",
		mark: {
			type: "rule",
			strokeDash: e.chromTickDash,
			strokeDashOffset: e.chromTickDashOffset,
			[c]: l,
			[c + "2"]: { expr: `${l} - ${a.chromTickSize} / ${gv} * ${l ? 1 : -1}` },
			color: e.chromTickColor,
			size: a.chromTickWidth
		}
	}), p = () => {
		let n;
		switch (u) {
			case "top":
				n = {
					y: 0,
					angle: 0,
					paddingX: d.padding,
					dy: -a.chromLabelPadding,
					viewportEdgeFadeWidthLeft: 20,
					viewportEdgeFadeWidthRight: 20,
					viewportEdgeFadeDistanceRight: -10,
					viewportEdgeFadeDistanceLeft: -20
				};
				break;
			case "bottom":
				n = {
					y: 1,
					angle: 0,
					paddingX: d.padding,
					dy: a.chromLabelPadding + a.chromLabelFontSize * .73,
					viewportEdgeFadeWidthLeft: 20,
					viewportEdgeFadeWidthRight: 20,
					viewportEdgeFadeDistanceRight: -10,
					viewportEdgeFadeDistanceLeft: -20
				};
				break;
			case "left":
				n = {
					x: 1,
					angle: -90,
					paddingY: d.padding,
					dy: -a.chromLabelPadding,
					viewportEdgeFadeWidthBottom: 20,
					viewportEdgeFadeWidthTop: 20,
					viewportEdgeFadeDistanceBottom: -20,
					viewportEdgeFadeDistanceTop: -10
				};
				break;
			case "right":
				n = {
					x: 0,
					angle: 90,
					align: "right",
					paddingY: d.padding,
					dy: -a.chromLabelPadding
				};
				break;
			default: n = {};
		}
		return {
			name: "chromosome_labels",
			mark: {
				type: "text",
				size: o.size,
				font: o.font,
				fontWeight: o.fontWeight,
				fontStyle: o.fontStyle,
				color: a.chromLabelColor,
				align: e.chromLabelAlign,
				baseline: "alphabetic",
				clip: !1,
				...n
			},
			encoding: {
				[s + "2"]: {
					field: "continuousEnd",
					type: t
				},
				text: { field: "name" }
			}
		};
	}, m = Wv({
		...e,
		...Rv(e)
	}, t, r, i, "pixel", n, e.chromLabels ? d : void 0);
	if (e.chromTicks || e.chromLabels) {
		let n = {
			name: pv,
			data: { lazy: {
				type: "axisGenome",
				channel: X(a.orient)
			} },
			encoding: { [s]: {
				field: "continuousStart",
				type: t,
				band: 0
			} },
			layer: []
		};
		e.chromTicks && n.layer.push(f()), e.chromLabels && n.layer.push(p()), m.layer.push(n);
	}
	return m;
}
function Kv(e, t, n, r, i) {
	return {
		font: e ?? i.font,
		fontStyle: t ?? i.fontStyle,
		fontWeight: n ?? i.fontWeight,
		size: r ?? i.size
	};
}
//#endregion
//#region ../core/src/view/interactionRouting.js
function qv(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function Jv(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region ../core/src/utils/ringBuffer.js
var Yv = class {
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
function Xv(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function Zv(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function Qv(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function $v(e) {
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
}, ey = 0, ty = /* @__PURE__ */ new WeakMap(), ny = dy(), ry = 6;
function iy() {
	ey = performance.now();
}
function ay() {
	return performance.now() - ey < 50;
}
function oy(e) {
	return function(...t) {
		return iy(), e(...t);
	};
}
function sy(e, t, n, r, i) {
	n = oy(n);
	let a = fy(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, o = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		a.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = cy(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = ly(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - ly(e.y, r.datum)) * t.height + t.y);
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
		let t = new Yv(30), r = e.mouseEvent;
		r.preventDefault(), e.target?.context.suspendHoverTracking();
		let o = Z.fromMouseEvent(r), s = (e) => {
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
		}, c = (r) => {
			document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", c), e.target?.context.resumeHoverTracking(r), my(a, t, o, n, i, { minSampleCount: 5 });
		};
		document.addEventListener("mouseup", c, !1), document.addEventListener("mousemove", s, !1);
	} else if (e.type == "touchgesture") {
		if (!Xv(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: o, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && my(a, a.touchPanEventBuffer, a.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), py(a);
			return;
		}
		a.touchPanPointerCount !== t.pointerCount && (py(a), a.touchPanPointerCount = t.pointerCount);
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
function cy(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = ly(r.x, n.datum) * t.width + t.x, s = (1 - ly(r.y, n.datum)) * t.height + t.y, c = ly(r.x2, n.datum) * t.width + t.x, l = (1 - ly(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, ry) : ry, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function ly(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = uy(e.channelDef);
	if (r.type === "band" || r.type === "point") return Number.isFinite(i) ? n + r.bandwidth() * i : n;
	if (r.type === "index" || r.type === "locus") {
		if (!Number.isFinite(i)) return n;
		let e = r;
		return n + e.step() * (i - e.align());
	} else return n;
}
function uy(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function dy() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new Yv(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function fy(e) {
	if (!e) return ny;
	let t = ty.get(e);
	return t || (t = dy(), ty.set(e, t)), t;
}
function py(e) {
	e.touchPanEventBuffer = new Yv(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function my(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && hy(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = vn(i, (e) => {
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
function hy(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region ../core/src/view/axisGridView.js
var gy = class extends Y {
	constructor(e, t, n, r, i, a) {
		super(by(e, t), n, r, i, `axisGrid_${e.orient}`, a), this.axisProps = e, U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function _y(e, t) {
	let n = e, r = X(n.orient);
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
function vy(e, t) {
	let n = e, r = X(n.orient);
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
function yy(e, t) {
	let n = e, r = X(n.orient);
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
function by(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push(yy(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(vy(n, t)), n.grid && n.gridOpacity > 0 && r.push(_y(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[X(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region ../core/src/config/titleConfig.js
function xy(e) {
	return B(e.map((e) => e.title));
}
function Sy(e, t) {
	return El(e, t);
}
//#endregion
//#region ../core/src/view/titleView.js
var Cy = {
	start: 0,
	middle: .5,
	end: 1
}, wy = {
	start: "left",
	middle: "center",
	end: "right"
}, Ty = "group-title", Ey = "group-subtitle";
function Dy(e) {
	return ky({
		subtitleColor: e.color,
		subtitleFont: e.font,
		subtitleFontSize: e.fontSize,
		subtitleFontStyle: e.fontStyle,
		subtitleFontWeight: e.fontWeight
	});
}
function Oy(e) {
	return ky({
		subtitleColor: e.subtitleColor,
		subtitleFont: e.subtitleFont,
		subtitleFontSize: e.subtitleFontSize,
		subtitleFontStyle: e.subtitleFontStyle,
		subtitleFontWeight: e.subtitleFontWeight,
		subtitlePadding: e.subtitlePadding
	});
}
function ky(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function Ay(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = Cy[e.anchor ?? "middle"];
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
function jy(e, t = []) {
	if (!e) return;
	let n = C(e) ? { text: e } : e;
	if (!n.text) return;
	let r = xy(t), i = Sy(t, n.style ?? Ty), a = Dy(Sy(t, Ey)), o = {
		...r,
		...i,
		...a,
		...Oy(r),
		...n
	};
	if (o.orient == "none") return;
	let { orientConfig: s } = Ay(o);
	return {
		...r,
		...s,
		...i,
		...a,
		...Oy(r),
		...n
	};
}
function My(e, t) {
	let n = e.subtitle ? Hy(e, t) + (e.subtitlePadding ?? 0) : 0, r = e.offset + (Py(e.orient) ? n : 0);
	return Fy(e.orient, r);
}
function Ny(e, t) {
	let n = Vy(e, t) + (e.subtitlePadding ?? 0), r = e.offset + (Py(e.orient) ? 0 : n);
	return Fy(e.orient, r);
}
function Py(e) {
	switch (e) {
		case "top":
		case "left": return !0;
		case "right":
		case "bottom": return !1;
		default: return !1;
	}
}
function Fy(e, t) {
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
function Iy(e, t) {
	return ru(t.fontManager, e ?? {});
}
function Ly(e, t) {
	return ru(t.fontManager, Gy(e));
}
function Ry(e, t) {
	Iy(e, t), e.subtitle && Ly(e, t);
}
function zy(e, t) {
	if (!e || e.reserve === !1 || e.orient == "none" || e.offset < 0) return V.zero();
	let n = By(e, t), r = Math.ceil(n + Math.max(e.offset ?? 0, 0));
	switch (e.orient) {
		case "top": return new V(r, 0, 0, 0);
		case "right": return new V(0, r, 0, 0);
		case "bottom": return new V(0, 0, r, 0);
		case "left": return new V(0, 0, 0, r);
		default: return V.zero();
	}
}
function By(e, t) {
	let n = Vy(e, t);
	if (!e.subtitle) return n;
	let r = Hy(e, t);
	return n + (e.subtitlePadding ?? 0) + r;
}
function Vy(e, t) {
	let n = Iy(e, t), r = Uy(e.fontSize, 12);
	return Wy(e, t, e.text, n.metrics, r);
}
function Hy(e, t) {
	let n = Ly(e, t), r = Uy(e.subtitleFontSize, 11);
	return Wy(e, t, e.subtitle, n.metrics, r);
}
function Uy(e, t) {
	return L(e) ? t : e ?? t;
}
function Wy(e, t, n, r, i) {
	let a = L(e.angle) ? 0 : e.angle ?? 0, o = e.orient == "top" || e.orient == "bottom" ? "vertical" : "horizontal";
	return ou(Ky(n, t, r, i), a, o);
}
function Gy(e) {
	return {
		font: e.subtitleFont,
		fontStyle: e.subtitleFontStyle,
		fontWeight: e.subtitleFontWeight
	};
}
function Ky(e, t, n, r) {
	if (n) return qy(e, n, r);
	let i = t.fontManager.getDefaultFont().metrics;
	return i ? qy(e, i, r) : {
		width: 0,
		height: r
	};
}
function qy(e, t, n) {
	return au(t, typeof e == "string" ? e : String(e.expr), n);
}
function Jy(e, t, n, r) {
	return {
		type: "text",
		tooltip: null,
		clip: !1,
		...t,
		...n,
		text: r ? e.subtitle : e.text,
		align: e.align ?? wy[e.anchor ?? "middle"],
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
function Yy(e, t) {
	let { xy: n } = Ay(e), r = [{
		name: "title",
		data: { values: [{}] },
		mark: Jy(e, n, My(e, t), !1)
	}];
	return e.subtitle && r.push({
		name: "subtitle",
		data: { values: [{}] },
		mark: Jy(e, n, Ny(e, t), !0)
	}), r;
}
var Xy = class e extends tr {
	#e;
	titleSpec;
	static create(t, n, r, i, a, o, s) {
		let c = jy(t, n);
		return c ? new e(c, r, i, a, o, s) : void 0;
	}
	constructor(e, t, n, r, i, a) {
		Ry(e, t);
		let o = Yy(e, t);
		super({ layer: [] }, t, n, r, i, a), this.titleSpec = e, U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 }), this.#e = o.map((e, n) => new J(e, t, this, r, i + "-" + (e.name ?? n)));
	}
	*[Symbol.iterator]() {
		yield* this.#e;
	}
	getOverhang() {
		return zy(this.titleSpec, this.context);
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.arrange(e, t, n);
			e.popView(this);
		}
	}
}, Zy = class extends J {
	#e;
	#t = W.ZERO;
	#n = W.ZERO;
	#r = W.ZERO;
	viewportOffset = 0;
	#i;
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
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t), U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 }), this.config = r, this.#e = t, this.#i = n.onViewportOffsetChange;
		let i = this.config.scrollbarPadding, a = this.config.scrollbarSize;
		this.#t = this.#e == "vertical" ? new W(() => this.#n.x + this.#n.width - a - i, () => this.#n.y + i + this.scrollOffset, () => a, () => this.#s()) : new W(() => this.#n.x + i + this.scrollOffset, () => this.#n.y + this.#n.height - a - i, () => this.#s(), () => a), this.#f(this.viewportOffset), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#c() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault(), this.context.suspendHoverTracking();
			let r = this.scrollOffset, i = n(e.mouseEvent), a = (e) => {
				let t = this.#c();
				if (t <= 0) return;
				let a = st(n(e) - i + r, 0, t);
				this.interpolateViewportOffset({ x: this.#u(a) });
			}, o = (e) => {
				document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o), this.context.resumeHoverTracking(e);
			};
			document.addEventListener("mouseup", o, !1), document.addEventListener("mousemove", a, !1);
		});
	}
	get scrollOffset() {
		return this.#l(this.viewportOffset);
	}
	setViewportOffset(e, { notify: t = !0, syncSmoother: n = !1 } = {}) {
		this.viewportOffset = st(e, 0, this.#d()), n && this.#f(this.viewportOffset), t && this.#i && this.#i(this.viewportOffset);
	}
	#a() {
		let e = this.#e == "horizontal" ? "width" : "height", t = this.#n[e], n = this.#r[e];
		return n > 0 ? Math.min(1, t / n) : 1;
	}
	#o() {
		let e = this.#e == "horizontal" ? "width" : "height";
		return Math.max(0, this.#n[e] - 2 * this.config.scrollbarPadding);
	}
	#s() {
		let e = this.#o(), t = this.#a() * e, n = this.config.scrollbarMinLength;
		return Math.min(e, Math.max(n, t));
	}
	#c() {
		return Math.max(0, this.#o() - this.#s());
	}
	#l(e) {
		let t = this.#d(), n = this.#c();
		return t <= 0 || n <= 0 ? 0 : e / t * n;
	}
	#u(e) {
		let t = this.#d(), n = this.#c();
		return t <= 0 || n <= 0 ? 0 : e / n * t;
	}
	#d() {
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
	#f(e) {
		this.interpolateViewportOffset = vn(this.context.animator, (e) => {
			this.setViewportOffset(e.x, {
				notify: !0,
				syncSmoother: !1
			});
		}, 35, .4, { x: e });
	}
};
//#endregion
//#region ../core/src/config/viewConfig.js
function Qy(e, t) {
	let n = ["cell", ...Tl(t?.style)];
	return B(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
var $y = {
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
	symbolType: "circle",
	symbolSize: 100,
	symbolOffset: 0,
	symbolStrokeWidth: 1.5,
	symbolBaseFillColor: "transparent",
	symbolBaseStrokeColor: "#888",
	titleLimit: 180,
	titleOrient: "top",
	titlePadding: 5
}, eb = {
	orient: "bottom",
	direction: "horizontal",
	titleOrient: "left",
	spacing: 15,
	offset: 3
}, tb = {
	"track-bottom-legend": eb,
	"track-bottom": eb
}, nb = { style: "track-bottom-legend" }, rb = "_legendLabelWidth", ib = "_legendSymbolSize", ab = "_legendStrokeWidth", ob = 200, sb = 256, cb = 4, lb = 40, ub = 2, db = {
	fillOpacity: 0,
	shadowOpacity: 0,
	strokeOpacity: 0
};
function fb(e) {
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
	]) t?.forEach(fb);
	return e;
}
function pb(e) {
	return {
		fill: e.backgroundFill,
		fillOpacity: e.backgroundFill ? e.backgroundFillOpacity ?? 1 : 0,
		stroke: e.backgroundStroke,
		strokeWidth: e.backgroundStrokeWidth,
		strokeOpacity: e.backgroundStroke ? e.backgroundStrokeOpacity ?? 1 : 0,
		shadowOpacity: 0
	};
}
function mb(e, t) {
	let n = e.title;
	if (!n) return;
	let r = e.titleFontSize ?? 11, i = e.titlePadding ?? 5, a = yb(e), o = Math.ceil(Bb(e, t)) + i;
	return {
		name: "title",
		width: a ? o : void 0,
		height: a ? { grow: 1 } : r + i,
		view: db,
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
			x: vb(e) == "right" && o > 0 ? i / o : 0,
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
function hb(e, t, n, r = []) {
	let i = mb(e, n), a;
	return a = i ? vb(e) == "bottom" ? { vconcat: [t, i] } : vb(e) == "left" ? { hconcat: [i, t] } : vb(e) == "right" ? { hconcat: [t, i] } : { vconcat: [i, t] } : { vconcat: [t] }, fb({
		name: "legend_" + (e.orient ?? "right"),
		padding: e.padding,
		view: pb(e),
		resolve: { scale: Object.fromEntries(r.map((e) => [e, "forced"])) },
		spacing: 0,
		...a
	});
}
function gb(e) {
	return e.direction == "horizontal";
}
function _b(e) {
	return e.orient == "top" || e.orient == "bottom";
}
function vb(e) {
	return e.titleOrient ?? "top";
}
function yb(e) {
	let t = vb(e);
	return t == "left" || t == "right";
}
function bb(e) {
	return e.gradientStrokeColor === void 0 ? 0 : e.gradientStrokeWidth ?? 0;
}
function xb(e) {
	if (e !== void 0) return e == "transparent" ? { value: null } : { value: e };
}
function Sb({ channel: e, dataType: t, horizontalPixelScale: n, verticalPixelScale: r, legend: i, symbolStyle: a }) {
	let o = a.encoding ?? {}, s = o.color ?? o.stroke ?? o.fill ?? xb(i.symbolBaseStrokeColor);
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
function Cb({ entries: e, channel: t, symbolChannels: n = {}, symbolStyle: r = {}, symbolGeometry: i = "point", legend: a, format: o, dataType: s, context: c }) {
	let l = i == "stroke", u = a.labelAlign ?? "left", d = a.labelBaseline ?? "middle", f = a.labelFontSize ?? 10, p = /* @__PURE__ */ new Set([t, ...Object.keys(n)]), m = (e) => p.has(e) || p.has("color"), h = Object.fromEntries([["fill", xb(a.symbolBaseFillColor)], ["stroke", xb(a.symbolBaseStrokeColor)]].filter(([e, t]) => !m(e) && t !== void 0).map(([e, t]) => [e, t])), g = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, _ = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, v = [l ? Sb({
		channel: t,
		dataType: s,
		horizontalPixelScale: g,
		verticalPixelScale: _,
		legend: a,
		symbolStyle: r
	}) : {
		name: "symbols",
		mark: {
			type: "point",
			clip: !1,
			cullByVisibleRange: !1,
			filled: t == "fill",
			shape: a.symbolType,
			size: a.symbolSize,
			strokeWidth: a.symbolStrokeWidth,
			...r.mark
		},
		encoding: {
			x: {
				field: "entryX",
				type: "quantitative",
				scale: g,
				axis: null,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: _,
				axis: null
			},
			[t]: {
				field: "value",
				type: s,
				domainInert: !0
			},
			...h,
			...r.encoding,
			...Object.fromEntries(Object.entries(n).map(([e]) => [e, {
				field: "value",
				type: s,
				domainInert: !0
			}]))
		}
	}];
	return v.push({
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
				scale: g,
				axis: null,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: _,
				axis: null
			},
			text: { field: "label" }
		}
	}), hb(a, {
		name: "legendBody",
		height: { grow: 1 },
		view: db,
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
				as: rb,
				fontSize: f,
				font: a.labelFont,
				fontStyle: a.labelFontStyle,
				fontWeight: a.labelFontWeight
			},
			{
				type: "packLegendLabels",
				labelWidth: rb,
				columns: a.columns,
				symbolSize: l ? a.symbolSize : t == "size" ? ib : a.symbolSize,
				symbolStrokeWidth: l ? ab : a.symbolStrokeWidth,
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
		layer: v
	}, c, [t, ...Object.keys(n)]);
}
function wb({ channel: e, legend: t, format: n, context: r }) {
	let i = gb(t), a = t.gradientThickness ?? 12, o = t.gradientStrokeWidth ?? 0, s = bb(t), c = s > 0, l = t.gradientLength === void 0 ? {
		grow: 1,
		minPx: lb + s
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
	}, _ = f, v = _ + p, y = v + cb, b = y, x = b + a, S = a, C = a + cb, w = C + p, T = i ? "x" : "y", E = T + "2", D = i ? "y" : "x", O = D + "2", k = i ? h : m, ee = "_legendGradientBandStart", A = "_legendGradientBandStop", te = "_legendGradientTickStart", ne = "_legendGradientTickStop", re = "_legendGradientLabelPosition", j = (e, t, n) => ({
		field: e,
		type: "quantitative",
		scale: t,
		axis: null,
		...n ? { buildIndex: !1 } : {}
	}), ie = { lazy: {
		type: "legendGradientTicks",
		channel: e,
		count: t.tickCount ?? 5,
		format: n,
		values: t.values
	} }, ae = [
		{
			type: "formula",
			expr: "" + (i ? v : S),
			as: te
		},
		{
			type: "formula",
			expr: "" + (i ? y : C),
			as: ne
		},
		{
			type: "formula",
			expr: "" + (i ? _ : w),
			as: re
		}
	], M = [{
		name: "gradientRamp",
		transform: [{
			type: "formula",
			expr: "" + (i ? b : 0),
			as: ee
		}, {
			type: "formula",
			expr: "" + (i ? x : a),
			as: A
		}],
		mark: {
			type: "rect",
			clip: !1,
			opacity: t.gradientOpacity
		},
		encoding: {
			[T]: j(i ? "position0" : "position1", g, T == "x"),
			[E]: {
				field: i ? "position1" : "position0",
				type: "quantitative",
				scale: g
			},
			[D]: j(ee, k, D == "x"),
			[O]: {
				field: A,
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
		data: ie,
		transform: ae,
		layer: [{
			name: "gradientTicks",
			mark: {
				type: "rule",
				clip: !1
			},
			encoding: {
				[T]: j("position", g, T == "x"),
				[E]: {
					field: "position",
					type: "quantitative",
					scale: g
				},
				[D]: j(te, k, D == "x"),
				[O]: {
					field: ne,
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
				as: rb,
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
				[T]: j("position", g, T == "x"),
				[D]: j(re, k, D == "x"),
				text: { field: "label" }
			}
		}]
	}];
	return c && M.push({
		name: "gradientBorder",
		data: { values: [{
			position0: 0,
			position1: 1,
			[ee]: i ? b : 0,
			[A]: i ? x : a
		}] },
		mark: {
			type: "rect",
			clip: !1,
			fillOpacity: 0,
			stroke: t.gradientStrokeColor,
			strokeWidth: o
		},
		encoding: {
			[T]: j("position0", g, T == "x"),
			[E]: {
				field: "position1",
				type: "quantitative",
				scale: g
			},
			[D]: j(ee, k, D == "x"),
			[O]: {
				field: A,
				type: "quantitative",
				scale: k
			}
		}
	}), hb(t, {
		name: "gradientBody",
		padding: s / 2,
		width: i ? l : void 0,
		height: i ? { grow: 1 } : l,
		view: db,
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
			count: sb
		} },
		layer: M
	}, r, [e]);
}
function Tb(e) {
	return e ? e.getPerpendicularSize() + e.getOffset() : 0;
}
function Eb(e, t, n) {
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
var Db = class extends tr {
	#e;
	#t = [];
	#n;
	#r;
	#i;
	#a;
	#o;
	constructor(e, t, n, r, i, a, o, s) {
		super(Eb("legend_region_" + e, i, n), a, o, s, "legend_region_" + e), this.needsAxes = {
			x: !1,
			y: !1
		}, this.orient = e, this.#a = t, this.#o = n, this.#r = r, this.#n = i, U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		this.#e = await this.context.createOrImportView(Eb("legendStack", this.#n, this.#o), this, this, this.getNextAutoName("legendStack")), U(this.#e, { skipSubtree: !0 }), H(this.#e, { skipSubtree: !0 });
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
		let n = this.#s(), r = this.#o == "horizontal", i = Kn(n.map((e) => {
			let t = e.getSize();
			return r ? t.width : t.height;
		}), r ? e : t, { spacing: this.#n }), a = !Ob(this.#i, i);
		return this.#i = i, a;
	}
	*[Symbol.iterator]() {
		this.#e && (yield this.#e);
	}
	getSize() {
		let { width: e, height: t } = this.#c();
		return new fn(e, t);
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
		let t = e.map((e) => e.getSize().width), n = e.map((e) => e.getSize().height), r = (e) => wn([...e, {
			px: this.#n * Math.max(0, e.length - 1),
			grow: 0
		}]);
		if (this.#r && this.#i && this.#i.length > 1) {
			let e = r(this.#i.map((e) => xn(e.map((e) => this.#o == "horizontal" ? n[e] : t[e])))), i = {
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
			height: xn(n)
		} : {
			width: xn(t),
			height: r(n)
		};
	}
	getPerpendicularSize() {
		let e = this.getSize();
		return gn(this.orient == "top" || this.orient == "bottom" ? e.height : e.width);
	}
	getWidth() {
		return gn(this.getSize().width);
	}
	getHeight() {
		return gn(this.getSize().height);
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
		if (Cn(t) !== void 0) return gn(t);
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
		}), s = this.#i ?? [r.map((e, t) => t)], c = yn(s.map((e) => xn(e.map((e) => o[e]))), i ? t.height : t.width, { spacing: this.#n });
		for (let [l, u] of s.entries()) {
			let s = u.map((e) => a[e]), d = i ? t.width : t.height, f = s.every((e) => Cn(e) !== void 0) ? Sn(s, { spacing: this.#n }) : d, p = kb(this.#a) * Math.max(0, d - f), m = yn(s, f, {
				spacing: this.#n,
				offset: p,
				devicePixelRatio: e.getDevicePixelRatio()
			}), h = c[l];
			for (let [a, s] of u.entries()) {
				let c = r[s], l = m[a], u = gn(o[s]), d = c.legendProps.title != null && vb(c.legendProps) == "top" ? 0 : Math.max(0, (h.size - u) / 2), f = i ? new W(() => t.x + l.location, () => t.y + h.location + d, () => l.size, () => u) : new W(() => t.x + h.location + d, () => t.y + l.location, () => u, () => l.size);
				c.arrange(e, f, n);
			}
		}
		e.popView(this);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), this.#e?.propagateInteraction(e), this.handleInteraction(e, !1);
	}
};
function Ob(e, t) {
	return e?.length == t.length && e.every((e, n) => e.length == t[n].length && e.every((e, r) => e == t[n][r]));
}
function kb(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
var Ab = class extends tr {
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
		let p = a == "gradient" ? wb({
			channel: t,
			legend: o,
			format: s,
			context: l
		}) : Cb({
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
		}, this.legendProps = o, this.#n = a ?? "symbol", this.#e = Nb(this.#n, this.legendProps), U(this, { skipSubtree: !0 }), H(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		let e = { ...this.spec };
		delete e.name, this.#t = await this.context.createOrImportView(e, this, this, this.getNextAutoName("legend"), void 0, { layoutSizeParams: "force" }), U(this.#t, { skipSubtree: !0 }), H(this.#t, { skipSubtree: !0 }), this.#o = [];
		for (let e of this.getDescendants()) e instanceof J && (e.name === "labels" || e.name === "gradientLabels") && this.#o.push(e);
		this.#o.length > 0 && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#p())), this.#a = this.getStackedParallelSize();
	}
	*[Symbol.iterator]() {
		this.#t && (yield this.#t);
	}
	getSize() {
		if (!this.isActive()) return new fn({
			px: 0,
			grow: 0
		}, {
			px: 0,
			grow: 0
		});
		let e = gb(this.legendProps), t = { px: this.getPerpendicularSize() }, n = this.#u() ? this.#l() : { px: this.getStackedParallelSize() };
		return e ? new fn(n, t) : new fn(t, n);
	}
	#l() {
		if (!this.#t) return {
			grow: 1,
			minPx: lb
		};
		let e = this.#t.getSize();
		return gb(this.legendProps) ? e.width : e.height;
	}
	#u() {
		return this.#d() && gb(this.legendProps) == _b(this.legendProps);
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
		let e = this.#i ?? jb(this.#o);
		return Pb(this.legendProps, this.#n, e, this.context);
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
		let e = jb(this.#o);
		if (e === void 0) return;
		let t = this.#a;
		this.#i = e;
		let n = Mb(this.legendProps, this.#n, e, this.context), r = n >= this.#e + ub, i = this.getStackedParallelSize(), a = Math.abs(i - t) >= ub;
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
function jb(e) {
	let t = 0, n = 0, r = 0, i = 0, a = !1;
	for (let o of e) {
		let e = o.getCollector();
		if (!e?.completed) return;
		a = !0, e.visitData((e) => {
			t = Math.max(t, Number(e[rb]) || 0), n = Math.max(n, Number(e.entryWidth) || 0), r = Math.max(r, (Number(e.labelX) || 0) + (Number(e[rb]) || 0)), i = Math.max(i, Number(e.labelY) || 0);
		});
	}
	return a ? {
		maxWidth: Math.ceil(t),
		maxEntryWidth: Math.ceil(n),
		maxX: Math.ceil(r),
		maxY: Math.ceil(i)
	} : void 0;
}
function Mb(e, t, n, r) {
	if (gb(e)) return Fb(e, t, n);
	let i = yb(e) ? zb(e, r) : Bb(e, r), a = e.labelOffset ?? 4, o = t == "gradient" ? (e.gradientThickness ?? 12) + bb(e) + cb + a + n.maxWidth : n.maxEntryWidth || Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5) + a + n.maxWidth;
	return Math.ceil(Math.max(Nb(t, e), yb(e) ? o + i : o, i));
}
function Nb(e, t) {
	return gb(t) && e == "gradient" ? (t.labelFontSize ?? 10) + (t.labelOffset ?? 4) + cb + (t.gradientThickness ?? 12) + bb(t) + 2 : 0;
}
function Pb(e, t, n, r) {
	let i = Rb(e, r), a = yb(e), o = (t) => gb(e) == a ? Math.ceil(i + t) : Math.ceil(Math.max(i, t));
	if (t == "gradient") return o((e.gradientLength ?? ob) + bb(e));
	if (n) {
		let t = e.labelFontSize ?? 10;
		return o(gb(e) ? n.maxX : n.maxY + t / 2);
	} else return o(Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5));
}
function Fb(e, t, n) {
	let r = e.labelFontSize ?? 10, i = e.labelOffset ?? 4, a = Lb(e), o = t == "gradient" ? r + i + cb + (e.gradientThickness ?? 12) + bb(e) + 2 : n.maxY + r / 2;
	return Math.ceil(Math.max(Nb(t, e), yb(e) ? Math.max(a, o) : a + o));
}
function Ib(e) {
	return e.title ? e.titleFontSize ?? 11 : 0;
}
function Lb(e) {
	return e.title ? Ib(e) + (yb(e) ? 0 : e.titlePadding ?? 5) : 0;
}
function Rb(e, t) {
	return yb(e) ? zb(e, t) : Lb(e);
}
function zb(e, t) {
	return e.title ? Bb(e, t) + (e.titlePadding ?? 5) : 0;
}
function Bb(e, t) {
	if (!e.title) return 0;
	let n = ru(t.fontManager, {
		font: e.titleFont,
		fontStyle: e.titleFontStyle,
		fontWeight: e.titleFontWeight
	}).metrics ?? t.fontManager.getDefaultFont().metrics;
	if (!n) return 0;
	let r = e.titleFontSize ?? 11;
	return au(n, th(e.title, e.titleLimit, (e, t) => au(n, e, t).width, r, "..."), r).width;
}
//#endregion
//#region ../core/src/view/gridView/gridChildLegends.js
var Vb = [
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"strokeWidth",
	"shape"
], Hb = /* @__PURE__ */ new Set([
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
]), Ub = /* @__PURE__ */ new Set([
	"left",
	"right",
	"top",
	"bottom",
	...Hb
]);
function Wb(e) {
	let t = e.legendProps.orient ?? "right";
	return Hb.has(t);
}
function Gb(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.visit((e) => {
		t.has(e) || t.set(e, t.size);
	});
	return t;
}
function Kb(e) {
	return String(e.legend.title ?? e.field ?? e.channel).toLocaleLowerCase();
}
function qb(e) {
	let t = Gb(e), n = [];
	for (let t of e) for (let e of Object.values(t.resolutions.legend)) for (let r of e.getLegendDefs()) n.push({
		definition: r,
		resolution: e,
		owner: t
	});
	return n.sort((e, n) => {
		let r = (t.get(e.definition.view) ?? 2 ** 53 - 1) - (t.get(n.definition.view) ?? 2 ** 53 - 1);
		if (r != 0) return r;
		let i = Kb(e.definition).localeCompare(Kb(n.definition));
		return i == 0 ? e.definition.channel.localeCompare(n.definition.channel) : i;
	}), n;
}
function Jb(e) {
	if (e && "condition" in e) {
		let t = Array.isArray(e.condition) ? e.condition : [e.condition];
		for (let e of t) if (e.empty !== !1 && "value" in e) return { value: e.value };
	}
	return I(e) ? { value: e.value } : void 0;
}
function Yb(e) {
	return typeof e == "string";
}
function Xb(e, t, n) {
	Yb(n.fill) && !t.has("fill") && (e.fill = { value: n.fill }), Yb(n.stroke) && !t.has("stroke") && (e.stroke = { value: n.stroke }), Yb(n.color) && !t.has("color") && (n.filled ? (t.has("fill") || (e.fill = { value: n.color }), t.has("stroke") || (e.stroke = { value: null }), t.has("strokeWidth") || (e.strokeWidth = { value: 0 })) : (t.has("stroke") || (e.stroke = { value: n.color }), t.has("fill") || (e.fill = { value: n.color }), t.has("fillOpacity") || (e.fillOpacity = { value: 0 })));
}
function Zb(e, t) {
	return !!f(e.spec.encoding?.[t]);
}
function Qb(e, t, n) {
	[
		"color",
		"fill",
		"stroke"
	].some((e) => !t.has(e) && Zb(n, e)) && !t.has("fill") && (e.fill = { value: "black" });
}
function $b(e, t, n) {
	let r = /* @__PURE__ */ new Set([e, ...Object.keys(t)]), i = {
		mark: {},
		encoding: {}
	}, a = n.mark.properties, o = i.encoding, s = i.mark;
	a.filled !== void 0 && (s.filled = a.filled), a.opacity !== void 0 && (s.opacity = a.opacity), a.fillOpacity !== void 0 && (s.fillOpacity = a.fillOpacity), a.strokeOpacity !== void 0 && (s.strokeOpacity = a.strokeOpacity), a.strokeWidth !== void 0 && (s.strokeWidth = a.strokeWidth), a.shape === void 0 ? n.getMarkType() == "rect" && (s.shape = "square") : s.shape = a.shape, Xb(o, r, a), Qb(o, r, n);
	let c = n.spec.encoding?.color, l = a.filled, u = Jb(c);
	u && !r.has("color") && (l ? (o.fill = u, o.stroke = { value: null }, o.strokeWidth = { value: 0 }) : (o.stroke = u, o.fill = u, o.fillOpacity = { value: 0 }));
	for (let e of Vb) {
		if (e == "color" || r.has(e)) continue;
		let t = n.spec.encoding?.[e], i = Jb(t);
		i && (o[e] = i);
	}
	return i;
}
function ex(e) {
	if (!Ub.has(e)) throw Error(`Invalid legend orientation "${e}"!`);
}
function tx(e, t, n) {
	let r = Fe(t.paramRuntime, e.orient, "Reactive legend orient changes are not supported.", n);
	return r !== void 0 && ex(r), r === e.orient ? e : {
		...e,
		orient: r
	};
}
function nx(e, t, n, r) {
	let i = tx(e, t, n);
	return ge(t.paramRuntime, i, (e) => {
		e.has("disable") && r();
	}, n);
}
async function rx(e, t) {
	let n = e.view, r = [], i, a = nx(e.legend, n, (e) => r.push(e), () => {
		if (!i) throw Error("Legend has not been initialized!");
		i.invalidateSizeCache(), i.context.requestLayoutReflow();
	}), o = e.type == "symbol" ? $b(e.channel, e.symbolChannels ?? {}, e.scaleResolution.getOrderedMembers()[0].view) : void 0;
	i = new Ab({
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
async function ix(e, t, n) {
	let r = t.legendProps.orient ?? "right", i = e[r];
	if (!i) {
		let { anchor: n, direction: a, wrap: o } = _f(t.layoutParent.getConfigScopes(), r), s = new Db(r, n, a, o, t.legendProps.spacing ?? 0, t.context, t.layoutParent, t.dataParent);
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
function* ax(e) {
	for (let t of Object.values(e)) yield t.legendView;
}
function ox(e, t, n) {
	let r = !1;
	for (let i of ax(e)) {
		let e = i.prepareLayoutSize(t, n);
		r ||= e;
	}
	return r;
}
function sx(e) {
	for (let t of ax(e)) t.disposeSubtree();
}
function cx(e, t) {
	let n = e[t];
	return n && ux(n) ? Tb(n.legendView) : 0;
}
function lx(e) {
	return e.resolution.hasVisibleNonChromeMember();
}
function ux(e) {
	return e.entries.some(lx);
}
//#endregion
//#region ../core/src/view/gridView/legendCollection.js
function dx(e) {
	return fx(e.getDescendants());
}
function fx(e) {
	return e.filter((e) => !Bn(e) && Object.keys(e.resolutions.legend).length > 0);
}
function px(e, t) {
	for (let n of e.getDataAncestors()) {
		let e = n.getConfiguredResolution(t, "legend") ?? n.getConfiguredResolution("default", "legend");
		if (e == "excluded") return;
		if (e == "collected") return n;
	}
}
//#endregion
//#region ../core/src/view/viewInteractionListenerTracker.js
var mx = class {
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
function hx(e, t) {
	return t === "integer" ? !0 : t === "auto" ? e === "index" || e === "locus" : !1;
}
function gx(e, t, n = "auto") {
	if (e == null) return null;
	let r = t.getResolvedScaleType(), i = hx(r, n) ? Math.round(e) : e;
	return r === "locus" && t.toComplex ? t.toComplex(i) : i;
}
//#endregion
//#region ../core/src/ruler/rulerMouseEventController.js
var _x = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.#e = new mx(e.view), this.eventConfig = S(n.on ?? "mousemove"), c(this.eventConfig, ["mousemove", "mousedown"], `Ruler param "${t}" currently supports only "mousemove" and "mousedown" in "on".`), this.eventPredicate = T(this.eventConfig), this.clear = n.clear ?? (this.eventConfig.type === "mousemove" && "mouseleave"), this.#n();
	}
	#e;
	eventConfig;
	eventPredicate;
	clear;
	dragging = !1;
	#t(e, t, n) {
		this.#e.add(e, t, n);
	}
	dispose() {
		this.#e.dispose();
	}
	#n() {
		this.eventConfig.type === "mousemove" ? this.#r() : this.#i();
	}
	#r() {
		if (this.#t("mousemove", (e) => {
			this.eventPredicate(e.proxiedMouseEvent) && this.#o(this.#a(e.point));
		}), this.clear === "mouseleave") this.#t("mouseleave", () => {
			this.#o(ue(this.channels));
		});
		else if (this.clear !== !1) throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave" or false in "clear" for mousemove rulers.`);
	}
	#i() {
		if (this.#t("mousedown", (e) => {
			if (e.mouseEvent.button !== 0 || !this.eventPredicate(e.proxiedMouseEvent)) return;
			e.stopPropagation(), this.dragging = !0, this.#o(this.#a(e.point));
			let t = Z.fromMouseEvent(e.mouseEvent).subtract(new Z(e.point.x, e.point.y)), n = (e) => {
				let n = Z.fromMouseEvent(e).subtract(t);
				this.#o(this.#a(n));
			}, r = () => {
				document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), this.dragging = !1, this.clear === "mouseup" && this.#o(ue(this.channels));
			};
			document.addEventListener("mousemove", n), document.addEventListener("mouseup", r);
		}), this.clear === "mouseleave") this.#t("mouseleave", () => {
			this.dragging || this.#o(ue(this.channels));
		});
		else if (this.clear !== !1 && this.clear !== "mouseup") throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave", "mouseup", or false in "clear" for mousedown rulers.`);
	}
	#a(e) {
		let t = ue(this.channels), n = this.gridChild.view.coords.normalizePoint(e.x, e.y, !0);
		for (let e of this.channels) {
			let r = this.scaleResolutions[e], i = r.getScale().invert(e === "x" ? n.x : n.y);
			t.values[e] = gx(i, r, this.config.snap ?? "auto");
		}
		return t;
	}
	#o(e) {
		this.paramRuntime.setValue(this.paramName, e);
	}
}, vx = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		if (n.on !== void 0) throw Error(`Ruler param "${t}" with source "viewport" must not define "on".`);
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.listeners = [], this.update(), this.#e();
	}
	listeners;
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
		for (let { scaleResolution: e, type: t, listener: n } of this.listeners) e.removeEventListener(t, n);
		this.listeners = [];
	}
	update() {
		let e = ue(this.channels);
		for (let t of this.channels) {
			let n = this.scaleResolutions[t], r = n.getScale().invert(.5);
			e.values[t] = gx(r, n, this.config.snap ?? "auto");
		}
		this.paramRuntime.setValue(this.paramName, e);
	}
};
//#endregion
//#region ../core/src/view/gridView/generatedChromeOverlay.js
function yx(e) {
	U(e, { skipSubtree: !0 }), H(e, { skipSubtree: !0 });
}
function bx({ spec: e, context: t, layoutParent: n, dataParent: r, name: i, zindex: a = 1 }) {
	let o = new Y(e, t, n, r, i);
	return yx(o), {
		view: o,
		zindex: a
	};
}
//#endregion
//#region ../core/src/view/gridView/rulerOverlay.js
function xx({ paramName: e, channels: t, display: n = "line", mark: r = {} }) {
	let i = {
		name: "rulerOverlay_" + e,
		domainInert: !0,
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
			expr: Ex(e, t)
		}],
		encoding: {},
		layer: []
	};
	if (n === "band") {
		let n = i.encoding;
		for (let r of t) i.encoding[r] = Tx(Dx(e, r)), n[r + "2"] = Tx(Ox(e, r));
		i.layer.push({
			name: "rulerOverlayBand",
			mark: {
				type: "rect",
				clip: !0,
				fill: "black",
				fillOpacity: .15,
				stroke: "black",
				strokeWidth: 1,
				...r,
				tooltip: null
			}
		});
	} else for (let a of t) {
		let o = Tx(Dx(e, a));
		n === "center" && (o.band = .5);
		let s = {
			name: "rulerOverlayRule" + a.toUpperCase(),
			mark: {
				type: "rule",
				clip: !0,
				stroke: "black",
				strokeWidth: 1,
				opacity: .8,
				...r,
				tooltip: null
			}
		};
		t.length === 1 ? i.encoding[a] = o : s.encoding = { [a]: o }, i.layer.push(s);
	}
	return i;
}
function Sx({ paramName: e, channels: t, display: n, mark: r, context: i, layoutParent: a, dataParent: o, name: s }) {
	return bx({
		spec: xx({
			paramName: e,
			channels: t,
			display: n,
			mark: r
		}),
		context: i,
		layoutParent: a,
		dataParent: o,
		name: s,
		zindex: r?.zindex ?? 1
	});
}
function Cx({ config: e, scaleResolution: t, ...n }) {
	return Sx({
		...n,
		display: wx(t.getResolvedScaleType(), e.snap, e.display),
		mark: e.mark
	});
}
function wx(e, t, n) {
	return n || ((e === "index" || e === "locus") && (t === void 0 || t === "auto" || t === "integer") ? "center" : "line");
}
function Tx(e) {
	return {
		datum: { expr: e },
		axis: null,
		type: null,
		title: null
	};
}
function Ex(e, t) {
	return [e + ".type === 'ruler'", ...t.map((t) => e + ".values." + t + " != null")].join(" && ");
}
function Dx(e, t) {
	return `linearize('${t}', ${e}.values.${t})`;
}
function Ox(e, t) {
	return Dx(e, t) + " + 1";
}
//#endregion
//#region ../core/src/view/gridView/selectionRectSpec.js
var kx = "intervalDragActive";
function Ax({ scaleResolutionSource: e, selectionExpression: t, selection: n, channels: r = Object.keys(n.intervals), brushConfig: i = {} }) {
	let a = { ...i };
	if (delete a.zindex, $e.every((e) => !r.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
	let o = {
		name: "selectionRect",
		domainInert: !0,
		params: [{
			name: kx,
			value: !1
		}],
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: jx(t, r)
		}],
		encoding: {},
		layer: []
	};
	r.includes("x") && (o.encoding.x = Mx(e, t, "x", 0), o.encoding.x2 = Mx(e, t, "x", 1)), r.includes("y") && (o.encoding.y = Mx(e, t, "y", 0), o.encoding.y2 = Mx(e, t, "y", 1)), o.layer.push({
		name: "selectionRectRect",
		mark: {
			type: "rect",
			clip: !0,
			fill: "#808080",
			fillOpacity: .05,
			stroke: "black",
			strokeWidth: 1,
			strokeOpacity: .2,
			cursor: a.cursor ?? { expr: "intervalDragActive ? 'grabbing' : 'move'" },
			...a
		}
	});
	let s = (n) => {
		let r = e.getScaleResolution(n);
		return `format(${t}.intervals.${n}[1] - ${t}.intervals.${n}[0], '.3s')` + (r.type === "locus" ? " + 'b'" : "");
	}, c = i.measure == "inside" ? 9 : i.measure == "outside" ? -9 : 0;
	return r.includes("x") && c != 0 && o.layer.push({
		name: "selectionRectTextX",
		mark: {
			type: "text",
			align: "center",
			paddingX: 5,
			dy: c,
			tooltip: null
		},
		encoding: {
			text: { expr: s("x") },
			y: r.includes("y") ? Mx(e, t, "y", 1) : { value: 1 },
			y2: null
		}
	}), r.includes("y") && c != 0 && o.layer.push({
		name: "selectionRectTextY",
		mark: {
			type: "text",
			align: "center",
			paddingY: 5,
			dy: c,
			tooltip: null,
			angle: -90
		},
		encoding: {
			text: { expr: s("y") },
			x2: null
		}
	}), o;
}
function jx(e, t) {
	return [e + ".type === 'interval'", ...t.map((t) => e + ".intervals." + t + " != null")].join(" && ");
}
function Mx(e, t, n, r) {
	return {
		datum: { expr: Nx(t, n, r) },
		type: e.getScaleResolution(n).type,
		title: null,
		axis: null
	};
}
function Nx(e, t, n) {
	let r = `${e}.intervals.${t}`;
	return `(${r} != null ? ${r}[${n}] : 0)`;
}
//#endregion
//#region ../core/src/view/gridView/selectionRect.js
function Px({ selectionExpr: e, selectionExpression: t, channels: n, brushConfig: r = {}, context: i, layoutParent: a, dataParent: o, scaleResolutionSource: s, name: c = "selectionRect" }) {
	let l = e() ?? at(n), { zindex: u = 1, ...d } = r;
	return bx({
		spec: Ax({
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
var Fx = class {
	constructor(e, t, n, r, i = e.view.paramRuntime, a = !0) {
		this.gridChild = e, this.#e = new mx(e.view), this.#n(t, n, r, i, a);
	}
	gridChild;
	#e;
	#t(e, t, n) {
		this.#e.add(e, t, n);
	}
	dispose() {
		this.#e.dispose();
	}
	#n(e, t, n, i, a) {
		let o = this.gridChild.view, s = n.encodings ?? ["x"], c = Object.fromEntries(s.map((t) => {
			let n = o.getScaleResolution(t), r = n?.getResolvedScaleType();
			if (!n || !r || !z(r)) throw Error(`No continuous scale found for interval selection param "${e}" on channel "${t}"! Scale type is "${r ?? "none"}".`);
			return [t, n];
		})), l = s.some((e) => c[e].isZoomable()), u = n.on ?? (l ? {
			type: "mousedown",
			filter: "event.shiftKey"
		} : { type: "mousedown" });
		if (u.type !== "mousedown") throw Error(`Interval selection param "${e}" currently supports only "mousedown" in "on".`);
		let d = T(u), f = Ix(n.zoom, l, e), p = T(f), m = n.clear, h = T(m);
		if (a && this.gridChild.selectionRect) throw Error("Only one interval selection per container is currently allowed!");
		let g = !1, _ = !1, v = !1, y = null, b = (e, t) => Object.fromEntries(s.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), x = i.createExpression(e), S = (t) => {
			i.setValue(e, t);
		};
		t.value && S({
			type: "interval",
			intervals: t.value
		});
		let C = () => {
			S(at(s));
		};
		a && (this.gridChild.selectionRect = Px({
			selectionExpr: x,
			selectionExpression: e,
			channels: s,
			brushConfig: n.mark,
			context: this.gridChild.layoutParent.context,
			layoutParent: this.gridChild.layoutParent,
			dataParent: o,
			scaleResolutionSource: o
		}));
		let w = a ? (e) => {
			this.gridChild.selectionRect.view.paramRuntime.setValue(kx, e);
		} : () => {}, E = (e) => {
			let t = {
				x: 0,
				y: 0
			}, n = o.coords.normalizePoint(e.x, e.y, !0);
			for (let e of s) {
				let r = c[e].getScale();
				t[e] = r.invert(e == "x" ? n.x : n.y) + (["index", "locus"].includes(r.type) ? .5 : 0);
			}
			return t;
		}, D = (e) => {
			let { intervals: t } = e, n = (e, t, n) => {
				let r = (e, t) => t == null ? null : c[e].getScale()(t), i = r("x", e) ?? n, a = r("y", t) ?? n;
				return o.coords.denormalizePoint(i, a, !0);
			}, r = n(t.x?.[0], t.y?.[0], 0), i = n(t.x?.[1], t.y?.[1], 1);
			return W.create(r.x, r.y, i.x - r.x, i.y - r.y);
		};
		this.#t("mousedown", (e) => {
			if (e.mouseEvent.button != 0) return;
			if (y = g ? D(x()) : null, y) w(!0), _ = !0;
			else {
				let t = e.point;
				if (r(x()) && (_ = !0), d(e.proxiedMouseEvent)) C(), v = !0;
				else if (m && r(x())) {
					let e = (n) => {
						o.removeInteractionListener("mouseup", e);
						let r = n.point;
						t.subtract(r).length < 2 && C();
					};
					o.addInteractionListener("mouseup", e);
					return;
				} else return;
			}
			e.stopPropagation(), o.context.suspendHoverTracking();
			let t = e.point, n = Z.fromMouseEvent(e.mouseEvent).subtract(t), i = (e) => {
				let r = Z.fromMouseEvent(e).subtract(n), i;
				if (y) {
					let e = r.subtract(t), n = y.translate(e.x, e.y);
					i = b(E(new Z(n.x, n.y)), E(new Z(n.x2, n.y2)));
				} else i = b(E(t), E(r));
				for (let e of s) {
					let t = c[e], { zoomExtent: n } = t, r = i[e];
					if (y) {
						let e = r[1] - r[0], t = n[0], i = n[1];
						r[0] < t && (r[0] = t, r[1] = t + e), r[1] > i && (r[1] = i, r[0] = i - e);
					}
					let a = Lx(t, r);
					a ? (r[0] = a[0], r[1] = a[1]) : (r[0] = n[0], r[1] = n[0]);
				}
				S({
					type: "interval",
					intervals: i
				});
			}, a = (e) => {
				document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", a), w(!1), v = !1, y &&= null, o.context.resumeHoverTracking(e);
			};
			document.addEventListener("mousemove", i), document.addEventListener("mouseup", a);
		}), this.#t("click", (e) => {
			e.mouseEvent.button == 0 && (_ &&= (e.stopPropagation(), !1));
		}, !0);
		let O = (e) => Ae(x(), E(e));
		m && this.#t(m.type, (e) => {
			h(e.proxiedMouseEvent) && O(e.point) && (C(), e.stopPropagation());
		}, !0), this.#t("wheel", (e) => {
			let t = e.wheelEvent;
			if (!f || !p($v(t)) || Math.abs(t.deltaX) >= Math.abs(t.deltaY) || !O(e.point)) return;
			let n = x();
			if (!r(n)) return;
			let i = t.deltaMode ? 120 : 1, a = 2 ** (t.deltaY * i / 300), o = E(e.point), l = { ...n.intervals }, u = !1;
			for (let e of s) {
				let t = l[e];
				if (!t || t.length !== 2) continue;
				let n = c[e], r = Lx(n, Xd(n.getScale(), [...t], o[e], a, { onUnsupported: "identity" }));
				r && (r[0] !== t[0] || r[1] !== t[1]) && (l[e] = r, u = !0);
			}
			u && (S({
				...n,
				type: "interval",
				intervals: l
			}), t.preventDefault(), e.stopPropagation());
		}), this.#t("mousemove", (e) => {
			O(e.point) ? v || (g = !0) : g = !1;
		});
	}
};
function Ix(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = S(r);
	return c(i, ["wheel"], `Interval selection param "${n}" currently supports only "wheel" in "zoom".`), i;
}
function Lx(e, t) {
	let n = e.getScale();
	return sd(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
//#endregion
//#region ../core/src/view/gridView/overlayExtent.js
function Rx({ extent: e, ownerSpec: t, channels: n, isAligned: r, label: i }) {
	let a = n.length === 1 ? n[0] : void 0;
	if (!a) {
		if (e === "container") throw Error(`${i} cannot use extent "container" for multiple channels.`);
		return "view";
	}
	let o = e ?? "auto";
	if (!(o === "container" || o === "auto")) return "view";
	if (!(a === "x" && av(t) || a === "y" && ov(t))) {
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
function zx(e) {
	return Bn(e) ? [] : e instanceof J ? Object.keys(e.resolutions.legend).length > 0 ? [e] : [] : e instanceof Y ? [...Object.keys(e.resolutions.legend).length > 0 ? [e] : [], ...Array.from(e).flatMap((e) => zx(e))] : [];
}
function Bx(e) {
	return av(e) || ov(e) || sv(e);
}
var Vx = class {
	#e = [];
	#t = [];
	#n = [];
	#r;
	#i = !1;
	constructor(e, t, n) {
		this.layoutParent = t, this.view = e, this.#r = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {}, this.scrollbars = {}, this.selectionRect = void 0, this.rulerOverlays = [], this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.coords = W.ZERO;
		let r = e.needsAxes.x || e.needsAxes.y, i = e.getParentGridChromePolicy(), a = e.spec, o = "view" in a ? a.view : void 0;
		if (i.background && (r || o)) {
			let r = Qy(e.getConfigScopes(), o);
			this.backgroundZindex = r?.zindex ?? 0, this.backgroundStrokeZindex = r?.strokeZindex;
			let i = Hx(r);
			i && (this.background = new J(i, t.context, t, e, "background" + n), U(this.background, { skipSubtree: !0 }), H(this.background, { skipSubtree: !0 }));
			let a = Ux(r);
			a && (this.backgroundStroke = new J(a, t.context, t, e, "backgroundStroke" + n), U(this.backgroundStroke, { skipSubtree: !0 }), H(this.backgroundStroke, { skipSubtree: !0 }));
		}
		this.title = e.spec.title ? Xy.create(e.spec.title, e.getConfigScopes(), t.context, t, e, "title" + n) : void 0, e.spec.viewportWidth != null && (this.scrollbars.horizontal = new Zy(this, "horizontal")), e.spec.viewportHeight != null && (this.scrollbars.vertical = new Zy(this, "vertical")), Bn(e) || (this.#d(), this.#a());
	}
	#a() {
		if (!Bx(this.view.spec)) for (let { owner: e, paramName: t, config: n } of this.#o()) {
			let r = n.encodings ?? ["x"], i = this.#u(t, r);
			n.source === "viewport" ? this.#n.push(new vx(this, t, n, r, i, e.paramRuntime)) : this.#t.push(new _x(this, t, n, r, i, e.paramRuntime)), n.display !== "none" && (this.#s(e, t, n, r, i) || this.#c(t, n, r, i));
		}
	}
	#o() {
		let e = [], t = /* @__PURE__ */ new Set();
		for (let n of this.view.getDataAncestors()) for (let [r, i] of n.paramRuntime.paramConfigs) t.has(r) || (t.add(r), ye(i) && e.push({
			owner: n,
			paramName: r,
			config: i.ruler
		}));
		return e;
	}
	#s(e, t, n, r, i) {
		return Rx({
			extent: n.extent,
			ownerSpec: e.spec,
			channels: r,
			isAligned: (t) => e.getScaleResolution?.(t) === i[t],
			label: `Ruler param "${t}"`
		}) === "container";
	}
	#c(e, t, n, r) {
		let i = Cx({
			paramName: e,
			channels: n,
			config: t,
			scaleResolution: r[n[0]],
			context: this.layoutParent.context,
			layoutParent: this.layoutParent,
			dataParent: this.view,
			name: "rulerOverlay" + this.#r + "_" + e
		});
		this.rulerOverlays.push(i);
	}
	async #l() {
		if (!this.#i) {
			let e = [...this.selectionRect ? [this.selectionRect] : [], ...this.rulerOverlays];
			await Promise.all(e.map((e) => e.view.initializeChildren())), this.#i = !0;
		}
	}
	#u(e, t) {
		return Object.fromEntries(t.map((t) => {
			let n = this.view.getScaleResolution(t);
			if (!n?.getResolvedScaleType?.()) throw Error(`No scale found for ruler param "${e}" on channel "${t}".`);
			return [t, n];
		}));
	}
	#d() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.view.getDataAncestors()) for (let [n, r] of t.paramRuntime.paramConfigs) {
			if (e.has(n) || !("select" in r)) continue;
			e.add(n);
			let i = et(r.select);
			if (A(i) && (t !== this.view || !Bx(t.spec))) {
				let e = i.encodings ?? ["x"], a = !this.#f(t, n, i, e);
				this.#e.push(new Fx(this, n, r, i, t.paramRuntime, a));
			}
		}
	}
	#f(e, t, n, r) {
		return Rx({
			extent: n.extent,
			ownerSpec: e.spec,
			channels: r,
			isAligned: (t) => e.getScaleResolution?.(t) === this.view.getScaleResolution(t),
			label: `Interval selection param "${t}"`
		}) === "container";
	}
	*getChildren() {
		this.background && (yield this.background), this.backgroundStroke && (yield this.backgroundStroke), this.title && (yield this.title);
		for (let e of this.axisCandidates) yield e.axisView;
		yield* ax(this.legends), yield* Object.values(this.gridLines), yield this.view, yield* Object.values(this.scrollbars), this.selectionRect && (yield this.selectionRect.view);
		for (let e of this.rulerOverlays) yield e.view;
	}
	async syncGuideViews(e = {}) {
		this.#m(), await this.#l();
		let { view: t, axes: n, gridLines: r } = this, i = t.getParentGridChromePolicy(), a = (e, t) => {
			let r = e.getAxisProps();
			if (r === null) return;
			let i = r ? { ...r } : {};
			if (!i.orient) {
				for (let e of Ev[t]) if (!n[e]) {
					i.orient = e;
					break;
				}
				if (!i.orient) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			}
			if (i.title === void 0 && (i.title = e.getTitle()), !Ev[t].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${t}"!`);
			return i;
		}, o = async (e, r, i) => {
			let o = a(e, r);
			if (o) {
				if (n[o.orient] && !this.allowDuplicateAxes()) throw Error(`An axis with the orient "${o.orient}" already exists!`);
				let a = new jv(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i, { labelClipPolicy: this.getAxisLabelClipPolicy(r, t) });
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
				...fv(n.getConfigScopes(), {
					channel: t,
					orient: i.orient,
					type: e.scaleResolution.type,
					style: i.style
				}),
				...i
			};
			if (o.grid || o.chromGrid) {
				let t = new gy(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, n);
				r[i.orient] = t, await t.initializeChildren();
			}
		};
		if (i.axes) {
			for (let e of ["x", "y"]) if (t.needsAxes[e]) {
				let n = t.resolutions.axis[e];
				if (!n) continue;
				await o(n, e, t);
			}
			for (let e of ["x", "y"]) if (t.needsAxes[e] && t.getConfiguredOrDefaultResolution(e, "axis") != "excluded") {
				let n = t.getAxisResolution(e);
				if (!n) continue;
				await s(n, e, t);
			}
			if (t instanceof Y) {
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
		for (let { definition: n, resolution: r, owner: i } of qb(e.legendOwners ?? zx(t))) {
			if (px(i, r.channel) !== void 0) continue;
			let t = await rx(n, this.layoutParent);
			if (e.legendFilter && !e.legendFilter(t, i)) {
				t.disposeSubtree();
				continue;
			}
			await ix(this.legends, t, r);
		}
		[
			...this.axisCandidates.map((e) => e.axisView),
			...Object.values(r),
			...ax(this.legends)
		].forEach((e) => e.visit((e) => {
			e instanceof J && e.resolve("scale");
		}));
	}
	allowDuplicateAxes() {
		return !1;
	}
	getActiveAxisCandidate(e) {
		return this.#p(e).at(-1);
	}
	#p(e) {
		return this.axisCandidates.filter((t) => t.orient === e && t.resolution.hasVisibleNonChromeMember());
	}
	dispose() {
		for (let e of this.#e) e.dispose();
		for (let e of this.#n) e.dispose();
		for (let e of this.#t) e.dispose();
		this.#e = [], this.#n = [], this.#t = [], this.#m();
	}
	#m() {
		for (let e of this.axisCandidates) e.axisView.disposeSubtree();
		for (let e of Object.values(this.gridLines)) e.disposeSubtree();
		sx(this.legends), this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {};
	}
	getAxisLabelClipPolicy(e, t) {
		return t.options.axisLabelClipPolicy?.[e] || (e === "x" && (t.spec.viewportWidth != null || this.layoutParent.spec.viewportWidth != null) || e === "y" && (t.spec.viewportHeight != null || this.layoutParent.spec.viewportHeight != null) ? "anchor" : "pixel");
	}
	getOverhang() {
		return Ln(this.#h().add(this.#g()).add(this.view.getOverhang()), this.view.spec.overhang);
	}
	prepareLegendLayoutSize(e, t) {
		return ox(this.legends, e, t);
	}
	getViewOverhang() {
		return Ln(this.view.getOverhang(), this.view.spec.overhang);
	}
	#h() {
		let e = (e) => Av(this.axes[e]), t = (e) => cx(this.legends, e);
		return new V(e("top") + t("top"), e("right") + t("right"), e("bottom") + t("bottom"), e("left") + t("left"));
	}
	#g() {
		return this.title?.getOverhang() ?? V.zero();
	}
	getTitleZindex() {
		return this.title?.titleSpec.zindex ?? 1;
	}
	arrangeTitle(e, t, n) {
		this.title?.arrange(e, this.#_(t), n);
	}
	#_(e) {
		let t = this.title?.titleSpec;
		if (!t) return e;
		let n = e.expand(this.#h()), r = t.frame ?? "group";
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
function Hx(e) {
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
function Ux(e) {
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
var Wx = {
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
}, Gx = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = Wx) {
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
			let t = Kx(this.#e.KeyD, this.#e.KeyA), n = Kx(this.#e.KeyW, this.#e.KeyS), r = qx(this.#t, t, e, this.#r), i = qx(this.#n, n, e, this.#i), a = e / 1e3;
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
function Kx(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function qx(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = Jx(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = Jx(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function Jx(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region ../core/src/view/gridView/zoomNavigationUtils.js
function Yx(e) {
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
function Xx(e) {
	let t = Yx(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region ../core/src/view/gridView/keyboardZoomController.js
var Zx = class {
	#e;
	#t;
	#n = .5;
	#r = new Gx();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = Xx(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (iy(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
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
			Qx(e) || this.#r.isNavigationKey(e.code) && Xx(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		}), e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && Xx(this.#t) && (e.preventDefault(), this.#c());
		}));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function Qx(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || $x(e.target));
}
function $x(e) {
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
var eS = 1;
function tS(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
function nS(e, t, n, r = 0) {
	let i = n.getPerpendicularSize(), a = n.getOffset(), o = t == "top" || t == "bottom" ? e.width : e.height, s = n.getParallelSize?.() ?? o, c = tS(n.getAnchor?.() ?? "start") * (o - s), l = n.getParallelSize?.() ?? e.height - 2 * a, u = n.getWidth?.() ?? i, d = n.getHeight?.() ?? l;
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
function rS(e, t, n, r, i, a, o) {
	for (let [s, c] of Object.entries(e)) {
		if (!ux(c)) continue;
		let e = Av(t[s]), l = c.legendView, u = nS(n, s, l, e);
		a(eS, o, () => l.arrange(r, u, i));
	}
}
//#endregion
//#region ../core/src/view/gridView/separatorView.js
var iS = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), aS = class {
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
		let a = new J(sS(e), t, n, r, this.#e === "horizontal" ? i("separatorHorizontal") : i("separatorVertical"));
		return U(a, { skipSubtree: !0 }), H(a, { skipSubtree: !0 }), a;
	}
};
function oS(e) {
	if (!e) return null;
	let t = e === !0 ? { ...iS } : {
		...iS,
		...e
	};
	return t.strokeDash === iS.strokeDash && (t.strokeDash = iS.strokeDash.slice()), t;
}
function sS(e) {
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
}), cS = 10;
function lS(e, t) {
	return Math.max(0, Math.min(e.size, t - e.location));
}
var uS = 10;
function dS(e, t) {
	let n = e.grow ?? 0, r = e.px ?? 0, i = Math.max(gn(e), gn(t));
	if (!n) return {
		px: Math.max(r, i),
		grow: 0
	};
	let a = {
		px: Math.max(r, t.px ?? 0),
		grow: n
	};
	i > (a.px ?? 0) && (a.minPx = i);
	let o = Cn(e);
	return o !== void 0 && o >= i && (a.maxPx = o), a;
}
var fS = class extends tr {
	#e = Infinity;
	#t = 10;
	#n = [];
	#r = {};
	#i = {};
	#a;
	#o = 0;
	#s = {};
	#c = null;
	#l = [];
	constructor(e, t, n, r, i, a, o) {
		super(e, t, n, r, i, o), this.spec = e, this.#t = e.spacing ?? 10, this.#e = a, this.#n = [], this.wrappingFacet = !1;
		let s = oS(e.separator);
		if (s) for (let t of bS(e)) this.#s[t] = new aS({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#c = new Zx({
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
		let n = new Vx(e, this, this.#o);
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
		this.#f(t), this.#n.splice(e, 1), this.invalidateSizeCache();
	}
	moveChildAt(e, t) {
		We(this.#n, e, t), this.invalidateSizeCache();
	}
	get #u() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get #d() {
		return new cv(this.#u.length, this.#e ?? Infinity);
	}
	setChildren(e) {
		for (let e of this.#n) this.#f(e);
		this.#n = [];
		for (let t of e) this.appendChild(t);
		this.invalidateSizeCache();
	}
	#f(e) {
		e.dispose();
		for (let t of e.getChildren()) t.disposeSubtree();
	}
	get children() {
		return this.#n.map((e) => e.view);
	}
	get childCount() {
		return this.#n.length;
	}
	setLegendFilter(e) {
		this.#a = e;
	}
	async syncGuideViews(e = {}) {
		let t = e.gridChildren ?? this.#n;
		await Promise.all([
			this.#p(),
			this.#m(e.legendOwners),
			this.#h()
		]), await Promise.all(t.map((e) => e.syncGuideViews({ legendFilter: this.#a }))), this.invalidateSizeCache();
	}
	async syncLegendViews() {
		await this.#m(dx(this)), this.invalidateSizeCache();
	}
	async #p() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of $e) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new jv({
				title: n.getTitle(),
				orient: Ev[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	async #m(e) {
		sx(this.#i), this.#i = {};
		let t = e ?? (Object.keys(this.resolutions.legend).length > 0 ? [this] : []);
		for (let { definition: e, resolution: n, owner: r } of qb(t)) {
			let t = px(r, n.channel), i = t ? pS(t, n.channel) : void 0;
			if (i !== this && !(i === void 0 && r === this)) continue;
			let a = await rx(e, this);
			if (this.#a && !this.#a(a, r)) {
				a.disposeSubtree();
				continue;
			}
			await ix(this.#i, a, n);
		}
	}
	async #h() {
		for (let { overlay: e } of this.#l) e.view.disposeSubtree();
		this.#l = [];
		let e = [];
		for (let [t, n] of this.paramRuntime.paramConfigs) {
			if (!("select" in n)) continue;
			let r = et(n.select);
			if (!A(r)) continue;
			let i = r.encodings ?? ["x"];
			if (!(i.length === 1 && i[0]) || Rx({
				extent: r.extent,
				ownerSpec: this.spec,
				channels: i,
				isAligned: (e) => this.#g(e),
				label: `Interval selection param "${t}"`
			}) !== "container") continue;
			let a = this.paramRuntime.createExpression(t), o = a();
			(!o || !tt(o)) && this.paramRuntime.setValue(t, n.value ? {
				type: "interval",
				intervals: n.value
			} : at(i));
			let s = Px({
				selectionExpr: a,
				selectionExpression: t,
				channels: i,
				brushConfig: r.mark,
				context: this.context,
				layoutParent: this,
				dataParent: this,
				scaleResolutionSource: this
			});
			this.#l.push({
				overlay: s,
				order: Q.selectionRect
			}), e.push(s.view.initializeChildren());
		}
		for (let [t, n] of this.paramRuntime.paramConfigs) {
			if (!ye(n) || n.ruler.display === "none") continue;
			let r = n.ruler.encodings ?? ["x"], i = r.length === 1 ? r[0] : void 0;
			if (!i || Rx({
				extent: n.ruler.extent,
				ownerSpec: this.spec,
				channels: r,
				isAligned: (e) => this.#g(e),
				label: `Ruler param "${t}"`
			}) !== "container") continue;
			let a = Cx({
				paramName: t,
				channels: r,
				config: n.ruler,
				scaleResolution: this.getScaleResolution(i),
				context: this.context,
				layoutParent: this,
				dataParent: this,
				name: "rulerOverlay_" + t
			});
			this.#l.push({
				overlay: a,
				order: Q.ruler
			}), e.push(a.view.initializeChildren());
		}
		await Promise.all(e);
	}
	#g(e) {
		let t = this.getScaleResolution(e);
		return t != null && this.#n.every((n) => n.view.getScaleResolution(e) === t);
	}
	*[Symbol.iterator]() {
		for (let e of this.#n) yield* e.getChildren();
		for (let { overlay: e } of this.#l) yield e.view;
		for (let e of Object.values(this.#s)) yield e.view;
		for (let e of Object.values(this.#r)) yield e;
		yield* ax(this.#i);
	}
	#_(e) {
		let t = e == "column" ? "width" : "height", n = (t, n) => t.map((t) => {
			let r = this.#u[t].getOverhangAndPadding();
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
		return this._cache(`size/directionSizes/${e}`, () => this.#d[e == "column" ? "colIndices" : "rowIndices"].map((e) => ({
			axisBefore: n(e, 0),
			axisAfter: n(e, 1),
			view: xn(e.map((e) => r(this.#u[e])))
		})));
	}
	#v(e) {
		let t = this.#_(e), n = [];
		n.push(In);
		for (let [e, r] of t.entries()) e > 0 && n.push({
			px: this.#t,
			grow: 0
		}), (e == 0 || this.wrappingFacet) && n.push(In), n.push({
			px: r.axisBefore,
			grow: 0
		}), n.push(r.view), n.push({
			px: r.axisAfter,
			grow: 0
		}), (e == t.length - 1 || this.wrappingFacet) && n.push(In);
		return n;
	}
	#y(e) {
		let t = 0, n = 0, r = 0, i = 0, a = !0, o = e == "row" ? this.spec.height : this.spec.width, s = o || o === 0 ? bn(this.resolveSizeValue(e == "row" ? "height" : "width", o)) : void 0, c = s && (e == "column" ? this.#d.colIndices.length == 1 : this.#d.rowIndices.length == 1), l = this.#_(e);
		for (let [e, o] of l.entries()) {
			e > 0 && (n += this.#t, r += this.#t, i += this.#t), (e == 0 || this.wrappingFacet) && (n += 0), n += o.axisBefore, r += o.axisBefore, i += o.axisBefore;
			let u = c ? dS(s, o.view) : o.view;
			n += u.px ?? 0, t += u.grow ?? 0, r += gn(u);
			let d = Cn(u);
			d === void 0 ? a = !1 : i += d, n += o.axisAfter, r += o.axisAfter, i += o.axisAfter, (e == l.length - 1 || this.wrappingFacet) && (n += 0);
		}
		let u = {
			px: n,
			grow: t,
			minPx: r || void 0,
			maxPx: l.length && a ? i : void 0
		};
		return s && !c ? dS(s, u) : u;
	}
	#b(e, t) {
		return e == "row" && this.wrappingFacet ? 1 + 6 * t + 2 : 2 + 4 * t + 1;
	}
	getOverhang() {
		return this.#x().add(this.#w());
	}
	#x() {
		let e = this.#_("column"), t = this.#_("row");
		return !e.length || !t.length ? V.zero() : new V(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#S() {
		let e = (e) => {
			let t = Dv[e], n = this.#r[t];
			return n?.axisProps.orient === e ? Av(n) : 0;
		};
		return new V(e("top"), e("right"), e("bottom"), e("left"));
	}
	#C() {
		let e = (e) => cx(this.#i, e);
		return new V(e("top"), e("right"), e("bottom"), e("left"));
	}
	#w() {
		return this.#S().add(this.#C());
	}
	#T() {
		let e = {};
		for (let t of Object.values(this.#r)) e[t.axisProps.orient] = t;
		return e;
	}
	getSize() {
		return this._cache("size", () => new fn(this.#y("column"), this.#y("row")).addPadding(this.#w()));
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#w(), i = cS;
		for (;;) {
			let e = t.shrink(r);
			if (!ox(this.#i, e.width, e.height)) {
				t = e;
				break;
			}
			if (i--, !i) throw Error("Shared legend layout did not settle.");
			this.invalidateSizeCache(), r = this.#w();
		}
		e.pushView(this, t);
		let a = e.getDevicePixelRatio(), o = { devicePixelRatio: a }, s = yn(this.#v("column"), t.width, o), c = yn(this.#v("row"), t.height, o), l = new cv(this.#u.length, this.#e ?? Infinity), u = cS;
		for (;;) {
			let e = !1;
			for (let [n, r] of this.#u.entries()) {
				let [i, a] = l.getCellCoords(n), o = s[this.#b("column", i)], u = c[this.#b("row", a)], d = lS(o, t.width), f = lS(u, t.height), p = r.view.prepareLayoutSize?.(d, f) === !0, m = r.prepareLegendLayoutSize(d, f);
				e ||= p || m;
			}
			if (!e) break;
			if (u--, !u) throw Error("Legend layout did not settle.");
			this.invalidateSizeCache(), s = yn(this.#v("column"), t.width, o), c = yn(this.#v("row"), t.height, o);
		}
		let d = (e) => Math.round(e * a) / a, f = [];
		for (let [e, r] of this.#u.entries()) {
			let { view: i, axes: a, gridLines: o, background: u, backgroundStroke: p, title: m, selectionRect: h, rulerOverlays: g } = r, [_, v] = l.getCellCoords(e), y = s[this.#b("column", _)], b = c[this.#b("row", v)], x = i.getViewportSize(), S = i.getSize(), C = r.getViewOverhang(), w = y.location - C.left, T = b.location - C.top, E = (e, t, n = !1) => n ? e[t].grow ? (t == "width" ? y : b).size : e[t].px : (t == "width" ? y : b).size + C[t], D = E(x, "width", i.spec.viewportWidth != null), O = E(x, "height", i.spec.viewportHeight != null), k = E(S, "width", i.spec.viewportWidth != null), ee = E(S, "height", i.spec.viewportHeight != null), A = r.scrollbars.horizontal, te = r.scrollbars.vertical, ne = A ? () => d(A.viewportOffset) : () => 0, re = te ? () => d(te.viewportOffset) : () => 0, j = new W(() => t.x + w, () => t.y + T, () => D, () => O), ie = i.isScrollable(), ae = ie ? new W(() => t.x + w - ne(), () => t.y + T - re(), () => k, () => ee) : j;
			r.coords = j;
			let M = ze(n), N = Xe(j, M);
			f.push({
				col: _,
				row: v,
				view: i,
				axes: a,
				gridLines: o,
				background: u,
				backgroundStroke: p,
				title: m,
				selectionRect: h,
				rulerOverlays: g,
				viewportCoords: j,
				viewCoords: ae,
				parentClip: M,
				visibleChildCoords: N,
				viewWidth: k,
				viewHeight: ee,
				scrollable: ie,
				gridChild: r
			});
		}
		let p = this.#x(), m = xS(f.map((e) => e.viewCoords)), h = [], g = [], _ = [], v = 0, y = (e, t, n) => {
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
		for (let t of f) t.background && y(t.gridChild.backgroundZindex, Q.background, () => t.background?.arrange(e, t.visibleChildCoords, {
			...n,
			clipRect: void 0
		}));
		let x = this.#s.vertical;
		x && (x.update(s, l.nCols, t, (e, t) => this.#b(e, t), this.wrappingFacet, p), y(x.getZindex(), Q.separator, () => x.arrange(e, t, n)));
		let S = this.#s.horizontal;
		if (S && (S.update(c, l.nRows, t, (e, t) => this.#b(e, t), this.wrappingFacet, p), y(S.getZindex(), Q.separator, () => S.arrange(e, t, n))), m) for (let { overlay: t, order: r } of this.#l) y(t.zindex, r, () => t.view.arrange(e, m, n));
		for (let r of f) {
			let { view: i, axes: a, gridLines: o, backgroundStroke: s, title: c, selectionRect: u, rulerOverlays: d, viewportCoords: f, viewCoords: p, parentClip: m, visibleChildCoords: h, viewWidth: g, viewHeight: v, scrollable: b, gridChild: x, col: S, row: C } = r, w = gS(i), T = w || b, E = _S(i) || b;
			for (let t of Object.values(o)) y(t.axisProps.zindex ?? 0, Q.grid, () => t.arrange(e, f, n));
			let D = T ? Ge(m, De(h, w || !!x.scrollbars.horizontal, w || !!x.scrollbars.vertical)) : n.clip;
			_.push({
				zindex: i.getZindex(),
				arrange: () => i.arrange(e, p, T ? {
					...n,
					clipRect: D?.rect,
					clip: D
				} : n)
			}), s && y(CS(x.backgroundStrokeZindex, E), Q.backgroundStroke, () => s?.arrange(e, h, {
				...n,
				clipRect: void 0
			}));
			for (let [t, r] of Object.entries(a)) {
				let i = t == "left" || t == "right" ? "vertical" : "horizontal", a = x.scrollbars[i], o = wS(a ? f.modify(i == "vertical" ? {
					y: () => p.y,
					height: v
				} : {
					x: () => p.x,
					width: g
				}) : f, t, r), s = ze(n), c = s?.rect;
				if (a) {
					let e = De(f, i == "horizontal", i == "vertical");
					s = Ge(s, e), c = s?.rect;
				}
				s && r.labelClipPolicy === "anchor" && (s = De(s.rect, Dv[t] === "x", Dv[t] === "y"), c = s?.rect), y(SS(r.axisProps, E), Q.axis, () => r.arrange(e, o, {
					...n,
					clipRect: c,
					clip: s
				}));
			}
			rS(x.legends, this.#E(a, S, C, l), f, e, n, y, Q.legend);
			for (let t of Object.values(this.#r)) {
				let r = t.axisProps.orient;
				(r == "left" && S == 0 || r == "right" && S == l.nCols - 1 || r == "top" && C == 0 || r == "bottom" && C == l.nRows - 1) && y(SS(t.axisProps, E), Q.axis, () => t.arrange(e, wS(f.shrink(x.getViewOverhang()), r, t), n));
			}
			u && y(u.zindex, Q.selectionRect, () => u.view.arrange(e, p, n));
			for (let t of d) y(t.zindex, Q.ruler, () => t.view.arrange(e, p, n));
			for (let r of Object.values(x.scrollbars)) y(1, Q.scrollbar, () => {
				r.updateScrollbar(f, p), r.arrange(e, t, n);
			});
			c && y(x.getTitleZindex(), Q.title, () => x.arrangeTitle(e, f, n));
		}
		rS(this.#i, this.#T(), t, e, n, y, Q.legend), b(h);
		for (let e of _.toSorted((e, t) => e.zindex - t.zindex)) e.arrange();
		b(g), e.popView(this);
	}
	#E(e, t, n, r) {
		let i = { ...e };
		for (let e of Object.values(this.#r)) {
			let a = e.axisProps.orient;
			(a == "left" && t == 0 || a == "right" && t == r.nCols - 1 || a == "top" && n == 0 || a == "bottom" && n == r.nRows - 1) && !i[a] && (i[a] = e);
		}
		return i;
	}
	propagateInteraction(e) {
		qv(this, e, () => {
			let t = this.#u.find((t) => t.coords.containsPoint(e.point.x, e.point.y)), n = t?.view, r = t ? void 0 : this.#D(e.point);
			if (e.type === "wheelclaimprobe") {
				if (!n) {
					r && e.claimWheel();
					return;
				}
				yS(n) ? vS(n) && e.claimWheel() : n.propagateInteraction(e);
				return;
			}
			this.#c?.handlePointerEvent(t, e);
			for (let n of Object.values(t?.scrollbars ?? {})) if (Jv(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			if (!n) {
				r && this.#A(e, r);
				return;
			}
			Jv(e, () => !0, () => n.propagateInteraction(e), yS(n) ? () => sy(e, t.coords, (e) => this.#j(t.coords, t.view, e), this.context.getCurrentHover(), this.context.animator) : void 0);
		});
	}
	#D(e) {
		let t = this.#O();
		if (!t) return;
		let n = this.getScaleResolution(t);
		if (!n || !n.isZoomable()) return;
		let r = this.#k(t);
		if (r && r.containsPoint(e.x, e.y)) return {
			coords: r,
			zoomableResolutions: mS(t, n)
		};
	}
	#O() {
		if (av(this.spec)) return "x";
		if (ov(this.spec)) return "y";
	}
	#k(e) {
		let t = this.#u[0];
		if (!t) return;
		let n = t.coords, r = t.coords.expand(t.getOverhang()), i = n.x, a = r.y, o = n.x2, s = r.y2;
		for (let t of this.#u.slice(1)) {
			let n = t.coords, r = t.coords.expand(t.getOverhang());
			e == "x" ? (i = Math.max(i, n.x), o = Math.min(o, n.x2), a = Math.min(a, r.y), s = Math.max(s, r.y2)) : (i = Math.min(i, r.x), o = Math.max(o, r.x2), a = Math.max(a, n.y), s = Math.min(s, n.y2));
		}
		for (let t of Object.values(this.#r)) {
			let n = t.coords;
			if (!n) continue;
			let r = t.axisProps.orient;
			e == "x" && (r == "top" || r == "bottom") ? (a = Math.min(a, n.y), s = Math.max(s, n.y2)) : e == "y" && (r == "left" || r == "right") && (i = Math.min(i, n.x), o = Math.max(o, n.x2));
		}
		if (!(i >= o || a >= s)) return W.create(i, a, o - i, s - a);
	}
	#A(e, t) {
		e.target = this, sy(e, t.coords, (e) => hS(t.coords, e, t.zoomableResolutions, this.context.animator), this.context.getCurrentHover(), this.context.animator);
	}
	#j(e, t, n) {
		return hS(e, n, Yx(t), this.context.animator);
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
};
function pS(e, t) {
	let n = e.getLayoutAncestors().find((e) => e instanceof fS);
	if (!n) throw Error(`Legend collection for channel "${t}" declared at view "${e.name}" requires a GridView layout host.`);
	return n;
}
function mS(e, t) {
	let n = {
		x: /* @__PURE__ */ new Set(),
		y: /* @__PURE__ */ new Set()
	};
	return n[e].add(t), n;
}
function hS(e, t, n, r) {
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
function gS(e) {
	let t = !0;
	return e.visit((e) => {
		e instanceof J && (t &&= e.mark.properties.clip === !0);
	}), t;
}
function _S(e) {
	let t = !1;
	return e.visit((e) => {
		if (e instanceof J) {
			let n = e.mark.properties.clip;
			t ||= n === !0 || n === "x" || n === "y";
		}
	}), t;
}
function vS(e) {
	let t = Yx(e);
	return t.x.size > 0 || t.y.size > 0;
}
function yS(e) {
	return e instanceof J || e instanceof Y;
}
function bS(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function xS(e) {
	if (e.length === 0) return;
	let t = Math.min(...e.map((e) => e.x)), n = Math.min(...e.map((e) => e.y)), r = Math.max(...e.map((e) => e.x2)), i = Math.max(...e.map((e) => e.y2));
	return W.create(t, n, r - t, i - n);
}
function SS(e, t) {
	return e.zindex === void 0 ? e.placement === "inside" ? 1 : t ? uS : 0 : e.zindex;
}
function CS(e, t) {
	return e ?? (t ? uS : 0);
}
function wS(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize(), a = r.placement === "inside", o = r.offset ?? 0;
	if (t == "bottom") return a ? e.translate(0, e.height - i - o).modify({ height: i }) : e.translate(0, e.height + o).modify({ height: i });
	if (t == "top") return a ? e.translate(0, o).modify({ height: i }) : e.translate(0, -i - o).modify({ height: i });
	if (t == "left") return a ? e.translate(o, 0).modify({ width: i }) : e.translate(-i - o, 0).modify({ width: i });
	if (t == "right") return a ? e.translate(e.width - i - o, 0).modify({ width: i }) : e.translate(e.width + o, 0).modify({ width: i });
}
//#endregion
//#region ../core/src/view/concatView.js
var TS = class extends fS {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, sv(e) ? e.columns : av(e) ? 1 : Infinity, a), this.spec = e;
	}
	async initializeChildren() {
		let e = this.spec, t = sv(e) ? e.concat : av(e) ? e.vconcat : e.hconcat, n = { inheritEncoding: !0 };
		this.options.layoutSizeParams == "force" && (n.layoutSizeParams = "force"), this.setChildren(await Promise.all(t.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("grid"), void 0, n))));
		let r = Object.values(this.spec.resolve?.legend ?? {}).includes("collected");
		await this.syncGuideViews({ legendOwners: r ? dx(this) : void 0 });
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	async moveChildAt(e, t) {
		let n = this.#t(), { specs: r } = this.#e();
		We(r, e, t), super.moveChildAt(e, t);
		let i = await this.#n([]);
		await n.initializeUninitializedChromeViews(i), this.context.requestLayoutReflow();
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : av(this.spec) && e === "x" || ov(this.spec) && e === "y" ? "shared" : "independent";
	}
	#e() {
		let e = this.spec, t;
		return t = sv(e) ? e.concat : av(e) ? e.vconcat : e.hconcat, {
			specs: t,
			insertAt: (e, n) => {
				t.splice(e, 0, n);
			},
			removeAt: (e) => {
				t.splice(e, 1);
			}
		};
	}
	#t() {
		let e = { inheritEncoding: !0 };
		return this.options.layoutSizeParams == "force" && (e.layoutSizeParams = "force"), new H_(this, {
			getChildSpecs: this.#e.bind(this),
			insertView: (e, t) => this.insertChildViewAt(e, t),
			removeView: (e) => super.removeChildAt(e),
			syncMutationGuideViews: (e, t, n) => this.#n(n ? [n] : []),
			defaultName: () => this.getNextAutoName("grid"),
			createViewOptions: e
		});
	}
	async #n(e) {
		await this.syncGuideViews({
			gridChildren: e,
			legendOwners: dx(this)
		});
		let t = /* @__PURE__ */ new Set([this]);
		for (let e of this.getDataAncestors()) if (Object.values(e.spec.resolve?.legend ?? {}).includes("collected")) {
			let n = e.getLayoutAncestors().find((e) => e instanceof fS);
			n && !t.has(n) && (await n.syncLegendViews(), t.add(n));
		}
		return t;
	}
};
//#endregion
//#region ../core/src/config/resolveConfig.js
function ES({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return B([
		e,
		t,
		n
	]);
}
function DS(e, t) {
	if (!(!e && !t)) return B([e, t]);
}
//#endregion
//#region ../core/src/view/viewFactory.js
var OS = "viewRoot", kS = /* @__PURE__ */ new WeakMap();
function AS(e) {
	return kS.get(e) ?? e;
}
var jS = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(rv, t(Y)), this.addViewType(q_, ((e, t, n, r, i, a) => new Y(J_(e), t, n, r, i, a))), this.addViewType(nv, t(J)), this.addViewType(av, t(TS)), this.addViewType(ov, t(TS)), this.addViewType(sv, t(TS));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw PS(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let s, c = iv(e) ? e.name ?? null : void 0;
		if (iv(e)) {
			let i;
			if ("url" in e.import) if (this.options.allowImport) i = await $f(e, r.getBaseUrl(), t);
			else throw new Xn("Importing views is not allowed!", n);
			else if ("template" in e.import) i = MS(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), NS(i, e), s = i;
		} else s = e;
		let l = (e) => e?.params?.some((e) => we(e) && et(e.select).type == "interval"), u = av(s) || ov(s) || sv(s), d = !r && this.options.wrapRoot && i === "viewRoot" && (!u || s.title !== void 0 || l(s));
		if (d) {
			let e = { ...s };
			delete e.theme, s = {
				name: "implicitRoot",
				vconcat: [e]
			};
		}
		let f = this.createView(s, t, n, r, i, o);
		if (c !== void 0 && Hn(f, c), d && U(f), f instanceof tr && await f.initializeChildren(), d) {
			let e = f;
			kS.set(f, e.children[0]);
		}
		return f.registerSizeInvalidation(), f;
	}
};
function MS(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return structuredClone(n);
	if (t.dataParent) return MS(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function NS(e, t) {
	t.name != null && (e.name = t.name), t.visible != null && (e.visible = t.visible), t.zindex != null && (e.zindex = t.zindex), e.config = DS(t.config, e.config);
	let n = w(t.params) ? t.params : x(t.params) ? Object.entries(t.params).map(([e, t]) => ({
		name: e,
		value: t
	})) : [];
	if (n.length) {
		e.params ??= [];
		for (let t of n) {
			let n = e.params.findIndex((e) => e.name == t.name);
			n >= 0 && (e.params[n] = t);
		}
		for (let t of n) e.params.some((e) => e.name == t.name) || e.params.push(t);
	}
}
function PS(e) {
	return "samples" in e && x(e.samples) && "spec" in e && x(e.spec);
}
//#endregion
//#region ../core/src/utils/inertia.js
var FS = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = vn(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = E([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
	}
	setMomentum(e, t) {
		if (this.disabled) {
			t(e);
			return;
		}
		this.callback = t;
		let n = st(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function IS(e) {
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
var LS = class {
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
		if (!Zv(this.uiEvent)) throw Error("Not a WheelEvent!");
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
		return this.#e ||= $v(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if (!Zv(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= Qv(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
}, RS = class {
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
		let n = new LS(e, t);
		return this.#e.propagateInteraction(n), this.#n = n.target, n.type === "mousemove" && this.#a(n), n;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.length === 0) {
			this.#r = [], this.#i.clear(), this.#n = void 0;
			return;
		}
		let t = new LS(this.#t, e, "mouseleave");
		this.#o(t, this.#r, void 0), this.#r = [], this.#i.clear(), this.#n = void 0;
	}
	getCurrentTarget() {
		return this.#n;
	}
	#a(e) {
		let t = e.pointedViews.size > 0 ? Array.from(e.pointedViews) : this.#c(e.target), n = e.pointedViews.size > 0 ? e.pointedViews : new Set(t), r = this.#r.filter((e) => !n.has(e)), i = t.filter((e) => !this.#i.has(e));
		r.length > 0 && this.#o(e, r, t.at(-1)), i.length > 0 && this.#s(e, i, this.#r.at(-1)), this.#r = t, this.#i = n;
	}
	#o(e, t, n) {
		for (let r = t.length - 1; r >= 0; r--) {
			let i = new LS(e.point, e.uiEvent, "mouseleave"), a = t[r];
			if (i.target = a, i.currentTarget = a, i.relatedTarget = n, this.#l(a, i), i.stopped) return;
		}
	}
	#s(e, t, n) {
		for (let r of t) {
			let t = new LS(e.point, e.uiEvent, "mouseenter");
			if (t.target = r, t.currentTarget = r, t.relatedTarget = n, this.#l(r, t), t.stopped) return;
		}
	}
	#c(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#l(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, zS = class {
	#e;
	#t;
	#n;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#r(BS(e, t));
	}
	clear() {
		this.#r(void 0);
	}
	#r(e) {
		if (VS(this.#t, e)) {
			this.#i();
			return;
		}
		this.#n?.(), this.#n = void 0, this.#t = e, e?.watch((e) => {
			this.#n = e;
		}, () => this.#i()), this.#i();
	}
	#i() {
		let e = this.#t?.evaluate();
		this.#e.style.cursor = typeof e == "string" ? e : "";
	}
};
function BS(e, t) {
	let n = t?.mark, r = n?.getCursorSpec?.();
	if (r !== void 0) return {
		owner: n,
		raw: r,
		evaluate: () => n.getCursor(),
		watch: (e, t) => n.watchCursor?.(t, e)
	};
	for (let t of e?.getLayoutAncestors() ?? []) {
		let e = t.getCursorSpec?.();
		if (e !== void 0) return {
			owner: t,
			raw: e,
			evaluate: () => t.getCursor(),
			watch: (e, n) => t.watchCursor?.(n, e)
		};
	}
}
function VS(e, t) {
	return !e || !t ? e === t : e.owner === t.owner && e.raw === t.raw;
}
//#endregion
//#region ../core/src/genomeSpy/interactionController.js
var HS = class {
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
	#b() {
		this.#n.sticky = !1, this.#g = !0, this.#n.clear();
	}
	constructor({ viewRoot: e, canvas: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, readPickingId: s }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o ?? (() => {}), this.#s = s, this.#c = new RS({ viewRoot: e }), this.#l = new zS({ canvas: t }), this.#u = void 0, this.#d = new FS(this.#r), this.#f = void 0, this.#p = void 0;
	}
	getCurrentHover() {
		return this.#u;
	}
	suspendHoverTracking() {
		this.#_++, !this.#h && (this.#n.clear(), this.#m = !1);
	}
	resumeHoverTracking(e) {
		if (!(this.#_ <= 0) && (this.#_--, !(this.#_ > 0) && (this.#n.clear(), this.#m = !1, !this.#T()))) {
			if (e) {
				let t = this.#x(e);
				if (this.#p = t, this.#S(t)) {
					this.#C(t), this.#l.update({
						target: this.#c.getCurrentTarget(),
						hover: this.#u
					});
					return;
				}
				this.#c.handlePointerLeave(e);
			} else if (this.#p && this.#S(this.#p)) {
				this.#C(this.#p), this.#l.update({
					target: this.#c.getCurrentTarget(),
					hover: this.#u
				});
				return;
			}
			this.#u = null, this.#l.clear();
		}
	}
	registerInteractionEvents() {
		let e = this.#t, t = [], n = (e, n, r, i) => {
			e.addEventListener(n, r, i), t.push(() => e.removeEventListener(n, r, i));
		}, r = performance.now(), i = !1, a;
		globalThis.document?.addEventListener && n(document, "mousedown", (t) => {
			this.#n.sticky && !t.composedPath().includes(e) && !this.#n.containsEvent(t) && this.#b();
		}, { capture: !0 });
		let o = (e, t) => {
			let n = this.#c.dispatch(e, t);
			return !this.#m && !this.#h && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#l.update({
				target: n.target,
				hover: this.#u
			}), n;
		}, s, c, l = (e, t) => {
			let n = {};
			c = n, this.#o();
			let r = this.#E(e.x, e.y, () => c === n && !s);
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
				if (e.type !== "contextmenu" && this.#T()) return;
				let a = this.#x(e);
				this.#p = a;
				let u = !1;
				if (e.type == "mousemove" && !n && this.#_ === 0 && (this.#g = !1, this.#n.handleMouseMove(e), this.#m = !1, e.buttons == 0 && !ay() && (c ? s = {
					point: a,
					event: e
				} : l(a, e), u = !0)), e.type == "mousemove" && !u && (c = void 0, s = void 0), u) {
					this.#d.cancel();
					return;
				}
				let d = (e) => {
					o(a, e);
				};
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !ay()) this.#o();
				else if (e.type == "wheel") {
					r = t, this.#m = !1;
					let n = e;
					if (Math.abs(n.deltaX) > Math.abs(n.deltaY)) this.#u = null, this.#d.cancel();
					else if (o(a, { type: "wheelclaimprobe" }).wheelClaimed) {
						let e = IS(n);
						this.#d.setMomentum(n.deltaY * (n.deltaMode ? 80 : 1), (t) => {
							let n = new WheelEvent("wheel", {
								...e,
								deltaMode: 0,
								deltaX: 0,
								deltaY: t
							});
							d(n);
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
					}, r = this.#E(a.x, a.y, void 0, !1);
					if (r) {
						r.then((e) => {
							e && n();
						});
						return;
					}
					return n();
				}
				let f = o(a, e);
				return e.type == "dblclick" && this.#_ === 0 && this.#S(a) && this.#w(), f;
			}
		};
		n(e, "mousedown", (e) => {
			this.#f = Z.fromMouseEvent(e), this.#h = !1;
			let t = e.shiftKey || e.ctrlKey || e.metaKey;
			this.#n.sticky ? (this.#b(), i = !0) : i = !1;
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
					clearTimeout(e), this.#h && (this.#h = !1, t && this.#_ > 0 && (this.#n.clear(), this.#m = !1));
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
			"dblclick"
		].forEach((t) => n(e, t, u));
		let d = (t, n) => {
			let r = e.getBoundingClientRect();
			return new Z(t - r.left - e.clientLeft, n - r.top - e.clientTop);
		}, f = (e) => {
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
				distance: US(t, n)
			};
		}, p = (e, t, n, r, i, a, s) => {
			let c = d(e, t);
			o(c, {
				type: "touchgesture",
				phase: n,
				pointerCount: r,
				xDelta: i,
				yDelta: a,
				zDelta: s
			});
		}, m = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#m = !1;
			let t = f(e.touches);
			if (!t) {
				a = void 0;
				return;
			}
			if (!a || a.pointerCount !== t.pointerCount) {
				a = t;
				return;
			}
			let n = t.centerX - a.centerX, r = t.centerY - a.centerY, i = t.pointerCount === 2 ? WS(a.distance, t.distance) : 0;
			(n !== 0 || r !== 0 || i !== 0) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && p(a.centerX, a.centerY, "move", t.pointerCount, n, r, i), a = t;
		}, h = (e) => {
			e.preventDefault(), this.#m = !1, a && e.touches.length === 0 && p(a.centerX, a.centerY, "end", a.pointerCount, 0, 0, 0), a = f(e.touches);
		};
		return n(e, "touchstart", m, { passive: !1 }), n(e, "touchmove", m, { passive: !1 }), n(e, "touchend", h, { passive: !1 }), n(e, "touchcancel", h, { passive: !1 }), n(e, "dragstart", (e) => e.stopPropagation()), n(e, "mouseout", (e) => {
			if (!this.#T()) {
				if (this.#_ > 0) {
					this.#n.clear(), this.#m = !1;
					return;
				}
				this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#u = null, this.#y++, c = void 0, s = void 0;
			}
		}), () => {
			for (let e of t) e();
		};
	}
	#x(e) {
		let t = this.#t, n = t.getBoundingClientRect();
		return new Z(e.clientX - n.left - t.clientLeft, e.clientY - n.top - t.clientTop);
	}
	#S(e) {
		let t = this.#t;
		return e.x >= 0 && e.y >= 0 && e.x <= t.clientWidth && e.y <= t.clientHeight;
	}
	#C(e) {
		ay() || (this.#o(), this.#E(e.x, e.y));
	}
	#w() {
		this.#v || (this.#v = !0, this.#r.requestRender(), window.requestAnimationFrame(() => {
			if (this.#v = !1, this.#_ > 0 || this.#T()) return;
			let e = this.#p;
			if (!e || !this.#S(e)) {
				this.#u = null, this.#l.clear();
				return;
			}
			this.#n.clear(), this.#m = !1, this.#C(e), this.#l.update({
				target: this.#c.getCurrentTarget(),
				hover: this.#u
			});
		}));
	}
	#T() {
		return typeof document < "u" && !!document.body && document.body.classList.contains("gs-freeze-interaction");
	}
	#E(e, t, n = () => !0, r = !0) {
		let i = this.#y, a = this.#s?.(e, t) ?? 0;
		if (a instanceof Promise) return a.then((a) => {
			let o = (!r || i == this.#y) && n();
			return o && (this.#m = !1, this.#D(e, t, a ?? 0)), o;
		}, (e) => (console.error("Picking failed.", e), !1));
		n() && (this.#m = !1, this.#D(e, t, a));
	}
	#D(e, t, n) {
		if (n == 0) {
			this.#u = null;
			return;
		}
		if (n !== this.#u?.uniqueId && (this.#u = null), this.#u || this.#e.visit((r) => {
			if (r instanceof J) {
				if (r.mark.isPickingParticipant() && [...r.facetCoords.values()].some((n) => n.containsPoint(e, t))) {
					let e = r.getCollector();
					if (!e) return;
					let t = e.findDatumByUniqueId(n);
					t && (this.#u = {
						mark: r.mark,
						datum: t,
						uniqueId: n
					});
				}
				if (this.#u) return Un;
			}
		}), this.#u) {
			let e = this.#u.mark;
			this.updateTooltip(this.#u.datum, async (t) => {
				if (!e.isPickingParticipant()) return;
				let n = e.properties.tooltip;
				if (n !== null && n !== !1) {
					let r = n?.handler ?? "default", i = this.#a[r];
					if (!i) throw Error("No such tooltip handler: " + r);
					let a = e_(t, e, n?.params);
					return i(t, e, n?.params, a);
				}
			});
		}
	}
	updateTooltip(e, t) {
		if (!this.#g) if (!this.#m || !e) this.#n.updateWithDatum(e, t), this.#m = !0;
		else throw Error("Tooltip has already been updated! Duplicate event handler?");
	}
};
function US(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function WS(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region ../core/src/rendering/renderingBackend.js
async function GS(e) {
	if (e.renderer == "canvas") {
		if (!Zn.canvasBackend) throw KS("canvas");
		return Zn.canvasBackend(e);
	} else if (e.renderer == "webgpu") {
		if (Zn.webgpuBackend) return Zn.webgpuBackend(e);
		throw Error("The experimental WebGPU renderer is only available in development and the playground preview.");
	} else if (e.renderer != "auto" && e.renderer != "webgl") throw Error("Unknown renderer: " + e.renderer);
	let t = Zn.webglBackend, n = Zn.canvasBackend;
	if (!t) {
		if (e.renderer == "webgl") throw KS("webgl");
		if (n) return n(e);
		throw Error("No rendering backend is registered. Import \"@genome-spy/core/rendering/webgl.js\" or \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".");
	}
	try {
		return await t(e);
	} catch (t) {
		if (e.renderer == "webgl") throw t;
		if (!n) throw Error("WebGL2 initialization failed and the Canvas2D fallback is not registered. Import \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".", { cause: t });
		let r = await n(e);
		return ir("WebGL2 is unavailable. Using the Canvas2D compatibility renderer."), r;
	}
}
function KS(e) {
	return /* @__PURE__ */ Error(`The "${e}" rendering backend is not registered. Import "@genome-spy/core/rendering/${e}.js" when using "@genome-spy/core/minimal".`);
}
//#endregion
//#region ../core/src/genomeSpy/viewContextFactory.js
function qS(e) {
	let t = (e) => {
		throw Error("ViewContext." + e + " is not configured.");
	}, n = {
		dataFlow: e.dataFlow ?? t("dataFlow"),
		getMarkRenderingDebugState: e.getMarkRenderingDebugState,
		animator: e.animator ?? t("animator"),
		genomeStore: e.genomeStore,
		fontManager: e.fontManager ?? t("fontManager"),
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
var JS = {
	xOffset: 0,
	yOffset: 0,
	opacity: 1
}, YS = {
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
}, XS = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 3,
	cornerRadius: 0,
	minWidth: .5,
	minHeight: .5,
	minOpacity: 1
}, ZS = {
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
}, QS = {
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
}, $S = {
	x2: void 0,
	y2: void 0,
	size: 1,
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt"
}, eC = {
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt",
	orient: void 0,
	thickness: 1
}, tC = {
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
}, nC = {
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
	noFadingOnPointSelection: !0,
	linkShape: "arc",
	orient: "vertical"
}, rC = {
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
}, iC = { expr: "round(axisLength / (30 + 55 * smoothstep(100, 700, axisLength)))" }, aC = { tickCount: iC }, oC = { tickCount: iC }, sC = {
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
}, cC = {
	nominalColorScheme: "tableau10",
	ordinalColorScheme: "blues",
	quantitativeColorScheme: "viridis"
}, lC = {
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
}, uC = {
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
}, dC = {
	orient: "top",
	frame: "group",
	reserve: !1,
	anchor: "start",
	align: "left",
	baseline: "top",
	offset: -10,
	dx: 10,
	fontSize: 12
}, fC = {
	view: {},
	mark: JS,
	point: YS,
	rect: XS,
	arrow: ZS,
	rule: $S,
	tick: eC,
	text: tC,
	link: nC,
	axis: rC,
	axisX: aC,
	axisY: oC,
	axisLocus: sC,
	legend: $y,
	legendTrack: nb,
	scale: cC,
	range: lC,
	title: uC,
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
		overlay: dC,
		"overlay-title": dC,
		"group-subtitle": {
			fontSize: 11,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		...tb,
		...QS
	}
};
//#endregion
//#region ../core/src/view/gridView/guideViewSync.js
async function pC(e) {
	let t = e.getDescendants(), n = /* @__PURE__ */ new Map();
	for (let e of fx(t)) for (let t of new Set(Object.values(e.resolutions.legend))) {
		let r = px(e, t.channel), i = r ? pS(r, t.channel) : e instanceof fS ? e : void 0;
		if (i) {
			let t = n.get(i) ?? [];
			t.includes(e) || (t.push(e), n.set(i, t));
		}
	}
	let r = t.filter((e) => e instanceof fS);
	for (let e of r) await e.syncGuideViews({ legendOwners: n.get(e) ?? [] });
}
//#endregion
//#region ../core/src/genomeSpy/headlessBootstrap.js
function mC(e) {
	R_(e), z_(e);
}
//#endregion
//#region ../core/src/paramRuntime/embedParamApi.js
function hC(e, t) {
	let n = vC(e, t);
	if (!n.length) throw Error("Parameter \"" + t + "\" not found.");
	let r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = e.view.paramRuntime.findRuntimeForParam(t);
		if (!n) throw Error("Parameter \"" + t + "\" has no runtime value.");
		r.set(n, {
			runtime: n,
			readOnly: gC(r.get(n), e),
			pointSelection: _C(r.get(n), e)
		});
	}
	if (r.size > 1) throw Error("Parameter \"" + t + "\" is ambiguous.");
	let { runtime: i, readOnly: a, pointSelection: o } = r.values().next().value;
	return {
		getValue() {
			return i.getValue(t);
		},
		setValue(n) {
			if (a) throw Error("Cannot set computed parameter \"" + t + "\".");
			if (o) throw Error("Cannot set point selection parameter \"" + t + "\" through the embed API.");
			i.setValue(t, n), e.context.animator.requestRender();
		},
		subscribe(e) {
			return i.subscribe(t, () => {
				e(i.getValue(t));
			});
		}
	};
}
function gC(e, t) {
	return !!(e?.readOnly || "expr" in t.param);
}
function _C(e, t) {
	if (e?.pointSelection) return !0;
	let n = t.param;
	return "select" in n && a(et(n.select));
}
function vC(e, t) {
	let n = [];
	return e.visit((e) => {
		let r = e.paramRuntime.paramConfigs.get(t);
		r && n.push({
			view: e,
			param: r
		});
	}), n;
}
//#endregion
//#region ../core/src/genome/rootGenomeConfig.js
function yC(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && xC(t) ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: bC()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !xC(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function bC() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function xC(e) {
	try {
		return hu(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../core/src/config/themes.js
var SC = {
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
}, CC = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: "black" },
		text: { color: "black" },
		link: { color: "black" }
	},
	vegalite: SC,
	quartz: B([SC, {
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
	dark: B([SC, {
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
	fivethirtyeight: B([SC, {
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
	urbaninstitute: B([SC, {
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
}, wC = Object.keys(CC);
function TC(e) {
	let t = { ...CC[e] };
	return delete t.background, t;
}
function EC(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in CC));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + wC.join(", "));
	return t;
}
var DC = "genomespy";
function OC(e) {
	return CC[e].background;
}
function kC(e) {
	let t = EC(e);
	if (t.length != 0) return B(t.map((e) => TC(e)));
}
//#endregion
//#region ../core/src/genomeSpy/canvasBackground.js
function AC(e) {
	if (e.background !== void 0) return e.background;
	let t = e.theme ? Array.isArray(e.theme) ? e.theme : [e.theme] : [], n;
	for (let e of t) {
		let t = OC(e);
		t !== void 0 && (n = t);
	}
	return n;
}
function jC(e, t) {
	return t.background === void 0 ? AC(e) ?? "white" : t.background;
}
//#endregion
//#region ../core/src/genomeSpyBase.js
var MC = class {
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
	#p = new bl();
	#m = new xl();
	#h = new xl();
	constructor(e, t, n = {}) {
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new jS(), this.namedDataProviders = [], this.animator = new On(() => this.renderAll()), this._layoutReflowTransition = () => this.computeLayout(), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: __,
			refseqgene: Ig,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#i = new Cl(e, n), this.dpr = window.devicePixelRatio;
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
		ir("The `namedDataProvider` embed option is deprecated. Declare named datasets explicitly and update them through `api.datasets` or the owning `ViewHandle.datasets`."), this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		ir("`updateNamedData()` is deprecated. Update an explicitly declared dataset through `api.datasets` or its owning `ViewHandle.datasets`.");
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
	}
	getParam(e) {
		return hC(this.viewRoot, e);
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
	#y() {
		this.dpr = this.#_.getDevicePixelRatio();
		let e = this.viewRoot.paramRuntime.allocateSetter("devicePixelRatio", this.dpr), t = () => {
			this.#_.invalidateSize(), this.dpr = this.#_.getDevicePixelRatio(), e(this.dpr), this.computeLayout(), this.renderAll();
		};
		if (this.viewRoot.getSize().isGrowing()) {
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
	async #b() {
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = sl(this.container), r = await GS({
			renderer: this.options.renderer ?? "auto",
			container: e,
			sizeSource: () => this.viewRoot ? ep(this.viewRoot) : {
				width: void 0,
				height: void 0
			},
			powerPreference: this.options.powerPreference ?? "default",
			onCanvasResize: () => this.#t?.renderAll(),
			onRenderInvalidated: () => this.animator.requestRender(),
			onError: (e) => this.#k(e)
		});
		if (this.#l) throw r.surface.finalize(), Error("GenomeSpy was destroyed during launch.");
		this.#o = r, e.appendChild(t), this.tooltip = n, this.#r = new vl(), this.#n = new _l(t, this.#r);
	}
	destroy() {
		if (this.#l) return;
		this.#l = !0, this.animator.finalize();
		let e = this.#g;
		for (this.container.classList.remove("genome-spy"), e?.classList.remove("loading"), this.#p.removeAll(), this.#e.forEach((e) => e()), this.#x(), this.#i.remove(), this.#n?.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	#x() {
		this.viewRoot && this.#s !== this.viewRoot && (this.viewRoot.disposeSubtree(), this.#s = this.viewRoot), this.#o && !this.#c && (this.#o.surface.finalize(), this.#c = !0);
	}
	async #S() {
		await this.#C();
		let e = this.#w();
		await this.#E(e), await _g(this.viewRoot, e.dataFlow, e.fontManager, (e) => this.broadcast("dataFlowBuilt", e)), this.#O(e);
	}
	async #C() {
		this.genomeStore = new Cg(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = yC(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#w() {
		let e = new Wh();
		e.loadingStatusRegistry = this.#r;
		let t = ES({
			defaultConfig: fC,
			builtInTheme: kC(DC),
			theme: B([this.options.theme, kC(this.spec.theme)])
		});
		return qS({
			dataFlow: e,
			getMarkRenderingDebugState: this.#o.getMarkRenderingDebugState,
			animator: this.animator,
			genomeStore: this.genomeStore,
			fontManager: new Og(this.#o.prepareFontBitmap, this.#o.defaultFontBitmapUrl),
			updateTooltip: this.updateTooltip.bind(this),
			getNamedDataFromProvider: this.getNamedDataFromProvider.bind(this),
			getCurrentHover: () => this.#a.getCurrentHover(),
			suspendHoverTracking: () => this.#a?.suspendHoverTracking(),
			resumeHoverTracking: (e) => this.#a?.resumeHoverTracking(e),
			addKeyboardListener: (e, t) => {
				this.#p.add(e, (n) => {
					this.#T(e, n) && t(n);
				});
			},
			addBroadcastListener: (e, t) => this.#h.add(e, t),
			removeBroadcastListener: (e, t) => this.#h.remove(e, t),
			renderImmediately: this.renderAll.bind(this),
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: yl(this.container)
		});
	}
	#T(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #E(e) {
		let t = this.spec;
		this.viewRoot = await e.createOrImportView(t, null, null, OS), S_(this.viewRoot), k_(this.viewRoot), A_(this.viewRoot), await y_(this.viewRoot, this.genomeStore), await pC(this.viewRoot), this.#r.set(this.viewRoot, "loading"), this.#g.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#v(), mC(this.viewRoot), this.#D(), this.#_.invalidateSize(), this.#t = this.#o.createRenderCoordinator({
			viewRoot: this.viewRoot,
			getBackground: () => AC(this.spec),
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#n.updateLayout()
		}), e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.#y();
	}
	#D() {
		let e = Rn(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#O(e) {
		e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.viewRoot.visit((e) => qn(e, "size")), this.#_.invalidateSize(), this.#a = new HS({
			viewRoot: this.viewRoot,
			canvas: this.#_.canvas,
			tooltip: this.tooltip,
			animator: this.animator,
			emitEvent: this.#m.emit.bind(this.#m),
			tooltipHandlers: this.tooltipHandlers,
			renderPickingFramebuffer: this.#o.readPickingId ? this.renderPickingFramebuffer.bind(this) : void 0,
			readPickingId: this.#o.readPickingId
		});
	}
	async launch() {
		let e = !1;
		this.#u = !0, this.#d = void 0;
		try {
			return await this.#b(), this.#A(), await this.#S(), this.#A(), this.#e.push(this.#a.registerInteractionEvents()), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			return this.#j(this.#d ?? e), !1;
		} finally {
			this.#u = !1, this.#g?.classList.remove("loading"), this.#l && this.#x(), e && this.viewRoot && this.#r.set(this.viewRoot, "complete");
		}
	}
	#k(e) {
		this.#l || (this.#u && !this.#d && (this.#d = e), this.#j(e));
	}
	#A() {
		if (this.#l) throw Error("GenomeSpy was destroyed during launch.");
		if (this.#d) throw this.#d;
	}
	#j(e) {
		if (this.#l || this.#f.has(e)) return;
		this.#f.add(e);
		let t = `${e.view ? `At "${e.view.getPathString()}": ` : ""}${e.toString()}`;
		console.error(e.stack), this.options.onError?.(e, this.container) || cl(this.container, t), this.viewRoot && this.#r && this.#r.set(this.viewRoot, "error", t);
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await vg(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.fontManager), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#_.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await vd(this.viewRoot.context, this.viewRoot, void 0, e, (e) => bd(e) && PC(e));
	}
	updateTooltip(e, t) {
		this.#a.updateTooltip(e, t);
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
		let t = jC(this.spec, e);
		try {
			return { blob: await Qn(this.#o, {
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
		let t = this.#_.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height, i = jC(this.spec, e);
		try {
			let { createSvgExport: t } = await NC(), { svg: a, warnings: o, rasterized: s } = await t({
				viewRoot: this.viewRoot,
				rasterizeSvgRuns: (e) => $n(this.#o, e),
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
			return (await NC()).analyzeSvgExport({
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
		this.#t.renderAll();
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
async function NC() {
	let e = Zn.svgRenderer;
	if (!e) throw Error("SVG export is not registered. Import \"@genome-spy/core/rendering/svg.js\" when using \"@genome-spy/core/minimal\".");
	return e();
}
function PC(e) {
	let t = e;
	for (; t;) {
		let e = t.flowHandle?.dataSource;
		if (e) return e instanceof ac;
		t = t.dataParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/data/formats/readBinary.js
async function FC(e, t) {
	let n = t?.type;
	if (n !== "arrow" && n !== "parquet") throw Error("Unsupported binary data format: " + String(n));
	let r = Ra(n);
	if (!r) throw Error("Data format is not registered: " + n);
	let i = await r(IC(e), t);
	if (!Array.isArray(i)) throw Error(`The ${n} data reader did not return an array.`);
	return i;
}
function IC(e) {
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
function LC(e, t) {
	let n = () => e.viewRoot;
	return RC(() => AS(n()), n, t);
}
function RC(e, t, n = () => !0) {
	return {
		set(r, i) {
			zC(n);
			let a = e();
			UC(a, HC(a, r, t), i);
		},
		async load(r, i, a) {
			zC(n);
			let o = e(), s = HC(o, r, t), c = s.beginUpdate(), l = a?.type ?? "unknown", u = () => (zC(n), HC(o, r, t) === s && s.isCurrentUpdate(c)), d;
			try {
				d = await FC(i, a);
			} catch (e) {
				if (!u()) return;
				throw new $("datasetLoadFailed", `Cannot load named dataset "${r}" as ${l}: ${BC(e)}`, { cause: e });
			}
			u() && UC(o, s, d);
		},
		reset(r) {
			zC(n);
			let i = e();
			UC(i, HC(i, r, t));
		}
	};
}
function zC(e) {
	if (!e()) throw new $("staleEmbed", "Cannot update named data through a finalized embed.");
}
function BC(e) {
	return e instanceof Error ? e.message : String(e);
}
function VC(e, t) {
	let n = t();
	return e === n || !!n?.getDescendants?.().includes(e);
}
function HC(e, t, n) {
	if (!VC(e, n)) throw new $("staleHandle", "Cannot update named data through a stale view handle.");
	if (typeof t != "string" || !t.length) throw new $("invalidNamedData", "Named dataset name must be a non-empty string.");
	let r = e.namedDataScope.getLocalBinding(t);
	if (r) return r;
	throw e.namedDataScope.findDeclaredBinding(t) ? new $("namedDataOwnerMismatch", "Named dataset \"" + t + "\" is declared by an ancestor view. Use the dataset owner's handle.") : new $("namedDataNotDeclared", "View does not declare named dataset \"" + t + "\". Add it to the view's datasets object before updating it.");
}
function UC(e, t, n) {
	e.context.dataFlow.updateNamedDataBinding(t, n), e.context.animator.requestRender();
}
function WC(e, t) {
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = Promise.resolve(), a;
	function o() {
		return e.viewRoot;
	}
	function s(e) {
		return e instanceof TS ? "concat" : e instanceof Y ? "layer" : e instanceof J ? "unit" : e instanceof fS ? "grid" : "unknown";
	}
	function c(e) {
		if (e.explicitName) try {
			return An(e);
		} catch {
			return;
		}
	}
	function l(e) {
		let i = n.get(e);
		return i || (i = {
			id: nr(o()).getId(e),
			get name() {
				return e.explicitName;
			},
			get selector() {
				return c(e);
			},
			get type() {
				return s(e);
			},
			isAlive: () => VC(e, o),
			parent: () => {
				if (!(!VC(e, o) || !e.layoutParent)) return l(e.layoutParent);
			},
			children: () => {
				let t = u(e);
				return !VC(e, o) || !t ? [] : t.map((e) => l(e));
			},
			datasets: RC(() => e, o, t)
		}, n.set(e, i), r.set(i, e), i);
	}
	function u(e) {
		let t = e.children;
		return Array.isArray(t) ? t : void 0;
	}
	function d(e) {
		if (e === "root") return l(o());
		if (GC(e)) return r.has(e) && e.isAlive() ? e : void 0;
		if (KC(e)) {
			let t = Vn(o(), e);
			return t ? l(t) : void 0;
		} else throw new $("invalidAddress", "View address must be a handle, selector, or \"root\".");
	}
	function f(e) {
		let t = d(e);
		if (t) return t;
		throw GC(e) && r.has(e) ? new $("staleHandle", "Stale view handle no longer refers to a live view.") : new $("unresolvedAddress", "View address did not resolve to a live view.");
	}
	function p(e) {
		let t = f(e), n = r.get(t);
		if (!n) throw new $("invalidAddress", "View handle is not owned by this GenomeSpy instance.");
		return n;
	}
	function m(e) {
		let t = d(e);
		if (!t) return;
		let n = r.get(t)?.coords;
		if (n) return {
			x: n.x,
			y: n.y,
			width: n.width,
			height: n.height
		};
	}
	function h(e) {
		let t = o().context, n = () => e();
		return t.addBroadcastListener("layoutComputed", n), () => t.removeBroadcastListener("layoutComputed", n);
	}
	function g(e) {
		return a ? v(a, e) : _(e);
	}
	function _(e) {
		let t = i.then(e, e);
		return i = t.then(y, y), t;
	}
	function v(e, t) {
		let n = e.queue.then(t, t);
		return e.queue = n.then(y, (t) => {
			e.failed = !0, e.error = t;
		}), n;
	}
	function y() {}
	function b() {
		let e = a;
		if (e) return e.depth++, e;
		let t = o().context, n = t.requestLayoutReflow, r = {
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
		}, a = r, r;
	}
	function x(e) {
		e.depth--, e.depth === 0 && (e.restoreLayoutReflow(), a = void 0);
	}
	async function S(e) {
		let t;
		do
			t = e.queue, await t;
		while (e.queue !== t);
	}
	async function C(e) {
		let t = b(), n = t.failed, r, i, a = !1;
		try {
			r = await e(ae);
		} catch (e) {
			i = e, a = !0;
		}
		await S(t);
		try {
			if (a) throw i;
			if (t.failed && t.failed !== n) throw t.error;
			return r;
		} finally {
			x(t);
		}
	}
	function w(e, t, n = {}) {
		return g(async () => {
			let r = p(e), i = T(r), a = D(n.index, i), o = O(t, n);
			o !== void 0 && typeof o == "string" && k(r, o);
			let s = await E(r, structuredClone(t), a);
			return n.scope !== void 0 && Mn(s, n.scope), l(s);
		});
	}
	function T(e) {
		if (!(e instanceof TS) && !(e instanceof Y)) throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
		let t = u(e);
		if (!t) throw new $("unsupportedContainer", "Mutable container does not expose layout children.");
		return t.length;
	}
	async function E(e, t, n) {
		if (e instanceof TS) return e.addChildSpec(t, n);
		if (e instanceof Y) {
			if (!A(t)) throw new $("unsupportedChildSpec", "Layer views accept only unit, layer, multiscale, or import specs as children.");
			return e.addChildSpec(t, n);
		}
		throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
	}
	function D(e, t) {
		let n = e ?? t;
		if (!Number.isInteger(n)) throw new $("invalidIndex", "Insert index must be an integer.");
		if (n < 0 || n > t) throw new $("invalidIndex", "Insert index must be between 0 and the current child count.");
		return n;
	}
	function O(e, t) {
		let n = iv(e) && "name" in e ? e.name : void 0;
		if (t.scope !== void 0 && n !== void 0 && t.scope !== n) throw new $("scopeMismatch", "Insert scope must match the import instance name.");
		return t.scope ?? n;
	}
	function k(e, t) {
		let n = Fn(e).concat(t);
		o().visit((e) => {
			let r = zn(e);
			if (r && r.name === t && ee(Fn(e), n)) throw new $("duplicateScope", "Scope \"" + t + "\" already exists.");
		});
	}
	function ee(e, t) {
		return e.length === t.length && e.every((e, n) => e === t[n]);
	}
	function A(e) {
		if (iv(e)) return !0;
		let t = e;
		return nv(t) || rv(t) || q_(t);
	}
	function te(e) {
		return g(async () => {
			let t = p(e);
			if (t === o() || !t.layoutParent) throw new $("cannotRemoveRoot", "Removing the root view is not supported.");
			let n = t.layoutParent, r = u(n);
			if (!r) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let i = r.indexOf(t);
			if (i < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			await ne(n, i);
		});
	}
	async function ne(e, t) {
		if (e instanceof TS) await e.removeChildAt(t);
		else if (e instanceof Y) await e.removeChildAt(t);
		else throw new $("unsupportedContainer", "Only concat and layer views support child removal.");
	}
	function re(e, t) {
		return g(async () => {
			let n = p(e);
			if (n === o() || !n.layoutParent) throw new $("cannotMoveRoot", "Moving the root view is not supported.");
			let r = n.layoutParent, i = u(r);
			if (!i) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let a = i.indexOf(n);
			if (a < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			if (!t) throw new $("invalidIndex", "Move options with an index are required.");
			return await ie(r, a, j(t.index, i.length - 1)), l(n);
		});
	}
	function j(e, t) {
		if (!Number.isInteger(e)) throw new $("invalidIndex", "Move index must be an integer.");
		if (e < 0 || e > t) throw new $("invalidIndex", "Move index must be between 0 and the remaining child count.");
		return e;
	}
	async function ie(e, t, n) {
		if (e instanceof TS) await e.moveChildAt(t, n);
		else if (e instanceof Y) e.moveChildAt(t, n);
		else throw new $("unsupportedContainer", "Only concat and layer views support child reordering.");
	}
	let ae = {
		root: () => l(o()),
		resolve: d,
		get: f,
		getLayoutBounds: m,
		subscribeToLayout: h,
		insert: w,
		remove: te,
		move: re,
		transaction: (e) => a ? C(e) : _(() => C(e))
	};
	return ae;
}
function GC(e) {
	return typeof e == "object" && !!e && typeof e.isAlive == "function";
}
function KC(e) {
	return typeof e == "object" && !!e && Array.isArray(e.scope) && typeof e.view == "string";
}
//#endregion
//#region ../core/src/utils/inferSpecBaseUrl.js
var qC = [
	["/docs/example-specs/", "/docs/example-specs/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], JC = /^(?:[a-z]+:)?\/\//i, YC = "https://example.invalid";
function XC(e) {
	return JC.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function ZC(e) {
	let t = new URL(e, YC), n = qC.find(([e]) => t.pathname.startsWith(e));
	if (n) return $C(n[1], t, XC(e));
}
function QC(e) {
	let t = ZC(e);
	if (t) return t;
	let n = new URL(e, YC);
	return $C(new URL("./", n).pathname, n, XC(e));
}
function $C(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region ../core/src/embedFactory.js
function ew(e) {
	return async function(t, n, r = {}) {
		let i = !0, a = () => i, o;
		if (C(t)) {
			if (o = document.querySelector(t), !o) throw Error(`No such element: ${t}`);
		} else if (t instanceof HTMLElement) o = t;
		else throw Error(`Invalid element: ${t}`);
		let s;
		try {
			let t = x(n) ? n : await nw(n);
			if (t.baseUrl ??= "", t.padding ??= 10, o == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", o.appendChild(e), o = e;
			}
			s = new e(o, t, r), tw(s, r), await s.launch();
		} catch (e) {
			o.innerText = e.toString(), console.error(e);
		}
		return {
			views: WC(s, a),
			datasets: LC(s, a),
			finalize() {
				for (i = !1, s.destroy(); o.firstChild;) o.firstChild.remove();
			},
			addEventListener(e, t) {
				s.addEventListener(e, t);
			},
			removeEventListener(e, t) {
				s.removeEventListener(e, t);
			},
			getScaleResolutionByName(e) {
				return s.getNamedScaleResolutions().get(e);
			},
			getParam: s.getParam.bind(s),
			awaitVisibleLazyData: s.awaitVisibleLazyData.bind(s),
			getRenderedBounds: s.getRenderedBounds.bind(s),
			updateNamedData: s.updateNamedData.bind(s),
			getLogicalCanvasSize: s.getLogicalCanvasSize.bind(s),
			exportCanvas: s.exportCanvas.bind(s),
			imageExport: {
				raster: s.exportRaster.bind(s),
				svg: s.exportSvg.bind(s),
				analyzeSvg: s.analyzeSvgExport.bind(s)
			},
			debug: {
				getViewRoot() {
					return s ? s.viewRoot : void 0;
				},
				getModules() {
					return import("./debug-Bzc3SoRg.js");
				},
				createPickingBufferVisualization() {
					return i ? s.createPickingBufferVisualization() : void 0;
				}
			}
		};
	};
}
function tw(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function nw(e) {
	let t;
	try {
		t = await Yf(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl ||= QC(e), t;
}
//#endregion
//#region ../core/src/index.js
var rw = ew(MC);
//#endregion
export { tl as $, Qh as A, qd as B, k_ as C, ug as D, Ug as E, Xf as F, fu as G, gd as H, Qf as I, hl as J, Kl as K, Jf as L, Ch as M, um as N, lg as O, Op as P, nl as Q, Yf as R, z_ as S, S_ as T, _d as U, vd as V, vu as W, fl as X, dl as Y, ul as Z, Jv as _, ur as _t, MC as a, Oa as at, rv as b, rS as c, Yi as ct, Ux as d, K as dt, Ac as et, dx as f, fi as ft, qv as g, dr as gt, sy as h, ui as ht, WC as i, ic as it, zh as j, mg as k, Vx as l, qi as lt, Zy as m, G as mt, nw as n, Mc as nt, TS as o, Va as ot, Wb as p, Xr as pt, Sl as q, LC as r, jc as rt, wS as s, za as st, rw as t, Ic as tt, Hx as u, mi as ut, Av as v, A_ as w, nv as x, Y as y, J as z };
