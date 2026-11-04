//#region ../../node_modules/pako-esm2/esm/utils/common.js
function e(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function t(t) {
	for (var n = Array.prototype.slice.call(arguments, 1); n.length;) {
		var r = n.shift();
		if (r) {
			if (typeof r != "object") throw TypeError(r + "must be non-object");
			for (var i in r) e(r, i) && (t[i] = r[i]);
		}
	}
	return t;
}
function n(e, t) {
	return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
}
var r = {
	arraySet: function(e, t, n, r, i) {
		if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
		else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
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
}, i = {
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
}, a = () => {
	let e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
	return a = () => e, e;
}, o = (e, t, n, s, c) => (o = a() ? r.arraySet : i.arraySet, o(e, t, n, s, c)), s = (e) => (s = a() ? r.flattenChunks : i.flattenChunks, s(e)), c = (e) => (c = a() ? r.Buf8 : i.Buf8, c(e)), l = (e) => (l = a() ? r.Buf16 : i.Buf16, l(e)), u = (e) => (u = a() ? r.Buf32 : i.Buf32, u(e)), d = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, [0]);
	} catch {
		e = !1;
	}
	return d = () => e, e;
}, f = function() {
	let e = !0;
	try {
		String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
	} catch {
		e = !1;
	}
	return f = () => e, e;
}, p = function(e) {
	for (var t = c(256), n = 0; n < 256; n++) t[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
	return t[254] = t[254] = 1, p = (e) => t[e], t[e];
};
function m(e) {
	var t, n, r, i, a, o = e.length, s = 0;
	for (i = 0; i < o; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
	for (t = new Uint8Array(s), a = 0, i = 0; a < s; i++) n = e.charCodeAt(i), (n & 64512) == 55296 && i + 1 < o && (r = e.charCodeAt(i + 1), (r & 64512) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), i++)), n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6, t[a++] = 128 | n & 63) : n < 65536 ? (t[a++] = 224 | n >>> 12, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63) : (t[a++] = 240 | n >>> 18, t[a++] = 128 | n >>> 12 & 63, t[a++] = 128 | n >>> 6 & 63, t[a++] = 128 | n & 63);
	return t;
}
function h(e, t) {
	if (t < 65534 && (e.subarray && f() || !e.subarray && d())) return String.fromCharCode.apply(null, n(e, t));
	for (var r = "", i = 0; i < t; i++) r += String.fromCharCode(e[i]);
	return r;
}
function g(e) {
	for (var t = new Uint8Array(e.length), n = 0, r = t.length; n < r; n++) t[n] = e.charCodeAt(n);
	return t;
}
function _(e, t) {
	var n, r, i, a, o = t || e.length, s = Array(o * 2);
	for (r = 0, n = 0; n < o;) if (i = e[n++], i < 128) s[r++] = i;
	else if (a = p(i), a > 4) s[r++] = 65533, n += a - 1;
	else {
		for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && n < o;) i = i << 6 | e[n++] & 63, a--;
		a > 1 ? s[r++] = 65533 : i < 65536 ? s[r++] = i : (i -= 65536, s[r++] = 55296 | i >> 10 & 1023, s[r++] = 56320 | i & 1023);
	}
	return h(s, r);
}
function v(e, t) {
	var n;
	for (t ||= e.length, t > e.length && (t = e.length), n = t - 1; n >= 0 && (e[n] & 192) == 128;) n--;
	return n < 0 || n === 0 ? t : n + p(e[n]) > t ? n : t;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/gzheader.js
function y() {
	this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/adler32.js
function b(e, t, n, r) {
	for (var i = e & 65535, a = e >>> 16 & 65535, o = 0; n !== 0;) {
		o = n > 2e3 ? 2e3 : n, n -= o;
		do
			i = i + t[r++] | 0, a = a + i | 0;
		while (--o);
		i %= 65521, a %= 65521;
	}
	return i | a << 16;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/crc32.js
function x() {
	for (var e, t = [], n = 0; n < 256; n++) {
		e = n;
		for (var r = 0; r < 8; r++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
}
var S = function() {
	let e = x();
	return S = () => e, e;
};
function C(e, t, n, r) {
	var i = S(), a = r + n;
	e ^= -1;
	for (var o = r; o < a; o++) e = e >>> 8 ^ i[(e ^ t[o]) & 255];
	return e ^ -1;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inffast.js
var w = 30, T = 12;
function E(e, t) {
	var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, E, D = e.input, O;
	i = r + (e.avail_in - 5), a = e.next_out, O = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
	top: do {
		m < 15 && (p += D[r++] << m, m += 8, p += D[r++] << m, m += 8), y = h[p & _];
		dolen: for (;;) {
			if (b = y >>> 24, p >>>= b, m -= b, b = y >>> 16 & 255, b === 0) O[a++] = y & 65535;
			else if (b & 16) {
				x = y & 65535, b &= 15, b && (m < b && (p += D[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += D[r++] << m, m += 8, p += D[r++] << m, m += 8), y = g[p & v];
				dodist: for (;;) {
					if (b = y >>> 24, p >>>= b, m -= b, b = y >>> 16 & 255, b & 16) {
						if (S = y & 65535, b &= 15, m < b && (p += D[r++] << m, m += 8, m < b && (p += D[r++] << m, m += 8)), S += p & (1 << b) - 1, S > c) {
							e.msg = "invalid distance too far back", n.mode = w;
							break top;
						}
						if (p >>>= b, m -= b, b = a - o, S > b) {
							if (b = S - b, b > u && n.sane) {
								e.msg = "invalid distance too far back", n.mode = w;
								break top;
							}
							if (C = 0, E = f, d === 0) {
								if (C += l - b, b < x) {
									x -= b;
									do
										O[a++] = f[C++];
									while (--b);
									C = a - S, E = O;
								}
							} else if (d < b) {
								if (C += l + d - b, b -= d, b < x) {
									x -= b;
									do
										O[a++] = f[C++];
									while (--b);
									if (C = 0, d < x) {
										b = d, x -= b;
										do
											O[a++] = f[C++];
										while (--b);
										C = a - S, E = O;
									}
								}
							} else if (C += d - b, b < x) {
								x -= b;
								do
									O[a++] = f[C++];
								while (--b);
								C = a - S, E = O;
							}
							for (; x > 2;) O[a++] = E[C++], O[a++] = E[C++], O[a++] = E[C++], x -= 3;
							x && (O[a++] = E[C++], x > 1 && (O[a++] = E[C++]));
						} else {
							C = a - S;
							do
								O[a++] = O[C++], O[a++] = O[C++], O[a++] = O[C++], x -= 3;
							while (x > 2);
							x && (O[a++] = O[C++], x > 1 && (O[a++] = O[C++]));
						}
					} else if (b & 64) {
						e.msg = "invalid distance code", n.mode = w;
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
				n.mode = T;
				break top;
			} else {
				e.msg = "invalid literal/length code", n.mode = w;
				break top;
			}
			break;
		}
	} while (r < i && a < s);
	x = m >> 3, r -= x, m -= x << 3, p &= (1 << m) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i), e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s), n.hold = p, n.bits = m;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inftrees.js
var D = 15, O = 852, k = 592, A = 0, j = 1, M = 2, N = [
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
], ee = [
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
], te = [
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
], ne = [
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
function P(e, t, n, r, i, a, o, s) {
	var c = s.bits, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b, x, S, C, w, T = null, E = 0, P, F = l(D + 1), I = l(D + 1), L = null, R = 0, z, B, V;
	for (u = 0; u <= D; u++) F[u] = 0;
	for (d = 0; d < r; d++) F[t[n + d]]++;
	for (m = c, p = D; p >= 1 && F[p] === 0; p--);
	if (m > p && (m = p), p === 0) return i[a++] = 20971520, i[a++] = 20971520, s.bits = 1, 0;
	for (f = 1; f < p && F[f] === 0; f++);
	for (m < f && (m = f), _ = 1, u = 1; u <= D; u++) if (_ <<= 1, _ -= F[u], _ < 0) return -1;
	if (_ > 0 && (e === A || p !== 1)) return -1;
	for (I[1] = 0, u = 1; u < D; u++) I[u + 1] = I[u] + F[u];
	for (d = 0; d < r; d++) t[n + d] !== 0 && (o[I[t[n + d]]++] = d);
	if (e === A ? (T = L = o, P = 19) : e === j ? (T = N, E -= 257, L = ee, R -= 257, P = 256) : (T = te, L = ne, P = -1), y = 0, d = 0, u = f, w = a, h = m, g = 0, S = -1, v = 1 << m, C = v - 1, e === j && v > O || e === M && v > k) return 1;
	for (;;) {
		z = u - g, o[d] < P ? (B = 0, V = o[d]) : o[d] > P ? (B = L[R + o[d]], V = T[E + o[d]]) : (B = 96, V = 0), b = 1 << u - g, x = 1 << h, f = x;
		do
			x -= b, i[w + (y >> g) + x] = z << 24 | B << 16 | V;
		while (x !== 0);
		for (b = 1 << u - 1; y & b;) b >>= 1;
		if (b === 0 ? y = 0 : (y &= b - 1, y += b), d++, --F[u] === 0) {
			if (u === p) break;
			u = t[n + o[d]];
		}
		if (u > m && (y & C) !== S) {
			for (g === 0 && (g = m), w += f, h = u - g, _ = 1 << h; h + g < p && (_ -= F[h + g], !(_ <= 0));) h++, _ <<= 1;
			if (v += 1 << h, e === j && v > O || e === M && v > k) return 1;
			S = y & C, i[S] = m << 24 | h << 16 | w - a;
		}
	}
	return y !== 0 && (i[w + y] = u - g << 24 | 4194304), s.bits = m, 0;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/inflate.js
var F = 0, I = 1, L = 2, R = 4, z = 5, B = 6, V = 0, re = 1, ie = 2, H = -2, ae = -3, U = -4, oe = -5, se = 8, ce = 1, le = 2, ue = 3, de = 4, fe = 5, pe = 6, me = 7, he = 8, ge = 9, _e = 10, W = 11, G = 12, K = 13, ve = 14, q = 15, ye = 16, be = 17, xe = 18, Se = 19, J = 20, Y = 21, Ce = 22, we = 23, Te = 24, Ee = 25, De = 26, X = 27, Oe = 28, ke = 29, Z = 30, Q = 31, Ae = 32, je = 852, Me = 592;
function Ne(e) {
	return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
}
function Pe() {
	this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = l(320), this.work = l(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
function Fe(e) {
	var t;
	return !e || !e.state ? H : (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = ce, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = u(je), t.distcode = t.distdyn = u(Me), t.sane = 1, t.back = -1, V);
}
function Ie(e) {
	var t;
	return !e || !e.state ? H : (t = e.state, t.wsize = 0, t.whave = 0, t.wnext = 0, Fe(e));
}
function Le(e, t) {
	var n, r;
	return !e || !e.state || (r = e.state, t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? H : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, Ie(e));
}
function Re(e, t) {
	var n, r;
	return e ? (r = new Pe(), e.state = r, r.window = null, n = Le(e, t), n !== V && (e.state = null), n) : H;
}
var ze = !0, $, Be;
function Ve(e) {
	if (ze) {
		var t;
		for ($ = u(512), Be = u(32), t = 0; t < 144;) e.lens[t++] = 8;
		for (; t < 256;) e.lens[t++] = 9;
		for (; t < 280;) e.lens[t++] = 7;
		for (; t < 288;) e.lens[t++] = 8;
		for (P(I, e.lens, 0, 288, $, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
		P(L, e.lens, 0, 32, Be, 0, e.work, { bits: 5 }), ze = !1;
	}
	e.lencode = $, e.lenbits = 9, e.distcode = Be, e.distbits = 5;
}
function He(e, t, n, r) {
	var i, a = e.state;
	return a.window === null && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = c(a.wsize)), r >= a.wsize ? (o(a.window, t, n - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : (i = a.wsize - a.wnext, i > r && (i = r), o(a.window, t, n - r, i, a.wnext), r -= i, r ? (o(a.window, t, n - r, r, 0), a.wnext = r, a.whave = a.wsize) : (a.wnext += i, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += i))), 0;
}
function Ue(e, t) {
	var n, r, i, a, s, l, u, d, f, p, m, h, g, _, v = 0, y, x, S, w, T, D, O, k, A = c(4), j, M, N = [
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
	if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return H;
	n = e.state, n.mode === G && (n.mode = K), s = e.next_out, i = e.output, u = e.avail_out, a = e.next_in, r = e.input, l = e.avail_in, d = n.hold, f = n.bits, p = l, m = u, k = V;
	inf_leave: for (;;) switch (n.mode) {
		case ce:
			if (n.wrap === 0) {
				n.mode = K;
				break;
			}
			for (; f < 16;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if (n.wrap & 2 && d === 35615) {
				n.check = 0, A[0] = d & 255, A[1] = d >>> 8 & 255, n.check = C(n.check, A, 2, 0), d = 0, f = 0, n.mode = le;
				break;
			}
			if (n.flags = 0, n.head && (n.head.done = !1), !(n.wrap & 1) || (((d & 255) << 8) + (d >> 8)) % 31) {
				e.msg = "incorrect header check", n.mode = Z;
				break;
			}
			if ((d & 15) !== se) {
				e.msg = "unknown compression method", n.mode = Z;
				break;
			}
			if (d >>>= 4, f -= 4, O = (d & 15) + 8, n.wbits === 0) n.wbits = O;
			else if (O > n.wbits) {
				e.msg = "invalid window size", n.mode = Z;
				break;
			}
			n.dmax = 1 << O, e.adler = n.check = 1, n.mode = d & 512 ? _e : G, d = 0, f = 0;
			break;
		case le:
			for (; f < 16;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if (n.flags = d, (n.flags & 255) !== se) {
				e.msg = "unknown compression method", n.mode = Z;
				break;
			}
			if (n.flags & 57344) {
				e.msg = "unknown header flags set", n.mode = Z;
				break;
			}
			n.head && (n.head.text = d >> 8 & 1), n.flags & 512 && (A[0] = d & 255, A[1] = d >>> 8 & 255, n.check = C(n.check, A, 2, 0)), d = 0, f = 0, n.mode = ue;
		case ue:
			for (; f < 32;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			n.head && (n.head.time = d), n.flags & 512 && (A[0] = d & 255, A[1] = d >>> 8 & 255, A[2] = d >>> 16 & 255, A[3] = d >>> 24 & 255, n.check = C(n.check, A, 4, 0)), d = 0, f = 0, n.mode = de;
		case de:
			for (; f < 16;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			n.head && (n.head.xflags = d & 255, n.head.os = d >> 8), n.flags & 512 && (A[0] = d & 255, A[1] = d >>> 8 & 255, n.check = C(n.check, A, 2, 0)), d = 0, f = 0, n.mode = fe;
		case fe:
			if (n.flags & 1024) {
				for (; f < 16;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				n.length = d, n.head && (n.head.extra_len = d), n.flags & 512 && (A[0] = d & 255, A[1] = d >>> 8 & 255, n.check = C(n.check, A, 2, 0)), d = 0, f = 0;
			} else n.head && (n.head.extra = null);
			n.mode = pe;
		case pe:
			if (n.flags & 1024 && (h = n.length, h > l && (h = l), h && (n.head && (O = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), o(n.head.extra, r, a, h, O)), n.flags & 512 && (n.check = C(n.check, r, h, a)), l -= h, a += h, n.length -= h), n.length)) break inf_leave;
			n.length = 0, n.mode = me;
		case me:
			if (n.flags & 2048) {
				if (l === 0) break inf_leave;
				h = 0;
				do
					O = r[a + h++], n.head && O && n.length < 65536 && (n.head.name += String.fromCharCode(O));
				while (O && h < l);
				if (n.flags & 512 && (n.check = C(n.check, r, h, a)), l -= h, a += h, O) break inf_leave;
			} else n.head && (n.head.name = null);
			n.length = 0, n.mode = he;
		case he:
			if (n.flags & 4096) {
				if (l === 0) break inf_leave;
				h = 0;
				do
					O = r[a + h++], n.head && O && n.length < 65536 && (n.head.comment += String.fromCharCode(O));
				while (O && h < l);
				if (n.flags & 512 && (n.check = C(n.check, r, h, a)), l -= h, a += h, O) break inf_leave;
			} else n.head && (n.head.comment = null);
			n.mode = ge;
		case ge:
			if (n.flags & 512) {
				for (; f < 16;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				if (d !== (n.check & 65535)) {
					e.msg = "header crc mismatch", n.mode = Z;
					break;
				}
				d = 0, f = 0;
			}
			n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = G;
			break;
		case _e:
			for (; f < 32;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			e.adler = n.check = Ne(d), d = 0, f = 0, n.mode = W;
		case W:
			if (n.havedict === 0) return e.next_out = s, e.avail_out = u, e.next_in = a, e.avail_in = l, n.hold = d, n.bits = f, ie;
			e.adler = n.check = 1, n.mode = G;
		case G: if (t === z || t === B) break inf_leave;
		case K:
			if (n.last) {
				d >>>= f & 7, f -= f & 7, n.mode = X;
				break;
			}
			for (; f < 3;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			switch (n.last = d & 1, d >>>= 1, --f, d & 3) {
				case 0:
					n.mode = ve;
					break;
				case 1:
					if (Ve(n), n.mode = J, t === B) {
						d >>>= 2, f -= 2;
						break inf_leave;
					}
					break;
				case 2:
					n.mode = be;
					break;
				case 3: e.msg = "invalid block type", n.mode = Z;
			}
			d >>>= 2, f -= 2;
			break;
		case ve:
			for (d >>>= f & 7, f -= f & 7; f < 32;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if ((d & 65535) != (d >>> 16 ^ 65535)) {
				e.msg = "invalid stored block lengths", n.mode = Z;
				break;
			}
			if (n.length = d & 65535, d = 0, f = 0, n.mode = q, t === B) break inf_leave;
		case q: n.mode = ye;
		case ye:
			if (h = n.length, h) {
				if (h > l && (h = l), h > u && (h = u), h === 0) break inf_leave;
				o(i, r, a, h, s), l -= h, a += h, u -= h, s += h, n.length -= h;
				break;
			}
			n.mode = G;
			break;
		case be:
			for (; f < 14;) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if (n.nlen = (d & 31) + 257, d >>>= 5, f -= 5, n.ndist = (d & 31) + 1, d >>>= 5, f -= 5, n.ncode = (d & 15) + 4, d >>>= 4, f -= 4, n.nlen > 286 || n.ndist > 30) {
				e.msg = "too many length or distance symbols", n.mode = Z;
				break;
			}
			n.have = 0, n.mode = xe;
		case xe:
			for (; n.have < n.ncode;) {
				for (; f < 3;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				n.lens[N[n.have++]] = d & 7, d >>>= 3, f -= 3;
			}
			for (; n.have < 19;) n.lens[N[n.have++]] = 0;
			if (n.lencode = n.lendyn, n.lenbits = 7, j = { bits: n.lenbits }, k = P(F, n.lens, 0, 19, n.lencode, 0, n.work, j), n.lenbits = j.bits, k) {
				e.msg = "invalid code lengths set", n.mode = Z;
				break;
			}
			n.have = 0, n.mode = Se;
		case Se:
			for (; n.have < n.nlen + n.ndist;) {
				for (; v = n.lencode[d & (1 << n.lenbits) - 1], y = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(y <= f);) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				if (S < 16) d >>>= y, f -= y, n.lens[n.have++] = S;
				else {
					if (S === 16) {
						for (M = y + 2; f < M;) {
							if (l === 0) break inf_leave;
							l--, d += r[a++] << f, f += 8;
						}
						if (d >>>= y, f -= y, n.have === 0) {
							e.msg = "invalid bit length repeat", n.mode = Z;
							break;
						}
						O = n.lens[n.have - 1], h = 3 + (d & 3), d >>>= 2, f -= 2;
					} else if (S === 17) {
						for (M = y + 3; f < M;) {
							if (l === 0) break inf_leave;
							l--, d += r[a++] << f, f += 8;
						}
						d >>>= y, f -= y, O = 0, h = 3 + (d & 7), d >>>= 3, f -= 3;
					} else {
						for (M = y + 7; f < M;) {
							if (l === 0) break inf_leave;
							l--, d += r[a++] << f, f += 8;
						}
						d >>>= y, f -= y, O = 0, h = 11 + (d & 127), d >>>= 7, f -= 7;
					}
					if (n.have + h > n.nlen + n.ndist) {
						e.msg = "invalid bit length repeat", n.mode = Z;
						break;
					}
					for (; h--;) n.lens[n.have++] = O;
				}
			}
			if (n.mode === Z) break;
			if (n.lens[256] === 0) {
				e.msg = "invalid code -- missing end-of-block", n.mode = Z;
				break;
			}
			if (n.lenbits = 9, j = { bits: n.lenbits }, k = P(I, n.lens, 0, n.nlen, n.lencode, 0, n.work, j), n.lenbits = j.bits, k) {
				e.msg = "invalid literal/lengths set", n.mode = Z;
				break;
			}
			if (n.distbits = 6, n.distcode = n.distdyn, j = { bits: n.distbits }, k = P(L, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, j), n.distbits = j.bits, k) {
				e.msg = "invalid distances set", n.mode = Z;
				break;
			}
			if (n.mode = J, t === B) break inf_leave;
		case J: n.mode = Y;
		case Y:
			if (l >= 6 && u >= 258) {
				e.next_out = s, e.avail_out = u, e.next_in = a, e.avail_in = l, n.hold = d, n.bits = f, E(e, m), s = e.next_out, i = e.output, u = e.avail_out, a = e.next_in, r = e.input, l = e.avail_in, d = n.hold, f = n.bits, n.mode === G && (n.back = -1);
				break;
			}
			for (n.back = 0; v = n.lencode[d & (1 << n.lenbits) - 1], y = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(y <= f);) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if (x && !(x & 240)) {
				for (w = y, T = x, D = S; v = n.lencode[D + ((d & (1 << w + T) - 1) >> w)], y = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(w + y <= f);) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				d >>>= w, f -= w, n.back += w;
			}
			if (d >>>= y, f -= y, n.back += y, n.length = S, x === 0) {
				n.mode = De;
				break;
			}
			if (x & 32) {
				n.back = -1, n.mode = G;
				break;
			}
			if (x & 64) {
				e.msg = "invalid literal/length code", n.mode = Z;
				break;
			}
			n.extra = x & 15, n.mode = Ce;
		case Ce:
			if (n.extra) {
				for (M = n.extra; f < M;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				n.length += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
			}
			n.was = n.length, n.mode = we;
		case we:
			for (; v = n.distcode[d & (1 << n.distbits) - 1], y = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(y <= f);) {
				if (l === 0) break inf_leave;
				l--, d += r[a++] << f, f += 8;
			}
			if (!(x & 240)) {
				for (w = y, T = x, D = S; v = n.distcode[D + ((d & (1 << w + T) - 1) >> w)], y = v >>> 24, x = v >>> 16 & 255, S = v & 65535, !(w + y <= f);) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				d >>>= w, f -= w, n.back += w;
			}
			if (d >>>= y, f -= y, n.back += y, x & 64) {
				e.msg = "invalid distance code", n.mode = Z;
				break;
			}
			n.offset = S, n.extra = x & 15, n.mode = Te;
		case Te:
			if (n.extra) {
				for (M = n.extra; f < M;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				n.offset += d & (1 << n.extra) - 1, d >>>= n.extra, f -= n.extra, n.back += n.extra;
			}
			if (n.offset > n.dmax) {
				e.msg = "invalid distance too far back", n.mode = Z;
				break;
			}
			n.mode = Ee;
		case Ee:
			if (u === 0) break inf_leave;
			if (h = m - u, n.offset > h) {
				if (h = n.offset - h, h > n.whave && n.sane) {
					e.msg = "invalid distance too far back", n.mode = Z;
					break;
				}
				h > n.wnext ? (h -= n.wnext, g = n.wsize - h) : g = n.wnext - h, h > n.length && (h = n.length), _ = n.window;
			} else _ = i, g = s - n.offset, h = n.length;
			h > u && (h = u), u -= h, n.length -= h;
			do
				i[s++] = _[g++];
			while (--h);
			n.length === 0 && (n.mode = Y);
			break;
		case De:
			if (u === 0) break inf_leave;
			i[s++] = n.length, u--, n.mode = Y;
			break;
		case X:
			if (n.wrap) {
				for (; f < 32;) {
					if (l === 0) break inf_leave;
					l--, d |= r[a++] << f, f += 8;
				}
				if (m -= u, e.total_out += m, n.total += m, m && (e.adler = n.check = n.flags ? C(n.check, i, m, s - m) : b(n.check, i, m, s - m)), m = u, (n.flags ? d : Ne(d)) !== n.check) {
					e.msg = "incorrect data check", n.mode = Z;
					break;
				}
				d = 0, f = 0;
			}
			n.mode = Oe;
		case Oe:
			if (n.wrap && n.flags) {
				for (; f < 32;) {
					if (l === 0) break inf_leave;
					l--, d += r[a++] << f, f += 8;
				}
				if (d !== (n.total | 0)) {
					e.msg = "incorrect length check", n.mode = Z;
					break;
				}
				d = 0, f = 0;
			}
			n.mode = ke;
		case ke:
			k = re;
			break inf_leave;
		case Z:
			k = ae;
			break inf_leave;
		case Q: return U;
		case Ae:
		default: return H;
	}
	return e.next_out = s, e.avail_out = u, e.next_in = a, e.avail_in = l, n.hold = d, n.bits = f, (n.wsize || m !== e.avail_out && n.mode < Z && (n.mode < X || t !== R)) && He(e, e.output, e.next_out, m - e.avail_out) ? (n.mode = Q, U) : (p -= e.avail_in, m -= e.avail_out, e.total_in += p, e.total_out += m, n.total += m, n.wrap && m && (e.adler = n.check = n.flags ? C(n.check, i, m, e.next_out - m) : b(n.check, i, m, e.next_out - m)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === G ? 128 : 0) + (n.mode === J || n.mode === q ? 256 : 0), (p === 0 && m === 0 || t === R) && k === V && (k = oe), k);
}
function We(e) {
	if (!e || !e.state) return H;
	var t = e.state;
	return t.window &&= null, e.state = null, V;
}
function Ge(e, t) {
	var n;
	return !e || !e.state || (n = e.state, !(n.wrap & 2)) ? H : (n.head = t, t.done = !1, V);
}
function Ke(e, t) {
	var n = t.length, r, i, a;
	return !e || !e.state || (r = e.state, r.wrap !== 0 && r.mode !== W) ? H : r.mode === W && (i = 1, i = b(i, t, n, 0), i !== r.check) ? ae : (a = He(e, t, n, n), a ? (r.mode = Q, U) : (r.havedict = 1, V));
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/zlib/messages.js
var qe = {
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
function Je() {
	this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
//#endregion
//#region ../../node_modules/pako-esm2/esm/inflate.js
var Ye = Object.prototype.toString, Xe = class e {
	constructor(n) {
		if (!(this instanceof e)) return new e(n);
		this.options = t({
			chunkSize: 16384,
			windowBits: 0,
			to: ""
		}, n || {});
		var r = this.options;
		r.raw && r.windowBits >= 0 && r.windowBits < 16 && (r.windowBits = -r.windowBits, r.windowBits === 0 && (r.windowBits = -15)), r.windowBits >= 0 && r.windowBits < 16 && !(n && n.windowBits) && (r.windowBits += 32), r.windowBits > 15 && r.windowBits < 48 && (r.windowBits & 15 || (r.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Je(), this.strm.avail_out = 0;
		var i = Re(this.strm, r.windowBits);
		if (i !== 0 || (this.header = new y(), Ge(this.strm, this.header), r.dictionary && (typeof r.dictionary == "string" ? r.dictionary = m(r.dictionary) : Ye.call(r.dictionary) === "[object ArrayBuffer]" && (r.dictionary = new Uint8Array(r.dictionary)), r.raw && (i = Ke(this.strm, r.dictionary), i !== 0)))) throw Error(qe[i]);
	}
	push(e, t) {
		var r = this.strm, i = this.options.chunkSize, a = this.options.dictionary, s, l, u, d, f, p, h = !1;
		if (this.ended) return !1;
		l = t === ~~t ? t : t === !0 ? 4 : 0, r.input = typeof e == "string" ? g(e) : Ye.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, r.next_in = 0, r.avail_in = r.input.length;
		do {
			if (r.avail_out === 0 && (r.output = c(i), r.next_out = 0, r.avail_out = i), s = Ue(r, 0), s === 2 && a && (p = typeof a == "string" ? m(a) : Ye.call(a) === "[object ArrayBuffer]" ? new Uint8Array(a) : a, s = Ke(this.strm, p)), s === -5 && h === !0 && (s = 0, h = !1), s !== 1 && s !== 0) return this.onEnd(s), this.ended = !0, !1;
			r.next_out && (r.avail_out === 0 || s === 1 || r.avail_in === 0 && (l === 4 || l === 2)) && (this.options.to === "string" ? (u = v(r.output, r.next_out), d = r.next_out - u, f = _(r.output, u), r.next_out = d, r.avail_out = i - d, d && o(r.output, r.output, u, d, 0), this.onData(f)) : this.onData(n(r.output, r.next_out))), r.avail_in === 0 && r.avail_out === 0 && (h = !0);
		} while ((r.avail_in > 0 || r.avail_out === 0) && s !== 1);
		return s === 1 && (l = 4), l === 4 ? (s = We(this.strm), this.onEnd(s), this.ended = !0, s === 0) : (l === 2 && (this.onEnd(0), r.avail_out = 0), !0);
	}
	onData(e) {
		this.chunks.push(e);
	}
	onEnd(e) {
		e === 0 && (this.result = this.options.to === "string" ? this.chunks.join("") : s(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
	}
};
function Ze(e, t) {
	var n = new Xe(t);
	if (n.push(e, !0), n.err) throw n.msg || qe[n.err];
	return n.result;
}
var Qe = Ze;
//#endregion
export { Qe as n, Xe as t };
