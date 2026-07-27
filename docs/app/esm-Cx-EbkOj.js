//#region ../../node_modules/@gmod/bgzf-filehandle/esm/long.js
function e(e, t = 0) {
	let n = e.getUint32(t, !0);
	return e.getUint32(t + 4, !0) * 4294967296 + n;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/gziIndex.js
var t = 16;
function n(n, r) {
	let i = Array(r + 1);
	i[0] = [0, 0];
	let a = new DataView(n.buffer, n.byteOffset, n.byteLength);
	for (let n = 0; n < r; n += 1) {
		let r = n * t;
		i[n + 1] = [e(a, r), e(a, r + 8)];
	}
	return i;
}
function r(e, t) {
	let n = 0, r = e.length;
	for (; n < r;) {
		let i = n + r >>> 1;
		e[i][1] <= t ? n = i + 1 : r = i;
	}
	return n;
}
var i = class {
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
		let r = await this.filehandle.read(8, 0), i = e(new DataView(r.buffer, r.byteOffset, r.byteLength));
		if (i === 0) return [[0, 0]];
		if (i > (2 ** 53 - 1) / t) throw TypeError("integer overflow");
		return n(await this.filehandle.read(t * i, 8), i);
	}
	async getRelevantBlocksForRead(e, t) {
		if (e === 0) return {
			blocks: [],
			nextCompressedPosition: void 0
		};
		let n = await this._getIndex(), i = t + e, a = r(n, t) - 1, o = a + 1;
		for (; o < n.length && n[o][1] < i;) o += 1;
		return {
			blocks: n.slice(a, o),
			nextCompressedPosition: n[o]?.[0]
		};
	}
};
//#endregion
//#region ../../node_modules/pako-esm2/esm/utils/common.js
function a(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function o(e) {
	for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
		var n = t.shift();
		if (n) {
			if (typeof n != "object") throw TypeError(n + "must be non-object");
			for (var r in n) a(n, r) && (e[r] = n[r]);
		}
	}
	return e;
}
function s(e, t) {
	return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
}
var c = {
	arraySet: function(e, t, n, r, i) {
		if (t.subarray && e.subarray) {
			e.set(t.subarray(n, n + r), i);
			return;
		}
		for (var a = 0; a < r; a++) e[i + a] = t[n + a];
	},
	flattenChunks: function(e) {
		var t, n, r = 0, i, a, o;
		for (t = 0, n = e.length; t < n; t++) r += e[t].length;
		for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
		return o;
	},
	Buf8: function(e) {
		return new Uint8Array(e);
	},
	Buf16: function(e) {
		return new Uint16Array(e);
	},
	Buf32: function(e) {
		return new Int32Array(e);
	}
}, l = {
	arraySet: function(e, t, n, r, i) {
		for (var a = 0; a < r; a++) e[i + a] = t[n + a];
	},
	flattenChunks: function(e) {
		return [].concat.apply([], e);
	},
	Buf8: function(e) {
		return Array(e);
	},
	Buf16: function(e) {
		return Array(e);
	},
	Buf32: function(e) {
		return Array(e);
	}
}, u = () => {
	let e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
	return u = () => e, e;
}, d = (e, t, n, r, i) => (d = u() ? c.arraySet : l.arraySet, d(e, t, n, r, i)), f = (e) => (f = u() ? c.flattenChunks : l.flattenChunks, f(e)), p = (e) => (p = u() ? c.Buf8 : l.Buf8, p(e)), m = (e) => (m = u() ? c.Buf16 : l.Buf16, m(e)), h = (e) => (h = u() ? c.Buf32 : l.Buf32, h(e)), g = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, [0]);
	} catch {
		e = !1;
	}
	return g = () => e, e;
}, _ = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
	} catch {
		e = !1;
	}
	return _ = () => e, e;
}, v = function(e) {
	for (var t = p(256), n = 0; n < 256; n++) t[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
	return t[254] = t[254] = 1, v = (e) => t[e], t[e];
};
function y(e) {
	var t, n, r, i, a, o = e.length, s = 0;
	for (i = 0; i < o; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
	for (t = new Uint8Array(s), a = 0, i = 0; a < s; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | n & 63) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63);
	return t;
}
function b(e, t) {
	if (t < 65534 && (e.subarray && _() || !e.subarray && g())) return String.fromCharCode.apply(null, s(e, t));
	for (var n = "", r = 0; r < t; r++) n += String.fromCharCode(e[r]);
	return n;
}
function x(e) {
	for (var t = new Uint8Array(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
	return t;
}
function S(e, t) {
	var n, r, i, a, o = t || e.length, s = Array(o * 2);
	for (r = 0, n = 0; n < o;) {
		if (i = e[n++], i < 128) {
			s[r++] = i;
			continue;
		}
		if (a = v(i), a > 4) {
			s[r++] = 65533, n += a - 1;
			continue;
		}
		for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < o;) i = i << 6 | e[n++] & 63, a--;
		if (a > 1) {
			s[r++] = 65533;
			continue;
		}
		i < 65536 ? s[r++] = i : (i -= 65536, s[r++] = 55296 | i >> 10 & 1023, s[r++] = 56320 | i & 1023);
	}
	return b(s, r);
}
function C(e, t) {
	var n;
	for (t ||= e.length, t > e.length && (t = e.length), n = t - 1; n >= 0 && (e[n] & 192) == 128;) n--;
	return n < 0 || n === 0 ? t : n + v(e[n]) > t ? n : t;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/gzheader.js
function w() {
	this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/adler32.js
function T(e, t, n, r) {
	for (var i = e & 65535 | 0, a = e >>> 16 & 65535 | 0, o = 0; n !== 0;) {
		o = n > 2e3 ? 2e3 : n, n -= o;
		do
			i = i + t[r++] | 0, a = a + i | 0;
		while (--o);
		i %= 65521, a %= 65521;
	}
	return i | a << 16 | 0;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/crc32.js
function E() {
	for (var e, t = [], n = 0; n < 256; n++) {
		e = n;
		for (var r = 0; r < 8; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
}
var D = function() {
	let e = E();
	return D = () => e, e;
};
function O(e, t, n, r) {
	var i = D(), a = r + n;
	e ^= -1;
	for (var o = r; o < a; o++) e = e >>> 8 ^ i[(e ^ t[o]) & 255];
	return e ^ -1;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inffast.js
var k = 30, A = 12;
function ee(e, t) {
	var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
	i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
	top: do {
		m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
		dolen: for (;;) {
			if (b = y >>> 24, p >>>= b, m -= b, b = y >>> 16 & 255, b === 0) E[a++] = y & 65535;
			else if (b & 16) {
				x = y & 65535, b &= 15, b && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
				dodist: for (;;) {
					if (b = y >>> 24, p >>>= b, m -= b, b = y >>> 16 & 255, b & 16) {
						if (S = y & 65535, b &= 15, m < b && (p += T[r++] << m, m += 8, m < b && (p += T[r++] << m, m += 8)), S += p & (1 << b) - 1, S > c) {
							e.msg = "invalid distance too far back", n.mode = k;
							break top;
						}
						if (p >>>= b, m -= b, b = a - o, S > b) {
							if (b = S - b, b > u && n.sane) {
								e.msg = "invalid distance too far back", n.mode = k;
								break top;
							}
							if (C = 0, w = f, d === 0) {
								if (C += l - b, b < x) {
									x -= b;
									do
										E[a++] = f[C++];
									while (--b);
									C = a - S, w = E;
								}
							} else if (d < b) {
								if (C += l + d - b, b -= d, b < x) {
									x -= b;
									do
										E[a++] = f[C++];
									while (--b);
									if (C = 0, d < x) {
										b = d, x -= b;
										do
											E[a++] = f[C++];
										while (--b);
										C = a - S, w = E;
									}
								}
							} else if (C += d - b, b < x) {
								x -= b;
								do
									E[a++] = f[C++];
								while (--b);
								C = a - S, w = E;
							}
							for (; x > 2;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
							x && (E[a++] = w[C++], x > 1 && (E[a++] = w[C++]));
						} else {
							C = a - S;
							do
								E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], x -= 3;
							while (x > 2);
							x && (E[a++] = E[C++], x > 1 && (E[a++] = E[C++]));
						}
					} else if (b & 64) {
						e.msg = "invalid distance code", n.mode = k;
						break top;
					} else {
						y = g[(y & 65535) + (p & (1 << b) - 1)];
						continue dodist;
					}
					break;
				}
			} else if (!(b & 64)) {
				y = h[(y & 65535) + (p & (1 << b) - 1)];
				continue dolen;
			} else if (b & 32) {
				n.mode = A;
				break top;
			} else {
				e.msg = "invalid literal/length code", n.mode = k;
				break top;
			}
			break;
		}
	} while (r < i && a < s);
	x = m >> 3, r -= x, m -= x << 3, p &= (1 << m) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), n.hold = p, n.bits = m;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inftrees.js
var j = 15, M = 852, te = 592, ne = 0, re = 1, ie = 2, ae = [
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	13,
	15,
	17,
	19,
	23,
	27,
	31,
	35,
	43,
	51,
	59,
	67,
	83,
	99,
	115,
	131,
	163,
	195,
	227,
	258,
	0,
	0
], oe = [
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	16,
	17,
	17,
	17,
	17,
	18,
	18,
	18,
	18,
	19,
	19,
	19,
	19,
	20,
	20,
	20,
	20,
	21,
	21,
	21,
	21,
	16,
	72,
	78
], se = [
	1,
	2,
	3,
	4,
	5,
	7,
	9,
	13,
	17,
	25,
	33,
	49,
	65,
	97,
	129,
	193,
	257,
	385,
	513,
	769,
	1025,
	1537,
	2049,
	3073,
	4097,
	6145,
	8193,
	12289,
	16385,
	24577,
	0,
	0
], ce = [
	16,
	16,
	16,
	16,
	17,
	17,
	18,
	18,
	19,
	19,
	20,
	20,
	21,
	21,
	22,
	22,
	23,
	23,
	24,
	24,
	25,
	25,
	26,
	26,
	27,
	27,
	28,
	28,
	29,
	29,
	64,
	64
];
function N(e, t, n, r, i, a, o, s) {
	var c = s.bits, l = 0, u = 0, d = 0, f = 0, p = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b, x, S, C, w, T = null, E = 0, D, O = m(j + 1), k = m(j + 1), A = null, ee = 0, N, P, F;
	for (l = 0; l <= j; l++) O[l] = 0;
	for (u = 0; u < r; u++) O[t[n + u]]++;
	for (p = c, f = j; f >= 1 && O[f] === 0; f--);
	if (p > f && (p = f), f === 0) return i[a++] = 20971520, i[a++] = 20971520, s.bits = 1, 0;
	for (d = 1; d < f && O[d] === 0; d++);
	for (p < d && (p = d), _ = 1, l = 1; l <= j; l++) if (_ <<= 1, _ -= O[l], _ < 0) return -1;
	if (_ > 0 && (e === ne || f !== 1)) return -1;
	for (k[1] = 0, l = 1; l < j; l++) k[l + 1] = k[l] + O[l];
	for (u = 0; u < r; u++) t[n + u] !== 0 && (o[k[t[n + u]]++] = u);
	if (e === ne ? (T = A = o, D = 19) : e === re ? (T = ae, E -= 257, A = oe, ee -= 257, D = 256) : (T = se, A = ce, D = -1), y = 0, u = 0, l = d, w = a, h = p, g = 0, S = -1, v = 1 << p, C = v - 1, e === re && v > M || e === ie && v > te) return 1;
	for (;;) {
		N = l - g, o[u] < D ? (P = 0, F = o[u]) : o[u] > D ? (P = A[ee + o[u]], F = T[E + o[u]]) : (P = 96, F = 0), b = 1 << l - g, x = 1 << h, d = x;
		do
			x -= b, i[w + (y >> g) + x] = N << 24 | P << 16 | F | 0;
		while (x !== 0);
		for (b = 1 << l - 1; y & b;) b >>= 1;
		if (b === 0 ? y = 0 : (y &= b - 1, y += b), u++, --O[l] === 0) {
			if (l === f) break;
			l = t[n + o[u]];
		}
		if (l > p && (y & C) !== S) {
			for (g === 0 && (g = p), w += d, h = l - g, _ = 1 << h; h + g < f && (_ -= O[h + g], !(_ <= 0));) h++, _ <<= 1;
			if (v += 1 << h, e === re && v > M || e === ie && v > te) return 1;
			S = y & C, i[S] = p << 24 | h << 16 | w - a | 0;
		}
	}
	return y !== 0 && (i[w + y] = l - g << 24 | 4194304), s.bits = p, 0;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inflate.js
var P = 0, F = 1, le = 2, ue = 4, de = 5, fe = 6, I = 0, pe = 1, me = 2, L = -2, he = -3, ge = -4, _e = -5, ve = 8, ye = 1, be = 2, xe = 3, Se = 4, Ce = 5, we = 6, Te = 7, Ee = 8, De = 9, Oe = 10, R = 11, z = 12, ke = 13, Ae = 14, je = 15, Me = 16, Ne = 17, Pe = 18, Fe = 19, B = 20, V = 21, Ie = 22, Le = 23, Re = 24, ze = 25, Be = 26, Ve = 27, He = 28, Ue = 29, H = 30, We = 31, Ge = 32, Ke = 852, qe = 592;
function Je(e) {
	return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
}
function Ye() {
	this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = m(320), this.work = m(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function Xe(e) {
	var t;
	return !e || !e.state ? L : (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = ye, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = h(Ke), t.distcode = t.distdyn = h(qe), t.sane = 1, t.back = -1, I);
}
function Ze(e) {
	var t;
	return !e || !e.state ? L : (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, Xe(e));
}
function Qe(e, t) {
	var n, r;
	return !e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? L : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, Ze(e));
}
function $e(e, t) {
	var n, r;
	return e ? (r = new Ye(), e.state = r, r.window = null, n = Qe(e, t), n !== I && (e.state = null), n) : L;
}
var et = !0, tt, nt;
function rt(e) {
	if (et) {
		var t;
		for (tt = h(512), nt = h(32), t = 0; t < 144;) e.lens[t++] = 8;
		for (; t < 256;) e.lens[t++] = 9;
		for (; t < 280;) e.lens[t++] = 7;
		for (; t < 288;) e.lens[t++] = 8;
		for (N(F, e.lens, 0, 288, tt, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
		N(le, e.lens, 0, 32, nt, 0, e.work, { bits: 5 }), et = !1;
	}
	e.lencode = tt, e.lenbits = 9, e.distcode = nt, e.distbits = 5;
}
function it(e, t, n, r) {
	var i, a = e.state;
	return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = p(a.wsize)), r >= a.wsize ? (d(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), d(a.window, t, n - r, i, a.wnext), r -= i, r ? (d(a.window, t, n - r, r, 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
}
function at(e, t) {
	var n, r, i, a, o, s, c, l, u, f, m, h, g, _, v = 0, y, b, x, S, C, w, E, D, k = p(4), A, j, M = [
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	];
	if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return L;
	n = e.state, n.mode === z && (n.mode = ke), o = e.next_out, i = e.output, c = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, l = n.hold, u = n.bits, f = s, m = c, D = I;
	inf_leave: for (;;) switch (n.mode) {
		case ye:
			if (n.wrap === 0) {
				n.mode = ke;
				break;
			}
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.wrap & 2 && l === 35615) {
				n.check = 0, k[0] = l & 255, k[1] = l >>> 8 & 255, n.check = O(n.check, k, 2, 0), l = 0, u = 0, n.mode = be;
				break;
			}
			if (n.flags = 0, n.head && (n.head.done = !1), !(n.wrap & 1) || (((l & 255) << 8) + (l >> 8)) % 31) {
				e.msg = "incorrect header check", n.mode = H;
				break;
			}
			if ((l & 15) !== ve) {
				e.msg = "unknown compression method", n.mode = H;
				break;
			}
			if (l >>>= 4, u -= 4, E = (l & 15) + 8, n.wbits === 0) n.wbits = E;
			else if (E > n.wbits) {
				e.msg = "invalid window size", n.mode = H;
				break;
			}
			n.dmax = 1 << E, e.adler = n.check = 1, n.mode = l & 512 ? Oe : z, l = 0, u = 0;
			break;
		case be:
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.flags = l, (n.flags & 255) !== ve) {
				e.msg = "unknown compression method", n.mode = H;
				break;
			}
			if (n.flags & 57344) {
				e.msg = "unknown header flags set", n.mode = H;
				break;
			}
			n.head && (n.head.text = l >> 8 & 1), n.flags & 512 && (k[0] = l & 255, k[1] = l >>> 8 & 255, n.check = O(n.check, k, 2, 0)), l = 0, u = 0, n.mode = xe;
		case xe:
			for (; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			n.head && (n.head.time = l), n.flags & 512 && (k[0] = l & 255, k[1] = l >>> 8 & 255, k[2] = l >>> 16 & 255, k[3] = l >>> 24 & 255, n.check = O(n.check, k, 4, 0)), l = 0, u = 0, n.mode = Se;
		case Se:
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			n.head && (n.head.xflags = l & 255, n.head.os = l >> 8), n.flags & 512 && (k[0] = l & 255, k[1] = l >>> 8 & 255, n.check = O(n.check, k, 2, 0)), l = 0, u = 0, n.mode = Ce;
		case Ce:
			if (n.flags & 1024) {
				for (; u < 16;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.length = l, n.head && (n.head.extra_len = l), n.flags & 512 && (k[0] = l & 255, k[1] = l >>> 8 & 255, n.check = O(n.check, k, 2, 0)), l = 0, u = 0;
			} else n.head && (n.head.extra = null);
			n.mode = we;
		case we:
			if (n.flags & 1024 && (h = n.length, h > s && (h = s), h && (n.head && (E = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), d(n.head.extra, r, a, h, E)), n.flags & 512 && (n.check = O(n.check, r, h, a)), s -= h, a += h, n.length -= h), n.length)) break inf_leave;
			n.length = 0, n.mode = Te;
		case Te:
			if (n.flags & 2048) {
				if (s === 0) break inf_leave;
				h = 0;
				do
					E = r[a + h++], n.head && E && n.length < 65536 && (n.head.name += String.fromCharCode(E));
				while (E && h < s);
				if (n.flags & 512 && (n.check = O(n.check, r, h, a)), s -= h, a += h, E) break inf_leave;
			} else n.head && (n.head.name = null);
			n.length = 0, n.mode = Ee;
		case Ee:
			if (n.flags & 4096) {
				if (s === 0) break inf_leave;
				h = 0;
				do
					E = r[a + h++], n.head && E && n.length < 65536 && (n.head.comment += String.fromCharCode(E));
				while (E && h < s);
				if (n.flags & 512 && (n.check = O(n.check, r, h, a)), s -= h, a += h, E) break inf_leave;
			} else n.head && (n.head.comment = null);
			n.mode = De;
		case De:
			if (n.flags & 512) {
				for (; u < 16;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				if (l !== (n.check & 65535)) {
					e.msg = "header crc mismatch", n.mode = H;
					break;
				}
				l = 0, u = 0;
			}
			n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = z;
			break;
		case Oe:
			for (; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			e.adler = n.check = Je(l), l = 0, u = 0, n.mode = R;
		case R:
			if (n.havedict === 0) return e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, me;
			e.adler = n.check = 1, n.mode = z;
		case z: if (t === de || t === fe) break inf_leave;
		case ke:
			if (n.last) {
				l >>>= u & 7, u -= u & 7, n.mode = Ve;
				break;
			}
			for (; u < 3;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			switch (n.last = l & 1, l >>>= 1, --u, l & 3) {
				case 0:
					n.mode = Ae;
					break;
				case 1:
					if (rt(n), n.mode = B, t === fe) {
						l >>>= 2, u -= 2;
						break inf_leave;
					}
					break;
				case 2:
					n.mode = Ne;
					break;
				case 3: e.msg = "invalid block type", n.mode = H;
			}
			l >>>= 2, u -= 2;
			break;
		case Ae:
			for (l >>>= u & 7, u -= u & 7; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if ((l & 65535) != (l >>> 16 ^ 65535)) {
				e.msg = "invalid stored block lengths", n.mode = H;
				break;
			}
			if (n.length = l & 65535, l = 0, u = 0, n.mode = je, t === fe) break inf_leave;
		case je: n.mode = Me;
		case Me:
			if (h = n.length, h) {
				if (h > s && (h = s), h > c && (h = c), h === 0) break inf_leave;
				d(i, r, a, h, o), s -= h, a += h, c -= h, o += h, n.length -= h;
				break;
			}
			n.mode = z;
			break;
		case Ne:
			for (; u < 14;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.nlen = (l & 31) + 257, l >>>= 5, u -= 5, n.ndist = (l & 31) + 1, l >>>= 5, u -= 5, n.ncode = (l & 15) + 4, l >>>= 4, u -= 4, n.nlen > 286 || n.ndist > 30) {
				e.msg = "too many length or distance symbols", n.mode = H;
				break;
			}
			n.have = 0, n.mode = Pe;
		case Pe:
			for (; n.have < n.ncode;) {
				for (; u < 3;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.lens[M[n.have++]] = l & 7, l >>>= 3, u -= 3;
			}
			for (; n.have < 19;) n.lens[M[n.have++]] = 0;
			if (n.lencode = n.lendyn, n.lenbits = 7, A = { bits: n.lenbits }, D = N(P, n.lens, 0, 19, n.lencode, 0, n.work, A), n.lenbits = A.bits, D) {
				e.msg = "invalid code lengths set", n.mode = H;
				break;
			}
			n.have = 0, n.mode = Fe;
		case Fe:
			for (; n.have < n.nlen + n.ndist;) {
				for (; v = n.lencode[l & (1 << n.lenbits) - 1], y = v >>> 24, b = v >>> 16 & 255, x = v & 65535, !(y <= u);) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				if (x < 16) l >>>= y, u -= y, n.lens[n.have++] = x;
				else {
					if (x === 16) {
						for (j = y + 2; u < j;) {
							if (s === 0) break inf_leave;
							s--, l += r[a++] << u, u += 8;
						}
						if (l >>>= y, u -= y, n.have === 0) {
							e.msg = "invalid bit length repeat", n.mode = H;
							break;
						}
						E = n.lens[n.have - 1], h = 3 + (l & 3), l >>>= 2, u -= 2;
					} else if (x === 17) {
						for (j = y + 3; u < j;) {
							if (s === 0) break inf_leave;
							s--, l += r[a++] << u, u += 8;
						}
						l >>>= y, u -= y, E = 0, h = 3 + (l & 7), l >>>= 3, u -= 3;
					} else {
						for (j = y + 7; u < j;) {
							if (s === 0) break inf_leave;
							s--, l += r[a++] << u, u += 8;
						}
						l >>>= y, u -= y, E = 0, h = 11 + (l & 127), l >>>= 7, u -= 7;
					}
					if (n.have + h > n.nlen + n.ndist) {
						e.msg = "invalid bit length repeat", n.mode = H;
						break;
					}
					for (; h--;) n.lens[n.have++] = E;
				}
			}
			if (n.mode === H) break;
			if (n.lens[256] === 0) {
				e.msg = "invalid code -- missing end-of-block", n.mode = H;
				break;
			}
			if (n.lenbits = 9, A = { bits: n.lenbits }, D = N(F, n.lens, 0, n.nlen, n.lencode, 0, n.work, A), n.lenbits = A.bits, D) {
				e.msg = "invalid literal/lengths set", n.mode = H;
				break;
			}
			if (n.distbits = 6, n.distcode = n.distdyn, A = { bits: n.distbits }, D = N(le, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, A), n.distbits = A.bits, D) {
				e.msg = "invalid distances set", n.mode = H;
				break;
			}
			if (n.mode = B, t === fe) break inf_leave;
		case B: n.mode = V;
		case V:
			if (s >= 6 && c >= 258) {
				e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, ee(e, m), o = e.next_out, i = e.output, c = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, l = n.hold, u = n.bits, n.mode === z && (n.back = -1);
				break;
			}
			for (n.back = 0; v = n.lencode[l & (1 << n.lenbits) - 1], y = v >>> 24, b = v >>> 16 & 255, x = v & 65535, !(y <= u);) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (b && !(b & 240)) {
				for (S = y, C = b, w = x; v = n.lencode[w + ((l & (1 << S + C) - 1) >> S)], y = v >>> 24, b = v >>> 16 & 255, x = v & 65535, !(S + y <= u);) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				l >>>= S, u -= S, n.back += S;
			}
			if (l >>>= y, u -= y, n.back += y, n.length = x, b === 0) {
				n.mode = Be;
				break;
			}
			if (b & 32) {
				n.back = -1, n.mode = z;
				break;
			}
			if (b & 64) {
				e.msg = "invalid literal/length code", n.mode = H;
				break;
			}
			n.extra = b & 15, n.mode = Ie;
		case Ie:
			if (n.extra) {
				for (j = n.extra; u < j;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.length += l & (1 << n.extra) - 1, l >>>= n.extra, u -= n.extra, n.back += n.extra;
			}
			n.was = n.length, n.mode = Le;
		case Le:
			for (; v = n.distcode[l & (1 << n.distbits) - 1], y = v >>> 24, b = v >>> 16 & 255, x = v & 65535, !(y <= u);) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (!(b & 240)) {
				for (S = y, C = b, w = x; v = n.distcode[w + ((l & (1 << S + C) - 1) >> S)], y = v >>> 24, b = v >>> 16 & 255, x = v & 65535, !(S + y <= u);) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				l >>>= S, u -= S, n.back += S;
			}
			if (l >>>= y, u -= y, n.back += y, b & 64) {
				e.msg = "invalid distance code", n.mode = H;
				break;
			}
			n.offset = x, n.extra = b & 15, n.mode = Re;
		case Re:
			if (n.extra) {
				for (j = n.extra; u < j;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.offset += l & (1 << n.extra) - 1, l >>>= n.extra, u -= n.extra, n.back += n.extra;
			}
			if (n.offset > n.dmax) {
				e.msg = "invalid distance too far back", n.mode = H;
				break;
			}
			n.mode = ze;
		case ze:
			if (c === 0) break inf_leave;
			if (h = m - c, n.offset > h) {
				if (h = n.offset - h, h > n.whave && n.sane) {
					e.msg = "invalid distance too far back", n.mode = H;
					break;
				}
				h > n.wnext ? (h -= n.wnext, g = n.wsize - h) : g = n.wnext - h, h > n.length && (h = n.length), _ = n.window;
			} else _ = i, g = o - n.offset, h = n.length;
			h > c && (h = c), c -= h, n.length -= h;
			do
				i[o++] = _[g++];
			while (--h);
			n.length === 0 && (n.mode = V);
			break;
		case Be:
			if (c === 0) break inf_leave;
			i[o++] = n.length, c--, n.mode = V;
			break;
		case Ve:
			if (n.wrap) {
				for (; u < 32;) {
					if (s === 0) break inf_leave;
					s--, l |= r[a++] << u, u += 8;
				}
				if (m -= c, e.total_out += m, n.total += m, m && (e.adler = n.check = n.flags ? O(n.check, i, m, o - m) : T(n.check, i, m, o - m)), m = c, (n.flags ? l : Je(l)) !== n.check) {
					e.msg = "incorrect data check", n.mode = H;
					break;
				}
				l = 0, u = 0;
			}
			n.mode = He;
		case He:
			if (n.wrap && n.flags) {
				for (; u < 32;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				if (l !== (n.total & 4294967295)) {
					e.msg = "incorrect length check", n.mode = H;
					break;
				}
				l = 0, u = 0;
			}
			n.mode = Ue;
		case Ue:
			D = pe;
			break inf_leave;
		case H:
			D = he;
			break inf_leave;
		case We: return ge;
		case Ge:
		default: return L;
	}
	return e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, (n.wsize || m !== e.avail_out && n.mode < H && (n.mode < Ve || t !== ue)) && it(e, e.output, e.next_out, m - e.avail_out) ? (n.mode = We, ge) : (f -= e.avail_in, m -= e.avail_out, e.total_in += f, e.total_out += m, n.total += m, n.wrap && m && (e.adler = n.check = n.flags ? O(n.check, i, m, e.next_out - m) : T(n.check, i, m, e.next_out - m)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === z ? 128 : 0) + (n.mode === B || n.mode === je ? 256 : 0), (f === 0 && m === 0 || t === ue) && D === I && (D = _e), D);
}
function ot(e) {
	if (!e || !e.state) return L;
	var t = e.state;
	return t.window &&= null, e.state = null, I;
}
function st(e, t) {
	var n;
	return !e || !e.state || (n = e.state, !(n.wrap & 2)) ? L : (n.head = t, t.done = !1, I);
}
function ct(e, t) {
	var n = t.length, r, i, a;
	return !e || !e.state || (r = e.state, r.wrap !== 0 && r.mode !== R) ? L : r.mode === R && (i = 1, i = T(i, t, n, 0), i !== r.check) ? he : (a = it(e, t, n, n), a ? (r.mode = We, ge) : (r.havedict = 1, I));
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/messages.js
var lt = {
	2: "need dictionary",
	1: "stream end",
	0: "",
	"-1": "file error",
	"-2": "stream error",
	"-3": "data error",
	"-4": "insufficient memory",
	"-5": "buffer error",
	"-6": "incompatible version"
};
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/zstream.js
function ut() {
	this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/inflate.js
var dt = Object.prototype.toString, ft = class e {
	constructor(t) {
		if (!(this instanceof e)) return new e(t);
		this.options = o({
			chunkSize: 16384,
			windowBits: 0,
			to: ""
		}, t || {});
		var n = this.options;
		n.raw && n.windowBits >= 0 && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(t && t.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (n.windowBits & 15 || (n.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ut(), this.strm.avail_out = 0;
		var r = $e(this.strm, n.windowBits);
		if (r !== 0 || (this.header = new w(), st(this.strm, this.header), n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = y(n.dictionary) : dt.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (r = ct(this.strm, n.dictionary), r !== 0)))) throw Error(lt[r]);
	}
	push(e, t) {
		var n = this.strm, r = this.options.chunkSize, i = this.options.dictionary, a, o, c, l, u, f, m = !1;
		if (this.ended) return !1;
		o = t === ~~t ? t : t === !0 ? 4 : 0, typeof e == "string" ? n.input = x(e) : dt.call(e) === "[object ArrayBuffer]" ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;
		do {
			if (n.avail_out === 0 && (n.output = p(r), n.next_out = 0, n.avail_out = r), a = at(n, 0), a === 2 && i && (f = typeof i == "string" ? y(i) : dt.call(i) === "[object ArrayBuffer]" ? new Uint8Array(i) : i, a = ct(this.strm, f)), a === -5 && m === !0 && (a = 0, m = !1), a !== 1 && a !== 0) return this.onEnd(a), this.ended = !0, !1;
			n.next_out && (n.avail_out === 0 || a === 1 || n.avail_in === 0 && (o === 4 || o === 2)) && (this.options.to === "string" ? (c = C(n.output, n.next_out), l = n.next_out - c, u = S(n.output, c), n.next_out = l, n.avail_out = r - l, l && d(n.output, n.output, c, l, 0), this.onData(u)) : this.onData(s(n.output, n.next_out))), n.avail_in === 0 && n.avail_out === 0 && (m = !0);
		} while ((n.avail_in > 0 || n.avail_out === 0) && a !== 1);
		return a === 1 && (o = 4), o === 4 ? (a = ot(this.strm), this.onEnd(a), this.ended = !0, a === 0) : o === 2 ? (this.onEnd(0), n.avail_out = 0, !0) : !0;
	}
	onData(e) {
		this.chunks.push(e);
	}
	onEnd(e) {
		e === 0 && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = f(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}
};
function pt(e, t) {
	var n = new ft(t);
	if (n.push(e, !0), n.err) throw n.msg || lt[n.err];
	return n.result;
}
var mt = pt, U = {};
U.d = (e, t) => {
	for (var n in t) U.o(t, n) && !U.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, U.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), U.r = (e) => {
	typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
var ht = {};
U.r(ht), U.d(ht, {
	ChunkSliceResult: () => W,
	__wbg_Error_ef53bc310eb298a0: () => yt,
	__wbg___wbindgen_throw_1506f2235d1bdba0: () => bt,
	__wbg_set_wasm: () => It,
	decompress_all: () => _t,
	decompress_chunk_slice: () => vt
});
var gt = "data:application/wasm;base64,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ADYCACADQRitQiCGIAOthDcDCEGfgsAAIANBCGogAhAxAAs0AAJAIAFpQQFHDQAgAEGAgICAeCABa0sNAAJAIABFDQAQaSAAIAEQVyIBRQ0BCyABDwsAC0AAAkAgACgCAEGAgICAeEYNACABIAAoAgQgACgCCBBMDwsgASgCACABKAIEIAAoAgwoAgAiACgCACAAKAIEEAsLOQACQCACQYCAxABGDQAgACACIAEoAhARBQBFDQBBAQ8LAkAgAw0AQQAPCyAAIAMgBCABKAIMEQcACzUBAX8CQCAARQ0AAkAgASgCACICRQ0AIAAgAhECAAsgASgCBCICRQ0AIAAgAiABKAIIEFILCyoBAX8jAEEQayIDJAAgAyACNgIMIAMgATYCCCADIAA2AgQgA0EEahBjAAstAQF/IwBBEGsiASQAIAEgACkCADcCCCABQQhqQZCUwAAgACgCCEEBQQAQFgALLAIBfwF+IwBBEGsiASQAIAApAgAhAiABIAA2AgwgASACNwIEIAFBBGoQZQALIwEBfyMAQRBrIgIkACACIAE2AgwgAiAANgIIIAJBCGoQZAALIAACQCABKAIARQ0AIABByJbAADYCBCAAIAE2AgAPCwALHgEBfwJAIAAoAgAiAkUNACABIAIgACgCBBBMDwsACxsBAX8QaSAAQQRqQQQQVyIBIAA2AgAgAUEEagseAQF/AkAgACgCACIBQQFIDQAgACgCBCABQQEQUgsLHgAgACgCACAAKAIEQQAoAtSZQCIAQQMgABsRBAAACyMBAX8CQEGMicAAECwiAA0AQcCIwABBOkH8iMAAEDcACyAACx8AAkAgAEGAgICAeHJBgICAgHhGDQAgASAAQQEQUgsLHAEBfwJAIAAoAgAiAUUNACAAKAIEIAFBARBSCwsXAAJAIAFBCUkNACABIAAQDw8LIAAQAgsVACAAQXxqIgAgACgCAEEEakEEEFILFAACQCAARQ0AIAAgARBeAAsQVQALEQAgACABQQF0QQFyIAIQMQALEgACQCABRQ0AIAAgASACEFILCxIAIAAgASACIAMgBEEAIAUQAwsVAAJAIABFDQAgACAAKAKoWhECAAsLGgAgAEEAKQKUlUA3AgggAEEAKQKMlUA3AgALGgAgAEEAKQKElUA3AgggAEEAKQL8lEA3AgALFgAgACgCACABIAIgACgC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AAGAAAACgAAAA4AAAASAAAAFgAAABoAAAAeAAAAIgAAACYAAAAqAAAALgAAADIAAAA2AAAAOgAAAD4AAABCAAAARgAAAEoAAABOAAAAUgAAAFYAAABaAAAAXgAAAGIAAABmAAAAagAAAG4AAAByAAAAdgAAAHoAAAB+AAAAggAAAIYAAACKAAAAjgAAAJIAAACWAAAAmgAAAJ4AAACiAAAApgAAAKoAAACuAAAAsgAAALYAAAC6AAAAvgAAAMIAAADGAAAAygAAAM4AAADSAAAA1gAAANoAAADeAAAA4gAAAOYAAADqAAAA7gAAAPIAAAD2AAAA+gAAAP4AAAECAAABBgAAAQoAAAEOAAABEgAAARYAAAEaAAABHgAAASIAAAEmAAABKgAAAS4AAAEyAAABNgAAAToAAAE+AAABQgAAAUYAAAFKAAABTgAAAVIAAAFWAAABWgAAAV4AAAFiAAABZgAAAWoAAAFuAAABcgAAAXYAAAF6AAABfgAAAYIAAAGGAAABigAAAY4AAAGSAAABlgAAAZoAAAGeAAABogAAAaYAAAGqAAABrgAAAbIAAAG2AAABugAAAb4AAAHCAAABxgAAAcoAAAHOAAAB0gAAAdYAAAHaAAAB3gAAAeIAAAHmAAAB6gAAAe4AAAHyAAAB9gAAAfoAAAH+AAACAgAAAgYAAAIKAAACDgAAAhIAAAIWAAACGgAAAh4AAAIiAAACJgAAAioAAAIuAAACMgAAAjYAAAI6AAACPgAAAkIAAAJGAAACSgAAAk4AAAJSAAACVgAAAloAAAJeAAACYgAAAmYAAAJqAAACbgAAAnIAAAJ2AAACegAAAn4AAAKCAAAChgAAAooAAAKOAAACkgAAApYAAAKaAAACngAAAqIAAAKmAAACqgAAAq4AAAKyAAACtgAAAroAAAK+AAACwgAAAsYAAALKAAACzgAAAtIAAALWAAAC2gAAAt4AAALiAAAC5gAAAuoAAALuAAAC8gAAAvYAAAL6AAAC/gAAAwIAAAMGAAADCgAAAw4AAAMSAAADFgAAAxoAAAMeAAADIgAAAyYAAAMqAAADLgAAAzIAAAM2AAADOgAAAz4AAANCAAADRgAAA0oAAANOAAADUgAAA1YAAANaAAADXgAAA2IAAANmAAADagAAA24AAANyAAADdgAAA3oAAAN+AAADggAAA4YAAAOKAAADjgAAA5IAAAOWAAADmgAAA54AAAOiAAADpgAAA6oAAAOuAAADsgAAA7YAAAO6AAADvgAAA8IAAAPGAAADygAAA84AAAPSAAAD1gAAA9oAAAPeAAAD4gAAA+YAAAPqAAAD7gAAA/IAAAP2AAAD+gAAA/4AAoAAAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgABAAsAAQANAAEADwABABEAAgATAAIAFwACABsAAgAfAAMAIwADACsAAwAzAAMAOwAEAEMABABTAAQAYwAEAHMABQCDAAUAowAFAMMABQDjAAAAAgEAAAIBAAACAQAAAAAIAAAABAAAAAQAAAAFAAAABgAAAAcAAAAIAAAADAAAAAQAAAAJAAAACgAAAAsAAAAAAAAACAAAAAQAAAAMAAAADQAAAA4AAAAPAAAAEAAAABAAAAAEAAAAEQAAABIAAAATAAAABwAAAG1dy9YsUOtjeEGmV3Ebi7krgVsBvYZR7Ay0wpzkyccEYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZAAAOAIQACoAAACxBAAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplIDw9IHNpemUgKyBtYXhfb3ZlcmhlYWQAADgCEAAqAAAAtwQAAA0AAAByd2xvY2sgb3ZlcmZsb3dlZCByZWFkIGxvY2tzIQEQAF0AAAAVAAAALAAAAAAAAAAIAAAABAAAABQAAAAIAAAADAAAAAQAAAAVAAAAcndsb2NrIGhhcyBub3QgYmVlbiBsb2NrZWQgZm9yIHJlYWRpbmcAACEBEABdAAAAPgAAAAkAAABjYXBhY2l0eSBvdmVyZmxvdwAAAOcBEABQAAAAHAAAAAUAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OVJlZkNlbGwgYWxyZWFkeSBib3Jyb3dlZABBpJnAAAsEBAAAAAApBG5hbWUBIgFWH19fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIAPAlwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQIGd2FscnVzBjAuMjYuNAx3YXNtLWJpbmRnZW4HMC4yLjEyMg==", W = class e {
	static __wrap(t) {
		let n = Object.create(e.prototype);
		return n.__wbg_ptr = t, xt.register(n, n.__wbg_ptr, n), n;
	}
	__destroy_into_raw() {
		let e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, xt.unregister(this), e;
	}
	free() {
		let e = this.__destroy_into_raw();
		Q.__wbg_chunksliceresult_free(e, 0);
	}
	take_buffer() {
		try {
			let r = Q.__wbindgen_add_to_stack_pointer(-16);
			Q.chunksliceresult_take_buffer(r, this.__wbg_ptr);
			var e = K().getInt32(r + 0, !0), t = K().getInt32(r + 4, !0), n = Tt(e, t).slice();
			return Q.__wbindgen_export(e, t * 1, 1), n;
		} finally {
			Q.__wbindgen_add_to_stack_pointer(16);
		}
	}
	take_cpositions() {
		try {
			let r = Q.__wbindgen_add_to_stack_pointer(-16);
			Q.chunksliceresult_take_cpositions(r, this.__wbg_ptr);
			var e = K().getInt32(r + 0, !0), t = K().getInt32(r + 4, !0), n = wt(e, t).slice();
			return Q.__wbindgen_export(e, t * 8, 8), n;
		} finally {
			Q.__wbindgen_add_to_stack_pointer(16);
		}
	}
	take_dpositions() {
		try {
			let r = Q.__wbindgen_add_to_stack_pointer(-16);
			Q.chunksliceresult_take_dpositions(r, this.__wbg_ptr);
			var e = K().getInt32(r + 0, !0), t = K().getInt32(r + 4, !0), n = wt(e, t).slice();
			return Q.__wbindgen_export(e, t * 8, 8), n;
		} finally {
			Q.__wbindgen_add_to_stack_pointer(16);
		}
	}
};
Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
function _t(e) {
	try {
		let a = Q.__wbindgen_add_to_stack_pointer(-16), o = At(e, Q.__wbindgen_export2), s = Ft;
		Q.decompress_all(a, o, s);
		var t = K().getInt32(a + 0, !0), n = K().getInt32(a + 4, !0), r = K().getInt32(a + 8, !0);
		if (K().getInt32(a + 12, !0)) throw jt(r);
		var i = Tt(t, n).slice();
		return Q.__wbindgen_export(t, n * 1, 1), i;
	} finally {
		Q.__wbindgen_add_to_stack_pointer(16);
	}
}
function vt(e, t, n, r, i) {
	try {
		let s = Q.__wbindgen_add_to_stack_pointer(-16), c = At(e, Q.__wbindgen_export2), l = Ft;
		Q.decompress_chunk_slice(s, c, l, t, n, r, i);
		var a = K().getInt32(s + 0, !0), o = K().getInt32(s + 4, !0);
		if (K().getInt32(s + 8, !0)) throw jt(o);
		return W.__wrap(a);
	} finally {
		Q.__wbindgen_add_to_stack_pointer(16);
	}
}
function yt(e, t) {
	return St(Error(Dt(e, t)));
}
function bt(e, t) {
	throw Error(Dt(e, t));
}
var xt = typeof FinalizationRegistry > "u" ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => Q.__wbg_chunksliceresult_free(e, 1));
function St(e) {
	X === Y.length && Y.push(Y.length + 1);
	let t = X;
	return X = Y[t], Y[t] = e, t;
}
function Ct(e) {
	e < 1028 || (Y[e] = X, X = e);
}
function wt(e, t) {
	return e >>>= 0, Et().subarray(e / 8, e / 8 + t);
}
function Tt(e, t) {
	return e >>>= 0, Ot().subarray(e / 1, e / 1 + t);
}
var G = null;
function K() {
	return (G === null || G.buffer.detached === !0 || G.buffer.detached === void 0 && G.buffer !== Q.memory.buffer) && (G = new DataView(Q.memory.buffer)), G;
}
var q = null;
function Et() {
	return (q === null || q.byteLength === 0) && (q = new Float64Array(Q.memory.buffer)), q;
}
function Dt(e, t) {
	return Pt(e >>> 0, t);
}
var J = null;
function Ot() {
	return (J === null || J.byteLength === 0) && (J = new Uint8Array(Q.memory.buffer)), J;
}
function kt(e) {
	return Y[e];
}
var Y = Array(1024).fill(void 0);
Y.push(void 0, null, !0, !1);
var X = Y.length;
function At(e, t) {
	let n = t(e.length * 1, 1) >>> 0;
	return Ot().set(e, n / 1), Ft = e.length, n;
}
function jt(e) {
	let t = kt(e);
	return Ct(e), t;
}
var Z = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Z.decode();
var Mt = 2146435072, Nt = 0;
function Pt(e, t) {
	return Nt += t, Nt >= Mt && (Z = new TextDecoder("utf-8", {
		ignoreBOM: !0,
		fatal: !0
	}), Z.decode(), Nt = t), Z.decode(Ot().subarray(e, e + t));
}
var Ft = 0, Q;
function It(e) {
	Q = e;
}
var $ = null, Lt = null;
async function Rt() {
	return $ || (Lt ||= (async () => {
		let e = await (await fetch(gt)).arrayBuffer(), { instance: t } = await WebAssembly.instantiate(e, { "./bgzf_wasm_bg.js": ht });
		return $ = t.exports, It($), $;
	})(), Lt);
}
async function zt(e) {
	return await Rt(), _t(e);
}
async function Bt(e, t, n, r, i) {
	await Rt();
	let a = vt(e, t, n, r, i), o = a.take_buffer(), s = [...a.take_cpositions()], c = [...a.take_dpositions()];
	return a.free(), {
		buffer: o,
		cpositions: s,
		dpositions: c
	};
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/unzip.js
function Vt(e) {
	return e[0] === 31 && e[1] === 139;
}
function Ht(e) {
	return e instanceof Error ? e.message : `${e}`;
}
async function Ut(e) {
	if (typeof DecompressionStream < "u") {
		let t = new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"));
		return new Uint8Array(await new Response(t).arrayBuffer());
	} else return mt(e, void 0);
}
function Wt(e) {
	return Ht(e).includes("invalid gzip header") ? Error("problem decompressing block: incorrect gzip header check", { cause: e }) : e;
}
async function Gt(e) {
	try {
		return await zt(e);
	} catch (t) {
		if (Ht(t).includes("invalid bgzf header")) {
			if (Vt(e)) return Ut(e);
			throw Error("problem decompressing block: not a valid bgzf or gzip block", { cause: t });
		}
		throw Wt(t);
	}
}
async function Kt(e, t) {
	let { minv: n, maxv: r } = t;
	try {
		let t = await Bt(e, n.blockPosition, n.dataPosition, r.blockPosition, r.dataPosition);
		return {
			buffer: t.buffer,
			cpositions: t.cpositions,
			dpositions: t.dpositions
		};
	} catch (e) {
		throw Wt(e);
	}
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/util.js
function qt(e) {
	let t = 0;
	for (let n of e) t += n.length;
	let n = new Uint8Array(t), r = 0;
	for (let t of e) n.set(t, r), r += t.length;
	return n;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/bgzFilehandle.js
var Jt = 10, Yt = 65536;
function Xt(e) {
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
function Zt(e, t, n, r) {
	let i = Math.max(0, n - t), a = Math.min(r, t + e.length) - t;
	return i < e.length ? e.subarray(i, a) : /* @__PURE__ */ new Uint8Array();
}
var Qt = class {
	filehandle;
	gzi;
	limit;
	constructor({ filehandle: e, gziFilehandle: t, blockConcurrency: n = Jt }) {
		this.filehandle = e, this.gzi = new i({ filehandle: t }), this.limit = Xt(n);
	}
	async _readAndUncompressBlock(e, t) {
		return Gt(await this.filehandle.read(t, e));
	}
	async read(e, t) {
		let { blocks: n, nextCompressedPosition: r } = await this.gzi.getRelevantBlocksForRead(e, t);
		if (n.length === 0) return /* @__PURE__ */ new Uint8Array();
		let i = t + e;
		return qt(await Promise.all(n.map(([e, a], o) => this.limit(async () => {
			let s = n[o + 1]?.[0] ?? r ?? e + Yt;
			return Zt(await this._readAndUncompressBlock(e, s - e), a, t, i);
		}))));
	}
};
//#endregion
export { Gt as n, Kt as r, Qt as t };
