//#region ../../node_modules/@gmod/abortable-promise-cache/esm/AggregateAbortController.js
var e = class {}, t = class {
	constructor() {
		this.signals = /* @__PURE__ */ new Set(), this.abortController = new AbortController();
	}
	addSignal(t = new e()) {
		if (this.signal.aborted) throw Error("cannot add a signal, already aborted!");
		this.signals.add(t), t.aborted ? this.handleAborted(t) : typeof t.addEventListener == "function" && t.addEventListener("abort", () => {
			this.handleAborted(t);
		});
	}
	handleAborted(e) {
		this.signals.delete(e), this.signals.size === 0 && this.abortController.abort();
	}
	get signal() {
		return this.abortController.signal;
	}
	abort() {
		this.abortController.abort();
	}
}, n = class {
	constructor() {
		this.callbacks = /* @__PURE__ */ new Set();
	}
	addCallback(e = () => {}) {
		this.callbacks.add(e), this.currentMessage && e(this.currentMessage);
	}
	callback(e) {
		this.currentMessage = e;
		for (let t of this.callbacks) t(e);
	}
}, r = class e {
	constructor({ fill: e, cache: t }) {
		if (typeof e != "function") throw TypeError("must pass a fill function");
		if (typeof t != "object") throw TypeError("must pass a cache object");
		if (typeof t.get != "function" || typeof t.set != "function" || typeof t.delete != "function") throw TypeError("cache must implement get(key), set(key, val), and and delete(key)");
		this.cache = t, this.fillCallback = e;
	}
	static isAbortException(e) {
		return e.name === "AbortError" || e.code === "ERR_ABORTED" || e.message === "AbortError: aborted" || e.message === "Error: aborted";
	}
	evict(e, t) {
		this.cache.get(e) === t && this.cache.delete(e);
	}
	fill(e, r, i, a) {
		let o = new t(), s = new n();
		s.addCallback(a);
		let c = {
			aborter: o,
			promise: this.fillCallback(r, o.signal, (e) => {
				s.callback(e);
			}),
			settled: !1,
			statusReporter: s,
			get aborted() {
				return this.aborter.signal.aborted;
			}
		};
		c.aborter.addSignal(i), c.aborter.signal.addEventListener("abort", () => {
			c.settled || this.evict(e, c);
		}), c.promise.then(() => {
			c.settled = !0;
		}, () => {
			c.settled = !0, this.evict(e, c);
		}).catch((e) => {
			throw console.error(e), e;
		}), this.cache.set(e, c);
	}
	static checkSinglePromise(e, t) {
		function n() {
			if (t?.aborted) throw Object.assign(/* @__PURE__ */ Error("aborted"), { code: "ERR_ABORTED" });
		}
		return e.then((e) => (n(), e), (e) => {
			throw n(), e;
		});
	}
	has(e) {
		return this.cache.has(e);
	}
	get(t, n, r, i) {
		if (!r && n instanceof AbortSignal) throw TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");
		let a = this.cache.get(t);
		return a ? a.aborted && !a.settled ? (this.evict(t, a), this.get(t, n, r, i)) : a.settled ? a.promise : (a.aborter.addSignal(r), a.statusReporter.addCallback(i), e.checkSinglePromise(a.promise, r)) : (this.fill(t, n, r, i), e.checkSinglePromise(this.cache.get(t).promise, r));
	}
	delete(e) {
		let t = this.cache.get(e);
		t && (t.settled || t.aborter.abort(), this.cache.delete(e));
	}
	clear() {
		let e = this.cache.keys(), t = 0;
		for (let n = e.next(); !n.done; n = e.next()) this.delete(n.value), t += 1;
		return t;
	}
};
//#endregion
export { r as t };
