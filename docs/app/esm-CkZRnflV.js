import { n as e, r as t } from "./esm-Bt6Taih_.js";
import { r as n, t as r } from "./browser-CzO6UwDw.js";
import { t as i } from "./SharedReadCache-Ey5QIiPM.js";
//#region ../../node_modules/@gmod/tabix/esm/chunk.js
var a = class {
	minv;
	maxv;
	bin;
	endPosition;
	constructor(e, t, n, r = t.blockPosition + 65536) {
		this.minv = e, this.maxv = t, this.bin = n, this.endPosition = r;
	}
	toString() {
		return `${this.minv.toString()}..${this.maxv.toString()} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`;
	}
	fetchedSize() {
		return this.endPosition - this.minv.blockPosition;
	}
};
//#endregion
//#region ../../node_modules/@gmod/tabix/node_modules/@jbrowse/quick-lru/esm/index.js
function o(e, t) {
	if (!(t > 0)) throw TypeError(`\`${e}\` must be a number greater than 0`);
}
var s = class {
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n;
	#r;
	#i;
	constructor(e) {
		let t = e.maxAge ?? Infinity;
		o("maxSize", e.maxSize), o("maxAge", t), this.#n = e.maxSize, this.#r = t, this.#i = e.onEviction;
	}
	#a(e) {
		let t = this.#i;
		if (t) for (let [n, r] of e) t(n, r.value);
	}
	#o(e, t) {
		return t.expiry !== void 0 && t.expiry <= Date.now() && (this.#i?.(e, t.value), this.delete(e), !0);
	}
	#s(e, t) {
		return this.#o(e, t) ? void 0 : t.value;
	}
	#c(e, t) {
		if (this.#t.delete(e), this.#e.set(e, t), this.#e.size >= this.#n) {
			let e = this.#t;
			this.#t = this.#e, this.#e = /* @__PURE__ */ new Map(), this.#a(e);
		}
	}
	#l(e) {
		this.#t = new Map(e), this.#e = /* @__PURE__ */ new Map();
	}
	*#u() {
		for (let e of [this.#t, this.#e]) for (let t of e) this.#o(...t) || (yield t);
	}
	get(e) {
		let t = this.#e.get(e);
		if (t) return this.#s(e, t);
		let n = this.#t.get(e);
		if (n && !this.#o(e, n)) return this.#c(e, n), n.value;
	}
	set(e, t, { maxAge: n = this.#r } = {}) {
		let r = {
			value: t,
			expiry: n === Infinity ? void 0 : Date.now() + n
		};
		return this.#e.has(e) ? this.#e.set(e, r) : this.#c(e, r), this;
	}
	has(e) {
		let t = this.#e.get(e) ?? this.#t.get(e);
		return t !== void 0 && !this.#o(e, t);
	}
	peek(e) {
		let t = this.#e.get(e) ?? this.#t.get(e);
		return t ? this.#s(e, t) : void 0;
	}
	expiresIn(e) {
		let t = this.#e.get(e) ?? this.#t.get(e);
		if (t) return t.expiry === void 0 ? Infinity : t.expiry - Date.now();
	}
	delete(e) {
		return this.#e.delete(e) || this.#t.delete(e);
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
	resize(e) {
		o("maxSize", e);
		let t = [...this.#u()], n = t.length - e;
		n < 0 ? (this.#e = new Map(t), this.#t = /* @__PURE__ */ new Map()) : (this.#a(t.slice(0, n)), this.#l(t.slice(n))), this.#n = e;
	}
	evict(e = 1) {
		if (!(e > 0)) return;
		let t = [...this.#u()], n = Math.trunc(Math.min(e, t.length - 1));
		n > 0 && (this.#a(t.slice(0, n)), this.#l(t.slice(n)));
	}
	get size() {
		return Math.min(this.#e.size + this.#t.size, this.#n);
	}
	get maxSize() {
		return this.#n;
	}
	get maxAge() {
		return this.#r;
	}
	*entriesAscending() {
		for (let [e, t] of this.#u()) yield [e, t.value];
	}
	*entriesDescending() {
		for (let e of [this.#e, this.#t]) for (let [t, n] of [...e].reverse()) this.#o(t, n) || (yield [t, n.value]);
	}
	entries() {
		return this.entriesAscending();
	}
	[Symbol.iterator]() {
		return this.entriesAscending();
	}
	*keys() {
		for (let [e] of this) yield e;
	}
	*values() {
		for (let [, e] of this) yield e;
	}
	forEach(e, t = this) {
		for (let [n, r] of this) e.call(t, r, n, this);
	}
	get [Symbol.toStringTag]() {
		return "QuickLRU";
	}
	toString() {
		return `QuickLRU(${this.size}/${this.maxSize})`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, c = 2 ** 32;
function l(e, t = 0) {
	let n = e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
	return ((e[t + 4] | e[t + 5] << 8 | e[t + 6] << 16 | e[t + 7] << 24) >>> 0) * c + (n >>> 0);
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/virtualOffset.js
var u = class {
	blockPosition;
	dataPosition;
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
function d(e, t = 0) {
	return new u(e[t + 7] * 1099511627776 + e[t + 6] * 4294967296 + e[t + 5] * 16777216 + e[t + 4] * 65536 + e[t + 3] * 256 + e[t + 2], e[t + 1] << 8 | e[t]);
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/util.js
function f(e, t) {
	let n = e.length;
	if (n === 0) return e;
	let r;
	if (t) {
		let i = t.blockPosition, a = t.dataPosition;
		r = [];
		for (let t = 0; t < n; t++) {
			let n = e[t];
			(n.maxv.blockPosition - i || n.maxv.dataPosition - a) > 0 && r.push(n);
		}
		if (r.length === 0) return r;
	} else r = e;
	r.sort((e, t) => {
		let n = e.minv.blockPosition - t.minv.blockPosition;
		return n === 0 ? e.minv.dataPosition - t.minv.dataPosition : n;
	});
	let i = [r[0]], o = r[0].minv.blockPosition, s = r[0].maxv.blockPosition;
	for (let e = 1; e < r.length; e++) {
		let t = r[e], n = t.minv.blockPosition, c = t.maxv.blockPosition;
		if (n - s < 65e3 && c - o < 5e6) {
			let e = i.at(-1);
			(c - s || t.maxv.dataPosition - e.maxv.dataPosition) > 0 && (i[i.length - 1] = new a(e.minv, t.maxv, e.bin, t.endPosition), s = c);
		} else i.push(t), o = n, s = c;
	}
	return p(i);
}
function p(e) {
	let t = [e[0]];
	for (let n = 1; n < e.length; n++) {
		let r = e[n], i = t.at(-1).maxv;
		if ((r.minv.blockPosition - i.blockPosition || r.minv.dataPosition - i.dataPosition) >= 0) {
			t.push(r);
			continue;
		}
		(r.maxv.blockPosition - i.blockPosition || r.maxv.dataPosition - i.dataPosition) > 0 && t.push(new a(i, r.maxv, r.bin, r.endPosition));
	}
	return t;
}
function m(e, t = []) {
	let n = [...t];
	for (let t of e) n.push(t.minv.blockPosition, t.maxv.blockPosition);
	n.sort((e, t) => e - t);
	for (let t of e) {
		let e = t.maxv.blockPosition, r = 0, i = n.length;
		for (; r < i;) {
			let t = r + i >>> 1;
			n[t] > e ? i = t : r = t + 1;
		}
		r < n.length && (t.endPosition = Math.min(t.endPosition, n[r]));
	}
}
function h(e, t, n, r) {
	let i = r ? r.blockPosition : Infinity, a = r ? r.dataPosition : 0, o = !1;
	for (let r = 0; r < n; r++) {
		let n = t + r * 8, s = e[n + 7] * 1099511627776 + e[n + 6] * 4294967296 + e[n + 5] * 16777216 + e[n + 4] * 65536 + e[n + 3] * 256 + e[n + 2], c = e[n + 1] << 8 | e[n];
		(s < i || s === i && c < a) && (i = s, a = c, o = !0);
	}
	return o ? new u(i, a) : r;
}
function g(e) {
	let t = new TextDecoder("utf-8"), n = [], r = {}, i = 0, a = 0;
	for (; a < e.length;) {
		let o = e.indexOf(0, a);
		if (o === -1) break;
		if (o > a) {
			let s = t.decode(e.subarray(a, o));
			n[i] = s, r[s] = i;
		}
		a = o + 1, i++;
	}
	return {
		refNameToId: r,
		refIdToName: n
	};
}
var _ = {
	0: "generic",
	1: "SAM",
	2: "VCF",
	3: "GAF"
};
function v(e, t) {
	let n = new DataView(e.buffer, e.byteOffset, e.byteLength), r = n.getInt32(t, !0), i = r & 65536 ? "zero-based-half-open" : "1-based-closed", a = _[r & 15];
	if (!a) throw Error(`invalid Tabix preset format flags ${r}`);
	let o = {
		ref: n.getInt32(t + 4, !0),
		start: n.getInt32(t + 8, !0),
		end: n.getInt32(t + 12, !0)
	}, s = n.getInt32(t + 16, !0), c = s ? String.fromCharCode(s) : void 0, l = n.getInt32(t + 20, !0), u = n.getInt32(t + 24, !0), { refIdToName: d, refNameToId: f } = g(e.subarray(t + 28, t + 28 + u));
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
function y(e, t) {
	return { lineCount: l(e, t) };
}
function b(e, t = 5) {
	let n = new s({ maxSize: t });
	return (t) => {
		let r = n.get(t);
		if (r !== void 0) return r;
		let i = e(t);
		return i !== void 0 && n.set(t, i), i;
	};
}
//#endregion
//#region ../../node_modules/@gmod/tabix/esm/indexFile.js
function x(e, t, n, r) {
	if (t > 2 ** (n + r * 3)) return;
	let i = (8 ** (r + 1) - 1) / 7, a = (8 ** r - 1) / 7 + Math.floor((t - 1) / 2 ** n) + 1;
	for (a >= i && (a = 0);;) {
		for (; a % 8 == 1;) a = (a - 1) / 8;
		if (a === 0) return;
		let t = e[a];
		if (t?.length) {
			let e = t[0].minv;
			for (let n = 1; n < t.length; n++) {
				let r = t[n].minv;
				r.compareTo(e) < 0 && (e = r);
			}
			return e;
		}
		a++;
	}
}
function S(e, t) {
	return e.format === "GAF" ? 0 : e.refNameToId[t];
}
var C = class {
	filehandle;
	parseCache = new i({});
	constructor({ filehandle: e }) {
		this.filehandle = e;
	}
	async readIndexBytes(t) {
		let n = await this.filehandle.readFile({
			signal: t.signal,
			onProgress: t.onProgress
		}), r = await e(n);
		return {
			bytes: r,
			dataView: new DataView(r.buffer, r.byteOffset, r.byteLength)
		};
	}
	async lineCount(e, t = {}) {
		let n = await this.parse(t), r = S(n, e);
		return r === void 0 ? -1 : n.indices(r)?.stats?.lineCount ?? -1;
	}
	async getMetadata(e = {}) {
		let { indices: t, ...n } = await this.parse(e);
		return n;
	}
	async blocksForRange(e, t, n, r = {}) {
		let i = await this.parse(r), a = S(i, e);
		if (a === void 0) return [];
		let o = i.indices(a);
		if (!o) return [];
		i.format === "GAF" && (t = Math.max(t - 1, 0));
		let s = [];
		for (let [e, r] of this.reg2bins(t, n, i)) for (let t = e; t <= r; t++) {
			let e = o.binIndex[t];
			if (e) for (let t of e) s.push(t);
		}
		let c = f(s, this.lowestOffset(o, t, i)), l = x(o.binIndex, n, i.minShift, i.depth);
		if (l) {
			let e = c.length;
			for (; e > 0 && c[e - 1].minv.compareTo(l) >= 0;) e--;
			c.length = e;
		}
		return c;
	}
	parse(e = {}) {
		return this.parseCache.get("index", e.signal, (t) => this._parse({
			...e,
			signal: t
		}));
	}
	async hasRefSeq(e, t = {}) {
		return !!(await this.parse(t)).indices(e)?.binIndex;
	}
}, w = 21582659, T = 38359875;
function E(e, t) {
	return e * 2 ** t;
}
function D(e, t) {
	return Math.floor(e / 2 ** t);
}
var O = class extends C {
	async _parse(e = {}) {
		let { bytes: t, dataView: n } = await this.readIndexBytes(e), r = n.getUint32(0, !0), i;
		if (r === w) i = 1;
		else if (r === T) i = 2;
		else throw Error(`Not a CSI file (magic=${r})`);
		let o = n.getInt32(4, !0), s = n.getInt32(8, !0), c = (8 ** (s + 1) - 1) / 7, l = 2 ** (o + s * 3), u = n.getInt32(12, !0), f = u >= 28 && (n.getInt32(16, !0) & 15) == 3, p = u >= 30 || f ? v(t, 16) : {
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
		}, g = n.getInt32(16 + u, !0), _ = 16 + u + 4, x, S = [];
		for (let e = 0; e < g; e++) {
			S.push(_);
			let e = n.getInt32(_, !0);
			_ += 4;
			for (let r = 0; r < e; r++) {
				let e = n.getUint32(_, !0);
				if (_ += 4, e > c) _ += 44;
				else {
					x = h(t, _, 1, x), _ += 8;
					let e = n.getInt32(_, !0);
					_ += 4 + 16 * e;
				}
			}
		}
		function C(e) {
			let r = S[e];
			if (r === void 0) return;
			let i = r, o = n.getInt32(i, !0);
			i += 4;
			let s = {}, l = {}, u;
			for (let e = 0; e < o; e++) {
				let e = n.getUint32(i, !0);
				if (i += 4, e > c) u = y(t, i + 28), i += 44;
				else {
					l[e] = d(t, i), i += 8;
					let r = n.getInt32(i, !0);
					i += 4;
					let o = Array.from({ length: r });
					for (let n = 0; n < r; n++) o[n] = new a(d(t, i), d(t, i + 8), e), i += 16;
					s[e] = o;
				}
			}
			return m(Object.values(s).flat()), {
				binIndex: s,
				loffsets: l,
				stats: u
			};
		}
		return {
			...p,
			csi: !0,
			refCount: g,
			maxBlockSize: 65536,
			firstDataLine: x,
			csiVersion: i,
			indices: b(C),
			minShift: o,
			depth: s,
			maxBinNumber: c,
			maxRefLength: l
		};
	}
	lowestOffset(e, t, { minShift: n, depth: r }) {
		let { loffsets: i } = e, a;
		if (i) {
			let e = (E(1, 3 * r) - 1) / 7 + D(Math.max(t, 0), n);
			for (; a === void 0 && e > 0;) if (a = i[e], a === void 0) {
				let t = Math.floor((e - 1) / 8), n = t * 8 + 1;
				e = e > n ? e - 1 : t;
			}
			a ??= i[0];
		}
		return a;
	}
	reg2bins(e, t, { minShift: n, depth: r, maxBinNumber: i }) {
		e = Math.max(e, 0);
		let a = 2 ** (n + r * 3);
		t > a && (t = a), --t;
		let o = 0, s = 0, c = n + r * 3, l = [];
		for (; o <= r; c -= 3, s += E(1, o * 3), o += 1) {
			let a = s + D(e, c), o = s + D(t, c);
			if (o - a + l.length > i) throw Error(`query ${e}-${t} is too large for current binning scheme (shift ${n}, depth ${r}), try a smaller query or a coarser index binning scheme`);
			l.push([a, o]);
		}
		return l;
	}
}, k = 21578324, A = 5, j = 14, M = 2 ** 29;
function N(e) {
	return Math.min(Math.max(e, 0), M);
}
var P = class extends C {
	reg2bins(e, t) {
		e > M && console.warn("querying outside of possible tabix range");
		let n = N(e), r = Math.min(t, M) - 1, i = [];
		return n <= r && i.push([0, 0], [1 + (n >> 26), 1 + (r >> 26)], [9 + (n >> 23), 9 + (r >> 23)], [73 + (n >> 20), 73 + (r >> 20)], [585 + (n >> 17), 585 + (r >> 17)], [4681 + (n >> 14), 4681 + (r >> 14)]), i;
	}
	lowestOffset(e, t) {
		let n = e.linearIndex;
		return n?.[Math.min(N(t) >> j, n.length - 1)];
	}
	async _parse(e = {}) {
		let { bytes: t, dataView: n } = await this.readIndexBytes(e);
		if (n.getUint32(0, !0) !== k) throw Error("Not a TBI file");
		let r = n.getUint32(4, !0), { refNameToId: i, refIdToName: o, coordinateType: s, format: c, columnNumbers: l, metaChar: u, skipLines: f } = v(t, 8), p = 36 + n.getInt32(32, !0), g, _ = [];
		for (let e = 0; e < r; e++) {
			_.push(p);
			let e = n.getInt32(p, !0);
			p += 4;
			for (let t = 0; t < e; t++) {
				let e = n.getUint32(p, !0);
				p += 4;
				let t = n.getInt32(p, !0);
				if (p += 4, e > 37450) throw Error("tabix index contains too many bins, please use a CSI index");
				p += 16 * t;
			}
			let r = n.getInt32(p, !0);
			p += 4, g = h(t, p, r, g), p += 8 * r;
		}
		function x(e) {
			let r = _[e];
			if (r === void 0) return;
			let i = r, o = n.getInt32(i, !0);
			i += 4;
			let s = {}, c;
			for (let e = 0; e < o; e++) {
				let e = n.getUint32(i, !0);
				if (i += 4, e > 37450) throw Error("tabix index contains too many bins, please use a CSI index");
				if (e === 37450) {
					let e = n.getInt32(i, !0);
					i += 4, e === 2 && (c = y(t, i + 16)), i += 16 * e;
				} else {
					let r = n.getInt32(i, !0);
					i += 4;
					let o = Array.from({ length: r });
					for (let n = 0; n < r; n++) o[n] = new a(d(t, i), d(t, i + 8), e), i += 16;
					s[e] = o;
				}
			}
			let l = n.getInt32(i, !0);
			i += 4;
			let u = Array.from({ length: l });
			for (let e = 0; e < l; e++) u[e] = d(t, i), i += 8;
			return m(Object.values(s).flat(), u.map((e) => e.blockPosition)), {
				binIndex: s,
				linearIndex: u,
				stats: c
			};
		}
		return {
			indices: b(x),
			metaChar: u,
			minShift: j,
			depth: A,
			maxBinNumber: 37449,
			maxRefLength: M,
			skipLines: f,
			firstDataLine: g,
			columnNumbers: l,
			coordinateType: s,
			format: c,
			refIdToName: o,
			refNameToId: i,
			maxBlockSize: 65536
		};
	}
}, F = 9, I = 10, L = 13, R = 59, z = 60, B = 62, V = 6, H = 1024 * 2 ** 20, U = 18e4;
function W(e, t, i) {
	if (e) return e;
	if (t) return new r(t);
	if (i) return new n(i);
	throw TypeError("must provide either filehandle, path, or url");
}
function G({ tbiFilehandle: e, csiFilehandle: t, tbiPath: i, csiPath: a, tbiUrl: o, csiUrl: s, path: c, url: l }) {
	if (e) return new P({ filehandle: e });
	if (t) return new O({ filehandle: t });
	if (i) return new P({ filehandle: new r(i) });
	if (a) return new O({ filehandle: new r(a) });
	if (s) return new O({ filehandle: new n(s) });
	if (o) return new P({ filehandle: new n(o) });
	if (c) return new P({ filehandle: new r(`${c}.tbi`) });
	if (l) return new P({ filehandle: new n(`${l}.tbi`) });
	throw TypeError("must provide one of tbiFilehandle, tbiPath, csiFilehandle, csiPath, tbiUrl, csiUrl");
}
function K(e, t, n, r, i) {
	return e[n] * 256 + (r - t[n]) + i + 1;
}
function q(e, t, n, r, i, a) {
	let o = t + (r - n);
	if (e[i] === 46) return o;
	let s = i;
	for (let n = i; n <= a; n++) if (n === a || e[n] === R) {
		let r = n - s;
		if (r >= 10 && e[s] === 83 && e[s + 1] === 86 && e[s + 2] === 84 && e[s + 3] === 89 && e[s + 4] === 80 && e[s + 5] === 69 && e[s + 6] === 61 && e[s + 7] === 84 && e[s + 8] === 82 && e[s + 9] === 65) return t + 1;
		r >= 4 && e[s] === 69 && e[s + 1] === 78 && e[s + 2] === 68 && e[s + 3] === 61 && (o = Z(e, s + 4, n)), s = n + 1;
	}
	return o;
}
var J = new TextDecoder();
function Y(e, t) {
	let n = -1, r = t.charCodeAt(0);
	for (let t = 0, i = e.length; t < i; t++) {
		let i = e[t];
		if (t === n + 1 && i !== r) break;
		i === I && (n = t);
	}
	return e.subarray(0, n + 1);
}
function X(e, t) {
	let n = 0;
	for (let r = 0; r < t; r++) {
		let t = e.indexOf(I, n);
		if (t === -1) {
			n = e.length;
			break;
		}
		n = t + 1;
	}
	return J.decode(e.subarray(0, n)).split(/\r?\n/).slice(0, t);
}
function Z(e, t, n) {
	let r = 0;
	for (let i = t; i < n; i++) {
		let t = e[i];
		if (t >= 48 && t <= 57) r = r * 10 + (t - 48);
		else break;
	}
	return r;
}
function Q(e, t, n, r, { start: i, end: a, pathCol: o, metaCharCode: s, decoder: c, callback: l }) {
	let u = 0, d = 0;
	for (; u < e.length;) {
		let f = e.indexOf(I, u);
		if (f === -1) break;
		let p = u;
		u = f + 1;
		let m = p + r;
		for (; d < n.length && m >= n[d];) d++;
		if (e[p] === s) continue;
		let h = p;
		for (let t = 1; t < o; t++) {
			let t = e.indexOf(F, h);
			if (t === -1 || t >= f) {
				h = f;
				break;
			}
			h = t + 1;
		}
		let g = e[h];
		if (g !== B && g !== z) continue;
		let _ = e.indexOf(F, h);
		(_ === -1 || _ > f) && (_ = f);
		let v = Infinity, y = -1, b = h;
		for (; b < _;) {
			let t = 0, n = b + 1;
			for (; n < _; n++) {
				let r = e[n] - 48;
				if (r < 0 || r > 9) break;
				t = t * 10 + r;
			}
			t < v && (v = t), t > y && (y = t), b = n;
		}
		if (v >= a) return !0;
		if (y >= i) {
			let i = e[f - 1] === L ? f - 1 : f;
			l(c.decode(e.subarray(p, i)), K(t, n, d, p, r), v, y + 1);
		}
	}
	return !1;
}
var $ = class {
	filehandle;
	index;
	chunkCache;
	headerCache = new i({});
	bgzfWorkerPool;
	constructor({ path: e, filehandle: t, url: n, tbiPath: r, tbiUrl: a, tbiFilehandle: o, csiPath: s, csiUrl: c, csiFilehandle: l, chunkCacheSize: u = H, chunkCacheIdleTimeoutMs: d = U, chunkCacheBudget: f, bgzfWorkerPool: p }) {
		this.bgzfWorkerPool = p, this.filehandle = W(t, e, n), this.index = G({
			tbiFilehandle: o,
			csiFilehandle: l,
			tbiPath: r,
			csiPath: s,
			tbiUrl: a,
			csiUrl: c,
			path: e,
			url: n
		}), this.chunkCache = new i({
			maxSize: u,
			sizeOf: (e) => e.buffer.byteLength,
			cacheKey: (e) => e.toString(),
			idleTimeoutMs: d,
			budget: f,
			fill: (e, t) => this.readChunk(e, { signal: t })
		});
	}
	clearChunkCache() {
		this.chunkCache.clear();
	}
	async bytesForRegions(e, t = {}) {
		let n = [];
		for (let { refName: r, start: i, end: a } of e) {
			let e = await this.index.blocksForRange(r, i, a, t);
			for (let t of e) n.push(t);
		}
		let r = 0;
		for (let e of f(n)) r += e.fetchedSize();
		return r;
	}
	async getLines(e, t, n, r) {
		let i, a = {}, o, s;
		typeof r == "function" ? o = r : (a = r, o = r.lineCallback, i = r.signal, s = r.onProgress);
		let c = await this.index.getMetadata(a), l = t ?? 0, u = n ?? c.maxRefLength;
		if (l > u) throw TypeError("invalid start and end coordinates. start must be less than or equal to end");
		if (l === u) return;
		let d = await this.index.blocksForRange(e, l, u, a), f = c.format === "VCF", p = c.columnNumbers.ref || 0, m = c.columnNumbers.start || 0, h = f ? 8 : c.columnNumbers.end || 0, g = Math.max(p, m, h), _ = c.metaChar?.charCodeAt(0), v = c.coordinateType === "1-based-closed" ? -1 : 0, y = new TextEncoder(), b = new TextDecoder(), x = y.encode(e), S = new Int32Array(g + 1), C = c.format === "GAF" ? {
			start: l,
			end: u,
			pathCol: m,
			metaCharCode: _,
			decoder: b,
			callback: o
		} : void 0, w = 0;
		for (let e of d) w += e.fetchedSize();
		let T = 0;
		s?.(0, w);
		let E = 1, D = [], O = (e) => {
			for (; D.length < Math.min(e, d.length);) {
				let e = d[D.length], t = this.chunkCache.get(e, i);
				t.catch(() => {}), D.push(t);
			}
		};
		O(1);
		for (let e = 0, t = d.length; e < t; e++) {
			let t = d[e], { buffer: n, cpositions: r, dpositions: i } = await D[e];
			T += t.fetchedSize(), s?.(T, w);
			let a = t.minv.dataPosition;
			if (C) {
				if (Q(n, r, i, a, C)) return;
			} else {
				let e = 0, t = 0;
				for (; e < n.length;) {
					let s = n.indexOf(I, e);
					if (s === -1) break;
					let c = e + a;
					for (; t < i.length && c >= i[t];) t++;
					if (_ !== void 0 && n[e] === _) {
						e = s + 1;
						continue;
					}
					S[0] = e - 1;
					for (let e = 0; e < g; e++) {
						let t = S[e], r = t < s ? n.indexOf(F, t + 1) : -1;
						S[e + 1] = r === -1 || r >= s ? s : r;
					}
					let d = S[p - 1] + 1, y = S[p] - d;
					if (y !== x.length) {
						e = s + 1;
						continue;
					}
					let C = !0;
					for (let e = 0; e < y; e++) if (n[d + e] !== x[e]) {
						C = !1;
						break;
					}
					if (!C) {
						e = s + 1;
						continue;
					}
					let w = Z(n, S[m - 1] + 1, S[m]) + v;
					if (w >= u) return;
					let T;
					if (T = h === 0 || h === m ? w + 1 : f ? q(n, w, S[3] + 1, S[4], S[h - 1] + 1, S[h]) : Z(n, S[h - 1] + 1, S[h]), T > l) {
						let c = n[s - 1] === L ? s - 1 : s, l = b.decode(n.subarray(e, c));
						o(l, K(r, i, t, e, a), w, T);
					}
					e = s + 1;
				}
			}
			E = Math.min(E * 2, V), O(e + 1 + E);
		}
	}
	async getMetadata(e = {}) {
		return this.index.getMetadata(e);
	}
	async readHeaderBytes(t) {
		let { firstDataLine: n, maxBlockSize: r } = await this.getMetadata(t), i = (n?.blockPosition ?? 0) + r, a = await this.filehandle.read(i, 0, t);
		return e(a);
	}
	async parseHeader(e) {
		let { metaChar: t, skipLines: n = 0 } = await this.getMetadata(e), r = await this.readHeaderBytes(e);
		return {
			header: J.decode(t ? Y(r, t) : r),
			skippedLines: n > 0 ? X(r, n) : []
		};
	}
	getParsedHeader(e = {}) {
		return this.headerCache.get("header", e.signal, (t) => this.parseHeader({
			...e,
			signal: t
		}));
	}
	async getHeaderBuffer(e = {}) {
		let { metaChar: t } = await this.getMetadata(e), n = await this.readHeaderBytes(e);
		return t ? Y(n, t) : n;
	}
	async getSkippedLines(e = {}) {
		let { skipLines: t = 0 } = await this.getMetadata(e);
		return t <= 0 ? [] : (await this.getParsedHeader(e)).skippedLines;
	}
	async getHeader(e = {}) {
		return (await this.getParsedHeader(e)).header;
	}
	async getHeaderLines(e = {}) {
		let { header: t, skippedLines: n } = await this.getParsedHeader(e);
		return (t ? t.split(/\r?\n/) : n).filter(Boolean);
	}
	async getReferenceSequenceNames(e = {}) {
		return (await this.getMetadata(e)).refIdToName;
	}
	async lineCount(e, t = {}) {
		return this.index.lineCount(e, t);
	}
	async readChunk(e, n = {}) {
		let r = await this.filehandle.read(e.fetchedSize(), e.minv.blockPosition, n), i = await this.bgzfWorkerPool;
		return t(r, e, i);
	}
};
//#endregion
export { O as CSI, P as TBI, $ as TabixIndexedFile, u as VirtualOffset };
