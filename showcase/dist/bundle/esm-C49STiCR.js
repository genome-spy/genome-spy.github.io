//#region ../../node_modules/@gmod/bgzf-filehandle/esm/long.js
var e = 65536, t = e * e;
function n(e, n = 0) {
	let r = e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24;
	return ((e[n + 4] | e[n + 5] << 8 | e[n + 6] << 16 | e[n + 7] << 24) >>> 0) * t + (r >>> 0);
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/gziIndex.js
var r = 1;
function i(e, t, n) {
	let i = t[r], a = n ? n[r] : Infinity;
	return i <= e && a > e ? 0 : i < e ? -1 : 1;
}
var a = class {
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
		let e = n(await this.filehandle.read(8, 0));
		if (!e) return [[0, 0]];
		let t = Array(e + 1);
		t[0] = [0, 0];
		let r = 16 * e;
		if (r > 2 ** 53 - 1) throw TypeError("integer overflow");
		let i = await this.filehandle.read(r, 8);
		for (let r = 0; r < e; r += 1) {
			let e = n(i, r * 16), a = n(i, r * 16 + 8);
			t[r + 1] = [e, a];
		}
		return t;
	}
	async getLastBlock() {
		return (await this._getIndex()).at(-1);
	}
	async getRelevantBlocksForRead(e, t) {
		let n = t + e;
		if (e === 0) return [];
		let a = await this._getIndex(), o = [], s = 0, c = a.length - 1, l = Math.floor(a.length / 2), u = i(t, a[l], a[l + 1]);
		for (; u !== 0;) u > 0 ? c = l - 1 : u < 0 && (s = l + 1), l = Math.ceil((c - s) / 2) + s, u = i(t, a[l], a[l + 1]);
		o.push(a[l]);
		let d = l + 1;
		for (; d < a.length && (o.push(a[d]), !(a[d][r] >= n)); d += 1);
		return o[o.length - 1][r] < n && o.push([]), o;
	}
};
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/utils/common.js
function o(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function s(e) {
	for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
		var n = t.shift();
		if (n) {
			if (typeof n != "object") throw TypeError(n + "must be non-object");
			for (var r in n) o(n, r) && (e[r] = n[r]);
		}
	}
	return e;
}
function c(e, t) {
	return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
}
var l = {
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
}, u = {
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
}, d = () => {
	let e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
	return d = () => e, e;
}, f = (e, t, n, r, i) => (f = d() ? l.arraySet : u.arraySet, f(e, t, n, r, i)), p = (e) => (p = d() ? l.flattenChunks : u.flattenChunks, p(e)), m = (e) => (m = d() ? l.Buf8 : u.Buf8, m(e)), h = (e) => (h = d() ? l.Buf16 : u.Buf16, h(e)), g = (e) => (g = d() ? l.Buf32 : u.Buf32, g(e)), _ = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, [0]);
	} catch {
		e = !1;
	}
	return _ = () => e, e;
}, v = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, new Uint8Array(1));
	} catch {
		e = !1;
	}
	return v = () => e, e;
}, y = function(e) {
	for (var t = m(256), n = 0; n < 256; n++) t[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
	return t[254] = t[254] = 1, y = (e) => t[e], t[e];
};
function b(e) {
	var t, n, r, i, a, o = e.length, s = 0;
	for (i = 0; i < o; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
	for (t = new Uint8Array(s), a = 0, i = 0; a < s; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | n & 63) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63);
	return t;
}
function x(e, t) {
	if (t < 65534 && (e.subarray && v() || !e.subarray && _())) return String.fromCharCode.apply(null, c(e, t));
	for (var n = "", r = 0; r < t; r++) n += String.fromCharCode(e[r]);
	return n;
}
function S(e) {
	for (var t = new Uint8Array(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
	return t;
}
function C(e, t) {
	var n, r, i, a, o = t || e.length, s = Array(o * 2);
	for (r = 0, n = 0; n < o;) {
		if (i = e[n++], i < 128) {
			s[r++] = i;
			continue;
		}
		if (a = y(i), a > 4) {
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
	return x(s, r);
}
function w(e, t) {
	var n;
	for (t ||= e.length, t > e.length && (t = e.length), n = t - 1; n >= 0 && (e[n] & 192) == 128;) n--;
	return n < 0 || n === 0 ? t : n + y(e[n]) > t ? n : t;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/gzheader.js
function T() {
	this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/adler32.js
function E(e, t, n, r) {
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
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/crc32.js
function D() {
	for (var e, t = [], n = 0; n < 256; n++) {
		e = n;
		for (var r = 0; r < 8; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
}
var O = function() {
	let e = D();
	return O = () => e, e;
};
function k(e, t, n, r) {
	var i = O(), a = r + n;
	e ^= -1;
	for (var o = r; o < a; o++) e = e >>> 8 ^ i[(e ^ t[o]) & 255];
	return e ^ -1;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/inffast.js
var A = 30, j = 12;
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
							e.msg = "invalid distance too far back", n.mode = A;
							break top;
						}
						if (p >>>= b, m -= b, b = a - o, S > b) {
							if (b = S - b, b > u && n.sane) {
								e.msg = "invalid distance too far back", n.mode = A;
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
						e.msg = "invalid distance code", n.mode = A;
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
				n.mode = j;
				break top;
			} else {
				e.msg = "invalid literal/length code", n.mode = A;
				break top;
			}
			break;
		}
	} while (r < i && a < s);
	x = m >> 3, r -= x, m -= x << 3, p &= (1 << m) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), n.hold = p, n.bits = m;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/inftrees.js
var M = 15, te = 852, ne = 592, re = 0, ie = 1, ae = 2, oe = [
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
], se = [
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
], ce = [
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
], le = [
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
	var c = s.bits, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, g = 0, _ = 0, v = 0, y = 0, b, x, S, C, w, T = null, E = 0, D, O = h(M + 1), k = h(M + 1), A = null, j = 0, ee, N, P;
	for (l = 0; l <= M; l++) O[l] = 0;
	for (u = 0; u < r; u++) O[t[n + u]]++;
	for (p = c, f = M; f >= 1 && O[f] === 0; f--);
	if (p > f && (p = f), f === 0) return i[a++] = 20971520, i[a++] = 20971520, s.bits = 1, 0;
	for (d = 1; d < f && O[d] === 0; d++);
	for (p < d && (p = d), _ = 1, l = 1; l <= M; l++) if (_ <<= 1, _ -= O[l], _ < 0) return -1;
	if (_ > 0 && (e === re || f !== 1)) return -1;
	for (k[1] = 0, l = 1; l < M; l++) k[l + 1] = k[l] + O[l];
	for (u = 0; u < r; u++) t[n + u] !== 0 && (o[k[t[n + u]]++] = u);
	if (e === re ? (T = A = o, D = 19) : e === ie ? (T = oe, E -= 257, A = se, j -= 257, D = 256) : (T = ce, A = le, D = -1), y = 0, u = 0, l = d, w = a, m = p, g = 0, S = -1, v = 1 << p, C = v - 1, e === ie && v > te || e === ae && v > ne) return 1;
	for (;;) {
		ee = l - g, o[u] < D ? (N = 0, P = o[u]) : o[u] > D ? (N = A[j + o[u]], P = T[E + o[u]]) : (N = 96, P = 0), b = 1 << l - g, x = 1 << m, d = x;
		do
			x -= b, i[w + (y >> g) + x] = ee << 24 | N << 16 | P | 0;
		while (x !== 0);
		for (b = 1 << l - 1; y & b;) b >>= 1;
		if (b === 0 ? y = 0 : (y &= b - 1, y += b), u++, --O[l] === 0) {
			if (l === f) break;
			l = t[n + o[u]];
		}
		if (l > p && (y & C) !== S) {
			for (g === 0 && (g = p), w += d, m = l - g, _ = 1 << m; m + g < f && (_ -= O[m + g], !(_ <= 0));) m++, _ <<= 1;
			if (v += 1 << m, e === ie && v > te || e === ae && v > ne) return 1;
			S = y & C, i[S] = p << 24 | m << 16 | w - a | 0;
		}
	}
	return y !== 0 && (i[w + y] = l - g << 24 | 4194304), s.bits = p, 0;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/inflate.js
var P = 0, ue = 1, de = 2, fe = 4, pe = 5, F = 6, I = 0, me = 1, he = 2, L = -2, ge = -3, _e = -4, ve = -5, ye = 8, be = 1, xe = 2, Se = 3, Ce = 4, we = 5, Te = 6, Ee = 7, De = 8, Oe = 9, ke = 10, R = 11, z = 12, Ae = 13, je = 14, Me = 15, Ne = 16, Pe = 17, Fe = 18, Ie = 19, B = 20, V = 21, Le = 22, Re = 23, ze = 24, Be = 25, Ve = 26, He = 27, Ue = 28, We = 29, H = 30, Ge = 31, Ke = 32, qe = 852, Je = 592;
function Ye(e) {
	return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
}
function Xe() {
	this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = h(320), this.work = h(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function Ze(e) {
	var t;
	return !e || !e.state ? L : (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = be, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = g(qe), t.distcode = t.distdyn = g(Je), t.sane = 1, t.back = -1, I);
}
function Qe(e) {
	var t;
	return !e || !e.state ? L : (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, Ze(e));
}
function $e(e, t) {
	var n, r;
	return !e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? L : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, Qe(e));
}
function et(e, t) {
	var n, r;
	return e ? (r = new Xe(), e.state = r, r.window = null, n = $e(e, t), n !== I && (e.state = null), n) : L;
}
var tt = !0, nt, rt;
function it(e) {
	if (tt) {
		var t;
		for (nt = g(512), rt = g(32), t = 0; t < 144;) e.lens[t++] = 8;
		for (; t < 256;) e.lens[t++] = 9;
		for (; t < 280;) e.lens[t++] = 7;
		for (; t < 288;) e.lens[t++] = 8;
		for (N(ue, e.lens, 0, 288, nt, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
		N(de, e.lens, 0, 32, rt, 0, e.work, { bits: 5 }), tt = !1;
	}
	e.lencode = nt, e.lenbits = 9, e.distcode = rt, e.distbits = 5;
}
function at(e, t, n, r) {
	var i, a = e.state;
	return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = m(a.wsize)), r >= a.wsize ? (f(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), f(a.window, t, n - r, i, a.wnext), r -= i, r ? (f(a.window, t, n - r, r, 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
}
function ot(e, t) {
	var n, r, i, a, o, s, c, l, u, d, p, h, g, _, v = 0, y, b, x, S, C, w, T, D, O = m(4), A, j, M = [
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
	n = e.state, n.mode === z && (n.mode = Ae), o = e.next_out, i = e.output, c = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, l = n.hold, u = n.bits, d = s, p = c, D = I;
	inf_leave: for (;;) switch (n.mode) {
		case be:
			if (n.wrap === 0) {
				n.mode = Ae;
				break;
			}
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.wrap & 2 && l === 35615) {
				n.check = 0, O[0] = l & 255, O[1] = l >>> 8 & 255, n.check = k(n.check, O, 2, 0), l = 0, u = 0, n.mode = xe;
				break;
			}
			if (n.flags = 0, n.head && (n.head.done = !1), !(n.wrap & 1) || (((l & 255) << 8) + (l >> 8)) % 31) {
				e.msg = "incorrect header check", n.mode = H;
				break;
			}
			if ((l & 15) !== ye) {
				e.msg = "unknown compression method", n.mode = H;
				break;
			}
			if (l >>>= 4, u -= 4, T = (l & 15) + 8, n.wbits === 0) n.wbits = T;
			else if (T > n.wbits) {
				e.msg = "invalid window size", n.mode = H;
				break;
			}
			n.dmax = 1 << T, e.adler = n.check = 1, n.mode = l & 512 ? ke : z, l = 0, u = 0;
			break;
		case xe:
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.flags = l, (n.flags & 255) !== ye) {
				e.msg = "unknown compression method", n.mode = H;
				break;
			}
			if (n.flags & 57344) {
				e.msg = "unknown header flags set", n.mode = H;
				break;
			}
			n.head && (n.head.text = l >> 8 & 1), n.flags & 512 && (O[0] = l & 255, O[1] = l >>> 8 & 255, n.check = k(n.check, O, 2, 0)), l = 0, u = 0, n.mode = Se;
		case Se:
			for (; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			n.head && (n.head.time = l), n.flags & 512 && (O[0] = l & 255, O[1] = l >>> 8 & 255, O[2] = l >>> 16 & 255, O[3] = l >>> 24 & 255, n.check = k(n.check, O, 4, 0)), l = 0, u = 0, n.mode = Ce;
		case Ce:
			for (; u < 16;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			n.head && (n.head.xflags = l & 255, n.head.os = l >> 8), n.flags & 512 && (O[0] = l & 255, O[1] = l >>> 8 & 255, n.check = k(n.check, O, 2, 0)), l = 0, u = 0, n.mode = we;
		case we:
			if (n.flags & 1024) {
				for (; u < 16;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.length = l, n.head && (n.head.extra_len = l), n.flags & 512 && (O[0] = l & 255, O[1] = l >>> 8 & 255, n.check = k(n.check, O, 2, 0)), l = 0, u = 0;
			} else n.head && (n.head.extra = null);
			n.mode = Te;
		case Te:
			if (n.flags & 1024 && (h = n.length, h > s && (h = s), h && (n.head && (T = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), f(n.head.extra, r, a, h, T)), n.flags & 512 && (n.check = k(n.check, r, h, a)), s -= h, a += h, n.length -= h), n.length)) break inf_leave;
			n.length = 0, n.mode = Ee;
		case Ee:
			if (n.flags & 2048) {
				if (s === 0) break inf_leave;
				h = 0;
				do
					T = r[a + h++], n.head && T && n.length < 65536 && (n.head.name += String.fromCharCode(T));
				while (T && h < s);
				if (n.flags & 512 && (n.check = k(n.check, r, h, a)), s -= h, a += h, T) break inf_leave;
			} else n.head && (n.head.name = null);
			n.length = 0, n.mode = De;
		case De:
			if (n.flags & 4096) {
				if (s === 0) break inf_leave;
				h = 0;
				do
					T = r[a + h++], n.head && T && n.length < 65536 && (n.head.comment += String.fromCharCode(T));
				while (T && h < s);
				if (n.flags & 512 && (n.check = k(n.check, r, h, a)), s -= h, a += h, T) break inf_leave;
			} else n.head && (n.head.comment = null);
			n.mode = Oe;
		case Oe:
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
		case ke:
			for (; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			e.adler = n.check = Ye(l), l = 0, u = 0, n.mode = R;
		case R:
			if (n.havedict === 0) return e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, he;
			e.adler = n.check = 1, n.mode = z;
		case z: if (t === pe || t === F) break inf_leave;
		case Ae:
			if (n.last) {
				l >>>= u & 7, u -= u & 7, n.mode = He;
				break;
			}
			for (; u < 3;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			switch (n.last = l & 1, l >>>= 1, --u, l & 3) {
				case 0:
					n.mode = je;
					break;
				case 1:
					if (it(n), n.mode = B, t === F) {
						l >>>= 2, u -= 2;
						break inf_leave;
					}
					break;
				case 2:
					n.mode = Pe;
					break;
				case 3: e.msg = "invalid block type", n.mode = H;
			}
			l >>>= 2, u -= 2;
			break;
		case je:
			for (l >>>= u & 7, u -= u & 7; u < 32;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if ((l & 65535) != (l >>> 16 ^ 65535)) {
				e.msg = "invalid stored block lengths", n.mode = H;
				break;
			}
			if (n.length = l & 65535, l = 0, u = 0, n.mode = Me, t === F) break inf_leave;
		case Me: n.mode = Ne;
		case Ne:
			if (h = n.length, h) {
				if (h > s && (h = s), h > c && (h = c), h === 0) break inf_leave;
				f(i, r, a, h, o), s -= h, a += h, c -= h, o += h, n.length -= h;
				break;
			}
			n.mode = z;
			break;
		case Pe:
			for (; u < 14;) {
				if (s === 0) break inf_leave;
				s--, l += r[a++] << u, u += 8;
			}
			if (n.nlen = (l & 31) + 257, l >>>= 5, u -= 5, n.ndist = (l & 31) + 1, l >>>= 5, u -= 5, n.ncode = (l & 15) + 4, l >>>= 4, u -= 4, n.nlen > 286 || n.ndist > 30) {
				e.msg = "too many length or distance symbols", n.mode = H;
				break;
			}
			n.have = 0, n.mode = Fe;
		case Fe:
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
			n.have = 0, n.mode = Ie;
		case Ie:
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
						T = n.lens[n.have - 1], h = 3 + (l & 3), l >>>= 2, u -= 2;
					} else if (x === 17) {
						for (j = y + 3; u < j;) {
							if (s === 0) break inf_leave;
							s--, l += r[a++] << u, u += 8;
						}
						l >>>= y, u -= y, T = 0, h = 3 + (l & 7), l >>>= 3, u -= 3;
					} else {
						for (j = y + 7; u < j;) {
							if (s === 0) break inf_leave;
							s--, l += r[a++] << u, u += 8;
						}
						l >>>= y, u -= y, T = 0, h = 11 + (l & 127), l >>>= 7, u -= 7;
					}
					if (n.have + h > n.nlen + n.ndist) {
						e.msg = "invalid bit length repeat", n.mode = H;
						break;
					}
					for (; h--;) n.lens[n.have++] = T;
				}
			}
			if (n.mode === H) break;
			if (n.lens[256] === 0) {
				e.msg = "invalid code -- missing end-of-block", n.mode = H;
				break;
			}
			if (n.lenbits = 9, A = { bits: n.lenbits }, D = N(ue, n.lens, 0, n.nlen, n.lencode, 0, n.work, A), n.lenbits = A.bits, D) {
				e.msg = "invalid literal/lengths set", n.mode = H;
				break;
			}
			if (n.distbits = 6, n.distcode = n.distdyn, A = { bits: n.distbits }, D = N(de, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, A), n.distbits = A.bits, D) {
				e.msg = "invalid distances set", n.mode = H;
				break;
			}
			if (n.mode = B, t === F) break inf_leave;
		case B: n.mode = V;
		case V:
			if (s >= 6 && c >= 258) {
				e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, ee(e, p), o = e.next_out, i = e.output, c = e.avail_out, a = e.next_in, r = e.input, s = e.avail_in, l = n.hold, u = n.bits, n.mode === z && (n.back = -1);
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
				n.mode = Ve;
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
			n.extra = b & 15, n.mode = Le;
		case Le:
			if (n.extra) {
				for (j = n.extra; u < j;) {
					if (s === 0) break inf_leave;
					s--, l += r[a++] << u, u += 8;
				}
				n.length += l & (1 << n.extra) - 1, l >>>= n.extra, u -= n.extra, n.back += n.extra;
			}
			n.was = n.length, n.mode = Re;
		case Re:
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
			n.offset = x, n.extra = b & 15, n.mode = ze;
		case ze:
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
			n.mode = Be;
		case Be:
			if (c === 0) break inf_leave;
			if (h = p - c, n.offset > h) {
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
		case Ve:
			if (c === 0) break inf_leave;
			i[o++] = n.length, c--, n.mode = V;
			break;
		case He:
			if (n.wrap) {
				for (; u < 32;) {
					if (s === 0) break inf_leave;
					s--, l |= r[a++] << u, u += 8;
				}
				if (p -= c, e.total_out += p, n.total += p, p && (e.adler = n.check = n.flags ? k(n.check, i, p, o - p) : E(n.check, i, p, o - p)), p = c, (n.flags ? l : Ye(l)) !== n.check) {
					e.msg = "incorrect data check", n.mode = H;
					break;
				}
				l = 0, u = 0;
			}
			n.mode = Ue;
		case Ue:
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
			n.mode = We;
		case We:
			D = me;
			break inf_leave;
		case H:
			D = ge;
			break inf_leave;
		case Ge: return _e;
		case Ke:
		default: return L;
	}
	return e.next_out = o, e.avail_out = c, e.next_in = a, e.avail_in = s, n.hold = l, n.bits = u, (n.wsize || p !== e.avail_out && n.mode < H && (n.mode < He || t !== fe)) && at(e, e.output, e.next_out, p - e.avail_out) ? (n.mode = Ge, _e) : (d -= e.avail_in, p -= e.avail_out, e.total_in += d, e.total_out += p, n.total += p, n.wrap && p && (e.adler = n.check = n.flags ? k(n.check, i, p, e.next_out - p) : E(n.check, i, p, e.next_out - p)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === z ? 128 : 0) + (n.mode === B || n.mode === Me ? 256 : 0), (d === 0 && p === 0 || t === fe) && D === I && (D = ve), D);
}
function st(e) {
	if (!e || !e.state) return L;
	var t = e.state;
	return t.window &&= null, e.state = null, I;
}
function ct(e, t) {
	var n;
	return !e || !e.state || (n = e.state, !(n.wrap & 2)) ? L : (n.head = t, t.done = !1, I);
}
function lt(e, t) {
	var n = t.length, r, i, a;
	return !e || !e.state || (r = e.state, r.wrap !== 0 && r.mode !== R) ? L : r.mode === R && (i = 1, i = E(i, t, n, 0), i !== r.check) ? ge : (a = at(e, t, n, n), a ? (r.mode = Ge, _e) : (r.havedict = 1, I));
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/messages.js
var ut = {
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
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/zlib/zstream.js
function dt() {
	this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/node_modules/pako-esm2/esm/inflate.js
var ft = Object.prototype.toString, pt = class e {
	constructor(t) {
		if (!(this instanceof e)) return new e(t);
		this.options = s({
			chunkSize: 16384,
			windowBits: 0,
			to: ""
		}, t || {});
		var n = this.options;
		n.raw && n.windowBits >= 0 && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(t && t.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (n.windowBits & 15 || (n.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new dt(), this.strm.avail_out = 0;
		var r = et(this.strm, n.windowBits);
		if (r !== 0 || (this.header = new T(), ct(this.strm, this.header), n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = b(n.dictionary) : ft.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (r = lt(this.strm, n.dictionary), r !== 0)))) throw Error(ut[r]);
	}
	push(e, t) {
		var n = this.strm, r = this.options.chunkSize, i = this.options.dictionary, a, o, s, l, u, d, p = !1;
		if (this.ended) return !1;
		o = t === ~~t ? t : t === !0 ? 4 : 0, typeof e == "string" ? n.input = S(e) : ft.call(e) === "[object ArrayBuffer]" ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length;
		do {
			if (n.avail_out === 0 && (n.output = m(r), n.next_out = 0, n.avail_out = r), a = ot(n, 0), a === 2 && i && (d = typeof i == "string" ? b(i) : ft.call(i) === "[object ArrayBuffer]" ? new Uint8Array(i) : i, a = lt(this.strm, d)), a === -5 && p === !0 && (a = 0, p = !1), a !== 1 && a !== 0) return this.onEnd(a), this.ended = !0, !1;
			n.next_out && (n.avail_out === 0 || a === 1 || n.avail_in === 0 && (o === 4 || o === 2)) && (this.options.to === "string" ? (s = w(n.output, n.next_out), l = n.next_out - s, u = C(n.output, s), n.next_out = l, n.avail_out = r - l, l && f(n.output, n.output, s, l, 0), this.onData(u)) : this.onData(c(n.output, n.next_out))), n.avail_in === 0 && n.avail_out === 0 && (p = !0);
		} while ((n.avail_in > 0 || n.avail_out === 0) && a !== 1);
		return a === 1 && (o = 4), o === 4 ? (a = st(this.strm), this.onEnd(a), this.ended = !0, a === 0) : o === 2 ? (this.onEnd(0), n.avail_out = 0, !0) : !0;
	}
	onData(e) {
		this.chunks.push(e);
	}
	onEnd(e) {
		e === 0 && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = p(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}
};
function mt(e, t) {
	var n = new pt(t);
	if (n.push(e, !0), n.err) throw n.msg || ut[n.err];
	return n.result;
}
var ht = mt, U = {};
U.d = (e, t) => {
	for (var n in t) U.o(t, n) && !U.o(e, n) && Object.defineProperty(e, n, {
		enumerable: !0,
		get: t[n]
	});
}, U.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), U.r = (e) => {
	typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
};
var gt = {};
U.r(gt), U.d(gt, {
	ChunkSliceResult: () => W,
	DecompressResult: () => G,
	__wbg_Error_8c4e43fe74559d73: () => xt,
	__wbg___wbindgen_throw_be289d5034ed271b: () => St,
	__wbg_set_wasm: () => zt,
	decompress_all: () => vt,
	decompress_block: () => yt,
	decompress_chunk_slice: () => bt
});
var _t = "data:application/wasm;base64,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AAsgASADNgIEIAEgAjYCACABQfiSwAAgACgCBCAAKAIIIgAtAAggAC0ACRAeAAuLAQEBfyMAQRBrIgMkAAJAIAIgAWoiASACTw0AQQBBABBNAAsgA0EEaiAAKAIAIgIgACgCBCABIAJBAXQiAiABIAJLGyICQQggAkEISxsiAkEBQQEQIAJAIAMoAgRBAUcNACADKAIIIAMoAgwQTQALIAMoAgghASAAIAI2AgAgACABNgIEIANBEGokAAuHAQEBfyMAQSBrIgIkAAJAAkAgACgCAEGAgICAeEYNACABIAAoAgQgACgCCBBSIQAMAQsgAkEIakEIaiAAKAIMKAIAIgBBCGopAgA3AwAgAkEIakEQaiAAQRBqKQIANwMAIAIgACkCADcDCCABKAIAIAEoAgQgAkEIahALIQALIAJBIGokACAAC3wBAX8CQCAAKAIAIgAoAgwiAUUNACAAKAIQIAFBARBWCwJAIAAoAhgiAUUNACAAKAIcIAFBA3RBCBBWCwJAIAAoAiQiAUUNACAAKAIoIAFBA3RBCBBWCwJAIABBf0YNACAAIAAoAgRBf2oiATYCBCABDQAgAEEwQQQQVgsLhAEBAn8jAEEQayIGJABBACEHIAZBADYCDAJAAkACQAJAAkAgASgCACACIAMgBCAFIAZBDGoQUA4EAQIAAwALQZCFwABB7ABB/IXAABA/AAsgACAGKAIMNgIEDAILIABBADoAAUEBIQcMAQtBASEHIABBAToAAQsgACAHOgAAIAZBEGokAAtrAQN/IwBBEGsiASQAIAFBBGogACgCACICIAAoAgQgAkEBdCICQQQgAkEESxsiAkEIQQgQIAJAIAEoAgRBAUcNACABKAIIIAEoAgwQTQALIAEoAgghAyAAIAI2AgAgACADNgIEIAFBEGokAAtoAQF/IwBBMGsiAiQAAkAQaEH/AXENACACQTBqJAAPCyACIAE2AiQgAkECNgIQIAJBpJLAADYCDCACQgE3AhggAkEErUIghiACQSRqrYQ3AyggAiACQShqNgIUIAJBDGpBtJLAABBAAAtoAgF/AX4jAEEwayIDJAAgAyABNgIEIAMgADYCACADQQI2AgwgA0GcmMAANgIIIANCAjcCFCADQQStQiCGIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBA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ABWAAAAWgAAAF4AAABiAAAAZgAAAGoAAABuAAAAcgAAAHYAAAB6AAAAfgAAAIIAAACGAAAAigAAAI4AAACSAAAAlgAAAJoAAACeAAAAogAAAKYAAACqAAAArgAAALIAAAC2AAAAugAAAL4AAADCAAAAxgAAAMoAAADOAAAA0gAAANYAAADaAAAA3gAAAOIAAADmAAAA6gAAAO4AAADyAAAA9gAAAPoAAAD+AAABAgAAAQYAAAEKAAABDgAAARIAAAEWAAABGgAAAR4AAAEiAAABJgAAASoAAAEuAAABMgAAATYAAAE6AAABPgAAAUIAAAFGAAABSgAAAU4AAAFSAAABVgAAAVoAAAFeAAABYgAAAWYAAAFqAAABbgAAAXIAAAF2AAABegAAAX4AAAGCAAABhgAAAYoAAAGOAAABkgAAAZYAAAGaAAABngAAAaIAAAGmAAABqgAAAa4AAAGyAAABtgAAAboAAAG+AAABwgAAAcYAAAHKAAABzgAAAdIAAAHWAAAB2gAAAd4AAAHiAAAB5gAAAeoAAAHuAAAB8gAAAfYAAAH6AAAB/gAAAgIAAAIGAAACCgAAAg4AAAISAAACFgAAAhoAAAIeAAACIgAAAiYAAAIqAAACLgAAAjIAAAI2AAACOgAAAj4AAAJCAAACRgAAAkoAAAJOAAACUgAAAlYAAAJaAAACXgAAAmIAAAJmAAACagAAAm4AAAJyAAACdgAAAnoAAAJ+AAACggAAAoYAAAKKAAACjgAAApIAAAKWAAACmgAAAp4AAAKiAAACpgAAAqoAAAKuAAACsgAAArYAAAK6AAACvgAAAsIAAALGAAACygAAAs4AAALSAAAC1gAAAtoAAALeAAAC4gAAAuYAAALqAAAC7gAAAvIAAAL2AAAC+gAAAv4AAAMCAAADBgAAAwoAAAMOAAADEgAAAxYAAAMaAAADHgAAAyIAAAMmAAADKgAAAy4AAAMyAAADNgAAAzoAAAM+AAADQgAAA0YAAANKAAADTgAAA1IAAANWAAADWgAAA14AAANiAAADZgAAA2oAAANuAAADcgAAA3YAAAN6AAADfgAAA4IAAAOGAAADigAAA44AAAOSAAADlgAAA5oAAAOeAAADogAAA6YAAAOqAAADrgAAA7IAAAO2AAADugAAA74AAAPCAAADxgAAA8oAAAPOAAAD0gAAA9YAAAPaAAAD3gAAA+IAAAPmAAAD6gAAA+4AAAPyAAAD9gAAA/oAAAP+AAKAAAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAACQAAAAoAAQALAAEADQABAA8AAQARAAIAEwACABcAAgAbAAIAHwADACMAAwArAAMAMwADADsABABDAAQAUwAEAGMABABzAAUAgwAFAKMABQDDAAUA4wAAAAIBAAACAQAAAgF8/YsyV+ZX+QLfRL/jSOevbV3L1ixQ62N4QaZXcRuLuW1lbW9yeSBhbGxvY2F0aW9uIG9mICBieXRlcyBmYWlsZWQAAAAJEAAVAAAAFQkQAA0AAAAGARAAGAAAAGQBAAAJAAAAAAAAAAgAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAMAAAABAAAAAoAAAALAAAADAAAAAAAAAAIAAAABAAAAA0AAAAOAAAADwAAABAAAAARAAAAEAAAAAQAAAASAAAAEwAAABQAAAAIAAAAAAAAAAgAAAAEAAAAFQAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplID49IHNpemUgKyBtaW5fb3ZlcmhlYWQAANsAEAAqAAAAsQQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAADbABAAKgAAALcEAAANAAAACQAAAAwAAAAEAAAAFgAAAGNhcGFjaXR5IG92ZXJmbG93AAAAUAoQABEAAAC6ABAAIAAAABwAAAAFAAAAAQAAAAAAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OXJhbmdlIGVuZCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAABMCxAAEAAAAFwLEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAkAsQABYAAACmCxAADQAAAHJhbmdlIHN0YXJ0IGluZGV4IAAAxAsQABIAAABcCxAAIgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAADoCxAAIAAAAAgMEAASAAAAUmVmQ2VsbCBhbHJlYWR5IGJvcnJvd2VkAEHEmMAACwQEAAAAACkEbmFtZQEiAVgfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgA8CXByb2R1Y2VycwEMcHJvY2Vzc2VkLWJ5AgZ3YWxydXMGMC4yNC40DHdhc20tYmluZGdlbgcwLjIuMTA4", W = class e {
	static __wrap(t) {
		t >>>= 0;
		let n = Object.create(e.prototype);
		return n.__wbg_ptr = t, Ct.register(n, n.__wbg_ptr, n), n;
	}
	__destroy_into_raw() {
		let e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, Ct.unregister(this), e;
	}
	free() {
		let e = this.__destroy_into_raw();
		$.__wbg_chunksliceresult_free(e, 0);
	}
	get buffer() {
		try {
			let r = $.__wbindgen_add_to_stack_pointer(-16);
			$.chunksliceresult_buffer(r, this.__wbg_ptr);
			var e = q().getInt32(r + 0, !0), t = q().getInt32(r + 4, !0), n = Ot(e, t).slice();
			return $.__wbindgen_export(e, t * 1, 1), n;
		} finally {
			$.__wbindgen_add_to_stack_pointer(16);
		}
	}
	get cpositions() {
		try {
			let r = $.__wbindgen_add_to_stack_pointer(-16);
			$.chunksliceresult_cpositions(r, this.__wbg_ptr);
			var e = q().getInt32(r + 0, !0), t = q().getInt32(r + 4, !0), n = Dt(e, t).slice();
			return $.__wbindgen_export(e, t * 8, 8), n;
		} finally {
			$.__wbindgen_add_to_stack_pointer(16);
		}
	}
	get dpositions() {
		try {
			let r = $.__wbindgen_add_to_stack_pointer(-16);
			$.chunksliceresult_dpositions(r, this.__wbg_ptr);
			var e = q().getInt32(r + 0, !0), t = q().getInt32(r + 4, !0), n = Dt(e, t).slice();
			return $.__wbindgen_export(e, t * 8, 8), n;
		} finally {
			$.__wbindgen_add_to_stack_pointer(16);
		}
	}
};
Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
var G = class e {
	static __wrap(t) {
		t >>>= 0;
		let n = Object.create(e.prototype);
		return n.__wbg_ptr = t, wt.register(n, n.__wbg_ptr, n), n;
	}
	__destroy_into_raw() {
		let e = this.__wbg_ptr;
		return this.__wbg_ptr = 0, wt.unregister(this), e;
	}
	free() {
		let e = this.__destroy_into_raw();
		$.__wbg_decompressresult_free(e, 0);
	}
	get bytes_read() {
		return $.decompressresult_bytes_read(this.__wbg_ptr) >>> 0;
	}
	get data() {
		try {
			let r = $.__wbindgen_add_to_stack_pointer(-16);
			$.decompressresult_data(r, this.__wbg_ptr);
			var e = q().getInt32(r + 0, !0), t = q().getInt32(r + 4, !0), n = Ot(e, t).slice();
			return $.__wbindgen_export(e, t * 1, 1), n;
		} finally {
			$.__wbindgen_add_to_stack_pointer(16);
		}
	}
};
Symbol.dispose && (G.prototype[Symbol.dispose] = G.prototype.free);
function vt(e) {
	try {
		let a = $.__wbindgen_add_to_stack_pointer(-16), o = Nt(e, $.__wbindgen_export2), s = Rt;
		$.decompress_all(a, o, s);
		var t = q().getInt32(a + 0, !0), n = q().getInt32(a + 4, !0), r = q().getInt32(a + 8, !0);
		if (q().getInt32(a + 12, !0)) throw Pt(r);
		var i = Ot(t, n).slice();
		return $.__wbindgen_export(t, n * 1, 1), i;
	} finally {
		$.__wbindgen_add_to_stack_pointer(16);
	}
}
function yt(e) {
	try {
		let r = $.__wbindgen_add_to_stack_pointer(-16), i = Nt(e, $.__wbindgen_export2), a = Rt;
		$.decompress_block(r, i, a);
		var t = q().getInt32(r + 0, !0), n = q().getInt32(r + 4, !0);
		if (q().getInt32(r + 8, !0)) throw Pt(n);
		return G.__wrap(t);
	} finally {
		$.__wbindgen_add_to_stack_pointer(16);
	}
}
function bt(e, t, n, r, i) {
	try {
		let s = $.__wbindgen_add_to_stack_pointer(-16), c = Nt(e, $.__wbindgen_export2), l = Rt;
		$.decompress_chunk_slice(s, c, l, t, n, r, i);
		var a = q().getInt32(s + 0, !0), o = q().getInt32(s + 4, !0);
		if (q().getInt32(s + 8, !0)) throw Pt(o);
		return W.__wrap(a);
	} finally {
		$.__wbindgen_add_to_stack_pointer(16);
	}
}
function xt(e, t) {
	return Tt(Error(At(e, t)));
}
function St(e, t) {
	throw Error(At(e, t));
}
var Ct = typeof FinalizationRegistry > "u" ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => $.__wbg_chunksliceresult_free(e >>> 0, 1)), wt = typeof FinalizationRegistry > "u" ? {
	register: () => {},
	unregister: () => {}
} : new FinalizationRegistry((e) => $.__wbg_decompressresult_free(e >>> 0, 1));
function Tt(e) {
	Z === X.length && X.push(X.length + 1);
	let t = Z;
	return Z = X[t], X[t] = e, t;
}
function Et(e) {
	e < 132 || (X[e] = Z, Z = e);
}
function Dt(e, t) {
	return e >>>= 0, kt().subarray(e / 8, e / 8 + t);
}
function Ot(e, t) {
	return e >>>= 0, jt().subarray(e / 1, e / 1 + t);
}
var K = null;
function q() {
	return (K === null || K.buffer.detached === !0 || K.buffer.detached === void 0 && K.buffer !== $.memory.buffer) && (K = new DataView($.memory.buffer)), K;
}
var J = null;
function kt() {
	return (J === null || J.byteLength === 0) && (J = new Float64Array($.memory.buffer)), J;
}
function At(e, t) {
	return e >>>= 0, Lt(e, t);
}
var Y = null;
function jt() {
	return (Y === null || Y.byteLength === 0) && (Y = new Uint8Array($.memory.buffer)), Y;
}
function Mt(e) {
	return X[e];
}
var X = Array(128).fill(void 0);
X.push(void 0, null, !0, !1);
var Z = X.length;
function Nt(e, t) {
	let n = t(e.length * 1, 1) >>> 0;
	return jt().set(e, n / 1), Rt = e.length, n;
}
function Pt(e) {
	let t = Mt(e);
	return Et(e), t;
}
var Q = new TextDecoder("utf-8", {
	ignoreBOM: !0,
	fatal: !0
});
Q.decode();
var Ft = 2146435072, It = 0;
function Lt(e, t) {
	return It += t, It >= Ft && (Q = new TextDecoder("utf-8", {
		ignoreBOM: !0,
		fatal: !0
	}), Q.decode(), It = t), Q.decode(jt().subarray(e, e + t));
}
var Rt = 0, $;
function zt(e) {
	$ = e;
}
var Bt = null, Vt = null;
async function Ht() {
	return Bt || (Vt ||= (async () => {
		let e = await (await fetch(_t)).arrayBuffer(), { instance: t } = await WebAssembly.instantiate(e, { "./bgzf_wasm_bg.js": gt });
		return Bt = t.exports, zt(Bt), Bt;
	})(), Vt);
}
async function Ut(e) {
	return await Ht(), vt(e);
}
async function Wt(e, t, n, r, i) {
	await Ht();
	let a = bt(e, t, n, r, i), o = a.buffer, s = [...a.cpositions], c = [...a.dpositions];
	return a.free(), {
		buffer: o,
		cpositions: s,
		dpositions: c
	};
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/unzip.js
function Gt(e) {
	return e.length >= 2 && e[0] === 31 && e[1] === 139;
}
async function Kt(e) {
	if (typeof DecompressionStream < "u") {
		let t = new DecompressionStream("gzip"), n = t.writable.getWriter(), r = n.write(e).then(() => n.close()), i = [], a = t.readable.getReader();
		for (;;) {
			let { done: e, value: t } = await a.read();
			if (e) break;
			i.push(t);
		}
		await r;
		let o = i.reduce((e, t) => e + t.length, 0), s = new Uint8Array(o), c = 0;
		for (let e of i) s.set(e, c), c += e.length;
		return s;
	} else return ht(e, void 0);
}
async function qt(e) {
	try {
		return await Ut(e);
	} catch (t) {
		if (/invalid bgzf header/.exec(`${t}`)) {
			if (Gt(e)) return Kt(e);
			throw Error("problem decompressing block: not a valid bgzf or gzip block");
		}
		throw /invalid gzip header/.exec(`${t}`) ? Error("problem decompressing block: incorrect gzip header check") : t;
	}
}
async function Jt(e, t, n) {
	try {
		let { minv: n, maxv: r } = t, i = await Wt(e, n.blockPosition, n.dataPosition, r.blockPosition, r.dataPosition);
		return {
			buffer: i.buffer,
			cpositions: i.cpositions,
			dpositions: i.dpositions
		};
	} catch (e) {
		throw /invalid gzip header/.exec(`${e}`) ? Error("problem decompressing block: incorrect gzip header check") : e;
	}
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/util.js
function Yt(e) {
	let t = 0;
	for (let n of e) t += n.length;
	return t;
}
function Xt(e, t) {
	let n = new Uint8Array(t ?? Yt(e)), r = 0;
	for (let t of e) n.set(t, r), r += t.length;
	return n;
}
//#endregion
//#region ../../node_modules/@gmod/bgzf-filehandle/esm/bgzFilehandle.js
var Zt = class {
	filehandle;
	gzi;
	constructor({ filehandle: e, gziFilehandle: t }) {
		this.filehandle = e, this.gzi = new a({ filehandle: t });
	}
	async _readAndUncompressBlock(e, t) {
		let n = t;
		n ||= (await this.filehandle.stat()).size;
		let r = n - e;
		return qt(await this.filehandle.read(r, e));
	}
	async read(e, t) {
		let n = await this.gzi.getRelevantBlocksForRead(e, t), r = [];
		for (let i = 0; i < n.length - 1; i += 1) {
			let a = await this._readAndUncompressBlock(n[i][0], n[i + 1][0]), [, o] = n[i], s = o >= t ? 0 : t - o, c = Math.min(t + e, o + a.length) - o;
			s >= 0 && s < a.length && r.push(a.subarray(s, c));
		}
		return Xt(r);
	}
};
//#endregion
export { qt as n, Jt as r, Zt as t };
