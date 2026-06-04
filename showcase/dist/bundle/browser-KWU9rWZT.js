import { t as e } from "./chunk-DmhlhrBa.js";
//#region ../../node_modules/generic-filehandle2/esm/util.js
async function t(e) {
	return e.bytes ? e.bytes() : new Uint8Array(await e.arrayBuffer());
}
//#endregion
//#region ../../node_modules/generic-filehandle2/esm/blobFile.js
var n = class {
	blob;
	constructor(e) {
		this.blob = e;
	}
	async read(e, n = 0) {
		return e === 0 ? new Uint8Array() : t(this.blob.slice(n, n + e));
	}
	async readFile(e) {
		let n = typeof e == "string" ? e : e?.encoding;
		if (n === "utf8") return this.blob.text();
		if (n) throw Error(`unsupported encoding: ${n}`);
		return t(this.blob);
	}
	stat() {
		return Promise.resolve({ size: this.blob.size });
	}
	close() {
		return Promise.resolve();
	}
};
//#endregion
//#region ../../node_modules/generic-filehandle2/esm/remoteFile.js
function r(e) {
	return (typeof e == "object" && e && "message" in e && typeof e.message == "string" ? e.message : `${e}`).replace(/\.$/, "");
}
var i = class {
	url;
	_stat;
	fetchImplementation;
	baseHeaders;
	baseOverrides;
	constructor(e, t = {}) {
		this.url = e, this.baseHeaders = t.headers ?? {}, this.baseOverrides = t.overrides ?? {}, this.fetchImplementation = t.fetch ?? globalThis.fetch.bind(globalThis);
	}
	buildRequest(e, t) {
		return {
			...this.baseOverrides,
			...e.overrides,
			headers: {
				...this.baseHeaders,
				...e.headers,
				...t
			},
			method: "GET",
			redirect: "follow",
			mode: "cors",
			signal: e.signal
		};
	}
	async fetch(e, t) {
		let n = (t) => Error(`${r(t)} fetching ${e}`, { cause: t }), i;
		try {
			i = await this.fetchImplementation(e, t);
		} catch (r) {
			if (`${r}`.includes("Failed to fetch")) {
				console.warn(`generic-filehandle: refetching ${e} to attempt to work around chrome CORS header caching bug`);
				try {
					i = await this.fetchImplementation(e, {
						...t,
						cache: "reload"
					});
				} catch (e) {
					throw n(e);
				}
			} else throw n(r);
		}
		return i;
	}
	async read(e, n, r = {}) {
		if (e === 0) return new Uint8Array();
		if (Number.isNaN(e) || Number.isNaN(n)) throw TypeError(`read() called with NaN length or position (length=${e}, position=${n}). The index file may be corrupt.`);
		let i = await this.fetch(this.url, this.buildRequest(r, { range: `bytes=${n}-${n + e - 1}` }));
		if (i.status === 416) return new Uint8Array();
		if (!i.ok) throw Error(`HTTP ${i.status} fetching ${this.url}`);
		if (i.status === 200 && n === 0 || i.status === 206) {
			let n = i.headers.get("content-range"), r = /\/(\d+)$/.exec(n ?? "");
			r?.[1] && (this._stat = { size: parseInt(r[1], 10) });
			let a = await t(i);
			return !this._stat && i.status === 200 && (this._stat = { size: a.byteLength }), a.byteLength <= e ? a : a.subarray(0, e);
		}
		throw Error(i.status === 200 ? `${this.url} fetch returned status 200, expected 206` : `HTTP ${i.status} fetching ${this.url}`);
	}
	async readFile(e = {}) {
		let n = typeof e == "string" ? e : e.encoding, r = typeof e == "string" ? {} : e, i = await this.fetch(this.url, this.buildRequest(r));
		if (!i.ok) throw Error(`HTTP ${i.status} fetching ${this.url}`);
		if (n === "utf8") return i.text();
		if (n) throw Error(`unsupported encoding: ${n}`);
		return t(i);
	}
	async stat() {
		return this._stat || await this.read(10, 0), this._stat ?? { size: 0 };
	}
	close() {
		return Promise.resolve();
	}
}, a = /* @__PURE__ */ e({
	BlobFile: () => n,
	LocalFile: () => o,
	RemoteFile: () => i
}), o = class {
	readFile() {
		return Promise.reject(/* @__PURE__ */ Error("unimplemented"));
	}
	read() {
		return Promise.reject(/* @__PURE__ */ Error("unimplemented"));
	}
	stat() {
		return Promise.reject(/* @__PURE__ */ Error("unimplemented"));
	}
	close() {
		return Promise.reject(/* @__PURE__ */ Error("unimplemented"));
	}
};
//#endregion
export { a as n, i as r, o as t };
