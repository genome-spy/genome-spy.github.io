import { $ as e, et as t, ht as n, tt as r, yt as i } from "./src-CIMk3rVN.js";
//#region ../../node_modules/lit-html/directive-helpers.js
var { I: a } = i, o = (e) => e, s = (e) => e === null || typeof e != "object" && typeof e != "function", c = (e) => e.strings === void 0, l = () => document.createComment(""), u = (e, t, n) => {
	let r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
	if (n === void 0) n = new a(r.insertBefore(l(), i), r.insertBefore(l(), i), e, e.options);
	else {
		let t = n._$AB.nextSibling, a = n._$AM, s = a !== e;
		if (s) {
			let t;
			n._$AQ?.(e), n._$AM = e, n._$AP !== void 0 && (t = e._$AU) !== a._$AU && n._$AP(t);
		}
		if (t !== i || s) {
			let e = n._$AA;
			for (; e !== t;) {
				let t = o(e).nextSibling;
				o(r).insertBefore(e, i), e = t;
			}
		}
	}
	return n;
}, d = (e, t, n = e) => (e._$AI(t, n), e), f = {}, p = (e, t = f) => e._$AH = t, m = (e) => e._$AH, h = (e) => {
	e._$AR(), e._$AA.remove();
}, g = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), g(e, t);
	return !0;
}, _ = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, v = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), x(t);
	}
};
function y(e) {
	this._$AN === void 0 ? this._$AM = e : (_(this), this._$AM = e, v(this));
}
function b(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) if (t) if (Array.isArray(r)) for (let e = n; e < r.length; e++) g(r[e], !1), _(r[e]);
	else r != null && (g(r, !1), _(r));
	else g(this, e);
}
var x = (e) => {
	e.type == r.CHILD && (e._$AP ??= b, e._$AQ ??= y);
}, S = class extends t {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), v(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (g(this, e), _(this));
	}
	setValue(e) {
		if (c(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, C = () => new w(), w = class {}, T = /* @__PURE__ */ new WeakMap(), E = e(class extends S {
	render(e) {
		return n;
	}
	update(e, [t]) {
		let r = t !== this.G;
		return r && this.rt(void 0), (r || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), n;
	}
	rt(e) {
		if (this.G !== void 0) if (this.isConnected || (e = void 0), typeof this.G == "function") {
			let t = this.ht ?? globalThis, n = T.get(t);
			n === void 0 && (n = /* @__PURE__ */ new WeakMap(), T.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
		} else this.G.value = e;
	}
	get lt() {
		return typeof this.G == "function" ? T.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
});
//#endregion
export { h as a, c, m as i, d as l, E as n, s as o, S as r, p as s, C as t, u };
