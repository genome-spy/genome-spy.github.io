import { $ as e, $n as t, An as n, At as r, B as i, Bn as a, Bt as o, C as s, Cn as c, Ct as l, D as u, Dn as d, Dt as f, E as p, En as m, Et as h, F as g, Fn as _, Ft as v, G as y, Gn as b, Gt as x, H as S, Hn as C, Ht as w, I as T, In as E, It as D, J as O, Jn as k, Jt as ee, Kn as A, Kt as te, L as ne, Ln as j, Lt as re, M, Mn as ie, Mt as N, N as ae, Nn as oe, Nt as se, O as ce, On as le, Ot as ue, Pn as de, Pt as fe, Qn as pe, R as me, Rn as he, Rt as ge, S as _e, St as ve, T as ye, Tn as be, Tt as xe, U as Se, Un as Ce, Ut as we, V as Te, Vn as Ee, Vt as De, Wn as Oe, Wt as ke, X as Ae, Xn as je, Xt as Me, Y as Ne, Yn as Pe, Yt as Fe, Zn as Ie, Zt as Le, _ as Re, _t as ze, a as Be, an as Ve, ar as He, bn as Ue, bt as We, c as Ge, cn as Ke, ct as qe, d as Je, dt as Ye, en as Xe, er as Ze, fn as Qe, g as $e, gn as et, gt as tt, h as nt, hn as rt, ht as it, i as at, ir as ot, it as st, j as ct, jn as lt, jt as ut, kn as dt, kt as ft, l as pt, ln as P, lt as mt, m as F, mn as ht, mt as gt, nr as _t, nt as vt, o as yt, on as bt, or as xt, ot as St, p as Ct, pn as wt, pt as Tt, q as Et, qn as Dt, r as Ot, rt as kt, sn as At, sr as jt, t as Mt, tr as Nt, tt as Pt, u as Ft, un as I, ut as It, v as Lt, vt as Rt, w as zt, wn as Bt, wt as Vt, x as L, xn as Ht, xt as Ut, y as Wt, yn as Gt, yt as Kt, z as qt, zn as R, zt as Jt } from "./clipOptions-Dqn337WO.js";
import { a as Yt, c as Xt, f as Zt, i as Qt, l as $t, n as en, o as tn, p as nn, r as rn, s as an, t as on } from "./topK-W2SXlg3L.js";
import { a as sn, d as cn, f as ln, i as un, l as dn, o as fn, p as pn, t as mn, u as hn } from "./scaleNull-CVYLNO2O.js";
import { $ as gn, Q as _n, X as z, a as B, c as V, i as vn, n as yn, nt as bn, o as xn, r as Sn, s as Cn, t as wn, tt as Tn } from "./flowNode-BSjy0Wz3.js";
import { a as En, c as Dn, l as On, n as kn, o as H, r as An, s as jn, t as Mn, u as Nn } from "./url-DeOdSRrv.js";
import { A as Pn, B as Fn, C as In, D as Ln, E as U, F as Rn, G as zn, H as Bn, I as Vn, L as Hn, M as Un, N as Wn, O as Gn, P as Kn, R as qn, S as Jn, U as Yn, V as Xn, W as Zn, _ as Qn, a as $n, b as er, c as tr, d as nr, g as rr, h as ir, i as ar, j as or, k as sr, l as W, m as cr, n as lr, o as ur, p as dr, q as fr, u as pr, v as mr, w as G, x as hr, y as gr, z as _r } from "./viewSelectors-B4CZ1cPy.js";
import { a as vr, i as yr, n as br, o as xr, r as Sr } from "./rasterization-QktH8Sn2.js";
import { a as Cr, i as wr, n as Tr, t as Er } from "./viewError-BJNuAb_4.js";
import { t as Dr } from "./warning-CpIIpk8e.js";
import { a as Or, c as kr, d as Ar, i as jr, n as Mr, o as Nr, r as Pr, s as Fr, t as K } from "./rectangle-CQIQpWfg.js";
import { i as Ir, n as Lr, r as Rr, t as zr } from "./containerView-FJse6hPt.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var Br = globalThis, Vr = Br.ShadowRoot && (Br.ShadyCSS === void 0 || Br.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Hr = Symbol(), Ur = /* @__PURE__ */ new WeakMap(), Wr = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== Hr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (Vr && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = Ur.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ur.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, Gr = (e) => new Wr(typeof e == "string" ? e : e + "", void 0, Hr), Kr = (e, ...t) => new Wr(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, Hr), qr = (e, t) => {
	if (Vr) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = Br.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, Jr = Vr ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return Gr(t);
})(e) : e, { is: Yr, defineProperty: Xr, getOwnPropertyDescriptor: Zr, getOwnPropertyNames: Qr, getOwnPropertySymbols: $r, getPrototypeOf: ei } = Object, ti = globalThis, ni = ti.trustedTypes, ri = ni ? ni.emptyScript : "", ii = ti.reactiveElementPolyfillSupport, ai = (e, t) => e, oi = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ri : null;
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
}, si = (e, t) => !Yr(e, t), ci = {
	attribute: !0,
	type: String,
	converter: oi,
	reflect: !1,
	useDefault: !1,
	hasChanged: si
};
Symbol.metadata ??= Symbol("metadata"), ti.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var li = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ci) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && Xr(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = Zr(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? ci;
	}
	static _$Ei() {
		if (this.hasOwnProperty(ai("elementProperties"))) return;
		let e = ei(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(ai("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ai("properties"))) {
			let e = this.properties, t = [...Qr(e), ...$r(e)];
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
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(Jr(e));
		} else e !== void 0 && t.push(Jr(e));
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
		return qr(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? oi : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? oi : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? si)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
li.elementStyles = [], li.shadowRootOptions = { mode: "open" }, li[ai("elementProperties")] = /* @__PURE__ */ new Map(), li[ai("finalized")] = /* @__PURE__ */ new Map(), ii?.({ ReactiveElement: li }), (ti.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var ui = globalThis, di = (e) => e, fi = ui.trustedTypes, pi = fi ? fi.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, mi = "$lit$", hi = `lit$${Math.random().toFixed(9).slice(2)}$`, gi = "?" + hi, _i = `<${gi}>`, vi = document, yi = () => vi.createComment(""), bi = (e) => e === null || typeof e != "object" && typeof e != "function", xi = Array.isArray, Si = (e) => xi(e) || typeof e?.[Symbol.iterator] == "function", Ci = "[ 	\n\f\r]", wi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ti = /-->/g, Ei = />/g, Di = RegExp(`>|${Ci}(?:([^\\s"'>=/]+)(${Ci}*=${Ci}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), Oi = /'/g, ki = /"/g, Ai = /^(?:script|style|textarea|title)$/i, q = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), ji = Symbol.for("lit-noChange"), J = Symbol.for("lit-nothing"), Mi = /* @__PURE__ */ new WeakMap(), Ni = vi.createTreeWalker(vi, 129);
function Pi(e, t) {
	if (!xi(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return pi === void 0 ? t : pi.createHTML(t);
}
var Fi = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = wi;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === wi ? c[1] === "!--" ? o = Ti : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = Di) : (Ai.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = Di) : o = Ei : o === Di ? c[0] === ">" ? (o = i ?? wi, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? Di : c[3] === "\"" ? ki : Oi) : o === ki || o === Oi ? o = Di : o === Ti || o === Ei ? o = wi : (o = Di, i = void 0);
		let d = o === Di && e[t + 1].startsWith("/>") ? " " : "";
		a += o === wi ? n + _i : l >= 0 ? (r.push(s), n.slice(0, l) + mi + n.slice(l) + hi + d) : n + hi + (l === -2 ? t : d);
	}
	return [Pi(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ii = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Fi(t, n);
		if (this.el = e.createElement(l, r), Ni.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Ni.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(mi)) {
					let t = u[o++], n = i.getAttribute(e).split(hi), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Vi : r[1] === "?" ? Hi : r[1] === "@" ? Ui : Bi
					}), i.removeAttribute(e);
				} else e.startsWith(hi) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Ai.test(i.tagName)) {
					let e = i.textContent.split(hi), t = e.length - 1;
					if (t > 0) {
						i.textContent = fi ? fi.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], yi()), Ni.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], yi());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === gi) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(hi, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += hi.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = vi.createElement("template");
		return n.innerHTML = e, n;
	}
};
function Li(e, t, n = e, r) {
	if (t === ji) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = bi(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = Li(e, i._$AS(e, t.values), i, r)), t;
}
var Ri = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? vi).importNode(t, !0);
		Ni.currentNode = r;
		let i = Ni.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new zi(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Wi(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Ni.nextNode(), a++);
		}
		return Ni.currentNode = vi, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, zi = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = Li(this, e, t), bi(e) ? e === J || e == null || e === "" ? (this._$AH !== J && this._$AR(), this._$AH = J) : e !== this._$AH && e !== ji && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? Si(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== J && bi(this._$AH) ? this._$AA.nextSibling.data = e : this.T(vi.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ii.createElement(Pi(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ri(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Mi.get(e.strings);
		return t === void 0 && Mi.set(e.strings, t = new Ii(e)), t;
	}
	k(t) {
		xi(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(yi()), this.O(yi()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = di(e).nextSibling;
			di(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Bi = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = J, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = J;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = Li(this, e, t, 0), a = !bi(e) || e !== this._$AH && e !== ji, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = Li(this, r[n + o], t, o), s === ji && (s = this._$AH[o]), a ||= !bi(s) || s !== this._$AH[o], s === J ? e = J : e !== J && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Vi = class extends Bi {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === J ? void 0 : e;
	}
}, Hi = class extends Bi {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== J);
	}
}, Ui = class extends Bi {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = Li(this, e, t, 0) ?? J) === ji) return;
		let n = this._$AH, r = e === J && n !== J || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== J && (n === J || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Wi = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		Li(this, e);
	}
}, Gi = {
	M: mi,
	P: hi,
	A: gi,
	C: 1,
	L: Fi,
	R: Ri,
	D: Si,
	V: Li,
	I: zi,
	H: Bi,
	N: Hi,
	U: Ui,
	B: Vi,
	F: Wi
}, Ki = ui.litHtmlPolyfillSupport;
Ki?.(Ii, zi), (ui.litHtmlVersions ??= []).push("3.3.3");
var qi = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new zi(t.insertBefore(yi(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ji = globalThis, Yi = class extends li {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = qi(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return ji;
	}
};
Yi._$litElement$ = !0, Yi.finalized = !0, Ji.litElementHydrateSupport?.({ LitElement: Yi });
var Xi = Ji.litElementPolyfillSupport;
Xi?.({ LitElement: Yi }), (Ji.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/d3-dsv/src/tsv.js
var Zi = nn("	");
Zi.parse;
var Qi = Zi.parseRows;
Zi.format, Zi.formatBody, Zi.formatRows, Zi.formatRow, Zi.formatValue;
//#endregion
//#region ../../node_modules/d3-array/src/count.js
function $i(e, t) {
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
function ea(e, t) {
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
function ta(e, t) {
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
function na(e, t) {
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
function ra(e, n) {
	return t(e, .5, n);
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function ia(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region ../core/src/data/formats/parquet.js
async function aa() {
	let { parquetReadObjects: e } = await import("./parquetRead-D-yY8njE.js");
	return e;
}
async function oa(e) {
	return await (await aa())({ file: e instanceof Uint8Array ? sa(e) : e });
}
function sa(e) {
	if (e.buffer instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) return e.buffer;
	{
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t.buffer;
	}
}
oa.responseType = "arrayBuffer", $t("parquet", oa);
//#endregion
//#region ../core/src/data/formats/arrow.js
async function ca() {
	let { tableFromIPC: e } = await import("./src-DJtvThVC.js");
	return e;
}
async function la(e) {
	return (await ca())(ua(e)).toArray();
}
function ua(e) {
	if (e instanceof Uint8Array && e.byteOffset % 8 != 0) {
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t;
	}
	return e;
}
la.responseType = "arrayBuffer", $t("arrow", la);
//#endregion
//#region ../core/src/data/formats/bed.js
var da = /^\s*$/, fa = /^\s*(?:browser\b|track\b|#)/, pa;
async function ma() {
	return pa ??= import("./esm-CvpR1OcU.js").then((e) => e.default), pa;
}
async function ha(e) {
	let t = new (await (ma()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (da.test(a) || fa.test(a)) continue;
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
$t("bed", ha);
//#endregion
//#region ../core/src/data/formats/bedpe.js
var ga = /^\s*$/, _a = /^\s*(?:browser\b|track\b|#)/, va = [
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
], ya = va.slice(0, 6), ba = (e) => e, xa = (e) => e == "." ? null : e, Sa = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, Ca = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, wa = {
	chrom1: xa,
	chrom2: xa,
	name: xa,
	strand1: Sa,
	strand2: Sa,
	start1: Ca,
	end1: Ca,
	start2: Ca,
	end2: Ca,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function Ta(e) {
	if (e.length < ya.length) return !1;
	for (let t = 0; t < ya.length; t++) if (e[t] != ya[t]) return !1;
	return !0;
}
function Ea(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if (ga.test(e) || _a.test(e)) continue;
			i = !0;
		}
		if (ga.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (Ta(t) ? t : va);
			for (let t of e) s.push(t), c.push(wa[t] ?? ba);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(ba);
		if (t.length < ya.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${ya.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
$t("bedpe", Ea);
//#endregion
//#region ../core/src/data/formats/fasta.js
function Da(e, t) {
	let n = [], r, i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let t = i[e], a = e + 1;
		if (t.trim() != "") {
			if (t.startsWith(">")) {
				let [e] = t.slice(1).trim().split(/\s+/);
				if (!e) throw Error(`Invalid FASTA header on line ${a}: missing identifier`);
				r = {
					identifier: e,
					sequence: ""
				}, n.push(r);
			} else if (r) r.sequence += t.replace(/\s/g, "");
			else throw Error(`Invalid FASTA file on line ${a}: sequence data before the first header`);
		}
	}
	return n;
}
$t("fasta", Da);
//#endregion
//#region ../core/src/data/formats/wig.js
var Oa = /^(?:variableStep|fixedStep)(?:\s|$)/, ka = /^(?:browser\b|track\b|#)/;
function Aa(e) {
	let t, n = [], r = e.split(/\r?\n/);
	for (let e = 0; e < r.length; e++) {
		let i = e + 1, a = r[e].trim();
		if (!a || ka.test(a)) continue;
		if (Oa.test(a)) {
			t = ja(a, i);
			continue;
		}
		if (!t) throw Fa(i, "data appears before a declaration");
		let o = a.split(/\s+/);
		if (t.type == "fixedStep") {
			if (o.length != 1) throw Fa(i, "fixedStep data must contain one value");
			let e = Pa(o[0], i), r = t.nextPosition - 1;
			n.push({
				chrom: t.chrom,
				start: r,
				end: r + t.span,
				score: e
			}), t.nextPosition += t.step;
		} else {
			if (o.length != 2) throw Fa(i, "variableStep data must contain a position and value");
			let e = Na(o[0], "position", i) - 1;
			n.push({
				chrom: t.chrom,
				start: e,
				end: e + t.span,
				score: Pa(o[1], i)
			});
		}
	}
	return n;
}
function ja(e, t) {
	let [n, ...r] = e.split(/\s+/), i = {};
	for (let e of r) {
		let n = e.indexOf("=");
		if (n <= 0 || n == e.length - 1) throw Fa(t, `invalid declaration attribute "${e}"`);
		let r = e.slice(0, n);
		if (r in i) throw Fa(t, `duplicate attribute "${r}"`);
		i[r] = e.slice(n + 1);
	}
	return n == "variableStep" ? (Ma(i, "chrom", n, t), {
		type: "variableStep",
		chrom: i.chrom,
		span: i.span ? Na(i.span, "span", t) : 1
	}) : (Ma(i, "chrom", n, t), Ma(i, "start", n, t), {
		type: "fixedStep",
		chrom: i.chrom,
		nextPosition: Na(i.start, "start", t),
		step: i.step ? Na(i.step, "step", t) : 1,
		span: i.span ? Na(i.span, "span", t) : 1
	});
}
function Ma(e, t, n, r) {
	if (!(t in e)) throw Fa(r, `${n} declaration is missing "${t}"`);
}
function Na(e, t, n) {
	let r = Number(e);
	if (!Number.isInteger(r) || r <= 0) throw Fa(n, `${t} must be a positive integer`);
	return r;
}
function Pa(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Fa(t, "score must be a finite number");
	return n;
}
function Fa(e, t) {
	return /* @__PURE__ */ Error(`Cannot parse WIG line ${e}: ${t}`);
}
$t("wig", Aa);
//#endregion
//#region ../core/src/data/formats/vcfParser.js
async function Ia(e) {
	let t = (await import("./esm-DzQDfrsZ.js")).default;
	return new t({ header: e });
}
function La(e) {
	return delete e.GENOTYPES, e.SAMPLES = e.SAMPLES(), e;
}
function Ra(e, t) {
	return e.map((e) => La(t.parseLine(e)));
}
//#endregion
//#region ../core/src/data/formats/vcf.js
function* za(e) {
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
async function Ba(e) {
	let t = [], n = [], r;
	for (let { line: i, lineNumber: a } of za(e)) if (i) {
		if (!r && i.startsWith("#")) t.push(i);
		else {
			r ??= await Ia(t.join("\n"));
			try {
				n.push(La(r.parseLine(i)));
			} catch (e) {
				throw Error(`Cannot parse VCF line ${a}`, { cause: e });
			}
		}
	}
	return r || await Ia(t.join("\n")), n;
}
$t("vcf", Ba);
//#endregion
//#region ../core/src/scale/ticks.js
function Va(e, t, n) {
	return he(t) && n != null && (t = Math.min(t, ~~(A(e.domain()) / n) || 1)), R(t) && (t.step, t = t.interval), t;
}
function Ha(e, t, n) {
	let r = e.type === "index" || e.type === "locus", i = r ? vr(e) : 0;
	var a = e.range(), o = r ? a[0] : Math.floor(a[0]), s = r ? b(a) : Math.ceil(b(a));
	if (o > s && (a = s, s = o, o = a), t = t.filter(function(t) {
		return t = e(t) + i, o <= t && t <= s;
	}), n > 0 && t.length > 1) {
		for (var c = [t[0], b(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = c);
	}
	return t;
}
function Ua(e, t) {
	return e.bins ? Ha(e, Wa(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function Wa(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function Ga(e, t, n, r = !0) {
	let i = typeof t == "number" && (!Number.isFinite(t) || t <= 0) ? void 0 : t;
	var a = e.tickFormat ? e.tickFormat(i, n) : n ? z(n) : String;
	if (wt(e.type)) {
		var o = qa(n);
		a = e.bins || !r ? o : Ka(a, o);
	}
	return a;
}
function Ka(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function qa(e) {
	var t = _n(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e": --t.precision;
		}
		return Ja(z(t), z(".1f")(1)[1]);
	}
	return z(t);
}
function Ja(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = Ya(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Ya(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region ../core/src/data/sources/lazy/lazyDataSourceRegistry.js
var Xa = [], Za = [];
function Y(e, t) {
	Za.push({
		guard: e,
		Source: t
	});
}
function Qa(e, t) {
	for (let n of Xa) if (n.guard(e)) return new n.Source(e, t);
	for (let n of Za) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/data/sources/lazy/singleAxisLazySource.js
var $a = class extends H {
	#e = !1;
	#t;
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw eo(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
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
		this.reset(), this.complete(!1);
	}
	invalidateData() {
		this._lastLoadedDomain = void 0, this.reset(), this.complete(!1);
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
function eo(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region ../core/src/data/sources/lazy/axisTickSource.js
var to = class extends $a {
	ticks = [];
	tickLabels = [];
	zoomExtentTicks = [];
	#e;
	#t;
	constructor(e, t) {
		let n = {
			axis: {},
			...e
		};
		super(t, n.channel), this.params = n;
		let r = this.scaleResolution.getResolvedScaleType();
		r !== "band" && r !== "point" && this.registerDisposer(this.scaleResolution.subscribeZoomExtent(() => {
			this.completed && this.onDomainChanged();
		}));
		let i = n.axis.tickCount;
		if (F(i)) {
			let e = new Bn(() => t.paramRuntime, (e) => t.getScaleResolution(e), void 0, { getSpecOrigin: t.context.getSpecOrigin });
			this.#t = e.allocateSetter("axisLength", 0, !0), this.#e = e.watchExpression(i, () => {
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
		let r = this.#e ? this.#e() : n.tickCount, i = Va(e, r, n.tickMinStep), a = n.values ? Ha(e, n.values, i) : Ua(e, i), o = !n.values && n.extraValues && P(e.type) ? Ha(e, n.extraValues) : [], s = o.length ? no(a, o) : a, c = this.scaleResolution.hasConfiguredZoomExtent() ? un(e.type, this.scaleResolution.zoomExtent) : [], l = this.ticks == null || !V(s, this.ticks), u = Ga(e, r, n.format), d = l;
		if (!d) {
			for (let e = 0; e < s.length; e++) if (u(s[e]) !== this.tickLabels[e]) {
				d = !0;
				break;
			}
		}
		if (l || d || !V(c, this.zoomExtentTicks)) {
			let t = d ? s.map(u) : this.tickLabels;
			this.ticks = s, this.tickLabels = t, this.zoomExtentTicks = c;
			let r = new Set(n.values ? s : o), i = new Set(c), a = e.type == "locus" ? e.genome() : void 0;
			this.publishData([s.map((e, n) => {
				let o = {
					value: e,
					label: t[n],
					explicit: r.has(e),
					...i.has(e) ? { zoomExtent: !0 } : {}
				};
				if (a) {
					let t = a.toChromosome(e);
					return {
						...o,
						chromLabel: t.name
					};
				}
				return o;
			})]);
		}
	}
};
function no(e, t) {
	let n = new Set(e);
	return t.forEach((e) => n.add(e)), Array.from(n).sort((e, t) => e - t);
}
function ro(e) {
	return e?.type == "axisTicks";
}
Y(ro, to);
//#endregion
//#region ../core/src/data/sources/lazy/axisGenomeSource.js
var io = class extends $a {
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
function ao(e) {
	return e?.type == "axisGenome";
}
Y(ao, io);
//#endregion
//#region ../core/src/view/legend/legendEntries.js
function oo(e, t = String) {
	return e.getDomain().map((e, n) => ({
		value: e,
		label: t(e),
		_legendIndex: n
	}));
}
//#endregion
//#region ../core/src/utils/suspension.js
var so = class {
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
}, co = 5, lo = "_legendSymbolSize", uo = "_legendStrokeWidth", fo = class extends H {
	#e = void 0;
	#t = !1;
	#n = new so(() => this.#i());
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = po(t, e.channel), !this.scaleResolution) throw Error(`The legend entries data source cannot find a resolved scale for channel "${e.channel}".`);
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
		if (!this.#e || !V(e, this.#e)) {
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" });
			for (let e of this.#o()) this._propagate(e);
			this.complete();
		}
	}
	#o() {
		let e = this.params.dataType == "quantitative" ? this.#c() : this.#s();
		if (this.params.channel == "size") {
			let t = this.scaleResolution.getScale();
			for (let n of e) this.params.sizeMode == "strokeWidth" ? n[uo] = t(n.value) : n[lo] = t(n.value);
		}
		return e;
	}
	#s() {
		let e = this.params.format, t = e ? (t) => z(e)(Number(t)) : void 0, n = oo(this.scaleResolution, t);
		if (!this.params.values) return n;
		let r = new Map(n.map((e) => [e.value, e]));
		return this.params.values.flatMap((e) => r.has(e) ? [r.get(e)] : []);
	}
	#c() {
		let e = this.scaleResolution.getScale(), t = this.params.count ?? co, n = Ga(e, t, this.params.format);
		return (this.params.values ? Ha(e, this.params.values, t) : Ua(e, t)).flatMap((e) => {
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
function po(e, t) {
	let n = e.dataParent;
	for (; n && Jn(n);) n = n.dataParent;
	return n?.getScaleResolution(t) ?? e.getScaleResolution(t);
}
function mo(e) {
	return e?.type == "legendEntries";
}
Y(mo, fo);
//#endregion
//#region ../core/src/scales/bandMapping.js
function ho({ domain: t, range: n, cuts: r, width: i, ranks: a, paddingInner: o, paddingOuter: s, align: c, minimumSpan: l = 1, round: u = !1 }) {
	let d = t[1] - t[0], f = n[1] - n[0], p = Math.sign(f), m = a?.[0] ?? e(r, t[0]), h = a?.[1] ?? e(r, t[1], !0), g = i === 0 || Math.abs(f) > i * (h - m), _ = g ? i : 0, v = _ * p, y = f - v * (h - m), b = y / (Math.max(a ? 2 ** -52 : l, d - o + 2 * s) || 1);
	u && (b = p * Math.floor(Math.abs(b)));
	let x = n[0] + (y - b * (d - o)) * c, S = Math.abs(b) * (1 - o);
	u && (x = Math.round(x), S = Math.round(S));
	function C(n, i = 0, a = !1) {
		if (!g) return NaN;
		let o = Math.floor(n);
		return x + (o - t[0]) * b + v * (e(r, o, a) - m) + p * S * i;
	}
	function w(e, n = b, i = x) {
		let a = (e - i) * p, o = n * p;
		if (o === 0) return {
			value: t[0],
			rank: m
		};
		let s = 0, c = r.length;
		for (; s < c;) {
			let e = s + c >>> 1;
			(r[e] - t[0]) * o + _ * (e + 1 - m) < a ? s = e + 1 : c = e;
		}
		if (s < r.length && _ > 0) {
			let e = (r[s] - t[0]) * o + _ * (s - m);
			if (a >= e) return {
				value: r[s],
				rank: s + (a - e) / _
			};
		}
		return {
			value: t[0] + (a - _ * (s - m)) / o,
			rank: s
		};
	}
	function T(e, a, u) {
		if (!i || !r.length) {
			let r = Math.max(1, d * e), i = 2 * s - o, p = Math.max(l, d + i) || 1, m = Math.max(l, r + i) || 1, h = (a - n[0]) / f, g = t[0] + (h - c) * (p - m) + c * (d - r) - u * r;
			return {
				domain: [g, g + r],
				ranks: void 0
			};
		}
		let h = w(a), g = Math.abs(f) / (Math.max(l, 1 - o + 2 * s) || 1), _ = p * Math.min(g, Math.abs(b) / e);
		return E(_, a - _ * (h.value - t[0]) - v * (h.rank - m) + u * f);
	}
	function E(e, t) {
		let r = w(n[0] + e * 2 * s * c, e, t), i = w(n[1] + e * (o - 2 * s * (1 - c)), e, t);
		return {
			domain: [r.value, i.value],
			ranks: [r.rank, i.rank]
		};
	}
	function D(e, n) {
		let r = Math.log(e.step / b), i = b * Math.exp(n * r), a = r === 0 ? n : Math.expm1(n * r) / Math.expm1(r), o = e.start + (t[0] - e.domainStart) * e.step + v * (m - e.firstRank);
		return E(i, x + a * (o - x));
	}
	return {
		fits: g,
		position: C,
		invertPoint: w,
		navigate: T,
		interpolate: D,
		domainStart: t[0],
		step: b,
		bandwidth: S,
		start: x,
		firstRank: m,
		lastRank: h,
		gap: v
	};
}
function go(e) {
	if (e[1] - e[0] < 1 - 2 ** -52 && (e[0] !== 0 || e[1] !== 0)) {
		let t = (e[0] + e[1]) / 2;
		return [t - .5, t + .5];
	}
	return e;
}
//#endregion
//#region ../core/src/scales/scaleBand.js
function _o() {
	let e = [], t = /* @__PURE__ */ new Map(), n = [0, 1], r = !1, i = null, a = {
		paddingInner: 0,
		paddingOuter: 0,
		align: .5
	}, o = /* @__PURE__ */ new Map(), s = ((e) => u().position(e)), c = kt(s, l);
	function l() {
		return o.clear(), s;
	}
	s.domain = function(n) {
		if (!arguments.length) return e.slice();
		t = /* @__PURE__ */ new Map();
		for (let e of n) t.has(e) || t.set(e, t.size);
		return e = Array.from(t.keys()), l();
	}, s.viewport = function(e) {
		if (!arguments.length) return vo(i);
		if (e !== null && r) throw Error("Categorical scale viewports do not support round: true.");
		return i = vo(e), l();
	}, s.range = function(e) {
		if (!arguments.length) return n.slice();
		let [t, r] = e;
		return n = [+t, +r], l();
	}, s.rangeRound = (e) => s.range(e).round(!0), s.round = function(e) {
		if (!arguments.length) return r;
		if (e && i) throw Error("Categorical scale viewports do not support round: true.");
		return r = !!e, l();
	};
	for (let e of [
		"paddingInner",
		"paddingOuter",
		"align"
	]) s[e] = function(t) {
		return arguments.length ? (a[e] = St(t), l()) : a[e];
	};
	s.padding = function(e) {
		return arguments.length ? (a.paddingInner = a.paddingOuter = St(e), l()) : a.paddingInner;
	};
	function u(e) {
		let t = c.enabled(), n = t ? e ?? c.axisLength() : 0, r = o.get(n);
		return r || (r = d(n, t), o.set(n, r)), r;
	}
	function d(o, s) {
		let l = e, u = t, d = l.length, f = n[1] < n[0], p = ho({
			domain: i?.interval ?? [0, d],
			range: n,
			cuts: s ? c.positions : [],
			width: o > 0 ? c.width / o : 0,
			ranks: i?.gapRanks,
			...a,
			align: f ? 1 - a.align : a.align,
			minimumSpan: 0,
			round: r
		}), m = !s || o > 0 && p.fits, h = m ? p.bandwidth : 0, g = (e, t = 0) => m ? p.position(e, f ? 1 - t : t) : NaN, _ = (e, t = 0) => {
			let n = u.get(e);
			return n === void 0 ? void 0 : g(n, t);
		}, v = (e) => {
			let t = 0, n = d;
			for (; t < n;) {
				let r = t + n >>> 1;
				g(f ? d - 1 - r : r) <= e ? t = r + 1 : n = r;
			}
			return t - 1;
		};
		return {
			position: _,
			invertRange: (e) => {
				if (!m || e[0] == null || e[1] == null) return;
				if (!d) return s ? void 0 : [];
				let t = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
				if (Number.isNaN(t) || Number.isNaN(n)) return;
				let r = Math.max(0, v(t));
				t - g(f ? d - 1 - r : r) > h + 1e-10 && ++r;
				let i = Math.min(d - 1, v(n));
				return f && ([r, i] = [d - 1 - i, d - 1 - r]), r > i ? void 0 : l.slice(r, i + 1);
			},
			fits: m,
			step: m ? Math.abs(p.step) : 0,
			bandwidth: h,
			numeric: p
		};
	}
	return s.navigationMapping = (e) => u(e).numeric, s.gapMapping = (e) => c.enabled() ? u(e) : void 0, s.sizeForStep = (t) => e.length ? t * Ve(e.length, a.paddingInner, a.paddingOuter) + (c.enabled() ? c.width * c.positions.length : 0) : 0, s.step = () => u().step, s.bandwidth = () => u().bandwidth, s.invertRange = (e) => u().invertRange(e), s.invert = (e) => s.invertRange([e, e])?.[0], s.copy = () => {
		let t = _o().domain(e).range(n).round(r).viewport(i).paddingInner(a.paddingInner).paddingOuter(a.paddingOuter).align(a.align).gapPositions(c.positions).gapWidth(c.width).axisLength(c.axisLength);
		return t.type = s.type, s.props && (t.props = s.props), t;
	}, s;
}
function vo(e) {
	if (e === null) return null;
	let { interval: t, gapRanks: n } = e;
	if (!Array.isArray(t) || t.length !== 2 || !t.every(Number.isFinite) || t[1] < t[0] || !n && t[0] === t[1] || n && (n.length !== 2 || !n.every(Number.isFinite) || n[1] < n[0])) throw Error("A categorical viewport requires an increasing finite rank interval and optional finite gap ranks.");
	let r = n ? t : go(t);
	return {
		interval: [r[0], r[1]],
		...n ? { gapRanks: [n[0], n[1]] } : {}
	};
}
function yo(e, t) {
	if (!e) return e;
	let n = e.gapRanks ? e.interval : go(e.interval), r = t ? ie(n, 0, t) : n;
	return e.gapRanks && !V(r, e.interval) ? yo({ interval: r }, t) : {
		...e,
		interval: r
	};
}
function bo(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = () => bo(t()), e;
}
function xo() {
	return bo(_o().paddingInner(1));
}
rt(te, _o, ["discrete"]), rt(Le, xo, ["discrete"]);
var So = "locus", Co = "index", wo = 5;
function To(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function Eo(e) {
	return P(e) && ![
		"sequential",
		Co,
		So
	].includes(e);
}
function Do(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var Oo = k(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.viewport.fp64.name".split("."));
function ko(e, t, n, r = !1) {
	n = Do(n), Ao(t, e, n);
	let i = Lo(t, e, n, r);
	i.domain && t.domain(i.domain), i.applyOrdinalUnknown && t.unknown(i.ordinalUnknown), Ho(t, e, Vo(t, e, i.count));
}
function Ao(e, t, n) {
	n = Do(n);
	for (let r in t) if (!Oo[r]) {
		if (r === "padding" && Eo(e.type)) continue;
		j(e[r]) ? e[r](t[r]) : n.warn("Unsupported scale property: " + r);
	}
}
function jo(e, t, n) {
	let r, i = {};
	for (let a in t) a in n || Oo[a] || a === "padding" && Eo(e) || (r ??= rt(e)(), j(r[a]) && (i[a] = r[a]()));
	return i;
}
function Mo(e, t) {
	Ho(e, t, Vo(e, t, e.domain().length));
}
function No(e, t) {
	let n = !e.domain && !e.domainRaw && P(e.type), r = n ? {
		...e,
		domain: [0, 0]
	} : e, i = Po(r), a = rt(i);
	if (!a) throw Error("Unknown scale type: " + i);
	let o = a();
	return ko(r, o, t, n), o;
}
function Po(e) {
	var t = e.type, n = "", r;
	return t === "sequential" ? Xe + "-" + Fe : (Fo(e) && (r = e.rawDomain ? e.rawDomain.length : e.domain ? e.domain.length + +(e.domainMid != null) : 0, n = r === 2 ? Xe + "-" : r === 3 ? ee + "-" : ""), (n + t || "linear").toLowerCase());
}
function Fo(e) {
	let t = e.type;
	return P(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(a));
}
function Io(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function Lo(e, t, n, r = !1) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	n = Do(n);
	let i = Io(e);
	var a = Ro(i, t.domainRaw, n);
	if (a > -1) return {
		domain: i.domain(),
		count: a,
		ordinalUnknown: i.type === "ordinal" && t.domainImplicit ? c : void 0,
		applyOrdinalUnknown: !1
	};
	var o = t.domain, s = i.type, l = t.zero || t.zero === void 0 && To(i), u, d;
	return o ? (Eo(s) && t.padding && o[0] !== b(o) && (o = zo(s, o, t.range, t.padding, t.exponent, t.constant)), (l || t.domainMin != null || t.domainMax != null || t.domainMid != null) && (u = (o = o.slice()).length - 1 || 1, l && (o[0] > 0 && (o[0] = 0), o[u] < 0 && (o[u] = 0)), t.domainMin != null && (o[0] = t.domainMin), t.domainMax != null && (o[u] = t.domainMax), t.domainMid != null && (d = t.domainMid, (d < o[0] || d > o[u]) && n.warn("Scale domainMid exceeds domain min or max.", d), o.splice(u, 0, d))), i.domain(Bo(s, o, n, r)), t.nice && i.nice && i.nice(t.nice !== !0 && Va(i, t.nice) || null), {
		domain: i.domain(),
		count: o.length,
		ordinalUnknown: s === "ordinal" && t.domainImplicit ? c : void 0,
		applyOrdinalUnknown: s === Me
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function Ro(e, t, n) {
	return t ? (e.domain(Bo(e.type, t, n)), t.length) : -1;
}
function zo(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(b(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? je(t, null, s) : e === "sqrt" ? Ie(t, null, s, .5) : e === "pow" ? Ie(t, null, s, i || 1) : e === "symlog" ? pe(t, null, s, a || 1) : Pe(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function Bo(e, t, r, i = !1) {
	return wt(e) && !i && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : +(t > 0));
	}, 0)) !== t.length && r.warn("Log scale domain includes zero: " + n(t)), t;
}
function Vo(e, t, n) {
	let r = t.bins;
	if (r && !_(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? b(t) : r.stop, a = r.step;
		a || de("Scale bins parameter missing step property."), r = gn(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function Ho(e, t, n) {
	var r = e.type, i = t.round || !1, a = t.range;
	if (t.rangeStep != null) a = Uo(r, t, n);
	else if (t.scheme && (a = Wo(r, t, n), j(a))) {
		if (e.interpolator) return e.interpolator(a);
		de(`Scale type ${r} does not support interpolating color schemes.`);
	}
	if (a && Qe(r)) return e.interpolator(At(Ko(a, t.reverse), t.interpolate, t.interpolateGamma));
	a && t.interpolate && e.interpolate ? e.interpolate(bt(t.interpolate, t.interpolateGamma)) : j(e.round) ? e.round(i) : j(e.rangeRound) && e.interpolate(i ? Gt : Ue), a && e.range(Ko(a, t.reverse));
}
function Uo(e, t, n) {
	e !== "band" && e !== "point" && de("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * Ve(n, i, r)];
}
function Wo(e, t, n) {
	var r = t.schemeExtent, i = t.schemeCount, o, s;
	return _(t.scheme) ? s = At(t.scheme, t.interpolate, t.interpolateGamma) : (a(t.scheme) ? o = t.scheme.toLowerCase() : (o = t.scheme.name.toLowerCase(), r = t.scheme.extent ?? r, i = t.scheme.count ?? i), s = et(o), s || de(`Unrecognized scheme name: ${t.scheme}`)), n = e === "threshold" ? n + 1 : e === "bin-ordinal" ? n - 1 : e === "quantile" || e === "quantize" ? +i || wo : n, Qe(e) ? Go(s, r, t.reverse) : j(s) ? ht(Go(s, r), n) : e === "ordinal" ? s : s.slice(0, n);
}
function Go(e, t, n) {
	return j(e) && (t || n) ? Ke(e, Ko(t || [0, 1], n)) : e;
}
function Ko(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region ../core/src/scales/legendGradientMapping.js
function qo(e, t, n, r = !1) {
	let i = Jo(e, t, n), a = Yo(i.length);
	if ("copy" in e && typeof e.copy == "function" && "invert" in e && typeof e.invert == "function") {
		let t = e.copy();
		return t.domain(i), t.range(a), t;
	}
	let o = e.props, s = o?.type;
	if (s) {
		let e = { ...o }, t = e;
		delete e.range, delete e.scheme, delete t.domainMin, delete t.domainMid, delete t.domainMax, delete t.schemeExtent, delete t.schemeCount;
		let n = No({
			...e,
			type: s,
			domain: i,
			range: a,
			zero: !1,
			nice: !1
		});
		if ("invert" in n && typeof n.invert == "function") return n;
	}
	if (r) throw Error("Gradient brushing requires an exact invertible position mapping.");
	return Zo(t, n);
}
function Jo(e, t, n) {
	if ("domain" in e && typeof e.domain == "function") {
		let r = e.domain().map(Qo);
		if (r.length >= 2) return [
			t,
			...r.slice(1, -1),
			n
		];
	}
	return [t, n];
}
function Yo(e) {
	let t = e - 1;
	return Array.from({ length: e }, (e, n) => n / t);
}
function Xo(e, t) {
	return (n) => e + (t - e) * n;
}
function Zo(e, t) {
	let n = ((n) => (n - e) / (t - e));
	return n.invert = Xo(e, t), n;
}
function Qo(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
//#endregion
//#region ../core/src/data/sources/lazy/legendGradientSource.js
var $o = 64, es = 5;
function ts(e) {
	let t = e[0], n = e.at(-1), r = n - t, i = e.length - 1, a = i ? r / i : .1;
	return [t - a, n + a];
}
function ns(e) {
	return e.type == "quantize" && "range" in e && typeof e.range == "function" && "invertExtent" in e && typeof e.invertExtent == "function" && "thresholds" in e && typeof e.thresholds == "function";
}
function rs(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
var is = class extends H {
	#e = void 0;
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = po(t, e.channel), !this.scaleResolution) throw Error(`The gradient legend data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#t();
		this.scaleResolution.addEventListener("domain", n), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	async load() {
		this.#e = void 0, this.#t();
	}
	#t() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !V(e, this.#e)) {
			let t = Number(e[0]), n = Number(e.at(-1));
			if (!Number.isFinite(t) || !Number.isFinite(n)) throw Error("Gradient legends require a finite numeric scale domain.");
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" }), this.publishData(t, n), this.complete();
		}
	}
	publishData(e, t) {
		throw Error("Gradient legend data source must implement publishData.");
	}
}, as = class extends is {
	get label() {
		return "legendGradientSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale();
		if (n.type == "threshold") {
			this.#t();
			return;
		}
		if (ns(n)) {
			this.#e(e, t, n);
			return;
		}
		let r = this.params.count ?? $o, i = qo(n, e, t), a = (e) => i.invert(e);
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
		let r = Zo(e, t);
		for (let [e, t] of n.range().entries()) {
			let [i, a] = n.invertExtent(t).map(rs), o = (i + a) / 2;
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
		let e = this.scaleResolution.getDomain().map(Number), [t, n] = ts(e), r = Zo(t, n), i = [
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
}, os = class extends is {
	get label() {
		return "legendGradientTicksSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale(), r = n.type == "threshold" ? ts(this.scaleResolution.getDomain().map(Number)) : [e, t], i = qo(n, r[0], r[1]), a = this.params.count ?? es, o = Va(n, a, void 0), s = Ga(n, a, this.params.format), c = this.params.values ? this.params.values.map(rs).filter((e) => {
			let t = i(e);
			return Number.isFinite(t) && t >= 0 && t <= 1;
		}) : ns(n) ? n.thresholds().map(rs) : Ua(n, o).map(rs);
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
function ss(e) {
	return e?.type == "legendGradient";
}
function cs(e) {
	return e?.type == "legendGradientTicks";
}
Y(ss, as), Y(cs, os);
//#endregion
//#region ../core/src/data/sources/lazy/scaleGroupsSource.js
function ls(e, t) {
	if (!e.length) return [];
	if (e.length !== 2 || !e.every(Number.isFinite)) throw Error("scaleGroups requires a finite full extent.");
	if (e[0] > e[1]) throw Error("scaleGroups requires normalized ascending bounds.");
	let n = Math.max(0, e[0]), r = Math.max(0, e[1]);
	if (n === r) return [];
	let i = [
		n,
		...t.filter((e) => e > n && e < r),
		r
	];
	return i.slice(1).map((e, t) => [i[t], e]);
}
var us = class extends H {
	#e = !1;
	#t = !1;
	#n = !1;
	#r;
	constructor(e, t) {
		super(t), this.params = e;
		let n = e.channels;
		if (!n.length || new Set(n).size !== n.length || n.some((e) => e !== "x" && e !== "y")) throw Error("scaleGroups channels must be a nonempty, unique list of x and/or y.");
		this.axes = n.map((e) => {
			let n = t.getScaleResolution(e);
			if (!n || ![
				"index",
				"locus",
				"band",
				"point"
			].includes(n.getResolvedScaleType())) throw Error(`scaleGroups requires a resolved index, locus, band, or point scale for ${e}.`);
			return {
				channel: e,
				extent: n.getFullExtentRef(),
				mapping: n.getMappingRef()
			};
		});
	}
	get label() {
		return "scaleGroupsSource";
	}
	get domainSensitiveScaleChannels() {
		return this.params.channels;
	}
	activate() {
		this.#e || (this.#e = !0, this.registerDisposer(this.paramRuntime.effect(this.axes.flatMap((e) => [e.extent, e.mapping]), () => {
			this.#t && this.#i(!1);
		})));
	}
	async load() {
		this.loadSynchronously();
	}
	loadSynchronously() {
		this.#t = !0, this.#i(!0);
	}
	isDataReady() {
		return this.#n && super.isDataReady();
	}
	#i(e) {
		let t = this.axes.map((e) => {
			let t = e.mapping.get(), n = Pt(t) ? t.gapPositions : [];
			if (t.scale.type === "band" || t.scale.type === "point") {
				let e = t.domain, r = t.scale.range()[1] < t.scale.range()[0];
				return {
					ready: !0,
					groups: ls([0, e.length], n).map(([t, n]) => r ? [e[n - 1], e[t]] : [e[t], e[n - 1]])
				};
			}
			{
				let { extent: t, ready: r } = e.extent.get();
				return {
					ready: r,
					groups: r ? ls(t, n) : []
				};
			}
		});
		if (!e && On(t, this.#r)) return;
		this.#r = t, this.#n = t.every((e) => e.ready);
		let n = [{}];
		if (this.#n) for (let e = 0; e < this.axes.length; e++) {
			let r = this.axes[e].channel, i = t[e].groups;
			n = n.flatMap((e) => i.map(([t, n], i) => ({
				...e,
				[r + "Group"]: i,
				[r + "Start"]: t,
				[r + "End"]: n
			})));
		}
		else n = [];
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of n) this._propagate(e);
		this.complete(), this.view.context.animator.requestRender();
	}
};
function ds(e) {
	return e.type === "scaleGroups";
}
Y(ds, us);
//#endregion
//#region ../core/src/data/sources/urlDescriptor.js
var fs = class extends Error {
	count;
	maxValues;
	constructor(e, t) {
		super(`URL expansion resolved ${e} distinct values, exceeding maxValues ${t}.`), this.name = "UrlLimitExceededError", this.count = e, this.maxValues = t;
	}
};
async function ps(e) {
	return Ts(bs(e.url, e).map((t) => ({
		...t,
		url: Mn(e.baseUrl, t.url),
		indexUrl: t.indexUrl ? Mn(e.baseUrl, t.indexUrl) : void 0
	})), ks(e.url));
}
function ms(e) {
	return Ds(e) && F(e.values) ? [{
		key: "url",
		expr: e.values
	}] : [];
}
function hs(e) {
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
function gs(e, t) {
	if (!t) return e;
	let n = hs(t);
	for (let t = 0; t < e.length; t++) e[t] = n(e[t]);
	return e;
}
function _s(e, t) {
	return e.onLoadError == "skip" && (console.warn(`Skipping failed URL: ${e.url}`, t), !0);
}
async function vs(e, t) {
	try {
		return await t();
	} catch (t) {
		if (_s(e, t)) return;
		throw t;
	}
}
function ys(e) {
	return JSON.stringify({
		url: e.url,
		indexUrl: e.indexUrl,
		fields: e.fields ? Object.fromEntries(Object.entries(e.fields).sort()) : void 0
	});
}
function bs(e, t) {
	if (Ds(e)) return xs(e, t.indexUrl, t);
	let n = Ss(e, t), r = Ss(t.indexUrl, t);
	return (Array.isArray(n) ? n : [n]).map((e) => {
		let t = Cs(e);
		return typeof r == "string" && !t.indexUrl ? {
			...t,
			indexUrl: r
		} : t;
	});
}
function xs(e, t, n) {
	let r = Ss(e.values, n);
	if (!Array.isArray(r)) throw Error("URL template values must resolve to an array.");
	return r.map((n) => {
		let r = Es(n), i = e.attach === !1 ? void 0 : { [e.field]: r };
		return {
			url: ws(e.template, e.field, r),
			indexUrl: Os(t) ? ws(t.template, e.field, r) : L(t),
			fields: i,
			onLoadError: e.onLoadError
		};
	});
}
function Ss(e, t) {
	return F(e) ? As(t).createExpression(e)() : e;
}
function Cs(e) {
	if (typeof e == "string") return { url: e };
	if (e && typeof e == "object" && "url" in e && typeof e.url == "string") return e;
	throw Error("URL descriptor must be a string or an object with url.");
}
function ws(e, t, n) {
	let r = "{" + t + "}";
	if (!e.includes(r)) throw Error(`URL template must contain ${r}.`);
	return e.replaceAll(r, encodeURIComponent(String(n)));
}
function Ts(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.url + "\n" + (t.indexUrl ?? "");
		n.has(e) || n.set(e, t);
	}
	let r = Array.from(n.values());
	if (t !== void 0 && r.length > t) throw new fs(r.length, t);
	return r;
}
function Es(e) {
	if (e == null || typeof e == "object" || typeof e == "function") throw Error("URL template values must be scalar in this version.");
	return e;
}
function Ds(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function Os(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function ks(e) {
	return Ds(e) ? e.maxValues : void 0;
}
function As(e) {
	if (!e.paramRuntime) throw Error("URL ExprRef evaluation requires a parameter runtime.");
	return e.paramRuntime;
}
//#endregion
//#region ../core/src/utils/errorPresentation.js
function js(e) {
	return e ? `Specification: ${JSON.stringify(e.origin)}${e.path?.length ? `, property: ${JSON.stringify(e.path)}` : ""}` : "";
}
function Ms(e) {
	return [e instanceof Er ? `At "${e.view.getPathString()}": ${e}` : String(e), js(dt(e))].filter(Boolean).join("\n");
}
function Ns(e) {
	let t = js(dt(e));
	t ? console.error(t, e) : console.error(e);
}
//#endregion
//#region ../core/src/utils/debounce.js
function Ps(e, t, n = !0) {
	let r, i = (e) => void 0, a = function(...a) {
		return new Promise((o, s) => {
			n && i("debounced"), clearTimeout(r), i = s, r = setTimeout(() => {
				clearTimeout(r), i = (e) => void 0, o(e(...a));
			}, typeof t == "function" ? t() : t);
		});
	};
	return a.cancel = () => {
		clearTimeout(r), n && i("debounced"), i = (e) => void 0;
	}, a;
}
//#endregion
//#region ../core/src/data/sources/lazy/intervalUrlSource.js
var Fs = class extends $a {
	#e = new AbortController();
	#t = /* @__PURE__ */ new Map();
	#n = Promise.resolve();
	#r = [0, 0];
	#i = 0;
	#a;
	#o = (e, t) => this.requestInterval(e, t);
	params;
	#s;
	constructor(e, t) {
		super(e, t), this.registerDisposer(() => {
			this.#e.abort(), this.#n = this.#c(), this.#n.catch(() => {});
		});
	}
	whenDisposed() {
		return this.#n;
	}
	async #c() {
		let e = Array.from(this.#t.values());
		this.#t.clear();
		let t = (await Promise.allSettled(e.map(async (e) => {
			let t;
			try {
				t = await e;
			} catch {
				return;
			}
			await this.#s.disposeHandle?.(t);
		}))).find((e) => e.status === "rejected");
		if (t) throw t.reason;
	}
	setupUrlLoading(e) {
		this.#s = e;
		let t = () => L(this.params.debounce), n = this.params.debounceMode;
		if (n == "domain") {
			let e = Ps(this.onDomainChanged.bind(this), t, !1);
			this.onDomainChanged = e, this.registerDisposer(() => e.cancel());
		} else if (n == "window") {
			let e = Ps(this.#o, t, !1);
			this.#o = e, this.registerDisposer(() => e.cancel());
		} else throw Error("Invalid debounceMode: " + n);
	}
	reloadUrlDescriptors() {
		this.#e.abort(), this.#r = [0, 0], this.#i = 0, this.invalidateData(), this.setLoadingStatus("loading"), this.onDomainChanged(this.scaleResolution.getDomain());
	}
	reloadLastDomain() {
		this.#e.abort(), this.#r = [0, 0], this.#i = 0, this._lastLoadedDomain = void 0, this.onDomainChanged(this.#a ?? this.scaleResolution.getDomain());
	}
	requestDataForDomain(e) {
		this.#a = e, this.reloadLastDomain();
	}
	onDomainChanged(e) {
		this.#a = e;
		let t = L(this.params.windowSize) ?? -1;
		if (e[1] - e[0] <= t) {
			let n = this.getChangedWindow(e, t);
			n && this.#o(n, t);
		}
	}
	queueDomain(e) {
		this.#a = e, this.#o(e);
	}
	async requestInterval(e, t) {
		if (this.disposed) return;
		this.#e.abort(), this.#e = new AbortController();
		let n = this.#e.signal;
		this.setLoadingStatus("loading");
		let r;
		try {
			let i = await this.#l(n);
			if (n.throwIfAborted(), i.length) {
				let a = await this.loadWindow(e, i, n);
				if (n.throwIfAborted(), a) {
					let e = a.windowSize ?? t;
					r = "processing", this.#f(a.data, a.interval, i, e);
				}
			} else r = "processing", this.#f([], e, i, t);
			n.aborted || this.setLoadingStatus("complete");
		} catch (e) {
			if (n.aborted) return;
			this._lastLoadedDomain = void 0, Ns(e), this.setLoadingStatus("error", e.message, r, dt(e));
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
	getChangedWindow(e, t, n = !1) {
		let r = [Math.max(Math.floor(e[0] / t) * t, 0), Math.min(Math.ceil(e[1] / t) * t, this.genome.totalSize)], i = this.#r;
		return n || t !== this.#i || r[0] < i[0] || r[1] > i[1] ? r : void 0;
	}
	async #l(e) {
		let t = await this.#d();
		if (e.throwIfAborted(), !t.length) return [];
		let n = await this.#s.loadModules();
		return e.throwIfAborted(), (await Promise.all(t.map((e) => vs(e, () => this.#u(e, n))))).filter((e) => e !== void 0);
	}
	#u(e, t) {
		let n = this.#s.cacheKey?.(e) ?? ys(e), r = this.#t.get(n);
		return r || (r = this.#s.createHandle(e, t).catch((e) => {
			throw this.#t.delete(n), e;
		}), this.#t.set(n, r)), r;
	}
	async #d() {
		let e = {
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		};
		try {
			let t = await ps(e);
			if (this.#s.singleUrl && t.length !== 1) throw Error(`Data source "${this.label}" supports exactly one resolved URL.`);
			return t;
		} catch (e) {
			if (e instanceof fs) return [];
			throw e;
		}
	}
	#f(e, t, n, r) {
		this._lastLoadedDomain = Array.from(t), this.#r = Array.from(t), r !== void 0 && (this.#i = r);
		try {
			this.publishInterval(e, t, n);
		} catch (e) {
			throw this._lastLoadedDomain = void 0, e;
		}
	}
}, Is = class extends Fs {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 7e3,
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, L(n.channel)), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), ms(n.url)), !this.params.url) throw Error("No URL provided for IndexedFastaSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: Ls,
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
async function Ls() {
	let [{ IndexedFasta: e }, { RemoteFile: t }] = await Promise.all([import("./esm-fKUeeJah.js"), import("./browser-NEy9xNfQ.js").then((e) => e.n)]);
	return {
		IndexedFasta: e,
		RemoteFile: t
	};
}
function Rs(e) {
	return e?.type == "indexedFasta";
}
Y(Rs, Is);
//#endregion
//#region ../core/src/data/sources/lazy/bigWigSource.js
var zs = class extends Fs {
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = L(n.channel);
		if (super(t, r), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), ms(n.url)), !this.params.url) throw Error("No URL provided for BigWigSource");
		this.setupUrlLoading({
			loadModules: Vs,
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
			attachFields: hs(e.fields),
			reductionLevels: i,
			url: e.url
		};
	}
	onDomainChanged(e) {
		this.queueDomain(e);
	}
	async loadWindow(e, t, n) {
		let r = this.scaleResolution.getAxisLength() || 700, i = t.map((t) => Us(e, r, t.reductionLevels)), a = Math.max(...i.map((e) => e * r), 5e3), o = this.getChangedWindow(e, a);
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
			let a = Ws(n[i], L(this.params.pixelsPerBin));
			return t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, {
				scale: a,
				signal: r
			}).then((n) => Hs(e.chrom, n, t.attachFields));
		}))).flat();
	}
	async #n(e, t, n, r) {
		let i = await Promise.all(t.map((t, i) => {
			let a = Ws(n[i], L(this.params.pixelsPerBin));
			return t.bbi.getFeaturesMulti(e.map((e) => ({
				refName: e.chrom,
				start: e.startPos,
				end: e.endPos
			})), {
				scale: a,
				signal: r
			}).then((n) => n.map((n, r) => Hs(e[r].chrom, n, t.attachFields)));
		}));
		return e.map((e, t) => i.flatMap((e) => e[t]));
	}
};
function Bs(e) {
	return e?.type == "bigwig";
}
Y(Bs, zs);
async function Vs() {
	let [{ BigWig: e }, { RemoteFile: t }] = await Promise.all([import("./esm-DS0xWDou.js"), import("./browser-NEy9xNfQ.js").then((e) => e.n)]);
	return {
		BigWig: e,
		RemoteFile: t
	};
}
function Hs(e, t, n) {
	return t.map((t) => n({
		chrom: e,
		start: t.start,
		end: t.end,
		score: t.score
	}));
}
function Us(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
function Ws(e, t) {
	return 1 / 2 / e / t;
}
//#endregion
//#region ../core/src/data/sources/lazy/figWigSource.js
var Gs = class extends Fs {
	#e = 0;
	#t = 0;
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			maxSummaryPixels: 4,
			mode: "fast",
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, n.channel), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : (e.has("tracks") || e.has("pixelsPerBin") || e.has("maxSummaryPixels") || e.has("mode")) && (this.invalidateData(), this.reloadLastDomain());
		}, (e) => this.registerDisposer(e), ms(n.url)), !this.params.url) throw Error("No URL provided for FigWigSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: qs,
			createHandle: async (e, { FigWig: t, RemoteFile: n }) => {
				let r = new t({ filehandle: new n(e.url) });
				try {
					let t = await r.getHeader();
					return {
						reader: r,
						tileSize: t.tileSize,
						chromosomeLengths: new Map(t.chromosomes.map((e) => [e.name, e.length])),
						attachFields: hs(e.fields)
					};
				} catch (e) {
					throw await r.close(), e;
				}
			},
			disposeHandle: (e) => e.reader.close()
		});
	}
	get label() {
		return "figWigSource";
	}
	onDomainChanged(e) {
		this.queueDomain(e);
	}
	async loadWindow(e, [t], n) {
		let r = L(this.params.pixelsPerBin);
		if (!Number.isFinite(r) || r <= 0) throw Error("Figwig pixelsPerBin must be a positive number.");
		let i = L(this.params.maxSummaryPixels);
		if (!Number.isFinite(i) || i < 0) throw Error("Figwig maxSummaryPixels must be a nonnegative number.");
		let a = L(this.params.tracks);
		if (a !== void 0 && (!Array.isArray(a) || a.some((e) => typeof e != "string"))) throw Error("Figwig tracks must be an array of track names.");
		let o = L(this.params.mode);
		if (o !== "exact" && o !== "fast") throw Error("Figwig mode must be \"exact\" or \"fast\".");
		let s = this.scaleResolution.getAxisLength() || 700, c = (e[1] - e[0]) / s, l = Math.max(1, Math.ceil(c * r)), u = o === "fast" && (l >= t.tileSize || t.tileSize / c <= i), d = u ? t.tileSize * 2 ** Math.ceil(Math.log2(Math.max(1, l / t.tileSize))) : l, f = Math.max(1, Math.min(d * 32, Math.floor((e[1] - e[0]) / 8)));
		this.#e = d;
		let p = this.getChangedWindow(e, f, d !== this.#t);
		if (p) return {
			interval: p,
			windowSize: f,
			data: a?.length === 0 ? [] : await this.discretizeAndLoad(p, {
				load: async (e, n) => (await this.#n([e], t, a, d, u, n))[0],
				loadBatch: (e, n) => this.#n(e, t, a, d, u, n)
			}, n)
		};
	}
	publishInterval(e, t, n) {
		let r = this.#e;
		super.publishInterval(e, t, n), this.#t = r;
	}
	async #n(e, t, n, r, i, a) {
		let { reader: o, chromosomeLengths: s } = t, c = e.map((e) => {
			let t = s.get(e.chrom) ?? 0, n = Math.min(e.endPos, t), a = i && n > e.startPos;
			return {
				chromosome: e.chrom,
				start: a ? Math.floor(e.startPos / r) * r : e.startPos,
				end: a ? Math.min(Math.ceil(n / r) * r, t) : n
			};
		}), l = c.filter((e) => e.end > e.start), u = await o.getBinsMulti(l, {
			tracks: n,
			binSize: r,
			aggregation: "mean",
			missing: i ? "zero" : "omit",
			requireSummaries: i,
			signal: a
		}), d = 0;
		return c.map((n, r) => {
			let i = [];
			if (n.end <= n.start) return i;
			let a = u[d++];
			for (let { track: o, values: s } of a.tracks) for (let c = 0; c < s.length; c++) {
				let l = s[c];
				Number.isFinite(l) && i.push(t.attachFields({
					chrom: n.chromosome,
					start: Math.max(a.starts[c], e[r].startPos),
					end: Math.min(a.ends[c], e[r].endPos),
					score: l,
					sampleId: o.name
				}));
			}
			return i;
		});
	}
};
function Ks(e) {
	return e?.type === "figwig";
}
Y(Ks, Gs);
async function qs() {
	let [{ FigWig: e }, { RemoteFile: t }] = await Promise.all([import("./dist-EgmwUdmE.js"), import("./browser-NEy9xNfQ.js").then((e) => e.n)]);
	return {
		FigWig: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/bigBedSource.js
var Js = class extends Fs {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = L(n.channel);
		if (super(t, r), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), ms(n.url)), !this.params.url) throw Error("No URL provided for BigBedSource");
		this.setupUrlLoading({
			loadModules: Zs,
			createHandle: (e, { BigBed: t, RemoteFile: n, BED: r }) => this.#e(e, t, n, r)
		});
	}
	get label() {
		return "bigBedSource";
	}
	async #e(e, t, n, r) {
		let i = new t({ filehandle: new n(e.url) }), a = new r({ autoSql: (await i.getHeader()).autoSql }), o;
		try {
			let e = Ys(a);
			o = (t, n) => e(t, n.start, n.end, n.rest);
		} catch {
			o = (e, t) => a.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
		}
		return {
			attachFields: hs(e.fields),
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
function Ys(e) {
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
        };`)(), u = Qs(t.map((e) => {
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
function Xs(e) {
	return e?.type == "bigbed";
}
Y(Xs, Js);
async function Zs() {
	let [e, { BigBed: t }, { RemoteFile: n }] = await Promise.all([
		import("./esm-CvpR1OcU.js"),
		import("./esm-DS0xWDou.js"),
		import("./browser-NEy9xNfQ.js").then((e) => e.n)
	]);
	return {
		BigBed: t,
		RemoteFile: n,
		BED: e.default
	};
}
function Qs(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region ../core/src/data/sources/lazy/bamSource.js
var $s = class extends Fs {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		}, r = L(n.channel);
		if (super(t, r), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), ms(n.url)), this.tagFields = nc(n.tags), !this.params.url) throw Error("No URL provided for BamSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: ec,
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
			data: await this.discretizeAndLoad(e, async (e, t) => r.bam.getRecordsForRange(r.fixChrPrefix(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => rc(e.chrom, t, this.tagFields))), n)
		};
	}
};
async function ec() {
	let [{ BamFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CSmLiL1C.js"), import("./browser-NEy9xNfQ.js").then((e) => e.n)]);
	return {
		BamFile: e,
		RemoteFile: t
	};
}
function tc(e) {
	return e?.type == "bam";
}
Y(tc, $s);
function nc(e) {
	if (!e) return [];
	if (!Array.isArray(e)) throw Error("BAM tags must be an array of SAM tag names");
	return [...new Set(e)].map((e) => {
		if (!/^[A-Za-z][A-Za-z0-9]$/.test(e)) throw Error(`Invalid SAM tag name "${e}". Tags have two characters, e.g. "HP".`);
		return ["tag_" + e, e];
	});
}
function rc(e, t, n) {
	let r = {
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
	if (n) for (let [e, i] of n) r[e] = t.getTag(i);
	return r;
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixSource.js
var ic = class extends Fs {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = L(n.channel);
		if (super(t, r), this.params = Je(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), ms(n.url)), !L(this.params.url)) throw Error("No URL provided for TabixSource");
		this.setupUrlLoading({
			cacheKey: (e) => ys(e) + "\n" + JSON.stringify(L(this.params.addChrPrefix)),
			loadModules: ac,
			createHandle: (e, { TabixIndexedFile: t, RemoteFile: n }) => this.#e(e, t, n)
		});
	}
	async #e(e, t, n) {
		let r = L(this.params.addChrPrefix), i = r === !0 ? "chr" : r || "", a = new t({
			filehandle: new n(e.url),
			tbiFilehandle: new n(e.indexUrl ?? e.url + ".tbi")
		}), o = await a.getHeader();
		return {
			tbiIndex: a,
			referenceNames: new Map((await a.getReferenceSequenceNames()).map((e) => [i + e, e])),
			fields: e.fields,
			parserContext: await this._createParser(o, a),
			url: e.url
		};
	}
	async loadWindow(e, t, n) {
		return {
			interval: e,
			data: await this.discretizeAndLoad(e, async (e, n) => await Promise.all(t.map(async (t) => {
				let r = [], i = t.referenceNames.get(e.chrom);
				return i !== void 0 && await t.tbiIndex.getLines(i, e.startPos, e.endPos, {
					lineCallback: (e) => {
						r.push(e);
					},
					signal: n
				}), [t, gs(this._parseFeatures(r, t.parserContext), t.fields)];
			})), n)
		};
	}
	publishInterval(e, t, n) {
		this.#t(n, e);
	}
	async _createParser(e, t) {}
	async _readFilePrefix(e) {
		let { maxBlockSize: t } = await e.getMetadata(), n = await e.filehandle.read(t, 0), { unzip: r } = await import("./esm-kY02Urdc.js").then((e) => e.t), i = await r(n);
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
async function ac() {
	let [{ TabixIndexedFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-C73r4S3x.js"), import("./browser-NEy9xNfQ.js").then((e) => e.n)]);
	return {
		TabixIndexedFile: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixTsvSource.js
function oc(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function sc(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function cc(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = Zt(e.join("\n"), tn(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var lc = class extends ic {
	get label() {
		return "tabixSource";
	}
	async _createParser(e, t) {
		let n = this.params, r = L(n.columns) ?? oc(e);
		if (r?.length || (r = sc(await this._readFilePrefix(t))), !r?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
		return r;
	}
	_parseFeatures(e, t) {
		let n = this.params;
		return cc(e, t ?? [], L(n.parse));
	}
};
function uc(e) {
	return e?.type == "tabix";
}
Y(uc, lc);
//#endregion
//#region ../core/src/data/sources/lazy/gff3Source.js
var dc = class extends ic {
	get label() {
		return "gff3Source";
	}
	async _createParser(e) {
		return await import("./esm-_xCtpDwm.js");
	}
	_parseFeatures(e, t) {
		return t.parseStringSync(e.join("\n"));
	}
};
function fc(e) {
	return e?.type == "gff3";
}
Y(fc, dc);
//#endregion
//#region ../core/src/data/sources/lazy/vcfSource.js
var pc = class extends ic {
	get label() {
		return "vcfSource";
	}
	async _createParser(e) {
		return await Ia(e);
	}
	_parseFeatures(e, t) {
		return Ra(e, t);
	}
};
function mc(e) {
	return e?.type == "vcf";
}
//#endregion
//#region ../core/src/rendering/registerWebGL.js
Y(mc, pc), yr.canvasBackend = async (e) => {
	let { createCanvas2DRenderingBackend: t } = await import("./canvas2d-deyE15Jh.js");
	return t(e);
}, yr.canvasRasterExport = () => import("./rasterExport-Cl5roTTb.js"), yr.canvasSvgRasterizer = () => import("./svgRasterizer-DURxdrT9.js"), yr.svgRenderer = () => import("./svg-7NZBaLca.js"), yr.webglBackend = async (e) => {
	let { createWebGLRenderingBackend: t } = await import("./webgl-CPFJTCaw.js");
	return t(e);
};
//#endregion
//#region ../core/src/styles/genome-spy.css.js
var hc = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n/* Public color properties remain unset so host overrides can inherit. */\n.gs-theme-colors {\nposition: absolute;\nwidth: 0;\nheight: 0;\noverflow: hidden;\nvisibility: hidden;\npointer-events: none;\n--_genome-spy-foreground: light-dark(black, #e5ebf1);\n--_genome-spy-stroke: light-dark(gray, #a0adba);\n--_genome-spy-grid: light-dark(lightgray, #3a4653);\n--_genome-spy-chromosome-tick: light-dark(#989898, #b0bdca);\n--_genome-spy-symbol-stroke: light-dark(#888, #c0cbd6);\n--_genome-spy-background: transparent;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\n> span {\nwhite-space: pre-line;\noverflow-wrap: anywhere;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.gs-tooltip {\nposition: fixed;\ninset: auto;\nmargin: 0;\nborder: 0;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: light-dark(#f6f6f6, #252f3b);\nbackground: var(--background-color);\ncolor: var(--genome-spy-foreground, light-dark(black, #e5ebf1));\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid currentColor;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, currentColor 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\nwidth: auto;\nmax-width: none;\nmargin: 0;\nbackground: transparent;\nborder-collapse: collapse;\nfont-size: var(--font-size);\n\nth,\ntd {\nborder: 0;\nbackground: transparent;\ncolor: inherit;\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px var(--background-color);\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid currentColor;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: light-dark(#e0e0e0, #3a4653);\n}\n}\n\n.autoscroll-container {\nmax-height: min(40em, 50vh);\noverflow-x: hidden;\noverflow-y: auto;\npadding-right: var(--genome-spy-basic-spacing);\nmargin-right: calc(-1 * var(--genome-spy-basic-spacing));\n}\n\n.na {\ncolor: light-dark(#aaa, #a0adba);\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n/* Body embeds must retain viewport bounds after failed startup cleanup. */\n:scope:is(body) > .message-box {\nposition: fixed;\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\nwhite-space: pre-wrap;\noverflow-wrap: anywhere;\nmax-width: calc(100% - 40px);\nmax-height: calc(100% - 40px);\noverflow: auto;\n}\n}\n}\n", gc = "gs-suppress-tooltip", _c = "gs-freeze-interaction", vc = "gs-tooltip", yc = class {
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
		this.#o = document.createElement("div"), this.#o.className = vc, this.#o.setAttribute("popover", "manual"), e.appendChild(this.#o), this.clear();
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
		return Cn(this.#c) ?? !0;
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
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && xc(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 10;
		n > window.innerWidth - 10 - this.#o.offsetWidth && (n = e - 10 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 10, window.innerHeight - 10 - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		this.#e || (!e || !this.enabled || this._isPenalty() ? (this.visible &&= (qi("", this.#o), !1), this.#n = void 0) : (qi(e, this.#o), this.#o.querySelectorAll(".autoscroll-container").forEach(bc), this.visible = !0, this.updatePlacement()));
	}
	clear() {
		this.#n = void 0, this.setContent(void 0);
	}
	updateWithDatum(e, t, n = e) {
		if (n !== this.#n) {
			this.#n = n, t ||= (e) => Promise.resolve(q` ${JSON.stringify(e)} `);
			let r = n;
			t(e).then((e) => {
				this.#n === r && this.setContent(e);
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
function bc(e) {
	e && queueMicrotask(() => {
		e.querySelector("tr.hovered")?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	});
}
function xc(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region ../core/src/genomeSpy/containerUi.js
function Sc(e) {
	e.classList.add("genome-spy");
	let t = Cc(e), n = Tc("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: Tc("div", { class: "loading-indicators" }),
		tooltip: new yc(e),
		styleElement: t
	};
}
function Cc(e) {
	let t = document.createElement("style");
	return t.textContent = hc, e.appendChild(t), t;
}
function wc(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	return r.textContent = t, n.appendChild(r), e.appendChild(n), n;
}
function Tc(e, t) {
	let n = document.createElement(e);
	for (let [e, r] of Object.entries(t)) [
		"innerHTML",
		"innerText",
		"className"
	].includes(e) && (n[e] = r), n.setAttribute(e, r);
	return n;
}
//#endregion
//#region ../core/src/config/defaultThemeColors.js
var Ec = Object.freeze({
	foreground: "black",
	stroke: "gray",
	grid: "lightgray",
	chromosomeTick: "#989898",
	symbolStroke: "#888",
	background: null
});
function X(e) {
	return { expr: `defaultThemeColors.${e} || ${JSON.stringify(Ec[e])}` };
}
var Dc = /* @__PURE__ */ new WeakSet();
function Oc(e) {
	return Dc.has(e);
}
function kc(e = []) {
	let t = e.find((e) => e.name === "defaultThemeColors");
	if (t) {
		if ("select" in t || "ruler" in t || "bind" in t || "transition" in t) throw Error("The \"defaultThemeColors\" parameter must declare a palette value or expression.");
		return "expr" in t || Ac(t.value), e;
	}
	let n = {
		name: "defaultThemeColors",
		value: { ...Ec }
	};
	return Dc.add(n), [n, ...e];
}
function Ac(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("The \"defaultThemeColors\" parameter must contain a palette object.");
	for (let t of Object.keys(Ec)) {
		let n = e[t];
		if (n !== void 0 && (t !== "background" || n !== null) && typeof n != "string") throw Error("The \"defaultThemeColors\" palette requires a color for \"" + t + "\".");
	}
}
//#endregion
//#region ../core/src/genomeSpy/defaultThemeStyle.js
function jc(e, t) {
	if (!Oc(t.paramRuntime.paramConfigs.get("defaultThemeColors"))) return;
	let n = e.appendChild(document.createElement("div"));
	n.className = "gs-theme-colors", n.setAttribute("aria-hidden", "true");
	let r = Object.keys(Ec), i = getComputedStyle(n);
	function a() {
		let e = { ...Ec };
		for (let t of r) {
			let r = t.replace(/[A-Z]/g, "-$&").toLowerCase();
			n.style.color = `var(--genome-spy-${r}, var(--_genome-spy-${r}))`;
			let a = i.color, o = Ht(a);
			if (!o) throw Error(`Unsupported CSS color for defaultThemeColors.${t}: ${a}. Use named, hex, RGB, or HSL colors.`);
			e[t] = t === "background" && o.opacity === 0 ? null : o.formatRgb();
		}
		let a = t.paramRuntime.getValue("defaultThemeColors");
		r.some((t) => a[t] !== e[t]) && t.paramRuntime.setValue("defaultThemeColors", e);
	}
	function o() {
		try {
			a();
		} catch (e) {
			t.context.reportError(e);
		}
	}
	let s = matchMedia("(prefers-color-scheme: dark)");
	s.addEventListener("change", o);
	let c = new MutationObserver(o), l = e;
	for (; l;) l instanceof Element && c.observe(l, { attributes: !0 }), l = l.parentNode ?? (l instanceof ShadowRoot ? l.host : null);
	t.registerDisposer(() => {
		c.disconnect(), s.removeEventListener("change", o), n.remove();
	}), a();
}
//#endregion
//#region ../../node_modules/lit-html/directive.js
var Mc = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Nc = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Pc = class {
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
}, Fc = "important", Ic = " !" + Fc, Lc = Nc(class extends Pc {
	constructor(e) {
		if (super(e), e.type !== Mc.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				let t = typeof r == "string" && r.endsWith(Ic);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? Fc : "") : n[e] = r;
			}
		}
		return ji;
	}
});
//#endregion
//#region ../core/src/utils/variableTools.js
function Rc(e) {
	return a(e) || he(e) || E(e);
}
//#endregion
//#region ../core/src/config/styleUtils.js
function zc(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function Bc(e, t) {
	let n = zc(t);
	return G(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region ../core/src/config/markConfig.js
function Vc(e, t, n) {
	let r = [t, ...zc(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return G([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region ../core/src/selection/order.js
function Hc(e, t, n, r, i, a) {
	if (e === void 0) return;
	let { condition: s, value: c } = e;
	if (!Number.isFinite(c) || s && !Number.isFinite(s.value)) throw Error("Order levels must be finite numbers.");
	if (!s || c === s.value) return;
	let l = S(s), u = mt(l, t, n, r, i, a), d = o(u.selection);
	return {
		predicate: u,
		params: d,
		passes: s.value < c ? ["matching", "nonmatching"] : ["nonmatching", "matching"],
		isActive: () => d.some((e) => qt(n.findValue(e)))
	};
}
//#endregion
//#region ../core/src/marks/mark.js
var Uc = class {
	#e;
	#t = 0;
	#n;
	#r = !1;
	#i = !1;
	nonvisualInputs = /* @__PURE__ */ new Set();
	constructor(e) {
		this.unitView = e, this.encoders = void 0;
		let t = typeof e.spec.mark == "object" ? e.spec.mark : {}, n = Vc(e.getConfigScopes(), e.getMarkType(), t.style), r = n;
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
		return F(e) ? this.unitView.paramRuntime.evaluateAndGet(e) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		F(n) && this.unitView.paramRuntime.watchExpression(n, e, {
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
			F(e) && this.unitView.paramRuntime.watchExpression(e, () => {
				this.unitView.getCollector()?.completed && (this.#t++, this.unitView.context.animator.requestRender());
			});
		}
	}
	get encoding() {
		return Tr(this, "encoding", () => {
			let e = this.unitView.getEncoding(), t = (e) => {
				let t = this.properties[e], n = Rc(t) || F(t) ? { value: t } : void 0, r = this.unitView.spec.mark;
				return n && typeof r == "object" && r[e] !== void 0 && Ft(r, n, [e]), n;
			}, n = Object.fromEntries(this.getSupportedChannels().map((e) => [e, t(e)]).filter((e) => ut(e[1]))), r = this.fixEncoding({
				...this.requiresRecordIdentity() ? { uniqueId: { field: be } } : {},
				...n,
				...e
			}), i = r, a = (e, t) => {
				let n = Ge(e), r = It(n);
				if (!r) throw Error("Cannot add scale properties to an unscaled channel definition.");
				return Object.assign(r, t), n;
			};
			for (let n of ["x", "y"]) {
				let r = n == "x" ? "x2" : "y2", o = n == "x" ? "xOffset" : "yOffset", s = n == "x" ? "x2Offset" : "y2Offset", c = i[o];
				if (h(c)) {
					let e = i[n], t = e && It(e), r = t;
					t && r && t.type != "quantitative" && r.band == null && (i[n] = a(e, { band: 0 })), It(c).band ?? (i[o] = a(c, { band: this.getOffsetBand(o) }));
				}
				let l = se(i[o], e[s] ?? t(s), e[r] != null);
				if (typeof l == "number") i[s] = { value: l };
				else if (l && It(l)) {
					if (!It(i[o])) throw Error(s + " requires a scaled " + o + " definition.");
					let t = { resolutionChannel: o };
					h(l) && (e[s] == null || !("band" in l) || l.band == null) && (t.band = this.getOffsetBand(s)), i[s] = a(l, t);
				} else i[s] = l;
			}
			Ar(r), r.x && (r.x.buildIndex ??= this.properties.buildIndex ?? !0);
			let o = this.unitView.spec.predicates ?? {};
			for (let [e, t] of Object.entries(r)) {
				if (!t || !("condition" in t)) continue;
				let n = B(t.condition), r = n.map((e) => Ft(e, Jt(e, o)));
				r.some((e, t) => e !== n[t]) && (i[e] = Ft(t, {
					...t,
					condition: Array.isArray(t.condition) ? r : r[0]
				}));
			}
			return r;
		});
	}
	getType() {
		return this.unitView.getMarkType();
	}
	initializeData() {}
	initializeEncoders() {
		this.unitView.validatePointSelectionSources(), this.encoders = qe(this.unitView, this.encoding);
	}
	getOrder() {
		return this.#r ||= (this.#n = Hc(this.encoding.order, this.encoding, this.unitView.paramRuntime, this.defaultHitTestMode, (e) => this.unitView.getScaleResolution(e)?.type, (e) => this.unitView.getScaleResolution(e)?.getScale()), !0), this.#n;
	}
	initializeRenderingRevisions(e, t = {}) {
		let n = t.trackResources ?? !0, r = this.#e, i = r ?? (this.#e = {
			configuration: 0,
			resources: 0,
			expressions: /* @__PURE__ */ new Set()
		}), a = (e, t) => {
			let n = t + ":" + (F(e) ? e.expr : e);
			i.expressions.has(n) || (this.unitView.paramRuntime.watchExpression(e, () => {
				i[t]++, this.unitView.context.animator.requestRender();
			}), i.expressions.add(n));
		};
		if (!r) {
			let e = /* @__PURE__ */ new Set();
			for (let [t, r] of Object.entries(this.encoders)) {
				for (let e of r.branches ?? []) {
					let r = e.accessor.channelDef;
					Vt(r) && a(r, "configuration");
					let i = t === "text" ? "configuration" : "resources";
					if (!n && i === "resources") continue;
					for (let t of ct(e.predicate)) a(t, i);
					let o = [ut(r) ? r.value : void 0, ve(r) ? r.datum : void 0];
					for (let e of o) F(e) && a(e, i);
				}
				if (n && r.scale) {
					let n = It(r.channelDef)?.resolutionChannel ?? t;
					if (Kt(n)) {
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
				F(e) && a(e, "resources");
			}
		}
	}
	getRenderingRevision(e) {
		return this.#e?.[e] ?? 0;
	}
	getEncodedDataRevision() {
		return this.#t;
	}
	initializeRecordIdentity() {
		let e = this.unitView.paramRuntime;
		this.#i = !In(this.unitView) && Object.entries(this.encoding).some(([t, n]) => n && "condition" in n && (t !== "order" || n.condition?.value !== n.value) && B(n.condition).some((t) => o(De(t)).some((t) => {
			let n = e.findSelectionCapability(t)?.type ?? e.findValue(t)?.type;
			return n === "single" || n === "multi";
		}))), this.requiresRecordIdentity() && !("uniqueId" in this.encoding) && (this.encoding.uniqueId = { field: be });
	}
	requiresRecordIdentity() {
		return this.isPickingParticipant() || !In(this.unitView) && (this.#i || this.unitView.paramRuntime.hasPointSelections({
			inherited: !0,
			recordsOnly: !0
		}));
	}
	isPickingParticipant() {
		if (this.properties.tooltip === null && !this.unitView.paramRuntime.hasPointSelections({ inputOnly: !0 })) return !1;
		for (let e of this.unitView.getLayoutAncestors()) if (!e.isPickingSupported()) return !1;
		return !0;
	}
	getDebugState() {
		return { properties: { ...this.properties } };
	}
}, Wc = class extends Uc {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"x2Offset",
			"y2Offset",
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
		return Or(e, "x", h(e.xOffset)), Or(e, "y", h(e.yOffset)), kr(e, this.properties.filled), Nr(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
//#endregion
//#region ../core/src/marks/ruleLikeEncoding.js
function Gc(e, t) {
	if (Pr(e, "x"), Pr(e, "y"), !(e.x && e.y && e.x2 && e.y2)) {
		if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
		else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
		else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
		else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
		else if (e.x && e.y && e.y2) e.x2 = e.x;
		else if (e.y && e.x && e.x2) e.y2 = e.y;
		else if (e.y && e.x) {
			if (!e.x2 && Rt(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
			else if (!e.y2 && Rt(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
			else throw Error(`Cannot infer ${t} mark's secondary position channel from the encoding: ` + JSON.stringify(e));
		} else throw Error(`At a minimum, either the x or y channel must be defined in the ${t} mark's encoding: ` + JSON.stringify(e));
	}
	return e;
}
//#endregion
//#region ../core/src/marks/arrow.js
var Kc = class extends Uc {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"x2Offset",
			"y2Offset",
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
		return Gc(e, "arrow"), !e.size && qc(this.properties.size) && (e.size = Jc(this.properties.size, this.properties.size.channel ?? "auto", e)), kr(e, this.properties.filled), Nr(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
function qc(e) {
	return typeof e == "object" && !!e && "band" in e && typeof e.band == "number";
}
function Jc(e, t, n) {
	let r = Yc(t, n), i = r == "x" ? "width" : "height", a = n[r];
	return { value: { expr: `${Rt(a) && a.scale !== null ? `bandwidth("${r}") * ${i}` : i} * ${e.band}` } };
}
function Yc(e, t) {
	if (e == "auto") return Xc(t);
	if (Zc(t)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return e;
}
function Xc(e) {
	if (Zc(e)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return Qc(e) ? "y" : "x";
}
function Zc(e) {
	return Qc(e) && $c(e);
}
function Qc(e) {
	return e.x2 != null && e.x2 !== e.x;
}
function $c(e) {
	return e.y2 != null && e.y2 !== e.y;
}
//#endregion
//#region ../core/src/data/transforms/sample.js
var el = class extends m {
	#e;
	#t = [];
	constructor(e) {
		super(e), this.params = e, this.k = e.size || 500, this.reset();
	}
	reset() {
		super.reset(), this.#e = void 0, this.#n();
	}
	#n() {
		this.reservoir = [], this.#t = [], this.W = void 0, this.ingester = this._initialIngester;
	}
	_initialIngester(e) {
		this.reservoir.push(e), this.#t.push(this.#e), this.reservoir.length == this.k && (this.W = Math.exp(Math.log(Math.random()) / this.k), this.i = this.k, this.next = this.i, this.ingester = this._finalIngester, this._setNextStop());
	}
	_finalIngester(e) {
		if (++this.i == this.next) {
			let t = Math.floor(Math.random() * this.k);
			this.reservoir[t] = e, this.#t[t] = this.#e, this.W *= Math.exp(Math.log(Math.random()) / this.k), this._setNextStop();
		}
	}
	_setNextStop() {
		this.next += Math.floor(Math.log(Math.random()) / Math.log(1 - this.W)) + 1;
	}
	handle(e) {
		this.ingester(e);
	}
	beginBatch(e) {
		e.type == "file" ? this.#e = e : (this.#r(), this.#n(), this.#e = void 0, super.beginBatch(e));
	}
	complete() {
		this.#r(), super.complete();
	}
	#r() {
		let e;
		for (let t = 0; t < this.reservoir.length; t++) {
			let n = this.#t[t];
			n !== void 0 && n !== e && (super.beginBatch(n), e = n), this._propagate(this.reservoir[t]);
		}
	}
};
function tl(e, t, n) {
	let r = new el({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region ../core/src/marks/point.js
var nl = class extends Uc {
	#e = () => 0;
	#t = [];
	initializeEncoders() {
		super.initializeEncoders(), this.#t = re(ye(this.encoders)).map((e) => ge(e, (e) => this.unitView.paramRuntime.findValue(e)));
	}
	isPreservedBySelection(e) {
		return this.#t.some((t) => t(e));
	}
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		if (t != null) {
			if (F(t)) {
				let e = this.unitView.paramRuntime.watchExpression(t, () => this.unitView.context.animator.requestRender());
				this.#e = e;
			} else this.#e = () => t;
		}
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
		let t = this.unitView.getEncoding(), n = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, r = !ut(e.shape) || e.shape.value === "x" || e.shape.value === "+", i = e.strokeWidth;
		for (let [e, r] of [["dx", "xOffset"], ["dy", "yOffset"]]) {
			let i = t[e] != null || e in n, a = t[r] != null || r in n;
			if (i && a) throw Error(`Point marks cannot combine legacy ${e} with ${r}. Use only ${r}.`);
		}
		return kr(e, this.properties.filled), Nr(e, this.properties.filled), r && ut(e.stroke) && e.stroke.value === null && (e.strokeOpacity = { value: 0 }, i && (e.strokeWidth = i)), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		let e = this.encoders.semanticScore ? gt(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(tl(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	getSemanticThreshold() {
		if (!this.sampledSemanticScores || this.sampledSemanticScores.length === 0) return -1;
		let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
		return e <= 0 ? -Infinity : e >= 1 ? Infinity : Ze(this.sampledSemanticScores, e);
	}
}, rl = "horizontal", il = "vertical", al = class extends Uc {
	getSupportedChannels() {
		return [
			...super.getSupportedChannels(),
			"x2",
			"y2",
			"x2Offset",
			"y2Offset",
			"size",
			...this.getType() == "rule" ? [
				"fill",
				"fillOpacity",
				"stroke",
				"strokeWidth",
				"strokeOpacity"
			] : []
		];
	}
	fixEncoding(e) {
		if (this.getType() == "tick") this.fixTickEncoding(e), jr(e, "fill");
		else {
			Gc(e, "rule");
			let t = this.properties.filled;
			e.fill || (t ? jr(e, "fill") : e.fill = { value: null }), !e.stroke && !t && jr(e, "stroke"), e.stroke ??= { value: null }, "value" in e.stroke && e.stroke.value === null && !("condition" in e.stroke) && (e.strokeWidth = { value: 0 });
		}
		return delete e.color, e;
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? ol(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return sl(e, n), e;
	}
};
function ol(e) {
	if (!e.y) return il;
	if (!e.x) return rl;
	let t = cl(e.x), n = cl(e.y);
	if (!t && n) return il;
	if (t && !n) return rl;
}
function sl(e, t) {
	t == il ? (e.x2 = e.x, cl(e.y) ? [e.y, e.y2] = ul(e.y) : (e.y = { value: 0 }, e.y2 = { value: 1 })) : (e.y2 = e.y, cl(e.x) ? [e.x, e.x2] = ul(e.x) : (e.x = { value: 0 }, e.x2 = { value: 1 }));
}
function cl(e) {
	return Rt(e) && (e.type == "ordinal" || e.type == "nominal");
}
function ll(e, t) {
	return Ft(e, {
		...e,
		band: t
	});
}
function ul(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [ll(e, t), ll(e, 1 - t)];
}
//#endregion
//#region ../core/src/marks/link.js
var dl = class extends Uc {
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
			"x2Offset",
			"y2Offset",
			"size"
		];
	}
	fixEncoding(e) {
		return e.x2 ||= Rt(e.x) ? { datum: 0 } : e.x, e.y2 ||= Rt(e.y) ? { datum: 0 } : e.y, e;
	}
};
//#endregion
//#region ../core/src/fonts/textMetrics.js
function fl(e, t) {
	return e.requestFont(t);
}
function pl(e, t, n) {
	return {
		width: e.measureWidth(t, n),
		height: e.getHeight(n)
	};
}
function ml(e, t, n) {
	let r = t * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return n == "vertical" ? e.width * i + e.height * a : e.width * a + e.height * i;
}
//#endregion
//#region ../core/src/marks/text.js
var hl = class extends Uc {
	#e;
	constructor(e) {
		super(e), this.#e = Wt(e.paramRuntime, this.properties.fitToBand, "Reactive text fitToBand changes are not supported.", (t) => e.registerDisposer(t)) ?? !1, this.fontMeasurement = fl(e.context.textMetrics, this.properties);
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
			"x2Offset",
			"y2Offset",
			"size",
			"text",
			"angle"
		];
	}
	fixEncoding(e) {
		for (let t of N) this.#e ? Or(e, t) : Fr(e, t);
		return e;
	}
};
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function gl(e) {
	return --e * e * e + 1;
}
function _l(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../core/src/utils/eerp.js
function vl(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region ../core/src/scales/domainLifecycle.js
function yl(e, t) {
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
function bl(e, t, n) {
	switch (t.type) {
		case "set": return Sl(e, { domain: t.domain }, 0, n);
		case "frame":
		case "finish": return e.transition?.id === t.id ? Cl(t.type === "finish" ? {
			...e,
			transition: void 0
		} : e, t.type === "finish" ? e.transition.target : t.target, n) : wl(e);
		case "navigate": {
			let r = "viewport" in t.target;
			if (n.scaleKind === "discrete" && !r) throw Error("Discrete domains do not support navigation or reset.");
			return Sl(e.phase === "collecting" && !r ? {
				...e,
				phase: "interacted"
			} : e, t.target, t.duration, n);
		}
		case "data":
		case "configuration":
		case "expression":
		case "selection":
		case "selection-sync":
		case "viewport":
		case "membership": return xl(e, t, n);
		default: throw Error("Unknown domain update: " + t.type);
	}
}
function xl(e, t, n) {
	let r = {
		...e,
		resetDomain: t.resetDomain,
		dataExtent: t.dataExtent,
		initialReference: e.phase === "ready" ? e.initialReference : t.referenceDomain ?? e.initialReference,
		phase: t.readiness === "ready" ? "ready" : e.phase
	};
	if (t.candidate === void 0) return wl(r);
	let i = t.type === "selection" || t.type === "selection-sync";
	if (t.type === "selection-sync" && V(t.candidate, e.visibleDomain) || !(n.selectionLinked || i || t.type === "configuration" || t.type === "expression" && !n.animateChanges) && e.phase !== "collecting" && n.zoomable) return wl(r);
	let a = t.type === "selection-sync" || t.type === "data" || t.type === "membership";
	if (n.selectionLinked && a && e.transition && V(t.candidate, e.visibleDomain) || e.transition && "viewport" in e.transition.target && V(t.candidate, e.visibleDomain)) return wl(r);
	let o = e.phase === "ready" && n.scaleKind === "continuous" && n.rendered && n.animateChanges && !n.selectionLinked && !i;
	return o && e.transition && "domain" in e.transition.target && V(t.candidate, e.transition.target.domain) ? wl(r) : Sl(r, { domain: t.candidate }, o ? 500 : 0, n);
}
function Sl(e, t, n, r) {
	let i = "viewport" in t, a = i ? t.viewport?.interval ?? [0, e.visibleDomain.length] : t.domain, o = i ? t.viewport?.gapRanks : t.gapDomain, s = i ? e.viewport?.interval ?? [0, e.visibleDomain.length] : e.visibleDomain;
	if (n > 0 && (i || r.scaleKind !== "discrete") && s.length === 2 && a.length === 2 && Number.isFinite(+a[1] - a[0]) && Number.isFinite(+s[1] - s[0]) && (+a[1] - a[0]) * (+s[1] - s[0]) > 0 && (!V(a, s) || !V(o ?? [], (i ? e.viewport?.gapRanks : e.gapDomain) ?? []))) {
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
				from: s,
				to: a,
				target: t,
				duration: n
			}
		};
	}
	return {
		...Cl({
			...e,
			transition: void 0
		}, t, r),
		transition: e.transition ? { type: "cancel" } : { type: "none" }
	};
}
function Cl(e, t, n) {
	if ("viewport" in t) return wl({
		...e,
		viewport: t.viewport
	});
	let { domain: r, gapDomain: i } = t, a = !V(r, e.visibleDomain) || !V(i ?? [], e.gapDomain ?? []);
	return {
		state: a ? {
			...e,
			visibleDomain: r,
			gapDomain: i,
			viewport: e.phase === "ready" ? yo(e.viewport ? { interval: e.viewport.interval } : e.viewport, r.length) : e.viewport
		} : e,
		domainChanged: a,
		syncSelection: n.selectionLinked && n.zoomable,
		transition: { type: "none" }
	};
}
function wl(e) {
	return {
		state: e,
		domainChanged: !1,
		syncSelection: !1,
		transition: { type: "none" }
	};
}
//#endregion
//#region ../core/src/scales/domainRuntime.js
var Tl = 2 ** 53 - 1 - 1, El = class {
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
	constructor({ runtime: e, manager: t, animator: n, domain: r, resetDomain: i, notifyDomain: a, notifyViewport: o, publishZoom: s, renderImmediately: c }) {
		let l = new Bn(() => e);
		this.#e = l, this.#t = t, this.#n = n, this.#r = l.signal("domain state", {
			...yl(r, i),
			viewport: "viewport" in t.scale ? t.scale.viewport() : void 0
		});
		let u = l.computed("scale viewport", [this.#r], () => this.state.viewport, { equals: On });
		o && l.effect([u], () => {
			this.state.viewport !== void 0 && o();
		}), this.domain = l.computed("displayed domain", [this.#r], () => this.state.visibleDomain, { equals: V }), this.#u = s, l.effect([this.domain], a), this.#d = l.signal("domain render publication", 0), l.effect([this.domain, this.#d], () => {
			if (!this.#s && !this.#c) return;
			let e = this.#c;
			this.#c = !1, this.#s = !1, e ? c() : n.requestRender();
		});
	}
	domain;
	get runtime() {
		return this.#e;
	}
	get state() {
		return this.#r.get();
	}
	get stateRef() {
		return this.#r;
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
		return this.#e.requestUpdate(this.#f, Tl, this.#p), n.catch(() => {}), this.#e.flushNow({ afterTransaction: !0 }), n;
	}
	cancelSourceUpdates() {
		this.#i = this.#i.filter((e) => "candidate" in e.update ? (e.resolve(), !1) : !0), this.#l = !1, this.#e.cancelUpdate(this.#m);
	}
	#f = () => {
		if (this.#i.length) {
			let e = this.#i.shift();
			try {
				let t = e.update;
				if (t.type === "selection-sync" && !V(t.candidate, this.state.visibleDomain)) {
					e.resolve();
					return;
				}
				t.type === "set" ? t = {
					...t,
					domain: this.#t.normalizeDomain(t.domain)
				} : "target" in t && "domain" in t.target && !t.target.gapDomain && (t = {
					...t,
					target: { domain: this.#t.normalizeDomain(t.target.domain) }
				}), "readiness" in t && this.state.phase !== "ready" && (t.type !== "selection-sync" && (this.#l = t.readiness === "ready", this.#e.requestUpdate(this.#m, Tl + 1, this.#p)), t = {
					...t,
					readiness: "pending"
				});
				let n = this.state, r = bl(n, t, this.policy()), i = !On(n.viewport, r.state.viewport);
				if (r.transition.type !== "none" && this.#g(), r.domainChanged && (this.#t.mirrorDomain(r.state.visibleDomain, r.state.gapDomain), this.#s ||= e.render), i && (this.#t.mirrorViewport(r.state.viewport ?? null), this.#s ||= e.render), this.#r.set(r.state), r.syncSelection && (this.syncSelection(), this.#o) || (r.domainChanged || i || !On(n.initialReference, r.state.initialReference) || !On(n.dataExtent, r.state.dataExtent)) && (this.#u(), this.#o)) {
					e.resolve();
					return;
				}
				this.#s && this.#h(), r.transition.type === "start" ? this.#_(r.transition).then(e.resolve, e.reject) : e.resolve();
			} catch (t) {
				throw e.reject(t), this.#p(t), t;
			} finally {
				this.#i.length && this.#e.requestUpdate(this.#f, Tl, this.#p);
			}
		}
	};
	#p = (e) => {
		this.#l = !1;
		for (let t of this.#i.splice(0)) t.reject(e);
	};
	#m = () => {
		if (!this.#o && this.#l && this.state.phase !== "ready") {
			let e = yo(this.state.viewport, this.state.visibleDomain.length), t = !On(e, this.state.viewport);
			t && this.#t.mirrorViewport(e ?? null), this.#r.set({
				...this.state,
				phase: "ready",
				viewport: e
			}), t && this.#u();
		}
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
		let t = e.from, n = e.to, r = t[1] - t[0], i = n[1] - n[0], a = t[0] + r / 2, o = n[0] + i / 2, s = this.#t.scale, c = "navigationMapping" in s ? s : void 0, l = c?.navigationMapping(), u = c?.copy();
		u && ("viewport" in e.target ? u.viewport(e.target.viewport) : u.domain(n, e.target.gapDomain));
		let d = u?.navigationMapping(), f = zn();
		this.#a = f, await this.#n.transition({
			duration: e.duration,
			easingFunction: _l,
			cancelToken: f,
			onUpdate: (s) => {
				if (f.canceled) return;
				if (l && d) {
					let t = l.interpolate(d, s);
					this.update({
						type: "frame",
						id: e.id,
						target: "viewport" in e.target ? { viewport: {
							interval: t.domain,
							gapRanks: t.ranks
						} } : {
							domain: t.domain,
							gapDomain: t.ranks
						}
					});
					return;
				}
				let c = vl(r, i, s), u = r === i ? s : (r - c) / (r - i), p = u * o + (1 - u) * a;
				this.update({
					type: "frame",
					id: e.id,
					target: { domain: [t[0] === n[0] ? t[0] : p - c / 2, t[1] === n[1] ? t[1] : p + c / 2] }
				});
			}
		}), !f.canceled && this.state.transition?.id === e.id && (this.#a = void 0, await this.update({
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
function Dl(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function Ol(e, t) {
	if (e) {
		if (!g(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function kl(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? Dl(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: Ol(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function Al(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !$e(a)) return;
		let o = s(a.select);
		T(o) && o.encodings?.includes(r) && e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function jl(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !$e(e)) continue;
		let o = s(e.select);
		if (T(o) && o.encodings?.includes(r) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function Ml(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.round(a), o = Math.round(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region ../core/src/utils/domainArray.js
var Nl = class e extends Array {
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
}, Pl = class extends Nl {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) || (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e))), this;
	}
}, Fl = class extends Nl {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, Il = class extends Fl {
	constructor() {
		super(), this.type = "nominal";
	}
}, Ll = class extends Nl {
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
}, Rl = {
	quantitative: Pl,
	index: Pl,
	locus: Pl,
	nominal: Il,
	ordinal: Fl
};
function zl(e, t) {
	if (e == "quantitative" && Bl(t)) {
		let n = new Ll(t);
		return n.type = e, n;
	}
	if (Rl[e]) {
		let n = new Rl[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function Bl(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region ../core/src/scales/domainExpressions.js
function Vl(e, t) {
	return F(e) ? t(e)() : Array.isArray(e) ? e.map((e) => Vl(e, t)) : e;
}
function Hl(e) {
	return F(e) ? [e] : Array.isArray(e) ? e.flatMap((e) => Hl(e)) : [];
}
//#endregion
//#region ../core/src/utils/radixSort.js
function Ul(e, t) {
	return t < 22 ? e >>> t & 2047 : Math.floor(e / 2 ** t) & 2047;
}
function Wl(e) {
	let t = e.length, n = new Uint32Array(t), r = 0, i = !0;
	for (let a = 0; a < t; a++) n[a] = a, r = Math.max(r, e[a]), a && e[a] < e[a - 1] && (i = !1);
	if (i) return n;
	let a = new Uint32Array(t), o = /* @__PURE__ */ new Uint32Array(2048);
	for (let i = 0; i < 53 && 2 ** i <= r; i += 11) {
		o.fill(0);
		for (let r = 0; r < t; r++) o[Ul(e[n[r]], i)]++;
		let r = 0;
		for (let e = 0; e < o.length; e++) {
			let t = o[e];
			o[e] = r, r += t;
		}
		for (let r = 0; r < t; r++) {
			let t = n[r];
			a[o[Ul(e[t], i)]++] = t;
		}
		[n, a] = [a, n];
	}
	return n;
}
//#endregion
//#region ../core/src/data/keyIndex.js
var Gl = "|", Kl = "\\", ql = class {
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
				n > 0 && (e += Gl);
				let r = i[n], a = Jl(t[n], r);
				e += Xl(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = Jl(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => d(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += Gl);
				let r = e[t], i = Jl(n[t](o), r);
				s += Xl(i);
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
				let n = e[t], s = Jl(a(n), o);
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
function Jl(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function Yl(e) {
	if (e.indexOf(Kl) === -1 && e.indexOf(Gl) === -1) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === Kl || r === Gl) && (t += Kl), t += r;
	}
	return t;
}
function Xl(e) {
	return typeof e == "string" ? Yl(e) : String(e);
}
//#endregion
//#region ../core/src/data/viewportDomain.js
var Zl = 256, Ql = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		this.sortField = B(e.sort?.field)[0], this.getBatches = t, this.isCompleted = n;
	}
	reset() {
		for (let e of this.#e.values()) e.batches = void 0;
	}
	complete() {
		for (let e of this.#e.values()) e.batches = eu(this.getBatches(), e);
	}
	getDomain(e, t, n, r) {
		let i = r.find((e) => e.channel === "x");
		if (!i || !this.#t(i)) return au(this.getBatches(), t, n, r);
		let a = $l(i), o = this.#e.get(a);
		return o || (o = {
			accessor: i.accessor,
			accessor2: i.accessor2,
			targets: /* @__PURE__ */ new Map(),
			batches: void 0
		}, this.#e.set(a, o)), r.length === 1 && o.targets.get(e) !== n && (o.targets.set(e, n), o.batches && ru(o.batches, e, n)), !o.batches && this.isCompleted() && (o.batches = eu(this.getBatches(), o)), o.batches ? iu(o, e, t, n, r) : zl(t);
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
function $l(e) {
	return e.accessor.sourceKey + "|" + (e.accessor2?.sourceKey ?? "point");
}
function eu(e, t) {
	let n = Array.from(e, (e) => tu(e, t));
	for (let [e, r] of t.targets) ru(n, e, r);
	return n;
}
function tu(e, t) {
	let n = Math.ceil(e.length / Zl), r = nu(n, Infinity), i = nu(n, -Infinity), a = nu(n, Infinity), o = nu(n, -Infinity), s = new Uint8Array(n);
	for (let n = 0; n < e.length; n++) {
		let c = Math.floor(n / Zl), l = lu(e[n], t.accessor, t.accessor2);
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
function nu(e, t) {
	let n = new Float64Array(e);
	return n.fill(t), n;
}
function ru(e, t, n) {
	for (let r of e) {
		let e = Math.ceil(r.data.length / Zl), i = {
			min: nu(e, Infinity),
			max: nu(e, -Infinity),
			valid: new Uint8Array(e),
			uncertain: new Uint8Array(e)
		};
		r.targets.set(t, i);
		for (let e = 0; e < r.data.length; e++) {
			let t = n(r.data[e]);
			if (t == null || Number.isNaN(t)) continue;
			let a = Math.floor(e / Zl), o = +t;
			Number.isNaN(o) ? i.uncertain[a] = 1 : (i.valid[a] = 1, i.min[a] = Math.min(i.min[a], o), i.max[a] = Math.max(i.max[a], o));
		}
	}
}
function iu(e, t, n, r, i) {
	if (!e.batches) throw Error("Viewport index has not been built.");
	let a = i.map(su), o = a.find((e) => e.channel === "x"), s = zl(n);
	for (let n of e.batches) {
		let i = Math.ceil(n.data.length / Zl);
		for (let c = 0; c < i; c++) {
			let i = n.uncertain[c] === 1;
			if (!i && uu(n, c, o.domain, !!e.accessor2)) continue;
			if (a.length === 1 && !i && du(n, c, o.domain, !!e.accessor2, o.mode)) {
				let e = n.targets.get(t);
				if (e && e.uncertain[c] === 0) {
					e.valid[c] === 1 && (s.extend(e.min[c]), s.extend(e.max[c]));
					continue;
				}
			}
			let l = c * Zl;
			ou(n.data, l, Math.min(l + Zl, n.data.length), s, r, a);
		}
	}
	return s;
}
function au(e, t, n, r) {
	let i = zl(t), a = r.map(su);
	for (let t of e) ou(t, 0, t.length, i, n, a);
	return i;
}
function ou(e, t, n, r, i, a) {
	for (let o = t; o < n; o++) {
		let t = e[o];
		a.every((e) => cu(t, e)) && r.extend(i(t));
	}
}
function su(e) {
	let t = Math.min(e.domain[0], e.domain[1]), n = Math.max(e.domain[0], e.domain[1]);
	return {
		...e,
		domain: [t, n]
	};
}
function cu(e, t) {
	let n = lu(e, t.accessor, t.accessor2);
	if (!n) return !1;
	let [r, i] = t.domain;
	return t.mode === "contain" ? n.start >= r && n.end <= i : n.start === n.end ? n.start >= r && n.start <= i : n.start < i && n.end > r;
}
function lu(e, t, n) {
	let r = t(e), i = n ? n(e) : r;
	if (r == null || i == null) return;
	let a = +r, o = +i;
	if (!(Number.isNaN(a) || Number.isNaN(o))) return {
		start: Math.min(a, o),
		end: Math.max(a, o)
	};
}
function uu(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxEnd[t] <= i || e.minStart[t] >= a : e.maxStart[t] < i || e.minStart[t] > a;
}
function du(e, t, n, r, i) {
	let [a, o] = n;
	return i === "contain" ? e.minStart[t] >= a && e.maxEnd[t] <= o : r ? e.maxStart[t] < o && e.minEnd[t] > a : e.minStart[t] >= a && e.maxStart[t] <= o;
}
//#endregion
//#region ../core/src/data/fileBatchUtils.js
function fu(e, t) {
	if (t.length == 0) return () => void 0;
	if (t.length == 1 && t[0].index == 0) return () => t[0].batch;
	let n = /* @__PURE__ */ new WeakMap(), r = 0, i = 0, a = { type: "file" };
	for (let o of e) {
		for (; i < t.length && t[i].index <= r;) a = t[i++].batch;
		n.set(o, a), r++;
	}
	return (e) => n.get(e);
}
function pu(e, t, n) {
	let r;
	return (i) => {
		let a = e(i);
		a !== void 0 && a !== r && (t(a), r = a), n(i);
	};
}
//#endregion
//#region ../core/src/data/collector.js
var mu = class extends wn {
	#e = [];
	#t = [];
	#n = () => void 0;
	#r = 0;
	#i = d(be);
	#a = /* @__PURE__ */ new Uint32Array();
	#o = new ql();
	#s;
	#c;
	#l = new hu();
	#u;
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e, t) {
		super(t), this.params = e ?? { type: "collect" }, this.#u = new Ql(this.params, () => this.facetBatches.values(), () => this.completed), this.observers = /* @__PURE__ */ new Set(), this.dataRevision = 0, this.facetBatches = new ot([], JSON.stringify), this.#c = vu(this.params.sort, t), this.#d();
	}
	#d() {
		this.#e = [], this.#t = [], this.#n = () => void 0, this.#r = 0, this.#a = /* @__PURE__ */ new Uint32Array(), this.#o.invalidate(), this.#u.reset(), this.facetBatches.clear(), this.facetBatches.set(void 0, this.#e);
	}
	reset() {
		super.reset(), this.#d();
	}
	handle(e) {
		this.#e.push(e), this.#r++;
	}
	beginBatch(e) {
		this.#o.invalidate(), Sn(e) ? (this.#e = [], this.facetBatches.set(B(e.facetId), this.#e)) : this.#t.push({
			index: this.#r,
			batch: e
		});
	}
	complete() {
		if (this.#n = fu(gu(this.facetBatches.values()), this.#t), this.#e = [], this.params.groupby?.length) {
			let e = this.params.groupby.map((e, t) => d(e, void 0, this.paramRuntimeProvider?.paramRuntime?.getSpecLocation(this.params, ["groupby", t]))), t = _u(this.facetBatches.size > 1 ? gu(this.facetBatches.values()) : this.facetBatches.get(void 0), e);
			this.facetBatches.clear();
			for (let [e, n] of t) this.facetBatches.set(e, n);
		}
		if (this.#c) for (let e of this.facetBatches.values()) e.sort(this.#c);
		this.#u.complete(), this.#_(), this.#f(), super.complete(), this.dataRevision++, this.#g(), this.#m();
	}
	observe(e) {
		return this.observers.add(e), () => {
			this.observers.delete(e);
		};
	}
	#f() {
		if (this.children.length) for (let [e, t] of this.facetBatches.entries()) {
			if (e) {
				let t = {
					type: "facet",
					facetId: e
				};
				for (let e of this.children) e.beginBatch(t);
			}
			let n = pu(this.#n, (e) => {
				for (let t of this.children) t.beginBatch(e);
			}, (e) => this._propagate(e));
			for (let e = 0, r = t.length; e < r; e++) n(t[e]);
		}
	}
	get replaySource() {
		return this;
	}
	get replaysSynchronously() {
		return !0;
	}
	repropagate() {
		this.completed && En(this, () => this.#p(), this.parent ? this.paramRuntime : void 0);
	}
	#p() {
		for (let e of this.children) e.reset();
		this.#f();
		for (let e of this.children) e.complete();
		this.#g(), this.#m();
	}
	#m() {
		for (let e of this.observers) e(this);
	}
	getDomain(e, t, n) {
		return this.#l.getDomain(e, () => {
			let e = zl(t);
			if (n.constant) e.extend(n({}));
			else if (this.completed) for (let t of this.facetBatches.values()) for (let r = 0, i = t.length; r < i; r++) e.extend(n(t[r]));
			return e;
		});
	}
	getViewportDomain(e, t, n, r) {
		return this.#u.getDomain(e, t, n, r);
	}
	getViewportIndexCount() {
		return this.#u.getIndexCount();
	}
	subscribeDomainChanges(e, t) {
		return this.#l.subscribe(e, t);
	}
	getData() {
		switch (this.#h(), this.facetBatches.size) {
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
		this.#h();
		for (let t of this.facetBatches.values()) for (let n = 0; n < t.length; n++) e(t[n]);
	}
	getItemCount() {
		let e = 0;
		for (let t of this.facetBatches.values()) e += t.length;
		return e;
	}
	#h() {
		if (!this.completed) throw Error("Data propagation is not completed! No data are available.");
	}
	#g() {
		this.#l.hasCachedDomains() && this.#l.clear(), this.#l.notify();
	}
	#_() {
		this.#s = [];
		let e = this.facetBatches.values().find((e) => e.length)?.[0];
		if (e == null || !("__uniqueId" in e)) return;
		let t = 0, n = [], r = this.#i;
		for (let [e, i] of this.facetBatches) {
			this.#s.push({
				start: t,
				stop: t + i.length,
				facetId: e
			}), t += i.length;
			for (let e = 0, t = i.length; e < t; e++) n.push(r(i[e]));
		}
		this.#a = Wl(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#a.length) return;
		let t = jt((e) => e.start).right, n = this.#i, r = jt((e) => n(i(e))).left, i = (e) => {
			let n = t(this.#s, e), r = this.#s[n - 1];
			if (!(!r || e >= r.stop)) return this.facetBatches.get(r.facetId)[e - r.start];
		}, a = r(this.#a, e);
		if (a >= 0) {
			let t = i(this.#a[a]);
			if (t && n(t) === e) return t;
		}
	}
	findDatumByKey(e, t) {
		return this.#h(), this.#o.findDatum(e, t, this.facetBatches.values());
	}
}, hu = class {
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
function gu(e) {
	return { [Symbol.iterator]: function* () {
		for (let t of e) yield* t;
	} };
}
function _u(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = t.slice(0, -1), a = t.at(-1);
	for (let o of e) {
		let e = n;
		for (let t of i) {
			let n = t(o), r = e.get(n);
			r || (r = /* @__PURE__ */ new Map(), e.set(n, r)), e = r;
		}
		let s = a(o), c = e.get(s);
		c || (c = [], e.set(s, c), r.push([t.map((e) => e(o)), c])), c.push(o);
	}
	return r;
}
function vu(e, t) {
	if (e?.field) {
		let n = B(e.field), r = n.map((n, r) => d(n, void 0, t?.paramRuntime?.getSpecLocation(e, Array.isArray(e.field) ? ["field", r] : ["field"]))), i = n.length == 1 ? Dt(n[0]) : [];
		if (i.length == 1 && !n[0].includes(".")) {
			let t = B(e.order)[0] ?? "ascending", n = JSON.stringify(i[0]);
			return Function("accessor", `return (a, b) => {
                        if (!(${n} in a)) accessor(a);
                        if (!(${n} in b)) accessor(b);
                        return ${t === "ascending" ? `a[${n}] - b[${n}]` : `b[${n}] - a[${n}]`};
                    };`)(r[0]);
		}
		return oe(r, e.order);
	}
}
//#endregion
//#region ../core/src/view/dataReadiness.js
function yu(e, t) {
	let n = {};
	for (let r of t) {
		let t = e.getScaleResolution(r);
		t && (n[r] = Array.from(t.getDomain()));
	}
	return Object.keys(n).length ? n : void 0;
}
function bu(e, t, n) {
	for (let r of wu(e, n)) {
		let e = Array.from(Dn(r)).filter((e) => e instanceof $a);
		if (e.length && (!jn(r) || e.some((e) => !Du(e, t)))) return !1;
	}
	return !0;
}
function xu(e, t, n, r, i) {
	let a = i ?? Tu;
	return new Promise((i, o) => {
		let s = !1, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = () => {
			p(), f();
		}, d = () => {
			for (let e of c) e();
			c.clear(), e.removeBroadcastListener("subtreeDataReady", u), r && r.removeEventListener("abort", m);
		}, f = () => {
			if (s) return !0;
			try {
				if (!Su(e, t, a) || !bu(t, n, a)) return !1;
				s = !0, d(), i();
			} catch (e) {
				s = !0, d(), o(e);
			}
			return !0;
		}, p = () => {
			for (let e of wu(t, a)) for (let t of Dn(e)) t instanceof mu && !l.has(t) && (l.add(t), c.add(t.observe(f)));
		}, m = () => {
			s = !0, d(), o(/* @__PURE__ */ Error("Lazy subtree readiness was aborted."));
		};
		if (e.addBroadcastListener("subtreeDataReady", u), r) {
			if (r.aborted) {
				m();
				return;
			}
			r.addEventListener("abort", m, { once: !0 });
		}
		try {
			if (p(), c.add(e.dataFlow.loadingStatusRegistry.subscribe(f)), f()) return;
			Eu(t, n, a), f();
		} catch (e) {
			s = !0, d(), o(e);
		}
	});
}
function Su(e, t, n) {
	let r = !1;
	for (let i of wu(t, n)) {
		let t = Array.from(Dn(i)).filter((e) => e instanceof H);
		if (t.some((e) => e instanceof $a)) for (let n of t) {
			let t = e.dataFlow.loadingStatusRegistry.getSource(n);
			if (t?.status === "error") throw Error(`Data loading failed at "${t.viewPath}": ${t.message ?? t.sourceId}`);
			r ||= t?.status === "loading";
		}
	}
	return !r;
}
function Cu(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of wu(e, t)) for (let e of Dn(r)) e instanceof $a && n.add(e);
	return n;
}
function wu(e, t) {
	let n = t ?? Tu, r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		e instanceof Z && n(e) && e.flowHandle?.collector && r.add(e.flowHandle.collector);
	}), r;
}
function Tu(e) {
	return e.isVisible() && e.getEffectiveOpacity() > 0;
}
function Eu(e, t, n) {
	for (let r of Cu(e, n)) {
		let e = Ou(r, t);
		e && r.ensureDataForDomain(e);
	}
}
function Du(e, t) {
	let n = Ou(e, t);
	return !!n && e.isDataReadyForDomain({ [e.channel]: n });
}
function Ou(e, t) {
	return t?.[e.channel] ?? (t ? void 0 : Array.from(e.scaleResolution.getDomain()));
}
//#endregion
//#region ../core/src/scales/viewportDomain.js
var ku = 150;
function Au(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && e.source === "viewport";
}
function ju(e, t) {
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
	let r = n.filter((e) => Au(e.domain)), i = /* @__PURE__ */ new Set();
	for (let e of r) {
		if (e.type === "nominal" || e.type === "ordinal") throw Error(`Viewport-derived domains require a continuous scale, but channel "${e.channel}" has type "${e.type}".`);
		let t = e.domain.mode ?? "intersect";
		if (t !== "intersect" && t !== "contain") throw Error(`Unknown viewport domain mode: ${t}.`);
		i.add(t);
	}
	if (r.length > 0 && r.length !== n.length) throw Error("Cannot mix viewport-derived and other configured domains on a shared scale.");
	if (i.size > 1) throw Error("Cannot mix viewport domain modes on a shared scale.");
	return i.values().next().value;
}
function Mu(e, t, n, r) {
	let i = t(), a = zl(i), o = !1;
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let s = r(t), c = t.view.getCollector();
		for (let t of e) c ? (a.extendAll(c.getViewportDomain(v(t, i), i, t, s)), o = !0) : t.constant && (a.extend(t({})), o = !0);
	}
	return o ? a : void 0;
}
function Nu(e, t, n, r, i) {
	let a = [];
	for (let n of N) {
		let o = e.view.getScaleResolution(n);
		if (!o || o === t) continue;
		if (r(o)) throw Error(`Viewport-derived scale domains form a dependency cycle in view "${e.view.getPathString()}".`);
		let s = o.getScale();
		if (!P(s.type) || I(s.type)) continue;
		let c = e.view.mark.encoders?.[n];
		if (!c) continue;
		let l = Lu(c);
		if (!l) continue;
		let u = n === "x" ? "x2" : "y2", d = e.view.mark.encoders?.[u], f = d ? Lu(d) : void 0, p = o.getDomain();
		a.push({
			channel: n,
			domain: [p[0], p.at(-1)],
			accessor: l,
			...f && { accessor2: f },
			mode: i
		});
	}
	if (a.length === 0) {
		let t = e.view.getPathString?.() ?? e.view.name ?? "(unknown)";
		throw Error(`Viewport-derived ${n} domain in view "${t}" requires an independent continuous positional scale.`);
	}
	return a;
}
function Pu(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) for (let e of N) {
		let i = r.view.getScaleResolution(e);
		i && i !== t && n.add(i);
	}
	return n;
}
function Fu(e, t) {
	for (let n of e) {
		if (!n.view.getCollector()?.completed) return !1;
		let e = {};
		for (let r of t(n)) e[r.channel] = Array.from(r.domain);
		if (!bu(n.view, e, (e) => e === n.view)) return !1;
	}
	return !0;
}
var Iu = class {
	#e;
	#t = !1;
	constructor({ isReady: e, update: t }) {
		this.isReady = e, this.update = t;
	}
	schedule(e) {
		e && this.#t && this.isReady() ? (this.#t = !1, this.update()) : (clearTimeout(this.#e), this.#t = !1, this.#e = setTimeout(() => {
			this.#e = void 0, this.isReady() ? this.update() : this.#t = !0;
		}, ku));
	}
	clear() {
		clearTimeout(this.#e), this.#e = void 0, this.#t = !1;
	}
};
function Lu(e) {
	return gt(e) ?? Tt(e).find(D);
}
//#endregion
//#region ../core/src/genome/contigNames.js
function Ru(e) {
	let t = /* @__PURE__ */ new Map(), n = 0;
	for (let r of e) {
		if (!r.name || t.has(r.name)) throw Error("Contig names must be nonempty and unique.");
		if (n += r.size, !Number.isSafeInteger(r.size) || r.size <= 0 || !Number.isSafeInteger(n)) throw Error("Contig sizes and their sum must be positive safe integers.");
		t.set(r.name, r);
	}
	let r = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.name.replace(/^chr/i, "");
		for (let i of [
			e,
			"chr" + e,
			"CHR" + e,
			"Chr" + e
		]) t.has(i) || (r.has(i) && r.get(i) !== n ? r.set(i, null) : r.set(i, n));
	}
	for (let [e, n] of r) n && t.set(e, n);
	return t;
}
//#endregion
//#region ../core/src/genome/locusFormat.js
var zu = z(",d");
function Bu(e) {
	return e.chrom + ":" + zu(Math.floor(e.pos + 1));
}
function Vu(e) {
	return !he(e) && "chrom" in e ? Bu(e) : "" + e;
}
function Hu(e, t) {
	return e.chrom + ":" + zu(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + zu(Math.ceil(t.pos));
}
//#endregion
//#region ../core/src/genome/genomes.js
var Uu = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function Wu(e) {
	if (!(e in Uu)) throw Error(`Unknown assembly: ${e}`);
	return Uu[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region ../core/src/genome/genome.js
var Gu = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/grammar/genomic-coordinates/.");
		if (!Xu(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, Qu(this.config)) this.setChromSizes(this.config.contigs);
		else if (!Zu(this.config)) {
			let e = Wu(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/grammar/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (Zu(this.config)) try {
			let t = Mn(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(Ku(await n.text()));
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
			this.chromosomes.push(i), t += i.size;
		}
		let n = Ru(this.chromosomes);
		for (let [e, t] of n) this.chromosomesByName.set(e, t);
		for (let e of this.chromosomes) {
			this.chromosomesByName.set(e.number, e);
			let t = String(e.number);
			this.chromosomesByName.has(t) || this.chromosomesByName.set(t, e);
		}
		for (let [e, t] of this.chromosomesByName) this.cumulativeChromPositions.set(e, t.continuousStart);
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
		let t = xt(this.startByIndex, e) - 1;
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
		return Hu(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return Bu(t);
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
};
function Ku(e) {
	return Qi(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function qu(e) {
	return R(e) && "chrom" in e;
}
function Ju(e) {
	return e.every(qu);
}
function Yu(e) {
	return Ju(e) && (e[1] ?? e[0]).pos !== void 0;
}
function Xu(e) {
	return R(e) && ("name" in e || Zu(e) || Qu(e));
}
function Zu(e) {
	return Xu(e) && "url" in e;
}
function Qu(e) {
	return Xu(e) && "contigs" in e;
}
//#endregion
//#region ../core/src/scales/domainPlanner.js
function $u(e, t, n, r, i, a) {
	let o = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => {
		let t = e.channelDef.scale?.domain;
		return t && !Au(t);
	}), s = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	t?.domain !== void 0 && !Au(t.domain) && td(s, nd(t, n, r, i, a));
	for (let e of o) td(s, nd({
		channel: e.channel,
		type: e.channelDef.type,
		domain: e.channelDef.scale.domain
	}, n, r, i, a));
	return ad(s);
}
function ed(e, t, n) {
	let r = Array.from(e).filter((e) => e.contributesToDomain).map((e) => ({
		channel: e.channel,
		domain: e.channelDef.scale?.domain
	}));
	t && r.push(t);
	let i = !1, a;
	for (let { channel: e, domain: t } of r) {
		if (t === void 0 || Au(t)) continue;
		if (!ud(t)) {
			i = !0;
			continue;
		}
		let r = ld(e, t, t.param), { runtime: o } = n(t.param, r);
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
function td(e, t) {
	t.kind === "selection" ? rd(e, t) : id(e, t);
}
function nd(e, t, n, r, i) {
	let a = e.domain;
	return ud(a) ? {
		kind: "selection",
		...od(e, a, n, r, i)
	} : {
		kind: "literal",
		domain: sd(e.type, Vl(a, t), r)
	};
}
function rd(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function id(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function ad(e) {
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
function od(e, t, n, r, i) {
	let a = t.param, o = ld(e.channel, t, a), s = n(a, o), c = t.initial !== void 0, l = s.selection?.intervals[o], u = a + "." + o;
	return !l || l.length !== 2 || l[0] === l[1] ? {
		domain: i && t.initial ? sd(e.type, t.initial, r) : void 0,
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	} : {
		domain: zl(e.type, r(l)),
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	};
}
function sd(e, t, n) {
	let r = n(t);
	return zl(e, e === "locus" && Ju(t) && !Yu(t) ? r : fn(e, r));
}
function cd(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => jl(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function ld(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = tt(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function ud(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function dd(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = v(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = zl(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = zl(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function fd(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? n?.length ? sn(e, n) : [] : n ?? [];
}
function pd(e) {
	let t = e.view.mark.encoders?.[e.channel];
	return t ? Tt(t).filter(D) : [];
}
//#endregion
//#region ../core/src/scales/domainInputs.js
function md({ owner: e, manager: t, props: n, explicit: r, type: i, members: a, dataMembers: o, viewLevelDomain: s, createExpression: c, resolveSelectionBinding: l, fromComplexInterval: u, getLocusExtent: d, link: f, viewport: p, viewportDependencies: m, getConstraints: h, getZoomExtent: g, ignoreSelectionInitial: _, lastVisible: y }) {
	let b = e.runtime, x = Array.from(a, (e) => e.view);
	e.policy = () => ({
		zoomable: P(n.type) && !I(n.type) && !!n.zoom,
		scaleKind: n.type === "index" ? "index" : P(n.type) && !I(n.type) ? "continuous" : "discrete",
		rendered: x.some((e) => e.hasRendered()),
		animateChanges: n.domainTransition !== !1,
		selectionLinked: !!f
	});
	let S = [];
	try {
		let x = /* @__PURE__ */ new Map();
		for (let e of [s?.domain, ...Array.from(a, (e) => e.contributesToDomain ? e.channelDef.scale?.domain : void 0)]) for (let t of Hl(e)) x.has(t.expr) || x.set(t.expr, c(t));
		let C = new Set(Array.from(x.values()).flatMap((e) => (e.zoomLevelResolutions ?? []).filter((e) => e.isZoomable()))), w = new Map(Array.from(o, (e) => [e, pd(e).filter((e) => !e.channelDef.domainInert)])), T = new Map(Array.from(o, (e) => [e, (p && e.view.mark.encoders ? h(e) : []).map((t) => {
			let n = e.view.getScaleResolution(t.channel);
			return {
				...t,
				get domain() {
					let e = n.getDomain();
					return [e[0], e.at(-1)];
				}
			};
		})])), E = b.signal("selection domain input", {
			value: f ? Ol(f.runtime.getValue(f.param), f.param) : void 0,
			own: !1,
			ignoreInitial: _
		});
		S.push(E.dispose);
		let D, O, k = [], ee = !1, A = b.computed("configured domain", [E, ...Array.from(x.values()).flatMap((e) => e.dependencies)], () => $u(a, s, (e) => x.get(e.expr), f ? () => ({
			runtime: f.runtime,
			selection: E.get().value
		}) : l, u, !E.get().ignoreInitial).domain, { equals: (e, t) => On(e, t) });
		S.push(A.dispose);
		let te = () => {
			if (p) {
				let e = Mu(o, () => i, (e) => w.get(e), (e) => T.get(e));
				return e?.length && (y = e), e?.length ? e : y;
			}
			return dd(o, () => i, (e) => w.get(e));
		}, ne = () => Array.from(o).every((e) => {
			if (!e.view.isDataInitialized()) {
				let t = e.channelDef.scale?.domain;
				return t !== void 0 && !Au(t);
			}
			if (!e.view.mark.encoders?.[e.channel]) return !1;
			if (w.get(e).every((e) => e.constant)) return !0;
			let t = e.view.getCollector();
			return !!t && jn(t);
		}), j = (e) => fd(i, d, e, n.assembly), re = () => {
			let a = O;
			if (O = void 0, ee || !a) return;
			if (a === "selection-sync") {
				e.update({
					type: a,
					candidate: e.state.visibleDomain,
					resetDomain: t.normalizeDomain(A.get() ?? j(void 0)),
					referenceDomain: e.state.initialReference,
					dataExtent: e.state.dataExtent,
					readiness: e.state.phase === "ready" ? "ready" : "pending"
				});
				return;
			}
			let s = A.get(), c = f ? E.get().value?.intervals[f.encoding] : void 0, l = c != null && c[0] === c[1], u = i !== "locus" && (!s || f) || typeof n.zoom == "object" && n.zoom.extent === "data" ? te() : void 0;
			k = j(u);
			let d = s ?? k, p = t.domainProps(n, d, r), m = t.prepareDomain(p);
			m.applyOrdinalUnknown && t.scale.unknown(m.ordinalUnknown), I(n.type) && (t.scale.props.domainIndexer = p.domainIndexer);
			let h = l || a === "viewport" && !Fu(o, (e) => T.get(e)) ? void 0 : m.domain ?? void 0;
			e.update({
				type: a,
				candidate: h,
				resetDomain: t.normalizeDomain(s ?? j(void 0)),
				referenceDomain: f ? k : h,
				dataExtent: typeof n.zoom == "object" && n.zoom.extent === "data" && u?.length ? Array.from(sn(i, u)) : void 0,
				readiness: e.state.phase === "ready" || ne() ? "ready" : "pending"
			});
		}, M = (e) => {
			(!O || e === "selection" || O !== "selection" && e !== "selection-sync" && (e !== "data" || O === "selection-sync")) && (O = e), b.requestUpdate(re, Tl - 1, () => {
				O = void 0;
			});
		}, ie = new Iu({
			isReady: () => Fu(o, (e) => T.get(e)),
			update: () => {
				M("viewport"), b.flushNow({ afterTransaction: !0 });
			}
		});
		for (let t of m) S.push(t.getDomainRef().subscribe(() => {
			e.state.phase === "ready" ? ie.schedule(!1) : M("viewport");
		}));
		S.push(() => ie.clear()), S.push(A.subscribe(() => M(f ? E.get().own ? "selection-sync" : "selection" : "expression"))), f && S.push(f.runtime.subscribe(f.param, () => {
			let e = E.get(), t = Ol(f.runtime.getValue(f.param), f.param), n = t?.intervals[f.encoding], r = D !== void 0 && t === D;
			E.set({
				value: t,
				own: r,
				ignoreInitial: n ? !1 : e.value?.intervals[f.encoding] ? !0 : e.ignoreInitial
			}), M(r ? "selection-sync" : "selection");
		}));
		let N = () => {
			p && e.state.phase === "ready" ? ie.schedule(!0) : M("data"), b.flushNow({ afterTransaction: !0 });
		}, ae = /* @__PURE__ */ new Map();
		for (let e of o) {
			let t = e.view.getCollector();
			if (!t) continue;
			let n = ae.get(t);
			n || (n = {
				keys: /* @__PURE__ */ new Set(),
				sensitive: yn(t)
			}, ae.set(t, n));
			for (let t of w.get(e)) (r || !n.sensitive.has(tt(t.scaleChannel))) && n.keys.add(v(t, i));
		}
		for (let [e, { keys: t }] of ae) for (let n of t) S.push(e.subscribeDomainChanges(n, N));
		return {
			zoomLevelResolutions: C,
			get lastVisible() {
				return y;
			},
			get ignoreSelectionInitial() {
				return E.get().ignoreInitial;
			},
			request: M,
			readData: te,
			syncSelection() {
				if (!f || !n.zoom || !P(n.type) || I(n.type)) return;
				let t = Ol(f.runtime.getValue(f.param), f.param);
				if (!t) return;
				let r = Ml(e.state.visibleDomain, g());
				if (!r) return;
				let i = Ml(k, g()), a = On(r, i) ? null : r;
				if (On(t.intervals[f.encoding] ?? null, a)) return;
				let o = {
					...t,
					intervals: {
						...t.intervals,
						[f.encoding]: a
					}
				};
				D = o;
				try {
					f.runtime.setValue(f.param, o);
				} finally {
					D = void 0;
				}
			},
			dispose() {
				ee = !0, b.cancelUpdate(re);
				for (let e of S) e();
			}
		};
	} catch (e) {
		for (let e of S.reverse()) e();
		throw e;
	}
}
//#endregion
//#region ../core/src/genome/scaleIndex.js
function hd() {
	let t = [0, 1], n = [0, 1], r = 1, i = 0, a = 0, o = .5, s, c = /* @__PURE__ */ new Map(), l = (e) => {
		let r = p.enabled();
		e = r ? e ?? p.axisLength() : 0;
		let l = c.get(e);
		return l || (l = ho({
			domain: t,
			range: n,
			cuts: r ? p.positions : [],
			width: e > 0 ? p.width / e : 0,
			ranks: s,
			paddingInner: i,
			paddingOuter: a,
			align: o
		}), c.set(e, l)), l;
	}, u = 0, d = () => l().step, f = (e) => l().position(e), p = kt(f, () => c.clear());
	return f.invert = (e) => l().invertPoint(e).value, f.navigationMapping = l, f.gapMapping = (e) => p.enabled() && (e ?? p.axisLength()) > 0 ? l(e) : void 0, f.sizeForStep = (n) => {
		if (!p.enabled()) return n * Ve(r, i, a);
		if (!r && !s) return 0;
		let o = s?.[0] ?? e(p.positions, t[0]), c = s?.[1] ?? e(p.positions, t[1], !0);
		return n * Math.max(s ? 2 ** -52 : 1, r - i + 2 * a) + p.width * (c - o);
	}, f.gapDomain = () => s, f.domain = function(e, n) {
		if (arguments.length) {
			c.clear(), s = n;
			let i = ta(e);
			return t = n ? i : go(i), r = t[1] - t[0], f;
		}
		return t.slice();
	}, f.range = function(e) {
		return arguments.length ? (c.clear(), n = [...e], f) : n;
	}, f.numberingOffset = function(e) {
		return arguments.length ? (u = e, f) : u;
	}, f.padding = function(e) {
		return arguments.length ? (c.clear(), a = e, i = Math.min(1, e), f) : i;
	}, f.paddingInner = function(e) {
		return arguments.length ? (c.clear(), i = Math.min(1, e), f) : i;
	}, f.paddingOuter = function(e) {
		return arguments.length ? (c.clear(), a = e, f) : a;
	}, f.align = function(e) {
		return arguments.length ? (c.clear(), o = Math.max(0, Math.min(1, e)), f) : o;
	}, f.step = d, f.bandwidth = () => Math.abs(d() * (1 - i)), f.ticks = (e) => {
		let t = u - (1 - i) / 2;
		return bn(f.invert(n[0]) + t, f.invert(n[1]) + t, Math.min(e, Math.ceil(r))).filter(Number.isInteger).map((e) => e - u);
	}, f.tickFormat = (e, n) => {
		if (n) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = Tn(t[0], t[1], Math.min(e, Math.ceil(r))) < 1e5 ? z(",") : z(".3s");
		return (e) => i(e + u);
	}, f.copy = () => {
		let e = hd().domain(t, s).range(n).paddingInner(i).paddingOuter(a).align(o).numberingOffset(u).gapPositions(p.positions).gapWidth(p.width).axisLength(p.axisLength);
		return f.props && Object.assign(e, { props: f.props }), e;
	}, f;
}
//#endregion
//#region ../core/src/genome/scaleLocus.js
var gd = 1e6, _d = .65;
function vd() {
	let e = hd().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), o = (1 - e.paddingInner()) / 2, [s, c] = e.range().map((t) => e.invert(t) - o), l = t.toChromosome(Math.max(s, 0)), u = t.toChromosome(Math.min(c, t.totalSize - 1)), d = Math.max(1, Math.min(n ?? 10, i)), f = Tn(r[0], r[1], d);
		f < gd && (f = Tn(r[0], r[1], Math.max(1, Math.min((n ?? 10) * _d, i)))), f = Math.max(1, f);
		let p = [];
		for (let e = l.index; e <= u.index; e++) {
			let n = t.chromosomes[e], r = Math.max(n.continuousStart + f, n.continuousStart + Math.ceil((s + a - n.continuousStart) / f) * f), i = Math.min(n.continuousEnd - f / 4, c + a);
			for (let e = r; e <= i; e += f) p.push(e - a);
		}
		return p;
	}, e.tickFormat = (n, r) => {
		if (!t) return;
		if (r) throw Error("Locus scale's tickFormat does not support a specifier!");
		let i = e.domain(), a = i[1] - i[0], o = e.numberingOffset(), s = Tn(i[0], i[1], Math.max(1, Math.min(n ?? 10, a))) < gd ? z(",") : z(".3s"), c = (e) => e - t.toChromosome(e).continuousStart;
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
function yd(e) {
	return e.type == "locus";
}
function bd(e, t) {
	let n = Td(e);
	return n ? n.toChromosomal(t) : t;
}
function xd(e, t) {
	let n = Td(e);
	return n && qu(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function Sd(e, t) {
	let n = Td(e);
	return n && Ju(t) ? n.toContinuousInterval(t) : t;
}
function Cd(e, t) {
	let n = Td(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function wd(e) {
	let t = Td(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function Td(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region ../core/src/utils/indexer.js
function Ed() {
	let e = 0, t, n = 0, r = /* @__PURE__ */ new Map(), i = (i) => (i === t || (n = r.get(i), n === void 0 && (n = e++, r.set(i, n)), t = i), n);
	return i.addAll = (e) => {
		for (let t of e) i(t);
	}, i.invert = (e) => {
		for (let t of r.entries()) if (t[1] == e) return t[0];
	}, i.domain = () => [...r.keys()], i;
}
//#endregion
//#region ../core/src/scales/scaleInstanceManager.js
var Dd = class {
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
	#p;
	#m;
	#h;
	#g;
	#_ = !1;
	#v;
	#y;
	constructor({ getRuntime: e, createExpression: t, onRangeChange: n, onDomainChange: r, onViewportChange: i = () => {
		throw Error("Viewport commands are not configured.");
	}, getGenomeStore: a, getAxisLength: o = () => 0, validateGapExpression: s = () => {} }) {
		this.#r = e, this.#c = t, this.#u = n, this.#d = r, this.#m = i, this.#h = a, this.#g = o, this.#l = s;
	}
	get scale() {
		return this.#e;
	}
	get initializingRange() {
		return this.#_;
	}
	resetScale() {
		this.#o = !1, this.#a?.set(null), this.#e = void 0, this.#s = void 0, this.#f = void 0, this.#y = void 0, this.#t = void 0;
	}
	getLocusGenome(e) {
		let t = this.#h();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e, t) {
		let n = No({
			...this.#T(e),
			range: void 0
		});
		if (n.props = e, "unknown" in n && n.unknown(null), this.#e = n, this.#t = typeof n.range == "function" ? n.range() : void 0, this.#b(e), "axisLength" in n && n.axisLength(this.#g), this.#f = n.domain, "viewport" in n) {
			let t = n;
			this.#p = t.viewport, this.#p(e.viewport ? { interval: e.viewport } : null);
		}
		if (n.type !== "null" && (this.#i = t(n.domain())), this.#s = n.range, !this.#n) {
			this.#n = new Bn(() => this.#r()), this.#a = this.#n.signal("range command", null), this.mapping = this.#n.operation("scale mapping", [], () => null, (e) => {
				e && this.#C(e);
			}, { equals: kd });
			let e = this.mapping.get();
			this.#n.effect([this.mapping], () => {
				let t = this.mapping.get(), n = e && (t.gapWidth !== e.gapWidth || !V(t.gapPositions, e.gapPositions)), r = e && !V(e.props.viewport ?? [], t.props.viewport ?? []);
				if (e = t, t.gapDomain && n) this.#d(Array.from(t.domain));
				else {
					if (t.viewport !== void 0 && (n || r)) {
						let e = r ? t.props.viewport : t.viewport?.interval;
						this.#m(e ? { interval: e } : null);
					}
					this.#u();
				}
			});
		}
		this.#_ = !0;
		try {
			this.configureMapping(e), this.#n.flushNow();
		} finally {
			this.#_ = !1;
		}
		return this.#E(), this.#e;
	}
	#b(e) {
		let t = this.#e;
		t && yd(t) && t.genome(this.getLocusGenome(e.assembly));
	}
	domainProps(e, t, n) {
		let r = { ...e };
		if (I(e.type)) {
			let e = this.#v ??= Ed();
			e.addAll(t ?? []);
			let i = t && new Set(t), a = n ? t ?? [] : e.domain().filter((e) => !i || i.has(e));
			r.domain = a.length ? a : new Il(), r.domainIndexer = e;
		} else t?.length && (r.domain = t);
		return !r.domain && r.domainMid !== void 0 && (r.domain = [r.domainMin ?? 0, r.domainMax ?? 1]), r;
	}
	prepareDomain(e) {
		let t = this.#e.copy();
		return t.type = this.#e.type, Ao(t, this.#S(e)), Lo(t, e);
	}
	configureProperties(e) {
		this.#y = void 0, this.#e.props = e, this.#b(e);
	}
	configureMapping(e) {
		let t = this.#e, n = t.type === "null" ? [] : [this.#i, this.#a], r = (e, t = !1) => {
			if (!F(e)) return () => e;
			let r = this.#c(e);
			return t && this.#l(r), n.push(...r.dependencies), r;
		}, i = Array.isArray(e.range) ? e.range.map((e) => r(e)) : void 0, a = vt(e), o = t.type === "band" || t.type === "point";
		if (a && ![
			"index",
			"locus",
			"band",
			"point"
		].includes(t.type)) throw Error("Grouping gaps require a positional index, locus, band, or point scale.");
		if (a && o && e.round) throw Error("Grouping gaps on band/point scales do not support round: true.");
		let s = r(a ? e.gapPositions : null, !0), c = r(a ? e.gapWidth ?? 6 : 0, !0), l, u = st(null);
		this.#_ = !1, this.mapping.rebind(n, () => {
			let n = t.type === "null" ? null : this.#i.get(), r = n ? n.visibleDomain : [], a = this.mapping.get(), d = s(null);
			(d !== l || o && a?.domain !== r && !V(a?.domain ?? [], r)) && (u = this.#w(d, r), l = d);
			let f = i?.map((e) => e(null));
			e.reverse && f?.reverse();
			let p = this.#a.get(), m = this.#o && p !== null && p.props === e && Od(p.configuredRange, f);
			p && !m && (this.#o = !1);
			let h = p && m ? p.range : f, g = t.type === "null" || a?.scale === t && a?.props === e && a.domain.length === r.length ? void 0 : this.#x(e);
			return {
				scale: t,
				props: e,
				domain: r,
				gapDomain: n?.gapDomain,
				viewport: n?.viewport,
				gapPositions: u,
				gapWidth: c(null),
				configuredRange: f,
				range: h,
				prepared: g
			};
		}), this.#n.flushNow({ afterTransaction: !0 });
	}
	#x(e) {
		e = this.#S(e);
		let t = this.#e.copy();
		return t.type = this.#e.type, Ao(t, e), Mo(t, {
			...e,
			range: void 0
		}), Object.assign(t, { props: e });
	}
	#S(e) {
		let t = this.#T(e);
		return {
			...jo(this.#e.type, this.mapping.get()?.props, t),
			...t
		};
	}
	#C({ props: e, range: t, prepared: n, gapPositions: r, gapWidth: i, viewport: a }) {
		if (this.#e && this.#e.type !== "null" && (n && (Ao(this.#e, n.props), this.#s && this.#s(n.range()), "interpolator" in n && "interpolator" in this.#e && this.#e.interpolator(n.interpolator()), "bins" in n ? this.#e.bins = n.bins : delete this.#e.bins), a !== void 0 && "viewport" in this.#e && this.#p(a), t ? this.#s(t) : e.scheme === void 0 && !("rangeStep" in e) && this.#t && this.#s(this.#t), "gapPositions" in this.#e)) {
			let e = this.#e;
			V(e.gapPositions(), r) || e.gapPositions(r), e.gapWidth() !== (i ?? 0) && e.gapWidth(i);
		}
	}
	#w(e, t) {
		if (e == null) return st(null);
		if (this.#e.type === "band" || this.#e.type === "point") {
			if (!Array.isArray(e)) throw Error("Band/point gapPositions must be an array of category values or null.");
			if (!e.every(Rc)) throw Error("Gap categories must be strings, numbers, or booleans.");
			let n = new Set(e);
			return st(t.flatMap((e, t) => t > 0 && n.has(e) ? [t] : []));
		}
		if (e !== "chromosomes") return st(e);
		if (!yd(this.#e)) throw Error("gapPositions: \"chromosomes\" requires a locus scale.");
		return st(this.#e.genome().chromosomes.slice(1).map((e) => e.continuousStart));
	}
	normalizeDomain(e) {
		return this.#y ??= this.#e.copy(), this.#y.domain(Array.from(e)), this.#y.domain();
	}
	mirrorDomain(e, t) {
		this.#f(Array.from(e), t);
	}
	mirrorViewport(e) {
		this.#p(e);
	}
	#T(e) {
		let { assembly: t, domainIndexer: n, gapPositions: r, gapWidth: i, viewport: a, ...o } = e;
		return o;
	}
	#E() {
		let e = this.#e;
		if (e.type === "null") return;
		let t = (t, n) => (function(r) {
			return arguments.length ? (n(r), e) : t();
		});
		if (e.range = t(e.range, (e) => {
			let t = this.mapping.get();
			this.#o = !0, this.#a.set({
				range: Array.from(e),
				configuredRange: t.configuredRange,
				props: t.props
			}), this.#n.flushNow({ afterTransaction: !0 });
		}), e.domain = t(e.domain, (e) => this.#d(Array.from(e))), "viewport" in e) {
			let n = e;
			n.viewport = t(n.viewport, this.#m);
		}
	}
	dispose() {
		this.#n?.dispose();
	}
};
function Od(e, t) {
	return e === t || !!e && !!t && V(e, t);
}
function kd(e, t) {
	return e === t || !!e && !!t && e.scale === t.scale && e.props === t.props && (e.domain === t.domain || V(e.domain, t.domain)) && V(e.gapDomain ?? [], t.gapDomain ?? []) && V(e.gapPositions, t.gapPositions) && e.gapWidth === t.gapWidth && On(e.viewport, t.viewport) && Od(e.configuredRange, t.configuredRange) && Od(e.range, t.range);
}
//#endregion
//#region ../core/src/utils/mergeObjects.js
function Ad(e, t, n) {
	if (n ||= [], e.some((e) => e === null)) {
		if (e.every((e) => e === null)) return null;
		throw console.warn(e), Error("Cannot merge objects with nulls!");
	}
	let r = {}, i = (e, t) => e === t || jd(e) && jd(t) || jd(e) && t === !0 || e === !0 && R(t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => e === t[n]), a = (e) => {
		for (let a in e) {
			let o = e[a];
			if (!n.includes(a) && o !== void 0) {
				if (r[a] !== void 0 && !i(r[a], o)) console.warn(`Conflicting property ${a} of ${t}: (${JSON.stringify(r[a])} and ${JSON.stringify(e[a])}). Using ${JSON.stringify(r[a])}.`);
				else {
					let t = r[a];
					if (jd(t)) jd(o) && (r[a] = Ad([t, o], a));
					else if (jd(o)) {
						if (t !== !0 && t !== void 0) throw Error("Bug in merge! Target is: " + t);
						r[a] = Ad([{}, o], a);
					} else r[a] = o, a === "expr" && Ft(e, r);
				}
			}
		}
	};
	for (let t of e) a(t);
	return r;
}
function jd(e) {
	return R(e) && !Array.isArray(e);
}
//#endregion
//#region ../core/src/config/scaleConfig.js
var Md = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, Nd = /* @__PURE__ */ new Set(["rect"]), Pd = /* @__PURE__ */ new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function Fd(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function Id(e) {
	return Pd.has(e);
}
function Ld(e, t) {
	if (Id(t)) return Vd(e)[t];
}
function Rd(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function zd(e) {
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
function Bd(e, t) {
	let n = Rd(t);
	return G(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function Vd(e) {
	return G(e.map((e) => e.range));
}
function Hd(e, { channel: t, dataType: n, isExplicitDomain: r, markTypes: i, hasDomainMid: a }) {
	let o = Bd(e, n), s = Vd(e), c = { ...zd(o) };
	if (r ? c.zero = !1 : c.zero === void 0 && o.zero !== void 0 && (c.zero = o.zero), ue(t) && c.nice === void 0 && (c.nice = o.nice === void 0 ? !r : o.nice), Ut(t) && c.scheme === void 0) {
		if (n == "quantitative") {
			let e = a || o.domainMid !== void 0 ? s.diverging : i?.length && i.every((e) => Nd.has(e)) ? s.heatmap : s.ramp, t = Fd(e) ? e : o.quantitativeColorScheme;
			Fd(t) && (c.scheme = t);
		} else {
			let e = o[Md[n] ?? Md.quantitative];
			Fd(e) && (c.scheme = e);
		}
	} else l(t) && c.range === void 0 ? c.range = t == "shape" ? s.shape ?? [] : t == "direction" ? ["forward", "reverse"] : [] : t == "size" && c.range === void 0 ? c.range = s.size : t == "angle" && c.range === void 0 && (c.range = s.angle);
	return c;
}
//#endregion
//#region ../core/src/scales/scaleRules.js
function Ud(e) {
	return e === "band" || e === "point";
}
function Wd(e) {
	return Ud(e) || P(e) && !I(e);
}
function Gd(e, t) {
	if (t == "index" || t == "locus") {
		if (ft(e)) return t;
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
		hn,
		cn
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function Kd(e, t, n, r) {
	if (n) {
		if (["index", "locus"].includes(n) && !ft(e)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${e}" resolves to scale type "${n}".`);
		if (["index", "locus"].includes(t) && n !== t || n === "locus" && n !== t) throw Error(`${r} "${n}" is incompatible with "${t}" data.`);
	}
}
function qd(e, t) {
	ue(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && P(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region ../core/src/scales/scalePropsResolver.js
function Jd({ channel: e, dataType: t, orderedMembers: n, viewLevelScaleProps: r, isExplicitDomain: i, configScopes: a, getOwnerScaleResolution: o }) {
	let s = n, c = s.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), l = Ad(r ? [r.props] : s.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (l === null || l.type == "null") return { type: "null" };
	let u = {
		...Hd(a, {
			channel: e,
			dataType: t,
			isExplicitDomain: i,
			markTypes: c,
			hasDomainMid: l.domainMid !== void 0
		}),
		...l
	};
	if (u.type ||= Gd(e, t), ft(e) && s.some((t) => h(t.view.getEncoding()[it(e)])) && u.type == "band" && u.padding === void 0 && (u.paddingInner ??= .2, u.paddingOuter ??= .2), Kd(e, t, r ? u.type : void 0, `View-level scales.${e}.type`), typeof u.range == "string") {
		if (!Id(u.range)) throw Error("Unknown named scale range \"" + u.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let t = Ld(a, u.range);
		if (t === void 0) throw Error("Named scale range \"" + u.range + "\" is not configured in config.range.");
		Ut(e) && (typeof t == "string" || typeof t == "object" && t && !Array.isArray(t)) ? (u.scheme = t, delete u.range) : u.range = t;
	}
	if (e == "y" && I(u.type) && u.reverse == null && (u.reverse = !0), f(e) && I(u.type) && !u.range) {
		let t = e == "xOffset" ? "x" : "y", n = o?.(t);
		if (n?.getResolvedScaleType() == "band") {
			if (n.hasGroupingGaps()) throw Error("Automatically fitted categorical offsets do not support grouping gaps on the primary band scale.");
			n.getScale(), u.range = [0, { expr: `bandwidth("${t}") * ${t == "x" ? "width" : "height"}` }];
		}
	}
	if (u.range && u.scheme && delete u.scheme, u.domainTransition === void 0 && (u.domainTransition = !(s.some((e) => Hl(e.channelDef.scale?.domain).length > 0) || Hl(r?.props.domain).length > 0)), !("zoom" in u)) {
		let e = Bd(a, t);
		e.zoom === void 0 ? ["index", "locus"].includes(u.type) && (u.zoom = !0) : u.zoom = e.zoom;
	}
	qd(u, e);
	let d = Ud(u.type);
	if ((u.viewport !== void 0 || d && u.zoom) && (!d || !["x", "y"].includes(e))) throw Error("Categorical viewports and navigation require a positional band or point scale.");
	if (d && typeof u.zoom == "object") throw Error("Categorical zoom must be boolean; its bounds are the full domain.");
	if (d && u.round && (u.zoom || u.viewport != null)) throw Error("Categorical scale navigation does not support round: true.");
	return u;
}
//#endregion
//#region ../core/src/scales/zoomDomainUtils.js
function Yd(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type.replace(/^(sequential|diverging)-/, "")) {
		case "linear":
		case "index":
		case "locus": return Pe(t, n, r);
		case "log": return je(t, n, r);
		case "pow":
		case "sqrt": return Ie(t, n, r, e.exponent());
		case "symlog": return pe(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region ../core/src/scales/scaleInteractionController.js
var Xd = class {
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
		let e = this.#e();
		if (Ud(e.type)) return this.#i() ?? [0, e.domain().length];
		let t = e.props.zoom;
		return Qd(e, t, this.#o, this.#s, this.#r, this.#i);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return Wd(e);
	}
	isZoomed() {
		let e = this.#e();
		if (Ud(e.type)) {
			let t = e.viewport(), n = this.getZoomExtent(), r = yo(e.props.viewport ? { interval: e.props.viewport } : null, n[1]);
			return !!t?.gapRanks || !V(t?.interval ?? n, r?.interval ?? n);
		}
		return this.isZoomingSupported() && !V(this.#a(), this.#e().domain());
	}
	zoom(e, t, n, r) {
		if (!this.isZoomingSupported()) return !1;
		let i = this.#e(), a = this.#c();
		if (Ud(i.type) && this.getZoomExtent()[1] <= 1) return !1;
		let o = "navigationMapping" in i && i.navigationMapping(r);
		if (o) {
			let r = o.navigate(e, t, i.props.reverse ? -n : n), a = this.getZoomExtent(), s = ie(r.domain, a[0], a[1]), c = V(s, r.domain) ? r.ranks : void 0;
			return this.#t(Ud(i.type) ? { viewport: {
				interval: s,
				gapRanks: c
			} } : {
				domain: s,
				gapDomain: c
			}, 0), !0;
		}
		let s = $d(i, a, e, t, n), c = this.getZoomExtent();
		return s = ie(s, c[0], c[1]), [0, 1].some((e) => s[e] != a[e]) ? (this.#t({ domain: s }, 0), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let n = this.#e();
		if (Ud(n.type)) throw Error("Use zoomToViewport() for a categorical scale.");
		let r = ef(n.type, e, this.#o);
		return this.#l({ domain: r }, t);
	}
	#c() {
		let e = this.#e();
		return Ud(e.type) ? e.viewport()?.interval ?? this.getZoomExtent() : e.domain();
	}
	async zoomToViewport(e, t) {
		if (!Ud(this.#e().type)) throw Error("Scale viewports require a band or point scale.");
		let n = yo(vo(e), this.getZoomExtent()[1]);
		return this.#l({ viewport: n }, t);
	}
	#l(e, t) {
		let { duration: n, renderImmediately: r } = Zd(t), i = this.#t(e, n, r);
		return r && this.#n(), i;
	}
	resetZoom() {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let e = this.#e();
		if (Ud(e.type)) {
			let t = this.isZoomed();
			return this.zoomToViewport(e.props.viewport ? { interval: e.props.viewport } : null), t;
		}
		let t = e.domain(), n = this.#a();
		return this.#t({ domain: n }, 0), !V(t, e.domain());
	}
	getZoomLevel() {
		if (this.isZoomable()) {
			let e = this.getZoomExtent(), t = e.every(Number.isFinite) ? e : this.#r() ?? this.#e().domain();
			return A(t) > 0 ? A(t) / A(this.#c()) : 1;
		}
		return 1;
	}
};
function Zd(e = {}) {
	(E(e) || typeof e == "number") && (e = { duration: e });
	let t = e.duration ?? 0;
	E(t) && (t = t ? 700 : 0);
	let n = e.renderImmediately === !0;
	if (t > 0 && n) throw Error("renderImmediately is not supported for animated zooms.");
	return {
		duration: t,
		renderImmediately: n
	};
}
function Qd(e, t, n, r, i, a) {
	if (tf(t)) {
		if (_(t.extent)) return ef(e.props.type, t.extent, n);
		if (t.extent === "data") return a() ?? i() ?? e.domain();
		if (t.extent === "unbounded") {
			if (e.props.type === "locus") throw Error("Zoom extent \"unbounded\" is not supported for locus scales.");
			return [-Infinity, Infinity];
		}
	}
	return t && e.props.type == "locus" ? r() : i() ?? e.domain();
}
function $d(e, t, n, r, i) {
	let a = t;
	switch (e.props.reverse && (i = -i), e.type) {
		case "linear":
			a = C(a, i || 0);
			break;
		case "log":
			a = Ce(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = Oe(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	let o = e.invert(r);
	return Yd(e, a, o, n);
}
function ef(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && Ju(t) && !Yu(t) ? r : fn(e, r);
}
function tf(e) {
	return R(e);
}
//#endregion
//#region ../core/src/scales/resolutionMemberOrder.js
function nf(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function rf(e) {
	return Array.from(e).sort((e, t) => nf(e).localeCompare(nf(t)));
}
//#endregion
//#region ../core/src/scales/resolutionOwnerPrecedence.js
function af(e, t) {
	return e === t || e.getDataAncestors().includes(t) ? "incoming" : t.getDataAncestors().includes(e) ? "current" : "conflict";
}
rt("index", hd, ["continuous"]), rt("locus", vd, ["continuous"]), rt("null", mn, []);
var of = class {
	#e = /* @__PURE__ */ new Set();
	#t = !1;
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#i;
	#a;
	#o;
	get #s() {
		return this.#i?.state;
	}
	#c = /* @__PURE__ */ new Set();
	#l;
	#u = {
		domain: /* @__PURE__ */ new Set(),
		range: /* @__PURE__ */ new Set(),
		viewport: /* @__PURE__ */ new Set()
	};
	#d;
	#f;
	#p = !1;
	#m;
	#h;
	#g = 0;
	#_ = !1;
	#v;
	#y;
	#b;
	#x;
	get #S() {
		return this.#v ??= new Bn(() => this.#w.paramRuntime);
	}
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#m = t, this.isExplicitlyOwned() && t.registerDisposer(() => this.dispose()), this.#d = new Dd({
			getRuntime: () => this.#S,
			createExpression: (e) => this.#E(e),
			onRangeChange: () => {
				this.#F("range"), this.#M.animator.requestRender();
			},
			onDomainChange: (e) => {
				this.#oe({
					type: "set",
					domain: e
				});
			},
			onViewportChange: (e) => {
				this.#f.zoomToViewport(e);
			},
			getGenomeStore: () => this.#M.genomeStore,
			getAxisLength: () => this.getAxisLength(),
			validateGapExpression: (e) => this.#D(e)
		}), this.#f = new Xd({
			getScale: () => this.#d.scale ?? this.getScale(),
			navigate: (e, t, n = !1) => this.#oe({
				type: "navigate",
				target: e,
				duration: t
			}, !n),
			renderImmediately: () => this.#i.renderImmediately(),
			getInitialDomainSnapshot: () => this.#s.initialReference,
			getDataZoomExtent: () => Ud(this.getResolvedScaleType()) ? [0, this.#s.visibleDomain.length] : this.#s.dataExtent,
			getResetDomain: () => this.#s.resetDomain,
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#N()
		});
	}
	get #C() {
		let e = this.#e.values().next().value;
		if (!e) throw Error("ScaleResolution has no members!");
		return e.view;
	}
	isExplicitlyOwned() {
		let e = this.#m?.spec.scales?.[this.channel]?.type;
		return !!e && e !== "null";
	}
	get #w() {
		return this.#m ?? this.#C;
	}
	get #T() {
		if (!this.#h) {
			let e;
			for (let t of this.#e) if (!In(t.view)) {
				if (!e) e = t.view;
				else if (t.view !== e) return this.#w;
			}
			if (e) return e;
		}
		return this.#w;
	}
	#E(e) {
		try {
			return this.#T.paramRuntime.createExpression(e);
		} catch (e) {
			let t = e instanceof Error ? e.message : "", n = /^Unknown variable "([^"]+)" in expression: /.exec(t);
			throw n ? this.#A(n[1], e) : e;
		}
	}
	#D(e) {
		let t = this.channel === "x" ? "width" : "height", n = /* @__PURE__ */ new Set([this.#T, ...Array.from(this.#e, (e) => e.view)]);
		for (let r of n) {
			if (!r.isStepSized(t) || r.paramRuntime.hasConfiguredParamInScopeChain(t)) continue;
			let n = r.paramRuntime.getParamRef(t);
			if (n && e.dependencies.some((e) => fr(e, n))) throw Error(`Grouping gaps on a step-sized axis cannot depend on its allocated ${t}.`);
		}
	}
	#O(e) {
		return this === e || Array.from(this.#o?.zoomLevelResolutions ?? []).some((t) => t.#O(e));
	}
	#k(e, t) {
		try {
			return kl(this.#T, e, t);
		} catch (t) {
			throw !(t instanceof Error) || t.message !== `Selection domain parameter "${e}" was not found.` ? t : this.#A(e, t);
		}
	}
	#A(e, t) {
		let n = this.#T === this.#w && (this.#e.size > 1 || Array.from(this.#e).some((e) => e.view !== this.#w));
		return Error(`Parameter "${e}" is not visible from the ${n ? "shared " : ""}${this.channel} scale resolution. Move the parameter to the resolution-owning view and use push: "outer" if a child must update it.`, { cause: t });
	}
	#j(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			if (!e.isConfiguredVisible()) continue;
			let r = n.channelDef?.scale?.domain;
			(e.isDataInitialized() || r !== void 0 && !Au(r)) && t.add(n);
		}
		return t;
	}
	get #M() {
		return this.#w.context;
	}
	get zoomExtent() {
		return (this.#d.scale && P(this.#d.scale.type) && this.#f.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#N(e) {
		return wd(this.#P(e));
	}
	#P(e) {
		if (this.type === "locus") return this.#d.scale ?? this.#d.getLocusGenome(e);
	}
	addEventListener(e, t) {
		this.#u[e].add(t);
	}
	removeEventListener(e, t) {
		this.#u[e].delete(t);
	}
	subscribeZoomExtent(e) {
		return this.#c.add(e), () => this.#c.delete(e);
	}
	#F(e) {
		let t = this.#w.paramRuntime;
		t.runInTransaction(() => {
			for (let t of this.#u[e].values()) t({
				type: e,
				scaleResolution: this
			});
		}), t.flushNow();
	}
	syncLinkedSelectionFromDomain() {
		this.#o?.syncSelection();
	}
	#I() {
		let e = ed(this.#j(), this.#K(), (e, t) => this.#k(e, t));
		return cd(this.#e, e), e;
	}
	#L() {
		return ju(this.#e, this.#K());
	}
	#R() {
		return !(this.#o?.ignoreSelectionInitial ?? this.#p);
	}
	#z(e) {
		return $u(this.#j(), this.#K(), (e) => this.#E(e), (e, t) => this.#k(e, t), this.fromComplexInterval.bind(this), this.#R()).domain ?? fd(this.type, (e) => this.#N(e), void 0, e);
	}
	#B() {
		let e = this.#h?.props.domain;
		if (e !== void 0 && !Au(e)) return !0;
		for (let e of this.#e) {
			let t = e.channelDef.scale?.domain;
			if (e.contributesToDomain && t !== void 0 && !Au(t)) return !0;
		}
		return !1;
	}
	#V(e) {
		let t = sf(e), { channel: n, channelDef: i } = t;
		this.#Y(t);
		let a = i.type == null && this.type;
		if (n != "sample" && !i.type && !r(n) && !a) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(i)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let o = n == "sample" ? "nominal" : i.type, s = i?.scale?.name, c = i.scale?.type ?? (o === "index" || o === "locus" ? o : void 0);
		if (Kd(this.channel, o, c, `encoding.${n}.scale.type`), s) {
			if (this.name !== void 0 && s != this.name) throw Error(`Shared scales have conflicting names: "${s}" vs. "${this.name}"!`);
			this.name = s;
		}
		if (!a) {
			if (!this.type || this.#e.size === 0) this.type = o;
			else if (o !== this.type && !r(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${o}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#r.add(t), t;
	}
	#H() {
		this.#t || (this.#$(), this.#Q(), this.#d.scale && (this.#e.size > 0 || this.isExplicitlyOwned()) && this.reconfigure());
	}
	#U() {
		this.#_ || this.#H();
	}
	#W() {
		this.#$(), this.#Q();
		let e = this.#Z().range;
		if (this.#d.scale && (this.#z(), Array.isArray(e))) for (let t of e) F(t) && this.#E(t);
	}
	static registerInBatch(e, t) {
		let n = Array.from(e);
		if (n.some((e) => e.#_)) throw Error("Overlapping scale registration batches are not supported.");
		let r = !1, i = n.map((e) => ({
			resolution: e,
			members: new Set(e.#e),
			dataDomainMembers: new Set(e.#r),
			type: e.type,
			name: e.name
		}));
		for (let e of n) e.#_ = !0;
		try {
			let e = t();
			for (let e of n) e.#_ = !1;
			for (let e of n) e.#W();
			r = !0;
			for (let e of n) e.#H();
			return e;
		} catch (e) {
			for (let e of i) {
				let t = e.resolution;
				t.#e = e.members, t.#r = e.dataDomainMembers, t.type = e.type, t.name = e.name, t.#_ = !1, t.#$(), t.#Q();
			}
			if (r) try {
				for (let e of n) e.#H();
			} catch (t) {
				e && typeof e == "object" && (e.rollbackError = t);
			}
			throw e;
		}
	}
	registerMember(e) {
		let t = this.#V(e);
		return this.#U(), () => {
			let e = this.#e.delete(t);
			return e && (this.#r.delete(t), this.#U()), e && this.#e.size === 0 && !this.isExplicitlyOwned();
		};
	}
	attachViewLevelScaleProps(e, t) {
		if (this.#h && this.#h.view !== e) {
			let t = af(this.#h.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level scale declarations target the same ${this.channel} scale resolution.`);
		}
		for (let e of this.#e) this.#X(e);
		let n = this.#h?.props;
		(t.name || n?.name) && (this.name = t.name), this.#h = {
			view: e,
			props: t
		}, this.#Q(), this.#G(cf(n, t) ? "configuration" : "membership");
	}
	clearViewLevelScaleProps(e) {
		if (this.#h?.view === e) {
			let e = this.#h.props;
			this.#h = void 0, e.name && (this.name = void 0), this.#Q(), this.#G(cf(e, void 0) ? "configuration" : "membership");
		}
	}
	#G(e) {
		this.#d.scale && this.#S.runInTransaction(() => {
			this.#Z().type === this.#d.scale.type ? this.bindDomainInputs() : (this.#d.resetScale(), this.initializeScale()), this.#ae(e, !0), this.#S.flushNow({ afterTransaction: !0 });
		});
	}
	getViewLevelScaleProps() {
		return this.#h;
	}
	#K() {
		let e = this.#h;
		if (e) return {
			channel: this.channel,
			type: this.type,
			domain: e.props.domain
		};
	}
	#q(e) {
		return Nu(e, this, this.channel, (e) => this.#J(e, /* @__PURE__ */ new Set()), this.#L());
	}
	#J(e, t) {
		if (e === this) return !0;
		if (t.has(e) || !e.#L()) return !1;
		t.add(e);
		for (let n of e.#r) for (let r of N) {
			let i = n.view.getScaleResolution(r);
			if (i && i !== e && this.#J(i, t)) return !0;
		}
		return !1;
	}
	#Y(e) {
		this.#h && this.#X(e);
	}
	#X(e) {
		if (e.channelDef.scale !== void 0) throw Error(`Cannot mix view-level scales.${this.channel} with encoding.${e.channel}.scale in the same scale resolution.`);
	}
	registerDisposer(e) {
		return this.#n.add(e), () => {
			this.#n.delete(e);
		};
	}
	dispose() {
		if (!this.#t) {
			this.#t = !0;
			for (let e of this.#n) e();
			this.#n.clear(), this.#o?.dispose(), this.#c.clear(), this.#u.domain.clear(), this.#u.range.clear(), this.#u.viewport.clear(), this.#i?.dispose(), this.#d.dispose(), this.#v?.dispose();
		}
	}
	bindDomainInputs() {
		let e = this.#o?.lastVisible;
		this.#i?.cancelSourceUpdates(), this.#o &&= (this.#p = this.#o.ignoreSelectionInitial, this.#o.dispose(), void 0);
		let t = this.#d.scale;
		if (!t || t.type === "null" || !this.#e.size && !this.isExplicitlyOwned()) return;
		let n = new Set(this.#e.values().filter((e) => e.view.isConfiguredVisible())), r = new Set(this.#r.values().filter((e) => e.view.isConfiguredVisible())), i = this.#Z(), a = this.#I(), o = this.#L() !== void 0, s = md({
			owner: this.#i,
			manager: this.#d,
			props: i,
			explicit: this.#B(),
			type: this.type,
			members: n,
			dataMembers: r,
			viewLevelDomain: this.#K(),
			createExpression: (e) => this.#E(e),
			resolveSelectionBinding: (e, t) => this.#k(e, t),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getLocusExtent: (e) => this.#N(e),
			link: a,
			viewport: o,
			viewportDependencies: o ? Pu(r, this) : /* @__PURE__ */ new Set(),
			getConstraints: (e) => this.#q(e),
			getZoomExtent: () => this.zoomExtent,
			ignoreSelectionInitial: this.#p,
			lastVisible: e
		}), c = Array.from(s.zoomLevelResolutions).find((e) => e.#O(this));
		if (c) throw s.dispose(), Error(`Scale zoom dependency cycle: ${this.channel} domain reads the zoom level of ${c.channel}.`);
		this.#o = s;
	}
	isDomainDefinedExplicitly() {
		return this.#B();
	}
	isDomainInitialized() {
		let e = this.#d.scale;
		if (!e) return !1;
		let t = e.domain();
		return P(e.type) ? t.length > 2 || t.length === 2 && t.some((e) => e !== 0) : t.length > 0;
	}
	#Z() {
		return Tr(this, "mergedScaleProps", () => {
			let e = Jd({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#ee(),
				viewLevelScaleProps: this.#h,
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#w.getConfigScopes(),
				getOwnerScaleResolution: (e) => this.#w.getScaleResolution(e)
			});
			return this.#ne(e), this.#re(e), e;
		});
	}
	#Q() {
		wr(this, "mergedScaleProps"), this.#y && this.#y.set(this.#y.get() + 1);
	}
	#$() {
		this.#l = void 0;
	}
	#ee() {
		return this.#l ||= rf(this.#e), this.#l;
	}
	getOrderedMembers() {
		return this.#ee().slice();
	}
	getDebugState() {
		let e = this.#d.scale, t = e && typeof e.domain == "function", n = e && typeof e.range == "function";
		return {
			kind: "scale",
			channel: this.channel,
			hostView: this.#w,
			name: this.name,
			type: this.type,
			resolvedScaleType: this.getResolvedScaleType(),
			domain: t ? this.getDomain() : void 0,
			complexDomain: t ? this.getComplexDomain() : void 0,
			range: n ? e.range() : void 0,
			zoomable: this.isZoomable(),
			zoomed: this.isZoomable() ? this.isZoomed() : !1,
			members: this.#ee().map((e) => this.#te(e)),
			activeMemberCount: this.#j().size,
			dataDomainMemberCount: this.#r.size,
			viewLevelScaleProps: this.#h ? {
				view: this.#h.view,
				props: structuredClone(this.#h.props)
			} : void 0
		};
	}
	#te(e) {
		return {
			view: e.view,
			channel: e.channel,
			channelDef: structuredClone(e.channelDef),
			contributesToDomain: e.contributesToDomain,
			active: this.#j().has(e)
		};
	}
	#ne(e) {
		let t = this.#I();
		if (!t || e === null || e.type === "null") return;
		let n = P(e.type) && !I(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	#re(e) {
		if (this.#L() && e !== null && e.type !== "null") {
			if (!P(e.type) || I(e.type)) throw Error(`Viewport-derived domains require a continuous ${this.channel} scale.`);
			if ((this.channel === "x" || this.channel === "y") && e.zoom) throw Error(`Viewport-derived domains cannot target a zoomable ${this.channel} scale.`);
		}
	}
	getAssemblyRequirement() {
		if (this.type !== "locus") return {
			assembly: void 0,
			needsDefaultAssembly: !1
		};
		let e = this.#h ? [this.#h.props] : this.#ee().map((e) => e.channelDef.scale).filter((e) => e !== void 0);
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
		let e = this.#Z();
		if (e !== null && e.type !== "null") return e.type;
	}
	hasGroupingGaps() {
		let e = this.#Z();
		return e !== null && vt(e);
	}
	#ie() {
		let e = this.#Z();
		if (e === null || e.type == "null") return { type: "null" };
		if (vt(e) && !["x", "y"].includes(this.channel)) throw Error("Grouping gaps require a positional index, locus, band, or point scale.");
		this.#g += 1;
		let t;
		try {
			t = this.#z(e.type === "locus" ? e.assembly : void 0);
		} finally {
			--this.#g;
		}
		return this.#d.domainProps(e, t, this.#B());
	}
	reconfigure() {
		this.#S.runInTransaction(() => {
			this.#Q(), this.bindDomainInputs(), this.#ae("membership", !0);
		});
	}
	reconfigureDomain(e = "data") {
		this.#ae(e, !1);
	}
	#ae(e, t) {
		let n = this.#d.scale;
		if (!n || n.type === "null") return;
		let r = this.#Z();
		t && this.#d.configureProperties(r), this.#o.request(e), this.#i.runtime.flushNow({ afterTransaction: !0 }), t && this.#d.scale === n && n.props === r && this.#d.configureMapping(r);
	}
	#oe(e, t = !0) {
		return this.#i.update(e, t);
	}
	getViewport() {
		if (!Ud(this.getScale().type)) throw Error("Scale viewports require a band or point scale.");
		let e = this.#s.viewport?.interval;
		return e ? [e[0], e[1]] : null;
	}
	zoomToViewport(e, t) {
		return this.#f.zoomToViewport(e === null ? null : { interval: e }, t);
	}
	get scale() {
		if (this.#d.scale) return this.#d.scale;
		throw Error("ScaleResolution.scale accessed before initialization. Call initializeScale().");
	}
	getScale() {
		if (this.#g > 0) throw Error(`Scale dependency cycle: channel "${this.channel}" cannot read its own scale while its domain is being resolved.`);
		if (this.#d.initializingRange) throw Error(`Scale dependency cycle: channel "${this.channel}" reads its scale while its range is being initialized.`);
		return this.#d.scale ?? this.initializeScale();
	}
	initializeScale() {
		if (this.#d.scale) return this.#d.scale;
		let e = this.#ie(), t = this.#i;
		try {
			let t = this.#d.createScale(e, (e) => (this.#s ? this.#d.mirrorDomain(this.#s.visibleDomain, this.#s.gapDomain) : (this.#i = new El({
				runtime: this.#w.paramRuntime,
				manager: this.#d,
				animator: this.#M.animator,
				domain: e,
				resetDomain: this.#d.normalizeDomain(this.#z()),
				renderImmediately: () => this.#M.renderImmediately(),
				notifyDomain: () => this.#F("domain"),
				notifyViewport: () => this.#F("viewport"),
				publishZoom: () => {
					this.#b && this.#b.set(this.#b.get() + 1);
					for (let e of this.#c) e();
				}
			}), this.#i.syncSelection = () => this.syncLinkedSelectionFromDomain()), this.#i.stateRef));
			return this.bindDomainInputs(), t;
		} catch (e) {
			throw this.#o?.dispose(), this.#o = void 0, this.#d.resetScale(), this.#i !== t && this.#i?.dispose(), this.#i = t, e;
		}
	}
	getMappingRef() {
		return this.#d.initializingRange || this.getScale(), this.#d.mapping;
	}
	observeMapping(e) {
		return this.#S.effect([this.getMappingRef()], e);
	}
	getConfigurationRef() {
		return this.#y ??= this.#S.signal("scale configuration", 0);
	}
	getDomainRef() {
		return this.getDomain(), this.#i.domain;
	}
	getFullExtentRef() {
		return this.getScale(), this.#a ??= this.#S.computed("scale full extent", [this.#i.stateRef, this.getConfigurationRef()], () => {
			let e = this.#i.state;
			return this.type === "locus" ? {
				extent: this.#N(),
				ready: !0
			} : this.#B() && !this.#I() ? {
				extent: e.resetDomain,
				ready: !0
			} : {
				extent: e.initialReference ?? [],
				ready: e.phase === "ready"
			};
		}, { equals: (e, t) => On(e, t) });
	}
	getDomain() {
		if (this.#g > 0) throw Error(`Scale dependency cycle: channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.#d.scale || this.initializeScale(), Array.from(this.#s.visibleDomain);
	}
	getDataDomain() {
		if (this.#o) return this.#o.readData();
		let e = this.#j(this.#r), t = (e) => pd(e).filter((e) => !e.channelDef.domainInert);
		return this.#L() ? Mu(e, () => this.type, t, (e) => this.#q(e)) : dd(e, () => this.type, t);
	}
	getComplexDomain() {
		if (this.type === "locus") {
			let [e, t] = this.getDomain();
			return [this.toComplex(Math.floor(e)), this.toComplex(Math.ceil(t) - 1)];
		}
		return Cd(this.#P(), un(this.type, this.getDomain()));
	}
	getAssembly() {
		if (this.type !== "locus") throw Error("Assembly access requires a locus scale.");
		return { contigs: this.#d.getLocusGenome(this.getAssemblyRequirement().assembly).chromosomes.map(({ name: e, size: t }) => ({
			name: e,
			size: t
		})) };
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#I();
		if (!e) return;
		let t = this.#w.getLayoutAncestors().at(-1), n = t ? Al(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
		return {
			param: e.param,
			encoding: e.encoding,
			persist: n
		};
	}
	isZoomed() {
		return this.#f.isZoomed();
	}
	isZoomable() {
		let e = this.#Z();
		return e === null || e.type === "null" ? !1 : Wd(e.type) && !!e.zoom;
	}
	hasConfiguredZoomExtent() {
		let e = this.#Z().zoom;
		return typeof e == "object" && e.extent !== void 0 && e.extent !== "unbounded";
	}
	zoom(e, t, n, r) {
		return this.#f.zoom(e, t, n, r);
	}
	async zoomTo(e, t = !1) {
		return this.#f.zoomTo(e, t);
	}
	resetZoom() {
		return this.#f.resetZoom();
	}
	getZoomLevel() {
		return this.isZoomable() ? this.#f.getZoomLevel() : 1;
	}
	getZoomLevelRef() {
		return this.#x ||= (this.#b = this.#S.signal("zoom publication revision", 0), this.#S.computed("scale zoom level", [this.#b, this.getConfigurationRef()], () => this.getZoomLevel())), this.#x;
	}
	getAxisLength() {
		if (this.channel !== "x" && this.channel !== "y") throw Error("Axis length is only defined for x and y channels!");
		let e = Array.from(this.#e).map((e) => e.view.layoutCoords?.[this.channel === "x" ? "width" : "height"]).filter((e) => e > 0);
		return e.length ? e.reduce((e, t) => Math.min(e, t), 1e4) : 0;
	}
	invertToComplex(e) {
		let t = this.getScale();
		if ("invert" in t) {
			let n = t.invert(e);
			return this.toComplex(n);
		}
		throw Error("The scale does not support inverting!");
	}
	toComplex(e) {
		return bd(this.#P(), e);
	}
	fromComplex(e) {
		return xd(this.#P(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? Sd(this.#P(this.getAssemblyRequirement().assembly), e) : e;
	}
};
function sf(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = An(e.view.getBaseUrl(), n.url);
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
function cf(e, t) {
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
		return !On(i, a);
	});
}
//#endregion
//#region ../core/src/utils/coalesce.js
function lf(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region ../core/src/scales/axisResolution.js
var uf = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e, t, n) {
		this.channel = e, this.scaleResolution = t, this.hostView = n;
	}
	registerMember(e) {
		return this.#n(e), this.#e.add(e), wr(this, "axisProps"), () => {
			this.#e.delete(e), wr(this, "axisProps");
		};
	}
	hasVisibleNonChromeMember() {
		for (let e of this.#e) if (e.view.isVisible()) return !0;
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
			members: rf(this.#e).map((e) => ({
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
		return Tr(this, "axisProps", () => {
			let e;
			if (this.#t) e = [this.#t.props];
			else {
				let t = rf(this.#e);
				if (!t.length) return this.scaleResolution.isExplicitlyOwned() ? {} : null;
				e = t.map((e) => {
					let t = e.view.mark.encoding[e.channel];
					return "axis" in t && t.axis;
				});
			}
			return e.length > 0 && e.some((e) => e === null) ? null : Ad(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		if (this.#t?.props.title !== void 0) return this.#t.props.title;
		let e = rf(this.#e).map((e) => {
			let t = Ye(e.view, e.channel);
			if (!ut(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: lf("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: lf(xe(t) ? t.field : void 0, Vt(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (r(t.member.channel) && !t.explicitTitle) {
				let n = tt(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), i = new Set(n.map((e) => lf(e.explicitTitle, e.implicitTitle)).filter(a));
		return i.size ? [...i].join(", ") : null;
	}
	attachViewLevelAxisProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = af(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level axis declarations target the same ${this.channel} axis resolution.`);
		}
		for (let e of rf(this.#e)) {
			let t = e.view.mark.encoding[e.channel];
			if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
		}
		this.#t = {
			view: e,
			props: t
		}, wr(this, "axisProps");
	}
	clearViewLevelAxisProps(e) {
		this.#t?.view === e && (this.#t = void 0, wr(this, "axisProps"));
	}
	getViewLevelAxisProps() {
		return this.#t;
	}
	#n(e) {
		if (!this.#t) return;
		let t = e.view.mark.encoding[e.channel];
		if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
	}
};
//#endregion
//#region ../core/src/config/configLayers.js
function df() {
	let e = [];
	return {
		appendConfig(t, n) {
			ff(e, t, n);
		},
		appendStyle(t, n) {
			pf(e, t, n);
		},
		merge() {
			return G(e.map((e) => e.config));
		}
	};
}
function ff(e, t, n) {
	n && (pf(e, t, Object.hasOwn(n, "style") ? n.style : void 0), e.push({
		kind: "config",
		config: n
	}));
}
function pf(e, t, n) {
	if (n === void 0) return;
	if (n === null) {
		mf(e);
		return;
	}
	let r = Bc(t, n);
	e.push({
		kind: "style",
		config: r
	});
}
function mf(e) {
	for (let t = e.length - 1; t >= 0; t--) e[t].kind == "style" && e.splice(t, 1);
}
//#endregion
//#region ../core/src/config/legendConfig.js
function hf(e, t) {
	let n = G(e.map((e) => e.legend?.layout)), r = n[t], i = [
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
function gf(e, t, n = {}) {
	let r = e[0], i = e.slice(1), a = df();
	_f(a, e, r, n.track);
	for (let [t, r] of i.entries()) {
		let i = e.slice(0, t + 2);
		vf(a, i, r, n.track), yf(a, i, r.legend);
	}
	yf(a, e, t);
	let o = a.merge();
	return delete o.layout, o;
}
function _f(e, t, n, r) {
	let i = t.slice(0, 1);
	yf(e, i, n?.legend), vf(e, i, n, r);
}
function vf(e, t, n, r) {
	r && yf(e, t, n?.legendTrack);
}
function yf(e, t, n) {
	e.appendConfig(t, n);
}
//#endregion
//#region ../core/src/scales/legendResolution.js
var bf = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"shape",
	"size"
]), xf = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke"
]), Sf = class {
	selectionBindings = /* @__PURE__ */ new Map();
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
		for (let n of rf(this.#e)) {
			let r = this.#n(n);
			r && !e.has(r.scaleResolution) && (e.add(r.scaleResolution), r.binding = this.selectionBindings.get(r.scaleResolution), t.push(r));
		}
		return t;
	}
	#n(e) {
		let { channel: t, view: n } = e;
		if (Af(t, n)) return;
		let r = Df(t, n);
		if (!r || ut(r)) return;
		let i = "legend" in r ? r.legend : void 0;
		if (!this.#t && i === null || "scale" in r && r.scale === null) return;
		let a = this.#t?.props ?? i, o = a === void 0 ? void 0 : {
			disable: !1,
			...a
		}, s = n.getScaleResolution(t);
		if (!s) return;
		let c = gf(n.getConfigScopes(), o, { track: Tf(n) });
		if (c.disable === !0) return;
		let l = Ef(t, r);
		if (!l) return;
		let u = "title" in r ? r.title : void 0, d = c.title === void 0 ? u === void 0 ? xe(r) ? r.field : void 0 : u : c.title, f = "format" in r ? r.format : void 0, p = l == "symbol" ? jf(t, n) : void 0, m = l == "symbol" ? wf(t, n) : void 0;
		return {
			view: n,
			channel: t,
			field: xe(r) ? r.field : void 0,
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
		for (let e of this.#e) if (e.view.isVisible() && !e.view.getLayoutAncestors().some(Jn)) return !0;
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
			members: rf(this.#e).map((e) => ({
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
			let t = af(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level legend declarations target the same ${this.channel} legend resolution.`);
		}
		let n = Array.from(this.#e).find((e) => Cf(e));
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
		if (this.#t && Cf(e)) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${e.channel}.legend in the same legend resolution.`);
	}
};
function Cf(e) {
	let t = Df(e.channel, e.view);
	return !!(t && "legend" in t && t.legend !== void 0);
}
function wf(e, t) {
	let n = t.getMarkType();
	return e == "size" && (n == "rule" || n == "link") ? "stroke" : "point";
}
function Tf(e) {
	let t = Df("x", e), n = e.getScaleResolution("x")?.getResolvedScaleType();
	return t?.type == "index" || t?.type == "locus" || n == "index" || n == "locus";
}
function Ef(e, t) {
	if ([
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"size"
	].includes(e) && t.type == "quantitative" || (t.type === "nominal" || t.type === "ordinal") && bf.has(e)) return "symbol";
	if (t.type === "quantitative" && xf.has(e)) return "gradient";
}
function Df(e, t) {
	return It(t.getEncoding()[e]);
}
function Of(e, t) {
	let n = Df(e, t);
	return !!(n && "legend" in n && n.legend === null);
}
function kf(e, t, n) {
	let r = Df(e, n), i = Df(t, n), a = n.getScaleResolution(e), o = n.getScaleResolution(t);
	return xe(r) && xe(i) && r.field === i.field && a && o && V(a.getDomain(), o.getDomain());
}
function Af(e, t) {
	if (e !== "shape") return !1;
	let n = Df(e, t);
	if (!xe(n)) return !1;
	for (let n of [
		"color",
		"fill",
		"stroke"
	]) if (kf(n, e, t) && !Of(n, t)) return !0;
	return !1;
}
function jf(e, t) {
	if (!Ut(e)) return {};
	let n = Df(e, t), r = Df("shape", t), i = t.getScaleResolution("shape");
	return xe(n) && xe(r) && i && kf(e, "shape", t) && !Of("shape", t) ? { shape: i.name ?? "shape" } : {};
}
//#endregion
//#region ../core/src/view/resolutionPlanner.js
var Mf = (e, t, n) => {
	let r = e;
	for (; !r.isResolutionBoundary(n) && (Nf(r, t, n) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes(Nf(r.dataParent, t, n))) && Nf(r, t, n) != "excluded" && !(t === "scale" && r.resolutions.scale[n]?.isExplicitlyOwned());) r = r.dataParent;
	return r;
};
function Nf(e, t, n) {
	let r = e.getConfiguredOrDefaultResolution(n, t);
	switch (r) {
		case "independent":
		case "shared":
		case "excluded":
		case "forced": return r;
		case "collected":
			if (t == "legend") return Nf(e, "scale", n);
			throw Error(`Resolution behavior "collected" is only supported for legends, not ${t}s.`);
		default: throw Error(`Unknown ${t} resolution behavior: ${r}`);
	}
}
var Pf = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let e = new of(n, t);
		t.resolutions.scale[n] = e;
	}
	return t.resolutions.scale[n];
}, Ff = (e, t, n, r) => {
	let i = It(r);
	if (!i) return;
	let a = tt(i.resolutionChannel ?? n);
	if (Kt(a) && (t != "axis" || ue(a)) && (t != "legend" || !ue(a) && !f(a))) return {
		view: Mf(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, If = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) r && !Array.isArray(r) && t(n, r);
}, Lf = (e) => {
	let t = [];
	for (let [n, r] of Object.entries(e.getEncoding())) {
		if (!r || Array.isArray(r)) continue;
		let i = Ff(e, "legend", n, r);
		i && !ue(i.channel) && t.push(i);
	}
	return t;
}, Rf = (e) => {
	let t = /* @__PURE__ */ new Map();
	return If(e, (n, r) => {
		let i = Ff(e, "scale", n, r);
		if (!i) return;
		let a = Pf(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
};
function zf(e, t, n) {
	let r = e.resolutions.axis[t];
	if (e.getScaleResolution(t) !== n) throw Error(`Shared axes must have a shared scale! Declare or share the ${t} scale at the axis host or an ancestor.`);
	if (!r) {
		r = new uf(t, n, e), e.resolutions.axis[t] = r;
		let i = n.registerDisposer(() => {
			delete e.resolutions.axis[t];
		});
		e.registerDisposer(() => {
			i(), delete e.resolutions.axis[t];
		});
	}
	return r;
}
var Bf = (e) => {
	If(e, (t, n) => {
		let r = Ff(e, "axis", t, n);
		if (!r || !ue(t) || !ft(r.targetChannel)) return;
		let i = zf(r.view, r.targetChannel, e.getScaleResolution(r.targetChannel));
		e.registerDisposer(i.registerMember({
			view: e,
			channel: t,
			channelDef: r.channelDef
		}));
	});
}, Vf = (e, t) => {
	for (let { view: n, channel: r, targetChannel: i } of t) {
		if (ue(r)) continue;
		let t = i;
		n.resolutions.legend[t] || (n.resolutions.legend[t] = new Sf(t));
		let a = n.resolutions.legend[t], o = a.registerMember({
			view: e,
			channel: r
		});
		e.registerDisposer(() => {
			o() && n.resolutions.legend[t] === a && delete n.resolutions.legend[t];
		});
	}
}, Hf = (e, t) => {
	of.registerInBatch(t.keys(), () => {
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
}, Uf = (e, t) => {
	t ? t !== "scale" && In(e) || (t == "axis" ? Bf(e) : t == "legend" ? Vf(e, Lf(e)) : Hf(e, Rf(e))) : (Uf(e, "scale"), Uf(e, "axis"));
}, Wf = {
	point: nl,
	rect: Wc,
	arrow: Kc,
	rule: al,
	tick: al,
	link: dl,
	text: hl
}, Z = class extends gr {
	#e = null;
	#t = /* @__PURE__ */ new Map();
	validatePointSelectionSources() {
		for (let e of this.paramRuntime.paramConfigs.values()) {
			if (!("select" in e)) continue;
			let t = s(e.select);
			if (t.type !== "point" || !t.encodings) continue;
			let n = t.encodings[0], r = ke(this.mark.encoding, n, (e) => this.getScaleResolution(e)?.getScale());
			this.#t.set(n, d(r.field));
		}
	}
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		try {
			let e = Wf[this.getMarkType()];
			if (e) this.mark = new e(this);
			else throw Error(`No such mark: ${this.getMarkType()}`);
			this.resolve(), this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
				for (let e of N) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
			})), this.needsAxes = {
				x: !0,
				y: !0
			}, this.#n();
		} catch (e) {
			throw this.disposeSubtree({ checkDependencies: !1 }), e;
		}
	}
	#n() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t) || !Ct(t)) continue;
			let n = typeof t.select == "object" ? t.select : void 0, r = s(t.select, "bind" in t ? t.bind : void 0), i = r.on, a = r.clear;
			if (me(r)) {
				let t = ["mouseover", "pointerover"].includes(i.type), o, s = (t) => {
					o = t, this.paramRuntime.setValue(e, t);
				}, c = (e) => {
					let t = e.markHit === void 0 ? this.context.getCurrentHover() : e.markHit;
					return t?.mark?.unitView === this ? t.datum : null;
				}, l = O(i, Ne(this.paramRuntime, n, "on")), d = O(a, Ne(this.paramRuntime, n, "clear")), f = () => {
					s(zt(r));
				};
				this.addInteractionListener(t ? "mousemove" : i.type, (n) => {
					if (!l(n.proxiedMouseEvent)) return;
					let i = c(n);
					if (t && !i && this.paramRuntime.findValue(e) !== o) return;
					let a;
					if (r.encodings) a = x(this.paramRuntime.findValue(e), i ? this.#t.get(r.encodings[0])(i) : void 0, !!r.toggle && n.mouseEvent.shiftKey);
					else if (r.toggle) {
						if (n.mouseEvent.shiftKey) {
							if (i) {
								let t = this.paramRuntime.findValue(e);
								a = y(t, { toggle: [i] });
							}
						} else a = u(i ? [i] : null);
					} else {
						let n = this.paramRuntime.findValue(e);
						(i !== n.datum || t && n !== o) && (a = ce(i));
					}
					a !== void 0 && s(a);
				}), (i.type === "wheel" || a?.type === "wheel") && this.addInteractionListener("wheelclaimprobe", (e) => {
					e.wheelIntent !== "scroll" && (i.type === "wheel" && l(e.proxiedMouseEvent) || a?.type === "wheel" && d(e.proxiedMouseEvent)) && e.claimWheel(this, { smooth: !1 });
				}), t && this.addInteractionListener("mouseleave", (t) => {
					!t.pointedViews.has(this) && this.paramRuntime.findValue(e) === o && f();
				});
				let p = t && a?.type === "mouseleave";
				a && !p && this.addInteractionListener(a.type, (e) => {
					d(e.proxiedMouseEvent) && f();
				});
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
		e ? Uf(this, e) : (this.resolve("scale"), this.resolve("axis"), this.resolve("legend"));
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? gt(t[e]) : void 0;
	}
	getSearchAccessors() {
		if (!this.#e) {
			let e = Ir(this.getEncoding()) ?? [];
			this.#e = e.map((e) => d(e));
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
		return N.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
}, Gf = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", Kf = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = t.observe(() => this.updateLayout()), this.updateLayout();
	}
	destroy() {
		this.#r(), clearTimeout(this.#i);
	}
	#a() {
		let e = Array.from(this.#t.entries());
		return this.#n()?.visit((t) => {
			if (!(t instanceof Z) || !t.isVisible()) return;
			let n = t.flowHandle?.collector;
			if (!n) return;
			let r;
			for (let e of Dn(n)) {
				if (!(e instanceof H)) continue;
				let t = this.#t.getSource(e);
				t && (r === void 0 || t.status === "error" || r.status !== "error" && t.status === "loading") && (r = {
					status: t.status,
					detail: [t.message, js(t.errorLocation)].filter(Boolean).join("\n")
				});
			}
			r && e.push([t, r]);
		}), e;
	}
	updateLayout() {
		let e = this.#a(), t = [], n, r = !1;
		for (let [i, a] of e) {
			let e = a.status !== "complete";
			i.coords ? (r ||= e, t.push(this.#o(a, {
				left: `${i.coords.x}px`,
				top: `${i.coords.y}px`,
				width: `${i.coords.width}px`,
				height: `${i.coords.height}px`
			}))) : e && (!n || a.status === "error") && (n = a);
		}
		n && !r && t.push(this.#o(n, {
			left: "0px",
			top: "0px",
			width: "100%",
			height: "100%"
		})), clearTimeout(this.#i), e.some(([, e]) => e.status !== "complete") ? this.#e.style.display = "block" : this.#i = setTimeout(() => {
			this.#e.style.display = "none";
		}, 3e3), qi(t, this.#e);
	}
	#o(e, t) {
		return q`<div style=${Lc(t)}>
            <div class=${e.status}>
                ${e.status === "error" ? q`<span
                              >Loading
                              failed${e.detail ? q`: ${e.detail}` : J}</span
                          >` : q`<img src=${Gf} alt="" /><span
                                  >Loading...</span
                              >`}
            </div>
        </div>`;
	}
}, qf = class {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Set();
	#r = /* @__PURE__ */ new Set();
	#i = 0;
	setSource(e, t, n, r, i) {
		if (e.disposed) return;
		let a = this.#t.get(e);
		if (!a) {
			let n = e.view, r = n.getLayoutAncestors().at(-1);
			a = {
				sourceId: "source-" + this.#i++,
				viewId: Lr(r).getId(n),
				viewPath: n.getPathString(),
				...e.origin === void 0 ? {} : { origin: e.origin },
				status: t
			};
			let i = a.sourceId;
			e.registerDisposer(() => {
				this.#t.delete(e), this.#a({
					type: "remove",
					sourceId: i
				});
			});
		}
		a = {
			...a,
			status: t
		}, delete a.message, delete a.errorPhase, delete a.errorLocation, t === "error" && Object.assign(a, {
			message: n,
			errorPhase: r,
			errorLocation: i
		}), this.#t.set(e, a), this.#a({
			type: "update",
			entry: a
		});
	}
	#a(e) {
		for (let t of this.#n) try {
			t(structuredClone(e));
		} catch (e) {
			queueMicrotask(() => reportError(e));
		}
		this.#o();
	}
	#o() {
		for (let e of this.#r) e();
	}
	getSnapshot() {
		return Array.from(this.#t.values(), (e) => structuredClone(e));
	}
	getSource(e) {
		return this.#t.get(e);
	}
	set(e, t, n) {
		this.#e.set(e, {
			status: t,
			detail: n
		}), this.#o();
	}
	delete(e) {
		this.#e.delete(e), this.#o();
	}
	entries() {
		return this.#e.entries();
	}
	subscribe(e) {
		return this.#n.add(e), () => {
			this.#n.delete(e);
		};
	}
	observe(e) {
		return this.#r.add(e), () => {
			this.#r.delete(e);
		};
	}
	clear() {
		this.#n.clear(), this.#r.clear(), this.#t.clear(), this.#e.clear();
	}
};
//#endregion
//#region ../core/src/genomeSpy/viewHighlight.js
function Jf(e) {
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
var Yf = class {
	#e;
	constructor() {
		this.#e = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		document.addEventListener(e, t);
		let n = this.#e.get(e);
		return n || (n = /* @__PURE__ */ new Set(), this.#e.set(e, n)), n.add(t), () => {
			document.removeEventListener(e, t), n.delete(t);
		};
	}
	removeAll() {
		for (let [e, t] of this.#e) {
			for (let n of t) document.removeEventListener(e, n);
			t.clear();
		}
		this.#e.clear();
	}
}, Xf = class {
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
		n ? this.#e.get(e)?.forEach((e) => {
			try {
				e(t);
			} catch (e) {
				n(e);
			}
		}) : this.#e.get(e)?.forEach((e) => e(t));
	}
	clear() {
		this.#e.clear();
	}
};
//#endregion
//#region ../core/src/utils/inputBinding.js
function Zf(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!Re(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let a = r.name, o = (t) => {
			e.setValue(a, t);
		}, s = e.getTargetValue?.(a) ?? e.getValue(a), c = i.name ?? a, l = i.debounce ? Ps(o, i.debounce, !1) : o, u = `${t}-param-${a}`;
		if (i.input == "range") n.push(q`<label for=${u}>${c}</label>
                    <div>
                        <input
                            id=${u}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? Tn(i.min, i.max, 100)}
                            .value=${s}
                            @input=${(e) => {
			l(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${s}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(q`<label for=${u}>${c}</label>
                    <input
                        id=${u}
                        type="checkbox"
                        ?checked=${s}
                        @input=${(e) => l(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(q`<span class="label">${c}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => q`<label>
                                    <input
                                        type="radio"
                                        name=${a}
                                        value=${e}
                                        .checked=${s == e}
                                        @input=${(e) => l(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(q`<label for=${u}>${c}</label>
                    <select
                        id=${u}
                        @input=${(e) => l(e.target.value)}
                    >
                        ${i.options.map((e, t) => q`<option
                                    value=${e}
                                    ?selected=${s == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(q`<label for=${u}>${c}</label>
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
		i.description && n.push(q`<div class="description">${i.description}</div>`);
	}
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/inputBindingManager.js
var Qf = class {
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
			t.push(...Zf(n));
		});
		let n = this.#t.inputBindingContainer;
		if (n && n != "none" && t.length) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && qi(q`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
}, $f = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function ep(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new $f("network", String(e));
	}
	if (!n.ok) throw new $f("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new $f("json", String(e));
	}
}
//#endregion
//#region ../core/src/view/viewUtils.js
function tp(e) {
	return R(e) && "field" in e && a(e.field);
}
function np(e) {
	return R(e) && ("row" in e && R(e.row) || "column" in e && R(e.column));
}
function rp(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function ip(e) {
	for (let t of N) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function ap(e) {
	let t = [];
	return e.visit((e) => {
		if (e instanceof Z) {
			let n = e.getEncoding(), r = (n, i) => {
				if (i && typeof i == "object" && !Array.isArray(i) && (xe(i) && "type" in i ? t.push({
					view: e,
					channel: n,
					field: i.field,
					type: i.type
				}) : xe(i) && n === "semanticScore" && t.push({
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
			return Qn;
		}
	}), t;
}
async function op(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = Mn(t, r.url), a;
	try {
		a = await ep(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = Mn(kn(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function sp(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region ../core/src/utils/cloner.js
function cp(e, t = {}) {
	return up(dp(e, t.copyFields ? new Set(t.copyFields) : void 0));
}
function lp(e = {}) {
	let t = e.copyFields ? new Set(e.copyFields) : void 0, n, r = ((e) => (n ||= up(dp(e, t)), n(e)));
	return r.reset = () => {
		n = void 0;
	}, r;
}
function up(e) {
	let t = Function("source", "return { " + e.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return t.properties = e, t;
}
function dp(e, t) {
	return fp(e).filter((e) => typeof e == "string" && (!t || t.has(e)));
}
function fp(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region ../core/src/data/transforms/lookup.js
var pp = class extends m {
	#e;
	get dataDependencies() {
		return this.#e ? [this.#e] : [];
	}
	get behavior() {
		return 1;
	}
	constructor(e, t, n = {}, r) {
		super(e, r), this.#e = t, this.params = e;
		let i = mp(e);
		if (!i && !t) throw Error("Lookup transform requires a foreign collector.");
		let a = B(e.key), o = B(e.fields ?? a);
		if (o.length === 0) throw Error("The \"fields\" property must not be empty.");
		if (a.length !== o.length) throw Error("The \"fields\" and \"key\" properties must have the same number of fields.");
		let s = e.values, c = e.as;
		if (!s && c) throw Error("The \"as\" property requires explicit \"values\".");
		if (s && c && c.length !== s.length) throw Error("The \"as\" property must contain one output field for every lookup value.");
		if (s?.length === 0) throw Error("The \"values\" property must not be empty.");
		let l = this.createFieldAccessors(e, "key"), u = this.createFieldAccessors(e, e.fields == null ? "key" : "fields"), d = !s, f = s ? this.createFieldAccessors(e, "values") : [], p = c ?? s ?? [], m = e.default ?? null, h = !1, g = -1, _ = [], v = [], y, b = !1, x, S = null, C, w = u[0], T = n.isForeignDataReady ?? (() => !0);
		n.isForeignDataReady && (this.areDataDependenciesAvailable = () => t.completed && !t.disposed && T());
		let E = n.requestForeignData ?? (() => void 0), D = n.prepareBatch ?? (() => void 0), O = !!n.acceptsDatum, k = n.acceptsDatum ?? (() => !0), ee = a.length === 1 ? (e) => S.get(w(e)) : (e) => {
			let t = S;
			for (let n = 0; n < u.length - 1; n++) {
				let r = t.get(u[n](e));
				if (!r) return;
				t = r;
			}
			return t.get(u.at(-1)(e));
		}, A = (n) => {
			if (D(), t && g !== t.dataRevision && (S = null), S) {
				this.consumeDataDependencies();
				return;
			}
			if (!n && !t.completed) throw Error("Lookup table must be loaded before primary data.");
			let r = n ?? t.getData();
			if (S = gp(r, l, e.key), d) {
				let t = _p(r[Symbol.iterator]().next().value, a);
				p = t, f = t.map((t) => this.createFieldAccessor(e, "values", { defaultValue: t }));
			}
			C = vp(p, f, m), t && (g = t.dataRevision), this.consumeDataDependencies();
		}, te = (e) => {
			let t = x(e), n = ee(e);
			C(t, n), this._propagate(t);
		}, ne = O ? (e) => {
			k(e) && te(e);
		} : te, j = (e) => {
			if (!T() && (E(), !T())) h = !0, this.consumeDataDependencies(), this.handle = hp;
			else {
				if (A(), !(i && d)) {
					for (let t of p) if (Object.hasOwn(e, t)) throw Error(`Lookup output field "${t}" already exists in primary data.`);
				}
				x = cp(e), this.handle = ne, ne(e);
			}
		}, re = () => {
			A(_), this.handle = j, x = void 0, b && N(y);
			let e = pu(fu(_, v), (e) => {
				x = void 0, this.handle = j, N(e);
			}, (e) => this.handle(e));
			for (let t of _) e(t);
			_ = [], v = [], y = void 0, b = !1, S = null, d && (f = [], p = []), this.handle = M;
		};
		function M(e) {
			_.push(e);
		}
		let ie = this.reset.bind(this);
		this.reset = () => {
			ie(), h = !1, x = void 0, i ? (_ = [], v = [], y = void 0, b = !1, S = null, d && (f = [], p = []), this.handle = M) : this.handle = j;
		};
		let N = this.beginBatch.bind(this);
		this.beginBatch = (e) => {
			if (i) {
				if (e.type == "file" && y?.type == "facet") {
					v.push({
						index: _.length,
						batch: e
					});
					return;
				}
				(b || _.length > 0) && re(), y = e, b = !0;
			} else T() || E(), T() ? (A(), this.handle = j) : (h = !0, this.consumeDataDependencies(), this.handle = hp), N(e);
		};
		let ae = this.complete.bind(this);
		this.complete = () => {
			i && (b || _.length > 0) && re(), t && !h && !T() && E(), ae();
		}, this.handle = i ? M : j;
	}
};
function mp(e) {
	return e.type == "lookup" && "source" in e.from && e.from.source == "input";
}
function hp(e) {}
function gp(e, t, n) {
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
function _p(e, t) {
	if (!e) return [];
	let n = Object.keys(e);
	if (t.filter((e) => !n.includes(e)).length) throw Error("Omitting \"values\" requires top-level lookup key fields.");
	return n.filter((e) => !t.includes(e));
}
function vp(e, t, n) {
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
function yp(e) {
	return e.type == "lookup" && !mp(e) || e.type == "coordinateLookup" || e.type == "cross";
}
function bp(e) {
	if (e.type == "lookup") {
		let t = e;
		if (mp(t)) return;
		if ("lazy" in t.from) throw Error("Lookup tables cannot use lazy data sources.");
		return {
			data: t.from,
			transforms: []
		};
	}
	if (e.type == "coordinateLookup") {
		let t = e;
		return {
			data: t.from.data,
			transforms: t.from.transform ?? []
		};
	}
	if (e.type == "cross") {
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
var xp = {
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
}, Sp = /([0-9]+)([MIDNSHP=X])/g;
function Cp(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(e)}`);
	if (e === "*") return [];
	let t = [], n = 0, r;
	for (Sp.lastIndex = 0; (r = Sp.exec(e)) !== null;) {
		if (r.index !== n) throw Error(`Malformed CIGAR string: ${e}`);
		let i = Number(r[1]);
		if (i <= 0) throw Error(`Malformed CIGAR string: ${e}`);
		t.push({
			op: r[2],
			length: i
		}), n = Sp.lastIndex;
	}
	if (n !== e.length) throw Error(`Malformed CIGAR string: ${e}`);
	return t;
}
function* wp(e, t) {
	if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
	let n = t, r = 0;
	for (let { op: t, length: i } of Cp(e)) {
		let e = xp[t], a = n, o = r;
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
var Tp = /[0-9]/, Ep = /[A-Z]/;
function Dp(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed MD tag: ${JSON.stringify(e)}`);
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		if (!Tp.test(e[n])) throw Error(`Malformed MD tag: ${e}`);
		let i = n;
		for (; n < e.length && Tp.test(e[n]);) n++;
		if (r += Number(e.slice(i, n)), n < e.length) {
			if (e[n] == "^") {
				n++;
				let i = n;
				for (; n < e.length && Ep.test(e[n]);) n++;
				if (n == i) throw Error(`Malformed MD tag: ${e}`);
				let a = e.slice(i, n);
				t.push({
					type: "deletion",
					refOffset: r,
					refBases: a
				}), r += a.length;
			} else if (Ep.test(e[n])) t.push({
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
var Op = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "start", { defaultValue: "start" }), r = this.createFieldAccessor(e, "cigar", { defaultValue: "cigar" }), i = this.createFieldAccessor(e, "sequence", { defaultValue: "seq" }), a = this.createFieldAccessor(e, "quality", { defaultValue: "qual" }), o = this.createFieldAccessor(e, "md", { defaultValue: "md" }), s = lp({ copyFields: e.copyFields });
		this.handle = (e) => {
			let t = r(e);
			if (typeof t != "string" || t.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(t)}`);
			if (t == "*") return;
			let c = n(e);
			if (!Number.isFinite(c)) throw Error(`Invalid CIGAR start coordinate: ${c}`);
			let l = o(e);
			if (typeof l != "string" || l.length == 0) throw Error("alignmentMismatches requires the MD tag");
			let u = new Map(Dp(l).filter((e) => e.type == "mismatch").map((e) => [e.refOffset, e.refBase])), d = kp(a, e);
			for (let n of wp(t, c)) if (n.cigarOp == "M") for (let [t, r] of u) {
				let a = c + t;
				if (a >= n.cigarStart && a < n.cigarEnd) {
					let t = n.readStart + (a - n.cigarStart);
					this.#e(e, i, d, a, t, r, s);
				}
			}
			else if (n.cigarOp == "X") for (let t = 0; t < n.cigarLength; t++) {
				let r = n.cigarStart + t, a = r - c, o = u.get(a);
				if (o == null) throw Error("MD tag does not provide a reference base for X operation");
				this.#e(e, i, d, r, n.readStart + t, o, s);
			}
		}, this.beginBatch = (e) => {
			s.reset(), super.beginBatch(e);
		};
	}
	#e(e, t, n, r, i, a, o) {
		let s = t(e);
		if (typeof s != "string") throw Error("alignmentMismatches requires read sequence");
		let c = s[i];
		if (typeof c != "string") throw Error(`Read sequence is too short for mismatch offset: ${i}`);
		let l = Object.assign(o(e), {
			mismatchStart: r,
			mismatchEnd: r + 1,
			readOffset: i,
			base: c,
			refBase: a
		});
		Array.isArray(n) && n[i] != null && (l.baseQuality = n[i]), this._propagate(l);
	}
};
function kp(e, t) {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Error && e.message.startsWith("Invalid field")) return;
		throw e;
	}
}
//#endregion
//#region ../core/src/data/transforms/coordinateLookup.js
var Ap = class extends pp {
	constructor(e, t, n, r) {
		let i = e.channel ?? "x";
		if (!(n instanceof $a)) throw Error("Coordinate lookup requires a single-axis lazy side data source.");
		if (n.channel !== i || n.scaleResolution !== r.getScaleResolution(i)) throw Error("Coordinate lookup data must use the same positional scale and channel.");
		let a, o = 0, s = 0;
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
		}, r), a = jp(e, n, this);
	}
};
function jp(e, t, n) {
	let r = e.fields ?? e.key, i = n.createFieldAccessors(e, e.fields == null ? "key" : "fields");
	if (typeof r == "string") {
		let e = i[0];
		return (t) => +e(t);
	}
	if (r.length == 2) {
		let e = t.scaleResolution.getScale(), n = "genome" in e ? e.genome() : void 0;
		if (!n) throw Error("A chrom/pos coordinate lookup requires a locus scale.");
		let [r, a] = i;
		return (e) => n.toContinuous(r(e), +a(e));
	}
	throw Error("Coordinate lookup requires one continuous field or chrom/pos fields.");
}
//#endregion
//#region ../core/src/data/transforms/cross.js
var Mp = class extends m {
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
		this.#a ||= (this.#o(), this.#t.length && (this.#r = Np(fp(e), this.#n)), this.consumeDataDependencies(), !0);
		for (let t of this.#t) this._propagate(this.#r(e, t));
	}
	#o() {
		if (this.#i !== this.#e.dataRevision && (this.#t = void 0), this.#t) return;
		if (!this.#e.completed) throw Error("Cross foreign data must be loaded before primary data.");
		this.#t = Array.from(this.#e.getData()), this.#n = this.#t.length === 0 ? [] : fp(this.#t[0]);
		let e = new Set(this.#n);
		for (let t = 1; t < this.#t.length; t++) {
			let n = fp(this.#t[t]);
			if (n.length !== e.size || n.some((t) => !e.has(t))) throw Error("Cross foreign data must have homogeneous fields.");
		}
		this.#i = this.#e.dataRevision;
	}
};
function Np(e, t) {
	let n = new Set(e), r = t.filter((e) => n.has(e));
	if (r.length > 0) throw Error(`Cross fields must be unique. Duplicate fields: ${JSON.stringify(r)}.`);
	let i = [...e.map((e) => Pp("primary", e)), ...t.map((e) => Pp("foreign", e))];
	return Function("primary", "foreign", `return { ${i.join(",\n")} };`);
}
function Pp(e, t) {
	let n = JSON.stringify(t);
	return `${n}: ${e}[${n}]`;
}
//#endregion
//#region ../core/src/data/transforms/coverage.js
var Fp = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.startAccessor = this.createFieldAccessor(e, "start"), this.endAccessor = this.createFieldAccessor(e, "end"), this.chromAccessor = e.chrom ? this.createFieldAccessor(e, "chrom") : (e) => void 0, this.weightAccessor = e.weight ? this.createFieldAccessor(e, "weight") : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new Nn();
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
			e.type == "file" && this.inFacet || (h(), u = 0, c = null, super.beginBatch(e));
		};
	}
};
//#endregion
//#region ../core/src/data/transforms/displace1dSolver.js
function Ip(e, t, n, r = []) {
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
var Lp = class extends m {
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
		super(e, t), this.as = e.as ?? "displacement", this.positionAccessor = this.createFieldAccessor(e, "pos"), this.length = typeof e.length == "number" ? e.length : 0;
		let n;
		if (typeof e.length == "number") {
			let t = e.length;
			n = () => t;
		} else n = F(e.length) ? () => this.length : this.createFieldAccessor(e, "length");
		this.lengthAccessor = n, this.extent = F(e.extent) ? void 0 : e.extent, this.#e = e.extent ? [0, 0] : void 0, this.positionFactor = F(e.positionFactor) ? 1 : e.positionFactor ?? 1, this.#t = !(F(e.length) || F(e.positionFactor) || F(e.extent));
		let r = () => {
			this.#t && this.#s() && this.completed && this.repropagate();
		};
		this.#n = this.watchExprRef(F(e.length) ? e.length : this.length, r), this.#r = this.watchExprRef(e.positionFactor ?? 1, r), this.#i = this.watchExprRef(e.extent, r), this.#o(this.length, this.positionFactor, this.extent);
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
		let r = Ip(t, n, this.#e);
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
}, Rp = [
	"sourceId",
	"targetId",
	"sourceHeight",
	"targetHeight",
	"sourceIndex",
	"targetIndex",
	"sourceOffset",
	"targetOffset"
], zp = class extends m {
	#e = [];
	#t = [];
	#n = [];
	#r = 0;
	#i = () => void 0;
	get behavior() {
		return 1;
	}
	get createsNewIdentity() {
		return !0;
	}
	constructor(e, t) {
		if (super(e, t), this.keyAccessor = this.createFieldAccessor(e, "key"), this.parentAccessor = this.createFieldAccessor(e, "parentKey"), this.heightAccessor = this.createFieldAccessor(e, "height"), this.params = e, this.categorical = e.leaf !== void 0, this.categorical) {
			if (e.leafIndex !== void 0 || e.siblingOrder !== void 0 == (e.leafOrder !== void 0)) throw Error("Categorical dendrograms require exactly one of siblingOrder and leafOrder, without leafIndex.");
		} else if (e.domainParam !== void 0 || e.siblingOrder !== void 0 || e.leafOrder !== void 0) throw Error("Numeric dendrograms require leafIndex without categorical ordering or publication.");
		if (this.leafAccessor = this.createFieldAccessor(e, this.categorical ? "leaf" : "leafIndex"), this.siblingOrderAccessor = e.siblingOrder === void 0 ? void 0 : this.createFieldAccessor(e, "siblingOrder"), Array.isArray(e.leafOrder) && (this.#i = () => e.leafOrder), e.domainParam !== void 0) {
			if (this.output = this.paramRuntime.resolveOutput(e.domainParam), this.output.producer) throw Error("Duplicate dendrogram output producer.");
			this.output.producer = this;
		}
		if (this.as = e.as ?? Rp.map((e, t) => this.categorical && (t === 4 || t === 5) ? e.replace("Index", "Value") : e), this.as.length !== 8 || new Set(this.as).size !== 8 || this.as.some((e) => typeof e != "string" || !e || e === "__uniqueId")) throw Error("Dendrogram as must contain eight distinct, nonempty field names, excluding " + be + ".");
	}
	initialize() {
		F(this.params.leafOrder) && (this.#i = this.watchSnapshottedExpression(this.params.leafOrder));
	}
	reset() {
		super.reset(), this.#r = 0, this.output && (this.output.candidate = void 0), this.#e = [], this.#t = [];
	}
	handle(e) {
		this.#e.push(e);
	}
	beginBatch(e) {
		if (this.output && e.type === "facet") throw Error("Publishing dendrograms do not support facets.");
		e.type === "file" ? (this.inFacet || this.#a(), this.#t.push({
			index: this.#e.length,
			batch: e
		})) : (this.#a(), super.beginBatch(e));
	}
	complete() {
		this.#a(), super.complete(), this.output && this.#r === 0 && (this.output.candidate = Object.freeze([]));
	}
	#a() {
		let e = this.#e, t = fu(e, this.#t), n = this.#o(e);
		if (this.output && n.length && ++this.#r > 1) throw Error("Publishing dendrograms require one tree per completed flow.");
		let r = (e) => this.categorical ? this.#n[Math.floor(e)] : Math.floor(e), i = pu((e) => t(e.datum), (e) => super.beginBatch(e), (e) => {
			let t = e, n = t.parent, i = { ...t.datum };
			delete i[be], i[this.as[0]] = n.key, i[this.as[1]] = t.key, i[this.as[2]] = n.height, i[this.as[3]] = t.height, i[this.as[4]] = r(n.position), i[this.as[5]] = r(t.position), i[this.as[6]] = n.position % 1, i[this.as[7]] = t.position % 1, this._propagate(i);
		});
		for (let e of n) e.parent && i(e);
		this.output && n.length && (this.output.candidate = Object.freeze(this.#n)), this.#e = [], this.#t = [];
	}
	#o(e) {
		this.#n = [];
		let t = /* @__PURE__ */ new Map(), n = e.map((e) => {
			let n = this.keyAccessor(e);
			if (!Vp(n) || t.has(n)) throw Error("Invalid or duplicate dendrogram key: " + String(n));
			let r = this.heightAccessor(e);
			if (typeof r != "number" || !Number.isFinite(r) || r < 0) throw Error("Invalid dendrogram height for node " + String(n));
			let i = {
				key: n,
				datum: e,
				parent: null,
				children: [],
				height: r,
				position: 0,
				firstLeaf: 0,
				lastLeaf: 0,
				leafCount: 0
			};
			return t.set(n, i), i;
		});
		if (!n.length) return n;
		let r = [];
		for (let e of n) {
			let n = this.parentAccessor(e.datum);
			if (n === null) r.push(e);
			else {
				let r = t.get(n);
				if (!Vp(n) || !r) throw Error("Missing dendrogram parent for node " + String(e.key));
				e.parent = r, r.children.push(e);
			}
		}
		if (r.length !== 1) throw Error("Dendrogram requires exactly one root; found " + r.length);
		if (this.siblingOrderAccessor) for (let e of n) {
			let t = /* @__PURE__ */ new Set();
			for (let n of e.children) {
				let e = this.siblingOrderAccessor(n.datum);
				if (typeof e != "number" || !Number.isFinite(e) || t.has(e)) throw Error("Invalid or duplicate dendrogram sibling order at node " + String(n.key));
				t.add(e);
			}
			e.children.sort((e, t) => this.siblingOrderAccessor(e.datum) - this.siblingOrderAccessor(t.datum));
		}
		let i = [], a = [r[0]];
		for (; a.length;) {
			let e = a.pop();
			i.push(e);
			for (let t = e.children.length - 1; t >= 0; t--) a.push(e.children[t]);
		}
		if (i.length !== n.length) {
			let e = new Set(i), t = n.find((t) => !e.has(t));
			throw Error("Dendrogram cycle or disconnected node: " + String(t.key));
		}
		let o = i.filter((e) => !e.children.length);
		this.categorical && this.#s(o);
		for (let e of o) {
			let t = this.categorical ? e.position : this.leafAccessor(e.datum);
			if (!Number.isSafeInteger(t) || t < 0 || t >= 2 ** 44) throw Error("Invalid dendrogram leaf index for node " + String(e.key));
			e.position = t;
		}
		o.sort((e, t) => e.position - t.position), o.forEach((e, t) => {
			if (t > 0 && e.position === o[t - 1].position) throw Error("Duplicate dendrogram leaf index: " + e.position);
			e.firstLeaf = e.lastLeaf = t, e.leafCount = 1;
		});
		for (let e of i.reverse()) {
			if (!e.children.length) continue;
			let t = Infinity, n = -Infinity;
			e.firstLeaf = Infinity, e.lastLeaf = -Infinity;
			for (let r of e.children) t = Math.min(t, r.position), n = Math.max(n, r.position), e.firstLeaf = Math.min(e.firstLeaf, r.firstLeaf), e.lastLeaf = Math.max(e.lastLeaf, r.lastLeaf), e.leafCount += r.leafCount;
			if (e.lastLeaf - e.firstLeaf + 1 !== e.leafCount) throw Error("Incompatible dendrogram leaf order at node " + String(e.key));
			e.position = (t + n) / 2;
		}
		return n;
	}
	#s(e) {
		let t = e.map((e) => this.leafAccessor(e.datum));
		Bp(t);
		let n = this.siblingOrderAccessor ? t : this.#i();
		Bp(n), this.#n = Array.from(n);
		let r = new Map(this.#n.map((e, t) => [e, t]));
		for (let n = 0; n < e.length; n++) {
			let i = r.get(t[n]);
			if (i === void 0) throw Error("Dendrogram leafOrder is missing category " + String(t[n]));
			e[n].position = i;
		}
	}
};
function Bp(e) {
	if (!Array.isArray(e) || e.some((e) => !(typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e))) || new Set(e).size !== e.length) throw Error("Dendrogram categories must be unique strings, finite numbers, or booleans.");
}
function Vp(e) {
	return typeof e == "string" || typeof e == "number" && Number.isFinite(e);
}
//#endregion
//#region ../core/src/data/transforms/displace2dConstraintSolver.js
var Hp = .02, Up = 2, Wp = .9, Gp = 1.5, Kp = 32, qp = 32, Jp = 128, Yp = 8, Xp = 1, Zp = 40, Qp = Math.PI * (3 - Math.sqrt(5)), $p = .01, em = .05, tm = 4, nm = 800, rm = class {
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
		this.items = e, this.xExtent = t, this.yExtent = n, this.#e = new Float64Array(e.length), this.#t = new Float64Array(e.length), this.#n = Float64Array.from(e, (t) => fm(t.priority, e.length));
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
			for (let a = 0; a < Kp; a++) {
				let o = a / Kp, s = n.anchorX + r * o, c = n.anchorY + i * o;
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
			if (n.width != 0 && n.height != 0) {
				for (let r = t + 1; r < e.length; r++) {
					let i = e[r];
					if (i.width == 0 || i.height == 0) continue;
					let a = am(n.x, n.y, n.width + Up, n.height + Up, i.x, i.y, i.width + Up, i.height + Up, t, r);
					if (!a) continue;
					let o = this.#n[t], s = this.#n[r], c = o + s;
					this.#o(t, a.x * o * Wp / c, a.y * o * Wp / c), this.#o(r, -a.x * s * Wp / c, -a.y * s * Wp / c);
				}
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.anchorWidth == 0 || i.anchorHeight == 0) continue;
					let a = am(n.x, n.y, n.width + Up, n.height + Up, i.anchorX, i.anchorY, i.anchorWidth + Up, i.anchorHeight + Up, t, e.length + r);
					a && this.#o(t, a.x * Wp, a.y * Wp);
				}
				this.#s(t);
			}
		}
		let t = 0;
		for (let n = 0; n < e.length; n++) this.#s(n), t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		let n = (this.#r + 1) % qp == 0, r = t > $p && !n || om(e);
		if (r && n && this.#u()) {
			r = om(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		if (!r && t <= $p && this.#d()) {
			r = om(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		return this.#r++, !r && t <= $p ? this.#i++ : this.#i = 0, (this.#i >= tm || this.#r >= nm) && (this.#a = !1), t > 0;
	}
	solve() {
		for (; this.#a;) this.step();
	}
	#o(e, t, n) {
		let r = this.items[e];
		r.x = pm(r.x + t, this.#e[e] - Gp, this.#e[e] + Gp), r.y = pm(r.y + n, this.#t[e] - Gp, this.#t[e] + Gp);
	}
	#s(e) {
		let t = this.items[e];
		this.xExtent && t.width <= this.xExtent[1] - this.xExtent[0] && this.#o(e, pm(t.x, this.xExtent[0] + t.width / 2, this.xExtent[1] - t.width / 2) - t.x, 0), this.yExtent && t.height <= this.yExtent[1] - this.yExtent[0] && this.#o(e, 0, pm(t.y, this.yExtent[0] + t.height / 2, this.yExtent[1] - t.height / 2) - t.y);
	}
	#c(e) {
		let t = this.items[e], n = pm(t.x + (t.anchorX - t.x) * Hp, this.#e[e] - Gp, this.#e[e] + Gp), r = pm(t.y + (t.anchorY - t.y) * Hp, this.#t[e] - Gp, this.#t[e] + Gp);
		(n != t.x || r != t.y) && this.#l(e, n, r) && (t.x = n, t.y = r);
	}
	#l(e, t, n) {
		let r = this.items[e];
		if (!lm(t, r.width, this.xExtent) || !lm(n, r.height, this.yExtent)) return !1;
		for (let i = 0; i < this.items.length; i++) {
			let a = this.items[i];
			if (i != e && cm(t, n, r.width, r.height, a.x, a.y, a.width, a.height) || cm(t, n, r.width, r.height, a.anchorX, a.anchorY, a.anchorWidth, a.anchorHeight)) return !1;
		}
		return !0;
	}
	#u() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t];
			if (n.width == 0 || n.height == 0 || this.#l(t, n.x, n.y)) continue;
			let r = Math.max(4, Math.sqrt(n.width * n.height) / 4), i = dm(t, this.items.length) / 2 ** 32 * Math.PI * 2;
			if (this.#f(t, r, i, Infinity, !0) && e++, e >= Yp) break;
		}
		return e > 0;
	}
	#d() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t], r = Math.hypot(n.x - n.anchorX, n.y - n.anchorY);
			if (n.width == 0 || n.height == 0 || r <= Xp) continue;
			let i = Math.max(4, Math.min(n.width, n.height) / 3), a = dm(t, this.items.length + 1) / 2 ** 32 * Math.PI * 2, o = r + im(this.items, t, n.x, n.y);
			if (this.#f(t, i, a, o, !1) && e++, e >= Yp) break;
		}
		return e > 0;
	}
	#f(e, t, n, r, i) {
		let a = this.items[e], o = a.x, s = a.y;
		for (let c = 0; c < Jp; c++) {
			let l = t * Math.sqrt(c + 1) * (i ? 1 + c / 508 : 1);
			if (l + Xp >= r) break;
			let u = n + c * Qp, d = a.anchorX + Math.cos(u) * l, f = a.anchorY + Math.sin(u) * l;
			if (this.#l(e, d, f)) {
				let t = l + im(this.items, e, d, f);
				t + Xp < r && (r = t, o = d, s = f);
			}
		}
		return o == a.x && s == a.y ? !1 : (a.x = o, a.y = s, !0);
	}
};
function im(e, t, n, r) {
	let i = e[t], a = n - i.anchorX, o = r - i.anchorY, s = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (n == t || r.width == 0 || r.height == 0) continue;
		let c = 2 / r.width, l = 2 / r.height, u = (i.anchorX - r.x) * c, d = (i.anchorY - r.y) * l, f = a * c, p = o * l, m = f * f + p * p, h = pm(-(u * f + d * p) / m, 0, 1), g = u + h * f, _ = d + h * p, v = Math.max(0, 1 - (g * g + _ * _) / 2);
		s = Math.max(s, Zp * v * v);
	}
	return s;
}
function am(e, t, n, r, i, a, o, s, c, l) {
	let u = e - i, d = t - a, f = (n + o) / 2 - Math.abs(u), p = (r + s) / 2 - Math.abs(d);
	if (f > 0 && p > 0) {
		if (u == 0 && d == 0) {
			let e = (r + s) / (n + o + r + s);
			return dm(c, l) / 2 ** 32 < e ? {
				x: f * um(u, c, l),
				y: 0
			} : {
				x: 0,
				y: p * um(d, c, l)
			};
		}
		return f < p || f == p && dm(c, l) % 2 == 0 ? {
			x: f * um(u, c, l),
			y: 0
		} : {
			x: 0,
			y: p * um(d, c, l)
		};
	}
}
function om(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n.width != 0 && n.height != 0) {
			for (let r = t + 1; r < e.length; r++) if (sm(n, e[r]) > em) return !0;
			for (let t of e) {
				if (t.anchorWidth == 0 || t.anchorHeight == 0) continue;
				let e = (n.width + t.anchorWidth) / 2 + Up - Math.abs(n.x - t.anchorX), r = (n.height + t.anchorHeight) / 2 + Up - Math.abs(n.y - t.anchorY);
				if (e > em && r > em) return !0;
			}
		}
	}
	return !1;
}
function sm(e, t) {
	if (t.width == 0 || t.height == 0) return 0;
	let n = (e.width + t.width) / 2 + Up - Math.abs(e.x - t.x), r = (e.height + t.height) / 2 + Up - Math.abs(e.y - t.y);
	return n > 0 && r > 0 ? Math.min(n, r) : 0;
}
function cm(e, t, n, r, i, a, o, s) {
	return n > 0 && r > 0 && o > 0 && s > 0 && Math.abs(e - i) * 2 < n + o + 4 && Math.abs(t - a) * 2 < r + s + 4;
}
function lm(e, t, n) {
	return !n || t > n[1] - n[0] || e - t / 2 >= n[0] && e + t / 2 <= n[1];
}
function um(e, t, n) {
	return e == 0 ? dm(t, n) & 2 ? -1 : 1 : Math.sign(e);
}
function dm(e, t) {
	return (Math.imul(e + 1, 2654435761) ^ Math.imul(t + 1, 2246822507)) >>> 0;
}
function fm(e, t) {
	return t <= 1 ? 1 : .2 + .8 * e / (t - 1);
}
function pm(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/data/transforms/displace2d.js
var mm = 4, hm = 2, gm = 64, _m = 120, vm = 600, ym = .05, bm = 1e3 / 60, xm = class extends m {
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
	#b = () => _m;
	get behavior() {
		return 6;
	}
	constructor(e, t) {
		if (super(e, t), this.#d = t?.context?.animator, this.#f = e.as ?? ["xDisplacement", "yDisplacement"], e.key && this.#f.includes(e.key)) throw Error("displace2d output fields must preserve the key.");
		this.#p = this.createFieldAccessor(e, "x"), this.#m = this.createFieldAccessor(e, "y"), this.#h = e.key ? this.createFieldAccessor(e, "key") : void 0, this.#c = e.key ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new WeakMap();
		let n = {
			width: e.width,
			height: e.height,
			anchorWidth: e.anchorWidth ?? 0,
			anchorHeight: e.anchorHeight ?? 0
		}, r = Object.values(n).some(F) ? Je(this.paramRuntime, n, () => {
			this.#e && this.completed && this.#I();
		}, (e) => this.registerDisposer(e)) : n, i = (t, n) => typeof e[t] == "string" ? this.createFieldAccessor(e, t) : n;
		this.#g = i("width", () => r.width), this.#_ = i("height", () => r.height), this.#v = i("anchorWidth", () => r.anchorWidth), this.#y = i("anchorHeight", () => r.anchorHeight);
		let a = e.animationHalfLife ?? _m;
		F(a) || Cm(a), this.#b = this.watchExprRef(a, () => Cm(this.#b()));
		let o = t;
		if (this.#t = o.getScaleResolution("x"), this.#n = o.getScaleResolution("y"), !this.#t || !this.#n) throw Error("displace2d requires x and y scales.");
		let s = () => this.#I();
		for (let e of [this.#t, this.#n]) this.registerDisposer(e.getMappingRef().subscribe(s));
		this.registerDisposer(o._addBroadcastHandler("layoutComputed", () => this.#I())), this.registerDisposer(() => {
			this.#L(), this.#E();
		});
	}
	complete() {
		let e = !this.#e;
		if (e || !this.#N()) {
			for (let e of this.#r) e[this.#f[0]] = 0, e[this.#f[1]] = 0;
			this.#w(), e && (this.#e = !0, this.#I());
		} else this.#S(), this.#w(), this.#T();
	}
	#x(e, t) {
		let n = this.#h, r = this.#t.getScale(), i = this.#n.getScale(), a = this.#t.getAxisLength(), o = this.#n.getAxisLength(), s = vr(r), c = vr(i), l = [0, a], u = [0, o], d = [], f = this.#d && this.#d.transitionsEnabled !== !1, p = !1, m = !1;
		for (let l = 0; l < e.length; l++) {
			let u = e[l], h = n ? n(u) : u;
			if (n && (Sm(h), t.has(h))) throw Error(`displace2d key must be unique: ${h}`);
			let g = f ? this.#c.get(h) : void 0;
			n && t.set(h, g);
			let _ = (r(this.#p(u)) + s) * a, v = (1 - i(this.#m(u)) - c) * o;
			if (!(_ >= 0 && _ <= a && v >= 0 && v <= o)) u[this.#f[0]] = 0, u[this.#f[1]] = 0;
			else {
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
		}
		if (d.length == 0) return;
		let h = new rm(d, l, u);
		if (f) {
			if (m && h.compactTowardAnchors(), p) for (let e = 0; e < hm; e++) h.step();
		} else h.solve();
		for (let e of d) e.datum[this.#f[0]] = (f ? e.displayX : e.x) - e.anchorX, e.datum[this.#f[1]] = (f ? e.displayY : e.y) - e.anchorY;
		return f ? h : void 0;
	}
	#S() {
		this.#s = [];
		let e = this.#h ? /* @__PURE__ */ new Map() : this.#c, t = 0;
		for (let { index: n, flowBatch: r } of this.#i) if (r.type == "facet") {
			if (n > t) {
				let r = this.#x(this.#r.slice(t, n), e);
				r && this.#s.push(r);
			}
			t = n;
		}
		if (t < this.#r.length) {
			let n = this.#x(t == 0 ? this.#r : this.#r.slice(t), e);
			n && this.#s.push(n);
		}
		this.#c = e;
	}
	#C(e, t) {
		let n = 0;
		for (let { index: r, flowBatch: i } of t) {
			for (; n < r;) this._propagate(e[n++]);
			super.beginBatch(i);
		}
		for (; n < e.length;) this._propagate(e[n++]);
	}
	#w() {
		this.#C(this.#r, this.#i), super.complete(), this.#a = this.#r.slice(), this.#o = this.#i.slice(), this.#M();
	}
	#T() {
		this.#s.length == 0 ? this.#u = void 0 : !this.#d || this.#d.transitionsEnabled === !1 || this.#l || (this.#l = !0, this.#d.requestTransition(this.#D));
	}
	#E() {
		this.#d?.cancelTransition(this.#D), this.#l = !1;
	}
	#D = (e) => {
		if (this.#l = !1, this.disposed) return;
		let t = Math.min(50, Math.max(1, this.#u === void 0 ? bm : e - this.#u));
		this.#u = e;
		let n = performance.now(), r = !1;
		for (let e = 0; e < gm && (r = this.#O(), !(!r || performance.now() - n >= mm)); e++);
		let i = this.#k(t);
		i != 0 && (this.#A(), this.#j()), r || i == 2 ? this.#T() : this.#u = void 0;
	};
	#O() {
		let e = !1;
		for (let t of this.#s) t.active && t.step(), e ||= t.active;
		return e;
	}
	#k(e) {
		let t = Cm(this.#b()), n = 1 - 2 ** (-e / t), r = vm * e / 1e3, i = !1, a = !1;
		for (let e of this.#s) for (let t of e.items) {
			let e = t, o = t.x - e.displayX, s = t.y - e.displayY;
			o != 0 && (e.displayX += Math.abs(o) <= ym ? o : wm(o * n, -r, r), i = !0), s != 0 && (e.displayY += Math.abs(s) <= ym ? s : wm(s * n, -r, r), i = !0), a ||= Math.abs(t.x - e.displayX) > ym || Math.abs(t.y - e.displayY) > ym;
		}
		return i ? a ? 2 : 1 : 0;
	}
	#A() {
		for (let e of this.#s) for (let t of e.items) {
			let e = t;
			t.datum[this.#f[0]] = e.displayX - t.anchorX, t.datum[this.#f[1]] = e.displayY - t.anchorY;
		}
	}
	#j() {
		for (let e of this.children) e.reset();
		this.#C(this.#a, this.#o);
		for (let e of this.children) e.complete();
	}
	#M() {
		this.#r.length = 0, this.#i.length = 0;
	}
	beginBatch(e) {
		this.#i.push({
			index: this.#r.length,
			flowBatch: e
		});
	}
	#N() {
		return this.#t.getAxisLength() > 0 && this.#n.getAxisLength() > 0;
	}
	#P = () => {
		this.#F() && this.requestRepropagate();
	};
	#F() {
		return this.#e && !this.disposed && this.completed && this.#N();
	}
	#I() {
		this.#L(), this.#F() && this.paramRuntime.requestUpdate(this.#P);
	}
	#L() {
		this.paramRuntimeProvider?.paramRuntime?.cancelUpdate(this.#P);
	}
	reset() {
		this.#E(), super.reset(), this.#M();
	}
	handle(e) {
		this.#r.push(e);
	}
};
function Sm(e) {
	if (typeof e != "string" && !(typeof e == "number" && Number.isFinite(e))) throw Error("displace2d keys must be strings or finite numbers.");
}
function Cm(e) {
	if (!Number.isFinite(e) || e <= 0) throw Error("displace2d animationHalfLife must be positive and finite.");
	return e;
}
function wm(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/reservationMap.js
var Tm = class {
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
			}
			return n;
		}
		return -1;
	}
	reserve(e, t) {
		if (t - e <= 0) throw Error("Cannot reserve an empty or negative-size slot!");
		if (this.n + 1 > this.lowerLimits.length) return !1;
		let n = this._findSlot(e, t);
		if (n < 0) return !1;
		let r = this.n++, i = this.n++;
		return this.lowerLimits[r] = this.lowerLimits[n], this.upperLimits[r] = e, this.lowerLimits[i] = t, this.upperLimits[i] = this.upperLimits[n], this.lowerChildren[n] = r, this.upperChildren[n] = i, !0;
	}
}, Em = class extends m {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = this.createFieldAccessor(e, "pos"), this.endPosAccessor = this.createFieldAccessor(e, e.pos2 == null ? "pos" : "pos2"), this.startPosBisector = jt(this.startPosAccessor), this.endPosBisector = jt(this.endPosAccessor), this.scoreAccessor = this.createFieldAccessor(e, "score"), this.widthAccessor = this.createFieldAccessor(e, "width"), this.laneAccessor = this.params.lane ? this.createFieldAccessor(e, "lane") : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
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
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new Tm(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = vr(e), n = this.resolution.getAxisLength();
		if (!n) return;
		let r = "gapMapping" in e && e.gapMapping(n), i = r && this.params.pos2 != null;
		for (let e of this.reservationMaps.values()) e.reset();
		let a = e.domain(), o = on(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, a[0]), this.startPosBisector.right(this._data, a[1]));
		for (let a of o) {
			let o = (i ? r.position(this.startPosAccessor(a)) : e(this.startPosAccessor(a)) + t) * n, s = (i ? r.position(this.endPosAccessor(a), 0, !0) : e(this.endPosAccessor(a)) + t) * n, c = s - o, l = this.widthAccessor(a) + this.padding * 2, u = (o + s) / 2, d = Math.max(0, (c - l) / 2);
			if (d > 0) {
				let e = Math.max(0, l / 2 - u);
				u += Math.min(e, d);
				let t = Math.max(0, l / 2 + u - n);
				u -= Math.min(t, d);
			}
			if (this.reservationMaps.get(this.laneAccessor(a)).reserve(u - l / 2, u + l / 2)) {
				if (this.params.asMidpoint) {
					let r = Object.assign({}, a);
					r[this.params.asMidpoint] = e.invert(u / n - (i ? 0 : t)), this._propagate(r);
				} else this._propagate(a);
			}
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
function Dm(e, t, n, r) {
	if (e.length < 3 || !Am(e, t, r)) return e;
	let i = e;
	do
		switch (n) {
			case "parity":
				i = Om(i);
				break;
			case "greedy":
				i = km(i, t, r);
				break;
			default: throw Error("Invalid axis label overlap method: " + n);
		}
	while (i.length >= 3 && Am(i, t, r));
	let a = e.at(-1);
	return i.length < 3 && i.at(-1) !== a && (i.length > 1 && i.pop(), i.push(a)), i;
}
function Om(e) {
	return e.filter((e, t) => t % 2 == 0);
}
function km(e, t, n) {
	let r = [], i;
	for (let a of e) {
		let e = t(a);
		(i == null || !jm(i, e, n)) && (r.push(a), i = e);
	}
	return r;
}
function Am(e, t, n) {
	let r = t(e[0]);
	for (let i = 1; i < e.length; i++) {
		let a = t(e[i]);
		if (jm(r, a, n)) return !0;
		r = a;
	}
	return !1;
}
function jm(e, t, n) {
	return n > Math.max(t[0] - e[1], e[0] - t[1]);
}
//#endregion
//#region ../core/src/data/transforms/axisLabelLayout.js
var Mm = class extends m {
	get behavior() {
		return 6;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.view = t, this.params = e, this.channel = e.channel, this.labelWidthAccessor = this.createFieldAccessor(e, "labelWidth"), this.chromLabelWidthAccessor = e.chromLabelWidth ? this.createFieldAccessor(e, "chromLabelWidth") : void 0, (e.labelOverlap || e.labelFlush !== !1 || e.labelFlushZoomExtent) && !Lm(e.labelAngle)) throw Error("Axis label layout requires an axis-aligned label angle.");
		this.data = [], this.nextOutputData = [], this.outputLabels = /* @__PURE__ */ new Map(), this.visibleLabelValueSet = /* @__PURE__ */ new Set(), this.nextVisibleLabelValueSet = /* @__PURE__ */ new Set(), this.flushOffsetMap = /* @__PURE__ */ new Map(), this.nextFlushOffsetMap = /* @__PURE__ */ new Map(), this.hasPublished = !1, this.resolution = t.getScaleResolution(this.channel);
		let n = () => this.filterAndPropagate();
		this.schedule = () => t.context.animator.requestTransition(n), this.registerDisposer(this.resolution.observeMapping(() => this.filterAndPropagate())), this.registerDisposer(t._addBroadcastHandler("layoutComputed", this.schedule));
	}
	complete() {
		this.#e() ? this.filterAndPropagate() : (this.schedule(), this.hasPublished ? this.completed = !0 : this.propagateIfChanged());
	}
	filterAndPropagate() {
		let e = this.#e();
		if (!e) return;
		this.nextOutputData.length = 0;
		let t = this.resolution.getScale(), n = vr(t), r = "gapMapping" in t ? t.gapMapping(e) : void 0, i = (i) => (r ? r.position(i, .5) : t(i) + n) * e, a = this.chromLabelWidthAccessor ? t.genome() : void 0;
		for (let n of this.data) (!a || !this.chromosomeLabelOverlaps(n, t, a, e)) && this.nextOutputData.push(n);
		this.nextFlushOffsetMap.clear();
		for (let t of this.nextOutputData) {
			let n = i(t.value), r = this.params.labelFlushZoomExtent && t.zoomExtent ? Vm(n, this.getLabelBounds(t, 0), e, this.params.labelFlushOffset) : this.params.labelFlush === !1 ? 0 : Bm(n, this.getLabelBounds(t, 0), e, this.params.labelFlush, this.params.labelFlushOffset), a = this.channel == "x" ? r : -r;
			t[this.params.labelOffset] = a, this.nextFlushOffsetMap.set(t.value, a);
		}
		let o = this.getOverlapMethod(t), s = this.nextOutputData.filter((n) => n.label !== "" && (t.type !== "band" && t.type !== "point" || i(n.value) >= 0 && i(n.value) <= e)), c = o ? Nm(s, (e) => {
			let t = this.getLabelBounds(e, i(e.value)), n = e[this.params.labelOffset], r = this.channel == "x" ? n : -n;
			return [t[0] + r, t[1] + r];
		}, o, this.params.labelSeparation) : s;
		this.nextVisibleLabelValueSet.clear();
		for (let e of c) this.nextVisibleLabelValueSet.add(e.value);
		for (let e of this.nextOutputData) e[this.params.labelVisible] = this.nextVisibleLabelValueSet.has(e.value);
		this.propagateIfChanged();
	}
	propagateIfChanged() {
		if (!this.hasPublished || this.nextOutputData.length != this.outputLabels.size || this.nextOutputData.some((e) => this.outputLabels.get(e.value) !== e.label) || !Rm(this.nextVisibleLabelValueSet, this.visibleLabelValueSet) || !zm(this.nextFlushOffsetMap, this.flushOffsetMap)) {
			this.outputLabels.clear();
			for (let e of this.nextOutputData) this.outputLabels.set(e.value, e.label);
			let e = this.visibleLabelValueSet;
			this.visibleLabelValueSet = this.nextVisibleLabelValueSet, this.nextVisibleLabelValueSet = e;
			let t = this.flushOffsetMap;
			this.flushOffsetMap = this.nextFlushOffsetMap, this.nextFlushOffsetMap = t, super.reset();
			for (let e of this.nextOutputData) this._propagate(e);
			this.hasPublished = !0, super.complete();
		} else this.completed = !0;
		this.nextOutputData.length = 0, this.nextVisibleLabelValueSet.clear(), this.nextFlushOffsetMap.clear();
	}
	#e() {
		return this.view.layoutCoords?.[this.channel === "x" ? "width" : "height"] ?? this.resolution.getAxisLength();
	}
	chromosomeLabelOverlaps(e, t, n, r) {
		let i = n.getChromosome(e.chromLabel), a = this.getLabelBounds(e, (t(e.value) + vr(t)) * r), o = t(i.continuousStart) * r, s = "gapMapping" in t && t.gapMapping(r);
		return jm(a, Hm(o, (s ? s.position(i.continuousEnd, 0, !0) : t(i.continuousEnd)) * r, this.chromLabelWidthAccessor(e), this.params.chromLabelPadding, this.params.chromLabelAlign, r), this.params.chromLabelSpacing);
	}
	getLabelBounds(e, t) {
		return Pm(t, this.labelWidthAccessor(e), this.params.labelFontSize, this.params.labelAngle, this.channel, this.params.labelAlign, this.params.labelBaseline);
	}
	getOverlapMethod(e) {
		switch (this.params.labelOverlap) {
			case !1: return !1;
			case "auto": return wt(e.type) || e.type == "symlog" ? "greedy" : "parity";
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
function Nm(e, t, n, r) {
	let i = Dm(e.filter((e) => e.explicit), t, n, r), a = Dm(e.filter((e) => !e.explicit && i.every((n) => !jm(t(e), t(n), r))), t, n, r);
	return i.concat(a);
}
function Pm(e, t, n, r, i, a, o) {
	let s = -Fm(a) * t, c = s + t, l = -Im(o) * n, u = l + n, d = -r * Math.PI / 180, f = Math.sin(d), p = Math.cos(d), m = i == "x" ? s * p - l * f : s * f + l * p, h = i == "x" ? c * p - l * f : c * f + l * p, g = i == "x" ? c * p - u * f : c * f + u * p, _ = i == "x" ? s * p - u * f : s * f + u * p;
	return [e + Math.min(m, h, g, _), e + Math.max(m, h, g, _)];
}
function Fm(e) {
	switch (e) {
		case "left": return 0;
		case "center": return .5;
		case "right": return 1;
		default: throw Error("Invalid label alignment: " + e);
	}
}
function Im(e) {
	switch (e) {
		case "top": return 0;
		case "middle": return .5;
		case "bottom":
		case "alphabetic":
		case "baseline": return 1;
		default: throw Error("Invalid label baseline: " + e);
	}
}
function Lm(e) {
	return e % 90 == 0;
}
function Rm(e, t) {
	return e.size == t.size && e.isSubsetOf(t);
}
function zm(e, t) {
	if (e.size != t.size) return !1;
	for (let [n, r] of e) if (t.get(n) !== r) return !1;
	return !0;
}
function Bm(e, t, n, r, i) {
	let a = Math.abs(e), o = Math.abs(n - e);
	return a < o && a <= r ? -t[0] - i : o <= r ? -t[1] + i : 0;
}
function Vm(e, t, n, r) {
	return e < n - e ? Math.max(0, -e - t[0] - r) : Math.min(0, n - e - t[1] + r);
}
function Hm(e, t, n, r, i, a) {
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
var Um = class extends m {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (Wm(this.params)) e = this.params;
		else if (Gm(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = Te(this.params, t);
		} else throw Error("Invalid filter params: " + JSON.stringify(this.params));
		this.predicate = this.watchSnapshottedExpression(e);
	}
	handle(e) {
		this.predicate(e) && this._propagate(e);
	}
};
function Wm(e) {
	return "expr" in e;
}
function Gm(e) {
	return "param" in e;
}
//#endregion
//#region ../core/src/data/transforms/flatten.js
var Km = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = e.index;
		if (e.fields) {
			let t = this.createFieldAccessors(e, "fields"), r = B(e.as || e.fields);
			if (t.length !== r.length) throw Error(`Lengths of "fields" (${t.length}), and "as" (${r.length}) do not match!`);
			this.handle = (e) => {
				let i = t.map((t, n) => t(e) ?? []), a = i[0].length;
				for (let o = 0; o < a; o++) {
					let a = Object.assign({}, e);
					for (let e = 0; e < t.length; e++) a[r[e]] = o < i[e].length ? i[e][o] : null;
					n && (a[n] = o), this._propagate(a);
				}
			};
		} else this.handle = (e) => {
			for (let t = 0; t < e.length; t++) {
				let r = Object.assign({}, e[t]);
				n && (r[n] = t), this._propagate(r);
			}
		};
	}
}, qm = 48;
function* Jm(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - qm;
	}
	yield r;
}
//#endregion
//#region ../core/src/data/transforms/flattenCompressedExons.js
var Ym = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "exons", { defaultValue: "exons" }), r = this.createFieldAccessor(e, "start", { defaultValue: "start" }), [i, a] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let t = r(e), o = t, s = !0, c = n(e);
			for (let n of Jm(c)) {
				if (s) o = t + n;
				else {
					t = o + n;
					let r = Object.assign({}, e);
					r[i] = o, r[a] = t, this._propagate(r);
				}
				s = !s;
			}
		};
	}
}, Xm = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "start", { defaultValue: "start" }), r = this.createFieldAccessor(e, "cigar", { defaultValue: "cigar" }), i = lp({ copyFields: e.copyFields });
		this.handle = (e) => {
			let t = n(e);
			if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
			let a = r(e);
			if (typeof a != "string" || a.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(a)}`);
			for (let n of wp(a, t)) this._propagate(Object.assign(i(e), n));
		}, this.beginBatch = (e) => {
			i.reset(), super.beginBatch(e);
		};
	}
}, Zm = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessors(e, "field"), r = B(e.separator), i = B(e.as || e.field);
		if (n.length !== r.length || n.length !== i.length) throw Error(`Lengths of "separator" (${r.length}), "fields" (${n.length}), and "as" (${i.length}) do not match!`);
		this.handle = (e) => {
			if (n.some((t) => !t(e))) return;
			let t = n.map((t, n) => t(e).split(r[n]));
			Qm(t, e);
			let a = t[0].length;
			for (let r = 0; r < a; r++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < n.length; e++) a[i[e]] = t[e][r];
				this._propagate(a);
			}
		};
	}
};
function Qm(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region ../core/src/data/transforms/formula.js
var $m = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.as = e.as, this.fn = void 0;
	}
	initialize() {
		this.fn = this.watchSnapshottedExpression(this.params);
	}
	handle(e) {
		e[this.as] = this.fn(e), this._propagate(e);
	}
}, eh = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = e.channel ?? "x";
		if (!["x", "y"].includes(n)) throw Error("Invalid channel: " + n);
		let r = t.getScaleResolution(n).getScale(), i = "genome" in r ? r.genome() : void 0;
		if (!i) throw Error("LinearizeGenomicCoordinate transform requires a locus scale!");
		let a = this.createFieldAccessor(e, "chrom"), o = this.createFieldAccessors(e, "pos"), s = B(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = B(e.offset), l;
		if (c.length == 0) l = Array(o.length).fill(0);
		else if (c.length == 1) l = Array(o.length).fill(c[0]);
		else if (c.length == o.length) l = c;
		else throw Error(`Invalid "offset" parameter: ${JSON.stringify(e.offset)}!`);
		let u = Function("datum", "chromOffset", "posAccessors", s.map((e, t) => `datum[${JSON.stringify(e)}] = chromOffset + +posAccessors[${t}](datum) - ${JSON.stringify(l[t])};`).join("\n")), d, f = 0, p = (e) => {
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
}, th = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = this.createFieldAccessor(e, "field"), r = e.as, i = 0, a = this.watchExprRef(e.fontSize, () => {
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
		this.fontMeasurement = fl(e, this.params);
	}
};
//#endregion
//#region ../core/src/data/transforms/packLegendLabels.js
function nh(e, t) {
	let n = Number(e), r = Number.isFinite(n) && n >= 0 ? n : 100, i = Number(t);
	return Math.sqrt(r) + (Number.isFinite(i) ? i : 0);
}
var rh = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.labelWidthAccessor = this.createFieldAccessor(e, "labelWidth"), this.symbolSizeAccessor = typeof e.symbolSize == "string" ? this.createFieldAccessor(e, "symbolSize") : () => e.symbolSize ?? 100, this.symbolStrokeWidthAccessor = typeof e.symbolStrokeWidth == "string" ? this.createFieldAccessor(e, "symbolStrokeWidth") : () => e.symbolStrokeWidth ?? 0, this.yExtent = void 0;
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
			let n = this.buffer[e], r = t == "horizontal" ? Math.floor(e / d) : e % f, i = t == "horizontal" ? e % d : Math.floor(e / f), o = nh(this.symbolSizeAccessor(n), this.symbolStrokeWidthAccessor(n)), s = this.labelWidthAccessor(n);
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
}, ih = 65536, ah = class extends m {
	#e = () => {};
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
	}
	reset() {
		super.reset(), this.initialize();
	}
	beginBatch(e) {
		e.type == "facet" && this.#e(), super.beginBatch(e);
	}
	initialize() {
		let e = this.params, t = e.as || "lane", n = he(e.spacing) ? e.spacing : 1, r = this.createFieldAccessor(e, "start"), i = this.createFieldAccessor(e, "end");
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(ih), o = this.createFieldAccessor(e, "preference"), s = e.preferredOrder, c = Infinity;
			this.#e = () => {
				a.fill(-Infinity), c = Infinity;
			}, this.handle = (e) => {
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
			let e = new Nn(), a = new Nn(), o = -Infinity, s = 0;
			this.#e = () => {
				e.clear(), a.clear(), o = -Infinity, s = 0;
			}, this.handle = (c) => {
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
}, oh = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let n = this.createFieldAccessors(e, "fields"), r = e.as ? e.as : n.map(lt);
		this.handle = (e) => {
			let t = {};
			for (let i = 0; i < n.length; i++) t[r[i]] = n[i](e);
			this._propagate(t);
		};
	}
}, sh = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = new RegExp(e.regex), r = typeof e.as == "string" ? [e.as] : e.as, i = this.createFieldAccessor(e, "field");
		this.handle = (t) => {
			let o = i(t);
			if (a(o)) {
				let i = o.match(n);
				if (i) {
					if (i.length - 1 != r.length) throw Error("The number of RegEx groups and the length of \"as\" do not match!");
					for (let e = 0; e < r.length; e++) t[r[e]] = i[e + 1];
				} else if (e.skipInvalidInput) for (let e = 0; e < r.length; e++) t[r[e]] = void 0;
				else throw Error(`"${o}" does not match the given regex: ${n.toString()}`);
			} else if (!e.skipInvalidInput) throw Error(`Trying to match a non-string field. Encountered type: ${typeof o}, field content: "${o}".`);
			this._propagate(t);
		};
	}
}, ch = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = B(e.columnRegex).map((e) => new RegExp(e));
		for (let e of t) if (RegExp("|" + e.source).exec("").length - 1 != 1) throw Error(`Regex ${e.toString()} must have exactly one capturing group!`);
		let n = B(e.asValue);
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
			vn(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, lh = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		if (super(e, t), (Array.isArray(e.element) ? e.element : [e.element]).length == 0) throw Error("\"element\" must contain at least one field.");
		if (e.membership === "") throw Error("\"membership\" must name a non-empty field.");
		this.elementAccessors = this.createFieldAccessors(e, "element"), this.setAccessor = this.createFieldAccessor(e, "set"), this.membershipAccessor = e.membership ? this.createFieldAccessor(e, "membership") : null, this.#e();
	}
	#e() {
		this.elementRoot = /* @__PURE__ */ new Map(), this.elements = [], this.setIndexes = /* @__PURE__ */ new Map(), this.sets = [];
	}
	reset() {
		super.reset(), this.#e();
	}
	#t(e, t) {
		if (typeof e != "string" && typeof e != "number" && typeof e != "boolean" || typeof e == "number" && !Number.isFinite(e)) throw Error(`The ${t} field must contain finite scalar values. Received: ${String(e)}`);
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
		e.type == "file" && this.inFacet || (this.elements.length > 0 && this.#i(), super.beginBatch(e));
	}
	complete() {
		this.elements.length > 0 && this.#i(), super.complete();
	}
}, uh = class extends m {
	#e = [];
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.buffer = [];
	}
	reset() {
		super.reset(), this.buffer = [], this.#e = [];
	}
	handle(e) {
		this.buffer.push(e);
	}
	beginBatch(e) {
		e.type == "file" ? this.#e.push({
			index: this.buffer.length,
			batch: e
		}) : (this.#t(), super.beginBatch(e));
	}
	complete() {
		this.#t(), super.complete();
	}
	#t() {
		let e = pu(fu(this.buffer, this.#e), (e) => super.beginBatch(e), (e) => this._propagate(e)), t = this.params, n = t.as || ["y0", "y1"], r = t.sort ? oe(this.createFieldAccessors(t.sort, "field"), t.sort.order) : void 0, i = t.field ? this.createFieldAccessor(t, "field") : () => 1, a = this.createFieldAccessors(t, "groupby"), o = pn(this.buffer, (e) => a.map((t) => t(e)).join()).map((e) => e[1]), s = (e) => !0;
		if (t.baseField) {
			let e = this.createFieldAccessor(t, "baseField");
			s = (t) => e(t) !== null;
		}
		let c, l;
		switch (t.offset) {
			case "normalize":
				c = (e, t) => e / t, l = (e, t) => ia(e, t);
				break;
			case "center":
				c = (e, t) => e - t / 2, l = (e, t) => ia(e, t);
				break;
			case "information":
				{
					let e = Math.log2(t.cardinality ?? 4);
					c = (e, t) => e / t, l = (t, n) => {
						let r = ia(t, (e) => +!s(e)), i = ia(t, n), a = i - r, o = 0;
						for (let e = 0; e < t.length; e++) {
							let r = t[e];
							if (s(r)) {
								let e = n(r) / a;
								o -= e * Math.log2(e);
							}
						}
						return a / (e - (o + 0)) * (a / i);
					};
				}
				break;
			default: c = (e, t) => e, l = (e, t) => 1;
		}
		for (let t of o) {
			r && t.sort(r);
			let a = l(t, i), o = 0;
			for (let r of t) {
				let t = o + i(r);
				s(r) && (r[n[0]] = c(o, a), r[n[1]] = c(t, a), e(r), o = t);
			}
		}
		this.buffer = [], this.#e = [];
	}
}, dh = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = this.createFieldAccessor(e, "field", { defaultValue: "sequence" }), [r, i] = e.as ?? ["pos", "sequence"];
		this.handle = (e) => {
			let t = Object.assign({}, e, {
				[i]: "",
				[r]: 0
			}), a = n(e);
			for (let e = 0; e < a.length; e++) {
				let n = Object.assign({}, t);
				n[r] = e, n[i] = a.charAt(e), this._propagate(n);
			}
		};
	}
};
//#endregion
//#region ../core/src/utils/iterateNestedMaps.js
function* fh(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of fh(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region ../core/src/data/transforms/aggregateOps.js
var ph = {
	count: (e) => e.length,
	valid: $i,
	sum: ia,
	min: Nt,
	max: _t,
	mean: na,
	q1: (e, n) => t(e, .25, n),
	median: ra,
	q3: (e, n) => t(e, .75, n),
	variance: ea
}, mh = class extends m {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
			if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
			if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
			e.fields.forEach((t, n) => {
				let r = this.createFieldAccessor(e, "fields", { index: n }), i = ph[e.ops[n]];
				this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
			});
		} else this.ops.push((e) => ph.count(e)), this.as.push("count");
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	#e() {
		let e = this.params, t = e?.groupby;
		if (t?.length > 0) {
			let n = this.createFieldAccessors(e, "groupby"), r = ln(this.buffer, ...n);
			for (let [e, n] of fh(r)) {
				let r = {};
				for (let n = 0; n < t.length; n++) r[t[n]] = e[n];
				this.ops.forEach((e, t) => {
					r[this.as[t]] = e(n);
				}), this._propagate(r);
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
		e.type != "file" && ((this.buffer.length > 0 || this.inFacet) && (this.#e(), this.buffer = []), super.beginBatch(e));
	}
	complete() {
		this.#e(), super.complete();
	}
}, hh = "...";
function gh(e, t, n, r, i) {
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
var _h = class extends m {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.accessor = this.createFieldAccessor(e, "field"), this.as = e.as ?? e.field, this.fontSize = e.fontSize, this.ellipsis = e.ellipsis ?? hh;
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.textMetrics;
		this.fontMeasurement = e.requestFont(this.params);
	}
	handle(e) {
		let t = this.accessor(e);
		t == null ? e[this.as] = "" : e[this.as] = gh("" + t, this.params.limit, (e, t) => this.fontMeasurement.measureWidth(e, t), this.fontSize, this.ellipsis), this._propagate(e);
	}
}, vh = class extends m {
	#e = [];
	constructor(e, t) {
		if (super(e, t), this.params = e, this.field = this.createFieldAccessor(e, "field"), this.output = t.paramRuntime.resolveOutput(e.param), this.output.producer) throw Error("Duplicate producer for \"" + e.param + "\".");
		this.output.producer = this;
	}
	reset() {
		this.#e = [], this.output.candidate = void 0, super.reset();
	}
	handle(e) {
		let t = this.field(e), n = typeof t;
		if (n !== "string" && n !== "number" && n !== "boolean" || n === "number" && !Number.isFinite(t)) throw le(/* @__PURE__ */ Error(`The values transform requires a scalar field: "${this.params.field}".`), this.paramRuntime.getSpecLocation(this.params, ["field"]));
		this.#e.push(t), this._propagate(e);
	}
	complete() {
		super.complete(), this.output.candidate = Object.freeze(this.#e);
	}
}, yh = /* @__PURE__ */ new Set([
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
]), bh = /* @__PURE__ */ new Set([
	"min",
	"max",
	"q1",
	"median",
	"q3"
]), xh = /* @__PURE__ */ new Set(["mean", "variance"]);
function Sh(e, t) {
	let n = t.map(({ op: e }) => e), r = t.map(({ resultIndex: e }) => e), i = t.map(({ op: e }) => Ch(e));
	return ((t, a, o) => {
		let s = new wh(e, n), c = r.map((e) => o[e]), l = a.starts, u = a.stops, d = 0, f = 0;
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
function Ch(e) {
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
var wh = class {
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
		this.accessor = e, this.needsSum = t.includes("sum"), this.needsMoments = t.some((e) => xh.has(e)), this.needsOrderedValues = t.some((e) => bh.has(e)), this.reset();
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
		this.needsOrderedValues && this.values.splice(He(this.values, n), 0, n);
	}
	remove(e) {
		let t = this.accessor(e);
		if (t == null || t === "" || Number.isNaN(t)) return;
		let n = this.valid;
		if (--this.valid, !this.needsSum && !this.needsMoments && !this.needsOrderedValues) return;
		let r = +t;
		if (this.needsSum && (this.sum -= r), this.needsMoments) {
			if (this.valid) {
				let e = this.mean;
				this.mean = (e * n - r) / this.valid, this.m2 -= (r - e) * (r - this.mean);
			} else this.mean = 0, this.m2 = 0;
		}
		if (this.needsOrderedValues) {
			let e = He(this.values, r);
			if (this.values[e] !== r) throw Error("Window aggregate state is inconsistent.");
			this.values.splice(e, 1);
		}
	}
	q1() {
		return Ze(this.values, .25);
	}
	median() {
		return Ze(this.values, .5);
	}
	q3() {
		return Ze(this.values, .75);
	}
}, Th = /* @__PURE__ */ new Set([
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
]), Eh = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile"
]);
function Dh(e, t, n) {
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
var Oh = class extends m {
	#e = [];
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.buffer = [];
		let n = kh(e, this);
		this.frame = n.frame, this.ignorePeers = n.ignorePeers, this.comparator = n.comparator, this.groupAccessors = n.groupAccessors, this.partitionEvaluators = n.partitionEvaluators, this.outputFields = n.outputFields;
	}
	reset() {
		super.reset(), this.buffer = [], this.#e = [];
	}
	handle(e) {
		this.buffer.push(e);
	}
	beginBatch(e) {
		e.type == "file" && this.inFacet ? this.#e.push({
			index: this.buffer.length,
			batch: e
		}) : (this.#t(), super.beginBatch(e));
	}
	complete() {
		this.#t(), super.complete();
	}
	#t() {
		let e = pu(fu(this.buffer, this.#e), (e) => super.beginBatch(e), (e) => this._propagate(e));
		if (this.#e = [], this.buffer.length == 0) return;
		let t = this.buffer;
		this.buffer = [];
		for (let e of Rh(t, this.groupAccessors)) this.#n(e);
		for (let n of t) e(n);
	}
	#n(e) {
		let t = Fh(e, this.comparator), n = Ih(t, this.comparator, this.frame, this.ignorePeers), r = this.outputFields.map(() => Array(t.length));
		for (let e of this.partitionEvaluators) e(t, n, r);
		Mh(t, r, this.outputFields);
	}
};
function kh(e, t) {
	if (!Array.isArray(e.ops) || e.ops.length == 0) throw Error("The \"ops\" property must contain at least one operation.");
	Nh("fields", e.fields, e.ops.length), Nh("params", e.params, e.ops.length), Nh("as", e.as, e.ops.length);
	let n = e.frame ?? [null, 0];
	if (!Array.isArray(n) || n.length != 2) throw Error("The \"frame\" property must contain exactly two offsets.");
	for (let e of n) if (e != null && (!Number.isInteger(e) || !Number.isFinite(e))) throw Error("Window frame offsets must be integers or null.");
	let r = t.createFieldAccessors(e, "groupby"), i = e.sort ? oe(t.createFieldAccessors(e.sort, "field"), e.sort.order) : void 0, a = [], o = [], s = /* @__PURE__ */ new Map(), c = [], l = [];
	for (let n = 0; n < e.ops.length; n++) {
		let r = Ah(e, n, t);
		if (l.push(r.as), r.kind == "window") {
			let e = Dh(r.op, r.accessor, r.parameter);
			a.push((t, r, i) => e(t, r, i[n]));
		} else if (r.op == "count") c.push({ resultIndex: n });
		else {
			let e = r.field, t = s.get(e);
			t || (t = {
				accessor: r.accessor,
				results: []
			}, s.set(e, t), o.push(t)), t.results.push({
				op: r.op,
				resultIndex: n
			});
		}
	}
	c.length && a.push(jh(c));
	for (let e of o) a.push(Sh(e.accessor, e.results));
	return {
		frame: n,
		ignorePeers: e.ignorePeers ?? !1,
		comparator: i,
		groupAccessors: r,
		partitionEvaluators: a,
		outputFields: l
	};
}
function Ah(e, t, n) {
	let r = e.ops[t], i = e.fields?.[t] ?? null, a = e.params?.[t], o = Th.has(r) ? "window" : yh.has(r) ? "aggregate" : null;
	if (!o) throw Error(`Unsupported window operation: ${r}`);
	if ((o == "window" ? !Eh.has(r) : r != "count") && i == null) throw Error(`Window operation "${r}" requires a field.`);
	if (r == "ntile" || r == "nth_value") {
		if (!Number.isInteger(a) || a <= 0) throw Error(`Window operation "${r}" requires a positive integer parameter.`);
	} else if (a != null && !Number.isFinite(a)) throw Error(`Window operation "${r}" requires a numeric parameter.`);
	let s = e.as?.[t];
	if (s != null && (typeof s != "string" || s.length == 0)) throw Error("Window output field names must be non-empty strings.");
	return {
		op: r,
		kind: o,
		field: i,
		accessor: i == null ? void 0 : n.createFieldAccessor(e, "fields", { index: t }),
		parameter: a,
		as: s ?? Ph(r, i)
	};
}
function jh(e) {
	let t = e.map(({ resultIndex: e }) => e);
	return (e, n, r) => {
		let i = t.map((e) => r[e]), a = n.starts, o = n.stops;
		for (let t = 0; t < e.length; t++) {
			let e = o[t] - a[t];
			for (let n of i) n[t] = e;
		}
	};
}
function Mh(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		for (let e = 0; e < n.length; e++) i[n[e]] = t[e][r];
	}
}
function Nh(e, t, n) {
	if (t && t.length != n) throw Error(`The "${e}" property must contain one entry for every window operation.`);
}
function Ph(e, t) {
	return t == null ? e : `${e}_${t}`;
}
function Fh(e, t) {
	return t ? e.slice().sort(t) : e;
}
function Ih(e, t, n, r) {
	let i = e.length, a = Array(i), o = Array(i), s = Array(i), c = Array(i);
	if (t) {
		let n = 0;
		for (let r = 1; r <= i; r++) if (r == i || t(e[n], e[r]) != 0) {
			for (let e = n; e < r; e++) a[e] = n, o[e] = r;
			n = r;
		}
	} else for (let e = 0; e < i; e++) a[e] = e, o[e] = e + 1;
	for (let e = 0; e < i; e++) {
		let l = n[0] == null ? 0 : Lh(e + n[0], 0, i), u = n[1] == null ? i : Lh(e + n[1] + 1, 0, i);
		t && !r && (l > 0 && l < i && a[l] != l && (l = a[l]), u > 0 && u < i && (u = o[u - 1])), l > u && (u = l), s[e] = l, c[e] = u;
	}
	return {
		starts: s,
		stops: c,
		peerStarts: a,
		peerStops: o
	};
}
function Lh(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function Rh(e, t) {
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
var zh = {
	aggregate: mh,
	alignmentMismatches: Op,
	collect: mu,
	coverage: Fp,
	dendrogram: zp,
	displace1d: Lp,
	displace2d: xm,
	axisLabelLayout: Mm,
	filterScoredLabels: Em,
	filter: Um,
	flatten: Km,
	flattenCigar: Xm,
	flattenCompressedExons: Ym,
	flattenDelimited: Zm,
	flattenSequence: dh,
	formula: $m,
	identifier: Bt,
	linearizeGenomicCoordinate: eh,
	measureText: th,
	packLegendLabels: rh,
	pileup: ah,
	project: oh,
	regexExtract: sh,
	regexFold: ch,
	sample: el,
	setIntersection: lh,
	truncateText: _h,
	window: Oh,
	values: vh,
	stack: uh
};
function Bh(e, t, n) {
	try {
		if (e.type == "lookup") {
			let r = e;
			if (!n && !mp(r)) throw Error("Lookup transform requires a foreign collector.");
			return new pp(r, n?.collector, void 0, t);
		}
		if (e.type == "coordinateLookup") {
			if (!n || !t) throw Error("Coordinate lookup requires a view and a foreign data source.");
			return new Ap(e, n.collector, n.source, t);
		}
		if (e.type == "cross") {
			if (!n) throw Error("Cross transform requires a foreign collector.");
			return new Mp(e, n.collector);
		}
		let r = zh[e.type];
		if (r) return new r(e, t);
		throw Error("Unknown transform: " + e.type);
	} catch (n) {
		throw le(n, t?.paramRuntime.getSpecLocation(e, []));
	}
}
//#endregion
//#region ../core/src/data/sources/urlSource.js
var Vh = /* @__PURE__ */ new Set(["application/gzip", "application/x-gzip"]), Hh = new TextDecoder(), Uh = class extends H {
	#e = 0;
	constructor(e, t) {
		super(t), this.params = Je(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), ms(e.url)), this.baseUrl = t?.getBaseUrl();
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
		let t = Mn(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" }, r = await Wh(t, Yt(n.type));
		return Zt(r, tn(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => Mn(t, e));
	}
	async load() {
		if (this.disposed) return;
		let e = ++this.#e, t = () => !this.disposed && e === this.#e;
		this.setLoadingStatus("loading"), this.reset();
		let n;
		try {
			let e = L(this.params.url), n = typeof e == "object" && "urlsFromFile" in e ? (await this.#t(e)).map((e) => ({ url: e })) : await ps({
				url: this.params.url,
				baseUrl: this.baseUrl,
				paramRuntime: this.paramRuntime
			});
			if (!t()) return;
			let r = n.map((e) => e.url);
			if (r.length > 0 && r[0]) {
				let e = en(this.params, r), i = Yt(e.type), a = async (n, r) => {
					try {
						let i = Zt(n, tn(e)), a = i instanceof Promise ? await i : i;
						if (!t()) return;
						this.beginBatch({
							type: "file",
							url: r.url
						});
						let o = hs(r.fields);
						for (let e of a) this._propagate(o(e));
					} catch (e) {
						if (!t()) return;
						throw Error(`Cannot parse: ${r.url}: ${e.message}`, { cause: e });
					}
				}, o = await Promise.all(n.map((e) => vs(e, async () => ({
					descriptor: e,
					content: await Wh(e.url, i)
				}))));
				if (!t()) return;
				await Promise.all(o.map((e) => e ? a(e.content, e.descriptor) : void 0));
			}
		} catch (e) {
			e instanceof fs || (n = e);
		}
		if (t()) {
			try {
				this.complete(!n);
			} catch (e) {
				n ??= e;
			}
			t() && (n ? (Ns(n), this.setLoadingStatus("error", n.message, n.errorPhase ?? "processing", dt(n))) : this.setLoadingStatus("complete"));
		}
	}
};
async function Wh(e, t) {
	let n;
	try {
		if (n = await fetch(e), !n.ok) throw Error(`${n.status} ${n.statusText}`);
	} catch (t) {
		throw Object.assign(Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t }), { errorPhase: "request" });
	}
	return Zh(n, e, t);
}
function Gh(e) {
	return "url" in e;
}
function Kh(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && !(e[3] & 224);
}
function qh(e) {
	return e ? Vh.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function Jh(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function Yh(e) {
	return new Uint8Array(e).buffer;
}
async function Xh(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(Yh(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function Zh(e, t, n) {
	if (!(rn(t) || qh(e.headers.get("content-type")) || Jh(e.headers.get("content-encoding")))) return Qh(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return $h(Kh(r) ? await Xh(r) : r, n);
}
function Qh(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function $h(e, t) {
	return t == "arrayBuffer" ? Yh(e) : Hh.decode(e);
}
//#endregion
//#region ../core/src/data/sources/sequenceSource.js
function eg(e) {
	return "sequence" in e;
}
var tg = class extends H {
	constructor(e, t) {
		if (super(t), this.sequence = Je(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e)), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = L(this.sequence.as) ?? "data", t = L(this.sequence.start) ?? 0, n = L(this.sequence.step) ?? 1, r = L(this.sequence.stop);
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
function ng(e, t) {
	let n = pt(e, t.context.getSpecOrigin, [])?.origin, r = rg(e, t);
	return r.origin = n, r;
}
function rg(e, t) {
	if (Xt(e)) return new an(e, t);
	if (Gh(e)) return new Uh(e, t);
	if (eg(e)) return new tg(e, t);
	if (ig(e)) return Qa(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function ig(e) {
	return "lazy" in e;
}
//#endregion
//#region ../core/src/data/transforms/clone.js
var ag = class extends m {
	get behavior() {
		return 1;
	}
	#e = lp();
	constructor() {
		super({ type: "clone" }), this.handle = (e) => this._propagate(this.#e(e)), this.beginBatch = (e) => {
			this.#e.reset(), super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/sources/namedSource.js
function og(e) {
	return "name" in e;
}
var sg = class extends H {
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
		Array.isArray(e) && e.length > 0 && (t = Qt(e[0])), this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, cg = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new qf();
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
	pruneBranch(e) {
		if (e instanceof H) {
			this.removeDataSource(e);
			return;
		}
		let t = e.parent;
		for (t && t.removeChild(e), e.disposeSubtree(); t && t.children.length === 0;) {
			let e = t;
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof H ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof sg && e === n.identifier) {
			if (t && t !== n) throw Error(`Named data "${e}" is ambiguous across scoped datasets. Use the dataset owner's ViewHandle.datasets.set() method.`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
	updateNamedDataBinding(e, t) {
		e.beginUpdate(), t === void 0 ? e.resetData() : e.setData(t);
		for (let t of this.#e.values()) t instanceof sg && t.binding === e && t.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/utils/trees.js
function lg(e, t) {
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
function ug(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = ug(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function dg(e, t) {
	return ug(e, t, (e) => e.children);
}
//#endregion
//#region ../core/src/view/multiscale.js
var fg = .5;
function pg(e) {
	return "multiscale" in e && _(e.multiscale);
}
function mg(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = hg(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => {
		if (e.multiscale.length === 1) return n;
		let i = {
			..._g(r, e.multiscale.length, t),
			layer: [n]
		};
		return t.transition && hr(i, [{
			name: "multiscaleOpacity",
			expr: vg(r, e.multiscale.length, t),
			transition: t.transition
		}]), i;
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function hg(e, t) {
	let n = "unitsPerPixel", r, i = "auto", a = fg, o;
	if (_(e)) r = gg(e, t, "stops");
	else if (R(e)) n = e.metric ?? "unitsPerPixel", r = gg(e.values, t, "stops.values"), i = e.channel ?? "auto", o = e.transition, a = o ? fg : e.fade ?? fg;
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
		if (!F(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !r.some(F)) {
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
function gg(e, t, n) {
	if (!_(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!F(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function _g(e, t, n) {
	return n.transition ? { opacity: { expr: "multiscaleOpacity" } } : { opacity: bg(e, t, n) };
}
function vg(e, t, n) {
	let r = n.channel === "x" ? "width" : "height", i = `abs(span(domain('${n.channel}'))) / max(${r}, 1)`;
	return e === 0 ? i + " >= " + yg(n.values[0]) + " ? 1 : 0" : e === t - 1 ? i + " < " + yg(n.values.at(-1)) + " ? 1 : 0" : i + " < " + yg(n.values[e - 1]) + " && " + i + " >= " + yg(n.values[e]) + " ? 1 : 0";
}
function yg(e) {
	return F(e) ? "(" + e.expr + ")" : String(e);
}
function bg(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: xg(e, 1 + n.fade),
		lo: xg(e, 1 - n.fade)
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
function xg(e, t) {
	return F(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region ../core/src/view/viewSpecGuards.js
function Sg(e) {
	return "mark" in e && (a(e.mark) || R(e.mark));
}
function Cg(e) {
	return "layer" in e && R(e.layer);
}
function wg(e) {
	return Sg(e) || Cg(e) || pg(e);
}
function Tg(e) {
	return "facet" in e && R(e.facet) && "spec" in e && R(e.spec);
}
function Eg(e) {
	return "import" in e;
}
function Dg(e) {
	return "vconcat" in e && _(e.vconcat);
}
function Og(e) {
	return "hconcat" in e && _(e.hconcat);
}
function kg(e) {
	return "concat" in e && _(e.concat);
}
function Ag(e) {
	return "surround" in e && R(e.surround) && "spec" in e;
}
//#endregion
//#region ../core/src/view/flowBuilder.js
function jg(e, t, n, r) {
	let i = [], a = [], o, s = t ?? new cg(), c = [], l = r ?? (() => !0);
	function u(e, t = () => void 0) {
		if (!o) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return o.addChild(e), o = e, i.push(e), e;
	}
	function d(e, t) {
		return u(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function f(e, t) {
		e.behavior & 2 && t(new ag()), t(e);
	}
	function p(e, t) {
		for (let n of e) {
			if (n.type === "branch") {
				if ("data" in n) throw Error("A branch does not accept data; it forks the current input.");
				if (!o) throw Error("A branch requires input data.");
				if (!n.transform.length) throw Error("A branch requires at least one transform.");
				let e = o, r = i.length;
				p(n.transform, t), t.flowHandle ??= {}, t.flowHandle.terminals ??= /* @__PURE__ */ new Set(), t.flowHandle.terminals.add(o), o = e, i.length = r;
				continue;
			}
			if (Mg(t)) {
				if (n.type === "collect" && n.groupby?.length) throw Error("collect.groupby cannot repartition inherited facet data.");
				if ([
					"displace1d",
					"filterScoredLabels",
					"packLegendLabels",
					"axisLabelLayout"
				].includes(n.type)) throw Error(`Transform "${n.type}" does not support inherited facet data.`);
			}
			let e, r;
			try {
				let i = bp(n);
				i && (r = m(i.data, i.transforms, t)), e = Bh(n, t, r);
			} catch (e) {
				throw r && h(t, r.collector), console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			f(e, d), r && e.registerDisposer(() => h(t, r.collector));
		}
	}
	function m(e, t, n) {
		let r = og(e) ? new sg(e, n) : ng(e, n), i = r;
		try {
			for (let e of t) {
				if (yp(e)) throw Error("Transforms with side inputs cannot be used in a side-input transform pipeline.");
				f(Bh(e, n), (e) => {
					i.addChild(e), i = e;
				});
			}
		} catch (e) {
			throw r.disposeSubtree(), e;
		}
		let a = new mu({ type: "collect" });
		return i.addChild(a), s.addDataSource(r), s.addCollector(a), n.flowHandle ??= {}, n.flowHandle.auxiliaryCollectors ??= /* @__PURE__ */ new Set(), n.flowHandle.auxiliaryCollectors.add(a), {
			collector: a,
			source: r
		};
	}
	function h(e, t) {
		e.flowHandle?.auxiliaryCollectors?.delete(t), s.pruneBranch(t), s.removeCollector(t);
	}
	function g() {
		return i.findLastIndex((e) => e instanceof Bt) > i.findLastIndex((e) => e instanceof H || e.createsNewIdentity);
	}
	let _ = (e) => {
		if (l(e)) {
			if (e.spec.data) {
				let t = e.flowHandle?.dataSource;
				t && t.view === e && !t.shareKey && s.removeDataSource(t);
				let n = og(e.spec.data) ? new sg(e.spec.data, e) : ng(e.spec.data, e);
				o = n, i.push(n), s.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
			}
			if (e.spec.transform && p(e.spec.transform, e), Tg(e.spec)) {
				let t = new mu({
					type: "collect",
					groupby: e.getFacetFields()
				});
				u(t, () => /* @__PURE__ */ Error("A facet requires an inherited or own data source.")), s.addCollector(t), e.flowHandle ??= {}, e.flowHandle.collector = t;
			}
			if (e instanceof Z) {
				if (!o) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
				e.mark.initializeRecordIdentity();
				let t = Pg(e);
				if (t) {
					c.push(t.rewrite);
					for (let e of t.transforms) d(e);
				}
				e.mark.requiresRecordIdentity() && !g() && (d(new ag()), d(new Bt({ type: "identifier" })));
				let n = new mu({
					type: "collect",
					groupby: e.getLayoutAncestors().some((e) => Tg(e.spec)) ? void 0 : e.getFacetFields(),
					sort: Fg(e, t?.rewrittenEncoding)
				});
				u(n);
				let r = e.flowHandle?.collector;
				r && s.removeCollector(r), s.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
			}
			o && (e.flowHandle ??= {}, e.flowHandle.node = o, !(e instanceof Z) && (e.spec.data || e.spec.transform) && (e.flowHandle.terminals ??= /* @__PURE__ */ new Set(), e.flowHandle.terminals.add(o)));
		} else {
			let t = e.flowHandle?.node;
			if (t) {
				t !== o && (o = t, i.push(t));
				return;
			}
			if (e.spec.data || e.spec.transform || e instanceof Z) throw Error("Cannot reuse missing flow nodes for " + e.getPathString());
		}
	}, v = lg(Ng(e, n), (e) => e.dataParent);
	for (let e of v) dg(e, {
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
function Mg(e) {
	for (let t of e.getDataAncestors()) {
		if (t !== e && Tg(t.spec)) return !0;
		if (t.spec.data) return !1;
	}
	return !1;
}
function Ng(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return Qn;
		n.push(e);
	}), n;
}
function Pg(e) {
	let t = [], n = {}, r = e.mark.encoding, i = e.getEncoding(), a = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		(tt(n) === n || n in i) && ue(n) && !Array.isArray(t) && We(t) && a.push({
			channel: n,
			chromPosDef: t
		});
	}
	let o = ln(a, (e) => tt(e.channel), (e) => e.chromPosDef.chrom);
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
		t.push(new ag()), t.push(new eh({
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
			}, wr(e.mark, "encoding");
		}
	} : void 0;
}
function Fg(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x, r = e.mark.encoding.x;
	if (Rt(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (xe(n)) return Rt(r) && "buildIndex" in r && r.buildIndex ? { field: n.field } : null;
		if (!ve(n) && Vt(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
function Ig(e, ...t) {
	let n = e;
	for (let e of t) n.addChild(e), n = e;
	let r;
	n instanceof mu ? r = n : (r = new mu(), n.addChild(r));
	let i;
	return i = e instanceof H ? async () => (await e.load(), r.getData()) : async () => {
		throw Error("The root node is not derived from DataSource!");
	}, {
		dataSource: e,
		collector: r,
		loadAndCollect: i
	};
}
//#endregion
//#region ../core/src/data/flowOptimizer.js
function Lg(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!Lg(t, e)) return !1;
	return !0;
}
function Rg(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof ag) {
		if (t) t = !1;
		else {
			let n = e.children[0];
			e.excise(), n && Rg(n, t);
			return;
		}
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) Rg(e.children[n], t || r > 1);
}
function zg(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.shareKey && !n.has(e.shareKey) && n.set(e.shareKey, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.shareKey) {
		let t = n.get(e.shareKey);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function Bg(e) {
	if (Rg(e), !Lg(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function Vg(e) {
	let t = zg(e);
	for (let t of e.dataSources) Bg(t);
	return t;
}
//#endregion
//#region ../core/src/data/flowInit.js
var Hg = /* @__PURE__ */ new WeakMap(), Ug = /* @__PURE__ */ new WeakMap();
function Wg(e, t) {
	let n = Hg.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = Ug.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => Wg(e)).finally(() => {
			Ug.delete(e);
		});
		return Ug.set(e, i), i;
	}
	let r = Promise.resolve().then(() => (e.activate(), e.load())).finally(() => {
		Hg.delete(e);
	});
	return Hg.set(e, r), r;
}
function Gg(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r), e.node instanceof H && (e.node = t.get(e.node) ?? e.node), e.terminals &&= new Set(Array.from(e.terminals, (e) => e instanceof H ? t.get(e) ?? e : e));
	}
}
function Kg(e) {
	for (; e && !(e instanceof H);) e = e.parent;
	return e instanceof H ? e : void 0;
}
function qg(e, t, n, r) {
	let i = r ?? (() => !0), a = e_(e, n).filter(i);
	if (a.length === 0) return {
		dataFlow: t,
		unitViews: [],
		dataSources: /* @__PURE__ */ new Set()
	};
	let o = new Set(a);
	for (let e of a) e._setDataInitializationState("pending");
	let s;
	try {
		s = jg(e, t, n, (e) => o.has(e)), Gg(e, Vg(s));
	} catch (e) {
		for (let e of a) e._setDataInitializationState("none");
		throw e;
	}
	let c = Jg(a);
	for (let e of c) e.visit((e) => e.initializeOnce());
	let l = a.filter((e) => e instanceof Z);
	for (let e of a) for (let [t, n] of e.paramRuntime.paramConfigs) "select" in n && e.paramRuntime.findSelectionCapability(t);
	for (let e of l) {
		let t = e.mark;
		t.initializeEncoders(), e.registerDisposer(e.flowHandle.collector.observe((n) => {
			t.initializeData(), e.context.animator.requestRender();
		}));
	}
	for (let e of a) e._setDataInitializationState("ready");
	let u = new Set(l.flatMap((e) => Object.values(e.mark.encoders).flatMap(Tt).filter(D).map((t) => e.getScaleResolution(t.scaleChannel))));
	for (let e of u) e.bindDomainInputs();
	return {
		dataFlow: s,
		unitViews: l,
		dataSources: c
	};
}
function Jg(e, t) {
	let n = Array.isArray(e) ? e : e_(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource), Zg(e, r), Qg(e, r);
	}
	return r;
}
function Yg(e, t) {
	let n = /* @__PURE__ */ new Set();
	Xg(e, n, t);
	for (let r of e_(e, t)) Qg(r, n);
	return e.visit((e) => {
		if (t && !t(e)) return Qn;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), Qn;
	}), n;
}
function Xg(e, t, n) {
	for (let r of e_(e, n)) Zg(r, t);
}
function Zg(e, t) {
	for (let n of e.flowHandle?.auxiliaryCollectors ?? []) {
		let e = Kg(n);
		e && t.add(e);
	}
}
function Qg(e, t) {
	for (let n of e.flowHandle?.terminals ?? []) {
		let e = Kg(n);
		e && t.add(e);
	}
}
function $g(e, t, n, r) {
	t ||= Yg(e, n);
	let i = /* @__PURE__ */ new Set();
	Xg(e, i, n);
	let a = Array.from(t).filter((e) => i.has(e)), o = Array.from(t).filter((e) => !i.has(e));
	return Promise.all(a.map((e) => Wg(e, r))).then((e) => Promise.all(o.map((e) => Wg(e, r))).then((t) => e.concat(t))).then((t) => (t_(e), t));
}
function e_(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return Qn;
		n.push(e);
	}), n) : e.getDescendants();
}
function t_(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region ../core/src/genomeSpy/viewDataInit.js
async function n_(e, t, n, r) {
	let { predicate: i } = a_(e), { dataFlow: a } = qg(e, t, i);
	return r(a), await n.waitUntilReady(), e.invalidateSizeCache(), await $g(e, new Set(a.dataSources), i), a;
}
async function r_(e, t, n) {
	return i_(e, t, n, e.getDescendants());
}
async function i_(e, t, n, r) {
	let i = new Set(r), { predicate: a, producerPaths: o } = a_(e), s = o_(e, a).filter((e) => (i.has(e) || o.has(e)) && e.getDataInitializationState() === "none");
	if (s.length === 0) return t;
	let c = new Set(s), l = (e) => c.has(e), u = new Set(t.collectors), { dataFlow: d } = qg(e, t, a, l);
	await n.waitUntilReady(), e.invalidateSizeCache();
	let f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set();
	for (let e of s) for (let t of [
		e.flowHandle?.node,
		...e.flowHandle?.terminals ?? [],
		...e.flowHandle?.auxiliaryCollectors ?? []
	]) {
		let e = t;
		for (; e && !(e instanceof H) && !(e instanceof mu && u.has(e));) e = e.parent;
		if (e instanceof mu && e.completed) f.add(e);
		else {
			let t = Kg(e);
			t && p.add(t);
		}
	}
	await $g(e, p, a, { queueReload: !0 });
	for (let e of f) p.has(Kg(e)) || e.repropagate();
	return t_(e), d;
}
function a_(e) {
	let t = o_(e, (e) => e.isConfiguredVisible()), n = new Set(t), r = /* @__PURE__ */ new Set(), i = (e) => {
		e && !r.has(e) && (r.add(e), n.add(e), i(e.layoutParent), i(e.dataParent));
	};
	for (let e of n) for (let t of e.paramRuntime.outputs) i(t.producerView);
	return {
		predicate: (e) => n.has(e),
		producerPaths: r
	};
}
function o_(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return Qn;
		n.push(e);
	}), n;
}
//#endregion
//#region ../core/src/genome/genomeStore.js
var s_ = class {
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
			let e = c_(r);
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
			return new Gu({ name: e });
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
		let r = new Gu({
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
			let n = new Gu({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new Gu({
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
		let r = new Gu({
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
function c_(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
//#endregion
//#region ../core/src/tooltip/refseqGeneTooltipHandler.js
var l_ = /* @__PURE__ */ new Map(), u_ = { Organism: "Homo sapiens" };
async function d_(e, t, n = {}) {
	let r = e.symbol, i = {
		...u_,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = l_.get(r) ?? await m_(i);
	return a ? (l_.set(r, a), q`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function f_(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: h_(e),
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
	}
	return null;
}
var p_ = Ps(f_, 500);
function m_(e) {
	return p_(e);
}
function h_(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region ../core/src/utils/formatObject.js
var g_ = z(".4~r"), __ = z(".4~e");
function v_(e) {
	return e == null ? q` <span class="na">NA</span> ` : a(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : he(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? __(e) : g_(e) : E(e) ? e ? "True" : "False" : _(e) ? q`${e.map((t, n) => [v_(t), n < e.length - 1 ? ", " : J])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region ../core/src/tooltip/flattenDatumRows.js
function y_(e) {
	let t = [];
	return b_(Object.entries(e), t), t;
}
function b_(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? b_(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region ../core/src/tooltip/configuredTooltipRows.js
var x_ = /* @__PURE__ */ new WeakMap();
function S_(e, t) {
	let n = t.encoding.tooltip;
	if (n === void 0) return;
	if (n === null) return [];
	let r = Array.isArray(n) ? n : [n];
	if (r.length === 0) throw Error("The tooltip channel array must not be empty.");
	return r.map((n) => C_(e, t, n));
}
function C_(e, t, n) {
	let r = w_(t, n), i = r(e), a = "format" in n && n.format && typeof i == "number" && Number.isFinite(i) ? z(n.format)(i) : i;
	return {
		key: T_(n),
		value: a,
		...r.sourceField ? { sourceField: r.sourceField } : {},
		...a === i ? {} : { formatted: !0 }
	};
}
function w_(e, t) {
	let n = x_.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), x_.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = fe("tooltip", t, e.unitView.paramRuntime);
	return "field" in t && (i.sourceField = t.field), n.set(t, i), i;
}
function T_(e) {
	if ("title" in e && e.title !== void 0) return e.title === null ? "" : e.title;
	if ("field" in e) return e.field;
	if ("expr" in e) return e.expr;
	if ("datum" in e) return "datum";
	if ("value" in e) return "value";
	throw Error("Invalid tooltip channel definition: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/tooltip/tooltipContext.js
var E_ = {
	x: "x2",
	y: "y2"
}, D_ = /* @__PURE__ */ new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), O_ = /* @__PURE__ */ new WeakMap();
function k_(e, t, n, r) {
	let i = A_(t), a = M_("x", e, t, i, W_(n, "x")), o = M_("y", e, t, i, W_(n, "y")), s = a.rows.length > 0 && o.rows.length > 0, c = [...s ? j_("x", a.rows) : a.rows, ...s ? j_("y", o.rows) : o.rows], l = /* @__PURE__ */ new Set();
	for (let n of [a, o]) for (let r of n.usedLinearizedFields) {
		let n = i.get(r);
		n && !n.ambiguous && G_(e, r, n, t) && (l.add(n.chrom), l.add(n.pos));
	}
	return {
		facetId: r?.slice(),
		tooltipRows: S_(e, t),
		hiddenRowKeys: [...l],
		genomicRows: c,
		flattenDatumRows: () => y_(e),
		formatGenomicLocus: (e, n) => V_(t, e, n),
		formatGenomicInterval: (e, n) => H_(t, e, n)
	};
}
function A_(e) {
	let t = O_.get(e);
	if (t) return t;
	let n = z_(e);
	return O_.set(e, n), n;
}
function j_(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function M_(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = R_(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = R_(n, E_[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? N_(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = F_(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: V_(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: V_(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: H_(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: V_(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function N_(e, t, n) {
	if (!t || e.value === t.value) return "locus";
	let r = P_(e.field, n), i = P_(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function P_(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function F_(e, t, n) {
	let r = I_(e.field, n), i = I_(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function I_(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = L_(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function L_(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function R_(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = gt(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function z_(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = B(e.as), i = B(e.pos), a = B_(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
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
function B_(e, t) {
	let n = B(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function V_(e, t, n) {
	return U_(e, t)?.formatLocus(n);
}
function H_(e, t, n) {
	return U_(e, t)?.formatInterval(n);
}
function U_(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function W_(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!D_.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function G_(e, t, n, r) {
	let i = U_(r, n.channel);
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
async function K_(e, t, n, r) {
	let i = (e) => Dt(e).join("."), a = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), o = (e, n, r) => {
		for (let [o, s] of Object.entries(t.encoders)) {
			let t = s ? gt(s)?.fields : void 0;
			if (t && t.some((t) => t === e || i(t) === e)) switch (o) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? a(n) ? q`
                                <span
                                    class="color-legend color-legend-unmapped"
                                ></span>
                            ` : "" : q`
                                <span
                                    class="color-legend"
                                    style=${"background-color: " + String(e)}
                                ></span>
                            `;
				}
			}
		}
		return "";
	}, s = r ?? k_(e, t, n), c = s.tooltipRows ? s.tooltipRows : s.flattenDatumRows ? s.flattenDatumRows() : y_(e), l = s.genomicRows ?? [], u = new Set(s.hiddenRowKeys ?? []), d = c.filter((t) => !u.has(t.key) || o(t.sourceField ?? t.key, t.value, e)), f = [...l, ...d];
	if (!f.length) return;
	let p = q`
        <table class="attributes">
            ${f.map((t) => {
		let n = t.formatted ? t.value : v_(t.value), r = o(t.sourceField ?? t.key, t.value, e);
		return q`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, m = t.unitView.getTitleText();
	return q`${m ? q`
              <div class="title">
                  <strong>${m}</strong>
              </div>
          ` : ""}${p}`;
}
//#endregion
//#region ../core/src/genome/assemblyPreflight.js
function q_(e) {
	let t = [], n = !1, r = Y_(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function J_(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = q_(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function Y_(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), ir(e, r), t;
}
//#endregion
//#region ../core/src/scales/viewLevelScaleProps.js
function X_(e) {
	let t = [];
	for (let n of e.getDescendants()) {
		let e = n.spec.scales;
		if (e) for (let [r, i] of Object.entries(e)) t.push($_(n, r, i));
	}
	return t;
}
function Z_(e) {
	Q_(e);
	for (let t of X_(e)) {
		let { view: e, channel: n, props: r } = t;
		if (t.resolution ??= $_(e, n, r).resolution, !t.resolution && r.type && r.type !== "null") {
			let t = new of(n, e);
			t.type = r.type === "locus" || r.type === "index" ? r.type : I(r.type) ? "nominal" : "quantitative", e.resolutions.scale[n] = t;
		}
	}
	let t = X_(e);
	for (let e of t) e.resolution && e.resolution.attachViewLevelScaleProps(e.view, e.props);
	return t;
}
function Q_(e) {
	let t = new Set(e.getDescendants()), n = tv(e);
	for (let e of n) {
		let n = e.getViewLevelScaleProps();
		n && t.has(n.view) && !e.isExplicitlyOwned() && e.clearViewLevelScaleProps(n.view);
	}
}
function $_(e, t, n) {
	let r = ev(e, t);
	if (r.size > 1) throw Error(`View-level scales.${t} maps to multiple scale resolutions. Move scales.${t} closer to the intended subtree or configure scale resolution explicitly.`);
	return {
		view: e,
		channel: t,
		props: n,
		resolution: r.values().next().value
	};
}
function ev(e, t) {
	let n = /* @__PURE__ */ new Set();
	return rr(e, (r) => {
		if (r !== e && (r.isResolutionBoundary(t) || r.getConfiguredOrDefaultResolution(t, "scale") === "excluded")) return Qn;
		let i = r.getScaleResolution(t);
		i && n.add(i);
	}), n;
}
function tv(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getDescendants()) for (let e of Object.values(n.resolutions.scale)) t.add(e);
	return t;
}
//#endregion
//#region ../core/src/scales/viewLevelGuideProps.js
var nv = {
	declarationKey: "axes",
	resolutionType: "axis",
	getResolution: (e, t) => e.getAxisResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.axis),
	attach: (e, t, n) => e.attachViewLevelAxisProps(t, n),
	getAttachedProps: (e) => e.getViewLevelAxisProps(),
	clear: (e, t) => e.clearViewLevelAxisProps(t)
}, rv = {
	declarationKey: "legends",
	resolutionType: "legend",
	getResolution: (e, t) => e.getLegendResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.legend),
	attach: (e, t, n) => e.attachViewLevelLegendProps(t, n),
	getAttachedProps: (e) => e.getViewLevelLegendProps(),
	clear: (e, t) => e.clearViewLevelLegendProps(t)
};
function iv(e) {
	return rr(e, (e) => {
		for (let t of Object.keys(e.spec.axes ?? {})) {
			let n = e.getScaleResolution(t);
			n && zf(Mf(e, "axis", t), t, n);
		}
	}), sv(e, nv);
}
function av(e) {
	return sv(e, rv);
}
function ov(e) {
	dv(e, nv), dv(e, rv);
}
function sv(e, t) {
	dv(e, t);
	let n = cv(e, t);
	for (let e of n) e.resolution && t.attach(e.resolution, e.view, e.props);
	return n;
}
function cv(e, t) {
	let n = [];
	for (let r of e.getDescendants()) {
		let e = r.spec[t.declarationKey];
		if (e) for (let [i, a] of Object.entries(e)) n.push(lv(r, t, i, a));
	}
	return n;
}
function lv(e, t, n, r) {
	let i = uv(e, t, n);
	if (i.size > 1) throw Error(`View-level ${t.declarationKey}.${n} maps to multiple ${t.resolutionType} resolutions. Move ${t.declarationKey}.${n} closer to the intended subtree or configure ${t.resolutionType} resolution explicitly.`);
	return {
		view: e,
		channel: n,
		props: r,
		resolution: i.values().next().value
	};
}
function uv(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	return rr(e, (i) => {
		if (i !== e && (i.isResolutionBoundary(n) || i.getConfiguredOrDefaultResolution(n, t.resolutionType) === "excluded")) return Qn;
		let a = t.getResolution(i, n);
		a && r.add(a);
	}), r;
}
function dv(e, t) {
	let n = new Set(e.getDescendants()), r = fv(e, t);
	for (let e of r) {
		let r = t.getAttachedProps(e);
		r && n.has(r.view) && t.clear(e, r.view);
	}
}
function fv(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e.getDescendants()) for (let e of t.getAllResolutions(r)) n.add(e);
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/viewHierarchyConfig.js
function pv(e) {
	er(e), rp(e), ip(e);
}
function mv(e) {
	hv(e.getDescendants());
}
function hv(e) {
	e = Array.from(e);
	for (let t of e) for (let e of Object.values(t.resolutions.scale)) e.initializeScale();
	for (let t of e) t.configurePostScaleParams(), t.configureViewOpacity(), t.finalizeParamRuntimeInitialization();
}
//#endregion
//#region ../core/src/view/containerMutationHelper.js
var gv = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n } = this.options, r = t ?? n.length, i = this.container.getNextAutoName(this.options.namePrefix), a = !1, o = !1, s = this.options.specValidator ? Ge(e) : e;
		Eg(s) || this.options.specValidator?.(s);
		let c = await this.container.context.createOrImportView(s, this.container, this.container, i, this.options.specValidator, this.options.createViewOptions);
		try {
			er(c), n.splice(r, 0, e), a = !0;
			let t = this.options.insertView(c, r);
			o = !0, Z_(this.container), iv(this.container), av(this.container), await J_(c, this.container.context.genomeStore);
			let i = await this.options.syncMutationGuideViews?.(t), s = new Set(c.getDescendants());
			for (let e of i ?? [this.container]) vv(e, s);
			hv(s), await i_(this.container, this.container.context.dataFlow, this.container.context.textMetrics, s);
		} catch (e) {
			if (o) await this.#e(r, e);
			else {
				a && n.splice(r, 1);
				let e = this.container.context.dataFlow.dataSources;
				c.disposeSubtree(), await _v(e);
			}
			throw e;
		}
		return this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow(), c;
	}
	async #e(e, t) {
		try {
			await this.removeChildAt(e, { requestLayout: !1 });
		} catch (e) {
			t.rollbackError = e;
		}
	}
	async removeChildAt(e, t = {}) {
		let n = this.container.children[e];
		if (!n) throw Error("Child index out of range!");
		n.assertCanDisposeSubtree();
		let r = this.container.context.dataFlow.dataSources;
		try {
			Q_(this.container), ov(this.container), this.options.removeView(e), this.options.specs.splice(e, 1), Z_(this.container), iv(this.container), av(this.container);
			let n = await this.options.syncMutationGuideViews?.();
			await this.initializeUninitializedChromeViews(n), t.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
		} finally {
			await _v(r);
		}
	}
	async initializeUninitializedChromeViews(e = [this.container]) {
		if (this.container.getDataInitializationState() === "none") return;
		let t = /* @__PURE__ */ new Set();
		for (let n of e) vv(n, t);
		hv(t), await i_(this.container, this.container.context.dataFlow, this.container.context.textMetrics, t);
	}
};
async function _v(e) {
	let t = (await Promise.allSettled(e.filter((e) => e.disposed && e instanceof Fs).map((e) => e.whenDisposed()))).find((e) => e.status === "rejected");
	if (t?.status === "rejected") throw t.reason;
}
function vv(e, t = /* @__PURE__ */ new Set()) {
	for (let n of e.getDescendants()) if (Jn(n) && n.getDataInitializationState() === "none") for (let e of n.getDescendants()) e.getDataInitializationState() === "none" && t.add(e);
	return t;
}
//#endregion
//#region ../core/src/view/layerView.js
var yv = class extends zr {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		await this.createChildViews(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!wg(e)) throw new Er("LayerView accepts only unit, layer, or multiscale specs as children!", this);
		}, {
			inheritEncoding: !0,
			layoutSizeParams: "inherit"
		})), (e) => {
			this.#e = e;
		});
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	moveChildAt(e, t) {
		xn(this.spec.layer, e, t), xn(this.#e, e, t), this.context.requestLayoutReflow();
	}
	#t() {
		return new gv(this, {
			specs: this.spec.layer,
			insertView: (e, t) => {
				e.layoutParent ??= this, this.#e.splice(t, 0, e);
			},
			removeView: (e) => {
				let t = this.#e[e];
				if (!t) throw Error("Child index out of range!");
				t.disposeSubtree(), this.#e.splice(e, 1);
			},
			namePrefix: "layer",
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
	[Symbol.iterator]() {
		return this.#e.values();
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
}, bv = class {
	#e;
	constructor(e, t = Infinity) {
		this.n = typeof e == "number" ? e : e.length, this.maxCols = t, this.#e = typeof e == "number" ? void 0 : e;
	}
	get nRows() {
		return this.#e ? Math.max(-1, ...this.#e.map(([, e]) => e)) + 1 : this.maxCols === Infinity ? 1 : Math.ceil(this.n / this.maxCols);
	}
	get nCols() {
		return this.#e ? Math.max(-1, ...this.#e.map(([e]) => e)) + 1 : Math.min(this.n, this.maxCols);
	}
	get rowIndices() {
		return this.#t(1, this.nRows);
	}
	get colIndices() {
		return this.#t(0, this.nCols);
	}
	#t(e, t) {
		let n = [];
		if (this.#e) {
			for (let e = 0; e < t; e++) n.push([]);
			for (let t = 0; t < this.n; t++) n[this.#e[t][e]].push(t);
		} else {
			let r = this.nCols, i = e === 0 ? r : 1;
			for (let a = 0; a < t; a++) {
				let t = e === 0 ? a : a * r, o = e === 0 ? this.n : Math.min(this.n, t + r), s = [];
				for (let e = t; e < o; e += i) s.push(e);
				n.push(s);
			}
		}
		return n;
	}
	getCellIndex(e, t) {
		let n = this.#e ? this.#e.findIndex(([n, r]) => n === e && r === t) : t * this.nCols + e;
		return e < this.nCols && n >= 0 && n < this.n ? n : void 0;
	}
	getCellCoords(e) {
		if (!(e < 0 || e >= this.n)) return this.#e ? this.#e[e] : [e % this.nCols, Math.floor(e / this.nCols)];
	}
}, xv = {
	x: "axisX",
	y: "axisY"
}, Sv = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, Cv = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function wv(e, { channel: t, orient: n, type: r, style: i }) {
	let a = df();
	for (let [o, s] of e.entries()) {
		let c = xv[t], l = n ? Sv[n] : void 0, u = r ? Cv[r] : void 0, d = e.slice(0, o + 1), f = [
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
var Tv = "chromosome_ticks_and_labels", Ev = "labels_main", Dv = "ticks_and_labels", Ov = "axisExtent", kv = "domainGapsEnabled", Av = "labelWidth", jv = "labelVisible", Mv = "labelOffset", Nv = "chromLabelWidth", Pv = 4, Fv = 5, Iv = 10, Lv = 2;
function Rv(e) {
	return e == "x" ? "y" : "x";
}
var zv = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, Bv = {
	bottom: "x",
	top: "x",
	left: "y",
	right: "y"
};
function Vv(e) {
	return Bv[e];
}
function Hv(e) {
	switch (e) {
		case "left": return "right";
		case "right": return "left";
		case "top": return "bottom";
		case "bottom": return "top";
		default: throw Error("Invalid axis orient: " + e);
	}
}
function Uv(e) {
	let t = e.placement === "inside" ? Hv(e.orient) : e.orient;
	return {
		tickSide: t,
		anchor: +(t == "bottom" || t == "left"),
		offsetDirection: t == "bottom" || t == "right" ? 1 : -1
	};
}
function Wv(e) {
	return !e || e.axisProps.placement === "inside" ? 0 : Math.max(e.getPerpendicularSize() + (e.axisProps.offset ?? 0), 0);
}
var Gv = class extends yv {
	#e;
	#t;
	#n;
	#r;
	#i = !1;
	#a = !1;
	constructor(e, t, n, r, i, a) {
		let o = Vv(e.orient), s = i.getScaleResolution(o), c = s.isZoomable(), l = s.hasConfiguredZoomExtent(), u = wv(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), d = Vc(i.getConfigScopes(), "text", void 0), f = {
			...u,
			...e
		}, p = t == "locus", m = {
			...u,
			...$v(t, f),
			...e,
			...p ? Qv(f) : {}
		};
		if (m.labelSqueeze && s.getResolvedScaleType() !== "band") throw Error("Axis labelSqueeze requires a band scale.");
		let h = p ? ay(m, t, d, c, l) : iy(m, t, c, l, a?.labelClipPolicy ?? "pixel", d), g = m.domain && s.hasGroupingGaps();
		if (g) {
			let e = ["band", "point"].includes(s.getResolvedScaleType()), n = h.layer[0];
			h.layer[0] = {
				name: "domain",
				layer: [{
					...n,
					name: "continuous",
					transform: [{
						type: "filter",
						expr: "!domainGapsEnabled"
					}]
				}, {
					...n,
					name: "groups",
					data: { lazy: {
						type: "scaleGroups",
						channels: [o]
					} },
					transform: [{
						type: "filter",
						expr: kv
					}],
					mark: {
						...n.mark,
						clamp: o
					},
					encoding: {
						[o]: {
							field: o + "Start",
							type: t,
							band: 0,
							...e ? {} : { [Mr]: o + "2" }
						},
						[o + "2"]: {
							field: o + "End",
							band: +!!e,
							...e ? {} : { [Mr]: o }
						}
					}
				}]
			};
		}
		if (super(h, n, r, i, `axis_${e.orient}`, a), this.labelClipPolicy = a?.labelClipPolicy ?? "pixel", this.axisProps = m, this.#e = qv(m), this.#t = this.paramRuntime.allocateSetter(Ov, this.#e), g) {
			let e = this.paramRuntime.allocateSetter(kv, !1);
			this.#n = () => {
				let t = s.getMappingRef();
				e(Pt(t.get())), this.registerDisposer(this.paramRuntime.effect([t], () => e(Pt(t.get()))));
			};
		}
		W(this, { skipSubtree: !0 }), tr(this, { skipSubtree: !0 });
	}
	configurePostScaleParams() {
		super.configurePostScaleParams(), this.#n?.(), this.#n = void 0;
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof Z && e.name === Ev);
		e instanceof Z && (this.#r = e), this.axisProps.labels && this.#r && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#s()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return Bv[this.axisProps.orient] == "x" ? new Gn(t, e) : new Gn(e, t);
	}
	getPerpendicularSize() {
		return this.#e;
	}
	isPickingSupported() {
		return !1;
	}
	#o() {
		this.#a || (this.#a = !0, queueMicrotask(() => {
			this.#a = !1, this.#c();
		}));
	}
	#s() {
		if (this.#i) return;
		let e = this.#r?.getCollector();
		e && (this.#i = !0, this.registerDisposer(e.observe(() => this.#o())), e.completed && this.#o());
	}
	#c() {
		let e = Vv(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !Kv(t.getScale())) return;
		let n = Zv(this.axisProps, this.#r);
		if (n === void 0) return;
		let r = qv(this.axisProps, n);
		r >= this.#e + Lv && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function Kv(e) {
	let t = e.domain();
	return P(e.type) ? t.length >= 2 && t.every((e) => Number.isFinite(Number(e))) && t.some((e) => Number(e) !== Number(t[0])) : t.length > 0;
}
function qv(e, t) {
	let n = Jv(e);
	return e.labels && (n += t ?? Yv(e)), Xv(e, n);
}
function Jv(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function Yv(e) {
	return Vv(e.orient) == "x" ? e.labelFontSize : Iv;
}
function Xv(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function Zv(e, t) {
	let n = t?.getCollector();
	if (!n?.completed) return;
	let r = 0;
	n.visitData((e) => {
		r = Math.max(r, Number(e[Av]) || 0);
	});
	let i = t.mark, a = i.fontMeasurement.getHeight(Number(i.properties.size)), o = ml({
		width: r,
		height: a
	}, e.labelAngle, Vv(e.orient) == "x" ? "vertical" : "horizontal");
	return Math.ceil(o);
}
function Qv(e) {
	switch (Uv(e).tickSide) {
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
function $v(e, t) {
	let n = Uv(t).tickSide, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
	switch (n) {
		case "left":
			i = "right";
			break;
		case "right":
			i = "left";
			break;
		case "top":
		case "bottom": Math.abs(o) > 30 ? (i = o > 0 == (n == "bottom") ? "left" : "right", a = "middle") : a = n == "top" ? "alphabetic" : "top";
	}
	return {
		labelAlign: i,
		labelAngle: o,
		labelBaseline: a
	};
}
function ey(e, t) {
	let n = t.labelAngle % 90 == 0, r = t.labelOverlap;
	if (r === void 0) return ry(e) && n ? "auto" : !1;
	if (r === !1) return !1;
	if (n) return r === !0 ? "parity" : r;
	throw Error("Axis label overlap removal requires an axis-aligned label angle.");
}
function ty(e, t, n) {
	let r = t.labelAngle % 90 == 0, i = t.labelFlush;
	if (i === void 0) return Vv(t.orient) == "x" && ry(e) && !n && r ? 1 : !1;
	if (i === !1) return !1;
	if (!ry(e)) throw Error("Axis label flushing requires a quantitative, index, or locus axis.");
	if (r) return i === !0 ? 1 : i;
	throw Error("Axis label flushing requires an axis-aligned label angle.");
}
function ny(e, t, n, r) {
	return t.labelFlush !== !1 && Vv(t.orient) == "x" && ry(e) && t.labelAngle % 90 == 0 && n && r;
}
function ry(e) {
	switch (e) {
		case "quantitative":
		case "index":
		case "locus": return !0;
		case "nominal":
		case "ordinal": return !1;
		default: throw Error("Invalid axis field type: " + e);
	}
}
function iy(e, t, n, r, i = "pixel", a = {}, o) {
	let s = e, c = oy(s.labelFont, s.labelFontStyle, s.labelFontWeight, s.labelFontSize, a), l = !s.labelSqueeze && ey(t, s), u = ty(t, s, n), d = ny(t, s, n, r), f = !!o || !!l || u !== !1 || d, p = Vv(s.orient), m = Rv(p), { anchor: h, offsetDirection: g, tickSide: _ } = Uv(s), v = () => ({
		field: "value",
		type: t
	}), y = () => {
		let e = [{
			type: "measureText",
			field: "label",
			as: Av,
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
				as: Nv,
				fontSize: t.size,
				font: t.font,
				fontStyle: t.fontStyle,
				fontWeight: t.fontWeight
			});
		}
		return f && e.push({
			type: "axisLabelLayout",
			channel: p,
			labelWidth: Av,
			labelFontSize: c.size,
			labelAngle: s.labelAngle,
			labelAlign: s.labelAlign,
			labelBaseline: s.labelBaseline,
			labelFlush: u,
			labelFlushZoomExtent: d,
			labelFlushOffset: s.labelFlushOffset ?? 0,
			labelOffset: Mv,
			labelOverlap: l,
			labelSeparation: s.labelSeparation ?? 2,
			labelVisible: jv,
			...o ? {
				chromLabelWidth: Nv,
				chromLabelAlign: o.align,
				chromLabelPadding: o.padding,
				chromLabelSpacing: Fv
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
			name: Dv,
			transform: s.labels ? y() : void 0,
			encoding: { [p]: v() },
			layer: []
		};
		s.ticks && e.layer.push({
			name: "ticks",
			mark: {
				type: "rule",
				clip: !1,
				clamp: p,
				strokeDash: s.tickDash,
				strokeCap: s.tickCap,
				color: s.tickColor,
				size: s.tickWidth
			},
			encoding: {
				[m]: { value: h },
				[m + "2"]: { value: { expr: `${h} - ${s.tickSize} / ${Ov} * ${h ? 1 : -1}` } }
			}
		}), s.labels && e.layer.push({
			name: Ev,
			transform: f ? [{
				type: "filter",
				expr: `datum.${jv}`
			}] : void 0,
			mark: {
				type: "text",
				clip: i === "anchor" && "never",
				cullByVisibleRange: i === "anchor" ? p : void 0,
				...s.labelSqueeze ? {
					squeeze: !0,
					flushX: !1,
					flushY: !1
				} : {},
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
				[p]: {
					...v(),
					...s.labelSqueeze ? { band: 0 } : {}
				},
				...s.labelSqueeze ? { [p + "2"]: {
					...v(),
					band: 1
				} } : {},
				...u !== !1 || d ? { [p + "Offset"]: {
					field: Mv,
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
function ay(e, t, n = {}, r = !0, i = !1) {
	let a = e, o = oy(a.chromLabelFont, a.chromLabelFontStyle, a.chromLabelFontWeight, a.chromLabelFontSize, n), s = Vv(a.orient), c = Rv(s), { anchor: l, tickSide: u } = Uv(a), d = {
		textStyle: o,
		align: u == "right" ? "left" : a.chromLabelAlign,
		padding: Pv
	}, f = iy({
		...e,
		...Qv(e)
	}, t, r, i, "pixel", n, e.chromLabels ? d : void 0);
	if (e.chromTicks || e.chromLabels) {
		let n = {
			name: Tv,
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
				[c + "2"]: { expr: `${l} - ${a.chromTickSize} / ${Ov} * ${l ? 1 : -1}` },
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
function oy(e, t, n, r, i) {
	return {
		font: e ?? i.font,
		fontStyle: t ?? i.fontStyle,
		fontWeight: n ?? i.fontWeight,
		size: r ?? i.size
	};
}
//#endregion
//#region ../core/src/view/interactionRouting.js
function sy(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function cy(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region ../core/src/utils/ringBuffer.js
var ly = class {
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
function uy(e, t) {
	switch (e.deltaMode) {
		case 0: return e.deltaY;
		case 1: return e.deltaY * 16;
		case 2: return e.deltaY * t;
		default: throw Error("Unknown wheel delta mode: " + e.deltaMode);
	}
}
function dy(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function fy(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function py(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function my(e) {
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
function hy({ onMove: e, onFinish: t, onRelease: n, hoverContext: r }) {
	let i = !0, a = (a) => i ? (i = !1, document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", o), t?.(), r?.resumeHoverTracking(a), a && n?.(a), !0) : !1, o = (e) => a(e);
	return r?.suspendHoverTracking(), document.addEventListener("mousemove", e), document.addEventListener("mouseup", o), () => a(void 0);
}
//#endregion
//#region ../core/src/view/layout/point.js
var gy = class e {
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
}, _y = 0, vy = /* @__PURE__ */ new WeakMap(), yy = ky(), by = 6;
function xy() {
	_y = performance.now();
}
function Sy() {
	return performance.now() - _y < 50;
}
function Cy(e) {
	vy.get(e)?.smoother?.stop();
}
function wy(e) {
	return function(...t) {
		return xy(), e(...t);
	};
}
function Ty(e, t, n, r, i, { lockAxis: a = !1 } = {}) {
	n = wy(n);
	let o = Ay(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, a = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		o.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = Ey(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = Dy(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - Dy(e.y, r.datum)) * t.height + t.y);
			}
		}
		(Math.abs(i.deltaX) <= Math.abs(i.deltaY) ? n({
			x: s,
			y: c,
			xDelta: 0,
			yDelta: 0,
			zDelta: i.deltaY * a / 300
		}) === !0 : n({
			x: s,
			y: c,
			xDelta: -i.deltaX * a,
			yDelta: 0,
			zDelta: 0
		}) === !0) && i.preventDefault();
	} else if (e.type == "mousedown" && e.mouseEvent.button === 0) {
		o.smoother && o.smoother.stop();
		let t = new ly(30), r = e.mouseEvent;
		r.preventDefault();
		let s = gy.fromMouseEvent(r), c = s, l, u = (e) => (l === "x" ? e.yDelta = 0 : l === "y" && (e.xDelta = 0), n(e));
		return hy({
			onMove: (e) => {
				let n = gy.fromMouseEvent(e);
				if (a && !l) {
					let e = n.subtract(c);
					if (Math.max(Math.abs(e.x), Math.abs(e.y)) < 5) return;
					l = Math.abs(e.x) >= Math.abs(e.y) ? "x" : "y";
				}
				t.push({
					point: n,
					timestamp: performance.now()
				});
				let r = n.subtract(s);
				u({
					x: s.x,
					y: s.y,
					xDelta: r.x,
					yDelta: r.y,
					zDelta: 0
				}), s = n;
			},
			hoverContext: e.target?.context,
			onRelease: () => My(o, t, s, u, i, { minSampleCount: 5 })
		});
	} else if (e.type == "touchgesture") {
		if (!dy(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: a, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && My(o, o.touchPanEventBuffer, o.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), jy(o);
			return;
		}
		o.touchPanPointerCount !== t.pointerCount && (jy(o), o.touchPanPointerCount = t.pointerCount);
		let c = new gy(e.point.x + r, e.point.y + a);
		if (o.touchPanLastPoint = c, t.pointerCount === 1 && (r !== 0 || a !== 0) && o.touchPanEventBuffer.push({
			point: c,
			timestamp: performance.now()
		}), r === 0 && a === 0 && s === 0) return;
		o.smoother?.stop(), n({
			x: e.point.x,
			y: e.point.y,
			xDelta: r,
			yDelta: a,
			zDelta: s
		});
	}
}
function Ey(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = Dy(r.x, n.datum) * t.width + t.x, s = (1 - Dy(r.y, n.datum)) * t.height + t.y, c = Dy(r.x2, n.datum) * t.width + t.x, l = (1 - Dy(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, by) : by, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function Dy(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = Oy(e.channelDef);
	return n + (Number.isFinite(i) ? vr(r, i) : 0);
}
function Oy(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function ky() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new ly(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function Ay(e) {
	if (!e) return yy;
	let t = vy.get(e);
	return t || (t = ky(), vy.set(e, t)), t;
}
function jy(e) {
	e.touchPanEventBuffer = new ly(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function My(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && Ny(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = Zn(i, (e) => {
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
function Ny(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region ../core/src/view/axisGridView.js
var Py = class extends yv {
	constructor(e, t, n, r, i, a) {
		super(Ry(e, t), n, r, i, `axisGrid_${e.orient}`, a), this.axisProps = e, W(this, { skipSubtree: !0 }), tr(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function Fy(e, t) {
	let n = e, r = Vv(n.orient);
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
function Iy(e, t) {
	let n = e, r = Vv(n.orient);
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
function Ly(e, t) {
	let n = e, r = Vv(n.orient);
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
function Ry(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push(Ly(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(Iy(n, t)), n.grid && n.gridOpacity > 0 && r.push(Fy(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[Vv(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region ../core/src/config/titleConfig.js
function zy(e) {
	return G(e.map((e) => e.title));
}
function By(e, t) {
	return Bc(e, t);
}
//#endregion
//#region ../core/src/view/titleView.js
var Vy = {
	start: 0,
	middle: .5,
	end: 1
}, Hy = {
	start: "left",
	middle: "center",
	end: "right"
}, Uy = "group-title", Wy = "group-subtitle";
function Gy(e) {
	return qy({
		subtitleColor: e.color,
		subtitleFont: e.font,
		subtitleFontSize: e.fontSize,
		subtitleFontStyle: e.fontStyle,
		subtitleFontWeight: e.fontWeight
	});
}
function Ky(e) {
	return qy({
		subtitleColor: e.subtitleColor,
		subtitleFont: e.subtitleFont,
		subtitleFontSize: e.subtitleFontSize,
		subtitleFontStyle: e.subtitleFontStyle,
		subtitleFontWeight: e.subtitleFontWeight,
		subtitlePadding: e.subtitlePadding
	});
}
function qy(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function Jy(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = Vy[e.anchor ?? "middle"];
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
		case "left": n = {
			x: 0,
			y: r
		}, t = {
			baseline: "alphabetic",
			angle: -90
		};
	}
	return {
		orientConfig: t,
		xy: n
	};
}
function Yy(e, t = [], n = {}) {
	if (!e) return;
	let r = a(e) ? { text: e } : e;
	if (!r.text) return;
	let i = zy(t), o = By(t, r.style ?? Uy), s = Gy(By(t, Wy)), c = {
		...i,
		...n,
		...o,
		...s,
		...Ky(i),
		...r
	};
	if (c.orient == "none") return;
	let { orientConfig: l } = Jy(c);
	return {
		...i,
		...l,
		...n,
		...o,
		...s,
		...Ky(i),
		...r
	};
}
function Xy(e, t) {
	let n = e.subtitle ? ob(e, t) + (e.subtitlePadding ?? 0) : 0, r = e.offset + (Qy(e.orient) ? n : 0);
	return $y(e.orient, r);
}
function Zy(e, t) {
	let n = ab(e, t) + (e.subtitlePadding ?? 0), r = e.offset + (Qy(e.orient) ? 0 : n);
	return $y(e.orient, r);
}
function Qy(e) {
	switch (e) {
		case "top":
		case "left": return !0;
		case "right":
		case "bottom": return !1;
		default: return !1;
	}
}
function $y(e, t) {
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
		case "left": n.xOffset = -t;
	}
	return n;
}
function eb(e, t) {
	return fl(t.textMetrics, e ?? {});
}
function tb(e, t) {
	return fl(t.textMetrics, lb(e));
}
function nb(e, t) {
	eb(e, t), e.subtitle && tb(e, t);
}
function rb(e, t, n = 1) {
	if (!e || e.reserve === !1 || e.orient == "none" || e.offset < 0) return U.zero();
	let r = ib(e, t), i = Math.ceil(r * n + Math.max(e.offset ?? 0, 0));
	switch (e.orient) {
		case "top": return new U(i, 0, 0, 0);
		case "right": return new U(0, i, 0, 0);
		case "bottom": return new U(0, 0, i, 0);
		case "left": return new U(0, 0, 0, i);
		default: return U.zero();
	}
}
function ib(e, t) {
	let n = ab(e, t);
	if (!e.subtitle) return n;
	let r = ob(e, t);
	return n + (e.subtitlePadding ?? 0) + r;
}
function ab(e, t) {
	let n = eb(e, t), r = sb(e.fontSize, 12);
	return cb(e, e.text, n, r);
}
function ob(e, t) {
	let n = tb(e, t), r = sb(e.subtitleFontSize, 11);
	return cb(e, e.subtitle, n, r);
}
function sb(e, t) {
	return F(e) ? t : e ?? t;
}
function cb(e, t, n, r) {
	let i = F(e.angle) ? 0 : e.angle ?? 0, a = e.orient == "top" || e.orient == "bottom" ? "vertical" : "horizontal";
	return ml(ub(t, n, r), i, a);
}
function lb(e) {
	return {
		font: e.subtitleFont,
		fontStyle: e.subtitleFontStyle,
		fontWeight: e.subtitleFontWeight
	};
}
function ub(e, t, n) {
	return pl(t, typeof e == "string" ? e : String(e.expr), n);
}
function db(e, t, n, r) {
	return {
		type: "text",
		tooltip: null,
		clip: !1,
		...t,
		...n,
		text: r ? e.subtitle : e.text,
		align: e.align ?? Hy[e.anchor ?? "middle"],
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
function fb(e, t) {
	let { xy: n } = Jy(e), r = [{
		name: "title",
		data: { values: [{}] },
		mark: db(e, n, Xy(e, t), !1)
	}];
	return e.subtitle && r.push({
		name: "subtitle",
		data: { values: [{}] },
		mark: db(e, n, Zy(e, t), !0)
	}), r;
}
function pb(e, t, n) {
	let r = n.frame ?? "group";
	if (n.reserve === !1) return r == "bounds" ? t : e;
	if (r == "bounds") return t;
	switch (n.orient) {
		case "top":
		case "bottom": return t.modify({
			x: () => e.x,
			width: () => e.width
		});
		case "left":
		case "right": return t.modify({
			y: () => e.y,
			height: () => e.height
		});
		default: return e;
	}
}
var mb = class e extends zr {
	#e;
	titleSpec;
	static create(t, n, r, i, a, o, s) {
		let c = Yy(t, n);
		return c ? new e(c, r, i, a, o, s) : void 0;
	}
	constructor(e, t, n, r, i, a) {
		nb(e, t);
		let o = fb(e, t);
		super({ layer: [] }, t, n, r, i, a), this.titleSpec = e, W(this, { skipSubtree: !0 }), tr(this, { skipSubtree: !0 }), this.#e = o.map((e, n) => new Z(e, t, this, r, i + "-" + (e.name ?? n)));
	}
	*[Symbol.iterator]() {
		yield* this.#e;
	}
	getOverhang() {
		return rb(this.titleSpec, this.context);
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.arrange(e, t, n);
			e.popView(this);
		}
	}
}, hb = class extends Z {
	#e;
	#t = K.ZERO;
	#n = K.ZERO;
	#r = K.ZERO;
	#i = 0;
	#a;
	#o = 0;
	#s;
	#c = () => !1;
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
			}, {
				name: "scrollbarVisible",
				value: !1
			}],
			opacity: { expr: "scrollbarVisible ? scrollbarOpacity : 0" },
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
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t, { chrome: !0 }), W(this, { skipSubtree: !0 }), this.config = r, this.#e = t === "horizontal" ? "width" : "height", this.#a = n.anchor ?? "start", this.#s = n.onViewportOffsetChange;
		let i = this.config.scrollbarPadding, a = this.config.scrollbarSize;
		this.#t = t == "vertical" ? new K(() => this.#n.x + this.#n.width - a - i, () => this.#n.y + i + this.scrollOffset, () => a, () => this.#f()) : new K(() => this.#n.x + i + this.scrollOffset, () => this.#n.y + this.#n.height - a - i, () => this.#f(), () => a), this.interpolateViewportOffset = this.#_(), this.registerDisposer(() => {
			this.#c(), this.interpolateViewportOffset.stop();
		}), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#p() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault();
			let r = this.scrollOffset, i = n(e.mouseEvent), a = (e) => {
				let t = this.#p();
				if (t <= 0) return;
				let a = St(n(e) - i + r, 0, t);
				this.interpolateViewportOffset({ x: this.#h(a) });
			};
			this.#c = hy({
				onMove: a,
				hoverContext: this.context
			});
		});
	}
	get viewportOffset() {
		return this.#l(this.#i);
	}
	get contentTranslation() {
		return (this.#a === "end" ? Math.max(0, this.#n[this.#e] - this.#r[this.#e]) : 0) - this.viewportOffset;
	}
	get scrollOffset() {
		return this.#m(this.viewportOffset);
	}
	canScroll() {
		return this.#g() > 0;
	}
	getWheelScroll(e) {
		let t = uy(e, this.#n.height), n = St(this.viewportOffset + t, 0, this.#g());
		if (n !== this.viewportOffset) return () => {
			this.interpolateViewportOffset.stop(), this.setViewportOffset(n, { syncSmoother: !0 }), this.context.animator.requestRender();
		};
	}
	setViewportOffset(e, { notify: t = !0, syncSmoother: n = !1 } = {}) {
		let r = this.#l(e), i = r !== this.#i;
		this.#i = r, n && (i || this.#o !== this.#g()) && (this.interpolateViewportOffset.stop(), this.interpolateViewportOffset = this.#_()), t && this.#s && this.#s(this.viewportOffset);
	}
	#l(e) {
		let t = this.#g(), n = St(e, 0, t);
		return this.#a === "end" ? t - n : n;
	}
	#u() {
		let e = this.#n[this.#e], t = this.#r[this.#e];
		return t > 0 ? Math.min(1, e / t) : 1;
	}
	#d() {
		return Math.max(0, this.#n[this.#e] - 2 * this.config.scrollbarPadding);
	}
	#f() {
		let e = this.#d(), t = this.#u() * e, n = this.config.scrollbarMinLength;
		return Math.min(e, Math.max(n, t));
	}
	#p() {
		return Math.max(0, this.#d() - this.#f());
	}
	#m(e) {
		let t = this.#g(), n = this.#p();
		return t <= 0 || n <= 0 ? 0 : e / t * n;
	}
	#h(e) {
		let t = this.#g(), n = this.#p();
		return t <= 0 || n <= 0 ? 0 : e / n * t;
	}
	#g() {
		return Math.max(0, this.#r[this.#e] - this.#n[this.#e]);
	}
	arrange(e, t, n) {
		super.arrange(e, this.#t, n);
	}
	updateScrollbar(e, t) {
		this.#n = e.flatten(), this.#r = t, this.paramRuntime.setValue("scrollbarVisible", this.canScroll()), this.setViewportOffset(this.viewportOffset, {
			notify: !1,
			syncSmoother: !0
		});
	}
	#_() {
		return this.#o = this.#g(), Zn(this.context.animator, (e) => this.setViewportOffset(e.x), 35, .4, { x: this.viewportOffset });
	}
};
//#endregion
//#region ../core/src/config/viewConfig.js
function gb(e, t) {
	let n = ["cell", ...zc(t?.style)];
	return G(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
//#endregion
//#region ../core/src/view/gridView/viewBackground.js
function _b(e) {
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
function vb(e) {
	if (e && e.stroke && e.strokeWidth !== 0 && e.strokeOpacity !== 0) return {
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
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
//#region ../core/src/view/gridView/legendLayout.js
var yb = 1;
function bb(e, t) {
	let n = (n) => Wv(e[n]) + Hx(t, n);
	return new U(n("top"), n("right"), n("bottom"), n("left"));
}
function xb(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
function Sb(e, t, n, r = 0) {
	let i = n.getPerpendicularSize(), a = n.getOffset(), o = t == "top" || t == "bottom" ? e.width : e.height, s = n.getParallelSize?.() ?? o, c = xb(n.getAnchor?.() ?? "start") * (o - s), l = n.getParallelSize?.() ?? e.height - 2 * a, u = n.getWidth?.() ?? i, d = n.getHeight?.() ?? l;
	if (t == "bottom" || t == "top") {
		let n = t == "bottom" ? e.height + r + a : -i - r - a;
		return e.translate(c, n).modify({
			width: s,
			height: i
		});
	}
	if (t == "left" || t == "right") {
		let n = t == "right" ? e.width + r + a : -i - r - a;
		return e.translate(n, c).modify({
			width: i,
			height: s
		});
	}
	if (Cx.has(t)) {
		let n = t.endsWith("right") ? e.width - u - r - a : r + a, i = t.startsWith("bottom") ? e.height - d - a : a;
		return e.translate(n, i).modify({
			width: u,
			height: d
		});
	}
	throw Error(`Invalid legend orientation: ${t}`);
}
function Cb(e, t, n, r, i, a, o) {
	for (let [s, c] of Object.entries(e)) {
		if (!c.isActive()) continue;
		let e = Sb(n, s, c, Wv(t[s]));
		a(yb, o, () => c.arrange(r, e, i));
	}
}
//#endregion
//#region ../core/src/view/gridView/generatedChromeOverlay.js
function wb(e) {
	W(e, { skipSubtree: !0 }), tr(e, { skipSubtree: !0 });
}
function Tb({ spec: e, context: t, layoutParent: n, dataParent: r, name: i, zindex: a = 1 }) {
	let o = new yv(e, t, n, r, i);
	return wb(o), {
		view: o,
		zindex: a
	};
}
//#endregion
//#region ../core/src/view/gridView/selectionRectSpec.js
var Eb = "intervalDragActive";
function Db({ scaleResolutionSource: e, selectionExpression: t, selection: n, channels: r = Object.keys(n.intervals), brushConfig: i = {} }) {
	let a = { ...i };
	if (delete a.zindex, N.every((e) => !r.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
	let o = r.includes("x") ? r.includes("y") ? !0 : "x" : "y", s = {
		name: "selectionRect",
		domainInert: !0,
		params: [{
			name: Eb,
			value: !1
		}],
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: Ob(t, r)
		}],
		encoding: {},
		layer: []
	};
	r.includes("x") && (s.encoding.x = kb(e, t, "x", 0), s.encoding.x2 = kb(e, t, "x", 1)), r.includes("y") && (s.encoding.y = kb(e, t, "y", 0), s.encoding.y2 = kb(e, t, "y", 1)), s.layer.push({
		name: "selectionRectRect",
		mark: {
			type: "rect",
			style: "selection-brush",
			clip: o,
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
			y: r.includes("y") ? kb(e, t, "y", 1) : { value: 1 },
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
function Ob(e, t) {
	return [e + ".type === 'interval'", ...t.map((t) => {
		let n = `${e}.intervals.${t}`;
		return `${n} != null && ${n}[0] < ${n}[1]`;
	})].join(" && ");
}
function kb(e, t, n, r) {
	return {
		datum: { expr: Ab(t, n, r) },
		type: e.getScaleResolution(n).type,
		title: null
	};
}
function Ab(e, t, n) {
	let r = `${e}.intervals.${t}`;
	return `(${r} != null ? ${r}[${n}] : 0)`;
}
//#endregion
//#region ../core/src/view/gridView/selectionRect.js
function jb({ selectionExpr: e, selectionExpression: t, channels: n, brushConfig: r = {}, context: i, layoutParent: a, dataParent: o, scaleResolutionSource: s, name: c = "selectionRect" }) {
	let l = e() ?? p(n), { zindex: u = 1, ...d } = r;
	return Tb({
		spec: Db({
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
//#region ../core/src/view/viewInteractionListenerTracker.js
var Mb = class {
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
}, Nb = class {
	constructor(e, t, n, r, i = e.view.paramRuntime, a = !0, o) {
		this.host = e, this.#a = t, this.#o = i, this.#e = new Mb(e.view), this.#c(t, n, r, i, a, o), i.getIntervalSelectionState(t), this.#r = i.registerSelectionController(t, this);
	}
	host;
	#e;
	#t = () => !1;
	#n = () => !1;
	#r = () => {};
	#i = [];
	#a;
	#o;
	#s(e, t, n = this.host.captureInteractions) {
		this.#e.add(e, t, n);
	}
	dispose() {
		this.#t(), this.#r(), this.#e.dispose(), this.#i.splice(0).forEach((e) => e());
	}
	contains(e) {
		return this.#n(e);
	}
	clear() {
		this.#o.getIntervalSelectionState(this.#a).clear();
	}
	#c(e, t, n, r, i, a) {
		let o = this.host.view, s = n.encodings ?? ["x"], c = this.host.ramp, l = Object.fromEntries(s.map((t) => {
			let n = o.getScaleResolution(t), r = n?.getResolvedScaleType();
			if (!n || !r || !P(r)) throw Error(`No continuous scale found for interval selection param "${e}" on channel "${t}"! Scale type is "${r ?? "none"}".`);
			return [t, n];
		}));
		for (let e of Object.values(l)) {
			let t = () => this.#t();
			c ? this.#i.push(e.observeMapping(t)) : (e.addEventListener("domain", t), this.#i.push(() => e.removeEventListener("domain", t)));
		}
		let u = s.some((e) => l[e].isZoomable()), d = n.on ?? (u ? {
			type: "mousedown",
			filter: "event.shiftKey"
		} : { type: "mousedown" });
		if (d.type !== "mousedown") throw Error(`Interval selection param "${e}" currently supports only "mousedown" in "on".`);
		let f = "select" in t && typeof t.select == "object" ? t.select : void 0, m = O(d, Ne(r, f, "on")), h = Pb(n.zoom, u, e), g = O(h, Ne(r, f, "zoom")), _ = n.clear, v = O(_, Ne(r, f, "clear")), y = !1, b, x = null, S = (e, t) => Object.fromEntries(s.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), C = r.createExpression(e), w = (t) => {
			if (c && t.intervals[s[0]]) {
				let e = s[0], n = t.intervals[e], [r, i] = c.getDomain(), a = (e) => Math.max(r, Math.min(i, e)), o = C().intervals[e], l = c.getScale();
				if (o && o.every((e, t) => Math.abs(l(a(e)) - l(n[t])) < 1e-12)) return;
				n[0] < n[1] && n[1] === i && (n[1] = Infinity);
			}
			r.setValue(e, t, { intervalGesture: x ? this : void 0 });
		}, T = () => {
			M(C()) && w(p(s));
		}, E = (e) => this.host.getInteractionCoords(e)?.containsPoint(e.x, e.y) ?? !1, D = (t) => this.host.ownsInteraction?.(e, t) ?? !0, k = a;
		if (i) {
			if (!this.host.getSelectionRect || !this.host.setSelectionRect) throw Error("Interval selection hosts must provide a selection rectangle.");
			if (this.host.getSelectionRect()) throw Error("Only one interval selection per container is currently allowed!");
			k = jb({
				selectionExpr: C,
				selectionExpression: e,
				channels: s,
				brushConfig: n.mark,
				context: this.host.context,
				layoutParent: this.host.layoutParent,
				dataParent: o,
				scaleResolutionSource: o
			}), this.host.setSelectionRect(k);
		}
		let ee = k ? (e) => {
			k.view.paramRuntime.setValue(Eb, e);
		} : (e) => c?.setDragActive(e, !!x && !x.translatedRectangle), A = (e, t = this.host.getProjectionCoords(s[0], e)) => {
			let n = {
				x: 0,
				y: 0
			}, r = t.normalizePoint(e.x, e.y, !0);
			if (c) {
				let e = c.getScale(), t = c.horizontal ? r.x : r.y, [i, a] = c.getDomain();
				return n[s[0]] = t === e(i) ? i : t === e(a) ? a : e.invert(t), n;
			}
			for (let e of s) {
				let i = l[e].getScale(), a = e === "x" ? r.x : r.y;
				n[e] = xr(i, a, e === "x" ? t.width : t.height);
			}
			return n;
		}, te = (e, t) => {
			if (c) {
				let n = e.intervals[s[0]], [r, i] = c.getDomain(), a = c.getScale(), o = a(Math.max(r, Math.min(i, n[0]))), l = a(Math.max(r, Math.min(i, n[1])));
				return c.horizontal ? K.create(t.x + Math.min(o, l) * t.width, t.y, Math.abs(o - l) * t.width, t.height) : K.create(t.x, t.y + (1 - Math.max(o, l)) * t.height, t.width, Math.abs(o - l) * t.height);
			}
			let { intervals: n } = e, r = (e) => {
				let r = (r) => {
					let i = n[r]?.[e];
					if (i == null) return e;
					let a = l[r].getScale();
					if (a.type === "index" || a.type === "locus") {
						let o = a.gapMapping(r === "x" ? t.width : t.height);
						if (o) return o.position(i, 0, e === 1 && i > n[r][0]);
					}
					return a(i);
				};
				return t.denormalizePoint(r("x"), r("y"), !0);
			}, i = r(0), a = r(1);
			return K.create(Math.min(i.x, a.x), Math.min(i.y, a.y), Math.abs(a.x - i.x), Math.abs(a.y - i.y));
		}, ne = (e) => {
			let t = C();
			if (!M(t) || Object.values(t.intervals).some((e) => e && e[0] === e[1])) return null;
			let n = te(t, this.host.getProjectionCoords(s[0], e));
			return n.containsPoint(e.x, e.y) ? n : null;
		};
		if (this.#s("mousedown", (t) => {
			if (t.mouseEvent.button != 0 || !E(t.point) || !D(t.point)) return;
			let n = C(), i = this.host.getProjectionCoords(s[0], t.point);
			b = void 0;
			let a = ne(t.point);
			if (a) y = !0;
			else {
				let e = t.point;
				if (M(C()) && (y = !0), !m(t.proxiedMouseEvent)) {
					if (!_ || !M(n)) return;
					b = e;
					return;
				}
			}
			t.stopPropagation();
			let u = {
				start: t.point,
				translatedRectangle: a
			};
			x = u, r.getIntervalSelectionState(e).begin(this, () => this.#t()), ee(!!a), a || T();
			let d = gy.fromMouseEvent(t.mouseEvent).subtract(u.start), f = (e) => {
				let t = gy.fromMouseEvent(e).subtract(d), n;
				if (u.translatedRectangle) {
					let e = t.subtract(u.start), r = u.translatedRectangle.translate(e.x, e.y);
					n = S(A(new gy(r.x, r.y), i), A(new gy(r.x2, r.y2), i));
				} else n = S(A(u.start, i), A(t, i));
				for (let e of s) {
					let t = l[e], r = c ? c.getDomain() : t.zoomExtent, i = u.translatedRectangle ? ie(n[e], r[0], r[1]) : n[e];
					n[e] = (c ? Ml(i, r) : Fb(t, i)) ?? [r[0], r[0]];
				}
				w({
					type: "interval",
					intervals: n
				});
			}, p = r.getIntervalSelectionState(e), h = hy({
				onMove: f,
				hoverContext: o.context,
				onFinish: () => {
					x = null, ee(!1);
				},
				onRelease: () => p.finish(this, !0)
			});
			this.#t = () => {
				let e = h();
				return p.finish(this, !1), e;
			};
		}), this.#e.add("mouseup", (e) => {
			if (!b) return;
			let t = b;
			b = void 0, t.subtract(e.point).length < 2 && T();
		}), this.#s("click", (e) => {
			e.mouseEvent.button == 0 && (y &&= (e.stopPropagation(), !1));
		}, !0), this.#n = (e) => E(e) && D(e) && !!ne(e), _) {
			let e = (e) => v(e.proxiedMouseEvent) && (c ? E(e.point) : this.#n(e.point));
			_.type === "wheel" && this.#s("wheelclaimprobe", (t) => {
				t.wheelIntent !== "scroll" && e(t) && (t.claimWheel(this, { smooth: !1 }), t.stopPropagation());
			}, !0), this.#s(_.type, (t) => {
				e(t) && (this.clear(), t.stopPropagation());
			}, !0);
		}
		let j = (e) => {
			if (e.wheelIntent === "scroll") return !1;
			let t = e.wheelEvent;
			return !!h && g(my(t)) && this.#n(e.point) && t.deltaY !== 0 && Math.abs(t.deltaX) <= Math.abs(t.deltaY) && M(C());
		};
		this.#s("wheelclaimprobe", (e) => {
			j(e) && (e.claimWheel(this, { smooth: !1 }), e.stopPropagation());
		}), this.#s("wheel", (e) => {
			if (!j(e)) return;
			let t = e.wheelEvent, n = C(), r = t.deltaMode ? 120 : 1, i = 2 ** (t.deltaY * r / 300), a = A(e.point), o = { ...n.intervals }, u = !1;
			for (let e of s) {
				let t = o[e];
				if (!t || t.length !== 2) continue;
				let n = l[e], r = n.getScale(), s = c?.getDomain(), d = Yd(r, [...s ? t.map((e) => Math.max(s[0], Math.min(s[1], e))) : t], a[e], i, { onUnsupported: "identity" }), f = s ? Ml(d, s) : Fb(n, d);
				f && (f[0] !== t[0] || f[1] !== t[1]) && (o[e] = f, u = !0);
			}
			u && (w({
				...n,
				type: "interval",
				intervals: o
			}), t.preventDefault(), e.stopPropagation());
		});
	}
};
function Pb(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = Et(r);
	return Ae(i, ["wheel"], `Interval selection param "${n}" currently supports only "wheel" in "zoom".`), i;
}
function Fb(e, t) {
	let n = e.getScale();
	return Ml(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
var Ib = {
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
	selectionLabel: !0,
	tickCount: 5,
	symbolSize: 100,
	symbolOffset: 0,
	symbolBaseFillColor: "transparent",
	symbolBaseStrokeColor: "#888",
	titleLimit: 180,
	titleOrient: "top",
	titlePadding: 5
}, Lb = {
	orient: "bottom",
	direction: "horizontal",
	titleOrient: "left",
	spacing: 15,
	offset: 3
}, Rb = {
	"gradient-selection-brush": {
		clip: !1,
		strokeOpacity: 1,
		shadowColor: "white",
		shadowOpacity: 1,
		shadowBlur: 6,
		shadowOffsetX: 0,
		shadowOffsetY: 0
	},
	"track-bottom-legend": Lb,
	"track-bottom": Lb
}, zb = { style: "track-bottom-legend" };
//#endregion
//#region ../core/src/view/legend/gradientLegendBinding.js
function Bb(e) {
	let t = { ...e.select.mark };
	delete t.zindex, delete t.measure;
	for (let [e, n] of Object.entries(t)) F(n) && Object.assign(t, { [e]: { expr: "legendBrushStyle_" + e } });
	return {
		name: "gradientBrush",
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: "legendBrush.active"
		}],
		mark: {
			type: "rect",
			tooltip: !1,
			style: ["selection-brush", "gradient-selection-brush"],
			cursor: t.cursor ?? { expr: "legendCreating ? legendBrushCursor : intervalDragActive ? 'grabbing' : 'move'" },
			...t
		}
	};
}
function Vb(e, t, n, r) {
	let { name: i, runtime: a, component: o } = t, s = t.select, c = n.find((e) => e.name === "gradientRamp"), l = e.getScaleResolution(o), u = e.legendProps.direction === "horizontal";
	for (let [t, n] of Object.entries(s.mark ?? {})) F(n) && e.paramRuntime.registerScopedExpression("legendBrushStyle_" + t, n.expr, a);
	let d = () => {
		let e = l.getDomain().map(Number);
		return [Math.min(e[0], e.at(-1)), Math.max(e[0], e.at(-1))];
	}, f = () => {
		let e = l.getDomain().map(Number);
		if (e.length < 2 || !e.every(Number.isFinite) || e.some((t, n) => n && (t - e[n - 1]) * (e[1] - e[0]) <= 0)) throw Error(`Gradient binding "${i}" requires a strictly monotonic finite domain.`);
		let t = qo(l.getScale(), e[0], e.at(-1), !0);
		if (![
			0,
			.5,
			1
		].every((e) => Number.isFinite(t.invert(e)))) throw Error(`Gradient binding "${i}" requires an invertible numeric mapping.`);
		return t;
	};
	e.paramRuntime.registerParam({
		name: "intervalDragActive",
		value: !1
	}), e.paramRuntime.registerParam({
		name: "legendCreating",
		value: !1
	}), e.paramRuntime.registerParam({
		name: "legendBrushCursor",
		value: u ? "text" : "vertical-text"
	}), e.paramRuntime.registerComputed("legendBrush", () => [a.getParamRef(i), l.getMappingRef()], () => {
		let t = a.findValue(i).intervals[o], n = f(), s = Ga(l.getScale(), e.legendProps.tickCount ?? 5, r, !1), [c, u] = d(), p = (e) => Math.max(c, Math.min(u, e)), m = t ? n(p(t[0])) : 0, h = t ? n(p(t[1])) : 0;
		return {
			active: !!t && t[0] < t[1] && t[0] < u && t[1] > c,
			start: Math.min(m, h),
			end: Math.max(m, h),
			label: t ? t[1] === Infinity ? ">= " + s(t[0]) : s(t[0]) + " to <" + s(t[1]) : ""
		};
	});
	let p = () => {
		let e = c.getCollector();
		if (!e?.completed || !c.coords) return;
		let t = Array.from(e.getData());
		if (!t.length) return;
		let n = c.mark.encoders, r = [t[0], t.at(-1)].flatMap((e) => [c.coords.denormalizePoint(Number(n.x(e)), Number(n.y(e)), !0), c.coords.denormalizePoint(Number(n.x2(e)), Number(n.y2(e)), !0)]), i = r.map((e) => e.x), a = r.map((e) => e.y);
		return K.create(Math.min(...i), Math.min(...a), Math.max(...i) - Math.min(...i), Math.max(...a) - Math.min(...a));
	}, m = new Nb({
		view: e,
		layoutParent: e,
		context: e.context,
		getInteractionCoords: p,
		getProjectionCoords: () => p(),
		ramp: {
			horizontal: u,
			getDomain: d,
			getScale: f,
			setDragActive: (t, n) => {
				e.paramRuntime.setValue("intervalDragActive", t), e.paramRuntime.setValue("legendCreating", n);
			}
		}
	}, i, a.paramConfigs.get(i), s, a, !1);
	e.registerDisposer(() => m.dispose());
}
//#endregion
//#region ../core/src/view/legend/legendBinding.js
function Hb(e) {
	let t = e.getLayoutAncestors().at(-1).getDescendants().filter((e) => !In(e)), n = new Set(t.flatMap((e) => Object.values(e.resolutions.legend)));
	for (let e of n) e.selectionBindings.clear();
	let r = Array.from(n).flatMap((e) => e.getLegendDefs().map((t) => ({
		resolution: e,
		definition: t
	})));
	for (let e of t) for (let t of e.paramRuntime.paramConfigs.values()) {
		if (!("bind" in t) || t.bind !== "legend" || !("select" in t)) continue;
		let n = s(t.select, "legend"), i = n.type === "interval";
		if (!n.encodings) throw Error(`Legend binding "${t.name}" requires one categorical point projection.`);
		let a = n.encodings[0], o = e.getScaleResolution(a), c = r.filter(({ definition: e }) => (e.channel === a || a in (e.symbolChannels ?? {})) && e.view.getScaleResolution(a) === o);
		if (!o || (i ? o.type !== "quantitative" || !P(o.getResolvedScaleType()) : !["nominal", "ordinal"].includes(o.type) || !I(o.getResolvedScaleType())) || !c.length) throw Error(`Legend binding "${t.name}" requires an unambiguous ${i ? "quantitative gradient" : "categorical symbol"} legend in its declaring scope.`);
		let l = {
			name: t.name,
			runtime: e.paramRuntime,
			component: a,
			select: n
		}, u = l.runtime.getParamRef(l.name);
		for (let { resolution: e, definition: r } of c) {
			if (r.type !== (i ? "gradient" : "symbol")) throw Error(`Legend binding "${t.name}" requires the corresponding legend kind.`);
			if (i) {
				let e = r.view.getEncoding()[a];
				if (!e || !("field" in e) || "condition" in e || e.type !== "quantitative") throw Error(`Legend binding "${t.name}" requires an unconditional quantitative field.`);
			}
			let o = e.selectionBindings.get(r.scaleResolution);
			if (o) {
				if (o.runtime.getParamRef(o.name) !== u) throw Error(`A legend cannot bind competing selections "${o.name}" and "${t.name}".`);
				if (!On(i ? o.select : o.select.clear, i ? n : n.clear) || i && !Ub(o, l)) throw Error(`Shared legend binding "${t.name}" has conflicting ${i ? "interaction" : "clear"} settings.`);
			} else e.selectionBindings.set(r.scaleResolution, l);
		}
	}
}
function Ub(e, t) {
	let n = e.select;
	return Object.values(n.mark ?? {}).filter(F).every((n) => {
		let r = e.runtime.createExpression(n.expr).dependencies, i = t.runtime.createExpression(n.expr).dependencies;
		return r.length === i.length && r.every((e, t) => e === i[t]);
	});
}
function Wb(e, t) {
	if (t.type !== "click" || t.markHit !== null || t.target && In(t.target)) return;
	let { shiftKey: n, ctrlKey: r, altKey: i, metaKey: a } = t.mouseEvent;
	if (!(n || r || i || a)) for (let t of e.getDescendants()) for (let e of Object.values(t.resolutions.legend)) for (let t of e.selectionBindings.values()) {
		let { name: e, runtime: n, select: r } = t;
		r.type === "point" && n.findValue(e).values.size && n.setValue(e, zt(r));
	}
}
function Gb(e, t, n) {
	let { name: r, runtime: i, component: a } = t, o = t.select, s = "legendSelection";
	e.paramRuntime.registerScopedExpression(s, r, i);
	let c = n.find((e) => e.name === "entries");
	for (let e of n) {
		if (!["symbols", "labels"].includes(e.name)) continue;
		let t = e.name === "labels", n = t ? "legendCategory" : a, r = e.mark.encoding;
		t && (r[n] = {
			field: "value",
			type: "nominal",
			resolutionChannel: a,
			domainInert: !0
		}, e.mark.nonvisualInputs.add(n));
		for (let e of t ? ["opacity"] : ["fillOpacity", "strokeOpacity"]) {
			let t = r[e] ?? { value: 1 }, i = t.value;
			r[e] = {
				...t,
				condition: {
					param: s,
					project: { [a]: n },
					value: i
				},
				value: F(i) ? { expr: `(${i.expr}) * 0.35` } : i * .35
			};
		}
	}
	let l = (e) => {
		let t;
		if (e.markHit !== void 0) {
			if (e.markHit?.mark !== c.mark) return;
			t = e.markHit.datum;
		} else {
			let n = c.getCollector();
			if (!n?.completed) return;
			let r = e.point.x - c.coords.x, i = e.point.y - c.coords.y;
			if (t = Iterator.from(n.getData()).find((e) => r >= e.symbolX && r <= e.symbolX + e.entryWidth && i >= e.entryY && i <= e.entryY + e.entryHeight), !t) return;
		}
		return e.stopPropagation(), t;
	};
	if (e.addInteractionListener("click", (e) => {
		let t = l(e);
		t && i.setValue(r, x(i.findValue(r), t.value, !!o.toggle && e.mouseEvent.shiftKey));
	}), o.clear) {
		let t = o.clear, n = O(t);
		e.addInteractionListener(t.type, (e) => {
			l(e) && n(e.proxiedMouseEvent) && i.setValue(r, zt(o));
		});
	}
}
//#endregion
//#region ../core/src/view/legendView.js
var Kb = "_legendLabelWidth", qb = "_legendSymbolSize", Jb = "_legendStrokeWidth", Yb = 200, Xb = 256, Zb = 4, Qb = 40, $b = 2, ex = {
	fillOpacity: 0,
	shadowOpacity: 0,
	strokeOpacity: 0
};
function tx(e) {
	return {
		fill: e.backgroundFill,
		fillOpacity: e.backgroundFill ? e.backgroundFillOpacity ?? 1 : 0,
		stroke: e.backgroundStroke,
		strokeWidth: e.backgroundStrokeWidth,
		strokeOpacity: e.backgroundStroke ? e.backgroundStrokeOpacity ?? 1 : 0,
		shadowOpacity: 0
	};
}
function nx(e, t) {
	let n = e.title;
	if (!n) return;
	let r = e.titleFontSize ?? 11, i = e.titlePadding ?? 5, a = sx(e), o = Math.ceil(bx(e, t)) + i;
	return {
		name: "title",
		width: a ? o : void 0,
		height: a ? { grow: 1 } : r + i,
		view: ex,
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
			x: ox(e) == "right" && o > 0 ? i / o : 0,
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
function rx(e, t, n, r = []) {
	let i = nx(e, n), a;
	return a = i ? ox(e) == "bottom" ? { vconcat: [t, i] } : ox(e) == "left" ? { hconcat: [i, t] } : ox(e) == "right" ? { hconcat: [t, i] } : { vconcat: [i, t] } : { vconcat: [t] }, {
		name: "legend_" + (e.orient ?? "right"),
		config: { mark: { tooltip: null } },
		padding: e.padding,
		resolve: { scale: Object.fromEntries(r.map((e) => [e, "forced"])) },
		spacing: 0,
		...a
	};
}
function ix(e) {
	return e.direction == "horizontal";
}
function ax(e) {
	return e.orient == "top" || e.orient == "bottom";
}
function ox(e) {
	return e.titleOrient ?? "top";
}
function sx(e) {
	let t = ox(e);
	return t == "left" || t == "right";
}
function cx(e) {
	return e.gradientStrokeColor === void 0 ? 0 : e.gradientStrokeWidth ?? 0;
}
function lx(e) {
	if (e !== void 0) return e == "transparent" ? { value: null } : { value: e };
}
function ux({ channel: e, dataType: t, horizontalPixelScale: n, verticalPixelScale: r, legend: i, symbolStyle: a }) {
	let o = a.encoding ?? {}, s = lx(i.symbolStrokeColor) ?? o.color ?? o.stroke ?? o.fill ?? lx(i.symbolBaseStrokeColor);
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
				buildIndex: !1
			},
			x2: {
				field: "symbolX2",
				type: "quantitative",
				scale: n
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: r
			},
			y2: {
				field: "labelY2",
				type: "quantitative",
				scale: r
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
function dx({ entries: e, binding: t, channel: n, symbolChannels: r = {}, symbolStyle: i = {}, symbolGeometry: a = "point", legend: o, format: s, dataType: c, context: l }) {
	let u = a == "stroke", d = o.labelAlign ?? "left", f = o.labelBaseline ?? "middle", p = o.labelFontSize ?? 10, m = /* @__PURE__ */ new Set([n, ...Object.keys(r)]), h = i.mark?.filled ?? n == "fill", g = new Set(m);
	g.has("color") && g.add(h ? "fill" : "stroke");
	let _ = { ...i.encoding };
	for (let [e, t] of [
		["opacity", o.symbolOpacity],
		["fill", o.symbolFillColor],
		["stroke", o.symbolStrokeColor],
		["size", o.symbolSize],
		["shape", o.symbolType],
		["strokeWidth", o.symbolStrokeWidth]
	]) t !== void 0 && !g.has(e) && (_[e] = e == "fill" || e == "stroke" ? lx(t) : { value: t });
	o.symbolFillColor !== void 0 && !g.has("fill") && !g.has("fillOpacity") && (_.fillOpacity ??= m.has("opacity") ? {
		field: "value",
		type: c,
		resolutionChannel: "opacity",
		domainInert: !0
	} : _.opacity ?? { value: i.mark?.fillOpacity ?? i.mark?.opacity ?? 1 }), i = {
		...i,
		encoding: _
	};
	let v = (e) => m.has(e) || m.has("color"), y = Object.fromEntries([["fill", lx(o.symbolBaseFillColor)], ["stroke", lx(o.symbolBaseStrokeColor)]].filter(([e, t]) => !v(e) && t !== void 0).map(([e, t]) => [e, t])), b = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, x = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, S = [u ? ux({
		channel: n,
		dataType: c,
		horizontalPixelScale: b,
		verticalPixelScale: x,
		legend: o,
		symbolStyle: i
	}) : {
		name: "symbols",
		mark: {
			type: "point",
			clip: !1,
			cullByVisibleRange: !1,
			filled: n == "fill",
			shape: o.symbolType ?? "circle",
			size: o.symbolSize,
			strokeWidth: o.symbolStrokeWidth ?? 1.5,
			...i.mark
		},
		encoding: {
			x: {
				field: "entryX",
				type: "quantitative",
				scale: b,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: x
			},
			[n]: {
				field: "value",
				type: c,
				domainInert: !0
			},
			...y,
			...i.encoding,
			...Object.fromEntries(Object.entries(r).map(([e]) => [e, {
				field: "value",
				type: c,
				domainInert: !0
			}]))
		}
	}];
	return S.push({
		name: "labels",
		mark: {
			type: "text",
			clip: !1,
			cullByVisibleRange: !1,
			align: d,
			baseline: f,
			color: o.labelColor,
			font: o.labelFont,
			fontStyle: o.labelFontStyle,
			fontWeight: o.labelFontWeight,
			size: p
		},
		encoding: {
			x: {
				field: "labelX",
				type: "quantitative",
				scale: b,
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: x
			},
			text: { field: "label" }
		}
	}), t && S.push({
		name: "entries",
		mark: {
			type: "rect",
			tooltip: !1,
			cursor: "pointer",
			clip: !1,
			fillOpacity: 0,
			strokeWidth: 0,
			cullByVisibleRange: !1
		},
		encoding: {
			x: {
				field: "symbolX",
				type: "quantitative",
				scale: b,
				buildIndex: !1
			},
			x2: {
				expr: "datum.symbolX + datum.entryWidth",
				type: "quantitative",
				scale: b
			},
			y: {
				field: "entryY2",
				type: "quantitative",
				scale: x
			},
			y2: {
				expr: "datum.entryY2 - datum.entryHeight",
				type: "quantitative",
				scale: x
			}
		}
	}), rx(o, {
		name: "legendBody",
		height: { grow: 1 },
		view: ex,
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
		data: e ? { values: e } : { lazy: {
			type: "legendEntries",
			channel: n,
			dataType: c,
			format: s,
			values: o.values,
			sizeMode: u ? "strokeWidth" : "area"
		} },
		transform: [
			{
				type: "truncateText",
				field: "label",
				limit: o.labelLimit,
				fontSize: p,
				font: o.labelFont,
				fontStyle: o.labelFontStyle,
				fontWeight: o.labelFontWeight
			},
			{
				type: "measureText",
				field: "label",
				as: Kb,
				fontSize: p,
				font: o.labelFont,
				fontStyle: o.labelFontStyle,
				fontWeight: o.labelFontWeight
			},
			{
				type: "packLegendLabels",
				labelWidth: Kb,
				columns: o.columns,
				symbolSize: u ? o.symbolSize : n == "size" ? qb : o.symbolSize,
				symbolStrokeWidth: u ? Jb : o.symbolStrokeWidth,
				labelOffset: o.labelOffset,
				fontSize: p,
				rowPadding: o.rowPadding,
				columnPadding: o.columnPadding,
				symbolOffset: o.symbolOffset,
				yOffset: 0,
				yExtent: { expr: "height" },
				direction: o.direction ?? "vertical"
			}
		],
		layer: S
	}, l, [n, ...Object.keys(r)]);
}
function fx({ channel: e, legend: t, format: n, context: r, binding: i }) {
	let a = ix(t), o = t.gradientThickness ?? 12, s = t.gradientStrokeWidth ?? 0, c = cx(t), l = c > 0, u = t.gradientLength === void 0 ? {
		grow: 1,
		minPx: Qb + c
	} : t.gradientLength + c, d = a ? "center" : t.labelAlign ?? "left", f = a ? "top" : t.labelBaseline ?? "middle", p = t.labelFontSize ?? 10, m = t.labelOffset ?? 4, h = {
		domain: [0, { expr: a ? "height" : "width" }],
		zero: !1,
		nice: !1
	}, g = {
		domain: [0, 1],
		domainTransition: !1,
		zero: !1,
		nice: !1
	}, _ = p, v = _ + m, y = v + Zb, b = y, x = b + o, S = o, C = o + Zb, w = C + m, T = a ? "x" : "y", E = T + "2", D = a ? "y" : "x", O = D + "2", k = a ? b : 0, ee = a ? x : o, A = (e, t, n = !1) => ({
		...typeof e == "string" ? { field: e } : { datum: e },
		type: "quantitative",
		scale: t,
		...n ? { buildIndex: !1 } : {}
	}), te = { lazy: {
		type: "legendGradientTicks",
		channel: e,
		count: t.tickCount ?? 5,
		format: n,
		values: t.values
	} }, ne = [{
		name: "gradientRamp",
		mark: {
			type: "rect",
			clip: !1,
			opacity: t.gradientOpacity,
			...i ? {
				cursor: a ? "text" : "vertical-text",
				tooltip: !1
			} : {}
		},
		encoding: {
			[T]: A(a ? "position0" : "position1", g, T == "x"),
			[E]: A(a ? "position1" : "position0", g),
			[D]: A(k, h, D == "x"),
			[O]: A(ee, h),
			[e]: {
				field: "value",
				type: "quantitative",
				domainInert: !0
			}
		}
	}, {
		name: "gradientGuide",
		data: te,
		layer: [{
			name: "gradientTicks",
			mark: {
				type: "rule",
				clip: !1
			},
			encoding: {
				[T]: A("position", g, T == "x"),
				[E]: A("position", g),
				[D]: A(a ? v : S, h, D == "x"),
				[O]: A(a ? y : C, h)
			}
		}, {
			name: "gradientLabels",
			transform: [{
				type: "truncateText",
				field: "label",
				limit: t.labelLimit,
				fontSize: p,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight
			}, {
				type: "measureText",
				field: "label",
				as: Kb,
				fontSize: p,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight
			}],
			mark: {
				type: "text",
				clip: !1,
				align: d,
				baseline: f,
				color: t.labelColor,
				font: t.labelFont,
				fontStyle: t.labelFontStyle,
				fontWeight: t.labelFontWeight,
				size: p
			},
			encoding: {
				[T]: A("position", g, T == "x"),
				[D]: A(a ? _ : w, h, D == "x"),
				text: { field: "label" }
			}
		}]
	}];
	i && ne.push({
		...Bb(i),
		encoding: {
			[T]: {
				datum: { expr: a ? "legendBrush.start" : "legendBrush.end" },
				type: "quantitative",
				scale: g
			},
			[E]: {
				datum: { expr: a ? "legendBrush.end" : "legendBrush.start" },
				type: "quantitative",
				scale: g
			},
			[D]: A(k, h),
			[O]: A(ee, h)
		}
	}), l && ne.push({
		name: "gradientBorder",
		data: { values: [{}] },
		mark: {
			type: "rect",
			clip: !1,
			fillOpacity: 0,
			stroke: t.gradientStrokeColor,
			strokeWidth: s
		},
		encoding: {
			[T]: A(0, g, T == "x"),
			[E]: A(1, g),
			[D]: A(k, h, D == "x"),
			[O]: A(ee, h)
		}
	});
	let j = {
		name: "gradientBody",
		padding: c / 2,
		width: a ? u : void 0,
		height: a ? { grow: 1 } : u,
		view: ex,
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
		data: { lazy: {
			type: "legendGradient",
			channel: e,
			count: Xb
		} },
		layer: ne
	}, re = {
		name: "gradientSelectionFeedback",
		height: 20,
		data: { values: [{}] },
		transform: [{
			type: "formula",
			expr: "legendBrush.label",
			as: "label"
		}, {
			type: "truncateText",
			field: "label",
			limit: { expr: "width" },
			fontSize: p,
			font: t.labelFont,
			fontStyle: t.labelFontStyle,
			fontWeight: t.labelFontWeight
		}],
		mark: {
			type: "text",
			align: "left",
			baseline: "middle",
			size: p,
			color: t.labelColor,
			font: t.labelFont,
			fontStyle: t.labelFontStyle,
			fontWeight: t.labelFontWeight
		},
		encoding: {
			x: { value: 0 },
			y: { value: .5 },
			text: { field: "label" }
		}
	};
	return rx(t, i && t.selectionLabel !== !1 ? {
		vconcat: [j, re],
		spacing: 0,
		resolve: { scale: { [e]: "forced" } }
	} : j, r, [e]);
}
var px = class extends zr {
	#e = [];
	#t;
	#n;
	#r;
	#i;
	#a;
	constructor(e, t, n, r, i, a, o, s) {
		super({ layer: [] }, a, o, s, "legend_region_" + e), this.needsAxes = {
			x: !1,
			y: !1
		}, this.orient = e, this.#i = t, this.#a = n, this.#n = r, this.#t = i, W(this, { skipSubtree: !0 }), tr(this, { skipSubtree: !0 });
	}
	addLegendView(e) {
		e.layoutParent = this, this.#e.push(e);
	}
	#o() {
		return this.#e.filter((e) => e.isActive());
	}
	prepareLayoutSize(e, t) {
		if (!this.#n) return !1;
		let n = this.#o(), r = this.#a == "horizontal", i = n.map((e) => {
			let t = e.getSize();
			return r ? t.width : t.height;
		}), a = Xn(i, r ? e : t, { spacing: this.#t }), o = !mx(this.#r, a);
		return this.#r = a, o;
	}
	[Symbol.iterator]() {
		return this.#e.values();
	}
	isActive() {
		return this.#e.some((e) => e.isActive());
	}
	getSize() {
		let e = this.#o();
		if (!e.length) {
			let e = {
				px: 0,
				grow: 0
			};
			return new Gn(e, e);
		}
		let t = this.#a == "horizontal", n = e.map((e) => e.getSize()), r = n.map((e) => t ? e.width : e.height), i = n.map((e) => t ? e.height : e.width), a = (e) => Fn([...e, {
			px: this.#t * Math.max(0, e.length - 1),
			grow: 0
		}]), o = this.#n && this.#r && this.#r.length > 1, s = o ? {
			grow: 1,
			minPx: 0
		} : a(r), c = o ? a(this.#r.map((e) => Un(e.map((e) => i[e])))) : Un(i);
		return t ? new Gn(s, c) : new Gn(c, s);
	}
	getPerpendicularSize() {
		let e = this.getSize();
		return Rn(this.orient == "top" || this.orient == "bottom" ? e.height : e.width);
	}
	getWidth() {
		return Rn(this.getSize().width);
	}
	getHeight() {
		return Rn(this.getSize().height);
	}
	getOffset() {
		return Math.max(0, ...this.#o().map((e) => e.getOffset()));
	}
	getAnchor() {
		return this.#i;
	}
	getParallelSize() {
		if (!this.#o().length) return 0;
		if (this.#n && this.#r && this.#r.length > 1) return;
		let e = this.getSize(), t = this.orient == "top" || this.orient == "bottom" ? e.width : e.height;
		if (Kn(t) !== void 0) return Rn(t);
	}
	isPickingSupported() {
		return this.#e.some((e) => e.isPickingSupported());
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		e.pushView(this, t);
		let r = this.#o(), i = this.#a == "horizontal", a = r.map((e) => {
			let t = e.getSize();
			return i ? t.width : t.height;
		}), o = r.map((e) => {
			let t = e.getSize();
			return i ? t.height : t.width;
		}), s = this.#r ?? [r.map((e, t) => t)], c = s.map((e) => Un(e.map((e) => o[e]))), l = Vn(c, i ? t.height : t.width, { spacing: this.#t });
		for (let [c, u] of s.entries()) {
			let s = u.map((e) => a[e]), d = i ? t.width : t.height, f = s.every((e) => Kn(e) !== void 0) ? Wn(s, { spacing: this.#t }) : d, p = xb(this.#i) * Math.max(0, d - f), m = Vn(s, f, {
				spacing: this.#t,
				offset: p,
				devicePixelRatio: e.getDevicePixelRatio()
			}), h = l[c];
			for (let [a, s] of u.entries()) {
				let c = r[s], l = m[a], u = Rn(o[s]), d = c.legendProps.title != null && ox(c.legendProps) == "top" ? 0 : Math.max(0, (h.size - u) / 2), f = i ? new K(() => t.x + l.location, () => t.y + h.location + d, () => l.size, () => u) : new K(() => t.x + h.location + d, () => t.y + l.location, () => u, () => l.size);
				c.arrange(e, f, n);
			}
		}
		e.popView(this);
	}
	propagateInteraction(e) {
		e.target = this, sy(this, e, () => {
			this.#o().find((t) => t.coords.containsPoint(e.point.x, e.point.y))?.propagateInteraction(e);
		});
	}
};
function mx(e, t) {
	return e?.length == t.length && e.every((e, n) => e.length == t[n].length && e.every((e, r) => e == t[n][r]));
}
var hx = class extends zr {
	#e;
	#t;
	#n;
	#r;
	#i = [];
	#a;
	#o = () => !0;
	#s;
	#c = 0;
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = !1;
	constructor({ entries: e, binding: t, channel: n, symbolChannels: r, symbolStyle: i, symbolGeometry: a, type: o, legend: s, format: c, dataType: l }, u, d, f, p) {
		let m = o == "gradient" ? fx({
			binding: t,
			channel: n,
			legend: s,
			format: c,
			context: u
		}) : dx({
			entries: e,
			binding: t,
			channel: n,
			symbolChannels: r,
			symbolStyle: i,
			symbolGeometry: a,
			legend: s,
			format: c,
			dataType: l,
			context: u
		});
		super(m, u, d, f, "legend_" + (s.orient ?? "right"), p), this.needsAxes = {
			x: !1,
			y: !1
		}, this.#e = t, this.#t = c, this.legendProps = s, this.#a = o ?? "symbol", this.#n = vx(this.#a, this.legendProps), W(this, { skipSubtree: !0 }), tr(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		let e = { ...this.spec };
		delete e.name;
		let t = gb(this.getConfigScopes(), tx(this.legendProps));
		for (let [e, n] of Object.entries({
			background: _b(t),
			backgroundStroke: vb(t)
		})) n && this.#i.push(new Z(n, this.context, this, this, e));
		this.#r = await this.context.createOrImportView(e, this, this, this.getNextAutoName("legend"), void 0, { layoutSizeParams: "force" }), W(this.#r, { skipSubtree: !0 }), tr(this.#r, { skipSubtree: !0 }), this.#e && (this.#a === "gradient" ? Vb : Gb)(this, this.#e, this.getDescendants().filter((e) => e instanceof Z), this.#t), this.#l = [];
		for (let e of this.getDescendants()) e instanceof Z && (e.name === "labels" || e.name === "gradientLabels") && this.#l.push(e);
		this.#l.length > 0 && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#g())), this.#c = this.getStackedParallelSize();
	}
	*[Symbol.iterator]() {
		yield* this.#i, this.#r && (yield this.#r);
	}
	getSize() {
		if (!this.isActive()) return new Gn({
			px: 0,
			grow: 0
		}, {
			px: 0,
			grow: 0
		});
		let e = ix(this.legendProps), t = { px: this.getPerpendicularSize() }, n = this.#p() ? this.#f() : { px: this.getStackedParallelSize() };
		return (e ? new Gn(n, t) : new Gn(t, n)).addPadding(this.getPadding());
	}
	#f() {
		if (!this.#r) return {
			grow: 1,
			minPx: Qb
		};
		let e = this.#r.getSize();
		return ix(this.legendProps) ? e.width : e.height;
	}
	#p() {
		return this.#m() && ix(this.legendProps) == ax(this.legendProps);
	}
	#m() {
		return this.#a == "gradient" && this.legendProps.gradientLength === void 0;
	}
	getPerpendicularSize() {
		return this.#e?.select.type === "interval" && this.legendProps.selectionLabel !== !1 ? ix(this.legendProps) ? this.#n + 20 : Math.max(110, this.#n) : this.#n;
	}
	getOffset() {
		return this.legendProps.offset ?? 0;
	}
	setActivePredicate(e) {
		this.#o = e;
	}
	isActive() {
		return super.isConfiguredVisible() && this.#o();
	}
	getStackedParallelSize() {
		let e = this.#s ?? gx(this.#l);
		return yx(this.legendProps, this.#a, e, this.context) + (this.#e?.select.type === "interval" && this.legendProps.selectionLabel !== !1 && !ix(this.legendProps) ? 20 : 0);
	}
	#h() {
		this.#d || (this.#d = !0, queueMicrotask(() => {
			this.#d = !1, this.#_();
		}));
	}
	#g() {
		for (let e of this.#l) {
			let t = e.getCollector();
			t && !this.#u.has(t) && (this.#u.add(t), this.registerDisposer(t.observe(() => this.#h())), t.completed && this.#h());
		}
	}
	#_() {
		let e = gx(this.#l);
		if (e === void 0) return;
		let t = this.#c;
		this.#s = e;
		let n = _x(this.legendProps, this.#a, e, this.context), r = n >= this.#n + $b, i = this.getStackedParallelSize(), a = Math.abs(i - t) >= $b;
		(r || a) && (r && (this.#n = n), this.#c = i, this.invalidateSizeCache(), this.context.requestLayoutReflow());
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
		return !!this.#e;
	}
	getParentGridChromePolicy() {
		return {
			axes: !1,
			background: !1
		};
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isActive()) {
			e.pushView(this, t);
			for (let r of this.#i) r.arrange(e, t, n);
			this.#r?.arrange(e, t.shrink(this.getPadding()), n), e.popView(this);
		}
	}
	propagateInteraction(e) {
		sy(this, e, () => this.#r?.propagateInteraction(e));
	}
};
function gx(e) {
	let t = 0, n = 0, r = 0, i = !1;
	for (let a of e) {
		let e = a.getCollector();
		if (!e?.completed) return;
		i = !0, e.visitData((e) => {
			t = Math.max(t, Number(e[Kb]) || 0), n = Math.max(n, (Number(e.labelX) || 0) + (Number(e[Kb]) || 0)), r = Math.max(r, Number(e.labelY) || 0);
		});
	}
	return i ? {
		maxWidth: Math.ceil(t),
		maxX: Math.ceil(n),
		maxY: Math.ceil(r)
	} : void 0;
}
function _x(e, t, n, r) {
	let i = ix(e), a = sx(e), o = vx(t, e), s = e.labelOffset ?? 4, c = i ? t == "gradient" ? o : n.maxY + (e.labelFontSize ?? 10) / 2 : t == "gradient" ? (e.gradientThickness ?? 12) + cx(e) + Zb + s + n.maxWidth : n.maxX || Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5) + s + n.maxWidth, l = e.title ? i ? (e.titleFontSize ?? 11) + (a ? 0 : e.titlePadding ?? 5) : bx(e, r) + (a ? e.titlePadding ?? 5 : 0) : 0, u = i === a ? Math.max(c, l) : c + l;
	return Math.ceil(i ? Math.max(o, u) : Math.max(o, u, l));
}
function vx(e, t) {
	return e == "gradient" && ix(t) ? (t.labelFontSize ?? 10) + (t.labelOffset ?? 4) + Zb + (t.gradientThickness ?? 12) + cx(t) + 2 : 0;
}
function yx(e, t, n, r) {
	let i = sx(e), a = e.title ? (i ? bx(e, r) : e.titleFontSize ?? 11) + (e.titlePadding ?? 5) : 0, o = (t) => ix(e) == i ? Math.ceil(a + t) : Math.ceil(Math.max(a, t));
	if (t == "gradient") return o((e.gradientLength ?? Yb) + cx(e));
	if (n) {
		let t = e.labelFontSize ?? 10;
		return o(ix(e) ? n.maxX : n.maxY + t / 2);
	}
	return o(Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5));
}
function bx(e, t) {
	if (!e.title) return 0;
	let n = fl(t.textMetrics, {
		font: e.titleFont,
		fontStyle: e.titleFontStyle,
		fontWeight: e.titleFontWeight
	}), r = e.titleFontSize ?? 11;
	return pl(n, gh(e.title, e.titleLimit, (e, t) => n.measureWidth(e, t), r, "..."), r).width;
}
//#endregion
//#region ../core/src/view/gridView/gridChildLegends.js
var xx = [
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"strokeWidth",
	"shape"
], Sx = /* @__PURE__ */ new Set([
	"backgroundFill",
	"backgroundStroke",
	"gradientStrokeColor",
	"labelColor",
	"titleColor",
	"symbolFillColor",
	"symbolStrokeColor",
	"symbolBaseFillColor",
	"symbolBaseStrokeColor",
	"symbolOpacity"
]), Cx = /* @__PURE__ */ new Set([
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
]), wx = /* @__PURE__ */ new Set([
	"left",
	"right",
	"top",
	"bottom",
	...Cx
]);
function Tx(e) {
	let t = e.legendProps.orient ?? "right";
	return Cx.has(t);
}
function Ex(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.visit((e) => {
		t.has(e) || t.set(e, t.size);
	});
	return t;
}
function Dx(e) {
	return String(e.legend.title ?? e.field ?? e.channel).toLocaleLowerCase();
}
function Ox(e) {
	let t = Ex(e), n = [];
	for (let t of e) for (let e of Object.values(t.resolutions.legend)) for (let r of e.getLegendDefs()) n.push({
		definition: r,
		resolution: e,
		owner: t
	});
	return n.sort((e, n) => (t.get(e.definition.view) ?? 2 ** 53 - 1) - (t.get(n.definition.view) ?? 2 ** 53 - 1) || Dx(e.definition).localeCompare(Dx(n.definition)) || e.definition.channel.localeCompare(n.definition.channel)), n;
}
function kx(e, t) {
	if (e && "condition" in e) {
		let n = B(e.condition);
		for (let e of n) if (w(De(Jt(e, t))) && "value" in e) return { value: e.value };
	}
	return ut(e) ? { value: e.value } : void 0;
}
function Ax(e) {
	return typeof e == "string" || F(e);
}
function jx(e, t, n, r) {
	Ax(n.fill) && !t.has("fill") && (e.fill = { value: n.fill }), Ax(n.stroke) && !t.has("stroke") && (e.stroke = { value: n.stroke }), Ax(n.color) && !t.has("color") && (n.filled ? (!t.has("fill") && !e.fill && (e.fill = { value: n.color }), !t.has("stroke") && !e.stroke && (e.stroke = { value: null }), !t.has("strokeWidth") && !Ax(n.stroke) && r.symbolStrokeColor === void 0 && (e.strokeWidth = { value: 0 })) : (!t.has("stroke") && !e.stroke && (e.stroke = { value: n.color }), !t.has("fill") && !e.fill && (e.fill = { value: n.color }), !t.has("fillOpacity") && r.symbolFillColor === void 0 && (e.fillOpacity = { value: 0 })));
}
function Mx(e, t) {
	return !!It(e.spec.encoding?.[t]);
}
function Nx(e, t, n) {
	[
		"color",
		"fill",
		"stroke"
	].some((e) => !t.has(e) && Mx(n, e)) && !t.has("fill") && (e.fill = { value: Vc(n.getConfigScopes(), "rule", void 0).color ?? "black" });
}
function Px(e, t, n, r) {
	let i = /* @__PURE__ */ new Set([e, ...Object.keys(t)]), a = {
		mark: {},
		encoding: {}
	}, o = n.mark.properties, s = a.encoding, c = a.mark;
	for (let e of [
		"filled",
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"strokeWidth",
		"shape"
	]) o[e] !== void 0 && Object.assign(c, { [e]: o[e] });
	c.shape === void 0 && n.getMarkType() == "rect" && (c.shape = "square"), jx(s, i, o, r), Nx(s, i, n);
	let l = n.spec.encoding?.color, u = o.filled, d = kx(l, n.spec.predicates ?? {});
	d && !i.has("color") && (u ? (s.fill = d, s.stroke = { value: null }, r.symbolStrokeColor === void 0 && (s.strokeWidth = { value: 0 })) : (s.stroke = d, s.fill = d, r.symbolFillColor === void 0 && (s.fillOpacity = { value: 0 })));
	for (let e of xx) {
		if (e == "color" || i.has(e)) continue;
		let t = n.spec.encoding?.[e], r = kx(t, n.spec.predicates ?? {});
		r && (s[e] = r);
	}
	if (e == "size" && n.getMarkType() == "rule") {
		let e = kx(n.mark.encoding.fill, n.spec.predicates ?? {}) ?? s.fill;
		e && (s.color = e);
	}
	return a;
}
function Fx(e) {
	if (!wx.has(e)) throw Error(`Invalid legend orientation "${e}"!`);
}
function Ix(e, t, n) {
	let r = Wt(t.paramRuntime, e.orient, "Reactive legend orient changes are not supported.", n);
	return r !== void 0 && Fx(r), r === e.orient ? e : {
		...e,
		orient: r
	};
}
async function Lx(e, t) {
	let n = e.view, r = [], i = (e, t) => {
		if (!F(e)) return e;
		let n = "__legend_style_" + r.length;
		return r.push({
			name: n,
			expr: e.expr,
			runtime: t
		}), { expr: n };
	}, a = [], o, s = Ix(e.legend, n, (e) => a.push(e)), c = {}, l = {};
	for (let [e, t] of Object.entries(s)) Sx.has(e) ? c[e] = i(t, n.paramRuntime) : l[e] = t;
	let u = Object.assign(Je(n.paramRuntime, l, (e) => {
		if (e.has("disable")) {
			if (!o) throw Error("Legend has not been initialized!");
			o.invalidateSizeCache(), o.context.requestLayoutReflow();
		}
	}, (e) => a.push(e)), c), d = e.scaleResolution.getOrderedMembers()[0].view, f = e.type == "symbol" ? Px(e.channel, e.symbolChannels ?? {}, d, u) : void 0;
	if (f) {
		let e = f.mark;
		for (let [t, n] of Object.entries(e)) e[t] = i(n, d.paramRuntime);
		let t = f.encoding;
		for (let [e, n] of Object.entries(t)) t[e] = {
			...n,
			value: i(n.value, d.paramRuntime)
		};
	}
	o = new hx({
		channel: e.channel,
		type: e.type,
		symbolChannels: e.symbolChannels,
		symbolGeometry: e.symbolGeometry,
		symbolStyle: f,
		legend: u,
		format: e.format,
		dataType: e.dataType,
		binding: e.binding
	}, t.context, t, n);
	for (let e of a) o.registerDisposer(e);
	for (let { name: e, expr: t, runtime: n } of r) o.paramRuntime.registerScopedExpression(e, t, n);
	return await o.initializeChildren(), o;
}
async function Rx(e, t, n, r, i) {
	for (let { definition: a, resolution: o, owner: s } of Ox(t)) {
		if (!r(s, o)) continue;
		let t = await Lx(a, n);
		i && !i(t, s) ? t.disposeSubtree() : zx(e, t, o);
	}
}
function zx(e, t, n) {
	let r = t.legendProps.orient ?? "right", i = e[r];
	if (!i) {
		let { anchor: n, direction: a, wrap: o } = hf(t.layoutParent.getConfigScopes(), r);
		i = new px(r, n, a, o, t.legendProps.spacing ?? 0, t.context, t.layoutParent, t.dataParent), e[r] = i;
	}
	t.setActivePredicate(() => !t.legendProps.disable && n.hasVisibleNonChromeMember()), i.addLegendView(t);
}
function Bx(e, t, n) {
	let r = !1;
	for (let i of Object.values(e)) {
		let e = i.prepareLayoutSize(t, n);
		r ||= e;
	}
	return r;
}
function Vx(e) {
	for (let t of Object.values(e)) t.disposeSubtree();
}
function Hx(e, t) {
	let n = e[t];
	return n?.isActive() ? n.getPerpendicularSize() + n.getOffset() : 0;
}
//#endregion
//#region ../core/src/view/gridView/legendCollection.js
function Ux(e) {
	return Wx(e.getDescendants());
}
function Wx(e) {
	return e.filter((e) => !ur(e) && Object.keys(e.resolutions.legend).length > 0);
}
function Gx(e, t) {
	for (let n of e.getDataAncestors()) {
		let e = n.getConfiguredResolution(t, "legend") ?? n.getConfiguredResolution("default", "legend");
		if (e == "excluded") return;
		if (e == "collected") return n;
	}
}
//#endregion
//#region ../core/src/ruler/rulerDisabled.js
function Kx(e) {
	let { config: t, paramRuntime: n, paramName: r, channels: i } = e, a = F(t.disabled) ? n.createExpression(t.disabled) : Lt(t.disabled ?? !1), o = () => {
		let t = e.disabled;
		e.disabled = !!a(), e.disabled && !t && n.setValue(r, _e(i));
	}, s = a.subscribe(o);
	return o(), s;
}
//#endregion
//#region ../core/src/view/scaleProjection.js
function qx(e, t) {
	return t.length === 1 && (Dg(e.spec) && t[0] === "x" || Og(e.spec) && t[0] === "y");
}
function Jx(e, t, n, r) {
	let i = e.getOrderedMembers().filter(({ view: e }) => !In(e) && !e.getLayoutAncestors().some((e) => e.layoutParent instanceof BS && e.layoutParent.getAnnotationLayer() === e) && e.isVisible() && (!r || e.getLayoutAncestors().includes(r))).map(({ view: e }) => e.coords).filter((e) => e !== void 0 && e.width > 0 && e.height > 0);
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
function Yx(e, t, n) {
	let { view: r } = e, i = t[0];
	return qx(r, t) && r instanceof BS ? r.getTrackPlotGeometry(i)?.content ?? r.coords : e.getProjectionCoords(i, n);
}
//#endregion
//#region ../core/src/ruler/rulerCoordinate.js
function Xx(e, t) {
	return t === "integer" ? !0 : t === "auto" ? e === "index" || e === "locus" : !1;
}
function Zx(e, t, n = "auto") {
	if (e == null) return null;
	let r = t.getResolvedScaleType(), i = e;
	return Xx(r, n) && (i = r === "index" || r === "locus" ? Math.floor(e) : Math.round(e)), r === "locus" && t.toComplex ? t.toComplex(i) : i;
}
//#endregion
//#region ../core/src/ruler/rulerMouseEventController.js
var Qx = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.#t = a.findValue(t), this.#e = new Mb(e.view), this.eventConfig = Et(n.on ?? "mousemove"), Ae(this.eventConfig, ["mousemove", "mousedown"], `Ruler param "${t}" currently supports only "mousemove" and "mousedown" in "on".`), this.eventPredicate = O(this.eventConfig, Ne(a, n, "on")), this.clear = n.clear ?? (this.eventConfig.type === "mousemove" && "mouseleave"), this.disposeDisabled = Kx(this), this.#i();
	}
	#e;
	eventConfig;
	eventPredicate;
	clear;
	disabled = !1;
	dragging = !1;
	#t;
	#n = () => !1;
	#r(e, t, n) {
		this.#e.add(e, (e) => {
			this.disabled || t(e);
		}, n);
	}
	dispose() {
		this.#n(), this.disposeDisabled(), this.#e.dispose();
	}
	#i() {
		this.eventConfig.type === "mousemove" ? this.#a() : this.#o();
	}
	#a() {
		if (this.#r("mousemove", (e) => {
			this.eventPredicate(e.proxiedMouseEvent) && this.#l(this.#s(e.point));
		}), this.clear === "mouseleave") this.#r("mouseleave", (e) => {
			e.pointedViews.has(this.gridChild.view) || this.#c();
		});
		else if (this.clear !== !1) throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave" or false in "clear" for mousemove rulers.`);
	}
	#o() {
		if (this.#r("mousedown", (e) => {
			if (e.mouseEvent.button !== 0 || !this.eventPredicate(e.proxiedMouseEvent)) return;
			e.stopPropagation(), this.dragging = !0;
			let t = Yx(this.gridChild, this.channels, e.point);
			this.#l(this.#s(e.point, t));
			let n = gy.fromMouseEvent(e.mouseEvent).subtract(new gy(e.point.x, e.point.y)), r = (e) => {
				let r = gy.fromMouseEvent(e).subtract(n);
				this.#l(this.#s(r, t));
			};
			this.#n = hy({
				onMove: r,
				onFinish: () => {
					this.dragging = !1;
				},
				onRelease: () => {
					this.clear === "mouseup" && this.#c();
				}
			});
		}), this.clear === "mouseleave") this.#r("mouseleave", (e) => {
			!this.dragging && !e.pointedViews.has(this.gridChild.view) && this.#c();
		});
		else if (this.clear !== !1 && this.clear !== "mouseup") throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave", "mouseup", or false in "clear" for mousedown rulers.`);
	}
	#s(e, t = Yx(this.gridChild, this.channels, e)) {
		let n = _e(this.channels), r = t.normalizePoint(e.x, e.y, !0);
		for (let e of this.channels) {
			let i = this.scaleResolutions[e], a = xr(i.getScale(), e === "x" ? r.x : r.y, e === "x" ? t.width : t.height);
			n.values[e] = Zx(a, i, this.config.snap ?? "auto");
		}
		return n;
	}
	#c() {
		this.paramRuntime.findValue(this.paramName) === this.#t && this.#l(_e(this.channels));
	}
	#l(e) {
		this.disabled || (this.#t = e, this.paramRuntime.setValue(this.paramName, e));
	}
}, $x = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		if (n.on !== void 0) throw Error(`Ruler param "${t}" with source "viewport" must not define "on".`);
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.listeners = [], this.disposeDisabled = Kx(this), this.update(), this.#e();
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
		let e = _e(this.channels);
		for (let t of this.channels) {
			let n = this.scaleResolutions[t], r = n.getScale().invert(.5);
			e.values[t] = Zx(r, n, this.config.snap ?? "auto");
		}
		this.paramRuntime.setValue(this.paramName, e);
	}
};
//#endregion
//#region ../core/src/view/gridView/rulerOverlay.js
function eS({ paramName: e, channels: t, display: n = "line", mark: r = {} }) {
	let { opacity: i, ...a } = r, o = {
		name: "rulerOverlay_" + e,
		domainInert: !0,
		opacity: i ?? (n === "band" ? 1 : .8),
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: aS(e, t)
		}],
		encoding: {},
		layer: []
	};
	if (n === "band") {
		let n = o.encoding;
		for (let r of t) o.encoding[r] = iS(oS(e, r)), n[r + "2"] = iS(sS(e, r));
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
		let i = iS(oS(e, r));
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
function tS({ paramName: e, channels: t, display: n, mark: r, context: i, layoutParent: a, dataParent: o, name: s, expressionRuntime: c }) {
	let l = /* @__PURE__ */ new Map(), u = Tb({
		spec: eS({
			paramName: e,
			channels: t,
			display: n,
			mark: Object.fromEntries(Object.entries(r ?? {}).map(([t, n]) => {
				if (F(n)) {
					let r = "__ruler_" + e + "_" + t;
					return l.set(r, n.expr), [t, { expr: r }];
				}
				return [t, n];
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
function nS({ config: e, scaleResolution: t, ...n }) {
	return tS({
		...n,
		display: rS(t.getResolvedScaleType(), e.snap, e.display),
		mark: e.mark
	});
}
function rS(e, t, n) {
	return n || ((e === "index" || e === "locus") && (t === void 0 || t === "auto" || t === "integer") ? "center" : "line");
}
function iS(e) {
	return {
		datum: { expr: e },
		type: null,
		title: null
	};
}
function aS(e, t) {
	return [e + ".type === 'ruler'", ...t.map((t) => e + ".values." + t + " != null")].join(" && ");
}
function oS(e, t) {
	return `linearize('${t}', ${e}.values.${t})`;
}
function sS(e, t) {
	return oS(e, t) + " + 1";
}
//#endregion
//#region ../core/src/view/gridView/overlayExtent.js
function cS({ extent: e, ownerSpec: t, channels: n, isAligned: r, label: i }) {
	if (e === "view") return "view";
	let a = n[0], o = a === "x" && Dg(t) || a === "y" && Og(t), s;
	if (n.length === 1 ? o ? r(a) || (s = `because its ${a} projections do not align`) : s = `for channel "${a}" in this view` : s = "for multiple channels", s && e === "container") throw Error(`${i} cannot use extent "container" ${s}.`);
	return s ? "view" : "container";
}
//#endregion
//#region ../core/src/view/gridView/gridChild.js
function lS(e) {
	return ur(e) ? [] : e instanceof Z || Tg(e.spec) ? Object.keys(e.resolutions.legend).length > 0 ? [e] : [] : e instanceof yv ? [...Object.keys(e.resolutions.legend).length > 0 ? [e] : [], ...Array.from(e).flatMap((e) => lS(e))] : [];
}
function uS(e) {
	return Dg(e) || Og(e) || kg(e);
}
function dS(e, t) {
	if (!qx(e, t)) return !1;
	let n = t[0], r = e.getScaleResolution(n);
	return r !== void 0 && e.children.every((e) => e.getScaleResolution(n) === r);
}
function fS(e, t, n, r) {
	if (!e) return;
	let i = new Z(e, t.context, t, n, r, { chrome: !0 });
	return W(i, { skipSubtree: !0 }), i;
}
var pS = class {
	#e = [];
	#t;
	#n = !1;
	constructor(e, t, n) {
		this.layoutParent = t, this.view = e, this.#t = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {}, this.scrollbars = {}, this.selectionRect = void 0, this.rulerOverlays = [], this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.coords = K.ZERO, this.plotCoords = K.ZERO;
		let r = e.needsAxes.x || e.needsAxes.y, i = e.getParentGridChromePolicy(), a = e.spec, o = "view" in a ? a.view : void 0;
		if (i.background && (r || o)) {
			let r = gb(e.getConfigScopes(), o);
			this.backgroundZindex = r?.zindex ?? 0, this.backgroundStrokeZindex = r?.strokeZindex, this.background = fS(_b(r), t, e, "background" + n), this.backgroundStroke = fS(vb(r), t, e, "backgroundStroke" + n);
		}
		this.title = e.spec.title ? mb.create(e.spec.title, e.getConfigScopes(), t.context, t, e, "title" + n) : void 0, e.spec.viewportWidth != null && (this.scrollbars.horizontal = new hb(this, "horizontal", { anchor: e.getViewportAnchor("viewportWidth") })), e.spec.viewportHeight != null && (this.scrollbars.vertical = new hb(this, "vertical", { anchor: e.getViewportAnchor("viewportHeight") })), ur(e) || (this.#c(), this.#r()), e.registerDisposer(() => this.#l());
	}
	#r() {
		if (!Tg(this.view.spec)) for (let { owner: e, paramName: t, param: n } of this.#i()) {
			if (!nt(n)) continue;
			let r = n.ruler, i = r.encodings ?? ["x"];
			if (uS(this.view.spec) && (r.source === "viewport" || e !== this.view || !dS(this.view, i))) continue;
			let a = this.#s(t, i);
			r.source === "viewport" ? this.#e.push(new $x(this, t, r, i, a, e.paramRuntime)) : this.#e.push(new Qx(this, t, r, i, a, e.paramRuntime)), r.display !== "none" && (this.#a(e, i, r.extent, `Ruler param "${t}"`) || this.rulerOverlays.push(nS({
				paramName: t,
				channels: i,
				config: r,
				scaleResolution: a[i[0]],
				context: this.layoutParent.context,
				layoutParent: this.layoutParent,
				dataParent: this.view,
				name: "rulerOverlay" + this.#t + "_" + t,
				expressionRuntime: e.paramRuntime
			})));
		}
	}
	*#i() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.view.getDataAncestors()) for (let [n, r] of t.paramRuntime.paramConfigs) e.has(n) || (e.add(n), yield {
			owner: t,
			paramName: n,
			param: r
		});
	}
	#a(e, t, n, r) {
		return cS({
			extent: n,
			ownerSpec: e.spec,
			channels: t,
			isAligned: (t) => e.getScaleResolution?.(t) === this.view.getScaleResolution(t),
			label: r
		}) === "container";
	}
	async #o() {
		if (!this.#n) {
			let e = [...this.selectionRect ? [this.selectionRect] : [], ...this.rulerOverlays];
			await Promise.all(e.map((e) => e.view.initializeChildren())), this.#n = !0;
		}
	}
	#s(e, t) {
		return Object.fromEntries(t.map((t) => {
			let n = this.view.getScaleResolution(t);
			if (!n?.getResolvedScaleType?.()) throw Error(`No scale found for ruler param "${e}" on channel "${t}".`);
			return [t, n];
		}));
	}
	#c() {
		if (!Tg(this.view.spec)) for (let { owner: e, paramName: t, param: n } of this.#i()) {
			if (!("select" in n)) continue;
			let r = s(n.select);
			if (!T(r) || "bind" in n && n.bind === "legend" || e === this.view && uS(e.spec)) continue;
			let i = r.encodings ?? ["x"];
			this.#a(e, i, r.extent, `Interval selection param "${t}"`) || this.#e.push(new Nb(this, t, n, r, e.paramRuntime, !0));
		}
	}
	get context() {
		return this.layoutParent.context;
	}
	getInteractionCoords(e) {
		return this.coords.width > 0 && this.coords.height > 0 ? this.coords : this.view.coords;
	}
	getProjectionCoords(e, t) {
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
		yield* Object.values(this.legends), yield* Object.values(this.gridLines), yield this.view, yield* Object.values(this.scrollbars), this.selectionRect && (yield this.selectionRect.view);
		for (let e of this.rulerOverlays) yield e.view;
	}
	async syncGuideViews(e = {}) {
		this.#u(), await this.#o();
		let { view: t, axes: n, gridLines: r } = this, i = t.getParentGridChromePolicy(), a = (e, t) => {
			let r = e.getAxisProps();
			if (r === null) return;
			let i = { ...r };
			if (i.title === void 0 && (i.title = e.getTitle()), !i.orient && (i.orient = zv[t].find((e) => !n[e]), !i.orient)) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			if (!zv[t].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${t}"!`);
			return i;
		}, o = async (e, r, i) => {
			let o = a(e, r);
			if (o) {
				if (n[o.orient] && !this.allowDuplicateAxes()) throw Error(`An axis with the orient "${o.orient}" already exists!`);
				let a = new Gv(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i, { labelClipPolicy: this.getAxisLabelClipPolicy(r, t) });
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
				...wv(n.getConfigScopes(), {
					channel: t,
					orient: i.orient,
					type: e.scaleResolution.type,
					style: i.style
				}),
				...i
			};
			if (o.grid || o.chromGrid) {
				let t = new Py(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, n);
				r[i.orient] = t, await t.initializeChildren();
			}
		};
		if (i.axes) {
			for (let e of N) {
				if (!t.needsAxes[e]) continue;
				let n = this.getAxisResolutionForAxis(e);
				if (n && await o(n, e, t), t.getConfiguredOrDefaultResolution(e, "axis") != "excluded") {
					let n = t.getAxisResolution(e);
					n && await s(n, e, t);
				}
			}
			if (t instanceof yv) for (let e of [!0, !1]) for (let n of t) for (let [t, r] of Object.entries(n.resolutions.axis)) {
				let i = r.getAxisProps();
				i && !!i.orient === e && await o(r, t, n);
			}
		}
		await Rx(this.legends, e.legendOwners ?? lS(t), this.layoutParent, (e, t) => Gx(e, t.channel) === void 0, e.legendFilter);
	}
	allowDuplicateAxes() {
		return !1;
	}
	getAxisResolutionForAxis(e) {
		return this.view.resolutions.axis[e];
	}
	getActiveAxisCandidate(e) {
		return this.axisCandidates.filter((t) => t.orient === e && t.resolution.isVisible()).at(-1);
	}
	dispose() {
		this.#l(), this.#u();
	}
	#l() {
		for (let e of this.#e) e.dispose();
		this.#e = [];
	}
	#u() {
		for (let e of this.axisCandidates) e.axisView.disposeSubtree();
		for (let e of Object.values(this.gridLines)) e.disposeSubtree();
		Vx(this.legends), this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {};
	}
	getAxisLabelClipPolicy(e, t) {
		let n = t.options.axisLabelClipPolicy?.[e];
		if (n) return n;
		let r = t.getScaleResolution(e)?.getResolvedScaleType();
		return r === "band" || r === "point" || e === "x" && (t.spec.viewportWidth != null || this.layoutParent.spec.viewportWidth != null) || e === "y" && (t.spec.viewportHeight != null || this.layoutParent.spec.viewportHeight != null) ? "anchor" : "pixel";
	}
	getOverhang(e = this.axes) {
		return Ln(bb(e, this.legends).add(this.title?.getOverhang() ?? U.zero()).add(this.view.getOverhang()), this.view.spec.overhang, this.view.getStructuralOverhang());
	}
	prepareLegendLayoutSize(e, t) {
		return Bx(this.legends, e, t);
	}
	getViewOverhang() {
		return Ln(this.view.getOverhang(), this.view.spec.overhang, this.view.getStructuralOverhang());
	}
	getAxisCoords(e = this.coords) {
		return e.shrink(this.getViewOverhang());
	}
	getTitleZindex() {
		return this.title?.titleSpec.zindex ?? 1;
	}
	arrangeTitle(e, t, n, r = this.axes) {
		this.title && this.title.arrange(e, pb(t, t.expand(bb(r, this.legends)), this.title.titleSpec), n);
	}
	getOverhangAndPadding(e = this.axes) {
		return this.getOverhang(e).add(this.view.getPadding());
	}
}, Q = Object.freeze({
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
}), mS = 10;
function hS(e, t, n, r) {
	return Object.fromEntries(e.filter(({ axisProps: { orient: e } }) => {
		switch (e) {
			case "left": return t === 0;
			case "right": return r.getCellIndex(t + 1, n) === void 0;
			case "top": return n === 0;
			case "bottom": return r.getCellIndex(t, n + 1) === void 0;
			default: throw Error("Unknown axis orientation: " + e);
		}
	}).map((e) => [e.axisProps.orient, e]));
}
function gS() {
	let e = [], t = [], n = [], r = /* @__PURE__ */ new WeakMap(), i = (n, r, i) => {
		(n > 0 ? t : e).push({
			zindex: n,
			order: r,
			arrange: i
		});
	}, a = (e) => {
		e.sort((e, t) => e.zindex - t.zindex || e.order - t.order);
		for (let t of e) t.arrange();
	};
	return {
		queueDecoration: i,
		getClipFlags(e) {
			let t = r.get(e);
			return t || (t = Be(e), r.set(e, t)), t;
		},
		queueContent(e, t) {
			n.push({
				zindex: e,
				arrange: t
			});
		},
		arrange() {
			a(e);
			for (let e of n.sort((e, t) => e.zindex - t.zindex)) e.arrange();
			a(t);
		}
	};
}
function _S(e, t, n, r, i = t.axes ?? t.gridChild.axes) {
	let { gridChild: a, viewportCoords: o, viewCoords: s, containerCoords: c } = t, { queueDecoration: l } = r, u = yt(n), d = Mt(o, u), f = a.view.isScrollable(), { background: p } = a;
	p && l(a.backgroundZindex, Q.background, () => p.arrange(e, d, {
		...n,
		clipRect: void 0
	}));
	let { view: m, gridLines: h, backgroundStroke: g, title: _, selectionRect: v, rulerOverlays: y } = a, b = t.axes ?? a.axes, { all: x, any: S } = r.getClipFlags(m), C = x || f, w = S || f;
	for (let t of Object.values(h)) l(t.axisProps.zindex ?? 0, Q.grid, () => t.arrange(e, o, n));
	let T = C ? Ot(u, at(d, x || !!a.scrollbars.horizontal, x || !!a.scrollbars.vertical)) : n.clip;
	r.queueContent(m.getZindex(), () => m.arrange(e, s, C ? {
		...n,
		clipRect: T?.rect,
		clip: T
	} : n)), g && l(yS(a.backgroundStrokeZindex, w), Q.backgroundStroke, () => g.arrange(e, d, {
		...n,
		clipRect: void 0
	}));
	for (let [t, r] of Object.entries(b)) {
		let i = t == "left" || t == "right" ? "vertical" : "horizontal", c = a.scrollbars[i], u = bS(c ? o.modify(i == "vertical" ? {
			y: () => s.y,
			height: s.height
		} : {
			x: () => s.x,
			width: s.width
		}) : a.getAxisCoords(o), t, r), d = yt(n), f = d?.rect;
		if (c) {
			let e = at(o, i == "horizontal", i == "vertical");
			d = Ot(d, e), f = d?.rect;
		}
		d && r.labelClipPolicy === "anchor" && (d = at(d.rect, Bv[t] === "x", Bv[t] === "y"), f = d?.rect), l(vS(r.axisProps, w), Q.axis, () => r.arrange(e, u, {
			...n,
			clipRect: f,
			clip: d
		}));
	}
	Cb(a.legends, i, o, e, n, l, Q.legend), v && l(v.zindex, Q.selectionRect, () => v.view.arrange(e, s, n));
	for (let t of y) l(t.zindex, Q.ruler, () => t.view.arrange(e, s, n));
	for (let t of Object.values(a.scrollbars)) l(1, Q.scrollbar, () => {
		t.arrange(e, c, n);
	});
	return _ && l(a.getTitleZindex(), Q.title, () => a.arrangeTitle(e, o, n, b)), w;
}
function vS(e, t) {
	return e.zindex === void 0 ? e.placement === "inside" ? 1 : t ? mS : 0 : e.zindex;
}
function yS(e, t) {
	return e ?? (t ? mS : 0);
}
function bS(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize(), a = r.placement === "inside", o = r.offset ?? 0, s = Bv[t];
	if (!s) throw Error("Unknown axis orientation: " + t);
	let c = s === "x", l = c ? "height" : "width", u = t === "bottom" || t === "right", d = a ? -i - o : o, f = u ? e[l] + d : -i - d;
	return e.translate(c ? 0 : f, c ? f : 0).modify({ [l]: i });
}
//#endregion
//#region ../core/src/utils/keyboardZoomMotion.js
var xS = {
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
}, SS = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = xS) {
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
			let t = CS(this.#e.KeyD, this.#e.KeyA), n = CS(this.#e.KeyW, this.#e.KeyS), r = wS(this.#t, t, e, this.#r), i = wS(this.#n, n, e, this.#i), a = e / 1e3;
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
			return this.#e[n] !== t && (this.#e[n] = t, !0);
		}
		return !1;
	}
};
function CS(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function wS(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = TS(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = TS(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function TS(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region ../core/src/view/gridView/zoomNavigationUtils.js
function ES(e, t, n) {
	if (Tg(e.spec)) {
		let n = e, r = n.getZoomCoords(t);
		return r ? {
			view: n.child,
			coords: r
		} : void 0;
	}
	if (e instanceof Z || e instanceof yv) return {
		view: e,
		coords: n
	};
}
function DS(e) {
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
function OS(e) {
	let t = DS(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region ../core/src/view/gridView/keyboardZoomController.js
var kS = class {
	#e;
	#t;
	#n = .5;
	#r = new SS();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = OS(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (xy(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
	};
	constructor({ context: e, viewRoot: t }) {
		this.#e = e, this.#t = t, t.registerDisposer(() => {
			this.#i = !1, this.#a = 0, this.#r.reset(), e.animator.cancelTransition(this.#o);
		}), this.#s();
	}
	handlePointerEvent(e, t) {
		if (e) {
			let n = e.view;
			if (typeof n.getKeyboardZoomAnchorX == "function") {
				let e = n.getKeyboardZoomAnchorX(t.point);
				Number.isFinite(e) && (this.#n = Math.max(0, Math.min(1, e)));
			} else {
				let n = (ES(e.view, t.point, e.coords)?.coords ?? e.coords).normalizePoint(t.point.x, t.point.y);
				this.#n = n.x;
			}
		} else return;
	}
	#s() {
		let e = this.#e.addKeyboardListener;
		typeof e == "function" && (this.#t.registerDisposer(e("keydown", (e) => {
			AS(e) || this.#r.isNavigationKey(e.code) && OS(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		})), this.#t.registerDisposer(e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && OS(this.#t) && (e.preventDefault(), this.#c());
		})));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function AS(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || jS(e.target));
}
function jS(e) {
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
//#region ../core/src/view/gridView/separatorView.js
var MS = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), NS = class {
	#e;
	#t;
	#n;
	#r;
	#i = [];
	constructor({ direction: e, props: t, context: n, layoutParent: r, dataParent: i, getName: a }) {
		this.#e = e, this.#t = t.includePlotMargin ?? !0, this.#r = t.zindex ?? 0;
		let o = { ...t };
		delete o.includePlotMargin, delete o.zindex, this.#n = new Z(FS(o), n, r, i, a(e === "horizontal" ? "separatorHorizontal" : "separatorVertical"), { chrome: !0 }), W(this.#n, { skipSubtree: !0 });
	}
	get view() {
		return this.#n;
	}
	getZindex() {
		return this.#r;
	}
	update(e, t, n, r, i) {
		let a = this.#t ? 0 : i.left, o = this.#t ? n.width : n.width - i.right, s = this.#t ? 0 : i.bottom, c = this.#t ? n.height : n.height - i.top, l = n.width || 1, u = n.height || 1, d = this.#e === "vertical";
		this.#i.length = Math.max(0, t - 1);
		for (let i = 1; i < t; i++) {
			let t = e[r(i) - 2], f = t.location + t.size / 2, p = this.#i[i - 1] ?? {};
			p.x = (d ? f : a) / l, p.x2 = (d ? f : o) / l, p.y = (d ? s : n.height - f) / u, p.y2 = (d ? c : n.height - f) / u, this.#i[i - 1] = p;
		}
		(this.#n.flowHandle?.dataSource)?.updateDynamicData(this.#i);
	}
	arrange(e, t, n) {
		this.#n.arrange(e, t, n);
	}
};
function PS(e) {
	if (!e) return null;
	let t = e === !0 ? { ...MS } : {
		...MS,
		...e
	};
	return t.strokeDash === MS.strokeDash && (t.strokeDash = MS.strokeDash.slice()), t;
}
function FS(e) {
	return {
		domainInert: !0,
		data: { values: [] },
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
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
//#region ../core/src/view/gridView/gridView.js
var IS = 10, LS = .5;
function RS(e, t) {
	return Math.max(0, Math.min(e.size, t - e.location));
}
function zS(e, t) {
	let n = e.grow ?? 0, r = e.px ?? 0, i = Math.max(Rn(e), Rn(t));
	if (!n) return {
		px: Math.max(r, i),
		grow: 0
	};
	let a = {
		px: Math.max(r, t.px ?? 0),
		grow: n
	};
	i > (a.px ?? 0) && (a.minPx = i);
	let o = Kn(e);
	return o !== void 0 && o >= i && (a.maxPx = o), a;
}
var BS = class e extends zr {
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
		super(e, t, n, r, i, o), this.spec = e, this.#t = e.spacing ?? 10, this.#e = a;
		let s = PS("separator" in e ? e.separator : void 0);
		if (s) for (let t of GS(e)) this.#s[t] = new NS({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#c = new kS({
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
		let n = new pS(e, this, this.#o);
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
		this.#d(t), this.#n.splice(e, 1), this.invalidateSizeCache();
	}
	moveChildAt(e, t) {
		xn(this.#n, e, t), this.invalidateSizeCache();
	}
	get visibleChildren() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get layoutGrid() {
		return new bv(this.visibleChildren.length, this.#e ?? Infinity);
	}
	setChildren(e) {
		for (let e of this.#n) this.#d(e);
		this.#n = [];
		for (let t of e) this.appendChild(t);
		this.invalidateSizeCache();
	}
	#d(e) {
		e.view.assertCanDisposeSubtree(), e.dispose();
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
		let r = this.findPointedChild(n);
		if (!r) return !0;
		if (r.view instanceof e && !r.view.ownsInteraction(t, n)) return !1;
		for (let e of r.view.getDataAncestors()) {
			if (e === this) return !0;
			if (e.paramRuntime.paramConfigs.has(t)) return !1;
		}
		return !0;
	}
	getInteractionCoords() {
		let e = this.#E();
		return e && this.options.alignedChannel === e ? this.getTrackPlotGeometry(e)?.viewport : e ? KS(this.visibleChildren, this.#r, e) : void 0;
	}
	getProjectionCoords(e) {
		let t = this.getTrackPlotGeometry(e);
		if (!t) throw Error(`Cannot project a container interval on an empty ${e} grid.`);
		return t.content;
	}
	getTrackPlotPlacements() {
		let t = [];
		for (let n of this.visibleChildren) {
			if (n.view instanceof e) {
				t.push(...n.view.getTrackPlotPlacements());
				continue;
			}
			let r = [];
			n.view.visit((e) => {
				if (!e.isConfiguredVisible()) return Qn;
				e instanceof Z && !In(e) && r.push(e);
			}), r.length !== 0 && t.push({
				content: n.plotCoords,
				viewport: n.coords,
				views: r
			});
		}
		return t;
	}
	getTrackPlotGeometry(e) {
		if (e && this.options.alignedChannel === e) {
			let t = this.getAlignmentAnchor(e);
			if (!t) return;
			let n = KS(this.visibleChildren, this.#r, e);
			if (!n) return;
			let r = t.getAlignmentCoords(e), i = e === "x" ? "width" : "height", a = n.modify({
				[e]: r[e],
				[i]: r[i]
			});
			return {
				content: a,
				viewport: a
			};
		}
		return this._cache("trackPlotGeometry/" + e, () => {
			let t = this.getTrackPlotPlacements().filter(({ content: e, viewport: t }) => e.width > 0 && e.height > 0 && t.width > 0 && t.height > 0);
			if (t.length === 0) return;
			if (e) {
				let n = LS / (typeof window > "u" ? 1 : window.devicePixelRatio ?? 1), r = this.getScaleResolution(e), i = new Set(t.flatMap(({ views: e }) => e));
				if (!r?.getOrderedMembers().some(({ view: e }) => i.has(e))) throw Error(`Container annotations require a shared ${e} scale defined by tracks.`);
				let a = t[0].content[e === "x" ? "width" : "height"], o = t[0].content[e === "x" ? "x" : "y"];
				for (let i of t) {
					for (let t of i.views) if (t.getScaleResolution(e) !== r) throw Error(`Container annotations require all visible tracks to use the shared ${e} scale resolution.`);
					let t = i.content[e === "x" ? "width" : "height"], s = i.content[e === "x" ? "x" : "y"];
					if (Math.abs(t - a) > n || Math.abs(s - o) > n) throw Error(`Container annotations require equal aligned visible plotting spans on the shared ${e} axis.`);
				}
			}
			let n = K.unionAll(t.map(({ content: e }) => e)), r = t.map(({ viewport: e }) => e), i = e ? KS(this.visibleChildren, this.#r, e) : K.unionAll(r);
			if (n && i) return {
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
			this.#f(),
			this.#p(e.legendOwners),
			this.#m()
		]), await Promise.all(t.map((e) => e.syncGuideViews({ legendFilter: this.#a }))), this.invalidateSizeCache();
	}
	async syncLegendViews() {
		await this.#p(Ux(this)), this.invalidateSizeCache();
	}
	async #f() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of N) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new Gv({
				title: n.getTitle(),
				orient: zv[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	async #p(e) {
		Vx(this.#i), this.#i = {}, await Rx(this.#i, e ?? Ux(this), this, (e, t) => HS(e, t.channel) === this, this.#a);
	}
	async #m() {
		this.#S();
		let e = [];
		for (let [t, n] of this.paramRuntime.paramConfigs) if ("select" in n) {
			let r = s(n.select);
			if (!T(r) || "bind" in n && n.bind === "legend") continue;
			let i = r.encodings ?? ["x"], a = this.#h(i, r.extent, `Interval selection param "${t}"`);
			if (!a) continue;
			let o = this.paramRuntime.createExpression(t), c = o();
			(!c || !g(c)) && this.paramRuntime.setValue(t, n.value ? {
				type: "interval",
				intervals: n.value
			} : p(i));
			let l = jb({
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
				overlay: l,
				order: Q.selectionRect,
				channel: a,
				controller: new Nb(this, t, n, r, this.paramRuntime, !1, l)
			}), e.push(l.view.initializeChildren());
		} else if (nt(n) && n.ruler.display !== "none") {
			let r = n.ruler.encodings ?? ["x"], i = this.#h(r, n.ruler.extent, `Ruler param "${t}"`);
			if (!i) continue;
			let a = nS({
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
	#h(e, t, n) {
		if (e.length === 1) return cS({
			extent: t,
			ownerSpec: this.spec,
			channels: e,
			isAligned: (e) => this.#g(e),
			label: n
		}) === "container" ? e[0] : void 0;
	}
	#g(e) {
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
		yield* Object.values(this.#i);
	}
	#_(e) {
		let t = e == "column" ? "width" : "height", n = e === "column" ? "x" : "y", r = n === "x" ? [["before", "left"], ["after", "right"]] : [["before", "top"], ["after", "bottom"]], i = (e) => this.alignsChild(e.view, n) ? e.view.getAlignment(n).size : Pn(e.view.getViewportSize()[t], -e.getViewOverhang()[t]);
		return this._cache(`size/directionSizes/${e}`, () => this.layoutGrid[e == "column" ? "colIndices" : "rowIndices"].map((t) => {
			let a = t.map((e) => this.visibleChildren[e]), o = {
				before: 0,
				after: 0
			}, s = {
				before: 0,
				after: 0
			};
			for (let e of a) {
				let t = e.view.getStructuralOverhang(), i = this.alignsChild(e.view, n) ? e.view.getAlignment(n) : {
					before: t[r[0][1]],
					after: t[r[1][1]]
				}, a = this.getChildOverhangAndPadding(e);
				for (let [e, t] of r) o[e] = Math.max(o[e], i[e]), s[e] = Math.max(s[e], a[t]);
			}
			let c = this.getTrackSizeAndInsets(n, a, Un(this.getPlotSizeChildren(e, a).map(i)), o), l = a.map((e) => e.view.getStructuralSizeDefs(n));
			return {
				axisBefore: s.before - o.before,
				axisAfter: s.after - o.after,
				structuralBefore: c.before,
				structuralAfter: c.after,
				flexBefore: Pn(Un(l.map((e) => e.before)), c.before - o.before),
				flexAfter: Pn(Un(l.map((e) => e.after)), c.after - o.after),
				view: c.size
			};
		}));
	}
	alignsChild(e, t) {
		return this.options.alignedChannel === t;
	}
	getAlignmentAnchor(e) {
		return this.options.alignedChannel === e ? this.visibleChildren[0]?.view : void 0;
	}
	getTrackSizeAndInsets(e, t, n, r) {
		return {
			size: n,
			...r
		};
	}
	getAlignment(e) {
		let t = this.getAlignmentAnchor(e);
		return t ? this._cache("size/alignment/" + e, () => {
			let n = e === "x" ? "column" : "row", r = this.visibleChildren.findIndex((e) => e.view === t), i = this.layoutGrid.getCellCoords(r)[e === "x" ? 0 : 1], a = this.getFlexItems(n), o = this.getViewSlot(i), s = a.slice(0, o), c = a.slice(o + 1);
			if ([...s, ...c].some((e) => e.grow)) {
				let t = this.#_(n).findIndex((e, t) => t !== i && e.view.grow), r = this.layoutGrid[n === "row" ? "rowIndices" : "colIndices"][t], a = e === "x" ? "width" : "height", o = r.flatMap((e) => this.visibleChildren[e].view.getDescendants()).filter((e) => !In(e) && e.getSize()[a].grow), s = o.find((e) => e.spec[a] !== void 0) ?? o.at(-1);
				throw new Er("Nested aligned structural panels require fixed or step sizes.", s).withSpecLocation(s.spec, [a]);
			}
			let l = this.getGridOverhang();
			return {
				size: a[o],
				before: s.reduce((e, t) => e + Rn(t), 0) - l[e === "x" ? "left" : "top"],
				after: c.reduce((e, t) => e + Rn(t), 0) - l[e === "x" ? "right" : "bottom"]
			};
		}) : super.getAlignment(e);
	}
	getAlignmentCoords(e) {
		let t = this.getAlignmentAnchor(e);
		return t ? t.getAlignmentCoords(e) : super.getAlignmentCoords(e);
	}
	findPointedChild(t) {
		let n = this.visibleChildren.filter((e) => e.coords.containsPoint(t.x, t.y));
		return !this.getAlignmentAnchor("x") && !this.getAlignmentAnchor("y") ? n[0] : n.find((e) => e.view.getLayoutFootprints().some(({ coords: e }) => e.containsPoint(t.x, t.y))) ?? n.find(({ view: n }) => n instanceof e && n.#v(t));
	}
	#v(t) {
		return (this.getInteractionCoords()?.containsPoint(t.x, t.y) ?? !1) || this.visibleChildren.some(({ view: n }) => n instanceof e && n.#v(t));
	}
	getLayoutFootprints() {
		return this._cache("layoutFootprints", () => {
			let e = [], t = (t, n, r = !0) => e.push({
				view: t,
				coords: n,
				chrome: r
			}), n = this.layoutGrid;
			for (let [r, i] of this.visibleChildren.entries()) {
				e.push(...i.view.getLayoutFootprints());
				let [a, o] = n.getCellCoords(r), s = {
					...hS(Object.values(this.#r), a, o, n),
					...i.axes
				};
				for (let [e, n] of Object.entries(s)) {
					let r = bb({ [e]: n }, {});
					for (let e of qS(i.getAxisCoords(), r)) t(i.view, e);
				}
				for (let e of qS(i.coords.shrink(i.getViewOverhang()), i.view.getPadding())) t(i.view, e);
				for (let e of Object.values(i.legends).filter((e) => e.isActive())) t(i.view, e.coords);
				if (i.title) for (let e of qS(i.title.coords, i.title.getOverhang())) t(i.view, e);
				i.background && t(i.view, i.background.coords, !1);
			}
			for (let e of Object.values(this.#i).filter((e) => e.isActive())) t(this, e.coords);
			return e;
		});
	}
	getChildOverhangAndPadding(e) {
		return e.getOverhangAndPadding();
	}
	getPlotSizeChildren(e, t) {
		return t;
	}
	getFlexItems(e) {
		let t = this.#_(e), n = [];
		for (let [e, r] of t.entries()) e > 0 && n.push({
			px: this.#t,
			grow: 0
		}), n.push(Pn(r.flexBefore, r.axisBefore)), n.push(r.view), n.push(Pn(r.flexAfter, r.axisAfter));
		return n;
	}
	#y(e) {
		let t = e == "row" ? this.spec.height : this.spec.width, n = t || t === 0 ? Hn(this.resolveSizeValue(e == "row" ? "height" : "width", t)) : void 0, r = n && this.#_(e).length === 1, i = this.getFlexItems(e);
		if (r) {
			let e = this.getViewSlot(0);
			i[e] = zS(n, i[e]);
		}
		let a = Fn(i);
		return n && !r ? zS(n, a) : a;
	}
	getViewSlot(e) {
		return 4 * e + 1;
	}
	getOverhang() {
		return this.getGridOverhang().add(this.#b()).add(this.getStructuralOverhang());
	}
	getStructuralOverhang() {
		if (!this.visibleChildren.length) return U.zero();
		let e = this.getAlignmentAnchor("x") ? this.getAlignment("x") : {
			before: this.#_("column").at(0).structuralBefore,
			after: this.#_("column").at(-1).structuralAfter
		}, t = this.getAlignmentAnchor("y") ? this.getAlignment("y") : {
			before: this.#_("row").at(0).structuralBefore,
			after: this.#_("row").at(-1).structuralAfter
		};
		return new U(t.before, e.after, t.after, e.before);
	}
	getGridOverhang() {
		let e = this.#_("column"), t = this.#_("row");
		return !e.length || !t.length ? U.zero() : new U(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#b() {
		return bb(this.#x(), this.#i);
	}
	#x() {
		let e = {};
		for (let t of Object.values(this.#r)) e[t.axisProps.orient] = t;
		return e;
	}
	getSize() {
		return this._cache("size", () => new Gn(this.#y("column"), this.#y("row")).addPadding(this.#b()));
	}
	arrange(e, t, n = {}) {
		if (this._invalidateCacheByPrefix("trackPlotGeometry"), this._invalidateCacheByPrefix("layoutFootprints"), super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#b(), i = IS;
		for (;;) {
			let e = t.shrink(r);
			if (!Bx(this.#i, e.width, e.height)) {
				t = e;
				break;
			}
			if (i--, !i) throw Error("Shared legend layout did not settle.");
			this.invalidateSizeCache(), r = this.#b();
		}
		e.pushView(this, t);
		let a = e.getDevicePixelRatio(), o = { devicePixelRatio: a }, s = (e, t) => {
			let n = this.getFlexItems(e), { sizes: r, growth: i } = _r(n, t);
			return {
				coords: qn(n, r, t, o),
				growth: i
			};
		}, c = s("column", t.width), l = s("row", t.height), u = this.layoutGrid, d = IS;
		for (;;) {
			let e = !1;
			for (let [n, r] of this.visibleChildren.entries()) {
				let [i, a] = u.getCellCoords(n), o = c.coords[this.getViewSlot(i)], s = l.coords[this.getViewSlot(a)], d = RS(o, t.width), f = RS(s, t.height), p = r.view.prepareLayoutSize?.(d, f, c.growth, l.growth) === !0, m = r.prepareLegendLayoutSize(d, f);
				e ||= p || m;
			}
			if (!e) break;
			if (d--, !d) throw Error("Legend layout did not settle.");
			this.invalidateSizeCache(), c = s("column", t.width), l = s("row", t.height);
		}
		let f = (e) => Math.round(e * a) / a, p = [];
		for (let [e, n] of this.visibleChildren.entries()) {
			let { view: r } = n, [i, a] = u.getCellCoords(e), o = c.coords[this.getViewSlot(i)], s = l.coords[this.getViewSlot(a)], d = r.getViewportSize(), m = r.getSize(), h = n.getViewOverhang(), g = o.location - h.left, _ = s.location - h.top, v = (e, t, n = !1) => n ? e[t].grow ? (t == "width" ? o : s).size : e[t].px : (t == "width" ? o : s).size + h[t], y = v(d, "width", r.spec.viewportWidth != null), b = v(d, "height", r.spec.viewportHeight != null), x = v(m, "width", r.spec.viewportWidth != null), S = v(m, "height", r.spec.viewportHeight != null), C = n.scrollbars.horizontal, w = n.scrollbars.vertical, T = K.create(g, _, y, b).translateBy(t), E = r.isScrollable() ? T.modify({
				width: x,
				height: S
			}).translate(() => f(C?.contentTranslation ?? 0), () => f(w?.contentTranslation ?? 0)) : T;
			for (let e of Object.values(n.scrollbars)) e.updateScrollbar(T, E);
			n.coords = T, n.plotCoords = E, p.push({
				col: i,
				row: a,
				viewportCoords: T,
				viewCoords: E,
				containerCoords: t,
				gridChild: n
			});
		}
		let m = this.getGridOverhang(), h = K.unionAll(p.map((e) => e.viewCoords)), g = gS(), { queueDecoration: _ } = g;
		for (let r of ["vertical", "horizontal"]) {
			let i = this.#s[r];
			i && (i.update(r === "vertical" ? c.coords : l.coords, r === "vertical" ? u.nCols : u.nRows, t, (e) => this.getViewSlot(e), m), _(i.getZindex(), Q.separator, () => i.arrange(e, t, n)));
		}
		if (h) for (let { overlay: t, order: r, channel: i } of this.#u) _(t.zindex, r, () => {
			let r = t.zindex > 0 ? this.getTrackPlotGeometry(i) : void 0;
			t.view.arrange(e, r?.content ?? Jx(this.getScaleResolution(i), i, h, this), n);
		});
		for (let t of p) {
			let { gridChild: r, viewportCoords: i, col: a, row: o } = t, s = hS(Object.values(this.#r), a, o, u), c = _S(e, t, n, g, {
				...s,
				...r.axes
			});
			for (let t of Object.values(s)) {
				let a = t.axisProps.orient;
				_(vS(t.axisProps, c), Q.axis, () => {
					let o = r.getAxisCoords(i);
					t.arrange(e, bS(o, a, t), n);
				});
			}
		}
		if (!p.length) for (let r of Object.values(this.#r)) {
			let { orient: i } = r.axisProps, a = bS(t, i, r);
			_(vS(r.axisProps, !1), Q.axis, () => r.arrange(e, a, n));
		}
		Cb(this.#i, this.#x(), t, e, n, _, Q.legend), g.arrange();
		let v = this.getAnnotationLayer(), y = v ? this.getTrackPlotGeometry(this.#E()) : void 0;
		if (v && y) {
			let t = yt(n), r = Ot(t, at(y.viewport, !0, !0));
			v.arrange(e, y.content, {
				...n,
				clipRect: r?.rect,
				clip: r
			});
		}
		e.popView(this);
	}
	dispose() {
		this.#l();
		for (let { controller: e } of this.#u) e?.dispose();
		super.dispose();
	}
	#S() {
		for (let { controller: e, overlay: t } of this.#u) e?.dispose(), t.view.disposeSubtree();
		this.#u = [];
	}
	*#C() {
		for (let e of Object.values(this.#i)) e.isActive() && (yield e);
		for (let e of this.#n) for (let t of Object.values(e.legends)) t.isActive() && (yield t);
	}
	propagateInteraction(e) {
		sy(this, e, () => {
			for (let t of this.#C()) if (t.coords.containsPoint(e.point.x, e.point.y)) {
				t.propagateInteraction(e);
				return;
			}
			let t = this.findPointedChild(e.point), n = t?.view, r = e.type === "wheelclaimprobe";
			if (!r) {
				this.#c?.handlePointerEvent(t, e);
				for (let n of Object.values(t?.scrollbars ?? {})) if (cy(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			}
			let i = this.getAnnotationLayer(), a = i ? this.getTrackPlotGeometry(this.#E())?.viewport : void 0;
			if (!(i && a?.containsPoint(e.point.x, e.point.y) && this.context.getCurrentHover()?.mark?.unitView?.getLayoutAncestors().includes(i) && (i.propagateInteraction(e), e.stopped || r && e.wheelClaimed))) {
				if (r) this.#w(e, t);
				else if (n) cy(e, () => !0, () => n.propagateInteraction(e), () => {
					if (e.type !== "wheel" && e.type !== "mousedown" && e.type !== "touchgesture") return;
					let r = ES(n, e.point, t.coords);
					r && this.#D(e, r.coords, DS(r.view), t);
				});
				else {
					let t = this.#T(e.point);
					t ? this.#D(e, t.coords, t.zoomableResolutions) : e.type === "mousedown" && (this.#O("vertical") || this.#O("horizontal")) && this.#D(e, K.ZERO, {
						x: /* @__PURE__ */ new Set(),
						y: /* @__PURE__ */ new Set()
					});
				}
			}
		}), this.layoutParent || Wb(this, e);
	}
	#w(e, t) {
		let n = t?.view;
		if (n?.propagateInteraction(e), e.stopped || e.wheelClaimed) return;
		if (e.wheelIntent === "scroll") {
			let n = t?.scrollbars.vertical, r = n?.getWheelScroll(e.wheelEvent);
			r && e.claimWheel(n, { scroll: r });
			return;
		}
		if (!n) {
			this.#T(e.point) && e.claimWheel(this);
			return;
		}
		let r = ES(n, e.point);
		if (!r) return;
		let i = DS(r.view);
		Object.values(i).some((e) => e.size > 0) && e.claimWheel(r.view);
	}
	#T(e) {
		let t = this.#E();
		if (!t) return;
		let n = this.getScaleResolution(t);
		if (!n?.isZoomable()) return;
		let r = this.getInteractionCoords();
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
	#E() {
		return Dg(this.spec) ? "x" : Og(this.spec) ? "y" : void 0;
	}
	#D(e, t, n, r) {
		e.target ??= this;
		let i = e.type === "mousedown" ? {
			x: n.x.size ? void 0 : this.#O("horizontal", r),
			y: n.y.size ? void 0 : this.#O("vertical", r)
		} : {}, a = this.context.getCurrentHover(), o = Ty(e, t, (e) => {
			let r = WS(t, e, n, this.context.animator), a = US(i.x, e.xDelta), o = US(i.y, e.yDelta);
			return (a || o) && this.context.animator.requestRender(), r || a || o;
		}, !e.facetId || a?.facetId && V(e.facetId, a.facetId) ? a : void 0, this.context.animator, { lockAxis: !!(i.x || i.y) });
		o && (this.#l(), this.#l = o);
	}
	#O(t, n) {
		let r = n?.view ?? this;
		for (let n = r.layoutParent; n; n = n.layoutParent) {
			if (n instanceof e) {
				let e = n.#n.find((e) => e.view === r)?.scrollbars[t];
				if (e?.canScroll()) return e;
			}
			r = n;
		}
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
};
function VS(e, t) {
	let n = e.getLayoutAncestors().find((e) => e instanceof BS);
	if (!n) throw Error(`Legend collection for channel "${t}" declared at view "${e.name}" requires a GridView layout host.`);
	return n;
}
function HS(e, t) {
	let n = Gx(e, t);
	if (n) return VS(n, t);
	let r = e.getLayoutAncestors();
	for (let e of r) {
		if (!(e instanceof BS)) continue;
		let t = e.getAnnotationLayer();
		if (t && r.includes(t)) return e;
	}
	return e instanceof BS ? e : void 0;
}
function US(e, t) {
	if (!e || !t) return !1;
	let n = e.viewportOffset;
	return e.interpolateViewportOffset.stop(), e.setViewportOffset(n - t, { syncSmoother: !0 }), e.viewportOffset !== n;
}
function WS(e, t, n, r) {
	let i = !1, a = !1, o = e.normalizePoint(t.x, t.y), s = e.normalizePoint(t.x + t.xDelta, t.y + t.yDelta), c = {
		x: s.x - o.x,
		y: s.y - o.y
	};
	for (let [r, s] of Object.entries(n)) if (!(s.size <= 0)) {
		i = !0;
		for (let n of s) a = n.zoom(2 ** t.zDelta, r == "y" ? 1 - o[r] : o[r], r == "x" ? c.x : -c.y, r == "x" ? e.width : e.height) || a;
	}
	return a && r.requestRender(), i;
}
function GS(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function KS(e, t, n) {
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
		t && p.includes(e.axisProps.orient) && (d = Math.min(d, t[a]), f = Math.max(f, t[o]));
	}
	let m = r == "x" ? 0 : 1, h = [d, d], g = [f, f];
	if (h[m] = l, g[m] = u, !(h[0] >= g[0] || h[1] >= g[1])) return K.create(h[0], h[1], g[0] - h[0], g[1] - h[1]);
}
function qS(e, t) {
	return [
		K.create(e.x, e.y - t.top, e.width, t.top),
		K.create(e.x2, e.y, t.right, e.height),
		K.create(e.x, e.y2, e.width, t.bottom),
		K.create(e.x - t.left, e.y, t.left, e.height)
	].filter((e) => e.width > 0 && e.height > 0);
}
//#endregion
//#region ../core/src/view/gridView/guideViewSync.js
async function JS(e) {
	Z_(e), iv(e), av(e), await J_(e, e.context.genomeStore), await YS(e);
}
async function YS(e) {
	let t = e.getDescendants();
	Hb(e);
	let n = /* @__PURE__ */ new Map();
	for (let e of Wx(t)) for (let t of new Set(Object.values(e.resolutions.legend))) {
		let r = HS(e, t.channel);
		if (r) {
			let t = n.get(r) ?? [];
			t.includes(e) || (t.push(e), n.set(r, t));
		}
	}
	for (let e of t) e instanceof zr && await e.syncGuideViews({ legendOwners: n.get(e) ?? [] });
}
//#endregion
//#region ../core/src/view/concatView.js
var XS = class extends BS {
	#e;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, kg(e) ? e.columns : Dg(e) ? 1 : Infinity, a);
	}
	async initializeChildren() {
		let e = this.#r();
		await this.createChildViews(this.#n().map((t) => this.context.createOrImportView(t, this, this, this.getNextAutoName("grid"), this.options.childSpecValidator, e)), (e) => this.setChildren(e)), await this.#t();
	}
	getAnnotationLayer() {
		return this.#e;
	}
	async #t() {
		let e = Dg(this.spec) ? "x" : Og(this.spec) ? "y" : void 0, t = Dg(this.spec) || Og(this.spec) ? this.spec.annotate : void 0;
		if (!t?.length || !e) return;
		let n = e === "x" ? "y" : "x", r = {
			layer: t.map((t) => ZS(Ge(t), e, n)),
			resolve: { scale: { [e]: "forced" } }
		};
		this.#e = await this.context.createOrImportView(r, this, this, this.getNextAutoName("annotation"), void 0, {
			inheritEncoding: !1,
			layoutSizeParams: "inherit"
		}), W(this.#e);
	}
	async addChildSpec(e, t) {
		return this.#i().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#i().removeChildAt(e);
	}
	async moveChildAt(e, t) {
		let n = this.#i();
		xn(this.#n(), e, t), super.moveChildAt(e, t);
		let r = await this.#a([]);
		await n.initializeUninitializedChromeViews(r), this.context.requestLayoutReflow();
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : Dg(this.spec) && e === "x" || Og(this.spec) && e === "y" ? "shared" : "independent";
	}
	isConfiguredVisible() {
		return super.isConfiguredVisible() && (!this.options.collapseWhenEmpty || this.children.some((e) => e.isConfiguredVisible()));
	}
	#n() {
		let e = this.spec;
		return kg(e) ? e.concat : Dg(e) ? e.vconcat : e.hconcat;
	}
	#r() {
		let e = {
			inheritEncoding: !0,
			imposedAlignmentChannel: this.options.alignedChannel
		};
		return this.options.layoutSizeParams == "force" && (e.layoutSizeParams = "force"), e;
	}
	#i() {
		return new gv(this, {
			specs: this.#n(),
			insertView: (e, t) => this.insertChildViewAt(e, t),
			removeView: (e) => super.removeChildAt(e),
			syncMutationGuideViews: (e) => this.#a(e ? [e] : []),
			namePrefix: "grid",
			createViewOptions: this.#r(),
			specValidator: this.options.childSpecValidator
		});
	}
	async #a(e) {
		Hb(this);
		for (let t of e) await YS(t.view);
		await this.syncGuideViews({
			gridChildren: e,
			legendOwners: Ux(this)
		});
		let t = /* @__PURE__ */ new Set([this]);
		for (let e of this.getDataAncestors()) if (Object.values(e.spec.resolve?.legend ?? {}).includes("collected")) {
			let n = e.getLayoutAncestors().find((e) => e instanceof BS);
			n && !t.has(n) && (await n.syncLegendViews(), t.add(n));
		}
		return t;
	}
};
function ZS(e, t, n) {
	if (!Sg(e) && !Cg(e)) throw Error("Container annotations accept only unit or layer specifications.");
	let r = e.resolve?.scale, i = r?.[t] ?? r?.default;
	if (i === "independent" || i === "excluded") throw Error(`Container annotations cannot use an independent ${t} scale.`);
	if (e.scales?.[t] !== void 0 || e.scales?.[n] !== void 0) throw Error("Container annotations cannot override positional scale settings.");
	return e.encoding && QS(e.encoding, t, n), Cg(e) && (e.resolve = {
		...e.resolve,
		scale: {
			...e.resolve?.scale,
			[t]: "forced"
		}
	}, e.layer = e.layer.map((e) => ZS(e, t, n))), e;
}
function QS(e, t, n) {
	for (let [n, r] of Object.entries(e)) Array.isArray(r) || $S(r, (e) => {
		let r = e.resolutionChannel;
		if (r !== void 0 && ue(tt(r)) && tt(n) !== t) throw Error(`Container annotation channel ${n} cannot resolve through positional channel ${r}.`);
	});
	for (let n of [t, ze(t)]) {
		let r = e[n];
		r && $S(r, (e) => {
			if (e.scale !== void 0) throw Error(`Container annotation encodings on ${n} cannot define scale settings.`);
			if (e.resolutionChannel !== void 0 && tt(e.resolutionChannel) !== t) throw Error(`Container annotation channel ${n} must resolve through ${t}.`);
			"value" in e || (e.domainInert = !0);
		});
	}
	for (let t of [n, ze(n)]) {
		let n = e[t];
		n && $S(n, (e) => {
			if (!("value" in e) && e.scale !== null) throw Error(`Container annotation encodings on ${t} must use scale: null.`);
		});
	}
}
function $S(e, t) {
	if (!e || typeof e != "object") return;
	t(e);
	let n = e.condition;
	if (n) for (let e of Array.isArray(n) ? n : [n]) e && typeof e == "object" && t(e);
}
//#endregion
//#region ../core/src/view/facetLayout.js
function eC(e, t, n) {
	let r = (e.row ? t.row.length : 1) * (e.column ? t.column.length : 1), i = new bv(r, e.row ? e.column && t.column.length || 1 : n ?? Infinity);
	return Object.assign(i, {
		cells: Array.from({ length: r }, (n, r) => {
			let [a, o] = i.getCellCoords(r), s = [];
			return e.row && s.push(t.row[o]), e.column && s.push(t.column[e.row ? a : r]), {
				facetId: s,
				row: o,
				column: a
			};
		}),
		hasRowFacet: !!e.row
	});
}
function tC(e) {
	return e !== void 0 && e.header !== null && e.header?.labels !== !1;
}
function nC(e, t, n, r, i = {
	row: 0,
	column: 0
}) {
	let a = iC(e, t, n, i, r), o = Fn(a.column.sizes, i.column, t.width.grow), s = Fn(a.row.sizes, i.row, t.height.grow);
	return new Gn(o, s);
}
function rC(e, t, n, r, i, a = {
	row: 0,
	column: 0
}, o) {
	let s = iC(e, n, r, a, i), c = Vn(s.column.sizes, t.width, {
		devicePixelRatio: o,
		offset: t.x,
		spacing: a.column
	}), l = Vn(s.row.sizes, t.height, {
		devicePixelRatio: o,
		offset: t.y,
		spacing: a.row
	});
	return e.cells.map((e) => {
		let t = c[e.column], n = l[e.row], r = s.column.paddings[e.column], i = s.row.paddings[e.row], a = s.column.headers[e.column], o = s.row.headers[e.row], u = K.create(t.location, n.location, t.size, n.size).shrink(new U(o.top, a.right, o.bottom, a.left));
		return {
			cell: e,
			viewportCoords: u,
			childCoords: u.shrink(new U(i.top, r.right, i.bottom, r.left))
		};
	});
}
function iC(e, t, n, r, i) {
	let a = e.rowIndices, o = e.colIndices, s = e.cells.map(n), c = e.cells.map((t) => {
		let n = i.row, s = i.column, c = a[t.row].length - 1, l = o[t.column].length - 1, u = new U(n.top + (!e.hasRowFacet || t.row === 0 ? s.top : 0), s.right + (t.column === c ? n.right : 0), n.bottom + (!e.hasRowFacet || t.row === l ? s.bottom : 0), s.left + (t.column === 0 ? n.left : 0));
		return new U(u.top > 0 ? u.top + r.row : 0, u.right > 0 ? u.right + r.column : 0, u.bottom > 0 ? u.bottom + r.row : 0, u.left > 0 ? u.left + r.column : 0);
	}), l = (e, t) => t.reduce((t, n) => t.union(e[n]), U.zero()), u = (e, n) => {
		let r = e.map((e) => l(s, e)), i = e.map((e) => l(c, e));
		return {
			paddings: r,
			headers: i,
			sizes: r.map((e, r) => t.addPadding(e.add(i[r]))[n])
		};
	};
	return {
		column: u(o, "width"),
		row: u(a, "height")
	};
}
//#endregion
//#region ../core/src/view/facetHeaderView.js
var aC = /* @__PURE__ */ new Set([
	"labels",
	"format",
	"style",
	"orient",
	"anchor",
	"frame",
	"offset",
	"reserve",
	"zindex",
	"align",
	"angle",
	"baseline",
	"dx",
	"dy",
	"color",
	"font",
	"fontSize",
	"fontStyle",
	"fontWeight"
]), oC = class e extends Z {
	titleSpec;
	formatLabel = String;
	static create(t, n, r, i = {}) {
		let a = n.getConfigScopes(), o = G([...a.map((e) => e.header), ...a.map((e) => t === "row" ? e.headerRow : e.headerColumn)]);
		if ((i.labels ?? o.labels) === !1) return;
		let s = Yy({
			text: " ",
			style: o.style ?? [],
			...i
		}, a, {
			orient: t === "row" ? "left" : "top",
			anchor: "middle",
			align: "center",
			baseline: "middle",
			offset: 9,
			fontSize: 12,
			color: "black",
			reserve: !0,
			zindex: 1,
			...o
		});
		if (s && ![
			"left",
			"right",
			"top",
			"bottom"
		].includes(s.orient)) throw Error("Facet header orient must be left, right, top, bottom, or none.");
		return s ? new e(t, n, r, s, i.format ?? o.format) : void 0;
	}
	constructor(e, t, n, r, i) {
		if (super(sC(r), t.context, t, n, t.getNextAutoName(e === "column" ? "facetHeaderColumn" : "facetHeaderRow"), { chrome: !0 }), this.titleSpec = r, W(this, { skipSubtree: !0 }), i !== void 0) {
			let e = z(i);
			this.formatLabel = (t) => typeof t == "number" ? e(t) : String(t);
		}
	}
	getLabelOverhang(e) {
		let t = this.titleSpec;
		if (t.reserve === !1 || t.offset < 0) return U.zero();
		let n = t.align === "center" && t.baseline === "middle" ? .5 : 1, r = e.reduce((e, r) => e.union(rb({
			...t,
			text: this.formatLabel(r)
		}, this.context, n)), U.zero());
		return U.createFromRecord({ [t.orient]: Math.max(18, r[t.orient]) });
	}
	updateLayout(e, t, n, r, i) {
		let a = e === "row" ? n.rowIndices : n.hasRowFacet ? n.colIndices : t.map((e, t) => [t]), { xy: o } = Jy(this.titleSpec), s = Xy(this.titleSpec, this.context), c = this.titleSpec.orient, l = this.titleSpec.reserve !== !1 && this.titleSpec.offset >= 0 ? U.createFromRecord({ [c]: c === "left" || c === "right" ? i.column : i.row }) : U.zero();
		this.updateData(a.map((n) => {
			let i = pb(K.unionAll(n.map((e) => t[e].childCoords)), K.unionAll(n.map((e) => t[e].viewportCoords)).expand(l), this.titleSpec), a = t[n[0]].cell;
			return {
				x: (i.x + o.x * i.width + s.xOffset - r.x) / r.width,
				y: 1 - (i.y + (1 - o.y) * i.height + s.yOffset - r.y) / r.height,
				text: this.formatLabel(e === "row" ? a.facetId[0] : a.facetId.at(-1))
			};
		}));
	}
	updateData(e) {
		let t = this.flowHandle?.dataSource;
		if (t) {
			let n = this.getCollector();
			if (n.completed) {
				let t = n.getData()[Symbol.iterator]();
				if (e.every(({ x: e, y: n, text: r }) => {
					let i = t.next().value;
					return i !== void 0 && i.x === e && i.y === n && i.text === r;
				}) && t.next().done) return;
			}
			t.updateDynamicData(e);
		}
	}
};
function sC(e) {
	return {
		domainInert: !0,
		data: { values: [] },
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
		mark: db(e, {
			x: 0,
			y: 0
		}, {
			xOffset: 0,
			yOffset: 0
		}, !1),
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
			text: {
				field: "text",
				type: "nominal"
			}
		}
	};
}
//#endregion
//#region ../core/src/view/facetView.js
var cC = class e extends zr {
	child;
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ new Map();
	#i = [];
	#a = {
		row: [],
		column: []
	};
	#o = [];
	#s = K.ZERO;
	#c;
	#l = () => {
		this.#_() && this.context.requestLayoutReflow();
	};
	constructor(e, t, n, r, i, a) {
		let o = mC(e), s = gC(e.spacing);
		super(e, t, n, r, i, a), this.#e = o, this.#t = s;
		try {
			for (let e of ["row", "column"]) {
				let t = this.#e[e];
				t && (this.#e[e] = Je(this.paramRuntime, t, this.#l));
			}
			this.#_();
		} catch (e) {
			throw this.disposeSubtree({ checkDependencies: !1 }), e;
		}
	}
	async initializeChildren() {
		if (this.#v(this), this.child = await this.context.createOrImportView(this.spec.spec, this, this, this.getNextAutoName("facet"), (e) => {
			if (!wg(e)) throw new Er("Facet children must import unit, layer, or multiscale specs.", this);
		}, {
			inheritEncoding: !0,
			axisLabelClipPolicy: {
				x: "pixel",
				y: "pixel"
			}
		}), this.child instanceof e) throw Error("Facet specs cannot contain an immediate facet child.");
		this.child.visit((e) => {
			if (e.spec.viewportWidth !== void 0 || e.spec.viewportHeight !== void 0) throw Error("Facet children do not support viewportWidth or viewportHeight. Set the viewport on the facet instead.");
			this.#v(e);
		}), this.#n = new lC(this.child, this, 0);
		for (let e of ["column", "row"]) {
			let t = this.#e[e];
			if (tC(t)) {
				let n = oC.create(e, this, this.child, t.header);
				n && this.#r.set(e, n);
			}
			if (t && t.header !== null) {
				let n = Yy(t.title === void 0 ? t.field : t.title, this.getConfigScopes(), { orient: e === "row" ? "left" : "top" });
				n && this.#i.push(new mb(n, this.context, this, this.child, this.getNextAutoName(e === "row" ? "facetTitleRow" : "facetTitleColumn")));
			}
		}
	}
	async syncGuideViews() {
		await this.#n.syncGuideViews(), this.invalidateSizeCache();
	}
	*[Symbol.iterator]() {
		this.#n ? yield* this.#n.getChildren() : this.child && (yield this.child), yield* this.#r.values(), yield* this.#i;
	}
	getFacetFields() {
		return this.#e.fields;
	}
	getSize() {
		return this.isConfiguredVisible() ? (this.#g(), this.#c?.completed ? this._cache("size/size", () => this.#f()) : this.#f()) : sr;
	}
	#u() {
		return this._cache("size/facetGrid", () => eC(this.#e, this.#a, this.spec.columns));
	}
	#d() {
		return this.#i.reduce((e, t) => e.add(t.getOverhang()), U.zero());
	}
	#f() {
		return nC(this.#u(), this.child.getViewportSize(), (e) => this.#h(e), this.#p(), this.#t).addPadding(this.#d());
	}
	#p() {
		return {
			row: this.#r.get("row")?.getLabelOverhang(this.#a.row) ?? U.zero(),
			column: this.#r.get("column")?.getLabelOverhang(this.#a.column) ?? U.zero()
		};
	}
	#m(e) {
		return hS(Object.values(this.#n.axes), e.column, e.row, this.#u());
	}
	#h(e) {
		return this.#n.getOverhangAndPadding(this.#m(e));
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.#o = [], this.#s = K.ZERO, !this.isConfiguredVisible()) return;
		for (let e of Object.values(this.#n.axes)) e.visit((e) => e.facetCoords.clear());
		this.#g(), e.pushView(this, t);
		let r = K.create(0, 0, t.width, t.height), i = this.#i.map((e) => (r = r.shrink(e.getOverhang()), {
			title: e,
			frame: r
		})), a = rC(this.#u(), r, this.child.getViewportSize(), (e) => this.#h(e), this.#p(), this.#t, e.getDevicePixelRatio()), o = yt(n), s = K.unionAll(a.map((e) => e.childCoords)) ?? K.ZERO;
		this.#s = Mt(s.translateBy(t), o);
		let c = gS();
		for (let r of a) {
			let i = Mt(r.viewportCoords.translateBy(t), o), a = r.childCoords.translateBy(t);
			this.#o.push({
				...r,
				viewportCoords: i,
				childCoords: a
			}), _S(e, {
				gridChild: this.#n,
				containerCoords: t,
				viewportCoords: a,
				viewCoords: a,
				axes: this.#m(r.cell)
			}, {
				...n,
				facetId: r.cell.facetId,
				firstFacet: this.#o.length === 1
			}, c);
		}
		for (let [i, o] of this.#r) o.updateLayout(i, a, this.#u(), r, this.#t), c.queueDecoration(o.titleSpec.zindex, Q.title, () => o.arrange(e, r.translateBy(t), n));
		if (i.length && a.length) for (let { title: r, frame: a } of i) c.queueDecoration(r.titleSpec.zindex, Q.title, () => r.arrange(e, pb(s, a, r.titleSpec).translateBy(t), n));
		c.arrange(), e.popView(this);
	}
	getInteractionCell(e) {
		return this.#o.find((t) => t.viewportCoords.containsPoint(e.x, e.y));
	}
	getZoomCoords(e) {
		let t = this.getInteractionCell(e);
		if (t) return t.childCoords;
		if (!this.#s.containsPoint(e.x, e.y)) return;
		let n, r = Infinity;
		for (let { childCoords: t, viewportCoords: i } of this.#o) {
			if (i.width <= 0 || i.height <= 0) continue;
			let a = e.x - St(e.x, t.x, t.x2), o = e.y - St(e.y, t.y, t.y2), s = a * a + o * o;
			s < r && (n = t, r = s);
		}
		if (n) return n.translate(e.x - St(e.x, n.x, n.x2), e.y - St(e.y, n.y, n.y2));
	}
	propagateInteraction(e) {
		sy(this, e, () => {
			let t = this.getInteractionCell(e.point);
			t && (e.facetId = t.cell.facetId, this.child.propagateInteraction(e));
		});
	}
	#g() {
		let e = this.flowHandle?.collector;
		e && e !== this.#c && (this.#c = e, this.registerDisposer(e.observe(this.#l)), this.#_(), this.invalidateSizeCache());
	}
	#_() {
		let e = uC(this.#e, this.#c);
		return V(e.row, this.#a.row) && V(e.column, this.#a.column) ? !1 : (this.#a = e, this.invalidateSizeCache(), !0);
	}
	#v(e) {
		for (let t of [
			"scale",
			"axis",
			"legend"
		]) {
			if (e !== this && t === "legend") continue;
			let n = e.spec.resolve?.[t] ?? {}, r = e === this ? n : {
				x: n.x ?? n.default,
				y: n.y ?? n.default
			};
			for (let [n, i] of Object.entries(r)) if (i === "independent") throw Error(`FacetView currently supports only shared ${t} resolutions. Channel "${n}" is resolved independently in view "${e.name}".`);
		}
	}
}, lC = class extends pS {
	getInteractionCoords(e) {
		return this.layoutParent.getInteractionCell(e)?.childCoords;
	}
	getProjectionCoords(e, t) {
		return this.getInteractionCoords(t);
	}
	getAxisResolutionForAxis(e) {
		return this.view.getAxisResolution(e);
	}
};
function uC(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	for (let i of t?.completed ? t.facetBatches.keys() : []) {
		if (i === void 0) continue;
		let t = B(i);
		e.row && n.add(t[0]), e.column && r.add(t.at(-1));
	}
	return {
		row: dC(n, e.row),
		column: dC(r, e.column)
	};
}
function dC(e, t) {
	let n = L(t?.domain);
	if (t && Object.hasOwn(t, "domain")) {
		if (!fC(n)) throw Error("Facet domain must resolve to an array of scalar values.");
		e = new Set(n);
	}
	let r = t?.sort ?? (n === void 0 ? "ascending" : void 0);
	if (r === void 0) return Array.from(e);
	if (Array.isArray(r)) {
		let t = new Set(r);
		return Array.from(t).filter((t) => e.has(t)).concat(Array.from(e).filter((e) => !t.has(e)));
	}
	return Array.from(e).sort(r === "descending" ? (e, t) => pC(t, e) : pC);
}
function fC(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e));
}
function pC(e, t) {
	return e < t ? -1 : +(e > t);
}
function mC(e) {
	let t, n, r = e.facet;
	if (tp(r)) n = hC(r, "column");
	else if (np(r)) t = hC(r.row, "row"), n = hC(r.column, "column");
	else throw Error("Invalid facet specification: " + JSON.stringify(r));
	if (e.columns !== void 0 && !tp(r)) throw Error("Facet \"columns\" requires a single field definition, not a row/column mapping.");
	if (e.columns !== void 0 && (!Number.isInteger(e.columns) || e.columns < 1)) throw Error("Facet \"columns\" must be a positive integer.");
	let i = [t?.field, n?.field].filter((e) => e !== void 0);
	if (!i.length) throw Error("Facet specification must define at least one field.");
	return {
		row: t,
		column: n,
		fields: i
	};
}
function hC(e, t) {
	if (e === void 0) return;
	if (!tp(e)) throw Error(`Facet ${t} definition must define a field.`);
	let n = e.sort;
	if (n !== void 0 && n !== "ascending" && n !== "descending" && !fC(n)) throw Error("Facet sort must be \"ascending\", \"descending\", or an array of scalar values.");
	let r = e.header;
	if (r != null && (typeof r != "object" || Array.isArray(r) || Object.keys(r).some((e) => !aC.has(e)) || r.labels !== void 0 && typeof r.labels != "boolean" || r.format !== void 0 && typeof r.format != "string")) throw Error("Facet header must be null or an object with supported title properties, boolean \"labels\", and string \"format\".");
	return e;
}
function gC(e = 10) {
	if (typeof e != "number" && (typeof e != "object" || !e || Array.isArray(e) || Object.keys(e).some((e) => e !== "row" && e !== "column"))) throw Error("Facet spacing must be a number or an object with \"row\" and \"column\" gaps.");
	let { row: t = 10, column: n = 10 } = typeof e == "number" ? {
		row: e,
		column: e
	} : e;
	if (![t, n].every((e) => Number.isFinite(e) && e >= 0)) throw Error("Facet spacing must use finite nonnegative numbers.");
	return {
		row: t,
		column: n
	};
}
//#endregion
//#region ../core/src/view/surroundView.js
var _C = [
	"top",
	"right",
	"bottom",
	"left"
], vC = class e extends BS {
	#e;
	#t = /* @__PURE__ */ new Map();
	#n = {
		x: 0,
		y: 0
	};
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, 3, a), this.spec = e;
		for (let t of Object.keys(e.surround)) if (!_C.includes(t)) throw this.#o(`Unknown surround side "${t}".`, e, ["surround", t]);
		if ("axes" in e || "viewportWidth" in e || "viewportHeight" in e) throw this.#o("Surround axes and viewports must be configured on its plots.", e);
		bC(e, this);
		for (let t of ["x", "y"]) if (this.getConfiguredOrDefaultResolution(t, "axis") !== "independent") throw this.#o("Surround does not support cross-region shared axes.", e, [
			"resolve",
			"axis",
			t
		]);
	}
	async initializeChildren() {
		this.#e = await this.context.createOrImportView(this.#i(this.spec.spec), this, this, "center", (e) => this.#a(e), { inheritEncoding: !0 });
		let e = await Promise.all(_C.flatMap((e) => {
			let t = this.spec.surround[e];
			return t === void 0 ? [] : [this.#r(e, t)];
		}));
		this.setChildren([this.#e, ...e]);
	}
	async #r(e, t) {
		let n = yC(e), r = n === "x" ? "y" : "x", i = n === "x" ? "width" : "height", a = Array.isArray(t) ? this.spec : t, o = Array.isArray(t) ? ["surround", e] : void 0, s = Array.isArray(t) ? { views: t } : t;
		if (!Array.isArray(s.views)) throw this.#o(`Surround ${e} requires a views array.`, a, o ?? ["views"]);
		let c = [
			"width",
			"height",
			"viewportWidth",
			"viewportHeight"
		].find((e) => e in s);
		if (c) throw this.#o(`Surround ${e} groups inherit their aligned size from the center; specify thickness on their plots.`, a, [c]);
		bC(s, this);
		let { views: l, ...u } = s, d = Ge(u);
		delete d.overhang;
		let f = l.map((t) => this.#i(t, e)), p = Ft(a, {
			...d,
			[i]: "container",
			...n === "x" ? { vconcat: f } : { hconcat: f }
		}, o), m = await this.context.createOrImportView(p, this, this, e, void 0, {
			inheritEncoding: !0,
			collapseWhenEmpty: !0,
			alignedChannel: n,
			resolutionBoundaryChannels: [r],
			childSpecValidator: (t) => this.#a(t, e)
		});
		return Array.isArray(t) && W(m), this.#t.set(m, e), m;
	}
	#i(e, t) {
		let n = Ge(e);
		return Eg(n) || this.#a(n, t), n;
	}
	#a(e, t) {
		let n = t && Ag(e);
		if (!wg(e) && !n) throw this.#o(`Surround ${t ?? "center"} accepts unit or layer plots${t ? " and nested surrounds" : ""}.`, e);
		let r = t ? yC(t) : this.options.imposedAlignmentChannel;
		if (r) {
			let i = r === "x" ? "width" : "height";
			if (e[i] !== void 0) throw this.#o(`Surround ${t ?? "center"} plots inherit ${i} from the center; specify only their thickness.`, e, [i]);
			n || (e[i] = "container");
		}
		if ("viewportWidth" in e || "viewportHeight" in e) throw this.#o("Surround plots do not support scrollable viewports.", e);
	}
	#o(e, t, n = []) {
		return new Er(e, this).withSpecLocation(t, n);
	}
	isConfiguredVisible() {
		return super.isConfiguredVisible() && (this.#e?.isConfiguredVisible() ?? !1);
	}
	getDefaultResolution(e, t) {
		return t === "scale" && (e === "x" || e === "y") ? "shared" : "independent";
	}
	get visibleChildren() {
		return this.isConfiguredVisible() ? super.visibleChildren : [];
	}
	get layoutGrid() {
		let e = this.visibleChildren.map(({ view: e }) => e === this.#e ? "center" : this.#t.get(e)), t = Number(e.includes("left")), n = Number(e.includes("top")), r = {
			center: [t, n],
			top: [t, 0],
			right: [t + 1, n],
			bottom: [t, n + 1],
			left: [0, n]
		};
		return new bv(e.map((e) => r[e]));
	}
	getPlotSizeChildren(e, t) {
		let n = t.find(({ view: e }) => e === this.#e);
		return n ? [n] : t;
	}
	alignsChild(e, t) {
		let n = this.#t.get(e);
		return e === this.#e || n !== void 0 && yC(n) === t;
	}
	getAlignmentAnchor(e) {
		return this.#e;
	}
	getFlexItems(e) {
		let t = super.getFlexItems(e), n = e === "column" ? "x" : "y";
		if (this.options.imposedAlignmentChannel === n || !t.length) return t;
		let r = this.layoutGrid.getCellCoords(0)[n === "x" ? 0 : 1], i = this.getViewSlot(r);
		return t.some((e, t) => t !== i && e.grow) ? t.map((e, t) => t !== i && e.grow ? { px: or((e.px ?? 0) + e.grow * this.#n[n], e) } : e) : t;
	}
	getStructuralSizeDefs(e) {
		let t = e === "x" ? "column" : "row", n = super.getFlexItems(t);
		if (!n.length || this.options.imposedAlignmentChannel === e) return super.getStructuralSizeDefs(e);
		let r = this.layoutGrid.getCellCoords(0)[e === "x" ? 0 : 1], i = this.getViewSlot(r), a = this.getGridOverhang();
		return {
			before: Pn(Fn(n.slice(0, i)), -a[e === "x" ? "left" : "top"]),
			after: Pn(Fn(n.slice(i + 1)), -a[e === "x" ? "right" : "bottom"])
		};
	}
	prepareLayoutSize(e, t, n, r) {
		if (n === this.#n.x && r === this.#n.y) return !1;
		let i = this.getOverhang();
		this.#n = {
			x: n,
			y: r
		}, this._invalidateCacheByPrefix("size");
		let a = this.getOverhang();
		return _C.some((e) => i[e] !== a[e]);
	}
	getTrackSizeAndInsets(e, t, n, r) {
		let i = { ...r }, a = e === "x" ? "width" : "height";
		if (t.some((e) => e.view === this.#e)) {
			let t = e === "x" ? ["left", "right"] : ["top", "bottom"];
			for (let [e, n] of t.entries()) this.visibleChildren.some((e) => this.#t.get(e.view) === n) && (i[e === 0 ? "before" : "after"] = 0);
		} else {
			let o = t[0], s = this.#t.get(o.view), c = s === "left" || s === "top" ? "before" : "after", l = this.getChildOverhangAndPadding(o)[a] + (this.spec.spacing ?? 10), u = this.#s(e, c);
			if (n.grow) {
				let e = Math.min(n.maxPx ?? Infinity, u - l);
				e > Rn(n) && (n = {
					...n,
					minPx: e
				});
			}
			i[c] = Math.max(r[c], u - Rn(n) - l);
		}
		return {
			size: n,
			...i
		};
	}
	#s(e, t) {
		return Math.max(0, ...this.visibleChildren.filter((t) => this.alignsChild(t.view, e)).map((n) => n.view.getAlignment(e)[t]));
	}
	getChildOverhangAndPadding(e) {
		let t = this.#t.get(e.view);
		if (!t) return e.getOverhangAndPadding();
		let n = this.spec.surround[t], r = Array.isArray(n) ? void 0 : n.overhang, i = e.view.getStructuralOverhang(), a = Ln(e.getOverhangAndPadding(), r, i), o = yC(t) === "x", s = o ? ["left", "right"] : ["top", "bottom"], c = { ...a };
		for (let n of s) {
			let a = this.visibleChildren.find(({ view: e }) => this.#t.get(e) === n);
			if (!a || a.view.getAlignment(yC(n))[t === "top" || t === "left" ? "before" : "after"] > 0 || r?.[n] === !0 || this.#c(e.view, n) || !o && a.getOverhangAndPadding()[t] > 0) continue;
			let s = o ? "width" : "height", l = Rn(a.view.getViewportSize()[s]) + (this.spec.spacing ?? 10);
			c[n] = Math.max(i[n], c[n] - l);
		}
		return U.createFromRecord(c);
	}
	#c(e, t) {
		return [e, ...e.children].some((e) => e.isConfiguredVisible() && (e.spec.overhang?.[t] === !0 || e.getPadding()[t] > 0));
	}
	getTrackPlotGeometry() {
		let e = this.#e.coords;
		return e ? {
			content: e,
			viewport: e
		} : void 0;
	}
	async syncGuideViews(e) {
		this.#l(), await super.syncGuideViews(e);
	}
	#l() {
		if (this.resolutions.axis.x || this.resolutions.axis.y) throw this.#o("Surround does not support axes hoisted from its plots.", this.spec);
		let e = new Set(Array.from(this.#t.values(), yC));
		for (let t of e) this.#u(this.#e, t, "center");
		for (let [e, t] of this.#t) this.#u(e, yC(t), t);
		for (let e of this.getDescendants()) if (e instanceof Z && !In(e)) for (let t of ["x", "y"]) {
			let n = e.getAxisResolution(t);
			if (n && this.getDataAncestors().includes(n.hostView)) throw new Er("Surround does not support axes hoisted from its plots.", e);
		}
	}
	#u(t, n, r) {
		t.visit((t) => {
			if (t instanceof e) return this.#u(t.#e, n, r), Qn;
			if (t instanceof Z && !In(t)) for (let e of [n, n === "x" ? "x2" : "y2"]) {
				let i = It(t.mark.encoding[e]);
				if (!i || i.scale === null) continue;
				let a = tt(i.resolutionChannel ?? e);
				if (!Kt(a) || t.getScaleResolution(a) !== this.#e.getScaleResolution(n)) throw new Er(`Surround ${r} plot "${t.name}" must share the center's ${n} scale.`, t).withSpecLocation(t.spec, ["encoding", e]);
			}
		});
	}
	arrange(t, n, r = {}) {
		if (!this.layoutParent) {
			let e = this.getPadding();
			this.prepareLayoutSize(n.width, n.height, _r(super.getFlexItems("column"), n.width - e.width).growth, _r(super.getFlexItems("row"), n.height - e.height).growth);
		}
		if (super.arrange(t, n, r), !this.isConfiguredVisible()) return;
		this.#l();
		let i = this.#e.coords, a = .5 / t.getDevicePixelRatio();
		for (let [t, n] of this.#t) {
			let r = yC(n), o = r === "x" ? "width" : "height";
			t.visit((t) => {
				if (!t.isConfiguredVisible() || In(t)) return Qn;
				if (t instanceof Z || t instanceof e) {
					let s = t.getAlignmentCoords(r);
					if (Math.abs(s[r] - i[r]) > a || Math.abs(s[o] - i[o]) > a) throw new Er(`Surround ${n} plot "${t.name}" has an incompatible ${r} plotting span.`, t);
					if (t instanceof e) return Qn;
				}
			});
		}
		if (this.children.some((t) => t instanceof BS && t.children.some((t) => t instanceof e))) {
			let e = this.visibleChildren.map((e) => e.view.getLayoutFootprints());
			for (let t = 0; t < e.length; t++) for (let n = t + 1; n < e.length; n++) for (let r of e[t]) for (let t of e[n]) {
				if (r.chrome && t.chrome) continue;
				let e = r.coords, n = t.coords;
				if (Math.min(e.x2, n.x2) - Math.max(e.x, n.x) > a && Math.min(e.y2, n.y2) - Math.max(e.y, n.y) > a) throw new Er(`Surround panels "${r.view.name}" and "${t.view.name}" overlap.`, t.view).withSpecLocation();
			}
		}
	}
};
function yC(e) {
	return e === "top" || e === "bottom" ? "x" : "y";
}
function bC(e, t) {
	if (e.params?.some((e) => nt(e) || $e(e) && s(e.select).type === "interval")) throw new Er("Surround input controllers must be configured on its plots.", t);
}
//#endregion
//#region ../core/src/config/resolveConfig.js
function xC({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return G([
		e,
		t,
		n
	]);
}
function SC(e, t) {
	if (e || t) return G([e, t]);
}
//#endregion
//#region ../core/src/view/viewFactory.js
var CC = "viewRoot", wC = /* @__PURE__ */ new WeakMap();
function TC(e) {
	return wC.get(e) ?? e;
}
var EC = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(Cg, t(yv)), this.addViewType(pg, ((e, t, n, r, i, a) => new yv(mg(e), t, n, r, i, a))), this.addViewType(Sg, t(Z)), this.addViewType(Dg, t(XS)), this.addViewType(Og, t(XS)), this.addViewType(kg, t(XS)), this.addViewType(Tg, t(cC)), this.addViewType(Ag, t(vC));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw kC(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let c, l = Eg(e) ? e.name ?? null : void 0;
		if (Eg(e)) {
			let i;
			if ("url" in e.import) {
				if (this.options.allowImport) i = await op(e, r.getBaseUrl(), t);
				else throw new Er("Importing views is not allowed!", n);
			} else if ("template" in e.import) i = DC(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), OC(i, e), c = i;
		} else c = e;
		r || (c = Ft(c, {
			...c,
			params: kc(c.params)
		}));
		let u = (e) => e?.params?.some((e) => $e(e) && s(e.select).type == "interval"), d = Dg(c) || Og(c) || kg(c) || Ag(c), f = !r && this.options.wrapRoot && i === "viewRoot" && (!d || c.title !== void 0 || u(c));
		if (f) {
			let e = Ft(c, { ...c });
			delete e.theme, c = {
				name: "implicitRoot",
				vconcat: [e]
			};
		}
		let p = this.createView(c, t, n, r, i, o);
		try {
			if (l !== void 0 && pr(p, l), f && W(p), p instanceof zr && await p.initializeChildren(), f) {
				let e = p;
				wC.set(p, e.children[0]);
			}
			return p.registerSizeInvalidation(), p;
		} catch (e) {
			throw p.disposeSubtree({ checkDependencies: !1 }), e;
		}
	}
};
function DC(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return Ge(n);
	if (t.dataParent) return DC(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function OC(e, t) {
	t.name != null && (e.name = t.name), t.visible != null && (e.visible = t.visible), t.zindex != null && (e.zindex = t.zindex), e.config = SC(t.config, e.config);
	let n = _(t.params) ? t.params : R(t.params) ? Object.entries(t.params).map(([e, t]) => ({
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
function kC(e) {
	return "samples" in e && R(e.samples) && "spec" in e && R(e.spec);
}
//#endregion
//#region ../core/src/utils/inertia.js
var AC = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = Zn(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = Ee([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
	}
	stop() {
		this.smoother.stop(), this.targetValue = this.lastValue, this.callback = null;
	}
	setMomentum(e, t) {
		if (this.disabled) {
			t(e);
			return;
		}
		this.callback = t;
		let n = St(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function jC(e) {
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
var MC = class {
	markHit;
	#e;
	#t;
	constructor(e, t, n) {
		this.point = e, this.#n = t, this.stopped = !1, this.wheelClaimed = !1, this.wheelOwner = void 0, this.wheelScroll = void 0, this.wheelSmooth = !0, this.#r = n, this.pointedViews = /* @__PURE__ */ new Map(), this.facetId = void 0, this.target = void 0, this.currentTarget = void 0, this.relatedTarget = void 0;
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
	claimWheel(e = this.target, { scroll: t = void 0, smooth: n = !0 } = {}) {
		if (this.type !== "wheel" && this.type !== "wheelclaimprobe") throw Error("Can claim wheel only for wheel events!");
		this.wheelClaimed = !0, this.wheelOwner = e, this.wheelScroll = t, this.wheelSmooth = n;
	}
	get wheelIntent() {
		return "intent" in this.uiEvent ? this.uiEvent.intent ?? "default" : "default";
	}
	setWheelDeltas(e, t) {
		if (!fy(this.uiEvent)) throw Error("Not a WheelEvent!");
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
		return this.#e ||= my(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if ("sourceEvent" in this.uiEvent) return this.uiEvent.sourceEvent;
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if ("sourceEvent" in this.uiEvent) return this.uiEvent.sourceEvent;
		if (!fy(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= py(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
};
//#endregion
//#region ../core/src/genomeSpy/interactionDispatcher.js
function NC(e, t) {
	return e === t || e !== void 0 && t !== void 0 && V(e, t);
}
var PC = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ new Map();
	constructor({ viewRoot: e }) {
		this.#e = e;
	}
	dispatch(e, t, n) {
		this.#t = e;
		let r = new MC(e, t);
		return r.markHit = n, this.#e.propagateInteraction(r), this.#n = r.target, r.type === "mousemove" && this.#i(r), r;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.size === 0) {
			this.#r.clear(), this.#n = void 0;
			return;
		}
		let t = new MC(this.#t, e, "mouseleave");
		this.#a(t, Array.from(this.#r.keys()), "mouseleave", void 0, this.#r), this.#r.clear(), this.#n = void 0;
	}
	getCurrentTarget() {
		return this.#n;
	}
	#i(e) {
		let t = e.pointedViews;
		if (t.size === 0) for (let n of this.#o(e.target)) t.set(n, void 0);
		let n = Array.from(t.keys()), r = Array.from(this.#r.keys()), i = r.filter((e) => !t.has(e) || !NC(t.get(e), this.#r.get(e))), a = n.filter((e) => !this.#r.has(e) || !NC(t.get(e), this.#r.get(e)));
		i.length > 0 && this.#a(e, i, "mouseleave", n.at(-1), this.#r), a.length > 0 && this.#a(e, a, "mouseenter", r.at(-1), t), this.#r = t;
	}
	#a(e, t, n, r, i) {
		for (let a = 0; a < t.length; a++) {
			let o = t[n === "mouseleave" ? t.length - 1 - a : a], s = new MC(e.point, e.uiEvent, n);
			if (s.target = o, s.currentTarget = o, s.relatedTarget = r, s.facetId = i.get(o), s.pointedViews = e.pointedViews, this.#s(o, s), s.stopped) return;
		}
	}
	#o(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#s(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, FC = class {
	#e;
	#t;
	#n;
	#r;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#i(IC(e, t));
	}
	clear() {
		this.#i(void 0);
	}
	#i(e) {
		let t = e?.getCursorSpec?.();
		this.#t === e && this.#n === t || (this.#r?.(), this.#r = void 0, this.#t = e, this.#n = t, e?.watchCursor?.(() => this.#a(), (e) => {
			this.#r = e;
		})), this.#a();
	}
	#a() {
		let e = this.#t?.getCursor();
		this.#e.style.cursor = typeof e == "string" ? e : "";
	}
};
function IC(e, t) {
	let n = t?.mark;
	if (n?.getCursorSpec?.() !== void 0) return n;
	for (let t of e?.getLayoutAncestors() ?? []) if (t.getCursorSpec?.() !== void 0) return t;
}
//#endregion
//#region ../core/src/genomeSpy/interactionController.js
var LC = class {
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
	#m;
	#h;
	#g = !1;
	#_ = !1;
	#v = !1;
	#y = 0;
	#b = !1;
	#x = 0;
	#S = new Xf();
	#C = /* @__PURE__ */ new Set();
	#w = /* @__PURE__ */ new Set();
	#T;
	#E = (e) => console.error(e);
	#D = () => !0;
	#O() {
		this.#n.sticky = !1, this.#v = !0, this.#n.clear();
	}
	constructor({ viewRoot: e, canvas: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, readPickingId: s, reportError: c, canPick: l, wheelBehavior: u = "default" }) {
		this.#e = e, this.#p = u, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o ?? (() => {}), this.#s = s, this.#E = c ?? this.#E, this.#D = l ?? this.#D, this.#c = new PC({ viewRoot: e }), this.#l = new FC({ canvas: t }), this.#u = void 0, this.#d = new AC(this.#r), this.#m = void 0, this.#h = void 0;
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
		return this.#C.add(r), () => this.#C.delete(r);
	}
	subscribeHover(e, t) {
		let n = {
			view: e,
			listener: t
		};
		this.#w.add(n);
		try {
			t(this.#V(e));
		} catch (e) {
			this.#E(e);
		}
		return () => this.#w.delete(n);
	}
	async pick(e, t) {
		if (!this.#s) throw Error("Explicit picking is not supported by this renderer.");
		let n = new gy(e.x, e.y);
		if (!this.#j(n)) throw Error("Pick point must be inside the canvas.");
		if (!this.#D()) return { status: "invalidated" };
		let r = this.#x;
		this.#o();
		let i = await this.#s(e.x, e.y);
		if (r !== this.#x) return { status: "invalidated" };
		let a = this.#z(e.x, e.y, i ?? 0, t);
		return a ? {
			status: "hit",
			hit: a
		} : { status: "empty" };
	}
	invalidatePendingPicks() {
		this.#x++;
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
		return this.#S.add(e, t), () => this.#S.remove(e, t);
	}
	suspendHoverTracking() {
		this.#y++, !this.#_ && (this.#U(), this.#F());
	}
	resumeHoverTracking(e) {
		if (!(this.#y <= 0) && (this.#y--, !(this.#y > 0) && (this.#F(), !this.#I()))) {
			if (e) {
				let t = this.#A(e);
				if (this.#h = t, this.#j(t)) {
					this.#N(t);
					return;
				}
				this.#c.handlePointerLeave(e);
			} else if (this.#h && this.#j(this.#h)) {
				this.#N(this.#h);
				return;
			}
			this.#U(), this.#l.clear();
		}
	}
	registerInteractionEvents() {
		let e = this.#t, t = [], n = (e, n, r, i) => {
			e.addEventListener(n, r, i), t.push(() => e.removeEventListener(n, r, i));
		}, r = performance.now(), i = !1, a;
		globalThis.document?.addEventListener && n(document, "mousedown", (t) => {
			this.#n.sticky && !t.composedPath().includes(e) && !this.#n.containsEvent(t) && this.#O();
		}, { capture: !0 });
		let o = (e, t, n) => {
			let r = this.#c.dispatch(e, t, n);
			return !this.#g && !this.#_ && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#y === 0 && this.#P(r.target), r;
		}, s, c, l = (e, t) => {
			let n = {};
			c = n;
			let r, i = this.#L(e.x, e.y, () => c === n && !s, (e) => {
				r = e ?? null;
			});
			i ? i.then((i) => {
				if (c !== n) return;
				c = void 0, i && o(e, t, r);
				let a = s;
				s = void 0, a && l(a.point, a.event);
			}) : (c = void 0, o(e, t, r));
		}, u, d = (e, t) => {
			let n = e.then((e) => {
				u === n && (u = void 0), e && t();
			});
			u = n;
		}, f = (e) => {
			let t = performance.now(), n = t - r < 200;
			if (e instanceof MouseEvent) {
				let a = this.#A(e), f = !1;
				if (this.#S.emit(e.type, {
					sourceEvent: e,
					point: a,
					preventViewDefault: () => {
						f = !0;
					}
				}, this.#E), f) {
					e.type === "wheel" && this.#k();
					return;
				}
				let p, m;
				if ([
					"click",
					"dblclick",
					"contextmenu"
				].includes(e.type) && (p = this.#L(a.x, a.y, void 0, (t) => {
					m = t ?? null, this.#B(e, a, t);
				}, u)), e.type !== "contextmenu" && this.#I()) {
					e.type === "wheel" && this.#k();
					return;
				}
				this.#h = a;
				let h = !1;
				if (e.type == "mousemove" && !n && this.#y === 0 && (this.#v = !1, this.#n.handleMouseMove(e), this.#g = !1, e.buttons == 0 && !Sy() && (c ? s = {
					point: a,
					event: e
				} : l(a, e), h = !0)), e.type == "mousemove" && !h && (c = void 0, s = void 0), h) {
					this.#d.cancel();
					return;
				}
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !Sy()) this.#o();
				else if (e.type == "wheel") {
					r = t, this.#g = !1;
					let n = e, i = Math.abs(n.deltaX) > Math.abs(n.deltaY), s = this.#p === "cooperative", c = s && !n.ctrlKey;
					if (!n.deltaX && !n.deltaY || c && i) {
						this.#k();
						return;
					}
					let l = () => o(a, {
						type: "wheelclaimprobe",
						sourceEvent: n,
						intent: c ? "scroll" : s ? "chart" : "default"
					}), u = l();
					if (u.wheelScroll) {
						this.#k(), n.preventDefault(), u.wheelScroll();
						return;
					}
					if (c) {
						this.#k();
						return;
					}
					if (!u.wheelClaimed) {
						if (this.#k(), s) return;
					} else if (Cy(this.#r), this.#f !== u.wheelOwner && this.#k(), this.#f = u.wheelOwner, n.preventDefault(), !i && u.wheelSmooth) {
						let e = u.wheelOwner, t = jC(n);
						this.#d.setMomentum(n.deltaY * (n.deltaMode ? 80 : 1), (r) => {
							let i = l();
							!i.wheelClaimed || i.wheelScroll || i.wheelOwner !== e || !i.wheelSmooth ? this.#k() : o(a, new WheelEvent("wheel", {
								...t,
								ctrlKey: n.ctrlKey,
								deltaMode: 0,
								deltaX: 0,
								deltaY: r
							}));
						});
						return;
					}
					this.#d.stop(), i && this.#U();
				}
				if (e.type == "click") {
					if (i) return;
					let t = this.#m?.subtract(gy.fromMouseEvent(e)).length >= 3, n = () => {
						let n = this.#u ? {
							type: e.type,
							viewPath: this.#u.mark.unitView.getLayoutAncestors().map((e) => e.name).reverse(),
							datum: this.#u.datum
						} : {
							type: e.type,
							viewPath: null,
							datum: null
						};
						if (this.#i("click", n), !t) return o(a, e, m);
					};
					if (p) {
						d(p, n);
						return;
					}
					return n();
				}
				let g = () => {
					let t = o(a, e, m);
					return e.type === "dblclick" && this.#y === 0 && this.#j(a) && this.#M(), t;
				};
				if (p) {
					d(p, g);
					return;
				}
				return g();
			}
		};
		n(e, "mousedown", (e) => {
			this.#m = gy.fromMouseEvent(e), this.#_ = !1;
			let t = e.shiftKey || e.ctrlKey || e.metaKey;
			this.#n.sticky ? (this.#O(), i = !0) : i = !1;
			let n = () => {
				document.addEventListener("mouseup", () => this.#n.popEnabledState(), {
					once: !0,
					capture: !0
				}), this.#n.pushEnabledState(!1);
			};
			if (e.button == 2) n();
			else if (e.button == 0 && this.#n.visible) {
				this.#_ = !0;
				let e;
				t || (e = setTimeout(() => {
					i = !0, this.#_ = !1, this.#n.sticky = !0;
				}, 400));
				let n = (t) => {
					clearTimeout(e), this.#_ && (this.#_ = !1, t && this.#y > 0 && this.#F());
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
		].forEach((t) => n(e, t, f, t === "wheel" ? { passive: !1 } : void 0));
		let p = (e) => {
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
				distance: RC(t, n)
			};
		}, m = (t, n, r, i, a, s, c) => {
			let l = zC(e, t, n);
			o(l, {
				type: "touchgesture",
				phase: r,
				pointerCount: i,
				xDelta: a,
				yDelta: s,
				zDelta: c
			});
		}, h = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#g = !1;
			let t = p(e.touches);
			if (!t) {
				a = void 0;
				return;
			}
			if (!a || a.pointerCount !== t.pointerCount) {
				a = t;
				return;
			}
			let n = t.centerX - a.centerX, r = t.centerY - a.centerY, i = t.pointerCount === 2 ? BC(a.distance, t.distance) : 0;
			(n !== 0 || r !== 0 || i !== 0) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && m(a.centerX, a.centerY, "move", t.pointerCount, n, r, i), a = t;
		}, g = (e) => {
			e.preventDefault(), this.#g = !1, a && e.touches.length === 0 && m(a.centerX, a.centerY, "end", a.pointerCount, 0, 0, 0), a = p(e.touches);
		};
		return n(e, "touchstart", h, { passive: !1 }), n(e, "touchmove", h, { passive: !1 }), n(e, "touchend", g, { passive: !1 }), n(e, "touchcancel", g, { passive: !1 }), n(e, "dragstart", (e) => e.stopPropagation()), n(e, "mouseout", (e) => {
			this.#I() || (this.#y > 0 ? this.#F() : (this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#U(), this.#h = void 0, c = void 0, s = void 0));
		}), () => {
			this.#k();
			for (let e of t) e();
			this.#S.clear(), this.#C.clear(), this.#w.clear();
		};
	}
	#k() {
		this.#d.stop(), this.#f = void 0, Cy(this.#r);
	}
	#A(e) {
		return zC(this.#t, e.clientX, e.clientY);
	}
	#j(e) {
		let t = this.#t;
		return e.x >= 0 && e.y >= 0 && e.x <= t.clientWidth && e.y <= t.clientHeight;
	}
	#M() {
		this.#b || (this.#b = !0, this.#r.requestRender(), window.requestAnimationFrame(() => {
			if (this.#b = !1, this.#y > 0 || this.#I()) return;
			let e = this.#h;
			!e || !this.#j(e) ? (this.#U(), this.#l.clear()) : (this.#F(), this.#N(e));
		}));
	}
	#N(e) {
		Sy() ? this.#P(this.#c.getCurrentTarget()) : this.#L(e.x, e.y, () => this.#y === 0 && !this.#I() && this.#h === e, () => this.#P(this.#c.getCurrentTarget()));
	}
	#P(e) {
		this.#l.update({
			target: e,
			hover: this.#u
		});
	}
	#F() {
		this.#n.clear(), this.#g = !1;
	}
	#I() {
		return typeof document < "u" && !!document.body && document.body.classList.contains("gs-freeze-interaction");
	}
	#L(e, t, n = () => !0, r, i) {
		let a = this.#x;
		this.#o();
		let o = this.#s?.(e, t) ?? 0, s = (i) => {
			if (a !== this.#x || !n()) return !1;
			this.#g = !1;
			let o = this.#z(e, t, i ?? 0);
			return this.#R(a, o), r?.(o), !0;
		};
		if (o instanceof Promise || i) return (i ? Promise.all([i, o]).then(([, e]) => e) : Promise.resolve(o)).then(s, (e) => (console.error("Picking failed.", e), !1));
		s(o);
	}
	#R(e, t) {
		if (this.#T = e, this.#H(t ?? null), this.#u) {
			let e = this.#u, t = e.mark;
			this.updateTooltip(e.datum, async (n) => {
				if (!t.isPickingParticipant()) return;
				let r = t.properties.tooltip;
				if (r !== null && r !== !1) {
					let i = r?.handler ?? "default", a = this.#a[i];
					if (!a) throw Error("No such tooltip handler: " + i);
					let o = k_(n, t, r?.params, e.facetId);
					return a(n, t, r?.params, o);
				}
			}, e);
		}
	}
	#z(e, t, n, r) {
		if (n === 0) return;
		let i, a = !1;
		return this.#e.visit((o) => {
			if (o instanceof Z && o.mark.isPickingParticipant() && (!r || o.getLayoutAncestors().includes(r))) for (let [r, s] of o.facetCoords) {
				let c = r !== void 0 && o.getLayoutAncestors().some((e) => Tg(e.spec)) ? r : void 0, l = s.containsPoint(e, t), u = o.mark.properties.clip, d = u === !0 || u === "x" && (e < s.x || e > s.x2) || u === "y" && (t < s.y || t > s.y2);
				if (!l && (c !== void 0 || a || d)) continue;
				let f = o.getCollector()?.findDatumByUniqueId(n);
				f && (i = {
					mark: o.mark,
					datum: f,
					uniqueId: n,
					...c === void 0 ? {} : { facetId: c }
				}, a = l);
				break;
			}
			if (a) return mr;
		}), i;
	}
	#B(e, t, n) {
		if (n) {
			for (let r of [...this.#C]) if (r.type === e.type && n.mark.unitView.getLayoutAncestors().includes(r.view)) try {
				let i = r.listener({
					sourceEvent: e,
					point: t,
					hit: n
				});
				i instanceof Promise && i.catch(this.#E);
			} catch (e) {
				this.#E(e);
			}
		}
	}
	#V(e) {
		let t = this.#u;
		return t && this.#T === this.#x && t.mark.isPickingParticipant() && t.mark.unitView.getLayoutAncestors().includes(e) ? t : void 0;
	}
	#H(e) {
		let t = this.#u;
		if (!(!t && !e || t && e && t.mark === e.mark && t.uniqueId === e.uniqueId && t.datum === e.datum && (t.facetId === e.facetId || t.facetId && e.facetId && V(t.facetId, e.facetId)))) {
			this.#u = e;
			for (let e of [...this.#w]) try {
				e.listener(this.#V(e.view));
			} catch (e) {
				this.#E(e);
			}
		}
	}
	#U() {
		this.#H(null);
	}
	updateTooltip(e, t, n = e) {
		if (!this.#v) {
			if (!this.#g || !e) this.#n.updateWithDatum(e, t, n), this.#g = !0;
			else throw Error("Tooltip has already been updated! Duplicate event handler?");
		}
	}
};
function RC(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function zC(e, t, n) {
	let r = e.getBoundingClientRect();
	return new gy(t - r.left - e.clientLeft, n - r.top - e.clientTop);
}
function BC(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region ../core/src/rendering/renderingBackend.js
async function VC(e) {
	if (e.renderer == "canvas") {
		if (!yr.canvasBackend) throw HC("canvas");
		return yr.canvasBackend(e);
	}
	if (e.renderer == "webgpu") {
		if (yr.webgpuBackend) return yr.webgpuBackend(e);
		throw Error("The experimental WebGPU renderer is only available in development and the playground preview.");
	}
	if (e.renderer != "auto" && e.renderer != "webgl") throw Error("Unknown renderer: " + e.renderer);
	let t = yr.webglBackend, n = yr.canvasBackend;
	if (!t) {
		if (e.renderer == "webgl") throw HC("webgl");
		if (n) return n(e);
		throw Error("No rendering backend is registered. Import \"@genome-spy/core/rendering/webgl.js\" or \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".");
	}
	try {
		return await t(e);
	} catch (t) {
		if (e.renderer == "webgl") throw t;
		if (!n) throw Error("WebGL2 initialization failed and the Canvas2D fallback is not registered. Import \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".", { cause: t });
		let r = await n(e);
		return Dr("WebGL2 is unavailable. Using the Canvas2D compatibility renderer."), r;
	}
}
function HC(e) {
	return /* @__PURE__ */ Error(`The "${e}" rendering backend is not registered. Import "@genome-spy/core/rendering/${e}.js" when using "@genome-spy/core/minimal".`);
}
//#endregion
//#region ../core/src/genomeSpy/viewContextFactory.js
function UC(e) {
	let t = (e) => {
		throw Error("ViewContext." + e + " is not configured.");
	}, n = {
		dataFlow: e.dataFlow ?? t("dataFlow"),
		getMarkRenderingDebugState: e.getMarkRenderingDebugState,
		animator: e.animator ?? t("animator"),
		genomeStore: e.genomeStore,
		textMetrics: e.textMetrics ?? t("textMetrics"),
		reportError: e.reportError,
		getSpecOrigin: e.getSpecOrigin,
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
var WC = {
	xOffset: 0,
	yOffset: 0,
	opacity: 1,
	clamp: !1
}, GC = {
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
}, KC = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 3,
	cornerRadius: 0,
	minWidth: .5,
	minHeight: .5,
	minOpacity: 1
}, qC = {
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
}, JC = {
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
}, YC = {
	strokeAlign: "outside",
	filled: !0,
	fillOpacity: 1,
	strokeOpacity: 1,
	strokeWidth: 1,
	x2: void 0,
	y2: void 0,
	size: 1,
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt"
}, XC = {
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt",
	orient: void 0,
	thickness: 1
}, ZC = {
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
}, QC = {
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
}, $C = {
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
}, ew = { expr: "round(axisLength / (30 + 55 * smoothstep(100, 700, axisLength)))" }, tw = { tickCount: ew }, nw = { tickCount: ew }, rw = {
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
}, iw = {
	nominalColorScheme: "tableau10",
	ordinalColorScheme: "blues",
	quantitativeColorScheme: "viridis"
}, aw = {
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
}, ow = {
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
}, sw = {
	orient: "top",
	frame: "group",
	reserve: !1,
	anchor: "start",
	align: "left",
	baseline: "top",
	offset: -10,
	dx: 10,
	fontSize: 12
}, cw = {
	view: {},
	mark: WC,
	point: GC,
	rect: KC,
	arrow: qC,
	rule: YC,
	tick: XC,
	text: ZC,
	link: QC,
	axis: $C,
	axisX: tw,
	axisY: nw,
	axisLocus: rw,
	legend: Ib,
	legendTrack: zb,
	scale: iw,
	range: aw,
	title: ow,
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
		overlay: sw,
		"overlay-title": sw,
		"group-subtitle": {
			fontSize: 11,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		...Rb,
		...JC,
		"selection-brush": {
			fill: "#808080",
			fillOpacity: .05,
			stroke: "black",
			strokeWidth: 1,
			strokeOpacity: .2
		}
	}
};
//#endregion
//#region ../core/src/genomeSpy/headlessBootstrap.js
function lw(e) {
	pv(e), mv(e);
	let t = TC(e), n = t.paramRuntime.createExpression("defaultThemeColors");
	t.paramRuntime.computed("theme colors", n.dependencies, () => Ac(n()));
}
//#endregion
//#region ../core/src/utils/bindDisposer.js
function uw(e, t) {
	let n = !1, r = () => {
		n || (n = !0, t());
	};
	return e(r), r;
}
//#endregion
//#region ../core/src/paramRuntime/embedParamApi.js
function dw(e, t = {}) {
	return {
		get(n) {
			return pw(e, n, t);
		},
		getSelection(n) {
			return mw(e, n, t);
		}
	};
}
function fw(e, t, n, r) {
	xw(r);
	let i = e.paramRuntime.findConfiguredParam(t);
	if (!i) throw Error(`${n} "${t}" not found.`);
	let a = i.runtime.findRuntimeForParam(t);
	return {
		...i,
		valueRuntime: a
	};
}
function pw(e, t, n = {}) {
	let { runtime: r, valueRuntime: i } = fw(e, t, "Parameter", n);
	return bw(i, t, n, (e) => {
		r.setValue(t, e);
	});
}
function mw(e, t, n = {}) {
	let { config: r, runtime: i, valueRuntime: a } = fw(e, t, "Selection", n);
	if (!("select" in r)) throw Error("Parameter \"" + t + "\" is not a selection in this scope.");
	let o = s(r.select), c = T(o) ? a.getIntervalSelectionState(t) : void 0, l = (e) => gw(e, i, t);
	return {
		type: o.type,
		...o.type === "point" ? { membership: o.encodings ? "categories" : "records" } : {},
		getValue() {
			return xw(n), l(a.getValue(t));
		},
		subscribe(e, r = {}) {
			return xw(n), r.delivery === "commit" && c ? Sw(n, c.subscribeCommit((t) => vw(e, l(t)))) : yw(a, t, () => {
				vw(e, l(a.getValue(t)));
			}, n);
		},
		clear() {
			xw(n), c ? c.clear() : i.setValue(t, zt(o));
		},
		...me(o) ? { setValue(r) {
			xw(n), i.setValue(t, o.encodings ? we(o, r) : hw(e, o, r));
		} } : {},
		...c ? { contains(e) {
			xw(n);
			let r = i.getSelectionController(t);
			if (!r) throw Error("Selection \"" + t + "\" has no interaction host in this scope.");
			return r.contains(e);
		} } : {}
	};
}
function hw(e, t, n) {
	if (!Array.isArray(n)) throw Error("Expected an array of key tuples.");
	let r = t.toggle ? "multi" : "single";
	if (!n.length) return r === "multi" ? u() : ce(null);
	if (!(e instanceof Z)) throw Error("Set point selections through a source unit view.");
	let i = Rr(e.getEncoding());
	if (!i) throw Error("Setting point selections requires encoding.key.");
	for (let e of n) if (!Array.isArray(e) || e.length !== i.length || !e.every((e) => typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e))) throw Error("Key tuples must match encoding.key and contain finite scalar values.");
	let a = e.getCollector();
	if (!a || !jn(a)) throw Error("Selection source data is not ready.");
	let o = Se(r, i, n, (e, t) => a.findDatumByKey(e, t));
	if (o.unresolved.length) throw Error("Selection keys were not found in loaded data.");
	return o.selection;
}
function gw(e, t, n) {
	if (ae(e)) return {
		type: "point",
		membership: "categories",
		active: e.values.size > 0,
		encodings: [e.component],
		values: Array.from(e.values, (e) => [e])
	};
	if (g(e)) return {
		type: "interval",
		active: Object.values(e.intervals).some((e) => e !== null),
		intervals: Object.fromEntries(Object.entries(e.intervals).map(([e, t]) => [e, t ? [...t] : null])),
		complexIntervals: t.getComplexIntervals(n, e.intervals)
	};
	let r;
	if (i(e)) r = e.datum ? [e.datum] : [];
	else if (ne(e)) r = Array.from(e.data.values());
	else throw Error("Unsupported selection snapshot value.");
	return {
		type: "point",
		membership: "records",
		active: r.length > 0,
		data: r.map(_w)
	};
}
function _w(e) {
	let t = { ...e };
	return delete t.__uniqueId, t;
}
function vw(e, t) {
	try {
		e(t);
	} catch (e) {
		console.error(e);
	}
}
function yw(e, t, n, r) {
	let i = e.getParamRef(t);
	return Sw(r, e.effect([i], n));
}
function bw(e, t, n, r) {
	return {
		getValue() {
			return xw(n), e.getValue(t);
		},
		setValue(i) {
			if (xw(n), !e.isWritable(t)) throw Error("Cannot set computed parameter \"" + t + "\".");
			let a = e.findSelectionCapability(t);
			if (a && a.type !== "interval") throw Error(`Cannot set point selection parameter "${t}" through the embed API. Use getSelection().`);
			r(i);
		},
		subscribe(r) {
			return xw(n), yw(e, t, () => {
				vw(r, e.getValue(t));
			}, n);
		}
	};
}
function xw(e) {
	if (e.isActive && !e.isActive()) throw Error("Cannot use a parameter or selection handle after the embed was finalized.");
	if (e.isLive && !e.isLive()) throw Error("Cannot use a parameter or selection handle after its view was removed.");
}
function Sw(e, t) {
	return e.registerDisposer ? uw(e.registerDisposer, t) : t;
}
function Cw(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (e.visit((e) => {
		e.paramRuntime.paramConfigs.get(t) && n.add(e.paramRuntime.findRuntimeForParam(t));
	}), n.size === 0) throw Error("Parameter \"" + t + "\" not found.");
	if (n.size > 1) throw Error("Parameter \"" + t + "\" is ambiguous.");
	let r = n.values().next().value;
	return bw(r, t, {}, (n) => {
		r.setValue(t, n), e.context.animator.requestRender();
	});
}
//#endregion
//#region ../core/src/genome/rootGenomeConfig.js
function ww(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && Ew(t) ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: Tw()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !Ew(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function Tw() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function Ew(e) {
	try {
		return Wu(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../core/src/config/themes.js
var Dw = {
	mark: { color: "#4c78a8" },
	point: {
		filled: !1,
		size: 30
	},
	rule: { color: "black" },
	text: { color: "black" },
	link: { color: "black" },
	header: { color: "black" },
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
	axisLocus: {
		chromTickColor: "#989898",
		chromLabelColor: "black",
		chromGridColor: "gray"
	},
	legend: {
		symbolBaseStrokeColor: "#888",
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
		},
		"arrow-transcript": { color: "black" },
		"selection-brush": { stroke: "black" }
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
}, Ow = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: X("foreground") },
		text: { color: X("foreground") },
		link: { color: X("foreground") },
		header: { color: X("foreground") },
		axis: {
			labelColor: X("foreground"),
			titleColor: X("foreground"),
			domainColor: X("stroke"),
			tickColor: X("stroke"),
			gridColor: X("grid")
		},
		axisLocus: {
			chromTickColor: X("chromosomeTick"),
			chromLabelColor: X("foreground"),
			chromGridColor: X("stroke")
		},
		legend: { symbolBaseStrokeColor: X("symbolStroke") },
		style: {
			"arrow-transcript": { color: X("foreground") },
			"selection-brush": { stroke: X("foreground") },
			"gradient-selection-brush": { shadowColor: { expr: "defaultThemeColors.background || 'white'" } }
		}
	},
	vegalite: Dw,
	quartz: G([Dw, {
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
	dark: G([Dw, {
		background: "#333",
		view: {
			fill: "#333",
			stroke: "#888"
		},
		title: {
			color: "#fff",
			subtitleColor: "#fff"
		},
		axis: {
			domainColor: "#fff",
			gridColor: "#888",
			tickColor: "#fff",
			labelColor: "#fff",
			titleColor: "#fff"
		},
		text: { color: "#fff" },
		rule: { color: "#fff" },
		link: { color: "#fff" },
		header: { color: "#fff" },
		axisLocus: {
			chromLabelColor: "#fff",
			chromTickColor: "#aaa",
			chromGridColor: "#888"
		},
		legend: {
			labelColor: "#fff",
			titleColor: "#fff"
		},
		style: {
			"group-title": { color: "#fff" },
			"group-subtitle": { color: "#fff" },
			"arrow-transcript": { color: "#fff" },
			"selection-brush": { stroke: "#fff" },
			"gradient-selection-brush": { shadowColor: "#333" }
		}
	}]),
	fivethirtyeight: G([Dw, {
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
	urbaninstitute: G([Dw, {
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
}, kw = Object.keys(Ow);
function Aw(e) {
	let t = { ...Ow[e] };
	return delete t.background, t;
}
function jw(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in Ow));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + kw.join(", "));
	return t;
}
var Mw = "genomespy";
function Nw(e) {
	return Ow[e].background;
}
function Pw(e) {
	let t = jw(e);
	if (t.length != 0) return G(t.map((e) => Aw(e)));
}
//#endregion
//#region ../core/src/genomeSpy/canvasBackground.js
function Fw(e) {
	if (e.background !== void 0) return e.background;
	let t = e.theme ? Array.isArray(e.theme) ? e.theme : [e.theme] : [], n;
	for (let e of t) {
		let t = Nw(e);
		t !== void 0 && (n = t);
	}
	return n;
}
function Iw(e, t) {
	let n = Fw(e), r = Array.isArray(e.theme) ? e.theme.at(-1) : e.theme, i = n ?? (!r || r === "genomespy" ? X("background") : void 0);
	if (!F(i)) return () => i;
	let a = t.paramRuntime.createExpression(i), o = t.paramRuntime.computed("canvas background", a.dependencies, () => {
		let e = a();
		if (e !== null && typeof e != "string") throw Error("Canvas background expressions must return a color string or null.");
		return e ?? void 0;
	});
	return t.paramRuntime.effect([o], () => t.context.animator.requestRender()), () => o.get();
}
function Lw(e, t) {
	return t.background === void 0 ? e ?? "white" : t.background;
}
//#endregion
//#region ../core/src/genomeSpyBase.js
var Rw = class {
	#e = () => void 0;
	#t = [];
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l = !1;
	#u = !1;
	#d = !1;
	#f = !1;
	#p;
	#m = /* @__PURE__ */ new Set();
	#h = new Yf();
	#g = new Xf();
	#_ = new Xf();
	constructor(e, t, n = {}) {
		if (n.wheelBehavior !== void 0 && n.wheelBehavior !== "default" && n.wheelBehavior !== "cooperative") throw Error("Invalid wheelBehavior: " + n.wheelBehavior);
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new EC(), this.namedDataProviders = [], this.animator = new Yn(() => this.renderAll(), (e) => this.#M(e)), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: K_,
			refseqgene: d_,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#a = new Qf(e, n), this.dpr = window.devicePixelRatio;
	}
	get #v() {
		return this.container.querySelector(".canvas-wrapper");
	}
	get #y() {
		return this.#s.surface;
	}
	#b() {
		this.#a.initialize(this.viewRoot);
	}
	registerNamedDataProvider(e) {
		Dr("The `namedDataProvider` embed option is deprecated. Declare named datasets explicitly and update them through `api.datasets` or the owning `ViewHandle.datasets`."), this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		Dr("`updateNamedData()` is deprecated. Update an explicitly declared dataset through `api.datasets` or its owning `ViewHandle.datasets`.");
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
	}
	getParam(e) {
		return Cw(this.viewRoot, e);
	}
	addEventListener(e, t) {
		this.#g.add(e, t);
	}
	removeEventListener(e, t) {
		this.#g.remove(e, t);
	}
	broadcast(e, t) {
		let n = {
			type: e,
			payload: t
		};
		this.viewRoot.visit((e) => e.handleBroadcast(n)), this.#_.emit(e, n);
	}
	#x = () => {};
	#S() {
		this.dpr = this.#y.getDevicePixelRatio();
		let e = this.viewRoot.paramRuntime.allocateSetter("devicePixelRatio", this.dpr), t = () => {
			try {
				this.#y.invalidateSize(), this.dpr = this.#y.getDevicePixelRatio(), e(this.dpr), this.computeLayout(), this.renderAll();
			} catch (e) {
				this.#M(e);
			}
		};
		this.#x = t;
		let n = new ResizeObserver(() => {
			this.viewRoot.getSize().isGrowing() && t();
		});
		n.observe(this.container), this.#t.push(() => n.disconnect());
		let r = null, i = () => {
			r != null && (r(), t());
			let e = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
			e.addEventListener("change", i), r = () => {
				e.removeEventListener("change", i);
			};
		};
		i(), r && this.#t.push(r);
	}
	async #C() {
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = Sc(this.container), r = await VC({
			renderer: this.options.renderer ?? "auto",
			container: e,
			sizeSource: () => this.viewRoot ? sp(this.viewRoot) : {
				width: void 0,
				height: void 0
			},
			powerPreference: this.options.powerPreference ?? "default",
			onCanvasResize: () => this.#x(),
			onRenderInvalidated: () => this.animator.requestRender(),
			onError: (e) => this.#M(e),
			...this.options.fontCatalog === void 0 ? {} : { fontCatalog: this.options.fontCatalog }
		});
		if (this.#u) throw r.surface.finalize(), Error("GenomeSpy was destroyed during launch.");
		this.#s = r, e.appendChild(t), this.tooltip = n, this.#i = new qf(), this.#r = new Kf(t, this.#i, () => this.viewRoot);
	}
	destroy() {
		if (this.#u) return;
		this.#u = !0, this.#o?.invalidatePendingPicks(), this.animator.finalize();
		let e = this.#v;
		for (this.container.classList.remove("genome-spy"), e?.classList.remove("loading"), this.#h.removeAll(), this.#t.forEach((e) => e()), this.#i?.clear(), this.#w(), this.#a.remove(), this.#r?.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	#w() {
		this.viewRoot && this.#c !== this.viewRoot && (this.viewRoot.disposeSubtree(), this.#c = this.viewRoot), this.#s && !this.#l && (this.#s.surface.finalize(), this.#l = !0);
	}
	async #T() {
		await this.#E();
		let e = this.#D();
		await this.#k(e), await n_(this.viewRoot, e.dataFlow, e.textMetrics, (e) => this.broadcast("dataFlowBuilt", e)), this.#j(e);
	}
	async #E() {
		this.genomeStore = new s_(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = ww(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#D() {
		let e = new cg();
		e.loadingStatusRegistry = this.#i;
		let t = xC({
			defaultConfig: cw,
			builtInTheme: Pw(Mw),
			theme: G([this.options.theme, Pw(this.spec.theme)])
		});
		return UC({
			dataFlow: e,
			getMarkRenderingDebugState: this.#s.getMarkRenderingDebugState,
			animator: this.animator,
			genomeStore: this.genomeStore,
			textMetrics: this.#s.textMetrics,
			reportError: this.#M.bind(this),
			getSpecOrigin: this.options.getSpecOrigin,
			updateTooltip: this.updateTooltip.bind(this),
			getNamedDataFromProvider: this.getNamedDataFromProvider.bind(this),
			getCurrentHover: () => this.#o.getCurrentHover(),
			suspendHoverTracking: () => this.#o?.suspendHoverTracking(),
			resumeHoverTracking: (e) => this.#o?.resumeHoverTracking(e),
			addKeyboardListener: (e, t) => this.#h.add(e, (n) => {
				this.#O(e, n) && t(n);
			}),
			addBroadcastListener: (e, t) => this.#_.add(e, t),
			removeBroadcastListener: (e, t) => this.#_.remove(e, t),
			renderImmediately: this.renderAll.bind(this),
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: Jf(this.container)
		});
	}
	#O(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #k(e) {
		let t = this.spec;
		this.viewRoot = await e.createOrImportView(t, null, null, CC), await JS(this.viewRoot), this.#i.set(this.viewRoot, "loading"), this.#b(), lw(this.viewRoot), jc(this.container, TC(this.viewRoot)), this.#e = Iw(this.spec, TC(this.viewRoot)), this.#A(), this.#y.invalidateSize(), this.#n = this.#s.createRenderCoordinator({
			viewRoot: this.viewRoot,
			getBackground: this.#e,
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#r.updateLayout()
		}), e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.#S();
	}
	#A() {
		let e = cr(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#j(e) {
		e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.viewRoot.visit((e) => Cr(e, "size")), this.#y.invalidateSize(), this.#o = new LC({
			wheelBehavior: this.options.wheelBehavior,
			viewRoot: this.viewRoot,
			canvas: this.#y.canvas,
			tooltip: this.tooltip,
			animator: this.animator,
			emitEvent: this.#g.emit.bind(this.#g),
			tooltipHandlers: this.tooltipHandlers,
			renderPickingFramebuffer: this.#s.readPickingId ? this.renderPickingFramebuffer.bind(this) : void 0,
			readPickingId: this.#s.readPickingId,
			reportError: this.#M.bind(this),
			canPick: () => !!this.viewRoot?.hasRendered()
		});
	}
	async launch() {
		let e = !1;
		this.#d = !0, this.#p = void 0;
		try {
			return await this.#C(), this.#N(), await this.#T(), this.#N(), this.#t.push(this.#o.registerInteractionEvents()), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			return this.#P(this.#p ?? e), !1;
		} finally {
			this.#d = !1, this.#v?.classList.remove("loading"), this.#u && this.#w(), e && this.#i.set(this.viewRoot, "complete");
		}
	}
	#M(e) {
		this.#u || (this.#d && !this.#p && (this.#p = e), this.#P(e));
	}
	#N() {
		if (this.#u) throw Error("GenomeSpy was destroyed during launch.");
		if (this.#p) throw this.#p;
	}
	#P(e) {
		if (this.#u || this.#m.has(e)) return;
		this.#m.add(e);
		let t = Ms(e);
		Ns(e);
		let n;
		try {
			n = this.options.onError?.(e, this.container);
		} catch (e) {
			console.error(e);
		}
		n || wc(this.container, t), this.viewRoot && this.#i && this.#i.delete(this.viewRoot);
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await r_(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.textMetrics), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#y.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await xu(this.viewRoot.context, this.viewRoot, void 0, e, (e) => Tu(e) && Bw(e));
	}
	updateTooltip(e, t) {
		this.#o.updateTooltip(e, t);
	}
	subscribeNativeEvent(e, t) {
		return this.#o.subscribeNativeEvent(e, t);
	}
	subscribeMarkEvent(e, t, n) {
		return this.#o.subscribeMarkEvent(e, t, n);
	}
	subscribeHover(e, t) {
		return this.#o.subscribeHover(e, t);
	}
	pick(e, t) {
		return this.#o.pick(e, t);
	}
	exportCanvas(e, t, n, r = "white") {
		try {
			return this.#s.exportCanvas({
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
		let t = Lw(this.#e(), e);
		try {
			return { blob: await br(this.#s, {
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
		let t = this.#y.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height, i = Lw(this.#e(), e);
		try {
			let { createSvgExport: t } = await zw(), { svg: a, warnings: o, rasterized: s } = await t({
				viewRoot: this.viewRoot,
				rasterizeSvgRuns: (e) => Sr(this.#s, e),
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
		let t = this.#y.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height;
		try {
			return (await zw()).analyzeSvgExport({
				viewRoot: this.viewRoot,
				logicalWidth: n,
				logicalHeight: r
			});
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	getLogicalCanvasSize() {
		return this.#y.getLogicalCanvasSize();
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
		this.#f = !1, this.#v.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#n.computeLayout();
	}
	requestLayoutReflow() {
		this.#f = !0, this.animator.requestRender();
	}
	renderAll() {
		this.#d || (this.#f && this.computeLayout(), this.#o?.invalidatePendingPicks(), this.#n.renderAll());
	}
	renderPickingFramebuffer() {
		this.#n.renderPickingFramebuffer?.();
	}
	createPickingBufferVisualization() {
		return this.#n.createPickingBufferVisualization?.();
	}
	getSearchableViews() {
		let e = [];
		return this.viewRoot.visit((t) => {
			t instanceof Z && t.getSearchAccessors().length > 0 && e.push(t);
		}), e;
	}
	getNamedScaleResolutions() {
		let e = /* @__PURE__ */ new Map();
		return this.viewRoot.visit((t) => {
			for (let n of Object.values(t.resolutions.scale)) n.name && e.set(n.name, n);
		}), e;
	}
};
async function zw() {
	let e = yr.svgRenderer;
	if (!e) throw Error("SVG export is not registered. Import \"@genome-spy/core/rendering/svg.js\" when using \"@genome-spy/core/minimal\".");
	return e();
}
function Bw(e) {
	let t = e.flowHandle?.collector;
	return !!t && Dn(t).some((e) => e instanceof Fs);
}
//#endregion
//#region ../core/src/view/viewRuntime.js
var Vw = /* @__PURE__ */ new WeakMap();
function Hw(e, t) {
	Vw.set(e, t);
}
function Uw(e) {
	let t = Vw.get(e);
	if (!t) throw Error("Expected a ViewApi owned by this Core runtime.");
	return t.ensureActive(), t;
}
//#endregion
//#region ../core/src/data/copyDatum.js
function Ww(e) {
	let t = structuredClone(e);
	return delete t[be], t;
}
//#endregion
//#region ../core/src/data/runDataTransforms.js
var Gw = {
	formula: $m,
	filter: Um,
	sample: el,
	aggregate: mh,
	window: Oh
};
function Kw(e, t, n) {
	let r = new Bn(), i = { paramRuntime: r }, a = new wn(i), o = a, s = [];
	try {
		for (let [e, n] of t.entries()) try {
			if (!Object.hasOwn(Gw, n.type)) throw Error("Unsupported analysis transform: " + n.type);
			let e = new Gw[n.type](n, i);
			o.addChild(e), o = e, s.push(e);
		} catch (t) {
			throw Error("transform[" + e + "]: " + t.message, { cause: t });
		}
		let r = new mu({ type: "collect" }, i);
		o.addChild(r), a.initializeOnce();
		for (let [e, t] of s.entries()) try {
			t.initializeOnce();
		} catch (t) {
			throw Error("transform[" + e + "]: " + t.message, { cause: t });
		}
		r.initializeOnce(), a.reset(), a.beginBatch({ type: "file" });
		for (let t of e) a.handle(t);
		a.complete();
		let c = [];
		for (let e of r.getData()) {
			if (c.length === n) return {
				rows: c,
				truncated: !0
			};
			c.push(e);
		}
		return {
			rows: c,
			truncated: !1
		};
	} finally {
		a.disposeSubtree(), r.dispose();
	}
}
//#endregion
//#region ../core/src/data/formats/readBinary.js
async function qw(e, t) {
	let n = t?.type;
	if (n !== "arrow" && n !== "parquet") throw Error("Unsupported binary data format: " + String(n));
	let r = $t(n);
	if (!r) throw Error("Data format is not registered: " + n);
	let i = await r(Jw(e), t);
	if (!Array.isArray(i)) throw Error(`The ${n} data reader did not return an array.`);
	return i;
}
function Jw(e) {
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
function Yw(e, t) {
	let n = () => e.viewRoot;
	return Xw(() => TC(n()), n, t);
}
function Xw(e, t, n = () => !0) {
	return {
		set(r, i) {
			Zw(n);
			let a = e();
			tT(a, eT(a, r, t), i);
		},
		async load(r, i, a) {
			Zw(n);
			let o = e(), s = eT(o, r, t), c = s.beginUpdate(), l = a?.type ?? "unknown", u = () => (Zw(n), eT(o, r, t) === s && s.isCurrentUpdate(c)), d;
			try {
				d = await qw(i, a);
			} catch (e) {
				if (!u()) return;
				throw new $("datasetLoadFailed", `Cannot load named dataset "${r}" as ${l}: ${Qw(e)}`, { cause: e });
			}
			u() && tT(o, s, d);
		},
		reset(r) {
			Zw(n);
			let i = e();
			tT(i, eT(i, r, t));
		}
	};
}
function Zw(e) {
	if (!e()) throw new $("staleEmbed", "Cannot update named data through a finalized embed.");
}
function Qw(e) {
	return e instanceof Error ? e.message : String(e);
}
function $w(e, t) {
	let n = t();
	return e === n || !!n?.getDescendants?.().includes(e);
}
function eT(e, t, n) {
	if (!$w(e, n)) throw new $("staleHandle", "Cannot update named data through a stale view handle.");
	if (typeof t != "string" || !t.length) throw new $("invalidNamedData", "Named dataset name must be a non-empty string.");
	let r = e.namedDataScope.getLocalBinding(t);
	if (r) return r;
	throw e.namedDataScope.findDeclaredBinding(t) ? new $("namedDataOwnerMismatch", "Named dataset \"" + t + "\" is declared by an ancestor view. Use the dataset owner's handle.") : new $("namedDataNotDeclared", "View does not declare named dataset \"" + t + "\". Add it to the view's datasets object before updating it.");
}
function tT(e, t, n) {
	e.context.dataFlow.updateNamedDataBinding(t, n), e.context.animator.requestRender();
}
function nT(e, t = () => !0, n = (e) => e()) {
	let r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), a = e, o = Promise.resolve(), s;
	function c() {
		return e.viewRoot;
	}
	function l(e) {
		return e instanceof XS ? "concat" : e instanceof yv ? "layer" : e instanceof Z ? "unit" : e instanceof BS ? "grid" : "unknown";
	}
	function u(e) {
		if (e.explicitName) try {
			return $n(e);
		} catch {
			return;
		}
	}
	function d(e) {
		let n = r.get(e);
		return n || (n = {
			id: Lr(c()).getId(e),
			get name() {
				return e.explicitName;
			},
			get selector() {
				return u(e);
			},
			get type() {
				return l(e);
			},
			isAlive: () => $w(e, c),
			parent: () => {
				if ($w(e, c) && e.layoutParent) return d(e.layoutParent);
			},
			children: () => {
				let t = _(e);
				return !$w(e, c) || !t ? [] : t.map((e) => d(e));
			},
			data: {
				read(n) {
					if (h(t), g(e), !Number.isSafeInteger(n?.limit) || n.limit < 0) throw Error("Data reads require a nonnegative safe integer limit.");
					if (!(e instanceof Z)) throw Error("Data reads require a unit view.");
					let r = e.getCollector();
					if (!r || !jn(r)) throw Error("View data is not ready.");
					let i = rT(e, n.scope), a = [];
					for (let e of r.getData()) if (i(e)) {
						if (a.length === n.limit) return {
							rows: a,
							truncated: !0
						};
						a.push(Ww(e));
					}
					return {
						rows: a,
						truncated: !1
					};
				},
				transform(e) {
					for (let t of ["inputLimit", "limit"]) if (!Number.isSafeInteger(e?.[t]) || e[t] < 0) throw Error(t + " must be a nonnegative safe integer.");
					let t = n.data.read({
						scope: e.scope,
						limit: e.inputLimit
					});
					if (t.truncated) throw Error("Analysis input exceeds inputLimit. Narrow the scope or raise inputLimit.");
					return Kw(t.rows, e.transform, e.limit);
				}
			},
			datasets: Xw(() => e, c, t),
			params: dw(e, {
				isActive: t,
				isLive: () => $w(e, c),
				registerDisposer: (t) => e.registerDisposer(t)
			}),
			marks: f(e)
		}, r.set(e, n), i.set(n, e), n);
	}
	function f(e) {
		return {
			subscribe(n, r) {
				return h(t), g(e), uw((t) => e.registerDisposer(t), a.subscribeMarkEvent(e, n, (e) => r({
					sourceEvent: e.sourceEvent,
					point: m(e.point),
					hit: p(e.hit)
				})));
			},
			observeHover(n) {
				return h(t), g(e), uw((t) => e.registerDisposer(t), a.subscribeHover(e, (e) => n(e ? p(e) : void 0)));
			},
			pick(n) {
				return h(t), g(e), a.pick(n, e).then((e) => e.status === "hit" ? {
					status: "hit",
					hit: p(e.hit)
				} : e);
			}
		};
	}
	function p(e) {
		let t = { ...e.datum };
		return delete t[be], {
			view: d(e.mark.unitView),
			uniqueId: e.uniqueId,
			...e.facetId === void 0 ? {} : { facetId: e.facetId.slice() },
			datum: t
		};
	}
	function m(e) {
		return Object.freeze({
			x: e.x,
			y: e.y
		});
	}
	function h(e) {
		if (!e()) throw new $("staleEmbed", "Cannot use an API handle after the embed was finalized.");
	}
	function g(e) {
		if (!$w(e, c)) throw new $("staleHandle", "Cannot use a mark API handle for a removed view.");
	}
	function _(e) {
		let t = e.children;
		return Array.isArray(t) ? t : void 0;
	}
	function v(e) {
		if (e === "root") return d(c());
		if (aT(e)) return i.has(e) && e.isAlive() ? e : void 0;
		if (oT(e)) {
			let t = dr(c(), e);
			return t ? d(t) : void 0;
		}
		throw new $("invalidAddress", "View address must be a handle, selector, or \"root\".");
	}
	function y(e) {
		let t = v(e);
		if (t) return t;
		throw aT(e) && i.has(e) ? new $("staleHandle", "Stale view handle no longer refers to a live view.") : new $("unresolvedAddress", "View address did not resolve to a live view.");
	}
	function b(e) {
		let t = y(e), n = i.get(t);
		if (!n) throw new $("invalidAddress", "View handle is not owned by this GenomeSpy instance.");
		return n;
	}
	function x(e) {
		let t = v(e);
		if (!t) return;
		let n = i.get(t)?.coords;
		if (n) return {
			x: n.x,
			y: n.y,
			width: n.width,
			height: n.height
		};
	}
	function S(e) {
		let t = c().context, n = () => e();
		return t.addBroadcastListener("layoutComputed", n), () => t.removeBroadcastListener("layoutComputed", n);
	}
	function C(e) {
		return s ? T(s, e) : w(e);
	}
	function w(e) {
		let t = o.then(e, e);
		return o = t.then(E, E), t;
	}
	function T(e, t) {
		let n = e.queue.then(t, t);
		return e.queue = n.then(E, (t) => {
			e.failed = !0, e.error = t;
		}), n;
	}
	function E() {}
	function D() {
		let e = s;
		if (e) return e.depth++, e;
		let t = c().context, n = t.requestLayoutReflow, r = {
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
		}, s = r, r;
	}
	function O(e) {
		e.depth--, e.depth === 0 && (e.restoreLayoutReflow(), s = void 0);
	}
	async function k(e) {
		let t;
		do
			t = e.queue, await t;
		while (e.queue !== t);
	}
	async function ee(e) {
		let t = D(), n = t.failed, r, i, a = !1;
		try {
			r = await e(ue);
		} catch (e) {
			i = e, a = !0;
		}
		await k(t);
		try {
			if (a) throw i;
			if (t.failed && t.failed !== n) throw t.error;
			return r;
		} finally {
			O(t);
		}
	}
	function A(e, t, r = {}) {
		return C(async () => {
			let i = b(e), a = te(i), o = j(r.index, a), s = re(t, r);
			return s !== void 0 && typeof s == "string" && M(i, s), n(async () => {
				let e = await ne(i, structuredClone(t), o);
				return r.scope !== void 0 && nr(e, r.scope), d(e);
			});
		});
	}
	function te(e) {
		if (!(e instanceof XS) && !(e instanceof yv)) throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
		let t = _(e);
		if (!t) throw new $("unsupportedContainer", "Mutable container does not expose layout children.");
		return t.length;
	}
	async function ne(e, t, n) {
		if (e instanceof XS) return e.addChildSpec(t, n);
		if (e instanceof yv) {
			if (!N(t)) throw new $("unsupportedChildSpec", "Layer views accept only unit, layer, multiscale, or import specs as children.");
			return e.addChildSpec(t, n);
		}
		throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
	}
	function j(e, t) {
		let n = e ?? t;
		if (!Number.isInteger(n)) throw new $("invalidIndex", "Insert index must be an integer.");
		if (n < 0 || n > t) throw new $("invalidIndex", "Insert index must be between 0 and the current child count.");
		return n;
	}
	function re(e, t) {
		let n = Eg(e) && "name" in e ? e.name : void 0;
		if (t.scope !== void 0 && n !== void 0 && t.scope !== n) throw new $("scopeMismatch", "Insert scope must match the import instance name.");
		return t.scope ?? n;
	}
	function M(e, t) {
		let n = ar(e).concat(t);
		c().visit((e) => {
			let r = lr(e);
			if (r && r.name === t && ie(ar(e), n)) throw new $("duplicateScope", "Scope \"" + t + "\" already exists.");
		});
	}
	function ie(e, t) {
		return e.length === t.length && e.every((e, n) => e === t[n]);
	}
	function N(e) {
		if (Eg(e)) return !0;
		let t = e;
		return Sg(t) || Cg(t) || pg(t);
	}
	function ae(e) {
		return C(async () => {
			let t = b(e);
			if (t === c() || !t.layoutParent) throw new $("cannotRemoveRoot", "Removing the root view is not supported.");
			let r = t.layoutParent, i = _(r);
			if (!i) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let a = i.indexOf(t);
			if (a < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			te(r), t.assertCanDisposeSubtree(), await n(() => oe(r, a), t);
		});
	}
	async function oe(e, t) {
		if (e instanceof XS) await e.removeChildAt(t);
		else if (e instanceof yv) await e.removeChildAt(t);
		else throw new $("unsupportedContainer", "Only concat and layer views support child removal.");
	}
	function se(e, t) {
		return C(async () => {
			let r = b(e);
			if (r === c() || !r.layoutParent) throw new $("cannotMoveRoot", "Moving the root view is not supported.");
			let i = r.layoutParent, a = _(i);
			if (!a) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let o = a.indexOf(r);
			if (o < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			if (!t) throw new $("invalidIndex", "Move options with an index are required.");
			let s = ce(t.index, a.length - 1);
			return te(i), n(async () => (await le(i, o, s), d(r)));
		});
	}
	function ce(e, t) {
		if (!Number.isInteger(e)) throw new $("invalidIndex", "Move index must be an integer.");
		if (e < 0 || e > t) throw new $("invalidIndex", "Move index must be between 0 and the remaining child count.");
		return e;
	}
	async function le(e, t, n) {
		if (e instanceof XS) await e.moveChildAt(t, n);
		else if (e instanceof yv) e.moveChildAt(t, n);
		else throw new $("unsupportedContainer", "Only concat and layer views support child reordering.");
	}
	let ue = {
		root: () => d(c()),
		resolve: v,
		get: y,
		getLayoutBounds: x,
		subscribeToLayout: S,
		insert: A,
		remove: ae,
		move: se,
		transaction: (e) => s ? ee(e) : w(() => n(() => ee(e)))
	};
	return Hw(ue, {
		ensureActive: () => h(t),
		getRoot: c,
		getView: b,
		getHandle: d
	}), ue;
}
function rT(e, t) {
	if (t === "all") return () => !0;
	if (t && typeof t == "object" && typeof t.selection == "string") {
		let n = e.paramRuntime.findSelectionCapability(t.selection);
		if (n?.type !== "interval") throw Error("Brush reads require an interval selection. Read point records through getSelection().getValue().data.");
		for (let { component: t } of n.components) iT(e, t), iT(e, t + "2");
		return mt({
			param: t.selection,
			empty: !1
		}, e.mark.encoding, e.paramRuntime, e.mark.defaultHitTestMode);
	}
	if (t !== "viewport") throw Error("Data reads require an all, viewport, or named interval-selection scope.");
	let n = [];
	for (let t of ["x", "y"]) {
		let r = iT(e, t);
		if (!r) continue;
		let i = e.getScaleResolution(t), a = i.getScale().type;
		if (!P(a) || I(a)) throw Error("Viewport reads require continuous positional scales.");
		let o = i.getDomain(), s = iT(e, t === "x" ? "x2" : "y2");
		n.push({
			channel: t,
			accessor: r,
			accessor2: s,
			domain: [Math.min(o[0], o.at(-1)), Math.max(o[0], o.at(-1))]
		});
	}
	if (!n.length) throw Error("Viewport reads require a scaled positional encoding.");
	return (e) => n.every((t) => cu(e, t));
}
function iT(e, t) {
	let n = e.mark.encoders[t];
	if (!n) return;
	if (n.branches.length !== 1) throw Error("Scoped data reads do not support conditional positional encodings.");
	let r = n.branches[0].accessor;
	return r.scaleChannel ? r : void 0;
}
function aT(e) {
	return typeof e == "object" && !!e && typeof e.isAlive == "function";
}
function oT(e) {
	return typeof e == "object" && !!e && Array.isArray(e.scope) && typeof e.view == "string";
}
//#endregion
//#region ../core/src/embedApi.js
function sT({ genomeSpy: e, isActive: t, debug: n, finalize: r, views: i }) {
	return {
		views: i ?? nT(e, t),
		datasets: Yw(e, t),
		dataLoading: {
			getSnapshot: () => a().getSnapshot(),
			subscribe: (e) => a().subscribe(e)
		},
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
		params: dw(TC(e.viewRoot), { isActive: t }),
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
	function a() {
		if (!t()) throw Error("Cannot observe data loading through a finalized embed.");
		return e.viewRoot.context.dataFlow.loadingStatusRegistry;
	}
}
//#endregion
//#region ../core/src/embedError.js
var cT = /* @__PURE__ */ new WeakMap();
function lT(e, t) {
	cT.get(e)?.forEach((e) => e.remove()), cT.delete(e);
	let n = !0, r;
	return {
		onError(e, i) {
			return n ? (r ??= e, !0) : t.onError?.(e, i);
		},
		complete(e) {
			if (!e || r !== void 0) throw r;
			n = !1;
		},
		fail(n, i, a) {
			for (let e of a) try {
				e();
			} catch (e) {
				console.error(e);
			}
			n !== r && Ns(n);
			let o = Ms(n), s;
			try {
				s = t.onError?.(n, i);
			} catch (e) {
				console.error(e);
			}
			if (!s) {
				let t = Cc(i), n = wc(i, o);
				cT.set(e, [t, n]);
			}
			throw n;
		}
	};
}
//#endregion
//#region ../core/src/utils/inferSpecBaseUrl.js
var uT = [
	["/docs/example-specs/", "/docs/example-specs/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], dT = /^(?:[a-z]+:)?\/\//i, fT = "https://example.invalid";
function pT(e) {
	return dT.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function mT(e) {
	let t = new URL(e, fT), n = uT.find(([e]) => t.pathname.startsWith(e));
	if (n) return gT(n[1], t, pT(e));
}
function hT(e) {
	let t = mT(e);
	if (t) return t;
	let n = new URL(e, fT);
	return gT(new URL("./", n).pathname, n, pT(e));
}
function gT(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region ../core/src/embedFactory.js
function _T(e) {
	return async function(t, n, r = {}) {
		let i = !0, o = () => i, s;
		if (a(t)) {
			if (s = document.querySelector(t), !s) throw Error(`No such element: ${t}`);
		} else if (t instanceof HTMLElement) s = t;
		else throw Error(`Invalid element: ${t}`);
		let c, l = lT(s, r);
		try {
			let t = R(n) ? n : await yT(n);
			if (t.baseUrl ??= "", t.padding ??= 10, s == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", s.appendChild(e), s = e;
			}
			c = new e(s, t, {
				...r,
				onError: l.onError
			}), vT(c, r), l.complete(await c.launch());
		} catch (e) {
			l.fail(e, s, [() => c?.destroy()]);
		}
		return sT({
			genomeSpy: c,
			isActive: o,
			debug: {
				getViewRoot() {
					return c ? c.viewRoot : void 0;
				},
				getModules() {
					return import("./debug-Dyd4iXYf.js");
				},
				createPickingBufferVisualization() {
					return i ? c.createPickingBufferVisualization() : void 0;
				}
			},
			finalize() {
				i = !1, c.destroy(), s.replaceChildren();
			}
		});
	};
}
function vT(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function yT(e) {
	let t;
	try {
		t = await ep(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl || (t.baseUrl = hT(e)), t;
}
//#endregion
//#region ../core/src/index.js
var bT = _T(Rw);
//#endregion
export { Mc as $, $g as A, Zf as B, Wv as C, Jg as D, v_ as E, zh as F, Ru as G, qu as H, rp as I, mu as J, xu as K, ap as L, Cg as M, Sg as N, Kg as O, ng as P, Pc as Q, $f as R, cy as S, mv as T, Hu as U, Z as V, Vu as W, Lc as X, gl as Y, Nc as Z, hb as _, nT as a, Yi as at, uy as b, Rw as c, ji as ct, pS as d, Kr as dt, _c as et, Ux as f, Gr as ft, vb as g, _b as h, sT as i, $i as it, Ig as j, qg as k, XS as l, q as lt, Cb as m, yT as n, Ps as nt, Ww as o, J as ot, Tx as p, yu as q, lT as r, ta as rt, Uw as s, qi as st, bT as t, gc as tt, bS as u, Gi as ut, Ty as v, yv as w, sy as x, Cy as y, ep as z };
