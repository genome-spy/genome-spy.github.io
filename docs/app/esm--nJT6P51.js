import { i as e, n as t } from "./esm-Bt6Taih_.js";
import { t as n } from "./browser-CzO6UwDw.js";
import { t as r } from "./SharedReadCache-Ey5QIiPM.js";
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/long.js
function i(e, t = 0) {
	let n = e.getUint32(t, !0);
	return e.getUint32(t + 4, !0) * 4294967296 + n;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/gziIndex.js
var a = 16, o = {
	compressed: /* @__PURE__ */ new Float64Array(),
	uncompressed: /* @__PURE__ */ new Float64Array()
};
function s(e, t) {
	let n = new Float64Array(t + 1), r = new Float64Array(t + 1), o = new DataView(e.buffer, e.byteOffset, e.byteLength);
	for (let e = 0; e < t; e += 1) {
		let t = e * a;
		n[e + 1] = i(o, t), r[e + 1] = i(o, t + 8);
	}
	return {
		compressed: n,
		uncompressed: r
	};
}
function c(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + r >>> 1;
		e[i] <= t ? n = i + 1 : r = i;
	}
	return n;
}
var l = class {
	filehandle;
	index;
	constructor({ filehandle: e }) {
		this.filehandle = e;
	}
	_getIndex() {
		return this.index ||= this._readIndex().catch((e) => {
			throw this.index = void 0, e;
		}), this.index;
	}
	async _readIndex() {
		let e = await this.filehandle.read(8, 0), t = i(new DataView(e.buffer, e.byteOffset, e.byteLength));
		if (t === 0) return s(/* @__PURE__ */ new Uint8Array(), 0);
		if (t > (2 ** 53 - 1) / a) throw TypeError("integer overflow");
		return s(await this.filehandle.read(a * t, 8), t);
	}
	async getRelevantBlocksForRead(e, t) {
		if (e === 0) return {
			...o,
			nextCompressedPosition: void 0
		};
		let { compressed: n, uncompressed: r } = await this._getIndex(), i = c(r, t) - 1, a = c(r, t + e - 1);
		return {
			compressed: n.subarray(i, a),
			uncompressed: r.subarray(i, a),
			nextCompressedPosition: a < n.length ? n[a] : void 0
		};
	}
}, u = 10, d = 33554432;
function f(e) {
	let t = 0, n = [], r = () => {
		t--, n.shift()?.();
	};
	return async (i) => {
		t >= e && await new Promise((e) => {
			n.push(e);
		}), t++;
		try {
			return await i();
		} finally {
			r();
		}
	};
}
function p(e, t, n) {
	let r = [], i = e.length, a = 0;
	for (; a < i;) {
		let o = a + 1;
		for (; o < i && t[o] - t[a] < d;) o += 1;
		r.push({
			compressedStart: e[a],
			compressedEnd: o < i ? e[o] : n ?? e[i - 1] + 65536,
			uncompressedStart: t[a]
		}), a = o;
	}
	return r;
}
function m(e, t, n, r) {
	let i = Math.max(0, n - t), a = Math.min(r, t + e.length) - t;
	return i < e.length ? e.subarray(i, a) : /* @__PURE__ */ new Uint8Array();
}
var h = class {
	filehandle;
	gzi;
	limit;
	constructor({ filehandle: e, gziFilehandle: t, blockConcurrency: n = u }) {
		this.filehandle = e, this.gzi = new l({ filehandle: t }), this.limit = f(n);
	}
	async read(n, r) {
		let { compressed: i, uncompressed: a, nextCompressedPosition: o } = await this.gzi.getRelevantBlocksForRead(n, r);
		if (i.length === 0) return /* @__PURE__ */ new Uint8Array();
		let s = r + n, c = p(i, a, o), l = await Promise.all(c.map((e) => this.limit(async () => {
			let n = await this.filehandle.read(e.compressedEnd - e.compressedStart, e.compressedStart);
			return m(await t(n), e.uncompressedStart, r, s);
		})));
		return e(l);
	}
}, g = new TextDecoder("utf8");
function _(e) {
	return e.split(">").filter((e) => /\S/.test(e)).map((e) => {
		let [t, ...n] = e.split("\n"), [r, ...i] = t.split(" "), a = n.join("").replace(/\s/g, "");
		return {
			id: r,
			description: i.join(" "),
			sequence: a
		};
	});
}
var v = class {
	data;
	indexed;
	constructor({ fasta: e, path: t }) {
		let r;
		if (e) r = e;
		else if (t) r = new n(t);
		else throw Error("Need to pass fasta or path");
		this.data = r.readFile().then((e) => _(g.decode(e)));
	}
	getIndexed() {
		return this.indexed ??= this.data.then((e) => new Map(e.map((e) => [e.id, e]))), this.indexed;
	}
	async fetch(e, t, n) {
		let r = (await this.getIndexed()).get(e);
		if (!r) throw Error(`no sequence with id ${e} exists`);
		return r.sequence.slice(t, n);
	}
	async getSequenceNames() {
		return (await this.data).map((e) => e.id);
	}
}, y = new TextDecoder("utf8");
function b(e, t, n, r) {
	return e + t * Math.floor(r / n) + r % n;
}
async function x(e, t = {}) {
	let n = y.decode(await e.readFile(t)), r = /* @__PURE__ */ new Map();
	for (let e of n.split("\n")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.split("	");
		if (n.length < 5) throw Error(`Malformed FAI line (expected 5 tab-separated columns, got ${String(n.length)}): ${t}`);
		let [i, a, o, s, c] = n;
		if (i.startsWith(">")) throw Error("found > in sequence name, might have supplied FASTA file for the FASTA index");
		let l = +a, u = +s;
		if (l > 0 && u === 0) throw Error(`Invalid FAI index for "${i}": LINEBASES is 0, FASTA likely missing trailing newline; regenerate the .fai index`);
		r.set(i, {
			length: l,
			offset: +o,
			lineLength: u,
			lineBytes: +c
		});
	}
	return r;
}
async function S(e, t, n = 0, r, i) {
	if (n < 0) throw TypeError("regionStart cannot be less than 0");
	let a = Math.min(r ?? t.length, t.length);
	if (n >= a) return "";
	let o = b(t.offset, t.lineBytes, t.lineLength, n), s = b(t.offset, t.lineBytes, t.lineLength, a) - o, c = y.decode(await e.read(s, o, i)).replace(/\s+/g, "");
	if (/[^\x20-\x7e]/.test(c.slice(0, 1e3))) throw Error("Non-ASCII bytes in sequence; file may be gzip — use BgzipIndexedFasta or decompress");
	return c;
}
var C = class {
	fasta;
	fai;
	indexCache = new r({});
	constructor({ fasta: e, fai: t, path: r, faiPath: i }) {
		if (e) this.fasta = e;
		else if (r) this.fasta = new n(r);
		else throw Error("Need to pass filehandle for fasta or path to localfile");
		if (t) this.fai = t;
		else if (i) this.fai = new n(i);
		else if (r) this.fai = new n(`${r}.fai`);
		else throw Error("Need to pass filehandle for fai or path to localfile");
	}
	getIndexes(e) {
		return this.indexCache.get("fai", e?.signal, (t) => x(this.fai, {
			...e,
			signal: t
		}));
	}
	async getSequenceNames(e) {
		return [...(await this.getIndexes(e)).keys()];
	}
	async getSequenceSizes(e) {
		let t = {};
		for (let [n, r] of await this.getIndexes(e)) t[n] = r.length;
		return t;
	}
	async getSequenceSize(e, t) {
		return (await this.getIndexes(t)).get(e)?.length;
	}
	async hasReferenceSequence(e, t) {
		return (await this.getIndexes(t)).has(e);
	}
	async getResiduesByName(e, t, n, r) {
		let i = (await this.getIndexes(r)).get(e);
		if (i !== void 0) return S(this.fasta, i, t, n, r);
	}
	async getSequence(e, t, n, r) {
		return this.getResiduesByName(e, t, n, r);
	}
}, w = class extends C {
	constructor({ fasta: e, path: t, fai: r, faiPath: i, gzi: a, gziPath: o }) {
		let s;
		if (e && a) s = new h({
			filehandle: e,
			gziFilehandle: a
		});
		else if (t && o) s = new h({
			filehandle: new n(t),
			gziFilehandle: new n(o)
		});
		else throw Error("BgzipIndexedFasta requires either {fasta, gzi} or {path, gziPath}");
		super({
			fasta: s,
			fai: r,
			faiPath: i,
			path: t
		});
	}
};
//#endregion
export { w as BgzipIndexedFasta, v as FetchableSmallFasta, C as IndexedFasta, _ as parseSmallFasta };
