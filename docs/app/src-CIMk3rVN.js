import { $ as e, $n as t, $r as n, $t as r, A as i, An as a, Ar as o, At as s, B as c, Bn as l, Bt as u, C as d, Cn as f, Cr as p, Ct as m, D as h, Dn as g, Dr as _, Dt as v, E as y, En as b, Er as x, F as S, Fn as C, Fr as ee, Ft as w, G as T, Gn as E, Gr as te, Gt as D, H as ne, Hn as O, Hr as re, Ht as ie, I as ae, In as k, Ir as oe, It as se, Jn as ce, Jr as le, Jt as ue, K as de, Kn as A, Kr as fe, Kt as pe, L as me, Ln as he, Lt as ge, M as j, Mn as M, Mr as _e, Mt as ve, N as ye, Nn as be, Nr as xe, Nt as N, O as Se, On as Ce, Or as we, Ot as Te, P as Ee, Pn as De, Pr as Oe, Pt as ke, Q as Ae, Qn as je, Qr as Me, Qt as Ne, R as Pe, Rn as Fe, Rr as Ie, Rt as Le, S as Re, Sn as ze, Sr as Be, St as Ve, T as He, Tn as Ue, Tr as We, Tt as Ge, U as Ke, Un as qe, Ur as Je, Ut as Ye, V as Xe, Vn as Ze, Vr as Qe, Vt as $e, W as et, Wn as tt, Wr as nt, Wt as rt, Xn as it, Xr as at, Xt as ot, Y as st, Yn as ct, Yr as lt, Yt as ut, Zn as dt, Zr as ft, Zt as pt, _ as mt, _n as P, _t as ht, a as gt, an as _t, ar as vt, b as yt, bn as bt, br as xt, bt as St, c as F, cn as Ct, cr as wt, d as Tt, dn as Et, dr as Dt, dt as Ot, er as kt, et as At, fn as jt, fr as Mt, ft as Nt, g as Pt, gn as Ft, gr as It, gt as Lt, h as Rt, hn as zt, hr as Bt, ht as Vt, i as Ht, in as Ut, ir as Wt, it as Gt, j as Kt, jn as qt, jr as Jt, jt as Yt, k as Xt, kn as I, kr as L, kt as Zt, l as R, ln as Qt, lr as $t, lt as en, m as tn, mn as nn, mr as rn, mt as z, n as an, nn as on, nr as sn, o as cn, on as ln, or as B, p as un, pn as dn, pr as fn, pt as V, q as pn, qn as H, qr as mn, rn as hn, rr as gn, sn as _n, sr as vn, tn as yn, tr as bn, u as xn, un as Sn, ur as Cn, ut as wn, v as Tn, vn as En, vr as Dn, vt as On, wn as kn, wr as An, wt as jn, x as Mn, xn as Nn, xr as Pn, y as Fn, yn as In, yr as Ln, yt as Rn, z as zn, zn as Bn, zr as Vn } from "./viewSelectors-BhW4mTR1.js";
import { _ as Hn, a as Un, i as Wn, r as Gn, t as Kn, u as qn } from "./clipOptions-Dqco1p8b.js";
import { C as Jn, S as Yn, _ as Xn, a as Zn, b as Qn, c as $n, d as er, f as tr, g as nr, h as rr, i as ir, l as ar, m as or, n as sr, o as cr, p as lr, r as ur, s as dr, t as fr, u as pr, v as mr, x as hr, y as gr } from "./framebufferReadback-Bje9lHb7.js";
import { n as _r } from "./esm-CGLz7idZ.js";
import { t as vr } from "./bmFontMetrics-CuNB-kNN.js";
import { i as yr, n as br, t as xr } from "./viewIdentityRegistry-AEQpJTDm.js";
import { n as U, t as Sr } from "./viewRenderingContext-HtpqwS_x.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var Cr = globalThis, wr = Cr.ShadowRoot && (Cr.ShadyCSS === void 0 || Cr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Tr = Symbol(), Er = /* @__PURE__ */ new WeakMap(), Dr = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== Tr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (wr && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = Er.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Er.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, Or = (e) => new Dr(typeof e == "string" ? e : e + "", void 0, Tr), kr = (e, ...t) => new Dr(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, Tr), Ar = (e, t) => {
	if (wr) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = Cr.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, jr = wr ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return Or(t);
})(e) : e, { is: Mr, defineProperty: Nr, getOwnPropertyDescriptor: Pr, getOwnPropertyNames: Fr, getOwnPropertySymbols: Ir, getPrototypeOf: Lr } = Object, Rr = globalThis, zr = Rr.trustedTypes, Br = zr ? zr.emptyScript : "", Vr = Rr.reactiveElementPolyfillSupport, Hr = (e, t) => e, Ur = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Br : null;
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
}, Wr = (e, t) => !Mr(e, t), Gr = {
	attribute: !0,
	type: String,
	converter: Ur,
	reflect: !1,
	useDefault: !1,
	hasChanged: Wr
};
Symbol.metadata ??= Symbol("metadata"), Rr.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var Kr = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = Gr) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && Nr(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = Pr(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? Gr;
	}
	static _$Ei() {
		if (this.hasOwnProperty(Hr("elementProperties"))) return;
		let e = Lr(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(Hr("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Hr("properties"))) {
			let e = this.properties, t = [...Fr(e), ...Ir(e)];
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
			for (let e of n) t.unshift(jr(e));
		} else e !== void 0 && t.push(jr(e));
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
		return Ar(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? Ur : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? Ur : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? Wr)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
Kr.elementStyles = [], Kr.shadowRootOptions = { mode: "open" }, Kr[Hr("elementProperties")] = /* @__PURE__ */ new Map(), Kr[Hr("finalized")] = /* @__PURE__ */ new Map(), Vr?.({ ReactiveElement: Kr }), (Rr.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var qr = globalThis, Jr = (e) => e, Yr = qr.trustedTypes, Xr = Yr ? Yr.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Zr = "$lit$", Qr = `lit$${Math.random().toFixed(9).slice(2)}$`, $r = "?" + Qr, ei = `<${$r}>`, ti = document, ni = () => ti.createComment(""), ri = (e) => e === null || typeof e != "object" && typeof e != "function", ii = Array.isArray, ai = (e) => ii(e) || typeof e?.[Symbol.iterator] == "function", oi = "[ 	\n\f\r]", si = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ci = /-->/g, li = />/g, ui = RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), di = /'/g, fi = /"/g, pi = /^(?:script|style|textarea|title)$/i, W = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), mi = Symbol.for("lit-noChange"), G = Symbol.for("lit-nothing"), hi = /* @__PURE__ */ new WeakMap(), gi = ti.createTreeWalker(ti, 129);
function _i(e, t) {
	if (!ii(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return Xr === void 0 ? t : Xr.createHTML(t);
}
var vi = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = si;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === si ? c[1] === "!--" ? o = ci : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = ui) : (pi.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = ui) : o = li : o === ui ? c[0] === ">" ? (o = i ?? si, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? ui : c[3] === "\"" ? fi : di) : o === fi || o === di ? o = ui : o === ci || o === li ? o = si : (o = ui, i = void 0);
		let d = o === ui && e[t + 1].startsWith("/>") ? " " : "";
		a += o === si ? n + ei : l >= 0 ? (r.push(s), n.slice(0, l) + Zr + n.slice(l) + Qr + d) : n + Qr + (l === -2 ? t : d);
	}
	return [_i(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, yi = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = vi(t, n);
		if (this.el = e.createElement(l, r), gi.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = gi.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(Zr)) {
					let t = u[o++], n = i.getAttribute(e).split(Qr), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? wi : r[1] === "?" ? Ti : r[1] === "@" ? Ei : Ci
					}), i.removeAttribute(e);
				} else e.startsWith(Qr) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (pi.test(i.tagName)) {
					let e = i.textContent.split(Qr), t = e.length - 1;
					if (t > 0) {
						i.textContent = Yr ? Yr.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], ni()), gi.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], ni());
					}
				}
			} else if (i.nodeType === 8) if (i.data === $r) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(Qr, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += Qr.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = ti.createElement("template");
		return n.innerHTML = e, n;
	}
};
function bi(e, t, n = e, r) {
	if (t === mi) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = ri(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = bi(e, i._$AS(e, t.values), i, r)), t;
}
var xi = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? ti).importNode(t, !0);
		gi.currentNode = r;
		let i = gi.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Si(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Di(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = gi.nextNode(), a++);
		}
		return gi.currentNode = ti, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Si = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = G, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = bi(this, e, t), ri(e) ? e === G || e == null || e === "" ? (this._$AH !== G && this._$AR(), this._$AH = G) : e !== this._$AH && e !== mi && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ai(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== G && ri(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ti.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = yi.createElement(_i(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new xi(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = hi.get(e.strings);
		return t === void 0 && hi.set(e.strings, t = new yi(e)), t;
	}
	k(t) {
		ii(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(ni()), this.O(ni()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = Jr(e).nextSibling;
			Jr(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ci = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = G, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = G;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = bi(this, e, t, 0), a = !ri(e) || e !== this._$AH && e !== mi, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = bi(this, r[n + o], t, o), s === mi && (s = this._$AH[o]), a ||= !ri(s) || s !== this._$AH[o], s === G ? e = G : e !== G && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === G ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, wi = class extends Ci {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === G ? void 0 : e;
	}
}, Ti = class extends Ci {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== G);
	}
}, Ei = class extends Ci {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = bi(this, e, t, 0) ?? G) === mi) return;
		let n = this._$AH, r = e === G && n !== G || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== G && (n === G || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Di = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		bi(this, e);
	}
}, Oi = {
	M: Zr,
	P: Qr,
	A: $r,
	C: 1,
	L: vi,
	R: xi,
	D: ai,
	V: bi,
	I: Si,
	H: Ci,
	N: Ti,
	U: Ei,
	B: wi,
	F: Di
}, ki = qr.litHtmlPolyfillSupport;
ki?.(yi, Si), (qr.litHtmlVersions ??= []).push("3.3.3");
var Ai = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Si(t.insertBefore(ni(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, ji = globalThis, Mi = class extends Kr {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ai(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return mi;
	}
};
Mi._$litElement$ = !0, Mi.finalized = !0, ji.litElementHydrateSupport?.({ LitElement: Mi });
var Ni = ji.litElementPolyfillSupport;
Ni?.({ LitElement: Mi }), (ji.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/vega-util/build/extend.js
function Pi(e, ...t) {
	for (let n of t) for (let t in n) e[t] = n[t];
	return e;
}
//#endregion
//#region ../../node_modules/vega-util/build/isDate.js
function Fi(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/vega-util/build/isIterable.js
function Ii(e) {
	return e != null && mn(e[Symbol.iterator]);
}
//#endregion
//#region ../../node_modules/vega-util/build/isNumber.js
function Li(e) {
	return typeof e == "number";
}
//#endregion
//#region ../../node_modules/vega-util/build/toBoolean.js
function Ri(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
//#endregion
//#region ../../node_modules/vega-util/build/toDate.js
var zi = (e) => Li(e) || Fi(e) ? e : Date.parse(e);
function Bi(e, t) {
	return t ||= zi, e == null || e === "" ? null : t(e);
}
//#endregion
//#region ../../node_modules/vega-util/build/toString.js
function Vi(e) {
	return e == null || e === "" ? null : e + "";
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var Hi = {}, Ui = {}, Wi = 34, Gi = 10, Ki = 13;
function qi(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function Ji(e, t) {
	var n = qi(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function Yi(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function K(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function Xi(e) {
	return e < 0 ? "-" + K(-e, 6) : e > 9999 ? "+" + K(e, 6) : K(e, 4);
}
function Zi(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : Xi(e.getUTCFullYear(), 4) + "-" + K(e.getUTCMonth() + 1, 2) + "-" + K(e.getUTCDate(), 2) + (i ? "T" + K(t, 2) + ":" + K(n, 2) + ":" + K(r, 2) + "." + K(i, 3) + "Z" : r ? "T" + K(t, 2) + ":" + K(n, 2) + ":" + K(r, 2) + "Z" : n || t ? "T" + K(t, 2) + ":" + K(n, 2) + "Z" : "");
}
function Qi(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? Ji(e, t) : qi(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === Gi && --i, e.charCodeAt(i - 1) === Ki && --i;
		function u() {
			if (c) return Ui;
			if (l) return l = !1, Hi;
			var t, r = a, o;
			if (e.charCodeAt(r) === Wi) {
				for (; a++ < i && e.charCodeAt(a) !== Wi || e.charCodeAt(++a) === Wi;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === Gi ? l = !0 : o === Ki && (l = !0, e.charCodeAt(a) === Gi && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === Gi) l = !0;
				else if (o === Ki) l = !0, e.charCodeAt(a) === Gi && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== Ui;) {
			for (var d = []; s !== Hi && s !== Ui;) d.push(s), s = u();
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
		return n ??= Yi(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= Yi(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? Zi(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
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
var $i = Qi("	");
$i.parse;
var ea = $i.parseRows;
$i.format, $i.formatBody, $i.formatRows, $i.formatRow, $i.formatValue;
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function ta(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function na(e) {
	if (e == null) return ta;
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
function ra(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function ia(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return aa(e, t);
		})
	} : aa(e, t);
}
function aa(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = oa(e, t);
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
function oa(e, t) {
	var n = na(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && ra(t, o);
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
function sa(e, t) {
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
function ca(e) {
	return oa(e, la.apply(this, arguments));
}
function la(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = ua(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: sa(e, r)
	};
}
function ua(e, t, n) {
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
function da(e, t) {
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
function fa(e, t) {
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
function pa(e, t) {
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
function ma(e, t) {
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
function ha(e, t) {
	return xe(e, .5, t);
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function ga(e, t) {
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
function _a(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function va(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = ya(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function ya(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function ba(e) {
	let t = _a(e.format), n = e.formatPrefix;
	return {
		format: t,
		formatPrefix: n,
		formatFloat(e) {
			let n = Jt(e || ",");
			if (n.precision == null) {
				switch (n.precision = 12, n.type) {
					case "%":
						n.precision -= 2;
						break;
					case "e":
						--n.precision;
						break;
				}
				return va(t(n), t(".1f")(1)[1]);
			} else return t(n);
		},
		formatSpan(e, r, i, a) {
			a = Jt(a ?? ",f");
			let o = Ie(e, r, i), s = Math.max(Math.abs(e), Math.abs(r)), c;
			if (a.precision == null) switch (a.type) {
				case "s": return isNaN(c = _(o, s)) || (a.precision = c), n(a, s);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(c = x(o, s)) || (a.precision = c - (a.type === "e"));
					break;
				case "f":
				case "%":
					isNaN(c = we(o)) || (a.precision = c - (a.type === "%") * 2);
					break;
			}
			return t(a);
		}
	};
}
xa();
function xa() {
	return ba({
		format: L,
		formatPrefix: o
	});
}
function Sa(e, t, r) {
	r ||= {}, lt(r) || n(`Invalid time multi-format specifier: ${r}`);
	let i = t(Pn), a = t(Dn), o = t(It), s = t(Bt), c = t(Be), l = t(Ln), u = t(xt), d = t(p), f = e(r.milliseconds || ".%L"), m = e(r.seconds || ":%S"), h = e(r.minutes || "%I:%M"), g = e(r.hours || "%I %p"), _ = e(r.date || r.day || "%a %d"), v = e(r.week || "%b %d"), y = e(r.month || "%B"), b = e(r.quarter || "%B"), x = e(r.year || "%Y");
	return (e) => (i(e) < e ? f : a(e) < e ? m : o(e) < e ? h : s(e) < e ? g : l(e) < e ? c(e) < e ? _ : v : d(e) < e ? u(e) < e ? y : b : x)(e);
}
function Ca(e) {
	let t = _a(e.format), n = _a(e.utcFormat);
	return {
		timeFormat: (e) => te(e) ? t(e) : Sa(t, An, e),
		utcFormat: (e) => te(e) ? n(e) : Sa(n, We, e),
		timeParse: _a(e.parse),
		utcParse: _a(e.utcParse)
	};
}
var wa;
Ta();
function Ta() {
	return wa = Ca({
		format: Cn,
		parse: Dt,
		utcFormat: Mt,
		utcParse: fn
	});
}
function Ea(e) {
	return Ca(rn(e));
}
function Da(e) {
	return arguments.length ? wa = Ea(e) : wa;
}
//#endregion
//#region ../../node_modules/vega-loader/build/vega-loader.browser.js
var Oa = /^(data:|([A-Za-z]+:)?\/\/)/, ka = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i, Aa = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g, ja = "file://";
function Ma(e) {
	return (e) => ({
		options: e || {},
		sanitize: Pa,
		load: Na,
		fileAccess: !1,
		file: Fa(),
		http: La
	});
}
async function Na(e, t) {
	let n = await this.sanitize(e, t), r = n.href;
	return n.localFile ? this.file(r) : this.http(r, t?.http);
}
async function Pa(e, t) {
	t = Pi({}, this.options, t);
	let r = this.fileAccess, i = { href: null }, a, o, s, c = ka.test(e.replace(Aa, ""));
	(e == null || typeof e != "string" || !c) && n("Sanitize failure, invalid URI: " + nt(e));
	let l = Oa.test(e);
	return (s = t.baseURL) && !l && (!e.startsWith("/") && !s.endsWith("/") && (e = "/" + e), e = s + e), o = (a = e.startsWith(ja)) || t.mode === "file" || t.mode !== "http" && !l && r, a ? e = e.slice(7) : e.startsWith("//") && (t.defaultProtocol === "file" ? (e = e.slice(2), o = !0) : e = (t.defaultProtocol || "http") + ":" + e), Object.defineProperty(i, "localFile", { value: !!o }), i.href = e, t.target && (i.target = t.target + ""), t.rel && (i.rel = t.rel + ""), t.context === "image" && t.crossOrigin && (i.crossOrigin = t.crossOrigin + ""), i;
}
function Fa(e) {
	return Ia;
}
async function Ia() {
	n("No file system access.");
}
async function La(e, t) {
	let r = Pi({}, this.options.http, t), i = t && t.response, a = await fetch(e, r);
	return a.ok ? mn(a[i]) ? a[i]() : a.text() : n(a.status + "" + a.statusText);
}
var Ra = (e) => e != null && e === e, za = (e) => e === "true" || e === "false" || e === !0 || e === !1, Ba = (e) => !Number.isNaN(Date.parse(e)), Va = (e) => !Number.isNaN(+e) && !(e instanceof Date), Ha = (e) => Va(e) && Number.isInteger(+e), Ua = {
	boolean: Ri,
	integer: le,
	number: le,
	date: Bi,
	string: Vi,
	unknown: ft
}, Wa = [
	za,
	Ha,
	Va,
	Ba
], Ga = [
	"boolean",
	"integer",
	"number",
	"date"
];
function Ka(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = Wa.length, i = Wa.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && Ra(c) && !Wa[s](c) && (i[s] = 0, ++o, o === Wa.length)) return "string";
	return Ga[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function qa(e, t) {
	return t.reduce((t, n) => (t[n] = Ka(e, n), t), {});
}
function Ja(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return Ya(t, n ? Pi(n, r) : r);
	};
	return t.responseType = "text", t;
}
function Ya(e, t) {
	return t.header && (e = t.header.map(nt).join(t.delimiter) + "\n" + e), Qi(t.delimiter).parse(e + "");
}
Ya.responseType = "text";
function Xa(e) {
	return typeof Buffer == "function" && mn(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function Za(e, t) {
	let n = t && t.property ? Me(t.property) : ft;
	return lt(e) && !Xa(e) ? Qa(n(e), t) : n(JSON.parse(e));
}
Za.responseType = "json";
function Qa(e, t) {
	return !at(e) && Ii(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var $a = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function eo(e, t) {
	let r, i, a, o;
	return e = Za(e, t), t && t.feature ? (r = ia, a = t.feature) : t && t.mesh ? (r = ca, a = t.mesh, o = $a[t.filter]) : n("Missing TopoJSON feature or mesh parameter."), i = (i = e.objects[a]) ? r(e, i, o) : n("Invalid TopoJSON object: " + a), i && i.features || [i];
}
eo.responseType = "json";
var to = {
	dsv: Ya,
	csv: Ja(","),
	tsv: Ja("	"),
	json: Za,
	topojson: eo
};
function no(e, t) {
	return arguments.length > 1 ? (to[e] = t, this) : fe(to, e) ? to[e] : null;
}
function ro(e, t, r, i) {
	t ||= {};
	let a = no(t.type || "json");
	return a || n("Unknown data format type: " + t.type), e = a(e, t), t.parse && io(e, t.parse, r, i), fe(e, "columns") && delete e.columns, e;
}
function io(e, t, n, r) {
	if (!e.length) return;
	let i = Da();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = qa(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!Ua[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return Ua[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
var ao = Ma();
//#endregion
//#region ../core/src/data/formats/parquet.js
async function oo() {
	let { parquetReadObjects: e } = await import("./parquetRead-Cs2xRrvz.js");
	return e;
}
async function so(e) {
	return await (await oo())({ file: e instanceof Uint8Array ? co(e) : e });
}
function co(e) {
	if (e.buffer instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) return e.buffer;
	{
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t.buffer;
	}
}
so.responseType = "arrayBuffer", no("parquet", so);
//#endregion
//#region ../core/src/data/formats/arrow.js
async function lo() {
	let { tableFromIPC: e } = await import("./src-DjOlFqSn.js");
	return e;
}
async function uo(e) {
	return (await lo())(fo(e)).toArray();
}
function fo(e) {
	if (e instanceof Uint8Array && e.byteOffset % 8 != 0) {
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t;
	} else return e;
}
uo.responseType = "arrayBuffer", no("arrow", uo);
//#endregion
//#region ../core/src/data/formats/bed.js
var po = /^\s*$/, mo = /^\s*(?:browser\b|track\b|#)/, ho;
async function go() {
	return ho ??= import("./esm-D-iG_TIX.js").then((e) => e.default), ho;
}
async function _o(e) {
	let t = new (await (go()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (po.test(a) || mo.test(a)) continue;
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
no("bed", _o);
//#endregion
//#region ../core/src/data/formats/bedpe.js
var vo = /^\s*$/, yo = /^\s*(?:browser\b|track\b|#)/, bo = [
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
], xo = bo.slice(0, 6), So = (e) => e, Co = (e) => e == "." ? null : e, wo = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, To = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, Eo = {
	chrom1: Co,
	chrom2: Co,
	name: Co,
	strand1: wo,
	strand2: wo,
	start1: To,
	end1: To,
	start2: To,
	end2: To,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function Do(e) {
	if (e.length < xo.length) return !1;
	for (let t = 0; t < xo.length; t++) if (e[t] != xo[t]) return !1;
	return !0;
}
function Oo(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if (vo.test(e) || yo.test(e)) continue;
			i = !0;
		}
		if (vo.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (Do(t) ? t : bo);
			for (let t of e) s.push(t), c.push(Eo[t] ?? So);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(So);
		if (t.length < xo.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${xo.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
no("bedpe", Oo);
//#endregion
//#region ../core/src/data/formats/fasta.js
function ko(e, t) {
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
no("fasta", ko);
//#endregion
//#region ../core/src/data/formats/wig.js
var Ao = /^(?:variableStep|fixedStep)(?:\s|$)/, jo = /^(?:browser\b|track\b|#)/;
function Mo(e) {
	let t, n = [], r = e.split(/\r?\n/);
	for (let e = 0; e < r.length; e++) {
		let i = e + 1, a = r[e].trim();
		if (!a || jo.test(a)) continue;
		if (Ao.test(a)) {
			t = No(a, i);
			continue;
		}
		if (!t) throw Lo(i, "data appears before a declaration");
		let o = a.split(/\s+/);
		if (t.type == "fixedStep") {
			if (o.length != 1) throw Lo(i, "fixedStep data must contain one value");
			let e = Io(o[0], i), r = t.nextPosition - 1;
			n.push({
				chrom: t.chrom,
				start: r,
				end: r + t.span,
				score: e
			}), t.nextPosition += t.step;
		} else {
			if (o.length != 2) throw Lo(i, "variableStep data must contain a position and value");
			let e = Fo(o[0], "position", i) - 1;
			n.push({
				chrom: t.chrom,
				start: e,
				end: e + t.span,
				score: Io(o[1], i)
			});
		}
	}
	return n;
}
function No(e, t) {
	let [n, ...r] = e.split(/\s+/), i = {};
	for (let e of r) {
		let n = e.indexOf("=");
		if (n <= 0 || n == e.length - 1) throw Lo(t, `invalid declaration attribute "${e}"`);
		let r = e.slice(0, n);
		if (r in i) throw Lo(t, `duplicate attribute "${r}"`);
		i[r] = e.slice(n + 1);
	}
	return n == "variableStep" ? (Po(i, "chrom", n, t), {
		type: "variableStep",
		chrom: i.chrom,
		span: i.span ? Fo(i.span, "span", t) : 1
	}) : (Po(i, "chrom", n, t), Po(i, "start", n, t), {
		type: "fixedStep",
		chrom: i.chrom,
		nextPosition: Fo(i.start, "start", t),
		step: i.step ? Fo(i.step, "step", t) : 1,
		span: i.span ? Fo(i.span, "span", t) : 1
	});
}
function Po(e, t, n, r) {
	if (!(t in e)) throw Lo(r, `${n} declaration is missing "${t}"`);
}
function Fo(e, t, n) {
	let r = Number(e);
	if (!Number.isInteger(r) || r <= 0) throw Lo(n, `${t} must be a positive integer`);
	return r;
}
function Io(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw Lo(t, "score must be a finite number");
	return n;
}
function Lo(e, t) {
	return /* @__PURE__ */ Error(`Cannot parse WIG line ${e}: ${t}`);
}
no("wig", Mo);
//#endregion
//#region ../core/src/data/formats/vcfParser.js
async function Ro(e) {
	let t = (await import("./esm-lwYrRdbg.js")).default;
	return new t({ header: e });
}
function zo(e) {
	return delete e.GENOTYPES, e.SAMPLES = e.SAMPLES(), e;
}
function Bo(e, t) {
	return e.map((e) => zo(t.parseLine(e)));
}
//#endregion
//#region ../core/src/data/formats/vcf.js
function* Vo(e) {
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
async function Ho(e) {
	let t = [], n = [], r;
	for (let { line: i, lineNumber: a } of Vo(e)) if (i) {
		if (!r && i.startsWith("#")) {
			t.push(i);
			continue;
		}
		r ??= await Ro(t.join("\n"));
		try {
			n.push(zo(r.parseLine(i)));
		} catch (e) {
			throw Error(`Cannot parse VCF line ${a}`, { cause: e });
		}
	}
	return r || await Ro(t.join("\n")), n;
}
no("vcf", Ho);
//#endregion
//#region ../core/src/scale/ticks.js
function Uo(e, n, r) {
	return E(n) && r != null && (n = Math.min(n, ~~(t(e.domain()) / r) || 1)), A(n) && (n.step, n = n.interval), n;
}
function Wo(e, t, n) {
	var r = e.range(), i = Math.floor(r[0]), a = Math.ceil(je(r));
	if (i > a && (r = a, a = i, i = r), t = t.filter(function(t) {
		return t = e(t), i <= t && t <= a;
	}), n > 0 && t.length > 1) {
		for (var o = [t[0], je(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = o);
	}
	return t;
}
function Go(e, t) {
	return e.bins ? Wo(e, Ko(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function Ko(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function qo(e, t, n) {
	var r = e.tickFormat ? e.tickFormat(t, n) : n ? L(n) : String;
	if (ht(e.type)) {
		var i = Yo(n);
		r = e.bins ? i : Jo(r, i);
	}
	return r;
}
function Jo(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function Yo(e) {
	var t = Jt(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e":
				--t.precision;
				break;
		}
		return Xo(L(t), L(".1f")(1)[1]);
	} else return L(t);
}
function Xo(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = Zo(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Zo(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region ../core/src/data/sources/lazy/lazyDataSourceRegistry.js
var Qo = [], $o = [];
function q(e, t) {
	$o.push({
		guard: e,
		Source: t
	});
}
function es(e, t) {
	for (let n of Qo) if (n.guard(e)) return new n.Source(e, t);
	for (let n of $o) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/data/sources/dataSource.js
var J = class extends be {
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
}, ts = class extends J {
	#e = !1;
	#t;
	initializedPromise = Promise.resolve();
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw ns(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
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
function ns(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region ../core/src/data/sources/lazy/axisTickSource.js
var rs = class extends ts {
	ticks = [];
	#e;
	#t;
	constructor(e, t) {
		let n = {
			axis: {},
			...e
		};
		super(t, n.channel), this.params = n;
		let r = n.axis.tickCount;
		if (v(r)) {
			let e = new et(() => t.paramRuntime, (e) => t.getScaleResolution(e));
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
		let r = this.#e ? this.#e() : n.tickCount, i = Uo(e, r, n.tickMinStep), a = n.values ? Wo(e, n.values, i) : Go(e, i), o = !n.values && n.extraValues && V(e.type) ? is(e, a, n.extraValues) : a;
		if (this.ticks == null || !$t(o, this.ticks)) {
			this.ticks = o;
			let t = qo(e, r, n.format);
			this.publishData([o.map((e) => ({
				value: e,
				label: t(e)
			}))]);
		}
	}
};
function is(e, t, n) {
	let r = new Set(t);
	return Wo(e, n).forEach((e) => r.add(e)), Array.from(r).sort((e, t) => e - t);
}
function as(e) {
	return e?.type == "axisTicks";
}
q(as, rs);
//#endregion
//#region ../core/src/data/sources/lazy/axisGenomeSource.js
var os = class extends ts {
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
function ss(e) {
	return e?.type == "axisGenome";
}
q(ss, os);
//#endregion
//#region ../core/src/view/legend/legendEntries.js
function cs(e, t = String) {
	return e.getDomain().map((e, n) => ({
		value: e,
		label: t(e),
		_legendIndex: n
	}));
}
//#endregion
//#region ../core/src/utils/suspension.js
var ls = class {
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
}, us = 5, ds = "_legendSymbolSize", fs = "_legendStrokeWidth", ps = class extends J {
	#e = void 0;
	#t = !1;
	#n = new ls(() => this.#i());
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = ms(t, e.channel), !this.scaleResolution) throw Error(`The legend entries data source cannot find a resolved scale for channel "${e.channel}".`);
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
		if (!this.#e || !$t(e, this.#e)) {
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" });
			for (let e of this.#o()) this._propagate(e);
			this.complete();
		}
	}
	#o() {
		let e = this.params.dataType == "quantitative" ? this.#c() : this.#s();
		if (this.params.channel == "size") {
			let t = this.scaleResolution.getScale();
			for (let n of e) this.params.sizeMode == "strokeWidth" ? n[fs] = t(n.value) : n[ds] = t(n.value);
		}
		return e;
	}
	#s() {
		let e = this.params.format, t = e ? (t) => L(e)(Number(t)) : void 0, n = cs(this.scaleResolution, t);
		if (!this.params.values) return n;
		let r = new Map(n.map((e) => [e.value, e]));
		return this.params.values.flatMap((e) => r.has(e) ? [r.get(e)] : []);
	}
	#c() {
		let e = this.scaleResolution.getScale(), t = this.params.count ?? us, n = qo(e, t, this.params.format);
		return (this.params.values ? Wo(e, this.params.values, t) : Go(e, t)).flatMap((e) => {
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
function ms(e, t) {
	let n = e.dataParent;
	for (; n && Mn(n);) n = n.dataParent;
	return n?.getScaleResolution(t) ?? e.getScaleResolution(t);
}
function hs(e) {
	return e?.type == "legendEntries";
}
q(hs, ps);
//#endregion
//#region ../core/src/scale/scale.js
var gs = "locus", _s = "index", vs = 5;
function ys(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function bs(e) {
	return V(e) && ![
		"sequential",
		_s,
		gs
	].includes(e);
}
function xs(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var Ss = bn(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.fp64.name".split("."));
function Cs(e, t, n) {
	n = xs(n);
	for (let r in e) if (!Ss[r]) {
		if (r === "padding" && bs(t.type)) continue;
		tt(t[r]) ? t[r](e[r]) : n.warn("Unsupported scale property: " + r);
	}
	let r = Os(t, e, n);
	r.domain && t.domain(r.domain), r.applyOrdinalUnknown && t.unknown(r.ordinalUnknown), Ns(t, e, Ms(t, e, r.count));
}
function ws(e, t) {
	let n = !e.domain && V(e.type) ? {
		...e,
		domain: [0, 0]
	} : e, r = Ts(n), i = Rn(r);
	if (!i) throw Error("Unknown scale type: " + r);
	let a = i();
	return Cs(n, a, t), a;
}
function Ts(t) {
	var n = t.type, r = "", i;
	return n === "sequential" ? Gt + "-" + e : (Es(t) && (i = t.rawDomain ? t.rawDomain.length : t.domain ? t.domain.length + +(t.domainMid != null) : 0, r = i === 2 ? Gt + "-" : i === 3 ? Ae + "-" : ""), (r + n || "linear").toLowerCase());
}
function Es(e) {
	let t = e.type;
	return V(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(H));
}
function Ds(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function Os(e, t, n) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	n = xs(n);
	let r = Ds(e);
	var i = ks(r, t.domainRaw, n);
	if (i > -1) return {
		domain: r.domain(),
		count: i,
		ordinalUnknown: r.type === "ordinal" && t.domainImplicit ? jn : void 0,
		applyOrdinalUnknown: !1
	};
	var a = t.domain, o = r.type, s = t.zero || t.zero === void 0 && ys(r), c, l;
	return a ? (bs(o) && t.padding && a[0] !== je(a) && (a = As(o, a, t.range, t.padding, t.exponent, t.constant)), (s || t.domainMin != null || t.domainMax != null || t.domainMid != null) && (c = (a = a.slice()).length - 1 || 1, s && (a[0] > 0 && (a[0] = 0), a[c] < 0 && (a[c] = 0)), t.domainMin != null && (a[0] = t.domainMin), t.domainMax != null && (a[c] = t.domainMax), t.domainMid != null && (l = t.domainMid, (l < a[0] || l > a[c]) && n.warn("Scale domainMid exceeds domain min or max.", l), a.splice(c, 0, l))), r.domain(js(o, a, n)), t.nice && r.nice && r.nice(t.nice !== !0 && Uo(r, t.nice) || null), {
		domain: r.domain(),
		count: a.length,
		ordinalUnknown: o === "ordinal" && t.domainImplicit ? jn : void 0,
		applyOrdinalUnknown: o === At
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function ks(e, t, n) {
	return t ? (e.domain(js(e.type, t, n)), t.length) : -1;
}
function As(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(je(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? gn(t, null, s) : e === "sqrt" ? Wt(t, null, s, .5) : e === "pow" ? Wt(t, null, s, i || 1) : e === "symlog" ? vt(t, null, s, a || 1) : sn(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function js(e, t, n) {
	return ht(e) && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : +(t > 0));
	}, 0)) !== t.length && n.warn("Log scale domain includes zero: " + he(t)), t;
}
function Ms(e, t, n) {
	let r = t.bins;
	if (r && !O(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? je(t) : r.stop, a = r.step;
		a || Ze("Scale bins parameter missing step property."), r = _e(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function Ns(e, t, n) {
	var r = e.type, i = t.round || !1, a = t.range;
	if (t.rangeStep != null) a = Ps(r, t, n);
	else if (t.scheme && (a = Fs(r, t, n), tt(a))) {
		if (e.interpolator) return e.interpolator(a);
		Ze(`Scale type ${r} does not support interpolating color schemes.`);
	}
	if (a && Lt(r)) return e.interpolator(Ot(Ls(a, t.reverse), t.interpolate, t.interpolateGamma));
	a && t.interpolate && e.interpolate ? e.interpolate(wn(t.interpolate, t.interpolateGamma)) : tt(e.round) ? e.round(i) : tt(e.rangeRound) && e.interpolate(i ? Ve : m), a && e.range(Ls(a, t.reverse));
}
function Ps(e, t, n) {
	e !== "band" && e !== "point" && Ze("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * en(n, i, r)];
}
function Fs(e, t, n) {
	var r = t.schemeExtent, i = t.schemeCount, a, o;
	return O(t.scheme) ? o = Ot(t.scheme, t.interpolate, t.interpolateGamma) : (H(t.scheme) ? a = t.scheme.toLowerCase() : (a = t.scheme.name.toLowerCase(), r = t.scheme.extent ?? r, i = t.scheme.count ?? i), o = St(a), o || Ze(`Unrecognized scheme name: ${t.scheme}`)), n = e === "threshold" ? n + 1 : e === "bin-ordinal" ? n - 1 : e === "quantile" || e === "quantize" ? +i || vs : n, Lt(e) ? Is(o, r, t.reverse) : tt(o) ? On(Is(o, r), n) : e === "ordinal" ? o : o.slice(0, n);
}
function Is(e, t, n) {
	return tt(e) && (t || n) ? Nt(e, Ls(t || [0, 1], n)) : e;
}
function Ls(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region ../core/src/data/sources/lazy/legendGradientSource.js
var Rs = 64, zs = 5;
function Bs(e, t, n) {
	let r = Vs(e, t, n), i = Hs(r.length);
	if ("copy" in e && typeof e.copy == "function" && "invert" in e && typeof e.invert == "function") {
		let t = e.copy();
		return t.domain(r), t.range(i), t;
	}
	let a = e.props, o = a?.type;
	if (o) {
		let e = { ...a }, t = e;
		delete e.range, delete e.scheme, delete t.domainMin, delete t.domainMid, delete t.domainMax, delete t.schemeExtent, delete t.schemeCount;
		let n = ws({
			...e,
			type: o,
			domain: r,
			range: i,
			zero: !1,
			nice: !1
		});
		if ("invert" in n && typeof n.invert == "function") return n;
	}
	return Ws(t, n);
}
function Vs(e, t, n) {
	if ("domain" in e && typeof e.domain == "function") {
		let r = e.domain().map(qs);
		if (r.length >= 2) return [
			t,
			...r.slice(1, -1),
			n
		];
	}
	return [t, n];
}
function Hs(e) {
	let t = e - 1;
	return Array.from({ length: e }, (e, n) => n / t);
}
function Us(e, t) {
	return (n) => e + (t - e) * n;
}
function Ws(e, t) {
	let n = ((n) => (n - e) / (t - e));
	return n.invert = Us(e, t), n;
}
function Gs(e) {
	let t = e[0], n = e.at(-1), r = n - t, i = e.length - 1, a = i ? r / i : .1;
	return [t - a, n + a];
}
function Ks(e) {
	return e.type == "quantize" && "range" in e && typeof e.range == "function" && "invertExtent" in e && typeof e.invertExtent == "function" && "thresholds" in e && typeof e.thresholds == "function";
}
function qs(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
var Js = class extends J {
	#e = void 0;
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = ms(t, e.channel), !this.scaleResolution) throw Error(`The gradient legend data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#t();
		this.scaleResolution.addEventListener("domain", n), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	async load() {
		this.#e = void 0, this.#t();
	}
	#t() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !$t(e, this.#e)) {
			let t = Number(e[0]), n = Number(e.at(-1));
			if (!Number.isFinite(t) || !Number.isFinite(n)) throw Error("Gradient legends require a finite numeric scale domain.");
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" }), this.publishData(t, n), this.complete();
		}
	}
	publishData(e, t) {
		throw Error("Gradient legend data source must implement publishData.");
	}
}, Ys = class extends Js {
	get label() {
		return "legendGradientSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale();
		if (n.type == "threshold") {
			this.#t();
			return;
		} else if (Ks(n)) {
			this.#e(e, t, n);
			return;
		}
		let r = this.params.count ?? Rs, i = Bs(n, e, t), a = (e) => i.invert(e);
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
		let r = Ws(e, t);
		for (let [e, t] of n.range().entries()) {
			let [i, a] = n.invertExtent(t).map(qs), o = (i + a) / 2;
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
		let e = this.scaleResolution.getDomain().map(Number), [t, n] = Gs(e), r = Ws(t, n), i = [
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
}, Xs = class extends Js {
	get label() {
		return "legendGradientTicksSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale(), r = n.type == "threshold" ? Gs(this.scaleResolution.getDomain().map(Number)) : [e, t], i = Bs(n, r[0], r[1]), a = this.params.count ?? zs, o = Uo(n, a, void 0), s = qo(n, a, this.params.format), c = this.params.values ? this.params.values.map(qs).filter((e) => {
			let t = i(e);
			return Number.isFinite(t) && t >= 0 && t <= 1;
		}) : Ks(n) ? n.thresholds().map(qs) : Go(n, o).map(qs);
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
function Zs(e) {
	return e?.type == "legendGradient";
}
function Qs(e) {
	return e?.type == "legendGradientTicks";
}
q(Zs, Ys), q(Qs, Xs);
//#endregion
//#region ../core/src/data/sources/urlDescriptor.js
var $s = class extends Error {
	count;
	maxValues;
	constructor(e, t) {
		super(`URL expansion resolved ${e} distinct values, exceeding maxValues ${t}.`), this.name = "UrlLimitExceededError", this.count = e, this.maxValues = t;
	}
};
async function ec(e) {
	return pc(cc(e.url, e).map((t) => ({
		...t,
		url: y(e.baseUrl, t.url),
		indexUrl: t.indexUrl ? y(e.baseUrl, t.indexUrl) : void 0
	})), _c(e.url));
}
async function tc(e, t) {
	let n = await ec(e);
	if (n.length !== 1) throw Error(`${t} supports exactly one resolved URL.`);
	return n[0];
}
function nc(e) {
	let t = yc(e.url, e.indexUrl);
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
function rc(e) {
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
function ic(e, t) {
	if (!t) return e;
	let n = rc(t);
	for (let t = 0; t < e.length; t++) e[t] = n(e[t]);
	return e;
}
function ac(e, t) {
	return e.onLoadError == "skip" ? (console.warn(`Skipping failed URL: ${e.url}`, t), !0) : !1;
}
async function oc(e, t) {
	try {
		return await t();
	} catch (t) {
		if (ac(e, t)) return;
		throw t;
	}
}
function sc(e) {
	return JSON.stringify({
		url: e.url,
		indexUrl: e.indexUrl,
		fields: e.fields ? Object.fromEntries(Object.entries(e.fields).sort()) : void 0
	});
}
function cc(e, t) {
	if (hc(e)) return lc(e, t.indexUrl, t);
	let n = v(e) ? vc(t).createExpression(e.expr)() : e;
	return (Array.isArray(n) ? n : [n]).map(dc);
}
function lc(e, t, n) {
	let r = uc(e.values, n);
	if (!Array.isArray(r)) throw Error("URL template values must resolve to an array.");
	return r.map((n) => {
		let r = mc(n), i = e.attach === !1 ? void 0 : { [e.field]: r };
		return {
			url: fc(e.template, e.field, r),
			indexUrl: gc(t) ? fc(t.template, e.field, r) : N(t),
			fields: i,
			onLoadError: e.onLoadError
		};
	});
}
function uc(e, t) {
	return v(e) ? vc(t).createExpression(e.expr)() : e;
}
function dc(e) {
	if (typeof e == "string") return { url: e };
	if (e && typeof e == "object" && "url" in e && typeof e.url == "string") return e;
	throw Error("URL descriptor must be a string or an object with url.");
}
function fc(e, t, n) {
	let r = "{" + t + "}";
	if (!e.includes(r)) throw Error(`URL template must contain ${r}.`);
	return e.replaceAll(r, encodeURIComponent(String(n)));
}
function pc(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.url + "\n" + (t.indexUrl ?? "");
		n.has(e) || n.set(e, t);
	}
	let r = Array.from(n.values());
	if (t !== void 0 && r.length > t) throw new $s(r.length, t);
	return r;
}
function mc(e) {
	if (e == null || typeof e == "object" || typeof e == "function") throw Error("URL template values must be scalar in this version.");
	return e;
}
function hc(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function gc(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function _c(e) {
	return hc(e) ? e.maxValues : void 0;
}
function vc(e) {
	if (!e.paramRuntime) throw Error("URL ExprRef evaluation requires a parameter runtime.");
	return e.paramRuntime;
}
function yc(e, t) {
	let n = [];
	return v(e) && n.push(e.expr), hc(e) && v(e.values) && n.push(e.values.expr), v(t) && n.push(t.expr), n;
}
//#endregion
//#region ../core/src/utils/debounce.js
function bc(e, t, n = !0) {
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
var xc = class extends ts {
	#e = new AbortController();
	#t = [0, 0];
	#n;
	#r = 0;
	params;
	setupDebouncing(e) {
		let t = () => N(e.debounce), n = e.debounceMode;
		if (n == "domain") this.onDomainChanged = bc(this.onDomainChanged.bind(this), t, !1);
		else if (n == "window") this.loadInterval = bc(this.loadInterval.bind(this), t, !1);
		else throw Error("Invalid debounceMode: " + n);
	}
	onDomainChanged(e) {
		this.#n = e;
		let t = N(this.params?.windowSize) ?? -1;
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
}, Sc = class extends xc {
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
		let e = await tc({
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		}, "IndexedFastaSource"), [{ IndexedFasta: t }, { RemoteFile: n }] = await Promise.all([import("./esm-UTzrDLew.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
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
function Cc(e) {
	return e?.type == "indexedFasta";
}
q(Cc, Sc);
//#endregion
//#region ../core/src/data/sources/urlDescriptorController.js
var wc = class {
	#e;
	#t;
	#n;
	constructor(e, t) {
		this.#e = e, this.#t = t.getUrl, this.#n = t.getIndexUrl;
		let n = this.#t(), r = this.#n?.();
		(Tc(n) || Tc(r)) && nc({
			url: n,
			indexUrl: r,
			paramRuntime: e.paramRuntime,
			listener: t.onChange,
			registerDisposer: (t) => e.registerDisposer(t)
		});
	}
	async normalize() {
		return ec({
			url: this.#t(),
			indexUrl: this.#n?.(),
			baseUrl: this.#e.view.getBaseUrl(),
			paramRuntime: this.#e.paramRuntime
		});
	}
};
function Tc(e) {
	return !!(e && typeof e == "object" && !v(e));
}
//#endregion
//#region ../core/src/data/sources/urlDescriptorState.js
var Ec = class {
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
		let n = e.map(sc), r = await Promise.all(e.map((e, r) => this.#i(e, n[r], t)));
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
async function Dc(e) {
	try {
		let t = await e.controller.normalize(), n = await e.loadModules();
		e.setLoadingStatus("loading"), await e.state.update(t, (t) => oc(t, () => e.createHandle(t, n))), e.setLoadingStatus("complete");
	} catch (t) {
		if (e.clearData(), t instanceof $s) e.state.clearActive(), e.setLoadingStatus("complete");
		else throw e.setLoadingStatus("error", t.message), t;
	}
}
//#endregion
//#region ../core/src/data/sources/lazy/bigWigSource.js
var Oc = class extends xc {
	#e = new Ec();
	#t;
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = N(n.channel);
		if (super(t, r), this.params = Ge(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#r() : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new wc(this, {
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
		await Dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: Ac,
			createHandle: (e, { BigWig: t, RemoteFile: n }) => this.#a(e, t, n)
		});
	}
	async #a(e, t, n) {
		let r = new t({ filehandle: new n(e.url) }), i = (await r.getHeader()).zoomLevels.map((e) => e.reductionLevel).reverse();
		return i.push(1), {
			bbi: r,
			attachFields: rc(e.fields),
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
		let n = this.scaleResolution.getAxisLength() || 700, r = t.map((t) => Mc(e, n, t.reductionLevels)), i = Math.max(...r.map((e) => e * n), 5e3);
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
			let a = Nc(n[i], N(this.params.pixelsPerBin));
			return t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, {
				scale: a,
				signal: r
			}).then((n) => jc(e.chrom, n, t.attachFields));
		}))).flat();
	}
	async #s(e, t, n, r) {
		let i = await Promise.all(t.map((t, i) => {
			let a = Nc(n[i], N(this.params.pixelsPerBin));
			return t.bbi.getFeaturesMulti(e.map((e) => ({
				refName: e.chrom,
				start: e.startPos,
				end: e.endPos
			})), {
				scale: a,
				signal: r
			}).then((n) => n.map((n, r) => jc(e[r].chrom, n, t.attachFields)));
		}));
		return e.map((e, t) => i.flatMap((e) => e[t]));
	}
	isDataReadyForDomain(e) {
		return this.#e.activeSetLoaded && super.isDataReadyForDomain(e);
	}
};
function kc(e) {
	return e?.type == "bigwig";
}
q(kc, Oc);
async function Ac() {
	let [{ BigWig: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CkwcW56F.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		BigWig: e,
		RemoteFile: t
	};
}
function jc(e, t, n) {
	return t.map((t) => n({
		chrom: e,
		start: t.start,
		end: t.end,
		score: t.score
	}));
}
function Mc(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
function Nc(e, t) {
	return 1 / 2 / e / t;
}
//#endregion
//#region ../core/src/data/sources/lazy/bigBedSource.js
var Pc = class extends xc {
	#e = new Ec();
	#t;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = N(n.channel);
		if (super(t, r), this.params = Ge(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#r() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new wc(this, {
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
		await Dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: Lc,
			createHandle: (e, { BigBed: t, RemoteFile: n, BED: r }) => this.#a(e, t, n, r)
		});
	}
	async #a(e, t, n, r) {
		let i = new t({ filehandle: new n(e.url) }), a = new r({ autoSql: (await i.getHeader()).autoSql }), o;
		try {
			let e = Fc(a);
			o = (t, n) => e(t, n.start, n.end, n.rest);
		} catch {
			o = (e, t) => a.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
		}
		return {
			attachFields: rc(e.fields),
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
function Fc(e) {
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
        };`)(), u = Rc(t.map((e) => {
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
function Ic(e) {
	return e?.type == "bigbed";
}
q(Ic, Pc);
async function Lc() {
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
function Rc(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region ../core/src/data/sources/lazy/bamSource.js
var zc = class extends xc {
	#e;
	chrPrefixFixer = (e) => e;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		}, r = N(n.channel);
		if (super(t, r), this.params = Ge(t.paramRuntime, n, (e) => {
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
		let e = await tc({
			url: this.params.url,
			indexUrl: this.params.indexUrl,
			baseUrl: this.view.getBaseUrl(),
			paramRuntime: this.paramRuntime
		}, "BamSource"), [{ BamFile: t }, { RemoteFile: n }] = await Promise.all([import("./esm-WXCWpaYd.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
		this.#e = new t({
			bamFilehandle: new n(e.url),
			baiFilehandle: new n(e.indexUrl ?? e.url + ".bai")
		}), await this.#e.getHeader();
		let r = this.genome.hasChrPrefix(), i = this.#e.indexToChr?.[0]?.refName.startsWith("chr");
		r && !i ? this.chrPrefixFixer = (e) => e.replace("chr", "") : !r && i && (this.chrPrefixFixer = (e) => "chr" + e);
	}
	async loadInterval(e) {
		let t = await this.discretizeAndLoad(e, async (e, t) => this.#e.getRecordsForRange(this.chrPrefixFixer(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => Vc(e.chrom, t))));
		t && this.publishData(t);
	}
};
function Bc(e) {
	return e?.type == "bam";
}
q(Bc, zc);
function Vc(e, t) {
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
function Hc(e) {
	return "values" in e;
}
var Uc = class extends J {
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
		if (Array.isArray(e)) e.length > 0 && (t = e, n = Qc(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = ro(e, qc(Kc(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Wc = /* @__PURE__ */ new Set([
	"csv",
	"tsv",
	"dsv"
]), Gc = /* @__PURE__ */ new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function Kc(e, t = []) {
	if (!Hc(e) && !rl(e)) return;
	let n = { ...e.format };
	if (n.type ??= rl(e) && Yc(t), n.parse === void 0 && il(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function qc(e) {
	let t = { ...e };
	return (tl(t) || nl(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function Jc(e) {
	return no(e)?.responseType ?? "text";
}
function Yc(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = Zc(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && Gc.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && no(r)) return r;
	}
}
function Xc(e) {
	let t = Zc(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && Gc.has(n);
}
function Zc(e) {
	return e.replace(/[?#].*$/, "");
}
var Qc = (e) => typeof e == "object" ? el : $c, $c = (e) => ({ data: e }), el = (e) => e;
function tl(e) {
	return e.type == "csv" || e.type == "tsv";
}
function nl(e) {
	return e.type == "dsv";
}
function rl(e) {
	return "url" in e;
}
function il(e) {
	return Wc.has(e);
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixSource.js
var al = class extends xc {
	#e = new Ec();
	#t;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = N(n.channel);
		if (super(t, r), this.params = Ge(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.#r() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.#t = new wc(this, {
			getUrl: () => this.params.url,
			getIndexUrl: () => this.params.indexUrl,
			onChange: () => this.#r()
		}), !N(this.params.url)) throw Error("No URL provided for TabixSource");
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
		await Dc({
			controller: this.#t,
			state: this.#e,
			clearData: () => this.invalidateData(),
			setLoadingStatus: (e, t) => this.setLoadingStatus(e, t),
			loadModules: async () => {
				let { TabixIndexedFile: e, RemoteFile: t } = await ol(), n = N(this.params.addChrPrefix);
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
			}), [t, ic(this._parseFeatures(r, t.parserContext), t.fields)];
		})));
		n && this.#o(t, n);
	}
	async _createParser(e, t) {}
	async _readFilePrefix(e) {
		let { maxBlockSize: t } = await e.getMetadata(), n = await _r(await e.filehandle.read(t, 0));
		return new TextDecoder("utf-8").decode(n);
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
async function ol() {
	let [{ TabixIndexedFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CcBGBjCH.js"), import("./browser-kyCRRjQB.js").then((e) => e.n)]);
	return {
		TabixIndexedFile: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixTsvSource.js
function sl(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function cl(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function ll(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = ro(e.join("\n"), qc(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var ul = class extends al {
	get label() {
		return "tabixSource";
	}
	async _createParser(e, t) {
		let n = this.params, r = N(n.columns) ?? sl(e);
		if (r?.length || (r = cl(await this._readFilePrefix(t))), !r?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
		return r;
	}
	_parseFeatures(e, t) {
		let n = this.params;
		return ll(e, t ?? [], N(n.parse));
	}
};
function dl(e) {
	return e?.type == "tabix";
}
q(dl, ul);
//#endregion
//#region ../core/src/data/sources/lazy/gff3Source.js
var fl = class extends al {
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
function pl(e) {
	return e?.type == "gff3";
}
q(pl, fl);
//#endregion
//#region ../core/src/data/sources/lazy/vcfSource.js
var ml = class extends al {
	get label() {
		return "vcfSource";
	}
	async _createParser(e) {
		return await Ro(e);
	}
	_parseFeatures(e, t) {
		return Bo(e, t);
	}
};
function hl(e) {
	return e?.type == "vcf";
}
q(hl, ml);
//#endregion
//#region ../core/src/styles/genome-spy.css.js
var gl = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.tooltip {\nposition: fixed;\ninset: auto;\nmargin: 0;\nborder: 0;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: #f6f6f6;\nbackground: var(--background-color);\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid black;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, black 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\n&:first-child {\nmargin-top: 0;\n}\n\nborder-collapse: collapse;\n\nth,\ntd {\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px white;\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid black;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: #e0e0e0;\n}\n}\n\n.autoscroll-container {\nmax-height: min(40em, 50vh);\noverflow-x: hidden;\noverflow-y: auto;\npadding-right: var(--genome-spy-basic-spacing);\nmargin-right: calc(-1 * var(--genome-spy-basic-spacing));\n}\n\n.na {\ncolor: #aaa;\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\n}\n}\n}\n", _l = "gs-suppress-tooltip", vl = "gs-freeze-interaction", yl = class {
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
		this.#o = document.createElement("div"), this.#o.className = "tooltip", this.#o.setAttribute("popover", "manual"), e.appendChild(this.#o), this.clear();
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
		return wt(this.#c) ?? !0;
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
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && xl(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 10;
		n > window.innerWidth - 10 - this.#o.offsetWidth && (n = e - 10 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 10, window.innerHeight - 10 - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		if (!this.#e) {
			if (!e || !this.enabled || this._isPenalty()) {
				this.visible &&= (Ai("", this.#o), !1), this.#n = void 0;
				return;
			}
			Ai(e, this.#o), this.#o.querySelectorAll(".autoscroll-container").forEach(bl), this.visible = !0, this.updatePlacement();
		}
	}
	clear() {
		this.#n = void 0, this.setContent(void 0);
	}
	updateWithDatum(e, t) {
		if (e !== this.#n) {
			this.#n = e, t ||= (e) => Promise.resolve(W` ${JSON.stringify(e)} `);
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
function bl(e) {
	e && queueMicrotask(() => {
		e.querySelector("tr.hovered")?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	});
}
function xl(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region ../core/src/genomeSpy/containerUi.js
function Sl(e) {
	e.classList.add("genome-spy");
	let t = document.createElement("style");
	t.innerHTML = gl, e.appendChild(t);
	let n = wl("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: wl("div", { class: "loading-indicators" }),
		tooltip: new yl(e),
		styleElement: t
	};
}
function Cl(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	r.textContent = t, n.appendChild(r), e.appendChild(n);
}
function wl(e, t) {
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
var Tl = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, El = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Dl = class {
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
}, Ol = "important", kl = " !important", Al = El(class extends Dl {
	constructor(e) {
		if (super(e), e.type !== Tl.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				let t = typeof r == "string" && r.endsWith(kl);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? Ol : "") : n[e] = r;
			}
		}
		return mi;
	}
}), jl = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", Ml = class {
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
				e.push(W`<div style=${Al(t)}>
                        <div class=${i.status}>
                            ${i.status == "error" ? W`<span
                                      >Loading
                                      failed${i.detail ? W`: ${i.detail}` : G}</span
                                  >` : W`
                                      <img src="${jl}" alt="" />
                                      <span>Loading...</span>
                                  `}
                        </div>
                    </div>`);
			}
		}
		n && !r && e.push(W`<div style=${Al({
			left: "0px",
			top: "0px",
			width: "100%",
			height: "100%"
		})}>
                    <div class=${n.status}>
                        ${n.status == "error" ? W`<span
                                  >Loading
                                  failed${n.detail ? W`: ${n.detail}` : G}</span
                              >` : W`
                                  <img src="${jl}" alt="" />
                                  <span>Loading...</span>
                              `}
                    </div>
                </div>`), t() ? this.#e.style.display = "block" : setTimeout(() => {
			t() || (this.#e.style.display = "none");
		}, 3e3), Ai(e, this.#e);
	}
}, Nl = class {
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
function Pl(e) {
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
var Fl = class {
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
}, Il = class {
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
function Ll(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!s(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let a = r.name, o = (t) => {
			e.setValue(a, t);
		}, c = e.getTargetValue?.(a) ?? e.getValue(a), l = i.name ?? a, u = i.debounce ? bc(o, i.debounce, !1) : o, d = `${t}-param-${a}`;
		if (i.input == "range") n.push(W`<label for=${d}>${l}</label>
                    <div>
                        <input
                            id=${d}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? Ie(i.min, i.max, 100)}
                            .value=${c}
                            @input=${(e) => {
			u(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${c}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(W`<label for=${d}>${l}</label>
                    <input
                        id=${d}
                        type="checkbox"
                        ?checked=${c}
                        @input=${(e) => u(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(W`<span class="label">${l}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => W`<label>
                                    <input
                                        type="radio"
                                        name=${a}
                                        value=${e}
                                        .checked=${c == e}
                                        @input=${(e) => u(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(W`<label for=${d}>${l}</label>
                    <select
                        id=${d}
                        @input=${(e) => u(e.target.value)}
                    >
                        ${i.options.map((e, t) => W`<option
                                    value=${e}
                                    ?selected=${c == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(W`<label for=${d}>${l}</label>
                    <div>
                        <input
                            id=${d}
                            type=${i.input}
                            placeholder=${i.placeholder ?? ""}
                            autocomplete=${i.autocomplete ?? "off"}
                            .value=${c}
                            @focus=${(e) => e.target.select()}
                            @input=${(e) => {
			u(i.input == "number" ? e.target.valueAsNumber : e.target.value);
		}}
                        />
                    </div>`);
		else throw Error("Unsupported input type: " + i.input);
		i.description && n.push(W`<div class="description">${i.description}</div>`);
	}
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/inputBindingManager.js
var Rl = class {
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
			t.push(...Ll(n));
		});
		let n = this.#t.inputBindingContainer;
		if (!(!n || n == "none" || !t.length)) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && Ai(W`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
}, zl = "flat out lowp vec4 vFillColor;\nflat out lowp vec4 vStrokeColor;\nflat out float vHalfStrokeWidth;\nflat out vec4 vCornerRadii;\n\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\n/** Position for SDF-strokes */\nout vec2 vPosInPixels;\n#endif\n\n/** Size of the rect in pixels */\nflat out vec2 vHalfSizeInPixels;\n\n/**\n * Adjusts the vertex position to ensure that the rectangle is at least `minSpan`\n * wide or high. Returns a value that reflects the amount of clamping and can be\n * used to adjust the opacity of the rectangle.\n *\n * pos: vertex position\n * frac: vertex position within the rectangle, [0, 1]\n * size: width or height of the rectangle\n * minSize: minimum width or height of the rectangle\n */\nfloat clampMinSize(inout float pos, float frac, float size, float minSize) {\n    if (minSize > 0.0 && size < minSize) {\n        pos += (frac - 0.5) * (minSize - size);\n        return size / minSize;\n    }\n\n    return 1.0;\n}\n\nvoid sort(inout float a, inout float b) {\n    if (a > b) {\n        float tmp = b;\n        b = a;\n        a = tmp;\n    }\n}\n\n/**\n * The vertex position wrt the rectangle specified by (x, x2, y, y2).\n * [0, 0] = [x, y], [1, 1] = [x2, y2]. \n * The x or y component may contain fractional values if the rectangle \n * have been tessellated.\n */\nvec2 getVertexPos() {\n    int index = gl_VertexID % 6;\n    return vec2(\n        index == 0 || index == 1 || index == 3 ? 0.0 : 1.0,\n        index == 0 || index == 1 || index == 2 ? 0.0 : 1.0\n    );\n    \n}\n\nvoid main(void) {\n    vec2 frac = getVertexPos();\n\n    vec2 normalizedMinSize = vec2(uMinWidth, uMinHeight) / uViewportSize;\n    vec4 cornerRadii = vec4(\n        uCornerRadiusTopRight,\n        uCornerRadiusBottomRight,\n        uCornerRadiusTopLeft,\n        uCornerRadiusBottomLeft\n    );\n\n    SampleFacetPosition sampleFacetPos = getSampleFacetPos();\n    if (sampleFacetPos.height == 0.0) {\n        // Filtered samples have no facet height. Cull them before minimum-size\n        // clamping can expand their rectangles at the viewport boundary.\n        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);\n        return;\n    }\n\n    vec2 pos1 = applyOffset(\n        applySampleFacet(vec2(getScaled_x(), getScaled_y())),\n        vec2(getScaled_xOffset(), getScaled_yOffset())\n    );\n    vec2 pos2 = applyOffset(\n        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),\n        vec2(getScaled_x2Offset(), getScaled_y2Offset())\n    );\n\n    sort(pos1.x, pos2.x);\n    sort(pos1.y, pos2.y);\n\n    // Clamp x to prevent precision artifacts when the scale is zoomed very close.\n	// TODO: clamp y as well\n	float clampMargin = 1.0;\n    pos1.x = clamp(pos1.x, 0.0 - clampMargin, 1.0 + clampMargin);\n    pos2.x = clamp(pos2.x, 0.0 - clampMargin, 1.0 + clampMargin);\n\n    vec2 size = pos2 - pos1;\n\n    if (size.x < 0.0 || size.y < 0.0) {\n        // Keep zero-sized rects alive so min-size clamping can stabilize them.\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n        return;\n    }\n\n    vec2 pos = pos1 + frac * size;\n\n    // Clamp to minimum size, optionally compensate with opacity\n    float opaFactor = uViewOpacity * max(uMinOpacity,\n        clampMinSize(pos.x, frac.x, size.x, normalizedMinSize.x) *\n        clampMinSize(pos.y, frac.y, size.y, normalizedMinSize.y));\n\n    size = max(size, normalizedMinSize);\n\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\n    // Add an extra pixel to the stroke width to accommodate edge antialiasing\n    float aaPadding = 1.0 / uDevicePixelRatio;\n\n    // TODO: Only expand to the offset direction. Now high offsets result in\n    // a large expansion in all directions.\n    float shadowPadding = uShadowBlur + max(abs(uShadowOffsetX), abs(uShadowOffsetY));\n\n    float strokeWidth = getScaled_strokeWidth();\n    float strokeOpacity = getScaled_strokeOpacity() * opaFactor;\n\n    vec2 centeredFrac = frac - 0.5;\n    vec2 expand = centeredFrac * (strokeWidth + aaPadding + shadowPadding * 2.0) / uViewportSize;\n    pos += expand;\n\n    vec2 sizeInPixels = size * uViewportSize;\n    vPosInPixels = (centeredFrac + expand / size) * sizeInPixels;\n\n    vHalfSizeInPixels = sizeInPixels / 2.0;\n\n    vCornerRadii = min(cornerRadii, min(vHalfSizeInPixels.x, vHalfSizeInPixels.y));\n    vHalfStrokeWidth = strokeWidth / 2.0;\n    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);\n#endif\n\n    gl_Position = unitToNdc(pos);\n\n    float fillOpacity = getScaled_fillOpacity() * opaFactor;\n    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);\n\n    setupPicking();\n}\n", Bl = "#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\nin vec2 vPosInPixels;\n#endif\n\nflat in vec2 vHalfSizeInPixels;\n\nflat in lowp vec4 vFillColor;\nflat in lowp vec4 vStrokeColor;\nflat in float vHalfStrokeWidth;\nflat in vec4 vCornerRadii;\n\nout lowp vec4 fragColor;\n\n// ----------------------------------------------------------------------------\n// Shadow source: https://madebyevan.com/shaders/fast-rounded-rectangle-shadows/\n// License: CC0 (http://creativecommons.org/publicdomain/zero/1.0/)\n\n#ifdef SHADOW\n\n// A standard gaussian function, used for weighting samples\nfloat gaussian(float x, float sigma) {\n  const float pi = 3.141592653589793;\n  return exp(-(x * x) / (2.0 * sigma * sigma)) / (sqrt(2.0 * pi) * sigma);\n}\n\n// This approximates the error function, needed for the gaussian integral\nvec2 erf(vec2 x) {\n  vec2 s = sign(x), a = abs(x);\n  x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;\n  x *= x;\n  return s - s / (x * x);\n}\n\n// Return the blurred mask along the x dimension\nfloat roundedBoxShadowX(float x, float y, float sigma, float corner, vec2 halfSize) {\n  float delta = min(halfSize.y - corner - abs(y), 0.0);\n  float curved = halfSize.x - corner + sqrt(max(0.0, corner * corner - delta * delta));\n  vec2 integral = 0.5 + 0.5 * erf((x + vec2(-curved, curved)) * (sqrt(0.5) / sigma));\n  return integral.y - integral.x;\n}\n\n// Return the mask for the shadow of a box from lower to upper\nfloat roundedBoxShadow(vec2 lower, vec2 upper, vec2 point, float sigma, float corner) {\n  // Center everything to make the math easier\n  vec2 center = (lower + upper) * 0.5;\n  vec2 halfSize = (upper - lower) * 0.5;\n  point -= center;\n\n  // The signal is only non-zero in a limited range, so don't waste samples\n  float low = point.y - halfSize.y;\n  float high = point.y + halfSize.y;\n  float start = clamp(-3.0 * sigma, low, high);\n  float end = clamp(3.0 * sigma, low, high);\n\n  // Accumulate samples (we can get away with surprisingly few samples)\n  float step = (end - start) / 4.0;\n  float y = start + step * 0.5;\n  float value = 0.0;\n  for (int i = 0; i < 4; i++) {\n    value += roundedBoxShadowX(point.x, point.y - y, sigma, corner, halfSize) * gaussian(y, sigma) * step;\n    y += step;\n  }\n\n  return value;\n}\n\n// ----------------------------------------------------------------------------\n\n#endif\n\n// Source: https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\nfloat sdRoundedBox(vec2 p, vec2 b, vec4 r) {\n    r.xy = p.x > 0.0 ? r.xy : r.zw;\n    r.x  = p.y > 0.0 ? r.x  : r.y;\n    vec2 q = abs(p) - b + r.x;\n    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n}\n\n// Not a true SDF. Makes the corners of strokes sharp and is faster.\nfloat sdSharpBox(vec2 p, vec2 b) {\n    vec2 q = abs(p) - b;\n    return max(q.x, q.y);\n}\n\nfloat diagonalPattern(vec2 uv, float spacing) {\n    // Using 1.5 to approximate sqrt(2.0) to reduce aliasing artifacts.\n    float divisor = spacing * vHalfStrokeWidth * 2.0 * 1.5;\n    return abs(mod(uv.x - uv.y, divisor) - 0.5 * divisor) / 1.5;\n}\n\nfloat verticalPattern(float x, float spacing) {\n    float divisor = spacing * vHalfStrokeWidth * 2.0;\n    return abs(mod(x, divisor)) / 2.0;\n}\n\nfloat circle(vec2 p, float r) {\n    return length(p) - r;\n}\n\nfloat masonryCirclePattern(vec2 uv, float spacing, float radius) {\n    float halfSpacing = 0.5 * spacing;\n\n    float row = floor(uv.y / spacing);\n    float shift = mod(row, 2.0) * halfSpacing;\n\n    vec2 shifted = vec2(uv.x + shift, uv.y + halfSpacing);\n    vec2 cell = mod(shifted + 0.5 * spacing, spacing) - halfSpacing;\n\n    return abs(circle(cell, radius));\n}\n\n/**\n * Patterns:\n * 0  none\n * 1  diagonal (/)\n * 2  antiDiagonal (\\)\n * 3  cross (X)\n * 4  vertical (|)\n * 5  horizontal (-)\n * 6  grid (+)\n * 7  dots (.)\n * 8  rings (o)\n * 9  ringsLarge (O)\n */\nfloat pattern() {\n#ifdef STROKED\n    int patternType = uHatchPattern;\n    vec2 uv = vPosInPixels;\n    float spacing = 4.0;\n\n    switch (patternType) {\n        case 1:\n            return diagonalPattern(vec2(uv.x, -uv.y), spacing);\n        case 2:\n            return diagonalPattern(uv, spacing);\n        case 3:\n            return min(\n                diagonalPattern(uv, spacing),\n                diagonalPattern(vec2(uv.x, -uv.y), spacing)\n            );\n        case 4:\n            return verticalPattern(uv.x, spacing);\n        case 5:\n            return verticalPattern(uv.y, spacing);\n        case 6:\n            return min(\n                verticalPattern(uv.x, spacing),\n                verticalPattern(uv.y, spacing)\n            );\n        case 7:\n        case 8:\n        case 9: {\n            float spacing = vHalfStrokeWidth * 14.0;\n            float radius = spacing * (\n                patternType == 8 ? 0.2 :\n                patternType == 9 ? 0.35 :\n                0.07\n            );\n            return masonryCirclePattern(uv, spacing, radius);\n        }\n        default:\n            break;\n    }\n#endif\n    return 1.0 / 0.0; // Infinity\n}\n\nvoid main(void) {\n\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\n#ifdef ROUNDED_CORNERS\n    // Distance from rectangle's edge in pixels. Negative inside the rectangle.\n    float d = sdRoundedBox(vPosInPixels, vHalfSizeInPixels, vCornerRadii);\n#else\n    float d = sdSharpBox(vPosInPixels, vHalfSizeInPixels);\n#endif\n\n    vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 0.0);\n\n#ifdef SHADOW\n    float maxCornerRadius = max(vCornerRadii.x, max(vCornerRadii.y, max(vCornerRadii.z, vCornerRadii.w)));\n\n    float shadow = 0.0;\n    // Only calculate shadow for the region outside the stroke.\n    if (d >= vHalfStrokeWidth - 1.0 && uShadowOpacity > 0.0) {\n        shadow = roundedBoxShadow(\n            -vHalfSizeInPixels - vHalfStrokeWidth,\n            vHalfSizeInPixels + vHalfStrokeWidth,\n            vPosInPixels - vec2(uShadowOffsetX, -uShadowOffsetY),\n            max(uShadowBlur / 2.5, 0.25),\n            maxCornerRadius + vHalfStrokeWidth\n        ) * uShadowOpacity * uViewOpacity;\n    }\n    backgroundColor = vec4(uShadowColor * shadow, shadow);\n#endif\n\n    if (vHalfStrokeWidth > 0.0 && uHatchPattern > 0) {\n        d = max(d, -pattern());\n    }\n\n    fragColor = distanceToColor(\n        d,\n        vFillColor,\n        vStrokeColor,\n        backgroundColor,\n        vHalfStrokeWidth\n    );\n\n    if (uPickingEnabled) {\n        if (d < vHalfStrokeWidth) {\n            fragColor = vPickingColor;\n        }\n    } else if (fragColor.a == 0.0) {\n        discard;\n    }\n#else\n    // The trivial, non-decorated case\n    fragColor = vFillColor;\n    if (uPickingEnabled) {\n        fragColor = vPickingColor;\n    }\n#endif\n}\n", Vl = "layout(std140) uniform Mark {\n    /** Minimum size (width, height) of the displayed rectangle in pixels */\n    uniform float uMinWidth;\n    uniform float uMinHeight;\n\n    /** Minimum opacity for the size clamping */\n    uniform float uMinOpacity;\n\n    uniform float uCornerRadiusTopRight;\n    uniform float uCornerRadiusBottomRight;\n    uniform float uCornerRadiusTopLeft;\n    uniform float uCornerRadiusBottomLeft;\n\n    uniform int uHatchPattern;\n\n    uniform vec3 uShadowColor;\n    uniform float uShadowOpacity;\n    uniform float uShadowBlur;\n    uniform float uShadowOffsetX;\n    uniform float uShadowOffsetY;\n\n#pragma markUniforms\n};\n", Hl = 1e4, Ul = class {
	#e = !1;
	constructor(e) {
		this.size = e, this.arrays = {}, this.pushers = [], this.dataUpdaters = [], this.vertexCount = 0;
	}
	configure() {
		if (this.#e) throw Error("Already configured!");
		this.#t(), this.#n(), this.#e = !0;
	}
	addConverter(e, t) {
		let n = this.createUpdater(e, t.numComponents || 1, t.targetArrayType ?? Float32Array, t.arrayReference), r = t.f;
		this.dataUpdaters.push((t.arrayReference, (e) => n(r(e))));
	}
	createUpdater(e, t, n = Float32Array, r = void 0) {
		if (!E(this.size)) throw Error("The number of vertices must be defined!");
		let i, a, o = 0, s = new n(this.size * t);
		if (this.arrays[e] = {
			data: s,
			numComponents: t
		}, t == 1) {
			let e = 0;
			i = () => {
				s[o++] = e;
			}, a = (t) => {
				e = +t;
			};
		} else {
			let e = r ?? [0], n = r ? (e) => {} : (t) => {
				e = t;
			};
			switch (t) {
				case 1: break;
				case 2:
					i = () => {
						s[o++] = e[0], s[o++] = e[1];
					}, a = n;
					break;
				case 3:
					i = () => {
						s[o++] = e[0], s[o++] = e[1], s[o++] = e[2];
					}, a = n;
					break;
				case 4:
					i = () => {
						s[o++] = e[0], s[o++] = e[1], s[o++] = e[2], s[o++] = e[3];
					}, a = n;
					break;
				default: throw Error("Invalid numComponents: " + t);
			}
		}
		return this.pushers.push(i), a;
	}
	pushAll() {
		throw Error("Call configure() first!");
	}
	updateFromDatum(e) {
		throw Error("Call configure() first!");
	}
	#t() {
		if (this.size > Hl) {
			let e = this.pushers.map((e, t) => `const p${t} = that.pushers[${t}];`).join("\n"), t = this.pushers.map((e, t) => `  p${t}();`).join("\n");
			this.pushAll = Function("that", `${e}
return function unrolledPushAll() {
${t}
  that.vertexCount++;
};`)(this);
		} else this.pushAll = () => {
			for (let e = 0; e < this.pushers.length; e++) this.pushers[e]();
			this.vertexCount++;
		};
	}
	#n() {
		if (this.size > Hl) {
			let e = this.dataUpdaters.map((e, t) => `const u${t} = that.dataUpdaters[${t}];`).join("\n"), t = this.dataUpdaters.map((e, t) => `  u${t}(datum);`).join("\n");
			this.updateFromDatum = Function("that", "datum", `${e}
return function unrolledUpdateFromDatum(datum) {
${t}
};`)(this);
		} else this.updateFromDatum = (e) => {
			for (let t = 0; t < this.dataUpdaters.length; t++) this.dataUpdaters[t](e);
		};
	}
	pushFromDatum(e) {
		this.updateFromDatum(e), this.pushAll();
	}
};
//#endregion
//#region ../core/src/utils/scaleNull.js
function Wl() {
	let e = (e) => e;
	return e.invert = (e) => e, e.copy = Wl, e.invertRange = () => {}, e.type = "null", e;
}
//#endregion
//#region ../core/src/gl/hashTable.js
var Gl = 4294967295, Kl = 4294967295;
function ql(e) {
	let t = e >>> 0;
	return t ^= t >>> 16, t = Math.imul(t, 2146121005), t ^= t >>> 15, t = Math.imul(t, 2221713035), t ^= t >>> 16, t >>> 0;
}
function Jl(e, t = {}) {
	let n = Array.from(e, (e) => Xl(e, "key")), r = n.length, i = t.maxLoadFactor ?? .6;
	if (!(i > 0 && i < 1)) throw Error("maxLoadFactor must be between 0 and 1.");
	let a = t.capacity ?? Zl(Math.ceil(r / i));
	if (!Number.isSafeInteger(a) || a < 1) throw Error("capacity must be a positive power of two.");
	if (a & a - 1) throw Error("capacity must be a power of two.");
	let o = new Uint32Array(a);
	o.fill(Gl);
	let s = a - 1;
	for (let e of n) {
		if (e === 4294967295) throw Error("Hash table keys must not equal the empty sentinel (0xffffffff).");
		let t = ql(e) & s, n = !1;
		for (let r = 0; r < a; r += 1) {
			let r = o[t];
			if (r === 4294967295 || r === e) {
				o[t] = e, n = !0;
				break;
			}
			t = t + 1 & s;
		}
		if (!n) throw Error("Hash table insertion failed. Increase capacity or lower load factor.");
	}
	return {
		table: o,
		capacity: a,
		size: r
	};
}
function Yl(e, t) {
	if (!Number.isSafeInteger(e) || e < 1) throw Error("capacity must be a positive integer.");
	if (e & e - 1) throw Error("capacity must be a power of two.");
	if (!Number.isSafeInteger(t) || t < 1) throw Error("maxTextureSize must be a positive integer.");
	if (e > t * t) throw Error("Selection hash table exceeds maximum texture capacity.");
	let n = 1 << Math.floor(Math.log2(t)), r = Math.min(e, n), i = e / r;
	if (i > t) throw Error("Selection hash table dimensions exceed maximum texture size.");
	return {
		width: r,
		height: i
	};
}
function Xl(e, t) {
	if (!Number.isSafeInteger(e) || e < 0 || e > Kl) throw Error(t + " must be a non-negative u32.");
	return e >>> 0;
}
function Zl(e) {
	let t = Math.max(1, e);
	return --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1;
}
//#endregion
//#region ../core/src/gl/canvasSizeHelper.js
var Ql = class {
	constructor(e, t, n, r) {
		this._container = e, this._canvas = t, this._sizeSource = n, this._onPhysicalSizeChange = r ?? (() => {}), this._logicalCanvasSize = void 0, this._devicePixelContentBoxSize = void 0, this._devicePixelContentBoxObserver = void 0, this._observeDevicePixelContentBox();
	}
	invalidate() {
		this._logicalCanvasSize = void 0, this._devicePixelContentBoxSize = void 0;
	}
	finalize() {
		this._devicePixelContentBoxObserver && this._devicePixelContentBoxObserver.disconnect();
	}
	getPhysicalCanvasSize(e) {
		if (this._devicePixelContentBoxSize) return this._devicePixelContentBoxSize;
		let t = window.devicePixelRatio ?? 1;
		return e ||= this.getLogicalCanvasSize(), {
			width: Math.round(e.width * t),
			height: Math.round(e.height * t)
		};
	}
	getDevicePixelRatio(e) {
		e ||= this.getLogicalCanvasSize();
		let t = this.getPhysicalCanvasSize(e), n = e.width > 0 ? t.width / e.width : void 0, r = e.height > 0 ? t.height / e.height : void 0;
		return n !== void 0 && r !== void 0 ? (n + r) / 2 : n === void 0 ? r === void 0 ? window.devicePixelRatio ?? 1 : r : n;
	}
	getLogicalCanvasSize() {
		if (this._logicalCanvasSize) return this._logicalCanvasSize;
		let e = this._sizeSource(), t = window.getComputedStyle(this._container, null), n = this._container.getBoundingClientRect(), r = parseFloat(t.paddingLeft), i = parseFloat(t.paddingRight), a = parseFloat(t.paddingTop), o = parseFloat(t.paddingBottom), s = parseFloat(t.borderLeftWidth), c = parseFloat(t.borderRightWidth), l = parseFloat(t.borderTopWidth), u = parseFloat(t.borderBottomWidth), d = e.width ?? n.width - r - i - s - c, f = e.height ?? n.height - a - o - l - u;
		return this._logicalCanvasSize = {
			width: d,
			height: f
		}, this._logicalCanvasSize;
	}
	_observeDevicePixelContentBox() {
		if (typeof ResizeObserver != "function") return;
		let e = new ResizeObserver((e) => {
			let t = e.find((e) => e.target == this._canvas);
			if (!t) return;
			let n = t.devicePixelContentBoxSize;
			if (!n) return;
			let r = Array.isArray(n) ? n[0] : n;
			if (!r) return;
			let i = {
				width: r.inlineSize,
				height: r.blockSize
			};
			this._devicePixelContentBoxSize && this._devicePixelContentBoxSize.width == i.width && this._devicePixelContentBoxSize.height == i.height || (this._devicePixelContentBoxSize = i, this._onPhysicalSizeChange());
		});
		try {
			e.observe(this._canvas, { box: "device-pixel-content-box" }), this._devicePixelContentBoxObserver = e;
		} catch {
			e.disconnect();
		}
	}
}, $l = class {
	constructor(e, t, n = {}, r) {
		let i = t ?? (() => ({
			width: void 0,
			height: void 0
		}));
		this._canvasSizeHelper = void 0, this._appliedCanvasSize = void 0, this._onCanvasResize = r ?? (() => {}), this._shaderCache = /* @__PURE__ */ new Map(), this.rangeTextures = /* @__PURE__ */ new WeakMap(), this.selectionTextures = /* @__PURE__ */ new WeakMap();
		let a = document.createElement("canvas");
		e.appendChild(a);
		let o = lr(a, {
			antialias: !0,
			depth: !1,
			premultipliedAlpha: !0,
			...n
		});
		if (!o) throw Error("Unable to initialize WebGL. Your browser or machine may not support it.");
		if (!or(o)) throw Error("Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.");
		ir(o);
		let s = o.getExtension("WEBGL_provoking_vertex");
		s && s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL), o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), this.canvas = a, this.gl = o, this._pickingAttachmentOptions = [{
			format: o.RGBA,
			type: o.UNSIGNED_BYTE,
			minMag: o.LINEAR,
			wrap: o.CLAMP_TO_EDGE
		}], this._pickingBufferInfo = dr(o, this._pickingAttachmentOptions), o.bindFramebuffer(o.FRAMEBUFFER, null), this._canvasSizeHelper = new Ql(e, a, i, () => {
			this.adjustGl() && this._onCanvasResize();
		}), this.adjustGl();
	}
	invalidateSize() {
		return this._canvasSizeHelper.invalidate(), this.adjustGl();
	}
	compileShader(e, t) {
		O(t) && (t = t.join("\n\n"));
		let n = this.gl, r = t.replaceAll(/ {2,}|^\s*\/\/.*$/gm, ""), i = this._shaderCache.get(r);
		if (!i) {
			let a = [
				"#version 300 es",
				"precision mediump float;",
				t
			].join("\n\n");
			i = n.createShader(e), n.shaderSource(i, a), n.compileShader(i), this._shaderCache.set(r, i);
		}
		return i;
	}
	adjustGl() {
		let e = this.getLogicalCanvasSize(), t = this.getPhysicalCanvasSize(e);
		return this._appliedCanvasSize && this._appliedCanvasSize.logicalWidth == e.width && this._appliedCanvasSize.logicalHeight == e.height && this._appliedCanvasSize.physicalWidth == t.width && this._appliedCanvasSize.physicalHeight == t.height ? !1 : (this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`, this.canvas.width = t.width, this.canvas.height = t.height, rr(this.gl, this._pickingBufferInfo, this._pickingAttachmentOptions), this._appliedCanvasSize = {
			logicalWidth: e.width,
			logicalHeight: e.height,
			physicalWidth: t.width,
			physicalHeight: t.height
		}, !0);
	}
	finalize() {
		this._canvasSizeHelper.finalize(), this.canvas.remove();
	}
	getPhysicalCanvasSize(e) {
		return this._canvasSizeHelper.getPhysicalCanvasSize(e);
	}
	getDevicePixelRatio(e) {
		return this._canvasSizeHelper.getDevicePixelRatio(e);
	}
	getLogicalCanvasSize() {
		return this._canvasSizeHelper.getLogicalCanvasSize();
	}
	createRangeTexture(e, t = !1) {
		let n = this.rangeTextures.get(e.getScale());
		if (!t && n) return;
		function r(e, t) {
			return z(t.type) ? t.domain().length : t.type == "threshold" || t.type == "quantize" ? Su(t) : t.type == "quantile" ? e ?? 4 : e;
		}
		let i = e.channel;
		if (dn(i)) {
			let t = e.getScale(), i = t.props, a = t.range(), o;
			if (i.scheme) if (z(t.type) || Vt(t.type)) o = su(a, this.gl, Su(t), n);
			else {
				let e = H(i.scheme) ? void 0 : i.scheme.count;
				e = r(e, t), o = iu(i.scheme, this.gl, e, n, !!i.reverse);
			}
			else o = Lt(t.type) || V(t.type) && a.length > 1 ? au(a, i.interpolate, this.gl, n) : su(a, this.gl, Vt(t.type) ? Su(t) : t.domain().length, n);
			this.rangeTextures.set(t, o);
		} else {
			let t = e.getScale();
			if (t.type === "ordinal" || Vt(t.type)) {
				let e = zt(i) ? Ut(i) : (e) => e, r = t.range();
				this.rangeTextures.set(t, ou(r.map(e), this.gl, Vt(t.type) ? Su(t) : t.domain().length, n));
			}
		}
	}
	createSelectionTexture(e, t = !0) {
		if (!Ye(e)) throw Error("Not a multi-point selection, cannot create texture");
		let { table: n, capacity: r } = Jl(e.data.keys()), { width: i, height: a } = Yl(r, this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)), o = this.selectionTextures.get(e), s = this.gl, c = nu(this.gl, {
			auto: !1,
			level: 0,
			min: s.NEAREST,
			mag: s.NEAREST,
			format: s.RED_INTEGER,
			internalFormat: s.R32UI,
			width: i,
			height: a
		}, n, t ? o : !1);
		s.bindTexture(s.TEXTURE_2D, c), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_BASE_LEVEL, 0), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAX_LEVEL, 0), s.bindTexture(s.TEXTURE_2D, null), this.selectionTextures.set(e, c);
	}
};
function eu(e, t = "", n = 0) {
	let r = [...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)], i = new Map(r.map((e, n) => {
		let i = parseInt(e[1]), a = r[n + 1], o = a ? a.index : t.length, s = t.substring(e.index, o);
		return [i - 1, s];
	}));
	return e.split("\n").map((e, t) => {
		let r = i.get(t);
		return `${t + 1 + n}: ${e}${r ? `\n\n^^^ ${r}` : ""}`;
	}).join("\n");
}
function tu(e, t, n) {
	let r = e.createProgram();
	e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r);
	function i() {
		let i, a;
		if (!e.getProgramParameter(r, e.LINK_STATUS)) {
			i = e.getProgramInfoLog(r);
			for (let r of [t, n]) e.getShaderParameter(r, e.COMPILE_STATUS) || (i = e.getShaderInfoLog(r), a = eu(e.getShaderSource(r), i, 0) + `\nError compiling: ${i}`, e.deleteShader(r));
			e.deleteProgram(r);
		}
		if (i) return {
			message: i,
			detail: a
		};
	}
	return {
		program: r,
		getProgramErrors: i
	};
}
function nu(e, t, n, r) {
	return r ? gr(e, r, n, t) : r = ar(e, {
		...t,
		src: n
	}), r;
}
function ru(e, t, n, r) {
	let { height: i, framebuffer: a } = t, o = /* @__PURE__ */ new Uint8Array(4);
	return e.bindFramebuffer(e.FRAMEBUFFER, a), e.readPixels(n, i - r - 1, 1, 1, e.RGBA, e.UNSIGNED_BYTE, o), e.bindFramebuffer(e.FRAMEBUFFER, null), o;
}
//#endregion
//#region ../core/src/gl/colorUtils.js
function iu(e, t, n, r, i = !1) {
	let a = H(e) ? e : e.name, o = !H(e) && e.extent || [0, 1];
	if (n === void 0 && !H(e) && (n = e.count), a) {
		let e = St(a);
		if (tt(e)) {
			let a = cu(e, {
				extent: o,
				count: n,
				reverse: i
			});
			return nu(t, {
				minMag: t.LINEAR,
				format: t.RGB,
				height: 1,
				wrap: t.CLAMP_TO_EDGE
			}, a, r);
		} else if (O(e)) return su(i ? Array.from(e).reverse() : e, t, n, r);
		else throw Error("Unknown scheme: " + a);
	}
}
function au(e, t = "rgb", n, r) {
	let i = cu(Ot(e, H(t) ? t : t.type, H(t) ? void 0 : t.gamma));
	return nu(n, {
		minMag: n.LINEAR,
		format: n.RGB,
		height: 1,
		wrap: n.CLAMP_TO_EDGE
	}, i, r);
}
function ou(e, t, n, r) {
	let i = Math.max(e.length, n || 0), a = new Float32Array(i);
	for (let t = 0; t < i; t++) a[t] = e[t % e.length];
	return nu(t, {
		minMag: t.NEAREST,
		format: t.RED,
		internalFormat: t.R32F,
		height: 1
	}, a, r);
}
function su(e, t, n, r) {
	let i = lu(e, n);
	return nu(t, {
		minMag: t.NEAREST,
		format: t.RGB,
		height: 1
	}, i, r);
}
function cu(e, { extent: t = [0, 1], reverse: n = !1, count: r = 256 } = {}) {
	let i = t[0], a = wt(t) - i, o = _e(r).map((e) => e / (r - 1)).map((e) => i + e / a).map(e);
	return n && o.reverse(), lu(o);
}
function lu(e, t) {
	let n = Math.max(e.length, t || 0), r = new Uint8Array(n * 3);
	for (let t = 0; t < n; t++) {
		let n = e[t % e.length], i = qn(n);
		if (!i) throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);
		let a = i.rgb();
		r[t * 3 + 0] = a.r, r[t * 3 + 1] = a.g, r[t * 3 + 2] = a.b;
	}
	return r;
}
function uu(e) {
	let t = qn(e).rgb();
	return [
		t.r,
		t.g,
		t.b
	].map((e) => e / 255);
}
//#endregion
//#region ../core/src/gl/glslScaleGenerator.js
var du = "attr_", fu = "uDomain_", pu = "range_", mu = "accessor_", hu = "scale_", gu = "getScaled_", _u = "uRangeTexture_", vu = "uParam_", yu = "checkSelection_";
function bu(e) {
	let t = e.match(/^(?:(\w+)-)?(\w+)$/);
	if (!t) throw Error("Not a scale type: " + e);
	return {
		family: t[1] || "continuous",
		transform: t[2]
	};
}
function xu(e) {
	return e.type === "quantize" ? e.thresholds() : e.domain();
}
function Su(e) {
	return e.type === "quantize" ? e.range().length : e.type === "threshold" ? e.domain().length + 1 : e.domain().length;
}
function Cu(e, t) {
	return `${mu}${e}_${t}`;
}
function wu(e, t, n) {
	let r;
	if (zt(e)) r = ju(Ut(e)(n));
	else if (H(n)) if (dn(e)) r = Pu(n);
	else throw Error(`String values are not supported on the "${e}" channel: ${n}`);
	else if (qe(n)) r = ju(+!!n);
	else if (n === null) if (dn(e)) r = ju([
		0,
		0,
		0
	]);
	else throw Error(`null value is not supported on the "${e}" chanel.`);
	else r = ju(n);
	let i = Cu(e, t);
	return {
		channel: e,
		accessorGlsl: `
${r.type} ${i}() {
    // Constant value
    return ${r};
}`,
		accessorFunctionName: i
	};
}
function Tu(e, t) {
	let n = "float", r = (e) => e;
	dn(e) ? (n = "vec3", r = (e) => uu(e)) : zt(e) && (r = Ut(e));
	let i = `u${Ku(e)}_${t}`, a = `    // Dynamic value\n    uniform ${n} ${i};`, o = Cu(e, t);
	return {
		channel: e,
		uniformName: i,
		uniformGlsl: a,
		accessorGlsl: `
${n} ${o}() {
    // Dynamic value
    return ${i};
}`,
		accessorFunctionName: o,
		adjuster: r
	};
}
function Eu(e, t, n, r = [e]) {
	let { attributeType: i } = Lu(t, e), a = Gu(r), o = `in highp ${i} ${a};`, s = Cu(e, n);
	return {
		channel: e,
		attributeName: a,
		attributeGlsl: o,
		accessorGlsl: `
${i} ${s}() {
    return ${a};
}`,
		accessorFunctionName: s
	};
}
function Du(e, t, n) {
	let { attributeType: r } = Lu(t, e), i = Gu(e), a = `    uniform highp ${r} ${i};`, o = Cu(e, n);
	return {
		channel: e,
		uniformName: i,
		uniformGlsl: a,
		accessorGlsl: `
${r} ${o}() {
    return ${i};
}`,
		accessorFunctionName: o
	};
}
function Ou(e, t, n) {
	t ??= Wl();
	let r = Ct(e), i = fu + r, a = pu + r, { hp: o, attributeType: s } = Lu(t, e), c = t.domain ? Vt(t.type) ? xu(t).length : t.domain().length : void 0, l, u = [];
	u.push(""), u.push("/".repeat(70)), u.push(`// Channel: ${e}`), u.push("");
	let { transform: d } = bu(t.type), f = (e, ...t) => Iu.apply(null, [
		e,
		"value",
		...t
	]), p;
	switch (d) {
		case "linear":
			p = f("scaleLinear", "domain", a);
			break;
		case "log":
			p = f("scaleLog", "domain", a, t.base());
			break;
		case "symlog":
			p = f("scaleSymlog", "domain", a, t.constant());
			break;
		case "pow":
		case "sqrt":
			p = f("scalePow", "domain", a, t.exponent());
			break;
		case "index":
		case "locus":
			p = f("scaleBandHp", "domain", a, t.paddingInner(), t.paddingOuter(), t.align(), n.band ?? .5);
			break;
		case "point":
		case "band":
			p = f("scaleBand", "domain", a, t.paddingInner(), t.paddingOuter(), t.align(), n.band ?? .5);
			break;
		case "ordinal":
		case "null":
		case "identity":
			p = f("scaleIdentity");
			break;
		case "threshold":
		case "quantize": break;
		default: throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`);
	}
	let m = qu(t, e), h;
	if (m && e == r) {
		let e = t.props.range ?? [];
		if (v(e) || e.some(v)) {
			if (m.length < 1 || m.length > 4) throw Error(`A range with ExprRefs must have 1-4 elements, not ${m.length}! Range: ${JSON.stringify(m)}`);
			h = `    uniform ${Mu(m.length)} ${a};`;
		} else if (m.length && m.every(E)) {
			let e = Fu(m);
			u.push(`const ${e.type} ${a} = ${e};`);
		}
	}
	let g = Nu(e), _;
	if (dn(e)) {
		let n = _u + r;
		if (e == r && u.push(`uniform sampler2D ${n};`), V(t.type)) _ = `getInterpolatedColor(${n}, transformed)`;
		else if (z(t.type) || Vt(t.type)) _ = `getDiscreteColor(${n}, int(transformed))`;
		else throw Error("Problem with color scale!");
	} else if (t.type === "ordinal" || Vt(t.type)) {
		let t = _u + r;
		e == r && u.push(`uniform sampler2D ${t};`), _ = `getDiscreteColor(${t}, int(transformed)).r`;
	}
	let y = [], b = V(t.type) && c > 2, x = Vt(t.type) || b;
	if (y.push("int slot = 0;"), x) {
		let e = i;
		y.push(b ? `while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }` : `while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`);
	}
	let S = V(t.type) || Vt(t.type) || ["band", "point"].includes(t.type);
	if (p) {
		let e = i;
		S && (o ? y.push(`vec3 domain = ${e};`) : y.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)), y.push(`float transformed = ${p};`), b && y.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`);
	} else y.push("float transformed = float(slot);");
	"clamp" in t && t.clamp() && y.push(`transformed = clampToRange(transformed, ${Fu(m)});`), y.push(`return ${_ ?? "transformed"};`), u.push(`
${g} ${hu}${e}(${s} value) {
${y.map((e) => `    ${e}\n`).join("")}
}`);
	let C = u.join("\n");
	if (S && e == r) {
		let e = V(t.type) || Vt(t.type) ? c : 2;
		l = o ? `    highp vec3 ${i};` : `    mediump float ${i}[${e}];`;
	}
	return {
		glsl: C,
		domainUniformName: i,
		domainUniform: l,
		rangeUniformName: a,
		rangeUniform: h
	};
}
function ku(e, t) {
	let n = Nu(e), r = [], i = [];
	for (let n = 0; n < t.length; n++) {
		let { accessor: a, predicate: o } = t[n], s = Cu(e, n), { param: c, empty: l } = o;
		r.push(c ? `${yu}${c}(${!!l})` : null), i.push(a.scaleChannel ? `return ${hu}${e}(${s}());` : `return ${s}();`);
	}
	return `${n} ${gu}${e}() {
${Ju(r, i)}
}

#define ${e}_DEFINED`;
}
function Au(e) {
	if (!E(e)) throw Error(`Not a number: ${e}`);
	if (e == Infinity) return "3.402823466e+38";
	if (e == -Infinity) return "-3.402823466e+38";
	{
		let t = `${e}`;
		return /^(-)?\d+$/.test(t) && (t += ".0"), t;
	}
}
function ju(e) {
	typeof e == "number" && (e = [e]);
	let t = e.length;
	if (t < 1 || t > 4) throw Error("Invalid number of components: " + t);
	let n = Mu(t), r = `${n}(${e.map(Au).join(", ")})`;
	return Object.assign(r, {
		type: n,
		numComponents: t
	});
}
function Mu(e) {
	switch (e) {
		case 1: return "float";
		case 2: return "vec2";
		case 3: return "vec3";
		case 4: return "vec4";
		default: throw Error("Invalid number of components: " + e);
	}
}
function Nu(e) {
	return dn(e) ? "vec3" : e == "uniqueId" ? "uint" : "float";
}
function Pu(e) {
	return ju(uu(e));
}
function Fu(e) {
	return ju([e[0], wt(e)]);
}
function Iu(e, ...t) {
	let n = [];
	for (let e of t) E(e) ? n.push(Au(e)) : O(e) ? n.push(ju(e)) : n.push(e);
	return `${e}(${n.join(", ")})`;
}
function Lu(e, t) {
	let n = e && z(e.type), r = e && Ru(e.type), i = r && zu(e.domain()), a = i ? {
		attributeType: "uvec2",
		arrayConstructor: Uint32Array
	} : r ? {
		attributeType: "uint",
		arrayConstructor: Uint32Array
	} : n ? {
		attributeType: "uint",
		arrayConstructor: Uint16Array
	} : t == "uniqueId" ? {
		attributeType: "uint",
		arrayConstructor: Uint32Array
	} : {
		attributeType: "float",
		arrayConstructor: Float32Array
	};
	return Object.assign(a, {
		numComponents: +(a.attributeType.match(/^(?:u)?vec([234])$/)?.[1] ?? 1),
		discrete: n,
		hp: r,
		largeHp: i
	});
}
function Ru(e) {
	return e == "index" || e == "locus";
}
function zu(e) {
	return e[1] > 2 ** 32;
}
var Bu = 2 ** 12;
Bu - 1;
function Vu(e, t = []) {
	let n = e % Bu;
	return t[0] = (e - n) / Bu, t[1] = n, t;
}
function Hu(e) {
	let t = e % Bu;
	return [e - t, t];
}
function Uu(e) {
	return [...Hu(e[0]), e[1] - e[0]];
}
function Wu(e) {
	let t = new Hn([], JSON.stringify);
	for (let [n, r] of Object.entries(e)) {
		let e = r.channelDef;
		if (P(e)) {
			let i = [e.field, r.scale ? (V(r.scale.type) || Vt(r.scale.type)) ?? !1 : !1];
			t.set(i, [...t.get(i) ?? [], n]);
		}
	}
	return t;
}
function Gu(e) {
	return du + B(e).toSorted().join("_");
}
function Ku(e) {
	return e[0].toUpperCase() + e.slice(1);
}
var qu = (e, t) => Lt(e.type) || V(e.type) && dn(t) ? [0, 1] : e.range ? e.range() : void 0;
function Ju(e, t) {
	if (e.length != t.length) throw Error("Unequal array lengths");
	let n = e.length;
	if (n == 0) return "";
	if (n == 1 && e[0] == null) return t[0];
	let r = [];
	for (let i = 0; i < n; i++) {
		let a = e[i], o = i == 0 ? `if (${a})` : a == null && i == n - 1 ? "else" : `else if (${a})`;
		r.push(`    ${o} {
        ${t[i]}
    }`);
	}
	return r.join("\n");
}
//#endregion
//#region ../core/src/utils/indexer.js
function Yu() {
	let e = 0, t, n = 0, r = /* @__PURE__ */ new Map(), i = (i) => i === t ? n : (n = r.get(i), n === void 0 && (n = e++, r.set(i, n)), t = i, n);
	return i.addAll = (e) => {
		for (let t of e) i(t);
	}, i.invert = (e) => {
		for (let t of r.entries()) if (t[1] == e) return t[0];
	}, i.domain = () => [...r.keys()], i;
}
//#endregion
//#region ../core/src/gl/vertexRangeIndex.js
var Xu = 2 ** 31 - 1, Zu = -(2 ** 31);
function Qu(e, t, n, i = n, a = 0, o = a) {
	if (o <= a || t[1] <= t[0]) return;
	let s = n === i, c = Array(e);
	c.fill(Xu);
	let l = Array(e);
	l.fill(0);
	let u = t[0], d = (t[1] - t[0]) / e, f = (t, n) => {
		let i = (t - u) / d, a = Math.floor(i);
		return r(n && a == i ? a - 1 : a, 0, e - 1);
	}, p = Zu, m = -Infinity, h = !1, g = (e, t, n = [0, 0]) => {
		let r = f(e, !1), i = f(t, !0), a = c[r], o = Math.max(l[i], a);
		return n[0] = a, n[1] = o, n;
	};
	for (let e = a; e < o;) {
		let t = e, r = n(e), a = i(e);
		for (e += 1; e < o && n(e) === r && i(e) === a;) e += 1;
		if (t > p) p = t;
		else {
			h = !0;
			break;
		}
		if (r < m || !s && a < r) {
			h = !0;
			break;
		}
		m = r;
		let u = f(r, !1), d = s ? u : f(a, !0);
		for (let n = u; n <= d; n++) c[n] > t && (c[n] = t), l[n] < e && (l[n] = e);
	}
	if (h) return;
	for (let e = 1; e < l.length; e++) l[e] < l[e - 1] && (l[e] = l[e - 1]);
	let _ = !0;
	for (let e = c.length - 1; e > 0; e--) _ && c[e] == Xu ? (c[e] = l[e], _ = !1) : c[e - 1] > c[e] && (c[e - 1] = c[e]);
	return g;
}
//#endregion
//#region ../core/src/gl/dataToVertices.js
var $u = class {
	constructor({ encoders: e, numVertices: t = void 0, attributes: n = [] }) {
		this.encoders = e, this.variableEncoders = Object.fromEntries(Object.entries(e).filter(([e, t]) => n.includes(e) && t && !t.constant));
		let r = [...Wu(e).entries()].filter(([e, t]) => e[1] && t.length > 1).map(([e, t]) => t);
		this.allocatedVertices = t, this.variableBuilder = new Ul(t), this.attributeNames = {};
		for (let [e, t] of Object.entries(this.variableEncoders)) {
			let n = ln(t);
			if (!n) continue;
			let i = r.find((t) => t.find((t) => t == e)), a = n.asNumberAccessor(), o = t.scale, { largeHp: s, arrayConstructor: c, discrete: l, numComponents: u } = Lu(o, e), d = [0, 0], f;
			if (o && l) if ("props" in o && o.props.domainIndexer) f = o.props.domainIndexer;
			else if ("domain" in o) f = Yu(), f.addAll(o.domain());
			else throw Error("Missing domain indexer for discrete scale.");
			let p = f ? (e) => f(n(e)) : s ? (e) => Vu(a(e), d) : a, m = Gu(i ?? e);
			for (let t of i ?? [e]) this.attributeNames[t] = m;
			i && e != i[0] || this.variableBuilder.addConverter(m, {
				f: p,
				numComponents: u,
				arrayReference: s ? d : void 0,
				targetArrayType: c
			});
		}
		let i = this.variableEncoders.x, a = this.variableEncoders.x2, o = this.encoders.x?.channelDef, s = i?.scale;
		if (o?.buildIndex && i && s && V(s.type)) {
			let e = this.attributeNames.x;
			if (!e) throw Error("Missing x attribute for x indexing.");
			let t = a?.scale && V(a.scale.type) ? this.attributeNames.x2 ?? e : e;
			this.xIndexConfig = {
				domain: [s.domain()[0], s.domain()[1]],
				xAttributeName: e,
				x2AttributeName: t
			};
		} else this.xIndexConfig = void 0;
		this.lastOffset = 0, this.rangeMap = new Hn([], JSON.stringify);
	}
	registerBatch(e) {
		let t = this.lastOffset, n = this.variableBuilder.vertexCount, r = n - t;
		r && this.rangeMap.set(e, {
			offset: t,
			count: r,
			xIndex: this.createXIndex(t, n)
		}), this.lastOffset = n;
	}
	addBatches(e) {
		for (let [t, n] of e) this.addBatch(t, n);
	}
	addBatch(e, t, n = 0, r = t.length) {
		for (let e = n; e < r; e++) {
			let n = t[e];
			this.variableBuilder.pushFromDatum(n);
		}
		this.registerBatch(e);
	}
	createXIndex(e, t) {
		let n = this.xIndexConfig;
		if (!n) return;
		let r = (e) => {
			let { data: t, numComponents: n } = this.variableBuilder.arrays[e];
			return n == 2 ? (e) => {
				let r = e * n;
				return t[r] * Bu + t[r + 1];
			} : (e) => t[e * n];
		}, i = r(n.xAttributeName), a = n.x2AttributeName == n.xAttributeName ? i : r(n.x2AttributeName);
		return Qu(50, n.domain, i, a, e, t);
	}
	toArrays() {
		return {
			arrays: this.variableBuilder.arrays,
			vertexCount: this.variableBuilder.vertexCount,
			allocatedVertices: this.allocatedVertices,
			rangeMap: this.rangeMap
		};
	}
}, ed = class extends $u {
	constructor({ encoders: e, attributes: t, numItems: n }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: n * 6
		}), this.variableBuilder.configure();
		let r = this.variableBuilder.pushAll;
		this.pushAllSixTimes = n > 500 ? Function("pushAll", "return function unrolledPushAllSixTimes() {\n  pushAll(); pushAll(); pushAll(); pushAll(); pushAll(); pushAll();\n};")(r) : function() {
			r(), r(), r(), r(), r(), r();
		};
	}
	addBatch(e, t, n = 0, r = t.length) {
		if (!(r <= n)) {
			for (let e = n; e < r; e++) {
				let n = t[e];
				this.variableBuilder.updateFromDatum(n), this.pushAllSixTimes();
			}
			this.registerBatch(e);
		}
	}
}, td = class extends $u {
	constructor({ encoders: e, attributes: t, tessellationThreshold: n = Infinity, visibleRange: r = [-Infinity, Infinity], numItems: i }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: n == Infinity ? i * 6 : void 0
		}), this.visibleRange = r, this.tessellationThreshold = n || Infinity, this.updateSide = this.variableBuilder.createUpdater("side", 1), this.updatePos = this.variableBuilder.createUpdater("pos", 1), this.variableBuilder.configure();
	}
	addBatch(e, t, n = 0, r = t.length) {
		for (let e = n; e < r; e++) {
			let n = t[e];
			this.variableBuilder.updateFromDatum(n), this.updateSide(-.5), this.updatePos(0), this.variableBuilder.pushAll();
			for (let e = 0; e <= 1; e++) this.updatePos(e / 1), this.updateSide(-.5), this.variableBuilder.pushAll(), this.updateSide(.5), this.variableBuilder.pushAll();
			this.variableBuilder.pushAll();
		}
		this.registerBatch(e);
	}
}, nd = class extends $u {
	constructor({ encoders: e, attributes: t, numItems: n = void 0 }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: n
		}), this.variableBuilder.configure();
	}
	addBatch(e, t, n = 0, r = t.length) {
		for (let e = n; e < r; e++) {
			let n = t[e];
			this.variableBuilder.pushFromDatum(n);
		}
		this.registerBatch(e);
	}
}, rd = class extends $u {
	constructor({ encoders: e, attributes: t, numItems: n = void 0 }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: n
		}), this.variableBuilder.configure();
	}
	addBatch(e, t, n = 0, r = t.length) {
		for (let e = n; e < r; e++) {
			let n = t[e];
			this.variableBuilder.pushFromDatum(n);
		}
		this.registerBatch(e);
	}
	toArrays() {
		let e = this.variableBuilder.arrays;
		for (let t of Object.values(e)) t.divisor = 1;
		return super.toArrays();
	}
}, id = class extends $u {
	constructor({ encoders: e, attributes: t, fontMetrics: n, properties: r, numCharacters: i = void 0 }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: i * 6
		}), this.metadata = n, this.metrics = n, this.properties = r;
		let a = e.text.channelDef;
		this.numberFormat = !f(a) && "format" in a && a.format ? L(a.format) : (e) => e, this.updateVertexCoord = this.variableBuilder.createUpdater("vertexCoord", 2), this.updateTextureCoord = this.variableBuilder.createUpdater("textureCoord", 2), this.updateWidth = this.variableBuilder.createUpdater("width", 1), this.variableBuilder.configure();
	}
	addBatch(e, t, n = 0, r = t.length) {
		let i = this.properties.align || "left", a = this.properties.logoLetters ?? !1, o = this.metadata.common.base, s = this.metadata.common.scaleH, c = -5;
		switch (this.properties.baseline) {
			case "top":
				c += this.metrics.capHeight;
				break;
			case "middle":
				c += this.metrics.capHeight / 2;
				break;
			case "bottom":
				c -= this.metrics.descent;
				break;
			default:
		}
		let l = this.encoders.text, u = [0, 0];
		this.updateVertexCoord(u);
		let d = [0, 0];
		this.updateTextureCoord(d);
		for (let e = n; e < r; e++) {
			let n = t[e], r = this.numberFormat(l(n)), f = H(r) ? r : r === null ? "" : "" + r;
			if (f.length == 0) continue;
			this.variableBuilder.updateFromDatum(n);
			let p = a ? f.length : this.metrics.measureWidth(f);
			this.updateWidth(p);
			let m = i == "right" ? -p : i == "center" ? -p / 2 : 0;
			if (!a) {
				let e = this.metrics.getCharByCode(f.charCodeAt(0));
				m -= (e.width - e.xadvance) / o / 2;
			}
			let h, g, _;
			for (let e = 0; e < f.length; e++) {
				let t = this.metrics.getCharByCode(f.charCodeAt(e)), n = a ? 1 : t.xadvance / o;
				if (t.id == 32) {
					m += n;
					continue;
				}
				a ? (_ = (t.width + 10) / t.width, m = -_ / 2, g = (t.height + 10) / t.height, h = -.5 - 5 / t.height) : (g = t.height / o, h = -(t.height + t.yoffset + c) / o, _ = t.width / o);
				let r = t.x, i = t.y;
				u[0] = m, u[1] = h + g, d[0] = r / s, d[1] = i / s, this.variableBuilder.pushAll(), u[0] = m + _, u[1] = h + g, d[0] = (r + t.width) / s, d[1] = i / s, this.variableBuilder.pushAll(), u[0] = m, u[1] = h, d[0] = r / s, d[1] = (i + t.height) / s, this.variableBuilder.pushAll(), u[0] = m + _, u[1] = h + g, d[0] = (r + t.width) / s, d[1] = i / s, this.variableBuilder.pushAll(), u[0] = m, u[1] = h, d[0] = r / s, d[1] = (i + t.height) / s, this.variableBuilder.pushAll(), u[0] = m + _, u[1] = h, d[0] = (r + t.width) / s, d[1] = (i + t.height) / s, this.variableBuilder.pushAll(), m += n;
			}
		}
		this.registerBatch(e);
	}
}, ad = "#define PI 3.141593\n\nuniform View {\n    /** Offset in \"unit\" units */\n    mediump vec2 uViewOffset;\n    mediump vec2 uViewScale;\n    /** Size of the logical viewport in pixels, i.e., the view */\n    mediump vec2 uViewportSize;\n    mediump vec4 uLogicalVisibleRect;\n    lowp vec2 uCullByVisibleRange;\n    lowp float uDevicePixelRatio;\n    // TODO: Views with opacity less than 1.0 should be rendered into a texture\n    // that is rendered with the specified opacity.\n    lowp float uViewOpacity;\n    bool uPickingEnabled;\n};\n\n\n/**\n * Maps a coordinate on the unit scale to a normalized device coordinate.\n * (0, 0) is at the bottom left corner.\n */\nvec4 unitToNdc(vec2 coord) {\n    return vec4((coord * uViewScale + uViewOffset) * 2.0 - 1.0, 0.0, 1.0);\n}\n\nvec4 unitToNdc(float x, float y) {\n    return unitToNdc(vec2(x, y));\n}\n\nvec4 pixelsToNdc(vec2 coord) {\n    return unitToNdc(coord / uViewportSize);\n}\n\nvec4 pixelsToNdc(float x, float y) {\n    return pixelsToNdc(vec2(x, y));\n}\n\n/** Applies logical pixel offsets to a position in unit coordinates. */\nvec2 applyOffset(vec2 pos, vec2 offset) {\n    return pos + vec2(offset.x, -offset.y) / uViewportSize;\n}\n\nbool isOutsideVisibleRange(vec2 pos) {\n    return (uCullByVisibleRange.x > 0.5 &&\n                (pos.x < uLogicalVisibleRect.x ||\n                 pos.x > uLogicalVisibleRect.z)) ||\n           (uCullByVisibleRange.y > 0.5 &&\n                (pos.y < uLogicalVisibleRect.y ||\n                 pos.y > uLogicalVisibleRect.w));\n}\n\nfloat linearstep(float edge0, float edge1, float x) {\n    return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);\n}\n\nconst highp uint HASH_EMPTY_KEY = 0xffffffffu;\n\nhighp uint hash32(highp uint key) {\n    highp uint v = key;\n    v ^= v >> 16u;\n    v *= 0x7feb352du;\n    v ^= v >> 15u;\n    v *= 0x846ca68bu;\n    v ^= v >> 16u;\n    return v;\n}\n\nbool isEmptyHashTexture(highp usampler2D s) {\n    // Empty selections are encoded as a single empty hash slot.\n    ivec2 texSize = textureSize(s, 0);\n    return texSize.x == 1 && texSize.y == 1 && texelFetch(s, ivec2(0, 0), 0).r == HASH_EMPTY_KEY;\n}\n\nbool hashContainsTexture(highp usampler2D s, highp uint value) {\n    ivec2 texSize = textureSize(s, 0);\n    highp uint width = uint(texSize.x);\n    highp uint size = width * uint(texSize.y);\n    highp uint mask = size - 1u;\n    highp uint index = hash32(value) & mask;\n\n    for (highp uint probe = 0u; probe < size; probe += 1u) {\n        ivec2 coord = ivec2(int(index % width), int(index / width));\n        highp uint entry = texelFetch(s, coord, 0).r;\n        if (entry == value) {\n            return true;\n        }\n        if (entry == HASH_EMPTY_KEY) {\n            return false;\n        }\n        index = (index + 1u) & mask;\n    }\n\n    return false;\n}\n\n/**\n * Calculates a gamma for antialiasing opacity based on the color.\n */\nfloat getGammaForColor(vec3 rgb) {\n    return mix(\n        1.25,\n        0.75,\n        // RGB should be linearized but this is good enough for now\n        smoothstep(0.0, 1.0, dot(rgb, vec3(0.299, 0.587, 0.114))));\n}\n\n// Fragment shader stuff ////////////////////////////////////////////////////////\n\n// TODO: include the following only in fragment shaders\n\n/**\n * Specialized linearstep for doing antialiasing\n */\nfloat distanceToRatio(float d) {\n	return clamp(d * uDevicePixelRatio + 0.5, 0.0, 1.0);\n}\n\nvec4 distanceToColor(float d, vec4 fill, vec4 stroke, vec4 background, float halfStrokeWidth) {\n    if (halfStrokeWidth > 0.0) {\n        // Distance to stroke's edge. Negative inside the stroke.\n        float sd = abs(d) - halfStrokeWidth;\n        return mix(\n            stroke,\n            d <= 0.0 ? fill : background,\n            distanceToRatio(sd));\n    } else {\n        return mix(background, fill, distanceToRatio(-d));\n    }\n}\n", od = "uniform highp float uZero;\n\n// Utils ------------\n\nvec3 getDiscreteColor(sampler2D s, int index) {\n    return texelFetch(s, ivec2(index % textureSize(s, 0).x, 0), 0).rgb;\n}\n\nvec3 getInterpolatedColor(sampler2D s, float unitValue) {\n    return texture(s, vec2(unitValue, 0.0)).rgb;\n}\n\nfloat clampToRange(float value, vec2 range) {\n    return clamp(value, min(range[0], range[1]), max(range[0], range[1]));\n}\n\n// Scales ------------\n// Based on d3 scales: https://github.com/d3/d3-scale\n\nfloat scaleIdentity(float value) {\n    return value;\n}\n\nfloat scaleIdentity(uint value) {\n    return float(value);\n}\n\nfloat scaleLinear(float value, vec2 domain, vec2 range) {\n    float domainSpan = domain[1] - domain[0];\n    float rangeSpan = range[1] - range[0];\n    return (value - domain[0]) / domainSpan * rangeSpan + range[0];\n}\n\nfloat scaleLog(float value, vec2 domain, vec2 range, float base) {\n    // y = m log(x) + b \n    // TODO: Perf optimization: precalculate log domain in js.\n    // TODO: Reversed domain, etc\n    return scaleLinear(log(value) / log(base), log(domain) / log(base), range);\n}\n\nfloat symlog(float value, float constant) {\n    // WARNING: emulating log1p with log(x + 1). Small numbers are likely to\n    // have significant precision problems.\n    return sign(value) * log(abs(value / constant) + 1.0);\n}\n\nfloat scaleSymlog(float value, vec2 domain, vec2 range, float constant) {\n    return scaleLinear(\n        symlog(value, constant),\n        vec2(symlog(domain[0], constant), symlog(domain[1], constant)),\n        range\n    );\n}\n\nfloat scalePow(float value, vec2 domain, vec2 range, float exponent) {\n    // y = mx^k + b\n    // TODO: Perf optimization: precalculate pow domain in js.\n    // TODO: Reversed domain, etc\n    return scaleLinear(\n        pow(abs(value), exponent) * sign(value),\n        pow(abs(domain), vec2(exponent)) * sign(domain),\n        range\n    );\n}\n\n// TODO: scaleThreshold\n// TODO: scaleQuantile (special case of threshold scale)\n\n// TODO: domainExtent should be uint\nfloat scaleBand(uint value, vec2 domainExtent, vec2 range,\n                float paddingInner, float paddingOuter,\n                float align, float band) {\n\n    // TODO: reverse\n    float start = range[0];\n    float stop = range[1];\n    float rangeSpan = stop - start;\n\n    float n = domainExtent[1] - domainExtent[0];\n\n    // This fix departs from Vega and d3: https://github.com/vega/vega/issues/3357#issuecomment-1063253596\n    paddingInner = int(n) > 1 ? paddingInner : 0.0;\n\n    // Adapted from: https://github.com/d3/d3-scale/blob/master/src/band.js\n    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);\n    start += (rangeSpan - step * (n - paddingInner)) * align;\n    float bandwidth = step * (1.0 - paddingInner);\n\n    return start + (float(value) - domainExtent[0]) * step + bandwidth * band;\n}\n\nconst int lowBits = 12;\nconst float lowDivisor = pow(2.0, float(lowBits));\nconst uint lowMask = uint(lowDivisor - 1.0);\n\nvec2 splitUint(uint value) {\n    uint valueLo = value & lowMask;\n    uint valueHi = value - valueLo;\n    return vec2(float(valueHi), float(valueLo));\n}\n\n/**\n * High precision variant of scaleBand for index/locus scales\n */\nfloat scaleBandHp(uint value, vec3 domainExtent, vec2 range,\n                 float paddingInner, float paddingOuter,\n                 float align, float band) {\n\n    // TODO: reverse\n    float start = range[0];\n    float stop = range[1];\n    float rangeSpan = stop - start;\n\n    vec2 domainStart = domainExtent.xy;\n    float n = domainExtent[2];\n\n    // The following computation is identical for every vertex. Could be done on the JS side.\n    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);\n    start += (rangeSpan - step * (n - paddingInner)) * align;\n    float bandwidth = step * (1.0 - paddingInner);\n\n    // Split into to values with each having a reduced number of significant digits\n    // to mitigate the lack of precision in float32 calculations.\n    vec2 splitValue = splitUint(value);\n\n    // Using max to prevent the shader compiler from wrecking the precision.\n    // Othwewise the compiler could optimize the sum of the four terms into\n    // some equivalent form that does premature rounding.\n    float inf = 1.0 / uZero;\n    float hi = max(splitValue[0] - domainStart[0], -inf);\n    float lo = max(splitValue[1] - domainStart[1], -inf);\n\n    return dot(vec4(start, hi, lo, bandwidth), vec4(1.0, step, step, band));\n}\n\n/**\n * High precision variant of scaleBand for index/locus scales for large\n * domains where 32bit uints are not sufficient to represent the domain.\n */\nfloat scaleBandHp(uvec2 value, vec3 domainExtent, vec2 range,\n                 float paddingInner, float paddingOuter,\n                 float align, float band) {\n\n    // TODO: reverse\n    float start = range[0];\n    float stop = range[1];\n    float rangeSpan = stop - start;\n\n    vec2 domainStart = domainExtent.xy;\n    float n = domainExtent[2];\n\n    // The following computation is identical for every vertex. Could be done on the JS side.\n    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);\n    start += (rangeSpan - step * (n - paddingInner)) * align;\n    float bandwidth = step * (1.0 - paddingInner);\n\n    // Split into to values with each having a reduced number of significant digits\n    // to mitigate the lack of precision in float32 calculations.\n    vec2 splitValue = vec2(float(value[0]) * lowDivisor, float(value[1]));\n\n    // Using max to prevent the shader compiler from wrecking the precision.\n    // Othwewise the compiler could optimize the sum of the four terms into\n    // some equivalent form that does premature rounding.\n    float inf = 1.0 / uZero;\n    float hi = max(splitValue[0] - domainStart[0], -inf);\n    float lo = max(splitValue[1] - domainStart[1], -inf);\n\n    return dot(vec4(start, hi, lo, bandwidth), vec4(1.0, step, step, band));\n}\n", sd = "\n/** Describes where a sample facet should be shown. */\nstruct SampleFacetPosition {\n    float pos;\n    float height;\n};\n\n// ----------------------------------------------------------------------------\n\n#if !defined(SAMPLE_FACET_UNIFORM) && !defined(SAMPLE_FACET_TEXTURE)\n\nSampleFacetPosition getSampleFacetPos() {\n    return SampleFacetPosition(0.0, 1.0);\n}\n\n#elif defined(SAMPLE_FACET_UNIFORM)\n\n/**\n * Location and height of the band on the Y axis on a normalized [0, 1] scale.\n * Elements: position, height\n */\nuniform vec2 uSampleFacet;\n\nSampleFacetPosition getSampleFacetPos() {\n    return SampleFacetPosition(\n        1.0 - uSampleFacet.x - uSampleFacet.y,\n        uSampleFacet.y\n    );\n}\n\n#elif defined(SAMPLE_FACET_TEXTURE)\n\nuniform sampler2D uSampleFacetTexture;\n\nSampleFacetPosition getSampleFacetPos() {\n    vec2 texel = texelFetch(\n        uSampleFacetTexture,\n        ivec2(int(attr_facetIndex), 0),\n        0\n    ).rg;\n    return SampleFacetPosition(\n        1.0 - texel.x - texel.y,\n        texel.y\n    );\n}\n\n#endif\n\nvec2 applySampleFacet(vec2 pos) {\n    SampleFacetPosition facetPos = getSampleFacetPos();\n    return vec2(pos.x, facetPos.pos + pos.y * facetPos.height);\n}\n", cd = "/*\n * Based on concepts presented at:\n * https://webglfundamentals.org/webgl/lessons/webgl-picking.html\n * https://deck.gl/docs/developer-guide/custom-layers/picking\n */\n\nout highp vec4 vPickingColor;\n\n/**\n * Passes the unique id to the fragment shader as a color if picking is enabled.\n * Returns true if picking is enabled.\n */\nbool setupPicking() {\n    if (uPickingEnabled) {\n#ifdef uniqueId_DEFINED\n        uint id = attr_uniqueId;\n        vPickingColor = vec4(\n            ivec4(id >> 0, id >> 8, id >> 16, id >> 24) & 0xFF\n        ) / float(0xFF);\n#else\n        vPickingColor = vec4(1.0);\n#endif\n        return true;\n    }\n    return false;\n}\n", ld = "in highp vec4 vPickingColor;\n", ud = .5;
//#endregion
//#region ../core/src/utils/propertyCoalescer.js
function dd(...e) {
	return new Proxy({}, {
		get(t, n, r) {
			for (let t of e) {
				let e = t()[n];
				if (e !== void 0) return e;
			}
		},
		has(t, n, r) {
			for (let t of e) if (n in t()) return !0;
			return !1;
		}
	});
}
//#endregion
//#region ../core/src/utils/variableTools.js
function fd(e) {
	return H(e) || E(e) || qe(e);
}
//#endregion
//#region ../core/src/config/styleUtils.js
function pd(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function md(e, t) {
	let n = pd(t);
	return d(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region ../core/src/config/markConfig.js
function hd(e, t, n) {
	let r = [t, ...pd(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return d([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region ../core/src/marks/markUtils.js
function gd(e) {
	for (let t of ["x", "y"]) {
		let n = Qt(t), r = e[t], i = e[n];
		if (r && i && f(r) && !on(r) && on(i)) throw Error(`Cannot combine encoding.${t}.value with scale-backed encoding.${n}. Use encoding.${t}.datum for a constant data-domain endpoint, or use encoding.${n}.value for a visual-domain endpoint.`);
	}
}
function _d(e, t, n = !1) {
	let r = Qt(t), i = e[t] && { ...e[t] }, a = e[r] && { ...e[r] };
	if (!(f(i) || f(a))) {
		if (i) {
			if (!Sn(e[t])) return;
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
function vd(e, t) {
	let n = Qt(t), r = e[t], i = e[n];
	if (!r || !i || f(r) || f(i) || !Sn(r) || !Sn(i) || !["index", "locus"].includes(r.type)) return;
	let a = r.band, o = i.band, s = a ?? o ?? 0;
	e[t] = {
		...r,
		band: s
	}, e[n] = {
		...i,
		band: o ?? s
	};
}
function yd(e, t) {
	let n = on(e);
	n && (n.resolutionChannel = t);
}
function bd(e, t) {
	e.stroke || (t ? e.stroke = { value: null } : (e.stroke = structuredClone(e.color), yd(e.stroke, "color"))), f(e.stroke) && e.stroke.value === null && (e.strokeWidth = { value: 0 }), e.strokeOpacity || (e.strokeOpacity = structuredClone(e.opacity), yd(e.strokeOpacity, "opacity"));
}
function xd(e, t) {
	f(e.fill) && e.fill.value === null ? e.fillOpacity = { value: 0 } : e.fill || (e.fill = structuredClone(e.color), yd(e.fill, "color"), !t && !e.fillOpacity && (e.fillOpacity = { value: 0 })), e.fillOpacity || (t ? (e.fillOpacity = structuredClone(e.opacity), yd(e.fillOpacity, "opacity")) : e.fillOpacity = { value: 0 });
}
//#endregion
//#region ../core/src/marks/mark.js
var Sd = "SAMPLE_FACET_UNIFORM", Cd = "SAMPLE_FACET_TEXTURE", wd = "uSelectionTexture_";
function Td(e) {
	let t = 0;
	for (let n of [
		"xOffset",
		"x2Offset",
		"dx"
	]) {
		let r = e[n];
		if (r) if (r.constant) {
			let e = r({});
			if (!Number.isFinite(e)) return;
			t = Math.max(t, Math.abs(e));
		} else if (r.scale && r.scale.type !== "null") {
			let e = r.scale.range();
			if (!e.every((e) => Number.isFinite(e))) return;
			t = Math.max(t, ...e.map((e) => Math.abs(e)));
		} else return;
	}
	return t;
}
var Ed = class {
	#e = [];
	constructor(e) {
		this.unitView = e;
		let t = this;
		this.encoders = void 0, this.bufferInfo = void 0, this.bytesPerElement = /* @__PURE__ */ new Map(), this.programInfo = void 0, this.vertexArrayInfo = void 0, this.viewUniformInfo = void 0, this.markUniformInfo = void 0, this.markUniformsAltered = !0, this.selectionTextureOps = [], this.rangeMap = new Dd();
		let n = hd(this.unitView.getConfigScopes(), this.unitView.getMarkType(), typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark.style : void 0);
		this.defaultProperties = {
			get clip() {
				return Xt(t, "defaultClip", () => {
					let t = e.getScaleResolution("x")?.isZoomable(), n = e.getScaleResolution("y")?.isZoomable();
					return t && n ? !0 : t ? "x" : n ? "y" : !1;
				});
			},
			xOffset: 0,
			yOffset: 0,
			minBufferSize: 0,
			...n
		}, this.properties = dd(typeof this.unitView.spec.mark == "object" ? () => this.unitView.spec.mark : () => ({}), () => this.defaultProperties), this.setupExprRefsNeedingGraphicsUpdate([
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset"
		]);
	}
	augmentDefaultProperties(e) {
		Object.defineProperties(this.defaultProperties, Object.getOwnPropertyDescriptors(e));
	}
	getCursorSpec() {
		return this.properties.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return v(e) ? this.unitView.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		v(n) && this.unitView.paramRuntime.watchExpression(n.expr, e, {
			scopeOwned: !1,
			registerDisposer: t
		});
	}
	get opaque() {
		return !1;
	}
	get defaultHitTestMode() {
		return "intersects";
	}
	getAttributes() {
		throw Error("Not implemented!");
	}
	getSupportedChannels() {
		return [
			"sample",
			"facetIndex",
			"x",
			"y",
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset",
			"color",
			"opacity",
			"search",
			"tooltip",
			"uniqueId"
		];
	}
	getDefaultEncoding() {
		let e = {
			sample: void 0,
			uniqueId: void 0,
			xOffset: { value: 0 },
			yOffset: { value: 0 }
		};
		return this.isPickingParticipant() && (e.uniqueId = { field: qt }), e;
	}
	fixEncoding(e) {
		return e;
	}
	getOffsetBand(e) {
		return .5;
	}
	setupExprRefsNeedingGraphicsUpdate(e) {
		let t = this.getSupportedChannels(), n = {};
		for (let r of e) {
			let e = this.properties[r];
			if (e && v(e)) {
				let i = this.unitView.paramRuntime.watchExpression(e.expr, () => {
					this.unitView.getCollector()?.completed && (this.updateGraphicsData(), this.unitView.context.animator.requestRender());
				});
				t.includes(r) || Object.defineProperty(n, r, { get() {
					return i();
				} });
			}
		}
		let r = this.properties;
		this.properties = dd(() => n, () => r);
	}
	get encoding() {
		return Xt(this, "encoding", () => {
			let e = this.getDefaultEncoding(), t = this.unitView.getEncoding(), n = (e) => {
				let t = this.properties[e];
				return fd(t) || v(t) ? { value: t } : void 0;
			}, r = Object.fromEntries(this.getSupportedChannels().map((e) => [e, n(e)]).filter((e) => f(e[1]))), i = this.fixEncoding({
				...e,
				...r,
				...t
			}), a = i, o = (e, t) => {
				let n = structuredClone(e), r = on(n);
				if (!r) throw Error("Cannot add scale properties to an unscaled channel definition.");
				return Object.assign(r, t), n;
			};
			for (let e of ["x", "y"]) {
				let n = e == "x" ? "x2" : "y2", i = e + "Offset", s = n + "Offset", c = a[i];
				if (En(c)) {
					let t = a[e], n = t && on(t), r = n;
					n && r && n.type != "quantitative" && r.band == null && (a[e] = o(t, { band: 0 })), on(c).band ?? (a[i] = o(c, { band: this.getOffsetBand(i) }));
				}
				let l = Ue(a[i], r[s], t[n] != null);
				if (typeof l == "number") a[s] = { value: l };
				else if (l && on(l)) {
					let e = { resolutionChannel: i };
					En(l) && (e.band = this.getOffsetBand(s)), a[s] = o(l, e);
				} else a[s] = l;
			}
			for (let e of Object.keys(i)) this.getSupportedChannels().includes(e) || delete i[e];
			return gd(i), i.x && (i.x.buildIndex ??= this.properties.buildIndex ?? !0), i;
		});
	}
	getContext() {
		return this.unitView.context;
	}
	getType() {
		return this.unitView.getMarkType();
	}
	initializeData() {}
	initializeEncoders() {
		this.encoders = yn(this.unitView, this.encoding);
	}
	async initializeGraphics() {}
	updateGraphicsData() {}
	getSampleFacetMode() {
		if (this.encoders.facetIndex) return Cd;
		if (this.unitView.getLayoutAncestors().find((e) => "samples" in e.spec)) return Sd;
	}
	createAndLinkShaders(e, t, n = []) {
		let r = this.getAttributes(), i = this.encoders, a = this.getSampleFacetMode(), o = !!this.properties.cullByVisibleRange;
		a && n.push(`#define ${a}`), o && n.push("#define VISIBLE_RANGE_CULLING");
		let s = "// view: " + this.unitView.getPathString(), c = [], l = /* @__PURE__ */ new Set(), u = Wu(i), d = [], p = Object.values(i).flatMap((e) => e.branches ?? []).map((e) => e.predicate).filter((e) => e.param), m = /* @__PURE__ */ new Map();
		for (let e of p) {
			let t = e.param, n = this.unitView.paramRuntime, r = n.findValue(t);
			if (!r) throw Error(`Cannot infer selection type as the parameter "${t}" has no value. Please ensure that the parameter is properly defined!`);
			let i = Gu("uniqueId");
			if (D(r)) {
				if (!m.has(t)) {
					m.set(t, "single");
					let e = vu + ve(t);
					d.push("    // Selection parameter"), d.push(`    uniform highp uint ${e};`), this.#e.push(() => {
						this.registerMarkUniformValue(e, { expr: t }, (e) => e.uniqueId ?? 0);
					}), c.push(`bool ${yu}${t}(bool empty) {\n    return ${vu}${t} == ${i} || (empty && ${vu}${t} == 0u);\n}`);
				}
			} else if (Ye(r)) {
				if (!m.has(t)) {
					m.set(t, "multi");
					let e = wd + ve(t);
					c.push(`// Selection texture\nuniform highp usampler2D ${e};`);
					let a = this.getContext().glHelper, o = a.selectionTextures;
					this.selectionTextureOps.push(() => {
						let r = n.getValue(t), i = o.get(r);
						if (!i) throw Error(`Bug: no selection texture found for "${t}"!`);
						hr(this.programInfo, { [e]: i });
					});
					let s = wd + t;
					c.push(`bool ${yu}${t}(bool empty) {\n   return hashContainsTexture(${s}, ${i}) || (empty && isEmptyHashTexture(${s}));\n}`), a.createSelectionTexture(r), n.watchExpression(t, () => {
						let e = n.getValue(t);
						a.createSelectionTexture(e), this.getContext().animator.requestRender();
					});
				}
			} else if ($e(r) && !m.has(t)) {
				m.set(t, "interval");
				let e = [], n = [];
				for (let i of Object.keys(r.intervals)) {
					if (!["x", "y"].includes(i)) continue;
					let r = vu + ve(t) + `_${i}`, { attributeType: a } = Lu(this.unitView.getScaleResolution(i).getScale(), i);
					d.push("    // Selection parameter"), d.push(`    uniform highp ${a}[2] ${r};`), this.#e.push(() => {
						this.registerMarkUniformValue(r, { expr: t }, (e) => e.intervals[i] ?? [1, 0]);
					});
					let o = (e) => {
						for (let [t, n] of u.entries()) if (t[1] && n.includes(e)) return Gu(n);
						return Gu(e);
					}, s = o(i), c = r + "[0]", l = r + "[1]", f = Qt(i);
					if (this.encoding[f]) {
						let t = o(f), n = this.defaultHitTestMode;
						if (n == "endpoints") e.push(`((${c} <= ${s} && ${s} <= ${l}) || (${c} <= ${t} && ${t} <= ${l}))`);
						else if (n == "encloses") e.push(`(${c} <= ${s} && ${t} <= ${l})`);
						else if (n == "intersects") e.push(`(${c} <= ${t} && ${s} <= ${l})`);
						else throw new He(`Unsupported hit test mode "${n}" for interval selection!`, this.unitView);
					} else e.push(`(${c} <= ${s} && ${s} <= ${l})`);
					n.push(`${c} > ${l}`);
				}
				c.push(`bool ${yu}${t}(bool empty) {\n    return ${e.join(" && ")} || (empty && (${n.join(" || ")}));\n}`);
			}
		}
		let h = (e, t, n, r) => {
			let i = t.channelDef;
			if (f(i)) if (v(i.value)) {
				let { uniformName: t, uniformGlsl: r, accessorGlsl: a, adjuster: o } = Tu(e, n);
				c.push(a), d.push(r), this.#e.push(() => {
					this.registerMarkUniformValue(t, i.value, o);
				});
			} else c.push(wu(e, n, i.value).accessorGlsl);
			else if (nn(i)) {
				let { uniformName: t, uniformGlsl: a, accessorGlsl: o } = Du(e, r, n);
				d.push(a), c.push(o);
				let { largeHp: s, discrete: l } = Lu(r, e), u = l && "domain" in r ? (e) => r.domain().indexOf(e) : s ? Vu : (e) => +e;
				this.#e.push(() => {
					this.registerMarkUniformValue(t, i.datum, u);
				});
			} else if (P(i)) {
				let t = u.get([i.field, !0]), { attributeGlsl: a, accessorGlsl: o } = Eu(e, r, n, t?.includes(e) ? t : void 0);
				l.add(a), c.push(o);
			} else if (Ft(i)) {
				let { attributeGlsl: t, accessorGlsl: i } = Eu(e, r, n);
				l.add(t), c.push(i);
			} else throw new He(`Unsupported channel definition: ${JSON.stringify(i)}`, this.unitView);
		};
		for (let [e, t] of Object.entries(i)) {
			if (!r.includes(e)) continue;
			let { branches: n, channelDef: i, scale: a } = t;
			for (let t = 0; t < n.length; t++) h(e, n[t].accessor, t, a);
			if (a) {
				let t = on(i), n = t && t.resolutionChannel || e, r = Et(n) ? this.unitView.getScaleResolution(n) : null, { glsl: o, domainUniform: s, domainUniformName: l, rangeUniform: u, rangeUniformName: f } = Ou(e, a, i);
				c.push(o), d.push(s), d.push(u), u && this.#e.push(() => {
					let t = this.createMarkUniformSetter(f), n = () => t(qu(a, e));
					r.addEventListener("range", n), n();
				}), s && this.#e.push(() => {
					let e = this.createMarkUniformSetter(l), t = () => {
						let t;
						t = z(a.type) ? [0, a.domain().length] : Vt(a.type) ? xu(a) : a.domain(), e(Ru(a.type) ? Uu(t) : t);
					};
					r.addEventListener("domain", t), t();
				});
			}
			c.push(ku(e, n));
		}
		let g = [...m.keys()].map((e) => `${yu}${e}(false)`);
		c.push("bool isPointSelected() {\n" + (this.encoders.uniqueId && g.length > 0 ? `    return ${g.join(" || ")};` : "    return false;") + "\n}");
		let _ = "precision highp float;\nprecision highp int;", y = (e) => e.replace("#pragma markUniforms", d.join("\n"));
		n = n.map(y), e = y(e), t = y(t);
		let b = [
			_,
			s,
			...n,
			ad,
			od,
			[...l].join("\n"),
			...c,
			sd,
			cd,
			e
		], x = [
			_,
			s,
			...n,
			ad,
			ld,
			t
		], S = this.gl;
		this.programStatus = tu(S, this.glHelper.compileShader(S.VERTEX_SHADER, b), this.glHelper.compileShader(S.FRAGMENT_SHADER, x));
	}
	finalizeGraphicsInitialization() {
		if (this.programInfo) return;
		if (!this.programStatus) throw Error("No program status found! " + this.unitView.getPathString());
		let e = this.programStatus.getProgramErrors();
		if (e) {
			e.detail && console.warn(e.detail);
			let t = /* @__PURE__ */ Error("Cannot create shader program: " + e.message);
			throw t.view = this.unitView, t;
		}
		this.programInfo = $n(this.gl, this.programStatus.program), delete this.programStatus, this.viewUniformInfo = pr(this.gl, this.programInfo, "View"), this.markUniformInfo = pr(this.gl, this.programInfo, "Mark"), this.gl.useProgram(this.programInfo.program), hr(this.programInfo, {
			uSampleFacet: [0, 1],
			uZero: 0
		});
		for (let e of this.#e) e();
		this.#e = void 0;
	}
	createMarkUniformSetter(e) {
		let t = this.markUniformInfo.setters[e];
		if (!t) throw Error(`Uniform "${e}" not found int the Mark block!`);
		return (e) => {
			t(e), this.markUniformsAltered = !0, this.unitView.context.animator.requestRender();
		};
	}
	registerMarkUniformValue(e, t, n = (e) => e) {
		let r = this.createMarkUniformSetter(e), i = (n) => {
			if (n == null) throw Error(`Trying to set null/undefined value for uniform: ${e}${v(t) ? `Expr: ${t.expr}` : ""}`);
			r(n);
		};
		if (v(t)) {
			let e, r = () => i(n(e(null)));
			e = this.unitView.paramRuntime.watchExpression(t.expr, r), r();
		} else i(n(t));
	}
	deleteGraphicsData() {
		let e = this.glHelper;
		if (!e) {
			this.vertexArrayInfo = void 0, this.bufferInfo = void 0;
			return;
		}
		let t = e.gl;
		this.vertexArrayInfo &&= (this.gl.bindVertexArray(null), t.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject), void 0), this.bufferInfo &&= (Object.values(this.bufferInfo.attribs).forEach((e) => this.gl.deleteBuffer(e.buffer)), this.bufferInfo.indices && this.gl.deleteBuffer(this.bufferInfo.indices), void 0);
	}
	dispose() {
		this.deleteGraphicsData();
	}
	updateBufferInfo(e) {
		if (this.gl.bindVertexArray(null), this.bufferInfo && e.vertexCount <= this.bufferInfo.allocatedVertices) for (let [t, n] of Object.entries(e.arrays)) n.data && nr(this.gl, this.bufferInfo.attribs[t], n.data, 0);
		else {
			this.deleteGraphicsData(), this.bufferInfo = cr(this.gl, e.arrays, { numElements: e.vertexCount }), this.bufferInfo.allocatedVertices = e.allocatedVertices;
			for (let [t, n] of Object.entries(e.arrays)) this.bytesPerElement.set(t, n.data.BYTES_PER_ELEMENT);
		}
	}
	get glHelper() {
		return this.getContext().glHelper;
	}
	get gl() {
		return this.glHelper.gl;
	}
	isReady() {
		return this.bufferInfo && this.programInfo;
	}
	isPickingParticipant() {
		if (this.properties.tooltip === null && !this.unitView.paramRuntime.hasPointSelections()) return !1;
		for (let e of this.unitView.getLayoutAncestors()) if (!e.isPickingSupported()) return !1;
		return !0;
	}
	getDebugState() {
		let e = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, t = /* @__PURE__ */ new Set([...Object.keys(this.defaultProperties), ...Object.keys(e)]), n = {};
		for (let e of t) n[e] = this.properties[e];
		return {
			markUniformsAltered: this.markUniformsAltered,
			vertexCount: this.bufferInfo?.numElements,
			allocatedVertices: this.bufferInfo?.allocatedVertices,
			properties: n
		};
	}
	bindOrSetMarkUniformBlock() {
		this.markUniformsAltered ? (Qn(this.gl, this.programInfo, this.markUniformInfo), this.markUniformsAltered = !1) : Zn(this.gl, this.programInfo, this.markUniformInfo);
	}
	prepareRender(e) {
		let t = this.glHelper, n = this.gl, r = [];
		r.push(() => {
			this.vertexArrayInfo ||= er(this.gl, this.programInfo, this.bufferInfo), n.useProgram(this.programInfo.program);
		});
		for (let [e, n] of Object.entries(this.encoders)) {
			let i = t.rangeTextures.get(n.scale);
			i && r.push(() => hr(this.programInfo, { [_u + e]: i }));
		}
		r.push(...this.selectionTextureOps), this.getSampleFacetMode() == "SAMPLE_FACET_TEXTURE" && r.push(() => {
			let e;
			for (let t of this.unitView.getLayoutAncestors()) if (e = t.getSampleFacetTexture(), e) break;
			if (!e) throw Error("No facet texture available. This is bug.");
			hr(this.programInfo, { uSampleFacetTexture: e });
		});
		let i = (e.picking ?? !1) && this.isPickingParticipant();
		return r.push(() => Xn(this.viewUniformInfo, {
			uViewOpacity: this.unitView.getEffectiveOpacity(),
			uPickingEnabled: i
		})), this.opaque || e.picking ? r.push(() => n.disable(n.BLEND)) : r.push(() => n.enable(n.BLEND)), r;
	}
	prepareSampleFacetRendering(e) {
		let t = e.sampleFacetRenderingOptions, n = this.programInfo.uniformSetters.uSampleFacet;
		if (t && n) {
			let e = t.pixelToUnit, r = t.locSize.location * e, i = t.locSize.size * e;
			if (r > 1 || r + i < 0) return !1;
			this.gl.uniform2f(n.location, r, i);
		}
		return !0;
	}
	render(e) {}
	createRenderCallback(e, t) {
		if (!this.bufferInfo) return () => void 0;
		let n = this, r, i = this.unitView.getScaleResolution("x")?.getScale(), a = i && V(i.type), o = Td(this.encoders), s = ["index", "locus"].includes(i?.type) ? -1 : 0, c = [0, 0];
		r = (t) => {
			if (a && t.xIndex && o !== void 0) {
				let n = i.domain(), r = this.unitView.getScaleResolution("x").getAxisLength() || 1, a = Math.abs(n[1] - n[0]) / r * o, l = t.xIndex(n[0] + s - a, n[1] + a, c), u = l[0], d = l[1] - u;
				d > 0 && e(u, d);
			} else e(t.offset, t.count);
		};
		let l = this.rangeMap.get(void 0).count == 0 ? t.facetId : void 0, u = this.rangeMap.get(l);
		return t.sampleFacetRenderingOptions ? function() {
			u.count && n.prepareSampleFacetRendering(t) && r(u);
		} : function() {
			u.count && r(u);
		};
	}
	setViewport(e, t, n, r, i, a = ud) {
		n = n.flatten();
		let o = this.gl, s = this.properties, c = a, l = a, u, d = Od(e, n, s.clip === "never" ? void 0 : r, !1), f = d.coords;
		if (d.requiresScissor) {
			if (!f.isDefined()) return !1;
			let r = [
				f.x,
				e.height - f.y2,
				f.width,
				f.height
			].map((e) => e * t), i = r.map((e) => Math.floor(e)), a = r[0] - i[0], s = r[1] - i[1];
			o.viewport(...i), o.scissor(...i), o.enable(o.SCISSOR_TEST), u = {
				uViewOffset: [(n.x - f.x + c + a / t) / f.width, (f.y2 - n.y2 - l + s / t) / f.height],
				uViewScale: [n.width / f.width, n.height / f.height]
			};
		} else {
			if (!n.isDefined()) return !1;
			o.viewport(0, 0, Math.round(e.width * t), Math.round(e.height * t)), o.disable(o.SCISSOR_TEST), u = {
				uViewOffset: [(n.x + c) / e.width, (e.height - n.y - l - n.height) / e.height],
				uViewScale: [n.width / e.width, n.height / e.height]
			};
		}
		return Xn(this.viewUniformInfo, {
			...u,
			uViewportSize: [n.width, n.height],
			uLogicalVisibleRect: kd(n, i),
			uCullByVisibleRange: [+(s.cullByVisibleRange === !0 || s.cullByVisibleRange === "x"), +(s.cullByVisibleRange === !0 || s.cullByVisibleRange === "y")],
			uDevicePixelRatio: t
		}), Qn(this.gl, this.programInfo, this.viewUniformInfo), !0;
	}
	findDatumAt(e, t) {}
}, Dd = class extends Hn {
	constructor() {
		super([], JSON.stringify);
	}
	get(e) {
		let t = super.get(e);
		return t === void 0 && (t = {
			offset: 0,
			count: 0,
			xIndex: void 0
		}, super.set(e, t)), t;
	}
	migrateEntries(e) {
		for (let [t, n] of this.entries()) e.has(t) || (n.offset = 0, n.count = 0, n.xIndex = void 0);
		for (let [t, n] of e.entries()) Object.assign(this.get(t), n);
	}
};
function Od(e, t, n, r = !0) {
	if (!n || !n.clipX && !n.clipY) return {
		requiresScissor: !1,
		coords: t
	};
	let i = r ? t.intersect(n.rect) : n.rect;
	return n.clipX || (i = i.modify({
		x: 0,
		width: e.width
	})), n.clipY || (i = i.modify({
		y: 0,
		height: e.height
	})), {
		requiresScissor: !0,
		coords: i.flatten()
	};
}
function kd(e, t) {
	let n = t?.clipX ? (t.rect.x - e.x) / e.width : 0, r = t?.clipX ? (t.rect.x2 - e.x) / e.width : 1;
	return [
		n,
		t?.clipY ? (e.y2 - t.rect.y2) / e.height : 0,
		r,
		t?.clipY ? (e.y2 - t.rect.y) / e.height : 1
	];
}
//#endregion
//#region ../core/src/marks/rect.js
var Ad = [
	"none",
	"diagonal",
	"antiDiagonal",
	"cross",
	"vertical",
	"horizontal",
	"grid",
	"dots",
	"rings",
	"ringsLarge"
], jd = class extends Ed {
	constructor(e) {
		super(e);
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"x2",
			"y",
			"y2",
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset",
			"fill",
			"stroke",
			"fillOpacity",
			"strokeOpacity",
			"strokeWidth"
		];
	}
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
	get opaque() {
		return Xt(this, "opaque", () => !this.#e() && !this.#t() && !this.properties.shadowOpacity && f(this.encoding.fillOpacity) && this.encoding.fillOpacity.value == 1 && this.properties.minOpacity == 1) && this.unitView.getEffectiveOpacity() == 1;
	}
	fixEncoding(e) {
		return _d(e, "x", En(e.xOffset)), _d(e, "y", En(e.yOffset)), bd(e, this.properties.filled), xd(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
	#e() {
		let e = this.properties;
		return e.cornerRadius || e.cornerRadiusBottomLeft || e.cornerRadiusBottomRight || e.cornerRadiusTopLeft || e.cornerRadiusTopRight;
	}
	#t() {
		let e = this.encoding.strokeWidth;
		return !(f(e) && !e.value) || "condition" in e;
	}
	async initializeGraphics() {
		await super.initializeGraphics();
		let e = [];
		this.#e() && e.push("ROUNDED_CORNERS"), this.#t() && e.push("STROKED"), this.properties.shadowOpacity && e.push("SHADOW"), this.createAndLinkShaders(zl, Bl, [Vl, ...e.map((e) => "#define " + e)]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uMinWidth", e.minWidth), this.registerMarkUniformValue("uMinHeight", e.minHeight), this.registerMarkUniformValue("uMinOpacity", e.minOpacity), this.registerMarkUniformValue("uCornerRadiusTopRight", e.cornerRadiusTopRight ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusBottomRight", e.cornerRadiusBottomRight ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusTopLeft", e.cornerRadiusTopLeft ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusBottomLeft", e.cornerRadiusBottomLeft ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uHatchPattern", e.hatch, (e) => Math.max(0, Ad.indexOf(e ?? "none"))), this.registerMarkUniformValue("uShadowBlur", e.shadowBlur ?? 0), this.registerMarkUniformValue("uShadowOpacity", e.shadowOpacity ?? 0), this.registerMarkUniformValue("uShadowOffsetX", e.shadowOffsetX ?? 0), this.registerMarkUniformValue("uShadowOffsetY", e.shadowOffsetY ?? 0), this.registerMarkUniformValue("uShadowColor", e.shadowColor ?? "black", uu);
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new ed({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			numItems: t
		});
		n.addBatches(e.facetBatches);
		let r = n.toArrays();
		this.rangeMap.migrateEntries(r.rangeMap), this.updateBufferInfo(r);
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => {
			tr(t, this.vertexArrayInfo, t.TRIANGLE_STRIP, n, e);
		}, e);
	}
	findDatumAt(e, t) {
		e = B(e);
		let n = this.unitView.getCollector().facetBatches.get(e);
		if (!n) return;
		let r = this.encoders, i = r.x.scale.type;
		if (z(i)) {
			let e = ln(r.x);
			return e ? n.find((n) => t == e(n)) : void 0;
		} else {
			let e = ln(r.x), i = ln(r.x2);
			return !e || !i ? void 0 : n.find((n) => t >= e(n) && t < i(n));
		}
	}
}, Md = "flat out lowp vec4 vFillColor;\nflat out lowp vec4 vStrokeColor;\nflat out float vHalfStrokeWidth;\nflat out float vArrowHalfLengthInPixels;\nflat out float vHeadHalfWidth;\nflat out float vStemHalfWidth;\nflat out float vHeadStrokeWidth;\nflat out float vRHeadSlope;\nflat out float vRHeadNotchSlope;\nflat out float vRStartNotchSlope;\nflat out float vHeadRepeatFootprintLength;\nflat out float vHeadSpacing;\nflat out float vDirection;\n\nout vec2 vPosInPixels;\n\n/** Position along the arrow centerline. */\nin float pos;\n\n/** Which side of the extruded strip: -0.5 or 0.5. */\nin float side;\n\nfloat resolveStemHalfWidth(float arrowSize) {\n    if (uStem) {\n        return arrowSize * 0.5;\n    } else {\n        // The negative sign hides stem geometry; the magnitude remains\n        // available for open-head thickness.\n        return -arrowSize * 0.5;\n    }\n}\n\nfloat resolveHeadHalfWidth(float arrowSize) {\n    float headWidth = uHeadWidth * arrowSize;\n    return max(headWidth, 0.0) * 0.5;\n}\n\n// Width along the arrow axis needed by one repeated head, including stroke.\nfloat headRepeatFootprintLength(\n    float halfWidth,\n    float rHeadSlope,\n    float headStrokeWidth,\n    float halfStrokeWidth\n) {\n    float headAxisLength = halfWidth * rHeadSlope;\n    float headStrokeLength = headStrokeWidth / length(vec2(rHeadSlope, 1.0));\n    return headAxisLength + headStrokeLength + halfStrokeWidth * 2.0;\n}\n\n// Distance from the head tip to its centerline notch/join point.\nfloat headNotchOffset(\n    float headHalfWidth,\n    float rHeadSlope,\n    float rHeadNotchSlope,\n    float headStrokeWidth\n) {\n    if (headHalfWidth <= 0.0) {\n        return 0.0;\n    }\n\n    float headAxisLength = headHalfWidth * rHeadSlope;\n    vec2 topOuter = vec2(headAxisLength, headHalfWidth);\n    vec2 normalOffset = headStrokeWidth\n        * normalize(vec2(headHalfWidth, -headAxisLength));\n    vec2 topInner = topOuter + normalOffset;\n    return topInner.x - topInner.y * rHeadNotchSlope;\n}\n\n// Distance from the arrow tip to where the stem outer edge meets a filled\n// triangle head's notch edge. This is the effective occupied head length for\n// deciding when a short inside arrow needs to blunt its head angle.\nfloat triangleHeadStemJoinLength(\n    float stemHalfWidth,\n    float headHalfWidth,\n    float rHeadSlope,\n    float rHeadNotchSlope\n) {\n    float clampedRHeadNotchSlope = min(rHeadNotchSlope, rHeadSlope);\n    return headHalfWidth * rHeadSlope\n        - (headHalfWidth - stemHalfWidth) * clampedRHeadNotchSlope;\n}\n\n// Blunt non-repeated heads toward 90 degrees to preserve visible stem length.\nfloat effectiveHeadSlope(\n    float halfLength,\n    float headHalfWidth,\n    float stemHalfWidth,\n    float configuredRHeadSlope,\n    float configuredRHeadNotchSlope,\n    bool headRepeat\n) {\n    if (\n        headRepeat ||\n        stemHalfWidth < 0.0\n    ) {\n        return configuredRHeadSlope;\n    }\n\n    if (uHeadPlacement == HEAD_PLACEMENT_OUTSIDE) {\n        if (!uStartNotch || stemHalfWidth <= 0.0) {\n            return configuredRHeadSlope;\n        }\n\n        // Outside heads start at the encoded endpoint. The preserved length is\n        // therefore the encoded arrow length minus the start notch depth.\n        float maxStartNotchLength = max(\n            halfLength * 2.0 - uMinStemLength,\n            0.0\n        );\n        return min(\n            configuredRHeadSlope,\n            maxStartNotchLength / stemHalfWidth\n        );\n    }\n\n    if (uHeadShape != HEAD_SHAPE_TRIANGLE) {\n        return configuredRHeadSlope;\n    }\n\n    float maxJoinLength = max(\n        halfLength * 2.0 - uMinStemLength,\n        0.0\n    );\n    float configuredJoinLength = triangleHeadStemJoinLength(\n        stemHalfWidth,\n        headHalfWidth,\n        configuredRHeadSlope,\n        configuredRHeadNotchSlope\n    );\n\n    if (configuredJoinLength <= maxJoinLength) {\n        return configuredRHeadSlope;\n    }\n\n    float boundaryJoinLength = stemHalfWidth * configuredRHeadNotchSlope;\n    if (maxJoinLength < boundaryJoinLength) {\n        return stemHalfWidth > 0.0\n            ? clamp(maxJoinLength / stemHalfWidth, 0.0, configuredRHeadSlope)\n            : 0.0;\n    } else {\n        return clamp(\n            (\n                maxJoinLength +\n                (headHalfWidth - stemHalfWidth) * configuredRHeadNotchSlope\n            ) / headHalfWidth,\n            0.0,\n            configuredRHeadSlope\n        );\n    }\n}\n\n// Outside placement extends the vertex quad so the head can protrude past the\n// encoded interval while its notch/join point stays on the endpoint.\nfloat getOutsideHeadOffset(\n    float headHalfWidth,\n    float rHeadSlope,\n    float rHeadNotchSlope,\n    float headStrokeWidth\n) {\n    if (uHeadPlacement != HEAD_PLACEMENT_OUTSIDE) {\n        return 0.0;\n    }\n\n    return headNotchOffset(\n        headHalfWidth,\n        rHeadSlope,\n        rHeadNotchSlope,\n        headStrokeWidth\n    );\n}\n\nvec2 getOutsideHeadExpansion(float outsideHeadOffset, float direction) {\n    // Expansion is stored as negative/positive arrow-axis growth. In the\n    // canonical reverse direction, the head is on the negative side.\n    return direction == DIRECTION_REVERSE\n        ? vec2(outsideHeadOffset, 0.0)\n        : vec2(0.0, outsideHeadOffset);\n}\n\nvoid main(void) {\n    vec2 a = applyOffset(\n        applySampleFacet(vec2(getScaled_x(), getScaled_y())),\n        vec2(getScaled_xOffset(), getScaled_yOffset())\n    );\n    vec2 b = applyOffset(\n        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),\n        vec2(getScaled_x2Offset(), getScaled_y2Offset())\n    );\n    float direction = getScaled_direction();\n\n    vec2 segmentInPixels = (b - a) * uViewportSize;\n    float segmentLength = length(segmentInPixels);\n    if (segmentLength <= 0.0) {\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n        return;\n    }\n\n    float strokeWidth = getScaled_strokeWidth();\n    float strokeOpacity = getScaled_strokeOpacity() * uViewOpacity;\n    vHalfStrokeWidth = strokeWidth / 2.0;\n\n    float arrowSize = max(getScaled_size(), uMinSize);\n    float headHalfWidth = resolveHeadHalfWidth(arrowSize);\n    float stemHalfWidth = resolveStemHalfWidth(arrowSize);\n    float physicalStemHalfWidth = abs(stemHalfWidth);\n    float headStrokeWidth = uHeadShape == HEAD_SHAPE_OPEN\n        ? physicalStemHalfWidth * 2.0\n        : 0.0;\n    float configuredRHeadSlope = 1.0 / uHeadSlope;\n    float configuredRHeadNotchSlope = 1.0 / uHeadNotchSlope;\n    float rHeadSlope = effectiveHeadSlope(\n        segmentLength * 0.5,\n        headHalfWidth,\n        stemHalfWidth,\n        configuredRHeadSlope,\n        configuredRHeadNotchSlope,\n        uHeadSpacing >= 0.0\n    );\n    float rHeadNotchSlope = uHeadShape == HEAD_SHAPE_OPEN\n        ? rHeadSlope\n        : min(configuredRHeadNotchSlope, rHeadSlope);\n\n    // Grow only the head side of the vertex quad for outside placement.\n    float outsideHeadOffset = getOutsideHeadOffset(\n        headHalfWidth,\n        rHeadSlope,\n        rHeadNotchSlope,\n        headStrokeWidth\n    );\n    vec2 outsideHeadExpansion = getOutsideHeadExpansion(\n        outsideHeadOffset,\n        direction\n    );\n\n    float aaPadding = 1.0 / uDevicePixelRatio;\n    float stripHalfWidth = max(headHalfWidth, physicalStemHalfWidth)\n        + vHalfStrokeWidth\n        + aaPadding;\n\n    float reverseExpansion = outsideHeadExpansion.x;\n    float forwardExpansion = outsideHeadExpansion.y;\n    float geometryStart = -segmentLength * 0.5 - reverseExpansion;\n    float geometryEnd = segmentLength * 0.5 + forwardExpansion;\n    float geometryCenter = (geometryStart + geometryEnd) * 0.5;\n    float geometryHalfLength = (geometryEnd - geometryStart) * 0.5;\n\n    // The SDF geometry still uses the encoded arrow length, but the vertex\n    // strip needs room for stroke and antialiasing beyond both endpoints.\n    float axisPadding = vHalfStrokeWidth + aaPadding;\n    float drawStart = geometryStart - axisPadding;\n    float drawEnd = geometryEnd + axisPadding;\n    float localAxisPosition = mix(drawStart, drawEnd, pos);\n    float localX = localAxisPosition - geometryCenter;\n    float localY = side * stripHalfWidth * 2.0;\n\n    vec2 tangentInPixels = segmentInPixels / segmentLength;\n    vec2 normalInPixels = vec2(-tangentInPixels.y, tangentInPixels.x);\n    vec2 segmentCenter = (a + b) * 0.5;\n    vec2 p = segmentCenter\n        + (tangentInPixels * localAxisPosition + normalInPixels * localY)\n            / uViewportSize;\n\n    vPosInPixels = vec2(localX, localY);\n    vArrowHalfLengthInPixels = geometryHalfLength;\n\n    // These flat varyings are per-arrow geometry constants used by the fragment\n    // SDF. Keeping them here avoids repeating this math per fragment.\n    vHeadHalfWidth = headHalfWidth;\n    vStemHalfWidth = stemHalfWidth;\n    vHeadStrokeWidth = headStrokeWidth;\n    vRHeadSlope = rHeadSlope;\n    vRHeadNotchSlope = rHeadNotchSlope;\n    vRStartNotchSlope = uStartNotch ? vRHeadSlope : 0.0;\n    vDirection = direction;\n    vHeadRepeatFootprintLength = headRepeatFootprintLength(\n        vHeadHalfWidth,\n        vRHeadSlope,\n        vHeadStrokeWidth,\n        vHalfStrokeWidth\n    );\n    vHeadSpacing = uHeadSpacing >= 0.0 ? uHeadSpacing * arrowSize : -1.0;\n    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);\n\n    gl_Position = unitToNdc(p);\n\n    float fillOpacity = getScaled_fillOpacity() * uViewOpacity;\n    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);\n\n    setupPicking();\n}\n", Nd = "in vec2 vPosInPixels;\n\nflat in lowp vec4 vFillColor;\nflat in lowp vec4 vStrokeColor;\nflat in float vHalfStrokeWidth;\nflat in float vArrowHalfLengthInPixels;\nflat in float vHeadHalfWidth;\nflat in float vStemHalfWidth;\nflat in float vHeadStrokeWidth;\nflat in float vRHeadSlope;\nflat in float vRHeadNotchSlope;\nflat in float vRStartNotchSlope;\nflat in float vHeadRepeatFootprintLength;\nflat in float vHeadSpacing;\nflat in float vDirection;\n\nout lowp vec4 fragColor;\n\nconst int N = 6;\nconst float FAR_OUTSIDE = 1e20;\n\n// Adapted from: https://iquilezles.org/articles/distfunctions2d/\nfloat sdPolygon(vec2[N] v, vec2 p) {\n    float d = dot(p-v[0],p-v[0]);\n    float s = 1.0;\n    for( int i=0, j=N-1; i<N; j=i, i++ ) {\n        vec2 e = v[j] - v[i];\n        vec2 w =    p - v[i];\n        vec2 b = w - e*clamp( dot(w,e)/dot(e,e), 0.0, 1.0 );\n        d = min( d, dot(b,b) );\n        bvec3 c = bvec3(p.y>=v[i].y,p.y<v[j].y,e.x*w.y>e.y*w.x);\n        if( all(c) || all(not(c)) ) s*=-1.0;  \n    }\n    return s*sqrt(d);\n}\n\nfloat sdStem(\n    vec2 p,\n    float halfLength,\n    float halfWidth,\n    float rHeadSlope,\n    float rStartNotchSlope\n) {\n    if (halfWidth < 0.0) {\n        return FAR_OUTSIDE;\n    }\n\n    float headSideLength = halfWidth * rHeadSlope;\n    float startNotchLength = halfWidth * rStartNotchSlope;\n    vec2 vertices[6] = vec2[6](\n        vec2(-halfLength, 0.0),\n        vec2(-halfLength + headSideLength, halfWidth),\n        vec2(halfLength, halfWidth),\n        vec2(halfLength - startNotchLength, 0.0),\n        vec2(halfLength, -halfWidth),\n        vec2(-halfLength + headSideLength, -halfWidth)\n    );\n\n    return sdPolygon(vertices, p);\n}\n\n// Inner corner of an open head, offset perpendicular to the outer edge.\nvec2 headInnerCorner(float halfWidth, float rHeadSlope, float headStrokeWidth) {\n    float headAxisLength = halfWidth * rHeadSlope;\n    vec2 topOuter = vec2(headAxisLength, halfWidth);\n    vec2 normalOffset = headStrokeWidth\n        * normalize(vec2(halfWidth, -headAxisLength));\n    return topOuter + normalOffset;\n}\n\n// X coordinate where the arrowhead notch edge crosses the centerline.\nfloat headNotchX(\n    float halfWidth,\n    float rHeadSlope,\n    float rHeadNotchSlope,\n    float headStrokeWidth\n) {\n    vec2 topInner = headInnerCorner(halfWidth, rHeadSlope, headStrokeWidth);\n    return topInner.x - topInner.y * rHeadNotchSlope;\n}\n\nfloat sdArrowHead(\n    vec2 p,\n    float halfWidth,\n    float rHeadSlope,\n    float rHeadNotchSlope,\n    float headStrokeWidth\n) {\n    float headAxisLength = halfWidth * rHeadSlope;\n    vec2 topOuter = vec2(headAxisLength, halfWidth);\n    vec2 bottomOuter = vec2(headAxisLength, -halfWidth);\n    vec2 topInner = headInnerCorner(halfWidth, rHeadSlope, headStrokeWidth);\n    vec2 normalOffset = topInner - topOuter;\n    vec2 bottomInner = bottomOuter + vec2(normalOffset.x, -normalOffset.y);\n    float notchX = headNotchX(\n        halfWidth,\n        rHeadSlope,\n        rHeadNotchSlope,\n        headStrokeWidth\n    );\n\n    vec2 vertices[6] = vec2[6](\n        vec2(0.0, 0.0),\n        topOuter,\n        topInner,\n        vec2(notchX, 0.0),\n        bottomInner,\n        bottomOuter\n    );\n\n    return sdPolygon(vertices, p);\n}\n\nfloat repeat(float x, float spacing) {\n    return x >= spacing ? x - floor(x / spacing) * spacing : x;\n}\n\nfloat sdArrow(vec2 arrowPos, float arrowHalfLength) {\n    float stemDistance = sdStem(\n        arrowPos,\n        arrowHalfLength,\n        vStemHalfWidth,\n        vRHeadSlope,\n        vRStartNotchSlope\n    );\n\n    bool headRepeat = vHeadSpacing >= 0.0;\n    float spacing = headRepeat\n        ? max(vHeadSpacing, vHeadRepeatFootprintLength)\n        : 1.0 / 0.0;\n    float distanceFromStart = arrowPos.x + arrowHalfLength;\n\n    // Keep the stroked tip inside the repeated head's local window.\n    float arrowHeadX = repeat(\n        distanceFromStart + vHalfStrokeWidth,\n        spacing\n    ) - vHalfStrokeWidth;\n\n    float headDistance = sdArrowHead(\n        vec2(arrowHeadX, arrowPos.y),\n        vHeadHalfWidth,\n        vRHeadSlope,\n        vRHeadNotchSlope,\n        vHeadStrokeWidth\n    );\n\n    if (headRepeat) {\n        // Cull heads that would be partially clipped.\n        float headTipDistance = distanceFromStart - arrowHeadX;\n        float headEndDistance = headTipDistance\n            + vHeadRepeatFootprintLength\n            - vHalfStrokeWidth;\n\n        if (headTipDistance > 0.0 && headEndDistance > arrowHalfLength * 2.0) {\n            headDistance = FAR_OUTSIDE;\n        }\n    }\n\n    return min(stemDistance, headDistance);\n}\n\nvoid main(void) {\n    vec2 arrowPos = vPosInPixels;\n    if (vDirection == DIRECTION_FORWARD) {\n        arrowPos.x = -arrowPos.x;\n    }\n    float d = sdArrow(arrowPos, vArrowHalfLengthInPixels);\n\n    fragColor = distanceToColor(\n        d,\n        vFillColor,\n        vStrokeColor,\n        vec4(0.0),\n        vHalfStrokeWidth\n    );\n\n    if (uPickingEnabled) {\n        if (d < vHalfStrokeWidth) {\n            fragColor = vPickingColor;\n        }\n    } else if (fragColor.a == 0.0) {\n        discard;\n    }\n}\n", Pd = "layout(std140) uniform Mark {\n    uniform int uHeadShape;\n\n    uniform float uHeadSlope;\n    uniform float uHeadNotchSlope;\n\n    uniform float uMinSize;\n    uniform float uHeadWidth;\n    uniform bool uStartNotch;\n    uniform float uMinStemLength;\n    uniform float uHeadSpacing;\n    uniform bool uStem;\n\n    uniform int uHeadPlacement;\n\n#pragma markUniforms\n};\n\nconst float DIRECTION_FORWARD = 0.0;\nconst float DIRECTION_REVERSE = 1.0;\n\nconst int HEAD_SHAPE_TRIANGLE = 0;\nconst int HEAD_SHAPE_OPEN = 1;\n\nconst int HEAD_PLACEMENT_INSIDE = 0;\nconst int HEAD_PLACEMENT_OUTSIDE = 1;\n\n// Arrow space uses x for arrow length and y for width perpendicular to it.\n// Negative x points toward the arrowhead in the canonical \"reverse\" direction.\n";
//#endregion
//#region ../core/src/marks/ruleLikeEncoding.js
function Fd(e, t) {
	if (!(e.x && e.y && e.x2 && e.y2)) if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
	else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
	else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
	else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
	else if (e.x && e.y && e.y2) e.x2 = e.x;
	else if (e.y && e.x && e.x2) e.y2 = e.y;
	else if (e.y && e.x) if (!e.x2 && Sn(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
	else if (!e.y2 && Sn(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
	else throw Error(`Cannot infer ${t} mark's secondary position channel from the encoding: ` + JSON.stringify(e));
	else throw Error(`At a minimum, either the x or y channel must be defined in the ${t} mark's encoding: ` + JSON.stringify(e));
	return e;
}
//#endregion
//#region ../core/src/marks/arrow.js
var Id = Math.PI / 180, Ld = 1e-6, Rd = 1, zd = 90, Bd = {
	directions: ["forward", "reverse"],
	headShapes: ["triangle", "open"],
	headPlacements: ["inside", "outside"]
}, Vd = class extends Ed {
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"x2",
			"y",
			"y2",
			"xOffset",
			"yOffset",
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
		return Fd(e, "arrow"), !e.size && Hd(this.properties.size) && (e.size = Ud(this.properties.size, this.properties.size.channel ?? "auto", e)), bd(e, this.properties.filled), xd(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this.createAndLinkShaders(Md, Nd, [Pd]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uHeadSlope", e.headAngle, Kd), this.registerMarkUniformValue("uHeadNotchSlope", e.headNotchAngle, Kd), this.registerMarkUniformValue("uHeadShape", e.headShape, (e) => Gd(Bd.headShapes, e)), this.registerMarkUniformValue("uMinSize", e.minSize), this.registerMarkUniformValue("uHeadWidth", e.headWidth), this.registerMarkUniformValue("uStartNotch", e.startNotch), this.registerMarkUniformValue("uMinStemLength", e.minStemLength), this.registerMarkUniformValue("uHeadSpacing", e.headSpacing ?? -1, qd), this.registerMarkUniformValue("uStem", e.stem), this.registerMarkUniformValue("uHeadPlacement", e.headPlacement, (e) => Gd(Bd.headPlacements, e));
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = Math.max(e.getItemCount(), this.properties.minBufferSize || 0), n = new td({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			numItems: t
		});
		n.addBatches(e.facetBatches);
		let r = n.toArrays();
		this.rangeMap.migrateEntries(r.rangeMap), this.updateBufferInfo(r);
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => {
			tr(t, this.vertexArrayInfo, t.TRIANGLE_STRIP, n, e);
		}, e);
	}
};
function Hd(e) {
	return typeof e == "object" && !!e && "band" in e && typeof e.band == "number";
}
function Ud(e, t, n) {
	let r = Wd(t, n), i = r == "x" ? "width" : "height", a = n[r];
	return { value: { expr: `${Sn(a) && a.scale !== null ? `bandwidth("${r}") * ${i}` : i} * ${e.band}` } };
}
function Wd(e, t) {
	if (e == "auto") return Jd(t);
	if (Yd(t)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return e;
}
function Gd(e, t) {
	let n = e.indexOf(t);
	if (n < 0) throw Error(`Unsupported arrow mark value: ${t}`);
	return n;
}
function Kd(e) {
	return Math.max(Math.tan(Math.min(Math.max(e, Rd), zd) * Id), Ld);
}
function qd(e) {
	return e ?? -1;
}
function Jd(e) {
	if (Yd(e)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return Xd(e) ? "y" : "x";
}
function Yd(e) {
	return Xd(e) && Zd(e);
}
function Xd(e) {
	return e.x2 != null && e.x2 !== e.x;
}
function Zd(e) {
	return e.y2 != null && e.y2 !== e.y;
}
//#endregion
//#region ../core/src/marks/point.vertex.glsl
var Qd = "flat out float vRadius;\nflat out float vRadiusWithPadding;\nflat out lowp vec4 vFillColor;\nflat out lowp vec4 vStrokeColor;\nflat out lowp float vShape;\nflat out lowp float vHalfStrokeWidth;\nflat out mat2 vRotationMatrix;\n\n// Copypaste from fragment shader\nconst float CIRCLE = 0.0;\nconst float SQUARE = 1.0;\nconst float CROSS = 2.0;\nconst float DIAMOND = 3.0;\nconst float TRIANGLE_UP = 4.0;\nconst float TRIANGLE_RIGHT = 5.0;\nconst float TRIANGLE_DOWN = 6.0;\nconst float TRIANGLE_LEFT = 7.0;\nconst float TICK_UP = 8.0;\nconst float TICK_RIGHT = 9.0;\nconst float TICK_DOWN = 10.0;\nconst float TICK_LEFT = 11.0;\nconst float X = 12.0;\nconst float PLUS = 13.0;\n\nfloat computeSemanticThresholdFactor() {\n    // TODO: add smooth transition\n    return getScaled_semanticScore() >= uSemanticThreshold ? 1.0 : 0.0;\n}\n\n// TODO: Move this into common.glsl or something\nvec2 getDxDy() {\n#if defined(dx_DEFINED) || defined(dy_DEFINED)\n    return vec2(getScaled_dx(), getScaled_dy()) / uViewportSize;\n#else\n    return vec2(0.0, 0.0);\n#endif\n}\n\nvoid main(void) {\n    float shapeAngle = 0.0;\n\n    // Selected points should always be visible\n    float semanticThresholdFactor = isPointSelected()\n        ? 1.0\n        : computeSemanticThresholdFactor();\n\n    if (semanticThresholdFactor <= 0.0) {\n        gl_PointSize = 0.0;\n        // Place the vertex outside the viewport. The default (0, 0) makes this super-slow\n        // on Apple Silicon. Probably related to the tile-based GPU architecture.\n        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);\n        // Exit early. MAY prevent some unnecessary calculations.\n        return;\n    }\n\n    float size = getScaled_size();\n    vec2 pos = vec2(getScaled_x(), getScaled_y()) + getDxDy();\n    vec2 facetedPos = applyOffset(\n        applySampleFacet(pos),\n        vec2(getScaled_xOffset(), getScaled_yOffset())\n    );\n\n#ifdef VISIBLE_RANGE_CULLING\n    if (isOutsideVisibleRange(facetedPos)) {\n        gl_PointSize = 0.0;\n        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);\n        return;\n    }\n#endif\n\n    gl_Position = unitToNdc(facetedPos);\n\n    float strokeWidth = getScaled_strokeWidth();\n\n    float diameter = sqrt(size) *\n        uScaleFactor *\n        semanticThresholdFactor;\n\n    // Clamp minimum size and adjust opacity instead. Yields more pleasing result,\n    // no flickering etc.\n    float opacity = uViewOpacity;\n	if (strokeWidth <= 0.0 || uInwardStroke) {\n		float minDiameter = 1.0 / uDevicePixelRatio;\n		if (diameter < minDiameter) {\n			// We do some \"cheap\" gamma correction here. It breaks on dark background, though.\n			// First we take a square of the size and then apply \"gamma\" of 1.5.\n			opacity *= pow(diameter / minDiameter, 2.5);\n			diameter = minDiameter;\n		}\n	}\n\n	float fillOpa = getScaled_fillOpacity() * opacity;\n	float strokeOpa = getScaled_strokeOpacity() * opacity;\n\n    vShape = getScaled_shape();\n\n	// Circle doesn't have sharp corners. Do some special optimizations to minimize the point size.\n	bool circle = vShape == 0.0;\n\n    if (vShape > TICK_UP && vShape <= TICK_LEFT) {\n        shapeAngle = (vShape - TICK_UP) * 90.0;\n        vShape = TICK_UP;\n    } else if (vShape > TRIANGLE_UP && vShape <= TRIANGLE_LEFT) {\n        shapeAngle = (vShape - TRIANGLE_UP) * 90.0;\n        vShape = TRIANGLE_UP;\n    } else if (vShape == X) {\n        // The x shape reuses the perpendicular stroke geometry of plus.\n        shapeAngle = -45.0;\n    }\n\n	float angleInDegrees = getScaled_angle();\n	float angle = -(shapeAngle + angleInDegrees) * PI / 180.0;\n    float sinTheta = sin(angle);\n    float cosTheta = cos(angle);\n    vRotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);\n\n    // Not needed if we would draw rotated quads instead of gl.POINTS\n	float roomForRotation = circle ? 1.0 : sin(mod(angle, PI / 2.0) + PI / 4.0) / sin(PI / 4.0);\n\n	float aaPadding = 1.0 / uDevicePixelRatio;\n	float rotationPadding = (diameter * roomForRotation) - diameter;\n	// sqrt(3.0) ensures that the angles of equilateral triangles have enough room\n	float strokePadding = uInwardStroke ? 0.0 : strokeWidth * (circle ? 1.0 : sqrt(3.0));\n	float padding = rotationPadding + strokePadding + aaPadding;\n\n    gl_PointSize = max(\n        (diameter + padding),\n        uPickingEnabled ? uMinPickingSize : 0.0\n    ) * uDevicePixelRatio;\n\n	vRadius = diameter / 2.0;\n	vRadiusWithPadding = vRadius + padding / 2.0;\n\n    vHalfStrokeWidth = strokeWidth / 2.0;\n\n    vFillColor = vec4(getScaled_fill() * fillOpa, fillOpa);\n    vStrokeColor = vec4(getScaled_stroke() * strokeOpa, strokeOpa);\n\n    setupPicking();\n}\n", $d = "const lowp vec4 white = vec4(1.0);\nconst lowp vec4 black = vec4(0.0, 0.0, 0.0, 1.0);\n\nflat in float vRadius;\nflat in float vRadiusWithPadding;\n\nflat in lowp vec4 vFillColor;\nflat in lowp vec4 vStrokeColor;\nflat in lowp float vShape;\nflat in lowp float vHalfStrokeWidth;\n\nflat in mat2 vRotationMatrix;\n\nout lowp vec4 fragColor;\n\n// Copypaste from vertex shader\nconst float CIRCLE = 0.0;\nconst float SQUARE = 1.0;\nconst float CROSS = 2.0;\nconst float DIAMOND = 3.0;\nconst float TRIANGLE_UP = 4.0;\nconst float TICK_UP = 8.0;\nconst float X = 12.0;\nconst float PLUS = 13.0;\n\n// The distance functions are inspired by:\n// http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm\n// However, these are not true distance functions, because the corners need to be sharp.\n\nfloat circle(vec2 p, float r) {\n    return length(p) - r;\n}\n\nfloat square(vec2 p, float r) {\n    p = abs(p);\n    return max(p.x, p.y) - r;\n}\n\nfloat tickUp(vec2 p, float r) {\n    float halfR = r * 0.5;\n    p.y += halfR;\n    p = abs(p);\n    return max(p.x - r * 0.15, p.y - halfR);\n}\n\nfloat equilateralTriangle(vec2 p, float r) {\n    p.y = -p.y;\n    float k = sqrt(3.0);\n    float kr = k * r;\n    p.y -= kr / 2.0;\n    return max((abs(p.x) * k + p.y) / 2.0, -p.y - kr);\n}\n\nfloat crossShape(vec2 p, float r, float armHalfWidth) {\n    p = abs(p);\n\n    vec2 b = vec2(armHalfWidth, r);\n    vec2 v = abs(p) - b.xy;\n    vec2 h = abs(p) - b.yx;\n    return min(max(v.x, v.y), max(h.x, h.y));\n}\n\nfloat diamond(vec2 p, float r) {\n    p = abs(p);\n    return (max(abs(p.x - p.y), abs(p.x + p.y)) - r) / sqrt(2.0);\n}\n\nvoid main() {\n    float d;\n    bool lineShape = false;\n\n	/** Normalized point coord */\n    vec2 p = vRotationMatrix * (2.0 * gl_PointCoord - 1.0) * vRadiusWithPadding;\n    float r = vRadius;\n\n    // We could also use textures here. Could even be faster, because we have plenty of branching here.\n    if (vShape == CIRCLE) {\n        d = circle(p, r);\n\n    } else if (vShape == SQUARE) {\n        d = square(p, r);\n\n    } else if (vShape == CROSS) {\n        d = crossShape(p, r, r * 0.4);\n\n    } else if (vShape == DIAMOND) {\n        d = diamond(p, r);\n\n    } else if (vShape == TRIANGLE_UP) {\n        d = equilateralTriangle(p, r);\n\n    } else if (vShape == TICK_UP) {\n        d = tickUp(p, r);\n\n    } else if (vShape == X || vShape == PLUS) {\n        float lineLength = vShape == X ? r * sqrt(2.0) : r;\n        d = crossShape(p, lineLength, vHalfStrokeWidth);\n        lineShape = true;\n\n    } else {\n        d = 0.0;\n    }\n\n	if (!uPickingEnabled) {\n		lowp vec4 fillColor = lineShape\n            ? (vStrokeColor.a > 0.0 ? vStrokeColor : vFillColor)\n            : mix(vFillColor, white, -d * uGradientStrength / vRadius);\n\n		fragColor = distanceToColor(\n			d + (!lineShape && uInwardStroke ? vHalfStrokeWidth : 0.0),\n			fillColor,\n			vStrokeColor,\n            vec4(0.0),\n			lineShape ? 0.0 : vHalfStrokeWidth);\n\n	} else if (d - (lineShape ? 0.0 : vHalfStrokeWidth) <= 0.0) {\n        fragColor = vPickingColor;\n\n	} else {\n		discard;\n    }\n}\n", ef = "layout(std140) uniform Mark {\n    /**\n    * The stroke should only grow inwards, e.g, the diameter/outline is not affected by the stroke width.\n    * Thus, a point that has a zero size has no visible stroke. This allows strokes to be used with\n    * geometric zoom, etc.\n    */\n    uniform bool uInwardStroke;\n\n    /** The minimum point size in pixels when rendering into the picking buffer */\n    uniform float uMinPickingSize;\n\n    /** Scale factor for geometric zoom */\n    uniform mediump float uScaleFactor;\n\n    uniform mediump float uZoomLevel;\n    uniform highp float uSemanticThreshold;\n\n    uniform mediump float uGradientStrength;\n\n#pragma markUniforms\n};\n", tf = class extends M {
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
function nf(e, t, n) {
	let r = new tf({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region ../core/src/marks/point.js
var rf = {}, af = class extends Ed {
	#e = () => 0;
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		if (t != null) if (v(t)) {
			let e = this.unitView.paramRuntime.watchExpression(t.expr, () => this.getContext().animator.requestRender());
			this.#e = e;
		} else this.#e = () => t;
		"geometricZoomBound" in this.properties && console.warn("geometricZoomBound is deprecated. Use something like the following instead: \"size\": { \"expr\": \"min(0.5 * pow(zoomLevel, 2), 200)\" }.");
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"y",
			"xOffset",
			"yOffset",
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
	getDefaultEncoding() {
		return {
			...super.getDefaultEncoding(),
			...rf
		};
	}
	fixEncoding(e) {
		let t = this.unitView.getEncoding(), n = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, r = f(e.shape) && (e.shape.value === "x" || e.shape.value === "+"), i = e.strokeWidth;
		for (let [e, r] of [["dx", "xOffset"], ["dy", "yOffset"]]) {
			let i = t[e] != null || e in n, a = t[r] != null || r in n;
			if (i && a) throw Error(`Point marks cannot combine legacy ${e} with ${r}. Use only ${r}.`);
		}
		return bd(e, this.properties.filled), xd(e, this.properties.filled), r && f(e.stroke) && e.stroke.value === null && (e.strokeOpacity = { value: 0 }, i && (e.strokeWidth = i)), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		super.initializeData();
		let e = this.encoders.semanticScore ? ln(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(nf(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this.createAndLinkShaders(Qd, $d, [ef]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uInwardStroke", e.inwardStroke, (e) => !!e), this.registerMarkUniformValue("uGradientStrength", e.fillGradientStrength), this.registerMarkUniformValue("uMinPickingSize", e.minPickingSize);
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new nd({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			numItems: Math.max(t, this.properties.minBufferSize || 0)
		});
		n.addBatches(e.facetBatches);
		let r = n.toArrays();
		this.rangeMap.migrateEntries(r.rangeMap), this.updateBufferInfo(r);
	}
	#t() {
		let e = 2 ** (this.properties.geometricZoomBound || 0);
		return Math.min(1, this.unitView.getZoomLevel() / e) ** (1 / 3);
	}
	getSemanticThreshold() {
		if (this.sampledSemanticScores) {
			if (this.sampledSemanticScores.length === 0) return -1;
			let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
			if (e <= 0) return -Infinity;
			if (e >= 1) return Infinity;
			{
				let t = this.sampledSemanticScores;
				return Oe(t, e);
			}
		} else return -1;
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => {
			Xn(this.markUniformInfo, {
				uScaleFactor: this.#t(),
				uSemanticThreshold: this.getSemanticThreshold()
			}), this.markUniformsAltered = !0;
		}), t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => {
			n && tr(t, this.vertexArrayInfo, t.POINTS, n, e);
		}, e);
	}
}, of = "// Line caps\nconst int BUTT = 0;\nconst int SQUARE = 1;\nconst int ROUND = 2;\n\n/** Position along the rule */\nin float pos;\n\n/** Which side of the stroke: -0.5 or 0.5 */\nin float side;\n\nflat out vec4 vColor;\n\n/** Stroke width */\nflat out float vSize;\n\n/** The distance from the line center to the direction of normal in pixels */\nout float vNormalLengthInPixels;\n\n/** Distances from the line endings. Used for rendering the round caps and dashes */\nout highp vec2 vPosInPixels;\n\n\nvoid main(void) {\n    float pixelSize = 1.0 / uDevicePixelRatio;\n\n    // Stroke width in pixels\n    float size = getScaled_size();\n    float opacity = getScaled_opacity() * uViewOpacity;\n\n    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively\n    if (size < pixelSize) {\n        opacity *= size / pixelSize;\n        size = pixelSize;\n    }\n\n    vec2 a = applyOffset(\n        applySampleFacet(vec2(getScaled_x(), getScaled_y())),\n        vec2(getScaled_xOffset(), getScaled_yOffset())\n    );\n    vec2 b = applyOffset(\n        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),\n        vec2(getScaled_x2Offset(), getScaled_y2Offset())\n    );\n\n    vec2 tangent = b - a;\n\n    float offset = 0.0;\n    float relativeDiff = 0.0;\n    if (uMinLength > 0.0 || uStrokeCap != BUTT) {\n        float len = length(tangent * uViewportSize);\n\n        // Elongate to reach the minimum length.\n        // The length difference in pixels\n        float diff = max(0.0, uMinLength - len);\n\n        // Add line caps\n        if (uStrokeCap != BUTT) {\n            diff += size;\n        }\n\n        relativeDiff = diff / len;\n        offset = relativeDiff * (pos - 0.5);\n    }\n\n    // Apply caps and minimum length by spreading the vertices along the tangent\n    vec2 p = pos < 1.0\n        ? a + tangent * (pos + offset)\n        : b + tangent * offset;\n\n    // Add an extra pixel to stroke width to accommodate edge antialiasing\n    float aaPadding = pixelSize;\n\n    // Extrude\n    vec2 normal = normalize(vec2(-tangent.y, tangent.x) / uViewportSize);\n    p += normal * side * (size + aaPadding) / uViewportSize;\n\n    gl_Position = unitToNdc(p);\n\n    vColor = vec4(getScaled_color() * opacity, opacity);\n    vSize = size;\n    vNormalLengthInPixels = side * (size + aaPadding);\n\n    // TODO: Here's a precision problem that breaks round caps when zoomed in enough\n    vPosInPixels = vec2(pos, (1.0 - pos)) * (1.0 + relativeDiff) * length(tangent * uViewportSize) -\n        vec2(uStrokeCap != BUTT ? size / 2.0 : 0.0);\n    \n    setupPicking();\n}\n", sf = "// Line ending\nconst int BUTT = 0;\nconst int SQUARE = 1;\nconst int ROUND = 2;\n\nuniform sampler2D uDashTexture;\n\nflat in vec4 vColor;\nflat in float vSize;\n\n/** Position on the rule along its length in pixels */\nin vec2 vPosInPixels;\nin float vNormalLengthInPixels;\n\nout lowp vec4 fragColor;\n\nvoid main(void) {\n    float dpr = uDevicePixelRatio;\n\n    float distanceFromEnd = -min(vPosInPixels[0], vPosInPixels[1]);\n    float distance; // from the rule centerline or end\n    if (distanceFromEnd > 0.0 && uStrokeCap == ROUND) {\n        // round cap\n        distance = length(vec2(distanceFromEnd, vNormalLengthInPixels));\n    } else {\n        distance = abs(vNormalLengthInPixels);\n    }\n\n    // Use a signed distance field to implement edge antialiasing\n    float opacity = clamp(((vSize / 2.0 - distance) * dpr), -0.5, 0.5) + 0.5;\n\n    if (uDashTextureSize > 0.0) {\n        float pos = (vPosInPixels[0] + uStrokeDashOffset) * dpr;\n        float floored = floor(pos);\n        vec2 texelPositions = (floored + vec2(0.5, 1.5)) / dpr / uDashTextureSize;\n      \n        // Do antialiasing\n        opacity *= mix(\n            texture(uDashTexture, vec2(texelPositions[0], 0)).r,\n            texture(uDashTexture, vec2(texelPositions[1], 0)).r,\n            clamp((pos - floored), 0.0, 1.0));\n    }\n\n    fragColor = vColor * opacity;\n\n    if (uPickingEnabled) {\n        fragColor = vPickingColor;\n    }\n}\n", cf = "layout(std140) uniform Mark {\n    /** Minimum rule length in pixels */\n    uniform mediump float uMinLength;\n\n    uniform mediump float uDashTextureSize;\n    uniform lowp int uStrokeCap;\n    uniform mediump float uStrokeDashOffset;\n\n#pragma markUniforms\n};\n", lf = "horizontal", uf = "vertical", df = class extends Ed {
	constructor(e) {
		super(e), this.dashTextureSize = 0;
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"x2",
			"y",
			"y2",
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset",
			"size",
			"color",
			"opacity"
		];
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
		return this.getType() == "tick" ? this.fixTickEncoding(e) : Fd(e, "rule");
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? pf(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return mf(e, n), e;
	}
	async initializeGraphics() {
		await super.initializeGraphics();
		let e = this.gl, t = ff(this.properties.strokeDash);
		this.dashTexture = ar(e, {
			level: 0,
			mag: e.NEAREST,
			min: e.NEAREST,
			internalFormat: e.R8,
			format: e.RED,
			src: t,
			height: 1
		}), this.dashTextureSize = t.length, this.createAndLinkShaders(of, sf, [cf]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uMinLength", e.minLength), this.registerMarkUniformValue("uStrokeCap", e.strokeCap ?? "butt", (e) => [
			"butt",
			"square",
			"round"
		].indexOf(e)), Xn(this.markUniformInfo, { uDashTextureSize: +this.dashTextureSize }), this.markUniformsAltered = !0;
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new td({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			numItems: Math.max(t, this.properties.minBufferSize || 0)
		});
		n.addBatches(e.facetBatches);
		let r = n.toArrays();
		this.rangeMap.migrateEntries(r.rangeMap), this.updateBufferInfo(r);
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => hr(this.programInfo, { uDashTexture: this.dashTexture })), t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => tr(t, this.vertexArrayInfo, t.TRIANGLE_STRIP, n, e), e);
	}
};
function ff(e) {
	if (!e) return /* @__PURE__ */ new Uint8Array();
	if (e.length == 0 || e.length % 2 || e.findIndex((e) => Math.round(e) != e || e < 1 || e > 1e3) >= 0) throw Error("Invalid stroke dash pattern: " + JSON.stringify(e));
	let t = e.reduce((e, t) => e + t), n = new Uint8Array(t), r = !0, i = 0;
	for (let t of e) {
		for (; t;) n[i++] = r && 255 || 0, t--;
		r = !r;
	}
	return n;
}
function pf(e) {
	if (!e.y) return uf;
	if (!e.x) return lf;
	let t = hf(e.x), n = hf(e.y);
	if (!t && n) return uf;
	if (t && !n) return lf;
}
function mf(e, t) {
	if (t == uf) if (e.x2 = e.x, hf(e.y)) {
		let [t, n] = _f(e.y);
		e.y = t, e.y2 = n;
	} else e.y = { value: 0 }, e.y2 = { value: 1 };
	else if (e.y2 = e.y, hf(e.x)) {
		let [t, n] = _f(e.x);
		e.x = t, e.x2 = n;
	} else e.x = { value: 0 }, e.x2 = { value: 1 };
}
function hf(e) {
	return Sn(e) && (e.type == "ordinal" || e.type == "nominal");
}
function gf(e, t) {
	return {
		...e,
		band: t
	};
}
function _f(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [gf(e, t), gf(e, 1 - t)];
}
//#endregion
//#region ../core/src/marks/link.vertex.glsl
var vf = "flat out vec4 vColor;\n\n/** Stroke width */\nflat out float vSize;\n\n/** The distance from the line center to the direction of normal in pixels */\nout float vNormalLengthInPixels;\n\nflat out float vGamma;\n\nconst int SHAPE_ARC = 0;\nconst int SHAPE_DOME = 1;\nconst int SHAPE_DIAGONAL = 2;\nconst int SHAPE_LINE = 3;\nconst int ORIENT_VERTICAL = 0;\nconst int ORIENT_HORIZONTAL = 1;\n\nfloat distanceFromLine(vec2 pointOnLine1, vec2 pointOnLine2, vec2 point) {\n    vec2 a = point - pointOnLine1;\n    vec2 b = pointOnLine2 - pointOnLine1;\n    vec2 proj = dot(a, b) / dot(b, b) * b;\n    return length(a - proj);\n}\n\nbool isInsideViewport(vec2 point, float marginFactor) {\n    vec2 margin = uViewportSize * vec2(marginFactor);\n    return point.x >= -margin.x\n        && point.x <= uViewportSize.x + margin.x\n        && point.y >= -margin.y\n        && point.y <= uViewportSize.y + margin.y;\n}\n\nfloat inverseSmoothstep(float t) {\n    t = clamp(t, 0.0, 1.0);\n    // The chord-axis coordinate of ARC/DOME follows the smoothstep curve.\n    return 0.5 - sin(asin(1.0 - 2.0 * t) / 3.0);\n}\n\n/**\n * Remaps the parameter t to concentrate vertices to the part that is visible in the viewport.\n * This keeps the tightly bent endpoints smooth even when zooming in very close.\n */\nfloat remapVisibleChordParameter(\n    float stripT,\n    float chordStart,\n    float chordEnd,\n    float viewportLength\n) {\n    // Concentrate samples in the viewport-visible chord interval without dropping the rest.\n    float chordMin = min(chordStart, chordEnd);\n    float chordMax = max(chordStart, chordEnd);\n    float chordSpan = chordMax - chordMin;\n\n    if (chordSpan <= 0.0) {\n        return 0.0;\n    }\n\n    float visibleChordMin = max(chordMin, 0.0);\n    float visibleChordMax = min(chordMax, viewportLength);\n\n    if (visibleChordMax <= visibleChordMin) {\n        return stripT;\n    }\n\n    float visibleTMin = inverseSmoothstep((visibleChordMin - chordMin) / chordSpan);\n    float visibleTMax = inverseSmoothstep((visibleChordMax - chordMin) / chordSpan);\n    float visibleTSpan = visibleTMax - visibleTMin;\n    float offscreenTSpan = visibleTMin + (1.0 - visibleTMax);\n\n    if (offscreenTSpan <= 0.0) {\n        return stripT;\n    }\n\n    float visibleShare = clamp(0.75 + (1.0 - visibleTSpan) * 0.2, 0.75, 0.95);\n    float offscreenShare = 1.0 - visibleShare;\n    float leftShare = offscreenShare * visibleTMin / offscreenTSpan;\n    float rightShare = offscreenShare * (1.0 - visibleTMax) / offscreenTSpan;\n\n    if (stripT <= leftShare) {\n        return leftShare > 0.0 ? mix(0.0, visibleTMin, stripT / leftShare) : visibleTMin;\n    }\n\n    float visibleStart = leftShare;\n    float visibleEnd = visibleStart + visibleShare;\n\n    if (stripT <= visibleEnd) {\n        return visibleShare > 0.0\n            ? mix(visibleTMin, visibleTMax, (stripT - visibleStart) / visibleShare)\n            : visibleTMin;\n    }\n\n    return rightShare > 0.0\n        ? mix(visibleTMax, 1.0, (stripT - visibleEnd) / rightShare)\n        : visibleTMax;\n}\n\nvoid clampChordToViewport(inout vec2 p1, inout vec2 p4, inout float chordLength) {\n    if (chordLength > uMaxChordLength) {\n        vec2 chordVector = p4 - p1;\n        vec2 unitChordVector = normalize(chordVector);\n\n        if (isInsideViewport(p1, 2.0)) {\n            chordLength = uMaxChordLength;\n            p4 = p1 + unitChordVector * uMaxChordLength;\n        } else if (isInsideViewport(p4, 2.0)) {\n            chordLength = uMaxChordLength;\n            p1 = p4 - unitChordVector * uMaxChordLength;\n        }\n    }\n}\n\nvoid clampDomeApex(inout vec2 p1, inout vec2 p4, int orient) {\n    if (orient == ORIENT_VERTICAL) {\n        if (p4.x > 0.0) {\n            p1.x = max(p1.x, -p4.x);\n        }\n        if (p1.x < uViewportSize.x) {\n            p4.x = min(p4.x, 2.0 * uViewportSize.x - p1.x);\n        }\n    } else {\n        if (p4.y > 0.0) {\n            p1.y = max(p1.y, -p4.y);\n        }\n        if (p1.y < uViewportSize.y) {\n            p4.y = min(p4.y, 2.0 * uViewportSize.y - p1.y);\n        }\n    }\n}\n\nvoid main(void) {\n    float pixelSize = 1.0 / uDevicePixelRatio;\n    float opacity = getScaled_opacity() * uViewOpacity;\n\n    // The bezier's control points\n    vec2 p1, p2, p3, p4;\n\n    vec2 a = applyOffset(\n        applySampleFacet(vec2(getScaled_x(), getScaled_y())),\n        vec2(getScaled_xOffset(), getScaled_yOffset())\n    ) * uViewportSize;\n    vec2 b = applyOffset(\n        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),\n        vec2(getScaled_x2Offset(), getScaled_y2Offset())\n    ) * uViewportSize;\n\n    if (uShape <= SHAPE_DOME) {\n        if (uShape == SHAPE_DOME) {\n            vec2 height = vec2(0.0);\n            if (uOrient == ORIENT_VERTICAL) {\n                p1 = vec2(min(a.x, b.x), b.y);\n                p4 = vec2(max(a.x, b.x), b.y);\n                height = vec2(0.0, a.y - b.y);\n\n                float chordLength = length(p4 - p1);\n                clampChordToViewport(p1, p4, chordLength);\n                if (uClampApex) {\n                    clampDomeApex(p1, p4, ORIENT_VERTICAL);\n                }\n\n            } else {\n                p1 = vec2(b.x, min(a.y, b.y));\n                p4 = vec2(b.x, max(a.y, b.y));\n                height = vec2(a.x - b.x, 0.0);\n\n                float chordLength = length(p4 - p1);\n                clampChordToViewport(p1, p4, chordLength);\n                if (uClampApex) {\n                    clampDomeApex(p1, p4, ORIENT_HORIZONTAL);\n                }\n            }\n\n            vec2 controlOffset = height / 0.75;\n            p2 = p1 + controlOffset;\n            p3 = p4 + controlOffset;\n\n        } if (uShape == SHAPE_ARC) {\n            p1 = a;\n            p4 = b;\n\n            vec2 chordVector = p4 - p1;\n            vec2 unitChordVector = normalize(chordVector);\n            vec2 chordNormal = vec2(-unitChordVector.y, unitChordVector.x);\n            float chordLength = length(chordVector);\n            clampChordToViewport(p1, p4, chordLength);\n\n            float height = max(\n                chordLength / 2.0 * uArcHeightFactor,\n                uMinArcHeight\n            );\n\n            // This is a bit poor approximation of a circular arc, but it's probably enough for most purposes.\n            // TODO: Consider a more sophisticated approach: https://stackoverflow.com/a/44829356/1547896\n            vec2 controlOffset = chordNormal * height / 0.75;\n            p2 = p1 + controlOffset;\n            p3 = p4 + controlOffset;\n        }\n\n    } else if (uShape == SHAPE_DIAGONAL) {\n        if (uOrient == ORIENT_VERTICAL) {\n            p1 = a;\n            p2 = vec2(a.x, (a.y + b.y) / 2.0);\n            p3 = vec2(b.x, (a.y + b.y) / 2.0);\n            p4 = b;\n        } else {\n            p1 = a;\n            p2 = vec2((a.x + b.x) / 2.0, a.y);\n            p3 = vec2((a.x + b.x) / 2.0, b.y);\n            p4 = b;\n        }\n    } else if (uShape == SHAPE_LINE) {\n        p1 = a;\n        p2 = (a + b) / 2.0;\n        p3 = p2;\n        p4 = b;\n    }\n\n    vec2 strip = vec2(\n        float(gl_VertexID / 2) / float(uSegmentBreaks),\n        float(gl_VertexID % 2) - 0.5\n    );\n\n    float t = strip.x;\n\n    if (uShape == SHAPE_DOME) {\n        if (uOrient == ORIENT_VERTICAL) {\n            t = remapVisibleChordParameter(strip.x, p1.x, p4.x, uViewportSize.x);\n        } else {\n            t = remapVisibleChordParameter(strip.x, p1.y, p4.y, uViewportSize.y);\n        }\n    } else if (uShape == SHAPE_ARC) {\n        if (a.y == b.y) {\n            t = remapVisibleChordParameter(strip.x, p1.x, p4.x, uViewportSize.x);\n        } else if (a.x == b.x) {\n            t = remapVisibleChordParameter(strip.x, p1.y, p4.y, uViewportSize.y);\n        }\n    }\n\n    vec2 p;\n    vec2 tangent;\n\n    // de Casteljau evaluation keeps the cubic stable for long chords.\n    vec2 q1 = mix(p1, p2, t);\n    vec2 q2 = mix(p2, p3, t);\n    vec2 q3 = mix(p3, p4, t);\n\n    vec2 r1 = mix(q1, q2, t);\n    vec2 r2 = mix(q2, q3, t);\n\n    p = mix(r1, r2, t);\n    tangent = 3.0 * (r2 - r1);\n\n    tangent = normalize(tangent);\n    vec2 normal = vec2(-tangent.y, tangent.x);\n\n    float size = getScaled_size();\n\n    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively\n    if (size < pixelSize) {\n        opacity *= size / pixelSize;\n        size = pixelSize;\n    }\n\n    // Handle minimum picking size or add an extra pixel to the stroke width to accommodate edge antialiasing\n    float paddedSize = uPickingEnabled\n        ? max(size, uMinPickingSize)\n        : size + pixelSize;\n\n    vNormalLengthInPixels = strip.y * paddedSize;\n    \n    if (uShape == SHAPE_ARC &&\n        uArcFadingDistance[0] > 0.0 &&\n        uArcFadingDistance[1] > 0.0 &&\n        (!uNoFadingOnPointSelection || !isPointSelected()))\n    {\n        float d = distanceFromLine(p1, p4, p);\n        float distanceOpacity = smoothstep(uArcFadingDistance[1], uArcFadingDistance[0], d);    \n\n        // Fade out\n        opacity *= distanceOpacity;\n\n        // Collapse fully transparent triangles to skip fragment processing \n        if (distanceOpacity <= 0.0) {\n            vNormalLengthInPixels = 0.0;\n        }\n    }\n\n    // Extrude\n    p += normal * vNormalLengthInPixels;\n\n    gl_Position = pixelsToNdc(p);\n\n    vec3 color = getScaled_color();\n\n    vColor = vec4(color * opacity, opacity);\n\n    vGamma = getGammaForColor(color);\n\n    vSize = paddedSize;\n\n    setupPicking();\n}\n", yf = "flat in vec4 vColor;\nflat in float vSize;\nin float vNormalLengthInPixels;\nflat in float vGamma;\n\nout lowp vec4 fragColor;\n\nvoid main(void) {\n    float dpr = uDevicePixelRatio;\n\n    float distance = abs(vNormalLengthInPixels);\n    float opacity = clamp(((vSize / 2.0 - distance) * dpr), 0.0, 1.0);\n\n    opacity = pow(opacity, vGamma);\n\n    fragColor = vColor * opacity;\n\n    if (uPickingEnabled) {\n        fragColor = vPickingColor;\n    }\n}\n", bf = "layout(std140) uniform Mark {\n    uniform float uArcHeightFactor;\n\n    /** Make very small arcs visible */\n    uniform float uMinArcHeight;\n\n    /** The minimum stroke width in pixels when rendering into the picking buffer */\n    uniform float uMinPickingSize;\n\n    uniform int uShape;\n    uniform int uOrient;\n    uniform bool uClampApex;\n\n    // In pixels\n    uniform float uMaxChordLength;\n    // In pixels\n    uniform vec2 uArcFadingDistance;\n    uniform bool uNoFadingOnPointSelection;\n\n    uniform int uSegmentBreaks;\n\n#pragma markUniforms\n};\n", xf = [
	"arc",
	"dome",
	"diagonal",
	"line"
], Sf = ["vertical", "horizontal"], Cf = class extends Ed {
	constructor(e) {
		super(e), this._baseInstanceExt = void 0;
	}
	get defaultHitTestMode() {
		return "endpoints";
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"x2",
			"y",
			"y2",
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset",
			"size",
			"color",
			"opacity"
		];
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
		return e.x2 || (Sn(e.x) ? e.x2 = { datum: 0 } : e.x2 = e.x), e.y2 || (Sn(e.y) ? e.y2 = { datum: 0 } : e.y2 = e.y), e;
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this._baseInstanceExt = this.gl.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"), this.createAndLinkShaders(vf, yf, [bf]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uArcFadingDistance", e.arcFadingDistance, (e) => e || [0, 0]), this.registerMarkUniformValue("uArcHeightFactor", e.arcHeightFactor), this.registerMarkUniformValue("uMinArcHeight", e.minArcHeight), this.registerMarkUniformValue("uMinPickingSize", e.minPickingSize), this.registerMarkUniformValue("uShape", e.linkShape, (e) => xf.indexOf(e)), this.registerMarkUniformValue("uOrient", e.orient, (e) => Sf.indexOf(e)), this.registerMarkUniformValue("uClampApex", e.clampApex, (e) => !!e), this.registerMarkUniformValue("uMaxChordLength", e.maxChordLength), this.registerMarkUniformValue("uSegmentBreaks", e.segments, (e) => e), this.registerMarkUniformValue("uNoFadingOnPointSelection", e.noFadingOnPointSelection, (e) => !!e);
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new rd({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			numItems: t
		});
		n.addBatches(e.facetBatches);
		let r = n.toArrays();
		this.rangeMap.migrateEntries(r.rangeMap), this.arrays = Object.fromEntries(Object.entries(r.arrays).map(([e, t]) => [e, {
			...t,
			data: void 0
		}])), this.updateBufferInfo(r);
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => this.bindOrSetMarkUniformBlock()), this._baseInstanceExt ? t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)) : t.push(() => this.gl.bindVertexArray(null)), t;
	}
	render(e) {
		let t = this.gl, n = () => (this.markUniformInfo.uniforms.uSegmentBreaks[0] + 1) * 2;
		return this._baseInstanceExt ? this.createRenderCallback((e, r) => {
			this._baseInstanceExt.drawArraysInstancedBaseInstanceWEBGL(t.TRIANGLE_STRIP, 0, n(), r, e);
		}, e) : this.createRenderCallback((e, r) => {
			for (let t of Object.entries(this.bufferInfo.attribs)) {
				let [n, r] = t;
				r.buffer && r.numComponents && r.divisor && (r.offset = e * this.arrays[n].numComponents * this.bytesPerElement.get(n));
			}
			mr(t, this.programInfo, this.bufferInfo), t.drawArraysInstanced(t.TRIANGLE_STRIP, 0, n(), r);
		}, e);
	}
}, wf = "in mediump vec2 vertexCoord;\nin lowp vec2 textureCoord;\n\n// Width of the text (all letters)\nin float width;\n\nout vec2 vTexCoord;\nout float vEdgeFadeOpacity;\nflat out vec4 vColor;\nflat out float vSlope;\nflat out float vGamma;\n\nstruct RangeResult {\n    float pos;\n    float scale;\n};\n\nfloat minValue(vec4 v) {\n    return min(min(v.x, v.y), min(v.z, v.w));\n}\n\nfloat maxValue(vec4 v) {\n    return max(max(v.x, v.y), max(v.z, v.w));\n}\n\n/**\n * All measures are in [0, 1]\n */\nRangeResult positionInsideRange(float a, float b, float width, float padding,\n                                int align, bool flush) {\n    float span = b - a;\n    float paddedWidth = width + 2.0 * padding;\n\n    // Is the text clearly outside the viewport\n    if (a > 1.0 || b < 0.0) {\n        return RangeResult(0.0, 0.0);\n    }\n\n    // How much extra space we have for adjusting the position so that the\n    // text stays inside the range.\n    float extra = max(0.0, span - paddedWidth);\n\n    float pos;\n\n    // Align the text and try to keep it inside the range and the viewport\n    if (align == 0) {\n        float centre = a + b;\n\n        if (flush) {\n            float leftOver = max(0.0, paddedWidth - centre);\n            centre += min(leftOver, extra);\n\n            float rightOver = max(0.0, paddedWidth + centre - 2.0);\n            centre -= min(rightOver, extra);\n        }\n\n        pos = centre / 2.0;\n\n    } else if (align < 0) {\n        float edge = a;\n\n        if (flush) {\n            float over = max(0.0, -edge);\n            edge += min(over, extra);\n        }\n\n        pos = edge + padding;\n\n    } else {\n        float edge = b;\n\n        if (flush) {\n            float over = max(0.0, edge - 1.0);\n            edge -= min(over, extra);\n        }\n\n		// TODO: If the text spans the whole viewport, try to keep it centered if possible.\n\n        pos = edge - padding;\n    }\n\n    // How the text should be scaled to make it fit inside the range (if it didn't fit).\n    float scale = clamp((span - padding) / paddedWidth, 0.0, 1.0);\n\n    // TODO: Fix padding in scale factor. Padding should stay constant\n    return RangeResult(pos, scale);\n}\n\nvec2 calculateRotatedDimensions(float width, mat2 rotationMatrix) {\n    vec2 a = abs(rotationMatrix * vec2(width / 2.0, 0.5));\n    vec2 b = abs(rotationMatrix * vec2(width / 2.0, -0.5));\n    return vec2(max(a.x, b.x), max(a.y, b.y)) * 2.0;\n}\n\n/** Needed when using ranged text */\nivec2 fixAlignForAngle(ivec2 align, float angleInDegrees) {\n    float a = mod(angleInDegrees + 45.0, 360.0);\n    int x = align.x;\n    int y = -align.y;\n\n    // TODO: Optimize by avoiding branching\n    if (a < 90.0) {\n        return ivec2(x, y);\n    } else if (a < 180.0) {\n        return ivec2(y, -x);\n    } else if (a < 270.0) {\n        return ivec2(-x, y);\n    } else {\n        return ivec2(-y, x);\n    }\n}\n\nvoid main(void) {\n    float opacity = getScaled_opacity() * uViewOpacity;\n    vec2 size = vec2(getScaled_size());\n    float x = getScaled_x() + getScaled_xOffset() / uViewportSize.x;\n    float y = getScaled_y();\n\n    float scale = 1.0;\n\n	float angleInDegrees = getScaled_angle();\n	float angle = -angleInDegrees * PI / 180.0;\n	\n    float sinTheta = sin(angle);\n    float cosTheta = cos(angle);\n    mat2 rotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);\n\n    vec2 flushSize = calculateRotatedDimensions(width, rotationMatrix);\n\n#if defined(x2_DEFINED) || defined(y2_DEFINED)\n    ivec2 align = fixAlignForAngle(uAlign, angleInDegrees);\n#else\n    ivec2 align = uAlign;\n#endif\n\n#ifdef x2_DEFINED\n    float x2 = getScaled_x2() + getScaled_x2Offset() / uViewportSize.x;\n\n    if (uLogoLetter) {\n        size.x = (x2 - x) * uViewportSize.x;\n        x += (x2 - x) / 2.0;\n\n    } else {\n        RangeResult result = positionInsideRange(\n            min(x, x2), max(x, x2),\n            size.x * scale * flushSize.x / uViewportSize.x, uPaddingX / uViewportSize.x,\n            align.x, uFlushX);\n        \n        x = result.pos;\n        scale *= result.scale;\n    }\n#endif\n\n    // Position of the text origo \n    vec2 pos = applyOffset(\n        applySampleFacet(vec2(x, y)),\n        vec2(0.0, getScaled_yOffset())\n    );\n\n#ifdef y2_DEFINED\n    float y2 = getScaled_y2();\n    vec2 pos2 = applyOffset(\n        applySampleFacet(vec2(x, y2)),\n        vec2(0.0, getScaled_y2Offset())\n    );\n\n    if (uLogoLetter) {\n        size.y = (pos2.y - pos.y) * uViewportSize.y;\n        pos.y += (pos2.y - pos.y) / 2.0;\n\n    } else {\n        RangeResult result = positionInsideRange(\n            min(pos.y, pos2.y), max(pos.y, pos2.y),\n            size.y * scale * flushSize.y / uViewportSize.y, uPaddingY / uViewportSize.y,\n            align.y, uFlushY);\n        \n        pos.y = result.pos;\n        scale *= result.scale;\n    }\n#endif\n\n#ifdef VISIBLE_RANGE_CULLING\n    if (isOutsideVisibleRange(pos)) {\n        gl_Position = vec4(0.0);\n        return;\n    }\n#endif\n\n    if (scale < 1.0) {\n        if (uSqueeze) {\n            vec2 scaleFadeExtent = vec2(3.0, 6.0) / size;\n\n            if (scale  < scaleFadeExtent[0]) {\n                gl_Position = vec4(0.0);\n                return;\n            }\n\n            size *= scale;\n            opacity *= linearstep(scaleFadeExtent[0], scaleFadeExtent[1], scale);\n\n        } else if (scale < 1.0) {\n            // Eliminate the text\n            gl_Position = vec4(0.0);\n            return;\n        }\n    }\n\n    // Position of the character vertex in relation to the text origo\n    vec2 charPos = rotationMatrix * (vertexCoord * size + uD);\n\n    // Position of the character vertex inside the unit viewport\n    vec2 unitPos = pos + charPos / uViewportSize;\n\n    gl_Position = unitToNdc(unitPos);\n\n    // Controls antialiasing of the SDF\n    vSlope = max(1.0, min(size.x, size.y) / uSdfNumerator * uDevicePixelRatio);\n\n    vec3 color = getScaled_color();\n\n    // Premultiply alpha\n    vColor = vec4(color * opacity, opacity);\n\n    // Do something like gamma correction for text when the color is close to black or white.\n    vGamma = getGammaForColor(color);\n\n    vTexCoord = textureCoord;\n\n    // Edge fading. The implementation is simplistic and fails with primitives that\n    // span the whole viewport. However, it works just fine with reasonable font sizes.\n    // x: top, y: right, z: bottom, w: left\n    if (maxValue(uViewportEdgeFadeDistance) > -pow(10.0, 10.0)) { // -Infinity would be nice\n        vEdgeFadeOpacity = minValue(\n            ((vec4(1.0, 1.0, 0.0, 0.0) + vec4(-1.0, -1.0, 1.0, 1.0) * unitPos.yxyx) *\n                uViewportSize.yxyx - uViewportEdgeFadeDistance) / uViewportEdgeFadeWidth);\n    } else {\n        vEdgeFadeOpacity = 1.0;\n    }\n\n    setupPicking();\n}\n", Tf = "uniform sampler2D uTexture;\n\nin vec2 vTexCoord;\nin float vEdgeFadeOpacity;\nflat in vec4 vColor;\nflat in float vSlope;\nflat in float vGamma;\n\nout lowp vec4 fragColor;\n\nfloat median(float r, float g, float b) {\n    return max(min(r, g), min(max(r, g), b));\n}\n\nfloat getDist(vec2 uv) {\n    vec3 c = texture(uTexture, uv).rgb;\n    return 1.0 - median(c.r, c.g, c.b);\n}\n\n/**\n * Calculates the super-sampled distance to the edge.\n * This is used to avoid aliasing when rendering small text,\n * as mip-mapping cannot be used here.\n * The distance is averaged over a grid of n x n samples.\n */\nfloat getSuperDist(vec2 uv) {\n    vec2 dx = dFdx(uv);\n    vec2 dy = dFdy(uv);\n\n    float n = 2.0;\n\n    float sum = 0.0;\n    for (float x = 0.5; x < n; x++){\n        for (float y = 0.5; y < n; y++) {\n            sum += getDist(\n                uv +\n                x / n * dx +\n                y / n * dy\n            ); \n        }\n    }\n\n    return sum / (n * n);\n}\n\nvoid main() {\n    float sigDist = getSuperDist(vTexCoord);\n\n    float slope = vSlope;\n    if (uLogoLetter) {\n        // Using screen-space derivatives for logo letters because skewed aspect ratios\n        // result in blurry edges otherwise. However, use of screen-space derivatives\n        // results in crappy looking text with regular letters text.\n        slope = 0.7 / length(vec2(dFdy(sigDist), dFdx(sigDist)));\n    }\n\n    float opa = clamp((sigDist - 0.5) * slope + 0.5, 0.0, 1.0);\n    opa *= clamp(vEdgeFadeOpacity, 0.0, 1.0);\n\n    opa = pow(opa, vGamma);\n\n    fragColor = vColor * opa;\n\n    if (uPickingEnabled) {\n        fragColor = vPickingColor;\n    }\n}\n", Ef = "layout(std140) uniform Mark {\n    uniform mediump float uSdfNumerator;\n\n    uniform mediump vec2 uD; // dx & dy\n\n    uniform mediump vec4 uViewportEdgeFadeWidth;\n    uniform mediump vec4 uViewportEdgeFadeDistance;\n        \n    uniform bool uSqueeze;\n    uniform bool uLogoLetter;\n\n    // x: -1, 0, 1 = left, center, right\n    // y: -1, 0, 1 = top, middle, bottom \n    uniform lowp ivec2 uAlign;\n\n    uniform mediump float uPaddingX;\n    uniform bool uFlushX;\n    uniform mediump float uPaddingY;\n    uniform bool uFlushY;\n\n#pragma markUniforms\n};\n";
//#endregion
//#region ../core/src/fonts/textMetrics.js
function Df(e, t) {
	return e.getFont(t.font, t.fontStyle, t.fontWeight);
}
function Of(e, t) {
	return (e.capHeight + e.descent) / e.common.base * t;
}
function kf(e, t, n) {
	return {
		width: e.measureWidth(t, n),
		height: Of(e, n)
	};
}
function Af(e, t, n) {
	let r = t * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return n == "vertical" ? e.width * i + e.height * a : e.width * a + e.height * i;
}
//#endregion
//#region ../core/src/marks/text.js
var jf = {
	left: -1,
	center: 0,
	right: 1
}, Mf = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, Nf = class extends Ed {
	constructor(e) {
		super(e), this.font = Df(e.context.fontManager, this.properties), this.setupExprRefsNeedingGraphicsUpdate([
			"text",
			"fitToBand",
			"logoLetters"
		]);
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"x2",
			"y",
			"y2",
			"xOffset",
			"yOffset",
			"x2Offset",
			"y2Offset",
			"color",
			"size",
			"opacity",
			"angle"
		];
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
		for (let t of kn) this.properties.fitToBand ? _d(e, t) : vd(e, t);
		return e;
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this.createAndLinkShaders(wf, Tf, [Ef]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties, t = this.font.metrics.common.base * .35 * (this.properties.logoLetters ? .5 : 1);
		this.registerMarkUniformValue("uPaddingX", e.paddingX), this.registerMarkUniformValue("uPaddingY", e.paddingY), this.registerMarkUniformValue("uFlushX", e.flushX, (e) => !!e), this.registerMarkUniformValue("uFlushY", e.flushY, (e) => !!e), this.registerMarkUniformValue("uSqueeze", e.squeeze, (e) => !!e), Xn(this.markUniformInfo, {
			uAlign: [jf[e.align], Mf[e.baseline]],
			uD: [e.dx, -e.dy],
			uLogoLetter: !!e.logoLetters,
			uSdfNumerator: t,
			uViewportEdgeFadeWidth: [
				e.viewportEdgeFadeWidthTop,
				e.viewportEdgeFadeWidthRight,
				e.viewportEdgeFadeWidthBottom,
				e.viewportEdgeFadeWidthLeft
			],
			uViewportEdgeFadeDistance: [
				e.viewportEdgeFadeDistanceTop,
				e.viewportEdgeFadeDistanceRight,
				e.viewportEdgeFadeDistanceBottom,
				e.viewportEdgeFadeDistanceLeft
			]
		});
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getData(), n = this.encoding, r = this.encoders.text, i = 0, a = "format" in n.text ? L(n.text.format) : (e) => e;
		for (let e of t) {
			let t = a(r(e)), n = H(t) ? t : t === null ? "" : "" + t;
			i += n && n.length || 0;
		}
		let o = new id({
			encoders: this.encoders,
			attributes: this.getAttributes(),
			properties: this.properties,
			fontMetrics: this.font.metrics,
			numCharacters: Math.max(i, this.properties.minBufferSize || 1024)
		});
		o.addBatches(e.facetBatches);
		let s = o.toArrays();
		this.rangeMap.migrateEntries(s.rangeMap), this.updateBufferInfo(s);
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => {
			hr(this.programInfo, { uTexture: this.font.texture });
		}), t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => mr(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => tr(t, this.vertexArrayInfo, t.TRIANGLES, n, e), e);
	}
}, Pf = 1;
function Ff() {
	let e = [0, 1], t = [0, 1], n = 1, r = 1, i = 0, a = 0, o = .5, s = 0, c = () => r / Math.max(1, n - i + a * 2), l = () => {
		let e = c();
		return t[0] + (r - e * (n - i)) * o;
	}, u = () => c() * (1 - i), d = (t) => l() + (t - e[0]) * c() + u() * o;
	return d.invert = (t) => (t - l() - u() * o) / c() + e[0], d.domain = function(t) {
		if (arguments.length) {
			e = pa(t), n = e[1] - e[0];
			let r = e[0] === 0 && e[0] === 0;
			if (n < Pf && !r) {
				n = Pf;
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
		return Vn(e[0] - r + i, e[1] - r + i, Math.min(t, Math.ceil(n))).filter(Number.isInteger).map((e) => e - s);
	}, d.tickFormat = (t, r) => {
		if (r) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = Ie(e[0], e[1], Math.min(t, Math.ceil(n))) < 1e5 ? L(",") : L(".3s");
		return (e) => i(e + s);
	}, d.copy = () => Ff().domain(e).range(t).paddingInner(i).paddingOuter(a).align(o).numberingOffset(s), d;
}
//#endregion
//#region ../core/src/genome/locusFormat.js
var If = L(",d");
function Lf(e) {
	return e.chrom + ":" + If(Math.floor(e.pos + 1));
}
function Rf(e) {
	return !E(e) && "chrom" in e ? Lf(e) : "" + e;
}
function zf(e, t) {
	return e.chrom + ":" + If(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + If(Math.ceil(t.pos));
}
//#endregion
//#region ../core/src/genome/genomes.js
var Bf = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function Vf(e) {
	if (!(e in Bf)) throw Error(`Unknown assembly: ${e}`);
	return Bf[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region ../core/src/genome/genome.js
var Hf = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/grammar/genomic-coordinates/.");
		if (!qf(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, Yf(this.config)) this.setChromSizes(this.config.contigs);
		else if (!Jf(this.config)) {
			let e = Vf(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/grammar/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (Jf(this.config)) try {
			let t = y(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(Uf(await n.text()));
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
		let t = re(this.startByIndex, e) - 1;
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
		return zf(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return Lf(t);
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
function Uf(e) {
	return ea(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function Wf(e) {
	return A(e) && "chrom" in e;
}
function Gf(e) {
	return e.every(Wf);
}
function Kf(e) {
	return Gf(e) && (e[1] ?? e[0]).pos !== void 0;
}
function qf(e) {
	return A(e) && ("name" in e || Jf(e) || Yf(e));
}
function Jf(e) {
	return qf(e) && "url" in e;
}
function Yf(e) {
	return qf(e) && "contigs" in e;
}
//#endregion
//#region ../core/src/genome/scaleLocus.js
var Xf = 1e6, Zf = .65;
function Qf() {
	let e = Ff().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), o = t.toChromosome(Math.max(r[0], 0)), s = t.toChromosome(Math.min(r[1], t.totalSize - 1)), c = Math.max(1, Math.min(n ?? 10, Math.floor(i))), l = Ie(r[0], r[1], c);
		l < Xf && (l = Ie(r[0], r[1], c * Zf)), l = Math.max(1, l);
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
		let i = e.domain(), a = i[1] - i[0], o = e.numberingOffset(), s = Ie(i[0], i[1], Math.max(1, Math.min(n ?? 10, Math.floor(a)))) < Xf ? L(",") : L(".3s"), c = (e) => e - t.toChromosome(e).continuousStart;
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
function $f(e) {
	return e.type == "locus";
}
function ep(e, t) {
	let n = ap(e);
	return n ? n.toChromosomal(t) : t;
}
function tp(e, t) {
	let n = ap(e);
	return n && Wf(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function np(e, t) {
	let n = ap(e);
	return n && Gf(t) ? n.toContinuousInterval(t) : t;
}
function rp(e, t) {
	let n = ap(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function ip(e) {
	let t = ap(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function ap(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region ../core/src/scales/scaleInstanceManager.js
var op = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	#n;
	#r;
	#i;
	#a;
	#o = 0;
	constructor({ getParamRuntime: e, onRangeChange: t, onDomainChange: n, getGenomeStore: r }) {
		this.#n = e, this.#r = t, this.#i = n, this.#a = r;
	}
	get scale() {
		return this.#e;
	}
	resetScale() {
		this.dispose(), this.#e = void 0;
	}
	getLocusGenome(e) {
		let t = this.#a?.();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e) {
		let t = ws({
			...this.#c(e),
			range: void 0
		});
		return t.props = e, "unknown" in t && t.unknown(null), this.#e = t, this.#s(e), this.#l(), this.#u(), this.#e;
	}
	#s(e) {
		let t = this.#e;
		!t || !$f(t) || t.genome(this.getLocusGenome(e.assembly));
	}
	reconfigureScale(e) {
		let t = this.#e;
		!t || t.type == "null" || (Cs({
			...this.#c(e),
			range: void 0
		}, t), t.props = e, this.#l());
	}
	withDomainNotificationsSuppressed(e) {
		this.#o += 1;
		try {
			e();
		} finally {
			--this.#o;
		}
	}
	#c(e) {
		let { assembly: t, domainIndexer: n, __rangeExprScope: r, ...i } = e;
		return i;
	}
	#l() {
		let e = this.#e;
		if (!e) return;
		let t = e.props;
		this.#t.forEach((e) => e.invalidate()), this.#t.clear();
		let n = t.__rangeExprScope?.paramRuntime ?? this.#n(), r = cp({
			range: t.range,
			reverse: t.reverse,
			createExpression: (e) => n.createExpression(e),
			registerExpr: (e) => this.#t.add(e)
		});
		if (!r) return;
		if ("values" in r) {
			e.range(r.values);
			return;
		}
		let i = () => e.range(r.evaluate());
		r.setup(i), i();
	}
	#u() {
		let e = this.#e;
		if (!e) return;
		let t = e.range, n = e.domain, r = () => this.#r?.();
		sp(e, {
			onRangeChange: r,
			onDomainChange: () => {
				this.#o > 0 || this.#i?.();
			},
			range: t,
			domain: n
		}), r();
	}
	dispose() {
		this.#t.forEach((e) => e.invalidate()), this.#t.clear();
	}
};
function sp(e, { onRangeChange: t, onDomainChange: n, range: r, domain: i }) {
	typeof r == "function" && (e.range = (function(e) {
		if (arguments.length) r(e), t?.();
		else return r();
	})), typeof i == "function" && (e.domain = (function(e) {
		if (arguments.length) i(e), n?.();
		else return i();
	}));
}
function cp({ range: e, reverse: t, createExpression: n, registerExpr: r }) {
	if (!e || !O(e)) return null;
	let i = (e, t) => t ? e.slice().reverse() : e;
	if (e.some(v)) {
		let a;
		return {
			dynamic: !0,
			evaluate: () => i(a.map((e) => e()), t),
			setup: (t) => {
				a = e.map((e) => {
					if (v(e)) {
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
function lp(e, t, n) {
	if (n ||= [], e.some((e) => e === null)) {
		if (e.every((e) => e === null)) return null;
		throw console.warn(e), Error("Cannot merge objects with nulls!");
	}
	let r = {}, i = (e, t) => e === t || up(e) && up(t) || up(e) && t === !0 || e === !0 && A(t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => e === t[n]), a = (e) => {
		for (let a in e) {
			let o = e[a];
			if (!n.includes(a) && o !== void 0) if (r[a] !== void 0 && !i(r[a], o)) console.warn(`Conflicting property ${a} of ${t}: (${JSON.stringify(r[a])} and ${JSON.stringify(e[a])}). Using ${JSON.stringify(r[a])}.`);
			else {
				let e = r[a];
				if (up(e)) up(o) && (r[a] = lp([e, o], a));
				else if (up(o)) {
					if (!(e === !0 || e === void 0)) throw Error("Bug in merge! Target is: " + e);
					r[a] = lp([{}, o], a);
				} else r[a] = o;
			}
		}
	};
	for (let t of e) a(t);
	return r;
}
function up(e) {
	return A(e) && !Array.isArray(e);
}
//#endregion
//#region ../core/src/config/scaleConfig.js
var dp = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, fp = /* @__PURE__ */ new Set(["rect"]), pp = /* @__PURE__ */ new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function mp(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function hp(e) {
	return pp.has(e);
}
function gp(e, t) {
	if (hp(t)) return bp(e)[t];
}
function _p(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function vp(e) {
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
function yp(e, t) {
	let n = _p(t);
	return d(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function bp(e) {
	return d(e.map((e) => e.range));
}
function xp(e, { channel: t, dataType: n, isExplicitDomain: r, markTypes: i, hasDomainMid: a }) {
	let o = yp(e, n), s = bp(e), c = { ...vp(o) };
	if (r ? c.zero = !1 : c.zero === void 0 && o.zero !== void 0 && (c.zero = o.zero), bt(t) && c.nice === void 0 && (c.nice = o.nice === void 0 ? !r : o.nice), dn(t) && c.scheme === void 0) if (n == "quantitative") {
		let e = a || o.domainMid !== void 0 ? s.diverging : i?.length && i.every((e) => fp.has(e)) ? s.heatmap : s.ramp, t = mp(e) ? e : o.quantitativeColorScheme;
		mp(t) && (c.scheme = t);
	} else {
		let e = o[dp[n] ?? dp.quantitative];
		mp(e) && (c.scheme = e);
	}
	else zt(t) && c.range === void 0 ? t == "shape" ? c.range = s.shape ?? [] : t == "direction" ? c.range = ["forward", "reverse"] : c.range = [] : t == "size" && c.range === void 0 ? c.range = s.size : t == "angle" && c.range === void 0 && (c.range = s.angle);
	return c;
}
//#endregion
//#region ../core/src/scales/domainExpressions.js
function Sp(e, t) {
	return v(e) ? t.createExpression(e.expr)() : Array.isArray(e) ? e.map((e) => Sp(e, t)) : e;
}
function Cp(e) {
	return v(e) ? [e] : Array.isArray(e) ? e.flatMap((e) => Cp(e)) : [];
}
//#endregion
//#region ../core/src/scales/scaleResolutionConstants.js
var wp = "quantitative", Tp = "ordinal", Ep = "nominal";
//#endregion
//#region ../core/src/scales/scaleRules.js
function Dp(e, t) {
	if (t == "index" || t == "locus") {
		if (Nn(e)) return t;
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
		Ep,
		Tp,
		wp
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function Op(e, t, n, r) {
	if (n) {
		if (["index", "locus"].includes(n) && !Nn(e)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${e}" resolves to scale type "${n}".`);
		if (["index", "locus"].includes(t) && n !== t || n === "locus" && n !== t) throw Error(`${r} "${n}" is incompatible with "${t}" data.`);
	}
}
function kp(e, t) {
	bt(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && V(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region ../core/src/scales/scalePropsResolver.js
function Ap({ channel: e, dataType: t, orderedMembers: n, viewLevelScaleProps: r, isExplicitDomain: i, configScopes: a }) {
	let o = n, s = o.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), c = lp(r ? [r.props] : o.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (c === null || c.type == "null") return { type: "null" };
	let l = {
		...xp(a, {
			channel: e,
			dataType: t,
			isExplicitDomain: i,
			markTypes: s,
			hasDomainMid: c.domainMid !== void 0
		}),
		...c
	};
	if (l.type ||= Dp(e, t), Nn(e) && o.some((t) => En(t.view.getEncoding()[_n(e)])) && l.type == "band" && l.padding === void 0 && (l.paddingInner ??= .2, l.paddingOuter ??= .2), Op(e, t, r ? l.type : void 0, `View-level scales.${e}.type`), typeof l.range == "string") {
		if (!hp(l.range)) throw Error("Unknown named scale range \"" + l.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let t = gp(a, l.range);
		if (t === void 0) throw Error("Named scale range \"" + l.range + "\" is not configured in config.range.");
		dn(e) && (typeof t == "string" || typeof t == "object" && t && !Array.isArray(t)) ? (l.scheme = t, delete l.range) : l.range = t;
	}
	if (e == "y" && z(l.type) && l.reverse == null && (l.reverse = !0), In(e) && z(l.type) && !l.range) {
		let t = e == "xOffset" ? "x" : "y", n = o[0]?.view, r = n?.getScaleResolution(t);
		r?.getResolvedScaleType() == "band" && (r.getScale(), l.range = [0, { expr: `bandwidth("${t}") * ${t == "x" ? "width" : "height"}` }], l.__rangeExprScope = n);
	}
	if (l.range && l.scheme && delete l.scheme, l.domainTransition === void 0 && (l.domainTransition = !(o.some((e) => Cp(e.channelDef.scale?.domain).length > 0) || Cp(r?.props.domain).length > 0)), Array.isArray(l.range) && l.range.some(v) && o.length > 0) {
		let e = r?.props.range === void 0 ? o.find((e) => e.channelDef.scale?.range !== void 0)?.view : r.view;
		e && (l.__rangeExprScope = e);
	}
	if (!("zoom" in l)) {
		let e = yp(a, t);
		e.zoom === void 0 ? ["index", "locus"].includes(l.type) && (l.zoom = !0) : l.zoom = e.zoom;
	}
	return kp(l, e), l;
}
//#endregion
//#region ../core/src/scales/indexLikeDomainUtils.js
function jp(e) {
	return e === "index" || e === "locus";
}
function Mp(e, t) {
	return jp(e) ? Fp(t) : t;
}
function Np(e, t) {
	return jp(e) ? Ip(t) : t;
}
function Pp(e, t) {
	return t && jp(e) ? Fp(t) : t;
}
function Fp(e) {
	return [e[0], e[1] + Lp(e)];
}
function Ip(e) {
	return [e[0], e[1] - Lp(e)];
}
function Lp(e) {
	return e[1] >= e[0] ? 1 : -1;
}
//#endregion
//#region ../core/src/scales/selectionDomainUtils.js
function Rp(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function zp(e, t) {
	if (e) {
		if (!$e(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function Bp(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? Rp(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: zp(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function Vp(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !Zt(a)) return;
		let o = w(a.select);
		!ie(o) || !o.encodings?.includes(r) || e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function Hp(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !Zt(e)) continue;
		let o = w(e.select);
		if (!(!ie(o) || !o.encodings?.includes(r)) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function Up(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.ceil(a), o = Math.ceil(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region ../core/src/utils/domainArray.js
var Wp = class e extends Array {
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
}, Gp = class extends Wp {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) ? this : (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e)), this);
	}
}, Kp = class extends Wp {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, qp = class extends Kp {
	constructor() {
		super(), this.type = "nominal";
	}
}, Jp = class extends Wp {
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
}, Yp = {
	quantitative: Gp,
	index: Gp,
	locus: Gp,
	nominal: qp,
	ordinal: Kp
};
function Xp(e, t) {
	if (e == "quantitative" && Zp(t)) {
		let n = new Jp(t);
		return n.type = e, n;
	} else if (Yp[e]) {
		let n = new Yp[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function Zp(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region ../core/src/scales/domainPlanner.js
var Qp = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	#c = void 0;
	#l = !0;
	#u = /* @__PURE__ */ new Map();
	#d = /* @__PURE__ */ new WeakMap();
	constructor({ getActiveMembers: e, getAllMembers: t, getDataMembers: n, getViewLevelDomainSource: r, getType: i, getLocusExtent: a, fromComplexInterval: o }) {
		this.#e = e, this.#t = t ?? e, this.#n = n ?? e, this.#r = r, this.#i = i, this.#a = a, this.#o = o;
	}
	get initialDomainSnapshot() {
		return this.#s;
	}
	hasConfiguredDomain(e = {}) {
		return !!this.getConfiguredDomain(e);
	}
	hasSelectionConfiguredDomain() {
		return this.getSelectionConfiguredDomainBindingInfo(), !!this.#c;
	}
	getSelectionConfiguredDomainBindingInfo() {
		return this.#c || !this.#l || this.getConfiguredDomain(), this.#c;
	}
	getSelectionConfiguredDomainInfo() {
		let e = this.getSelectionConfiguredDomainBindingInfo();
		if (e) return {
			param: e.param,
			encoding: e.encoding
		};
	}
	invalidateConfiguredDomain() {
		this.#l = !0, this.#c = void 0, this.#u.clear();
	}
	getDefaultDomain(e = !1, t) {
		let n = this.#i();
		return dm(n, this.#a, e && n !== "locus" ? this.getDataDomain() : void 0, t);
	}
	getConfiguredOrDefaultDomain(e = !1, t, n = {}) {
		return this.getConfiguredDomain(n) ?? this.getDefaultDomain(e, t);
	}
	getConfiguredDomain(e = {}) {
		let t = e.includeSelectionInitial ?? !0;
		if (!this.#l && this.#u.has(t)) return this.#u.get(t);
		let n = $p(this.#e(), this.#r?.(), this.#o, t);
		return sm(this.#t(), n.selectionRef), this.#c = n.selectionRef, this.#u.set(t, n.domain), this.#l = !1, n.domain;
	}
	getDataDomain() {
		return um(this.#n(), this.#i, (e) => this.#f(e));
	}
	getDataZoomExtent() {
		return Pp(this.#i(), this.getDataDomain());
	}
	captureInitialDomain(e, n, r) {
		if (!this.#s && V(e.type)) {
			let n = r ?? e.domain();
			t(n) > 0 && (this.#s = n);
		}
		return n ? !1 : (this.#s = r ?? e.domain(), !0);
	}
	#f(e) {
		let t = this.#d.get(e);
		if (t) return t;
		let n = e.view.mark.encoders;
		if (!n) return [];
		let r = n[e.channel];
		if (!r) return [];
		let i = _t(r);
		if (i.length === 0) return [];
		let a = i.filter(Ce).filter((e) => !e.channelDef.domainInert);
		return this.#d.set(e, a), a;
	}
};
function $p(e, t, n, r) {
	let i = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => e.channelDef.scale?.domain), a = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	t?.domain !== void 0 && em(a, tm(t, n, r));
	for (let e of i) em(a, tm({
		view: e.view,
		channel: e.channel,
		type: e.channelDef.type,
		domain: e.channelDef.scale.domain
	}, n, r));
	return im(a);
}
function em(e, t) {
	t.kind === "selection" ? nm(e, t) : rm(e, t);
}
function tm(e, t, n) {
	let r = e.domain;
	return lm(r) ? {
		kind: "selection",
		...am(e, r, t, n)
	} : {
		kind: "literal",
		domain: om(e.type, Sp(r, e.view?.paramRuntime), t)
	};
}
function nm(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function rm(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function im(e) {
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
function am(e, t, n, r) {
	let i = t.param, a = cm(e.channel, t, i), o = Bp(e.view, i, a), s = t.initial !== void 0, c = o.selection?.intervals[a], l = i + "." + a;
	return !c || c.length !== 2 ? {
		domain: r && t.initial ? om(e.type, t.initial, n) : void 0,
		description: l,
		param: i,
		encoding: a,
		hasInitial: s,
		runtime: o.runtime
	} : {
		domain: Xp(e.type, n(c)),
		description: l,
		param: i,
		encoding: a,
		hasInitial: s,
		runtime: o.runtime
	};
}
function om(e, t, n) {
	let r = n(t);
	return Xp(e, e === "locus" && Gf(t) && !Kf(t) ? r : Mp(e, r));
}
function sm(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => Hp(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function cm(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = Ct(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function lm(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function um(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = g(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = Xp(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = Xp(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function dm(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? Pp(e, n) ?? [] : n ?? [];
}
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function fm(e) {
	return --e * e * e + 1;
}
function pm(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../core/src/utils/eerp.js
function mm(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region ../core/src/scales/zoomDomainUtils.js
function hm(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type) {
		case "linear":
		case "index":
		case "locus": return sn(t, n, r);
		case "log": return gn(t, n, r);
		case "pow":
		case "sqrt": return Wt(t, n, r, e.exponent());
		case "symlog": return vt(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region ../core/src/scales/scaleInteractionController.js
var gm = class {
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
		return vm(e, t, this.#o, this.#s, this.#r, this.#i);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return V(e) && !z(e);
	}
	getDomainChangeAction(e, t) {
		return $t(t, e) ? "none" : this.isZoomable() ? "restore" : this.#e().type === "index" ? "notify" : this.isZoomingSupported() ? "animate" : "notify";
	}
	isZoomed() {
		return this.isZoomingSupported() && !$t(this.#a(), this.#e().domain());
	}
	zoom(e, t, n) {
		if (!this.isZoomingSupported()) return !1;
		let r = this.#e(), i = r.domain(), a = ym(r, i, e, t, n), o = this.getZoomExtent();
		return a = Bn(a, o[0], o[1]), [0, 1].some((e) => a[e] != i[e]) ? (r.domain(a), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		let { duration: n, renderImmediately: r } = _m(t);
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let i = this.#e(), a = bm(i.type, e, this.#o), o = this.#t(), s = i.domain();
		if (n > 0 && s.length == 2) {
			if (r) throw Error("renderImmediately is not supported for animated zooms.");
			let e = s[1] - s[0], t = a[1] - a[0], c = s[0] + e / 2, l = a[0] + t / 2, u = s[0] == a[0], d = s[1] == a[1];
			this.#l();
			let f = pn();
			if (this.#c = f, await o.transition({
				duration: n,
				easingFunction: pm,
				cancelToken: f,
				onUpdate: (n) => {
					let r = mm(e, t, n), a = e == t ? n : (e - r) / (e - t), o = a * l + (1 - a) * c, f = [u ? s[0] : o - r / 2, d ? s[1] : o + r / 2];
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
			return t(e.every(Number.isFinite) ? e : this.#r() ?? this.#e().domain()) / t(this.#e().domain());
		}
		return 1;
	}
};
function _m(e) {
	if (e === void 0) return {
		duration: 0,
		renderImmediately: !1
	};
	if (qe(e)) return {
		duration: e ? 700 : 0,
		renderImmediately: !1
	};
	if (typeof e == "number") return {
		duration: e,
		renderImmediately: !1
	};
	let t = e.duration ?? 0;
	return {
		duration: qe(t) ? t ? 700 : 0 : t,
		renderImmediately: e.renderImmediately === !0
	};
}
function vm(e, t, n, r, i, a) {
	if (xm(t)) {
		if (O(t.extent)) return bm(e.props.type, t.extent, n);
		if (t.extent === "data") return a() ?? i() ?? e.domain();
		if (t.extent === "unbounded") {
			if (e.props.type === "locus") throw Error("Zoom extent \"unbounded\" is not supported for locus scales.");
			return [-Infinity, Infinity];
		}
	}
	return t && e.props.type == "locus" ? r() : i() ?? e.domain();
}
function ym(e, t, n, r, i) {
	let a = [...t], o = e.invert(r);
	switch (e.props.reverse && (i = -i), "align" in e && (o += e.align()), e.type) {
		case "linear":
		case "index":
		case "locus":
			a = ct(a, i || 0);
			break;
		case "log":
			a = it(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = dt(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	return hm(e, a, o, n);
}
function bm(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && Gf(t) && !Kf(t) ? r : Mp(e, r);
}
function xm(e) {
	return A(e);
}
//#endregion
//#region ../core/src/scales/resolutionMemberOrder.js
function Sm(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function Cm(e) {
	return Array.from(e).sort((e, t) => Sm(e).localeCompare(Sm(t)));
}
//#endregion
//#region ../core/src/scales/resolutionOwnerPrecedence.js
function wm(e, t) {
	return e === t || e.getDataAncestors().includes(t) ? "incoming" : t.getDataAncestors().includes(e) ? "current" : "conflict";
}
Rn("index", Ff, ["continuous"]), Rn("locus", Qf, ["continuous"]), Rn("null", Wl, []);
var Tm = class {
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
	#l = !1;
	#u = [];
	#d = 0;
	#f = [];
	#p = !1;
	#m = void 0;
	#h;
	#g;
	#_ = 0;
	#v = 0;
	#y = !1;
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#h = t, this.#o = new Qp({
			getActiveMembers: () => this.#S(),
			getAllMembers: () => this.#e,
			getDataMembers: () => this.#S(this.#t),
			getViewLevelDomainSource: () => this.#z(),
			getType: () => this.type,
			getLocusExtent: (e) => this.#w(e),
			fromComplexInterval: this.fromComplexInterval.bind(this)
		}), this.#a = new op({
			getParamRuntime: () => this.#x.paramRuntime,
			onRangeChange: () => this.#E("range"),
			onDomainChange: () => this.#E("domain"),
			getGenomeStore: () => this.#C.genomeStore
		}), this.#s = new gm({
			getScale: () => this.getScale(),
			getAnimator: () => this.#C.animator,
			renderImmediately: () => this.#C.renderImmediately(),
			getInitialDomainSnapshot: () => this.#o.initialDomainSnapshot,
			getDataZoomExtent: () => this.#o.getDataZoomExtent(),
			getResetDomain: () => this.#j(),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#w()
		});
	}
	get #b() {
		let e = this.#e.values().next().value;
		if (!e) throw Error("ScaleResolution has no members!");
		return e.view;
	}
	get #x() {
		return this.#h ?? this.#b;
	}
	#S(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			e.isConfiguredVisible() && (!e.isDataInitialized() && !n.channelDef?.scale?.domain || t.add(n));
		}
		return t;
	}
	get #C() {
		return this.#x.context;
	}
	get zoomExtent() {
		return (this.#a.scale && V(this.#a.scale.type) && this.#s.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#w(e) {
		return ip(this.#T(e));
	}
	#T(e) {
		if (this.type === "locus") return this.#a.scale ?? this.#a.getLocusGenome(e);
	}
	addEventListener(e, t) {
		this.#i[e].add(t);
	}
	removeEventListener(e, t) {
		this.#i[e].delete(t);
	}
	#E(e) {
		e === "domain" && this.#d === 0 && this.syncLinkedSelectionFromDomain();
		for (let t of this.#i[e].values()) t({
			type: e,
			scaleResolution: this
		});
	}
	#D(e) {
		this.#d += 1;
		try {
			e();
		} finally {
			--this.#d;
		}
	}
	syncLinkedSelectionFromDomain() {
		let e = this.#o.getSelectionConfiguredDomainBindingInfo();
		if (!e || !this.isZoomable()) return;
		let t = zp(e.runtime.getValue(e.param), e.param);
		if (!t) return;
		let n = this.#O(this.getScale().domain());
		if (!n) return;
		let r = this.#O(this.#o.getDefaultDomain(!0)), i = r && $t(n, r) ? null : n;
		Em(t.intervals[e.encoding] ?? null, i) || e.runtime.setValue(e.param, {
			...t,
			type: "interval",
			intervals: {
				...t.intervals,
				[e.encoding]: i
			}
		});
	}
	#O(e) {
		return Up(e, this.zoomExtent);
	}
	#k() {
		return this.#o.getSelectionConfiguredDomainBindingInfo();
	}
	#A() {
		return !this.#p;
	}
	#j(e = !1, t) {
		return this.#o.getConfiguredOrDefaultDomain(e, t, { includeSelectionInitial: this.#A() });
	}
	#M() {
		if (this.#g?.props.domain !== void 0) return !0;
		for (let e of this.#e) if (e.contributesToDomain && e.channelDef.scale?.domain !== void 0) return !0;
		return !1;
	}
	#N(e) {
		let t = zp(e.runtime.getValue(e.param), e.param);
		if (!t) return null;
		let n = t.intervals[e.encoding];
		return n && n.length === 2 ? n : null;
	}
	#P(e, t) {
		t ? this.#p = !1 : e && (this.#p = !0);
	}
	#F(e) {
		let t = Om(e), { channel: n, channelDef: r } = t;
		this.#B(t);
		let i = r.type == null && this.type;
		if (n != "sample" && !r.type && !ze(n) && !i) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(r)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let a = n == "sample" ? "nominal" : r.type, o = r?.scale?.name, s = r.scale?.type ?? (a === "index" || a === "locus" ? a : void 0);
		if (Op(this.channel, a, s, `encoding.${n}.scale.type`), o) {
			if (this.name !== void 0 && o != this.name) throw Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);
			this.name = o;
		}
		if (!i) {
			if (!this.type) this.type = a;
			else if (a !== this.type && !ze(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${a}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#t.add(t), t;
	}
	#I() {
		this.#y = !1, this.#Q(), this.#te(), this.#W(), this.#G();
	}
	#L() {
		this.#v > 0 ? this.#y = !0 : this.#I();
	}
	static registerInBatch(e, t) {
		let n = Array.from(e);
		for (let e of n) e.#v++;
		try {
			return t();
		} finally {
			for (let e of n) e.#v--, e.#v === 0 && e.#y && e.#I();
		}
	}
	registerMember(e) {
		let t = this.#F(e);
		return this.#L(), () => {
			let e = this.#e.delete(t);
			return e && (this.#t.delete(t), this.#L()), e && this.#e.size === 0;
		};
	}
	attachViewLevelScaleProps(e, t) {
		if (this.#g && this.#g.view !== e) {
			let t = wm(this.#g.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level scale declarations target the same ${this.channel} scale resolution.`);
		}
		for (let e of this.#e) this.#V(e);
		this.#g = {
			view: e,
			props: t
		}, this.#Z(), this.#te(), this.#W(), this.#G(), this.#R();
	}
	clearViewLevelScaleProps(e) {
		this.#g?.view === e && (this.#g = void 0, this.#Z(), this.#te(), this.#W(), this.#G(), this.#R());
	}
	#R() {
		this.#a.scale && (this.#a.resetScale(), this.initializeScale(), this.#E("domain"));
	}
	getViewLevelScaleProps() {
		return this.#g;
	}
	#z() {
		let e = this.#g;
		if (e) return {
			view: e.view,
			channel: this.channel,
			type: this.type,
			domain: e.props.domain
		};
	}
	#B(e) {
		this.#g && this.#V(e);
	}
	#V(e) {
		if (e.channelDef.scale !== void 0) throw Error(`Cannot mix view-level scales.${this.channel} with encoding.${e.channel}.scale in the same scale resolution.`);
	}
	dispose() {
		this.#H(), this.#U(), this.#i.domain.clear(), this.#i.range.clear(), this.#a.dispose();
	}
	#H() {
		for (let e of this.#u) e();
		this.#u = [], this.#m = void 0;
	}
	#U() {
		for (let e of this.#f) e();
		this.#f = [];
	}
	#W() {
		if (this.#H(), this.#e.size === 0) return;
		let e = this.#k();
		e && (this.#m = this.#N(e), this.#u.push(e.runtime.subscribe(e.param, () => {
			let t = this.#m, n = this.#N(e);
			this.#P(t, n), this.#m = n, this.#te(), this.reconfigureDomain();
		})));
	}
	#G() {
		if (this.#U(), this.#e.size === 0) return;
		let e = () => {
			this.#te(), this.reconfigureDomain();
		};
		for (let t of this.#e) {
			if (!t.contributesToDomain) continue;
			let n = t.channelDef.scale?.domain, r = Cp(n);
			if (r.length !== 0) for (let n of r) {
				let r = t.view.paramRuntime.createExpression(n.expr).subscribe(e);
				this.#f.push(r);
			}
		}
		let t = this.#g?.props.domain, n = Cp(t);
		for (let t of n) {
			let n = this.#g.view.paramRuntime.createExpression(t.expr).subscribe(e);
			this.#f.push(n);
		}
	}
	#K() {
		for (let e of this.#e) if (e.view.hasRendered()) return !0;
		return !1;
	}
	#q() {
		if (this.#n) return !1;
		for (let e of this.#t) {
			let t = e.view;
			if (t.isConfiguredVisible()) {
				if (!t.isDataInitialized()) {
					if (!e.channelDef.scale?.domain) return !1;
					continue;
				}
				if (!this.#J(e)) return !1;
			}
		}
		return this.#n = !0, !0;
	}
	#J(e) {
		if (!e.view.mark.encoders?.[e.channel]) return !1;
		let t = Dm(e).filter((e) => !e.constant && !e.channelDef.domainInert);
		if (t.length === 0) return !0;
		let n = e.view.getCollector();
		return !n || !n.completed ? !1 : t.some((e) => n.getDomain(g(e, this.type), this.type, e).length > 0);
	}
	#Y() {
		if (this.#n) return;
		let e = this.getScale(), t = this.#o.hasSelectionConfiguredDomain() ? this.#o.getDefaultDomain(!0) : void 0;
		this.#n = !0, this.#o.captureInitialDomain(e, this.isDomainInitialized(), t);
	}
	registerCollectorSubscriptions(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let e of t) e.channelDef.domainInert || n.add(g(e, this.type));
		if (n.size === 0) return () => void 0;
		let r = () => {
			this.reconfigureDomain();
		}, i = [];
		for (let t of n) i.push(e.subscribeDomainChanges(t, r));
		return () => {
			for (let e of i) e();
		};
	}
	isDomainDefinedExplicitly() {
		return this.#M();
	}
	isDomainInitialized() {
		let e = this.#a.scale;
		if (!e) return !1;
		let t = e.domain();
		return V(e.type) ? t.length > 2 || t.length == 2 && (t[0] !== 0 || t[1] !== 0) : t.length > 0;
	}
	#X() {
		return Xt(this, "mergedScaleProps", () => {
			let e = Ap({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#$(),
				viewLevelScaleProps: this.#g,
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#x.getConfigScopes()
			});
			return this.#ne(e), e;
		});
	}
	#Z() {
		i(this, "mergedScaleProps");
	}
	#Q() {
		this.#r = void 0;
	}
	#$() {
		return this.#r ||= Cm(this.#e), this.#r;
	}
	getOrderedMembers() {
		return this.#$().slice();
	}
	getDebugState() {
		let e = this.#a.scale, t = e && typeof e.domain == "function", n = e && typeof e.range == "function";
		return {
			kind: "scale",
			channel: this.channel,
			hostView: this.#x,
			name: this.name,
			type: this.type,
			resolvedScaleType: this.getResolvedScaleType(),
			domain: t ? this.getDomain() : void 0,
			complexDomain: t ? this.getComplexDomain() : void 0,
			range: n ? e.range() : void 0,
			zoomable: this.isZoomable(),
			zoomed: this.isZoomable() ? this.isZoomed() : !1,
			members: this.#$().map((e) => this.#ee(e)),
			activeMemberCount: this.#S().size,
			dataDomainMemberCount: this.#t.size,
			viewLevelScaleProps: this.#g ? {
				view: this.#g.view,
				props: structuredClone(this.#g.props)
			} : void 0
		};
	}
	#ee(e) {
		return {
			view: e.view,
			channel: e.channel,
			channelDef: structuredClone(e.channelDef),
			contributesToDomain: e.contributesToDomain,
			active: this.#S().has(e)
		};
	}
	#te() {
		this.#o.invalidateConfiguredDomain(), this.#Z();
	}
	#ne(e) {
		let t = this.#k();
		if (!t || e === null || e.type === "null") return;
		let n = V(e.type) && !z(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	getAssemblyRequirement() {
		let e = this.#X();
		return e === null || e.type === "null" || e.type !== "locus" ? {
			assembly: void 0,
			needsDefaultAssembly: !1
		} : {
			assembly: e.assembly,
			needsDefaultAssembly: e.assembly === void 0
		};
	}
	getResolvedScaleType() {
		let e = this.#X();
		if (!(e === null || e.type === "null")) return e.type;
	}
	#re(e = !1) {
		let t = this.#X();
		if (t === null || t.type == "null") return { type: "null" };
		let n = { ...t };
		this.#_ += 1;
		let r;
		try {
			r = this.#j(e, n.type === "locus" ? n.assembly : void 0);
		} finally {
			--this.#_;
		}
		if (z(n.type)) {
			let t = this.isDomainDefinedExplicitly(), i = this.#ie(t);
			if (r != null) {
				if (t && i.domain().length > 0 && !$t(i.domain(), r)) return this.#c = void 0, this.#re(e);
				i.addAll(r);
				let a = new Set(r), o = i.domain().filter((e) => a.has(e));
				n.domain = o.length > 0 ? o : new qp();
			} else {
				let e = i.domain();
				n.domain = e.length > 0 ? e : new qp();
			}
			n.domainIndexer = i;
		} else r && r.length > 0 && (n.domain = r);
		return !n.domain && n.domainMid !== void 0 && (n.domain = [n.domainMin ?? 0, n.domainMax ?? 1]), n;
	}
	#ie(e) {
		return (!this.#c || this.#l !== e) && (this.#c = Yu(), this.#l = e), this.#c;
	}
	reconfigure() {
		this.#D(() => {
			this.#te();
			let e = this.#ae(!0);
			e && (this.#oe(e, (e, t) => this.#a.reconfigureScale(t)), this.#se(e));
		});
	}
	reconfigureDomain() {
		this.#D(() => {
			let e = this.#ae(!0, !0);
			if (!e) return;
			let { domainConfig: t, targetDomain: n } = e, r = n != null && $t(n, e.scale.domain());
			n != null && !r && this.#oe(e, (e) => {
				e.domain(n), t.applyOrdinalUnknown && e.unknown(t.ordinalUnknown);
			}), this.#se(e), this.syncLinkedSelectionFromDomain();
		});
	}
	#ae(e, t = !1) {
		let n = this.#a.scale;
		if (!n || n.type == "null") return;
		let r = {
			scale: n,
			props: this.#re(e),
			previousDomain: n.domain(),
			domainWasInitialized: this.isDomainInitialized(),
			hasSelectionConfiguredDomain: this.#o.hasSelectionConfiguredDomain()
		};
		if (t) {
			let e = Os(n, r.props);
			return {
				...r,
				domainConfig: e,
				targetDomain: e.domain
			};
		}
		return r;
	}
	#oe(e, t) {
		this.#a.withDomainNotificationsSuppressed(() => {
			t(e.scale, e.props);
		});
	}
	#se(e) {
		let { scale: t, previousDomain: n, domainWasInitialized: r, hasSelectionConfiguredDomain: i } = e, a = i ? this.#o.getDefaultDomain(!0) : void 0, o = this.#q();
		if (this.#n && this.#o.captureInitialDomain(t, r, a)) {
			this.#E("domain");
			return;
		}
		if (!this.#n || o) {
			(!r || !$t(n, t.domain())) && this.#E("domain");
			return;
		}
		if (t.props.domainTransition === !1) {
			this.#E("domain");
			return;
		}
		let s = t.domain(), c = this.#s.getDomainChangeAction(n, s);
		c === "restore" ? i ? this.#E("domain") : this.#a.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}) : c === "animate" ? i ? this.#E("domain") : this.#K() ? (this.#a.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}), this.zoomTo(s, 500)) : this.#E("domain") : c === "notify" && this.#E("domain");
	}
	get scale() {
		if (this.#a.scale) return this.#a.scale;
		throw Error("ScaleResolution.scale accessed before initialization. Call initializeScale().");
	}
	getScale() {
		if (this.#_ > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own scale while its domain is being resolved.`);
		return this.#a.scale ?? this.initializeScale();
	}
	initializeScale() {
		if (this.#a.scale) return this.#a.scale;
		let e = this.#re();
		return this.#a.createScale(e);
	}
	getDomain() {
		if (this.#_ > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.getScale().domain();
	}
	getDataDomain() {
		return this.#o.getDataDomain();
	}
	getComplexDomain() {
		return rp(this.#T(), Np(this.type, this.getDomain()));
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#k();
		if (!e) return;
		let t = this.#x.getLayoutAncestors().at(-1), n = t ? Vp(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
		return {
			param: e.param,
			encoding: e.encoding,
			persist: n
		};
	}
	isZoomed() {
		return this.#s.isZoomed();
	}
	isZoomable() {
		let e = this.#X();
		return e === null || e.type === "null" ? !1 : V(e.type) && !z(e.type) && !!e.zoom;
	}
	zoom(e, t, n) {
		return this.#s.isZoomingSupported() && this.#Y(), this.#s.zoom(e, t, n);
	}
	async zoomTo(e, t = !1) {
		return this.#s.isZoomingSupported() && this.#Y(), this.#s.zoomTo(e, t);
	}
	resetZoom() {
		return this.#s.resetZoom();
	}
	getZoomLevel() {
		return this.#s.getZoomLevel();
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
		return ep(this.#T(), e);
	}
	fromComplex(e) {
		return tp(this.#T(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? np(this.#T(), e) : e;
	}
};
function Em(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.length === t.length && $t(e, t);
}
function Dm(e) {
	let t = e.view.mark.encoders?.[e.channel];
	return t ? _t(t).filter(Ce) : [];
}
function Om(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = Se(e.view.getBaseUrl(), n.url);
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
function km(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region ../core/src/scales/axisResolution.js
var Am = class {
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
		this.#e.add(e), i(this, "axisProps");
	}
	registerMember(e) {
		return this.#a(e), this.#n(e), () => this.removeMember(e) && this.#e.size === 0;
	}
	removeMember(e) {
		let t = this.#e.delete(e);
		return t && i(this, "axisProps"), t;
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
			members: Cm(this.#e).map((e) => ({
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
		return Xt(this, "axisProps", () => {
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
			return e.length > 0 && e.some((e) => e === null) ? null : lp(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		if (this.#t?.props.title !== void 0) return this.#t.props.title;
		let e = this.#r().map((e) => {
			let t = hn(e.view, e.channel);
			if (!f(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: km("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: km(P(t) ? t.field : void 0, Ft(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (ze(t.member.channel) && !t.explicitTitle) {
				let n = Ct(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), r = new Set(n.map((e) => km(e.explicitTitle, e.implicitTitle)).filter(H));
		return r.size ? [...r].join(", ") : null;
	}
	attachViewLevelAxisProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = wm(this.#t.view, e);
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
		}, i(this, "axisProps");
	}
	clearViewLevelAxisProps(e) {
		this.#t?.view === e && (this.#t = void 0, i(this, "axisProps"));
	}
	getViewLevelAxisProps() {
		return this.#t;
	}
	#r() {
		return Cm(this.#e).filter((e) => !this.#i(e));
	}
	#i(e) {
		return e.view.getLayoutAncestors().some(Mn);
	}
	#a(e) {
		if (!this.#t || this.#i(e)) return;
		let t = e.view.mark.encoding[e.channel];
		if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
	}
};
//#endregion
//#region ../core/src/config/configLayers.js
function jm() {
	let e = [];
	return {
		appendConfig(t, n) {
			Mm(e, t, n);
		},
		appendStyle(t, n) {
			Nm(e, t, n);
		},
		merge() {
			return d(e.map((e) => e.config));
		}
	};
}
function Mm(e, t, n) {
	n && (Nm(e, t, Object.hasOwn(n, "style") ? n.style : void 0), e.push({
		kind: "config",
		config: n
	}));
}
function Nm(e, t, n) {
	if (n === void 0) return;
	if (n === null) {
		Pm(e);
		return;
	}
	let r = md(t, n);
	e.push({
		kind: "style",
		config: r
	});
}
function Pm(e) {
	for (let t = e.length - 1; t >= 0; t--) e[t].kind == "style" && e.splice(t, 1);
}
//#endregion
//#region ../core/src/config/legendConfig.js
function Fm(e, t) {
	let n = d(e.map((e) => e.legend?.layout)), r = n[t], i = [
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
function Im(e, t, n = {}) {
	let r = e[0], i = e.slice(1), a = jm();
	Lm(a, e, r, n.track);
	for (let [t, r] of i.entries()) {
		let i = e.slice(0, t + 2);
		Rm(a, i, r, n.track), zm(a, i, r.legend);
	}
	zm(a, e, t);
	let o = a.merge();
	return delete o.layout, o;
}
function Lm(e, t, n, r) {
	let i = t.slice(0, 1);
	zm(e, i, n?.legend), Rm(e, i, n, r);
}
function Rm(e, t, n, r) {
	r && zm(e, t, n?.legendTrack);
}
function zm(e, t, n) {
	e.appendConfig(t, n);
}
//#endregion
//#region ../core/src/scales/legendResolution.js
var Bm = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"shape",
	"size"
]), Vm = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke"
]), Hm = class {
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
		for (let n of Cm(this.#e)) {
			let r = this.#n(n);
			r && !e.has(r.scaleResolution) && (e.add(r.scaleResolution), t.push(r));
		}
		return t;
	}
	#n(e) {
		let { channel: t, view: n } = e;
		if (Xm(t, n)) return;
		let r = qm(t, n);
		if (!r || f(r)) return;
		let i = "legend" in r ? r.legend : void 0;
		if (!this.#t && i === null || "scale" in r && r.scale === null) return;
		let a = this.#t?.props ?? i, o = a === void 0 ? void 0 : {
			disable: !1,
			...a
		}, s = n.getScaleResolution(t);
		if (!s) return;
		let c = Im(n.getConfigScopes(), o, { track: Gm(n) });
		if (c.disable === !0) return;
		let l = Km(t, r);
		if (!l) return;
		let u = "title" in r ? r.title : void 0, d = c.title === void 0 ? u === void 0 ? P(r) ? r.field : void 0 : u : c.title, p = "format" in r ? r.format : void 0, m = l == "symbol" ? Zm(t, n) : void 0, h = l == "symbol" ? Wm(t, n) : void 0;
		return {
			view: n,
			channel: t,
			field: P(r) ? r.field : void 0,
			type: l,
			symbolChannels: m,
			symbolGeometry: h,
			legend: {
				...c,
				title: d
			},
			format: p,
			dataType: r.type,
			scaleResolution: s
		};
	}
	hasVisibleNonChromeMember() {
		for (let e of this.#e) if (e.view.isVisible() && !e.view.getLayoutAncestors().some(Mn)) return !0;
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
			members: Cm(this.#e).map((e) => ({
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
			let t = wm(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level legend declarations target the same ${this.channel} legend resolution.`);
		}
		let n = Array.from(this.#e).find((e) => Um(e));
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
		if (this.#t && Um(e)) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${e.channel}.legend in the same legend resolution.`);
	}
};
function Um(e) {
	let t = qm(e.channel, e.view);
	return !!(t && "legend" in t && t.legend !== void 0);
}
function Wm(e, t) {
	let n = t.getMarkType();
	return e == "size" && (n == "rule" || n == "link") ? "stroke" : "point";
}
function Gm(e) {
	let t = qm("x", e), n = e.getScaleResolution("x")?.getResolvedScaleType();
	return t?.type == "index" || t?.type == "locus" || n == "index" || n == "locus";
}
function Km(e, t) {
	if ([
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"size"
	].includes(e) && t.type == "quantitative" || (t.type === "nominal" || t.type === "ordinal") && Bm.has(e)) return "symbol";
	if (t.type === "quantitative" && Vm.has(e)) return "gradient";
}
function qm(e, t) {
	return on(t.getEncoding()[e]);
}
function Jm(e, t) {
	let n = qm(e, t);
	return !!(n && "legend" in n && n.legend === null);
}
function Ym(e, t, n) {
	let r = qm(e, n), i = qm(t, n), a = n.getScaleResolution(e), o = n.getScaleResolution(t);
	return P(r) && P(i) && r.field === i.field && a && o && $t(a.getDomain(), o.getDomain());
}
function Xm(e, t) {
	if (e !== "shape" || !P(qm(e, t))) return !1;
	for (let n of [
		"color",
		"fill",
		"stroke"
	]) if (Ym(n, e, t) && !Jm(n, t)) return !0;
	return !1;
}
function Zm(e, t) {
	if (!dn(e)) return {};
	let n = qm(e, t), r = qm("shape", t), i = t.getScaleResolution("shape");
	return P(n) && P(r) && i && Ym(e, "shape", t) && !Jm("shape", t) ? { shape: i.name ?? "shape" } : {};
}
//#endregion
//#region ../core/src/view/resolutionPlanner.js
var Qm = (e, t, n) => {
	let r = e;
	for (; ($m(r, t, n) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes($m(r.dataParent, t, n))) && $m(r, t, n) != "excluded";) r = r.dataParent;
	return r;
};
function $m(e, t, n) {
	let r = e.getConfiguredOrDefaultResolution(n, t);
	switch (r) {
		case "independent":
		case "shared":
		case "excluded":
		case "forced": return r;
		case "collected":
			if (t == "legend") return $m(e, "scale", n);
			throw Error(`Resolution behavior "collected" is only supported for legends, not ${t}s.`);
		default: throw Error(`Unknown ${t} resolution behavior: ${r}`);
	}
}
var eh = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let r = new Tm(n, t);
		t.resolutions.scale[n] = r;
		let i = (t) => {
			e.context.glHelper?.createRangeTexture(t.scaleResolution, !0);
		};
		r.addEventListener("range", i), r.addEventListener("domain", i), e.registerDisposer(() => {
			r.removeEventListener("range", i), r.removeEventListener("domain", i);
		});
	}
	return t.resolutions.scale[n];
}, th = (e, t, n, r) => {
	let i = on(r);
	if (!i) return;
	let a = Ct(i.resolutionChannel ?? n);
	if (Et(a) && !(t == "axis" && !bt(a)) && !(t == "legend" && (bt(a) || In(a))) && !(t == "legend" && $m(e, t, a) == "excluded" && Re(e))) return {
		view: Qm(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, nh = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) !r || Array.isArray(r) || t(n, r);
}, rh = (e) => {
	let t = [];
	return nh(e, (n, r) => {
		let i = th(e, "axis", n, r);
		i && bt(i.channel) && t.push(i);
	}), t;
}, ih = (e) => {
	let t = [];
	for (let [n, r] of Object.entries(e.getEncoding())) {
		if (!r || Array.isArray(r)) continue;
		let i = th(e, "legend", n, r);
		i && !bt(i.channel) && t.push(i);
	}
	return t;
}, ah = (e) => {
	let t = /* @__PURE__ */ new Map();
	return nh(e, (n, r) => {
		let i = th(e, "scale", n, r);
		if (!i) return;
		let a = eh(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
}, oh = (e, t) => {
	for (let { view: n, channel: r, channelDef: i, targetChannel: a } of t) {
		if (!bt(r) || !Nn(a)) continue;
		n.resolutions.axis[a] || (n.resolutions.axis[a] = new Am(a));
		let t = n.resolutions.axis[a], o = t.registerMember({
			view: e,
			channel: r,
			channelDef: i
		});
		e.registerDisposer(() => {
			o() && n.resolutions.axis[a] === t && delete n.resolutions.axis[a];
		});
	}
}, sh = (e, t) => {
	for (let { view: n, channel: r, targetChannel: i } of t) {
		if (bt(r)) continue;
		let t = i;
		n.resolutions.legend[t] || (n.resolutions.legend[t] = new Hm(t));
		let a = n.resolutions.legend[t], o = a.registerMember({
			view: e,
			channel: r
		});
		e.registerDisposer(() => {
			o() && n.resolutions.legend[t] === a && delete n.resolutions.legend[t];
		});
	}
}, ch = (e, t) => {
	Tm.registerInBatch(t.keys(), () => {
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
}, lh = (e, t) => {
	if (!t) {
		lh(e, "scale"), lh(e, "axis");
		return;
	}
	t == "axis" ? oh(e, rh(e)) : t == "legend" ? sh(e, ih(e)) : ch(e, ah(e));
}, uh = {
	point: af,
	rect: jd,
	arrow: Vd,
	rule: df,
	tick: df,
	link: Cf,
	text: Nf
}, Y = class extends Fn {
	#e;
	#t = !1;
	#n = null;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		let o = uh[this.getMarkType()];
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
			for (let e of kn) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
		})), this.needsAxes = {
			x: !0,
			y: !0
		}, this.#r();
	}
	#r() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t)) continue;
			let n = w(t.select), r = n.on, i = n.clear;
			if (rt(n)) {
				let t = 0, a = (t) => {
					this.paramRuntime.setValue(e, t);
				}, o = () => {
					let e = this.context.getCurrentHover();
					return e?.mark?.unitView === this ? e.datum : null;
				}, s = pt(r);
				if (this.addInteractionListener(["mouseover", "pointerover"].includes(r.type) ? "mousemove" : r.type, (r) => {
					if (!s(r.proxiedMouseEvent)) return;
					let i = o(), c = i ? i[qt] : 0, l;
					n.toggle ? r.mouseEvent.shiftKey ? i && (l = ut(this.paramRuntime.getValue(e), { toggle: [i] })) : l = ge(i ? [i] : null) : c != t && (t = c, l = Le(i)), l !== void 0 && a(l);
				}), i) {
					let e = pt(i);
					this.addInteractionListener(i.type, (r) => {
						if (!e(r.proxiedMouseEvent)) return;
						t = 0;
						let i = n.toggle ? ge() : Le(null);
						a(i);
					});
				}
			}
		}
	}
	render(e, t, n = {}) {
		super.render(e, t, n), this.isConfiguredVisible() && (e.pushView(this, t), e.renderMark(this.mark, n), e.popView(this));
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
		lh(this, e);
	}
	dispose() {
		super.dispose(), this.mark.dispose();
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? ln(t[e]) : void 0;
	}
	getSearchAccessors() {
		if (!this.#n) {
			let e = yr(this.getEncoding()) ?? [];
			this.#n = e.map((e) => I(e));
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
		let n = De(e), r = /* @__PURE__ */ new Map();
		for (let e of Object.values(t)) {
			if (!e) continue;
			let t = _t(e);
			if (t.length !== 0) for (let e of t) {
				if (!Ce(e)) continue;
				let t = this.getScaleResolution(e.scaleChannel);
				if (!t) throw Error("Missing scale resolution for channel: " + e.scaleChannel);
				if (e.channelDef.domainInert || dh(e, t, n)) continue;
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
		return kn.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
};
function dh(e, t, n) {
	return !t.isDomainDefinedExplicitly() && n.has(Ct(e.scaleChannel));
}
//#endregion
//#region ../core/src/utils/fetchUtils.js
var fh = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function ph(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new fh("network", String(e));
	}
	if (!n.ok) throw new fh("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new fh("json", String(e));
	}
}
//#endregion
//#region ../core/src/view/viewUtils.js
function mh(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function hh(e) {
	for (let t of kn) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function gh(e, t = () => !0) {
	return Promise.allSettled(e).then((e) => {
		if (t()) for (let t of e) "value" in t ? t.value.finalizeGraphicsInitialization() : "reason" in t && console.error(t.reason);
	});
}
function _h(e) {
	let t = [];
	return e.visit((e) => {
		if (e instanceof Y) {
			let n = e.getEncoding(), r = (n, i) => {
				if (!(!i || typeof i != "object" || Array.isArray(i)) && (P(i) && "type" in i ? t.push({
					view: e,
					channel: n,
					field: i.field,
					type: i.type
				}) : P(i) && n === "semanticScore" && t.push({
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
			return mt;
		}
	}), t;
}
async function vh(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = y(t, r.url), a;
	try {
		a = await ph(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = y(h(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function yh(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region ../core/src/utils/iterateNestedMaps.js
function* bh(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of bh(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region ../core/src/utils/radixSort.js
var xh = 2147483647, Sh = wh([xh]);
function Ch(e) {
	for (let t = 1; t < e.length; t++) if (e[t] < e[t - 1]) return !1;
	return !0;
}
function wh(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) e[n] > t && (t = e[n]);
	return Math.floor(Math.log2(t) / 4) + 1;
}
function Th(e) {
	let t = wh(e), n = Array.from({ length: e.length }, (e, t) => t);
	if (Ch(e)) return n;
	let r = Array(e.length), i = Array(16);
	for (let a = 0; a < t; a++) {
		i.fill(0);
		let t = a * 4, o = 16 ** a, s = (r) => {
			let i = e[n[r]];
			return a >= Sh ? i > xh ? Math.floor(i / o) % 16 : 0 : i >> t & 15;
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
var Eh = "|", Dh = "\\", Oh = class {
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
				n > 0 && (e += Eh);
				let r = i[n], a = kh(t[n], r);
				e += jh(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = kh(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => I(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += Eh);
				let r = e[t], i = kh(n[t](o), r);
				s += jh(i);
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
				let n = e[t], s = kh(a(n), o);
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
function kh(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function Ah(e) {
	if (!(e.indexOf(Dh) !== -1 || e.indexOf(Eh) !== -1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === Dh || r === Eh) && (t += Dh), t += r;
	}
	return t;
}
function jh(e) {
	return typeof e == "string" ? Ah(e) : String(e);
}
//#endregion
//#region ../core/src/data/collector.js
var Mh = class extends be {
	#e = [];
	#t = I(qt);
	#n = [];
	#r = new Oh();
	#i;
	#a;
	#o = new Nh();
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e) {
		super(), this.params = e ?? { type: "collect" }, this.observers = /* @__PURE__ */ new Set(), this.facetBatches = new Hn([], JSON.stringify), this.#a = Lh(this.params?.sort), this.#s();
	}
	#s() {
		this.#e = [], this.#n = [], this.#r.invalidate(), this.facetBatches.clear(), this.facetBatches.set(void 0, this.#e);
	}
	reset() {
		super.reset(), this.#s();
	}
	handle(e) {
		this.#e.push(e);
	}
	beginBatch(e) {
		this.#r.invalidate(), C(e) && (this.#e = [], this.facetBatches.set(B(e.facetId), this.#e));
	}
	complete() {
		if (this.#e = [], this.params.groupby?.length) {
			let e = this.params.groupby.map((e) => I(e)), t = Fh(this.facetBatches.size > 1 ? Ph(this.facetBatches.values()) : this.facetBatches.get(void 0), e);
			this.facetBatches.clear();
			for (let [e, n] of bh(t)) this.facetBatches.set(e, n);
		}
		if (this.#a) for (let e of this.facetBatches.values()) e.sort(this.#a);
		this.#f(), this.#c(), super.complete(), this.#d(), this.#l();
	}
	observe(e) {
		return this.observers.add(e), () => {
			this.observers.delete(e);
		};
	}
	#c() {
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
		this.#c();
		for (let e of this.children) e.complete();
		this.#d(), this.#l();
	}
	#l() {
		for (let e of this.observers) e(this);
	}
	getDomain(e, t, n) {
		return this.#o.getDomain(e, () => {
			let e = Xp(t);
			if (n.constant) e.extend(n({}));
			else if (this.completed) for (let t of this.facetBatches.values()) for (let r = 0, i = t.length; r < i; r++) e.extend(n(t[r]));
			return e;
		});
	}
	subscribeDomainChanges(e, t) {
		return this.#o.subscribe(e, t);
	}
	getData() {
		switch (this.#u(), this.facetBatches.size) {
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
		this.#u();
		for (let t of this.facetBatches.values()) for (let n = 0; n < t.length; n++) e(t[n]);
	}
	getItemCount() {
		let e = 0;
		for (let t of this.facetBatches.values()) e += t.length;
		return e;
	}
	#u() {
		if (!this.completed) throw Error("Data propagation is not completed! No data are available.");
	}
	#d() {
		this.#o.hasCachedDomains() && this.#o.clear(), this.#o.notify();
	}
	#f() {
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
		this.#n = Th(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#n.length) return;
		let t = Je((e) => e.start).right, n = this.#t, r = Je((e) => n(i(e))).left, i = (e) => {
			let n = t(this.#i, e), r = this.#i[n - 1];
			if (!(!r || e >= r.stop)) return this.facetBatches.get(r.facetId)[e - r.start];
		}, a = r(this.#n, e);
		if (a >= 0) {
			let t = i(this.#n[a]);
			if (t && n(t) === e) return t;
		}
	}
	findDatumByKey(e, t) {
		return this.#u(), this.#r.findDatum(e, t, this.facetBatches.values());
	}
}, Nh = class {
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
function Ph(e) {
	return { [Symbol.iterator]: function* () {
		for (let t of e) yield* t;
	} };
}
function Fh(e, t) {
	return t.length > 1 ? Yn(e, ...t) : Ih(e, t[0]);
}
function Ih(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = t(r), i = n.get(e);
		i || (i = [], n.set(e, i)), i.push(r);
	}
	return n;
}
function Lh(e) {
	if (e?.field) {
		let t = B(e.field);
		if (t.length == 1 && !t[0].includes(".")) {
			let n = B(e.order)[0] ?? "ascending", r = JSON.stringify(t[0]);
			return Function("a", "b", `return ${n === "ascending" ? `a[${r}] - b[${r}]` : `b[${r}] - a[${r}]`};`);
		}
		return l(e.field, e.order);
	}
}
//#endregion
//#region ../core/src/utils/cloner.js
function Rh(e, t = {}) {
	return Bh(Vh(e, t.copyFields ? new Set(t.copyFields) : void 0));
}
function zh(e = {}) {
	let t = e.copyFields ? new Set(e.copyFields) : void 0, n, r = ((e) => (n ||= Bh(Vh(e, t)), n(e)));
	return r.reset = () => {
		n = void 0;
	}, r;
}
function Bh(e) {
	let t = Function("source", "return { " + e.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return t.properties = e, t;
}
function Vh(e, t) {
	return Hh(e).filter((e) => typeof e == "string" && (!t || t.has(e)));
}
function Hh(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region ../core/src/data/transforms/lookup.js
var Uh = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t, n = {}) {
		super(e), this.params = e;
		let r = Wh(e);
		if (!r && !t) throw Error("Lookup transform requires a foreign collector.");
		let i = B(e.key), a = B(e.fields ?? i);
		if (a.length === 0) throw Error("The \"fields\" property must not be empty.");
		if (i.length !== a.length) throw Error("The \"fields\" and \"key\" properties must have the same number of fields.");
		let o = e.values, s = e.as;
		if (!o && s) throw Error("The \"as\" property requires explicit \"values\".");
		if (o && s && s.length !== o.length) throw Error("The \"as\" property must contain one output field for every lookup value.");
		if (o?.length === 0) throw Error("The \"values\" property must not be empty.");
		let c = i.map((e) => I(e)), l = a.map((e) => I(e)), u = !o, d = o?.map((e) => I(e)) ?? [], f = s ?? o ?? [], p = e.default ?? null, m = !1, h = [], g, _ = !1, v, y = null, b, x = l[0], S = n.isForeignDataReady ?? (() => !0), C = n.requestForeignData ?? (() => void 0), ee = n.prepareBatch ?? (() => void 0), w = !!n.acceptsDatum, T = n.acceptsDatum ?? (() => !0), E = i.length === 1 ? (e) => y.get(x(e)) : (e) => {
			let t = y;
			for (let n = 0; n < l.length - 1; n++) {
				let r = t.get(l[n](e));
				if (!r) return;
				t = r;
			}
			return t.get(l.at(-1)(e));
		}, te = (n) => {
			if (ee(), y) return;
			if (!n && !t.completed) throw Error("Lookup table must be loaded before primary data.");
			let r = n ?? t.getData();
			if (u) {
				let e = qh(r[Symbol.iterator]().next().value, i);
				f = e, d = e.map((e) => I(e));
			}
			y = Kh(r, c, e.key), b = Jh(f, d, p);
		}, D = (e) => {
			let t = v(e), n = E(e);
			b(t, n), this._propagate(t);
		}, ne = w ? (e) => {
			T(e) && D(e);
		} : D, O = (e) => {
			if (te(), !(r && u)) {
				for (let t of f) if (Object.hasOwn(e, t)) throw Error(`Lookup output field "${t}" already exists in primary data.`);
			}
			v = Rh(e), this.handle = ne, ne(e);
		}, re = () => {
			y = null, u && (d = [], f = []), this.handle = O;
		}, ie = () => {
			m && this.parent && this.repropagate();
		};
		t && this.registerDisposer(t.observe(() => {
			re(), ie();
		}));
		let ae = () => {
			te(h), this.handle = O, v = void 0, _ && se(g);
			for (let e of h) this.handle(e);
			h = [], g = void 0, _ = !1, y = null, u && (d = [], f = []), this.handle = k;
		};
		function k(e) {
			h.push(e);
		}
		let oe = this.reset.bind(this);
		this.reset = () => {
			oe(), m = !1, v = void 0, r ? (h = [], g = void 0, _ = !1, y = null, u && (d = [], f = []), this.handle = k) : this.handle = O;
		};
		let se = this.beginBatch.bind(this);
		this.beginBatch = (e) => {
			r ? ((_ || h.length > 0) && ae(), g = e, _ = !0) : (S() ? (te(), this.handle = O) : (C(), this.handle = Gh), se(e));
		};
		let ce = this.complete.bind(this);
		this.complete = () => {
			r && (_ || h.length > 0) && ae(), m = !0, ce();
		}, this.handle = r ? k : O;
	}
};
function Wh(e) {
	return e.type == "lookup" && "source" in e.from && e.from.source == "input";
}
function Gh(e) {}
function Kh(e, t, n) {
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
function qh(e, t) {
	if (!e) return [];
	let n = Object.keys(e);
	if (t.filter((e) => !n.includes(e)).length) throw Error("Omitting \"values\" requires top-level lookup key fields.");
	return n.filter((e) => !t.includes(e));
}
function Jh(e, t, n) {
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
function Yh(e) {
	return e.type == "lookup" && !Wh(e) || e.type == "coordinateLookup" || e.type == "cross";
}
function Xh(e) {
	if (e.type == "lookup") {
		let t = e;
		if (Wh(t)) return;
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
var Zh = {
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
}, Qh = /([0-9]+)([MIDNSHP=X])/g;
function $h(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(e)}`);
	if (e === "*") return [];
	let t = [], n = 0, r;
	for (Qh.lastIndex = 0; (r = Qh.exec(e)) !== null;) {
		if (r.index !== n) throw Error(`Malformed CIGAR string: ${e}`);
		let i = Number(r[1]);
		if (i <= 0) throw Error(`Malformed CIGAR string: ${e}`);
		t.push({
			op: r[2],
			length: i
		}), n = Qh.lastIndex;
	}
	if (n !== e.length) throw Error(`Malformed CIGAR string: ${e}`);
	return t;
}
function* eg(e, t) {
	if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
	let n = t, r = 0;
	for (let { op: t, length: i } of $h(e)) {
		let e = Zh[t], a = n, o = r;
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
var tg = /[0-9]/, ng = /[A-Z]/;
function rg(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed MD tag: ${JSON.stringify(e)}`);
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		if (!tg.test(e[n])) throw Error(`Malformed MD tag: ${e}`);
		let i = n;
		for (; n < e.length && tg.test(e[n]);) n++;
		if (r += Number(e.slice(i, n)), n < e.length) {
			if (e[n] == "^") {
				n++;
				let i = n;
				for (; n < e.length && ng.test(e[n]);) n++;
				if (n == i) throw Error(`Malformed MD tag: ${e}`);
				let a = e.slice(i, n);
				t.push({
					type: "deletion",
					refOffset: r,
					refBases: a
				}), r += a.length;
			} else if (ng.test(e[n])) t.push({
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
var ig = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = I(e.start ?? "start"), n = I(e.cigar ?? "cigar"), r = I(e.sequence ?? "seq"), i = I(e.quality ?? "qual"), a = I(e.md ?? "md"), o = zh({ copyFields: e.copyFields });
		this.handle = (e) => {
			let s = n(e);
			if (typeof s != "string" || s.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(s)}`);
			if (s == "*") return;
			let c = t(e);
			if (!Number.isFinite(c)) throw Error(`Invalid CIGAR start coordinate: ${c}`);
			let l = ag(a, e);
			if (typeof l != "string" || l.length == 0) throw Error("alignmentMismatches requires the MD tag");
			let u = new Map(rg(l).filter((e) => e.type == "mismatch").map((e) => [e.refOffset, e.refBase])), d = ag(r, e), f = ag(i, e);
			for (let t of eg(s, c)) if (t.cigarOp == "M") for (let [n, r] of u) {
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
function ag(e, t) {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Error && e.message.startsWith("Invalid field")) return;
		throw e;
	}
}
//#endregion
//#region ../core/src/data/transforms/coordinateLookup.js
var og = class extends Uh {
	constructor(e, t, n, r) {
		let i = e.channel ?? "x";
		if (!(n instanceof ts)) throw Error("Coordinate lookup requires a single-axis lazy side data source.");
		if (n.channel !== i || n.scaleResolution !== r.getScaleResolution(i)) throw Error("Coordinate lookup data must use the same positional scale and channel.");
		let a = sg(e.fields ?? e.key, n), o = 0, s = 0;
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
function sg(e, t) {
	if (typeof e == "string") {
		let t = I(e);
		return (e) => +t(e);
	} else if (e.length == 2) {
		let n = t.scaleResolution.getScale(), r = "genome" in n ? n.genome() : void 0;
		if (!r) throw Error("A chrom/pos coordinate lookup requires a locus scale.");
		let i = I(e[0]), a = I(e[1]);
		return (e) => r.toContinuous(i(e), +a(e));
	} else throw Error("Coordinate lookup requires one continuous field or chrom/pos fields.");
}
//#endregion
//#region ../core/src/data/transforms/cross.js
var cg = class extends M {
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
			this.#r ??= lg(Hh(e), this.#n);
			for (let t of this.#t) this._propagate(this.#r(e, t));
		}
	}
	complete() {
		this.#i = !0, super.complete();
	}
	#a() {
		if (this.#t) return;
		if (!this.#e.completed) throw Error("Cross foreign data must be loaded before primary data.");
		this.#t = Array.from(this.#e.getData()), this.#n = this.#t.length === 0 ? [] : Hh(this.#t[0]);
		let e = new Set(this.#n);
		for (let t = 1; t < this.#t.length; t++) {
			let n = Hh(this.#t[t]);
			if (n.length !== e.size || n.some((t) => !e.has(t))) throw Error("Cross foreign data must have homogeneous fields.");
		}
	}
};
function lg(e, t) {
	let n = new Set(e), r = t.filter((e) => n.has(e));
	if (r.length > 0) throw Error(`Cross fields must be unique. Duplicate fields: ${JSON.stringify(r)}.`);
	let i = [...e.map((e) => ug("primary", e)), ...t.map((e) => ug("foreign", e))];
	return Function("primary", "foreign", `return { ${i.join(",\n")} };`);
}
function ug(e, t) {
	let n = JSON.stringify(t);
	return `${n}: ${e}[${n}]`;
}
//#endregion
//#region ../core/src/data/transforms/coverage.js
var dg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e, this.startAccessor = I(e.start), this.endAccessor = I(e.end), this.chromAccessor = e.chrom ? I(e.chrom) : (e) => void 0, this.weightAccessor = e.weight ? I(e.weight) : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new st();
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
function fg(e, t, n, r = []) {
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
var pg = class extends M {
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
		super(e, t), this.as = e.as ?? "displacement", this.positionAccessor = I(e.pos), this.length = typeof e.length == "number" ? e.length : 0;
		let n;
		if (typeof e.length == "number") {
			let t = e.length;
			n = () => t;
		} else n = v(e.length) ? () => this.length : I(e.length);
		this.lengthAccessor = n, this.extent = v(e.extent) ? void 0 : e.extent, this.#e = e.extent ? [0, 0] : void 0, this.positionFactor = v(e.positionFactor) ? 1 : e.positionFactor ?? 1, this.#t = !(v(e.length) || v(e.positionFactor) || v(e.extent));
		let r = () => {
			this.#t && this.#s() && this.completed && this.repropagate();
		};
		this.#n = this.watchExprRef(v(e.length) ? e.length : this.length, r), this.#r = this.watchExprRef(e.positionFactor ?? 1, r), this.#i = this.watchExprRef(e.extent, r), this.#o(this.length, this.positionFactor, this.extent);
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
		let r = fg(t, n, this.#e);
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
function mg(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = new st(), o = i - r, s;
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
var hg = class {
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
}, gg = class extends M {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = I(this.params.pos), this.endPosAccessor = I(this.params.pos2 ?? this.params.pos), this.startPosBisector = Je(this.startPosAccessor), this.endPosBisector = Je(this.endPosAccessor), this.scoreAccessor = I(this.params.score), this.widthAccessor = I(this.params.width), this.laneAccessor = this.params.lane ? I(this.params.lane) : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
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
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new hg(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = this.resolution.getAxisLength();
		if (!t) return;
		for (let e of this.reservationMaps.values()) e.reset();
		let n = e.domain(), r = mg(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, n[0]), this.startPosBisector.right(this._data, n[1]));
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
}, _g = class extends M {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (vg(this.params)) e = this.params.expr;
		else if (yg(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = pe(this.params, t);
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
function vg(e) {
	return "expr" in e;
}
function yg(e) {
	return "param" in e;
}
//#endregion
//#region ../core/src/data/transforms/flatten.js
var bg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = e.index;
		if (e.fields) {
			let n = B(e.fields).map((e) => I(e)), r = B(e.as || e.fields);
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
}, xg = 48;
function* Sg(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - xg;
	}
	yield r;
}
//#endregion
//#region ../core/src/data/transforms/flattenCompressedExons.js
var Cg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = I(e.exons ?? "exons"), n = I(e.start ?? "start"), [r, i] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let a = n(e), o = a, s = !0, c = t(e);
			for (let t of Sg(c)) {
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
}, wg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = I(e.start ?? "start"), n = I(e.cigar ?? "cigar"), r = zh({ copyFields: e.copyFields });
		this.handle = (e) => {
			let i = t(e);
			if (!Number.isFinite(i)) throw Error(`Invalid CIGAR start coordinate: ${i}`);
			let a = n(e);
			if (typeof a != "string" || a.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(a)}`);
			for (let t of eg(a, i)) this._propagate(Object.assign(r(e), t));
		}, this.beginBatch = (e) => {
			r.reset(), super.beginBatch(e);
		};
	}
}, Tg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = B(e.field).map((e) => I(e)), n = B(e.separator), r = B(e.as || e.field);
		if (t.length !== n.length || t.length !== r.length) throw Error(`Lengths of "separator" (${n.length}), "fields" (${t.length}), and "as" (${r.length}) do not match!`);
		this.handle = (e) => {
			if (t.some((t) => !t(e))) return;
			let i = t.map((t, r) => t(e).split(n[r]));
			Eg(i, e);
			let a = i[0].length;
			for (let n = 0; n < a; n++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < t.length; e++) a[r[e]] = i[e][n];
				this._propagate(a);
			}
		};
	}
};
function Eg(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region ../core/src/data/transforms/formula.js
var Dg = class extends M {
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
}, Og = class extends M {
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
		let a = I(e.chrom), o = B(e.pos).map((e) => I(e)), s = B(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = B(e.offset), l;
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
}, kg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = I(e.field), r = e.as, i = 0, a = this.watchExprRef(e.fontSize, () => {
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
		this.font = this.params.font ? e.getFont(this.params.font, this.params.fontStyle, this.params.fontWeight) : e.getDefaultFont();
	}
};
//#endregion
//#region ../core/src/data/transforms/packLegendLabels.js
function Ag(e, t) {
	let n = Number(e), r = Number.isFinite(n) && n >= 0 ? n : 100, i = Number(t);
	return Math.sqrt(r) + (Number.isFinite(i) ? i : 0);
}
var jg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.labelWidthAccessor = I(e.labelWidth), this.symbolSizeAccessor = typeof e.symbolSize == "string" ? I(e.symbolSize) : () => e.symbolSize ?? 100, this.symbolStrokeWidthAccessor = typeof e.symbolStrokeWidth == "string" ? I(e.symbolStrokeWidth) : () => e.symbolStrokeWidth ?? 0, this.yExtent = void 0;
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
			let n = this.buffer[e], r = t == "horizontal" ? Math.floor(e / d) : e % f, i = t == "horizontal" ? e % d : Math.floor(e / f), o = Ag(this.symbolSizeAccessor(n), this.symbolStrokeWidthAccessor(n)), s = this.labelWidthAccessor(n);
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
}, Mg = 65536, Ng = class extends M {
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
		let e = this.params, t = e.as || "lane", n = E(e.spacing) ? e.spacing : 1, r = I(e.start), i = I(e.end);
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(Mg), o = I(e.preference), s = e.preferredOrder, c = Infinity;
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
			let e = new st(), a = new st(), o = -Infinity, s = 0;
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
}, Pg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let t = e.fields.map((e) => I(e)), n = e.as ? e.as : t.map(Fe);
		this.handle = (e) => {
			let r = {};
			for (let i = 0; i < t.length; i++) r[n[i]] = t[i](e);
			this._propagate(r);
		};
	}
}, Fg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = new RegExp(e.regex), n = typeof e.as == "string" ? [e.as] : e.as, r = I(e.field);
		this.handle = (i) => {
			let a = r(i);
			if (H(a)) {
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
}, Ig = class extends M {
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
			k(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, Lg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = Array.isArray(e.element) ? e.element : [e.element];
		if (t.length == 0) throw Error("\"element\" must contain at least one field.");
		if (e.membership === "") throw Error("\"membership\" must name a non-empty field.");
		this.elementAccessors = t.map((e) => I(e)), this.setAccessor = I(e.set), this.membershipAccessor = e.membership ? I(e.membership) : null, this.#e();
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
}, Rg = class extends M {
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
		let e = this.params, t = e.as || ["y0", "y1"], n = e.sort ? l(e.sort.field, e.sort.order) : void 0, r = e.field ? I(e.field) : () => 1, i = e.groupby.map((e) => I(e)), a = Jn(this.buffer, (e) => i.map((t) => t(e)).join()).map((e) => e[1]), o = (e) => !0;
		if (e.baseField) {
			let t = I(e.baseField);
			o = (e) => t(e) !== null;
		}
		let s, c;
		switch (e.offset) {
			case "normalize":
				s = (e, t) => e / t, c = (e, t) => ga(e, t);
				break;
			case "center":
				s = (e, t) => e - t / 2, c = (e, t) => ga(e, t);
				break;
			case "information":
				{
					let t = Math.log2(e.cardinality ?? 4);
					s = (e, t) => e / t, c = (e, n) => {
						let r = ga(e, (e) => +!o(e)), i = ga(e, n), a = i - r, s = 0;
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
}, zg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = I(e.field ?? "sequence"), [n, r] = e.as ?? ["pos", "sequence"];
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
}, Bg = {
	count: (e) => e.length,
	valid: da,
	sum: ga,
	min: ee,
	max: oe,
	mean: ma,
	q1: (e, t) => xe(e, .25, t),
	median: ha,
	q3: (e, t) => xe(e, .75, t),
	variance: fa
}, Vg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
			if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
			if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
			e.fields.forEach((t, n) => {
				let r = I(t), i = Bg[e.ops[n]];
				this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
			});
		} else this.ops.push((e) => Bg.count(e)), this.as.push("count");
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	#e() {
		let e = this.params?.groupby;
		if (e?.length > 0) {
			let t = e.map((e) => I(e)), n = Yn(this.buffer, ...t);
			for (let [t, r] of bh(n)) {
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
}, Hg = "...";
function Ug(e, t, n, r, i) {
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
var Wg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.accessor = I(e.field), this.as = e.as ?? e.field, this.fontSize = e.fontSize, this.ellipsis = e.ellipsis ?? Hg;
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.fontManager;
		this.font = this.params.font ? e.getFont(this.params.font, this.params.fontStyle, this.params.fontWeight) : e.getDefaultFont();
	}
	handle(e) {
		let t = this.accessor(e);
		t == null ? e[this.as] = "" : e[this.as] = Ug("" + t, this.params.limit, this.font.metrics?.measureWidth, this.fontSize, this.ellipsis), this._propagate(e);
	}
}, Gg = /* @__PURE__ */ new Set([
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
]), Kg = /* @__PURE__ */ new Set([
	"min",
	"max",
	"q1",
	"median",
	"q3"
]), qg = /* @__PURE__ */ new Set(["mean", "variance"]);
function Jg(e, t) {
	let n = t.map(({ op: e }) => e), r = t.map(({ resultIndex: e }) => e), i = t.map(({ op: e }) => Yg(e));
	return ((t, a, o) => {
		let s = new Xg(e, n), c = r.map((e) => o[e]), l = a.starts, u = a.stops, d = 0, f = 0;
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
function Yg(e) {
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
var Xg = class {
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
		this.accessor = e, this.needsSum = t.includes("sum"), this.needsMoments = t.some((e) => qg.has(e)), this.needsOrderedValues = t.some((e) => Kg.has(e)), this.reset();
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
		this.needsOrderedValues && this.values.splice(Qe(this.values, n), 0, n);
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
			let e = Qe(this.values, r);
			if (this.values[e] !== r) throw Error("Window aggregate state is inconsistent.");
			this.values.splice(e, 1);
		}
	}
	q1() {
		return Oe(this.values, .25);
	}
	median() {
		return Oe(this.values, .5);
	}
	q3() {
		return Oe(this.values, .75);
	}
}, Zg = /* @__PURE__ */ new Set([
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
]), Qg = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile"
]);
function $g(e, t, n) {
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
var e_ = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.buffer = [];
		let t = t_(e);
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
		for (let t of u_(e, this.groupAccessors)) this.#t(t);
		for (let t of e) this._propagate(t);
	}
	#t(e) {
		let t = s_(e, this.comparator), n = c_(t, this.comparator, this.frame, this.ignorePeers), r = this.outputFields.map(() => Array(t.length));
		for (let e of this.partitionEvaluators) e(t, n, r);
		i_(t, r, this.outputFields);
	}
};
function t_(e) {
	if (!Array.isArray(e.ops) || e.ops.length == 0) throw Error("The \"ops\" property must contain at least one operation.");
	a_("fields", e.fields, e.ops.length), a_("params", e.params, e.ops.length), a_("as", e.as, e.ops.length);
	let t = e.frame ?? [null, 0];
	if (!Array.isArray(t) || t.length != 2) throw Error("The \"frame\" property must contain exactly two offsets.");
	for (let e of t) if (e != null && (!Number.isInteger(e) || !Number.isFinite(e))) throw Error("Window frame offsets must be integers or null.");
	let n = (e.groupby ?? []).map((e) => I(e)), r = e.sort ? l(e.sort.field, e.sort.order) : void 0, i = [], a = [], o = /* @__PURE__ */ new Map(), s = [], c = [];
	for (let t = 0; t < e.ops.length; t++) {
		let n = n_(e, t);
		if (c.push(n.as), n.kind == "window") {
			let e = $g(n.op, n.accessor, n.parameter);
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
	s.length && i.push(r_(s));
	for (let e of a) i.push(Jg(e.accessor, e.results));
	return {
		frame: t,
		ignorePeers: e.ignorePeers ?? !1,
		comparator: r,
		groupAccessors: n,
		partitionEvaluators: i,
		outputFields: c
	};
}
function n_(e, t) {
	let n = e.ops[t], r = e.fields?.[t] ?? null, i = e.params?.[t], a = Zg.has(n) ? "window" : Gg.has(n) ? "aggregate" : null;
	if (!a) throw Error(`Unsupported window operation: ${n}`);
	if ((a == "window" ? !Qg.has(n) : n != "count") && r == null) throw Error(`Window operation "${n}" requires a field.`);
	if (n == "ntile" || n == "nth_value") {
		if (!Number.isInteger(i) || i <= 0) throw Error(`Window operation "${n}" requires a positive integer parameter.`);
	} else if (i != null && !Number.isFinite(i)) throw Error(`Window operation "${n}" requires a numeric parameter.`);
	let o = e.as?.[t];
	if (o != null && (typeof o != "string" || o.length == 0)) throw Error("Window output field names must be non-empty strings.");
	return {
		op: n,
		kind: a,
		field: r,
		accessor: r == null ? void 0 : I(r),
		parameter: i,
		as: o ?? o_(n, r)
	};
}
function r_(e) {
	let t = e.map(({ resultIndex: e }) => e);
	return (e, n, r) => {
		let i = t.map((e) => r[e]), a = n.starts, o = n.stops;
		for (let t = 0; t < e.length; t++) {
			let e = o[t] - a[t];
			for (let n of i) n[t] = e;
		}
	};
}
function i_(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		for (let e = 0; e < n.length; e++) i[n[e]] = t[e][r];
	}
}
function a_(e, t, n) {
	if (t && t.length != n) throw Error(`The "${e}" property must contain one entry for every window operation.`);
}
function o_(e, t) {
	return t == null ? e : `${e}_${t}`;
}
function s_(e, t) {
	return t ? e.slice().sort(t) : e;
}
function c_(e, t, n, r) {
	let i = e.length, a = Array(i), o = Array(i), s = Array(i), c = Array(i);
	if (t) {
		let n = 0;
		for (let r = 1; r <= i; r++) if (r == i || t(e[n], e[r]) != 0) {
			for (let e = n; e < r; e++) a[e] = n, o[e] = r;
			n = r;
		}
	} else for (let e = 0; e < i; e++) a[e] = e, o[e] = e + 1;
	for (let e = 0; e < i; e++) {
		let l = n[0] == null ? 0 : l_(e + n[0], 0, i), u = n[1] == null ? i : l_(e + n[1] + 1, 0, i);
		t && !r && (l > 0 && l < i && a[l] != l && (l = a[l]), u > 0 && u < i && (u = o[u - 1])), l > u && (u = l), s[e] = l, c[e] = u;
	}
	return {
		starts: s,
		stops: c,
		peerStarts: a,
		peerStops: o
	};
}
function l_(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function u_(e, t) {
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
var d_ = {
	aggregate: Vg,
	alignmentMismatches: ig,
	collect: Mh,
	coverage: dg,
	displace1d: pg,
	filterScoredLabels: gg,
	filter: _g,
	flatten: bg,
	flattenCigar: wg,
	flattenCompressedExons: Cg,
	flattenDelimited: Tg,
	flattenSequence: zg,
	formula: Dg,
	identifier: a,
	linearizeGenomicCoordinate: Og,
	measureText: kg,
	packLegendLabels: jg,
	pileup: Ng,
	project: Pg,
	regexExtract: Fg,
	regexFold: Ig,
	sample: tf,
	setIntersection: Lg,
	truncateText: Wg,
	window: e_,
	stack: Rg
};
function f_(e, t, n) {
	if (e.type == "lookup") {
		let t = e;
		if (!n && !Wh(t)) throw Error("Lookup transform requires a foreign collector.");
		return new Uh(t, n?.collector);
	} else if (e.type == "coordinateLookup") {
		if (!n || !t) throw Error("Coordinate lookup requires a view and a foreign data source.");
		return new og(e, n.collector, n.source, t);
	} else if (e.type == "cross") {
		if (!n) throw Error("Cross transform requires a foreign collector.");
		return new cg(e, n.collector);
	}
	let r = d_[e.type];
	if (r) return new r(e, t);
	throw Error("Unknown transform: " + e.type);
}
//#endregion
//#region ../core/src/data/sources/urlSource.js
var p_ = /* @__PURE__ */ new Set(["application/gzip", "application/x-gzip"]), m_ = new TextDecoder(), h_ = class extends J {
	#e;
	constructor(e, t) {
		super(t), this.params = Ge(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.baseUrl = t?.getBaseUrl(), this.#e = new wc(this, {
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
		let t = y(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" }, r = await fetch(t);
		if (!r.ok) throw Error(`Cannot load "${t}": ${r.status} ${r.statusText}`);
		return ro(await S_(r, t, Jc(n.type)), qc(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => y(t, e));
	}
	async load() {
		this.setLoadingStatus("loading"), this.reset();
		try {
			let e = N(this.params.url), t = typeof e == "object" && "urlsFromFile" in e ? (await this.#t(e)).map((e) => ({ url: e })) : await this.#e.normalize(), n = t.map((e) => e.url);
			if (n.length > 0 && n[0]) {
				let e = Kc(this.params, n), r = Jc(e.type), i = async (e) => {
					try {
						let t = await fetch(e);
						if (!t.ok) throw Error(`${t.status} ${t.statusText}`);
						return await S_(t, e, r);
					} catch (t) {
						throw Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t });
					}
				}, a = async (t, n) => {
					try {
						let r = ro(t, qc(e)), i = r instanceof Promise ? await r : r;
						this.beginBatch({
							type: "file",
							url: n.url
						});
						let a = rc(n.fields);
						for (let e of i) this._propagate(a(e));
					} catch (e) {
						throw console.warn(e), Error(`Cannot parse: ${n.url}: ${e.message}`, { cause: e });
					}
				}, o = await Promise.all(t.map((e) => oc(e, async () => ({
					descriptor: e,
					content: await i(e.url)
				}))));
				await Promise.all(o.map((e) => e ? a(e.content, e.descriptor) : void 0));
			}
			this.setLoadingStatus("complete");
		} catch (e) {
			e instanceof $s ? this.setLoadingStatus("complete") : this.setLoadingStatus("error", e.message);
		}
		this.complete();
	}
};
function g_(e) {
	return "url" in e;
}
function __(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && (e[3] & 224) == 0;
}
function v_(e) {
	return e ? p_.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function y_(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function b_(e) {
	return new Uint8Array(e).buffer;
}
async function x_(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(b_(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function S_(e, t, n) {
	if (!(Xc(t) || v_(e.headers.get("content-type")) || y_(e.headers.get("content-encoding")))) return C_(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return w_(__(r) ? await x_(r) : r, n);
}
function C_(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function w_(e, t) {
	return t == "arrayBuffer" ? b_(e) : m_.decode(e);
}
//#endregion
//#region ../core/src/data/sources/sequenceSource.js
function T_(e) {
	return "sequence" in e;
}
var E_ = class extends J {
	constructor(e, t) {
		if (super(t), this.sequence = Ge(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = N(this.sequence.as) ?? "data", t = N(this.sequence.start) ?? 0, n = N(this.sequence.step) ?? 1, r = N(this.sequence.stop);
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
function D_(e, t) {
	if (Hc(e)) return new Uc(e, t);
	if (g_(e)) return new h_(e, t);
	if (T_(e)) return new E_(e, t);
	if (O_(e)) return es(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function O_(e) {
	return "lazy" in e;
}
//#endregion
//#region ../core/src/data/transforms/clone.js
var k_ = class extends M {
	get behavior() {
		return 1;
	}
	#e = zh();
	constructor() {
		super({ type: "clone" }), this.handle = (e) => this._propagate(this.#e(e)), this.beginBatch = (e) => {
			this.#e.reset(), super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/sources/namedSource.js
function A_(e) {
	return "name" in e;
}
var j_ = class extends J {
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
		Array.isArray(e) && e.length > 0 && (t = Qc(e[0])), this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, M_ = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new Nl();
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
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof J ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof j_ && e === n.identifier) {
			if (t && t !== n) throw Error(`Named data "${e}" is ambiguous across scoped datasets. Use the dataset owner's ViewHandle.datasets.set() method.`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
	updateNamedDataBinding(e, t) {
		e.beginUpdate(), t === void 0 ? e.resetData() : e.setData(t);
		for (let t of this.#e.values()) t instanceof j_ && t.binding === e && t.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/utils/trees.js
function N_(e, t) {
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
function P_(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = P_(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function F_(e, t) {
	return P_(e, t, (e) => e.children);
}
//#endregion
//#region ../core/src/view/flowBuilder.js
function I_(e, t, n, r) {
	let i = [], o = [], s, c = t ?? new M_(), l = [], u = r ?? (() => !0);
	function d(e, t = () => void 0) {
		if (!s) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return s.addChild(e), s = e, i.push(e), e;
	}
	function f(e, t) {
		return d(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function p(e, t) {
		e.behavior & 2 && t(new k_()), t(e);
	}
	function m(e, t) {
		for (let n of e) {
			let e, r;
			try {
				let i = Xh(n);
				i && (r = h(i.data, i.transforms, t)), e = f_(n, t, r);
			} catch (e) {
				throw r && g(t, r.collector), console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			p(e, f), r && e.registerDisposer(() => g(t, r.collector));
		}
	}
	function h(e, t, n) {
		let r = A_(e) ? new j_(e, n) : D_(e, n), i = r;
		try {
			for (let e of t) {
				if (Yh(e)) throw Error("Transforms with side inputs cannot be used in a side-input transform pipeline.");
				p(f_(e, n), (e) => {
					i.addChild(e), i = e;
				});
			}
		} catch (e) {
			throw r.disposeSubtree(), e;
		}
		let a = new Mh({ type: "collect" });
		return i.addChild(a), c.addDataSource(r), c.addCollector(a), n.flowHandle ??= {}, n.flowHandle.auxiliaryCollectors ??= /* @__PURE__ */ new Set(), n.flowHandle.auxiliaryCollectors.add(a), {
			collector: a,
			source: r
		};
	}
	function g(e, t) {
		e.flowHandle?.auxiliaryCollectors?.delete(t), c.pruneCollectorBranch(t), c.removeCollector(t);
	}
	function _() {
		return i.findLastIndex((e) => e instanceof a) > i.findLastIndex((e) => e instanceof J);
	}
	let v = (e) => {
		if (!u(e)) {
			let t = e.flowHandle?.node;
			if (t) {
				t !== s && (s = t, i.push(t));
				return;
			}
			if (e.spec.data || e.spec.transform || e instanceof Y) throw Error("Cannot reuse missing flow nodes for " + e.getPathString());
			return;
		}
		if (e.spec.data) {
			let t = e.flowHandle?.dataSource;
			t && t.view === e && !t.shareKey && c.removeDataSource(t);
			let n = A_(e.spec.data) ? new j_(e.spec.data, e) : D_(e.spec.data, e);
			s = n, i.push(n), c.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
		}
		if (e.spec.transform && m(e.spec.transform, e), e instanceof Y) {
			if (!s) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
			let t = R_(e);
			if (t) {
				l.push(t.rewrite);
				for (let e of t.transforms) f(e);
			}
			e.mark.isPickingParticipant() && !_() && (f(new k_()), f(new a({ type: "identifier" })));
			let n = new Mh({
				type: "collect",
				groupby: e.getFacetFields(),
				sort: z_(e, t?.rewrittenEncoding)
			});
			d(n);
			let r = e.flowHandle?.collector;
			r && c.removeCollector(r), c.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
		}
		s && (e.flowHandle ??= {}, e.flowHandle.node = s);
	}, y = N_(L_(e, n), (e) => e.dataParent);
	for (let e of y) F_(e, {
		preOrder: (e) => {
			o.push({
				view: e.ref,
				nodeStackDepth: i.length
			}), v(e.ref);
		},
		postOrder: () => {
			let { nodeStackDepth: e } = o.pop();
			i.length = e, s = i.at(-1);
		}
	});
	return l.forEach((e) => e()), c;
}
function L_(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return mt;
		n.push(e);
	}), n;
}
function R_(e) {
	let t = [], n = {}, r = e.mark.encoding, a = e.getEncoding(), o = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		Ct(n) !== n && !(n in a) || bt(n) && !Array.isArray(t) && jt(t) && o.push({
			channel: n,
			chromPosDef: t
		});
	}
	let s = Yn(o, (e) => Ct(e.channel), (e) => e.chromPosDef.chrom);
	for (let [i, o] of s.entries()) for (let [s, c] of o.entries()) {
		let o = [], l = [], u = [];
		for (let { channel: t, chromPosDef: i } of c) {
			let s = (e) => e.replace(/[^A-Za-z0-9_]/g, ""), c = [
				"_linearized_",
				s(i.chrom),
				"_",
				s(i.pos)
			].join(""), d = {
				...e.spec.encoding?.[t] ?? a[t] ?? r[t] ?? {},
				field: c
			};
			delete d.chrom, delete d.pos, !d.type && i.type && (d.type = i.type), n[t] = d, o.push(i.pos), u.push(i.offset ?? 0), l.push(c);
		}
		t.push(new k_()), t.push(new Og({
			type: "linearizeGenomicCoordinate",
			channel: i,
			chrom: s,
			pos: o,
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
			}, i(e.mark, "encoding");
		}
	} : void 0;
}
function z_(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x;
	if (Sn(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (P(n)) return "buildIndex" in n && n.buildIndex ? { field: n.field } : null;
		if (!nn(n) && Ft(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
function B_(e, ...t) {
	let n = e;
	for (let e of t) n.addChild(e), n = e;
	let r;
	n instanceof Mh ? r = n : (r = new Mh(), n.addChild(r));
	let i;
	return i = e instanceof J ? async () => (await e.load(), r.getData()) : async () => {
		throw Error("The root node is not derived from DataSource!");
	}, {
		dataSource: e,
		collector: r,
		loadAndCollect: i
	};
}
//#endregion
//#region ../core/src/data/flowOptimizer.js
function V_(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!V_(t, e)) return !1;
	return !0;
}
function H_(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof k_) if (t) t = !1;
	else {
		let n = e.children[0];
		e.excise(), n && H_(n, t);
		return;
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) H_(e.children[n], t || r > 1);
}
function U_(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.shareKey && !n.has(e.shareKey) && n.set(e.shareKey, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.shareKey) {
		let t = n.get(e.shareKey);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function W_(e) {
	if (H_(e), !V_(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function G_(e) {
	let t = U_(e);
	for (let t of e.dataSources) W_(t);
	return t;
}
//#endregion
//#region ../core/src/data/flowInit.js
var K_ = /* @__PURE__ */ new WeakMap(), q_ = /* @__PURE__ */ new WeakMap();
function J_(e, t) {
	let n = K_.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = q_.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => J_(e)).finally(() => {
			q_.delete(e);
		});
		return q_.set(e, i), i;
	}
	let r = Promise.resolve().then(() => (e.activate(), e.load())).finally(() => {
		K_.delete(e);
	});
	return K_.set(e, r), r;
}
function Y_(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r);
	}
}
function X_(e) {
	for (; e && !(e instanceof J);) e = e.parent;
	return e instanceof J ? e : void 0;
}
function Z_(e, t, n, r) {
	let i = r ?? (() => !0), a = rv(e, n).filter(i);
	if (a.length === 0) return {
		dataFlow: t,
		unitViews: [],
		dataSources: /* @__PURE__ */ new Set(),
		graphicsPromises: []
	};
	let o = new Set(a);
	for (let e of a) e._setDataInitializationState("pending");
	let s;
	try {
		s = I_(e, t, n, (e) => o.has(e)), Y_(e, G_(s));
	} catch (e) {
		for (let e of a) e._setDataInitializationState("none");
		throw e;
	}
	let c = Q_(a);
	for (let e of c) e.visit((e) => e.initializeOnce());
	let l = a.filter((e) => e instanceof Y), u = [], d = !!e.context.glHelper;
	for (let e of l) {
		let t = e.mark;
		t.initializeEncoders(), e.registerDomainSubscriptions(), d && u.push(t.initializeGraphics().then(() => t)), e.registerDisposer(e.flowHandle.collector.observe((n) => {
			if (t.initializeData(), d) try {
				t.updateGraphicsData();
			} catch (t) {
				throw t.view = e, t;
			}
			e.context.animator.requestRender();
		}));
	}
	for (let e of a) e._setDataInitializationState("ready");
	return {
		dataFlow: s,
		unitViews: l,
		dataSources: c,
		graphicsPromises: u
	};
}
function Q_(e, t) {
	let n = Array.isArray(e) ? e : rv(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource), tv(e, r);
	}
	return r;
}
function $_(e, t) {
	let n = /* @__PURE__ */ new Set();
	return ev(e, n, t), e.visit((e) => {
		if (t && !t(e)) return mt;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), mt;
	}), n;
}
function ev(e, t, n) {
	for (let r of rv(e, n)) tv(r, t);
}
function tv(e, t) {
	for (let n of e.flowHandle?.auxiliaryCollectors ?? []) {
		let e = X_(n);
		e && t.add(e);
	}
}
function nv(e, t, n, r) {
	t ||= $_(e, n);
	let i = /* @__PURE__ */ new Set();
	ev(e, i, n);
	let a = Array.from(t).filter((e) => i.has(e)), o = Array.from(t).filter((e) => !i.has(e));
	return Promise.all(a.map((e) => J_(e, r))).then((e) => Promise.all(o.map((e) => J_(e, r))).then((t) => e.concat(t))).then((t) => (iv(e), t));
}
function rv(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return mt;
		n.push(e);
	}), n) : e.getDescendants();
}
function iv(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region ../core/src/genomeSpy/viewDataInit.js
async function av(e, t, n, r) {
	let i = (e) => e.isConfiguredVisible(), { dataFlow: a, graphicsPromises: o } = Z_(e, t, i);
	return r(a), await n.waitUntilReady(), e.invalidateSizeCache(), await gh(o), await nv(e, new Set(a.dataSources), i), a;
}
async function ov(e, t, n) {
	return sv(e, t, n, cv(e, (e) => e.isConfiguredVisible()).filter((e) => e.getDataInitializationState() === "none"));
}
async function sv(e, t, n, r) {
	let i = new Set(r), a = (e) => e.isConfiguredVisible(), o = cv(e, a).filter((e) => i.has(e) && e.getDataInitializationState() === "none");
	if (o.length === 0) return t;
	let s = new Set(o), c = (e) => s.has(e), l = /* @__PURE__ */ new Set(), u = [];
	for (let e of o) {
		if (e.spec.data || e.spec.transform?.some(Yh)) {
			u.push(e);
			continue;
		}
		let t = uv(e);
		t ? l.add(t) : u.push(e);
	}
	let { dataFlow: d, graphicsPromises: f } = Z_(e, t, a, c);
	await n.waitUntilReady(), e.invalidateSizeCache(), await gh(f);
	for (let e of l) e.repropagate();
	if (u.length) {
		let e = lv(u);
		await Promise.all(Array.from(e.entries()).map(([e, t]) => nv(e, t, void 0, { queueReload: !0 })));
	}
	return iv(e), d;
}
function cv(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return mt;
		n.push(e);
	}), n;
}
function lv(e) {
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
			let t = X_(e);
			t && r.add(t);
		}
	}
	return t;
}
function uv(e) {
	let t = e.dataParent;
	for (; t;) {
		let e = t.flowHandle?.collector;
		if (e) return e.completed ? e : void 0;
		t = t.dataParent;
	}
}
//#endregion
//#region ../core/src/genome/genomeStore.js
var dv = class {
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
			let e = fv(r);
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
			return new Hf({ name: e });
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
		let r = new Hf({
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
			let n = new Hf({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new Hf({
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
		let r = new Hf({
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
function fv(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
var pv = {
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
}, mv = "data:image/png;base64,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", hv = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
}, gv = {
	family: "Lato",
	style: "normal",
	weight: 400
}, _v = class {
	constructor(e) {
		this._webGLHelper = e, this.fontRepository = "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/", this._fonts = new Hn([], JSON.stringify), this._metadataPromises = /* @__PURE__ */ new Map(), this._fontPromises = /* @__PURE__ */ new Map(), this._promises = [], this._defaultFontEntry = {
			metrics: vr(pv),
			texture: e ? this._createTextureNow(mv) : void 0
		}, this._fonts.set(gv, this._defaultFontEntry);
	}
	async waitUntilReady() {
		await Promise.all(this._promises);
	}
	getFont(e = gv.family, t = "normal", n = 400) {
		let r = vv(e, t, n), i = this._fonts.get(r);
		return i || (i = {
			metrics: void 0,
			texture: void 0
		}, this._fonts.set(r, i), this._promises.push(this._loadFontEntry(i, r))), i;
	}
	async _loadFontEntry(e, t) {
		try {
			let n = Sv(await this._loadMetadata(t.family), t), r = this.fontRepository + bv(t.family) + "/" + n.replace(/\.\w+/, ""), i = this._createTexture(r + ".png"), a = this._loadFont(r + ".json");
			e.texture = await i, e.metrics = await a;
		} catch {
			console.warn(`Cannot load font: "${t.family}". Using the embedded default font.`), e.metrics = this._defaultFontEntry.metrics, e.texture = this._defaultFontEntry.texture;
		}
	}
	_loadFont(e) {
		let t = this._fontPromises.get(e);
		return t || (t = fetch(e).then((e) => {
			if (!e.ok) throw Error("Could not load font: " + e.status);
			return e;
		}).then((e) => e.json()).then((e) => vr(e)), this._fontPromises.set(e, t)), t;
	}
	_loadMetadata(e) {
		let t = bv(e), n = this._metadataPromises.get(t);
		if (!n) {
			let e = this.fontRepository + t + "/METADATA.pb";
			n = fetch(e).then((t) => {
				if (!t.ok) throw Error("Could not load font metadata. Response status: " + t.status + ", url: " + e);
				return t;
			}).then((e) => e.text()).then((e) => xv(e)).catch((e) => {
				console.warn(e.message);
			}), this._metadataPromises.set(t, n);
		}
		return n;
	}
	getDefaultFont() {
		return this._defaultFontEntry;
	}
	_createTexture(e) {
		let t = this._webGLHelper.gl;
		return new Promise((n, r) => {
			ar(t, {
				src: e,
				min: t.LINEAR
			}, (e, t, i) => {
				e ? r(e) : n(t);
			});
		});
	}
	_createTextureNow(e) {
		let t = this._webGLHelper.gl, n, r = new Promise((r, i) => {
			n = ar(t, {
				src: e,
				min: t.LINEAR
			}, (e, t, n) => {
				e ? i(e) : r(t);
			});
		});
		return this._promises.push(r), n;
	}
};
function vv(e, t, n) {
	return {
		family: e.toLowerCase() == "sans-serif" ? gv.family : e,
		style: t,
		weight: yv(n)
	};
}
function yv(e) {
	if (H(e)) {
		let t = hv[e.toLowerCase()];
		if (!t) throw Error("Unknown font weight: " + e);
		return t;
	}
	return e;
}
function bv(e) {
	return e.toLowerCase().replaceAll(/[^\w]/g, "");
}
function xv(e) {
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
function Sv(e, t) {
	let n, r = Infinity;
	for (let i of e) if (t.family.localeCompare(i.name, void 0, { sensitivity: "accent" }) == 0 && t.style == i.style) {
		let e = Math.abs(t.weight - i.weight);
		e < r && (r = e, n = i);
	}
	return n?.filename;
}
//#endregion
//#region ../core/src/tooltip/refseqGeneTooltipHandler.js
var Cv = /* @__PURE__ */ new Map(), wv = { Organism: "Homo sapiens" };
async function Tv(e, t, n = {}) {
	let r = e.symbol, i = {
		...wv,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = Cv.get(r) ?? await Ov(i);
	return a ? (Cv.set(r, a), W`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function Ev(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: kv(e),
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
var Dv = bc(Ev, 500);
function Ov(e) {
	return Dv(e);
}
function kv(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region ../core/src/utils/formatObject.js
var Av = L(".4~r"), jv = L(".4~e");
function Mv(e) {
	return e == null ? W` <span class="na">NA</span> ` : H(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : E(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? jv(e) : Av(e) : qe(e) ? e ? "True" : "False" : O(e) ? W`${e.map((t, n) => [Mv(t), n < e.length - 1 ? ", " : G])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region ../core/src/tooltip/flattenDatumRows.js
function Nv(e) {
	let t = [];
	return Pv(Object.entries(e), t), t;
}
function Pv(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? Pv(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region ../core/src/tooltip/configuredTooltipRows.js
var Fv = /* @__PURE__ */ new WeakMap();
function Iv(e, t) {
	let n = t.encoding.tooltip;
	if (n === void 0) return;
	if (n === null) return [];
	let r = Array.isArray(n) ? n : [n];
	if (r.length === 0) throw Error("The tooltip channel array must not be empty.");
	return r.map((n) => Lv(e, t, n));
}
function Lv(e, t, n) {
	let r = Rv(t, n), i = r(e), a = "format" in n && n.format && typeof i == "number" && Number.isFinite(i) ? L(n.format)(i) : i;
	return {
		key: zv(n),
		value: a,
		...r.sourceField ? { sourceField: r.sourceField } : {},
		...a === i ? {} : { formatted: !0 }
	};
}
function Rv(e, t) {
	let n = Fv.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), Fv.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = b("tooltip", t, e.unitView.paramRuntime);
	return "field" in t && (i.sourceField = t.field), n.set(t, i), i;
}
function zv(e) {
	if ("title" in e && e.title !== void 0) return e.title === null ? "" : e.title;
	if ("field" in e) return e.field;
	if ("expr" in e) return e.expr;
	if ("datum" in e) return "datum";
	if ("value" in e) return "value";
	throw Error("Invalid tooltip channel definition: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/tooltip/tooltipContext.js
var Bv = {
	x: "x2",
	y: "y2"
}, Vv = /* @__PURE__ */ new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), Hv = /* @__PURE__ */ new WeakMap();
function Uv(e, t, n) {
	let r = Wv(t), i = Kv("x", e, t, r, iy(n, "x")), a = Kv("y", e, t, r, iy(n, "y")), o = i.rows.length > 0 && a.rows.length > 0, s = [...o ? Gv("x", i.rows) : i.rows, ...o ? Gv("y", a.rows) : a.rows], c = /* @__PURE__ */ new Set();
	for (let n of [i, a]) for (let i of n.usedLinearizedFields) {
		let n = r.get(i);
		!n || n.ambiguous || ay(e, i, n, t) && (c.add(n.chrom), c.add(n.pos));
	}
	return {
		tooltipRows: Iv(e, t),
		hiddenRowKeys: [...c],
		genomicRows: s,
		flattenDatumRows: () => Nv(e),
		formatGenomicLocus: (e, n) => ty(t, e, n),
		formatGenomicInterval: (e, n) => ny(t, e, n)
	};
}
function Wv(e) {
	let t = Hv.get(e);
	if (t) return t;
	let n = $v(e);
	return Hv.set(e, n), n;
}
function Gv(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function Kv(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = Qv(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = Qv(n, Bv[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? qv(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = Yv(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: ty(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: ty(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: ny(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: ty(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function qv(e, t, n) {
	if (!t || e.value === t.value) return "locus";
	let r = Jv(e.field, n), i = Jv(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function Jv(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function Yv(e, t, n) {
	let r = Xv(e.field, n), i = Xv(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function Xv(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = Zv(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function Zv(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function Qv(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = ln(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function $v(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = B(e.as), i = B(e.pos), a = ey(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
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
function ey(e, t) {
	let n = B(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function ty(e, t, n) {
	return ry(e, t)?.formatLocus(n);
}
function ny(e, t, n) {
	return ry(e, t)?.formatInterval(n);
}
function ry(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function iy(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!Vv.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function ay(e, t, n, r) {
	let i = ry(r, n.channel);
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
async function oy(e, t, n, r) {
	let i = (e) => kt(e).join("."), a = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), o = (e, n, r) => {
		for (let [o, s] of Object.entries(t.encoders)) {
			let t = s ? ln(s)?.fields : void 0;
			if (t && t.some((t) => t === e || i(t) === e)) switch (o) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? a(n) ? W`
                                <span
                                    class="color-legend color-legend-unmapped"
                                ></span>
                            ` : "" : W`
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
	}, s = r ?? Uv(e, t, n), c = s.tooltipRows ? s.tooltipRows : s.flattenDatumRows ? s.flattenDatumRows() : Nv(e), l = s.genomicRows ?? [], u = new Set(s.hiddenRowKeys ?? []), d = c.filter((t) => !u.has(t.key) || o(t.sourceField ?? t.key, t.value, e)), f = [...l, ...d];
	if (!f.length) return;
	let p = W`
        <table class="attributes">
            ${f.map((t) => {
		let n = t.formatted ? t.value : Mv(t.value), r = o(t.sourceField ?? t.key, t.value, e);
		return W`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, m = t.unitView.getTitleText();
	return W`${m ? W`
              <div class="title">
                  <strong>${m}</strong>
              </div>
          ` : ""}${p}`;
}
//#endregion
//#region ../core/src/genome/assemblyPreflight.js
function sy(e) {
	let t = [], n = !1, r = ly(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function cy(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = sy(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function ly(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), Rt(e, r), t;
}
//#endregion
//#region ../core/src/scales/viewLevelScaleProps.js
function uy(e) {
	let t = [];
	for (let n of e.getDescendants()) {
		let e = n.spec.scales;
		if (e) for (let [r, i] of Object.entries(e)) t.push(py(n, r, i));
	}
	return t;
}
function dy(e) {
	fy(e);
	let t = uy(e);
	for (let e of t) e.resolution && e.resolution.attachViewLevelScaleProps(e.view, e.props);
	return t;
}
function fy(e) {
	let t = new Set(e.getDescendants()), n = hy(e);
	for (let e of n) {
		let n = e.getViewLevelScaleProps();
		n && t.has(n.view) && e.clearViewLevelScaleProps(n.view);
	}
}
function py(e, t, n) {
	let r = my(e, t);
	if (r.size > 1) throw Error(`View-level scales.${t} maps to multiple scale resolutions. Move scales.${t} closer to the intended subtree or configure scale resolution explicitly.`);
	return {
		view: e,
		channel: t,
		props: n,
		resolution: r.values().next().value
	};
}
function my(e, t) {
	let n = /* @__PURE__ */ new Set();
	return Pt(e, (r) => {
		if (r !== e && r.getConfiguredOrDefaultResolution(t, "scale") === "excluded") return mt;
		let i = r.getScaleResolution(t);
		i && n.add(i);
	}), n;
}
function hy(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getDescendants()) for (let e of Object.values(n.resolutions.scale)) t.add(e);
	return t;
}
//#endregion
//#region ../core/src/scales/viewLevelGuideProps.js
var gy = {
	declarationKey: "axes",
	resolutionType: "axis",
	getResolution: (e, t) => e.getAxisResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.axis),
	attach: (e, t, n) => e.attachViewLevelAxisProps(t, n),
	getAttachedProps: (e) => e.getViewLevelAxisProps(),
	clear: (e, t) => e.clearViewLevelAxisProps(t)
}, _y = {
	declarationKey: "legends",
	resolutionType: "legend",
	getResolution: (e, t) => e.getLegendResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.legend),
	attach: (e, t, n) => e.attachViewLevelLegendProps(t, n),
	getAttachedProps: (e) => e.getViewLevelLegendProps(),
	clear: (e, t) => e.clearViewLevelLegendProps(t)
};
function vy(e) {
	return xy(e, gy);
}
function yy(e) {
	return xy(e, _y);
}
function by(e) {
	Ty(e, gy), Ty(e, _y);
}
function xy(e, t) {
	Ty(e, t);
	let n = Sy(e, t);
	for (let e of n) e.resolution && t.attach(e.resolution, e.view, e.props);
	return n;
}
function Sy(e, t) {
	let n = [];
	for (let r of e.getDescendants()) {
		let e = r.spec[t.declarationKey];
		if (e) for (let [i, a] of Object.entries(e)) n.push(Cy(r, t, i, a));
	}
	return n;
}
function Cy(e, t, n, r) {
	let i = wy(e, t, n);
	if (i.size > 1) throw Error(`View-level ${t.declarationKey}.${n} maps to multiple ${t.resolutionType} resolutions. Move ${t.declarationKey}.${n} closer to the intended subtree or configure ${t.resolutionType} resolution explicitly.`);
	return {
		view: e,
		channel: n,
		props: r,
		resolution: i.values().next().value
	};
}
function wy(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	return Pt(e, (i) => {
		if (i !== e && i.getConfiguredOrDefaultResolution(n, t.resolutionType) === "excluded") return mt;
		let a = t.getResolution(i, n);
		a && r.add(a);
	}), r;
}
function Ty(e, t) {
	let n = new Set(e.getDescendants()), r = Ey(e, t);
	for (let e of r) {
		let r = t.getAttachedProps(e);
		r && n.has(r.view) && t.clear(e, r.view);
	}
}
function Ey(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e.getDescendants()) for (let e of t.getAllResolutions(r)) n.add(e);
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/viewHierarchyConfig.js
function Dy(e) {
	mh(e), hh(e);
}
function Oy(e) {
	ky(e.getDescendants());
}
function ky(e) {
	for (let t of e) t.configurePostScaleParams(), t.configureViewOpacity(), t.finalizeParamRuntimeInitialization();
}
//#endregion
//#region ../core/src/view/containerMutationHelper.js
function Ay(e) {
	return typeof e == "object" && !!e && typeof e.getChildren == "function";
}
var jy = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n, insertAt: r, removeAt: i } = this.options.getChildSpecs(), a = t ?? n.length, o = this.options.defaultName?.(a, e) ?? this.container.getNextAutoName("child"), s = !1, c = !1, l = await this.container.context.createOrImportView(e, this.container, this.container, o, void 0, this.options.createViewOptions);
		try {
			r(a, e), s = !0;
			let t = this.options.insertView(l, a);
			c = !0, dy(this.container), vy(this.container), yy(this.container), await cy(l, this.container.context.genomeStore), this.options.prepareView && await this.options.prepareView(l, a, t);
			let n = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(l, a, t) : void 0, i = My(this.container, l, t, n);
			ky(i), await sv(this.container, this.container.context.dataFlow, this.container.context.fontManager, i);
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
		fy(this.container), by(this.container), this.options.removeView(e), n(e), this.options.afterRemove && await this.options.afterRemove(e), dy(this.container), vy(this.container), yy(this.container);
		let r = this.options.syncMutationGuideViews ? await this.options.syncMutationGuideViews(void 0, void 0, void 0) : void 0;
		await this.initializeUninitializedChromeViews(r), this.options.requestLayout !== !1 && t.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
	}
	async initializeUninitializedChromeViews(e = [this.container]) {
		if (this.container.getDataInitializationState() === "none") return;
		let t = /* @__PURE__ */ new Set();
		for (let n of e) Ny(n, t);
		ky(t), await sv(this.container, this.container.context.dataFlow, this.container.context.fontManager, t);
	}
};
function My(e, t, n, r) {
	let i = Py(t, n);
	for (let t of r ?? [e]) Ny(t, i);
	return i;
}
function Ny(e, t = /* @__PURE__ */ new Set()) {
	for (let n of e.getDescendants()) if (Mn(n) && n.getDataInitializationState() === "none") for (let e of n.getDescendants()) e.getDataInitializationState() === "none" && t.add(e);
	return t;
}
function Py(e, t) {
	return Ay(t) ? new Set(Array.from(t.getChildren()).flatMap((e) => e.getDescendants())) : new Set(e.getDescendants());
}
//#endregion
//#region ../core/src/view/multiscale.js
var Fy = .5;
function Iy(e) {
	return "multiscale" in e && O(e.multiscale);
}
function Ly(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = Ry(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => {
		if (e.multiscale.length === 1) return n;
		let i = {
			...By(r, e.multiscale.length, t),
			layer: [n]
		};
		return t.transition && yt(i, [{
			name: "multiscaleOpacity",
			expr: Vy(r, e.multiscale.length, t),
			transition: t.transition
		}]), i;
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function Ry(e, t) {
	let n = "unitsPerPixel", r, i = "auto", a = Fy, o;
	if (O(e)) r = zy(e, t, "stops");
	else if (A(e)) n = e.metric ?? "unitsPerPixel", r = zy(e.values, t, "stops.values"), i = e.channel ?? "auto", o = e.transition, a = o ? Fy : e.fade ?? Fy;
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
		if (!v(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !r.some(v)) {
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
function zy(e, t, n) {
	if (!O(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!v(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function By(e, t, n) {
	return n.transition ? { opacity: { expr: "multiscaleOpacity" } } : { opacity: Uy(e, t, n) };
}
function Vy(e, t, n) {
	let r = n.channel === "x" ? "width" : "height", i = `abs(span(domain('${n.channel}'))) / max(${r}, 1)`;
	return e === 0 ? i + " >= " + Hy(n.values[0]) + " ? 1 : 0" : e === t - 1 ? i + " < " + Hy(n.values.at(-1)) + " ? 1 : 0" : i + " < " + Hy(n.values[e - 1]) + " && " + i + " >= " + Hy(n.values[e]) + " ? 1 : 0";
}
function Hy(e) {
	return v(e) ? "(" + e.expr + ")" : String(e);
}
function Uy(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: Wy(e, 1 + n.fade),
		lo: Wy(e, 1 - n.fade)
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
function Wy(e, t) {
	return v(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region ../core/src/view/viewSpecGuards.js
function Gy(e) {
	return "mark" in e && (H(e.mark) || A(e.mark));
}
function Ky(e) {
	return "layer" in e && A(e.layer);
}
function qy(e) {
	return "import" in e;
}
function Jy(e) {
	return "vconcat" in e && O(e.vconcat);
}
function Yy(e) {
	return "hconcat" in e && O(e.hconcat);
}
function Xy(e) {
	return "concat" in e && O(e.concat);
}
//#endregion
//#region ../core/src/view/layerView.js
var X = class extends br {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e, this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		this.#e = await Promise.all(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!Ky(e) && !Gy(e) && !Iy(e)) throw new He("LayerView accepts only unit, layer, or multiscale specs as children!", this);
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
		vn(this.spec.layer, e, t), vn(this.#e, e, t), this.context.requestLayoutReflow();
	}
	#t() {
		return new jy(this, {
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
	*[Symbol.iterator]() {
		for (let e of this.#e) yield e;
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.render(e, t, n);
			e.popView(this);
		}
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0);
		for (let t = this.#e.length - 1; t >= 0; t--) if (this.#e[t].propagateInteraction(e), e.stopped) return;
		this.handleInteraction(e, !1);
	}
}, Zy = class {
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
}, Qy = {
	x: "axisX",
	y: "axisY"
}, $y = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, eb = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function tb(e, { channel: t, orient: n, type: r, style: i }) {
	let a = jm();
	for (let [o, s] of e.entries()) {
		let c = Qy[t], l = n ? $y[n] : void 0, u = r ? eb[r] : void 0, d = e.slice(0, o + 1), f = [
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
var nb = "chromosome_ticks_and_labels", rb = "labels_main", ib = "ticks_and_labels", ab = "axisExtent", ob = "_labelWidth", sb = 10, cb = 2;
function lb(e) {
	return e == "x" ? "y" : "x";
}
var ub = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, db = Object.fromEntries(Object.entries(ub).map(([e, t]) => t.map((t) => [t, e])).flat(1));
function fb(e) {
	return db[e];
}
function pb(e) {
	switch (e) {
		case "left": return "right";
		case "right": return "left";
		case "top": return "bottom";
		case "bottom": return "top";
		default: throw Error("Invalid axis orient: " + e);
	}
}
function mb(e) {
	let t = e.placement === "inside" ? pb(e.orient) : e.orient;
	return {
		tickSide: t,
		anchor: +(t == "bottom" || t == "left"),
		offsetDirection: t == "bottom" || t == "right" ? 1 : -1
	};
}
function hb(e) {
	return !e || e.axisProps.placement === "inside" ? 0 : Math.max(e.getPerpendicularSize() + (e.axisProps.offset ?? 0), 0);
}
var gb = class extends X {
	#e;
	#t;
	#n;
	#r = !1;
	#i = !1;
	constructor(e, t, n, r, i, a) {
		let o = fb(e.orient), s = tb(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), c = {
			...s,
			...e
		}, l = t == "locus", u = {
			...s,
			...wb(t, c),
			...e,
			...l ? Cb(c) : {}
		};
		super(l ? Eb(u, t) : Tb(u, t, a?.labelClipPolicy ?? "pixel"), n, r, i, `axis_${e.orient}`, a), this.labelClipPolicy = a?.labelClipPolicy ?? "pixel", this.axisProps = u, this.#e = vb(u), this.#t = this.paramRuntime.allocateSetter(ab, this.#e), R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof Y && e.name === rb);
		e instanceof Y && (this.#n = e), !(!this.axisProps.labels || !this.#n) && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#o()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return db[this.axisProps.orient] == "x" ? new Ee(t, e) : new Ee(e, t);
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
		let e = fb(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !t.isDomainDefinedExplicitly() && !t.isDomainInitialized() || t && _b(t.getScale())) return;
		let n = Sb(this.axisProps, this.context, this.#n);
		if (n === void 0) return;
		let r = vb(this.axisProps, n);
		r >= this.#e + cb && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function _b(e) {
	let t = e.domain();
	return V(e.type) && t.length >= 2 && t.every((e) => e === t[0]);
}
function vb(e, t) {
	let n = yb(e);
	return e.labels && (n += t ?? bb(e)), xb(e, n);
}
function yb(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function bb(e) {
	return fb(e.orient) == "x" ? e.labelFontSize : sb;
}
function xb(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function Sb(e, t, n) {
	let r = n?.getCollector();
	if (!r?.completed) return;
	let i = 0;
	r.visitData((e) => {
		i = Math.max(i, Number(e[ob]) || 0);
	});
	let a = (e.labelFont ? t.fontManager.getFont(e.labelFont, e.labelFontStyle, e.labelFontWeight) : t.fontManager.getDefaultFont()).metrics;
	if (!a) return;
	let o = Of(a, e.labelFontSize), s = Af({
		width: i,
		height: o
	}, e.labelAngle, fb(e.orient) == "x" ? "vertical" : "horizontal");
	return Math.ceil(s);
}
function Cb(e) {
	switch (mb(e).tickSide) {
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
function wb(e, t) {
	let n = mb(t).tickSide, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
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
function Tb(e, t, n = "pixel") {
	let r = e, i = fb(r.orient), a = lb(i), { anchor: o, offsetDirection: s, tickSide: c } = mb(r), l = () => ({
		field: "value",
		type: t
	}), u = () => ({
		name: "domain",
		data: { values: [{}] },
		mark: {
			type: "rule",
			clip: !1,
			strokeDash: r.domainDash,
			strokeCap: r.domainCap,
			color: r.domainColor,
			[a]: o,
			size: r.domainWidth
		}
	}), d = () => ({
		name: rb,
		transform: [{
			type: "measureText",
			field: "label",
			as: ob,
			fontSize: r.labelFontSize,
			font: r.labelFont,
			fontStyle: r.labelFontStyle,
			fontWeight: r.labelFontWeight
		}],
		mark: {
			type: "text",
			clip: n === "anchor" && "never",
			cullByVisibleRange: n === "anchor" ? i : void 0,
			align: r.labelAlign,
			angle: r.labelAngle,
			baseline: r.labelBaseline,
			font: r.labelFont,
			fontStyle: r.labelFontStyle,
			fontWeight: r.labelFontWeight,
			[a + "Offset"]: (r.tickSize + r.labelPadding) * s,
			[a]: o,
			size: r.labelFontSize,
			color: r.labelColor,
			minBufferSize: 1500
		},
		encoding: {
			[i]: l(),
			text: { field: "label" }
		}
	}), f = () => ({
		name: "ticks",
		mark: {
			type: "rule",
			clip: !1,
			strokeDash: r.tickDash,
			strokeCap: r.tickCap,
			color: r.tickColor,
			size: r.tickWidth,
			minBufferSize: 300
		},
		encoding: {
			[a]: { value: o },
			[a + "2"]: { value: { expr: `${o} - ${r.tickSize} / ${ab} * ${o ? 1 : -1}` } }
		}
	}), p = () => ({
		name: "title",
		data: { values: [{}] },
		mark: {
			...r.titleFit === "range" ? {
				[i]: 0,
				[i + "2"]: 1,
				[i === "x" ? "flushX" : "flushY"]: !0
			} : { [i]: .5 },
			type: "text",
			clip: !1,
			align: "center",
			baseline: c == "bottom" ? "bottom" : "top",
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
			].indexOf(c)],
			text: r.title,
			color: r.titleColor,
			font: r.titleFont,
			size: r.titleFontSize,
			fontStyle: r.titleFontStyle,
			fontWeight: r.titleFontWeight,
			[a]: 1 - o
		}
	}), m = () => {
		let e = {
			name: ib,
			encoding: { [i]: l() },
			layer: []
		};
		return r.ticks && e.layer.push(f()), r.labels && e.layer.push(d()), e;
	}, h = {
		resolve: { scale: { [i]: "forced" } },
		domainInert: !0,
		data: { lazy: {
			type: "axisTicks",
			channel: i,
			axis: e
		} },
		layer: []
	};
	return r.domain && h.layer.push(u()), (r.ticks || r.labels) && h.layer.push(m()), r.title && h.layer.push(p()), h;
}
function Eb(e, t) {
	let n = e, r = fb(n.orient), i = lb(r), { anchor: a, tickSide: o } = mb(n), s = () => ({
		name: "chromosome_ticks",
		mark: {
			type: "rule",
			strokeDash: e.chromTickDash,
			strokeDashOffset: e.chromTickDashOffset,
			[i]: a,
			[i + "2"]: { expr: `${a} - ${n.chromTickSize} / ${ab} * ${a ? 1 : -1}` },
			color: e.chromTickColor,
			size: n.chromTickWidth
		}
	}), c = () => {
		let i;
		switch (o) {
			case "top":
				i = {
					y: 0,
					angle: 0,
					paddingX: 4,
					dy: -n.chromLabelPadding,
					viewportEdgeFadeWidthLeft: 20,
					viewportEdgeFadeWidthRight: 20,
					viewportEdgeFadeDistanceRight: -10,
					viewportEdgeFadeDistanceLeft: -20
				};
				break;
			case "bottom":
				i = {
					y: 1,
					angle: 0,
					paddingX: 4,
					dy: n.chromLabelPadding + n.chromLabelFontSize * .73,
					viewportEdgeFadeWidthLeft: 20,
					viewportEdgeFadeWidthRight: 20,
					viewportEdgeFadeDistanceRight: -10,
					viewportEdgeFadeDistanceLeft: -20
				};
				break;
			case "left":
				i = {
					x: 1,
					angle: -90,
					paddingY: 4,
					dy: -n.chromLabelPadding,
					viewportEdgeFadeWidthBottom: 20,
					viewportEdgeFadeWidthTop: 20,
					viewportEdgeFadeDistanceBottom: -20,
					viewportEdgeFadeDistanceTop: -10
				};
				break;
			case "right":
				i = {
					x: 0,
					angle: 90,
					align: "right",
					paddingY: 4,
					dy: -n.chromLabelPadding
				};
				break;
			default: i = {};
		}
		return {
			name: "chromosome_labels",
			mark: {
				type: "text",
				size: n.chromLabelFontSize,
				font: n.chromLabelFont,
				fontWeight: n.chromLabelFontWeight,
				fontStyle: n.chromLabelFontStyle,
				color: n.chromLabelColor,
				align: e.chromLabelAlign,
				baseline: "alphabetic",
				clip: !1,
				...i
			},
			encoding: {
				[r + "2"]: {
					field: "continuousEnd",
					type: t
				},
				text: { field: "name" }
			}
		};
	}, l = Tb({
		...e,
		...Cb(e)
	}, t);
	if (e.chromTicks || e.chromLabels) {
		let i = {
			name: nb,
			data: { lazy: {
				type: "axisGenome",
				channel: fb(n.orient)
			} },
			encoding: { [r]: {
				field: "continuousStart",
				type: t,
				band: 0
			} },
			layer: []
		};
		if (e.chromTicks && i.layer.push(s()), e.chromLabels) {
			i.layer.push(c());
			let e;
			l.layer.filter((e) => e.name == ib).forEach((t) => t.layer.filter((e) => e.name == rb).forEach((t) => {
				e = t.mark;
			})), e && (n.orient == "top" || n.orient == "bottom" ? (e.viewportEdgeFadeWidthLeft = 30, e.viewportEdgeFadeDistanceLeft = 40) : (e.viewportEdgeFadeWidthBottom = 30, e.viewportEdgeFadeDistanceBottom = 40));
		}
		l.layer.push(i);
	}
	return l;
}
//#endregion
//#region ../core/src/view/interactionRouting.js
function Db(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function Ob(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region ../core/src/utils/ringBuffer.js
var kb = class {
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
function Ab(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function jb(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function Mb(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function Nb(e) {
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
}, Pb = 0, Fb = /* @__PURE__ */ new WeakMap(), Ib = Gb(), Lb = 6;
function Rb() {
	Pb = performance.now();
}
function zb() {
	return performance.now() - Pb < 50;
}
function Bb(e) {
	return function(...t) {
		return Rb(), e(...t);
	};
}
function Vb(e, t, n, r, i) {
	n = Bb(n);
	let a = Kb(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, o = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		a.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = Hb(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = Ub(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - Ub(e.y, r.datum)) * t.height + t.y);
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
		let t = new kb(30), r = e.mouseEvent;
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
			document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", c), e.target?.context.resumeHoverTracking(r), Jb(a, t, o, n, i, { minSampleCount: 5 });
		};
		document.addEventListener("mouseup", c, !1), document.addEventListener("mousemove", s, !1);
	} else if (e.type == "touchgesture") {
		if (!Ab(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: o, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && Jb(a, a.touchPanEventBuffer, a.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), qb(a);
			return;
		}
		a.touchPanPointerCount !== t.pointerCount && (qb(a), a.touchPanPointerCount = t.pointerCount);
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
function Hb(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = Ub(r.x, n.datum) * t.width + t.x, s = (1 - Ub(r.y, n.datum)) * t.height + t.y, c = Ub(r.x2, n.datum) * t.width + t.x, l = (1 - Ub(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, Lb) : Lb, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function Ub(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = Wb(e.channelDef);
	if (r.type === "band" || r.type === "point") return Number.isFinite(i) ? n + r.bandwidth() * i : n;
	if (r.type === "index" || r.type === "locus") {
		if (!Number.isFinite(i)) return n;
		let e = r;
		return n + e.step() * (i - e.align());
	} else return n;
}
function Wb(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function Gb() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new kb(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function Kb(e) {
	if (!e) return Ib;
	let t = Fb.get(e);
	return t || (t = Gb(), Fb.set(e, t)), t;
}
function qb(e) {
	e.touchPanEventBuffer = new kb(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function Jb(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && Yb(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = de(i, (e) => {
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
function Yb(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region ../core/src/view/axisGridView.js
var Xb = class extends X {
	constructor(e, t, n, r, i, a) {
		super(ex(e, t), n, r, i, `axisGrid_${e.orient}`, a), this.axisProps = e, R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function Zb(e, t) {
	let n = e, r = fb(n.orient);
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
			opacity: n.gridOpacity,
			minBufferSize: 300
		},
		encoding: { [r]: {
			field: "value",
			type: t
		} }
	};
}
function Qb(e, t) {
	let n = e, r = fb(n.orient);
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
function $b(e, t) {
	let n = e, r = fb(n.orient);
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
function ex(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push($b(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(Qb(n, t)), n.grid && n.gridOpacity > 0 && r.push(Zb(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[fb(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region ../core/src/config/titleConfig.js
function tx(e) {
	return d(e.map((e) => e.title));
}
function nx(e, t) {
	return md(e, t);
}
//#endregion
//#region ../core/src/view/titleView.js
var rx = {
	start: 0,
	middle: .5,
	end: 1
}, ix = {
	start: "left",
	middle: "center",
	end: "right"
}, ax = "group-title", ox = "group-subtitle";
function sx(e) {
	return lx({
		subtitleColor: e.color,
		subtitleFont: e.font,
		subtitleFontSize: e.fontSize,
		subtitleFontStyle: e.fontStyle,
		subtitleFontWeight: e.fontWeight
	});
}
function cx(e) {
	return lx({
		subtitleColor: e.subtitleColor,
		subtitleFont: e.subtitleFont,
		subtitleFontSize: e.subtitleFontSize,
		subtitleFontStyle: e.subtitleFontStyle,
		subtitleFontWeight: e.subtitleFontWeight,
		subtitlePadding: e.subtitlePadding
	});
}
function lx(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function ux(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = rx[e.anchor ?? "middle"];
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
function dx(e, t = []) {
	if (!e) return;
	let n = H(e) ? { text: e } : e;
	if (!n.text) return;
	let r = tx(t), i = nx(t, n.style ?? ax), a = sx(nx(t, ox)), o = {
		...r,
		...i,
		...a,
		...cx(r),
		...n
	};
	if (o.orient == "none") return;
	let { orientConfig: s } = ux(o);
	return {
		...r,
		...s,
		...i,
		...a,
		...cx(r),
		...n
	};
}
function fx(e, t) {
	let n = e.subtitle ? Sx(e, t) + (e.subtitlePadding ?? 0) : 0, r = e.offset + (mx(e.orient) ? n : 0);
	return hx(e.orient, r);
}
function px(e, t) {
	let n = xx(e, t) + (e.subtitlePadding ?? 0), r = e.offset + (mx(e.orient) ? 0 : n);
	return hx(e.orient, r);
}
function mx(e) {
	switch (e) {
		case "top":
		case "left": return !0;
		case "right":
		case "bottom": return !1;
		default: return !1;
	}
}
function hx(e, t) {
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
function gx(e, t) {
	return Df(t.fontManager, e ?? {});
}
function _x(e, t) {
	return Df(t.fontManager, Tx(e));
}
function vx(e, t) {
	gx(e, t), e.subtitle && _x(e, t);
}
function yx(e, t) {
	if (!e || e.reserve === !1 || e.orient == "none" || e.offset < 0) return j.zero();
	let n = bx(e, t), r = Math.ceil(n + Math.max(e.offset ?? 0, 0));
	switch (e.orient) {
		case "top": return new j(r, 0, 0, 0);
		case "right": return new j(0, r, 0, 0);
		case "bottom": return new j(0, 0, r, 0);
		case "left": return new j(0, 0, 0, r);
		default: return j.zero();
	}
}
function bx(e, t) {
	let n = xx(e, t);
	if (!e.subtitle) return n;
	let r = Sx(e, t);
	return n + (e.subtitlePadding ?? 0) + r;
}
function xx(e, t) {
	let n = gx(e, t), r = Cx(e.fontSize, 12);
	return wx(e, t, e.text, n.metrics, r);
}
function Sx(e, t) {
	let n = _x(e, t), r = Cx(e.subtitleFontSize, 11);
	return wx(e, t, e.subtitle, n.metrics, r);
}
function Cx(e, t) {
	return v(e) ? t : e ?? t;
}
function wx(e, t, n, r, i) {
	let a = v(e.angle) ? 0 : e.angle ?? 0, o = e.orient == "top" || e.orient == "bottom" ? "vertical" : "horizontal";
	return Af(Ex(n, t, r, i), a, o);
}
function Tx(e) {
	return {
		font: e.subtitleFont,
		fontStyle: e.subtitleFontStyle,
		fontWeight: e.subtitleFontWeight
	};
}
function Ex(e, t, n, r) {
	if (n) return Dx(e, n, r);
	let i = t.fontManager.getDefaultFont().metrics;
	return i ? Dx(e, i, r) : {
		width: 0,
		height: r
	};
}
function Dx(e, t, n) {
	return kf(t, typeof e == "string" ? e : String(e.expr), n);
}
function Ox(e, t, n, r) {
	return {
		type: "text",
		tooltip: null,
		clip: !1,
		...t,
		...n,
		text: r ? e.subtitle : e.text,
		align: e.align ?? ix[e.anchor ?? "middle"],
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
function kx(e, t) {
	let { xy: n } = ux(e), r = [{
		name: "title",
		data: { values: [{}] },
		mark: Ox(e, n, fx(e, t), !1)
	}];
	return e.subtitle && r.push({
		name: "subtitle",
		data: { values: [{}] },
		mark: Ox(e, n, px(e, t), !0)
	}), r;
}
var Ax = class e extends br {
	#e;
	titleSpec;
	static create(t, n, r, i, a, o, s) {
		let c = dx(t, n);
		return c ? new e(c, r, i, a, o, s) : void 0;
	}
	constructor(e, t, n, r, i, a) {
		vx(e, t);
		let o = kx(e, t);
		super({ layer: [] }, t, n, r, i, a), this.titleSpec = e, R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 }), this.#e = o.map((e, n) => new Y(e, t, this, r, i + "-" + (e.name ?? n)));
	}
	*[Symbol.iterator]() {
		yield* this.#e;
	}
	getOverhang() {
		return yx(this.titleSpec, this.context);
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.render(e, t, n);
			e.popView(this);
		}
	}
}, jx = class extends Y {
	#e;
	#t = U.ZERO;
	#n = U.ZERO;
	#r = U.ZERO;
	viewportOffset = 0;
	#i;
	constructor(e, t, n = {}) {
		let i = {
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
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t), R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 }), this.config = i, this.#e = t, this.#i = n.onViewportOffsetChange;
		let a = this.config.scrollbarPadding, o = this.config.scrollbarSize;
		this.#t = this.#e == "vertical" ? new U(() => this.#n.x + this.#n.width - o - a, () => this.#n.y + a + this.scrollOffset, () => o, () => this.#s()) : new U(() => this.#n.x + a + this.scrollOffset, () => this.#n.y + this.#n.height - o - a, () => this.#s(), () => o), this.#f(this.viewportOffset), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#c() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault(), this.context.suspendHoverTracking();
			let i = this.scrollOffset, a = n(e.mouseEvent), o = (e) => {
				let t = this.#c();
				if (t <= 0) return;
				let o = r(n(e) - a + i, 0, t);
				this.interpolateViewportOffset({ x: this.#u(o) });
			}, s = (e) => {
				document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s), this.context.resumeHoverTracking(e);
			};
			document.addEventListener("mouseup", s, !1), document.addEventListener("mousemove", o, !1);
		});
	}
	get scrollOffset() {
		return this.#l(this.viewportOffset);
	}
	setViewportOffset(e, { notify: t = !0, syncSmoother: n = !1 } = {}) {
		this.viewportOffset = r(e, 0, this.#d()), n && this.#f(this.viewportOffset), t && this.#i && this.#i(this.viewportOffset);
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
	render(e, t, n) {
		super.render(e, this.#t, n);
	}
	updateScrollbar(e, t) {
		this.#n = e.flatten(), this.#r = t, this.setViewportOffset(this.viewportOffset, {
			notify: !1,
			syncSmoother: !0
		});
	}
	#f(e) {
		this.interpolateViewportOffset = de(this.context.animator, (e) => {
			this.setViewportOffset(e.x, {
				notify: !0,
				syncSmoother: !1
			});
		}, 35, .4, { x: e });
	}
};
//#endregion
//#region ../core/src/config/viewConfig.js
function Mx(e, t) {
	let n = ["cell", ...pd(t?.style)];
	return d(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
var Nx = {
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
}, Px = {
	orient: "bottom",
	direction: "horizontal",
	titleOrient: "left",
	spacing: 15,
	offset: 3
}, Fx = {
	"track-bottom-legend": Px,
	"track-bottom": Px
}, Ix = { style: "track-bottom-legend" }, Lx = "_legendLabelWidth", Rx = "_legendSymbolSize", zx = "_legendStrokeWidth", Bx = 200, Vx = 256, Hx = 4, Ux = 40, Wx = 2, Gx = {
	fillOpacity: 0,
	shadowOpacity: 0,
	strokeOpacity: 0
};
function Kx(e) {
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
	]) t?.forEach(Kx);
	return e;
}
function qx(e) {
	return {
		fill: e.backgroundFill,
		fillOpacity: e.backgroundFill ? e.backgroundFillOpacity ?? 1 : 0,
		stroke: e.backgroundStroke,
		strokeWidth: e.backgroundStrokeWidth,
		strokeOpacity: e.backgroundStroke ? e.backgroundStrokeOpacity ?? 1 : 0,
		shadowOpacity: 0
	};
}
function Jx(e, t) {
	let n = e.title;
	if (!n) return;
	let r = e.titleFontSize ?? 11, i = e.titlePadding ?? 5, a = $x(e), o = Math.ceil(bS(e, t)) + i;
	return {
		name: "title",
		width: a ? o : void 0,
		height: a ? { grow: 1 } : r + i,
		view: Gx,
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
			x: Qx(e) == "right" && o > 0 ? i / o : 0,
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
function Yx(e, t, n, r = []) {
	let i = Jx(e, n), a;
	return a = i ? Qx(e) == "bottom" ? { vconcat: [t, i] } : Qx(e) == "left" ? { hconcat: [i, t] } : Qx(e) == "right" ? { hconcat: [t, i] } : { vconcat: [i, t] } : { vconcat: [t] }, Kx({
		name: "legend_" + (e.orient ?? "right"),
		padding: e.padding,
		view: qx(e),
		resolve: { scale: Object.fromEntries(r.map((e) => [e, "forced"])) },
		spacing: 0,
		...a
	});
}
function Xx(e) {
	return e.direction == "horizontal";
}
function Zx(e) {
	return e.orient == "top" || e.orient == "bottom";
}
function Qx(e) {
	return e.titleOrient ?? "top";
}
function $x(e) {
	let t = Qx(e);
	return t == "left" || t == "right";
}
function eS(e) {
	return e.gradientStrokeColor === void 0 ? 0 : e.gradientStrokeWidth ?? 0;
}
function tS(e) {
	if (e !== void 0) return e == "transparent" ? { value: null } : { value: e };
}
function nS({ channel: e, dataType: t, horizontalPixelScale: n, verticalPixelScale: r, legend: i, symbolStyle: a }) {
	let o = a.encoding ?? {}, s = o.color ?? o.stroke ?? o.fill ?? tS(i.symbolBaseStrokeColor);
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
function rS({ entries: e, channel: t, symbolChannels: n = {}, symbolStyle: r = {}, symbolGeometry: i = "point", legend: a, format: o, dataType: s, context: c }) {
	let l = i == "stroke", u = a.labelAlign ?? "left", d = a.labelBaseline ?? "middle", f = a.labelFontSize ?? 10, p = /* @__PURE__ */ new Set([t, ...Object.keys(n)]), m = (e) => p.has(e) || p.has("color"), h = Object.fromEntries([["fill", tS(a.symbolBaseFillColor)], ["stroke", tS(a.symbolBaseStrokeColor)]].filter(([e, t]) => !m(e) && t !== void 0).map(([e, t]) => [e, t])), g = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, _ = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, v = [l ? nS({
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
	}), Yx(a, {
		name: "legendBody",
		height: { grow: 1 },
		view: Gx,
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
				as: Lx,
				fontSize: f,
				font: a.labelFont,
				fontStyle: a.labelFontStyle,
				fontWeight: a.labelFontWeight
			},
			{
				type: "packLegendLabels",
				labelWidth: Lx,
				columns: a.columns,
				symbolSize: l ? a.symbolSize : t == "size" ? Rx : a.symbolSize,
				symbolStrokeWidth: l ? zx : a.symbolStrokeWidth,
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
function iS({ channel: e, legend: t, format: n, context: r }) {
	let i = Xx(t), a = t.gradientThickness ?? 12, o = t.gradientStrokeWidth ?? 0, s = eS(t), c = s > 0, l = t.gradientLength === void 0 ? {
		grow: 1,
		minPx: Ux + s
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
	}, _ = f, v = _ + p, y = v + Hx, b = y, x = b + a, S = a, C = a + Hx, ee = C + p, w = i ? "x" : "y", T = w + "2", E = i ? "y" : "x", te = E + "2", D = i ? h : m, ne = "_legendGradientBandStart", O = "_legendGradientBandStop", re = "_legendGradientTickStart", ie = "_legendGradientTickStop", ae = "_legendGradientLabelPosition", k = (e, t, n) => ({
		field: e,
		type: "quantitative",
		scale: t,
		axis: null,
		...n ? { buildIndex: !1 } : {}
	}), oe = { lazy: {
		type: "legendGradientTicks",
		channel: e,
		count: t.tickCount ?? 5,
		format: n,
		values: t.values
	} }, se = [
		{
			type: "formula",
			expr: "" + (i ? v : S),
			as: re
		},
		{
			type: "formula",
			expr: "" + (i ? y : C),
			as: ie
		},
		{
			type: "formula",
			expr: "" + (i ? _ : ee),
			as: ae
		}
	], ce = [{
		name: "gradientRamp",
		transform: [{
			type: "formula",
			expr: "" + (i ? b : 0),
			as: ne
		}, {
			type: "formula",
			expr: "" + (i ? x : a),
			as: O
		}],
		mark: {
			type: "rect",
			clip: !1,
			opacity: t.gradientOpacity
		},
		encoding: {
			[w]: k(i ? "position0" : "position1", g, w == "x"),
			[T]: {
				field: i ? "position1" : "position0",
				type: "quantitative",
				scale: g
			},
			[E]: k(ne, D, E == "x"),
			[te]: {
				field: O,
				type: "quantitative",
				scale: D
			},
			[e]: {
				field: "value",
				type: "quantitative",
				domainInert: !0
			}
		}
	}, {
		name: "gradientGuide",
		data: oe,
		transform: se,
		layer: [{
			name: "gradientTicks",
			mark: {
				type: "rule",
				clip: !1
			},
			encoding: {
				[w]: k("position", g, w == "x"),
				[T]: {
					field: "position",
					type: "quantitative",
					scale: g
				},
				[E]: k(re, D, E == "x"),
				[te]: {
					field: ie,
					type: "quantitative",
					scale: D
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
				as: Lx,
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
				[w]: k("position", g, w == "x"),
				[E]: k(ae, D, E == "x"),
				text: { field: "label" }
			}
		}]
	}];
	return c && ce.push({
		name: "gradientBorder",
		data: { values: [{
			position0: 0,
			position1: 1,
			[ne]: i ? b : 0,
			[O]: i ? x : a
		}] },
		mark: {
			type: "rect",
			clip: !1,
			fillOpacity: 0,
			stroke: t.gradientStrokeColor,
			strokeWidth: o
		},
		encoding: {
			[w]: k("position0", g, w == "x"),
			[T]: {
				field: "position1",
				type: "quantitative",
				scale: g
			},
			[E]: k(ne, D, E == "x"),
			[te]: {
				field: O,
				type: "quantitative",
				scale: D
			}
		}
	}), Yx(t, {
		name: "gradientBody",
		padding: s / 2,
		width: i ? l : void 0,
		height: i ? { grow: 1 } : l,
		view: Gx,
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
			count: Vx
		} },
		layer: ce
	}, r, [e]);
}
function aS(e) {
	return e ? e.getPerpendicularSize() + e.getOffset() : 0;
}
function oS(e, t, n) {
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
var sS = class extends br {
	#e;
	#t = [];
	#n;
	#r;
	#i;
	#a;
	#o;
	constructor(e, t, n, r, i, a, o, s) {
		super(oS("legend_region_" + e, i, n), a, o, s, "legend_region_" + e), this.needsAxes = {
			x: !1,
			y: !1
		}, this.orient = e, this.#a = t, this.#o = n, this.#r = r, this.#n = i, R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		this.#e = await this.context.createOrImportView(oS("legendStack", this.#n, this.#o), this, this, this.getNextAutoName("legendStack")), R(this.#e, { skipSubtree: !0 }), F(this.#e, { skipSubtree: !0 });
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
		let n = this.#s(), r = this.#o == "horizontal", i = Ke(n.map((e) => {
			let t = e.getSize();
			return r ? t.width : t.height;
		}), r ? e : t, { spacing: this.#n }), a = !cS(this.#i, i);
		return this.#i = i, a;
	}
	*[Symbol.iterator]() {
		this.#e && (yield this.#e);
	}
	getSize() {
		let { width: e, height: t } = this.#c();
		return new Ee(e, t);
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
		let t = e.map((e) => e.getSize().width), n = e.map((e) => e.getSize().height), r = (e) => ne([...e, {
			px: this.#n * Math.max(0, e.length - 1),
			grow: 0
		}]);
		if (this.#r && this.#i && this.#i.length > 1) {
			let e = r(this.#i.map((e) => ae(e.map((e) => this.#o == "horizontal" ? n[e] : t[e])))), i = {
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
			height: ae(n)
		} : {
			width: ae(t),
			height: r(n)
		};
	}
	getPerpendicularSize() {
		let e = this.getSize();
		return zn(this.orient == "top" || this.orient == "bottom" ? e.height : e.width);
	}
	getWidth() {
		return zn(this.getSize().width);
	}
	getHeight() {
		return zn(this.getSize().height);
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
		if (Pe(t) !== void 0) return zn(t);
	}
	isPickingSupported() {
		return !1;
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), !this.isConfiguredVisible()) return;
		e.pushView(this, t);
		let r = this.#s(), i = this.#o == "horizontal", a = r.map((e) => {
			let t = e.getSize();
			return i ? t.width : t.height;
		}), o = r.map((e) => {
			let t = e.getSize();
			return i ? t.height : t.width;
		}), s = this.#i ?? [r.map((e, t) => t)], l = c(s.map((e) => ae(e.map((e) => o[e]))), i ? t.height : t.width, { spacing: this.#n });
		for (let [o, u] of s.entries()) {
			let s = u.map((e) => a[e]), d = i ? t.width : t.height, f = s.every((e) => Pe(e) !== void 0) ? me(s, { spacing: this.#n }) : d, p = lS(this.#a) * Math.max(0, d - f), m = c(s, f, {
				spacing: this.#n,
				offset: p,
				devicePixelRatio: e.getDevicePixelRatio()
			}), h = l[o];
			for (let [a, o] of u.entries()) {
				let s = r[o], c = m[a], l = i ? new U(() => t.x + c.location, () => t.y + h.location, () => c.size, () => h.size) : new U(() => t.x + h.location, () => t.y + c.location, () => h.size, () => c.size);
				s.render(e, l, n);
			}
		}
		e.popView(this);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), this.#e?.propagateInteraction(e), this.handleInteraction(e, !1);
	}
};
function cS(e, t) {
	return e?.length == t.length && e.every((e, n) => e.length == t[n].length && e.every((e, r) => e == t[n][r]));
}
function lS(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
var uS = class extends br {
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
		let p = a == "gradient" ? iS({
			channel: t,
			legend: o,
			format: s,
			context: l
		}) : rS({
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
		}, this.legendProps = o, this.#n = a ?? "symbol", this.#e = pS(this.#n, this.legendProps), R(this, { skipSubtree: !0 }), F(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		let e = { ...this.spec };
		delete e.name, this.#t = await this.context.createOrImportView(e, this, this, this.getNextAutoName("legend"), void 0, { layoutSizeParams: "force" }), R(this.#t, { skipSubtree: !0 }), F(this.#t, { skipSubtree: !0 }), this.#o = [];
		for (let e of this.getDescendants()) e instanceof Y && (e.name === "labels" || e.name === "gradientLabels") && this.#o.push(e);
		this.#o.length > 0 && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#p())), this.#a = this.getStackedParallelSize();
	}
	*[Symbol.iterator]() {
		this.#t && (yield this.#t);
	}
	getSize() {
		if (!this.isActive()) return new Ee({
			px: 0,
			grow: 0
		}, {
			px: 0,
			grow: 0
		});
		let e = Xx(this.legendProps), t = { px: this.getPerpendicularSize() }, n = this.#u() ? this.#l() : { px: this.getStackedParallelSize() };
		return e ? new Ee(n, t) : new Ee(t, n);
	}
	#l() {
		if (!this.#t) return {
			grow: 1,
			minPx: Ux
		};
		let e = this.#t.getSize();
		return Xx(this.legendProps) ? e.width : e.height;
	}
	#u() {
		return this.#d() && Xx(this.legendProps) == Zx(this.legendProps);
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
		let e = this.#i ?? dS(this.#o);
		return mS(this.legendProps, this.#n, e, this.context);
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
		let e = dS(this.#o);
		if (e === void 0) return;
		let t = this.#a;
		this.#i = e;
		let n = fS(this.legendProps, this.#n, e, this.context), r = n >= this.#e + Wx, i = this.getStackedParallelSize(), a = Math.abs(i - t) >= Wx;
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
	render(e, t, n = {}) {
		super.render(e, t, n), this.isActive() && (e.pushView(this, t), this.#t?.render(e, t, n), e.popView(this));
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), this.#t?.propagateInteraction(e), this.handleInteraction(e, !1);
	}
};
function dS(e) {
	let t = 0, n = 0, r = 0, i = 0, a = !1;
	for (let o of e) {
		let e = o.getCollector();
		if (!e?.completed) return;
		a = !0, e.visitData((e) => {
			t = Math.max(t, Number(e[Lx]) || 0), n = Math.max(n, Number(e.entryWidth) || 0), r = Math.max(r, (Number(e.labelX) || 0) + (Number(e[Lx]) || 0)), i = Math.max(i, Number(e.labelY) || 0);
		});
	}
	return a ? {
		maxWidth: Math.ceil(t),
		maxEntryWidth: Math.ceil(n),
		maxX: Math.ceil(r),
		maxY: Math.ceil(i)
	} : void 0;
}
function fS(e, t, n, r) {
	if (Xx(e)) return hS(e, t, n);
	let i = $x(e) ? yS(e, r) : bS(e, r), a = e.labelOffset ?? 4, o = t == "gradient" ? (e.gradientThickness ?? 12) + eS(e) + Hx + a + n.maxWidth : n.maxEntryWidth || Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5) + a + n.maxWidth;
	return Math.ceil(Math.max(pS(t, e), $x(e) ? o + i : o, i));
}
function pS(e, t) {
	return Xx(t) && e == "gradient" ? (t.labelFontSize ?? 10) + (t.labelOffset ?? 4) + Hx + (t.gradientThickness ?? 12) + eS(t) + 2 : 0;
}
function mS(e, t, n, r) {
	let i = vS(e, r), a = $x(e), o = (t) => Xx(e) == a ? Math.ceil(i + t) : Math.ceil(Math.max(i, t));
	if (t == "gradient") return o((e.gradientLength ?? Bx) + eS(e));
	if (n) {
		let t = e.labelFontSize ?? 10;
		return o(Xx(e) ? n.maxX : n.maxY + t / 2);
	} else return o(Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5));
}
function hS(e, t, n) {
	let r = e.labelFontSize ?? 10, i = e.labelOffset ?? 4, a = _S(e), o = t == "gradient" ? r + i + Hx + (e.gradientThickness ?? 12) + eS(e) + 2 : n.maxY + r / 2;
	return Math.ceil(Math.max(pS(t, e), $x(e) ? Math.max(a, o) : a + o));
}
function gS(e) {
	return e.title ? e.titleFontSize ?? 11 : 0;
}
function _S(e) {
	return e.title ? gS(e) + ($x(e) ? 0 : e.titlePadding ?? 5) : 0;
}
function vS(e, t) {
	return $x(e) ? yS(e, t) : _S(e);
}
function yS(e, t) {
	return e.title ? bS(e, t) + (e.titlePadding ?? 5) : 0;
}
function bS(e, t) {
	if (!e.title) return 0;
	let n = Df(t.fontManager, {
		font: e.titleFont,
		fontStyle: e.titleFontStyle,
		fontWeight: e.titleFontWeight
	}).metrics ?? t.fontManager.getDefaultFont().metrics;
	if (!n) return 0;
	let r = e.titleFontSize ?? 11;
	return kf(n, Ug(e.title, e.titleLimit, (e, t) => kf(n, e, t).width, r, "..."), r).width;
}
//#endregion
//#region ../core/src/view/gridView/gridChildLegends.js
var xS = [
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"strokeWidth",
	"shape"
], SS = /* @__PURE__ */ new Set([
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
]), CS = /* @__PURE__ */ new Set([
	"left",
	"right",
	"top",
	"bottom",
	...SS
]);
function wS(e) {
	let t = e.legendProps.orient ?? "right";
	return SS.has(t);
}
function TS(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.visit((e) => {
		t.has(e) || t.set(e, t.size);
	});
	return t;
}
function ES(e) {
	return String(e.legend.title ?? e.field ?? e.channel).toLocaleLowerCase();
}
function DS(e) {
	let t = TS(e), n = [];
	for (let t of e) for (let e of Object.values(t.resolutions.legend)) for (let r of e.getLegendDefs()) n.push({
		definition: r,
		resolution: e,
		owner: t
	});
	return n.sort((e, n) => {
		let r = (t.get(e.definition.view) ?? 2 ** 53 - 1) - (t.get(n.definition.view) ?? 2 ** 53 - 1);
		if (r != 0) return r;
		let i = ES(e.definition).localeCompare(ES(n.definition));
		return i == 0 ? e.definition.channel.localeCompare(n.definition.channel) : i;
	}), n;
}
function OS(e) {
	if (e && "condition" in e) {
		let t = Array.isArray(e.condition) ? e.condition : [e.condition];
		for (let e of t) if (e.empty !== !1 && "value" in e) return { value: e.value };
	}
	return f(e) ? { value: e.value } : void 0;
}
function kS(e) {
	return typeof e == "string";
}
function AS(e, t, n) {
	kS(n.fill) && !t.has("fill") && (e.fill = { value: n.fill }), kS(n.stroke) && !t.has("stroke") && (e.stroke = { value: n.stroke }), kS(n.color) && !t.has("color") && (n.filled ? (t.has("fill") || (e.fill = { value: n.color }), t.has("stroke") || (e.stroke = { value: null }), t.has("strokeWidth") || (e.strokeWidth = { value: 0 })) : (t.has("stroke") || (e.stroke = { value: n.color }), t.has("fill") || (e.fill = { value: n.color }), t.has("fillOpacity") || (e.fillOpacity = { value: 0 })));
}
function jS(e, t) {
	return !!on(e.spec.encoding?.[t]);
}
function MS(e, t, n) {
	[
		"color",
		"fill",
		"stroke"
	].some((e) => !t.has(e) && jS(n, e)) && !t.has("fill") && (e.fill = { value: "black" });
}
function NS(e, t, n) {
	let r = /* @__PURE__ */ new Set([e, ...Object.keys(t)]), i = {
		mark: {},
		encoding: {}
	}, a = n.mark.properties, o = i.encoding, s = i.mark;
	a.filled !== void 0 && (s.filled = a.filled), a.opacity !== void 0 && (s.opacity = a.opacity), a.fillOpacity !== void 0 && (s.fillOpacity = a.fillOpacity), a.strokeOpacity !== void 0 && (s.strokeOpacity = a.strokeOpacity), a.strokeWidth !== void 0 && (s.strokeWidth = a.strokeWidth), a.shape === void 0 ? n.getMarkType() == "rect" && (s.shape = "square") : s.shape = a.shape, AS(o, r, a), MS(o, r, n);
	let c = n.spec.encoding?.color, l = a.filled, u = OS(c);
	u && !r.has("color") && (l ? (o.fill = u, o.stroke = { value: null }, o.strokeWidth = { value: 0 }) : (o.stroke = u, o.fill = u, o.fillOpacity = { value: 0 }));
	for (let e of xS) {
		if (e == "color" || r.has(e)) continue;
		let t = n.spec.encoding?.[e], i = OS(t);
		i && (o[e] = i);
	}
	return i;
}
function PS(e) {
	if (!CS.has(e)) throw Error(`Invalid legend orientation "${e}"!`);
}
function FS(e, t, n) {
	let r = Yt(t.paramRuntime, e.orient, "Reactive legend orient changes are not supported.", n);
	return r !== void 0 && PS(r), r === e.orient ? e : {
		...e,
		orient: r
	};
}
function IS(e, t, n, r) {
	let i = FS(e, t, n);
	return Ge(t.paramRuntime, i, (e) => {
		e.has("disable") && r();
	}, n);
}
async function LS(e, t) {
	let n = e.view, r = [], i, a = IS(e.legend, n, (e) => r.push(e), () => {
		if (!i) throw Error("Legend has not been initialized!");
		i.invalidateSizeCache(), i.context.requestLayoutReflow();
	}), o = e.type == "symbol" ? NS(e.channel, e.symbolChannels ?? {}, e.scaleResolution.getOrderedMembers()[0].view) : void 0;
	i = new uS({
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
async function RS(e, t, n) {
	let r = t.legendProps.orient ?? "right", i = e[r];
	if (!i) {
		let { anchor: n, direction: a, wrap: o } = Fm(t.layoutParent.getConfigScopes(), r), s = new sS(r, n, a, o, t.legendProps.spacing ?? 0, t.context, t.layoutParent, t.dataParent);
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
function* zS(e) {
	for (let t of Object.values(e)) yield t.legendView;
}
function BS(e, t, n) {
	let r = !1;
	for (let i of zS(e)) {
		let e = i.prepareLayoutSize(t, n);
		r ||= e;
	}
	return r;
}
function VS(e) {
	for (let t of zS(e)) t.disposeSubtree();
}
function HS(e, t) {
	let n = e[t];
	return n && WS(n) ? aS(n.legendView) : 0;
}
function US(e) {
	return e.resolution.hasVisibleNonChromeMember();
}
function WS(e) {
	return e.entries.some(US);
}
//#endregion
//#region ../core/src/view/gridView/legendCollection.js
function GS(e) {
	return KS(e.getDescendants());
}
function KS(e) {
	return e.filter((e) => !cn(e) && Object.keys(e.resolutions.legend).length > 0);
}
function qS(e, t) {
	for (let n of e.getDataAncestors()) {
		let e = n.getConfiguredResolution(t, "legend") ?? n.getConfiguredResolution("default", "legend");
		if (e == "excluded") return;
		if (e == "collected") return n;
	}
}
//#endregion
//#region ../core/src/view/viewInteractionListenerTracker.js
var JS = class {
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
function YS(e, t) {
	return t === "integer" ? !0 : t === "auto" ? e === "index" || e === "locus" : !1;
}
function XS(e, t, n = "auto") {
	if (e == null) return null;
	let r = t.getResolvedScaleType(), i = YS(r, n) ? Math.round(e) : e;
	return r === "locus" && t.toComplex ? t.toComplex(i) : i;
}
//#endregion
//#region ../core/src/ruler/rulerMouseEventController.js
var ZS = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.#e = new JS(e.view), this.eventConfig = ot(n.on ?? "mousemove"), Ne(this.eventConfig, ["mousemove", "mousedown"], `Ruler param "${t}" currently supports only "mousemove" and "mousedown" in "on".`), this.eventPredicate = pt(this.eventConfig), this.clear = n.clear ?? (this.eventConfig.type === "mousemove" && "mouseleave"), this.#n();
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
			this.#o(ke(this.channels));
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
				document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), this.dragging = !1, this.clear === "mouseup" && this.#o(ke(this.channels));
			};
			document.addEventListener("mousemove", n), document.addEventListener("mouseup", r);
		}), this.clear === "mouseleave") this.#t("mouseleave", () => {
			this.dragging || this.#o(ke(this.channels));
		});
		else if (this.clear !== !1 && this.clear !== "mouseup") throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave", "mouseup", or false in "clear" for mousedown rulers.`);
	}
	#a(e) {
		let t = ke(this.channels), n = this.gridChild.view.coords.normalizePoint(e.x, e.y, !0);
		for (let e of this.channels) {
			let r = this.scaleResolutions[e], i = r.getScale().invert(e === "x" ? n.x : n.y);
			t.values[e] = XS(i, r, this.config.snap ?? "auto");
		}
		return t;
	}
	#o(e) {
		this.paramRuntime.setValue(this.paramName, e);
	}
}, QS = class {
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
		let e = ke(this.channels);
		for (let t of this.channels) {
			let n = this.scaleResolutions[t], r = n.getScale().invert(.5);
			e.values[t] = XS(r, n, this.config.snap ?? "auto");
		}
		this.paramRuntime.setValue(this.paramName, e);
	}
};
//#endregion
//#region ../core/src/view/gridView/generatedChromeOverlay.js
function $S(e) {
	R(e, { skipSubtree: !0 }), F(e, { skipSubtree: !0 });
}
function eC({ spec: e, context: t, layoutParent: n, dataParent: r, name: i, zindex: a = 1 }) {
	let o = new X(e, t, n, r, i);
	return $S(o), {
		view: o,
		zindex: a
	};
}
//#endregion
//#region ../core/src/view/gridView/rulerOverlay.js
function tC({ paramName: e, channels: t, display: n = "line", mark: r = {} }) {
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
			expr: oC(e, t)
		}],
		encoding: {},
		layer: []
	};
	if (n === "band") {
		let n = i.encoding;
		for (let r of t) i.encoding[r] = aC(sC(e, r)), n[r + "2"] = aC(cC(e, r));
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
		let o = aC(sC(e, a, n)), s = {
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
function nC({ paramName: e, channels: t, display: n, mark: r, context: i, layoutParent: a, dataParent: o, name: s }) {
	return eC({
		spec: tC({
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
function rC({ config: e, scaleResolution: t, ...n }) {
	return nC({
		...n,
		display: iC(t.getResolvedScaleType(), e.snap, e.display),
		mark: e.mark
	});
}
function iC(e, t, n) {
	return n || ((e === "index" || e === "locus") && (t === void 0 || t === "auto" || t === "integer") ? "center" : "line");
}
function aC(e) {
	return {
		datum: { expr: e },
		axis: null,
		type: null,
		title: null
	};
}
function oC(e, t) {
	return [e + ".type === 'ruler'", ...t.map((t) => e + ".values." + t + " != null")].join(" && ");
}
function sC(e, t, n = "line") {
	let r = `linearize('${t}', ${e}.values.${t})`;
	return n === "center" ? r + " + 0.5" : r;
}
function cC(e, t) {
	return sC(e, t) + " + 1";
}
//#endregion
//#region ../core/src/view/gridView/selectionRectSpec.js
var lC = "intervalDragActive";
function uC({ scaleResolutionSource: e, selectionExpression: t, selection: n, channels: r = Object.keys(n.intervals), brushConfig: i = {} }) {
	let a = { ...i };
	if (delete a.zindex, kn.every((e) => !r.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
	let o = {
		name: "selectionRect",
		domainInert: !0,
		params: [{
			name: lC,
			value: !1
		}],
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: dC(t, r)
		}],
		encoding: {},
		layer: []
	};
	r.includes("x") && (o.encoding.x = fC(e, t, "x", 0), o.encoding.x2 = fC(e, t, "x", 1)), r.includes("y") && (o.encoding.y = fC(e, t, "y", 0), o.encoding.y2 = fC(e, t, "y", 1)), o.layer.push({
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
			y: r.includes("y") ? fC(e, t, "y", 1) : { value: 1 },
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
function dC(e, t) {
	return [e + ".type === 'interval'", ...t.map((t) => e + ".intervals." + t + " != null")].join(" && ");
}
function fC(e, t, n, r) {
	return {
		datum: { expr: pC(t, n, r) },
		type: e.getScaleResolution(n).type,
		title: null,
		axis: null
	};
}
function pC(e, t, n) {
	let r = `${e}.intervals.${t}`;
	return `(${r} != null ? ${r}[${n}] : 0)`;
}
//#endregion
//#region ../core/src/view/gridView/selectionRect.js
function mC({ selectionExpr: e, selectionExpression: t, channels: n, brushConfig: r = {}, context: i, layoutParent: a, dataParent: o, scaleResolutionSource: s, name: c = "selectionRect" }) {
	let l = e() ?? se(n), { zindex: u = 1, ...d } = r;
	return eC({
		spec: uC({
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
var hC = class {
	constructor(e, t, n, r, i = e.view.paramRuntime, a = !0) {
		this.gridChild = e, this.#e = new JS(e.view), this.#n(t, n, r, i, a);
	}
	gridChild;
	#e;
	#t(e, t, n) {
		this.#e.add(e, t, n);
	}
	dispose() {
		this.#e.dispose();
	}
	#n(e, t, n, r, i) {
		let a = this.gridChild.view, o = n.encodings ?? ["x"], s = Object.fromEntries(o.map((t) => {
			let n = a.getScaleResolution(t), r = n?.getResolvedScaleType();
			if (!n || !r || !V(r)) throw Error(`No continuous scale found for interval selection param "${e}" on channel "${t}"! Scale type is "${r ?? "none"}".`);
			return [t, n];
		})), c = o.some((e) => s[e].isZoomable()), l = n.on ?? (c ? {
			type: "mousedown",
			filter: "event.shiftKey"
		} : { type: "mousedown" });
		if (l.type !== "mousedown") throw Error(`Interval selection param "${e}" currently supports only "mousedown" in "on".`);
		let d = pt(l), f = gC(n.zoom, c, e), p = pt(f), m = n.clear, h = pt(m);
		if (i && this.gridChild.selectionRect) throw Error("Only one interval selection per container is currently allowed!");
		let g = !1, _ = !1, v = !1, y = null, b = (e, t) => Object.fromEntries(o.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), x = r.createExpression(e), S = (t) => {
			r.setValue(e, t);
		};
		t.value && S({
			type: "interval",
			intervals: t.value
		});
		let C = () => {
			S(se(o));
		};
		i && (this.gridChild.selectionRect = mC({
			selectionExpr: x,
			selectionExpression: e,
			channels: o,
			brushConfig: n.mark,
			context: this.gridChild.layoutParent.context,
			layoutParent: this.gridChild.layoutParent,
			dataParent: a,
			scaleResolutionSource: a
		}));
		let ee = i ? (e) => {
			this.gridChild.selectionRect.view.paramRuntime.setValue(lC, e);
		} : () => {}, w = (e) => {
			let t = {
				x: 0,
				y: 0
			}, n = a.coords.normalizePoint(e.x, e.y, !0);
			for (let e of o) {
				let r = s[e].getScale();
				t[e] = r.invert(e == "x" ? n.x : n.y) + (["index", "locus"].includes(r.type) ? .5 : 0);
			}
			return t;
		}, T = (e) => {
			let { intervals: t } = e, n = (e, t, n) => {
				let r = (e, t) => t == null ? null : s[e].getScale()(t), i = r("x", e) ?? n, o = r("y", t) ?? n;
				return a.coords.denormalizePoint(i, o, !0);
			}, r = n(t.x?.[0], t.y?.[0], 0), i = n(t.x?.[1], t.y?.[1], 1);
			return U.create(r.x, r.y, i.x - r.x, i.y - r.y);
		};
		this.#t("mousedown", (e) => {
			if (e.mouseEvent.button != 0) return;
			if (y = g ? T(x()) : null, y) ee(!0), _ = !0;
			else {
				let t = e.point;
				if (u(x()) && (_ = !0), d(e.proxiedMouseEvent)) C(), v = !0;
				else if (m && u(x())) {
					let e = (n) => {
						a.removeInteractionListener("mouseup", e);
						let r = n.point;
						t.subtract(r).length < 2 && C();
					};
					a.addInteractionListener("mouseup", e);
					return;
				} else return;
			}
			e.stopPropagation(), a.context.suspendHoverTracking();
			let t = e.point, n = Z.fromMouseEvent(e.mouseEvent).subtract(t), r = (e) => {
				let r = Z.fromMouseEvent(e).subtract(n), i;
				if (y) {
					let e = r.subtract(t), n = y.translate(e.x, e.y);
					i = b(w(new Z(n.x, n.y)), w(new Z(n.x2, n.y2)));
				} else i = b(w(t), w(r));
				for (let e of o) {
					let t = s[e], { zoomExtent: n } = t, r = i[e];
					if (y) {
						let e = r[1] - r[0], t = n[0], i = n[1];
						r[0] < t && (r[0] = t, r[1] = t + e), r[1] > i && (r[1] = i, r[0] = i - e);
					}
					let a = _C(t, r);
					a ? (r[0] = a[0], r[1] = a[1]) : (r[0] = n[0], r[1] = n[0]);
				}
				S({
					type: "interval",
					intervals: i
				});
			}, i = (e) => {
				document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", i), ee(!1), v = !1, y &&= null, a.context.resumeHoverTracking(e);
			};
			document.addEventListener("mousemove", r), document.addEventListener("mouseup", i);
		}), this.#t("click", (e) => {
			e.mouseEvent.button == 0 && (_ &&= (e.stopPropagation(), !1));
		}, !0);
		let E = (e) => ue(x(), w(e));
		m && this.#t(m.type, (e) => {
			h(e.proxiedMouseEvent) && E(e.point) && (C(), e.stopPropagation());
		}, !0), this.#t("wheel", (e) => {
			let t = e.wheelEvent;
			if (!f || !p(Nb(t)) || Math.abs(t.deltaX) >= Math.abs(t.deltaY) || !E(e.point)) return;
			let n = x();
			if (!u(n)) return;
			let r = t.deltaMode ? 120 : 1, i = 2 ** (t.deltaY * r / 300), a = w(e.point), c = { ...n.intervals }, l = !1;
			for (let e of o) {
				let t = c[e];
				if (!t || t.length !== 2) continue;
				let n = s[e], r = _C(n, hm(n.getScale(), [...t], a[e], i, { onUnsupported: "identity" }));
				r && (r[0] !== t[0] || r[1] !== t[1]) && (c[e] = r, l = !0);
			}
			l && (S({
				...n,
				type: "interval",
				intervals: c
			}), t.preventDefault(), e.stopPropagation());
		}), this.#t("mousemove", (e) => {
			E(e.point) ? v || (g = !0) : g = !1;
		});
	}
};
function gC(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = ot(r);
	return Ne(i, ["wheel"], `Interval selection param "${n}" currently supports only "wheel" in "zoom".`), i;
}
function _C(e, t) {
	let n = e.getScale();
	return Up(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
//#endregion
//#region ../core/src/view/gridView/overlayExtent.js
function vC({ extent: e, ownerSpec: t, channels: n, isAligned: r, label: i }) {
	let a = n.length === 1 ? n[0] : void 0;
	if (!a) {
		if (e === "container") throw Error(`${i} cannot use extent "container" for multiple channels.`);
		return "view";
	}
	let o = e ?? "auto";
	if (!(o === "container" || o === "auto")) return "view";
	if (!(a === "x" && Jy(t) || a === "y" && Yy(t))) {
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
function yC(e) {
	return cn(e) ? [] : e instanceof Y ? Object.keys(e.resolutions.legend).length > 0 ? [e] : [] : e instanceof X ? [...Object.keys(e.resolutions.legend).length > 0 ? [e] : [], ...Array.from(e).flatMap((e) => yC(e))] : [];
}
function bC(e) {
	return Jy(e) || Yy(e) || Xy(e);
}
var xC = class {
	#e = [];
	#t = [];
	#n = [];
	#r;
	#i = !1;
	constructor(e, t, n) {
		this.layoutParent = t, this.view = e, this.#r = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {}, this.scrollbars = {}, this.selectionRect = void 0, this.rulerOverlays = [], this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.coords = U.ZERO;
		let r = e.needsAxes.x || e.needsAxes.y, i = e.getParentGridChromePolicy(), a = e.spec, o = "view" in a ? a.view : void 0;
		if (i.background && (r || o)) {
			let r = Mx(e.getConfigScopes(), o);
			this.backgroundZindex = r?.zindex ?? 0, this.backgroundStrokeZindex = r?.strokeZindex;
			let i = SC(r);
			i && (this.background = new Y(i, t.context, t, e, "background" + n), R(this.background, { skipSubtree: !0 }), F(this.background, { skipSubtree: !0 }));
			let a = CC(r);
			a && (this.backgroundStroke = new Y(a, t.context, t, e, "backgroundStroke" + n), R(this.backgroundStroke, { skipSubtree: !0 }), F(this.backgroundStroke, { skipSubtree: !0 }));
		}
		this.title = e.spec.title ? Ax.create(e.spec.title, e.getConfigScopes(), t.context, t, e, "title" + n) : void 0, e.spec.viewportWidth != null && (this.scrollbars.horizontal = new jx(this, "horizontal")), e.spec.viewportHeight != null && (this.scrollbars.vertical = new jx(this, "vertical")), cn(e) || (this.#d(), this.#a());
	}
	#a() {
		for (let { owner: e, paramName: t, config: n } of this.#o()) {
			let r = n.encodings ?? ["x"], i = this.#u(t, r);
			n.source === "viewport" ? this.#n.push(new QS(this, t, n, r, i, e.paramRuntime)) : this.#t.push(new ZS(this, t, n, r, i, e.paramRuntime)), n.display !== "none" && (this.#s(e, t, n, r, i) || this.#c(t, n, r, i));
		}
	}
	#o() {
		let e = [], t = /* @__PURE__ */ new Set();
		for (let n of this.view.getDataAncestors()) for (let [r, i] of n.paramRuntime.paramConfigs) t.has(r) || (t.add(r), Te(i) && e.push({
			owner: n,
			paramName: r,
			config: i.ruler
		}));
		return e;
	}
	#s(e, t, n, r, i) {
		return vC({
			extent: n.extent,
			ownerSpec: e.spec,
			channels: r,
			isAligned: (t) => e.getScaleResolution?.(t) === i[t],
			label: `Ruler param "${t}"`
		}) === "container";
	}
	#c(e, t, n, r) {
		let i = rC({
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
			let i = w(r.select);
			if (ie(i) && (t !== this.view || !bC(t.spec))) {
				let e = i.encodings ?? ["x"], a = !this.#f(t, n, i, e);
				this.#e.push(new hC(this, n, r, i, t.paramRuntime, a));
			}
		}
	}
	#f(e, t, n, r) {
		return vC({
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
		yield* zS(this.legends), yield* Object.values(this.gridLines), yield this.view, yield* Object.values(this.scrollbars), this.selectionRect && (yield this.selectionRect.view);
		for (let e of this.rulerOverlays) yield e.view;
	}
	async syncGuideViews(e = {}) {
		this.#m(), await this.#l();
		let { view: t, axes: n, gridLines: r } = this, i = t.getParentGridChromePolicy(), a = (e, t) => {
			let r = e.getAxisProps();
			if (r === null) return;
			let i = r ? { ...r } : {};
			if (!i.orient) {
				for (let e of ub[t]) if (!n[e]) {
					i.orient = e;
					break;
				}
				if (!i.orient) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			}
			if (i.title === void 0 && (i.title = e.getTitle()), !ub[t].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${t}"!`);
			return i;
		}, o = async (e, r, i) => {
			let o = a(e, r);
			if (o) {
				if (n[o.orient] && !this.allowDuplicateAxes()) throw Error(`An axis with the orient "${o.orient}" already exists!`);
				let a = new gb(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i, { labelClipPolicy: this.getAxisLabelClipPolicy(r, t) });
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
				...tb(n.getConfigScopes(), {
					channel: t,
					orient: i.orient,
					type: e.scaleResolution.type,
					style: i.style
				}),
				...i
			};
			if (o.grid || o.chromGrid) {
				let t = new Xb(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, n);
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
		for (let { definition: n, resolution: r, owner: i } of DS(e.legendOwners ?? yC(t))) {
			if (qS(i, r.channel) !== void 0) continue;
			let t = await LS(n, this.layoutParent);
			if (e.legendFilter && !e.legendFilter(t, i)) {
				t.disposeSubtree();
				continue;
			}
			await RS(this.legends, t, r);
		}
		[
			...this.axisCandidates.map((e) => e.axisView),
			...Object.values(r),
			...zS(this.legends)
		].forEach((e) => e.visit((e) => {
			e instanceof Y && e.resolve("scale");
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
		VS(this.legends), this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {};
	}
	getAxisLabelClipPolicy(e, t) {
		return t.options.axisLabelClipPolicy?.[e] || (e === "x" && (t.spec.viewportWidth != null || this.layoutParent.spec.viewportWidth != null) || e === "y" && (t.spec.viewportHeight != null || this.layoutParent.spec.viewportHeight != null) ? "anchor" : "pixel");
	}
	getOverhang() {
		return ye(this.#h().add(this.#g()).add(this.view.getOverhang()), this.view.spec.overhang);
	}
	prepareLegendLayoutSize(e, t) {
		return BS(this.legends, e, t);
	}
	getViewOverhang() {
		return ye(this.view.getOverhang(), this.view.spec.overhang);
	}
	#h() {
		let e = (e) => hb(this.axes[e]), t = (e) => HS(this.legends, e);
		return new j(e("top") + t("top"), e("right") + t("right"), e("bottom") + t("bottom"), e("left") + t("left"));
	}
	#g() {
		return this.title?.getOverhang() ?? j.zero();
	}
	getTitleZindex() {
		return this.title?.titleSpec.zindex ?? 1;
	}
	renderTitle(e, t, n) {
		this.title?.render(e, this.#_(t), n);
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
function SC(e) {
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
function CC(e) {
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
var wC = {
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
}, TC = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = wC) {
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
			let t = EC(this.#e.KeyD, this.#e.KeyA), n = EC(this.#e.KeyW, this.#e.KeyS), r = DC(this.#t, t, e, this.#r), i = DC(this.#n, n, e, this.#i), a = e / 1e3;
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
function EC(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function DC(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = OC(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = OC(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function OC(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region ../core/src/view/gridView/zoomNavigationUtils.js
function kC(e) {
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
function AC(e) {
	let t = kC(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region ../core/src/view/gridView/keyboardZoomController.js
var jC = class {
	#e;
	#t;
	#n = .5;
	#r = new TC();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = AC(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (Rb(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
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
			MC(e) || this.#r.isNavigationKey(e.code) && AC(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		}), e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && AC(this.#t) && (e.preventDefault(), this.#c());
		}));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function MC(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || NC(e.target));
}
function NC(e) {
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
var PC = 1;
function FC(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
function IC(e, t, n, r = 0) {
	let i = n.getPerpendicularSize(), a = n.getOffset(), o = t == "top" || t == "bottom" ? e.width : e.height, s = n.getParallelSize?.() ?? o, c = FC(n.getAnchor?.() ?? "start") * (o - s), l = n.getParallelSize?.() ?? e.height - 2 * a, u = n.getWidth?.() ?? i, d = n.getHeight?.() ?? l;
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
function LC(e, t, n, r, i, a, o) {
	for (let [s, c] of Object.entries(e)) {
		if (!WS(c)) continue;
		let e = hb(t[s]), l = c.legendView, u = IC(n, s, l, e);
		a(PC, o, () => l.render(r, u, i));
	}
}
//#endregion
//#region ../core/src/view/gridView/separatorView.js
var RC = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), zC = class {
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
	render(e, t, n) {
		this.#n.render(e, t, n);
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
		let a = new Y(VC(e), t, n, r, this.#e === "horizontal" ? i("separatorHorizontal") : i("separatorVertical"));
		return R(a, { skipSubtree: !0 }), F(a, { skipSubtree: !0 }), a;
	}
};
function BC(e) {
	if (!e) return null;
	let t = e === !0 ? { ...RC } : {
		...RC,
		...e
	};
	return t.strokeDash === RC.strokeDash && (t.strokeDash = RC.strokeDash.slice()), t;
}
function VC(e) {
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
}), HC = 10;
function UC(e, t) {
	return Math.max(0, Math.min(e.size, t - e.location));
}
var WC = 10;
function GC(e, t) {
	let n = e.grow ?? 0, r = e.px ?? 0, i = Math.max(zn(e), zn(t));
	if (!n) return {
		px: Math.max(r, i),
		grow: 0
	};
	let a = {
		px: Math.max(r, t.px ?? 0),
		grow: n
	};
	i > (a.px ?? 0) && (a.minPx = i);
	let o = Pe(e);
	return o !== void 0 && o >= i && (a.maxPx = o), a;
}
var KC = class extends br {
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
		let s = BC(e.separator);
		if (s) for (let t of ew(e)) this.#s[t] = new zC({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#c = new jC({
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
		let n = new xC(e, this, this.#o);
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
		vn(this.#n, e, t), this.invalidateSizeCache();
	}
	get #u() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get #d() {
		return new Zy(this.#u.length, this.#e ?? Infinity);
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
		await this.#m(GS(this)), this.invalidateSizeCache();
	}
	async #p() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of kn) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new gb({
				title: n.getTitle(),
				orient: ub[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	async #m(e) {
		VS(this.#i), this.#i = {};
		let t = e ?? (Object.keys(this.resolutions.legend).length > 0 ? [this] : []);
		for (let { definition: e, resolution: n, owner: r } of DS(t)) {
			let t = qS(r, n.channel), i = t ? qC(t, n.channel) : void 0;
			if (i !== this && !(i === void 0 && r === this)) continue;
			let a = await LS(e, this);
			if (this.#a && !this.#a(a, r)) {
				a.disposeSubtree();
				continue;
			}
			await RS(this.#i, a, n);
		}
	}
	async #h() {
		for (let { overlay: e } of this.#l) e.view.disposeSubtree();
		this.#l = [];
		let e = [];
		for (let [t, n] of this.paramRuntime.paramConfigs) {
			if (!("select" in n)) continue;
			let r = w(n.select);
			if (!ie(r)) continue;
			let i = r.encodings ?? ["x"];
			if (!(i.length === 1 && i[0]) || vC({
				extent: r.extent,
				ownerSpec: this.spec,
				channels: i,
				isAligned: (e) => this.#g(e),
				label: `Interval selection param "${t}"`
			}) !== "container") continue;
			let a = this.paramRuntime.createExpression(t), o = a();
			(!o || !$e(o)) && this.paramRuntime.setValue(t, n.value ? {
				type: "interval",
				intervals: n.value
			} : se(i));
			let s = mC({
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
			if (!Te(n) || n.ruler.display === "none") continue;
			let r = n.ruler.encodings ?? ["x"], i = r.length === 1 ? r[0] : void 0;
			if (!i || vC({
				extent: n.ruler.extent,
				ownerSpec: this.spec,
				channels: r,
				isAligned: (e) => this.#g(e),
				label: `Ruler param "${t}"`
			}) !== "container") continue;
			let a = rC({
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
		yield* zS(this.#i);
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
			view: ae(e.map((e) => r(this.#u[e])))
		})));
	}
	#v(e) {
		let t = this.#_(e), n = [];
		n.push(S);
		for (let [e, r] of t.entries()) e > 0 && n.push({
			px: this.#t,
			grow: 0
		}), (e == 0 || this.wrappingFacet) && n.push(S), n.push({
			px: r.axisBefore,
			grow: 0
		}), n.push(r.view), n.push({
			px: r.axisAfter,
			grow: 0
		}), (e == t.length - 1 || this.wrappingFacet) && n.push(S);
		return n;
	}
	#y(e) {
		let t = 0, n = 0, r = 0, i = 0, a = !0, o = e == "row" ? this.spec.height : this.spec.width, s = o || o === 0 ? Xe(this.resolveSizeValue(e == "row" ? "height" : "width", o)) : void 0, c = s && (e == "column" ? this.#d.colIndices.length == 1 : this.#d.rowIndices.length == 1), l = this.#_(e);
		for (let [e, o] of l.entries()) {
			e > 0 && (n += this.#t, r += this.#t, i += this.#t), (e == 0 || this.wrappingFacet) && (n += 0), n += o.axisBefore, r += o.axisBefore, i += o.axisBefore;
			let u = c ? GC(s, o.view) : o.view;
			n += u.px ?? 0, t += u.grow ?? 0, r += zn(u);
			let d = Pe(u);
			d === void 0 ? a = !1 : i += d, n += o.axisAfter, r += o.axisAfter, i += o.axisAfter, (e == l.length - 1 || this.wrappingFacet) && (n += 0);
		}
		let u = {
			px: n,
			grow: t,
			minPx: r || void 0,
			maxPx: l.length && a ? i : void 0
		};
		return s && !c ? GC(s, u) : u;
	}
	#b(e, t) {
		return e == "row" && this.wrappingFacet ? 1 + 6 * t + 2 : 2 + 4 * t + 1;
	}
	getOverhang() {
		return this.#x().add(this.#w());
	}
	#x() {
		let e = this.#_("column"), t = this.#_("row");
		return !e.length || !t.length ? j.zero() : new j(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#S() {
		let e = (e) => {
			let t = db[e], n = this.#r[t];
			return n?.axisProps.orient === e ? hb(n) : 0;
		};
		return new j(e("top"), e("right"), e("bottom"), e("left"));
	}
	#C() {
		let e = (e) => HS(this.#i, e);
		return new j(e("top"), e("right"), e("bottom"), e("left"));
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
		return this._cache("size", () => new Ee(this.#y("column"), this.#y("row")).addPadding(this.#w()));
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#w(), i = HC;
		for (;;) {
			let e = t.shrink(r);
			if (!BS(this.#i, e.width, e.height)) {
				t = e;
				break;
			}
			if (i--, !i) throw Error("Shared legend layout did not settle.");
			this.invalidateSizeCache(), r = this.#w();
		}
		e.pushView(this, t);
		let a = e.getDevicePixelRatio(), o = { devicePixelRatio: a }, s = c(this.#v("column"), t.width, o), l = c(this.#v("row"), t.height, o), u = new Zy(this.#u.length, this.#e ?? Infinity), d = HC;
		for (;;) {
			let e = !1;
			for (let [n, r] of this.#u.entries()) {
				let [i, a] = u.getCellCoords(n), o = s[this.#b("column", i)], c = l[this.#b("row", a)], d = UC(o, t.width), f = UC(c, t.height), p = r.view.prepareLayoutSize?.(d, f) === !0, m = r.prepareLegendLayoutSize(d, f);
				e ||= p || m;
			}
			if (!e) break;
			if (d--, !d) throw Error("Legend layout did not settle.");
			this.invalidateSizeCache(), s = c(this.#v("column"), t.width, o), l = c(this.#v("row"), t.height, o);
		}
		let f = (e) => Math.round(e * a) / a, p = [];
		for (let [e, r] of this.#u.entries()) {
			let { view: i, axes: a, gridLines: o, background: c, backgroundStroke: d, title: m, selectionRect: h, rulerOverlays: g } = r, [_, v] = u.getCellCoords(e), y = s[this.#b("column", _)], b = l[this.#b("row", v)], x = i.getViewportSize(), S = i.getSize(), C = r.getViewOverhang(), ee = y.location - C.left, w = b.location - C.top, T = (e, t, n = !1) => n ? e[t].grow ? (t == "width" ? y : b).size : e[t].px : (t == "width" ? y : b).size + C[t], E = T(x, "width", i.spec.viewportWidth != null), te = T(x, "height", i.spec.viewportHeight != null), D = T(S, "width", i.spec.viewportWidth != null), ne = T(S, "height", i.spec.viewportHeight != null), O = r.scrollbars.horizontal, re = r.scrollbars.vertical, ie = O ? () => f(O.viewportOffset) : () => 0, ae = re ? () => f(re.viewportOffset) : () => 0, k = new U(() => t.x + ee, () => t.y + w, () => E, () => te), oe = i.isScrollable(), se = oe ? new U(() => t.x + ee - ie(), () => t.y + w - ae(), () => D, () => ne) : k;
			r.coords = k;
			let ce = Un(n), le = Kn(k, ce);
			p.push({
				col: _,
				row: v,
				view: i,
				axes: a,
				gridLines: o,
				background: c,
				backgroundStroke: d,
				title: m,
				selectionRect: h,
				rulerOverlays: g,
				viewportCoords: k,
				viewCoords: se,
				parentClip: ce,
				visibleChildCoords: le,
				viewWidth: D,
				viewHeight: ne,
				scrollable: oe,
				gridChild: r
			});
		}
		let m = this.#x(), h = tw(p.map((e) => e.viewCoords)), g = [], _ = [], v = [], y = 0, b = (e, t, n) => {
			(e > 0 ? _ : g).push({
				zindex: e,
				order: t,
				sequence: y++,
				render: n
			});
		}, x = (e) => {
			e.sort((e, t) => e.zindex - t.zindex || e.order - t.order || e.sequence - t.sequence);
			for (let t of e) t.render();
		};
		for (let t of p) t.background && b(t.gridChild.backgroundZindex, Q.background, () => t.background?.render(e, t.visibleChildCoords, {
			...n,
			clipRect: void 0
		}));
		let S = this.#s.vertical;
		S && (S.update(s, u.nCols, t, (e, t) => this.#b(e, t), this.wrappingFacet, m), b(S.getZindex(), Q.separator, () => S.render(e, t, n)));
		let C = this.#s.horizontal;
		if (C && (C.update(l, u.nRows, t, (e, t) => this.#b(e, t), this.wrappingFacet, m), b(C.getZindex(), Q.separator, () => C.render(e, t, n))), h) for (let { overlay: t, order: r } of this.#l) b(t.zindex, r, () => t.view.render(e, h, n));
		for (let r of p) {
			let { view: i, axes: a, gridLines: o, backgroundStroke: s, title: c, selectionRect: l, rulerOverlays: d, viewportCoords: f, viewCoords: p, parentClip: m, visibleChildCoords: h, viewWidth: g, viewHeight: _, scrollable: y, gridChild: x, col: S, row: C } = r, ee = XC(i), w = ee || y, T = ZC(i) || y;
			for (let t of Object.values(o)) b(t.axisProps.zindex ?? 0, Q.grid, () => t.render(e, f, n));
			let E = w ? Gn(m, Wn(h, ee || !!x.scrollbars.horizontal, ee || !!x.scrollbars.vertical)) : n.clip;
			v.push(() => i.render(e, p, w ? {
				...n,
				clipRect: E?.rect,
				clip: E
			} : n)), s && b(rw(x.backgroundStrokeZindex, T), Q.backgroundStroke, () => s?.render(e, h, {
				...n,
				clipRect: void 0
			}));
			for (let [t, r] of Object.entries(a)) {
				let i = t == "left" || t == "right" ? "vertical" : "horizontal", a = x.scrollbars[i], o = iw(a ? f.modify(i == "vertical" ? {
					y: () => p.y,
					height: _
				} : {
					x: () => p.x,
					width: g
				}) : f, t, r), s = Un(n), c = s?.rect;
				if (a) {
					let e = Wn(f, i == "horizontal", i == "vertical");
					s = Gn(s, e), c = s?.rect;
				}
				s && r.labelClipPolicy === "anchor" && (s = Wn(s.rect, db[t] === "x", db[t] === "y"), c = s?.rect), b(nw(r.axisProps, T), Q.axis, () => r.render(e, o, {
					...n,
					clipRect: c,
					clip: s
				}));
			}
			LC(x.legends, this.#E(a, S, C, u), f, e, n, b, Q.legend);
			for (let t of Object.values(this.#r)) {
				let r = t.axisProps.orient;
				(r == "left" && S == 0 || r == "right" && S == u.nCols - 1 || r == "top" && C == 0 || r == "bottom" && C == u.nRows - 1) && b(nw(t.axisProps, T), Q.axis, () => t.render(e, iw(f.shrink(x.getViewOverhang()), r, t), n));
			}
			l && b(l.zindex, Q.selectionRect, () => l.view.render(e, p, n));
			for (let t of d) b(t.zindex, Q.ruler, () => t.view.render(e, p, n));
			for (let r of Object.values(x.scrollbars)) b(1, Q.scrollbar, () => {
				r.updateScrollbar(f, p), r.render(e, t, n);
			});
			c && b(x.getTitleZindex(), Q.title, () => x.renderTitle(e, f, n));
		}
		LC(this.#i, this.#T(), t, e, n, b, Q.legend), x(g);
		for (let e of v) e();
		x(_), e.popView(this);
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
		Db(this, e, () => {
			let t = this.#u.find((t) => t.coords.containsPoint(e.point.x, e.point.y)), n = t?.view, r = t ? void 0 : this.#D(e.point);
			if (e.type === "wheelclaimprobe") {
				if (!n) {
					r && e.claimWheel();
					return;
				}
				$C(n) ? QC(n) && e.claimWheel() : n.propagateInteraction(e);
				return;
			}
			this.#c?.handlePointerEvent(t, e);
			for (let n of Object.values(t?.scrollbars ?? {})) if (Ob(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			if (!n) {
				r && this.#A(e, r);
				return;
			}
			Ob(e, () => !0, () => n.propagateInteraction(e), $C(n) ? () => Vb(e, t.coords, (e) => this.#j(t.coords, t.view, e), this.context.getCurrentHover(), this.context.animator) : void 0);
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
			zoomableResolutions: JC(t, n)
		};
	}
	#O() {
		if (Jy(this.spec)) return "x";
		if (Yy(this.spec)) return "y";
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
		if (!(i >= o || a >= s)) return U.create(i, a, o - i, s - a);
	}
	#A(e, t) {
		e.target = this, Vb(e, t.coords, (e) => YC(t.coords, e, t.zoomableResolutions, this.context.animator), this.context.getCurrentHover(), this.context.animator);
	}
	#j(e, t, n) {
		return YC(e, n, kC(t), this.context.animator);
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
};
function qC(e, t) {
	let n = e.getLayoutAncestors().find((e) => e instanceof KC);
	if (!n) throw Error(`Legend collection for channel "${t}" declared at view "${e.name}" requires a GridView layout host.`);
	return n;
}
function JC(e, t) {
	let n = {
		x: /* @__PURE__ */ new Set(),
		y: /* @__PURE__ */ new Set()
	};
	return n[e].add(t), n;
}
function YC(e, t, n, r) {
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
function XC(e) {
	let t = !0;
	return e.visit((e) => {
		e instanceof Y && (t &&= e.mark.properties.clip === !0);
	}), t;
}
function ZC(e) {
	let t = !1;
	return e.visit((e) => {
		if (e instanceof Y) {
			let n = e.mark.properties.clip;
			t ||= n === !0 || n === "x" || n === "y";
		}
	}), t;
}
function QC(e) {
	let t = kC(e);
	return t.x.size > 0 || t.y.size > 0;
}
function $C(e) {
	return e instanceof Y || e instanceof X;
}
function ew(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function tw(e) {
	if (e.length === 0) return;
	let t = Math.min(...e.map((e) => e.x)), n = Math.min(...e.map((e) => e.y)), r = Math.max(...e.map((e) => e.x2)), i = Math.max(...e.map((e) => e.y2));
	return U.create(t, n, r - t, i - n);
}
function nw(e, t) {
	return e.zindex === void 0 ? e.placement === "inside" ? 1 : t ? WC : 0 : e.zindex;
}
function rw(e, t) {
	return e ?? (t ? WC : 0);
}
function iw(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize(), a = r.placement === "inside", o = r.offset ?? 0;
	if (t == "bottom") return a ? e.translate(0, e.height - i - o).modify({ height: i }) : e.translate(0, e.height + o).modify({ height: i });
	if (t == "top") return a ? e.translate(0, o).modify({ height: i }) : e.translate(0, -i - o).modify({ height: i });
	if (t == "left") return a ? e.translate(o, 0).modify({ width: i }) : e.translate(-i - o, 0).modify({ width: i });
	if (t == "right") return a ? e.translate(e.width - i - o, 0).modify({ width: i }) : e.translate(e.width + o, 0).modify({ width: i });
}
//#endregion
//#region ../core/src/view/concatView.js
var aw = class extends KC {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, Xy(e) ? e.columns : Jy(e) ? 1 : Infinity, a), this.spec = e;
	}
	async initializeChildren() {
		let e = this.spec, t = Xy(e) ? e.concat : Jy(e) ? e.vconcat : e.hconcat, n = { inheritEncoding: !0 };
		this.options.layoutSizeParams == "force" && (n.layoutSizeParams = "force"), this.setChildren(await Promise.all(t.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("grid"), void 0, n))));
		let r = Object.values(this.spec.resolve?.legend ?? {}).includes("collected");
		await this.syncGuideViews({ legendOwners: r ? GS(this) : void 0 });
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	async moveChildAt(e, t) {
		let n = this.#t(), { specs: r } = this.#e();
		vn(r, e, t), super.moveChildAt(e, t);
		let i = await this.#n([]);
		await n.initializeUninitializedChromeViews(i), this.context.requestLayoutReflow();
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : Jy(this.spec) && e === "x" || Yy(this.spec) && e === "y" ? "shared" : "independent";
	}
	#e() {
		let e = this.spec, t;
		return t = Xy(e) ? e.concat : Jy(e) ? e.vconcat : e.hconcat, {
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
		return this.options.layoutSizeParams == "force" && (e.layoutSizeParams = "force"), new jy(this, {
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
			legendOwners: GS(this)
		});
		let t = /* @__PURE__ */ new Set([this]);
		for (let e of this.getDataAncestors()) if (Object.values(e.spec.resolve?.legend ?? {}).includes("collected")) {
			let n = e.getLayoutAncestors().find((e) => e instanceof KC);
			n && !t.has(n) && (await n.syncLegendViews(), t.add(n));
		}
		return t;
	}
};
//#endregion
//#region ../core/src/config/resolveConfig.js
function ow({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return d([
		e,
		t,
		n
	]);
}
function sw(e, t) {
	if (!(!e && !t)) return d([e, t]);
}
//#endregion
//#region ../core/src/view/viewFactory.js
var cw = "viewRoot", lw = /* @__PURE__ */ new WeakMap();
function uw(e) {
	return lw.get(e) ?? e;
}
var dw = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(Ky, t(X)), this.addViewType(Iy, ((e, t, n, r, i, a) => new X(Ly(e), t, n, r, i, a))), this.addViewType(Gy, t(Y)), this.addViewType(Jy, t(aw)), this.addViewType(Yy, t(aw)), this.addViewType(Xy, t(aw));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw mw(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let s, c = qy(e) ? e.name ?? null : void 0;
		if (qy(e)) {
			let i;
			if ("url" in e.import) if (this.options.allowImport) i = await vh(e, r.getBaseUrl(), t);
			else throw new He("Importing views is not allowed!", n);
			else if ("template" in e.import) i = fw(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), pw(i, e), s = i;
		} else s = e;
		let l = (e) => e?.params?.some((e) => Zt(e) && w(e.select).type == "interval"), u = !1;
		if (!r && this.options.wrapRoot && (!(Jy(s) || Yy(s) || Xy(s)) || l(s)) && i === "viewRoot") {
			let e = { ...s };
			delete e.theme, s = {
				name: "implicitRoot",
				vconcat: [e]
			}, u = !0;
		}
		let d = this.createView(s, t, n, r, i, o);
		if (c !== void 0 && xn(d, c), u && R(d), d instanceof br && await d.initializeChildren(), u) {
			let e = d;
			lw.set(d, e.children[0]);
		}
		return d.registerSizeInvalidation(), d;
	}
};
function fw(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return structuredClone(n);
	if (t.dataParent) return fw(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function pw(e, t) {
	t.name != null && (e.name = t.name), t.visible != null && (e.visible = t.visible), e.config = sw(t.config, e.config);
	let n = O(t.params) ? t.params : A(t.params) ? Object.entries(t.params).map(([e, t]) => ({
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
function mw(e) {
	return "samples" in e && A(e.samples) && "spec" in e && A(e.spec);
}
//#endregion
//#region ../core/src/utils/inertia.js
var hw = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = de(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = ce([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
	}
	setMomentum(e, t) {
		if (this.disabled) {
			t(e);
			return;
		}
		this.callback = t;
		let n = r(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function gw(e) {
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
var _w = class {
	#e;
	#t;
	constructor(e, t, n) {
		this.point = e, this.#n = t, this.stopped = !1, this.wheelClaimed = !1, this.#r = n, this.target = void 0, this.currentTarget = void 0, this.relatedTarget = void 0;
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
		if (!jb(this.uiEvent)) throw Error("Not a WheelEvent!");
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
		return this.#e ||= Nb(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if (!jb(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= Mb(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
}, vw = class {
	#e;
	#t;
	#n;
	#r = [];
	constructor({ viewRoot: e }) {
		this.#e = e;
	}
	dispatch(e, t) {
		this.#t = e;
		let n = new _w(e, t);
		return this.#e.propagateInteraction(n), this.#n = n.target, n.type === "mousemove" && this.#i(n), n;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.length === 0) {
			this.#r = [], this.#n = void 0;
			return;
		}
		let t = new _w(this.#t, e, "mouseleave");
		this.#a(t, this.#r, void 0), this.#r = [], this.#n = void 0;
	}
	getCurrentTarget() {
		return this.#n;
	}
	#i(e) {
		let t = this.#s(e.target), n = this.#r, r = 0;
		for (; r < n.length && r < t.length && n[r] === t[r];) r++;
		r < n.length && this.#a(e, n.slice(r), t.at(-1)), r < t.length && this.#o(e, t.slice(r), n.at(-1)), this.#r = t;
	}
	#a(e, t, n) {
		for (let r = t.length - 1; r >= 0; r--) {
			let i = new _w(e.point, e.uiEvent, "mouseleave"), a = t[r];
			if (i.target = a, i.currentTarget = a, i.relatedTarget = n, this.#c(a, i), i.stopped) return;
		}
	}
	#o(e, t, n) {
		for (let r of t) {
			let t = new _w(e.point, e.uiEvent, "mouseenter");
			if (t.target = r, t.currentTarget = r, t.relatedTarget = n, this.#c(r, t), t.stopped) return;
		}
	}
	#s(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#c(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, yw = class {
	#e;
	#t;
	#n;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#r(bw(e, t));
	}
	clear() {
		this.#r(void 0);
	}
	#r(e) {
		if (xw(this.#t, e)) {
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
function bw(e, t) {
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
function xw(e, t) {
	return !e || !t ? e === t : e.owner === t.owner && e.raw === t.raw;
}
//#endregion
//#region ../core/src/genomeSpy/interactionController.js
var Sw = class {
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
	#y() {
		this.#n.sticky = !1, this.#g = !0, this.#n.clear();
	}
	constructor({ viewRoot: e, glHelper: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, getDevicePixelRatio: s }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o, this.#s = s, this.#c = new vw({ viewRoot: e }), this.#l = new yw({ canvas: t.canvas }), this.#u = void 0, this.#d = new hw(this.#r), this.#f = void 0, this.#p = void 0;
	}
	getCurrentHover() {
		return this.#u;
	}
	suspendHoverTracking() {
		this.#_++, !this.#h && (this.#n.clear(), this.#m = !1);
	}
	resumeHoverTracking(e) {
		if (!(this.#_ <= 0) && (this.#_--, !(this.#_ > 0) && (this.#n.clear(), this.#m = !1, !this.#w()))) {
			if (e) {
				let t = this.#b(e);
				if (this.#p = t, this.#x(t)) {
					this.#S(t), this.#l.update({
						target: this.#c.getCurrentTarget(),
						hover: this.#u
					});
					return;
				}
				this.#c.handlePointerLeave(e);
			} else if (this.#p && this.#x(this.#p)) {
				this.#S(this.#p), this.#l.update({
					target: this.#c.getCurrentTarget(),
					hover: this.#u
				});
				return;
			}
			this.#u = null, this.#l.clear();
		}
	}
	registerInteractionEvents() {
		let e = this.#t.canvas, t = [], n = (e, n, r, i) => {
			e.addEventListener(n, r, i), t.push(() => e.removeEventListener(n, r, i));
		}, r = performance.now(), i = !1, a;
		globalThis.document?.addEventListener && n(document, "mousedown", (t) => {
			this.#n.sticky && !t.composedPath().includes(e) && !this.#n.containsEvent(t) && this.#y();
		}, { capture: !0 });
		let o = (e, t) => {
			let n = this.#c.dispatch(e, t);
			return !this.#m && !this.#h && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#l.update({
				target: n.target,
				hover: this.#u
			}), n;
		}, s = (e) => {
			let t = performance.now(), n = t - r < 200;
			if (e instanceof MouseEvent) {
				if (e.type !== "contextmenu" && this.#w()) return;
				let a = this.#b(e);
				this.#p = a, e.type == "mousemove" && !n && this.#_ === 0 && (this.#g = !1, this.#n.handleMouseMove(e), this.#m = !1, e.buttons == 0 && !zb() && (this.#o(), this.#T(a.x, a.y)));
				let s = (e) => {
					o(a, e);
				};
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !zb()) this.#o();
				else if (e.type == "wheel") {
					r = t, this.#m = !1;
					let n = e;
					if (Math.abs(n.deltaX) > Math.abs(n.deltaY)) this.#u = null, this.#d.cancel();
					else if (o(a, { type: "wheelclaimprobe" }).wheelClaimed) {
						let e = gw(n);
						this.#d.setMomentum(n.deltaY * (n.deltaMode ? 80 : 1), (t) => {
							let n = new WheelEvent("wheel", {
								...e,
								deltaMode: 0,
								deltaX: 0,
								deltaY: t
							});
							s(n);
						}), n.preventDefault();
						return;
					} else this.#d.cancel();
				}
				if (e.type == "click") {
					if (i) return;
					let t = this.#u ? {
						type: e.type,
						viewPath: this.#u.mark.unitView.getLayoutAncestors().map((e) => e.name).reverse(),
						datum: this.#u.datum
					} : {
						type: e.type,
						viewPath: null,
						datum: null
					};
					this.#i("click", t);
				}
				if (e.type != "click" || this.#f?.subtract(Z.fromMouseEvent(e)).length < 3) {
					let t = o(a, e);
					return e.type == "dblclick" && this.#_ === 0 && this.#x(a) && this.#C(), t;
				}
			}
		};
		n(e, "mousedown", (e) => {
			this.#f = Z.fromMouseEvent(e), this.#h = !1;
			let t = e.shiftKey || e.ctrlKey || e.metaKey;
			this.#n.sticky ? (this.#y(), i = !0) : i = !1;
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
		].forEach((t) => n(e, t, s));
		let c = (t, n) => {
			let r = e.getBoundingClientRect();
			return new Z(t - r.left - e.clientLeft, n - r.top - e.clientTop);
		}, l = (e) => {
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
				distance: Cw(t, n)
			};
		}, u = (e, t, n, r, i, a, s) => {
			let l = c(e, t);
			o(l, {
				type: "touchgesture",
				phase: n,
				pointerCount: r,
				xDelta: i,
				yDelta: a,
				zDelta: s
			});
		}, d = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#m = !1;
			let t = l(e.touches);
			if (!t) {
				a = void 0;
				return;
			}
			if (!a || a.pointerCount !== t.pointerCount) {
				a = t;
				return;
			}
			let n = t.centerX - a.centerX, r = t.centerY - a.centerY, i = t.pointerCount === 2 ? ww(a.distance, t.distance) : 0;
			(n !== 0 || r !== 0 || i !== 0) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && u(a.centerX, a.centerY, "move", t.pointerCount, n, r, i), a = t;
		}, f = (e) => {
			e.preventDefault(), this.#m = !1, a && e.touches.length === 0 && u(a.centerX, a.centerY, "end", a.pointerCount, 0, 0, 0), a = l(e.touches);
		};
		return n(e, "touchstart", d, { passive: !1 }), n(e, "touchmove", d, { passive: !1 }), n(e, "touchend", f, { passive: !1 }), n(e, "touchcancel", f, { passive: !1 }), n(e, "dragstart", (e) => e.stopPropagation()), n(e, "mouseout", (e) => {
			if (!this.#w()) {
				if (this.#_ > 0) {
					this.#n.clear(), this.#m = !1;
					return;
				}
				this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#u = null;
			}
		}), () => {
			for (let e of t) e();
		};
	}
	#b(e) {
		let t = this.#t.canvas, n = t.getBoundingClientRect();
		return new Z(e.clientX - n.left - t.clientLeft, e.clientY - n.top - t.clientTop);
	}
	#x(e) {
		let t = this.#t.canvas;
		return e.x >= 0 && e.y >= 0 && e.x <= t.clientWidth && e.y <= t.clientHeight;
	}
	#S(e) {
		zb() || (this.#o(), this.#T(e.x, e.y));
	}
	#C() {
		this.#v || (this.#v = !0, this.#r.requestRender(), window.requestAnimationFrame(() => {
			if (this.#v = !1, this.#_ > 0 || this.#w()) return;
			let e = this.#p;
			if (!e || !this.#x(e)) {
				this.#u = null, this.#l.clear();
				return;
			}
			this.#n.clear(), this.#m = !1, this.#S(e), this.#l.update({
				target: this.#c.getCurrentTarget(),
				hover: this.#u
			});
		}));
	}
	#w() {
		return typeof document < "u" && !!document.body && document.body.classList.contains("gs-freeze-interaction");
	}
	#T(e, t) {
		let n = this.#s(), r = ru(this.#t.gl, this.#t._pickingBufferInfo, e * n, t * n), i = r[0] | r[1] << 8 | r[2] << 16 | r[3] << 24;
		if (i == 0) {
			this.#u = null;
			return;
		}
		if (i !== this.#u?.uniqueId && (this.#u = null), this.#u || this.#e.visit((n) => {
			if (n instanceof Y) {
				if (n.mark.isPickingParticipant() && [...n.facetCoords.values()].some((n) => n.containsPoint(e, t))) {
					let e = n.getCollector().findDatumByUniqueId(i);
					e && (this.#u = {
						mark: n.mark,
						datum: e,
						uniqueId: i
					});
				}
				if (this.#u) return Tn;
			}
		}), this.#u) {
			let e = this.#u.mark;
			this.updateTooltip(this.#u.datum, async (t) => {
				if (!e.isPickingParticipant()) return;
				let n = e.properties.tooltip;
				if (n !== null && n !== !1) {
					let r = n?.handler ?? "default", i = this.#a[r];
					if (!i) throw Error("No such tooltip handler: " + r);
					let a = Uv(t, e, n?.params);
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
function Cw(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function ww(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region ../core/src/view/renderingContext/compositeViewRenderingContext.js
var Tw = class extends Sr {
	constructor(...e) {
		super({}), this.contexts = e;
	}
	beginSampleFacetBatch() {
		for (let e of this.contexts) e.beginSampleFacetBatch();
	}
	endSampleFacetBatch() {
		for (let e of this.contexts) e.endSampleFacetBatch();
	}
	pushView(e, t) {
		for (let n of this.contexts) n.pushView(e, t);
	}
	popView(e) {
		for (let t of this.contexts) t.popView(e);
	}
	renderMark(e, t) {
		for (let n of this.contexts) n.renderMark(e, t);
	}
}, Ew = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor({ viewRoot: e, glHelper: t, getBackground: n, broadcast: r, onLayoutComputed: i }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = void 0, this.#o = void 0, this.#s = !1;
	}
	computeLayout() {
		if (!this.#e) return;
		this.#r("layout"), this.#t.invalidateSize();
		let e = 5;
		for (; this.#c();) {
			if (!this.#t.invalidateSize()) {
				this.#i(), this.#r("layoutComputed");
				return;
			}
			if (e--, e == 0) throw Error("Layout did not settle: canvas size kept changing.");
		}
	}
	#c() {
		let e = this.#e, t = this.#t.getLogicalCanvasSize();
		if (isNaN(t.width) || isNaN(t.height)) return console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`), !1;
		let n = {
			webGLHelper: this.#t,
			canvasSize: t,
			devicePixelRatio: this.#t.getDevicePixelRatio(t)
		};
		return this.#a = new ur({ picking: !1 }, {
			...n,
			clearColor: this.#n()
		}), this.#o = new ur({ picking: !0 }, {
			...n,
			framebufferInfo: this.#t._pickingBufferInfo
		}), e.render(new Tw(this.#a, this.#o), U.create(0, 0, t.width, t.height)), !0;
	}
	renderAll() {
		this.#a?.render(), this.#s = !0;
	}
	renderPickingFramebuffer() {
		this.#s &&= (this.#o.render(), !1);
	}
};
//#endregion
//#region ../core/src/genomeSpy/viewContextFactory.js
function Dw(e) {
	let t = (e) => {
		throw Error("ViewContext." + e + " is not configured.");
	}, n = {
		dataFlow: e.dataFlow ?? t("dataFlow"),
		glHelper: e.allowMissingGlHelper ? e.glHelper : e.glHelper ?? t("glHelper"),
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
var Ow = {
	xOffset: 0,
	yOffset: 0,
	minBufferSize: 0,
	opacity: 1
}, kw = {
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
}, Aw = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 3,
	cornerRadius: 0,
	minWidth: .5,
	minHeight: .5,
	minOpacity: 1
}, jw = {
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
}, Mw = {
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
}, Nw = {
	x2: void 0,
	y2: void 0,
	size: 1,
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt"
}, Pw = {
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt",
	orient: void 0,
	thickness: 1
}, Fw = {
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
}, Iw = {
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
}, Lw = {
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
}, Rw = { expr: "round(axisLength / (30 + 55 * smoothstep(100, 700, axisLength)))" }, zw = { tickCount: Rw }, Bw = { tickCount: Rw }, Vw = {
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
}, Hw = {
	nominalColorScheme: "tableau10",
	ordinalColorScheme: "blues",
	quantitativeColorScheme: "viridis"
}, Uw = {
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
}, Ww = {
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
}, Gw = {
	orient: "top",
	frame: "group",
	reserve: !1,
	anchor: "start",
	align: "left",
	baseline: "top",
	offset: -10,
	dx: 10,
	fontSize: 12
}, Kw = {
	view: {},
	mark: Ow,
	point: kw,
	rect: Aw,
	arrow: jw,
	rule: Nw,
	tick: Pw,
	text: Fw,
	link: Iw,
	axis: Lw,
	axisX: zw,
	axisY: Bw,
	axisLocus: Vw,
	legend: Nx,
	legendTrack: Ix,
	scale: Hw,
	range: Uw,
	title: Ww,
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
		overlay: Gw,
		"overlay-title": Gw,
		"group-subtitle": {
			fontSize: 11,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		...Fx,
		...Mw
	}
};
//#endregion
//#region ../core/src/view/gridView/guideViewSync.js
async function qw(e) {
	let t = e.getDescendants(), n = /* @__PURE__ */ new Map();
	for (let e of KS(t)) for (let t of new Set(Object.values(e.resolutions.legend))) {
		let r = qS(e, t.channel), i = r ? qC(r, t.channel) : e instanceof KC ? e : void 0;
		if (i) {
			let t = n.get(i) ?? [];
			t.includes(e) || (t.push(e), n.set(i, t));
		}
	}
	let r = t.filter((e) => e instanceof KC);
	for (let e of r) await e.syncGuideViews({ legendOwners: n.get(e) ?? [] });
}
//#endregion
//#region ../core/src/genomeSpy/headlessBootstrap.js
function Jw(e) {
	Dy(e), Oy(e);
}
//#endregion
//#region ../core/src/genomeSpy/canvasExport.js
function Yw({ glHelper: e, viewRoot: t, logicalWidth: n, logicalHeight: r, devicePixelRatio: i, clearColor: a = "white" }) {
	let { gl: o, framebufferInfo: s } = Zw({
		glHelper: e,
		viewRoot: t,
		logicalWidth: n,
		logicalHeight: r,
		pixelRatio: i,
		clearColor: a
	});
	try {
		return sr(o, s, "image/png");
	} finally {
		Qw(o, s);
	}
}
async function Xw({ glHelper: e, viewRoot: t, logicalWidth: n, logicalHeight: r, pixelRatio: i, clearColor: a = "white", mimeType: o = "image/png" }) {
	if (o != "image/png") throw Error(`Unsupported raster export MIME type: ${o}`);
	let { gl: s, framebufferInfo: c } = Zw({
		glHelper: e,
		viewRoot: t,
		logicalWidth: n,
		logicalHeight: r,
		pixelRatio: i,
		clearColor: a
	});
	try {
		return await fr(s, c, o);
	} finally {
		Qw(s, c);
	}
}
function Zw({ glHelper: e, viewRoot: t, logicalWidth: n, logicalHeight: r, pixelRatio: i, clearColor: a }) {
	n ??= e.getLogicalCanvasSize().width, r ??= e.getLogicalCanvasSize().height, i ??= window.devicePixelRatio ?? 1;
	let o = e.gl, s = Math.floor(n * i), c = Math.floor(r * i), l = dr(o, [{
		format: o.RGBA,
		type: o.UNSIGNED_BYTE,
		minMag: o.LINEAR,
		wrap: o.CLAMP_TO_EDGE
	}], s, c);
	try {
		let s = new ur({ picking: !1 }, {
			webGLHelper: e,
			canvasSize: {
				width: n,
				height: r
			},
			devicePixelRatio: i,
			clearColor: a,
			framebufferInfo: l
		});
		return t.render(s, U.create(0, 0, n, r)), s.render(), {
			gl: o,
			framebufferInfo: l
		};
	} catch (e) {
		throw Qw(o, l), e;
	}
}
function Qw(e, t) {
	e.deleteTexture(t.attachments[0]), e.deleteFramebuffer(t.framebuffer);
}
//#endregion
//#region ../core/src/paramRuntime/embedParamApi.js
function $w(e, t) {
	let n = nT(e, t);
	if (!n.length) throw Error("Parameter \"" + t + "\" not found.");
	let r = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = e.view.paramRuntime.findRuntimeForParam(t);
		if (!n) throw Error("Parameter \"" + t + "\" has no runtime value.");
		r.set(n, {
			runtime: n,
			readOnly: eT(r.get(n), e),
			pointSelection: tT(r.get(n), e)
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
function eT(e, t) {
	return !!(e?.readOnly || "expr" in t.param);
}
function tT(e, t) {
	if (e?.pointSelection) return !0;
	let n = t.param;
	return "select" in n && rt(w(n.select));
}
function nT(e, t) {
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
function rT(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && aT(t) ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: iT()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !aT(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function iT() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function aT(e) {
	try {
		return Vf(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../core/src/view/dataReadiness.js
function oT(e, t) {
	let n = {};
	for (let r of t) {
		let t = e.getScaleResolution(r);
		t && (n[r] = Array.from(t.getDomain()));
	}
	return Object.keys(n).length ? n : void 0;
}
function sT(e, t, n) {
	let r = lT(e, n);
	if (!r.size) return !0;
	for (let e of r) if (!fT(e, t)) return !1;
	return !0;
}
function cT(e, t, n, r, i) {
	let a = i ?? uT;
	return new Promise((i, o) => {
		let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = () => {
			f(), d();
		}, u = () => {
			for (let e of s) e();
			s.clear(), e.removeBroadcastListener("subtreeDataReady", l), r && r.removeEventListener("abort", p);
		}, d = () => {
			sT(t, n, a) && (u(), i());
		}, f = () => {
			t.visit((e) => {
				if (!(e instanceof Y) || !a(e)) return;
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
		f(), dT(t, n, a), d();
	});
}
function lT(e, t) {
	let n = t ?? uT, r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		if (!(e instanceof Y) || !n(e)) return;
		let t = e;
		for (; t && !(t.flowHandle && t.flowHandle.dataSource);) t = t.dataParent;
		if (!t || !t.flowHandle) return;
		let i = t.flowHandle.dataSource;
		i instanceof ts && r.add(i);
	}), r;
}
function uT(e) {
	return e.isConfiguredVisible() && e.getEffectiveOpacity() > 0;
}
function dT(e, t, n) {
	for (let r of lT(e, n)) {
		let e = pT(r, t);
		e && r.ensureDataForDomain(e);
	}
}
function fT(e, t) {
	let n = pT(e, t);
	return !!n && e.isDataReadyForDomain({ [e.channel]: n });
}
function pT(e, t) {
	return t?.[e.channel] ?? (t ? void 0 : Array.from(e.scaleResolution.getDomain()));
}
//#endregion
//#region ../core/src/config/themes.js
var mT = {
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
}, hT = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: "black" },
		text: { color: "black" },
		link: { color: "black" }
	},
	vegalite: mT,
	quartz: d([mT, {
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
	dark: d([mT, {
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
	fivethirtyeight: d([mT, {
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
	urbaninstitute: d([mT, {
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
}, gT = Object.keys(hT);
function _T(e) {
	let t = { ...hT[e] };
	return delete t.background, t;
}
function vT(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in hT));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + gT.join(", "));
	return t;
}
var yT = "genomespy";
function bT(e) {
	return hT[e].background;
}
function xT(e) {
	let t = vT(e);
	if (t.length != 0) return d(t.map((e) => _T(e)));
}
//#endregion
//#region ../core/src/utils/warning.js
var ST = /* @__PURE__ */ new Set();
function CT(e) {
	ST.has(e) || (ST.add(e), console.warn(e));
}
//#endregion
//#region ../core/src/genomeSpy/canvasBackground.js
function wT(e) {
	if (e.background !== void 0) return e.background;
	let t = e.theme ? Array.isArray(e.theme) ? e.theme : [e.theme] : [], n;
	for (let e of t) {
		let t = bT(e);
		t !== void 0 && (n = t);
	}
	return n;
}
function TT(e, t) {
	return t.background === void 0 ? wT(e) ?? "white" : t.background;
}
//#endregion
//#region ../core/src/genomeSpyBase.js
var ET = class {
	#e = [];
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s = new Fl();
	#c = new Il();
	#l = new Il();
	constructor(e, t, n = {}) {
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new dw(), this.namedDataProviders = [], this.animator = new T(() => this.renderAll()), this._layoutReflowTransition = () => this.computeLayout(), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: oy,
			refseqgene: Tv,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#i = new Rl(e, n), this.dpr = window.devicePixelRatio;
	}
	get #u() {
		return this.container.querySelector(".canvas-wrapper");
	}
	#d() {
		this.#i.initialize(this.viewRoot);
	}
	registerNamedDataProvider(e) {
		CT("The `namedDataProvider` embed option is deprecated. Declare named datasets explicitly and update them through `api.datasets` or the owning `ViewHandle.datasets`."), this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		CT("`updateNamedData()` is deprecated. Update an explicitly declared dataset through `api.datasets` or its owning `ViewHandle.datasets`.");
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
	}
	getParam(e) {
		return $w(this.viewRoot, e);
	}
	addEventListener(e, t) {
		this.#c.add(e, t);
	}
	removeEventListener(e, t) {
		this.#c.remove(e, t);
	}
	broadcast(e, t) {
		let n = {
			type: e,
			payload: t
		};
		this.viewRoot.visit((e) => e.handleBroadcast(n)), this.#l.emit(e, n);
	}
	#f() {
		this.dpr = this.#o.getDevicePixelRatio();
		let e = this.viewRoot.paramRuntime.allocateSetter("devicePixelRatio", this.dpr), t = () => {
			this.#o.invalidateSize(), this.dpr = this.#o.getDevicePixelRatio(), e(this.dpr), this.computeLayout(), this.renderAll();
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
	#p() {
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = Sl(this.container);
		this.#o = new $l(e, () => this.viewRoot ? yh(this.viewRoot) : {
			width: void 0,
			height: void 0
		}, { powerPreference: this.options.powerPreference ?? "default" }, () => this.#t?.renderAll()), e.appendChild(t), this.tooltip = n, this.#r = new Nl(), this.#n = new Ml(t, this.#r);
	}
	destroy() {
		let e = this.#u;
		for (this.container.classList.remove("genome-spy"), e.classList.remove("loading"), this.#s.removeAll(), this.#e.forEach((e) => e()), this.#o.finalize(), this.#i.remove(), this.#n.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	async #m() {
		await this.#h();
		let e = this.#g();
		await this.#v(e), await av(this.viewRoot, e.dataFlow, e.fontManager, (e) => this.broadcast("dataFlowBuilt", e)), this.#b(e);
	}
	async #h() {
		this.genomeStore = new dv(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = rT(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#g() {
		let e = new M_();
		e.loadingStatusRegistry = this.#r;
		let t = ow({
			defaultConfig: Kw,
			builtInTheme: xT(yT),
			theme: d([this.options.theme, xT(this.spec.theme)])
		});
		return Dw({
			dataFlow: e,
			glHelper: this.#o,
			animator: this.animator,
			genomeStore: this.genomeStore,
			fontManager: new _v(this.#o),
			updateTooltip: this.updateTooltip.bind(this),
			getNamedDataFromProvider: this.getNamedDataFromProvider.bind(this),
			getCurrentHover: () => this.#a.getCurrentHover(),
			suspendHoverTracking: () => this.#a?.suspendHoverTracking(),
			resumeHoverTracking: (e) => this.#a?.resumeHoverTracking(e),
			addKeyboardListener: (e, t) => {
				this.#s.add(e, (n) => {
					this.#_(e, n) && t(n);
				});
			},
			addBroadcastListener: (e, t) => this.#l.add(e, t),
			removeBroadcastListener: (e, t) => this.#l.remove(e, t),
			renderImmediately: this.renderAll.bind(this),
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: Pl(this.container)
		});
	}
	#_(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #v(e) {
		let t = this.spec;
		this.viewRoot = await e.createOrImportView(t, null, null, cw), dy(this.viewRoot), vy(this.viewRoot), yy(this.viewRoot), await cy(this.viewRoot, this.genomeStore), await qw(this.viewRoot), this.#r.set(this.viewRoot, "loading"), this.#u.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#d(), Jw(this.viewRoot), this.#y(), this.#o.invalidateSize(), this.#t = new Ew({
			viewRoot: this.viewRoot,
			glHelper: this.#o,
			getBackground: () => wT(this.spec),
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#n.updateLayout()
		}), e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.#f();
	}
	#y() {
		let e = tn(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#b(e) {
		e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.viewRoot.visit((e) => Kt(e, "size")), this.#o.invalidateSize(), this.#a = new Sw({
			viewRoot: this.viewRoot,
			glHelper: this.#o,
			tooltip: this.tooltip,
			animator: this.animator,
			emitEvent: this.#c.emit.bind(this.#c),
			tooltipHandlers: this.tooltipHandlers,
			renderPickingFramebuffer: this.renderPickingFramebuffer.bind(this),
			getDevicePixelRatio: () => this.dpr
		});
	}
	async launch() {
		let e = !1;
		try {
			return this.#p(), await this.#m(), this.#e.push(this.#a.registerInteractionEvents()), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			let t = `${e.view ? `At "${e.view.getPathString()}": ` : ""}${e.toString()}`;
			return console.error(e.stack), this.options.onError?.(e, this.container) || Cl(this.container, t), this.viewRoot && this.#r.set(this.viewRoot, "error", t), !1;
		} finally {
			this.#u.classList.remove("loading"), e && this.viewRoot && this.#r.set(this.viewRoot, "complete");
		}
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await ov(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.fontManager), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#o.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await cT(this.viewRoot.context, this.viewRoot, void 0, e, (e) => uT(e) && DT(e));
	}
	updateTooltip(e, t) {
		this.#a.updateTooltip(e, t);
	}
	exportCanvas(e, t, n, r = "white") {
		try {
			return Yw({
				glHelper: this.#o,
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
		let t = TT(this.spec, e);
		try {
			return { blob: await Xw({
				glHelper: this.#o,
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
		let t = this.#o.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height, i = TT(this.spec, e);
		try {
			let { createSvgExport: t } = await import("./svg-DRgWfcsL.js"), { svg: a, warnings: o, rasterized: s } = await t({
				viewRoot: this.viewRoot,
				webGLHelper: this.#o,
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
		let t = this.#o.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height;
		return (await import("./svg-DRgWfcsL.js")).analyzeSvgExport({
			viewRoot: this.viewRoot,
			logicalWidth: n,
			logicalHeight: r
		});
	}
	getLogicalCanvasSize() {
		return this.#o.getLogicalCanvasSize();
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
		this.#t.renderPickingFramebuffer();
	}
	getSearchableViews() {
		let e = [];
		return this.viewRoot.visit((t) => {
			t instanceof Y && t.getSearchAccessors().length > 0 && e.push(t);
		}), e;
	}
	getNamedScaleResolutions() {
		let e = /* @__PURE__ */ new Map();
		return this.viewRoot.visit((t) => {
			for (let n of Object.values(t.resolutions.scale)) n.name && e.set(n.name, n);
		}), e;
	}
};
function DT(e) {
	let t = e;
	for (; t;) {
		let e = t.flowHandle?.dataSource;
		if (e) return e instanceof xc;
		t = t.dataParent;
	}
	return !1;
}
//#endregion
//#region ../core/src/data/formats/readBinary.js
async function OT(e, t) {
	let n = t?.type;
	if (n !== "arrow" && n !== "parquet") throw Error("Unsupported binary data format: " + String(n));
	let r = no(n);
	if (!r) throw Error("Data format is not registered: " + n);
	let i = await r(kT(e), t);
	if (!Array.isArray(i)) throw Error(`The ${n} data reader did not return an array.`);
	return i;
}
function kT(e) {
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
function AT(e, t) {
	let n = () => e.viewRoot;
	return jT(() => uw(n()), n, t);
}
function jT(e, t, n = () => !0) {
	return {
		set(r, i) {
			MT(n);
			let a = e();
			IT(a, FT(a, r, t), i);
		},
		async load(r, i, a) {
			MT(n);
			let o = e(), s = FT(o, r, t), c = s.beginUpdate(), l = a?.type ?? "unknown", u = () => (MT(n), FT(o, r, t) === s && s.isCurrentUpdate(c)), d;
			try {
				d = await OT(i, a);
			} catch (e) {
				if (!u()) return;
				throw new $("datasetLoadFailed", `Cannot load named dataset "${r}" as ${l}: ${NT(e)}`, { cause: e });
			}
			u() && IT(o, s, d);
		},
		reset(r) {
			MT(n);
			let i = e();
			IT(i, FT(i, r, t));
		}
	};
}
function MT(e) {
	if (!e()) throw new $("staleEmbed", "Cannot update named data through a finalized embed.");
}
function NT(e) {
	return e instanceof Error ? e.message : String(e);
}
function PT(e, t) {
	let n = t();
	return e === n || !!n?.getDescendants?.().includes(e);
}
function FT(e, t, n) {
	if (!PT(e, n)) throw new $("staleHandle", "Cannot update named data through a stale view handle.");
	if (typeof t != "string" || !t.length) throw new $("invalidNamedData", "Named dataset name must be a non-empty string.");
	let r = e.namedDataScope.getLocalBinding(t);
	if (r) return r;
	throw e.namedDataScope.findDeclaredBinding(t) ? new $("namedDataOwnerMismatch", "Named dataset \"" + t + "\" is declared by an ancestor view. Use the dataset owner's handle.") : new $("namedDataNotDeclared", "View does not declare named dataset \"" + t + "\". Add it to the view's datasets object before updating it.");
}
function IT(e, t, n) {
	e.context.dataFlow.updateNamedDataBinding(t, n), e.context.animator.requestRender();
}
function LT(e, t) {
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = Promise.resolve(), a;
	function o() {
		return e.viewRoot;
	}
	function s(e) {
		return e instanceof aw ? "concat" : e instanceof X ? "layer" : e instanceof Y ? "unit" : e instanceof KC ? "grid" : "unknown";
	}
	function c(e) {
		if (e.explicitName) try {
			return gt(e);
		} catch {
			return;
		}
	}
	function l(e) {
		let i = n.get(e);
		return i || (i = {
			id: xr(o()).getId(e),
			get name() {
				return e.explicitName;
			},
			get selector() {
				return c(e);
			},
			get type() {
				return s(e);
			},
			isAlive: () => PT(e, o),
			parent: () => {
				if (!(!PT(e, o) || !e.layoutParent)) return l(e.layoutParent);
			},
			children: () => {
				let t = u(e);
				return !PT(e, o) || !t ? [] : t.map((e) => l(e));
			},
			datasets: jT(() => e, o, t)
		}, n.set(e, i), r.set(i, e), i);
	}
	function u(e) {
		let t = e.children;
		return Array.isArray(t) ? t : void 0;
	}
	function d(e) {
		if (e === "root") return l(o());
		if (RT(e)) return r.has(e) && e.isAlive() ? e : void 0;
		if (zT(e)) {
			let t = un(o(), e);
			return t ? l(t) : void 0;
		} else throw new $("invalidAddress", "View address must be a handle, selector, or \"root\".");
	}
	function f(e) {
		let t = d(e);
		if (t) return t;
		throw RT(e) && r.has(e) ? new $("staleHandle", "Stale view handle no longer refers to a live view.") : new $("unresolvedAddress", "View address did not resolve to a live view.");
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
			r = await e(se);
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
	function ee(e, t, n = {}) {
		return g(async () => {
			let r = p(e), i = w(r), a = E(n.index, i), o = te(t, n);
			o !== void 0 && typeof o == "string" && D(r, o);
			let s = await T(r, structuredClone(t), a);
			return n.scope !== void 0 && Tt(s, n.scope), l(s);
		});
	}
	function w(e) {
		if (!(e instanceof aw) && !(e instanceof X)) throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
		let t = u(e);
		if (!t) throw new $("unsupportedContainer", "Mutable container does not expose layout children.");
		return t.length;
	}
	async function T(e, t, n) {
		if (e instanceof aw) return e.addChildSpec(t, n);
		if (e instanceof X) {
			if (!O(t)) throw new $("unsupportedChildSpec", "Layer views accept only unit, layer, multiscale, or import specs as children.");
			return e.addChildSpec(t, n);
		}
		throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
	}
	function E(e, t) {
		let n = e ?? t;
		if (!Number.isInteger(n)) throw new $("invalidIndex", "Insert index must be an integer.");
		if (n < 0 || n > t) throw new $("invalidIndex", "Insert index must be between 0 and the current child count.");
		return n;
	}
	function te(e, t) {
		let n = qy(e) && "name" in e ? e.name : void 0;
		if (t.scope !== void 0 && n !== void 0 && t.scope !== n) throw new $("scopeMismatch", "Insert scope must match the import instance name.");
		return t.scope ?? n;
	}
	function D(e, t) {
		let n = Ht(e).concat(t);
		o().visit((e) => {
			let r = an(e);
			if (r && r.name === t && ne(Ht(e), n)) throw new $("duplicateScope", "Scope \"" + t + "\" already exists.");
		});
	}
	function ne(e, t) {
		return e.length === t.length && e.every((e, n) => e === t[n]);
	}
	function O(e) {
		if (qy(e)) return !0;
		let t = e;
		return Gy(t) || Ky(t) || Iy(t);
	}
	function re(e) {
		return g(async () => {
			let t = p(e);
			if (t === o() || !t.layoutParent) throw new $("cannotRemoveRoot", "Removing the root view is not supported.");
			let n = t.layoutParent, r = u(n);
			if (!r) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let i = r.indexOf(t);
			if (i < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			await ie(n, i);
		});
	}
	async function ie(e, t) {
		if (e instanceof aw) await e.removeChildAt(t);
		else if (e instanceof X) await e.removeChildAt(t);
		else throw new $("unsupportedContainer", "Only concat and layer views support child removal.");
	}
	function ae(e, t) {
		return g(async () => {
			let n = p(e);
			if (n === o() || !n.layoutParent) throw new $("cannotMoveRoot", "Moving the root view is not supported.");
			let r = n.layoutParent, i = u(r);
			if (!i) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let a = i.indexOf(n);
			if (a < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			if (!t) throw new $("invalidIndex", "Move options with an index are required.");
			return await oe(r, a, k(t.index, i.length - 1)), l(n);
		});
	}
	function k(e, t) {
		if (!Number.isInteger(e)) throw new $("invalidIndex", "Move index must be an integer.");
		if (e < 0 || e > t) throw new $("invalidIndex", "Move index must be between 0 and the remaining child count.");
		return e;
	}
	async function oe(e, t, n) {
		if (e instanceof aw) await e.moveChildAt(t, n);
		else if (e instanceof X) e.moveChildAt(t, n);
		else throw new $("unsupportedContainer", "Only concat and layer views support child reordering.");
	}
	let se = {
		root: () => l(o()),
		resolve: d,
		get: f,
		getLayoutBounds: m,
		subscribeToLayout: h,
		insert: ee,
		remove: re,
		move: ae,
		transaction: (e) => a ? C(e) : _(() => C(e))
	};
	return se;
}
function RT(e) {
	return typeof e == "object" && !!e && typeof e.isAlive == "function";
}
function zT(e) {
	return typeof e == "object" && !!e && Array.isArray(e.scope) && typeof e.view == "string";
}
//#endregion
//#region ../core/src/utils/inferSpecBaseUrl.js
var BT = [
	["/docs/example-specs/", "/docs/example-specs/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], VT = /^(?:[a-z]+:)?\/\//i, HT = "https://example.invalid";
function UT(e) {
	return VT.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function WT(e) {
	let t = new URL(e, HT), n = BT.find(([e]) => t.pathname.startsWith(e));
	if (n) return KT(n[1], t, UT(e));
}
function GT(e) {
	let t = WT(e);
	if (t) return t;
	let n = new URL(e, HT);
	return KT(new URL("./", n).pathname, n, UT(e));
}
function KT(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region ../core/src/embedFactory.js
function qT(e) {
	return async function(t, n, r = {}) {
		let i = !0, a = () => i, o;
		if (H(t)) {
			if (o = document.querySelector(t), !o) throw Error(`No such element: ${t}`);
		} else if (t instanceof HTMLElement) o = t;
		else throw Error(`Invalid element: ${t}`);
		let s;
		try {
			let t = A(n) ? n : await YT(n);
			if (t.baseUrl ??= "", t.padding ??= 10, o == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", o.appendChild(e), o = e;
			}
			s = new e(o, t, r), JT(s, r), await s.launch();
		} catch (e) {
			o.innerText = e.toString(), console.error(e);
		}
		return {
			views: LT(s, a),
			datasets: AT(s, a),
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
					return import("./debug-aHQsa6hU.js");
				}
			}
		};
	};
}
function JT(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function YT(e) {
	let t;
	try {
		t = await ph(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl ||= GT(e), t;
}
//#endregion
//#region ../core/src/index.js
var XT = qT(ET);
//#endregion
export { El as $, Q_ as A, _h as B, Ky as C, yy as D, vy as E, d_ as F, Ep as G, ph as H, mg as I, Rf as J, Tp as K, Mh as L, nv as M, B_ as N, dy as O, D_ as P, Al as Q, mh as R, X as S, Oy as T, Y as U, fh as V, fm as W, nu as X, nf as Y, Ll as Z, jx as _, mi as _t, ET as a, Qc as at, Ob as b, kr as bt, sT as c, bc as ct, LC as d, ro as dt, Dl as et, xC as f, pa as ft, wS as g, Ai as gt, GS as h, G as ht, LT as i, Kc as it, Z_ as j, Mv as k, aw as l, Ka as lt, CC as m, Mi as mt, YT as n, vl as nt, cT as o, Jc as ot, SC as p, da as pt, Wf as q, AT as r, _l as rt, oT as s, qc as st, XT as t, Tl as tt, iw as u, ao as ut, Vb as v, W as vt, Gy as w, hb as x, Or as xt, Db as y, Oi as yt, gh as z };
