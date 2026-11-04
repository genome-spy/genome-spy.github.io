import { c as e, t } from "./flowNode-BSjy0Wz3.js";
//#region ../../node_modules/flatqueue/index.js
var n = class {
	constructor(e = Infinity, t = Float64Array, n = Uint32Array) {
		let r = e !== Infinity;
		this.ids = r ? new n(e) : [], this.values = r ? new t(e) : [], this.capacity = e, this.length = 0;
	}
	clear() {
		this.length = 0;
	}
	push(e, t) {
		if (this.length === this.capacity) throw RangeError("Queue is at capacity.");
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
				let n = (a << 1) + 1, o = n + 1, s = n + (+(o < r) & t[o] < t[n]);
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
		Array.isArray(this.ids) && (this.ids.length = this.length), Array.isArray(this.values) && (this.values.length = this.length);
	}
};
//#endregion
//#region ../core/src/utils/deepEqual.js
function r(e, t) {
	if (Object.is(e, t)) return !0;
	if (Array.isArray(e) || Array.isArray(t)) {
		if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!r(e[n], t[n])) return !1;
		return !0;
	}
	if (!i(e) || !i(t)) return !1;
	let n = Object.keys(e), a = Object.keys(t);
	if (n.length !== a.length) return !1;
	for (let i of n) if (!Object.prototype.hasOwnProperty.call(t, i) || !r(e[i], t[i])) return !1;
	return !0;
}
function i(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
//#endregion
//#region ../core/src/data/dataReadiness.js
function* a(e) {
	let t = [e], n = /* @__PURE__ */ new Set();
	for (; t.length;) {
		let e = t.pop();
		n.has(e) || (n.add(e), yield e, e.parent && t.push(e.parent), t.push(...e.dataDependencies));
	}
}
function o(e, t) {
	for (let n of a(e)) if (!n.isDataReady() || t && "isDataReadyForDomain" in n && !n.isDataReadyForDomain(t)) return !1;
	return !0;
}
//#endregion
//#region ../core/src/data/sources/dataSource.js
var s = class extends t {
	resultSuccessful = !1;
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
	complete(e = !0) {
		let t = this.view?.paramRuntime;
		this.resultSuccessful = !1, l(this, () => {
			super.complete(), this.resultSuccessful = e;
		}, t, e);
	}
	reset() {
		this.resultSuccessful = !1, super.reset();
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
}, c = class {
	owner;
	producerView;
	producer;
	candidate;
	constructor(e) {
		this.value = e;
	}
	publish() {
		if (!(this.candidate === void 0 || this.producer.disposed)) {
			for (let e of a(this.producer)) if (!e.isDataReady() || e instanceof s && !e.resultSuccessful) return;
			e(this.value.get(), this.candidate) || this.value.set(this.candidate);
		}
	}
};
function l(e, t, n, r = !0) {
	let i = [];
	e.visit((e) => {
		e.output && i.push(e.output);
	});
	let a = () => {
		try {
			let e = t();
			if (r) for (let e of i) e.publish();
			return e;
		} finally {
			for (let e of i) e.candidate = void 0;
		}
	};
	return n ? n.runInTransaction(a) : a();
}
//#endregion
//#region ../core/src/utils/url.js
var u = /^([A-Za-z]+:)?\/\//;
function d(e, t) {
	if (t && u.test(t)) return t;
	let n = typeof e == "function" ? e() : e;
	if (!n) return t;
	if (!t) return n;
	if (/[#?]/.test(n)) throw Error(`Cannot append to a url with query or hash. Append: ${t}, base: ${n}`);
	return p(n) + t;
}
function f(e, t, n = m()) {
	let r = typeof e == "function" ? e() : e;
	if (!t) return r;
	try {
		if (r) {
			let e = n ? new URL(r, n).href : new URL(r).href;
			return new URL(t, e).href;
		}
		if (n) return new URL(t, n).href;
	} catch {}
	return d(r, t);
}
function p(e) {
	let t = e.replace(/[^/]*$/, "");
	return t === "" ? void 0 : t.endsWith("://") ? e + "/" : t;
}
function m() {
	if (typeof document < "u" && document.baseURI) return document.baseURI;
	if (typeof window < "u" && window.location?.href) return window.location.href;
}
//#endregion
export { l as a, a as c, c as i, r as l, p as n, s as o, f as r, o as s, d as t, n as u };
