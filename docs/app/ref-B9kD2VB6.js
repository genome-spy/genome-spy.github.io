import { X as e, Y as t, Z as n, dt as r, ht as i } from "./src-b1lV1AP1.js";
//#region ../../node_modules/lit-html/directive-helpers.js
var { I: a } = i, o = (e) => e, s = (e) => e.strings === void 0, c = () => document.createComment(""), l = (e, t, n) => {
	let r = e._$AA.parentNode, i = t === void 0 ? e._$AB : t._$AA;
	if (n === void 0) n = new a(r.insertBefore(c(), i), r.insertBefore(c(), i), e, e.options);
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
}, u = (e, t, n = e) => (e._$AI(t, n), e), d = {}, f = (e, t = d) => e._$AH = t, p = (e) => e._$AH, m = (e) => {
	e._$AR(), e._$AA.remove();
}, h = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), h(e, t);
	return !0;
}, g = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, _ = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), b(t);
	}
};
function v(e) {
	this._$AN === void 0 ? this._$AM = e : (g(this), this._$AM = e, _(this));
}
function y(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) {
		if (t) {
			if (Array.isArray(r)) for (let e = n; e < r.length; e++) h(r[e], !1), g(r[e]);
			else r != null && (h(r, !1), g(r));
		} else h(this, e);
	}
}
var b = (e) => {
	e.type == n.CHILD && (e._$AP ??= y, e._$AQ ??= v);
}, x = class extends e {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), _(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (h(this, e), g(this));
	}
	setValue(e) {
		if (s(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, S = () => new C(), C = class {}, w = /* @__PURE__ */ new WeakMap(), T = t(class extends x {
	render(e) {
		return r;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), r;
	}
	rt(e) {
		if (this.G !== void 0) {
			if (this.isConnected || (e = void 0), typeof this.G == "function") {
				let t = this.ht ?? globalThis, n = w.get(t);
				n === void 0 && (n = /* @__PURE__ */ new WeakMap(), w.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
			} else this.G.value = e;
		}
	}
	get lt() {
		return typeof this.G == "function" ? w.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
});
//#endregion
export { f as a, l as c, m as i, T as n, s as o, p as r, u as s, S as t };
