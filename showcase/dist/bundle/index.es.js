import { t as e } from "./chunk-DmhlhrBa.js";
import { n as t } from "./esm-C49STiCR.js";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var n = globalThis, r = n.ShadowRoot && (n.ShadyCSS === void 0 || n.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, i = Symbol(), a = /* @__PURE__ */ new WeakMap(), o = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (r && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = a.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && a.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, s = (e) => new o(typeof e == "string" ? e : e + "", void 0, i), c = (e, t) => {
	if (r) e.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let r of t) {
		let t = document.createElement("style"), i = n.litNonce;
		i !== void 0 && t.setAttribute("nonce", i), t.textContent = r.cssText, e.appendChild(t);
	}
}, l = r ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return s(t);
})(e) : e, { is: u, defineProperty: d, getOwnPropertyDescriptor: f, getOwnPropertyNames: p, getOwnPropertySymbols: m, getPrototypeOf: h } = Object, g = globalThis, _ = g.trustedTypes, v = _ ? _.emptyScript : "", y = g.reactiveElementPolyfillSupport, b = (e, t) => e, ee = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? v : null;
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
}, x = (e, t) => !u(e, t), te = {
	attribute: !0,
	type: String,
	converter: ee,
	reflect: !1,
	useDefault: !1,
	hasChanged: x
};
Symbol.metadata ??= Symbol("metadata"), g.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var S = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = te) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && d(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = f(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? te;
	}
	static _$Ei() {
		if (this.hasOwnProperty(b("elementProperties"))) return;
		let e = h(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(b("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(b("properties"))) {
			let e = this.properties, t = [...p(e), ...m(e)];
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
			for (let e of n) t.unshift(l(e));
		} else e !== void 0 && t.push(l(e));
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
		return c(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? ee : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ee : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? x)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
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
S.elementStyles = [], S.shadowRootOptions = { mode: "open" }, S[b("elementProperties")] = /* @__PURE__ */ new Map(), S[b("finalized")] = /* @__PURE__ */ new Map(), y?.({ ReactiveElement: S }), (g.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var ne = globalThis, re = (e) => e, ie = ne.trustedTypes, ae = ie ? ie.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, oe = "$lit$", se = `lit$${Math.random().toFixed(9).slice(2)}$`, ce = "?" + se, le = `<${ce}>`, ue = document, de = () => ue.createComment(""), fe = (e) => e === null || typeof e != "object" && typeof e != "function", pe = Array.isArray, me = (e) => pe(e) || typeof e?.[Symbol.iterator] == "function", he = "[ 	\n\f\r]", ge = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _e = /-->/g, ve = />/g, ye = RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), be = /'/g, xe = /"/g, Se = /^(?:script|style|textarea|title)$/i, C = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), Ce = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), we = /* @__PURE__ */ new WeakMap(), Te = ue.createTreeWalker(ue, 129);
function Ee(e, t) {
	if (!pe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return ae === void 0 ? t : ae.createHTML(t);
}
var De = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ge;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ge ? c[1] === "!--" ? o = _e : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = ye) : (Se.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = ye) : o = ve : o === ye ? c[0] === ">" ? (o = i ?? ge, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? ye : c[3] === "\"" ? xe : be) : o === xe || o === be ? o = ye : o === _e || o === ve ? o = ge : (o = ye, i = void 0);
		let d = o === ye && e[t + 1].startsWith("/>") ? " " : "";
		a += o === ge ? n + le : l >= 0 ? (r.push(s), n.slice(0, l) + oe + n.slice(l) + se + d) : n + se + (l === -2 ? t : d);
	}
	return [Ee(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Oe = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = De(t, n);
		if (this.el = e.createElement(l, r), Te.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = Te.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(oe)) {
					let t = u[o++], n = i.getAttribute(e).split(se), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ne : r[1] === "?" ? Pe : r[1] === "@" ? Fe : Me
					}), i.removeAttribute(e);
				} else e.startsWith(se) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Se.test(i.tagName)) {
					let e = i.textContent.split(se), t = e.length - 1;
					if (t > 0) {
						i.textContent = ie ? ie.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], de()), Te.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], de());
					}
				}
			} else if (i.nodeType === 8) if (i.data === ce) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(se, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += se.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = ue.createElement("template");
		return n.innerHTML = e, n;
	}
};
function ke(e, t, n = e, r) {
	if (t === Ce) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = fe(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = ke(e, i._$AS(e, t.values), i, r)), t;
}
var Ae = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? ue).importNode(t, !0);
		Te.currentNode = r;
		let i = Te.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new je(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Ie(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = Te.nextNode(), a++);
		}
		return Te.currentNode = ue, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, je = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = ke(this, e, t), fe(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== Ce && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? me(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== w && fe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ue.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Oe.createElement(Ee(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ae(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = we.get(e.strings);
		return t === void 0 && we.set(e.strings, t = new Oe(e)), t;
	}
	k(t) {
		pe(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(de()), this.O(de()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = re(e).nextSibling;
			re(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Me = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = w;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = ke(this, e, t, 0), a = !fe(e) || e !== this._$AH && e !== Ce, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = ke(this, r[n + o], t, o), s === Ce && (s = this._$AH[o]), a ||= !fe(s) || s !== this._$AH[o], s === w ? e = w : e !== w && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ne = class extends Me {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === w ? void 0 : e;
	}
}, Pe = class extends Me {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== w);
	}
}, Fe = class extends Me {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = ke(this, e, t, 0) ?? w) === Ce) return;
		let n = this._$AH, r = e === w && n !== w || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== w && (n === w || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Ie = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		ke(this, e);
	}
}, Le = ne.litHtmlPolyfillSupport;
Le?.(Oe, je), (ne.litHtmlVersions ??= []).push("3.3.2");
var Re = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new je(t.insertBefore(de(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, ze = globalThis, Be = class extends S {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Re(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return Ce;
	}
};
Be._$litElement$ = !0, Be.finalized = !0, ze.litElementHydrateSupport?.({ LitElement: Be });
var Ve = ze.litElementPolyfillSupport;
Ve?.({ LitElement: Be }), (ze.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region ../../node_modules/vega-util/build/vega-util.js
function He(e, t, n) {
	return e.fields = t || [], e.fname = n, e;
}
function Ue(e) {
	return e == null ? null : e.fname;
}
function We(e) {
	return e == null ? null : e.fields;
}
function Ge(e) {
	return e.length === 1 ? Ke(e[0]) : qe(e);
}
var Ke = (e) => function(t) {
	return t[e];
}, qe = (e) => {
	let t = e.length;
	return function(n) {
		for (let r = 0; r < t; ++r) n = n[e[r]];
		return n;
	};
};
function T(e) {
	throw Error(e);
}
function Je(e) {
	let t = [], n = e.length, r = null, i = 0, a = "", o, s, c;
	e += "";
	function l() {
		t.push(a + e.substring(o, s)), a = "", o = s + 1;
	}
	for (o = s = 0; s < n; ++s) if (c = e[s], c === "\\") a += e.substring(o, s++), o = s;
	else if (c === r) l(), r = null, i = -1;
	else if (r) continue;
	else o === i && c === "\"" || o === i && c === "'" ? (o = s + 1, r = c) : c === "." && !i ? s > o ? l() : o = s + 1 : c === "[" ? (s > o && l(), i = o = s + 1) : c === "]" && (i || T("Access path missing open bracket: " + e), i > 0 && l(), i = 0, o = s + 1);
	return i && T("Access path missing closing bracket: " + e), r && T("Access path missing closing quote: " + e), s > o && (s++, l()), t;
}
function Ye(e, t, n) {
	let r = Je(e);
	return e = r.length === 1 ? r[0] : e, He((n && n.get || Ge)(r), [e], t || e);
}
Ye("id");
var Xe = He((e) => e, [], "identity");
He(() => 0, [], "zero"), He(() => 1, [], "one"), He(() => !0, [], "true"), He(() => !1, [], "false");
var Ze = new Set([...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"), "__proto__"]), E = Array.isArray;
function D(e) {
	return e === Object(e);
}
function Qe(e) {
	return e[e.length - 1];
}
function $e(e) {
	return e == null || e === "" ? null : +e;
}
var et = (e) => (t) => e * Math.exp(t), tt = (e) => (t) => Math.log(e * t), nt = (e) => (t) => Math.sign(t) * Math.log1p(Math.abs(t / e)), rt = (e) => (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e, it = (e) => (t) => t < 0 ? -((-t) ** +e) : t ** +e;
function at(e, t, n, r) {
	let i = n(e[0]), a = n(Qe(e)), o = (a - i) * t;
	return [r(i - o), r(a - o)];
}
function ot(e, t) {
	return at(e, t, $e, Xe);
}
function st(e, t) {
	var n = Math.sign(e[0]);
	return at(e, t, tt(n), et(n));
}
function ct(e, t, n) {
	return at(e, t, it(n), it(1 / n));
}
function lt(e, t, n, r, i) {
	let a = r(e[0]), o = r(Qe(e)), s = t == null ? (a + o) / 2 : r(t);
	return [i(s + (a - s) * n), i(s + (o - s) * n)];
}
function ut(e, t, n) {
	return lt(e, t, n, $e, Xe);
}
function dt(e, t, n) {
	let r = Math.sign(e[0]);
	return lt(e, t, n, tt(r), et(r));
}
function ft(e, t, n, r) {
	return lt(e, t, n, it(r), it(1 / r));
}
function pt(e, t, n, r) {
	return lt(e, t, n, nt(r), rt(r));
}
function mt(e) {
	return e == null ? [] : E(e) ? e : [e];
}
function ht(e, t, n) {
	let r = e[0], i = e[1], a;
	return i < r && (a = i, i = r, r = a), a = i - r, a >= n - t ? [t, n] : [r = Math.min(Math.max(r, t), n - a), r + a];
}
function gt(e) {
	return typeof e == "function";
}
var _t = "descending";
function vt(e, t, n) {
	n ||= {}, t = mt(t) || [];
	let r = [], i = [], a = {}, o = n.comparator || bt;
	return mt(e).forEach((e, o) => {
		e != null && (r.push(t[o] === _t ? -1 : 1), i.push(e = gt(e) ? e : Ye(e, null, n)), (We(e) || []).forEach((e) => a[e] = 1));
	}), i.length === 0 ? null : He(o(i, r), Object.keys(a));
}
var yt = (e, t) => (e < t || e == null) && t != null ? -1 : (e > t || t == null) && e != null ? 1 : (t = t instanceof Date ? +t : t, e = e instanceof Date ? +e : e) !== e && t === t ? -1 : t !== t && e === e ? 1 : 0, bt = (e, t) => e.length === 1 ? xt(e[0], t[0]) : St(e, t, e.length), xt = (e, t) => function(n, r) {
	return yt(e(n), e(r)) * t;
}, St = (e, t, n) => (t.push(0), function(r, i) {
	let a, o = 0, s = -1;
	for (; o === 0 && ++s < n;) a = e[s], o = yt(a(r), a(i));
	return o * t[s];
});
function Ct(e) {
	for (let t, n, r = 1, i = arguments.length; r < i; ++r) for (n in t = arguments[r], t) e[n] = t[n];
	return e;
}
function wt(e, t) {
	return Object.hasOwn(e, t);
}
function Tt(e) {
	return typeof e == "boolean";
}
function Et(e) {
	return Object.prototype.toString.call(e) === "[object Date]";
}
function Dt(e) {
	return e && gt(e[Symbol.iterator]);
}
function Ot(e) {
	return typeof e == "number";
}
function kt(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function O(e) {
	return typeof e == "string";
}
function At(e, t) {
	let n = e[0], r = Qe(e), i = +t;
	return i ? i === 1 ? r : n + i * (r - n) : n;
}
function jt(e) {
	return e && Qe(e) - e[0] || 0;
}
function Mt(e) {
	return E(e) ? `[${e.map((e) => e === null ? "null" : Mt(e))}]` : D(e) || O(e) ? JSON.stringify(e).replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029") : e;
}
function Nt(e) {
	return e == null || e === "" ? null : !e || e === "false" || e === "0" ? !1 : !!e;
}
var Pt = (e) => Ot(e) || Et(e) ? e : Date.parse(e);
function Ft(e, t) {
	return t ||= Pt, e == null || e === "" ? null : t(e);
}
function It(e) {
	return e == null || e === "" ? null : e + "";
}
function Lt(e) {
	let t = {}, n = e.length;
	for (let r = 0; r < n; ++r) t[e[r]] = !0;
	return t;
}
//#endregion
//#region ../../node_modules/d3-dsv/src/dsv.js
var Rt = {}, zt = {}, Bt = 34, Vt = 10, Ht = 13;
function Ut(e) {
	return Function("d", "return {" + e.map(function(e, t) {
		return JSON.stringify(e) + ": d[" + t + "] || \"\"";
	}).join(",") + "}");
}
function Wt(e, t) {
	var n = Ut(e);
	return function(r, i) {
		return t(n(r), i, e);
	};
}
function Gt(e) {
	var t = Object.create(null), n = [];
	return e.forEach(function(e) {
		for (var r in e) r in t || n.push(t[r] = r);
	}), n;
}
function Kt(e, t) {
	var n = e + "", r = n.length;
	return r < t ? Array(t - r + 1).join(0) + n : n;
}
function qt(e) {
	return e < 0 ? "-" + Kt(-e, 6) : e > 9999 ? "+" + Kt(e, 6) : Kt(e, 4);
}
function Jt(e) {
	var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), i = e.getUTCMilliseconds();
	return isNaN(e) ? "Invalid Date" : qt(e.getUTCFullYear(), 4) + "-" + Kt(e.getUTCMonth() + 1, 2) + "-" + Kt(e.getUTCDate(), 2) + (i ? "T" + Kt(t, 2) + ":" + Kt(n, 2) + ":" + Kt(r, 2) + "." + Kt(i, 3) + "Z" : r ? "T" + Kt(t, 2) + ":" + Kt(n, 2) + ":" + Kt(r, 2) + "Z" : n || t ? "T" + Kt(t, 2) + ":" + Kt(n, 2) + "Z" : "");
}
function Yt(e) {
	var t = RegExp("[\"" + e + "\n\r]"), n = e.charCodeAt(0);
	function r(e, t) {
		var n, r, a = i(e, function(e, i) {
			if (n) return n(e, i - 1);
			r = e, n = t ? Wt(e, t) : Ut(e);
		});
		return a.columns = r || [], a;
	}
	function i(e, t) {
		var r = [], i = e.length, a = 0, o = 0, s, c = i <= 0, l = !1;
		e.charCodeAt(i - 1) === Vt && --i, e.charCodeAt(i - 1) === Ht && --i;
		function u() {
			if (c) return zt;
			if (l) return l = !1, Rt;
			var t, r = a, o;
			if (e.charCodeAt(r) === Bt) {
				for (; a++ < i && e.charCodeAt(a) !== Bt || e.charCodeAt(++a) === Bt;);
				return (t = a) >= i ? c = !0 : (o = e.charCodeAt(a++)) === Vt ? l = !0 : o === Ht && (l = !0, e.charCodeAt(a) === Vt && ++a), e.slice(r + 1, t - 1).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((o = e.charCodeAt(t = a++)) === Vt) l = !0;
				else if (o === Ht) l = !0, e.charCodeAt(a) === Vt && ++a;
				else if (o !== n) continue;
				return e.slice(r, t);
			}
			return c = !0, e.slice(r, i);
		}
		for (; (s = u()) !== zt;) {
			for (var d = []; s !== Rt && s !== zt;) d.push(s), s = u();
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
		return n ??= Gt(t), [n.map(u).join(e)].concat(a(t, n)).join("\n");
	}
	function s(e, t) {
		return t ??= Gt(e), a(e, t).join("\n");
	}
	function c(e) {
		return e.map(l).join("\n");
	}
	function l(t) {
		return t.map(u).join(e);
	}
	function u(e) {
		return e == null ? "" : e instanceof Date ? Jt(e) : t.test(e += "") ? "\"" + e.replace(/"/g, "\"\"") + "\"" : e;
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
var Xt = Yt("	");
Xt.parse;
var Zt = Xt.parseRows;
Xt.format, Xt.formatBody, Xt.formatRows, Xt.formatRow, Xt.formatValue;
//#endregion
//#region ../../node_modules/topojson-client/src/identity.js
function Qt(e) {
	return e;
}
//#endregion
//#region ../../node_modules/topojson-client/src/transform.js
function $t(e) {
	if (e == null) return Qt;
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
function en(e, t) {
	for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n;
}
//#endregion
//#region ../../node_modules/topojson-client/src/feature.js
function tn(e, t) {
	return typeof t == "string" && (t = e.objects[t]), t.type === "GeometryCollection" ? {
		type: "FeatureCollection",
		features: t.geometries.map(function(t) {
			return nn(e, t);
		})
	} : nn(e, t);
}
function nn(e, t) {
	var n = t.id, r = t.bbox, i = t.properties == null ? {} : t.properties, a = rn(e, t);
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
function rn(e, t) {
	var n = $t(e.transform), r = e.arcs;
	function i(e, t) {
		t.length && t.pop();
		for (var i = r[e < 0 ? ~e : e], a = 0, o = i.length; a < o; ++a) t.push(n(i[a], a));
		e < 0 && en(t, o);
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
function an(e, t) {
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
function on(e) {
	return rn(e, sn.apply(this, arguments));
}
function sn(e, t, n) {
	var r, i, a;
	if (arguments.length > 1) r = cn(e, t, n);
	else for (i = 0, r = Array(a = e.arcs.length); i < a; ++i) r[i] = i;
	return {
		type: "MultiLineString",
		arcs: an(e, r)
	};
}
function cn(e, t, n) {
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
//#region ../../node_modules/d3-array/src/ascending.js
function ln(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/descending.js
function un(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region ../../node_modules/d3-array/src/bisector.js
function dn(e) {
	let t, n, r;
	e.length === 2 ? (t = e === ln || e === un ? e : fn, n = e, r = e) : (t = ln, n = (t, n) => ln(e(t), n), r = (t, n) => e(t) - n);
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
function fn() {
	return 0;
}
//#endregion
//#region ../../node_modules/d3-array/src/number.js
function pn(e) {
	return e === null ? NaN : +e;
}
function* mn(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/bisect.js
var hn = dn(ln), gn = hn.right;
hn.left, dn(pn).center;
//#endregion
//#region ../../node_modules/d3-array/src/count.js
function _n(e, t) {
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
function vn(e, t) {
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
function yn(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region ../../node_modules/internmap/src/index.js
var bn = class extends Map {
	constructor(e, t = wn) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(xn(this, e));
	}
	has(e) {
		return super.has(xn(this, e));
	}
	set(e, t) {
		return super.set(Sn(this, e), t);
	}
	delete(e) {
		return super.delete(Cn(this, e));
	}
};
function xn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function Sn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Cn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(r), e.delete(r)), n;
}
function wn(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region ../../node_modules/d3-array/src/identity.js
function Tn(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-array/src/group.js
function En(e, ...t) {
	return On(e, Tn, Tn, t);
}
function Dn(e, ...t) {
	return On(e, Array.from, Tn, t);
}
function On(e, t, n, r) {
	return (function e(i, a) {
		if (a >= r.length) return n(i);
		let o = new bn(), s = r[a++], c = -1;
		for (let e of i) {
			let t = s(e, ++c, i), n = o.get(t);
			n ? n.push(e) : o.set(t, [e]);
		}
		for (let [t, n] of o) o.set(t, e(n, a));
		return t(o);
	})(e, 0);
}
//#endregion
//#region ../../node_modules/d3-array/src/sort.js
function kn(e = ln) {
	if (e === ln) return An;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function An(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
//#endregion
//#region ../../node_modules/d3-array/src/ticks.js
var jn = Math.sqrt(50), Mn = Math.sqrt(10), Nn = Math.sqrt(2);
function Pn(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= jn ? 10 : a >= Mn ? 5 : a >= Nn ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? Pn(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function Fn(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? Pn(t, e, n) : Pn(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function In(e, t, n) {
	return t = +t, e = +e, n = +n, Pn(e, t, n)[2];
}
function Ln(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? In(t, e, n) : In(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region ../../node_modules/d3-array/src/max.js
function Rn(e, t) {
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
function zn(e, t) {
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
function Bn(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? An : kn(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			Bn(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (Vn(e, n, t), i(e[r], a) > 0 && Vn(e, n, r); o < s;) {
			for (Vn(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? Vn(e, n, s) : (++s, Vn(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function Vn(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region ../../node_modules/d3-array/src/quantile.js
function Hn(e, t, n) {
	if (e = Float64Array.from(mn(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return zn(e);
		if (t >= 1) return Rn(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Rn(Bn(e, a).subarray(0, a + 1));
		return o + (zn(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Un(e, t, n = pn) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/mean.js
function Wn(e, t) {
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
function Gn(e, t) {
	return Hn(e, .5, t);
}
//#endregion
//#region ../../node_modules/d3-array/src/range.js
function Kn(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region ../../node_modules/d3-array/src/sum.js
function qn(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatDecimal.js
function Jn(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Yn(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region ../../node_modules/d3-format/src/exponent.js
function Xn(e) {
	return e = Yn(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatGroup.js
function Zn(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatNumerals.js
function Qn(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/formatSpecifier.js
var $n = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function er(e) {
	if (!(t = $n.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new tr({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
er.prototype = tr.prototype;
function tr(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
tr.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region ../../node_modules/d3-format/src/formatTrim.js
function nr(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
			break;
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region ../../node_modules/d3-format/src/formatPrefixAuto.js
var rr;
function ir(e, t) {
	var n = Yn(e, t);
	if (!n) return rr = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (rr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + Yn(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region ../../node_modules/d3-format/src/formatRounded.js
function ar(e, t) {
	var n = Yn(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region ../../node_modules/d3-format/src/formatTypes.js
var or = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: Jn,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ar(e * 100, t),
	r: ar,
	s: ir,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region ../../node_modules/d3-format/src/identity.js
function sr(e) {
	return e;
}
//#endregion
//#region ../../node_modules/d3-format/src/locale.js
var cr = Array.prototype.map, lr = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function ur(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? sr : Zn(cr.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? sr : Qn(cr.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = er(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : or[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), ee = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), x = or[y], te = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function S(e) {
			var n = b, r = ee, o, l, p;
			if (y === "c") r = x(e) + r, e = "";
			else {
				e = +e;
				var S = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : x(Math.abs(e), _), v && (e = nr(e)), S && +e == 0 && f !== "+" && (S = !1), n = (S ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && rr !== void 0 ? lr[8 + rr / 3] : "") + r + (S && f === "(" ? ")" : ""), te) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var ne = n.length + e.length + r.length, re = ne < h ? Array(h - ne + 1).join(u) : "";
			switch (g && m && (e = t(re + e, re.length ? h - r.length : Infinity), re = ""), d) {
				case "<":
					e = n + e + r + re;
					break;
				case "=":
					e = n + re + e + r;
					break;
				case "^":
					e = re.slice(0, ne = re.length >> 1) + n + e + r + re.slice(ne);
					break;
				default:
					e = re + n + e + r;
					break;
			}
			return a(e);
		}
		return S.toString = function() {
			return e + "";
		}, S;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(Xn(t) / 3))) * 3, r = 10 ** -n, i = l((e = er(e), e.type = "f", e), { suffix: lr[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region ../../node_modules/d3-format/src/defaultLocale.js
var dr, k, fr;
pr({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function pr(e) {
	return dr = ur(e), k = dr.format, fr = dr.formatPrefix, dr;
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionFixed.js
function mr(e) {
	return Math.max(0, -Xn(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionPrefix.js
function hr(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Xn(t) / 3))) * 3 - Xn(Math.abs(e)));
}
//#endregion
//#region ../../node_modules/d3-format/src/precisionRound.js
function gr(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Xn(t) - Xn(e)) + 1;
}
//#endregion
//#region ../../node_modules/d3-time/src/interval.js
var _r = /* @__PURE__ */ new Date(), vr = /* @__PURE__ */ new Date();
function A(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => A((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (_r.setTime(+t), vr.setTime(+r), e(_r), e(vr), Math.floor(n(_r, vr))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region ../../node_modules/d3-time/src/millisecond.js
var yr = A(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
yr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? A((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : yr), yr.range;
//#endregion
//#region ../../node_modules/d3-time/src/duration.js
var br = 1e3, xr = br * 60, Sr = xr * 60, Cr = Sr * 24, wr = Cr * 7, Tr = Cr * 30, Er = Cr * 365, Dr = A((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * br);
}, (e, t) => (t - e) / br, (e) => e.getUTCSeconds());
Dr.range;
//#endregion
//#region ../../node_modules/d3-time/src/minute.js
var Or = A((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * br);
}, (e, t) => {
	e.setTime(+e + t * xr);
}, (e, t) => (t - e) / xr, (e) => e.getMinutes());
Or.range;
var kr = A((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * xr);
}, (e, t) => (t - e) / xr, (e) => e.getUTCMinutes());
kr.range;
//#endregion
//#region ../../node_modules/d3-time/src/hour.js
var Ar = A((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * br - e.getMinutes() * xr);
}, (e, t) => {
	e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getHours());
Ar.range;
var jr = A((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCHours());
jr.range;
//#endregion
//#region ../../node_modules/d3-time/src/day.js
var Mr = A((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xr) / Cr, (e) => e.getDate() - 1);
Mr.range;
var Nr = A((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cr, (e) => e.getUTCDate() - 1);
Nr.range;
var Pr = A((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cr, (e) => Math.floor(e / Cr));
Pr.range;
//#endregion
//#region ../../node_modules/d3-time/src/week.js
function Fr(e) {
	return A((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * xr) / wr);
}
var Ir = Fr(0), Lr = Fr(1), Rr = Fr(2), zr = Fr(3), Br = Fr(4), Vr = Fr(5), Hr = Fr(6);
Ir.range, Lr.range, Rr.range, zr.range, Br.range, Vr.range, Hr.range;
function Ur(e) {
	return A((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / wr);
}
var Wr = Ur(0), Gr = Ur(1), Kr = Ur(2), qr = Ur(3), Jr = Ur(4), Yr = Ur(5), Xr = Ur(6);
Wr.range, Gr.range, Kr.range, qr.range, Jr.range, Yr.range, Xr.range;
//#endregion
//#region ../../node_modules/d3-time/src/month.js
var Zr = A((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zr.range;
var Qr = A((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Qr.range;
//#endregion
//#region ../../node_modules/d3-time/src/year.js
var $r = A((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
$r.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : A((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), $r.range;
var ei = A((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ei.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : A((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), ei.range;
//#endregion
//#region ../../node_modules/d3-time/src/ticks.js
function ti(e, t, n, r, i, a) {
	let o = [
		[
			Dr,
			1,
			br
		],
		[
			Dr,
			5,
			5 * br
		],
		[
			Dr,
			15,
			15 * br
		],
		[
			Dr,
			30,
			30 * br
		],
		[
			a,
			1,
			xr
		],
		[
			a,
			5,
			5 * xr
		],
		[
			a,
			15,
			15 * xr
		],
		[
			a,
			30,
			30 * xr
		],
		[
			i,
			1,
			Sr
		],
		[
			i,
			3,
			3 * Sr
		],
		[
			i,
			6,
			6 * Sr
		],
		[
			i,
			12,
			12 * Sr
		],
		[
			r,
			1,
			Cr
		],
		[
			r,
			2,
			2 * Cr
		],
		[
			n,
			1,
			wr
		],
		[
			t,
			1,
			Tr
		],
		[
			t,
			3,
			3 * Tr
		],
		[
			e,
			1,
			Er
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = dn(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Ln(t / Er, n / Er, r));
		if (a === 0) return yr.every(Math.max(Ln(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [ni, ri] = ti(ei, Qr, Wr, Pr, jr, kr), [ii, ai] = ti($r, Zr, Ir, Mr, Ar, Or), oi = "year", si = "quarter", ci = "month", li = "week", ui = "date", di = "dayofyear", fi = "hours", pi = "minutes", mi = "seconds", hi = "milliseconds";
[
	oi,
	si,
	ci,
	li,
	ui,
	"day",
	di,
	fi,
	pi,
	mi,
	hi
].reduce((e, t, n) => (e[t] = 1 + n, e), {}), `${oi}${ci}`, `${oi}${ci}${ui}`, `${fi}${pi}`, li + "", li + "";
var gi = {
	[oi]: $r,
	[si]: Zr.every(3),
	[ci]: Zr,
	[li]: Ir,
	[ui]: Mr,
	day: Mr,
	[di]: Mr,
	[fi]: Ar,
	[pi]: Or,
	[mi]: Dr,
	[hi]: yr
}, _i = {
	[oi]: ei,
	[si]: Qr.every(3),
	[ci]: Qr,
	[li]: Wr,
	[ui]: Nr,
	day: Nr,
	[di]: Nr,
	[fi]: jr,
	[pi]: kr,
	[mi]: Dr,
	[hi]: yr
};
function vi(e) {
	return gi[e];
}
function yi(e) {
	return _i[e];
}
var bi = 1e3, xi = bi * 60, Si = xi * 60, Ci = Si * 24;
Ci * 7;
var wi = Ci * 30;
Ci * 365, [
	oi,
	ci,
	ui,
	fi,
	pi,
	mi,
	hi
].slice(0, -1).slice(0, -1).slice(0, -1).slice(0, -1), 5 * bi, 15 * bi, 30 * bi, 5 * xi, 15 * xi, 30 * xi, 3 * Si, 6 * Si, 12 * Si, 3 * wi;
//#endregion
//#region ../../node_modules/d3-time-format/src/locale.js
function Ti(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ei(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Di(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function Oi(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Ni(i), u = Pi(i), d = Ni(a), f = Pi(a), p = Ni(o), m = Pi(o), h = Ni(s), g = Pi(s), _ = Ni(c), v = Pi(c), y = {
		a: ue,
		A: de,
		b: fe,
		B: pe,
		c: null,
		d: ta,
		e: ta,
		f: oa,
		g: _a,
		G: ya,
		H: na,
		I: ra,
		j: ia,
		L: aa,
		m: sa,
		M: ca,
		p: me,
		q: he,
		Q: Ha,
		s: Ua,
		S: la,
		u: ua,
		U: da,
		V: pa,
		w: ma,
		W: ha,
		x: null,
		X: null,
		y: ga,
		Y: va,
		Z: ba,
		"%": Va
	}, b = {
		a: ge,
		A: _e,
		b: ve,
		B: ye,
		c: null,
		d: xa,
		e: xa,
		f: Ea,
		g: La,
		G: za,
		H: Sa,
		I: Ca,
		j: wa,
		L: Ta,
		m: Da,
		M: Oa,
		p: be,
		q: xe,
		Q: Ha,
		s: Ua,
		S: ka,
		u: Aa,
		U: ja,
		V: Na,
		w: Pa,
		W: Fa,
		x: null,
		X: null,
		y: Ia,
		Y: Ra,
		Z: Ba,
		"%": Va
	}, ee = {
		a: re,
		A: ie,
		b: ae,
		B: oe,
		c: se,
		d: Gi,
		e: Gi,
		f: Zi,
		g: Vi,
		G: Bi,
		H: qi,
		I: qi,
		j: Ki,
		L: Xi,
		m: Wi,
		M: Ji,
		p: ne,
		q: Ui,
		Q: $i,
		s: ea,
		S: Yi,
		u: Ii,
		U: Li,
		V: Ri,
		w: Fi,
		W: zi,
		x: ce,
		X: le,
		y: Vi,
		Y: Bi,
		Z: Hi,
		"%": Qi
	};
	y.x = x(n, y), y.X = x(r, y), y.c = x(t, y), b.x = x(n, b), b.X = x(r, b), b.c = x(t, b);
	function x(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = ki[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function te(e, t) {
		return function(n) {
			var r = Di(1900, void 0, 1), i = S(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Ei(Di(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? Gr.ceil(a) : Gr(a), a = Nr.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Ti(Di(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Lr.ceil(a) : Lr(a), a = Mr.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), o = "Z" in r ? Ei(Di(r.y, 0, 1)).getUTCDay() : Ti(Di(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Ei(r)) : Ti(r);
		};
	}
	function S(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = ee[s in ki ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ne(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function re(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ie(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ae(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function oe(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function se(e, n, r) {
		return S(e, t, n, r);
	}
	function ce(e, t, r) {
		return S(e, n, t, r);
	}
	function le(e, t, n) {
		return S(e, r, t, n);
	}
	function ue(e) {
		return o[e.getDay()];
	}
	function de(e) {
		return a[e.getDay()];
	}
	function fe(e) {
		return c[e.getMonth()];
	}
	function pe(e) {
		return s[e.getMonth()];
	}
	function me(e) {
		return i[+(e.getHours() >= 12)];
	}
	function he(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function ge(e) {
		return o[e.getUTCDay()];
	}
	function _e(e) {
		return a[e.getUTCDay()];
	}
	function ve(e) {
		return c[e.getUTCMonth()];
	}
	function ye(e) {
		return s[e.getUTCMonth()];
	}
	function be(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function xe(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = x(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = te(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = x(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = te(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var ki = {
	"-": "",
	_: " ",
	0: "0"
}, j = /^\s*\d+/, Ai = /^%/, ji = /[\\^$*+?|[\]().{}]/g;
function M(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Mi(e) {
	return e.replace(ji, "\\$&");
}
function Ni(e) {
	return RegExp("^(?:" + e.map(Mi).join("|") + ")", "i");
}
function Pi(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Fi(e, t, n) {
	var r = j.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Ii(e, t, n) {
	var r = j.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Li(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Ri(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function zi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Bi(e, t, n) {
	var r = j.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Vi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Hi(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ui(e, t, n) {
	var r = j.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Wi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Gi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Ki(e, t, n) {
	var r = j.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function qi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ji(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Yi(e, t, n) {
	var r = j.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Xi(e, t, n) {
	var r = j.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Zi(e, t, n) {
	var r = j.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Qi(e, t, n) {
	var r = Ai.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function $i(e, t, n) {
	var r = j.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function ea(e, t, n) {
	var r = j.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function ta(e, t) {
	return M(e.getDate(), t, 2);
}
function na(e, t) {
	return M(e.getHours(), t, 2);
}
function ra(e, t) {
	return M(e.getHours() % 12 || 12, t, 2);
}
function ia(e, t) {
	return M(1 + Mr.count($r(e), e), t, 3);
}
function aa(e, t) {
	return M(e.getMilliseconds(), t, 3);
}
function oa(e, t) {
	return aa(e, t) + "000";
}
function sa(e, t) {
	return M(e.getMonth() + 1, t, 2);
}
function ca(e, t) {
	return M(e.getMinutes(), t, 2);
}
function la(e, t) {
	return M(e.getSeconds(), t, 2);
}
function ua(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function da(e, t) {
	return M(Ir.count($r(e) - 1, e), t, 2);
}
function fa(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? Br(e) : Br.ceil(e);
}
function pa(e, t) {
	return e = fa(e), M(Br.count($r(e), e) + ($r(e).getDay() === 4), t, 2);
}
function ma(e) {
	return e.getDay();
}
function ha(e, t) {
	return M(Lr.count($r(e) - 1, e), t, 2);
}
function ga(e, t) {
	return M(e.getFullYear() % 100, t, 2);
}
function _a(e, t) {
	return e = fa(e), M(e.getFullYear() % 100, t, 2);
}
function va(e, t) {
	return M(e.getFullYear() % 1e4, t, 4);
}
function ya(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? Br(e) : Br.ceil(e), M(e.getFullYear() % 1e4, t, 4);
}
function ba(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + M(t / 60 | 0, "0", 2) + M(t % 60, "0", 2);
}
function xa(e, t) {
	return M(e.getUTCDate(), t, 2);
}
function Sa(e, t) {
	return M(e.getUTCHours(), t, 2);
}
function Ca(e, t) {
	return M(e.getUTCHours() % 12 || 12, t, 2);
}
function wa(e, t) {
	return M(1 + Nr.count(ei(e), e), t, 3);
}
function Ta(e, t) {
	return M(e.getUTCMilliseconds(), t, 3);
}
function Ea(e, t) {
	return Ta(e, t) + "000";
}
function Da(e, t) {
	return M(e.getUTCMonth() + 1, t, 2);
}
function Oa(e, t) {
	return M(e.getUTCMinutes(), t, 2);
}
function ka(e, t) {
	return M(e.getUTCSeconds(), t, 2);
}
function Aa(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function ja(e, t) {
	return M(Wr.count(ei(e) - 1, e), t, 2);
}
function Ma(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? Jr(e) : Jr.ceil(e);
}
function Na(e, t) {
	return e = Ma(e), M(Jr.count(ei(e), e) + (ei(e).getUTCDay() === 4), t, 2);
}
function Pa(e) {
	return e.getUTCDay();
}
function Fa(e, t) {
	return M(Gr.count(ei(e) - 1, e), t, 2);
}
function Ia(e, t) {
	return M(e.getUTCFullYear() % 100, t, 2);
}
function La(e, t) {
	return e = Ma(e), M(e.getUTCFullYear() % 100, t, 2);
}
function Ra(e, t) {
	return M(e.getUTCFullYear() % 1e4, t, 4);
}
function za(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? Jr(e) : Jr.ceil(e), M(e.getUTCFullYear() % 1e4, t, 4);
}
function Ba() {
	return "+0000";
}
function Va() {
	return "%";
}
function Ha(e) {
	return +e;
}
function Ua(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region ../../node_modules/d3-time-format/src/defaultLocale.js
var Wa, Ga, Ka, qa, Ja;
Ya({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function Ya(e) {
	return Wa = Oi(e), Ga = Wa.format, Ka = Wa.parse, qa = Wa.utcFormat, Ja = Wa.utcParse, Wa;
}
//#endregion
//#region ../../node_modules/vega-format/build/vega-format.js
function Xa(e) {
	let t = {};
	return (n) => t[n] || (t[n] = e(n));
}
function Za(e, t) {
	return (n) => {
		let r = e(n), i = r.indexOf(t);
		if (i < 0) return r;
		let a = Qa(r, i), o = a < r.length ? r.slice(a) : "";
		for (; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Qa(e, t) {
	let n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
function $a(e) {
	let t = Xa(e.format), n = e.formatPrefix;
	return {
		format: t,
		formatPrefix: n,
		formatFloat(e) {
			let n = er(e || ",");
			if (n.precision == null) {
				switch (n.precision = 12, n.type) {
					case "%":
						n.precision -= 2;
						break;
					case "e":
						--n.precision;
						break;
				}
				return Za(t(n), t(".1f")(1)[1]);
			} else return t(n);
		},
		formatSpan(e, r, i, a) {
			a = er(a ?? ",f");
			let o = Ln(e, r, i), s = Math.max(Math.abs(e), Math.abs(r)), c;
			if (a.precision == null) switch (a.type) {
				case "s": return isNaN(c = hr(o, s)) || (a.precision = c), n(a, s);
				case "":
				case "e":
				case "g":
				case "p":
				case "r":
					isNaN(c = gr(o, s)) || (a.precision = c - (a.type === "e"));
					break;
				case "f":
				case "%":
					isNaN(c = mr(o)) || (a.precision = c - (a.type === "%") * 2);
					break;
			}
			return t(a);
		}
	};
}
eo();
function eo() {
	return $a({
		format: k,
		formatPrefix: fr
	});
}
function to(e, t, n) {
	n ||= {}, D(n) || T(`Invalid time multi-format specifier: ${n}`);
	let r = t(mi), i = t(pi), a = t(fi), o = t(ui), s = t(li), c = t(ci), l = t(si), u = t(oi), d = e(n.milliseconds || ".%L"), f = e(n.seconds || ":%S"), p = e(n.minutes || "%I:%M"), m = e(n.hours || "%I %p"), h = e(n.date || n.day || "%a %d"), g = e(n.week || "%b %d"), _ = e(n.month || "%B"), v = e(n.quarter || "%B"), y = e(n.year || "%Y");
	return (e) => (r(e) < e ? d : i(e) < e ? f : a(e) < e ? p : o(e) < e ? m : c(e) < e ? s(e) < e ? h : g : u(e) < e ? l(e) < e ? _ : v : y)(e);
}
function no(e) {
	let t = Xa(e.format), n = Xa(e.utcFormat);
	return {
		timeFormat: (e) => O(e) ? t(e) : to(t, vi, e),
		utcFormat: (e) => O(e) ? n(e) : to(n, yi, e),
		timeParse: Xa(e.parse),
		utcParse: Xa(e.utcParse)
	};
}
var ro;
io();
function io() {
	return ro = no({
		format: Ga,
		parse: Ka,
		utcFormat: qa,
		utcParse: Ja
	});
}
function ao(e) {
	return no(Oi(e));
}
function oo(e) {
	return arguments.length ? ro = ao(e) : ro;
}
var so = (e) => e != null && e === e, co = (e) => e === "true" || e === "false" || e === !0 || e === !1, lo = (e) => !Number.isNaN(Date.parse(e)), uo = (e) => !Number.isNaN(+e) && !(e instanceof Date), fo = (e) => uo(e) && Number.isInteger(+e), po = {
	boolean: Nt,
	integer: $e,
	number: $e,
	date: Ft,
	string: It,
	unknown: Xe
}, mo = [
	co,
	fo,
	uo,
	lo
], ho = [
	"boolean",
	"integer",
	"number",
	"date"
];
function go(e, t) {
	if (!e || !e.length) return "unknown";
	let n = e.length, r = mo.length, i = mo.map((e, t) => t + 1);
	for (let a = 0, o = 0, s, c; a < n; ++a) for (c = t ? e[a][t] : e[a], s = 0; s < r; ++s) if (i[s] && so(c) && !mo[s](c) && (i[s] = 0, ++o, o === mo.length)) return "string";
	return ho[i.reduce((e, t) => e === 0 ? t : e, 0) - 1];
}
function _o(e, t) {
	return t.reduce((t, n) => (t[n] = go(e, n), t), {});
}
function vo(e) {
	let t = function(t, n) {
		let r = { delimiter: e };
		return yo(t, n ? Ct(n, r) : r);
	};
	return t.responseType = "text", t;
}
function yo(e, t) {
	return t.header && (e = t.header.map(Mt).join(t.delimiter) + "\n" + e), Yt(t.delimiter).parse(e + "");
}
yo.responseType = "text";
function bo(e) {
	return typeof Buffer == "function" && gt(Buffer.isBuffer) ? Buffer.isBuffer(e) : !1;
}
function xo(e, t) {
	let n = t && t.property ? Ye(t.property) : Xe;
	return D(e) && !bo(e) ? So(n(e), t) : n(JSON.parse(e));
}
xo.responseType = "json";
function So(e, t) {
	return !E(e) && Dt(e) && (e = [...e]), t && t.copy ? JSON.parse(JSON.stringify(e)) : e;
}
var Co = {
	interior: (e, t) => e !== t,
	exterior: (e, t) => e === t
};
function wo(e, t) {
	let n, r, i, a;
	return e = xo(e, t), t && t.feature ? (n = tn, i = t.feature) : t && t.mesh ? (n = on, i = t.mesh, a = Co[t.filter]) : T("Missing TopoJSON feature or mesh parameter."), r = (r = e.objects[i]) ? n(e, r, a) : T("Invalid TopoJSON object: " + i), r && r.features || [r];
}
wo.responseType = "json";
var To = {
	dsv: yo,
	csv: vo(","),
	tsv: vo("	"),
	json: xo,
	topojson: wo
};
function Eo(e, t) {
	return arguments.length > 1 ? (To[e] = t, this) : wt(To, e) ? To[e] : null;
}
function Do(e, t, n, r) {
	t ||= {};
	let i = Eo(t.type || "json");
	return i || T("Unknown data format type: " + t.type), e = i(e, t), t.parse && Oo(e, t.parse, n, r), wt(e, "columns") && delete e.columns, e;
}
function Oo(e, t, n, r) {
	if (!e.length) return;
	let i = oo();
	n ||= i.timeParse, r ||= i.utcParse;
	let a = e.columns || Object.keys(e[0]), o, s, c, l, u, d;
	t === "auto" && (t = _o(e, a)), a = Object.keys(t);
	let f = a.map((e) => {
		let i = t[e], a, o;
		if (i && (i.startsWith("date:") || i.startsWith("utc:"))) return a = i.split(/:(.+)?/, 2), o = a[1], (o[0] === "'" && o[o.length - 1] === "'" || o[0] === "\"" && o[o.length - 1] === "\"") && (o = o.slice(1, -1)), (a[0] === "utc" ? r : n)(o);
		if (!po[i]) throw Error("Illegal format pattern: " + e + ":" + i);
		return po[i];
	});
	for (c = 0, u = e.length, d = a.length; c < u; ++c) for (o = e[c], l = 0; l < d; ++l) s = a[l], o[s] = f[l](o[s]);
}
//#endregion
//#region src/data/formats/parquet.js
async function ko() {
	let { parquetReadObjects: e } = await import("./parquetRead-DG_-F5j5.js");
	return e;
}
async function Ao(e) {
	return await (await ko())({ file: e instanceof Uint8Array ? e.buffer : e });
}
Ao.responseType = "arrayBuffer", Eo("parquet", Ao);
//#endregion
//#region src/data/formats/bed.js
var jo = /^\s*$/, Mo = /^\s*(?:browser\b|track\b|#)/, No;
async function Po() {
	return No ??= import("./esm-DMXpJXM4.js").then((e) => e.default), No;
}
async function Fo(e) {
	let t = new (await (Po()))(), n = !1, r = [], i = e.split(/\r?\n/);
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if (a.length != 0) {
			if (!n) {
				if (jo.test(a) || Mo.test(a)) continue;
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
Eo("bed", Fo);
//#endregion
//#region src/data/formats/bedpe.js
var Io = /^\s*$/, Lo = /^\s*(?:browser\b|track\b|#)/, Ro = [
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
], zo = Ro.slice(0, 6), Bo = (e) => e, Vo = (e) => e == "." ? null : e, Ho = (e) => e == "+" ? 1 : e == "-" ? -1 : 0, Uo = (e) => {
	if (e == "." || e == "-1" || e == "") return null;
	let t = Number(e);
	return Number.isInteger(t) ? t : null;
}, Wo = {
	chrom1: Vo,
	chrom2: Vo,
	name: Vo,
	strand1: Ho,
	strand2: Ho,
	start1: Uo,
	end1: Uo,
	start2: Uo,
	end2: Uo,
	score: (e) => {
		if (e == "." || e == "") return null;
		let t = Number(e);
		return Number.isNaN(t) ? e : t;
	}
};
function Go(e) {
	if (e.length < zo.length) return !1;
	for (let t = 0; t < zo.length; t++) if (e[t] != zo[t]) return !1;
	return !0;
}
function Ko(e, t = {}) {
	let n = e.split(/\r?\n/), r = t.columns, i = !1, a = !1, o = 0, s = [], c = [], l = [];
	for (let e of n) {
		if (o++, e.length == 0) continue;
		if (!i) {
			if (Io.test(e) || Lo.test(e)) continue;
			i = !0;
		}
		if (Io.test(e)) continue;
		let t = e.split("	");
		if (!a) {
			let e = r || (Go(t) ? t : Ro);
			for (let t of e) s.push(t), c.push(Wo[t] ?? Bo);
			if (a = !0, !r && e == t) continue;
		}
		for (; s.length < t.length;) s.push("field" + (s.length + 1)), c.push(Bo);
		if (t.length < zo.length) throw Error(`BEDPE line ${o} has ${t.length} columns, expected at least ${zo.length}.`);
		let n = {};
		for (let e = 0; e < t.length; e++) {
			let r = s[e];
			n[r] = c[e](t[e]);
		}
		l.push(n);
	}
	return l;
}
Eo("bedpe", Ko);
//#endregion
//#region src/data/formats/fasta.js
function qo(e, t) {
	let n = [], r;
	for (let t of e.split("\n")) if (t.startsWith(">")) r = {
		identifier: t.match(/>(\S+)/)[1],
		sequence: ""
	}, n.push(r);
	else if (r) r.sequence += t.trim();
	else throw Error("Invalid fasta file!");
	return n;
}
Eo("fasta", qo);
//#endregion
//#region src/utils/arrayUtils.js
function Jo(e, t) {
	return e.length == t.length && e.every((n, r) => e[r] === t[r]);
}
function N(e) {
	return Array.isArray(e) ? e : e === void 0 ? [] : [e];
}
function Yo(e) {
	return e[e.length - 1];
}
//#endregion
//#region src/utils/smoothstep.js
function Xo(e, t, n) {
	return n = (n - e) / (t - e), n = Math.max(0, Math.min(1, n)), n * n * (3 - 2 * n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/init.js
function Zo(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default:
			this.range(t).domain(e);
			break;
	}
	return this;
}
function Qo(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default:
			this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
			break;
	}
	return this;
}
//#endregion
//#region ../../node_modules/d3-scale/src/ordinal.js
var $o = Symbol("implicit");
function es() {
	var e = new bn(), t = [], n = [], r = $o;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== $o) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new bn();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return es(t, n).unknown(r);
	}, Zo.apply(i, arguments), i;
}
//#endregion
//#region ../../node_modules/d3-color/src/define.js
function ts(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function ns(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region ../../node_modules/d3-color/src/color.js
function rs() {}
var is = .7, as = 1 / is, os = "\\s*([+-]?\\d+)\\s*", ss = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ls = /^#([0-9a-f]{3,8})$/, us = RegExp(`^rgb\\(${os},${os},${os}\\)$`), ds = RegExp(`^rgb\\(${cs},${cs},${cs}\\)$`), fs = RegExp(`^rgba\\(${os},${os},${os},${ss}\\)$`), ps = RegExp(`^rgba\\(${cs},${cs},${cs},${ss}\\)$`), ms = RegExp(`^hsl\\(${ss},${cs},${cs}\\)$`), hs = RegExp(`^hsla\\(${ss},${cs},${cs},${ss}\\)$`), gs = {
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
ts(rs, xs, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: _s,
	formatHex: _s,
	formatHex8: vs,
	formatHsl: ys,
	formatRgb: bs,
	toString: bs
});
function _s() {
	return this.rgb().formatHex();
}
function vs() {
	return this.rgb().formatHex8();
}
function ys() {
	return Ns(this).formatHsl();
}
function bs() {
	return this.rgb().formatRgb();
}
function xs(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = ls.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ss(t) : n === 3 ? new P(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Cs(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Cs(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = us.exec(e)) ? new P(t[1], t[2], t[3], 1) : (t = ds.exec(e)) ? new P(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fs.exec(e)) ? Cs(t[1], t[2], t[3], t[4]) : (t = ps.exec(e)) ? Cs(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ms.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, 1) : (t = hs.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, t[4]) : gs.hasOwnProperty(e) ? Ss(gs[e]) : e === "transparent" ? new P(NaN, NaN, NaN, 0) : null;
}
function Ss(e) {
	return new P(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Cs(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new P(e, t, n, r);
}
function ws(e) {
	return e instanceof rs || (e = xs(e)), e ? (e = e.rgb(), new P(e.r, e.g, e.b, e.opacity)) : new P();
}
function Ts(e, t, n, r) {
	return arguments.length === 1 ? ws(e) : new P(e, t, n, r ?? 1);
}
function P(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ts(P, Ts, ns(rs, {
	brighter(e) {
		return e = e == null ? as : as ** +e, new P(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? is : is ** +e, new P(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new P(As(this.r), As(this.g), As(this.b), ks(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Es,
	formatHex: Es,
	formatHex8: Ds,
	formatRgb: Os,
	toString: Os
}));
function Es() {
	return `#${js(this.r)}${js(this.g)}${js(this.b)}`;
}
function Ds() {
	return `#${js(this.r)}${js(this.g)}${js(this.b)}${js((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
	let e = ks(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${As(this.r)}, ${As(this.g)}, ${As(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ks(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function As(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function js(e) {
	return e = As(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ms(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Fs(e, t, n, r);
}
function Ns(e) {
	if (e instanceof Fs) return new Fs(e.h, e.s, e.l, e.opacity);
	if (e instanceof rs || (e = xs(e)), !e) return new Fs();
	if (e instanceof Fs) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Fs(o, s, c, e.opacity);
}
function Ps(e, t, n, r) {
	return arguments.length === 1 ? Ns(e) : new Fs(e, t, n, r ?? 1);
}
function Fs(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ts(Fs, Ps, ns(rs, {
	brighter(e) {
		return e = e == null ? as : as ** +e, new Fs(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? is : is ** +e, new Fs(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new P(Rs(e >= 240 ? e - 240 : e + 120, i, r), Rs(e, i, r), Rs(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Fs(Is(this.h), Ls(this.s), Ls(this.l), ks(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = ks(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Is(this.h)}, ${Ls(this.s) * 100}%, ${Ls(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Is(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ls(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Rs(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region ../../node_modules/d3-color/src/math.js
var zs = Math.PI / 180, Bs = 180 / Math.PI, Vs = 18, Hs = .96422, Us = 1, Ws = .82521, Gs = 4 / 29, Ks = 6 / 29, qs = 3 * Ks * Ks, Js = Ks * Ks * Ks;
function Ys(e) {
	if (e instanceof Zs) return new Zs(e.l, e.a, e.b, e.opacity);
	if (e instanceof ic) return ac(e);
	e instanceof P || (e = ws(e));
	var t = tc(e.r), n = tc(e.g), r = tc(e.b), i = Qs((.2225045 * t + .7168786 * n + .0606169 * r) / Us), a, o;
	return t === n && n === r ? a = o = i : (a = Qs((.4360747 * t + .3850649 * n + .1430804 * r) / Hs), o = Qs((.0139322 * t + .0971045 * n + .7141733 * r) / Ws)), new Zs(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function Xs(e, t, n, r) {
	return arguments.length === 1 ? Ys(e) : new Zs(e, t, n, r ?? 1);
}
function Zs(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
ts(Zs, Xs, ns(rs, {
	brighter(e) {
		return new Zs(this.l + Vs * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new Zs(this.l - Vs * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Hs * $s(t), e = Us * $s(e), n = Ws * $s(n), new P(ec(3.1338561 * t - 1.6168667 * e - .4906146 * n), ec(-.9787684 * t + 1.9161415 * e + .033454 * n), ec(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Qs(e) {
	return e > Js ? e ** (1 / 3) : e / qs + Gs;
}
function $s(e) {
	return e > Ks ? e * e * e : qs * (e - Gs);
}
function ec(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function tc(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function nc(e) {
	if (e instanceof ic) return new ic(e.h, e.c, e.l, e.opacity);
	if (e instanceof Zs || (e = Ys(e)), e.a === 0 && e.b === 0) return new ic(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Bs;
	return new ic(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function rc(e, t, n, r) {
	return arguments.length === 1 ? nc(e) : new ic(e, t, n, r ?? 1);
}
function ic(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function ac(e) {
	if (isNaN(e.h)) return new Zs(e.l, 0, 0, e.opacity);
	var t = e.h * zs;
	return new Zs(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
ts(ic, rc, ns(rs, {
	brighter(e) {
		return new ic(this.h, this.c, this.l + Vs * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new ic(this.h, this.c, this.l - Vs * (e ?? 1), this.opacity);
	},
	rgb() {
		return ac(this).rgb();
	}
}));
//#endregion
//#region ../../node_modules/d3-color/src/cubehelix.js
var oc = -.14861, sc = 1.78277, cc = -.29227, lc = -.90649, uc = 1.97294, dc = uc * lc, fc = uc * sc, pc = sc * cc - lc * oc;
function mc(e) {
	if (e instanceof gc) return new gc(e.h, e.s, e.l, e.opacity);
	e instanceof P || (e = ws(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (pc * r + dc * t - fc * n) / (pc + dc - fc), a = r - i, o = (uc * (n - i) - cc * a) / lc, s = Math.sqrt(o * o + a * a) / (uc * i * (1 - i)), c = s ? Math.atan2(o, a) * Bs - 120 : NaN;
	return new gc(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function hc(e, t, n, r) {
	return arguments.length === 1 ? mc(e) : new gc(e, t, n, r ?? 1);
}
function gc(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ts(gc, hc, ns(rs, {
	brighter(e) {
		return e = e == null ? as : as ** +e, new gc(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? is : is ** +e, new gc(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * zs, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new P(255 * (t + n * (oc * r + sc * i)), 255 * (t + n * (cc * r + lc * i)), 255 * (t + uc * r * n), this.opacity);
	}
}));
//#endregion
//#region ../../node_modules/d3-interpolate/src/basis.js
function _c(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function vc(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return _c((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/basisClosed.js
function yc(e) {
	var t = e.length;
	return function(n) {
		var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t), i = e[(r + t - 1) % t], a = e[r % t], o = e[(r + 1) % t], s = e[(r + 2) % t];
		return _c((n - r / t) * t, i, a, o, s);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/constant.js
var bc = (e) => () => e;
//#endregion
//#region ../../node_modules/d3-interpolate/src/color.js
function xc(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Sc(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Cc(e, t) {
	var n = t - e;
	return n ? xc(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : bc(isNaN(e) ? t : e);
}
function wc(e) {
	return (e = +e) == 1 ? F : function(t, n) {
		return n - t ? Sc(t, n, e) : bc(isNaN(t) ? n : t);
	};
}
function F(e, t) {
	var n = t - e;
	return n ? xc(e, n) : bc(isNaN(e) ? t : e);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/rgb.js
var Tc = (function e(t) {
	var n = wc(t);
	function r(e, t) {
		var r = n((e = Ts(e)).r, (t = Ts(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = F(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function Ec(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = Ts(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Dc = Ec(vc), Oc = Ec(yc);
//#endregion
//#region ../../node_modules/d3-interpolate/src/numberArray.js
function kc(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Ac(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/array.js
function jc(e, t) {
	return (Ac(t) ? kc : Mc)(e, t);
}
function Mc(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Vc(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/date.js
function Nc(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/number.js
function Pc(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/object.js
function Fc(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Vc(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/string.js
var Ic = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Lc = new RegExp(Ic.source, "g");
function Rc(e) {
	return function() {
		return e;
	};
}
function zc(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Bc(e, t) {
	var n = Ic.lastIndex = Lc.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Ic.exec(e)) && (i = Lc.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Pc(r, i)
	})), n = Lc.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? zc(c[0].x) : Rc(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/value.js
function Vc(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? bc(t) : (n === "number" ? Pc : n === "string" ? (r = xs(t)) ? (t = r, Tc) : Bc : t instanceof xs ? Tc : t instanceof Date ? Nc : Ac(t) ? kc : Array.isArray(t) ? Mc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Fc : Pc)(e, t);
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/discrete.js
function Hc(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hue.js
function Uc(e, t) {
	var n = Cc(+e, +t);
	return function(e) {
		var t = n(e);
		return t - 360 * Math.floor(t / 360);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/round.js
function Wc(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/decompose.js
var Gc = 180 / Math.PI, Kc = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function qc(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Gc,
		skewX: Math.atan(c) * Gc,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/parse.js
var Jc;
function Yc(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Kc : qc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Xc(e) {
	return e == null || (Jc ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Jc.setAttribute("transform", e), !(e = Jc.transform.baseVal.consolidate())) ? Kc : (e = e.matrix, qc(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/transform/index.js
function Zc(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Pc(e, i)
			}, {
				i: c - 2,
				x: Pc(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Pc(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Pc(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Pc(e, n)
			}, {
				i: s - 2,
				x: Pc(t, r)
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
var Qc = Zc(Yc, "px, ", "px)", "deg)"), $c = Zc(Xc, ", ", ")", ")"), el = 1e-12;
function tl(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function nl(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function rl(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var il = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < el) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = tl(y), c = s / (n * g) * (i * rl(t * r + y) - nl(y));
				return [
					a + c * d,
					o + c * f,
					s * i / tl(t * r + y)
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
function al(e) {
	return function(t, n) {
		var r = e((t = Ps(t)).h, (n = Ps(n)).h), i = F(t.s, n.s), a = F(t.l, n.l), o = F(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var ol = al(Cc), sl = al(F);
//#endregion
//#region ../../node_modules/d3-interpolate/src/lab.js
function cl(e, t) {
	var n = F((e = Xs(e)).l, (t = Xs(t)).l), r = F(e.a, t.a), i = F(e.b, t.b), a = F(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/hcl.js
function ll(e) {
	return function(t, n) {
		var r = e((t = rc(t)).h, (n = rc(n)).h), i = F(t.c, n.c), a = F(t.l, n.l), o = F(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var ul = ll(Cc), dl = ll(F);
//#endregion
//#region ../../node_modules/d3-interpolate/src/cubehelix.js
function fl(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = hc(t)).h, (r = hc(r)).h), a = F(t.s, r.s), o = F(t.l, r.l), s = F(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
var pl = fl(Cc), ml = fl(F);
//#endregion
//#region ../../node_modules/d3-interpolate/src/piecewise.js
function hl(e, t) {
	t === void 0 && (t = e, e = Vc);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/quantize.js
function gl(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region ../../node_modules/d3-interpolate/src/index.js
var _l = /* @__PURE__ */ e({
	interpolate: () => Vc,
	interpolateArray: () => jc,
	interpolateBasis: () => vc,
	interpolateBasisClosed: () => yc,
	interpolateCubehelix: () => pl,
	interpolateCubehelixLong: () => ml,
	interpolateDate: () => Nc,
	interpolateDiscrete: () => Hc,
	interpolateHcl: () => ul,
	interpolateHclLong: () => dl,
	interpolateHsl: () => ol,
	interpolateHslLong: () => sl,
	interpolateHue: () => Uc,
	interpolateLab: () => cl,
	interpolateNumber: () => Pc,
	interpolateNumberArray: () => kc,
	interpolateObject: () => Fc,
	interpolateRgb: () => Tc,
	interpolateRgbBasis: () => Dc,
	interpolateRgbBasisClosed: () => Oc,
	interpolateRound: () => Wc,
	interpolateString: () => Bc,
	interpolateTransformCss: () => Qc,
	interpolateTransformSvg: () => $c,
	interpolateZoom: () => il,
	piecewise: () => hl,
	quantize: () => gl
});
//#endregion
//#region ../../node_modules/d3-scale/src/constant.js
function vl(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/d3-scale/src/number.js
function yl(e) {
	return +e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/continuous.js
var bl = [0, 1];
function xl(e) {
	return e;
}
function Sl(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : vl(isNaN(t) ? NaN : .5);
}
function Cl(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function wl(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = Sl(i, r), a = n(o, a)) : (r = Sl(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Tl(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = Sl(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = gn(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function El(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Dl() {
	var e = bl, t = bl, n = Vc, r, i, a, o = xl, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== xl && (o = Cl(e[0], e[n - 1])), s = n > 2 ? Tl : wl, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), Pc))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, yl), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Wc, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : xl, u()) : o !== xl;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function Ol() {
	return Dl()(xl, xl);
}
//#endregion
//#region ../../node_modules/d3-scale/src/tickFormat.js
function kl(e, t, n, r) {
	var i = Ln(e, t, n), a;
	switch (r = er(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = hr(i, o)) && (r.precision = a), fr(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = gr(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = mr(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return k(r);
}
//#endregion
//#region ../../node_modules/d3-scale/src/linear.js
function Al(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Fn(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return kl(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = In(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function jl() {
	var e = Ol();
	return e.copy = function() {
		return El(e, jl());
	}, Zo.apply(e, arguments), Al(e);
}
//#endregion
//#region ../../node_modules/d3-scale/src/identity.js
function Ml(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, yl), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Ml(e).unknown(t);
	}, e = arguments.length ? Array.from(e, yl) : [0, 1], Al(n);
}
//#endregion
//#region ../../node_modules/d3-scale/src/nice.js
function Nl(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/log.js
function Pl(e) {
	return Math.log(e);
}
function Fl(e) {
	return Math.exp(e);
}
function Il(e) {
	return -Math.log(-e);
}
function Ll(e) {
	return -Math.exp(-e);
}
function Rl(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function zl(e) {
	return e === 10 ? Rl : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Bl(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Vl(e) {
	return (t, n) => -e(-t, n);
}
function Hl(e) {
	let t = e(Pl, Fl), n = t.domain, r = 10, i, a;
	function o() {
		return i = Bl(r), a = zl(r), n()[0] < 0 ? (i = Vl(i), a = Vl(a), e(Il, Ll)) : e(Pl, Fl), t;
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
			m.length * 2 < p && (m = Fn(o, s, p));
		} else m = Fn(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = er(n)).precision == null && (n.trim = !0), n = k(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Nl(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Ul() {
	let e = Hl(Dl()).domain([1, 10]);
	return e.copy = () => El(e, Ul()).base(e.base()), Zo.apply(e, arguments), e;
}
//#endregion
//#region ../../node_modules/d3-scale/src/symlog.js
function Wl(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function Gl(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Kl(e) {
	var t = 1, n = e(Wl(t), Gl(t));
	return n.constant = function(n) {
		return arguments.length ? e(Wl(t = +n), Gl(t)) : t;
	}, Al(n);
}
function ql() {
	var e = Kl(Dl());
	return e.copy = function() {
		return El(e, ql()).constant(e.constant());
	}, Zo.apply(e, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/pow.js
function Jl(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function Yl(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Xl(e) {
	return e < 0 ? -e * e : e * e;
}
function Zl(e) {
	var t = e(xl, xl), n = 1;
	function r() {
		return n === 1 ? e(xl, xl) : n === .5 ? e(Yl, Xl) : e(Jl(n), Jl(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Al(t);
}
function Ql() {
	var e = Zl(Dl());
	return e.copy = function() {
		return El(e, Ql()).exponent(e.exponent());
	}, Zo.apply(e, arguments), e;
}
function $l() {
	return Ql.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantile.js
function eu() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Un(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[gn(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(ln), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return eu().domain(e).range(t).unknown(r);
	}, Zo.apply(a, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/quantize.js
function tu() {
	var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], a;
	function o(e) {
		return e != null && e <= e ? i[gn(r, e, 0, n)] : a;
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
		return tu().domain([e, t]).range(i).unknown(a);
	}, Zo.apply(Al(o), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/threshold.js
function nu() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[gn(e, i, 0, r)] : n;
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
		return nu().domain(e).range(t).unknown(n);
	}, Zo.apply(i, arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/time.js
function ru(e) {
	return new Date(e);
}
function iu(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function au(e, t, n, r, i, a, o, s, c, l) {
	var u = Ol(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function ee(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, iu)) : f().map(ru);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? ee : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Nl(n, e)) : u;
	}, u.copy = function() {
		return El(u, au(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function ou() {
	return Zo.apply(au(ii, ai, $r, Zr, Ir, Mr, Ar, Or, Dr, Ga).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/utcTime.js
function su() {
	return Zo.apply(au(ni, ri, ei, Qr, Wr, Nr, jr, kr, Dr, qa).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region ../../node_modules/d3-scale/src/sequential.js
function cu() {
	var e = 0, t = 1, n, r, i, a, o = xl, s = !1, c;
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
	return l.range = u(Vc), l.rangeRound = u(Wc), l.unknown = function(e) {
		return arguments.length ? (c = e, l) : c;
	}, function(o) {
		return a = o, n = o(e), r = o(t), i = n === r ? 0 : 1 / (r - n), l;
	};
}
function lu(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function uu() {
	var e = Al(cu()(xl));
	return e.copy = function() {
		return lu(e, uu());
	}, Qo.apply(e, arguments);
}
function du() {
	var e = Hl(cu()).domain([1, 10]);
	return e.copy = function() {
		return lu(e, du()).base(e.base());
	}, Qo.apply(e, arguments);
}
function fu() {
	var e = Kl(cu());
	return e.copy = function() {
		return lu(e, fu()).constant(e.constant());
	}, Qo.apply(e, arguments);
}
function pu() {
	var e = Zl(cu());
	return e.copy = function() {
		return lu(e, pu()).exponent(e.exponent());
	}, Qo.apply(e, arguments);
}
function mu() {
	return pu.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale/src/diverging.js
function hu() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = xl, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = hl(e, [
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
	return p.range = m(Vc), p.rangeRound = m(Wc), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function gu() {
	var e = Al(hu()(xl));
	return e.copy = function() {
		return lu(e, gu());
	}, Qo.apply(e, arguments);
}
function _u() {
	var e = Hl(hu()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return lu(e, _u()).base(e.base());
	}, Qo.apply(e, arguments);
}
function vu() {
	var e = Kl(hu());
	return e.copy = function() {
		return lu(e, vu()).constant(e.constant());
	}, Qo.apply(e, arguments);
}
function yu() {
	var e = Zl(hu());
	return e.copy = function() {
		return lu(e, yu()).exponent(e.exponent());
	}, Qo.apply(e, arguments);
}
function bu() {
	return yu.apply(null, arguments).exponent(.5);
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/colors.js
function xu(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region ../../node_modules/d3-scale-chromatic/src/categorical/category10.js
var Su = xu("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Cu = xu("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), wu = xu("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Tu = xu("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Eu = xu("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Du = xu("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Ou = xu("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), ku = xu("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Au = xu("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), ju = xu("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
//#endregion
//#region ../../node_modules/vega-scale/build/vega-scale.js
function Mu(e, t, n) {
	let r = e - t + n * 2;
	return e ? r > 0 ? r : 1 : 0;
}
var Nu = "identity", Pu = "linear", Fu = "sqrt", Iu = "symlog", Lu = "time", Ru = "sequential", zu = "diverging", Bu = "quantile", Vu = "quantize", Hu = "threshold", Uu = "ordinal", Wu = "point", Gu = "band", Ku = "bin-ordinal", I = "continuous", qu = "discrete", Ju = "discretizing", Yu = "interpolating", Xu = "temporal";
function Zu(e) {
	return function(t) {
		let n = t[0], r = t[1], i;
		return r < n && (i = n, n = r, r = i), [e.invert(n), e.invert(r)];
	};
}
function Qu(e) {
	return function(t) {
		let n = e.range(), r = t[0], i = t[1], a = -1, o, s, c, l;
		for (i < r && (s = r, r = i, i = s), c = 0, l = n.length; c < l; ++c) n[c] >= r && n[c] <= i && (a < 0 && (a = c), o = c);
		if (!(a < 0)) return r = e.invertExtent(n[a]), i = e.invertExtent(n[o]), [r[0] === void 0 ? r[1] : r[0], i[1] === void 0 ? i[0] : i[1]];
	};
}
function $u() {
	let e = es().unknown(void 0), t = e.domain, n = e.range, r = [0, 1], i, a, o = !1, s = 0, c = 0, l = .5;
	delete e.unknown;
	function u() {
		let e = t().length, u = r[1] < r[0], d = r[1 - u], f = Mu(e, s, c), p = r[u - 0];
		i = (d - p) / (f || 1), o && (i = Math.floor(i)), p += (d - p - i * (e - s)) * l, a = i * (1 - s), o && (p = Math.round(p), a = Math.round(a));
		let m = Kn(e).map((e) => p + i * e);
		return n(u ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), u()) : t();
	}, e.range = function(e) {
		return arguments.length ? (r = [+e[0], +e[1]], u()) : r.slice();
	}, e.rangeRound = function(e) {
		return r = [+e[0], +e[1]], o = !0, u();
	}, e.bandwidth = function() {
		return a;
	}, e.step = function() {
		return i;
	}, e.round = function(e) {
		return arguments.length ? (o = !!e, u()) : o;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), s = c, u()) : s;
	}, e.paddingInner = function(e) {
		return arguments.length ? (s = Math.max(0, Math.min(1, e)), u()) : s;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (c = Math.max(0, Math.min(1, e)), u()) : c;
	}, e.align = function(e) {
		return arguments.length ? (l = Math.max(0, Math.min(1, e)), u()) : l;
	}, e.invertRange = function(e) {
		if (e[0] == null || e[1] == null) return;
		let i = r[1] < r[0], o = i ? n().reverse() : n(), s = o.length - 1, c = +e[0], l = +e[1], u, d, f;
		if (!(c !== c || l !== l) && (l < c && (f = c, c = l, l = f), !(l < o[0] || c > r[1 - i]))) return u = Math.max(0, gn(o, c) - 1), d = c === l ? u : gn(o, l) - 1, c - o[u] > a + 1e-10 && ++u, i && (f = u, u = s - d, d = s - f), u > d ? void 0 : t().slice(u, d + 1);
	}, e.invert = function(t) {
		let n = e.invertRange([t, t]);
		return n && n[0];
	}, e.copy = function() {
		return $u().domain(t()).range(r).round(o).paddingInner(s).paddingOuter(c).align(l);
	}, u();
}
function ed(e) {
	let t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, e.copy = function() {
		return ed(t());
	}, e;
}
function td() {
	return ed($u().paddingInner(1));
}
var nd = Array.prototype.map;
function rd(e) {
	return nd.call(e, $e);
}
var id = Array.prototype.slice;
function ad() {
	let e = [], t = [];
	function n(n) {
		return n == null || n !== n ? void 0 : t[(gn(e, n) - 1) % t.length];
	}
	return n.domain = function(t) {
		return arguments.length ? (e = rd(t), n) : e.slice();
	}, n.range = function(e) {
		return arguments.length ? (t = id.call(e), n) : t.slice();
	}, n.tickFormat = function(t, n) {
		return kl(e[0], Qe(e), t ?? 10, n);
	}, n.copy = function() {
		return ad().domain(n.domain()).range(n.range());
	}, n;
}
var od = /* @__PURE__ */ new Map(), sd = Symbol("vega_scale");
function cd(e) {
	return e[sd] = !0, e;
}
function ld(e, t, n) {
	let r = function() {
		let n = t();
		return n.invertRange ||= n.invert ? Zu(n) : n.invertExtent ? Qu(n) : void 0, n.type = e, cd(n);
	};
	return r.metadata = Lt(mt(n)), r;
}
function L(e, t, n) {
	return arguments.length > 1 ? (od.set(e, ld(e, t, n)), this) : ud(e) ? od.get(e) : void 0;
}
L(Nu, Ml), L(Pu, jl, I), L("log", Ul, [I, "log"]), L("pow", Ql, I), L(Fu, $l, I), L(Iu, ql, I), L(Lu, ou, [I, Xu]), L("utc", su, [I, Xu]), L(Ru, uu, [I, Yu]), L(`${Ru}-${Pu}`, uu, [I, Yu]), L(`${Ru}-log`, du, [
	I,
	Yu,
	"log"
]), L(`${Ru}-pow`, pu, [I, Yu]), L(`${Ru}-${Fu}`, mu, [I, Yu]), L(`${Ru}-${Iu}`, fu, [I, Yu]), L(`${zu}-${Pu}`, gu, [I, Yu]), L(`${zu}-log`, _u, [
	I,
	Yu,
	"log"
]), L(`${zu}-pow`, yu, [I, Yu]), L(`${zu}-${Fu}`, bu, [I, Yu]), L(`${zu}-${Iu}`, vu, [I, Yu]), L(Bu, eu, [Ju, Bu]), L(Vu, tu, Ju), L(Hu, nu, Ju), L(Ku, ad, [qu, Ju]), L(Uu, es, qu), L(Gu, $u, qu), L(Wu, td, qu);
function ud(e) {
	return od.has(e);
}
function dd(e, t) {
	let n = od.get(e);
	return n && n.metadata[t];
}
function R(e) {
	return dd(e, I);
}
function fd(e) {
	return dd(e, qu);
}
function pd(e) {
	return dd(e, Ju);
}
function md(e) {
	return dd(e, "log");
}
function hd(e) {
	return dd(e, Yu);
}
function gd(e, t) {
	let n = t[0], r = Qe(t) - n;
	return function(t) {
		return e(n + t * r);
	};
}
function _d(e, t, n) {
	return hl(yd(t || "rgb", n), e);
}
function vd(e, t) {
	let n = Array(t), r = t + 1;
	for (let i = 0; i < t;) n[i] = e(++i / r);
	return n;
}
function yd(e, t) {
	let n = _l[bd(e)];
	return t != null && n && n.gamma ? n.gamma(t) : n;
}
function bd(e) {
	return "interpolate" + e.toLowerCase().split("-").map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
var xd = {
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
}, Sd = {
	accent: Cu,
	category10: Su,
	category20: "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5",
	category20b: "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6",
	category20c: "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9",
	dark2: wu,
	observable10: Tu,
	paired: Eu,
	pastel1: Du,
	pastel2: Ou,
	set1: ku,
	set2: Au,
	set3: ju,
	tableau10: "4c78a8f58518e4575672b7b254a24beeca3bb279a2ff9da69d755dbab0ac",
	tableau20: "4c78a89ecae9f58518ffbf7954a24b88d27ab79a20f2cf5b43989483bcb6e45756ff9d9879706ebab0acd67195fcbfd2b279a2d6a5c99e765fd8b5a5"
};
function Cd(e) {
	if (E(e)) return e;
	let t = e.length / 6 | 0, n = Array(t);
	for (let r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
function wd(e, t) {
	for (let n in e) Ed(n, t(e[n]));
}
var Td = {};
wd(Sd, Cd), wd(xd, (e) => _d(Cd(e)));
function Ed(e, t) {
	return e &&= e.toLowerCase(), arguments.length > 1 ? (Td[e] = t, this) : Td[e];
}
//#endregion
//#region src/scale/ticks.js
function Dd(e, t, n) {
	return Ot(t) && n != null && (t = Math.min(t, ~~(jt(e.domain()) / n) || 1)), D(t) && (t.step, t = t.interval), t;
}
function Od(e, t, n) {
	var r = e.range(), i = Math.floor(r[0]), a = Math.ceil(Qe(r));
	if (i > a && (r = a, a = i, i = r), t = t.filter(function(t) {
		return t = e(t), i <= t && t <= a;
	}), n > 0 && t.length > 1) {
		for (var o = [t[0], Qe(t)]; t.length > n && t.length >= 3;) t = t.filter(function(e, t) {
			return !(t % 2);
		});
		t.length < 3 && (t = o);
	}
	return t;
}
function kd(e, t) {
	return e.bins ? Od(e, Ad(e.bins, t)) : e.ticks ? e.ticks(t) : e.domain();
}
function Ad(e, t) {
	var n = e.length, r = ~~(n / (t || n));
	return r < 2 ? e.slice() : e.filter(function(e, t) {
		return !(t % r);
	});
}
function jd(e, t, n) {
	var r = e.tickFormat ? e.tickFormat(t, n) : n ? k(n) : String;
	if (md(e.type)) {
		var i = Nd(n);
		r = e.bins ? i : Md(r, i);
	}
	return r;
}
function Md(e, t) {
	return function(n) {
		return e(n) ? t(n) : "";
	};
}
function Nd(e) {
	var t = er(e || ",");
	if (t.precision == null) {
		switch (t.precision = 12, t.type) {
			case "%":
				t.precision -= 2;
				break;
			case "e":
				--t.precision;
				break;
		}
		return Pd(k(t), k(".1f")(1)[1]);
	} else return k(t);
}
function Pd(e, t) {
	return function(n) {
		var r = e(n), i = r.indexOf(t), a, o;
		if (i < 0) return r;
		for (a = Fd(r, i), o = a < r.length ? r.slice(a) : ""; --a > i;) if (r[a] !== "0") {
			++a;
			break;
		}
		return r.slice(0, a) + o;
	};
}
function Fd(e, t) {
	var n = e.lastIndexOf("e"), r;
	if (n > 0) return n;
	for (n = e.length; --n > t;) if (r = e.charCodeAt(n), r >= 48 && r <= 57) return n + 1;
}
//#endregion
//#region src/data/sources/lazy/lazyDataSourceRegistry.js
var Id = [], Ld = [];
function Rd(e, t) {
	Ld.push({
		guard: e,
		Source: t
	});
}
function zd(e, t) {
	for (let n of Id) if (n.guard(e)) return new n.Source(e, t);
	for (let n of Ld) if (n.guard(e)) return new n.Source(e, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
//#endregion
//#region src/data/flowNode.js
var Bd = class {
	stats = {
		count: 0,
		first: null
	};
	#e = !1;
	#t = !1;
	#n = [];
	paramRuntimeProvider = null;
	get behavior() {
		return 0;
	}
	get domainSensitiveScaleChannels() {
		return [];
	}
	get label() {
		return `(${this.constructor.name})`;
	}
	constructor(e) {
		this.paramRuntimeProvider = e, this.children = [], this.parent = void 0, this.completed = !1;
	}
	get disposed() {
		return this.#t;
	}
	reset() {
		this.completed = !1;
		for (let e of this.children) e.reset();
		this.stats.count = 0, this.stats.first = null;
	}
	initialize() {}
	initializeOnce() {
		this.#e ||= (this.initialize(), !0);
	}
	#r() {
		this._propagate = Function("children", "stats", Kn(this.children.length).map((e) => `const child${e} = children[${e}];`).join("\n") + `return function propagate(datum) {
                    if (stats.count === 0) {
                        stats.first = structuredClone(datum);
                    }
                    stats.count++;
                ${Kn(this.children.length).map((e) => `child${e}.handle(datum);`).join("\n")}
                };`)(this.children, this.stats);
	}
	setParent(e) {
		this.parent = e;
	}
	addChild(e) {
		if (e.parent) throw Error("Cannot add the child! It already has a parent.");
		return this.children.push(e), e.setParent(this), this.#r(), this;
	}
	adopt(e) {
		e.parent && e.parent.removeChild(e), this.addChild(e);
	}
	adoptChildrenOf(e) {
		for (let t of e.children) this.adopt(t);
	}
	insertAsParent(e) {
		if (this.isRoot()) throw Error("Cannot insert a new parent for a root node!");
		e.parent = this.parent, this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#r(), this.parent = void 0, e.addChild(this);
	}
	removeChild(e) {
		let t = this.children.indexOf(e);
		if (t > -1) this.children.splice(t, 1), e.parent = void 0, this.#r();
		else throw Error("Trying to remove an unknown child node!");
	}
	excise() {
		if (this.isRoot()) throw Error("Cannot excise root node!");
		if (this.isTerminal()) this.parent.removeChild(this);
		else if (this.children.length == 1) {
			let e = this.children[0];
			e.setParent(this.parent), this.parent.children[this.parent.children.indexOf(this)] = e, this.parent.#r(), this.setParent(void 0), this.children.length = 0;
		} else throw Error("Cannot excise a node that has multiple children!");
	}
	isRoot() {
		return !this.parent;
	}
	isBranching() {
		return this.children.length > 1;
	}
	isTerminal() {
		return this.children.length == 0;
	}
	visit(e) {
		e(this);
		for (let t of this.children) t.visit(e);
		e.afterChildren && e.afterChildren(this);
	}
	subtreeToString(e = 0) {
		let t = this.children.map((t) => t.subtreeToString(e + 1)).join("");
		return `${" ".repeat(e * 2)}* ${this.label}${"identifier" in this && this.identifier ? ": " + this.identifier : ""} \n${t}`;
	}
	handle(e) {
		this._propagate(e);
	}
	complete() {
		this.completed = !0;
		for (let e of this.children) e.complete();
	}
	registerDisposer(e) {
		this.#t ? e() : this.#n.push(e);
	}
	dispose() {
		if (!this.#t) {
			this.#t = !0;
			for (let e of this.#n) e();
			this.#n.length = 0;
		}
	}
	disposeSubtree() {
		let e = () => void 0;
		e.afterChildren = (e) => {
			e.dispose();
		}, this.visit(e);
	}
	beginBatch(e) {
		for (let t of this.children) t.beginBatch(e);
	}
	get paramRuntime() {
		if (this.paramRuntimeProvider && this.paramRuntimeProvider.paramRuntime) return this.paramRuntimeProvider.paramRuntime;
		if (!this.parent) throw Error("Cannot find paramRuntime!");
		return this.parent.paramRuntime;
	}
	repropagate() {
		if (this.parent) this.parent.repropagate();
		else throw Error("Cannot repropagate data, no FlowNode with stored data found!");
	}
	_propagate(e) {}
};
function Vd(e) {
	let t = /* @__PURE__ */ new Set();
	for (; e;) {
		for (let n of e.domainSensitiveScaleChannels) t.add(n);
		e = e.parent;
	}
	return t;
}
function Hd(e) {
	return e.type == "file";
}
function Ud(e) {
	return e.type == "facet";
}
//#endregion
//#region src/data/sources/dataSource.js
var Wd = class extends Bd {
	view;
	constructor(e) {
		super(), this.view = e;
	}
	get identifier() {}
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
	repropagate() {
		this.load();
	}
}, Gd = class extends Wd {
	initializedPromise = Promise.resolve();
	_lastLoadedDomain;
	constructor(e, t) {
		if (super(e), !t) throw Error("No channel has been specified for the lazy data source. Must be either \"x\" or \"y\".");
		if (t !== "x" && t !== "y") throw Error(`Invalid channel specified for the lazy data source: ${t}. Must be either "x" or "y"`);
		if (this.channel = t, this.scaleResolution = this.view.getScaleResolution(t), !this.scaleResolution) {
			let e = [`The lazy data source cannot find a resolved scale for channel "${t}".`];
			throw Kd(this.view) || e.push("Make sure the view has a \"shared\" scale resolution as it is not a unit view."), Error(e.join(" "));
		}
		let n = () => {
			this.view.isVisible() && this.onDomainChanged(this.scaleResolution.getDomain(), this.scaleResolution.getComplexDomain());
		};
		this.scaleResolution.addEventListener("domain", n), this.view.context.addBroadcastListener("layoutComputed", n);
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
	publishData(e) {
		this._lastLoadedDomain = Array.from(this.scaleResolution.getDomain()), this.reset(), this.beginBatch({ type: "file" });
		for (let t of e) for (let e of t) this._propagate(e);
		this.complete();
	}
	isDataReadyForDomain(e) {
		let t = e[this.channel];
		if (!t || !this._lastLoadedDomain) return !1;
		let [n, r] = t[0] <= t[1] ? t : [t[1], t[0]], [i, a] = this._lastLoadedDomain[0] <= this._lastLoadedDomain[1] ? this._lastLoadedDomain : [this._lastLoadedDomain[1], this._lastLoadedDomain[0]];
		return n >= i && r <= a;
	}
};
function Kd(e) {
	return typeof e.getMarkType == "function";
}
//#endregion
//#region src/data/sources/lazy/axisTickSource.js
var qd = class extends Gd {
	ticks = [];
	constructor(e, t) {
		let n = {
			axis: {},
			...e
		};
		super(t, n.channel), this.params = e;
	}
	get label() {
		return "axisTickSource";
	}
	async load() {
		this.ticks = null, await this.onDomainChanged();
	}
	async onDomainChanged() {
		let e = this.scaleResolution.getScale(), t = this.scaleResolution.getAxisLength(), n = this.params.axis, r = e.type == "locus" ? () => 85 : (e) => 30 + 55 * Xo(100, 700, e), i = Ot(n.tickCount) ? n.tickCount : Math.round(t / r(t)), a = Dd(e, i, n.tickMinStep), o = n.values ? Od(e, n.values, a) : kd(e, a);
		if (this.ticks == null || !Jo(o, this.ticks)) {
			this.ticks = o;
			let t = jd(e, i, n.format);
			this.publishData([o.map((e) => ({
				value: e,
				label: t(e)
			}))]);
		}
	}
};
function Jd(e) {
	return e?.type == "axisTicks";
}
Rd(Jd, qd);
//#endregion
//#region src/data/sources/lazy/axisGenomeSource.js
var Yd = class extends Gd {
	constructor(e, t) {
		super(t, e.channel);
	}
	get label() {
		return "axisGenomeSource";
	}
	async load() {
		this.publishData([this.genome.chromosomes]);
	}
};
function Xd(e) {
	return e?.type == "axisGenome";
}
Rd(Xd, Yd);
//#endregion
//#region src/utils/addBaseUrl.js
function Zd(e, t) {
	return !t || /^(data:|([A-Za-z]+:)?\/\/)/.test(e) || e.startsWith("/") ? e : (t.endsWith("/") || (t += "/"), t + e);
}
function Qd(e) {
	if (!e) return e;
	if (/[?#]/.test(e)) throw Error(`Invalid base URL: ${e} - cannot contain query or hash.`);
	return e.endsWith("/") ? e : e + "/";
}
//#endregion
//#region src/data/transforms/transform.js
var z = class extends Bd {
	#e;
	constructor(e, t) {
		super(t), this.#e = e.type;
	}
	get label() {
		return this.#e;
	}
}, $d = "_uniqueId", ef = 1e4, tf = [null], nf = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e, this.as = e.as ?? "_uniqueId", this._blocks = [], this._usedBlocks = 0, this._id = -1;
	}
	initialize() {}
	reset() {
		super.reset(), this._usedBlocks = 0, this._id = -1;
	}
	handle(e) {
		e[this.as] = this._nextId(), this._propagate(e);
	}
	_nextId() {
		return ++this._id % 1e4 == 0 && (this._id = this._getBlock() * ef), this._id;
	}
	_getBlock() {
		return this._usedBlocks < this._blocks.length ? this._blocks[this._usedBlocks++] : this._reserveBlock();
	}
	_reserveBlock() {
		let e = tf.length;
		return tf[e] = this, this._blocks.push(e), this._usedBlocks++, e;
	}
};
//#endregion
//#region src/utils/field.js
function B(e, t = e) {
	return /^[A-Za-z0-9_]+$/.test(e) ? He(Function("validator", `
                let validated = !validator;
                return function accessField(datum) {
                    if (!validated) {
                        validator(datum);
                        validated = true;
                    }
                    return datum[${JSON.stringify(e)}];
                }`)(function(t) {
		e in t || rf(t, e);
	}), [e], t) : Ye(e);
}
function rf(e, t) {
	throw Error(`Invalid field "${t}". Available fields or properties: ${Object.keys(e).join(", ")}`);
}
//#endregion
//#region src/encoder/accessor.js
function af(e, t, n) {
	if (!e) throw Error("Cannot create an accessor without a channel.");
	function r(n) {
		let r = n;
		return r.fields ??= [], r.constant = r.fields.length === 0, r.channelDef = t, r.channel = e, r.sourceKey = cf(t), r.scaleChannel = ((wf(t) && t.resolutionChannel) ?? (Uf(e) && e)) || void 0, r.scaleChannel !== void 0 && (r.domainKeyBase = lf({
			scaleChannel: r.scaleChannel,
			source: sf(t)
		}).domainKeyBase), r.equals = (e) => e ? r === e || r.sourceKey !== void 0 && r.sourceKey === e.sourceKey : !1, r.asNumberAccessor = () => r, r;
	}
	function i(e) {
		if (V(e)) {
			let t = r(n.createExpression(e.expr));
			if (t.fields.length > 0) throw Error("Expression in DatumDef/ValueDef cannot access data fields: " + e.expr);
			return t;
		} else {
			let t = e;
			return r(() => t);
		}
	}
	if (Sf(t)) try {
		return r(B(t.field));
	} catch (e) {
		throw Error(`Invalid field definition: ${e.message}`, { cause: e });
	}
	else if (Of(t)) return r(n.createExpression(t.expr));
	else if (Cf(t)) return i(t.datum);
	else if (xf(t)) return i(t.value);
	else throw Error(`Invalid channel definition: "${e}": ${JSON.stringify(t)}! The channel definition must contain one of the following properties: "field", "datum", "value" or "expr".`);
}
function of(e) {
	return e.scaleChannel !== void 0;
}
function sf(e) {
	if (Sf(e)) return {
		kind: "field",
		value: e.field
	};
	if (Of(e)) return {
		kind: "expr",
		value: e.expr
	};
	if (Cf(e)) return {
		kind: "datum",
		value: e.datum
	};
	if (xf(e)) return {
		kind: "value",
		value: e.value
	};
	throw Error("Cannot derive a domain key from channel definition: " + JSON.stringify(e));
}
function cf(e) {
	let t = sf(e);
	return t.kind === "datum" || t.kind === "value" ? "constant|" + ff(t.value) : t.kind + "|" + df(t);
}
function lf({ scaleChannel: e, source: t, type: n }) {
	if (!e) throw Error("Cannot build a domain key without a scale channel.");
	let r = e + "|" + t.kind + "|" + df(t);
	return {
		domainKeyBase: r,
		domainKey: n ? n + "|" + r : void 0
	};
}
function uf(e, t) {
	let { domainKey: n, domainKeyBase: r } = lf({
		scaleChannel: e.scaleChannel,
		source: sf(e.channelDef),
		type: t
	});
	if (!n) throw Error("Cannot finalize a domain key without a resolved type.");
	return e.domainKeyBase = r, e.domainKey = n, n;
}
function df(e) {
	switch (e.kind) {
		case "field":
		case "expr": return e.value;
		case "datum":
		case "value": return ff(e.value);
		default: throw Error("Unknown domain key source.");
	}
}
function ff(e) {
	return V(e) ? "expr:" + e.expr : e === void 0 ? "undefined" : JSON.stringify(e);
}
//#endregion
//#region src/encoder/encoder.js
function pf(e, t, n, r) {
	let i, a = dp(!1), o = () => {
		if (i) return i;
		let o = n.findValue(e);
		if (!o) return a;
		let s = {};
		if (Zf(o)) {
			let n = Object.keys(o.intervals);
			for (let r of n) {
				let n = t[r];
				if (Sf(n)) {
					s[r] = n.field;
					continue;
				} else if (n && "condition" in n) {
					let e = n.condition;
					if (Sf(e)) {
						s[r] = e.field;
						continue;
					}
				}
				throw Error(`Selection "${e}" has an interval for "${r}" channel, but could not find a fieldDef: ${JSON.stringify(t[r])}`);
			}
		}
		let c = Xf({
			type: "filter",
			param: e,
			fields: s,
			empty: r
		}, o);
		return i = n.createExpression(c), i;
	};
	return Object.assign((e) => o()(e), {
		param: e,
		empty: r ?? !0
	});
}
function mf(e, t, n, r) {
	let i = kf(t) || Af(t) ? Array.isArray(t.condition) ? t.condition : [t.condition] : [], a = [...i, t], o = a.map((t, o) => {
		let s = i[o];
		return {
			accessor: af(e, t, r),
			predicate: s?.param ? pf(s.param, n, r, s.empty) : Object.assign(dp(o === a.length - 1), { empty: !1 })
		};
	});
	if (o.filter((e) => !e.accessor.constant).length > 1) throw Error("Only one accessor can be non-constant. Channel: " + e);
	return o;
}
function hf(e, t) {
	let n = {}, r = (t) => e.getScaleResolution(t)?.getScale();
	for (let [i, a] of Object.entries(t)) {
		if (!a) continue;
		let o = i;
		gf(o) || (n[o] = yf(mf(o, a, t, e.paramRuntime), r));
	}
	return n;
}
function gf(e) {
	return e === "key" || e === "search";
}
function _f(e) {
	return e.branches.map((e) => e.accessor);
}
function vf(e) {
	return e.branches.find((e) => !e.accessor.constant)?.accessor;
}
function yf(e, t) {
	if (e.length === 1) {
		let n = bf(e[0].accessor, t);
		return Object.assign(n, { branches: e });
	}
	let n = e.map((e) => e.predicate), r = e.map((e) => bf(e.accessor, t));
	return Object.assign((e) => {
		for (let t = 0; t < r.length; t++) if (n[t](e)) return r[t](e);
	}, {
		constant: !1,
		branches: e,
		scale: r.map((e) => e.scale).find((e) => e),
		channelDef: e.at(-1).accessor.channelDef
	});
}
function bf(e, t) {
	let { channel: n, scaleChannel: r, channelDef: i } = e, a = e.scaleChannel ? t(r) : void 0;
	if (r && !a) throw Error(`Missing scale! "${n}": ${JSON.stringify(i)}`);
	return Object.assign(a ? (t) => a(e(t)) : (t) => e(t), {
		scale: a,
		constant: e.constant,
		branches: [{
			accessor: e,
			predicate: dp(!0)
		}],
		channelDef: i
	});
}
function xf(e) {
	return e && "value" in e;
}
function Sf(e) {
	return e && "field" in e;
}
function Cf(e) {
	return e && "datum" in e;
}
function wf(e) {
	return Sf(e) || Cf(e) || Of(e) || Df(e);
}
function Tf(e) {
	if (Af(e)) {
		let t = e.condition;
		if (!Array.isArray(t) && wf(t)) return t;
	} else if (wf(e)) return e;
}
function Ef(e, t) {
	let n = e.mark.encoding[t];
	if (Array.isArray(n)) throw Error("Not a channel def with scale!");
	{
		let e = Tf(n);
		if (e) return e;
	}
	throw Error("Not a channel def with scale!");
}
function Df(e) {
	return e && "chrom" in e;
}
function Of(e) {
	return e && "expr" in e;
}
function kf(e) {
	return (Sf(e) || Cf(e)) && "condition" in e;
}
function Af(e) {
	return xf(e) && "condition" in e;
}
var jf = ["x", "y"], Mf = ["x2", "y2"], Nf = [...jf, ...Mf];
function Pf(e) {
	return jf.includes(e);
}
function Ff(e) {
	return Nf.includes(e);
}
var If = {
	x: "x2",
	y: "y2"
}, Lf = Object.fromEntries(Object.entries(If).map((e) => [e[1], e[0]]));
function Rf(e) {
	return e in Lf;
}
function zf(e) {
	let t = If[e];
	if (t) return t;
	throw Error(`${e} has no secondary channel!`);
}
function Bf(e) {
	return Lf[e] ?? e;
}
function Vf(e) {
	return [
		"color",
		"fill",
		"stroke"
	].includes(Bf(e));
}
function Hf(e) {
	return ["shape"].includes(e);
}
function Uf(e) {
	return [
		"x",
		"y",
		"x2",
		"y2",
		"color",
		"fill",
		"stroke",
		"opacity",
		"fillOpacity",
		"strokeOpacity",
		"strokeWidth",
		"size",
		"shape",
		"angle",
		"dx",
		"dy",
		"sample"
	].includes(e);
}
function Wf(e) {
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
			"tick-left"
		];
		default:
	}
}
function Gf(e) {
	if (!Hf(e)) throw Error("Not a discrete channel: " + e);
	let t = new Map(Wf(e).map((e, t) => [e, t]));
	return (n) => {
		let r = t.get(n);
		if (r !== void 0) return r;
		throw Error(`Invalid value for "${e}" channel: ${n}`);
	};
}
//#endregion
//#region src/selection/selection.js
function Kf(e) {
	return {
		type: "single",
		datum: e,
		uniqueId: e?.[$d]
	};
}
function qf(e) {
	return e ??= [], {
		type: "multi",
		data: new Map(e.map((e) => [e[$d], e]))
	};
}
function Jf(e) {
	return {
		type: "interval",
		intervals: Object.fromEntries(e.map((e) => [e, null]))
	};
}
function Yf(e, { add: t, remove: n, toggle: r }) {
	let i = e.data;
	for (let e of t ?? []) i.set(e[$d], e);
	for (let e of n ?? []) i.delete(e[$d]);
	for (let e of r ?? []) {
		let t = e[$d];
		i.has(t) ? i.delete(t) : i.set(t, e);
	}
	return {
		type: "multi",
		data: i
	};
}
function Xf(e, t) {
	let n = !!(e.empty ?? !0), r = cp(e.param), i = e.fields ?? {};
	if (Qf(t)) return `${r}.uniqueId == null ? ${n} : ${r}.uniqueId === datum[${JSON.stringify($d)}]`;
	if ($f(t)) return `${r}.data.size == 0 ? ${n} : mapHasKey(${r}.data, datum[${JSON.stringify($d)}])`;
	if (Zf(t)) {
		let a = Object.keys(t.intervals), o = Object.keys(i).filter(Pf);
		if (o.length === 0) throw Error("Filtering using interval selections requires at least one primary positional channel in the config! " + JSON.stringify(e));
		if (o.some((e) => !a.includes(e))) throw Error(`Selection channels (${a.join(", ")}) do not match the fields: ${JSON.stringify(e)}!`);
		let s = (e) => `datum[${JSON.stringify(e)}]`;
		return a.map((e) => {
			let t = zf(e), a = i[e];
			return `(${r}.intervals.${e} ? (${`${r}.intervals.${e}[0] <= ${s(i[t] ?? i[e])}`} && ${`${s(a)} <= ${r}.intervals.${e}[1]`}) : ${n})`;
		}).join(" && ");
	} else throw Error(`Unrecognized selection type : ${JSON.stringify(t)}`);
}
function Zf(e) {
	return e.type === "interval";
}
function Qf(e) {
	return e.type === "single";
}
function $f(e) {
	return e.type === "multi";
}
function ep(e) {
	let t = typeof e == "string" ? { type: e } : { ...e };
	return t.on = t.on ? ap(t.on) : tp(t) ? { type: "click" } : void 0, t.clear = t.clear === !1 ? void 0 : t.clear === !0 || t.clear == null ? { type: "dblclick" } : ap(t.clear), tp(t) && t.on.type === "click" && (t.toggle = !0), t;
}
function tp(e) {
	return e && e.type == "point";
}
function np(e) {
	return e && e.type == "interval";
}
function rp(e) {
	return Object.values(e.intervals).some((e) => e && e.length === 2);
}
function ip(e, t) {
	return Object.entries(e.intervals).every(([e, n]) => (e == "x" || e == "y") && n && n[0] <= t[e] && n[1] >= t[e]);
}
function ap(e) {
	if (typeof e == "string") {
		let t = e.match(/^([a-zA-Z]+)(?:\[(.+)\])?$/);
		if (!t) throw Error(`Invalid event type string: ${e}`);
		let [, n, r] = t, i = { type: n };
		return r && (i.filter = r), i;
	} else return e;
}
//#endregion
//#region src/paramRuntime/paramUtils.js
function V(e) {
	return typeof e == "object" && !!e && "expr" in e && O(e.expr);
}
function H(e) {
	if (V(e)) throw Error("ExprRef " + JSON.stringify(e) + " not allowed here. Expected a scalar value.");
	return e;
}
function op(e) {
	return ("expr" in e || "bind" in e) && !("select" in e);
}
function sp(e) {
	return !("expr" in e || "bind" in e) && "select" in e;
}
function cp(e) {
	if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)) throw Error("Invalid parameter name: " + e + ". Must be a valid JavaScript identifier.");
	return e;
}
function lp(e, t, n) {
	if ("select" in e) {
		let t = ep(e.select);
		if (tp(t)) return t.toggle ? qf() : Kf(null);
		if (np(t)) {
			if (!t.encodings) throw Error("Interval selection \"" + e.name + "\" must have encodings defined!");
			return Jf(t.encodings);
		}
		throw Error("Unknown selection config for parameter \"" + e.name + "\".");
	}
	if ("expr" in e) {
		let r = n ?? t?.createExpression(e.expr);
		if (!r) throw Error("Cannot evaluate expression for parameter \"" + e.name + "\".");
		return r(null);
	}
	return "value" in e ? e.value : null;
}
function up(e, t, n, r, i = {}) {
	let a = { ...t }, o = /* @__PURE__ */ new Set(), s = !1, c = !1, l = i.batchMode ?? "microtask";
	r?.(() => {
		c = !0, o.clear(), s = !1;
	});
	let u = () => {
		if (c) return;
		if (!n || o.size === 0) {
			s = !1;
			return;
		}
		let e = new Set(o);
		o.clear(), s = !1, n(e);
	}, d = (t) => {
		c || (o.add(t), s || (s = !0, queueMicrotask(() => {
			c || (l == "whenPropagated" && e.whenPropagated ? e.whenPropagated().then(u).catch(() => {
				u();
			}) : u());
		})));
	};
	for (let [i, o] of Object.entries(t)) if (V(o)) if (n) {
		let t = () => d(i), n = e.watchExpression ? e.watchExpression(o.expr, t, {
			scopeOwned: !r,
			registerDisposer: r
		}) : e.createExpression(o.expr);
		if (!e.watchExpression) {
			let e = n.subscribe(t);
			r?.(e);
		}
		Object.defineProperty(a, i, {
			enumerable: !0,
			get() {
				return n();
			}
		});
	} else {
		let t = e.createExpression(o.expr);
		Object.defineProperty(a, i, {
			enumerable: !0,
			get() {
				return t();
			}
		});
	}
	else a[i] = o;
	return a;
}
function dp(e) {
	return Object.assign(() => e, {
		subscribe: () => () => void 0,
		invalidate: () => void 0,
		identifier: () => "constant",
		fields: [],
		globals: [],
		code: JSON.stringify(e)
	});
}
//#endregion
//#region src/utils/debounce.js
function fp(e, t, n = !0) {
	let r, i = (e) => void 0;
	return function(...a) {
		return new Promise((o, s) => {
			n && i("debounced"), clearTimeout(r), i = s, r = window.setTimeout(() => {
				clearTimeout(r), i = (e) => void 0, o(e(...a));
			}, typeof t == "function" ? t() : t);
		});
	};
}
//#endregion
//#region src/data/sources/lazy/singleAxisWindowedSource.js
var pp = class extends Gd {
	#e = new AbortController();
	#t = [0, 0];
	#n = [0, 0];
	#r = 0;
	params;
	setupDebouncing(e) {
		let t = () => H(e.debounce), n = e.debounceMode;
		if (n == "domain") this.onDomainChanged = fp(this.onDomainChanged.bind(this), t, !1);
		else if (n == "window") this.loadInterval = fp(this.loadInterval.bind(this), t, !1);
		else throw Error("Invalid debounceMode: " + n);
	}
	onDomainChanged(e) {
		this.#n = e;
		let t = H(this.params?.windowSize) ?? -1;
		e[1] - e[0] > t || this.callIfWindowsChanged(e, t, async (e) => {
			await this.initializedPromise, this.loadInterval(e);
		});
	}
	reloadLastDomain() {
		let e = this.#n;
		this.#n = [0, 0], this.#t = [0, 0], this._lastLoadedDomain = void 0, this.onDomainChanged(e);
	}
	async loadInterval(e) {}
	publishData(e) {
		let t = this._lastLoadedDomain;
		super.publishData(e), t && (this._lastLoadedDomain = t);
	}
	async discretizeAndLoad(e, t) {
		this.#e.abort(), this.setLoadingStatus("loading"), this.#e = new AbortController();
		let n = this.#e.signal, r = this.genome.continuousToDiscreteChromosomeIntervals(e);
		try {
			let i = await Promise.all(r.map(async (e) => t(e, n)));
			if (!n.aborted) return this.setLoadingStatus("complete"), this._lastLoadedDomain = Array.from(e), i;
		} catch (e) {
			if (!n.aborted) throw this.setLoadingStatus("error", e.message), e;
		}
	}
	callIfWindowsChanged(e, t, n) {
		let r = [Math.max(Math.floor(e[0] / t) * t, 0), Math.min(Math.ceil(e[1] / t) * t, this.genome.totalSize)], i = this.#t;
		(t !== this.#r || r[0] < i[0] || r[1] > i[1]) && (this.#t = r, this.#r = t, n(r));
	}
}, mp = class extends pp {
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 7e3,
			debounce: 200,
			debounceMode: "window",
			...e
		};
		if (super(t, n.channel), this.params = n, !this.params.url) throw Error("No URL provided for IndexedFastaSource");
		this.setupDebouncing(this.params), this.initializedPromise = new Promise((e) => {
			Promise.all([import("./esm-BimDEpBb.js"), import("./browser-BTgw5ieH.js").then((e) => e.n)]).then(([{ IndexedFasta: t }, { RemoteFile: n }]) => {
				let r = (e) => new n(Zd(e, this.view.getBaseUrl()));
				this.fasta = new t({
					fasta: r(this.params.url),
					fai: r(this.params.indexUrl ?? this.params.url + ".fai")
				}), e();
			});
		});
	}
	get label() {
		return "bigWigSource";
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
function hp(e) {
	return e?.type == "indexedFasta";
}
Rd(hp, mp);
//#endregion
//#region src/data/sources/lazy/bigWigSource.js
var gp = class extends pp {
	#e = [];
	#t;
	constructor(e, t) {
		let n = {
			pixelsPerBin: 2,
			channel: "x",
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = H(n.channel);
		if (super(t, r), this.params = up(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#n().then(() => this.reloadLastDomain()) : e.has("pixelsPerBin") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !this.params.url) throw Error("No URL provided for BigWigSource");
		this.setupDebouncing(this.params), this.#n();
	}
	get label() {
		return "bigWigSource";
	}
	#n() {
		return this.initializedPromise = new Promise((e, t) => {
			Promise.all([import("./esm-Bvlm1uVk.js"), import("./browser-BTgw5ieH.js").then((e) => e.n)]).then(([{ BigWig: n }, { RemoteFile: r }]) => {
				this.#t = new n({ filehandle: new r(Zd(H(this.params.url), this.view.getBaseUrl())) }), this.setLoadingStatus("loading"), this.#t.getHeader().then((t) => {
					this.#e = t.zoomLevels.map((e) => e.reductionLevel).reverse(), this.#e.push(1), this.setLoadingStatus("complete"), e();
				}).catch((e) => {
					this.load(), this.setLoadingStatus("error", `${H(this.params.url)}: ${e.message}`), t(e);
				});
			});
		}), this.initializedPromise;
	}
	async onDomainChanged(e) {
		await this.initializedPromise;
		let t = this.scaleResolution.getAxisLength() || 700, n = vp(e, t, this.#e), r = Math.max(n * t, 5e3);
		this.callIfWindowsChanged(e, r, (e) => this.loadInterval(e, n));
	}
	async loadInterval(e, t) {
		let n = 1 / 2 / t / H(this.params.pixelsPerBin), r = await this.discretizeAndLoad(e, (e, t) => this.#t.getFeatures(e.chrom, e.startPos, e.endPos, {
			scale: n,
			signal: t
		}).then((t) => t.map((t) => ({
			chrom: e.chrom,
			start: t.start,
			end: t.end,
			score: t.score
		}))));
		r && this.publishData(r);
	}
};
function _p(e) {
	return e?.type == "bigwig";
}
Rd(_p, gp);
function vp(e, t, n) {
	let r = (e[1] - e[0]) / t;
	return n.find((e) => e < r) ?? n.at(-1);
}
//#endregion
//#region src/data/sources/lazy/bigBedSource.js
var yp = class extends pp {
	parser;
	bbi;
	parseLine;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 1e6,
			debounce: 200,
			debounceMode: "window",
			...e
		}, r = H(n.channel);
		if (super(t, r), this.params = up(t.paramRuntime, n, (e) => {
			e.has("url") ? this.#e().then(() => this.reloadLastDomain()) : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !this.params.url) throw Error("No URL provided for BigBedSource");
		this.setupDebouncing(this.params), this.#e();
	}
	get label() {
		return "bigBedSource";
	}
	#e() {
		return this.initializedPromise = new Promise((e, t) => {
			Promise.all([
				import("./esm-DMXpJXM4.js"),
				import("./esm-Bvlm1uVk.js"),
				import("./browser-BTgw5ieH.js").then((e) => e.n)
			]).then(([n, { BigBed: r }, { RemoteFile: i }]) => {
				let a = n.default;
				this.bbi = new r({ filehandle: new i(Zd(H(this.params.url), this.view.getBaseUrl())) }), this.setLoadingStatus("loading"), this.bbi.getHeader().then(async (t) => {
					this.parser = new a({ autoSql: t.autoSql });
					try {
						let e = bp(this.parser);
						this.parseLine = (t, n) => e(t, n.start, n.end, n.rest);
					} catch {
						this.parseLine = (e, t) => this.parser.parseLine(`${e}\t${t.start}\t${t.end}\t${t.rest}`);
					}
					this.setLoadingStatus("complete"), e();
				}).catch((e) => {
					this.load(), this.setLoadingStatus("error", `${H(this.params.url)}: ${e.message}`), t(e);
				});
			});
		}), this.initializedPromise;
	}
	async loadInterval(e) {
		let t = await this.discretizeAndLoad(e, async (e, t) => this.bbi.getFeatures(e.chrom, e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => this.parseLine(e.chrom, t))));
		t && this.publishData(t);
	}
};
function bp(e) {
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
        };`)(), u = Sp(t.map((e) => {
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
function xp(e) {
	return e?.type == "bigbed";
}
Rd(xp, yp);
function Sp(e, t) {
	return Array.from({ length: Math.ceil(e.length / t) }, (n, r) => e.slice(r * t, r * t + t));
}
//#endregion
//#region src/data/sources/lazy/bamSource.js
var Cp = class extends pp {
	#e;
	chrPrefixFixer = (e) => e;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 2e4,
			debounce: 200,
			debounceMode: "domain",
			...e
		};
		if (super(t, n.channel), this.params = n, !this.params.url) throw Error("No URL provided for BamSource");
		this.setupDebouncing(this.params), this.initializedPromise = new Promise((e) => {
			Promise.all([import("./esm-D_euN86T.js"), import("./browser-BTgw5ieH.js").then((e) => e.n)]).then(([{ BamFile: t }, { RemoteFile: n }]) => {
				let r = (e) => new n(Zd(e, this.view.getBaseUrl()));
				this.#e = new t({
					bamFilehandle: r(this.params.url),
					baiFilehandle: r(this.params.indexUrl ?? this.params.url + ".bai")
				}), this.#e.getHeader().then((t) => {
					let n = this.genome.hasChrPrefix(), r = this.#e.indexToChr?.[0]?.refName.startsWith("chr");
					n && !r ? this.chrPrefixFixer = (e) => e.replace("chr", "") : !n && r && (this.chrPrefixFixer = (e) => "chr" + e), e();
				});
			});
		});
	}
	get label() {
		return "bamSource";
	}
	async loadInterval(e) {
		let t = await this.discretizeAndLoad(e, async (e, t) => this.#e.getRecordsForRange(this.chrPrefixFixer(e.chrom), e.startPos, e.endPos, { signal: t }).then((t) => t.map((t) => ({
			chrom: e.chrom,
			start: t.start,
			end: t.end,
			name: t.name,
			cigar: t.CIGAR,
			mapq: t.mq,
			strand: t.strand === 1 ? "+" : "-"
		}))));
		t && this.publishData(t);
	}
};
function wp(e) {
	return e?.type == "bam";
}
Rd(wp, Cp);
//#endregion
//#region src/data/sources/inlineSource.js
function Tp(e) {
	return "values" in e;
}
var Ep = class extends Wd {
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
		if (Array.isArray(e)) e.length > 0 && (t = e, n = Fp(e[0]));
		else if (typeof e == "object") t = [e];
		else if (typeof e == "string") t = Do(e, Ap(kp(this.params)));
		else throw Error("\"values\" in data configuration is not an array, object, or a string!");
		this.reset(), this.beginBatch({ type: "file" });
		for (let e of t) this._propagate(n(e));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, Dp = new Set([
	"csv",
	"tsv",
	"dsv"
]), Op = new Set([
	"gz",
	"bgz",
	"bgzf"
]);
function kp(e, t = []) {
	if (!Tp(e) && !Bp(e)) return;
	let n = { ...e.format };
	if (n.type ??= Bp(e) && Mp(t), n.parse === void 0 && Vp(n.type) && (n.parse = "auto"), !n.type) throw Error("Format for the data source was not defined and it could not be inferred: " + JSON.stringify(e));
	return n;
}
function Ap(e) {
	let t = { ...e };
	return (Rp(t) || zp(t)) && t.columns && !("header" in t) && (t.header = t.columns), t;
}
function jp(e) {
	return Eo(e)?.responseType ?? "text";
}
function Mp(e) {
	if (Array.isArray(e) && (e = e[0]), e) {
		let t = Pp(e).split("/").pop()?.toLowerCase();
		if (!t) return;
		let n = t.split(".");
		for (; n.length > 1 && Op.has(n.at(-1));) n.pop();
		let r = n.at(-1);
		if (r && Eo(r)) return r;
	}
}
function Np(e) {
	let t = Pp(e).split("/").pop()?.toLowerCase();
	if (!t) return !1;
	let n = t.split(".").at(-1);
	return !!n && Op.has(n);
}
function Pp(e) {
	return e.replace(/[?#].*$/, "");
}
var Fp = (e) => typeof e == "object" ? Lp : Ip, Ip = (e) => ({ data: e }), Lp = (e) => e;
function Rp(e) {
	return e.type == "csv" || e.type == "tsv";
}
function zp(e) {
	return e.type == "dsv";
}
function Bp(e) {
	return "url" in e;
}
function Vp(e) {
	return Dp.has(e);
}
//#endregion
//#region src/data/sources/lazy/tabixSource.js
var Hp = class extends pp {
	#e;
	constructor(e, t) {
		let n = {
			channel: "x",
			windowSize: 3e6,
			debounce: 200,
			debounceMode: "domain",
			addChrPrefix: !1,
			...e
		}, r = H(n.channel);
		if (super(t, r), this.params = up(t.paramRuntime, n, (e) => {
			e.has("url") || e.has("indexUrl") || e.has("addChrPrefix") ? this.#t().then(() => this.reloadLastDomain()) : e.has("windowSize") && this.reloadLastDomain();
		}, (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !H(this.params.url)) throw Error("No URL provided for TabixSource");
		this.setupDebouncing(this.params), this.#t();
	}
	#t() {
		return this.initializedPromise = new Promise((e, t) => {
			Promise.all([import("./esm-CngqBe45.js"), import("./browser-BTgw5ieH.js").then((e) => e.n)]).then(async ([{ TabixIndexedFile: n }, { RemoteFile: r }]) => {
				let i = (e) => new r(Zd(e, this.view.getBaseUrl())), a = H(this.params.url), o = H(this.params.indexUrl) ?? a + ".tbi", s = H(this.params.addChrPrefix);
				this.#e = new n({
					filehandle: i(a),
					tbiFilehandle: i(o),
					renameRefSeqs: s === !0 ? (e) => "chr" + e : s ? (e) => s + e : void 0
				});
				try {
					this.setLoadingStatus("loading");
					let t = await this.#e.getHeader();
					await this._handleHeader(t), this.setLoadingStatus("complete"), e();
				} catch (e) {
					this.load(), this.setLoadingStatus("error", `${H(this.params.url)}: ${e.message}`), t(e);
				}
			});
		}), this.initializedPromise;
	}
	async loadInterval(e) {
		await this.initializedPromise;
		let t = await this.discretizeAndLoad(e, async (e, t) => {
			let n = [];
			return await this.#e.getLines(e.chrom, e.startPos, e.endPos, {
				lineCallback: (e) => {
					n.push(e);
				},
				signal: t
			}), this._parseFeatures(n);
		});
		t && this.publishData(t);
	}
	async _handleHeader(e) {}
	async _readFilePrefix() {
		let { maxBlockSize: e } = await this.#e.getMetadata(), n = await t(await this.#e.filehandle.read(e, 0));
		return new TextDecoder("utf-8").decode(n);
	}
	_parseFeatures(e) {
		return [];
	}
};
//#endregion
//#region src/data/sources/lazy/tabixTsvSource.js
function Up(e) {
	let t = e.split(/\r?\n/);
	for (let e = t.length - 1; e >= 0; e--) {
		let n = t[e].trimEnd().replace(/\r$/, "");
		if (!n || n.startsWith("##") || !n.startsWith("#")) continue;
		let r = n.slice(1).split("	");
		if (r.length > 1) return r;
	}
}
function Wp(e) {
	let t = e.split(/\r?\n/).find((e) => {
		let t = e.trimStart();
		return t !== "" && !t.startsWith("#");
	});
	if (!t) return;
	let n = t.trimEnd().replace(/\r$/, "").split("	");
	if (n.length > 1) return n;
}
function Gp(e, t, n) {
	if (e.length == 0) return [];
	let r = {
		type: "tsv",
		columns: t,
		parse: n ?? "auto"
	}, i = Do(e.join("\n"), Ap(r)), a = t[0], o = null, s = "";
	for (let e of i) {
		let t = e[a];
		t != o && (o = t, s = String(t)), e[a] = s;
	}
	return i;
}
var Kp = class extends Hp {
	#e;
	get label() {
		return "tabixSource";
	}
	async _handleHeader(e) {
		let t = this.params;
		if (this.#e = H(t.columns) ?? Up(e), this.#e?.length || (this.#e = Wp(await this._readFilePrefix())), !this.#e?.length) throw Error("No columns available for Tabix TSV source. Provide data.lazy.columns or a tabix header line such as #chrom\\tstart\\tend, or a plain first row such as chrom\\tstart\\tend.");
	}
	_parseFeatures(e) {
		let t = this.params;
		return Gp(e, this.#e ?? [], H(t.parse));
	}
};
function qp(e) {
	return e?.type == "tabix";
}
Rd(qp, Kp);
//#endregion
//#region src/data/sources/lazy/gff3Source.js
var Jp = class extends Hp {
	#e;
	get label() {
		return "gff3Source";
	}
	async _handleHeader(e) {
		this.#e = await import("./esm-CuMSzCHy.js");
	}
	_parseFeatures(e) {
		return this.#e?.parseStringSync(e.join("\n"));
	}
};
function Yp(e) {
	return e?.type == "gff3";
}
Rd(Yp, Jp);
//#endregion
//#region src/data/sources/lazy/vcfSource.js
var Xp = class extends Hp {
	#e;
	get label() {
		return "vcfSource";
	}
	async _handleHeader(e) {
		let t = (await import("./esm-BygJiwh0.js")).default;
		this.#e = new t({ header: e });
	}
	_parseFeatures(e) {
		return e.map((e) => {
			let t = this.#e.parseLine(e);
			return delete t.GENOTYPES, t.SAMPLES = t.SAMPLES(), t;
		});
	}
};
function Zp(e) {
	return e?.type == "vcf";
}
Rd(Zp, Xp);
//#endregion
//#region src/styles/genome-spy.css.js
var Qp = "\n@scope {\n:scope {\n--genome-spy-basic-spacing: 10px;\n--genome-spy-font-family:\nsystem-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\n\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\nfont-family: var(--genome-spy-font-family);\n\nposition: relative;\n\ndisplay: flex;\nflex-direction: column;\n}\n\n.canvas-wrapper {\nposition: relative;\nflex-grow: 1;\noverflow: hidden;\n}\n\ncanvas {\ndisplay: block;\ntouch-action: none;\ntransform: scale(1, 1);\nopacity: 1;\ntransition:\ntransform 0.6s,\nopacity 0.6s;\n\n&:focus,\n&:focus-visible {\noutline: none;\n}\n}\n\n.loading {\n> canvas {\ntransform: scale(0.95, 0.95);\nopacity: 0;\n}\n}\n\n.loading-indicators {\nposition: absolute;\ninset: 0;\n\nuser-select: none;\npointer-events: none;\n\ndiv {\nposition: absolute;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n> div {\nfont-size: 11px;\ntransition: opacity 0.2s;\nbackground: white;\npadding: 2px 5px;\ndisplay: flex;\nborder-radius: 3px;\ngap: 0.5em;\nopacity: 0;\n\n&.loading {\nopacity: 0.5;\n}\n\n&.error {\nopacity: 0.8;\ncolor: firebrick;\n}\n\n> * {\ndisplay: block;\n}\n\nimg {\nwidth: 1.5em;\nheight: 1.5em;\n}\n}\n}\n}\n\n.tooltip {\nposition: absolute;\n\nmax-width: 450px;\noverflow: hidden;\n\n--background-color: #f6f6f6;\nbackground: var(--background-color);\npadding: var(--genome-spy-basic-spacing);\n\n--font-size: 12px;\nfont-size: var(--font-size);\n\nbox-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);\n\n&:not(.sticky) {\npointer-events: none;\n}\n\ntransition:\noutline-color 0.3s ease-in-out,\nbox-shadow 0.3s ease-in-out;\n\noutline: 0px solid transparent;\n&.sticky {\noutline: 2px solid black;\nbox-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.3);\n}\n\nz-index: 100;\n\n> :last-child {\nmargin-bottom: 0;\n}\n\n> .title {\npadding-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nmargin-bottom: calc(var(--genome-spy-basic-spacing) / 2);\nborder-bottom: 1px dashed var(--background-color);\nborder-bottom: 1px dashed\ncolor-mix(in srgb, black 25%, var(--background-color));\n}\n\n.summary {\nfont-size: 12px;\n}\n\ntable {\n&:first-child {\nmargin-top: 0;\n}\n\nborder-collapse: collapse;\n\nth,\ntd {\npadding: 2px 0.4em;\nvertical-align: top;\nfont-size: var(--font-size);\n\n&:first-child {\npadding-left: 0;\n}\n}\n\nth {\ntext-align: left;\nfont-weight: bold;\n}\n}\n\n.color-legend {\ndisplay: inline-block;\nwidth: 0.8em;\nheight: 0.8em;\nmargin-left: 0.4em;\nbox-shadow: 0px 0px 3px 1px white;\n}\n\n.color-legend-unmapped {\nbackground-color: transparent;\nborder: 1px solid black;\nbox-sizing: border-box;\nbox-shadow: none;\n}\n\n.attributes {\n.hovered {\nbackground-color: #e0e0e0;\n}\n}\n\n.na {\ncolor: #aaa;\nfont-style: italic;\nfont-size: 80%;\n}\n}\n\n.gene-track-tooltip {\n.summary {\nfont-size: 90%;\n}\n}\n\n.gs-input-binding {\ndisplay: grid;\ngrid-template-columns: max-content max-content;\ncolumn-gap: 1em;\nrow-gap: 0.3em;\njustify-items: start;\n\n> select,\n> input:not([type=\"checkbox\"]) {\nwidth: 100%;\n}\n\ninput[type=\"range\"] + span {\ndisplay: inline-block;\nmargin-left: 0.3em;\nmin-width: 2.2em;\nfont-variant-numeric: tabular-nums;\n}\n\ninput[type=\"range\"],\ninput[type=\"radio\"] {\nvertical-align: text-bottom;\n}\n\n.radio-group {\ndisplay: flex;\nalign-items: center;\n}\n\n.description {\nmax-width: 26em;\ngrid-column: 1 / -1;\ncolor: #777;\nfont-size: 90%;\nmargin-top: -0.5em;\n}\n}\n\n.gs-input-bindings {\nflex-basis: content;\nfont-size: 14px;\npadding: var(--genome-spy-basic-spacing);\n}\n\n.message-box {\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nposition: absolute;\ntop: 0;\nheight: 100%;\nwidth: 100%;\n\n> div {\nborder: 1px solid red;\npadding: 10px;\nbackground: #fff0f0;\n}\n}\n}\n";
//#endregion
//#region src/utils/point.js
function $p(e, t) {
	var n = e.getBoundingClientRect();
	return [t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop];
}
var em = class {
	#e = !1;
	#t = !0;
	#n = void 0;
	#r = 0;
	#i = void 0;
	#a = 0;
	#o;
	#s;
	#c = [!0];
	constructor(e) {
		this.#s = e, this.#o = document.createElement("div"), this.#o.className = "tooltip", this.#s.appendChild(this.#o), this.clear();
	}
	set sticky(e) {
		!e && this.#e && this.clear(), this.#e = e, this.#o.classList.toggle("sticky", this.#e);
	}
	get sticky() {
		return this.#e;
	}
	set visible(e) {
		e != this.#t && (this.#o.style.display = e ? null : "none", this.#t = e);
	}
	get visible() {
		return this.#t;
	}
	get enabled() {
		return Yo(this.#c) ?? !0;
	}
	pushEnabledState(e) {
		this.#c.push(e), e || (this.visible = !1);
	}
	popEnabledState() {
		this.#c.pop();
	}
	handleMouseMove(e) {
		if (this.#e) return;
		this.mouseCoords = $p(this.#s, e);
		let t = performance.now();
		!this.visible && !this._isPenalty() && t - this.#a > 500 && (this.#r = t + 70), this.#i && tm(this.mouseCoords, this.#i) > 20 && (this.#r = t + 400), this.#i = this.mouseCoords, this.visible && this.updatePlacement(), this.#a = t;
	}
	updatePlacement() {
		let [e, t] = this.mouseCoords, n = e + 20;
		n > this.#s.clientWidth - this.#o.offsetWidth && (n = e - 20 - this.#o.offsetWidth), this.#o.style.left = n + "px", this.#o.style.top = Math.min(t + 20, this.#s.clientHeight - this.#o.offsetHeight) + "px";
	}
	setContent(e) {
		if (!this.#e) {
			if (!e || !this.enabled || this._isPenalty()) {
				this.visible &&= (Re("", this.#o), !1), this.#n = void 0;
				return;
			}
			Re(e, this.#o), this.visible = !0, this.updatePlacement();
		}
	}
	clear() {
		this.#n = void 0, this.setContent(void 0);
	}
	updateWithDatum(e, t) {
		if (e !== this.#n) {
			this.#n = e, t ||= (e) => Promise.resolve(C` ${JSON.stringify(e)} `);
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
};
function tm(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) n += (e[r] - t[r]) ** 2;
	return Math.sqrt(n);
}
//#endregion
//#region src/genomeSpy/containerUi.js
function nm(e) {
	e.classList.add("genome-spy");
	let t = document.createElement("style");
	t.innerHTML = Qp, e.appendChild(t);
	let n = im("div", { class: "canvas-wrapper" });
	return e.appendChild(n), n.classList.add("loading"), {
		canvasWrapper: n,
		loadingIndicatorsElement: im("div", { class: "loading-indicators" }),
		tooltip: new em(e),
		styleElement: t
	};
}
function rm(e, t) {
	let n = document.createElement("div");
	n.className = "message-box";
	let r = document.createElement("div");
	r.textContent = t, n.appendChild(r), e.appendChild(n);
}
function im(e, t) {
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
var am = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, om = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), sm = class {
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
}, cm = "important", lm = " !" + cm, um = om(class extends sm {
	constructor(e) {
		if (super(e), e.type !== am.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
				let t = typeof r == "string" && r.endsWith(lm);
				e.includes("-") || t ? n.setProperty(e, t ? r.slice(0, -11) : r, t ? cm : "") : n[e] = r;
			}
		}
		return Ce;
	}
}), dm = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cstyle%3e.spinner_ajPY{transform-origin:center;animation:spinner_AtaB%20.75s%20infinite%20linear}@keyframes%20spinner_AtaB{100%25{transform:rotate(360deg)}}%3c/style%3e%3cpath%20d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'%20opacity='.25'/%3e%3cpath%20d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'%20class='spinner_ajPY'/%3e%3c/svg%3e", fm = class {
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
				e.push(C`<div style=${um(t)}>
                        <div class=${i.status}>
                            ${i.status == "error" ? C`<span
                                      >Loading
                                      failed${i.detail ? C`: ${i.detail}` : w}</span
                                  >` : C`
                                      <img src="${dm}" alt="" />
                                      <span>Loading...</span>
                                  `}
                        </div>
                    </div>`);
			}
		}
		n && !r && e.push(C`<div style=${um({
			left: "0px",
			top: "0px",
			width: "100%",
			height: "100%"
		})}>
                    <div class=${n.status}>
                        ${n.status == "error" ? C`<span
                                  >Loading
                                  failed${n.detail ? C`: ${n.detail}` : w}</span
                              >` : C`
                                  <img src="${dm}" alt="" />
                                  <span>Loading...</span>
                              `}
                    </div>
                </div>`), t() ? this.#e.style.display = "block" : setTimeout(() => {
			t() || (this.#e.style.display = "none");
		}, 3e3), Re(e, this.#e);
	}
}, pm = class {
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
//#region src/genomeSpy/viewHighlight.js
function mm(e) {
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
//#region src/genomeSpy/keyboardListenerManager.js
var hm = class {
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
}, gm = class {
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
//#region src/utils/inputBinding.js
function _m(e) {
	let t = Math.floor(Math.random() * 16777215).toString(16), n = [];
	for (let r of e.paramConfigs.values()) {
		if (!op(r)) continue;
		let i = r.bind;
		if (!i || !("input" in i)) continue;
		let a = r.name, o = (t) => {
			e.setValue(a, t);
		}, s = e.getValue(a), c = i.name ?? a, l = i.debounce ? fp(o, i.debounce, !1) : o, u = `${t}-param-${a}`;
		if (i.input == "range") n.push(C`<label for=${u}>${c}</label>
                    <div>
                        <input
                            id=${u}
                            type="range"
                            min=${i.min ?? 0}
                            max=${i.max ?? 100}
                            step=${i.step ?? Ln(i.min, i.max, 100)}
                            .value=${s}
                            @input=${(e) => {
			l(e.target.valueAsNumber), e.target.nextElementSibling.textContent = e.target.valueAsNumber;
		}}
                        /><span>${s}</span>
                    </div>`);
		else if (i.input == "checkbox") n.push(C`<label for=${u}>${c}</label>
                    <input
                        id=${u}
                        type="checkbox"
                        ?checked=${s}
                        @input=${(e) => l(e.target.checked)}
                    />`);
		else if (i.input == "radio") n.push(C`<span class="label">${c}</span>
                    <div class="radio-group">
                        ${i.options.map((e, t) => C`<label>
                                    <input
                                        type="radio"
                                        name=${a}
                                        value=${e}
                                        .checked=${s == e}
                                        @input=${(e) => l(e.target.value)}
                                    />${i.labels?.[t] ?? e}</label
                                >`)}
                    </div>`);
		else if (i.input == "select") n.push(C`<label for=${u}>${c}</label>
                    <select
                        id=${u}
                        @input=${(e) => l(e.target.value)}
                    >
                        ${i.options.map((e, t) => C`<option
                                    value=${e}
                                    ?selected=${s == e}
                                >
                                    ${i.labels?.[t] ?? e}
                                </option>`)}
                    </select> `);
		else if (i.input == "text" || i.input == "number" || i.input == "color") n.push(C`<label for=${u}>${c}</label>
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
		i.description && n.push(C`<div class="description">${i.description}</div>`);
	}
	return n;
}
//#endregion
//#region src/genomeSpy/inputBindingManager.js
var vm = class {
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
			t.push(..._m(n));
		});
		let n = this.#t.inputBindingContainer;
		if (!(!n || n == "none" || !t.length)) {
			if (this.#n = document.createElement("div"), this.#n.className = "gs-input-bindings", n == "default") this.#e.appendChild(this.#n);
			else if (n instanceof HTMLElement) n.appendChild(this.#n);
			else throw Error("Invalid inputBindingContainer");
			t.length && Re(C`<div class="gs-input-binding">${t}</div>`, this.#n);
		}
	}
	remove() {
		this.#n?.remove();
	}
};
Float32Array, Float32Array;
var ym = 5120, bm = 5121, xm = 5122, Sm = 5123, Cm = 5124, wm = 5125, Tm = 5126, Em = 32819, Dm = 32820, Om = 33635, km = 5131, Am = 33640, jm = 35899, Mm = 35902, Nm = 36269, Pm = 34042, Fm = {};
{
	let e = Fm;
	e[ym] = Int8Array, e[bm] = Uint8Array, e[xm] = Int16Array, e[Sm] = Uint16Array, e[Cm] = Int32Array, e[wm] = Uint32Array, e[Tm] = Float32Array, e[Em] = Uint16Array, e[Dm] = Uint16Array, e[Om] = Uint16Array, e[km] = Uint16Array, e[Am] = Uint32Array, e[jm] = Uint32Array, e[Mm] = Uint32Array, e[Nm] = Uint32Array, e[Pm] = Uint32Array;
}
function Im(e) {
	if (e instanceof Int8Array) return ym;
	if (e instanceof Uint8Array || e instanceof Uint8ClampedArray) return bm;
	if (e instanceof Int16Array) return xm;
	if (e instanceof Uint16Array) return Sm;
	if (e instanceof Int32Array) return Cm;
	if (e instanceof Uint32Array) return wm;
	if (e instanceof Float32Array) return Tm;
	throw Error("unsupported typed array type");
}
function Lm(e) {
	if (e === Int8Array) return ym;
	if (e === Uint8Array || e === Uint8ClampedArray) return bm;
	if (e === Int16Array) return xm;
	if (e === Uint16Array) return Sm;
	if (e === Int32Array) return Cm;
	if (e === Uint32Array) return wm;
	if (e === Float32Array) return Tm;
	throw Error("unsupported typed array type");
}
function Rm(e) {
	let t = Fm[e];
	if (!t) throw Error("unknown gl type");
	return t;
}
var zm = typeof SharedArrayBuffer < "u" ? function(e) {
	return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer);
} : function(e) {
	return e && e.buffer && e.buffer instanceof ArrayBuffer;
};
function Bm(...e) {
	console.error(...e);
}
function Vm(...e) {
	console.warn(...e);
}
function Hm(e, t) {
	return typeof WebGLBuffer < "u" && t instanceof WebGLBuffer;
}
function Um(e, t) {
	return typeof WebGLRenderbuffer < "u" && t instanceof WebGLRenderbuffer;
}
function Wm(e, t) {
	return typeof WebGLTexture < "u" && t instanceof WebGLTexture;
}
function Gm(e, t) {
	return typeof WebGLSampler < "u" && t instanceof WebGLSampler;
}
var Km = 35044, qm = 34962, Jm = 34963, Ym = 34660, Xm = 5120, Zm = 5121, Qm = 5122, $m = 5123, eh = 5124, th = 5125, nh = 5126, rh = { attribPrefix: "" };
function ih(e, t, n, r, i) {
	e.bindBuffer(t, n), e.bufferData(t, r, i || Km);
}
function ah(e, t, n, r) {
	if (Hm(e, t)) return t;
	n ||= qm;
	let i = e.createBuffer();
	return ih(e, n, i, t, r), i;
}
function oh(e) {
	return e === "indices";
}
function sh(e) {
	return e instanceof Int8Array || e instanceof Uint8Array;
}
function ch(e) {
	return e === Int8Array || e === Uint8Array;
}
function lh(e) {
	return e.length ? e : e.data;
}
var uh = /coord|texture/i, dh = /color|colour/i;
function fh(e, t) {
	let n;
	if (n = uh.test(e) ? 2 : dh.test(e) ? 4 : 3, t % n > 0) throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
	return n;
}
function ph(e, t) {
	return e.numComponents || e.size || fh(t, lh(e).length);
}
function mh(e, t) {
	if (zm(e)) return e;
	if (zm(e.data)) return e.data;
	Array.isArray(e) && (e = { data: e });
	let n = e.type;
	return n ||= oh(t) ? Uint16Array : Float32Array, new n(e.data);
}
function hh(e, t) {
	let n = {};
	return Object.keys(t).forEach(function(r) {
		if (!oh(r)) {
			let i = t[r], a = i.attrib || i.name || i.attribName || rh.attribPrefix + r;
			if (i.value) {
				if (!Array.isArray(i.value) && !zm(i.value)) throw Error("array.value is not array or typedarray");
				n[a] = { value: i.value };
			} else {
				let t, o, s, c;
				if (i.buffer && i.buffer instanceof WebGLBuffer) t = i.buffer, c = i.numComponents || i.size, o = i.type, s = i.normalize;
				else if (typeof i == "number" || typeof i.data == "number") {
					let n = i.data || i, a = i.type || Float32Array, l = n * a.BYTES_PER_ELEMENT;
					o = Lm(a), s = i.normalize === void 0 ? ch(a) : i.normalize, c = i.numComponents || i.size || fh(r, n), t = e.createBuffer(), e.bindBuffer(qm, t), e.bufferData(qm, l, i.drawType || Km);
				} else {
					let n = mh(i, r);
					t = ah(e, n, void 0, i.drawType), o = Im(n), s = i.normalize === void 0 ? sh(n) : i.normalize, c = ph(i, r);
				}
				n[a] = {
					buffer: t,
					numComponents: c,
					type: o,
					normalize: s,
					stride: i.stride || 0,
					offset: i.offset || 0,
					divisor: i.divisor === void 0 ? void 0 : i.divisor,
					drawType: i.drawType
				};
			}
		}
	}), e.bindBuffer(qm, null), n;
}
function gh(e, t, n, r) {
	n = mh(n), r === void 0 ? ih(e, qm, t.buffer, n, t.drawType) : (e.bindBuffer(qm, t.buffer), e.bufferSubData(qm, r, n));
}
function _h(e, t) {
	return t === Xm || t === Zm ? 1 : t === Qm || t === $m ? 2 : t === eh || t === th || t === nh ? 4 : 0;
}
var vh = [
	"position",
	"positions",
	"a_position"
];
function yh(e, t) {
	let n, r;
	for (r = 0; r < vh.length && (n = vh[r], !(n in t || (n = rh.attribPrefix + n, n in t))); ++r);
	r === vh.length && (n = Object.keys(t)[0]);
	let i = t[n];
	if (!i.buffer) return 1;
	e.bindBuffer(qm, i.buffer);
	let a = e.getBufferParameter(qm, Ym);
	e.bindBuffer(qm, null);
	let o = a / _h(e, i.type), s = i.numComponents || i.size, c = o / s;
	if (c % 1 != 0) throw Error(`numComponents ${s} not correct for length ${length}`);
	return c;
}
function bh(e, t, n) {
	let r = hh(e, t), i = Object.assign({}, n || {});
	i.attribs = Object.assign({}, n ? n.attribs : {}, r);
	let a = t.indices;
	if (a) {
		let t = mh(a, "indices");
		i.indices = ah(e, t, Jm), i.numElements = t.length, i.elementType = Im(t);
	} else i.numElements ||= yh(e, i.attribs);
	return i;
}
function xh(e) {
	return !!e.texStorage2D;
}
var Sh = function() {
	let e = {}, t = {};
	function n(n) {
		let r = n.constructor.name;
		if (!e[r]) {
			for (let e in n) if (typeof n[e] == "number") {
				let r = t[n[e]];
				t[n[e]] = r ? `${r} | ${e}` : e;
			}
			e[r] = !0;
		}
	}
	return function(e, r) {
		return n(e), t[r] || (typeof r == "number" ? `0x${r.toString(16)}` : r);
	};
}(), Ch = {
	textureColor: new Uint8Array([
		128,
		192,
		255,
		255
	]),
	textureOptions: {},
	crossOrigin: void 0
}, wh = zm, Th = function() {
	let e;
	return function() {
		return e ||= typeof document < "u" && document.createElement ? document.createElement("canvas").getContext("2d") : null, e;
	};
}(), Eh = 6406, Dh = 6407, U = 6408, Oh = 6409, kh = 6410, Ah = 6402, jh = 34041, Mh = 33071, Nh = 9728, Ph = 9729, Fh = 3553, Ih = 34067, Lh = 32879, Rh = 35866, zh = 34069, Bh = 34070, Vh = 34071, Hh = 34072, Uh = 34073, Wh = 34074, Gh = 10241, Kh = 10240, qh = 10242, Jh = 10243, Yh = 32882, Xh = 33082, Zh = 33083, Qh = 33084, $h = 33085, eg = 3317, tg = 3314, ng = 32878, rg = 3316, ig = 3315, ag = 32877, og = 37443, sg = 37441, cg = 37440, lg = 33321, ug = 36756, dg = 33325, fg = 33326, pg = 33330, mg = 33329, hg = 33338, gg = 33337, _g = 33340, vg = 33339, yg = 33323, bg = 36757, xg = 33327, Sg = 33328, Cg = 33336, wg = 33335, Tg = 33332, Eg = 33331, Dg = 33334, Og = 33333, kg = 32849, Ag = 35905, jg = 36194, Mg = 36758, Ng = 35898, Pg = 35901, Fg = 34843, Ig = 34837, Lg = 36221, Rg = 36239, zg = 36215, Bg = 36233, Vg = 36209, Hg = 36227, Ug = 32856, Wg = 35907, Gg = 36759, Kg = 32855, qg = 32854, Jg = 32857, Yg = 34842, Xg = 34836, Zg = 36220, Qg = 36238, $g = 36975, e_ = 36214, t_ = 36232, n_ = 36226, r_ = 36208, i_ = 33189, a_ = 33190, o_ = 36012, s_ = 36013, c_ = 35056, l_ = 5120, W = 5121, u_ = 5122, d_ = 5123, f_ = 5124, p_ = 5125, m_ = 5126, h_ = 32819, g_ = 32820, __ = 33635, v_ = 5131, y_ = 36193, b_ = 33640, x_ = 35899, S_ = 35902, C_ = 36269, w_ = 34042, T_ = 33319, E_ = 33320, D_ = 6403, O_ = 36244, k_ = 36248, A_ = 36249, j_ = {};
{
	let e = j_;
	e[Eh] = { numColorComponents: 1 }, e[Oh] = { numColorComponents: 1 }, e[kh] = { numColorComponents: 2 }, e[Dh] = { numColorComponents: 3 }, e[U] = { numColorComponents: 4 }, e[D_] = { numColorComponents: 1 }, e[O_] = { numColorComponents: 1 }, e[T_] = { numColorComponents: 2 }, e[E_] = { numColorComponents: 2 }, e[Dh] = { numColorComponents: 3 }, e[k_] = { numColorComponents: 3 }, e[U] = { numColorComponents: 4 }, e[A_] = { numColorComponents: 4 }, e[Ah] = { numColorComponents: 1 }, e[jh] = { numColorComponents: 2 };
}
var M_;
function N_(e) {
	if (!M_) {
		let e = {};
		e[Eh] = {
			textureFormat: Eh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				1,
				2,
				2,
				4
			],
			type: [
				W,
				v_,
				y_,
				m_
			]
		}, e[Oh] = {
			textureFormat: Oh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				1,
				2,
				2,
				4
			],
			type: [
				W,
				v_,
				y_,
				m_
			]
		}, e[kh] = {
			textureFormat: kh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				2,
				4,
				4,
				8
			],
			type: [
				W,
				v_,
				y_,
				m_
			]
		}, e[Dh] = {
			textureFormat: Dh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				3,
				6,
				6,
				12,
				2
			],
			type: [
				W,
				v_,
				y_,
				m_,
				__
			]
		}, e[U] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				4,
				8,
				8,
				16,
				2,
				2
			],
			type: [
				W,
				v_,
				y_,
				m_,
				h_,
				g_
			]
		}, e[Ah] = {
			textureFormat: Ah,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2, 4],
			type: [p_, d_]
		}, e[lg] = {
			textureFormat: D_,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [1],
			type: [W]
		}, e[ug] = {
			textureFormat: D_,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [1],
			type: [l_]
		}, e[dg] = {
			textureFormat: D_,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [4, 2],
			type: [m_, v_]
		}, e[fg] = {
			textureFormat: D_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [m_]
		}, e[pg] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [1],
			type: [W]
		}, e[mg] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [1],
			type: [l_]
		}, e[Tg] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2],
			type: [d_]
		}, e[Eg] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2],
			type: [u_]
		}, e[Dg] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [p_]
		}, e[Og] = {
			textureFormat: O_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [f_]
		}, e[yg] = {
			textureFormat: T_,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [2],
			type: [W]
		}, e[bg] = {
			textureFormat: T_,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [2],
			type: [l_]
		}, e[xg] = {
			textureFormat: T_,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [8, 4],
			type: [m_, v_]
		}, e[Sg] = {
			textureFormat: T_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [8],
			type: [m_]
		}, e[Cg] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2],
			type: [W]
		}, e[wg] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2],
			type: [l_]
		}, e[hg] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [d_]
		}, e[gg] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [u_]
		}, e[_g] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [8],
			type: [p_]
		}, e[vg] = {
			textureFormat: E_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [8],
			type: [f_]
		}, e[kg] = {
			textureFormat: Dh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [3],
			type: [W]
		}, e[Ag] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [3],
			type: [W]
		}, e[jg] = {
			textureFormat: Dh,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [3, 2],
			type: [W, __]
		}, e[Mg] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [3],
			type: [l_]
		}, e[Ng] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [
				12,
				6,
				4
			],
			type: [
				m_,
				v_,
				x_
			]
		}, e[Pg] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [
				12,
				6,
				4
			],
			type: [
				m_,
				v_,
				S_
			]
		}, e[Fg] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [12, 6],
			type: [m_, v_]
		}, e[Ig] = {
			textureFormat: Dh,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [12],
			type: [m_]
		}, e[Lg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [3],
			type: [W]
		}, e[Rg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [3],
			type: [l_]
		}, e[zg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [6],
			type: [d_]
		}, e[Bg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [6],
			type: [u_]
		}, e[Vg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [12],
			type: [p_]
		}, e[Hg] = {
			textureFormat: k_,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [12],
			type: [f_]
		}, e[Ug] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [4],
			type: [W]
		}, e[Wg] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [4],
			type: [W]
		}, e[Gg] = {
			textureFormat: U,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [4],
			type: [l_]
		}, e[Kg] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [
				4,
				2,
				4
			],
			type: [
				W,
				g_,
				b_
			]
		}, e[qg] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [4, 2],
			type: [W, h_]
		}, e[Jg] = {
			textureFormat: U,
			colorRenderable: !0,
			textureFilterable: !0,
			bytesPerElement: [4],
			type: [b_]
		}, e[Yg] = {
			textureFormat: U,
			colorRenderable: !1,
			textureFilterable: !0,
			bytesPerElement: [16, 8],
			type: [m_, v_]
		}, e[Xg] = {
			textureFormat: U,
			colorRenderable: !1,
			textureFilterable: !1,
			bytesPerElement: [16],
			type: [m_]
		}, e[Zg] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [W]
		}, e[Qg] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [l_]
		}, e[$g] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [b_]
		}, e[e_] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [8],
			type: [d_]
		}, e[t_] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [8],
			type: [u_]
		}, e[n_] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [16],
			type: [f_]
		}, e[r_] = {
			textureFormat: A_,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [16],
			type: [p_]
		}, e[i_] = {
			textureFormat: Ah,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [2, 4],
			type: [d_, p_]
		}, e[a_] = {
			textureFormat: Ah,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [p_]
		}, e[o_] = {
			textureFormat: Ah,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [m_]
		}, e[c_] = {
			textureFormat: jh,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [w_]
		}, e[s_] = {
			textureFormat: jh,
			colorRenderable: !0,
			textureFilterable: !1,
			bytesPerElement: [4],
			type: [C_]
		}, Object.keys(e).forEach(function(t) {
			let n = e[t];
			n.bytesPerElementMap = {}, n.bytesPerElement.forEach(function(e, t) {
				let r = n.type[t];
				n.bytesPerElementMap[r] = e;
			});
		}), M_ = e;
	}
	return M_[e];
}
function P_(e, t) {
	let n = N_(e);
	if (!n) throw "unknown internal format";
	let r = n.bytesPerElementMap[t];
	if (r === void 0) throw "unknown internal format";
	return r;
}
function F_(e) {
	let t = N_(e);
	if (!t) throw "unknown internal format";
	return {
		format: t.textureFormat,
		type: t.type[0]
	};
}
function I_(e) {
	return (e & e - 1) == 0;
}
function L_(e, t, n, r) {
	if (!xh(e)) return I_(t) && I_(n);
	let i = N_(r);
	if (!i) throw "unknown internal format";
	return i.colorRenderable && i.textureFilterable;
}
function R_(e) {
	let t = N_(e);
	if (!t) throw "unknown internal format";
	return t.textureFilterable;
}
function z_(e, t, n) {
	return wh(t) ? Im(t) : n || W;
}
function B_(e, t, n, r, i) {
	if (i % 1 != 0) throw "can't guess dimensions";
	if (!n && !r) {
		let e = Math.sqrt(i / (t === Ih ? 6 : 1));
		e % 1 == 0 ? (n = e, r = e) : (n = i, r = 1);
	} else if (!r) {
		if (r = i / n, r % 1) throw "can't guess dimensions";
	} else if (!n && (n = i / r, n % 1)) throw "can't guess dimensions";
	return {
		width: n,
		height: r
	};
}
function V_(e, t) {
	t.colorspaceConversion !== void 0 && e.pixelStorei(og, t.colorspaceConversion), t.premultiplyAlpha !== void 0 && e.pixelStorei(sg, t.premultiplyAlpha), t.flipY !== void 0 && e.pixelStorei(cg, t.flipY);
}
function H_(e) {
	e.pixelStorei(eg, 4), xh(e) && (e.pixelStorei(tg, 0), e.pixelStorei(ng, 0), e.pixelStorei(rg, 0), e.pixelStorei(ig, 0), e.pixelStorei(ag, 0));
}
function U_(e, t, n, r) {
	r.minMag && (n.call(e, t, Gh, r.minMag), n.call(e, t, Kh, r.minMag)), r.min && n.call(e, t, Gh, r.min), r.mag && n.call(e, t, Kh, r.mag), r.wrap && (n.call(e, t, qh, r.wrap), n.call(e, t, Jh, r.wrap), (t === Lh || Gm(e, t)) && n.call(e, t, Yh, r.wrap)), r.wrapR && n.call(e, t, Yh, r.wrapR), r.wrapS && n.call(e, t, qh, r.wrapS), r.wrapT && n.call(e, t, Jh, r.wrapT), r.minLod && n.call(e, t, Xh, r.minLod), r.maxLod && n.call(e, t, Zh, r.maxLod), r.baseLevel && n.call(e, t, Qh, r.baseLevel), r.maxLevel && n.call(e, t, $h, r.maxLevel);
}
function W_(e, t, n) {
	let r = n.target || Fh;
	e.bindTexture(r, t), U_(e, r, e.texParameteri, n);
}
function G_(e) {
	return e ||= Ch.textureColor, wh(e) ? e : new Uint8Array([
		e[0] * 255,
		e[1] * 255,
		e[2] * 255,
		e[3] * 255
	]);
}
function K_(e, t, n, r, i, a) {
	n ||= Ch.textureOptions, a ||= U;
	let o = n.target || Fh;
	if (r ||= n.width, i ||= n.height, e.bindTexture(o, t), L_(e, r, i, a)) e.generateMipmap(o);
	else {
		let t = R_(a) ? Ph : Nh;
		e.texParameteri(o, Gh, t), e.texParameteri(o, Kh, t), e.texParameteri(o, qh, Mh), e.texParameteri(o, Jh, Mh);
	}
}
function q_(e) {
	return e.auto === !0 || e.auto === void 0 && e.level === void 0;
}
function J_(e, t) {
	return t ||= {}, t.cubeFaceOrder || [
		zh,
		Bh,
		Vh,
		Hh,
		Uh,
		Wh
	];
}
function Y_(e, t) {
	let n = J_(e, t).map(function(e, t) {
		return {
			face: e,
			ndx: t
		};
	});
	return n.sort(function(e, t) {
		return e.face - t.face;
	}), n;
}
function X_(e, t, n, r) {
	r ||= Ch.textureOptions;
	let i = r.target || Fh, a = r.level || 0, o = n.width, s = n.height, c = r.internalFormat || r.format || U, l = F_(c), u = r.format || l.format, d = r.type || l.type;
	if (V_(e, r), e.bindTexture(i, t), i === Ih) {
		let l = n.width, f = n.height, p, m;
		if (l / 6 === f) p = f, m = [
			0,
			0,
			1,
			0,
			2,
			0,
			3,
			0,
			4,
			0,
			5,
			0
		];
		else if (f / 6 === l) p = l, m = [
			0,
			0,
			0,
			1,
			0,
			2,
			0,
			3,
			0,
			4,
			0,
			5
		];
		else if (l / 3 == f / 2) p = l / 3, m = [
			0,
			0,
			1,
			0,
			2,
			0,
			0,
			1,
			1,
			1,
			2,
			1
		];
		else if (l / 2 == f / 3) p = l / 2, m = [
			0,
			0,
			1,
			0,
			0,
			1,
			1,
			1,
			0,
			2,
			1,
			2
		];
		else throw "can't figure out cube map from element: " + (n.src ? n.src : n.nodeName);
		let h = Th();
		h ? (h.canvas.width = p, h.canvas.height = p, o = p, s = p, Y_(e, r).forEach(function(t) {
			let r = m[t.ndx * 2 + 0] * p, i = m[t.ndx * 2 + 1] * p;
			h.drawImage(n, r, i, p, p, 0, 0, p, p), e.texImage2D(t.face, a, c, u, d, h.canvas);
		}), h.canvas.width = 1, h.canvas.height = 1) : typeof createImageBitmap < "u" && (o = p, s = p, Y_(e, r).forEach(function(l) {
			let f = m[l.ndx * 2 + 0] * p, h = m[l.ndx * 2 + 1] * p;
			e.texImage2D(l.face, a, c, p, p, 0, u, d, null), createImageBitmap(n, f, h, p, p, {
				premultiplyAlpha: "none",
				colorSpaceConversion: "none"
			}).then(function(n) {
				V_(e, r), e.bindTexture(i, t), e.texImage2D(l.face, a, c, u, d, n), q_(r) && K_(e, t, r, o, s, c);
			});
		}));
	} else if (i === Lh || i === Rh) {
		let t = Math.min(n.width, n.height), r = Math.max(n.width, n.height), o = r / t;
		if (o % 1 != 0) throw "can not compute 3D dimensions of element";
		let s = n.width === r ? 1 : 0, l = n.height === r ? 1 : 0;
		e.pixelStorei(eg, 1), e.pixelStorei(tg, n.width), e.pixelStorei(ng, 0), e.pixelStorei(ag, 0), e.texImage3D(i, a, c, t, t, t, 0, u, d, null);
		for (let r = 0; r < o; ++r) {
			let o = r * t * s, c = r * t * l;
			e.pixelStorei(rg, o), e.pixelStorei(ig, c), e.texSubImage3D(i, a, 0, 0, r, t, t, 1, u, d, n);
		}
		H_(e);
	} else e.texImage2D(i, a, c, u, d, n);
	q_(r) && K_(e, t, r, o, s, c), W_(e, t, r);
}
function Z_() {}
function Q_(e) {
	if (typeof document < "u") {
		let t = document.createElement("a");
		return t.href = e, t.hostname === location.hostname && t.port === location.port && t.protocol === location.protocol;
	} else {
		let t = new URL(location.href).origin;
		return new URL(e, location.href).origin === t;
	}
}
function $_(e, t) {
	return t === void 0 && !Q_(e) ? "anonymous" : t;
}
function ev(e, t, n) {
	n ||= Z_;
	let r;
	if (t = t === void 0 ? Ch.crossOrigin : t, t = $_(e, t), typeof Image < "u") {
		r = new Image(), t !== void 0 && (r.crossOrigin = t);
		let i = function() {
			r.removeEventListener("error", a), r.removeEventListener("load", o), r = null;
		}, a = function() {
			let t = "couldn't load image: " + e;
			Bm(t), n(t, r), i();
		}, o = function() {
			n(null, r), i();
		};
		return r.addEventListener("error", a), r.addEventListener("load", o), r.src = e, r;
	} else if (typeof ImageBitmap < "u") {
		let i, a, o = function() {
			n(i, a);
		}, s = {};
		t && (s.mode = "cors"), fetch(e, s).then(function(e) {
			if (!e.ok) throw e;
			return e.blob();
		}).then(function(e) {
			return createImageBitmap(e, {
				premultiplyAlpha: "none",
				colorSpaceConversion: "none"
			});
		}).then(function(e) {
			a = e, setTimeout(o);
		}).catch(function(e) {
			i = e, setTimeout(o);
		}), r = null;
	}
	return r;
}
function tv(e) {
	return typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof ImageData < "u" && e instanceof ImageData || typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function nv(e, t, n) {
	return tv(e) ? (setTimeout(function() {
		n(null, e);
	}), e) : ev(e, t, n);
}
function rv(e, t, n) {
	n ||= Ch.textureOptions;
	let r = n.target || Fh;
	if (e.bindTexture(r, t), n.color === !1) return;
	let i = G_(n.color);
	if (r === Ih) for (let t = 0; t < 6; ++t) e.texImage2D(zh + t, 0, U, 1, 1, 0, U, W, i);
	else r === Lh || r === Rh ? e.texImage3D(r, 0, U, 1, 1, 1, 0, U, W, i) : e.texImage2D(r, 0, U, 1, 1, 0, U, W, i);
}
function iv(e, t, n, r) {
	return r ||= Z_, n ||= Ch.textureOptions, rv(e, t, n), n = Object.assign({}, n), nv(n.src, n.crossOrigin, function(i, a) {
		i ? r(i, t, a) : (X_(e, t, a, n), r(null, t, a));
	});
}
function av(e, t, n, r) {
	r ||= Z_;
	let i = n.src;
	if (i.length !== 6) throw "there must be 6 urls for a cubemap";
	let a = n.level || 0, o = n.internalFormat || n.format || U, s = F_(o), c = n.format || s.format, l = n.type || W, u = n.target || Fh;
	if (u !== Ih) throw "target must be TEXTURE_CUBE_MAP";
	rv(e, t, n), n = Object.assign({}, n);
	let d = 6, f = [], p = J_(e, n), m;
	function h(i) {
		return function(s, p) {
			--d, s ? f.push(s) : p.width === p.height ? (V_(e, n), e.bindTexture(u, t), d === 5 ? J_().forEach(function(t) {
				e.texImage2D(t, a, o, c, l, p);
			}) : e.texImage2D(i, a, o, c, l, p), q_(n) && e.generateMipmap(u)) : f.push("cubemap face img is not a square: " + p.src), d === 0 && r(f.length ? f : void 0, t, m);
		};
	}
	m = i.map(function(e, t) {
		return nv(e, n.crossOrigin, h(p[t]));
	});
}
function ov(e, t, n, r) {
	r ||= Z_;
	let i = n.src, a = n.internalFormat || n.format || U, o = F_(a), s = n.format || o.format, c = n.type || W, l = n.target || Rh;
	if (l !== Lh && l !== Rh) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
	rv(e, t, n), n = Object.assign({}, n);
	let u = i.length, d = [], f, p = n.level || 0, m = n.width, h = n.height, g = i.length, _ = !0;
	function v(i) {
		return function(o, v) {
			if (--u, o) d.push(o);
			else {
				if (V_(e, n), e.bindTexture(l, t), _) {
					_ = !1, m = n.width || v.width, h = n.height || v.height, e.texImage3D(l, p, a, m, h, g, 0, s, c, null);
					for (let t = 0; t < g; ++t) e.texSubImage3D(l, p, 0, 0, t, m, h, 1, s, c, v);
				} else {
					let t = v, n;
					(v.width !== m || v.height !== h) && (n = Th(), t = n.canvas, n.canvas.width = m, n.canvas.height = h, n.drawImage(v, 0, 0, m, h)), e.texSubImage3D(l, p, 0, 0, i, m, h, 1, s, c, t), n && t === n.canvas && (n.canvas.width = 0, n.canvas.height = 0);
				}
				q_(n) && e.generateMipmap(l);
			}
			u === 0 && r(d.length ? d : void 0, t, f);
		};
	}
	f = i.map(function(e, t) {
		return nv(e, n.crossOrigin, v(t));
	});
}
function sv(e, t, n, r) {
	r ||= Ch.textureOptions;
	let i = r.target || Fh;
	e.bindTexture(i, t);
	let a = r.width, o = r.height, s = r.depth, c = r.level || 0, l = r.internalFormat || r.format || U, u = F_(l), d = r.format || u.format, f = r.type || z_(e, n, u.type);
	wh(n) ? n instanceof Uint8ClampedArray && (n = new Uint8Array(n.buffer)) : n = new (Rm(f))(n);
	let p = P_(l, f), m = n.byteLength / p;
	if (m % 1) throw "length wrong size for format: " + Sh(e, d);
	let h;
	if (i === Lh || i === Rh) if (!a && !o && !s) {
		let e = Math.cbrt(m);
		if (e % 1 != 0) throw "can't guess cube size of array of numElements: " + m;
		a = e, o = e, s = e;
	} else a && (!o || !s) ? (h = B_(e, i, o, s, m / a), o = h.width, s = h.height) : o && (!a || !s) ? (h = B_(e, i, a, s, m / o), a = h.width, s = h.height) : (h = B_(e, i, a, o, m / s), a = h.width, o = h.height);
	else h = B_(e, i, a, o, m), a = h.width, o = h.height;
	if (H_(e), e.pixelStorei(eg, r.unpackAlignment || 1), V_(e, r), i === Ih) {
		let t = p / n.BYTES_PER_ELEMENT, i = m / 6 * t;
		Y_(e, r).forEach((t) => {
			let r = i * t.ndx, s = n.subarray(r, r + i);
			e.texImage2D(t.face, c, l, a, o, 0, d, f, s);
		});
	} else i === Lh || i === Rh ? e.texImage3D(i, c, l, a, o, s, 0, d, f, n) : e.texImage2D(i, c, l, a, o, 0, d, f, n);
	return {
		width: a,
		height: o,
		depth: s,
		type: f
	};
}
function cv(e, t, n) {
	let r = n.target || Fh;
	e.bindTexture(r, t);
	let i = n.level || 0, a = n.internalFormat || n.format || U, o = F_(a), s = n.format || o.format, c = n.type || o.type;
	if (V_(e, n), r === Ih) for (let t = 0; t < 6; ++t) e.texImage2D(zh + t, i, a, n.width, n.height, 0, s, c, null);
	else r === Lh || r === Rh ? e.texImage3D(r, i, a, n.width, n.height, n.depth, 0, s, c, null) : e.texImage2D(r, i, a, n.width, n.height, 0, s, c, null);
}
function lv(e, t, n) {
	n ||= Z_, t ||= Ch.textureOptions;
	let r = e.createTexture(), i = t.target || Fh, a = t.width || 1, o = t.height || 1, s = t.internalFormat || U;
	e.bindTexture(i, r), i === Ih && (e.texParameteri(i, qh, Mh), e.texParameteri(i, Jh, Mh));
	let c = t.src;
	if (c) if (typeof c == "function" && (c = c(e, t)), typeof c == "string") iv(e, r, t, n);
	else if (wh(c) || Array.isArray(c) && (typeof c[0] == "number" || Array.isArray(c[0]) || wh(c[0]))) {
		let n = sv(e, r, c, t);
		a = n.width, o = n.height;
	} else Array.isArray(c) && (typeof c[0] == "string" || tv(c[0])) ? i === Ih ? av(e, r, t, n) : ov(e, r, t, n) : (X_(e, r, c, t), a = c.width, o = c.height);
	else cv(e, r, t);
	return q_(t) && K_(e, r, t, a, o, s), W_(e, r, t), r;
}
function uv(e, t, n, r, i, a) {
	r ||= n.width, i ||= n.height, a ||= n.depth;
	let o = n.target || Fh;
	e.bindTexture(o, t);
	let s = n.level || 0, c = n.internalFormat || n.format || U, l = F_(c), u = n.format || l.format, d, f = n.src;
	if (d = f && (wh(f) || Array.isArray(f) && typeof f[0] == "number") ? n.type || z_(e, f, l.type) : n.type || l.type, o === Ih) for (let t = 0; t < 6; ++t) e.texImage2D(zh + t, s, c, r, i, 0, u, d, null);
	else o === Lh || o === Rh ? e.texImage3D(o, s, c, r, i, a, 0, u, d, null) : e.texImage2D(o, s, c, r, i, 0, u, d, null);
}
var dv = Vm, fv = 33984, pv = 35048, mv = 34962, hv = 34963, gv = 35345, _v = 35718, vv = 35721, yv = 35971, bv = 35382, xv = 35396, Sv = 35398, Cv = 35392, wv = 35395, Tv = 5126, Ev = 35664, Dv = 35665, Ov = 35666, kv = 5124, Av = 35667, jv = 35668, Mv = 35669, Nv = 35670, Pv = 35671, Fv = 35672, Iv = 35673, Lv = 35674, Rv = 35675, zv = 35676, Bv = 35678, Vv = 35680, Hv = 35679, Uv = 35682, Wv = 35685, Gv = 35686, Kv = 35687, qv = 35688, Jv = 35689, Yv = 35690, Xv = 36289, Zv = 36292, Qv = 36293, $v = 5125, ey = 36294, ty = 36295, ny = 36296, ry = 36298, iy = 36299, ay = 36300, oy = 36303, sy = 36306, cy = 36307, ly = 36308, uy = 36311, dy = 3553, fy = 34067, py = 32879, my = 35866, G = {};
function hy(e, t) {
	return G[t].bindPoint;
}
function gy(e, t) {
	return function(n) {
		e.uniform1f(t, n);
	};
}
function _y(e, t) {
	return function(n) {
		e.uniform1fv(t, n);
	};
}
function vy(e, t) {
	return function(n) {
		e.uniform2fv(t, n);
	};
}
function yy(e, t) {
	return function(n) {
		e.uniform3fv(t, n);
	};
}
function by(e, t) {
	return function(n) {
		e.uniform4fv(t, n);
	};
}
function xy(e, t) {
	return function(n) {
		e.uniform1i(t, n);
	};
}
function Sy(e, t) {
	return function(n) {
		e.uniform1iv(t, n);
	};
}
function Cy(e, t) {
	return function(n) {
		e.uniform2iv(t, n);
	};
}
function wy(e, t) {
	return function(n) {
		e.uniform3iv(t, n);
	};
}
function Ty(e, t) {
	return function(n) {
		e.uniform4iv(t, n);
	};
}
function Ey(e, t) {
	return function(n) {
		e.uniform1ui(t, n);
	};
}
function Dy(e, t) {
	return function(n) {
		e.uniform1uiv(t, n);
	};
}
function Oy(e, t) {
	return function(n) {
		e.uniform2uiv(t, n);
	};
}
function ky(e, t) {
	return function(n) {
		e.uniform3uiv(t, n);
	};
}
function Ay(e, t) {
	return function(n) {
		e.uniform4uiv(t, n);
	};
}
function jy(e, t) {
	return function(n) {
		e.uniformMatrix2fv(t, !1, n);
	};
}
function My(e, t) {
	return function(n) {
		e.uniformMatrix3fv(t, !1, n);
	};
}
function Ny(e, t) {
	return function(n) {
		e.uniformMatrix4fv(t, !1, n);
	};
}
function Py(e, t) {
	return function(n) {
		e.uniformMatrix2x3fv(t, !1, n);
	};
}
function Fy(e, t) {
	return function(n) {
		e.uniformMatrix3x2fv(t, !1, n);
	};
}
function Iy(e, t) {
	return function(n) {
		e.uniformMatrix2x4fv(t, !1, n);
	};
}
function Ly(e, t) {
	return function(n) {
		e.uniformMatrix4x2fv(t, !1, n);
	};
}
function Ry(e, t) {
	return function(n) {
		e.uniformMatrix3x4fv(t, !1, n);
	};
}
function zy(e, t) {
	return function(n) {
		e.uniformMatrix4x3fv(t, !1, n);
	};
}
function By(e, t, n, r) {
	let i = hy(e, t);
	return xh(e) ? function(t) {
		let a, o;
		Wm(e, t) ? (a = t, o = null) : (a = t.texture, o = t.sampler), e.uniform1i(r, n), e.activeTexture(fv + n), e.bindTexture(i, a), e.bindSampler(n, o);
	} : function(t) {
		e.uniform1i(r, n), e.activeTexture(fv + n), e.bindTexture(i, t);
	};
}
function Vy(e, t, n, r, i) {
	let a = hy(e, t), o = new Int32Array(i);
	for (let e = 0; e < i; ++e) o[e] = n + e;
	return xh(e) ? function(t) {
		e.uniform1iv(r, o), t.forEach(function(t, r) {
			e.activeTexture(fv + o[r]);
			let i, s;
			Wm(e, t) ? (i = t, s = null) : (i = t.texture, s = t.sampler), e.bindSampler(n, s), e.bindTexture(a, i);
		});
	} : function(t) {
		e.uniform1iv(r, o), t.forEach(function(t, n) {
			e.activeTexture(fv + o[n]), e.bindTexture(a, t);
		});
	};
}
G[Tv] = {
	Type: Float32Array,
	size: 4,
	setter: gy,
	arraySetter: _y
}, G[Ev] = {
	Type: Float32Array,
	size: 8,
	setter: vy,
	cols: 2
}, G[Dv] = {
	Type: Float32Array,
	size: 12,
	setter: yy,
	cols: 3
}, G[Ov] = {
	Type: Float32Array,
	size: 16,
	setter: by,
	cols: 4
}, G[kv] = {
	Type: Int32Array,
	size: 4,
	setter: xy,
	arraySetter: Sy
}, G[Av] = {
	Type: Int32Array,
	size: 8,
	setter: Cy,
	cols: 2
}, G[jv] = {
	Type: Int32Array,
	size: 12,
	setter: wy,
	cols: 3
}, G[Mv] = {
	Type: Int32Array,
	size: 16,
	setter: Ty,
	cols: 4
}, G[$v] = {
	Type: Uint32Array,
	size: 4,
	setter: Ey,
	arraySetter: Dy
}, G[ey] = {
	Type: Uint32Array,
	size: 8,
	setter: Oy,
	cols: 2
}, G[ty] = {
	Type: Uint32Array,
	size: 12,
	setter: ky,
	cols: 3
}, G[ny] = {
	Type: Uint32Array,
	size: 16,
	setter: Ay,
	cols: 4
}, G[Nv] = {
	Type: Uint32Array,
	size: 4,
	setter: xy,
	arraySetter: Sy
}, G[Pv] = {
	Type: Uint32Array,
	size: 8,
	setter: Cy,
	cols: 2
}, G[Fv] = {
	Type: Uint32Array,
	size: 12,
	setter: wy,
	cols: 3
}, G[Iv] = {
	Type: Uint32Array,
	size: 16,
	setter: Ty,
	cols: 4
}, G[Lv] = {
	Type: Float32Array,
	size: 32,
	setter: jy,
	rows: 2,
	cols: 2
}, G[Rv] = {
	Type: Float32Array,
	size: 48,
	setter: My,
	rows: 3,
	cols: 3
}, G[zv] = {
	Type: Float32Array,
	size: 64,
	setter: Ny,
	rows: 4,
	cols: 4
}, G[Wv] = {
	Type: Float32Array,
	size: 32,
	setter: Py,
	rows: 2,
	cols: 3
}, G[Gv] = {
	Type: Float32Array,
	size: 32,
	setter: Iy,
	rows: 2,
	cols: 4
}, G[Kv] = {
	Type: Float32Array,
	size: 48,
	setter: Fy,
	rows: 3,
	cols: 2
}, G[qv] = {
	Type: Float32Array,
	size: 48,
	setter: Ry,
	rows: 3,
	cols: 4
}, G[Jv] = {
	Type: Float32Array,
	size: 64,
	setter: Ly,
	rows: 4,
	cols: 2
}, G[Yv] = {
	Type: Float32Array,
	size: 64,
	setter: zy,
	rows: 4,
	cols: 3
}, G[Bv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: dy
}, G[Vv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: fy
}, G[Hv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: py
}, G[Uv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: dy
}, G[Xv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: my
}, G[Zv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: my
}, G[Qv] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: fy
}, G[ry] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: dy
}, G[iy] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: py
}, G[ay] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: fy
}, G[oy] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: my
}, G[sy] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: dy
}, G[cy] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: py
}, G[ly] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: fy
}, G[uy] = {
	Type: null,
	size: 0,
	setter: By,
	arraySetter: Vy,
	bindPoint: my
};
function Hy(e, t) {
	return function(n) {
		if (n.value) switch (e.disableVertexAttribArray(t), n.value.length) {
			case 4:
				e.vertexAttrib4fv(t, n.value);
				break;
			case 3:
				e.vertexAttrib3fv(t, n.value);
				break;
			case 2:
				e.vertexAttrib2fv(t, n.value);
				break;
			case 1:
				e.vertexAttrib1fv(t, n.value);
				break;
			default: throw Error("the length of a float constant value must be between 1 and 4!");
		}
		else e.bindBuffer(mv, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(t, n.numComponents || n.size, n.type || Tv, n.normalize || !1, n.stride || 0, n.offset || 0), n.divisor !== void 0 && e.vertexAttribDivisor(t, n.divisor);
	};
}
function Uy(e, t) {
	return function(n) {
		if (n.value) if (e.disableVertexAttribArray(t), n.value.length === 4) e.vertexAttrib4iv(t, n.value);
		else throw Error("The length of an integer constant value must be 4!");
		else e.bindBuffer(mv, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(t, n.numComponents || n.size, n.type || kv, n.stride || 0, n.offset || 0), n.divisor !== void 0 && e.vertexAttribDivisor(t, n.divisor);
	};
}
function Wy(e, t) {
	return function(n) {
		if (n.value) if (e.disableVertexAttribArray(t), n.value.length === 4) e.vertexAttrib4uiv(t, n.value);
		else throw Error("The length of an unsigned integer constant value must be 4!");
		else e.bindBuffer(mv, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(t, n.numComponents || n.size, n.type || $v, n.stride || 0, n.offset || 0), n.divisor !== void 0 && e.vertexAttribDivisor(t, n.divisor);
	};
}
function Gy(e, t, n) {
	let r = n.size, i = n.count;
	return function(n) {
		e.bindBuffer(mv, n.buffer);
		let a = n.size || n.numComponents || r, o = a / i, s = n.type || Tv, c = G[s].size * a, l = n.normalize || !1, u = n.offset || 0, d = c / i;
		for (let r = 0; r < i; ++r) e.enableVertexAttribArray(t + r), e.vertexAttribPointer(t + r, o, s, l, c, u + d * r), n.divisor !== void 0 && e.vertexAttribDivisor(t + r, n.divisor);
	};
}
var K = {};
K[Tv] = {
	size: 4,
	setter: Hy
}, K[Ev] = {
	size: 8,
	setter: Hy
}, K[Dv] = {
	size: 12,
	setter: Hy
}, K[Ov] = {
	size: 16,
	setter: Hy
}, K[kv] = {
	size: 4,
	setter: Uy
}, K[Av] = {
	size: 8,
	setter: Uy
}, K[jv] = {
	size: 12,
	setter: Uy
}, K[Mv] = {
	size: 16,
	setter: Uy
}, K[$v] = {
	size: 4,
	setter: Wy
}, K[ey] = {
	size: 8,
	setter: Wy
}, K[ty] = {
	size: 12,
	setter: Wy
}, K[ny] = {
	size: 16,
	setter: Wy
}, K[Nv] = {
	size: 4,
	setter: Uy
}, K[Pv] = {
	size: 8,
	setter: Uy
}, K[Fv] = {
	size: 12,
	setter: Uy
}, K[Iv] = {
	size: 16,
	setter: Uy
}, K[Lv] = {
	size: 4,
	setter: Gy,
	count: 2
}, K[Rv] = {
	size: 9,
	setter: Gy,
	count: 3
}, K[zv] = {
	size: 16,
	setter: Gy,
	count: 4
};
function Ky(e) {
	let t = e.name;
	return t.startsWith("gl_") || t.startsWith("webgl_");
}
var qy = /(\.|\[|]|\w+)/g, Jy = (e) => e >= "0" && e <= "9";
function Yy(e, t, n, r) {
	let i = e.split(qy).filter((e) => e !== ""), a = 0, o = "";
	for (;;) {
		let e = i[a++];
		o += e;
		let s = Jy(e[0]), c = s ? parseInt(e) : e;
		if (s && (o += i[a++]), a === i.length) {
			n[c] = t;
			break;
		} else {
			let e = i[a++], t = e === "[", s = n[c] || (t ? [] : {});
			n[c] = s, n = s, r[o] = r[o] || function(e) {
				return function(t) {
					sb(e, t);
				};
			}(s), o += e;
		}
	}
}
function Xy(e, t) {
	let n = 0;
	function r(t, r, i) {
		let a = r.name.endsWith("[0]"), o = r.type, s = G[o];
		if (!s) throw Error(`unknown type: 0x${o.toString(16)}`);
		let c;
		if (s.bindPoint) {
			let t = n;
			n += r.size, c = a ? s.arraySetter(e, o, t, i, r.size) : s.setter(e, o, t, i, r.size);
		} else c = s.arraySetter && a ? s.arraySetter(e, i) : s.setter(e, i);
		return c.location = i, c;
	}
	let i = {}, a = {}, o = e.getProgramParameter(t, _v);
	for (let n = 0; n < o; ++n) {
		let o = e.getActiveUniform(t, n);
		if (Ky(o)) continue;
		let s = o.name;
		s.endsWith("[0]") && (s = s.substr(0, s.length - 3));
		let c = e.getUniformLocation(t, o.name);
		if (c) {
			let e = r(t, o, c);
			i[s] = e, Yy(s, e, a, i);
		}
	}
	return i;
}
function Zy(e, t) {
	let n = {}, r = e.getProgramParameter(t, yv);
	for (let i = 0; i < r; ++i) {
		let r = e.getTransformFeedbackVarying(t, i);
		n[r.name] = {
			index: i,
			type: r.type,
			size: r.size
		};
	}
	return n;
}
function Qy(e, t) {
	let n = e.getProgramParameter(t, _v), r = [], i = [];
	for (let a = 0; a < n; ++a) {
		i.push(a), r.push({});
		let n = e.getActiveUniform(t, a);
		r[a].name = n.name;
	}
	[
		["UNIFORM_TYPE", "type"],
		["UNIFORM_SIZE", "size"],
		["UNIFORM_BLOCK_INDEX", "blockNdx"],
		["UNIFORM_OFFSET", "offset"]
	].forEach(function(n) {
		let a = n[0], o = n[1];
		e.getActiveUniforms(t, i, e[a]).forEach(function(e, t) {
			r[t][o] = e;
		});
	});
	let a = {}, o = e.getProgramParameter(t, bv);
	for (let n = 0; n < o; ++n) {
		let r = e.getActiveUniformBlockName(t, n), i = {
			index: e.getUniformBlockIndex(t, r),
			usedByVertexShader: e.getActiveUniformBlockParameter(t, n, xv),
			usedByFragmentShader: e.getActiveUniformBlockParameter(t, n, Sv),
			size: e.getActiveUniformBlockParameter(t, n, Cv),
			uniformIndices: e.getActiveUniformBlockParameter(t, n, wv)
		};
		i.used = i.usedByVertexShader || i.usedByFragmentShader, a[r] = i;
	}
	return {
		blockSpecs: a,
		uniformData: r
	};
}
var $y = /\[\d+\]\.$/, eb = (e, t) => ((e + (t - 1)) / t | 0) * t;
function tb(e, t, n, r) {
	if (t || n) {
		r ||= 1;
		let t = e.length / 4;
		return function(n) {
			let i = 0, a = 0;
			for (let o = 0; o < t; ++o) {
				for (let t = 0; t < r; ++t) e[i++] = n[a++];
				i += 4 - r;
			}
		};
	} else return function(t) {
		t.length ? e.set(t) : e[0] = t;
	};
}
function nb(e, t, n, r) {
	let i = n.blockSpecs, a = n.uniformData, o = i[r];
	if (!o) return dv("no uniform block object named:", r), {
		name: r,
		uniforms: {}
	};
	let s = new ArrayBuffer(o.size), c = e.createBuffer(), l = o.index;
	e.bindBuffer(gv, c), e.uniformBlockBinding(t, o.index, l);
	let u = r + ".";
	$y.test(u) && (u = u.replace($y, "."));
	let d = {}, f = {}, p = {};
	return o.uniformIndices.forEach(function(e) {
		let t = a[e], n = t.name;
		n.startsWith(u) && (n = n.substr(u.length));
		let r = n.endsWith("[0]");
		r && (n = n.substr(0, n.length - 3));
		let i = G[t.type], o = i.Type, c = r ? eb(i.size, 16) * t.size : i.size * t.size, l = new o(s, t.offset, c / o.BYTES_PER_ELEMENT);
		d[n] = l;
		let m = tb(l, r, i.rows, i.cols);
		f[n] = m, Yy(n, m, p, f);
	}), {
		name: r,
		array: s,
		asFloat: new Float32Array(s),
		buffer: c,
		uniforms: d,
		setters: f
	};
}
function rb(e, t, n) {
	return nb(e, t.program, t.uniformBlockSpec, n);
}
function ib(e, t, n) {
	let r = (t.uniformBlockSpec || t).blockSpecs[n.name];
	if (r) {
		let t = r.index;
		return e.bindBufferRange(gv, t, n.buffer, n.offset || 0, n.array.byteLength), !0;
	}
	return !1;
}
function ab(e, t, n) {
	ib(e, t, n) && e.bufferData(gv, n.array, pv);
}
function ob(e, t) {
	let n = e.setters;
	for (let e in t) {
		let r = n[e];
		if (r) {
			let n = t[e];
			r(n);
		}
	}
}
function sb(e, t) {
	for (let n in t) {
		let r = e[n];
		typeof r == "function" ? r(t[n]) : sb(e[n], t[n]);
	}
}
function cb(e, ...t) {
	let n = e.uniformSetters || e, r = t.length;
	for (let e = 0; e < r; ++e) {
		let r = t[e];
		if (Array.isArray(r)) {
			let e = r.length;
			for (let t = 0; t < e; ++t) cb(n, r[t]);
		} else for (let e in r) {
			let t = n[e];
			t && t(r[e]);
		}
	}
}
function lb(e, t) {
	let n = {}, r = e.getProgramParameter(t, vv);
	for (let i = 0; i < r; ++i) {
		let r = e.getActiveAttrib(t, i);
		if (Ky(r)) continue;
		let a = e.getAttribLocation(t, r.name), o = K[r.type], s = o.setter(e, a, o);
		s.location = a, n[r.name] = s;
	}
	return n;
}
function ub(e, t) {
	for (let n in t) {
		let r = e[n];
		r && r(t[n]);
	}
}
function db(e, t, n) {
	n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (ub(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(hv, n.indices));
}
function fb(e, t) {
	let n = {
		program: t,
		uniformSetters: Xy(e, t),
		attribSetters: lb(e, t)
	};
	return xh(e) && (n.uniformBlockSpec = Qy(e, t), n.transformFeedbackInfo = Zy(e, t)), n;
}
var pb = 4, mb = 5123;
function hb(e, t, n, r, i, a) {
	n = n === void 0 ? pb : n;
	let o = t.indices, s = t.elementType, c = r === void 0 ? t.numElements : r;
	i = i === void 0 ? 0 : i, s || o ? a === void 0 ? e.drawElements(n, c, s === void 0 ? mb : t.elementType, i) : e.drawElementsInstanced(n, c, s === void 0 ? mb : t.elementType, i, a) : a === void 0 ? e.drawArrays(n, i, c) : e.drawArraysInstanced(n, i, c, a);
}
var gb = 36160, _b = 36161, vb = 3553, yb = 5121, bb = 6402, xb = 6408, Sb = 33190, Cb = 36012, wb = 35056, Tb = 36013, Eb = 32854, Db = 32855, Ob = 36194, kb = 33189, Ab = 6401, jb = 36168, Mb = 34041, Nb = 36064, Pb = 36096, Fb = 36128, Ib = 33306, Lb = 33071, Rb = 9729, zb = [{
	format: xb,
	type: yb,
	min: Rb,
	wrap: Lb
}, { format: Mb }], Bb = {};
Bb[Mb] = Ib, Bb[Ab] = Fb, Bb[jb] = Fb, Bb[bb] = Pb, Bb[kb] = Pb, Bb[Sb] = Pb, Bb[Cb] = Pb, Bb[wb] = Ib, Bb[Tb] = Ib;
function Vb(e, t) {
	return Bb[e] || Bb[t];
}
var Hb = {};
Hb[Eb] = !0, Hb[Db] = !0, Hb[Ob] = !0, Hb[Mb] = !0, Hb[kb] = !0, Hb[Ab] = !0, Hb[jb] = !0;
function Ub(e) {
	return Hb[e];
}
var Wb = 32;
function Gb(e) {
	return e >= Nb && e < Nb + Wb;
}
function Kb(e, t, n, r) {
	let i = gb, a = e.createFramebuffer();
	e.bindFramebuffer(i, a), n ||= e.drawingBufferWidth, r ||= e.drawingBufferHeight, t ||= zb;
	let o = [], s = {
		framebuffer: a,
		attachments: [],
		width: n,
		height: r
	};
	return t.forEach(function(t, a) {
		let c = t.attachment, l = t.samples, u = t.format, d = t.attachmentPoint || Vb(u, t.internalFormat);
		if (d ||= Nb + a, Gb(d) && o.push(d), !c) if (l !== void 0 || Ub(u)) c = e.createRenderbuffer(), e.bindRenderbuffer(_b, c), l > 1 ? e.renderbufferStorageMultisample(_b, l, u, n, r) : e.renderbufferStorage(_b, u, n, r);
		else {
			let i = Object.assign({}, t);
			i.width = n, i.height = r, i.auto === void 0 && (i.auto = !1, i.min = i.min || i.minMag || Rb, i.mag = i.mag || i.minMag || Rb, i.wrapS = i.wrapS || i.wrap || Lb, i.wrapT = i.wrapT || i.wrap || Lb), c = lv(e, i);
		}
		if (Um(e, c)) e.framebufferRenderbuffer(i, d, _b, c);
		else if (Wm(e, c)) t.layer === void 0 ? e.framebufferTexture2D(i, d, t.target || vb, c, t.level || 0) : e.framebufferTextureLayer(i, d, c, t.level || 0, t.layer);
		else throw Error("unknown attachment type");
		s.attachments.push(c);
	}), e.drawBuffers && e.drawBuffers(o), s;
}
function qb(e, t, n, r, i) {
	r ||= e.drawingBufferWidth, i ||= e.drawingBufferHeight, t.width = r, t.height = i, n ||= zb, n.forEach(function(n, a) {
		let o = t.attachments[a], s = n.format, c = n.samples;
		if (c !== void 0 || Um(e, o)) e.bindRenderbuffer(_b, o), c > 1 ? e.renderbufferStorageMultisample(_b, c, s, r, i) : e.renderbufferStorage(_b, s, r, i);
		else if (Wm(e, o)) uv(e, o, n, r, i);
		else throw Error("unknown attachment type");
	});
}
function Jb(e, t, n) {
	let r = e.createVertexArray();
	return e.bindVertexArray(r), t.length || (t = [t]), t.forEach(function(t) {
		db(e, t, n);
	}), e.bindVertexArray(null), {
		numElements: n.numElements,
		elementType: n.elementType,
		vertexArrayObject: r
	};
}
var Yb = { addExtensionsToContext: !0 }, Xb = /^(.*?)_/;
function Zb(e, t) {
	Sh(e, 0);
	let n = e.getExtension(t);
	if (n) {
		let r = {}, i = Xb.exec(t)[1], a = "_" + i;
		for (let t in n) {
			let o = n[t], s = typeof o == "function", c = s ? i : a, l = t;
			t.endsWith(c) && (l = t.substring(0, t.length - c.length)), e[l] === void 0 ? s ? e[l] = function(e) {
				return function() {
					return e.apply(n, arguments);
				};
			}(o) : (e[l] = o, r[l] = o) : !s && e[l] !== o && Vm(l, e[l], o, t);
		}
		r.constructor = { name: n.constructor.name }, Sh(r, 0);
	}
	return n;
}
var Qb = [
	"ANGLE_instanced_arrays",
	"EXT_blend_minmax",
	"EXT_color_buffer_float",
	"EXT_color_buffer_half_float",
	"EXT_disjoint_timer_query",
	"EXT_disjoint_timer_query_webgl2",
	"EXT_frag_depth",
	"EXT_sRGB",
	"EXT_shader_texture_lod",
	"EXT_texture_filter_anisotropic",
	"OES_element_index_uint",
	"OES_standard_derivatives",
	"OES_texture_float",
	"OES_texture_float_linear",
	"OES_texture_half_float",
	"OES_texture_half_float_linear",
	"OES_vertex_array_object",
	"WEBGL_color_buffer_float",
	"WEBGL_compressed_texture_atc",
	"WEBGL_compressed_texture_etc1",
	"WEBGL_compressed_texture_pvrtc",
	"WEBGL_compressed_texture_s3tc",
	"WEBGL_compressed_texture_s3tc_srgb",
	"WEBGL_depth_texture",
	"WEBGL_draw_buffers"
];
function $b(e) {
	for (let t = 0; t < Qb.length; ++t) Zb(e, Qb[t]);
}
function ex(e, t) {
	let n = [
		"webgl2",
		"webgl",
		"experimental-webgl"
	], r = null;
	for (let i = 0; i < n.length; ++i) if (r = e.getContext(n[i], t), r) {
		Yb.addExtensionsToContext && $b(r);
		break;
	}
	return r;
}
function tx(e, t) {
	return ex(e, t);
}
//#endregion
//#region src/marks/rect.vertex.glsl
var nx = "flat out lowp vec4 vFillColor;flat out lowp vec4 vStrokeColor;flat out float vHalfStrokeWidth;flat out vec4 vCornerRadii;\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\nout vec2 vPosInPixels;\n#endif\nflat out vec2 vHalfSizeInPixels;/***Adjusts the vertex position to ensure that the rectangle is at least `minSpan`*wide or high. Returns a value that reflects the amount of clamping and can be*used to adjust the opacity of the rectangle.**pos: vertex position*frac: vertex position within the rectangle,[0,1]*size: width or height of the rectangle*minSize: minimum width or height of the rectangle*/float clampMinSize(inout float pos,float frac,float size,float minSize){if(minSize>0.0&&size<minSize){pos+=(frac-0.5)*(minSize-size);return size/minSize;}return 1.0;}void sort(inout float a,inout float b){if(a>b){float tmp=b;b=a;a=tmp;}}/***The vertex position wrt the rectangle specified by(x,x2,y,y2).*[0,0]=[x,y],[1,1]=[x2,y2].*The x or y component may contain fractional values if the rectangle*have been tessellated.*/vec2 getVertexPos(){int index=gl_VertexID % 6;return vec2(index==0||index==1||index==3 ? 0.0 : 1.0,index==0||index==1||index==2 ? 0.0 : 1.0);}void main(void){vec2 frac=getVertexPos();vec2 normalizedMinSize=vec2(uMinWidth,uMinHeight)/uViewportSize;vec4 cornerRadii=vec4(uCornerRadiusTopRight,uCornerRadiusBottomRight,uCornerRadiusTopLeft,uCornerRadiusBottomLeft);float x=getScaled_x();float x2=getScaled_x2();float y=getScaled_y();float y2=getScaled_y2();sort(x,x2);sort(y,y2);float clampMargin=1.0;vec2 pos1=vec2(clamp(x,0.0-clampMargin,1.0+clampMargin),y);vec2 pos2=vec2(clamp(x2,0.0-clampMargin,1.0+clampMargin),y2);vec2 size=pos2-pos1;if(size.x<=0.0||size.y<=0.0){gl_Position=vec4(0.0,0.0,0.0,1.0);return;}vec2 pos=pos1+frac*size;size.y*=getSampleFacetHeight(pos);float opaFactor=uViewOpacity*max(uMinOpacity,clampMinSize(pos.x,frac.x,size.x,normalizedMinSize.x)*clampMinSize(pos.y,frac.y,size.y,normalizedMinSize.y));size=max(size,normalizedMinSize);pos=applySampleFacet(pos);\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\nfloat aaPadding=1.0/uDevicePixelRatio;float shadowPadding=uShadowBlur+max(abs(uShadowOffsetX),abs(uShadowOffsetY));float strokeWidth=getScaled_strokeWidth();float strokeOpacity=getScaled_strokeOpacity()*opaFactor;vec2 centeredFrac=frac-0.5;vec2 expand=centeredFrac*(strokeWidth+aaPadding+shadowPadding*2.0)/uViewportSize;pos+=expand;vec2 sizeInPixels=size*uViewportSize;vPosInPixels=(centeredFrac+expand/size)*sizeInPixels;vHalfSizeInPixels=sizeInPixels/2.0;vCornerRadii=min(cornerRadii,min(vHalfSizeInPixels.x,vHalfSizeInPixels.y));vHalfStrokeWidth=strokeWidth/2.0;vStrokeColor=vec4(getScaled_stroke()*strokeOpacity,strokeOpacity);\n#endif\ngl_Position=unitToNdc(pos);float fillOpacity=getScaled_fillOpacity()*opaFactor;vFillColor=vec4(getScaled_fill()*fillOpacity,fillOpacity);setupPicking();}", rx = "#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\nin vec2 vPosInPixels;\n#endif\nflat in vec2 vHalfSizeInPixels;flat in lowp vec4 vFillColor;flat in lowp vec4 vStrokeColor;flat in float vHalfStrokeWidth;flat in vec4 vCornerRadii;out lowp vec4 fragColor;\n#ifdef SHADOW\nfloat gaussian(float x,float sigma){const float pi=3.141592653589793;return exp(-(x*x)/(2.0*sigma*sigma))/(sqrt(2.0*pi)*sigma);}vec2 erf(vec2 x){vec2 s=sign(x),a=abs(x);x=1.0+(0.278393+(0.230389+0.078108*(a*a))*a)*a;x*=x;return s-s/(x*x);}float roundedBoxShadowX(float x,float y,float sigma,float corner,vec2 halfSize){float delta=min(halfSize.y-corner-abs(y),0.0);float curved=halfSize.x-corner+sqrt(max(0.0,corner*corner-delta*delta));vec2 integral=0.5+0.5*erf((x+vec2(-curved,curved))*(sqrt(0.5)/sigma));return integral.y-integral.x;}float roundedBoxShadow(vec2 lower,vec2 upper,vec2 point,float sigma,float corner){vec2 center=(lower+upper)*0.5;vec2 halfSize=(upper-lower)*0.5;point-=center;float low=point.y-halfSize.y;float high=point.y+halfSize.y;float start=clamp(-3.0*sigma,low,high);float end=clamp(3.0*sigma,low,high);float step=(end-start)/4.0;float y=start+step*0.5;float value=0.0;for(int i=0;i<4;i++){value+=roundedBoxShadowX(point.x,point.y-y,sigma,corner,halfSize)*gaussian(y,sigma)*step;y+=step;}return value;}\n#endif\nfloat sdRoundedBox(vec2 p,vec2 b,vec4 r){r.xy=p.x>0.0 ? r.xy : r.zw;r.x=p.y>0.0 ? r.x  : r.y;vec2 q=abs(p)-b+r.x;return min(max(q.x,q.y),0.0)+length(max(q,0.0))-r.x;}float sdSharpBox(vec2 p,vec2 b){vec2 q=abs(p)-b;return max(q.x,q.y);}float diagonalPattern(vec2 uv,float spacing){float divisor=spacing*vHalfStrokeWidth*2.0*1.5;return abs(mod(uv.x-uv.y,divisor)-0.5*divisor)/1.5;}float verticalPattern(float x,float spacing){float divisor=spacing*vHalfStrokeWidth*2.0;return abs(mod(x,divisor))/2.0;}float circle(vec2 p,float r){return length(p)-r;}float masonryCirclePattern(vec2 uv,float spacing,float radius){float halfSpacing=0.5*spacing;float row=floor(uv.y/spacing);float shift=mod(row,2.0)*halfSpacing;vec2 shifted=vec2(uv.x+shift,uv.y+halfSpacing);vec2 cell=mod(shifted+0.5*spacing,spacing)-halfSpacing;return abs(circle(cell,radius));}/***Patterns:*0 none*1 diagonal(/)*2 antiDiagonal(\\)*3 cross(X)*4 vertical(|)*5 horizontal(-)*6 grid(+)*7 dots(.)*8 rings(o)*9 ringsLarge(O)*/float pattern(){\n#ifdef STROKED\nint patternType=uHatchPattern;vec2 uv=vPosInPixels;float spacing=4.0;switch(patternType){case 1:return diagonalPattern(vec2(uv.x,-uv.y),spacing);case 2:return diagonalPattern(uv,spacing);case 3:return min(diagonalPattern(uv,spacing),diagonalPattern(vec2(uv.x,-uv.y),spacing));case 4:return verticalPattern(uv.x,spacing);case 5:return verticalPattern(uv.y,spacing);case 6:return min(verticalPattern(uv.x,spacing),verticalPattern(uv.y,spacing));case 7:case 8:case 9:{float spacing=vHalfStrokeWidth*14.0;float radius=spacing*(patternType==8 ? 0.2 :patternType==9 ? 0.35 :0.07);return masonryCirclePattern(uv,spacing,radius);}default:break;}\n#endif\nreturn 1.0/0.0;}void main(void){\n#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)\n#ifdef ROUNDED_CORNERS\nfloat d=sdRoundedBox(vPosInPixels,vHalfSizeInPixels,vCornerRadii);\n#else\nfloat d=sdSharpBox(vPosInPixels,vHalfSizeInPixels);\n#endif\nvec4 backgroundColor=vec4(0.0,0.0,0.0,0.0);\n#ifdef SHADOW\nfloat maxCornerRadius=max(vCornerRadii.x,max(vCornerRadii.y,max(vCornerRadii.z,vCornerRadii.w)));float shadow=0.0;if(d>=vHalfStrokeWidth-1.0&&uShadowOpacity>0.0){shadow=roundedBoxShadow(-vHalfSizeInPixels-vHalfStrokeWidth,vHalfSizeInPixels+vHalfStrokeWidth,vPosInPixels-vec2(uShadowOffsetX,-uShadowOffsetY),max(uShadowBlur/2.5,0.25),maxCornerRadius+vHalfStrokeWidth)*uShadowOpacity*uViewOpacity;}backgroundColor=vec4(uShadowColor*shadow,shadow);\n#endif\nif(vHalfStrokeWidth>0.0&&uHatchPattern>0){d=max(d,-pattern());}fragColor=distanceToColor(d,vFillColor,vStrokeColor,backgroundColor,vHalfStrokeWidth);if(uPickingEnabled){if(d<vHalfStrokeWidth){fragColor=vPickingColor;}}else if(fragColor.a==0.0){discard;}\n#else\nfragColor=vFillColor;if(uPickingEnabled){fragColor=vPickingColor;}\n#endif\n}", ix = "layout(std140)uniform Mark{uniform float uMinWidth;uniform float uMinHeight;uniform float uMinOpacity;uniform float uCornerRadiusTopRight;uniform float uCornerRadiusBottomRight;uniform float uCornerRadiusTopLeft;uniform float uCornerRadiusBottomLeft;uniform int uHatchPattern;uniform vec3 uShadowColor;uniform float uShadowOpacity;uniform float uShadowBlur;uniform float uShadowOffsetX;uniform float uShadowOffsetY;\n#pragma markUniforms\n};", ax = 1e4, ox = class {
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
		if (!Ot(this.size)) throw Error("The number of vertices must be defined!");
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
		if (this.size > ax) {
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
		if (this.size > ax) {
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
}, sx = 127;
function cx(e) {
	let t = [];
	for (let e = 0; e <= sx; e++) t.push(void 0);
	let n = /* @__PURE__ */ new Map();
	for (let r of e.chars) r.id <= sx ? t[r.id] = r : n.set(r.id, r);
	let r = 8722;
	n.has(r) || n.set(r, t[45]);
	function i(e) {
		return (e <= sx ? t[e] : n.get(e)) || t[63];
	}
	function a(e) {
		return i(e.charCodeAt(0));
	}
	let o = e.common.base, s = a("x"), c = a("X"), l = a("q"), u = s.height - 10, d = c.height - 10, f = l.height - s.height + l.yoffset - s.yoffset;
	function p(e, t = 1) {
		let n = 0;
		for (let t = 0; t < e.length; t++) n += i(e.charCodeAt(t)).xadvance;
		return n / o * t;
	}
	return {
		measureWidth: p,
		getCharByCode: i,
		getChar: a,
		xHeight: u,
		capHeight: d,
		descent: f,
		common: e.common
	};
}
//#endregion
//#region src/utils/scaleNull.js
function lx() {
	let e = (e) => e;
	return e.invert = (e) => e, e.copy = lx, e.invertRange = () => {}, e.type = "null", e;
}
//#endregion
//#region src/gl/hashTable.js
var ux = 4294967295, dx = 4294967295;
function fx(e) {
	let t = e >>> 0;
	return t ^= t >>> 16, t = Math.imul(t, 2146121005), t ^= t >>> 15, t = Math.imul(t, 2221713035), t ^= t >>> 16, t >>> 0;
}
function px(e, t = {}) {
	let n = Array.from(e, (e) => hx(e, "key")), r = n.length, i = t.maxLoadFactor ?? .6;
	if (!(i > 0 && i < 1)) throw Error("maxLoadFactor must be between 0 and 1.");
	let a = t.capacity ?? gx(Math.ceil(r / i));
	if (!Number.isSafeInteger(a) || a < 1) throw Error("capacity must be a positive power of two.");
	if (a & a - 1) throw Error("capacity must be a power of two.");
	let o = new Uint32Array(a);
	o.fill(ux);
	let s = a - 1;
	for (let e of n) {
		if (e === 4294967295) throw Error("Hash table keys must not equal the empty sentinel (0xffffffff).");
		let t = fx(e) & s, n = !1;
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
function mx(e, t) {
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
function hx(e, t) {
	if (!Number.isSafeInteger(e) || e < 0 || e > dx) throw Error(t + " must be a non-negative u32.");
	return e >>> 0;
}
function gx(e) {
	let t = Math.max(1, e);
	return --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1;
}
//#endregion
//#region src/gl/canvasSizeHelper.js
var _x = class {
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
		let e = this._sizeSource(), t = window.getComputedStyle(this._container, null), n = this._container.getBoundingClientRect(), r = parseFloat(t.paddingLeft), i = parseFloat(t.paddingRight), a = parseFloat(t.paddingTop), o = parseFloat(t.paddingBottom), s = parseFloat(t.borderLeftWidth), c = parseFloat(t.borderRightWidth), l = parseFloat(t.borderTopWidth), u = parseFloat(t.borderBottomWidth);
		return this._logicalCanvasSize = {
			width: e.width ?? n.width - r - i - s - c,
			height: e.height ?? n.height - a - o - l - u
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
}, vx = class {
	constructor(e, t, n = {}) {
		let r = t ?? (() => ({
			width: void 0,
			height: void 0
		}));
		this._canvasSizeHelper = void 0, this._appliedCanvasSize = void 0, this._shaderCache = /* @__PURE__ */ new Map(), this.rangeTextures = /* @__PURE__ */ new WeakMap(), this.selectionTextures = /* @__PURE__ */ new WeakMap();
		let i = document.createElement("canvas");
		e.appendChild(i);
		let a = tx(i, {
			antialias: !0,
			depth: !1,
			premultipliedAlpha: !0,
			...n
		});
		if (!a) throw Error("Unable to initialize WebGL. Your browser or machine may not support it.");
		if (!xh(a)) throw Error("Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.");
		$b(a);
		let o = a.getExtension("WEBGL_provoking_vertex");
		o && o.provokingVertexWEBGL(o.FIRST_VERTEX_CONVENTION_WEBGL), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), this.canvas = i, this.gl = a, this._pickingAttachmentOptions = [{
			format: a.RGBA,
			type: a.UNSIGNED_BYTE,
			minMag: a.LINEAR,
			wrap: a.CLAMP_TO_EDGE
		}], this._pickingBufferInfo = Kb(a, this._pickingAttachmentOptions), a.bindFramebuffer(a.FRAMEBUFFER, null), this._canvasSizeHelper = new _x(e, i, r, () => this.adjustGl()), this.adjustGl();
	}
	invalidateSize() {
		this._canvasSizeHelper.invalidate(), this.adjustGl();
	}
	compileShader(e, t) {
		E(t) && (t = t.join("\n\n"));
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
		this._appliedCanvasSize && this._appliedCanvasSize.logicalWidth == e.width && this._appliedCanvasSize.logicalHeight == e.height && this._appliedCanvasSize.physicalWidth == t.width && this._appliedCanvasSize.physicalHeight == t.height || (this.canvas.style.width = `${e.width}px`, this.canvas.style.height = `${e.height}px`, this.canvas.width = t.width, this.canvas.height = t.height, qb(this.gl, this._pickingBufferInfo, this._pickingAttachmentOptions), this._appliedCanvasSize = {
			logicalWidth: e.width,
			logicalHeight: e.height,
			physicalWidth: t.width,
			physicalHeight: t.height
		});
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
			return fd(t.type) ? t.domain().length : t.type == "threshold" ? t.domain().length + 1 : t.type == "quantize" || t.type == "quantile" ? e ?? 4 : e;
		}
		let i = e.channel;
		if (Vf(i)) {
			let t = e.getScale(), i = t.props, a = t.range(), o;
			if (i.scheme) if (t.type == "threshold" && a) o = Dx(a, this.gl, t.domain().length, n);
			else {
				let e = O(i.scheme) ? void 0 : i.scheme.count;
				e = r(e, t), o = wx(i.scheme, this.gl, e, n, !!i.reverse);
			}
			else o = hd(t.type) || R(t.type) && a.length > 1 ? Tx(a, i.interpolate, this.gl, n) : Dx(a, this.gl, t.domain().length, n);
			this.rangeTextures.set(t, o);
		} else {
			let t = e.getScale();
			if (t.type === "ordinal" || pd(t.type)) {
				let e = Hf(i) ? Gf(i) : (e) => e, r = t.range();
				this.rangeTextures.set(t, Ex(r.map(e), this.gl, t.domain().length, n));
			}
		}
	}
	createSelectionTexture(e, t = !0) {
		if (!$f(e)) throw Error("Not a multi-point selection, cannot create texture");
		let { table: n, capacity: r } = px(e.data.keys()), { width: i, height: a } = mx(r, this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)), o = this.selectionTextures.get(e), s = this.gl, c = xx(this.gl, {
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
function yx(e, t = "", n = 0) {
	let r = [...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)], i = new Map(r.map((e, n) => {
		let i = parseInt(e[1]), a = r[n + 1], o = a ? a.index : t.length, s = t.substring(e.index, o);
		return [i - 1, s];
	}));
	return e.split("\n").map((e, t) => {
		let r = i.get(t);
		return `${t + 1 + n}: ${e}${r ? `\n\n^^^ ${r}` : ""}`;
	}).join("\n");
}
function bx(e, t, n) {
	let r = e.createProgram();
	e.attachShader(r, t), e.attachShader(r, n), e.linkProgram(r);
	function i() {
		let i, a;
		if (!e.getProgramParameter(r, e.LINK_STATUS)) {
			i = e.getProgramInfoLog(r);
			for (let r of [t, n]) e.getShaderParameter(r, e.COMPILE_STATUS) || (i = e.getShaderInfoLog(r), a = yx(e.getShaderSource(r), i, 0) + `\nError compiling: ${i}`, e.deleteShader(r));
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
function xx(e, t, n, r) {
	return r ? sv(e, r, n, t) : r = lv(e, {
		...t,
		src: n
	}), r;
}
function Sx(e, t, n, r) {
	let { height: i, framebuffer: a } = t, o = new Uint8Array(4);
	return e.bindFramebuffer(e.FRAMEBUFFER, a), e.readPixels(n, i - r - 1, 1, 1, e.RGBA, e.UNSIGNED_BYTE, o), e.bindFramebuffer(e.FRAMEBUFFER, null), o;
}
function Cx(e, t, n = "image/png") {
	let { width: r, height: i } = t, a = new Uint8Array(r * i * 4);
	e.bindFramebuffer(e.FRAMEBUFFER, t.framebuffer), e.readPixels(0, 0, r, i, e.RGBA, e.UNSIGNED_BYTE, a), e.bindFramebuffer(e.FRAMEBUFFER, null);
	let o = document.createElement("canvas");
	o.width = r, o.height = i;
	let s = o.getContext("2d"), c = s.createImageData(r, i);
	for (let e = 0; e < i; e++) {
		let t = (i - 1 - e) * r * 4, n = e * r * 4;
		c.data.set(a.subarray(t, t + r * 4), n);
	}
	return s.putImageData(c, 0, 0), o.toDataURL(n);
}
//#endregion
//#region src/gl/colorUtils.js
function wx(e, t, n, r, i = !1) {
	let a = O(e) ? e : e.name, o = !O(e) && e.extent || [0, 1];
	if (n === void 0 && !O(e) && (n = e.count), a) {
		let e = Ed(a);
		if (gt(e)) {
			let a = Ox(e, {
				extent: o,
				count: n,
				reverse: i
			});
			return xx(t, {
				minMag: t.LINEAR,
				format: t.RGB,
				height: 1,
				wrap: t.CLAMP_TO_EDGE
			}, a, r);
		} else if (E(e)) return Dx(i ? Array.from(e).reverse() : e, t, n, r);
		else throw Error("Unknown scheme: " + a);
	}
}
function Tx(e, t = "rgb", n, r) {
	let i = Ox(_d(e, O(t) ? t : t.type, O(t) ? void 0 : t.gamma));
	return xx(n, {
		minMag: n.LINEAR,
		format: n.RGB,
		height: 1,
		wrap: n.CLAMP_TO_EDGE
	}, i, r);
}
function Ex(e, t, n, r) {
	let i = Math.max(e.length, n || 0), a = new Float32Array(i);
	for (let t = 0; t < i; t++) a[t] = e[t % e.length];
	return xx(t, {
		minMag: t.NEAREST,
		format: t.RED,
		internalFormat: t.R32F,
		height: 1
	}, a, r);
}
function Dx(e, t, n, r) {
	let i = kx(e, n);
	return xx(t, {
		minMag: t.NEAREST,
		format: t.RGB,
		height: 1
	}, i, r);
}
function Ox(e, { extent: t = [0, 1], reverse: n = !1, count: r = 256 } = {}) {
	let i = t[0], a = Yo(t) - i, o = Kn(r).map((e) => e / (r - 1)).map((e) => i + e / a).map(e);
	return n && o.reverse(), kx(o);
}
function kx(e, t) {
	let n = Math.max(e.length, t || 0), r = new Uint8Array(n * 3);
	for (let t = 0; t < n; t++) {
		let n = e[t % e.length], i = xs(n);
		if (!i) throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);
		let a = i.rgb();
		r[t * 3 + 0] = a.r, r[t * 3 + 1] = a.g, r[t * 3 + 2] = a.b;
	}
	return r;
}
function Ax(e) {
	let t = xs(e).rgb();
	return [
		t.r,
		t.g,
		t.b
	].map((e) => e / 255);
}
//#endregion
//#region src/gl/glslScaleGenerator.js
var jx = "attr_", Mx = "uDomain_", Nx = "range_", Px = "accessor_", Fx = "scale_", Ix = "getScaled_", Lx = "uRangeTexture_", Rx = "uParam_", zx = "checkSelection_", Bx = 3402823466e29;
function Vx(e) {
	let t = e.match(/^(?:(\w+)-)?(\w+)$/);
	if (!t) throw Error("Not a scale type: " + e);
	return {
		family: t[1] || "continuous",
		transform: t[2]
	};
}
function Hx(e, t) {
	return `${Px}${e}_${t}`;
}
function Ux(e, t, n) {
	let r;
	if (Hf(e)) r = Xx(Gf(e)(n));
	else if (O(n)) if (Vf(e)) r = $x(n);
	else throw Error(`String values are not supported on the "${e}" channel: ${n}`);
	else if (Tt(n)) r = Xx(n ? 1 : 0);
	else if (n === null) if (Vf(e)) r = Xx([
		0,
		0,
		0
	]);
	else throw Error(`null value is not supported on the "${e}" chanel.`);
	else r = Xx(n);
	let i = Hx(e, t);
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
function Wx(e, t) {
	let n = "float", r = (e) => e;
	Vf(e) && (n = "vec3", r = (e) => Ax(e));
	let i = `u${dS(e)}_${t}`, a = `    // Dynamic value\n    uniform ${n} ${i};`, o = Hx(e, t);
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
function Gx(e, t, n, r = [e]) {
	let { attributeType: i } = nS(t, e), a = uS(r), o = `in highp ${i} ${a};`, s = Hx(e, n);
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
function Kx(e, t, n) {
	let { attributeType: r } = nS(t, e), i = uS(e), a = `    uniform highp ${r} ${i};`, o = Hx(e, n);
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
function qx(e, t, n) {
	t ??= lx();
	let r = Bf(e), i = Mx + r, a = Nx + r, { hp: o, attributeType: s } = nS(t, e), c = t.domain ? t.domain().length : void 0, l, u = [];
	u.push(""), u.push("/".repeat(70)), u.push(`// Channel: ${e}`), u.push("");
	let { transform: d } = Vx(t.type), f = (e, ...t) => tS.apply(null, [
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
		case "threshold": break;
		default: throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`);
	}
	let m = fS(t, e), h;
	if (m && e == r) {
		let e = t.props.range ?? [];
		if (V(e) || e.some(V)) {
			if (m.length < 1 || m.length > 4) throw Error(`A range with ExprRefs must have 1-4 elements, not ${m.length}! Range: ${JSON.stringify(m)}`);
			h = `    uniform ${Zx(m.length)} ${a};`;
		} else if (m.length && m.every(Ot)) {
			let e = eS(m);
			u.push(`const ${e.type} ${a} = ${e};`);
		}
	}
	let g = Qx(e), _;
	if (Vf(e)) {
		let n = Lx + r;
		if (e == r && u.push(`uniform sampler2D ${n};`), R(t.type)) _ = `getInterpolatedColor(${n}, transformed)`;
		else if (fd(t.type) || pd(t.type)) _ = `getDiscreteColor(${n}, int(transformed))`;
		else throw Error("Problem with color scale!");
	} else if (t.type === "ordinal" || pd(t.type)) {
		let t = Lx + r;
		e == r && u.push(`uniform sampler2D ${t};`), _ = `getDiscreteColor(${t}, int(transformed)).r`;
	}
	let v = [], y = R(t.type) && c > 2, b = pd(t.type) || y;
	if (v.push("int slot = 0;"), b) {
		let e = i;
		v.push(y ? `while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }` : `while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`);
	}
	let ee = R(t.type) || pd(t.type) || ["band", "point"].includes(t.type);
	if (p) {
		let e = i;
		ee && (o ? v.push(`vec3 domain = ${e};`) : v.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)), v.push(`float transformed = ${p};`), y && v.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`);
	} else v.push("float transformed = float(slot);");
	"clamp" in t && t.clamp() && v.push(`transformed = clampToRange(transformed, ${eS(m)});`), v.push(`return ${_ ?? "transformed"};`), u.push(`
${g} ${Fx}${e}(${s} value) {
${v.map((e) => `    ${e}\n`).join("")}
}`);
	let x = u.join("\n");
	if (ee && e == r) {
		let e = R(t.type) || pd(t.type) ? c : 2;
		l = o ? `    highp vec3 ${i};` : `    mediump float ${i}[${e}];`;
	}
	return {
		glsl: x,
		domainUniformName: i,
		domainUniform: l,
		rangeUniformName: a,
		rangeUniform: h
	};
}
function Jx(e, t) {
	let n = Qx(e), r = [], i = [];
	for (let n = 0; n < t.length; n++) {
		let { accessor: a, predicate: o } = t[n], s = Hx(e, n), { param: c, empty: l } = o;
		r.push(c ? `${zx}${c}(${!!l})` : null), i.push(a.scaleChannel ? `return ${Fx}${e}(${s}());` : `return ${s}();`);
	}
	return `${n} ${Ix}${e}() {
${pS(r, i)}
}

#define ${e}_DEFINED`;
}
function Yx(e) {
	if (!Ot(e)) throw Error(`Not a number: ${e}`);
	if (e == Infinity) return "" + Bx;
	if (e == -Infinity) return "" + -Bx;
	{
		let t = `${e}`;
		return /^(-)?\d+$/.test(t) && (t += ".0"), t;
	}
}
function Xx(e) {
	typeof e == "number" && (e = [e]);
	let t = e.length;
	if (t < 1 || t > 4) throw Error("Invalid number of components: " + t);
	let n = Zx(t), r = `${n}(${e.map(Yx).join(", ")})`;
	return Object.assign(r, {
		type: n,
		numComponents: t
	});
}
function Zx(e) {
	switch (e) {
		case 1: return "float";
		case 2: return "vec2";
		case 3: return "vec3";
		case 4: return "vec4";
		default: throw Error("Invalid number of components: " + e);
	}
}
function Qx(e) {
	return Vf(e) ? "vec3" : e == "uniqueId" ? "uint" : "float";
}
function $x(e) {
	return Xx(Ax(e));
}
function eS(e) {
	return Xx([e[0], Yo(e)]);
}
function tS(e, ...t) {
	let n = [];
	for (let e of t) Ot(e) ? n.push(Yx(e)) : E(e) ? n.push(Xx(e)) : n.push(e);
	return `${e}(${n.join(", ")})`;
}
function nS(e, t) {
	let n = e && fd(e.type), r = e && rS(e.type), i = r && iS(e.domain()), a = i ? {
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
function rS(e) {
	return e == "index" || e == "locus";
}
function iS(e) {
	return e[1] > 2 ** 32;
}
var aS = 2 ** 12;
aS - 1;
function oS(e, t = []) {
	let n = e % aS;
	return t[0] = (e - n) / aS, t[1] = n, t;
}
function sS(e) {
	let t = e % aS;
	return [e - t, t];
}
function cS(e) {
	return [...sS(e[0]), e[1] - e[0]];
}
function lS(e) {
	let t = new bn([], JSON.stringify);
	for (let [n, r] of Object.entries(e)) {
		let e = r.channelDef;
		if (Sf(e)) {
			let i = [e.field, r.scale ? (R(r.scale.type) || pd(r.scale.type)) ?? !1 : !1];
			t.set(i, [...t.get(i) ?? [], n]);
		}
	}
	return t;
}
function uS(e) {
	return jx + N(e).toSorted().join("_");
}
function dS(e) {
	return e[0].toUpperCase() + e.slice(1);
}
var fS = (e, t) => hd(e.type) || R(e.type) && Vf(t) ? [0, 1] : e.range ? e.range() : void 0;
function pS(e, t) {
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
//#region src/utils/indexer.js
function mS() {
	let e = 0, t, n = 0, r = /* @__PURE__ */ new Map(), i = (i) => i === t ? n : (n = r.get(i), n === void 0 && (n = e++, r.set(i, n)), t = i, n);
	return i.addAll = (e) => {
		for (let t of e) i(t);
	}, i.invert = (e) => {
		for (let t of r.entries()) if (t[1] == e) return t[0];
	}, i.domain = () => [...r.keys()], i;
}
//#endregion
//#region src/utils/clamp.js
function hS(e, t = 0, n = 1) {
	return Math.max(t, Math.min(n, e));
}
//#endregion
//#region src/gl/vertexRangeIndex.js
var gS = 2 ** 31 - 1, _S = -(2 ** 31);
function vS(e, t, n, r = n, i = 0, a = i) {
	if (a <= i || t[1] <= t[0]) return;
	let o = Array(e);
	o.fill(gS);
	let s = Array(e);
	s.fill(0);
	let c = t[0], l = (t[1] - t[0]) / e, u = (t, n) => {
		let r = (t - c) / l, i = Math.floor(r);
		return hS(n && i == r ? i - 1 : i, 0, e - 1);
	}, d = _S, f = -Infinity, p = !1, m = (e, t, n = [0, 0]) => {
		let r = u(e, !1), i = u(t, !0), a = o[r], c = Math.max(s[i], a);
		return n[0] = a, n[1] = c, n;
	};
	for (let e = i; e < a;) {
		let t = e, i = n(e), c = r(e);
		for (e += 1; e < a && n(e) === i && r(e) === c;) e += 1;
		if (t > d) d = t;
		else {
			p = !0;
			break;
		}
		if (i < f || c < i) {
			p = !0;
			break;
		}
		f = i;
		let l = u(i, !1), m = u(c, !0);
		for (let n = l; n <= m; n++) o[n] > t && (o[n] = t), s[n] < e && (s[n] = e);
	}
	if (p) return;
	for (let e = 1; e < s.length; e++) s[e] < s[e - 1] && (s[e] = s[e - 1]);
	let h = !0;
	for (let e = o.length - 1; e > 0; e--) h && o[e] == gS ? (o[e] = s[e], h = !1) : o[e - 1] > o[e] && (o[e - 1] = o[e]);
	return m;
}
//#endregion
//#region src/gl/dataToVertices.js
var yS = class {
	constructor({ encoders: e, numVertices: t = void 0, attributes: n = [] }) {
		this.encoders = e, this.variableEncoders = Object.fromEntries(Object.entries(e).filter(([e, t]) => n.includes(e) && t && !t.constant));
		let r = [...lS(e).entries()].filter(([e, t]) => e[1] && t.length > 1).map(([e, t]) => t);
		this.allocatedVertices = t, this.variableBuilder = new ox(t), this.attributeNames = {};
		for (let [e, t] of Object.entries(this.variableEncoders)) {
			let n = vf(t);
			if (!n) continue;
			let i = r.find((t) => t.find((t) => t == e)), a = n.asNumberAccessor(), o = t.scale, { largeHp: s, arrayConstructor: c, discrete: l, numComponents: u } = nS(o, e), d = [0, 0], f;
			if (o && l) if ("props" in o && o.props.domainIndexer) f = o.props.domainIndexer;
			else if ("domain" in o) f = mS(), f.addAll(o.domain());
			else throw Error("Missing domain indexer for discrete scale.");
			let p = f ? (e) => f(n(e)) : s ? (e) => oS(a(e), d) : a, m = uS(i ?? e);
			for (let t of i ?? [e]) this.attributeNames[t] = m;
			i && e != i[0] || this.variableBuilder.addConverter(m, {
				f: p,
				numComponents: u,
				arrayReference: s ? d : void 0,
				targetArrayType: c
			});
		}
		let i = this.variableEncoders.x, a = this.variableEncoders.x2, o = this.encoders.x?.channelDef, s = i?.scale;
		if (o?.buildIndex && i && s && R(s.type)) {
			let e = this.attributeNames.x;
			if (!e) throw Error("Missing x attribute for x indexing.");
			let t = a?.scale && R(a.scale.type) ? this.attributeNames.x2 ?? e : e;
			this.xIndexConfig = {
				domain: [s.domain()[0], s.domain()[1]],
				xAttributeName: e,
				x2AttributeName: t
			};
		} else this.xIndexConfig = void 0;
		this.lastOffset = 0, this.rangeMap = new bn([], JSON.stringify);
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
				return t[r] * aS + t[r + 1];
			} : (e) => t[e * n];
		}, i = r(n.xAttributeName), a = n.x2AttributeName == n.xAttributeName ? i : r(n.x2AttributeName);
		return vS(50, n.domain, i, a, e, t);
	}
	toArrays() {
		return {
			arrays: this.variableBuilder.arrays,
			vertexCount: this.variableBuilder.vertexCount,
			allocatedVertices: this.allocatedVertices,
			rangeMap: this.rangeMap
		};
	}
}, bS = class extends yS {
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
}, xS = class extends yS {
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
}, SS = class extends yS {
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
}, CS = class extends yS {
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
}, wS = class extends yS {
	constructor({ encoders: e, attributes: t, fontMetrics: n, properties: r, numCharacters: i = void 0 }) {
		super({
			encoders: e,
			attributes: t,
			numVertices: i * 6
		}), this.metadata = n, this.metrics = n, this.properties = r;
		let a = e.text.channelDef;
		this.numberFormat = !xf(a) && "format" in a && a.format ? k(a.format) : (e) => e, this.updateVertexCoord = this.variableBuilder.createUpdater("vertexCoord", 2), this.updateTextureCoord = this.variableBuilder.createUpdater("textureCoord", 2), this.updateWidth = this.variableBuilder.createUpdater("width", 1), this.variableBuilder.configure();
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
			let n = t[e], r = this.numberFormat(l(n)), f = O(r) ? r : r === null ? "" : "" + r;
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
}, TS = "#define PI 3.141593\nuniform View{mediump vec2 uViewOffset;mediump vec2 uViewScale;mediump vec2 uViewportSize;lowp float uDevicePixelRatio;lowp float uViewOpacity;bool uPickingEnabled;};/***Maps a coordinate on the unit scale to a normalized device coordinate.*(0,0)is at the bottom left corner.*/vec4 unitToNdc(vec2 coord){return vec4((coord*uViewScale+uViewOffset)*2.0-1.0,0.0,1.0);}vec4 unitToNdc(float x,float y){return unitToNdc(vec2(x,y));}vec4 pixelsToNdc(vec2 coord){return unitToNdc(coord/uViewportSize);}vec4 pixelsToNdc(float x,float y){return pixelsToNdc(vec2(x,y));}float linearstep(float edge0,float edge1,float x){return clamp((x-edge0)/(edge1-edge0),0.0,1.0);}const highp uint HASH_EMPTY_KEY=0xffffffffu;highp uint hash32(highp uint key){highp uint v=key;v ^=v>>16u;v*=0x7feb352du;v ^=v>>15u;v*=0x846ca68bu;v ^=v>>16u;return v;}bool isEmptyHashTexture(highp usampler2D s){ivec2 texSize=textureSize(s,0);return texSize.x==1&&texSize.y==1&&texelFetch(s,ivec2(0,0),0).r==HASH_EMPTY_KEY;}bool hashContainsTexture(highp usampler2D s,highp uint value){ivec2 texSize=textureSize(s,0);highp uint width=uint(texSize.x);highp uint size=width*uint(texSize.y);highp uint mask=size-1u;highp uint index=hash32(value)&mask;for(highp uint probe=0u;probe<size;probe+=1u){ivec2 coord=ivec2(int(index % width),int(index/width));highp uint entry=texelFetch(s,coord,0).r;if(entry==value){return true;}if(entry==HASH_EMPTY_KEY){return false;}index=(index+1u)&mask;}return false;}/***Calculates a gamma for antialiasing opacity based on the color.*/float getGammaForColor(vec3 rgb){return mix(1.25,0.75,smoothstep(0.0,1.0,dot(rgb,vec3(0.299,0.587,0.114))));}/***Specialized linearstep for doing antialiasing*/float distanceToRatio(float d){return clamp(d*uDevicePixelRatio+0.5,0.0,1.0);}vec4 distanceToColor(float d,vec4 fill,vec4 stroke,vec4 background,float halfStrokeWidth){if(halfStrokeWidth>0.0){float sd=abs(d)-halfStrokeWidth;return mix(stroke,d<=0.0 ? fill : background,distanceToRatio(sd));}else{return mix(background,fill,distanceToRatio(-d));}}", ES = "uniform highp float uZero;vec3 getDiscreteColor(sampler2D s,int index){return texelFetch(s,ivec2(index % textureSize(s,0).x,0),0).rgb;}vec3 getInterpolatedColor(sampler2D s,float unitValue){return texture(s,vec2(unitValue,0.0)).rgb;}float clampToRange(float value,vec2 range){return clamp(value,min(range[0],range[1]),max(range[0],range[1]));}float scaleIdentity(float value){return value;}float scaleIdentity(uint value){return float(value);}float scaleLinear(float value,vec2 domain,vec2 range){float domainSpan=domain[1]-domain[0];float rangeSpan=range[1]-range[0];return(value-domain[0])/domainSpan*rangeSpan+range[0];}float scaleLog(float value,vec2 domain,vec2 range,float base){return scaleLinear(log(value)/log(base),log(domain)/log(base),range);}float symlog(float value,float constant){return sign(value)*log(abs(value/constant)+1.0);}float scaleSymlog(float value,vec2 domain,vec2 range,float constant){return scaleLinear(symlog(value,constant),vec2(symlog(domain[0],constant),symlog(domain[1],constant)),range);}float scalePow(float value,vec2 domain,vec2 range,float exponent){return scaleLinear(pow(abs(value),exponent)*sign(value),pow(abs(domain),vec2(exponent))*sign(domain),range);}float scaleBand(uint value,vec2 domainExtent,vec2 range,float paddingInner,float paddingOuter,float align,float band){float start=range[0];float stop=range[1];float rangeSpan=stop-start;float n=domainExtent[1]-domainExtent[0];paddingInner=int(n)>1 ? paddingInner : 0.0;float step=rangeSpan/max(1.0,n-paddingInner+paddingOuter*2.0);start+=(rangeSpan-step*(n-paddingInner))*align;float bandwidth=step*(1.0-paddingInner);return start+(float(value)-domainExtent[0])*step+bandwidth*band;}const int lowBits=12;const float lowDivisor=pow(2.0,float(lowBits));const uint lowMask=uint(lowDivisor-1.0);vec2 splitUint(uint value){uint valueLo=value&lowMask;uint valueHi=value-valueLo;return vec2(float(valueHi),float(valueLo));}/***High precision variant of scaleBand for index/locus scales*/float scaleBandHp(uint value,vec3 domainExtent,vec2 range,float paddingInner,float paddingOuter,float align,float band){float start=range[0];float stop=range[1];float rangeSpan=stop-start;vec2 domainStart=domainExtent.xy;float n=domainExtent[2];float step=rangeSpan/max(1.0,n-paddingInner+paddingOuter*2.0);start+=(rangeSpan-step*(n-paddingInner))*align;float bandwidth=step*(1.0-paddingInner);vec2 splitValue=splitUint(value);float inf=1.0/uZero;float hi=max(splitValue[0]-domainStart[0],-inf);float lo=max(splitValue[1]-domainStart[1],-inf);return dot(vec4(start,hi,lo,bandwidth),vec4(1.0,step,step,band));}/***High precision variant of scaleBand for index/locus scales for large*domains where 32bit uints are not sufficient to represent the domain.*/float scaleBandHp(uvec2 value,vec3 domainExtent,vec2 range,float paddingInner,float paddingOuter,float align,float band){float start=range[0];float stop=range[1];float rangeSpan=stop-start;vec2 domainStart=domainExtent.xy;float n=domainExtent[2];float step=rangeSpan/max(1.0,n-paddingInner+paddingOuter*2.0);start+=(rangeSpan-step*(n-paddingInner))*align;float bandwidth=step*(1.0-paddingInner);vec2 splitValue=vec2(float(value[0])*lowDivisor,float(value[1]));float inf=1.0/uZero;float hi=max(splitValue[0]-domainStart[0],-inf);float lo=max(splitValue[1]-domainStart[1],-inf);return dot(vec4(start,hi,lo,bandwidth),vec4(1.0,step,step,band));}", DS = "/***Describes where a sample facet should be shown. Interpolating between the*current and target positions/heights allows for transitioning between facet*configurations.*/struct SampleFacetPosition{float pos;float height;float targetPos;float targetHeight;};/***Trasition fraction[0,1]between the current and target configurations.*/uniform float uTransitionOffset;\n#if !defined(SAMPLE_FACET_UNIFORM) && !defined(SAMPLE_FACET_TEXTURE)\nSampleFacetPosition getSampleFacetPos(){return SampleFacetPosition(0.0,1.0,0.0,1.0);}\n#elif defined(SAMPLE_FACET_UNIFORM)\n/***Location and height of the band on the Y axis on a normalized[0,1]scale.*Elements: curr pos,curr height,target pos,target height*/uniform vec4 uSampleFacet;SampleFacetPosition getSampleFacetPos(){return SampleFacetPosition(1.0-uSampleFacet.x-uSampleFacet.y,uSampleFacet.y,1.0-uSampleFacet.z-uSampleFacet.w,uSampleFacet.w);}\n#elif defined(SAMPLE_FACET_TEXTURE)\nuniform sampler2D uSampleFacetTexture;SampleFacetPosition getSampleFacetPos(){vec4 texel=texelFetch(uSampleFacetTexture,ivec2(int(attr_facetIndex),0),0);return SampleFacetPosition(1.0-texel.r-texel.g,texel.g,1.0-texel.r-texel.g,texel.g);}\n#endif\nbool isFacetedSamples(SampleFacetPosition facetPos){return facetPos!=SampleFacetPosition(0.0,1.0,0.0,1.0);}bool isFacetedSamples(){return isFacetedSamples(getSampleFacetPos());}bool isInTransit(){return uTransitionOffset>0.0;}float getTransitionFraction(float xPos){return smoothstep(0.0,0.7+uTransitionOffset,(xPos-uTransitionOffset)*2.0);}vec2 applySampleFacet(vec2 pos){SampleFacetPosition facetPos=getSampleFacetPos();if(!isFacetedSamples(facetPos)){return pos;}else if(isInTransit()){vec2 interpolated=mix(vec2(facetPos.pos,facetPos.height),vec2(facetPos.targetPos,facetPos.targetHeight),getTransitionFraction(pos.x));return vec2(pos.x,interpolated[0]+pos.y*interpolated[1]);}else{return vec2(pos.x,facetPos.pos+pos.y*facetPos.height);}}float getSampleFacetHeight(vec2 pos){SampleFacetPosition facetPos=getSampleFacetPos();if(!isFacetedSamples(facetPos)){return 1.0;}else if(isInTransit()){return mix(facetPos.height,facetPos.targetHeight,getTransitionFraction(pos.x));}else{return facetPos.height;}}", OS = "/**Based on concepts presented at:*https:*https:*/out highp vec4 vPickingColor;/***Passes the unique id to the fragment shader as a color if picking is enabled.*Returns true if picking is enabled.*/bool setupPicking(){if(uPickingEnabled){\n#ifdef uniqueId_DEFINED\nuint id=attr_uniqueId;vPickingColor=vec4(ivec4(id>>0,id>>8,id>>16,id>>24)&0xFF)/float(0xFF);\n#else\nvPickingColor=vec4(1.0);\n#endif\nreturn true;}return false;}", kS = "in highp vec4 vPickingColor;", AS = Symbol("cacheMap");
function jS(e, t, n) {
	let r = FS(e).get(t);
	return r === void 0 && (r = n(t), FS(e).set(t, r)), r;
}
function MS(e, t) {
	FS(e).delete(t);
}
function NS(e, t) {
	let n = FS(e);
	for (let e of n.keys()) e.startsWith(t) && n.delete(e);
	FS(e).delete(t);
}
function PS(e) {
	e[AS] = /* @__PURE__ */ new Map();
}
function FS(e) {
	return e[AS] || PS(e), e[AS];
}
//#endregion
//#region src/utils/propertyCoalescer.js
function IS(...e) {
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
//#region src/utils/variableTools.js
function LS(e) {
	return O(e) || Ot(e) || Tt(e);
}
//#endregion
//#region src/view/viewError.js
var RS = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ViewError", this.view = t;
	}
};
//#endregion
//#region src/config/mergeConfig.js
function zS(e) {
	return D(e) && !Array.isArray(e);
}
function BS(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = VS(r);
	return t;
}
function VS(e) {
	return Array.isArray(e) ? e.map(VS) : zS(e) ? BS(e) : e;
}
function HS(e, t) {
	for (let [n, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = e[n];
		zS(r) && zS(t) ? HS(t, r) : e[n] = VS(r);
	}
	return e;
}
function US(e) {
	let t = {};
	for (let n of e) n && HS(t, n);
	return t;
}
//#endregion
//#region src/config/styleUtils.js
function WS(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
//#endregion
//#region src/config/markConfig.js
function GS(e, t, n) {
	let r = [t, ...WS(n)], i = e.map((e) => e.mark), a = e.map((e) => e[t]);
	return US([
		...i,
		...a,
		...e.flatMap((e) => r.map((t) => e.style?.[t]))
	]);
}
//#endregion
//#region src/marks/mark.js
var KS = "SAMPLE_FACET_UNIFORM", qS = "SAMPLE_FACET_TEXTURE", JS = "uSelectionTexture_", YS = class {
	#e = [];
	constructor(e) {
		this.unitView = e;
		let t = this;
		this.encoders = void 0, this.bufferInfo = void 0, this.bytesPerElement = /* @__PURE__ */ new Map(), this.programInfo = void 0, this.vertexArrayInfo = void 0, this.viewUniformInfo = void 0, this.markUniformInfo = void 0, this.markUniformsAltered = !0, this.selectionTextureOps = [], this.rangeMap = new XS(), this.defaultProperties = {
			get clip() {
				return jS(t, "defaultClip", () => {
					for (let t of ["x", "y"]) if (e.getScaleResolution(t)?.isZoomable()) return !0;
					return !1;
				});
			},
			xOffset: 0,
			yOffset: 0,
			minBufferSize: 0,
			...GS(this.unitView.getConfigScopes(), this.unitView.getMarkType(), typeof this.unitView.spec.mark == "object" ? this.unitView.spec.mark.style : void 0)
		}, this.properties = IS(typeof this.unitView.spec.mark == "object" ? () => this.unitView.spec.mark : () => ({}), () => this.defaultProperties);
	}
	augmentDefaultProperties(e) {
		Object.defineProperties(this.defaultProperties, Object.getOwnPropertyDescriptors(e));
	}
	getCursorSpec() {
		return this.properties.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return V(e) ? this.unitView.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		V(n) && this.unitView.paramRuntime.watchExpression(n.expr, e, {
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
			"color",
			"opacity",
			"search",
			"uniqueId"
		];
	}
	getDefaultEncoding() {
		let e = {
			sample: void 0,
			uniqueId: void 0
		};
		return this.isPickingParticipant() && (e.uniqueId = { field: $d }), e;
	}
	fixEncoding(e) {
		return e;
	}
	setupExprRefsNeedingGraphicsUpdate(e) {
		let t = this.getSupportedChannels(), n = {};
		for (let r of e) {
			let e = this.properties[r];
			if (e && V(e)) {
				let i = this.unitView.paramRuntime.watchExpression(e.expr, () => {
					this.updateGraphicsData(), this.unitView.context.animator.requestRender();
				});
				t.includes(r) || Object.defineProperty(n, r, { get() {
					return i();
				} });
			}
		}
		let r = this.properties;
		this.properties = IS(() => n, () => r);
	}
	get encoding() {
		return jS(this, "encoding", () => {
			let e = this.getDefaultEncoding(), t = this.unitView.getEncoding(), n = (e) => {
				let t = this.properties[e];
				return LS(t) || V(t) ? { value: t } : void 0;
			}, r = Object.fromEntries(this.getSupportedChannels().map((e) => [e, n(e)]).filter((e) => xf(e[1]))), i = this.fixEncoding({
				...e,
				...r,
				...t
			});
			for (let e of Object.keys(i)) this.getSupportedChannels().includes(e) || delete i[e];
			return i.x && (i.x.buildIndex ??= this.properties.buildIndex ?? !0), i;
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
		this.encoders = hf(this.unitView, this.encoding);
	}
	async initializeGraphics() {}
	updateGraphicsData() {}
	getSampleFacetMode() {
		if (this.encoders.facetIndex) return qS;
		if (this.unitView.getLayoutAncestors().find((e) => "samples" in e.spec)) return KS;
	}
	createAndLinkShaders(e, t, n = []) {
		let r = this.getAttributes(), i = this.encoders, a = this.getSampleFacetMode();
		a && n.push(`#define ${a}`);
		let o = "// view: " + this.unitView.getPathString(), s = [], c = /* @__PURE__ */ new Set(), l = lS(i), u = [], d = Object.values(i).flatMap((e) => e.branches ?? []).map((e) => e.predicate).filter((e) => e.param), f = /* @__PURE__ */ new Map();
		for (let e of d) {
			let t = e.param, n = this.unitView.paramRuntime, r = n.findValue(t);
			if (!r) throw Error(`Cannot infer selection type as the parameter "${t}" has no value. Please ensure that the parameter is properly defined!`);
			let i = uS("uniqueId");
			if (Qf(r)) {
				if (!f.has(t)) {
					f.set(t, "single");
					let e = Rx + cp(t);
					u.push("    // Selection parameter"), u.push(`    uniform highp uint ${e};`), this.#e.push(() => {
						this.registerMarkUniformValue(e, { expr: t }, (e) => e.uniqueId ?? 0);
					}), s.push(`bool ${zx}${t}(bool empty) {\n    return ${Rx}${t} == ${i} || (empty && ${Rx}${t} == 0u);\n}`);
				}
			} else if ($f(r)) {
				if (!f.has(t)) {
					f.set(t, "multi");
					let e = JS + cp(t);
					s.push(`// Selection texture\nuniform highp usampler2D ${e};`);
					let a = this.getContext().glHelper, o = a.selectionTextures;
					this.selectionTextureOps.push(() => {
						let r = n.getValue(t), i = o.get(r);
						if (!i) throw Error(`Bug: no selection texture found for "${t}"!`);
						cb(this.programInfo, { [e]: i });
					});
					let c = JS + t;
					s.push(`bool ${zx}${t}(bool empty) {\n   return hashContainsTexture(${c}, ${i}) || (empty && isEmptyHashTexture(${c}));\n}`), a.createSelectionTexture(r), n.watchExpression(t, () => {
						let e = n.getValue(t);
						a.createSelectionTexture(e), this.getContext().animator.requestRender();
					});
				}
			} else if (Zf(r) && !f.has(t)) {
				f.set(t, "interval");
				let e = [], n = [];
				for (let i of Object.keys(r.intervals)) {
					if (!["x", "y"].includes(i)) continue;
					let r = Rx + cp(t) + `_${i}`, { attributeType: a } = nS(this.unitView.getScaleResolution(i).getScale(), i);
					u.push("    // Selection parameter"), u.push(`    uniform highp ${a}[2] ${r};`), this.#e.push(() => {
						this.registerMarkUniformValue(r, { expr: t }, (e) => e.intervals[i] ?? [1, 0]);
					});
					let o = (e) => {
						for (let [t, n] of l.entries()) if (t[1] && n.includes(e)) return uS(n);
						return uS(e);
					}, s = o(i), c = r + "[0]", d = r + "[1]", f = zf(i);
					if (this.encoding[f]) {
						let t = o(f), n = this.defaultHitTestMode;
						if (n == "endpoints") e.push(`((${c} <= ${s} && ${s} <= ${d}) || (${c} <= ${t} && ${t} <= ${d}))`);
						else if (n == "encloses") e.push(`(${c} <= ${s} && ${t} <= ${d})`);
						else if (n == "intersects") e.push(`(${c} <= ${t} && ${s} <= ${d})`);
						else throw new RS(`Unsupported hit test mode "${n}" for interval selection!`, this.unitView);
					} else e.push(`(${c} <= ${s} && ${s} <= ${d})`);
					n.push(`${c} > ${d}`);
				}
				s.push(`bool ${zx}${t}(bool empty) {\n    return ${e.join(" && ")} || (empty && (${n.join(" || ")}));\n}`);
			}
		}
		let p = (e, t, n, r) => {
			let i = t.channelDef;
			if (xf(i)) if (V(i.value)) {
				let { uniformName: t, uniformGlsl: r, accessorGlsl: a, adjuster: o } = Wx(e, n);
				s.push(a), u.push(r), this.#e.push(() => {
					this.registerMarkUniformValue(t, i.value, o);
				});
			} else s.push(Ux(e, n, i.value).accessorGlsl);
			else if (Cf(i)) {
				let { uniformName: t, uniformGlsl: a, accessorGlsl: o } = Kx(e, r, n);
				u.push(a), s.push(o);
				let { largeHp: c, discrete: l } = nS(r, e), d = l && "domain" in r ? (e) => r.domain().indexOf(e) : c ? oS : (e) => +e;
				this.#e.push(() => {
					this.registerMarkUniformValue(t, i.datum, d);
				});
			} else if (Sf(i)) {
				let t = l.get([i.field, !0]), { attributeGlsl: a, accessorGlsl: o } = Gx(e, r, n, t?.includes(e) ? t : void 0);
				c.add(a), s.push(o);
			} else if (Of(i)) {
				let { attributeGlsl: t, accessorGlsl: i } = Gx(e, r, n);
				c.add(t), s.push(i);
			} else throw new RS(`Unsupported channel definition: ${JSON.stringify(i)}`, this.unitView);
		};
		for (let [e, t] of Object.entries(i)) {
			if (!r.includes(e)) continue;
			let { branches: n, channelDef: i, scale: a } = t;
			for (let t = 0; t < n.length; t++) p(e, n[t].accessor, t, a);
			if (a) {
				let t = Tf(i), n = t && t.resolutionChannel || e, r = Uf(n) ? this.unitView.getScaleResolution(n) : null, { glsl: o, domainUniform: c, domainUniformName: l, rangeUniform: d, rangeUniformName: f } = qx(e, a, i);
				s.push(o), u.push(c), u.push(d), d && this.#e.push(() => {
					let t = this.createMarkUniformSetter(f), n = () => t(fS(a, e));
					r.addEventListener("range", n), n();
				}), c && this.#e.push(() => {
					let e = this.createMarkUniformSetter(l), t = () => {
						let t = fd(a.type) ? [0, a.domain().length] : a.domain();
						e(rS(a.type) ? cS(t) : t);
					};
					r.addEventListener("domain", t), t();
				});
			}
			s.push(Jx(e, n));
		}
		let m = [...f.keys()].map((e) => `${zx}${e}(false)`);
		s.push("bool isPointSelected() {\n" + (this.encoders.uniqueId && m.length > 0 ? `    return ${m.join(" || ")};` : "    return false;") + "\n}");
		let h = "precision highp float;\nprecision highp int;", g = (e) => e.replace("#pragma markUniforms", u.join("\n"));
		n = n.map(g), e = g(e), t = g(t);
		let _ = [
			h,
			o,
			...n,
			TS,
			ES,
			[...c].join("\n"),
			...s,
			DS,
			OS,
			e
		], v = [
			h,
			o,
			...n,
			TS,
			kS,
			t
		], y = this.gl;
		this.programStatus = bx(y, this.glHelper.compileShader(y.VERTEX_SHADER, _), this.glHelper.compileShader(y.FRAGMENT_SHADER, v));
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
		this.programInfo = fb(this.gl, this.programStatus.program), delete this.programStatus, this.viewUniformInfo = rb(this.gl, this.programInfo, "View"), this.markUniformInfo = rb(this.gl, this.programInfo, "Mark"), this.gl.useProgram(this.programInfo.program), cb(this.programInfo, {
			uSampleFacet: [
				0,
				1,
				0,
				1
			],
			uTransitionOffset: 0,
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
			if (n == null) throw Error(`Trying to set null/undefined value for uniform: ${e}${V(t) ? `Expr: ${t.expr}` : ""}`);
			r(n);
		};
		if (V(t)) {
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
		if (this.vertexArrayInfo &&= (this.gl.bindVertexArray(null), t.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject), void 0), this.bufferInfo) {
			for (let e = 0; e < 8; e++) t.disableVertexAttribArray(e);
			Object.values(this.bufferInfo.attribs).forEach((e) => this.gl.deleteBuffer(e.buffer)), this.bufferInfo.indices && this.gl.deleteBuffer(this.bufferInfo.indices), this.bufferInfo = void 0;
		}
	}
	dispose() {
		this.deleteGraphicsData();
	}
	updateBufferInfo(e) {
		if (this.gl.bindVertexArray(null), this.bufferInfo && e.vertexCount <= this.bufferInfo.allocatedVertices) for (let [t, n] of Object.entries(e.arrays)) n.data && gh(this.gl, this.bufferInfo.attribs[t], n.data, 0);
		else {
			this.deleteGraphicsData(), this.bufferInfo = bh(this.gl, e.arrays, { numElements: e.vertexCount }), this.bufferInfo.allocatedVertices = e.allocatedVertices;
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
	bindOrSetMarkUniformBlock() {
		this.markUniformsAltered ? (ab(this.gl, this.programInfo, this.markUniformInfo), this.markUniformsAltered = !1) : ib(this.gl, this.programInfo, this.markUniformInfo);
	}
	prepareRender(e) {
		let t = this.glHelper, n = this.gl, r = [];
		r.push(() => {
			this.vertexArrayInfo ||= Jb(this.gl, this.programInfo, this.bufferInfo), n.useProgram(this.programInfo.program);
		});
		for (let [e, n] of Object.entries(this.encoders)) {
			let i = t.rangeTextures.get(n.scale);
			i && r.push(() => cb(this.programInfo, { [Lx + e]: i }));
		}
		r.push(...this.selectionTextureOps), this.getSampleFacetMode() == "SAMPLE_FACET_TEXTURE" && r.push(() => {
			let e;
			for (let t of this.unitView.getLayoutAncestors()) if (e = t.getSampleFacetTexture(), e) break;
			if (!e) throw Error("No facet texture available. This is bug.");
			cb(this.programInfo, { uSampleFacetTexture: e });
		});
		let i = (e.picking ?? !1) && this.isPickingParticipant();
		return r.push(() => ob(this.viewUniformInfo, {
			uViewOpacity: this.unitView.getEffectiveOpacity(),
			uPickingEnabled: i
		})), this.opaque || e.picking ? r.push(() => n.disable(n.BLEND)) : r.push(() => n.enable(n.BLEND)), r;
	}
	prepareSampleFacetRendering(e) {
		let t = e.sampleFacetRenderingOptions, n = this.programInfo.uniformSetters.uSampleFacet;
		if (t && n) {
			let e = t.pixelToUnit, r = t.locSize.location * e, i = t.locSize.size * e;
			if (r > 1 || r + i < 0) return !1;
			this.gl.uniform4f(n.location, r, i, r, i);
		}
		return !0;
	}
	render(e) {}
	createRenderCallback(e, t) {
		if (!this.bufferInfo) return () => void 0;
		let n = this, r, i = this.unitView.getScaleResolution("x")?.getScale(), a = i && R(i.type), o = ["index", "locus"].includes(i?.type) ? -1 : 0, s = [0, 0];
		r = (t) => {
			if (a && t.xIndex) {
				let n = i.domain(), r = t.xIndex(n[0] + o, n[1], s), a = r[0], c = r[1] - a;
				c > 0 && e(a, c);
			} else e(t.offset, t.count);
		};
		let c = this.rangeMap.get(void 0).count == 0 ? t.facetId : void 0, l = this.rangeMap.get(c);
		return t.sampleFacetRenderingOptions ? function() {
			l.count && n.prepareSampleFacetRendering(t) && r(l);
		} : function() {
			l.count && r(l);
		};
	}
	setViewport(e, t, n, r) {
		n = n.flatten();
		let i = this.gl, a = this.properties, o = .5, s = (a.xOffset ?? 0) + o, c = (a.yOffset ?? 0) + o, l, u = n;
		if (a.clip !== "never" && (a.clip || r)) {
			let a = 0, o = 0, d;
			if (r) {
				if (u = n.intersect(r).flatten(), !u.isDefined()) return !1;
				d = [n.width / u.width, n.height / u.height], o = Math.max(0, n.y2 - r.y2), a = Math.min(0, n.x - r.x);
			} else d = [1, 1];
			let f = [
				u.x,
				e.height - u.y2,
				u.width,
				u.height
			].map((e) => e * t), p = f.map((e) => Math.floor(e)), m = f[0] - p[0], h = f[1] - p[1];
			i.viewport(...p), i.scissor(...p), i.enable(i.SCISSOR_TEST), l = {
				uViewOffset: [(s + a + m / t) / u.width, -(c + o - h / t) / u.height],
				uViewScale: d
			};
		} else {
			if (!n.isDefined()) return !1;
			i.viewport(0, 0, Math.round(e.width * t), Math.round(e.height * t)), i.disable(i.SCISSOR_TEST), l = {
				uViewOffset: [(n.x + s) / e.width, (e.height - n.y - c - n.height) / e.height],
				uViewScale: [n.width / e.width, n.height / e.height]
			};
		}
		return ob(this.viewUniformInfo, {
			...l,
			uViewportSize: [n.width, n.height],
			uDevicePixelRatio: t
		}), ab(this.gl, this.programInfo, this.viewUniformInfo), !0;
	}
	findDatumAt(e, t) {}
}, XS = class extends bn {
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
//#endregion
//#region src/marks/markUtils.js
function ZS(e, t) {
	let n = zf(t), r = e[t] && { ...e[t] }, i = e[n] && { ...e[n] };
	if (!(xf(r) || xf(i))) {
		if (r) {
			if (!wf(e[t])) return;
			if (!i) if (r.type == "quantitative") i = {
				datum: 0,
				domainInert: !0
			};
			else {
				i = { ...r };
				let e = (1 - (r.band ?? 1)) / 2;
				r.band = 0 + e, i.band = 1 - e;
			}
			else if (r.type != "quantitative") {
				let e = (1 - (r.band || 1)) / 2;
				r.band = e, i.band = -e;
			}
		} else r = { value: 0 }, i = { value: 1 };
		e[t] = r, e[n] = i;
	}
}
function QS(e, t) {
	let n = zf(t), r = e[t], i = e[n];
	if (!r || !i || xf(r) || xf(i) || !wf(r) || !wf(i) || !["index", "locus"].includes(r.type)) return;
	let a = r.band, o = i.band, s = a ?? o ?? 0;
	e[t] = {
		...r,
		band: s
	}, e[n] = {
		...i,
		band: o ?? s
	};
}
function $S(e, t) {
	let n = Tf(e);
	n && (n.resolutionChannel = t);
}
function eC(e, t) {
	e.stroke || (t ? e.stroke = { value: null } : (e.stroke = structuredClone(e.color), $S(e.stroke, "color"))), xf(e.stroke) && e.stroke.value === null && (e.strokeWidth = { value: 0 }), e.strokeOpacity || (e.strokeOpacity = structuredClone(e.opacity), $S(e.strokeOpacity, "opacity"));
}
function tC(e, t) {
	xf(e.fill) && e.fill.value === null ? e.fillOpacity = { value: 0 } : e.fill || (e.fill = structuredClone(e.color), $S(e.fill, "color"), !t && !e.fillOpacity && (e.fillOpacity = { value: 0 })), e.fillOpacity || (t ? (e.fillOpacity = structuredClone(e.opacity), $S(e.fillOpacity, "opacity")) : e.fillOpacity = { value: 0 });
}
//#endregion
//#region src/marks/rect.js
var nC = [
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
], rC = class extends YS {
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
	get opaque() {
		return jS(this, "opaque", () => !this.#e() && !this.#t() && !this.properties.shadowOpacity && xf(this.encoding.fillOpacity) && this.encoding.fillOpacity.value == 1 && this.properties.minOpacity == 1) && this.unitView.getEffectiveOpacity() == 1;
	}
	fixEncoding(e) {
		return ZS(e, "x"), ZS(e, "y"), eC(e, this.properties.filled), tC(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
	#e() {
		let e = this.properties;
		return e.cornerRadius || e.cornerRadiusBottomLeft || e.cornerRadiusBottomRight || e.cornerRadiusTopLeft || e.cornerRadiusTopRight;
	}
	#t() {
		let e = this.encoding.strokeWidth;
		return !(xf(e) && !e.value) || "condition" in e;
	}
	async initializeGraphics() {
		await super.initializeGraphics();
		let e = [];
		this.#e() && e.push("ROUNDED_CORNERS"), this.#t() && e.push("STROKED"), this.properties.shadowOpacity && e.push("SHADOW"), this.createAndLinkShaders(nx, rx, [ix, ...e.map((e) => "#define " + e)]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uMinWidth", e.minWidth), this.registerMarkUniformValue("uMinHeight", e.minHeight), this.registerMarkUniformValue("uMinOpacity", e.minOpacity), this.registerMarkUniformValue("uCornerRadiusTopRight", e.cornerRadiusTopRight ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusBottomRight", e.cornerRadiusBottomRight ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusTopLeft", e.cornerRadiusTopLeft ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uCornerRadiusBottomLeft", e.cornerRadiusBottomLeft ?? e.cornerRadius ?? 0), this.registerMarkUniformValue("uHatchPattern", e.hatch, (e) => Math.max(0, nC.indexOf(e ?? "none"))), this.registerMarkUniformValue("uShadowBlur", e.shadowBlur ?? 0), this.registerMarkUniformValue("uShadowOpacity", e.shadowOpacity ?? 0), this.registerMarkUniformValue("uShadowOffsetX", e.shadowOffsetX ?? 0), this.registerMarkUniformValue("uShadowOffsetY", e.shadowOffsetY ?? 0), this.registerMarkUniformValue("uShadowColor", e.shadowColor ?? "black", Ax);
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new bS({
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
		return t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => db(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => {
			hb(t, this.vertexArrayInfo, t.TRIANGLE_STRIP, n, e);
		}, e);
	}
	findDatumAt(e, t) {
		e = N(e);
		let n = this.unitView.getCollector().facetBatches.get(e);
		if (!n) return;
		let r = this.encoders, i = r.x.scale.type;
		if (fd(i)) {
			let e = vf(r.x);
			return e ? n.find((n) => t == e(n)) : void 0;
		} else {
			let e = vf(r.x), i = vf(r.x2);
			return !e || !i ? void 0 : n.find((n) => t >= e(n) && t < i(n));
		}
	}
}, iC = "flat out float vRadius;flat out float vRadiusWithPadding;flat out lowp vec4 vFillColor;flat out lowp vec4 vStrokeColor;flat out lowp float vShape;flat out lowp float vHalfStrokeWidth;flat out mat2 vRotationMatrix;const float CIRCLE=0.0;const float SQUARE=1.0;const float CROSS=2.0;const float DIAMOND=3.0;const float TRIANGLE_UP=4.0;const float TRIANGLE_RIGHT=5.0;const float TRIANGLE_DOWN=6.0;const float TRIANGLE_LEFT=7.0;const float TICK_UP=8.0;const float TICK_RIGHT=9.0;const float TICK_DOWN=10.0;const float TICK_LEFT=11.0;float computeSemanticThresholdFactor(){return getScaled_semanticScore()>=uSemanticThreshold ? 1.0 : 0.0;}vec2 getDxDy(){\n#if defined(dx_DEFINED) || defined(dy_DEFINED)\nreturn vec2(getScaled_dx(),getScaled_dy())/uViewportSize;\n#else\nreturn vec2(0.0,0.0);\n#endif\n}void main(void){float shapeAngle=0.0;float semanticThresholdFactor=isPointSelected()? 1.0: computeSemanticThresholdFactor();if(semanticThresholdFactor<=0.0){gl_PointSize=0.0;gl_Position=vec4(100.0,0.0,0.0,0.0);return;}float size=getScaled_size();vec2 pos=vec2(getScaled_x(),getScaled_y())+getDxDy();gl_Position=unitToNdc(applySampleFacet(pos));float strokeWidth=getScaled_strokeWidth();float diameter=sqrt(size)*uScaleFactor*semanticThresholdFactor;float opacity=uViewOpacity;if(strokeWidth<=0.0||uInwardStroke){float minDiameter=1.0/uDevicePixelRatio;if(diameter<minDiameter){opacity*=pow(diameter/minDiameter,2.5);diameter=minDiameter;}}float fillOpa=getScaled_fillOpacity()*opacity;float strokeOpa=getScaled_strokeOpacity()*opacity;vShape=getScaled_shape();bool circle=vShape==0.0;if(vShape>TICK_UP&&vShape<=TICK_LEFT){shapeAngle=(vShape-TICK_UP)*90.0;vShape=TICK_UP;}else if(vShape>TRIANGLE_UP&&vShape<=TRIANGLE_LEFT){shapeAngle=(vShape-TRIANGLE_UP)*90.0;vShape=TRIANGLE_UP;}float angleInDegrees=getScaled_angle();float angle=-(shapeAngle+angleInDegrees)*PI/180.0;float sinTheta=sin(angle);float cosTheta=cos(angle);vRotationMatrix=mat2(cosTheta,sinTheta,-sinTheta,cosTheta);float roomForRotation=circle ? 1.0 : sin(mod(angle,PI/2.0)+PI/4.0)/sin(PI/4.0);float aaPadding=1.0/uDevicePixelRatio;float rotationPadding=(diameter*roomForRotation)-diameter;float strokePadding=uInwardStroke ? 0.0 : strokeWidth*(circle ? 1.0 : sqrt(3.0));float padding=rotationPadding+strokePadding+aaPadding;gl_PointSize=max((diameter+padding),uPickingEnabled ? uMinPickingSize : 0.0)*uDevicePixelRatio;vRadius=diameter/2.0;vRadiusWithPadding=vRadius+padding/2.0;vHalfStrokeWidth=strokeWidth/2.0;vFillColor=vec4(getScaled_fill()*fillOpa,fillOpa);vStrokeColor=vec4(getScaled_stroke()*strokeOpa,strokeOpa);setupPicking();}", aC = "const lowp vec4 white=vec4(1.0);const lowp vec4 black=vec4(0.0,0.0,0.0,1.0);flat in float vRadius;flat in float vRadiusWithPadding;flat in lowp vec4 vFillColor;flat in lowp vec4 vStrokeColor;flat in lowp float vShape;flat in lowp float vHalfStrokeWidth;flat in mat2 vRotationMatrix;out lowp vec4 fragColor;const float CIRCLE=0.0;const float SQUARE=1.0;const float CROSS=2.0;const float DIAMOND=3.0;const float TRIANGLE_UP=4.0;const float TICK_UP=8.0;float circle(vec2 p,float r){return length(p)-r;}float square(vec2 p,float r){p=abs(p);return max(p.x,p.y)-r;}float tickUp(vec2 p,float r){float halfR=r*0.5;p.y+=halfR;p=abs(p);return max(p.x-r*0.15,p.y-halfR);}float equilateralTriangle(vec2 p,float r){p.y=-p.y;float k=sqrt(3.0);float kr=k*r;p.y-=kr/2.0;return max((abs(p.x)*k+p.y)/2.0,-p.y-kr);}float crossShape(vec2 p,float r){p=abs(p);vec2 b=vec2(0.4,1.0)*r;vec2 v=abs(p)-b.xy;vec2 h=abs(p)-b.yx;return min(max(v.x,v.y),max(h.x,h.y));}float diamond(vec2 p,float r){p=abs(p);return(max(abs(p.x-p.y),abs(p.x+p.y))-r)/sqrt(2.0);}void main(){float d;vec2 p=vRotationMatrix*(2.0*gl_PointCoord-1.0)*vRadiusWithPadding;float r=vRadius;if(vShape==CIRCLE){d=circle(p,r);}else if(vShape==SQUARE){d=square(p,r);}else if(vShape==CROSS){d=crossShape(p,r);}else if(vShape==DIAMOND){d=diamond(p,r);}else if(vShape==TRIANGLE_UP){d=equilateralTriangle(p,r);}else if(vShape==TICK_UP){d=tickUp(p,r);}else{d=0.0;}if(!uPickingEnabled){lowp vec4 fillColor=mix(vFillColor,white,-d*uGradientStrength/vRadius);fragColor=distanceToColor(d+(uInwardStroke ? vHalfStrokeWidth : 0.0),fillColor,vStrokeColor,vec4(0.0),vHalfStrokeWidth);}else if(d-vHalfStrokeWidth<=0.0){fragColor=vPickingColor;}else{discard;}}", oC = "layout(std140)uniform Mark{/***The stroke should only grow inwards,e.g,the diameter/outline is not affected by the stroke width.*Thus,a point that has a zero size has no visible stroke. This allows strokes to be used with*geometric zoom,etc.*/uniform bool uInwardStroke;uniform float uMinPickingSize;uniform mediump float uScaleFactor;uniform mediump float uZoomLevel;uniform highp float uSemanticThreshold;uniform mediump float uGradientStrength;\n#pragma markUniforms\n};", sC = class extends z {
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
function cC(e, t, n) {
	let r = new sC({
		type: "sample",
		size: e
	});
	for (let e of t) r.handle(n(e));
	return r.complete(), r.reservoir;
}
//#endregion
//#region src/marks/point.js
var lC = {}, uC = class extends YS {
	#e = () => 0;
	constructor(e) {
		super(e);
		let t = this.properties.semanticZoomFraction;
		t != null && (V(t) ? this.#e = this.unitView.paramRuntime.watchExpression(t.expr, () => this.getContext().animator.requestRender()) : this.#e = () => t), "geometricZoomBound" in this.properties && console.warn("geometricZoomBound is deprecated. Use something like the following instead: \"size\": { \"expr\": \"min(0.5 * pow(zoomLevel, 2), 200)\" }.");
	}
	getAttributes() {
		return [
			"uniqueId",
			"facetIndex",
			"x",
			"y",
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
			...lC
		};
	}
	fixEncoding(e) {
		return eC(e, this.properties.filled), tC(e, this.properties.filled), delete e.color, delete e.opacity, e;
	}
	initializeData() {
		super.initializeData();
		let e = this.encoders.semanticScore ? vf(this.encoders.semanticScore)?.asNumberAccessor() : void 0;
		e && (this.sampledSemanticScores = Float32Array.from(cC(1e4, this.unitView.getCollector().getData(), e)), this.sampledSemanticScores.sort((e, t) => e - t));
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this.createAndLinkShaders(iC, aC, [oC]);
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
		let t = e.getItemCount(), n = new SS({
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
			let e = Math.max(0, 1 - this.#e() * this.unitView.getZoomLevel());
			if (e <= 0) return -Infinity;
			if (e >= 1) return Infinity;
			{
				let t = this.sampledSemanticScores;
				return Un(t, e);
			}
		} else return -1;
	}
	prepareRender(e) {
		let t = super.prepareRender(e);
		return t.push(() => {
			ob(this.markUniformInfo, {
				uScaleFactor: this.#t(),
				uSemanticThreshold: this.getSemanticThreshold()
			}), this.markUniformsAltered = !0;
		}), t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => db(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => {
			n && hb(t, this.vertexArrayInfo, t.POINTS, n, e);
		}, e);
	}
}, dC = "const int BUTT=0;const int SQUARE=1;const int ROUND=2;in float pos;in float side;flat out vec4 vColor;flat out float vSize;out float vNormalLengthInPixels;out highp vec2 vPosInPixels;void main(void){float pixelSize=1.0/uDevicePixelRatio;float size=getScaled_size();float opacity=getScaled_opacity()*uViewOpacity;if(size<pixelSize){opacity*=size/pixelSize;size=pixelSize;}vec2 a=applySampleFacet(vec2(getScaled_x(),getScaled_y()));vec2 b=applySampleFacet(vec2(getScaled_x2(),getScaled_y2()));vec2 tangent=b-a;float offset=0.0;float relativeDiff=0.0;if(uMinLength>0.0||uStrokeCap!=BUTT){float len=length(tangent*uViewportSize);float diff=max(0.0,uMinLength-len);if(uStrokeCap!=BUTT){diff+=size;}relativeDiff=diff/len;offset=relativeDiff*(pos-0.5);}vec2 p=pos<1.0? a+tangent*(pos+offset): b+tangent*offset;float aaPadding=pixelSize;vec2 normal=normalize(vec2(-tangent.y,tangent.x)/uViewportSize);p+=normal*side*(size+aaPadding)/uViewportSize;gl_Position=unitToNdc(p);vColor=vec4(getScaled_color()*opacity,opacity);vSize=size;vNormalLengthInPixels=side*(size+aaPadding);vPosInPixels=vec2(pos,(1.0-pos))*(1.0+relativeDiff)*length(tangent*uViewportSize)-vec2(uStrokeCap!=BUTT ? size/2.0 : 0.0);setupPicking();}", fC = "const int BUTT=0;const int SQUARE=1;const int ROUND=2;uniform sampler2D uDashTexture;flat in vec4 vColor;flat in float vSize;in vec2 vPosInPixels;in float vNormalLengthInPixels;out lowp vec4 fragColor;void main(void){float dpr=uDevicePixelRatio;float distanceFromEnd=-min(vPosInPixels[0],vPosInPixels[1]);float distance;if(distanceFromEnd>0.0&&uStrokeCap==ROUND){distance=length(vec2(distanceFromEnd,vNormalLengthInPixels));}else{distance=abs(vNormalLengthInPixels);}float opacity=clamp(((vSize/2.0-distance)*dpr),-0.5,0.5)+0.5;if(uDashTextureSize>0.0){float pos=(vPosInPixels[0]+uStrokeDashOffset)*dpr;float floored=floor(pos);vec2 texelPositions=(floored+vec2(0.5,1.5))/dpr/uDashTextureSize;opacity*=mix(texture(uDashTexture,vec2(texelPositions[0],0)).r,texture(uDashTexture,vec2(texelPositions[1],0)).r,clamp((pos-floored),0.0,1.0));}fragColor=vColor*opacity;if(uPickingEnabled){fragColor=vPickingColor;}}", pC = "layout(std140)uniform Mark{uniform mediump float uMinLength;uniform mediump float uDashTextureSize;uniform lowp int uStrokeCap;uniform mediump float uStrokeDashOffset;\n#pragma markUniforms\n};", mC = "horizontal", hC = "vertical", gC = class extends YS {
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
		if (this.getType() == "tick") return this.fixTickEncoding(e);
		if (!(e.x && e.y && e.x2 && e.y2)) if (e.x && e.x2 && !e.y) e.y = { value: .5 }, e.y2 = e.y;
		else if (e.y && e.y2 && !e.x) e.x = { value: .5 }, e.x2 = e.x;
		else if (e.x && !e.y) e.y = { value: 0 }, e.y2 = { value: 1 }, e.x2 = e.x;
		else if (e.y && !e.x) e.x = { value: 0 }, e.x2 = { value: 1 }, e.y2 = e.y;
		else if (e.x && e.y && e.y2) e.x2 = e.x;
		else if (e.y && e.x && e.x2) e.y2 = e.y;
		else if (e.y && e.x) if (!e.x2 && wf(e.y) && e.y.type == "quantitative") e.x2 = e.x, e.y2 = { datum: 0 };
		else if (!e.y2 && wf(e.x) && e.x.type == "quantitative") e.y2 = e.y, e.x2 = { datum: 0 };
		else throw Error("A bug!");
		else throw Error("At a minimum, either the x or y channel must be defined in the rule mark's encoding: " + JSON.stringify(e));
		return e;
	}
	fixTickEncoding(e) {
		let t = this.properties;
		e.x ??= { value: .5 }, e.y ??= { value: .5 }, e.size = { value: t.thickness };
		let n = t.orient ?? vC(e);
		if (!n) throw Error("Cannot infer tick orientation from the encoding. Specify the tick mark's orient explicitly.");
		return yC(e, n), e;
	}
	async initializeGraphics() {
		await super.initializeGraphics();
		let e = this.gl, t = _C(this.properties.strokeDash);
		this.dashTexture = lv(e, {
			level: 0,
			mag: e.NEAREST,
			min: e.NEAREST,
			internalFormat: e.R8,
			format: e.RED,
			src: t,
			height: 1
		}), this.dashTextureSize = t.length, this.createAndLinkShaders(dC, fC, [pC]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uMinLength", e.minLength), this.registerMarkUniformValue("uStrokeCap", e.strokeCap ?? "butt", (e) => [
			"butt",
			"square",
			"round"
		].indexOf(e)), ob(this.markUniformInfo, { uDashTextureSize: +this.dashTextureSize }), this.markUniformsAltered = !0;
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new xS({
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
		return t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => cb(this.programInfo, { uDashTexture: this.dashTexture })), t.push(() => db(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => hb(t, this.vertexArrayInfo, t.TRIANGLE_STRIP, n, e), e);
	}
};
function _C(e) {
	if (!e) return new Uint8Array();
	if (e.length == 0 || e.length % 2 || e.findIndex((e) => Math.round(e) != e || e < 1 || e > 1e3) >= 0) throw Error("Invalid stroke dash pattern: " + JSON.stringify(e));
	let t = e.reduce((e, t) => e + t), n = new Uint8Array(t), r = !0, i = 0;
	for (let t of e) {
		for (; t;) n[i++] = r && 255 || 0, t--;
		r = !r;
	}
	return n;
}
function vC(e) {
	if (!e.y) return hC;
	if (!e.x) return mC;
	let t = bC(e.x), n = bC(e.y);
	if (!t && n) return hC;
	if (t && !n) return mC;
}
function yC(e, t) {
	if (t == hC) if (e.x2 = e.x, bC(e.y)) {
		let [t, n] = SC(e.y);
		e.y = t, e.y2 = n;
	} else e.y = { value: 0 }, e.y2 = { value: 1 };
	else if (e.y2 = e.y, bC(e.x)) {
		let [t, n] = SC(e.x);
		e.x = t, e.x2 = n;
	} else e.x = { value: 0 }, e.x2 = { value: 1 };
}
function bC(e) {
	return wf(e) && (e.type == "ordinal" || e.type == "nominal");
}
function xC(e, t) {
	return {
		...e,
		band: t
	};
}
function SC(e) {
	let t = (1 - (e.band ?? 1)) / 2;
	return [xC(e, t), xC(e, 1 - t)];
}
//#endregion
//#region src/marks/link.vertex.glsl
var CC = "flat out vec4 vColor;flat out float vSize;out float vNormalLengthInPixels;flat out float vGamma;const int SHAPE_ARC=0;const int SHAPE_DOME=1;const int SHAPE_DIAGONAL=2;const int SHAPE_LINE=3;const int ORIENT_VERTICAL=0;const int ORIENT_HORIZONTAL=1;float distanceFromLine(vec2 pointOnLine1,vec2 pointOnLine2,vec2 point){vec2 a=point-pointOnLine1;vec2 b=pointOnLine2-pointOnLine1;vec2 proj=dot(a,b)/dot(b,b)*b;return length(a-proj);}bool isInsideViewport(vec2 point,float marginFactor){vec2 margin=uViewportSize*vec2(marginFactor);return point.x>=-margin.x&&point.x<=uViewportSize.x+margin.x&&point.y>=-margin.y&&point.y<=uViewportSize.y+margin.y;}float inverseSmoothstep(float t){t=clamp(t,0.0,1.0);return 0.5-sin(asin(1.0-2.0*t)/3.0);}/***Remaps the parameter t to concentrate vertices to the part that is visible in the viewport.*This keeps the tightly bent endpoints smooth even when zooming in very close.*/float remapVisibleChordParameter(float stripT,float chordStart,float chordEnd,float viewportLength){float chordMin=min(chordStart,chordEnd);float chordMax=max(chordStart,chordEnd);float chordSpan=chordMax-chordMin;if(chordSpan<=0.0){return 0.0;}float visibleChordMin=max(chordMin,0.0);float visibleChordMax=min(chordMax,viewportLength);if(visibleChordMax<=visibleChordMin){return stripT;}float visibleTMin=inverseSmoothstep((visibleChordMin-chordMin)/chordSpan);float visibleTMax=inverseSmoothstep((visibleChordMax-chordMin)/chordSpan);float visibleTSpan=visibleTMax-visibleTMin;float offscreenTSpan=visibleTMin+(1.0-visibleTMax);if(offscreenTSpan<=0.0){return stripT;}float visibleShare=clamp(0.75+(1.0-visibleTSpan)*0.2,0.75,0.95);float offscreenShare=1.0-visibleShare;float leftShare=offscreenShare*visibleTMin/offscreenTSpan;float rightShare=offscreenShare*(1.0-visibleTMax)/offscreenTSpan;if(stripT<=leftShare){return leftShare>0.0 ? mix(0.0,visibleTMin,stripT/leftShare): visibleTMin;}float visibleStart=leftShare;float visibleEnd=visibleStart+visibleShare;if(stripT<=visibleEnd){return visibleShare>0.0? mix(visibleTMin,visibleTMax,(stripT-visibleStart)/visibleShare): visibleTMin;}return rightShare>0.0? mix(visibleTMax,1.0,(stripT-visibleEnd)/rightShare): visibleTMax;}void clampChordToViewport(inout vec2 p1,inout vec2 p4,inout float chordLength){if(chordLength>uMaxChordLength){vec2 chordVector=p4-p1;vec2 unitChordVector=normalize(chordVector);if(isInsideViewport(p1,2.0)){chordLength=uMaxChordLength;p4=p1+unitChordVector*uMaxChordLength;}else if(isInsideViewport(p4,2.0)){chordLength=uMaxChordLength;p1=p4-unitChordVector*uMaxChordLength;}}}void clampDomeApex(inout vec2 p1,inout vec2 p4,int orient){if(orient==ORIENT_VERTICAL){if(p4.x>0.0){p1.x=max(p1.x,-p4.x);}if(p1.x<uViewportSize.x){p4.x=min(p4.x,2.0*uViewportSize.x-p1.x);}}else{if(p4.y>0.0){p1.y=max(p1.y,-p4.y);}if(p1.y<uViewportSize.y){p4.y=min(p4.y,2.0*uViewportSize.y-p1.y);}}}void main(void){float pixelSize=1.0/uDevicePixelRatio;float opacity=getScaled_opacity()*uViewOpacity;vec2 p1,p2,p3,p4;vec2 a=applySampleFacet(vec2(getScaled_x(),getScaled_y()))*uViewportSize;vec2 b=applySampleFacet(vec2(getScaled_x2(),getScaled_y2()))*uViewportSize;if(uShape<=SHAPE_DOME){if(uShape==SHAPE_DOME){vec2 height=vec2(0.0);if(uOrient==ORIENT_VERTICAL){p1=vec2(min(a.x,b.x),b.y);p4=vec2(max(a.x,b.x),b.y);height=vec2(0.0,a.y-b.y);float chordLength=length(p4-p1);clampChordToViewport(p1,p4,chordLength);if(uClampApex){clampDomeApex(p1,p4,ORIENT_VERTICAL);}}else{p1=vec2(b.x,min(a.y,b.y));p4=vec2(b.x,max(a.y,b.y));height=vec2(a.x-b.x,0.0);float chordLength=length(p4-p1);clampChordToViewport(p1,p4,chordLength);if(uClampApex){clampDomeApex(p1,p4,ORIENT_HORIZONTAL);}}vec2 controlOffset=height/0.75;p2=p1+controlOffset;p3=p4+controlOffset;}if(uShape==SHAPE_ARC){p1=a;p4=b;vec2 chordVector=p4-p1;vec2 unitChordVector=normalize(chordVector);vec2 chordNormal=vec2(-unitChordVector.y,unitChordVector.x);float chordLength=length(chordVector);clampChordToViewport(p1,p4,chordLength);float height=max(chordLength/2.0*uArcHeightFactor,uMinArcHeight);vec2 controlOffset=chordNormal*height/0.75;p2=p1+controlOffset;p3=p4+controlOffset;}}else if(uShape==SHAPE_DIAGONAL){if(uOrient==ORIENT_VERTICAL){p1=a;p2=vec2(a.x,(a.y+b.y)/2.0);p3=vec2(b.x,(a.y+b.y)/2.0);p4=b;}else{p1=a;p2=vec2((a.x+b.x)/2.0,a.y);p3=vec2((a.x+b.x)/2.0,b.y);p4=b;}}else if(uShape==SHAPE_LINE){p1=a;p2=(a+b)/2.0;p3=p2;p4=b;}vec2 strip=vec2(float(gl_VertexID/2)/float(uSegmentBreaks),float(gl_VertexID % 2)-0.5);float t=strip.x;if(uShape==SHAPE_DOME){if(uOrient==ORIENT_VERTICAL){t=remapVisibleChordParameter(strip.x,p1.x,p4.x,uViewportSize.x);}else{t=remapVisibleChordParameter(strip.x,p1.y,p4.y,uViewportSize.y);}}else if(uShape==SHAPE_ARC){if(a.y==b.y){t=remapVisibleChordParameter(strip.x,p1.x,p4.x,uViewportSize.x);}else if(a.x==b.x){t=remapVisibleChordParameter(strip.x,p1.y,p4.y,uViewportSize.y);}}vec2 p;vec2 tangent;vec2 q1=mix(p1,p2,t);vec2 q2=mix(p2,p3,t);vec2 q3=mix(p3,p4,t);vec2 r1=mix(q1,q2,t);vec2 r2=mix(q2,q3,t);p=mix(r1,r2,t);tangent=3.0*(r2-r1);tangent=normalize(tangent);vec2 normal=vec2(-tangent.y,tangent.x);float size=getScaled_size();if(size<pixelSize){opacity*=size/pixelSize;size=pixelSize;}float paddedSize=uPickingEnabled? max(size,uMinPickingSize): size+pixelSize;vNormalLengthInPixels=strip.y*paddedSize;if(uShape==SHAPE_ARC&&uArcFadingDistance[0]>0.0&&uArcFadingDistance[1]>0.0&&(!uNoFadingOnPointSelection||!isPointSelected())){float d=distanceFromLine(p1,p4,p);float distanceOpacity=smoothstep(uArcFadingDistance[1],uArcFadingDistance[0],d);opacity*=distanceOpacity;if(distanceOpacity<=0.0){vNormalLengthInPixels=0.0;}}p+=normal*vNormalLengthInPixels;gl_Position=pixelsToNdc(p);vec3 color=getScaled_color();vColor=vec4(color*opacity,opacity);vGamma=getGammaForColor(color);vSize=paddedSize;setupPicking();}", wC = "flat in vec4 vColor;flat in float vSize;in float vNormalLengthInPixels;flat in float vGamma;out lowp vec4 fragColor;void main(void){float dpr=uDevicePixelRatio;float distance=abs(vNormalLengthInPixels);float opacity=clamp(((vSize/2.0-distance)*dpr),0.0,1.0);opacity=pow(opacity,vGamma);fragColor=vColor*opacity;if(uPickingEnabled){fragColor=vPickingColor;}}", TC = "layout(std140)uniform Mark{uniform float uArcHeightFactor;uniform float uMinArcHeight;uniform float uMinPickingSize;uniform int uShape;uniform int uOrient;uniform bool uClampApex;uniform float uMaxChordLength;uniform vec2 uArcFadingDistance;uniform bool uNoFadingOnPointSelection;uniform int uSegmentBreaks;\n#pragma markUniforms\n};", EC = [
	"arc",
	"dome",
	"diagonal",
	"line"
], DC = ["vertical", "horizontal"], OC = class extends YS {
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
		return e.x2 || (wf(e.x) ? e.x2 = { datum: 0 } : e.x2 = e.x), e.y2 || (wf(e.y) ? e.y2 = { datum: 0 } : e.y2 = e.y), e;
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this._baseInstanceExt = this.gl.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"), this.createAndLinkShaders(CC, wC, [TC]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties;
		this.registerMarkUniformValue("uArcFadingDistance", e.arcFadingDistance, (e) => e || [0, 0]), this.registerMarkUniformValue("uArcHeightFactor", e.arcHeightFactor), this.registerMarkUniformValue("uMinArcHeight", e.minArcHeight), this.registerMarkUniformValue("uMinPickingSize", e.minPickingSize), this.registerMarkUniformValue("uShape", e.linkShape, (e) => EC.indexOf(e)), this.registerMarkUniformValue("uOrient", e.orient, (e) => DC.indexOf(e)), this.registerMarkUniformValue("uClampApex", e.clampApex, (e) => !!e), this.registerMarkUniformValue("uMaxChordLength", e.maxChordLength), this.registerMarkUniformValue("uSegmentBreaks", e.segments, (e) => e), this.registerMarkUniformValue("uNoFadingOnPointSelection", e.noFadingOnPointSelection, (e) => !!e);
	}
	updateGraphicsData() {
		let e = this.unitView.getCollector();
		if (!e) {
			console.debug("No collector");
			return;
		}
		let t = e.getItemCount(), n = new CS({
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
		return t.push(() => this.bindOrSetMarkUniformBlock()), this._baseInstanceExt ? t.push(() => db(this.gl, this.programInfo, this.vertexArrayInfo)) : t.push(() => this.gl.bindVertexArray(null)), t;
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
			db(t, this.programInfo, this.bufferInfo), t.drawArraysInstanced(t.TRIANGLE_STRIP, 0, n(), r);
		}, e);
	}
}, kC = "in mediump vec2 vertexCoord;in lowp vec2 textureCoord;in float width;out vec2 vTexCoord;out float vEdgeFadeOpacity;flat out vec4 vColor;flat out float vSlope;flat out float vGamma;struct RangeResult{float pos;float scale;};float minValue(vec4 v){return min(min(v.x,v.y),min(v.z,v.w));}float maxValue(vec4 v){return max(max(v.x,v.y),max(v.z,v.w));}/***All measures are in[0,1]*/RangeResult positionInsideRange(float a,float b,float width,float padding,int align,bool flush){float span=b-a;float paddedWidth=width+2.0*padding;if(a>1.0||b<0.0){return RangeResult(0.0,0.0);}float extra=max(0.0,span-paddedWidth);float pos;if(align==0){float centre=a+b;if(flush){float leftOver=max(0.0,paddedWidth-centre);centre+=min(leftOver,extra);float rightOver=max(0.0,paddedWidth+centre-2.0);centre-=min(rightOver,extra);}pos=centre/2.0;}else if(align<0){float edge=a;if(flush){float over=max(0.0,-edge);edge+=min(over,extra);}pos=edge+padding;}else{float edge=b;if(flush){float over=max(0.0,edge-1.0);edge-=min(over,extra);}pos=edge-padding;}float scale=clamp((span-padding)/paddedWidth,0.0,1.0);return RangeResult(pos,scale);}vec2 calculateRotatedDimensions(float width,mat2 rotationMatrix){vec2 a=abs(rotationMatrix*vec2(width/2.0,0.5));vec2 b=abs(rotationMatrix*vec2(width/2.0,-0.5));return vec2(max(a.x,b.x),max(a.y,b.y))*2.0;}ivec2 fixAlignForAngle(ivec2 align,float angleInDegrees){float a=mod(angleInDegrees+45.0,360.0);int x=align.x;int y=-align.y;if(a<90.0){return ivec2(x,y);}else if(a<180.0){return ivec2(y,-x);}else if(a<270.0){return ivec2(-x,y);}else{return ivec2(-y,x);}}void main(void){float opacity=getScaled_opacity()*uViewOpacity;vec2 size=vec2(getScaled_size());float x=getScaled_x();float y=getScaled_y();float scale=1.0;float angleInDegrees=getScaled_angle();float angle=-angleInDegrees*PI/180.0;float sinTheta=sin(angle);float cosTheta=cos(angle);mat2 rotationMatrix=mat2(cosTheta,sinTheta,-sinTheta,cosTheta);vec2 flushSize=calculateRotatedDimensions(width,rotationMatrix);\n#if defined(x2_DEFINED) || defined(y2_DEFINED)\nivec2 align=fixAlignForAngle(uAlign,angleInDegrees);\n#else\nivec2 align=uAlign;\n#endif\n#ifdef x2_DEFINED\nfloat x2=getScaled_x2();if(uLogoLetter){size.x=(x2-x)*uViewportSize.x;x+=(x2-x)/2.0;}else{float x2=getScaled_x2();RangeResult result=positionInsideRange(min(x,x2),max(x,x2),size.x*scale*flushSize.x/uViewportSize.x,uPaddingX/uViewportSize.x,align.x,uFlushX);x=result.pos;scale*=result.scale;}\n#endif\nvec2 pos=applySampleFacet(vec2(x,y));\n#ifdef y2_DEFINED\nfloat y2=getScaled_y2();vec2 pos2=applySampleFacet(vec2(x,y2));if(uLogoLetter){size.y=(pos2.y-pos.y)*uViewportSize.y;pos.y+=(pos2.y-pos.y)/2.0;}else{RangeResult result=positionInsideRange(min(pos.y,pos2.y),max(pos.y,pos2.y),size.y*scale*flushSize.y/uViewportSize.y,uPaddingY/uViewportSize.y,align.y,uFlushY);pos.y=result.pos;scale*=result.scale;}\n#endif\nif(scale<1.0){if(uSqueeze){vec2 scaleFadeExtent=vec2(3.0,6.0)/size;if(scale<scaleFadeExtent[0]){gl_Position=vec4(0.0);return;}size*=scale;opacity*=linearstep(scaleFadeExtent[0],scaleFadeExtent[1],scale);}else if(scale<1.0){gl_Position=vec4(0.0);return;}}vec2 charPos=rotationMatrix*(vertexCoord*size+uD);vec2 unitPos=pos+charPos/uViewportSize;gl_Position=unitToNdc(unitPos);vSlope=max(1.0,min(size.x,size.y)/uSdfNumerator*uDevicePixelRatio);vec3 color=getScaled_color();vColor=vec4(color*opacity,opacity);vGamma=getGammaForColor(color);vTexCoord=textureCoord;if(maxValue(uViewportEdgeFadeDistance)>-pow(10.0,10.0)){vEdgeFadeOpacity=minValue(((vec4(1.0,1.0,0.0,0.0)+vec4(-1.0,-1.0,1.0,1.0)*unitPos.yxyx)*uViewportSize.yxyx-uViewportEdgeFadeDistance)/uViewportEdgeFadeWidth);}else{vEdgeFadeOpacity=1.0;}setupPicking();}", AC = "uniform sampler2D uTexture;in vec2 vTexCoord;in float vEdgeFadeOpacity;flat in vec4 vColor;flat in float vSlope;flat in float vGamma;out lowp vec4 fragColor;float median(float r,float g,float b){return max(min(r,g),min(max(r,g),b));}float getDist(vec2 uv){vec3 c=texture(uTexture,uv).rgb;return 1.0-median(c.r,c.g,c.b);}/***Calculates the super-sampled distance to the edge.*This is used to avoid aliasing when rendering small text,*as mip-mapping cannot be used here.*The distance is averaged over a grid of n x n samples.*/float getSuperDist(vec2 uv){vec2 dx=dFdx(uv);vec2 dy=dFdy(uv);float n=2.0;float sum=0.0;for(float x=0.5;x<n;x++){for(float y=0.5;y<n;y++){sum+=getDist(uv+x/n*dx+y/n*dy);}}return sum/(n*n);}void main(){float sigDist=getSuperDist(vTexCoord);float slope=vSlope;if(uLogoLetter){slope=0.7/length(vec2(dFdy(sigDist),dFdx(sigDist)));}float opa=clamp((sigDist-0.5)*slope+0.5,0.0,1.0);opa*=clamp(vEdgeFadeOpacity,0.0,1.0);opa=pow(opa,vGamma);fragColor=vColor*opa;if(uPickingEnabled){fragColor=vPickingColor;}}", jC = "layout(std140)uniform Mark{uniform mediump float uSdfNumerator;uniform mediump vec2 uD;uniform mediump vec4 uViewportEdgeFadeWidth;uniform mediump vec4 uViewportEdgeFadeDistance;uniform bool uSqueeze;uniform bool uLogoLetter;uniform lowp ivec2 uAlign;uniform mediump float uPaddingX;uniform bool uFlushX;uniform mediump float uPaddingY;uniform bool uFlushY;\n#pragma markUniforms\n};", MC = {
	left: -1,
	center: 0,
	right: 1
}, NC = {
	top: -1,
	middle: 0,
	bottom: 1,
	alphabetic: 1,
	baseline: 1
}, PC = class extends YS {
	constructor(e) {
		super(e), this.font = this.properties.font ? e.context.fontManager.getFont(this.properties.font, this.properties.fontStyle, this.properties.fontWeight) : e.context.fontManager.getDefaultFont(), this.setupExprRefsNeedingGraphicsUpdate([
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
		for (let t of jf) this.properties.fitToBand ? ZS(e, t) : QS(e, t);
		return e;
	}
	async initializeGraphics() {
		await super.initializeGraphics(), this.createAndLinkShaders(kC, AC, [jC]);
	}
	finalizeGraphicsInitialization() {
		super.finalizeGraphicsInitialization(), this.gl.useProgram(this.programInfo.program);
		let e = this.properties, t = this.font.metrics.common.base * .35 * (this.properties.logoLetters ? .5 : 1);
		this.registerMarkUniformValue("uPaddingX", e.paddingX), this.registerMarkUniformValue("uPaddingY", e.paddingY), this.registerMarkUniformValue("uFlushX", e.flushX, (e) => !!e), this.registerMarkUniformValue("uFlushY", e.flushY, (e) => !!e), this.registerMarkUniformValue("uSqueeze", e.squeeze, (e) => !!e), ob(this.markUniformInfo, {
			uAlign: [MC[e.align], NC[e.baseline]],
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
		let t = e.getData(), n = this.encoding, r = this.encoders.text, i = 0, a = "format" in n.text ? k(n.text.format) : (e) => e;
		for (let e of t) {
			let t = a(r(e)), n = O(t) ? t : t === null ? "" : "" + t;
			i += n && n.length || 0;
		}
		let o = new wS({
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
			cb(this.programInfo, { uTexture: this.font.texture });
		}), t.push(() => this.bindOrSetMarkUniformBlock()), t.push(() => db(this.gl, this.programInfo, this.vertexArrayInfo)), t;
	}
	render(e) {
		let t = this.gl;
		return this.createRenderCallback((e, n) => hb(t, this.vertexArrayInfo, t.TRIANGLES, n, e), e);
	}
};
//#endregion
//#region src/view/layout/flexLayout.js
function FC(e, t, { spacing: n, devicePixelRatio: r, offset: i, reverse: a } = {}) {
	n ||= 0, i ||= 0;
	let o = 0, s = 0;
	for (let t of e) o += VC(t.px) + (BC(t) ? 0 : n), s += VC(t.grow);
	o -= n;
	let c = Math.max(0, t - o), l = r === void 0 ? (e) => e : (e) => Math.round(e * r) / r, u = [], d = [], f = (e) => {
		let t = u.length;
		if (!t) return;
		let r = (e ? n : 0) * (a ? -1 : 1);
		p -= r;
		for (let e = 0; e < t; e++) d.push({
			location: p + (e + 1) / (t + 1) * r,
			size: 0
		});
		p += r, u.length = 0;
	}, p = a ? Math.max(t, o) : 0 + i;
	if (e.length == 1 && BC(e[0])) return [{
		location: p,
		size: 0
	}];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (BC(r)) u.push(r);
		else {
			f(d.length > 0);
			let e = VC(r.px) + (s ? VC(r.grow) / s * c : 0);
			a && (p -= e), d.push({
				location: l(p),
				size: l(e)
			}), a ? p -= n : p += e + n;
		}
	}
	return p += a ? n : -n, f(!1), d;
}
function IC(e) {
	let t = 0, n = 0;
	for (let r of e) t = Math.max(t, r.px ?? 0), n = Math.max(n, r.grow ?? 0);
	return {
		px: t,
		grow: n
	};
}
var LC = class e {
	constructor(e, t) {
		this.width = e, this.height = t;
	}
	addPadding(e) {
		return this.#e(e.width, e.height);
	}
	subtractPadding(e) {
		return this.#e(-e.width, -e.height);
	}
	#e(t, n) {
		return new e({
			px: (this.width.px ?? 0) + t,
			grow: this.width.grow
		}, {
			px: (this.height.px ?? 0) + n,
			grow: this.height.grow
		});
	}
	isGrowing() {
		return !!(this.width.grow || this.height.grow);
	}
}, RC = Object.freeze({
	px: 0,
	grow: 0
}), zC = new LC(RC, RC);
function BC(e) {
	return !e.px && !e.grow;
}
function VC(e) {
	return e || 0;
}
function HC(e) {
	return e && (Ot(e.px) || Ot(e.grow));
}
function UC(e) {
	if (zE(e)) throw Error("parseSizeDef does not accept step-based sizes.");
	if (HC(e)) return e;
	if (Ot(e)) return {
		px: e,
		grow: 0
	};
	if (e === "container" || !e) return {
		px: 0,
		grow: 1
	};
	throw Error(`Invalid sizeDef: ${e}`);
}
//#endregion
//#region src/view/layout/padding.js
var WC = class e {
	constructor(e, t, n, r) {
		this.top = e || 0, this.right = t || 0, this.bottom = n || 0, this.left = r || 0;
	}
	get width() {
		return this.left + this.right;
	}
	get height() {
		return this.top + this.bottom;
	}
	expand(t) {
		return t <= 0 ? this : new e(this.top + t, this.right + t, this.bottom + t, this.left + t);
	}
	add(t) {
		return new e(this.top + t.top, this.right + t.right, this.bottom + t.bottom, this.left + t.left);
	}
	subtract(t) {
		return new e(this.top - t.top, this.right - t.right, this.bottom - t.bottom, this.left - t.left);
	}
	union(t) {
		return new e(Math.max(this.top, t.top), Math.max(this.right, t.right), Math.max(this.bottom, t.bottom), Math.max(this.left, t.left));
	}
	getHorizontal() {
		return new e(0, this.right, 0, this.left);
	}
	getVertical() {
		return new e(this.top, 0, this.bottom, 0);
	}
	get horizontalTotal() {
		return this.left + this.right;
	}
	get verticalTotal() {
		return this.top + this.bottom;
	}
	static createFromConfig(e) {
		return typeof e == "number" ? this.createUniformPadding(e) : e ? this.createFromRecord(e) : GC;
	}
	static createFromRecord(t) {
		return new e(t.top, t.right, t.bottom, t.left);
	}
	static zero() {
		return GC;
	}
	static createUniformPadding(t) {
		return new e(t, t, t, t);
	}
}, GC = WC.createUniformPadding(0);
Object.freeze(GC);
//#endregion
//#region src/utils/url.js
var KC = /^([A-Za-z]+:)?\/\//;
function qC(e, t) {
	if (t && KC.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return YC(n) + t;
}
function JC(e, t, n = XC()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		} else if (n) return new URL(t, n).href;
	} catch {}
	return qC(r, t);
}
function YC(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function XC() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
//#region ../../node_modules/flatqueue/index.js
var ZC = class {
	constructor() {
		this.ids = [], this.values = [], this.length = 0;
	}
	clear() {
		this.length = 0;
	}
	push(e, t) {
		let n = this.length++;
		for (; n > 0;) {
			let e = n - 1 >> 1, r = this.values[e];
			if (t >= r) break;
			this.ids[n] = this.ids[e], this.values[n] = r, n = e;
		}
		this.ids[n] = e, this.values[n] = t;
	}
	pop() {
		if (this.length === 0) return;
		let e = this.ids, t = this.values, n = e[0], r = --this.length;
		if (r > 0) {
			let n = e[r], i = t[r], a = 0, o = r >> 1;
			for (; a < o;) {
				let n = (a << 1) + 1, o = n + 1, s = n + (o < r & +(t[o] < t[n]));
				if (t[s] >= i) break;
				e[a] = e[s], t[a] = t[s], a = s;
			}
			e[a] = n, t[a] = i;
		}
		return n;
	}
	peek() {
		return this.length > 0 ? this.ids[0] : void 0;
	}
	peekValue() {
		return this.length > 0 ? this.values[0] : void 0;
	}
	shrink() {
		this.ids.length = this.values.length = this.length;
	}
}, QC = Symbol("runtimeNode"), $C = 1e6;
function ew(e) {
	return e ? (t, n) => {
		e.addDisposer(t, n);
	} : () => void 0;
}
function tw(e, t) {
	let n = {
		id: e.id,
		name: e.name,
		kind: e.kind,
		get() {
			return e.value;
		},
		subscribe(t) {
			return e.listeners.add(t), () => {
				e.listeners.delete(t);
			};
		}
	};
	return Object.defineProperty(n, QC, {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: e
	}), t ? Object.assign(n, { set(e) {
		t(e);
	} }) : n;
}
function nw(e) {
	let t = e[QC];
	if (!t) throw Error("ParamRef is not bound to this graph runtime. Expected runtime-created ref.");
	return t;
}
function rw(e) {
	return typeof e.rank == "number" ? e.rank : nw(e).rank;
}
function iw(e) {
	for (let t of e) t();
}
var aw = class {
	#e = 1;
	#t = 1;
	#n = 0;
	#r = !1;
	#i = !1;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s = new ZC();
	#c = new ZC();
	#l = /* @__PURE__ */ new Set();
	#u;
	constructor(e = {}) {
		this.#u = ew(e.lifecycleRegistry);
	}
	createWritable(e, t, n, r, i = {}) {
		let a = "n" + this.#e++, o = i.notify ?? !0, s = {
			id: a,
			name: t,
			kind: n,
			value: r,
			rank: 0,
			disposed: !1,
			listeners: /* @__PURE__ */ new Set(),
			subscribe(e) {
				return s.listeners.add(e), () => {
					s.listeners.delete(e);
				};
			}
		};
		return this.#u(e, () => {
			s.disposed = !0, s.listeners.clear();
		}), tw(s, (e) => {
			if (s.disposed) throw Error("Cannot set disposed parameter \"" + t + "\" (" + a + ").");
			e !== s.value && (s.value = e, o && (iw(s.listeners), this.#m()));
		});
	}
	computed(e, t, n, r) {
		let i = n.reduce((e, t) => Math.max(e, rw(t)), 0), a = {
			id: "n" + this.#e++,
			name: t,
			kind: "derived",
			rank: i + 1,
			value: r(),
			disposed: !1,
			listeners: /* @__PURE__ */ new Set(),
			fn: r,
			subscribe(e) {
				return a.listeners.add(e), () => {
					a.listeners.delete(e);
				};
			}
		}, o = () => {
			a.disposed || this.#d(a);
		}, s = n.map((e) => e.subscribe(o));
		return this.#u(e, () => {
			a.disposed || (a.disposed = !0, s.forEach((e) => e()), a.listeners.clear(), this.#a.delete(a));
		}), tw(a);
	}
	effect(e, t, n) {
		let r = t.reduce((e, t) => Math.max(e, rw(t)), 0), i = {
			id: "n" + this.#e++,
			rank: r + 1,
			disposed: !1,
			fn: n
		}, a = () => {
			i.disposed || this.#f(i);
		}, o = t.map((e) => e.subscribe(a)), s = () => {
			i.disposed || (i.disposed = !0, o.forEach((e) => e()), this.#o.delete(i));
		};
		return this.#u(e, s), s;
	}
	runInTransaction(e) {
		this.#n += 1;
		try {
			return e();
		} finally {
			--this.#n, this.#n === 0 && this.#m();
		}
	}
	flushNow() {
		if (!(this.#n > 0 || this.#i)) {
			this.#r = !1, this.#i = !0;
			try {
				let e = !0;
				for (; e;) {
					for (e = !1; this.#s.length > 0;) {
						e = !0;
						let t = this.#s.pop();
						if (this.#a.delete(t), t.disposed) continue;
						let n = t.value, r = t.fn();
						r !== n && (t.value = r, iw(t.listeners));
					}
					for (; this.#c.length > 0;) {
						e = !0;
						let t = this.#c.pop();
						this.#o.delete(t), !t.disposed && t.fn();
					}
				}
			} finally {
				this.#i = !1, this.#g();
			}
		}
	}
	whenPropagated(e = {}) {
		if (this.#h()) return Promise.resolve();
		let { signal: t, timeoutMs: n } = e;
		return t?.aborted ? Promise.reject(/* @__PURE__ */ Error("whenPropagated aborted")) : new Promise((e, r) => {
			let i = {
				resolve: e,
				reject: r
			};
			t && (i.abortHandler = () => {
				this.#l.delete(i), r(/* @__PURE__ */ Error("whenPropagated aborted"));
			}, t.addEventListener("abort", i.abortHandler, { once: !0 })), n != null && (i.timeoutId = setTimeout(() => {
				this.#l.delete(i), i.abortHandler && t?.removeEventListener("abort", i.abortHandler), r(/* @__PURE__ */ Error("whenPropagated timeout after " + n + " ms"));
			}, n)), this.#l.add(i);
		});
	}
	#d(e) {
		this.#a.has(e) || (this.#a.add(e), this.#s.push(e, this.#p(e.rank)), this.#m());
	}
	#f(e) {
		this.#o.has(e) || (this.#o.add(e), this.#c.push(e, this.#p(e.rank)), this.#m());
	}
	#p(e) {
		let t = this.#t % $C;
		return this.#t += 1, e * $C + t;
	}
	#m() {
		this.#n > 0 || this.#r || this.#i || (this.#r = !0, queueMicrotask(() => {
			this.flushNow();
		}));
	}
	#h() {
		return this.#n === 0 && !this.#r && !this.#i && this.#s.length === 0 && this.#c.length === 0 && this.#a.size === 0 && this.#o.size === 0;
	}
	#g() {
		if (this.#h()) {
			for (let e of this.#l) e.timeoutId && clearTimeout(e.timeoutId), e.resolve();
			this.#l.clear();
		}
	}
}, ow = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createOwner(e, t) {
		let n = e + ":" + t + ":" + this.#e++;
		return this.#t.set(n, /* @__PURE__ */ new Set()), n;
	}
	addDisposer(e, t) {
		let n = this.#t.get(e);
		if (!n) throw Error("Unknown owner: " + e);
		n.add(t);
	}
	disposeOwner(e) {
		let t = this.#t.get(e);
		if (t) {
			for (let e of t) e();
			t.clear(), this.#t.delete(e);
		}
	}
}, sw = class {
	#e = 1;
	#t = /* @__PURE__ */ new Map();
	createRootScope(e) {
		let t = "scope:" + this.#e++;
		return this.#t.set(t, {
			params: /* @__PURE__ */ new Map(),
			ownerId: e
		}), t;
	}
	createChildScope(e, t) {
		if (!this.#t.has(t)) throw Error("Unknown parent scope: " + t);
		let n = "scope:" + this.#e++;
		return this.#t.set(n, {
			parentScope: t,
			params: /* @__PURE__ */ new Map(),
			ownerId: e
		}), n;
	}
	getOwnerId(e) {
		let t = this.#t.get(e);
		if (!t) throw Error("Unknown scope: " + e);
		return t.ownerId;
	}
	clearScope(e) {
		let t = this.#t.get(e);
		if (!t) throw Error("Unknown scope: " + e);
		t.params.clear();
	}
	register(e, t, n) {
		cp(t);
		let r = this.#t.get(e);
		if (!r) throw Error("Unknown scope: " + e);
		if (r.params.has(t)) throw Error("Parameter \"" + t + "\" already exists in scope " + e);
		return r.params.set(t, n), n;
	}
	resolve(e, t) {
		cp(t);
		let n = e;
		for (; n;) {
			let e = this.#t.get(n);
			if (!e) throw Error("Unknown scope: " + n);
			let r = e.params.get(t);
			if (r) return r;
			n = e.parentScope;
		}
	}
}, cw = "RawCode", lw = "Literal", uw = "Property", dw = "Identifier", fw = "ArrayExpression", pw = "BinaryExpression", mw = "CallExpression", hw = "ConditionalExpression", gw = "LogicalExpression", _w = "MemberExpression", vw = "ObjectExpression", yw = "UnaryExpression";
function bw(e) {
	this.type = e;
}
bw.prototype.visit = function(e) {
	let t, n, r;
	if (e(this)) return 1;
	for (t = xw(this), n = 0, r = t.length; n < r; ++n) if (t[n].visit(e)) return 1;
};
function xw(e) {
	switch (e.type) {
		case fw: return e.elements;
		case pw:
		case gw: return [e.left, e.right];
		case mw: return [e.callee].concat(e.arguments);
		case hw: return [
			e.test,
			e.consequent,
			e.alternate
		];
		case _w: return [e.object, e.property];
		case vw: return e.properties;
		case uw: return [e.key, e.value];
		case yw: return [e.argument];
		case dw:
		case lw:
		case cw:
		default: return [];
	}
}
var Sw, q, J, Cw, Y, ww = 1, Tw = 2, Ew = 3, Dw = 4, Ow = 5, kw = 6, Aw = 7, jw = 8, Mw = 9;
Sw = {}, Sw[ww] = "Boolean", Sw[Tw] = "<end>", Sw[Ew] = "Identifier", Sw[Dw] = "Keyword", Sw[Ow] = "Null", Sw[kw] = "Numeric", Sw[Aw] = "Punctuator", Sw[jw] = "String", Sw[Mw] = "RegularExpression";
var Nw = "ArrayExpression", Pw = "BinaryExpression", Fw = "CallExpression", Iw = "ConditionalExpression", Lw = "Identifier", Rw = "Literal", zw = "LogicalExpression", Bw = "MemberExpression", Vw = "ObjectExpression", Hw = "Property", Uw = "UnaryExpression", X = "Unexpected token %0", Ww = "Unexpected number", Gw = "Unexpected string", Kw = "Unexpected identifier", qw = "Unexpected reserved word", Jw = "Unexpected end of input", Yw = "Invalid regular expression", Xw = "Invalid regular expression: missing /", Zw = "Octal literals are not allowed in strict mode.", Qw = "Duplicate data property in object literal not allowed in strict mode", $w = "ILLEGAL", eT = "Disabled.", tT = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"), nT = /* @__PURE__ */ RegExp("[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]");
function rT(e, t) {
	/* istanbul ignore next */
	if (!e) throw Error("ASSERT: " + t);
}
function iT(e) {
	return e >= 48 && e <= 57;
}
function aT(e) {
	return "0123456789abcdefABCDEF".includes(e);
}
function oT(e) {
	return "01234567".includes(e);
}
function sT(e) {
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
function cT(e) {
	return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function lT(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 92 || e >= 128 && tT.test(String.fromCharCode(e));
}
function uT(e) {
	return e === 36 || e === 95 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 92 || e >= 128 && nT.test(String.fromCharCode(e));
}
var dT = {
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
function fT() {
	for (; J < Cw;) {
		let e = q.charCodeAt(J);
		if (sT(e) || cT(e)) ++J;
		else break;
	}
}
function pT(e) {
	var t, n, r, i = 0;
	for (n = e === "u" ? 4 : 2, t = 0; t < n; ++t) J < Cw && aT(q[J]) ? (r = q[J++], i = i * 16 + "0123456789abcdef".indexOf(r.toLowerCase())) : Z({}, X, $w);
	return String.fromCharCode(i);
}
function mT() {
	var e = q[J], t = 0, n, r;
	for (e === "}" && Z({}, X, $w); J < Cw && (e = q[J++], aT(e));) t = t * 16 + "0123456789abcdef".indexOf(e.toLowerCase());
	return (t > 1114111 || e !== "}") && Z({}, X, $w), t <= 65535 ? String.fromCharCode(t) : (n = (t - 65536 >> 10) + 55296, r = (t - 65536 & 1023) + 56320, String.fromCharCode(n, r));
}
function hT() {
	var e = q.charCodeAt(J++), t = String.fromCharCode(e);
	for (e === 92 && (q.charCodeAt(J) !== 117 && Z({}, X, $w), ++J, e = pT("u"), (!e || e === "\\" || !lT(e.charCodeAt(0))) && Z({}, X, $w), t = e); J < Cw && (e = q.charCodeAt(J), uT(e));) ++J, t += String.fromCharCode(e), e === 92 && (t = t.substr(0, t.length - 1), q.charCodeAt(J) !== 117 && Z({}, X, $w), ++J, e = pT("u"), (!e || e === "\\" || !uT(e.charCodeAt(0))) && Z({}, X, $w), t += e);
	return t;
}
function gT() {
	for (var e = J++, t; J < Cw;) {
		if (t = q.charCodeAt(J), t === 92) return J = e, hT();
		if (uT(t)) ++J;
		else break;
	}
	return q.slice(e, J);
}
function _T() {
	var e = J, t = q.charCodeAt(J) === 92 ? hT() : gT();
	return {
		type: t.length === 1 ? Ew : dT.hasOwnProperty(t) ? Dw : t === "null" ? Ow : t === "true" || t === "false" ? ww : Ew,
		value: t,
		start: e,
		end: J
	};
}
function vT() {
	var e = J, t = q.charCodeAt(J), n, r = q[J], i, a, o;
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
		case 126: return ++J, {
			type: Aw,
			value: String.fromCharCode(t),
			start: e,
			end: J
		};
		default: if (n = q.charCodeAt(J + 1), n === 61) switch (t) {
			case 43:
			case 45:
			case 47:
			case 60:
			case 62:
			case 94:
			case 124:
			case 37:
			case 38:
			case 42: return J += 2, {
				type: Aw,
				value: String.fromCharCode(t) + String.fromCharCode(n),
				start: e,
				end: J
			};
			case 33:
			case 61: return J += 2, q.charCodeAt(J) === 61 && ++J, {
				type: Aw,
				value: q.slice(e, J),
				start: e,
				end: J
			};
		}
	}
	if (o = q.substr(J, 4), o === ">>>=") return J += 4, {
		type: Aw,
		value: o,
		start: e,
		end: J
	};
	if (a = o.substr(0, 3), a === ">>>" || a === "<<=" || a === ">>=") return J += 3, {
		type: Aw,
		value: a,
		start: e,
		end: J
	};
	if (i = a.substr(0, 2), r === i[1] && "+-<>&|".includes(r) || i === "=>") return J += 2, {
		type: Aw,
		value: i,
		start: e,
		end: J
	};
	if (i === "//" && Z({}, X, $w), "<>=!+-*%&|^/".includes(r)) return ++J, {
		type: Aw,
		value: r,
		start: e,
		end: J
	};
	Z({}, X, $w);
}
function yT(e) {
	let t = "";
	for (; J < Cw && aT(q[J]);) t += q[J++];
	return t.length === 0 && Z({}, X, $w), lT(q.charCodeAt(J)) && Z({}, X, $w), {
		type: kw,
		value: parseInt("0x" + t, 16),
		start: e,
		end: J
	};
}
function bT(e) {
	let t = "0" + q[J++];
	for (; J < Cw && oT(q[J]);) t += q[J++];
	return (lT(q.charCodeAt(J)) || iT(q.charCodeAt(J))) && Z({}, X, $w), {
		type: kw,
		value: parseInt(t, 8),
		octal: !0,
		start: e,
		end: J
	};
}
function xT() {
	var e, t, n = q[J];
	if (rT(iT(n.charCodeAt(0)) || n === ".", "Numeric literal must start with a decimal digit or a decimal point"), t = J, e = "", n !== ".") {
		if (e = q[J++], n = q[J], e === "0") {
			if (n === "x" || n === "X") return ++J, yT(t);
			if (oT(n)) return bT(t);
			n && iT(n.charCodeAt(0)) && Z({}, X, $w);
		}
		for (; iT(q.charCodeAt(J));) e += q[J++];
		n = q[J];
	}
	if (n === ".") {
		for (e += q[J++]; iT(q.charCodeAt(J));) e += q[J++];
		n = q[J];
	}
	if (n === "e" || n === "E") if (e += q[J++], n = q[J], (n === "+" || n === "-") && (e += q[J++]), iT(q.charCodeAt(J))) for (; iT(q.charCodeAt(J));) e += q[J++];
	else Z({}, X, $w);
	return lT(q.charCodeAt(J)) && Z({}, X, $w), {
		type: kw,
		value: parseFloat(e),
		start: t,
		end: J
	};
}
function ST() {
	var e = "", t, n, r, i, a = !1;
	for (t = q[J], rT(t === "'" || t === "\"", "String literal must starts with a quote"), n = J, ++J; J < Cw;) if (r = q[J++], r === t) {
		t = "";
		break;
	} else if (r === "\\") if (r = q[J++], !r || !cT(r.charCodeAt(0))) switch (r) {
		case "u":
		case "x":
			q[J] === "{" ? (++J, e += mT()) : e += pT(r);
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
		default:
			oT(r) ? (i = "01234567".indexOf(r), i !== 0 && (a = !0), J < Cw && oT(q[J]) && (a = !0, i = i * 8 + "01234567".indexOf(q[J++]), "0123".includes(r) && J < Cw && oT(q[J]) && (i = i * 8 + "01234567".indexOf(q[J++]))), e += String.fromCharCode(i)) : e += r;
			break;
	}
	else r === "\r" && q[J] === "\n" && ++J;
	else if (cT(r.charCodeAt(0))) break;
	else e += r;
	return t !== "" && Z({}, X, $w), {
		type: jw,
		value: e,
		octal: a,
		start: n,
		end: J
	};
}
function CT(e, t) {
	let n = e;
	t.includes("u") && (n = n.replace(/\\u\{([0-9a-fA-F]+)\}/g, (e, t) => {
		if (parseInt(t, 16) <= 1114111) return "x";
		Z({}, Yw);
	}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "x"));
	try {
		new RegExp(n);
	} catch {
		Z({}, Yw);
	}
	try {
		return new RegExp(e, t);
	} catch {
		return null;
	}
}
function wT() {
	var e = q[J], t, n, r, i;
	for (rT(e === "/", "Regular expression literal must start with a slash"), t = q[J++], n = !1, r = !1; J < Cw;) if (e = q[J++], t += e, e === "\\") e = q[J++], cT(e.charCodeAt(0)) && Z({}, Xw), t += e;
	else if (cT(e.charCodeAt(0))) Z({}, Xw);
	else if (n) e === "]" && (n = !1);
	else if (e === "/") {
		r = !0;
		break;
	} else e === "[" && (n = !0);
	return r || Z({}, Xw), i = t.substr(1, t.length - 2), {
		value: i,
		literal: t
	};
}
function TT() {
	for (var e, t = "", n = ""; J < Cw && (e = q[J], uT(e.charCodeAt(0)));) ++J, e === "\\" && J < Cw ? Z({}, X, $w) : (n += e, t += e);
	return n.search(/[^gimuy]/g) >= 0 && Z({}, Yw, n), {
		value: n,
		literal: t
	};
}
function ET() {
	var e, t, n, r;
	return Y = null, fT(), e = J, t = wT(), n = TT(), r = CT(t.value, n.value), {
		literal: t.literal + n.literal,
		value: r,
		regex: {
			pattern: t.value,
			flags: n.value
		},
		start: e,
		end: J
	};
}
function DT(e) {
	return e.type === Ew || e.type === Dw || e.type === ww || e.type === Ow;
}
function OT() {
	if (fT(), J >= Cw) return {
		type: Tw,
		start: J,
		end: J
	};
	let e = q.charCodeAt(J);
	return lT(e) ? _T() : e === 40 || e === 41 || e === 59 ? vT() : e === 39 || e === 34 ? ST() : e === 46 ? iT(q.charCodeAt(J + 1)) ? xT() : vT() : iT(e) ? xT() : vT();
}
function kT() {
	let e = Y;
	return J = e.end, Y = OT(), J = e.end, e;
}
function AT() {
	let e = J;
	Y = OT(), J = e;
}
function jT(e) {
	let t = new bw(Nw);
	return t.elements = e, t;
}
function MT(e, t, n) {
	let r = new bw(e === "||" || e === "&&" ? zw : Pw);
	return r.operator = e, r.left = t, r.right = n, r;
}
function NT(e, t) {
	let n = new bw(Fw);
	return n.callee = e, n.arguments = t, n;
}
function PT(e, t, n) {
	let r = new bw(Iw);
	return r.test = e, r.consequent = t, r.alternate = n, r;
}
function FT(e) {
	let t = new bw(Lw);
	return t.name = e, t;
}
function IT(e) {
	let t = new bw(Rw);
	return t.value = e.value, t.raw = q.slice(e.start, e.end), e.regex && (t.raw === "//" && (t.raw = "/(?:)/"), t.regex = e.regex), t;
}
function LT(e, t, n) {
	let r = new bw(Bw);
	return r.computed = e === "[", r.object = t, r.property = n, r.computed || (n.member = !0), r;
}
function RT(e) {
	let t = new bw(Vw);
	return t.properties = e, t;
}
function zT(e, t, n) {
	let r = new bw(Hw);
	return r.key = t, r.value = n, r.kind = e, r;
}
function BT(e, t) {
	let n = new bw(Uw);
	return n.operator = e, n.argument = t, n.prefix = !0, n;
}
function Z(e, t) {
	var n, r = Array.prototype.slice.call(arguments, 2), i = t.replace(/%(\d)/g, (e, t) => (rT(t < r.length, "Message reference must be in range"), r[t]));
	throw n = Error(i), n.index = J, n.description = i, n;
}
function VT(e) {
	e.type === Tw && Z(e, Jw), e.type === kw && Z(e, Ww), e.type === jw && Z(e, Gw), e.type === Ew && Z(e, Kw), e.type === Dw && Z(e, qw), Z(e, X, e.value);
}
function HT(e) {
	let t = kT();
	(t.type !== Aw || t.value !== e) && VT(t);
}
function Q(e) {
	return Y.type === Aw && Y.value === e;
}
function UT(e) {
	return Y.type === Dw && Y.value === e;
}
function WT() {
	let e = [];
	for (J = Y.start, HT("["); !Q("]");) Q(",") ? (kT(), e.push(null)) : (e.push(oE()), Q("]") || HT(","));
	return kT(), jT(e);
}
function GT() {
	J = Y.start;
	let e = kT();
	return e.type === jw || e.type === kw ? (e.octal && Z(e, Zw), IT(e)) : FT(e.value);
}
function KT() {
	var e, t, n, r;
	if (J = Y.start, e = Y, e.type === Ew) return n = GT(), HT(":"), r = oE(), zT("init", n, r);
	if (e.type === Tw || e.type === Aw) VT(e);
	else return t = GT(), HT(":"), r = oE(), zT("init", t, r);
}
function qT() {
	var e = [], t, n, r, i = {}, a = String;
	for (J = Y.start, HT("{"); !Q("}");) t = KT(), n = t.key.type === Lw ? t.key.name : a(t.key.value), r = "$" + n, Object.prototype.hasOwnProperty.call(i, r) ? Z({}, Qw) : i[r] = !0, e.push(t), Q("}") || HT(",");
	return HT("}"), RT(e);
}
function JT() {
	HT("(");
	let e = sE();
	return HT(")"), e;
}
var YT = { if: 1 };
function XT() {
	var e, t, n;
	if (Q("(")) return JT();
	if (Q("[")) return WT();
	if (Q("{")) return qT();
	if (e = Y.type, J = Y.start, e === Ew || YT[Y.value]) n = FT(kT().value);
	else if (e === jw || e === kw) Y.octal && Z(Y, Zw), n = IT(kT());
	else if (e === Dw) throw Error(eT);
	else e === ww ? (t = kT(), t.value = t.value === "true", n = IT(t)) : e === Ow ? (t = kT(), t.value = null, n = IT(t)) : Q("/") || Q("/=") ? (n = IT(ET()), AT()) : VT(kT());
	return n;
}
function ZT() {
	let e = [];
	if (HT("("), !Q(")")) for (; J < Cw && (e.push(oE()), !Q(")"));) HT(",");
	return HT(")"), e;
}
function QT() {
	J = Y.start;
	let e = kT();
	return DT(e) || VT(e), FT(e.value);
}
function $T() {
	return HT("."), QT();
}
function eE() {
	HT("[");
	let e = sE();
	return HT("]"), e;
}
function tE() {
	for (var e = XT(), t, n;;) if (Q(".")) n = $T(), e = LT(".", e, n);
	else if (Q("(")) t = ZT(), e = NT(e, t);
	else if (Q("[")) n = eE(), e = LT("[", e, n);
	else break;
	return e;
}
function nE() {
	let e = tE();
	if (Y.type === Aw && (Q("++") || Q("--"))) throw Error(eT);
	return e;
}
function rE() {
	var e, t;
	if (Y.type !== Aw && Y.type !== Dw) t = nE();
	else if (Q("++") || Q("--")) throw Error(eT);
	else if (Q("+") || Q("-") || Q("~") || Q("!")) e = kT(), t = rE(), t = BT(e.value, t);
	else if (UT("delete") || UT("void") || UT("typeof")) throw Error(eT);
	else t = nE();
	return t;
}
function iE(e) {
	let t = 0;
	if (e.type !== Aw && e.type !== Dw) return 0;
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
		case "%":
			t = 11;
			break;
	}
	return t;
}
function aE() {
	var e = Y, t, n, r, i, a, o, s, c = rE(), l;
	if (r = Y, i = iE(r), i === 0) return c;
	for (r.prec = i, kT(), t = [e, Y], o = rE(), a = [
		c,
		r,
		o
	]; (i = iE(Y)) > 0;) {
		for (; a.length > 2 && i <= a[a.length - 2].prec;) o = a.pop(), s = a.pop().value, c = a.pop(), t.pop(), n = MT(s, c, o), a.push(n);
		r = kT(), r.prec = i, a.push(r), t.push(Y), n = rE(), a.push(n);
	}
	for (l = a.length - 1, n = a[l], t.pop(); l > 1;) t.pop(), n = MT(a[l - 1].value, a[l - 2], n), l -= 2;
	return n;
}
function oE() {
	var e = aE(), t, n;
	return Q("?") && (kT(), t = oE(), HT(":"), n = oE(), e = PT(e, t, n)), e;
}
function sE() {
	let e = oE();
	if (Q(",")) throw Error(eT);
	return e;
}
function cE(e) {
	q = e, J = 0, Cw = q.length, Y = null, AT();
	let t = sE();
	if (Y.type !== Tw) throw Error("Unexpect token after expression.");
	return t;
}
var lE = {
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
function uE(e) {
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
			t.length < 3 && T("Missing arguments to clamp function."), t.length > 3 && T("Too many arguments to clamp function.");
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
		regexp: a,
		test: n("test", a),
		if: function(t) {
			t.length < 3 && T("Missing arguments to if function."), t.length > 3 && T("Too many arguments to if function.");
			let n = t.map(e);
			return "(" + n[0] + "?" + n[1] + ":" + n[2] + ")";
		}
	};
}
function dE(e) {
	let t = e && e.length - 1;
	return t && (e[0] === "\"" && e[t] === "\"" || e[0] === "'" && e[t] === "'") ? e.slice(1, -1) : e;
}
function fE(e) {
	e ||= {};
	let t = e.allowed ? Lt(e.allowed) : {}, n = e.forbidden ? Lt(e.forbidden) : {}, r = e.constants || lE, i = (e.functions || uE)(d), a = e.globalvar, o = e.fieldvar, s = gt(a) ? a : (e) => `${a}["${e}"]`;
	new Set([...Object.getOwnPropertyNames(Object.prototype).filter((e) => typeof Object.prototype[e] == "function"), "__proto__"]);
	let c = {}, l = {}, u = 0;
	function d(e) {
		if (O(e)) return e;
		let t = f[e.type];
		return t ?? T("Unsupported type: " + e.type), t(e);
	}
	let f = {
		Literal: (e) => e.raw,
		Identifier: (e) => {
			let i = e.name;
			return u > 0 ? i : wt(n, i) ? T("Illegal identifier: " + i) : wt(r, i) ? r[i] : wt(t, i) ? i : (c[i] = 1, s(i));
		},
		MemberExpression: (e) => {
			let t = !e.computed, n = d(e.object);
			t && (u += 1);
			let r = d(e.property);
			return n === o && (l[dE(r)] = 1), t && --u, n + (t ? "." + r : "[" + r + "]");
		},
		CallExpression: (e) => {
			e.callee.type !== "Identifier" && T("Illegal callee type: " + e.callee.type);
			let t = e.callee.name, n = e.arguments, r = wt(i, t) && i[t];
			return r || T("Unrecognized function: " + t), gt(r) ? r(n) : r + "(" + n.map(d).join(",") + ")";
		},
		ArrayExpression: (e) => "[" + e.elements.map(d).join(",") + "]",
		BinaryExpression: (e) => "(" + d(e.left) + " " + e.operator + " " + d(e.right) + ")",
		UnaryExpression: (e) => "(" + e.operator + d(e.argument) + ")",
		ConditionalExpression: (e) => "(" + d(e.test) + "?" + d(e.consequent) + ":" + d(e.alternate) + ")",
		LogicalExpression: (e) => "(" + d(e.left) + e.operator + d(e.right) + ")",
		ObjectExpression: (e) => {
			for (let t of e.properties) {
				let e = t.key.name;
				Ze.has(e) && T("Illegal property: " + e);
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
//#region src/utils/linearstep.js
function pE(e, t, n) {
	return hS((n - e) / (t - e), 0, 1);
}
//#endregion
//#region src/utils/expression.js
function mE(e) {
	return E(e) || ArrayBuffer.isView(e) ? e : null;
}
function hE(e) {
	return mE(e) || (O(e) ? e : null);
}
var gE = {
	clamp: hS,
	format(e, t) {
		return k(t)(e);
	},
	join(e, t) {
		return mE(e).join(t);
	},
	indexof(e, t, n) {
		return hE(e).indexOf(t, n);
	},
	lastindexof(e, t, n) {
		return hE(e).lastIndexOf(t, n);
	},
	reverse(e) {
		return mE(e).slice().reverse();
	},
	slice(e, t, n) {
		return hE(e).slice(t, n);
	},
	mapHasKey(e, t) {
		return e.has(t);
	},
	isArray: E,
	isBoolean: Tt,
	isDefined(e) {
		return e !== void 0;
	},
	isNumber: Ot,
	isObject: D,
	isRegExp: kt,
	isString: O,
	isValid(e) {
		return e != null && e === e;
	},
	lerp: At,
	linearstep: pE,
	replace(e, t, n) {
		return String(e).replace(t, n);
	},
	sort(e) {
		return mE(e).slice().sort(yt);
	},
	center(e) {
		let t = mE(e);
		return (t[0] + t[t.length - 1]) / 2;
	},
	span(e) {
		return jt(e);
	},
	smoothstep: Xo
};
function _E(e, t) {
	let n = uE(e);
	for (let e in gE) n[e] = `this.${e}`;
	for (let r of [
		"scale",
		"invert",
		"domain",
		"range"
	]) n[r] = (n) => vE(e, t, r, n);
	return n;
}
function vE(e, t, n, r) {
	if (r.length === 0) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	if ((n === "scale" || n === "invert") && r.length < 2) throw Error(`Scale helper "${n}" requires a channel name and a value.`);
	let i = yE(r[0]);
	if (!i) throw Error(`Scale helper "${n}" requires a literal channel name.`);
	let a = t.resolveScaleResolution?.(i);
	if (!a) throw Error(`Unknown scale channel "${i}" in expression helper "${n}".`);
	let o = t.getScaleHelper(n, i, a), s = r.slice(1).map((t) => e(t)).join(",");
	return `${t.globalvar}["${o.codeName}"](${s})`;
}
function yE(e) {
	return e?.type === "Literal" && typeof e.value == "string" ? e.value : void 0;
}
function bE(e, t) {
	let n = (n) => SE(t, e, n);
	if (e === "domain") return () => n(() => t.getDomain());
	if (e === "range") return () => n(() => t.getScale().range());
	if (e === "scale") return (e) => n(() => t.getScale()(e));
	if (e === "invert") return (e) => n(() => t.getScale().invert(e));
	throw Error("Unknown scale helper: " + e);
}
var xE = /* @__PURE__ */ new WeakSet();
function SE(e, t, n) {
	if (xE.has(e)) throw Error(`Scale helper cycle detected while evaluating ${t}("${e.channel}").`);
	xE.add(e);
	try {
		return n();
	} finally {
		xE.delete(e);
	}
}
function CE(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = () => {
		for (let e of i) e();
	}, o = () => {
		e === "domain" ? n.addEventListener("domain", a) : (e === "range" || n.addEventListener("domain", a), n.addEventListener("range", a));
	}, s = () => {
		e === "domain" ? n.removeEventListener("domain", a) : (e === "range" || n.removeEventListener("domain", a), n.removeEventListener("range", a));
	};
	return {
		id: `scale:${t}:${r}`,
		name: `scale(${t})`,
		kind: "derived",
		rank: 0,
		get() {
			return n.getScale();
		},
		subscribe(e) {
			let t = i.size === 0;
			return i.add(e), t && o(), () => {
				i.delete(e) && i.size === 0 && s();
			};
		}
	};
}
function wE(e, t = {}, n = {}) {
	try {
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = 1, o = {
			...n,
			globalvar: "globalObject",
			globalObject: t,
			getScaleHelper(e, n, o) {
				let s = e + ":" + n, c = i.get(s);
				if (c) return c;
				let l = r.get(n);
				l || (l = CE(e, n, o, "__scale_dependency_" + a++), r.set(n, l));
				let u = "__scale_helper_" + a++, d = {
					codeName: u,
					dependency: l
				};
				return i.set(s, d), t[u] = bE(e, o), d;
			}
		}, s = fE({
			forbidden: [],
			allowed: ["datum", "undefined"],
			globalvar: "globalObject",
			fieldvar: "datum",
			functions: (e) => _E(e, o)
		})(cE(e)), c = Function("datum", "globalObject", `"use strict";
            try {
                return (${s.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`).bind(gE), l = (e) => c(e, t);
		return l.fields = s.fields, l.globals = s.globals, l.code = s.code, l.scaleDependencies = Array.from(r.values()), l;
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
var TE = fE({
	forbidden: [],
	allowed: ["event"],
	globalvar: "globalObject"
});
function EE(e) {
	try {
		let t = TE(cE(e));
		return Function("event", "globalObject", `"use strict";
            try {
                return !!(${t.code});
            } catch (e) {
                throw new Error("Error evaluating expression: " + ${JSON.stringify(e)} + ", " + e.message, e);
            }`);
	} catch (t) {
		throw Error(`Invalid expression: ${e}, ${t.message}`, { cause: t });
	}
}
//#endregion
//#region src/paramRuntime/expressionCompiler.js
function DE(e, t = {}, n = {}) {
	return wE(e, t, n);
}
//#endregion
//#region src/paramRuntime/expressionRef.js
function OE(e, t, n = {}) {
	let r = {}, i = DE(e, r, n), a = /* @__PURE__ */ new Map();
	for (let n of i.globals) {
		if (a.has(n)) continue;
		let i = t(n);
		if (!i) throw Error("Unknown variable \"" + n + "\" in expression: " + e);
		a.set(n, i), Object.defineProperty(r, n, {
			enumerable: !0,
			get() {
				return i.get();
			}
		});
	}
	let o = /* @__PURE__ */ new Set();
	return i.subscribe = (e) => {
		let t = [];
		for (let n of a.values()) t.push(n.subscribe(e));
		for (let n of i.scaleDependencies ?? []) t.push(n.subscribe(e));
		let n = !0, r = () => {
			n && (n = !1, o.delete(r), t.forEach((e) => e()));
		};
		return o.add(r), r;
	}, i.invalidate = () => {
		for (let e of o) e();
		o.clear();
	}, i.identifier = () => i.code + "|" + Array.from(a.values()).map((e) => e.id).concat((i.scaleDependencies ?? []).map((e) => e.id)).join(","), {
		expression: i,
		dependencies: Array.from(a.values()).concat(i.scaleDependencies ?? [])
	};
}
//#endregion
//#region src/paramRuntime/paramRuntime.js
var kE = class {
	#e = new ow();
	#t = new aw({ lifecycleRegistry: this.#e });
	#n = new sw();
	createScope(e) {
		let t = this.#e.createOwner("scope", e ?? "root");
		return e ? this.#n.createChildScope(t, e) : this.#n.createRootScope(t);
	}
	disposeScope(e) {
		let t = this.#n.getOwnerId(e);
		this.#e.disposeOwner(t), this.#n.clearScope(e);
	}
	addScopeDisposer(e, t) {
		let n = this.#n.getOwnerId(e);
		this.#e.addDisposer(n, t);
	}
	registerBase(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "base", n, r);
		return this.#n.register(e, t, a);
	}
	registerSelection(e, t, n, r) {
		let i = this.#n.getOwnerId(e), a = this.#t.createWritable(i, t, "selection", n, r);
		return this.#n.register(e, t, a);
	}
	registerDerived(e, t, n, r) {
		let { expression: i, dependencies: a } = OE(n, (t) => this.resolve(e, t), r), o = this.#n.getOwnerId(e), s = this.#t.computed(o, t, a, () => i(null));
		return this.#n.register(e, t, s);
	}
	createExpression(e, t, n) {
		let { expression: r } = OE(t, (t) => this.resolve(e, t), n);
		return r;
	}
	resolve(e, t) {
		return this.#n.resolve(e, t);
	}
	runInTransaction(e) {
		return this.#t.runInTransaction(e);
	}
	flushNow() {
		this.#t.flushNow();
	}
	whenPropagated(e) {
		return this.#t.whenPropagated(e);
	}
}, AE = class {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = /* @__PURE__ */ new Map();
	#a;
	#o;
	#s = !1;
	constructor(e, t) {
		this.#a = e ?? (() => void 0), this.#o = t ?? (() => void 0);
		let n = this.#a();
		n ? (this.#e = n.#e, this.#t = this.#e.createScope(n.#t)) : (this.#e = new kE(), this.#t = this.#e.createScope());
	}
	registerParam(e) {
		let t = e.name;
		if (cp(t), this.#i.has(t)) throw Error("Parameter \"" + t + "\" already registered in this scope.");
		if ("value" in e && "expr" in e) throw Error(`The parameter "${t}" must not have both value and expr properties!`);
		let n, r;
		if (e.push == "outer") {
			let e = this.findRuntimeForParam(t);
			if (!e) throw Error(`Parameter "${t}" not found in outer scope!`);
			let r = e.paramConfigs.get(t);
			if (!r) throw Error(`Outer parameter "${t}" exists as a value but has no registered config.`);
			if ("expr" in r || "select" in r) throw Error(`The outer parameter "${t}" must not have expr or select properties!`);
			n = (n) => {
				e.setValue(t, n);
			}, this.#n.set(t, n);
		} else if ("value" in e) r = lp(e, this), n = this.#c(t, r);
		else if ("expr" in e) {
			let r = this.#e.registerDerived(this.#t, t, e.expr, { resolveScaleResolution: this.#o });
			this.#r.set(t, r), n = () => {
				throw Error("Cannot set derived parameter \"" + t + "\".");
			};
		} else r = lp(e, this), n = this.#c(t, r);
		if ("select" in e) {
			if (r ??= lp(e, this), !this.#n.has(t)) {
				let e = this.#e.registerSelection(this.#t, t, r);
				this.#r.set(t, e), this.#n.set(t, (t) => {
					e.set(t), this.#e.flushNow();
				}), n = this.#n.get(t);
			}
			n(r);
		}
		return this.#i.set(t, e), n;
	}
	allocateSetter(e, t, n = !1) {
		if (cp(e), this.#n.has(e)) throw Error("Setter already allocated for parameter: " + e);
		let r = this.#e.registerBase(this.#t, e, t, { notify: !n });
		this.#r.set(e, r);
		let i = (e) => {
			r.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, i), i;
	}
	setValue(e, t) {
		cp(e);
		let n = this.#n.get(e);
		if (!n) throw Error("Writable parameter not found in this scope: " + e);
		n(t);
	}
	getValue(e) {
		return this.#r.get(e)?.get();
	}
	subscribe(e, t) {
		cp(e);
		let n = this.findRuntimeForParam(e);
		if (!n) throw Error("Parameter not found: " + e);
		let r = n.#r.get(e);
		if (!r) throw Error("Parameter found without local reference: " + e);
		return r.subscribe(t);
	}
	findValue(e) {
		return this.findRuntimeForParam(e)?.getValue(e);
	}
	get paramConfigs() {
		return this.#i;
	}
	hasLocalParam(e) {
		return cp(e), this.#r.has(e);
	}
	hasConfiguredParamInScopeChain(e) {
		return cp(e), this.#i.has(e) ? !0 : this.#a()?.hasConfiguredParamInScopeChain(e) ?? !1;
	}
	findRuntimeForParam(e) {
		return this.#r.has(e) ? this : this.#a()?.findRuntimeForParam(e);
	}
	createExpression(e) {
		return this.#e.createExpression(this.#t, e, { resolveScaleResolution: this.#o });
	}
	watchExpression(e, t, n = {}) {
		let r = this.createExpression(e), i = r.subscribe(t);
		return (n.scopeOwned ?? !0) && this.#e.addScopeDisposer(this.#t, i), n.registerDisposer?.(i), r;
	}
	#c(e, t) {
		let n = this.#e.registerBase(this.#t, e, t);
		this.#r.set(e, n);
		let r = (e) => {
			n.set(e), this.#e.flushNow();
		};
		return this.#n.set(e, r), r;
	}
	evaluateAndGet(e) {
		return this.createExpression(e)();
	}
	runInTransaction(e) {
		return this.#e.runInTransaction(e);
	}
	flushNow() {
		this.#e.flushNow();
	}
	whenPropagated(e) {
		return this.#e.whenPropagated(e);
	}
	dispose() {
		this.#s || (this.#s = !0, this.#e.disposeScope(this.#t), this.#n.clear(), this.#r.clear(), this.#i.clear());
	}
	hasPointSelections() {
		for (let e of this.#i.values()) if (sp(e)) {
			let t = e.select;
			if (O(t)) {
				if (t == "point") return !0;
			} else if (t.type == "point") return !0;
		}
		return !1;
	}
}, jE = "VISIT_SKIP", ME = "VISIT_STOP", NE = (e) => e, PE = class {
	spec;
	#e;
	#t;
	#n = {};
	#r = {};
	#i = {};
	#a;
	#o;
	#s = !1;
	opacityFunction = NE;
	#c = [];
	#l = "none";
	facetCoords = new bn([], JSON.stringify);
	constructor(e, t, n, r, i, a = {}) {
		if (!e) throw Error("View spec must be defined!");
		if (this.context = t, this.layoutParent = n, this.dataParent = r, this.#t = i, this.spec = e, r && e.theme !== void 0) throw Error("\"theme\" is only supported at the root specification. Use \"config\" and \"style\" for subtree customization.");
		let o = r ? r.getConfigScopes() : [t.getBaseConfig()], s = e.config;
		if (this.#e = [...o, s].filter((e) => !!e), this.resolutions = {
			scale: {},
			axis: {}
		}, PS(this), this.options = {
			blockEncodingInheritance: !1,
			layoutSizeParams: "own",
			...a
		}, this.flowHandle = void 0, this.needsAxes = {
			x: !1,
			y: !1
		}, this.paramRuntime = new AE(() => this.dataParent?.paramRuntime, (e) => this.getScaleResolution(e)), e.params) for (let t of e.params) this.paramRuntime.registerParam(t);
		this.options.layoutSizeParams !== "inherit" && (this.#a = this.#u("width"), this.#o = this.#u("height"));
	}
	#u(e) {
		if (!(this.paramRuntime.hasLocalParam(e) || this.paramRuntime.hasConfiguredParamInScopeChain(e))) return this.paramRuntime.allocateSetter(e, 0);
	}
	get name() {
		return this.spec.name ?? this.#t;
	}
	get explicitName() {
		return this.spec.name;
	}
	get defaultName() {
		return this.#t;
	}
	getConfig() {
		return US(this.#e);
	}
	getCursorSpec() {
		return this.spec.cursor;
	}
	getCursor() {
		let e = this.getCursorSpec();
		return V(e) ? this.paramRuntime.evaluateAndGet(e.expr) : e;
	}
	watchCursor(e, t) {
		let n = this.getCursorSpec();
		V(n) && this.paramRuntime.watchExpression(n.expr, e, {
			scopeOwned: !1,
			registerDisposer: t
		});
	}
	getConfigScopes() {
		return this.#e.slice();
	}
	get coords() {
		return this.facetCoords.values().next().value;
	}
	getPadding() {
		return this._cache("size/padding", () => WC.createFromConfig(this.spec.padding));
	}
	getOverhang() {
		return WC.zero();
	}
	isScrollable() {
		return this.spec.viewportWidth != null || this.spec.viewportHeight != null;
	}
	getSize() {
		return this._cache("size/size", () => this.isConfiguredVisible() ? new LC(this.#d("width"), this.#d("height")) : zC);
	}
	getViewportSize() {
		if (!this.isScrollable()) return this.getSize();
		if (!this.isConfiguredVisible()) return zC;
		let e = this.getSize();
		return new LC(this.#d("viewportWidth") ?? e.width, this.#d("viewportHeight") ?? e.height);
	}
	#d(e) {
		let t = this.spec[e], n = zE(t), r = e == "viewportWidth" || e == "viewportHeight";
		if (n) {
			if (r) throw new RS(`Cannot use step-based size with "${e}"!`, this);
			let n = t.step, i = this.getScaleResolution(e == "width" ? "x" : "y")?.getScale();
			if (i) {
				let e;
				if (fd(i.type)) e = i.domain().length;
				else if (["locus", "index"].includes(i.type)) {
					let t = i.domain();
					e = Yo(t) - t[0];
				} else throw new RS(`Cannot use step-based size with "${i.type}" scale!`, this);
				let t = i;
				return e = Mu(e, t.paddingInner(), t.paddingOuter()), {
					px: e * n,
					grow: 0
				};
			} else throw new RS(`Cannot use step-based size with "${e}"!`, this);
		} else return (t && UC(t)) ?? (r ? void 0 : {
			px: 0,
			grow: 1
		});
	}
	registerStepSizeInvalidation() {
		this.#f("width", "x"), this.#f("height", "y");
	}
	#f(e, t) {
		let n = this.spec[e];
		if (!zE(n)) return;
		let r = this.getScaleResolution(t);
		if (!r) throw new RS("Cannot use 'step' size without a scale!", this);
		let i = () => this.invalidateSizeCache();
		r.addEventListener("domain", i), this.registerDisposer(() => r.removeEventListener("domain", i));
	}
	isConfiguredVisible() {
		return this.context.isViewConfiguredVisible(this);
	}
	isVisibleInSpec() {
		return this.spec.visible ?? !0;
	}
	isVisible() {
		return this.getLayoutAncestors().every((e) => e.isConfiguredVisible());
	}
	isDomainInert() {
		if (this.spec.domainInert) return !0;
		let e = this.dataParent;
		return e ? e.isDomainInert() : !1;
	}
	getDataInitializationState() {
		return this.#l;
	}
	_setDataInitializationState(e) {
		this.#l = e;
	}
	isDataInitialized() {
		return this.#l === "ready";
	}
	getEffectiveOpacity() {
		return this.opacityFunction(this.layoutParent?.getEffectiveOpacity() ?? 1);
	}
	getPathString() {
		return this.getLayoutAncestors().map((e) => e.name).reverse().join("/");
	}
	#p(e) {
		let t = [], n = this;
		do
			t.push(n), n = n[e];
		while (n);
		return t;
	}
	getLayoutAncestors() {
		return this.#p("layoutParent");
	}
	getDataAncestors() {
		return this.#p("dataParent");
	}
	handleBroadcast(e) {
		for (let t of this.#n[e.type] || []) t(e);
	}
	_addBroadcastHandler(e, t) {
		let n = this.#n[e];
		return n || (n = [], this.#n[e] = n), n.push(t), () => {
			let n = this.#n[e];
			if (!n) return;
			let r = n.indexOf(t);
			r >= 0 && n.splice(r, 1);
		};
	}
	handleInteraction(e, t) {
		let n = t ? this.#r : this.#i;
		for (let t of n[e.type] || []) t(e);
	}
	addInteractionListener(e, t, n) {
		let r = n ? this.#r : this.#i, i = r[e];
		i || (i = [], r[e] = i), i.push(t);
	}
	removeInteractionListener(e, t, n) {
		let r = (n ? this.#r : this.#i)?.[e];
		if (r) {
			let e = r.indexOf(t);
			e >= 0 && r.splice(e, 1);
		}
	}
	visit(e) {
		try {
			let t = e(this);
			if (e.postOrder && e.postOrder(this), t !== "VISIT_STOP") return t;
		} catch (e) {
			throw e.view = this, e;
		}
	}
	getDescendants() {
		let e = [];
		return this.visit((t) => {
			e.push(t);
		}), e;
	}
	dispose() {
		for (let e of this.#c) e();
		this.#c.length = 0;
		let e = this.flowHandle;
		e?.collector && (this.context.dataFlow.pruneCollectorBranch(e.collector), this.context.dataFlow.removeCollector(e.collector)), e?.dataSource && e.dataSource.view === this && !e.dataSource.identifier && this.context.dataFlow.removeDataSource(e.dataSource), this.paramRuntime.dispose(), this.context.dataFlow.loadingStatusRegistry.delete(this), this.flowHandle = void 0;
	}
	registerDisposer(e) {
		this.#c.push(e);
	}
	disposeSubtree() {
		let e = () => void 0;
		e.postOrder = (e) => {
			e.dispose();
		}, this.visit(e);
	}
	configureViewOpacity() {
		(!this.opacityFunction || this.opacityFunction === NE) && (this.opacityFunction = IE(this));
	}
	onBeforeRender() {
		this.#s ||= !0;
	}
	hasRendered() {
		return this.#s;
	}
	render(e, t, n = {}) {
		n.firstFacet && this.facetCoords.clear(), this.facetCoords.set(n.facetId, n.clipRect ? t.intersect(n.clipRect) : t), this.#a?.(t.width), this.#o?.(t.height);
	}
	getEncoding() {
		let e = this.dataParent && !this.options.blockEncodingInheritance ? this.dataParent.getEncoding() : {}, t = this.spec.encoding || {}, n = {
			...e,
			...t
		};
		for (let [e, t] of Object.entries(n)) t === null && delete n[e];
		return n;
	}
	getFacetAccessor(e) {
		if (this.layoutParent) return this.layoutParent.getFacetAccessor(this);
	}
	getFacetFields(e) {
		let t = this.getEncoding().sample;
		return Sf(t) ? [t.field] : this.layoutParent?.getFacetFields(this);
	}
	getSampleFacetTexture() {}
	getScaleResolution(e) {
		let t = Bf(e);
		return this.getDataAncestors().map((e) => e.resolutions.scale[t]).find((e) => e);
	}
	getAxisResolution(e) {
		let t = Bf(e);
		return this.getDataAncestors().map((e) => e.resolutions.axis[t]).find((e) => e);
	}
	getConfiguredResolution(e, t) {
		return this.spec.resolve?.[t]?.[e];
	}
	getConfiguredOrDefaultResolution(e, t) {
		return this.getConfiguredResolution(e, t) ?? this.getConfiguredResolution("default", t) ?? this.getDefaultResolution(e, t);
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
	getBaseUrl() {
		return qC(() => this.dataParent?.getBaseUrl(), Qd(this.spec.baseUrl));
	}
	isPickingSupported() {
		return !0;
	}
	getTitleText() {
		let e = this.spec.title;
		if (e) return O(e) ? e : V(e.text) ? this.paramRuntime.evaluateAndGet(e.text.expr) : e.text;
	}
	_cache(e, t) {
		return jS(this, e, t);
	}
	_invalidateCacheByPrefix(e, t = "self") {
		switch (t) {
			case "self":
				NS(this, e);
				break;
			case "ancestors":
				for (let t of this.getLayoutAncestors()) NS(t, e);
				break;
			case "progeny":
				this.visit((t) => NS(t, e));
				break;
			default:
		}
	}
	invalidateSizeCache() {
		NS(this, "size"), this._invalidateCacheByPrefix("size", "ancestors");
	}
	propagateInteraction(e) {}
};
function FE(e) {
	return "unitsPerPixel" in e;
}
function IE(e) {
	let t = "opacity" in e.spec ? e.spec.opacity : void 0;
	if (t !== void 0) {
		if (Ot(t)) return (e) => e * t;
		if (FE(t)) {
			let n = (t) => {
				let n = e.getScaleResolution(t), r = n?.getScale();
				if ([
					"linear",
					"index",
					"locus"
				].includes(r?.type)) return {
					scale: r,
					scaleResolution: n
				};
			}, r = RE(t.values, "opacity.values", e);
			if (!E(t.unitsPerPixel)) throw new RS("\"opacity.unitsPerPixel\" must be an array.", e);
			let i = () => 1, a = [], o = () => {
				let t = LE(RE(a.map((e) => e()), "opacity.unitsPerPixel", e), r, e), n = Ul().domain(t.unitsPerPixel).range(t.values).clamp(!0);
				i = (e) => n(e);
			};
			a = t.unitsPerPixel.map((t) => {
				if (V(t)) {
					let n = e.paramRuntime.watchExpression(t.expr, () => {
						o(), e.context.animator.requestRender();
					});
					return () => n(null);
				} else return () => t;
			}), o();
			let s = (e) => {
				let t = e.scaleResolution.getAxisLength() || 1e3;
				return jt(e.scale.domain()) / t;
			}, c;
			if (t.channel === "auto") {
				let t = n("x"), r = n("y");
				if (t && r) c = () => (s(t) + s(r)) / 2;
				else if (t) c = () => s(t);
				else if (r) c = () => s(r);
				else throw new RS("Cannot find a resolved quantitative x or y scale for dynamic opacity!", e);
			} else {
				let r = t.channel ? n(t.channel) : n("x") ?? n("y");
				if (!r) throw new RS("Cannot find a resolved quantitative scale for dynamic opacity!", e);
				c = () => s(r);
			}
			return (e) => i(c()) * e;
		} else if (V(t)) {
			let n = e.paramRuntime.watchExpression(t.expr, () => e.context.animator.requestRender());
			return (e) => n(null) * e;
		}
	}
	return (e) => e;
}
function LE(e, t, n) {
	if (!e.length) throw new RS("\"opacity.unitsPerPixel\" must contain at least one stop.", n);
	if (e.length !== t.length) throw new RS("\"opacity.unitsPerPixel\" and \"opacity.values\" must have the same length.", n);
	e.forEach((e, t) => {
		if (e <= 0) throw new RS("Invalid opacity.unitsPerPixel value at index " + t + ". Stop values must be positive.", n);
	});
	let r = e.map((e, n) => ({
		stop: e,
		value: t[n]
	}));
	r.sort((e, t) => t.stop - e.stop);
	let i = r.map((e) => e.stop), a = r.map((e) => e.value);
	for (let t = 1; t < e.length; t++) if (i[t - 1] <= i[t]) throw new RS("\"opacity.unitsPerPixel\" must be strictly decreasing.", n);
	return {
		unitsPerPixel: i,
		values: a
	};
}
function RE(e, t, n) {
	if (!E(e)) throw new RS("\"" + t + "\" must evaluate to an array.", n);
	return e.map((e, r) => {
		if (!Ot(e) || !Number.isFinite(e)) throw new RS("Invalid " + t + " value at index " + r + ". Expected a finite number.", n);
		return e;
	});
}
var zE = (e) => !!e?.step;
//#endregion
//#region src/encoder/metadataChannels.js
function BE(e) {
	return VE(e?.search, "search");
}
function VE(e, t) {
	if (!e) return;
	let n = Array.isArray(e) ? e : [e];
	if (n.length === 0) throw Error("The " + t + " channel array must not be empty.");
	let r = [];
	for (let e of n) {
		if (!e || typeof e != "object" || !("field" in e)) throw Error("The " + t + " channel must be a field definition or an array of field definitions.");
		let n = e.field;
		if (typeof n != "string") throw Error("The " + t + " channel field definition must include a string field name.");
		r.push(n);
	}
	return r;
}
//#endregion
//#region src/genome/scaleIndex.js
var HE = 1;
function UE() {
	let e = [0, 1], t = [0, 1], n = 1, r = 1, i = 0, a = 0, o = .5, s = 0, c = (i) => (i + o - e[0]) / n * r + t[0];
	return c.invert = (i) => (i - t[0]) / r * n + e[0] - o, c.domain = function(t) {
		if (arguments.length) {
			e = yn(t), n = e[1] - e[0];
			let r = e[0] === 0 && e[0] === 0;
			if (n < HE && !r) {
				n = HE;
				let t = (e[0] + e[1]) / 2;
				e[0] = t - n / 2, e[1] = t + n / 2;
			}
			return c;
		} else return e.slice();
	}, c.range = function(e) {
		return arguments.length ? (t = [...e], r = t[1] - t[0], c) : t;
	}, c.numberingOffset = function(e) {
		return arguments.length ? (s = e, c) : s;
	}, c.padding = function(e) {
		return arguments.length ? (a = e, i = Math.min(1, e), c) : i;
	}, c.paddingInner = function(e) {
		return arguments.length ? (i = Math.min(1, e), c) : i;
	}, c.paddingOuter = function(e) {
		return arguments.length ? (a = e, c) : a;
	}, c.align = function(e) {
		return arguments.length ? (o = Math.max(0, Math.min(1, e)), c) : o;
	}, c.step = () => r / n, c.bandwidth = () => c.step(), c.ticks = (t) => {
		let r = c.align(), i = c.numberingOffset();
		return Fn(e[0] - r + i, e[1] - r + i, Math.min(t, Math.ceil(n))).filter(Number.isInteger).map((e) => e - s);
	}, c.tickFormat = (t, r) => {
		if (r) throw Error("Index scale's tickFormat does not support a specifier!");
		let i = Ln(e[0], e[1], Math.min(t, Math.ceil(n))) < 1e5 ? k(",") : k(".3s");
		return (e) => i(e + s);
	}, c.copy = () => UE().domain(e).range(t).paddingInner(i).paddingOuter(a).numberingOffset(s), c;
}
//#endregion
//#region src/genome/locusFormat.js
var WE = k(",d");
function GE(e) {
	return e.chrom + ":" + WE(Math.floor(e.pos + 1));
}
function KE(e, t) {
	return e.chrom + ":" + WE(Math.floor(e.pos + 1)) + "-" + (e.chrom == t.chrom ? "" : t.chrom + ":") + WE(Math.ceil(t.pos));
}
//#endregion
//#region src/genome/genomes.js
var qE = {
	dm6: "chr3R	32079331\nchr3L	28110227\nchr2R	25286936\nchrX	23542271\nchr2L	23513712\nchrY	3667352\nchr4	1348131\nchrM	19524",
	hg18: "chr1	247249719\nchr2	242951149\nchr3	199501827\nchr4	191273063\nchr5	180857866\nchr6	170899992\nchr7	158821424\nchr8	146274826\nchr9	140273252\nchr10	135374737\nchr11	134452384\nchr12	132349534\nchr13	114142980\nchr14	106368585\nchr15	100338915\nchr16	88827254\nchr17	78774742\nchr18	76117153\nchr19	63811651\nchr20	62435964\nchr21	46944323\nchr22	49691432\nchrX	154913754\nchrY	57772954\nchrM	16571",
	hg19: "chr1	249250621\nchr2	243199373\nchr3	198022430\nchr4	191154276\nchr5	180915260\nchr6	171115067\nchr7	159138663\nchr8	146364022\nchr9	141213431\nchr10	135534747\nchr11	135006516\nchr12	133851895\nchr13	115169878\nchr14	107349540\nchr15	102531392\nchr16	90354753\nchr17	81195210\nchr18	78077248\nchr19	59128983\nchr20	63025520\nchr21	48129895\nchr22	51304566\nchrX	155270560\nchrY	59373566\nchrM	16571",
	hg38: "chr1	248956422\nchr2	242193529\nchr3	198295559\nchr4	190214555\nchr5	181538259\nchr6	170805979\nchr7	159345973\nchr8	145138636\nchr9	138394717\nchr10	133797422\nchr11	135086622\nchr12	133275309\nchr13	114364328\nchr14	107043718\nchr15	101991189\nchr16	90338345\nchr17	83257441\nchr18	80373285\nchr19	58617616\nchr20	64444167\nchr21	46709983\nchr22	50818468\nchrX	156040895\nchrY	57227415\nchrM	16569",
	mm9: "chr1	197195432\nchr2	181748087\nchr3	159599783\nchr4	155630120\nchr5	152537259\nchr6	149517037\nchr7	152524553\nchr8	131738871\nchr9	124076172\nchr10	129993255\nchr11	121843856\nchr12	121257530\nchr13	120284312\nchr14	125194864\nchr15	103494974\nchr16	98319150\nchr17	95272651\nchr18	90772031\nchr19	61342430\nchrX	166650296\nchrY	15902555\nchrM	16299",
	mm10: "chr1	195471971\nchr2	182113224\nchr3	160039680\nchr4	156508116\nchr5	151834684\nchr6	149736546\nchr7	145441459\nchr8	129401213\nchr9	124595110\nchr10	130694993\nchr11	122082543\nchr12	120129022\nchr13	120421639\nchr14	124902244\nchr15	104043685\nchr16	98207768\nchr17	94987271\nchr18	90702639\nchr19	61431566\nchrX	171031299\nchrY	91744698\nchrM	16299"
};
function JE(e) {
	if (!(e in qE)) throw Error(`Unknown assembly: ${e}`);
	return qE[e].split("\n").map((e) => {
		let t = e.split("	");
		return {
			name: t[0],
			size: parseInt(t[1])
		};
	});
}
//#endregion
//#region src/genome/genome.js
var YE = class {
	constructor(e) {
		if (this.config = {
			name: "custom",
			...e
		}, "baseUrl" in e) throw Error("The `baseUrl` property in genome config has been removed in GenomeSpy v0.52.0. Use `url` instead. See https://genomespy.app/docs/genomic-data/genomic-coordinates/.");
		if (!eD(e)) throw Error("Not a genome configuration: " + JSON.stringify(e));
		if (this.chromosomes = [], this.cumulativeChromPositions = /* @__PURE__ */ new Map(), this.chromosomesByName = /* @__PURE__ */ new Map(), this.startByIndex = [], this.totalSize = 0, nD(this.config)) this.setChromSizes(this.config.contigs);
		else if (!tD(this.config)) {
			let e = JE(this.config.name);
			if (e) this.setChromSizes(e);
			else throw Error(`Unknown genome: ${this.config.name}. Please provide contigs or a URL. See https://genomespy.app/docs/genomic-data/genomic-coordinates/.`);
		}
	}
	get name() {
		return this.config.name;
	}
	async load(e) {
		if (tD(this.config)) try {
			let t = qC(e, this.config.url), n = await fetch(t);
			if (!n.ok) throw Error(`${n.status} ${n.statusText}`);
			this.setChromSizes(XE(await n.text()));
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
		let t = gn(this.startByIndex, e) - 1;
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
		return KE(...this.toChromosomalInterval(e));
	}
	formatLocus(e) {
		let t = this.toChromosomal(e);
		if (t) return GE(t);
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
function XE(e) {
	return Zt(e).map(([e, t]) => ({
		name: e,
		size: parseInt(t)
	}));
}
function ZE(e) {
	return D(e) && "chrom" in e;
}
function QE(e) {
	return e.every(ZE);
}
function $E(e) {
	return QE(e) && (e[1] ?? e[0]).pos !== void 0;
}
function eD(e) {
	return D(e) && ("name" in e || tD(e) || nD(e));
}
function tD(e) {
	return eD(e) && "url" in e;
}
function nD(e) {
	return eD(e) && "contigs" in e;
}
//#endregion
//#region src/genome/scaleLocus.js
var rD = 1e6, iD = .65;
function aD() {
	let e = UE().numberingOffset(1), t;
	e.genome = function(n) {
		return arguments.length ? (t = n, e) : t;
	}, e.ticks = (n) => {
		if (!t) return [];
		let r = e.domain(), i = r[1] - r[0], a = e.numberingOffset(), o = t.toChromosome(Math.max(r[0], 0)), s = t.toChromosome(Math.min(r[1], t.totalSize - 1)), c = Math.max(1, Math.min(n ?? 10, Math.floor(i))), l = Ln(r[0], r[1], c);
		l < rD && (l = Ln(r[0], r[1], c * iD)), l = Math.max(1, l);
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
		let i = e.domain(), a = i[1] - i[0], o = e.numberingOffset(), s = Ln(i[0], i[1], Math.max(1, Math.min(n ?? 10, Math.floor(a)))) < rD ? k(",") : k(".3s"), c = (e) => e - t.toChromosome(e).continuousStart;
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
function oD(e) {
	return e.type == "locus";
}
function sD(e, t) {
	let n = fD(e);
	return n ? n.toChromosomal(t) : t;
}
function cD(e, t) {
	let n = fD(e);
	return n && ZE(t) ? n.toContinuous(t.chrom, t.pos) : t;
}
function lD(e, t) {
	let n = fD(e);
	return n && QE(t) ? n.toContinuousInterval(t) : t;
}
function uD(e, t) {
	let n = fD(e);
	return n ? n.toChromosomalInterval(t) : t;
}
function dD(e) {
	let t = fD(e);
	if (!t) throw Error("No genome has been defined!");
	return t.getExtent();
}
function fD(e) {
	if (e && "toChromosomal" in e) return e;
	if (e && "genome" in e) return e.genome();
}
//#endregion
//#region src/scale/scale.js
var pD = "locus", mD = "index", hD = 5;
function gD(e) {
	let t = e.type;
	return !e.bins && (t === "linear" || t === "pow" || t === "sqrt");
}
function _D(e) {
	return R(e) && ![
		"sequential",
		mD,
		pD
	].includes(e);
}
function vD(e) {
	return e || { warn: (e, ...t) => console.warn(e, ...t) };
}
var yD = Lt(/* @__PURE__ */ "set.modified.clear.type.scheme.schemeExtent.schemeCount.domain.domainMin.domainMid.domainMax.domainRaw.domainImplicit.domainTransition.nice.zero.bins.range.rangeStep.round.reverse.interpolate.interpolateGamma.zoom.fp64.name".split("."));
function bD(e, t, n) {
	n = vD(n);
	for (let r in e) if (!yD[r]) {
		if (r === "padding" && _D(t.type)) continue;
		gt(t[r]) ? t[r](e[r]) : n.warn("Unsupported scale property: " + r);
	}
	let r = TD(t, e, n);
	r.domain && t.domain(r.domain), r.applyOrdinalUnknown && t.unknown(r.ordinalUnknown), AD(t, e, kD(t, e, r.count));
}
function xD(e, t) {
	let n = !e.domain && R(e.type) ? {
		...e,
		domain: [0, 0]
	} : e, r = SD(n), i = L(r);
	if (!i) throw Error("Unknown scale type: " + r);
	let a = i();
	return bD(n, a, t), a;
}
function SD(e) {
	var t = e.type, n = "", r;
	return t === "sequential" ? Ru + "-" + Pu : (CD(e) && (r = e.rawDomain ? e.rawDomain.length : e.domain ? e.domain.length + +(e.domainMid != null) : 0, n = r === 2 ? Ru + "-" : r === 3 ? zu + "-" : ""), (n + t || "linear").toLowerCase());
}
function CD(e) {
	let t = e.type;
	return R(t) && t !== "time" && t !== "utc" && (e.scheme || e.range && e.range.length && e.range.every(O));
}
function wD(e) {
	if (!e.copy) return e;
	let t = e.copy();
	return t.type == null && e.type != null && (t.type = e.type), t;
}
function TD(e, t, n) {
	if (!e.domain) return {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
	n = vD(n);
	let r = wD(e);
	var i = ED(r, t.domainRaw, n);
	if (i > -1) return {
		domain: r.domain(),
		count: i,
		ordinalUnknown: r.type === "ordinal" && t.domainImplicit ? $o : void 0,
		applyOrdinalUnknown: !1
	};
	var a = t.domain, o = r.type, s = t.zero || t.zero === void 0 && gD(r), c, l;
	return a ? (_D(o) && t.padding && a[0] !== Qe(a) && (a = DD(o, a, t.range, t.padding, t.exponent, t.constant)), (s || t.domainMin != null || t.domainMax != null || t.domainMid != null) && (c = (a = a.slice()).length - 1 || 1, s && (a[0] > 0 && (a[0] = 0), a[c] < 0 && (a[c] = 0)), t.domainMin != null && (a[0] = t.domainMin), t.domainMax != null && (a[c] = t.domainMax), t.domainMid != null && (l = t.domainMid, (l < a[0] || l > a[c]) && n.warn("Scale domainMid exceeds domain min or max.", l), a.splice(c, 0, l))), r.domain(OD(o, a, n)), t.nice && r.nice && r.nice(t.nice !== !0 && Dd(r, t.nice) || null), {
		domain: r.domain(),
		count: a.length,
		ordinalUnknown: o === "ordinal" && t.domainImplicit ? $o : void 0,
		applyOrdinalUnknown: o === Uu
	}) : {
		domain: null,
		count: 0,
		ordinalUnknown: void 0,
		applyOrdinalUnknown: !1
	};
}
function ED(e, t, n) {
	return t ? (e.domain(OD(e.type, t, n)), t.length) : -1;
}
function DD(e, t, n, r, i, a) {
	n ??= [0, 1];
	var o = Math.abs(Qe(n) - n[0]), s = o / (o - 2 * r), c = e === "log" ? dt(t, null, s) : e === "sqrt" ? ft(t, null, s, .5) : e === "pow" ? ft(t, null, s, i || 1) : e === "symlog" ? pt(t, null, s, a || 1) : ut(t, null, s);
	return t = t.slice(), t[0] = c[0], t[t.length - 1] = c[1], t;
}
function OD(e, t, n) {
	return md(e) && Math.abs(t.reduce(function(e, t) {
		return e + (t < 0 ? -1 : t > 0 ? 1 : 0);
	}, 0)) !== t.length && n.warn("Log scale domain includes zero: " + Mt(t)), t;
}
function kD(e, t, n) {
	let r = t.bins;
	if (r && !E(r)) {
		let t = (r.start == null || r.stop == null) && e.domain(), n = r.start == null ? t[0] : r.start, i = r.stop == null ? Qe(t) : r.stop, a = r.step;
		a || T("Scale bins parameter missing step property."), r = Kn(n, i + a, a);
	}
	return r ? e.bins = r : e.bins && delete e.bins, e.type === "bin-ordinal" && (r ? !t.domain && !t.domainRaw && (e.domain(r), n = r.length) : e.bins = e.domain()), n;
}
function AD(e, t, n) {
	var r = e.type, i = t.round || !1, a = t.range;
	if (t.rangeStep != null) a = jD(r, t, n);
	else if (t.scheme && (a = MD(r, t, n), gt(a))) {
		if (e.interpolator) return e.interpolator(a);
		T(`Scale type ${r} does not support interpolating color schemes.`);
	}
	if (a && hd(r)) return e.interpolator(_d(PD(a, t.reverse), t.interpolate, t.interpolateGamma));
	a && t.interpolate && e.interpolate ? e.interpolate(yd(t.interpolate, t.interpolateGamma)) : gt(e.round) ? e.round(i) : gt(e.rangeRound) && e.interpolate(i ? Wc : Vc), a && e.range(PD(a, t.reverse));
}
function jD(e, t, n) {
	e !== "band" && e !== "point" && T("Only band and point scales support rangeStep.");
	var r = (t.paddingOuter == null ? t.padding : t.paddingOuter) || 0, i = e === "point" ? 1 : (t.paddingInner == null ? t.padding : t.paddingInner) || 0;
	return [0, t.rangeStep * Mu(n, i, r)];
}
function MD(e, t, n) {
	var r = t.schemeExtent, i, a;
	return E(t.scheme) ? a = _d(t.scheme, t.interpolate, t.interpolateGamma) : (i = t.scheme.toLowerCase(), a = Ed(i), a || T(`Unrecognized scheme name: ${t.scheme}`)), n = e === "threshold" ? n + 1 : e === "bin-ordinal" ? n - 1 : e === "quantile" || e === "quantize" ? +t.schemeCount || hD : n, hd(e) ? ND(a, r, t.reverse) : gt(a) ? vd(ND(a, r), n) : e === "ordinal" ? a : a.slice(0, n);
}
function ND(e, t, n) {
	return gt(e) && (t || n) ? gd(e, PD(t || [0, 1], n)) : e;
}
function PD(e, t) {
	return t ? e.slice().reverse() : e;
}
//#endregion
//#region src/scales/scaleInstanceManager.js
var FD = class {
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
	getLocusGenome(e) {
		let t = this.#a?.();
		if (!t) throw Error("No genome has been defined!");
		return e ? t.getGenome(e) : t.getGenome();
	}
	createScale(e) {
		let t = xD({
			...this.#c(e),
			range: void 0
		});
		return t.props = e, "unknown" in t && t.unknown(null), this.#e = t, this.#s(e), this.#l(), this.#u(), this.#e;
	}
	#s(e) {
		let t = this.#e;
		!t || !oD(t) || t.genome(this.getLocusGenome(e.assembly));
	}
	reconfigureScale(e) {
		let t = this.#e;
		!t || t.type == "null" || (bD({
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
		let n = t.__rangeExprScope?.paramRuntime ?? this.#n(), r = LD({
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
		ID(e, {
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
function ID(e, { onRangeChange: t, onDomainChange: n, range: r, domain: i }) {
	typeof r == "function" && (e.range = (function(e) {
		if (arguments.length) r(e), t?.();
		else return r();
	})), typeof i == "function" && (e.domain = (function(e) {
		if (arguments.length) i(e), n?.();
		else return i();
	}));
}
function LD({ range: e, reverse: t, createExpression: n, registerExpr: r }) {
	if (!e || !E(e)) return null;
	let i = (e, t) => t ? e.slice().reverse() : e;
	if (e.some(V)) {
		let a;
		return {
			dynamic: !0,
			evaluate: () => i(a.map((e) => e()), t),
			setup: (t) => {
				a = e.map((e) => {
					if (V(e)) {
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
//#region src/utils/mergeObjects.js
function RD(e, t, n) {
	if (n ||= [], e.some((e) => e === null)) {
		if (e.every((e) => e === null)) return null;
		throw console.warn(e), Error("Cannot merge objects with nulls!");
	}
	let r = {}, i = (e, t) => e === t || zD(e) && zD(t) || zD(e) && t === !0 || e === !0 && D(t) || Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n) => e === t[n]), a = (e) => {
		for (let a in e) {
			let o = e[a];
			if (!n.includes(a) && o !== void 0) if (r[a] !== void 0 && !i(r[a], o)) console.warn(`Conflicting property ${a} of ${t}: (${JSON.stringify(r[a])} and ${JSON.stringify(e[a])}). Using ${JSON.stringify(r[a])}.`);
			else {
				let e = r[a];
				if (zD(e)) zD(o) && (r[a] = RD([e, o], a));
				else if (zD(o)) {
					if (!(e === !0 || e === void 0)) throw Error("Bug in merge! Target is: " + e);
					r[a] = RD([{}, o], a);
				} else r[a] = o;
			}
		}
	};
	for (let t of e) a(t);
	return r;
}
function zD(e) {
	return D(e) && !Array.isArray(e);
}
//#endregion
//#region src/config/scaleConfig.js
var BD = {
	nominal: "nominalColorScheme",
	ordinal: "ordinalColorScheme",
	quantitative: "quantitativeColorScheme"
}, VD = new Set(["rect"]), HD = new Set([
	"shape",
	"size",
	"angle",
	"heatmap",
	"ramp",
	"diverging"
]);
function UD(e) {
	return typeof e == "string" || typeof e == "object" && !!e;
}
function WD(e) {
	return HD.has(e);
}
function GD(e, t) {
	if (WD(t)) return YD(e)[t];
}
function KD(e) {
	if ([
		"nominal",
		"ordinal",
		"quantitative",
		"index",
		"locus"
	].includes(e)) return e;
}
function qD(e) {
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
function JD(e, t) {
	let n = KD(t);
	return US(e.flatMap((e) => {
		let t = e.scale;
		return [t, t && n ? t[n] : void 0];
	}));
}
function YD(e) {
	return US(e.map((e) => e.range));
}
function XD(e, { channel: t, dataType: n, isExplicitDomain: r, markTypes: i, hasDomainMid: a }) {
	let o = JD(e, n), s = YD(e), c = { ...qD(o) };
	if (r ? c.zero = !1 : c.zero === void 0 && o.zero !== void 0 && (c.zero = o.zero), Ff(t) && c.nice === void 0 && (c.nice = o.nice === void 0 ? !r : o.nice), Vf(t) && c.scheme === void 0) if (n == "quantitative") {
		let e = a || o.domainMid !== void 0 ? s.diverging : i?.length && i.every((e) => VD.has(e)) ? s.heatmap : s.ramp, t = UD(e) ? e : o.quantitativeColorScheme;
		UD(t) && (c.scheme = t);
	} else {
		let e = o[BD[n] ?? BD.quantitative];
		UD(e) && (c.scheme = e);
	}
	else Hf(t) && c.range === void 0 ? c.range = t == "shape" ? s.shape ?? [] : [] : t == "size" && c.range === void 0 ? c.range = s.size : t == "angle" && c.range === void 0 && (c.range = s.angle);
	return c;
}
//#endregion
//#region src/scales/scaleResolutionConstants.js
var ZD = "quantitative", QD = "ordinal", $D = "nominal";
//#endregion
//#region src/scales/scaleRules.js
function eO(e, t) {
	if (t == "index" || t == "locus") {
		if (Pf(e)) return t;
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
		$D,
		QD,
		ZD
	].indexOf(t)] : t == "quantitative" ? "linear" : "ordinal";
	if (r === void 0) throw Error("Channel \"" + e + "\" is not compatible with \"" + t + "\" data type. Use of a proper scale may be needed.");
	return r;
}
function tO(e, t) {
	Ff(t) && e.type !== "ordinal" && (e.range = [0, 1]), t == "opacity" && R(e.type) && e.clamp === void 0 && (e.clamp = !0);
}
//#endregion
//#region src/scales/scalePropsResolver.js
function nO({ channel: e, dataType: t, orderedMembers: n, isExplicitDomain: r, configScopes: i }) {
	let a = n, o = a.map((e) => typeof e.view.getMarkType == "function" ? e.view.getMarkType() : void 0).filter((e) => !!e), s = RD(a.map((e) => e.channelDef.scale).filter((e) => e !== void 0), "scale", ["domain"]);
	if (s === null || s.type == "null") return { type: "null" };
	let c = {
		...XD(i, {
			channel: e,
			dataType: t,
			isExplicitDomain: r,
			markTypes: o,
			hasDomainMid: s.domainMid !== void 0
		}),
		...s
	};
	if (c.type ||= eO(e, t), typeof c.range == "string") {
		if (!WD(c.range)) throw Error("Unknown named scale range \"" + c.range + "\". Supported names: shape, size, angle, heatmap, ramp, diverging.");
		let t = GD(i, c.range);
		if (t === void 0) throw Error("Named scale range \"" + c.range + "\" is not configured in config.range.");
		Vf(e) && (typeof t == "string" || typeof t == "object" && t && !Array.isArray(t)) ? (c.scheme = t, delete c.range) : c.range = t;
	}
	if (e == "y" && fd(c.type) && c.reverse == null && (c.reverse = !0), c.range && c.scheme && delete c.scheme, c.domainTransition === void 0 && (c.domainTransition = !a.some((e) => V(e.channelDef.scale?.domain))), Array.isArray(c.range) && c.range.some(V) && a.length > 0) {
		let e = a.find((e) => e.channelDef.scale?.range !== void 0)?.view;
		e && (c.__rangeExprScope = e);
	}
	if (!("zoom" in c)) {
		let e = JD(i, t);
		e.zoom === void 0 ? ["index", "locus"].includes(c.type) && (c.zoom = !0) : c.zoom = e.zoom;
	}
	return tO(c, e), c;
}
//#endregion
//#region src/scales/indexLikeDomainUtils.js
function rO(e) {
	return e === "index" || e === "locus";
}
function iO(e, t) {
	return rO(e) ? sO(t) : t;
}
function aO(e, t) {
	return rO(e) ? cO(t) : t;
}
function oO(e, t) {
	return t && rO(e) ? sO(t) : t;
}
function sO(e) {
	return [e[0], e[1] + lO(e)];
}
function cO(e) {
	return [e[0], e[1] - lO(e)];
}
function lO(e) {
	return e[1] >= e[0] ? 1 : -1;
}
//#endregion
//#region src/scales/selectionDomainUtils.js
function uO(e, t) {
	let n = e.findRuntimeForParam(t);
	if (!n) throw Error(`Selection domain parameter "${t}" was not found.`);
	return n;
}
function dO(e, t) {
	if (e) {
		if (!Zf(e)) throw Error(`Selection domain parameter "${t}" must be an interval selection.`);
		return e;
	}
}
function fO(e, t, n) {
	let r = e.paramRuntime.findRuntimeForParam ? uO(e.paramRuntime, t) : e.paramRuntime;
	return {
		runtime: r,
		selection: dO(r.getValue ? r.getValue(t) : e.paramRuntime.findValue(t), t)
	};
}
function pO(e, t, n, r) {
	let i = [];
	return e.visit((e) => {
		let a = e.paramRuntime?.paramConfigs?.get(n);
		if (!a || !sp(a)) return;
		let o = ep(a.select);
		!np(o) || !o.encodings?.includes(r) || e.paramRuntime.findRuntimeForParam(n) === t && i.push({
			view: e,
			param: a
		});
	}), i;
}
function mO(e, t, n, r) {
	let i = /* @__PURE__ */ new Set(), a = [
		e.getLayoutAncestors?.(),
		e.getDataAncestors?.(),
		[e]
	];
	for (let e of a) for (let a of e ?? []) {
		if (!a || i.has(a)) continue;
		i.add(a);
		let e = a.paramRuntime?.paramConfigs?.get(n);
		if (!e || !sp(e)) continue;
		let o = ep(e.select);
		if (!(!np(o) || !o.encodings?.includes(r)) && a.paramRuntime.findRuntimeForParam?.(n) === t) return !0;
	}
	return !1;
}
function hO(e, t, n = {}) {
	if (!e || e.length !== 2) return;
	let r = Number(e[0]), i = Number(e[1]);
	if (!Number.isFinite(r) || !Number.isFinite(i)) return;
	let a = Math.min(r, i), o = Math.max(r, i);
	if (a = Math.max(t[0], a), o = Math.min(t[1], o), !(a > o) && !(n.roundToIntegers && (a = Math.ceil(a), o = Math.ceil(o), a = Math.max(t[0], a), o = Math.min(t[1], o), a > o))) return [a, o];
}
//#endregion
//#region src/utils/domainArray.js
var gO = class e extends Array {
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
}, _O = class extends gO {
	constructor() {
		super(), this.type = "quantitative";
	}
	extend(e) {
		return e == null || Number.isNaN(e) ? this : (e = +e, this.length ? e < this[0] ? this[0] = e : e > this[1] && (this[1] = e) : (this.push(e), this.push(e)), this);
	}
}, vO = class extends gO {
	constructor() {
		super(), this.type = "ordinal", this.uniqueValues = /* @__PURE__ */ new Set();
	}
	extend(e) {
		return e == null || Number.isNaN(e) || this.uniqueValues.has(e) || (this.uniqueValues.add(e), this.push(e)), this;
	}
}, yO = class extends vO {
	constructor() {
		super(), this.type = "nominal";
	}
}, bO = class extends gO {
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
}, xO = {
	quantitative: _O,
	index: _O,
	locus: _O,
	nominal: yO,
	ordinal: vO
};
function SO(e, t) {
	if (e == "quantitative" && CO(t)) {
		let n = new bO(t);
		return n.type = e, n;
	} else if (xO[e]) {
		let n = new xO[e]();
		return n.type = e, t && n.extendAll(t), n;
	}
	throw Error("Unknown type: " + e);
}
function CO(e) {
	return e && e.length > 0 && e.length != 2 && e.every((e) => typeof e == "number");
}
//#endregion
//#region src/scales/domainPlanner.js
var wO = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s = void 0;
	#c = !0;
	#l = /* @__PURE__ */ new Map();
	#u = /* @__PURE__ */ new WeakMap();
	constructor({ getActiveMembers: e, getAllMembers: t, getDataMembers: n, getType: r, getLocusExtent: i, fromComplexInterval: a }) {
		this.#e = e, this.#t = t ?? e, this.#n = n ?? e, this.#r = r, this.#i = i, this.#a = a;
	}
	get initialDomainSnapshot() {
		return this.#o;
	}
	hasConfiguredDomain(e = {}) {
		return !!this.getConfiguredDomain(e);
	}
	hasSelectionConfiguredDomain() {
		return this.getSelectionConfiguredDomainBindingInfo(), !!this.#s;
	}
	getSelectionConfiguredDomainBindingInfo() {
		return this.#s || !this.#c || this.getConfiguredDomain(), this.#s;
	}
	getSelectionConfiguredDomainInfo() {
		let e = this.getSelectionConfiguredDomainBindingInfo();
		if (e) return {
			param: e.param,
			encoding: e.encoding
		};
	}
	invalidateConfiguredDomain() {
		this.#c = !0, this.#s = void 0, this.#l.clear();
	}
	getDefaultDomain(e = !1, t) {
		let n = this.#r();
		return IO(n, this.#i, e && n !== "locus" ? this.getDataDomain() : void 0, t);
	}
	getConfiguredOrDefaultDomain(e = !1, t, n = {}) {
		return this.getConfiguredDomain(n) ?? this.getDefaultDomain(e, t);
	}
	getConfiguredDomain(e = {}) {
		let t = e.includeSelectionInitial ?? !0;
		if (!this.#c && this.#l.has(t)) return this.#l.get(t);
		let n = TO(this.#e(), this.#a, t);
		return MO(this.#t(), n.selectionRef), this.#s = n.selectionRef, this.#l.set(t, n.domain), this.#c = !1, n.domain;
	}
	getDataDomain() {
		return FO(this.#n(), this.#r, (e) => this.#d(e));
	}
	captureInitialDomain(e, t, n) {
		if (!this.#o && R(e.type)) {
			let t = n ?? e.domain();
			jt(t) > 0 && (this.#o = t);
		}
		return t ? !1 : (this.#o = n ?? e.domain(), !0);
	}
	#d(e) {
		let t = this.#u.get(e);
		if (t) return t;
		let n = e.view.mark.encoders;
		if (!n) return [];
		let r = n[e.channel];
		if (!r) return [];
		let i = _f(r);
		if (i.length === 0) return [];
		let a = i.filter(of).filter((e) => !e.channelDef.domainInert);
		return this.#u.set(e, a), a;
	}
};
function TO(e, t, n) {
	let r = Array.from(e).filter((e) => e.contributesToDomain).filter((e) => e.channelDef.scale?.domain), i = {
		domains: [],
		selectionRef: void 0,
		selectionRuntime: void 0,
		selectionDescription: void 0,
		hasLiteralDomain: !1
	};
	for (let e of r) {
		let r = EO(e, t, n);
		if (r.kind === "selection") {
			DO(i, r);
			continue;
		}
		OO(i, r);
	}
	return kO(i);
}
function EO(e, t, n) {
	let r = e.channelDef.scale.domain;
	return PO(r) ? {
		kind: "selection",
		...AO(e, r, t, n)
	} : V(r) ? {
		kind: "literal",
		domain: jO(e.channelDef.type, e.view.paramRuntime.createExpression(r.expr)(), t)
	} : {
		kind: "literal",
		domain: jO(e.channelDef.type, r, t)
	};
}
function DO(e, t) {
	if (e.hasLiteralDomain) throw Error("Cannot mix selection-driven and literal configured domains on a shared scale.");
	if (e.selectionRef && (e.selectionRef.runtime !== t.runtime || e.selectionRef.param !== t.param || e.selectionRef.encoding !== t.encoding)) throw Error("Conflicting selection domain references on a shared scale: " + e.selectionDescription + " vs " + t.description + ".");
	e.selectionRuntime = t.runtime, e.selectionDescription = t.description, e.selectionRef = {
		param: t.param,
		encoding: t.encoding,
		hasInitial: (e.selectionRef?.hasInitial ?? !1) || t.hasInitial,
		runtime: t.runtime
	}, t.domain && e.domains.push(t.domain);
}
function OO(e, t) {
	if (e.selectionRuntime) throw Error("Cannot mix literal configured domains with selection-driven domains on a shared scale.");
	e.hasLiteralDomain = !0, e.domains.push(t.domain);
}
function kO(e) {
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
function AO(e, t, n, r) {
	let i = t.param, a = NO(e.channel, t, i), o = fO(e.view, i, a), s = t.initial !== void 0, c = o.selection?.intervals[a], l = i + "." + a;
	return !c || c.length !== 2 ? {
		domain: r && t.initial ? jO(e.channelDef.type, t.initial, n) : void 0,
		description: l,
		param: i,
		encoding: a,
		hasInitial: s,
		runtime: o.runtime
	} : {
		domain: SO(e.channelDef.type, n(c)),
		description: l,
		param: i,
		encoding: a,
		hasInitial: s,
		runtime: o.runtime
	};
}
function jO(e, t, n) {
	let r = n(t);
	return SO(e, e === "locus" && QE(t) && !$E(t) ? r : iO(e, r));
}
function MO(e, t) {
	if (!t || e.size < 2 || !Array.from(e).some((e) => mO(e.view, t.runtime, t.param, t.encoding))) return;
	let n = Array.from(new Set(Array.from(e).filter((e) => e.contributesToDomain).map((e) => e.view.getPathString?.() ?? e.view.name ?? "(unknown)")));
	throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use a shared ${t.encoding} scale when the same interval selection is defined in that shared view group (${n.join(", ")}). This creates a feedback loop between brushing and the scale domain. Make the linked ${t.encoding} scale independent, for example with "resolve": { "scale": { "${t.encoding}": "independent" } } on the common ancestor.`);
}
function NO(e, t, n) {
	if (t.encoding) return t.encoding;
	let r = Bf(e);
	if (r === "x" || r === "y") return r;
	throw Error(`Selection domain reference "${n}" on channel "${e}" requires an explicit "encoding" ("x" or "y").`);
}
function PO(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && typeof e.param == "string";
}
function FO(e, t, n) {
	let r = t(), i = /* @__PURE__ */ new Map();
	for (let t of e) {
		if (!t.contributesToDomain) continue;
		let e = n(t);
		if (e.length === 0) continue;
		let a = t.view.getCollector();
		for (let t of e) {
			let e = uf(t, r), n = a ?? null, o = i.get(n);
			if (o || (o = /* @__PURE__ */ new Map(), i.set(n, o)), o.has(e)) continue;
			let s;
			if (a) s = a.getDomain(e, r, t);
			else if (t.constant) s = SO(r), s.extend(t({}));
			else continue;
			o.set(e, s);
		}
	}
	if (i.size === 0) return;
	let a = SO(r);
	for (let e of i.values()) for (let t of e.values()) a.extendAll(t);
	return a;
}
function IO(e, t, n, r) {
	return e == "locus" ? t(r) : e == "index" ? oO(e, n) ?? [] : n ?? [];
}
//#endregion
//#region ../../node_modules/d3-ease/src/cubic.js
function LO(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region src/utils/eerp.js
function RO(e, t, n) {
	return e * (t / e) ** +n;
}
//#endregion
//#region src/utils/transition.js
var zO = (e) => new Promise((t) => setTimeout(t, e));
function BO() {
	return { canceled: !1 };
}
function VO(e) {
	let t = e.requestAnimationFrame || window.requestAnimationFrame, n = e.signal, r = e.cancelToken, i = () => new Promise((i, a) => {
		if (r?.canceled) return i();
		if (n?.aborted) return a("aborted");
		let o = performance.now(), s = o + (e.duration || 1e3), c = typeof e.from == "number" ? e.from : 0, l = typeof e.to == "number" ? e.to : 1, u = e.easingFunction || ((e) => e), d = (e) => (e - o) / (s - o), f = (e) => e * (l - c) + c, p = (e) => Math.max(0, Math.min(1, e)), m = (o) => {
			if (r?.canceled) {
				i();
				return;
			}
			n?.aborted ? a("aborted") : (e.onUpdate(f(u(p(d(o))))), o < s ? t(m) : (e.onUpdate(f(u(1))), i()));
		};
		t(m);
	});
	return e.delay ? r?.canceled ? Promise.resolve() : n?.aborted ? Promise.reject("aborted") : zO(e.delay).then(i) : i();
}
//#endregion
//#region src/scales/zoomDomainUtils.js
function HO(e, t, n, r, i = {}) {
	let a = i.onUnsupported ?? "throw";
	switch (e.type) {
		case "linear":
		case "index":
		case "locus": return ut(t, n, r);
		case "log": return dt(t, n, r);
		case "pow":
		case "sqrt": return ft(t, n, r, e.exponent());
		case "symlog": return pt(t, n, r, e.constant());
		default:
			if (a === "identity") return t;
			throw Error("Zooming is not implemented for: " + e.type);
	}
}
//#endregion
//#region src/scales/scaleInteractionController.js
var UO = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o = null;
	constructor({ getScale: e, getAnimator: t, getInitialDomainSnapshot: n, getResetDomain: r, fromComplexInterval: i, getGenomeExtent: a }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a;
	}
	getZoomExtent() {
		let e = this.#e(), t = e.props.zoom;
		return WO(e, t, this.#i, this.#a, this.#n);
	}
	isZoomable() {
		return this.isZoomingSupported() && !!this.#e().props.zoom;
	}
	isZoomingSupported() {
		let e = this.#e().type;
		return R(e) && !fd(e);
	}
	getDomainChangeAction(e, t) {
		return Jo(t, e) ? "none" : this.isZoomable() ? "restore" : this.isZoomingSupported() ? "animate" : "notify";
	}
	isZoomed() {
		return this.isZoomingSupported() && !Jo(this.#r(), this.#e().domain());
	}
	zoom(e, t, n) {
		if (!this.isZoomingSupported()) return !1;
		let r = this.#e(), i = r.domain(), a = GO(r, i, e, t, n), o = this.getZoomExtent();
		return a = ht(a, o[0], o[1]), [0, 1].some((e) => a[e] != i[e]) ? (r.domain(a), !0) : !1;
	}
	async zoomTo(e, t = !1) {
		if (Tt(t) && (t = t ? 700 : 0), !this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let n = this.#e(), r = KO(n.type, e, this.#i), i = this.#t(), a = n.domain();
		if (t > 0 && a.length == 2) {
			let e = a[1] - a[0], o = r[1] - r[0], s = a[0] + e / 2, c = r[0] + o / 2, l = a[0] == r[0], u = a[1] == r[1];
			this.#s();
			let d = BO();
			this.#o = d, await i.transition({
				duration: t,
				easingFunction: LO,
				cancelToken: d,
				onUpdate: (t) => {
					let r = RO(e, o, t), i = e == o ? t : (e - r) / (e - o), d = i * c + (1 - i) * s, f = [l ? a[0] : d - r / 2, u ? a[1] : d + r / 2];
					n.domain(f);
				}
			}), this.#o === d && (this.#o = null), n.domain(r);
		} else this.#s(), n.domain(r), i?.requestRender();
	}
	#s() {
		this.#o &&= (this.#o.canceled = !0, null);
	}
	resetZoom() {
		if (!this.isZoomingSupported()) throw Error("Not a zoomable scale!");
		let e = this.#e(), t = e.domain(), n = this.#r();
		return [0, 1].some((e) => n[e] != t[e]) ? (e.domain(n), !0) : !1;
	}
	getZoomLevel() {
		return this.isZoomable() ? jt(this.getZoomExtent()) / jt(this.#e().domain()) : 1;
	}
};
function WO(e, t, n, r, i) {
	return qO(t) && E(t.extent) ? KO(e.props.type, t.extent, n) : t && e.props.type == "locus" ? r() : i();
}
function GO(e, t, n, r, i) {
	let a = [...t], o = e.invert(r);
	switch (e.props.reverse && (i = -i), "align" in e && (o += e.align()), e.type) {
		case "linear":
		case "index":
		case "locus":
			a = ot(a, i || 0);
			break;
		case "log":
			a = st(a, i || 0);
			break;
		case "pow":
		case "sqrt":
			a = ct(a, i || 0, e.exponent());
			break;
		case "symlog":
			if (i !== 0) throw Error("Panning is not implemented for: " + e.type);
			break;
		default: throw Error("Zooming is not implemented for: " + e.type);
	}
	return HO(e, a, o, n);
}
function KO(e, t, n) {
	let r = e === "locus" ? n(t) : t;
	return e === "locus" && QE(t) && !$E(t) ? r : iO(e, r);
}
function qO(e) {
	return D(e);
}
//#endregion
//#region src/scales/resolutionMemberOrder.js
function JO(e) {
	let t = e.view.getPathString(), n = e.channel ?? "";
	return t + "|" + n;
}
function YO(e) {
	return Array.from(e).sort((e, t) => JO(e).localeCompare(JO(t)));
}
L("index", UE, ["continuous"]), L("locus", aD, ["continuous"]), L("null", lx, []);
var XO = class {
	#e = /* @__PURE__ */ new Set();
	#t = /* @__PURE__ */ new Set();
	#n;
	#r = {
		domain: /* @__PURE__ */ new Set(),
		range: /* @__PURE__ */ new Set()
	};
	#i;
	#a;
	#o;
	#s;
	#c = !1;
	#l = [];
	#u = 0;
	#d = [];
	#f = !1;
	#p = void 0;
	#m;
	#h = 0;
	#g = 0;
	#_ = !1;
	constructor(e, t) {
		this.channel = e, this.type = null, this.name = void 0, this.#m = t, this.#a = new wO({
			getActiveMembers: () => this.#b(),
			getAllMembers: () => this.#e,
			getDataMembers: () => this.#b(this.#t),
			getType: () => this.type,
			getLocusExtent: (e) => this.#S(e),
			fromComplexInterval: this.fromComplexInterval.bind(this)
		}), this.#i = new FD({
			getParamRuntime: () => this.#y.paramRuntime,
			onRangeChange: () => this.#w("range"),
			onDomainChange: () => this.#w("domain"),
			getGenomeStore: () => this.#x.genomeStore
		}), this.#o = new UO({
			getScale: () => this.getScale(),
			getAnimator: () => this.#x.animator,
			getInitialDomainSnapshot: () => this.#a.initialDomainSnapshot,
			getResetDomain: () => this.#k(),
			fromComplexInterval: this.fromComplexInterval.bind(this),
			getGenomeExtent: () => this.#S()
		});
	}
	get #v() {
		let e = this.#e.values().next().value;
		if (!e) throw Error("ScaleResolution has no members!");
		return e.view;
	}
	get #y() {
		return this.#m ?? this.#v;
	}
	#b(e = this.#e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.view;
			e.isConfiguredVisible() && (!e.isDataInitialized() && !n.channelDef?.scale?.domain || t.add(n));
		}
		return t;
	}
	get #x() {
		return this.#y.context;
	}
	get zoomExtent() {
		return (this.#i.scale && R(this.#i.scale.type) && this.#o.getZoomExtent()) ?? [-Infinity, Infinity];
	}
	#S(e) {
		return dD(this.#C(e));
	}
	#C(e) {
		if (this.type === "locus") return this.#i.scale ?? this.#i.getLocusGenome(e);
	}
	addEventListener(e, t) {
		this.#r[e].add(t);
	}
	removeEventListener(e, t) {
		this.#r[e].delete(t);
	}
	#w(e) {
		e === "domain" && this.#u === 0 && this.syncLinkedSelectionFromDomain();
		for (let t of this.#r[e].values()) t({
			type: e,
			scaleResolution: this
		});
	}
	#T(e) {
		this.#u += 1;
		try {
			e();
		} finally {
			--this.#u;
		}
	}
	syncLinkedSelectionFromDomain() {
		let e = this.#a.getSelectionConfiguredDomainBindingInfo();
		if (!e || !this.isZoomable()) return;
		let t = dO(e.runtime.getValue(e.param), e.param);
		if (!t) return;
		let n = this.#E(this.getScale().domain());
		if (!n) return;
		let r = this.#E(this.#a.getDefaultDomain(!0)), i = r && Jo(n, r) ? null : n;
		ZO(t.intervals[e.encoding] ?? null, i) || e.runtime.setValue(e.param, {
			...t,
			type: "interval",
			intervals: {
				...t.intervals,
				[e.encoding]: i
			}
		});
	}
	#E(e) {
		return hO(e, this.zoomExtent);
	}
	#D() {
		return this.#a.getSelectionConfiguredDomainBindingInfo();
	}
	#O() {
		return !this.#f;
	}
	#k(e = !1, t) {
		return this.#a.getConfiguredOrDefaultDomain(e, t, { includeSelectionInitial: this.#O() });
	}
	#A() {
		for (let e of this.#e) if (e.contributesToDomain && e.channelDef.scale?.domain !== void 0) return !0;
		return !1;
	}
	#j(e) {
		let t = dO(e.runtime.getValue(e.param), e.param);
		if (!t) return null;
		let n = t.intervals[e.encoding];
		return n && n.length === 2 ? n : null;
	}
	#M(e, t) {
		t ? this.#f = !1 : e && (this.#f = !0);
	}
	#N(e) {
		let t = QO(e), { channel: n, channelDef: r } = t, i = r.type == null && this.type;
		if (n != "sample" && !r.type && !Rf(n) && !i) throw Error(`The "type" property must be defined in channel definition: "${n}": ${JSON.stringify(r)}. Must be one of: "quantitative", "ordinal", "nominal", "locus", "index"`);
		let a = n == "sample" ? "nominal" : r.type, o = r?.scale?.name, s = r.scale?.type ?? (a === "index" || a === "locus" ? a : void 0);
		if (s && ["index", "locus"].includes(s) && !Pf(this.channel)) throw Error(`Index and locus scales are only supported on positional channels (x/y). Channel "${this.channel}" resolves to scale type "${s}".`);
		if (o) {
			if (this.name !== void 0 && o != this.name) throw Error(`Shared scales have conflicting names: "${o}" vs. "${this.name}"!`);
			this.name = o;
		}
		if (!i) {
			if (!this.type) this.type = a;
			else if (a !== this.type && !Rf(n)) throw Error(`Can not use shared scale for different data types: ${this.type} vs. ${a}. Use "resolve: independent" for channel ${this.channel}`);
		}
		return this.#e.add(t), t.contributesToDomain && this.#t.add(t), t;
	}
	#P() {
		this.#_ = !1, this.#U(), this.#G(), this.#R(), this.#z();
	}
	#F() {
		this.#g > 0 ? this.#_ = !0 : this.#P();
	}
	static registerInBatch(e, t) {
		let n = Array.from(e);
		for (let e of n) e.#g++;
		try {
			return t();
		} finally {
			for (let e of n) e.#g--, e.#g === 0 && e.#_ && e.#P();
		}
	}
	registerMember(e) {
		let t = this.#N(e);
		return this.#F(), () => {
			let e = this.#e.delete(t);
			return e && (this.#t.delete(t), this.#F()), e && this.#e.size === 0;
		};
	}
	dispose() {
		this.#I(), this.#L(), this.#r.domain.clear(), this.#r.range.clear(), this.#i.dispose();
	}
	#I() {
		for (let e of this.#l) e();
		this.#l = [], this.#p = void 0;
	}
	#L() {
		for (let e of this.#d) e();
		this.#d = [];
	}
	#R() {
		if (this.#I(), this.#e.size === 0) return;
		let e = this.#D();
		e && (this.#p = this.#j(e), this.#l.push(e.runtime.subscribe(e.param, () => {
			let t = this.#p, n = this.#j(e);
			this.#M(t, n), this.#p = n, this.#G(), this.reconfigureDomain();
		})));
	}
	#z() {
		if (this.#L(), this.#e.size === 0) return;
		let e = () => {
			this.#G(), this.reconfigureDomain();
		};
		for (let t of this.#e) {
			if (!t.contributesToDomain) continue;
			let n = t.channelDef.scale?.domain;
			if (!V(n)) continue;
			let r = t.view.paramRuntime.createExpression(n.expr).subscribe(e);
			this.#d.push(r);
		}
	}
	#B() {
		for (let e of this.#e) if (e.view.hasRendered()) return !0;
		return !1;
	}
	registerCollectorSubscriptions(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let e of t) e.channelDef.domainInert || n.add(uf(e, this.type));
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
		return this.#A();
	}
	isDomainInitialized() {
		let e = this.#i.scale;
		if (!e) return !1;
		let t = e.domain();
		return R(e.type) ? t.length > 2 || t.length == 2 && (t[0] !== 0 || t[1] !== 0) : t.length > 0;
	}
	#V() {
		return jS(this, "mergedScaleProps", () => {
			let e = nO({
				channel: this.channel,
				dataType: this.type,
				orderedMembers: this.#W(),
				isExplicitDomain: this.isDomainDefinedExplicitly(),
				configScopes: this.#y.getConfigScopes()
			});
			return this.#K(e), e;
		});
	}
	#H() {
		MS(this, "mergedScaleProps");
	}
	#U() {
		this.#n = void 0;
	}
	#W() {
		return this.#n ||= YO(this.#e), this.#n;
	}
	#G() {
		this.#a.invalidateConfiguredDomain(), this.#H();
	}
	#K(e) {
		let t = this.#D();
		if (!t || e === null || e.type === "null") return;
		let n = R(e.type) && !fd(e.type) && !!e.zoom;
		if (t.hasInitial && !n) throw Error(`Selection domain reference "${t.param}.${t.encoding}" cannot use "initial" with a non-zoomable ${this.channel} scale. Enable zoom on the linked scale or remove "initial".`);
	}
	getAssemblyRequirement() {
		let e = this.#V();
		return e === null || e.type === "null" || e.type !== "locus" ? {
			assembly: void 0,
			needsDefaultAssembly: !1
		} : {
			assembly: e.assembly,
			needsDefaultAssembly: e.assembly === void 0
		};
	}
	getResolvedScaleType() {
		let e = this.#V();
		if (!(e === null || e.type === "null")) return e.type;
	}
	#q(e = !1) {
		let t = this.#V();
		if (t === null || t.type == "null") return { type: "null" };
		let n = { ...t };
		this.#h += 1;
		let r;
		try {
			r = this.#k(e, n.type === "locus" ? n.assembly : void 0);
		} finally {
			--this.#h;
		}
		if (fd(n.type)) {
			let t = this.isDomainDefinedExplicitly(), i = this.#J(t);
			if (r != null) {
				if (t && i.domain().length > 0 && !Jo(i.domain(), r)) return this.#s = void 0, this.#q(e);
				i.addAll(r);
				let a = new Set(r), o = i.domain().filter((e) => a.has(e));
				n.domain = o.length > 0 ? o : new yO();
			} else {
				let e = i.domain();
				n.domain = e.length > 0 ? e : new yO();
			}
			n.domainIndexer = i;
		} else r && r.length > 0 && (n.domain = r);
		return !n.domain && n.domainMid !== void 0 && (n.domain = [n.domainMin ?? 0, n.domainMax ?? 1]), n;
	}
	#J(e) {
		return (!this.#s || this.#c !== e) && (this.#s = mS(), this.#c = e), this.#s;
	}
	reconfigure() {
		this.#T(() => {
			this.#G();
			let e = this.#Y(!0);
			e && (this.#X(e, (e, t) => this.#i.reconfigureScale(t)), this.#Z(e));
		});
	}
	reconfigureDomain() {
		this.#T(() => {
			let e = this.#Y(!0, !0);
			if (!e) return;
			let { domainConfig: t, targetDomain: n } = e, r = n != null && Jo(n, e.scale.domain());
			n != null && !r && this.#X(e, (e) => {
				e.domain(n), t.applyOrdinalUnknown && e.unknown(t.ordinalUnknown);
			}), this.#Z(e), this.syncLinkedSelectionFromDomain();
		});
	}
	#Y(e, t = !1) {
		let n = this.#i.scale;
		if (!n || n.type == "null") return;
		let r = {
			scale: n,
			props: this.#q(e),
			previousDomain: n.domain(),
			domainWasInitialized: this.isDomainInitialized(),
			hasSelectionConfiguredDomain: this.#a.hasSelectionConfiguredDomain()
		};
		if (t) {
			let e = TD(n, r.props);
			return {
				...r,
				domainConfig: e,
				targetDomain: e.domain
			};
		}
		return r;
	}
	#X(e, t) {
		this.#i.withDomainNotificationsSuppressed(() => {
			t(e.scale, e.props);
		});
	}
	#Z(e) {
		let { scale: t, previousDomain: n, domainWasInitialized: r, hasSelectionConfiguredDomain: i } = e, a = i ? this.#a.getDefaultDomain(!0) : void 0;
		if (this.#a.captureInitialDomain(t, r, a)) {
			this.#w("domain");
			return;
		}
		if (t.props.domainTransition === !1) {
			this.#w("domain");
			return;
		}
		let o = t.domain(), s = this.#o.getDomainChangeAction(n, o);
		s === "restore" ? i ? this.#w("domain") : this.#i.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}) : s === "animate" ? i ? this.#w("domain") : this.#B() ? (this.#i.withDomainNotificationsSuppressed(() => {
			t.domain(n);
		}), this.zoomTo(o, 500)) : this.#w("domain") : s === "notify" && this.#w("domain");
	}
	get scale() {
		if (this.#i.scale) return this.#i.scale;
		throw Error("ScaleResolution.scale accessed before initialization. Call initializeScale().");
	}
	getScale() {
		if (this.#h > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own scale while its domain is being resolved.`);
		return this.#i.scale ?? this.initializeScale();
	}
	initializeScale() {
		if (this.#i.scale) return this.#i.scale;
		let e = this.#q();
		return this.#i.createScale(e);
	}
	getDomain() {
		if (this.#h > 0) throw Error(`Scale resolution for channel "${this.channel}" cannot read its own domain while its domain is being resolved.`);
		return this.getScale().domain();
	}
	getDataDomain() {
		return this.#a.getDataDomain();
	}
	getComplexDomain() {
		return uD(this.#C(), aO(this.type, this.getDomain()));
	}
	getLinkedSelectionDomainInfo() {
		let e = this.#D();
		if (!e) return;
		let t = this.#y.getLayoutAncestors().at(-1), n = t ? pO(t, e.runtime, e.param, e.encoding).some((e) => e.param.persist !== !1) : !1;
		return {
			param: e.param,
			encoding: e.encoding,
			persist: n
		};
	}
	isZoomed() {
		return this.#o.isZoomed();
	}
	isZoomable() {
		let e = this.#V();
		return e === null || e.type === "null" ? !1 : R(e.type) && !fd(e.type) && !!e.zoom;
	}
	zoom(e, t, n) {
		return this.#o.zoom(e, t, n);
	}
	async zoomTo(e, t = !1) {
		return this.#o.zoomTo(e, t);
	}
	resetZoom() {
		return this.#o.resetZoom();
	}
	getZoomLevel() {
		return this.#o.getZoomLevel();
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
		return sD(this.#C(), e);
	}
	fromComplex(e) {
		return cD(this.#C(), e);
	}
	fromComplexInterval(e) {
		return this.type == "locus" ? lD(this.#C(), e) : e;
	}
};
function ZO(e, t) {
	return e === t ? !0 : !e || !t ? !1 : e.length === t.length && Jo(e, t);
}
function QO(e) {
	let t = e.channelDef.scale, n = t?.assembly;
	if (!t || !n || typeof n != "object" || !("url" in n)) return e;
	let r = JC(e.view.getBaseUrl(), n.url);
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
//#region src/utils/coalesce.js
function $O(...e) {
	for (let t of e) if (t !== void 0) return t;
}
//#endregion
//#region src/scales/axisResolution.js
var ek = class {
	#e = /* @__PURE__ */ new Set();
	constructor(e) {
		this.channel = e;
	}
	get scaleResolution() {
		return this.#e.values().next().value?.view.getScaleResolution(this.channel);
	}
	#t(e) {
		let { view: t } = e, n = t.getScaleResolution(this.channel);
		if (!n) throw Error("Cannot find a scale resolution!");
		if (this.scaleResolution && n !== this.scaleResolution) throw Error(`Shared axes must have a shared scale! Channel: ${this.channel}, existing views: [${Array.from(this.#e).map((e) => e.view.getPathString()).join(", ")}], new view: ${t.getPathString()}.`);
		this.#e.add(e), MS(this, "axisProps");
	}
	registerMember(e) {
		return this.#t(e), () => this.removeMember(e) && this.#e.size === 0;
	}
	removeMember(e) {
		let t = this.#e.delete(e);
		return t && MS(this, "axisProps"), t;
	}
	getAxisProps() {
		return jS(this, "axisProps", () => {
			let e = YO(this.#e).map((e) => {
				let t = e.view.mark.encoding[e.channel];
				return "axis" in t && t.axis;
			});
			return e.length > 0 && e.some((e) => e === null) ? null : RD(e.filter((e) => e !== void 0), "axis", ["title"]);
		});
	}
	getTitle() {
		let e = YO(this.#e).map((e) => {
			let t = Ef(e.view, e.channel);
			if (!xf(t)) return {
				member: e,
				axisTitle: "axis" in t ? t.axis?.title : void 0,
				explicitTitle: $O("axis" in t ? t.axis?.title : void 0, t.title),
				implicitTitle: $O(Sf(t) ? t.field : void 0, Of(t) ? t.expr : void 0)
			};
		}), t = e.map((e) => e.axisTitle).find((e) => e !== void 0);
		if (t !== void 0) return t;
		let n = e.filter((t) => {
			if (Rf(t.member.channel) && !t.explicitTitle) {
				let n = Bf(t.member.channel);
				return e.find((e) => e.member.view == t.member.view && e.member.channel == n)?.explicitTitle === void 0;
			}
			return !0;
		}), r = new Set(n.map((e) => $O(e.explicitTitle, e.implicitTitle)).filter(O));
		return r.size ? [...r].join(", ") : null;
	}
}, tk = (e) => {
	if (wf(e)) return e;
	if (Af(e)) {
		let t = e.condition;
		if (!Array.isArray(t) && wf(t)) return t;
	}
}, nk = (e, t, n) => {
	let r = e;
	for (; (r.getConfiguredOrDefaultResolution(n, t) == "forced" || r.dataParent && [
		"shared",
		"excluded",
		"forced"
	].includes(r.dataParent.getConfiguredOrDefaultResolution(n, t))) && r.getConfiguredOrDefaultResolution(n, t) != "excluded";) r = r.dataParent;
	return r;
}, rk = (e, t, n) => {
	if (!t.resolutions.scale[n]) {
		let r = new XO(n, t);
		t.resolutions.scale[n] = r;
		let i = (t) => {
			e.context.glHelper?.createRangeTexture(t.scaleResolution, !0);
		};
		r.addEventListener("range", i), r.addEventListener("domain", i), e.registerDisposer(() => {
			r.removeEventListener("range", i), r.removeEventListener("domain", i);
		});
	}
	return t.resolutions.scale[n];
}, ik = (e, t, n, r) => {
	let i = tk(r);
	if (!i) return;
	let a = Bf(i.resolutionChannel ?? n);
	if (Uf(a) && !(t == "axis" && !Ff(a))) return {
		view: nk(e, t, a),
		channel: n,
		channelDef: i,
		targetChannel: a
	};
}, ak = (e, t) => {
	for (let [n, r] of Object.entries(e.mark.encoding)) !r || Array.isArray(r) || t(n, r);
}, ok = (e) => {
	let t = [];
	return ak(e, (n, r) => {
		let i = ik(e, "axis", n, r);
		i && Ff(i.channel) && t.push(i);
	}), t;
}, sk = (e) => {
	let t = /* @__PURE__ */ new Map();
	return ak(e, (n, r) => {
		let i = ik(e, "scale", n, r);
		if (!i) return;
		let a = rk(e, i.view, i.targetChannel), o = t.get(a);
		o ? o.push(i) : t.set(a, [i]);
	}), t;
}, ck = (e, t) => {
	for (let { view: n, channel: r, channelDef: i, targetChannel: a } of t) {
		if (!Ff(r) || !Pf(a)) continue;
		n.resolutions.axis[a] || (n.resolutions.axis[a] = new ek(a));
		let t = n.resolutions.axis[a], o = t.registerMember({
			view: e,
			channel: r,
			channelDef: i
		});
		e.registerDisposer(() => {
			o() && n.resolutions.axis[a] === t && delete n.resolutions.axis[a];
		});
	}
}, lk = (e, t) => {
	XO.registerInBatch(t.keys(), () => {
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
}, uk = (e, t) => {
	if (!t) {
		uk(e, "scale"), uk(e, "axis");
		return;
	}
	t == "axis" ? ck(e, ok(e)) : lk(e, sk(e));
}, dk = {
	point: uC,
	rect: rC,
	rule: gC,
	tick: gC,
	link: OC,
	text: PC
}, $ = class extends PE {
	#e;
	#t = !1;
	#n = null;
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
		let o = dk[this.getMarkType()];
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
			for (let e of jf) this.getScaleResolution(e)?.syncLinkedSelectionFromDomain();
		})), this.needsAxes = {
			x: !0,
			y: !0
		}, this.#r();
	}
	#r() {
		for (let [e, t] of this.paramRuntime.paramConfigs) {
			if (!("select" in t)) continue;
			let n = ep(t.select), r = n.on, i = n.clear;
			if (tp(n)) {
				let t = 0, a = (t) => {
					this.paramRuntime.setValue(e, t);
				}, o = () => {
					let e = this.context.getCurrentHover();
					return e?.mark?.unitView === this ? e.datum : null;
				}, s = r.filter ? EE(r.filter) : () => !0;
				if (this.addInteractionListener(["mouseover", "pointerover"].includes(r.type) ? "mousemove" : r.type, (r) => {
					if (!s(r.proxiedMouseEvent)) return;
					let i = o(), c = i ? i[$d] : 0, l;
					n.toggle ? r.mouseEvent.shiftKey ? i && (l = Yf(this.paramRuntime.getValue(e), { toggle: [i] })) : l = qf(i ? [i] : null) : c != t && (t = c, l = Kf(i)), l !== void 0 && a(l);
				}), i) {
					let e = i.filter ? EE(i.filter) : () => !0;
					this.addInteractionListener(i.type, (r) => {
						e(r.proxiedMouseEvent) && (t = 0, a(n.toggle ? qf() : Kf(null)));
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
			this.resolve("scale"), this.resolve("axis");
			return;
		}
		uk(this, e);
	}
	dispose() {
		super.dispose(), this.mark.dispose();
	}
	getDataAccessor(e) {
		let t = this.mark.encoders;
		if (t) return t[e] ? vf(t[e]) : void 0;
	}
	getSearchAccessors() {
		return this.#n ||= (BE(this.getEncoding()) ?? []).map((e) => B(e)), this.#n;
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
		let n = Vd(e), r = /* @__PURE__ */ new Map();
		for (let e of Object.values(t)) {
			if (!e) continue;
			let t = _f(e);
			if (t.length !== 0) for (let e of t) {
				if (!of(e)) continue;
				let t = this.getScaleResolution(e.scaleChannel);
				if (!t) throw Error("Missing scale resolution for channel: " + e.scaleChannel);
				if (e.channelDef.domainInert || fk(e, t, n)) continue;
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
		return jf.map((e) => this.getScaleResolution(e)?.getZoomLevel() ?? 1).reduce((e, t) => e * t, 1);
	}
	propagateInteraction(e) {
		this.handleInteraction(e, !0), e.target = this, !e.stopped && this.handleInteraction(e, !1);
	}
	getDefaultResolution(e, t) {
		return e == "x" ? "shared" : "independent";
	}
};
function fk(e, t, n) {
	return !t.isDomainDefinedExplicitly() && n.has(Bf(e.scaleChannel));
}
//#endregion
//#region src/utils/fetchUtils.js
var pk = class extends Error {
	constructor(e, t) {
		super(t), this.kind = e;
	}
};
async function mk(e, t = {}) {
	let n;
	try {
		n = await fetch(e, { signal: t.signal });
	} catch (e) {
		throw new pk("network", String(e));
	}
	if (!n.ok) throw new pk("http", String(n.status) + " " + n.statusText);
	try {
		return await n.json();
	} catch (e) {
		throw new pk("json", String(e));
	}
}
//#endregion
//#region src/view/viewUtils.js
function hk(e) {
	let t = /* @__PURE__ */ new Set();
	e.visit((e) => {
		for (let n of Object.values(e.resolutions.scale)) {
			let e = n.name;
			if (e && t.has(e)) throw Error(`The same scale name "${e}" occurs in multiple scale resolutions!`);
			t.add(e);
		}
	});
}
function gk(e) {
	for (let t of jf) {
		let n = e.getScaleResolution(t);
		n && !n.name && n.isZoomable() && (n.name = `${t}_at_root`);
	}
}
function _k(e, t = () => !0) {
	return Promise.allSettled(e).then((e) => {
		if (t()) for (let t of e) "value" in t ? t.value.finalizeGraphicsInitialization() : "reason" in t && console.error(t.reason);
	});
}
async function vk(e, t, n) {
	let r = e.import;
	if (!("url" in r)) throw Error("Not an url import: " + JSON.stringify(r));
	let i = qC(t, r.url), a;
	try {
		a = await mk(i);
	} catch (e) {
		throw Error(`Could not load imported view spec: ${i}. Reason: ${e.message}`, { cause: e });
	}
	if (n.isViewSpec(a)) return a.baseUrl = qC(YC(r.url), a.baseUrl), a;
	throw Error(`The imported spec "${i}" is not a view spec: ${JSON.stringify(e)}`);
}
function yk(e) {
	let t = e.getSize(), n = e.getPadding(), r = (e, t) => e.grow > 0 ? void 0 : e.px + t;
	return {
		width: r(t.width, n.horizontalTotal),
		height: r(t.height, n.verticalTotal)
	};
}
//#endregion
//#region src/utils/iterateNestedMaps.js
function* bk(e, t = []) {
	for (let [n, r] of e.entries()) if (r instanceof Map) for (let e of bk(r, [...t, n])) yield e;
	else yield [[...t, n], r];
}
//#endregion
//#region src/utils/radixSort.js
var xk = 2147483647, Sk = wk([xk]);
function Ck(e) {
	for (let t = 1; t < e.length; t++) if (e[t] < e[t - 1]) return !1;
	return !0;
}
function wk(e) {
	let t = 0;
	for (let n = 0, r = e.length; n < r; n++) e[n] > t && (t = e[n]);
	return Math.floor(Math.log2(t) / 4) + 1;
}
function Tk(e) {
	let t = wk(e), n = Array.from({ length: e.length }, (e, t) => t);
	if (Ck(e)) return n;
	let r = Array(e.length), i = Array(16);
	for (let a = 0; a < t; a++) {
		i.fill(0);
		let t = a * 4, o = 16 ** a, s = (r) => {
			let i = e[n[r]];
			return a >= Sk ? i > xk ? Math.floor(i / o) % 16 : 0 : i >> t & 15;
		};
		for (let t = 0; t < e.length; t++) i[s(t)]++;
		for (let e = 1; e < 16; e++) i[e] += i[e - 1];
		for (let t = e.length - 1; t >= 0; t--) r[--i[s(t)]] = n[t];
		[n, r] = [r, n];
	}
	return n;
}
//#endregion
//#region src/data/keyIndex.js
var Ek = "|", Dk = "\\", Ok = class {
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
				n > 0 && (e += Ek);
				let r = i[n], a = kk(t[n], r);
				e += jk(a);
			}
			a = e;
		} else {
			let e = i[0];
			a = kk(t[0], e);
		}
		return this.#e.get(a);
	}
	#r(e, t) {
		let n = e.map((e) => B(e)), r = /* @__PURE__ */ new Map(), i = e.join(", "), a = e.length !== 1;
		if (a) for (let a of t) for (let t = 0, o = a.length; t < o; t++) {
			let o = a[t], s = "";
			for (let t = 0; t < n.length; t++) {
				t > 0 && (s += Ek);
				let r = e[t], i = kk(n[t](o), r);
				s += jk(i);
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
				let n = e[t], s = kk(a(n), o);
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
function kk(e, t) {
	if (e === void 0) throw Error(`Key field "${t}" is undefined. Ensure all key fields are present in the data.`);
	if (e === null) throw Error(`Key field "${t}" is null. Ensure all key fields are present in the data.`);
	if (typeof e != "string" && typeof e != "number" && typeof e != "boolean") throw Error(`Key field "${t}" must be a scalar value (string, number, or boolean).`);
	return e;
}
function Ak(e) {
	if (!(e.indexOf(Dk) !== -1 || e.indexOf(Ek) !== -1)) return e;
	let t = "";
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		(r === Dk || r === Ek) && (t += Dk), t += r;
	}
	return t;
}
function jk(e) {
	return typeof e == "string" ? Ak(e) : String(e);
}
//#endregion
//#region src/data/collector.js
var Mk = class extends Bd {
	#e = [];
	#t = B($d);
	#n = [];
	#r = new Ok();
	#i;
	#a;
	#o = new Nk();
	get behavior() {
		return 4;
	}
	get label() {
		return "collect";
	}
	constructor(e) {
		super(), this.params = e ?? { type: "collect" }, this.observers = /* @__PURE__ */ new Set(), this.facetBatches = new bn([], JSON.stringify), this.#a = Fk(this.params?.sort), this.#s();
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
		this.#r.invalidate(), Ud(e) && (this.#e = [], this.facetBatches.set(N(e.facetId), this.#e));
	}
	complete() {
		if (this.#e = [], this.params.groupby?.length) {
			if (this.facetBatches.size > 1) throw Error("TODO: Support faceted data!");
			let e = this.facetBatches.get(void 0), t = this.params.groupby.map((e) => B(e)), n = t.length > 1 ? En(e, ...t) : Pk(e, t[0]);
			this.facetBatches.clear();
			for (let [e, t] of bk(n)) this.facetBatches.set(e, t);
		}
		if (this.#a) for (let e of this.facetBatches.values()) e.sort(this.#a);
		this.#d(), this.#c(), super.complete(), this.#u();
		for (let e of this.observers) e(this);
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
		this.#u();
	}
	getDomain(e, t, n) {
		return this.#o.getDomain(e, () => {
			let e = SO(t);
			if (n.constant) e.extend(n({}));
			else if (this.completed) for (let t of this.facetBatches.values()) for (let r = 0, i = t.length; r < i; r++) e.extend(n(t[r]));
			return e;
		});
	}
	subscribeDomainChanges(e, t) {
		return this.#o.subscribe(e, t);
	}
	getData() {
		switch (this.#l(), this.facetBatches.size) {
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
		this.#l();
		for (let t of this.facetBatches.values()) for (let n = 0; n < t.length; n++) e(t[n]);
	}
	getItemCount() {
		let e = 0;
		for (let t of this.facetBatches.values()) e += t.length;
		return e;
	}
	#l() {
		if (!this.completed) throw Error("Data propagation is not completed! No data are available.");
	}
	#u() {
		this.#o.hasCachedDomains() && this.#o.clear(), this.#o.notify();
	}
	#d() {
		this.#i = [];
		let e = this.facetBatches.values().next().value?.[0];
		if (e == null || !("_uniqueId" in e)) return;
		let t = 0, n = [], r = this.#t;
		for (let [e, i] of this.facetBatches) {
			this.#i.push({
				start: t,
				stop: t + i.length,
				facetId: e
			}), t += i.length;
			for (let e = 0, t = i.length; e < t; e++) n.push(r(i[e]));
		}
		this.#n = Tk(n);
	}
	findDatumByUniqueId(e) {
		if (!this.#n.length) return;
		let t = dn((e) => e.start).right, n = this.#t, r = dn((e) => n(i(e))).left, i = (e) => {
			let n = t(this.#i, e), r = this.#i[n - 1];
			if (!(!r || e >= r.stop)) return this.facetBatches.get(r.facetId)[e - r.start];
		}, a = r(this.#n, e);
		if (a >= 0) {
			let t = i(this.#n[a]);
			if (t && n(t) === e) return t;
		}
	}
	findDatumByKey(e, t) {
		return this.#l(), this.#r.findDatum(e, t, this.facetBatches.values());
	}
}, Nk = class {
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
function Pk(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = 0, i = e.length; r < i; r++) {
		let i = e[r], a = t(i), o = n.get(a);
		o || (o = [], n.set(a, o)), o.push(i);
	}
	return n;
}
function Fk(e) {
	if (e?.field) {
		let t = N(e.field);
		if (t.length == 1 && !t[0].includes(".")) {
			let n = N(e.order)[0] ?? "ascending", r = JSON.stringify(t[0]);
			return Function("a", "b", `return a[${r}] ${n === "ascending" ? "-" : "+"} b[${r}];`);
		}
		return vt(e.field, e.order);
	}
}
//#endregion
//#region src/data/transforms/coverage.js
var Ik = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e, this.startAccessor = B(e.start), this.endAccessor = B(e.end), this.chromAccessor = e.chrom ? B(e.chrom) : (e) => void 0, this.weightAccessor = e.weight ? B(e.weight) : (e) => 1, this.as = {
			coverage: e.as ?? "coverage",
			start: e.asStart ?? e.start,
			end: e.asEnd ?? e.end,
			chrom: e.asChrom ?? e.chrom
		}, this.createSegment = Function("start", "end", "coverage", "chrom", "return {" + Object.entries(this.as).filter(([e, t]) => t).map(([e, t]) => `${JSON.stringify(t)}: ${e}`).join(", ") + "};"), this.ends = new ZC();
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
//#region src/utils/topK.js
function Lk(e, t, n = (e) => +e, r = 0, i = e.length) {
	let a = new ZC(), o = i - r, s;
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
//#region src/utils/reservationMap.js
var Rk = class {
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
}, zk = class extends z {
	get behavior() {
		return 4;
	}
	get domainSensitiveScaleChannels() {
		return [this.channel];
	}
	constructor(e, t) {
		if (super(e), this.params = e, this._data = [], this.channel = e.channel ?? "x", !["x", "y"].includes(this.channel)) throw Error("Invalid channel: " + this.channel);
		this.startPosAccessor = B(this.params.pos), this.endPosAccessor = B(this.params.pos2 ?? this.params.pos), this.startPosBisector = dn(this.startPosAccessor), this.endPosBisector = dn(this.endPosAccessor), this.scoreAccessor = B(this.params.score), this.widthAccessor = B(this.params.width), this.laneAccessor = this.params.lane ? B(this.params.lane) : (e) => 0, this.padding = this.params.padding ?? 0, this.reservationMaps = /* @__PURE__ */ new Map(), this.resolution = t.getScaleResolution(this.channel);
		let n = () => this._filterAndPropagate();
		this.schedule = () => t.context.animator.requestTransition(n);
		let r = () => this.schedule();
		this.resolution.addEventListener("domain", r), this.registerDisposer(() => this.resolution.removeEventListener("domain", r));
		let i = t._addBroadcastHandler("layoutComputed", () => this.schedule());
		this.registerDisposer(i);
	}
	complete() {
		let e = this.startPosAccessor;
		this._data.sort((t, n) => e(t) - e(n));
		for (let e of new Set(this._data.map(this.laneAccessor))) this.reservationMaps.set(e, new Rk(200));
		this.schedule(), super.complete();
	}
	_filterAndPropagate() {
		super.reset();
		let e = this.resolution.getScale(), t = this.resolution.getAxisLength();
		if (!t) return;
		for (let e of this.reservationMaps.values()) e.reset();
		let n = e.domain(), r = Lk(this._data, 70, this.scoreAccessor, this.endPosBisector.left(this._data, n[0]), this.startPosBisector.right(this._data, n[1]));
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
}, Bk = class extends z {
	constructor(e, t) {
		super(e, t), this.params = e, this.predicate = void 0;
	}
	initialize() {
		let e;
		if (Vk(this.params)) e = this.params.expr;
		else if (Hk(this.params)) {
			let t = this.paramRuntime.findValue(this.params.param);
			if (!t) throw Error(`Cannot initialize filter transform. Selection parameter "${this.params.param}" not found!`);
			e = Xf(this.params, t);
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
function Vk(e) {
	return "expr" in e;
}
function Hk(e) {
	return "param" in e;
}
//#endregion
//#region src/data/transforms/flatten.js
var Uk = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = e.index;
		if (e.fields) {
			let n = N(e.fields).map((e) => B(e)), r = N(e.as || e.fields);
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
}, Wk = 48;
function* Gk(e, t = ",") {
	let n = t.charCodeAt(0), r = 0;
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		i == n ? (yield r, r = 0) : r = r * 10 + i - Wk;
	}
	yield r;
}
//#endregion
//#region src/data/transforms/flattenCompressedExons.js
var Kk = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = B(e.exons ?? "exons"), n = B(e.start ?? "start"), [r, i] = e.as || ["exonStart", "exonEnd"];
		this.handle = (e) => {
			let a = n(e), o = a, s = !0, c = t(e);
			for (let t of Gk(c)) {
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
}, qk = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e);
		let t = N(e.field).map((e) => B(e)), n = N(e.separator), r = N(e.as || e.field);
		if (t.length !== n.length || t.length !== r.length) throw Error(`Lengths of "separator" (${n.length}), "fields" (${t.length}), and "as" (${r.length}) do not match!`);
		this.handle = (e) => {
			if (t.some((t) => !t(e))) return;
			let i = t.map((t, r) => t(e).split(n[r]));
			Jk(i, e);
			let a = i[0].length;
			for (let n = 0; n < a; n++) {
				let a = Object.assign({}, e);
				for (let e = 0; e < t.length; e++) a[r[e]] = i[e][n];
				this._propagate(a);
			}
		};
	}
};
function Jk(e, t) {
	let n = e.map((e) => e.length);
	if (!n.every((e) => e == n[0])) throw Error("Mismatching number of elements in the fields to be split: " + JSON.stringify(t));
}
//#endregion
//#region src/data/transforms/formula.js
var Yk = class extends z {
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
}, Xk = class extends z {
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
		let a = B(e.chrom), o = N(e.pos).map((e) => B(e)), s = N(e.as);
		if (o.length != s.length) throw Error("The number of \"pos\" and \"as\" elements must be equal!");
		let c = N(e.offset), l;
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
}, Zk = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e, t) {
		super(e, t), this.params = e;
		let n = B(e.field), r = e.as, i = 0;
		if (V(e.fontSize)) {
			let n = t.paramRuntime.watchExpression(e.fontSize.expr, () => {
				i = n(), this.repropagate();
			}, {
				scopeOwned: !1,
				registerDisposer: (e) => this.registerDisposer(e)
			});
			i = n();
		} else i = e.fontSize;
		this.handle = (e) => {
			let t = n(e);
			t === void 0 ? e[r] = 0 : e[r] = this.font.metrics.measureWidth(t, i), this._propagate(e);
		};
	}
	initialize() {
		let e = this.paramRuntimeProvider.context.fontManager;
		this.font = this.params.font ? e.getFont(this.params.font, this.params.fontStyle, this.params.fontWeight) : e.getDefaultFont();
	}
}, Qk = 65536, $k = class extends z {
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
		let e = this.params, t = e.as || "lane", n = Ot(e.spacing) ? e.spacing : 1, r = B(e.start), i = B(e.end);
		if (!e.preference != !e.preferredOrder) throw Error("Must specify both \"preference\" and \"preferredOrder\"");
		if (e.preference) {
			let a = new Float64Array(Qk), o = B(e.preference), s = e.preferredOrder, c = Infinity;
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
			let e = new ZC(), a = new ZC(), o = -Infinity, s = 0;
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
}, eA = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		if (super(e), this.params = e, e.as && e.as.length != e.fields.length) throw Error("\"fields\" and \"as\" have unequal lengths!");
		let t = e.fields.map((e) => B(e)), n = e.as ? e.as : t.map(Ue);
		this.handle = (e) => {
			let r = {};
			for (let i = 0; i < t.length; i++) r[n[i]] = t[i](e);
			this._propagate(r);
		};
	}
}, tA = class extends z {
	get behavior() {
		return 2;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = new RegExp(e.regex), n = typeof e.as == "string" ? [e.as] : e.as, r = B(e.field);
		this.handle = (i) => {
			let a = r(i);
			if (O(a)) {
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
}, nA = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = N(e.columnRegex).map((e) => new RegExp(e));
		for (let e of t) if (RegExp("|" + e.source).exec("").length - 1 != 1) throw Error(`Regex ${e.toString()} must have exactly one capturing group!`);
		let n = N(e.asValue);
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
			Hd(e) && (this.handle = u), super.beginBatch(e);
		};
	}
}, rA = class extends z {
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
		let e = this.params, t = e.as || ["y0", "y1"], n = e.sort ? vt(e.sort.field, e.sort.order) : void 0, r = e.field ? B(e.field) : () => 1, i = e.groupby.map((e) => B(e)), a = Dn(this.buffer, (e) => i.map((t) => t(e)).join()).map((e) => e[1]), o = (e) => !0;
		if (e.baseField) {
			let t = B(e.baseField);
			o = (e) => t(e) !== null;
		}
		let s, c;
		switch (e.offset) {
			case "normalize":
				s = (e, t) => e / t, c = (e, t) => qn(e, t);
				break;
			case "center":
				s = (e, t) => e - t / 2, c = (e, t) => qn(e, t);
				break;
			case "information":
				{
					let t = Math.log2(e.cardinality ?? 4);
					s = (e, t) => e / t, c = (e, n) => {
						let r = qn(e, (e) => +!o(e)), i = qn(e, n), a = i - r, s = 0;
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
}, iA = class extends z {
	get behavior() {
		return 1;
	}
	constructor(e) {
		super(e), this.params = e;
		let t = B(e.field ?? "sequence"), [n, r] = e.as ?? ["pos", "sequence"];
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
}, aA = {
	count: (e) => e.length,
	valid: _n,
	sum: qn,
	min: zn,
	max: Rn,
	mean: Wn,
	q1: (e, t) => Hn(e, .25, t),
	median: Gn,
	q3: (e, t) => Hn(e, .75, t),
	variance: vn
}, oA = {
	aggregate: class extends z {
		get behavior() {
			return 1;
		}
		constructor(e) {
			if (super(e), this.params = e, this.buffer = [], this.ops = [], this.as = [], e.fields) {
				if (e.fields.length != e.ops.length) throw Error("Fields and ops must have the same length!");
				if (e.as && e.as.length != e.ops.length) throw Error("If \"as\" is defined, \"fields\" and \"as\" must have the same length!");
				e.fields.forEach((t, n) => {
					let r = B(t), i = aA[e.ops[n]];
					this.ops.push((e) => i(e, r)), this.as.push(e.as ? e.as[n] : `${e.ops[n]}_${e.fields[n]}`);
				});
			} else this.ops.push((e) => aA.count(e)), this.as.push("count");
		}
		reset() {
			super.reset(), this.buffer = [];
		}
		#e() {
			let e = this.params?.groupby;
			if (e?.length > 0) {
				let t = e.map((e) => B(e)), n = En(this.buffer, ...t);
				for (let [t, r] of bk(n)) {
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
	},
	collect: Mk,
	coverage: Ik,
	filterScoredLabels: zk,
	filter: Bk,
	flatten: Uk,
	flattenCompressedExons: Kk,
	flattenDelimited: qk,
	flattenSequence: iA,
	formula: Yk,
	identifier: nf,
	linearizeGenomicCoordinate: Xk,
	measureText: Zk,
	pileup: $k,
	project: eA,
	regexExtract: tA,
	regexFold: nA,
	sample: sC,
	stack: rA
};
function sA(e, t) {
	let n = oA[e.type];
	if (n) return new n(e, t);
	throw Error("Unknown transform: " + e.type);
}
//#endregion
//#region src/data/sources/urlSource.js
var cA = new Set(["application/gzip", "application/x-gzip"]), lA = new TextDecoder(), uA = class extends Wd {
	constructor(e, t) {
		super(t), this.params = up(t.paramRuntime, e, () => this.load(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), this.baseUrl = t?.getBaseUrl();
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
	async #e(e) {
		let t = qC(this.baseUrl, e.urlsFromFile), n = { type: e.type ?? "tsv" }, r = await fetch(t);
		if (!r.ok) throw Error(`Cannot load "${t}": ${r.status} ${r.statusText}`);
		return Do(await _A(r, t, jp(n.type)), Ap(n)).map((e) => typeof e == "string" ? e : e.url).map((e) => qC(t, e));
	}
	async load() {
		let e = H(this.params.url), t = typeof e == "object" && "urlsFromFile" in e ? await this.#e(e) : (Array.isArray(e) ? e : [e]).map((e) => qC(this.baseUrl, e)), n = kp(this.params, t), r = jp(n.type);
		if (t.length === 0 || !t[0]) {
			this.reset(), this.complete();
			return;
		}
		let i = async (e) => {
			try {
				let t = await fetch(e);
				if (!t.ok) throw Error(`${t.status} ${t.statusText}`);
				return await _A(t, e, r);
			} catch (t) {
				throw Error(`Could not load data: ${e}. Reason: ${t.message}`, { cause: t });
			}
		}, a = async (e, t) => {
			try {
				let r = Do(e, Ap(n)), i = r instanceof Promise ? await r : r;
				this.beginBatch({
					type: "file",
					url: t
				});
				for (let e of i) this._propagate(e);
			} catch (e) {
				throw console.warn(e), Error(`Cannot parse: ${t}: ${e.message}`, { cause: e });
			}
		};
		this.setLoadingStatus("loading"), this.reset();
		try {
			await Promise.all(t.map((e) => i(e).then(a))), this.setLoadingStatus("complete");
		} catch (e) {
			this.setLoadingStatus("error", e.message);
		}
		this.complete();
	}
};
function dA(e) {
	return "url" in e;
}
function fA(e) {
	return e.length >= 10 && e[0] == 31 && e[1] == 139 && e[2] == 8 && (e[3] & 224) == 0;
}
function pA(e) {
	return e ? cA.has(e.split(";")[0].trim().toLowerCase()) : !1;
}
function mA(e) {
	return e ? e.toLowerCase().split(",").some((e) => e.trim() == "gzip") : !1;
}
function hA(e) {
	return new Uint8Array(e).buffer;
}
async function gA(e) {
	if (typeof DecompressionStream != "function") throw Error("Gzip-compressed URL data requires DecompressionStream support.");
	let t = new Response(hA(e)).body;
	if (!t) throw Error("Cannot create a readable stream for gzip decompression.");
	let n = t.pipeThrough(new DecompressionStream("gzip"));
	return new Uint8Array(await new Response(n).arrayBuffer());
}
async function _A(e, t, n) {
	if (!(Np(t) || pA(e.headers.get("content-type")) || mA(e.headers.get("content-encoding")))) return vA(e, n);
	let r = new Uint8Array(await e.arrayBuffer());
	return yA(fA(r) ? await gA(r) : r, n);
}
function vA(e, t) {
	return typeof e[t] == "function" ? e[t]() : e.text();
}
function yA(e, t) {
	return t == "arrayBuffer" ? hA(e) : lA.decode(e);
}
//#endregion
//#region src/data/sources/sequenceSource.js
function bA(e) {
	return "sequence" in e;
}
var xA = class extends Wd {
	constructor(e, t) {
		if (super(t), this.sequence = up(t.paramRuntime, e.sequence, () => this.loadSynchronously(), (e) => this.registerDisposer(e), { batchMode: "whenPropagated" }), !("start" in this.sequence)) throw Error("'start' is missing from sequence parameters!");
		if (!("stop" in this.sequence)) throw Error("'stop' is missing from sequence parameters!");
	}
	get label() {
		return "sequenceSource";
	}
	loadSynchronously() {
		let e = H(this.sequence.as) ?? "data", t = H(this.sequence.start) ?? 0, n = H(this.sequence.step) ?? 1, r = H(this.sequence.stop);
		this.reset(), this.beginBatch({ type: "file" });
		for (let i = t; i < r; i += n) this._propagate({ [e]: i });
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
};
//#endregion
//#region src/data/sources/dataSourceFactory.js
function SA(e, t) {
	if (Tp(e)) return new Ep(e, t);
	if (dA(e)) return new uA(e, t);
	if (bA(e)) return new xA(e, t);
	if (CA(e)) return zd(e.lazy, t);
	throw Error("Cannot figure out the data source type: " + JSON.stringify(e));
}
function CA(e) {
	return "lazy" in e;
}
//#endregion
//#region src/utils/cloner.js
function wA(e) {
	let t = TA(e).filter((e) => typeof e == "string"), n = Function("source", "return { " + t.map((e) => JSON.stringify(e)).map((e) => `${e}: source[${e}]`).join(",\n") + " };");
	return n.properties = t, n;
}
function TA(e) {
	let t = [];
	do
		t = t.concat(Object.keys(e)), e = Object.getPrototypeOf(e);
	while (e && e !== Object.prototype);
	return Array.from(new Set(t));
}
//#endregion
//#region src/data/transforms/clone.js
var EA = class extends z {
	get behavior() {
		return 1;
	}
	#e;
	#t = (e) => e;
	constructor() {
		super({ type: "clone" });
		let e = (e) => {
			let t = TA(e);
			(!this.#e || !Jo(t, this.#e)) && (this.#e = t, this.#t = wA(e));
			let n = this.#t;
			this.handle = (e) => this._propagate(n(e)), this.handle(e);
		};
		this.handle = e, this.beginBatch = (t) => {
			Hd(t) && (this.handle = e), super.beginBatch(t);
		};
	}
};
//#endregion
//#region src/data/sources/namedSource.js
function DA(e) {
	return "name" in e;
}
var OA = class extends Wd {
	#e;
	constructor(e, t, n) {
		super(t), this.provider = n, this.params = e;
	}
	get identifier() {
		return this.params.name;
	}
	get label() {
		return "namedSource";
	}
	updateDynamicData(e) {
		this.#e = e, this.loadSynchronously();
	}
	loadSynchronously() {
		let e = this.#e ?? this.provider(this.params.name) ?? [], t = (e) => e;
		if (Array.isArray(e)) e.length > 0 && (t = Fp(e[0]));
		else throw Error(`Named data "${this.params.name}" is not an array!`);
		this.reset(), this.beginBatch({ type: "file" });
		for (let n of e) this._propagate(t(n));
		this.complete();
	}
	async load() {
		this.loadSynchronously();
	}
}, kA = class {
	#e;
	#t;
	loadingStatusRegistry;
	constructor() {
		this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Set(), this.loadingStatusRegistry = new pm();
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
			t = e.parent, t ? (t.removeChild(e), e.dispose()) : e instanceof Wd ? this.removeDataSource(e) : e.dispose();
		}
	}
	findNamedDataSource(e) {
		let t;
		for (let n of this.#e.values()) if (n instanceof OA && e == n.identifier) {
			if (t && t !== n) throw Error(`Found multiple instances of named data: ${e}. Data flow optimization is broken (it's a bug).`);
			t = n;
		}
		if (t) return { dataSource: t };
	}
};
//#endregion
//#region src/utils/trees.js
function AA(e, t) {
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
function jA(e, t, n) {
	let r = t.preOrder?.(e);
	if (r) return r;
	for (let r of n(e)) {
		let e = jA(r, t, n);
		if (e === "stop") return e;
	}
	return t.postOrder?.(e);
}
function MA(e, t) {
	return jA(e, t, (e) => e.children);
}
//#endregion
//#region src/view/flowBuilder.js
function NA(e, t, n, r) {
	let i = [], a = [], o, s = t ?? new kA(), c = [], l = r ?? (() => !0);
	function u(e, t = () => void 0) {
		if (!o) throw t() || /* @__PURE__ */ Error("Cannot append data flow node, no parent exist!");
		return o.addChild(e), o = e, i.push(e), e;
	}
	function d(e, t) {
		return u(e, () => /* @__PURE__ */ Error(`Cannot append a transform because no (inherited) data are available! ${t ? JSON.stringify(t) : ""}`));
	}
	function f(e, t) {
		for (let n of e) {
			let e;
			try {
				e = sA(n, t);
			} catch (e) {
				throw console.warn(e), Error(`Cannot initialize "${n.type}" transform: ${e}`, { cause: e });
			}
			e.behavior & 2 && d(new EA()), d(e);
		}
	}
	function p() {
		return i.findLastIndex((e) => e instanceof nf) > i.findLastIndex((e) => e instanceof Wd);
	}
	let m = (e) => {
		if (!l(e)) {
			let t = e.flowHandle?.node;
			if (t) {
				t !== o && (o = t, i.push(t));
				return;
			}
			if (e.spec.data || e.spec.transform || e instanceof $) throw Error("Cannot reuse missing flow nodes for " + e.getPathString());
			return;
		}
		if (e.spec.data) {
			let t = e.flowHandle?.dataSource;
			t && t.view === e && !t.identifier && s.removeDataSource(t);
			let n = DA(e.spec.data) ? new OA(e.spec.data, e, e.context.getNamedDataFromProvider) : SA(e.spec.data, e);
			o = n, i.push(n), s.addDataSource(n), e.flowHandle ??= {}, e.flowHandle.dataSource = n;
		}
		if (e.spec.transform && f(e.spec.transform, e), e instanceof $) {
			if (!o) throw Error(`A unit view (${e.getPathString()}) has no (inherited) data source`);
			let t = FA(e);
			if (t) {
				c.push(t.rewrite);
				for (let e of t.transforms) d(e);
			}
			e.mark.isPickingParticipant() && !p() && (d(new EA()), d(new nf({ type: "identifier" })));
			let n = new Mk({
				type: "collect",
				groupby: e.getFacetFields(),
				sort: IA(e, t?.rewrittenEncoding)
			});
			u(n);
			let r = e.flowHandle?.collector;
			r && s.removeCollector(r), s.addCollector(n), e.flowHandle ??= {}, e.flowHandle.collector = n;
		}
		o && (e.flowHandle ??= {}, e.flowHandle.node = o);
	}, h = AA(PA(e, n), (e) => e.dataParent);
	for (let e of h) MA(e, {
		preOrder: (e) => {
			a.push({
				view: e.ref,
				nodeStackDepth: i.length
			}), m(e.ref);
		},
		postOrder: () => {
			let { nodeStackDepth: e } = a.pop();
			i.length = e, o = i.at(-1);
		}
	});
	return c.forEach((e) => e()), s;
}
function PA(e, t) {
	if (!t) return e.getDescendants();
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return jE;
		n.push(e);
	}), n;
}
function FA(e) {
	let t = [], n = {}, r = e.mark.encoding, i = e.getEncoding(), a = [];
	for (let [e, t] of Object.entries(r)) {
		let n = e;
		Bf(n) !== n && !(n in i) || Ff(n) && !Array.isArray(t) && Df(t) && a.push({
			channel: n,
			chromPosDef: t
		});
	}
	let o = En(a, (e) => Bf(e.channel), (e) => e.chromPosDef.chrom);
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
		t.push(new EA()), t.push(new Xk({
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
			}, MS(e.mark, "encoding");
		}
	} : void 0;
}
function IA(e, t) {
	let n = {
		...e.getEncoding(),
		...t
	}.x;
	if (wf(n) && e.getScaleResolution("x")?.isZoomable()) {
		if (Sf(n)) return "buildIndex" in n && n.buildIndex ? { field: n.field } : null;
		if (!Cf(n) && Of(n)) throw Error("A zoomable x channel must be mapped to a field.");
	}
}
//#endregion
//#region src/data/flowOptimizer.js
function LA(e, t = void 0) {
	if (e.parent !== t) return !1;
	for (let t of e.children) if (!LA(t, e)) return !1;
	return !0;
}
function RA(e, t = !1) {
	if (e.behavior & 4 && (t = !0), e instanceof EA) if (t) t = !1;
	else {
		let n = e.children[0];
		e.excise(), n && RA(n, t);
		return;
	}
	e.behavior & 1 && (t = !1);
	for (let n = 0, r = e.children.length; n < r; n++) RA(e.children[n], t || r > 1);
}
function zA(e) {
	let t = e.dataSources, n = /* @__PURE__ */ new Map();
	for (let e of t) e.identifier && !n.has(e.identifier) && n.set(e.identifier, e);
	let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let e of t) if (e.identifier) {
		let t = n.get(e.identifier);
		t && (t !== e && t.adoptChildrenOf(e), r.add(t), i.set(e, t));
	} else r.add(e), i.set(e, e);
	return e.replaceDataSources(r), i;
}
function BA(e) {
	if (RA(e), !LA(e)) throw Error("Encountered a bug! There's a problem in the data flow structure.");
}
function VA(e) {
	let t = zA(e);
	for (let t of e.dataSources) BA(t);
	return t;
}
//#endregion
//#region src/data/flowInit.js
var HA = /* @__PURE__ */ new WeakMap(), UA = /* @__PURE__ */ new WeakMap();
function WA(e, t) {
	let n = HA.get(e);
	if (n) {
		if (!t?.queueReload) return n;
		let r = UA.get(e);
		if (r) return r;
		let i = n.catch(() => {}).then(() => WA(e)).finally(() => {
			UA.delete(e);
		});
		return UA.set(e, i), i;
	}
	let r = Promise.resolve().then(() => e.load()).finally(() => {
		HA.delete(e);
	});
	return HA.set(e, r), r;
}
function GA(e, t) {
	for (let n of e.getDescendants()) {
		let e = n.flowHandle;
		if (!e) continue;
		let r = e.dataSource;
		r && (e.dataSource = t.get(r) ?? r);
	}
}
function KA(e, t, n, r) {
	let i = r ?? (() => !0), a = XA(e, n).filter(i);
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
		s = NA(e, t, n, (e) => o.has(e)), GA(e, VA(s));
	} catch (e) {
		for (let e of a) e._setDataInitializationState("none");
		throw e;
	}
	let c = qA(a);
	for (let e of c) e.visit((e) => e.initializeOnce());
	let l = a.filter((e) => e instanceof $), u = [], d = !!e.context.glHelper;
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
function qA(e, t) {
	let n = Array.isArray(e) ? e : XA(e, t), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		if (t && !t(e)) continue;
		let n = e;
		for (; n && !n.flowHandle?.dataSource;) n = n.dataParent;
		n?.flowHandle?.dataSource && r.add(n.flowHandle.dataSource);
	}
	return r;
}
function JA(e, t) {
	let n = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		if (t && !t(e)) return jE;
		if (e.flowHandle?.dataSource) return n.add(e.flowHandle.dataSource), jE;
	}), n;
}
function YA(e, t, n, r) {
	return t ||= JA(e, n), Promise.all(Array.from(t).map((e) => WA(e, r))).then((t) => (ZA(e), t));
}
function XA(e, t) {
	let n = [];
	return t ? (e.visit((e) => {
		if (!t(e)) return jE;
		n.push(e);
	}), n) : e.getDescendants();
}
function ZA(e) {
	let t = {
		type: "subtreeDataReady",
		payload: { subtreeRoot: e }
	};
	e.visit((e) => e.handleBroadcast(t));
}
//#endregion
//#region src/genomeSpy/viewDataInit.js
async function QA(e, t, n, r) {
	let i = (e) => e.isConfiguredVisible(), { dataFlow: a, graphicsPromises: o } = KA(e, t, i);
	return r(a), await n.waitUntilReady(), await YA(e, new Set(a.dataSources), i), await _k(o), a;
}
async function $A(e, t, n) {
	let r = (e) => e.isConfiguredVisible(), i = ej(e, r).filter((e) => e.getDataInitializationState() === "none");
	if (i.length === 0) return t;
	let a = new Set(i), o = (e) => a.has(e), s = /* @__PURE__ */ new Set(), c = [];
	for (let e of i) {
		if (e.spec.data) {
			c.push(e);
			continue;
		}
		let t = nj(e);
		t ? s.add(t) : c.push(e);
	}
	let { dataFlow: l, graphicsPromises: u } = KA(e, t, r, o);
	await n.waitUntilReady();
	for (let e of s) e.repropagate();
	if (c.length) {
		let e = tj(c);
		await Promise.all(Array.from(e.entries()).map(([e, t]) => YA(e, t, void 0, { queueReload: !0 })));
	}
	return await _k(u), l;
}
function ej(e, t) {
	let n = [];
	return e.visit((e) => {
		if (!t(e)) return jE;
		n.push(e);
	}), n;
}
function tj(e) {
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
	}
	return t;
}
function nj(e) {
	let t = e.dataParent;
	for (; t;) {
		let e = t.flowHandle?.collector;
		if (e) return e.completed ? e : void 0;
		t = t.dataParent;
	}
}
//#endregion
//#region src/utils/animator.js
var rj = class {
	constructor(e) {
		this._renderCallback = e, this._renderRequested = !1, this._warn = !1, this.transitions = [];
	}
	requestTransition(e) {
		this.cancelTransition(e), this.transitions.push(e), this.requestRender();
	}
	cancelTransition(e) {
		let t = this.transitions.indexOf(e);
		t >= 0 && this.transitions.splice(t, 1);
	}
	requestRender() {
		this._renderRequested ? this._warn && console.warn("Render already requested!") : (this._renderRequested = !0, window.requestAnimationFrame((e) => {
			this._renderRequested = !1;
			let t = this.transitions;
			this.transitions = [];
			let n;
			for (; n = t.shift();) n(e);
			this._renderCallback(e);
		}));
	}
	transition(e) {
		return VO({
			requestAnimationFrame: (e) => this.requestTransition(e),
			...e
		});
	}
};
function ij(e, t, n, r, i) {
	let a = 0, o = !0, s = structuredClone(i), c = s;
	function l(e, t, n, r) {
		return t + (e - t) * 2 ** (-n / r);
	}
	function u(i) {
		if (o) return;
		let d = i - a;
		a = i;
		for (let e of Object.keys(c)) s[e] = l(s[e], c[e], d, n);
		t(s);
		let f = -Infinity;
		for (let e of Object.keys(c)) f = Math.max(f, Math.abs(c[e] - s[e]));
		f < r ? (s = c, t(s), o = !0, f != 0 && e.requestRender()) : e.requestTransition((e) => u(e));
	}
	function d(e) {
		c = e, o && (o = !1, a = +document.timeline.currentTime, u(a));
	}
	return d.stop = () => {
		o = !0;
	}, d;
}
//#endregion
//#region src/genome/genomeStore.js
var aj = class {
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
		this.configureGenomes(new Map([[t, n]]), t), await this.ensureAssembly(t);
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
			let e = oj(r);
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
			return new YE({ name: e });
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
		let r = new YE({
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
			let n = new YE({
				name: t,
				contigs: e.contigs
			});
			return this.genomes.set(t, n), n;
		}
		let r = new YE({
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
		let r = new YE({
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
function oj(e) {
	return typeof e == "string" ? `name:${e}` : `inline:${JSON.stringify(e)}`;
}
var sj = {
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
			xadvance: 12.642,
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
			xadvance: 12.642,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.534,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			xadvance: 21.336,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			xadvance: 27.153,
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
			xadvance: 26.313,
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
			xadvance: 24.801,
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
			xadvance: 30.891,
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
			xadvance: 26.208,
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
			xadvance: 25.284,
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
			yoffset: -30.156,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -30.429,
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
			yoffset: -28.182,
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
			xadvance: 22.176,
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
			xadvance: 20.874,
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
			yoffset: -19.089,
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
			xadvance: 19.278,
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
}, cj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEFzklEQVR4AezcRXjr2BnG8b8SQ+gJOiA5d1NmZuZVuU133Zf3++6XxW27Ku7LzIzDrMgByxQGaxwfWVFGMly088z7e76Zi5bu6nvP+Y4sKwgC2n4KP4QfgEcvAVdZGHfuM++Fj8HHwUZERO6aMTocsMGhl4C7bbrzr7C5N0REFAC30nct7qwhdH8REQXAfKf7FrjTLPpJ7EPuMhERycB36XD+hX0/DuzSlsnw3OfyilcwAA/vn/yzQQMoUHg9r59hhn7Oz/njH9ncJAiAXNj9P2qTxdhARETufgDYNs4fsH/Cv2jL53nzm1lcZH2dngKCP/Gnn/LTEiXg+Tw/Q+btvJ1+/vlPfvYz/v1vEwA26w4fs8lm4R4GgIiIAmB5GdvGnmbuh9Rq8MIXcuMGpVJ6AFhEXNwneOI//OfnSz8fL49/jI+9lJcecjjJJD15Ho8+yo9/TKUCb7J5vY1tcw+JiOgMILYJcDpNuFQKq5+neMrFbRXLnI+fu7im6KlSCS9fqXDBccLb31siIgqARBOu1SiV8DzKZbpr0nRxWxnQqs8tv51lol/2Xf63qlS6euOpKYZIREQ7ANOHTYdu1SDL/wMOlguFlxW+Hf8dujMX9ryrNx4KEREFgGXd9BQoWu97S0vLbU36T4EOD6NwGf78R0REAZBoxWaJ3qqDA9Kcx3p9YXW1sLLSCoBM5jIV+i7/gwCWl8Nbzs0xLCIiCgDbDiub7b8JMF3exT3kMOM4a3bLmuNczoX22ScpPluK33KIREQUALmc2QS0KjGqT3BxzWKf2VmKhl0sEhD0ngKZS5ZKOgAQERmVAEg05KhVBwFXnXJ62eWLRYoGrRofv8yGHsv/gwOYmwtvtryMiIgMLQCSxwCHh92mQNGg/4gjEwCTxRZMRdOhPfbSl/86/hURGbUAmJ4eaAoULf/N/OeibDsKgPhf0AOgIiLXIQASbTn+la3ICSfRSS+xru84YY2NpU+BqtXwYr4PU1PaAYiIjFoAxNpy9NKGajV5/HvMcTwApqYuf2X+govboJG+/I82GiIiMiIBsLAQdualpStfCIg/AJqc/9DWewqUfABUy38RkREKgPjpbKJtc8xxdAIc7/dXAyBlCnR8HIuSbFYHACIioxgA6e+EODqKr+tPOU0GQHwKtMmm2SvUqcdzpNmM3SCXQ0RERicAVlbCFj07C81m/CjYrP1T5z/pUyArnALFJ0k6/hURGdEASL4XyNQRR2b5n5z/9JsCRdfQA6AiIqMdAClTIM+Ljn/POEsGQHIK5BF+ZGurZpb/+/uxS09PIyIiIxgApiYnYX/fjIDcrc7x79xc6vyn27NArY/qBXAiItcjAMbGnrkJOLzo4rH3/6yvR8v/vlMgz3tKb4AQEbkWAZBo1Ftb3vb25s6mi3vOeXyRn2S+5GuqRMk9cLd2Wp9u7O5CoRBedH4eEREZzQCIdgCZDJTLZd/f8Xe2m9u95z/JKdB2dXunsuP7uzr+FRG5HgGQz8fadbPpV6t+zW9VvLv3DQDLotwol+vlet2/HvMfEREFQLxdW1Cp16v1amWx0jMArOitotHf8hu+v+c3Gj5zc+HllpcREZFRDoD4AzvVWq1Sq1zOf9bW6CkKgPLr/Uqj0njkA/HLiYjIsGQYwMxMuAlYW+Oz//8/X/4/L3lJcvlvQdBrChR896vf1QHAdSIi2gEkm/Yg85/kFOjC5KQOAERERkEGPjT4McC6w/rfYQ6KS93nPx9K3QS8ulVPgdMJE8tCRESGGgAbDGBhAcdhw4YlWIUiqcv/b8Gn2UgNgI0iWGB3MkBERIYdAJ9iMO8Je3e7iu1Klbjg9HS7+5syV3AsRERk2AGQZzB52/TudhVhjVSpF8ybT0X5kUNERIZrjMGtJpb/gyuaCiPk+hARUQAYzq0GwMzVEZCIiAybFQQBIiLyrN4BiIiIAqAK34T3wxp8CX7N0+zZAQYCQRzF4bfMAQroCKETRMfYvWRHqFt0kI4wkaaQDQQ7+33mDPPz9wBwAQAgAAAIAAALU3KeWwEu+dglp7yNATqEADT35Np+/zGNAHQOEIDWgFsyBQAbAAACAIAAACAAAAgAAAIAgAAAIAAACAAAAgCAAAAgAAAIAAACAIAAACAAAAgAAAIAgAAAIAAAAgCAAAAgAAAIAAACAIAAACAAAAgAAH8iAAAIAAACAIAAACAAAAgAAAIAgAAAULLPD9v0CYCSKXOO6RYAJaPff40ASg75tnm+5QLACAyAAAAgAAAMtdasBAAuAADKkJcHO3eZ3Uh2wFH8GtRkZmb2kXrCWUNWHGbmxAwyW2RmtpXSyOrwfJ9X93f+ghW8K6xZSP3LRvgvf4bvw/fgl7wq8iUlSaqlYgn2P62SgWYqcjBXWSAkyQBUXMCv/ysDST73d5j7/P6csEiSAajYgcy/LzWX7Z3rZQ5WkCSFGICKJ/jrp/cBh4f7f/9xam4q9ffUe94jSQo2ABWH8BPIzM9n5uYyf9/KHGe+zbd76UWSFG4AKtLp1YWF/dLOjjiqp94AxIAkA/D8zNISi4vXCwtn1L/hTTTCJ0n+EWx1lZWVaIn9wgwz0aaYInCSZACKRdbXWVtjdXWSySmmppnuppvASZIB2NxkY4N0mkJhnPFok0wSPkkyAFtbpW1ujjASbYyxDjoInCQZgNNTdnfZ2WFvb4ihYYajIUkKPwCZTGn7+3XU9dM/wMAgg4RPkgxAPk8uRzbbQ08vvX30VVNN4CTJANzfc3BAoRCtm+7yCJ8kGYCjo9dBO+0ddHTSSfgkyQCcnXF6yslJE01ttEXzGnDxIMkAXFxwfh6tmeZoLbQgKRZkAK6uymugIVojjUiKBRmA29vSbm4+8KGOumhIkmIRgLu70u7v3/O+PCRJ4Qfg8fF1kCDhJaAlKTYBeH7m5aV0D7XU1lATDUlS+AEoFl9XQhVV0ZAkhR+AqqrSqquBIsUXXqIhSQo/ALW1pdXUAE88lYckKRYBSCR484aqqgceykOSFH4AIu/elXfL7Q030ZAkxSIAHz6UVld3xdU119E9kqRYBKC+noaGaJdcXnARDUlSLALQ1FRac/MZZ6ecnnCCJCkWAWhpobU12jXXxxxHO+ccSVL4AWhvL62jg0TigIPykCSFH4Dqarq6SuvuLlDIkcuSRZIUfgAiPT309tLXlyWbIRPNH4NKUjwC0NdHfz8DA0+Jqj32dtndYQdJUvgB+PCBwUGGhhgZ2WFnm+1oSJLCD0BkZITR0Wh58ptspknbgHiQZAD6+hgfZ2KC4eE06XXW11hDkhR+ACITE0xOMj29xdYqqyuspEkjSbEXgwAMDzMzU9rU1DLLUQCiEiBJCkItX2x2lu3tod3d5P5d63XrW94iKQ5kAJp6elKpVDKTSWbbkr9Nfo2vETxJMgDJ8j5+TGXzyVxyND/KFpKkkAPQD0lIlQPw7l3qs+8k8glylHaHJCnAANR/OvcrTzqAkQQfeQ3AHwiNJBmAmX8596NN8C8+g1xlewRCkgxAz3+98H/Hv6v7lwbk4ZEvNUlSVbFYRJLkH8FiQpL0D/buAqqtNd/7+DcUSQrBQ4TgGg6NNEyZqZ13pvJed3dZet3d71123WXZdR13OX7OSIVOE6BKC6USCMGC9oS2+z6bTUIoFkrP9Ib+P+u3Uk+C/X/7efZOycHEanzwy/Aq643CS/Cn8MPQBQWk6YU/htNg2jTrmDZJDnwV/Cn087TNwz/B14Ips9TBL8I5duwe/AUcA9Nq/o8TQshVQL3gTMaDIQF9azPKWl6IwdhywuxOIJlOstZ0MkIIkT0FkN4BLihhcO3ov8Im/DAGseVEeFK1cDBZAFksnowQQmRVAYxAL7iYck71Hy9Ln/4zbK7C6IBkHrBzFggkUyoFIIQQz+KVwL30O/v7nH19rnf1NTf3wTCbej9JHoi9SSzKGPRgcOI8ylEUE2g8JhxmYABNS9v8cQd4TwvLvp2thMPh4eHhRCJRWVnZ0dFRVVW11bMzzMOn2Lk6OISy7dOKRLhy5cHUVDw/P15XN+PzIYQQWVQAceJfevClvl41/Qf6XAV91dUPLRYyKQDF72fsc3pi00ZpBAlasfrwsYYJuHWLM2d4/XUePgRaqQpwOkAgkMmkPXPmzJtvvnn58uXFxcWampqxsbETJ05UVFRsUwBP0gF1y2H7Ahgf54031DObHh2dtlimOztZWqKri2whhJACGGDgLd46c+dMX99CzO2mtpaurkwLoLiYQIBYjLHPqhooX7TkkefE6cBhx06ahQVCIT3nzjE4VaaP/oMHCQQwm9nO1NSUGv2qA954443p6Wmv15ubm+t2uw8fPszjPsJ68+Rt3QGvwImlJZRaqCNDg4P09vLaa/H+/nh5eXxxEaeTjg727ycrCCGkAAoosGBZYCHW309dHfX1NDRQUUGGmpqW1wFjxGKTX/ximLADhxPnKU6RJhRayeAgvC9AYDk1NWRgZmZmYmLi7t27k5OTwMDAgN/vV02AYbvD9dIt1hYaXISX4FTsP15+qVqrLqGkkEIysbDAzAyjo3FNi09MxCMRxseZnpYCyBpCSAG00OLBM8jgzbmbsStXaGykuZnDh8lcIKAKwMilG5ecOI1FwAEOsOzmzdUCwOslEFhJZgoKCvbv319SUsIytftfVFRksVi2LoBtpr+G7hb0xLjwMhcufFlr76LLi7eRRjJhtVJeTk3N9NTUtM2maoDsIoSQAjBjbqf9Bjeucz129TwtLQwM0N6uT7cMmc3GRpCesbHwzMoiQKWSytnZ1el/v8xJILn5kzGHw9HS0hIMBvPy8hYWFurq6jo7OxsaGmC9byJNof7rdTRWxOP0vKRGv4pjMu8UXUGCKhYsmS59vF4WF+NtbfEy0/TgJIWF2XT4L4SQAlBaaW2hpZnmy4nLUzduoDI4mGkBGGprjY0gldgbb4QJG4uAE5xITf/he7nGWV89Nhs7cejQoZycnKampkQiYbPZVAHU19fzBDRW9fSo0W+6cKHg5t2TnDSmfzXVZKi0lBdfnKiqmpy8MW39UOLf7Nhs+m9mESGEFEAeeU00NdLYQMPUzesMDenx+cjLI2Ppi4C+K31GATivO0OhDqMAjAN/PR4PO1RaWnry5MmpqamlpSX18/z8/N1O/y9/WY1+lhPkPcb076STHamqGqgaHGLobnCUr+uipobsIoSQAlDqqVepo+7i3EVteJjbt7lzh8bGHczVffvw+03GyYBYLDwediaczj5VAI5QiCV3g7H5o6nbJBM7U1ZWxhPTSDGpektOf4/WHiRohB0aNA320nul8sr1/++hrY2mJrKOEEL+N9ASSmqoceOuppq7d/Xcu8d2ND1pnE413zW//77fHyUajoTDw+Fr13rvThfNqd9fDlbrun/+DvskaBhMKtPTqenvmMw3Rn8XXfvZzxZMjydqip7hTE9uT+jg3H2fj85OSkrIOkIIKQBFjX4VFy599I+M6HnwgHW0tKxnXORzMRD4XZ8v3BgOR8PRaPg3Dx4MGZs/DQ1b3OHTVwg/lD7Adcnpr2/9p6a/C9dOn9YII5fyLvUcuT7Y3U1XF14vQgiRjVtAyuoLuJaWiEaNnRycTnZoqCkQahxTsQyM1X506LW8Xw4H/r8jUG4PlDfzDJhYs/W/UgA9PUEOd9Gl8gIvkKKRIVepy9ftm+vOzTl8+ILqgOwlhJACsGK1YVMpoSQ+Po7KxMROC2B+nlCoIhQKhEK/0fhXFY7PePI/E1G/sh+02/PsDhxFFD2b0a8MDaWmvwdPV/K6TwwaO+CiqrvqePfxfd1VOd3dORbLebKWEEIKQKmgQqWc8vjkJFNTKlvOVY11QiEjnqGhoZPek46I93ok4vyhL4S0kB27ylGOZnp/O2dic9PTqenvnDJ3pV/1r5Hyd/DtUMmWmqFbj6PbceyQIweMnCVrCSGkAMooK6VUhfh14nFmZnY0bwcGCIW4eFG/7aCj09tZH/E6IhFGRsKmsAOHscXUQgtfecnpbx6MBJNX/bs0F2neC9/BdrzQnUwnVXAMcpL5EtlJCCEFUEyxFasK8/PMzel59IicHDKgyiIUWknR2xV+/P58f8DrNc4nJyKR0P2VRYADhxUrOxePx43XAeTm5rITxta/8cqvIEf06a8F07f+Tej+H9v1XXdaGjFUru2AL5CFhBBSAIUUGkFZWFhJURHbW53+d+5wAr9f8/vxO+rr8XqJRFTunDsXYqUDjnGMnZidne3p6RkcHEwkElVVVZ2dnW1tbWRoaCg1/TvoCGorV/6wI4Vrp7+DdOXrOuARWUUIIQVgwaJixozy9ttGMimAq1dXC+AABwIE/Ph9+ACjAIyE765uBLXSSsbOnj376quv9vb2Liws1NfXT05OWiyW2tpatjU9TU+PMf2dk2Zj9KuYMe/s9WhzbK0UvlZPdhJCSAHkkptPvooJk7a0hJHtTE6ubv1XPLD78RvBUFi40gEjI0sjnwk9XN0IKqaYDESj0YGBgQsXLrz00kuapjU1NVmt1paWlkwKwBj9Kub/iATPnlw+99vq5DYqm47+JqgkpRshxN4nBaDsY5+KaoKlhw9RefQo882fkYjpNH7j8N+GjZSWFqMA1O3dixfDhI0OOM5xMnD//v25ubmpqSk1/YGRkZGZmRm1FGBbly+nLvwPvv9IF21BbndsNfqVpuUgBfDcEUIKwIRJBUXTkrdbuXRptQACyWP/tPOrST6fUQAqoWjIWAGoZLIRVFRUVFZW5nK5SkpK4vF4c3OzzWZTP89k7cCtW/T1AV3vvxNEBRNbaIQmHvPHPBeEEFIAj3ikoqGRk4PJpOdxx0mKxVZ2fhZDHIdmmo0CYL3S0pWNoGj0wcJCiFl78oRwCSVsqaKioqOjY3x8vLi4eHFx0e12BwKB1tZWtnhmBk3T35q2Jdq4yO2L8EdwfOsCeG4JIaQAHvDACPv2Gdniu26FQkyHOKQSXbmKNEiwjDI21NHB+DgWCw8f3oMw2BmzE3qRF9nO4cOHLRZLe3t7IpGorKz0eDxqEZDRN4Ts1COE2IaQAkiQMIKSn29kszEbDeMN6aEPgxnzNofzx4/j8RjnFUJgB4eeaBt2thNYpmmayWTCsG0BvKBHCLE9IQWwwMIiiyooZvNKHmdHGcUeAiM7kjxyf2h0QDKlZGSL6a/YN/+1EEKIHDY3x5zKPPPk5LB/vx6LhfUewcXk9J/giUUgvJwQz5QQQsgKYIYZI1itKpu+BCyUzGV2Z3UR4IB2nhEhhJACmGRyiikVSkspKdGzoYPL+VUypPGsvG85f48QQmxNtoDGGZ9gYpJJystXIoTY84QUwDjjY4ypLLCAzaanogIhxJ4npABGGBllVIWiIhwOqqqorEQIsecJKYC73L3HvQgRqqtxOnG5EELseUIKYJTR29y+w50YMWpqVPQaEELseUIKYIihW9xSwWajvp66OimAvU8IIQUQJ36Tm4MMqhqgqYmGBr0DhBB7npACuMa161wfYOB+qZnmZhW9BoQQe5uQAhhn/CpXjQ6gvZ22NlpbsVgQQuxtQgpgmGFVAFe4Mu+w0tGBx6PXgBBCiD0nd92vc61Y22lf6rRffeEFvQPMZoQQe56QAvDhS5BwdDjc3v6aAwf6PZ4RhBB7nZACMLyr7F01vhq3113j9dZAH/TDIkKIvU5IAeDD4XU4fI4aOzXghhroh+sIIfYwIQXQBl7wgZd2cCcLwGiCfhhDCLH3CCmAYvAlk4NSBO82pn/aUqAPEggh9hIhBeBLHv67SFe9nJq0JugnuwkhhDBpmoYQQgh5IVgaIYQQUgCmjXIY/gzukrke+C3wg2mzZPK4Rk7BX8Ntnoj6Z38C74Zq+Bn4ArtzAX4FmsCUWerhF+EcG/hx+Ev4LAyzVlR/ezme8WPkwnfDh8lEDP4W3gsm6ITfhStsYhT+Kvk0fPAHG1wcZnraqYDvYnMP4b/gW1P/4ImfzPNg03eWKS1e+H24yjv1kX0P/N7az/8p+Hf4Xih9Sg+RbgD+GI7tfuyY4TvhP2CerX0GfhSsO3zOJ+EfYIrtDcMfwaHN7+o74P1PswA0NpCHkcw1QSN69rE7juQd1bIXzKx+NXwCPZ9Ev30ZvV7FQT3iK8eMkXeEGw5Ap367qgw6wKPfPn31yVif1h0V7uHLQDOXb4TNGIe6Q2s/zKkOGGAXjLtoIOvNw1W4podDxtpEzw0Y0G/1tOnB9RxP/6CejGmIXb6zLO9kAaSmv4U1OvRZwS39llGepjxoSKaXXUjdC89hAWjrVkp5WxWACQrAt9HoblLZTQFYocHoALLY4iLXrnHNz7VkB/wuKUMqRg3oMWog2gZ27DxP6iG4ixWACfGEKwCLyjs5/Vt4XAF0ZFYAuzh230UBOJN34XwuCyC9A85zfphhLV8jj2/Me6wCvj31hefTk/L+1BWljZ+lcQZ3an+juJiuLioq2FyceA89k0ymHf43UNCVesiNvX/TMwBnSeOCI2zo28egiqcskdBHv8rVWq6BUQCzrHdjNUYNfLKNNpVKKslIxu+XGLzOWp3gSXtHvD91CuCt9S8cpzX1gcjU6CiRCBMTzM+ztERODmYzJSU4HNTVkZcHFCdHfxDKSDmzflf7/OrEN9VR58CBMjvL8DDRqPqJ/hC5uRQVYbfrnzlWK7szPj5+7969iYmJ2dnZJXXnUFBQYLVabTab2+0uUW/IU6Ge/L17q++lffvYv5/yclwu3G629b/sfQdYFGnW9SmBJgoNKJIzggKCIKLojDppZ76dmY3On3POOeecc845rRu+71t3djbNrI6ZIAgiUTI0OTTdQHdD/ef1LmUrdFMdGNedPs996oEOVV1vOOfe+4Zqxs6yaoNAFTnPwfIg1FWGh9WFNjZgscQdOhRXWhrH9wLCzAzGxiC/1uN5+muzspCXByBV2F/Z7qgAhrzMgDotG8ziIpxOSGtJTMShQ8jPR0aGmaaeDhR+jMJ5FBija/x6Y6P6hb4xh7lWtK5gxUtDqoEKo7X7JpmPADuCxBtP2/tlX5cYAe5hb1ze8WeIKSAdE9rEXdz9FJ9SAC5b2FrghW8Y7J8niwp2I53iYhT/KorvbgsAa5Ed/rXX4Bud6PwxfjyIQRwQAfglnmWvW8P3LuOLAD7wqwHZu39f3cm/Um+FE5ub29Tfg94F9OYr6l+Cf/Q+jQOc/bjaj/4KVFAGUpEaugD40IBKoMq7LOQru2nACW+Vv2yS1B4+RH8/ezV5VLGzIQCpqYraSkpw7BjNSP6U7PXjh7e57gAOnMGZ9/T3LO0PtUePMDiIqSksL4sA0NVQ5y8rQ02N2uY2KJD0u7q6BgYGRkdHZ2dnKQAbGxuaplEAyPtHjhwpKCg4evRoVVVVIkkqaHiX0uwsVldFAIT4yKfqLqqqeDuB1vPgtgbwZPX1eP99WDqacf8+r6Uuur7OO4nLzIyraow98XVZELo3WInt7WzVSnEpA/y1IgD8tXTs+GtZp5WVVfn5wv5+/BcjCOBRB9SvYn8ZGnrOXRAtJwnwtLwNEsieRVBYiMIOFN7eFoCKCvXzTp+Gb3Sg44f44RjGkMDvR6PwS+osgG8BCF0DXofArwAYrd4E+4dXAACn7lzRVvpi+o7HtHsVu+4ddEcbS8p8CQCtC12/ioUF4L33VIcnF7Bl7wYq8BCGBjDwK/gVd3EBit5X36dnYRLkL82HBvhgfx3hh/C+lwA0YR4msQU8gsQBN1kONEMGkpEctAD40IBKmt+vGBpwQllA4I03N6OjA2RnupxknJWVGDegwZ1ggZDF0aPkkRNzc/VnztTFxNTtqE5fveEeUKqXFtmLlu9cO9zaigcP0NeH8XFtYUEXAbBaVXhByiCV8BXKQGAgHfU3Nzd3dHT09PQMDQ1NT08vLy9vbm7qum6xWKxWa1ZWVnFx8fHjxycnJxsbG7MNgg6xlPhrLRZsbdGHIPGRhlSXobadOcOYMMB6Fg2g36Xn5GDp/t2M69e1O3fQ2cmyYmYyPi4hvvhy/Hg8pgAbVA3n7CGJuHED9+6hq0u1TZstcWXD4rFsRm3akzQ9I4NlTrYtHh+vbmiorq2thj8UAMdEAFZXH7ISqSvd3eq0/G2GEFIARMt57xQGvnjhAjVgbwGgkdR/BUvuRH5eyVVtrSrY3TCPeeY52NG+i++i8Liw/y574/8AvnAA30/GajDs77seTWvA5f0aBHbB5dJdriSXxcJGv3vK1WD/UuwCegZ0CEQGlABQ3mmPH/sSAHk8PT/khlu+pqJ4c/itUKXn0APPB18Mn/svXgzN0ICZeAQON9ClZEAFATSRAWoAlSDxpZiXwBu/fh23bqGlhe5tNrKLUJGBjAQkQIfT4Zx2TA+PDk0ODuZOT9fZ7XVud/3581HP989x+ADfyF7NdnzqcNz8acadO8XD9/PyFtOaVE93uehgeAYH56Za58hQ6v/4eOoNkyABsf/169dv3brV0tLCIIDkTk//0KFD8fHxFACn0zkzM/P48eNHjx6NjY0tLCwwMrhw4QIlIWD2v3ZNlRLpj8THSOWVV+jukHoU+y8vq5iABcjj0pJytC0Wn91hGH6YIzOTxdC30dys8VrXr6csbCYiFUhdX1+P646Lm4qDDZiCshPAKewOXVdaRQH49FP+4DJPUSkaWaexiKUuUh0nlice93cuDg1Vzc5WOzerPalRpwpA+A8C5ueHbt0aunvX2dZGIU+YWGS3z0R9EpKiEOXcck4tTfUs9ayTGFggBAMCaqE/UDVYTmIMeByK/fl1HhlL+aYdagAA45vmmVYLH3/gLeyKVL7zmY0BkKolCnOvrrqI/+qy/OiqxZKIjjS6JGxNBsFmP91NzifI4aIBdBrWhf15rK7e9dmTpH4xJhNZB/wa/cRABwN1UxrgFchcQOjgfXnzPs06tUbKPoqjWcgKzHmXaPrEifXY2I6+voHR74kA8EiTsYF4xOPnFnTfSFu3b5NrWJn1qD+Jk/zNLAf2agCrWJ3EJO+ly9Z16JPoeldaPXIOw4Lz4MEkHLcdzptLjuvX34y/efw9nS2FTkVsLBMbpH02NvIqo4IJUpX40eYFgEl/+v5k/2vXrg0ODp4+ffrkyZNlZWWZmZkJKo9MN3SVXj8jg9bW1rt3766trR04cIBZoLfeeovZoQCGRuhK81dSA1ZW8MYbOHkSpaXMdLNrUADYAdmo+LPVZ27eVPfGvBm5nO8GiA2Fzo3u9uzm5qqFU3nIk4pgwE1/Im4xToWDU9t2yreoM3Rgzd69ywo9h3NVqMpBDpuiB54FLIxilK20d7C32lFa7a4u2CzAJtAIP8iYxfEbg0M3W4ZvfdzS3Hzcc7QK58pQlotcdhkKAJsKeZlXue68bmfskpLCaIC0sNd4gKpwMQZXW6R+mg8B2MSmvE0NYGnL13Y//+V9Zn8fSew0efmzEAC2ue5u+j8Shbnsdhex6YqJuxLznSSyEkufvMwoj7Ge5sX+KfAFCrZoAI2+oAOGBtDf2cH+IsVsTCg+JxFAqHPeNB/vhHHuCBvPs9SfMm4n7wtT8w/x3GEeLLJz59jbmSHh2Ry9vW2UgbEBkQGaIQMWWBB+6CGWC6uZ3Y7My1omU1zAhbM4ewIn8pEfhzgA61gnWXSjm/08ai2q7kYd7wUC0xpAAXDcufPXs2+91aAzwcPiIDdaLCQ7XlY1VZdLJVSWWWCDg6qOFhdVkZoAXf729nb6/mT/hoYGuvZnz56trq7mkG8cfXPA4XCMjIzk5+dTD9g/Hjx4IGPCOTk5dXV1MAlqFJMe5FP2tbfeUpmNs2dVrt9qNWYQqM5IyqMYfPQRi1Qy7EGks1yufper19Xd/frEa6dwqhSlVlh16MtY1qDxXxC92wLwF3yFXeMsWTbIdKSzWl/BK01oYg0CkDpl/+1BTzWq82x5VderFPuLNfleaXgTx24eG7o5NHJvJAUJbCQ1qOGgEDmY414UAP5CthM2G2rVp85PeXWVEBsd3UsAWIqGBpBvxiUI2DX5TMIR4yVQeALynV3xBV+v/SdlAePfmdGYVHntsxCAvj42R0ZhJDJJR7pWVtxs4B6PJf7Kr0lOth06pFEhqaJsB7W1NQ0NNVFRNdib20jjYmQGcfF3FQBJ/tCY9fOd/zEXBPhgMx1hxfi4wftiySOLivFxwVsAVN4jUOTn0ygALG0aq2alt7e5t7d/QrE/zVsG2E/CxvyhY2aGIsWMNr1FzmStRe1pnKYGHMZhbIP9mcXCO6RXAKByvRI3QASkARv/em3sUuWFV/7q2bOv0HXeBsc1lX+ytqa6PPmTHMsEOhszO78ZAWBuh/kfevednZ3M/NTW1jK/f/HixVSv79LZZ+o/OTmZKRQODnOImJpRWFjINFFlZaWpIGBignXKUuJPZKjH3qSmqZw/D29Qzfi6283fxG7Bz1PJ2DEDFwCK4sDG6OBf6c95A+dexatkWJ+rFG/AJ5aW6CCyJA+hjMEcG56wv1GnPC21ZA5zVJf4uXhc3xYAD3Bux4rQSbK/soM3D9a01Gxgg84+2wMFIBOZRlOkDHCof1abZYNnSn+F5Sa1aQJeAqC8NNGAnQJguP9qwpjxHdP4CG9fAb4B2AMhqNcVrf+eD7BjdkcyfLyw3wIgSVuG7a2t5Gm2cSZh3IWF7vj4xNH45ssrhy8vHaqf4lsSHxyZnz+xulpz7twJEwEp1drgcw6nSRBAGSfHeY/DCPurmiiuheR/LJYwerR6GKeOsxU+O9KbNDSr6BjnvKk/xHy9lJoIAI/Ug6Xe3juUgcmnMmAMEePnBOPK21I1CfDX84fRJfRmf2/K4FsQrD9LPa9hT5wBzh7G+WqcOLlLZdNXZkCgOrsw18qKMhNgTp/ePfP7zPUXFRXJJB/F/jvAgIAywDlC/Fh3dzcHivlFfr20tNTMZVQpsRdI0plKz/Hq3cCmRJ3gxdgxlWzYbIYbax4D9q/8OLHh3W+/W/9KPWk6mC6g6zIuzSNzJh541rCGHYhBDLUBgkVANMADdbzk3Ugg7K8q/T7YgDlKRA1gO9nphdC/ydKzOB86TUtbWR6G1KbHo4b6/aKgQJL5KhyclzEAGQr2+iJpR9x/hqQorBb29znR6Ns+JADOYOnk0lMJ+OoLXAdAF6O5mXlGagB5mblIOlFkZ1damivhkeVfnHvNsgLLwoQ+MaANPHr8aGbmxyfsjhpX/Ak9K+18JeLNUhmNzCApIB55iZ2BGAeOTbj/Wz5e8IFNIA9be330gNef/srK4H2h/gHbUdWDG71zPirHGi6QUGjbMkCb7+u7SRmYUuzvPVOIn8MLx/S0TPzXoDF1SzefdQkzEA0wLQBnoeyED8GnM8d0vTgnWF+nDwyXy1wAM2Oz2Tjxn2l9RgBkefK7b4op4Ac49ksB4KgAv8iv7xSAsV1bEUuJhH74MD0t5OQg3Qk4oe24lWQoArNalU+2sMBEFhnQWwDysDeYpqdzzZZJ9g8y26dpqjSTkmgTqxN96LuN29QAnpZxwAFf/WVFNOBZARjdpn4eOyBI1pPhG3SkeAtxehw0sCrFyOMmgwBW4HyLHYYGlJTsdP99DP+anKLzPcCJgHERghcuAHQxjKQtLl1CUxPDUlKw6/CUK7HD8u9+v8Uy8K5ljiXVp/cVaoXdq90112tObJ2oRCUkZo/fuyaMoeDp7SwQryJTPN1wG8O/Qv08+gjYfUwQ/D5g3z0LJMiGfGdM2W56/ZrXOjAfO5LNAz0Y68WHvXikNODUXzloTS/MPHymOK/46CHF+7SDOLgfGRfyvmHrfX3D5eVkqbn5+T+8cLV/QGTAXY7S8he7aNrtJj2RpGhpirfS6dNJ3t+8BpjEnwZ0v3x14IAy8V7FTPx899LSEmf18JiWlkbHPz09nZM+fYe2GfwAPymLBhYXF/nFvRur0wkpJYeD7K/IPe0B8ACaj2xmLC1WuaX8PL9LPfPCn8DeSEbeYeTnoIBMGvyIT2amLEpYu3//Jm4y6c9Z8+RLOu80iv3uSuCA0gCPd3oTyn7dnmkSFXKsremkes2jHdg8oG1pJmrT51CwW1JAXgKwhS1j/g/FXD7qb5nqd+EbVxMD04BLPzcrgdkW6YzTm2R6p7paLZfgeNSZM8yIufAtl+aKOeWKiclJseS8hxMckOEUguM4XugurLlRA4E5DTCmA01P60YQIAJgDP/aYUdx047hX3Na/JE/DTjD7/hlf4FvAXACo4Yld43GPx79+jffsXJuYEZGQVHB0fLC5PJCHDqI/cRGwdG+jbLejb4B9+NJi23u4MJU0p+MH4hPQGY8QEuAsswXuOkFGYo8BXDkg3RjREL7oQFSxWEE53c6ngAAB3iZ60+iz+sbMvmHnyQ4NYhf5BmwA38Sz6Bxfd0oJeXXJ32CPwDcAzQfYekPobC8rMKFzU1aoAIA5AnvhjTqL+vRGLt4PDOdnd/H9xkHMMIzBIB/k0F3yXyuKw0wB413abNRTRUtra6ynLSNDd0jSaQtBAjvrD4ZblQiAAZSQjtC/TwuYxmFtXtn/y/DF74ugvJSbgUh0ej4OEWV96+82Lo6lhwbGtnfBZfFsmWxaDExugaNLn+BXsAxGTp3ye5k3IBpDRBWl7lAWPGaD0rvxhj+lTleyhgU+8PH2A2Wj2AxOqCRXfuHUNzvxOX/9vF/+29YAmCFNy7ADBKAk0ApUFaF0hiU0hX/X9/u+ST9WlpWlsa+QQXt62PpMRskEXrYN5Xg6Xt7edR6e8v7+spHR+3Rs9Vvud6qiFJjABVIKQdywjkcrAUTAdBcLkkHW2ChIVCsA3gxGuB5AtnvIWYb8AvjY6R+fpHgpPgopjF94y4ZXAycHnvg8oOCywUoK4BP/Aco8ENEfHxQA2M/Af6wtI7gNcBqpXfIMlK0mpvL/jo4OjroHGRyRtx/SfeRIupQ93zez7P3Nk7kA5rsBDE7qwTAbldCycXXbverm5uXgiJYbwGAsSDAEADRAJkzFLQAfA0GXkYBYDFTdhmQxsWxIEheEgSR+tmbeVSdWJn0NdCno0HgftZfexO+QZ5/OhLQ3m43pgPZKqzy1wQmUHxe8j9BTJeN3fmqDoxKtNBx9YMx4N2rwLmQRn8P1uNUCRT7M+FO+93zvT3zPb29VzfZvkj9chQZYDHukfzRTJKqUL/3MX4+t0KR/rsyx5RHdr+ft/mgenDkXB3CpK/wIbjH52maUWKm8lOeDzybqN7EMbNlLVQVzKStvDDUNvsmQ5bMTNX2SaNk68nJtampgcnJgZWBFKTQ/WcvZhyvQWN2yOTGfeT6tjaVHGbvGR3lKemUpi5a0u3JybwceanroOVK1P1vRCEIUKoksX/kCKaNuUC1tQvaorj/PBruv1SKT/wSduJtAC+1AIgzQmH3Tq6JAIgGbAuAj7birQFvmh0KZmV7toOA4YpUkWKkpJie/Xl5J/tf9pli71ACQO7/b/HUgNCJzQprIxpLvWSgzN3b09XT23cVO2UgLS0Eh3QX6o+Zy6reJn05eve0F6wBMTE0aStsOeJABLyXYwOAF6MB4stL0l9CAddeQ8fubTAdxC/y6+L+7+EKiQEbX9tgMn0NJUCtmbLWQ9psWzdf23nAmK8pfa+/ruZwk6qZNpiaImGr0ezBweXu7ubF5iUsUdzSkEaPhBN49mT/hQW1Eu7uXTqFaixyNKFCdf+abHqiMvStx8U9ZI1EDyGqH98JKQiYvrtkzAcdLloU9n9m3fAvNKL9d1rGWqo2pqdZo0zFiADQkrwFwLcGmEFqqqEBpLMpsr/z8eOh8bShXBn+PSbuv/o9e+CNPf7XvfcB6gAxKR+KB86FrgEEk2BNaHpGBly9PZ09A5QByQXJUZSAdx4IOPzV0/M8+2uzGce2SZ/2WU37uQ2chUnExzN3zk4ry33pCa5gJaAyxWllLwoJCir1L6u9Vp8AvsFsj5H657IAGQ8wtdKbUTQTKZpm1+wr+gpz0Lum3nSEF5qc1YzCXISq+AH4QFYWjRkhcgU1gGLABkrS4DTC/ul+WSUwjvECFGAvtLbiyf4UuNdu4UoITkFkl6HfTqWhAOgsKGYmLBNQAuBz6Nj8UPD6kxTQFmfsPhEAmvE2L/e5FAA2xJQUcVQp43TOqb2sWlcO1EZAmuuJOtD0sHgjJSWGAKi03+jw8MiofTh3eD3a81Qcwg1t356ykoEMmrcM9Gz09Hb2DvVffRoKUN0uXlQdxjQ+/lgFxQb1b86kG/6+8QeCAt1TmkS6koqmnw6faAfuBBYBWK1UOx4XlxbnMT+DGQccptZDWKCov0HZi0J0dDRn/qQ9wcITcFsI7vTALYB8zRnlB/gxADIdKNWM0rP009QkKQ7qzs3MzWgzNt3GiY0MCkLh/fDGSxcAC5R1+89l5eQoq6lBZ6di6sVFepCzmGUcQPk3s2iEzfvBA7UpBk7XUgCUVVczy/RsOUxgFbgWtK4/JfmeXuX+c+3eiH1h5OCIkt7CeiP7/7kUAJY1q7CgQA3Okm+Yd9N1hgKuo0ddhS7XATUGwBFgskZYIHsA06jxrP+Jyclx2xrnkxnsr9QorNB8tHwJAsICujw0QwZ47Fnv6X3QOyoy4HZTGkwLAGlF1cMPfqAqZGPaupP6Q1n6y04qbjrBLsoOwL66a/ksoFuxv7IMmAcFUVrU0hJ9wFGMcmyvGtV+NhyUgWJhf3WswwsEN3nmvH5u6kBa59R+LuziCq/jPjaUZiJhfHx8ii4wwK9wsyBODDV5Gdno3z0zwyIa0ob60FetV/tpxMwUyYRaHAdeAy5BHa2h9glfDt1FIBbKLEC7GeGvq5N1tpS3LQLKTGy7BBYeUzKQxXsVFZyDLhGk/ty8gJvALQQLLwHo0cEVG1NTk9Pz4wfHKcPyBgnw8yoADLJIUlVVsNnUPn/NzbINoaukxFVgdV1xWX75lsUyAk8OHaRwTHAXnteoAWvj67bZ2anZ9cm5SRS/bW74N7Dra+aD4JCRi1zaMzKw1tO7NDjBvhDIiKKu06gaB/Omn6d+cmXIWQ7lo7PZM/Cbtk9zyI7JN47dZSLTKB+P7ulARzOa7+HmCG4DM0Cm+UE3WYJJ+RrEYA96mAfgMk4KJJ4FL92GNuaIuDqprqZO2J/HEN3a0GSdLJTH5V3c55k7fXIvoN7eXi4EI61zuu9O9n/48CH3jeCyYfr+/Bi/yK+b3OpDlsaQkPqd/d3opiOdoqXsOpI/hakudNlgY0m+mv8qJEvWCFj3MUFUAli2LdZ4okZ3N5xOVjE1fud2EzS2WjJ/EpISkGBmv0KXS31pfV1FpkpFYmOF/Z8Bs3B3pnBLD0UAZG9JGmWXHhY38JiZnZsunUZhuZH9/7wKAMEIjlrMqmU1tLfLriPuoiJ3Xp4rlxHAty2DOfhODiueDVc5dyFBBEDnMa9L+3Nzc7Y5B2pz8CX1KusnLOyvmWvqEgSEF+ylNC8Z6JWnQNoCYWmgPNeb+sO6/WdmJouZNUmK9pCgKVqyOY8VVgAMCEa0EVLSfdy3nX/72IXZ0b88ij8RgAvNcEe5ckND8w8ftqOdp+Wo4AmcYLGQGljqvARVpxOdLWiZxvRq8WpKQ0rJ6RLF/vF4sSDRc/sHuvzMEty/f5/PA2BWhwO83OSHi36Z5dd1fWVlhe/yLXlgAHfa5H5Bx44d446hatqoGaSk0OuSodS5u3db0cqSoctchSpqQApSGOTR5WcuRbbYfIiHAxg4n34+qTGp7nSdEoCcfU8Q5QEWL7vd2uphanJ+XlXuiRP8/cp3NNj//n15losExMyLcpAMMDUczqhUtr9WLDQ+Tp4x+ijPqTNDRK+Uu9TcHADCEASsPJgTrFo28KUiefXzLQCshHPnFPvLbqsDA2yXGwMDroGB2fh4S/Z3LP0q00fvSJEb57xXVobC1AcOiAYsFhf/1z/Z/N2i+9/iNujhcf8dgRD69rrCiwg/JJ9FAVCG3jJAZGB2rx4BlAMVPH5xm/pJDQgrWNKsQ5LPxAQeLj20wEJGpo8pa5jpkk9isj+6X2/sPNf0tYGmRJxFYGDzGB+Xx0V1jnRq0Oywc7SNvMDBANIcx4eZ9GPSg/KwlrVG9reetvJ4KONQOPgrVHDjT2Z1uLKX2f+2tjZN07jZPff8YXaIY7wUAA788gMMDvguX6+vrz916lRNTQ13DYJ58MOTk+J4dXd2slgWsch0mWweTsmkR72ABabR+CJ1eiZlJq4xThVUY0pJeQk+ExwxckHT07GdndQAB+lYJoAyGmC+i9Th8VAV6DWSpulTVKKSzgSd6jSkmZkVInthMOdJ2lGjtPHxJBmlCS4XE9G8Fh/3VtHefqb81x7+V55Hv/t66AKQ3bH6V+cVjJcYDn++BUBckjfeYI2SHmQ9hnt83DU1FT81ZXn82DI4yIqhAMhe0HwXDQ3sKFAIeih4oLh4kE/cG4q1hmf497/62TzP9xsp+Oky/hX2BdtBAI8rpYAhA7sh2qB+2mko6qcniH0AuxwduNlZtW63pYV+/n2yM1NAZGcdugMOe870iROL9fX66cbvTjUlxiXFrZ9AYMMAbB5OJ9WVF3jw6AGTGAwp6BUyjiHT8RI22MhrK8dycLKp5cwJ6+mKlJJDb6hSePHg0764CzTZn9TPlcDc6ZNbAzG9w2Fe7wfCcGyAue5XXnmF7N/U1MSvqAmg5iEPKWT6Q9P4N3cfnXBMSCmxIigALriWsUwxZu1sHS1F9aWWU3XWM8dT6kqsQPpnVhoyINzZZekaT+hce/BobXjiQ5AQGEJyKNtiUQKwtESXkfNHKu353LyTm0VTBswl3FSnP3ZM+SJMpvFsbJcMUakrsq2IZWKiZrn/1KlHjY3fXDybihDAUxqE/6c4K/wq8OabL4P7XwD8Kdo+C4BMEJE5WFR4sv/EhKttyn1lyvKVSVaDzPSiMfdJ547dm548fb0gZxkkOg6UDB4oHogqHkTsUWF/hDzQ/Dt9LdarUvZCoEFT8zXhKQNKlaFsl/IqN9ifxxglAGnYT9TXK+aJiaEYUO7Z6RbX1xddioiQq7ZuVfFBbS08pxKSEpNOBzExk16CrtOPk0G22ZGR2dkhOLrU0KDFQodLXTj/ouwu0F5fb62uTgGswBl4owg+UASz7xQFGSQVkf3p73OXf+7zzEmD8gQYeSYwnwpAkaioqOBQATM/3DKaD43hJxEoGFW/+qo8sIxur314+IHNxgwc1PY3miq95GRVUDnV8vDkoZqaloYGKSiKZZTZZV55CA0JPbjQeSG+Mz6tO40JQ675Gm0enWu+tmr1eGJiojc3E+1ahjujEOfZ1OtQdxZnj+CIyS3m6IswCiLbMxrgqMriL/d5Dh1iJi3F48k6tFJSsnq8kbQUH9eQlpqfmufvXl41HwSkPwQytv9nxunzgWiTjgl7P8314yXXnank5C9ZvvqBZaxBqQIlurOT0RpDe8kXMeG7+7YH2h6jwmrzsuKBgZKB1X4X3i8OPf/zwy/6WB9MVNP8fxl/AJh5a1+LPrpS2F8dvVEmpO91PJyGzwLM+dGBY/tnOMdQWzzRhATWpzysV6cnMIhCOnRsDQgC9OusVsVx5eX0J3gNiQmU7CQlkfL4lrh/bEUtgPAaj8f2WnpfSjO1QlB0NUiQ9zm0y0Hd8vJyzgWSh8LLujB5KDxHhvlMGNkv2kj9B6MBZD4eWdysCbpWKyvgVQgKAJWSBcUUCeuJH8jOvr9dULTGPZbGC4qUhYJVoBPRndFNnU1MT9FTY+jGAXympxxLjk1scriCQ77M+JOdGe9Wo9ok+xubNlME2SL4B1Niy8tuj2eKxclbJ7vwRTZF5hoGkrM4WUDGFYJ+NK4kON4uUpqIbCmbInxuEK0YptfsHBiXy+pypVomK2O+HBMz9j6GRiTrx5lC7M/yfCLZ9ybQBShuuAcxOHB4YPB3DqJcUb8yOjshwCd75yszgwzsO2KBE8+Q1zvPUn8mPluQe+VR24zgxemkM0pVYMcTlKDksHZ4DWvBz72gMdk9NYXFRaacRADoZPAyjPR5NEimZVsAeMzyzWplynZHK1Dv9ZUKZSGBa7vOnDnD4V+6/0wZM/VvCIDxCDBGA6EvP2PGTMZk6Awr74pX0TQJlaQ+vOdGS0FJWVX4Z7/Q2Z/oVIYuYAqyXpZZKRtsi1h0wikCwMweM/4yGTq4hDC/ydY4PQ27HR6POAmKWuidUwEJBhZxWpwd9lAEgKguVAZaNo+0g58nATgHbAGaqRmbbrfGdmjhJKBEi6XCgop3lJ/C5u5wsD8zccD2yhoLYnxOsT8GeKQTgeJGw/3/nCABBt7dZv8cvCAwjcc+RvMVsiUjmRbqrCPaXpgAjDjgPQjq8Syi5CXfMN63qL/CA3I9gwDsNyiKdKdo/rFDLKVk0YgdiFKvhogxEQBlBmT7z3CvwaafoMwP9opETYUdRwoBbwFIwOdPADaBxwD8rzon+1MDYOFWQJrFoltAMF23vEzqp+/PdB1jVXor6kMBxr9kfzFFPOL+0wH4POJd7/AkgofeAuAbEYx7ieW72Ddsebn/63hB0MPOgt4CEA68rQz/6aUSAB6HfY7cCvuLbe8EaoG+PYPEaqVTZOwip4b1AgETiOL+M4pE8asiAPic4ueT/XW8OIhvG8Ge6PoMBKBrWwAG8AsFQwA+Z25nNMq9BIDHMZ8U4HKJBuzY1d1rx1CRhiDcf0kBqeRm8TPDvxFE4FIaEMGLF0vM70z+vFBfREPYkA78dnwOEQ3imJcAfApMQBblk+0LtIID+gFjD3ojAlAaoFsgWFxUmR+7HSkpNIYCu+ygXeUndB2X5M8okpGYJe6/OkMoiGBzP915/ecpWIgCfq2yvWEBfgPtcxtSGUUVLNL3qQD1F1WIEURDUOUVB1xX64Bu47YTTo7B1KP+MA4DpH6dg8CUgURYRANAzM4az+xRxM3JCbvOff7Av/s/P4AmGX9Ugz6lpXi5UK8Mf3ef11/+QWURRBBBBOEWAOKECACmNqfaP22/PnPdBhttXpvnloQVqHC5LNQAJoIsUCPAPKrZgi0taqegnh7qg5q6VVDA0WDz07FmMDOIzAFcHjQmoGRnIzFx//Psf0JZBBFEEEFEAAQ4CX1L79js6Njq6LjZ0TPTs4CFaUyPYrQPfTmunCfrAOos/RbLA4s2+zGGhtDZqfbtfvAAdXVqDXBFxe7T+yp8uf8ZyiLBXAQRRBDBC18J3FGvdWyld6Cgx1KDVk/nQCcHAx5rj7lT5xH3kWRXssv16yxXHlrW2jA/rzI/8nSS6mo0NlID1KxQ01gCBoEBdYwggggiiOCFCoAN6KA1NDx4suxaVt0t9PXdmrzVoXUcKjh08DcddLkSYq64Y9buqKWiNpvK+F+4gNpaJQBnzwb0mEOD/TfwWSOCCCKIIAJN13Vs4wfb1g1gdJTpHZXcHxigp69PTzcvLn7D6fxva2uXLZYP4uIuyLY/+flqpSIjALr/TP68dIgggggiiEQAD8T9F/YnyOwczi0r05non5jAzIyLezI5HJb1b1ssX46JjZVdCRkiyK6EkYmbLyUiiCCCiADMKOoXDfCCpumyFQmzPXNzrrFl1xWn5TtXLd9MtMR+RXYljHj9LzciiCCCiAB0bNv8rsssrFaa+zF+thPcBYsFCUAlXlpEEEEEEURwAEDnNvt3+Vxkp9FcLo0LwX62ExwseJkRQQQRRBBB9JyR/d+d/eugcBKAy6UsweW1E9xLiwgiiCCCCKKN5M/sLuz/d409HLa2FPvX0DZRjvJMZELDS68BEUQQQQQRAeh8nv0Hn9vAgezf4FZGkP0TkADgZdeACCKIIIKIAOz0/UvwLOJcKHEBNC+8vBoQQQQRRBDBgQ5g2szWqm5gVwEgNLyUiCCCCCKICADMOPEuwK0MiGhABBFEEMEvzFYQn09EEEEEEUTWAUQQQQQRRBARALQAfwYoAjRT5oUfAX8cOBbo12DuC9nA7wC+CTiggFd3ntIkaoC/CfTBBLR9ts/gGsHDiWBxD/gHwLvAwTD91uvAHwKOBHX/2cAfAW7ue+2+ppoVbiMofAj8diB5r2sUAX8aaMY+oVj1fbSGu1v4Pksc8JuAXzX7iNP/C3zN92lfCOSXHAX+AtARdGF9AFx50ZvBhY4qYAwYV4ZVhBtV25ZorE+bB7r3ZzpSBMPAgirkoHDaa8rANXX8hUc90CCGwOEBVoBlwI4XiG7sByLQTYrVyy8AWUC1Yn8lA3cQVhxTp1ZWAcBbAGjTCAQTiMAMepQAoARIQVA4C7i8NOAXGmWK93GKx+C607IyrOAFYgpoRQT7pwGE9osuAEYQYMQB4UGS4f4/53MtKAHAjwCPySBgALiLCPbEgJcANAadWRQNkFDgNn5RccTL909DUFgRQwgIKQZeV+yPFoQf+xib6y+Bf/9ShALRz6efWoAheScaiYlqx/+CAqT5bdvGKeKB6n6Mt3sLQApS6lB3CIdgDhsbuHsX09PYRjWtCNWnkOn9fPnK7Qhg4VlW14BvYDd0deHOIyM0qQGOwg8uwxw2NzE6CpsNS0tYW+O/UmyqwLKykJOD8ICnHhtThbK8rApI1+H1yDajdsxUkRn0XEXvmirbEmWXTNXd5R3XiKMGrMB1Da51uMTDhAYtDWlsD1ZYzf/U68A0QkQ2cM5E7ZrA48fo78fKirR3of5TKC/ECVPFshPL7VjuxzJMopBX9NlcDYr5Bkyj5QZaprwjgGKgPpRuMYKRKUwtYnENa5vYjEZ0EpLYinKRexiHYQLNuw8CtG17FwfykS+nwvo6hoZUD2SNuFyIikJSEjIyFGulpiJ0sLqnprC4qC5ExMXxtKpjFxYC6EGPHXYIYFG8so2GvTRgZgbNzXA6jbINgYbAJtk/MDCwurqanJx89OjRoqKiYAXA0AAyGSkmMxMlJaiuxsmTptilrExR1dj3MTaChyDykMdG8A7egTm0tuKTT/BQfZfItaLqHVRVoWpnqRhZINoAnuKDnQXHkr5zB8rcSMIJqaiQBeDRI/T0qObHFrKwoOpSBIAtkMzMRsKSq6xEXh6Ch8eDzk709WF4mJcRnVECYLEgOdl4IpsqoZSUsAgA70jZPREA3kHWeZwPRgAI/sKzZ6kBytw2PABRhCK2hzfxpumfGroGZLFRmKtdE3Tw8cdoa8PcHIT9UdWA108I+wcnAGSulU+xYjPF/jRTzfUDk/fKjsYe13pTCUCW1A+Kg+4WpP4udA1gYAIT85h3wsm6jkFMkpaU8aOMAhQUohyoAp6l5je8//RTYoOiAVGIakDDe3gvpmeQjp3S48lJxdEiAGx1ZK3SUtUpyFpBY2REdT2enITG7s1+R8THIz1dqcvx49212T849ANKHRRinmtjDXvFAb29bEo8t8+C/YYdOGiyz/Z88sknHR0dCwsLhw4dqquru3TpUgn7bpACACT3osIVPTObskAHs6KCaqUczzNnTHVZqsX4OJR9nx7rJVzKQhYVuxKV2AsTE6pFdnTgww95QYpG9SuoJvvHIQ47kPSsBizu+ntcLqF+GiMLNpQTqrOGCDkrew6bnzwxE/PzcDiUAIhuigtSXq7u6PRpVSTBgCxz7x7a29HdjcFBnktdRgQgNlYxPqOM4mIcO0Zt4GUoBiEKAOWG7M+m2fMp5mzRJXiXGkBjDSK4KINKqDTAJTLAs7+BN47gCJ3BYzgW0E+9BswEyf6XERZQfVnldCZ+/GMqQS1qSf1kolM4FVLwxahO2fcAZ1DsH/zFSZuK/Wk3sD4l7E8LEg/x8DZu38d9+g9Ugtn42fjk+KioKJfLpS/qWVeyilGcicfAGPAbYOCLAEwJgKEBRXoR3cql2y2HWRfsHXTESNbkaFIGBcBqpc+lWMtmU07ZuXMIAqR+9vD793ly+l4kQPY7ht009m1xc+cWGh6ff3xVv4qjMTvb2N/fKxe0uqoa1Ecfwf72Lp/Af5ZTmhWAlpaWH//4x6Ojo8XFxZubm5mZmeYFwBuq9PjFy5dZmJ7x8fn29vn2H40x/GHsozozdXVPMGtE7SUp0m7eZLOg8lMAeGQkuKc/QiOrsirJ+2JlKIMPFHhpwE927VrC+yIA9BHCAdLvjRv49FOeWLUQNrNsZJch6yAOMjhd96zPL86PLo729q4NDZHDWXhslvQYAmf/69dZgGhpwYMHMQ4Hw7oj9fWJiYmapq2trc3Ozo4MDq5SG0ZHeWuqyC5eDDHrRPYXy/lb9X/wO1n/82qPbwEwjexs0QCxrsddZH8xlhhM48gRmvn0cBvwCa1ztRsWi5LlkCFkSSP7k8tI/WKxiEXQYK2trNBIVdXVZIKvK/ORH2Oqj6KfkBC2tKLcDdtX4p8r/X3fzP7o+lgI08aGb+HWNVy7i7vzqfNVVVVnC85arVYRgLm5ucetjz8c/DAJo8A//rcH0n4v86S0HdL57+Rsfi+VgQzHDYfjxrXDt28rsmBTYj2QmlmYlAH2OqoCO4XdDk1TV6mtRUAg6bN7s5PT/aLjxfOfOqXYj+7/1hZPq/r8T35iX1+3H7DPvjbrQLbZwZa4pxpAf1Fsl+b7TgDsz7TP4uLi1NQU2R9g23w8OTnJUGB9fT2OpB2oAJDh2cKoTtROeoIsPYdjoZ8xL51NvkczA/L2+LjYzIiKCikAtDM44599WJsUAEZdzBFXo1oEAH7hHQS0wws2m0H9tIzkf13/3pXvf/f7YeEBnlg0IHYj+RLqK1BBlyQFKQxOGfbOYGYQg+1oZ2KO3Yzkw6iUfgObEMyPLdC7uXWLGsAOSuqvvXSprKwsOzv74MGDFACn02mz2Zj1Y9z3iD9IREZyTwwOggLPIe4/j2eys7Kys28fvvsbZ3+mAaw+BA0mTN1uEQCb61rX+M80oAlNMAEWHeWTR9PsPwDc68TdT/7y9/DaaxRFJR0hoq3NEACmsw32598IBcL+y8tRfz3qOFIqkQLabgOGQmUM9uh9hgXkfbHpq2lvXqmvdwx8hODBPt6GNkYAi6mLzD+cPn2azTU9PT0mJoZMxLb68OHD5NvJzFSc/g2nexNrf5KUVEdXhpoWeNWstq067jhWb7SoJvveeygqUmkZEYDpadWCeVdMI7DjS8cj9/BC5h0vo4fThSX119erWD4zk8xIAWBl8XXPo0f227ft8QWORAfM43+olQ+E06k7HBppluczoBvjOG/DNNjdY+Pj4w8+gd1uT01N5TBAQkICXw8mAhCPzQjfGaRQAvs/GqOiMmLkzSsnZE9YLEYQQHu49VAEgEGAL1+SekPqFyOE+qkBZkaNZEaQ2CgUGLV5Z34KCuYbG6/Mn3HhzwK/D6FgdpbRIR1/xc9k/4u4SFWrQQ1dwnSkUwAo6kyA8j6oB1vYGhwfpDsi4wHmBYBKSC9GOig70quvvsoeVVlZWVBQkJKScuDAAdb0+Pg4O1VaWhqdrC5+nvUiQwLMe4bm/sfMZeXm5ubk51qLinrCIgAyOORyiQx0XruWM9MpGmDmtIzmyX1Op8l5IesP8eD7aL2He3P/LkcNkPDSVKAQwOZksL8FFoP9WekIDZL/oQakfMD6SzmDlHzfk0bogDK3oWmhzzNh+zJuCK866uscR+ucDxAsRjFKj6cXvY/x+NVq1VZfe+01ZqLZMrdlboW5aYYCVILey73lieXDiV+oSyzVk5O1wKvG0exw3Ot20LF64w3U1Sl2Zsu3WKgHinDYOfm3w8HkrGIT5kj5BxOkJsGQWno4T8XQ4ZVXVBKppoY9i6eVmyEnOnJyVuPjV7/1U/wDIGBJFt9faUDoc5ooscz21NTUuN3u+fn5jIwM/s1X6CaGOg2UHZSyR3GllmwsLFANePOmBABguRtxwFpHh5EI8iUABvszm12IQiP/AxNIezYOcDCCM9j/wYOKCr2xcfrUGfeVM27UIkRQDvv6VCNht72Ak2R/0QAN2vaPSWM0wCiV7D+HOYbGvb2bpLCREeVJmFJll4tBEONQ/niKeX19fVNTEzWg1Cv8YiIo8wmio6MdDsf09PQsy45ETReRoxzseAGCzojh/lehpLC4sKCkgNQ52Nvbs6w0QAyhoLJSgoCN6OgutzsXP9MA5s2wB0h8ZqcEPkDfIzxiUxrRRnDpEgWAFipHG2S5uNiAc8L+tSE3JmETseSK5BRdaUB5SBMHJ4FsMyNtxg1VrtfVNdfVr6+fZKwKDUFhHvOMeun30BXNz8/nLBQ2Wrop2AabMVlpaGgoLy/v0ZcfTelTs5idxwX6TEFMkl//I7aN1x0uVi7ZubERBuihUwyokyxSMg95n92V4i2OPH/PniDL8Vu9vYqJSHzsSlSOV19VaW2vm1E+1sGDKky3j2PxMQLC+8CvigDQVBXroe6qyZs75fF4cnJy6BfSQSwvLz9p2guM3ktelFFrN9h1xYMzDRkNliCgd6GX7C9WjnI8i5kZSf2rI51o8f1pvLhZ/9IQgLa2T7cdf1I1y+HMGTaSraUzm5vlm9AQyBDwBVmjuX10M17jDZHKORmEGWneCEeUG9FosL8B+obsD2QiEtyIa4SBKUOH+XmJrkx0UF5jaIh0U1pXd+zYsdraWrL/bgqdy7fGWLy9vbO8ZX6Lv29yknwZtPtvWcrgfZUnlJeWF1CH2B967oZJAAhpl/n5g5ubXUAunJQBxk/hmhC+hjX6oX1aH4/IUe6/RABhSf2TTdgmDfcfut8NcXWz6iLGAf1kJNN8n8UMSaRiLzCQMlL/cbbCerolm/V1ntuax1OEGAQFFrsTThJaUlISuZ5ZCLL/jpHBwxwSYJoCgENzOHXnOtaDXCtVb8WpEkX9tJ0gx7CzMLBgA2BXokdpsymKoTO7J4SvqBns6nRh2XjotZD9d6L0MFY0LELZiMlSWnduM79z1el4AgC3Ibi9c1XVQXjjLHyAzv7Zs2c57sLMMKuA3mHYFoJR5MToVNJMqaj3oJUxGHDtmvdo8HOzeoT6afRDa7Z9/6IAJyTUbW7O37mj7O7d7jt3DkyMnWkS9lfH7+QjcHz9WQFYmZtbnplZmZ5ejltbyUQmyZ3Bii8HlgpBBycVqSMYsdtVtbPvmQKFgnLBhgvQxyfLc2QfPsC36FVlcYSG4Lfm5ujFBCoADO0M9/8kysmatOiKIrI/bbS/v2fhZxrA0Y4waAAN6ARyty09TGuByPu9Wi+PC1jA0XC4/+3thgCw3f6M/fWGeMT7/jnBRAApqEjRUhgEhLYIKg64CrwL3xDqp032JL+J+jrmUPTcVIQEdgExfRvYAe+31Ie1A5quBVmE9cpwyu+8AyaFSNwycW5xkU3clABQJ6gWdKEI9qncXH/JwzpgEfgz/lJAbYBDGZzyBz50YMapOTmG8QTOPwZc8cH+NJgTAIEMA4R5JfD6uhpZoanAKi5OGRBcEDD5+LExGuw9c25wUNhf5VXImHSyxBAYVi1Rd+qK784P3pmPvTPvmqu6JOyv8+gRCddCFQBieXm5bmmlBMvUQ7J/tu+I2wILLRrRMr1SdNRsOsZu59XoRrFGGdPRdYIPMOjmB/gx/rHGb/G7DkfQ7n/i6hFhfxWlxUepgFqCgFtPgwAJy0LHgpcGXAyZ+sWvJPWLkQJCd/8ZURnsn6pbhfp5pLSHbSKORADr6ylQ7M8jQoUVIKv8E1+TG0n9ck9NivrrGAGUwGOu1H2664lI5IQu/vgZ+8zS0hLn/OycgsLsP6emsPvI4lB+PlFLDFI1/wXUYF68nzKwsjhVQEWwU0i/MOkKUS3oQiUl0X9Vo3b+KfUN+MeVZ9hf/r7mwLDj1zucX1BBgLC/2kbzA//sT/xjhIIgBEDKjabrSl9YoDwGpNhUehkNljjgoetpECCju0wpGVM/CSP1T8cZAWAOuEPLyrpTX39nYcHBtkflFvefVTmF4JBJ8ybmhNWVL68ur6yusNfSi2Gex8/vdMHlhtsDjwyKSzLN5BQgKgaNAkCokTS/iNoGXC75YqDTTQ33v2Gb/SlvACgAEgRM9fcbo8FKm8MEEYAcdURpaOwPDX3oE1vCEo7Whur+2+0G+0fNLzXoaso/zc+kZA2BRQUy/EvjRNJkPZm0mIAEeltSg5o0moADjFTA6iu9YWSzKlwnSP00RgDAPVNF7vvFDC1D1vp0bXQNDw9zWjojV6ahmY7Ydqxn7t+/z0lxnKqYgxwOkvHzvN/gd4nIhj8Y3qq3D2smO+ZwKL5jB+RwAhMp8vtN1rcPATDYf1PTyIf8bfpXy64D35jGlQMY/+q3L2+evnwaNM1LAD4zRJsITxWBiaKyUAJukQUFRhxgb2szggAuEAOM1D/fBMklKPdfNp8Tu1tZyWUQnDVI/WamQX9KnhpCRlL2Ki0b5pyJRSySiVh+AAuP0um7Oe1gdI660Diws7GxwSn/HN+P8aEejKnpR/AzhLqANLKg3P+UdTWqQSNxGlPMngYBs4+MIEDxVDigP5sIiguW+gk6Kjvdf1roqX/ee4N+RrH/akP9ag7cY6wgEgTdTA2mUA7YgGU/+Z/+lJR7KclL8bB/i2GBRreI9WixGGvK2Yk0s7piVRqAV4Hrz007MVL/MdO5Qv00UXottF13jugqcKTfZtNsnJfMMQB2Qg5NceaPTAPlLPXu7u579+6N94+z43MNIGeUB7dTkKlvsfuIBRJ9GzOVjcFPWijsTww+O2GTxKTzV0mK7AYUvv1t/J8o4Ks+Bv1ftABIhKoITEwB84Hue2VMCWUQMPN0Sqh1odiY/GOBxXD/tQDKoc+gfmOrEA7d0/YFq2Im2pLiibEpTE1jmqKZlRXIOgB+QeKt2VlGzQyoGT4z0e8jSzHC3kUPa1Pclvj4gNYB2GxP3f+m7ey/kILACALmGATYfhYEkDgQJox5aUBDoOyvwYDB/mywOHoyVPZ/8MAQgOOu4w0PGxpGGhpmRmDvIk1oFADWUXq6oubi4j3rlZ3btm1TPO4cAf5WSspCUsriNxl2aPRDDQFgG2Aim92FiazKSmOlt18xSBUN8JX6H+2NfxOK+uv1ekbh4dpzjSP5c5hb19ctvZbrvddn/sYM5yhTCThLjU4MFy0ODg4udi/KlDle3XcgFSYN0HVlhKbJ0dQKT29oGi28e7vpHP2qqVEXuolt/DpcBiAaAPy8CYAk0LwF4N8icPCLxv4QH38so8G0tEdFDx9qZH+m3eq3ff9A5pt3bFM/j492lvYLFAC61GTNIQw54DhRwnwUO69p15zMwm7PMavBQbpRnDzHmJpDwTsn9nLWV2dnJ6cAcfkfiNRUyX4G4f4f8mQa2f/nnSkJApQAtBtBAFsDwgIfAmDS8RewkTLzIwJAsQ0x+0/dRUeHmgne1pY1kHHqw1OnurMahr6XNDWlka9dLtnvSaiZF2KzJaOaEQDF/t62suKUCOCbhSkL30xZXNRWVrTNLRLPFrZkXqNqBkVFqKjgyKRsKrIXDcZva0Ai4DDkzEj9N6rMjzJWdLjYX2Y/n184H9Mck9aZlt+XP544/iDzgeN/OjajNmNcMcn2ZOZ8mtB0HMd56bM4G4YOqvtdX00RpREWi2RgzUTeYt5p2DDu76kbWfHnGnEU5PIvJAiIlov6z4khN4ktnm7p6yHMATfWhXFWCedHliyUHOo/2ttbzrHfDGQEMvFfYFA/bRj+oYWJ/e3qiC34B12hTnR2o5t8RDY+dowsYXYNtczuVMxC1/LRI/pNpHiG0vSkOM2Lc+mwDSZb+dadO3eYXeXfIEgWDDT4GXOgHBvu/6vb7L9zUpORBVpmImjiZ0FAIxrDqKqiAc9CN1+bQv3UACoBjtaJAJhy+nytkurspAZYZmfrfvjFuvbEUw++Vz84yJH2Y9HRTMdxJJMuLYMARc1s2NPTqp9wTroPnNqOm23P2fIyberI8szQzJX5wz9G8ZeRRLqiALjgojJMOaco7etU95ER2eyMRKbEgNg7C0RzAKrPGdmsMvdxet9iXsXpn17N7UnmdGbdaH7rxq1/3tKSmvrb33t7xl497/zTzs18tRkch3wZbTD1z4qp0Cv2fTtocpYxG0Jyr2ZmRjJ09h45oDGt6h+fAq+E/HvDt132FvDNbdPNXT1aPrBrYxARdbmUiqrSoYUAIwigsa/2P+5fHuReBuW8hPj+ZH81D9osfrrN/tPh3i9cD8X9Z9dlqM0tsR7gAZXg4knmo6hsAaxFZ2mTc+n+s6C4M+rdu3c5wMsJSBQDLvPjIu+trS36/hMTE319fWT/27dvy9Q3zv6kePjYBbfKl/s/3KPe88r+74CmkXQoACoISJ0pwc80QO2CECb0PCMAekBazhyKCIDh/ivfn8egIKooY1Mu4Hu/53vDlZU/LSv7Wm0tZ1sxo+1yubj1CpdhM/Dqp1RMTKhIeWuLxKEGiX0jXRkqgTVh/9VVm7YydX7FVvrlFVv2EduRNFvaQdvB2LFYCgBHLTmAxK7Cm2JbeszCp1dL9pf13juq2EcWaJw0aKT+tZkj5H1x/2P1WHM94D8BH5hUTY2XuXHjfNTtxsarr702E1235Dzg3NK3mIxPRCJbi+kdpUzMAuqFvwBGFt0sLMhkdImMzfQ7cXNVHtVul+wcQwGfyyq7gJZQqF/bVQN04B0EA2re8tracmLickKCHkwKaIcSyORe3j7bN41lEYoqM2EqgwHa2NiU3jw8Nrw+yvyGTQ0f2auqkqoqURmII/+JYn+s7P1DtCDYP3gB4HYo3ISgGc0d6GDGj72N7lZNTeBiabOp9ufx2FtafvSjH5FxuA8EN1fhdE8KgKz+/TcTEx81NFh/rfWjP/zhFlmPtFxUZHInX8YMJLq0XlweAJGJTHH/dy8DyUGvrzvd7h6gBCOUAdkmOoyJoODCOIP96fXhaH2o7j91l2zb1yeL7M+dO8dllsePH2fhc9cNvsKMNhfcMy/HDZr4CuWZWzYxV8PEHTXYzGZ88UARLWkFX1mx2ZZttt+wYsvJtGWm29IpABabBf8PHnjmMc8UIjOl9Ip06ENjQwxKlMCXqDVQewkAzeqd+h/qi3lTpv3odSRi35kM79p/2+SeZJoEGiy3jo64JpJtQmpqYY5LaeK+oBVIA1KBDB8L6RkwUZjZgyiZ9AlkTYAJUCpk9idvhyrCM/A8u2+yO25HK5Rlhsz+OzTg+8B/DnR/SnqB/f3LDsdycvLysWOs6hDHAHRATXOQOQh0eTAzQ85gaVIeg/a3ZV3YL4+PX8kZv/9nx91jY5vnS6ovv2M2+aM/FwG49oP9QxEAbohIAaDdxd3jx9U8VKZtT50KfGsGTeOXqbiyCetWf//DJzv/kP25x5Ou68709Jmioh++9VZHnaOjoWOLQyqs9fJyn4nvHX7ceg/e6AFoCmCQngO/5MWtRgsL6QcoARDDVNh8OmA6qAwe3WRj9iczYOL7KwsODocsBIUaUyHNNnIHDu7DwRmNjL3gBeoxX6EecPLVA6bYmTJiFfDqAezGukzLzFzJzPwKEIcVr4GCs4j+o9FHcETWEpL9F7HI5KmHMsdaJrvV1flNalslAqBeGKn/U4r6VeaHHc1fNltHENA9HtKuGr52Oll+bW0aNzkg5SYm8mey8fNIY1vmK4xhyMb8W/N1MrMCYLXjgmNnbocixNwp1Yj+E3sE64WRsVktYpGzFVHIx9TuZ2wG9JIoukbi3qh+pfr37qNlFDbgIAKEFuZcECv4pz9Fc/MScfgwE5SKpUlAIQ4CFxbqLMDaWjhuakNs4snJmJpSgRJeB9KCebhGUpIxI6j/j/yIWfLT75yWjR+EfczDBPsHQ/2hCAA3oLiJmzTKQP7R9aYm7oJMGieBB3VFlvalS3RJ2HzloTNs0Gsu11pUlP5kBPIn+fltR6faT9ycKJrBF77AgqWT7tvzrYA3BlDRA/QCwwEkpoRY3YChAeGi/6A123D/HXAY7j+7a7AqNK3KeXKSOldYWMhtNrivGTWAurtzEw4qMeMwTsFias7R3886Ug3bIZRk/lGQHRAkK8NRwA3YgD8KAWfL2GDjEDxDgcG1Qf429SPn5pQr5hMJQOroqLW1NaG11UlyKHKXGckf+EDu801SA74Ac5ANb/Un06K03glmzru7NbbcHQJAAqAAkGPJLWyt/BKCQec0rO2IT2Y18SxKdBUpgcVCT4A8SAmiJJMEZfyNMVMAw28UjOJieQIHT6LESuZBMDJgu1pZUcLA12Wz3vz30POPgT8SrsZtaMBvD3TFYlcXd6hettuXjxxZYrHyrkMXADIXm8z6+nJS0t3h4anpD/+OanYxbyOUpysxm9w7hoxxxIxnux9VIb0KBaSufaFsLXynMgRg0if7f4pPb+AGBeBI2Qo3EKRRA/LzQ5Ao9hgKCJsv29zMDBuf7nbjyRzE1vT0lpwbrYWtbVobowyqNNNMbLhmb7dHDMHBEABaPl4YFrBgCAB9tzDM/ZdVoOQRgBke7sPKHVgN9t+5uQ13PeP0ds7Q5TQtGPs9mRWAZWU7EQPkefvkyEUuE3TMoQ9iEEtLsnzMrwDAbif7pz4x59b/S6//RFF/Curuwfht2i6t8RPRJXzy3BD2QQguwSfYShdPnhzc2PjWo0e/t7W1RYtf+3SNzCkCwD8sFhKyKht5oiKDJWrZ+fNBbdT9r4/gWjZ9XlUU9PQZnPHUHo8qHHmMF/NyLCIOy7Nf0DFiWZkEU3n8ZbJ3I/md5+GvZ6vgmBCFS9Mo8HQRZD9ItUlc3xmAFlbXJtDQiCrIeyczkP2BZe5Us7jIv2X0ItStIJIrx6wJtw/ldjomRvS/P++JSeI3QkY1MA6MVeER/6IlvshHNush64dif1K/WHrpIps1jQJA6g49OiHTMJw2appuyGD0SAt+rCJ7rZWulOyuw7Zu3m2GuP/jwU9L6HnxAgAj+bOGNRw9Far7T6ytydQ3LsAmv3OHpXwKuG9wvSs/xpEAmTQd4D4cZp8Er3ZNQKJafGesa3W54BcjrakdLVbOx+nrm3jrSn0q6lqUyb1ou9b0e8BHV2AHrsCAseXO3gLQ5aloT/H0FqaOaGVfP3TIUXbEWep0lbrc75KZlK1jnVHaHOa6YYuN5SCXKiry9i/9EgJGE+DKwKceXL0KVhAjD7pK5DvqAVWFLYJqc+ECA3DlGzHvFeiiJXkIMMuZ0dMPf8iUIJNCssqSzYMyz8sp9q9pQl8jkBoK+4cONnh5NvhabS23KlvOyWGSAGIhRgCsMI5nXiu6dqfoTt9Zy+q7775OuolByMgEqoDf/kPgTwHlCDOuARfMaoAOA8NAIYKAsL+4/9biBfH9KQD0JIKmft1XTVss85jnqF4r6GS1LCa6hPppZtcZu0N1/wWDz8QBLwAsh/C6/yKxYvT6OduKOxlQCfyu2EuMfwKZM+dz5vhvAW4D/XgGunr4l8mt1jRoNACm1jS1I5VTMVtTLa1WAG1X6toUkdcCmg9iOiSPKcEVYf+3gTlhf5o3/jV2x/376uFI9+5VPXz4/mD1+V95553V48VrpWuuIpdH97g1twsuCgAf5DJzbab/p/3N15pbWpbYYEknDG7J4YGhBvAAUReZQmK6n346+VqVv8ySYlKIfY8KU1/PGDzguYskd8oGJZYqQsdrcFDFdszvaZo8I50np0goXZlvBLIBDSjbd+ov2GuS/dzcUmLikt2+lNmOx2rjgTAsBHuMx91aN+mmLWca77/PYUB126q5hyUIUHgT0BF+/AHgX+2tAToM/IMgHxzLwV7D908pWiDvi5GITNxZwOKwiU1x/FkpQxhC7Tlx/5n8Cdj9tyEkvGgBMNifzIKjDcL+yusJAWQQMf0JONsKfqFvQ/LgPt2uC4AFiAG6fdCC7o80GN9wVihN6InEpMwXRoBWWFutFICszay38Bbm2gDa3wP/3rX93QauPMQV9B/HZbR/wNECYxagppnYQFOjAHDs6/r1WNu5d9n6L7EDcM8D6OR9SiLdf5euBGAFK5OuyXZXO5zgxDby6sKC8tqDQT2QVCN0rLz+lRVKrzyPm96ALJ1TXhFfCQI8gwy/FRQwFyQP4pZHsjHdRNVSJ6+qwZWkz8jxLwWa4A8shzfftJWVzTl/ZeH3L+LLauJTaAKggZjF7BSmhjGMjBwORaoRFR7Dg3jsMzKAGX8aoMPA6eDZXxx/HpMLDfbniJGZtFIw0ifUL+sMFN8Z7r9JrIXH/ReMemlABT5TsGUaAsA+GR73HzC2AHOOj3OAl09b5XZM0b5JhHMuuCCDHwMgq414Bp8CINYeMEvwZhewsIQlQNbk+/bvVoBWZYmtidVz1bIqxZz30f3X0B1zGUAtUAbpMaS80lJey/8vJv3SP2aS3Barxnb1qioZftSgxSKW5t3OqxqrNmY2+AA77hW6ubnOtI0e9EZA5UD+F+WJ7bDbKQBUX1mhTZpSpRQKmNZ77TXVoiYmVHixvi77uDHdxJOrSyyHzu/mUAE0KfOP5bSo3rS+x7GPx75YSv0zH1VF+2mLlG6J3YxR/HDO8/A9GrX/4wHmr2bK9z9YIJkfnceKihBcAc2fS8hkN6lfDFYreV/cf/aygN3/OYQBL04AjOw/2yd7qXn33+w0cIBrfbkFE6d7cjoQfIB7W/IB3NyISYZqyA67L9Eq2Wb/GHXEPZgHb5AemOwrBYuFvh4v5GtimbA/WoB+sGWwUOiAm2F/JQAw3KCTsjerTgVITt6zKTscpF9FkohTo73+W6PL5eJCCq6mprKyCVNcKJrBQ+b50PYJubnK9gfGVkMSJDHCo1hKaKtDr5AuVbXN/uf81QOzlkwMPMCD7lM9y8e/QA+UTTFAAdB2fS9ajOoqA82hRzqhf18PyFHYc0xYAxqCZH9x/xPy5kn94vvT9Qn4xjRTL85gxmB/O+w4eUnc/wAaqD2c7r9gSjQAnylYFPvi/gMyB5xFSmbhLnuc38lJPhwK3vX52pz5w3e5xbHah4NeIX2unByfjmeelwDQbgFbaEYz74V7JBzH8SQk+aD01i50UeoYBKD0uOwqtXsK6L6ifmWtT7fpN9+LxoEiq/F6ivlZFLJLAKkY8wuw2bhzeHpGhmW3VAFXs7e3t7PcuMNVXJyHt8KSllxFcEHAi4YWinLJnChpzyMY4VCiFdZpTLO6xfmurq1+yv6F/q7JhsSvt5S1tDNFLxOfTCPaz10kIIHGZrQgWwLZ7T8BLuNlh47QwIFxw/ePz517Qv1uWlElnL6bRxzifD/81tT2EmJ0BtWYj+H+AwG7/0sIG16EABjsz05isL+5bK8JMiMtlZTQhxpub+fOxlx6zdVefJ6t90IwPniP+0C0trY2NzerVWCAqfnmR4CLT0OBttttH69//AiPClBAH78c5YUo9N5izwYb32WNy6pyJCfTv+AP83mV1m3bCrgHaL6I1YQGsGBkU9TBwSW0t38rMTF9eTmdq9YPH+YgOXcx4VAKd4Q29s9guVEGTp0iTakyS0oKjX71l4z6jQwTyy0rSy0160Qn652JPpKtLGzMRGbWqay8pjxrk1Wxfy78YxnLk2WTM03ZW41qrz82lfDsBkqvhFPQaFhZpHwrA37vz4sG3AziHePtWdrz9Zhj6Ow5v+wvjj8tLuf2+fM3z59fSDlvb61yt/ptHixMEnYxihE4DPZnW2HDMeZ9BrDhwWL43X/BnDrlZwe6SEb+h8kQ8xt/mgUZlp1yfBxzc9zmgQMATPEz1ZOdnc3N4DgpiEt/mfPhHm1MZHODezqzaGhgdZDP9l5wlCrjARixjLRZ2qgBP1r5UQlKKADUszzkMRqgo6BDd8BBARjEIGucTW7V4sLpV9VVTpygz+xPAOYDY3/NBLHqfjmvoEAJ0+SkPG244w85HF8bHk7PyUlLT+dMKkMAuIMeU2qPFbpOn3adOcNi894i5SWSAQ0hg1EcGwsdOaYP+/tXPsJHD/GQKaBVrDqtk1VVJztP5+Y25b5y7hVkYk8crz2+2Lh4oNF5oKnpflFR2LaDpi6JYXlYtkYytrXS8cLxDfiCB/i2D4fmDwM//cbsLl/OFV3zLwDMshm+f0zW3z937ttZ56bvnpu3V9tdcPlvGFnI4hyRIASgG92GAAAg74v7TyIIxv1fRdjR8yLcfw88hvuvBqjCBRlcWVjA2trGnTsff/wxaYtZiyNHjtCfFQHgQxooCXRmlxgZNzbKfHOzu68kYfWCq80y3GaZa0v0LN63tgy1kOiLUMR8cypSRQCccNIlHMUogwCVz62/yKvwWv5mtbcAAwGwv2aeWPfiWFL5+joTQapJcn/HT+4MaFo6n2PKCbJUUAoA8/7M/2xtzeTnb3LiP7WSpcUbslh8FZLA9HsHATv2Hwd3/oKkYKebUfyWljhuRTGgs7Hlco2wNHLSmE1ki+6src091piHQ7mAX0KPAhqR25j7SuMrBxpdBwoLDwCt4RKAZCSLUdyNh5dyKPiFhl8GrsAPPMB3nmnJ/xQCzB6+csUv+xP/zPe8WAbjZP85zL079duHzjfcPT8zVzPn0BzYC1/BV9awRtpSYyqmMYlJg/35dfH9xd8MlKTF9gPL+Iwwhann5/7L5j/hBfM5Gxtq1gej366u7icjAdwKlP4sh0XJZcxmbLEH0/WtqFDzzZnOaGpSymEObRZL24ULbfHxA/wKswA9PYt8WMr4gzZPG9OtFlhk6uc61tWQclEdfw/ZglchZfpb5tZqlv21cPvXdBI5ZYY6xfzZ8LCKBrhf3urqPEtxa4s/mZwhz7aRZBFviJGMv1u57PNKvt/77cB/xn7it++8dk4I6RCWA9mfZcI4wFjGwBaRnc23PJWVnTExuQAtzydLH1TsL5bdmP1KBg5ADM1hEQAmf5i4oD19fJ3dLgKww79+DwHibYSIGvhFvQeYhYGPgIPqojU4DLOohcAYaudIvVrNCFUxV8EG58Z/VjsvohbBw/d36QYK9beicwpHYMlTvC/uf6AQ938dLwF8N6Xtp77oW/giGyZpUVEw+03YwUKWSd8MqIeGwE07l5a4167iM4uFwiBzDSWMN78Kj3gItIkxaOD55Wlfwppzc5x56nC5ZMYhyYAiZzwObO90iW7q3fd9FfBJZbvjfSj86h4TaClP1OKxMZaWiqAYHRkCEBuryuzQIeodRWLvmT8fYDdYfb3h1cnfxv7go53XzpWXQkBBAU22/RUBoEyyzkUah4EuQDTg5O5DSo1eloRM4BUYGoC7oQsAUxYJSIhHfCxiN1ifTidtD802hy8geJi5Yr2ykPFByOcO/ipG6v9hK7K65UN0GEg69ARTU4MRANpLgcs+g6FejPahhiZLosiMKv28T+DJc3MVpclGTBL+6jq7KeleNn/+/+y9B1wU2bru/S8FGhAkJ4liAAOimJ0czz5p9rlnNt64z3dzzjnnnHPO+Y4n3JmTdpysM86YYVRMgAhKjgJNqu9Zs37UbYWWohsanKlnv7umraaraq1a63ned721akkezNY3uj32h2kQF1qfWacwNNDfL9a060GqdPa1mboGOYQihhV57uG/QeNy2d/C/vjbS69lJwMV4nEBUJ0lJcXhHW5cHXKP9YqyVu5yiouNRV8rr9xsKSASWx9l/w1YFD6qAZ/EKQDek6BSAvskaPQlAU7GXpcrLQANshXJ5TTGz/6xl+MKt86x5TyN57DARowxPjbRAjM8HTgZrQR5LZxsAdcbRhW1rCrS0uxCpTb29QTAvtJsudMOZiLY/wERsDKgniW32S4I7PnMHu+vBPuH4aS/DhM/7GhGfAgwFLFe6ks+n2HMh28as4hbAOy7UVxcOyUgeqMP4RshVgSZPr+IHdt5FBsW7Fr5s1jchXNst3N6pp62RK1/+G8f96CFUAvcYC1gc2HxwWP/L1gAT91XHK6PfhdivSJA83wEINvBKmAD0THIYD/9QwxNMGEnoHvu51OPGtYtRuAcWPbvIYDBDaw9rbgdIQABAiwHTdBsbHWQxALYVOc441e5ep3r7bTz5VIPFBWZD6uMAN58fst3ATqgBWM3n9pI3lL/eRgjgXDX/3H9YyP8OmPrBFnw22U+6mp9w3FxH0u1neb0AAOTTHbQcZ7zH2z8yH3hBb1tjh//cerq/JRv/SNAgAABAiRFe/B8mmmzFl3pOHtesfNc7LPnXxUECBAgQCAAz7MQd5hpS04hcw9btrB9O/X1Zhai4/DVQYAAAQIEAnCSBagwtnGjyfraBRB27OCrhgABAgQIBKBxMfYX7OoKoRBfTQQIECBAIACFPIpCAgQIECDA1wAbCBAgQIAAgQAECBAgQICvDxzXdQkQIECAAEEEECBAgAABvt4CMAz/Hn4EnEetBv48XMEvRuE/wjfAgTT4/+CXiAbHh5XDt+E/wG3fJ145i/N00dEB/xCOgQOvwL+GfnxhAv4L/AQ4UA9/HW7gIeYaSjTG4H/AX/XfrtZhGR1/9jr8G+/ufg5/CrYtp8W0w9+HIz7OtB/+BtyIcnGvwb+DIXyiCf4i1IIDu+EvQTP+8Dn8SagCBw7A34q+atl78Idhawxd0fFnb2CIo48n4R78IzgOIfhN8A4eVoluDsPfhTaWQBj+O7wRB3mFDHPyzlMdARTA8XnbRoCvyote2ozRru3TW0bXn7OVDTnGDBiEIWMGAaqssTqomD96PgGeSgHYDMfhmDF2E+Crwv7MU7+1u1/hV6R57L8BmIUhGJQlpMTrH1vnKTonwfKy/hEIQMo89R+HBlYHAX6RNcA96/5726eujP6Z1rJ/NkIE+7sE8DTA2kojK6oABEg6FTUJ8D2ioAb2LVjUKspxRuE7RCANfgJY8HOHR9HWRksLIyMYeCM/Bcd58dHfwSkfZ10MGzaQnExaGllZ5OVRUkJ6OkvAx+mSkqiuXnQBVwfcKAfogE95BC9DnlfKaCeeWCSlUg87gWi/9V9FDk4yyWmkbWZzHnkllGSQ4b96/KL9NG1dHvvLXq83d8Q//De/hdjAhhRSVMYssmwZ9TluDXCIgJrwxYv09GDZnwM5bKeRU4O3GLzIkJ1yrxazf7+vSm2Hz+K/LA+vQfaSvalpwXpCu2AvPvH5AlU/ANu9k0aetWqYqu9RBZdh1lsv8ciRGN5H0ELLda5PMRUhLNvZeGCpst6DT/BACN7w05tsQ4sDh6FqkTrxEIZ3iBcLSkSjJwC+NWAn1PjrgQvrJg0a/SyKePcuH3zA2bP09WF9f6qP8eIxji34XYxd3xMAkb5de7W01HTD2tonLGXn63QpKRw/rharQ/k9wAINeBnw1exgHH4ZD/ug3tdvF1bRz0QVAJFjAQWllG5lay21IsoVE4CxMaP07W/TBrNou7eNmnb27cM//Dc/fmZxAUgn3StjNdUqo/7pK+/rLk2258/z/e9z6xaQzSs55OS8BUgABhk6z+AdTCt87rnHVoZ1o1aqpwHx4zX/vSlSA3YZs4hBAw4Yg0XJTj2xqoiqt6nq4DYG7NmjvmQ0YDnoo+8MZz7iozHGcKzv/2NUVfkrq6cBKXDSR2+KXwMOweFodbKiGhCyR/clAJ4G7Nv3a+EkvOkJwPJ7/gh8NxVO+omau7v55BM+/ZT33+f69f3sF/Uf57gslVS/J/bOSlQ4jiHrTZsM4xcWUlHBjh20t3P4sFECixhOV1amHq2mrMPaHu3/AHfhLLy8zBN7GrBPtrzfelWUGjUCEDlmk11IYQUV29neSmsDDbvZvTICIPa3Nv05kNdOZrv5l38B8N/8SI0aAWxiU2QZdUEHOagPvjRAcKNqQDhMVxfXrvH22477LcP+8/7FqaEhpAGDP4TaExw6xPR0xI+XKlwbfE58eHW59XgFWmJhf4vPoB32w4Enn1Usbewyt3+I8c6Skti1SwH1soIA3cE73DnHuSaaqNpK1Td1UFW+77J2wAVojI0ClolDMr9nmYxjDNPTM/9rAv816yebeM9r0yLKlV+71MFTnGFRvzWx/y52ifetWacsBrySmsrJZ2jEPi7pYdadnQxPDoWHHgw8uHNn6NIldu826jMxYYLyykpiw717nDuHFYBXX0Unf8xptPW4rvAKqfDMwuWgw4SHGe6h5zM+u8hFucaddGrPNNP11BM/pLeytraa/1jz5s9t/5u//MtWDu7eVTNb2QLCYmWcYWaSySGGHvDgNrcvcUlNTp+N5whWA+IIBQzFW3Nz5tlfbQvm5rD7JQN4X0U9zAFfu1w4D6fgraGL2a1Q/zTO8tF9txqQn09f37htHsZqavAH3VO1KutZeJJiLFE4Ia062AiyN+Lo6yf87Y0CF8bg+/A9bbvP3L6t0Daf/M1s9i0AkXqxG08DcnJWUABcIjE5aXx/a5cuacBBYz7W5J0RKxoRSuHEY9H5LLMTTKgb3uNeCy0XJi9cuDA1NkZSkumMW7YYRz42NDdbATD27LOsf0RWUaQAWHK8z/1b3LrCFflTAwyI/eU1q3CVVBIPJJW2b/f2FhTUFBQU3N28+cW2EdvlV1AA/jUWi5RRbWCccbUBCdtNbkoALnBBCufiKiwooCCLrFg1wAXHY3lL8dq6WGFwBwcd7Z8LpZGbq/1kZrpPvj8R+DVP6knD8JayDvxN4M2nUQO2brUmAcC2EMmAfwGw1C8NGGVUdZt4AWgEquEgXjOI8TAL8PKyOPUiXOjn4ve5ffsG+Qrc5bTtZKdfAXB5FDvjLE/UMzjMw/P9z57dwhbP96+gIm52W0QDbOfvp1/N5TKX00l/l3dv3JC8qbUo7jRNLga8/o3Xf9j4w3O/d9YKgJSgrs5HRi4B8F1FkQIgxu+g4ypX88jToKqI8nM+zyW3lNI4BcBz7hzXKTpbVFhYWFBY2N46Yrt8vU0Fr1TpomiA2sBDHqoNiC+aadYde5/3FQrIUVILlNN0hCNAzBoglrcaQMGX7D8/CmFVQVvttOYyj/8D34KNUUvwU0uw/yngz3o/ego1wGPsy5eZ6uqy7cTE5kVF+ECk+++JSeJ7k38N8CkALy3Lnb42woXvIUfgwoUyeJ2GAxyQBqhV+xIAd+nzOCv7wJx1/K2Jayz1y/ffwQ7iQx7eyXIXErBYTFF/JpkiArGbQgG1Hfmm9+/HKADT4UOHwsNn7509t9cKgNmWlz/KE2ukAf6ryEMZZfvYV0JJMsnSy1/hV8SPqqVaaiUM5ZQTE2z61/ZtNcqSYv2vJHXLltlbt+xu2b59Kx1jLlZGuflim73stVGm6FpN8AY3lOdQAQ9z2MGJWQPk6Q8NGQ1gZ2QCAMv+ngB4wsBvW8j+wnbmUblECc8v9qPtC3loPSMjA08D5JB5iSI/AtBHn3X/de9ISkq8+y+ULvgUU92XEoEQlPpv5b294n3L/s70dMM8+6sj+5oH4OIH7gr2Sl2r5/5vmkr2Rn7qqEvAE9tppO1hj/wEebVgAk/roMWGsBGAQzXhGrksSgZYGx31X4PrEWo9ysaL9LexDVDv6qKrm258I3r6d7qCirLSstLSUsrKSE/3Rn0TOQEqREhcL9JXARULyhtQ6cQmAwzEms5ichLL8qNjjijeNUNAXgRgtQHL/makQqiALNkKZdQcnlo8ytueRxAOsxQWH/3fvBmf2LhRJuWwps+x139iuru74MCua9nfEfvfv6/OZdlfWxZDUvyPPMfbWK9e9Xz/pJHx4/PP/BziECsEJ/qTGp4bmEuuHfANh03XnZrCdWNYBVk/PFQ5PXxoemjIHWpxur1kwEsvrU4NrmoVRUACqWigmGJFAJYZRWLxp39TSVUbrUyqrKyooLJS1n/tWuyp4Dg6nDSghJJ88tUSFOuMMSYZ0Ic88lgOJp1JPV8AjAxaT38sN6fioWX/jZMIc3hDQGO5uQ9NEJCN85A9sBljbAKDTbGzz9ON0lJL3cbp7+4eV2vwkwqeYca6/7IY079paY/bSvamyH3Oajk4ov4vfX+amuTKeOyvRuZLANwETzK/fdvz/RW5HOc5z/1PJMElkyzplwGOYz5pK4sBc3Pls7OHDs2qgw/9kB+eOzfpJQMaGha5FvvJWfcaYAUyk0zAMuMEE/GnfyupEevLUrWxZgSAOFPBLrFAPV4ykEKKTQ/I5phjOfiYj1Wwaaaxw0nGdPez3zIs3wlv2f3Thv1FL5u+3D9LutlPlrVXPeb/Lcssp7PUHXXBecpSwRKAiCBAAuDD/R9hxKbyjJWXJ14ABMfPQPpncAT4uyvVxJ27d637bww89n/CQHpSwgclXDx0dhret+5/hxlvFe9b919cvBpnjdZdRhn1GC03V2Rto8aYsfcQEgBjp+dOawjISwZUV/vIq6xLDUgiydNI0aK1ONO/gHH/qdSW4mJsEFBU1N7ebb/fv183InEuyRRT8iJlgFUCeQb4xk1uypE5zemwE8aFIasBSi/knMppIrsJwYFb2P3P52h/D7mnsNgse9MW2BMA/3B83NGnNBU80dWl1rBkKthz/2NP/4ZChvTT08nI0DYeAXCffJMqoRFjBn8y/qM7wPi4N/Qv7qmhxhv9JzqS1oz9+/ocO+FLduuWEhTeYz+KXBL8Mqw73Omks4ceMBxdVhZ9VqY/Fi3hkNEAd2jYGW4eaPZmBsgkMLBOZcAlKqSOYcIywDKjLJ70ryyffOv22+yLPloNmO3utn/if1KYywqgjz4xs/EfQffKRjxEwwJu0W/VhC5zuRWoNt//BFyaYWCAb/3bgT/xb+eH0l7jt8HPwrXkpG+9ff3n3qbVHi3riFqJLIa75fhQ9acrCEhL8zRAMWHE86BRBKCffhsB3OWueDz29O+WLeYRwLw864usLPvHDh9hn8f+otM88jz2DxEiOpLWhv3FApb6pQHNzRIrb+Qnh5xEsv8009e4pkcbr3JVo9tqMHV11NaybVuctZKqHMYQQ8MMa3vnzj1PAF55RY607ZRrLwP+K+o+93vpteP+YqnNbM4gIy73f2rKsr/3mK/+ZU3tuL192v6VBCAxuM51NQDRh+5XCSU24SEB8P+gtpRjBGeERluZb4vluxj6Oer/wJVs9g1CNgafaj+zg/xsLrk5vParUAMO2Pno8bC/fw14jacAkQLgJY28WcHRHv9/5JebNrFcyHOTb/PwISUlsvXM/g4RuH7dsr/Zgsf+1rVaQgAShe97/2V01Dl/3rD/+fOVbqU38qMqX/E8V/OiHx1D/WOMPeCB3P8rXJEcFe0a0N0/etQ9cMCEgHFC9CENsAIgu3hxbD4ZoFOsmEvrOAv/sfLsP8poCy2ttHbQAeg2FVJYQAExYN6338AGkb01LDZt8oKA/lu34kwF+8ccc3ICNNv5Epf0AdjN7u1sl7MO+BeAYbKHaRyen4Y52MzQVWYmTmQ3vpnDkez5Yg7SK/ZXk9jGNu3UV1jHXC1jxw784LMovcG3Bnwf/h3rHcXFlsaNU97V9dALAti5k0cxy+yKzf4V+4sF4sCZhR+dqOR7xP9s398ki3K8vj6P/QmHRf2W/f1M109K4POIpxDeATtcdedO+tmzO365ft+Vfcdrjh8PHdcdW41o/xQWn8se8/2VzJRXe3fz3f4t/31nVW5t7WYNOh854qMb+utttdQOu8NDjhEAzTCKTAbU1BA/NmywtuAfK+37K6l0jnPNNPfQk056NdVibfnI8aV/t1r3P3J6uqjfaoDCWPV0/6ngW/jHLSwcptwpue0qoHx/OQFnOdtJp2RbnaeOuhpqeAIOEYkRGDZ6z4xl+Q6GPsZkgMnOOWRSvXDIphks+8szMF+hr+oheRmDM3/cB/v70IDfAUNPTSpYAoDnOkgAorn/upuP6MYawCOc95Zk/0b/L4EIPfFgHvt3dpZT7uV+8YEkN5E18w7eM9L1k5OlP/ZrS//vjoqKmrIDDcXP1pC1SmddhP1d3Jn8mfGS8f6S/l9X8sef3/Kz5eV527eW7K2sLDHNayMrBDsQZDv8xdGLX2qANaeoyCU+JCVZW/CPZaJ1wUdvprQEUo6/xsc0SiYfGdjP/j3sETmKuONJ/1rfX/EfEXDLyx2rATk5bW2D/lPBp/CJJpnXk6Y+nRrdPdqzuUfccZ3rYcLP8Zx9GGG5TyEPz5v7yFQvJ8fOASPHyxOoMWibRZbdn0zyMp4TrPTB/r41IPupSgWPRU8FP+7+W9FYI7yF8C6/B2NdLIpkaCQa/tGyBj489lcdpZHmsX8uSyQbEz4E1DAJDVjMzl7u77/8K/8nP/9sbe2OsbEcBV4vv2zpa4WxyW4Woo/M0czNPZu/0/7vfzG7qrSgYItchm3bTAqooYHSUlYCG9loNcBaa0dr5KviQqH4Dr4R1VtKCo6Dq//oH7IYm6zwhSxyYGSCiX7673HvBjfEj4DI8ShHrYMcT/pX9Gfcf7dCWx6F++UQkGRg9tKg/1TwW/jBFVlkZ5o+Pj32v8b6d/dn7c7amrRVYzIa/FHnOcIR23/8o3yIP/Kz/JHfjoVlf20rsM/5W7LFsr8sx9sfU1jmxBedPi1Qo/Y0oLkZr/1ECoCaqHX/Tfo3Pd1Qv/3BGqF/G40XshuzeQOcKLe3cqXmdnR0eLlfwGP/nez02aqSEvuOjO1wwAoAnZ189lnf6aMff+yKtTT8K3vmmWXViYsPnPTeZrcAM+GZ8e7x/u7+v0qHCO5W0ecmulSdDg+7L7xgnyCOv5/luXmHnP+XEG5qGvQSwipv/D1EJiGZtJ9ky8epBezvCYB9UyZQTrnIUe6/BEAOsnyNuNK/bq2NAJyFzdsGBtKAS5fsL/wIwCWWQGolJ89OnD0Lf5yWGnBdw8O9va//yut5bXn57flbDm+pKq6qoWYve2N5wGnMGM/A6ci5vk69a1g+MgKwQUAO3v5lt2oHi6+FBkQKgNeEIlPB9tHPx0f/U1PX9NVaDbDN/7BejHd5YsJjfzUrkb6X+/VB/WsjAPMaMDPjNjc7GzYwOcl5R93SCoD0+8CBlT/twlWM7J2ZYcamAZQHrqAio/vMpe6PGBiQPjm6moICrxm5xAW5lp4A/IAfnDvn2lGgrCx3717igS7Q2qT3afm4YTdR3pWv9lRCiXrVDnbI8dc/de3xpH8JUzlVaWcATC2kpU05Ng8crqgI3b1rf7QCqeCTwNG/T+VP2JPNzXH/PmfPnv+VN3e35RU+yKuZKX711YrMzHT84QqP4mELY2EeggOjdq4vMxPJ2VcMy98l++6jQ0AapND+MDlXsPfRmR/ZdnxNX/naaEDkjK6OjsdTwbPMLv78D6ypAMSrAQ4+4LH/zZsKWD32Fwv4jyWT1uolSeJ7KZi18atXpQFif5l2686uIKoiP0aBgkeRmvSgn/6OL74wQ85lZSYXLHpeof5ykIPeE0GfT34emRAuww+qowlAWhq5xtKQ6d+xcSO/BpKJgIPjLZZSRFE55ZIxWfyzf8veKhP7h6j8VfLsqRbQUqXVgP929+5fnvf5tGMluuURqARcabxu9Oxs//f/ykcfdYbDZGSQm4sCP584tXCAa+z/MmZpHoYwGeA/n625XpeQWUyBYX+1BLH/fXJOWSnFyczkxRc5ciSBb3pwYpv678ZxQie+VLAEAFF/ZCrYc/9VpY+8QWINsSfi0+rNvWhpWfS5zzLKolH/H4WTcGxtBGAhiebnu8eOORKAyUlZ7507VgNsHCD6FRLm64iPppnuoquFlg46uHXL+JxdXVYA4j+zbQKRCeEbD254yYDsg2T4Y+mFMKqZxsk0MJZGcnLs3MhPQXJkd/WWSyykMN75GV6/hcpTlR0YW8Bp3j+noZKcCrFyW9uYj1SwD9Qt+CSxHBigX6KfeuFCODfXlQDI6upiFoBBxn6A8Br8WhhE7P8uOfB7oQUL/gUMAl+Q8wV/BX4DBpw4sfR5nQT0yuiTwLW179tRT5HhD/aP9St7HGvxpIKHOzuxDaKnh8LChe6/hGK9zadfeQ3o7/fYX+SpgVnL/voQbbJYWZS0c9JaVo1o/tgxFcDGAe3t9z/7zAqA2ebkkLCXwdmHUoopzicf742gw8OsKDazOXJ22PXrPVlZTna2GQ560T9LLxCAxnTwLCb8yIKPK4yxMS9yT0/fdGnTJf7XJfgr0d94lo19q/0tZq/iIxUcSyNwa2sddSTZwMDMmTN6eWJeHlYDSkvdJd3mFh7F7Cxzc+wtc/dyEX72ND87Q1L5/W9x9k3K6ikDOrWfn/+56Q19yXkv0vYtyl6lzIEi7HsHEsH7MYQCqaTKD1AsaF8DJaEbYQR/GGXUvlYPML4KabIYHnaI1ACvQQwUJln3X1syM22YYMd/vuIa4LH/vXty+R957tNdXvtJWuOq2bHDCoC2WgT46tVBbyBIr88MhRLn6CSRFCJk3wpn3uY4NcXMjGxln0yqoMJqwHwyYMpmg7M2cIAno4HFsCstgv3T1uuAcET6t6L6Nx6vhE/haPS26UI3vA2VD7j6q+/4TAXHUM6GBgmAtZ6WlvPnDfvn5cmcZY+lVVYqp+/W1wODsssMNf3FHX90RzY/nkO6Pe0XMPiAgZ8lZ7I9548fzsZSFZnGbHyzHpFFlswmflRTffT10CO/Xp1lSfbXX+rv1doB+/yz3KA4nwf1mlPb/qS2lAWj/zYIXp8asPh8vr8JjbADn7h0ybK/PkibPfbXwyYxeA9JrCGsKtbVWQHQVhqg12d6CeHnn1+5E/mIVSeZnGJqllk7IdB7rH4FR4GEfezzgoAzs2e+TAYkZR3fmJ2UtDW2FMcfN2Zwfr0mBT0fnl8RTx4xT4BGd4pcDIqgUvYOxcX/6cGDWFLBPsrppqU5ERpw/XqfBMDash/Q2rbNLSmx76wffNc+BfS7c04eMY978k0MGGhm8Jr215U0lZhHgHgVcrHsb7brFKqPQgqLKMokU5zeQYc49za3a6ld8hVb+stOOu0b13UEbWOIACBybUe1o4e2Rd29m9K+fcHzP+sE7tJh1xGE/dC4vFzawuc+3QM11MQWOyatC208ciQyDohMCB88iB/E/3YO+zI40QAgSjb+WEYGq4PIV0Rc7XfOnevLygplp6RkQw5x4OC6fDCks9NL/xYW/tiXT3jyoyU+AuOKa9hJYQ8etPtIBcc+DulpwPe/f+GC6w0E7dq1vAZmW62dAqZt0nRado55BCgDbx0Ya527c3fnuHYSQA6W/Y2tX5RSWkGF+LWJJlH/da7rswj9CZmhbrqbaW6h5Ra3AP29jqDjxD8rWM1APNjd2Xm/M6Nze6e6UuRa8uub/Z0oO2U+IHr02H9gYAc7Gtyoz306+ELSmj8PZhlAyQArALLJTz+NfDBU/XDl4RAJ9f7LXL7JTRtO2teBUli4OnKHeCIyIXz7dkpWVkp2YSgbXoENy3lMo6+v78aNG8PDw+np6dXV1eXl5YnXAN/uv/eiB389R39q7dKltrawj1RwrKiv94KAyfOCHQgy26KiZfd0bwpYNiU5To6IHgMePsR+NTm+IXISgAs/aYMA1i+2YmbJ7WSn2Pw+9y9xSRJpl1ErppgFuMc9zRs/xzl1KzvrTb/VEXSc+CcE6L7Q1dVz/37Pg5zume715/4vl/1907XH/jduqF15T/6kkRb9NOsuAojCbSkpkQnhgcuXI+OAePy+URjDYizy7PaRhjHG1KBF/Re5eJ7zIhn7ICrV1fasK6kBEd5uCSURCeGSCxceZr/8zWzIgiO+b+GDBw/ef//9ixcv9vb2bt68ua6u7vnnn9+xY8eKNFJ3pdO/yckepUfJjrkLEtxmSrBRjNmbNyUiPlLBMY7MRSYDutrarAbIXnuNpKTlOXmieBsE5Ni5vk42Lp4wDAxg2V/asMG1Wm/Zn3TWL/LJ381u3QF1ljOcUU8R+08zrfoSs8uvzyIriSTtUZO2a2tLJM5yVhGDfX3IXvbWUmszyfFrABdm+nt7+76Eide96GA9oA/6wW580bKDkIdFHlFw44aX+6WPhv4Gy/7lpEP/cqg/L/Jj0jqaFJKVFRkHdLS0RMYBMcd2p7DotR9x8OBNBBNFXeWqmixiqcOHjZ+5Zw8FBauaEtrFLu8VER/wwbvvvv0uy8O1a9c+++yzd99999atWyUlJWNjWmEwd9u2bRs2bFh5jY4//bvNuv9ORobvJyTm14nk5k17GCsAK39DRCIRGtDcPOoNBB096l80I8d52GmJfj4CGBhw7H7r+8u8Kv6f8APWO5S76qZbbVUOmrwlyYA+y9NXx7HvzZYAqEPZl+tp9P8LvrjBDeAoRxUoiK10hJWaFZx0mf/TLxhQtRu7V81+HcDSTBec8s/+rzseLf9uFsPAgMf+Ysj6U/WG/ck6wFmM4eAT+z0BsCdLSkQO0L9nXFQUGQe0tNy17C97+eUY1+c5FYX9rQCMM25fdzPGGMXFZjTgyBHT6UUHq4/Ip0IVLLNMyP25d+/elStXXNeVBlRWVnZ3dw8NDUkGVly44hr/keG5/8tZ4q6sDPubvDx1dT+p4NjLtm2bupk1JaIiB4J27PAf0WPdfxsBWHtMGEofewuQg/CqyzpHGmmi8jBh+1nekl1Co4IKxQcZZFgBGGVUHpVuuT5vZrN9sdIJTmi7gQ3xu4ieBnzrSv/rL/ZP1U3zzXU2/nPKY39/zCz29xBNAK5f59Ilw/4dHaUvlx44ldfAhQNcWOaATz3sBxYKwNprQKTKe3GAthcu9NpRIJmmSsaAX9Vx/uuv8l+jv1J582YKSigtNRQgx//AASMAycmrUtRHXd1kkiMTwuo2y3x1eXIoFNLgj3IAjuOkpaWlpKQkRRuzSHwoEDFnJyfHSwAss615QUB/f+ypYH+IDALGmpqsBngy4Ace+yfNpFpPX8z42Fd7yLZfPXXvZiii6HmeTyVVF7+FLXLwdTc0fCrjUaiAGpGxL1ZqoEHKoZ+s7Auib9/u/N4/7fRe/WZUdX0g/G74Xf47Mj846PhayUPtpqvLyAB0vtv5n5EtF2VQv4o5gJ8kOlLs175RW2sjAEDbs7Dpoo0D5J2v6InF/qmpZGSYAaaSEtOMamp09kSVE/t4nI0DJplcboxcUVGxe/duufxdXV3y+pUD2Lp1q/TA/0X7v+I34J3lNgPrsae2aa9q2mZV/BOe46WCdV/27pVCt80fcmREqh3/bbGlihDljRutBugEOulduNBD7nmbDPDVFCzFpwzyDTZKtXRzI5ebzcrScZxULwLwU8UxNKm9slXUgFd5tZBCla6W2g46euiRB6PuOstsEklppKlo+oMKKrazXeOc9dRrPx7iK2J5OZbwf7IAeqGKhLv//nuTDzgyx+85XmXFkRSnF+L9phFiePW1wX+Dby8YBJYbPjtLWRnh8DSchXTY1GLiAPnoHuI6sRUA9Uv7Fhi7KHl0xHu66OPd6ifqP3nkSQPwC1tJB8bHx/Py8gYHBzdt2lRTU3No8cWMGuO7Yu9GGXzbZ/XY9G+drN26OKpd0bhPOJFhv7Iy0unJyVlohzZsJmBFb4uHwkITgKpJSAPgIuRC3gPJwMInkhsXFYDiQRqH2MCGUkojlmRS2VUCRkdzwLD/Rjb6rOJGloM9skSMBanRyv3vpLOX3hFG1HTnmFOhFB9kkSXlU/GrqdZn/Hcq35mA56tANgdbZVmJFQD/vckvFmpAY0LYX0iKfczX8fGqmhT7RUwQl8kdm54GhsDEAZAuC7M1tEInlgD4GOpZuXKGIcRiqKNuD3ummV5ms3GeffZZ8f7o6GhqaqrWM/B70bHfGVsGH9WT3M63LF1PeS6wz7bmLIwId+60LaFt3vaxas1v2zaZndIlnIdcKwNhqkJLnHPPoDEGsW9SIgJlZdafycE+/u+7ik8m3vf3AfkrMvuKw1FGIwUgk8xlTvdd3k3aUSWbFwD7IUFY+d6EI/NxjldZJSTFmPdzoqxZ5muvb1gPHYMuLw7AWGHsJ44Jq386+YyhmI5T8CWWe9Gh1a6ekCXqdl/xo++W0D9/0LtQ4eu2xBSVRejVEFyA3Hnb/ORaHYQhGCQaQiHL/jK/COEboTV7UUT8rcY/QhmQAAFIWG9yfNBpKHEC4KNfOqwJbs4LgLYvQQYB1i06wQpAzwq/Cd0bBYIKEoTbNgLAbF8iOgbnbeYJxbLsn008CLBVNi8Am3mK4bC2SCIKBqLs0MQW+aqrNiV4CVyeFwBtXybAukWbJWr/SST/3cGLLEYS1/cjBoJgH1GwlPsPDmRjLId4EGALVMGs2T71cGRreHLXZSGGhzl16l+fOsUPfkBjIydf4qcxcNjClhd44ZExPpenDgECBAgQIIno+N1YL7sX3vLcs+d4roqqOup4mhEgQIAAAZKe50mYeXaO++/yTzD2PLBzhhkXl6ccAQIECBAg6STR8QZfVQQIECBAgKTGryX7BwgQIECApEIWQxZfbQQIECBAgA18fRAgQIAAAQIBCBAgQIAAjuu6fF0RIECAAEEEECBAgAABAgE4DX8YtoDzqL0J/wfmeBxOAi0Z3lit06bAT8N/hB6w6IP/Dr8R8lboFPHDWV2Liln43/AmOFAMfxA+Wt8FibR9ROAm/At4A0IxVIfjw47An4cPeTJGMU3tG6vTSiC+s0cv62H4u9DG0rgH/wiOQwh+E7yDQQf8Q8zOVPi2dsZ0wcv7rcV34LdBJjjwCvxr6E/EiRfiV+G3RlzIv4GBZV9HGvx/8EtfxwhgH9SxSqiZt0KwyIc675xPJwKUwAEisAP2z9vKo3L+0AeIDS5rCZcAwasg1isKoc7YaiAUIQCRqIPOebtFvAjgJJZkUqBBtnBZ7G6M9UAbK4e0eeqXZQbsHyAQgJV3/2Wr6v7nL4iPIjVggqcJwVtvGxYVgE3zGtCj7QreVEv9+2EbMeBt1hJv8/VEgKRTiyQBuoiCN2EDHhpZPsYYe8CDAQZGGBlnfJrpOebsWijppGeRlU9+CSUppBCJXfPsv4dlYHCQe/fo62N0lKkpu4w6GRnk5FBczPz6Wamwc94WojxCA84yj+lp7t7lwQOGhpicZG6OlBQ2b6aoiIoKc4plYmJi4sqVK52dnYAW9tLqvlrikZhhr03FHx9nZoaNG0lPJztbpfa3eN6CRjELP8+jKIbniIbGlWZ/3cTubgYGzK1Uhc/O4jimzlVLKldBAaWlppgR2A4HrAAsLFU17P+Ennt0wydYqAXuY18VVfjDZ5/R3h55tv2k7OdHDpD6SB2cijqo+x0fqulsZGMaaZlk5pJbRJG2+ISPs8f2cvbDRNZRY5Sz3INPHo2x34AO+HTBzhiqy/vlApxqXDQDMMqjeBnyHm2qp3ycdeF5G72f+k8CjBGBVyA38nD+L4U0+AmWi8ZoAuBDA96MbyXPDjpuc1vb+9zvo2+YYQnAFFMurhWATWzKJruAgi1sUT/czvY8e5cyoQ5rfiGaaGri5k3TR0UcIyN4ApCZSV6eYX+7BPy2bZ77nxc99uict3tgjnzjBq2t3L8vShJ5GwGwa36XlFBdze7d1NezHHz00UenT5++desW6Iq2aY3fV199NVlXu1zcvs21a9y5Q1cX/f08fIgnALbU9vK2b/fJG1E0oPhJd/+tFaV+1YkKZSXNarkq3BMAK+fS3fJyVZy5oampQM489R+ATYuWav9+0zC6v0d3H3cQcsiROyL/I4Ol9fv6dT75hNOnwWAz7Of1AzKd3UdvXtCnfxPRYJdZ38xm9YUSSsopr6ZaXQN/8H92nzgEh4GlBMDTgAULJnoaELK/XX512V9GgXl3PUtowMsLCuBPebzz+hIAHxrwChYxiGCa/eNVEgAoaKEA4T/DKfjlK1d+mtghum+i6RrXbnGrjbYuunrpHWLoIQ8jBUAdT52wkEK18q1sraFmL3v3s3/Dvg1Y9i/BF+T1nz3LpUtcvWqoUDQtPz0cRhBNSwDkMJaViQTFLOn792sl9Zq0tBqiIt3TgIGBznPnXHtkEZNOZEnWdc2Rc3ONH7pzp9k/PMxzz+H4IUDp1E25/9KATz/91HXdI0eOpKWlVVZW7hZTLwuffsr581jl6+igt5exMSsAxlNWqcWSujx9NTjI4cPL5A1PA4qiLoDqrqjjL8a/fNnomYrT1kZnpxEAVWykAOhuqtqlu5WV7NhhpKKuTh88378yWqnS0owG9PTQ/V16vqeKOsIRudgi2ROcWDKwVBOQffyxaVy8YKjfHK2iwndVWozAdwkBTxIALzKWY1RJ5Q527GJXHXX6J9Hh/+z+cUi2vLN0wAVoXLDzIjTGdsGGhWMos8e7Ly/nV95ZLfv7/6kPDXgZYrwUUuHkquUA5EyJd/LzXRi31/IpXGmEv0BMuMGNc5xTf2mmWZ/vcMfFBeOPlmSaLrxhg7rz3OTkxMjIxI3hXv2NWrx8HIULnXT2VvYeqTuSU5fDPvxAPVLutOman3/OlSviffXqPLbJjXJwJsOTg+HBzj6J0TV5cfIra/r6tKR6zTPP5GRlER07oPP+/c4zZzrPnr1y/ryOnE+fOCevxjCJAoCRkXBn5/1b5+4byRkYMLSrL0SyPjA0NNTT09Pa2qqBIEBxwIMHDxQEsCycOcOHHxoNuHhR5ZKOKsYRcYhBwrPhgZGBeyP3RsSPMgnD5KRRhYYGVhDuijr+ukG6gypLc7PulDTVjtLkkptOUTLJc+5cOBweDY8O9KnJ3CAnx7j/7e1qAPUDAw1Hj1oBeBKqqmwcIJMzf5nLYn9r8j+IDsv+0ibD/rt26SDGDhwgJjxDCA4RBdNMjzE2wMBFLsrkG+1kp7yoBzw4xKE97CE+nCAEB7EIECSBjV+cnu7Kc7T4xBu1Owk1LBMi/dOcPsvZ85y/whUwbmh1tXGU9UHemyJmx5EAIOobHjbU1NlJa+v4lcEr7bT3JPUM7Rsarxs/UXeiKKWIJaEDXbggEpQGyBEupliO0ja2iQ0lKg7OBBN99N3l7k1uXuu4ltE9WDOSWTO1s2YOnoEcoqOjLuVM5+SZzq4znZfPydeUSm7dKrlUbRkBEF23tYkXxMMDYXGxPG59J4koLGQJqBJSNeKfm5vbpkMYaczLyMgIhUL4x9WrGpMWi6ngqcPhgzwjJ7GCCtGlBGCSSZW6lVZxXHNHs6nrpCSys20iZB2yv+6dkXDdx3PnTNFAZREpl1KaR56GCo0AMBcmPMyw+Fs39NbgrTH9fWdnaV9fw+how9TUgRMnjMg9GZ4A9PSEb96M1IBUUqPVtGV/bXWrLPXLvHP5xz/Bw1Y4zAK4uBKAUUb76e+kU87Tda530KHP2iNh0LcSH2LCP8JDNYEGBALgwfVIYdx3YiiK7y/2/5APz3BGPktKiukme/YYiamoMMSYlRUpAIZD1RM7OuQCq5uJBIaH976XVPcwvy5cVD0Nx6F86aHZ5mZ1Tf1YZKGlKw9zuJZafbYDu+OMq7urIykE0M7BqcGaj2pqZmuyZrOYhWcgn8XQCmfy8s7U1Z3u7Lw8OmoKsm+fGU2RkonqJQCSLvmsKtH0tLhrxFxJTY08cT8CUFFRUVtbK69fvA/oswZ/quSf+sTDh7bUosvk4fHneUmDGOIFKV8BBeJKyZ4cRnGHTSE29zWb2Ki8HOlY/AKwssM+IHdeKmrDOLWGTDIbaJCru4Md8n9VIt1KFcrFlbANMthFl1pXCy3yNm533G4YmW0IZzTMFubPbOQZSOFJSEmxGiAB0LZtpM3TgKMcZQH6+w31W/Z3XSz16wj6RdzjsVWLaoBETgLQQ494X15LFVUXuKBbqZ1TTDk4IUIS+xjP/lXTAJc4EQiAG/fK7d64v0Z+5Ptb9hczyiE7dIj6ehGcfGc5zosOhhg/uqXFKERZmXFS6+o+27dvCqZB2xNQzRPQ3m6GOES+IAY8znFpwGOrV4pKdrNbHUnxgcRAnWfnmZ3MgbVnoJBHcRPOYOx0Xd0XAwPY/PHBg6Sl4UF0KqqfnDQCJvUa6Ow0nCLC8IGsrKzjx4+npKTs0ngCKnjZgQMH8vPz8QkNOok0pT8PHhw4ceToTx194adeOL7juKjBo2SpnUjNxdV90e0Yk8aqru7dIxwmFFqp7uYQN/r7JWNK4UgDVJWie4mZRufrqded0l3bwAYehTRAA1vVVG9hyxd80TDccODDAxJ1ZmAWTkA60WDv3HwyoFtjaIpTvSCgggoegaV+mWoauQB28EdteoW4qoToGGBAXovKmE32x3wsJ0Y9S2GKzQ8rxo377KU83XBjcFMDJPlh/xg0oIkm9RSN/IhuRJTPPMPzz3P8uOHN6M83GsZXh6quFglqa/0z8eOleQHQVlYT9ckf9eGuLnXmMsrk/4rrDfsvgKhfpr40wog6uboQn8LsvD0LxczjmqV+zLbFcXjxRaamzIUthIjUDm3l5DBw9yHj4yau8QcFAaWlpcoEgI5QkJSUxGJ4CUZgeH4bBgOJzd27koHMUGZNeU1ded3h8sOW/SNvl8pbQ41IRJVzffa6odrBQYaHJVzrhf3t4I9Y9sIF6ZN8f7G/JFxbjXdvZCOLIYccfVtOeRFFknZJXcPDBj7ACoDZPrPExCxPAGQPW1psEKAWoq1CDebxxRd4o/9qQd7gT2I8VUVvz/CMtrqzs8w+5OE97ikakEbqOl/hlZU8e/xMunGjMTVja/oM9nOkrZbX7y6zUQYC4LKSuMtdEY1Ccjvu39DA0aNGA559Fj/YvNn88d69aiGeWnyxtACMjRkNEKNBFlnqKk92i0QWROJzmLPm5dibItj/duSwQTRs2IDjGLP/MeYT32PjWxtL/n0Jws9AI/wkC/GtRwVgRDY+PtzTM9LdPez25VVu31KxpaqialPq4hqrChFdGsETJiclZbJ1NM9LEYniGBGtRqhA5KoRPIVxZjRmKYj9v8E3pOi2dIThw3kB0PbHiQpLTPX1XjLg9uBtbyBI0uLNQ7DsLzO32Rv8yc9P5DiFwiCx/yijffR9l++qi0nOlR3ZwQ65MutolCQt7TGzyS5jkTvjQ/wDFgGS/LcJ//Wq+FTjlS202Ai7rs70lMOHn3D/fgFOYWwmYmBk4VCMjQN+Z9QMsDVwcKyxLJy3QYAnAB/Os387/jAwYARISmRELCMjSrDzWdRdWRD2zn6ECBzxBOAxDRgZGdb/a4eGS5iby922I3dLZV40bvZcL+ujichk8fa7/n6nt9dIr33eVKUuLIyBFu1Ylsn/tLTguqIz+xCwpWCfMOzvYQY+8CcAQmkpXjLgvfciB4JKKY188kffc9BQv7HduxM/Sq1qkVLZWTW3uHWDG9qqx/kRADdmVX8WTsJ/jUsA7AerAVYMVpf9Aw3wUVtJ7krXvtwTRQBttLXSap8qqqkxud9QKP6O0AZTRENyMtZgmOF++u9z33Pz/eISzDGPD+AMdPqfgyXuam/HDBAfKKe4WDzo8znfIfg+kXgeWCgAhRjzMA4jjA2/NjYyMibhkQBUVOSWluZg8TcfP9VDHk4wMckkQmam0af09Lie07961RFr68PICNPTRlykfKLNbdsk+8uTgYcPuXvXVF9rK6ARvJ3slMNr5Sp2nIZZ/MAKgLWRq1cjNeCLpg2W/U1kUl6+cPAnwaihRnlgOf6ifvUydTfpgW7uJjatrtf/i1CML4RCYnm1LjkE2noRgD6o1cnszkTkewMNcBP7LqAHPBDzdtHl4ooNKiqU8hUhxNwgre/RuHTTE6PpfNnZdtaxeogdw62nPoss/OMK4EUA3X6lqQ37CH5zM/aZdCN9VVX+J3oMwg+isL/w91gE6bLiseLiMZAJOZBrtsLNxSdj6+700WcnT8lVV3XFMjRsa+nCdxw7KdpOfJuask+XGopUNrunxwzklZUtQ07u36ezk9lZOfLyZ6uoqqaa+PEpvuA4kU8EtfS3lDglJW5JSU9J8+X9Nv0rXrPUb3NTa/WQShllqp9SSlVRI4yor+m2SrgWVpfL2mHLFtMM8vKorKSoyIu07E51De1cXfYPNMBdi5fByfUWxfTQY2eViWfUEhKB9HQ53WIfaY58ybOcVR5qjDGxntzJcsptLO8f/tlfjuH580YAPvmE9r5NPHfUPvFq6XUB2omCQRghxPIwNm9CrrHFIMdfLu0lLt3ghhxG9j7Pjh3qhDFyxFn45LxmHqRdvFg6c116l7LF8H9/P61X2l2RpSTh4UPpgVhSwuz3+Z++PpGvzVXYHGyCu4ZN7To2IfzDHyoTYC6jqaTpUvGlS8W9vXDMUL8r9lftRYGTkMH3IopUS/nkSwDU3dTpBhjwBGBdZHUOHTLhuJqBjaMsDh60O0UK2rmK7B9ogLtGbwNVixxmeIghQNQgXzM/P1FOiR1vamsTjwxPDv+AH8gzUpgsX1JOkwRAW9kKMsvEBGfPcu6c8f21vTFSzIsHOXaMo0YDSATGYHReAP4F/PNODFzuubgzzIj6Bxm8x70WWi5w4Vz6Ofaf4MgRt77eDGHHgHNwGj76YN/tM2/U91RWmvubkkI4bGjz+nVTIf3yltXP8/JMfasq/GBkhKEhmX2wJ5dcsdsadIr6evdLAQh3d6c2N1/pvVJyu6TlWklzc8mt6uptPgZ/7Cmc1WR/W0VZZMnsgKc63SijLMAo/jHqh/0zl9wROSQrDVg48UI748JF778B/Df0xAnAOOMPeSgDM9aXkWFdwISguhp10cFBpqfFx9MDZgL9da7beNnTgEoqNX66ne0ppBAHdBJNVzp92lCeIoC+gl28etD4OGrix4+TIERGAO4/ARdrEy7vzDI7yaRoVYNyrQWtP1c2VbLtxQ0KTXSFUqnYnsM7Lev8S8Mff+MbfV++d8fEeaEQdg6Ejfa+8x3mmpt1OxTvi1J9pfvGx42p4YAGiTPIkK1Jp7ADQZe7u/9qT89fLLxa8hdLejpKfmdGxuUDB4oPHNikb30kTtxVdnnSSZelkWZ7nGRexgK8hU/0wltLsv+PL8L3v41E4xTCp8Z8IGD/d+CNhArAFFOyaaZtKsja45iN9q/o2Bj53+gQr83MGMYpKKClBb1gp79fzq8sk0wJgMRAAqBguZZa+6IIYsXlyxoFwWrAVN1Bkb6I1ZgYNtHsPwfuc+A+YuFZfkECIPew5yd7/njJz/y85hpUVW2tqdm1b19qrCm4wT/J9RdKX3zx548de66hwYZ3jqe/jiPytPnwCSMI9++bf1dWsiTUaqyBhFmWSiprAbWc9v37L3V3X+rpyfje9y53Xu5r+mH6c0eL9+8p3r/3RFXVepicmkyyNUBxnrVY31PWC6c86o/O/hZrLgBv8QkyHwjY/9vQmNAIYI45F1fmPRdv7ckN8x0I80S8CMVY/DqeCHWKl14yA09lZXY4yNBQZyddXaNDQ4oGZEUUyf1vpbWbbgXOMb9NRQfW4T7/nKmtNXaqm5Gf0lISgctQHyEA7lEWgZM8s7G+OTROxif5P//fPy7cUlheXr4j27wy7TCHJYcsH8dzOFGrV51qVocq+/FhD2X7y80DUEZysXPNhoZ8CYDrMjdntmBbjYPDWiAc5vKdvZfvdF++3eP+i9Pf+M7xX5P8nd+4/3LxgWKZ96q49QM3usp8lyUQCocb//t3//t/58l4lnWDvfdgLzGgJRvOf53YPxUaEz0EZLuubMGj+UuEpu/AJFHwEhZ+BMAbyZU7KvffvvBAAiBXVBpgXzXXPWae9eukc5hhXV0aaTXUsHzI6ZLDOjaGEZvaWk6coKSEBGEL/Bv4hfk+7pzF/Qc8ihBzjeYKHz5kYKCv85/33bx59WJL1m52q/gT7sSLvBhDOuS4tSSx/yJZtpwcOwXCG9XxOx1arcZOTZAM6KZYYw3gTfjaf/v2qzv37Szt2l3a1TX5z85f/lOXi5OL7SRhtZm1XQXT8/ptNOBN71g2fiQEL74Nb4DD04BGYNeyNeAGtADnvzbs70BobXIAdtRH8fskk+Ewk5PGRAqP4BcWf8h4ZgV9j8xM9u0z9uCBqN+anHa7ZIr6dxtt6j/ppBdQUEGF/y4dmdCyNmWfdxb5JQ4FsAVKIAuGMXD+GO5dIlevEJdiJaq3l7t3uXqVz/OHT5/+ZIyxjc7GLLI8AfDPUn8b/jSkRp9Ua83qv67AmP/aDIUkGGHCajUyVhjOkkVtb7eve3O0VTOu3Vdb1VVV1rXP7epyytrM5ADXCMAxjvk/z2poQOS4v5quupuMGHDStqWXIuO4dS8Ay9SAG8YEtdwg67vqApBBhjV14NFRZCMjFBYuETeo9/+4HWZ0oRVOyTqVyH076hgo0/hDcbGxhgbDgurfN25QXi550OD9Pe5d5aodDlpsyliKTwFAAiBTH0woSqwGWAGwqFj4KWKhhJISQ83DwzQ1N+WRJ9nbyU4V3xc3RiCLlYd9YEBb0ZpajWyEEd25RK5PPDnpuf8mbDrqmvm++/btK+2alPegGjQPhjpqTMaqqFrD1fCHGLIP/9j5zzL1uDj4NB9eejqelqyO/OQPN75uz/w4aykA2WTbx/j66BscpL/fEO/27U96JreGmh/jx6aZjihJJ5wCGqOsWPcMfAhzy0zu2eUIjKvuugwN0dRk50b10rt45/AhAN80ApBiBCDRsOyv7XU/PCP2V4air4+bN2luxi7PqbDICoDFWg5rZGXJdGt0iQMM9NOvmyJ9In5ULSOrb+3OHSqprKfeWG09nRM2ghxvarKTA+w0hRChtaq0HnpUP6olQFqu7iYjBmz2LitzfT8xH389OgH7J0IA8sm3E3lucMOb3Tk9TXJyVA2opVZdfdadBYt7kWnik4u54idgBj5m+VBPOXIEXdm1axIAuVFyNhVQxyYAP5oCsnSsAKxRBJAO4376R34+RUXk5RmPsXfE0IccSSzWXAN0WZLnwkIJlCRZdKv4bJLJeJ8FKoJj+IFdz8eamN2yv2wTm9i3zyaQtL3Tf8dqgATgCEdYC6h+rHgPMgjoSuy8MOLG060B65/9Xdda5IsjEzrykwAB2MKWUkrLKVdMOjY+Zl/ucusWu3YtuHsRg44bXJs69tscn4FZjH0SG9fYZGVy8ty0GaWOkm/8Jk/EcyH4fwKwJv2gZGpqS2trSXv77YkJtmzh8OEl+od0yr6Ja2RkMkxYtvID6rFBXnVJCaWl0tXwVLiNNvtKwTrqiBmb4Rgc9TWhz77tRzY+zlHM4I9dVMfGjlYDjL3/vicA2lZQkXjVbKFFAZx915Z9rFndbTObE8CnT6cGOKwTqMPJ7LPOKdZWlv2dtReAJJKqqLIzreROacDh+nW2bjVdW5Tr3T2fIjYFISBKBGDt8zik2N6FZJKJASkQkq2RAPTJaS35vLWktVUacHt0VP6qhtDt9F4n2sCn5M6ag2ONdQKJUkUFlZWmrbS03OLWda5XU11GWQ45xIBkOGaNJeGt8+UN/lhjHlYArD28ccNbM0Cm9pNIsrVrn13jmiJsQKGzVMp7MjXQgPXL/mNjcrtQR52edhzvnXgJ8P0TKwCCqL+GGjkp8uO6u4euXDEdJTtbD8pbxfN7967DNTywCRqwINsGAfMacBED+xIICgt58mwd+8oB3YyZmSyyMsmUEQP2G+NvkGi0GqONLa1b5lq3XGjd8lFbaHY2LNd+505qa+3Ei532Eh+ba9Xba5eBQfGZWmA66awfVFfbl3koYOyb7WuiSSQr9n+e5/0MBPXTr5S+4kh57iqapX6OLi0Ara3e254XDP54cJxIDbg9dttLBhzmcMLIVn3KrrCts0vHxf672V1LrZRyxfnUBeep1wCH9YPOTrq76euzg7G5uYYSHWcF2d9ZLwKgTruHPTa/+h7vXbhAVpao3ziehw6p5N7lRi3NHbgG1+GPY0EFNBjzQN58HDBrjCti/+9/nxs32LaNhgYOHoy6TndLi6RC3diOn9qXasU0D2Cmvb19YmIiMzOzsrKSBOCKx/5mm9KaUt5aXjlWeYkqOYYqukom7RN7zePSYwua377N3btyQaiiWKW2mcP1gpISM1Bo5+5dvHiRi9lki/pd3EMcyiPvyWsQfc7nIkf54+OMP3/o+dCxkB/2n5gQ70cZ/Fm4ZoCnAWfORGaDFaastgY85KG8fumUyvgJn6hzqd0e5KCEai97iRMLeuS6hP9rdlhvUNtS51SAqe4HW7ao6chTTQj7J14ABLXLHnrkaavhfjb32enTYn9VgjxQ9XGRlGRgkcHkcNgubsiNeQGwOAAN8xaJIm8sSGhuviov7ld/1fRf+2rJ3bt1pse7+xdfmBc4NDXpfsgLVuxcSeVyOzDoDP1nzpy5fv366OhoXl7e3r17n3322VAoxKribY/9zVbQ9cv7U8glAVDJxFE5OSQlLfI2CsVhZ8+K5kzyW9CvVHDfk4ETFWvX1YleTSsZHlY7OM1pF1eE3kef/Nwqqh6TAX1rV/mX73+BC9IABXPJe5KTjiW9cOyFDcc2kOZz2pfigCiDP7DoQNBoW1tkMmC587AG/e3zFoWXwikj0kyziqk4wFstWRqwYjdxQY90wXn6RoQc1haTk6YBp6YaP99xTNz94IGhnXPnaG5Wy0lONrFuZSXl5cSCe95//XW9soiPCRMAReJqnRNMzDCzkY2fT37+3nszAwPcu4eyAhUVFBWZCCg9XWwlbRD1O6Oj9PS4nZ3GBTSZgx7uQi40RNgOHkepHQtqbp5tapprarqufizq15lU6XJ3y8p0G8zNcF3pj9l565a6u7hQ/6znmV3s2sGOGEZC5KF++OGHn376aV9fn96vMDQ0lJGRcfTo0UQIwAAexD52tE0E0dTf9OmnJuwZGzM+dEmJqV7XNf/s7JTeoVBMfzA4iHxGhWj6YTnlsJ5Gj9UmFCSqKagXue5Ua+v7vD/AwD3u3eCGdFrEJ4oX284xN8WUyLGXXpVd317hijIHodra5OP3ko51JR+9/2xu6ZKDP9b3jzL4swChUKQG3Jy66QmAiJjlIBf+DZF4AKcWvuNhmmm7AGQnndI55UX0T4m3TneMY9IAXe2qOteu+zRqwNphZoYf/AAF4xrgz8lRbxS1iZGMV2tpB7UwOcEarZUTHPvb8G7K/LD/tkdY/48kTADsQNCzPCslSCMtm+wmmi5fvqcuJ/UrLTXhT1YWaWlWACST6vWqKOf+fdrb70gnHM6bVd0p89z/aNVV0c+J5s2zzVs2NO9OY+zS6CX3gw90FJ1JsZa5DVYA5P7buWDygUdG1IU0enuAAzFE0PL6Ozo6rl279vHHH4OilrsKAvbs2bPqAnCehVAtiY366Zfc3mq9pVJK5kT3BQWmeq3wdXerBcr/MBUgV1rc0UDDPvatL/ffYts202dcl5QUNm8WN4vZW2lVrLOFLXnkKW7zBGCMMRVc5CgJnNK+/YfChw+fOXYs6fjx5NLSJDj2xKDcc/9VaQsGf6Jg61ZPA+TTRWaDl+uJ/y54BYv70V7cKQFQGSWB97kfJiz9s2M+dsFkbRPAqq7Lc0RFgHrohh6YA3Uw09N+4RfkfKn1SgAMtQ0MyCPTfhviHjnCgQPs3UuMOLUc9pexRgJg5wS8zMtZZBVSKGezhZY7I3cuXepQl7Prd4mhVEWua99YoIoyYrCJut1UbuMnRFViN7X4/RTzBDRR3VS9oWlD2qBRGnVIOUp32u7Q1mZOIKcyFDLnmJw0J5ieLqJoNwfFgHbB8RieNJ/9EtPT0xigNICGoLRnbm5uw4YNJBYiBXHBJJPS2s1svvbg2g8eTFy5Iv/CEz4bFBlJPsEucZxKLQ3QTWF9QmN3ipMzMkz0VlYmNRttbb0yqzJdCRGSe+4JwEMezjJLUpIR+9pa9Sr1rbEjR85UVCRDEiQT1TP3nvtsa/Mx+BNlIGikq8sOBFlTsMty8EOEsP1vNKSQoh4kr1/6V0WVAlaFrRJvfSZR+Aj+GYsjwE9Dj9UAWTjcHQ4PhsMY1xD7bivvOeeaGuNiyEuUZWURGyY/mfyE/4rsyQjBNpZE0mqHW/LXXuAF23ZrqGmjrZPOHnoGRwdHBcLqwA6OunQW6eVslounjiS1kMdnV4VdgqduQ7OxquYqT2nUSXQiOU0DEwMPJx5OM6ZTiOizqNHB1dt1JepCCgJiSv9KU7KLioqqq6vl9ff29ioDXFVVpT3+2L8i6mGNxQKVV+wvZlTp9Pkud/t6+oZ7xvqYBlTwYjbXU1RBhb6V/yjxe+LgT3L0L/x+k0x82LHDrltJVZX6jYIs7t+XiIVHR8MmPpgzXSs1m4wy+2dUVuondvkBeRZDcMYKgNl6pP6TkevP2+c+Cy6ZvdIV6aId/PH7mikJgER1drYFimktxoQCC11yHTw6Usz34SUeqk4jTbquhmqnHUgJ1Hp9phx+cqmT+8Ib8A4JgI8Ljv0YL63Sia0AeBowOSnr3TI59IIJMaen5REaLzQnh9JSBbcmOdfQIDGI4VLsdawwkuKcz+OfoZSotEPV4uVeeocYGmMsHCEAtqHLS5WHXkqpBEMfeDLC0GSMZnDRb1/kRSmHfc9BN92DDI4zPs20TqFOruNbhVCYv5vd8WUr6zTuLyWwSeD6+vq9foO6kyyGHPtFrFCJxBGqNI0U2xEhece24HIhLYOUUWYXQlBVxHCFaXDS308y4OSKzA1+8UW2bxdbm9xRdzeDg4yN2QEiEzmGQnak1SSUysrUvSJXH+2FM48LQKO3/ryoP+MSb16GSWzKSq6G/8UhpEm6GAUo1r+7DMVQQrNNCfibTZ7sfcl/X/zvbL+QfmeSmUuuuoMcKZaDRh8n94X/xh+AB98mBiT2gv/bon/34mqe2Hb7KasBU1M9h6b6qqZGRowAzMzgOEYAsrIM6VdWmoazlJfY6P864kdSTNM6HZYPB0caIJtgoo++YYbFUJ4AJJNsG7pIvIACfKJ53u7ioZJK2QgjVmZ0Ok8AdHzrSRE35PKnp6fX1taOj49v3rx5+/btehg05kaevRJ3N4ssBZeKbB7wwD5/ZV8XLAFQwfPIEzc5OLFdYVr0K3wbvhnxZcbKtlQxu2xykp4ehoYMeU9NiXaNAKSkGAHIzqagYNE38d2fjwN+z6MqlXSZH78MsjYsrEyyLBw7Znw51wWG4DKUQLEx18FZQktJ8SmREgA7rBQbTvo/uQ8UhyGEHyTggv0f4KWEnDgFymT7ptg3NTFhBGBiQgJg6D4UUlCKX3rgpP/riB9Jyx/XcYgP8vTlg8uIE90RArAA9hWJrCYKvwTLxhEfu+Kq3rhXLPkmj2Kjdvn7SYo+rd48YdkycRfO4CGEcJvQJZBdJk5ETuS/7gkA7MdDNMIMLVJ/LiuOkP+9sWNdXXAoyq6E1dSULC1Nhn/4KkICBMCHBjisHzTPj/+MEA0BAtwhAg/h8rxNsrKwA0GexZ5WC/AUY8oaTwmSWICwE37oPmQR5LF+cGPe979KgAB+cWne2llxDDyqAQQa8HXE9NMtABo+/piP+53+9d4Qm+YtQAD/eMYYf5UY4LJyyITfaiwGrMPTu+v8gr9hjP+QmLO+Zox/t77umH8BaKX1Ez65xCUceMg83k3szfeBN419dfC6Mf49FuuutjfCr5P5y4X9Rtk6LUckAgQIkMTzRMK+HP8aM/eBH8WC55/nq4YAAQIECATgJAuww9hXHAECBAgQCEBjwP5fTwQIECAQgEIeRSFfAwQIECBAgA18fRAgQIAAAQIBCBAgQIAAjuu6fE0QIECAAAGCCCBAgAABAmxwwL+9CP8Cenkczhrb47gOfwdOrNyRnZWwZ+DvQktMa8CdhN8G3yGR8FHyDfC6KRUXWZ9wlml74C/DVVYUw/Dv4UfAgZ3w5+AyfjAL/xveBAeK4Q/CR8SJhHVFZ40sOn4Rvg2pkAW/A74Hq3oTnAUWRAAJQ5UxKiGN9YJ0qJq3SHTzNOPgvB1gfcJleUgyxsaoHTpAAB9wWEsEApAKlZZt15Mm2UsK8Qh+BT6DMZ5CVEcIwFcFSdae6p4dIECQA6iytv6CEhYIgOxX4QtixzRcIrHIiWD/bNYz3PgFIAgFnnYE7n/sawLfvUtnJwMDTE7OL3D8IhRg0UjsePCAnh4GBzFrA4fNwe06fxkZ5ORQWEhx8XIHyz0UQyXfqWS0BO4nJVFezqFDJB7nztHRsWVmxggAWUW8jodGhFR4B9qhzWzZEykS34fXTj1arkz4BkLjp3AMA27BF3AV9rM0bt682dnZqcUstaJ9SkqKlrQsLS3Vcmb4QB99t7k9zTR47J/O1gYi8CyxYGBg4MGDB9pqfc3JyUmtsO84ji5Pa65lZWXl5+eXlJSkpqYSK9xovfLhQ9ra6O5mZITpaTW/jZmZSYWFSWVl5OX56OXuo60vGoYXDDnvhPqIhhDlALPw8zyKYniOaGhkRTDOeAcdPfQMMxwmPMdcCikZZOSRV0ppAQWsHFTrugNigqEhwwGCt4JuZSWx4tSiKYBJIpFFRGdsXKk74BA/1P7b29vVI9RP1R1c11Vf0LKDBQUF5eXl+pAoAdA9uXCBq1dpb6evj/FxXBdeiLfNSUhu3aK1lXv3zJ2XtEgAtNMKgPq5BCA31y70SlUVO3aoUcRw36vMj9+u4vz9lBTsgr0J1oDPPuOHP6S5uWp6upJDlXxzYdX9GFTCF/Ar0D6vAbshv8Xs5bVGODlftEz7G97CfEflfUos9dvtn+EJkNT2nD9//urVq2pbotqpqSm1Kq1mrBXtd+/effDgQTWvJ7UFht7n/c/5fJLJL6k/jYOv0mAJ//+n7jzAokizd38KUERUGhHMNJKlQR1QEAzj5GfdnHdvjk+8Oeecc8453/vf8E8zOzlgwKwgTZLUKCCSJEuy7s86Q03ZQFNd3Yzs2e9hR+jqrq4633ve857zfeU9AHR2dnZ0dPT09PT39w8NDY2Pj4cFAEIUj10jSvEMTgIVwUDiZc3N0tCAK0pfn4yN8aRJ3C9px46kvWVJB78vB0SHpLndv19vlYsYUGAFAIkUAFZGoD0R5hteEbuxEWSDNLRKa7d0szO8PlHVFFOfKgr081Q2nupaKqW7JA43orVVgkHp6IBhwgPBAA0Awk0G/QsLecI/JDA+AQCDac3a6O+8kvxjo9wBvLK5paWFedHX18c8nZmZefr0aXJyMkxoz549zNbCwkIeSM7UWOcAACeqrZXLl3l+NpPkwMCsb8onZobEaC0t3HPuPFOf3EL6+3cNDe3YOr5ly5OEhKeLiwmzsymTMztGMjIWuPPQdp70zXOUAwE5fNhDAGD4+QI7fmNmcZF/8T4aS74EI17i2nx46i9+kTPxdT0ZWWZfEcm2RpCxFAO6nzwJBIOBxgDPSV76VtvkV37guDnBYDC7qVoDAEKeVEkkA1tra2svX758584dkgC8B0KNb4G2oCo5weTk5Llz5yLA6025eUNufCQf9R0akYo3pOK0VKyg/f9TcWnQ7oGGhgYCEufT3d2Nuw8ODo6NjXFWdgBITU1NT0/fvXs3xCc3N7eoqCgQCBw7diyJlC7GJACvvnRJrl+H3+CHwE/ynJFIAEivStx/LOlAEtAvB4Wf8jvFfSoABBhrxIACRjSwZSPQbuLLum6uDd+/Ile40UEJkur1Su+IjCxsXkhgZj55mkb+Krt52mixFPdJX6VUEgkkBuPaX73KfQASuAMyPMzDuzeJyNbN83A/5j2TdXBQamokNzcuAcCOATu4kvG8A/ZNMGIl/nV1dbC0u3fvMinu37/PtJ2amiIDYLYyEfbt28csgK6RHFRVVREP1jMAcGe4P599tvVKQ7VUl0gJMZ/nU/NgcbiAeDDSbe45b3v3LmFud+e9nJyh/YWSeYpH5gPLPD1ZiHVPnkxNTEwND/c/fNjY82lGV1M+MEqugC9IZaVEowOAnn7xP0Pe8f3N5Jk6CCRfjunHhUL+iYN6GjyVfsXHwZ+CzC8NAP1TYkBjYyj4i1AwFDACRaap4o96GYGs6a4RDL7Z9DA7mOEfLCwkXQgwJIKRyN26cuXKZ599hj+dPXsWHkEM4HH2ZAP8CdgFcEkt33zzzRXVzFtyC1x4NnwdEH+gn0GiHgP1a71+/frt27fxdf6bDEBEoDl4OXx/06ZNeMLs7CyKUIdlTICCggL+48GDB8QJvH8nOaLnGMDH4YoXLsjFi5BP+GyOnPCJL3ExMXEocfPQ5qT6JGa7HAgLAK5SAXP9deD1QH+YPk+CuiAXrspVHgeSsDMBZlCxt2Lbtm0EAIgCYNTV1fWb3b8ZkhCBAWkINPD89GkwgPjLHQBjeoeShVl59IBY4sbU48edXV2dHzSTmIEZhoEigB7s8rEp62/e0D9N1jKc8eKFCxeYp0xJIJ6s9/DhwxB/rj/TFsIEeyM/YAogDZHBv/zyy0yWdQkAoC1zlLvEPDkhp8/JuSqpOiAHuOV7ZA/AKlEa8Z1kAkkETdxXX1+a11/8dYI8FJ9bC5IQAMi/QTcepQ+9hbGSG6ASDbe1DTd+GLqPUkSKCKc+fVpwB9cG7Opo7r6tcPwlBwBGjlRYiUgkRVOhxq9jcBB6/04wSABgsvEWX8B7p7wThLOSRDU2JWcX+/1fyc4ObNnCn/Miyiz4TX19PV711ltv4Tfw6O3btwOvfBDY+v777+NbBw4cYM5DMZY/Iwjo1yHgvg5e5tGQxBrxdRz9xo0bnICQAGVnHzp0CIKDJAXiEABgPYAOihDKFVQI6CdUEK6YBiqMnj59Gs3KcxqK+IMrgv5n5MxJOQmrhd8kSVKCJODhsF0ZEGHcjK725wwDxi8P+mOAPvreJblEGMANKisrcRJVnAEg0jKcp62tDWyCpRItgIIdsoOcYKtErUUgLdfXC5efGDDwJE1ePy0vvYRHKaVg8nODkIGCFy5ACgkKe/fKq6+uhvgcwvDpzw3aZZAqsLzIBh9iRmgMIBMlHQf9mRdQIv7JVCVF5vrDmbj++D+MLSUlBcZGohz/AIA0z9wAvHYtphdK4TE59oq8wvQQbwZ2K9uqq8t/dK3i7ALSXkmJoO2DzWhZy66ksbAA6Yf6kyrIvn0Pr1//qAEywG/xCHzBtQLAZFbw3fvwTj9wCiITWHCo9TbYi/Vx+wYSNQIxVWQtK1Y5qDuYbQaDBxuDp0c0BgSMHsM4b9QZ7e/A/Y2mpoL0YMlbhVkB/0wguzVQcTTy5YAywN1IKiHRpaWlJ0+eREsRy+AXo6Oj+ld+ArUEgDBZwEb/0fJDXwQAr8YHoUTh5ZcuXQLQOYGXXnqJrBbQAW7AdCKTHQDAenCHl5ElEACQjEhiSFwWFxeZFa+++irRIuokAHzp7sa3GIgYfBn4DYKGd1E7ciqw4aFfy/vN0oz6j8pHvb2mpgaWQFmIm4IKJyJccHyD688/4Z7IFOmSTkE4T/IAB4m68IMbCKGf6ru8dlzOnJFTp4Qqnc+n4iAlYOY4pcG7d+5kZwveWlYmVrjfYcO9/kfYPzci+m+x0L9GIhgaLPwMPnSVhEi4HmdOnTrFvNCiF65Ojs4sYAowX5gChAFuBEkwKtBx6prxDwBjY4RpaDu3mYnBnfaO/tTWrlyB/hMAApNXa15ByAFAuKPc4tUuoMmflLpnZxsZGQSJOaP2Yn1dIpkCoCVVVeLaVH5h9NsqEAHgy9J/NPzw0/V6sc4TJxr9/qA1JOjvv3U21P+X+jMzz2292PXhxe2Tt1871oM6GggEA4HsgC/bxzeMjF1oJvBoGER1dTUg6+z5ISTAMpjzgDKvIc1fLv3r6MhZjBn9cahh9XI+DofGfcGaEydOHDlypLiYfMaPry8rRY2TwRCWeDFsFIoEV6IGoA1C4FS08o85NGTQewYPQOSXg0BYmVlmo39cY0A4QBgb9Qm89Pzgr+3SToWfG0GVBVc57MiVuS8U4bngpAKU64nibeNtyMI90uMhAEAvoXfMD2ailnrJ7MU2KgAnT9IbwivkGSlJ7+/3DQ6mZ2auiPvOX255YehvrI6vNToiZ6QtpMLgO0AP9KNwotMyNezpwJVnnhIMIP7IQcxTAobdGUGjRLwDwPw8wM1IkjQaABji1ZCfSfaQ+ooeX0VLIthT1Tl0yKUjg1AmJC8hwZidfTr2/vXuWz40I5ICxKNoVaA73XdmFJePHVvXUrA2FzJSux849R8XtqDF4Kyst/mWfj+jhdH36wPTTxaebBrxf/X/+n/f+UBJIJAbQJET7E9bWcM5Wc2YsXgMKSSUAXKNr4SBLL7F7/krr6EUDL+2Gwxuy+3PA0DavS+kf8R3r4aLozXBH6n6cibKNMEayCY6g6xkgD54hDxFLky2CxUlBSYGaHHYdQ+rFmh/oHfHnJw00BlF0P13mjtJEx3z+KvWy2j1SIlXDFghw91I6I8NyzBNn/3Sj6qgsKLoH2Zcc03UYAyt460DMkDqMC7jaEHisMj5DzIv1x56yZD9VrPf8rmMFoT3M2u/970Jn28qMX16ekX0T97o60sU+k8xInVDoHASU1F4uLDa5oAEt5wMcVPgQ7we8sQkIi0mlYcelZeXxzkAgLg69BHBDPFmPT2ofcSAPW03Kt+Q6moivbb3msvlU9jHpExqmzkhJ1VSt2zeIt+Vvf9LTpwwR0eNhw8n79+9u0hOiEyB07guBX9Ow5/kNGsZYJ1LwfoRDP+sJh9a/nV3O65/Xd75OgvDHlx9cM8M3ssO3ssP9gz2VL5X/WQurfGdb83l7kkOFSQHJDlgZGa+LH/3vNVJVCarGIi5YBn+lGSZPG/oLfp7fRmvF81hjG6b/ps296du49VQoihFwHRQEkQEr8XLiQFucli4D3kxp0eIgv4wW4glIBGVA9cBAAPWfwUhEX5jzs8niLHJ3MSt2SSbvMOy2xgQIRK8eEPTp/ef2bctdZuyBFnFiAGEZFXeOIQDmbZ2AHATBvAvBjdBnY9B9V+WG4rQkyfcqbn09GfDp4i/WTaGmW5Wfp1aGjWRThxtDUBHgBUR/DkvL48kjIYIWckQS9vb20mImUQcwoE0UMQ/AECQGSgv3F0dnptaKflB/I4cmabMw0wPR39DpmRKe86gIRMyYQcAeo12Ze06mHUwtzY39+yWQMDs6jLa2tpbkA8RcJGQ4A5RqkDNodtfRi/QUpjJkeN8NEPcW0Aehx4He56VgIMI/v7g5pJgxZF/Har+Sdr75w//mZ82/u7Gnh4qAyjjhwKWpaSUyuoGs060zI4E8rwp6GMaBpR3QOts9B95yR8m/nirc0Jz8F1oC/o+Hkw1AqbjXsEEmHB0rQnDevgJY+INmQZMm5WE1edOtW8liDZ6DX1huO38IgHYL25tclIXNGk/Ow1rRnq6SbKa4plFRng1H4OQtbR+jc4INHKG12Bl6PB2rOvzNpyYz+dR5yFFJSeT5Qbiv/66ICFbA1DY+EZKhGwialVK/yWtRnZoRi0rc1YkNeRZ6BGzj0wXqYcMLMIs4AW8jESNNJqjOJY6meeW0KQVUzU+h9ybn1PSDy8Alz0S4bY2uokKEjoQrUFsfoah/1252yRNbdKGmDgog+AOVxCXIgBAK3Zn7vZn+r+dlVcsufn5eUxz0LQlFCJoUjchAHgpBWsAoEjL1FwH0+I5Y/+jTW7Lv04BaKsESx8Ge64GQ7Wjhcj87SUl5u7Ar3T+67kn21/5+mxGdnd20PDXhogBmaHp0tCuQCDHKJZVDT0HeQfKhrYDfSaFBH9REp0iO79HJlIhiNc7pf92//wX6G8dZXrCLz4CqoLLgt0iAs1hPcvhKMMwfk/OSwghfpAEKAMiEhAA1uzpvqQxQAyRK87X3BfGMvT/vtj2R9xpfvCc9nayHF0yrySK1cRGdrZZXCxHJX7GB+jqKcoYhAENAExYIIDMOBBAWI92VTSdPCTcrPWdmp7iTiEGyiqGSM1f8RYR4fUcCFWMKoLhe2A7Gg+1PZI5YibTmTJAhG1OGHPisP9o3aAdsqGM7imq6MqVBabE8oUaefmUtraq/bEVr6eW6JiGdMGhagLlSv9XM2QiXkMDKLOJAzmcy+g9AKyYqnHWDOThcWkFlBkeAwB5Db0WRVR64NzPIcYT40md1AExXLUWaenKGRwCkSnwJm27PD//s8eP/8Hwx29l7a7IOpSZmQdi7N2by9/5mtuu9U3SJwD9wTyXgjk33m49uz/5xKjKvx2gv47iYoJcoKenem8T05l2qZu5It9AmuaEzfNaGkj0Nx2a/kUg0JOT0yPCCKzOVdFPcBd8C6YAZYCJ27KJUmllEJg2VtIReNOwAsCOVlv6Z76a4t34CJgO3Q40+CMjoN5Q8oXLSJQG1nMghxMAlP7wtiQxsKdIAcAZA2yrlvsEgLA0Pl0rBe4DAKCv61so5XHbATVIrYZe4XLm5xvd3Y+HMqSa38QuOrQRnN8TNDQ+DNykv479E/juTBw6Z2iXgX/QIkHMwVwrUOzxkCVZ+2Rf/XQ9EjMXlsjKdV7WzzFHFOdWgjs7ZSfMhqSDMBAlIzD37OFkCY0ydGsIfBC+C58FQ1zJ5nTYJ/yWhf7GxtJ/gDI6aGullhUSRPsTFvTT2UScwyIEAPrcaMNjxa/KazT20Am9phzKy3ixdlVwLO8QHwnIJgf4kw74OI2ABACEGjhCVPs94Iv46O4pPIl5yy13UF1jQVedsPLw1q5bQ8hDh6sFsrRzJ/nhr8/OPhqt3TbcmPlgIDNzICMDVCQG5LJMlb/7UkcnuV58Z9QMXN9DKVg1ekgHczTu5V/rzVO7e9F/XJZ/BwB9xyBfOI+y87inpCQUCISoxdw0ZGmWQfZNf5rfH/DnBJpJEOzFw4zfvzpx1m4BBBN68PEw6AZ8n5+I8vwGMIVZK7bSdWrT/6dL3N8kYMRmeKoyHREhGhFsIDISvZH5cqwuFmM7I6U/vDnhTcLs8nMyBRUtqkHJ8sp01R+ePjXNZjfm5Yq5r3XIw78j8nfkxnFR+2rU7b50OOuaYpbNzDxNFrxs7y4EIJY1dkxOttUOwHGnquWpyMsxathBglgzPXUU1ZhfTE/YIAGAi0sCQlSAb+m8QGFhyrlFMkPohmJJFw3frPlQJ+EKQ9WdERpvofsQ6ZkMDNAB33Ill50holeyuEKkgGZhIeBvjHHmUDFQDxWLc47QZrNR9+Jj/cRluUwAYBwIjCn019S4EuQ038JEhDSdWUlThkS0HZbxSr0p2rsRtxrAbatb4m9zMzQGbN48MTdBAEAFii4AsJQMnv6MWi5yfy30N+1bSLsx0E8MuLi/de7Uq0Jn6JEjoAzXbHTT/ODszwZHBjPOTWZ9V1cATgisVBo5KZqSGeAsi8IYXIyoS8GzVilYB+x6nVb/zrkt/15zQL8pUinCOQUOHAicZ60WqP5z3RsIW/q/QMrj4PG/eZwY4GcnH+vA+ogBAOhHbIHpM2/pv6S/nrYz+j0QhSB0zGpmO3I8QScjJ+MD+UDp//Cxg6Loz8+Ybcwy+I6IUGOEvyjTidZAJaU/vAnozxvqO2sAiGCH5TDlpcfm4+mr09P/r29afuXvyPdJm8/8QW358QIrYC8NbnV1wp4poD/4xYImGtdIVBGACABM0JHe3k9bvv/00g8Sk4Ra81nPG/C2WyGNTwIxAwGcC8YIWyISkA3TV09UgEqjCIH+/InYQBBySWih8/R0UocbM8bqOuvo0+U6E1khBPZCMDIt3IYuXtaC0fqJZ9A+ywI6idqYtegBTJSnrG2qre2Q63+YWQ3UoGXBAiNXWTdWDDCETjnQX8fe4jGFfoZLejNjGTNR8MElk4jG7dCXsYSTA9XiXATOx9+IMBbiTs0Bt89GtIu/ECvhJhl7yVnA8eeajuulHoi5uv36XNUbdIbSG2TSmqmBQ9oeJT8aTBvMOhFW1lrAQ7SCpC2q+LonFYgAcGtdA4CWf13qP+9YCP5QRHFef+I8sp3/DMlfsfXoEoazVpxZSg+Q+HWs9RAryqeQBeQXujA//vhj6APeQyTAddDiWXLC6jBew01R9L+XPSsVZwX0p0hLDhKz8UEIx0pVtCahFMaDcSCH8yYEAN4TczMBAmaAln94zIx0Tsv/mxZoPy20nc9igPclzfS4ccmW0P/cORrYkTLIuZg7NLuQ4dO6MHbw4K/UvfMrn17/K7GUgq8wpkiphe06mCzwZ+YGkwG9iVQb+s8nfvwxpJrfA6OEfUiVuDYAnWofp0LzRfNo83sn3qPEgiptbwXB1UYwHPrNoZo9NUeMI2wNcEJOeG4QTz3SWtrfMjTUPjrKGu82vghuRngHDVZr8FuQBZPzM0THJlnRNn2Z+k+jNIL7Sv/T84cV+okBLlsUVVWbtUzIDi2LXADA7Fdi3BfeAVMVNJ57AcEj+BwGWAt1YkTntiQ1DKSGQq0miG2UfFl2SPm3sqzsW+Xl36qqylb01wBA7mAM0pVcmknYYIQRQIZ9AtFlnloKZuwduNOvZQAtBa9b+ZfTdxMAitB8lqA/37l7SNOPVY9ettlPkwRKmHr2c2YYkUMNBJmOe0ATCcXeDRRXQ09E+YH704nfk97zufizvRnp31yS/kVEsZvqMbxDU9RoDbmGT+Sn033FkzkPZ+bwnpibWUsWyAD0nTUFwTE89fwDvNBubXPjjeH+oD8xAGi2PxPuAxCr93MR5YP3xbP99gE51SosfKOTmozZmT/Rmwvl5yJQf/jgAzovCAP4YVQBAInsZXl5W8e2PR17Cu4X9Pyenv/15/8X9xqf0QCA0Py1P/u1Uz87lbsvt+RQyUtFL2WmeGk6IswgANxJuhM8Hmwba6v678H5U8Utl4Kic1tjABH0eaNVhGIhHaTK/b+9agD4rfJlGZVLcF8DQErOgEI/g5nv3uwePF1tZ7fhRTZ9GeZ8h3gHAM7JNBls+oFzMKLq/GBqkpySOjI1UlKIJnqYjBqjqMyd0jmSPnKm8Iyf/S6cDQCGAP3EgNHtg0A/VMaJNni4DoEv6IjS7HW5ui0EgwAQ9+5PO9UQF/amzf2X34ySZf9lW8FzCXGprP1hSOfnz59n6S8lPvt5AMgpugUQXVg2/V9ckv5RM1CEKRpT90NqJADQI0ShWHeQ3uT6+j+1jMPtHFZNPJkeq41MvKe+ebQrdgxHt763ttaeHu42VXRIDjcgn7orgOtAf4dVFslkg4yKjKCFiUcL7JYT5SylAR+Xb4dF2gH/APpJBZBeKUxDbqBSTCH35asENv5qaPC3tnaGQjQGfLJ3LzIdd5yrTaAl8frWz+5l75nwHxjLy5+QrinySoq3UT0UhRopoMl+c9r9kXUs6/T583I42fzjZut3Gp0xwNi/33webd+Rd9CiwaHvWKmCvIgAYJ8Sq6YvG58rP3LggUI/MSDaYpm5ZCpvqrkRQtXC3iF+AaC/H3/Cgchh90g5TQI+0yfRGPGDkchIFIZt4Dv7jLOdLNklvRzsAQajc65IBP15TVbWDK4bRv/RD1T8FxRD6rcMzJMKVN9dP60BgPDDu8VunJyu/g31sbWk+/4fuH9JPDYx2eYOOossExHdTscmZTb6Dx3dr7o/FeDLFy8i+KL8EjPQ2XEy+CCBRKMIC9Zd7s4fhviLSyaeTI8F9O135otEpa0YEeb319xvZy1gLLNE6+xAIUx81Y+tgPtQW9PI7cmO8yb8TAP9V6v1IzyT63FmpAKor2iwLgMA6Yzu/Y4LkNH4ExJICr9dVUVxyM4AyBrfffCACvCdW7eIdiYQQeg7exbty/1yM7plaP2g+Hct8dri6dO9lZUdZE6BObPYFBH2e3LGAJuczZgzU8YU3Si/Lr/+HVQJa7zA5h/muco+/Jzd2312SfeHA0RrSmWcbMYNlOvLMOc7eA4AvxK2K6DcE2p26JqJLS3lc0dLTehNPmpGtNU6hpmQwEk6+Rl3kUXgAP3BnQeBj7DandJ/hqJ/mPfyB7x6dMJqIdYKWJSmpWAGa3Sb7X7QkpJ4qv9zOfoRLuXRGnkx5gRNG/3bDs6w0T/oz5q9Omv7aPZdYNcR7U7jEPptWINOCAEOQOHXXnst1V34TF6y2SUDU7w924gDbdmUSgbvSSrjHf01CYjatMIl+CQnoWWuSGibBnzH4/n7Ebq9mRQ+n6bMzF8EWEiJyy1Muf80F7H3OxXt4vx8tqOhIERxiGAP8dcisG4H/awsfOUKz5YwqOcTwiFhfHfKOS4uIvVSbZghDMjJU7oHXB5y1s5RU6z/GWYbGYwjBmgtFcRgAB18mnaC4Lxfvn0kanMDoL/xDP1HM26cq0lT9C8t9fJkSHQbXYqvYo6aG+FITd9BLU4BQDuB6qequ7r2/OPiouwiSj0vyUsSpalEs7Bpk9ZriQHK/9hGHCLAYN4iKIc916b3am9/VT8L6o4sLRVxCuwMaMeEMh2vCx/s9vzm7puq2BAA4rn9Qxj93/DWYDR8Lv1vC9rSf6fV88f+tHQNsQfD0aNH6drUAEDnKFGBvTxVDmInH3FhduEX4NbWN4rS3nYz51i79Y33xFwGIcxYc9uG3xT5b66anLXIRRiSXds4DyGYRZZID0lM9ofWgFjNidFb9fx0uLoCtKk2NenzP3b5fOzNp7tRhu2xQTxgiwJ4gPZ0QQv41kxDMgB90J4R8euT9wclqN0fQqoE8a+qAuLxjDzZKXqsdXQb7+yIAXwEgAApZN8hPpxGcJDhhdj/UwATOgimWSuzWPCdc0feq64u51JRxPS234dWfeExWhDGlNlENl6jLwb3ORxjbnoOAIOyzHa2TX83UJj1s8yc/J1l/T7f6e3RVvt1JwmGtmsi3cAS7I5sfurOBM7yHbWBdl9799/s7vvzfZVb9A2cG+bpcyQTpSQXDHcW2j2Wgh8trQomsNCmGoMhuWoysX9ws7P8u/HtvnHf7vpfWJL+mevt778P0NP0TXsoWAAiAAd4GwuvSNq4a2+//bZuxEYxwE1Z2GcZ7ZsQSbIHAgn/weESpeH6HGgvftF+UE7AO/ovjwG/A9FhzeYNLXKJTmISHIbnz459eyElkzqUIqoG69J7cV0q2nwrvaHQ/xVvDYkg2zfRDkQqwKPc5ltbaeekMcnNk1aZaez4gpRPXEIp50BKJrb6SoMW9N8OA/eIRgZmmFYM6N3d22/2PzQe5u6xE60XYD+VBX5oP9JY0tgf2pFc5hs45puoyOCa53jb72Prktmdctia/RS8EmMuaJVeD/ccAL6//OEk35bxhl9rvrD7g86yTvg6SS5JTrTNegxokb3zH/+yF53zNyYwnkRzuq4+vT90/3rf9YbdDQNpA3/23LmG+U+ZY0wwEgncGHxCeKTd4t7WUpQ2ipPiUJ+9l4KXdJtYA4C+ibP8u+FNd2Gy0X/wyF5t+uQn/A6JnyUC+CJ7NoAINs0HcFFg6CNiTzdWonP7CAlu8NdejcyiM9aa6v4nWoeIdkc5jqUorRVp3hP/WbMUYUSLrylrirCi2qZz50SJ0WKPAZwTA7MZtDsxCyWLPEA7BWgK4KbLKkYMQAUiHeSycwe13sD0JsJLRCMDIIen1wBMEMR9GlUZDkNntpMA7N7t2/oVeBRG15n+UFZoNGGY5J+ZytEvxJLkB99RCJb5toW2f3az9v7Y2AEQSpU3T4nJdst0Bo1bxuxzs6SGV+pWvjssiyUA/CAM/fk3Wny6pD8eeGyMf8A5QrdNdJJodp3mcuAszPuhXl0TZvAeglBpZmQZzxad3+m6A4gAKExpJvPDRw/v9t29+qevHk87Xu579IFFqalLkWVC9ZqbrYeJtefKuQrKtmF6W6ylYOgPKRxkJMbyb7ej/LthzVhhr//WA1NSUaP0HwpJjxAUm/BMvg/C7nt+wlG6100jgHKIvMtl6EAG7wO4oPsRV4guNJXTYqQVaffGUQQeDtczIQvhbb2jv9d6gAK+Bi8YCqGAEe0OPHHeg1hXxjAwe8mMC9MMHTfWhzCDJpEZJS+wZTftyoAjRgYHJF8aeOCByAGybR9vsSJcEgM0AOjPe5A+w2gxjHvG044z7F/CXkcm8xZAekH2/STIsfV1PjM/mzamD7bf4IubwDfn9NprK5YmjIi3Trd/wEREM2PmnUQ0XsDLMBFhhuq6yFgCgJM98Q/9uYtGHWA6Y2brMJMN/Obz+Kri1kjVaEiAUfTfSOnrmyHLpGeMOcOic1aQs4Cwd6yXh3sQyoAYitrDI8NdfV1Vf7mqMquyfN+tu3dyttdCMBGCUFpBV6kfKR07e5w2OPJNz1vSh5eC5/zNdj9oIBDr3p/zzvLvi4f4yMY6jM8DQOpde8Mfsmvn6kQt0oQ9dcveM05XYPFKl837MEfd7VY3n9A93UBw90/14hCUBzYB1QDA4bwh2xV4vQzeYwAAqyNcD4pg9SJH1w39nVgs0bXJaS7DMJKStKXEbQ+iHquHRzTUKGQTRqTsxBSsgP+J2GHAMG7+E8NoNtJ7ftj5la88IvMnOYk1fHu3VxQxq2WUSEYNiKjWduOGQTzT3TNZCBKlMZU0MyaLBdl1yyzYfQRSr/tfkUZrxsaxsLH4PxRe90ln4NzKLCJHs+Ucib40SNr4Pn93dwsLU1DwaZKGObGCfMgYwuOa+5oB/fYt7alm6r7ZfW/JWywxr86vzi2bnx0b+6R5562PR5INYzotbRLFn2ZquD89A3iBw8zYVCBKwbEHAI0BlH9/WfSfB/LApv/z9oY/kHFH274uLUmwbMWeTu3FxMSdIStrIREWjwezoT/uC3mhwOCmh4GN5NiHgNoj8UNrkmQPvKdmAPEzV26OJgrGErk4cZ5RoBXhSCh0n4RLYrV+MqmISo6KrZp/qy7hLjjzfRizU8+M6jricoT1qLp3rAZ+LX6s2ZVJaQIkIWLaCQeXa7VrRQz4PAB0mfJfpel33mgy9h858kdLSy+WlJzZv39XnKK9d3KAOsIzRLnlOvqvX9cAwPDQUaKZMeksxS19NgAThNqbrGTspmVLr0QODtQnacc/AAD5OogCWlyKaopggCEkjXl/71ZLayuh22C3NzyNbafQfNKN9CIpGpXRxSeLcBWqpvyeDUkO5B6Q0wvMLbR+hC6YAhcXBUG3ujVJLOJhbGSoYL3vUX1fLKVgkhTrcMq/GlQ2fvkX8mKj/6Oy3WI1ffLT+YgYDM4+bxnNBmGL19W0/9L9cjA4DuUE/BvfpbmIdlJoDu9ALwBVx8hOTMbAU8D0WWBEAqRPniLJEwV0Q+n1sciNLaArGEsuypycpSGU/1t14dWEhf43iFq8WQxdQLzJG6s/BUub5DgNjOSbM3GHC6pfc3vAZXilPkGaOC0rGeRUNwSFrsIF+P5uIg3hhZ3FfOKj+DeBZsh5hkLUc+CIK8aAQv7XLmadKRflo2Kzt69j/1uXZo8aw2XGsJxhWVKM0B97DKCCUWlWThjPAsBHEx9NEgNAfx0Q32hMHwBAOoskzqJLElz6L4gHK84I2A95MNqp7qmuGziuwzOB24XFQRQJAQvtLWNIlEZ+Ak8Dx/s6O4PBJi4LOwzW1Jgiggp00Dz4wHhADkUqgH/ohrT2w4BIHUh1IBsEAIKBGdmbvSYBCtl9SxoOAcBz9ydv9ctC/230b9k/IRVvKP136sVoMkAz3TUwEa0HhEmQ6P4AAeKj1qDEtYHaYAdvSB8nGQC9pKQRMEpwBzrPTNBNKJ0t/+QKnAZTgl2Mrl27xgQgZtCLwt4VNKeiIMkLMtU4YSZArjbSkOQCu+FxA8J75Zpc75KbY9IWw0KwW1RgIZ+rPFywrY0gSZMctwdEEa2WutTW+A68GBwJhQAg1v3BK5EmwKDlGzqRhIFTxGNuDQjEPOVwN+uy9speHmLKBEF7RMujeZQryIH8DGOTBBnaUgtpBgVV6669XzXzgwu5/+8/XTP+lGH4cA7jjJxh97oXvh9cQAKaAQBin/R9Is4YwHBtTDQSWfyfi4+Ta2bMtGJ7LmcMgCdx8TUJRgjlNQRplmRybLwDwN8WWrX4VgzKHdrPo84UtUHQQiG4yZ33B3btGuay8Jik8nJutJASHjJXbY2mriKMNTL0vZaqesz6+SPPCwLqQ45VwdF8Te6+ij+p3f1+qdz47f+6fdXnAWBrvS39MwmdLAxJEWGR1BK6TbKJX0I0gFqFAAgILB4ajgijj7AQ10a/M23mIL5mFfg6O9NRzoJUKu6QJRB+yCrIEYEYSkTEBv4KLQL6ORmAiYnBgySJAfo0sRdl+lxqfIilSybgSys9lwi2FAhoumzofhH8+erVgrq6vKPp8kdF/qLnuD0uvi6ehiEJSc4GSkV/lnHRyM85aMc+0Ox+SxqwGFlVGzofdnVx07lNKDxAEveXkg8hWTeDwxNAH/YKBaf4phA1QTbks1wYnA9er3uOjnC50tO5SswgzpZACr8E4QwIH+GUi9bWBtel889vmmdPs9I2+c+IlBdf1eqBxgB0GHkh5hCuWCOlOyUzbrTcsNGfgnCUMHlY55Q+7Z0pwDWHe5EW6AJMTbwIvXAgbhAcCI2orKyMlJpEPH4BwPhiva4O6toAsQ7xYNxaxKzBwenHj69e/TQ5ecZq5TaIAVGeNmcD0hpEItyVE7WhX3/GWgq2+0HxaQ+rfxec5d+Na8w9m/7P2crPsmQfRZ6cVFvClWvoQwVwRBy0wTJcEIAgCY2Wg9MOxMIC/BvHJYGot4yUlk/kT7g7EK8BACUavwd3ECXQPTVZZuNScJ+2VGKAvEgjIwX6AEBoN5HM2hgafRMIA7yYLIbBf5PFsoDl4O3bVYf+4EzVr0iVeLbUf7d36wc7t9bW8rZ8JOm1gqagqPBP+DIxABWorIyBEs3Jud+OALenDZQ5xhsSlbnyJGpkXSRkCkb8hjhNAOaX7A6yyOytrsZ5CEUuV+SQ4h+RIyzpAjHZRGGcrj5yI65PMIj6JLwhzVTUBhDTSKc6OhKbm8tmisrN8sqWypOSeNRqb73SecUZA9CUXmwMSDQTK40vigGtziTgxIloWibTcWwyYwgWrTFkxvoEPZIw8gPmHf8kFSbxYrJwL5QAIZwyQ2PtbQ1H/7AAYH8fzwat5p1mZgYWFmprL8/OTo2PE+YNzpzchaUeLjaWNjo7mVZMJWBIvvY1gMLGfYaqwDGWgm8ol/cWAKD/G1//IZmz0X+gNJPZq2M1SoL/Ab64IyQd5yMtoPALK0GQoRKFC+KyAU+Vc1RL0B9qCd8nfsDuec+gZfg6/UV2ALD3edZFZ+S8iEh8LmkEUUpesAGzkGboDcBFf+oD+fBDwItzJWPGswE4HD2vs6OqqqOm5jevVKVuzdk67bl1rXzLlpFDWz6+I2+/ja8BmsQb8JrJBe4zN/gp3A4aUYjrTLqoLDeXA4FgggqxpK21lTIA4ZYbRCeYbgbHrad4g/pHaGGa8CnEgKhgjg0FEJbpCIJ7sSS4E47PxOZyUUhAC+LTuWIjI0n9/bnzh4rkdTSWo3K0oriiQBZ1fQM/67rqnDEAZvpiYwBB6IuCsDnR54wB0bQ449t4Oy0VUCsVgki1ycDQggjA/IlJx8UnJED88X8mIJtxScyWtGIhhSitA0mEEWPnLY7C3YVoDGzZ8uGNm0NDffgqfUFweYpAJAmkg3yIrf2aJvECx4YNwEt0mS0KJ06e+MYbZd3dxxwBID0+peDB+j5V863ClNvyr3XI/qHkjVX+Pb6G9N8sqSCFov9q6i28D4qBUIMaoNDM/Mc7QW1SgTfffBP2gRSDO4onI6vgTYjkEH94jVaGSS/QfBAfKAzg9KQCYBAMCJWJD0WGQnSC8uS547ZrTb6t+pIYDK0MAMRXyZPxYUoAQ2MXL5JAoc/gzZmbZgoKZo9YRZa8k6l3A6mpRup8pBrApgh/SClJSZlISZk7LXBn+D5ArKAJ8hB/EKTYiRo+zgkx3ZhUURrH6pNk8H/QaJ5Hh6L5MFFnZ5mQlIj4UihFZHDMW16gnyVRhmEgmywZ9YZ6AAuDe6eRg0ZmpEMfA47WnCEH91p0ijUBPMOHdIYXS7HYAYAzvPx02pBLdgwAa11dyfj/jbkzRxQ4aBzUGABgfjT20awzBnC5XBtzCvQnLQb3cXUSX2YE3AsyBGFirjElEYUgZ+g/xADmZjwCgLEyW6T8SxFYtmy3K8DeDe85exb3IpBM79p1ubEx9DZ9QRPop4R/ZpHPp08EIkbQg0ifCZOK+AMbYAUCzAZV0Oicyp8rKio0SkOho8eOHU1JORz/UrAOJkA03Z8brvz7fVluQQla6J96U76pHTnAUmSYwOFeffVVNBkAF3TW7aABZeCY30BDQGSJwfB1Crm8lf1cYkQGNB/kZupdBADyAD6O+UDyQQZA3kAS4H7Xwx9EFFT07zEbJA+n1dYP+4HAnPwYhIYaJ27BM/0RQYdytrO25k1508Mppyz9YUfVjq1JlcwWtDD4BxSJqQIEM610Tx4+DMWVYOD9ywBYxFe+CeIM/Au5yQ4AiP6EB3xGnzbjNfZXSRUFYfZ+YP70Sz+Nq1QcNQBANvVRw6wW4gWsQ3LmpNp1ynfkfC6JGAxp0BhA5HB587/n0WlSIjsMtQ3QH8mEMzHvm3J9XnZc12JAVCtMaWxDdoMVkYEB/VB+uL8GACYCUw9K5L3w674LiCUbOrQBlNsf++aTgmhLroeH+f29bQW9XV07Pr6/ZyvawmJaGt4VFgDwPQIAOXTWwD5aFLLxSwhIN32EZWWhlPRiiY8p+tOBGuoOTSmmM4WWlYLTlnXDaQDY1j2z8QMAa/puytab8o2bIrP2Rh0u9tLA4eDp6Dykn/YDYfR5AArEsRsEv9wybS4izDgDAHIQfq+V4XjEQbWt+sd4mT4Ckp9kj3gs3TG4Mf5MkQCQpMaJY2dJyaQxSc4V7Smn2L81hMa5PRXlzCCQWnQ3ZuYoM4uLo08B4yRivC8qXrNTG6k3X4ZJyGzUAAALJPbwQbwmNqOHksHmbloSmLW8kgDAJjHwfTJpNCLBzHBdkgvNWWk2cFHE0CEDZ8QgeKx587/n0WlS3DgMBWF+UucwOe8gV5JhEgbIzKLrLrMMjk/7A2k304HMWyVTpp69f+L6BgD28GeA/eAxg0xT4mFkjjAlBEeyZdBzvLd3fGCgDaIxOA7k85Bvg++akLCgK1MAqcJ0OZWp/RZgLLwjdOBAt0hIJF4BgHUsLEeAlfjmfXPdczD6FUvB31+5+zN988I3WdXMO2yg8u/zvPwJ4o/sA/oZD8WL7bdM1tkyLZP4WZmHv3g1XJWF7gzEGBgzIAxa4sI2hrHS5ZysCQTfDJ+G/GrF9iMGsxLxRwMAHBOAjqPB+ZinjPU0UiKGRGWkIAw1RwxgnCGtW/1KYl8XzP0diHwTVsbMk3JSbLtOAFga5RKtxbTDT+wBgEQGBYsCy0Pdy406V7wMtoL4EAgg65BmwvAJ6bgyAYA1R8R26BPezOzhlTAOnET7lPXG94O91hiAn0p8jOXHzM9SKV0ILQjhpbtv7QBA8hqqku4qYiTpqq5f35h2c2k0/X/2zjOuqXTb/98tVQIiIFEIwtBU0BksyH/G+Yin934O8++99zf/3st9dc+r++b23u89vdw+fYQpeKyoY4NANIAh5BAgkFD2/V122CcaxBDAwjzfWbMNO/t5kuDH9XvWWjvPYtMxyBXLHgX6Z6LA+YONnaYBRY/rfVjpWZR7NSCrnM1jEwA1Y1eeTq7t2vDL9Pdz+TKlpdTVablBeTnrR/5dsbFMsUUkokhTAkC6AJSWpi9tBsEJAnazYeityAiBf8kCsJdUPkEKQ+D/BH4I84RzJUUAth4Gw+K9GvAJniTG79UA79MjADXUNNHUSmuQ4JWzZykqkptWlC4BoLGRj32MjUITao0vy5jBZQ04DPlsNP5ledn7kGtkTzgjKd5/FsOjx2bzMSzA6SdTAIQ/RQM+yxOIZWOzEnL9r/LqaU6f5ez1kusTjfXJL+996Ut0dbl7ntiPY0OOF+GL8CVo3vA9ofI09bKVsAJR+B58d+m48Ij8wzeWrAS64FMYDAbDZkYAoprqk5wspLCKqtbJ1tD5UIzY4qkEtv0kyKoTBDSz0cylLPCfXTVEWOCR0YXsUWEwGIwAiDrqlJ1ppDFAIEx4hhkbmyeAO8uJoBBUPuKY+7kl+59sZQwGgxEA4cFzhCPOd7hXEQCbrYXBYDAYAXAppljGVsFgMBgM2/jgYDAYDAYjAAaDwWDIxSZDDAaDwWAiAIPBYDAYAbAet63CJPwqfCq7eTIZ8+mlF5jkoSzA78NXV3659b6P1cf/BfwrqMrw6lvw09Cx2kUrzlMN/xpezuqtr8o34SXIgb8J3yYD3oP/CM9k/OqF8HfhBxgMRgAMW26PgOqkZUb5sqViZf0q62cxy9+WwWAwAmDwyTJ3zWVQDhWQv5kyk6m+2EkzGAybKgAG60l8YYt1sxOqwQeVWQQBmeFdfomdbCyLj14ADAbzRTD1Zb148eKdO3cANahUJ271ZmIjGGd8lFEdo0RnmZ1n3sLKI6+IolJKnW2oCylkjXzjgUWAP035qLkNNLTRth6nfP48AwPMz+PCp6AEhy4E75DOAvQuT23VUbeHPcCtW9y+rYYLJBLk51Nejnpt1dbauCwu6iKGh3UR8bjT/cNp/7T6FqrfIYXqS1TfxAchnDbWxzi2gx0P+IDlt26VLy6Ww0hNjfrLprTATmGe+Xd59y53wfH+OjbDIZb4chYi+IekYzNv851FXHLgK7h0YTAYNl4A3nrrre7u7ps3bwLqP6nOZB//+Mdz5H3WQT/9t7g1xNAww2HCEoAZZlwB8OCRY5IA+PCpvWIzzbvYtS4BSNOAfPJPcUrT6iXICgliby+vv87cXIr3536P9I3VdoZlG9vUOehD4c+fPZt/+bIlOQmHkwLg9dLczLFjdHQgGBriwgWuXSMQIBJhdjbZ/2/PHhobefZZXcoD+MP7e0i9S/UrnE92wZQWnuQkaYRC+oDlr71WPj9fAXobUhm9pZWbDL/GazqC4/0/plcBMheAG9y4w50o0UUWt7O94hsVPnyS/7TWpLOL/GAbWORadAFGAAyGTRSAGzduaPkvDXjnnXcAtaLX8l9tYNWNnqzQOvEiF69w5QY3/PjvcCdEaIIJVwDcdqC72V1Djdbp+9l/kIOHOSxtWJ8AiCj8mdP1RQJTT33WAnD1KleucOYM16+73n9155uuAe812831wfpXuyd6e73nzqGpRketeFx9n/H5aGsjFiMvjyMlNzl9GglOXx9SiVDIEYBkA/KWFp2RbmiJ/vBfSEXFkgYUU/GdnPDkl/myNHieeckA9xIMSuTKL18uv3ixvLZWg3RmZQHQDAECL/NyZBdUf1mXpnYK+j1WQ33A3+O9S1waZDBCRAKg+M/7DW8NNbXUSp9kHjzAEEMhQhFGPFws4mvSCQwGw6YKgNb7agKutvRKBAGKA0ZGRtSwm6y4zvVees9x7hKXrnFtkEEgPz+/vLzc6/Hm5ubatp1IJKLR6K3xWwoRCilsokkPbnM7RKiDjvRQIOt3Is8iAdBRL8Ea6e+XAMgc778at1d9sjpUHeuOvfnmdE9PZcHZpiN4CyiYZXYkPvJ+//tvTkTz8uSxQzV573rfeiuvu/tA/rWaQ5SUOM3TFvz+SP+liDJHytORn09ZGQcOkMZCWmNfmdz0QvjSCCOOyeGuJABF0oB/8A/Kf/u3S4LBSZ2Jx5E4pSLx1nBpwBhjVD+nadHkmREn3k33m7x5hjP6G9EMkqJiip0OdHXU6W/HSZFZWH78ffT106+VwS52lVPOClxK/yErnk19ZDB8QAWgsLDQ4/HIQfv9fpAzqtCPOsnaUYqgm+53eEca0EcfsHfv3vr6ejUZ17TFxcV5eXkSAHW+lwCEQqFAIHDr1q2+SJ90YpRRLRUVJShZ4cXL+vha19e++cffvDp91REAHXPIIWNsW2v/pABA0ec+99kf/vAbZMV07/TwO9Pd3Z89dO5TinLkmLWwjRHTR9bjN8JvXL5MY+OVlvkLpb29JxquHTlCfT07dyIBCIXQG3j7bc6di6BIxOtFy+X9+7EsVkc+2nHTly45vlt2nwCEw/L+0gCKi8tFzRsVwf80qet0Rm8gFXcGhDOtjpnRR99ZzvbQc5rTcvTHOa6PP820ZnuFVyqo0N+O4gBH9RU7at0wyugn+aTO6w0/NNqZgR+SBccxAmAwAiBqa2sPHDigVb8cNKDMT2tr6zNyNGvkJjd76NFaTxrgx68m90eOHDl48KCKCpKBysrKkpISVwAUdoyOjkpyrl+/funSpQsXLmig3OICC7nkfoSPlFDCOoi1xn7Nf/wf9vYqEyXvL3uWZ9eU/HFsaIhfbG/9RryFbIm9F/uL3m+d/JkPPX/y+SMcabQaHQ8oscwnP0Kk1z8eCPQHJ6+3e/s6OzlxgoMHJcNIALTu372b+XkpgR4Po5BpcFCPpKusTmWlowGKGIYjw04EkLb8dyIAypcJBv06ky4ActaO6VLH+2fY1HOe+X76FQhe4EIrrZL2AxzQ8n+SSQV8fvwyXaDgoIwyIEJEz77Ii/pF6Xp9gExSbjPwg7V6f1kK/w+D4YMqAKWlpS+88IKyNHL9zppdjlvugLUQIfIjfqQbRd7mbT/+3bt3nzhxor29va2tTeoiOUkvKU9OTmr5f+XKlT179kgtVIU+s3hG63TnBqEP8SHWwUzrzMxAixJbrWM/CQLkXDIaO5P0/goCRsrLv9HSEh9chwD8vP2Rlzrk1DrprKEGG+GxPB10yCm/z/vnphtGRv79v7/m/+IXbS3/pQFu++S6OubmCATQO5HbR054dJSxMUcAMgkCZNHIZUcAxhhLTa/J9TsRQFtbuagor7gcTKqCJCc3FzeH43h/zUB1S3LazAgR0ij5eun6czynX4KsggqFegqAZH78AQJ6IzojtSiiSLO30NJOu4yVaVvpVFYYDEYAnCBAWRpVAgAt1ZWpZ40ocj/PeQX7/fRLUeT9Ozs7dTx27Fi663dQQHD48GHpTVlZmeRnYWGhp6fHWQx68frwNdOcvQC0SABaZwcGxt56yw0C5HPXtPzX7yPxYktcAnC9hexpL6J9Lx33JDRssFCmW95Qn/fllwfb2/0+Hw0N3EdNDQoCFBAgJiaIRqWcZIBbBuDyZdeDuwIQiSR9vdSuqqpyz56qam91QXxHMBh1ztfW3r/8lxN3RYUVOcx9TDE1yeQEE/vw6uM306yCPyCBr6MuSlQaIAEYOT+ix5q/kEIvXl0jtXjw7QBd3MtfQ5YtBoMRAP6cnD/MqfrlKsTfgy74PJmjFZwcZh99ivQBBRC6lUjeX0cehmoDJ0+enJ+fn5qaCofD165dk5YoKSwv0ESThUVWJFoTcwPMDbTaAwOe21fcIKCSSlZDJfHk2l9Hu6qqv6VlzmqZm2sle9rhODSRRhFFcnkFFMBveDxSREpL0ys0FBWxfTuS0YXZWRIJZJkg3XDy9Tt2jESTdeBDHEpZ/sv0vGNJ1+4IwPDw/QKgsXpzzoSaOTPPjHw6zHcxDwVQqM9LCjvYobycbOL8hHRikcUCCqSIueSyGl8jhQ5kmWIwGAF4jzSSp0ohDi8h0v9Zdax6y/8Nblzn+iKLyvYcOnRImZ/jx4+TGao9KFBQ/BFQLry//87cHU2lisIAA5IBsiMHu9W2B1oYGIjd/nMFAY4AnOJUhsv/iQk41mK3tJBose08sue/gM1KSN62sc0RuW3bkpaOZaHzOmLbSXPJrBQ8Gr3qFHKnmfbgcQsAsoMHlwRA4NPV7wbfd867aJQzluo6t/yboQDkuOdW3QqutKu0dF8pBoNh8wXgG6TxY/gLUukEMhSAGLEhhpxqHtDY2Lhv3z6VEyzLgsw9VbVKBSoINzQ0KAiQ69eEmjZ7ARBN0NoqAZBduZHMAskUXnA/NljAyEjKzT8qg8v7yy7sZ71YYPPIcTM2+jyOH5c10ihtc8q/09P3RAD605ouDganHA3QKTf/EyOW9P6yB9G8yglrybZhMBieNAEQEXj5wd5ffJ2VcZaH8hjzzCv7r3KCvkSWxU1EultUA1USkAAECGhCTZsgkU9+9i63pYGBv9IAWxow7wQBjgCsjFv7jceXxEPef58EALCeSg1wb9ksLh6ZGnEFwC3/6knHRDVuFui6KwDu8p+SkuTzVVVkw2oRgCvBBoNhswVgkAcQgSgFrJEw4RAhZ5cYr9er+3+0nGftaJRuB9IMBQUF8Xhcc44xpsmrqCJrapATl/fXDgz9ly5dJXlH0AEOkIbfnxSA99+HAwdsZ/lPipI9zRowcn3IWcsvshgMbnMiAGmcKwD607Gzw0kBSK0Au9kkssRZ/uvIBmtAx5J9HYPB8Bh2A51gQhYhAuzcuVO39Di3kGaBBmq4JnH2D9C0UaKsE2chr2NxsSoBMjn5OHHScGu/5OdrSNKeclzHPcusEwGoIOxEAFNTK0cAcxNFjgDcvTvuLP8jRFwhITsc7y8zGAxbSQBixKaZlgEej0cVXd3fSVYUL6FJAE2omWWsk4oKeX/H5Mvk/R0Z4F6uXUsu/wcGwPX+VVVbRABkRUXJL/QGhx3/nur9nU3rnBNLWSCWbPkLwB5PWgFgo1NADjYGg+FpEoAECceA/CWUwyErNNCZ4b5ps8RKCwIqK90gQBEGyyQSKbXfkpK05b/F08u2ba4GOAn90eDovTeA4uJcp3P3C4CrIpZFFpgisMGwVQXAxl5kUUc0+xJWtm4idbjmdKddL0VF9rIGyO9LABxLr/3K2zlqYevisjK2BO43wvTZwzPh8HB4eHgmGl1BAJzlvyw2XjgysjAyMjb247EQodQCwPojABMEGAxbRwCUOsghR0dgYYlFue6sSB2uOd1pNwAnAtCxttbNAjm7m0WjSQGQKUTY5Oy/9RjLABQWRu5GQqPahenH6d7f+Z27peDR0XHVAMKh8EJhXnoBIPsisMFg2EoCUECBY0B8Ce31RlbMLqEZUqfdqEyIqwFx4k4WSMfU2m8kkpL9LyraOg0pc3PdHM7E6MTdu9HR0eiD9nRwS8FjY5Oh0MREaMINIJAiw/qLwCYIMBi2jgB48BRT7Gzeqe0ctMVbNBolKzR2aglAc2pm2Yb52cbGpAbs23eNa04Q0B/qd5f/Tt8V55rUKbZMECCbvDs5Oqo9nydXjACEGwEEQy1jY1OTY5OkasX6U0AGw1bCCEAppTvZmdzONxIJh8NjY2Osnbm5OQ0cHx/XJEA55ZpTk7NB2KnV4Lw8JwjQl86WvL8Vi+Eu/22FC1sLdxXf/5XAr/961OdzBGCFmm4eeclS8LTvN8d+6lrXwIYKwDbABAGPC4Mhl42mkkov3t3s1rJaW/yrr4Cay8uba+t/1sLt27eDwaCGqwywne2aUzPvYtfGLoTdzSGGLly4Gb3ZP9B/69bta9eW4wNZUxNrpD6LJ+szncNlL6txglXJz0/m8Y9Xw88VFPycz2frp3TcUrCOVX9cxTM4AzWDiQDux2AwAlBFlfxFDTUePNOx6cHBQXWXVF/JtbYUVm8A9YcZGhoC9rLXcUPWRrsMVwBk/iG/f9Cv/+cXt+l81rXfLh5EkyyDMV/gYdRoRJbvIUX8amU+GLQspcGsmpqVV9o11Oxn/1f5KqIafKxj+X8A/heyLLB50jEYjADkkltHXT31jTRe5KJcv/Iq2tOtpqYm82+EqTH91atXtRmc/DHQQIPTKXDj918oK8MNAgLnA0u4yR/27s0iX/8SK9KMbEV+pDFr8P57ZVm8h3QBeKkaZDmwsHt36ge078sCfZyPH+UouY73l5VjMBiMAKyIXH8zzVo29tOvHM7Fixe1I5B2dFBPmEwSQcr8nDlz5vz58319fYAzlY4+fGwoNlggR+8IQPwf+odG/+Du9u/T+VlHALJbdx4jnRydzmDAoezmT6eah7FdebWkO4fAQ+/sqkb/kbRCVsZgMBgBqKCildYhhoIEu+k+e/astgXV13qVzT969OiuVfvHKmKQ91cvsN7eXpUBSilto+0QhzThJqUF5ApdDQjMz1NXl/T+Xi9bGjehA4FML3dGGAyGLUHuJm28qx5+o4yGCU8yeXHh4unTp+X9dUOn2ryoPYD2edY2n5Zlpd7yPzw8rGqBMj9a+7/33ntqDZ9Pfgcdxzh2mMM+fNibtgtnayuDg0Qit51b/g8dQg/Sh201XI+ewb6kVopeGAxbCBMBbLwGFFDQTvsUUwkSFtaF2QuvvfaabglVUVctYlQPUBygkoAyQrZty/tPTExIG1QxVvZfmR9d5ol6ni95/gQnpAGaig3E1YDUT67+5BUVTE+Tn09TEzt2APZW9v7CA39HZuquH3AMJgVkw5twio1jD3te5EVHDHaw4wIXVAxQhkedXqqqqrTVs3b6dAQgHo9Ho9FQKKScj1P1rf2vtUd6jrSfan+h8AVpAGlsfBwgj9/RsVnf1cqBv4FsdQ4t2f/lYXxpyX4Hg8GwUZgaQBz+KfwSG8de9n6YD5dQsotdPnzXuDYQG7i8hHZ50z7PrgDEYjHE59gTLhmdOlDfc7gtr+1E3tHOzo7c3Bw2Exsss/z9YGMwGAFIINtodrP7E3xC0UAddfvZP8hgkGCIUHQxOjM5M8+8s3uEpKKsu8z7htc3F/e98cb/7TmvL+fm5TXl5tLZufqq3AY+z4PJf/DTX4Dv8zC+kD6+BpnBYNhqGAHIhXk2lDzyVMhtoqmf/iGGRhgJE44SnWVWAmBh6QKP7Sm1SysTldUJv29u7n+88UZPT1NeHhIAHV944SHZmK4HvzZd2QQB9oPn9jmnDAbDVsEIwOKyAMyzOZRSeoQjsjHGxhmfZPInAmDnFVFUapVWnKgomXuHuTkSidhpq6dH3j9p7e1r/95Tvp7IJhFkP3juGudng8GwhTAC4Hj/OEvYNkksi41G9QDZyrn2fDhxQgLg2MS770oDnCBA1tbGgyjI9GwWFKT/YDAYthJGAOJLlgAWF5meJhZjdhaKCikspKCAR4bHo4yPqwFjZ8+6cYCU4ODBTa8G23zAMBgMJgK4eTMxNZUAxse5cYNgkEQCnvFSXs7OnZvodNMpK5MG6OUdG+nrkwa49YB9+9gwzJ0/BoPBCMDwcOLllxOBQAKYnOTmTS5cgPx8mpupq8Pn4xHj9bq5IHn9QDicmguqryczSuAfIdtAGuG/IDMYDFsEIwCz44noaOLPv5GYgOlpgkGorKSzjWPHlHbZLAGwH9a0RBpgWehBNNoPebK+pAbU1LAeDAaDwZDLKzBEYiiRCCTiTZU3pjsRh4upqmL/fo4epaODR4vFMs88Q1kZgQCxGLZ9DXIdGbhDZy579mAwGAyGrMnloxAhPhSPBw4n7lYjV2tZFBWhCKC+Xsv/x5xuLy1FtsxlRwAgF05BBevBYDAYTAqojETZc4m25xLRKDMzSAC2b6ekhCeS88sCoOMp/rKdO+BQIIgCOP5mupRGYQpQxSEFEZAAhPvcg44OKAClQGkXxoJb2BubAw539txp+v889OYL/GVqpCMVAAB3APltOh0J8wcKqeLtMwBhXgQAUD0A8v+UfMvrbwUAAAjAezk/VtzlL/EBAKooCnk8AAAtAIBoEAAAAAEAABAAAAABAAA8yVeyLNvtdpfLRSnV7/dns1mj0ZC4AQAByPPcObderw+HQ61WG4/H3vvVaiVxAwACsN/vt9utc26z2dTr9cVi0W63n0sCIGIgAN77JEmOx2NeOp1OYQ2HAiBu4BK42WwaY6y1tzV8CGs4FABxA98AhsPhZDK5Xq+9Xk9rPZ1OwzoajQRA3EAArLXL5dIYcz6flVKDwWA+n7daLQHwCMBjcOE8TVOtdbfbFQAAr4ECAPgnMACAAAAA7s0HoDFhsamH/bcAAAAASUVORK5CYII=", lj = {
	thin: 100,
	light: 300,
	regular: 400,
	normal: 400,
	medium: 500,
	bold: 700,
	black: 900
}, uj = class {
	constructor(e) {
		this._webGLHelper = e, this.fontRepository = "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/", this._fonts = new bn([], JSON.stringify), this._metadataPromises = /* @__PURE__ */ new Map(), this._fontPromises = /* @__PURE__ */ new Map(), this._promises = [], this._defaultFontEntry = {
			metrics: cx(sj),
			texture: e ? this._createTextureNow(cj) : void 0
		};
	}
	async waitUntilReady() {
		await Promise.all(this._promises);
	}
	getFont(e, t = "normal", n = "regular") {
		if (O(n) && (n = lj[n.toLowerCase()], !n)) throw Error("Unknown font weight: " + n);
		let r = {
			family: e,
			style: t,
			weight: n
		}, i = this._fonts.get(r);
		return i || (i = {
			metrics: void 0,
			texture: void 0
		}, this._fonts.set(r, i), this._promises.push(this._loadFontEntry(i, r))), i;
	}
	async _loadFontEntry(e, t) {
		try {
			let n = pj(await this._loadMetadata(t.family), t), r = this.fontRepository + dj(t.family) + "/" + n.replace(/\.\w+/, ""), i = this._createTexture(r + ".png"), a = this._loadFont(r + ".json");
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
		}).then((e) => e.json()).then((e) => cx(e)), this._fontPromises.set(e, t)), t;
	}
	_loadMetadata(e) {
		let t = dj(e), n = this._metadataPromises.get(t);
		if (!n) {
			let e = this.fontRepository + t + "/METADATA.pb";
			n = fetch(e).then((t) => {
				if (!t.ok) throw Error("Could not load font metadata. Response status: " + t.status + ", url: " + e);
				return t;
			}).then((e) => e.text()).then((e) => fj(e)).catch((e) => {
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
			lv(t, {
				src: e,
				min: t.LINEAR
			}, (e, t, i) => {
				e ? r(e) : n(t);
			});
		});
	}
	_createTextureNow(e) {
		let t = this._webGLHelper.gl, n, r = new Promise((r, i) => {
			n = lv(t, {
				src: e,
				min: t.LINEAR
			}, (e, t, n) => {
				e ? i(e) : r(t);
			});
		});
		return this._promises.push(r), n;
	}
};
function dj(e) {
	return e.toLowerCase().replaceAll(/[^\w]/g, "");
}
function fj(e) {
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
function pj(e, t) {
	let n, r = Infinity;
	for (let i of e) if (t.family.localeCompare(i.name, void 0, { sensitivity: "accent" }) == 0 && t.style == i.style) {
		let e = Math.abs(t.weight - i.weight);
		e < r && (r = e, n = i);
	}
	return n?.filename;
}
//#endregion
//#region src/tooltip/refseqGeneTooltipHandler.js
var mj = /* @__PURE__ */ new Map(), hj = { Organism: "Homo sapiens" };
async function gj(e, t, n = {}) {
	let r = e.symbol, i = {
		...hj,
		GENE: r
	};
	for (let [e, t] of Object.entries(n)) typeof t == "string" && (i[e] = t);
	let a = mj.get(r) ?? await yj(i);
	return a ? (mj.set(r, a), C`
            <div class="title">
                <strong>${a.name}</strong>
                ${a.description}
            </div>
            <p class="summary">${a.summary}</p>
            <p class="source">Source: NCBI RefSeq Gene</p>
        `) : null;
}
async function _j(e) {
	let t = { mode: "cors" }, n = new URL("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi");
	n.search = new URLSearchParams({
		db: "gene",
		term: bj(e),
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
var vj = fp(_j, 500);
function yj(e) {
	return vj(e);
}
function bj(e) {
	return Object.entries(e).filter(([e, t]) => t && t.length > 0).map(([e, t]) => `("${t}"[${e}])`).join(" AND ");
}
//#endregion
//#region src/utils/formatObject.js
var xj = k(".4~r"), Sj = k(".4~e");
function Cj(e) {
	return e == null ? C` <span class="na">NA</span> ` : O(e) ? e.substring(0, 30) : Number.isInteger(e) ? "" + e : Ot(e) ? Math.abs(e) > 10 ** 8 || Math.abs(e) < 10 ** -8 ? Sj(e) : xj(e) : Tt(e) ? e ? "True" : "False" : E(e) ? C`${e.map((t, n) => [Cj(t), n < e.length - 1 ? ", " : w])}` : "?" + typeof e + " " + e;
}
//#endregion
//#region src/tooltip/flattenDatumRows.js
function wj(e) {
	let t = [];
	return Tj(Object.entries(e), t), t;
}
function Tj(e, t, n) {
	for (let [r, i] of e) r.startsWith("_") || (typeof i == "object" && i && !Array.isArray(i) ? Tj(Object.entries(i), t, (n || "") + r + ".") : t.push({
		key: (n || "") + r,
		value: i
	}));
}
//#endregion
//#region src/tooltip/tooltipContext.js
var Ej = {
	x: "x2",
	y: "y2"
}, Dj = new Set([
	"auto",
	"locus",
	"interval",
	"endpoints",
	"disabled"
]), Oj = /* @__PURE__ */ new WeakMap();
function kj(e, t, n) {
	let r = Aj(t), i = Mj("x", e, t, r, Wj(n, "x")), a = Mj("y", e, t, r, Wj(n, "y")), o = i.rows.length > 0 && a.rows.length > 0, s = [...o ? jj("x", i.rows) : i.rows, ...o ? jj("y", a.rows) : a.rows], c = /* @__PURE__ */ new Set();
	for (let n of [i, a]) for (let i of n.usedLinearizedFields) {
		let n = r.get(i);
		!n || n.ambiguous || Gj(e, i, n, t) && (c.add(n.chrom), c.add(n.pos));
	}
	return {
		hiddenRowKeys: [...c],
		genomicRows: s,
		flattenDatumRows: () => wj(e),
		formatGenomicLocus: (e, n) => Vj(t, e, n),
		formatGenomicInterval: (e, n) => Hj(t, e, n)
	};
}
function Aj(e) {
	let t = Oj.get(e);
	if (t) return t;
	let n = zj(e);
	return Oj.set(e, n), n;
}
function jj(e, t) {
	let n = e.toUpperCase() + " ";
	return t.map((e) => ({
		key: n + e.key,
		value: e.value
	}));
}
function Mj(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Set();
	if (i === "disabled") return {
		rows: [],
		usedLinearizedFields: a
	};
	let o = Rj(n, e, t);
	if (!o) return {
		rows: [],
		usedLinearizedFields: a
	};
	o.field && a.add(o.field);
	let s = Rj(n, Ej[e], t);
	s?.field && a.add(s.field);
	let c = i === "auto" ? Nj(o, s, r) : i;
	if (c === "endpoints" && s) {
		let [t, i] = Fj(o, s, r);
		return {
			rows: [{
				key: "Endpoint 1",
				value: Vj(n, e, t.value) ?? String(t.value)
			}, {
				key: "Endpoint 2",
				value: Vj(n, e, i.value) ?? String(i.value)
			}],
			usedLinearizedFields: a
		};
	}
	return c === "interval" && s ? {
		rows: [{
			key: "Interval",
			value: Hj(n, e, [o.value, s.value]) ?? o.value + " - " + s.value
		}],
		usedLinearizedFields: a
	} : {
		rows: [{
			key: "Coordinate",
			value: Vj(n, e, o.value) ?? String(o.value)
		}],
		usedLinearizedFields: a
	};
}
function Nj(e, t, n) {
	if (!t) return "locus";
	let r = Pj(e.field, n), i = Pj(t.field, n);
	return r && i && r !== i ? "endpoints" : "interval";
}
function Pj(e, t) {
	let n = e ? t.get(e) : void 0;
	return n && !n.ambiguous ? n.groupId : void 0;
}
function Fj(e, t, n) {
	let r = Ij(e.field, n), i = Ij(t.field, n);
	return r === 2 && i !== 2 || i === 1 && r !== 1 || r === 2 && i === 1 ? [t, e] : [e, t];
}
function Ij(e, t) {
	let n = e ? t.get(e) : void 0, r = [
		n?.pos,
		n?.chrom,
		e
	], i;
	for (let e of r) {
		let t = Lj(e);
		if (t !== void 0) {
			if (i === void 0) i = t;
			else if (i !== t) return;
		}
	}
	return i;
}
function Lj(e) {
	if (!e) return;
	let t = e.toLowerCase(), n = t.match(/(?:^|[^0-9])(1|2)$/);
	if (n) return n[1] === "1" ? 1 : 2;
	let r = t.match(/(?:^|[_-])(first|second)(?:[_-]|$)/);
	if (r) return r[1] === "first" ? 1 : 2;
}
function Rj(e, t, n) {
	let r = e.encoders?.[t];
	if (r?.scale?.type !== "locus") return;
	let i = vf(r);
	if (!i) return;
	let a = +i(n);
	if (Number.isFinite(a)) return {
		value: a,
		field: i.fields?.length === 1 ? i.fields[0] : void 0
	};
}
function zj(e) {
	let t = /* @__PURE__ */ new Map(), n = 0, r = e.unitView?.getCollector?.()?.parent;
	for (; r;) {
		let e = r.params;
		if (e?.type === "linearizeGenomicCoordinate") {
			let r = N(e.as), i = N(e.pos), a = Bj(e.offset, i.length), o = "g" + n++, s = e.channel === "y" ? "y" : "x";
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
function Bj(e, t) {
	let n = N(e);
	return n.length === 0 ? Array(t).fill(0) : n.length === 1 ? Array(t).fill(n[0]) : n.length === t ? n : Array(t).fill(0);
}
function Vj(e, t, n) {
	return Uj(e, t)?.formatLocus(n);
}
function Hj(e, t, n) {
	return Uj(e, t)?.formatInterval(n);
}
function Uj(e, t) {
	let n = e.encoders?.[t]?.scale;
	return n?.type === "locus" && "genome" in n ? n.genome() : void 0;
}
function Wj(e, t) {
	let n = e?.genomicCoordinates?.[t], r = typeof n == "string" ? n : n?.mode ?? "auto";
	if (!Dj.has(r)) throw Error("Unknown genomic coordinate display mode: \"" + r + "\"");
	return r;
}
function Gj(e, t, n, r) {
	let i = Uj(r, n.channel);
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
//#region src/tooltip/dataTooltipHandler.js
async function Kj(e, t, n, r) {
	let i = (e) => Je(e).join("."), a = (e) => e != null && !(typeof e == "number" && Number.isNaN(e)), o = (e, n, r) => {
		for (let [o, s] of Object.entries(t.encoders)) {
			let t = s ? vf(s)?.fields : void 0;
			if (t && t.some((t) => t === e || i(t) === e)) switch (o) {
				case "color":
				case "fill":
				case "stroke": {
					let e = s(r);
					return e == null ? a(n) ? C`
                                <span
                                    class="color-legend color-legend-unmapped"
                                ></span>
                            ` : "" : C`
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
	}, s = r ?? kj(e, t, n), c = s.flattenDatumRows ? s.flattenDatumRows() : wj(e), l = s.genomicRows ?? [], u = new Set(s.hiddenRowKeys ?? []), d = c.filter((t) => !u.has(t.key) || o(t.key, t.value, e)), f = [...l, ...d];
	if (!f.length) return;
	let p = C`
        <table class="attributes">
            ${f.map((t) => {
		let n = Cj(t.value), r = o(t.key, t.value, e);
		return C`
            <tr>
                <th>${t.key}</th>
                <td>${n} ${r}</td>
            </tr>
        `;
	})}
        </table>
    `, m = t.unitView.getTitleText();
	return C`${m ? C`
              <div class="title">
                  <strong>${m}</strong>
              </div>
          ` : ""}${p}`;
}
//#endregion
//#region src/view/containerView.js
var qj = class e extends PE {
	#e = /* @__PURE__ */ new Map();
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e;
	}
	async initializeChildren() {}
	getNextAutoName(e) {
		let t = this.#e.get(e) ?? 0;
		return this.#e.set(e, t + 1), e + t;
	}
	*[Symbol.iterator]() {}
	visit(e) {
		let t;
		try {
			t = e(this);
		} catch (e) {
			throw e.view = this, e;
		}
		if (t === "VISIT_STOP") return t;
		if (t !== "VISIT_SKIP") {
			e.beforeChildren && e.beforeChildren(this);
			for (let t of this) {
				let n = t.visit(e);
				if (n === "VISIT_STOP") return n;
			}
			e.afterChildren && e.afterChildren(this), e.postOrder && e.postOrder(this);
		}
	}
	findDescendantByPath(t) {
		let n = this;
		for (let r = 0; r < t.length; r++) {
			if (!(n instanceof e)) return;
			let i = n.#t(t[r]);
			if (!i) return;
			if (r === t.length - 1) return i;
			n = i;
		}
	}
	#t(e) {
		for (let t of this) if (t.name === e) return t;
	}
	findDescendantByName(e) {
		let t;
		return this.visit((n) => {
			if (n.name == e) return t = n, ME;
		}), t;
	}
	getDefaultResolution(e, t) {
		return "shared";
	}
};
//#endregion
//#region src/genomeSpy/viewHierarchyConfig.js
function Jj(e) {
	hk(e), gk(e);
}
function Yj(e) {
	e.getDescendants().forEach((e) => e.configureViewOpacity());
}
//#endregion
//#region src/view/viewSelectors.js
var Xj = /* @__PURE__ */ new WeakMap(), Zj = /* @__PURE__ */ new WeakMap();
function Qj(e, t) {
	if (t !== null && typeof t != "string") throw Error("Import scope name must be a string or null.");
	Xj.set(e, { name: t });
}
function $j(e, t = {}) {
	let n = t.skipSubtree ?? !1 ? "excludeSubtree" : "exclude";
	Zj.set(e, n);
}
function eM(e) {
	let t = e.getDataAncestors(), n = [];
	for (let e = t.length - 1; e >= 0; --e) {
		let r = Xj.get(t[e]);
		r && typeof r.name == "string" && n.push(r.name);
	}
	return n;
}
function tM(e, t) {
	e.visit((e) => {
		let n = Zj.get(e);
		if (n === "excludeSubtree") return jE;
		if (n !== "exclude") return t(e);
	});
}
function nM(e) {
	let t = [];
	for (let n of iM(e)) {
		let r = aM(n);
		sM(e, r, t), cM(e, r, t);
	}
	return t;
}
function rM(e) {
	return e.persist === !1 ? !1 : sp(e) ? !0 : op(e) ? !!e.bind : !1;
}
function iM(e) {
	let t = new Set([e]);
	return e.visit((e) => {
		let n = Xj.get(e);
		n && typeof n.name == "string" && t.add(e);
	}), Array.from(t);
}
function aM(e) {
	return eM(e);
}
function oM(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
function sM(e, t, n) {
	let r = /* @__PURE__ */ new Map();
	dM(e, t, (e) => {
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!rM(n)) continue;
			let i = r.get(t);
			i ? i.push(e) : r.set(t, [e]);
		}
	});
	for (let [e, i] of r) {
		if (i.length <= 1) continue;
		let r = i.map((e) => e.getPathString()).join(", ");
		n.push({
			message: "Bookmarkable parameter \"" + e + "\" is not unique within " + oM(t) + ". Found in: " + r + ".",
			scope: t
		});
	}
}
function cM(e, t, n) {
	let r = lM(e, t);
	if (!r.length) return;
	let i = r.filter((e) => uM(e));
	if (i.length <= 1) return;
	let a = /* @__PURE__ */ new Map();
	for (let e of i) {
		let t = Xj.get(e), n = t ? t.name : void 0;
		typeof n != "string" || !n.length || a.set(n, (a.get(n) ?? 0) + 1);
	}
	for (let [e, r] of a) r > 1 && n.push({
		message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + oM(t) + ".",
		scope: t
	});
}
function lM(e, t) {
	let n = [];
	return dM(e, t, (e) => {
		if (eM(e).length !== t.length + 1) return;
		let r = Xj.get(e);
		!r || typeof r.name != "string" || n.push(e);
	}, { includeNamedImportRoots: !0 }), n;
}
function uM(e) {
	let t = !1;
	return e.visit((e) => {
		let n = Zj.get(e);
		if (n === "excludeSubtree") return jE;
		if (n !== "exclude") {
			for (let n of e.paramRuntime.paramConfigs.values()) if (rM(n)) return t = !0, ME;
		}
	}), t;
}
function dM(e, t, n, r = {}) {
	let i = r.includeNamedImportRoots ?? !1;
	e.visit((e) => {
		let r = Xj.get(e), a = Zj.get(e);
		if (a === "excludeSubtree") return jE;
		if (a !== "exclude" && fM(e, t, r, i)) return n(e);
	});
}
function fM(e, t, n, r) {
	let i = eM(e);
	return pM(i, t) ? !0 : !r || !n || typeof n.name != "string" || i.length !== t.length + 1 ? !1 : mM(t, i);
}
function pM(e, t) {
	return e.length === t.length ? mM(e, t) : !1;
}
function mM(e, t) {
	if (e.length > t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region src/genome/assemblyPreflight.js
function hM(e) {
	let t = [], n = !1, r = _M(e);
	for (let e of r) {
		let r = e.getAssemblyRequirement();
		r.assembly && t.push(r.assembly), r.needsDefaultAssembly && (n = !0);
	}
	return {
		assemblies: t,
		needsDefaultAssembly: n
	};
}
async function gM(e, t) {
	let { assemblies: n, needsDefaultAssembly: r } = hM(e);
	if (r) {
		let e = t.getDefaultAssemblyName();
		if (!e) throw Error("No default assembly has been configured. Set root `assembly`, define exactly one entry in root `genomes`, or set `scale.assembly` on each locus scale.");
		n.push(e);
	}
	await t.ensureAssemblies(n);
}
function _M(e) {
	let t = /* @__PURE__ */ new Set(), n = ["x", "y"], r = (e) => {
		for (let r of n) {
			let n = e.getScaleResolution(r);
			n && t.add(n);
		}
	};
	return r(e), tM(e, r), t;
}
//#endregion
//#region src/view/containerMutationHelper.js
var vM = class {
	constructor(e, t) {
		this.container = e, this.options = t;
	}
	async addChildSpec(e, t) {
		let { specs: n, insertAt: r } = this.options.getChildSpecs(), i = t ?? n.length, a = this.options.defaultName?.(i, e) ?? this.container.getNextAutoName("child"), o = await this.container.context.createOrImportView(e, this.container, this.container, a, void 0, this.options.createViewOptions);
		await gM(o, this.container.context.genomeStore), r(i, e);
		let s = this.options.insertView(o, i);
		this.options.prepareView && await this.options.prepareView(o, i, s), Yj(o);
		let { dataSources: c, graphicsPromises: l } = KA(o, this.container.context.dataFlow, (e) => e.isConfiguredVisible());
		return await YA(o, c), await _k(l), this.options.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow()), o;
	}
	async removeChildAt(e) {
		let { removeAt: t } = this.options.getChildSpecs();
		this.options.removeView(e), t(e), this.options.afterRemove && await this.options.afterRemove(e), this.options.requestLayout !== !1 && (this.container.invalidateSizeCache(), this.container.context.requestLayoutReflow());
	}
}, yM = .5;
function bM(e) {
	return "multiscale" in e && E(e.multiscale);
}
function xM(e) {
	if (!e.multiscale.length) throw Error("\"multiscale\" must contain at least one child view.");
	let t = SM(e.stops, e.multiscale.length), n = e.multiscale.map((n, r) => e.multiscale.length === 1 ? n : {
		opacity: wM(r, e.multiscale.length, t),
		layer: [n]
	}), r = { ...e };
	return delete r.multiscale, delete r.stops, {
		...r,
		layer: n
	};
}
function SM(e, t) {
	let n = "unitsPerPixel", r, i = "auto", a = yM;
	if (E(e)) r = CM(e, t, "stops");
	else if (D(e)) n = e.metric ?? "unitsPerPixel", r = CM(e.values, t, "stops.values"), i = e.channel ?? "auto", a = e.fade ?? yM;
	else throw Error("\"stops\" must be an array or an object with \"values\".");
	if (n !== "unitsPerPixel") throw Error("Only \"unitsPerPixel\" is supported for \"stops.metric\" in multiscale.");
	if (![
		"x",
		"y",
		"auto"
	].includes(i)) throw Error("\"stops.channel\" must be one of \"x\", \"y\", or \"auto\".");
	if (!Number.isFinite(a) || a < 0 || a > .5) throw Error("\"stops.fade\" must be a finite number in range [0, 0.5].");
	if (r.forEach((e, t) => {
		if (!V(e) && (!Number.isFinite(e) || e <= 0)) throw Error("Invalid stop value at index " + t + ". Stop values must be positive finite numbers.");
	}), !r.some(V)) {
		let e = r;
		for (let t = 1; t < e.length; t++) if (e[t - 1] <= e[t]) throw Error("\"stops.values\" must be strictly decreasing for \"unitsPerPixel\".");
		for (let t = 0; t < e.length - 1; t++) if (e[t] * (1 - a) <= e[t + 1] * (1 + a)) throw Error("Adjacent transitions overlap. Reduce fade or increase stop spacing.");
	}
	return {
		metric: n,
		values: r,
		channel: i,
		fade: a
	};
}
function CM(e, t, n) {
	if (!E(e)) throw Error("\"" + n + "\" must be an array of numbers or ExprRefs.");
	let r = t - 1;
	if (e.length !== r) throw Error("Invalid stop count for multiscale. Expected " + r + ", got " + e.length + ".");
	for (let t of e) if (!V(t) && !Number.isFinite(t)) throw Error("\"" + n + "\" must contain only numbers or ExprRefs.");
	return e;
}
function wM(e, t, n) {
	let r, i, a = n.values.map((e) => ({
		hi: TM(e, 1 + n.fade),
		lo: TM(e, 1 - n.fade)
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
function TM(e, t) {
	return V(e) ? { expr: "(" + e.expr + ") * " + t } : e * t;
}
//#endregion
//#region src/view/viewSpecGuards.js
function EM(e) {
	return "mark" in e && (O(e.mark) || D(e.mark));
}
function DM(e) {
	return "layer" in e && D(e.layer);
}
function OM(e) {
	return "import" in e;
}
function kM(e) {
	return "vconcat" in e && E(e.vconcat);
}
function AM(e) {
	return "hconcat" in e && E(e.hconcat);
}
function jM(e) {
	return "concat" in e && E(e.concat);
}
//#endregion
//#region src/view/layerView.js
var MM = class extends qj {
	#e = [];
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, a), this.spec = e, this.needsAxes = {
			x: !0,
			y: !0
		};
	}
	async initializeChildren() {
		this.#e = await Promise.all(this.spec.layer.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("layer"), (e) => {
			if (!DM(e) && !EM(e) && !bM(e)) throw new RS("LayerView accepts only unit, layer, or multiscale specs as children!", this);
		}, { layoutSizeParams: "inherit" })));
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	#t() {
		return new vM(this, {
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
			createViewOptions: { layoutSizeParams: "inherit" }
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
}, NM = class {
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
};
//#endregion
//#region src/view/layout/rectangle.js
function PM(e) {
	return () => e;
}
var FM = class e {
	static create(t, n, r, i) {
		return new e(PM(t), PM(n), PM(r), PM(i));
	}
	static ZERO = e.create(0, 0, 0, 0);
	_offset(e, t) {
		let n = this["_" + e];
		if (t === 0) return n;
		switch (typeof t) {
			case "number": return () => n() + t;
			case "function": return () => n() + t();
			default: throw Error("Not a number of function");
		}
	}
	_passThrough(e) {
		return this._offset(e, 0);
	}
	constructor(e, t, n, r) {
		this._x = e, this._y = t, this._width = n, this._height = r;
	}
	get x() {
		return this._x();
	}
	get y() {
		return this._y();
	}
	get width() {
		return this._width();
	}
	get height() {
		return this._height();
	}
	get x2() {
		return this._x() + this._width();
	}
	get y2() {
		return this._y() + this._height();
	}
	equals(e) {
		return e ? this === e || this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height : !1;
	}
	modify(t) {
		if (!Object.keys(t).length) return this;
		let n = (e) => {
			let n = t[e];
			return typeof n == "number" ? PM(n) : typeof n == "function" ? n : this._passThrough(e);
		};
		return new e(n("x"), n("y"), n("width"), n("height"));
	}
	translate(t, n) {
		return t === 0 && n === 0 ? this : new e(this._offset("x", t), this._offset("y", n), this._passThrough("width"), this._passThrough("height"));
	}
	translateBy(e) {
		return this.translate(e.x, e.y);
	}
	expand(t, n = 1) {
		return t.left == 0 && t.top == 0 && t.right == 0 && t.bottom == 0 ? this : new e(t.left ? this._offset("x", -t.left * n) : this._passThrough("x"), t.top ? this._offset("y", -t.top * n) : this._passThrough("y"), t.width ? this._offset("width", t.width * n) : this._passThrough("width"), t.height ? this._offset("height", t.height * n) : this._passThrough("height"));
	}
	shrink(e) {
		return this.expand(e, -1);
	}
	intersect(t) {
		return this === t || t == null ? this : new e(() => Math.max(this.x, t.x), () => Math.max(this.y, t.y), () => Math.min(this.x2, t.x2) - Math.max(this.x, t.x), () => Math.min(this.y2, t.y2) - Math.max(this.y, t.y));
	}
	union(t) {
		return this === t || t == null ? this : new e(() => Math.min(this.x, t.x), () => Math.min(this.y, t.y), () => Math.max(this.x2, t.x2) - Math.min(this.x, t.x), () => Math.max(this.y2, t.y2) - Math.min(this.y, t.y));
	}
	isDefined() {
		return this.width >= 0 && this.height >= 0;
	}
	flatten() {
		return new e(PM(this.x), PM(this.y), PM(this.width), PM(this.height));
	}
	containsPoint(e, t) {
		return e >= this.x && e < this.x2 && t >= this.y && t < this.y2;
	}
	normalizePoint(e, t, n = !1) {
		let r = {
			x: (e - this.x) / this.width,
			y: (t - this.y) / this.height
		};
		return n && (r.y = 1 - r.y), r;
	}
	denormalizePoint(e, t, n = !1) {
		return n && (t = 1 - t), {
			x: this.x + e * this.width,
			y: this.y + t * this.height
		};
	}
	toString() {
		return `Rectangle: x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}`;
	}
	toRoundedString() {
		return `Rectangle: x: ${Math.round(this.x)}, y: ${Math.round(this.y)}, width: ${Math.round(this.width)}, height: ${Math.round(this.height)}`;
	}
}, IM = {
	x: "axisX",
	y: "axisY"
}, LM = {
	top: "axisTop",
	bottom: "axisBottom",
	left: "axisLeft",
	right: "axisRight"
}, RM = {
	nominal: "axisNominal",
	ordinal: "axisOrdinal",
	quantitative: "axisQuantitative",
	index: "axisIndex",
	locus: "axisLocus"
};
function zM(e, { channel: t, orient: n, type: r, style: i }) {
	let a = WS(i);
	return US(e.flatMap((e) => {
		let i = IM[t], o = n ? LM[n] : void 0, s = r ? RM[r] : void 0, c = [
			e.axis,
			i ? e[i] : void 0,
			o ? e[o] : void 0,
			s ? e[s] : void 0
		];
		return [
			...c.flatMap((e) => WS(e?.style)).map((t) => e.style?.[t]),
			...c,
			...a.map((t) => e.style?.[t])
		];
	}));
}
//#endregion
//#region src/view/axisView.js
var BM = "chromosome_ticks_and_labels", VM = "labels_main", HM = "ticks_and_labels", UM = "axisExtent", WM = "_labelWidth", GM = 10, KM = 2;
function qM(e) {
	return e == "x" ? "y" : "x";
}
var JM = {
	x: ["bottom", "top"],
	y: ["left", "right"]
}, YM = Object.fromEntries(Object.entries(JM).map(([e, t]) => t.map((t) => [t, e])).flat(1));
function XM(e) {
	return YM[e];
}
var ZM = class extends MM {
	#e;
	#t;
	#n;
	#r = !1;
	#i = !1;
	constructor(e, t, n, r, i, a) {
		let o = XM(e.orient), s = zM(i.getConfigScopes(), {
			channel: o,
			orient: e.orient,
			type: t,
			style: e.style
		}), c = {
			...s,
			...e
		}, l = {
			...s,
			...rN(t, c),
			...e
		};
		super(t == "locus" ? aN(l, t) : iN(l, t), n, r, i, `axis_${e.orient}`, {
			blockEncodingInheritance: !0,
			...a
		}), this.axisProps = l, this.#e = QM(l), this.#t = this.paramRuntime.allocateSetter(UM, this.#e), $j(this, { skipSubtree: !0 });
	}
	async initializeChildren() {
		await super.initializeChildren();
		let e = this.getDescendants().find((e) => e instanceof $ && e.name === VM);
		e instanceof $ && (this.#n = e), !(!this.axisProps.labels || !this.#n) && this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => this.#o()));
	}
	getSize() {
		let e = { px: this.getPerpendicularSize() }, t = { grow: 1 };
		return YM[this.axisProps.orient] == "x" ? new LC(t, e) : new LC(e, t);
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
		let e = XM(this.axisProps.orient), t = this.dataParent.getScaleResolution(e);
		if (t && !t.isDomainDefinedExplicitly() && !t.isDomainInitialized()) return;
		let n = nN(this.axisProps, this.context, this.#n);
		if (n === void 0) return;
		let r = QM(this.axisProps, n);
		r >= this.#e + KM && (this.#e = r, this.#t(r), this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
};
function QM(e, t) {
	let n = $M(e);
	return e.labels && (n += t ?? eN(e)), tN(e, n);
}
function $M(e) {
	let t = e.ticks && e.tickSize || 0;
	return e.labels && (t += e.labelPadding), e.title && (t += e.titlePadding + e.titleFontSize), t;
}
function eN(e) {
	return XM(e.orient) == "x" ? e.labelFontSize : GM;
}
function tN(e, t) {
	return Math.min(e.maxExtent || Infinity, Math.max(e.minExtent || 0, t));
}
function nN(e, t, n) {
	let r = n?.getCollector();
	if (!r?.completed) return;
	let i = 0;
	r.visitData((e) => {
		i = Math.max(i, Number(e[WM]) || 0);
	});
	let a = (e.labelFont ? t.fontManager.getFont(e.labelFont, e.labelFontStyle, e.labelFontWeight) : t.fontManager.getDefaultFont()).metrics;
	if (!a) return;
	let o = (a.capHeight + a.descent) / a.common.base * e.labelFontSize, s = e.labelAngle * Math.PI / 180, c = Math.abs(Math.sin(s)), l = Math.abs(Math.cos(s)), u = XM(e.orient) == "x" ? i * c + o * l : i * l + o * c;
	return Math.ceil(u);
}
function rN(e, t) {
	let n = t.orient, r = e == "nominal" || e == "ordinal", i = "center", a = "middle", o = t.labelAngle ?? ((n == "top" || n == "bottom") && r ? -90 : 0);
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
function iN(e, t) {
	let n = e, r = XM(n.orient), i = qM(r), a = n.orient == "bottom" || n.orient == "right" ? 1 : -1, o = n.orient == "bottom" || n.orient == "left" ? 1 : 0, s = () => ({
		field: "value",
		type: t
	}), c = () => ({
		name: "domain",
		data: { values: [{}] },
		mark: {
			type: "rule",
			clip: !1,
			strokeDash: n.domainDash,
			strokeCap: n.domainCap,
			color: n.domainColor,
			[i]: o,
			size: n.domainWidth
		}
	}), l = () => ({
		name: VM,
		transform: [{
			type: "measureText",
			field: "label",
			as: WM,
			fontSize: n.labelFontSize,
			font: n.labelFont,
			fontStyle: n.labelFontStyle,
			fontWeight: n.labelFontWeight
		}],
		mark: {
			type: "text",
			clip: !1,
			align: n.labelAlign,
			angle: n.labelAngle,
			baseline: n.labelBaseline,
			font: n.labelFont,
			fontStyle: n.labelFontStyle,
			fontWeight: n.labelFontWeight,
			[i + "Offset"]: (n.tickSize + n.labelPadding) * a,
			[i]: o,
			size: n.labelFontSize,
			color: n.labelColor,
			minBufferSize: 1500
		},
		encoding: {
			[r]: s(),
			text: { field: "label" }
		}
	}), u = () => ({
		name: "ticks",
		mark: {
			type: "rule",
			clip: !1,
			strokeDash: n.tickDash,
			strokeCap: n.tickCap,
			color: n.tickColor,
			size: n.tickWidth,
			minBufferSize: 300
		},
		encoding: {
			[i]: { value: o },
			[i + "2"]: { value: { expr: `${o} - ${n.tickSize} / ${UM} * ${o ? 1 : -1}` } }
		}
	}), d = () => ({
		name: "title",
		data: { values: [{}] },
		mark: {
			type: "text",
			clip: !1,
			align: "center",
			baseline: n.orient == "bottom" ? "bottom" : "top",
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
			].indexOf(n.orient)],
			text: n.title,
			color: n.titleColor,
			[r]: .5,
			[i]: 1 - o
		}
	}), f = () => {
		let e = {
			name: HM,
			encoding: { [r]: s() },
			layer: []
		};
		return n.ticks && e.layer.push(u()), n.labels && e.layer.push(l()), e;
	}, p = {
		resolve: { scale: { [r]: "forced" } },
		domainInert: !0,
		data: { lazy: {
			type: "axisTicks",
			channel: r,
			axis: e
		} },
		layer: []
	};
	return n.domain && p.layer.push(c()), (n.ticks || n.labels) && p.layer.push(f()), n.title && p.layer.push(d()), p;
}
function aN(e, t) {
	let n = e, r = XM(n.orient), i = qM(r), a = n.orient == "bottom" || n.orient == "left" ? 1 : 0, o = () => ({
		name: "chromosome_ticks",
		mark: {
			type: "rule",
			strokeDash: e.chromTickDash,
			strokeDashOffset: e.chromTickDashOffset,
			[i]: a,
			[i + "2"]: { expr: `${a} - ${n.chromTickSize} / ${UM} * ${a ? 1 : -1}` },
			color: e.chromTickColor,
			size: n.chromTickWidth
		}
	}), s = () => {
		let i;
		switch (n.orient) {
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
	}, c;
	switch (n.orient) {
		case "bottom":
		case "top":
			c = {};
			break;
		case "left":
			c = {
				labelAngle: -90,
				labelAlign: "center",
				labelPadding: 6
			};
			break;
		case "right":
			c = {
				labelAngle: 90,
				labelAlign: "center",
				labelPadding: 6
			};
			break;
		default: c = {};
	}
	let l = iN({
		...e,
		...c
	}, t);
	if (e.chromTicks || e.chromLabels) {
		let i = {
			name: BM,
			data: { lazy: {
				type: "axisGenome",
				channel: XM(n.orient)
			} },
			encoding: { [r]: {
				field: "continuousStart",
				type: t,
				band: 0
			} },
			layer: []
		};
		if (e.chromTicks && i.layer.push(o()), e.chromLabels) {
			i.layer.push(s());
			let e;
			l.layer.filter((e) => e.name == HM).forEach((t) => t.layer.filter((e) => e.name == VM).forEach((t) => {
				e = t.mark;
			})), e && (n.orient == "top" || n.orient == "bottom" ? (e.viewportEdgeFadeWidthLeft = 30, e.viewportEdgeFadeDistanceLeft = 40) : (e.viewportEdgeFadeWidthBottom = 30, e.viewportEdgeFadeDistanceBottom = 40));
		}
		l.layer.push(i);
	}
	return l;
}
//#endregion
//#region src/view/interactionRouting.js
function oN(e, t, n) {
	e.handleInteraction(t, !0), !t.stopped && (n(), !t.stopped && e.handleInteraction(t, !1));
}
function sN(e, t, n, r) {
	return t() ? (n(), e.stopped || r?.(), !0) : !1;
}
//#endregion
//#region src/utils/ringBuffer.js
var cN = class {
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
//#region src/utils/interactionEvent.js
function lN(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "touchgesture" && (t.phase === "move" || t.phase === "end") && (t.pointerCount === 1 || t.pointerCount === 2) && Number.isFinite(t.xDelta) && Number.isFinite(t.yDelta) && Number.isFinite(t.zDelta);
}
function uN(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return t.type === "wheel" && Number.isFinite(t.deltaX) && Number.isFinite(t.deltaY) && Number.isFinite(t.deltaMode) && typeof t.preventDefault == "function";
}
function dN(e, t, n) {
	return new Proxy(e, { get(e, r) {
		if (r === "deltaX") return t;
		if (r === "deltaY") return n;
		let i = Reflect.get(e, r, e);
		return typeof i == "function" ? i.bind(e) : i;
	} });
}
function fN(e) {
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
			return n in e ? t(e[n]) : !1;
		}
	});
}
//#endregion
//#region src/view/layout/point.js
var pN = class e {
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
}, mN = 0, hN = /* @__PURE__ */ new WeakMap(), gN = TN(), _N = 6;
function vN() {
	mN = performance.now();
}
function yN() {
	return performance.now() - mN < 50;
}
function bN(e) {
	return function(...t) {
		return vN(), e(...t);
	};
}
function xN(e, t, n, r, i) {
	n = bN(n);
	let a = EN(i);
	if (e.type == "wheel") {
		let i = e.wheelEvent, o = i.deltaMode ? 120 : 1;
		if (!i.deltaX && !i.deltaY) return;
		a.smoother?.stop();
		let { x: s, y: c } = e.point;
		if (r) {
			let n = SN(e.point, t, r);
			if (n) n.x !== void 0 && (s = n.x), n.y !== void 0 && (c = n.y);
			else {
				let e = r.mark.encoders;
				e.x && !e.x2 && !e.x.constant && (s = CN(e.x, r.datum) * t.width + t.x), e.y && !e.y2 && !e.y.constant && (c = (1 - CN(e.y, r.datum)) * t.height + t.y);
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
		let t = new cN(30), r = e.mouseEvent;
		r.preventDefault(), e.target?.context.suspendHoverTracking();
		let o = pN.fromMouseEvent(r), s = (e) => {
			let r = pN.fromMouseEvent(e);
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
			document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", c), e.target?.context.resumeHoverTracking(r), ON(a, t, o, n, i, { minSampleCount: 5 });
		};
		document.addEventListener("mouseup", c, !1), document.addEventListener("mousemove", s, !1);
	} else if (e.type == "touchgesture") {
		if (!lN(e.uiEvent)) return;
		let t = e.uiEvent, { xDelta: r, yDelta: o, zDelta: s } = t;
		if (t.phase === "end") {
			t.pointerCount === 1 && ON(a, a.touchPanEventBuffer, a.touchPanLastPoint, n, i, {
				minSampleCount: 2,
				minVelocityPxPerMs: .03
			}), DN(a);
			return;
		}
		a.touchPanPointerCount !== t.pointerCount && (DN(a), a.touchPanPointerCount = t.pointerCount);
		let c = new pN(e.point.x + r, e.point.y + o);
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
function SN(e, t, n) {
	if (n.mark.getType() !== "link") return;
	let r = n.mark.encoders;
	if (!(r.x && r.y && r.x2 && r.y2)) return;
	let i = !r.x.constant && !r.x2.constant, a = !r.y.constant && !r.y2.constant;
	if (!i && !a) return;
	let o = CN(r.x, n.datum) * t.width + t.x, s = (1 - CN(r.y, n.datum)) * t.height + t.y, c = CN(r.x2, n.datum) * t.width + t.x, l = (1 - CN(r.y2, n.datum)) * t.height + t.y, u = 0, d = 0;
	i && (u += (e.x - o) ** 2, d += (e.x - c) ** 2), a && (u += (e.y - s) ** 2, d += (e.y - l) ** 2);
	let f = r.size ? +r.size(n.datum) : 0, p = Number.isFinite(f) ? Math.max(f, _N) : _N, m = p * p;
	if (!(Math.min(u, d) > m)) return u <= d ? {
		x: i ? o : void 0,
		y: a ? s : void 0
	} : {
		x: i ? c : void 0,
		y: a ? l : void 0
	};
}
function CN(e, t) {
	let n = +e(t), r = e.scale;
	if (!r) return n;
	let i = wN(e.channelDef);
	if (r.type === "band" || r.type === "point") return Number.isFinite(i) ? n + r.bandwidth() * i : n;
	if (r.type === "index" || r.type === "locus") {
		if (!Number.isFinite(i)) return n;
		let e = r;
		return n + e.step() * (i - e.align());
	} else return n;
}
function wN(e) {
	return e && "band" in e ? e.band ?? .5 : .5;
}
function TN() {
	return {
		smoother: void 0,
		touchPanEventBuffer: new cN(30),
		touchPanLastPoint: void 0,
		touchPanPointerCount: 0
	};
}
function EN(e) {
	if (!e) return gN;
	let t = hN.get(e);
	return t || (t = TN(), hN.set(e, t)), t;
}
function DN(e) {
	e.touchPanEventBuffer = new cN(30), e.touchPanLastPoint = void 0, e.touchPanPointerCount = 0;
}
function ON(e, t, n, r, i, a = {}) {
	if (!i || !n) return;
	let o = a.minSampleCount ?? 5, s = a.minVelocityPxPerMs ?? 0, c = performance.now(), l = t.get().filter((e) => c - e.timestamp < 160);
	if (l.length < o || l.length >= 5 && kN(l)) return;
	let u = l.at(-1), d = l[0], f = u.point.subtract(d.point).multiply(1 / (u.timestamp - d.timestamp));
	if (!Number.isFinite(f.x) || !Number.isFinite(f.y) || f.length < s) return;
	let p = n.x, m = n.y;
	e.smoother = ij(i, (e) => {
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
function kN(e) {
	let t = e[Math.floor(e.length / 2)], n = t.point.subtract(e[0].point).multiply(t.timestamp - e[0].timestamp), r = e.at(-1).point.subtract(t.point).multiply(e.at(-1).timestamp - t.timestamp), i = n.length;
	return r.length / i < .4;
}
//#endregion
//#region src/view/axisGridView.js
var AN = class extends MM {
	constructor(e, t, n, r, i, a) {
		super(PN(e, t), n, r, i, `axisGrid_${e.orient}`, {
			blockEncodingInheritance: !0,
			...a
		}), this.axisProps = e, $j(this, { skipSubtree: !0 });
	}
	getOrient() {
		return this.axisProps.orient;
	}
	isPickingSupported() {
		return !1;
	}
};
function jN(e, t) {
	let n = e, r = XM(n.orient);
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
function MN(e, t) {
	let n = e, r = XM(n.orient);
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
function NN(e, t) {
	let n = e, r = XM(n.orient);
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
					range: [n.chromGridFillEven ? 1 : 0, n.chromGridFillOdd ? 1 : 0]
				}
			}
		}
	};
}
function PN(e, t) {
	let n = { ...e }, r = [];
	return n.chromGrid && (n.chromGridFillOdd || n.chromGridFillEven) && r.push(NN(n, t)), n.chromGrid && n.chromGridOpacity > 0 && r.push(MN(n, t)), n.grid && n.gridOpacity > 0 && r.push(jN(n, t)), {
		name: "grid_layers",
		resolve: { scale: {
			[XM(e.orient)]: "forced",
			fill: "independent",
			opacity: "independent"
		} },
		domainInert: !0,
		layer: r
	};
}
//#endregion
//#region src/config/titleConfig.js
function FN(e) {
	return US(e.map((e) => e.title));
}
function IN(e, t) {
	let n = WS(t);
	return n.length == 0 ? {} : US(e.flatMap((e) => n.map((t) => e.style?.[t])));
}
//#endregion
//#region src/view/title.js
var LN = {
	start: 0,
	middle: .5,
	end: 1
}, RN = {
	start: "left",
	middle: "center",
	end: "right"
}, zN = "group-title";
function BN(e) {
	let t = {}, n = {
		x: 0,
		y: 0
	}, r = LN[e.anchor ?? "middle"];
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
function VN(e, t = []) {
	if (!e) return;
	let n = O(e) ? { text: e } : e;
	if (!n.text || n.orient == "none") return;
	let r = FN(t), i = IN(t, n.style ?? zN), { orientConfig: a } = BN({
		...r,
		...i,
		...n
	});
	return {
		...r,
		...a,
		...i,
		...n
	};
}
function HN(e, t = []) {
	let n = VN(e, t);
	if (!n) return;
	let { xy: r } = BN(n), i = {
		xOffset: 0,
		yOffset: 0
	};
	switch (n.orient) {
		case "top":
			i.yOffset = -n.offset;
			break;
		case "right":
			i.xOffset = n.offset;
			break;
		case "bottom":
			i.yOffset = n.offset;
			break;
		case "left":
			i.xOffset = -n.offset;
			break;
		default:
	}
	return {
		data: { values: [{}] },
		mark: {
			type: "text",
			tooltip: null,
			clip: !1,
			...r,
			...i,
			text: n.text,
			align: n.align ?? RN[n.anchor],
			angle: n.angle,
			baseline: n.baseline,
			dx: n.dx,
			dy: n.dy,
			color: n.color,
			font: n.font,
			size: n.fontSize,
			fontStyle: n.fontStyle,
			fontWeight: n.fontWeight
		}
	};
}
//#endregion
//#region src/view/gridView/scrollbar.js
var UN = class extends $ {
	#e;
	#t = FM.ZERO;
	#n = FM.ZERO;
	#r = FM.ZERO;
	viewportOffset = 0;
	#i;
	constructor(e, t, n = {}) {
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
		}, e.layoutParent.context, e.layoutParent, e.view, "scrollbar-" + t, { blockEncodingInheritance: !0 }), $j(this, { skipSubtree: !0 }), this.config = {
			scrollbarSize: 8,
			scrollbarPadding: 2,
			scrollbarMinLength: 20
		}, this.#e = t, this.#i = n.onViewportOffsetChange;
		let r = this.config.scrollbarPadding, i = this.config.scrollbarSize;
		this.#t = this.#e == "vertical" ? new FM(() => this.#n.x + this.#n.width - i - r, () => this.#n.y + r + this.scrollOffset, () => i, () => this.#s()) : new FM(() => this.#n.x + r + this.scrollOffset, () => this.#n.y + this.#n.height - i - r, () => this.#s(), () => i), this.#f(this.viewportOffset), this.addInteractionListener("mousedown", (e) => {
			if (e.stopPropagation(), this.#c() <= 0) return;
			let n = (e) => t == "vertical" ? e.clientY : e.clientX;
			e.mouseEvent.preventDefault(), this.context.suspendHoverTracking();
			let r = this.scrollOffset, i = n(e.mouseEvent), a = (e) => {
				let t = this.#c();
				if (t <= 0) return;
				let a = hS(n(e) - i + r, 0, t);
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
		this.viewportOffset = hS(e, 0, this.#d()), n && this.#f(this.viewportOffset), t && this.#i && this.#i(this.viewportOffset);
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
		this.interpolateViewportOffset = ij(this.context.animator, (e) => {
			this.setViewportOffset(e.x, {
				notify: !0,
				syncSmoother: !1
			});
		}, 35, .4, { x: e });
	}
}, WN = "intervalDragActive", GN = class extends MM {
	constructor(e, t, n = {}) {
		let r = t(), i = Object.keys(r.intervals), { zindex: a = 1, ...o } = n;
		if (jf.every((e) => !i.includes(e))) throw Error("SelectionRect requires at least one of the channels 'x' or 'y' to be present in the selection.");
		let s = {
			name: "selectionRect",
			domainInert: !0,
			params: [{
				name: WN,
				value: !1
			}],
			resolve: { scale: {
				x: "forced",
				y: "forced"
			} },
			data: { values: KN(t()) },
			encoding: {},
			layer: []
		};
		i.includes("x") && (s.encoding.x = {
			field: "_x",
			type: null,
			title: null
		}, s.encoding.x2 = { field: "_x2" }), i.includes("y") && (s.encoding.y = {
			field: "_y",
			type: null,
			title: null
		}, s.encoding.y2 = { field: "_y2" }), s.layer.push({
			name: "selectionRectRect",
			mark: {
				type: "rect",
				clip: !0,
				fill: "#808080",
				fillOpacity: .05,
				stroke: "black",
				strokeWidth: 1,
				strokeOpacity: .2,
				cursor: o.cursor ?? { expr: "intervalDragActive ? 'grabbing' : 'move'" },
				...o
			}
		});
		let c = (t) => {
			let n = e.view.getScaleResolution(t);
			return `format(datum._${t}2 - datum._${t}, '.3s')` + (n.type === "locus" ? " + 'b'" : "");
		}, l = n.measure == "inside" ? 9 : n.measure == "outside" ? -9 : 0;
		i.includes("x") && l != 0 && s.layer.push({
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
				y: i.includes("y") ? {
					field: "_y2",
					type: null,
					title: null
				} : { value: 1 },
				y2: null
			}
		}), i.includes("y") && l != 0 && s.layer.push({
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
		}), super(s, e.layoutParent.context, e.layoutParent, e.view, "selectionRect", { blockEncodingInheritance: !0 }), this._zindex = a, $j(this, { skipSubtree: !0 }), this.registerDisposer(t.subscribe(() => {
			let e = t(), n = this.flowHandle?.dataSource;
			if (!n) throw Error("Cannot find selection rect data source handle!");
			n.updateDynamicData(KN(e));
		}));
	}
	getZindex() {
		return this._zindex;
	}
};
function KN(e) {
	let t = e.intervals.x, n = e.intervals.y;
	return !t && !n ? [] : [{
		_x: t?.[0],
		_x2: t?.[1],
		_y: n?.[0],
		_y2: n?.[1]
	}];
}
//#endregion
//#region src/config/viewConfig.js
function qN(e, t) {
	let n = ["cell", ...WS(t?.style)];
	return US(e.flatMap((e) => [e.view, ...n.map((t) => e.style?.[t])]).concat([t]));
}
//#endregion
//#region src/view/gridView/gridChild.js
var JN = class {
	constructor(e, t, n) {
		if (this.layoutParent = t, this.view = e, this.serial = n, this.background = void 0, this.backgroundStroke = void 0, this.axes = {}, this.gridLines = {}, this.scrollbars = {}, this.selectionRect = void 0, this.title = void 0, this.backgroundZindex = 0, this.backgroundStrokeZindex = void 0, this.titleZindex = 1, this.coords = FM.ZERO, e.needsAxes.x || e.needsAxes.y) {
			let r = e.spec, i = qN(e.getConfigScopes(), "view" in r ? r.view : void 0);
			this.backgroundZindex = i?.zindex ?? 0, this.backgroundStrokeZindex = i?.strokeZindex;
			let a = ZN(i);
			a && (this.background = new $(a, t.context, t, e, "background" + n, { blockEncodingInheritance: !0 }), $j(this.background, { skipSubtree: !0 }));
			let o = QN(i);
			o && (this.backgroundStroke = new $(o, t.context, t, e, "backgroundStroke" + n, { blockEncodingInheritance: !0 }), $j(this.backgroundStroke, { skipSubtree: !0 }));
			let s = VN(e.spec.title, e.getConfigScopes());
			this.titleZindex = s?.zindex ?? 1;
			let c = HN(s);
			c && (this.title = new $(c, t.context, t, e, "title" + n, { blockEncodingInheritance: !0 }), $j(this.title, { skipSubtree: !0 }));
		}
		e.spec.viewportWidth != null && (this.scrollbars.horizontal = new UN(this, "horizontal")), e.spec.viewportHeight != null && (this.scrollbars.vertical = new UN(this, "vertical")), this.#e();
	}
	#e() {
		let e = this.view;
		for (let [t, n] of e.paramRuntime.paramConfigs) {
			if (!("select" in n)) continue;
			let r = ep(n.select);
			if (!np(r)) continue;
			let i = r.encodings, a = Object.fromEntries(i.map((e) => {
				let n = this.view.getScaleResolution(e), r = n?.getResolvedScaleType();
				if (!n || !r || !R(r)) throw Error(`No continuous scale found for interval selection param "${t}" on channel "${e}"! Scale type is "${r ?? "none"}".`);
				return [e, n];
			})), o = i.some((e) => a[e].isZoomable()), s = r.on ?? (o ? {
				type: "mousedown",
				filter: "event.shiftKey"
			} : { type: "mousedown" });
			if (s.type !== "mousedown") throw Error(`Interval selection param "${t}" currently supports only "mousedown" in "on".`);
			let c = s.filter ? EE(s.filter) : () => !0, l = YN(r.zoom, o, t), u = l?.filter ? EE(l.filter) : () => !0;
			if (this.selectionRect) throw Error("Only one interval selection per container is currently allowed!");
			let d = !1, f = !1, p = !1, m = null, h = (e, t) => Object.fromEntries(i.map((n) => [n, [Math.min(e[n], t[n]), Math.max(e[n], t[n])]])), g = e.paramRuntime.createExpression(t), _ = (n) => {
				e.paramRuntime.setValue(t, n);
			};
			n.value && _({
				type: "interval",
				intervals: n.value
			});
			let v = () => {
				_(Jf(i));
			};
			this.selectionRect = new GN(this, g, r.mark);
			let y = (e) => {
				this.selectionRect.paramRuntime.setValue(WN, e);
			};
			this.selectionRect.initializeChildren();
			let b = (t) => {
				let n = {
					x: 0,
					y: 0
				}, r = e.coords.normalizePoint(t.x, t.y, !0);
				for (let e of i) {
					let t = a[e].getScale();
					n[e] = t.invert(e == "x" ? r.x : r.y) + (["index", "locus"].includes(t.type) ? .5 : 0);
				}
				return n;
			}, ee = (t) => {
				let { intervals: n } = t, r = (t, n, r) => {
					let i = (e, t) => t == null ? null : a[e].getScale()(t), o = i("x", t) ?? r, s = i("y", n) ?? r;
					return e.coords.denormalizePoint(o, s, !0);
				}, i = r(n.x?.[0], n.y?.[0], 0), o = r(n.x?.[1], n.y?.[1], 1);
				return FM.create(i.x, i.y, o.x - i.x, o.y - i.y);
			};
			e.addInteractionListener("mousedown", (t) => {
				if (t.mouseEvent.button != 0) return;
				if (m = d ? ee(g()) : null, m) y(!0), f = !0;
				else {
					let n = t.point;
					if (rp(g()) && (f = !0), c(t.proxiedMouseEvent)) v(), p = !0;
					else if (rp(g())) {
						let t = (r) => {
							e.removeInteractionListener("mouseup", t);
							let i = r.point;
							n.subtract(i).length < 2 && v();
						};
						e.addInteractionListener("mouseup", t);
						return;
					} else return;
				}
				t.stopPropagation(), e.context.suspendHoverTracking();
				let n = t.point, r = pN.fromMouseEvent(t.mouseEvent).subtract(n), o = (e) => {
					let t = pN.fromMouseEvent(e).subtract(r), o;
					if (m) {
						let e = t.subtract(n), r = m.translate(e.x, e.y);
						o = h(b(new pN(r.x, r.y)), b(new pN(r.x2, r.y2)));
					} else o = h(b(n), b(t));
					for (let e of i) {
						let t = a[e], { zoomExtent: n } = t, r = o[e];
						if (m) {
							let e = r[1] - r[0], t = n[0], i = n[1];
							r[0] < t && (r[0] = t, r[1] = t + e), r[1] > i && (r[1] = i, r[0] = i - e);
						}
						let i = XN(t, r);
						i ? (r[0] = i[0], r[1] = i[1]) : (r[0] = n[0], r[1] = n[0]);
					}
					_({
						type: "interval",
						intervals: o
					});
				}, s = (t) => {
					document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s), y(!1), p = !1, m &&= null, e.context.resumeHoverTracking(t);
				};
				document.addEventListener("mousemove", o), document.addEventListener("mouseup", s);
			}), e.addInteractionListener("click", (e) => {
				e.mouseEvent.button == 0 && (f &&= (e.stopPropagation(), !1));
			}, !0);
			let x = (e) => ip(g(), b(e));
			e.addInteractionListener("dblclick", (e) => {
				x(e.point) && (v(), e.stopPropagation());
			}, !0), e.addInteractionListener("wheel", (e) => {
				let t = e.wheelEvent;
				if (!l || !u(fN(t)) || Math.abs(t.deltaX) >= Math.abs(t.deltaY) || !x(e.point)) return;
				let n = g();
				if (!rp(n)) return;
				let r = t.deltaMode ? 120 : 1, o = 2 ** (t.deltaY * r / 300), s = b(e.point), c = { ...n.intervals }, d = !1;
				for (let e of i) {
					let t = c[e];
					if (!t || t.length !== 2) continue;
					let n = a[e], r = XN(n, HO(n.getScale(), [...t], s[e], o, { onUnsupported: "identity" }));
					r && (r[0] !== t[0] || r[1] !== t[1]) && (c[e] = r, d = !0);
				}
				d && (_({
					...n,
					type: "interval",
					intervals: c
				}), t.preventDefault(), e.stopPropagation());
			}), e.addInteractionListener("mousemove", (e) => {
				x(e.point) ? p || (d = !0) : d = !1;
			});
		}
	}
	*getChildren() {
		this.background && (yield this.background), this.backgroundStroke && (yield this.backgroundStroke), this.title && (yield this.title), yield* Object.values(this.axes), yield* Object.values(this.gridLines), yield this.view, yield* Object.values(this.scrollbars), this.selectionRect && (yield this.selectionRect);
	}
	async createAxes() {
		this.disposeAxisViews();
		let { view: e, axes: t, gridLines: n } = this, r = (e, n) => {
			let r = e.getAxisProps();
			if (r === null) return;
			let i = r ? { ...r } : {};
			if (!i.orient) {
				for (let e of JM[n]) if (!t[e]) {
					i.orient = e;
					break;
				}
				if (!i.orient) throw Error("No slots available for an axis! Perhaps a LayerView has more than two children?");
			}
			if (i.title ??= e.getTitle(), !JM[n].includes(i.orient)) throw Error(`Invalid axis orientation "${i.orient}" on channel "${n}"!`);
			return i;
		}, i = async (e, n, i) => {
			let a = r(e, n);
			if (a) {
				if (t[a.orient]) throw Error(`An axis with the orient "${a.orient}" already exists!`);
				let n = new ZM(a, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i);
				t[a.orient] = n, await n.initializeChildren();
			}
		}, a = async (e, t, i) => {
			let a = r(e, t);
			if (!a) return;
			let o = {
				...zM(i.getConfigScopes(), {
					channel: t,
					orient: a.orient,
					type: e.scaleResolution.type,
					style: a.style
				}),
				...a
			};
			if (o.grid || o.chromGrid) {
				let t = new AN(o, e.scaleResolution.type, this.layoutParent.context, this.layoutParent, i);
				n[a.orient] = t, await t.initializeChildren();
			}
		};
		for (let t of ["x", "y"]) if (e.needsAxes[t]) {
			let n = e.resolutions.axis[t];
			if (!n) continue;
			await i(n, t, e);
		}
		for (let t of ["x", "y"]) if (e.needsAxes[t] && e.getConfiguredOrDefaultResolution(t, "axis") != "excluded") {
			let n = e.getAxisResolution(t);
			if (!n) continue;
			await a(n, t, e);
		}
		if (e instanceof MM) {
			for (let t of e) for (let [e, n] of Object.entries(t.resolutions.axis)) {
				let r = n.getAxisProps();
				r && r.orient && await i(n, e, t);
			}
			for (let t of e) for (let [e, n] of Object.entries(t.resolutions.axis)) {
				let r = n.getAxisProps();
				r && !r.orient && await i(n, e, t);
			}
		}
		[...Object.values(t), ...Object.values(n)].forEach((e) => e.visit((e) => {
			e instanceof $ && e.resolve("scale");
		}));
	}
	disposeAxisViews() {
		for (let e of Object.values(this.axes)) e.disposeSubtree();
		for (let e of Object.values(this.gridLines)) e.disposeSubtree();
		this.axes = {}, this.gridLines = {};
	}
	getOverhang() {
		let e = (e) => {
			let t = this.axes[e];
			return t ? Math.max(t.getPerpendicularSize() + (t.axisProps.offset ?? 0), 0) : 0;
		};
		return new WC(e("top"), e("right"), e("bottom"), e("left")).add(this.view.getOverhang());
	}
	getOverhangAndPadding() {
		return this.getOverhang().add(this.view.getPadding());
	}
};
function YN(e, t, n) {
	let r = e === void 0 ? !t : e;
	if (r === !1) return;
	if (r === !0) return { type: "wheel" };
	let i = ap(r);
	if (i.type !== "wheel") throw Error(`Interval selection param "${n}" currently supports only "wheel" in "zoom".`);
	return i;
}
function XN(e, t) {
	let n = e.getScale();
	return hO(t, e.zoomExtent, { roundToIntegers: n.type === "index" || n.type === "locus" });
}
function ZN(e) {
	if (e?.fill || e?.fillOpacity || e?.shadowOpacity) return {
		data: { values: [{}] },
		mark: {
			color: e.fill,
			opacity: e.fillOpacity ?? (e.fill ? 1 : 0),
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
function QN(e) {
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
			clip: !1,
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
//#region src/utils/keyboardZoomMotion.js
var $N = {
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
}, eP = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	constructor(e = $N) {
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
			let t = tP(this.#e.KeyD, this.#e.KeyA), n = tP(this.#e.KeyW, this.#e.KeyS), r = nP(this.#t, t, e, this.#r), i = nP(this.#n, n, e, this.#i), a = e / 1e3;
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
function tP(e, t) {
	return e === t ? 0 : t ? 1 : -1;
}
function nP(e, t, n, r) {
	if (t !== 0) {
		e.direction !== t && (e.holdMs = 0), e.holdMs += n;
		let i = r.maxExtraSpeed * (1 - 2 ** (-e.holdMs / r.holdGrowthHalfLifeMs)), a = t * (r.baseSpeed + i);
		e.velocity = rP(e.velocity, a, n, r.pressHalfLifeMs);
	} else e.holdMs = 0, e.velocity = rP(e.velocity, 0, n, r.releaseHalfLifeMs), Math.abs(e.velocity) < r.stopVelocity && (e.velocity = 0);
	return e.direction = t, e.velocity;
}
function rP(e, t, n, r) {
	return t + (e - t) * 2 ** (-n / r);
}
//#endregion
//#region src/view/gridView/zoomNavigationUtils.js
function iP(e) {
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
function aP(e) {
	let t = iP(e).x;
	if (t.size === 1) {
		let n = t.values().next().value, r = e.getScaleResolution("x");
		return !r || r !== n ? void 0 : n;
	}
}
//#endregion
//#region src/view/gridView/keyboardZoomController.js
var oP = class {
	#e;
	#t;
	#n = .5;
	#r = new eP();
	#i = !1;
	#a = 0;
	#o = (e) => {
		if (!this.#i) return;
		let t = aP(this.#t);
		if (!t) {
			this.#r.reset(), this.#i = !1, this.#a = 0;
			return;
		}
		let n = Math.max(0, e - this.#a);
		this.#a = e;
		let r = this.#r.step(n);
		(r.panDelta !== 0 || r.zoomDelta !== 0) && t.zoom(2 ** r.zoomDelta, this.#n, r.panDelta) && (vN(), this.#e.animator.requestRender()), r.active ? this.#e.animator.requestTransition(this.#o) : (this.#i = !1, this.#a = 0);
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
			} else this.#n = e.coords.normalizePoint(t.point.x, t.point.y).x;
		} else return;
	}
	#s() {
		let e = this.#e.addKeyboardListener;
		typeof e == "function" && (e("keydown", (e) => {
			sP(e) || this.#r.isNavigationKey(e.code) && aP(this.#t) && this.#r.handleKeyDown(e.code) && (e.preventDefault(), this.#c());
		}), e("keyup", (e) => {
			this.#r.isNavigationKey(e.code) && this.#r.handleKeyUp(e.code) && aP(this.#t) && (e.preventDefault(), this.#c());
		}));
	}
	#c() {
		this.#i || (this.#i = !0, this.#a = performance.now(), this.#e.animator.requestTransition(this.#o));
	}
};
function sP(e) {
	return !!(e.altKey || e.ctrlKey || e.metaKey || cP(e.target));
}
function cP(e) {
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
//#region src/view/gridView/separatorView.js
var lP = Object.freeze({
	size: 1,
	color: "#ccc",
	opacity: 1,
	strokeDash: [4, 4],
	strokeCap: "butt"
}), uP = class {
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
		let a = new $(fP(e), t, n, r, this.#e === "horizontal" ? i("separatorHorizontal") : i("separatorVertical"), { blockEncodingInheritance: !0 });
		return $j(a, { skipSubtree: !0 }), a;
	}
};
function dP(e) {
	if (!e) return null;
	let t = e === !0 ? { ...lP } : {
		...lP,
		...e
	};
	return t.strokeDash === lP.strokeDash && (t.strokeDash = lP.strokeDash.slice()), t;
}
function fP(e) {
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
//#region src/view/gridView/gridView.js
var pP = Object.freeze({
	background: 0,
	separator: 10,
	grid: 20,
	backgroundStroke: 30,
	axis: 40,
	selectionRect: 80,
	scrollbar: 90,
	title: 100
}), mP = 10, hP = class extends qj {
	#e = Infinity;
	#t = 10;
	#n = [];
	#r = {};
	#i = 0;
	#a = {};
	#o = null;
	constructor(e, t, n, r, i, a, o) {
		super(e, t, n, r, i, o), this.spec = e, this.#t = e.spacing ?? 10, this.#e = a, this.#n = [], this.wrappingFacet = !1;
		let s = dP(e.separator);
		if (s) for (let t of xP(e)) this.#a[t] = new uP({
			direction: t,
			props: s,
			context: this.context,
			layoutParent: this,
			dataParent: this,
			getName: (e) => this.getNextAutoName(e)
		});
		this.layoutParent || (this.#o = new oP({
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
		let n = new JN(e, this, this.#i);
		return this.#i++, this.#n.splice(t, 0, n), this.invalidateSizeCache(), n;
	}
	removeChildView(e) {
		let t = this.#n.findIndex((t) => t.view === e);
		if (t < 0) throw Error("Not my child view!");
		this.removeChildAt(t);
	}
	removeChildAt(e) {
		let t = this.#n[e];
		if (!t) throw Error("Child index out of range!");
		this.#l(t), this.#n.splice(e, 1), this.invalidateSizeCache();
	}
	get #s() {
		return this.#n.filter((e) => e.view.isConfiguredVisible());
	}
	get #c() {
		return new NM(this.#s.length, this.#e ?? Infinity);
	}
	setChildren(e) {
		for (let e of this.#n) this.#l(e);
		this.#n = [];
		for (let t of e) this.appendChild(t);
		this.invalidateSizeCache();
	}
	#l(e) {
		e.disposeAxisViews();
		for (let t of e.getChildren()) t.disposeSubtree();
	}
	get children() {
		return this.#n.map((e) => e.view);
	}
	get childCount() {
		return this.#n.length;
	}
	async createAxes() {
		await this.syncSharedAxes(), await Promise.all(this.#n.map((e) => e.createAxes()));
	}
	async syncSharedAxes() {
		for (let e of Object.values(this.#r)) e.disposeSubtree();
		this.#r = {};
		let e = [];
		for (let t of jf) {
			let n = this.resolutions.axis[t];
			if (!n) continue;
			let r = n.getAxisProps();
			if (!r) continue;
			let i = new ZM({
				title: n.getTitle(),
				orient: JM[t][0],
				...r
			}, n.scaleResolution.type, this.context, this, this);
			e.push(i.initializeChildren()), this.#r[t] = i;
		}
		await Promise.all(e);
	}
	*[Symbol.iterator]() {
		for (let e of this.#n) yield* e.getChildren();
		for (let e of Object.values(this.#a)) yield e.view;
		for (let e of Object.values(this.#r)) yield e;
	}
	#u(e) {
		let t = e == "column" ? "width" : "height", n = (t, n) => t.map((t) => {
			let r = this.#s[t].getOverhangAndPadding();
			return e == "column" ? n ? r.right : r.left : n ? r.bottom : r.top;
		}).reduce((e, t) => Math.max(e, t), 0);
		return this._cache(`size/directionSizes/${e}`, () => this.#c[e == "column" ? "colIndices" : "rowIndices"].map((e) => ({
			axisBefore: n(e, 0),
			axisAfter: n(e, 1),
			view: IC(e.map((e) => this.#s[e].view.getViewportSize()[t]))
		})));
	}
	#d(e) {
		let t = this.#u(e), n = [];
		n.push(RC);
		for (let [e, r] of t.entries()) e > 0 && n.push({
			px: this.#t,
			grow: 0
		}), (e == 0 || this.wrappingFacet) && n.push(RC), n.push({
			px: r.axisBefore,
			grow: 0
		}), n.push(r.view), n.push({
			px: r.axisAfter,
			grow: 0
		}), (e == t.length - 1 || this.wrappingFacet) && n.push(RC);
		return n;
	}
	#f(e) {
		let t = 0, n = 0, r = e == "row" ? this.spec.height : this.spec.width;
		if (r || r === 0) return UC(r);
		let i = this.#u(e);
		for (let [e, r] of i.entries()) e > 0 && (n += this.#t), (e == 0 || this.wrappingFacet) && (n += 0), n += r.axisBefore, n += r.view.px ?? 0, t += r.view.grow ?? 0, n += r.axisAfter, (e == i.length - 1 || this.wrappingFacet) && (n += 0);
		return {
			px: n,
			grow: t
		};
	}
	#p(e, t) {
		return e == "row" && this.wrappingFacet ? 1 + 6 * t + 2 : 2 + 4 * t + 1;
	}
	getOverhang() {
		return this.#m().union(this.#h());
	}
	#m() {
		let e = this.#u("column"), t = this.#u("row");
		return !e.length || !t.length ? WC.zero() : new WC(t.at(0).axisBefore, e.at(-1).axisAfter, t.at(-1).axisAfter, e.at(0).axisBefore);
	}
	#h() {
		let e = (e) => {
			let t = YM[e], n = this.#r[t];
			return n?.axisProps.orient === e ? Math.max(n.getPerpendicularSize() + (n.axisProps.offset ?? 0), 0) : 0;
		};
		return new WC(e("top"), e("right"), e("bottom"), e("left"));
	}
	getSize() {
		return this._cache("size", () => new LC(this.#f("column"), this.#f("row")).addPadding(this.#h()));
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding())), t = t.shrink(this.#h()), e.pushView(this, t);
		let r = e.getDevicePixelRatio(), i = { devicePixelRatio: r }, a = FC(this.#d("column"), t.width, i), o = FC(this.#d("row"), t.height, i), s = new NM(this.#s.length, this.#e ?? Infinity), c = (e) => Math.round(e * r) / r, l = [];
		for (let [e, r] of this.#s.entries()) {
			let { view: i, axes: u, gridLines: d, background: f, backgroundStroke: p, title: m, selectionRect: h } = r, [g, _] = s.getCellCoords(e), v = a[this.#p("column", g)], y = o[this.#p("row", _)], b = i.getViewportSize(), ee = i.getSize(), x = i.getOverhang(), te = v.location - x.left, S = y.location - x.top, ne = (e, t) => (e[t].grow ? (t == "width" ? v : y).size : e[t].px) + x[t], re = ne(b, "width"), ie = ne(b, "height"), ae = ne(ee, "width"), oe = ne(ee, "height"), se = r.scrollbars.horizontal, ce = r.scrollbars.vertical, le = se ? () => c(se.viewportOffset) : () => 0, ue = ce ? () => c(ce.viewportOffset) : () => 0, de = new FM(() => t.x + te, () => t.y + S, () => re, () => ie), fe = i.isScrollable(), pe = fe ? new FM(() => t.x + te - le(), () => t.y + S - ue(), () => ae, () => oe) : de;
			r.coords = de;
			let me = n.clipRect ? de.intersect(n.clipRect) : de;
			l.push({
				col: g,
				row: _,
				view: i,
				axes: u,
				gridLines: d,
				background: f,
				backgroundStroke: p,
				title: m,
				selectionRect: h,
				viewportCoords: de,
				viewCoords: pe,
				clippedChildCoords: me,
				viewWidth: ae,
				viewHeight: oe,
				scrollable: fe,
				gridChild: r
			});
		}
		let u = this.#m(), d = [], f = [], p = [], m = 0, h = (e, t, n) => {
			(e > 0 ? f : d).push({
				zindex: e,
				order: t,
				sequence: m++,
				render: n
			});
		}, g = (e) => {
			e.sort((e, t) => e.zindex - t.zindex || e.order - t.order || e.sequence - t.sequence);
			for (let t of e) t.render();
		};
		for (let t of l) t.background && h(t.gridChild.backgroundZindex, pP.background, () => t.background?.render(e, t.clippedChildCoords, {
			...n,
			clipRect: void 0
		}));
		let _ = this.#a.vertical;
		_ && (_.update(a, s.nCols, t, (e, t) => this.#p(e, t), this.wrappingFacet, u), h(_.getZindex(), pP.separator, () => _.render(e, t, n)));
		let v = this.#a.horizontal;
		v && (v.update(o, s.nRows, t, (e, t) => this.#p(e, t), this.wrappingFacet, u), h(v.getZindex(), pP.separator, () => v.render(e, t, n)));
		for (let r of l) {
			let { view: i, axes: a, gridLines: o, backgroundStroke: c, title: l, selectionRect: u, viewportCoords: d, viewCoords: f, clippedChildCoords: m, viewWidth: g, viewHeight: _, scrollable: v, gridChild: y, col: b, row: ee } = r, x = vP(i) || v;
			for (let t of Object.values(o)) h(t.axisProps.zindex ?? 0, pP.grid, () => t.render(e, d, n));
			p.push(() => i.render(e, f, x ? {
				...n,
				clipRect: m
			} : n)), c && h(CP(y.backgroundStrokeZindex, x), pP.backgroundStroke, () => c?.render(e, m, {
				...n,
				clipRect: void 0
			}));
			for (let [t, r] of Object.entries(a)) {
				let i = t == "left" || t == "right" ? "vertical" : "horizontal", a = y.scrollbars[i], o = wP(a ? d.modify(i == "vertical" ? {
					y: () => f.y,
					height: _
				} : {
					x: () => f.x,
					width: g
				}) : d, t, r), s = n.clipRect;
				a && (s = o.intersect(s).intersect(a ? d.modify(i == "vertical" ? {
					x: -1e5,
					width: 2e5
				} : {
					y: -1e5,
					height: 2e5
				}) : void 0)), h(SP(r.axisProps.zindex, x), pP.axis, () => r.render(e, o, {
					...n,
					clipRect: s
				}));
			}
			for (let t of Object.values(this.#r)) {
				let r = t.axisProps.orient;
				(r == "left" && b == 0 || r == "right" && b == s.nCols - 1 || r == "top" && ee == 0 || r == "bottom" && ee == s.nRows - 1) && h(SP(t.axisProps.zindex, x), pP.axis, () => t.render(e, wP(d.shrink(y.view.getOverhang()), r, t), n));
			}
			u && h(u.getZindex(), pP.selectionRect, () => u?.render(e, f, n));
			for (let r of Object.values(y.scrollbars)) h(1, pP.scrollbar, () => {
				r.updateScrollbar(d, f), r.render(e, t, n);
			});
			l && h(y.titleZindex, pP.title, () => l?.render(e, d, n));
		}
		g(d);
		for (let e of p) e();
		g(f), e.popView(this);
	}
	propagateInteraction(e) {
		oN(this, e, () => {
			let t = this.#s.find((t) => t.coords.containsPoint(e.point.x, e.point.y)), n = t?.view, r = t ? void 0 : this.#g(e.point);
			if (e.type === "wheelclaimprobe") {
				if (!n) {
					r && e.claimWheel();
					return;
				}
				bP(n) ? yP(n) && e.claimWheel() : n.propagateInteraction(e);
				return;
			}
			this.#o?.handlePointerEvent(t, e);
			for (let n of Object.values(t?.scrollbars ?? {})) if (sN(e, () => n.coords.containsPoint(e.point.x, e.point.y), () => n.propagateInteraction(e)), e.stopped) return;
			if (!n) {
				r && this.#y(e, r);
				return;
			}
			sN(e, () => !0, () => n.propagateInteraction(e), bP(n) ? () => xN(e, t.coords, (e) => this.#b(t.coords, t.view, e), this.context.getCurrentHover(), this.context.animator) : void 0);
		});
	}
	#g(e) {
		let t = this.#_();
		if (!t) return;
		let n = this.getScaleResolution(t);
		if (!n || !n.isZoomable()) return;
		let r = this.#v(t);
		if (r && r.containsPoint(e.x, e.y)) return {
			coords: r,
			zoomableResolutions: gP(t, n)
		};
	}
	#_() {
		if (kM(this.spec)) return "x";
		if (AM(this.spec)) return "y";
	}
	#v(e) {
		let t = this.#s[0];
		if (!t) return;
		let n = t.coords, r = t.coords.expand(t.getOverhang()), i = n.x, a = r.y, o = n.x2, s = r.y2;
		for (let t of this.#s.slice(1)) {
			let n = t.coords, r = t.coords.expand(t.getOverhang());
			e == "x" ? (i = Math.max(i, n.x), o = Math.min(o, n.x2), a = Math.min(a, r.y), s = Math.max(s, r.y2)) : (i = Math.min(i, r.x), o = Math.max(o, r.x2), a = Math.max(a, n.y), s = Math.min(s, n.y2));
		}
		for (let t of Object.values(this.#r)) {
			let n = t.coords;
			if (!n) continue;
			let r = t.axisProps.orient;
			e == "x" && (r == "top" || r == "bottom") ? (a = Math.min(a, n.y), s = Math.max(s, n.y2)) : e == "y" && (r == "left" || r == "right") && (i = Math.min(i, n.x), o = Math.max(o, n.x2));
		}
		if (!(i >= o || a >= s)) return FM.create(i, a, o - i, s - a);
	}
	#y(e, t) {
		e.target = this, xN(e, t.coords, (e) => _P(t.coords, e, t.zoomableResolutions, this.context.animator), this.context.getCurrentHover(), this.context.animator);
	}
	#b(e, t, n) {
		return _P(e, n, iP(t), this.context.animator);
	}
	getDefaultResolution(e, t) {
		return "independent";
	}
};
function gP(e, t) {
	let n = {
		x: /* @__PURE__ */ new Set(),
		y: /* @__PURE__ */ new Set()
	};
	return n[e].add(t), n;
}
function _P(e, t, n, r) {
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
function vP(e) {
	let t = !0;
	return e.visit((e) => {
		e instanceof $ && (t &&= e.mark.properties.clip === !0);
	}), t;
}
function yP(e) {
	let t = iP(e);
	return t.x.size > 0 || t.y.size > 0;
}
function bP(e) {
	return e instanceof $ || e instanceof MM;
}
function xP(e) {
	return "vconcat" in e ? ["horizontal"] : "hconcat" in e ? ["vertical"] : ["horizontal", "vertical"];
}
function SP(e, t) {
	return e ?? (t ? mP : 0);
}
function CP(e, t) {
	return e ?? (t ? mP : 0);
}
function wP(e, t, n) {
	let r = n.axisProps, i = n.getPerpendicularSize();
	if (t == "bottom") return e.translate(0, e.height + r.offset).modify({ height: i });
	if (t == "top") return e.translate(0, -i - r.offset).modify({ height: i });
	if (t == "left") return e.translate(-i - r.offset, 0).modify({ width: i });
	if (t == "right") return e.translate(e.width + r.offset, 0).modify({ width: i });
}
//#endregion
//#region src/view/concatView.js
var TP = class extends hP {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, jM(e) ? e.columns : kM(e) ? 1 : Infinity, a), this.spec = e;
	}
	async initializeChildren() {
		let e = this.spec, t = jM(e) ? e.concat : kM(e) ? e.vconcat : e.hconcat;
		this.setChildren(await Promise.all(t.map((e) => this.context.createOrImportView(e, this, this, this.getNextAutoName("grid"))))), await this.createAxes();
	}
	async addChildSpec(e, t) {
		return this.#t().addChildSpec(e, t);
	}
	async removeChildAt(e) {
		await this.#t().removeChildAt(e);
	}
	getDefaultResolution(e, t) {
		return t == "axis" ? "independent" : kM(this.spec) && e === "x" || AM(this.spec) && e === "y" ? "shared" : "independent";
	}
	#e() {
		let e = this.spec, t;
		return t = jM(e) ? e.concat : kM(e) ? e.vconcat : e.hconcat, {
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
		return new vM(this, {
			getChildSpecs: this.#e.bind(this),
			insertView: (e, t) => this.insertChildViewAt(e, t),
			removeView: (e) => super.removeChildAt(e),
			prepareView: async (e, t, n) => {
				await n.createAxes(), await this.syncSharedAxes();
			},
			afterRemove: async () => {
				await this.syncSharedAxes();
			},
			defaultName: () => this.getNextAutoName("grid")
		});
	}
};
//#endregion
//#region src/config/resolveConfig.js
function EP({ defaultConfig: e, builtInTheme: t, theme: n }) {
	return US([
		e,
		t,
		n
	]);
}
function DP(e, t) {
	if (!(!e && !t)) return US([e, t]);
}
//#endregion
//#region src/view/viewFactory.js
var OP = "viewRoot", kP = class {
	#e = /* @__PURE__ */ new Map();
	constructor(e = {}) {
		this.options = {
			allowImport: !0,
			wrapRoot: !0,
			...e
		};
		let t = (e) => (t, n, r, i, a, o) => new e(t, n, r, i, a, o);
		this.addViewType(DM, t(MM)), this.addViewType(bM, ((e, t, n, r, i, a) => new MM(xM(e), t, n, r, i, a))), this.addViewType(EM, t($)), this.addViewType(kM, t(TP)), this.addViewType(AM, t(TP)), this.addViewType(jM, t(TP));
	}
	addViewType(e, t) {
		this.#e.set(e, t);
	}
	createView(e, t, n, r, i, a) {
		for (let [o, s] of this.#e) if (o(e)) return s(e, t, n, r, i, a);
		throw MP(e) ? Error("SampleView is not supported by the @genome-spy/core package. Use @genome-spy/app instead!") : Error("Invalid spec, cannot figure out the view type from the properties: " + JSON.stringify([...Object.keys(e)]));
	}
	isViewSpec(e) {
		let t = [...this.#e.keys()].filter((t) => t(e));
		if (t.length > 1) throw Error("Ambiguous spec. Cannot create a view!");
		return t.length == 1;
	}
	async createOrImportView(e, t, n, r, i, a, o) {
		let s, c = OM(e) ? e.name ?? null : void 0;
		if (OM(e)) {
			let i;
			if ("url" in e.import) if (this.options.allowImport) i = await vk(e, r.getBaseUrl(), t);
			else throw new RS("Importing views is not allowed!", n);
			else if ("template" in e.import) i = AP(e.import.template, r);
			else throw Error("Invalid import: " + JSON.stringify(e));
			a?.(i), jP(i, e), s = i;
		} else s = e;
		let l = (e) => e?.params?.some((e) => sp(e) && ep(e.select).type == "interval"), u = !1;
		if (!r && this.options.wrapRoot && (EM(s) || DM(s) || bM(s) || l(s)) && i === "viewRoot") {
			let e = { ...s };
			delete e.theme, s = {
				name: "implicitRoot",
				vconcat: [e]
			}, u = !0;
		}
		let d = this.createView(s, t, n, r, i, o);
		return c !== void 0 && Qj(d, c), u && $j(d), d instanceof qj && await d.initializeChildren(), d.registerStepSizeInvalidation(), d;
	}
};
function AP(e, t) {
	let n = t.spec?.templates?.[e];
	if (n) return structuredClone(n);
	if (t.dataParent) return AP(e, t.dataParent);
	throw Error(`Cannot find template "${e}" in current view or its ancestors!`);
}
function jP(e, t) {
	t.name != null && (e.name = t.name), t.visible != null && (e.visible = t.visible), e.config = DP(t.config, e.config);
	let n = E(t.params) ? t.params : D(t.params) ? Object.entries(t.params).map(([e, t]) => ({
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
function MP(e) {
	return "samples" in e && D(e.samples) && "spec" in e && D(e.spec);
}
//#endregion
//#region src/utils/inertia.js
var NP = class {
	constructor(e, t) {
		this.animator = e, this.disabled = !!t, this.maxDistance = 500, this.callback = null, this.targetValue = 0, this.lastValue = 0, this.smoother = ij(e, (e) => {
			let t = e.x - this.lastValue;
			this.lastValue = e.x, this.callback?.(t);
		}, 40, .1, { x: 0 });
	}
	cancel() {
		this.lastValue !== this.targetValue && (this.targetValue = At([this.lastValue, this.targetValue], .3), this.smoother({ x: this.targetValue }));
	}
	setMomentum(e, t) {
		if (this.disabled) {
			t(e);
			return;
		}
		this.callback = t;
		let n = hS(this.targetValue + e - this.lastValue, -this.maxDistance, this.maxDistance);
		this.targetValue = this.lastValue + n, this.smoother({ x: this.targetValue });
	}
};
function PP(e) {
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
//#region src/utils/interaction.js
var FP = class {
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
		if (!uN(this.uiEvent)) throw Error("Not a WheelEvent!");
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
		return this.#e ||= fN(this.mouseEvent), this.#e;
	}
	get mouseEvent() {
		if (this.uiEvent instanceof MouseEvent) return this.uiEvent;
		throw Error("Not a MouseEvent!");
	}
	get wheelEvent() {
		if (!uN(this.uiEvent)) throw Error("Not a WheelEvent!");
		return this.#i ? (this.#t ||= dN(this.uiEvent, this.#i.deltaX, this.#i.deltaY), this.#t) : this.uiEvent;
	}
}, IP = class {
	#e;
	#t;
	#n;
	#r = [];
	constructor({ viewRoot: e }) {
		this.#e = e;
	}
	dispatch(e, t) {
		this.#t = e;
		let n = new FP(e, t);
		return this.#e.propagateInteraction(n), this.#n = n.target, n.type === "mousemove" && this.#i(n), n;
	}
	handlePointerLeave(e) {
		if (!this.#t || this.#r.length === 0) {
			this.#r = [], this.#n = void 0;
			return;
		}
		let t = new FP(this.#t, e, "mouseleave");
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
			let i = new FP(e.point, e.uiEvent, "mouseleave"), a = t[r];
			if (i.target = a, i.currentTarget = a, i.relatedTarget = n, this.#c(a, i), i.stopped) return;
		}
	}
	#o(e, t, n) {
		for (let r of t) {
			let t = new FP(e.point, e.uiEvent, "mouseenter");
			if (t.target = r, t.currentTarget = r, t.relatedTarget = n, this.#c(r, t), t.stopped) return;
		}
	}
	#s(e) {
		return e ? e.getLayoutAncestors().reverse() : [];
	}
	#c(e, t) {
		e.handleInteraction(t, !0), !t.stopped && e.handleInteraction(t, !1);
	}
}, LP = class {
	#e;
	#t;
	#n;
	constructor({ canvas: e }) {
		this.#e = e;
	}
	update({ target: e, hover: t }) {
		this.#r(RP(e, t));
	}
	clear() {
		this.#r(void 0);
	}
	#r(e) {
		if (zP(this.#t, e)) {
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
function RP(e, t) {
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
function zP(e, t) {
	return !e || !t ? e === t : e.owner === t.owner && e.raw === t.raw;
}
//#endregion
//#region src/genomeSpy/interactionController.js
var BP = class {
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
	constructor({ viewRoot: e, glHelper: t, tooltip: n, animator: r, emitEvent: i, tooltipHandlers: a, renderPickingFramebuffer: o, getDevicePixelRatio: s }) {
		this.#e = e, this.#t = t, this.#n = n, this.#r = r, this.#i = i, this.#a = a, this.#o = o, this.#s = s, this.#c = new IP({ viewRoot: e }), this.#l = new LP({ canvas: t.canvas }), this.#u = void 0, this.#d = new NP(this.#r), this.#f = void 0, this.#p = void 0;
	}
	getCurrentHover() {
		return this.#u;
	}
	suspendHoverTracking() {
		this.#_++, !this.#h && (this.#n.clear(), this.#m = !1);
	}
	resumeHoverTracking(e) {
		if (!(this.#_ <= 0) && (this.#_--, !(this.#_ > 0) && (this.#n.clear(), this.#m = !1, !this.#C()))) {
			if (e) {
				let t = this.#y(e);
				if (this.#p = t, this.#b(t)) {
					this.#x(t), this.#l.update({
						target: this.#c.getCurrentTarget(),
						hover: this.#u
					});
					return;
				}
				this.#c.handlePointerLeave(e);
			} else if (this.#p && this.#b(this.#p)) {
				this.#x(this.#p), this.#l.update({
					target: this.#c.getCurrentTarget(),
					hover: this.#u
				});
				return;
			}
			this.#u = null, this.#l.clear();
		}
	}
	registerInteractionEvents() {
		let e = this.#t.canvas, t = performance.now(), n = !1, r, i = (e, t) => {
			let n = this.#c.dispatch(e, t);
			return !this.#m && !this.#h && this.#n.clear(), t instanceof MouseEvent && t.type !== "mouseout" && this.#l.update({
				target: n.target,
				hover: this.#u
			}), n;
		}, a = (e) => {
			let r = performance.now(), a = r - t < 200;
			if (e instanceof MouseEvent) {
				if (e.type !== "contextmenu" && this.#C()) return;
				let o = this.#y(e);
				this.#p = o, e.type == "mousemove" && !a && this.#_ === 0 && (this.#g = !1, this.#n.handleMouseMove(e), this.#m = !1, e.buttons == 0 && !yN() && (this.#o(), this.#w(o.x, o.y)));
				let s = (e) => {
					i(o, e);
				};
				if (e.type != "wheel" && this.#d.cancel(), (e.type == "mousedown" || e.type == "mouseup") && !yN()) this.#o();
				else if (e.type == "wheel") {
					t = r, this.#m = !1;
					let n = e;
					if (Math.abs(n.deltaX) > Math.abs(n.deltaY)) this.#u = null, this.#d.cancel();
					else if (i(o, { type: "wheelclaimprobe" }).wheelClaimed) {
						let e = PP(n);
						this.#d.setMomentum(n.deltaY * (n.deltaMode ? 80 : 1), (t) => {
							s(new WheelEvent("wheel", {
								...e,
								deltaMode: 0,
								deltaX: 0,
								deltaY: t
							}));
						}), n.preventDefault();
						return;
					} else this.#d.cancel();
				}
				if (e.type == "click") {
					if (n) return;
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
				if (e.type != "click" || this.#f?.subtract(pN.fromMouseEvent(e)).length < 3) {
					let t = i(o, e);
					return e.type == "dblclick" && this.#_ === 0 && this.#b(o) && this.#S(), t;
				}
			}
		};
		e.addEventListener("mousedown", (e) => {
			this.#f = pN.fromMouseEvent(e), this.#h = !1;
			let t = e.shiftKey || e.ctrlKey || e.metaKey;
			this.#n.sticky ? (this.#n.sticky = !1, this.#g = !0, this.#n.clear(), n = !0) : n = !1;
			let r = () => {
				document.addEventListener("mouseup", () => this.#n.popEnabledState(), {
					once: !0,
					capture: !0
				}), this.#n.pushEnabledState(!1);
			};
			if (e.button == 2) r();
			else if (e.button == 0 && this.#n.visible) {
				this.#h = !0;
				let e;
				t || (e = setTimeout(() => {
					n = !0, this.#h = !1, this.#n.sticky = !0;
				}, 400));
				let r = (t) => {
					clearTimeout(e), this.#h && (this.#h = !1, t && this.#_ > 0 && (this.#n.clear(), this.#m = !1));
				};
				document.addEventListener("mouseup", () => r(!1), { once: !0 }), document.addEventListener("mousemove", () => r(!0), { once: !0 });
			}
		}), [
			"mousedown",
			"mouseup",
			"wheel",
			"click",
			"mousemove",
			"contextmenu",
			"dblclick"
		].forEach((t) => e.addEventListener(t, a));
		let o = (t, n) => {
			let r = e.getBoundingClientRect();
			return new pN(t - r.left - e.clientLeft, n - r.top - e.clientTop);
		}, s = (e) => {
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
				distance: VP(t, n)
			};
		}, c = (e, t, n, r, a, s, c) => {
			i(o(e, t), {
				type: "touchgesture",
				phase: n,
				pointerCount: r,
				xDelta: a,
				yDelta: s,
				zDelta: c
			});
		}, l = (e) => {
			e.preventDefault(), this.#d.cancel(), this.#m = !1;
			let t = s(e.touches);
			if (!t) {
				r = void 0;
				return;
			}
			if (!r || r.pointerCount !== t.pointerCount) {
				r = t;
				return;
			}
			let n = t.centerX - r.centerX, i = t.centerY - r.centerY, a = t.pointerCount === 2 ? HP(r.distance, t.distance) : 0;
			(n !== 0 || i !== 0 || a !== 0) && Number.isFinite(n) && Number.isFinite(i) && Number.isFinite(a) && c(r.centerX, r.centerY, "move", t.pointerCount, n, i, a), r = t;
		}, u = (e) => {
			e.preventDefault(), this.#m = !1, r && e.touches.length === 0 && c(r.centerX, r.centerY, "end", r.pointerCount, 0, 0, 0), r = s(e.touches);
		};
		e.addEventListener("touchstart", l, { passive: !1 }), e.addEventListener("touchmove", l, { passive: !1 }), e.addEventListener("touchend", u, { passive: !1 }), e.addEventListener("touchcancel", u, { passive: !1 }), e.addEventListener("dragstart", (e) => e.stopPropagation()), e.addEventListener("mouseout", (e) => {
			if (!this.#C()) {
				if (this.#_ > 0) {
					this.#n.clear(), this.#m = !1;
					return;
				}
				this.#c.handlePointerLeave(e), this.#l.clear(), this.#n.clear(), this.#u = null;
			}
		});
	}
	#y(e) {
		let t = this.#t.canvas, n = t.getBoundingClientRect();
		return new pN(e.clientX - n.left - t.clientLeft, e.clientY - n.top - t.clientTop);
	}
	#b(e) {
		let t = this.#t.canvas;
		return e.x >= 0 && e.y >= 0 && e.x <= t.clientWidth && e.y <= t.clientHeight;
	}
	#x(e) {
		yN() || (this.#o(), this.#w(e.x, e.y));
	}
	#S() {
		this.#v || (this.#v = !0, this.#r.requestRender(), window.requestAnimationFrame(() => {
			if (this.#v = !1, this.#_ > 0 || this.#C()) return;
			let e = this.#p;
			if (!e || !this.#b(e)) {
				this.#u = null, this.#l.clear();
				return;
			}
			this.#n.clear(), this.#m = !1, this.#x(e), this.#l.update({
				target: this.#c.getCurrentTarget(),
				hover: this.#u
			});
		}));
	}
	#C() {
		return typeof document < "u" && !!document.body && document.body.classList.contains("gs-freeze-interaction");
	}
	#w(e, t) {
		let n = this.#s(), r = Sx(this.#t.gl, this.#t._pickingBufferInfo, e * n, t * n), i = r[0] | r[1] << 8 | r[2] << 16 | r[3] << 24;
		if (i == 0) {
			this.#u = null;
			return;
		}
		if (i !== this.#u?.uniqueId && (this.#u = null), this.#u || this.#e.visit((n) => {
			if (n instanceof $) {
				if (n.mark.isPickingParticipant() && [...n.facetCoords.values()].some((n) => n.containsPoint(e, t))) {
					let e = n.getCollector().findDatumByUniqueId(i);
					e && (this.#u = {
						mark: n.mark,
						datum: e,
						uniqueId: i
					});
				}
				if (this.#u) return ME;
			}
		}), this.#u) {
			let e = this.#u.mark;
			this.updateTooltip(this.#u.datum, async (t) => {
				if (!e.isPickingParticipant()) return;
				let n = e.properties.tooltip;
				if (n !== null && n !== !1) {
					let r = n?.handler ?? "default", i = this.#a[r];
					if (!i) throw Error("No such tooltip handler: " + r);
					let a = kj(t, e, n?.params);
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
function VP(e, t) {
	let n = t.clientX - e.clientX, r = t.clientY - e.clientY;
	return Math.hypot(n, r);
}
function HP(e, t) {
	return e <= 0 || t <= 0 ? 0 : Math.log2(e / t);
}
//#endregion
//#region src/view/renderingContext/viewRenderingContext.js
var UP = class {
	constructor(e) {
		this.globalOptions = e;
	}
	pushView(e, t) {}
	popView(e) {}
	renderMark(e, t) {}
	getDevicePixelRatio() {
		return 1;
	}
}, WP = class extends UP {
	#e = [
		0,
		0,
		0,
		0
	];
	#t;
	#n = [];
	#r;
	#i;
	#a = /* @__PURE__ */ new Set();
	#o = void 0;
	#s = 1;
	#c = {
		width: 0,
		height: 0
	};
	constructor(e, t) {
		if (super(e), this.#i = t.webGLHelper, this.#r = t.framebufferInfo, this.#s = t.devicePixelRatio, this.#c = t.canvasSize, t.clearColor) {
			let e = xs(t.clearColor).rgb();
			this.#e = [
				e.r / 255,
				e.g / 255,
				e.b / 255,
				e.opacity
			];
		}
	}
	getDevicePixelRatio() {
		return this.#s;
	}
	pushView(e, t) {
		this.#a.add(e), this.#o = t;
	}
	renderMark(e, t) {
		if (this.globalOptions.picking && !e.isPickingParticipant()) return;
		let n = e.render(t);
		n && this.#n.push({
			mark: e,
			callback: n,
			coords: this.#o,
			clipRect: t.clipRect
		});
	}
	render() {
		if (this.#t || this.#l(), this.#t.length == 0) return;
		let e = this.#i.gl, t = this.#r;
		t ? (e.bindFramebuffer(e.FRAMEBUFFER, t.framebuffer), e.viewport(0, 0, t.width, t.height)) : e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), e.disable(e.SCISSOR_TEST), e.clearColor(...this.#e), e.clear(e.COLOR_BUFFER_BIT);
		for (let e of this.#a) e.onBeforeRender();
		for (let e of this.#t) e();
		this.#r && e.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	#l() {
		this.#t = [];
		let e = !0, t = !0, n = (t) => () => {
			e && t();
		}, r = (n) => () => {
			e && t && n();
		}, i = En(this.#n.reverse(), (e) => e.mark);
		for (let [a, o] of [...i.entries()].reverse()) {
			if (!a.isReady()) continue;
			this.#t.push(() => {
				e = a.unitView.getEffectiveOpacity() > 0;
			}), this.#t.push(...a.prepareRender(this.globalOptions).map((e) => n(e)));
			let i;
			for (let e of o) {
				let o = e.coords;
				o.equals(i) || this.#t.push(n(() => {
					t = a.setViewport(this.#c, this.#s, o, e.clipRect);
				})), this.#t.push(r(e.callback)), i = e.coords;
			}
		}
	}
}, GP = class extends UP {
	constructor(...e) {
		super({}), this.contexts = e;
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
}, KP = class {
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
		let e = this.#e;
		if (!e) return;
		this.#r("layout");
		let t = this.#t.getLogicalCanvasSize();
		if (isNaN(t.width) || isNaN(t.height)) {
			console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`);
			return;
		}
		let n = {
			webGLHelper: this.#t,
			canvasSize: t,
			devicePixelRatio: this.#t.getDevicePixelRatio(t)
		};
		this.#a = new WP({ picking: !1 }, {
			...n,
			clearColor: this.#n()
		}), this.#o = new WP({ picking: !0 }, {
			...n,
			framebufferInfo: this.#t._pickingBufferInfo
		}), e.render(new GP(this.#a, this.#o), FM.create(0, 0, t.width, t.height)), this.#i(), this.#r("layoutComputed");
	}
	renderAll() {
		this.#a?.render(), this.#s = !0;
	}
	renderPickingFramebuffer() {
		this.#s &&= (this.#o.render(), !1);
	}
};
//#endregion
//#region src/genomeSpy/viewContextFactory.js
function qP(e) {
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
//#region src/config/defaultConfig.js
var JP = {
	view: {},
	mark: {
		xOffset: 0,
		yOffset: 0,
		minBufferSize: 0,
		opacity: 1
	},
	point: {
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
	},
	rect: {
		x2: void 0,
		y2: void 0,
		filled: !0,
		strokeWidth: 3,
		cornerRadius: 0,
		minWidth: .5,
		minHeight: .5,
		minOpacity: 1
	},
	rule: {
		x2: void 0,
		y2: void 0,
		size: 1,
		minLength: 0,
		strokeDash: null,
		strokeDashOffset: 0,
		strokeCap: "butt"
	},
	tick: {
		minLength: 0,
		strokeDash: null,
		strokeDashOffset: 0,
		strokeCap: "butt",
		orient: void 0,
		thickness: 1
	},
	text: {
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
	},
	link: {
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
	},
	axis: {
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
	},
	axisLocus: {
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
	},
	scale: {
		nominalColorScheme: "tableau10",
		ordinalColorScheme: "blues",
		quantitativeColorScheme: "viridis"
	},
	range: {
		shape: [
			"circle",
			"square",
			"triangle-up",
			"cross",
			"diamond"
		],
		size: [0, 400],
		angle: [0, 360]
	},
	title: {
		anchor: "middle",
		frame: "group",
		offset: 10,
		orient: "top",
		align: void 0,
		angle: 0,
		baseline: "alphabetic",
		dx: 0,
		dy: 0,
		color: void 0,
		font: void 0,
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal"
	},
	style: {
		"track-title": {
			orient: "left",
			anchor: "middle",
			align: "right",
			baseline: "middle",
			angle: 0,
			fontSize: 12
		},
		overlay: {
			orient: "top",
			anchor: "start",
			align: "left",
			baseline: "top",
			offset: -10,
			dx: 10,
			fontSize: 12
		},
		"overlay-title": {
			orient: "top",
			anchor: "start",
			align: "left",
			baseline: "top",
			offset: -10,
			dx: 10,
			fontSize: 12
		}
	}
};
//#endregion
//#region src/genomeSpy/headlessBootstrap.js
function YP(e) {
	Jj(e), Yj(e);
}
//#endregion
//#region src/genomeSpy/canvasExport.js
function XP({ glHelper: e, viewRoot: t, logicalWidth: n, logicalHeight: r, devicePixelRatio: i, clearColor: a = "white" }) {
	n ??= e.getLogicalCanvasSize().width, r ??= e.getLogicalCanvasSize().height, i ??= window.devicePixelRatio ?? 1;
	let o = e.gl, s = Math.floor(n * i), c = Math.floor(r * i), l = Kb(o, [{
		format: o.RGBA,
		type: o.UNSIGNED_BYTE,
		minMag: o.LINEAR,
		wrap: o.CLAMP_TO_EDGE
	}], s, c), u = new WP({ picking: !1 }, {
		webGLHelper: e,
		canvasSize: {
			width: n,
			height: r
		},
		devicePixelRatio: i,
		clearColor: a,
		framebufferInfo: l
	});
	return t.render(u, FM.create(0, 0, n, r)), u.render(), Cx(o, l, "image/png");
}
//#endregion
//#region src/genome/rootGenomeConfig.js
function ZP(e) {
	if (e.genome && e.genomes) throw Error("Do not mix deprecated `genome` with `genomes`. Use only `genomes` and `assembly`.");
	if (e.genome && e.assembly) throw Error("Do not mix deprecated `genome` with root `assembly`. Use `genomes` and `assembly`.");
	if (e.genome) {
		let { name: t, ...n } = e.genome;
		return {
			genomesByName: !(Object.keys(n).length > 0) && $P(t) ? /* @__PURE__ */ new Map() : new Map([[t, n]]),
			defaultAssembly: t,
			deprecationWarning: QP()
		};
	}
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of Object.entries(e.genomes ?? {})) t.set(n, r ?? {});
	let n = e.assembly;
	if (!n && t.size === 1 && (n = t.keys().next().value), n && !t.has(n) && !$P(n)) throw Error(`Root assembly "${n}" is neither defined in \`genomes\` nor a built-in assembly.`);
	return {
		genomesByName: t,
		defaultAssembly: n,
		deprecationWarning: void 0
	};
}
function QP() {
	return "Root `genome` is deprecated and will be removed in a future version. Use root `genomes` and `assembly` instead. Built-in migration example: {\"genome\":{\"name\":\"hg38\"}} -> {\"assembly\":\"hg38\"}.";
}
function $P(e) {
	try {
		return JE(e), !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/view/dataReadiness.js
function eF(e, t, n) {
	let r = nF(e, n);
	if (!r.size) return !0;
	for (let e of r) if (!rF(e, t)) return !1;
	return !0;
}
function tF(e, t, n, r, i) {
	let a = i ?? ((e) => e.isConfiguredVisible());
	return new Promise((i, o) => {
		let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = () => {
			f(), d();
		}, u = () => {
			for (let e of s) e();
			s.clear(), e.removeBroadcastListener("subtreeDataReady", l), r && r.removeEventListener("abort", p);
		}, d = () => {
			eF(t, n, a) && (u(), i());
		}, f = () => {
			t.visit((e) => {
				if (!(e instanceof $) || !a(e)) return;
				let t = e.flowHandle?.collector;
				t && (c.has(t) || (c.add(t), s.add(t.observe(d))));
			});
		}, p = () => {
			u(), o(/* @__PURE__ */ Error("Lazy subtree readiness was aborted."));
		};
		if (f(), d(), e.addBroadcastListener("subtreeDataReady", l), r) {
			if (r.aborted) {
				p();
				return;
			}
			r.addEventListener("abort", p, { once: !0 });
		}
	});
}
function nF(e, t) {
	let n = t ?? ((e) => e.isConfiguredVisible()), r = /* @__PURE__ */ new Set();
	return e.visit((e) => {
		if (!(e instanceof $) || !n(e)) return;
		let t = e;
		for (; t && !(t.flowHandle && t.flowHandle.dataSource);) t = t.dataParent;
		if (!t || !t.flowHandle) return;
		let i = t.flowHandle.dataSource;
		i instanceof Gd && r.add(i);
	}), r;
}
function rF(e, t) {
	let n = t ?? { [e.channel]: Array.from(e.scaleResolution.getDomain()) };
	return e.isDataReadyForDomain(n);
}
//#endregion
//#region src/config/themes.js
var iF = {
	mark: { color: "#4c78a8" },
	point: {
		filled: !1,
		size: 30
	},
	rule: { color: "black" },
	text: { color: "black" },
	view: {
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
		titleColor: "#333",
		titleFontSize: 11,
		titleFontWeight: "normal"
	},
	axisQuantitative: { grid: !0 },
	scale: {
		nominalColorScheme: "tableau10",
		ordinalColorScheme: "blues",
		quantitativeColorScheme: "blues"
	},
	range: {
		heatmap: "viridis",
		ramp: "blues",
		diverging: "blueorange"
	}
}, aF = {
	genomespy: {
		mark: { color: "#4c78a8" },
		rule: { color: "black" },
		text: { color: "black" },
		link: { color: "black" }
	},
	vegalite: iF,
	quartz: US([iF, {
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
	dark: US([iF, {
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
	fivethirtyeight: US([iF, {
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
	urbaninstitute: US([iF, {
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
}, oF = Object.keys(aF);
function sF(e) {
	let t = { ...aF[e] };
	return delete t.background, t;
}
function cF(e) {
	if (!e) return [];
	let t = Array.isArray(e) ? e : [e], n = t.filter((e) => !(e in aF));
	if (n.length > 0) throw Error("Unknown theme \"" + n[0] + "\". Available themes: " + oF.join(", "));
	return t;
}
var lF = "genomespy";
function uF(e) {
	return aF[e].background;
}
function dF(e) {
	let t = cF(e);
	if (t.length != 0) return US(t.map((e) => sF(e)));
}
//#endregion
//#region src/genomeSpyBase.js
var fF = class {
	#e = [];
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s = new hm();
	#c = new gm();
	#l = new gm();
	constructor(e, t, n = {}) {
		this.container = e, this.options = n, n.inputBindingContainer ??= "default", this.spec = t, this.viewFactory = new kP(), this.namedDataProviders = [], this.animator = new rj(() => this.renderAll()), this.genomeStore = void 0, this.viewVisibilityPredicate = (e) => e.isVisibleInSpec(), this.tooltipHandlers = {
			default: Kj,
			refseqgene: gj,
			...n.tooltipHandlers ?? {}
		}, this.viewRoot = void 0, this.#i = new vm(e, n), this.dpr = window.devicePixelRatio;
	}
	get #u() {
		return this.container.querySelector(".canvas-wrapper");
	}
	#d() {
		this.#i.initialize(this.viewRoot);
	}
	registerNamedDataProvider(e) {
		this.namedDataProviders.unshift(e);
	}
	getNamedDataFromProvider(e) {
		for (let t of this.namedDataProviders) {
			let n = t(e);
			if (n) return n;
		}
	}
	updateNamedData(e, t) {
		let n = this.viewRoot.context.dataFlow.findNamedDataSource(e);
		if (!n) throw Error("No such named data source: " + e);
		n.dataSource.updateDynamicData(t), this.animator.requestRender();
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
		let { canvasWrapper: e, loadingIndicatorsElement: t, tooltip: n } = nm(this.container);
		this.#o = new vx(e, () => this.viewRoot ? yk(this.viewRoot) : {
			width: void 0,
			height: void 0
		}, { powerPreference: this.options.powerPreference ?? "default" }), e.appendChild(t), this.tooltip = n, this.#r = new pm(), this.#n = new fm(t, this.#r);
	}
	destroy() {
		let e = this.#u;
		for (this.container.classList.remove("genome-spy"), e.classList.remove("loading"), this.#s.removeAll(), this.#e.forEach((e) => e()), this.#o.finalize(), this.#i.remove(), this.#n.destroy(); this.container.firstChild;) this.container.firstChild.remove();
	}
	async #m() {
		await this.#h();
		let e = this.#g();
		await this.#v(e), await QA(this.viewRoot, e.dataFlow, e.fontManager, (e) => this.broadcast("dataFlowBuilt", e)), this.#b(e);
	}
	async #h() {
		this.genomeStore = new aj(this.spec.baseUrl);
		let { genomesByName: e, defaultAssembly: t, deprecationWarning: n } = ZP(this.spec);
		this.genomeStore.configureGenomes(e, t), n && console.warn(n);
	}
	#g() {
		let e = new kA();
		e.loadingStatusRegistry = this.#r;
		let t = EP({
			defaultConfig: JP,
			builtInTheme: dF(lF),
			theme: US([this.options.theme, dF(this.spec.theme)])
		});
		return qP({
			dataFlow: e,
			glHelper: this.#o,
			animator: this.animator,
			genomeStore: this.genomeStore,
			fontManager: new uj(this.#o),
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
			isViewConfiguredVisible: this.viewVisibilityPredicate,
			isViewSpec: (e) => this.viewFactory.isViewSpec(e),
			getBaseConfig: () => t,
			createOrImportViewWithContext: (e, t, n, r, i, a, o) => this.viewFactory.createOrImportView(t, e, n, r, i, a, o),
			highlightView: mm(this.container)
		});
	}
	#_(e, t) {
		if (e === "keyup") return !0;
		let n = document.activeElement;
		return n && n !== document.body ? this.container.contains(n) : this.container.matches(":hover");
	}
	async #v(e) {
		let t = this.spec;
		t.datasets && this.registerNamedDataProvider((e) => t.datasets[e]), this.viewRoot = await e.createOrImportView(t, null, null, OP), await gM(this.viewRoot, this.genomeStore), this.#r.set(this.viewRoot, "loading"), this.#u.style.flexGrow = this.viewRoot.getSize().height.grow > 0 ? "1" : "0", this.#d(), YP(this.viewRoot), this.#y(), this.#o.invalidateSize();
		let n = this.spec.theme ? Array.isArray(this.spec.theme) ? this.spec.theme : [this.spec.theme] : [];
		this.#t = new KP({
			viewRoot: this.viewRoot,
			glHelper: this.#o,
			getBackground: () => {
				if (this.spec.background !== void 0) return this.spec.background;
				let e;
				for (let t of n) {
					let n = uF(t);
					n !== void 0 && (e = n);
				}
				return e;
			},
			broadcast: this.broadcast.bind(this),
			onLayoutComputed: () => this.#n.updateLayout()
		}), e.requestLayoutReflow = this.computeLayout.bind(this), this.#f();
	}
	#y() {
		let e = nM(this.viewRoot);
		if (e.length) for (let t of e) console.warn("Selector constraints warning:", t.message);
	}
	#b(e) {
		e.requestLayoutReflow = this.computeLayout.bind(this), this.viewRoot.visit((e) => NS(e, "size")), this.#o.invalidateSize(), this.#a = new BP({
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
			return this.#p(), await this.#m(), this.#a.registerInteractionEvents(), this.computeLayout(), this.animator.requestRender(), e = !0, !0;
		} catch (e) {
			let t = `${e.view ? `At "${e.view.getPathString()}": ` : ""}${e.toString()}`;
			return console.error(e.stack), this.options.onError?.(e, this.container) || rm(this.container, t), this.viewRoot && this.#r.set(this.viewRoot, "error", t), !1;
		} finally {
			this.#u.classList.remove("loading"), e && this.viewRoot && this.#r.set(this.viewRoot, "complete");
		}
	}
	async initializeVisibleViewData() {
		this.viewRoot && (await $A(this.viewRoot, this.viewRoot.context.dataFlow, this.viewRoot.context.fontManager), this.viewRoot._invalidateCacheByPrefix("size", "progeny"), this.#o.invalidateSize(), this.computeLayout(), this.animator.requestRender());
	}
	async awaitVisibleLazyData(e) {
		this.viewRoot && await tF(this.viewRoot.context, this.viewRoot, void 0, e, (e) => e.isConfiguredVisible() && pF(e));
	}
	updateTooltip(e, t) {
		this.#a.updateTooltip(e, t);
	}
	exportCanvas(e, t, n, r = "white") {
		let i = XP({
			glHelper: this.#o,
			viewRoot: this.viewRoot,
			logicalWidth: e,
			logicalHeight: t,
			devicePixelRatio: n,
			clearColor: r
		});
		return this.computeLayout(), this.renderAll(), i;
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
		this.#t.computeLayout(), this.#o.invalidateSize();
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
			t instanceof $ && t.getSearchAccessors().length > 0 && e.push(t);
		}), e;
	}
	getNamedScaleResolutions() {
		let e = /* @__PURE__ */ new Map();
		return this.viewRoot.visit((t) => {
			for (let n of Object.values(t.resolutions.scale)) n.name && e.set(n.name, n);
		}), e;
	}
};
function pF(e) {
	let t = e;
	for (; t;) {
		let e = t.flowHandle?.dataSource;
		if (e) return e instanceof pp;
		t = t.dataParent;
	}
	return !1;
}
//#endregion
//#region src/img/bowtie.svg
var mF = "data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='1.5'%3e%3cpath%20d='M4.7%2021.2s.4%202.3%201.3%203.6C7%2026%209.8%2028%209.8%2028s3.4-2.6%206.4-8.5c0%200%201%20.1%201.9-.4.9-.6.8-.4%201-1.2%200%200%202.9.5%206.6%200%202.1-.3%204.3-1%206.2-2.5%200%200-1.1-1.7-2.5-5.1-.5-1.3-2-1.8-4.6-4.6l-8.2%208.6-11.9%206.9z'%20fill-opacity='.1'/%3e%3cpath%20d='M12.7%2014.8s-4-1.8-12%202.7c0%200%201%203.7%202.5%205.3%201.4%201.5%202.3%203.6%204.6%204.6%200%200%204.7-3%206.9-9.2l3-2s4.7%202.8%2012.6-1.6c0%200-.6-3.3-3-6-2.6-3-3.8-4.7-3.8-4.7s-4.1%202.3-7.5%209.3l-3.3%201.6z'%20fill='%237fbbdd'/%3e%3cpath%20d='M12.4%2015.5c-.7-.5-2.4-.8-4.4-.4-2%20.4-4%201.3-4.8%201.8-.5.3-1.2%201-1.2%201.4%200%20.7.3%201.8.8%202.4.3.3.7.5%201.4.6.8%200%202.5-1.4%203.5-2%201-.6%201.6-.8%202.7-1.2l-2.9%202.4c-1.3%201.2-2.2%201.5-2.4%202.3%200%20.5%200%201.4.5%201.8.4.5.6.8%201.6.8.6%200%201%200%202.6-1.5.9-.9%202.3-3%202.7-3.7.6-1.1%201-2.2.7-3-.2-1-.4-1.4-.8-1.7zM17.4%2014.2c-.3-.5-.9-1.2-.2-2.5l1.9-3c.5-.8%202-2.3%202.6-2.6.6-.4%201.5-.6%202-.2.6.4%201%201%201.3%201.5.4.6.7%201.3.2%202-.7%201-1.6.9-2.8%201.7-1.2.8-1.9%201.2-2.5%201.9l3.8-1.8c1.3-.6%202.7-1.1%203.4-.7.8.5.8.7%201%201.4.3%201-.2%201.9-.8%202.4-.5.6-1.5.9-2.6%201.2-1.4.4-4.5%201-5.8.5-1.3-.5-1.3-1.4-1.5-1.8z'%20fill='%23fff'/%3e%3cpath%20d='M12.7%2014.8s-4-1.8-12%202.7c0%200%201%203.7%202.5%205.3%201.4%201.5%202.3%203.6%204.6%204.6%200%200%204.7-3%206.9-9.2l3-2s4.7%202.8%2012.6-1.6c0%200-.6-3.3-3-6-2.6-3-3.8-4.7-3.8-4.7s-4.1%202.3-7.5%209.3l-3.3%201.6z'%20fill='none'%20stroke='%23000'%20stroke-width='.5'/%3e%3cpath%20d='M12.4%2014.9s2.1-2%203-2c1.1%200%202.3%202.7%202.3%203.5%200%20.8-2.1%202.4-3.1%202.3%200%200%200-1.2-.7-2.6-.8-1.3-1.5-1.2-1.5-1.2z'%20fill='%237fbbdd'/%3e%3cpath%20d='M13.8%2015.3c.9.8.6%202%201.4%201.8%201-.2%201.4-.8%201.3-1.5%200-.7%200-.8-.4-1.6-.3-.7-1-1.1-2-.5-.7.5-1.4%201.3-1.4%201.3s.2-.3%201.1.5z'%20fill='%23fff'/%3e%3cpath%20d='M12.4%2014.9s2.1-2%203-2c1.1%200%202.3%202.7%202.3%203.5%200%20.8-2.1%202.4-3.1%202.3%200%200%200-1.2-.7-2.6-.8-1.3-1.5-1.2-1.5-1.2z'%20fill='none'%20stroke='%23000'%20stroke-width='.5'/%3e%3c/svg%3e", hF = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5'%20viewBox='0%200%2064%2064'%3e%3cpath%20d='M208.6%20548.2s11.2%2046.2%2031.2%2071c20%2024.9%2079.3%2061.6%2079.3%2061.6S385.6%20623%20438%20498.3c0%200%2018.1%201%2036-11.9%2017.7-12.7%2016.3-7.9%2021-24.8%200%200%2057%206.3%20131-9.7%2041.7-9.1%2084.3-26.3%20121.5-58.8%200%200-25.4-32.9-58-101.7-12.4-26.1-41.9-34.3-98.7-88L438.1%20391.2%20208.6%20548.2Z'%20style='fill-opacity:.11'%20transform='matrix(.10221%20.00684%20-.00671%20.10035%20-8%20-13.2)'/%3e%3cg%20transform='rotate(-35.4%2034.2%2080.8)%20scale(.10057)'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='a'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M386.9%20397.2c-15.6-13.6-51.8-22.4-96.3-16.7-44.5%205.8-93.8%2021.8-111.8%2031.6-10.6%205.7-27.3%2017.3-28.1%2027.2-1.2%2014.2%202.9%2037.8%2015%2052%206%207.2%2014.2%2012.1%2028.1%2014.1%2017.9%202.6%2059-24.8%2081.6-36.2%2024-12%2038.6-14.6%2063-22.2%200%200-47%2031.6-68.2%2047.4-30.6%2022.9-51.6%2028-57.3%2045.5-3.1%209.4-.7%2027.9%207.5%2037.6%209%2011%2012.8%2017.6%2034.2%2020.1%2012.7%201.5%2022%201.2%2059.8-28.6%2021.7-17.2%2055.9-59.2%2067-74.4%2016.2-22%2023.8-43.1%2021.3-59.6-3.7-23.6-8.4-31.3-15.8-37.8Z'%20style='fill:%23fff'%20transform='scale(.88664)%20rotate(31.2%20485%20792.2)'/%3e%3cpath%20d='M484.7%20379c-5.4-11.1-17.6-28.5-.8-53.8a739%20739%200%200%201%2044.2-60.6c13.2-16.3%2046.7-46.2%2059.6-52%2013-6%2033.3-8.7%2044.2.2%2011%209.1%2016.5%2020.6%2023%2032.7%207.4%2013.8%2012.4%2029.3%201.6%2042.8-15.4%2019.2-34.3%2017-61.6%2031.5-27.7%2014.8-42.3%2023.1-55.7%2035.9%200%200%2052.2-21.6%2082-31.2%2029.8-9.7%2059.8-20%2074.8-8.5s14.6%2015.5%2018.4%2031.2c4.7%2019.4-7.2%2038-20.1%2048.6-13%2010.7-34.3%2016-57.4%2021-30.5%206.8-96.6%2015.1-124%202.6-27.5-12.6-24.4-32.8-28.2-40.5Z'%20style='fill:%23fff'%20transform='scale(.87906)%20rotate(31.2%20487.2%20893.5)'/%3e%3c/g%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3cg%20transform='rotate(-4.2%20-78%20211)%20scale(.10057)'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='b'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20d='M413.3%20402.7c17.5%2018.9%2010%2045.7%2028.4%2043.4%2021.7-2.7%2030.9-15.7%2031.6-32.7.7-17-1-19.5-7.1-38-6.1-18.7-18.2-23.2-43.4-18.2-20.8%204.1-17.8%203-24%2010-6.4%207-14.5%2026-14.5%2026s8.4-12.7%2029%209.5Z'%20style='fill:%23fff'%20transform='matrix(.90907%200%200%20.85852%2037%2052.2)'/%3e%3c/g%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3c/svg%3e", gF = [
	["/docs/examples/", "/docs/examples/"],
	["/examples/core/", "/examples/"],
	["/examples/docs/", "/examples/"],
	["/examples/app/", "/examples/"]
], _F = /^(?:[a-z]+:)?\/\//i, vF = "https://example.invalid";
function yF(e) {
	return _F.test(e) ? "external" : e.startsWith("/") ? "root" : "relative";
}
function bF(e) {
	let t = new URL(e, vF), n = gF.find(([e]) => t.pathname.startsWith(e));
	if (n) return SF(n[1], t, yF(e));
}
function xF(e) {
	let t = bF(e);
	if (t) return t;
	let n = new URL(e, vF);
	return SF(new URL("./", n).pathname, n, yF(e));
}
function SF(e, t, n) {
	return n === "external" ? t.origin + e : n === "root" ? e : e.slice(1);
}
//#endregion
//#region src/embedFactory.js
function CF(e) {
	return async function(t, n, r = {}) {
		let i;
		if (O(t)) {
			if (i = document.querySelector(t), !i) throw Error(`No such element: ${t}`);
		} else if (t instanceof HTMLElement) i = t;
		else throw Error(`Invalid element: ${t}`);
		let a;
		try {
			let t = D(n) ? n : await TF(n);
			if (t.baseUrl ??= "", t.width ??= "container", t.padding ??= 10, i == document.body) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.overflow = "hidden", i.appendChild(e), i = e;
			}
			a = new e(i, t, r), wF(a, r), await a.launch();
		} catch (e) {
			i.innerText = e.toString(), console.error(e);
		}
		return {
			finalize() {
				for (a.destroy(); i.firstChild;) i.firstChild.remove();
			},
			addEventListener(e, t) {
				a.addEventListener(e, t);
			},
			removeEventListener(e, t) {
				a.removeEventListener(e, t);
			},
			getScaleResolutionByName(e) {
				return a.getNamedScaleResolutions().get(e);
			},
			awaitVisibleLazyData: a.awaitVisibleLazyData.bind(a),
			getRenderedBounds: a.getRenderedBounds.bind(a),
			updateNamedData: a.updateNamedData.bind(a),
			getLogicalCanvasSize: a.getLogicalCanvasSize.bind(a),
			exportCanvas: a.exportCanvas.bind(a)
		};
	};
}
function wF(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function TF(e) {
	let t;
	try {
		t = await mk(e);
	} catch (t) {
		throw Error(`Could not load or parse configuration: ${e}, reason: ${t.message}`, { cause: t });
	}
	return t.baseUrl ||= xF(e), t;
}
//#endregion
//#region src/index.js
var EF = CF(fF);
//#endregion
export { fF as GenomeSpy, EF as embed, hF as favIcon, C as html, mF as icon, TF as loadSpec };
