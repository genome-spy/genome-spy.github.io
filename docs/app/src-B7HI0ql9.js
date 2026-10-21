import { $ as e, A as t, B as n, C as r, F as i, G as a, H as o, I as s, J as c, K as l, L as u, M as d, N as f, O as p, P as m, Q as h, S as g, T as _, U as v, V as y, W as b, X as x, Y as S, Z as C, _ as w, a as T, g as E, h as D, i as O, j as ee, k, l as te, m as ne, nt as re, q as ie, r as ae, rt as oe, tt as se, v as A, w as ce, x as le, y as j, z as ue } from "./vega-scale-BVfPgT2e.js";
import { $t as de, A as fe, An as pe, B as me, Bt as he, Cn as ge, Ct as _e, Dn as ve, Dt as ye, E as be, En as xe, Et as Se, F as Ce, Fn as we, Gt as Te, H as Ee, Ht as De, I as Oe, In as ke, Jt as M, Kt as Ae, L as je, Ln as Me, M as Ne, N as Pe, Nn as Fe, O as Ie, On as N, P as Le, Q as Re, Qt as ze, R as Be, Rt as Ve, S as He, Sn as Ue, St as We, T as Ge, Tn as P, Tt as Ke, U as qe, Ut as Je, V as Ye, W as Xe, Wt as Ze, X as Qe, Xt as $e, Yt as et, Z as tt, Zt as nt, _ as rt, _n as it, _t as at, a as ot, an as st, at as ct, b as F, bn as lt, bt as ut, c as dt, cn as ft, ct as pt, d as mt, dn as I, dt as ht, en as gt, et as _t, fn as vt, ft as yt, g as bt, gn as xt, gt as St, h as Ct, hn as wt, ht as Tt, i as Et, in as Dt, it as Ot, j as kt, jn as At, jt, k as Mt, kn as L, l as Nt, ln as Pt, lt as Ft, m as It, mn as Lt, mt as Rt, nn as zt, nt as Bt, o as Vt, on as Ht, p as R, pn as Ut, pt as Wt, q as Gt, qt as Kt, r as qt, rn as Jt, rt as Yt, sn as Xt, st as Zt, t as Qt, tn as $t, u as en, un as tn, ut as nn, v as rn, vn as an, vt as on, w as sn, wn as cn, wt as ln, x as un, xn as dn, xt as fn, yn as pn, yt as mn, zt as hn } from "./clipOptions-BKK6zTuk.js";
import { a as gn, d as _n, f as vn, m as yn, n as bn, o as xn, p as Sn, s as Cn, t as wn, u as Tn } from "./indexer-D2msCrok.js";
import { A as En, B as Dn, C as z, D as On, E as kn, F as An, G as jn, H as Mn, I as Nn, K as Pn, L as Fn, M as In, N as Ln, O as B, P as Rn, R as zn, S as Bn, T as Vn, U as Hn, V as Un, W as Wn, Y as Gn, _ as Kn, a as qn, b as Jn, c as Yn, d as Xn, g as Zn, h as Qn, i as $n, j as er, k as tr, l as V, m as nr, n as rr, o as ir, p as ar, q as or, u as sr, v as cr, x as lr, y as ur, z as dr } from "./viewSelectors-LqwqR4m-.js";
import { a as fr, i as pr, n as mr, o as hr, r as gr } from "./rasterization-DFj3Cvx4.js";
import { a as _r, i as vr, n as yr, t as br } from "./viewError-C6VTtAWX.js";
import { t as xr } from "./warning-CpIIpk8e.js";
import { a as Sr, i as Cr, n as wr, o as Tr, r as Er, s as Dr, t as H, u as Or } from "./rectangle-B8otIL7D.js";
import { i as kr, n as Ar, r as jr, t as Mr } from "./containerView-CikKx86N.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var Nr = globalThis, Pr = Nr.ShadowRoot && (Nr.ShadyCSS === void 0 || Nr.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Fr = Symbol(), Ir = /* @__PURE__ */ new WeakMap(), Lr = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== Fr) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (Pr && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = Ir.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ir.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, Rr = (e) => new Lr(typeof e == "string" ? e : e + "", void 0, Fr), zr = (e, ...t) => new Lr(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, Fr), Br = (e, t) => {
	if (Pr) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let n of t) {
		let t = document.createElement("style"), r = Nr.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, Vr = Pr ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return Rr(t);
})(e) : e, { is: Hr, defineProperty: Ur, getOwnPropertyDescriptor: Wr, getOwnPropertyNames: Gr, getOwnPropertySymbols: Kr, getPrototypeOf: qr } = Object, Jr = globalThis, Yr = Jr.trustedTypes, Xr = Yr ? Yr.emptyScript : "", Zr = Jr.reactiveElementPolyfillSupport, Qr = (e, t) => e, $r = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Xr : null;
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
}, ei = (e, t) => !Hr(e, t), ti = {
	attribute: !0,
	type: String,
	converter: $r,
	reflect: !1,
	useDefault: !1,
	hasChanged: ei
};
Symbol.metadata ??= Symbol("metadata"), Jr.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var ni = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = ti) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && Ur(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = Wr(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? ti;
	}
	static _$Ei() {
		if (this.hasOwnProperty(Qr("elementProperties"))) return;
		let e = qr(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(Qr("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Qr("properties"))) {
			let e = this.properties, t = [...Gr(e), ...Kr(e)];
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
			for (let e of n) t.unshift(Vr(e));
		} else e !== void 0 && t.push(Vr(e));
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
		return Br(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? $r : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? $r : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? ei)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
ni.elementStyles = [], ni.shadowRootOptions = { mode: "open" }, ni[Qr("elementProperties")] = /* @__PURE__ */ new Map(), ni[Qr("finalized")] = /* @__PURE__ */ new Map(), Zr?.({ ReactiveElement: ni }), (Jr.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var ri = globalThis, ii = (e) => e, ai = ri.trustedTypes, oi = ai ? ai.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, si = "$lit$", ci = `lit$${Math.random().toFixed(9).slice(2)}$`, li = "?" + ci, ui = `<${li}>`, di = document, fi = () => di.createComment(""), pi = (e) => e === null || typeof e != "object" && typeof e != "function", mi = Array.isArray, hi = (e) => mi(e) || typeof e?.[Symbol.iterator] == "function", gi = "[ 	\n\f\r]", _i = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, vi = /-->/g, yi = />/g, bi = RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), xi = /'/g, Si = /"/g, Ci = /^(?:script|style|textarea|title)$/i, U = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), wi = Symbol.for("lit-noChange"), W = Symbol.for("lit-nothing"), Ti = /* @__PURE__ */ new WeakMap(), Ei = di.createTreeWalker(di, 129);
function Di(e, t) {
	if (!mi(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return oi === void 0 ? t : oi.createHTML(t);
}
var Oi = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = _i;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === _i ? c[1] === "!--" ? o = vi : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = bi) : (Ci.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = bi) : o = yi : o === bi ? c[0] === ">" ? (o = i ?? _i, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? bi : c[3] === "\"" ? Si : xi) : o === Si || o === xi ? o = bi : o === vi || o === yi ? o = _i : (o = bi, i = void 0);
		let d = o === bi && e[t + 1].startsWith("/>") ? " " : "";
		a += o === _i ? n + ui : l >= 0 ? (r.push(s), n.slice(0, l) + si + n.slice(l) + ci + d) : n + ci + (l === -2 ? t : d);
	}
	return [Di(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, ki = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Oi(t, n);
		if (this.el = e.createElement(l, r), Ei.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Ei.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(si)) {
					let t = u[o++], n = i.getAttribute(e).split(ci), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Pi : r[1] === "?" ? Fi : r[1] === "@" ? Ii : Ni
					}), i.removeAttribute(e);
				} else e.startsWith(ci) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Ci.test(i.tagName)) {
					let e = i.textContent.split(ci), t = e.length - 1;
					if (t > 0) {
						i.textContent = ai ? ai.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], fi()), Ei.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], fi());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === li) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(ci, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += ci.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = di.createElement("template");
		return n.innerHTML = e, n;
	}
};
function Ai(e, t, n = e, r) {
	if (t === wi) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = pi(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = Ai(e, i._$AS(e, t.values), i, r)), t;
}
var ji = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? di).importNode(t, !0);
		Ei.currentNode = r;
		let i = Ei.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Mi(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Li(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Ei.nextNode(), a++);
		}
		return Ei.currentNode = di, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Mi = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = W, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = Ai(this, e, t), pi(e) ? e === W || e == null || e === "" ? (this._$AH !== W && this._$AR(), this._$AH = W) : e !== this._$AH && e !== wi && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? hi(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== W && pi(this._$AH) ? this._$AA.nextSibling.data = e : this.T(di.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ki.createElement(Di(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new ji(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ti.get(e.strings);
		return t === void 0 && Ti.set(e.strings, t = new ki(e)), t;
	}
	k(t) {
		mi(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(fi()), this.O(fi()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ii(e).nextSibling;
			ii(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ni = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = W, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = W;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = Ai(this, e, t, 0), a = !pi(e) || e !== this._$AH && e !== wi, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = Ai(this, r[n + o], t, o), s === wi && (s = this._$AH[o]), a ||= !pi(s) || s !== this._$AH[o], s === W ? e = W : e !== W && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === W ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Pi = class extends Ni {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === W ? void 0 : e;
	}
}, Fi = class extends Ni {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== W);
	}
}, Ii = class extends Ni {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = Ai(this, e, t, 0) ?? W) === wi) return;
		let n = this._$AH, r = e === W && n !== W || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== W && (n === W || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Li = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		Ai(this, e);
	}
}, Ri = {
	M: si,
	P: ci,
	A: li,
	C: 1,
	L: Oi,
	R: ji,
	D: hi,
	V: Ai,
	I: Mi,
	H: Ni,
	N: Fi,
	U: Ii,
	B: Pi,
	F: Li
}, zi = ri.litHtmlPolyfillSupport;
zi?.(ki, Mi), (ri.litHtmlVersions ??= []).push("3.3.3");
var Bi = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Mi(t.insertBefore(fi(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Vi = globalThis, Hi = class extends ni {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Bi(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return wi;
	}
};
Hi._$litElement$ = !0, Hi.finalized = !0, Vi.litElementHydrateSupport?.({ LitElement: Hi });
var Ui = Vi.litElementPolyfillSupport;
Ui?.({ LitElement: Hi }), (Vi.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/accessor.js
function Wi(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/getter.js
function Gi(e) {
	return e.length === 1 ? Ki(e[0]) : qi(e);
}
var Ki = (e) => function(t) {
	return t[e];
}, qi = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/error.js
function Ji(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/splitAccessPath.js
function Yi(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Ji("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Ji("Access path missing closing bracket: " + e), r && Ji("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/field.js
function Xi(e, t, n) {
	let r = Yi(e), i = r.length === 1 ? r[0] : e;
	return Wi((n && n.get || Gi)(r), [i], t || i);
}
Xi("id");
var Zi = Wi((e) => e, [], "identity");
Wi(() => 0, [], "zero"), Wi(() => 1, [], "one"), Wi(() => !0, [], "true"), Wi(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")];
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isArray.js
var Qi = Array.isArray;
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isObject.js
function $i(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toNumber.js
function ea(e) {
	return e == null || e === "" ? null : +e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isFunction.js
function ta(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/extend.js
function na(e, ...t) {
	for (let n of t) for (let t in n) e[t] = n[t];
	return e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/hasOwnProperty.js
function ra(e, t) {
	return Object.hasOwn(e, t);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isDate.js
function ia(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isIterable.js
function aa(e) {
	return e != null && ta(e[Symbol.iterator]);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isNumber.js
function oa(e) {
	return typeof e == "number";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/isString.js
function sa(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/stringValue.js
function ca(e) {
	return Qi(e) ? `[${e.map((e) => e === null ? "null" : ca(e))}]` : $i(e) || sa(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toBoolean.js
function la(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toDate.js
var ua = (e) => oa(e) || ia(e) ? e : Date.parse(e);
function da(e, t) {
	return t ||= ua, e == null || e === "" ? null : t(e);
}
//#endregion
//#region ../../node_modules/vega-loader/node_modules/vega-util/build/toString.js
function fa(e) {
	return e == null || e === "" ? null : e + "";
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var pa = {}, ma = {}, ha = 34, ga = 10, _a = 13;
function va(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function ya(e, t) {
	var n = va(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function ba(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function G(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function xa(e) {
	return e < 0 ? "-" + G(-e, 6) : e > 9999 ? "+" + G(e, 6) : G(e, 4);
}
function Sa(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : xa(e.getUTCFullYear(), 4) + "-" + G(e.getUTCMonth() + 1, 2) + "-" + G(e.getUTCDate(), 2) + (i ? "T" + G(t, 2) + ":" + G(n, 2) + ":" + G(r, 2) + "." + G(i, 3) + "Z" : r ? "T" + G(t, 2) + ":" + G(n, 2) + ":" + G(r, 2) + "Z" : n || t ? "T" + G(t, 2) + ":" + G(n, 2) + "Z" : "");
}
function Ca(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? ya(e, t) : va(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === ga && --i, e.charCodeAt(i - 1) === _a && --i;
		function u() {
			if (c) return ma;
			if (l) return l = !1, pa;
			var t, r = a, o;
			if (e.charCodeAt(r) === ha) {
				for (; a++ < i && e.charCodeAt(a) !== ha || e.charCodeAt(++a) === ha;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === ga ? l = !0 : o === _a && (l = !0, e.charCodeAt(a) === ga && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === ga) l = !0;
				else if (o === _a) l = !0, e.charCodeAt(a) === ga && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== ma;) {
			for (var d = []; s !== pa && s !== ma;) d.push(s), s = u();
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
		return n ??= ba(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= ba(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? Sa(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
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
var wa = Ca("	");
wa.parse;
var Ta = wa.parseRows;
wa.format, wa.formatBody, wa.formatRows, wa.formatRow, wa.formatValue;
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function Ea(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function Da(e) {
	if (e == null) return Ea;
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
function Oa(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function ka(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return Aa(e, t);
		})
	} : Aa(e, t);
}
function Aa(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = ja(e, t);
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
function ja(e, t) {
	var n = Da(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && Oa(t, o);
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
function Ma(e, t) {
	var n = {}, r = {}, i = {}, a = [], o = -1;
	t.forEach(function(n, r) {
		var i = e.arcs[n < 0 ? ~n : n], a;
		i.length < 3 && !i[1][0] && !i[1][1] && (a = t[++o], t[o] = n, t[r] = a);
	}), t.forEach(function(e) {
		var t = s(e), n = t[0], a = t[1], o, c;
		if (o = i[n]) {
			if (delete i[o.end], o.push(e), o.end = a, c = r[a]) {
				delete r[c.start];
				var l = c === o ? o : o.concat(c);
				r[l.start = o.start] = i[l.end = c.end] = l;
			} else r[o.start] = i[o.end] = o;
		} else if (o = r[a]) {
			if (delete r[o.start], o.unshift(e), o.start = n, c = i[n]) {
				delete i[c.end];
				var u = c === o ? o : c.concat(o);
				r[u.start = c.start] = i[u.end = o.end] = u;
			} else r[o.start] = i[o.end] = o;
		} else o = [e], r[o.start = n] = i[o.end = a] = o;
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
function Na(e) {
	return ja(e, Pa.apply(this, arguments));
}
function Pa(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = Fa(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: Ma(e, r)
	};
}
function Fa(e, t, n) {
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
			case "MultiPolygon": l(e.arcs);
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
function Ia(e, t) {
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
function La(e, t) {
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
function Ra(e, t) {
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
function za(e, t) {
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
function Ba(e, t) {
	return x(e, .5, t);
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function Va(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/accessor.js
function Ha(e, t, n) {
	return Object.assign(e, {
		fields: t || [],
		fname: n
	});
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/getter.js
function Ua(e) {
	return e.length === 1 ? Wa(e[0]) : Ga(e);
}
var Wa = (e) => function(t) {
	return t[e];
}, Ga = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/error.js
function Ka(e) {
	throw Error(e);
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/splitAccessPath.js
function qa(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || Ka("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && Ka("Access path missing closing bracket: " + e), r && Ka("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/field.js
function Ja(e, t, n) {
	let r = qa(e), i = r.length === 1 ? r[0] : e;
	return Ha((n && n.get || Ua)(r), [i], t || i);
}
Ja("id"), Ha((e) => e, [], "identity"), Ha(() => 0, [], "zero"), Ha(() => 1, [], "one"), Ha(() => !0, [], "true"), Ha(() => !1, [], "false"), [...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function")], Array.isArray;
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/isObject.js
function Ya(e) {
	return e === Object(e);
}
//#endregion
//#region ../../node_modules/vega-format/node_modules/vega-util/build/isString.js
function Xa(e) {
	return typeof e == "string";
}
//#endregion
//#region ../../node_modules/vega-format/build/vega-format.js
function Za(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function Qa(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = $a(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function $a(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function eo(e) {
	let t = Za(e.format), n = e.formatPrefix;
	return {
		format: t,
		formatPrefix: n,
		formatFloat(e) {
			let n = At(e || ",");
			if (n.precision == null) {
				switch (n.precision = 12, n.type) {
					case "%":
						n.precision -= 2;
						break;
					case "e": --n.precision;
				}
				return Qa(t(n), t(".1f")(1)[1]);
			}
			return t(n);
		},
		formatSpan(e, r, i, a) {
			a = At(a ?? ",f");
			let o = we(e, r, i), s = Math.max(Math.abs(e), Math.abs(r)), l;
			if (a.precision == null) switch (a.type) {
				case "s": return isNaN(l = c(o, s)) || (a.precision = l), n(a, s);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(l = ie(o, s)) || (a.precision = l - (a.type === "e"));
					break;
				case "f":
				case "%": isNaN(l = S(o)) || (a.precision = l - (a.type === "%") * 2);
			}
			return t(a);
		}
	};
}
to();
function to() {
	return eo({
		format: L,
		formatPrefix: pe
	});
}
function no(e, t, r) {
	r ||= {}, Ya(r) || Ka(`Invalid time multi-format specifier: ${r}`);
	let i = t(o), a = t(ue), c = t(u), l = t(s), d = t(v), f = t(n), p = t(y), m = t(b), h = e(r.milliseconds || ".%L"), g = e(r.seconds || ":%S"), _ = e(r.minutes || "%I:%M"), x = e(r.hours || "%I %p"), S = e(r.date || r.day || "%a %d"), C = e(r.week || "%b %d"), w = e(r.month || "%B"), T = e(r.quarter || "%B"), E = e(r.year || "%Y");
	return (e) => (i(e) < e ? h : a(e) < e ? g : c(e) < e ? _ : l(e) < e ? x : f(e) < e ? d(e) < e ? S : C : m(e) < e ? p(e) < e ? w : T : E)(e);
}
function ro(e) {
	let t = Za(e.format), n = Za(e.utcFormat);
	return {
		timeFormat: (e) => Xa(e) ? t(e) : no(t, a, e),
		utcFormat: (e) => Xa(e) ? n(e) : no(n, l, e),
		timeParse: Za(e.parse),
		utcParse: Za(e.utcParse)
	};
}
var io;
ao();
function ao() {
	return io = ro({
		format: ee,
		parse: d,
		utcFormat: f,
		utcParse: m
	});
}
function oo(e) {
	return ro(i(e));
}
function so(e) {
	return arguments.length ? io = oo(e) : io;
}
//#endregion
//#region ../../node_modules/vega-loader/build/vega-loader.browser.js
var co = /^(data:|([A-Za-z]+:)?\/\/)/, lo = /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp|file|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i, uo = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g, fo = "file://";
function po(e) {
	return (t) => ({
		options: t || {},
		sanitize: ho,
		load: mo,
		fileAccess: !1,
		file: go(e),
		http: vo
	});
}
async function mo(e, t) {
	let n = await this.sanitize(e, t), r = n.href;
	return n.localFile ? this.file(r) : this.http(r, t?.http);
}
async function ho(e, t) {
	t = na({}, this.options, t);
	let n = this.fileAccess, r = { href: null }, i, a, o, s = lo.test(e.replace(uo, ""));
	(e == null || typeof e != "string" || !s) && Ji("Sanitize failure, invalid URI: " + ca(e));
	let c = co.test(e);
	return (o = t.baseURL) && !c && (!e.startsWith("/") && !o.endsWith("/") && (e = "/" + e), e = o + e), a = (i = e.startsWith(fo)) || t.mode === "file" || t.mode !== "http" && !c && n, i ? e = e.slice(7) : e.startsWith("//") && (t.defaultProtocol === "file" ? (e = e.slice(2), a = !0) : e = (t.defaultProtocol || "http") + ":" + e), Object.defineProperty(r, "localFile", { value: !!a }), r.href = e, t.target && (r.target = t.target + ""), t.rel && (r.rel = t.rel + ""), t.context === "image" && t.crossOrigin && (r.crossOrigin = t.crossOrigin + ""), r;
}
function go(e) {
	return e ? (t) => new Promise((n, r) => {
		e.readFile(t, (e, t) => {
			e ? r(e) : n(t);
		});
	}) : _o;
}
async function _o() {
	Ji("No file system access.");
}
async function vo(e, t) {
	let n = na({}, this.options.http, t), r = t && t.response, i = await fetch(e, n);
	return i.ok ? ta(i[r]) ? i[r]() : i.text() : Ji(i.status + "" + i.statusText);
}
var yo = (e) => e != null && e === e, bo = (e) => e === "true" || e === "false" || e === !0 || e === !1, xo = (e) => !Number.isNaN(Date.parse(e)), So = (e) => !Number.isNaN(+e) && !(e instanceof Date), Co = (e) => So(e) && Number.isInteger(+e), wo = {
	boolean: la,
	integer: ea,
	number: ea,
	date: da,
	string: fa,
	unknown: Zi
}, To = [
	bo,
	Co,
	So,
	xo
], Eo = [
	"boolean",
	"integer",
	"number",
	"date"
];
function Do(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = To.length, i = To.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && yo(c) && !To[s](c) && (i[s] = 0, ++o, o === To.length)) return "string";
	return Eo[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function Oo(e, t) {
	return t.reduce((t, n) => (t[n] = Do(e, n), t), {});
}
function ko(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return Ao(t, n ? na(n, r) : r);
	};
	return t.responseType = "text", t;
}
function Ao(e, t) {
	return t.header && (e = t.header.map(ca).join(t.delimiter) + "\n" + e), Ca(t.delimiter).parse(e + "");
}
Ao.responseType = "text";
function jo(e) {
	return typeof Buffer == "function" && ta(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function Mo(e, t) {
	let n = t && t.property ? Xi(t.property) : Zi;
	return $i(e) && !jo(e) ? No(n(e), t) : n(JSON.parse(e));
}
Mo.responseType = "json";
function No(e, t) {
	return !Qi(e) && aa(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var Po = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function Fo(e, t) {
	let n, r, i, a;
	return e = Mo(e, t), t && t.feature ? (n = ka, i = t.feature) : t && t.mesh ? (n = Na, i = t.mesh, a = Po[t.filter]) : Ji("Missing TopoJSON feature or mesh parameter."), r = (r = e.objects[i]) ? n(e, r, a) : Ji("Invalid TopoJSON object: " + i), r && r.features || [r];
}
Fo.responseType = "json";
var Io = {
	dsv: Ao,
	csv: ko(","),
	tsv: ko("	"),
	json: Mo,
	topojson: Fo
};
function Lo(e, t) {
	return arguments.length > 1 ? (Io[e] = t, this) : ra(Io, e) ? Io[e] : null;
}
function Ro(e, t, n, r) {
	t ||= {};
	let i = Lo(t.type || "json");
	return i || Ji("Unknown data format type: " + t.type), e = i(e, t), t.parse && zo(e, t.parse, n, r), ra(e, "columns") && delete e.columns, e;
}
function zo(e, t, n, r) {
	if (!e.length) return;
	let i = so();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = Oo(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!wo[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return wo[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
var Bo = po(null);
//#endregion
//#region ../core/src/data/formats/parquet.js
async function Vo() {
	let { parquetReadObjects: e } = await import("./parquetRead-D-yY8njE.js");
	return e;
}
async function Ho(e) {
	return await (await Vo())({ file: e instanceof Uint8Array ? Uo(e) : e });
}
function Uo(e) {
	if (e.buffer instanceof ArrayBuffer && e.byteOffset === 0 && e.byteLength === e.buffer.byteLength) return e.buffer;
	{
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t.buffer;
	}
}
Ho.responseType = "arrayBuffer", Lo("parquet", Ho);
//#endregion
//#region ../core/src/data/formats/arrow.js
async function Wo() {
	let { tableFromIPC: e } = await import("./src-DJtvThVC.js");
	return e;
}
async function Go(e) {
	return (await Wo())(Ko(e)).toArray();
}
function Ko(e) {
	if (e instanceof Uint8Array && e.byteOffset % 8 != 0) {
		let t = new Uint8Array(e.byteLength);
		return t.set(e), t;
	}
	return e;
}
Go.responseType = "arrayBuffer", Lo("arrow", Go);
//#endregion
//#region ../core/src/data/formats/bed.js
var qo = /^\s*$/, Jo = /^\s*(?:browser\b|track\b|#)/, Yo;
async function Xo() {
	return Yo ??= import("./esm-CvpR1OcU.js").then((e) => e.default), Yo;
}
async function Zo(e) {
	let t = new (await (Xo()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (qo.test(a) || Jo.test(a)) continue;
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
Lo("bed", Zo);
//#endregion
//#region ../core/src/data/formats/bedpe.js
var Qo = /^\s*$/, $o = /^\s*(?:browser\b|track\b|#)/, es = [
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
], ts = es.slice(0, 6), ns = (e) => e, rs = (e) => e == "." ? null : e, is = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, as = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, os = {
	chrom1: rs,
	chrom2: rs,
	name: rs,
	strand1: is,
	strand2: is,
	start1: as,
	end1: as,
	start2: as,
	end2: as,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function ss(e) {
	if (e.length < ts.length) return !1;
	for (let t = 0; t < ts.length; t++) if (e[t] != ts[t]) return !1;
	return !0;
}
function cs(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if (Qo.test(e) || $o.test(e)) continue;
			i = !0;
		}
		if (Qo.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (ss(t) ? t : es);
			for (let t of e) s.push(t), c.push(os[t] ?? ns);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(ns);
		if (t.length < ts.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${ts.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
Lo("bedpe", cs);
//#endregion
//#region ../core/src/data/formats/fasta.js
function ls(e, t) {
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
Lo("fasta", ls);
//#endregion
//#region ../core/src/data/formats/wig.js
var us = /^(?:variableStep|fixedStep)(?:\s|$)/, ds = /^(?:browser\b|track\b|#)/;
function fs(e) {
	let t, n = [], r = e.split(/\r?\n/);
	for (let e = 0; e < r.length; e++) {
		let i = e + 1, a = r[e].trim();
		if (!a || ds.test(a)) continue;
		if (us.test(a)) {
			t = ps(a, i);
			continue;
		}
		if (!t) throw _s(i, "data appears before a declaration");
		let o = a.split(/\s+/);
		if (t.type == "fixedStep") {
			if (o.length != 1) throw _s(i, "fixedStep data must contain one value");
			let e = gs(o[0], i), r = t.nextPosition - 1;
			n.push({
				chrom: t.chrom,
				start: r,
				end: r + t.span,
				score: e
			}), t.nextPosition += t.step;
		} else {
			if (o.length != 2) throw _s(i, "variableStep data must contain a position and value");
			let e = hs(o[0], "position", i) - 1;
			n.push({
				chrom: t.chrom,
				start: e,
				end: e + t.span,
				score: gs(o[1], i)
			});
		}
	}
	return n;
}
function ps(e, t) {
	let [n, ...r] = e.split(/\s+/), i = {};
	for (let e of r) {
		let n = e.indexOf("=");
		if (n <= 0 || n == e.length - 1) throw _s(t, `invalid declaration attribute "${e}"`);
		let r = e.slice(0, n);
		if (r in i) throw _s(t, `duplicate attribute "${r}"`);
		i[r] = e.slice(n + 1);
	}
	return n == "variableStep" ? (ms(i, "chrom", n, t), {
		type: "variableStep",
		chrom: i.chrom,
		span: i.span ? hs(i.span, "span", t) : 1
	}) : (ms(i, "chrom", n, t), ms(i, "start", n, t), {
		type: "fixedStep",
		chrom: i.chrom,
		nextPosition: hs(i.start, "start", t),
		step: i.step ? hs(i.step, "step", t) : 1,
		span: i.span ? hs(i.span, "span", t) : 1
	});
}
function ms(e, t, n, r) {
	if (!(t in e)) throw _s(r, `${n} declaration is missing "${t}"`);
}
function hs(e, t, n) {
	let r = Number(e);
	if (!Number.isInteger(r) || r <= 0) throw _s(n, `${t} must be a positive integer`);
	return r;
}
function gs(e, t) {
	let n = Number(e);
	if (!Number.isFinite(n)) throw _s(t, "score must be a finite number");
	return n;
}
function _s(e, t) {
	return /* @__PURE__ */ Error(`Cannot parse WIG line ${e}: ${t}`);
}
Lo("wig", fs);
//#endregion
//#region ../core/src/data/formats/vcfParser.js
async function vs(e) {
	let t = (await import("./esm-DzQDfrsZ.js")).default;
	return new t({ header: e });
}
function ys(e) {
	return delete e.GENOTYPES, e.SAMPLES = e.SAMPLES(), e;
}
function bs(e, t) {
	return e.map((e) => ys(t.parseLine(e)));
}
//#endregion
//#region ../core/src/data/formats/vcf.js
function* xs(e) {
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
async function Ss(e) {
	let t = [], n = [], r;
	for (let { line: i, lineNumber: a } of xs(e)) if (i) {
		if (!r && i.startsWith("#")) t.push(i);
		else {
			r ??= await vs(t.join("\n"));
			try {
				n.push(ys(r.parseLine(i)));
			} catch (e) {
				throw Error(`Cannot parse VCF line ${a}`, { cause: e });
			}
		}
	}
	return r || await vs(t.join("\n")), n;
}
Lo("vcf", Ss);
//#endregion
//#region ../core/src/scale/ticks.js
function Cs(e, t, n) {
	return tn(t) && n != null && (t = Math.min(t, ~~(an(e.domain()) / n) || 1)), I(t) && (t.step, t = t.interval), t;
}
function ws(e, t, n) {
	let r = e.type === "index" || e.type === "locus", i = r ? fr(e) : 0;
	var a = e.range(), o = r ? a[0] : Math.floor(a[0]), s = r ? it(a) : Math.ceil(it(a));
	if (o > s && (a = s, s = o, o = a), t = t.filter(function(t) {
		return t = e(t) + i, o <= t && t <= s;
	}), n > 0 && t.length > 1) {
		for (var c = [t[0], it(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = c);
	}
	return t;
}
function Ts(e, t) {
	return e.bins ? ws(e, Es(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function Es(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function Ds(e, t, n) {
	let r = typeof t == "number" && (!Number.isFinite(t) || t <= 0) ? void 0 : t;
	var i = e.tickFormat ? e.tickFormat(r, n) : n ? L(n) : String;
	if (g(e.type)) {
		var a = ks(n);
		i = e.bins ? a : Os(i, a);
	}
	return i;
}
function Os(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function ks(e) {
	var t = At(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e": --t.precision;
		}
		return As(L(t), L(".1f")(1)[1]);
	}
	return L(t);
}
function As(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = js(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function js(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region ../core/src/data/sources/lazy/lazyDataSourceRegistry.js
var Ms = [], Ns = [];
function K(e, t) {
	Ns.push({
		guard: e,
		Source: t
	});
}
function Ps(e, t) {
	for (let n of Ms) if (n.guard(e)) return new n.Source(e, t);
	for (let n of Ns) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/data/sources/dataSource.js
var q = class extends ze {
	view;
	origin;
	constructor(e) {
		super(), this.view = e;
	}
	get identifier() {}
	get shareKey() {
		return this.identifier;
	}
	setLoadingStatus(e, t, n, r) {
		this.view.context.dataFlow.loadingStatusRegistry.setSource(this, e, t, n, r);
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
}, Fs = class extends q {
	#e = !1;
	#t;
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw Is(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
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
function Is(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region ../core/src/data/sources/lazy/axisTickSource.js
var Ls = class extends Fs {
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
		super(t, n.channel), this.params = n, this.registerDisposer(this.scaleResolution.subscribeZoomExtent(() => {
			this.completed && this.onDomainChanged();
		}));
		let r = n.axis.tickCount;
		if (R(r)) {
			let e = new Wn(() => t.paramRuntime, (e) => t.getScaleResolution(e), void 0, { getSpecOrigin: t.context.getSpecOrigin });
			this.#t = e.allocateSetter("axisLength", 0, !0), this.#e = e.watchExpression(r, () => {
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
		let r = this.#e ? this.#e() : n.tickCount, i = Cs(e, r, n.tickMinStep), a = n.values ? ws(e, n.values, i) : Ts(e, i), o = !n.values && n.extraValues && A(e.type) ? ws(e, n.extraValues) : [], s = o.length ? Rs(a, o) : a, c = this.scaleResolution.hasConfiguredZoomExtent() ? gn(e.type, this.scaleResolution.zoomExtent) : [], l = this.ticks == null || !N(s, this.ticks), u = Ds(e, r, n.format), d = l;
		if (!d) {
			for (let e = 0; e < s.length; e++) if (u(s[e]) !== this.tickLabels[e]) {
				d = !0;
				break;
			}
		}
		if (l || d || !N(c, this.zoomExtentTicks)) {
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
function Rs(e, t) {
	let n = new Set(e);
	return t.forEach((e) => n.add(e)), Array.from(n).sort((e, t) => e - t);
}
function zs(e) {
	return e?.type == "axisTicks";
}
K(zs, Ls);
//#endregion
//#region ../core/src/data/sources/lazy/axisGenomeSource.js
var Bs = class extends Fs {
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
function Vs(e) {
	return e?.type == "axisGenome";
}
K(Vs, Bs);
//#endregion
//#region ../core/src/view/legend/legendEntries.js
function Hs(e, t = String) {
	return e.getDomain().map((e, n) => ({
		value: e,
		label: t(e),
		_legendIndex: n
	}));
}
//#endregion
//#region ../core/src/utils/suspension.js
var Us = class {
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
}, Ws = 5, Gs = "_legendSymbolSize", Ks = "_legendStrokeWidth", qs = class extends q {
	#e = void 0;
	#t = !1;
	#n = new Us(() => this.#i());
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = Js(t, e.channel), !this.scaleResolution) throw Error(`The legend entries data source cannot find a resolved scale for channel "${e.channel}".`);
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
		if (!this.#e || !N(e, this.#e)) {
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" });
			for (let e of this.#o()) this._propagate(e);
			this.complete();
		}
	}
	#o() {
		let e = this.params.dataType == "quantitative" ? this.#c() : this.#s();
		if (this.params.channel == "size") {
			let t = this.scaleResolution.getScale();
			for (let n of e) this.params.sizeMode == "strokeWidth" ? n[Ks] = t(n.value) : n[Gs] = t(n.value);
		}
		return e;
	}
	#s() {
		let e = this.params.format, t = e ? (t) => L(e)(Number(t)) : void 0, n = Hs(this.scaleResolution, t);
		if (!this.params.values) return n;
		let r = new Map(n.map((e) => [e.value, e]));
		return this.params.values.flatMap((e) => r.has(e) ? [r.get(e)] : []);
	}
	#c() {
		let e = this.scaleResolution.getScale(), t = this.params.count ?? Ws, n = Ds(e, t, this.params.format);
		return (this.params.values ? ws(e, this.params.values, t) : Ts(e, t)).flatMap((e) => {
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
function Js(e, t) {
	let n = e.dataParent;
	for (; n && lr(n);) n = n.dataParent;
	return n?.getScaleResolution(t) ?? e.getScaleResolution(t);
}
function Ys(e) {
	return e?.type == "legendEntries";
}
K(Ys, qs);
//#endregion
//#region ../core/src/scale/scale.js
var Xs = "locus", Zs = "index", Qs = 5;
function $s(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function ec(e) {
	return A(e) && ![
		"sequential",
		Zs,
		Xs
	].includes(e);
}
function tc(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var nc = lt(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.fp64.name".split("."));
function rc(e, t, n, r = !1) {
	n = tc(n), ic(t, e, n);
	let i = uc(t, e, n, r);
	i.domain && t.domain(i.domain), i.applyOrdinalUnknown && t.unknown(i.ordinalUnknown), hc(t, e, mc(t, e, i.count));
}
function ic(e, t, n) {
	n = tc(n);
	for (let r in t) if (!nc[r]) {
		if (r === "padding" && ec(e.type)) continue;
		Pt(e[r]) ? e[r](t[r]) : n.warn("Unsupported scale property: " + r);
	}
}
function ac(e, t) {
	hc(e, t, mc(e, t, e.domain().length));
}
function oc(e, t) {
	let n = !e.domain && !e.domainRaw && A(e.type), r = n ? {
		...e,
		domain: [0, 0]
	} : e, i = sc(r), a = ce(i);
	if (!a) throw Error("Unknown scale type: " + i);
	let o = a();
	return rc(r, o, t, n), o;
}
function sc(e) {
	var t = e.type, n = "", r;
	return t === "sequential" ? te + "-" + O : (cc(e) && (r = e.rawDomain ? e.rawDomain.length : e.domain ? e.domain.length + +(e.domainMid != null) : 0, n = r === 2 ? te + "-" : r === 3 ? ae + "-" : ""), (n + t || "linear").toLowerCase());
}
function cc(e) {
	let t = e.type;
	return A(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(vt));
}
function lc(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function uc(e, n, r, i = !1) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	r = tc(r);
	let a = lc(e);
	var o = dc(a, n.domainRaw, r);
	if (o > -1) return {
		domain: a.domain(),
		count: o,
		ordinalUnknown: a.type === "ordinal" && n.domainImplicit ? t : void 0,
		applyOrdinalUnknown: !1
	};
	var s = n.domain, c = a.type, l = n.zero || n.zero === void 0 && $s(a), u, d;
	return s ? (ec(c) && n.padding && s[0] !== it(s) && (s = fc(c, s, n.range, n.padding, n.exponent, n.constant)), (l || n.domainMin != null || n.domainMax != null || n.domainMid != null) && (u = (s = s.slice()).length - 1 || 1, l && (s[0] > 0 && (s[0] = 0), s[u] < 0 && (s[u] = 0)), n.domainMin != null && (s[0] = n.domainMin), n.domainMax != null && (s[u] = n.domainMax), n.domainMid != null && (d = n.domainMid, (d < s[0] || d > s[u]) && r.warn("Scale domainMid exceeds domain min or max.", d), s.splice(u, 0, d))), a.domain(pc(c, s, r, i)), n.nice && a.nice && a.nice(n.nice !== !0 && Cs(a, n.nice) || null), {
		domain: a.domain(),
		count: s.length,
		ordinalUnknown: c === "ordinal" && n.domainImplicit ? t : void 0,
		applyOrdinalUnknown: c === T
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function dc(e, t, n) {
	return t ? (e.domain(pc(e.type, t, n)), t.length) : -1;
}
function fc(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(it(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? Ue(t, null, s) : e === "sqrt" ? ge(t, null, s, .5) : e === "pow" ? ge(t, null, s, i || 1) : e === "symlog" ? cn(t, null, s, a || 1) : dn(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function pc(e, t, n, r = !1) {
	return g(e) && !r && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : +(t > 0));
	}, 0)) !== t.length && n.warn("Log scale domain includes zero: " + zt(t)), t;
}
function mc(e, t, n) {
	let r = t.bins;
	if (r && !Xt(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? it(t) : r.stop, a = r.step;
		a || Ht("Scale bins parameter missing step property."), r = Fe(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function hc(e, t, n) {
	var r = e.type, i = t.round || !1, a = t.range;
	if (t.rangeStep != null) a = gc(r, t, n);
	else if (t.scheme && (a = _c(r, t, n), Pt(a))) {
		if (e.interpolator) return e.interpolator(a);
		Ht(`Scale type ${r} does not support interpolating color schemes.`);
	}
	if (a && le(r)) return e.interpolator(E(yc(a, t.reverse), t.interpolate, t.interpolateGamma));
	a && t.interpolate && e.interpolate ? e.interpolate(D(t.interpolate, t.interpolateGamma)) : Pt(e.round) ? e.round(i) : Pt(e.rangeRound) && e.interpolate(i ? p : k), a && e.range(yc(a, t.reverse));
}
function gc(e, t, n) {
	e !== "band" && e !== "point" && Ht("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * ne(n, i, r)];
}
function _c(e, t, n) {
	var i = t.schemeExtent, a = t.schemeCount, o, s;
	return Xt(t.scheme) ? s = E(t.scheme, t.interpolate, t.interpolateGamma) : (vt(t.scheme) ? o = t.scheme.toLowerCase() : (o = t.scheme.name.toLowerCase(), i = t.scheme.extent ?? i, a = t.scheme.count ?? a), s = _(o), s || Ht(`Unrecognized scheme name: ${t.scheme}`)), n = e === "threshold" ? n + 1 : e === "bin-ordinal" ? n - 1 : e === "quantile" || e === "quantize" ? +a || Qs : n, le(e) ? vc(s, i, t.reverse) : Pt(s) ? r(vc(s, i), n) : e === "ordinal" ? s : s.slice(0, n);
}
function vc(e, t, n) {
	return Pt(e) && (t || n) ? w(e, yc(t || [0, 1], n)) : e;
}
function yc(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region ../core/src/data/sources/lazy/legendGradientSource.js
var bc = 64, xc = 5;
function Sc(e, t, n) {
	let r = Cc(e, t, n), i = wc(r.length);
	if ("copy" in e && typeof e.copy == "function" && "invert" in e && typeof e.invert == "function") {
		let t = e.copy();
		return t.domain(r), t.range(i), t;
	}
	let a = e.props, o = a?.type;
	if (o) {
		let e = { ...a }, t = e;
		delete e.range, delete e.scheme, delete t.domainMin, delete t.domainMid, delete t.domainMax, delete t.schemeExtent, delete t.schemeCount;
		let n = oc({
			...e,
			type: o,
			domain: r,
			range: i,
			zero: !1,
			nice: !1
		});
		if ("invert" in n && typeof n.invert == "function") return n;
	}
	return Ec(t, n);
}
function Cc(e, t, n) {
	if ("domain" in e && typeof e.domain == "function") {
		let r = e.domain().map(kc);
		if (r.length >= 2) return [
			t,
			...r.slice(1, -1),
			n
		];
	}
	return [t, n];
}
function wc(e) {
	let t = e - 1;
	return Array.from({ length: e }, (e, n) => n / t);
}
function Tc(e, t) {
	return (n) => e + (t - e) * n;
}
function Ec(e, t) {
	let n = ((n) => (n - e) / (t - e));
	return n.invert = Tc(e, t), n;
}
function Dc(e) {
	let t = e[0], n = e.at(-1), r = n - t, i = e.length - 1, a = i ? r / i : .1;
	return [t - a, n + a];
}
function Oc(e) {
	return e.type == "quantize" && "range" in e && typeof e.range == "function" && "invertExtent" in e && typeof e.invertExtent == "function" && "thresholds" in e && typeof e.thresholds == "function";
}
function kc(e) {
	let t = Number(e);
	if (!Number.isFinite(t)) throw Error("Gradient legend boundaries must be finite numbers.");
	return t;
}
var Ac = class extends q {
	#e = void 0;
	constructor(e, t) {
		if (super(t), this.params = e, this.scaleResolution = Js(t, e.channel), !this.scaleResolution) throw Error(`The gradient legend data source cannot find a resolved scale for channel "${e.channel}".`);
		let n = () => this.#t();
		this.scaleResolution.addEventListener("domain", n), this.view.registerDisposer(() => this.scaleResolution.removeEventListener("domain", n));
	}
	async load() {
		this.#e = void 0, this.#t();
	}
	#t() {
		let e = this.scaleResolution.getDomain();
		if (!this.#e || !N(e, this.#e)) {
			let t = Number(e[0]), n = Number(e.at(-1));
			if (!Number.isFinite(t) || !Number.isFinite(n)) throw Error("Gradient legends require a finite numeric scale domain.");
			this.#e = e.slice(), this.reset(), this.beginBatch({ type: "file" }), this.publishData(t, n), this.complete();
		}
	}
	publishData(e, t) {
		throw Error("Gradient legend data source must implement publishData.");
	}
}, jc = class extends Ac {
	get label() {
		return "legendGradientSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale();
		if (n.type == "threshold") {
			this.#t();
			return;
		}
		if (Oc(n)) {
			this.#e(e, t, n);
			return;
		}
		let r = this.params.count ?? bc, i = Sc(n, e, t), a = (e) => i.invert(e);
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
		let r = Ec(e, t);
		for (let [e, t] of n.range().entries()) {
			let [i, a] = n.invertExtent(t).map(kc), o = (i + a) / 2;
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
		let e = this.scaleResolution.getDomain().map(Number), [t, n] = Dc(e), r = Ec(t, n), i = [
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
}, Mc = class extends Ac {
	get label() {
		return "legendGradientTicksSource";
	}
	publishData(e, t) {
		let n = this.scaleResolution.getScale(), r = n.type == "threshold" ? Dc(this.scaleResolution.getDomain().map(Number)) : [e, t], i = Sc(n, r[0], r[1]), a = this.params.count ?? xc, o = Cs(n, a, void 0), s = Ds(n, a, this.params.format), c = this.params.values ? this.params.values.map(kc).filter((e) => {
			let t = i(e);
			return Number.isFinite(t) && t >= 0 && t <= 1;
		}) : Oc(n) ? n.thresholds().map(kc) : Ts(n, o).map(kc);
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
function Nc(e) {
	return e?.type == "legendGradient";
}
function Pc(e) {
	return e?.type == "legendGradientTicks";
}
K(Nc, jc), K(Pc, Mc);
//#endregion
//#region ../core/src/utils/deepEqual.js
function Fc(e, t) {
	if (Object.is(e, t)) return !0;
	if (Array.isArray(e) || Array.isArray(t)) {
		if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!Fc(e[n], t[n])) return !1;
		return !0;
	}
	if (!Ic(e) || !Ic(t)) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Fc(e[r], t[r])) return !1;
	return !0;
}
function Ic(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
//#endregion
//#region ../core/src/data/sources/lazy/scaleGroupsSource.js
function Lc(e, t) {
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
var Rc = class extends q {
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
			if (!n || !["index", "locus"].includes(n.getResolvedScaleType())) throw Error(`scaleGroups requires a resolved index or locus scale for ${e}.`);
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
			let t = e.mapping.get();
			if (!["index", "locus"].includes(t.scale.type)) throw Error("scaleGroups requires index or locus scales.");
			return {
				...e.extent.get(),
				cuts: Qe(t) ? t.gapPositions : []
			};
		});
		if (!e && Fc(t, this.#r)) return;
		this.#r = t, this.#n = t.every((e) => e.ready);
		let n = [{}];
		if (this.#n) for (let e = 0; e < this.axes.length; e++) {
			let r = this.axes[e].channel, i = Lc(t[e].extent, t[e].cuts);
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
function zc(e) {
	return e.type === "scaleGroups";
}
K(zc, Rc);
//#endregion
//#region ../core/src/data/sources/urlDescriptor.js
var Bc = class extends Error {
	count;
	maxValues;
	constructor(e, t) {
		super(`URL expansion resolved ${e} distinct values, exceeding maxValues ${t}.`), this.name = "UrlLimitExceededError", this.count = e, this.maxValues = t;
	}
};
async function Vc(e) {
	return $c(Jc(e.url, e).map((t) => ({
		...t,
		url: Vn(e.baseUrl, t.url),
		indexUrl: t.indexUrl ? Vn(e.baseUrl, t.indexUrl) : void 0
	})), rl(e.url));
}
function Hc(e) {
	return tl(e) && R(e.values) ? [{
		key: "url",
		expr: e.values
	}] : [];
}
function Uc(e) {
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
function Wc(e, t) {
	if (!t) return e;
	let n = Uc(t);
	for (let t = 0; t < e.length; t++) e[t] = n(e[t]);
	return e;
}
function Gc(e, t) {
	return e.onLoadError == "skip" && (console.warn(`Skipping failed URL: ${e.url}`, t), !0);
}
async function Kc(e, t) {
	try {
		return await t();
	} catch (t) {
		if (Gc(e, t)) return;
		throw t;
	}
}
function qc(e) {
	return JSON.stringify({
		url: e.url,
		indexUrl: e.indexUrl,
		fields: e.fields ? Object.fromEntries(Object.entries(e.fields).sort()) : void 0
	});
}
function Jc(e, t) {
	if (tl(e)) return Yc(e, t.indexUrl, t);
	let n = Xc(e, t), r = Xc(t.indexUrl, t);
	return (Array.isArray(n) ? n : [n]).map((e) => {
		let t = Zc(e);
		return typeof r == "string" && !t.indexUrl ? {
			...t,
			indexUrl: r
		} : t;
	});
}
function Yc(e, t, n) {
	let r = Xc(e.values, n);
	if (!Array.isArray(r)) throw Error("URL template values must resolve to an array.");
	return r.map((n) => {
		let r = el(n), i = e.attach === !1 ? void 0 : { [e.field]: r };
		return {
			url: Qc(e.template, e.field, r),
			indexUrl: nl(t) ? Qc(t.template, e.field, r) : F(t),
			fields: i,
			onLoadError: e.onLoadError
		};
	});
}
function Xc(e, t) {
	return R(e) ? il(t).createExpression(e)() : e;
}
function Zc(e) {
	if (typeof e == "string") return { url: e };
	if (e && typeof e == "object" && "url" in e && typeof e.url == "string") return e;
	throw Error("URL descriptor must be a string or an object with url.");
}
function Qc(e, t, n) {
	let r = "{" + t + "}";
	if (!e.includes(r)) throw Error(`URL template must contain ${r}.`);
	return e.replaceAll(r, encodeURIComponent(String(n)));
}
function $c(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = t.url + "\n" + (t.indexUrl ?? "");
		n.has(e) || n.set(e, t);
	}
	let r = Array.from(n.values());
	if (t !== void 0 && r.length > t) throw new Bc(r.length, t);
	return r;
}
function el(e) {
	if (e == null || typeof e == "object" || typeof e == "function") throw Error("URL template values must be scalar in this version.");
	return e;
}
function tl(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function nl(e) {
	return !!(e && typeof e == "object" && "template" in e);
}
function rl(e) {
	return tl(e) ? e.maxValues : void 0;
}
function il(e) {
	if (!e.paramRuntime) throw Error("URL ExprRef evaluation requires a parameter runtime.");
	return e.paramRuntime;
}
//#endregion
//#region ../core/src/utils/errorPresentation.js
function al(e) {
	return e ? `Specification: ${JSON.stringify(e.origin)}${e.path?.length ? `, property: ${JSON.stringify(e.path)}` : ""}` : "";
}
function ol(e) {
	return [e instanceof br ? `At "${e.view.getPathString()}": ${e}` : String(e), al(nt(e))].filter(Boolean).join("\n");
}
function sl(e) {
	let t = al(nt(e));
	t ? console.error(t, e) : console.error(e);
}
//#endregion
//#region ../core/src/utils/debounce.js
function cl(e, t, n = !0) {
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
var ll = class extends Fs {
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
		let t = () => F(this.params.debounce), n = this.params.debounceMode;
		if (n == "domain") this.onDomainChanged = cl(this.onDomainChanged.bind(this), t, !1);
		else if (n == "window") this.#a = cl(this.#a, t, !1);
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
		let t = F(this.params.windowSize) ?? -1;
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
		let r;
		try {
			let i = await this.#s(n);
			if (n.throwIfAborted(), i.length) {
				let a = await this.loadWindow(e, i, n);
				if (n.throwIfAborted(), a) {
					let e = a.windowSize ?? t;
					r = "processing", this.#u(a.data, a.interval, i, e);
				}
			} else r = "processing", this.#u([], e, i, t);
			n.aborted || this.setLoadingStatus("complete");
		} catch (e) {
			if (n.aborted) return;
			this._lastLoadedDomain = void 0, sl(e), this.setLoadingStatus("error", e.message, r, nt(e));
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
		return e.throwIfAborted(), (await Promise.all(t.map((e) => Kc(e, () => this.#c(e, n))))).filter((e) => e !== void 0);
	}
	#c(e, t) {
		let n = this.#o.cacheKey?.(e) ?? qc(e), r = this.#t.get(n);
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
			let t = await Vc(e);
			if (this.#o.singleUrl && t.length !== 1) throw Error(`Data source "${this.label}" supports exactly one resolved URL.`);
			return t;
		} catch (e) {
			if (e instanceof Bc) return [];
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
}, ul = class extends ll {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 7e3,
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, F(n.channel)), this.params = mt(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Hc(n.url)), !this.params.url) throw Error("No URL provided for IndexedFastaSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: dl,
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
async function dl() {
	let [{ IndexedFasta: e }, { RemoteFile: t }] = await Promise.all([import("./esm-CU1QIt3Q.js"), import("./browser-8YKVfyjC.js").then((e) => e.n)]);
	return {
		IndexedFasta: e,
		RemoteFile: t
	};
}
function fl(e) {
	return e?.type == "indexedFasta";
}
K(fl, ul);
//#endregion
//#region ../core/src/data/sources/lazy/bigWigSource.js
var pl = class extends ll {
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = F(n.channel);
		if (super(t, r), this.params = mt(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Hc(n.url)), !this.params.url) throw Error("No URL provided for BigWigSource");
		this.setupUrlLoading({
			loadModules: hl,
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
			attachFields: Uc(e.fields),
			reductionLevels: i,
			url: e.url
		};
	}
	onDomainChanged(e) {
		this.queueDomain(e);
	}
	async loadWindow(e, t, n) {
		let r = this.scaleResolution.getAxisLength() || 700, i = t.map((t) => _l(e, r, t.reductionLevels)), a = Math.max(...i.map((e) => e * r), 5e3), o = this.getChangedWindow(e, a);
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
			let a = vl(n[i], F(this.params.pixelsPerBin));
			return t.bbi.getFeatures(e.chrom, e.startPos, e.endPos, {
				scale: a,
				signal: r
			}).then((n) => gl(e.chrom, n, t.attachFields));
		}))).flat();
	}
	async #n(e, t, n, r) {
		let i = await Promise.all(t.map((t, i) => {
			let a = vl(n[i], F(this.params.pixelsPerBin));
			return t.bbi.getFeaturesMulti(e.map((e) => ({
				refName: e.chrom,
				start: e.startPos,
				end: e.endPos
			})), {
				scale: a,
				signal: r
			}).then((n) => n.map((n, r) => gl(e[r].chrom, n, t.attachFields)));
		}));
		return e.map((e, t) => i.flatMap((e) => e[t]));
	}
};
function ml(e) {
	return e?.type == "bigwig";
}
K(ml, pl);
async function hl() {
	let [{ BigWig: e }, { RemoteFile: t }] = await Promise.all([import("./esm-lSv1EdcB.js"), import("./browser-8YKVfyjC.js").then((e) => e.n)]);
	return {
		BigWig: e,
		RemoteFile: t
	};
}
function gl(e, t, n) {
	return t.map((t) => n({
		chrom: e,
		start: t.start,
		end: t.end,
		score: t.score
	}));
}
function _l(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
function vl(e, t) {
	return 1 / 2 / e / t;
}
//#endregion
//#region ../core/src/data/sources/lazy/bigBedSource.js
var yl = class extends ll {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = F(n.channel);
		if (super(t, r), this.params = mt(t.paramRuntime, n, (e) => {
			e.has("url") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Hc(n.url)), !this.params.url) throw Error("No URL provided for BigBedSource");
		this.setupUrlLoading({
			loadModules: Sl,
			createHandle: (e, { BigBed: t, RemoteFile: n, BED: r }) => this.#e(e, t, n, r)
		});
	}
	get label() {
		return "bigBedSource";
	}
	async #e(e, t, n, r) {
		let i = new t({ filehandle: new n(e.url) }), a = new r({ autoSql: (await i.getHeader()).autoSql }), o;
		try {
			let e = bl(a);
			o = (t, n) => e(t, n.start, n.end, n.rest);
		} catch {
			o = (e, t) => a.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
		}
		return {
			attachFields: Uc(e.fields),
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
function bl(e) {
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
        };`)(), u = Cl(t.map((e) => {
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
function xl(e) {
	return e?.type == "bigbed";
}
K(xl, yl);
async function Sl() {
	let [e, { BigBed: t }, { RemoteFile: n }] = await Promise.all([
		import("./esm-CvpR1OcU.js"),
		import("./esm-lSv1EdcB.js"),
		import("./browser-8YKVfyjC.js").then((e) => e.n)
	]);
	return {
		BigBed: t,
		RemoteFile: n,
		BED: e.default
	};
}
function Cl(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region ../core/src/data/sources/lazy/bamSource.js
var wl = class extends ll {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		}, r = F(n.channel);
		if (super(t, r), this.params = mt(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Hc(n.url)), this.tagFields = Dl(n.tags), !this.params.url) throw Error("No URL provided for BamSource");
		this.setupUrlLoading({
			singleUrl: !0,
			loadModules: Tl,
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
			data: await this.discretizeAndLoad(e, async (e, t) => r.bam.getRecordsForRange(r.fixChrPrefix(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => Ol(e.chrom, t, this.tagFields))), n)
		};
	}
};
async function Tl() {
	let [{ BamFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-DmkCMKkQ.js"), import("./browser-8YKVfyjC.js").then((e) => e.n)]);
	return {
		BamFile: e,
		RemoteFile: t
	};
}
function El(e) {
	return e?.type == "bam";
}
K(El, wl);
function Dl(e) {
	if (!e) return [];
	if (!Array.isArray(e)) throw Error("BAM tags must be an array of SAM tag names");
	return [...new Set(e)].map((e) => {
		if (!/^[A-Za-z][A-Za-z0-9]$/.test(e)) throw Error(`Invalid SAM tag name "${e}". Tags have two characters, e.g. "HP".`);
		return ["tag_" + e, e];
	});
}
function Ol(e, t, n) {
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
//#region ../core/src/data/sources/inlineSource.js
function kl(e) {
	return "values" in e;
}
var Al = class extends q {
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
		if (Array.isArray(e)) e.length > 0 && (t = e, n = zl(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = Ro(e, Pl(Nl(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, jl = /* @__PURE__ */ new Set([
	"csv",
	"tsv",
	"dsv"
]), Ml = /* @__PURE__ */ new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function Nl(e, t = []) {
	if (!kl(e) && !Wl(e)) return;
	let n = { ...e.format };
	if (n.type ??= Wl(e) && Il(t), n.parse === void 0 && Gl(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function Pl(e) {
	let t = { ...e };
	return (Hl(t) || Ul(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function Fl(e) {
	return Lo(e)?.responseType ?? "text";
}
function Il(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = Rl(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && Ml.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && Lo(r)) return r;
	}
}
function Ll(e) {
	let t = Rl(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && Ml.has(n);
}
function Rl(e) {
	return e.replace(/[?#].*$/, "");
}
var zl = (e) => typeof e == "object" ? Vl : Bl, Bl = (e) => ({ data: e }), Vl = (e) => e;
function Hl(e) {
	return e.type == "csv" || e.type == "tsv";
}
function Ul(e) {
	return e.type == "dsv";
}
function Wl(e) {
	return "url" in e;
}
function Gl(e) {
	return jl.has(e);
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixSource.js
var Kl = class extends ll {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = F(n.channel);
		if (super(t, r), this.params = mt(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.reloadUrlDescriptors() : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), Hc(n.url)), !F(this.params.url)) throw Error("No URL provided for TabixSource");
		this.setupUrlLoading({
			cacheKey: (e) => qc(e) + "\n" + JSON.stringify(F(this.params.addChrPrefix)),
			loadModules: ql,
			createHandle: (e, { TabixIndexedFile: t, RemoteFile: n }) => this.#e(e, t, n)
		});
	}
	async #e(e, t, n) {
		let r = F(this.params.addChrPrefix), i = r === !0 ? "chr" : r || "", a = new t({
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
				}), [t, Wc(this._parseFeatures(r, t.parserContext), t.fields)];
			})), n)
		};
	}
	publishInterval(e, t, n) {
		this.#t(n, e);
	}
	async _createParser(e, t) {}
	async _readFilePrefix(e) {
		let { maxBlockSize: t } = await e.getMetadata(), n = await e.filehandle.read(t, 0), { unzip: r } = await import("./esm-DgWoyQNF.js").then((e) => e.t), i = await r(n);
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
async function ql() {
	let [{ TabixIndexedFile: e }, { RemoteFile: t }] = await Promise.all([import("./esm-Bu2MKRT7.js"), import("./browser-8YKVfyjC.js").then((e) => e.n)]);
	return {
		TabixIndexedFile: e,
		RemoteFile: t
	};
}
//#endregion
//#region ../core/src/data/sources/lazy/tabixTsvSource.js
function Jl(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function Yl(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function Xl(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = Ro(e.join("\n"), Pl(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var Zl = class extends Kl {
	get label() {
		return "tabixSource";
	}
	async _createParser(e, t) {
		let n = this.params, r = F(n.columns) ?? Jl(e);
		if (r?.length || (r = Yl(await this._readFilePrefix(t))), !r?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
		return r;
	}
	_parseFeatures(e, t) {
		let n = this.params;
		return Xl(e, t ?? [], F(n.parse));
	}
};
function Ql(e) {
	return e?.type == "tabix";
}
K(Ql, Zl);
//#endregion
//#region ../core/src/data/sources/lazy/gff3Source.js
var $l = class extends Kl {
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
function eu(e) {
	return e?.type == "gff3";
}
K(eu, $l);
//#endregion
//#region ../core/src/data/sources/lazy/vcfSource.js
var tu = class extends Kl {
	get label() {
		return "vcfSource";
	}
	async _createParser(e) {
		return await vs(e);
	}
	_parseFeatures(e, t) {
		return bs(e, t);
	}
};
function nu(e) {
	return e?.type == "vcf";
}
//#endregion
//#region ../core/src/rendering/registerWebGL.js
K(nu, tu), pr.canvasBackend = async (e) => {
	let { createCanvas2DRenderingBackend: t } = await import("./canvas2d-IEhhllqC.js");
	return t(e);
}, pr.canvasRasterExport = () => import("./rasterExport-CSlCh8ru.js"), pr.canvasSvgRasterizer = () => import("./svgRasterizer-7dqG_r1v.js"), pr.svgRenderer = () => import("./svg-9fLtLDgN.js"), pr.webglBackend = async (e) => {
	let { createWebGLRenderingBackend: t } = await import("./webgl-BHP-QnJI.js");
	return t(e);
};
//#endregion
//#region ../core/src/data/dataReadiness.js
function* ru(e) {
	let t = [e], n = /* @__PURE__ */ new Set();
	for (; t.length;) {
		let e = t.pop();
		n.has(e) || (n.add(e), yield e, e.parent && t.push(e.parent), t.push(...e.dataDependencies));
	}
}
function iu(e, t) {
	for (let n of ru(e)) if (!n.isDataReady() || t && "isDataReadyForDomain" in n && !n.isDataReadyForDomain(t)) return !1;
	return !0;
}
//#endregion
//#region ../core/src/styles/genome-spy.css.js
var au = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n/* Public color properties remain unset so host overrides can inherit. */\n.gs-theme-colors {\nposition: absolute;\nwidth: 0;\nheight: 0;\noverflow: hidden;\nvisibility: hidden;\npointer-events: none;\n--_genome-spy-foreground: light-dark(black, #e5ebf1);\n--_genome-spy-stroke: light-dark(gray, #a0adba);\n--_genome-spy-grid: light-dark(lightgray, #3a4653);\n--_genome-spy-chromosome-tick: light-dark(#989898, #b0bdca);\n--_genome-spy-symbol-stroke: light-dark(#888, #c0cbd6);\n--_genome-spy-background: transparent;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\n> span {\nwhite-space: pre-line;\noverflow-wrap: anywhere;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.gs-tooltip {\nposition: fixed;\ninset: auto;\nmargin: 0;\nborder: 0;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: light-dark(#f6f6f6, #252f3b);\nbackground: var(--background-color);\ncolor: var(--genome-spy-foreground, light-dark(black, #e5ebf1));\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid currentColor;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, currentColor 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\nwidth: auto;\nmax-width: none;\nmargin: 0;\nbackground: transparent;\nborder-collapse: collapse;\nfont-size: var(--font-size);\n\nth,\ntd {\nborder: 0;\nbackground: transparent;\ncolor: inherit;\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px var(--background-color);\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid currentColor;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: light-dark(#e0e0e0, #3a4653);\n}\n}\n\n.autoscroll-container {\nmax-height: min(40em, 50vh);\noverflow-x: hidden;\noverflow-y: auto;\npadding-right: var(--genome-spy-basic-spacing);\nmargin-right: calc(-1 * var(--genome-spy-basic-spacing));\n}\n\n.na {\ncolor: light-dark(#aaa, #a0adba);\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n/* Body embeds must retain viewport bounds after failed startup cleanup. */\n:scope:is(body) > .message-box {\nposition: fixed;\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\nwhite-space: pre-wrap;\noverflow-wrap: anywhere;\nmax-width: calc(100% - 40px);\nmax-height: calc(100% - 40px);\noverflow: auto;\n}\n}\n}\n", ou = "gs-suppress-tooltip", su = "gs-freeze-interaction", cu = "gs-tooltip", lu = class {
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
		this.#o = document.createElement("div"), this.#o.className = cu, this.#o.setAttribute("popover", "manual"), e.appendChild(this.#o), this.clear();
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
		return ve(this.#c) ?? !0;
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
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && du(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 10;
		n > window.innerWidth - 10 - this.#o.offsetWidth && (n = e - 10 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 10, window.innerHeight - 10 - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		this.#e || (!e || !this.enabled || this._isPenalty() ? (this.visible &&= (Bi("", this.#o), !1), this.#n = void 0) : (Bi(e, this.#o), this.#o.querySelectorAll(".autoscroll-container").forEach(uu), this.visible = !0, this.updatePlacement()));
	}
	clear() {
		this.#n = void 0, this.setContent(void 0);
	}
	updateWithDatum(e, t, n = e) {
		if (n !== this.#n) {
			this.#n = n, t ||= (e) => Promise.resolve(U` ${JSON.stringify(e)} `);
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
function uu(e) {
	e && queueMicrotask(() => {
		e.querySelector("tr.hovered")?.scrollIntoView({
			block: "nearest",
			inline: "nearest"
		});
	});
}
function du(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region ../core/src/genomeSpy/containerUi.js
function fu(e) {
	e.classList.add("genome-spy");
	let t = pu(e), n = hu("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: hu("div", { class: "loading-indicators" }),
		tooltip: new lu(e),
		styleElement: t
	};
}
function pu(e) {
	let t = document.createElement("style");
	return t.textContent = au, e.appendChild(t), t;
}
function mu(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	return r.textContent = t, n.appendChild(r), e.appendChild(n), n;
}
function hu(e, t) {
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
var gu = Object.freeze({
	foreground: "black",
	stroke: "gray",
	grid: "lightgray",
	chromosomeTick: "#989898",
	symbolStroke: "#888",
	background: null
});
function J(e) {
	return { expr: `defaultThemeColors.${e} || ${JSON.stringify(gu[e])}` };
}
var _u = /* @__PURE__ */ new WeakSet();
function vu(e) {
	return _u.has(e);
}
function yu(e = []) {
	let t = e.find((e) => e.name === "defaultThemeColors");
	if (t) {
		if ("select" in t || "ruler" in t || "bind" in t || "transition" in t) throw Error("The \"defaultThemeColors\" parameter must declare a palette value or expression.");
		return "expr" in t || bu(t.value), e;
	}
	let n = {
		name: "defaultThemeColors",
		value: { ...gu }
	};
	return _u.add(n), [n, ...e];
}
function bu(e) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("The \"defaultThemeColors\" parameter must contain a palette object.");
	for (let t of Object.keys(gu)) {
		let n = e[t];
		if (n !== void 0 && (t !== "background" || n !== null) && typeof n != "string") throw Error("The \"defaultThemeColors\" palette requires a color for \"" + t + "\".");
	}
}
//#endregion
//#region ../core/src/genomeSpy/defaultThemeStyle.js
function xu(e, t) {
	if (!vu(t.paramRuntime.paramConfigs.get("defaultThemeColors"))) return;
	let n = e.appendChild(document.createElement("div"));
	n.className = "gs-theme-colors", n.setAttribute("aria-hidden", "true");
	let r = Object.keys(gu), i = getComputedStyle(n);
	function a() {
		let e = { ...gu };
		for (let t of r) {
			let r = t.replace(/[A-Z]/g, "-$&").toLowerCase();
			n.style.color = `var(--genome-spy-${r}, var(--_genome-spy-${r}))`;
			let a = i.color, o = jt(a);
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
var Su = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Cu = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), wu = class {
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
}, Tu = "important", Eu = " !" + Tu, Du = Cu(class extends wu {
	constructor(e) {
		if (super(e), e.type !== Su.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				let t = typeof r == "string" && r.endsWith(Eu);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? Tu : "") : n[e] = r;
			}
		}
		return wi;
	}
});
//#endregion
//#region ../core/src/utils/variableTools.js
function Ou(e) {
	return vt(e) || tn(e) || ft(e);
}
//#endregion
//#region ../core/src/config/styleUtils.js
function ku(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
function Au(e, t) {
	let n = ku(t);
	return z(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region ../core/src/config/markConfig.js
function ju(e, t, n) {
	let r = [t, ...ku(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return z([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region ../core/src/selection/order.js
function Mu(e, t, n, r, i) {
	if (e === void 0) return;
	let { condition: a, value: o } = e;
	if (!Number.isFinite(o) || a && !Number.isFinite(a.value)) throw Error("Order levels must be finite numbers.");
	if (!a || o === a.value) return;
	let s = je(a), c = Yt(s, t, n, r, i), l = Je(c.selection);
	return {
		predicate: c,
		params: l,
		passes: a.value < o ? ["matching", "nonmatching"] : ["nonmatching", "matching"],
		isActive: () => l.some((e) => Le(n.findValue(e)))
	};
}
//#endregion
//#region ../core/src/marks/mark.js
var Nu = class {
	#e;
	#t = 0;
	#n;
	#r = !1;
	constructor(e) {
		this.unitView = e, this.encoders = void 0;
		let t = typeof e.spec.mark == "object" ? e.spec.mark : {}, n = ju(e.getConfigScopes(), e.getMarkType(), t.style), r = n;
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
		return R(e) ? this.unitView.paramRuntime.evaluateAndGet(e) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		R(n) && this.unitView.paramRuntime.watchExpression(n, e, {
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
			R(e) && this.unitView.paramRuntime.watchExpression(e, () => {
				this.unitView.getCollector()?.completed && (this.#t++, this.unitView.context.animator.requestRender());
			});
		}
	}
	get encoding() {
		return yr(this, "encoding", () => {
			let e = this.unitView.getEncoding(), t = (e) => {
				let t = this.properties[e], n = Ou(t) || R(t) ? { value: t } : void 0, r = this.unitView.spec.mark;
				return n && typeof r == "object" && r[e] !== void 0 && en(r, n, [e]), n;
			}, n = Object.fromEntries(this.getSupportedChannels().map((e) => [e, t(e)]).filter((e) => Ke(e[1]))), r = this.fixEncoding({
				...this.requiresRecordIdentity() ? { uniqueId: { field: Kt } } : {},
				...n,
				...e
			}), i = r, a = (e, t) => {
				let n = dt(e), r = Ot(n);
				if (!r) throw Error("Cannot add scale properties to an unscaled channel definition.");
				return Object.assign(r, t), n;
			};
			for (let n of ["x", "y"]) {
				let r = n == "x" ? "x2" : "y2", o = n == "x" ? "xOffset" : "yOffset", s = n == "x" ? "x2Offset" : "y2Offset", c = i[o];
				if (ut(c)) {
					let e = i[n], t = e && Ot(e), r = t;
					t && r && t.type != "quantitative" && r.band == null && (i[n] = a(e, { band: 0 })), Ot(c).band ?? (i[o] = a(c, { band: this.getOffsetBand(o) }));
				}
				let l = ye(i[o], e[s] ?? t(s), e[r] != null);
				if (typeof l == "number") i[s] = { value: l };
				else if (l && Ot(l)) {
					if (!Ot(i[o])) throw Error(s + " requires a scaled " + o + " definition.");
					let t = { resolutionChannel: o };
					ut(l) && (e[s] == null || !("band" in l) || l.band == null) && (t.band = this.getOffsetBand(s)), i[s] = a(l, t);
				} else i[s] = l;
			}
			Or(r), r.x && (r.x.buildIndex ??= this.properties.buildIndex ?? !0);
			let o = this.unitView.spec.predicates ?? {};
			for (let [e, t] of Object.entries(r)) {
				if (!t || !("condition" in t)) continue;
				let n = P(t.condition), r = n.map((e) => en(e, De(e, o)));
				r.some((e, t) => e !== n[t]) && (i[e] = en(t, {
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
		this.encoders = Bt(this.unitView, this.encoding);
	}
	getOrder() {
		return this.#r ||= (this.#n = Mu(this.encoding.order, this.encoding, this.unitView.paramRuntime, this.defaultHitTestMode, (e) => this.unitView.getScaleResolution(e)?.type), !0), this.#n;
	}
	initializeRenderingRevisions(e, t = {}) {
		let n = t.trackResources ?? !0, r = this.#e, i = r ?? (this.#e = {
			configuration: 0,
			resources: 0,
			expressions: /* @__PURE__ */ new Set()
		}), a = (e, t) => {
			let n = t + ":" + (R(e) ? e.expr : e);
			i.expressions.has(n) || (this.unitView.paramRuntime.watchExpression(e, () => {
				i[t]++, this.unitView.context.animator.requestRender();
			}), i.expressions.add(n));
		};
		if (!r) {
			let e = /* @__PURE__ */ new Set();
			for (let [t, r] of Object.entries(this.encoders)) {
				for (let e of r.branches ?? []) {
					let r = e.accessor.channelDef;
					on(r) && a(r, "configuration");
					let i = t === "text" ? "configuration" : "resources";
					if (!n && i === "resources") continue;
					for (let t of Ie(e.predicate)) a(t, i);
					let o = [Ke(r) ? r.value : void 0, St(r) ? r.datum : void 0];
					for (let e of o) R(e) && a(e, i);
				}
				if (n && r.scale) {
					let n = Ot(r.channelDef)?.resolutionChannel ?? t;
					if (Wt(n)) {
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
				R(e) && a(e, "resources");
			}
		}
	}
	getRenderingRevision(e) {
		return this.#e?.[e] ?? 0;
	}
	getEncodedDataRevision() {
		return this.#t;
	}
	requiresRecordIdentity() {
		return this.isPickingParticipant() || !Bn(this.unitView) && this.unitView.paramRuntime.hasPointSelections({ inherited: !0 });
	}
	isPickingParticipant() {
		if (this.properties.tooltip === null && !this.unitView.paramRuntime.hasPointSelections()) return !1;
		for (let e of this.unitView.getLayoutAncestors()) if (!e.isPickingSupported()) return !1;
		return !0;
	}
	getDebugState() {
		return { properties: { ...this.properties } };
	}
}, Pu = class extends Nu {
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
		return Cr(e, "x", ut(e.xOffset)), Cr(e, "y", ut(e.yOffset)), Dr(e, this.properties.filled), Sr(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
//#endregion
//#region ../core/src/marks/ruleLikeEncoding.js
function Fu(e, t) {
	if (Er(e, "x"), Er(e, "y"), !(e.x && e.y && e.x2 && e.y2)) {
		if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
		else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
		else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
		else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
		else if (e.x && e.y && e.y2) e.x2 = e.x;
		else if (e.y && e.x && e.x2) e.y2 = e.y;
		else if (e.y && e.x) {
			if (!e.x2 && yt(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
			else if (!e.y2 && yt(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
			else throw Error(`Cannot infer ${t} mark's secondary position channel from the encoding: ` + JSON.stringify(e));
		} else throw Error(`At a minimum, either the x or y channel must be defined in the ${t} mark's encoding: ` + JSON.stringify(e));
	}
	return e;
}
//#endregion
//#region ../core/src/marks/arrow.js
var Iu = class extends Nu {
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
		return Fu(e, "arrow"), !e.size && Lu(this.properties.size) && (e.size = Ru(this.properties.size, this.properties.size.channel ?? "auto", e)), Dr(e, this.properties.filled), Sr(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
};
function Lu(e) {
	return typeof e == "object" && !!e && "band" in e && typeof e.band == "number";
}
function Ru(e, t, n) {
	let r = zu(t, n), i = r == "x" ? "width" : "height", a = n[r];
	return { value: { expr: `${yt(a) && a.scale !== null ? `bandwidth("${r}") * ${i}` : i} * ${e.band}` } };
}
function zu(e, t) {
	if (e == "auto") return Bu(t);
	if (Vu(t)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return e;
}
function Bu(e) {
	if (Vu(e)) throw Error("Band-relative arrow size is not supported for diagonal arrows.");
	return Hu(e) ? "y" : "x";
}
function Vu(e) {
	return Hu(e) && Uu(e);
}
function Hu(e) {
	return e.x2 != null && e.x2 !== e.x;
}
function Uu(e) {
	return e.y2 != null && e.y2 !== e.y;
}
//#endregion
//#region ../core/src/data/transforms/sample.js
var Wu = class extends M {
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
function Gu(e, t, n) {
	let r = new Wu({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region ../core/src/marks/point.js
var Ku = class extends Nu {
	#e = () => 0;
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		if (t != null) {
			if (R(t)) {
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
		let t = this.unitView.getEncoding(), n = typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark : {}, r = !Ke(e.shape) || e.shape.value === "x" || e.shape.value === "+", i = e.strokeWidth;
		for (let [e, r] of [["dx", "xOffset"], ["dy", "yOffset"]]) {
			let i = t[e] != null || e in n, a = t[r] != null || r in n;
			if (i && a) throw Error(`Point marks cannot combine legacy ${e} with ${r}. Use only ${r}.`);
		}
		return Dr(e, this.properties.filled), Sr(e, this.properties.filled), r && Ke(e.stroke) && e.stroke.value === null && (e.strokeOpacity = { value: 0 }, i && (e.strokeWidth = i)), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		let e = this.encoders.semanticScore ? pt(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(Gu(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	getSemanticThreshold() {
		if (!this.sampledSemanticScores || this.sampledSemanticScores.length === 0) return -1;
		let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
		return e <= 0 ? -Infinity : e >= 1 ? Infinity : C(this.sampledSemanticScores, e);
	}
}, qu = "horizontal", Ju = "vertical", Yu = class extends Nu {
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
		return this.getType() == "tick" ? this.fixTickEncoding(e) : Fu(e, "rule");
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? Xu(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return Zu(e, n), e;
	}
};
function Xu(e) {
	if (!e.y) return Ju;
	if (!e.x) return qu;
	let t = Qu(e.x), n = Qu(e.y);
	if (!t && n) return Ju;
	if (t && !n) return qu;
}
function Zu(e, t) {
	t == Ju ? (e.x2 = e.x, Qu(e.y) ? [e.y, e.y2] = ed(e.y) : (e.y = { value: 0 }, e.y2 = { value: 1 })) : (e.y2 = e.y, Qu(e.x) ? [e.x, e.x2] = ed(e.x) : (e.x = { value: 0 }, e.x2 = { value: 1 }));
}
function Qu(e) {
	return yt(e) && (e.type == "ordinal" || e.type == "nominal");
}
function $u(e, t) {
	return en(e, {
		...e,
		band: t
	});
}
function ed(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [$u(e, t), $u(e, 1 - t)];
}
//#endregion
//#region ../core/src/marks/link.js
var td = class extends Nu {
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
		return e.x2 ||= yt(e.x) ? { datum: 0 } : e.x, e.y2 ||= yt(e.y) ? { datum: 0 } : e.y, e;
	}
};
//#endregion
//#region ../core/src/fonts/textMetrics.js
function nd(e, t) {
	return e.requestFont(t);
}
function rd(e, t, n) {
	return {
		width: e.measureWidth(t, n),
		height: e.getHeight(n)
	};
}
function id(e, t, n) {
	let r = t * Math.PI / 180, i = Math.abs(Math.sin(r)), a = Math.abs(Math.cos(r));
	return n == "vertical" ? e.width * i + e.height * a : e.width * a + e.height * i;
}
//#endregion
//#region ../core/src/marks/text.js
var ad = class extends Nu {
	#e;
	constructor(e) {
		super(e), this.#e = rn(e.paramRuntime, this.properties.fitToBand, "Reactive text fitToBand changes are not supported.", (t) => e.registerDisposer(t)) ?? !1, this.fontMeasurement = nd(e.context.textMetrics, this.properties);
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
		for (let t of Se) this.#e ? Cr(e, t) : Tr(e, t);
		return e;
	}
};
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function od(e) {
	return --e * e * e + 1;
}
function sd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region ../core/src/utils/eerp.js
function cd(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region ../core/src/scales/domainLifecycle.js
function ld(e, t) {
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
function ud(e, t, n) {
	switch (t.type) {
		case "set": return fd(e, t.domain, 0, n);
		case "frame":
		case "finish": {
			if (e.transition?.id !== t.id) return md(e);
			let r = t.type === "finish" ? e.transition.target : t.domain;
			return pd(t.type === "finish" ? {
				...e,
				transition: void 0
			} : e, r, n, t.type === "frame" ? t.gapDomain : void 0);
		}
		case "navigate":
			if (n.scaleKind === "discrete") throw Error("Discrete domains do not support navigation or reset.");
			return fd(e.phase === "collecting" ? {
				...e,
				phase: "interacted"
			} : e, t.domain, t.duration, n, t.gapDomain);
		case "data":
		case "configuration":
		case "expression":
		case "selection":
		case "selection-sync":
		case "viewport":
		case "membership": return dd(e, t, n);
		default: throw Error("Unknown domain update: " + t.type);
	}
}
function dd(e, t, n) {
	let r = {
		...e,
		resetDomain: t.resetDomain,
		dataExtent: t.dataExtent,
		initialReference: e.phase === "ready" ? e.initialReference : t.referenceDomain ?? e.initialReference,
		phase: t.readiness === "ready" ? "ready" : e.phase
	};
	if (t.candidate === void 0) return md(r);
	let i = t.type === "selection" || t.type === "selection-sync";
	if (t.type === "selection-sync" && N(t.candidate, e.visibleDomain) || !(n.selectionLinked || i || t.type === "configuration" || t.type === "expression" && !n.animateChanges) && e.phase !== "collecting" && n.zoomable) return md(r);
	let a = t.type === "selection-sync" || t.type === "data" || t.type === "membership";
	if (n.selectionLinked && a && e.transition && N(t.candidate, e.visibleDomain)) return md(r);
	let o = e.phase === "ready" && n.scaleKind === "continuous" && n.rendered && n.animateChanges && !n.selectionLinked && !i;
	return o && e.transition && N(t.candidate, e.transition.target) ? md(r) : fd(r, t.candidate, o ? 500 : 0, n);
}
function fd(e, t, n, r, i) {
	if (n > 0 && r.scaleKind !== "discrete" && e.visibleDomain.length === 2 && t.length === 2 && Number.isFinite(+t[1] - t[0]) && Number.isFinite(+e.visibleDomain[1] - e.visibleDomain[0]) && (+t[1] - t[0]) * (+e.visibleDomain[1] - e.visibleDomain[0]) > 0 && !N(t, e.visibleDomain)) {
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
		...pd({
			...e,
			transition: void 0
		}, t, r, i),
		transition: e.transition ? { type: "cancel" } : { type: "none" }
	};
}
function pd(e, t, n, r) {
	let i = !N(t, e.visibleDomain) || !N(r ?? [], e.gapDomain ?? []);
	return {
		state: i ? {
			...e,
			visibleDomain: t,
			gapDomain: r
		} : e,
		domainChanged: i,
		syncSelection: n.selectionLinked && n.zoomable,
		transition: { type: "none" }
	};
}
function md(e) {
	return {
		state: e,
		domainChanged: !1,
		syncSelection: !1,
		transition: { type: "none" }
	};
}
//#endregion
//#region ../core/src/scales/domainRuntime.js
var hd = 2 ** 53 - 1 - 1, gd = class {
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
		let c = new Wn(() => e);
		this.#e = c, this.#t = t, this.#n = n, this.#r = c.signal("domain state", ld(r, i)), this.domain = c.computed("displayed domain", [this.#r], () => this.state.visibleDomain, { equals: N }), this.#u = o, c.effect([this.domain], a), this.#d = c.signal("domain render publication", 0), c.effect([this.domain, this.#d], () => {
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
		return this.#e.requestUpdate(this.#f, hd, this.#p), n.catch(() => {}), this.#e.flushNow({ afterTransaction: !0 }), n;
	}
	cancelSourceUpdates() {
		this.#i = this.#i.filter((e) => "candidate" in e.update ? (e.resolve(), !1) : !0), this.#l = !1, this.#e.cancelUpdate(this.#m);
	}
	#f = () => {
		if (this.#i.length) {
			let e = this.#i.shift();
			try {
				let t = e.update;
				if (t.type === "selection-sync" && !N(t.candidate, this.state.visibleDomain)) {
					e.resolve();
					return;
				}
				"domain" in t && (t.type !== "navigate" && t.type !== "frame" || !t.gapDomain) && (t = {
					...t,
					domain: this.#t.normalizeDomain(t.domain)
				}), "readiness" in t && this.state.phase !== "ready" && (t.type !== "selection-sync" && (this.#l = t.readiness === "ready", this.#e.requestUpdate(this.#m, hd + 1, this.#p)), t = {
					...t,
					readiness: "pending"
				});
				let n = this.state, r = ud(n, t, this.policy());
				if (r.transition.type !== "none" && this.#g(), r.domainChanged && (this.#t.mirrorDomain(r.state.visibleDomain, r.state.gapDomain), this.#s ||= e.render), this.#r.set(r.state), r.syncSelection && (this.syncSelection(), this.#o) || (r.domainChanged || !Fc(n.initialReference, r.state.initialReference) || !Fc(n.dataExtent, r.state.dataExtent)) && (this.#u(), this.#o)) {
					e.resolve();
					return;
				}
				this.#s && this.#h(), r.transition.type === "start" ? this.#_(r.transition).then(e.resolve, e.reject) : e.resolve();
			} catch (t) {
				throw e.reject(t), this.#p(t), t;
			} finally {
				this.#i.length && this.#e.requestUpdate(this.#f, hd, this.#p);
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
		let t = e.from, n = e.to, r = t[1] - t[0], i = n[1] - n[0], a = t[0] + r / 2, o = n[0] + i / 2, s = this.#t.scale, c = "gapMapping" in s ? s : void 0, l = c?.gapMapping(), u = l && c.copy().domain(n).gapMapping(), d = or();
		this.#a = d, await this.#n.transition({
			duration: e.duration,
			easingFunction: sd,
			cancelToken: d,
			onUpdate: (s) => {
				if (d.canceled) return;
				if (l && u) {
					let t = l.interpolate(u, s);
					this.update({
						type: "frame",
						id: e.id,
						domain: t.domain,
						gapDomain: t.ranks
					});
					return;
				}
				let c = cd(r, i, s), f = r === i ? s : (r - c) / (r - i), p = f * o + (1 - f) * a;
				this.update({
					type: "frame",
					id: e.id,
					domain: [t[0] === n[0] ? t[0] : p - c / 2, t[1] === n[1] ? t[1] : p + c / 2]
				});
			}
		}), !d.canceled && this.state.transition?.id === e.id && (this.#a = void 0, await this.update({
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
function _d(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function vd(e, t) {
	if (e) {
		if (!fe(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function yd(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? _d(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: vd(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function bd(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !Ct(a)) return;
		let o = He(a.select);
		kt(o) && o.encodings?.includes(r) && e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function xd(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !Ct(e)) continue;
		let o = He(e.select);
		if (kt(o) && o.encodings?.includes(r) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function Sd(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.round(a), o = Math.round(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region ../core/src/utils/domainArray.js
var Cd = class e extends Array {
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
}, wd = class extends Cd {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) || (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e))), this;
	}
}, Td = class extends Cd {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, Ed = class extends Td {
	constructor() {
		super(), this.type = "nominal";
	}
}, Dd = class extends Cd {
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
}, Od = {
	quantitative: wd,
	index: wd,
	locus: wd,
	nominal: Ed,
	ordinal: Td
};
function kd(e, t) {
	if (e == "quantitative" && Ad(t)) {
		let n = new Dd(t);
		return n.type = e, n;
	}
	if (Od[e]) {
		let n = new Od[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function Ad(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region ../core/src/scales/domainExpressions.js
function jd(e, t) {
	return R(e) ? t(e)() : Array.isArray(e) ? e.map((e) => jd(e, t)) : e;
}
function Md(e) {
	return R(e) ? [e] : Array.isArray(e) ? e.flatMap((e) => Md(e)) : [];
}
//#endregion
//#region ../core/src/utils/radixSort.js
function Nd(e, t) {
	return t < 22 ? e >>> t & 2047 : Math.floor(e / 2 ** t) & 2047;
}
function Pd(e) {
	let t = e.length, n = new Uint32Array(t), r = 0, i = !0;
	for (let a = 0; a < t; a++) n[a] = a, r = Math.max(r, e[a]), a && e[a] < e[a - 1] && (i = !1);
	if (i) return n;
	let a = new Uint32Array(t), o = /* @__PURE__ */ new Uint32Array(2048);
	for (let i = 0; i < 53 && 2 ** i <= r; i += 11) {
		o.fill(0);
		for (let r = 0; r < t; r++) o[Nd(e[n[r]], i)]++;
		let r = 0;
		for (let e = 0; e < o.length; e++) {
			let t = o[e];
			o[e] = r, r += t;
		}
		for (let r = 0; r < t; r++) {
			let t = n[r];
			a[o[Nd(e[t], i)]++] = t;
		}
		[n, a] = [a, n];
	}
	return n;
}
//#endregion
//#region ../core/src/data/keyIndex.js
var Fd = "|", Id = "\\", Ld = class {
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
				n > 0 && (e += Fd);
				let r = i[n], a = Rd(t[n], r);
				e += Bd(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = Rd(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => et(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += Fd);
				let r = e[t], i = Rd(n[t](o), r);
				s += Bd(i);
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
				let n = e[t], s = Rd(a(n), o);
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
function Rd(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function zd(e) {
	if (e.indexOf(Id) === -1 && e.indexOf(Fd) === -1) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === Id || r === Fd) && (t += Id), t += r;
	}
	return t;
}
function Bd(e) {
	return typeof e == "string" ? zd(e) : String(e);
}
//#endregion
//#region ../core/src/data/viewportDomain.js
var Vd = 256, Hd = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n) {
		this.sortField = P(e.sort?.field)[0], this.getBatches = t, this.isCompleted = n;
	}
	reset() {
		for (let e of this.#e.values()) e.batches = void 0;
	}
	complete() {
		for (let e of this.#e.values()) e.batches = Wd(this.getBatches(), e);
	}
	getDomain(e, t, n, r) {
		let i = r.find((e) => e.channel === "x");
		if (!i || !this.#t(i)) return Yd(this.getBatches(), t, n, r);
		let a = Ud(i), o = this.#e.get(a);
		return o || (o = {
			accessor: i.accessor,
			accessor2: i.accessor2,
			targets: /* @__PURE__ */ new Map(),
			batches: void 0
		}, this.#e.set(a, o)), r.length === 1 && o.targets.get(e) !== n && (o.targets.set(e, n), o.batches && qd(o.batches, e, n)), !o.batches && this.isCompleted() && (o.batches = Wd(this.getBatches(), o)), o.batches ? Jd(o, e, t, n, r) : kd(t);
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
function Ud(e) {
	return e.accessor.sourceKey + "|" + (e.accessor2?.sourceKey ?? "point");
}
function Wd(e, t) {
	let n = Array.from(e, (e) => Gd(e, t));
	for (let [e, r] of t.targets) qd(n, e, r);
	return n;
}
function Gd(e, t) {
	let n = Math.ceil(e.length / Vd), r = Kd(n, Infinity), i = Kd(n, -Infinity), a = Kd(n, Infinity), o = Kd(n, -Infinity), s = new Uint8Array(n);
	for (let n = 0; n < e.length; n++) {
		let c = Math.floor(n / Vd), l = $d(e[n], t.accessor, t.accessor2);
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
function Kd(e, t) {
	let n = new Float64Array(e);
	return n.fill(t), n;
}
function qd(e, t, n) {
	for (let r of e) {
		let e = Math.ceil(r.data.length / Vd), i = {
			min: Kd(e, Infinity),
			max: Kd(e, -Infinity),
			valid: new Uint8Array(e),
			uncertain: new Uint8Array(e)
		};
		r.targets.set(t, i);
		for (let e = 0; e < r.data.length; e++) {
			let t = n(r.data[e]);
			if (t == null || Number.isNaN(t)) continue;
			let a = Math.floor(e / Vd), o = +t;
			Number.isNaN(o) ? i.uncertain[a] = 1 : (i.valid[a] = 1, i.min[a] = Math.min(i.min[a], o), i.max[a] = Math.max(i.max[a], o));
		}
	}
}
function Jd(e, t, n, r, i) {
	if (!e.batches) throw Error("Viewport index has not been built.");
	let a = i.map(Zd), o = a.find((e) => e.channel === "x"), s = kd(n);
	for (let n of e.batches) {
		let i = Math.ceil(n.data.length / Vd);
		for (let c = 0; c < i; c++) {
			let i = n.uncertain[c] === 1;
			if (!i && ef(n, c, o.domain, !!e.accessor2)) continue;
			if (a.length === 1 && !i && tf(n, c, o.domain, !!e.accessor2, o.mode)) {
				let e = n.targets.get(t);
				if (e && e.uncertain[c] === 0) {
					e.valid[c] === 1 && (s.extend(e.min[c]), s.extend(e.max[c]));
					continue;
				}
			}
			let l = c * Vd;
			Xd(n.data, l, Math.min(l + Vd, n.data.length), s, r, a);
		}
	}
	return s;
}
function Yd(e, t, n, r) {
	let i = kd(t), a = r.map(Zd);
	for (let t of e) Xd(t, 0, t.length, i, n, a);
	return i;
}
function Xd(e, t, n, r, i, a) {
	for (let o = t; o < n; o++) {
		let t = e[o];
		a.every((e) => Qd(t, e)) && r.extend(i(t));
	}
}
function Zd(e) {
	let t = Math.min(e.domain[0], e.domain[1]), n = Math.max(e.domain[0], e.domain[1]);
	return {
		...e,
		domain: [t, n]
	};
}
function Qd(e, t) {
	let n = $d(e, t.accessor, t.accessor2);
	if (!n) return !1;
	let [r, i] = t.domain;
	return t.mode === "contain" ? n.start >= r && n.end <= i : n.start === n.end ? n.start >= r && n.start <= i : n.start < i && n.end > r;
}
function $d(e, t, n) {
	let r = t(e), i = n ? n(e) : r;
	if (r == null || i == null) return;
	let a = +r, o = +i;
	if (!(Number.isNaN(a) || Number.isNaN(o))) return {
		start: Math.min(a, o),
		end: Math.max(a, o)
	};
}
function ef(e, t, n, r) {
	let [i, a] = n;
	return r ? e.maxEnd[t] <= i || e.minStart[t] >= a : e.maxStart[t] < i || e.minStart[t] > a;
}
function tf(e, t, n, r, i) {
	let [a, o] = n;
	return i === "contain" ? e.minStart[t] >= a && e.maxEnd[t] <= o : r ? e.maxStart[t] < o && e.minEnd[t] > a : e.minStart[t] >= a && e.maxStart[t] <= o;
}
//#endregion
//#region ../core/src/data/fileBatchUtils.js
function nf(e, t) {
	if (t.length == 0) return () => void 0;
	if (t.length == 1 && t[0].index == 0) return () => t[0].batch;
	let n = /* @__PURE__ */ new WeakMap(), r = 0, i = 0, a = { type: "file" };
	for (let o of e) {
		for (; i < t.length && t[i].index <= r;) a = t[i++].batch;
		n.set(o, a), r++;
	}
	return (e) => n.get(e);
}
function rf(e, t, n) {
	let r;
	return (i) => {
		let a = e(i);
		a !== void 0 && a !== r && (t(a), r = a), n(i);
	};
}
//#endregion
//#region ../core/src/data/collector.js
var af = class extends ze {
	#e = [];
	#t = [];
	#n = () => void 0;
	#r = 0;
	#i = et(Kt);
	#a = /* @__PURE__ */ new Uint32Array();
	#o = new Ld();
	#s;
	#c;
	#l = new of();
	#u;
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e, t) {
		super(t), this.params = e ?? { type: "collect" }, this.#u = new Hd(this.params, () => this.facetBatches.values(), () => this.completed), this.observers = /* @__PURE__ */ new Set(), this.dataRevision = 0, this.facetBatches = new Me([], JSON.stringify), this.#c = lf(this.params.sort, t), this.#d();
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
		this.#o.invalidate(), gt(e) ? (this.#e = [], this.facetBatches.set(P(e.facetId), this.#e)) : this.#t.push({
			index: this.#r,
			batch: e
		});
	}
	complete() {
		if (this.#n = nf(sf(this.facetBatches.values()), this.#t), this.#e = [], this.params.groupby?.length) {
			let e = this.params.groupby.map((e, t) => et(e, void 0, this.paramRuntimeProvider?.paramRuntime?.getSpecLocation(this.params, ["groupby", t]))), t = cf(this.facetBatches.size > 1 ? sf(this.facetBatches.values()) : this.facetBatches.get(void 0), e);
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
			let n = rf(this.#n, (e) => {
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
		this.completed && (this.parent ? this.paramRuntime.runInTransaction(() => this.#p()) : this.#p());
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
			let e = kd(t);
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
		this.#a = Pd(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#a.length) return;
		let t = oe((e) => e.start).right, n = this.#i, r = oe((e) => n(i(e))).left, i = (e) => {
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
}, of = class {
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
function sf(e) {
	return { [Symbol.iterator]: function* () {
		for (let t of e) yield* t;
	} };
}
function cf(e, t) {
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
function lf(e, t) {
	if (e?.field) {
		let n = P(e.field), r = n.map((n, r) => et(n, void 0, t?.paramRuntime?.getSpecLocation(e, Array.isArray(e.field) ? ["field", r] : ["field"]))), i = n.length == 1 ? pn(n[0]) : [];
		if (i.length == 1 && !n[0].includes(".")) {
			let t = P(e.order)[0] ?? "ascending", n = JSON.stringify(i[0]);
			return Function("accessor", `return (a, b) => {
                        if (!(${n} in a)) accessor(a);
                        if (!(${n} in b)) accessor(b);
                        return ${t === "ascending" ? `a[${n}] - b[${n}]` : `b[${n}] - a[${n}]`};
                    };`)(r[0]);
		}
		return st(r, e.order);
	}
}
//#endregion
//#region ../core/src/view/dataReadiness.js
function uf(e, t) {
	let n = {};
	for (let r of t) {
		let t = e.getScaleResolution(r);
		t && (n[r] = Array.from(t.getDomain()));
	}
	return Object.keys(n).length ? n : void 0;
}
function df(e, t, n) {
	for (let r of hf(e, n)) {
		let e = Array.from(ru(r)).filter((e) => e instanceof Fs);
		if (e.length && (!iu(r) || e.some((e) => !vf(e, t)))) return !1;
	}
	return !0;
}
function ff(e, t, n, r, i) {
	let a = i ?? gf;
	return new Promise((i, o) => {
		let s = !1, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = () => {
			p(), f();
		}, d = () => {
			for (let e of c) e();
			c.clear(), e.removeBroadcastListener("subtreeDataReady", u), r && r.removeEventListener("abort", m);
		}, f = () => {
			if (s) return !0;
			try {
				if (!pf(e, t, a) || !df(t, n, a)) return !1;
				s = !0, d(), i();
			} catch (e) {
				s = !0, d(), o(e);
			}
			return !0;
		}, p = () => {
			for (let e of hf(t, a)) for (let t of ru(e)) t instanceof af && !l.has(t) && (l.add(t), c.add(t.observe(f)));
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
			_f(t, n, a), f();
		} catch (e) {
			s = !0, d(), o(e);
		}
	});
}
function pf(e, t, n) {
	let r = !1;
	for (let i of hf(t, n)) {
		let t = Array.from(ru(i)).filter((e) => e instanceof q);
		if (t.some((e) => e instanceof Fs)) for (let n of t) {
			let t = e.dataFlow.loadingStatusRegistry.getSource(n);
			if (t?.status === "error") throw Error(`Data loading failed at "${t.viewPath}": ${t.message ?? t.sourceId}`);
			r ||= t?.status === "loading";
		}
	}
	return !r;
}
function mf(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of hf(e, t)) for (let e of ru(r)) e instanceof Fs && n.add(e);
	return n;
}
function hf(e, t) {
	let n = t ?? gf, r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		e instanceof Y && n(e) && e.flowHandle?.collector && r.add(e.flowHandle.collector);
	}), r;
}
function gf(e) {
	return e.isVisible() && e.getEffectiveOpacity() > 0;
}
function _f(e, t, n) {
	for (let r of mf(e, n)) {
		let e = yf(r, t);
		e && r.ensureDataForDomain(e);
	}
}
function vf(e, t) {
	let n = yf(e, t);
	return !!n && e.isDataReadyForDomain({ [e.channel]: n });
}
function yf(e, t) {
	return t?.[e.channel] ?? (t ? void 0 : Array.from(e.scaleResolution.getDomain()));
}
//#endregion
//#region ../core/src/scales/viewportDomain.js
var bf = 150;
function xf(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && e.source === "viewport";
}
function Sf(e, t) {
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
	let r = n.filter((e) => xf(e.domain)), i = /* @__PURE__ */ new Set();
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
function Cf(e, t, n, r) {
	let i = t(), a = kd(i), o = !1;
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let s = r(t), c = t.view.getCollector();
		for (let t of e) c ? (a.extendAll(c.getViewportDomain(hn(t, i), i, t, s)), o = !0) : t.constant && (a.extend(t({})), o = !0);
	}
	return o ? a : void 0;
}
function wf(e, t, n, r, i) {
	let a = [];
	for (let n of Se) {
		let o = e.view.getScaleResolution(n);
		if (!o || o === t) continue;
		if (r(o)) throw Error(`Viewport-derived scale domains form a dependency cycle in view "${e.view.getPathString()}".`);
		let s = o.getScale();
		if (!A(s.type) || j(s.type)) continue;
		let c = e.view.mark.encoders?.[n];
		if (!c) continue;
		let l = Of(c);
		if (!l) continue;
		let u = n === "x" ? "x2" : "y2", d = e.view.mark.encoders?.[u], f = d ? Of(d) : void 0, p = o.getDomain();
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
function Tf(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) for (let e of Se) {
		let i = r.view.getScaleResolution(e);
		i && i !== t && n.add(i);
	}
	return n;
}
function Ef(e, t) {
	for (let n of e) {
		if (!n.view.getCollector()?.completed) return !1;
		let e = {};
		for (let r of t(n)) e[r.channel] = Array.from(r.domain);
		if (!df(n.view, e, (e) => e === n.view)) return !1;
	}
	return !0;
}
var Df = class {
	#e;
	#t = !1;
	constructor({ isReady: e, update: t }) {
		this.isReady = e, this.update = t;
	}
	schedule(e) {
		e && this.#t && this.isReady() ? (this.#t = !1, this.update()) : (clearTimeout(this.#e), this.#t = !1, this.#e = setTimeout(() => {
			this.#e = void 0, this.isReady() ? this.update() : this.#t = !0;
		}, bf));
	}
	clear() {
		clearTimeout(this.#e), this.#e = void 0, this.#t = !1;
	}
};
function Of(e) {
	return pt(e) ?? Zt(e).find(he);
}
//#endregion
//#region ../core/src/genome/locusFormat.js
var kf = L(",d");
function Af(e) {
	return e.chrom + ":" + kf(Math.floor(e.pos + 1));
}
function jf(e) {
	return !tn(e) && "chrom" in e ? Af(e) : "" + e;
}
function Mf(e, t) {
	return e.chrom + ":" + kf(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + kf(Math.ceil(t.pos));
}
//#endregion
//#region ../core/src/genome/genomes.js
var Nf = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function Pf(e) {
	if (!(e in Nf)) throw Error(`Unknown assembly: ${e}`);
	return Nf[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region ../core/src/genome/genome.js
var Ff = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/grammar/genomic-coordinates/.");
		if (!Bf(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, Hf(this.config)) this.setChromSizes(this.config.contigs);
		else if (!Vf(this.config)) {
			let e = Pf(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/grammar/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (Vf(this.config)) try {
			let t = Vn(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(If(await n.text()));
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
		return Mf(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return Af(t);
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
function If(e) {
	return Ta(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function Lf(e) {
	return I(e) && "chrom" in e;
}
function Rf(e) {
	return e.every(Lf);
}
function zf(e) {
	return Rf(e) && (e[1] ?? e[0]).pos !== void 0;
}
function Bf(e) {
	return I(e) && ("name" in e || Vf(e) || Hf(e));
}
function Vf(e) {
	return Bf(e) && "url" in e;
}
function Hf(e) {
	return Bf(e) && "contigs" in e;
}
//#endregion
//#region ../core/src/scales/domainPlanner.js
function Uf(e, t, n, r, i, a) {
	let o = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => {
		let t = e.channelDef.scale?.domain;
		return t && !xf(t);
	}), s = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	t?.domain !== void 0 && !xf(t.domain) && Gf(s, Kf(t, n, r, i, a));
	for (let e of o) Gf(s, Kf({
		channel: e.channel,
		type: e.channelDef.type,
		domain: e.channelDef.scale.domain
	}, n, r, i, a));
	return Yf(s);
}
function Wf(e, t, n) {
	let r = Array.from(e).filter((e) => e.contributesToDomain).map((e) => ({
		channel: e.channel,
		domain: e.channelDef.scale?.domain
	}));
	t && r.push(t);
	let i = !1, a;
	for (let { channel: e, domain: t } of r) {
		if (t === void 0 || xf(t)) continue;
		if (!ep(t)) {
			i = !0;
			continue;
		}
		let r = $f(e, t, t.param), { runtime: o } = n(t.param, r);
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
function Gf(e, t) {
	t.kind === "selection" ? qf(e, t) : Jf(e, t);
}
function Kf(e, t, n, r, i) {
	let a = e.domain;
	return ep(a) ? {
		kind: "selection",
		...Xf(e, a, n, r, i)
	} : {
		kind: "literal",
		domain: Zf(e.type, jd(a, t), r)
	};
}
function qf(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function Jf(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function Yf(e) {
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
function Xf(e, t, n, r, i) {
	let a = t.param, o = $f(e.channel, t, a), s = n(a, o), c = t.initial !== void 0, l = s.selection?.intervals[o], u = a + "." + o;
	return !l || l.length !== 2 || l[0] === l[1] ? {
		domain: i && t.initial ? Zf(e.type, t.initial, r) : void 0,
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	} : {
		domain: kd(e.type, r(l)),
		description: u,
		param: a,
		encoding: o,
		hasInitial: c,
		runtime: s.runtime
	};
}
function Zf(e, t, n) {
	let r = n(t);
	return kd(e, e === "locus" && Rf(t) && !zf(t) ? r : Cn(e, r));
}
function Qf(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => xd(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function $f(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = nn(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function ep(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function tp(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = hn(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = kd(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = kd(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function np(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? n?.length ? xn(e, n) : [] : n ?? [];
}
function rp(e) {
	let t = e.view.mark.encoders?.[e.channel];
	return t ? Zt(t).filter(he) : [];
}
//#endregion
//#region ../core/src/scales/domainInputs.js
function ip({ owner: e, manager: t, props: n, explicit: r, type: i, members: a, dataMembers: o, viewLevelDomain: s, createExpression: c, resolveSelectionBinding: l, fromComplexInterval: u, getLocusExtent: d, link: f, viewport: p, viewportDependencies: m, getConstraints: h, getZoomExtent: g, ignoreSelectionInitial: _, lastVisible: v }) {
	let y = e.runtime, b = Array.from(a, (e) => e.view);
	e.policy = () => ({
		zoomable: A(n.type) && !j(n.type) && !!n.zoom,
		scaleKind: n.type === "index" ? "index" : A(n.type) && !j(n.type) ? "continuous" : "discrete",
		rendered: b.some((e) => e.hasRendered()),
		animateChanges: n.domainTransition !== !1,
		selectionLinked: !!f
	});
	let x = [];
	try {
		let b = /* @__PURE__ */ new Map();
		for (let e of [s?.domain, ...Array.from(a, (e) => e.contributesToDomain ? e.channelDef.scale?.domain : void 0)]) for (let t of Md(e)) b.has(t.expr) || b.set(t.expr, c(t));
		let S = new Set(Array.from(b.values()).flatMap((e) => (e.zoomLevelResolutions ?? []).filter((e) => e.isZoomable()))), C = new Map(Array.from(o, (e) => [e, rp(e).filter((e) => !e.channelDef.domainInert)])), w = new Map(Array.from(o, (e) => [e, (p && e.view.mark.encoders ? h(e) : []).map((t) => {
			let n = e.view.getScaleResolution(t.channel);
			return {
				...t,
				get domain() {
					let e = n.getDomain();
					return [e[0], e.at(-1)];
				}
			};
		})])), T = y.signal("selection domain input", {
			value: f ? vd(f.runtime.getValue(f.param), f.param) : void 0,
			own: !1,
			ignoreInitial: _
		});
		x.push(T.dispose);
		let E, D, O = [], ee = !1, k = y.computed("configured domain", [T, ...Array.from(b.values()).flatMap((e) => e.dependencies)], () => Uf(a, s, (e) => b.get(e.expr), f ? () => ({
			runtime: f.runtime,
			selection: T.get().value
		}) : l, u, !T.get().ignoreInitial).domain, { equals: (e, t) => Fc(e, t) });
		x.push(k.dispose);
		let te = () => {
			if (p) {
				let e = Cf(o, () => i, (e) => C.get(e), (e) => w.get(e));
				return e?.length && (v = e), e?.length ? e : v;
			}
			return tp(o, () => i, (e) => C.get(e));
		}, ne = () => Array.from(o).every((e) => {
			if (!e.view.isDataInitialized()) {
				let t = e.channelDef.scale?.domain;
				return t !== void 0 && !xf(t);
			}
			if (!e.view.mark.encoders?.[e.channel]) return !1;
			if (C.get(e).every((e) => e.constant)) return !0;
			let t = e.view.getCollector();
			return !!t && iu(t);
		}), re = (e) => np(i, d, e, n.assembly), ie = () => {
			let a = D;
			if (D = void 0, ee || !a) return;
			if (a === "selection-sync") {
				e.update({
					type: a,
					candidate: e.state.visibleDomain,
					resetDomain: t.normalizeDomain(k.get() ?? re(void 0)),
					referenceDomain: e.state.initialReference,
					dataExtent: e.state.dataExtent,
					readiness: e.state.phase === "ready" ? "ready" : "pending"
				});
				return;
			}
			let s = k.get(), c = f ? T.get().value?.intervals[f.encoding] : void 0, l = c != null && c[0] === c[1], u = i !== "locus" && (!s || f) || typeof n.zoom == "object" && n.zoom.extent === "data" ? te() : void 0;
			O = re(u);
			let d = s ?? O, p = t.domainProps(n, d, r), m = t.prepareDomain(p);
			m.applyOrdinalUnknown && t.scale.unknown(m.ordinalUnknown), j(n.type) && (t.scale.props.domainIndexer = p.domainIndexer);
			let h = l || a === "viewport" && !Ef(o, (e) => w.get(e)) ? void 0 : m.domain ?? void 0;
			e.update({
				type: a,
				candidate: h,
				resetDomain: t.normalizeDomain(s ?? re(void 0)),
				referenceDomain: f ? O : h,
				dataExtent: typeof n.zoom == "object" && n.zoom.extent === "data" && u?.length ? Array.from(xn(i, u)) : void 0,
				readiness: e.state.phase === "ready" || ne() ? "ready" : "pending"
			});
		}, ae = (e) => {
			(!D || e === "selection" || D !== "selection" && e !== "selection-sync" && (e !== "data" || D === "selection-sync")) && (D = e), y.requestUpdate(ie, hd - 1, () => {
				D = void 0;
			});
		}, oe = new Df({
			isReady: () => Ef(o, (e) => w.get(e)),
			update: () => {
				ae("viewport"), y.flushNow({ afterTransaction: !0 });
			}
		});
		for (let t of m) x.push(t.getDomainRef().subscribe(() => {
			e.state.phase === "ready" ? oe.schedule(!1) : ae("viewport");
		}));
		x.push(() => oe.clear()), x.push(k.subscribe(() => ae(f ? T.get().own ? "selection-sync" : "selection" : "expression"))), f && x.push(f.runtime.subscribe(f.param, () => {
			let e = T.get(), t = vd(f.runtime.getValue(f.param), f.param), n = t?.intervals[f.encoding], r = E !== void 0 && t === E;
			T.set({
				value: t,
				own: r,
				ignoreInitial: n ? !1 : e.value?.intervals[f.encoding] ? !0 : e.ignoreInitial
			}), ae(r ? "selection-sync" : "selection");
		}));
		let se = () => {
			p && e.state.phase === "ready" ? oe.schedule(!0) : ae("data"), y.flushNow({ afterTransaction: !0 });
		}, ce = /* @__PURE__ */ new Map();
		for (let e of o) {
			let t = e.view.getCollector();
			if (!t) continue;
			let n = ce.get(t);
			n || (n = {
				keys: /* @__PURE__ */ new Set(),
				sensitive: de(t)
			}, ce.set(t, n));
			for (let t of C.get(e)) (r || !n.sensitive.has(nn(t.scaleChannel))) && n.keys.add(hn(t, i));
		}
		for (let [e, { keys: t }] of ce) for (let n of t) x.push(e.subscribeDomainChanges(n, se));
		return {
			zoomLevelResolutions: S,
			get lastVisible() {
				return v;
			},
			get ignoreSelectionInitial() {
				return T.get().ignoreInitial;
			},
			request: ae,
			readData: te,
			syncSelection() {
				if (!f || !n.zoom || !A(n.type) || j(n.type)) return;
				let t = vd(f.runtime.getValue(f.param), f.param);
				if (!t) return;
				let r = Sd(e.state.visibleDomain, g());
				if (!r) return;
				let i = Fc(r, Sd(O, g())) ? null : r;
				if (Fc(t.intervals[f.encoding] ?? null, i)) return;
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
				ee = !0, y.cancelUpdate(ie);
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
var ap = 1;
function op() {
	let e = [0, 1], t = [0, 1], n = 1, r = 1, i = 0, a = 0, o = .5, s = [], c = 0, l = () => 1, u, d = /* @__PURE__ */ new Map(), f = (n = l()) => {
		if (!(g.props ? tt(g.props) : c > 0 && s.length > 0) || n <= 0) return;
		let r = d.get(n);
		return r || (r = Gt({
			domain: e,
			range: t,
			cuts: s,
			width: c / n,
			ranks: u,
			paddingInner: i,
			paddingOuter: a,
			align: o
		}), d.set(n, r)), r;
	}, p = 0, m = () => f()?.step ?? r / Math.max(1, n - i + a * 2), h = (e = m()) => {
		let a = f();
		return a ? a.start : t[0] + (r - e * (n - i)) * o;
	}, g = (t) => {
		let n = f();
		if (n) return n.position(t);
		let r = m();
		return h(r) + (Math.floor(t) - e[0]) * r;
	};
	return g.invert = (t) => f()?.invertPoint(t).value ?? (t - h()) / m() + e[0], g.gapMapping = f, g.gapPositions = function(e) {
		return arguments.length ? (s = Re(e), d.clear(), g) : s;
	}, g.gapWidth = function(e) {
		if (!arguments.length) return c;
		if (e != null && (!Number.isFinite(e) || e < 0)) throw Error("Gap width must be a finite nonnegative number.");
		return c = e ?? 0, d.clear(), g;
	}, g.axisLength = function(e) {
		return arguments.length ? (l = typeof e == "function" ? e : () => e, d.clear(), g) : l();
	}, g.gapDomain = () => u, g.domain = function(t, r) {
		if (arguments.length) {
			d.clear(), u = r, e = Ra(t), n = e[1] - e[0];
			let i = e[0] === 0 && e[0] === 0;
			if (!r && n < ap && !i) {
				n = ap;
				let t = (e[0] + e[1]) / 2;
				e[0] = t - n / 2, e[1] = t + n / 2;
			}
			return g;
		}
		return e.slice();
	}, g.range = function(e) {
		return arguments.length ? (d.clear(), t = [...e], r = t[1] - t[0], g) : t;
	}, g.numberingOffset = function(e) {
		return arguments.length ? (p = e, g) : p;
	}, g.padding = function(e) {
		return arguments.length ? (d.clear(), a = e, i = Math.min(1, e), g) : i;
	}, g.paddingInner = function(e) {
		return arguments.length ? (d.clear(), i = Math.min(1, e), g) : i;
	}, g.paddingOuter = function(e) {
		return arguments.length ? (d.clear(), a = e, g) : a;
	}, g.align = function(e) {
		return arguments.length ? (d.clear(), o = Math.max(0, Math.min(1, e)), g) : o;
	}, g.step = m, g.bandwidth = () => Math.abs(m() * (1 - i)), g.ticks = (e) => {
		let r = p - (1 - i) / 2;
		return ke(g.invert(t[0]) + r, g.invert(t[1]) + r, Math.min(e, Math.ceil(n))).filter(Number.isInteger).map((e) => e - p);
	}, g.tickFormat = (t, r) => {
		if (r) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = we(e[0], e[1], Math.min(t, Math.ceil(n))) < 1e5 ? L(",") : L(".3s");
		return (e) => i(e + p);
	}, g.copy = () => {
		let n = op().domain(e, u).range(t).paddingInner(i).paddingOuter(a).align(o).numberingOffset(p).gapPositions(s).gapWidth(c).axisLength(l);
		return g.props && Object.assign(n, { props: g.props }), n;
	}, g;
}
//#endregion
//#region ../core/src/genome/scaleLocus.js
var sp = 1e6, cp = .65;
function lp() {
	let e = op().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), o = (1 - e.paddingInner()) / 2, [s, c] = e.range().map((t) => e.invert(t) - o), l = t.toChromosome(Math.max(s, 0)), u = t.toChromosome(Math.min(c, t.totalSize - 1)), d = Math.max(1, Math.min(n ?? 10, i)), f = we(r[0], r[1], d);
		f < sp && (f = we(r[0], r[1], Math.max(1, Math.min((n ?? 10) * cp, i)))), f = Math.max(1, f);
		let p = [];
		for (let e = l.index; e <= u.index; e++) {
			let n = t.chromosomes[e], r = Math.max(n.continuousStart + f, n.continuousStart + Math.ceil((s + a - n.continuousStart) / f) * f), i = Math.min(n.continuousEnd - f / 4, c + a);
			for (let e = r; e <= i; e += f) p.push(e - a);
		}
		return p;
	}, e.tickFormat = (n, r) => {
		if (!t) return;
		if (r) throw Error("Locus scale's tickFormat does not support a specifier!");
		let i = e.domain(), a = i[1] - i[0], o = e.numberingOffset(), s = we(i[0], i[1], Math.max(1, Math.min(n ?? 10, a))) < sp ? L(",") : L(".3s"), c = (e) => e - t.toChromosome(e).continuousStart;
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
function up(e) {
	return e.type == "locus";
}
function dp(e, t) {
	let n = gp(e);
	return n ? n.toChromosomal(t) : t;
}
function fp(e, t) {
	let n = gp(e);
	return n && Lf(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function pp(e, t) {
	let n = gp(e);
	return n && Rf(t) ? n.toContinuousInterval(t) : t;
}
function mp(e, t) {
	let n = gp(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function hp(e) {
	let t = gp(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function gp(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region ../core/src/scales/scaleInstanceManager.js
var _p = class {
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
	#m = !1;
	#h;
	#g;
	constructor({ getRuntime: e, createExpression: t, onRangeChange: n, onDomainChange: r, getGenomeStore: i, getAxisLength: a = () => 0 }) {
		this.#r = e, this.#c = t, this.#l = n, this.#u = r, this.#f = i, this.#p = a;
	}
	get scale() {
		return this.#e;
	}
	get initializingRange() {
		return this.#m;
	}
	resetScale() {
		this.#o = !1, this.#a?.set(null), this.#e = void 0, this.#s = void 0, this.#d = void 0, this.#g = void 0, this.#t = void 0;
	}
	getLocusGenome(e) {
		let t = this.#f();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e, t) {
		let n = oc({
			...this.#x(e),
			range: void 0
		});
		if (n.props = e, "unknown" in n && n.unknown(null), this.#e = n, this.#t = typeof n.range == "function" ? n.range() : void 0, this.#_(e), "axisLength" in n && n.axisLength(this.#p), this.#d = n.domain, n.type !== "null" && (this.#i = t(n.domain())), this.#s = n.range, !this.#n) {
			this.#n = new Wn(() => this.#r()), this.#a = this.#n.signal("range command", null), this.mapping = this.#n.operation("scale mapping", [], () => null, (e) => {
				e && this.#y(e);
			}, { equals: yp });
			let e = this.mapping.get();
			this.#n.effect([this.mapping], () => {
				let t = this.mapping.get(), n = e && (t.gapWidth !== e.gapWidth || !N(t.gapPositions, e.gapPositions));
				e = t, t.gapDomain && n ? this.#u(Array.from(t.domain)) : this.#l();
			});
		}
		this.#m = !0;
		try {
			this.configureMapping(e), this.#n.flushNow();
		} finally {
			this.#m = !1;
		}
		return this.#S(), this.#e;
	}
	#_(e) {
		let t = this.#e;
		t && up(t) && t.genome(this.getLocusGenome(e.assembly));
	}
	domainProps(e, t, n) {
		let r = { ...e };
		if (j(e.type)) {
			let e = this.#h ??= wn();
			e.addAll(t ?? []);
			let i = t && new Set(t), a = n ? t ?? [] : e.domain().filter((e) => !i || i.has(e));
			r.domain = a.length ? a : new Ed(), r.domainIndexer = e;
		} else t?.length && (r.domain = t);
		return !r.domain && r.domainMid !== void 0 && (r.domain = [r.domainMin ?? 0, r.domainMax ?? 1]), r;
	}
	prepareDomain(e) {
		let t = this.#e.copy();
		return t.type = this.#e.type, ic(t, this.#x(e)), uc(t, e);
	}
	configureProperties(e) {
		this.#g = void 0, this.#e.props = e;
	}
	configureMapping(e) {
		let t = this.#e, n = t.type === "null" ? [] : [this.#i, this.#a], r = (e) => {
			if (!R(e)) return () => e;
			let t = this.#c(e);
			return n.push(...t.dependencies), t;
		}, i = Array.isArray(e.range) ? e.range.map(r) : void 0, a = tt(e);
		if (a && !["index", "locus"].includes(t.type)) throw Error("Grouping gaps require a positional index or locus scale.");
		let o = r(a ? e.gapPositions : null), s = r(a ? e.gapWidth ?? 6 : 0), c, l = Re(null);
		this.#m = !1, this.mapping.rebind(n, () => {
			let n = o(null);
			n !== c && (l = this.#b(n), c = n);
			let r = i?.map((e) => e(null));
			e.reverse && r?.reverse();
			let a = this.#a.get(), u = this.#o && a !== null && a.props === e && vp(a.configuredRange, r);
			a && !u && (this.#o = !1);
			let d = a && u ? a.range : r, f = this.mapping.get(), p = t.type === "null" || f?.scale === t && f?.props === e ? void 0 : this.#v(e), m = t.type === "null" ? null : this.#i.get();
			return {
				scale: t,
				props: e,
				domain: m ? m.visibleDomain : [],
				gapDomain: m?.gapDomain,
				gapPositions: l,
				gapWidth: s(null),
				configuredRange: r,
				range: d,
				prepared: p
			};
		}), this.#n.flushNow({ afterTransaction: !0 });
	}
	#v(e) {
		e = this.#x(e);
		let t = this.#e.copy();
		return t.type = this.#e.type, ic(t, e), ac(t, {
			...e,
			range: void 0
		}), Object.assign(t, { props: e });
	}
	#y({ props: e, range: t, prepared: n, gapPositions: r, gapWidth: i }) {
		if (this.#e && this.#e.type !== "null" && (n && (ic(this.#e, n.props), this.#s && this.#s(n.range()), "interpolator" in n && "interpolator" in this.#e && this.#e.interpolator(n.interpolator()), "bins" in n ? this.#e.bins = n.bins : delete this.#e.bins), t ? this.#s(t) : e.scheme === void 0 && !("rangeStep" in e) && this.#t && this.#s(this.#t), "gapPositions" in this.#e)) {
			let e = this.#e;
			N(e.gapPositions(), r) || e.gapPositions(r), e.gapWidth() !== (i ?? 0) && e.gapWidth(i);
		}
	}
	#b(e) {
		if (e !== "chromosomes") return Re(e);
		if (!up(this.#e)) throw Error("gapPositions: \"chromosomes\" requires a locus scale.");
		return Re(this.#e.genome().chromosomes.slice(1).map((e) => e.continuousStart));
	}
	normalizeDomain(e) {
		return this.#g ??= this.#e.copy(), this.#g.domain(Array.from(e)), this.#g.domain();
	}
	mirrorDomain(e, t) {
		this.#d(Array.from(e), t);
	}
	#x(e) {
		let { assembly: t, domainIndexer: n, gapPositions: r, gapWidth: i, ...a } = e;
		return a;
	}
	#S() {
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
function vp(e, t) {
	return e === t || !!e && !!t && N(e, t);
}
function yp(e, t) {
	return e === t || !!e && !!t && e.scale === t.scale && e.props === t.props && N(e.domain, t.domain) && N(e.gapDomain ?? [], t.gapDomain ?? []) && N(e.gapPositions, t.gapPositions) && e.gapWidth === t.gapWidth && vp(e.configuredRange, t.configuredRange) && vp(e.range, t.range);
}
//#endregion
//#region ../core/src/utils/mergeObjects.js
function bp(e, t, n) {
	if (n ||= [], e.some((e) => e === null)) {
		if (e.every((e) => e === null)) return null;
		throw console.warn(e), Error("Cannot merge objects with nulls!");
	}
	let r = {}, i = (e, t) => e === t || xp(e) && xp(t) || xp(e) && t === !0 || e === !0 && I(t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => e === t[n]), a = (e) => {
		for (let a in e) {
			let o = e[a];
			if (!n.includes(a) && o !== void 0) {
				if (r[a] !== void 0 && !i(r[a], o)) console.warn(`Conflicting property ${a} of ${t}: (${JSON.stringify(r[a])} and ${JSON.stringify(e[a])}). Using ${JSON.stringify(r[a])}.`);
				else {
					let t = r[a];
					if (xp(t)) xp(o) && (r[a] = bp([t, o], a));
					else if (xp(o)) {
						if (t !== !0 && t !== void 0) throw Error("Bug in merge! Target is: " + t);
						r[a] = bp([{}, o], a);
					} else r[a] = o, a === "expr" && en(e, r);
				}
			}
		}
	};
	for (let t of e) a(t);
	return r;
}
function xp(e) {
	return I(e) && !Array.isArray(e);
}
//#endregion
//#region ../core/src/config/scaleConfig.js
var Sp = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, Cp = /* @__PURE__ */ new Set(["rect"]), wp = /* @__PURE__ */ new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function Tp(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function Ep(e) {
	return wp.has(e);
}
function Dp(e, t) {
	if (Ep(t)) return jp(e)[t];
}
function Op(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function kp(e) {
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
function Ap(e, t) {
	let n = Op(t);
	return z(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function jp(e) {
	return z(e.map((e) => e.range));
}
function Mp(e, { channel: t, dataType: n, isExplicitDomain: r, markTypes: i, hasDomainMid: a }) {
	let o = Ap(e, n), s = jp(e), c = { ...kp(o) };
	if (r ? c.zero = !1 : c.zero === void 0 && o.zero !== void 0 && (c.zero = o.zero), We(t) && c.nice === void 0 && (c.nice = o.nice === void 0 ? !r : o.nice), Tt(t) && c.scheme === void 0) {
		if (n == "quantitative") {
			let e = a || o.domainMid !== void 0 ? s.diverging : i?.length && i.every((e) => Cp.has(e)) ? s.heatmap : s.ramp, t = Tp(e) ? e : o.quantitativeColorScheme;
			Tp(t) && (c.scheme = t);
		} else {
			let e = o[Sp[n] ?? Sp.quantitative];
			Tp(e) && (c.scheme = e);
		}
	} else at(t) && c.range === void 0 ? c.range = t == "shape" ? s.shape ?? [] : t == "direction" ? ["forward", "reverse"] : [] : t == "size" && c.range === void 0 ? c.range = s.size : t == "angle" && c.range === void 0 && (c.range = s.angle);
	return c;
}
//#endregion
//#region ../core/src/scales/scaleRules.js
function Np(e, t) {
	if (t == "index" || t == "locus") {
		if (_e(e)) return t;
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
		Tn,
		_n,
		vn
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function Pp(e, t, n, r) {
	if (n) {
		if (["index", "locus"].includes(n) && !_e(e)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${e}" resolves to scale type "${n}".`);
		if (["index", "locus"].includes(t) && n !== t || n === "locus" && n !== t) throw Error(`${r} "${n}" is incompatible with "${t}" data.`);
	}
}
function Fp(e, t) {
	We(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && A(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region ../core/src/scales/scalePropsResolver.js
function Ip({ channel: e, dataType: t, orderedMembers: n, viewLevelScaleProps: r, isExplicitDomain: i, configScopes: a, getOwnerScaleResolution: o }) {
	let s = n, c = s.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), l = bp(r ? [r.props] : s.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (l === null || l.type == "null") return { type: "null" };
	let u = {
		...Mp(a, {
			channel: e,
			dataType: t,
			isExplicitDomain: i,
			markTypes: c,
			hasDomainMid: l.domainMid !== void 0
		}),
		...l
	};
	if (u.type ||= Np(e, t), _e(e) && s.some((t) => ut(t.view.getEncoding()[Ft(e)])) && u.type == "band" && u.padding === void 0 && (u.paddingInner ??= .2, u.paddingOuter ??= .2), Pp(e, t, r ? u.type : void 0, `View-level scales.${e}.type`), typeof u.range == "string") {
		if (!Ep(u.range)) throw Error("Unknown named scale range \"" + u.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let t = Dp(a, u.range);
		if (t === void 0) throw Error("Named scale range \"" + u.range + "\" is not configured in config.range.");
		Tt(e) && (typeof t == "string" || typeof t == "object" && t && !Array.isArray(t)) ? (u.scheme = t, delete u.range) : u.range = t;
	}
	if (e == "y" && j(u.type) && u.reverse == null && (u.reverse = !0), fn(e) && j(u.type) && !u.range) {
		let t = e == "xOffset" ? "x" : "y", n = o?.(t);
		n?.getResolvedScaleType() == "band" && (n.getScale(), u.range = [0, { expr: `bandwidth("${t}") * ${t == "x" ? "width" : "height"}` }]);
	}
	if (u.range && u.scheme && delete u.scheme, u.domainTransition === void 0 && (u.domainTransition = !(s.some((e) => Md(e.channelDef.scale?.domain).length > 0) || Md(r?.props.domain).length > 0)), !("zoom" in u)) {
		let e = Ap(a, t);
		e.zoom === void 0 ? ["index", "locus"].includes(u.type) && (u.zoom = !0) : u.zoom = e.zoom;
	}
	return Fp(u, e), u;
}
//#endregion
//#region ../core/src/scales/zoomDomainUtils.js
function Lp(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type) {
		case "linear":
		case "index":
		case "locus": return dn(t, n, r);
		case "log": return Ue(t, n, r);
		case "pow":
		case "sqrt": return ge(t, n, r, e.exponent());
		case "symlog": return cn(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region ../core/src/scales/scaleInteractionController.js
var Rp = class {
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
		return Bp(e, t, this.#o, this.#s, this.#r, this.#i);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return A(e) && !j(e);
	}
	isZoomed() {
		return this.isZoomingSupported() && !N(this.#a(), this.#e().domain());
	}
	zoom(e, t, n, r) {
		if (!this.isZoomingSupported()) return !1;
		let i = this.#e(), a = i.domain(), o = "gapMapping" in i && i.gapMapping(r);
		if (o) {
			let r = o.navigate(e, t, i.props.reverse ? -n : n), a = this.getZoomExtent(), s = Dt(r.domain, a[0], a[1]), c = N(s, r.domain) ? r.ranks : void 0;
			return this.#t(s, 0, !1, c), !0;
		}
		let s = Vp(i, a, e, t, n), c = this.getZoomExtent();
		return s = Dt(s, c[0], c[1]), [0, 1].some((e) => s[e] != a[e]) ? (this.#t(s, 0), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		let { duration: n, renderImmediately: r } = zp(t);
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let i = Hp(this.#e().type, e, this.#o);
		if (n > 0 && r) throw Error("renderImmediately is not supported for animated zooms.");
		let a = this.#t(i, n, r);
		return r && this.#n(), a;
	}
	resetZoom() {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let e = this.#e(), t = e.domain(), n = this.#a();
		return this.#t(n, 0), !N(t, e.domain());
	}
	getZoomLevel() {
		if (this.isZoomable()) {
			let e = this.getZoomExtent(), t = e.every(Number.isFinite) ? e : this.#r() ?? this.#e().domain();
			return an(t) / an(this.#e().domain());
		}
		return 1;
	}
};
function zp(e) {
	if (e === void 0) return {
		duration: 0,
		renderImmediately: !1
	};
	if (ft(e)) return {
		duration: e ? 700 : 0,
		renderImmediately: !1
	};
	if (typeof e == "number") return {
		duration: e,
		renderImmediately: !1
	};
	let t = e.duration ?? 0;
	return {
		duration: ft(t) ? t ? 700 : 0 : t,
		renderImmediately: e.renderImmediately === !0
	};
}
function Bp(e, t, n, r, i, a) {
	if (Up(t)) {
		if (Xt(t.extent)) return Hp(e.props.type, t.extent, n);
		if (t.extent === "data") return a() ?? i() ?? e.domain();
		if (t.extent === "unbounded") {
			if (e.props.type === "locus") throw Error("Zoom extent \"unbounded\" is not supported for locus scales.");
			return [-Infinity, Infinity];
		}
	}
	return t && e.props.type == "locus" ? r() : i() ?? e.domain();
}
function Vp(e, t, n, r, i) {
	let a = t;
	switch (e.props.reverse && (i = -i), e.type) {
		case "linear":
			a = Lt(a, i || 0);
			break;
		case "index":
		case "locus": {
			let a = e, [o, s] = a.range(), c = (r - o) / (s - o), l = an(t), u = Math.max(1, l * n), d = 2 * a.paddingOuter() - a.paddingInner(), f = Math.max(1, l + d), p = Math.max(1, u + d), m = a.align(), h = t[0] + (c - m) * (f - p) + m * (l - u) - (i || 0) * u;
			return [h, h + u];
		}
		case "log":
			a = wt(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = xt(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	let o = e.invert(r);
	return Lp(e, a, o, n);
}
function Hp(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && Rf(t) && !zf(t) ? r : Cn(e, r);
}
function Up(e) {
	return I(e);
}
//#endregion
//#region ../core/src/scales/resolutionMemberOrder.js
function Wp(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function Gp(e) {
	return Array.from(e).sort((e, t) => Wp(e).localeCompare(Wp(t)));
}
//#endregion
//#region ../core/src/scales/resolutionOwnerPrecedence.js
function Kp(e, t) {
	return e === t || e.getDataAncestors().includes(t) ? "incoming" : t.getDataAncestors().includes(e) ? "current" : "conflict";
}
ce("index", op, ["continuous"]), ce("locus", lp, ["continuous"]), ce("null", bn, []);
var qp = class {
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
		range: /* @__PURE__ */ new Set()
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
		return this.#v ??= new Wn(() => this.#w.paramRuntime);
	}
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#m = t, this.isExplicitlyOwned() && t.registerDisposer(() => this.dispose()), this.#d = new _p({
			getRuntime: () => this.#S,
			createExpression: (e) => this.#E(e),
			onRangeChange: () => {
				this.#P("range"), this.#j.animator.requestRender();
			},
			onDomainChange: (e) => {
				this.#ae({
					type: "set",
					domain: e
				});
			},
			getGenomeStore: () => this.#j.genomeStore,
			getAxisLength: () => this.getAxisLength()
		}), this.#f = new Rp({
			getScale: () => this.#d.scale ?? this.getScale(),
			navigate: (e, t, n = !1, r) => this.#ae({
				type: "navigate",
				domain: e,
				duration: t,
				gapDomain: r
			}, !n),
			renderImmediately: () => this.#i.renderImmediately(),
			getInitialDomainSnapshot: () => this.#s.initialReference,
			getDataZoomExtent: () => this.#s.dataExtent,
			getResetDomain: () => this.#s.resetDomain,
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#M()
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
			for (let t of this.#e) if (!Bn(t.view)) {
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
			throw n ? this.#k(n[1], e) : e;
		}
	}
	#D(e) {
		return this === e || Array.from(this.#o?.zoomLevelResolutions ?? []).some((t) => t.#D(e));
	}
	#O(e, t) {
		try {
			return yd(this.#T, e, t);
		} catch (t) {
			throw !(t instanceof Error) || t.message !== `Selection domain parameter "${e}" was not found.` ? t : this.#k(e, t);
		}
	}
	#k(e, t) {
		let n = this.#T === this.#w && (this.#e.size > 1 || Array.from(this.#e).some((e) => e.view !== this.#w));
		return Error(`Parameter "${e}" is not visible from the ${n ? "shared " : ""}${this.channel} scale resolution. Move the parameter to the resolution-owning view and use push: "outer" if a child must update it.`, { cause: t });
	}
	#A(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			if (!e.isConfiguredVisible()) continue;
			let r = n.channelDef?.scale?.domain;
			(e.isDataInitialized() || r !== void 0 && !xf(r)) && t.add(n);
		}
		return t;
	}
	get #j() {
		return this.#w.context;
	}
	get zoomExtent() {
		return (this.#d.scale && A(this.#d.scale.type) && this.#f.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#M(e) {
		return hp(this.#N(e));
	}
	#N(e) {
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
	#P(e) {
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
	#F() {
		let e = Wf(this.#A(), this.#G(), (e, t) => this.#O(e, t));
		return Qf(this.#e, e), e;
	}
	#I() {
		return Sf(this.#e, this.#G());
	}
	#L() {
		return !(this.#o?.ignoreSelectionInitial ?? this.#p);
	}
	#R(e) {
		return Uf(this.#A(), this.#G(), (e) => this.#E(e), (e, t) => this.#O(e, t), this.fromComplexInterval.bind(this), this.#L()).domain ?? np(this.type, (e) => this.#M(e), void 0, e);
	}
	#z() {
		let e = this.#h?.props.domain;
		if (e !== void 0 && !xf(e)) return !0;
		for (let e of this.#e) {
			let t = e.channelDef.scale?.domain;
			if (e.contributesToDomain && t !== void 0 && !xf(t)) return !0;
		}
		return !1;
	}
	#B(e) {
		let t = Jp(e), { channel: n, channelDef: r } = t;
		this.#J(t);
		let i = r.type == null && this.type;
		if (n != "sample" && !r.type && !ln(n) && !i) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(r)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let a = n == "sample" ? "nominal" : r.type, o = r?.scale?.name, s = r.scale?.type ?? (a === "index" || a === "locus" ? a : void 0);
		if (Pp(this.channel, a, s, `encoding.${n}.scale.type`), o) {
			if (this.name !== void 0 && o != this.name) throw Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);
			this.name = o;
		}
		if (!i) {
			if (!this.type || this.#e.size === 0) this.type = a;
			else if (a !== this.type && !ln(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${a}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#r.add(t), t;
	}
	#V() {
		this.#t || (this.#Q(), this.#Z(), this.#d.scale && (this.#e.size > 0 || this.isExplicitlyOwned()) && this.reconfigure());
	}
	#H() {
		this.#_ || this.#V();
	}
	#U() {
		this.#Q(), this.#Z();
		let e = this.#X().range;
		if (this.#d.scale && (this.#R(), Array.isArray(e))) for (let t of e) R(t) && this.#E(t);
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
			for (let e of n) e.#U();
			r = !0;
			for (let e of n) e.#V();
			return e;
		} catch (e) {
			for (let e of i) {
				let t = e.resolution;
				t.#e = e.members, t.#r = e.dataDomainMembers, t.type = e.type, t.name = e.name, t.#_ = !1, t.#Q(), t.#Z();
			}
			if (r) try {
				for (let e of n) e.#V();
			} catch (t) {
				e && typeof e == "object" && (e.rollbackError = t);
			}
			throw e;
		}
	}
	registerMember(e) {
		let t = this.#B(e);
		return this.#H(), () => {
			let e = this.#e.delete(t);
			return e && (this.#r.delete(t), this.#H()), e && this.#e.size === 0 && !this.isExplicitlyOwned();
		};
	}
	attachViewLevelScaleProps(e, t) {
		if (this.#h && this.#h.view !== e) {
			let t = Kp(this.#h.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level scale declarations target the same ${this.channel} scale resolution.`);
		}
		for (let e of this.#e) this.#Y(e);
		let n = this.#h?.props;
		(t.name || n?.name) && (this.name = t.name), this.#h = {
			view: e,
			props: t
		}, this.#Z(), this.#W(Yp(n, t) ? "configuration" : "membership");
	}
	clearViewLevelScaleProps(e) {
		if (this.#h?.view === e) {
			let e = this.#h.props;
			this.#h = void 0, e.name && (this.name = void 0), this.#Z(), this.#W(Yp(e, void 0) ? "configuration" : "membership");
		}
	}
	#W(e) {
		this.#d.scale && this.#S.runInTransaction(() => {
			this.#d.resetScale(), this.initializeScale(), this.#ie(e, !0), this.#S.flushNow({ afterTransaction: !0 });
		});
	}
	getViewLevelScaleProps() {
		return this.#h;
	}
	#G() {
		let e = this.#h;
		if (e) return {
			channel: this.channel,
			type: this.type,
			domain: e.props.domain
		};
	}
	#K(e) {
		return wf(e, this, this.channel, (e) => this.#q(e, /* @__PURE__ */ new Set()), this.#I());
	}
	#q(e, t) {
		if (e === this) return !0;
		if (t.has(e) || !e.#I()) return !1;
		t.add(e);
		for (let n of e.#r) for (let r of Se) {
			let i = n.view.getScaleResolution(r);
			if (i && i !== e && this.#q(i, t)) return !0;
		}
		return !1;
	}
	#J(e) {
		this.#h && this.#Y(e);
	}
	#Y(e) {
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
			this.#n.clear(), this.#o?.dispose(), this.#c.clear(), this.#u.domain.clear(), this.#u.range.clear(), this.#i?.dispose(), this.#d.dispose(), this.#v?.dispose();
		}
	}
	bindDomainInputs() {
		let e = this.#o?.lastVisible;
		this.#i?.cancelSourceUpdates(), this.#o &&= (this.#p = this.#o.ignoreSelectionInitial, this.#o.dispose(), void 0);
		let t = this.#d.scale;
		if (!t || t.type === "null" || !this.#e.size && !this.isExplicitlyOwned()) return;
		let n = new Set(this.#e.values().filter((e) => e.view.isConfiguredVisible())), r = new Set(this.#r.values().filter((e) => e.view.isConfiguredVisible())), i = this.#X(), a = this.#F(), o = this.#I() !== void 0, s = ip({
			owner: this.#i,
			manager: this.#d,
			props: i,
			explicit: this.#z(),
			type: this.type,
			members: n,
			dataMembers: r,
			viewLevelDomain: this.#G(),
			createExpression: (e) => this.#E(e),
			resolveSelectionBinding: (e, t) => this.#O(e, t),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getLocusExtent: (e) => this.#M(e),
			link: a,
			viewport: o,
			viewportDependencies: o ? Tf(r, this) : /* @__PURE__ */ new Set(),
			getConstraints: (e) => this.#K(e),
			getZoomExtent: () => this.zoomExtent,
			ignoreSelectionInitial: this.#p,
			lastVisible: e
		}), c = Array.from(s.zoomLevelResolutions).find((e) => e.#D(this));
		if (c) throw s.dispose(), Error(`Scale zoom dependency cycle: ${this.channel} domain reads the zoom level of ${c.channel}.`);
		this.#o = s;
	}
	isDomainDefinedExplicitly() {
		return this.#z();
	}
	isDomainInitialized() {
		let e = this.#d.scale;
		if (!e) return !1;
		let t = e.domain();
		return A(e.type) ? t.length > 2 || t.length === 2 && t.some((e) => e !== 0) : t.length > 0;
	}
	#X() {
		return yr(this, "mergedScaleProps", () => {
			let e = Ip({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#$(),
				viewLevelScaleProps: this.#h,
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#w.getConfigScopes(),
				getOwnerScaleResolution: (e) => this.#w.getScaleResolution(e)
			});
			return this.#te(e), this.#ne(e), e;
		});
	}
	#Z() {
		vr(this, "mergedScaleProps"), this.#y && this.#y.set(this.#y.get() + 1);
	}
	#Q() {
		this.#l = void 0;
	}
	#$() {
		return this.#l ||= Gp(this.#e), this.#l;
	}
	getOrderedMembers() {
		return this.#$().slice();
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
			members: this.#$().map((e) => this.#ee(e)),
			activeMemberCount: this.#A().size,
			dataDomainMemberCount: this.#r.size,
			viewLevelScaleProps: this.#h ? {
				view: this.#h.view,
				props: structuredClone(this.#h.props)
			} : void 0
		};
	}
	#ee(e) {
		return {
			view: e.view,
			channel: e.channel,
			channelDef: structuredClone(e.channelDef),
			contributesToDomain: e.contributesToDomain,
			active: this.#A().has(e)
		};
	}
	#te(e) {
		let t = this.#F();
		if (!t || e === null || e.type === "null") return;
		let n = A(e.type) && !j(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	#ne(e) {
		if (this.#I() && e !== null && e.type !== "null") {
			if (!A(e.type) || j(e.type)) throw Error(`Viewport-derived domains require a continuous ${this.channel} scale.`);
			if ((this.channel === "x" || this.channel === "y") && e.zoom) throw Error(`Viewport-derived domains cannot target a zoomable ${this.channel} scale.`);
		}
	}
	getAssemblyRequirement() {
		if (this.type !== "locus") return {
			assembly: void 0,
			needsDefaultAssembly: !1
		};
		let e = this.#h ? [this.#h.props] : this.#$().map((e) => e.channelDef.scale).filter((e) => e !== void 0);
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
		let e = this.#X();
		if (e !== null && e.type !== "null") return e.type;
	}
	hasGroupingGaps() {
		let e = this.#X();
		return e !== null && tt(e);
	}
	#re() {
		let e = this.#X();
		if (e === null || e.type == "null") return { type: "null" };
		if (tt(e) && !["x", "y"].includes(this.channel)) throw Error("Grouping gaps require a positional index or locus scale.");
		this.#g += 1;
		let t;
		try {
			t = this.#R(e.type === "locus" ? e.assembly : void 0);
		} finally {
			--this.#g;
		}
		return this.#d.domainProps(e, t, this.#z());
	}
	reconfigure() {
		this.#S.runInTransaction(() => {
			this.#Z(), this.bindDomainInputs(), this.#ie("membership", !0);
		});
	}
	reconfigureDomain(e = "data") {
		this.#ie(e, !1);
	}
	#ie(e, t) {
		let n = this.#d.scale;
		if (!n || n.type === "null") return;
		let r = this.#X();
		t && this.#d.configureProperties(r), this.#o.request(e), this.#i.runtime.flushNow({ afterTransaction: !0 }), t && this.#d.scale === n && n.props === r && this.#d.configureMapping(r);
	}
	#ae(e, t = !0) {
		return this.#i.update(e, t);
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
		let e = this.#re(), t = this.#i;
		try {
			let t = this.#d.createScale(e, (e) => (this.#s ? this.#d.mirrorDomain(this.#s.visibleDomain, this.#s.gapDomain) : (this.#i = new gd({
				runtime: this.#w.paramRuntime,
				manager: this.#d,
				animator: this.#j.animator,
				domain: e,
				resetDomain: this.#d.normalizeDomain(this.#R()),
				renderImmediately: () => this.#j.renderImmediately(),
				notifyDomain: () => this.#P("domain"),
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
				extent: this.#M(),
				ready: !0
			} : this.#z() && !this.#F() ? {
				extent: e.resetDomain,
				ready: !0
			} : {
				extent: e.initialReference ?? [],
				ready: e.phase === "ready"
			};
		}, { equals: (e, t) => Fc(e, t) });
	}
	getDomain() {
		if (this.#g > 0) throw Error(`Scale dependency cycle: channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.#d.scale || this.initializeScale(), Array.from(this.#s.visibleDomain);
	}
	getDataDomain() {
		if (this.#o) return this.#o.readData();
		let e = this.#A(this.#r), t = (e) => rp(e).filter((e) => !e.channelDef.domainInert);
		return this.#I() ? Cf(e, () => this.type, t, (e) => this.#K(e)) : tp(e, () => this.type, t);
	}
	getComplexDomain() {
		return mp(this.#N(), gn(this.type, this.getDomain()));
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#F();
		if (!e) return;
		let t = this.#w.getLayoutAncestors().at(-1), n = t ? bd(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
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
		let e = this.#X();
		return e === null || e.type === "null" ? !1 : A(e.type) && !j(e.type) && !!e.zoom;
	}
	hasConfiguredZoomExtent() {
		let e = this.#X().zoom;
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
		return dp(this.#N(), e);
	}
	fromComplex(e) {
		return fp(this.#N(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? pp(this.#N(this.getAssemblyRequirement().assembly), e) : e;
	}
};
function Jp(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = On(e.view.getBaseUrl(), n.url);
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
function Yp(e, t) {
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
		return !Fc(i, a);
	});
}
//#endregion
//#region ../core/src/utils/coalesce.js
function Xp(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region ../core/src/scales/axisResolution.js
var Zp = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e, t, n) {
		this.channel = e, this.scaleResolution = t, this.hostView = n;
	}
	registerMember(e) {
		return this.#n(e), this.#e.add(e), vr(this, "axisProps"), () => {
			this.#e.delete(e), vr(this, "axisProps");
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
			members: Gp(this.#e).map((e) => ({
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
		return yr(this, "axisProps", () => {
			let e;
			if (this.#t) e = [this.#t.props];
			else {
				let t = Gp(this.#e);
				if (!t.length) return this.scaleResolution.isExplicitlyOwned() ? {} : null;
				e = t.map((e) => {
					let t = e.view.mark.encoding[e.channel];
					return "axis" in t && t.axis;
				});
			}
			return e.length > 0 && e.some((e) => e === null) ? null : bp(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		if (this.#t?.props.title !== void 0) return this.#t.props.title;
		let e = Gp(this.#e).map((e) => {
			let t = ct(e.view, e.channel);
			if (!Ke(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: Xp("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: Xp(mn(t) ? t.field : void 0, on(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (ln(t.member.channel) && !t.explicitTitle) {
				let n = nn(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), r = new Set(n.map((e) => Xp(e.explicitTitle, e.implicitTitle)).filter(vt));
		return r.size ? [...r].join(", ") : null;
	}
	attachViewLevelAxisProps(e, t) {
		if (this.#t && this.#t.view !== e) {
			let t = Kp(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level axis declarations target the same ${this.channel} axis resolution.`);
		}
		for (let e of Gp(this.#e)) {
			let t = e.view.mark.encoding[e.channel];
			if ("axis" in t && t.axis !== void 0) throw Error(`Cannot mix view-level axes.${this.channel} with encoding.${e.channel}.axis in the same axis resolution.`);
		}
		this.#t = {
			view: e,
			props: t
		}, vr(this, "axisProps");
	}
	clearViewLevelAxisProps(e) {
		this.#t?.view === e && (this.#t = void 0, vr(this, "axisProps"));
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
function Qp() {
	let e = [];
	return {
		appendConfig(t, n) {
			$p(e, t, n);
		},
		appendStyle(t, n) {
			em(e, t, n);
		},
		merge() {
			return z(e.map((e) => e.config));
		}
	};
}
function $p(e, t, n) {
	n && (em(e, t, Object.hasOwn(n, "style") ? n.style : void 0), e.push({
		kind: "config",
		config: n
	}));
}
function em(e, t, n) {
	if (n === void 0) return;
	if (n === null) {
		tm(e);
		return;
	}
	let r = Au(t, n);
	e.push({
		kind: "style",
		config: r
	});
}
function tm(e) {
	for (let t = e.length - 1; t >= 0; t--) e[t].kind == "style" && e.splice(t, 1);
}
//#endregion
//#region ../core/src/config/legendConfig.js
function nm(e, t) {
	let n = z(e.map((e) => e.legend?.layout)), r = n[t], i = [
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
function rm(e, t, n = {}) {
	let r = e[0], i = e.slice(1), a = Qp();
	im(a, e, r, n.track);
	for (let [t, r] of i.entries()) {
		let i = e.slice(0, t + 2);
		am(a, i, r, n.track), om(a, i, r.legend);
	}
	om(a, e, t);
	let o = a.merge();
	return delete o.layout, o;
}
function im(e, t, n, r) {
	let i = t.slice(0, 1);
	om(e, i, n?.legend), am(e, i, n, r);
}
function am(e, t, n, r) {
	r && om(e, t, n?.legendTrack);
}
function om(e, t, n) {
	e.appendConfig(t, n);
}
//#endregion
//#region ../core/src/scales/legendResolution.js
var sm = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"shape",
	"size"
]), cm = /* @__PURE__ */ new Set([
	"color",
	"fill",
	"stroke"
]), lm = class {
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
		for (let n of Gp(this.#e)) {
			let r = this.#n(n);
			r && !e.has(r.scaleResolution) && (e.add(r.scaleResolution), t.push(r));
		}
		return t;
	}
	#n(e) {
		let { channel: t, view: n } = e;
		if (_m(t, n)) return;
		let r = mm(t, n);
		if (!r || Ke(r)) return;
		let i = "legend" in r ? r.legend : void 0;
		if (!this.#t && i === null || "scale" in r && r.scale === null) return;
		let a = this.#t?.props ?? i, o = a === void 0 ? void 0 : {
			disable: !1,
			...a
		}, s = n.getScaleResolution(t);
		if (!s) return;
		let c = rm(n.getConfigScopes(), o, { track: fm(n) });
		if (c.disable === !0) return;
		let l = pm(t, r);
		if (!l) return;
		let u = "title" in r ? r.title : void 0, d = c.title === void 0 ? u === void 0 ? mn(r) ? r.field : void 0 : u : c.title, f = "format" in r ? r.format : void 0, p = l == "symbol" ? vm(t, n) : void 0, m = l == "symbol" ? dm(t, n) : void 0;
		return {
			view: n,
			channel: t,
			field: mn(r) ? r.field : void 0,
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
		for (let e of this.#e) if (e.view.isVisible() && !e.view.getLayoutAncestors().some(lr)) return !0;
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
			members: Gp(this.#e).map((e) => ({
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
			let t = Kp(this.#t.view, e);
			if (t === "current") return;
			if (t === "conflict") throw Error(`Multiple view-level legend declarations target the same ${this.channel} legend resolution.`);
		}
		let n = Array.from(this.#e).find((e) => um(e));
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
		if (this.#t && um(e)) throw Error(`Cannot mix view-level legends.${this.channel} with encoding.${e.channel}.legend in the same legend resolution.`);
	}
};
function um(e) {
	let t = mm(e.channel, e.view);
	return !!(t && "legend" in t && t.legend !== void 0);
}
function dm(e, t) {
	let n = t.getMarkType();
	return e == "size" && (n == "rule" || n == "link") ? "stroke" : "point";
}
function fm(e) {
	let t = mm("x", e), n = e.getScaleResolution("x")?.getResolvedScaleType();
	return t?.type == "index" || t?.type == "locus" || n == "index" || n == "locus";
}
function pm(e, t) {
	if ([
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"size"
	].includes(e) && t.type == "quantitative" || (t.type === "nominal" || t.type === "ordinal") && sm.has(e)) return "symbol";
	if (t.type === "quantitative" && cm.has(e)) return "gradient";
}
function mm(e, t) {
	return Ot(t.getEncoding()[e]);
}
function hm(e, t) {
	let n = mm(e, t);
	return !!(n && "legend" in n && n.legend === null);
}
function gm(e, t, n) {
	let r = mm(e, n), i = mm(t, n), a = n.getScaleResolution(e), o = n.getScaleResolution(t);
	return mn(r) && mn(i) && r.field === i.field && a && o && N(a.getDomain(), o.getDomain());
}
function _m(e, t) {
	if (e !== "shape") return !1;
	let n = mm(e, t);
	if (!mn(n)) return !1;
	for (let n of [
		"color",
		"fill",
		"stroke"
	]) if (gm(n, e, t) && !hm(n, t)) return !0;
	return !1;
}
function vm(e, t) {
	if (!Tt(e)) return {};
	let n = mm(e, t), r = mm("shape", t), i = t.getScaleResolution("shape");
	return mn(n) && mn(r) && i && gm(e, "shape", t) && !hm("shape", t) ? { shape: i.name ?? "shape" } : {};
}
//#endregion
//#region ../core/src/view/resolutionPlanner.js
var ym = (e, t, n) => {
	let r = e;
	for (; !r.isResolutionBoundary(n) && (bm(r, t, n) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes(bm(r.dataParent, t, n))) && bm(r, t, n) != "excluded" && !(t === "scale" && r.resolutions.scale[n]?.isExplicitlyOwned());) r = r.dataParent;
	return r;
};
function bm(e, t, n) {
	let r = e.getConfiguredOrDefaultResolution(n, t);
	switch (r) {
		case "independent":
		case "shared":
		case "excluded":
		case "forced": return r;
		case "collected":
			if (t == "legend") return bm(e, "scale", n);
			throw Error(`Resolution behavior "collected" is only supported for legends, not ${t}s.`);
		default: throw Error(`Unknown ${t} resolution behavior: ${r}`);
	}
}
var xm = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let e = new qp(n, t);
		t.resolutions.scale[n] = e;
	}
	return t.resolutions.scale[n];
}, Sm = (e, t, n, r) => {
	let i = Ot(r);
	if (!i) return;
	let a = nn(i.resolutionChannel ?? n);
	if (Wt(a) && (t != "axis" || We(a)) && (t != "legend" || !We(a) && !fn(a))) return {
		view: ym(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, Cm = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) r && !Array.isArray(r) && t(n, r);
}, wm = (e) => {
	let t = [];
	for (let [n, r] of Object.entries(e.getEncoding())) {
		if (!r || Array.isArray(r)) continue;
		let i = Sm(e, "legend", n, r);
		i && !We(i.channel) && t.push(i);
	}
	return t;
}, Tm = (e) => {
	let t = /* @__PURE__ */ new Map();
	return Cm(e, (n, r) => {
		let i = Sm(e, "scale", n, r);
		if (!i) return;
		let a = xm(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
};
function Em(e, t, n) {
	let r = e.resolutions.axis[t];
	if (e.getScaleResolution(t) !== n) throw Error(`Shared axes must have a shared scale! Declare or share the ${t} scale at the axis host or an ancestor.`);
	if (!r) {
		r = new Zp(t, n, e), e.resolutions.axis[t] = r;
		let i = n.registerDisposer(() => {
			delete e.resolutions.axis[t];
		});
		e.registerDisposer(() => {
			i(), delete e.resolutions.axis[t];
		});
	}
	return r;
}
var Dm = (e) => {
	Cm(e, (t, n) => {
		let r = Sm(e, "axis", t, n);
		if (!r || !We(t) || !_e(r.targetChannel)) return;
		let i = Em(r.view, r.targetChannel, e.getScaleResolution(r.targetChannel));
		e.registerDisposer(i.registerMember({
			view: e,
			channel: t,
			channelDef: r.channelDef
		}));
	});
}, Om = (e, t) => {
	for (let { view: n, channel: r, targetChannel: i } of t) {
		if (We(r)) continue;
		let t = i;
		n.resolutions.legend[t] || (n.resolutions.legend[t] = new lm(t));
		let a = n.resolutions.legend[t], o = a.registerMember({
			view: e,
			channel: r
		});
		e.registerDisposer(() => {
			o() && n.resolutions.legend[t] === a && delete n.resolutions.legend[t];
		});
	}
}, km = (e, t) => {
	qp.registerInBatch(t.keys(), () => {
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
}, Am = (e, t) => {
	t ? t !== "scale" && Bn(e) || (t == "axis" ? Dm(e) : t == "legend" ? Om(e, wm(e)) : km(e, Tm(e))) : (Am(e, "scale"), Am(e, "axis"));
}, jm = {
	point: Ku,
	rect: Pu,
	arrow: Iu,
	rule: Yu,
	tick: Yu,
	link: td,
	text: ad
}, Y = class extends ur {
	#e = null;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		let o = jm[this.getMarkType()];
		if (o) this.mark = new o(this);
		else throw Error(`No such mark: ${this.getMarkType()}`);
		this.resolve(), this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
			for (let e of Se) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
		})), this.needsAxes = {
			x: !0,
			y: !0
		}, this.#t();
	}
	#t() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t)) continue;
			let n = typeof t.select == "object" ? t.select : void 0, r = He(t.select), i = r.on, a = r.clear;
			if (Pe(r)) {
				let t = (t) => {
					this.paramRuntime.setValue(e, t);
				}, o = () => {
					let e = this.context.getCurrentHover();
					return e?.mark?.unitView === this ? e.datum : null;
				}, s = Ee(i, qe(this.paramRuntime, n, "on")), c = Ee(a, qe(this.paramRuntime, n, "clear")), l = () => {
					let e = r.toggle ? Ge() : be(null);
					t(e);
				}, u = (n) => {
					if (!s(n.proxiedMouseEvent)) return;
					let i = o(), a;
					if (r.toggle) {
						if (n.mouseEvent.shiftKey) {
							if (i) {
								let t = this.paramRuntime.findValue(e);
								a = me(t, { toggle: [i] });
							}
						} else a = Ge(i ? [i] : null);
					} else i !== this.paramRuntime.getValue(e).datum && (a = be(i));
					a !== void 0 && t(a);
				}, d = ["mouseover", "pointerover"].includes(i.type);
				this.addInteractionListener(d ? "mousemove" : i.type, u), (i.type === "wheel" || a?.type === "wheel") && this.addInteractionListener("wheelclaimprobe", (e) => {
					e.wheelIntent !== "scroll" && (i.type === "wheel" && s(e.proxiedMouseEvent) || a?.type === "wheel" && c(e.proxiedMouseEvent)) && e.claimWheel(this, { smooth: !1 });
				}), d && this.addInteractionListener("mouseleave", (e) => {
					e.pointedViews.has(this) || l();
				});
				let f = d && a?.type === "mouseleave";
				a && !f && this.addInteractionListener(a.type, (e) => {
					c(e.proxiedMouseEvent) && l();
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
		e ? Am(this, e) : (this.resolve("scale"), this.resolve("axis"), this.resolve("legend"));
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? pt(t[e]) : void 0;
	}
	getSearchAccessors() {
		if (!this.#e) {
			let e = kr(this.getEncoding()) ?? [];
			this.#e = e.map((e) => et(e));
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
		return Se.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
}, Mm = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", Nm = class {
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
			if (!(t instanceof Y) || !t.isVisible()) return;
			let n = t.flowHandle?.collector;
			if (!n) return;
			let r;
			for (let e of ru(n)) {
				if (!(e instanceof q)) continue;
				let t = this.#t.getSource(e);
				t && (r === void 0 || t.status === "error" || r.status !== "error" && t.status === "loading") && (r = {
					status: t.status,
					detail: [t.message, al(t.errorLocation)].filter(Boolean).join("\n")
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
		}, 3e3), Bi(t, this.#e);
	}
	#o(e, t) {
		return U`<div style=${Du(t)}>
            <div class=${e.status}>
                ${e.status === "error" ? U`<span
                              >Loading
                              failed${e.detail ? U`: ${e.detail}` : W}</span
                          >` : U`<img src=${Mm} alt="" /><span
                                  >Loading...</span
                              >`}
            </div>
        </div>`;
	}
}, Pm = class {
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
				viewId: Ar(r).getId(n),
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
function Fm(e) {
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
var Im = class {
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
}, Lm = class {
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
function Rm(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!bt(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let a = r.name, o = (t) => {
			e.setValue(a, t);
		}, s = e.getTargetValue?.(a) ?? e.getValue(a), c = i.name ?? a, l = i.debounce ? cl(o, i.debounce, !1) : o, u = `${t}-param-${a}`;
		if (i.input == "range") n.push(U`<label for=${u}>${c}</label>
                    <div>
                        <input
                            id=${u}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? we(i.min, i.max, 100)}
                            .value=${s}
                            @input=${(e) => {
			l(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${s}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(U`<label for=${u}>${c}</label>
                    <input
                        id=${u}
                        type="checkbox"
                        ?checked=${s}
                        @input=${(e) => l(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(U`<span class="label">${c}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => U`<label>
                                    <input
                                        type="radio"
                                        name=${a}
                                        value=${e}
                                        .checked=${s == e}
                                        @input=${(e) => l(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(U`<label for=${u}>${c}</label>
                    <select
                        id=${u}
                        @input=${(e) => l(e.target.value)}
                    >
                        ${i.options.map((e, t) => U`<option
                                    value=${e}
                                    ?selected=${s == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(U`<label for=${u}>${c}</label>
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
		i.description && n.push(U`<div class="description">${i.description}</div>`);
	}
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/inputBindingManager.js
var zm = class {
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
			t.push(...Rm(n));
		});
		let n = this.#t.inputBindingContainer;
		if (n && n != "none" && t.length) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && Bi(U`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
}, Bm = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function Vm(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new Bm("network", String(e));
	}
	if (!n.ok) throw new Bm("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new Bm("json", String(e));
	}
}
//#endregion
//#region ../core/src/view/viewUtils.js
function Hm(e) {
	return I(e) && "field" in e && vt(e.field);
}
function Um(e) {
	return I(e) && ("row" in e && I(e.row) || "column" in e && I(e.column));
}
function Wm(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function Gm(e) {
	for (let t of Se) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function Km(e) {
	let t = [];
	return e.visit((e) => {
		if (e instanceof Y) {
			let n = e.getEncoding(), r = (n, i) => {
				if (i && typeof i == "object" && !Array.isArray(i) && (mn(i) && "type" in i ? t.push({
					view: e,
					channel: n,
					field: i.field,
					type: i.type
				}) : mn(i) && n === "semanticScore" && t.push({
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
			return Kn;
		}
	}), t;
}
async function qm(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = Vn(t, r.url), a;
	try {
		a = await Vm(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = Vn(kn(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function Jm(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region ../core/src/utils/cloner.js
function Ym(e, t = {}) {
	return Zm(Qm(e, t.copyFields ? new Set(t.copyFields) : void 0));
}
function Xm(e = {}) {
	let t = e.copyFields ? new Set(e.copyFields) : void 0, n, r = ((e) => (n ||= Zm(Qm(e, t)), n(e)));
	return r.reset = () => {
		n = void 0;
	}, r;
}
function Zm(e) {
	let t = Function("source", "return { " + e.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return t.properties = e, t;
}
function Qm(e, t) {
	return $m(e).filter((e) => typeof e == "string" && (!t || t.has(e)));
}
function $m(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region ../core/src/data/transforms/lookup.js
var eh = class extends M {
	#e;
	get dataDependencies() {
		return this.#e ? [this.#e] : [];
	}
	get behavior() {
		return 1;
	}
	constructor(e, t, n = {}, r) {
		super(e, r), this.#e = t, this.params = e;
		let i = th(e);
		if (!i && !t) throw Error("Lookup transform requires a foreign collector.");
		let a = P(e.key), o = P(e.fields ?? a);
		if (o.length === 0) throw Error("The \"fields\" property must not be empty.");
		if (a.length !== o.length) throw Error("The \"fields\" and \"key\" properties must have the same number of fields.");
		let s = e.values, c = e.as;
		if (!s && c) throw Error("The \"as\" property requires explicit \"values\".");
		if (s && c && c.length !== s.length) throw Error("The \"as\" property must contain one output field for every lookup value.");
		if (s?.length === 0) throw Error("The \"values\" property must not be empty.");
		let l = this.createFieldAccessors(e, "key"), u = this.createFieldAccessors(e, e.fields == null ? "key" : "fields"), d = !s, f = s ? this.createFieldAccessors(e, "values") : [], p = c ?? s ?? [], m = e.default ?? null, h = !1, g = -1, _ = [], v = [], y, b = !1, x, S = null, C, w = u[0], T = n.isForeignDataReady ?? (() => !0);
		n.isForeignDataReady && (this.areDataDependenciesAvailable = () => t.completed && !t.disposed && T());
		let E = n.requestForeignData ?? (() => void 0), D = n.prepareBatch ?? (() => void 0), O = !!n.acceptsDatum, ee = n.acceptsDatum ?? (() => !0), k = a.length === 1 ? (e) => S.get(w(e)) : (e) => {
			let t = S;
			for (let n = 0; n < u.length - 1; n++) {
				let r = t.get(u[n](e));
				if (!r) return;
				t = r;
			}
			return t.get(u.at(-1)(e));
		}, te = (n) => {
			if (D(), t && g !== t.dataRevision && (S = null), S) {
				this.consumeDataDependencies();
				return;
			}
			if (!n && !t.completed) throw Error("Lookup table must be loaded before primary data.");
			let r = n ?? t.getData();
			if (S = rh(r, l, e.key), d) {
				let t = ih(r[Symbol.iterator]().next().value, a);
				p = t, f = t.map((t) => this.createFieldAccessor(e, "values", { defaultValue: t }));
			}
			C = ah(p, f, m), t && (g = t.dataRevision), this.consumeDataDependencies();
		}, ne = (e) => {
			let t = x(e), n = k(e);
			C(t, n), this._propagate(t);
		}, re = O ? (e) => {
			ee(e) && ne(e);
		} : ne, ie = (e) => {
			if (!T() && (E(), !T())) h = !0, this.consumeDataDependencies(), this.handle = nh;
			else {
				if (te(), !(i && d)) {
					for (let t of p) if (Object.hasOwn(e, t)) throw Error(`Lookup output field "${t}" already exists in primary data.`);
				}
				x = Ym(e), this.handle = re, re(e);
			}
		}, ae = () => {
			te(_), this.handle = ie, x = void 0, b && A(y);
			let e = rf(nf(_, v), (e) => {
				x = void 0, this.handle = ie, A(e);
			}, (e) => this.handle(e));
			for (let t of _) e(t);
			_ = [], v = [], y = void 0, b = !1, S = null, d && (f = [], p = []), this.handle = oe;
		};
		function oe(e) {
			_.push(e);
		}
		let se = this.reset.bind(this);
		this.reset = () => {
			se(), h = !1, x = void 0, i ? (_ = [], v = [], y = void 0, b = !1, S = null, d && (f = [], p = []), this.handle = oe) : this.handle = ie;
		};
		let A = this.beginBatch.bind(this);
		this.beginBatch = (e) => {
			if (i) {
				if (e.type == "file" && y?.type == "facet") {
					v.push({
						index: _.length,
						batch: e
					});
					return;
				}
				(b || _.length > 0) && ae(), y = e, b = !0;
			} else T() || E(), T() ? (te(), this.handle = ie) : (h = !0, this.consumeDataDependencies(), this.handle = nh), A(e);
		};
		let ce = this.complete.bind(this);
		this.complete = () => {
			i && (b || _.length > 0) && ae(), t && !h && !T() && E(), ce();
		}, this.handle = i ? oe : ie;
	}
};
function th(e) {
	return e.type == "lookup" && "source" in e.from && e.from.source == "input";
}
function nh(e) {}
function rh(e, t, n) {
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
function ih(e, t) {
	if (!e) return [];
	let n = Object.keys(e);
	if (t.filter((e) => !n.includes(e)).length) throw Error("Omitting \"values\" requires top-level lookup key fields.");
	return n.filter((e) => !t.includes(e));
}
function ah(e, t, n) {
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
function oh(e) {
	return e.type == "lookup" && !th(e) || e.type == "coordinateLookup" || e.type == "cross";
}
function sh(e) {
	if (e.type == "lookup") {
		let t = e;
		if (th(t)) return;
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
var ch = {
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
}, lh = /([0-9]+)([MIDNSHP=X])/g;
function uh(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(e)}`);
	if (e === "*") return [];
	let t = [], n = 0, r;
	for (lh.lastIndex = 0; (r = lh.exec(e)) !== null;) {
		if (r.index !== n) throw Error(`Malformed CIGAR string: ${e}`);
		let i = Number(r[1]);
		if (i <= 0) throw Error(`Malformed CIGAR string: ${e}`);
		t.push({
			op: r[2],
			length: i
		}), n = lh.lastIndex;
	}
	if (n !== e.length) throw Error(`Malformed CIGAR string: ${e}`);
	return t;
}
function* dh(e, t) {
	if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
	let n = t, r = 0;
	for (let { op: t, length: i } of uh(e)) {
		let e = ch[t], a = n, o = r;
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
var fh = /[0-9]/, ph = /[A-Z]/;
function mh(e) {
	if (typeof e != "string" || e.length == 0) throw Error(`Malformed MD tag: ${JSON.stringify(e)}`);
	let t = [], n = 0, r = 0;
	for (; n < e.length;) {
		if (!fh.test(e[n])) throw Error(`Malformed MD tag: ${e}`);
		let i = n;
		for (; n < e.length && fh.test(e[n]);) n++;
		if (r += Number(e.slice(i, n)), n < e.length) {
			if (e[n] == "^") {
				n++;
				let i = n;
				for (; n < e.length && ph.test(e[n]);) n++;
				if (n == i) throw Error(`Malformed MD tag: ${e}`);
				let a = e.slice(i, n);
				t.push({
					type: "deletion",
					refOffset: r,
					refBases: a
				}), r += a.length;
			} else if (ph.test(e[n])) t.push({
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
var hh = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "start", { defaultValue: "start" }), r = this.createFieldAccessor(e, "cigar", { defaultValue: "cigar" }), i = this.createFieldAccessor(e, "sequence", { defaultValue: "seq" }), a = this.createFieldAccessor(e, "quality", { defaultValue: "qual" }), o = this.createFieldAccessor(e, "md", { defaultValue: "md" }), s = Xm({ copyFields: e.copyFields });
		this.handle = (e) => {
			let t = r(e);
			if (typeof t != "string" || t.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(t)}`);
			if (t == "*") return;
			let c = n(e);
			if (!Number.isFinite(c)) throw Error(`Invalid CIGAR start coordinate: ${c}`);
			let l = o(e);
			if (typeof l != "string" || l.length == 0) throw Error("alignmentMismatches requires the MD tag");
			let u = new Map(mh(l).filter((e) => e.type == "mismatch").map((e) => [e.refOffset, e.refBase])), d = gh(a, e);
			for (let n of dh(t, c)) if (n.cigarOp == "M") for (let [t, r] of u) {
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
function gh(e, t) {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Error && e.message.startsWith("Invalid field")) return;
		throw e;
	}
}
//#endregion
//#region ../core/src/data/transforms/coordinateLookup.js
var _h = class extends eh {
	constructor(e, t, n, r) {
		let i = e.channel ?? "x";
		if (!(n instanceof Fs)) throw Error("Coordinate lookup requires a single-axis lazy side data source.");
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
		}, r), a = vh(e, n, this);
	}
};
function vh(e, t, n) {
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
var yh = class extends M {
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
		this.#a ||= (this.#o(), this.#t.length && (this.#r = bh($m(e), this.#n)), this.consumeDataDependencies(), !0);
		for (let t of this.#t) this._propagate(this.#r(e, t));
	}
	#o() {
		if (this.#i !== this.#e.dataRevision && (this.#t = void 0), this.#t) return;
		if (!this.#e.completed) throw Error("Cross foreign data must be loaded before primary data.");
		this.#t = Array.from(this.#e.getData()), this.#n = this.#t.length === 0 ? [] : $m(this.#t[0]);
		let e = new Set(this.#n);
		for (let t = 1; t < this.#t.length; t++) {
			let n = $m(this.#t[t]);
			if (n.length !== e.size || n.some((t) => !e.has(t))) throw Error("Cross foreign data must have homogeneous fields.");
		}
		this.#i = this.#e.dataRevision;
	}
};
function bh(e, t) {
	let n = new Set(e), r = t.filter((e) => n.has(e));
	if (r.length > 0) throw Error(`Cross fields must be unique. Duplicate fields: ${JSON.stringify(r)}.`);
	let i = [...e.map((e) => xh("primary", e)), ...t.map((e) => xh("foreign", e))];
	return Function("primary", "foreign", `return { ${i.join(",\n")} };`);
}
function xh(e, t) {
	let n = JSON.stringify(t);
	return `${n}: ${e}[${n}]`;
}
//#endregion
//#region ../core/src/data/transforms/coverage.js
var Sh = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.startAccessor = this.createFieldAccessor(e, "start"), this.endAccessor = this.createFieldAccessor(e, "end"), this.chromAccessor = e.chrom ? this.createFieldAccessor(e, "chrom") : (e) => void 0, this.weightAccessor = e.weight ? this.createFieldAccessor(e, "weight") : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new Gn();
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
function Ch(e, t, n, r = []) {
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
var wh = class extends M {
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
		} else n = R(e.length) ? () => this.length : this.createFieldAccessor(e, "length");
		this.lengthAccessor = n, this.extent = R(e.extent) ? void 0 : e.extent, this.#e = e.extent ? [0, 0] : void 0, this.positionFactor = R(e.positionFactor) ? 1 : e.positionFactor ?? 1, this.#t = !(R(e.length) || R(e.positionFactor) || R(e.extent));
		let r = () => {
			this.#t && this.#s() && this.completed && this.repropagate();
		};
		this.#n = this.watchExprRef(R(e.length) ? e.length : this.length, r), this.#r = this.watchExprRef(e.positionFactor ?? 1, r), this.#i = this.watchExprRef(e.extent, r), this.#o(this.length, this.positionFactor, this.extent);
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
		let r = Ch(t, n, this.#e);
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
}, Th = [
	"sourceId",
	"targetId",
	"sourceHeight",
	"targetHeight",
	"sourceIndex",
	"targetIndex",
	"sourceOffset",
	"targetOffset"
], Eh = class extends M {
	#e = [];
	#t = [];
	get behavior() {
		return 1;
	}
	get createsNewIdentity() {
		return !0;
	}
	constructor(e, t) {
		if (super(e, t), this.keyAccessor = this.createFieldAccessor(e, "key"), this.parentAccessor = this.createFieldAccessor(e, "parentKey"), this.heightAccessor = this.createFieldAccessor(e, "height"), this.leafIndexAccessor = this.createFieldAccessor(e, "leafIndex"), this.as = e.as ?? Th, this.as.length !== 8 || new Set(this.as).size !== 8 || this.as.some((e) => typeof e != "string" || !e || e === "__uniqueId")) throw Error("Dendrogram as must contain eight distinct, nonempty field names, excluding " + Kt + ".");
	}
	reset() {
		super.reset(), this.#e = [], this.#t = [];
	}
	handle(e) {
		this.#e.push(e);
	}
	beginBatch(e) {
		e.type === "file" ? (this.inFacet || this.#n(), this.#t.push({
			index: this.#e.length,
			batch: e
		})) : (this.#n(), super.beginBatch(e));
	}
	complete() {
		this.#n(), super.complete();
	}
	#n() {
		let e = this.#e, t = nf(e, this.#t), n = this.#r(e), r = rf((e) => t(e.datum), (e) => super.beginBatch(e), (e) => {
			let t = e, n = t.parent, r = { ...t.datum };
			delete r[Kt], r[this.as[0]] = n.key, r[this.as[1]] = t.key, r[this.as[2]] = n.height, r[this.as[3]] = t.height, r[this.as[4]] = Math.floor(n.position), r[this.as[5]] = Math.floor(t.position), r[this.as[6]] = n.position % 1, r[this.as[7]] = t.position % 1, this._propagate(r);
		});
		for (let e of n) e.parent && r(e);
		this.#e = [], this.#t = [];
	}
	#r(e) {
		let t = /* @__PURE__ */ new Map(), n = e.map((e) => {
			let n = this.keyAccessor(e);
			if (!Dh(n) || t.has(n)) throw Error("Invalid or duplicate dendrogram key: " + String(n));
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
				if (!Dh(n) || !r) throw Error("Missing dendrogram parent for node " + String(e.key));
				e.parent = r, r.children.push(e);
			}
		}
		if (r.length !== 1) throw Error("Dendrogram requires exactly one root; found " + r.length);
		let i = [], a = [r[0]];
		for (; a.length;) {
			let e = a.pop();
			i.push(e);
			for (let t of e.children) a.push(t);
		}
		if (i.length !== n.length) {
			let e = new Set(i), t = n.find((t) => !e.has(t));
			throw Error("Dendrogram cycle or disconnected node: " + String(t.key));
		}
		let o = n.filter((e) => !e.children.length);
		for (let e of o) {
			let t = this.leafIndexAccessor(e.datum);
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
};
function Dh(e) {
	return typeof e == "string" || typeof e == "number" && Number.isFinite(e);
}
//#endregion
//#region ../core/src/data/transforms/displace2dConstraintSolver.js
var Oh = .02, kh = 2, Ah = .9, jh = 1.5, Mh = 32, Nh = 32, Ph = 128, Fh = 8, Ih = 1, Lh = 40, Rh = Math.PI * (3 - Math.sqrt(5)), zh = .01, Bh = .05, Vh = 4, Hh = 800, Uh = class {
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
		this.items = e, this.xExtent = t, this.yExtent = n, this.#e = new Float64Array(e.length), this.#t = new Float64Array(e.length), this.#n = Float64Array.from(e, (t) => Qh(t.priority, e.length));
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
			for (let a = 0; a < Mh; a++) {
				let o = a / Mh, s = n.anchorX + r * o, c = n.anchorY + i * o;
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
					let a = Gh(n.x, n.y, n.width + kh, n.height + kh, i.x, i.y, i.width + kh, i.height + kh, t, r);
					if (!a) continue;
					let o = this.#n[t], s = this.#n[r], c = o + s;
					this.#o(t, a.x * o * Ah / c, a.y * o * Ah / c), this.#o(r, -a.x * s * Ah / c, -a.y * s * Ah / c);
				}
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.anchorWidth == 0 || i.anchorHeight == 0) continue;
					let a = Gh(n.x, n.y, n.width + kh, n.height + kh, i.anchorX, i.anchorY, i.anchorWidth + kh, i.anchorHeight + kh, t, e.length + r);
					a && this.#o(t, a.x * Ah, a.y * Ah);
				}
				this.#s(t);
			}
		}
		let t = 0;
		for (let n = 0; n < e.length; n++) this.#s(n), t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		let n = (this.#r + 1) % Nh == 0, r = t > zh && !n || Kh(e);
		if (r && n && this.#u()) {
			r = Kh(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		if (!r && t <= zh && this.#d()) {
			r = Kh(e);
			for (let n = 0; n < e.length; n++) t = Math.max(t, Math.abs(e[n].x - this.#e[n]), Math.abs(e[n].y - this.#t[n]));
		}
		return this.#r++, !r && t <= zh ? this.#i++ : this.#i = 0, (this.#i >= Vh || this.#r >= Hh) && (this.#a = !1), t > 0;
	}
	solve() {
		for (; this.#a;) this.step();
	}
	#o(e, t, n) {
		let r = this.items[e];
		r.x = $h(r.x + t, this.#e[e] - jh, this.#e[e] + jh), r.y = $h(r.y + n, this.#t[e] - jh, this.#t[e] + jh);
	}
	#s(e) {
		let t = this.items[e];
		this.xExtent && t.width <= this.xExtent[1] - this.xExtent[0] && this.#o(e, $h(t.x, this.xExtent[0] + t.width / 2, this.xExtent[1] - t.width / 2) - t.x, 0), this.yExtent && t.height <= this.yExtent[1] - this.yExtent[0] && this.#o(e, 0, $h(t.y, this.yExtent[0] + t.height / 2, this.yExtent[1] - t.height / 2) - t.y);
	}
	#c(e) {
		let t = this.items[e], n = $h(t.x + (t.anchorX - t.x) * Oh, this.#e[e] - jh, this.#e[e] + jh), r = $h(t.y + (t.anchorY - t.y) * Oh, this.#t[e] - jh, this.#t[e] + jh);
		(n != t.x || r != t.y) && this.#l(e, n, r) && (t.x = n, t.y = r);
	}
	#l(e, t, n) {
		let r = this.items[e];
		if (!Yh(t, r.width, this.xExtent) || !Yh(n, r.height, this.yExtent)) return !1;
		for (let i = 0; i < this.items.length; i++) {
			let a = this.items[i];
			if (i != e && Jh(t, n, r.width, r.height, a.x, a.y, a.width, a.height) || Jh(t, n, r.width, r.height, a.anchorX, a.anchorY, a.anchorWidth, a.anchorHeight)) return !1;
		}
		return !0;
	}
	#u() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t];
			if (n.width == 0 || n.height == 0 || this.#l(t, n.x, n.y)) continue;
			let r = Math.max(4, Math.sqrt(n.width * n.height) / 4), i = Zh(t, this.items.length) / 2 ** 32 * Math.PI * 2;
			if (this.#f(t, r, i, Infinity, !0) && e++, e >= Fh) break;
		}
		return e > 0;
	}
	#d() {
		let e = 0;
		for (let t = this.items.length - 1; t >= 0; t--) {
			let n = this.items[t], r = Math.hypot(n.x - n.anchorX, n.y - n.anchorY);
			if (n.width == 0 || n.height == 0 || r <= Ih) continue;
			let i = Math.max(4, Math.min(n.width, n.height) / 3), a = Zh(t, this.items.length + 1) / 2 ** 32 * Math.PI * 2, o = r + Wh(this.items, t, n.x, n.y);
			if (this.#f(t, i, a, o, !1) && e++, e >= Fh) break;
		}
		return e > 0;
	}
	#f(e, t, n, r, i) {
		let a = this.items[e], o = a.x, s = a.y;
		for (let c = 0; c < Ph; c++) {
			let l = t * Math.sqrt(c + 1) * (i ? 1 + c / 508 : 1);
			if (l + Ih >= r) break;
			let u = n + c * Rh, d = a.anchorX + Math.cos(u) * l, f = a.anchorY + Math.sin(u) * l;
			if (this.#l(e, d, f)) {
				let t = l + Wh(this.items, e, d, f);
				t + Ih < r && (r = t, o = d, s = f);
			}
		}
		return o == a.x && s == a.y ? !1 : (a.x = o, a.y = s, !0);
	}
};
function Wh(e, t, n, r) {
	let i = e[t], a = n - i.anchorX, o = r - i.anchorY, s = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (n == t || r.width == 0 || r.height == 0) continue;
		let c = 2 / r.width, l = 2 / r.height, u = (i.anchorX - r.x) * c, d = (i.anchorY - r.y) * l, f = a * c, p = o * l, m = f * f + p * p, h = $h(-(u * f + d * p) / m, 0, 1), g = u + h * f, _ = d + h * p, v = Math.max(0, 1 - (g * g + _ * _) / 2);
		s = Math.max(s, Lh * v * v);
	}
	return s;
}
function Gh(e, t, n, r, i, a, o, s, c, l) {
	let u = e - i, d = t - a, f = (n + o) / 2 - Math.abs(u), p = (r + s) / 2 - Math.abs(d);
	if (f > 0 && p > 0) {
		if (u == 0 && d == 0) {
			let e = (r + s) / (n + o + r + s);
			return Zh(c, l) / 2 ** 32 < e ? {
				x: f * Xh(u, c, l),
				y: 0
			} : {
				x: 0,
				y: p * Xh(d, c, l)
			};
		}
		return f < p || f == p && Zh(c, l) % 2 == 0 ? {
			x: f * Xh(u, c, l),
			y: 0
		} : {
			x: 0,
			y: p * Xh(d, c, l)
		};
	}
}
function Kh(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n.width != 0 && n.height != 0) {
			for (let r = t + 1; r < e.length; r++) if (qh(n, e[r]) > Bh) return !0;
			for (let t of e) {
				if (t.anchorWidth == 0 || t.anchorHeight == 0) continue;
				let e = (n.width + t.anchorWidth) / 2 + kh - Math.abs(n.x - t.anchorX), r = (n.height + t.anchorHeight) / 2 + kh - Math.abs(n.y - t.anchorY);
				if (e > Bh && r > Bh) return !0;
			}
		}
	}
	return !1;
}
function qh(e, t) {
	if (t.width == 0 || t.height == 0) return 0;
	let n = (e.width + t.width) / 2 + kh - Math.abs(e.x - t.x), r = (e.height + t.height) / 2 + kh - Math.abs(e.y - t.y);
	return n > 0 && r > 0 ? Math.min(n, r) : 0;
}
function Jh(e, t, n, r, i, a, o, s) {
	return n > 0 && r > 0 && o > 0 && s > 0 && Math.abs(e - i) * 2 < n + o + 4 && Math.abs(t - a) * 2 < r + s + 4;
}
function Yh(e, t, n) {
	return !n || t > n[1] - n[0] || e - t / 2 >= n[0] && e + t / 2 <= n[1];
}
function Xh(e, t, n) {
	return e == 0 ? Zh(t, n) & 2 ? -1 : 1 : Math.sign(e);
}
function Zh(e, t) {
	return (Math.imul(e + 1, 2654435761) ^ Math.imul(t + 1, 2246822507)) >>> 0;
}
function Qh(e, t) {
	return t <= 1 ? 1 : .2 + .8 * e / (t - 1);
}
function $h(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/data/transforms/displace2d.js
var eg = 4, tg = 2, ng = 64, rg = 120, ig = 600, ag = .05, og = 1e3 / 60, sg = class extends M {
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
	#b = () => rg;
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
		}, r = Object.values(n).some(R) ? mt(this.paramRuntime, n, () => {
			this.#e && this.completed && this.#I();
		}, (e) => this.registerDisposer(e)) : n, i = (t, n) => typeof e[t] == "string" ? this.createFieldAccessor(e, t) : n;
		this.#g = i("width", () => r.width), this.#_ = i("height", () => r.height), this.#v = i("anchorWidth", () => r.anchorWidth), this.#y = i("anchorHeight", () => r.anchorHeight);
		let a = e.animationHalfLife ?? rg;
		R(a) || lg(a), this.#b = this.watchExprRef(a, () => lg(this.#b()));
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
		let n = this.#h, r = this.#t.getScale(), i = this.#n.getScale(), a = this.#t.getAxisLength(), o = this.#n.getAxisLength(), s = fr(r), c = fr(i), l = [0, a], u = [0, o], d = [], f = this.#d && this.#d.transitionsEnabled !== !1, p = !1, m = !1;
		for (let l = 0; l < e.length; l++) {
			let u = e[l], h = n ? n(u) : u;
			if (n && (cg(h), t.has(h))) throw Error(`displace2d key must be unique: ${h}`);
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
		let h = new Uh(d, l, u);
		if (f) {
			if (m && h.compactTowardAnchors(), p) for (let e = 0; e < tg; e++) h.step();
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
		let t = Math.min(50, Math.max(1, this.#u === void 0 ? og : e - this.#u));
		this.#u = e;
		let n = performance.now(), r = !1;
		for (let e = 0; e < ng && (r = this.#O(), !(!r || performance.now() - n >= eg)); e++);
		let i = this.#k(t);
		i != 0 && (this.#A(), this.#j()), r || i == 2 ? this.#T() : this.#u = void 0;
	};
	#O() {
		let e = !1;
		for (let t of this.#s) t.active && t.step(), e ||= t.active;
		return e;
	}
	#k(e) {
		let t = lg(this.#b()), n = 1 - 2 ** (-e / t), r = ig * e / 1e3, i = !1, a = !1;
		for (let e of this.#s) for (let t of e.items) {
			let e = t, o = t.x - e.displayX, s = t.y - e.displayY;
			o != 0 && (e.displayX += Math.abs(o) <= ag ? o : ug(o * n, -r, r), i = !0), s != 0 && (e.displayY += Math.abs(s) <= ag ? s : ug(s * n, -r, r), i = !0), a ||= Math.abs(t.x - e.displayX) > ag || Math.abs(t.y - e.displayY) > ag;
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
function cg(e) {
	if (typeof e != "string" && !(typeof e == "number" && Number.isFinite(e))) throw Error("displace2d keys must be strings or finite numbers.");
}
function lg(e) {
	if (!Number.isFinite(e) || e <= 0) throw Error("displace2d animationHalfLife must be positive and finite.");
	return e;
}
function ug(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region ../core/src/utils/topK.js
function dg(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = i - r;
	if (t <= 0 || a <= 0) return [];
	let o = new Gn(), s = 0;
	for (; s < t && s < a; s++) o.push(s, n(e[r + s]));
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
var fg = class {
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
}, pg = class extends M {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = this.createFieldAccessor(e, "pos"), this.endPosAccessor = this.createFieldAccessor(e, e.pos2 == null ? "pos" : "pos2"), this.startPosBisector = oe(this.startPosAccessor), this.endPosBisector = oe(this.endPosAccessor), this.scoreAccessor = this.createFieldAccessor(e, "score"), this.widthAccessor = this.createFieldAccessor(e, "width"), this.laneAccessor = this.params.lane ? this.createFieldAccessor(e, "lane") : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
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
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new fg(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = fr(e), n = this.resolution.getAxisLength();
		if (!n) return;
		let r = "gapMapping" in e && e.gapMapping(n), i = r && this.params.pos2 != null;
		for (let e of this.reservationMaps.values()) e.reset();
		let a = e.domain(), o = dg(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, a[0]), this.startPosBisector.right(this._data, a[1]));
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
function mg(e, t, n, r) {
	if (e.length < 3 || !_g(e, t, r)) return e;
	let i = e;
	do
		switch (n) {
			case "parity":
				i = hg(i);
				break;
			case "greedy":
				i = gg(i, t, r);
				break;
			default: throw Error("Invalid axis label overlap method: " + n);
		}
	while (i.length >= 3 && _g(i, t, r));
	let a = e.at(-1);
	return i.length < 3 && i.at(-1) !== a && (i.length > 1 && i.pop(), i.push(a)), i;
}
function hg(e) {
	return e.filter((e, t) => t % 2 == 0);
}
function gg(e, t, n) {
	let r = [], i;
	for (let a of e) {
		let e = t(a);
		(i == null || !vg(i, e, n)) && (r.push(a), i = e);
	}
	return r;
}
function _g(e, t, n) {
	let r = t(e[0]);
	for (let i = 1; i < e.length; i++) {
		let a = t(e[i]);
		if (vg(r, a, n)) return !0;
		r = a;
	}
	return !1;
}
function vg(e, t, n) {
	return n > Math.max(t[0] - e[1], e[0] - t[1]);
}
//#endregion
//#region ../core/src/data/transforms/axisLabelLayout.js
var yg = class extends M {
	get behavior() {
		return 6;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this.channel = e.channel, this.labelWidthAccessor = this.createFieldAccessor(e, "labelWidth"), this.chromLabelWidthAccessor = e.chromLabelWidth ? this.createFieldAccessor(e, "chromLabelWidth") : void 0, (e.labelOverlap || e.labelFlush !== !1 || e.labelFlushZoomExtent) && !wg(e.labelAngle)) throw Error("Axis label layout requires an axis-aligned label angle.");
		this.data = [], this.nextOutputData = [], this.outputLabels = /* @__PURE__ */ new Map(), this.visibleLabelValueSet = /* @__PURE__ */ new Set(), this.nextVisibleLabelValueSet = /* @__PURE__ */ new Set(), this.flushOffsetMap = /* @__PURE__ */ new Map(), this.nextFlushOffsetMap = /* @__PURE__ */ new Map(), this.hasPublished = !1, this.resolution = t.getScaleResolution(this.channel);
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
		let t = this.resolution.getScale(), n = fr(t), r = this.chromLabelWidthAccessor ? t.genome() : void 0;
		for (let n of this.data) (!r || !this.chromosomeLabelOverlaps(n, t, r, e)) && this.nextOutputData.push(n);
		this.nextFlushOffsetMap.clear();
		for (let r of this.nextOutputData) {
			let i = (t(r.value) + n) * e, a = this.params.labelFlushZoomExtent && r.zoomExtent ? Og(i, this.getLabelBounds(r, 0), e, this.params.labelFlushOffset) : this.params.labelFlush === !1 ? 0 : Dg(i, this.getLabelBounds(r, 0), e, this.params.labelFlush, this.params.labelFlushOffset), o = this.channel == "x" ? a : -a;
			r[this.params.labelOffset] = o, this.nextFlushOffsetMap.set(r.value, o);
		}
		let i = this.getOverlapMethod(t), a = this.nextOutputData.filter((e) => e.label !== ""), o = i ? bg(a, (r) => {
			let i = this.getLabelBounds(r, (t(r.value) + n) * e), a = r[this.params.labelOffset], o = this.channel == "x" ? a : -a;
			return [i[0] + o, i[1] + o];
		}, i, this.params.labelSeparation) : a;
		this.nextVisibleLabelValueSet.clear();
		for (let e of o) this.nextVisibleLabelValueSet.add(e.value);
		for (let e of this.nextOutputData) e[this.params.labelVisible] = this.nextVisibleLabelValueSet.has(e.value);
		this.propagateIfChanged();
	}
	propagateIfChanged() {
		if (!this.hasPublished || this.nextOutputData.length != this.outputLabels.size || this.nextOutputData.some((e) => this.outputLabels.get(e.value) !== e.label) || !Tg(this.nextVisibleLabelValueSet, this.visibleLabelValueSet) || !Eg(this.nextFlushOffsetMap, this.flushOffsetMap)) {
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
	chromosomeLabelOverlaps(e, t, n, r) {
		let i = n.getChromosome(e.chromLabel), a = this.getLabelBounds(e, (t(e.value) + fr(t)) * r), o = t(i.continuousStart) * r, s = "gapMapping" in t && t.gapMapping(r);
		return vg(a, kg(o, (s ? s.position(i.continuousEnd, 0, !0) : t(i.continuousEnd)) * r, this.chromLabelWidthAccessor(e), this.params.chromLabelPadding, this.params.chromLabelAlign, r), this.params.chromLabelSpacing);
	}
	getLabelBounds(e, t) {
		return xg(t, this.labelWidthAccessor(e), this.params.labelFontSize, this.params.labelAngle, this.channel, this.params.labelAlign, this.params.labelBaseline);
	}
	getOverlapMethod(e) {
		switch (this.params.labelOverlap) {
			case !1: return !1;
			case "auto": return g(e.type) || e.type == "symlog" ? "greedy" : "parity";
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
function bg(e, t, n, r) {
	let i = mg(e.filter((e) => e.explicit), t, n, r), a = mg(e.filter((e) => !e.explicit && i.every((n) => !vg(t(e), t(n), r))), t, n, r);
	return i.concat(a);
}
function xg(e, t, n, r, i, a, o) {
	let s = -Sg(a) * t, c = s + t, l = -Cg(o) * n, u = l + n, d = -r * Math.PI / 180, f = Math.sin(d), p = Math.cos(d), m = i == "x" ? s * p - l * f : s * f + l * p, h = i == "x" ? c * p - l * f : c * f + l * p, g = i == "x" ? c * p - u * f : c * f + u * p, _ = i == "x" ? s * p - u * f : s * f + u * p;
	return [e + Math.min(m, h, g, _), e + Math.max(m, h, g, _)];
}
function Sg(e) {
	switch (e) {
		case "left": return 0;
		case "center": return .5;
		case "right": return 1;
		default: throw Error("Invalid label alignment: " + e);
	}
}
function Cg(e) {
	switch (e) {
		case "top": return 0;
		case "middle": return .5;
		case "bottom":
		case "alphabetic":
		case "baseline": return 1;
		default: throw Error("Invalid label baseline: " + e);
	}
}
function wg(e) {
	return e % 90 == 0;
}
function Tg(e, t) {
	return e.size == t.size && e.isSubsetOf(t);
}
function Eg(e, t) {
	if (e.size != t.size) return !1;
	for (let [n, r] of e) if (t.get(n) !== r) return !1;
	return !0;
}
function Dg(e, t, n, r, i) {
	let a = Math.abs(e), o = Math.abs(n - e);
	return a < o && a <= r ? -t[0] - i : o <= r ? -t[1] + i : 0;
}
function Og(e, t, n, r) {
	return e < n - e ? Math.max(0, -e - t[0] - r) : Math.min(0, n - e - t[1] + r);
}
function kg(e, t, n, r, i, a) {
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
var Ag = class extends M {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (jg(this.params)) e = this.params;
		else if (Mg(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = Oe(this.params, t);
		} else throw Error("Invalid filter params: " + JSON.stringify(this.params));
		this.predicate = this.watchSnapshottedExpression(e);
	}
	handle(e) {
		this.predicate(e) && this._propagate(e);
	}
};
function jg(e) {
	return "expr" in e;
}
function Mg(e) {
	return "param" in e;
}
//#endregion
//#region ../core/src/data/transforms/flatten.js
var Ng = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = e.index;
		if (e.fields) {
			let t = this.createFieldAccessors(e, "fields"), r = P(e.as || e.fields);
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
}, Pg = 48;
function* Fg(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - Pg;
	}
	yield r;
}
//#endregion
//#region ../core/src/data/transforms/flattenCompressedExons.js
var Ig = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "exons", { defaultValue: "exons" }), r = this.createFieldAccessor(e, "start", { defaultValue: "start" }), [i, a] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let t = r(e), o = t, s = !0, c = n(e);
			for (let n of Fg(c)) {
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
}, Lg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessor(e, "start", { defaultValue: "start" }), r = this.createFieldAccessor(e, "cigar", { defaultValue: "cigar" }), i = Xm({ copyFields: e.copyFields });
		this.handle = (e) => {
			let t = n(e);
			if (!Number.isFinite(t)) throw Error(`Invalid CIGAR start coordinate: ${t}`);
			let a = r(e);
			if (typeof a != "string" || a.length == 0) throw Error(`Malformed CIGAR string: ${JSON.stringify(a)}`);
			for (let n of dh(a, t)) this._propagate(Object.assign(i(e), n));
		}, this.beginBatch = (e) => {
			i.reset(), super.beginBatch(e);
		};
	}
}, Rg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		super(e, t);
		let n = this.createFieldAccessors(e, "field"), r = P(e.separator), i = P(e.as || e.field);
		if (n.length !== r.length || n.length !== i.length) throw Error(`Lengths of "separator" (${r.length}), "fields" (${n.length}), and "as" (${i.length}) do not match!`);
		this.handle = (e) => {
			if (n.some((t) => !t(e))) return;
			let t = n.map((t, n) => t(e).split(r[n]));
			zg(t, e);
			let a = t[0].length;
			for (let r = 0; r < a; r++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < n.length; e++) a[i[e]] = t[e][r];
				this._propagate(a);
			}
		};
	}
};
function zg(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region ../core/src/data/transforms/formula.js
var Bg = class extends M {
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
}, Vg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = e.channel ?? "x";
		if (!["x", "y"].includes(n)) throw Error("Invalid channel: " + n);
		let r = t.getScaleResolution(n).getScale(), i = "genome" in r ? r.genome() : void 0;
		if (!i) throw Error("LinearizeGenomicCoordinate transform requires a locus scale!");
		let a = this.createFieldAccessor(e, "chrom"), o = this.createFieldAccessors(e, "pos"), s = P(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = P(e.offset), l;
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
}, Hg = class extends M {
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
		this.fontMeasurement = nd(e, this.params);
	}
};
//#endregion
//#region ../core/src/data/transforms/packLegendLabels.js
function Ug(e, t) {
	let n = Number(e), r = Number.isFinite(n) && n >= 0 ? n : 100, i = Number(t);
	return Math.sqrt(r) + (Number.isFinite(i) ? i : 0);
}
var Wg = class extends M {
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
			let n = this.buffer[e], r = t == "horizontal" ? Math.floor(e / d) : e % f, i = t == "horizontal" ? e % d : Math.floor(e / f), o = Ug(this.symbolSizeAccessor(n), this.symbolStrokeWidthAccessor(n)), s = this.labelWidthAccessor(n);
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
}, Gg = 65536, Kg = class extends M {
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
		let e = this.params, t = e.as || "lane", n = tn(e.spacing) ? e.spacing : 1, r = this.createFieldAccessor(e, "start"), i = this.createFieldAccessor(e, "end");
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(Gg), o = this.createFieldAccessor(e, "preference"), s = e.preferredOrder, c = Infinity;
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
			let e = new Gn(), a = new Gn(), o = -Infinity, s = 0;
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
}, qg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let n = this.createFieldAccessors(e, "fields"), r = e.as ? e.as : n.map(Jt);
		this.handle = (e) => {
			let t = {};
			for (let i = 0; i < n.length; i++) t[r[i]] = n[i](e);
			this._propagate(t);
		};
	}
}, Jg = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = new RegExp(e.regex), r = typeof e.as == "string" ? [e.as] : e.as, i = this.createFieldAccessor(e, "field");
		this.handle = (t) => {
			let a = i(t);
			if (vt(a)) {
				let i = a.match(n);
				if (i) {
					if (i.length - 1 != r.length) throw Error("The number of RegEx groups and the length of \"as\" do not match!");
					for (let e = 0; e < r.length; e++) t[r[e]] = i[e + 1];
				} else if (e.skipInvalidInput) for (let e = 0; e < r.length; e++) t[r[e]] = void 0;
				else throw Error(`"${a}" does not match the given regex: ${n.toString()}`);
			} else if (!e.skipInvalidInput) throw Error(`Trying to match a non-string field. Encountered type: ${typeof a}, field content: "${a}".`);
			this._propagate(t);
		};
	}
}, Yg = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = P(e.columnRegex).map((e) => new RegExp(e));
		for (let e of t) if (RegExp("|" + e.source).exec("").length - 1 != 1) throw Error(`Regex ${e.toString()} must have exactly one capturing group!`);
		let n = P(e.asValue);
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
			$t(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, Xg = class extends M {
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
}, Zg = class extends M {
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
		let e = rf(nf(this.buffer, this.#e), (e) => super.beginBatch(e), (e) => this._propagate(e)), t = this.params, n = t.as || ["y0", "y1"], r = t.sort ? st(this.createFieldAccessors(t.sort, "field"), t.sort.order) : void 0, i = t.field ? this.createFieldAccessor(t, "field") : () => 1, a = this.createFieldAccessors(t, "groupby"), o = yn(this.buffer, (e) => a.map((t) => t(e)).join()).map((e) => e[1]), s = (e) => !0;
		if (t.baseField) {
			let e = this.createFieldAccessor(t, "baseField");
			s = (t) => e(t) !== null;
		}
		let c, l;
		switch (t.offset) {
			case "normalize":
				c = (e, t) => e / t, l = (e, t) => Va(e, t);
				break;
			case "center":
				c = (e, t) => e - t / 2, l = (e, t) => Va(e, t);
				break;
			case "information":
				{
					let e = Math.log2(t.cardinality ?? 4);
					c = (e, t) => e / t, l = (t, n) => {
						let r = Va(t, (e) => +!s(e)), i = Va(t, n), a = i - r, o = 0;
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
}, Qg = class extends M {
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
function* $g(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of $g(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region ../core/src/data/transforms/aggregateOps.js
var e_ = {
	count: (e) => e.length,
	valid: Ia,
	sum: Va,
	min: h,
	max: e,
	mean: za,
	q1: (e, t) => x(e, .25, t),
	median: Ba,
	q3: (e, t) => x(e, .75, t),
	variance: La
}, t_ = class extends M {
	get behavior() {
		return 1;
	}
	constructor(e, t) {
		if (super(e, t), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
			if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
			if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
			e.fields.forEach((t, n) => {
				let r = this.createFieldAccessor(e, "fields", { index: n }), i = e_[e.ops[n]];
				this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
			});
		} else this.ops.push((e) => e_.count(e)), this.as.push("count");
	}
	reset() {
		super.reset(), this.buffer = [];
	}
	#e() {
		let e = this.params, t = e?.groupby;
		if (t?.length > 0) {
			let n = this.createFieldAccessors(e, "groupby"), r = Sn(this.buffer, ...n);
			for (let [e, n] of $g(r)) {
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
		e.type == "file" && this.inFacet || ((this.buffer.length > 0 || this.inFacet) && (this.#e(), this.buffer = []), super.beginBatch(e));
	}
	complete() {
		(this.buffer.length > 0 || this.inFacet) && this.#e(), super.complete();
	}
}, n_ = "...";
function r_(e, t, n, r, i) {
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
var i_ = class extends M {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.accessor = this.createFieldAccessor(e, "field"), this.as = e.as ?? e.field, this.fontSize = e.fontSize, this.ellipsis = e.ellipsis ?? n_;
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.textMetrics;
		this.fontMeasurement = e.requestFont(this.params);
	}
	handle(e) {
		let t = this.accessor(e);
		t == null ? e[this.as] = "" : e[this.as] = r_("" + t, this.params.limit, (e, t) => this.fontMeasurement.measureWidth(e, t), this.fontSize, this.ellipsis), this._propagate(e);
	}
}, a_ = /* @__PURE__ */ new Set([
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
]), o_ = /* @__PURE__ */ new Set([
	"min",
	"max",
	"q1",
	"median",
	"q3"
]), s_ = /* @__PURE__ */ new Set(["mean", "variance"]);
function c_(e, t) {
	let n = t.map(({ op: e }) => e), r = t.map(({ resultIndex: e }) => e), i = t.map(({ op: e }) => l_(e));
	return ((t, a, o) => {
		let s = new u_(e, n), c = r.map((e) => o[e]), l = a.starts, u = a.stops, d = 0, f = 0;
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
function l_(e) {
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
var u_ = class {
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
		this.accessor = e, this.needsSum = t.includes("sum"), this.needsMoments = t.some((e) => s_.has(e)), this.needsOrderedValues = t.some((e) => o_.has(e)), this.reset();
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
		this.needsOrderedValues && this.values.splice(se(this.values, n), 0, n);
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
			let e = se(this.values, r);
			if (this.values[e] !== r) throw Error("Window aggregate state is inconsistent.");
			this.values.splice(e, 1);
		}
	}
	q1() {
		return C(this.values, .25);
	}
	median() {
		return C(this.values, .5);
	}
	q3() {
		return C(this.values, .75);
	}
}, d_ = /* @__PURE__ */ new Set([
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
]), f_ = /* @__PURE__ */ new Set([
	"row_number",
	"rank",
	"dense_rank",
	"percent_rank",
	"cume_dist",
	"ntile"
]);
function p_(e, t, n) {
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
var m_ = class extends M {
	#e = [];
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e, this.buffer = [];
		let n = h_(e, this);
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
		let e = rf(nf(this.buffer, this.#e), (e) => super.beginBatch(e), (e) => this._propagate(e));
		if (this.#e = [], this.buffer.length == 0) return;
		let t = this.buffer;
		this.buffer = [];
		for (let e of w_(t, this.groupAccessors)) this.#n(e);
		for (let n of t) e(n);
	}
	#n(e) {
		let t = x_(e, this.comparator), n = S_(t, this.comparator, this.frame, this.ignorePeers), r = this.outputFields.map(() => Array(t.length));
		for (let e of this.partitionEvaluators) e(t, n, r);
		v_(t, r, this.outputFields);
	}
};
function h_(e, t) {
	if (!Array.isArray(e.ops) || e.ops.length == 0) throw Error("The \"ops\" property must contain at least one operation.");
	y_("fields", e.fields, e.ops.length), y_("params", e.params, e.ops.length), y_("as", e.as, e.ops.length);
	let n = e.frame ?? [null, 0];
	if (!Array.isArray(n) || n.length != 2) throw Error("The \"frame\" property must contain exactly two offsets.");
	for (let e of n) if (e != null && (!Number.isInteger(e) || !Number.isFinite(e))) throw Error("Window frame offsets must be integers or null.");
	let r = t.createFieldAccessors(e, "groupby"), i = e.sort ? st(t.createFieldAccessors(e.sort, "field"), e.sort.order) : void 0, a = [], o = [], s = /* @__PURE__ */ new Map(), c = [], l = [];
	for (let n = 0; n < e.ops.length; n++) {
		let r = g_(e, n, t);
		if (l.push(r.as), r.kind == "window") {
			let e = p_(r.op, r.accessor, r.parameter);
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
	c.length && a.push(__(c));
	for (let e of o) a.push(c_(e.accessor, e.results));
	return {
		frame: n,
		ignorePeers: e.ignorePeers ?? !1,
		comparator: i,
		groupAccessors: r,
		partitionEvaluators: a,
		outputFields: l
	};
}
function g_(e, t, n) {
	let r = e.ops[t], i = e.fields?.[t] ?? null, a = e.params?.[t], o = d_.has(r) ? "window" : a_.has(r) ? "aggregate" : null;
	if (!o) throw Error(`Unsupported window operation: ${r}`);
	if ((o == "window" ? !f_.has(r) : r != "count") && i == null) throw Error(`Window operation "${r}" requires a field.`);
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
		as: s ?? b_(r, i)
	};
}
function __(e) {
	let t = e.map(({ resultIndex: e }) => e);
	return (e, n, r) => {
		let i = t.map((e) => r[e]), a = n.starts, o = n.stops;
		for (let t = 0; t < e.length; t++) {
			let e = o[t] - a[t];
			for (let n of i) n[t] = e;
		}
	};
}
function v_(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		for (let e = 0; e < n.length; e++) i[n[e]] = t[e][r];
	}
}
function y_(e, t, n) {
	if (t && t.length != n) throw Error(`The "${e}" property must contain one entry for every window operation.`);
}
function b_(e, t) {
	return t == null ? e : `${e}_${t}`;
}
function x_(e, t) {
	return t ? e.slice().sort(t) : e;
}
function S_(e, t, n, r) {
	let i = e.length, a = Array(i), o = Array(i), s = Array(i), c = Array(i);
	if (t) {
		let n = 0;
		for (let r = 1; r <= i; r++) if (r == i || t(e[n], e[r]) != 0) {
			for (let e = n; e < r; e++) a[e] = n, o[e] = r;
			n = r;
		}
	} else for (let e = 0; e < i; e++) a[e] = e, o[e] = e + 1;
	for (let e = 0; e < i; e++) {
		let l = n[0] == null ? 0 : C_(e + n[0], 0, i), u = n[1] == null ? i : C_(e + n[1] + 1, 0, i);
		t && !r && (l > 0 && l < i && a[l] != l && (l = a[l]), u > 0 && u < i && (u = o[u - 1])), l > u && (u = l), s[e] = l, c[e] = u;
	}
	return {
		starts: s,
		stops: c,
		peerStarts: a,
		peerStops: o
	};
}
function C_(e, t, n) {
	return Math.max(t, Math.min(e, n));
}
function w_(e, t) {
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
var T_ = {
	aggregate: t_,
	alignmentMismatches: hh,
	collect: af,
	coverage: Sh,
	dendrogram: Eh,
	displace1d: wh,
	displace2d: sg,
	axisLabelLayout: yg,
	filterScoredLabels: pg,
	filter: Ag,
	flatten: Ng,
	flattenCigar: Lg,
	flattenCompressedExons: Ig,
	flattenDelimited: Rg,
	flattenSequence: Qg,
	formula: Bg,
	identifier: Ae,
	linearizeGenomicCoordinate: Vg,
	measureText: Hg,
	packLegendLabels: Wg,
	pileup: Kg,
	project: qg,
	regexExtract: Jg,
	regexFold: Yg,
	sample: Wu,
	setIntersection: Xg,
	truncateText: i_,
	window: m_,
	stack: Zg
};
function E_(e, t, n) {
	try {
		if (e.type == "lookup") {
			let r = e;
			if (!n && !th(r)) throw Error("Lookup transform requires a foreign collector.");
			return new eh(r, n?.collector, void 0, t);
		}
		if (e.type == "coordinateLookup") {
			if (!n || !t) throw Error("Coordinate lookup requires a view and a foreign data source.");
			return new _h(e, n.collector, n.source, t);
		}
		if (e.type == "cross") {
			if (!n) throw Error("Cross transform requires a foreign collector.");
			return new yh(e, n.collector);
		}
		let r = T_[e.type];
		if (r) return new r(e, t);
		throw Error("Unknown transform: " + e.type);
	} catch (n) {
		throw $e(n, t?.paramRuntime.getSpecLocation(e, []));
	}
}
//#endregion
//#region ../core/src/data/sources/urlSource.js
var D_ = /* @__PURE__ */ new Set(["application/gzip", "application/x-gzip"]), O_ = new TextDecoder(), k_ = class extends q {
	#e = 0;
	constructor(e, t) {
		super(t), this.params = mt(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), Hc(e.url)), this.baseUrl = t?.getBaseUrl();
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
		let t = Vn(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" };
		return Ro(await A_(t, Fl(n.type)), Pl(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => Vn(t, e));
	}
	async load() {
		if (this.disposed) return;
		let e = ++this.#e, t = () => !this.disposed && e === this.#e;
		this.setLoadingStatus("loading"), this.reset();
		let n;
		try {
			let e = F(this.params.url), n = typeof e == "object" && "urlsFromFile" in e ? (await this.#t(e)).map((e) => ({ url: e })) : await Vc({
				url: this.params.url,
				baseUrl: this.baseUrl,
				paramRuntime: this.paramRuntime
			});
			if (!t()) return;
			let r = n.map((e) => e.url);
			if (r.length > 0 && r[0]) {
				let e = Nl(this.params, r), i = Fl(e.type), a = async (n, r) => {
					try {
						let i = Ro(n, Pl(e)), a = i instanceof Promise ? await i : i;
						if (!t()) return;
						this.beginBatch({
							type: "file",
							url: r.url
						});
						let o = Uc(r.fields);
						for (let e of a) this._propagate(o(e));
					} catch (e) {
						if (!t()) return;
						throw Error(`Cannot parse: ${r.url}: ${e.message}`, { cause: e });
					}
				}, o = await Promise.all(n.map((e) => Kc(e, async () => ({
					descriptor: e,
					content: await A_(e.url, i)
				}))));
				if (!t()) return;
				await Promise.all(o.map((e) => e ? a(e.content, e.descriptor) : void 0));
			}
		} catch (e) {
			e instanceof Bc || (n = e);
		}
		if (t()) {
			try {
				this.complete();
			} catch (e) {
				n ??= e;
			}
			t() && (n ? (sl(n), this.setLoadingStatus("error", n.message, n.errorPhase ?? "processing", nt(n))) : this.setLoadingStatus("complete"));
		}
	}
};
async function A_(e, t) {
	let n;
	try {
		if (n = await fetch(e), !n.ok) throw Error(`${n.status} ${n.statusText}`);
	} catch (t) {
		throw Object.assign(Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t }), { errorPhase: "request" });
	}
	return L_(n, e, t);
}
function j_(e) {
	return "url" in e;
}
function M_(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && !(e[3] & 224);
}
function N_(e) {
	return e ? D_.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function P_(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function F_(e) {
	return new Uint8Array(e).buffer;
}
async function I_(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(F_(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function L_(e, t, n) {
	if (!(Ll(t) || N_(e.headers.get("content-type")) || P_(e.headers.get("content-encoding")))) return R_(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return z_(M_(r) ? await I_(r) : r, n);
}
function R_(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function z_(e, t) {
	return t == "arrayBuffer" ? F_(e) : O_.decode(e);
}
//#endregion
//#region ../core/src/data/sources/sequenceSource.js
function B_(e) {
	return "sequence" in e;
}
var V_ = class extends q {
	constructor(e, t) {
		if (super(t), this.sequence = mt(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e)), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = F(this.sequence.as) ?? "data", t = F(this.sequence.start) ?? 0, n = F(this.sequence.step) ?? 1, r = F(this.sequence.stop);
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
function H_(e, t) {
	let n = Nt(e, t.context.getSpecOrigin, [])?.origin, r = U_(e, t);
	return r.origin = n, r;
}
function U_(e, t) {
	if (kl(e)) return new Al(e, t);
	if (j_(e)) return new k_(e, t);
	if (B_(e)) return new V_(e, t);
	if (W_(e)) return Ps(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function W_(e) {
	return "lazy" in e;
}
//#endregion
//#region ../core/src/data/transforms/clone.js
var G_ = class extends M {
	get behavior() {
		return 1;
	}
	#e = Xm();
	constructor() {
		super({ type: "clone" }), this.handle = (e) => this._propagate(this.#e(e)), this.beginBatch = (e) => {
			this.#e.reset(), super.beginBatch(e);
		};
	}
};
//#endregion
//#region ../core/src/data/sources/namedSource.js
function K_(e) {
	return "name" in e;
}
var q_ = class extends q {
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
		Array.isArray(e) && e.length > 0 && (t = zl(e[0])), this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, J_ = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new Pm();
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
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof q ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof q_ && e === n.identifier) {
			if (t && t !== n) throw Error(`Named data "${e}" is ambiguous across scoped datasets. Use the dataset owner's ViewHandle.datasets.set() method.`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
	updateNamedDataBinding(e, t) {
		e.beginUpdate(), t === void 0 ? e.resetData() : e.setData(t);
		for (let t of this.#e.values()) t instanceof q_ && t.binding === e && t.loadSynchronously();
	}
};
//#endregion
//#region ../core/src/utils/trees.js
function Y_(e, t) {
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
function X_(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = X_(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function Z_(e, t) {
	return X_(e, t, (e) => e.children);
}
//#endregion
//#region ../core/src/view/multiscale.js
var Q_ = .5;
function $_(e) {
	return "multiscale" in e && Xt(e.multiscale);
}
function ev(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = tv(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => {
		if (e.multiscale.length === 1) return n;
		let i = {
			...rv(r, e.multiscale.length, t),
			layer: [n]
		};
		return t.transition && Jn(i, [{
			name: "multiscaleOpacity",
			expr: iv(r, e.multiscale.length, t),
			transition: t.transition
		}]), i;
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function tv(e, t) {
	let n = "unitsPerPixel", r, i = "auto", a = Q_, o;
	if (Xt(e)) r = nv(e, t, "stops");
	else if (I(e)) n = e.metric ?? "unitsPerPixel", r = nv(e.values, t, "stops.values"), i = e.channel ?? "auto", o = e.transition, a = o ? Q_ : e.fade ?? Q_;
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
		if (!R(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !r.some(R)) {
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
function nv(e, t, n) {
	if (!Xt(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!R(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function rv(e, t, n) {
	return n.transition ? { opacity: { expr: "multiscaleOpacity" } } : { opacity: ov(e, t, n) };
}
function iv(e, t, n) {
	let r = n.channel === "x" ? "width" : "height", i = `abs(span(domain('${n.channel}'))) / max(${r}, 1)`;
	return e === 0 ? i + " >= " + av(n.values[0]) + " ? 1 : 0" : e === t - 1 ? i + " < " + av(n.values.at(-1)) + " ? 1 : 0" : i + " < " + av(n.values[e - 1]) + " && " + i + " >= " + av(n.values[e]) + " ? 1 : 0";
}
function av(e) {
	return R(e) ? "(" + e.expr + ")" : String(e);
}
function ov(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: sv(e, 1 + n.fade),
		lo: sv(e, 1 - n.fade)
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
function sv(e, t) {
	return R(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region ../core/src/view/viewSpecGuards.js
function cv(e) {
	return "mark" in e && (vt(e.mark) || I(e.mark));
}
function lv(e) {
	return "layer" in e && I(e.layer);
}
function uv(e) {
	return cv(e) || lv(e) || $_(e);
}
function dv(e) {
	return "facet" in e && I(e.facet) && "spec" in e && I(e.spec);
}
function fv(e) {
	return "import" in e;
}
function pv(e) {
	return "vconcat" in e && Xt(e.vconcat);
}
function mv(e) {
	return "hconcat" in e && Xt(e.hconcat);
}
function hv(e) {
	return "concat" in e && Xt(e.concat);
}
function gv(e) {
	return "surround" in e && I(e.surround) && "spec" in e;
}
//#endregion
//#region ../core/src/view/flowBuilder.js
function _v(e, t, n, r) {
	let i = [], a = [], o, s = t ?? new J_(), c = [], l = r ?? (() => !0);
	function u(e, t = () => void 0) {
		if (!o) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return o.addChild(e), o = e, i.push(e), e;
	}
	function d(e, t) {
		return u(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function f(e, t) {
		e.behavior & 2 && t(new G_()), t(e);
	}
	function p(e, t) {
		for (let n of e) {
			if (vv(t)) {
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
				let i = sh(n);
				i && (r = m(i.data, i.transforms, t)), e = E_(n, t, r);
			} catch (e) {
				throw r && h(t, r.collector), console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			f(e, d), r && e.registerDisposer(() => h(t, r.collector));
		}
	}
	function m(e, t, n) {
		let r = K_(e) ? new q_(e, n) : H_(e, n), i = r;
		try {
			for (let e of t) {
				if (oh(e)) throw Error("Transforms with side inputs cannot be used in a side-input transform pipeline.");
				f(E_(e, n), (e) => {
					i.addChild(e), i = e;
				});
			}
		} catch (e) {
			throw r.disposeSubtree(), e;
		}
		let a = new af({ type: "collect" });
		return i.addChild(a), s.addDataSource(r), s.addCollector(a), n.flowHandle ??= {}, n.flowHandle.auxiliaryCollectors ??= /* @__PURE__ */ new Set(), n.flowHandle.auxiliaryCollectors.add(a), {
			collector: a,
			source: r
		};
	}
	function h(e, t) {
		e.flowHandle?.auxiliaryCollectors?.delete(t), s.pruneCollectorBranch(t), s.removeCollector(t);
	}
	function g() {
		return i.findLastIndex((e) => e instanceof Ae) > i.findLastIndex((e) => e instanceof q || e.createsNewIdentity);
	}
	let _ = (e) => {
		if (l(e)) {
			if (e.spec.data) {
				let t = e.flowHandle?.dataSource;
				t && t.view === e && !t.shareKey && s.removeDataSource(t);
				let n = K_(e.spec.data) ? new q_(e.spec.data, e) : H_(e.spec.data, e);
				o = n, i.push(n), s.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
			}
			if (e.spec.transform && p(e.spec.transform, e), dv(e.spec)) {
				let t = new af({
					type: "collect",
					groupby: e.getFacetFields()
				});
				u(t, () => /* @__PURE__ */ Error("A facet requires an inherited or own data source.")), s.addCollector(t), e.flowHandle ??= {}, e.flowHandle.collector = t;
			}
			if (e instanceof Y) {
				if (!o) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
				let t = bv(e);
				if (t) {
					c.push(t.rewrite);
					for (let e of t.transforms) d(e);
				}
				e.mark.requiresRecordIdentity() && !g() && (d(new G_()), d(new Ae({ type: "identifier" })));
				let n = new af({
					type: "collect",
					groupby: e.getLayoutAncestors().some((e) => dv(e.spec)) ? void 0 : e.getFacetFields(),
					sort: xv(e, t?.rewrittenEncoding)
				});
				u(n);
				let r = e.flowHandle?.collector;
				r && s.removeCollector(r), s.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
			}
			o && (e.flowHandle ??= {}, e.flowHandle.node = o);
		} else {
			let t = e.flowHandle?.node;
			if (t) {
				t !== o && (o = t, i.push(t));
				return;
			}
			if (e.spec.data || e.spec.transform || e instanceof Y) throw Error("Cannot reuse missing flow nodes for " + e.getPathString());
		}
	}, v = Y_(yv(e, n), (e) => e.dataParent);
	for (let e of v) Z_(e, {
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
function vv(e) {
	for (let t of e.getDataAncestors()) {
		if (t !== e && dv(t.spec)) return !0;
		if (t.spec.data) return !1;
	}
	return !1;
}
function yv(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return Kn;
		n.push(e);
	}), n;
}
function bv(e) {
	let t = [], n = {}, r = e.mark.encoding, i = e.getEncoding(), a = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		(nn(n) === n || n in i) && We(n) && !Array.isArray(t) && Rt(t) && a.push({
			channel: n,
			chromPosDef: t
		});
	}
	let o = Sn(a, (e) => nn(e.channel), (e) => e.chromPosDef.chrom);
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
		t.push(new G_()), t.push(new Vg({
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
			}, vr(e.mark, "encoding");
		}
	} : void 0;
}
function xv(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x, r = e.mark.encoding.x;
	if (yt(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (mn(n)) return yt(r) && "buildIndex" in r && r.buildIndex ? { field: n.field } : null;
		if (!St(n) && on(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
function Sv(e, ...t) {
	let n = e;
	for (let e of t) n.addChild(e), n = e;
	let r;
	n instanceof af ? r = n : (r = new af(), n.addChild(r));
	let i;
	return i = e instanceof q ? async () => (await e.load(), r.getData()) : async () => {
		throw Error("The root node is not derived from DataSource!");
	}, {
		dataSource: e,
		collector: r,
		loadAndCollect: i
	};
}
//#endregion
//#region ../core/src/data/flowOptimizer.js
function Cv(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!Cv(t, e)) return !1;
	return !0;
}
function wv(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof G_) {
		if (t) t = !1;
		else {
			let n = e.children[0];
			e.excise(), n && wv(n, t);
			return;
		}
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) wv(e.children[n], t || r > 1);
}
function Tv(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.shareKey && !n.has(e.shareKey) && n.set(e.shareKey, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.shareKey) {
		let t = n.get(e.shareKey);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function Ev(e) {
	if (wv(e), !Cv(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function Dv(e) {
	let t = Tv(e);
	for (let t of e.dataSources) Ev(t);
	return t;
}
//#endregion
//#region ../core/src/data/flowInit.js
var Ov = /* @__PURE__ */ new WeakMap(), kv = /* @__PURE__ */ new WeakMap();
function Av(e, t) {
	let n = Ov.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = kv.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => Av(e)).finally(() => {
			kv.delete(e);
		});
		return kv.set(e, i), i;
	}
	let r = Promise.resolve().then(() => (e.activate(), e.load())).finally(() => {
		Ov.delete(e);
	});
	return Ov.set(e, r), r;
}
function jv(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r);
	}
}
function Mv(e) {
	for (; e && !(e instanceof q);) e = e.parent;
	return e instanceof q ? e : void 0;
}
function Nv(e, t, n, r) {
	let i = r ?? (() => !0), a = zv(e, n).filter(i);
	if (a.length === 0) return {
		dataFlow: t,
		unitViews: [],
		dataSources: /* @__PURE__ */ new Set()
	};
	let o = new Set(a);
	for (let e of a) e._setDataInitializationState("pending");
	let s;
	try {
		s = _v(e, t, n, (e) => o.has(e)), jv(e, Dv(s));
	} catch (e) {
		for (let e of a) e._setDataInitializationState("none");
		throw e;
	}
	let c = Pv(a);
	for (let e of c) e.visit((e) => e.initializeOnce());
	let l = a.filter((e) => e instanceof Y);
	for (let e of a) for (let [t, n] of e.paramRuntime.paramConfigs) "select" in n && e.paramRuntime.findSelectionCapability(t);
	for (let e of l) {
		let t = e.mark;
		t.initializeEncoders(), e.registerDisposer(e.flowHandle.collector.observe((n) => {
			t.initializeData(), e.context.animator.requestRender();
		}));
	}
	for (let e of a) e._setDataInitializationState("ready");
	let u = new Set(l.flatMap((e) => Object.values(e.mark.encoders).flatMap(Zt).filter(he).map((t) => e.getScaleResolution(t.scaleChannel))));
	for (let e of u) e.bindDomainInputs();
	return {
		dataFlow: s,
		unitViews: l,
		dataSources: c
	};
}
function Pv(e, t) {
	let n = Array.isArray(e) ? e : zv(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource), Lv(e, r);
	}
	return r;
}
function Fv(e, t) {
	let n = /* @__PURE__ */ new Set();
	return Iv(e, n, t), e.visit((e) => {
		if (t && !t(e)) return Kn;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), Kn;
	}), n;
}
function Iv(e, t, n) {
	for (let r of zv(e, n)) Lv(r, t);
}
function Lv(e, t) {
	for (let n of e.flowHandle?.auxiliaryCollectors ?? []) {
		let e = Mv(n);
		e && t.add(e);
	}
}
function Rv(e, t, n, r) {
	t ||= Fv(e, n);
	let i = /* @__PURE__ */ new Set();
	Iv(e, i, n);
	let a = Array.from(t).filter((e) => i.has(e)), o = Array.from(t).filter((e) => !i.has(e));
	return Promise.all(a.map((e) => Av(e, r))).then((e) => Promise.all(o.map((e) => Av(e, r))).then((t) => e.concat(t))).then((t) => (Bv(e), t));
}
function zv(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return Kn;
		n.push(e);
	}), n) : e.getDescendants();
}
function Bv(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region ../core/src/genomeSpy/viewDataInit.js
async function Vv(e, t, n, r) {
	let i = (e) => e.isConfiguredVisible(), { dataFlow: a } = Nv(e, t, i);
	return r(a), await n.waitUntilReady(), e.invalidateSizeCache(), await Rv(e, new Set(a.dataSources), i), a;
}
async function Hv(e, t, n) {
	return Uv(e, t, n, Wv(e, (e) => e.isConfiguredVisible()).filter((e) => e.getDataInitializationState() === "none"));
}
async function Uv(e, t, n, r) {
	let i = new Set(r), a = (e) => e.isConfiguredVisible(), o = Wv(e, a).filter((e) => i.has(e) && e.getDataInitializationState() === "none");
	if (o.length === 0) return t;
	let s = new Set(o), c = (e) => s.has(e), l = /* @__PURE__ */ new Set(), u = [];
	for (let e of o) {
		if (e.spec.data || e.spec.transform?.some(oh)) {
			u.push(e);
			continue;
		}
		let t = Kv(e);
		t ? l.add(t) : u.push(e);
	}
	let { dataFlow: d } = Nv(e, t, a, c);
	await n.waitUntilReady(), e.invalidateSizeCache();
	for (let e of l) e.repropagate();
	if (u.length) {
		let e = Gv(u);
		await Promise.all(Array.from(e.entries()).map(([e, t]) => Rv(e, t, void 0, { queueReload: !0 })));
	}
	return Bv(e), d;
}
function Wv(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return Kn;
		n.push(e);
	}), n;
}
function Gv(e) {
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
			let t = Mv(e);
			t && r.add(t);
		}
	}
	return t;
}
function Kv(e) {
	let t = e.dataParent;
	for (; t;) {
		let e = t.flowHandle?.collector;
		if (e) return e.completed ? e : void 0;
		t = t.dataParent;
	}
}
//#endregion
//#region ../core/src/genome/genomeStore.js
var qv = class {
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
			let e = Jv(r);
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
			return new Ff({ name: e });
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
		let r = new Ff({
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
			let n = new Ff({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new Ff({
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
		let r = new Ff({
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
function Jv(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
//#endregion
//#region ../core/src/tooltip/refseqGeneTooltipHandler.js
var Yv = /* @__PURE__ */ new Map(), Xv = { Organism: "Homo sapiens" };
async function Zv(e, t, n = {}) {
	let r = e.symbol, i = {
		...Xv,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = Yv.get(r) ?? await ey(i);
	return a ? (Yv.set(r, a), U`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function Qv(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: ty(e),
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
var $v = cl(Qv, 500);
function ey(e) {
	return $v(e);
}
function ty(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region ../core/src/utils/formatObject.js
var ny = L(".4~r"), ry = L(".4~e");
function iy(e) {
	return e == null ? U` <span class="na">NA</span> ` : vt(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : tn(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? ry(e) : ny(e) : ft(e) ? e ? "True" : "False" : Xt(e) ? U`${e.map((t, n) => [iy(t), n < e.length - 1 ? ", " : W])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region ../core/src/tooltip/flattenDatumRows.js
function ay(e) {
	let t = [];
	return oy(Object.entries(e), t), t;
}
function oy(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? oy(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region ../core/src/tooltip/configuredTooltipRows.js
var sy = /* @__PURE__ */ new WeakMap();
function cy(e, t) {
	let n = t.encoding.tooltip;
	if (n === void 0) return;
	if (n === null) return [];
	let r = Array.isArray(n) ? n : [n];
	if (r.length === 0) throw Error("The tooltip channel array must not be empty.");
	return r.map((n) => ly(e, t, n));
}
function ly(e, t, n) {
	let r = uy(t, n), i = r(e), a = "format" in n && n.format && typeof i == "number" && Number.isFinite(i) ? L(n.format)(i) : i;
	return {
		key: dy(n),
		value: a,
		...r.sourceField ? { sourceField: r.sourceField } : {},
		...a === i ? {} : { formatted: !0 }
	};
}
function uy(e, t) {
	let n = sy.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), sy.set(e, n));
	let r = n.get(t);
	if (r) return r;
	let i = Ve("tooltip", t, e.unitView.paramRuntime);
	return "field" in t && (i.sourceField = t.field), n.set(t, i), i;
}
function dy(e) {
	if ("title" in e && e.title !== void 0) return e.title === null ? "" : e.title;
	if ("field" in e) return e.field;
	if ("expr" in e) return e.expr;
	if ("datum" in e) return "datum";
	if ("value" in e) return "value";
	throw Error("Invalid tooltip channel definition: " + JSON.stringify(e));
}
//#endregion
//#region ../core/src/tooltip/tooltipContext.js
var fy = {
	x: "x2",
	y: "y2"
}, py = /* @__PURE__ */ new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), my = /* @__PURE__ */ new WeakMap();
function hy(e, t, n, r) {
	let i = gy(t), a = vy("x", e, t, i, Ay(n, "x")), o = vy("y", e, t, i, Ay(n, "y")), s = a.rows.length > 0 && o.rows.length > 0, c = [...s ? _y("x", a.rows) : a.rows, ...s ? _y("y", o.rows) : o.rows], l = /* @__PURE__ */ new Set();
	for (let n of [a, o]) for (let r of n.usedLinearizedFields) {
		let n = i.get(r);
		n && !n.ambiguous && jy(e, r, n, t) && (l.add(n.chrom), l.add(n.pos));
	}
	return {
		facetId: r?.slice(),
		tooltipRows: cy(e, t),
		hiddenRowKeys: [...l],
		genomicRows: c,
		flattenDatumRows: () => ay(e),
		formatGenomicLocus: (e, n) => Dy(t, e, n),
		formatGenomicInterval: (e, n) => Oy(t, e, n)
	};
}
function gy(e) {
	let t = my.get(e);
	if (t) return t;
	let n = Ty(e);
	return my.set(e, n), n;
}
function _y(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function vy(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = wy(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = wy(n, fy[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? yy(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = xy(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: Dy(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: Dy(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: Oy(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: Dy(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function yy(e, t, n) {
	if (!t || e.value === t.value) return "locus";
	let r = by(e.field, n), i = by(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function by(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function xy(e, t, n) {
	let r = Sy(e.field, n), i = Sy(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function Sy(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = Cy(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function Cy(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function wy(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = pt(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function Ty(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = P(e.as), i = P(e.pos), a = Ey(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
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
function Ey(e, t) {
	let n = P(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function Dy(e, t, n) {
	return ky(e, t)?.formatLocus(n);
}
function Oy(e, t, n) {
	return ky(e, t)?.formatInterval(n);
}
function ky(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function Ay(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!py.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function jy(e, t, n, r) {
	let i = ky(r, n.channel);
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
async function My(e, t, n, r) {
	let i = (e) => pn(e).join("."), a = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), o = (e, n, r) => {
		for (let [o, s] of Object.entries(t.encoders)) {
			let t = s ? pt(s)?.fields : void 0;
			if (t && t.some((t) => t === e || i(t) === e)) switch (o) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? a(n) ? U`
                                <span
                                    class="color-legend color-legend-unmapped"
                                ></span>
                            ` : "" : U`
                                <span
                                    class="color-legend"
                                    style=${"background-color: " + String(e)}
                                ></span>
                            `;
				}
			}
		}
		return "";
	}, s = r ?? hy(e, t, n), c = s.tooltipRows ? s.tooltipRows : s.flattenDatumRows ? s.flattenDatumRows() : ay(e), l = s.genomicRows ?? [], u = new Set(s.hiddenRowKeys ?? []), d = c.filter((t) => !u.has(t.key) || o(t.sourceField ?? t.key, t.value, e)), f = [...l, ...d];
	if (!f.length) return;
	let p = U`
        <table class="attributes">
            ${f.map((t) => {
		let n = t.formatted ? t.value : iy(t.value), r = o(t.sourceField ?? t.key, t.value, e);
		return U`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, m = t.unitView.getTitleText();
	return U`${m ? U`
              <div class="title">
                  <strong>${m}</strong>
              </div>
          ` : ""}${p}`;
}
//#endregion
//#region ../core/src/genome/assemblyPreflight.js
function Ny(e) {
	let t = [], n = !1, r = Fy(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function Py(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = Ny(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function Fy(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), Qn(e, r), t;
}
//#endregion
//#region ../core/src/scales/viewLevelScaleProps.js
function Iy(e) {
	let t = [];
	for (let n of e.getDescendants()) {
		let e = n.spec.scales;
		if (e) for (let [r, i] of Object.entries(e)) t.push(zy(n, r, i));
	}
	return t;
}
function Ly(e) {
	Ry(e);
	for (let t of Iy(e)) {
		let { view: e, channel: n, props: r } = t;
		if (t.resolution ??= zy(e, n, r).resolution, !t.resolution && r.type && r.type !== "null") {
			let t = new qp(n, e);
			t.type = r.type === "locus" || r.type === "index" ? r.type : j(r.type) ? "nominal" : "quantitative", e.resolutions.scale[n] = t;
		}
	}
	let t = Iy(e);
	for (let e of t) e.resolution && e.resolution.attachViewLevelScaleProps(e.view, e.props);
	return t;
}
function Ry(e) {
	let t = new Set(e.getDescendants()), n = Vy(e);
	for (let e of n) {
		let n = e.getViewLevelScaleProps();
		n && t.has(n.view) && !e.isExplicitlyOwned() && e.clearViewLevelScaleProps(n.view);
	}
}
function zy(e, t, n) {
	let r = By(e, t);
	if (r.size > 1) throw Error(`View-level scales.${t} maps to multiple scale resolutions. Move scales.${t} closer to the intended subtree or configure scale resolution explicitly.`);
	return {
		view: e,
		channel: t,
		props: n,
		resolution: r.values().next().value
	};
}
function By(e, t) {
	let n = /* @__PURE__ */ new Set();
	return Zn(e, (r) => {
		if (r !== e && (r.isResolutionBoundary(t) || r.getConfiguredOrDefaultResolution(t, "scale") === "excluded")) return Kn;
		let i = r.getScaleResolution(t);
		i && n.add(i);
	}), n;
}
function Vy(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e.getDescendants()) for (let e of Object.values(n.resolutions.scale)) t.add(e);
	return t;
}
//#endregion
//#region ../core/src/scales/viewLevelGuideProps.js
var Hy = {
	declarationKey: "axes",
	resolutionType: "axis",
	getResolution: (e, t) => e.getAxisResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.axis),
	attach: (e, t, n) => e.attachViewLevelAxisProps(t, n),
	getAttachedProps: (e) => e.getViewLevelAxisProps(),
	clear: (e, t) => e.clearViewLevelAxisProps(t)
}, Uy = {
	declarationKey: "legends",
	resolutionType: "legend",
	getResolution: (e, t) => e.getLegendResolution(t),
	getAllResolutions: (e) => Object.values(e.resolutions.legend),
	attach: (e, t, n) => e.attachViewLevelLegendProps(t, n),
	getAttachedProps: (e) => e.getViewLevelLegendProps(),
	clear: (e, t) => e.clearViewLevelLegendProps(t)
};
function Wy(e) {
	return Zn(e, (e) => {
		for (let t of Object.keys(e.spec.axes ?? {})) {
			let n = e.getScaleResolution(t);
			n && Em(ym(e, "axis", t), t, n);
		}
	}), qy(e, Hy);
}
function Gy(e) {
	return qy(e, Uy);
}
function Ky(e) {
	Zy(e, Hy), Zy(e, Uy);
}
function qy(e, t) {
	Zy(e, t);
	let n = Jy(e, t);
	for (let e of n) e.resolution && t.attach(e.resolution, e.view, e.props);
	return n;
}
function Jy(e, t) {
	let n = [];
	for (let r of e.getDescendants()) {
		let e = r.spec[t.declarationKey];
		if (e) for (let [i, a] of Object.entries(e)) n.push(Yy(r, t, i, a));
	}
	return n;
}
function Yy(e, t, n, r) {
	let i = Xy(e, t, n);
	if (i.size > 1) throw Error(`View-level ${t.declarationKey}.${n} maps to multiple ${t.resolutionType} resolutions. Move ${t.declarationKey}.${n} closer to the intended subtree or configure ${t.resolutionType} resolution explicitly.`);
	return {
		view: e,
		channel: n,
		props: r,
		resolution: i.values().next().value
	};
}
function Xy(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	return Zn(e, (i) => {
		if (i !== e && (i.isResolutionBoundary(n) || i.getConfiguredOrDefaultResolution(n, t.resolutionType) === "excluded")) return Kn;
		let a = t.getResolution(i, n);
		a && r.add(a);
	}), r;
}
function Zy(e, t) {
	let n = new Set(e.getDescendants()), r = Qy(e, t);
	for (let e of r) {
		let r = t.getAttachedProps(e);
		r && n.has(r.view) && t.clear(e, r.view);
	}
}
function Qy(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e.getDescendants()) for (let e of t.getAllResolutions(r)) n.add(e);
	return n;
}
//#endregion
//#region ../core/src/genomeSpy/viewHierarchyConfig.js
function $y(e) {
	Wm(e), Gm(e);
}
function eb(e) {
	tb(e.getDescendants());
}
function tb(e) {
	e = Array.from(e);
	for (let t of e) for (let e of Object.values(t.resolutions.scale)) e.initializeScale();
	for (let t of e) t.configurePostScaleParams(), t.configureViewOpacity(), t.finalizeParamRuntimeInitialization();
}
//#endregion
//#region ../core/src/view/containerMutationHelper.js
var nb = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n } = this.options, r = t ?? n.length, i = this.container.getNextAutoName(this.options.namePrefix), a = !1, o = !1, s = this.options.specValidator ? dt(e) : e;
		fv(s) || this.options.specValidator?.(s);
		let c = await this.container.context.createOrImportView(s, this.container, this.container, i, this.options.specValidator, this.options.createViewOptions);
		try {
			n.splice(r, 0, e), a = !0;
			let t = this.options.insertView(c, r);
			o = !0, Ly(this.container), Wy(this.container), Gy(this.container), await Py(c, this.container.context.genomeStore);
			let i = await this.options.syncMutationGuideViews?.(t), s = new Set(c.getDescendants());
			for (let e of i ?? [this.container]) rb(e, s);
			tb(s), await Uv(this.container, this.container.context.dataFlow, this.container.context.textMetrics, s);
		} catch (e) {
			throw o ? await this.#e(r, e) : a && n.splice(r, 1), e;
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
		Ry(this.container), Ky(this.container), this.options.removeView(e), this.options.specs.splice(e, 1), Ly(this.container), Wy(this.container), Gy(this.container);
		let n = await this.options.syncMutationGuideViews?.();
		await this.initializeUninitializedChromeViews(n), t.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
	}
	async initializeUninitializedChromeViews(e = [this.container]) {
		if (this.container.getDataInitializationState() === "none") return;
		let t = /* @__PURE__ */ new Set();
		for (let n of e) rb(n, t);
		tb(t), await Uv(this.container, this.container.context.dataFlow, this.container.context.textMetrics, t);
	}
};
function rb(e, t = /* @__PURE__ */ new Set()) {
	for (let n of e.getDescendants()) if (lr(n) && n.getDataInitializationState() === "none") for (let e of n.getDescendants()) e.getDataInitializationState() === "none" && t.add(e);
	return t;
}
//#endregion
//#region ../core/src/view/layerView.js
var X = class extends Mr {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		this.#e = await Promise.all(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!uv(e)) throw new br("LayerView accepts only unit, layer, or multiscale specs as children!", this);
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
		xe(this.spec.layer, e, t), xe(this.#e, e, t), this.context.requestLayoutReflow();
	}
	#t() {
		return new nb(this, {
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
}, ib = class {
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
}, ab = {
	x: "axisX",
	y: "axisY"
}, ob = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, sb = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function cb(e, { channel: t, orient: n, type: r, style: i }) {
	let a = Qp();
	for (let [o, s] of e.entries()) {
		let c = ab[t], l = n ? ob[n] : void 0, u = r ? sb[r] : void 0, d = e.slice(0, o + 1), f = [
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
var lb = "chromosome_ticks_and_labels", ub = "labels_main", db = "ticks_and_labels", fb = "axisExtent", pb = "domainGapsEnabled", mb = "labelWidth", hb = "labelVisible", gb = "labelOffset", _b = "chromLabelWidth", vb = 4, yb = 5, bb = 10, xb = 2;
function Sb(e) {
	return e == "x" ? "y" : "x";
}
var Cb = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, wb = {
	bottom: "x",
	top: "x",
	left: "y",
	right: "y"
};
function Tb(e) {
	return wb[e];
}
function Eb(e) {
	switch (e) {
		case "left": return "right";
		case "right": return "left";
		case "top": return "bottom";
		case "bottom": return "top";
		default: throw Error("Invalid axis orient: " + e);
	}
}
function Db(e) {
	let t = e.placement === "inside" ? Eb(e.orient) : e.orient;
	return {
		tickSide: t,
		anchor: +(t == "bottom" || t == "left"),
		offsetDirection: t == "bottom" || t == "right" ? 1 : -1
	};
}
function Ob(e) {
	return !e || e.axisProps.placement === "inside" ? 0 : Math.max(e.getPerpendicularSize() + (e.axisProps.offset ?? 0), 0);
}
var kb = class extends X {
	#e;
	#t;
	#n;
	#r;
	#i = !1;
	#a = !1;
	constructor(e, t, n, r, i, a) {
		let o = Tb(e.orient), s = i.getScaleResolution(o), c = s.isZoomable(), l = s.hasConfiguredZoomExtent(), u = cb(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), d = ju(i.getConfigScopes(), "text", void 0), f = {
			...u,
			...e
		}, p = t == "locus", m = {
			...u,
			...Lb(t, f),
			...e,
			...p ? Ib(f) : {}
		}, h = p ? Ub(m, t, d, c, l) : Hb(m, t, c, l, a?.labelClipPolicy ?? "pixel", d), g = m.domain && s.hasGroupingGaps();
		if (g) {
			let e = h.layer[0];
			h.layer[0] = {
				name: "domain",
				layer: [{
					...e,
					name: "continuous",
					transform: [{
						type: "filter",
						expr: "!domainGapsEnabled"
					}]
				}, {
					...e,
					name: "groups",
					data: { lazy: {
						type: "scaleGroups",
						channels: [o]
					} },
					transform: [{
						type: "filter",
						expr: pb
					}],
					mark: {
						...e.mark,
						clamp: o
					},
					encoding: {
						[o]: {
							field: o + "Start",
							type: t,
							band: 0,
							[wr]: o + "2"
						},
						[o + "2"]: {
							field: o + "End",
							band: 0,
							[wr]: o
						}
					}
				}]
			};
		}
		if (super(h, n, r, i, `axis_${e.orient}`, a), this.labelClipPolicy = a?.labelClipPolicy ?? "pixel", this.axisProps = m, this.#e = jb(m), this.#t = this.paramRuntime.allocateSetter(fb, this.#e), g) {
			let e = this.paramRuntime.allocateSetter(pb, !1);
			this.#n = () => {
				let t = s.getMappingRef();
				e(Qe(t.get())), this.registerDisposer(this.paramRuntime.effect([t], () => e(Qe(t.get()))));
			};
		}
		V(this, { skipSubtree: !0 }), Yn(this, { skipSubtree: !0 });
	}
	configurePostScaleParams() {
		super.configurePostScaleParams(), this.#n?.(), this.#n = void 0;
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof Y && e.name === ub);
		e instanceof Y && (this.#r = e), this.axisProps.labels && this.#r && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#s()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return wb[this.axisProps.orient] == "x" ? new En(t, e) : new En(e, t);
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
		let e = Tb(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !Ab(t.getScale())) return;
		let n = Fb(this.axisProps, this.#r);
		if (n === void 0) return;
		let r = jb(this.axisProps, n);
		r >= this.#e + xb && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function Ab(e) {
	let t = e.domain();
	return A(e.type) ? t.length >= 2 && t.every((e) => Number.isFinite(Number(e))) && t.some((e) => Number(e) !== Number(t[0])) : t.length > 0;
}
function jb(e, t) {
	let n = Mb(e);
	return e.labels && (n += t ?? Nb(e)), Pb(e, n);
}
function Mb(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function Nb(e) {
	return Tb(e.orient) == "x" ? e.labelFontSize : bb;
}
function Pb(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function Fb(e, t) {
	let n = t?.getCollector();
	if (!n?.completed) return;
	let r = 0;
	n.visitData((e) => {
		r = Math.max(r, Number(e[mb]) || 0);
	});
	let i = t.mark, a = i.fontMeasurement.getHeight(Number(i.properties.size)), o = id({
		width: r,
		height: a
	}, e.labelAngle, Tb(e.orient) == "x" ? "vertical" : "horizontal");
	return Math.ceil(o);
}
function Ib(e) {
	switch (Db(e).tickSide) {
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
function Lb(e, t) {
	let n = Db(t).tickSide, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
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
function Rb(e, t) {
	let n = t.labelAngle % 90 == 0, r = t.labelOverlap;
	if (r === void 0) return Vb(e) && n ? "auto" : !1;
	if (r === !1) return !1;
	if (n) return r === !0 ? "parity" : r;
	throw Error("Axis label overlap removal requires an axis-aligned label angle.");
}
function zb(e, t, n) {
	let r = t.labelAngle % 90 == 0, i = t.labelFlush;
	if (i === void 0) return Tb(t.orient) == "x" && Vb(e) && !n && r ? 1 : !1;
	if (i === !1) return !1;
	if (!Vb(e)) throw Error("Axis label flushing requires a quantitative, index, or locus axis.");
	if (r) return i === !0 ? 1 : i;
	throw Error("Axis label flushing requires an axis-aligned label angle.");
}
function Bb(e, t, n, r) {
	return t.labelFlush !== !1 && Tb(t.orient) == "x" && Vb(e) && t.labelAngle % 90 == 0 && n && r;
}
function Vb(e) {
	switch (e) {
		case "quantitative":
		case "index":
		case "locus": return !0;
		case "nominal":
		case "ordinal": return !1;
		default: throw Error("Invalid axis field type: " + e);
	}
}
function Hb(e, t, n, r, i = "pixel", a = {}, o) {
	let s = e, c = Wb(s.labelFont, s.labelFontStyle, s.labelFontWeight, s.labelFontSize, a), l = Rb(t, s), u = zb(t, s, n), d = Bb(t, s, n, r), f = !!o || !!l || u !== !1 || d, p = Tb(s.orient), m = Sb(p), { anchor: h, offsetDirection: g, tickSide: _ } = Db(s), v = () => ({
		field: "value",
		type: t
	}), y = () => {
		let e = [{
			type: "measureText",
			field: "label",
			as: mb,
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
				as: _b,
				fontSize: t.size,
				font: t.font,
				fontStyle: t.fontStyle,
				fontWeight: t.fontWeight
			});
		}
		return f && e.push({
			type: "axisLabelLayout",
			channel: p,
			labelWidth: mb,
			labelFontSize: c.size,
			labelAngle: s.labelAngle,
			labelAlign: s.labelAlign,
			labelBaseline: s.labelBaseline,
			labelFlush: u,
			labelFlushZoomExtent: d,
			labelFlushOffset: s.labelFlushOffset ?? 0,
			labelOffset: gb,
			labelOverlap: l,
			labelSeparation: s.labelSeparation ?? 2,
			labelVisible: hb,
			...o ? {
				chromLabelWidth: _b,
				chromLabelAlign: o.align,
				chromLabelPadding: o.padding,
				chromLabelSpacing: yb
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
			name: db,
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
				[m + "2"]: { value: { expr: `${h} - ${s.tickSize} / ${fb} * ${h ? 1 : -1}` } }
			}
		}), s.labels && e.layer.push({
			name: ub,
			transform: f ? [{
				type: "filter",
				expr: `datum.${hb}`
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
					field: gb,
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
function Ub(e, t, n = {}, r = !0, i = !1) {
	let a = e, o = Wb(a.chromLabelFont, a.chromLabelFontStyle, a.chromLabelFontWeight, a.chromLabelFontSize, n), s = Tb(a.orient), c = Sb(s), { anchor: l, tickSide: u } = Db(a), d = {
		textStyle: o,
		align: u == "right" ? "left" : a.chromLabelAlign,
		padding: vb
	}, f = Hb({
		...e,
		...Ib(e)
	}, t, r, i, "pixel", n, e.chromLabels ? d : void 0);
	if (e.chromTicks || e.chromLabels) {
		let n = {
			name: lb,
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
				[c + "2"]: { expr: `${l} - ${a.chromTickSize} / ${fb} * ${l ? 1 : -1}` },
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
function Wb(e, t, n, r, i) {
	return {
		font: e ?? i.font,
		fontStyle: t ?? i.fontStyle,
		fontWeight: n ?? i.fontWeight,
		size: r ?? i.size
	};
}
//#endregion
//#region ../core/src/view/interactionRouting.js
function Gb(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function Kb(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region ../core/src/utils/ringBuffer.js
var qb = class {
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
function Jb(e, t) {
	switch (e.deltaMode) {
		case 0: return e.deltaY;
		case 1: return e.deltaY * 16;
		case 2: return e.deltaY * t;
		default: throw Error("Unknown wheel delta mode: " + e.deltaMode);
	}
}
function Yb(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function Xb(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function Zb(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function Qb(e) {
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
function $b({ onMove: e, onFinish: t, onRelease: n, hoverContext: r }) {
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
}, ex = 0, tx = /* @__PURE__ */ new WeakMap(), nx = fx(), rx = 6;
function ix() {
	ex = performance.now();
}
function ax() {
	return performance.now() - ex < 50;
}
function ox(e) {
	tx.get(e)?.smoother?.stop();
}
function sx(e) {
	return function(...t) {
		return ix(), e(...t);
	};
}
function cx(e, t, n, r, i, { lockAxis: a = !1 } = {}) {
	n = sx(n);
	let o = px(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, a = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		o.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = lx(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = ux(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - ux(e.y, r.datum)) * t.height + t.y);
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
		let t = new qb(30), r = e.mouseEvent;
		r.preventDefault();
		let s = Z.fromMouseEvent(r), c = s, l, u = (e) => (l === "x" ? e.yDelta = 0 : l === "y" && (e.xDelta = 0), n(e));
		return $b({
			onMove: (e) => {
				let n = Z.fromMouseEvent(e);
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
			onRelease: () => hx(o, t, s, u, i, { minSampleCount: 5 })
		});
	} else if (e.type == "touchgesture") {
		if (!Yb(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: a, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && hx(o, o.touchPanEventBuffer, o.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), mx(o);
			return;
		}
		o.touchPanPointerCount !== t.pointerCount && (mx(o), o.touchPanPointerCount = t.pointerCount);
		let c = new Z(e.point.x + r, e.point.y + a);
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
function lx(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = ux(r.x, n.datum) * t.width + t.x, s = (1 - ux(r.y, n.datum)) * t.height + t.y, c = ux(r.x2, n.datum) * t.width + t.x, l = (1 - ux(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, rx) : rx, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function ux(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = dx(e.channelDef);
	return n + (Number.isFinite(i) ? fr(r, i) : 0);
}
function dx(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function fx() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new qb(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function px(e) {
	if (!e) return nx;
	let t = tx.get(e);
	return t || (t = fx(), tx.set(e, t)), t;
}
function mx(e) {
	e.touchPanEventBuffer = new qb(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function hx(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && gx(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = Pn(i, (e) => {
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
function gx(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region ../core/src/view/axisGridView.js
var _x = class extends X {
	constructor(e, t, n, r, i, a) {
		super(xx(e, t), n, r, i, `axisGrid_${e.orient}`, a), this.axisProps = e, V(this, { skipSubtree: !0 }), Yn(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function vx(e, t) {
	let n = e, r = Tb(n.orient);
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
function yx(e, t) {
	let n = e, r = Tb(n.orient);
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
function bx(e, t) {
	let n = e, r = Tb(n.orient);
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
function xx(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push(bx(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(yx(n, t)), n.grid && n.gridOpacity > 0 && r.push(vx(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[Tb(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region ../core/src/config/titleConfig.js
function Sx(e) {
	return z(e.map((e) => e.title));
}
function Cx(e, t) {
	return Au(e, t);
}
//#endregion
//#region ../core/src/view/titleView.js
var wx = {
	start: 0,
	middle: .5,
	end: 1
}, Tx = {
	start: "left",
	middle: "center",
	end: "right"
}, Ex = "group-title", Dx = "group-subtitle";
function Ox(e) {
	return Ax({
		subtitleColor: e.color,
		subtitleFont: e.font,
		subtitleFontSize: e.fontSize,
		subtitleFontStyle: e.fontStyle,
		subtitleFontWeight: e.fontWeight
	});
}
function kx(e) {
	return Ax({
		subtitleColor: e.subtitleColor,
		subtitleFont: e.subtitleFont,
		subtitleFontSize: e.subtitleFontSize,
		subtitleFontStyle: e.subtitleFontStyle,
		subtitleFontWeight: e.subtitleFontWeight,
		subtitlePadding: e.subtitlePadding
	});
}
function Ax(e) {
	return Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
function jx(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = wx[e.anchor ?? "middle"];
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
function Mx(e, t = [], n = {}) {
	if (!e) return;
	let r = vt(e) ? { text: e } : e;
	if (!r.text) return;
	let i = Sx(t), a = Cx(t, r.style ?? Ex), o = Ox(Cx(t, Dx)), s = {
		...i,
		...n,
		...a,
		...o,
		...kx(i),
		...r
	};
	if (s.orient == "none") return;
	let { orientConfig: c } = jx(s);
	return {
		...i,
		...c,
		...n,
		...a,
		...o,
		...kx(i),
		...r
	};
}
function Nx(e, t) {
	let n = e.subtitle ? Ux(e, t) + (e.subtitlePadding ?? 0) : 0, r = e.offset + (Fx(e.orient) ? n : 0);
	return Ix(e.orient, r);
}
function Px(e, t) {
	let n = Hx(e, t) + (e.subtitlePadding ?? 0), r = e.offset + (Fx(e.orient) ? 0 : n);
	return Ix(e.orient, r);
}
function Fx(e) {
	switch (e) {
		case "top":
		case "left": return !0;
		case "right":
		case "bottom": return !1;
		default: return !1;
	}
}
function Ix(e, t) {
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
function Lx(e, t) {
	return nd(t.textMetrics, e ?? {});
}
function Rx(e, t) {
	return nd(t.textMetrics, Kx(e));
}
function zx(e, t) {
	Lx(e, t), e.subtitle && Rx(e, t);
}
function Bx(e, t, n = 1) {
	if (!e || e.reserve === !1 || e.orient == "none" || e.offset < 0) return B.zero();
	let r = Vx(e, t), i = Math.ceil(r * n + Math.max(e.offset ?? 0, 0));
	switch (e.orient) {
		case "top": return new B(i, 0, 0, 0);
		case "right": return new B(0, i, 0, 0);
		case "bottom": return new B(0, 0, i, 0);
		case "left": return new B(0, 0, 0, i);
		default: return B.zero();
	}
}
function Vx(e, t) {
	let n = Hx(e, t);
	if (!e.subtitle) return n;
	let r = Ux(e, t);
	return n + (e.subtitlePadding ?? 0) + r;
}
function Hx(e, t) {
	let n = Lx(e, t), r = Wx(e.fontSize, 12);
	return Gx(e, e.text, n, r);
}
function Ux(e, t) {
	let n = Rx(e, t), r = Wx(e.subtitleFontSize, 11);
	return Gx(e, e.subtitle, n, r);
}
function Wx(e, t) {
	return R(e) ? t : e ?? t;
}
function Gx(e, t, n, r) {
	let i = R(e.angle) ? 0 : e.angle ?? 0, a = e.orient == "top" || e.orient == "bottom" ? "vertical" : "horizontal";
	return id(qx(t, n, r), i, a);
}
function Kx(e) {
	return {
		font: e.subtitleFont,
		fontStyle: e.subtitleFontStyle,
		fontWeight: e.subtitleFontWeight
	};
}
function qx(e, t, n) {
	return rd(t, typeof e == "string" ? e : String(e.expr), n);
}
function Jx(e, t, n, r) {
	return {
		type: "text",
		tooltip: null,
		clip: !1,
		...t,
		...n,
		text: r ? e.subtitle : e.text,
		align: e.align ?? Tx[e.anchor ?? "middle"],
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
function Yx(e, t) {
	let { xy: n } = jx(e), r = [{
		name: "title",
		data: { values: [{}] },
		mark: Jx(e, n, Nx(e, t), !1)
	}];
	return e.subtitle && r.push({
		name: "subtitle",
		data: { values: [{}] },
		mark: Jx(e, n, Px(e, t), !0)
	}), r;
}
function Xx(e, t, n) {
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
var Zx = class e extends Mr {
	#e;
	titleSpec;
	static create(t, n, r, i, a, o, s) {
		let c = Mx(t, n);
		return c ? new e(c, r, i, a, o, s) : void 0;
	}
	constructor(e, t, n, r, i, a) {
		zx(e, t);
		let o = Yx(e, t);
		super({ layer: [] }, t, n, r, i, a), this.titleSpec = e, V(this, { skipSubtree: !0 }), Yn(this, { skipSubtree: !0 }), this.#e = o.map((e, n) => new Y(e, t, this, r, i + "-" + (e.name ?? n)));
	}
	*[Symbol.iterator]() {
		yield* this.#e;
	}
	getOverhang() {
		return Bx(this.titleSpec, this.context);
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isConfiguredVisible()) {
			e.pushView(this, t);
			for (let r of this.#e) r.arrange(e, t, n);
			e.popView(this);
		}
	}
}, Qx = class extends Y {
	#e;
	#t = H.ZERO;
	#n = H.ZERO;
	#r = H.ZERO;
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
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t, { chrome: !0 }), V(this, { skipSubtree: !0 }), this.config = r, this.#e = t, this.#i = n.onViewportOffsetChange, this.registerDisposer(() => this.#a());
		let i = this.config.scrollbarPadding, a = this.config.scrollbarSize;
		this.#t = this.#e == "vertical" ? new H(() => this.#n.x + this.#n.width - a - i, () => this.#n.y + i + this.scrollOffset, () => a, () => this.#c()) : new H(() => this.#n.x + i + this.scrollOffset, () => this.#n.y + this.#n.height - a - i, () => this.#c(), () => a), this.#p(this.viewportOffset), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#l() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault();
			let r = this.scrollOffset, i = n(e.mouseEvent), a = (e) => {
				let t = this.#l();
				if (t <= 0) return;
				let a = _t(n(e) - i + r, 0, t);
				this.interpolateViewportOffset({ x: this.#d(a) });
			};
			this.#a = $b({
				onMove: a,
				hoverContext: this.context
			});
		});
	}
	get scrollOffset() {
		return this.#u(this.viewportOffset);
	}
	canScroll() {
		return this.#f() > 0;
	}
	getWheelScroll(e) {
		let t = Jb(e, this.#n.height), n = _t(this.viewportOffset + t, 0, this.#f());
		if (n !== this.viewportOffset) return () => {
			this.interpolateViewportOffset.stop(), this.setViewportOffset(n, { syncSmoother: !0 }), this.context.animator.requestRender();
		};
	}
	setViewportOffset(e, { notify: t = !0, syncSmoother: n = !1 } = {}) {
		this.viewportOffset = _t(e, 0, this.#f()), n && this.#p(this.viewportOffset), t && this.#i && this.#i(this.viewportOffset);
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
		this.interpolateViewportOffset = Pn(this.context.animator, (e) => {
			this.setViewportOffset(e.x, {
				notify: !0,
				syncSmoother: !1
			});
		}, 35, .4, { x: e });
	}
};
//#endregion
//#region ../core/src/config/viewConfig.js
function $x(e, t) {
	let n = ["cell", ...ku(t?.style)];
	return z(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
//#endregion
//#region ../core/src/view/gridView/viewBackground.js
function eS(e) {
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
function tS(e) {
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
var nS = 1;
function rS(e, t) {
	let n = (n) => Ob(e[n]) + sC(t, n);
	return new B(n("top"), n("right"), n("bottom"), n("left"));
}
function iS(e) {
	if (e == "start") return 0;
	if (e == "middle") return .5;
	if (e == "end") return 1;
	throw Error(`Invalid legend region anchor: ${e}`);
}
function aS(e, t, n, r = 0) {
	let i = n.getPerpendicularSize(), a = n.getOffset(), o = t == "top" || t == "bottom" ? e.width : e.height, s = n.getParallelSize?.() ?? o, c = iS(n.getAnchor?.() ?? "start") * (o - s), l = n.getParallelSize?.() ?? e.height - 2 * a, u = n.getWidth?.() ?? i, d = n.getHeight?.() ?? l;
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
	if (HS.has(t)) {
		let n = t.endsWith("right") ? e.width - u - r - a : r + a, i = t.startsWith("bottom") ? e.height - d - a : a;
		return e.translate(n, i).modify({
			width: u,
			height: d
		});
	}
	throw Error(`Invalid legend orientation: ${t}`);
}
function oS(e, t, n, r, i, a, o) {
	for (let [s, c] of Object.entries(e)) {
		if (!c.isActive()) continue;
		let e = aS(n, s, c, Ob(t[s]));
		a(nS, o, () => c.arrange(r, e, i));
	}
}
var sS = {
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
}, cS = {
	orient: "bottom",
	direction: "horizontal",
	titleOrient: "left",
	spacing: 15,
	offset: 3
}, lS = {
	"track-bottom-legend": cS,
	"track-bottom": cS
}, uS = { style: "track-bottom-legend" }, dS = "_legendLabelWidth", fS = "_legendSymbolSize", pS = "_legendStrokeWidth", mS = 200, hS = 256, gS = 4, _S = 40, vS = 2, yS = {
	fillOpacity: 0,
	shadowOpacity: 0,
	strokeOpacity: 0
};
function bS(e) {
	return {
		fill: e.backgroundFill,
		fillOpacity: e.backgroundFill ? e.backgroundFillOpacity ?? 1 : 0,
		stroke: e.backgroundStroke,
		strokeWidth: e.backgroundStrokeWidth,
		strokeOpacity: e.backgroundStroke ? e.backgroundStrokeOpacity ?? 1 : 0,
		shadowOpacity: 0
	};
}
function xS(e, t) {
	let n = e.title;
	if (!n) return;
	let r = e.titleFontSize ?? 11, i = e.titlePadding ?? 5, a = ES(e), o = Math.ceil(zS(e, t)) + i;
	return {
		name: "title",
		width: a ? o : void 0,
		height: a ? { grow: 1 } : r + i,
		view: yS,
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
			x: TS(e) == "right" && o > 0 ? i / o : 0,
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
function SS(e, t, n, r = []) {
	let i = xS(e, n), a;
	return a = i ? TS(e) == "bottom" ? { vconcat: [t, i] } : TS(e) == "left" ? { hconcat: [i, t] } : TS(e) == "right" ? { hconcat: [t, i] } : { vconcat: [i, t] } : { vconcat: [t] }, {
		name: "legend_" + (e.orient ?? "right"),
		padding: e.padding,
		resolve: { scale: Object.fromEntries(r.map((e) => [e, "forced"])) },
		spacing: 0,
		...a
	};
}
function CS(e) {
	return e.direction == "horizontal";
}
function wS(e) {
	return e.orient == "top" || e.orient == "bottom";
}
function TS(e) {
	return e.titleOrient ?? "top";
}
function ES(e) {
	let t = TS(e);
	return t == "left" || t == "right";
}
function DS(e) {
	return e.gradientStrokeColor === void 0 ? 0 : e.gradientStrokeWidth ?? 0;
}
function OS(e) {
	if (e !== void 0) return e == "transparent" ? { value: null } : { value: e };
}
function kS({ channel: e, dataType: t, horizontalPixelScale: n, verticalPixelScale: r, legend: i, symbolStyle: a }) {
	let o = a.encoding ?? {}, s = OS(i.symbolStrokeColor) ?? o.color ?? o.stroke ?? o.fill ?? OS(i.symbolBaseStrokeColor);
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
function AS({ entries: e, channel: t, symbolChannels: n = {}, symbolStyle: r = {}, symbolGeometry: i = "point", legend: a, format: o, dataType: s, context: c }) {
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
	]) t !== void 0 && !h.has(e) && (g[e] = e == "fill" || e == "stroke" ? OS(t) : { value: t });
	a.symbolFillColor !== void 0 && !h.has("fill") && !h.has("fillOpacity") && (g.fillOpacity ??= p.has("opacity") ? {
		field: "value",
		type: s,
		resolutionChannel: "opacity",
		domainInert: !0
	} : g.opacity ?? { value: r.mark?.fillOpacity ?? r.mark?.opacity ?? 1 }), r = {
		...r,
		encoding: g
	};
	let _ = (e) => p.has(e) || p.has("color"), v = Object.fromEntries([["fill", OS(a.symbolBaseFillColor)], ["stroke", OS(a.symbolBaseStrokeColor)]].filter(([e, t]) => !_(e) && t !== void 0).map(([e, t]) => [e, t])), y = {
		domain: [0, { expr: "width" }],
		zero: !1,
		nice: !1
	}, b = {
		domain: [0, { expr: "height" }],
		zero: !1,
		nice: !1
	}, x = [l ? kS({
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
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: b
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
				buildIndex: !1
			},
			y: {
				field: "labelY2",
				type: "quantitative",
				scale: b
			},
			text: { field: "label" }
		}
	}), SS(a, {
		name: "legendBody",
		height: { grow: 1 },
		view: yS,
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
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
				as: dS,
				fontSize: f,
				font: a.labelFont,
				fontStyle: a.labelFontStyle,
				fontWeight: a.labelFontWeight
			},
			{
				type: "packLegendLabels",
				labelWidth: dS,
				columns: a.columns,
				symbolSize: l ? a.symbolSize : t == "size" ? fS : a.symbolSize,
				symbolStrokeWidth: l ? pS : a.symbolStrokeWidth,
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
function jS({ channel: e, legend: t, format: n, context: r }) {
	let i = CS(t), a = t.gradientThickness ?? 12, o = t.gradientStrokeWidth ?? 0, s = DS(t), c = s > 0, l = t.gradientLength === void 0 ? {
		grow: 1,
		minPx: _S + s
	} : t.gradientLength + s, u = i ? "center" : t.labelAlign ?? "left", d = i ? "top" : t.labelBaseline ?? "middle", f = t.labelFontSize ?? 10, p = t.labelOffset ?? 4, m = {
		domain: [0, { expr: i ? "height" : "width" }],
		zero: !1,
		nice: !1
	}, h = {
		domain: [0, 1],
		domainTransition: !1,
		zero: !1,
		nice: !1
	}, g = f, _ = g + p, v = _ + gS, y = v, b = y + a, x = a, S = a + gS, C = S + p, w = i ? "x" : "y", T = w + "2", E = i ? "y" : "x", D = E + "2", O = i ? y : 0, ee = i ? b : a, k = (e, t, n = !1) => ({
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
			opacity: t.gradientOpacity
		},
		encoding: {
			[w]: k(i ? "position0" : "position1", h, w == "x"),
			[T]: k(i ? "position1" : "position0", h),
			[E]: k(O, m, E == "x"),
			[D]: k(ee, m),
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
				[w]: k("position", h, w == "x"),
				[T]: k("position", h),
				[E]: k(i ? _ : x, m, E == "x"),
				[D]: k(i ? v : S, m)
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
				as: dS,
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
				[w]: k("position", h, w == "x"),
				[E]: k(i ? g : C, m, E == "x"),
				text: { field: "label" }
			}
		}]
	}];
	return c && ne.push({
		name: "gradientBorder",
		data: { values: [{}] },
		mark: {
			type: "rect",
			clip: !1,
			fillOpacity: 0,
			stroke: t.gradientStrokeColor,
			strokeWidth: o
		},
		encoding: {
			[w]: k(0, h, w == "x"),
			[T]: k(1, h),
			[E]: k(O, m, E == "x"),
			[D]: k(ee, m)
		}
	}), SS(t, {
		name: "gradientBody",
		padding: s / 2,
		width: i ? l : void 0,
		height: i ? { grow: 1 } : l,
		view: yS,
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
		data: { lazy: {
			type: "legendGradient",
			channel: e,
			count: hS
		} },
		layer: ne
	}, r, [e]);
}
var MS = class extends Mr {
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
		}, this.orient = e, this.#i = t, this.#a = n, this.#n = r, this.#t = i, V(this, { skipSubtree: !0 }), Yn(this, { skipSubtree: !0 });
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
		}), a = Hn(i, r ? e : t, { spacing: this.#t }), o = !NS(this.#r, a);
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
			return new En(e, e);
		}
		let t = this.#a == "horizontal", n = e.map((e) => e.getSize()), r = n.map((e) => t ? e.width : e.height), i = n.map((e) => t ? e.height : e.width), a = (e) => Mn([...e, {
			px: this.#t * Math.max(0, e.length - 1),
			grow: 0
		}]), o = this.#n && this.#r && this.#r.length > 1, s = o ? {
			grow: 1,
			minPx: 0
		} : a(r), c = o ? a(this.#r.map((e) => Rn(e.map((e) => i[e])))) : Rn(i);
		return t ? new En(s, c) : new En(c, s);
	}
	getPerpendicularSize() {
		let e = this.getSize();
		return Fn(this.orient == "top" || this.orient == "bottom" ? e.height : e.width);
	}
	getWidth() {
		return Fn(this.getSize().width);
	}
	getHeight() {
		return Fn(this.getSize().height);
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
		if (Nn(t) !== void 0) return Fn(t);
	}
	isPickingSupported() {
		return !1;
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
		}), s = this.#r ?? [r.map((e, t) => t)], c = s.map((e) => Rn(e.map((e) => o[e]))), l = zn(c, i ? t.height : t.width, { spacing: this.#t });
		for (let [c, u] of s.entries()) {
			let s = u.map((e) => a[e]), d = i ? t.width : t.height, f = s.every((e) => Nn(e) !== void 0) ? An(s, { spacing: this.#t }) : d, p = iS(this.#i) * Math.max(0, d - f), m = zn(s, f, {
				spacing: this.#t,
				offset: p,
				devicePixelRatio: e.getDevicePixelRatio()
			}), h = l[c];
			for (let [a, s] of u.entries()) {
				let c = r[s], l = m[a], u = Fn(o[s]), d = c.legendProps.title != null && TS(c.legendProps) == "top" ? 0 : Math.max(0, (h.size - u) / 2), f = i ? new H(() => t.x + l.location, () => t.y + h.location + d, () => l.size, () => u) : new H(() => t.x + h.location + d, () => t.y + l.location, () => u, () => l.size);
				c.arrange(e, f, n);
			}
		}
		e.popView(this);
	}
	propagateInteraction(e) {
		Gb(this, e, () => {
			this.#o().find((t) => t.coords.containsPoint(e.point.x, e.point.y))?.propagateInteraction(e);
		});
	}
};
function NS(e, t) {
	return e?.length == t.length && e.every((e, n) => e.length == t[n].length && e.every((e, r) => e == t[n][r]));
}
var PS = class extends Mr {
	#e;
	#t;
	#n = [];
	#r;
	#i = () => !0;
	#a;
	#o = 0;
	#s = [];
	#c = /* @__PURE__ */ new Set();
	#l = !1;
	constructor({ entries: e, channel: t, symbolChannels: n, symbolStyle: r, symbolGeometry: i, type: a, legend: o, format: s, dataType: c }, l, u, d, f) {
		let p = a == "gradient" ? jS({
			channel: t,
			legend: o,
			format: s,
			context: l
		}) : AS({
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
		}, this.legendProps = o, this.#r = a ?? "symbol", this.#e = LS(this.#r, this.legendProps), V(this, { skipSubtree: !0 }), Yn(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		let e = { ...this.spec };
		delete e.name;
		let t = $x(this.getConfigScopes(), bS(this.legendProps));
		for (let [e, n] of Object.entries({
			background: eS(t),
			backgroundStroke: tS(t)
		})) n && this.#n.push(new Y(n, this.context, this, this, e));
		this.#t = await this.context.createOrImportView(e, this, this, this.getNextAutoName("legend"), void 0, { layoutSizeParams: "force" }), V(this.#t, { skipSubtree: !0 }), Yn(this.#t, { skipSubtree: !0 }), this.#s = [];
		for (let e of this.getDescendants()) e instanceof Y && (e.name === "labels" || e.name === "gradientLabels") && this.#s.push(e);
		this.#s.length > 0 && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#m())), this.#o = this.getStackedParallelSize();
	}
	*[Symbol.iterator]() {
		yield* this.#n, this.#t && (yield this.#t);
	}
	getSize() {
		if (!this.isActive()) return new En({
			px: 0,
			grow: 0
		}, {
			px: 0,
			grow: 0
		});
		let e = CS(this.legendProps), t = { px: this.getPerpendicularSize() }, n = this.#d() ? this.#u() : { px: this.getStackedParallelSize() };
		return (e ? new En(n, t) : new En(t, n)).addPadding(this.getPadding());
	}
	#u() {
		if (!this.#t) return {
			grow: 1,
			minPx: _S
		};
		let e = this.#t.getSize();
		return CS(this.legendProps) ? e.width : e.height;
	}
	#d() {
		return this.#f() && CS(this.legendProps) == wS(this.legendProps);
	}
	#f() {
		return this.#r == "gradient" && this.legendProps.gradientLength === void 0;
	}
	getPerpendicularSize() {
		return this.#e;
	}
	getOffset() {
		return this.legendProps.offset ?? 0;
	}
	setActivePredicate(e) {
		this.#i = e;
	}
	isActive() {
		return super.isConfiguredVisible() && this.#i();
	}
	getStackedParallelSize() {
		let e = this.#a ?? FS(this.#s);
		return RS(this.legendProps, this.#r, e, this.context);
	}
	#p() {
		this.#l || (this.#l = !0, queueMicrotask(() => {
			this.#l = !1, this.#h();
		}));
	}
	#m() {
		for (let e of this.#s) {
			let t = e.getCollector();
			t && !this.#c.has(t) && (this.#c.add(t), this.registerDisposer(t.observe(() => this.#p())), t.completed && this.#p());
		}
	}
	#h() {
		let e = FS(this.#s);
		if (e === void 0) return;
		let t = this.#o;
		this.#a = e;
		let n = IS(this.legendProps, this.#r, e, this.context), r = n >= this.#e + vS, i = this.getStackedParallelSize(), a = Math.abs(i - t) >= vS;
		(r || a) && (r && (this.#e = n), this.#o = i, this.invalidateSizeCache(), this.context.requestLayoutReflow());
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
	getParentGridChromePolicy() {
		return {
			axes: !1,
			background: !1
		};
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.isActive()) {
			e.pushView(this, t);
			for (let r of this.#n) r.arrange(e, t, n);
			this.#t?.arrange(e, t.shrink(this.getPadding()), n), e.popView(this);
		}
	}
	propagateInteraction(e) {
		Gb(this, e, () => this.#t?.propagateInteraction(e));
	}
};
function FS(e) {
	let t = 0, n = 0, r = 0, i = !1;
	for (let a of e) {
		let e = a.getCollector();
		if (!e?.completed) return;
		i = !0, e.visitData((e) => {
			t = Math.max(t, Number(e[dS]) || 0), n = Math.max(n, (Number(e.labelX) || 0) + (Number(e[dS]) || 0)), r = Math.max(r, Number(e.labelY) || 0);
		});
	}
	return i ? {
		maxWidth: Math.ceil(t),
		maxX: Math.ceil(n),
		maxY: Math.ceil(r)
	} : void 0;
}
function IS(e, t, n, r) {
	let i = CS(e), a = ES(e), o = LS(t, e), s = e.labelOffset ?? 4, c = i ? t == "gradient" ? o : n.maxY + (e.labelFontSize ?? 10) / 2 : t == "gradient" ? (e.gradientThickness ?? 12) + DS(e) + gS + s + n.maxWidth : n.maxX || Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5) + s + n.maxWidth, l = e.title ? i ? (e.titleFontSize ?? 11) + (a ? 0 : e.titlePadding ?? 5) : zS(e, r) + (a ? e.titlePadding ?? 5 : 0) : 0, u = i === a ? Math.max(c, l) : c + l;
	return Math.ceil(i ? Math.max(o, u) : Math.max(o, u, l));
}
function LS(e, t) {
	return e == "gradient" && CS(t) ? (t.labelFontSize ?? 10) + (t.labelOffset ?? 4) + gS + (t.gradientThickness ?? 12) + DS(t) + 2 : 0;
}
function RS(e, t, n, r) {
	let i = ES(e), a = e.title ? (i ? zS(e, r) : e.titleFontSize ?? 11) + (e.titlePadding ?? 5) : 0, o = (t) => CS(e) == i ? Math.ceil(a + t) : Math.ceil(Math.max(a, t));
	if (t == "gradient") return o((e.gradientLength ?? mS) + DS(e));
	if (n) {
		let t = e.labelFontSize ?? 10;
		return o(CS(e) ? n.maxX : n.maxY + t / 2);
	}
	return o(Math.sqrt(e.symbolSize ?? 100) + (e.symbolStrokeWidth ?? 1.5));
}
function zS(e, t) {
	if (!e.title) return 0;
	let n = nd(t.textMetrics, {
		font: e.titleFont,
		fontStyle: e.titleFontStyle,
		fontWeight: e.titleFontWeight
	}), r = e.titleFontSize ?? 11;
	return rd(n, r_(e.title, e.titleLimit, (e, t) => n.measureWidth(e, t), r, "..."), r).width;
}
//#endregion
//#region ../core/src/view/gridView/gridChildLegends.js
var BS = [
	"color",
	"fill",
	"stroke",
	"opacity",
	"fillOpacity",
	"strokeOpacity",
	"strokeWidth",
	"shape"
], VS = /* @__PURE__ */ new Set([
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
]), HS = /* @__PURE__ */ new Set([
	"top-left",
	"top-right",
	"bottom-left",
	"bottom-right"
]), US = /* @__PURE__ */ new Set([
	"left",
	"right",
	"top",
	"bottom",
	...HS
]);
function WS(e) {
	let t = e.legendProps.orient ?? "right";
	return HS.has(t);
}
function GS(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) n.visit((e) => {
		t.has(e) || t.set(e, t.size);
	});
	return t;
}
function KS(e) {
	return String(e.legend.title ?? e.field ?? e.channel).toLocaleLowerCase();
}
function qS(e) {
	let t = GS(e), n = [];
	for (let t of e) for (let e of Object.values(t.resolutions.legend)) for (let r of e.getLegendDefs()) n.push({
		definition: r,
		resolution: e,
		owner: t
	});
	return n.sort((e, n) => (t.get(e.definition.view) ?? 2 ** 53 - 1) - (t.get(n.definition.view) ?? 2 ** 53 - 1) || KS(e.definition).localeCompare(KS(n.definition)) || e.definition.channel.localeCompare(n.definition.channel)), n;
}
function JS(e, t) {
	if (e && "condition" in e) {
		let n = P(e.condition);
		for (let e of n) if (Te(Ze(De(e, t))) && "value" in e) return { value: e.value };
	}
	return Ke(e) ? { value: e.value } : void 0;
}
function YS(e) {
	return typeof e == "string" || R(e);
}
function XS(e, t, n, r) {
	YS(n.fill) && !t.has("fill") && (e.fill = { value: n.fill }), YS(n.stroke) && !t.has("stroke") && (e.stroke = { value: n.stroke }), YS(n.color) && !t.has("color") && (n.filled ? (!t.has("fill") && !e.fill && (e.fill = { value: n.color }), !t.has("stroke") && !e.stroke && (e.stroke = { value: null }), !t.has("strokeWidth") && !YS(n.stroke) && r.symbolStrokeColor === void 0 && (e.strokeWidth = { value: 0 })) : (!t.has("stroke") && !e.stroke && (e.stroke = { value: n.color }), !t.has("fill") && !e.fill && (e.fill = { value: n.color }), !t.has("fillOpacity") && r.symbolFillColor === void 0 && (e.fillOpacity = { value: 0 })));
}
function ZS(e, t) {
	return !!Ot(e.spec.encoding?.[t]);
}
function QS(e, t, n) {
	[
		"color",
		"fill",
		"stroke"
	].some((e) => !t.has(e) && ZS(n, e)) && !t.has("fill") && (e.fill = { value: ju(n.getConfigScopes(), "rule", void 0).color ?? "black" });
}
function $S(e, t, n, r) {
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
	c.shape === void 0 && n.getMarkType() == "rect" && (c.shape = "square"), XS(s, i, o, r), QS(s, i, n);
	let l = n.spec.encoding?.color, u = o.filled, d = JS(l, n.spec.predicates ?? {});
	d && !i.has("color") && (u ? (s.fill = d, s.stroke = { value: null }, r.symbolStrokeColor === void 0 && (s.strokeWidth = { value: 0 })) : (s.stroke = d, s.fill = d, r.symbolFillColor === void 0 && (s.fillOpacity = { value: 0 })));
	for (let e of BS) {
		if (e == "color" || i.has(e)) continue;
		let t = n.spec.encoding?.[e], r = JS(t, n.spec.predicates ?? {});
		r && (s[e] = r);
	}
	return a;
}
function eC(e) {
	if (!US.has(e)) throw Error(`Invalid legend orientation "${e}"!`);
}
function tC(e, t, n) {
	let r = rn(t.paramRuntime, e.orient, "Reactive legend orient changes are not supported.", n);
	return r !== void 0 && eC(r), r === e.orient ? e : {
		...e,
		orient: r
	};
}
async function nC(e, t) {
	let n = e.view, r = [], i = (e, t) => {
		if (!R(e)) return e;
		let n = "__legend_style_" + r.length;
		return r.push({
			name: n,
			expr: e.expr,
			runtime: t
		}), { expr: n };
	}, a = [], o, s = tC(e.legend, n, (e) => a.push(e)), c = {}, l = {};
	for (let [e, t] of Object.entries(s)) VS.has(e) ? c[e] = i(t, n.paramRuntime) : l[e] = t;
	let u = Object.assign(mt(n.paramRuntime, l, (e) => {
		if (e.has("disable")) {
			if (!o) throw Error("Legend has not been initialized!");
			o.invalidateSizeCache(), o.context.requestLayoutReflow();
		}
	}, (e) => a.push(e)), c), d = e.scaleResolution.getOrderedMembers()[0].view, f = e.type == "symbol" ? $S(e.channel, e.symbolChannels ?? {}, d, u) : void 0;
	if (f) {
		let e = f.mark;
		for (let [t, n] of Object.entries(e)) e[t] = i(n, d.paramRuntime);
		let t = f.encoding;
		for (let [e, n] of Object.entries(t)) t[e] = {
			...n,
			value: i(n.value, d.paramRuntime)
		};
	}
	o = new PS({
		channel: e.channel,
		type: e.type,
		symbolChannels: e.symbolChannels,
		symbolGeometry: e.symbolGeometry,
		symbolStyle: f,
		legend: u,
		format: e.format,
		dataType: e.dataType
	}, t.context, t, n);
	for (let e of a) o.registerDisposer(e);
	for (let { name: e, expr: t, runtime: n } of r) o.paramRuntime.registerScopedExpression(e, t, n);
	return await o.initializeChildren(), o;
}
async function rC(e, t, n, r, i) {
	for (let { definition: a, resolution: o, owner: s } of qS(t)) {
		if (!r(s, o)) continue;
		let t = await nC(a, n);
		i && !i(t, s) ? t.disposeSubtree() : iC(e, t, o);
	}
}
function iC(e, t, n) {
	let r = t.legendProps.orient ?? "right", i = e[r];
	if (!i) {
		let { anchor: n, direction: a, wrap: o } = nm(t.layoutParent.getConfigScopes(), r);
		i = new MS(r, n, a, o, t.legendProps.spacing ?? 0, t.context, t.layoutParent, t.dataParent), e[r] = i;
	}
	t.setActivePredicate(() => !t.legendProps.disable && n.hasVisibleNonChromeMember()), i.addLegendView(t);
}
function aC(e, t, n) {
	let r = !1;
	for (let i of Object.values(e)) {
		let e = i.prepareLayoutSize(t, n);
		r ||= e;
	}
	return r;
}
function oC(e) {
	for (let t of Object.values(e)) t.disposeSubtree();
}
function sC(e, t) {
	let n = e[t];
	return n?.isActive() ? n.getPerpendicularSize() + n.getOffset() : 0;
}
//#endregion
//#region ../core/src/view/gridView/legendCollection.js
function cC(e) {
	return lC(e.getDescendants());
}
function lC(e) {
	return e.filter((e) => !ir(e) && Object.keys(e.resolutions.legend).length > 0);
}
function uC(e, t) {
	for (let n of e.getDataAncestors()) {
		let e = n.getConfiguredResolution(t, "legend") ?? n.getConfiguredResolution("default", "legend");
		if (e == "excluded") return;
		if (e == "collected") return n;
	}
}
//#endregion
//#region ../core/src/ruler/rulerDisabled.js
function dC(e) {
	let { config: t, paramRuntime: n, paramName: r, channels: i } = e, a = R(t.disabled) ? n.createExpression(t.disabled) : rt(t.disabled ?? !1), o = () => {
		let t = e.disabled;
		e.disabled = !!a(), e.disabled && !t && n.setValue(r, un(i));
	}, s = a.subscribe(o);
	return o(), s;
}
//#endregion
//#region ../core/src/view/scaleProjection.js
function fC(e, t) {
	return t.length === 1 && (pv(e.spec) && t[0] === "x" || mv(e.spec) && t[0] === "y");
}
function pC(e, t, n, r) {
	let i = e.getOrderedMembers().filter(({ view: e }) => !Bn(e) && !e.getLayoutAncestors().some((e) => e.layoutParent instanceof _w && e.layoutParent.getAnnotationLayer() === e) && e.isVisible() && (!r || e.getLayoutAncestors().includes(r))).map(({ view: e }) => e.coords).filter((e) => e !== void 0 && e.width > 0 && e.height > 0);
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
function mC(e, t, n) {
	let { view: r } = e, i = t[0];
	return fC(r, t) && r instanceof _w ? r.getTrackPlotGeometry(i)?.content ?? r.coords : e.getProjectionCoords(i, n);
}
//#endregion
//#region ../core/src/view/viewInteractionListenerTracker.js
var hC = class {
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
function gC(e, t) {
	return t === "integer" ? !0 : t === "auto" ? e === "index" || e === "locus" : !1;
}
function _C(e, t, n = "auto") {
	if (e == null) return null;
	let r = t.getResolvedScaleType(), i = e;
	return gC(r, n) && (i = r === "index" || r === "locus" ? Math.floor(e) : Math.round(e)), r === "locus" && t.toComplex ? t.toComplex(i) : i;
}
//#endregion
//#region ../core/src/ruler/rulerMouseEventController.js
var vC = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.#e = new hC(e.view), this.eventConfig = Ye(n.on ?? "mousemove"), Xe(this.eventConfig, ["mousemove", "mousedown"], `Ruler param "${t}" currently supports only "mousemove" and "mousedown" in "on".`), this.eventPredicate = Ee(this.eventConfig, qe(a, n, "on")), this.clear = n.clear ?? (this.eventConfig.type === "mousemove" && "mouseleave"), this.disposeDisabled = dC(this), this.#r();
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
		}), this.clear === "mouseleave") this.#n("mouseleave", (e) => {
			e.pointedViews.has(this.gridChild.view) || this.#s(un(this.channels));
		});
		else if (this.clear !== !1) throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave" or false in "clear" for mousemove rulers.`);
	}
	#a() {
		if (this.#n("mousedown", (e) => {
			if (e.mouseEvent.button !== 0 || !this.eventPredicate(e.proxiedMouseEvent)) return;
			e.stopPropagation(), this.dragging = !0;
			let t = mC(this.gridChild, this.channels, e.point);
			this.#s(this.#o(e.point, t));
			let n = Z.fromMouseEvent(e.mouseEvent).subtract(new Z(e.point.x, e.point.y)), r = (e) => {
				let r = Z.fromMouseEvent(e).subtract(n);
				this.#s(this.#o(r, t));
			};
			this.#t = $b({
				onMove: r,
				onFinish: () => {
					this.dragging = !1;
				},
				onRelease: () => {
					this.clear === "mouseup" && this.#s(un(this.channels));
				}
			});
		}), this.clear === "mouseleave") this.#n("mouseleave", (e) => {
			!this.dragging && !e.pointedViews.has(this.gridChild.view) && this.#s(un(this.channels));
		});
		else if (this.clear !== !1 && this.clear !== "mouseup") throw Error(`Ruler param "${this.paramName}" currently supports only "mouseleave", "mouseup", or false in "clear" for mousedown rulers.`);
	}
	#o(e, t = mC(this.gridChild, this.channels, e)) {
		let n = un(this.channels), r = t.normalizePoint(e.x, e.y, !0);
		for (let e of this.channels) {
			let i = this.scaleResolutions[e], a = hr(i.getScale(), e === "x" ? r.x : r.y, e === "x" ? t.width : t.height);
			n.values[e] = _C(a, i, this.config.snap ?? "auto");
		}
		return n;
	}
	#s(e) {
		this.disabled || this.paramRuntime.setValue(this.paramName, e);
	}
}, yC = class {
	constructor(e, t, n, r, i, a = e.view.paramRuntime) {
		if (n.on !== void 0) throw Error(`Ruler param "${t}" with source "viewport" must not define "on".`);
		this.gridChild = e, this.paramName = t, this.config = n, this.channels = r, this.scaleResolutions = i, this.paramRuntime = a, this.listeners = [], this.disposeDisabled = dC(this), this.update(), this.#e();
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
		let e = un(this.channels);
		for (let t of this.channels) {
			let n = this.scaleResolutions[t], r = n.getScale().invert(.5);
			e.values[t] = _C(r, n, this.config.snap ?? "auto");
		}
		this.paramRuntime.setValue(this.paramName, e);
	}
};
//#endregion
//#region ../core/src/view/gridView/generatedChromeOverlay.js
function bC(e) {
	V(e, { skipSubtree: !0 }), Yn(e, { skipSubtree: !0 });
}
function xC({ spec: e, context: t, layoutParent: n, dataParent: r, name: i, zindex: a = 1 }) {
	let o = new X(e, t, n, r, i);
	return bC(o), {
		view: o,
		zindex: a
	};
}
//#endregion
//#region ../core/src/view/gridView/rulerOverlay.js
function SC({ paramName: e, channels: t, display: n = "line", mark: r = {} }) {
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
			expr: DC(e, t)
		}],
		encoding: {},
		layer: []
	};
	if (n === "band") {
		let n = o.encoding;
		for (let r of t) o.encoding[r] = EC(OC(e, r)), n[r + "2"] = EC(kC(e, r));
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
		let i = EC(OC(e, r));
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
function CC({ paramName: e, channels: t, display: n, mark: r, context: i, layoutParent: a, dataParent: o, name: s, expressionRuntime: c }) {
	let l = /* @__PURE__ */ new Map(), u = xC({
		spec: SC({
			paramName: e,
			channels: t,
			display: n,
			mark: Object.fromEntries(Object.entries(r ?? {}).map(([t, n]) => {
				if (R(n)) {
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
function wC({ config: e, scaleResolution: t, ...n }) {
	return CC({
		...n,
		display: TC(t.getResolvedScaleType(), e.snap, e.display),
		mark: e.mark
	});
}
function TC(e, t, n) {
	return n || ((e === "index" || e === "locus") && (t === void 0 || t === "auto" || t === "integer") ? "center" : "line");
}
function EC(e) {
	return {
		datum: { expr: e },
		type: null,
		title: null
	};
}
function DC(e, t) {
	return [e + ".type === 'ruler'", ...t.map((t) => e + ".values." + t + " != null")].join(" && ");
}
function OC(e, t) {
	return `linearize('${t}', ${e}.values.${t})`;
}
function kC(e, t) {
	return OC(e, t) + " + 1";
}
//#endregion
//#region ../core/src/view/gridView/selectionRectSpec.js
var AC = "intervalDragActive";
function jC({ scaleResolutionSource: e, selectionExpression: t, selection: n, channels: r = Object.keys(n.intervals), brushConfig: i = {} }) {
	let a = { ...i };
	if (delete a.zindex, Se.every((e) => !r.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
	let o = r.includes("x") ? r.includes("y") ? !0 : "x" : "y", s = {
		name: "selectionRect",
		domainInert: !0,
		params: [{
			name: AC,
			value: !1
		}],
		resolve: { scale: {
			x: "forced",
			y: "forced"
		} },
		data: { values: [{}] },
		transform: [{
			type: "filter",
			expr: MC(t, r)
		}],
		encoding: {},
		layer: []
	};
	r.includes("x") && (s.encoding.x = NC(e, t, "x", 0), s.encoding.x2 = NC(e, t, "x", 1)), r.includes("y") && (s.encoding.y = NC(e, t, "y", 0), s.encoding.y2 = NC(e, t, "y", 1)), s.layer.push({
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
			y: r.includes("y") ? NC(e, t, "y", 1) : { value: 1 },
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
function MC(e, t) {
	return [e + ".type === 'interval'", ...t.map((t) => {
		let n = `${e}.intervals.${t}`;
		return `${n} != null && ${n}[0] < ${n}[1]`;
	})].join(" && ");
}
function NC(e, t, n, r) {
	return {
		datum: { expr: PC(t, n, r) },
		type: e.getScaleResolution(n).type,
		title: null
	};
}
function PC(e, t, n) {
	let r = `${e}.intervals.${t}`;
	return `(${r} != null ? ${r}[${n}] : 0)`;
}
//#endregion
//#region ../core/src/view/gridView/selectionRect.js
function FC({ selectionExpr: e, selectionExpression: t, channels: n, brushConfig: r = {}, context: i, layoutParent: a, dataParent: o, scaleResolutionSource: s, name: c = "selectionRect" }) {
	let l = e() ?? sn(n), { zindex: u = 1, ...d } = r;
	return xC({
		spec: jC({
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
var IC = class {
	constructor(e, t, n, r, i = e.view.paramRuntime, a = !0, o) {
		this.host = e, this.#i = t, this.#a = i, this.#e = new hC(e.view), this.#l(t, n, r, i, a, o), this.#r = i.registerSelectionController(t, this);
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
			if (!n || !r || !A(r)) throw Error(`No continuous scale found for interval selection param "${e}" on channel "${t}"! Scale type is "${r ?? "none"}".`);
			return [t, n];
		}));
		this.#o = c;
		let l = s.some((e) => c[e].isZoomable()), u = n.on ?? (l ? {
			type: "mousedown",
			filter: "event.shiftKey"
		} : { type: "mousedown" });
		if (u.type !== "mousedown") throw Error(`Interval selection param "${e}" currently supports only "mousedown" in "on".`);
		let d = "select" in t && typeof t.select == "object" ? t.select : void 0, f = Ee(u, qe(r, d, "on")), p = LC(n.zoom, l, e), m = Ee(p, qe(r, d, "zoom")), h = n.clear, g = Ee(h, qe(r, d, "clear")), _ = !1, v, y = null, b = (e, t) => Object.fromEntries(s.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), x = r.createExpression(e), S = (t) => {
			r.setValue(e, t);
		};
		t.value && S({
			type: "interval",
			intervals: t.value
		});
		let C = () => {
			Mt(x()) && S(sn(s));
		};
		this.#u = C;
		let w = (e) => this.host.getInteractionCoords(e)?.containsPoint(e.x, e.y) ?? !1, T = (t) => this.host.ownsInteraction?.(e, t) ?? !0, E = a;
		if (i) {
			if (!this.host.getSelectionRect || !this.host.setSelectionRect) throw Error("Interval selection hosts must provide a selection rectangle.");
			if (this.host.getSelectionRect()) throw Error("Only one interval selection per container is currently allowed!");
			E = FC({
				selectionExpr: x,
				selectionExpression: e,
				channels: s,
				brushConfig: n.mark,
				context: this.host.context,
				layoutParent: this.host.layoutParent,
				dataParent: o,
				scaleResolutionSource: o
			}), this.host.setSelectionRect(E);
		}
		let D = E ? (e) => {
			E.view.paramRuntime.setValue(AC, e);
		} : () => {}, O = (e, t = this.host.getProjectionCoords(s[0], e)) => {
			let n = {
				x: 0,
				y: 0
			}, r = t.normalizePoint(e.x, e.y, !0);
			for (let e of s) {
				let i = c[e].getScale(), a = e === "x" ? r.x : r.y;
				n[e] = hr(i, a, e === "x" ? t.width : t.height);
			}
			return n;
		}, ee = (e, t) => {
			let { intervals: n } = e, r = (e) => {
				let r = (r) => {
					let i = n[r]?.[e];
					if (i == null) return e;
					let a = c[r].getScale();
					if ("gapMapping" in a) {
						let o = a.gapMapping(r === "x" ? t.width : t.height);
						if (o) return o.position(i, 0, e === 1 && i > n[r][0]);
					}
					return a(i);
				};
				return t.denormalizePoint(r("x"), r("y"), !0);
			}, i = r(0), a = r(1);
			return H.create(Math.min(i.x, a.x), Math.min(i.y, a.y), Math.abs(a.x - i.x), Math.abs(a.y - i.y));
		}, k = (e) => {
			let t = x();
			if (!Mt(t) || Object.values(t.intervals).some((e) => e && e[0] === e[1])) return null;
			let n = ee(t, this.host.getProjectionCoords(s[0], e));
			return n.containsPoint(e.x, e.y) ? n : null;
		};
		if (this.#c("mousedown", (e) => {
			if (e.mouseEvent.button != 0 || !w(e.point) || !T(e.point)) return;
			let t = x(), n = this.host.getProjectionCoords(s[0], e.point);
			v = void 0;
			let r = k(e.point);
			if (r) _ = !0;
			else {
				let n = e.point;
				if (Mt(x()) && (_ = !0), !f(e.proxiedMouseEvent)) {
					if (!h || !Mt(t)) return;
					v = n;
					return;
				}
			}
			e.stopPropagation();
			let i = {
				start: e.point,
				translatedRectangle: r
			};
			y = i, D(!!r), r || C();
			let a = Z.fromMouseEvent(e.mouseEvent).subtract(i.start), l = (e) => {
				let t = Z.fromMouseEvent(e).subtract(a), r;
				if (i.translatedRectangle) {
					let e = t.subtract(i.start), a = i.translatedRectangle.translate(e.x, e.y);
					r = b(O(new Z(a.x, a.y), n), O(new Z(a.x2, a.y2), n));
				} else r = b(O(i.start, n), O(t, n));
				for (let e of s) {
					let t = c[e], { zoomExtent: n } = t, a = i.translatedRectangle ? Dt(r[e], n[0], n[1]) : r[e];
					r[e] = RC(t, a) ?? [n[0], n[0]];
				}
				S({
					type: "interval",
					intervals: r
				});
			};
			this.#t = $b({
				onMove: l,
				hoverContext: o.context,
				onFinish: () => {
					y = null, D(!1);
				},
				onRelease: () => this.#d()
			});
		}), this.#e.add("mouseup", (e) => {
			if (!v) return;
			let t = v;
			v = void 0, t.subtract(e.point).length < 2 && C();
		}), this.#c("click", (e) => {
			e.mouseEvent.button == 0 && (_ &&= (e.stopPropagation(), !1));
		}, !0), this.#n = (e) => w(e) && T(e) && !!k(e), h) {
			let e = (e) => g(e.proxiedMouseEvent) && this.#n(e.point);
			h.type === "wheel" && this.#c("wheelclaimprobe", (t) => {
				t.wheelIntent !== "scroll" && e(t) && (t.claimWheel(this, { smooth: !1 }), t.stopPropagation());
			}, !0), this.#c(h.type, (t) => {
				e(t) && (C(), t.stopPropagation());
			}, !0);
		}
		let te = (e) => {
			if (e.wheelIntent === "scroll") return !1;
			let t = e.wheelEvent;
			return !!p && m(Qb(t)) && this.#n(e.point) && t.deltaY !== 0 && Math.abs(t.deltaX) <= Math.abs(t.deltaY) && Mt(x());
		};
		this.#c("wheelclaimprobe", (e) => {
			te(e) && (e.claimWheel(this, { smooth: !1 }), e.stopPropagation());
		}), this.#c("wheel", (e) => {
			if (!te(e)) return;
			let t = e.wheelEvent, n = x(), r = t.deltaMode ? 120 : 1, i = 2 ** (t.deltaY * r / 300), a = O(e.point), o = { ...n.intervals }, l = !1;
			for (let e of s) {
				let t = o[e];
				if (!t || t.length !== 2) continue;
				let n = c[e], r = RC(n, Lp(n.getScale(), [...t], a[e], i, { onUnsupported: "identity" }));
				r && (r[0] !== t[0] || r[1] !== t[1]) && (o[e] = r, l = !0);
			}
			l && (S({
				...n,
				type: "interval",
				intervals: o
			}), t.preventDefault(), e.stopPropagation());
		});
		let ne = r.getParamRef(e);
		this.host.view.registerDisposer(r.effect([ne], () => {
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
function LC(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = Ye(r);
	return Xe(i, ["wheel"], `Interval selection param "${n}" currently supports only "wheel" in "zoom".`), i;
}
function RC(e, t) {
	let n = e.getScale();
	return Sd(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
//#endregion
//#region ../core/src/view/gridView/overlayExtent.js
function zC({ extent: e, ownerSpec: t, channels: n, isAligned: r, label: i }) {
	if (e === "view") return "view";
	let a = n[0], o = a === "x" && pv(t) || a === "y" && mv(t), s;
	if (n.length === 1 ? o ? r(a) || (s = `because its ${a} projections do not align`) : s = `for channel "${a}" in this view` : s = "for multiple channels", s && e === "container") throw Error(`${i} cannot use extent "container" ${s}.`);
	return s ? "view" : "container";
}
//#endregion
//#region ../core/src/view/gridView/gridChild.js
function BC(e) {
	return ir(e) ? [] : e instanceof Y || dv(e.spec) ? Object.keys(e.resolutions.legend).length > 0 ? [e] : [] : e instanceof X ? [...Object.keys(e.resolutions.legend).length > 0 ? [e] : [], ...Array.from(e).flatMap((e) => BC(e))] : [];
}
function VC(e) {
	return pv(e) || mv(e) || hv(e);
}
function HC(e, t) {
	if (!fC(e, t)) return !1;
	let n = t[0], r = e.getScaleResolution(n);
	return r !== void 0 && e.children.every((e) => e.getScaleResolution(n) === r);
}
function UC(e, t, n, r) {
	if (!e) return;
	let i = new Y(e, t.context, t, n, r, { chrome: !0 });
	return V(i, { skipSubtree: !0 }), i;
}
var WC = class {
	#e = [];
	#t;
	#n = !1;
	constructor(e, t, n) {
		this.layoutParent = t, this.view = e, this.#t = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {}, this.scrollbars = {}, this.selectionRect = void 0, this.rulerOverlays = [], this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.coords = H.ZERO, this.plotCoords = H.ZERO;
		let r = e.needsAxes.x || e.needsAxes.y, i = e.getParentGridChromePolicy(), a = e.spec, o = "view" in a ? a.view : void 0;
		if (i.background && (r || o)) {
			let r = $x(e.getConfigScopes(), o);
			this.backgroundZindex = r?.zindex ?? 0, this.backgroundStrokeZindex = r?.strokeZindex, this.background = UC(eS(r), t, e, "background" + n), this.backgroundStroke = UC(tS(r), t, e, "backgroundStroke" + n);
		}
		this.title = e.spec.title ? Zx.create(e.spec.title, e.getConfigScopes(), t.context, t, e, "title" + n) : void 0, e.spec.viewportWidth != null && (this.scrollbars.horizontal = new Qx(this, "horizontal")), e.spec.viewportHeight != null && (this.scrollbars.vertical = new Qx(this, "vertical")), ir(e) || (this.#c(), this.#r()), e.registerDisposer(() => this.#l());
	}
	#r() {
		if (!dv(this.view.spec)) for (let { owner: e, paramName: t, param: n } of this.#i()) {
			if (!It(n)) continue;
			let r = n.ruler, i = r.encodings ?? ["x"];
			if (VC(this.view.spec) && (r.source === "viewport" || e !== this.view || !HC(this.view, i))) continue;
			let a = this.#s(t, i);
			r.source === "viewport" ? this.#e.push(new yC(this, t, r, i, a, e.paramRuntime)) : this.#e.push(new vC(this, t, r, i, a, e.paramRuntime)), r.display !== "none" && (this.#a(e, i, r.extent, `Ruler param "${t}"`) || this.rulerOverlays.push(wC({
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
		return zC({
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
		if (!dv(this.view.spec)) for (let { owner: e, paramName: t, param: n } of this.#i()) {
			if (!("select" in n)) continue;
			let r = He(n.select);
			if (!kt(r) || e === this.view && VC(e.spec)) continue;
			let i = r.encodings ?? ["x"];
			this.#a(e, i, r.extent, `Interval selection param "${t}"`) || this.#e.push(new IC(this, t, n, r, e.paramRuntime, !0));
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
			if (i.title === void 0 && (i.title = e.getTitle()), !i.orient && (i.orient = Cb[t].find((e) => !n[e]), !i.orient)) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			if (!Cb[t].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${t}"!`);
			return i;
		}, o = async (e, r, i) => {
			let o = a(e, r);
			if (o) {
				if (n[o.orient] && !this.allowDuplicateAxes()) throw Error(`An axis with the orient "${o.orient}" already exists!`);
				let a = new kb(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i, { labelClipPolicy: this.getAxisLabelClipPolicy(r, t) });
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
				...cb(n.getConfigScopes(), {
					channel: t,
					orient: i.orient,
					type: e.scaleResolution.type,
					style: i.style
				}),
				...i
			};
			if (o.grid || o.chromGrid) {
				let t = new _x(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, n);
				r[i.orient] = t, await t.initializeChildren();
			}
		};
		if (i.axes) {
			for (let e of Se) {
				if (!t.needsAxes[e]) continue;
				let n = this.getAxisResolutionForAxis(e);
				if (n && await o(n, e, t), t.getConfiguredOrDefaultResolution(e, "axis") != "excluded") {
					let n = t.getAxisResolution(e);
					n && await s(n, e, t);
				}
			}
			if (t instanceof X) for (let e of [!0, !1]) for (let n of t) for (let [t, r] of Object.entries(n.resolutions.axis)) {
				let i = r.getAxisProps();
				i && !!i.orient === e && await o(r, t, n);
			}
		}
		await rC(this.legends, e.legendOwners ?? BC(t), this.layoutParent, (e, t) => uC(e, t.channel) === void 0, e.legendFilter);
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
		oC(this.legends), this.axes = {}, this.axisCandidates = [], this.gridLines = {}, this.legends = {};
	}
	getAxisLabelClipPolicy(e, t) {
		return t.options.axisLabelClipPolicy?.[e] || (e === "x" && (t.spec.viewportWidth != null || this.layoutParent.spec.viewportWidth != null) || e === "y" && (t.spec.viewportHeight != null || this.layoutParent.spec.viewportHeight != null) ? "anchor" : "pixel");
	}
	getOverhang(e = this.axes) {
		return tr(rS(e, this.legends).add(this.title?.getOverhang() ?? B.zero()).add(this.view.getOverhang()), this.view.spec.overhang, this.view.getStructuralOverhang());
	}
	prepareLegendLayoutSize(e, t) {
		return aC(this.legends, e, t);
	}
	getViewOverhang() {
		return tr(this.view.getOverhang(), this.view.spec.overhang, this.view.getStructuralOverhang());
	}
	getAxisCoords(e = this.coords) {
		return e.shrink(this.getViewOverhang());
	}
	getTitleZindex() {
		return this.title?.titleSpec.zindex ?? 1;
	}
	arrangeTitle(e, t, n, r = this.axes) {
		this.title && this.title.arrange(e, Xx(t, t.expand(rS(r, this.legends)), this.title.titleSpec), n);
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
}), GC = 10;
function KC(e, t, n, r) {
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
function qC() {
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
			return t || (t = ot(e), r.set(e, t)), t;
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
function JC(e, t, n, r, i = t.axes ?? t.gridChild.axes) {
	let { gridChild: a, viewportCoords: o, viewCoords: s, containerCoords: c } = t, { queueDecoration: l } = r, u = Vt(n), d = Qt(o, u), f = a.view.isScrollable(), { background: p } = a;
	p && l(a.backgroundZindex, Q.background, () => p.arrange(e, d, {
		...n,
		clipRect: void 0
	}));
	let { view: m, gridLines: h, backgroundStroke: g, title: _, selectionRect: v, rulerOverlays: y } = a, b = t.axes ?? a.axes, { all: x, any: S } = r.getClipFlags(m), C = x || f, w = S || f;
	for (let t of Object.values(h)) l(t.axisProps.zindex ?? 0, Q.grid, () => t.arrange(e, o, n));
	let T = C ? qt(u, Et(d, x || !!a.scrollbars.horizontal, x || !!a.scrollbars.vertical)) : n.clip;
	r.queueContent(m.getZindex(), () => m.arrange(e, s, C ? {
		...n,
		clipRect: T?.rect,
		clip: T
	} : n)), g && l(XC(a.backgroundStrokeZindex, w), Q.backgroundStroke, () => g.arrange(e, d, {
		...n,
		clipRect: void 0
	}));
	for (let [t, r] of Object.entries(b)) {
		let i = t == "left" || t == "right" ? "vertical" : "horizontal", c = a.scrollbars[i], u = ZC(c ? o.modify(i == "vertical" ? {
			y: () => s.y,
			height: s.height
		} : {
			x: () => s.x,
			width: s.width
		}) : a.getAxisCoords(o), t, r), d = Vt(n), f = d?.rect;
		if (c) {
			let e = Et(o, i == "horizontal", i == "vertical");
			d = qt(d, e), f = d?.rect;
		}
		d && r.labelClipPolicy === "anchor" && (d = Et(d.rect, wb[t] === "x", wb[t] === "y"), f = d?.rect), l(YC(r.axisProps, w), Q.axis, () => r.arrange(e, u, {
			...n,
			clipRect: f,
			clip: d
		}));
	}
	oS(a.legends, i, o, e, n, l, Q.legend), v && l(v.zindex, Q.selectionRect, () => v.view.arrange(e, s, n));
	for (let t of y) l(t.zindex, Q.ruler, () => t.view.arrange(e, s, n));
	for (let t of Object.values(a.scrollbars)) l(1, Q.scrollbar, () => {
		t.updateScrollbar(o, s), t.arrange(e, c, n);
	});
	return _ && l(a.getTitleZindex(), Q.title, () => a.arrangeTitle(e, o, n, b)), w;
}
function YC(e, t) {
	return e.zindex === void 0 ? e.placement === "inside" ? 1 : t ? GC : 0 : e.zindex;
}
function XC(e, t) {
	return e ?? (t ? GC : 0);
}
function ZC(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize(), a = r.placement === "inside", o = r.offset ?? 0, s = wb[t];
	if (!s) throw Error("Unknown axis orientation: " + t);
	let c = s === "x", l = c ? "height" : "width", u = t === "bottom" || t === "right", d = a ? -i - o : o, f = u ? e[l] + d : -i - d;
	return e.translate(c ? 0 : f, c ? f : 0).modify({ [l]: i });
}
//#endregion
//#region ../core/src/utils/keyboardZoomMotion.js
var QC = {
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
}, $C = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = QC) {
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
			let t = ew(this.#e.KeyD, this.#e.KeyA), n = ew(this.#e.KeyW, this.#e.KeyS), r = tw(this.#t, t, e, this.#r), i = tw(this.#n, n, e, this.#i), a = e / 1e3;
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
function ew(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function tw(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = nw(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = nw(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function nw(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region ../core/src/view/gridView/zoomNavigationUtils.js
function rw(e, t, n) {
	if (dv(e.spec)) {
		let n = e, r = n.getZoomCoords(t);
		return r ? {
			view: n.child,
			coords: r
		} : void 0;
	}
	if (e instanceof Y || e instanceof X) return {
		view: e,
		coords: n
	};
}
function iw(e) {
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
function aw(e) {
	let t = iw(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region ../core/src/view/gridView/keyboardZoomController.js
var ow = class {
	#e;
	#t;
	#n = .5;
	#r = new $C();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = aw(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (ix(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
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
				let n = (rw(e.view, t.point, e.coords)?.coords ?? e.coords).normalizePoint(t.point.x, t.point.y);
				this.#n = n.x;
			}
		} else return;
	}
	#s() {
		let e = this.#e.addKeyboardListener;
		typeof e == "function" && (e("keydown", (e) => {
			sw(e) || this.#r.isNavigationKey(e.code) && aw(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		}), e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && aw(this.#t) && (e.preventDefault(), this.#c());
		}));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function sw(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || cw(e.target));
}
function cw(e) {
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
var lw = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), uw = class {
	#e;
	#t;
	#n;
	#r;
	#i = [];
	constructor({ direction: e, props: t, context: n, layoutParent: r, dataParent: i, getName: a }) {
		this.#e = e, this.#t = t.includePlotMargin ?? !0, this.#r = t.zindex ?? 0;
		let o = { ...t };
		delete o.includePlotMargin, delete o.zindex, this.#n = new Y(fw(o), n, r, i, a(e === "horizontal" ? "separatorHorizontal" : "separatorVertical"), { chrome: !0 }), V(this.#n, { skipSubtree: !0 });
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
function dw(e) {
	if (!e) return null;
	let t = e === !0 ? { ...lw } : {
		...lw,
		...e
	};
	return t.strokeDash === lw.strokeDash && (t.strokeDash = lw.strokeDash.slice()), t;
}
function fw(e) {
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
var pw = 10, mw = .5;
function hw(e, t) {
	return Math.max(0, Math.min(e.size, t - e.location));
}
function gw(e, t) {
	let n = e.grow ?? 0, r = e.px ?? 0, i = Math.max(Fn(e), Fn(t));
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
var _w = class e extends Mr {
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
		let s = dw("separator" in e ? e.separator : void 0);
		if (s) for (let t of Sw(e)) this.#s[t] = new uw({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#c = new ow({
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
		let n = new WC(e, this, this.#o);
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
		xe(this.#n, e, t), this.invalidateSizeCache();
	}
	get visibleChildren() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get layoutGrid() {
		return new ib(this.visibleChildren.length, this.#e ?? Infinity);
	}
	setChildren(e) {
		for (let e of this.#n) this.#d(e);
		this.#n = [];
		for (let t of e) this.appendChild(t);
		this.invalidateSizeCache();
	}
	#d(e) {
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
		let e = this.#T();
		return e && this.options.alignedChannel === e ? this.getTrackPlotGeometry(e)?.viewport : e ? Cw(this.visibleChildren, this.#r, e) : void 0;
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
				if (!e.isConfiguredVisible()) return Kn;
				e instanceof Y && !Bn(e) && r.push(e);
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
			let n = Cw(this.visibleChildren, this.#r, e);
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
				let n = mw / (typeof window > "u" ? 1 : window.devicePixelRatio ?? 1), r = this.getScaleResolution(e), i = new Set(t.flatMap(({ views: e }) => e));
				if (!r?.getOrderedMembers().some(({ view: e }) => i.has(e))) throw Error(`Container annotations require a shared ${e} scale defined by tracks.`);
				let a = t[0].content[e === "x" ? "width" : "height"], o = t[0].content[e === "x" ? "x" : "y"];
				for (let i of t) {
					for (let t of i.views) if (t.getScaleResolution(e) !== r) throw Error(`Container annotations require all visible tracks to use the shared ${e} scale resolution.`);
					let t = i.content[e === "x" ? "width" : "height"], s = i.content[e === "x" ? "x" : "y"];
					if (Math.abs(t - a) > n || Math.abs(s - o) > n) throw Error(`Container annotations require equal aligned visible plotting spans on the shared ${e} axis.`);
				}
			}
			let n = H.unionAll(t.map(({ content: e }) => e)), r = t.map(({ viewport: e }) => e), i = e ? Cw(this.visibleChildren, this.#r, e) : H.unionAll(r);
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
		await this.#p(cC(this)), this.invalidateSizeCache();
	}
	async #f() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of Se) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new kb({
				title: n.getTitle(),
				orient: Cb[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	async #p(e) {
		oC(this.#i), this.#i = {}, await rC(this.#i, e ?? cC(this), this, (e, t) => yw(e, t.channel) === this, this.#a);
	}
	async #m() {
		this.#S();
		let e = [];
		for (let [t, n] of this.paramRuntime.paramConfigs) if ("select" in n) {
			let r = He(n.select);
			if (!kt(r)) continue;
			let i = r.encodings ?? ["x"], a = this.#h(i, r.extent, `Interval selection param "${t}"`);
			if (!a) continue;
			let o = this.paramRuntime.createExpression(t), s = o();
			(!s || !fe(s)) && this.paramRuntime.setValue(t, n.value ? {
				type: "interval",
				intervals: n.value
			} : sn(i));
			let c = FC({
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
				controller: new IC(this, t, n, r, this.paramRuntime, !1, c)
			}), e.push(c.view.initializeChildren());
		} else if (It(n) && n.ruler.display !== "none") {
			let r = n.ruler.encodings ?? ["x"], i = this.#h(r, n.ruler.extent, `Ruler param "${t}"`);
			if (!i) continue;
			let a = wC({
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
		if (e.length === 1) return zC({
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
		let t = e == "column" ? "width" : "height", n = e === "column" ? "x" : "y", r = n === "x" ? [["before", "left"], ["after", "right"]] : [["before", "top"], ["after", "bottom"]], i = (e) => this.alignsChild(e.view, n) ? e.view.getAlignment(n).size : In(e.view.getViewportSize()[t], -e.getViewOverhang()[t]);
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
			let c = this.getTrackSizeAndInsets(n, a, Rn(this.getPlotSizeChildren(e, a).map(i)), o), l = a.map((e) => e.view.getStructuralSizeDefs(n));
			return {
				axisBefore: s.before - o.before,
				axisAfter: s.after - o.after,
				structuralBefore: c.before,
				structuralAfter: c.after,
				flexBefore: In(Rn(l.map((e) => e.before)), c.before - o.before),
				flexAfter: In(Rn(l.map((e) => e.after)), c.after - o.after),
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
				let t = this.#_(n).findIndex((e, t) => t !== i && e.view.grow), r = this.layoutGrid[n === "row" ? "rowIndices" : "colIndices"][t], a = e === "x" ? "width" : "height", o = r.flatMap((e) => this.visibleChildren[e].view.getDescendants()).filter((e) => !Bn(e) && e.getSize()[a].grow), s = o.find((e) => e.spec[a] !== void 0) ?? o.at(-1);
				throw new br("Nested aligned structural panels require fixed or step sizes.", s).withSpecLocation(s.spec, [a]);
			}
			let l = this.getGridOverhang();
			return {
				size: a[o],
				before: s.reduce((e, t) => e + Fn(t), 0) - l[e === "x" ? "left" : "top"],
				after: c.reduce((e, t) => e + Fn(t), 0) - l[e === "x" ? "right" : "bottom"]
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
					...KC(Object.values(this.#r), a, o, n),
					...i.axes
				};
				for (let [e, n] of Object.entries(s)) {
					let r = rS({ [e]: n }, {});
					for (let e of ww(i.getAxisCoords(), r)) t(i.view, e);
				}
				for (let e of ww(i.coords.shrink(i.getViewOverhang()), i.view.getPadding())) t(i.view, e);
				for (let e of Object.values(i.legends).filter((e) => e.isActive())) t(i.view, e.coords);
				if (i.title) for (let e of ww(i.title.coords, i.title.getOverhang())) t(i.view, e);
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
		}), n.push(In(r.flexBefore, r.axisBefore)), n.push(r.view), n.push(In(r.flexAfter, r.axisAfter));
		return n;
	}
	#y(e) {
		let t = e == "row" ? this.spec.height : this.spec.width, n = t || t === 0 ? dr(this.resolveSizeValue(e == "row" ? "height" : "width", t)) : void 0, r = n && this.#_(e).length === 1, i = this.getFlexItems(e);
		if (r) {
			let e = this.getViewSlot(0);
			i[e] = gw(n, i[e]);
		}
		let a = Mn(i);
		return n && !r ? gw(n, a) : a;
	}
	getViewSlot(e) {
		return 4 * e + 1;
	}
	getOverhang() {
		return this.getGridOverhang().add(this.#b()).add(this.getStructuralOverhang());
	}
	getStructuralOverhang() {
		if (!this.visibleChildren.length) return B.zero();
		let e = this.getAlignmentAnchor("x") ? this.getAlignment("x") : {
			before: this.#_("column").at(0).structuralBefore,
			after: this.#_("column").at(-1).structuralAfter
		}, t = this.getAlignmentAnchor("y") ? this.getAlignment("y") : {
			before: this.#_("row").at(0).structuralBefore,
			after: this.#_("row").at(-1).structuralAfter
		};
		return new B(t.before, e.after, t.after, e.before);
	}
	getGridOverhang() {
		let e = this.#_("column"), t = this.#_("row");
		return !e.length || !t.length ? B.zero() : new B(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#b() {
		return rS(this.#x(), this.#i);
	}
	#x() {
		let e = {};
		for (let t of Object.values(this.#r)) e[t.axisProps.orient] = t;
		return e;
	}
	getSize() {
		return this._cache("size", () => new En(this.#y("column"), this.#y("row")).addPadding(this.#b()));
	}
	arrange(e, t, n = {}) {
		if (this._invalidateCacheByPrefix("trackPlotGeometry"), this._invalidateCacheByPrefix("layoutFootprints"), super.arrange(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#b(), i = pw;
		for (;;) {
			let e = t.shrink(r);
			if (!aC(this.#i, e.width, e.height)) {
				t = e;
				break;
			}
			if (i--, !i) throw Error("Shared legend layout did not settle.");
			this.invalidateSizeCache(), r = this.#b();
		}
		e.pushView(this, t);
		let a = e.getDevicePixelRatio(), o = { devicePixelRatio: a }, s = (e, t) => {
			let n = this.getFlexItems(e), { sizes: r, growth: i } = Un(n, t);
			return {
				coords: Dn(n, r, t, o),
				growth: i
			};
		}, c = s("column", t.width), l = s("row", t.height), u = this.layoutGrid, d = pw;
		for (;;) {
			let e = !1;
			for (let [n, r] of this.visibleChildren.entries()) {
				let [i, a] = u.getCellCoords(n), o = c.coords[this.getViewSlot(i)], s = l.coords[this.getViewSlot(a)], d = hw(o, t.width), f = hw(s, t.height), p = r.view.prepareLayoutSize?.(d, f, c.growth, l.growth) === !0, m = r.prepareLegendLayoutSize(d, f);
				e ||= p || m;
			}
			if (!e) break;
			if (d--, !d) throw Error("Legend layout did not settle.");
			this.invalidateSizeCache(), c = s("column", t.width), l = s("row", t.height);
		}
		let f = (e) => Math.round(e * a) / a, p = [];
		for (let [e, n] of this.visibleChildren.entries()) {
			let { view: r } = n, [i, a] = u.getCellCoords(e), o = c.coords[this.getViewSlot(i)], s = l.coords[this.getViewSlot(a)], d = r.getViewportSize(), m = r.getSize(), h = n.getViewOverhang(), g = o.location - h.left, _ = s.location - h.top, v = (e, t, n = !1) => n ? e[t].grow ? (t == "width" ? o : s).size : e[t].px : (t == "width" ? o : s).size + h[t], y = v(d, "width", r.spec.viewportWidth != null), b = v(d, "height", r.spec.viewportHeight != null), x = v(m, "width", r.spec.viewportWidth != null), S = v(m, "height", r.spec.viewportHeight != null), C = n.scrollbars.horizontal, w = n.scrollbars.vertical, T = H.create(g, _, y, b).translateBy(t), E = r.isScrollable() ? T.modify({
				width: x,
				height: S
			}).translate(() => -f(C?.viewportOffset ?? 0), () => -f(w?.viewportOffset ?? 0)) : T;
			n.coords = T, n.plotCoords = E, p.push({
				col: i,
				row: a,
				viewportCoords: T,
				viewCoords: E,
				containerCoords: t,
				gridChild: n
			});
		}
		let m = this.getGridOverhang(), h = H.unionAll(p.map((e) => e.viewCoords)), g = qC(), { queueDecoration: _ } = g;
		for (let r of ["vertical", "horizontal"]) {
			let i = this.#s[r];
			i && (i.update(r === "vertical" ? c.coords : l.coords, r === "vertical" ? u.nCols : u.nRows, t, (e) => this.getViewSlot(e), m), _(i.getZindex(), Q.separator, () => i.arrange(e, t, n)));
		}
		if (h) for (let { overlay: t, order: r, channel: i } of this.#u) _(t.zindex, r, () => {
			let r = t.zindex > 0 ? this.getTrackPlotGeometry(i) : void 0;
			t.view.arrange(e, r?.content ?? pC(this.getScaleResolution(i), i, h, this), n);
		});
		for (let t of p) {
			let { gridChild: r, viewportCoords: i, col: a, row: o } = t, s = KC(Object.values(this.#r), a, o, u), c = JC(e, t, n, g, {
				...s,
				...r.axes
			});
			for (let t of Object.values(s)) {
				let a = t.axisProps.orient;
				_(YC(t.axisProps, c), Q.axis, () => {
					let o = r.getAxisCoords(i);
					t.arrange(e, ZC(o, a, t), n);
				});
			}
		}
		if (!p.length) for (let r of Object.values(this.#r)) {
			let { orient: i } = r.axisProps, a = ZC(t, i, r);
			_(YC(r.axisProps, !1), Q.axis, () => r.arrange(e, a, n));
		}
		oS(this.#i, this.#x(), t, e, n, _, Q.legend), g.arrange();
		let v = this.getAnnotationLayer(), y = v ? this.getTrackPlotGeometry(this.#T()) : void 0;
		if (v && y) {
			let t = Vt(n), r = qt(t, Et(y.viewport, !0, !0));
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
	propagateInteraction(e) {
		Gb(this, e, () => {
			let t = this.findPointedChild(e.point), n = t?.view, r = e.type === "wheelclaimprobe";
			if (!r) {
				this.#c?.handlePointerEvent(t, e);
				for (let n of Object.values(t?.scrollbars ?? {})) if (Kb(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			}
			let i = this.getAnnotationLayer(), a = i ? this.getTrackPlotGeometry(this.#T())?.viewport : void 0;
			if (!(i && a?.containsPoint(e.point.x, e.point.y) && this.context.getCurrentHover()?.mark?.unitView?.getLayoutAncestors().includes(i) && (i.propagateInteraction(e), e.stopped || r && e.wheelClaimed))) {
				if (r) this.#C(e, t);
				else if (n) Kb(e, () => !0, () => n.propagateInteraction(e), () => {
					if (e.type !== "wheel" && e.type !== "mousedown" && e.type !== "touchgesture") return;
					let r = rw(n, e.point, t.coords);
					r && this.#E(e, r.coords, iw(r.view), t);
				});
				else {
					let t = this.#w(e.point);
					t ? this.#E(e, t.coords, t.zoomableResolutions) : e.type === "mousedown" && (this.#D("vertical") || this.#D("horizontal")) && this.#E(e, H.ZERO, {
						x: /* @__PURE__ */ new Set(),
						y: /* @__PURE__ */ new Set()
					});
				}
			}
		});
	}
	#C(e, t) {
		let n = t?.view;
		if (n?.propagateInteraction(e), e.stopped || e.wheelClaimed) return;
		if (e.wheelIntent === "scroll") {
			let n = t?.scrollbars.vertical, r = n?.getWheelScroll(e.wheelEvent);
			r && e.claimWheel(n, { scroll: r });
			return;
		}
		if (!n) {
			this.#w(e.point) && e.claimWheel(this);
			return;
		}
		let r = rw(n, e.point);
		if (!r) return;
		let i = iw(r.view);
		Object.values(i).some((e) => e.size > 0) && e.claimWheel(r.view);
	}
	#w(e) {
		let t = this.#T();
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
	#T() {
		return pv(this.spec) ? "x" : mv(this.spec) ? "y" : void 0;
	}
	#E(e, t, n, r) {
		e.target ??= this;
		let i = e.type === "mousedown" ? {
			x: n.x.size ? void 0 : this.#D("horizontal", r),
			y: n.y.size ? void 0 : this.#D("vertical", r)
		} : {}, a = this.context.getCurrentHover(), o = cx(e, t, (e) => {
			let r = xw(t, e, n, this.context.animator), a = bw(i.x, e.xDelta), o = bw(i.y, e.yDelta);
			return (a || o) && this.context.animator.requestRender(), r || a || o;
		}, !e.facetId || a?.facetId && N(e.facetId, a.facetId) ? a : void 0, this.context.animator, { lockAxis: !!(i.x || i.y) });
		o && (this.#l(), this.#l = o);
	}
	#D(t, n) {
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
function vw(e, t) {
	let n = e.getLayoutAncestors().find((e) => e instanceof _w);
	if (!n) throw Error(`Legend collection for channel "${t}" declared at view "${e.name}" requires a GridView layout host.`);
	return n;
}
function yw(e, t) {
	let n = uC(e, t);
	if (n) return vw(n, t);
	let r = e.getLayoutAncestors();
	for (let e of r) {
		if (!(e instanceof _w)) continue;
		let t = e.getAnnotationLayer();
		if (t && r.includes(t)) return e;
	}
	return e instanceof _w ? e : void 0;
}
function bw(e, t) {
	if (!e || !t) return !1;
	let n = e.viewportOffset;
	return e.interpolateViewportOffset.stop(), e.setViewportOffset(n - t, { syncSmoother: !0 }), e.viewportOffset !== n;
}
function xw(e, t, n, r) {
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
function Sw(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function Cw(e, t, n) {
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
	if (h[m] = l, g[m] = u, !(h[0] >= g[0] || h[1] >= g[1])) return H.create(h[0], h[1], g[0] - h[0], g[1] - h[1]);
}
function ww(e, t) {
	return [
		H.create(e.x, e.y - t.top, e.width, t.top),
		H.create(e.x2, e.y, t.right, e.height),
		H.create(e.x, e.y2, e.width, t.bottom),
		H.create(e.x - t.left, e.y, t.left, e.height)
	].filter((e) => e.width > 0 && e.height > 0);
}
//#endregion
//#region ../core/src/view/gridView/guideViewSync.js
async function Tw(e) {
	Ly(e), Wy(e), Gy(e), await Py(e, e.context.genomeStore), await Ew(e);
}
async function Ew(e) {
	let t = e.getDescendants(), n = /* @__PURE__ */ new Map();
	for (let e of lC(t)) for (let t of new Set(Object.values(e.resolutions.legend))) {
		let r = yw(e, t.channel);
		if (r) {
			let t = n.get(r) ?? [];
			t.includes(e) || (t.push(e), n.set(r, t));
		}
	}
	for (let e of t) e instanceof Mr && await e.syncGuideViews({ legendOwners: n.get(e) ?? [] });
}
//#endregion
//#region ../core/src/view/concatView.js
var Dw = class extends _w {
	#e;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, hv(e) ? e.columns : pv(e) ? 1 : Infinity, a);
	}
	async initializeChildren() {
		let e = this.#r();
		this.setChildren(await Promise.all(this.#n().map((t) => this.context.createOrImportView(t, this, this, this.getNextAutoName("grid"), this.options.childSpecValidator, e)))), await this.#t();
	}
	getAnnotationLayer() {
		return this.#e;
	}
	async #t() {
		let e = pv(this.spec) ? "x" : mv(this.spec) ? "y" : void 0, t = pv(this.spec) || mv(this.spec) ? this.spec.annotate : void 0;
		if (!t?.length || !e) return;
		let n = e === "x" ? "y" : "x", r = {
			layer: t.map((t) => Ow(dt(t), e, n)),
			resolve: { scale: { [e]: "forced" } }
		};
		this.#e = await this.context.createOrImportView(r, this, this, this.getNextAutoName("annotation"), void 0, {
			inheritEncoding: !1,
			layoutSizeParams: "inherit"
		}), V(this.#e);
	}
	async addChildSpec(e, t) {
		return this.#i().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#i().removeChildAt(e);
	}
	async moveChildAt(e, t) {
		let n = this.#i();
		xe(this.#n(), e, t), super.moveChildAt(e, t);
		let r = await this.#a([]);
		await n.initializeUninitializedChromeViews(r), this.context.requestLayoutReflow();
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : pv(this.spec) && e === "x" || mv(this.spec) && e === "y" ? "shared" : "independent";
	}
	isConfiguredVisible() {
		return super.isConfiguredVisible() && (!this.options.collapseWhenEmpty || this.children.some((e) => e.isConfiguredVisible()));
	}
	#n() {
		let e = this.spec;
		return hv(e) ? e.concat : pv(e) ? e.vconcat : e.hconcat;
	}
	#r() {
		let e = {
			inheritEncoding: !0,
			imposedAlignmentChannel: this.options.alignedChannel
		};
		return this.options.layoutSizeParams == "force" && (e.layoutSizeParams = "force"), e;
	}
	#i() {
		return new nb(this, {
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
		for (let t of e) await Ew(t.view);
		await this.syncGuideViews({
			gridChildren: e,
			legendOwners: cC(this)
		});
		let t = /* @__PURE__ */ new Set([this]);
		for (let e of this.getDataAncestors()) if (Object.values(e.spec.resolve?.legend ?? {}).includes("collected")) {
			let n = e.getLayoutAncestors().find((e) => e instanceof _w);
			n && !t.has(n) && (await n.syncLegendViews(), t.add(n));
		}
		return t;
	}
};
function Ow(e, t, n) {
	if (!cv(e) && !lv(e)) throw Error("Container annotations accept only unit or layer specifications.");
	let r = e.resolve?.scale, i = r?.[t] ?? r?.default;
	if (i === "independent" || i === "excluded") throw Error(`Container annotations cannot use an independent ${t} scale.`);
	if (e.scales?.[t] !== void 0 || e.scales?.[n] !== void 0) throw Error("Container annotations cannot override positional scale settings.");
	return e.encoding && kw(e.encoding, t, n), lv(e) && (e.resolve = {
		...e.resolve,
		scale: {
			...e.resolve?.scale,
			[t]: "forced"
		}
	}, e.layer = e.layer.map((e) => Ow(e, t, n))), e;
}
function kw(e, t, n) {
	for (let [n, r] of Object.entries(e)) Array.isArray(r) || Aw(r, (e) => {
		let r = e.resolutionChannel;
		if (r !== void 0 && We(nn(r)) && nn(n) !== t) throw Error(`Container annotation channel ${n} cannot resolve through positional channel ${r}.`);
	});
	for (let n of [t, ht(t)]) {
		let r = e[n];
		r && Aw(r, (e) => {
			if (e.scale !== void 0) throw Error(`Container annotation encodings on ${n} cannot define scale settings.`);
			if (e.resolutionChannel !== void 0 && nn(e.resolutionChannel) !== t) throw Error(`Container annotation channel ${n} must resolve through ${t}.`);
			"value" in e || (e.domainInert = !0);
		});
	}
	for (let t of [n, ht(n)]) {
		let n = e[t];
		n && Aw(n, (e) => {
			if (!("value" in e) && e.scale !== null) throw Error(`Container annotation encodings on ${t} must use scale: null.`);
		});
	}
}
function Aw(e, t) {
	if (!e || typeof e != "object") return;
	t(e);
	let n = e.condition;
	if (n) for (let e of Array.isArray(n) ? n : [n]) e && typeof e == "object" && t(e);
}
//#endregion
//#region ../core/src/view/facetLayout.js
function jw(e, t, n) {
	let r = (e.row ? t.row.length : 1) * (e.column ? t.column.length : 1), i = new ib(r, e.row ? e.column && t.column.length || 1 : n ?? Infinity);
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
function Mw(e) {
	return e !== void 0 && e.header !== null && e.header?.labels !== !1;
}
function Nw(e, t, n, r, i = {
	row: 0,
	column: 0
}) {
	let a = Fw(e, t, n, i, r), o = Mn(a.column.sizes, i.column, t.width.grow), s = Mn(a.row.sizes, i.row, t.height.grow);
	return new En(o, s);
}
function Pw(e, t, n, r, i, a = {
	row: 0,
	column: 0
}, o) {
	let s = Fw(e, n, r, a, i), c = zn(s.column.sizes, t.width, {
		devicePixelRatio: o,
		offset: t.x,
		spacing: a.column
	}), l = zn(s.row.sizes, t.height, {
		devicePixelRatio: o,
		offset: t.y,
		spacing: a.row
	});
	return e.cells.map((e) => {
		let t = c[e.column], n = l[e.row], r = s.column.paddings[e.column], i = s.row.paddings[e.row], a = s.column.headers[e.column], o = s.row.headers[e.row], u = H.create(t.location, n.location, t.size, n.size).shrink(new B(o.top, a.right, o.bottom, a.left));
		return {
			cell: e,
			viewportCoords: u,
			childCoords: u.shrink(new B(i.top, r.right, i.bottom, r.left))
		};
	});
}
function Fw(e, t, n, r, i) {
	let a = e.rowIndices, o = e.colIndices, s = e.cells.map(n), c = e.cells.map((t) => {
		let n = i.row, s = i.column, c = a[t.row].length - 1, l = o[t.column].length - 1, u = new B(n.top + (!e.hasRowFacet || t.row === 0 ? s.top : 0), s.right + (t.column === c ? n.right : 0), n.bottom + (!e.hasRowFacet || t.row === l ? s.bottom : 0), s.left + (t.column === 0 ? n.left : 0));
		return new B(u.top > 0 ? u.top + r.row : 0, u.right > 0 ? u.right + r.column : 0, u.bottom > 0 ? u.bottom + r.row : 0, u.left > 0 ? u.left + r.column : 0);
	}), l = (e, t) => t.reduce((t, n) => t.union(e[n]), B.zero()), u = (e, n) => {
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
var Iw = /* @__PURE__ */ new Set([
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
]), Lw = class e extends Y {
	titleSpec;
	formatLabel = String;
	static create(t, n, r, i = {}) {
		let a = n.getConfigScopes(), o = z([...a.map((e) => e.header), ...a.map((e) => t === "row" ? e.headerRow : e.headerColumn)]);
		if ((i.labels ?? o.labels) === !1) return;
		let s = Mx({
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
		if (super(Rw(r), t.context, t, n, t.getNextAutoName(e === "column" ? "facetHeaderColumn" : "facetHeaderRow"), { chrome: !0 }), this.titleSpec = r, V(this, { skipSubtree: !0 }), i !== void 0) {
			let e = L(i);
			this.formatLabel = (t) => typeof t == "number" ? e(t) : String(t);
		}
	}
	getLabelOverhang(e) {
		let t = this.titleSpec;
		if (t.reserve === !1 || t.offset < 0) return B.zero();
		let n = t.align === "center" && t.baseline === "middle" ? .5 : 1, r = e.reduce((e, r) => e.union(Bx({
			...t,
			text: this.formatLabel(r)
		}, this.context, n)), B.zero());
		return B.createFromRecord({ [t.orient]: Math.max(18, r[t.orient]) });
	}
	updateLayout(e, t, n, r, i) {
		let a = e === "row" ? n.rowIndices : n.hasRowFacet ? n.colIndices : t.map((e, t) => [t]), { xy: o } = jx(this.titleSpec), s = Nx(this.titleSpec, this.context), c = this.titleSpec.orient, l = this.titleSpec.reserve !== !1 && this.titleSpec.offset >= 0 ? B.createFromRecord({ [c]: c === "left" || c === "right" ? i.column : i.row }) : B.zero();
		this.updateData(a.map((n) => {
			let i = Xx(H.unionAll(n.map((e) => t[e].childCoords)), H.unionAll(n.map((e) => t[e].viewportCoords)).expand(l), this.titleSpec), a = t[n[0]].cell;
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
function Rw(e) {
	return {
		domainInert: !0,
		data: { values: [] },
		resolve: { scale: {
			x: "excluded",
			y: "excluded"
		} },
		mark: Jx(e, {
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
var zw = class e extends Mr {
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
	#s = H.ZERO;
	#c;
	#l = () => {
		this.#_() && this.context.requestLayoutReflow();
	};
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.#e = Gw(e), this.#t = qw(e.spacing);
		for (let e of ["row", "column"]) {
			let t = this.#e[e];
			t && (this.#e[e] = mt(this.paramRuntime, t, this.#l));
		}
		this.#_();
	}
	async initializeChildren() {
		if (this.#v(this), this.child = await this.context.createOrImportView(this.spec.spec, this, this, this.getNextAutoName("facet"), (e) => {
			if (!uv(e)) throw new br("Facet children must import unit, layer, or multiscale specs.", this);
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
		}), this.#n = new Bw(this.child, this, 0);
		for (let e of ["column", "row"]) {
			let t = this.#e[e];
			if (Mw(t)) {
				let n = Lw.create(e, this, this.child, t.header);
				n && this.#r.set(e, n);
			}
			if (t && t.header !== null) {
				let n = Mx(t.title === void 0 ? t.field : t.title, this.getConfigScopes(), { orient: e === "row" ? "left" : "top" });
				n && this.#i.push(new Zx(n, this.context, this, this.child, this.getNextAutoName(e === "row" ? "facetTitleRow" : "facetTitleColumn")));
			}
		}
	}
	async syncGuideViews() {
		await this.#n.syncGuideViews(), this.invalidateSizeCache();
	}
	*[Symbol.iterator]() {
		yield* this.#n.getChildren(), yield* this.#r.values(), yield* this.#i;
	}
	getFacetFields() {
		return this.#e.fields;
	}
	getSize() {
		return this.isConfiguredVisible() ? (this.#g(), this.#c?.completed ? this._cache("size/size", () => this.#f()) : this.#f()) : er;
	}
	#u() {
		return this._cache("size/facetGrid", () => jw(this.#e, this.#a, this.spec.columns));
	}
	#d() {
		return this.#i.reduce((e, t) => e.add(t.getOverhang()), B.zero());
	}
	#f() {
		return Nw(this.#u(), this.child.getViewportSize(), (e) => this.#h(e), this.#p(), this.#t).addPadding(this.#d());
	}
	#p() {
		return {
			row: this.#r.get("row")?.getLabelOverhang(this.#a.row) ?? B.zero(),
			column: this.#r.get("column")?.getLabelOverhang(this.#a.column) ?? B.zero()
		};
	}
	#m(e) {
		return KC(Object.values(this.#n.axes), e.column, e.row, this.#u());
	}
	#h(e) {
		return this.#n.getOverhangAndPadding(this.#m(e));
	}
	arrange(e, t, n = {}) {
		if (super.arrange(e, t, n), this.#o = [], this.#s = H.ZERO, !this.isConfiguredVisible()) return;
		for (let e of Object.values(this.#n.axes)) e.visit((e) => e.facetCoords.clear());
		this.#g(), e.pushView(this, t);
		let r = H.create(0, 0, t.width, t.height), i = this.#i.map((e) => (r = r.shrink(e.getOverhang()), {
			title: e,
			frame: r
		})), a = Pw(this.#u(), r, this.child.getViewportSize(), (e) => this.#h(e), this.#p(), this.#t, e.getDevicePixelRatio()), o = Vt(n), s = H.unionAll(a.map((e) => e.childCoords)) ?? H.ZERO;
		this.#s = Qt(s.translateBy(t), o);
		let c = qC();
		for (let r of a) {
			let i = Qt(r.viewportCoords.translateBy(t), o), a = r.childCoords.translateBy(t);
			this.#o.push({
				...r,
				viewportCoords: i,
				childCoords: a
			}), JC(e, {
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
		if (i.length && a.length) for (let { title: r, frame: a } of i) c.queueDecoration(r.titleSpec.zindex, Q.title, () => r.arrange(e, Xx(s, a, r.titleSpec).translateBy(t), n));
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
			let a = e.x - _t(e.x, t.x, t.x2), o = e.y - _t(e.y, t.y, t.y2), s = a * a + o * o;
			s < r && (n = t, r = s);
		}
		if (n) return n.translate(e.x - _t(e.x, n.x, n.x2), e.y - _t(e.y, n.y, n.y2));
	}
	propagateInteraction(e) {
		Gb(this, e, () => {
			let t = this.getInteractionCell(e.point);
			t && (e.facetId = t.cell.facetId, this.child.propagateInteraction(e));
		});
	}
	#g() {
		let e = this.flowHandle?.collector;
		e && e !== this.#c && (this.#c = e, this.registerDisposer(e.observe(this.#l)), this.#_(), this.invalidateSizeCache());
	}
	#_() {
		let e = Vw(this.#e, this.#c);
		return N(e.row, this.#a.row) && N(e.column, this.#a.column) ? !1 : (this.#a = e, this.invalidateSizeCache(), !0);
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
}, Bw = class extends WC {
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
function Vw(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
	for (let i of t?.completed ? t.facetBatches.keys() : []) {
		if (i === void 0) continue;
		let t = P(i);
		e.row && n.add(t[0]), e.column && r.add(t.at(-1));
	}
	return {
		row: Hw(n, e.row),
		column: Hw(r, e.column)
	};
}
function Hw(e, t) {
	let n = F(t?.domain);
	if (t && Object.hasOwn(t, "domain")) {
		if (!Uw(n)) throw Error("Facet domain must resolve to an array of scalar values.");
		e = new Set(n);
	}
	let r = t?.sort ?? (n === void 0 ? "ascending" : void 0);
	if (r === void 0) return Array.from(e);
	if (Array.isArray(r)) {
		let t = new Set(r);
		return Array.from(t).filter((t) => e.has(t)).concat(Array.from(e).filter((e) => !t.has(e)));
	}
	return Array.from(e).sort(r === "descending" ? (e, t) => Ww(t, e) : Ww);
}
function Uw(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e));
}
function Ww(e, t) {
	return e < t ? -1 : +(e > t);
}
function Gw(e) {
	let t, n, r = e.facet;
	if (Hm(r)) n = Kw(r, "column");
	else if (Um(r)) t = Kw(r.row, "row"), n = Kw(r.column, "column");
	else throw Error("Invalid facet specification: " + JSON.stringify(r));
	if (e.columns !== void 0 && !Hm(r)) throw Error("Facet \"columns\" requires a single field definition, not a row/column mapping.");
	if (e.columns !== void 0 && (!Number.isInteger(e.columns) || e.columns < 1)) throw Error("Facet \"columns\" must be a positive integer.");
	let i = [t?.field, n?.field].filter((e) => e !== void 0);
	if (!i.length) throw Error("Facet specification must define at least one field.");
	return {
		row: t,
		column: n,
		fields: i
	};
}
function Kw(e, t) {
	if (e === void 0) return;
	if (!Hm(e)) throw Error(`Facet ${t} definition must define a field.`);
	let n = e.sort;
	if (n !== void 0 && n !== "ascending" && n !== "descending" && !Uw(n)) throw Error("Facet sort must be \"ascending\", \"descending\", or an array of scalar values.");
	let r = e.header;
	if (r != null && (typeof r != "object" || Array.isArray(r) || Object.keys(r).some((e) => !Iw.has(e)) || r.labels !== void 0 && typeof r.labels != "boolean" || r.format !== void 0 && typeof r.format != "string")) throw Error("Facet header must be null or an object with supported title properties, boolean \"labels\", and string \"format\".");
	return e;
}
function qw(e = 10) {
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
var Jw = [
	"top",
	"right",
	"bottom",
	"left"
], Yw = class e extends _w {
	#e;
	#t = /* @__PURE__ */ new Map();
	#n = {
		x: 0,
		y: 0
	};
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, 3, a), this.spec = e;
		for (let t of Object.keys(e.surround)) if (!Jw.includes(t)) throw this.#o(`Unknown surround side "${t}".`, e, ["surround", t]);
		if ("axes" in e || "viewportWidth" in e || "viewportHeight" in e) throw this.#o("Surround axes and viewports must be configured on its plots.", e);
		Zw(e, this);
		for (let t of ["x", "y"]) if (this.getConfiguredOrDefaultResolution(t, "axis") !== "independent") throw this.#o("Surround does not support cross-region shared axes.", e, [
			"resolve",
			"axis",
			t
		]);
	}
	async initializeChildren() {
		this.#e = await this.context.createOrImportView(this.#i(this.spec.spec), this, this, "center", (e) => this.#a(e), { inheritEncoding: !0 });
		let e = await Promise.all(Jw.flatMap((e) => {
			let t = this.spec.surround[e];
			return t === void 0 ? [] : [this.#r(e, t)];
		}));
		this.setChildren([this.#e, ...e]);
	}
	async #r(e, t) {
		let n = Xw(e), r = n === "x" ? "y" : "x", i = n === "x" ? "width" : "height", a = Array.isArray(t) ? this.spec : t, o = Array.isArray(t) ? ["surround", e] : void 0, s = Array.isArray(t) ? { views: t } : t;
		if (!Array.isArray(s.views)) throw this.#o(`Surround ${e} requires a views array.`, a, o ?? ["views"]);
		let c = [
			"width",
			"height",
			"viewportWidth",
			"viewportHeight"
		].find((e) => e in s);
		if (c) throw this.#o(`Surround ${e} groups inherit their aligned size from the center; specify thickness on their plots.`, a, [c]);
		Zw(s, this);
		let { views: l, ...u } = s, d = dt(u);
		delete d.overhang;
		let f = l.map((t) => this.#i(t, e)), p = en(a, {
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
		return Array.isArray(t) && V(m), this.#t.set(m, e), m;
	}
	#i(e, t) {
		let n = dt(e);
		return fv(n) || this.#a(n, t), n;
	}
	#a(e, t) {
		let n = t && gv(e);
		if (!uv(e) && !n) throw this.#o(`Surround ${t ?? "center"} accepts unit or layer plots${t ? " and nested surrounds" : ""}.`, e);
		let r = t ? Xw(t) : this.options.imposedAlignmentChannel;
		if (r) {
			let i = r === "x" ? "width" : "height";
			if (e[i] !== void 0) throw this.#o(`Surround ${t ?? "center"} plots inherit ${i} from the center; specify only their thickness.`, e, [i]);
			n || (e[i] = "container");
		}
		if ("viewportWidth" in e || "viewportHeight" in e) throw this.#o("Surround plots do not support scrollable viewports.", e);
	}
	#o(e, t, n = []) {
		return new br(e, this).withSpecLocation(t, n);
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
		return new ib(e.map((e) => r[e]));
	}
	getPlotSizeChildren(e, t) {
		let n = t.find(({ view: e }) => e === this.#e);
		return n ? [n] : t;
	}
	alignsChild(e, t) {
		let n = this.#t.get(e);
		return e === this.#e || n !== void 0 && Xw(n) === t;
	}
	getAlignmentAnchor(e) {
		return this.#e;
	}
	getFlexItems(e) {
		let t = super.getFlexItems(e), n = e === "column" ? "x" : "y";
		if (this.options.imposedAlignmentChannel === n || !t.length) return t;
		let r = this.layoutGrid.getCellCoords(0)[n === "x" ? 0 : 1], i = this.getViewSlot(r);
		return t.some((e, t) => t !== i && e.grow) ? t.map((e, t) => t !== i && e.grow ? { px: Ln((e.px ?? 0) + e.grow * this.#n[n], e) } : e) : t;
	}
	getStructuralSizeDefs(e) {
		let t = e === "x" ? "column" : "row", n = super.getFlexItems(t);
		if (!n.length || this.options.imposedAlignmentChannel === e) return super.getStructuralSizeDefs(e);
		let r = this.layoutGrid.getCellCoords(0)[e === "x" ? 0 : 1], i = this.getViewSlot(r), a = this.getGridOverhang();
		return {
			before: In(Mn(n.slice(0, i)), -a[e === "x" ? "left" : "top"]),
			after: In(Mn(n.slice(i + 1)), -a[e === "x" ? "right" : "bottom"])
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
		return Jw.some((e) => i[e] !== a[e]);
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
				e > Fn(n) && (n = {
					...n,
					minPx: e
				});
			}
			i[c] = Math.max(r[c], u - Fn(n) - l);
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
		let n = this.spec.surround[t], r = Array.isArray(n) ? void 0 : n.overhang, i = e.view.getStructuralOverhang(), a = tr(e.getOverhangAndPadding(), r, i), o = Xw(t) === "x", s = o ? ["left", "right"] : ["top", "bottom"], c = { ...a };
		for (let n of s) {
			let a = this.visibleChildren.find(({ view: e }) => this.#t.get(e) === n);
			if (!a || a.view.getAlignment(Xw(n))[t === "top" || t === "left" ? "before" : "after"] > 0 || r?.[n] === !0 || this.#c(e.view, n) || !o && a.getOverhangAndPadding()[t] > 0) continue;
			let s = o ? "width" : "height", l = Fn(a.view.getViewportSize()[s]) + (this.spec.spacing ?? 10);
			c[n] = Math.max(i[n], c[n] - l);
		}
		return B.createFromRecord(c);
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
		let e = new Set(Array.from(this.#t.values(), Xw));
		for (let t of e) this.#u(this.#e, t, "center");
		for (let [e, t] of this.#t) this.#u(e, Xw(t), t);
		for (let e of this.getDescendants()) if (e instanceof Y && !Bn(e)) for (let t of ["x", "y"]) {
			let n = e.getAxisResolution(t);
			if (n && this.getDataAncestors().includes(n.hostView)) throw new br("Surround does not support axes hoisted from its plots.", e);
		}
	}
	#u(t, n, r) {
		t.visit((t) => {
			if (t instanceof e) return this.#u(t.#e, n, r), Kn;
			if (t instanceof Y && !Bn(t)) for (let e of [n, n === "x" ? "x2" : "y2"]) {
				let i = Ot(t.mark.encoding[e]);
				if (!i || i.scale === null) continue;
				let a = nn(i.resolutionChannel ?? e);
				if (!Wt(a) || t.getScaleResolution(a) !== this.#e.getScaleResolution(n)) throw new br(`Surround ${r} plot "${t.name}" must share the center's ${n} scale.`, t).withSpecLocation(t.spec, ["encoding", e]);
			}
		});
	}
	arrange(t, n, r = {}) {
		if (!this.layoutParent) {
			let e = this.getPadding();
			this.prepareLayoutSize(n.width, n.height, Un(super.getFlexItems("column"), n.width - e.width).growth, Un(super.getFlexItems("row"), n.height - e.height).growth);
		}
		if (super.arrange(t, n, r), !this.isConfiguredVisible()) return;
		this.#l();
		let i = this.#e.coords, a = .5 / t.getDevicePixelRatio();
		for (let [t, n] of this.#t) {
			let r = Xw(n), o = r === "x" ? "width" : "height";
			t.visit((t) => {
				if (!t.isConfiguredVisible() || Bn(t)) return Kn;
				if (t instanceof Y || t instanceof e) {
					let s = t.getAlignmentCoords(r);
					if (Math.abs(s[r] - i[r]) > a || Math.abs(s[o] - i[o]) > a) throw new br(`Surround ${n} plot "${t.name}" has an incompatible ${r} plotting span.`, t);
					if (t instanceof e) return Kn;
				}
			});
		}
		if (this.children.some((t) => t instanceof _w && t.children.some((t) => t instanceof e))) {
			let e = this.visibleChildren.map((e) => e.view.getLayoutFootprints());
			for (let t = 0; t < e.length; t++) for (let n = t + 1; n < e.length; n++) for (let r of e[t]) for (let t of e[n]) {
				if (r.chrome && t.chrome) continue;
				let e = r.coords, n = t.coords;
				if (Math.min(e.x2, n.x2) - Math.max(e.x, n.x) > a && Math.min(e.y2, n.y2) - Math.max(e.y, n.y) > a) throw new br(`Surround panels "${r.view.name}" and "${t.view.name}" overlap.`, t.view).withSpecLocation();
			}
		}
	}
};
function Xw(e) {
	return e === "top" || e === "bottom" ? "x" : "y";
}
function Zw(e, t) {
	if (e.params?.some((e) => It(e) || Ct(e) && He(e.select).type === "interval")) throw new br("Surround input controllers must be configured on its plots.", t);
}
//#endregion
//#region ../core/src/config/resolveConfig.js
function Qw({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return z([
		e,
		t,
		n
	]);
}
function $w(e, t) {
	if (e || t) return z([e, t]);
}
//#endregion
//#region ../core/src/view/viewFactory.js
var eT = "viewRoot", tT = /* @__PURE__ */ new WeakMap();
function nT(e) {
	return tT.get(e) ?? e;
}
var rT = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(lv, t(X)), this.addViewType($_, ((e, t, n, r, i, a) => new X(ev(e), t, n, r, i, a))), this.addViewType(cv, t(Y)), this.addViewType(pv, t(Dw)), this.addViewType(mv, t(Dw)), this.addViewType(hv, t(Dw)), this.addViewType(dv, t(zw)), this.addViewType(gv, t(Yw));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw oT(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let s, c = fv(e) ? e.name ?? null : void 0;
		if (fv(e)) {
			let i;
			if ("url" in e.import) {
				if (this.options.allowImport) i = await qm(e, r.getBaseUrl(), t);
				else throw new br("Importing views is not allowed!", n);
			} else if ("template" in e.import) i = iT(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), aT(i, e), s = i;
		} else s = e;
		r || (s = en(s, {
			...s,
			params: yu(s.params)
		}));
		let l = (e) => e?.params?.some((e) => Ct(e) && He(e.select).type == "interval"), u = pv(s) || mv(s) || hv(s) || gv(s), d = !r && this.options.wrapRoot && i === "viewRoot" && (!u || s.title !== void 0 || l(s));
		if (d) {
			let e = en(s, { ...s });
			delete e.theme, s = {
				name: "implicitRoot",
				vconcat: [e]
			};
		}
		let f = this.createView(s, t, n, r, i, o);
		if (c !== void 0 && sr(f, c), d && V(f), f instanceof Mr && await f.initializeChildren(), d) {
			let e = f;
			tT.set(f, e.children[0]);
		}
		return f.registerSizeInvalidation(), f;
	}
};
function iT(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return dt(n);
	if (t.dataParent) return iT(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function aT(e, t) {
	t.name != null && (e.name = t.name), t.visible != null && (e.visible = t.visible), t.zindex != null && (e.zindex = t.zindex), e.config = $w(t.config, e.config);
	let n = Xt(t.params) ? t.params : I(t.params) ? Object.entries(t.params).map(([e, t]) => ({
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
function oT(e) {
	return "samples" in e && I(e.samples) && "spec" in e && I(e.spec);
}
//#endregion
//#region ../core/src/utils/inertia.js
var sT = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = Pn(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = Ut([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
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
		let n = _t(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function cT(e) {
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
var lT = class {
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
		if (!Xb(this.uiEvent)) throw Error("Not a WheelEvent!");
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
		return this.#e ||= Qb(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if ("sourceEvent" in this.uiEvent) return this.uiEvent.sourceEvent;
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if ("sourceEvent" in this.uiEvent) return this.uiEvent.sourceEvent;
		if (!Xb(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= Zb(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
};
//#endregion
//#region ../core/src/genomeSpy/interactionDispatcher.js
function uT(e, t) {
	return e === t || e !== void 0 && t !== void 0 && N(e, t);
}
var dT = class {
	#e;
	#t;
	#n;
	#r = /* @__PURE__ */ new Map();
	constructor({ viewRoot: e }) {
		this.#e = e;
	}
	dispatch(e, t) {
		this.#t = e;
		let n = new lT(e, t);
		return this.#e.propagateInteraction(n), this.#n = n.target, n.type === "mousemove" && this.#i(n), n;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.size === 0) {
			this.#r.clear(), this.#n = void 0;
			return;
		}
		let t = new lT(this.#t, e, "mouseleave");
		this.#a(t, Array.from(this.#r.keys()), "mouseleave", void 0, this.#r), this.#r.clear(), this.#n = void 0;
	}
	getCurrentTarget() {
		return this.#n;
	}
	#i(e) {
		let t = e.pointedViews;
		if (t.size === 0) for (let n of this.#o(e.target)) t.set(n, void 0);
		let n = Array.from(t.keys()), r = Array.from(this.#r.keys()), i = r.filter((e) => !t.has(e) || !uT(t.get(e), this.#r.get(e))), a = n.filter((e) => !this.#r.has(e) || !uT(t.get(e), this.#r.get(e)));
		i.length > 0 && this.#a(e, i, "mouseleave", n.at(-1), this.#r), a.length > 0 && this.#a(e, a, "mouseenter", r.at(-1), t), this.#r = t;
	}
	#a(e, t, n, r, i) {
		for (let a = 0; a < t.length; a++) {
			let o = t[n === "mouseleave" ? t.length - 1 - a : a], s = new lT(e.point, e.uiEvent, n);
			if (s.target = o, s.currentTarget = o, s.relatedTarget = r, s.facetId = i.get(o), s.pointedViews = e.pointedViews, this.#s(o, s), s.stopped) return;
		}
	}
	#o(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#s(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, fT = class {
	#e;
	#t;
	#n;
	#r;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#i(pT(e, t));
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
function pT(e, t) {
	let n = t?.mark;
	if (n?.getCursorSpec?.() !== void 0) return n;
	for (let t of e?.getLayoutAncestors() ?? []) if (t.getCursorSpec?.() !== void 0) return t;
}
//#endregion
//#region ../core/src/genomeSpy/interactionController.js
var mT = class {
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
	#S = new Lm();
	#C = /* @__PURE__ */ new Set();
	#w = /* @__PURE__ */ new Set();
	#T;
	#E = (e) => console.error(e);
	#D = () => !0;
	#O() {
		this.#n.sticky = !1, this.#v = !0, this.#n.clear();
	}
	constructor({ viewRoot: e, canvas: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, readPickingId: s, reportError: c, canPick: l, wheelBehavior: u = "default" }) {
		this.#e = e, this.#p = u, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o ?? (() => {}), this.#s = s, this.#E = c ?? this.#E, this.#D = l ?? this.#D, this.#c = new dT({ viewRoot: e }), this.#l = new fT({ canvas: t }), this.#u = void 0, this.#d = new sT(this.#r), this.#m = void 0, this.#h = void 0;
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
		let n = new Z(e.x, e.y);
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
		let o = (e, t) => {
			let n = this.#c.dispatch(e, t);
			return !this.#g && !this.#_ && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#y === 0 && this.#P(n.target), n;
		}, s, c, l = (e, t) => {
			let n = {};
			c = n;
			let r = this.#L(e.x, e.y, () => c === n && !s);
			r ? r.then((r) => {
				if (c !== n) return;
				c = void 0, r && o(e, t);
				let i = s;
				s = void 0, i && l(i.point, i.event);
			}) : (c = void 0, o(e, t));
		}, u = (e) => {
			let t = performance.now(), n = t - r < 200;
			if (e instanceof MouseEvent) {
				let a = this.#A(e), u = !1;
				if (this.#S.emit(e.type, {
					sourceEvent: e,
					point: a,
					preventViewDefault: () => {
						u = !0;
					}
				}, this.#E), u) {
					e.type === "wheel" && this.#k();
					return;
				}
				let d;
				if ([
					"click",
					"dblclick",
					"contextmenu"
				].includes(e.type) && (d = this.#L(a.x, a.y, void 0, (t) => this.#B(e, a, t))), e.type !== "contextmenu" && this.#I()) {
					e.type === "wheel" && this.#k();
					return;
				}
				this.#h = a;
				let f = !1;
				if (e.type == "mousemove" && !n && this.#y === 0 && (this.#v = !1, this.#n.handleMouseMove(e), this.#g = !1, e.buttons == 0 && !ax() && (c ? s = {
					point: a,
					event: e
				} : l(a, e), f = !0)), e.type == "mousemove" && !f && (c = void 0, s = void 0), f) {
					this.#d.cancel();
					return;
				}
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !ax()) this.#o();
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
					} else if (ox(this.#r), this.#f !== u.wheelOwner && this.#k(), this.#f = u.wheelOwner, n.preventDefault(), !i && u.wheelSmooth) {
						let e = u.wheelOwner, t = cT(n);
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
					let t = this.#m?.subtract(Z.fromMouseEvent(e)).length >= 3, n = () => {
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
				let p = o(a, e);
				return e.type == "dblclick" && this.#y === 0 && this.#j(a) && this.#M(), p;
			}
		};
		n(e, "mousedown", (e) => {
			this.#m = Z.fromMouseEvent(e), this.#_ = !1;
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
		].forEach((t) => n(e, t, u, t === "wheel" ? { passive: !1 } : void 0));
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
				distance: hT(t, n)
			};
		}, f = (t, n, r, i, a, s, c) => {
			let l = gT(e, t, n);
			o(l, {
				type: "touchgesture",
				phase: r,
				pointerCount: i,
				xDelta: a,
				yDelta: s,
				zDelta: c
			});
		}, p = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#g = !1;
			let t = d(e.touches);
			if (!t) {
				a = void 0;
				return;
			}
			if (!a || a.pointerCount !== t.pointerCount) {
				a = t;
				return;
			}
			let n = t.centerX - a.centerX, r = t.centerY - a.centerY, i = t.pointerCount === 2 ? _T(a.distance, t.distance) : 0;
			(n !== 0 || r !== 0 || i !== 0) && Number.isFinite(n) && Number.isFinite(r) && Number.isFinite(i) && f(a.centerX, a.centerY, "move", t.pointerCount, n, r, i), a = t;
		}, m = (e) => {
			e.preventDefault(), this.#g = !1, a && e.touches.length === 0 && f(a.centerX, a.centerY, "end", a.pointerCount, 0, 0, 0), a = d(e.touches);
		};
		return n(e, "touchstart", p, { passive: !1 }), n(e, "touchmove", p, { passive: !1 }), n(e, "touchend", m, { passive: !1 }), n(e, "touchcancel", m, { passive: !1 }), n(e, "dragstart", (e) => e.stopPropagation()), n(e, "mouseout", (e) => {
			this.#I() || (this.#y > 0 ? this.#F() : (this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#U(), this.#h = void 0, c = void 0, s = void 0));
		}), () => {
			this.#k();
			for (let e of t) e();
			this.#S.clear(), this.#C.clear(), this.#w.clear();
		};
	}
	#k() {
		this.#d.stop(), this.#f = void 0, ox(this.#r);
	}
	#A(e) {
		return gT(this.#t, e.clientX, e.clientY);
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
		ax() ? this.#P(this.#c.getCurrentTarget()) : this.#L(e.x, e.y, () => this.#y === 0 && !this.#I() && this.#h === e, () => this.#P(this.#c.getCurrentTarget()));
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
	#L(e, t, n = () => !0, r) {
		let i = this.#x;
		this.#o();
		let a = this.#s?.(e, t) ?? 0, o = (a) => {
			if (i !== this.#x || !n()) return !1;
			this.#g = !1;
			let o = this.#z(e, t, a ?? 0);
			return this.#R(i, o), r?.(o), !0;
		};
		if (a instanceof Promise) return a.then(o, (e) => (console.error("Picking failed.", e), !1));
		o(a);
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
					let o = hy(n, t, r?.params, e.facetId);
					return a(n, t, r?.params, o);
				}
			}, e);
		}
	}
	#z(e, t, n, r) {
		if (n === 0) return;
		let i, a = !1;
		return this.#e.visit((o) => {
			if (o instanceof Y && o.mark.isPickingParticipant() && (!r || o.getLayoutAncestors().includes(r))) for (let [r, s] of o.facetCoords) {
				let c = r !== void 0 && o.getLayoutAncestors().some((e) => dv(e.spec)) ? r : void 0, l = s.containsPoint(e, t), u = o.mark.properties.clip, d = u === !0 || u === "x" && (e < s.x || e > s.x2) || u === "y" && (t < s.y || t > s.y2);
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
			if (a) return cr;
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
		if (!(!t && !e || t && e && t.mark === e.mark && t.uniqueId === e.uniqueId && t.datum === e.datum && (t.facetId === e.facetId || t.facetId && e.facetId && N(t.facetId, e.facetId)))) {
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
function hT(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function gT(e, t, n) {
	let r = e.getBoundingClientRect();
	return new Z(t - r.left - e.clientLeft, n - r.top - e.clientTop);
}
function _T(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region ../core/src/rendering/renderingBackend.js
async function vT(e) {
	if (e.renderer == "canvas") {
		if (!pr.canvasBackend) throw yT("canvas");
		return pr.canvasBackend(e);
	}
	if (e.renderer == "webgpu") {
		if (pr.webgpuBackend) return pr.webgpuBackend(e);
		throw Error("The experimental WebGPU renderer is only available in development and the playground preview.");
	}
	if (e.renderer != "auto" && e.renderer != "webgl") throw Error("Unknown renderer: " + e.renderer);
	let t = pr.webglBackend, n = pr.canvasBackend;
	if (!t) {
		if (e.renderer == "webgl") throw yT("webgl");
		if (n) return n(e);
		throw Error("No rendering backend is registered. Import \"@genome-spy/core/rendering/webgl.js\" or \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".");
	}
	try {
		return await t(e);
	} catch (t) {
		if (e.renderer == "webgl") throw t;
		if (!n) throw Error("WebGL2 initialization failed and the Canvas2D fallback is not registered. Import \"@genome-spy/core/rendering/canvas.js\" when using \"@genome-spy/core/minimal\".", { cause: t });
		let r = await n(e);
		return xr("WebGL2 is unavailable. Using the Canvas2D compatibility renderer."), r;
	}
}
function yT(e) {
	return /* @__PURE__ */ Error(`The "${e}" rendering backend is not registered. Import "@genome-spy/core/rendering/${e}.js" when using "@genome-spy/core/minimal".`);
}
//#endregion
//#region ../core/src/genomeSpy/viewContextFactory.js
function bT(e) {
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
var xT = {
	xOffset: 0,
	yOffset: 0,
	opacity: 1,
	clamp: !1
}, ST = {
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
}, CT = {
	x2: void 0,
	y2: void 0,
	filled: !0,
	strokeWidth: 3,
	cornerRadius: 0,
	minWidth: .5,
	minHeight: .5,
	minOpacity: 1
}, wT = {
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
}, TT = {
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
}, ET = {
	x2: void 0,
	y2: void 0,
	size: 1,
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt"
}, DT = {
	minLength: 0,
	strokeDash: null,
	strokeDashOffset: 0,
	strokeCap: "butt",
	orient: void 0,
	thickness: 1
}, OT = {
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
}, kT = {
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
}, AT = {
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
}, jT = { expr: "round(axisLength / (30 + 55 * smoothstep(100, 700, axisLength)))" }, MT = { tickCount: jT }, NT = { tickCount: jT }, PT = {
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
}, FT = {
	nominalColorScheme: "tableau10",
	ordinalColorScheme: "blues",
	quantitativeColorScheme: "viridis"
}, IT = {
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
}, LT = {
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
}, RT = {
	orient: "top",
	frame: "group",
	reserve: !1,
	anchor: "start",
	align: "left",
	baseline: "top",
	offset: -10,
	dx: 10,
	fontSize: 12
}, zT = {
	view: {},
	mark: xT,
	point: ST,
	rect: CT,
	arrow: wT,
	rule: ET,
	tick: DT,
	text: OT,
	link: kT,
	axis: AT,
	axisX: MT,
	axisY: NT,
	axisLocus: PT,
	legend: sS,
	legendTrack: uS,
	scale: FT,
	range: IT,
	title: LT,
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
		overlay: RT,
		"overlay-title": RT,
		"group-subtitle": {
			fontSize: 11,
			fontStyle: "normal",
			fontWeight: "normal"
		},
		...lS,
		...TT,
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
function BT(e) {
	$y(e), eb(e);
	let t = nT(e), n = t.paramRuntime.createExpression("defaultThemeColors");
	t.paramRuntime.computed("theme colors", n.dependencies, () => bu(n()));
}
//#endregion
//#region ../core/src/utils/bindDisposer.js
function VT(e, t) {
	let n = !1, r = () => {
		n || (n = !0, t());
	};
	return e(r), r;
}
//#endregion
//#region ../core/src/paramRuntime/embedParamApi.js
function HT(e, t = {}) {
	return {
		get(n) {
			return WT(e, n, t);
		},
		getSelection(n) {
			return GT(e, n, t);
		}
	};
}
function UT(e, t, n, r) {
	QT(r);
	let i = e.paramRuntime.findConfiguredParam(t);
	if (!i) throw Error(`${n} "${t}" not found.`);
	let a = i.runtime.findRuntimeForParam(t);
	return {
		...i,
		valueRuntime: a
	};
}
function WT(e, t, n = {}) {
	let { config: r, runtime: i, valueRuntime: a } = UT(e, t, "Parameter", n), o = "expr" in r;
	return ZT(a, t, n, (e) => {
		if (o) throw Error("Cannot set computed parameter \"" + t + "\".");
		i.setValue(t, e);
	});
}
function GT(e, t, n = {}) {
	let { config: r, runtime: i, valueRuntime: a } = UT(e, t, "Selection", n);
	if (!("select" in r)) throw Error("Parameter \"" + t + "\" is not a selection in this scope.");
	let o = He(r.select), s = kt(o) ? i.getSelectionController(t) : void 0;
	if (kt(o) && !s) throw Error("Selection \"" + t + "\" has no interaction host in this scope.");
	return {
		type: o.type,
		getValue() {
			return QT(n), qT(a.getValue(t), s);
		},
		subscribe(e, r = {}) {
			return QT(n), r.delivery === "commit" && s ? $T(n, s.subscribeCommit((t) => e(qT(t, s)))) : XT(a, t, () => {
				YT(e, qT(a.getValue(t), s));
			}, n);
		},
		clear() {
			QT(n), s ? s.clear() : Pe(o) && o.toggle ? i.setValue(t, Ge()) : i.setValue(t, be(null));
		},
		...Pe(o) ? { setValue(r) {
			QT(n), i.setValue(t, KT(e, o, r));
		} } : {},
		...s ? { contains(e) {
			return QT(n), s.contains(e);
		} } : {}
	};
}
function KT(e, t, n) {
	if (!Array.isArray(n)) throw Error("Expected an array of key tuples.");
	let r = t.toggle ? "multi" : "single";
	if (!n.length) return r === "multi" ? Ge() : be(null);
	if (!(e instanceof Y)) throw Error("Set point selections through a source unit view.");
	let i = jr(e.getEncoding());
	if (!i) throw Error("Setting point selections requires encoding.key.");
	for (let e of n) if (!Array.isArray(e) || e.length !== i.length || !e.every((e) => typeof e == "string" || typeof e == "boolean" || typeof e == "number" && Number.isFinite(e))) throw Error("Key tuples must match encoding.key and contain finite scalar values.");
	let a = e.getCollector();
	if (!a || !iu(a)) throw Error("Selection source data is not ready.");
	let o = Be(r, i, n, (e, t) => a.findDatumByKey(e, t));
	if (o.unresolved.length) throw Error("Selection keys were not found in loaded data.");
	return o.selection;
}
function qT(e, t) {
	if (fe(e)) return {
		type: "interval",
		active: Object.values(e.intervals).some((e) => e !== null),
		intervals: Object.fromEntries(Object.entries(e.intervals).map(([e, t]) => [e, t ? [...t] : null])),
		complexIntervals: t.getComplexIntervals(e.intervals)
	};
	let n;
	if (Ce(e)) n = e.datum ? [e.datum] : [];
	else if (Ne(e)) n = Array.from(e.data.values());
	else throw Error(`Selection snapshot does not support "${e.type}" selections.`);
	return {
		type: "point",
		active: n.length > 0,
		data: n.map(JT)
	};
}
function JT(e) {
	let t = { ...e };
	return delete t.__uniqueId, t;
}
function YT(e, t) {
	try {
		e(t);
	} catch (e) {
		console.error(e);
	}
}
function XT(e, t, n, r) {
	let i = e.getParamRef(t);
	return $T(r, e.effect([i], n));
}
function ZT(e, t, n, r) {
	return {
		getValue() {
			return QT(n), e.getValue(t);
		},
		setValue(e) {
			QT(n), r(e);
		},
		subscribe(r) {
			return QT(n), XT(e, t, () => {
				YT(r, e.getValue(t));
			}, n);
		}
	};
}
function QT(e) {
	if (e.isActive && !e.isActive()) throw Error("Cannot use a parameter or selection handle after the embed was finalized.");
	if (e.isLive && !e.isLive()) throw Error("Cannot use a parameter or selection handle after its view was removed.");
}
function $T(e, t) {
	return e.registerDisposer ? VT(e.registerDisposer, t) : t;
}
function eE(e, t) {
	let n = /* @__PURE__ */ new Map();
	if (e.visit((e) => {
		let r = e.paramRuntime.paramConfigs.get(t);
		if (!r) return;
		let i = e.paramRuntime.findRuntimeForParam(t), a = n.get(i);
		n.set(i, {
			runtime: i,
			readOnly: !!(a?.readOnly || "expr" in r),
			pointSelection: !!(a?.pointSelection || "select" in r && Pe(He(r.select)))
		});
	}), n.size === 0) throw Error("Parameter \"" + t + "\" not found.");
	if (n.size > 1) throw Error("Parameter \"" + t + "\" is ambiguous.");
	let { runtime: r, readOnly: i, pointSelection: a } = n.values().next().value;
	return ZT(r, t, {}, (n) => {
		if (i) throw Error("Cannot set computed parameter \"" + t + "\".");
		if (a) throw Error("Cannot set point selection parameter \"" + t + "\" through the embed API.");
		r.setValue(t, n), e.context.animator.requestRender();
	});
}
//#endregion
//#region ../core/src/genome/rootGenomeConfig.js
function tE(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && rE(t) ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: nE()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !rE(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function nE() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function rE(e) {
	try {
		return Pf(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../core/src/config/themes.js
var iE = {
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
}, aE = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: J("foreground") },
		text: { color: J("foreground") },
		link: { color: J("foreground") },
		header: { color: J("foreground") },
		axis: {
			labelColor: J("foreground"),
			titleColor: J("foreground"),
			domainColor: J("stroke"),
			tickColor: J("stroke"),
			gridColor: J("grid")
		},
		axisLocus: {
			chromTickColor: J("chromosomeTick"),
			chromLabelColor: J("foreground"),
			chromGridColor: J("stroke")
		},
		legend: { symbolBaseStrokeColor: J("symbolStroke") },
		style: {
			"arrow-transcript": { color: J("foreground") },
			"selection-brush": { stroke: J("foreground") }
		}
	},
	vegalite: iE,
	quartz: z([iE, {
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
	dark: z([iE, {
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
			"selection-brush": { stroke: "#fff" }
		}
	}]),
	fivethirtyeight: z([iE, {
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
	urbaninstitute: z([iE, {
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
}, oE = Object.keys(aE);
function sE(e) {
	let t = { ...aE[e] };
	return delete t.background, t;
}
function cE(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in aE));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + oE.join(", "));
	return t;
}
var lE = "genomespy";
function uE(e) {
	return aE[e].background;
}
function dE(e) {
	let t = cE(e);
	if (t.length != 0) return z(t.map((e) => sE(e)));
}
//#endregion
//#region ../core/src/genomeSpy/canvasBackground.js
function fE(e) {
	if (e.background !== void 0) return e.background;
	let t = e.theme ? Array.isArray(e.theme) ? e.theme : [e.theme] : [], n;
	for (let e of t) {
		let t = uE(e);
		t !== void 0 && (n = t);
	}
	return n;
}
function pE(e, t) {
	let n = fE(e), r = Array.isArray(e.theme) ? e.theme.at(-1) : e.theme, i = n ?? (!r || r === "genomespy" ? J("background") : void 0);
	if (!R(i)) return () => i;
	let a = t.paramRuntime.createExpression(i), o = t.paramRuntime.computed("canvas background", a.dependencies, () => {
		let e = a();
		if (e !== null && typeof e != "string") throw Error("Canvas background expressions must return a color string or null.");
		return e ?? void 0;
	});
	return t.paramRuntime.effect([o], () => t.context.animator.requestRender()), () => o.get();
}
function mE(e, t) {
	return t.background === void 0 ? e ?? "white" : t.background;
}
//#endregion
//#region ../core/src/genomeSpyBase.js
var hE = class {
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
	#f;
	#p = /* @__PURE__ */ new Set();
	#m = new Im();
	#h = new Lm();
	#g = new Lm();
	constructor(e, t, n = {}) {
		if (n.wheelBehavior !== void 0 && n.wheelBehavior !== "default" && n.wheelBehavior !== "cooperative") throw Error("Invalid wheelBehavior: " + n.wheelBehavior);
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new rT(), this.namedDataProviders = [], this.animator = new jn(() => this.renderAll(), (e) => this.#j(e)), this._layoutReflowTransition = () => this.computeLayout(), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: My,
			refseqgene: Zv,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#a = new zm(e, n), this.dpr = window.devicePixelRatio;
	}
	get #_() {
		return this.container.querySelector(".canvas-wrapper");
	}
	get #v() {
		return this.#s.surface;
	}
	#y() {
		this.#a.initialize(this.viewRoot);
	}
	registerNamedDataProvider(e) {
		xr("The `namedDataProvider` embed option is deprecated. Declare named datasets explicitly and update them through `api.datasets` or the owning `ViewHandle.datasets`."), this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		xr("`updateNamedData()` is deprecated. Update an explicitly declared dataset through `api.datasets` or its owning `ViewHandle.datasets`.");
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
	}
	getParam(e) {
		return eE(this.viewRoot, e);
	}
	addEventListener(e, t) {
		this.#h.add(e, t);
	}
	removeEventListener(e, t) {
		this.#h.remove(e, t);
	}
	broadcast(e, t) {
		let n = {
			type: e,
			payload: t
		};
		this.viewRoot.visit((e) => e.handleBroadcast(n)), this.#g.emit(e, n);
	}
	#b = () => {};
	#x() {
		this.dpr = this.#v.getDevicePixelRatio();
		let e = this.viewRoot.paramRuntime.allocateSetter("devicePixelRatio", this.dpr), t = () => {
			try {
				this.#v.invalidateSize(), this.dpr = this.#v.getDevicePixelRatio(), e(this.dpr), this.computeLayout(), this.renderAll();
			} catch (e) {
				this.#j(e);
			}
		};
		if (this.#b = t, this.viewRoot.getSize().isGrowing()) {
			let e = new ResizeObserver(t);
			e.observe(this.container), this.#t.push(() => e.disconnect());
		}
		let n = null, r = () => {
			n != null && (n(), t());
			let e = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
			e.addEventListener("change", r), n = () => {
				e.removeEventListener("change", r);
			};
		};
		r(), n && this.#t.push(n);
	}
	async #S() {
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = fu(this.container), r = await vT({
			renderer: this.options.renderer ?? "auto",
			container: e,
			sizeSource: () => this.viewRoot ? Jm(this.viewRoot) : {
				width: void 0,
				height: void 0
			},
			powerPreference: this.options.powerPreference ?? "default",
			onCanvasResize: () => this.#b(),
			onRenderInvalidated: () => this.animator.requestRender(),
			onError: (e) => this.#j(e),
			...this.options.fontCatalog === void 0 ? {} : { fontCatalog: this.options.fontCatalog }
		});
		if (this.#u) throw r.surface.finalize(), Error("GenomeSpy was destroyed during launch.");
		this.#s = r, e.appendChild(t), this.tooltip = n, this.#i = new Pm(), this.#r = new Nm(t, this.#i, () => this.viewRoot);
	}
	destroy() {
		if (this.#u) return;
		this.#u = !0, this.#o?.invalidatePendingPicks(), this.animator.finalize();
		let e = this.#_;
		for (this.container.classList.remove("genome-spy"), e?.classList.remove("loading"), this.#m.removeAll(), this.#t.forEach((e) => e()), this.#i?.clear(), this.#C(), this.#a.remove(), this.#r?.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	#C() {
		this.viewRoot && this.#c !== this.viewRoot && (this.viewRoot.disposeSubtree(), this.#c = this.viewRoot), this.#s && !this.#l && (this.#s.surface.finalize(), this.#l = !0);
	}
	async #w() {
		await this.#T();
		let e = this.#E();
		await this.#O(e), await Vv(this.viewRoot, e.dataFlow, e.textMetrics, (e) => this.broadcast("dataFlowBuilt", e)), this.#A(e);
	}
	async #T() {
		this.genomeStore = new qv(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = tE(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#E() {
		let e = new J_();
		e.loadingStatusRegistry = this.#i;
		let t = Qw({
			defaultConfig: zT,
			builtInTheme: dE(lE),
			theme: z([this.options.theme, dE(this.spec.theme)])
		});
		return bT({
			dataFlow: e,
			getMarkRenderingDebugState: this.#s.getMarkRenderingDebugState,
			animator: this.animator,
			genomeStore: this.genomeStore,
			textMetrics: this.#s.textMetrics,
			reportError: this.#j.bind(this),
			getSpecOrigin: this.options.getSpecOrigin,
			updateTooltip: this.updateTooltip.bind(this),
			getNamedDataFromProvider: this.getNamedDataFromProvider.bind(this),
			getCurrentHover: () => this.#o.getCurrentHover(),
			suspendHoverTracking: () => this.#o?.suspendHoverTracking(),
			resumeHoverTracking: (e) => this.#o?.resumeHoverTracking(e),
			addKeyboardListener: (e, t) => {
				this.#m.add(e, (n) => {
					this.#D(e, n) && t(n);
				});
			},
			addBroadcastListener: (e, t) => this.#g.add(e, t),
			removeBroadcastListener: (e, t) => this.#g.remove(e, t),
			renderImmediately: this.renderAll.bind(this),
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: Fm(this.container)
		});
	}
	#D(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #O(e) {
		let t = this.spec;
		this.viewRoot = await e.createOrImportView(t, null, null, eT), await Tw(this.viewRoot), this.#i.set(this.viewRoot, "loading"), this.#_.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#y(), BT(this.viewRoot), xu(this.container, nT(this.viewRoot)), this.#e = pE(this.spec, nT(this.viewRoot)), this.#k(), this.#v.invalidateSize(), this.#n = this.#s.createRenderCoordinator({
			viewRoot: this.viewRoot,
			getBackground: this.#e,
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#r.updateLayout()
		}), e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.#x();
	}
	#k() {
		let e = nr(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#A(e) {
		e.requestLayoutReflow = this.requestLayoutReflow.bind(this), this.viewRoot.visit((e) => _r(e, "size")), this.#v.invalidateSize(), this.#o = new mT({
			wheelBehavior: this.options.wheelBehavior,
			viewRoot: this.viewRoot,
			canvas: this.#v.canvas,
			tooltip: this.tooltip,
			animator: this.animator,
			emitEvent: this.#h.emit.bind(this.#h),
			tooltipHandlers: this.tooltipHandlers,
			renderPickingFramebuffer: this.#s.readPickingId ? this.renderPickingFramebuffer.bind(this) : void 0,
			readPickingId: this.#s.readPickingId,
			reportError: this.#j.bind(this),
			canPick: () => !!this.viewRoot?.hasRendered()
		});
	}
	async launch() {
		let e = !1;
		this.#d = !0, this.#f = void 0;
		try {
			return await this.#S(), this.#M(), await this.#w(), this.#M(), this.#t.push(this.#o.registerInteractionEvents()), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			return this.#N(this.#f ?? e), !1;
		} finally {
			this.#d = !1, this.#_?.classList.remove("loading"), this.#u && this.#C(), e && this.#i.set(this.viewRoot, "complete");
		}
	}
	#j(e) {
		this.#u || (this.#d && !this.#f && (this.#f = e), this.#N(e));
	}
	#M() {
		if (this.#u) throw Error("GenomeSpy was destroyed during launch.");
		if (this.#f) throw this.#f;
	}
	#N(e) {
		if (this.#u || this.#p.has(e)) return;
		this.#p.add(e);
		let t = ol(e);
		sl(e);
		let n;
		try {
			n = this.options.onError?.(e, this.container);
		} catch (e) {
			console.error(e);
		}
		n || mu(this.container, t), this.viewRoot && this.#i && this.#i.delete(this.viewRoot);
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await Hv(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.textMetrics), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#v.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await ff(this.viewRoot.context, this.viewRoot, void 0, e, (e) => gf(e) && _E(e));
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
		let t = mE(this.#e(), e);
		try {
			return { blob: await mr(this.#s, {
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
		let t = this.#v.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height, i = mE(this.#e(), e);
		try {
			let { createSvgExport: t } = await gE(), { svg: a, warnings: o, rasterized: s } = await t({
				viewRoot: this.viewRoot,
				rasterizeSvgRuns: (e) => gr(this.#s, e),
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
		let t = this.#v.getLogicalCanvasSize(), n = e.logicalWidth ?? t.width, r = e.logicalHeight ?? t.height;
		try {
			return (await gE()).analyzeSvgExport({
				viewRoot: this.viewRoot,
				logicalWidth: n,
				logicalHeight: r
			});
		} finally {
			this.computeLayout(), this.renderAll();
		}
	}
	getLogicalCanvasSize() {
		return this.#v.getLogicalCanvasSize();
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
		this.#n.computeLayout();
	}
	requestLayoutReflow() {
		this.animator.requestTransition(this._layoutReflowTransition);
	}
	renderAll() {
		this.#d || (this.#o?.invalidatePendingPicks(), this.#n.renderAll());
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
async function gE() {
	let e = pr.svgRenderer;
	if (!e) throw Error("SVG export is not registered. Import \"@genome-spy/core/rendering/svg.js\" when using \"@genome-spy/core/minimal\".");
	return e();
}
function _E(e) {
	let t = e.flowHandle?.collector;
	return !!t && ru(t).some((e) => e instanceof ll);
}
//#endregion
//#region ../core/src/data/runDataTransforms.js
var vE = {
	formula: Bg,
	filter: Ag,
	sample: Wu,
	aggregate: t_,
	window: m_
};
function yE(e, t, n) {
	let r = new Wn(), i = { paramRuntime: r }, a = new ze(i), o = a, s = [];
	try {
		for (let [e, n] of t.entries()) try {
			if (!Object.hasOwn(vE, n.type)) throw Error("Unsupported analysis transform: " + n.type);
			let e = new vE[n.type](n, i);
			o.addChild(e), o = e, s.push(e);
		} catch (t) {
			throw Error("transform[" + e + "]: " + t.message, { cause: t });
		}
		let r = new af({ type: "collect" }, i);
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
async function bE(e, t) {
	let n = t?.type;
	if (n !== "arrow" && n !== "parquet") throw Error("Unsupported binary data format: " + String(n));
	let r = Lo(n);
	if (!r) throw Error("Data format is not registered: " + n);
	let i = await r(xE(e), t);
	if (!Array.isArray(i)) throw Error(`The ${n} data reader did not return an array.`);
	return i;
}
function xE(e) {
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
function SE(e, t) {
	let n = () => e.viewRoot;
	return CE(() => nT(n()), n, t);
}
function CE(e, t, n = () => !0) {
	return {
		set(r, i) {
			wE(n);
			let a = e();
			OE(a, DE(a, r, t), i);
		},
		async load(r, i, a) {
			wE(n);
			let o = e(), s = DE(o, r, t), c = s.beginUpdate(), l = a?.type ?? "unknown", u = () => (wE(n), DE(o, r, t) === s && s.isCurrentUpdate(c)), d;
			try {
				d = await bE(i, a);
			} catch (e) {
				if (!u()) return;
				throw new $("datasetLoadFailed", `Cannot load named dataset "${r}" as ${l}: ${TE(e)}`, { cause: e });
			}
			u() && OE(o, s, d);
		},
		reset(r) {
			wE(n);
			let i = e();
			OE(i, DE(i, r, t));
		}
	};
}
function wE(e) {
	if (!e()) throw new $("staleEmbed", "Cannot update named data through a finalized embed.");
}
function TE(e) {
	return e instanceof Error ? e.message : String(e);
}
function EE(e, t) {
	let n = t();
	return e === n || !!n?.getDescendants?.().includes(e);
}
function DE(e, t, n) {
	if (!EE(e, n)) throw new $("staleHandle", "Cannot update named data through a stale view handle.");
	if (typeof t != "string" || !t.length) throw new $("invalidNamedData", "Named dataset name must be a non-empty string.");
	let r = e.namedDataScope.getLocalBinding(t);
	if (r) return r;
	throw e.namedDataScope.findDeclaredBinding(t) ? new $("namedDataOwnerMismatch", "Named dataset \"" + t + "\" is declared by an ancestor view. Use the dataset owner's handle.") : new $("namedDataNotDeclared", "View does not declare named dataset \"" + t + "\". Add it to the view's datasets object before updating it.");
}
function OE(e, t, n) {
	e.context.dataFlow.updateNamedDataBinding(t, n), e.context.animator.requestRender();
}
function kE(e, t = () => !0) {
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = e, a = Promise.resolve(), o;
	function s() {
		return e.viewRoot;
	}
	function c(e) {
		return e instanceof Dw ? "concat" : e instanceof X ? "layer" : e instanceof Y ? "unit" : e instanceof _w ? "grid" : "unknown";
	}
	function l(e) {
		if (e.explicitName) try {
			return qn(e);
		} catch {
			return;
		}
	}
	function u(e) {
		let i = n.get(e);
		return i || (i = {
			id: Ar(s()).getId(e),
			get name() {
				return e.explicitName;
			},
			get selector() {
				return l(e);
			},
			get type() {
				return c(e);
			},
			isAlive: () => EE(e, s),
			parent: () => {
				if (EE(e, s) && e.layoutParent) return u(e.layoutParent);
			},
			children: () => {
				let t = g(e);
				return !EE(e, s) || !t ? [] : t.map((e) => u(e));
			},
			data: {
				read(n) {
					if (m(t), h(e), !Number.isSafeInteger(n?.limit) || n.limit < 0) throw Error("Data reads require a nonnegative safe integer limit.");
					if (!(e instanceof Y)) throw Error("Data reads require a unit view.");
					let r = e.getCollector();
					if (!r || !iu(r)) throw Error("View data is not ready.");
					let i = AE(e, n.scope), a = [];
					for (let e of r.getData()) {
						if (!i(e)) continue;
						if (a.length === n.limit) return {
							rows: a,
							truncated: !0
						};
						let t = structuredClone(e);
						delete t[Kt], a.push(t);
					}
					return {
						rows: a,
						truncated: !1
					};
				},
				transform(e) {
					for (let t of ["inputLimit", "limit"]) if (!Number.isSafeInteger(e?.[t]) || e[t] < 0) throw Error(t + " must be a nonnegative safe integer.");
					let t = i.data.read({
						scope: e.scope,
						limit: e.inputLimit
					});
					if (t.truncated) throw Error("Analysis input exceeds inputLimit. Narrow the scope or raise inputLimit.");
					return yE(t.rows, e.transform, e.limit);
				}
			},
			datasets: CE(() => e, s, t),
			params: HT(e, {
				isActive: t,
				isLive: () => EE(e, s),
				registerDisposer: (t) => e.registerDisposer(t)
			}),
			marks: d(e)
		}, n.set(e, i), r.set(i, e), i);
	}
	function d(e) {
		return {
			subscribe(n, r) {
				return m(t), h(e), VT((t) => e.registerDisposer(t), i.subscribeMarkEvent(e, n, (e) => r({
					sourceEvent: e.sourceEvent,
					point: p(e.point),
					hit: f(e.hit)
				})));
			},
			observeHover(n) {
				return m(t), h(e), VT((t) => e.registerDisposer(t), i.subscribeHover(e, (e) => n(e ? f(e) : void 0)));
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
		return delete t[Kt], {
			view: u(e.mark.unitView),
			uniqueId: e.uniqueId,
			...e.facetId === void 0 ? {} : { facetId: e.facetId.slice() },
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
		if (!EE(e, s)) throw new $("staleHandle", "Cannot use a mark API handle for a removed view.");
	}
	function g(e) {
		let t = e.children;
		return Array.isArray(t) ? t : void 0;
	}
	function _(e) {
		if (e === "root") return u(s());
		if (ME(e)) return r.has(e) && e.isAlive() ? e : void 0;
		if (NE(e)) {
			let t = ar(s(), e);
			return t ? u(t) : void 0;
		}
		throw new $("invalidAddress", "View address must be a handle, selector, or \"root\".");
	}
	function v(e) {
		let t = _(e);
		if (t) return t;
		throw ME(e) && r.has(e) ? new $("staleHandle", "Stale view handle no longer refers to a live view.") : new $("unresolvedAddress", "View address did not resolve to a live view.");
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
	async function ee(e) {
		let t = E(), n = t.failed, r, i, a = !1;
		try {
			r = await e(de);
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
	function k(e, t, n = {}) {
		return S(async () => {
			let r = y(e), i = te(r), a = re(n.index, i), o = ie(t, n);
			o !== void 0 && typeof o == "string" && ae(r, o);
			let s = await ne(r, structuredClone(t), a);
			return n.scope !== void 0 && Xn(s, n.scope), u(s);
		});
	}
	function te(e) {
		if (!(e instanceof Dw) && !(e instanceof X)) throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
		let t = g(e);
		if (!t) throw new $("unsupportedContainer", "Mutable container does not expose layout children.");
		return t.length;
	}
	async function ne(e, t, n) {
		if (e instanceof Dw) return e.addChildSpec(t, n);
		if (e instanceof X) {
			if (!se(t)) throw new $("unsupportedChildSpec", "Layer views accept only unit, layer, multiscale, or import specs as children.");
			return e.addChildSpec(t, n);
		}
		throw new $("unsupportedContainer", "Only concat and layer views support child insertion.");
	}
	function re(e, t) {
		let n = e ?? t;
		if (!Number.isInteger(n)) throw new $("invalidIndex", "Insert index must be an integer.");
		if (n < 0 || n > t) throw new $("invalidIndex", "Insert index must be between 0 and the current child count.");
		return n;
	}
	function ie(e, t) {
		let n = fv(e) && "name" in e ? e.name : void 0;
		if (t.scope !== void 0 && n !== void 0 && t.scope !== n) throw new $("scopeMismatch", "Insert scope must match the import instance name.");
		return t.scope ?? n;
	}
	function ae(e, t) {
		let n = $n(e).concat(t);
		s().visit((e) => {
			let r = rr(e);
			if (r && r.name === t && oe($n(e), n)) throw new $("duplicateScope", "Scope \"" + t + "\" already exists.");
		});
	}
	function oe(e, t) {
		return e.length === t.length && e.every((e, n) => e === t[n]);
	}
	function se(e) {
		if (fv(e)) return !0;
		let t = e;
		return cv(t) || lv(t) || $_(t);
	}
	function A(e) {
		return S(async () => {
			let t = y(e);
			if (t === s() || !t.layoutParent) throw new $("cannotRemoveRoot", "Removing the root view is not supported.");
			let n = t.layoutParent, r = g(n);
			if (!r) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let i = r.indexOf(t);
			if (i < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			await ce(n, i);
		});
	}
	async function ce(e, t) {
		if (e instanceof Dw) await e.removeChildAt(t);
		else if (e instanceof X) await e.removeChildAt(t);
		else throw new $("unsupportedContainer", "Only concat and layer views support child removal.");
	}
	function le(e, t) {
		return S(async () => {
			let n = y(e);
			if (n === s() || !n.layoutParent) throw new $("cannotMoveRoot", "Moving the root view is not supported.");
			let r = n.layoutParent, i = g(r);
			if (!i) throw new $("unsupportedContainer", "Parent view does not expose layout children.");
			let a = i.indexOf(n);
			if (a < 0) throw new $("invalidHierarchy", "Target view is not a child of its layout parent.");
			if (!t) throw new $("invalidIndex", "Move options with an index are required.");
			return await ue(r, a, j(t.index, i.length - 1)), u(n);
		});
	}
	function j(e, t) {
		if (!Number.isInteger(e)) throw new $("invalidIndex", "Move index must be an integer.");
		if (e < 0 || e > t) throw new $("invalidIndex", "Move index must be between 0 and the remaining child count.");
		return e;
	}
	async function ue(e, t, n) {
		if (e instanceof Dw) await e.moveChildAt(t, n);
		else if (e instanceof X) e.moveChildAt(t, n);
		else throw new $("unsupportedContainer", "Only concat and layer views support child reordering.");
	}
	let de = {
		root: () => u(s()),
		resolve: _,
		get: v,
		getLayoutBounds: b,
		subscribeToLayout: x,
		insert: k,
		remove: A,
		move: le,
		transaction: (e) => o ? ee(e) : C(() => ee(e))
	};
	return de;
}
function AE(e, t) {
	if (t === "all") return () => !0;
	if (t && typeof t == "object" && typeof t.selection == "string") {
		let n = e.paramRuntime.findSelectionCapability(t.selection);
		if (n?.type !== "interval") throw Error("Brush reads require an interval selection. Read point records through getSelection().getValue().data.");
		for (let { component: t } of n.components) jE(e, t), jE(e, t + "2");
		return Yt({
			param: t.selection,
			empty: !1
		}, e.mark.encoding, e.paramRuntime, e.mark.defaultHitTestMode);
	}
	if (t !== "viewport") throw Error("Data reads require an all, viewport, or named interval-selection scope.");
	let n = [];
	for (let t of ["x", "y"]) {
		let r = jE(e, t);
		if (!r) continue;
		let i = e.getScaleResolution(t), a = i.getScale().type;
		if (!A(a) || j(a)) throw Error("Viewport reads require continuous positional scales.");
		let o = i.getDomain(), s = jE(e, t === "x" ? "x2" : "y2");
		n.push({
			channel: t,
			accessor: r,
			accessor2: s,
			domain: [Math.min(o[0], o.at(-1)), Math.max(o[0], o.at(-1))]
		});
	}
	if (!n.length) throw Error("Viewport reads require a scaled positional encoding.");
	return (e) => n.every((t) => Qd(e, t));
}
function jE(e, t) {
	let n = e.mark.encoders[t];
	if (!n) return;
	if (n.branches.length !== 1) throw Error("Scoped data reads do not support conditional positional encodings.");
	let r = n.branches[0].accessor;
	return r.scaleChannel ? r : void 0;
}
function ME(e) {
	return typeof e == "object" && !!e && typeof e.isAlive == "function";
}
function NE(e) {
	return typeof e == "object" && !!e && Array.isArray(e.scope) && typeof e.view == "string";
}
//#endregion
//#region ../core/src/embedApi.js
function PE({ genomeSpy: e, isActive: t, debug: n, finalize: r }) {
	return {
		views: kE(e, t),
		datasets: SE(e, t),
		dataLoading: {
			getSnapshot: () => i().getSnapshot(),
			subscribe: (e) => i().subscribe(e)
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
		params: HT(nT(e.viewRoot), { isActive: t }),
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
	function i() {
		if (!t()) throw Error("Cannot observe data loading through a finalized embed.");
		return e.viewRoot.context.dataFlow.loadingStatusRegistry;
	}
}
//#endregion
//#region ../core/src/embedError.js
var FE = /* @__PURE__ */ new WeakMap();
function IE(e, t) {
	FE.get(e)?.forEach((e) => e.remove()), FE.delete(e);
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
			n !== r && sl(n);
			let o = ol(n), s;
			try {
				s = t.onError?.(n, i);
			} catch (e) {
				console.error(e);
			}
			if (!s) {
				let t = pu(i), n = mu(i, o);
				FE.set(e, [t, n]);
			}
			throw n;
		}
	};
}
//#endregion
//#region ../core/src/utils/inferSpecBaseUrl.js
var LE = [
	["/docs/example-specs/", "/docs/example-specs/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], RE = /^(?:[a-z]+:)?\/\//i, zE = "https://example.invalid";
function BE(e) {
	return RE.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function VE(e) {
	let t = new URL(e, zE), n = LE.find(([e]) => t.pathname.startsWith(e));
	if (n) return UE(n[1], t, BE(e));
}
function HE(e) {
	let t = VE(e);
	if (t) return t;
	let n = new URL(e, zE);
	return UE(new URL("./", n).pathname, n, BE(e));
}
function UE(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region ../core/src/embedFactory.js
function WE(e) {
	return async function(t, n, r = {}) {
		let i = !0, a = () => i, o;
		if (vt(t)) {
			if (o = document.querySelector(t), !o) throw Error(`No such element: ${t}`);
		} else if (t instanceof HTMLElement) o = t;
		else throw Error(`Invalid element: ${t}`);
		let s, c = IE(o, r);
		try {
			let t = I(n) ? n : await KE(n);
			if (t.baseUrl ??= "", t.padding ??= 10, o == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", o.appendChild(e), o = e;
			}
			s = new e(o, t, {
				...r,
				onError: c.onError
			}), GE(s, r), c.complete(await s.launch());
		} catch (e) {
			c.fail(e, o, [() => s?.destroy()]);
		}
		return PE({
			genomeSpy: s,
			isActive: a,
			debug: {
				getViewRoot() {
					return s ? s.viewRoot : void 0;
				},
				getModules() {
					return import("./debug-DW1qY8pv.js");
				},
				createPickingBufferVisualization() {
					return i ? s.createPickingBufferVisualization() : void 0;
				}
			},
			finalize() {
				i = !1, s.destroy(), o.replaceChildren();
			}
		});
	};
}
function GE(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function KE(e) {
	let t;
	try {
		t = await Vm(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl || (t.baseUrl = HE(e)), t;
}
//#endregion
//#region ../core/src/index.js
var qE = WE(hE);
//#endregion
export { zl as $, H_ as A, jf as B, iy as C, Sv as D, Rv as E, Bm as F, Gu as G, uf as H, Vm as I, wu as J, Du as K, Rm as L, dg as M, Wm as N, lv as O, Km as P, Nl as Q, Y as R, eb as S, Nv as T, af as U, ff as V, od as W, su as X, Su as Y, ou as Z, Jb as _, hE as a, Bo as at, Ob as b, WC as c, Ia as ct, oS as d, Bi as dt, Fl as et, eS as f, wi as ft, ox as g, Rr as gt, cx as h, zr as ht, PE as i, Do as it, T_ as j, cv as k, cC as l, Hi as lt, Qx as m, Ri as mt, KE as n, cl as nt, Dw as o, Ro as ot, tS as p, U as pt, Cu as q, IE as r, Fc as rt, ZC as s, Ra as st, qE as t, Pl as tt, WS as u, W as ut, Gb as v, Pv as w, X as x, Kb as y, Lf as z };
