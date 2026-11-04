import { r as e } from "./browser-NEy9xNfQ.js";
import { t } from "./SharedReadCache-9sT2aIxW.js";
import { t as n } from "./inflate-BdC5KvHn.js";
//#region ../../node_modules/@genome-spy/figwig/dist/utils/binary.js
var r = class extends Error {
	constructor(e, t) {
		super(`Figwig: ${e}`, t), this.name = "FigWigError";
	}
};
function i(e, t) {
	if (!e) throw new r(t);
}
function a(e, t) {
	return i(e <= BigInt(2 ** 53 - 1), `${t} exceeds Number.MAX_SAFE_INTEGER`), Number(e);
}
var o = class {
	bytes;
	view;
	at = 0;
	constructor(e) {
		this.bytes = e, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
	}
	need(e) {
		i(Number.isSafeInteger(e) && e >= 0 && this.at + e <= this.bytes.length, "truncated or invalid binary structure");
	}
	u16() {
		this.need(2);
		let e = this.view.getUint16(this.at, !0);
		return this.at += 2, e;
	}
	u32() {
		this.need(4);
		let e = this.view.getUint32(this.at, !0);
		return this.at += 4, e;
	}
	u64(e = "uint64 value") {
		this.need(8);
		let t = a(this.view.getBigUint64(this.at, !0), e);
		return this.at += 8, t;
	}
	f64() {
		this.need(8);
		let e = this.view.getFloat64(this.at, !0);
		return this.at += 8, e;
	}
	take(e) {
		this.need(e);
		let t = this.bytes.subarray(this.at, this.at + e);
		return this.at += e, t;
	}
}, s = Uint32Array.from({ length: 256 }, (e, t) => {
	let n = t;
	for (let e = 0; e < 8; e++) n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
	return n >>> 0;
});
function c(e) {
	let t = 4294967295;
	for (let n of e) t = s[(t ^ n) & 255] ^ t >>> 8;
	return (t ^ 4294967295) >>> 0;
}
function l(e, t, n) {
	i(c(e) === t, `${n} CRC-32 mismatch`);
}
function u(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + Math.floor((r - n) / 2);
		e[i] < t ? n = i + 1 : r = i;
	}
	return n;
}
function d(e) {
	e?.throwIfAborted();
}
var f = new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
}), p = {
	uint8: 1,
	uint16: 2,
	uint32: 4,
	int8: 1,
	int16: 2,
	int32: 4,
	float32: 4,
	float64: 8
};
function m(e) {
	let t = new o(e);
	t.need(128), i(t.u32() === 1464289606, "bad magic; expected FIGW");
	let n = Uint8Array.from(e.subarray(0, 128)), r = new DataView(n.buffer), a = r.getUint32(104, !0);
	r.setUint32(104, 0, !0), l(n, a, "header"), i(t.u16() === 1, "unsupported format version");
	let s = t.u16(), c = t.u32(), u = t.u16(), d = t.u16(), f = t.u32(), p = t.u32(), m = t.u32(), h = t.u32(), g = t.u64("chromosome table offset"), _ = t.u64("statistics offset"), v = t.u64("index offset"), y = t.u64("data offset"), b = t.u64("metadata offset"), x = t.u64("metadata length");
	t.u64("reserved zoom offset");
	let S = t.u64("file length"), C = t.u32(), w = t.u32();
	return i(C === 0, "unsupported required feature bits"), i(!(s & -2), "unsupported header flags"), i(c >= 16 && c <= 65536 && !(c & c - 1), "invalid tile size"), i(u === 0 || u === 1, "unsupported compression codec"), i(y === 128 && S >= 128, "invalid data offset or file length"), i(128 <= g && g <= _ && _ <= b && b <= v && v <= S, "table offsets outside file or out of order"), i(f > 0 && p > 0 && m > 0 && v + m * 8 <= S, "invalid counts or truncated directory"), i(!(s & 1) || m === p, "track order requires one group per track"), i(_ + 32 * p <= b && b + x <= v, "statistics or metadata extend into next table"), {
		bytes: Uint8Array.from(e.subarray(0, 128)),
		flags: s,
		tile: c,
		codec: u,
		level: d,
		nChroms: f,
		nTracks: p,
		nGroups: m,
		tablesCrc: h,
		chroms: g,
		tracks: _,
		index: v,
		metadata: b,
		metadataLength: x,
		length: S,
		optional: w
	};
}
function h(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function g(e) {
	let t = [e];
	for (; t.length;) {
		let e = t.pop();
		if (e && typeof e == "object" && !Object.isFrozen(e)) {
			Object.freeze(e);
			for (let n of Object.values(e)) t.push(n);
		}
	}
	return e;
}
function _(e, t) {
	l(t, e.tablesCrc, "tables");
	let n = new o(t), a = [], s = /* @__PURE__ */ new Set(), c = 0;
	i(e.nChroms <= Math.floor((e.tracks - e.chroms) / 11), "chromosome count exceeds table bounds");
	for (let t = 0; t < e.nChroms; t++) {
		let o = n.u16();
		i(n.at + o + 8 <= e.tracks - e.chroms, "truncated chromosome table");
		let l = n.take(o), u;
		try {
			u = f.decode(l);
		} catch (e) {
			throw new r("invalid UTF-8 chromosome name", { cause: e });
		}
		let d = n.u64("chromosome length");
		i(u.length > 0 && !s.has(u) && d > 0 && d <= 4294967295, "invalid or duplicate chromosome"), s.add(u);
		let p = Math.ceil(d / e.tile);
		a.push({
			id: t,
			name: u,
			length: d,
			tileOffset: c,
			tileCount: p
		}), c += p;
	}
	i(n.at === e.tracks - e.chroms, "chromosome table extent mismatch"), i(c <= 2 ** 26, "genome exceeds 2**26 tiles");
	let u = [];
	for (let t = 0; t < e.nTracks; t++) u.push({
		sum: n.f64(),
		nonzero: n.u64("nonzero base count"),
		min: n.f64(),
		max: n.f64()
	});
	n.at = e.metadata - e.chroms;
	let d;
	try {
		d = JSON.parse(f.decode(n.take(e.metadataLength)));
	} catch (e) {
		throw new r("invalid JSON metadata", { cause: e });
	}
	i(h(d) && h(d.attributes) && Array.isArray(d.tracks) && d.tracks.length === e.nTracks, "invalid metadata or track count"), i(d.genome === void 0 || d.genome === null || typeof d.genome == "string", "invalid genome identifier");
	let m = Array.from({ length: e.nGroups }, () => []), _ = new Uint32Array(e.nTracks), v = /* @__PURE__ */ new Set(), y = d.tracks.map((t, n) => {
		i(h(t) && typeof t.name == "string" && t.name.length > 0 && !v.has(t.name), "invalid or duplicate track name"), i(typeof t.dtype == "string" && Object.hasOwn(p, t.dtype), "invalid track dtype"), i(typeof t.group == "number" && Number.isInteger(t.group) && t.group >= 0 && t.group < e.nGroups, "invalid track group"), v.add(t.name);
		let r = {
			index: n,
			name: t.name,
			dtype: t.dtype,
			group: t.group,
			metadata: t,
			statistics: u[n]
		};
		return _[n] = m[r.group].length, m[r.group].push(r), r;
	});
	i(m.every((t) => t.length > 0 && t.length <= 2 ** 29 / e.tile && (!(e.flags & 1) || t.length === 1)), "empty or oversized track group"), n.at = e.index - e.chroms;
	let b = [];
	for (let t = 0; t < e.nGroups; t++) {
		let r = n.u64("group index offset");
		i(r >= e.index + 8 * e.nGroups && r < e.length && (t === 0 || r > b[t - 1]), "invalid group directory offsets"), b.push(r);
	}
	return i(b[0] === e.index + 8 * e.nGroups, "index records must follow directory"), {
		header: g({
			version: 1,
			order: e.flags & 1 ? "tracks" : "positions",
			tileSize: e.tile,
			codec: e.codec,
			compressionLevel: e.level,
			genome: d.genome ?? null,
			attributes: d.attributes ?? {},
			metadata: d,
			chromosomes: a,
			tracks: y,
			statistics: u,
			groupCount: e.nGroups,
			length: e.length
		}),
		fixed: e,
		directory: b,
		members: m,
		trackSlots: _,
		nTiles: c
	};
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/utils/inflate.js
function v(e, t, a) {
	i(Number.isSafeInteger(t) && t > 0 && t <= a, "inflated allocation exceeds maxInflatedBytes"), i(e.length >= 4 && e[e.length - 4] === 0 && e[e.length - 3] === 0 && e[e.length - 2] === 255 && e[e.length - 1] === 255, "invalid summary restart full-flush marker");
	let o = new Uint8Array(e.length + 2), s = new Uint8Array(t);
	o.set(e), o.set([3, 0], e.length);
	let c = new n({
		raw: !0,
		chunkSize: Math.min(65536, t + 1)
	}), l = 0;
	c.onData = (e) => {
		i(l + e.length <= t, "summary restart expands beyond declared size"), s.set(e, l), l += e.length;
	};
	try {
		c.push(o, !1);
	} catch (e) {
		throw e instanceof r ? e : new r("corrupt summary restart DEFLATE", { cause: e });
	}
	return i(c.err === 0 && c.ended && l === t && c.strm?.next_in === o.length, "corrupt, truncated, trailing, or wrong-sized summary restart"), s;
}
function y(e, t, a) {
	i(Number.isSafeInteger(t) && t >= 0 && t <= a, "inflated allocation exceeds maxInflatedBytes"), i(e.length >= 6, "truncated zlib stream");
	let o = e[0], s = e[1];
	i((o & 15) == 8 && o >>> 4 <= 7 && ((o << 8) + s) % 31 == 0 && !(s & 32), "invalid or dictionary-dependent zlib header");
	let c = new Uint8Array(t), l = new n({
		raw: !0,
		chunkSize: Math.min(65536, t + 1),
		windowBits: (o >>> 4) + 8
	}), u = 0, d = 1, f = 0;
	l.onData = (e) => {
		let n = e;
		i(u + n.length <= t, "zlib stream expands beyond its declared size"), c.set(n, u), u += n.length;
		for (let e = 0; e < n.length; e += 5552) {
			let t = Math.min(n.length, e + 5552), r = e;
			for (; r + 8 <= t; r += 8) {
				let e = n[r], t = n[r + 1], i = n[r + 2], a = n[r + 3], o = n[r + 4], s = n[r + 5], c = n[r + 6], l = n[r + 7];
				f += 8 * d + 8 * e + 7 * t + 6 * i + 5 * a + 4 * o + 3 * s + 2 * c + l, d += e + t + i + a + o + s + c + l;
			}
			for (; r < t; r++) d += n[r], f += d;
			d %= 65521, f %= 65521;
		}
	};
	try {
		l.push(e.subarray(2, -4), !1);
	} catch (e) {
		throw e instanceof r ? e : new r("corrupt DEFLATE payload", { cause: e });
	}
	i(l.err === 0 && l.ended && u === t && l.strm?.next_in === e.length - 6, "corrupt, truncated, trailing, or wrong-sized zlib stream");
	let p = new DataView(e.buffer, e.byteOffset + e.length - 4, 4).getUint32(0);
	return i((f << 16 | d) >>> 0 === p, "zlib Adler-32 mismatch"), c;
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/decoding/chunk.js
var b = [
	1,
	2,
	4,
	1,
	2,
	4,
	4,
	0,
	8
], x = /* @__PURE__ */ new Uint32Array(), S = /* @__PURE__ */ new Float64Array();
function C(e) {
	throw new r(`corrupt chunk: ${e}`);
}
function w(e, t = !1, n) {
	(!Number.isInteger(e) || e < 0 || e > 255) && C("kind byte is outside 0..255");
	let r = e & 7, i = e >>> 3 & 15, a = !!(e & 128);
	return (r < 1 || r > 4 || i > 8) && C("unsupported kind or element code"), t ? (r !== 1 || a) && C("a block must have kind 1 without a stored bit") : (r === 1 || r === 4) && i === 7 && C("dense and runs chunks cannot use implicit-one elements"), n === 0 && a && C("the stored bit is forbidden with codec 0"), {
		kind: r,
		code: i,
		width: b[i],
		stored: a
	};
}
function T(e, t) {
	return Math.ceil(e / t) * t;
}
function E(e, t) {
	(!Number.isSafeInteger(t) || t < 0 || t > e.byteLength) && C("payload is truncated or its element count is invalid");
}
function D(e) {
	return e.byteLength % 8 != 0 && C("payload length is not a multiple of 8"), new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function O(e, t, n, r) {
	let i = new Float64Array(n), a = b[r];
	for (let o = 0; o < n; o++, t += a) {
		let n;
		switch (r) {
			case 0:
				n = e.getUint8(t);
				break;
			case 1:
				n = e.getUint16(t, !0);
				break;
			case 2:
				n = e.getUint32(t, !0);
				break;
			case 3:
				n = e.getInt8(t);
				break;
			case 4:
				n = e.getInt16(t, !0);
				break;
			case 5:
				n = e.getInt32(t, !0);
				break;
			case 6:
				n = e.getFloat32(t, !0);
				break;
			case 7:
				n = 1;
				break;
			case 8:
				n = e.getFloat64(t, !0);
				break;
			default: return C("unsupported element code");
		}
		(n === Infinity || n === -Infinity) && C("infinite numeric value"), i[o] = n;
	}
	return i;
}
function k(e, t) {
	(!Number.isSafeInteger(e) || e < 1 || !Number.isInteger(t) || t < 16 || t > 65536 || t & t - 1 || e * t > 2 ** 29) && C("invalid track count or tile size");
}
function A(e, t) {
	(!Number.isSafeInteger(t) || t < 0 || e > t) && C("decoded allocation exceeds maxDecodedBytes");
}
function ee(e, t, n, r, i = 268435456) {
	let a = w(t);
	k(n, r);
	let o = D(e);
	if (A(n * 128, i), a.kind === 1) {
		let t = n * r;
		if (E(e, T(t * a.width, 8)), A(t * 8, i), a.code === 6 || a.code === 8) {
			let e = 0;
			for (; e < t; e++) {
				let t = a.code === 6 ? o.getFloat32(e * 4, !0) : o.getFloat64(e * 8, !0);
				if (!Number.isNaN(t)) break;
			}
			if (e === t) {
				let e = new Uint32Array([0]), t = new Float64Array(n).fill(NaN);
				return {
					tracks: Array.from({ length: n }, (n, r) => ({
						offsets: e,
						values: t.subarray(r, r + 1),
						runs: !0
					})),
					byteLength: e.byteLength + t.byteLength
				};
			}
		}
		let s = O(o, 0, t, a.code);
		return {
			tracks: Array.from({ length: n }, (e, t) => ({ values: s.subarray(t * r, (t + 1) * r) })),
			byteLength: s.byteLength
		};
	}
	if (a.kind === 3) return te(e, o, a, n, r, i);
	E(e, 4 + 4 * n);
	let s = o.getUint32(0, !0);
	s > n * r && C("too many sparse entries or run changes"), A(s * 12, i);
	let c = new Uint32Array(n), l = 4 + 4 * n;
	for (let e = 0; e < n; e++) {
		let t = o.getUint32(4 + e * 4, !0);
		c[e] = t, l += t;
	}
	let u = l - 4 - 4 * n;
	(u < s || u > 3 * s) && C("offset byte lengths do not match the entry count");
	let d = T(l, 4);
	E(e, T(d + s * a.width, 8));
	let f = new Uint32Array(s), p = [], m = 0, h = 4 + 4 * n;
	for (let t = 0; t < n; t++) {
		let n = m, i = h + c[t], o = 0, l = !0;
		for (; h < i;) {
			let t = 0, n = !1;
			for (let r = 0; r < 3; r++) {
				h >= i && C("a varint runs past its track's bytes");
				let a = e[h++];
				if (t += (a & 127) * 2 ** (7 * r), a < 128) {
					n = !0;
					break;
				}
			}
			n || C("a varint is longer than three bytes"), !l && t === 0 && C("sparse offsets or run changes do not strictly ascend"), o += t, (o >= r || m >= s) && C("an offset or entry count is out of bounds"), f[m++] = o, l = !1;
		}
		p.push({
			offsets: f.subarray(n, m),
			values: S,
			...a.kind === 4 ? { runs: !0 } : {}
		});
	}
	m !== s && C("decoded offsets do not add up to the entry count");
	let g = O(o, d, s, a.code), _ = 0;
	for (let e of p) {
		let t = e.offsets.length;
		e.values = g.subarray(_, _ + t), _ += t;
	}
	return {
		tracks: p,
		byteLength: f.byteLength + g.byteLength
	};
}
function te(e, t, n, r, i, a) {
	E(e, 8);
	let o = t.getUint32(0, !0);
	o > r && C("matrix has too many present tracks");
	let s = 4 + 4 * o, c = 8 + 8 * o;
	E(e, c);
	let l = t.getUint32(s + o * 4, !0);
	l > o * i && C("matrix has too many entries"), A(l * 12, a);
	let u = T(c + 2 * l, 4);
	E(e, T(u + l * n.width, 8)), t.getUint32(s, !0) !== 0 && C("matrix first pointer is not zero");
	let d = new Uint32Array(l), f = Array.from({ length: r }, () => ({
		offsets: x,
		values: S
	})), p = -1, m = 0;
	for (let e = 0; e < o; e++) {
		let n = t.getUint32(4 + e * 4, !0);
		(n <= p || n >= r) && C("matrix slots must strictly ascend and be in range");
		let a = t.getUint32(s + (e + 1) * 4, !0);
		(a < m || a > l) && C("matrix pointers must not decrease or exceed the entry count");
		let o = -1;
		for (let e = m; e < a; e++) {
			let n = t.getUint16(c + e * 2, !0);
			(n <= o || n >= i) && C("matrix offsets must strictly ascend and be in range"), d[e] = n, o = n;
		}
		f[n] = {
			offsets: d.subarray(m, a),
			values: S
		}, p = n, m = a;
	}
	let h = O(t, u, l, n.code);
	for (let e = 0; e < o; e++) {
		let n = t.getUint32(4 + e * 4, !0), r = t.getUint32(s + e * 4, !0), i = t.getUint32(s + (e + 1) * 4, !0);
		f[n].values = h.subarray(r, i);
	}
	return {
		tracks: f,
		byteLength: d.byteLength + h.byteLength
	};
}
function j(e, t, n, r, i, a = 268435456) {
	let o = w(t, !0);
	(!Number.isInteger(n) || n < 1 || n > 65536 || !Number.isInteger(r) || r < 0 || r > 4294967295 || !Number.isInteger(i) || i < r || i > 4294967295) && C("invalid block entry count or position bounds");
	let s = D(e), c = T(4 * n, 8);
	E(e, T(c + n * o.width, 8)), A(128, a), A(n * 12, a);
	let l = new Uint32Array(n), u = -1;
	for (let e = 0; e < n; e++) {
		let t = s.getUint32(e * 4, !0);
		t <= u && C("block positions do not strictly ascend"), l[e] = t, u = t;
	}
	(l[0] !== r || l[n - 1] !== i) && C("block positions do not match its index record");
	let d = O(s, c, n, o.code);
	return {
		tracks: [{
			offsets: l,
			values: d
		}],
		byteLength: l.byteLength + d.byteLength
	};
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/format/group.js
function M(e, t, n) {
	let r = t.fixed;
	i(e.offset >= 128 && e.size > 0 && e.offset <= r.chroms - e.size, "chunk offset or size outside data region"), i(e.raw > 0 && e.raw % 8 == 0 && e.raw <= n && (r.flags === 1 || e.size <= n + 64), "invalid chunk raw size");
	let a = w(e.kind, r.flags === 1, r.codec);
	i(r.codec !== 0 && !a.stored || e.size === e.raw, "stored chunk size differs from raw size");
}
function N(e, t, n, r, a) {
	let o = r.fixed, s = [], c = r.members[n].length, d = e.u32(), f = e.u32(), p = [];
	if (o.flags & 1) {
		i(t.length + d * 112 <= a, "parsed block index allocation exceeds maxInflatedBytes"), e.need(d * 40), l(t.subarray(e.at, e.at + d * 40), f, "block index");
		let o;
		for (let t = 0; t < d; t++) {
			let a = e.u32(), c = e.u32(), l = e.u32(), u = e.u32(), d = {
				key: `${n}:${t}`,
				group: n,
				chrom: a,
				first: c,
				last: l,
				n: u,
				offset: e.u64("block offset"),
				size: e.u32(),
				raw: e.u32(),
				kind: e.u32(),
				crc: e.u32()
			};
			i(a < r.header.chromosomes.length && c <= l && l < r.header.chromosomes[a].length && u > 0 && u <= 65536 && u <= l - c + 1, "invalid track block bounds"), i(!o || a > o.chrom || a === o.chrom && c > o.last, "track blocks overlap or are out of order"), M(d, r, 12 * u + 64), o = d, s.push(d);
		}
		let c = [...s].sort((e, t) => e.offset - t.offset);
		for (let e = 1; e < c.length; e++) i(c[e].offset >= c[e - 1].offset + c[e - 1].size, "blocks overlap in file");
	} else {
		e.need(d * 32 + 8), i(t.length + d * 64 <= a, "parsed group index allocation exceeds maxInflatedBytes");
		let m = [];
		for (let t = 0; t < d; t++) m.push({
			first: e.u64("first tile"),
			last: e.u64("last tile"),
			offset: e.u64("run offset"),
			size: e.u64("run size")
		});
		let h = e.u32(), g = e.u32(), _ = e.at;
		i(h <= r.nTiles, "too many live tiles"), i(t.length + h * 128 + d * 64 <= a, "parsed group index allocation exceeds maxInflatedBytes");
		let v = e.take(g);
		l(t.subarray(8, _ + g), f, "group index");
		let b = y(v, h * 17, a), x = new DataView(b.buffer, b.byteOffset, b.byteLength);
		for (let e = 0; e < h; e++) {
			let t = x.getUint32(e * 4, !0);
			i(t < r.nTiles && (e === 0 || t > p[e - 1]), "live tiles out of order or range"), p.push(t), s.push({
				key: `${n}:${e}`,
				group: n,
				tile: t,
				offset: 0,
				kind: b[4 * h + e],
				size: x.getUint32(5 * h + 4 * e, !0),
				raw: x.getUint32(9 * h + 4 * e, !0),
				crc: x.getUint32(13 * h + 4 * e, !0)
			});
		}
		let S = [...m].sort((e, t) => e.first - t.first), C = [...m].sort((e, t) => e.offset - t.offset);
		for (let e = 0; e < m.length; e++) {
			let t = S[e];
			i(t.first <= t.last && t.last < r.nTiles && t.offset >= 128 && t.size > 0 && t.offset <= o.chroms - t.size, "invalid run bounds"), i(e === 0 || t.first > S[e - 1].last, "runs overlap in tile range"), i(e === 0 || C[e].offset >= C[e - 1].offset + C[e - 1].size, "runs overlap in file");
		}
		let w = 0;
		for (let e of S) {
			let t = u(p, e.first), n = u(p, e.last + 1);
			i(t === w && n > t, "run leaves live tiles uncovered");
			let a = e.offset;
			for (let e = t; e < n; e++) {
				let t = s[e];
				t.offset = a, M(t, r, 8 * c * o.tile + 16 * c + 64), a += t.size;
			}
			i(a === e.offset + e.size, "run chunk sizes do not add up"), w = n;
		}
		i(w === h, "live tile has no run");
	}
	return {
		chunks: s,
		tiles: Uint32Array.from(p),
		byteLength: t.length + s.length * 112 + p.length * 4
	};
}
function P(e, t, n, r) {
	let a = new o(e), s = N(a, e, t, n, r);
	return i(a.at === e.length, "raw index extent mismatch"), s;
}
function F(e, t, n, r) {
	i(Number.isSafeInteger(e) && Number.isSafeInteger(t) && Number.isSafeInteger(n) && Number.isSafeInteger(r) && e >= 0 && t >= e && n >= e && r >= 0 && n <= t - r, "group section outside record bounds");
}
async function I(e, t, n, r, a) {
	F(e, t, n, r);
	let s = await a(n, r);
	return i(s.length === r, "truncated group section header"), new o(s);
}
async function ne(e, t, n, r) {
	let a = (await I(e, t, e, 8, r)).u32(), o;
	if (n.fixed.flags & 1) o = 8 + a * 40;
	else {
		let s = e + 8 + a * 32, c = await I(e, t, s, 8, r), l = c.u32(), u = c.u32();
		i(l <= n.nTiles, "too many live tiles"), o = s - e + 8 + u;
	}
	return F(e, t, e, o), F(e, t, e + o, 12 + (n.fixed.optional & 1 ? 4 : 0)), o;
}
async function re(e, t, n, r, a) {
	F(e, t, e, n);
	let o = e + n, s = [], c = (n, a, c, u) => {
		let d = r.header.chromosomes.reduce((e, t) => e + Math.ceil(t.tileCount / n), 0);
		i(a <= d && (c > 0 || a === 0), "invalid summary count"), i(n === 1 || c > 0, "empty zoom stream"), F(e, t, o, c), c === 0 && l(/* @__PURE__ */ new Uint8Array(), u, "summary"), s.push({
			factor: n,
			n: a,
			binCount: d,
			offset: o,
			size: c,
			checksum: u
		}), o += c;
	}, u = await I(e, t, o, 12, a);
	if (o += 12, c(1, u.u32(), u.u32(), u.u32()), r.fixed.optional & 1) {
		F(e, t, o, 4);
		let n = await I(e, t, o, Math.min(20, t - o), a), r = n.u32();
		o += 4, i(r <= 12, "too many zoom levels"), i(!r || s[0].size > 0, "zoom without summary");
		for (let s = 1; s <= r; s++) {
			let r = s === 1 ? n : await I(e, t, o, 16, a), l = r.u32();
			o += 16, i(l === 4 ** s, "invalid zoom factor"), c(l, r.u32(), r.u32(), r.u32());
		}
	}
	return i(o === t, "group record extent mismatch"), s;
}
function ie(e, t, n, r) {
	let a = n.members[t], s = e.factor !== 1;
	if (e.bytes.length === 0) return {
		factor: e.factor,
		binSize: e.factor * n.fixed.tile,
		bins: /* @__PURE__ */ new Uint32Array(),
		sums: /* @__PURE__ */ new Float32Array(),
		tracks: a,
		available: !1
	};
	let c = new o(y(e.bytes, e.n * (4 + (s ? 8 : 4) * a.length), r)), l = new Uint32Array(e.n);
	for (let t = 0; t < e.n; t++) l[t] = c.u32(), i(l[t] < e.binCount && (t === 0 || l[t] > l[t - 1]), "summary bins out of order or range");
	let u = s ? new Float64Array(e.n * a.length) : new Float32Array(e.n * a.length);
	for (let e = 0; e < u.length; e++) c.need(s ? 8 : 4), u[e] = s ? c.f64() : c.view.getFloat32(c.at, !0), s || (c.at += 4);
	return {
		factor: e.factor,
		binSize: e.factor * n.fixed.tile,
		bins: l,
		sums: u,
		tracks: a,
		available: !0
	};
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/format/summary-index.js
var L = "org.figwig.summary-restarts", R = 4096;
function z(e, t, n) {
	let r = Uint8Array.from(e), i = new DataView(r.buffer), a = i.getUint32(t, !0);
	i.setUint32(t, 0, !0), l(r, a, n);
}
function B(e, t, n) {
	i(Number.isSafeInteger(t) && Number.isSafeInteger(n) && n >= 0 && t >= e.firstData && t <= e.end - n, "summary restart directory extent outside data region");
}
function V(e) {
	if (!(e.fixed.optional & 2)) return;
	let t = e.header.metadata[L];
	if (!t || typeof t != "object" || Array.isArray(t)) return;
	let n = t;
	if (n.version === 2) return i(n.length === 256 && Number.isSafeInteger(n.offset) && n.offset >= 128 && n.offset <= e.fixed.chroms - 256, "invalid summary restart locator"), n.offset;
}
function H(e, t, n) {
	i(e.length === 256, "invalid summary restart root length");
	let r = new o(e);
	if (i(r.u32() === 1397905222 && r.u32() === 3231061, "invalid summary restart root magic"), i(r.u16() === 2 && r.u16() === 256, "unsupported summary restart root"), z(e, 12, "summary restart root"), i(e.subarray(36, 64).every((e) => e === 0) && e.subarray(192).every((e) => e === 0), "nonzero summary restart reserved fields"), !n.fixed.bytes.every((t, n) => t === e[64 + n])) return;
	r.at = 16;
	let a = r.u64("summary restart directory"), s = r.u32(), c = r.u32(), l = r.u32(), u = a + 32 * s;
	return i(a === t + 256 && s === n.fixed.nGroups && c === 102 && l === 32768 && u <= n.fixed.chroms && n.fixed.chroms - t <= 16 * 1024 ** 2, "invalid summary restart root dimensions"), {
		offset: t,
		directory: a,
		firstData: u,
		end: n.fixed.chroms
	};
}
function U(e, t, n, r) {
	i(e.length === 32, "invalid summary restart group locator length"), z(e, 24, "summary restart group locator");
	let a = new o(e), s = a.u64("summary restart levels"), c = a.u32(), l = a.u32(), u = a.u32(), d = a.u32();
	return a.u32(), i(u === t && d === r.members[t].length && c >= 1 && c <= 13 && (c === 1 || !!(r.fixed.optional & 1)) && a.u32() === 0, "invalid summary restart group locator"), B(n, s, c * 32), {
		offset: s,
		count: c,
		checksum: l
	};
}
function W(e) {
	let t = Math.ceil(e / 102);
	return (t - 1) * R + 16 + (e - (t - 1) * 102) * 40;
}
function G(e, t, n, r, a) {
	i(e.length === t.count * 32, "truncated summary restart levels"), l(e, t.checksum, "summary restart levels");
	let s = new o(e), c = [], u = a.directory[r], d = a.directory[r + 1] ?? a.fixed.length, f = a.members[r].length;
	for (let e = 0; e < t.count; e++) {
		let t = s.u64("summary restart source"), r = s.u64("summary restart index"), o = s.u32(), l = s.u32(), p = s.u32(), m = s.u32(), h = 4 ** e, g = a.header.chromosomes.reduce((e, t) => e + Math.ceil(t.tileCount / h), 0);
		i(t >= u + (e ? 16 : 12) && t <= d - l && o <= g && (l > 0 || o === 0) && (e === 0 || l > 0) && (l !== 0 || p === 0), "invalid summary restart source extent or count"), i(m === 0 ? r === 0 : m <= 2048 && !(m & m - 1) && m * (4 + (e ? 8 : 4) * f) <= 32768 && l > 0 && o > 0 && r > 0, "invalid summary restart window dimensions"), m && B(n, r, W(Math.ceil(g / m))), c.push({
			factor: h,
			offset: t,
			index: r,
			n: o,
			size: l,
			checksum: p,
			windowBins: m,
			binCount: g
		});
	}
	return {
		levels: c,
		cacheBytes: e.length + c.length * 96 + 64
	};
}
function K(e, t, n, r, a) {
	let s = t * 102, c = Math.min(102, Math.ceil(n.binCount / n.windowBins) - s);
	i(e.length === 16 + c * 40 && c > 0 && e.length + c * 160 <= a, "summary restart page allocation exceeds bounds or maxInflatedBytes"), z(e, 12, "summary restart page");
	let l = new o(e);
	i(l.u32() === 1347573574 && l.u32() === s && l.u32() === c, "invalid summary restart page header"), l.u32();
	let u = [], d = (n.factor === 1 ? 4 : 8) * r, f, p = Infinity;
	for (let e = 0; e < c; e++) {
		let t = l.u32(), r = l.u32(), a = (e) => {
			let r = l.u32(), a = l.u32(), o = l.u32(), s = l.u32();
			return i(t ? a > 0 && a <= 2 * e + 64 && r >= 2 && r <= n.size - 4 - a : r === 0 && a === 0 && o === 0 && s === 0, "invalid summary restart fragment extent"), {
				offset: r,
				size: a,
				checksum: o,
				rawChecksum: s
			};
		};
		i(t <= Math.min(n.windowBins, n.binCount - (s + e) * n.windowBins) && r <= n.n - t && (t > 0 || r === 0), "invalid summary restart window count or row");
		let o = a(t * 4), c = a(t * d);
		i(!t || o.offset + o.size <= c.offset, "overlapping summary restart fragments"), t && (i(!f || r === f.firstRow + f.n && o.offset >= f.ids.offset + f.ids.size && c.offset >= f.sums.offset + f.sums.size, "summary restart rows or fragments overlap or are out of order"), f || (p = c.offset), f = {
			n: t,
			firstRow: r,
			ids: o,
			sums: c
		}), u.push({
			n: t,
			firstRow: r,
			ids: o,
			sums: c
		});
	}
	return i(!f || f.ids.offset + f.ids.size <= p, "overlapping summary restart page fragments"), {
		windows: u,
		cacheBytes: e.length + c * 160 + 64
	};
}
function q(e, t) {
	let n = new o(e);
	if (t.factor !== 1 && i(n.u32() === t.factor, "summary restart source factor mismatch"), i(n.u32() === t.n && n.u32() === t.size && n.u32() === t.checksum, "summary restart source header mismatch"), t.size) {
		let r = e[n.at], a = e[n.at + 1];
		i((r & 15) == 8 && (t.windowBins ? r >>> 4 == 7 : r >>> 4 <= 7) && ((r << 8) + a) % 31 == 0 && !(a & 32), "invalid summary restart zlib wrapper");
	}
}
function J(e, t, n, r, a, o, s, c) {
	let u = s.members[o], d = a.factor !== 1, f = n.n * 4, p = n.n * u.length * (d ? 8 : 4);
	i(2 * (f + p) <= c, "parsed summary restart allocation exceeds maxInflatedBytes"), l(e, n.ids.checksum, "summary restart IDs"), l(t, n.sums.checksum, "summary restart sums");
	let m = v(e, f, c), h = v(t, p, c);
	l(m, n.ids.rawChecksum, "summary restart decoded IDs"), l(h, n.sums.rawChecksum, "summary restart decoded sums");
	let g = new Uint32Array(n.n), _ = d ? new Float64Array(n.n * u.length) : new Float32Array(n.n * u.length), y = new DataView(m.buffer, m.byteOffset, m.byteLength), b = new DataView(h.buffer, h.byteOffset, h.byteLength), x = r * a.windowBins, S = Math.min(x + a.windowBins, a.binCount);
	for (let e = 0; e < g.length; e++) g[e] = y.getUint32(4 * e, !0), i(g[e] >= x && g[e] < S && (!e || g[e] > g[e - 1]), "summary restart IDs out of order or window");
	for (let e = 0; e < _.length; e++) _[e] = d ? b.getFloat64(8 * e, !0) : b.getFloat32(4 * e, !0);
	return {
		factor: a.factor,
		binSize: a.factor * s.fixed.tile,
		bins: g,
		sums: _,
		tracks: u,
		available: !0
	};
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/utils/io.js
var ae = class {
	concurrency;
	active = 0;
	waiting = [];
	constructor(e) {
		this.concurrency = e;
	}
	async run(e, t) {
		d(e), await new Promise((t, n) => {
			let r = {
				signal: e,
				start: () => {
					this.active++, e?.removeEventListener("abort", r.onAbort), t();
				},
				reject: n,
				onAbort: () => {
					this.waiting = this.waiting.filter((e) => e !== r), n(e.reason);
				}
			};
			this.active < this.concurrency ? r.start() : (this.waiting.push(r), e?.addEventListener("abort", r.onAbort, { once: !0 }));
		});
		try {
			return d(e), await t();
		} finally {
			this.active--, this.waiting.shift()?.start();
		}
	}
}, Y = class {
	read;
	gap;
	maxSize;
	jobs = [];
	scheduled = !1;
	constructor(e, t, n) {
		this.read = e, this.gap = t, this.maxSize = n;
	}
	get(e, t) {
		return new Promise((n, r) => {
			this.jobs.push({
				ref: e,
				signal: t,
				resolve: n,
				reject: r
			}), this.scheduled || (this.scheduled = !0, queueMicrotask(() => this.flush()));
		});
	}
	flush() {
		let e = this.jobs;
		this.jobs = [], this.scheduled = !1;
		let t = [];
		for (let n of e) n.signal.aborted ? n.reject(n.signal.reason) : t.push(n);
		t.sort((e, t) => e.ref.offset - t.ref.offset);
		let n = [], r = 0, i = 0;
		for (let e of t) {
			let t = e.ref.offset + e.ref.size;
			n.length && (e.ref.offset > i + this.gap || Math.max(t, i) - r > this.maxSize) && (this.fill(n, r, i), n = []), n.length || (r = e.ref.offset), i = Math.max(n.length ? i : 0, t), n.push(e);
		}
		n.length && this.fill(n, r, i);
	}
	async fill(e, t, n) {
		let r = new AbortController(), i = () => {
			e.every((e) => e.signal.aborted) && r.abort(e.find((e) => e.signal.aborted)?.signal.reason);
		};
		for (let t of e) t.signal.addEventListener("abort", i, { once: !0 });
		i();
		try {
			let i = await this.read(t, n - t, r.signal);
			for (let n of e) n.signal.aborted ? n.reject(n.signal.reason) : n.resolve(i.subarray(n.ref.offset - t, n.ref.offset - t + n.ref.size));
		} catch (t) {
			for (let n of e) n.reject(t);
		} finally {
			for (let t of e) t.signal.removeEventListener("abort", i);
		}
	}
};
async function oe(e, t, n, r, a, o) {
	return i(Number.isSafeInteger(n) && n >= 0 && Number.isSafeInteger(r) && r >= 0 && r <= a && Number.isSafeInteger(n + r), "read exceeds bounds or maxReadBytes"), t.run(o, async () => {
		let t = await e.read(r, n, { signal: o });
		return d(o), i(t.length === r, `truncated file: expected ${r} bytes at ${n}, received ${t.length}`), t;
	});
}
//#endregion
//#region ../../node_modules/@genome-spy/figwig/dist/figwig.js
var se = {
	uint8: Uint8Array,
	uint16: Uint16Array,
	uint32: Uint32Array,
	int8: Int8Array,
	int16: Int16Array,
	int32: Int32Array,
	float32: Float32Array,
	float64: Float64Array
};
function X() {
	return {
		readRequests: 0,
		indexBytes: 0,
		dataBytes: 0,
		summaryBytes: 0,
		summaryIndexBytes: 0,
		summaryInflatedBytes: 0,
		chunksFetched: 0,
		chunksDecompressed: 0,
		indexLoadMs: 0,
		decompressionMs: 0,
		decodingMs: 0,
		chunkCacheHits: 0,
		chunkCacheMisses: 0,
		cacheBytes: 0
	};
}
function Z(e, t, n, r = 0) {
	let i = e ?? t;
	if (!Number.isSafeInteger(i) || i < r) throw RangeError(`Invalid ${n}`);
	return i;
}
function Q(e, t) {
	if (t === "float64") return !0;
	if (t === "float32") return Number.isNaN(e) || Math.fround(e) === e;
	let n = p[t] * 8, r = t.startsWith("u");
	return Number.isInteger(e) && e >= (r ? 0 : -(2 ** (n - 1))) && e <= (r ? 2 ** n - 1 : 2 ** (n - 1) - 1);
}
function $(e, t) {
	return ["sum", "mean"].includes(e) && [
		"propagate",
		"omit",
		"zero"
	].includes(t);
}
function ce(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
var le = class {
	filehandle;
	options;
	queue;
	metadata;
	groups;
	chunks;
	summaries;
	reads;
	indexReads;
	lifetime = new AbortController();
	closePromise;
	trackNames;
	metrics = X();
	constructor(n) {
		if (Number(!!n.filehandle) + Number(!!n.url) !== 1) throw TypeError("Provide exactly one of filehandle or url");
		this.filehandle = n.filehandle ?? new e(n.url), this.options = {
			verify: n.verify ?? !0,
			maxOutputBytes: Z(n.maxOutputBytes, 256 * 1024 ** 2, "maxOutputBytes"),
			maxReadBytes: Z(n.maxReadBytes, 64 * 1024 ** 2, "maxReadBytes", 128),
			maxInflatedBytes: Z(n.maxInflatedBytes, 128 * 1024 ** 2, "maxInflatedBytes"),
			indexCacheBytes: Z(n.indexCacheBytes, 32 * 1024 ** 2, "indexCacheBytes"),
			chunkCacheBytes: Z(n.chunkCacheBytes, 64 * 1024 ** 2, "chunkCacheBytes"),
			summaryCacheBytes: Z(n.summaryCacheBytes, 32 * 1024 ** 2, "summaryCacheBytes"),
			maxConcurrentRequests: Z(n.maxConcurrentRequests, 6, "maxConcurrentRequests", 1),
			coalesceGap: Z(n.coalesceGap, 4096, "coalesceGap"),
			maxCoalescedBytes: Z(n.maxCoalescedBytes, 4 * 1024 ** 2, "maxCoalescedBytes", 1),
			maxFeatures: Z(n.maxFeatures, 1e6, "maxFeatures")
		}, this.queue = new ae(this.options.maxConcurrentRequests), this.metadata = new t({ maxSize: 1 }), this.groups = new t({
			maxSize: this.options.indexCacheBytes,
			sizeOf: (e) => e.byteLength <= this.options.indexCacheBytes ? e.byteLength : NaN
		}), this.chunks = new t({
			maxSize: this.options.chunkCacheBytes,
			sizeOf: (e) => {
				let t = e.byteLength + e.tracks.length * 128 + 64;
				return t <= this.options.chunkCacheBytes ? t : NaN;
			}
		}), this.summaries = new t({
			maxSize: this.options.summaryCacheBytes,
			sizeOf: (e) => {
				let t = "cacheBytes" in e ? e.cacheBytes : "indexSize" in e ? 64 : "levels" in e ? e.levels.length * 64 + 64 : e.bins.byteLength + e.sums.byteLength + 128;
				return t <= this.options.summaryCacheBytes ? t : NaN;
			}
		}), this.indexReads = new Y((e, t, n) => this.read(e, t, "indexBytes", n), this.options.coalesceGap, Math.min(this.options.maxCoalescedBytes, this.options.maxReadBytes)), this.reads = new Y((e, t, n) => this.read(e, t, "dataBytes", n), this.options.coalesceGap, Math.min(this.options.maxCoalescedBytes, this.options.maxReadBytes));
	}
	signal(e) {
		let t = e ? AbortSignal.any([this.lifetime.signal, e]) : this.lifetime.signal;
		return d(t), t;
	}
	completed(e, t) {
		return d(this.lifetime.signal), d(t), e;
	}
	async read(e, t, n, r) {
		r = this.signal(r);
		let i = await oe(this.filehandle, this.queue, e, t, this.options.maxReadBytes, r);
		return d(r), this.metrics.readRequests++, this.metrics[n] += i.length, i;
	}
	state(e) {
		return e = this.signal(e), this.metadata.get("metadata", e, async (e) => {
			let t = await this.read(0, 128, "indexBytes", e);
			d(e);
			let n = m(t), r = await this.filehandle.stat();
			d(e), i(Number.isSafeInteger(r.size) && (r.size === 0 || n.length <= r.size), "file length exceeds physical file size");
			let a = await this.read(n.chroms, n.index + 8 * n.nGroups - n.chroms, "indexBytes", e);
			return d(e), _(n, a);
		});
	}
	group(e, t, n) {
		return n = this.signal(n), this.groups.get(e, n, async (n) => {
			let r = performance.now(), i = t.directory[e], { indexSize: a } = await this.groupHeader(e, t, n);
			d(n);
			let o = await this.indexReads.get({
				offset: i,
				size: a
			}, n);
			d(n);
			let s = P(o, e, t, this.options.maxInflatedBytes);
			return this.metrics.indexLoadMs += performance.now() - r, s;
		});
	}
	groupHeader(e, t, n) {
		return this.summaries.get(`index:${e}`, this.signal(n), async (n) => {
			let r = t.directory[e], i = await ne(r, t.directory[e + 1] ?? t.fixed.length, t, (e, t) => this.indexReads.get({
				offset: e,
				size: t
			}, n));
			return d(n), { indexSize: i };
		});
	}
	summaryCatalog(e, t, n) {
		return this.summaries.get(`group:${e}`, this.signal(n), async (n) => {
			let r = performance.now(), i = t.directory[e], a = t.directory[e + 1] ?? t.fixed.length, { indexSize: o } = await this.groupHeader(e, t, n);
			d(n);
			let s = await re(i, a, o, t, (e, t) => this.indexReads.get({
				offset: e,
				size: t
			}, n));
			return d(n), this.metrics.indexLoadMs += performance.now() - r, { levels: s };
		});
	}
	async getHeader(e = {}) {
		return this.completed((await this.state(e.signal)).header, e.signal);
	}
	async getTracks(e = {}) {
		return this.completed((await this.getHeader(e)).tracks, e.signal);
	}
	async selectTracks(e, t = {}) {
		return this.select(this.completed((await this.state(t.signal)).header, t.signal), e);
	}
	select(e, t) {
		if (t === void 0) return [...e.tracks];
		if (!Array.isArray(t)) {
			if (typeof t != "object" || !t) throw TypeError("Invalid track selection");
			return e.tracks.filter((e) => Object.entries(t).every(([t, n]) => Object.hasOwn(e.metadata, t) && Object.is(e.metadata[t], n)));
		}
		let n = /* @__PURE__ */ new Set();
		return t.map((t) => {
			let r = typeof t == "number" ? Number.isInteger(t) ? e.tracks[t] : void 0 : (this.trackNames ??= new Map(e.tracks.map((e) => [e.name, e]))).get(t);
			if (!r) throw RangeError(`Unknown track: ${String(t)}`);
			if (n.has(r.index)) throw RangeError(`Duplicate track selection: ${r.name}`);
			return n.add(r.index), r;
		});
	}
	region(e, t) {
		let n = e.chromosomes.find((e) => e.name === t.chromosome);
		if (!n) throw RangeError(`Unknown chromosome: ${t.chromosome}`);
		if (!Number.isSafeInteger(t.start) || !Number.isSafeInteger(t.end) || t.start < 0 || t.end < t.start || t.end > n.length) throw RangeError(`Invalid interval ${t.chromosome}:${t.start}-${t.end}; chromosome length ${n.length}`);
		return n;
	}
	output(e) {
		if (!Number.isSafeInteger(e) || e > this.options.maxOutputBytes) throw RangeError("Requested output exceeds maxOutputBytes");
	}
	async getValues(e, t, n, r = {}) {
		return this.completed((await this.getValuesMulti([{
			chromosome: e,
			start: t,
			end: n
		}], r))[0], r.signal);
	}
	async getValuesMulti(e, t = {}) {
		t = {
			...t,
			signal: this.signal(t.signal)
		};
		let n = await this.state(t.signal);
		d(t.signal);
		let { header: r } = n, i = this.select(r, t.tracks);
		e.forEach((e) => this.region(r, e)), this.output(e.reduce((e, t) => e + (t.end - t.start) * i.reduce((e, t) => e + p[t.dtype], 0), 0));
		let a = e.map((e) => ({
			...e,
			tracks: i.map((t) => ({
				track: t,
				values: new se[t.dtype](e.end - e.start)
			}))
		}));
		return await this.visitDecoded(n, e, i, t, (t, n, i, o) => {
			let s = e[i];
			this.copy(t, n, s.start, s.end, a[i].tracks[o].values, r.tileSize);
		}), this.completed(a, t.signal);
	}
	async visitDecoded(e, t, n, r, a) {
		if (d(r.signal), !n.length || !t.some((e) => e.end > e.start)) return;
		let { header: o } = e, s = t.map((e) => this.region(o, e)), c = [...new Set(n.map((e) => e.group))], l = new Map(await Promise.all(c.map(async (t) => [t, await this.group(t, e, r.signal)])));
		d(r.signal);
		let f = /* @__PURE__ */ new Map(), p = [];
		for (let [n, r] of l) {
			for (let e = 0; e < t.length; e++) {
				let n = t[e], i = s[e];
				if (n.start !== n.end) {
					if (o.order === "positions") {
						let t = i.tileOffset + Math.floor(n.start / o.tileSize), a = i.tileOffset + Math.ceil(n.end / o.tileSize);
						for (let n = u(r.tiles, t); n < r.tiles.length && r.tiles[n] < a; n++) {
							let t = r.chunks[n];
							f.set(t.key, t), p.push({
								ref: t,
								regionIndex: e
							});
						}
					} else {
						let t = 0, a = r.chunks.length;
						for (; t < a;) {
							let e = Math.floor((t + a) / 2), o = r.chunks[e];
							o.chrom < i.id || o.chrom === i.id && o.last < n.start ? t = e + 1 : a = e;
						}
						for (let a = t; a < r.chunks.length; a++) {
							let t = r.chunks[a];
							if (t.chrom !== i.id || t.first >= n.end) break;
							f.set(t.key, t), p.push({
								ref: t,
								regionIndex: e
							});
						}
					}
				}
			}
			i(e.members[n].length > 0, "empty selected group");
		}
		let m = /* @__PURE__ */ new Map();
		n.forEach((t, n) => {
			let r = m.get(t.group) ?? [];
			r.push({
				outputIndex: n,
				slot: e.trackSlots[t.index]
			}), m.set(t.group, r);
		});
		let h = /* @__PURE__ */ new Map();
		for (let { ref: e, regionIndex: t } of p) {
			let n = h.get(e.key) ?? [];
			n.push(t), h.set(e.key, n);
		}
		let g = [...f.values()].sort((e, t) => e.offset - t.offset || e.group - t.group), _ = {}, v = 0;
		for (; v < g.length;) {
			let t = v, n = 0;
			for (; t < g.length;) {
				let r = g[t], i = e.members[r.group].length, { kind: a, width: s } = w(r.kind, r.n !== void 0), c = r.n === void 0 ? a === 1 ? i * o.tileSize * 8 : Math.ceil(r.raw * 12 / (s + (a === 3 ? 2 : 1))) : r.n * 12, l = Math.min(this.options.maxInflatedBytes, c) + i * 128 + 64;
				if (t > v && n + l > this.options.maxInflatedBytes) break;
				n += l, t++;
			}
			let i = g.slice(v, t), c = await Promise.all(i.map((t) => this.chunk(t, e, _, r.signal)));
			for (let e = 0; e < i.length; e++) {
				d(r.signal);
				let t = i[e], n = c[e];
				for (let e of h.get(t.key)) {
					let r = s[e], i = t.tile === void 0 ? 0 : (t.tile - r.tileOffset) * o.tileSize;
					for (let { outputIndex: r, slot: o } of m.get(t.group)) a(n.tracks[o], i, e, r);
				}
			}
			v = t;
		}
	}
	chunk(e, t, n, r) {
		return r = this.signal(r), this.chunks.has(e.key) ? this.metrics.chunkCacheHits++ : this.metrics.chunkCacheMisses++, this.chunks.get(e.key, r, async (r) => {
			i(e.raw <= this.options.maxInflatedBytes, "chunk exceeds maxInflatedBytes");
			let a = await this.reads.get(e, r);
			d(r), this.metrics.chunksFetched++, (this.options.verify || t.fixed.codec === 1 && e.kind & 128) && l(a, e.crc, "chunk");
			let o = performance.now(), s = n.last, c = s && e.n === void 0 && e.kind === s.kind && e.raw === s.raw && t.members[e.group].length === s.decoded.tracks.length && ce(a, s.bytes), u;
			if (c) u = s.decoded;
			else {
				let n = a;
				t.fixed.codec === 1 && !(e.kind & 128) && (n = y(a, e.raw, this.options.maxInflatedBytes), this.metrics.decompressionMs += performance.now() - o, this.metrics.chunksDecompressed++), o = performance.now(), u = e.n === void 0 ? ee(n, e.kind, t.members[e.group].length, t.fixed.tile, this.options.maxInflatedBytes) : j(n, e.kind, e.n, e.first, e.last, this.options.maxInflatedBytes);
			}
			let f = e.kind >>> 3 & 15;
			for (let n = 0; n < u.tracks.length; n++) {
				let r = t.members[e.group][n].dtype;
				if (!(r === "float64" || r === "float32" && f === 6)) for (let e of u.tracks[n].values) Q(e, r) || i(!1, `chunk value cannot be represented in declared ${r} dtype`);
			}
			return !c && e.n === void 0 && (e.kind & 7) == 1 && a.byteLength + u.byteLength + u.tracks.length * 128 + 64 <= Math.min(65536, this.options.maxInflatedBytes) && u.tracks.every((e) => e.runs && e.values.length === 1 && Number.isNaN(e.values[0])) && (n.last = {
				bytes: Uint8Array.from(a),
				kind: e.kind,
				raw: e.raw,
				decoded: u
			}), this.metrics.decodingMs += performance.now() - o, u;
		});
	}
	copy(e, t, n, r, i, a) {
		if (!e.offsets) {
			let a = Math.max(n, t), o = Math.min(r, t + e.values.length);
			o > a && i.set(e.values.subarray(a - t, o - t), a - n);
		} else if (e.runs) {
			let o = e.offsets, s = Math.max(0, u(o, Math.max(0, n - t)) - 1);
			for (; s < o.length && t + o[s] < r; s++) {
				let c = Math.max(n, t + o[s]), l = Math.min(r, t + (o[s + 1] ?? a));
				l > c && i.fill(e.values[s], c - n, l - n);
			}
		} else for (let a = u(e.offsets, Math.max(0, n - t)); a < e.offsets.length && t + e.offsets[a] < r; a++) i[t + e.offsets[a] - n] = e.values[a];
	}
	aggregate(e, t, n, r, i, a, o) {
		let s = n.tracks[r].values, { start: c, end: l, binSize: d } = n;
		if (!e.offsets) {
			let n = Math.max(c, t), r = Math.min(l, t + e.values.length);
			if (d === 1) {
				for (; n < r; n++) {
					let r = e.values[n - t], i = n - c;
					Number.isNaN(r) ? a === "propagate" ? s[i] = NaN : o && o[i]++ : r !== 0 && (s[i] += r);
				}
				return;
			}
			let i = Math.floor((n - c) / d);
			for (; n < r;) {
				let l = Math.min(r, c + (i + 1) * d), u = s[i], f = 0;
				for (; n < l; n++) {
					let r = e.values[n - t];
					Number.isNaN(r) ? a === "propagate" ? u = NaN : o && f++ : r !== 0 && (u += r);
				}
				s[i] = u, f && (o[i] += f), i++;
			}
			return;
		}
		let f = e.offsets;
		if (e.runs) {
			let n = (e, t, n) => {
				let r = Math.max(c, t), i = Math.min(l, n);
				if (r >= i || e === 0) return;
				let u = Math.floor((r - c) / d), f = Number.isNaN(e);
				for (; r < i;) {
					let t = Math.min(i, c + (u + 1) * d), n = t - r;
					f ? a === "propagate" ? s[u] = NaN : o && (o[u] += n) : s[u] += e * n, r = t, u++;
				}
			};
			for (let r = Math.max(0, u(f, Math.max(0, c - t)) - 1); r < f.length && t + f[r] < l; r++) n(e.values[r], t + f[r], t + (f[r + 1] ?? i));
		} else {
			let n = c - t, r = l - t;
			for (let t = u(f, Math.max(0, n)); t < f.length && f[t] < r; t++) {
				let r = e.values[t], i = Math.floor((f[t] - n) / d);
				Number.isNaN(r) ? a === "propagate" ? s[i] = NaN : o && o[i]++ : r !== 0 && (s[i] += r);
			}
		}
	}
	async getSummary(e, t = 0, n = {}) {
		let r = this.signal(n.signal), i = await this.state(r);
		if (d(r), !Number.isInteger(e) || e < 0 || e >= i.fixed.nGroups || !Number.isInteger(t) || t < 0) throw RangeError("Invalid group or summary level");
		let a = await this.summaries.get(`${e}:${t}`, r, async (n) => {
			let r = await this.summaryCatalog(e, i, n);
			d(n);
			let a = r.levels[t];
			if (!a) throw RangeError(`Zoom level ${t} is unavailable for group ${e}`);
			let o = performance.now(), s = a.size ? await this.indexReads.get({
				offset: a.offset,
				size: a.size
			}, n) : /* @__PURE__ */ new Uint8Array();
			return d(n), this.metrics.indexLoadMs += performance.now() - o, this.decodeSummary(a, s, e, i);
		});
		return this.completed(a, r);
	}
	decodeSummary(e, t, n, r) {
		this.metrics.summaryBytes += e.size, l(t, e.checksum, e.factor === 1 ? "summary" : "zoom");
		let i = ie({
			...e,
			bytes: t
		}, n, r, this.options.maxInflatedBytes);
		return this.metrics.summaryInflatedBytes += i.bins.byteLength + i.sums.byteLength, i;
	}
	async getZoomLevels(e = {}) {
		e = {
			...e,
			signal: this.signal(e.signal)
		};
		let t = await this.state(e.signal);
		d(e.signal);
		let n = this.select(t.header, e.tracks), r = /* @__PURE__ */ new Map();
		return await Promise.all([...new Set(n.map((e) => e.group))].map(async (n) => {
			let i = await this.summaryCatalog(n, t, e.signal);
			d(e.signal), i.levels.slice(1).forEach(({ factor: e }, i) => {
				let a = i + 1, o = r.get(a) ?? {
					level: a,
					factor: e,
					binSize: e * t.fixed.tile,
					groups: []
				};
				o.groups.push(n), r.set(a, o);
			});
		})), d(e.signal), [...r.values()].sort((e, t) => e.level - t.level).map((e) => ({
			...e,
			groups: e.groups.sort((e, t) => e - t)
		}));
	}
	async getBins(e, t, n, r) {
		return this.completed((await this.getBinsMulti([{
			chromosome: e,
			start: t,
			end: n
		}], r))[0], r.signal);
	}
	async getBinsMulti(e, t) {
		t = {
			...t,
			signal: this.signal(t.signal)
		};
		let { binSize: n, aggregation: r = "mean", missing: i = "propagate" } = t;
		if (!Number.isSafeInteger(n) || n < 1 || !$(r, i)) throw RangeError("Invalid binSize, aggregation, or missing policy");
		if (t.requireSummaries && i !== "zero") throw RangeError("Required summaries need missing: 'zero'");
		let a = await this.state(t.signal);
		d(t.signal);
		let o = this.select(a.header, t.tracks);
		e.forEach((e) => this.region(a.header, e));
		let s = i === "omit" && r === "mean";
		this.output(e.reduce((e, t) => e + Math.ceil((t.end - t.start) / n) * (8 + o.length * (s ? 12 : 8)), 0));
		let c = e.map((e) => {
			let t = Math.ceil((e.end - e.start) / n);
			return {
				...e,
				binSize: n,
				source: "values",
				starts: Uint32Array.from({ length: t }, (t, r) => e.start + r * n),
				ends: Uint32Array.from({ length: t }, (t, r) => Math.min(e.end, e.start + (r + 1) * n)),
				tracks: o.map((e) => ({
					track: e,
					values: new Float64Array(t)
				}))
			};
		}), l = [];
		for (let n = 0; n < e.length; n++) if ((t.useSummaries || t.requireSummaries) && i === "zero" && await this.summaryBins(c[n], a, t)) c[n].source = "summary";
		else if (t.requireSummaries) {
			d(t.signal);
			let r = e[n];
			throw RangeError(`Required summaries are unavailable or bins are not tile-aligned for ${r.chromosome}:${r.start}-${r.end}`);
		} else l.push(n);
		let u = s ? c.map((e) => e.tracks.map(() => new Uint32Array(e.starts.length))) : void 0;
		if (l.length && await this.visitDecoded(a, l.map((t) => e[t]), o, t, (e, t, n, r) => {
			let o = l[n];
			this.aggregate(e, t, c[o], r, a.fixed.tile, i, u?.[o][r]);
		}), r === "mean") for (let e = 0; e < c.length; e++) {
			let t = c[e];
			for (let n = 0; n < t.tracks.length; n++) for (let r = 0; r < t.starts.length; r++) {
				let i = t.ends[r] - t.starts[r] - (u?.[e][n][r] ?? 0);
				t.tracks[n].values[r] = i ? t.tracks[n].values[r] / i : NaN;
			}
		}
		return d(t.signal), c;
	}
	async summaryBins(e, t, n) {
		let r = this.region(t.header, e), i = t.fixed.tile;
		if (e.start % i || e.binSize % i || e.end % i && e.end !== r.length) return !1;
		let a = await this.restartRoot(t, n.signal);
		if (a) return this.restartBins(e, t, a, n);
		let o = [...new Set(e.tracks.map((e) => e.track.group))], s = /* @__PURE__ */ new Map();
		if (await Promise.all(o.map(async (a) => {
			let o = await this.summaryCatalog(a, t, n.signal);
			d(n.signal);
			let c = 0;
			for (let t = 1; t < o.levels.length; t++) {
				let n = i * o.levels[t].factor;
				e.start % n === 0 && e.binSize % n === 0 && (e.end % n === 0 || e.end === r.length) && (c = t);
			}
			s.set(a, await this.getSummary(a, c, n));
		})), d(n.signal), [...s.values()].some((e) => !e.available)) return !1;
		for (let { track: n, values: i } of e.tracks) {
			let a = s.get(n.group), o = t.trackSlots[n.index], c = t.header.chromosomes.slice(0, r.id).reduce((e, t) => e + Math.ceil(t.tileCount / a.factor), 0), l = c + e.start / a.binSize, d = c + Math.ceil(e.end / a.binSize);
			for (let t = u(a.bins, l); t < a.bins.length && a.bins[t] < d; t++) {
				let n = Math.floor(((a.bins[t] - c) * a.binSize - e.start) / e.binSize);
				n >= 0 && n < i.length && (i[n] += a.sums[t * a.tracks.length + o]);
			}
		}
		return !0;
	}
	async readRestartBytes(e, t, n) {
		let r = performance.now(), i = await this.indexReads.get({
			offset: e,
			size: t
		}, n);
		return this.metrics.summaryIndexBytes += t, this.metrics.indexLoadMs += performance.now() - r, i;
	}
	async restartRoot(e, t) {
		let n = V(e);
		if (n !== void 0) return (await this.summaries.get("restart:root", this.signal(t), async (t) => ({
			root: H(await this.readRestartBytes(n, 256, t), n, e),
			cacheBytes: 256
		}))).root;
	}
	restartGroup(e, t, n, r) {
		return this.summaries.get(`restart:group:${e}`, this.signal(r), async (r) => {
			let i = U(await this.readRestartBytes(n.directory + e * 32, 32, r), e, n, t);
			return G(await this.readRestartBytes(i.offset, i.count * 32, r), i, n, e, t);
		});
	}
	async restartSource(e, t, n, r) {
		await this.summaries.get(`restart:source:${e}:${t}`, this.signal(r), async (e) => {
			let r = t ? 16 : 12;
			return q(await this.readRestartBytes(n.offset - r, r + Math.min(2, n.size), e), n), { cacheBytes: 32 };
		});
	}
	restartPage(e, t, n, r, a, o, s) {
		return this.summaries.get(`restart:page:${e}:${t}:${n}`, this.signal(s), async (t) => {
			let s = Math.min(102, Math.ceil(r.binCount / r.windowBins) - n * 102), c = r.index + n * R, l = 16 + s * 40;
			return B(o, c, l), i(s > 0 && l + s * 160 <= this.options.maxInflatedBytes, "summary restart page allocation exceeds maxInflatedBytes"), K(await this.readRestartBytes(c, l, t), n, r, a.members[e].length, this.options.maxInflatedBytes);
		});
	}
	restartWindow(e, t, n, r, a, o, s) {
		return this.summaries.get(`restart:data:${e}:${t}:${n}`, this.signal(s), async (s) => {
			let c = (await this.restartPage(e, t, Math.floor(n / 102), r, a, o, s)).windows[n % 102];
			if (d(s), !c.n) return {
				factor: r.factor,
				binSize: r.factor * a.fixed.tile,
				bins: /* @__PURE__ */ new Uint32Array(),
				sums: r.factor === 1 ? /* @__PURE__ */ new Float32Array() : /* @__PURE__ */ new Float64Array(),
				tracks: a.members[e],
				available: !0
			};
			i(2 * c.n * (4 + (t ? 8 : 4) * a.members[e].length) <= this.options.maxInflatedBytes, "parsed summary restart allocation exceeds maxInflatedBytes");
			let [l, u] = await Promise.all([c.ids, c.sums].map((e) => this.indexReads.get({
				offset: r.offset + e.offset,
				size: e.size
			}, s)));
			d(s), this.metrics.summaryBytes += l.length + u.length;
			let f = J(l, u, c, n, r, e, a, this.options.maxInflatedBytes);
			return this.metrics.summaryInflatedBytes += f.bins.byteLength + f.sums.byteLength, f;
		});
	}
	completeRestartSummary(e, t, n, r, i) {
		return this.summaries.get(`${e}:${t}`, this.signal(i), async (i) => {
			let a = t ? 16 : 12, o;
			if (a + n.size <= this.options.maxReadBytes) {
				let e = await this.indexReads.get({
					offset: n.offset - a,
					size: a + n.size
				}, i);
				d(i), this.metrics.summaryIndexBytes += a, q(e.subarray(0, a + Math.min(2, n.size)), n), o = e.subarray(a);
			} else await this.restartSource(e, t, n, i), o = await this.indexReads.get({
				offset: n.offset,
				size: n.size
			}, i), d(i);
			return this.decodeSummary(n, o, e, r);
		});
	}
	async restartBins(e, t, n, r) {
		let a = new AbortController();
		r = {
			...r,
			signal: AbortSignal.any([this.signal(r.signal), a.signal])
		};
		try {
			let a = this.region(t.header, e), o = t.fixed.tile, s = [...new Set(e.tracks.map((e) => e.track.group))];
			i(s.length * 256 <= this.options.maxInflatedBytes, "summary restart query planning exceeds maxInflatedBytes");
			let c = await Promise.all(s.map(async (i) => {
				let s = await this.restartGroup(i, t, n, r.signal), c = 0;
				for (let t = 1; t < s.levels.length; t++) {
					let n = o * s.levels[t].factor;
					e.start % n === 0 && e.binSize % n === 0 && (e.end % n === 0 || e.end === a.length) && (c = t);
				}
				let l = s.levels[c], u = t.header.chromosomes.slice(0, a.id).reduce((e, t) => e + Math.ceil(t.tileCount / l.factor), 0);
				return {
					group: i,
					level: c,
					ref: l,
					offset: u
				};
			}));
			if (d(r.signal), c.some((e) => e.ref.size === 0)) return !1;
			let l = 0;
			return await Promise.all(Array.from({ length: Math.min(6, c.length, this.options.maxConcurrentRequests) }, async () => {
				for (; l < c.length;) {
					let { group: a, level: s, ref: f, offset: p } = c[l++], m = e.tracks.filter((e) => e.track.group === a), h = p + e.start / (o * f.factor), g = p + Math.ceil(e.end / (o * f.factor)), _ = (n) => {
						for (let { track: r, values: i } of m) {
							let a = t.trackSlots[r.index];
							for (let t = u(n.bins, h); t < n.bins.length && n.bins[t] < g; t++) {
								let r = Math.floor(((n.bins[t] - p) * n.binSize - e.start) / e.binSize);
								r >= 0 && r < i.length && (i[r] += n.sums[t * n.tracks.length + a]);
							}
						}
					};
					d(r.signal);
					let v = f.n * (4 + (s ? 8 : 4) * t.members[a].length);
					if (this.summaries.has(`${a}:${s}`) || !f.windowBins || (g - h) * 2 >= f.binCount && f.size <= this.options.maxReadBytes && v <= this.options.maxInflatedBytes) {
						let e = await this.completeRestartSummary(a, s, f, t, r.signal);
						d(r.signal), i(e.available && e.bins.length === f.n, "summary restart catalog disagrees with complete summary"), _(e);
						continue;
					}
					await this.restartSource(a, s, f, r.signal);
					let y = Math.floor(h / f.windowBins), b = Math.ceil(g / f.windowBins);
					for (let e = y; e < b; e += 4) {
						let i = await Promise.all(Array.from({ length: Math.min(4, b - e) }, (i, o) => this.restartWindow(a, s, e + o, f, t, n, r.signal)));
						d(r.signal);
						for (let e of i) _(e);
					}
				}
			})), d(r.signal), !0;
		} catch (e) {
			throw a.abort(e), e;
		}
	}
	async getFeatures(e, t, n, r = {}) {
		return this.completed((await this.getFeaturesMulti([{
			chromosome: e,
			start: t,
			end: n
		}], r))[0], r.signal);
	}
	async getFeaturesMulti(e, t = {}) {
		t = {
			...t,
			signal: this.signal(t.signal)
		};
		let n = t.basesPerSpan ?? 1, { aggregation: r = "mean", missing: i = "propagate" } = t;
		if (!Number.isSafeInteger(n) || n < 1) throw RangeError("Invalid basesPerSpan");
		if (!$(r, i)) throw RangeError("Invalid aggregation or missing policy");
		if (t.requireSummaries && i !== "zero") throw RangeError("Required summaries need missing: 'zero'");
		let a = await this.state(t.signal);
		d(t.signal);
		let o = this.select(a.header, t.tracks);
		if (e.forEach((e) => this.region(a.header, e)), e.reduce((e, t) => e + Math.ceil((t.end - t.start) / n) * o.length, 0) > this.options.maxFeatures) throw RangeError("Requested features exceed maxFeatures; use typed arrays or a larger basesPerSpan");
		let s = n === 1 && !t.requireSummaries, c = s ? await this.getValuesMulti(e, t) : await this.getBinsMulti(e, {
			...t,
			binSize: n
		});
		d(t.signal);
		let l = s && (i === "zero" || i === "omit" && r === "sum");
		return c.map((e) => {
			let r = [];
			for (let i of e.tracks) for (let a = 0; a < i.values.length; a++) {
				let o = i.values[a];
				l && Number.isNaN(o) && (o = 0), (t.includeZeros !== !1 || o !== 0) && r.push({
					track: i.track.name,
					trackIndex: i.track.index,
					start: e.start + a * n,
					end: Math.min(e.end, e.start + (a + 1) * n),
					score: o
				});
			}
			return r;
		});
	}
	getDiagnostics() {
		return {
			...this.metrics,
			cacheBytes: this.groups.totalSize + this.chunks.totalSize + this.summaries.totalSize
		};
	}
	resetDiagnostics() {
		this.metrics = X();
	}
	clearCache() {
		this.groups.clear(), this.chunks.clear(), this.summaries.clear();
	}
	close() {
		return this.closePromise || (this.closePromise = Promise.resolve().then(() => this.filehandle.close()), this.lifetime.abort(new DOMException("Figwig reader is closed", "AbortError")), this.clearCache(), this.metadata.clear(), this.trackNames = void 0), this.closePromise;
	}
};
//#endregion
export { le as FigWig, r as FigWigError };
