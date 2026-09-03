import { v as e, y as t } from "./viewSelectors-D_imtq5Z.js";
//#region ../core/src/encoder/metadataChannels.js
function n(e) {
	return i(e?.key, "key");
}
function r(e) {
	return i(e?.search, "search");
}
function i(e, t) {
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
//#region ../core/src/view/containerView.js
var a = class n extends t {
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
	findDescendantByPath(e) {
		let t = this;
		for (let r = 0; r < e.length; r++) {
			if (!(t instanceof n)) return;
			let i = t.#t(e[r]);
			if (!i) return;
			if (r === e.length - 1) return i;
			t = i;
		}
	}
	#t(e) {
		for (let t of this) if (t.name === e) return t;
	}
	findDescendantByName(t) {
		let n;
		return this.visit((r) => {
			if (r.name == t) return n = r, e;
		}), n;
	}
	getDefaultResolution(e, t) {
		return "shared";
	}
}, o = /* @__PURE__ */ new WeakMap();
function s(e) {
	let t = o.get(e);
	return t || (t = new c(), o.set(e, t)), t;
}
var c = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t = /* @__PURE__ */ new Map();
	#n = 0;
	getId(e) {
		let t = this.#e.get(e);
		return t || (t = "view-" + String(this.#n), this.#n++, this.#e.set(e, t), this.#t.set(t, e)), t;
	}
	getView(e) {
		return this.#t.get(e);
	}
};
//#endregion
export { r as i, a as n, n as r, s as t };
