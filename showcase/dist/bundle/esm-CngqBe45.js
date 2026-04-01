import { n as e, r as t } from "./esm-C49STiCR.js";
import { t as n } from "./esm-CuVa5T98.js";
import { r, t as i } from "./browser-BTgw5ieH.js";
import { t as a } from "./AbortablePromiseCache-3gHJdF3E.js";
//#region ../../node_modules/@gmod/tabix/esm/chunk.js
var o = class {
	constructor(e, t, n, r) {
		this.minv = e, this.maxv = t, this.bin = n, this._fetchedSize = r;
	}
	toUniqueString() {
		return `${this.minv}..${this.maxv} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`;
	}
	toString() {
		return this.toUniqueString();
	}
	compareTo(e) {
		return this.minv.compareTo(e.minv) || this.maxv.compareTo(e.maxv) || this.bin - e.bin;
	}
	fetchedSize() {
		return this._fetchedSize === void 0 ? this.maxv.blockPosition + 65536 - this.minv.blockPosition : this._fetchedSize;
	}
}, s = class {
	constructor({ filehandle: e, renameRefSeqs: t = (e) => e }) {
		this.filehandle = e, this.renameRefSeq = t;
	}
	async getMetadata(e = {}) {
		let { indices: t, ...n } = await this.parse(e);
		return n;
	}
	_findFirstData(e, t) {
		return e ? e.compareTo(t) > 0 ? t : e : t;
	}
	async parse(e = {}) {
		return this.parseP ||= this._parse(e).catch((e) => {
			throw this.parseP = void 0, e;
		}), this.parseP;
	}
	async hasRefSeq(e, t = {}) {
		return !!(await this.parse(t)).indices[e]?.binIndex;
	}
	_parseNameBytes(e) {
		let t = 0, n = 0, r = [], i = {}, a = new TextDecoder("utf8");
		for (let o = 0; o < e.length; o += 1) if (!e[o]) {
			if (n < o) {
				let s = this.renameRefSeq(a.decode(e.subarray(n, o)));
				r[t] = s, i[s] = t;
			}
			n = o + 1, t += 1;
		}
		return {
			refNameToId: i,
			refIdToName: r
		};
	}
}, c = 65536, l = c * c;
function u(e, t = 0) {
	let n = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
	return ((e[t + 4] | e[t + 5] << 8 | e[t + 6] << 16 | e[t + 7] << 24) >>> 0) * l + (n >>> 0);
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/util.js
function d(e, t) {
	return t.minv.blockPosition - e.maxv.blockPosition < 65e3 && t.maxv.blockPosition - e.minv.blockPosition < 5e6;
}
function f(e, t) {
	let n = [], r;
	if (e.length === 0) return e;
	e.sort(function(e, t) {
		let n = e.minv.blockPosition - t.minv.blockPosition;
		return n === 0 ? e.minv.dataPosition - t.minv.dataPosition : n;
	});
	for (let i of e) (!t || i.maxv.compareTo(t) > 0) && (r === void 0 ? (n.push(i), r = i) : d(r, i) ? i.maxv.compareTo(r.maxv) > 0 && (r.maxv = i.maxv) : (n.push(i), r = i));
	return n;
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/virtualOffset.js
var p = class {
	constructor(e, t) {
		this.blockPosition = e, this.dataPosition = t;
	}
	toString() {
		return `${this.blockPosition}:${this.dataPosition}`;
	}
	compareTo(e) {
		return this.blockPosition - e.blockPosition || this.dataPosition - e.dataPosition;
	}
};
function m(e, t = 0) {
	return new p(e[t + 7] * 1099511627776 + e[t + 6] * 4294967296 + e[t + 5] * 16777216 + e[t + 4] * 65536 + e[t + 3] * 256 + e[t + 2], e[t + 1] << 8 | e[t]);
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/csi.js
var h = 21582659, g = 38359875, _ = {
	0: "generic",
	1: "SAM",
	2: "VCF"
};
function v(e, t) {
	return e * 2 ** t;
}
function y(e, t) {
	return Math.floor(e / 2 ** t);
}
var b = class extends s {
	constructor(e) {
		super(e), this.maxBinNumber = 0, this.depth = 0, this.minShift = 0;
	}
	async lineCount(e, t = {}) {
		let n = await this.parse(t), r = n.refNameToId[e];
		if (r === void 0 || !n.indices[r]) return -1;
		let { stats: i } = n.indices[r];
		return i ? i.lineCount : -1;
	}
	indexCov() {
		throw Error("CSI indexes do not support indexcov");
	}
	parseAuxData(e, t) {
		let n = new DataView(e.buffer), r = n.getInt32(t, !0), i = r & 65536 ? "zero-based-half-open" : "1-based-closed", a = _[r & 15];
		if (!a) throw Error(`invalid Tabix preset format flags ${r}`);
		let o = {
			ref: n.getInt32(t + 4, !0),
			start: n.getInt32(t + 8, !0),
			end: n.getInt32(t + 12, !0)
		}, s = n.getInt32(t + 16, !0), c = s ? String.fromCharCode(s) : void 0, l = n.getInt32(t + 20, !0), u = n.getInt32(t + 24, !0), { refIdToName: d, refNameToId: f } = this._parseNameBytes(e.subarray(t + 28, t + 28 + u));
		return {
			refIdToName: d,
			refNameToId: f,
			skipLines: l,
			metaChar: c,
			columnNumbers: o,
			format: a,
			coordinateType: i
		};
	}
	async _parse(t = {}) {
		let n = await e(await this.filehandle.readFile(t)), r = new DataView(n.buffer), i;
		if (r.getUint32(0, !0) === h) i = 1;
		else if (r.getUint32(0, !0) === g) i = 2;
		else throw Error("Not a CSI file");
		this.minShift = r.getInt32(4, !0), this.depth = r.getInt32(8, !0), this.maxBinNumber = ((1 << (this.depth + 1) * 3) - 1) / 7;
		let a = 2 ** (this.minShift + this.depth * 3), s = r.getInt32(12, !0), c = s && s >= 30 ? this.parseAuxData(n, 16) : {
			refIdToName: [],
			refNameToId: {},
			metaChar: void 0,
			columnNumbers: {
				ref: 0,
				start: 1,
				end: 2
			},
			coordinateType: "zero-based-half-open",
			format: "generic"
		}, l = r.getInt32(16 + s, !0), u, d = 16 + s + 4, f = Array(l).fill(0).map(() => {
			let e = r.getInt32(d, !0);
			d += 4;
			let t = {}, i;
			for (let a = 0; a < e; a += 1) {
				let e = r.getUint32(d, !0);
				if (e > this.maxBinNumber) i = this.parsePseudoBin(n, d + 4), d += 48;
				else {
					let i = m(n, d + 4);
					u = this._findFirstData(u, i);
					let a = r.getInt32(d + 12, !0);
					d += 16;
					let s = Array(a);
					for (let t = 0; t < a; t += 1) {
						let r = m(n, d), i = m(n, d + 8);
						d += 16, s[t] = new o(r, i, e);
					}
					t[e] = s;
				}
			}
			return {
				binIndex: t,
				stats: i
			};
		});
		return {
			...c,
			csi: !0,
			refCount: l,
			maxBlockSize: 65536,
			firstDataLine: u,
			csiVersion: i,
			indices: f,
			depth: this.depth,
			maxBinNumber: this.maxBinNumber,
			maxRefLength: a
		};
	}
	parsePseudoBin(e, t) {
		return { lineCount: u(e, t + 28) };
	}
	async blocksForRange(e, t, n, r = {}) {
		t < 0 && (t = 0);
		let i = await this.parse(r), a = i.refNameToId[e];
		if (a === void 0) return [];
		let s = i.indices[a];
		if (!s) return [];
		let c = this.reg2bins(t, n), l = [];
		for (let [e, t] of c) for (let n = e; n <= t; n++) if (s.binIndex[n]) for (let e of s.binIndex[n]) l.push(new o(e.minv, e.maxv, n));
		return f(l, new p(0, 0));
	}
	reg2bins(e, t) {
		--e, e < 1 && (e = 1), t > 2 ** 50 && (t = 2 ** 34), --t;
		let n = 0, r = 0, i = this.minShift + this.depth * 3, a = [];
		for (; n <= this.depth; i -= 3, r += v(1, n * 3), n += 1) {
			let n = r + y(e, i), o = r + y(t, i);
			if (o - n + a.length > this.maxBinNumber) throw Error(`query ${e}-${t} is too large for current binning scheme (shift ${this.minShift}, depth ${this.depth}), try a smaller query or a coarser index binning scheme`);
			a.push([n, o]);
		}
		return a;
	}
}, x = 21578324, S = 14;
function C(e, t) {
	return e += 1, --t, [
		[0, 0],
		[1 + (e >> 26), 1 + (t >> 26)],
		[9 + (e >> 23), 9 + (t >> 23)],
		[73 + (e >> 20), 73 + (t >> 20)],
		[585 + (e >> 17), 585 + (t >> 17)],
		[4681 + (e >> 14), 4681 + (t >> 14)]
	];
}
var w = class extends s {
	async lineCount(e, t = {}) {
		let n = await this.parse(t), r = n.refNameToId[e];
		return r === void 0 || !n.indices[r] ? -1 : n.indices[r].stats?.lineCount ?? -1;
	}
	async _parse(t = {}) {
		let n = await e(await this.filehandle.readFile(t)), r = new DataView(n.buffer);
		if (r.getUint32(0, !0) !== x) throw Error("Not a TBI file");
		let i = r.getUint32(4, !0), a = r.getUint32(8, !0), s = a & 65536 ? "zero-based-half-open" : "1-based-closed", c = {
			0: "generic",
			1: "SAM",
			2: "VCF"
		}[a & 15];
		if (!c) throw Error(`invalid Tabix preset format flags ${a}`);
		let l = {
			ref: r.getInt32(12, !0),
			start: r.getInt32(16, !0),
			end: r.getInt32(20, !0)
		}, u = r.getInt32(24, !0), d = ((1 << 18) - 1) / 7, f = 2 ** 29, p = u ? String.fromCharCode(u) : void 0, h = r.getInt32(28, !0), g = r.getInt32(32, !0), { refNameToId: _, refIdToName: v } = this._parseNameBytes(n.slice(36, 36 + g)), y = 36 + g, b;
		return {
			indices: Array(i).fill(0).map(() => {
				let e = r.getInt32(y, !0);
				y += 4;
				let t = {}, i;
				for (let a = 0; a < e; a += 1) {
					let e = r.getUint32(y, !0);
					if (y += 4, e > d + 1) throw Error("tabix index contains too many bins, please use a CSI index");
					if (e === d + 1) {
						let e = r.getInt32(y, !0);
						y += 4, e === 2 && (i = this.parsePseudoBin(n, y)), y += 16 * e;
					} else {
						let i = r.getInt32(y, !0);
						y += 4;
						let a = Array(i);
						for (let t = 0; t < i; t += 1) {
							let r = m(n, y), i = m(n, y + 8);
							y += 16, b = this._findFirstData(b, r), a[t] = new o(r, i, e);
						}
						t[e] = a;
					}
				}
				let a = r.getInt32(y, !0);
				y += 4;
				let s = Array(a);
				for (let e = 0; e < a; e += 1) s[e] = m(n, y), y += 8, b = this._findFirstData(b, s[e]);
				return {
					binIndex: t,
					linearIndex: s,
					stats: i
				};
			}),
			metaChar: p,
			maxBinNumber: d,
			maxRefLength: f,
			skipLines: h,
			firstDataLine: b,
			columnNumbers: l,
			coordinateType: s,
			format: c,
			refIdToName: v,
			refNameToId: _,
			maxBlockSize: 65536
		};
	}
	parsePseudoBin(e, t) {
		return { lineCount: u(e, t + 16) };
	}
	async blocksForRange(e, t, n, r = {}) {
		t < 0 && (t = 0);
		let i = await this.parse(r), a = i.refNameToId[e];
		if (a === void 0) return [];
		let s = i.indices[a];
		if (!s) return [];
		(s.linearIndex.length > 0 ? s.linearIndex[t >> S >= s.linearIndex.length ? s.linearIndex.length - 1 : t >> S] : new p(0, 0)) || console.warn("querying outside of possible tabix range");
		let c = C(t, n), l = [];
		for (let [e, t] of c) for (let n = e; n <= t; n++) if (s.binIndex[n]) for (let e of s.binIndex[n]) l.push(new o(e.minv, e.maxv, n));
		let u = s.linearIndex.length, d, m = Math.min(t >> 14, u - 1), h = Math.min(n >> 14, u - 1);
		for (let e = m; e <= h; ++e) {
			let t = s.linearIndex[e];
			t && (!d || t.compareTo(d) < 0) && (d = t);
		}
		return f(l, d);
	}
}, T = class {
	constructor({ path: e, filehandle: t, url: o, tbiPath: s, tbiUrl: c, tbiFilehandle: l, csiPath: u, csiUrl: d, csiFilehandle: f, renameRefSeqs: p, chunkCacheSize: m = 5 * 2 ** 20 }) {
		this.cache = new n({ maxSize: 1e3 });
		let h = p ?? ((e) => e);
		if (t) this.filehandle = t;
		else if (e) this.filehandle = new i(e);
		else if (o) this.filehandle = new r(o);
		else throw TypeError("must provide either filehandle or path");
		if (l) this.index = new w({
			filehandle: l,
			renameRefSeqs: h
		});
		else if (f) this.index = new b({
			filehandle: f,
			renameRefSeqs: h
		});
		else if (s) this.index = new w({
			filehandle: new i(s),
			renameRefSeqs: h
		});
		else if (u) this.index = new b({
			filehandle: new i(u),
			renameRefSeqs: h
		});
		else if (e) this.index = new w({
			filehandle: new i(`${e}.tbi`),
			renameRefSeqs: h
		});
		else if (d) this.index = new b({ filehandle: new r(d) });
		else if (c) this.index = new w({ filehandle: new r(c) });
		else if (o) this.index = new w({ filehandle: new r(`${o}.tbi`) });
		else throw TypeError("must provide one of tbiFilehandle, tbiPath, csiFilehandle, csiPath, tbiUrl, csiUrl");
		this.renameRefSeq = h, this.hasCustomRenameRefSeq = p !== void 0, this.chunkCache = new a({
			cache: new n({ maxSize: Math.floor(m / 65536) }),
			fill: (e, t) => this.readChunk(e, { signal: t })
		});
	}
	calculateFileOffset(e, t, n, r, i) {
		return e[n] * 256 + (r - t[n]) + i + 1;
	}
	async getLines(e, t, n, r) {
		let i, a = {}, o;
		typeof r == "function" ? o = r : (a = r, o = r.lineCallback, i = r.signal);
		let s = await this.index.getMetadata(a), c = t ?? 0, l = n ?? s.maxRefLength;
		if (!(c <= l)) throw TypeError("invalid start and end coordinates. start must be less than or equal to end");
		if (c === l) return;
		let u = await this.index.blocksForRange(e, c, l, a), d = new TextDecoder("utf8"), f = s.format === "VCF", p = {
			ref: s.columnNumbers.ref || 0,
			start: s.columnNumbers.start || 0,
			end: f ? 8 : s.columnNumbers.end || 0
		}, m = Math.max(p.ref, p.start, p.end), h = s.metaChar?.charCodeAt(0), g = s.coordinateType === "1-based-closed" ? -1 : 0, _ = !this.hasCustomRenameRefSeq;
		for (let t of u) {
			let { buffer: n, cpositions: r, dpositions: a } = await this.chunkCache.get(t.toString(), t, i), s = 0, u = 0, v = d.decode(n);
			if (n.length == v.length) for (; s < v.length;) {
				let n = v.indexOf("\n", s);
				if (n === -1) break;
				let i = v.slice(s, n);
				if (a) {
					let e = s + t.minv.dataPosition;
					for (; u < a.length && e >= a[u];) u++;
				}
				let d = this.checkLine(e, c, l, i, p.ref, p.start, p.end, m, h, g, f, _);
				if (d === null) return;
				d !== void 0 && o(i, this.calculateFileOffset(r, a, u, s, t.minv.dataPosition), d.start, d.end), s = n + 1;
			}
			else for (; s < n.length;) {
				let i = n.indexOf(10, s);
				if (i === -1) break;
				let v = n.slice(s, i), y = d.decode(v);
				if (a) {
					let e = s + t.minv.dataPosition;
					for (; u < a.length && e >= a[u];) u++;
				}
				let b = this.checkLine(e, c, l, y, p.ref, p.start, p.end, m, h, g, f, _);
				if (b === null) return;
				b !== void 0 && o(y, this.calculateFileOffset(r, a, u, s, t.minv.dataPosition), b.start, b.end), s = i + 1;
			}
		}
	}
	async getMetadata(e = {}) {
		return this.index.getMetadata(e);
	}
	async getHeaderBuffer(t = {}) {
		let { firstDataLine: n, metaChar: r, maxBlockSize: i } = await this.getMetadata(t), a = (n?.blockPosition || 0) + i, o = await e(await this.filehandle.read(a, 0, t));
		if (r) {
			let e = -1, t = r.charCodeAt(0);
			for (let n = 0, r = o.length; n < r; n++) {
				let r = o[n];
				if (n === e + 1 && r !== t) break;
				r === 10 && (e = n);
			}
			return o.subarray(0, e + 1);
		}
		return o;
	}
	async getHeader(e = {}) {
		let t = new TextDecoder("utf8"), n = await this.getHeaderBuffer(e);
		return t.decode(n);
	}
	async getReferenceSequenceNames(e = {}) {
		return (await this.getMetadata(e)).refIdToName;
	}
	checkLine(e, t, n, r, i, a, o, s, c, l, u, d) {
		if (c !== void 0 && r.charCodeAt(0) === c) return;
		if (r.length < 500) {
			let s = r.split("	"), c = s[i - 1];
			if (!(d ? c === e : this.renameRefSeq(c) === e)) return;
			let f = +s[a - 1] + l;
			if (f >= n) return null;
			let p;
			return p = o === 0 || o === a ? f + 1 : u ? this._getVcfEnd(f, s[3], s[o - 1]) : +s[o - 1], p <= t ? void 0 : {
				start: f,
				end: p
			};
		}
		let f = -1, p = [-1];
		for (let e = 0; e < s; e++) {
			let e = r.indexOf("	", f + 1);
			if (e === -1) {
				p.push(r.length);
				break;
			}
			p.push(e), f = e;
		}
		let m = r.slice(p[i - 1] + 1, p[i]);
		if (!(d ? m === e : this.renameRefSeq(m) === e)) return;
		let h = +r.slice(p[a - 1] + 1, p[a]) + l;
		if (h >= n) return null;
		let g;
		if (g = o === 0 || o === a ? h + 1 : u ? this._getVcfEnd(h, r.slice(p[3] + 1, p[4]), r.slice(p[o - 1] + 1, p[o])) : +r.slice(p[o - 1] + 1, p[o]), !(g <= t)) return {
			start: h,
			end: g
		};
	}
	_getVcfEnd(e, t, n) {
		let r = e + t.length;
		if (n.includes("SVTYPE=TRA")) return e + 1;
		if (n[0] !== ".") {
			let e = n.indexOf("END=");
			if (e !== -1 && (e === 0 || n[e - 1] === ";")) {
				let t = e + 4, i = n.indexOf(";", t);
				i === -1 && (i = n.length), r = Number.parseInt(n.slice(t, i), 10);
			}
		}
		return r;
	}
	async lineCount(e, t = {}) {
		return this.index.lineCount(e, t);
	}
	async readChunk(e, n = {}) {
		return t(await this.filehandle.read(e.fetchedSize(), e.minv.blockPosition, n), e, this.cache);
	}
};
//#endregion
export { b as CSI, w as TBI, T as TabixIndexedFile };
