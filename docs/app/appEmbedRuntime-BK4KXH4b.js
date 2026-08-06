import { n as e, t } from "./rolldown-runtime-DF993M8W.js";
import { $ as n, A as r, C as i, D as a, E as o, H as s, I as c, J as l, K as u, L as d, M as f, N as p, O as m, P as h, Q as g, R as _, S as v, St as y, T as b, U as x, X as S, Y as C, Z as w, _ as T, _t as E, a as D, b as O, c as k, d as A, et as j, f as M, ft as N, g as ee, gt as P, h as F, ht as I, i as te, j as ne, k as re, l as ie, lt as ae, m as oe, mt as se, n as ce, nt as le, o as ue, p as de, pt as fe, q as pe, r as me, s as he, st as ge, tt as _e, u as ve, ut as ye, v as be, vt as xe, w as Se, x as Ce, xt as L, y as we, yt as R, z as Te } from "./src-BiBK3iof.js";
import { $t as Ee, A as De, Br as Oe, Dt as ke, F as Ae, Gr as je, Gt as Me, I as Ne, J as Pe, Jt as Fe, Ln as Ie, Lr as Le, Lt as Re, N as ze, Ot as Be, Pt as Ve, Qt as He, Rt as Ue, S as We, St as Ge, Tn as Ke, U as qe, Ut as Je, V as Ye, Vn as Xe, Wt as Ze, Xt as Qe, Yt as $e, Zr as et, Zt as tt, _ as nt, a as rt, bt as it, c as at, cn as ot, d as st, f as ct, g as lt, gr as ut, k as dt, l as ft, mr as pt, n as mt, nn as ht, nt as gt, o as _t, qr as vt, qt as yt, r as bt, s as xt, sn as St, tn as Ct, tt as wt, v as Tt, xt as Et, y as Dt, yn as Ot } from "./viewIdentityRegistry-EH5-Noyz.js";
import { a as kt, c as At, i as jt, l as Mt, n as Nt, o as Pt, r as Ft, s as It, t as Lt, u as Rt } from "./ref-CTBfqPSy.js";
import { $ as zt, A as Bt, B as Vt, C as Ht, D as Ut, E as Wt, F as Gt, G as Kt, H as qt, I as Jt, J as Yt, K as Xt, L as Zt, M as Qt, N as $t, O as en, P as tn, Q as nn, R as rn, S as an, T as on, U as sn, V as cn, W as ln, X as un, Y as dn, Z as fn, _ as pn, _t as mn, a as hn, at as gn, b as _n, bt as vn, c as yn, ct as bn, d as xn, dt as Sn, et as Cn, f as wn, ft as Tn, g as En, gt as Dn, h as On, ht as kn, i as An, it as jn, j as Mn, k as Nn, l as Pn, lt as Fn, m as In, mt as Ln, n as Rn, nt as zn, o as Bn, ot as Vn, p as Hn, pt as Un, q as Wn, r as Gn, rt as Kn, s as qn, st as Jn, tt as Yn, u as Xn, ut as Zn, v as Qn, vt as $n, w as er, x as tr, xt as nr, y as rr, yt as ir, z as ar } from "./agentApi-D36QXXDg.js";
//#region ../../node_modules/d3-array/src/array.js
var or = Array.prototype, sr = or.slice;
or.map;
//#endregion
//#region ../../node_modules/d3-array/src/constant.js
function cr(e) {
	return () => e;
}
//#endregion
//#region ../../node_modules/d3-array/src/nice.js
function lr(e, t, n) {
	let r;
	for (;;) {
		let i = je(e, t, n);
		if (i === r || i === 0 || !isFinite(i)) return [e, t];
		i > 0 ? (e = Math.floor(e / i) * i, t = Math.ceil(t / i) * i) : i < 0 && (e = Math.ceil(e * i) / i, t = Math.floor(t * i) / i), r = i;
	}
}
//#endregion
//#region ../../node_modules/d3-array/src/threshold/sturges.js
function ur(e) {
	return Math.max(1, Math.ceil(Math.log(se(e)) / Math.LN2) + 1);
}
//#endregion
//#region ../../node_modules/d3-array/src/bin.js
function dr() {
	var e = N, t = fe, n = ur;
	function r(r) {
		Array.isArray(r) || (r = Array.from(r));
		var i, a = r.length, o, s, c = Array(a);
		for (i = 0; i < a; ++i) c[i] = e(r[i], i, r);
		var l = t(c), u = l[0], d = l[1], f = n(c, u, d);
		if (!Array.isArray(f)) {
			let e = d, n = +f;
			if (t === fe && ([u, d] = lr(u, d, n)), f = vt(u, d, n), f[0] <= u && (s = je(u, d, n)), f[f.length - 1] >= d) if (e >= d && t === fe) {
				let e = je(u, d, n);
				isFinite(e) && (e > 0 ? d = (Math.floor(d / e) + 1) * e : e < 0 && (d = (Math.ceil(d * -e) + 1) / -e));
			} else f.pop();
		}
		for (var p = f.length, m = 0, h = p; f[m] <= u;) ++m;
		for (; f[h - 1] > d;) --h;
		(m || h < p) && (f = f.slice(m, h), p = h - m);
		var g = Array(p + 1), _;
		for (i = 0; i <= p; ++i) _ = g[i] = [], _.x0 = i > 0 ? f[i - 1] : u, _.x1 = i < p ? f[i] : d;
		if (isFinite(s)) {
			if (s > 0) for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[Math.min(p, Math.floor((o - u) / s))].push(r[i]);
			else if (s < 0) {
				for (i = 0; i < a; ++i) if ((o = c[i]) != null && u <= o && o <= d) {
					let e = Math.floor((u - o) * s);
					g[Math.min(p, e + (f[e] <= o))].push(r[i]);
				}
			}
		} else for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[et(f, o, 0, p)].push(r[i]);
		return g;
	}
	return r.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : cr(t), r) : e;
	}, r.domain = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : cr([e[0], e[1]]), r) : t;
	}, r.thresholds = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : cr(Array.isArray(e) ? sr.call(e) : e), r) : n;
	}, r;
}
//#endregion
//#region ../../node_modules/d3-ease/src/quad.js
function fr(e) {
	return ((e *= 2) <= 1 ? e * e : --e * (2 - e) + 1) / 2;
}
//#endregion
//#region ../../node_modules/d3-ease/src/math.js
function pr(e) {
	return (2 ** (-10 * e) - .0009765625) * 1.0009775171065494;
}
//#endregion
//#region ../../node_modules/d3-ease/src/exp.js
function mr(e) {
	return 1 - pr(e);
}
//#endregion
//#region ../core/src/img/bowtie.svg
var hr = "data:image/svg+xml,%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%20fill-rule='evenodd'%20clip-rule='evenodd'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='1.5'%3e%3cpath%20d='M4.7%2021.2s.4%202.3%201.3%203.6C7%2026%209.8%2028%209.8%2028s3.4-2.6%206.4-8.5c0%200%201%20.1%201.9-.4.9-.6.8-.4%201-1.2%200%200%202.9.5%206.6%200%202.1-.3%204.3-1%206.2-2.5%200%200-1.1-1.7-2.5-5.1-.5-1.3-2-1.8-4.6-4.6l-8.2%208.6-11.9%206.9z'%20fill-opacity='.1'/%3e%3cpath%20d='M12.7%2014.8s-4-1.8-12%202.7c0%200%201%203.7%202.5%205.3%201.4%201.5%202.3%203.6%204.6%204.6%200%200%204.7-3%206.9-9.2l3-2s4.7%202.8%2012.6-1.6c0%200-.6-3.3-3-6-2.6-3-3.8-4.7-3.8-4.7s-4.1%202.3-7.5%209.3l-3.3%201.6z'%20fill='%237fbbdd'/%3e%3cpath%20d='M12.4%2015.5c-.7-.5-2.4-.8-4.4-.4-2%20.4-4%201.3-4.8%201.8-.5.3-1.2%201-1.2%201.4%200%20.7.3%201.8.8%202.4.3.3.7.5%201.4.6.8%200%202.5-1.4%203.5-2%201-.6%201.6-.8%202.7-1.2l-2.9%202.4c-1.3%201.2-2.2%201.5-2.4%202.3%200%20.5%200%201.4.5%201.8.4.5.6.8%201.6.8.6%200%201%200%202.6-1.5.9-.9%202.3-3%202.7-3.7.6-1.1%201-2.2.7-3-.2-1-.4-1.4-.8-1.7zM17.4%2014.2c-.3-.5-.9-1.2-.2-2.5l1.9-3c.5-.8%202-2.3%202.6-2.6.6-.4%201.5-.6%202-.2.6.4%201%201%201.3%201.5.4.6.7%201.3.2%202-.7%201-1.6.9-2.8%201.7-1.2.8-1.9%201.2-2.5%201.9l3.8-1.8c1.3-.6%202.7-1.1%203.4-.7.8.5.8.7%201%201.4.3%201-.2%201.9-.8%202.4-.5.6-1.5.9-2.6%201.2-1.4.4-4.5%201-5.8.5-1.3-.5-1.3-1.4-1.5-1.8z'%20fill='%23fff'/%3e%3cpath%20d='M12.7%2014.8s-4-1.8-12%202.7c0%200%201%203.7%202.5%205.3%201.4%201.5%202.3%203.6%204.6%204.6%200%200%204.7-3%206.9-9.2l3-2s4.7%202.8%2012.6-1.6c0%200-.6-3.3-3-6-2.6-3-3.8-4.7-3.8-4.7s-4.1%202.3-7.5%209.3l-3.3%201.6z'%20fill='none'%20stroke='%23000'%20stroke-width='.5'/%3e%3cpath%20d='M12.4%2014.9s2.1-2%203-2c1.1%200%202.3%202.7%202.3%203.5%200%20.8-2.1%202.4-3.1%202.3%200%200%200-1.2-.7-2.6-.8-1.3-1.5-1.2-1.5-1.2z'%20fill='%237fbbdd'/%3e%3cpath%20d='M13.8%2015.3c.9.8.6%202%201.4%201.8%201-.2%201.4-.8%201.3-1.5%200-.7%200-.8-.4-1.6-.3-.7-1-1.1-2-.5-.7.5-1.4%201.3-1.4%201.3s.2-.3%201.1.5z'%20fill='%23fff'/%3e%3cpath%20d='M12.4%2014.9s2.1-2%203-2c1.1%200%202.3%202.7%202.3%203.5%200%20.8-2.1%202.4-3.1%202.3%200%200%200-1.2-.7-2.6-.8-1.3-1.5-1.2-1.5-1.2z'%20fill='none'%20stroke='%23000'%20stroke-width='.5'/%3e%3c/svg%3e", gr = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5'%20viewBox='0%200%2064%2064'%3e%3cpath%20d='M208.6%20548.2s11.2%2046.2%2031.2%2071c20%2024.9%2079.3%2061.6%2079.3%2061.6S385.6%20623%20438%20498.3c0%200%2018.1%201%2036-11.9%2017.7-12.7%2016.3-7.9%2021-24.8%200%200%2057%206.3%20131-9.7%2041.7-9.1%2084.3-26.3%20121.5-58.8%200%200-25.4-32.9-58-101.7-12.4-26.1-41.9-34.3-98.7-88L438.1%20391.2%20208.6%20548.2Z'%20style='fill-opacity:.11'%20transform='matrix(.10221%20.00684%20-.00671%20.10035%20-8%20-13.2)'/%3e%3cg%20transform='rotate(-35.4%2034.2%2080.8)%20scale(.10057)'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='a'%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20d='M386.9%20397.2c-15.6-13.6-51.8-22.4-96.3-16.7-44.5%205.8-93.8%2021.8-111.8%2031.6-10.6%205.7-27.3%2017.3-28.1%2027.2-1.2%2014.2%202.9%2037.8%2015%2052%206%207.2%2014.2%2012.1%2028.1%2014.1%2017.9%202.6%2059-24.8%2081.6-36.2%2024-12%2038.6-14.6%2063-22.2%200%200-47%2031.6-68.2%2047.4-30.6%2022.9-51.6%2028-57.3%2045.5-3.1%209.4-.7%2027.9%207.5%2037.6%209%2011%2012.8%2017.6%2034.2%2020.1%2012.7%201.5%2022%201.2%2059.8-28.6%2021.7-17.2%2055.9-59.2%2067-74.4%2016.2-22%2023.8-43.1%2021.3-59.6-3.7-23.6-8.4-31.3-15.8-37.8Z'%20style='fill:%23fff'%20transform='scale(.88664)%20rotate(31.2%20485%20792.2)'/%3e%3cpath%20d='M484.7%20379c-5.4-11.1-17.6-28.5-.8-53.8a739%20739%200%200%201%2044.2-60.6c13.2-16.3%2046.7-46.2%2059.6-52%2013-6%2033.3-8.7%2044.2.2%2011%209.1%2016.5%2020.6%2023%2032.7%207.4%2013.8%2012.4%2029.3%201.6%2042.8-15.4%2019.2-34.3%2017-61.6%2031.5-27.7%2014.8-42.3%2023.1-55.7%2035.9%200%200%2052.2-21.6%2082-31.2%2029.8-9.7%2059.8-20%2074.8-8.5s14.6%2015.5%2018.4%2031.2c4.7%2019.4-7.2%2038-20.1%2048.6-13%2010.7-34.3%2016-57.4%2021-30.5%206.8-96.6%2015.1-124%202.6-27.5-12.6-24.4-32.8-28.2-40.5Z'%20style='fill:%23fff'%20transform='scale(.87906)%20rotate(31.2%20487.2%20893.5)'/%3e%3c/g%3e%3cpath%20d='M561.6%20349.2s-45.3-77.9-232.8-97.2c0%200-26.5%2073.2-21.1%20116%205.3%2043-4.7%2088.1%2021.4%20133.2%200%200%20114%205.5%20225.5-72.7l74.6%203.6S673.8%20534.4%20857%20554.4c0%200%2029.7-62.6%2022.2-137-8-78.7-7.5-124-7.5-124s-96.2-9.5-236.3%2068.4l-73.8-12.6Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3cg%20transform='rotate(-4.2%20-78%20211)%20scale(.10057)'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:%237fbbdd'/%3e%3cclipPath%20id='b'%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'/%3e%3c/clipPath%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20d='M413.3%20402.7c17.5%2018.9%2010%2045.7%2028.4%2043.4%2021.7-2.7%2030.9-15.7%2031.6-32.7.7-17-1-19.5-7.1-38-6.1-18.7-18.2-23.2-43.4-18.2-20.8%204.1-17.8%203-24%2010-6.4%207-14.5%2026-14.5%2026s8.4-12.7%2029%209.5Z'%20style='fill:%23fff'%20transform='matrix(.90907%200%200%20.85852%2037%2052.2)'/%3e%3c/g%3e%3cpath%20d='M385%20385.5s45.8-37.6%2065-35.4c21.7%202.5%2040.5%2057.6%2040.2%2074.3-.3%2016.7-47.3%2045.5-67.7%2041.8%200%200%203-24-10.4-52.9-13.4-28.8-27.2-27.8-27.2-27.8Z'%20style='fill:none;stroke:%23000;stroke-width:16.57px'/%3e%3c/g%3e%3c/svg%3e", _r = g(class extends n {
	constructor(e) {
		if (super(e), e.type !== j.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e) => e !== "")));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return xe;
	}
}), vr = {
	prefix: "fas",
	iconName: "trash-can",
	icon: [
		448,
		512,
		[61460, "trash-alt"],
		"f2ed",
		"M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"
	]
}, yr = {
	prefix: "fas",
	iconName: "forward-step",
	icon: [
		320,
		512,
		["step-forward"],
		"f051",
		"M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"
	]
}, br = {
	prefix: "fas",
	iconName: "caret-right",
	icon: [
		256,
		512,
		[],
		"f0da",
		"M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
	]
}, xr = {
	prefix: "fas",
	iconName: "paste",
	icon: [
		512,
		512,
		["file-clipboard"],
		"f0ea",
		"M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zM272 128c-26.5 0-48 21.5-48 48l0 272 0 16c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-220.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L320 128l-48 0zM160 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, Sr = {
	prefix: "fas",
	iconName: "table",
	icon: [
		512,
		512,
		[],
		"f0ce",
		"M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"
	]
}, Cr = {
	prefix: "fas",
	iconName: "caret-left",
	icon: [
		256,
		512,
		[],
		"f0d9",
		"M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"
	]
}, wr = {
	prefix: "fas",
	iconName: "circle-exclamation",
	icon: [
		512,
		512,
		["exclamation-circle"],
		"f06a",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
	]
}, Tr = {
	prefix: "fas",
	iconName: "pen-to-square",
	icon: [
		512,
		512,
		["edit"],
		"f044",
		"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
	]
}, Er = {
	prefix: "fas",
	iconName: "bookmark",
	icon: [
		384,
		512,
		[128278, 61591],
		"f02e",
		"M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
	]
}, Dr = {
	prefix: "fas",
	iconName: "arrow-pointer",
	icon: [
		320,
		512,
		["mouse-pointer"],
		"f245",
		"M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
	]
}, Or = {
	prefix: "fas",
	iconName: "maximize",
	icon: [
		512,
		512,
		["expand-arrows-alt"],
		"f31e",
		"M200 32L56 32C42.7 32 32 42.7 32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L312 32c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"
	]
}, kr = {
	prefix: "fas",
	iconName: "file-arrow-up",
	icon: [
		384,
		512,
		["file-upload"],
		"f574",
		"M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 408c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1-31 31c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l72-72c9.4-9.4 24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-31-31L216 408z"
	]
}, Ar = {
	prefix: "fas",
	iconName: "file-import",
	icon: [
		512,
		512,
		["arrow-right-to-file"],
		"f56f",
		"M128 64c0-35.3 28.7-64 64-64L352 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-112 174.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39L128 288l0-224zm0 224l0 48L24 336c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0zM512 128l-128 0L384 0 512 128z"
	]
}, jr = {
	prefix: "fas",
	iconName: "arrow-down-wide-short",
	icon: [
		576,
		512,
		["sort-amount-asc", "sort-amount-down"],
		"f160",
		"M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"
	]
}, Mr = jr, z = {
	prefix: "fas",
	iconName: "filter",
	icon: [
		512,
		512,
		[],
		"f0b0",
		"M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
	]
}, Nr = {
	prefix: "fas",
	iconName: "object-group",
	icon: [
		576,
		512,
		[],
		"f247",
		"M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"
	]
}, Pr = {
	prefix: "fas",
	iconName: "circle",
	icon: [
		512,
		512,
		[
			128308,
			128309,
			128992,
			128993,
			128994,
			128995,
			128996,
			9679,
			9898,
			9899,
			11044,
			61708,
			61915
		],
		"f111",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
	]
}, Fr = {
	prefix: "fas",
	iconName: "wrench",
	icon: [
		512,
		512,
		[128295],
		"f0ad",
		"M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, Ir = {
	prefix: "fas",
	iconName: "file-image",
	icon: [
		384,
		512,
		[128443],
		"f1c5",
		"M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-88 0-40 0-48 0-48 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"
	]
}, Lr = {
	prefix: "fas",
	iconName: "circle-question",
	icon: [
		512,
		512,
		[62108, "question-circle"],
		"f059",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
	]
}, Rr = {
	prefix: "fas",
	iconName: "pen",
	icon: [
		512,
		512,
		[128394],
		"f304",
		"M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
	]
}, zr = {
	prefix: "fas",
	iconName: "arrow-rotate-right",
	icon: [
		512,
		512,
		[
			8635,
			"arrow-right-rotate",
			"arrow-rotate-forward",
			"redo"
		],
		"f01e",
		"M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"
	]
}, Br = {
	prefix: "fas",
	iconName: "trash",
	icon: [
		448,
		512,
		[],
		"f1f8",
		"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
	]
}, Vr = {
	prefix: "fas",
	iconName: "circle-info",
	icon: [
		512,
		512,
		["info-circle"],
		"f05a",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
	]
}, Hr = {
	prefix: "fas",
	iconName: "arrow-rotate-left",
	icon: [
		512,
		512,
		[
			8634,
			"arrow-left-rotate",
			"arrow-rotate-back",
			"arrow-rotate-backward",
			"undo"
		],
		"f0e2",
		"M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
	]
}, Ur = {
	prefix: "fas",
	iconName: "backward-step",
	icon: [
		320,
		512,
		["step-backward"],
		"f048",
		"M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"
	]
}, Wr = {
	prefix: "fas",
	iconName: "sliders",
	icon: [
		512,
		512,
		["sliders-h"],
		"f1de",
		"M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
	]
}, Gr = {
	prefix: "fas",
	iconName: "ellipsis-vertical",
	icon: [
		128,
		512,
		["ellipsis-v"],
		"f142",
		"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
	]
}, Kr = Gr, qr = {
	prefix: "fas",
	iconName: "download",
	icon: [
		512,
		512,
		[],
		"f019",
		"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
	]
}, Jr = {
	prefix: "fas",
	iconName: "arrow-up-wide-short",
	icon: [
		576,
		512,
		["sort-amount-up"],
		"f161",
		"M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
	]
}, Yr = {
	prefix: "fas",
	iconName: "upload",
	icon: [
		512,
		512,
		[],
		"f093",
		"M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
	]
}, Xr = {
	prefix: "fas",
	iconName: "ellipsis",
	icon: [
		448,
		512,
		["ellipsis-h"],
		"f141",
		"M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
	]
}, Zr = {
	prefix: "fas",
	iconName: "medal",
	icon: [
		512,
		512,
		[127941],
		"f5a2",
		"M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
	]
}, Qr = {
	prefix: "fas",
	iconName: "font",
	icon: [
		448,
		512,
		[],
		"f031",
		"M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"
	]
}, $r = {
	prefix: "fas",
	iconName: "chevron-down",
	icon: [
		512,
		512,
		[],
		"f078",
		"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
	]
}, ei = {
	prefix: "fas",
	iconName: "arrow-up",
	icon: [
		384,
		512,
		[8593],
		"f062",
		"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
	]
}, ti = {
	prefix: "fas",
	iconName: "plus",
	icon: [
		448,
		512,
		[
			10133,
			61543,
			"add"
		],
		"2b",
		"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
	]
}, ni = {
	prefix: "fas",
	iconName: "expand",
	icon: [
		448,
		512,
		[],
		"f065",
		"M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"
	]
}, ri = {
	prefix: "fas",
	iconName: "xmark",
	icon: [
		384,
		512,
		[
			128473,
			10005,
			10006,
			10060,
			215,
			"close",
			"multiply",
			"remove",
			"times"
		],
		"f00d",
		"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
	]
}, ii = {
	prefix: "fas",
	iconName: "hashtag",
	icon: [
		448,
		512,
		[62098],
		"23",
		"M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"
	]
}, ai = {
	prefix: "fas",
	iconName: "up-down",
	icon: [
		256,
		512,
		[
			8597,
			11021,
			"arrows-alt-v"
		],
		"f338",
		"M145.6 7.7C141 2.8 134.7 0 128 0s-13 2.8-17.6 7.7l-104 112c-6.5 7-8.2 17.2-4.4 25.9S14.5 160 24 160l56 0 0 192-56 0c-9.5 0-18.2 5.7-22 14.4s-2.1 18.9 4.4 25.9l104 112c4.5 4.9 10.9 7.7 17.6 7.7s13-2.8 17.6-7.7l104-112c6.5-7 8.2-17.2 4.4-25.9s-12.5-14.4-22-14.4l-56 0 0-192 56 0c9.5 0 18.2-5.7 22-14.4s2.1-18.9-4.4-25.9l-104-112z"
	]
}, oi = {
	prefix: "fas",
	iconName: "check",
	icon: [
		448,
		512,
		[10003, 10004],
		"f00c",
		"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
	]
}, si = {
	prefix: "fas",
	iconName: "triangle-exclamation",
	icon: [
		512,
		512,
		[
			9888,
			"exclamation-triangle",
			"warning"
		],
		"f071",
		"M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
	]
}, ci = {
	prefix: "fas",
	iconName: "database",
	icon: [
		448,
		512,
		[],
		"f1c0",
		"M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"
	]
}, li = {
	prefix: "fas",
	iconName: "share",
	icon: [
		512,
		512,
		["mail-forward"],
		"f064",
		"M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
	]
}, ui = {
	prefix: "fas",
	iconName: "circle-xmark",
	icon: [
		512,
		512,
		[
			61532,
			"times-circle",
			"xmark-circle"
		],
		"f057",
		"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
	]
}, di = {
	prefix: "fas",
	iconName: "brush",
	icon: [
		384,
		512,
		[],
		"f55d",
		"M162.4 6c-1.5-3.6-5-6-8.9-6l-19 0c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6L48 0C21.5 0 0 21.5 0 48L0 224l0 22.4L0 256l9.6 0 364.8 0 9.6 0 0-9.6 0-22.4 0-176c0-26.5-21.5-48-48-48L230.5 0c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288l0 32c0 35.3 28.7 64 64 64l64 0 0 64c0 35.3 28.7 64 64 64s64-28.7 64-64l0-64 64 0c35.3 0 64-28.7 64-64l0-32L0 288zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"
	]
};
//#endregion
//#region ../../node_modules/@fortawesome/fontawesome-svg-core/index.mjs
function fi(e, t, n) {
	return (t = hi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function pi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function B(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? pi(Object(n), !0).forEach(function(t) {
			fi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function mi(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function hi(e) {
	var t = mi(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
var gi = () => {}, _i = {}, vi = {}, yi = null, bi = {
	mark: gi,
	measure: gi
};
try {
	typeof window < "u" && (_i = window), typeof document < "u" && (vi = document), typeof MutationObserver < "u" && (yi = MutationObserver), typeof performance < "u" && (bi = performance);
} catch {}
var { userAgent: xi = "" } = _i.navigator || {}, Si = _i, V = vi, Ci = yi, wi = bi;
Si.document;
var Ti = !!V.documentElement && !!V.head && typeof V.addEventListener == "function" && typeof V.createElement == "function", Ei = ~xi.indexOf("MSIE") || ~xi.indexOf("Trident/"), Di = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Oi = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ki = {
	classic: {
		fa: "solid",
		fas: "solid",
		"fa-solid": "solid",
		far: "regular",
		"fa-regular": "regular",
		fal: "light",
		"fa-light": "light",
		fat: "thin",
		"fa-thin": "thin",
		fab: "brands",
		"fa-brands": "brands"
	},
	duotone: {
		fa: "solid",
		fad: "solid",
		"fa-solid": "solid",
		"fa-duotone": "solid",
		fadr: "regular",
		"fa-regular": "regular",
		fadl: "light",
		"fa-light": "light",
		fadt: "thin",
		"fa-thin": "thin"
	},
	sharp: {
		fa: "solid",
		fass: "solid",
		"fa-solid": "solid",
		fasr: "regular",
		"fa-regular": "regular",
		fasl: "light",
		"fa-light": "light",
		fast: "thin",
		"fa-thin": "thin"
	},
	"sharp-duotone": {
		fa: "solid",
		fasds: "solid",
		"fa-solid": "solid",
		fasdr: "regular",
		"fa-regular": "regular",
		fasdl: "light",
		"fa-light": "light",
		fasdt: "thin",
		"fa-thin": "thin"
	}
}, Ai = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, ji = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], H = "classic", Mi = "duotone", Ni = [
	H,
	Mi,
	"sharp",
	"sharp-duotone"
], Pi = {
	classic: {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	duotone: {
		900: "fad",
		400: "fadr",
		300: "fadl",
		100: "fadt"
	},
	sharp: {
		900: "fass",
		400: "fasr",
		300: "fasl",
		100: "fast"
	},
	"sharp-duotone": {
		900: "fasds",
		400: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
}, Fi = {
	"Font Awesome 6 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 6 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal",
		100: "fat"
	},
	"Font Awesome 6 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 6 Duotone": {
		900: "fad",
		400: "fadr",
		normal: "fadr",
		300: "fadl",
		100: "fadt"
	},
	"Font Awesome 6 Sharp": {
		900: "fass",
		400: "fasr",
		normal: "fasr",
		300: "fasl",
		100: "fast"
	},
	"Font Awesome 6 Sharp Duotone": {
		900: "fasds",
		400: "fasdr",
		normal: "fasdr",
		300: "fasdl",
		100: "fasdt"
	}
}, Ii = /* @__PURE__ */ new Map([
	["classic", {
		defaultShortPrefixId: "fas",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin",
			"brands"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp", {
		defaultShortPrefixId: "fass",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["duotone", {
		defaultShortPrefixId: "fad",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}],
	["sharp-duotone", {
		defaultShortPrefixId: "fasds",
		defaultStyleId: "solid",
		styleIds: [
			"solid",
			"regular",
			"light",
			"thin"
		],
		futureStyleIds: [],
		defaultFontWeight: 900
	}]
]), Li = {
	classic: {
		solid: "fas",
		regular: "far",
		light: "fal",
		thin: "fat",
		brands: "fab"
	},
	duotone: {
		solid: "fad",
		regular: "fadr",
		light: "fadl",
		thin: "fadt"
	},
	sharp: {
		solid: "fass",
		regular: "fasr",
		light: "fasl",
		thin: "fast"
	},
	"sharp-duotone": {
		solid: "fasds",
		regular: "fasdr",
		light: "fasdl",
		thin: "fasdt"
	}
}, Ri = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], zi = {
	kit: {
		fak: "kit",
		"fa-kit": "kit"
	},
	"kit-duotone": {
		fakd: "kit-duotone",
		"fa-kit-duotone": "kit-duotone"
	}
}, Bi = ["kit"], Vi = {
	kit: { "fa-kit": "fak" },
	"kit-duotone": { "fa-kit-duotone": "fakd" }
}, Hi = ["fak", "fakd"], Ui = {
	kit: { fak: "fa-kit" },
	"kit-duotone": { fakd: "fa-kit-duotone" }
}, Wi = {
	kit: { kit: "fak" },
	"kit-duotone": { "kit-duotone": "fakd" }
}, Gi = {
	GROUP: "duotone-group",
	SWAP_OPACITY: "swap-opacity",
	PRIMARY: "primary",
	SECONDARY: "secondary"
}, Ki = [
	"fa-classic",
	"fa-duotone",
	"fa-sharp",
	"fa-sharp-duotone"
], qi = [
	"fak",
	"fa-kit",
	"fakd",
	"fa-kit-duotone"
], Ji = {
	"Font Awesome Kit": {
		400: "fak",
		normal: "fak"
	},
	"Font Awesome Kit Duotone": {
		400: "fakd",
		normal: "fakd"
	}
}, Yi = {
	classic: {
		"fa-brands": "fab",
		"fa-duotone": "fad",
		"fa-light": "fal",
		"fa-regular": "far",
		"fa-solid": "fas",
		"fa-thin": "fat"
	},
	duotone: {
		"fa-regular": "fadr",
		"fa-light": "fadl",
		"fa-thin": "fadt"
	},
	sharp: {
		"fa-solid": "fass",
		"fa-regular": "fasr",
		"fa-light": "fasl",
		"fa-thin": "fast"
	},
	"sharp-duotone": {
		"fa-solid": "fasds",
		"fa-regular": "fasdr",
		"fa-light": "fasdl",
		"fa-thin": "fasdt"
	}
}, Xi = {
	classic: [
		"fas",
		"far",
		"fal",
		"fat",
		"fad"
	],
	duotone: [
		"fadr",
		"fadl",
		"fadt"
	],
	sharp: [
		"fass",
		"fasr",
		"fasl",
		"fast"
	],
	"sharp-duotone": [
		"fasds",
		"fasdr",
		"fasdl",
		"fasdt"
	]
}, Zi = {
	classic: {
		fab: "fa-brands",
		fad: "fa-duotone",
		fal: "fa-light",
		far: "fa-regular",
		fas: "fa-solid",
		fat: "fa-thin"
	},
	duotone: {
		fadr: "fa-regular",
		fadl: "fa-light",
		fadt: "fa-thin"
	},
	sharp: {
		fass: "fa-solid",
		fasr: "fa-regular",
		fasl: "fa-light",
		fast: "fa-thin"
	},
	"sharp-duotone": {
		fasds: "fa-solid",
		fasdr: "fa-regular",
		fasdl: "fa-light",
		fasdt: "fa-thin"
	}
}, Qi = [
	"fa-solid",
	"fa-regular",
	"fa-light",
	"fa-thin",
	"fa-duotone",
	"fa-brands"
], $i = [
	"fa",
	"fas",
	"far",
	"fal",
	"fat",
	"fad",
	"fadr",
	"fadl",
	"fadt",
	"fab",
	"fass",
	"fasr",
	"fasl",
	"fast",
	"fasds",
	"fasdr",
	"fasdl",
	"fasdt",
	...Ki,
	...Qi
], ea = [
	"solid",
	"regular",
	"light",
	"thin",
	"duotone",
	"brands"
], ta = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10
], na = ta.concat([
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20
]), ra = [
	...Object.keys(Xi),
	...ea,
	"2xs",
	"xs",
	"sm",
	"lg",
	"xl",
	"2xl",
	"beat",
	"border",
	"fade",
	"beat-fade",
	"bounce",
	"flip-both",
	"flip-horizontal",
	"flip-vertical",
	"flip",
	"fw",
	"inverse",
	"layers-counter",
	"layers-text",
	"layers",
	"li",
	"pull-left",
	"pull-right",
	"pulse",
	"rotate-180",
	"rotate-270",
	"rotate-90",
	"rotate-by",
	"shake",
	"spin-pulse",
	"spin-reverse",
	"spin",
	"stack-1x",
	"stack-2x",
	"stack",
	"ul",
	Gi.GROUP,
	Gi.SWAP_OPACITY,
	Gi.PRIMARY,
	Gi.SECONDARY
].concat(ta.map((e) => `${e}x`), na.map((e) => `w-${e}`)), ia = {
	"Font Awesome 5 Free": {
		900: "fas",
		400: "far"
	},
	"Font Awesome 5 Pro": {
		900: "fas",
		400: "far",
		normal: "far",
		300: "fal"
	},
	"Font Awesome 5 Brands": {
		400: "fab",
		normal: "fab"
	},
	"Font Awesome 5 Duotone": { 900: "fad" }
}, aa = "___FONT_AWESOME___", oa = 16, sa = "fa", ca = "svg-inline--fa", la = "data-fa-i2svg", ua = "data-fa-pseudo-element", da = "data-fa-pseudo-element-pending", fa = "data-prefix", pa = "data-icon", ma = "fontawesome-i2svg", ha = "async", ga = [
	"HTML",
	"HEAD",
	"STYLE",
	"SCRIPT"
], _a = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})();
function va(e) {
	return new Proxy(e, { get(e, t) {
		return t in e ? e[t] : e[H];
	} });
}
var ya = B({}, ki);
ya[H] = B(B(B(B({}, { "fa-duotone": "duotone" }), ki[H]), zi.kit), zi["kit-duotone"]);
var ba = va(ya), xa = B({}, Li);
xa[H] = B(B(B(B({}, { duotone: "fad" }), xa[H]), Wi.kit), Wi["kit-duotone"]);
var Sa = va(xa), Ca = B({}, Zi);
Ca[H] = B(B({}, Ca[H]), Ui.kit);
var wa = va(Ca), Ta = B({}, Yi);
Ta[H] = B(B({}, Ta[H]), Vi.kit), va(Ta);
var Ea = Di, Da = "fa-layers-text", Oa = Oi;
va(B({}, Pi));
var ka = [
	"class",
	"data-prefix",
	"data-icon",
	"data-fa-transform",
	"data-fa-mask"
], Aa = Ai, ja = [...Bi, ...ra], Ma = Si.FontAwesomeConfig || {};
function Na(e) {
	var t = V.querySelector("script[" + e + "]");
	if (t) return t.getAttribute(e);
}
function Pa(e) {
	return e === "" ? !0 : e === "false" ? !1 : e === "true" || e;
}
V && typeof V.querySelector == "function" && [
	["data-family-prefix", "familyPrefix"],
	["data-css-prefix", "cssPrefix"],
	["data-family-default", "familyDefault"],
	["data-style-default", "styleDefault"],
	["data-replacement-class", "replacementClass"],
	["data-auto-replace-svg", "autoReplaceSvg"],
	["data-auto-add-css", "autoAddCss"],
	["data-auto-a11y", "autoA11y"],
	["data-search-pseudo-elements", "searchPseudoElements"],
	["data-observe-mutations", "observeMutations"],
	["data-mutate-approach", "mutateApproach"],
	["data-keep-original-source", "keepOriginalSource"],
	["data-measure-performance", "measurePerformance"],
	["data-show-missing-icons", "showMissingIcons"]
].forEach((e) => {
	let [t, n] = e, r = Pa(Na(t));
	r != null && (Ma[n] = r);
});
var Fa = {
	styleDefault: "solid",
	familyDefault: H,
	cssPrefix: sa,
	replacementClass: ca,
	autoReplaceSvg: !0,
	autoAddCss: !0,
	autoA11y: !0,
	searchPseudoElements: !1,
	observeMutations: !0,
	mutateApproach: "async",
	keepOriginalSource: !0,
	measurePerformance: !1,
	showMissingIcons: !0
};
Ma.familyPrefix && (Ma.cssPrefix = Ma.familyPrefix);
var Ia = B(B({}, Fa), Ma);
Ia.autoReplaceSvg || (Ia.observeMutations = !1);
var U = {};
Object.keys(Fa).forEach((e) => {
	Object.defineProperty(U, e, {
		enumerable: !0,
		set: function(t) {
			Ia[e] = t, La.forEach((e) => e(U));
		},
		get: function() {
			return Ia[e];
		}
	});
}), Object.defineProperty(U, "familyPrefix", {
	enumerable: !0,
	set: function(e) {
		Ia.cssPrefix = e, La.forEach((e) => e(U));
	},
	get: function() {
		return Ia.cssPrefix;
	}
}), Si.FontAwesomeConfig = U;
var La = [];
function Ra(e) {
	return La.push(e), () => {
		La.splice(La.indexOf(e), 1);
	};
}
var za = oa, Ba = {
	size: 16,
	x: 0,
	y: 0,
	rotate: 0,
	flipX: !1,
	flipY: !1
};
function Va(e) {
	if (!e || !Ti) return;
	let t = V.createElement("style");
	t.setAttribute("type", "text/css"), t.innerHTML = e;
	let n = V.head.childNodes, r = null;
	for (let e = n.length - 1; e > -1; e--) {
		let t = n[e], i = (t.tagName || "").toUpperCase();
		["STYLE", "LINK"].indexOf(i) > -1 && (r = t);
	}
	return V.head.insertBefore(t, r), e;
}
var Ha = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ua() {
	let e = 12, t = "";
	for (; e-- > 0;) t += Ha[Math.random() * 62 | 0];
	return t;
}
function Wa(e) {
	let t = [];
	for (let n = (e || []).length >>> 0; n--;) t[n] = e[n];
	return t;
}
function Ga(e) {
	return e.classList ? Wa(e.classList) : (e.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Ka(e) {
	return `${e}`.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function qa(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}="${Ka(e[n])}" `, "").trim();
}
function Ja(e) {
	return Object.keys(e || {}).reduce((t, n) => t + `${n}: ${e[n].trim()};`, "");
}
function Ya(e) {
	return e.size !== Ba.size || e.x !== Ba.x || e.y !== Ba.y || e.rotate !== Ba.rotate || e.flipX || e.flipY;
}
function Xa(e) {
	let { transform: t, containerWidth: n, iconWidth: r } = e;
	return {
		outer: { transform: `translate(${n / 2} 256)` },
		inner: { transform: `${`translate(${t.x * 32}, ${t.y * 32}) `} ${`scale(${t.size / 16 * (t.flipX ? -1 : 1)}, ${t.size / 16 * (t.flipY ? -1 : 1)}) `} ${`rotate(${t.rotate} 0 0)`}` },
		path: { transform: `translate(${r / 2 * -1} -256)` }
	};
}
function Za(e) {
	let { transform: t, width: n = oa, height: r = oa, startCentered: i = !1 } = e, a = "";
	return i && Ei ? a += `translate(${t.x / za - n / 2}em, ${t.y / za - r / 2}em) ` : i ? a += `translate(calc(-50% + ${t.x / za}em), calc(-50% + ${t.y / za}em)) ` : a += `translate(${t.x / za}em, ${t.y / za}em) `, a += `scale(${t.size / za * (t.flipX ? -1 : 1)}, ${t.size / za * (t.flipY ? -1 : 1)}) `, a += `rotate(${t.rotate}deg) `, a;
}
var Qa = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 6 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 6 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 6 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 6 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}";
function $a() {
	let e = sa, t = ca, n = U.cssPrefix, r = U.replacementClass, i = Qa;
	if (n !== e || r !== t) {
		let a = RegExp(`\\.${e}\\-`, "g"), o = RegExp(`\\--${e}\\-`, "g"), s = RegExp(`\\.${t}`, "g");
		i = i.replace(a, `.${n}-`).replace(o, `--${n}-`).replace(s, `.${r}`);
	}
	return i;
}
var eo = !1;
function to() {
	U.autoAddCss && !eo && (Va($a()), eo = !0);
}
var no = {
	mixout() {
		return { dom: {
			css: $a,
			insertCss: to
		} };
	},
	hooks() {
		return {
			beforeDOMElementCreation() {
				to();
			},
			beforeI2svg() {
				to();
			}
		};
	}
}, ro = Si || {};
ro[aa] || (ro[aa] = {}), ro[aa].styles || (ro[aa].styles = {}), ro[aa].hooks || (ro[aa].hooks = {}), ro[aa].shims || (ro[aa].shims = []);
var io = ro[aa], ao = [], oo = function() {
	V.removeEventListener("DOMContentLoaded", oo), so = 1, ao.map((e) => e());
}, so = !1;
Ti && (so = (V.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(V.readyState), so || V.addEventListener("DOMContentLoaded", oo));
function co(e) {
	Ti && (so ? setTimeout(e, 0) : ao.push(e));
}
function lo(e) {
	let { tag: t, attributes: n = {}, children: r = [] } = e;
	return typeof e == "string" ? Ka(e) : `<${t} ${qa(n)}>${r.map(lo).join("")}</${t}>`;
}
function uo(e, t, n) {
	if (e && e[t] && e[t][n]) return {
		prefix: t,
		iconName: n,
		icon: e[t][n]
	};
}
var fo = function(e, t) {
	return function(n, r, i, a) {
		return e.call(t, n, r, i, a);
	};
}, po = function(e, t, n, r) {
	var i = Object.keys(e), a = i.length, o = r === void 0 ? t : fo(t, r), s, c, l;
	for (n === void 0 ? (s = 1, l = e[i[0]]) : (s = 0, l = n); s < a; s++) c = i[s], l = o(l, e[c], c, e);
	return l;
};
function mo(e) {
	let t = [], n = 0, r = e.length;
	for (; n < r;) {
		let i = e.charCodeAt(n++);
		if (i >= 55296 && i <= 56319 && n < r) {
			let r = e.charCodeAt(n++);
			(r & 64512) == 56320 ? t.push(((i & 1023) << 10) + (r & 1023) + 65536) : (t.push(i), n--);
		} else t.push(i);
	}
	return t;
}
function ho(e) {
	let t = mo(e);
	return t.length === 1 ? t[0].toString(16) : null;
}
function go(e, t) {
	let n = e.length, r = e.charCodeAt(t), i;
	return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function _o(e) {
	return Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
	}, {});
}
function vo(e, t) {
	let { skipHooks: n = !1 } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _o(t);
	typeof io.hooks.addPack == "function" && !n ? io.hooks.addPack(e, _o(t)) : io.styles[e] = B(B({}, io.styles[e] || {}), r), e === "fas" && vo("fa", t);
}
var { styles: yo, shims: bo } = io, xo = Object.keys(wa), So = xo.reduce((e, t) => (e[t] = Object.keys(wa[t]), e), {}), Co = null, wo = {}, To = {}, Eo = {}, Do = {}, Oo = {};
function ko(e) {
	return ~ja.indexOf(e);
}
function Ao(e, t) {
	let n = t.split("-"), r = n[0], i = n.slice(1).join("-");
	return r === e && i !== "" && !ko(i) ? i : null;
}
var jo = () => {
	let e = (e) => po(yo, (t, n, r) => (t[r] = po(n, e, {}), t), {});
	wo = e((e, t, n) => (t[3] && (e[t[3]] = n), t[2] && t[2].filter((e) => typeof e == "number").forEach((t) => {
		e[t.toString(16)] = n;
	}), e)), To = e((e, t, n) => (e[n] = n, t[2] && t[2].filter((e) => typeof e == "string").forEach((t) => {
		e[t] = n;
	}), e)), Oo = e((e, t, n) => {
		let r = t[2];
		return e[n] = n, r.forEach((t) => {
			e[t] = n;
		}), e;
	});
	let t = "far" in yo || U.autoFetchSvg, n = po(bo, (e, n) => {
		let r = n[0], i = n[1], a = n[2];
		return i === "far" && !t && (i = "fas"), typeof r == "string" && (e.names[r] = {
			prefix: i,
			iconName: a
		}), typeof r == "number" && (e.unicodes[r.toString(16)] = {
			prefix: i,
			iconName: a
		}), e;
	}, {
		names: {},
		unicodes: {}
	});
	Eo = n.names, Do = n.unicodes, Co = Bo(U.styleDefault, { family: U.familyDefault });
};
Ra((e) => {
	Co = Bo(e.styleDefault, { family: U.familyDefault });
}), jo();
function Mo(e, t) {
	return (wo[e] || {})[t];
}
function No(e, t) {
	return (To[e] || {})[t];
}
function Po(e, t) {
	return (Oo[e] || {})[t];
}
function Fo(e) {
	return Eo[e] || {
		prefix: null,
		iconName: null
	};
}
function Io(e) {
	let t = Do[e], n = Mo("fas", e);
	return t || (n ? {
		prefix: "fas",
		iconName: n
	} : null) || {
		prefix: null,
		iconName: null
	};
}
function Lo() {
	return Co;
}
var Ro = () => ({
	prefix: null,
	iconName: null,
	rest: []
});
function zo(e) {
	let t = H, n = xo.reduce((e, t) => (e[t] = `${U.cssPrefix}-${t}`, e), {});
	return Ni.forEach((r) => {
		(e.includes(n[r]) || e.some((e) => So[r].includes(e))) && (t = r);
	}), t;
}
function Bo(e) {
	let { family: t = H } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ba[t][e];
	if (t === Mi && !e) return "fad";
	let r = Sa[t][e] || Sa[t][n], i = e in io.styles ? e : null;
	return r || i || null;
}
function Vo(e) {
	let t = [], n = null;
	return e.forEach((e) => {
		let r = Ao(U.cssPrefix, e);
		r ? n = r : e && t.push(e);
	}), {
		iconName: n,
		rest: t
	};
}
function Ho(e) {
	return e.sort().filter((e, t, n) => n.indexOf(e) === t);
}
function Uo(e) {
	let { skipLookups: t = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = null, r = $i.concat(qi), i = Ho(e.filter((e) => r.includes(e))), a = Ho(e.filter((e) => !$i.includes(e))), [o = null] = i.filter((e) => (n = e, !ji.includes(e))), s = zo(i), c = B(B({}, Vo(a)), {}, { prefix: Bo(o, { family: s }) });
	return B(B(B({}, c), qo({
		values: e,
		family: s,
		styles: yo,
		config: U,
		canonical: c,
		givenPrefix: n
	})), Wo(t, n, c));
}
function Wo(e, t, n) {
	let { prefix: r, iconName: i } = n;
	if (e || !r || !i) return {
		prefix: r,
		iconName: i
	};
	let a = t === "fa" ? Fo(i) : {}, o = Po(r, i);
	return i = a.iconName || o || i, r = a.prefix || r, r === "far" && !yo.far && yo.fas && !U.autoFetchSvg && (r = "fas"), {
		prefix: r,
		iconName: i
	};
}
var Go = Ni.filter((e) => e !== H || e !== Mi), Ko = Object.keys(Zi).filter((e) => e !== H).map((e) => Object.keys(Zi[e])).flat();
function qo(e) {
	let { values: t, family: n, canonical: r, givenPrefix: i = "", styles: a = {}, config: o = {} } = e, s = n === Mi, c = t.includes("fa-duotone") || t.includes("fad"), l = o.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
	return !s && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Go.includes(n) && (Object.keys(a).find((e) => Ko.includes(e)) || o.autoFetchSvg) && (r.prefix = Ii.get(n).defaultShortPrefixId, r.iconName = Po(r.prefix, r.iconName) || r.iconName), (r.prefix === "fa" || i === "fa") && (r.prefix = Lo() || "fas"), r;
}
var Jo = class {
	constructor() {
		this.definitions = {};
	}
	add() {
		let e = [...arguments].reduce(this._pullDefinitions, {});
		Object.keys(e).forEach((t) => {
			this.definitions[t] = B(B({}, this.definitions[t] || {}), e[t]), vo(t, e[t]);
			let n = wa[H][t];
			n && vo(n, e[t]), jo();
		});
	}
	reset() {
		this.definitions = {};
	}
	_pullDefinitions(e, t) {
		let n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
		return Object.keys(n).map((t) => {
			let { prefix: r, iconName: i, icon: a } = n[t], o = a[2];
			e[r] || (e[r] = {}), o.length > 0 && o.forEach((t) => {
				typeof t == "string" && (e[r][t] = a);
			}), e[r][i] = a;
		}), e;
	}
}, Yo = [], Xo = {}, Zo = {}, Qo = Object.keys(Zo);
function $o(e, t) {
	let { mixoutsTo: n } = t;
	return Yo = e, Xo = {}, Object.keys(Zo).forEach((e) => {
		Qo.indexOf(e) === -1 && delete Zo[e];
	}), Yo.forEach((e) => {
		let t = e.mixout ? e.mixout() : {};
		if (Object.keys(t).forEach((e) => {
			typeof t[e] == "function" && (n[e] = t[e]), typeof t[e] == "object" && Object.keys(t[e]).forEach((r) => {
				n[e] || (n[e] = {}), n[e][r] = t[e][r];
			});
		}), e.hooks) {
			let t = e.hooks();
			Object.keys(t).forEach((e) => {
				Xo[e] || (Xo[e] = []), Xo[e].push(t[e]);
			});
		}
		e.provides && e.provides(Zo);
	}), n;
}
function es(e, t) {
	var n = [...arguments].slice(2);
	return (Xo[e] || []).forEach((e) => {
		t = e.apply(null, [t, ...n]);
	}), t;
}
function ts(e) {
	var t = [...arguments].slice(1);
	(Xo[e] || []).forEach((e) => {
		e.apply(null, t);
	});
}
function ns() {
	let e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
	return Zo[e] ? Zo[e].apply(null, t) : void 0;
}
function rs(e) {
	e.prefix === "fa" && (e.prefix = "fas");
	let { iconName: t } = e, n = e.prefix || Lo();
	if (t) return t = Po(n, t) || t, uo(is.definitions, n, t) || uo(io.styles, n, t);
}
var is = new Jo(), as = {
	noAuto: () => {
		U.autoReplaceSvg = !1, U.observeMutations = !1, ts("noAuto");
	},
	config: U,
	dom: {
		i2svg: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			return Ti ? (ts("beforeI2svg", e), ns("pseudoElements2svg", e), ns("i2svg", e)) : Promise.reject(/* @__PURE__ */ Error("Operation requires a DOM of some kind."));
		},
		watch: function() {
			let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { autoReplaceSvgRoot: t } = e;
			U.autoReplaceSvg === !1 && (U.autoReplaceSvg = !0), U.observeMutations = !0, co(() => {
				os({ autoReplaceSvgRoot: t }), ts("watch", e);
			});
		}
	},
	parse: { icon: (e) => {
		if (e === null) return null;
		if (typeof e == "object" && e.prefix && e.iconName) return {
			prefix: e.prefix,
			iconName: Po(e.prefix, e.iconName) || e.iconName
		};
		if (Array.isArray(e) && e.length === 2) {
			let t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Bo(e[0]);
			return {
				prefix: n,
				iconName: Po(n, t) || t
			};
		}
		if (typeof e == "string" && (e.indexOf(`${U.cssPrefix}-`) > -1 || e.match(Ea))) {
			let t = Uo(e.split(" "), { skipLookups: !0 });
			return {
				prefix: t.prefix || Lo(),
				iconName: Po(t.prefix, t.iconName) || t.iconName
			};
		}
		if (typeof e == "string") {
			let t = Lo();
			return {
				prefix: t,
				iconName: Po(t, e) || e
			};
		}
	} },
	library: is,
	findIconDefinition: rs,
	toHtml: lo
}, os = function() {
	let { autoReplaceSvgRoot: e = V } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	(Object.keys(io.styles).length > 0 || U.autoFetchSvg) && Ti && U.autoReplaceSvg && as.dom.i2svg({ node: e });
};
function ss(e, t) {
	return Object.defineProperty(e, "abstract", { get: t }), Object.defineProperty(e, "html", { get: function() {
		return e.abstract.map((e) => lo(e));
	} }), Object.defineProperty(e, "node", { get: function() {
		if (!Ti) return;
		let t = V.createElement("div");
		return t.innerHTML = e.html, t.children;
	} }), e;
}
function cs(e) {
	let { children: t, main: n, mask: r, attributes: i, styles: a, transform: o } = e;
	if (Ya(o) && n.found && !r.found) {
		let { width: e, height: t } = n, r = {
			x: e / t / 2,
			y: .5
		};
		i.style = Ja(B(B({}, a), {}, { "transform-origin": `${r.x + o.x / 16}em ${r.y + o.y / 16}em` }));
	}
	return [{
		tag: "svg",
		attributes: i,
		children: t
	}];
}
function ls(e) {
	let { prefix: t, iconName: n, children: r, attributes: i, symbol: a } = e, o = a === !0 ? `${t}-${U.cssPrefix}-${n}` : a;
	return [{
		tag: "svg",
		attributes: { style: "display: none;" },
		children: [{
			tag: "symbol",
			attributes: B(B({}, i), {}, { id: o }),
			children: r
		}]
	}];
}
function us(e) {
	let { icons: { main: t, mask: n }, prefix: r, iconName: i, transform: a, symbol: o, title: s, maskId: c, titleId: l, extra: u, watchable: d = !1 } = e, { width: f, height: p } = n.found ? n : t, m = Hi.includes(r), h = [U.replacementClass, i ? `${U.cssPrefix}-${i}` : ""].filter((e) => u.classes.indexOf(e) === -1).filter((e) => e !== "" || !!e).concat(u.classes).join(" "), g = {
		children: [],
		attributes: B(B({}, u.attributes), {}, {
			"data-prefix": r,
			"data-icon": i,
			class: h,
			role: u.attributes.role || "img",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${f} ${p}`
		})
	}, _ = m && !~u.classes.indexOf("fa-fw") ? { width: `${f / p * 16 * .0625}em` } : {};
	d && (g.attributes[la] = ""), s && (g.children.push({
		tag: "title",
		attributes: { id: g.attributes["aria-labelledby"] || `title-${l || Ua()}` },
		children: [s]
	}), delete g.attributes.title);
	let v = B(B({}, g), {}, {
		prefix: r,
		iconName: i,
		main: t,
		mask: n,
		maskId: c,
		transform: a,
		symbol: o,
		styles: B(B({}, _), u.styles)
	}), { children: y, attributes: b } = n.found && t.found ? ns("generateAbstractMask", v) || {
		children: [],
		attributes: {}
	} : ns("generateAbstractIcon", v) || {
		children: [],
		attributes: {}
	};
	return v.children = y, v.attributes = b, o ? ls(v) : cs(v);
}
function ds(e) {
	let { content: t, width: n, height: r, transform: i, title: a, extra: o, watchable: s = !1 } = e, c = B(B(B({}, o.attributes), a ? { title: a } : {}), {}, { class: o.classes.join(" ") });
	s && (c[la] = "");
	let l = B({}, o.styles);
	Ya(i) && (l.transform = Za({
		transform: i,
		startCentered: !0,
		width: n,
		height: r
	}), l["-webkit-transform"] = l.transform);
	let u = Ja(l);
	u.length > 0 && (c.style = u);
	let d = [];
	return d.push({
		tag: "span",
		attributes: c,
		children: [t]
	}), a && d.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [a]
	}), d;
}
function fs(e) {
	let { content: t, title: n, extra: r } = e, i = B(B(B({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(" ") }), a = Ja(r.styles);
	a.length > 0 && (i.style = a);
	let o = [];
	return o.push({
		tag: "span",
		attributes: i,
		children: [t]
	}), n && o.push({
		tag: "span",
		attributes: { class: "sr-only" },
		children: [n]
	}), o;
}
var { styles: ps } = io;
function ms(e) {
	let t = e[0], n = e[1], [r] = e.slice(4), i = null;
	return i = Array.isArray(r) ? {
		tag: "g",
		attributes: { class: `${U.cssPrefix}-${Aa.GROUP}` },
		children: [{
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${Aa.SECONDARY}`,
				fill: "currentColor",
				d: r[0]
			}
		}, {
			tag: "path",
			attributes: {
				class: `${U.cssPrefix}-${Aa.PRIMARY}`,
				fill: "currentColor",
				d: r[1]
			}
		}]
	} : {
		tag: "path",
		attributes: {
			fill: "currentColor",
			d: r
		}
	}, {
		found: !0,
		width: t,
		height: n,
		icon: i
	};
}
var hs = {
	found: !1,
	width: 512,
	height: 512
};
function gs(e, t) {
	!_a && !U.showMissingIcons && e && console.error(`Icon with name "${e}" and prefix "${t}" is missing.`);
}
function _s(e, t) {
	let n = t;
	return t === "fa" && U.styleDefault !== null && (t = Lo()), new Promise((r, i) => {
		if (n === "fa") {
			let n = Fo(e) || {};
			e = n.iconName || e, t = n.prefix || t;
		}
		if (e && t && ps[t] && ps[t][e]) {
			let n = ps[t][e];
			return r(ms(n));
		}
		gs(e, t), r(B(B({}, hs), {}, { icon: U.showMissingIcons && e && ns("missingIconAbstract") || {} }));
	});
}
var vs = () => {}, ys = U.measurePerformance && wi && wi.mark && wi.measure ? wi : {
	mark: vs,
	measure: vs
}, bs = "FA \"6.7.2\"", xs = (e) => (ys.mark(`${bs} ${e} begins`), () => Ss(e)), Ss = (e) => {
	ys.mark(`${bs} ${e} ends`), ys.measure(`${bs} ${e}`, `${bs} ${e} begins`, `${bs} ${e} ends`);
}, Cs = {
	begin: xs,
	end: Ss
}, ws = () => {};
function Ts(e) {
	return typeof (e.getAttribute ? e.getAttribute(la) : null) == "string";
}
function Es(e) {
	let t = e.getAttribute ? e.getAttribute(fa) : null, n = e.getAttribute ? e.getAttribute(pa) : null;
	return t && n;
}
function Ds(e) {
	return e && e.classList && e.classList.contains && e.classList.contains(U.replacementClass);
}
function Os() {
	return U.autoReplaceSvg === !0 ? Ns.replace : Ns[U.autoReplaceSvg] || Ns.replace;
}
function ks(e) {
	return V.createElementNS("http://www.w3.org/2000/svg", e);
}
function As(e) {
	return V.createElement(e);
}
function js(e) {
	let { ceFn: t = e.tag === "svg" ? ks : As } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (typeof e == "string") return V.createTextNode(e);
	let n = t(e.tag);
	return Object.keys(e.attributes || []).forEach(function(t) {
		n.setAttribute(t, e.attributes[t]);
	}), (e.children || []).forEach(function(e) {
		n.appendChild(js(e, { ceFn: t }));
	}), n;
}
function Ms(e) {
	let t = ` ${e.outerHTML} `;
	return t = `${t}Font Awesome fontawesome.com `, t;
}
var Ns = {
	replace: function(e) {
		let t = e[0];
		if (t.parentNode) if (e[1].forEach((e) => {
			t.parentNode.insertBefore(js(e), t);
		}), t.getAttribute(la) === null && U.keepOriginalSource) {
			let e = V.createComment(Ms(t));
			t.parentNode.replaceChild(e, t);
		} else t.remove();
	},
	nest: function(e) {
		let t = e[0], n = e[1];
		if (~Ga(t).indexOf(U.replacementClass)) return Ns.replace(e);
		let r = RegExp(`${U.cssPrefix}-.*`);
		if (delete n[0].attributes.id, n[0].attributes.class) {
			let e = n[0].attributes.class.split(" ").reduce((e, t) => (t === U.replacementClass || t.match(r) ? e.toSvg.push(t) : e.toNode.push(t), e), {
				toNode: [],
				toSvg: []
			});
			n[0].attributes.class = e.toSvg.join(" "), e.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", e.toNode.join(" "));
		}
		let i = n.map((e) => lo(e)).join("\n");
		t.setAttribute(la, ""), t.innerHTML = i;
	}
};
function Ps(e) {
	e();
}
function Fs(e, t) {
	let n = typeof t == "function" ? t : ws;
	if (e.length === 0) n();
	else {
		let t = Ps;
		U.mutateApproach === ha && (t = Si.requestAnimationFrame || Ps), t(() => {
			let t = Os(), r = Cs.begin("mutate");
			e.map(t), r(), n();
		});
	}
}
var Is = !1;
function Ls() {
	Is = !0;
}
function Rs() {
	Is = !1;
}
var zs = null;
function Bs(e) {
	if (!Ci || !U.observeMutations) return;
	let { treeCallback: t = ws, nodeCallback: n = ws, pseudoElementsCallback: r = ws, observeMutationsRoot: i = V } = e;
	zs = new Ci((e) => {
		if (Is) return;
		let i = Lo();
		Wa(e).forEach((e) => {
			if (e.type === "childList" && e.addedNodes.length > 0 && !Ts(e.addedNodes[0]) && (U.searchPseudoElements && r(e.target), t(e.target)), e.type === "attributes" && e.target.parentNode && U.searchPseudoElements && r(e.target.parentNode), e.type === "attributes" && Ts(e.target) && ~ka.indexOf(e.attributeName)) if (e.attributeName === "class" && Es(e.target)) {
				let { prefix: t, iconName: n } = Uo(Ga(e.target));
				e.target.setAttribute(fa, t || i), n && e.target.setAttribute(pa, n);
			} else Ds(e.target) && n(e.target);
		});
	}), Ti && zs.observe(i, {
		childList: !0,
		attributes: !0,
		characterData: !0,
		subtree: !0
	});
}
function Vs() {
	zs && zs.disconnect();
}
function Hs(e) {
	let t = e.getAttribute("style"), n = [];
	return t && (n = t.split(";").reduce((e, t) => {
		let n = t.split(":"), r = n[0], i = n.slice(1);
		return r && i.length > 0 && (e[r] = i.join(":").trim()), e;
	}, {})), n;
}
function Us(e) {
	let t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText === void 0 ? "" : e.innerText.trim(), i = Uo(Ga(e));
	return i.prefix ||= Lo(), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix ? i : (i.prefix && r.length > 0 && (i.iconName = No(i.prefix, e.innerText) || Mo(i.prefix, ho(e.innerText))), !i.iconName && U.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data), i);
}
function Ws(e) {
	let t = Wa(e.attributes).reduce((e, t) => (e.name !== "class" && e.name !== "style" && (e[t.name] = t.value), e), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
	return U.autoA11y && (n ? t["aria-labelledby"] = `${U.replacementClass}-title-${r || Ua()}` : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Gs() {
	return {
		iconName: null,
		title: null,
		titleId: null,
		prefix: null,
		transform: Ba,
		symbol: !1,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		extra: {
			classes: [],
			styles: {},
			attributes: {}
		}
	};
}
function Ks(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { styleParser: !0 }, { iconName: n, prefix: r, rest: i } = Us(e), a = Ws(e), o = es("parseNodeAttributes", {}, e), s = t.styleParser ? Hs(e) : [];
	return B({
		iconName: n,
		title: e.getAttribute("title"),
		titleId: e.getAttribute("data-fa-title-id"),
		prefix: r,
		transform: Ba,
		mask: {
			iconName: null,
			prefix: null,
			rest: []
		},
		maskId: null,
		symbol: !1,
		extra: {
			classes: i,
			styles: s,
			attributes: a
		}
	}, o);
}
var { styles: qs } = io;
function Js(e) {
	let t = U.autoReplaceSvg === "nest" ? Ks(e, { styleParser: !1 }) : Ks(e);
	return ~t.extra.classes.indexOf(Da) ? ns("generateLayersText", e, t) : ns("generateSvgReplacementMutation", e, t);
}
function Ys() {
	return [...Ri, ...$i];
}
function Xs(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	if (!Ti) return Promise.resolve();
	let n = V.documentElement.classList, r = (e) => n.add(`${ma}-${e}`), i = (e) => n.remove(`${ma}-${e}`), a = U.autoFetchSvg ? Ys() : ji.concat(Object.keys(qs));
	a.includes("fa") || a.push("fa");
	let o = [`.${Da}:not([${la}])`].concat(a.map((e) => `.${e}:not([${la}])`)).join(", ");
	if (o.length === 0) return Promise.resolve();
	let s = [];
	try {
		s = Wa(e.querySelectorAll(o));
	} catch {}
	if (s.length > 0) r("pending"), i("complete");
	else return Promise.resolve();
	let c = Cs.begin("onTree"), l = s.reduce((e, t) => {
		try {
			let n = Js(t);
			n && e.push(n);
		} catch (e) {
			_a || e.name === "MissingIcon" && console.error(e);
		}
		return e;
	}, []);
	return new Promise((e, n) => {
		Promise.all(l).then((n) => {
			Fs(n, () => {
				r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), e();
			});
		}).catch((e) => {
			c(), n(e);
		});
	});
}
function Zs(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
	Js(e).then((e) => {
		e && Fs([e], t);
	});
}
function Qs(e) {
	return function(t) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : rs(t || {}), { mask: i } = n;
		return i &&= (i || {}).icon ? i : rs(i || {}), e(r, B(B({}, n), {}, { mask: i }));
	};
}
var $s = function(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = Ba, symbol: r = !1, mask: i = null, maskId: a = null, title: o = null, titleId: s = null, classes: c = [], attributes: l = {}, styles: u = {} } = t;
	if (!e) return;
	let { prefix: d, iconName: f, icon: p } = e;
	return ss(B({ type: "icon" }, e), () => (ts("beforeDOMElementCreation", {
		iconDefinition: e,
		params: t
	}), U.autoA11y && (o ? l["aria-labelledby"] = `${U.replacementClass}-title-${s || Ua()}` : (l["aria-hidden"] = "true", l.focusable = "false")), us({
		icons: {
			main: ms(p),
			mask: i ? ms(i.icon) : {
				found: !1,
				width: null,
				height: null,
				icon: {}
			}
		},
		prefix: d,
		iconName: f,
		transform: B(B({}, Ba), n),
		symbol: r,
		title: o,
		maskId: a,
		titleId: s,
		extra: {
			attributes: l,
			styles: u,
			classes: c
		}
	})));
}, ec = {
	mixout() {
		return { icon: Qs($s) };
	},
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.treeCallback = Xs, e.nodeCallback = Zs, e;
		} };
	},
	provides(e) {
		e.i2svg = function(e) {
			let { node: t = V, callback: n = () => {} } = e;
			return Xs(t, n);
		}, e.generateSvgReplacementMutation = function(e, t) {
			let { iconName: n, title: r, titleId: i, prefix: a, transform: o, symbol: s, mask: c, maskId: l, extra: u } = t;
			return new Promise((t, d) => {
				Promise.all([_s(n, a), c.iconName ? _s(c.iconName, c.prefix) : Promise.resolve({
					found: !1,
					width: 512,
					height: 512,
					icon: {}
				})]).then((c) => {
					let [d, f] = c;
					t([e, us({
						icons: {
							main: d,
							mask: f
						},
						prefix: a,
						iconName: n,
						transform: o,
						symbol: s,
						maskId: l,
						title: r,
						titleId: i,
						extra: u,
						watchable: !0
					})]);
				}).catch(d);
			});
		}, e.generateAbstractIcon = function(e) {
			let { children: t, attributes: n, main: r, transform: i, styles: a } = e, o = Ja(a);
			o.length > 0 && (n.style = o);
			let s;
			return Ya(i) && (s = ns("generateAbstractTransformGrouping", {
				main: r,
				transform: i,
				containerWidth: r.width,
				iconWidth: r.width
			})), t.push(s || r.icon), {
				children: t,
				attributes: n
			};
		};
	}
}, tc = { mixout() {
	return { layer(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { classes: n = [] } = t;
		return ss({ type: "layer" }, () => {
			ts("beforeDOMElementCreation", {
				assembler: e,
				params: t
			});
			let r = [];
			return e((e) => {
				Array.isArray(e) ? e.map((e) => {
					r = r.concat(e.abstract);
				}) : r = r.concat(e.abstract);
			}), [{
				tag: "span",
				attributes: { class: [`${U.cssPrefix}-layers`, ...n].join(" ") },
				children: r
			}];
		});
	} };
} }, nc = { mixout() {
	return { counter(e) {
		let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { title: n = null, classes: r = [], attributes: i = {}, styles: a = {} } = t;
		return ss({
			type: "counter",
			content: e
		}, () => (ts("beforeDOMElementCreation", {
			content: e,
			params: t
		}), fs({
			content: e.toString(),
			title: n,
			extra: {
				attributes: i,
				styles: a,
				classes: [`${U.cssPrefix}-layers-counter`, ...r]
			}
		})));
	} };
} }, rc = {
	mixout() {
		return { text(e) {
			let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { transform: n = Ba, title: r = null, classes: i = [], attributes: a = {}, styles: o = {} } = t;
			return ss({
				type: "text",
				content: e
			}, () => (ts("beforeDOMElementCreation", {
				content: e,
				params: t
			}), ds({
				content: e,
				transform: B(B({}, Ba), n),
				title: r,
				extra: {
					attributes: a,
					styles: o,
					classes: [`${U.cssPrefix}-layers-text`, ...i]
				}
			})));
		} };
	},
	provides(e) {
		e.generateLayersText = function(e, t) {
			let { title: n, transform: r, extra: i } = t, a = null, o = null;
			if (Ei) {
				let t = parseInt(getComputedStyle(e).fontSize, 10), n = e.getBoundingClientRect();
				a = n.width / t, o = n.height / t;
			}
			return U.autoA11y && !n && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, ds({
				content: e.innerHTML,
				width: a,
				height: o,
				transform: r,
				title: n,
				extra: i,
				watchable: !0
			})]);
		};
	}
}, ic = /* @__PURE__ */ RegExp("\"", "ug"), ac = [1105920, 1112319], oc = B(B(B(B({}, { FontAwesome: {
	normal: "fas",
	400: "fas"
} }), Fi), ia), Ji), sc = Object.keys(oc).reduce((e, t) => (e[t.toLowerCase()] = oc[t], e), {}), cc = Object.keys(sc).reduce((e, t) => {
	let n = sc[t];
	return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function lc(e) {
	let t = e.replace(ic, ""), n = go(t, 0), r = n >= ac[0] && n <= ac[1], i = t.length === 2 && t[0] === t[1];
	return {
		value: ho(i ? t[0] : t),
		isSecondary: r || i
	};
}
function uc(e, t) {
	let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
	return (sc[n] || {})[i] || cc[n];
}
function dc(e, t) {
	let n = `${da}${t.replace(":", "-")}`;
	return new Promise((r, i) => {
		if (e.getAttribute(n) !== null) return r();
		let a = Wa(e.children).filter((e) => e.getAttribute(ua) === t)[0], o = Si.getComputedStyle(e, t), s = o.getPropertyValue("font-family"), c = s.match(Oa), l = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
		if (a && !c) return e.removeChild(a), r();
		if (c && u !== "none" && u !== "") {
			let u = o.getPropertyValue("content"), d = uc(s, l), { value: f, isSecondary: p } = lc(u), m = c[0].startsWith("FontAwesome"), h = Mo(d, f), g = h;
			if (m) {
				let e = Io(f);
				e.iconName && e.prefix && (h = e.iconName, d = e.prefix);
			}
			if (h && !p && (!a || a.getAttribute(fa) !== d || a.getAttribute(pa) !== g)) {
				e.setAttribute(n, g), a && e.removeChild(a);
				let o = Gs(), { extra: s } = o;
				s.attributes[ua] = t, _s(h, d).then((i) => {
					let a = us(B(B({}, o), {}, {
						icons: {
							main: i,
							mask: Ro()
						},
						prefix: d,
						iconName: g,
						extra: s,
						watchable: !0
					})), c = V.createElementNS("http://www.w3.org/2000/svg", "svg");
					t === "::before" ? e.insertBefore(c, e.firstChild) : e.appendChild(c), c.outerHTML = a.map((e) => lo(e)).join("\n"), e.removeAttribute(n), r();
				}).catch(i);
			} else r();
		} else r();
	});
}
function fc(e) {
	return Promise.all([dc(e, "::before"), dc(e, "::after")]);
}
function pc(e) {
	return e.parentNode !== document.head && !~ga.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ua) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function mc(e) {
	if (Ti) return new Promise((t, n) => {
		let r = Wa(e.querySelectorAll("*")).filter(pc).map(fc), i = Cs.begin("searchPseudoElements");
		Ls(), Promise.all(r).then(() => {
			i(), Rs(), t();
		}).catch(() => {
			i(), Rs(), n();
		});
	});
}
var hc = {
	hooks() {
		return { mutationObserverCallbacks(e) {
			return e.pseudoElementsCallback = mc, e;
		} };
	},
	provides(e) {
		e.pseudoElements2svg = function(e) {
			let { node: t = V } = e;
			U.searchPseudoElements && mc(t);
		};
	}
}, gc = !1, _c = {
	mixout() {
		return { dom: { unwatch() {
			Ls(), gc = !0;
		} } };
	},
	hooks() {
		return {
			bootstrap() {
				Bs(es("mutationObserverCallbacks", {}));
			},
			noAuto() {
				Vs();
			},
			watch(e) {
				let { observeMutationsRoot: t } = e;
				gc ? Rs() : Bs(es("mutationObserverCallbacks", { observeMutationsRoot: t }));
			}
		};
	}
}, vc = (e) => e.toLowerCase().split(" ").reduce((e, t) => {
	let n = t.toLowerCase().split("-"), r = n[0], i = n.slice(1).join("-");
	if (r && i === "h") return e.flipX = !0, e;
	if (r && i === "v") return e.flipY = !0, e;
	if (i = parseFloat(i), isNaN(i)) return e;
	switch (r) {
		case "grow":
			e.size += i;
			break;
		case "shrink":
			e.size -= i;
			break;
		case "left":
			e.x -= i;
			break;
		case "right":
			e.x += i;
			break;
		case "up":
			e.y -= i;
			break;
		case "down":
			e.y += i;
			break;
		case "rotate":
			e.rotate += i;
			break;
	}
	return e;
}, {
	size: 16,
	x: 0,
	y: 0,
	flipX: !1,
	flipY: !1,
	rotate: 0
}), yc = {
	mixout() {
		return { parse: { transform: (e) => vc(e) } };
	},
	hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-transform");
			return n && (e.transform = vc(n)), e;
		} };
	},
	provides(e) {
		e.generateAbstractTransformGrouping = function(e) {
			let { main: t, transform: n, containerWidth: r, iconWidth: i } = e, a = {
				outer: { transform: `translate(${r / 2} 256)` },
				inner: { transform: `${`translate(${n.x * 32}, ${n.y * 32}) `} ${`scale(${n.size / 16 * (n.flipX ? -1 : 1)}, ${n.size / 16 * (n.flipY ? -1 : 1)}) `} ${`rotate(${n.rotate} 0 0)`}` },
				path: { transform: `translate(${i / 2 * -1} -256)` }
			};
			return {
				tag: "g",
				attributes: B({}, a.outer),
				children: [{
					tag: "g",
					attributes: B({}, a.inner),
					children: [{
						tag: t.icon.tag,
						children: t.icon.children,
						attributes: B(B({}, t.icon.attributes), a.path)
					}]
				}]
			};
		};
	}
}, bc = {
	x: 0,
	y: 0,
	width: "100%",
	height: "100%"
};
function xc(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
	return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Sc(e) {
	return e.tag === "g" ? e.children : [e];
}
$o([
	no,
	ec,
	tc,
	nc,
	rc,
	hc,
	_c,
	yc,
	{
		hooks() {
			return { parseNodeAttributes(e, t) {
				let n = t.getAttribute("data-fa-mask"), r = n ? Uo(n.split(" ").map((e) => e.trim())) : Ro();
				return r.prefix ||= Lo(), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
			} };
		},
		provides(e) {
			e.generateAbstractMask = function(e) {
				let { children: t, attributes: n, main: r, mask: i, maskId: a, transform: o } = e, { width: s, icon: c } = r, { width: l, icon: u } = i, d = Xa({
					transform: o,
					containerWidth: l,
					iconWidth: s
				}), f = {
					tag: "rect",
					attributes: B(B({}, bc), {}, { fill: "white" })
				}, p = c.children ? { children: c.children.map(xc) } : {}, m = {
					tag: "g",
					attributes: B({}, d.inner),
					children: [xc(B({
						tag: c.tag,
						attributes: B(B({}, c.attributes), d.path)
					}, p))]
				}, h = {
					tag: "g",
					attributes: B({}, d.outer),
					children: [m]
				}, g = `mask-${a || Ua()}`, _ = `clip-${a || Ua()}`, v = {
					tag: "mask",
					attributes: B(B({}, bc), {}, {
						id: g,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse"
					}),
					children: [f, h]
				}, y = {
					tag: "defs",
					children: [{
						tag: "clipPath",
						attributes: { id: _ },
						children: Sc(u)
					}, v]
				};
				return t.push(y, {
					tag: "rect",
					attributes: B({
						fill: "currentColor",
						"clip-path": `url(#${_})`,
						mask: `url(#${g})`
					}, bc)
				}), {
					children: t,
					attributes: n
				};
			};
		}
	},
	{ provides(e) {
		let t = !1;
		Si.matchMedia && (t = Si.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
			let e = [], n = { fill: "currentColor" }, r = {
				attributeType: "XML",
				repeatCount: "indefinite",
				dur: "2s"
			};
			e.push({
				tag: "path",
				attributes: B(B({}, n), {}, { d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z" })
			});
			let i = B(B({}, r), {}, { attributeName: "opacity" }), a = {
				tag: "circle",
				attributes: B(B({}, n), {}, {
					cx: "256",
					cy: "364",
					r: "28"
				}),
				children: []
			};
			return t || a.children.push({
				tag: "animate",
				attributes: B(B({}, r), {}, {
					attributeName: "r",
					values: "28;14;28;28;14;28;"
				})
			}, {
				tag: "animate",
				attributes: B(B({}, i), {}, { values: "1;0;1;1;0;1;" })
			}), e.push(a), e.push({
				tag: "path",
				attributes: B(B({}, n), {}, {
					opacity: "1",
					d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
				}),
				children: t ? [] : [{
					tag: "animate",
					attributes: B(B({}, i), {}, { values: "1;0;0;0;0;1;" })
				}]
			}), t || e.push({
				tag: "path",
				attributes: B(B({}, n), {}, {
					opacity: "0",
					d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
				}),
				children: [{
					tag: "animate",
					attributes: B(B({}, i), {}, { values: "0;0;1;1;0;0;" })
				}]
			}), {
				tag: "g",
				attributes: { class: "missing" },
				children: e
			};
		};
	} },
	{ hooks() {
		return { parseNodeAttributes(e, t) {
			let n = t.getAttribute("data-fa-symbol");
			return e.symbol = n === null ? !1 : n === "" || n, e;
		} };
	} }
], { mixoutsTo: as }), as.noAuto, as.config, as.library;
var Cc = as.dom;
as.parse, as.findIconDefinition, as.toHtml;
var W = as.icon;
as.layer, as.text, as.counter;
//#endregion
//#region ../app/src/components/generic/componentStyles.js
var wc = y(Cc.css()), Tc = L`
    :host {
        --basic-spacing: var(--gs-basic-spacing, 10px);
        --form-control-color: #212529;
        --form-control-border-color: #ced4da;
        --form-control-border: 1px solid var(--form-control-border-color);
        --form-control-border-radius: 0.25em;
    }

    .btn {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.2em;

        &.reverse {
            flex-direction: row-reverse;
        }

        padding: 4px 12px;
        margin: 0;
        font-size: 1em;
        line-height: 20px;
        color: #333333;
        text-align: center;
        text-shadow: 0 1px 1px rgb(255 255 255 / 75%);
        vertical-align: middle;
        background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
        border: 1px solid #cccccc;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        border-bottom-color: #b3b3b3;
        border-radius: 4px;
        box-shadow:
            inset 0 1px 0 rgb(255 255 255 / 20%),
            0 1px 2px rgb(0 0 0 / 5%);

        transition: all 0.015s;

        &:hover:not(:disabled) {
            background-image: linear-gradient(to bottom, #f8f8f8, #d8d8d8);
        }

        &:active {
            border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2)
                rgba(0, 0, 0, 0.5);
        }

        &:disabled {
            color: #a0a0a0;
        }

        &:not(:disabled) {
            cursor: pointer;
        }

        svg:first-child:not(:last-child) {
            font-size: 85%;
            margin-right: 0.3em;
        }

        svg:last-child:not(:first-child) {
            font-size: 85%;
            margin-left: 0.3em;
        }
    }

    .btn[type="color"] {
        padding: 2px;
    }

    .btn-group {
        display: flex;

        /* TODO: Extract to another class */
        font-size: 1.3em;

        .btn {
            flex-grow: 1;
        }

        .btn:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;
        }
        .btn:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        .btn.chosen {
            background-image: linear-gradient(to bottom, #f0f0f0, #d8d8d8);
            box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.3);
        }
    }

    .gs-form-group {
        > p:first-child {
            margin-top: 0;
        }

        &:not(:first-child) {
            margin-top: 0.5em;
        }

        &:not(:last-child) {
            margin-bottom: var(--basic-spacing);
        }

        label,
        div.label {
            display: inline-block;
            margin-bottom: 0.5em;
        }

        input[type="range"] {
            display: block;
            width: 100%;
        }

        input[type="text"],
        input[type="number"],
        select,
        textarea,
        .fake-input {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0.375em 0.75em;
            font-size: 1em;
            font-family: var(--font-family);
            line-height: 1.5;
            color: var(--form-control-color);
            background-color: #fff;
            background-clip: padding-box;
            border: var(--form-control-border);
            border-radius: var(--form-control-border-radius);
            transition:
                border-color 0.15s ease-in-out,
                box-shadow 0.15s ease-in-out;

            /*
        // Doesn't work reliably
        &:invalid:not(:focus) {
            border-color: red;
            box-shadow: 0 0 5px 0px red;
        }
        */

            &::placeholder {
                color: #a0a0a0;
            }
        }

        select {
            /* Copy-pasted from Bootstrap 5.1 */
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            background-size: 16px 12px;
            appearance: none;
        }

        :is(input, select, textarea, div) + small {
            display: block;
            margin-top: 0.3em;
            color: #606060;
        }

        :is(input, select, textarea).is-invalid,
        .fake-input.is-invalid {
            border-color: var(--danger-color, #dc3545);
            box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
        }

        .invalid-feedback {
            display: block;
            margin-top: 0.25em;
            color: var(--danger-color, #dc3545);
            font-size: 0.875em;
        }

        .threshold-flex {
            display: flex;
            gap: var(--basic-spacing);

            &:not(:last-child) {
                margin-bottom: var(--basic-spacing);
            }

            * {
                margin-bottom: 0 !important; /* TODO: without important */
            }

            > :first-child {
                width: 5em;
            }

            > :last-child {
                padding: 0 var(--basic-spacing);
            }
        }

        .input-group {
            display: flex;
            gap: var(--basic-spacing);
        }
    }

    .gs-alert {
        display: flex;
        align-items: center;

        position: relative;
        padding: var(--basic-spacing);
        margin-bottom: var(--basic-spacing);
        border: 1px solid transparent;
        border-radius: var(--form-control-border-radius);
        contain: inline-size;
        max-width: 100%;

        > svg:first-child {
            width: 2em;
            height: 2em;
            margin-right: var(--basic-spacing);
        }

        &.danger {
            color: #58151c;
            background-color: #f8d7da;
            border-color: #f1aeb5;
        }

        &.warning {
            color: #664d03;
            background-color: #fff3cd;
            border-color: #ffecb5;
        }

        &.info {
            color: #055160;
            background-color: #cff4fc;
            border-color: #b6effb;
        }

        > div,
        > span {
            flex: 1 1 auto;
            min-width: 0;
        }

        > div {
            > :first-child {
                margin-top: 0;
            }

            > :last-child {
                margin-bottom: 0;
            }
        }

        ul,
        ol {
            padding-inline-start: 2em;
        }
    }

    .badge {
        display: inline-block;
        padding: 0.25em 0.5em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        background-color: #d0d0d0;
        border-radius: 0.25rem;
    }

    .gs-tabs {
        margin: 0;

        .tabs {
            display: flex;
            list-style: none;
            padding: 0;
            margin-top: 0;

            &::after {
                flex-grow: 1;
                content: "";
                display: block;
                border-bottom: 1px solid var(--form-control-border-color);
            }

            button {
                font-size: 1em;
                background-color: transparent;
                align-items: center;
                padding: 0.6em var(--basic-spacing);

                border: 1px solid var(--form-control-border-color);

                --radius: 5px;
                border-top-left-radius: var(--radius);
                border-top-right-radius: var(--radius);
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;

                cursor: pointer;
            }

            > li:not(:first-child) > button {
                margin-left: -1px;
            }

            .active-tab button {
                border-bottom-color: transparent;
            }

            :not(.active-tab) button {
                border-color: transparent;
                border-bottom-color: var(--form-control-border-color);
            }
        }

        .panes > :not(.active-tab) {
            display: none;
        }
    }
`, Ec = /* @__PURE__ */ new Set([
	"text",
	"search",
	"email",
	"url",
	"password",
	"tel",
	"number",
	"date",
	"time",
	"datetime-local",
	"month",
	"week"
]), G = class extends I {
	static properties = {
		dialogTitle: {},
		modal: { type: Boolean }
	};
	#e;
	static styles = [
		Tc,
		wc,
		L`
            dialog {
                font-family: var(--gs-font-family, sans-serif);
                font-size: var(--gs-font-size, 14px);
                padding: 0;

                box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.21);
                background: white;
                border-radius: 3px;
                border: none;
                min-width: 300px;

                opacity: 1;
                transform: translate(0, 0);
                transition:
                    opacity 0.2s ease-in-out,
                    transform 0.2s ease-in-out;

                @starting-style {
                    opacity: 0;
                    transform: translate(0, -15px);
                }
            }

            dialog.closing {
                opacity: 0;
                transform: translate(0, -15px);
            }

            dialog::backdrop {
                background-color: rgb(75, 75, 75);
                opacity: 0.4;
                transition: opacity 0.3s ease-in-out;

                @starting-style {
                    opacity: 0;
                }
            }

            dialog.closing::backdrop {
                opacity: 0;
            }

            header,
            section,
            footer {
                padding: var(--gs-basic-spacing, 10px);
            }

            header {
                font-weight: bold;
                padding-bottom: 0;
            }

            section {
                > :first-child {
                    margin-top: 0;
                }

                > :last-child {
                    margin-bottom: 0;
                }
            }

            footer {
                border-top: 1px solid var(--gs-dialog-stroke-color, #d0d0d0);
                padding: var(--gs-basic-spacing, 10px);

                > div {
                    display: flex;
                    justify-content: flex-end;
                    gap: var(--gs-basic-spacing, 10px);
                }
            }

            footer .btn.btn-primary {
                --gs-dialog-primary-bg: var(--gs-theme-primary, #6c82ab);
                --gs-dialog-primary-bg-hi: oklch(
                    from var(--gs-dialog-primary-bg) calc(l + 0.07) c h
                );
                --gs-dialog-primary-bg-lo: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.07) c h
                );
                background-color: var(--gs-dialog-primary-bg);
                background-image: linear-gradient(
                    to bottom,
                    var(--gs-dialog-primary-bg-hi),
                    var(--gs-dialog-primary-bg-lo)
                );
                border-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.08) c h
                );
                color: var(--gs-theme-on-primary, #ffffff);
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            }

            footer .btn.btn-primary:hover:not(:disabled) {
                background-image: linear-gradient(
                    to bottom,
                    oklch(from var(--gs-dialog-primary-bg) calc(l + 0.1) c h),
                    oklch(from var(--gs-dialog-primary-bg) calc(l - 0.04) c h)
                );
            }

            footer .btn.btn-primary svg {
                filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2));
            }

            footer .btn.btn-primary:disabled {
                background-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l + 0.08) c h
                );
                background-image: none;
                border-color: oklch(
                    from var(--gs-dialog-primary-bg) calc(l - 0.02) c h
                );
                color: oklch(
                    from var(--gs-theme-on-primary, #ffffff) l c h / 0.6
                );
                text-shadow: none;
            }

            footer .btn.btn-primary:disabled svg {
                filter: none;
            }
        `
	];
	constructor() {
		super(), this.dialogTitle = null, this.modal = !0, this.addEventListener("keydown", (e) => {
			this.#t(e), e.stopPropagation();
		});
	}
	#t(e) {
		if (!e.defaultPrevented && e.key == "Enter" && !e.isComposing && !e.altKey && !e.ctrlKey && !e.metaKey) {
			let t = e.composedPath().find((e) => e instanceof HTMLElement);
			if (this.#n(t)) {
				let t = this.#r();
				t && (e.preventDefault(), t.click());
			}
		}
	}
	#n(e) {
		let t = this.renderRoot instanceof ShadowRoot ? this.renderRoot : null, n = e ?? t?.activeElement;
		if (!n) return !0;
		let r = n.closest("input");
		if (!r) return !1;
		let i = (r.type || "text").toLowerCase();
		return Ec.has(i);
	}
	#r() {
		return this.renderRoot.querySelector("footer button[data-primary]:not(:disabled)");
	}
	firstUpdated() {
		this.#e = this.renderRoot.querySelector("dialog"), this.modal ? this.#e.showModal() : this.#e.show(), this.#i();
	}
	#i() {
		let e = this.renderRoot.querySelector("[autofocus]");
		e && (queueMicrotask(() => {
			this.isConnected && e.focus();
		}), requestAnimationFrame(() => {
			this.isConnected && e.focus();
		}));
	}
	finish(e) {
		this.dispatchEvent(new CustomEvent("gs-dialog-finished", {
			detail: e,
			bubbles: !0,
			composed: !0
		}));
	}
	#a(e) {
		e.preventDefault(), this.finish({
			ok: !1,
			reason: "cancel"
		}), this.triggerClose();
	}
	triggerClose() {
		this.#e.addEventListener("transitionend", () => {
			this.#e.close(), this.dispatchEvent(new CustomEvent("gs-dialog-closed", {
				bubbles: !0,
				composed: !0
			}));
		}), this.#e.classList.add("closing"), this.renderRoot.querySelector(".non-modal-backdrop")?.classList.add("closing");
	}
	onCloseButtonClick() {
		"requestClose" in this.#e ? this.#e.requestClose() : (this.finish({
			ok: !1,
			reason: "cancel"
		}), this.triggerClose());
	}
	renderHeader() {
		return R`${this.dialogTitle ? R`${this.dialogTitle}` : P}`;
	}
	renderBody() {
		return R``;
	}
	renderFooter() {
		let e = this.renderButtons();
		return e?.length ? R`<div>${e}</div>` : P;
	}
	renderButtons() {
		return [this.makeCloseButton()];
	}
	makeButton(e, t, n = {}) {
		let { iconDef: r, disabled: i = !1, preventMouseDown: a = !1, isPrimary: o = !1 } = n, s = e == "Next", c = ["btn"];
		return s && c.push("reverse"), o && c.push("btn-primary"), R`<button
            class=${c.join(" ")}
            type="button"
            title=${e}
            ?disabled=${i}
            ?data-primary=${o}
            @mousedown=${a ? (e) => e.preventDefault() : void 0}
            @click=${async () => {
			await t() || this.triggerClose();
		}}
        >
            ${r ? W(r).node[0] : P} ${e}
        </button>`;
	}
	makeCloseButton(e = "Close") {
		return this.makeButton(e, () => this.onCloseButtonClick(), { preventMouseDown: !0 });
	}
	render() {
		let e = this.renderHeader(), t = this.renderFooter();
		return R`
            ${this.modal ? P : R`<div class="non-modal-backdrop"></div>`}
            <dialog
                @cancel=${(e) => this.#a(e)}
            >
                ${e ? R`<header>${e}</header>` : P}
                <section>${this.renderBody()}</section>
                ${t ? R`<footer>${t}</footer>` : P}
            </dialog>
        `;
	}
};
function K(e, t) {
	return kc(e, t).promise;
}
function Dc(e, t, n) {
	return K(e, t).then(n);
}
function Oc(e, t) {
	return Dc(e, t, (e) => !!e.ok);
}
function kc(e, t) {
	let n = document.createElement(e);
	t && t(n);
	let r = new Promise((e) => {
		n.addEventListener("gs-dialog-finished", (t) => {
			e(t.detail);
		}, { once: !0 });
	});
	return n.addEventListener("gs-dialog-closed", () => {
		n.remove();
	}), document.body.appendChild(n), {
		element: n,
		promise: r
	};
}
//#endregion
//#region ../app/src/components/generic/messageDialog.js
var Ac = {
	warning: si,
	error: ui,
	info: Vr
}, jc = class extends G {
	static properties = {
		...super.properties,
		message: {},
		type: { type: String },
		confirm: { type: Boolean }
	};
	static styles = [...super.styles, L`
            .message-flex {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: calc(var(--gs-basic-spacing) * 2);
                padding: var(--gs-basic-spacing);
                box-sizing: border-box;
                max-width: 400px;
            }

            .icon svg {
                height: 3em;
            }
        `];
	constructor() {
		super(), this.message = "", this.type = "info", this.confirm = !1;
	}
	renderButtons() {
		return this.confirm ? [this.makeCloseButton("Cancel"), this.makeButton("OK", () => {
			this.finish({ ok: !0 }), this.triggerClose();
		}, { isPrimary: !0 })] : super.renderButtons();
	}
	renderBody() {
		if (this.type) {
			let e = Ac[this.type];
			return R`<div class="message-flex">
                ${e ? R`<div class="icon">${W(e).node[0]}</div>` : P}
                <div class="message">${this.message}</div>
            </div>`;
		} else return R`${this.message}`;
	}
};
customElements.define("gs-message-dialog", jc);
function q(e, t = {}) {
	return Oc("gs-message-dialog", (n) => {
		n.message = e, n.dialogTitle = t.title, n.type = t.type, n.confirm = t.confirm;
	});
}
//#endregion
//#region ../../node_modules/lit-html/directives/repeat.js
var Mc = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	for (let i = t; i <= n; i++) r.set(e[i], i);
	return r;
}, Nc = g(class extends n {
	constructor(e) {
		if (super(e), e.type !== j.CHILD) throw Error("repeat() can only be used in text expressions");
	}
	dt(e, t, n) {
		let r;
		n === void 0 ? n = t : t !== void 0 && (r = t);
		let i = [], a = [], o = 0;
		for (let t of e) i[o] = r ? r(t, o) : o, a[o] = n(t, o), o++;
		return {
			values: a,
			keys: i
		};
	}
	render(e, t, n) {
		return this.dt(e, t, n).values;
	}
	update(e, [t, n, r]) {
		let i = jt(e), { values: a, keys: o } = this.dt(t, n, r);
		if (!Array.isArray(i)) return this.ut = o, a;
		let s = this.ut ??= [], c = [], l, u, d = 0, f = i.length - 1, p = 0, m = a.length - 1;
		for (; d <= f && p <= m;) if (i[d] === null) d++;
		else if (i[f] === null) f--;
		else if (s[d] === o[p]) c[p] = Mt(i[d], a[p]), d++, p++;
		else if (s[f] === o[m]) c[m] = Mt(i[f], a[m]), f--, m--;
		else if (s[d] === o[m]) c[m] = Mt(i[d], a[m]), Rt(e, c[m + 1], i[d]), d++, m--;
		else if (s[f] === o[p]) c[p] = Mt(i[f], a[p]), Rt(e, i[d], i[f]), f--, p++;
		else if (l === void 0 && (l = Mc(o, p, m), u = Mc(s, d, f)), l.has(s[d])) if (l.has(s[f])) {
			let t = u.get(o[p]), n = t === void 0 ? null : i[t];
			if (n === null) {
				let t = Rt(e, i[d]);
				Mt(t, a[p]), c[p] = t;
			} else c[p] = Mt(n, a[p]), Rt(e, i[d], n), i[t] = null;
			p++;
		} else kt(i[f]), f--;
		else kt(i[d]), d++;
		for (; p <= m;) {
			let t = Rt(e, c[m + 1]);
			Mt(t, a[p]), c[p++] = t;
		}
		for (; d <= f;) {
			let e = i[d++];
			e !== null && kt(e);
		}
		return this.ut = o, It(e, c), xe;
	}
}), Pc = R`
    <div class="gs-alert info">
        ${W(Vr).node[0]}
        <span>
            <span
                style="float: right; cursor: pointer;"
                @click=${(e) => {
	e.target.closest(".gs-alert").style.display = "none";
}}
                >${W(ri).node[0]}</span
            >
            To create publication-quality images:
            <ol>
                <li>
                    Adjust the GenomeSpy window so the visualization and labels
                    appear as you want them.
                </li>
                <li>
                    Use the scale factor slider below to increase resolution.
                </li>
                <li>
                    Note: Smaller image dimensions with a higher scale factor
                    will produce relatively larger and clearer labels and
                    elements.
                </li>
            </ol>
        </span>
    </div>
`, Fc = class extends G {
	static properties = {
		...super.properties,
		genomeSpy: { type: Object },
		logicalWidth: { type: Number },
		logicalHeight: { type: Number },
		devicePixelRatio: { type: Number },
		imageWidth: { type: Number },
		imageHeight: { type: Number },
		transparentBackground: { type: Boolean },
		backgroundColor: { type: String }
	};
	static styles = [...super.styles, L`
            dialog {
                min-width: 500px;
            }
        `];
	constructor() {
		super(), this.genomeSpy = null, this.dialogTitle = "Save Visualization as PNG Image", this.devicePixelRatio = 2, this.logicalWidth = 800, this.logicalHeight = 600, this.imageWidth = 0, this.imageHeight = 0, this.transparentBackground = !1, this.backgroundColor = "#ffffff";
	}
	connectedCallback() {
		super.connectedCallback();
		let { width: e, height: t } = this.genomeSpy.getLogicalCanvasSize();
		this.logicalWidth = Ic(e), this.logicalHeight = Ic(t);
	}
	willUpdate(e) {
		if ([
			"logicalWidth",
			"logicalHeight",
			"devicePixelRatio"
		].some((t) => e.has(t))) {
			let e = this.devicePixelRatio;
			this.imageWidth = Math.round(this.logicalWidth * e), this.imageHeight = Math.round(this.logicalHeight * e);
		}
	}
	renderBody() {
		return R`
            ${Pc}

            <div class="gs-form-group">
                <label for="canvasDimensions">Visualization dimensions</label>
                <input
                    type="text"
                    id="canvasDimensions"
                    .value=${`${this.logicalWidth} x ${this.logicalHeight}`}
                    disabled
                />
            </div>

            <div class="gs-form-group">
                <label for="pngDevicePixelRatio">Scale factor</label>
                <div style="display: flex">
                    <input
                        type="range"
                        id="pngDevicePixelRatio"
                        min="0.5"
                        max="4"
                        step="0.5"
                        .value=${"" + this.devicePixelRatio}
                        @input=${Rc((e) => {
			this.devicePixelRatio = e.valueAsNumber;
		})}
                    />
                    <span style="width: 2em; margin-left: 0.5em"
                        >${this.devicePixelRatio}</span
                    >
                </div>
            </div>

            <div class="gs-form-group">
                <label for="pngDimensions">Image dimensions</label>
                <input
                    type="text"
                    id="pngDimensions"
                    .value=${`${this.imageWidth} x ${this.imageHeight}`}
                    disabled
                />
            </div>

            <div class="gs-form-group">
                <div class="label">Background</div>
                <div style="display: flex; align-items: center">
                    <label class="checkbox" style="margin-bottom: 0"
                        ><input
                            type="checkbox"
                            ?checked=${this.transparentBackground}
                            @change=${Rc((e) => {
			this.transparentBackground = e.checked;
		})}
                        />
                        Transparent</label
                    >
                    ${this.transparentBackground ? P : R`<input
                              type="color"
                              id="pngBackground"
                              style="margin-left: 1em"
                              .value=${this.backgroundColor}
                              @change=${Rc((e) => {
			this.backgroundColor = e.value;
		})}
                          />`}
                </div>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeCloseButton("Cancel"), this.makeButton("Save PNG", () => {
			this.#e(), this.finish({ ok: !0 }), this.triggerClose();
		}, {
			iconDef: qr,
			isPrimary: !0
		})];
	}
	#e() {
		let e = this.genomeSpy.exportCanvas(this.logicalWidth, this.logicalHeight, this.devicePixelRatio, this.transparentBackground ? null : this.backgroundColor), t = document.createElement("a");
		t.href = e, t.download = "genomespy-visualization.png", document.body.appendChild(t), t.click(), document.body.removeChild(t);
	}
};
customElements.define("gs-save-image-dialog", Fc);
function Ic(e) {
	return Math.round(e / 2) * 2;
}
function Lc(e) {
	return e.target;
}
function Rc(e) {
	return (t) => {
		e(Lc(t), t);
	};
}
//#endregion
//#region ../app/src/components/generic/searchableCheckboxList.js
var zc = class extends I {
	static properties = {
		items: { attribute: !1 },
		selectedValues: { attribute: !1 },
		placeholder: { type: String },
		selectedItemName: { type: String },
		itemMarker: { attribute: !1 },
		search: { state: !0 }
	};
	static styles = [
		wc,
		Tc,
		L`
            :host {
                display: flex;
                flex-direction: column;
                gap: var(--gs-basic-spacing, 0.5em);
            }

            /** Duplicates gs-form-group styles. TODO: Fix. */
            input[type="text"] {
                display: block;
                width: 100%;
                box-sizing: border-box;
                padding: 0.375em 0.75em;
                font-size: 1em;
                font-family: var(--font-family);
                line-height: 1.5;
                color: var(--form-control-color);
                background-color: #fff;
                background-clip: padding-box;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                transition:
                    border-color 0.15s ease-in-out,
                    box-shadow 0.15s ease-in-out;
            }

            input[type="text"]::placeholder {
                color: #a0a0a0;
            }

            .checkbox-list-wrapper {
                position: relative;
            }

            .search-note {
                position: absolute;
                inset: 0;
                display: grid;
                justify-content: center;
                align-content: center;

                color: #808080;
                font-size: 85%;

                pointer-events: none;

                > * {
                    position: relative;
                    top: 0.7em;
                }
            }

            .checkbox-list {
                color: var(--form-control-color);
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                overflow: auto;
                max-height: 200px;
                box-sizing: border-box;

                padding: 0.375em 0.75em;

                margin: 0;
            }

            .color {
                display: inline-block;
                width: 0.5em;
                height: 1em;
                margin-right: 0.3em;
            }

            li {
                list-style: none;
            }

            label.checkbox {
                display: block;

                &:hover {
                    background-color: #f4f4f4;
                }
            }

            small {
                display: block;
                color: #606060;
                text-box-edge: cap alphabetic;
                text-box-trim: trim-both;
            }
        `
	];
	constructor() {
		super(), this.items = [], this.selectedValues = [], this.placeholder = "Type something to filter the list", this.selectedItemName = "items", this.itemMarker = () => P, this.search = "";
	}
	getFilteredItems() {
		return this.items.filter((e) => {
			let t = e.searchText ?? e.label.toLowerCase();
			return this.search.length === 0 || t.includes(this.search);
		});
	}
	#e(e) {
		this.search = e.value.toLowerCase();
	}
	#t(e) {
		let t = e.target, n = new Set(this.selectedValues), r = this.items[+t.value];
		t.checked ? n.add(r.value) : n.delete(r.value), this.selectedValues = this.items.map((e) => e.value).filter((e) => n.has(e)), this.dispatchEvent(new Bc(this.selectedValues));
	}
	#n(e) {
		if (e.key == "ArrowDown") this.renderRoot.querySelector(".checkbox-list li:first-child input[type='checkbox']")?.focus(), e.preventDefault(), e.stopPropagation();
		else if (e.key == "Enter") {
			let t = this.getFilteredItems();
			if (t.length == 1) {
				let e = new Set(this.selectedValues);
				e.add(t[0].value), this.selectedValues = this.items.map((e) => e.value).filter((t) => e.has(t)), this.dispatchEvent(new Bc(this.selectedValues));
			}
			e.stopPropagation();
		}
	}
	#r(e) {
		let t = e.target;
		if (t.type == "checkbox") if (e.key == "ArrowDown") (t.closest("li").nextElementSibling?.querySelector("input[type='checkbox']"))?.focus(), e.preventDefault();
		else if (e.key == "ArrowUp") {
			let n = t.closest("li").previousElementSibling?.querySelector("input[type='checkbox']");
			n ? n.focus() : this.#i(), e.preventDefault();
		} else e.key == "Esc" ? (this.#i(), e.stopPropagation()) : e.key == "Tab" && !e.shiftKey ? this.renderRoot.querySelector(".checkbox-list li:last-child input")?.focus() : e.key == "Tab" && e.shiftKey && this.renderRoot.querySelector(".checkbox-list li:first-child input")?.focus();
	}
	focus(e) {
		this.#i(e);
	}
	#i(e) {
		this.renderRoot.querySelector("input[type='text']")?.focus(e);
	}
	updated() {
		let e = this.renderRoot.querySelector(".checkbox-list");
		e && (e.style.minHeight = `${e.offsetHeight}px`);
	}
	render() {
		let e = new Set(this.selectedValues), t = this.getFilteredItems();
		return R`
            <input
                autofocus
                type="text"
                placeholder=${this.placeholder}
                @keydown=${(e) => this.#n(e)}
                @input=${Rc((e) => this.#e(e))}
            />
            <div class="checkbox-list-wrapper">
                <ul
                    class="checkbox-list"
                    @input=${(e) => this.#t(e)}
                    @keydown=${(e) => this.#r(e)}
                >
                    ${Nc(t, (e) => e.value, (t) => R`<li>
                                <label class="checkbox">
                                    ${this.itemMarker(t.value)}
                                    <input
                                        type="checkbox"
                                        .checked=${e.has(t.value)}
                                        .value=${String(this.items.indexOf(t))}
                                    />
                                    ${t.label}
                                </label>
                            </li>`)}
                </ul>
                ${t.length == 0 ? R`<div class="search-note">
                          <div>Nothing found</div>
                      </div>` : t.length == 1 && this.items.length > 1 ? R`<div class="search-note">
                            <div>
                                ${W(ei).node[0]} Hit enter to select
                                the exact match
                            </div>
                        </div>` : P}
            </div>
            <small>
                The number of selected ${this.selectedItemName}:
                <strong>${e.size}</strong>
            </small>
        `;
	}
};
customElements.define("gs-searchable-checkbox-list", zc);
var Bc = class extends Event {
	values;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.values = e;
	}
}, Vc = [
	{
		value: "lt",
		label: "<",
		title: "less than"
	},
	{
		value: "lte",
		label: "≤",
		title: "less than or equal to"
	},
	{
		value: "eq",
		label: "=",
		title: "equal to"
	},
	{
		value: "gte",
		label: "≥",
		title: "greater than or equal to"
	},
	{
		value: "gt",
		label: ">",
		title: "greater than"
	}
], Hc = class extends I {
	static properties = {
		value: { type: String },
		options: { attribute: !1 }
	};
	static styles = [Tc, L`
            :host {
                display: block;
            }
        `];
	constructor() {
		super(), this.value = "lt", this.options = Vc;
	}
	#e(e) {
		this.value = e, this.dispatchEvent(new Uc(e));
	}
	render() {
		return R`<div class="btn-group" role="group">
            ${this.options.map((e) => R`<button
                        class=${_r({
			btn: !0,
			chosen: e.value === this.value
		})}
                        .value=${e.value}
                        @click=${() => this.#e(e.value)}
                        title=${e.title}
                    >
                        ${e.label}
                    </button>`)}
        </div>`;
	}
};
customElements.define("gs-comparison-operator-buttons", Hc);
var Uc = class extends Event {
	value;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.value = e;
	}
};
//#endregion
//#region ../core/src/utils/point.js
function Wc(e, t) {
	var n = e.getBoundingClientRect();
	return [t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop];
}
//#endregion
//#region ../app/src/components/generic/histogram.js
var Gc = L`
    :host {
        display: block;
        font-size: inherit;
        font-family: inherit;
    }

    .histogram-widget {
        position: relative;

        --grid-color: #333;
        --background-color: #f0f0f0;
    }

    .histogram-plot {
        position: relative;
    }

    .histogram-bars {
        position: relative;
        height: 4em;
        background-color: var(--background-color);

        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;
        overflow: hidden;

        > div {
            position: absolute;
            background-color: #808080;
        }
    }

    .histogram-thresholds {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
    }

    .histogram-threshold {
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: black;
    }

    .histogram-knob {
        --size: 1.2em;
        position: absolute;
        top: calc(var(--size) * -0.5);
        left: calc(0.5px - var(--size) * 0.5);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);

        background: black;
        color: white;

        font-size: 80%;
        text-align: center;
        vertical-align: middle;

        cursor: col-resize;
    }

    .histogram-domain {
        position: absolute;
        width: 100%;

        height: 0.5em;

        border: 1px solid var(--grid-color);
        border-bottom-style: none;
    }

    .histogram-extent {
        display: flex;
        justify-content: space-between;

        font-size: 90%;

        > div {
            margin: 0.1em 0.3em;
            margin-bottom: 0;
        }
    }

    .histogram-hint {
        position: absolute;
        inset: 0;
        font-size: 85%;

        display: flex;
        align-items: center;
        justify-content: center;

        pointer-events: none;

        opacity: 0;
        transition: opacity 0.3s;

        &.visible {
            opacity: 1;
        }

        span {
            position: relative;
            top: -30%;

            background-color: color-mix(
                in srgb,
                var(--background-color) 70%,
                transparent
            );
            color: #333;
            cursor: default;
        }
    }
`, Kc = class extends I {
	static properties = {
		values: { attribute: !1 },
		thresholds: { attribute: !1 },
		operators: { attribute: !1 },
		colors: { attribute: !1 },
		showThresholdNumbers: { type: Boolean },
		binCount: {
			type: Number,
			attribute: "bin-count"
		}
	};
	static styles = Gc;
	#e;
	#t;
	#n;
	#r = 0;
	constructor() {
		super(), this.values = [], this.thresholds = [], this.operators = [], this.colors = Zc, this.showThresholdNumbers = !1, this.binCount = 40, this.#e = dr().thresholds(this.binCount), this.#t = this.#e([]), this.#n = Be();
	}
	willUpdate(e) {
		e.has("binCount") && (this.#e = dr().thresholds(this.binCount)), (e.has("values") || e.has("binCount")) && (this.#t = this.#e(this.values), this.#n = Be().domain(this.domain).range([0, 100]));
	}
	get domain() {
		return [this.#t.at(0).x0, this.#t.at(-1).x1];
	}
	#i(e) {
		if (performance.now() < this.#r + 200) return;
		let t = e.target, n = Wc(t, e);
		this.#o("add", 0, n[0] / t.offsetWidth);
	}
	#a(e, t) {
		let n = e.target.closest(".histogram-threshold"), r = n.offsetLeft, i = n.offsetParent.offsetWidth;
		e.preventDefault(), e.stopPropagation(), this.style.cursor = "col-resize", Jc(e, (e, n) => {
			this.#o("adjust", t, (r + e) / i);
		}, () => {
			this.#r = performance.now(), this.style.cursor = "";
		});
	}
	#o(e, t, n) {
		n = St(n, 0, 1), this.dispatchEvent(new qc(e, t, +this.#n.invert(n * 100).toPrecision(3)));
	}
	#s() {
		let e = this.#t, t = this.#n, n = 90 / e.map((e) => e.length).reduce((e, t) => Math.max(e, t), 0), r = [], i = this.thresholds.length == 1 && this.operators[0] == "eq", a = [
			-Infinity,
			...this.thresholds,
			Infinity
		], o = [
			!1,
			...this.operators.map((e) => ["lte", "gt"].includes(e)),
			!0
		], s = ["gt", "gte"].includes(this.operators[0]) ? (e) => a.length - e - 2 : (e) => e;
		for (let c = 0; c < e.length; c++) {
			let l = e[c], u = t(l.x0), d = 0;
			if (i) for (let e = 0; e <= 1; e++) {
				let t = Xc(l, this.thresholds[0], e > 0);
				t && r.push({
					x: u,
					y: d * n,
					height: t * n,
					group: e
				}), d += t;
			}
			else if (this.thresholds.length) for (let e = 0; e < a.length - 1; e++) {
				let t = s(e), i = Yc(l, a[t], a[t + 1], !o[t], o[t + 1]);
				i && r.push({
					x: u,
					y: d * n,
					height: i * n,
					group: e
				}), d += i;
			}
			else {
				let e = l.length;
				e && r.push({
					x: u,
					y: d,
					height: e * n,
					group: null
				});
			}
		}
		return r;
	}
	render() {
		let e = this.#n, t = 100 / this.#t.length;
		return R`<div class="histogram-widget">
            <div class="histogram-plot">
                <div class="histogram-bars">${this.#s().map((e) => R`<div
                    style=${w({
			width: t + .01 + "%",
			left: e.x + "%",
			bottom: e.y + "%",
			height: e.height + "%",
			backgroundColor: typeof e.group == "number" ? this.colors[e.group % this.colors.length] : "default"
		})}
                ></div>`)}</div>
                <div class="histogram-thresholds" @click=${this.#i}>
                    ${this.thresholds.map((t, n) => {
			let r = e(t);
			return r >= 0 && r <= 100 ? R`<div
                                  class="histogram-threshold"
                                  style=${w({ left: e(t) + "%" })}
                              >
                                  <div
                                      class="histogram-knob"
                                      @mousedown=${(e) => this.#a(e, n)}
                                  >
                                      ${this.showThresholdNumbers ? n + 1 : P}
                                  </div>
                              </div>` : P;
		})}
                </div>
                <div
                    class=${_r({
			"histogram-hint": !0,
			visible: !this.thresholds.length
		})}
                >
                    <span>Click here to add a threshold!</span>
                </div>
            </div>
            <div class="histogram-domain"></div>
            <div class="histogram-extent">
                ${e.domain().map((e) => R`<div>${e}</div>`)}
            </div>
        </div>`;
	}
};
customElements.define("gs-histogram", Kc);
var qc = class extends Event {
	constructor(e, t, n) {
		super(e), this.index = t, this.value = n;
	}
};
function Jc(e, t, n) {
	let r = e.clientX, i = e.clientY, a = function(e) {
		t(e.clientX - r, e.clientY - i);
	}, o = function(e) {
		document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o), n?.(e.clientX - r, e.clientY - i);
	};
	document.addEventListener("mousemove", a), document.addEventListener("mouseup", o);
}
function Yc(e, t, n, r = !0, i = !1) {
	let a = r ? (e) => e >= t : (e) => e > t, o = i ? (e) => e <= n : (e) => e < n, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		a(n) && o(n) && s++;
	}
	return s;
}
function Xc(e, t, n = !1) {
	let r = 0;
	for (let n = 0; n < e.length; n++) r += +(e[n] == t);
	return n ? e.length - r : r;
}
var Zc = [
	"#1f77b4",
	"#ff7f0e",
	"#2ca02c",
	"#d62728",
	"#9467bd",
	"#8c564b"
];
//#endregion
//#region ../app/src/components/generic/thresholdComparisonInput.js
function Qc(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function $c(e) {
	return rl(e) ? [e] : [];
}
function el(e, t) {
	return rl(e) ? e : t;
}
var tl = class extends I {
	static properties = {
		values: { attribute: !1 },
		operator: { type: String },
		operand: { type: Number },
		autofocus: {
			type: Boolean,
			reflect: !0
		},
		placeholder: { type: String }
	};
	static styles = [Tc, L`
            :host {
                display: block;
            }

            .operator {
                margin-bottom: 1em;
            }

            input {
                margin-top: 0.5em;
            }
        `];
	constructor() {
		super(), this.values = [], this.operator = "lt", this.operand = void 0, this.autofocus = !1, this.placeholder = "... or enter a numeric value here";
	}
	get #e() {
		return this.values.filter(rl);
	}
	#t(e) {
		e.stopPropagation(), this.operator = e.value, this.#a();
	}
	#n(e) {
		let t = e.target.value, n = Qc(t);
		(n !== void 0 || t.trim() === "") && (this.operand = n, this.#a());
	}
	#r(e) {
		let t = el(this.operand, e.value);
		t !== this.operand && (this.operand = t, this.#a());
	}
	#i(e) {
		this.operand = e.value, this.#a();
	}
	#a() {
		this.dispatchEvent(new nl(this.operator, this.operand));
	}
	focus(e) {
		this.renderRoot.querySelector("input")?.focus(e);
	}
	render() {
		let e = this.#e;
		return R`
            <div class="gs-form-group">
                <gs-comparison-operator-buttons
                    class="operator"
                    .value=${this.operator}
                    @change=${(e) => this.#t(e)}
                ></gs-comparison-operator-buttons>

                ${e.length ? R`<gs-histogram
                          .values=${e}
                          .thresholds=${$c(this.operand)}
                          .operators=${[this.operator]}
                          .colors=${["#1f77b4", "#ddd"]}
                          .showThresholdNumbers=${!1}
                          @add=${(e) => this.#r(e)}
                          @adjust=${(e) => this.#i(e)}
                      ></gs-histogram>` : P}

                <input
                    type="number"
                    placeholder=${this.placeholder}
                    .value=${rl(this.operand) ? String(this.operand) : ""}
                    @input=${(e) => this.#n(e)}
                />
            </div>
        `;
	}
};
customElements.define("gs-threshold-comparison-input", tl);
var nl = class extends Event {
	operator;
	operand;
	constructor(e, t) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.operator = e, this.operand = t;
	}
};
function rl(e) {
	return typeof e == "number" && Number.isFinite(e);
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/advancedAttributeFilterDialog.js
var il = class extends G {
	static properties = {
		...super.properties,
		categories: {},
		attributeInfo: {},
		sampleView: {},
		categoryToMarker: {}
	};
	constructor() {
		super(), this.categories = [], this.attributeInfo = null, this.sampleView = null, this.categoryToMarker = () => P, this.selection = [];
	}
	willUpdate(e) {
		e.has("attributeInfo") && (this.dialogTitle = `Filter by ${this.attributeInfo.name}`);
	}
	renderBody() {
		return R`<div class="gs-form-group">
            <p>Select one or more categories and choose an action.</p>
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.categories}
                .selectedValues=${this.selection}
                .selectedItemName=${"categories"}
                .itemMarker=${this.categoryToMarker}
                @change=${(e) => {
			this.selection = e.values;
		}}
            ></gs-searchable-checkbox-list>
        </div>`;
	}
	renderButtons() {
		return [
			this.makeButton("Cancel", () => this.finish({ ok: !1 })),
			this.makeButton("Remove", () => this.#e(!0), { iconDef: vr }),
			this.makeButton("Retain", () => this.#e(!1), {
				iconDef: z,
				isPrimary: !0
			})
		];
	}
	#e(e) {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.filterByNominal({
			values: this.categories.map((e) => e.value).filter((e) => this.selection.includes(e)),
			attribute: this.attributeInfo.attribute,
			remove: e
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-discrete-attribute-filter-dialog", il);
var al = class extends G {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		operator: {},
		operand: {}
	};
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.operator = "lt", this.operand = void 0;
	}
	willUpdate(e) {
		e.has("attributeInfo") && (this.dialogTitle = `Filter by ${this.attributeInfo.name}`);
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		let e = En(this.attributeInfo, this.sampleView.leafSamples, this.sampleView.sampleHierarchy);
		return R`<div class="gs-form-group">
            <label
                >Retain samples where
                <em>${this.attributeInfo.name}</em> is</label
            >
            <gs-threshold-comparison-input
                autofocus
                .values=${e}
                .operator=${this.operator}
                .operand=${this.operand}
                @change=${(e) => this.#e(e)}
            ></gs-threshold-comparison-input>
        </div>`;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#t(), {
			iconDef: z,
			isPrimary: !0
		})];
	}
	#t() {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.filterByQuantitative({
			attribute: this.attributeInfo.attribute,
			operator: this.operator,
			operand: this.operand
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-quantitative-attribute-filter-dialog", al);
function ol(e, t) {
	let n = e.scale?.type;
	Et(n) ? cl(e, t) : it(n) || Ge(n) ? ul(e, t) : e.type === "identifier" ? sl(e, t) : q("Not implemented (yet).");
}
function sl(e, t) {
	ll(t.getSamples().map((e) => e.id), e, t);
}
function cl(e, t) {
	let n = e.scale;
	ll(n.domain(), e, t, (e) => R`<span
            class="color"
            style=${w({ backgroundColor: n(e).toString() })}
        ></span>`);
}
function ll(e, t, n, r = (e) => P) {
	let i = new Set(En(t, n.leafSamples, n.sampleHierarchy)), a = e.filter((e) => i.has(e)).map((e) => ({
		value: e,
		label: `${e}`,
		searchText: `${e}`.toLowerCase()
	}));
	return K("gs-discrete-attribute-filter-dialog", (e) => {
		e.categories = a, e.attributeInfo = t, e.sampleView = n, e.categoryToMarker = r;
	});
}
function ul(e, t) {
	return K("gs-quantitative-attribute-filter-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t;
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/groupByThresholdsDialog.js
var dl = class extends G {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		thresholds: {},
		groupTitles: {},
		validationError: {},
		values: {}
	};
	static styles = [...super.styles, L`
            .group-by-thresholds-form {
                width: 27em;
            }

            .group-color {
                display: inline-block;
                width: 0.7em;
                height: 0.7em;
            }

            .threshold-groups {
                margin-top: var(--gs-basic-spacing);

                text-align: left;
                font-size: 90%;

                :is(th, td) {
                    padding-right: 1em;

                    &:nth-child(2) {
                        min-width: 9em;
                    }
                }

                input[type="text"] {
                    width: 12em;
                    margin-bottom: 0;
                    padding-top: 0.2em;
                    padding-bottom: 0.2em;
                }
            }

            gs-histogram {
                margin-top: var(--gs-basic-spacing, 10px);
                margin-bottom: var(--gs-basic-spacing, 10px);
            }
        `];
	constructor() {
		super(), this.thresholds = [], this.groupTitles = [], this.validationError = void 0, this.attributeInfo = null, this.sampleView = null, this.values = [];
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this.dialogTitle = `Group by threshold on ${this.attributeInfo.name}`);
	}
	#e(e, t) {
		return t > 0 && (e = Math.max(e, this.thresholds[t - 1].operand)), t < this.thresholds.length - 1 && (e = Math.min(e, this.thresholds[t + 1].operand)), e;
	}
	#t() {
		let e = this.thresholds.length + 1;
		for (; this.groupTitles.length < e;) this.groupTitles.push("");
		this.groupTitles.length > e && (this.groupTitles.length = e);
	}
	#n(e) {
		return this.groupTitles[e] ?? "";
	}
	#r() {
		return Array.from({ length: this.thresholds.length + 1 }, (e, t) => this.#n(t));
	}
	#i(e, t) {
		let n = e.target.value;
		this.thresholds[t].operator = n, this.validationError = void 0, this.requestUpdate();
	}
	#a(e, t) {
		let n = e.target.value;
		/^\d+(\.\d+)?$/.test(n) && (this.thresholds[t].operand = this.#e(+n, t), this.validationError = void 0, this.requestUpdate());
	}
	#o(e, t) {
		this.groupTitles[t] = e.target.value, this.validationError = void 0, this.requestUpdate();
	}
	#s(e) {
		let t = this.thresholds.findIndex((t) => t.operand > e.value), n = t < 0 ? this.thresholds.length : t;
		this.#t(), this.thresholds.splice(n, 0, {
			operand: e.value,
			operator: "lt"
		}), this.groupTitles.splice(n + 1, 0, ""), this.validationError = void 0, this.requestUpdate();
	}
	#c(e) {
		this.thresholds[e.index].operand = this.#e(e.value, e.index), this.validationError = void 0, this.requestUpdate();
	}
	#l(e) {
		this.#t(), this.thresholds.splice(e, 1), this.groupTitles.splice(e + 1, 1), this.validationError = void 0, this.requestUpdate();
	}
	#u() {
		let e = this.#r().map((e) => e.trim());
		if (e.every((e) => !e)) return;
		let t = e.findIndex((e) => !e);
		if (t >= 0) throw Error(`Group ${t + 1} is missing a title.`);
		let n = /* @__PURE__ */ new Set();
		for (let t of e) {
			if (n.has(t)) throw Error(`Duplicate group title: "${t}".`);
			n.add(t);
		}
		return e;
	}
	renderBody() {
		return R`<div class="gs-form-group group-by-thresholds-form">
            ${this.validationError ? R`<div class="gs-alert danger">
                      ${W(wr).node[0]}
                      <span>${this.validationError}</span>
                  </div>` : P}

            <label>Split into groups using the thresholds:</label>

            <gs-histogram
                .values=${this.values}
                .thresholds=${this.thresholds.map((e) => e.operand)}
                .operators=${this.thresholds.map((e) => e.operator)}
                .showThresholdNumbers=${!0}
                @add=${(e) => this.#s(e)}
                @adjust=${(e) => this.#c(e)}
            ></gs-histogram>

            ${this.thresholds.map((e, t) => R` <div class="threshold-flex">
                        <select
                            .value=${e.operator}
                            @change=${(e) => this.#i(e, t)}
                        >
                            <option value="lt">${"<"}</option>
                            <option value="lte">${"≤"}</option>
                        </select>
                        <input
                            .value=${"" + e.operand}
                            type="text"
                            placeholder="Numeric value"
                            @input=${(e) => this.#a(e, t)}
                            @blur=${(e) => {
			e.target.value = "" + this.thresholds[t].operand;
		}}
                        />
                        <button
                            @click=${() => this.#l(t)}
                            class="btn"
                            title="Remove"
                        >
                            ${W(Br).node[0]}
                        </button>
                    </div>`)}
            ${this.thresholds.length ? R`<small>
                          The operator specifies whether the upper endpoint of
                          the interval (<em>i.e.</em>, the group) is exclusive
                          (&lt;) or inclusive(&le;).
                      </small>
                      ${(() => {
			let e = [
				{
					operand: -Infinity,
					operator: "lt"
				},
				...this.thresholds,
				{
					operand: Infinity,
					operator: "lte"
				}
			], t = Yt((e) => e, e), n = Array(e.length - 1).fill(0);
			for (let e of this.values) n[t(e) - 1]++;
			let r = [];
			for (let t = 1; t < e.length; t++) r.push({
				index: t - 1,
				name: t,
				interval: dn(e[t - 1], e[t]),
				n: n[t - 1]
			});
			return R`<table class="threshold-groups">
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Interval</th>
                        <th>n</th>
                        <th>Custom title</th>
                    </tr>
                </thead>
                <tbody>
                    ${r.map((e) => R`
                            <tr>
                                <td>
                                    <span
                                        class="group-color"
                                        style="background-color: ${Zc[e.index]}"
                                    ></span>
                                    ${e.name}
                                </td>
                                <td>${e.interval}</td>
                                <td>${e.n}</td>
                                <td>
                                    <input
                                        .value=${this.#n(e.index)}
                                        type="text"
                                        placeholder="Defaults to interval"
                                        @input=${(t) => this.#o(t, e.index)}
                                    />
                                </td>
                            </tr>
                        `)}
                </tbody>
            </table>`;
		})()}` : P}
        </div>`;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Group", () => this.#d(), {
			iconDef: Nr,
			isPrimary: !0
		})];
	}
	#d() {
		if (!this.thresholds.length) throw Error("At least one threshold is required.");
		let e;
		try {
			e = this.#u();
		} catch (e) {
			return this.validationError = e.message, this.requestUpdate(), !0;
		}
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.groupByThresholds({
			attribute: this.attributeInfo.attribute,
			thresholds: this.thresholds,
			...e ? { groupTitles: e } : {}
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-group-by-thresholds-dialog", dl);
function fl(e, t) {
	return K("gs-group-by-thresholds-dialog", (n) => {
		n.thresholds = [], n.groupTitles = [""], n.validationError = void 0, n.attributeInfo = e, n.sampleView = t, n.values = En(e, t.leafSamples, t.sampleHierarchy);
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/retainFirstNCategoriesDialog.js
var pl = class extends G {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		n: { type: Number }
	};
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.n = 5;
	}
	firstUpdated() {
		super.firstUpdated?.();
		let e = this.attributeInfo?.title ?? "attribute";
		this.dialogTitle = R`Retain first n categories of <em>${e}</em>`;
	}
	renderBody() {
		let e = this.attributeInfo?.title ?? "attribute";
		return R`
            <div class="gs-alert info">
                ${W(Vr).node[0]}
                <span>
                    Retain all samples from the first distinct
                    <em>${e}</em> values in the current sample order. Sort
                    samples first to control which values come first.
                </span>
            </div>
            <div class="gs-form-group">
                <label>Number of categories to retain:</label>
                <input
                    autofocus
                    type="number"
                    min="1"
                    .valueAsNumber=${this.n}
                    @change=${Rc((e) => {
			this.n = e.valueAsNumber;
		})}
                />
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => {
			this.finish({ ok: !1 });
		}), this.makeButton("Retain", () => this.#e(), {
			iconDef: z,
			isPrimary: !0
		})];
	}
	#e() {
		try {
			this.sampleView.dispatchAttributeAction(this.sampleView.actions.retainFirstNCategories({
				attribute: this.attributeInfo.attribute,
				n: this.n
			})), this.finish({
				ok: !0,
				data: { n: this.n }
			});
		} catch (e) {
			console.warn(e), this.finish({
				ok: !1,
				reason: "error"
			});
		}
	}
};
customElements.define("gs-retain-first-n-categories-dialog", pl);
function ml(e, t) {
	return K("gs-retain-first-n-categories-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t;
	});
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/retainCategoriesByAttributeDialog.js
var hl = class extends G {
	static properties = {
		...super.properties,
		categoryAttributeInfo: {},
		conditionAttributeInfo: {},
		sampleView: {},
		operator: {},
		operand: {},
		values: {},
		required: {}
	};
	static styles = [...super.styles, L`
            .retain-categories-form {
                width: 25em;
            }

            .gs-form-group {
                .requirement-row {
                    margin-top: var(--gs-basic-spacing);
                    display: grid;
                    gap: 0.2em;

                    label {
                        margin-bottom: 0;
                    }
                }
            }
        `];
	constructor() {
		super(), this.categoryAttributeInfo = null, this.conditionAttributeInfo = null, this.sampleView = null, this.operator = "gt", this.operand = void 0, this.values = [], this.required = "any";
	}
	willUpdate(e) {
		(e.has("categoryAttributeInfo") || e.has("conditionAttributeInfo")) && (this.dialogTitle = "Retain categories by condition");
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		return R`<div class="gs-form-group retain-categories-form">
            <p>
                Retain all ${this.categoryAttributeInfo.title} categories where
                ${this.conditionAttributeInfo.type === "quantitative" ? "at least one sample has" : "samples have"}
                ${this.conditionAttributeInfo.title} matching:
            </p>
            ${this.conditionAttributeInfo.type === "quantitative" ? this.#t() : this.#n()}
        </div>`;
	}
	#t() {
		return R`<gs-threshold-comparison-input
            autofocus
            .values=${En(this.conditionAttributeInfo, this.sampleView.leafSamples, this.sampleView.sampleHierarchy)}
            .operator=${this.operator}
            .operand=${this.operand}
            @change=${(e) => this.#e(e)}
        ></gs-threshold-comparison-input>`;
	}
	#n() {
		return R`
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.#a()}
                .selectedValues=${this.values}
                .selectedItemName=${"values"}
                .itemMarker=${this.#o()}
                @change=${(e) => {
			this.values = e.values;
		}}
            ></gs-searchable-checkbox-list>
            <div class="requirement-row">
                <label>
                    <input
                        type="radio"
                        name="required"
                        value="any"
                        .checked=${this.required === "any"}
                        @change=${() => {
			this.required = "any";
		}}
                    />
                    Any selected value exists
                </label>
                <label>
                    <input
                        type="radio"
                        name="required"
                        value="all"
                        .checked=${this.required === "all"}
                        @change=${() => {
			this.required = "all";
		}}
                    />
                    All selected values exist
                </label>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#i(), {
			iconDef: z,
			isPrimary: !0,
			disabled: this.#r()
		})];
	}
	#r() {
		return this.conditionAttributeInfo?.type === "quantitative" ? !rl(this.operand) : this.values.length === 0;
	}
	#i() {
		let e;
		if (this.conditionAttributeInfo.type === "quantitative") {
			if (!rl(this.operand)) throw Error("Quantitative category condition is missing a value.");
			e = {
				attribute: this.conditionAttributeInfo.attribute,
				operator: this.operator,
				operand: this.operand
			};
		} else e = {
			attribute: this.conditionAttributeInfo.attribute,
			operator: "in",
			values: this.values,
			required: this.required
		};
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.retainCategoriesByAttribute({
			attribute: this.categoryAttributeInfo.attribute,
			condition: e
		})), this.finish({ ok: !0 });
	}
	#a() {
		return _l(this.conditionAttributeInfo, this.sampleView).map((e) => ({
			value: e,
			label: `${e}`,
			searchText: `${e}`.toLowerCase()
		}));
	}
	#o() {
		let e = this.conditionAttributeInfo.scale;
		return e ? (t) => R`<span
                class="color"
                style=${w({ backgroundColor: e(t).toString() })}
            ></span>` : () => P;
	}
};
customElements.define("gs-retain-categories-by-attribute-dialog", hl);
function gl(e, t, n) {
	return K("gs-retain-categories-by-attribute-dialog", (r) => {
		r.categoryAttributeInfo = e, r.conditionAttributeInfo = t, r.sampleView = n, r.operator = "gt", r.operand = void 0, r.values = [], r.required = "any";
	});
}
function _l(e, t) {
	let n = e.scale?.domain?.();
	return Array.isArray(n) ? n.filter((n) => vl(e, t).has(n)) : Array.from(vl(e, t));
}
function vl(e, t) {
	return new Set(En(e, t.leafSamples, t.sampleHierarchy));
}
//#endregion
//#region ../../node_modules/lit-html/directives/map.js
function* yl(e, t) {
	if (e !== void 0) {
		let n = 0;
		for (let r of e) yield t(r, n++);
	}
}
//#endregion
//#region ../../node_modules/lit-html/directives/join.js
function* bl(e, t) {
	let n = typeof t == "function";
	if (e !== void 0) {
		let r = -1;
		for (let i of e) r > -1 && (yield n ? t(r) : t), r++, yield i;
	}
}
//#endregion
//#region ../app/src/sampleView/attributeFormatting.js
function xl(e) {
	return e.shortTitle ? R`<em class="attribute">${e.shortTitle}</em>` : e.emphasizedName;
}
//#endregion
//#region ../app/src/sampleView/state/actionInfo.js
var Sl = Le(".4"), Cl = {
	lt: "<",
	lte: "≤",
	eq: "=",
	gte: "≥",
	gt: ">"
};
function wl(e, t = !0) {
	let n = Array.from(e, (e, t) => R`${t > 0 ? ", " : ""}<strong>${e}</strong>`);
	return t ? R`{${n}}` : R`${n}`;
}
function Tl(e) {
	let t = e.slice(0, 3).map((e) => R`<em>${e}</em>`);
	return t.length === 1 ? R`${t[0]}` : t.length === 2 ? R`${t[0]} and ${t[1]}` : R`${t[0]}, ${t[1]}, and ${t[2]}`;
}
var El = {
	setSamples: ({ template: e }) => ({
		...e,
		title: "Set samples",
		icon: oi
	}),
	addMetadata: ({ template: e, payload: t }) => ({
		...e,
		title: t.replace ? "Set metadata" : "Add metadata",
		icon: Sr
	}),
	deriveMetadata: ({ template: e, payload: t, attributeTitle: n }) => {
		let r = t.groupPath ? t.groupPath + "/" + t.name : t.name, i = n ?? "attribute";
		return {
			...e,
			title: "Add derived metadata",
			provenanceTitle: R`Add derived metadata
                <strong>${r}</strong> from ${i}`,
			icon: Sr
		};
	},
	addMetadataFromSource: ({ template: e, payload: t }) => {
		let n = Array.isArray(t.columnIds) ? t.columnIds : [], r = t.sourceId ? R` from <strong>${t.sourceId}</strong> source` : "", i = n.length === 1 ? "attribute" : "attributes", a = n.length > 0 && n.length <= 3 ? Tl(n) : R`<strong>${n.length}</strong> ${i}`;
		return {
			...e,
			title: "Import metadata from source",
			provenanceTitle: R`Import ${a}${r}`,
			icon: Sr
		};
	},
	sortBy: ({ payload: e, template: t, attributeTitle: n }) => {
		let r = e.order ?? "descending";
		return {
			...t,
			title: "Sort " + r,
			provenanceTitle: R` Sort by ${n}, ${r} `,
			icon: r === "ascending" ? Jr : Mr
		};
	},
	retainFirstOfEach: ({ template: e, attributeName: t, attributeTitle: n }) => ({
		...e,
		title: R` Retain the first sample for each ${t} `,
		provenanceTitle: R`
            Retain the first sample for each ${n}
        `,
		icon: Zr
	}),
	retainFirstNCategories: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => ({
		...t,
		title: R`
            Retain first <strong>n</strong> categories of ${n}...
        `,
		provenanceTitle: R`
            Retain first <strong>${e.n}</strong> categories of
            ${r}
        `,
		icon: Zr
	}),
	filterByNominal: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => {
		let i = e.values, a = (t) => R`
            ${e.remove ? "Remove" : "Retain"} samples having
            ${i[0] === void 0 || i[0] === null ? R` undefined ${t} ` : R`${t}
                  ${i.length > 1 ? R`in ${wl(i)}` : R`<span class="operator">=</span>
                            <strong>${i[0]}</strong>`} `}
        `;
		return {
			...t,
			title: a(n),
			provenanceTitle: a(r),
			icon: e.remove ? vr : z
		};
	},
	filterByQuantitative: ({ payload: e, template: t, attributeName: n, attributeTitle: r }) => {
		let i = (t) => R`
            Retain samples having ${t}
            <span class="operator"
                >${Cl[e.operator]}</span
            >
            <strong>${Sl(e.operand)}</strong>
        `;
		return {
			...t,
			title: i(n),
			provenanceTitle: i(r),
			icon: z
		};
	},
	retainCategoriesByAttribute: ({ payload: e, template: t, attributeName: n, attributeTitle: r, conditionAttributeName: i, conditionAttributeTitle: a }) => {
		let o = e.condition, s;
		return s = o.operator === "in" && o.required === "all" ? (e, t) => R`
                Retain ${e} values where samples include all ${t}
                values in ${wl(o.values)}
            ` : (e, t) => R`
                Retain ${e} values where any sample has ${t}
                ${Dl(o)}
            `, {
			...t,
			title: s(n, i),
			provenanceTitle: s(r, a),
			icon: z
		};
	},
	removeUndefined: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Remove samples having missing attribute",
		provenanceTitle: R`
            Remove samples having missing ${t}
        `,
		icon: vr
	}),
	groupCustomCategories: ({ payload: e, template: t, attributeTitle: n }) => {
		let r = e.groups, i = R`Create custom groups based on
        ${n}.
        ${yl(Object.entries(r), ([e, t], n) => R`${n > 0 ? ", " : ""}<strong>${e}</strong> =
                    ${wl(t)}`)}`;
		return {
			...t,
			title: "Group arbitrarily...",
			provenanceTitle: i,
			icon: Nr
		};
	},
	groupByNominal: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Group by",
		provenanceTitle: R` Group by ${t} `,
		icon: Nr
	}),
	groupToQuartiles: ({ template: e, attributeTitle: t }) => ({
		...e,
		title: "Group by quartiles",
		provenanceTitle: R` Group by quartiles on ${t} `,
		icon: Nr
	}),
	groupByThresholds: ({ payload: e, template: t, attributeTitle: n }) => ({
		...t,
		title: "Group by thresholds",
		provenanceTitle: R`
            Group by thresholds
            ${wl(e.thresholds.map((e) => `${Cl[e.operator]} ${e.operand}`))}
            ${e.groupTitles ? R` as
                      ${wl(e.groupTitles)}` : ""}
            on ${n}
        `,
		icon: Nr
	}),
	removeGroup: ({ payload: e }) => ({
		title: "Remove group",
		provenanceTitle: R`
            Remove group
            ${bl(e.path.map((e) => R`<strong>${e}</strong>`), " / ")}
        `,
		icon: vr
	}),
	retainGroupsByRank: ({ payload: e }) => {
		let t = e.order === "descending" ? "largest" : "smallest";
		return {
			title: "Retain top/bottom-k groups by size",
			provenanceTitle: R`
                Retain the
                <strong>${e.limit}</strong>
                <strong>${t}</strong>
                groups by size at level
                <strong>${e.level}</strong>
            `,
			icon: z
		};
	},
	retainGroupsBySize: ({ payload: e }) => ({
		title: "Retain groups by size threshold",
		provenanceTitle: R`
            Retain groups at level
            <strong>${e.level}</strong>
            where size
            <span class="operator"
                >${Cl[e.operator]}</span
            >
            <strong>${Sl(e.operand)}</strong>
        `,
		icon: z
	}),
	ungroup: ({ payload: e }) => ({
		title: "Ungroup",
		provenanceTitle: R`
            Ungroup from level
            <strong>${e.level}</strong>
        `,
		icon: Nr
	}),
	retainMatched: ({ template: e, attributeName: t, attributeTitle: n }) => ({
		...e,
		title: "Retain values present in all groups",
		provenanceTitle: R`
            Retain ${n} values present in all groups
        `,
		icon: z
	})
};
function Dl(e) {
	return e.operator === "in" ? R`in ${wl(e.values)}` : R`
            <span class="operator">${Cl[e.operator]}</span>
            <strong>${Sl(e.operand)}</strong>
        `;
}
function Ol(e, t) {
	if (!e.type.startsWith("sampleView")) return;
	let n = e.payload && typeof e.payload == "object" ? e.payload : {}, r = (e) => {
		if (!e) return {};
		try {
			let n = t(e), r = e && typeof e == "object" && "specifier" in e && typeof e.specifier == "string" ? R` <em>${e.specifier}</em> ` : void 0, i = n ? xl(n) : r;
			return {
				attributeInfo: n,
				attributeName: i,
				attributeTitle: n?.title ?? i
			};
		} catch {
			let t = e && typeof e == "object" && "specifier" in e && typeof e.specifier == "string" ? R` <em>${e.specifier}</em> ` : void 0;
			return {
				attributeInfo: void 0,
				attributeName: t,
				attributeTitle: t
			};
		}
	}, { attributeName: i, attributeTitle: a } = r("attribute" in n && n.attribute ? n.attribute : null), { attributeName: o, attributeTitle: s } = r("condition" in n && n.condition && typeof n.condition == "object" && "attribute" in n.condition ? n.condition.attribute : null), c = { attributeName: i }, l = e.type.substring(pn.length + 1), u = El[l];
	return u ? u({
		payload: n,
		template: c,
		attributeName: i,
		attributeTitle: a,
		conditionAttributeName: o,
		conditionAttributeTitle: s
	}) : {
		...c,
		title: l,
		provenanceTitle: l,
		icon: Pr
	};
}
//#endregion
//#region ../app/src/sampleView/attributeDialogs/createCustomGroupsDialog.js
var kl = L`
    .group-arbitrarily-form {
        span.na {
            color: gray;
            font-style: italic;
            font-size: 90%;
        }

        span.color {
            display: inline-block;
            width: 0.7em;
            height: 1em;
            margin-right: 0.7em;
        }

        div.table {
            color: var(--form-control-color);
            border: var(--form-control-border);
            border-radius: var(--form-control-border-radius);
            overflow-x: auto;
            max-height: 20em;

            padding: 0.375em 0.75em;
            padding-top: 0;

            margin: 0;

            table {
                position: relative;
                border-collapse: collapse;
            }

            td:first-child {
                padding-right: 0.7em;
            }

            th {
                text-align: left;
                background: white;
                background: linear-gradient(
                    rgba(255, 255, 255, 1) 0%,
                    rgba(253, 253, 255, 1) 90%,
                    rgba(255, 255, 255, 0) 100%
                );

                position: sticky;
                top: 0;

                padding-top: 0.55em;
                padding-bottom: 0.375em;
            }
        }

        &.gs-form-group select {
            padding-top: 0.1em;
            padding-bottom: 0.1em;
        }
    }
`, Al = class extends G {
	static properties = {
		...super.properties,
		attributeInfo: {},
		sampleView: {},
		values: {},
		groups: {}
	};
	static styles = [...super.styles, kl];
	constructor() {
		super(), this.attributeInfo = null, this.sampleView = null, this.values = [], this.groups = {};
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this.dialogTitle = R`Create custom groups using
                <em>${this.attributeInfo.name}</em>`);
	}
	#e(e, t) {
		for (let [t, n] of Object.entries(this.groups)) if (n.includes(e)) {
			let r = n.indexOf(e);
			n.splice(r, 1), n.length === 0 && delete this.groups[t];
		}
		t && (t in this.groups ? this.groups[t].push(e) : this.groups[t] = [e], this.requestUpdate());
	}
	#t(e, t) {
		let n = "", r = (e) => n = e.target.value;
		q(R`<div class="gs-form-group">
                <input
                    type="text"
                    id="group-name"
                    @change=${r}
                    @keydown=${r}
                />
            </div>`, {
			confirm: !0,
			title: "Group name"
		}).then((r) => {
			n = n.trim(), r && n.length > 0 ? this.#e(e, n) : t && (t.value = ""), t?.focus();
		});
	}
	#n(e, t = "", n = "") {
		let r = R` <p>
                Select a large number of ${e} by pasting them into the text
                area below. The ${e} should be separated by a newline.
            </p>
            <div class="gs-form-group">
                <label for="paste-group-name">Group name</label>
                <input
                    type="text"
                    id="paste-group-name"
                    placeholder="New or existing group name"
                    .value=${t}
                    required
                    @change=${(e) => t = e.target.value}
                />

                <label for="paste-group-categories">${Nl(e)}</label>
                <textarea
                    id="paste-group-categories"
                    placeholder="Type or paste ${e} here, one per line"
                    .value=${n}
                    required
                    rows="8"
                    @change=${(e) => n = e.target.value}
                ></textarea>
            </div>`, i = async () => {
			if (t.trim().length === 0) return await q("Please enter a group name.", {
				title: "There's a problem",
				type: "warning"
			}), !0;
			let r = n.split(/[\r\n]+/g).map((e) => e.trim()).filter((e) => e.length > 0), i = /* @__PURE__ */ new Set();
			for (let e of r) this.values.includes(e) || i.add(e);
			if (i.size > 0) return await q(R`The following ${e} were not found:
                    ${wl(i, !1)}`, {
				title: "There's a problem",
				type: "warning"
			}), !0;
			for (let e of r) this.#e(e, t);
		};
		q(r, {
			title: `Paste ${e}`,
			confirm: !0
		}).then(async (r) => {
			r && await i() && this.#n(e, t, n);
		});
	}
	#r(e, t) {
		let n = t.target, r = n.value;
		r === "__newGroup__" ? this.#t(e, n) : this.#e(e, r);
	}
	renderBody() {
		let e = this.attributeInfo, t = e.type == "identifier" ? "Identifier" : "Category", n = e.scale, r = n ? (e) => R`<span
                      class="color"
                      style=${w({ backgroundColor: n(e)?.toString() ?? "inherit" })}
                  ></span>` : () => P, i = un((e) => e, this.groups), a = Object.keys(this.groups);
		return R`
            <div class="gs-alert info">
                ${W(Vr).node[0]}
                <span>
                    Define custom groups by collecting multiple categories or
                    identifiers under a single label. Each category or
                    identifier you assign determines how samples are grouped.
                </span>
            </div>
            <div class="gs-form-group group-arbitrarily-form">
                <div class="table">
                    <table>
                        <tr>
                            <th>${t}</th>
                            <th>Group</th>
                        </tr>
                        ${yl(this.values, (e) => {
			let t = i(e);
			return R`<tr>
                <td>
                    ${e == null ? R`<span class="na">NA</span>` : R`${r(e)}${e}`}
                </td>
                <td>
                    <select
                        @change=${(t) => this.#r(e, t)}
                        @keydown=${(e) => e.stopPropagation()}
                    >
                        <option .selected=${!t} value="">
                            - No group -
                        </option>
                        ${yl(a, (e) => R`<option
                                    .selected=${e === t}
                                    value=${e}
                                >
                                    ${e}
                                </option>`)}
                        <hr />
                        <option value="__newGroup__">Create new group</option>
                    </select>
                </td>
            </tr>`;
		})}
                    </table>
                </div>
            </div>
        `;
	}
	renderButtons() {
		let e = this.attributeInfo.type == "identifier" ? "identifiers" : "categories";
		return [
			this.makeButton("Paste " + e, () => (this.#n(e), !0), { iconDef: xr }),
			this.makeButton("Cancel", () => this.finish({ ok: !1 })),
			this.makeButton("Group", () => this.#i(), {
				iconDef: Nr,
				isPrimary: !0
			})
		];
	}
	#i() {
		this.sampleView.dispatchAttributeAction(this.sampleView.actions.groupCustomCategories({
			attribute: this.attributeInfo.attribute,
			groups: this.groups
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-create-custom-groups-dialog", Al);
function jl(e, t) {
	return K("gs-create-custom-groups-dialog", (n) => {
		n.attributeInfo = e, n.sampleView = t, n.values = Ml(e, t.leafSamples, t.sampleHierarchy), n.groups = {};
	});
}
function Ml(e, t, n) {
	let r = e.accessor, i = new Set(t.map((e) => r(e, n)));
	return Array.from(i).sort();
}
function Nl(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Pl = Math.min, Fl = Math.max, Il = Math.round, Ll = Math.floor, Rl = (e) => ({
	x: e,
	y: e
}), zl = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Bl(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Vl(e) {
	return e.split("-")[0];
}
function Hl(e) {
	return e.split("-")[1];
}
function Ul(e) {
	return e === "x" ? "y" : "x";
}
function Wl(e) {
	return e === "y" ? "height" : "width";
}
function Gl(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Kl(e) {
	return Ul(Gl(e));
}
function ql(e, t, n) {
	n === void 0 && (n = !1);
	let r = Hl(e), i = Kl(e), a = Wl(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = nu(o)), [o, nu(o)];
}
function Jl(e) {
	let t = nu(e);
	return [
		Yl(e),
		t,
		Yl(t)
	];
}
function Yl(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Xl = ["left", "right"], Zl = ["right", "left"], Ql = ["top", "bottom"], $l = ["bottom", "top"];
function eu(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Zl : Xl : t ? Xl : Zl;
		case "left":
		case "right": return t ? Ql : $l;
		default: return [];
	}
}
function tu(e, t, n, r) {
	let i = Hl(e), a = eu(Vl(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Yl)))), a;
}
function nu(e) {
	let t = Vl(e);
	return zl[t] + e.slice(t.length);
}
function ru(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function iu(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : ru(e);
}
function au(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ou(e, t, n) {
	let { reference: r, floating: i } = e, a = Gl(t), o = Kl(t), s = Wl(o), c = Vl(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (Hl(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function su(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Bl(t, e), p = iu(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = au(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = au(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var cu = 50, lu = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: su
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ou(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < cu && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ou(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, uu = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Bl(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Vl(r), _ = Gl(o), v = Vl(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [nu(o)] : Jl(o)), x = p !== "none";
			!d && x && b.push(...tu(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ql(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Gl(t)) || T.every((e) => Gl(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = Gl(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, du = /*#__PURE__*/ new Set(["left", "top"]);
async function fu(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Vl(n), s = Hl(n), c = Gl(n) === "y", l = du.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Bl(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var pu = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await fu(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
};
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function mu() {
	return typeof window < "u";
}
function hu(e) {
	return vu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gu(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _u(e) {
	return ((vu(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function vu(e) {
	return mu() ? e instanceof Node || e instanceof gu(e).Node : !1;
}
function yu(e) {
	return mu() ? e instanceof Element || e instanceof gu(e).Element : !1;
}
function bu(e) {
	return mu() ? e instanceof HTMLElement || e instanceof gu(e).HTMLElement : !1;
}
function xu(e) {
	return !mu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof gu(e).ShadowRoot;
}
function Su(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Nu(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Cu(e) {
	return /^(table|td|th)$/.test(hu(e));
}
function wu(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Tu = /transform|translate|scale|rotate|perspective|filter/, Eu = /paint|layout|strict|content/, Du = (e) => !!e && e !== "none", Ou;
function ku(e) {
	let t = yu(e) ? Nu(e) : e;
	return Du(t.transform) || Du(t.translate) || Du(t.scale) || Du(t.rotate) || Du(t.perspective) || !ju() && (Du(t.backdropFilter) || Du(t.filter)) || Tu.test(t.willChange || "") || Eu.test(t.contain || "");
}
function Au(e) {
	let t = Fu(e);
	for (; bu(t) && !Mu(t);) {
		if (ku(t)) return t;
		if (wu(t)) return null;
		t = Fu(t);
	}
	return null;
}
function ju() {
	return Ou ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ou;
}
function Mu(e) {
	return /^(html|body|#document)$/.test(hu(e));
}
function Nu(e) {
	return gu(e).getComputedStyle(e);
}
function Pu(e) {
	return yu(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Fu(e) {
	if (hu(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || xu(e) && e.host || _u(e);
	return xu(t) ? t.host : t;
}
function Iu(e) {
	let t = Fu(e);
	return Mu(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bu(t) && Su(t) ? t : Iu(t);
}
function Lu(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = Iu(e), i = r === e.ownerDocument?.body, a = gu(r);
	if (i) {
		let e = Ru(a);
		return t.concat(a, a.visualViewport || [], Su(r) ? r : [], e && n ? Lu(e) : []);
	} else return t.concat(r, Lu(r, [], n));
}
function Ru(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function zu(e) {
	let t = Nu(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = bu(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Il(n) !== a || Il(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Bu(e) {
	return yu(e) ? e : e.contextElement;
}
function Vu(e) {
	let t = Bu(e);
	if (!bu(t)) return Rl(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = zu(t), o = (a ? Il(n.width) : n.width) / r, s = (a ? Il(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var Hu = /*#__PURE__*/ Rl(0);
function Uu(e) {
	let t = gu(e);
	return !ju() || !t.visualViewport ? Hu : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Wu(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== gu(e) ? !1 : t;
}
function Gu(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Bu(e), o = Rl(1);
	t && (r ? yu(r) && (o = Vu(r)) : o = Vu(e));
	let s = Wu(a, n, r) ? Uu(a) : Rl(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = gu(a), t = r && yu(r) ? gu(r) : r, n = e, i = Ru(n);
		for (; i && r && t !== n;) {
			let e = Vu(i), t = i.getBoundingClientRect(), r = Nu(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = gu(i), i = Ru(n);
		}
	}
	return au({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ku(e, t) {
	let n = Pu(e).scrollLeft;
	return t ? t.left + n : Gu(_u(e)).left + n;
}
function qu(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ku(e, n),
		y: n.top + t.scrollTop
	};
}
function Ju(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = _u(r), s = t ? wu(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Rl(1), u = Rl(0), d = bu(r);
	if ((d || !d && !a) && ((hu(r) !== "body" || Su(o)) && (c = Pu(r)), d)) {
		let e = Gu(r);
		l = Vu(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? qu(o, c) : Rl(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Yu(e) {
	return Array.from(e.getClientRects());
}
function Xu(e) {
	let t = _u(e), n = Pu(e), r = e.ownerDocument.body, i = Fl(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Fl(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Ku(e), s = -n.scrollTop;
	return Nu(r).direction === "rtl" && (o += Fl(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Zu = 25;
function Qu(e, t) {
	let n = gu(e), r = _u(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = ju();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Ku(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Zu && (a -= o);
	} else l <= Zu && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function $u(e, t) {
	let n = Gu(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = bu(e) ? Vu(e) : Rl(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ed(e, t, n) {
	let r;
	if (t === "viewport") r = Qu(e, n);
	else if (t === "document") r = Xu(_u(e));
	else if (yu(t)) r = $u(t, n);
	else {
		let n = Uu(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return au(r);
}
function td(e, t) {
	let n = Fu(e);
	return n === t || !yu(n) || Mu(n) ? !1 : Nu(n).position === "fixed" || td(n, t);
}
function nd(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Lu(e, [], !1).filter((e) => yu(e) && hu(e) !== "body"), i = null, a = Nu(e).position === "fixed", o = a ? Fu(e) : e;
	for (; yu(o) && !Mu(o);) {
		let t = Nu(o), n = ku(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || Su(o) && !n && td(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Fu(o);
	}
	return t.set(e, r), r;
}
function rd(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? wu(t) ? [] : nd(t, this._c) : [].concat(n), r], o = ed(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ed(t, a[e], i);
		s = Fl(n.top, s), c = Pl(n.right, c), l = Pl(n.bottom, l), u = Fl(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function id(e) {
	let { width: t, height: n } = zu(e);
	return {
		width: t,
		height: n
	};
}
function ad(e, t, n) {
	let r = bu(t), i = _u(t), a = n === "fixed", o = Gu(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Rl(0);
	function l() {
		c.x = Ku(i);
	}
	if (r || !r && !a) if ((hu(t) !== "body" || Su(i)) && (s = Pu(t)), r) {
		let e = Gu(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? qu(i, s) : Rl(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function od(e) {
	return Nu(e).position === "static";
}
function sd(e, t) {
	if (!bu(e) || Nu(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return _u(e) === n && (n = n.ownerDocument.body), n;
}
function cd(e, t) {
	let n = gu(e);
	if (wu(e)) return n;
	if (!bu(e)) {
		let t = Fu(e);
		for (; t && !Mu(t);) {
			if (yu(t) && !od(t)) return t;
			t = Fu(t);
		}
		return n;
	}
	let r = sd(e, t);
	for (; r && Cu(r) && od(r);) r = sd(r, t);
	return r && Mu(r) && od(r) && !ku(r) ? n : r || Au(e) || n;
}
var ld = async function(e) {
	let t = this.getOffsetParent || cd, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: ad(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ud(e) {
	return Nu(e).direction === "rtl";
}
var dd = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ju,
	getDocumentElement: _u,
	getClippingRect: rd,
	getOffsetParent: cd,
	getElementRects: ld,
	getClientRects: Yu,
	getDimensions: id,
	getScale: Vu,
	isElement: yu,
	isRTL: ud
};
function fd(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pd(e, t) {
	let n = null, r, i = _u(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Ll(d), h = Ll(i.clientWidth - (u + f)), g = Ll(i.clientHeight - (d + p)), _ = Ll(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Fl(0, Pl(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !fd(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function md(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Bu(e), u = i || a ? [...l ? Lu(l) : [], ...t ? Lu(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? pd(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Gu(e) : null;
	c && g();
	function g() {
		let t = Gu(e);
		h && !fd(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var hd = pu, gd = uu, _d = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: dd,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return lu(e, t, {
		...i,
		platform: a
	});
}, vd, yd = [], bd = ge((e) => e(), 150, !1), xd = { type: "divider" };
function Sd(e) {
	if (e?.type == "contextmenu") {
		e.preventDefault();
		return;
	}
	vd && (vd.remove(), vd = void 0, document.body.classList.remove(le), document.body.classList.remove(_e));
}
function Cd(e) {
	if (!(e < 1)) {
		for (let t = e; t < yd.length; t++) yd[t]?.remove(), yd[t] = void 0;
		for (let t of yd[e - 1].querySelectorAll("li.active")) t.classList.remove("active");
	}
}
var wd = () => R`<li class="menu-divider"></li>`, Td = (e) => R`
    <li class="menu-header">${e.label || "-"}</li>
`, Ed = (e, t) => R`
    <li>
        <div
            class="submenu-item"
            @mouseenter=${(n) => bd(() => {
	Dd(e, n.target.closest("li"), t + 1), n.stopPropagation();
})}
            @mouseleave=${() => bd(() => Cd(t + 1))}
        >
            ${e.customContent ? e.customContent : R`<span
                      >${e.icon ? W(e.icon).node[0] : P}
                      ${e.label}</span
                  >`}
        </div>
    </li>
`;
async function Dd(e, t, n) {
	try {
		let r = typeof e.submenu == "function" ? e.submenu() : e.submenu;
		if (r instanceof Promise) {
			jd([{ label: "Loading..." }], t, n);
			let e = await r;
			if (!t.isConnected || !t.classList.contains("active")) return;
			jd(e, t, n);
		} else jd(r, t, n);
	} catch {
		if (!t.isConnected) return;
		jd([{ label: "Could not open submenu." }], t, n);
	}
}
var Od = (e) => R`
    <li>
        <a
            class="choice-item"
            @mouseup=${() => {
	Sd(), e.callback();
}}
        >
            <span
                >${e.icon ? W(e.icon).node[0] : ""} ${e.label}</span
            >
            ${e.shortcut ? R`<span class="kbd-shortcut">${e.shortcut}</span>` : P}
        </a>

        ${e.ellipsisCallback ? R` <a class="menu-ellipsis" @click=${e.ellipsisCallback}>
                  ${W(Kr).node[0]}
              </a>` : P}
    </li>
`, kd = (e) => R`
    <li>
        <span class="disabled-item">
            ${e.icon ? W(e.icon).node[0] : ""}
            ${e.label || "-"}</span
        >
    </li>
`;
function Ad(e, t = 1) {
	switch (e.type) {
		case "divider": return wd();
		case "header": return Td(e);
		default: return e.submenu ? Ed(e, t) : e.customContent ? e.customContent : e.callback ? Od(e) : kd(e);
	}
}
function jd(e, t, n) {
	Md(e, t, n, "right-start"), t.classList.add("active");
}
function Md(e, t, n, r) {
	let i = document.createElement("ul");
	i.classList.add("gs-context-menu"), i.style.top = "0", i.addEventListener("mouseenter", () => {
		bd(() => {});
	}), i.addEventListener("mouseup", (e) => e.stopPropagation()), i.addEventListener("click", (e) => e.stopPropagation()), E(e.map((e) => Ad(e, n)), i), vd.appendChild(i), Cd(n), yd[n] = i, r ??= "right-start";
	let a = !/^(top|bottom)/.test(r);
	_d(t, i, {
		strategy: "fixed",
		placement: r,
		middleware: n < 1 && a ? [hd(2), gd()] : [gd()]
	}).then(({ x: e, y: t }) => {
		let n = i.querySelector(":scope > li");
		n && a && (t -= n.getBoundingClientRect().top), i.style.left = `${e}px`, i.style.top = `${t}px`;
	});
}
var Nd;
function Pd() {
	let e = document.body, t = performance.now();
	vd = document.createElement("div"), vd.classList.add("gs-context-menu-backdrop"), vd.addEventListener("click", Sd), vd.addEventListener("contextmenu", Sd), vd.addEventListener("mouseup", () => {
		performance.now() - t > 500 && Sd();
	}, { once: !0 }), e.appendChild(vd), document.body.classList.add(le), document.body.classList.add(_e);
}
function Fd(e, t, n) {
	n ??= "bottom-start", vd && Nd !== t && Sd(), Nd = t, vd ? E(e.items.map((e) => Ad(e, 0)), yd[0]) : (Pd(), Md(e.items, t, 0, n));
}
function Id(e, t) {
	Fd(e, Ld(t), "right-start"), t.preventDefault();
}
function Ld(e) {
	return { getBoundingClientRect() {
		return {
			width: 0,
			height: 0,
			x: e.clientX,
			y: e.clientY,
			top: e.clientY,
			left: e.clientX,
			right: e.clientX,
			bottom: e.clientY,
			toJSON: void 0
		};
	} };
}
//#endregion
//#region ../app/src/sampleView/attributeContextMenu.js
var Rd = "SAMPLE_ATTRIBUTE", zd = 20;
function Bd(e, t, n, r) {
	let i = Ht.actions, a = t.attribute, o = r.sampleHierarchy, s = t?.type ?? "identifier", c = [];
	e && c.push({
		label: e,
		type: "header"
	});
	let l = (e, t, n, i) => {
		let a = r.provenance.getActionInfo(e);
		return {
			label: i ?? a.title,
			icon: a.icon,
			callback: t ? void 0 : n ?? (() => r.dispatchAttributeAction(e))
		};
	};
	return c.push({
		icon: jr,
		label: "Sort",
		submenu: [l(i.sortBy({
			attribute: a,
			order: "ascending"
		}), !1, void 0, "Ascending"), l(i.sortBy({
			attribute: a,
			order: "descending"
		}), !1, void 0, "Descending")]
	}), c.push({
		icon: z,
		label: "Filter",
		submenu: (() => {
			let e = [];
			if (s === "quantitative") {
				let r = Number(n);
				if (Qd(n) && Number.isFinite(r)) {
					for (let { operator: o, label: s } of Vd) e.push(l(i.filterByQuantitative({
						attribute: a,
						operator: o,
						operand: r
					}), !1, void 0, R`${xl(t)}
                            ${s} ${n}`));
					e.push(xd);
				}
			} else Qd(n) && e.push(l(i.filterByNominal({
				attribute: a,
				values: [n]
			}), !1, void 0, R`Retain <strong>${n}</strong>`), l(i.filterByNominal({
				attribute: a,
				remove: !0,
				values: [n]
			}), !1, void 0, R`Remove <strong>${n}</strong>`), xd);
			if (e.push(l(i.removeUndefined({ attribute: a }), !1, void 0, "Remove missing values")), s != "quantitative" && s != "identifier") {
				let n = Hd(t, r);
				n.length && e.push({
					icon: z,
					label: "Retain values based on another attribute",
					submenu: n
				});
			}
			return e.push({
				icon: z,
				label: "Advanced filter...",
				callback: () => ol(t, r)
			}), e;
		})()
	}), c.push({
		icon: Nr,
		label: "Group",
		submenu: (() => {
			let e = [];
			return s == "quantitative" ? e.push(l(i.groupToQuartiles({ attribute: a }), !1, void 0, "By quartiles"), {
				icon: Nr,
				label: "By thresholds...",
				callback: () => fl(t, r)
			}) : (s != "identifier" && e.push(l(i.groupByNominal({ attribute: a }), !1, void 0, R`By ${xl(t)}`)), e.push({
				icon: Nr,
				label: "By custom categories...",
				callback: () => jl(t, r)
			})), e;
		})()
	}), s != "quantitative" && s != "identifier" && c.push({
		icon: Zr,
		label: "Retain",
		submenu: [
			{
				label: "By current order",
				type: "header"
			},
			l(i.retainFirstOfEach({ attribute: a }), !1, void 0, R`First sample for each
                        ${xl(t)}`),
			l(i.retainFirstNCategories({
				attribute: a,
				n: void 0
			}), !1, () => ml(t, r), R`First
                            <strong>n</strong> ${xl(t)}
                            values...`),
			xd,
			l(i.retainMatched({ attribute: a }), !o.groupMetadata.length, void 0, "Values present in all groups")
		]
	}), c;
}
var Vd = [
	{
		operator: "lt",
		label: "<"
	},
	{
		operator: "lte",
		label: "≤"
	},
	{
		operator: "eq",
		label: "="
	},
	{
		operator: "gte",
		label: "≥"
	},
	{
		operator: "gt",
		label: ">"
	}
];
function Hd(e, t) {
	let n = e.attribute;
	if (n.type !== Rd || typeof n.specifier != "string") return [];
	let r = (t.metadataView?.getVisibleAttributeNames() ?? t.sampleHierarchy.sampleMetadata.attributeNames).filter((e) => e !== n.specifier).map((e) => {
		let n = t.compositeAttributeInfoSource.getAttributeInfo({
			type: Rd,
			specifier: e
		});
		if (Xd(n)) return n;
	}).filter((e) => e);
	return [{
		label: R`Select
            ${xl(e)} using...`,
		type: "header"
	}, ...Ud(e, r, t)];
}
function Ud(e, t, n) {
	let r = new Map(t.map((e) => [e.name, e])), i = Jt(t.map((e) => e.name), "/");
	return Array.from(i.children.values()).map((t) => Wd(e, r, t, n));
}
function Wd(e, t, n, r) {
	if (n.children.size > 0) return {
		label: n.part,
		submenu: () => Array.from(n.children.values()).map((n) => Wd(e, t, n, r))
	};
	let i = t.get(n.path);
	if (!i) throw Error("No attribute info for menu leaf: " + n.path);
	return {
		icon: Yd(i),
		label: n.part,
		submenu: () => Gd(e, i, r)
	};
}
function Gd(e, t, n) {
	return [{
		label: R`Retain
            ${xl(e)} values where any
            sample has ${xl(t)}
            matching:`,
		type: "header"
	}, ...Kd(e, t, n)];
}
function Kd(e, t, n) {
	if (t.type === "quantitative") {
		let r = qd(t).map(({ label: t, condition: r }) => Jd(e, n, t, r));
		return r.push({
			label: "Choose custom threshold...",
			callback: () => gl(e, t, n)
		}), r;
	} else {
		let { values: r, availableCount: i, unavailableCount: a } = Zd(t, n), o = r.map((r) => Jd(e, n, "= " + String(r), {
			attribute: t.attribute,
			operator: "in",
			values: [r]
		}));
		return a > 0 && o.push({
			label: `${a} unavailable omitted`,
			type: "header"
		}), i > r.length && o.push({
			label: `${r.length} of ${i} shown`,
			type: "header"
		}), o.push({
			label: "Choose custom values...",
			callback: () => gl(e, t, n)
		}), o;
	}
}
function qd(e) {
	let t = e.attribute;
	return [
		{
			label: "= 0",
			condition: {
				attribute: t,
				operator: "eq",
				operand: 0
			}
		},
		{
			label: "> 0",
			condition: {
				attribute: t,
				operator: "gt",
				operand: 0
			}
		},
		{
			label: ">= 1",
			condition: {
				attribute: t,
				operator: "gte",
				operand: 1
			}
		}
	];
}
function Jd(e, t, n, r) {
	return {
		label: n,
		callback: () => t.dispatchAttributeAction(t.actions.retainCategoriesByAttribute({
			attribute: e.attribute,
			condition: r
		}))
	};
}
function Yd(e) {
	return e.type === "quantitative" ? ii : Qr;
}
function Xd(e) {
	return e.type === "quantitative" || e.type === "nominal" || e.type === "ordinal";
}
function Zd(e, t) {
	let n = new Set(En(e, t.leafSamples, t.sampleHierarchy)), r = e.scale?.domain?.();
	if (Array.isArray(r)) {
		let e = r.filter((e) => n.has(e));
		return {
			values: e.slice(0, zd),
			availableCount: e.length,
			unavailableCount: r.length - e.length
		};
	}
	let i = Array.from(n);
	return {
		values: i.slice(0, zd),
		availableCount: i.length,
		unavailableCount: 0
	};
}
function Qd(e) {
	return e != null && e !== "" && !(typeof e == "number" && isNaN(e));
}
//#endregion
//#region ../app/src/components/forms/formController.js
var $d = class {
	constructor(e) {
		this._host = e, this._fields = /* @__PURE__ */ new Map(), this._errors = /* @__PURE__ */ new Map(), e.addController(this);
	}
	hostConnected() {}
	hostDisconnected() {}
	defineField(e, t) {
		if (this._fields.has(e)) throw Error("Field already defined: " + e);
		this._fields.set(e, t);
	}
	getValue(e) {
		let t = this.#e(e);
		return this._host[t.valueKey];
	}
	setValue(e, t) {
		let n = this.#e(e);
		this._host[n.valueKey] = t;
	}
	validateField(e) {
		return this.#e(e).validate(this.getValue(e));
	}
	error(e) {
		return this._errors.get(e) || null;
	}
	revalidate(e) {
		let t = this.validateField(e);
		this.#t(e, t);
	}
	getAffectedFields(e) {
		let t = this.#e(e);
		return t.affects ? t.affects : [];
	}
	validateAll() {
		let e = /* @__PURE__ */ new Map();
		for (let t of this._fields.keys()) {
			let n = this.validateField(t);
			n && e.set(t, n);
		}
		return this._errors = e, this._host.requestUpdate(), e.size > 0;
	}
	hasErrors() {
		for (let e of this._fields.keys()) if (this.validateField(e)) return !0;
		return !1;
	}
	reset() {
		this._errors = /* @__PURE__ */ new Map(), this._host.requestUpdate();
	}
	feedback(e) {
		let t = this.error(e);
		return t ? R`<div class="invalid-feedback">${t}</div>` : P;
	}
	#e(e) {
		let t = this._fields.get(e);
		if (t) return t;
		throw Error("Unknown field: " + e);
	}
	#t(e, t) {
		let n = new Map(this._errors);
		t ? n.set(e, t) : n.delete(e), this._errors = n, this._host.requestUpdate();
	}
}, ef = g(class extends n {
	constructor(e) {
		if (super(e), e.type !== j.ELEMENT) throw Error("formField must be used on an element part.");
		this._abortController = null;
	}
	render(e, t, n) {
		return P;
	}
	update(e, t) {
		let [n, r, i] = t, a = i?.validateOnInput === "always" ? "always" : "onError", o = e.element;
		if (!(o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLSelectElement)) throw Error("formField requires an input, textarea, or select element.");
		let s = n.getValue(r);
		o.value !== s && (o.value = s);
		let c = () => {
			n.error(r) ? (o.classList.add("is-invalid"), o.setAttribute("aria-invalid", "true")) : (o.classList.remove("is-invalid"), o.setAttribute("aria-invalid", "false"));
		};
		return this._abortController && this._abortController.abort(), this._abortController = new AbortController(), o.addEventListener("input", (e) => {
			let t = e.currentTarget;
			n.setValue(r, t.value), (a === "always" || n.error(r)) && n.revalidate(r);
			for (let e of n.getAffectedFields(r)) n.error(e) && n.revalidate(e);
			c();
		}, { signal: this._abortController.signal }), o.addEventListener("blur", () => {
			n.revalidate(r);
			for (let e of n.getAffectedFields(r)) n.revalidate(e);
			c();
		}, { signal: this._abortController.signal }), c(), P;
	}
});
//#endregion
//#region ../app/src/components/dialogs/enterBookmarkDialog.js
function tf(e) {
	if (e != null) {
		let t = String(e).trim();
		if (t.length) return t;
	}
}
var nf = class extends G {
	static properties = {
		...super.properties,
		bookmarkDatabase: {},
		bookmark: {},
		mode: { type: String },
		originalName: {},
		bookmarkName: { state: !0 },
		bookmarkNotes: { state: !0 }
	};
	static styles = [...super.styles, L`
            dialog {
                width: 500px;
            }
        `];
	constructor() {
		super(), this.bookmarkDatabase = null, this.bookmark = null, this.mode = "add", this.originalName = void 0, this.bookmarkName = "", this.bookmarkNotes = "", this.dialogTitle = "", this._form = new $d(this), this._form.defineField("name", {
			valueKey: "bookmarkName",
			validate: () => this.#t()
		}), this._form.defineField("notes", {
			valueKey: "bookmarkNotes",
			validate: () => null
		});
	}
	willUpdate(e) {
		e.has("mode") && (this.dialogTitle = {
			add: "Add bookmark",
			edit: "Edit bookmark",
			share: "Share the current view state as a bookmark"
		}[this.mode] ?? "Bookmark");
	}
	renderBody() {
		let e = this.mode;
		return R`
            ${e == "edit" ? R`<div class="gs-alert warning">
                      ${W(wr).node[0]} The current
                      visualization state will be updated to the bookmark you
                      are editing.
                  </div>` : void 0}
            ${e == "share" ? R`<div class="gs-alert info">
                      ${W(Vr).node[0]}<span
                          >You can add an optional title and notes, which will
                          be shown to the recipient when the bookmark link is
                          opened.</span
                      >
                  </div>` : void 0}

            <div class="gs-form-group">
                <label for="bookmark-title">Title</label>
                <input
                    autofocus
                    id="bookmark-title"
                    type="text"
                    ${ef(this._form, "name")}
                    .placeholder=${e == "share" ? "Add an optional title" : ""}
                />
                ${this._form.feedback("name")}
            </div>

            <div class="gs-form-group">
                <label for="bookmark-notes">Notes (optional)</label>
                <textarea
                    id="bookmark-notes"
                    rows="4"
                    ${ef(this._form, "notes")}
                    .placeholder=${e == "share" ? "... and notes" : ""}
                ></textarea>
                <small
                    >Notes will be shown when the bookmark is loaded. You can
                    use
                    <a
                        href="https://www.markdownguide.org/basic-syntax/"
                        target="_blank"
                        rel="noopener"
                        >markdown</a
                    >
                    for formatting.</small
                >
            </div>
        `;
	}
	renderButtons() {
		let e = this._form.hasErrors();
		return [this.makeCloseButton("Cancel"), this.mode == "share" ? this.makeButton("Make a link", () => this.#e(), {
			iconDef: li,
			disabled: e,
			isPrimary: !0
		}) : this.makeButton("Save", () => this.#e(), {
			disabled: e,
			isPrimary: !0
		})];
	}
	async #e() {
		let e = this.bookmark, t = this.mode;
		if (this._form.validateAll()) return !0;
		if (!e) throw Error("Bookmark data is missing.");
		e.name = tf(this.bookmarkName), e.notes = tf(this.bookmarkNotes);
		let n = !0;
		try {
			this.bookmarkDatabase && !(t && e.name == this.originalName) && await this.bookmarkDatabase.get(e.name) && (n = await q(R`A bookmark with the name
                        <em>${e.name}</em> already exists. It will be
                        overwritten.`, {
				title: "Bookmark already exists",
				confirm: !0,
				type: "warning"
			}));
		} catch (e) {
			console.warn(e);
		}
		if (n) this.finish({ ok: !0 });
		else return !0;
	}
	#t() {
		return this.mode == "share" ? null : this.bookmarkName.trim().length === 0 ? "Name is required." : null;
	}
};
customElements.define("gs-enter-bookmark-dialog", nf);
function rf(e, t, n) {
	return Oc("gs-enter-bookmark-dialog", (r) => {
		r.bookmarkDatabase = e, r.bookmark = t, r.mode = n, r.originalName = t.name, r.bookmarkName = t.name ?? "", r.bookmarkNotes = t.notes ?? "", r._form.reset();
	});
}
//#endregion
//#region ../../node_modules/lz-string/libs/lz-string.js
var af = /* @__PURE__ */ t(((e, t) => {
	var n = (function() {
		var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r = {};
		function i(e, t) {
			if (!r[e]) {
				r[e] = {};
				for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
			}
			return r[e][t];
		}
		var a = {
			compressToBase64: function(e) {
				if (e == null) return "";
				var n = a._compress(e, 6, function(e) {
					return t.charAt(e);
				});
				switch (n.length % 4) {
					default:
					case 0: return n;
					case 1: return n + "===";
					case 2: return n + "==";
					case 3: return n + "=";
				}
			},
			decompressFromBase64: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32, function(n) {
					return i(t, e.charAt(n));
				});
			},
			compressToUTF16: function(t) {
				return t == null ? "" : a._compress(t, 15, function(t) {
					return e(t + 32);
				}) + " ";
			},
			decompressFromUTF16: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 16384, function(t) {
					return e.charCodeAt(t) - 32;
				});
			},
			compressToUint8Array: function(e) {
				for (var t = a.compress(e), n = new Uint8Array(t.length * 2), r = 0, i = t.length; r < i; r++) {
					var o = t.charCodeAt(r);
					n[r * 2] = o >>> 8, n[r * 2 + 1] = o % 256;
				}
				return n;
			},
			decompressFromUint8Array: function(t) {
				if (t == null) return a.decompress(t);
				for (var n = Array(t.length / 2), r = 0, i = n.length; r < i; r++) n[r] = t[r * 2] * 256 + t[r * 2 + 1];
				var o = [];
				return n.forEach(function(t) {
					o.push(e(t));
				}), a.decompress(o.join(""));
			},
			compressToEncodedURIComponent: function(e) {
				return e == null ? "" : a._compress(e, 6, function(e) {
					return n.charAt(e);
				});
			},
			decompressFromEncodedURIComponent: function(e) {
				return e == null ? "" : e == "" ? null : (e = e.replace(/ /g, "+"), a._decompress(e.length, 32, function(t) {
					return i(n, e.charAt(t));
				}));
			},
			compress: function(t) {
				return a._compress(t, 16, function(t) {
					return e(t);
				});
			},
			_compress: function(e, t, n) {
				if (e == null) return "";
				var r, i, a = {}, o = {}, s = "", c = "", l = "", u = 2, d = 3, f = 2, p = [], m = 0, h = 0, g;
				for (g = 0; g < e.length; g += 1) if (s = e.charAt(g), Object.prototype.hasOwnProperty.call(a, s) || (a[s] = d++, o[s] = !0), c = l + s, Object.prototype.hasOwnProperty.call(a, c)) l = c;
				else {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++), a[c] = d++, l = String(s);
				}
				if (l !== "") {
					if (Object.prototype.hasOwnProperty.call(o, l)) {
						if (l.charCodeAt(0) < 256) {
							for (r = 0; r < f; r++) m <<= 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++;
							for (i = l.charCodeAt(0), r = 0; r < 8; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						} else {
							for (i = 1, r = 0; r < f; r++) m = m << 1 | i, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i = 0;
							for (i = l.charCodeAt(0), r = 0; r < 16; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
						}
						u--, u == 0 && (u = 2 ** f, f++), delete o[l];
					} else for (i = a[l], r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
					u--, u == 0 && (u = 2 ** f, f++);
				}
				for (i = 2, r = 0; r < f; r++) m = m << 1 | i & 1, h == t - 1 ? (h = 0, p.push(n(m)), m = 0) : h++, i >>= 1;
				for (;;) if (m <<= 1, h == t - 1) {
					p.push(n(m));
					break;
				} else h++;
				return p.join("");
			},
			decompress: function(e) {
				return e == null ? "" : e == "" ? null : a._decompress(e.length, 32768, function(t) {
					return e.charCodeAt(t);
				});
			},
			_decompress: function(t, n, r) {
				var i = [], a = 4, o = 4, s = 3, c = "", l = [], u, d, f, p, m, h, g, _ = {
					val: r(0),
					position: n,
					index: 1
				};
				for (u = 0; u < 3; u += 1) i[u] = u;
				for (f = 0, m = 2 ** 2, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
				switch (f) {
					case 0:
						for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 1:
						for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
						g = e(f);
						break;
					case 2: return "";
				}
				for (i[3] = g, d = g, l.push(g);;) {
					if (_.index > t) return "";
					for (f = 0, m = 2 ** s, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
					switch (g = f) {
						case 0:
							for (f = 0, m = 2 ** 8, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 1:
							for (f = 0, m = 2 ** 16, h = 1; h != m;) p = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = n, _.val = r(_.index++)), f |= +(p > 0) * h, h <<= 1;
							i[o++] = e(f), g = o - 1, a--;
							break;
						case 2: return l.join("");
					}
					if (a == 0 && (a = 2 ** s, s++), i[g]) c = i[g];
					else if (g === o) c = d + d.charAt(0);
					else return null;
					l.push(c), i[o++] = d + c.charAt(0), a--, d = c, a == 0 && (a = 2 ** s, s++);
				}
			}
		};
		return a;
	})();
	typeof define == "function" && define.amd ? define(function() {
		return n;
	}) : t !== void 0 && t != null ? t.exports = n : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
		return n;
	});
})), of = /* @__PURE__ */ t(((e, t) => {
	t.exports = function() {
		if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
		if (typeof Symbol.iterator == "symbol") return !0;
		var e = {}, t = Symbol("test"), n = Object(t);
		if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return !1;
		var r = 42;
		for (var i in e[t] = r, e) return !1;
		if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
		var a = Object.getOwnPropertySymbols(e);
		if (a.length !== 1 || a[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
		if (typeof Object.getOwnPropertyDescriptor == "function") {
			var o = Object.getOwnPropertyDescriptor(e, t);
			if (o.value !== r || o.enumerable !== !0) return !1;
		}
		return !0;
	};
})), sf = /* @__PURE__ */ t(((e, t) => {
	var n = of();
	t.exports = function() {
		return n() && !!Symbol.toStringTag;
	};
})), cf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Object;
})), lf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Error;
})), uf = /* @__PURE__ */ t(((e, t) => {
	t.exports = EvalError;
})), df = /* @__PURE__ */ t(((e, t) => {
	t.exports = RangeError;
})), ff = /* @__PURE__ */ t(((e, t) => {
	t.exports = ReferenceError;
})), pf = /* @__PURE__ */ t(((e, t) => {
	t.exports = SyntaxError;
})), mf = /* @__PURE__ */ t(((e, t) => {
	t.exports = TypeError;
})), hf = /* @__PURE__ */ t(((e, t) => {
	t.exports = URIError;
})), gf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.abs;
})), _f = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.floor;
})), vf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.max;
})), yf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.min;
})), bf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.pow;
})), xf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Math.round;
})), Sf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Number.isNaN || function(e) {
		return e !== e;
	};
})), Cf = /* @__PURE__ */ t(((e, t) => {
	var n = Sf();
	t.exports = function(e) {
		return n(e) || e === 0 ? e : e < 0 ? -1 : 1;
	};
})), wf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Object.getOwnPropertyDescriptor;
})), Tf = /* @__PURE__ */ t(((e, t) => {
	var n = wf();
	if (n) try {
		n([], "length");
	} catch {
		n = null;
	}
	t.exports = n;
})), Ef = /* @__PURE__ */ t(((e, t) => {
	var n = Object.defineProperty || !1;
	if (n) try {
		n({}, "a", { value: 1 });
	} catch {
		n = !1;
	}
	t.exports = n;
})), Df = /* @__PURE__ */ t(((e, t) => {
	var n = typeof Symbol < "u" && Symbol, r = of();
	t.exports = function() {
		return typeof n != "function" || typeof Symbol != "function" || typeof n("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
	};
})), Of = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
})), kf = /* @__PURE__ */ t(((e, t) => {
	t.exports = cf().getPrototypeOf || null;
})), Af = /* @__PURE__ */ t(((e, t) => {
	var n = Object.prototype.toString, r = Math.max, i = "[object Function]", a = function(e, t) {
		for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
		for (var i = 0; i < t.length; i += 1) n[i + e.length] = t[i];
		return n;
	}, o = function(e, t) {
		for (var n = [], r = t || 0, i = 0; r < e.length; r += 1, i += 1) n[i] = e[r];
		return n;
	}, s = function(e, t) {
		for (var n = "", r = 0; r < e.length; r += 1) n += e[r], r + 1 < e.length && (n += t);
		return n;
	};
	t.exports = function(e) {
		var t = this;
		if (typeof t != "function" || n.apply(t) !== i) throw TypeError("Function.prototype.bind called on incompatible " + t);
		for (var c = o(arguments, 1), l, u = function() {
			if (this instanceof l) {
				var n = t.apply(this, a(c, arguments));
				return Object(n) === n ? n : this;
			}
			return t.apply(e, a(c, arguments));
		}, d = r(0, t.length - c.length), f = [], p = 0; p < d; p++) f[p] = "$" + p;
		if (l = Function("binder", "return function (" + s(f, ",") + "){ return binder.apply(this,arguments); }")(u), t.prototype) {
			var m = function() {};
			m.prototype = t.prototype, l.prototype = new m(), m.prototype = null;
		}
		return l;
	};
})), jf = /* @__PURE__ */ t(((e, t) => {
	var n = Af();
	t.exports = Function.prototype.bind || n;
})), Mf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Function.prototype.call;
})), Nf = /* @__PURE__ */ t(((e, t) => {
	t.exports = Function.prototype.apply;
})), Pf = /* @__PURE__ */ t(((e, t) => {
	t.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
})), Ff = /* @__PURE__ */ t(((e, t) => {
	var n = jf(), r = Nf(), i = Mf();
	t.exports = Pf() || n.call(i, r);
})), If = /* @__PURE__ */ t(((e, t) => {
	var n = jf(), r = mf(), i = Mf(), a = Ff();
	t.exports = function(e) {
		if (e.length < 1 || typeof e[0] != "function") throw new r("a function is required");
		return a(n, i, e);
	};
})), Lf = /* @__PURE__ */ t(((e, t) => {
	var n = If(), r = Tf(), i;
	try {
		i = [].__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
	}
	var a = !!i && r && r(Object.prototype, "__proto__"), o = Object, s = o.getPrototypeOf;
	t.exports = a && typeof a.get == "function" ? n([a.get]) : typeof s == "function" && function(e) {
		return s(e == null ? e : o(e));
	};
})), Rf = /* @__PURE__ */ t(((e, t) => {
	var n = Of(), r = kf(), i = Lf();
	t.exports = n ? function(e) {
		return n(e);
	} : r ? function(e) {
		if (!e || typeof e != "object" && typeof e != "function") throw TypeError("getProto: not an object");
		return r(e);
	} : i ? function(e) {
		return i(e);
	} : null;
})), zf = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.call, r = Object.prototype.hasOwnProperty;
	t.exports = jf().call(n, r);
})), Bf = /* @__PURE__ */ t(((e, t) => {
	var n, r = cf(), i = lf(), a = uf(), o = df(), s = ff(), c = pf(), l = mf(), u = hf(), d = gf(), f = _f(), p = vf(), m = yf(), h = bf(), g = xf(), _ = Cf(), v = Function, y = function(e) {
		try {
			return v("\"use strict\"; return (" + e + ").constructor;")();
		} catch {}
	}, b = Tf(), x = Ef(), S = function() {
		throw new l();
	}, C = b ? function() {
		try {
			return arguments.callee, S;
		} catch {
			try {
				return b(arguments, "callee").get;
			} catch {
				return S;
			}
		}
	}() : S, w = Df()(), T = Rf(), E = kf(), D = Of(), O = Nf(), k = Mf(), A = {}, j = typeof Uint8Array > "u" || !T ? n : T(Uint8Array), M = {
		__proto__: null,
		"%AggregateError%": typeof AggregateError > "u" ? n : AggregateError,
		"%Array%": Array,
		"%ArrayBuffer%": typeof ArrayBuffer > "u" ? n : ArrayBuffer,
		"%ArrayIteratorPrototype%": w && T ? T([][Symbol.iterator]()) : n,
		"%AsyncFromSyncIteratorPrototype%": n,
		"%AsyncFunction%": A,
		"%AsyncGenerator%": A,
		"%AsyncGeneratorFunction%": A,
		"%AsyncIteratorPrototype%": A,
		"%Atomics%": typeof Atomics > "u" ? n : Atomics,
		"%BigInt%": typeof BigInt > "u" ? n : BigInt,
		"%BigInt64Array%": typeof BigInt64Array > "u" ? n : BigInt64Array,
		"%BigUint64Array%": typeof BigUint64Array > "u" ? n : BigUint64Array,
		"%Boolean%": Boolean,
		"%DataView%": typeof DataView > "u" ? n : DataView,
		"%Date%": Date,
		"%decodeURI%": decodeURI,
		"%decodeURIComponent%": decodeURIComponent,
		"%encodeURI%": encodeURI,
		"%encodeURIComponent%": encodeURIComponent,
		"%Error%": i,
		"%eval%": eval,
		"%EvalError%": a,
		"%Float16Array%": typeof Float16Array > "u" ? n : Float16Array,
		"%Float32Array%": typeof Float32Array > "u" ? n : Float32Array,
		"%Float64Array%": typeof Float64Array > "u" ? n : Float64Array,
		"%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? n : FinalizationRegistry,
		"%Function%": v,
		"%GeneratorFunction%": A,
		"%Int8Array%": typeof Int8Array > "u" ? n : Int8Array,
		"%Int16Array%": typeof Int16Array > "u" ? n : Int16Array,
		"%Int32Array%": typeof Int32Array > "u" ? n : Int32Array,
		"%isFinite%": isFinite,
		"%isNaN%": isNaN,
		"%IteratorPrototype%": w && T ? T(T([][Symbol.iterator]())) : n,
		"%JSON%": typeof JSON == "object" ? JSON : n,
		"%Map%": typeof Map > "u" ? n : Map,
		"%MapIteratorPrototype%": typeof Map > "u" || !w || !T ? n : T((/* @__PURE__ */ new Map())[Symbol.iterator]()),
		"%Math%": Math,
		"%Number%": Number,
		"%Object%": r,
		"%Object.getOwnPropertyDescriptor%": b,
		"%parseFloat%": parseFloat,
		"%parseInt%": parseInt,
		"%Promise%": typeof Promise > "u" ? n : Promise,
		"%Proxy%": typeof Proxy > "u" ? n : Proxy,
		"%RangeError%": o,
		"%ReferenceError%": s,
		"%Reflect%": typeof Reflect > "u" ? n : Reflect,
		"%RegExp%": RegExp,
		"%Set%": typeof Set > "u" ? n : Set,
		"%SetIteratorPrototype%": typeof Set > "u" || !w || !T ? n : T((/* @__PURE__ */ new Set())[Symbol.iterator]()),
		"%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? n : SharedArrayBuffer,
		"%String%": String,
		"%StringIteratorPrototype%": w && T ? T(""[Symbol.iterator]()) : n,
		"%Symbol%": w ? Symbol : n,
		"%SyntaxError%": c,
		"%ThrowTypeError%": C,
		"%TypedArray%": j,
		"%TypeError%": l,
		"%Uint8Array%": typeof Uint8Array > "u" ? n : Uint8Array,
		"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? n : Uint8ClampedArray,
		"%Uint16Array%": typeof Uint16Array > "u" ? n : Uint16Array,
		"%Uint32Array%": typeof Uint32Array > "u" ? n : Uint32Array,
		"%URIError%": u,
		"%WeakMap%": typeof WeakMap > "u" ? n : WeakMap,
		"%WeakRef%": typeof WeakRef > "u" ? n : WeakRef,
		"%WeakSet%": typeof WeakSet > "u" ? n : WeakSet,
		"%Function.prototype.call%": k,
		"%Function.prototype.apply%": O,
		"%Object.defineProperty%": x,
		"%Object.getPrototypeOf%": E,
		"%Math.abs%": d,
		"%Math.floor%": f,
		"%Math.max%": p,
		"%Math.min%": m,
		"%Math.pow%": h,
		"%Math.round%": g,
		"%Math.sign%": _,
		"%Reflect.getPrototypeOf%": D
	};
	if (T) try {
		null.error;
	} catch (e) {
		M["%Error.prototype%"] = T(T(e));
	}
	var N = function e(t) {
		var n;
		if (t === "%AsyncFunction%") n = y("async function () {}");
		else if (t === "%GeneratorFunction%") n = y("function* () {}");
		else if (t === "%AsyncGeneratorFunction%") n = y("async function* () {}");
		else if (t === "%AsyncGenerator%") {
			var r = e("%AsyncGeneratorFunction%");
			r && (n = r.prototype);
		} else if (t === "%AsyncIteratorPrototype%") {
			var i = e("%AsyncGenerator%");
			i && T && (n = T(i.prototype));
		}
		return M[t] = n, n;
	}, ee = {
		__proto__: null,
		"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
		"%ArrayPrototype%": ["Array", "prototype"],
		"%ArrayProto_entries%": [
			"Array",
			"prototype",
			"entries"
		],
		"%ArrayProto_forEach%": [
			"Array",
			"prototype",
			"forEach"
		],
		"%ArrayProto_keys%": [
			"Array",
			"prototype",
			"keys"
		],
		"%ArrayProto_values%": [
			"Array",
			"prototype",
			"values"
		],
		"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
		"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
		"%AsyncGeneratorPrototype%": [
			"AsyncGeneratorFunction",
			"prototype",
			"prototype"
		],
		"%BooleanPrototype%": ["Boolean", "prototype"],
		"%DataViewPrototype%": ["DataView", "prototype"],
		"%DatePrototype%": ["Date", "prototype"],
		"%ErrorPrototype%": ["Error", "prototype"],
		"%EvalErrorPrototype%": ["EvalError", "prototype"],
		"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
		"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
		"%FunctionPrototype%": ["Function", "prototype"],
		"%Generator%": ["GeneratorFunction", "prototype"],
		"%GeneratorPrototype%": [
			"GeneratorFunction",
			"prototype",
			"prototype"
		],
		"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
		"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
		"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
		"%JSONParse%": ["JSON", "parse"],
		"%JSONStringify%": ["JSON", "stringify"],
		"%MapPrototype%": ["Map", "prototype"],
		"%NumberPrototype%": ["Number", "prototype"],
		"%ObjectPrototype%": ["Object", "prototype"],
		"%ObjProto_toString%": [
			"Object",
			"prototype",
			"toString"
		],
		"%ObjProto_valueOf%": [
			"Object",
			"prototype",
			"valueOf"
		],
		"%PromisePrototype%": ["Promise", "prototype"],
		"%PromiseProto_then%": [
			"Promise",
			"prototype",
			"then"
		],
		"%Promise_all%": ["Promise", "all"],
		"%Promise_reject%": ["Promise", "reject"],
		"%Promise_resolve%": ["Promise", "resolve"],
		"%RangeErrorPrototype%": ["RangeError", "prototype"],
		"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
		"%RegExpPrototype%": ["RegExp", "prototype"],
		"%SetPrototype%": ["Set", "prototype"],
		"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
		"%StringPrototype%": ["String", "prototype"],
		"%SymbolPrototype%": ["Symbol", "prototype"],
		"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
		"%TypedArrayPrototype%": ["TypedArray", "prototype"],
		"%TypeErrorPrototype%": ["TypeError", "prototype"],
		"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
		"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
		"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
		"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
		"%URIErrorPrototype%": ["URIError", "prototype"],
		"%WeakMapPrototype%": ["WeakMap", "prototype"],
		"%WeakSetPrototype%": ["WeakSet", "prototype"]
	}, P = jf(), F = zf(), I = P.call(k, Array.prototype.concat), te = P.call(O, Array.prototype.splice), ne = P.call(k, String.prototype.replace), re = P.call(k, String.prototype.slice), ie = P.call(k, RegExp.prototype.exec), ae = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, oe = /\\(\\)?/g, se = function(e) {
		var t = re(e, 0, 1), n = re(e, -1);
		if (t === "%" && n !== "%") throw new c("invalid intrinsic syntax, expected closing `%`");
		if (n === "%" && t !== "%") throw new c("invalid intrinsic syntax, expected opening `%`");
		var r = [];
		return ne(e, ae, function(e, t, n, i) {
			r[r.length] = n ? ne(i, oe, "$1") : t || e;
		}), r;
	}, ce = function(e, t) {
		var n = e, r;
		if (F(ee, n) && (r = ee[n], n = "%" + r[0] + "%"), F(M, n)) {
			var i = M[n];
			if (i === A && (i = N(n)), i === void 0 && !t) throw new l("intrinsic " + e + " exists, but is not available. Please file an issue!");
			return {
				alias: r,
				name: n,
				value: i
			};
		}
		throw new c("intrinsic " + e + " does not exist!");
	};
	t.exports = function(e, t) {
		if (typeof e != "string" || e.length === 0) throw new l("intrinsic name must be a non-empty string");
		if (arguments.length > 1 && typeof t != "boolean") throw new l("\"allowMissing\" argument must be a boolean");
		if (ie(/^%?[^%]*%?$/, e) === null) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
		var n = se(e), r = n.length > 0 ? n[0] : "", i = ce("%" + r + "%", t), a = i.name, o = i.value, s = !1, u = i.alias;
		u && (r = u[0], te(n, I([0, 1], u)));
		for (var d = 1, f = !0; d < n.length; d += 1) {
			var p = n[d], m = re(p, 0, 1), h = re(p, -1);
			if ((m === "\"" || m === "'" || m === "`" || h === "\"" || h === "'" || h === "`") && m !== h) throw new c("property names with quotes must have matching quotes");
			if ((p === "constructor" || !f) && (s = !0), r += "." + p, a = "%" + r + "%", F(M, a)) o = M[a];
			else if (o != null) {
				if (!(p in o)) {
					if (!t) throw new l("base intrinsic for " + e + " exists, but the property is not available.");
					return;
				}
				if (b && d + 1 >= n.length) {
					var g = b(o, p);
					f = !!g, o = f && "get" in g && !("originalValue" in g.get) ? g.get : o[p];
				} else f = F(o, p), o = o[p];
				f && !s && (M[a] = o);
			}
		}
		return o;
	};
})), Vf = /* @__PURE__ */ t(((e, t) => {
	var n = Bf(), r = If(), i = r([n("%String.prototype.indexOf%")]);
	t.exports = function(e, t) {
		var a = n(e, !!t);
		return typeof a == "function" && i(e, ".prototype.") > -1 ? r([a]) : a;
	};
})), Hf = /* @__PURE__ */ t(((e, t) => {
	var n = sf()(), r = Vf()("Object.prototype.toString"), i = function(e) {
		return n && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : r(e) === "[object Arguments]";
	}, a = function(e) {
		return i(e) ? !0 : typeof e == "object" && !!e && "length" in e && typeof e.length == "number" && e.length >= 0 && r(e) !== "[object Array]" && "callee" in e && r(e.callee) === "[object Function]";
	}, o = function() {
		return i(arguments);
	}();
	i.isLegacyArguments = a, t.exports = o ? i : a;
})), Uf = /* @__PURE__ */ t(((e, t) => {
	var n = Vf(), r = sf()(), i = zf(), a = Tf(), o;
	if (r) {
		var s = n("RegExp.prototype.exec"), c = {}, l = function() {
			throw c;
		}, u = {
			toString: l,
			valueOf: l
		};
		typeof Symbol.toPrimitive == "symbol" && (u[Symbol.toPrimitive] = l), o = function(e) {
			if (!e || typeof e != "object") return !1;
			var t = a(e, "lastIndex");
			if (!(t && i(t, "value"))) return !1;
			try {
				s(e, u);
			} catch (e) {
				return e === c;
			}
		};
	} else {
		var d = n("Object.prototype.toString"), f = "[object RegExp]";
		o = function(e) {
			return !e || typeof e != "object" && typeof e != "function" ? !1 : d(e) === f;
		};
	}
	t.exports = o;
})), Wf = /* @__PURE__ */ t(((e, t) => {
	var n = Vf(), r = Uf(), i = n("RegExp.prototype.exec"), a = mf();
	t.exports = function(e) {
		if (!r(e)) throw new a("`regex` must be a RegExp");
		return function(t) {
			return i(e, t) !== null;
		};
	};
})), Gf = /* @__PURE__ */ t(((e, t) => {
	var n = function* () {}.constructor;
	t.exports = () => n;
})), Kf = /* @__PURE__ */ t(((e, t) => {
	var n = Vf(), r = Wf()(/^\s*(?:function)?\*/), i = sf()(), a = Rf(), o = n("Object.prototype.toString"), s = n("Function.prototype.toString"), c = Gf();
	t.exports = function(e) {
		if (typeof e != "function") return !1;
		if (r(s(e))) return !0;
		if (!i) return o(e) === "[object GeneratorFunction]";
		if (!a) return !1;
		var t = c();
		return t && a(e) === t.prototype;
	};
})), qf = /* @__PURE__ */ t(((e, t) => {
	var n = Function.prototype.toString, r = typeof Reflect == "object" && Reflect !== null && Reflect.apply, i, a;
	if (typeof r == "function" && typeof Object.defineProperty == "function") try {
		i = Object.defineProperty({}, "length", { get: function() {
			throw a;
		} }), a = {}, r(function() {
			throw 42;
		}, null, i);
	} catch (e) {
		e !== a && (r = null);
	}
	else r = null;
	var o = /^\s*class\b/, s = function(e) {
		try {
			var t = n.call(e);
			return o.test(t);
		} catch {
			return !1;
		}
	}, c = function(e) {
		try {
			return s(e) ? !1 : (n.call(e), !0);
		} catch {
			return !1;
		}
	}, l = Object.prototype.toString, u = "[object Object]", d = "[object Function]", f = "[object GeneratorFunction]", p = "[object HTMLAllCollection]", m = "[object HTML document.all class]", h = "[object HTMLCollection]", g = typeof Symbol == "function" && !!Symbol.toStringTag, _ = !(0 in [,]), v = function() {
		return !1;
	};
	if (typeof document == "object") {
		var y = document.all;
		l.call(y) === l.call(document.all) && (v = function(e) {
			if ((_ || !e) && (e === void 0 || typeof e == "object")) try {
				var t = l.call(e);
				return (t === p || t === m || t === h || t === u) && e("") == null;
			} catch {}
			return !1;
		});
	}
	t.exports = r ? function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		try {
			r(e, null, i);
		} catch (e) {
			if (e !== a) return !1;
		}
		return !s(e) && c(e);
	} : function(e) {
		if (v(e)) return !0;
		if (!e || typeof e != "function" && typeof e != "object") return !1;
		if (g) return c(e);
		if (s(e)) return !1;
		var t = l.call(e);
		return t !== d && t !== f && !/^\[object HTML/.test(t) ? !1 : c(e);
	};
})), Jf = /* @__PURE__ */ t(((e, t) => {
	var n = qf(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, a = function(e, t, n) {
		for (var r = 0, a = e.length; r < a; r++) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	}, o = function(e, t, n) {
		for (var r = 0, i = e.length; r < i; r++) n == null ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
	}, s = function(e, t, n) {
		for (var r in e) i.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
	};
	function c(e) {
		return r.call(e) === "[object Array]";
	}
	t.exports = function(e, t, r) {
		if (!n(t)) throw TypeError("iterator must be a function");
		var i;
		arguments.length >= 3 && (i = r), c(e) ? a(e, t, i) : typeof e == "string" ? o(e, t, i) : s(e, t, i);
	};
})), Yf = /* @__PURE__ */ t(((e, t) => {
	t.exports = [
		"Float16Array",
		"Float32Array",
		"Float64Array",
		"Int8Array",
		"Int16Array",
		"Int32Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Uint16Array",
		"Uint32Array",
		"BigInt64Array",
		"BigUint64Array"
	];
})), Xf = /* @__PURE__ */ t(((e, t) => {
	var n = Yf(), r = typeof globalThis > "u" ? global : globalThis;
	t.exports = function() {
		for (var e = [], t = 0; t < n.length; t++) typeof r[n[t]] == "function" && (e[e.length] = n[t]);
		return e;
	};
})), Zf = /* @__PURE__ */ t(((e, t) => {
	var n = Ef(), r = pf(), i = mf(), a = Tf();
	t.exports = function(e, t, o) {
		if (!e || typeof e != "object" && typeof e != "function") throw new i("`obj` must be an object or a function`");
		if (typeof t != "string" && typeof t != "symbol") throw new i("`property` must be a string or a symbol`");
		if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new i("`nonEnumerable`, if provided, must be a boolean or null");
		if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new i("`nonWritable`, if provided, must be a boolean or null");
		if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new i("`nonConfigurable`, if provided, must be a boolean or null");
		if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new i("`loose`, if provided, must be a boolean");
		var s = arguments.length > 3 ? arguments[3] : null, c = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 && arguments[6], d = !!a && a(e, t);
		if (n) n(e, t, {
			configurable: l === null && d ? d.configurable : !l,
			enumerable: s === null && d ? d.enumerable : !s,
			value: o,
			writable: c === null && d ? d.writable : !c
		});
		else if (u || !s && !c && !l) e[t] = o;
		else throw new r("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
	};
})), Qf = /* @__PURE__ */ t(((e, t) => {
	var n = Ef(), r = function() {
		return !!n;
	};
	r.hasArrayLengthDefineBug = function() {
		if (!n) return null;
		try {
			return n([], "length", { value: 1 }).length !== 1;
		} catch {
			return !0;
		}
	}, t.exports = r;
})), $f = /* @__PURE__ */ t(((e, t) => {
	var n = Bf(), r = Zf(), i = Qf()(), a = Tf(), o = mf(), s = n("%Math.floor%");
	t.exports = function(e, t) {
		if (typeof e != "function") throw new o("`fn` is not a function");
		if (typeof t != "number" || t < 0 || t > 4294967295 || s(t) !== t) throw new o("`length` must be a positive 32-bit integer");
		var n = arguments.length > 2 && !!arguments[2], c = !0, l = !0;
		if ("length" in e && a) {
			var u = a(e, "length");
			u && !u.configurable && (c = !1), u && !u.writable && (l = !1);
		}
		return (c || l || !n) && (i ? r(e, "length", t, !0, !0) : r(e, "length", t)), e;
	};
})), ep = /* @__PURE__ */ t(((e, t) => {
	var n = jf(), r = Nf(), i = Ff();
	t.exports = function() {
		return i(n, r, arguments);
	};
})), tp = /* @__PURE__ */ t(((e, t) => {
	var n = $f(), r = Ef(), i = If(), a = ep();
	t.exports = function(e) {
		var t = i(arguments), r = 1 + e.length - (arguments.length - 1);
		return n(t, r > 0 ? r : 0, !0);
	}, r ? r(t.exports, "apply", { value: a }) : t.exports.apply = a;
})), np = /* @__PURE__ */ t(((e, t) => {
	var n = Jf(), r = Xf(), i = tp(), a = Vf(), o = Tf(), s = Rf(), c = a("Object.prototype.toString"), l = sf()(), u = typeof globalThis > "u" ? global : globalThis, d = r(), f = a("String.prototype.slice"), p = a("Array.prototype.indexOf", !0) || function(e, t) {
		for (var n = 0; n < e.length; n += 1) if (e[n] === t) return n;
		return -1;
	}, m = { __proto__: null };
	l && o && s ? n(d, function(e) {
		var t = new u[e]();
		if (Symbol.toStringTag in t && s) {
			var n = s(t), r = o(n, Symbol.toStringTag);
			if (!r && n && (r = o(s(n), Symbol.toStringTag)), r && r.get) {
				var a = i(r.get);
				m["$" + e] = a;
			}
		}
	}) : n(d, function(e) {
		var t = new u[e](), n = t.slice || t.set;
		if (n) {
			var r = i(n);
			m["$" + e] = r;
		}
	});
	function h(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				"$" + n(e) === r && (t = f(r, 1));
			} catch {}
		}), t;
	}
	function g(e) {
		var t = !1;
		return n(m, function(n, r) {
			if (!t) try {
				n(e), t = f(r, 1);
			} catch {}
		}), t;
	}
	function _(e) {
		return p(d, e) > -1;
	}
	t.exports = function(e) {
		if (!e || typeof e != "object") return !1;
		if (!l) {
			var t = f(c(e), 8, -1);
			return _(t) ? t : t === "Object" && g(e);
		}
		return o ? h(e) : null;
	};
})), rp = /* @__PURE__ */ t(((e, t) => {
	var n = np();
	t.exports = function(e) {
		return !!n(e);
	};
})), ip = /* @__PURE__ */ t(((e) => {
	var t = Hf(), n = Kf(), r = np(), i = rp();
	function a(e) {
		return e.call.bind(e);
	}
	var o = typeof BigInt < "u", s = typeof Symbol < "u", c = a(Object.prototype.toString), l = a(Number.prototype.valueOf), u = a(String.prototype.valueOf), d = a(Boolean.prototype.valueOf);
	if (o) var f = a(BigInt.prototype.valueOf);
	if (s) var p = a(Symbol.prototype.valueOf);
	function m(e, t) {
		if (typeof e != "object") return !1;
		try {
			return t(e), !0;
		} catch {
			return !1;
		}
	}
	e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = i;
	function h(e) {
		return typeof Promise < "u" && e instanceof Promise || typeof e == "object" && !!e && typeof e.then == "function" && typeof e.catch == "function";
	}
	e.isPromise = h;
	function g(e) {
		return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || ne(e);
	}
	e.isArrayBufferView = g;
	function _(e) {
		return r(e) === "Uint8Array";
	}
	e.isUint8Array = _;
	function v(e) {
		return r(e) === "Uint8ClampedArray";
	}
	e.isUint8ClampedArray = v;
	function y(e) {
		return r(e) === "Uint16Array";
	}
	e.isUint16Array = y;
	function b(e) {
		return r(e) === "Uint32Array";
	}
	e.isUint32Array = b;
	function x(e) {
		return r(e) === "Int8Array";
	}
	e.isInt8Array = x;
	function S(e) {
		return r(e) === "Int16Array";
	}
	e.isInt16Array = S;
	function C(e) {
		return r(e) === "Int32Array";
	}
	e.isInt32Array = C;
	function w(e) {
		return r(e) === "Float32Array";
	}
	e.isFloat32Array = w;
	function T(e) {
		return r(e) === "Float64Array";
	}
	e.isFloat64Array = T;
	function E(e) {
		return r(e) === "BigInt64Array";
	}
	e.isBigInt64Array = E;
	function D(e) {
		return r(e) === "BigUint64Array";
	}
	e.isBigUint64Array = D;
	function O(e) {
		return c(e) === "[object Map]";
	}
	O.working = typeof Map < "u" && O(/* @__PURE__ */ new Map());
	function k(e) {
		return typeof Map > "u" ? !1 : O.working ? O(e) : e instanceof Map;
	}
	e.isMap = k;
	function A(e) {
		return c(e) === "[object Set]";
	}
	A.working = typeof Set < "u" && A(/* @__PURE__ */ new Set());
	function j(e) {
		return typeof Set > "u" ? !1 : A.working ? A(e) : e instanceof Set;
	}
	e.isSet = j;
	function M(e) {
		return c(e) === "[object WeakMap]";
	}
	M.working = typeof WeakMap < "u" && M(/* @__PURE__ */ new WeakMap());
	function N(e) {
		return typeof WeakMap > "u" ? !1 : M.working ? M(e) : e instanceof WeakMap;
	}
	e.isWeakMap = N;
	function ee(e) {
		return c(e) === "[object WeakSet]";
	}
	ee.working = typeof WeakSet < "u" && ee(/* @__PURE__ */ new WeakSet());
	function P(e) {
		return ee(e);
	}
	e.isWeakSet = P;
	function F(e) {
		return c(e) === "[object ArrayBuffer]";
	}
	F.working = typeof ArrayBuffer < "u" && F(/* @__PURE__ */ new ArrayBuffer());
	function I(e) {
		return typeof ArrayBuffer > "u" ? !1 : F.working ? F(e) : e instanceof ArrayBuffer;
	}
	e.isArrayBuffer = I;
	function te(e) {
		return c(e) === "[object DataView]";
	}
	te.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && te(new DataView(/* @__PURE__ */ new ArrayBuffer(1), 0, 1));
	function ne(e) {
		return typeof DataView > "u" ? !1 : te.working ? te(e) : e instanceof DataView;
	}
	e.isDataView = ne;
	var re = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
	function ie(e) {
		return c(e) === "[object SharedArrayBuffer]";
	}
	function ae(e) {
		return re === void 0 ? !1 : (ie.working === void 0 && (ie.working = ie(new re())), ie.working ? ie(e) : e instanceof re);
	}
	e.isSharedArrayBuffer = ae;
	function oe(e) {
		return c(e) === "[object AsyncFunction]";
	}
	e.isAsyncFunction = oe;
	function se(e) {
		return c(e) === "[object Map Iterator]";
	}
	e.isMapIterator = se;
	function ce(e) {
		return c(e) === "[object Set Iterator]";
	}
	e.isSetIterator = ce;
	function le(e) {
		return c(e) === "[object Generator]";
	}
	e.isGeneratorObject = le;
	function ue(e) {
		return c(e) === "[object WebAssembly.Module]";
	}
	e.isWebAssemblyCompiledModule = ue;
	function de(e) {
		return m(e, l);
	}
	e.isNumberObject = de;
	function fe(e) {
		return m(e, u);
	}
	e.isStringObject = fe;
	function pe(e) {
		return m(e, d);
	}
	e.isBooleanObject = pe;
	function me(e) {
		return o && m(e, f);
	}
	e.isBigIntObject = me;
	function he(e) {
		return s && m(e, p);
	}
	e.isSymbolObject = he;
	function ge(e) {
		return de(e) || fe(e) || pe(e) || me(e) || he(e);
	}
	e.isBoxedPrimitive = ge;
	function _e(e) {
		return typeof Uint8Array < "u" && (I(e) || ae(e));
	}
	e.isAnyArrayBuffer = _e, [
		"isProxy",
		"isExternal",
		"isModuleNamespaceObject"
	].forEach(function(t) {
		Object.defineProperty(e, t, {
			enumerable: !1,
			value: function() {
				throw Error(t + " is not supported in userland");
			}
		});
	});
})), ap = /* @__PURE__ */ t(((e, t) => {
	t.exports = function(e) {
		return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
	};
})), op = /* @__PURE__ */ t(((e, t) => {
	typeof Object.create == "function" ? t.exports = function(e, t) {
		t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }));
	} : t.exports = function(e, t) {
		if (t) {
			e.super_ = t;
			var n = function() {};
			n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
		}
	};
})), sp = /* @__PURE__ */ t(((e) => {
	var t = Object.getOwnPropertyDescriptors || function(e) {
		for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
		return n;
	}, n = /%[sdj%]/g;
	e.format = function(e) {
		if (!x(e)) {
			for (var t = [], r = 0; r < arguments.length; r++) t.push(o(arguments[r]));
			return t.join(" ");
		}
		for (var r = 1, i = arguments, a = i.length, s = String(e).replace(n, function(e) {
			if (e === "%%") return "%";
			if (r >= a) return e;
			switch (e) {
				case "%s": return String(i[r++]);
				case "%d": return Number(i[r++]);
				case "%j": try {
					return JSON.stringify(i[r++]);
				} catch {
					return "[Circular]";
				}
				default: return e;
			}
		}), c = i[r]; r < a; c = i[++r]) v(c) || !T(c) ? s += " " + c : s += " " + o(c);
		return s;
	}, e.deprecate = function(t, n) {
		if (typeof process < "u" && process.noDeprecation === !0) return t;
		if (typeof process > "u") return function() {
			return e.deprecate(t, n).apply(this, arguments);
		};
		var r = !1;
		function i() {
			if (!r) {
				if (process.throwDeprecation) throw Error(n);
				process.traceDeprecation ? console.trace(n) : console.error(n), r = !0;
			}
			return t.apply(this, arguments);
		}
		return i;
	};
	var r = {}, i = /^$/;
	if (process.env.NODE_DEBUG) {
		var a = process.env.NODE_DEBUG;
		a = a.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = RegExp("^" + a + "$", "i");
	}
	e.debuglog = function(t) {
		if (t = t.toUpperCase(), !r[t]) if (i.test(t)) {
			var n = process.pid;
			r[t] = function() {
				var r = e.format.apply(e, arguments);
				console.error("%s %d: %s", t, n, r);
			};
		} else r[t] = function() {};
		return r[t];
	};
	function o(t, n) {
		var r = {
			seen: [],
			stylize: c
		};
		return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _(n) ? r.showHidden = n : n && e._extend(r, n), C(r.showHidden) && (r.showHidden = !1), C(r.depth) && (r.depth = 2), C(r.colors) && (r.colors = !1), C(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), u(r, t, r.depth);
	}
	e.inspect = o, o.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39]
	}, o.styles = {
		special: "cyan",
		number: "yellow",
		boolean: "yellow",
		undefined: "grey",
		null: "bold",
		string: "green",
		date: "magenta",
		regexp: "red"
	};
	function s(e, t) {
		var n = o.styles[t];
		return n ? "\x1B[" + o.colors[n][0] + "m" + e + "\x1B[" + o.colors[n][1] + "m" : e;
	}
	function c(e, t) {
		return e;
	}
	function l(e) {
		var t = {};
		return e.forEach(function(e, n) {
			t[e] = !0;
		}), t;
	}
	function u(t, n, r) {
		if (t.customInspect && n && O(n.inspect) && n.inspect !== e.inspect && !(n.constructor && n.constructor.prototype === n)) {
			var i = n.inspect(r, t);
			return x(i) || (i = u(t, i, r)), i;
		}
		var a = d(t, n);
		if (a) return a;
		var o = Object.keys(n), s = l(o);
		if (t.showHidden && (o = Object.getOwnPropertyNames(n)), D(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return f(n);
		if (o.length === 0) {
			if (O(n)) {
				var c = n.name ? ": " + n.name : "";
				return t.stylize("[Function" + c + "]", "special");
			}
			if (w(n)) return t.stylize(RegExp.prototype.toString.call(n), "regexp");
			if (E(n)) return t.stylize(Date.prototype.toString.call(n), "date");
			if (D(n)) return f(n);
		}
		var _ = "", v = !1, y = ["{", "}"];
		if (g(n) && (v = !0, y = ["[", "]"]), O(n) && (_ = " [Function" + (n.name ? ": " + n.name : "") + "]"), w(n) && (_ = " " + RegExp.prototype.toString.call(n)), E(n) && (_ = " " + Date.prototype.toUTCString.call(n)), D(n) && (_ = " " + f(n)), o.length === 0 && (!v || n.length == 0)) return y[0] + _ + y[1];
		if (r < 0) return w(n) ? t.stylize(RegExp.prototype.toString.call(n), "regexp") : t.stylize("[Object]", "special");
		t.seen.push(n);
		var b = v ? p(t, n, r, s, o) : o.map(function(e) {
			return m(t, n, r, s, e, v);
		});
		return t.seen.pop(), h(b, _, y);
	}
	function d(e, t) {
		if (C(t)) return e.stylize("undefined", "undefined");
		if (x(t)) {
			var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
			return e.stylize(n, "string");
		}
		if (b(t)) return e.stylize("" + t, "number");
		if (_(t)) return e.stylize("" + t, "boolean");
		if (v(t)) return e.stylize("null", "null");
	}
	function f(e) {
		return "[" + Error.prototype.toString.call(e) + "]";
	}
	function p(e, t, n, r, i) {
		for (var a = [], o = 0, s = t.length; o < s; ++o) ee(t, String(o)) ? a.push(m(e, t, n, r, String(o), !0)) : a.push("");
		return i.forEach(function(i) {
			i.match(/^\d+$/) || a.push(m(e, t, n, r, i, !0));
		}), a;
	}
	function m(e, t, n, r, i, a) {
		var o, s, c = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] };
		if (c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), ee(r, i) || (o = "[" + i + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? u(e, c.value, null) : u(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
			return "  " + e;
		}).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
			return "   " + e;
		}).join("\n"))) : s = e.stylize("[Circular]", "special")), C(o)) {
			if (a && i.match(/^\d+$/)) return s;
			o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.slice(1, -1), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"));
		}
		return o + ": " + s;
	}
	function h(e, t, n) {
		var r = 0;
		return e.reduce(function(e, t) {
			return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
		}, 0) > 60 ? n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
	}
	e.types = ip();
	function g(e) {
		return Array.isArray(e);
	}
	e.isArray = g;
	function _(e) {
		return typeof e == "boolean";
	}
	e.isBoolean = _;
	function v(e) {
		return e === null;
	}
	e.isNull = v;
	function y(e) {
		return e == null;
	}
	e.isNullOrUndefined = y;
	function b(e) {
		return typeof e == "number";
	}
	e.isNumber = b;
	function x(e) {
		return typeof e == "string";
	}
	e.isString = x;
	function S(e) {
		return typeof e == "symbol";
	}
	e.isSymbol = S;
	function C(e) {
		return e === void 0;
	}
	e.isUndefined = C;
	function w(e) {
		return T(e) && A(e) === "[object RegExp]";
	}
	e.isRegExp = w, e.types.isRegExp = w;
	function T(e) {
		return typeof e == "object" && !!e;
	}
	e.isObject = T;
	function E(e) {
		return T(e) && A(e) === "[object Date]";
	}
	e.isDate = E, e.types.isDate = E;
	function D(e) {
		return T(e) && (A(e) === "[object Error]" || e instanceof Error);
	}
	e.isError = D, e.types.isNativeError = D;
	function O(e) {
		return typeof e == "function";
	}
	e.isFunction = O;
	function k(e) {
		return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === void 0;
	}
	e.isPrimitive = k, e.isBuffer = ap();
	function A(e) {
		return Object.prototype.toString.call(e);
	}
	function j(e) {
		return e < 10 ? "0" + e.toString(10) : e.toString(10);
	}
	var M = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	function N() {
		var e = /* @__PURE__ */ new Date(), t = [
			j(e.getHours()),
			j(e.getMinutes()),
			j(e.getSeconds())
		].join(":");
		return [
			e.getDate(),
			M[e.getMonth()],
			t
		].join(" ");
	}
	e.log = function() {
		console.log("%s - %s", N(), e.format.apply(e, arguments));
	}, e.inherits = op(), e._extend = function(e, t) {
		if (!t || !T(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e;
	};
	function ee(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}
	var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
	e.promisify = function(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		if (P && e[P]) {
			var n = e[P];
			if (typeof n != "function") throw TypeError("The \"util.promisify.custom\" argument must be of type Function");
			return Object.defineProperty(n, P, {
				value: n,
				enumerable: !1,
				writable: !1,
				configurable: !0
			}), n;
		}
		function n() {
			for (var t, n, r = new Promise(function(e, r) {
				t = e, n = r;
			}), i = [], a = 0; a < arguments.length; a++) i.push(arguments[a]);
			i.push(function(e, r) {
				e ? n(e) : t(r);
			});
			try {
				e.apply(this, i);
			} catch (e) {
				n(e);
			}
			return r;
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), P && Object.defineProperty(n, P, {
			value: n,
			enumerable: !1,
			writable: !1,
			configurable: !0
		}), Object.defineProperties(n, t(e));
	}, e.promisify.custom = P;
	function F(e, t) {
		if (!e) {
			var n = /* @__PURE__ */ Error("Promise was rejected with a falsy value");
			n.reason = e, e = n;
		}
		return t(e);
	}
	function I(e) {
		if (typeof e != "function") throw TypeError("The \"original\" argument must be of type Function");
		function n() {
			for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
			var r = t.pop();
			if (typeof r != "function") throw TypeError("The last argument must be of type Function");
			var i = this, a = function() {
				return r.apply(i, arguments);
			};
			e.apply(this, t).then(function(e) {
				process.nextTick(a.bind(null, null, e));
			}, function(e) {
				process.nextTick(F.bind(null, e, a));
			});
		}
		return Object.setPrototypeOf(n, Object.getPrototypeOf(e)), Object.defineProperties(n, t(e)), n;
	}
	e.callbackify = I;
})), cp = af();
function lp() {
	return typeof process < "u" ? new (sp()).TextEncoder() : new TextEncoder();
}
var up;
function dp() {
	let e, t = [];
	for (let n = 0; n < 256; n++) {
		e = n;
		for (let t = 0; t < 8; t++) e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
		t[n] = e;
	}
	return t;
}
function fp(e) {
	up ??= dp();
	let t = -1, n = lp().encode(e);
	for (let e = 0; e < n.length; e++) t = t >>> 8 ^ up[(t ^ n[e]) & 255];
	return (t ^ -1) >>> 0;
}
function pp(e) {
	return ("00000000" + fp(e).toString(16)).slice(-8);
}
//#endregion
//#region ../app/src/utils/urlHash.js
function mp(e) {
	let t = (0, cp.compressToEncodedURIComponent)(JSON.stringify(e));
	return "#" + t + pp(t);
}
function hp(e) {
	if (!e || e.length < 10) throw Error("The state string in the URL is too short.");
	let t = e.slice(1, -8), n = e.slice(-8);
	if (pp(t) !== n) throw Error("The state string in the URL is corrupted.");
	return JSON.parse((0, cp.decompressFromEncodedURIComponent)(t));
}
//#endregion
//#region ../app/src/utils/ui/tabs.js
function gp(e) {
	e.stopPropagation(), e.preventDefault();
	let t = e.target.parentElement, n = t.parentElement, r = n.parentElement.querySelector(".panes"), i = [...n.children].findIndex((e) => e == t);
	for (let e of n.children) e.classList.remove("active-tab");
	for (let e of r.children) e.classList.remove("active-tab");
	n.children.item(i).classList.add("active-tab"), r.children.item(i).classList.add("active-tab");
}
//#endregion
//#region ../app/src/components/dialogs/shareBookmarkDialog.js
var _p = class extends G {
	static properties = {
		...super.properties,
		bookmark: {},
		global: { type: Boolean }
	};
	static styles = [...super.styles, L`
            .copy-url {
                position: relative;

                button {
                    --color: rgb(66, 127, 240);
                    position: absolute;

                    --pad: 0.4em;
                    right: var(--pad);
                    top: var(--pad);
                    bottom: var(--pad);

                    box-shadow: 0 0 var(--pad) * 0.5 var(--pad) * 0.5 white;
                    border: 1px solid var(--color);
                    border-radius: 3px;
                    color: var(--color);
                    background-color: white;

                    &:hover {
                        color: white;
                        background-color: var(--color);
                    }
                }
            }
        `];
	constructor() {
		super(), this.bookmark = null, this.global = !1, this.dialogTitle = "Share Bookmark";
	}
	renderBody() {
		let e = this.bookmark ?? { name: "" }, t = JSON.stringify(e, void 0, 2), n = window.location, r = n.origin + n.pathname + n.search + (this.global ? "#bookmark:" + e.name.replaceAll(" ", "-") : mp(e));
		return R`
            <div class="gs-tabs" style="width: 600px">
                <ul class="tabs" @click=${gp}>
                    <li class="active-tab"><button>URL</button></li>
                    <li><button>JSON</button></li>
                </ul>
                <div class="panes">
                    <div class="gs-form-group active-tab">
                        <label for="bookmark-url">Here's a link for you:</label>
                        <div class="copy-url">
                            <input
                                id="bookmark-url"
                                type="text"
                                .value=${r}
                            />
                            <button @click=${async () => {
			try {
				await navigator.clipboard.writeText(r), this.finish({ ok: !0 }), this.triggerClose();
			} catch {}
		}}>Copy</button>
                        </div>
                        <small>
                            The bookmark URL contains all the bookmarked data,
                            including the possible notes, which will be shown
                            when the link is opened.
                        </small>
                    </div>
                    <div class="gs-form-group">
                        <textarea id="bookmark-json" style="height: 250px">
${t}</textarea
                        >
                        <small>
                            The JSON-formatted bookmark is currently available
                            for development purposes.
                        </small>
                    </div>
                </div>
            </div>
        `;
	}
};
customElements.define("gs-share-bookmark-dialog", _p);
function vp(e, t) {
	return K("gs-share-bookmark-dialog", (n) => {
		n.bookmark = e, n.global = !!t;
	});
}
//#endregion
//#region ../app/src/charts/plotBookmarkActions.js
function yp(e) {
	return {
		kind: "sample_attribute_plot",
		definition: e.request
	};
}
async function bp(e, t) {
	let n = e.getLocalBookmarkDatabase();
	if (!n) return;
	let r = e.createBookmark([yp(t)]);
	if (await rf(n, r, "add")) try {
		await e.saveLocalBookmark(r);
	} catch (e) {
		q(`${e}`, { title: "Cannot save the bookmark!" });
	}
}
async function xp(e, t) {
	let n = e.createBookmark([yp(t)]);
	await rf(void 0, n, "share") && vp(n, !1);
}
//#endregion
//#region ../app/src/charts/plotDialog.js
var Sp = class extends G {
	static properties = {
		...super.properties,
		plot: {},
		bookmarkContext: {}
	};
	static styles = [...super.styles, L`
            .plot-shell {
                inline-size: min(70vw, 700px);
                block-size: min(60vh, 450px);
                display: flex;
            }

            .chart-container {
                flex: 1;
                min-width: 0;
                min-height: 0;
            }
        `];
	constructor() {
		super(), this.plot = null, this.bookmarkContext = void 0, this._api = null;
	}
	connectedCallback() {
		super.connectedCallback(), this.addEventListener("gs-dialog-closed", () => {
			this._api?.finalize(), this._api = null;
		}, { once: !0 });
	}
	firstUpdated() {
		super.firstUpdated?.(), this.#e();
	}
	renderBody() {
		return this.plot ? R`<div class="plot-shell">
            <div class="chart-container"></div>
        </div>` : R``;
	}
	renderButtons() {
		return this.plot ? [
			this.makeButton("Add bookmark", () => (this.#t(), !0), {
				iconDef: Er,
				disabled: !this.bookmarkContext?.getLocalBookmarkDatabase()
			}),
			this.makeButton("Share", () => (this.#n(), !0), {
				iconDef: li,
				disabled: !this.bookmarkContext
			}),
			this.makeButton("Save PNG", () => (Rn(this.renderRoot, this._api, this.plot.filename), !0), { iconDef: qr }),
			this.makeCloseButton()
		] : [this.makeCloseButton()];
	}
	async #e() {
		if (!this.plot) throw Error("Plot dialog requires a plot.");
		let e = this.renderRoot.querySelector(".chart-container");
		if (!e) throw Error("Cannot find chart container.");
		this._api = await Gn(e, this.plot);
	}
	async #t() {
		!this.bookmarkContext || !this.plot || await bp(this.bookmarkContext, this.plot);
	}
	async #n() {
		!this.bookmarkContext || !this.plot || await xp(this.bookmarkContext, this.plot);
	}
};
customElements.define("gs-sample-attribute-plot-dialog", Sp);
function Cp(e, t = {}) {
	return K("gs-sample-attribute-plot-dialog", (n) => {
		let r = n;
		r.plot = e, r.bookmarkContext = t.bookmarkContext, r.dialogTitle = e.title;
	});
}
//#endregion
//#region ../app/src/sampleView/plotMenuItems.js
var wp = "SAMPLE_ATTRIBUTE";
function Tp(e, t, n, r = {}) {
	let { includeDivider: i = !0 } = r, a = t.type === "nominal" || t.type === "ordinal", o = t.type === "quantitative";
	if (!a && !o) return;
	if (i && e.push(xd), a) {
		e.push({
			label: "Show bar plot...",
			callback: () => Cp(wn({
				attributeInfo: t,
				sampleHierarchy: n.sampleHierarchy,
				attributeInfoSource: n.compositeAttributeInfoSource
			}), { bookmarkContext: n.plotBookmarkContext })
		});
		return;
	}
	if (!o) return;
	let s = n.sampleHierarchy.sampleMetadata.attributeNames.map((e) => n.compositeAttributeInfoSource.getAttributeInfo({
		type: wp,
		specifier: e
	})).filter((e) => e.type === "quantitative"), c = xn(n);
	e.push({
		label: "Show boxplot...",
		callback: () => Cp(Hn({
			attributeInfo: t,
			sampleHierarchy: n.sampleHierarchy,
			attributeInfoSource: n.compositeAttributeInfoSource
		}), { bookmarkContext: n.plotBookmarkContext })
	}), s.length !== 0 && e.push({
		label: "Create scatterplot against...",
		submenu: [{
			label: "Choose the secondary attribute",
			type: "header"
		}, ...s.map((e) => ({
			label: xl(e),
			callback: () => Cp(In({
				xAttributeInfo: t,
				yAttributeInfo: e,
				sampleHierarchy: n.sampleHierarchy,
				attributeInfoSource: n.compositeAttributeInfoSource,
				colorScaleDomain: c?.domain,
				colorScaleRange: c?.range
			}), { bookmarkContext: n.plotBookmarkContext })
		}))]
	});
}
//#endregion
//#region ../app/src/state/subscribeTo.js
function Ep(e, t, n, r = (e, t) => e === t) {
	let i = t(e.getState());
	return e.subscribe(() => {
		let a = t(e.getState());
		if (!r(i, a)) {
			let e = i;
			i = a, n(a, e);
		}
	});
}
function Dp(e) {
	let t = !1, n, r, i = () => {
		t = !1, e(n, r), r = void 0;
	};
	return (e, a) => {
		n = e, r ??= a, t || (t = !0, queueMicrotask(i));
	};
}
//#endregion
//#region ../app/src/utils/readyGate.js
function Op() {
	let e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function kp() {
	return {
		promise: Promise.resolve(),
		resolve: () => void 0,
		reject: () => void 0
	};
}
function Ap(e, t, n, r) {
	return n ? new Promise((i, a) => {
		let o = () => {
			r && r(), a(Error(t));
		};
		if (n.aborted) {
			o();
			return;
		}
		n.addEventListener("abort", o, { once: !0 }), e.then((e) => {
			n.removeEventListener("abort", o), i(e);
		}, (e) => {
			n.removeEventListener("abort", o), a(e);
		});
	}) : e;
}
var jp = class {
	#e;
	#t = kp();
	constructor(e) {
		this.#e = e;
	}
	reset() {
		let e = Op();
		return this.#t = e, e;
	}
	wait(e) {
		return Ap(this.#t.promise, this.#e, e);
	}
};
function Mp(e) {
	let t = !1;
	return (n) => {
		t || (t = !0, n ? e.reject(n) : e.resolve());
	};
}
var Np = class {
	#e = /* @__PURE__ */ new Set();
	#t;
	constructor(e) {
		this.#t = e;
	}
	wait(e, t) {
		let n, r = new Promise((e) => {
			n = e;
		}), i = {
			predicate: e,
			resolve: n
		};
		return this.#e.add(i), Ap(r, this.#t, t, () => {
			this.#e.delete(i);
		});
	}
	resolveMatching(e) {
		if (this.#e.size) for (let t of this.#e) t.predicate(e) && (this.#e.delete(t), t.resolve());
	}
}, Pp = "SAMPLE_ATTRIBUTE", Fp = class extends ie {
	#e;
	#t;
	#n = /* @__PURE__ */ new Map();
	#r = 0;
	#i = new jp("Metadata readiness was aborted.");
	#a = /* @__PURE__ */ new WeakMap();
	#o;
	constructor(e, t) {
		let n = e.spec.metadata ?? {}, r = {
			name: "sample-metadata",
			title: typeof n.title == "string" ? { text: n.title } : n.title === void 0 ? {
				text: "Sample metadata",
				orient: "none"
			} : n.title,
			configurableVisibility: !0,
			datasets: { metadata: [] },
			data: { name: "metadata" },
			hconcat: [],
			spacing: n.spacing ?? 1,
			resolve: {
				scale: { default: "independent" },
				axis: { default: "independent" }
			}
		};
		super(r, e.context, t, t, "sample-metadata"), this.#e = e, this._attributeHighlighState = {
			backgroundOpacity: 1,
			currentAttribute: void 0,
			abortController: new AbortController()
		}, this.#o = (e) => this.getAttributeInfo(e.specifier), this.#e.compositeAttributeInfoSource.addAttributeInfoSource(Pp, this.#o), this.registerDisposer(Ep(this.#e.provenance.store, (e) => e.provenance.present.sampleView.sampleMetadata, (e) => {
			this.#u(e);
		})), this.addInteractionListener("contextmenu", this.handleContextMenu.bind(this)), this.addInteractionListener("mousemove", (e) => {
			let t = e.target, n = this.#e.findSampleForMouseEvent(e), r = this.#_(t)?.attribute.specifier;
			if (n && e.mouseEvent.buttons === 0) {
				let e = JSON.stringify([n.id, r]);
				this.context.updateTooltip(e, (e) => {
					let [t, n] = JSON.parse(e);
					return Promise.resolve(this.#v(t, n));
				});
			}
			r && this.#s(r);
		}), this.addInteractionListener("mouseleave", (e) => {
			this._attributeHighlighState.currentAttribute && (e.uiEvent.type !== "mouseout" && this.coords.containsPoint(e.point.x, e.point.y) || this.#s(void 0));
		});
	}
	getEncoding() {
		return {};
	}
	render(e, t, n = {}) {
		if (!this.isConfiguredVisible()) return;
		let r = t.shrink(this.getOverhang());
		super.render(e, t, {
			...n,
			clipRect: this.#e.locationManager.clipBySummary(r)
		});
	}
	#s(e) {
		let t = this._attributeHighlighState;
		if (e != t.currentAttribute) {
			if (e) {
				let n = !t.currentAttribute;
				t.currentAttribute = e, n && this.#c(.1, {
					duration: 1e3,
					delay: t.backgroundOpacity < 1 ? 0 : 500
				}), this.context.animator.requestRender();
				return;
			}
			t.currentAttribute && (t.currentAttribute = void 0, this.#c(1, {
				duration: 200,
				delay: 0
			}), this.context.animator.requestRender());
		}
	}
	#c(e, t) {
		let n = this._attributeHighlighState;
		n.abortController.abort(), n.abortController = new AbortController(), this.context.animator.transition({
			from: n.backgroundOpacity,
			to: e,
			...t,
			onUpdate: (e) => {
				n.backgroundOpacity = e;
			},
			easingFunction: fr,
			signal: n.abortController.signal
		}).catch((e) => {});
	}
	#l(e) {
		let t = this._attributeHighlighState;
		return e == t.currentAttribute ? 1 : t.backgroundOpacity;
	}
	handleContextMenu(e) {
		let t = this.#e.findSampleForMouseEvent(e);
		if (!t) {
			e.mouseEvent.preventDefault();
			return;
		}
		let n = this.#e.sampleHierarchy.sampleMetadata.entities[t.id], r = [this.#e.makePeekMenuItem(e.point.y - this.#e.childCoords.y, t.id), xd], i = this.#_(e.target);
		if (i) {
			let e = i.attribute.specifier, t = n?.[e];
			r.push(...Bd(R`Attribute: <strong>${e}</strong>`, i, t, this.#e)), Tp(r, i, this.#e);
		}
		Id({ items: r }, e.mouseEvent);
	}
	async #u(e) {
		this.#t = e.entities;
		let t = this.context.dataFlow, n = ++this.#r, r = Mp(this.#i.reset());
		try {
			if (await this.#g(), await this.syncGuideViews(), this.#d(n)) {
				r();
				return;
			}
			Se(this);
			let i = (e) => e.isConfiguredVisible(), a = this.#f(t, i, n);
			if (a.updateDynamicData(this.#p(e)), await this.#h(a, i), this.#d(n)) {
				r();
				return;
			}
			this.#m(), this.context.requestLayoutReflow();
		} catch (e) {
			throw r(e instanceof Error ? e : Error(String(e))), e;
		} finally {
			r();
		}
	}
	#d(e) {
		return e !== this.#r;
	}
	#f(e, t, n) {
		let { graphicsPromises: i } = r(this, e, t), a = this.flowHandle?.dataSource;
		if (!a) throw Error("Cannot find metadata data source handle!");
		return _(i, () => n === this.#r), a;
	}
	#p(e) {
		let t = this.#e.sampleHierarchy.sampleData.entities, n = Object.entries(e.entities).map(([e, n]) => ({
			sample: e,
			indexNumber: t[e]?.indexNumber,
			...n
		}));
		return n.findIndex((e) => e.indexNumber === void 0) >= 0 && console.warn("Some metadata entries do not match any sample data"), n;
	}
	#m() {
		let e = /* @__PURE__ */ new Set();
		this.visit((t) => {
			if (t instanceof s) {
				let n = t.getScaleResolution("color");
				n && e.add(n);
			}
		});
		for (let t of e) t.reconfigureDomain();
	}
	#h(e, t) {
		let n = re(this, t);
		return n.delete(e), ne(this, n);
	}
	awaitMetadataReady(e) {
		return this.#i.wait(e);
	}
	async #g() {
		this.setChildren([]), this.#n.clear();
		let e = Jt(this.getAttributeNames(), "/"), t = this.#e.sampleHierarchy.sampleMetadata.attributeDefs, n = async (e, r, i) => {
			for (let a of e.children.values()) if (a.children.size == 0) {
				let e = a.path, n = new Ce(Ip(e, {
					...i,
					title: a.part,
					...t?.[e] ?? {}
				}, this.#e.spec.metadata), this.context, r, r, `attribute-${e}`);
				await n.initializeChildren();
				let o = n.findDescendantByName(zp(e));
				if (!(o instanceof s)) throw Error("Cannot find metadata foreground view for " + e);
				n.opacityFunction = (t) => t * this.#l(e), r.appendChild(n), this.#n.set(e, o);
				for (let t of n.getDescendants()) this.#a.set(t, e);
			} else {
				let e = t?.[a.path] ?? {}, o = `attributeGroup-${a.path}`, s = new ie({
					name: o,
					hconcat: [],
					configurableVisibility: !0,
					title: {
						text: e.title ?? a.part,
						orient: "none"
					},
					visible: e.visible ?? !0,
					spacing: this.#e.spec.metadata?.spacing ?? 1,
					resolve: {
						scale: { default: "independent" },
						axis: { default: "independent" }
					}
				}, this.context, r, r, o);
				r.appendChild(s), await n(a, s, {
					...i,
					...e,
					visible: void 0,
					title: void 0
				});
			}
		};
		await n(e, this, {});
		for (let e of this.getDescendants()) e instanceof s && e.name.startsWith("title") && typeof e.spec.mark != "string" && (e.spec.mark.clip = "never");
		d(this);
	}
	getAttributeNames() {
		return this.#e.sampleHierarchy.sampleMetadata.attributeNames;
	}
	getVisibleAttributeNames() {
		return Array.from(this.#n.entries()).filter(([, e]) => e.isVisible()).map(([e]) => e);
	}
	#_(e) {
		let t = this.#a.get(e);
		if (t) return this.getAttributeInfo(t);
	}
	getAttributeInfo(e) {
		let t = this.#n.get(e);
		if (!t) throw new An("No such attribute: " + e);
		let n = this.#e.sampleHierarchy.sampleMetadata.attributeDefs[e] ?? {}, r = t.getScaleResolution("color");
		return {
			name: e,
			attribute: {
				type: Pp,
				specifier: e
			},
			accessor: (t, n) => n.sampleMetadata.entities[t]?.[e],
			valuesProvider: On((t, n) => n.sampleMetadata.entities[t]?.[e]),
			type: r.type,
			scale: r.getScale(),
			title: R`<em class="attribute">${e}</em>`,
			shortTitle: n.title ?? rn(e),
			emphasizedName: e,
			description: t.spec.description
		};
	}
	#v(e, t) {
		let n = this.#n, r = (e, t) => Hp(t) ? this.getAttributeInfo(e).scale(t) : "transparent", i = this.#t[e];
		return R`
            <div class="title">
                <strong>${e}</strong>
            </div>
            ${R`
            <div class="autoscroll-container">
                <table class="attributes">
                    ${Object.entries(i).filter(([e]) => n.get(e).isVisible()).map(([e, n]) => R`
                                <tr
                                    class=${_r({ hovered: e == t })}
                                >
                                    <th>${Vp(e)}</th>
                                    <td>${m(n)}</td>
                                    <td
                                        class="color"
                                        style="background-color: ${r(e, n)}"
                                    ></td>
                                </tr>
                            `)}
                </table>
            </div>
        `}
        `;
	}
	getDefaultResolution(e, t) {
		return t == "legend" ? "excluded" : "independent";
	}
	handleVerboseCommand(e) {
		let t = e, n = Object.values(this.#e.sampleHierarchy.sampleMetadata.entities);
		for (let e of this.getAttributeNames()) {
			let r = this.getAttributeInfo(e);
			if ((r.type == "ordinal" || r.type == "nominal") && n.find((e) => e[r.attribute.specifier] == t)) {
				let n = this.#e.actions.filterByNominal({
					attribute: {
						type: Pp,
						specifier: e
					},
					values: [t]
				}), r = this.#e.provenance.getPresentState().lastAction, i = this.#e.actions.filterByNominal.match(r) && !r.payload.remove && r.payload.attribute.type == Pp && r.payload.attribute.specifier == e && r.payload.values.length == 1, a = this.#e.provenance.store;
				return i && a.dispatch(Wn.undo()), this.#e.dispatchAttributeAction(n), !0;
			}
		}
		return !1;
	}
	isPickingSupported() {
		return !1;
	}
	dispose() {
		super.dispose(), this.#e.compositeAttributeInfoSource.removeAttributeInfoSource(Pp, this.#o), this._attributeHighlighState.abortController.abort();
	}
};
function Ip(e, t, n) {
	if (!t) throw Error("No attribute definition for " + e);
	let r = n?.titleReserve ?? !1, i = Bp(e), a = `datum[${JSON.stringify(e)}]`, o = {
		name: zp(e),
		transform: [{
			type: "filter",
			expr: `${a} != null`
		}],
		mark: {
			type: "rect",
			xOffset: -.5
		},
		encoding: {
			facetIndex: { field: "indexNumber" },
			color: {
				field: i,
				type: t.type,
				scale: t.scale,
				legend: null
			}
		},
		opacity: 1
	};
	t.barScale && t.type == "quantitative" && (o.encoding.x = {
		field: i,
		type: t.type,
		scale: t.barScale,
		axis: null
	});
	let s = {
		overhang: { bottom: r },
		name: `attribute-${e}`,
		title: {
			text: t.title ?? e,
			orient: "bottom",
			align: "right",
			baseline: "middle",
			offset: 5,
			reserve: r,
			angle: n?.labelAngle ?? -90,
			dy: -.5,
			font: n?.labelFont,
			fontSize: n?.labelFontSize ?? 11,
			fontStyle: n?.labelFontStyle,
			fontWeight: n?.labelFontWeight
		},
		description: t.description,
		visible: t.visible ?? !0,
		width: t.width ?? n?.attributeWidth ?? 10,
		layer: [o]
	}, c = Lp(t, n);
	return c !== null && s.layer.unshift({
		name: Rp(e),
		mark: {
			type: "rect",
			xOffset: -.5
		},
		encoding: {
			facetIndex: { field: "indexNumber" },
			fill: { value: c },
			fillOpacity: { value: 1 },
			stroke: { value: null }
		}
	}), s;
}
function Lp(e, t) {
	return e.missingValueColor === void 0 ? t?.missingValueColor === void 0 ? e.barScale ? null : "#f0f0f0" : t.missingValueColor : e.missingValueColor;
}
function Rp(e) {
	return `attribute-${e}-missing-background`;
}
function zp(e) {
	return `attribute-${e}-value`;
}
function Bp(e) {
	return e.replaceAll("\\", "\\\\").replaceAll(".", "\\.").replaceAll("[", "\\[").replaceAll("]", "\\]");
}
function Vp(e) {
	return R`${ln(e, "/").map((e, t) => R`${t > 0 ? R` <span style="color: gray;">&rsaquo;</span> ` : ""}${e}`)}`;
}
function Hp(e) {
	return e !== "" && !(typeof e == "number" && isNaN(e)) && e !== null;
}
//#endregion
//#region ../app/src/sampleView/groupDialogs/retainGroupsByRankDialog.js
var Up = class extends G {
	static properties = {
		...super.properties,
		sampleView: {},
		level: { type: Number },
		limit: { type: Number },
		order: {}
	};
	constructor() {
		super(), this.sampleView = null, this.level = 1, this.limit = 5, this.order = "descending";
	}
	firstUpdated() {
		super.firstUpdated?.(), this.dialogTitle = this.sampleView.sampleHierarchy.groupMetadata.length > 1 ? "Retain ranked groups by size at this level" : "Retain ranked groups by size";
	}
	renderBody() {
		return R`
            <div class="gs-form-group">
                <p>
                    Keep the selected number of groups separately within each
                    ancestor group.
                </p>
                <label>Rank order:</label>
                <select
                    .value=${this.order}
                    @change=${Rc((e) => {
			this.order = e.value;
		})}
                >
                    <option value="descending">Largest groups</option>
                    <option value="ascending">Smallest groups</option>
                </select>
            </div>
            <div class="gs-form-group">
                <label>Number of groups to retain:</label>
                <input
                    autofocus
                    type="number"
                    min="1"
                    .valueAsNumber=${this.limit}
                    @change=${Rc((e) => {
			this.limit = e.valueAsNumber;
		})}
                />
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#e(), {
			iconDef: z,
			isPrimary: !0,
			disabled: !Number.isFinite(this.limit) || this.limit < 1
		})];
	}
	#e() {
		this.sampleView.provenance.store.dispatch(this.sampleView.actions.retainGroupsByRank({
			level: this.level,
			measure: "size",
			limit: this.limit,
			order: this.order
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-retain-groups-by-rank-dialog", Up);
function Wp(e, t) {
	return K("gs-retain-groups-by-rank-dialog", (n) => {
		n.sampleView = e, n.level = t, n.limit = 5, n.order = "descending";
	});
}
//#endregion
//#region ../app/src/sampleView/groupDialogs/retainGroupsBySizeDialog.js
var Gp = class extends G {
	static properties = {
		...super.properties,
		sampleView: {},
		level: { type: Number },
		operator: {},
		operand: {}
	};
	constructor() {
		super(), this.sampleView = null, this.level = 1, this.operator = "gte", this.operand = void 0;
	}
	firstUpdated() {
		super.firstUpdated?.(), this.dialogTitle = this.sampleView.sampleHierarchy.groupMetadata.length > 1 ? "Retain groups by size at this level" : "Retain groups by size";
	}
	#e(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	renderBody() {
		return R`
            <div class="gs-form-group">
                <p>Keep groups where size matches:</p>
                <gs-threshold-comparison-input
                    autofocus
                    .operator=${this.operator}
                    .operand=${this.operand}
                    .placeholder=${"Enter sample-count threshold"}
                    @change=${(e) => this.#e(e)}
                ></gs-threshold-comparison-input>
            </div>
        `;
	}
	renderButtons() {
		return [this.makeButton("Cancel", () => this.finish({ ok: !1 })), this.makeButton("Retain", () => this.#t(), {
			iconDef: z,
			isPrimary: !0,
			disabled: !rl(this.operand)
		})];
	}
	#t() {
		if (!rl(this.operand)) throw Error("Group size threshold is missing.");
		this.sampleView.provenance.store.dispatch(this.sampleView.actions.retainGroupsBySize({
			level: this.level,
			measure: "size",
			operator: this.operator,
			operand: this.operand
		})), this.finish({ ok: !0 });
	}
};
customElements.define("gs-retain-groups-by-size-dialog", Gp);
function Kp(e, t) {
	return K("gs-retain-groups-by-size-dialog", (n) => {
		n.sampleView = e, n.level = t, n.operator = "gte", n.operand = void 0;
	});
}
//#endregion
//#region ../app/src/sampleView/sampleGroupView.js
var qp = { step: 24 }, Jp = class extends Ce {
	#e = !0;
	constructor(e, t) {
		let n = {
			name: "sample-groups",
			title: {
				text: "Groups",
				orient: "none"
			},
			configurableVisibility: !0,
			width: qp,
			datasets: { groups: [] },
			data: { name: "groups" },
			transform: [
				{
					type: "filter",
					expr: "datum._depth > 0"
				},
				{
					type: "formula",
					as: "_y1",
					expr: "datum._index * 2"
				},
				{
					type: "formula",
					as: "_y2",
					expr: "datum._index * 2 + 1"
				},
				{
					type: "formula",
					as: "_title",
					expr: "datum.title || datum.name"
				},
				{
					type: "formula",
					as: "_NA",
					expr: "datum._title === null"
				},
				{
					type: "formula",
					as: "_title",
					expr: "datum._title !== null ? datum._title: 'NA'"
				}
			],
			encoding: {
				x: {
					field: "_depth",
					type: "ordinal",
					scale: {
						align: 0,
						paddingInner: .2272727,
						paddingOuter: 0
					},
					axis: null
				},
				y: {
					field: "_y1",
					type: "nominal",
					scale: {
						type: "ordinal",
						domain: Oe(500)
					},
					axis: null
				},
				y2: { field: "_y2" }
			},
			layer: [{
				title: "Group",
				mark: {
					type: "rect",
					clip: !0,
					color: "#e8e8e8",
					cornerRadiusBottomLeft: 14,
					cornerRadiusTopLeft: 14
				}
			}, {
				mark: {
					type: "text",
					clip: !0,
					angle: -90,
					paddingY: 5,
					tooltip: null
				},
				encoding: {
					text: { field: "_title" },
					opacity: {
						field: "_NA",
						type: "nominal",
						scale: {
							type: "ordinal",
							domain: [!1, !0],
							range: [1, .3]
						}
					}
				}
			}]
		};
		super(n, e.context, t, t, "sample-groups"), this.sampleView = e, this._addBroadcastHandler("layoutComputed", () => {
			this.updateRange();
		}), this.addInteractionListener("contextmenu", this.#t.bind(this));
	}
	#t(e) {
		let t = this.#n(), n = t?.length ?? this.#r(e.point);
		if (!n) {
			e.mouseEvent.preventDefault();
			return;
		}
		Id({ items: this.#i(n, t) }, e.mouseEvent);
	}
	#n() {
		let e = this.context.getCurrentHover();
		if (!e?.datum._rawGroup) return;
		let t = e.datum._rawGroup;
		for (let e of tr(this.sampleView.sampleHierarchy.rootGroup)) if (e.at(-1) === t) return e.slice(1);
	}
	#r(e) {
		let t = this.sampleView.sampleHierarchy.groupMetadata.length;
		return Yp(e.x - this.coords.x, this.coords.width, t);
	}
	#i(e, t) {
		let n = this.sampleView, r = n.provenance.store, i = n.sampleHierarchy.groupMetadata.length, a = i > 1, o = (e, t) => {
			let i = n.provenance.getActionInfo(e);
			return {
				label: t ?? i.title,
				icon: i.icon,
				callback: () => r.dispatch(e)
			};
		}, s = [{
			label: Xp(this.#o()[e], e, i),
			type: "header"
		}];
		if (t) {
			let e = t.at(-1), r = n.actions.removeGroup({ path: t.map((e) => e.name) });
			s.push(o(r, Zp(e.title ?? e.name)));
		}
		return s.push({
			icon: z,
			label: "Retain groups",
			submenu: [{
				icon: z,
				label: a ? "Ranked groups by size at this level..." : "Ranked groups by size...",
				callback: () => Wp(n, e)
			}, {
				icon: z,
				label: a ? "Groups by size threshold at this level..." : "Groups by size threshold...",
				callback: () => Kp(n, e)
			}]
		}, {
			...o(n.actions.ungroup({ level: e }), Qp(i)),
			icon: Nr
		}), s;
	}
	async initializeChildren() {
		await super.initializeChildren(), this.registerSizeInvalidation();
	}
	isConfiguredVisible() {
		return this.#e && super.isConfiguredVisible();
	}
	updateRange() {
		let e = this.sampleView.locationManager.getLocations()?.groups;
		if (!e?.length) return;
		let t = this.sampleView?.childCoords.height ?? 0, n = this.getScaleResolution("y"), r = [];
		for (let n of e) r.push(1 - (n.locSize.location + n.locSize.size) / t), r.push(1 - n.locSize.location / t);
		n.scale.range(r);
	}
	updateGroups() {
		let e = this.sampleView.locationManager.getLocations()?.groups ?? [], t = e.some((e) => e.key.depth > 0);
		this.#a(t);
		let n = this.flowHandle?.dataSource;
		if (!n) throw Error("Cannot find sample group data source handle!");
		let r = this.#o(), i = e.map((e) => ({
			_index: e.key.index,
			_depth: e.key.depth,
			_rawGroup: e.key.group,
			attribute: r[e.key.depth],
			name: e.key.group.name,
			...e.key.group.name == e.key.group.title ? {} : { title: e.key.group.title },
			...e.key.group.generatedTitle ? { interval: e.key.group.generatedTitle } : {},
			n: e.key.n
		}));
		n.updateDynamicData(i), e.length && this.updateRange();
	}
	#a(e) {
		this.#e !== e && (this.#e = e, this.invalidateSizeCache());
	}
	#o() {
		let e = document.createElement("div");
		return [null, ...this.sampleView.sampleHierarchy.groupMetadata].map((t) => {
			if (!t) return "unknown";
			let n = this.sampleView.compositeAttributeInfoSource.getAttributeInfo(t.attribute).title;
			return n ? zt(n) ? n : (E(n, e), e.textContent.replace(/\s+/g, " ").trim()) : "unknown";
		});
	}
};
function Yp(e, t, n) {
	if (!(n < 1 || t <= 0 || e < 0 || e >= t)) return Math.floor(e / t * n) + 1;
}
function Xp(e, t, n) {
	return n > 1 ? `${e} (level ${t})` : e;
}
function Zp(e) {
	return `Remove group ${e}`;
}
function Qp(e) {
	return e > 1 ? "Ungroup from this level" : "Ungroup";
}
//#endregion
//#region ../app/src/state/provenanceBaseline.js
var $p = "/__baseline__";
function em(e) {
	return !!e && e.type.endsWith("/__baseline__");
}
function tm(e, t) {
	e.dispatch(Wn.clearHistory()), e.dispatch({ type: t + $p });
}
//#endregion
//#region ../app/src/sampleView/compositeAttributeInfoSource.js
var nm = class {
	constructor() {
		this.attributeInfoSourcesByType = {};
	}
	addAttributeInfoSource(e, t) {
		this.attributeInfoSourcesByType[e] = t;
	}
	removeAttributeInfoSource(e, t) {
		t && this.attributeInfoSourcesByType[e] !== t || delete this.attributeInfoSourcesByType[e];
	}
	getAttributeInfo(e) {
		let t = this.attributeInfoSourcesByType[e.type];
		if (!t) throw new An("Cannot find attribute info source for: " + JSON.stringify(e));
		let n = t(e);
		if (n) return n;
		throw new An("Unknown attribute: " + JSON.stringify(e));
	}
}, rm = 35, im = 5, am = 15, om = .2, sm = class {
	#e = 0;
	#t = 0;
	#n = 0;
	#r = void 0;
	#i = void 0;
	#a = void 0;
	#o = void 0;
	#s;
	#c;
	#l = {
		height: 0,
		summaryHeight: 0,
		sampleHierarchy: void 0
	};
	#u = !0;
	#d = 0;
	#f = {
		peekState: 0,
		scrollOffset: 0,
		baseVersion: -1
	};
	#p = {
		baseVersion: -1,
		height: 0,
		peekState: 0,
		scrollOffset: 0,
		sampleCount: 0
	};
	constructor(e) {
		this.#c = e;
	}
	isCloseup() {
		return this.#e === 1;
	}
	resetLocations() {
		this.#u = !0, this.#a = void 0, this.#o = void 0, this.#s = void 0, this.#d += 1, this.#f.baseVersion = -1;
	}
	reset() {
		this.#e = 0, this.resetLocations();
	}
	getPeekState() {
		return this.#e;
	}
	getScrollOffset() {
		return this.#t;
	}
	setScrollOffset(e) {
		let t = Math.max(0, this.#n - this.#c.getHeight());
		this.#t = St(e, 0, t);
	}
	getScrollableHeight() {
		return this.#n;
	}
	getScrollMetrics(e, t = 0) {
		return mm({
			viewportHeight: e,
			summaryHeight: t,
			scrollableHeight: this.#n,
			scrollOffset: this.#t,
			peekState: this.#e
		});
	}
	getScrollbarLayout(e, t = 0) {
		let { effectiveViewportHeight: n, contentHeight: r, effectiveScrollOffset: i } = this.getScrollMetrics(e.height, t), a = t ? e.modify({
			y: () => e.y + t,
			height: () => n
		}) : e.modify({ height: () => n });
		return {
			viewportCoords: a,
			contentCoords: a.modify({ height: () => r }),
			effectiveScrollOffset: i
		};
	}
	handleWheelEvent(e) {
		this.setScrollOffset(this.#t + e.deltaY);
	}
	#m() {
		let e = this.#a.samples[0]?.locSize.size ?? 0;
		this.#c.onLocationUpdate({ sampleHeight: e });
	}
	togglePeek(e, t, n) {
		if (this.#e > 0 && this.#e < 1 || e !== void 0 && e == !!this.#e || !this.getLocations()) return Promise.resolve();
		let r = this.#c.viewContext, i = this.#c.getHeight(), a = {
			requestAnimationFrame: (e) => r.animator.requestTransition(e),
			onUpdate: (e) => {
				this.#e = e ** 2, this.#g(), r.animator.requestRender();
			},
			from: this.#e
		};
		if (this.#e == 0) {
			let e;
			if (n) e = ((e) => e.location + e.size / 2)(this.#s.samples.find((e) => e.key == n).locSize);
			else {
				let n = this.getSummaryAt(t);
				n && (e = this.#s.summaries[n.index].locSize.location - (n.location.locSize.location - t));
			}
			if (e ? this.#t = e - t : this.#t = (this.#n - i) / 2, this.#n > i) return wt({
				...a,
				to: 1,
				duration: 500,
				easingFunction: mr
			});
			{
				let e = (e) => (1 - (e * 2 - 1) ** 2) * .5;
				return wt({
					...a,
					from: 0,
					to: 1,
					duration: 300,
					easingFunction: e
				});
			}
		} else return wt({
			...a,
			to: 0,
			duration: 400,
			easingFunction: x
		});
	}
	getLocations() {
		if (this.#g()) return this.#a;
	}
	getGroupBackgroundRects(e) {
		let t = this.getLocations();
		if (!t) return [];
		let n = t.groups, r = n.map((e) => e.key.depth).reduce((e, t) => Math.max(e, t), 0), i = n.filter((e) => e.key.depth == r), a = this.#c.getSummaryHeight();
		e = e.flatten();
		let o = this.#c.isStickySummaries() && a > 0 ? e.shrink(new Ye(a, 0, 0, 0)) : e;
		return [...i.values()].map((t) => ({
			coords: e.modify({
				y: () => {
					let n = t.locSize.location;
					return e.y + n + a;
				},
				height: () => t.locSize.size - a
			}).intersect(o),
			clipRect: o
		}));
	}
	updateFacetTexture() {
		let e = this.#c.getSampleHierarchy().sampleData, t = e?.ids?.length ?? 0, n = Math.max(4, Math.ceil(t * 2 / 4) * 4);
		(!this.#i || this.#i.length !== n) && (this.#i = new Float32Array(n));
		let r = this.#c.getHeight(), i = this.#g();
		if (this.#p.baseVersion === this.#d && this.#p.height === r && this.#p.peekState === this.#e && this.#p.scrollOffset === this.#t && this.#p.sampleCount === t) return;
		let a = this.#i;
		a.fill(0);
		let o = e?.entities;
		if (i && o) {
			let e = this.#a.samples;
			for (let t of e) {
				let e = o[t.key].indexNumber;
				a[e * 2 + 0] = t.locSize.location / r, a[e * 2 + 1] = t.locSize.size / r;
			}
		}
		let s = this.#c.viewContext.glHelper.gl;
		this.#r = C(s, {
			internalFormat: s.RG32F,
			format: s.RG,
			height: 1
		}, a, this.#r), this.#p.baseVersion = this.#d, this.#p.height = r, this.#p.peekState = this.#e, this.#p.scrollOffset = this.#t, this.#p.sampleCount = t;
	}
	getFacetTexture() {
		return this.#r;
	}
	getSummaryAt(e) {
		let t = this.getLocations().summaries, n = t.findIndex((t) => hm(t.locSize, e));
		return n >= 0 ? {
			index: n,
			location: t[n]
		} : void 0;
	}
	clipBySummary(e) {
		if (this.#c.isStickySummaries()) {
			let t = this.#c.getSummaryHeight();
			if (t > 0) return e.modify({
				y: () => e.y + t,
				height: () => e.height - t
			});
		}
		return e;
	}
	#h() {
		let e = this.#c.getHeight();
		if (!e) return !1;
		let t = this.#c.getSampleHierarchy(), n = this.#c.getSummaryHeight();
		if (!this.#u && this.#l.height === e && this.#l.summaryHeight === n && this.#l.sampleHierarchy === t) return !0;
		let r = rr(t), i = this.#c.sampleLayout ?? {}, a = dm(r, {
			viewHeight: e,
			groupSpacing: i.groupSpacing ?? im,
			sampleSpacingFactor: i.sampleSpacingFactor ?? om,
			summaryHeight: n
		}), o = dm(r, {
			sampleHeight: i.sampleHeight ?? rm,
			groupSpacing: i.peekGroupSpacing ?? am,
			sampleSpacingFactor: i.sampleSpacingFactor ?? om,
			summaryHeight: n
		});
		return this.#o = {
			fitted: a,
			scrollable: o
		}, this.#s = o, this.#n = o.summaries.map((e) => e.locSize.location + e.locSize.size).reduce((e, t) => Math.max(e, t), 0), this.setScrollOffset(this.#t), this.#l = {
			height: e,
			summaryHeight: n,
			sampleHierarchy: t
		}, this.#u = !1, this.#a = void 0, this.#d += 1, !0;
	}
	#g() {
		if (!this.#h()) return !1;
		this.#a || (this.#a = cm(this.#o.fitted), this.#f.baseVersion = -1);
		let e = this.#e, t = this.#t, n = this.#d, r = this.#f.baseVersion !== n, i = this.#f.peekState !== e, a = this.#f.scrollOffset !== t;
		return !r && !i && !a ? !0 : (lm(this.#a, this.#o, e, -t), this.#f.peekState = e, this.#f.scrollOffset = t, this.#f.baseVersion = n, (r || i) && this.#m(), !0);
	}
};
function cm(e) {
	let t = {
		samples: [],
		summaries: [],
		groups: []
	};
	for (let n of e.samples) t.samples.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	for (let n of e.summaries) t.summaries.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	for (let n of e.groups) t.groups.push({
		key: n.key,
		locSize: {
			location: n.locSize.location,
			size: n.locSize.size
		}
	});
	return t;
}
function lm(e, t, n, r) {
	let { fitted: i, scrollable: a } = t;
	um(e.samples, i.samples, a.samples, n, r), um(e.summaries, i.summaries, a.summaries, n, r), um(e.groups, i.groups, a.groups, n, r);
}
function um(e, t, n, r, i) {
	if (r === 0) {
		for (let n = 0; n < e.length; n++) {
			let r = e[n].locSize, i = t[n].locSize;
			r.location = i.location, r.size = i.size;
		}
		return;
	}
	if (r === 1) {
		for (let t = 0; t < e.length; t++) {
			let r = e[t].locSize, a = n[t].locSize;
			r.location = a.location + i, r.size = a.size;
		}
		return;
	}
	let a = 1 - r;
	for (let o = 0; o < e.length; o++) {
		let s = e[o].locSize, c = t[o].locSize, l = n[o].locSize;
		s.location = r * (l.location + i) + a * c.location, s.size = r * l.size + a * c.size;
	}
}
function dm(e, { viewHeight: t = 0, sampleHeight: n = 0, groupSpacing: r = 5, sampleSpacingFactor: i = om, summaryHeight: a = 0 }) {
	if (!t && !n) throw Error("viewHeight or sampleHeight must be provided!");
	let o = (e) => ut(e), s = e.map((e) => ({
		path: e,
		sampleGroup: o(e),
		samples: o(e).samples
	})).filter((e) => e.samples.length), c = n ? (e) => ({
		px: e.length * n + a,
		grow: 0
	}) : (e) => ({
		px: a,
		grow: e.length
	}), l = [];
	Pe(s.map((e) => c(e.samples)), t, { spacing: r }).forEach((e, t) => {
		l.push({
			key: s[t].path,
			locSize: e
		});
	});
	let u = [];
	for (let [e, t] of s.entries()) {
		let n = { grow: 1 }, r = t.samples;
		Pe(r.map((e) => n), Math.max(0, l[e].locSize.size - a), { offset: l[e].locSize.location + a }).forEach((e, t) => {
			let { size: n, location: a } = e, o = n * i * .5 * ot(15, 22, n);
			e.location = a + o, e.size = n - 2 * o, u.push({
				key: r[t],
				locSize: e
			});
		});
	}
	function* d() {
		let e = [];
		for (let t of l) {
			let n = t.key, r = ut(n);
			for (; e.length <= n.length && e.length && n[e.length - 1] != e[e.length - 1].group;) yield e.pop();
			for (let n = 0; n < e.length; n++) {
				let r = e[n];
				r.locSize.size = t.locSize.location - r.locSize.location + t.locSize.size;
			}
			for (let r = e.length; r < n.length; r++) e.push({
				group: n[r],
				locSize: { ...t.locSize },
				depth: e.length,
				n: 0
			});
			for (let t of e) t.n += r.samples.length;
		}
		for (; e.length;) yield e.pop();
	}
	return {
		samples: u,
		summaries: l,
		groups: [...d()].sort((e, t) => e.depth - t.depth).map((e, t) => ({
			key: {
				index: t,
				group: e.group,
				depth: e.depth,
				n: e.n,
				attributeLabel: void 0
			},
			locSize: e.locSize
		}))
	};
}
function fm(e, t) {
	return t.find((t) => hm(t.locSize, e));
}
function pm(e, t) {
	if (!t?.length || !Number.isFinite(e)) return;
	let n = fm(e, t);
	if (n) return n;
	let r = t[0], i = gm(e, r.locSize);
	for (let n = 1; n < t.length; n++) {
		let a = t[n], o = gm(e, a.locSize);
		o < i && (r = a, i = o);
	}
	return r;
}
function mm({ viewportHeight: e, scrollableHeight: t, scrollOffset: n, peekState: r, summaryHeight: i = 0 }) {
	let a = Math.max(0, e - i), o = t || a;
	return {
		peekState: r,
		summaryHeight: i,
		effectiveViewportHeight: a,
		effectiveScrollableHeight: o,
		contentHeight: a + (o - a) * r,
		effectiveScrollOffset: n * r
	};
}
function hm(e, t) {
	return t >= e.location && t < e.location + e.size;
}
function gm(e, t) {
	return hm(t, e) ? 0 : e < t.location ? t.location - e : e - (t.location + t.size);
}
//#endregion
//#region ../app/src/sampleView/specGuards.js
function _m(e) {
	return "samples" in e && nn(e.samples) && "spec" in e && nn(e.spec);
}
function vm(e) {
	return e && (i(e) || v(e)) && "aggregateSamples" in e;
}
//#endregion
//#region ../app/src/sampleView/datumLookup.js
function ym(e, t = e.getCollector()) {
	let n = e.getDataAccessor("x"), r = e.getDataAccessor("x2"), i = e.getScaleResolution("x")?.getScale()?.type, a = i ? Et(i) : !1;
	return !t || !n ? () => void 0 : a ? (e, r) => t.facetBatches.get(pt(e))?.find((e) => r == n(e)) : !a && r ? (e, i) => t.facetBatches.get(pt(e))?.find((e) => i >= n(e) && i < r(e)) : (e, r) => t.facetBatches.get(pt(e))?.find((e) => r == n(e));
}
//#endregion
//#region ../app/src/utils/predicates/featureFilter.js
function bm(e) {
	let t = e.field;
	if (e.operator === "eq") return (n) => n[t] === e.value;
	if (e.operator === "in") {
		let n = new Set(e.values);
		return (e) => n.has(e[t]);
	} else {
		let n = fn(e.operator, e.value);
		return (e) => n(e[t]);
	}
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/attributeAggregation.js
function xm(e) {
	let t = e[0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		r < t && (t = r);
	}
	return t;
}
function Sm(e) {
	let t = e[0];
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		r > t && (t = r);
	}
	return t;
}
function Cm(e, t) {
	let n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = t[i];
		n += e[i] * a, r += a;
	}
	if (r !== 0) return n / r;
}
function wm(e, t) {
	let n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = t[i];
		n += e[i] * a, r += a;
	}
	if (r === 0) return;
	let i = n / r, a = 0;
	for (let n = 0; n < e.length; n++) {
		let r = e[n] - i;
		a += t[n] * r * r;
	}
	return a / r;
}
function Tm(e) {
	return e.length;
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/attributeAccessors.js
function Em(e, t, n) {
	if ("interval" in t) {
		let r = jn(n, t.interval);
		return [zn(e, r[0]), zn(e, r[1])];
	} else if ("locus" in t) {
		let n = zn(e, t.locus);
		return [n, n];
	} else throw Error("Unsupported view attribute specifier.");
}
function Dm(e, t) {
	let n = e.getEncoding()?.x?.type;
	if ("aggregation" in t && (!n || ![
		"quantitative",
		"index",
		"locus"
	].includes(n))) throw Error("Interval aggregation requires an x encoding of type quantitative, index, or locus!");
	let r = e.getScaleResolution("x"), i = e.getLayoutAncestors().at(-1), a = e.getCollector(), o = e.getDataAccessor("x"), s = e.mark?.defaultHitTestMode ?? "intersects", c = e.getDataAccessor("x2");
	if (!a || !o) return () => void 0;
	let l, u = () => (l ||= Em(r, t, i), l);
	if (!("aggregation" in t)) {
		let n = ym(e, a);
		return (e) => {
			let r = u();
			return n(e, r[0])?.[t.field];
		};
	}
	let d = (e) => e[t.field], f = t.featureFilter ? bm(t.featureFilter) : () => !0, p, m = () => {
		if (!p) {
			let e = u();
			if (typeof e[0] != "number" || typeof e[1] != "number") throw Error("Interval aggregation requires numeric coordinates!");
			p = e[0] <= e[1] ? e : [e[1], e[0]];
		}
		return p;
	}, h = t.aggregation.op, g = h === "weightedMean" || h === "variance", _ = (e, t, n, r) => {
		let i = d(e);
		i != null && (n.push(i), g && r.push(t));
	};
	return (e) => {
		let [t, n] = m(), r = a.facetBatches.get(pt(e));
		if (!r?.length) return h === "count" || h === "itemCount" ? 0 : void 0;
		let i = [], l = [], u = 0;
		switch (Kn(r, o, c, s, t, n, (e, t) => {
			f(e) && (u += 1, _(e, t, i, l));
		}), h) {
			case "itemCount": return u;
			case "count": return Tm(i);
			case "min": return xm(i);
			case "max": return Sm(i);
			case "weightedMean": return Cm(i, l);
			case "variance": return wm(i, l);
			default: throw Error("Unknown aggregation op: " + h);
		}
	};
}
//#endregion
//#region ../app/src/sampleView/attributeAggregation/intervalFormatting.js
function Om(e, t) {
	let n = e.getScaleResolution("x")?.getScale(), r = "genome" in n ? n.genome() : void 0;
	if (r) {
		let e = t.every(u) ? r.toContinuousInterval(t) : t;
		return r.formatInterval(e);
	}
	return pe(t[0]) + " – " + pe(t[1]);
}
//#endregion
//#region ../app/src/sampleView/viewRef.js
function km(e) {
	if (!e.explicitName) throw Error("Cannot create a view reference without an explicit view name.");
	return ft(e);
}
function Am(e, t) {
	return typeof t == "string" ? Fm(e, t) : Pm(e, t);
}
function jm(e) {
	if (!e.explicitName) return;
	let t = ft(e);
	return JSON.stringify({
		s: t.scope,
		v: t.view
	});
}
function Mm(e) {
	let t = /* @__PURE__ */ new Map();
	Dt(e, (e) => {
		let n = jm(e);
		n && t.set(n, (t.get(n) ?? 0) + 1);
	});
	let n = /* @__PURE__ */ new Set();
	for (let [e, r] of t) r === 1 && n.add(e);
	return n;
}
function Nm(e) {
	return typeof e == "string" ? e : JSON.stringify(e);
}
function Pm(e, t) {
	let n = nt(e, t);
	if (!n) throw Error("Cannot resolve view selector: " + Nm(t));
	return n;
}
function Fm(e, t) {
	let n = [];
	if (Dt(e, (e) => {
		e.explicitName === t && n.push(e);
	}), n.length === 1) return n[0];
	throw n.length === 0 ? Error("Cannot find view: " + t) : Error("Multiple views named \"" + t + "\" found. Name imports or use a selector object.");
}
//#endregion
//#region ../app/src/viewScopeUtils.js
function Im(e, t, n) {
	if (!Rm(e, t)) return n;
	let r = Bm(t);
	return r.length ? r.join("/") + "/" + n : n;
}
function Lm(e, t) {
	return !zm(e, t.param) || !Array.isArray(t.scope) || t.scope.length === 0 ? t.param : t.scope.join("/") + "/" + t.param;
}
function Rm(e, t) {
	if (!e || typeof e.visit != "function") return !1;
	let n = t.explicitName;
	if (typeof n != "string" || n.length === 0) return !1;
	let r = 0;
	return Dt(e, (e) => {
		e.explicitName === n && (r += 1);
	}), r > 1;
}
function zm(e, t) {
	if (!e || typeof e.visit != "function") return !1;
	let n = 0;
	for (let r of rt(e)) r.selector.param === t && (n += 1);
	return n > 1;
}
function Bm(e) {
	try {
		return at(e);
	} catch {
		return [];
	}
}
//#endregion
//#region ../app/src/sampleView/viewAttributeInfoSource.js
function Vm(e, t) {
	let n = t.specifier, r = Am(e, n.view), i = Im(e, r, String(r.getTitleText() ?? r.name)), a = "aggregation" in n ? Bt(n.aggregation.op, n.field, n.featureFilter) : n.field, o = "aggregation" in n ? Hm(n.aggregation.op, n.field, n.featureFilter) : R`<em class="attribute">${n.field}</em>`, s = "aggregation" in n ? Hm(n.aggregation.op, n.field, n.featureFilter) : R`<em class="attribute">${n.field}</em>`, c = Dm(r, n), l = On(c), u = (e) => {
		if (!e.interval) return l(e);
		if (!e.aggregation) throw Error("Interval values require an aggregation specification!");
		let t = {
			view: n.view,
			field: n.field,
			interval: e.interval,
			aggregation: e.aggregation
		}, i = Dm(r, t);
		return e.sampleIds.map((t) => i(t, e.sampleHierarchy));
	}, d = Object.entries(r.getEncoding()).find(([e, t]) => "field" in t && t.field == n.field), f = d?.[0], p = d?.[1];
	if (!p && !("aggregation" in n)) throw Error(`Cannot resolve field '${n.field}' in view '${r.name}'`);
	if (!p && "aggregation" in n && n.aggregation.op !== "count" && n.aggregation.op !== "itemCount") throw Error(`Aggregation '${n.aggregation.op}' requires a field definition for '${n.field}' in view '${r.name}'`);
	let m = f && Ot(f) ? r.getScaleResolution(f).getScale() : void 0, h = p && "scale" in p && p.scale && typeof p.scale == "object" ? p.scale : void 0, g = p && "type" in p ? p.type : void 0, _ = "aggregation" in n ? "quantitative" : g, v, y;
	if ("ensureViewAttributeAvailability" in e) {
		let t = e;
		v = (e) => t.ensureViewAttributeAvailability(n, e), y = (e) => t.awaitViewAttributeProcessed(n, e);
	}
	return {
		name: a,
		attribute: t,
		title: R`${s}
            <span class="viewTitle">(${i})</span>
            ${(() => {
			if (Vn(n)) {
				if (Jn(n.interval)) return R`in
                    <span class="interval"
                        >${Om(r, n.interval)}</span
                    >`;
				if (gn(n.interval)) return R`in
                    <span class="interval"
                        >selection <strong>${Lm(e, n.interval.selector)}</strong></span
                    >`;
				throw Error("Unsupported interval reference.");
			} else if ("locus" in n) return R`at
                <span class="locus"
                    >${Wm(n.locus)}</span
                >`;
			else throw Error("Unsupported view attribute specifier.");
		})()}`,
		accessor: c,
		valuesProvider: u,
		type: _,
		ensureAvailability: v,
		awaitProcessed: y,
		scale: m,
		scaleSpec: h,
		emphasizedName: o,
		description: p?.description
	};
}
function Hm(e, t, n) {
	if (e === "itemCount") {
		let t = n ? R`(where ${Um(n)})` : "";
		return R`${Mn(e)}${t}`;
	}
	if (e === "count") {
		let r = n ? R` where ${Um(n)}` : "";
		return R`${Mn(e)}(<em class="attribute"
                >${t}</em
            >${r})`;
	}
	let r = n ? R` where ${Um(n)}` : "";
	return R`${Qt(e)}(<em class="attribute">${t}</em
        >${r})`;
}
function Um(e) {
	return e.operator === "in" ? R`<em class="attribute">${e.field}</em> in
            {${yl(e.values, (e, t) => R`${t > 0 ? ", " : ""}<strong
                            >${tn(e)}</strong
                        >`)}}` : R`<em class="attribute">${e.field}</em>
        ${$t(e.operator)}
        ${tn(e.value)}`;
}
function Wm(e) {
	return u(e) || typeof e == "number" ? pe(e) : String(e);
}
//#endregion
//#region ../app/src/sampleView/sampleLabelView.js
var Gm = "SAMPLE_NAME", Km = "_indexNumber", qm = "_labelWidth", Jm = "_labelTitle", Ym = "_labelTitleWidth", Xm = Object.freeze({
	name: "sample",
	title: R`<em class="attribute">Sample</em>`,
	emphasizedName: R`<em class="attribute">Sample</em>`,
	attribute: { type: Gm },
	accessor: (e) => e,
	valuesProvider: On((e) => e),
	type: "identifier",
	scale: void 0
}), Zm = class extends s {
	#e;
	#t;
	#n;
	#r = [];
	constructor(e, t) {
		super(Qm(e.spec.samples, e.spec.metadata), e.context, t, t, "metadata-sample-label"), this.#e = e, this.#t = e.spec.samples.labelLength == null, this.#n = () => Xm, e.compositeAttributeInfoSource.addAttributeInfoSource(Gm, this.#n), this.addInteractionListener("contextmenu", this.handleContextMenu.bind(this)), this.registerDisposer(Ep(e.provenance.store, (e) => e.provenance.present.sampleView.sampleData, (e) => {
			this.#i(Object.values(e.entities));
		})), this.registerDisposer(this._addBroadcastHandler("subtreeDataReady", () => {
			this.#i(this.#r);
		}));
	}
	#i(e) {
		this.#r = e;
		let t = this.flowHandle?.dataSource;
		if (!t) return;
		let n = eh(this.#e.spec.samples) ?? "";
		t.updateDynamicData(e.map((e) => ({
			id: e.id,
			displayName: e.displayName ?? e.id,
			[Km]: e.indexNumber,
			[Jm]: n
		}))), this.#t && this.#a();
	}
	render(e, t, n = {}) {
		this.isConfiguredVisible() && super.render(e, t, {
			...n,
			clipRect: this.#e.locationManager.clipBySummary(t)
		});
	}
	#a() {
		let e = this.getCollector();
		if (!e?.completed) return;
		let t = $m(e);
		this.spec.width !== t && (this.spec.width = t, this.invalidateSizeCache(), this.context.requestLayoutReflow());
	}
	handleContextMenu(e) {
		let t = this.#e.findSampleForMouseEvent(e);
		if (!t) {
			e.mouseEvent.preventDefault();
			return;
		}
		let n = [this.#e.makePeekMenuItem(e.point.y - this.#e.childCoords.y, t.id), xd];
		n.push(...Bd(R`Sample: <strong>${t.displayName}</strong>`, Xm, t.id, this.#e)), Id({ items: n }, e.mouseEvent);
	}
	dispose() {
		super.dispose(), this.#e.compositeAttributeInfoSource.removeAttributeInfoSource(Gm, this.#n);
	}
};
function Qm(e, t) {
	let n = eh(e), r = {
		name: "sample-labels",
		datasets: { samples: [] },
		data: { name: "samples" },
		width: e.labelLength ?? 0,
		configurableVisibility: !0,
		transform: [{
			type: "measureText",
			field: "displayName",
			as: qm,
			fontSize: e.labelFontSize ?? 11,
			font: e.labelFont,
			fontStyle: e.labelFontStyle,
			fontWeight: e.labelFontWeight
		}, {
			type: "measureText",
			field: Jm,
			as: Ym,
			fontSize: t?.labelFontSize ?? 11,
			font: t?.labelFont,
			fontStyle: t?.labelFontStyle,
			fontWeight: t?.labelFontWeight
		}],
		mark: {
			type: "text",
			baseline: "middle",
			font: e.labelFont,
			size: e.labelFontSize ?? 11,
			fontStyle: e.labelFontStyle,
			fontWeight: e.labelFontWeight,
			align: e.labelAlign ?? "left",
			flushY: !1
		},
		encoding: {
			facetIndex: { field: Km },
			x: { value: 0 },
			x2: { value: 1 },
			y: { value: 0 },
			y2: { value: 1 },
			text: { field: "displayName" }
		}
	};
	return n !== null && (r.title = {
		text: n,
		orient: "bottom",
		anchor: "start",
		offset: 5,
		font: t?.labelFont,
		fontSize: t?.labelFontSize ?? 11,
		fontStyle: t?.labelFontStyle,
		fontWeight: t?.labelFontWeight
	}), r;
}
function $m(e) {
	let t = 0;
	return e.visitData((e) => {
		t = Math.max(t, Number(e[qm]) || 0, Number(e[Ym]) || 0);
	}), Math.ceil(t);
}
function eh(e) {
	return e.labelTitle === void 0 ? "Sample" : e.labelTitle;
}
//#endregion
//#region ../app/src/sampleView/sampleViewSpecNormalizer.js
var th = "The samples.data, samples.attributeGroupSeparator, and samples.attributes properties are deprecated. Use metadata.sources instead.", nh = "samples.metadataSources is deprecated. Use metadata.sources instead.", rh = "Metadata layout properties under samples are deprecated. Use metadata layout properties instead.", ih = "samples.labelTitleText is deprecated. Use samples.labelTitle instead.";
function ah(e) {
	return typeof e == "object" && !!e && ("url" in e || "values" in e);
}
function oh(e) {
	return e.data !== void 0 || e.attributeGroupSeparator !== void 0 || e.attributes !== void 0;
}
function sh(e) {
	let t = {};
	return e.attributeSize !== void 0 && (t.attributeWidth = e.attributeSize), e.attributeSpacing !== void 0 && (t.spacing = e.attributeSpacing), e.attributeLabelFont !== void 0 && (t.labelFont = e.attributeLabelFont), e.attributeLabelFontSize !== void 0 && (t.labelFontSize = e.attributeLabelFontSize), e.attributeLabelFontStyle !== void 0 && (t.labelFontStyle = e.attributeLabelFontStyle), e.attributeLabelFontWeight !== void 0 && (t.labelFontWeight = e.attributeLabelFontWeight), e.attributeLabelAngle !== void 0 && (t.labelAngle = -90 + e.attributeLabelAngle), t;
}
function ch(e) {
	let t = e.data;
	if (!ah(t)) throw Error("Legacy samples.data must be UrlData or InlineData when mapping to metadata.sources.");
	let n = {
		initialLoad: "*",
		excludeColumns: ["displayName"],
		backend: {
			backend: "data",
			data: t,
			sampleIdField: "sample"
		}
	};
	return e.attributeGroupSeparator !== void 0 && (n.attributeGroupSeparator = e.attributeGroupSeparator), e.attributes !== void 0 && (n.attributes = e.attributes), n;
}
function lh(e) {
	let t = e.samples ?? {}, n = e.metadata ?? {}, r = [], i = n.sources !== void 0, a = t.metadataSources !== void 0, o = oh(t);
	if (i && a) throw Error("Cannot combine metadata.sources with samples.metadataSources. Use metadata.sources only.");
	if (i && o) throw Error("Cannot combine metadata.sources with legacy sample metadata fields (samples.data, samples.attributeGroupSeparator, and samples.attributes). Use metadata.sources only.");
	if (a && o) throw Error("Cannot combine samples.metadataSources with legacy sample metadata fields (samples.data, samples.attributeGroupSeparator, and samples.attributes). Use metadata.sources only.");
	let s = sh(t), c = Object.keys(s).length > 0, l = { ...t }, u = { ...n }, d = !1;
	return t.labelTitleText !== void 0 && t.labelTitle === void 0 && (l.labelTitle = t.labelTitleText, d = !0, r.push(ih)), o ? (l.identity = t.identity ?? {
		data: t.data,
		idField: "sample",
		displayNameField: "displayName"
	}, u.sources = [ch(t)], d = !0, r.push(th)) : a && (u.sources = t.metadataSources, d = !0, r.push(nh)), c && (Object.assign(u, s, n), d = !0, r.push(rh)), d ? {
		spec: {
			...e,
			samples: l,
			metadata: u
		},
		warnings: r
	} : {
		spec: e,
		warnings: r
	};
}
//#endregion
//#region ../app/src/utils/ui/schemeToDataUrl.js
var uh = /* @__PURE__ */ "blues.greens.greys.oranges.purples.reds.blueGreen.bluePurple.greenBlue.orangeRed.purpleBlue.purpleBlueGreen.purpleRed.redPurple.yellowGreen.yellowOrangeBrown.yellowOrangeRed.blueOrange.brownBlueGreen.purpleGreen.purpleOrange.redBlue.redGrey.yellowGreenBlue.redYellowBlue.redYellowGreen.pinkYellowGreen.spectral.viridis.magma.inferno.plasma.cividis.rainbow.sinebow.turbo.browns.tealBlues.teals.warmGreys.goldGreen.goldOrange.goldRed.lightGreyRed.lightGreyTeal.lightMulti.lightOrange.lightTealBlue.darkBlue.darkGold.darkGreen.darkMulti.darkRed.accent.category10.category20.category20b.category20c.dark2.observable10.paired.pastel1.pastel2.set1.set2.set3.tableau10.tableau20".split(".");
function dh(e) {
	let t = document.createElement("canvas");
	t.width = 120, t.height = 14;
	let n = t.getContext("2d"), r = ke(e);
	if (!r) throw Error(`Unknown scheme name: ${e}`);
	if (typeof r == "function") {
		let e = r, i = t.width / 20;
		for (let r = 0; r < 20; r++) n.fillStyle = e(r / 19), n.fillRect(Math.floor(r * i), 0, Math.ceil(i), t.height);
	} else if (Array.isArray(r)) {
		let e = r, i = e.length, a = t.width / i;
		for (let r = 0; r < i; r++) n.fillStyle = e[r], n.fillRect(Math.floor(r * a), 0, Math.ceil(a), t.height);
	} else throw Error(`Unknown scheme format for scheme: ${e}`);
	return t.toDataURL();
}
//#endregion
//#region ../app/src/sampleView/metadata/scaleUtils.js
function fh(e, t) {
	if (e === "quantitative") {
		let e = Infinity, n = -Infinity;
		for (let r of t) {
			let t = Number(r);
			Number.isFinite(t) && (t < e && (e = t), t > n && (n = t));
		}
		return e === Infinity ? [] : [e, n];
	}
	let n = /* @__PURE__ */ new Set();
	for (let e of t) e != null && n.add(String(e));
	return Array.from(n);
}
//#endregion
//#region ../app/src/components/generic/customSelect.js
var ph = class extends I {
	static properties = {
		options: { type: Array },
		value: {},
		disabled: { type: Boolean },
		renderOption: { attribute: !1 },
		getValue: { attribute: !1 },
		getLabel: { attribute: !1 },
		_activeIndex: { state: !0 },
		_open: { state: !0 }
	};
	_popoverId;
	_cleanupAutoUpdate;
	constructor() {
		super(), this.options = [], this.value = null, this.disabled = !1, this.renderOption = null, this.getValue = (e) => e && typeof e == "object" && "value" in e ? e.value : e, this.getLabel = (e) => e && typeof e == "object" && "label" in e ? String(e.label) : String(e), this._activeIndex = -1, this._open = !1, this._popoverId = `gs-select-${Math.random().toString(36).slice(2)}`, this._cleanupAutoUpdate = null, this.addEventListener("keydown", (e) => {
			e.stopPropagation();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#d(), this.#u();
	}
	static styles = [Tc, L`
            :host {
                display: inline-block;
                font-size: inherit;
                font-family: inherit;
            }

            .container {
                position: relative;
                display: block;
                min-width: 12em;
            }

            .trigger.btn {
                width: 100%;
                justify-content: flex-start;
                gap: 0.5em;
            }

            .selected-content {
                display: inline-flex;
                align-items: center;
                gap: 0.5em;
                line-height: 1.4;
            }

            .panel {
                background: #fff;
                border: 1px solid var(--form-control-border-color);
                border-radius: var(--form-control-border-radius);
                box-shadow: 0px 8px 18px rgba(0, 0, 0, 0.12);
                padding: 0.35em 0.35em;
                max-height: 300px;
                overflow: auto;
                min-width: 100%;
                /* Avoid default focus ring on the container when keyboard-opening */
                outline: none;
            }

            .panel:focus,
            .panel:focus-visible {
                outline: none;
            }

            /* Popover positioned with floating-ui */
            .panel[popover] {
                position: absolute;
                margin: 0;
                inset: unset;
                border: 1px solid var(--form-control-border-color);
            }

            .option {
                display: flex;
                align-items: center;
                gap: 0.5em;
                padding: 0.35em 0.5em;
                border-radius: 0.3em;
                cursor: pointer;
                user-select: none;
            }

            .option:hover {
                background-color: #f3f4f6;
            }

            .option[aria-selected="true"] {
                background-color: #e9ecef;
            }

            .option.active {
                background-color: #eef3ff;
                outline: 2px solid #c6dbff;
                outline-offset: -2px;
            }
        `];
	#e() {
		return this.renderRoot.querySelector(`#${this._popoverId}`);
	}
	#t() {
		return this.renderRoot.querySelector(".trigger");
	}
	#n() {
		let e = this.value;
		return this.options.findIndex((t) => this.getValue(t) === e);
	}
	#r() {
		let e = this.#n();
		return e >= 0 ? this.options[e] : null;
	}
	#i(e) {
		let t = this.getValue(e);
		this.dispatchEvent(new mh(t, e));
	}
	#a() {
		this._open = !0;
		let e = this.#n();
		this._activeIndex = e >= 0 ? e : 0, this.updateComplete.then(() => {
			let e = this.#e();
			e && (e.showPopover(), this.#l(), this.#s(), e.focus());
		});
	}
	#o() {
		this._open = !1, this.#u();
		let e = this.#e();
		e && e.hidePopover();
	}
	#s() {
		(this.#e()?.querySelector(`[data-index="${this._activeIndex}"]`))?.scrollIntoView({ block: "nearest" });
	}
	#c() {
		let e = this.#t(), t = this.#e();
		if (!e || !t) return;
		let n = e.getBoundingClientRect();
		t.style.minWidth = `${n.width}px`, _d(e, t, {
			placement: "bottom-start",
			middleware: [hd(4), gd()]
		}).then(({ x: e, y: n }) => {
			this._open && (t.style.left = `${e}px`, t.style.top = `${n}px`);
		});
	}
	#l() {
		let e = this.#t(), t = this.#e();
		!e || !t || (this.#u(), this.#c(), this._cleanupAutoUpdate = md(e, t, () => this.#c()));
	}
	#u() {
		this._cleanupAutoUpdate &&= (this._cleanupAutoUpdate(), null);
	}
	#d() {}
	#f(e) {
		e.preventDefault(), !this.disabled && (this._open ? this.#o() : this.#a());
	}
	#p(e) {
		this.disabled || (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " " || e.key === "Enter") && (e.preventDefault(), this.#a());
	}
	#m(e) {
		if (e.key === "Escape") {
			e.preventDefault(), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
			return;
		}
		if (e.key === "Enter") {
			e.preventDefault();
			let t = this._activeIndex;
			if (t >= 0 && t < this.options.length) {
				let e = this.options[t];
				this.value = this.getValue(e), this.#i(e), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
			}
			return;
		}
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			let t = e.key === "ArrowDown" ? 1 : -1, n = Math.max(0, Math.min(this.options.length - 1, this._activeIndex + t));
			this._activeIndex = n, this.#s();
		}
	}
	#h(e) {
		return this.renderOption && e ? R`<span class="selected-content"
                >${this.renderOption(e)}</span
            >` : R`<span class="selected-content">${e ? this.getLabel(e) : ""}</span>`;
	}
	#g(e, t) {
		let n = this.getValue(e) === this.value, r = t === this._activeIndex;
		return R`
            <div
                id=${`${this._popoverId}-opt-${t}`}
                class=${r ? "option active" : "option"}
                role="option"
                aria-selected=${n ? "true" : "false"}
                tabindex="-1"
                data-index=${t}
                @click=${() => {
			this.value = this.getValue(e), this.#i(e), this.#o(), this.renderRoot.querySelector(".trigger")?.focus();
		}}
                @mousemove=${() => {
			this._activeIndex = t;
		}}
            >
                ${this.renderOption ? this.renderOption(e) : R`${this.getLabel(e)}`}
            </div>
        `;
	}
	render() {
		let e = this.#r(), t = this._activeIndex >= 0 ? `${this._popoverId}-opt-${this._activeIndex}` : void 0;
		return R`
            <div class="container">
                <button
                    class="trigger btn"
                    type="button"
                    popovertarget=${this._popoverId}
                    aria-haspopup="listbox"
                    aria-expanded=${this._open}
                    ?disabled=${this.disabled}
                    @click=${(e) => this.#f(e)}
                    @keydown=${(e) => this.#p(e)}
                >
                    ${this.#h(e)}
                </button>

                <div
                    id=${this._popoverId}
                    class="panel"
                    popover="auto"
                    role="listbox"
                    tabindex="0"
                    aria-activedescendant=${t}
                    @keydown=${(e) => this.#m(e)}
                    @toggle=${(e) => {
			e.newState === "closed" && this._open && this.#o();
		}}
                >
                    ${this.options.map((e, t) => this.#g(e, t))}
                </div>
            </div>
        `;
	}
};
customElements.define("gs-custom-select", ph);
var mh = class extends Event {
	value;
	option;
	constructor(e, t) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.value = e, this.option = t;
	}
}, hh = "#808080";
function gh(e) {
	return e == null ? 2 : 3;
}
function _h(e) {
	return e === "nominal" || e === "ordinal";
}
function vh(e, t, n, r) {
	let i = _h(t), a = {
		dataType: t,
		colorMode: "scheme",
		domainMode: "observed",
		scaleType: r.scaleType,
		scheme: r.scheme,
		quantDomain: [],
		quantRange: [],
		domainMid: null,
		domainPairs: [],
		thresholds: [],
		thresholdRange: [],
		unsupportedPiecewise: !1
	};
	if (!e) return i && n.length > 0 ? a.domainPairs = n.map((e) => ({
		domain: String(e),
		range: hh
	})) : !i && n.length === 2 && (a.quantDomain = n), a;
	if (!i && e.type && (a.scaleType = e.type), e.scheme && (a.scheme = e.scheme), e.domainMid != null && (a.domainMid = e.domainMid), e.range && (a.colorMode = "manual"), e.domain && (a.domainMode = "explicit"), !i && e.type === "threshold") return a.colorMode = "manual", a.domainMode = "explicit", a.thresholds = e.domain ?? [], a.thresholdRange = e.range ?? [], a;
	if (!i && Array.isArray(e.domain) && e.domain.length > 2) {
		let t = e.domain, n = Array.isArray(e.range) ? e.range : null, r = e.range == null || n?.length === t.length;
		return t.length === 3 && r ? (a.domainMid = t[1], a.quantDomain = [t[0], t[2]], n && (a.quantRange = n)) : (a.unsupportedPiecewise = !0, a.quantDomain = t, n && (a.quantRange = n)), a;
	}
	if (i) {
		let t = Array.isArray(e.domain) ? e.domain.map((e) => String(e)) : [];
		if (a.colorMode === "manual") {
			let n = e.range ?? [];
			a.domainPairs = t.length > 0 ? t.map((e, t) => ({
				domain: e,
				range: n[t] ?? "#808080"
			})) : n.map((e) => ({
				domain: "",
				range: e
			}));
		} else a.domainPairs = t.map((e) => ({
			domain: e,
			range: hh
		}));
		return a;
	}
	return Array.isArray(e.domain) ? a.quantDomain = e.domain : n.length === 2 && (a.quantDomain = n), e.range && (a.quantRange = e.range), a;
}
function yh(e, t, n, r) {
	let i = n.length === 2, a = i ? Number(n[0]) : 0, o = i ? Number(n[1]) : 1, s = Array.isArray(e) ? [...e] : [];
	s.length === 0 ? s.push(a, o) : s.length === 1 && s.push(o);
	let c = [s[0] ?? a, s[s.length - 1] ?? o], l = gh(r), u = Array.isArray(t) ? [...t] : [];
	if (u.length < l) {
		let e = u[u.length - 1] ?? "#808080";
		for (; u.length < l;) u.push(e);
	} else u.length > l && (u = u.slice(0, l));
	return {
		quantDomain: c,
		quantRange: u
	};
}
function bh(e, t) {
	let n = Math.max(0, e.length + 1), r = [...t];
	if (r.length < n) {
		let e = r[r.length - 1] ?? "#808080";
		for (; r.length < n;) r.push(e);
	} else r.length > n && (r = r.slice(0, n));
	return {
		thresholds: [...e],
		thresholdRange: r
	};
}
function xh(e) {
	if (e.dataType === "quantitative") {
		if (e.scaleType === "threshold") return e.colorMode === "manual" ? e.domainMode === "explicit" ? e.thresholds.length === 0 ? "Add at least one threshold." : e.thresholdRange.length === e.thresholds.length + 1 ? null : "Threshold scales require one more color than thresholds." : "Threshold scales require an explicit domain." : "Threshold scales require manual colors.";
		if (e.unsupportedPiecewise) return "Piecewise quantitative scales support up to three domain stops.";
		if (e.domainMode === "explicit" && e.quantDomain.length !== 2) return "Explicit quantitative domains require min and max values.";
		if (e.colorMode === "manual") {
			let t = gh(e.domainMid);
			if (e.quantRange.length !== t) return "Manual quantitative ranges must match the domain stops.";
		}
		return null;
	}
	if (e.colorMode === "manual" && e.domainMode !== "explicit") return "Manual colors require an explicit domain.";
	if (e.domainMode === "explicit") {
		if (e.domainPairs.length === 0) return "Add at least one domain value.";
		if (e.domainPairs.some((e) => e.domain.trim() === "")) return "All domain values must be filled.";
	}
	return null;
}
function Sh(e) {
	let t = {};
	if (e.unsupportedPiecewise) return null;
	if (e.scaleType === "threshold") return t.type = "threshold", e.colorMode !== "manual" || e.domainMode !== "explicit" || e.thresholds.length === 0 || e.thresholdRange.length !== e.thresholds.length + 1 ? null : (t.domain = e.thresholds, t.range = e.thresholdRange, t);
	if (e.scaleType && (t.type = e.scaleType), e.domainMid != null && (t.domainMid = e.domainMid), e.colorMode === "scheme") return e.scheme && (t.scheme = e.scheme), e.domainMode === "explicit" && (t.domain = e.quantDomain), wh(t);
	let n = gh(e.domainMid);
	if (e.quantRange.length !== n) return null;
	if (e.domainMode === "explicit") {
		if (e.quantDomain.length !== 2) return null;
		t.domain = e.quantDomain;
	}
	return t.range = e.quantRange, wh(t);
}
function Ch(e) {
	let t = {};
	return e.colorMode === "scheme" ? (e.scheme && (t.scheme = e.scheme), e.domainMode === "explicit" && (t.domain = e.domainPairs.map((e) => e.domain)), wh(t)) : e.domainMode === "explicit" ? (t.domain = e.domainPairs.map((e) => e.domain), t.range = e.domainPairs.map((e) => e.range), wh(t)) : null;
}
function wh(e) {
	return Object.keys(e).length > 0 ? e : void 0;
}
var Th = class extends G {
	static properties = {
		...super.properties,
		dataType: { type: String },
		observedDomain: { type: Array },
		scale: { type: Object },
		colorMode: {
			type: String,
			state: !0
		},
		domainMode: {
			type: String,
			state: !0
		},
		scheme: {
			type: String,
			state: !0
		},
		scaleType: {
			type: String,
			state: !0
		},
		domainPairs: {
			type: Array,
			state: !0
		},
		quantDomain: {
			type: Array,
			state: !0
		},
		quantRange: {
			type: Array,
			state: !0
		},
		domainMid: {
			type: Number,
			state: !0
		},
		thresholds: {
			type: Array,
			state: !0
		},
		thresholdRange: {
			type: Array,
			state: !0
		},
		unsupportedPiecewise: {
			type: Boolean,
			state: !0
		}
	};
	constructor() {
		super(), this.dataType = "quantitative", this.observedDomain = [], this.scale = null, this.dialogTitle = "Configure Scale", this.colorMode = "scheme", this.domainMode = "observed", this.scheme = "", this.scaleType = "", this.domainPairs = [], this.quantDomain = [], this.quantRange = [], this.domainMid = null, this.thresholds = [], this.thresholdRange = [], this.unsupportedPiecewise = !1;
	}
	connectedCallback() {
		super.connectedCallback(), this.#e();
	}
	#e() {
		let e = vh(this.scale, this.dataType, this.observedDomain, {
			scheme: this.scheme,
			scaleType: this.scaleType
		});
		this.colorMode = e.colorMode, this.domainMode = e.domainMode, this.scheme = e.scheme, this.scaleType = e.scaleType, this.quantDomain = e.quantDomain, this.quantRange = e.quantRange, this.domainMid = e.domainMid, this.domainPairs = e.domainPairs, this.thresholds = e.thresholds, this.thresholdRange = e.thresholdRange, this.unsupportedPiecewise = e.unsupportedPiecewise, this.scaleType === "threshold" && this.#u();
	}
	static styles = [...super.styles, L`
            .gs-form-section {
                margin-bottom: var(--gs-basic-spacing, 10px);
            }

            .gs-form-section-title {
                font-weight: bold;
                margin-bottom: 0.5em;
            }

            .radio-group {
                display: flex;
                flex-direction: column;
            }

            .radio-group label {
                display: flex;
                align-items: center;
                gap: 0.3em;
            }

            .domain-range-list {
                display: flex;
                flex-direction: column;
                gap: 0.5em;
            }

            .domain-range-row {
                display: flex;
                align-items: center;
                gap: 0.5em;
            }

            .domain-range-row input[type="text"] {
                flex: 1;
            }

            .domain-range-row input[type="color"] {
                width: 50px;
                height: 30px;
            }

            .range-color-pickers {
                display: flex;
                gap: 0.75em;
                flex-wrap: wrap;
                align-items: center;
            }

            .range-color-btn {
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                gap: 0.35em;
                padding: 0.35em 0.9em;
                border-radius: var(--form-control-border-radius);
                background: #f0f0f0;
                white-space: nowrap;
            }

            .range-color-label {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.15em;
            }

            .range-color-label code {
                font-size: 0.8em;
                color: var(--text-muted, #666);
            }

            .icon-btn {
                background: none;
                border: 1px solid var(--form-control-border-color);
                border-radius: var(--form-control-border-radius);
                padding: 0.3em 0.5em;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .icon-btn:hover {
                background-color: var(--button-hover-bg, #f0f0f0);
            }

            .icon-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .domain-inputs {
                display: flex;
                gap: 0.5em;
                align-items: center;
            }

            .domain-inputs input {
                width: 100px;
            }

            .error-msg {
                color: var(--danger-color, #dc3545);
                font-size: 0.85em;
                margin-top: 0.25em;
            }

            .form-input {
                display: block;
                width: 100%;
            }
        `];
	#t() {
		this.domainPairs = [...this.domainPairs, {
			domain: "",
			range: hh
		}];
	}
	#n(e) {
		this.domainPairs = this.domainPairs.filter((t, n) => n !== e);
	}
	#r(e, t, n) {
		this.domainPairs = this.domainPairs.map((r, i) => i === e ? {
			...r,
			[t]: n
		} : r);
	}
	#i(e, t) {
		this.quantRange = this.quantRange.map((n, r) => r === e ? t : n);
	}
	#a(e, t) {
		this.thresholds = this.thresholds.map((n, r) => r === e ? t : n);
	}
	#o(e, t) {
		this.thresholdRange = this.thresholdRange.map((n, r) => r === e ? t : n);
	}
	#s() {
		let e = this.thresholds[this.thresholds.length - 1] ?? 0;
		this.thresholds = [...this.thresholds, e], this.#u();
	}
	#c(e) {
		this.thresholds = this.thresholds.filter((t, n) => n !== e), this.#u();
	}
	#l() {
		if (this.unsupportedPiecewise) return;
		let e = yh(this.quantDomain, this.quantRange, this.observedDomain, this.domainMid);
		(this.quantDomain.length !== e.quantDomain.length || e.quantDomain.some((e, t) => e !== this.quantDomain[t])) && (this.quantDomain = e.quantDomain), (this.quantRange.length !== e.quantRange.length || e.quantRange.some((e, t) => e !== this.quantRange[t])) && (this.quantRange = e.quantRange);
	}
	#u() {
		let e = bh(this.thresholds, this.thresholdRange);
		(this.thresholds.length !== e.thresholds.length || e.thresholds.some((e, t) => e !== this.thresholds[t])) && (this.thresholds = e.thresholds), (this.thresholdRange.length !== e.thresholdRange.length || e.thresholdRange.some((e, t) => e !== this.thresholdRange[t])) && (this.thresholdRange = e.thresholdRange);
	}
	async #d() {
		let e = xh(this.#p());
		if (e) {
			await q(e, {
				title: "Warning",
				type: "warning"
			});
			return;
		}
		let t = this.#f();
		t === null ? await q("Unable to build scale from the current settings.", {
			title: "Warning",
			type: "warning"
		}) : (this.finish({
			ok: !0,
			data: t
		}), this.triggerClose());
	}
	#f() {
		return this.dataType === "quantitative" ? this.#m() : this.#h();
	}
	#p() {
		return {
			dataType: this.dataType,
			colorMode: this.colorMode,
			domainMode: this.domainMode,
			scaleType: this.scaleType,
			scheme: this.scheme,
			quantDomain: this.quantDomain,
			quantRange: this.quantRange,
			domainMid: this.domainMid,
			domainPairs: this.domainPairs,
			thresholds: this.thresholds,
			thresholdRange: this.thresholdRange,
			unsupportedPiecewise: this.unsupportedPiecewise
		};
	}
	#m() {
		return Sh(this.#p());
	}
	#h() {
		return Ch(this.#p());
	}
	#g() {
		return this.scaleType === "threshold" ? R`` : R`
            <div class="gs-form-group">
                <label for="schemeColorModeRadio">Color Mapping</label>
                <div class="radio-group">
                    ${this.#_("scheme", "Use Color Scheme", "schemeColorModeRadio")}
                    ${this.#_("manual", "Manual Colors", "manualColorModeRadio")}
                </div>
            </div>
        `;
	}
	#_(e, t, n) {
		return R`
            <label>
                <input
                    type="radio"
                    id=${n}
                    name="colorMode"
                    value=${e}
                    ?checked=${this.colorMode === e}
                    @change=${() => this.colorMode = e}
                />
                ${t}
            </label>
        `;
	}
	#v() {
		return R`
            <div class="gs-form-group">
                <label>Color Scheme</label>
                <gs-custom-select
                    class="form-input"
                    .options=${["", ...uh]}
                    .value=${this.scheme}
                    .getLabel=${(e) => e || "Auto"}
                    .renderOption=${(e) => e ? R`<img src=${dh(e)} />
                                  <span>${e}</span>` : R`<span>Auto</span>`}
                    @change=${(e) => {
			this.scheme = e.target.value;
		}}
                >
                </gs-custom-select>
            </div>
        `;
	}
	#y() {
		this.domainMode = "observed", this.dataType === "quantitative" && this.observedDomain.length === 2 && (this.quantDomain = this.observedDomain);
	}
	#b() {
		if (this.domainMode = "explicit", this.dataType === "quantitative" && this.quantDomain.length < 2) {
			let e = this.observedDomain.length === 2 ? this.observedDomain : [0, 1];
			this.quantDomain = [...e];
		}
	}
	#x() {
		let e = this.observedDomain.slice(0, 5), t = this.observedDomain.length > 5;
		return R`<span>
            Observed (${this.observedDomain.length}):
            ${e.map((e) => R`<code>${String(e)}</code> `)}
            ${t ? R`...` : ""}
        </span>`;
	}
	#S() {
		let e = this.scaleType === "threshold";
		return R`
            <div class="gs-form-group">
                <label for="observedDomainRadio">Domain Source</label>
                <div class="radio-group">
                    <label class="checkbox">
                        <input
                            id="observedDomainRadio"
                            type="radio"
                            name="domainMode"
                            value="observed"
                            ?checked=${this.domainMode === "observed"}
                            ?disabled=${e}
                            @change=${() => this.#y()}
                        />
                        Use observed values (updates with data)
                    </label>
                    <label class="checkbox">
                        <input
                            type="radio"
                            name="domainMode"
                            value="explicit"
                            ?checked=${this.domainMode === "explicit"}
                            ?disabled=${e}
                            @change=${() => this.#b()}
                        />
                        Explicit domain (fixed)
                    </label>
                </div>
                ${this.domainMode === "observed" && this.dataType !== "quantitative" ? R`<div
                          style="margin-top: 0.35em; font-size: 0.9em; color: #555;"
                      >
                          ${this.#x()}
                      </div>` : ""}
            </div>
        `;
	}
	#C(e) {
		return R`
            <div class="gs-form-group">
                <label>Domain and Range</label>
                <div class="domain-range-list">
                    ${this.domainPairs.map((t, n) => R`
                            <div class="domain-range-row">
                                <input
                                    type="text"
                                    placeholder="Domain value"
                                    .value=${t.domain}
                                    @input=${(e) => this.#r(n, "domain", e.target.value)}
                                />
                                ${e ? R`
                                          <input
                                              class="btn"
                                              type="color"
                                              .value=${t.range}
                                              @input=${(e) => this.#r(n, "range", e.target.value)}
                                          />
                                      ` : ""}
                                <button
                                    class="icon-btn"
                                    @click=${() => this.#n(n)}
                                    ?disabled=${this.domainPairs.length <= 1}
                                >
                                    ${W(Br).node[0]}
                                </button>
                            </div>
                        `)}
                    <button
                        class="icon-btn"
                        @click=${() => this.#t()}
                    >
                        ${W(ti).node[0]} Add Value
                    </button>
                </div>
            </div>
        `;
	}
	#w() {
		return R` ${this.#v()} `;
	}
	#T(e = !1) {
		return R`
            <div class="domain-inputs">
                <label style="display:flex;align-items:center;gap:0.4em;">
                    <span>Min</span>
                    <input
                        type="number"
                        .value=${String(this.quantDomain[0] ?? this.observedDomain[0] ?? 0)}
                        ?disabled=${e}
                        @input=${(e) => {
			let t = Number(e.target.value), n = [...this.quantDomain];
			n[0] = t, n.length < 2 && (n[1] = t), this.quantDomain = n;
		}}
                    />
                </label>
                <label style="display:flex;align-items:center;gap:0.4em;">
                    <span>Max</span>
                    <input
                        type="number"
                        .value=${String(this.quantDomain[1] ?? this.observedDomain[1] ?? this.quantDomain[0] ?? this.observedDomain[0] ?? 1)}
                        ?disabled=${e}
                        @input=${(e) => {
			let t = Number(e.target.value), n = [...this.quantDomain];
			n[1] = t, n.length < 2 && (n[0] = t), this.quantDomain = n;
		}}
                    />
                </label>
            </div>
        `;
	}
	#E() {
		return R`
            <div class="gs-form-group">
                <label>Domain Midpoint</label>
                <input
                    type="number"
                    placeholder="Optional: midpoint for diverging scales"
                    .value=${this.domainMid == null ? "" : String(this.domainMid)}
                    @input=${(e) => {
			let t = e.target.value;
			this.domainMid = t === "" ? null : Number(t);
		}}
                />
            </div>
        `;
	}
	#D() {
		return R`
            <div class="gs-form-group">
                <label for="scaleTypeSelect">Scale Type</label>
                <select
                    id="scaleTypeSelect"
                    .value=${this.scaleType}
                    @change=${(e) => {
			let t = e.target.value;
			this.scaleType = t, this.scaleType === "threshold" && (this.colorMode = "manual", this.domainMode = "explicit", this.thresholds.length === 0 && (this.thresholds = [0]), this.#u());
		}}
                >
                    ${[
			["", "Auto"],
			"linear",
			"log",
			"sqrt",
			"pow",
			"symlog",
			"threshold"
		].map((e) => R` <option value=${Array.isArray(e) ? e[0] : e}>${Array.isArray(e) ? e[1] : e}</option> `)}
                </select>
            </div>
        `;
	}
	#O() {
		return this.scaleType === "threshold" ? this.#k() : this.colorMode === "scheme" ? this.#w() : (this.#l(), this.#A());
	}
	#k() {
		return R`
            <div class="gs-form-group">
                <label>Thresholds</label>
                <div class="domain-range-list">
                    ${this.thresholds.map((e, t) => R`
                            <div class="domain-range-row">
                                <input
                                    type="number"
                                    .value=${String(e)}
                                    @input=${(e) => {
			let n = Number(e.target.value);
			this.#a(t, n);
		}}
                                />
                                <button
                                    class="icon-btn"
                                    @click=${() => this.#c(t)}
                                    ?disabled=${this.thresholds.length <= 1}
                                >
                                    ${W(Br).node[0]}
                                </button>
                            </div>
                        `)}
                    <button
                        class="icon-btn"
                        @click=${() => this.#s()}
                    >
                        ${W(ti).node[0]} Add Threshold
                    </button>
                </div>
            </div>
            <div class="gs-form-group">
                <label>Range colors</label>
                <div class="range-color-pickers">
                    ${this.thresholdRange.map((e, t) => R`
                            <label class="range-color-btn">
                                <span class="range-color-label">
                                    <strong>
                                        ${t === 0 ? "Below" : t === this.thresholdRange.length - 1 ? "Above" : "Between"}
                                    </strong>
                                </span>
                                <input
                                    class="btn"
                                    type="color"
                                    .value=${e}
                                    @input=${(e) => this.#o(t, e.target.value)}
                                />
                            </label>
                        `)}
                </div>
            </div>
        `;
	}
	#A() {
		let e = this.quantDomain[0] ?? this.observedDomain[0] ?? 0, t = this.quantDomain[1] ?? this.observedDomain[1] ?? this.quantDomain[0] ?? 1, n = this.domainMid != null, r = n ? [
			e,
			this.domainMid,
			t
		] : [e, t], i = n ? [
			"Min",
			"Mid",
			"Max"
		] : ["Min", "Max"];
		return R`
            <div class="gs-form-group">
                <label>Range colors</label>
                <div class="range-color-pickers">
                    ${r.map((e, t) => {
			let n = i[t] ?? "", r = e == null ? "" : String(e);
			return R`
                            <label class="range-color-btn">
                                <span class="range-color-label">
                                    <strong>${n}</strong>
                                    ${r ? R`<code>${r}</code>` : ""}
                                </span>
                                <input
                                    class="btn"
                                    type="color"
                                    .value=${this.quantRange[t] ?? "#808080"}
                                    @input=${(e) => this.#i(t, e.target.value)}
                                />
                            </label>
                        `;
		})}
                </div>
            </div>
        `;
	}
	#j() {
		return _h(this.dataType);
	}
	#M() {
		let e = this.domainMode === "explicit";
		return this.colorMode === "scheme" ? R`
                ${this.#v()}
                ${e ? this.#C(!1) : ""}
            ` : e ? this.#C(!0) : R`<div class="gs-alert info">
                Manual colors require an explicit domain.
            </div>`;
	}
	renderBody() {
		if (this.#j()) return R`
                ${this.#S()} ${this.#g()}
                ${this.#M()}
            `;
		{
			let e = this.scaleType === "threshold";
			return R`
                ${this.#D()} ${this.#S()}
                ${this.unsupportedPiecewise ? R`
                          <div class="gs-alert info">
                              This dialog supports up to three domain stops for
                              quantitative piecewise scales. Edit the spec
                              manually to use more.
                          </div>
                      ` : ""}
                ${e ? "" : this.#T(this.domainMode === "observed")}
                ${e ? "" : this.#E()}
                ${this.#g()}
                ${this.#O()}
            `;
		}
	}
	renderFooter() {
		return R`<div>
            ${this.makeButton("Cancel", () => this.triggerClose())}
            ${this.makeButton("Apply", () => this.#d(), {
			disabled: this.unsupportedPiecewise,
			isPrimary: !0
		})}
        </div>`;
	}
};
customElements.define("gs-configure-scale-dialog", Th);
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataConfigurator.js
var Eh = class extends I {
	static properties = {
		attributeInfo: { attribute: !1 },
		values: { attribute: !1 },
		existingAttributeNames: { attribute: !1 },
		attributeName: { state: !0 },
		groupPath: { state: !0 },
		_scale: { state: !0 },
		_scaleConfigured: { state: !0 }
	};
	static styles = [
		wc,
		Tc,
		L`
            :host {
                display: block;
            }

            .scale-summary {
                display: flex;
                gap: var(--gs-basic-spacing);
                color: var(--gs-muted-color, #666);

                img {
                    display: block;
                }
            }
        `
	];
	constructor() {
		super(), this.attributeInfo = null, this.values = null, this.existingAttributeNames = [], this.attributeName = "", this.groupPath = "", this._scale = null, this._scaleConfigured = !1, this._form = new $d(this), this._form.defineField("name", {
			valueKey: "attributeName",
			validate: () => this.#n()
		}), this._form.defineField("group", {
			valueKey: "groupPath",
			validate: () => null,
			affects: ["name"]
		}), this._observedDomain = null;
	}
	willUpdate(e) {
		e.has("attributeInfo") && this.attributeInfo && (this._scale = Wt(this.attributeInfo) ?? null, this._scaleConfigured = !1, this._observedDomain = null, this._form.reset());
	}
	updated(e) {
		(e.has("attributeInfo") || e.has("attributeName") || e.has("groupPath") || e.has("_scale") || e.has("_scaleConfigured")) && this.dispatchEvent(new CustomEvent("metadata-config-validity-change", {
			detail: { hasErrors: this.hasErrors() },
			bubbles: !0,
			composed: !0
		}));
	}
	render() {
		if (!this.attributeInfo || !this.values) throw Error("Derived metadata configurator is missing data.");
		let e = Ut(this.attributeInfo), t = this._scaleConfigured && this._scale ? Dh(this._scale) : "Auto";
		return R`
            <div class="gs-alert info">
                ${W(wr).node[0]}
                <div>
                    <p>
                        You are creating a new metadata attribute derived
                        from:<br />
                        ${this.attributeInfo.title}.
                    </p>
                    <p>Data type: ${e}</p>
                </div>
            </div>

            <div class="gs-form-group">
                <label for="derivedAttributeName">Derived attribute name</label>
                <input
                    id="derivedAttributeName"
                    type="text"
                    ${ef(this._form, "name")}
                />
                ${this._form.feedback("name")}
                <small>Keep names concise (around 20 characters).</small>
            </div>

            <div class="gs-form-group">
                <label for="derivedAttributeGroup">Group (optional)</label>
                <input
                    id="derivedAttributeGroup"
                    type="text"
                    placeholder="A new or existing metadata group path"
                    ${ef(this._form, "group")}
                />
                <small
                    >Use ${"/"} to create hierarchy
                    levels.</small
                >
            </div>

            <div class="gs-form-group">
                <label>Scale</label>
                <div class="input-group">
                    <div class="fake-input">${t}</div>
                    <button
                        class="btn"
                        type="button"
                        title="Configure scale"
                        @click=${() => this.#e()}
                    >
                        ${W(Tr).node[0]} Configure
                    </button>
                </div>
            </div>
        `;
	}
	hasErrors() {
		return this._form.hasErrors();
	}
	getConfig() {
		return this._form.validateAll() ? null : {
			name: this.attributeName.trim(),
			groupPath: this.groupPath.trim(),
			...this._scaleConfigured ? this._scale && Oh(this._scale) ? { scale: this._scale } : { scale: null } : {}
		};
	}
	async #e() {
		if (!this.attributeInfo || !this.values) throw Error("Scale configuration requires attribute data.");
		let e = Ut(this.attributeInfo), t = this.#t(), n = await K("gs-configure-scale-dialog", (n) => {
			n.dataType = e, n.observedDomain = t, this._scale && (n.scale = this._scale);
		});
		if (n.ok) {
			let e = en(n.data);
			this._scale = e ?? null, this._scaleConfigured = !0;
		}
	}
	#t() {
		if (!this.attributeInfo || !this.values) throw Error("Observed domain requires attribute values.");
		return this._observedDomain ||= fh(Ut(this.attributeInfo), this.values), this._observedDomain;
	}
	#n() {
		return Nn(this.attributeName, this.groupPath, this.existingAttributeNames, this.attributeInfo);
	}
};
customElements.define("gs-derived-metadata-configurator", Eh);
function Dh(e) {
	if (!e) return R`Auto`;
	let t = [];
	if (e.scheme) {
		let n = typeof e.scheme == "string" ? e.scheme : e.scheme.name;
		t.push(R`<img
                src=${dh(n)}
                alt=${n}
                title=${n}
            />`);
	}
	return e.type && t.push(R`<div class="badge">${e.type}</div>`), t.length === 0 && t.push(R`Auto`), R`<div class="scale-summary">${t}</div>`;
}
function Oh(e) {
	return Object.keys(e).length > 0;
}
//#endregion
//#region ../app/src/sampleView/metadata/derivedMetadataDialog.js
var kh = class extends G {
	static properties = {
		...super.properties,
		attributeInfo: {},
		values: {},
		existingAttributeNames: {},
		attributeName: { state: !0 },
		_configHasErrors: { state: !0 }
	};
	static styles = [...super.styles, L`
            dialog {
                width: 520px;
            }
        `];
	constructor() {
		super(), this.attributeInfo = null, this.values = null, this.existingAttributeNames = [], this.attributeName = "", this._configHasErrors = !1, this.dialogTitle = "Add to metadata";
	}
	renderBody() {
		if (!this.attributeInfo || !this.values) throw Error("Derived metadata dialog is missing required data.");
		return R`
            <gs-derived-metadata-configurator
                .attributeInfo=${this.attributeInfo}
                .values=${this.values}
                .existingAttributeNames=${this.existingAttributeNames}
                .attributeName=${this.attributeName}
                @metadata-config-validity-change=${(e) => {
			this._configHasErrors = e.detail.hasErrors;
		}}
            ></gs-derived-metadata-configurator>
        `;
	}
	renderButtons() {
		return [this.makeCloseButton(), this.makeButton("Add", () => this.#e(), {
			iconDef: ti,
			disabled: this._configHasErrors,
			isPrimary: !0
		})];
	}
	#e() {
		let e = this.#t()?.getConfig();
		return e ? (this.finish({
			ok: !0,
			data: e
		}), !1) : !0;
	}
	#t() {
		return this.renderRoot.querySelector("gs-derived-metadata-configurator");
	}
};
customElements.define("gs-derived-metadata-dialog", kh);
function Ah({ attributeInfo: e, values: t, existingAttributeNames: n, defaultName: r }) {
	return K("gs-derived-metadata-dialog", (i) => {
		i.attributeInfo = e, i.values = t, i.existingAttributeNames = n, i.attributeName = r, i._configHasErrors = !1;
	});
}
//#endregion
//#region ../app/src/sampleView/metadata/deriveMetadataFlow.js
async function jh(e, t, n) {
	if (!t.sampleData) throw Error("Sample data has not been initialized.");
	let r = on(e, t.sampleMetadata.attributeNames), i = t.sampleData.ids, a = e.valuesProvider({
		sampleIds: i,
		sampleHierarchy: t
	});
	if (a.length !== i.length) throw Error("Derived metadata values length does not match sample ids.");
	let o = await Ah({
		attributeInfo: e,
		values: a,
		existingAttributeNames: t.sampleMetadata.attributeNames,
		defaultName: r
	});
	if (o.ok) {
		let t = o.data;
		n.intentExecutor.dispatch(n.actions.deriveMetadata(er(e.attribute, t)));
	}
}
//#endregion
//#region ../app/src/components/generic/dialogWizardController.js
var Mh = class {
	constructor(e, t) {
		this.host = e, this.pages = t, e.addController(this);
	}
	hostConnected() {}
	hostDisconnected() {}
	get currentPage() {
		let e = this.pages[this.host._page];
		if (!e) throw Error("Invalid wizard page.");
		return e;
	}
	get isFirstPage() {
		return this.host._page === 0;
	}
	get isLastPage() {
		return this.host._page === this.pages.length - 1;
	}
	reset() {
		this.host._page = 0;
	}
	canAdvance() {
		return this.currentPage.canAdvance?.() ?? !0;
	}
	advance(e) {
		if (e > 0 && !(this.currentPage.onAdvance?.() ?? !0)) return !1;
		let t = this.host._page + e;
		return t < 0 || t >= this.pages.length || (this.host._page = t), !0;
	}
}, Nh = class extends G {
	static properties = {
		...super.properties,
		fieldInfo: {},
		aggregationFieldInfos: {},
		selectionIntervalComplex: {},
		selectionIntervalSource: {},
		aggregation: { state: !0 },
		aggregationField: { state: !0 },
		filterField: { state: !0 },
		operator: { state: !0 },
		operand: { state: !0 },
		selectedValues: { state: !0 },
		_filterFieldValues: { state: !0 },
		_page: { state: !0 },
		_attributeInfo: { state: !0 },
		_values: { state: !0 },
		_attributeName: { state: !0 },
		_metadataConfigHasErrors: { state: !0 }
	};
	static styles = [...super.styles, L`
            dialog {
                width: 560px;
            }

            .expression-summary {
                margin-top: var(--gs-basic-spacing, 10px);
                padding: 0.5em 0.75em;
                background-color: #f6f6f6;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
            }

            .expression-summary code {
                white-space: normal;
                overflow-wrap: anywhere;
            }
        `];
	#e;
	constructor() {
		super(), this.fieldInfo = null, this.aggregationFieldInfos = [], this.selectionIntervalComplex = null, this.selectionIntervalSource = null, this.aggregation = "count", this.aggregationField = "", this.filterField = "", this.operator = "in", this.operand = void 0, this.selectedValues = [], this._filterFieldValues = [], this.sampleHierarchy = null, this.attributeInfoSource = null, this.attributeType = null, this.sampleView = null, this._page = 0, this._attributeInfo = null, this._values = null, this._attributeName = "", this._metadataConfigHasErrors = !1, this.dialogTitle = "Create sample metadata from features", this.#e = new Mh(this, [{
			render: () => this.#t(),
			canAdvance: () => this.#v(),
			onAdvance: () => this.#b()
		}, {
			render: () => this.#n(),
			canAdvance: () => !this._metadataConfigHasErrors,
			onAdvance: () => this.#x()
		}]);
	}
	willUpdate(e) {
		e.has("fieldInfo") && this.fieldInfo && (this.dialogTitle = "Create sample metadata from features", this.aggregationField = this.fieldInfo.field, this.#_(), this.filterField = this.fieldInfo.filterableFields[0]?.field ?? "", this.operator = this.#f() ? "gt" : "in", this.operand = void 0, this.selectedValues = []), (e.has("fieldInfo") || e.has("filterField") || e.has("selectionIntervalComplex") || e.has("selectionIntervalSource")) && (this._filterFieldValues = this.#w());
	}
	renderBody() {
		return this.#e.currentPage.render();
	}
	#t() {
		if (!this.fieldInfo) throw Error("Feature-filtered aggregation dialog is missing field info.");
		return R`
            ${this.#c()}

            <div class="gs-form-group">
                <label for="featureFilterField">Filter field</label>
                <select
                    id="featureFilterField"
                    .value=${this.filterField}
                    @change=${(e) => this.#i(e)}
                >
                    ${this.fieldInfo.filterableFields.map((e) => R`
                            <option value=${e.field}>
                                ${e.field} (${e.type})
                            </option>
                        `)}
                </select>
            </div>

            <div class="gs-form-group">
                <label>Filter condition</label>
                ${this.#f() ? this.#o() : this.#s()}
            </div>

            <div class="gs-form-group">
                <label for="featureAggregationField">Aggregation field</label>
                <select
                    id="featureAggregationField"
                    .value=${this.aggregationField}
                    @change=${(e) => {
			this.#r(e);
		}}
                >
                    ${this.#m().map((e) => R`
                            <option value=${e.field}>
                                ${e.field} (${e.type})
                            </option>
                        `)}
                </select>
            </div>

            <div class="gs-form-group">
                <label for="featureAggregation">Aggregation operation</label>
                <select
                    id="featureAggregation"
                    .value=${this.aggregation}
                    @change=${(e) => {
			this.aggregation = e.target.value;
		}}
                >
                    ${this.#g().map((e) => R`
                            <option value=${e}>
                                ${Gt(e).label}
                            </option>
                        `)}
                </select>
                ${this.aggregation === "itemCount" ? "" : R`<small>Only non-null values are considered.</small>`}
            </div>

            ${this.#l()}
        `;
	}
	#n() {
		if (!this._attributeInfo || !this._values || !this.sampleHierarchy) throw Error("Feature-filtered metadata page is missing data.");
		return R`
            <gs-derived-metadata-configurator
                .attributeInfo=${this._attributeInfo}
                .values=${this._values}
                .existingAttributeNames=${this.sampleHierarchy.sampleMetadata.attributeNames}
                .attributeName=${this._attributeName}
                @metadata-config-validity-change=${(e) => {
			this._metadataConfigHasErrors = e.detail.hasErrors;
		}}
            ></gs-derived-metadata-configurator>
        `;
	}
	renderButtons() {
		let e = this.#e.isLastPage;
		return [
			this.makeCloseButton("Cancel"),
			this.makeButton("Previous", () => this.#e.advance(-1), {
				iconDef: Cr,
				disabled: this.#e.isFirstPage
			}),
			this.makeButton(e ? "Finish" : "Next", () => this.#e.advance(1), {
				iconDef: e ? ti : br,
				isPrimary: !0,
				disabled: !this.#e.canAdvance()
			})
		];
	}
	#r(e) {
		this.aggregationField = e.target.value, this.#_();
	}
	#i(e) {
		this.filterField = e.target.value, this.operator = this.#f() ? "gt" : "in", this.operand = void 0, this.selectedValues = [], this._filterFieldValues = this.#w();
	}
	#a(e) {
		this.operator = e.operator, this.operand = e.operand;
	}
	#o() {
		return R`<gs-threshold-comparison-input
            autofocus
            placeholder="value"
            .values=${this._filterFieldValues}
            .operator=${this.operator}
            .operand=${this.operand}
            @change=${(e) => this.#a(e)}
        ></gs-threshold-comparison-input>`;
	}
	#s() {
		return R`
            <gs-searchable-checkbox-list
                autofocus
                .items=${this.#C()}
                .selectedValues=${this.selectedValues}
                .selectedItemName=${"values"}
                @change=${(e) => {
			this.selectedValues = e.values;
		}}
            ></gs-searchable-checkbox-list>
            <small>
                A feature matches when ${this.filterField} is any selected
                value.
            </small>
        `;
	}
	#c() {
		return R`
            <div class="gs-alert info">
                ${W(Vr).node[0]}
                <div>
                    <p>
                        Create a new sample metadata attribute by filtering
                        features in the selected interval and aggregating the
                        result separately for each sample.
                    </p>
                </div>
            </div>
        `;
	}
	#l() {
		return R`
            <div class="expression-summary">
                Result:
                <code>${this.#u()}</code>
                per sample
            </div>
        `;
	}
	#u() {
		if (!this.fieldInfo) return "";
		let e = this.#d(), t = this.aggregationField;
		return this.aggregation === "itemCount" ? `${Mn(this.aggregation)}(where ${e})` : this.aggregation === "count" ? `${Mn(this.aggregation)}(${t} where ${e})` : `${Qt(this.aggregation)}(${t} where ${e})`;
	}
	#d() {
		return this.#f() ? this.filterField + " " + $t(this.operator) + " " + (rl(this.operand) ? String(this.operand) : "...") : this.selectedValues.length === 0 ? this.filterField + " in {...}" : this.filterField + " in {" + this.selectedValues.map(String).join(", ") + "}";
	}
	#f() {
		return this.#p()?.type === "quantitative";
	}
	#p() {
		return this.fieldInfo?.filterableFields.find((e) => e.field === this.filterField);
	}
	#m() {
		return this.aggregationFieldInfos.length > 0 ? this.aggregationFieldInfos : this.fieldInfo ? [this.fieldInfo] : [];
	}
	#h() {
		return this.#m().find((e) => e.field === this.aggregationField);
	}
	#g() {
		return this.#h()?.supportedAggregations ?? [];
	}
	#_() {
		let e = this.#g();
		e.includes(this.aggregation) || (this.aggregation = e.includes("count") ? "count" : e[0]);
	}
	#v() {
		return !this.filterField || !this.aggregationField ? !1 : this.#f() ? rl(this.operand) : this.selectedValues.length > 0;
	}
	#y() {
		if (!this.#f()) return {
			field: this.filterField,
			operator: "in",
			values: this.selectedValues
		};
		if (!rl(this.operand)) throw Error("Quantitative feature filter is missing a value.");
		return {
			field: this.filterField,
			operator: this.operator,
			value: this.operand
		};
	}
	#b() {
		if (!this.fieldInfo || !this.sampleHierarchy || !this.attributeInfoSource || !this.attributeType) throw Error("Feature-filtered aggregation wizard is missing required data.");
		if (!this.sampleHierarchy.sampleData) throw Error("Sample data has not been initialized.");
		let e = {
			view: this.fieldInfo.viewSelector,
			field: this.aggregationField,
			interval: this.selectionIntervalSource ?? this.selectionIntervalComplex,
			aggregation: { op: this.aggregation },
			featureFilter: this.#y()
		}, t = this.attributeInfoSource.getAttributeInfo({
			type: this.attributeType,
			specifier: e
		}), n = this.sampleHierarchy.sampleData.ids, r = t.valuesProvider({
			sampleIds: n,
			sampleHierarchy: this.sampleHierarchy
		});
		if (r.length !== n.length) throw Error("Derived metadata values length does not match sample ids.");
		return this._attributeInfo = t, this._values = r, this._attributeName = on(t, this.sampleHierarchy.sampleMetadata.attributeNames), this._metadataConfigHasErrors = !1, !0;
	}
	#x() {
		if (!this._attributeInfo || !this.sampleView) throw Error("Feature-filtered aggregation wizard is missing derived data.");
		let e = this.#S()?.getConfig();
		return e ? (this.sampleView.intentExecutor.dispatch(this.sampleView.actions.deriveMetadata(er(this._attributeInfo.attribute, e))), this.finish({ ok: !0 }), !1) : !0;
	}
	#S() {
		return this.renderRoot.querySelector("gs-derived-metadata-configurator");
	}
	#C() {
		if (!this.fieldInfo || !this.selectionIntervalComplex) return [];
		let e = this._filterFieldValues;
		return Array.from(new Set(e.filter(Fh))).map((e) => ({
			value: e,
			label: `${e}`,
			searchText: `${e}`.toLowerCase()
		}));
	}
	resetWizard() {
		this.#e.reset(), this._attributeInfo = null, this._values = null, this._attributeName = "", this._metadataConfigHasErrors = !1;
	}
	#w() {
		return !this.fieldInfo || !this.selectionIntervalComplex ? [] : Yn(this.fieldInfo.view, this.selectionIntervalSource ?? this.selectionIntervalComplex, this.filterField) ?? [];
	}
};
customElements.define("gs-feature-filtered-aggregation-dialog", Nh);
async function Ph({ fieldInfo: e, aggregationFieldInfos: t, selectionIntervalComplex: n, selectionIntervalSource: r, sampleHierarchy: i, attributeInfoSource: a, attributeType: o, sampleView: s }) {
	await K("gs-feature-filtered-aggregation-dialog", (c) => {
		c.fieldInfo = e, c.aggregationFieldInfos = t, c.selectionIntervalComplex = n, c.selectionIntervalSource = r ?? null, c.sampleHierarchy = i, c.attributeInfoSource = a, c.attributeType = o, c.sampleView = s, c.operand = void 0, c.selectedValues = [], c.resetWizard();
	});
}
function Fh(e) {
	return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
//#endregion
//#region ../app/src/sampleView/selectionAggregationCandidates.js
var Ih = ["count"], Lh = ["itemCount"], Rh = [
	"count",
	"min",
	"max",
	"weightedMean",
	"variance"
];
function zh(e, t, n) {
	let r = Mm(t), i = Uh(e).filter((e) => Kh(e.view, r));
	if (n) try {
		let t = [];
		e.visit((e) => {
			e instanceof s && e.isVisible() && Kh(e, r) && t.push(e);
		});
		for (let e of t) {
			let t = e.getEncoding(), n = t?.x && "field" in t.x, r = Object.entries(t).some(([e, t]) => ![
				"sample",
				"x",
				"x2"
			].includes(e) && t && "field" in t);
			n && !r && i.push({
				view: e,
				viewSelector: km(e),
				viewTitle: String(e.getTitleText?.() ?? e.name),
				channel: "x",
				field: "Items",
				type: "nominal",
				description: void 0,
				supportedAggregations: Lh,
				candidateId: Zh(km(e), "Items")
			});
		}
	} catch {}
	return n || (i = i.filter(qh)), Yh(i.map((e) => {
		let t = e.viewSelector ?? km(e.view);
		return {
			view: e.view,
			viewSelector: t,
			viewTitle: e.viewTitle ?? String(e.view.getTitleText?.() ?? e.view.name),
			channel: e.channel,
			field: e.field,
			type: e.type,
			description: e.description,
			supportedAggregations: e.supportedAggregations ?? Jh(e.type),
			candidateId: e.candidateId ?? Zh(t, e.field),
			filterableFields: e.filterableFields ?? Vh(e.view)
		};
	}));
}
var Bh = zh;
function Vh(e) {
	return Xh(Uh(e).map((e) => ({
		channel: e.channel,
		field: e.field,
		type: e.type,
		description: e.description
	})));
}
function Hh(e, t) {
	let n = Mm(t);
	return Array.from(new Set(Uh(e).filter((e) => !Kh(e.view, n)).filter(qh).map((e) => e.view)));
}
function Uh(e) {
	try {
		return Te(e).filter((e) => ![
			"sample",
			"x",
			"x2"
		].includes(e.channel)).filter((e) => e.view.isVisible()).map((e) => ({
			...e,
			description: Gh(e.view, e.channel, e.field)
		}));
	} catch {
		return Wh(e);
	}
}
function Wh(e) {
	let t = e.getEncoding?.();
	if (!t || typeof t != "object") return [];
	let n = [];
	for (let [r, i] of Object.entries(t)) [
		"sample",
		"x",
		"x2"
	].includes(r) || !i || typeof i != "object" || !("field" in i) || typeof i.field != "string" || n.push({
		view: e,
		channel: r,
		field: i.field,
		type: "type" in i && typeof i.type == "string" ? i.type : "nominal",
		description: Gh(e, r, i.field)
	});
	return n;
}
function Gh(e, t, n) {
	let r = e.getEncoding();
	if (!r || typeof r != "object") return;
	let i = r[t];
	if (i && typeof i == "object" && "description" in i) return i.description;
	for (let e of Object.values(r)) if (!(!e || typeof e != "object" || !("field" in e) || e.field !== n)) return e.description;
}
function Kh(e, t) {
	let n = jm(e);
	return !!n && t.has(n);
}
function qh(e) {
	if (e.view.getEncoding()?.x2) return !0;
	let t = e.view.getScaleResolution("x")?.getScale()?.type;
	return t ? Et(t) : !1;
}
function Jh(e) {
	return e === "quantitative" ? Rh : Ih;
}
function Yh(e) {
	return Array.from(new Map(e.map((e) => [JSON.stringify([e.viewSelector, e.field]), e])).values());
}
function Xh(e) {
	return Array.from(new Map(e.map((e) => [e.field, e])).values());
}
function Zh(e, t) {
	return (e.scope.length > 0 ? e.scope.join("/") + "/" : "") + e.view + ":" + t;
}
//#endregion
//#region ../app/src/sampleView/contextMenuBuilder.js
var Qh = "SAMPLE_ATTRIBUTE";
function $h(e, t, n) {
	let r = e.getAxisResolution("x")?.getTitle();
	return t.type === "locus" ? "Locus: " + (u(n) || typeof n == "number" ? pe(n) : String(n)) : (r ? r + ": " : "") + n;
}
function eg(e, t) {
	if (!e || !t || e.selection.intervals.x?.length !== 2 || !ht(e.selection, t)) return {};
	let n = e.selection.intervals.x, r = e.view.getScaleResolution("x")?.type === "locus" ? [e.view.getScaleResolution("x").toComplex(n[0]), e.view.getScaleResolution("x").toComplex(n[1])] : n;
	return {
		selectionInterval: n,
		selectionIntervalComplex: r,
		selectionIntervalLabel: Om(e.view, r)
	};
}
function tg({ fieldInfo: e, aggregationFieldInfos: t, selectionIntervalComplex: n, selectionIntervalSource: r, sample: i, sampleHierarchy: a, attributeInfoSource: o, attributeType: s, sampleView: c }) {
	let l = e.filterableFields.length > 0 ? [
		{ type: "divider" },
		{
			type: "header",
			label: "Advanced interval aggregation"
		},
		{
			label: "Filter features and aggregate...",
			callback: () => {
				Ph({
					fieldInfo: e,
					aggregationFieldInfos: t,
					selectionIntervalComplex: n,
					selectionIntervalSource: r,
					sampleHierarchy: a,
					attributeInfoSource: o,
					attributeType: s,
					sampleView: c
				});
			}
		}
	] : [];
	return [
		{
			label: "Interval aggregation",
			type: "header"
		},
		...e.supportedAggregations.map((t) => {
			let l = Gt(t), u = t === "itemCount" ? R`Using ${l.label.toLowerCase()} over interval...` : R`Using ${l.label.toLowerCase()}(<em
                              class="attribute"
                              >${e.field}</em
                          >) over interval...`, d = r ? {
				view: e.viewSelector,
				field: e.field,
				interval: r,
				aggregation: { op: t }
			} : {
				view: e.viewSelector,
				field: e.field,
				interval: n,
				aggregation: { op: t }
			}, f = o.getAttributeInfo({
				type: s,
				specifier: d
			}), p = Bd(u, f, i ? f.accessor(i.id, a) : void 0, c);
			return ig(p, f, a, c), {
				label: l.label,
				submenu: p
			};
		}),
		...l
	];
}
function ng({ fieldInfo: e, complexX: t, sample: n, sampleHierarchy: r, attributeInfoSource: i, attributeType: a, sampleView: o }) {
	let s = {
		view: e.viewSelector,
		field: e.field,
		locus: t
	}, c = i.getAttributeInfo({
		type: a,
		specifier: s
	}), l = Bd(null, c, n ? c.accessor(n.id, r) : void 0, o);
	return ig(l, c, r, o), l;
}
function rg(e, t, n, r) {
	if (!n.sampleData) throw Error("Sample data has not been initialized.");
	t.attribute.type !== Qh && e.push({
		label: "Add to sample metadata...",
		callback: () => {
			jh(t, n, r);
		}
	});
}
function ig(e, t, n, r) {
	let i = t.attribute.type !== Qh, a = t.type === "quantitative" || t.type === "nominal" || t.type === "ordinal";
	!i && !a || (e.push(xd), rg(e, t, n, r), Tp(e, t, r, { includeDivider: !1 }));
}
//#endregion
//#region ../app/src/state/selectionExpansionContext.js
var ag = "multiplePointSelectionParams";
function og(e, t) {
	if (!t || !t.datum || !t.mark?.unitView) return { status: "unavailable" };
	let n = t.mark.unitView, r = t.datum, i = [];
	for (let [e, t] of n.paramRuntime.paramConfigs) {
		if (!("select" in t) || t.persist === !1) continue;
		let n = Je(t.select);
		He(n) && n.toggle && i.push(e);
	}
	if (i.length === 0) return { status: "unavailable" };
	if (i.length > 1) return {
		status: "disabled",
		reason: ag
	};
	let a;
	try {
		a = bt(n.getEncoding());
	} catch {
		return { status: "unavailable" };
	}
	if (!a || a.length === 0) return { status: "unavailable" };
	let o = a.map((e) => Ie(e)(r));
	if (o.some((e) => e == null)) return { status: "unavailable" };
	let s = i[0], c = xt(n, s);
	try {
		lt(e, c);
	} catch {
		return { status: "unavailable" };
	}
	let l;
	try {
		l = ft(n);
	} catch {
		return { status: "unavailable" };
	}
	let u, d = "this scope", f = n.getEncoding().sample;
	return f && !Array.isArray(f) && typeof f.field == "string" && (u = [f.field], d = "this sample"), {
		status: "available",
		context: {
			hoveredView: n,
			hoveredDatum: r,
			selector: c,
			originViewSelector: l,
			originKeyFields: a,
			originKeyTuple: o,
			defaultPartitionBy: u,
			defaultScopeLabel: d
		}
	};
}
function sg(e) {
	let { hoveredView: t, hoveredDatum: n, selector: r, originViewSelector: i, originKeyFields: a, originKeyTuple: o, defaultPartitionBy: s, defaultScopeLabel: c } = e, l = /* @__PURE__ */ new Set([...a, ...s ?? []]), u = cg(t), d = lg(t, n, l), f = ug(n, l).filter((e) => !u.has(e)), p = [...d];
	for (let e of f) p.includes(e) || p.push(e);
	let m = [];
	for (let e of p) {
		let t = n[e], a = fg(t), l = pg(c), u = mg(c), d = [];
		d.push({
			label: "In " + l,
			payload: {
				selector: r,
				operation: "replace",
				rule: {
					kind: "sameFieldValue",
					field: e
				},
				partitionBy: s,
				origin: {
					view: i,
					keyTuple: o
				}
			}
		}), s?.length && d.push({
			label: u.charAt(0).toUpperCase() + u.slice(1),
			payload: {
				selector: r,
				operation: "replace",
				rule: {
					kind: "sameFieldValue",
					field: e
				},
				origin: {
					view: i,
					keyTuple: o
				}
			}
		}), m.push({
			fieldName: e,
			valueLabel: a,
			operations: d
		});
	}
	return m;
}
function cg(e) {
	let t = e.getEncoding(), n = /* @__PURE__ */ new Set(), r = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return;
		let t = e;
		if (typeof t.field == "string" && n.add(t.field), typeof t.chrom == "string" && n.add(t.chrom), typeof t.pos == "string" && n.add(t.pos), "condition" in t) {
			let { condition: e } = t;
			if (Array.isArray(e)) for (let t of e) r(t);
			else r(e);
		}
	};
	for (let e of Object.values(t)) r(e);
	return n;
}
function lg(e, t, n) {
	let r = e.getEncoding(), i = [], a = /* @__PURE__ */ new Set(), o = (e) => {
		if (!e || typeof e != "object" || Array.isArray(e)) return;
		let r = e;
		if (typeof r.field == "string" && (r.type === "nominal" || r.type === "ordinal") && !a.has(r.field) && dg(r.field, t, n) && (a.add(r.field), i.push(r.field)), "condition" in r) {
			let { condition: e } = r;
			if (Array.isArray(e)) for (let t of e) o(t);
			else o(e);
		}
	};
	for (let e of Object.values(r)) o(e);
	return i;
}
function ug(e, t) {
	return Object.keys(e).filter((n) => dg(n, e, t));
}
function dg(e, t, n) {
	if (n.has(e) || e.startsWith("_")) return !1;
	let r = t[e];
	return typeof r == "boolean" || typeof r == "string" && r.trim().length > 0;
}
function fg(e) {
	let t = String(e);
	return t.length > 20 ? t.slice(0, 17) + "..." : t;
}
function pg(e) {
	return e.startsWith("this ") ? "current " + e.slice(5) : e;
}
function mg(e) {
	return e === "this sample" ? "across all samples" : e === "this patient" ? "across all patients" : e === "this scope" ? "across all scopes" : "across all";
}
var hg = vn({
	name: "paramProvenance",
	initialState: { entries: {} },
	reducers: {
		paramChange: (e, t) => {
			let n = st(t.payload.selector);
			e.entries[n] = t.payload;
		},
		expandPointSelection: (e, t) => {
			let n = t.payload, r = st(n.selector), i;
			if ("rule" in n && n.rule) i = { rule: n.rule };
			else if ("predicate" in n && n.predicate) i = { predicate: n.predicate };
			else throw Error("expandPointSelection requires either 'rule' or 'predicate'.");
			e.entries[r] = {
				selector: n.selector,
				value: {
					type: "pointExpand",
					operation: n.operation,
					partitionBy: n.partitionBy,
					origin: n.origin,
					...i
				}
			};
		}
	}
});
function gg(e) {
	if (hg.actions.expandPointSelection.match(e) || !hg.actions.paramChange.match(e)) return null;
	let t = e.payload, n = t?.selector;
	return !n || !Array.isArray(n.scope) || !n.param || t?.value?.type === "pointExpand" ? null : st(n);
}
//#endregion
//#region ../app/src/state/selectionExpansionMenu.js
function _g(e, t) {
	return {
		label: "Select related items",
		submenu: () => vg(e, t)
	};
}
function vg(e, t) {
	let n = sg(e);
	if (n.length === 0) return [{ label: "No suitable fields available." }];
	let r = [{
		type: "header",
		label: "Match values from clicked item"
	}, xd];
	for (let e of n) {
		let n = yg(e.fieldName, e.valueLabel);
		if (e.operations.length === 1) {
			let i = e.operations[0];
			r.push({
				label: n,
				callback: () => t(hg.actions.expandPointSelection(i.payload))
			});
			continue;
		}
		r.push({
			label: n,
			submenu: () => {
				let r = [{
					type: "header",
					label: n
				}, xd];
				for (let n of e.operations) r.push({
					label: n.label,
					callback: () => t(hg.actions.expandPointSelection(n.payload))
				});
				return r;
			}
		});
	}
	return r;
}
function yg(e, t) {
	return R`<em>${e}</em>
        <span class="operator">=</span>
        <strong>${t}</strong>`;
}
//#endregion
//#region ../app/src/sampleView/sampleChromeLayout.js
var bg = 60, xg = "all", Sg = 1e-6, Cg = class {
	#e;
	#t;
	#n;
	constructor(e = {}) {
		this.#e = e.sampleYAxis, this.#t = e.getActiveAxisCandidate ?? (() => void 0), this.#n = e.getPeekState ?? (() => 0);
	}
	getLeftReserve(e) {
		return this.#r("left", e);
	}
	getRightReserve(e) {
		return this.#r("right", e);
	}
	getHorizontalReserve(e) {
		return new Ye(0, this.getRightReserve(e), 0, this.getLeftReserve(e));
	}
	hasHorizontalReserveChanged(e, t) {
		return this.getLeftReserve(e) !== this.getLeftReserve(t) || this.getRightReserve(e) !== this.getRightReserve(t);
	}
	getPlotCoords(e, t) {
		let n = this.getLeftReserve(t), r = this.getRightReserve(t);
		return !n && !r ? e : e.modify({
			x: () => e.x + n,
			width: () => e.width - n - r
		});
	}
	renderVerticalAxes(e, t, n, r = {}) {
		if (!this.#a(n) || this.#n() !== 0) return;
		let i = De(r), a = i ? {
			...r,
			clip: dt(i.rect, !1, !0)
		} : r;
		for (let r of ["left", "right"]) {
			let i = this.#i(r);
			if (i) for (let o of this.#o(n)) {
				let n = t.modify({
					y: () => t.y + o.locSize.location,
					height: o.locSize.size
				});
				i.render(e, ve(n, r, i), a);
			}
		}
	}
	#r(e, t) {
		if (!this.#a(t)) return 0;
		let n = this.#i(e);
		return !n || n.axisProps.placement === "inside" ? 0 : n.getPerpendicularSize() + (n.axisProps.offset ?? 0);
	}
	#i(e) {
		return this.#t(e)?.axisView;
	}
	#a(e) {
		if (this.#e === null) return !1;
		let t = this.#e?.minSampleHeight ?? bg;
		return e?.samples.some((e) => e.locSize.size >= t) ?? !1;
	}
	#o(e) {
		let t = this.#e?.minSampleHeight ?? bg, n = e.samples.filter((e) => e.locSize.size >= t);
		switch (this.#e?.mode ?? xg) {
			case "all": return n;
			case "top": return n.slice(0, 1);
			case "middle": {
				if (!n.length) return [];
				let t = e.samples[0], r = e.samples.at(-1), i = t && r ? (t.locSize.location + r.locSize.location + r.locSize.size) / 2 : 0, a = n[0], o = Infinity;
				for (let e of n) {
					let t = e.locSize.location + e.locSize.size / 2, n = Math.abs(t - i);
					n < o - Sg && (a = e, o = n);
				}
				return [a];
			}
			case "bottom": return n.slice(-1);
			default: throw Error(`Invalid sampleYAxis mode: ${this.#e?.mode}`);
		}
	}
}, wg = "VALUE_AT_LOCUS", Tg = class extends mt {
	childCoords;
	sidebarCoords;
	locationManager;
	#e = 0;
	#t;
	#n;
	#r = -1;
	#i = !1;
	#a = new Np("Subtree data readiness was aborted.");
	#o;
	#s;
	#c = [];
	#l;
	#u;
	#d;
	#f = [];
	#p;
	#m = !1;
	constructor(e, t, n, r, i, a, o, s = void 0) {
		super(e, t, n, r, i), this.provenance = a, this.plotBookmarkContext = s;
		let c = lh(e);
		for (let e of c.warnings) console.warn(e);
		this.spec = c.spec, this.#i = e.stickySummaries ?? !0, this.#w(), this.#g(), this.#C(), this.#h(), this.#T(o), this.#E(), this.#s = this.paramRuntime.allocateSetter("visibleSamples", []), this.#l = this.paramRuntime.allocateSetter("visibleSampleMetadata", kg(this.sampleHierarchy, [])), this.getSamples = () => an(this.sampleHierarchy), this.spec.samples.identity?.data && this.#A();
	}
	#h() {
		let e = Ht;
		this.compositeAttributeInfoSource.addAttributeInfoSource(wg, (e) => Vm(this, e));
		let t = (e) => this.compositeAttributeInfoSource.getAttributeInfo(e);
		this.provenance.addActionInfoSource((e) => Ol(e, t)), this.actions = e.actions;
	}
	#g() {
		this._addBroadcastHandler("subtreeDataReady", (e) => {
			if (!e.payload || !("subtreeRoot" in e.payload)) return;
			let t = e.payload.subtreeRoot;
			this.#t?.view && (this.#_(t), (t === this.#t.view || this.#t.view.getDataAncestors().includes(t)) && this.#k());
		}), this._addBroadcastHandler("layout", () => {
			this.locationManager.resetLocations();
		});
	}
	#_(e) {
		this.#a.resolveMatching(e);
	}
	#v(e, t, n) {
		if (n && k(e, n)) return Promise.resolve();
		if (n) return ue(this.context, e, n, t);
		let r = e.getDataAncestors();
		return this.#a.wait((t) => t === e || r.includes(t), t);
	}
	#y(e) {
		return Am(this, e.view);
	}
	#b(e) {
		for (let t of e.getLayoutAncestors()) {
			let e = Sn(t);
			e && this.provenance.store.dispatch($n.actions.setVisibility({
				key: e,
				visibility: !0
			}));
		}
	}
	#x(e) {
		let t, n = "domainAtActionTime" in e ? e.domainAtActionTime : void 0;
		if (n) t = n;
		else if ("interval" in e) t = jn(this, e.interval);
		else if ("locus" in e) t = [e.locus, e.locus];
		else throw Error("Unsupported view attribute specifier.");
		if (typeof t[0] == "string" || typeof t[1] == "string" || typeof t[0] == "boolean" || typeof t[1] == "boolean") throw Error("Cannot zoom x scale using a non-numeric or non-locus domain.");
		return t;
	}
	async #S(e, t) {
		let n = e.getScaleResolution("x");
		if (!n) throw Error(`No x scale resolution found for view: ${e.name}`);
		await n.zoomTo(t);
	}
	async awaitViewAttributeProcessed(e, t = {}) {
		let n = this.#y(e);
		await this.#v(n, t.signal, he(n, ["x"]));
	}
	awaitMetadataReady(e) {
		return this.metadataView?.awaitMetadataReady(e) ?? Promise.resolve();
	}
	async ensureViewAttributeAvailability(e, t = {}) {
		let n = this.#y(e), r = n.getScaleResolution("x");
		if (!r) throw Error(`No x scale resolution found for view: ${n.name}`);
		this.#b(n);
		let i = r.getScale();
		if (it(i.type) && !Et(i.type)) {
			let t = this.#x(e);
			await this.#S(n, t);
		}
		await this.#v(n, t.signal, he(n, ["x"]));
	}
	#C() {
		let e = this.context;
		this.addInteractionListener("mousemove", (e) => {
			this.#r = e.point.y - this.childCoords.y;
		}), this.addInteractionListener("mouseleave", () => {
			this.#r = -1;
		}), this.addInteractionListener("wheel", (e) => {
			let t = e.wheelEvent;
			if (this.locationManager.isCloseup() && !t.ctrlKey) {
				this.locationManager.handleWheelEvent(t);
				let n = this.#t.scrollbars.vertical;
				n && n.setViewportOffset(this.locationManager.getScrollOffset(), {
					notify: !1,
					syncSmoother: !0
				}), this.sampleGroupView.updateRange(), this.context.animator.requestRender(), e.setWheelDeltas(t.deltaX, 0);
			}
		}, !0), e.addKeyboardListener("keydown", (e) => {
			e.code == "KeyE" && !e.repeat && this.#I();
		}), e.addKeyboardListener("keyup", (e) => {
			e.code == "KeyE" && this.#L(!1);
		});
	}
	#w() {
		this.compositeAttributeInfoSource = new nm(), this.childCoords = O.ZERO, this.sidebarCoords = O.ZERO, this.locationManager = new sm({
			getSampleHierarchy: () => this.sampleHierarchy,
			getHeight: () => this.#e || this.childCoords.height,
			getSummaryHeight: () => this.#t?.summaryViews.getSize().height.px,
			onLocationUpdate: ({ sampleHeight: e }) => {
				this.sampleGroupView.updateRange(), this.#o?.(e);
			},
			viewContext: this.context,
			isStickySummaries: () => this.#i,
			sampleLayout: this.spec.sampleLayout
		});
	}
	#T(e) {
		this.intentExecutor = e, this.#u = (e) => {
			let t = this.compositeAttributeInfoSource.getAttributeInfo.bind(this.compositeAttributeInfoSource);
			return Qn(e, this.sampleHierarchy, t);
		}, e.addActionAugmenter(this.#u);
	}
	#E() {
		this.registerDisposer(Ep(this.provenance.store, () => this.sampleHierarchy.rootGroup, Dp(() => {
			this.locationManager.reset(), this.invalidateSizeCache(), this.sampleGroupView?.updateGroups(), this.#j(), this.#M(), this.context.requestLayoutReflow();
		}))), this.registerDisposer(Ep(this.provenance.store, () => this.sampleHierarchy.sampleMetadata, Dp(() => this.#M())));
	}
	async initializeChildren() {
		let e = structuredClone(this.spec.spec);
		e.params ??= [], e.params.push({
			name: "height",
			value: 0
		});
		let t = await this.context.createOrImportView({
			configurableVisibility: !1,
			resolve: {
				axis: { x: "shared" },
				scale: { x: "shared" }
			},
			spacing: 0,
			vconcat: []
		}, this, this, "sampleSummaries"), n = await this.context.createOrImportView(e, this, this, "sample-facets", void 0, { inheritEncoding: !0 });
		this.#t = new Dg(n, this, 0, t, this.spec.view), this.#o = (e) => {
			this.#t.view.paramRuntime.setValue("height", e);
		}, this.#j(), this.#n = await this.context.createOrImportView({
			name: "sample-sidebar",
			title: "Sidebar",
			configurableVisibility: !0,
			resolve: {
				scale: { default: "independent" },
				axis: { default: "independent" }
			},
			encoding: {
				y: null,
				facetIndex: null
			},
			hconcat: [],
			spacing: 8,
			padding: { right: 8 }
		}, this, this, "sample-sidebar"), ct(this.#n, { skipSubtree: !0 }), this.sampleGroupView = new Jp(this, this.#n), this.sampleLabelView = new Zm(this, this.#n), this.metadataView = new Fp(this, this.#n), this.#n.setChildren([
			this.sampleGroupView,
			this.sampleLabelView,
			this.metadataView
		]);
		let r = (e) => {
			e.type === "mousedown" && e.mouseEvent.button !== 0 || e.stopPropagation();
		};
		this.#n.addInteractionListener("wheel", r, !0), this.#n.addInteractionListener("mousedown", r, !0), this.#n.addInteractionListener("touchgesture", r, !0), this.#t.scrollbars.vertical = new F(this.#t, "vertical", { onViewportOffsetChange: (e) => {
			this.locationManager.setScrollOffset(e), this.sampleGroupView.updateRange(), this.context.animator.requestRender();
		} }), this.#d = (e) => {
			this.#t.scrollbars.vertical.paramRuntime.setValue("scrollbarOpacity", e);
		}, a(this), b(this), o(this), await this.#t.syncGuideViews(), await this.#W(), a(this), b(this), o(this), await this.#t.summaryViews.syncGuideViews(), await this.sampleGroupView.initializeChildren(), await this.metadataView.initializeChildren(), this.#t.view.addInteractionListener("contextmenu", this.#V.bind(this));
	}
	getOverhang() {
		let e = this.#D().px ?? 0, t = this.locationManager.getLocations(), n = this.#t.sampleChromeLayout.getHorizontalReserve(t).add(new Ye(0, 0, 0, e)), r = this.#O();
		return n.add(r.sampleOverhang.getHorizontal()).add(r.sharedVerticalOverhang);
	}
	prepareLayoutSize(e, t) {
		let n = this.locationManager.getLocations();
		this.#e = t;
		let r = this.locationManager.getLocations();
		return this.#t.sampleChromeLayout.hasHorizontalReserveChanged(n, r);
	}
	#D() {
		return this.#n.isConfiguredVisible() ? this.#n.getSize().addPadding(this.#n.getPadding()).width : { px: 0 };
	}
	#O() {
		let e = this.#t.getOverhangWithoutYAxes(), t = this.#n.isConfiguredVisible() ? this.#n.getOverhang().getVertical() : Ye.zero();
		return {
			sampleOverhang: e,
			sidebarVerticalOverhang: t,
			sharedVerticalOverhang: e.getVertical().union(t)
		};
	}
	getSize() {
		return this._cache("size/size2", () => {
			let e = super.getSize(), t = ((e) => e.getSize().addPadding(e.getOverhang()).addPadding(e.getPadding()))(this.#t.view).width;
			return new qe(t, e.height);
		});
	}
	*[Symbol.iterator]() {
		yield this.#n, yield* this.#t.getChildren();
	}
	#k() {
		if (this.getSamples()) return;
		let e = this.getScaleResolution("sample");
		if (e) {
			let t = [...e.getDataDomain()].map((e, t) => ({
				id: e,
				displayName: e,
				indexNumber: t
			}));
			this.provenance.store.dispatch(this.actions.setSamples({ samples: t })), tm(this.provenance.store, pn);
		} else throw Error("No explicit sample data nor sample channels found!");
	}
	#A() {
		let e = this.spec.samples.identity;
		if (!e) throw Error("Sample identity definition is missing.");
		let { dataSource: t, collector: n } = f(p(e.data, this), new Eg(e.idField ?? "sample", e.displayNameField)), r = n.observe(() => {
			let e = n.getData();
			this.provenance.store.dispatch(this.actions.setSamples({ samples: e })), tm(this.provenance.store, pn);
		});
		this.registerDisposer(r), this.context.dataFlow.addDataSource(t);
	}
	get sampleHierarchy() {
		return this.provenance.getPresentState()[pn];
	}
	get leafSamples() {
		return rr(this.sampleHierarchy).map((e) => e.at(-1)).map((e) => e.samples).flat();
	}
	#j() {
		if (!this.#s) return;
		let e = this.leafSamples;
		Og(e, this.#c) || (this.#c = e, this.#s(e));
	}
	#M() {
		this.#l && this.#l(kg(this.sampleHierarchy, this.leafSamples));
	}
	getSampleAt(e) {
		let t = fm(e, this.locationManager.getLocations().samples);
		if (t) return this.sampleHierarchy.sampleData.entities[t.key];
	}
	#N(e, t) {
		if (this.#p === e) return this.#f;
		let n = 1 / t;
		return this.#f = e.map((e, t) => ({
			sampleFacetRenderingOptions: {
				locSize: e.locSize,
				pixelToUnit: n
			},
			facetId: [e.key],
			firstFacet: t === 0
		})), this.#p = e, this.#f;
	}
	#P(e, t, n = {}) {
		let r = this.#t, i = n, a = () => {
			A(r.legends, r.axes, t, e, i, (e, t, n) => n(), 0), r.renderTitle(e, t, i);
		}, o = r.groupBackground || Object.values(r.axes).length ? this.locationManager.getGroupBackgroundRects(this.childCoords) : [];
		for (let { coords: t, clipRect: i } of o) {
			r.groupBackground?.render(e, t, n);
			for (let a of Object.values(r.gridLines)) a.render(e, t, {
				...n,
				clipRect: i
			});
		}
		let s = dt(this.locationManager.clipBySummary(t), !0, !0), c = this.locationManager.getLocations();
		if (!c) {
			a();
			return;
		}
		let l = this.#N(c.samples, t.height), u = { ...n };
		delete u.facetId, delete u.firstFacet, delete u.sampleFacetRenderingOptions, delete u.clipRect, delete u.clip;
		let d = Object.keys(u).length > 0;
		for (let n of l) d && Object.assign(n, u), n.clip = s, r.background?.render(e, t, n), r.view.render(e, t, n), r.backgroundStroke?.render(e, t, n);
		for (let { coords: t } of o) r.groupBackgroundStroke?.render(e, t, n);
		for (let [n, i] of Object.entries(r.axes)) n === "left" || n === "right" || i.render(e, ve(t, n, i));
		r.sampleChromeLayout.renderVerticalAxes(e, t, c, {
			...n,
			clip: s
		});
		let f = r.summaryViews, p = f.getOverhang().getHorizontal();
		n = {
			...n,
			clip: dt(t.expand(p), !0, !0)
		};
		let m = f.getSize().height.px;
		for (let [r, i] of c.summaries.entries()) {
			let a = t.modify({
				y: () => {
					let e = i.locSize.location, n = t.y + e;
					return this.#i ? n + St(-e, 0, i.locSize.size - m) : n;
				},
				height: m
			}).expand(p);
			f.render(e, a, {
				...n,
				facetId: [r],
				firstFacet: r == 0
			});
		}
		a(), r.selectionRect?.view.render(e, t, n);
	}
	render(e, t, n = {}) {
		if (super.render(e, t, n), !this.isConfiguredVisible()) return;
		this.layoutParent || (t = t.shrink(this.getPadding()));
		let r = this.#O();
		t = t.shrink(r.sampleOverhang.getHorizontal().add(r.sharedVerticalOverhang)), e.pushView(this, t);
		let i = Pe([this.#D(), { grow: 1 }], t.width), a = (e) => t.modify({
			x: e.location + t.x,
			width: e.size
		});
		this.sidebarCoords = a(i[0]);
		let o = a(i[1]);
		this.childCoords = o;
		let s = this.locationManager.getLocations();
		this.childCoords = this.#t.sampleChromeLayout.getPlotCoords(o, s), this.#n.render(e, this.sidebarCoords.expand(r.sidebarVerticalOverhang), n), this.#P(e, this.childCoords, n);
		let c = this.#t.scrollbars.vertical;
		c && c.render(e, t, n), e.popView(this);
	}
	onBeforeRender() {
		this.locationManager.updateFacetTexture();
		let e = this.#t?.scrollbars.vertical;
		if (!e || !this.childCoords.isDefined()) return;
		let t = this.#i ? this.#t.summaryViews.getSize().height.px : 0, { viewportCoords: n, contentCoords: r, effectiveScrollOffset: i } = this.locationManager.getScrollbarLayout(this.childCoords, t);
		e.updateScrollbar(n, r), e.setViewportOffset(i, {
			notify: !1,
			syncSmoother: !0
		}), this.#d(this.locationManager.getPeekState());
	}
	getSampleFacetTexture() {
		return this.locationManager.getFacetTexture();
	}
	makePeekMenuItem(e = this.#r, t = this.#F(e)?.id) {
		return {
			...this.locationManager.isCloseup() ? {
				label: "Close closeup",
				callback: () => this.#L(!1),
				icon: ri
			} : {
				label: "Open closeup",
				callback: () => this.#I(e, t),
				icon: ai
			},
			shortcut: "E"
		};
	}
	findSampleForMouseEvent(e) {
		return this.getSampleAt(e.point.y - this.childCoords.y);
	}
	#F(e) {
		if (!Number.isFinite(e) || e < 0 || e > this.childCoords.height) return;
		let t = this.locationManager.getLocations().samples, n = pm(e, t);
		return n ? this.sampleHierarchy.sampleData.entities[n.key] : void 0;
	}
	#I(e = this.#r, t = this.#F(e)?.id) {
		this.#L(void 0, e, t);
	}
	#L(e, t, n) {
		let r = this.#R();
		Promise.resolve(this.locationManager.togglePeek(e, t, n)).finally(r);
	}
	#R() {
		if (!this.#t) return () => void 0;
		let e = Object.values(this.#t.legends).flatMap((e) => e.entries.map(({ legendView: e }) => e.suspendLayoutDataUpdates()));
		return () => {
			for (let t of e) t();
		};
	}
	#z() {
		let e = this.#t.view.getLayoutAncestors();
		for (let t of e) for (let [e, n] of t.paramRuntime.paramConfigs) {
			if (!("select" in n)) continue;
			let r = Je(n.select);
			if (!Qe(r) || !r.encodings?.includes("x")) continue;
			let i = t.paramRuntime.getValue(e);
			if (i && Fe(i)) return {
				selection: i,
				view: t,
				paramName: e,
				bookmarkable: n.persist !== !1
			};
		}
	}
	#B(e, t) {
		let n = this.childCoords.normalizePoint(t.point.x, t.point.y), r = {};
		for (let t of ["x", "y"]) {
			let i = e.getScaleResolution(t)?.getScale();
			if (!i || !("invert" in i)) continue;
			let a = t === "x" ? n.x : n.y, o = i.invert(a);
			["index", "locus"].includes(i.type) && (o += .5), r[t] = o;
		}
		return r;
	}
	#V(e) {
		let t = e.uiEvent, n = this.getLayoutAncestors().at(-1), r = this.childCoords.normalizePoint(e.point.x, e.point.y).x, i = this.findSampleForMouseEvent(e), a = this.#t.view, o = a.getScaleResolution("x"), s = o.invertToComplex(r), c = this.#z(), { selectionInterval: l, selectionIntervalComplex: u, selectionIntervalLabel: d } = eg(c, c ? this.#B(c.view, e) : void 0), f;
		if (c && c.bookmarkable) try {
			let e = xt(c.view, c.paramName);
			lt(this, e), f = {
				type: "selection",
				selector: e
			};
		} catch {
			f = void 0;
		}
		let p = Bh(a, n, !!l), m = l ? [] : Hh(a, n), h = [
			this.makePeekMenuItem(e.point.y - this.childCoords.y, i?.id),
			xd,
			{
				label: d ? `Interval: ${d}` : $h(a, o, s),
				type: "header"
			},
			xd
		], g = og(this, this.context.getCurrentHover()), _;
		g.status === "disabled" && g.reason === "multiplePointSelectionParams" ? this.#m ||= (console.warn("Selection expansion is disabled because multiple multi-point selection parameters are configured in the same UnitView."), !0) : g.status === "available" && (_ = g.context);
		let v = wg, y = {
			sample: i,
			sampleHierarchy: this.sampleHierarchy,
			attributeInfoSource: this.compositeAttributeInfoSource,
			attributeType: v,
			sampleView: this
		}, b = "", x = !1, S = (e) => e.getTitleText() ?? e.spec.name ?? e.explicitName ?? e.name ?? "View";
		for (let [e, t] of p.entries()) {
			let n = S(t.view);
			if (n != b && (e > 0 && h.push({ type: "divider" }), h.push({
				label: n,
				type: "header"
			}), b = n), l) {
				h.push({
					label: t.field,
					submenu: tg({
						fieldInfo: t,
						aggregationFieldInfos: p.filter((e) => e.view === t.view),
						selectionIntervalComplex: u,
						selectionIntervalSource: f,
						...y
					})
				});
				continue;
			}
			h.push({
				label: t.field,
				submenu: ng({
					fieldInfo: t,
					complexX: s,
					...y
				})
			});
			let r = p[e + 1];
			_ && !x && t.view === _.hoveredView && (!r || r.view !== t.view) && (h.push(_g(_, (e) => this.intentExecutor.dispatch(e))), x = !0);
		}
		_ && !x && (h.at(-1)?.type !== "divider" && h.push(xd), h.push({
			label: S(_.hoveredView),
			type: "header"
		}), h.push(_g(_, (e) => this.intentExecutor.dispatch(e))));
		for (let e of m) h.at(-1)?.type !== "divider" && h.push(xd), h.push({
			label: S(e),
			type: "header"
		}), h.push({ label: R`Actions unavailable.<br />
                    Add a unique explicit "name" to this view.` });
		Id({ items: h }, t);
	}
	getKeyboardZoomAnchorX(e) {
		if (this.childCoords.containsPoint(e.x, e.y)) return this.childCoords.normalizePoint(e.x, e.y).x;
	}
	#H() {
		let e = this.childCoords.y, t = this.childCoords.y2;
		for (let n of Object.values(this.#t.axes)) {
			let r = n.coords;
			r && (n.axisProps.orient === "top" || n.axisProps.orient === "bottom") && (e = Math.min(e, r.y), t = Math.max(t, r.y2));
		}
		return this.childCoords.modify({
			y: e,
			height: t - e
		});
	}
	propagateInteraction(e) {
		T(this, e, () => {
			let t = this.#H(), n = this.childCoords.containsPoint(e.point.x, e.point.y), r = t.containsPoint(e.point.x, e.point.y);
			if (e.type === "wheelclaimprobe") {
				r && this.#t.view.getScaleResolution("x")?.isZoomable() && e.claimWheel();
				return;
			}
			for (let t of Object.values(this.#t.scrollbars)) if (be(e, () => t.coords.containsPoint(e.point.x, e.point.y), () => t.propagateInteraction(e)), e.stopped) return;
			n ? be(e, () => !0, () => this.#t.view.propagateInteraction(e), () => ee(e, t, (e) => this.#U(t, this.#t.view, e), this.context.getCurrentHover(), this.context.animator)) : r && ee(e, t, (e) => this.#U(t, this.#t.view, e), this.context.getCurrentHover(), this.context.animator), !e.stopped && be(e, () => this.sidebarCoords.containsPoint(e.point.x, e.point.y), () => this.#n.propagateInteraction(e));
		});
	}
	#U(e, t, n) {
		let r = this.#t.view.getScaleResolution("x");
		if (!r || !r.isZoomable()) return !1;
		let i = e.normalizePoint(n.x, n.y), a = e.normalizePoint(n.x + n.xDelta, n.y + n.yDelta);
		return r.zoom(2 ** n.zDelta, i.x, a.x - i.x) && this.context.animator.requestRender(), !0;
	}
	async #W() {
		let e = [];
		for (let t of this.#t.view.getDescendants()) {
			let n = t.spec;
			if (vm(n)) for (let r of n.aggregateSamples) {
				r.transform = [{ type: "mergeFacets" }, ...r.transform ?? []], r.encoding = {
					...r.encoding ?? {},
					sample: null
				};
				let n = await this.context.createOrImportView(r, this.#t.summaryViews, t, "summaryView", void 0, {
					axisLabelClipPolicy: { y: "anchor" },
					inheritEncoding: !0
				});
				n.getFacetFields = (e) => void 0, e.push(n);
			}
		}
		this.#t.summaryViews.setChildren(e);
	}
	getDefaultResolution(e, t) {
		if (t == "axis") return "independent";
		switch (e) {
			case "x":
			case "sample": return "shared";
			default: return "independent";
		}
	}
	getParentGridChromePolicy() {
		return {
			axes: !1,
			background: !1
		};
	}
	dispatchAttributeAction(e) {
		this.intentExecutor.dispatch(e);
	}
	dispose() {
		super.dispose(), this.intentExecutor.removeActionAugmenter(this.#u);
	}
}, Eg = class extends Xe {
	#e;
	#t;
	#n = 0;
	constructor(e, t) {
		super(), this.#e = e, this.#t = t;
	}
	reset() {
		this.#n = 0;
	}
	handle(e) {
		let t = String(e[this.#e]), n = this.#t ? e[this.#t] : void 0, r = n == null ? t : String(n);
		this._propagate({
			id: t,
			displayName: r,
			indexNumber: this.#n++
		});
	}
}, Dg = class extends M {
	constructor(e, t, n, r, i) {
		super(e, t, n), this.groupBackground = void 0, this.groupBackgroundStroke = void 0, this.sampleChromeLayout = new Cg({
			sampleYAxis: t.spec.sampleYAxis,
			getActiveAxisCandidate: (e) => this.getActiveAxisCandidate(e),
			getPeekState: () => t.locationManager.getPeekState()
		});
		let a = de(i);
		a && (this.groupBackground = new s(a, t.context, t, e, "sample-group-background-" + n), ct(this.groupBackground, { skipSubtree: !0 }));
		let o = oe(i);
		o && (this.groupBackgroundStroke = new s(o, t.context, t, e, "sample-group-background-stroke-" + n), ct(this.groupBackgroundStroke, { skipSubtree: !0 })), this.summaryViews = r;
	}
	allowDuplicateAxes() {
		return !0;
	}
	async syncGuideViews() {
		if (await super.syncGuideViews(), this.legends.left) throw Error("SampleView child legends do not support left orientation because the sidebar owns the left side.");
	}
	getAxisLabelClipPolicy(e, t) {
		return e === "y" ? "anchor" : super.getAxisLabelClipPolicy(e, t);
	}
	getOverhangWithoutYAxes() {
		let e = (e) => we(this.axes[e]), t = new Ye(0, e("right"), 0, e("left"));
		return this.getOverhang().subtract(t);
	}
	*getChildren() {
		this.groupBackground && (yield this.groupBackground), this.groupBackgroundStroke && (yield this.groupBackgroundStroke), yield this.summaryViews, yield* super.getChildren();
	}
};
function Og(e, t) {
	return e.length == t.length && e.every((e, n) => e == t[n]);
}
function kg(e, t, n = "", r = /* @__PURE__ */ new Map()) {
	let i = e.sampleMetadata.attributeNames, a = e.sampleMetadata.entities, o = (e) => i.some((t) => t.startsWith(e + "/")), s = (e) => {
		if (r.has(e)) return r.get(e);
		let n = [];
		for (let r of t) {
			let t = a[r]?.[e];
			t != null && t !== "" && n.push(t);
		}
		return r.set(e, n), n;
	};
	return new Proxy({}, { get(a, c) {
		if (typeof c != "string") return;
		let l = n ? n + "/" + c : c;
		return i.includes(l) ? s(l) : o(l) ? kg(e, t, l, r) : Ag;
	} });
}
var Ag = new Proxy([], { get(e, t, n) {
	return t in e || typeof t != "string" ? Reflect.get(e, t, n) : Ag;
} }), jg = (e, t) => t.some((t) => e instanceof t), Mg, Ng;
function Pg() {
	return Mg ||= [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	];
}
function Fg() {
	return Ng ||= [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	];
}
var Ig = /* @__PURE__ */ new WeakMap(), Lg = /* @__PURE__ */ new WeakMap(), Rg = /* @__PURE__ */ new WeakMap(), zg = /* @__PURE__ */ new WeakMap(), Bg = /* @__PURE__ */ new WeakMap();
function Vg(e) {
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("success", i), e.removeEventListener("error", a);
		}, i = () => {
			t(qg(e.result)), r();
		}, a = () => {
			n(e.error), r();
		};
		e.addEventListener("success", i), e.addEventListener("error", a);
	});
	return t.then((t) => {
		t instanceof IDBCursor && Ig.set(t, e);
	}).catch(() => {}), Bg.set(t, e), t;
}
function Hg(e) {
	if (Lg.has(e)) return;
	let t = new Promise((t, n) => {
		let r = () => {
			e.removeEventListener("complete", i), e.removeEventListener("error", a), e.removeEventListener("abort", a);
		}, i = () => {
			t(), r();
		}, a = () => {
			n(e.error || new DOMException("AbortError", "AbortError")), r();
		};
		e.addEventListener("complete", i), e.addEventListener("error", a), e.addEventListener("abort", a);
	});
	Lg.set(e, t);
}
var Ug = {
	get(e, t, n) {
		if (e instanceof IDBTransaction) {
			if (t === "done") return Lg.get(e);
			if (t === "objectStoreNames") return e.objectStoreNames || Rg.get(e);
			if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
		}
		return qg(e[t]);
	},
	set(e, t, n) {
		return e[t] = n, !0;
	},
	has(e, t) {
		return e instanceof IDBTransaction && (t === "done" || t === "store") || t in e;
	}
};
function Wg(e) {
	Ug = e(Ug);
}
function Gg(e) {
	return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
		let r = e.call(Jg(this), t, ...n);
		return Rg.set(r, t.sort ? t.sort() : [t]), qg(r);
	} : Fg().includes(e) ? function(...t) {
		return e.apply(Jg(this), t), qg(Ig.get(this));
	} : function(...t) {
		return qg(e.apply(Jg(this), t));
	};
}
function Kg(e) {
	return typeof e == "function" ? Gg(e) : (e instanceof IDBTransaction && Hg(e), jg(e, Pg()) ? new Proxy(e, Ug) : e);
}
function qg(e) {
	if (e instanceof IDBRequest) return Vg(e);
	if (zg.has(e)) return zg.get(e);
	let t = Kg(e);
	return t !== e && (zg.set(e, t), Bg.set(t, e)), t;
}
var Jg = (e) => Bg.get(e);
//#endregion
//#region ../../node_modules/idb/build/index.js
function Yg(e, t, { blocked: n, upgrade: r, blocking: i, terminated: a } = {}) {
	let o = indexedDB.open(e, t), s = qg(o);
	return r && o.addEventListener("upgradeneeded", (e) => {
		r(qg(o.result), e.oldVersion, e.newVersion, qg(o.transaction), e);
	}), n && o.addEventListener("blocked", (e) => n(e.oldVersion, e.newVersion, e)), s.then((e) => {
		a && e.addEventListener("close", () => a()), i && e.addEventListener("versionchange", (e) => i(e.oldVersion, e.newVersion, e));
	}).catch(() => {}), s;
}
var Xg = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
], Zg = [
	"put",
	"add",
	"delete",
	"clear"
], Qg = /* @__PURE__ */ new Map();
function $g(e, t) {
	if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
	if (Qg.get(t)) return Qg.get(t);
	let n = t.replace(/FromIndex$/, ""), r = t !== n, i = Zg.includes(n);
	if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || Xg.includes(n))) return;
	let a = async function(e, ...t) {
		let a = this.transaction(e, i ? "readwrite" : "readonly"), o = a.store;
		return r && (o = o.index(t.shift())), (await Promise.all([o[n](...t), i && a.done]))[0];
	};
	return Qg.set(t, a), a;
}
Wg((e) => ({
	...e,
	get: (t, n, r) => $g(t, n) || e.get(t, n, r),
	has: (t, n) => !!$g(t, n) || e.has(t, n)
}));
//#endregion
//#region ../app/src/bookmark/bookmarkDatabase.js
var e_ = class {
	constructor() {
		this.baseUrl = void 0;
	}
	isReadonly() {
		return !0;
	}
	async put(e, t) {
		this._checkReadonly();
	}
	async delete(e) {
		this._checkReadonly();
	}
	async getNames() {
		return [];
	}
	async get(e) {}
	_checkReadonly() {
		if (this.isReadonly()) throw Error("This bookmark");
	}
}, t_ = "bookmarks", n_ = class extends e_ {
	constructor(e) {
		super(), this.specId = e, this._db = void 0;
	}
	async _getDB() {
		if (!this._db) {
			let e = `GenomeSpy: ${this.specId}`;
			this._db = Yg(e, 1, {
				upgrade(e, t, n, r) {
					e.createObjectStore(t_, { keyPath: "name" });
				},
				blocked() {},
				blocking() {},
				terminated() {}
			});
		}
		return this._db;
	}
	isReadonly() {
		return !1;
	}
	async put(e, t) {
		let n = (await this._getDB()).transaction(t_, "readwrite");
		try {
			t && await n.store.delete(t), await n.store.put(e), await n.done;
		} catch (e) {
			throw n.abort(), e;
		}
	}
	async delete(e) {
		(await this._getDB()).delete(t_, e);
	}
	async getNames() {
		return (await this._getDB()).getAllKeys(t_);
	}
	async get(e) {
		return (await this._getDB()).get(t_, e);
	}
}, r_ = {}, i_ = g(class extends n {
	constructor() {
		super(...arguments), this.ot = r_;
	}
	render(e, t) {
		return t();
	}
	update(e, [t, n]) {
		if (Array.isArray(t)) {
			if (Array.isArray(this.ot) && this.ot.length === t.length && t.every((e, t) => e === this.ot[t])) return xe;
		} else if (this.ot === t) return xe;
		return this.ot = Array.isArray(t) ? Array.from(t) : t, this.render(t, n);
	}
}), a_ = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	constructor(e) {
		this.#e = e, this.#e.addController(this);
	}
	addUnsubscribeCallback(e) {
		this.#t.add(e);
	}
	hostConnected() {}
	hostDisconnected() {
		this.#t.forEach((e) => e()), this.#t.clear();
	}
	hostUpdate() {}
	hostUpdated() {}
}, o_ = class extends I {
	constructor() {
		super(), this.inputRef = Lt(), this.app = void 0, this._focused = !1, this._subscriptions = new a_(this), this.getDefaultValue = () => "";
	}
	get genomeSpy() {
		return this.app.genomeSpy;
	}
	get _inputField() {
		return this.inputRef.value;
	}
	static get properties() {
		return { app: { type: Object } };
	}
	connectedCallback() {
		super.connectedCallback(), this._initializeGenome();
		let e = (e) => {
			e.target !== this._inputField && this._inputField?.blur();
		};
		document.addEventListener("click", e), this._subscriptions.addUnsubscribeCallback(() => document.removeEventListener("click", e));
	}
	createRenderRoot() {
		return this;
	}
	focusInput() {
		this._inputField?.focus();
	}
	_initializeGenome() {
		let e = u_(this.genomeSpy.viewRoot);
		if (e) {
			this._genomeResolution = e;
			let t = e.getScale();
			if (!("genome" in t)) throw Error("Expected a zoomable locus scale to provide genome()");
			this._genome = t.genome(), this.getDefaultValue = () => this._genome.formatInterval(e.getDomain());
			let n = ge(() => this.requestUpdate(), 60, !1);
			e.addEventListener("domain", n), this._subscriptions.addUnsubscribeCallback(() => e.removeEventListener("domain", n));
		}
	}
	async searchViews(e) {
		let t = new Intl.Collator("en", {
			usage: "search",
			sensitivity: "base"
		});
		for (let n of this.genomeSpy.getSearchableViews()) {
			let r = n.getSearchAccessors();
			if (r.length === 0) continue;
			let i = n.getDataAccessor("x").asNumberAccessor(), a = n.getDataAccessor("x2").asNumberAccessor(), o = n.getScaleResolution("x");
			if (!(!i || !a || !o?.isZoomable())) {
				for (let s of n.getCollector()?.getData() ?? []) if (c_(s, r, e, t)) {
					let e = Cn([i(s), a(s)], null, 1.2);
					return await o.zoomTo(e), !0;
				}
			}
		}
		return !1;
	}
	async search(e) {
		await (async () => {
			if (this._genomeResolution && this._genome) {
				let t = this._genome.parseInterval(e);
				if (t) {
					this._genomeResolution.zoomTo(t);
					return;
				}
				if (await this.searchViews(e)) return;
				this.genomeSpy.viewRoot.visit((t) => {
					t instanceof Fp && t.handleVerboseCommand(e);
				});
			}
		})(), this._inputField.value = this.getDefaultValue(), this.requestUpdate();
	}
	_onSearchHelpClicked(e) {
		let t = e.target;
		t.tagName == "LI" && this._doExampleSearch(t.innerText);
	}
	_onSearchFocused(e) {
		let t = e.target;
		switch (e.type) {
			case "focus":
				this._focused = !0, t.select();
				break;
			case "blur":
				this._focused = !1;
				break;
			default:
		}
	}
	_onSearchKeyDown(e) {
		let t = e.target;
		e.code == "Enter" ? (e.preventDefault(), this.search(t.value).then(() => {
			t.focus(), t.select();
		}).catch((e) => {
			console.log(e), alert(e);
		})) : e.code == "Escape" ? t.blur() : e.stopPropagation();
	}
	_doExampleSearch(e) {
		s_(e, this._inputField).then(() => {
			this._inputField.blur(), this.search(e);
		});
	}
	_getSearchHelp() {
		let e = [];
		e.push(R`
            <p>Focus to a specific range. Examples:</p>
            <ul>
                <!-- TODO: Display only when using a genomic coordinate system-->
                <li>chr8</li>
                <li>chr8:21,445,873</li>
                <li>chr8:21,445,873-24,623,697</li>
                <li>chr4:166,014,727-chr15:23,731,397</li>
            </ul>
        `);
		for (let t of this.genomeSpy?.getSearchableViews() || []) {
			let n = t.getTitleText() ?? t.spec.name, r = t.getSearchAccessors(), i = r.flatMap((e) => e.fields).join(", "), a = l_(r, t.getCollector().getData(), 3);
			e.push(R`
                <p>Search <em>${n}</em> (${i}). Examples:</p>
                <ul>
                    ${a.map((e) => R` <li>${e}</li> `)}
                </ul>
            `);
		}
		let t = this.app.getSampleView()?.metadataView;
		if (t) {
			let n = t.getAttributeNames().map((e) => t.getAttributeInfo(e)).filter((e) => e.type == "nominal" || e.type == "ordinal").sort(() => .5 - Math.random()).map((e) => [...e.scale?.domain() ?? []].sort(() => .5 - Math.random())[0]).filter((e) => e !== void 0).slice(0, 3);
			n.length && e.push(R` <p>
                            Filter samples by categorical attributes. Examples:
                        </p>
                        <ul>
                            ${n.map((e) => R`<li>${e}</li>`)}
                        </ul>`);
		}
		return R`
            <div class="search-help" @click=${this._onSearchHelpClicked}>
                ${e}
            </div>
        `;
	}
	updated(e) {
		this._focused && this._inputField.select();
	}
	render() {
		return R`
            <div class="search">
                <input
                    type="text"
                    class="search-input"
                    .value=${this.getDefaultValue()}
                    @mousedown=${(e) => {
			this._focused || (this._inputField.focus(), e.preventDefault(), e.stopPropagation());
		}}
                    @keydown=${this._onSearchKeyDown.bind(this)}
                    @focus=${this._onSearchFocused}
                    @blur=${this._onSearchFocused}
                    ${Nt(this.inputRef)}
                />
                ${i_([123], () => this._getSearchHelp())}
            </div>
        `;
	}
};
customElements.define("genome-spy-search-field", o_);
function s_(e, t) {
	return new Promise((n) => {
		let r = 0, i = 700 / e.length + 30;
		function a() {
			t.value = e.substring(0, r), r >= e.length ? setTimeout(n, 500) : (r++, setTimeout(a, Math.random() * i * 2));
		}
		a();
	});
}
function c_(e, t, n, r) {
	for (let i of t) {
		let t = i(e);
		if (t != null && r.compare(String(t), n) === 0) return !0;
	}
	return !1;
}
function l_(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) for (let e of l(n, t, i)) if (e != null && r.add(String(e)), r.size >= n) return [...r];
	return [...r];
}
function u_(e) {
	let t;
	return e.visit((e) => {
		for (let n of ["x", "y"]) {
			let r = e.resolutions.scale[n];
			if (r && r.type == "locus" && r.isZoomable()) return t = r, We;
		}
	}), t;
}
var d_ = {
	name: "@genome-spy/app",
	description: "GenomeSpy-based visualization tool for analyzing multiple biological samples.",
	author: {
		name: "Kari Lavikka",
		email: "kari.lavikka@helsinki.fi"
	},
	contributors: [],
	license: "MIT",
	homepage: "https://genomespy.app/",
	version: "0.83.0",
	main: "dist/index.js",
	module: "dist/index.es.js",
	type: "module",
	types: "src/index.d.ts",
	exports: {
		".": {
			types: "./src/index.d.ts",
			development: "./src/index.js",
			import: "./dist/index.es.js",
			default: "./dist/index.js"
		},
		"./agentApi": {
			types: "./src/agentApi/index.d.ts",
			development: "./src/agentApi/index.js",
			import: "./dist/agentApi.es.js",
			default: "./dist/agentApi.es.js"
		},
		"./agentShared": {
			types: "./src/agentShared/index.d.ts",
			development: "./src/agentShared/index.js",
			import: "./dist/agentShared.es.js",
			default: "./dist/agentShared.es.js"
		},
		"./browser": {
			import: "./dist/index.es.js",
			default: "./dist/index.js"
		},
		"./dialog": {
			types: "./src/dialog/index.d.ts",
			development: "./src/dialog/index.js",
			import: "./dist/dialog.es.js",
			default: "./dist/dialog.es.js"
		},
		"./schema.json": "./dist/schema.json",
		"./style.css": "./dist/style.css"
	},
	files: ["dist/", "src/**/*.d.ts"],
	repository: {
		type: "git",
		url: "github:genome-spy/genome-spy",
		directory: "packages/app"
	},
	scripts: {
		dev: "node dev-server.mjs",
		build: "rm -rf dist && mkdir -p dist && vite build && vite build --config vite.agent-subpaths.config.js && npm run build:schema",
		"build:schema": "mkdir -p dist && ts-json-schema-generator --path 'src/spec/*.d.ts' --type AppRootSpec > dist/schema.json",
		"test:tsc": "npm run test:tsc:src && npm run test:tsc:tests",
		"test:tsc:src": "tsc -p tsconfig.json --noEmit",
		"test:tsc:tests": "tsc -p tsconfig.tests.json --noEmit",
		storybook: "storybook dev -p 6006",
		"build-storybook": "storybook build",
		prepublishOnly: "npm run build"
	},
	dependencies: {
		"@floating-ui/dom": "^1.6.1",
		"@fortawesome/fontawesome-free": "^6.4.2",
		"@fortawesome/fontawesome-svg-core": "^6.4.2",
		"@fortawesome/free-solid-svg-icons": "^6.4.2",
		"@genome-spy/core": "^0.83.0",
		"@reduxjs/toolkit": "^2.11.0",
		"d3-color": "^3.1.0",
		idb: "^7.1.1",
		lit: "^3.3.0",
		"lz-string": "^1.4.4",
		mapsort: "^1.0.5",
		micromark: "^4.0.0",
		"redux-undo": "^1.0.1",
		"vega-util": "2.1.0",
		zarrita: "^0.6.1"
	},
	devDependencies: {
		"@genome-spy/app-agent": "^0.83.0",
		"@genome-spy/inspector": "^0.83.0"
	}
};
//#endregion
//#region ../app/src/utils/version.js
function f_(e) {
	return R`<a
        href="https://github.com/genome-spy/genome-spy/releases/tag/v${e}"
        target="_blank"
        >v${e}</a
    >`;
}
//#endregion
//#region ../../node_modules/lit-html/directives/live.js
var p_ = g(class extends n {
	constructor(e) {
		if (super(e), e.type !== j.PROPERTY && e.type !== j.ATTRIBUTE && e.type !== j.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
		if (!At(e)) throw Error("`live` bindings can only contain a single expression");
	}
	render(e) {
		return e;
	}
	update(e, [t]) {
		if (t === xe || t === P) return t;
		let n = e.element, r = e.name;
		if (e.type === j.PROPERTY) {
			if (t === n[r]) return xe;
		} else if (e.type === j.BOOLEAN_ATTRIBUTE) {
			if (!!t === n.hasAttribute(r)) return xe;
		} else if (e.type === j.ATTRIBUTE && n.getAttribute(r) === t + "") return xe;
		return It(e), t;
	}
});
//#endregion
//#region ../app/src/utils/dependency.js
function m_(e, t) {
	return new CustomEvent("query-dependency", {
		detail: {
			name: e,
			setter: t
		},
		bubbles: !0
	});
}
//#endregion
//#region ../app/src/utils/nestPaths.js
function h_(e) {
	if (!e?.length) throw Error("Can't nest an empty array!");
	let t = g_(null);
	for (let n of e) {
		if (!n?.length) throw Error("Cannot nest, element has no path!");
		let e = t;
		for (let t of n) {
			let n = e.children.find((e) => e.item === t);
			n || (n = g_(t), e.children.push(n)), e = n;
		}
	}
	return t.children[0];
}
var g_ = (e) => ({
	item: e,
	children: []
}), __ = class extends I {
	static properties = {
		items: { type: Array },
		rowHeight: { type: Number },
		buffer: { type: Number },
		blockMultiplier: { type: Number }
	};
	#e = 0;
	#t = 0;
	#n = null;
	#r = null;
	#i = null;
	#a = new a_(this);
	constructor() {
		super(), this.items = [], this.rowHeight = 32, this.buffer = 5, this.blockMultiplier = 3;
	}
	static styles = L`
        :host {
            display: block;
            position: relative;

            font-size: inherit;
            font-family: inherit;

            --dg-row-height: 32px;
            --dg-border: var(--form-control-border-color, #ccc);
        }

        .grid-root {
            border: 1px solid var(--dg-border);
            border-radius: var(--form-control-border-radius, 4px);
            overflow-x: auto;
            position: absolute;
            inset: 0;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .header-table,
        .body-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
        }

        .header-table th {
            text-align: left;
            padding: 0 0.5rem;
            height: var(--dg-row-height);
            box-sizing: border-box;
            border-bottom: 1px solid var(--dg-border);
            font-weight: 600;
        }

        .grid-body {
            overflow-y: auto;
            flex-grow: 1;
            position: relative;
            contain: content;
            -webkit-overflow-scrolling: touch;
        }

        .body-table tr {
            height: var(--dg-row-height);
        }

        .body-table td {
            padding: 0 0.5rem;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0, 0, 0, 0.03);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .body-table td.numeric,
        .header-table th.numeric {
            text-align: right;
            font-variant-numeric: tabular-nums;
        }

        .cell {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    `;
	firstUpdated() {
		this.#r = this.renderRoot.querySelector(".grid-body"), this.#r.addEventListener("scroll", () => this.#o(), { passive: !0 }), this.#l(), this.#a.addUnsubscribeCallback(() => {
			this.#r.removeEventListener("scroll", this.#o);
		});
		let e = new ResizeObserver(() => this.#l());
		e.observe(this), this.#a.addUnsubscribeCallback(() => {
			e.disconnect();
		});
	}
	#o() {
		this.#l();
	}
	#s(e) {
		if (e == null) return 0;
		if (!this.#i) {
			let e = document.createElement("canvas");
			this.#i = e.getContext("2d");
		}
		let t = getComputedStyle(this), n = t.fontSize ?? "14px", r = t.fontFamily ?? "sans-serif", i = t.fontWeight ?? "400";
		this.#i.font = `${i} ${n} ${r}`;
		try {
			return this.#i.measureText(String(e)).width ?? 0;
		} catch {
			return String(e).length * (parseFloat(n) ?? 14) * .6;
		}
	}
	#c() {
		let e = this.items ?? [], t = e.length ? Object.keys(e[0]) : [], n = getComputedStyle(this), r = parseFloat(n.fontSize) || 14, i = 3 * r, a = 20 * r, o = Math.min(100, e.length), s = t.map((t) => {
			let n = this.#s(t ?? "");
			for (let r = 0; r < o; r++) {
				let i = e[r] ? e[r][t] : "", a = this.#s(i == null ? "" : String(i));
				a > n && (n = a);
			}
			return Math.ceil(Math.min(a, Math.max(i, n + 24)));
		}), c = t.map((t) => {
			let n = 0, r = 0;
			for (let i = 0; i < o; i++) {
				let a = e[i] ? e[i][t] : null;
				if (!(a == null || a === "")) {
					if (r++, typeof a == "number") n++;
					else if (typeof a == "string") {
						let e = a.trim();
						if (e === "") continue;
						let t = Number(e.replace(/[, ]+/g, ""));
						isFinite(t) && n++;
					}
				}
			}
			return r !== 0 && n / r >= .8;
		}), l = t.map((e, t) => ({
			key: e,
			label: e,
			width: s[t],
			isNumeric: c[t]
		}));
		this.#n = l;
	}
	#l() {
		if (!this.#r) return;
		let e = this.rowHeight, t = this.items.length, n = this.#r.clientHeight ?? 0, r = Math.max(1, Math.ceil(n / e)), i = this.#r.scrollTop ?? 0, a = Math.floor(i / e), o = this.blockMultiplier ?? 1, s = Math.max(1, Math.ceil(r * o)), c = Math.floor(a / s) * s, l = this.buffer ?? 0, u = Math.max(0, c - l), d = Math.max(0, Math.min(t - u, s + 2 * l)), f = this.#e !== u || this.#t !== d;
		this.#e = u, this.#t = d, f && this.requestUpdate();
	}
	updated(e) {
		(e.has("items") || e.has("columns")) && this.#c();
	}
	#u(e) {
		return R`${e.map((e) => R`<th class="cell ${e.isNumeric ? "numeric" : ""}">
                    ${e.label}
                </th>`)}`;
	}
	#d(e, t) {
		return R`${t.map((t) => R`<td class="cell ${t.isNumeric ? "numeric" : ""}">
                    ${this.#f(e[t.key])}
                </td>`)}`;
	}
	#f(e) {
		return e == null ? R`` : typeof e == "object" ? R`${JSON.stringify(e)}` : R`${String(e)}`;
	}
	render() {
		let e = this.items ?? [], t = e.length ? Object.keys(e[0]) : [], n = e.length * this.rowHeight, r = this.#e ?? 0, i = e.slice(r, r + this.#t), a = this.#n || t.map((e) => ({
			key: e,
			label: e,
			width: null,
			isNumeric: !1
		})), o = R`<colgroup>
            ${a.map((e) => e.width ? R`<col style="width:${e.width}px" />` : R`<col />`)}
        </colgroup>`, s = r * this.rowHeight, c = i.length * this.rowHeight, l = Math.max(0, n - s - c), u = this.#n && this.#n.reduce((e, t) => e + (t.width ?? 0), 0) || null, d = R`
            <table class="header-table" role="table">
                ${o}
                <thead>
                    <tr role="row">
                        ${this.#u(a)}
                    </tr>
                </thead>
            </table>
        `, f = R`
            <table class="body-table">
                ${o}
                <tbody>
                    <tr style="height:${s}px">
                        <td colspan="${a.length}"></td>
                    </tr>
                    ${i.map((e, t) => R`<tr role="row">
                                ${this.#d(e, a)}
                            </tr>`)}
                    <tr style="height:${l}px">
                        <td colspan="${a.length}"></td>
                    </tr>
                </tbody>
            </table>
        `;
		return R`
            <div class="grid-root">
                <div
                    class="container"
                    style="min-width:${u ? u + "px" : "100%"}"
                >
                    ${d}
                    <div class="grid-body" role="grid">${f}</div>
                </div>
            </div>
        `;
	}
};
customElements.define("gs-data-grid", __);
//#endregion
//#region ../app/src/components/generic/uploadDropZone.js
var v_ = class extends I {
	static properties = {
		accept: { type: String },
		multiple: { type: Boolean },
		dropText: { type: String },
		_dragOver: { state: !0 }
	};
	constructor() {
		super(), this.accept = "", this.multiple = !1, this.dropText = "Drop a file here or", this._dragOver = !1;
	}
	static styles = [
		Tc,
		wc,
		L`
            :host {
                display: block;
                font-size: inherit;
                font-family: inherit;
            }

            .drop-zone {
                border: 2px dashed var(--form-control-border-color);
                border-radius: 8px;
                padding: 1.25rem;
                display: flex;
                align-items: center;
                justify-content: center;
                transition:
                    box-shadow 0.15s ease,
                    transform 0.12s ease,
                    background-color 0.12s ease;
            }

            .drop-zone.drop-over {
                background-color: rgba(106, 160, 255, 0.06);
                border-color: var(--gs-accent-color, #6aa0ff);
                box-shadow: 0 8px 24px rgba(106, 160, 255, 0.08);
            }

            .drop-inner {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            .drop-icon {
                font-size: 2rem;
            }
        `
	];
	render() {
		return R`
            <div
                class=${this._dragOver ? "drop-zone drop-over" : "drop-zone"}
                @dragover=${(e) => this.#t(e)}
                @dragleave=${(e) => this.#n(e)}
                @drop=${(e) => this.#r(e)}
            >
                <div class="drop-inner">
                    <div class="drop-icon">${W(Yr).node[0]}</div>
                    <div class="drop-text">${this.dropText}</div>
                    <button
                        class="btn"
                        @click=${(e) => {
			e.stopPropagation(), this.#e().click();
		}}
                    >
                        Choose file
                    </button>
                </div>
                <input
                    id="file"
                    type="file"
                    accept=${this.accept}
                    ?multiple=${this.multiple}
                    @change=${(e) => this.#i(e)}
                    style="display: none"
                />
            </div>
        `;
	}
	#e() {
		return this.renderRoot.querySelector("#file");
	}
	#t(e) {
		e.preventDefault(), e.dataTransfer.dropEffect = "copy", this._dragOver = !0;
	}
	#n(e) {
		e.preventDefault(), this._dragOver = !1;
	}
	#r(e) {
		e.preventDefault(), this._dragOver = !1;
		let t = e.dataTransfer;
		if (t.files.length) {
			let e = t.files;
			this.#a(e);
		}
	}
	#i(e) {
		let t = e.target;
		t.files.length && this.#a(t.files);
	}
	#a(e) {
		let t = new CustomEvent("gs-files-chosen", {
			detail: { files: e },
			bubbles: !0,
			composed: !0
		});
		this.dispatchEvent(t);
	}
};
customElements.define("gs-upload-drop-zone", v_);
//#endregion
//#region ../app/src/sampleView/metadata/metadataHierarchyConfigurator.js
var y_ = "sample", b_ = class extends I {
	static properties = {
		_pathRoot: { state: !0 },
		metadataRecords: {},
		addUnderGroup: { state: !0 },
		separator: { type: String }
	};
	constructor() {
		super(), this.metadataRecords = [], this.addUnderGroup = "", this.separator = "", this._pathRoot = null, this._separatorManuallySet = !1, this._columns = [], this._scales = /* @__PURE__ */ new Map(), this._metadataNodeTypes = /* @__PURE__ */ new Map();
	}
	static styles = [Tc, L`
            :host {
                display: block;
            }

            .gs-form-group {
                margin-bottom: 12px;
            }

            .table-wrapper {
                border: 1px solid var(--form-control-border-color, #ccc);
                border-radius: var(--form-control-border-radius, 4px);
                overflow: hidden;
                margin-top: 0.5em;
            }

            table {
                width: 100%;
                border-collapse: collapse;

                .btn {
                    padding: 4px 8px;
                    margin-top: -2px;
                    margin-bottom: -2px;
                }
            }

            th,
            td {
                text-align: left;
                padding: 0.4em 0.6em;
                box-sizing: border-box;
                border-bottom: 1px solid rgba(0, 0, 0, 0.03);
            }

            th {
                font-weight: 600;
                border-bottom-color: var(--form-control-border-color, #ccc);
            }

            td {
                font-size: 90%;
            }

            .scheme-preview img {
                height: 16px;
                vertical-align: middle;
                margin-right: 6px;
            }

            .btn svg {
                width: 1em;
            }

            span.unset {
                text-decoration: line-through;
            }

            select.invalid {
                color: var(--danger-color, #dc3545);
                border-color: var(--danger-color, #dc3545);
            }
        `];
	#e() {
		let e = /* @__PURE__ */ new Set();
		for (let t of this.metadataRecords || []) for (let n of Object.keys(t)) e.add(n);
		this._columns = Array.from(e).filter((e) => e !== y_);
	}
	#t() {
		this._rawTypes = /* @__PURE__ */ new Map();
		for (let e of qt(this._pathRoot)) if (e.path) {
			let t = Vt(this.metadataRecords.map((t) => t[e.attribute]).filter((e) => e != null));
			this._rawTypes.set(e.attribute, t);
		}
	}
	#n() {
		let e = cn(this._rawTypes, this._pathRoot);
		for (let [t, n] of e.entries()) this._metadataNodeTypes.has(t) || this._metadataNodeTypes.set(t, n);
	}
	firstUpdated() {
		this.#e();
		let e = this._columns;
		if (e.length > 0 && !this._separatorManuallySet) {
			let t = ar(e);
			t && t !== this.separator && (this.separator = t);
		}
		this._pathRoot = Jt(e, this.separator), this.#t(), this.#n(), this.#c();
	}
	updated(e) {
		super.updated(e), e.has("metadataRecords") && (this.#e(), this.#t()), e.has("separator") && (this._pathRoot = Jt(this._columns, this.separator), this.#n(), this.#c());
	}
	#r(e) {
		this.addUnderGroup = e.target.value.trim(), this.#c();
	}
	#i(e) {
		this.separator = e.target.value, this._separatorManuallySet = !0, this.#c();
	}
	async #a(e) {
		let t = ((e) => {
			for (let t of [e, ...sn(e)]) {
				let e = this._metadataNodeTypes.get(t.path);
				if (e && e !== "unset" && e !== "inherit") return e;
			}
			return "nominal";
		})(e), n = [];
		for (let t of qt(e)) if (t.attribute) for (let e of this.metadataRecords) {
			let r = e[t.attribute];
			r != null && n.push(r);
		}
		let r = n.length > 0 ? fh(t, n) : [], i = this._scales.get(e.path), a = await K("gs-configure-scale-dialog", (e) => {
			e.observedDomain = r, e.dataType = t, i && (e.scale = i);
		});
		if (a.ok) {
			let t = a.data;
			t && Object.keys(t).length > 0 ? this._scales.set(e.path, t) : this._scales.delete(e.path), this.requestUpdate(), this.#c();
		}
	}
	#o() {
		let e = (e) => {
			let t = e.target, n = t.dataset.path, r = t.value;
			this._metadataNodeTypes.set(n, r), this.requestUpdate(), this.#c();
		}, t = this.#s();
		return yl(qt(this._pathRoot), (n) => {
			let r = (e) => {
				let t = 0, n = e.parent;
				for (; n;) t++, n = n.parent;
				return t;
			}, i = n.path, a = n.children.size === 0, o = this._scales.get(i), s = o?.type ?? "", c = o?.domain ? JSON.stringify(o.domain) : "", l = o?.range ? JSON.stringify(o.range) : "", u = o?.scheme ?? null, d = this._metadataNodeTypes.get(n.path) ?? "unset", f = n.parent === null, p = f && this.addUnderGroup ? this.addUnderGroup : n.part, m = { marginLeft: `${r(n) * 20}px` };
			f && !this.addUnderGroup && (m.color = "gray");
			let h = { unset: a && d === "unset" }, g = { invalid: t.has(n.path) };
			return R`<tr>
                <td>
                    <span
                        style=${w(m)}
                        class=${_r(h)}
                        >${p}</span
                    >
                </td>
                <td>
                    <select
                        data-path="${n.path}"
                        class=${_r(g)}
                        @change=${e}
                    >
                        ${[
				"nominal",
				"ordinal",
				"quantitative",
				"unset",
				"inherit"
			].map((e) => R`<option
                                    value="${e}"
                                    ?selected=${d === e}
                                >
                                    ${e}
                                </option>`)}
                    </select>
                </td>
                <td>${s}</td>
                <td>${c}</td>
                <td>
                    ${l || (u ? R`<span class="scheme-preview"
                                ><img
                                    src="${dh(u)}"
                                    alt="${u}"
                                    title="${u}"
                                />${u}</span
                            >` : "")}
                </td>
                <td style="text-align: right;">
                    <button
                        class="btn"
                        @click=${() => this.#a(n)}
                        title="Configure scale"
                        ?disabled=${d === "unset" || d === "inherit"}
                    >
                        ${W(Tr).node[0]}
                    </button>
                </td>
            </tr>`;
		});
	}
	#s() {
		let e = /* @__PURE__ */ new Set(), t = (e) => e === "nominal" || e === "ordinal" || e === "quantitative", n = this._metadataNodeTypes.get(""), r = t(n) ? n : null, i = (n, r) => {
			let a = this._metadataNodeTypes.get(n.path), o = r;
			t(a) ? o = a : a === "inherit" && !o && n.children.size === 0 && e.add(n.path);
			for (let e of n.children.values()) i(e, o);
		};
		return this._pathRoot && i(this._pathRoot, r), e;
	}
	render() {
		return R`
            <div class="gs-form-group">
                <label for="group-name">Root group name</label>
                <input
                    id="group-name"
                    type="text"
                    .value=${this.addUnderGroup ?? ""}
                    placeholder="(optional) Group name under which to add new metadata"
                    @input=${this.#r}
                />
            </div>

            <div class="gs-form-group">
                <label for="separator">Hierarchy-level separator</label>
                <input
                    id="separator"
                    type="text"
                    .value=${this.separator ?? ""}
                    placeholder="(optional) Separator character for possible hierarchical groups (e.g. .)"
                    @input=${this.#i}
                />
            </div>

            <div>
                <label>Attributes</label>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Data type</th>
                                <th>Scale</th>
                                <th>Domain</th>
                                <th>Range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.#o()}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
	}
	getConfig() {
		let e = [...this.#s()];
		return {
			separator: this.separator ? this.separator : null,
			addUnderGroup: this.addUnderGroup ? this.addUnderGroup : null,
			scales: new Map(this._scales.entries().map(([e, t]) => [e, structuredClone(t)])),
			metadataNodeTypes: new Map(this._metadataNodeTypes),
			invalidInheritLeafNodes: e
		};
	}
	#c() {
		this.dispatchEvent(new CustomEvent("metadata-config-change", {
			detail: this.getConfig(),
			bubbles: !0,
			composed: !0
		}));
	}
};
customElements.define("gs-metadata-hierarchy-configurator", b_);
//#endregion
//#region ../app/src/sampleView/metadata/metadataFileUtils.js
function x_(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => t(r.result), r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("Could not read file.")), r.readAsText(e);
	});
}
function S_(e, t) {
	return /\.json$/i.test(t) ? "json" : e.indexOf("	") >= 0 ? "tsv" : "csv";
}
//#endregion
//#region ../app/src/sampleView/metadata/uploadMetadataDialog.js
var C_ = class extends G {
	static properties = {
		...super.properties,
		existingSampleIds: {},
		_fileName: { state: !0 },
		_parsedItems: { state: !0 },
		_page: { state: !0 }
	};
	#e;
	#t;
	#n;
	constructor() {
		super(), this.existingSampleIds = /* @__PURE__ */ new Set(), this.dialogTitle = "Load Custom Metadata", this._parsedItems = null, this._fileName = null, this._page = 0, this.#n = new Mh(this, [
			{
				render: () => this.#o(),
				canAdvance: () => this._parsedItems != null
			},
			{
				render: () => this.#c(),
				canAdvance: () => this.#e?.statistics?.samplesInBoth?.size > 0
			},
			{
				render: () => this.#l(),
				onAdvance: () => this.#r()
			}
		]);
	}
	static styles = [...super.styles, L`
            dialog {
                width: 600px;
            }

            .upload-stats {
                margin-top: var(--gs-basic-spacing, 10px);
                font-size: 90%;
            }
        `];
	#r() {
		let e = this.#t;
		if (!e) throw Error("Metadata configuration is missing");
		if (e.invalidInheritLeafNodes.length > 0) return q("Some leaf attributes are set to inherit a type, but no ancestor defines one. Select a concrete type for those leaves or define a type higher in the hierarchy.", {
			title: "Warning",
			type: "warning"
		}), !1;
		let t = Zt(this._parsedItems, this.existingSampleIds, e);
		return this.finish({
			ok: !0,
			data: t
		}), this.triggerClose(), !1;
	}
	async #i(e) {
		let t = await x_(e), n = S_(t, e.name);
		this._parsedItems = ye(t, {
			type: n,
			parse: "auto"
		}), this._fileName = e.name, this.#e = Xn(this.existingSampleIds, this._parsedItems), this.#n.advance(1);
	}
	async #a(e) {
		let t = e.detail.files[0];
		await this.#i(t);
	}
	#o() {
		return R`${w_}

            <gs-upload-drop-zone
                accept=".csv,.tsv,.json"
                @gs-files-chosen=${(e) => this.#a(e)}
            ></gs-upload-drop-zone>`;
	}
	#s() {
		if (this.#e.error) return R`<div class="gs-alert danger">
                ${W(ui).node[0]}
                <div>
                    <p>Errors found in metadata:</p>
                    <ul>
                        ${this.#e.error.map((e) => R`<li>${D_(e)}</li>`)}
                    </ul>
                    <p>Please fix the errors and try again.</p>
                </div>
            </div>`;
		if (this.#e.statistics) {
			let e = this.#e.statistics, t = e.unknownSamples.size > 0 || e.notCoveredSamples.size > 0;
			return R`<div
                class="${t ? "gs-alert warning" : "gs-alert info"}"
            >
                ${W(t ? wr : Vr).node[0]}
                <div>
                    <p>
                        ${t ? "Metadata loaded (with caveats)!" : "Metadata loaded successfully!"}
                    </p>
                    <ul>
                        <li>
                            Unknown samples to be ignored:
                            <span>${e.unknownSamples.size}</span
                            >${E_(e.unknownSamples)}
                        </li>
                        <li>
                            Existing samples not covered by loaded metadata:
                            <span>${e.notCoveredSamples.size}</span
                            >${E_(e.notCoveredSamples)}
                        </li>
                        <li>
                            Matching samples:
                            <span>${e.samplesInBoth.size}</span>
                        </li>
                    </ul>
                </div>
            </div>`;
		}
	}
	#c() {
		return R`
            ${this.#s()}

            <p>Data preview (<code>${this._fileName}</code>):</p>

            <div style="margin-top: var(--gs-basic-spacing, 10px)">
                <gs-data-grid
                    .items=${this._parsedItems}
                    style="height: 240px"
                ></gs-data-grid>
            </div>
        `;
	}
	#l() {
		return R`<gs-metadata-hierarchy-configurator
            .metadataRecords=${this._parsedItems}
            @metadata-config-change=${(e) => {
			this.#t = e.detail;
		}}
        ></gs-metadata-hierarchy-configurator>`;
	}
	renderBody() {
		return this.#n.currentPage.render();
	}
	renderButtons() {
		let e = this.#n.isLastPage ? {
			label: "Finish",
			icon: null
		} : {
			label: "Next",
			icon: br
		};
		return [
			this.makeCloseButton("Cancel"),
			this.makeButton("Previous", () => this.#n.advance(-1), {
				iconDef: Cr,
				disabled: this.#n.isFirstPage
			}),
			this.makeButton(e.label, () => this.#n.advance(1), {
				iconDef: e.icon ?? void 0,
				disabled: !this.#n.canAdvance(),
				isPrimary: !0
			})
		];
	}
	resetWizard() {
		this.#n.reset(), this._parsedItems = null, this._fileName = null;
	}
};
customElements.define("gs-upload-metadata-dialog", C_);
var w_ = R`<p>
        This wizard helps you load custom metadata for samples in the current
        visualization.
    </p>

    <p>
        Select a metadata file (CSV, TSV, or JSON). The file must include a
        header row and a <em>sample</em> column that uniquely identifies each
        sample. Additional columns will be added as new metadata fields.
    </p>

    <p>
        After upload, you can preview the rows, configure attribute types and
        scales, and only samples that match existing IDs will be kept.
    </p>`;
function T_(e) {
	return Dc("gs-upload-metadata-dialog", (t) => {
		t.existingSampleIds = new Set(e.sampleHierarchy.sampleData.ids), t.resetWizard();
	}, (t) => {
		if (!t.ok) return !1;
		let n = t.data;
		return e.intentExecutor.dispatch(e.actions.addMetadata(n)), !0;
	});
}
function E_(e, t = 3) {
	let n = Array.from(e), r = (e, t = ", ") => e.map((e, n) => R`${n > 0 ? t : ""}<code>${e}</code>`);
	return n.length === 0 ? "" : n.length <= t ? R` (e.g., ${r(n)})` : R` (e.g., ${r(n.slice(0, t))} and
        ${n.length - t} more)`;
}
function D_(e) {
	return e.cases.length > 0 ? R`${e.message}${E_(e.cases)}` : e.count > 1 ? R`${e.message} (occurred ${e.count} times)` : e.message;
}
//#endregion
//#region ../app/src/components/generic/multiSelect.js
var O_ = 0;
function k_(e) {
	return typeof e == "string" ? {
		id: e,
		label: e
	} : {
		id: e.id,
		label: e.label ?? e.id
	};
}
function A_(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = String(r).trim();
		e.length === 0 || t.has(e) || (t.add(e), n.push(e));
	}
	return n;
}
function j_(e) {
	return A_(e.split(/\r?\n/g));
}
var M_ = class extends I {
	static properties = {
		selectedValues: { attribute: !1 },
		search: { attribute: !1 },
		commitDelimiters: { attribute: !1 },
		placeholder: { type: String },
		disabled: { type: Boolean },
		allowUnknown: {
			type: Boolean,
			attribute: "allow-unknown"
		},
		debounceMs: {
			type: Number,
			attribute: "debounce-ms"
		},
		maxSuggestions: {
			type: Number,
			attribute: "max-suggestions"
		},
		_query: { state: !0 },
		_loading: { state: !0 },
		_open: { state: !0 },
		_activeIndex: { state: !0 },
		_suggestions: { state: !0 },
		_inputHasFocus: { state: !0 }
	};
	static styles = [Tc, L`
            :host {
                display: block;
            }

            .control {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.2em;
                width: 100%;
                box-sizing: border-box;
                padding: 0.3em 0.5em;
                font-size: 1em;
                line-height: 1.5;
                color: var(--form-control-color);
                background-color: #fff;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                transition:
                    border-color 0.15s ease-in-out,
                    box-shadow 0.15s ease-in-out;
                cursor: text;
            }

            :host(.is-invalid) .control {
                border-color: var(--danger-color, #dc3545);
                box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 25%);
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 0.35em;
                max-width: 100%;
                background: #edf2f7;
                border: 1px solid #d4dce4;
                border-radius: 999px;
                padding: 0.1em 0.55em;
                font-size: 0.93em;
                line-height: 1.4;
            }

            .pill-label {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 18em;
            }

            .pill-remove {
                border: 0;
                background: transparent;
                color: #495057;
                font-size: 1.1em;
                line-height: 1;
                padding: 0;
                margin: 0;
                cursor: pointer;
            }

            .query {
                flex: 1;
                min-width: 8em;
                border: 0;
                outline: 0;
                padding: 0.1em 0.25em;
                margin: 0;
                background: transparent;
                font: inherit;
                color: inherit;
            }

            .query::placeholder {
                color: #a0a0a0;
            }

            .dropdown {
                position: fixed;
                margin: 0;
                inset: auto;
                max-height: 16rem;
                overflow: auto;
                border: var(--form-control-border);
                border-radius: var(--form-control-border-radius);
                background: #fff;
                box-shadow: 0 6px 16px rgb(0 0 0 / 12%);
                padding: 0.2em 0;
            }

            .option {
                padding: 0.35em 0.75em;
                cursor: pointer;
                background: transparent;
            }

            .option.active {
                background: #eef3ff;
                outline: 2px solid #c6dbff;
                outline-offset: -2px;
            }

            .status {
                padding: 0.35em 0.75em;
                color: #6c757d;
                font-size: 0.92em;
            }

            .control.disabled {
                background-color: #f4f4f4;
                cursor: default;
            }

            .control.disabled .pill-remove,
            .control.disabled .query {
                cursor: default;
            }
        `];
	#e;
	#t;
	#n;
	#r;
	constructor() {
		super(), this.selectedValues = [], this.search = null, this.commitDelimiters = [], this.placeholder = "Type to search", this.disabled = !1, this.allowUnknown = !1, this.debounceMs = 180, this.maxSuggestions = 50, this._query = "", this._loading = !1, this._open = !1, this._activeIndex = -1, this._suggestions = [], this._inputHasFocus = !1, this.#e = "gs-multiselect-listbox-" + String(O_++), this.#t = null, this.#n = 0, this.#r = null;
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#a(), this.#m();
	}
	willUpdate(e) {
		e.has("selectedValues") && (this.selectedValues = A_(Array.from(this.selectedValues, (e) => String(e))), this.#g());
	}
	updated(e) {
		e.has("_open") && this.#h(), e.has("_activeIndex") && this.#d(), this._open && (e.has("_suggestions") || e.has("_loading")) && this.#f();
	}
	get value() {
		return this.selectedValues;
	}
	set value(e) {
		this.selectedValues = A_(e);
	}
	focus() {
		this.#s();
	}
	refreshSuggestions() {
		this.search && (this._inputHasFocus && (this._open = !0), this.#i(this._query));
	}
	#i(e) {
		this.#a();
		let t = () => {
			this.#o(e);
		};
		this.#t = window.setTimeout(t, this.debounceMs);
	}
	#a() {
		this.#t !== null && (window.clearTimeout(this.#t), this.#t = null);
	}
	async #o(e) {
		if (!this.search) {
			this._suggestions = [], this._loading = !1, this._activeIndex = -1, this._open = !1;
			return;
		}
		let t = ++this.#n;
		this._loading = !0, this._open = this._inputHasFocus;
		try {
			let n = await this.search(e);
			if (t !== this.#n || e !== this._query) return;
			let r = new Set(this.selectedValues), i = [];
			for (let e of n) {
				let t = k_(e);
				if (!r.has(t.id) && (i.push(t), i.length >= this.maxSuggestions)) break;
			}
			this._suggestions = i, this._activeIndex = i.length > 0 ? 0 : -1, this._open = this._inputHasFocus;
		} finally {
			t === this.#n && (this._loading = !1);
		}
	}
	#s() {
		this.renderRoot.querySelector("input.query")?.focus();
	}
	#c() {
		return this.renderRoot.querySelector(".control");
	}
	#l() {
		return this.renderRoot.querySelector("#" + this.#e);
	}
	#u(e) {
		return this.#e + "-opt-" + e;
	}
	#d() {
		this._activeIndex < 0 || !this._open || this.renderRoot.querySelector("#" + this.#u(String(this._activeIndex)))?.scrollIntoView({ block: "nearest" });
	}
	#f() {
		let e = this.#c(), t = this.#l();
		if (!e || !t || !this._open) return;
		let n = e.getBoundingClientRect().width;
		t.style.minWidth = String(n) + "px", _d(e, t, {
			placement: "bottom-start",
			strategy: "fixed",
			middleware: [hd(4), gd()]
		}).then(({ x: e, y: n }) => {
			this._open && (t.style.left = String(e) + "px", t.style.top = String(n) + "px");
		});
	}
	#p() {
		let e = this.#c(), t = this.#l();
		!e || !t || (this.#m(), this.#f(), this.#r = md(e, t, () => this.#f()));
	}
	#m() {
		this.#r &&= (this.#r(), null);
	}
	#h() {
		let e = this.#l();
		if (!e) return;
		let t = typeof e.showPopover == "function" && typeof e.hidePopover == "function";
		this._open ? (t && !e.matches(":popover-open") && e.showPopover(), this.#p()) : (this.#m(), t && e.matches(":popover-open") && e.hidePopover());
	}
	#g() {
		let e = new Set(this.selectedValues);
		this._suggestions = this._suggestions.filter((t) => !e.has(t.id)), this._suggestions.length === 0 ? this._activeIndex = -1 : this._activeIndex >= this._suggestions.length && (this._activeIndex = this._suggestions.length - 1);
	}
	#_() {
		this.dispatchEvent(new N_(Array.from(this.selectedValues)));
	}
	#v(e) {
		let t = new Set(this.selectedValues), n = [];
		for (let r of e) {
			let e = String(r).trim();
			e.length === 0 || t.has(e) || (t.add(e), n.push(e));
		}
		return n.length === 0 ? !1 : (this.selectedValues = [...this.selectedValues, ...n], this.#_(), !0);
	}
	#y(e) {
		this.#v([e]);
	}
	#b(e) {
		let t = this.selectedValues.filter((t) => t !== e);
		t.length !== this.selectedValues.length && (this.selectedValues = t, this.#_());
	}
	#x() {
		this.selectedValues.length !== 0 && (this.selectedValues = this.selectedValues.slice(0, this.selectedValues.length - 1), this.#_());
	}
	#S(e) {
		let t = e.toLowerCase();
		return this._suggestions.find((e) => e.id.toLowerCase() === t) ?? null;
	}
	#C(e, t) {
		let n = (e + t).toLowerCase();
		return this._suggestions.some((e) => e.id.toLowerCase().startsWith(n));
	}
	#w(e) {
		let t = this._query.trim();
		if (t.length === 0) return !1;
		let n = this.#S(t);
		return !n || this.#C(t, e) ? !1 : (this.#y(n.id), this._query = "", this.#i(""), this.#s(), !0);
	}
	#T() {
		let e = this._activeIndex >= 0 && this._activeIndex < this._suggestions.length ? this._suggestions[this._activeIndex] : null, t = this._query.trim();
		if (e) this.#y(e.id);
		else if (t.length > 0) {
			let e = this.#S(t);
			e ? this.#y(e.id) : this.allowUnknown && this.#y(t);
		}
		this._query = "", this.#i(""), this.#s();
	}
	#E(e) {
		this.disabled || e.target instanceof HTMLElement && e.target.closest(".pill-remove") || (e.preventDefault(), this.#s());
	}
	#D(e) {
		let t = e.currentTarget;
		t && (this._query = t.value, this.#i(this._query), this._open = !0);
	}
	#O() {
		this._inputHasFocus = !0, this._open = !0, this.#i(this._query);
	}
	#k() {
		this._inputHasFocus = !1, this._open = !1, this._activeIndex = -1, this.#A();
	}
	async #A() {
		let e = this._query.trim();
		if (e.length === 0) return;
		let t = e.toLowerCase(), n = this._suggestions.find((e) => e.id.toLowerCase() === t) ?? null;
		if (!n && this.search) try {
			n = (await this.search(e)).map((e) => k_(e)).find((e) => e.id.toLowerCase() === t) ?? null;
		} catch {
			return;
		}
		n && (this.#y(n.id), this._query = "", this.#i(""));
	}
	#j(e) {
		let t = e.clipboardData?.getData("text/plain") ?? "";
		if (!t.includes("\n")) return;
		let n = j_(t);
		n.length !== 0 && (e.preventDefault(), this.#v(n), this._query = "", this._open = !1, this._activeIndex = -1, this.#i(""), this.#s());
	}
	#M(e) {
		if (!this.disabled) {
			if (this.commitDelimiters.includes(e.key)) {
				this.#w(e.key) && (e.preventDefault(), e.stopPropagation());
				return;
			}
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (e.preventDefault(), e.stopPropagation(), this._suggestions.length === 0) return;
				if (this._activeIndex < 0) {
					this._activeIndex = 0;
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1, n = Math.max(0, Math.min(this._suggestions.length - 1, this._activeIndex + t));
				this._activeIndex = n;
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault(), e.stopPropagation(), this.#T();
				return;
			}
			if (e.key === "Backspace" && this._query.length === 0) {
				e.stopPropagation(), this.#x();
				return;
			}
			if (e.key === "Tab") {
				this._open = !1, this._activeIndex = -1;
				return;
			}
			if (e.key === "Escape") {
				if (!this._open) return;
				e.preventDefault(), e.stopPropagation(), this._open = !1, this._activeIndex = -1;
			}
		}
	}
	#N(e) {
		let t = this._suggestions[e];
		t && (this.#y(t.id), this._query = "", this.#i(""), this._activeIndex = 0, this.#s());
	}
	render() {
		let e = this._activeIndex >= 0 ? this.#u(String(this._activeIndex)) : P;
		return R`
            <div
                class="control ${this.disabled ? "disabled" : ""}"
                @mousedown=${(e) => this.#E(e)}
            >
                ${this.selectedValues.map((e) => R`<span class="pill">
                            <span class="pill-label">${e}</span>
                            <button
                                class="pill-remove"
                                type="button"
                                aria-label=${"Remove " + e}
                                ?disabled=${this.disabled}
                                @click=${() => {
			this.#b(e), this.#s();
		}}
                            >
                                ×
                            </button>
                        </span>`)}

                <input
                    class="query"
                    type="text"
                    role="combobox"
                    aria-controls=${this.#e}
                    aria-expanded=${this._open ? "true" : "false"}
                    aria-autocomplete="list"
                    aria-activedescendant=${e}
                    placeholder=${this.placeholder}
                    .value=${this._query}
                    ?disabled=${this.disabled}
                    @focus=${() => this.#O()}
                    @blur=${() => this.#k()}
                    @paste=${(e) => this.#j(e)}
                    @input=${(e) => this.#D(e)}
                    @keydown=${(e) => this.#M(e)}
                />
            </div>

            <div
                id=${this.#e}
                class="dropdown"
                popover="auto"
                ?hidden=${!this._open}
                role="listbox"
                @toggle=${(e) => {
			e.newState === "closed" && this._open && (this._open = !1, this._activeIndex = -1);
		}}
            >
                ${this._loading ? R`<div class="status">Loading...</div>` : P}
                ${!this._loading && this._suggestions.length === 0 ? R`<div class="status">No matches</div>` : P}
                ${this._suggestions.map((e, t) => R`<div
                            id=${this.#u(String(t))}
                            class="option ${t === this._activeIndex ? "active" : ""}"
                            role="option"
                            aria-selected=${t === this._activeIndex ? "true" : "false"}
                            @mousedown=${(e) => e.preventDefault()}
                            @mouseenter=${() => {
			this._activeIndex = t;
		}}
                            @click=${() => this.#N(t)}
                        >
                            ${e.label ?? e.id}
                        </div>`)}
            </div>
        `;
	}
};
customElements.define("gs-multi-select", M_);
var N_ = class extends Event {
	values;
	constructor(e) {
		super("change", {
			bubbles: !0,
			composed: !0
		}), this.values = e;
	}
};
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceImportUtils.js
function P_(e) {
	let t = [];
	for (let n of e.split(/\r?\n/g)) {
		let e = n.trim();
		e && (t.includes(e) || t.push(e));
	}
	return t;
}
function F_({ queries: e, resolved: t }) {
	let n = t.ambiguous ?? [], r = t.columnIds.length > 100, i = t.columnIds.length > 0;
	return {
		queries: e,
		resolved: t,
		warnings: {
			missing: t.missing,
			ambiguous: n
		},
		blocking: {
			emptyInput: e.length === 0,
			noResolvableColumns: !i,
			overLimit: r
		}
	};
}
//#endregion
//#region ../app/src/utils/objectSearchIndex.js
var I_ = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = t, this.#t = [], this.replace(e);
	}
	replace(e) {
		this.#t = e.map((e, t) => {
			let n = String(this.#e(e));
			return {
				item: e,
				key: n,
				normalizedKey: n.toLowerCase(),
				insertionOrder: t
			};
		}).sort((e, t) => {
			let n = e.normalizedKey.localeCompare(t.normalizedKey);
			if (n !== 0) return n;
			let r = e.key.localeCompare(t.key);
			return r === 0 ? e.insertionOrder - t.insertionOrder : r;
		});
	}
	*searchByPrefix(e) {
		let t = this.#t;
		if (t.length === 0) return;
		let n = String(e).toLowerCase(), r = n.length === 0 ? 0 : this.#n(t, n);
		for (let e = r; e < t.length; e++) {
			let r = t[e];
			if (n.length > 0 && !r.normalizedKey.startsWith(n)) break;
			yield r.item;
		}
	}
	#n(e, t) {
		let n = 0, r = e.length;
		for (; n < r;) {
			let i = n + (r - n >> 1);
			e[i].normalizedKey.localeCompare(t) < 0 ? n = i + 1 : r = i;
		}
		return n;
	}
}, L_ = "Type to search or paste one id per line", R_ = 100, z_ = [",", " "];
function B_(e, t) {
	if ("error" in e) {
		let t = e.error[0], n = typeof t?.message == "string" ? t.message : "Invalid sample ids in metadata source.";
		return {
			severity: "error",
			summary: "Sample-id alignment check failed: " + String(n)
		};
	}
	let n = e.statistics, r = n.unknownSamples.size, i = n.notCoveredSamples.size;
	if (n.samplesInBoth.size === 0) return {
		severity: "error",
		summary: "No matching sample IDs. Import cannot continue.",
		details: (r > 0 ? " source-only IDs: " + String(r) + t(n.unknownSamples) : "").trim()
	};
	if (r > 0 || i > 0) {
		let e = [];
		return r > 0 && e.push(String(r) + " source sample IDs are not in the loaded sample set" + t(n.unknownSamples)), i > 0 && e.push(String(i) + " loaded sample-set IDs are not in the source" + t(n.notCoveredSamples)), {
			severity: "warning",
			summary: "Some sample IDs do not match. Import can continue: values will be added only to matched samples.",
			details: e.join("; ")
		};
	}
	return null;
}
var V_ = class extends G {
	static properties = {
		...super.properties,
		sampleView: {},
		intentPipeline: {},
		source: {},
		columnInput: { state: !0 },
		groupPath: { state: !0 },
		_loading: { state: !0 },
		_error: { state: !0 },
		_preview: { state: !0 },
		_columnPlaceholder: { state: !0 },
		_availableColumnCount: { state: !0 },
		_alignmentIssue: { state: !0 },
		_showAlignmentDetails: { state: !0 }
	};
	static styles = [...super.styles, L`
            dialog {
                width: min(680px, calc(100vw - 2rem));
            }

            .stack {
                display: block;
            }

            .stack > .gs-form-group {
                margin-top: 0;
                margin-bottom: 0;
            }

            .stack > .gs-form-group + .gs-form-group {
                margin-top: var(--gs-basic-spacing, 10px);
            }

            .inline-link {
                appearance: none;
                background: none;
                border: 0;
                color: inherit;
                cursor: pointer;
                font: inherit;
                padding: 0;
                text-decoration: underline;
            }
        `];
	constructor() {
		super(), this.sampleView = null, this.intentPipeline = null, this.source = null, this.columnInput = "", this.groupPath = "", this._loading = !1, this._error = "", this._preview = null, this._columnPlaceholder = L_, this._availableColumnCount = void 0, this._columnSearchIndex = new I_([], (e) => e.id), this._previewVersion = 0, this._sourceContextVersion = 0, this._previewQueryKey = "", this._alignmentIssue = null, this._showAlignmentDetails = !1, this._columnValidationEnabled = !1, this._adapter = null, this._form = new $d(this), this._form.defineField("columns", {
			valueKey: "columnInput",
			validate: () => this.#m()
		}), this._form.defineField("group", {
			valueKey: "groupPath",
			validate: () => null
		}), this.dialogTitle = "Import metadata from source";
	}
	willUpdate(e) {
		!this.sampleView || !this.source || (e.has("sampleView") || e.has("source")) && this.#e();
	}
	renderBody() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		let e = this._preview?.readiness?.blocking, t = this._alignmentIssue, n = typeof this._availableColumnCount == "number" ? "Columns to import (" + String(this._availableColumnCount) + " available)" : "Columns to import";
		return R`
            <div class="stack">
                <div class="gs-alert info">
                    ${W(Vr).node[0]}
                    <div>
                        Import one or more metadata columns by searching,
                        selecting, or pasting column ids.
                    </div>
                </div>

                ${t ? R`<div
                          class="gs-alert ${t.severity === "error" ? "danger" : t.severity}"
                      >
                          ${W(t.severity === "info" ? Vr : t.severity === "warning" ? wr : ui).node[0]}
                          <span>
                              ${t.summary}${t.details ? this._showAlignmentDetails ? R` ${t.details}` : R` <button
                                            class="inline-link"
                                            type="button"
                                            @click=${(e) => this.#d(e)}
                                        >
                                            Show the problems
                                        </button>` : P}
                          </span>
                      </div>` : P}
                ${this._error ? R`<div class="gs-alert danger">
                          ${W(ui).node[0]}
                          <span>${this._error}</span>
                      </div>` : P}

                <div class="gs-form-group">
                    <div class="label">${n}</div>
                    <gs-multi-select
                        id="columnInput"
                        autofocus
                        class=${this._form.error("columns") ? "is-invalid" : ""}
                        .debounceMs=${50}
                        .selectedValues=${P_(this.columnInput)}
                        .placeholder=${this._columnPlaceholder}
                        .search=${(e) => this.#o(e)}
                        .allowUnknown=${!0}
                        .commitDelimiters=${z_}
                        .maxSuggestions=${R_}
                        aria-invalid=${this._form.error("columns") ? "true" : "false"}
                        @focusin=${() => this.#n()}
                        @change=${(e) => this.#r(e)}
                    ></gs-multi-select>
                    ${this._form.feedback("columns")}
                </div>

                <div class="gs-form-group">
                    <label for="groupPath">Group path (optional)</label>
                    <input
                        id="groupPath"
                        type="text"
                        ${ef(this._form, "group")}
                    />
                </div>

                ${e?.overLimit ? R`<div class="gs-alert danger">
                          Import exceeds the hard limit of 100 columns.
                      </div>` : P}
            </div>
        `;
	}
	renderButtons() {
		let e = this.#f();
		return [this.makeCloseButton("Cancel"), this.makeButton("Import", () => this.#p(), {
			iconDef: Ar,
			isPrimary: !0,
			disabled: !e
		})];
	}
	async #e() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		this._previewVersion++, this._adapter = null, this._error = "", this._preview = null, this._alignmentIssue = null, this._showAlignmentDetails = !1, this._columnValidationEnabled = !1, this._columnSearchIndex.replace([]);
		let e = this.source.name ?? this.source.id ?? "source";
		this.dialogTitle = R`Import metadata from
            <em>${e}</em> source`, this.groupPath = this.source.groupPath ?? "", this.#c(), this.#s();
	}
	#t() {
		if (!this.sampleView || !this.source) throw Error("Import metadata dialog requires SampleView and a metadata source.");
		return this._adapter ||= hn(this.sampleView).getAdapter(this.source), this._adapter;
	}
	#n() {
		this._columnValidationEnabled = !0;
	}
	#r(e) {
		let t = e;
		this.#i(t.values);
	}
	#i(e) {
		let t = P_(e.join("\n"));
		this.columnInput = t.join("\n"), this.#s();
	}
	#a() {
		(this._columnValidationEnabled || this._form.error("columns")) && this._form.revalidate("columns");
	}
	async #o(e) {
		let t = e.trim();
		return Array.from(this._columnSearchIndex.searchByPrefix(t), (e) => e.id);
	}
	async #s() {
		if (!this.sampleView || !this.source) return;
		let e = ++this._previewVersion, t = P_(this.columnInput), n = this.#g(t);
		if (t.length === 0) {
			let e = F_({
				queries: t,
				resolved: {
					columnIds: [],
					missing: [],
					ambiguous: []
				}
			});
			this._preview = { readiness: e }, this._previewQueryKey = n, this._error = "", this.#a();
			return;
		}
		let r = this.#t();
		try {
			let i = await r.resolveColumns(t);
			if (e !== this._previewVersion) return;
			let a = F_({
				queries: t,
				resolved: i
			});
			this._preview = { readiness: a }, this._previewQueryKey = n, this._error = "", this.#a();
		} catch (t) {
			if (e !== this._previewVersion) return;
			this._error = String(t), this._preview = null, this._previewQueryKey = "", this.#a();
		}
	}
	#c() {
		if (!this.sampleView || !this.source) return;
		let e = ++this._sourceContextVersion, t = this.#t();
		t.listColumns().then((t) => {
			e === this._sourceContextVersion && this.#l(t);
		}).catch(() => {
			e === this._sourceContextVersion && (this._columnPlaceholder = L_, this._availableColumnCount = void 0, this._columnSearchIndex.replace([]));
		}), t.listSampleIds().then((t) => {
			e === this._sourceContextVersion && (this.#u(t), this._showAlignmentDetails = !1);
		}).catch((t) => {
			e === this._sourceContextVersion && (this._alignmentIssue = {
				severity: "error",
				summary: "Could not validate sample-id alignment: " + String(t)
			}, this._showAlignmentDetails = !1);
		});
	}
	#l(e) {
		this._columnSearchIndex.replace(e), this._availableColumnCount = e.length, this._columnPlaceholder = L_, this.updateComplete.then(() => {
			this.renderRoot.querySelector("#columnInput")?.refreshSuggestions();
		});
	}
	#u(e) {
		if (!this.sampleView) return;
		let t = this.sampleView.sampleHierarchy.sampleData?.ids;
		if (!t) {
			this._alignmentIssue = {
				severity: "error",
				summary: "Could not validate sample-id alignment: Sample data has not been initialized."
			};
			return;
		}
		let n = Xn(t, e.map((e) => ({ sample: e })));
		this._alignmentIssue = B_(n, (e) => this.#v(e));
	}
	#d(e) {
		e.preventDefault(), this._showAlignmentDetails = !0;
	}
	#f() {
		if (this._loading || this._form.hasErrors() || this._alignmentIssue?.severity === "error") return !1;
		let e = P_(this.columnInput);
		if (e.length === 0 || !this.source) return !1;
		if (this.#h(e) && this._preview) {
			let e = this._preview.readiness.blocking;
			if (e.noResolvableColumns || e.overLimit) return !1;
		}
		return !0;
	}
	async #p() {
		if (!this.sampleView || !this.intentPipeline) throw Error("Import metadata dialog requires SampleView and IntentPipeline.");
		if (this._columnValidationEnabled = !0, await this.#s(), this._form.validateAll() || !this.#f() || !this.source) return !0;
		this._loading = !0, this._error = "";
		try {
			let e = { columnIds: this._preview.readiness.resolved.columnIds };
			return this.source.id && (e.sourceId = this.source.id), e.groupPath = this.groupPath.trim(), await this.intentPipeline.submit(this.sampleView.actions.addMetadataFromSource(e)), this.finish({ ok: !0 }), !1;
		} catch (e) {
			return this._error = String(e), this._loading = !1, !0;
		}
	}
	#m() {
		let e = P_(this.columnInput);
		if (e.length === 0) return this._columnValidationEnabled ? "Enter at least one column id." : null;
		let t = this._preview?.readiness;
		if (!t || !this.#h(e)) return null;
		let n = t.blocking;
		if (n.overLimit) return "Import exceeds the hard limit of 100 columns.";
		if (n.noResolvableColumns) return "No matching columns were found.";
		let r = [...t.warnings.missing, ...t.warnings.ambiguous];
		return r.length > 0 ? "Columns not found: " + this.#_(r) + ". Fix the list before importing." : null;
	}
	#h(e) {
		return this._previewQueryKey === this.#g(e);
	}
	#g(e) {
		return e.join("\n");
	}
	#_(e) {
		let t = Array.from(new Set(e));
		return t.length <= 8 ? t.join(", ") : t.slice(0, 8).join(", ") + " and " + String(t.length - 8) + " more";
	}
	#v(e, t = 3) {
		let n = Array.from(e);
		return n.length === 0 ? "" : n.length <= t ? " (e.g. " + n.join(", ") + ")" : " (e.g. " + n.slice(0, t).join(", ") + " and " + String(n.length - t) + " more)";
	}
};
customElements.define("gs-import-metadata-source-dialog", V_);
function H_(e, t, n) {
	if (!n) throw Error("Import metadata dialog requires a metadata source.");
	return K("gs-import-metadata-source-dialog", (r) => {
		r.sampleView = e, r.intentPipeline = t, r.source = n, r._columnValidationEnabled = !1, r._form.reset();
	});
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceMenu.js
var U_ = class {
	async createImportMenuItem(e, t) {
		if (!e || !t) return;
		let n;
		try {
			n = await this.#e(e);
		} catch (e) {
			q("Could not load metadata sources: " + String(e), {
				title: "Warning",
				type: "warning"
			});
			return;
		}
		if (n.length !== 0) if (n.length === 1) {
			let r = n[0];
			return {
				label: R`Import metadata from
                    <em>${r.label}</em> source`,
				icon: ci,
				callback: () => H_(e, t, r.source)
			};
		} else return {
			label: "Import metadata from source",
			icon: ci,
			submenu: n.map((n) => ({
				label: n.label,
				callback: () => {
					if (!n.source.id) {
						q("Metadata source \"" + n.label + "\" is missing \"id\". Source ids are required when multiple metadata sources are configured.", {
							title: "Warning",
							type: "warning"
						});
						return;
					}
					H_(e, t, n.source);
				}
			}))
		};
	}
	async #e(e) {
		return (await hn(e).getSources()).filter((e) => !(e.backend.backend === "data" && qn(e) === "*")).map((e, t) => ({
			source: e,
			label: e.name ?? e.id ?? "Source " + String(t + 1)
		}));
	}
}, W_ = class extends I {
	#e;
	#t;
	#n = null;
	#r = Lt();
	#i = new U_();
	constructor() {
		super(), this.subscriptionController = new a_(this), this.style.display = "none";
	}
	connectedCallback() {
		super.connectedCallback(), this.dispatchEvent(m_("app", (e) => {
			this.#e = e;
		})), this.subscriptionController.addUnsubscribeCallback(Ep(this.#e.store, (e) => e.lifecycle.appInitialized, (e) => this.#a(e))), this.subscriptionController.addUnsubscribeCallback(Ep(this.#e.store, (e) => e.viewSettings, () => this.requestUpdate()));
	}
	createRenderRoot() {
		return this;
	}
	#a(e) {
		e && (this.#u(), this.requestUpdate(), this.style.display = this.#t ? "block" : "none");
	}
	#o(e, t) {
		let n = e.target.checked, r = Sn(t);
		if (!r) throw Error("Cannot toggle view visibility without an explicit name.");
		n == t.isVisibleInSpec() ? (this.#e.store.dispatch($n.actions.restoreDefaultVisibility(r)), t.explicitName && t.explicitName !== r && this.#e.store.dispatch($n.actions.restoreDefaultVisibility(t.explicitName))) : this.#e.store.dispatch($n.actions.setVisibility({
			key: r,
			visibility: n
		})), this.#c(), this.requestUpdate(), this.#f(), e.stopPropagation();
	}
	#s(e, t, n) {
		if (!e.target.checked) {
			e.stopPropagation();
			return;
		}
		let r = Sn(t);
		if (!r) throw Error("Cannot toggle view visibility without an explicit name.");
		for (let e of n) this.#e.store.dispatch($n.actions.setVisibility({
			key: e,
			visibility: e === r
		}));
		this.#c(), this.requestUpdate(), this.#f(), e.stopPropagation();
	}
	#c() {
		this.#n = null, this.#e.genomeSpy.viewRoot.context.highlightView(null);
	}
	#l() {
		this.#e.store.dispatch($n.actions.restoreDefaultVisibilities()), this.#f();
	}
	#u() {
		let e = this.#e.genomeSpy.viewRoot;
		if (!e) return;
		let t = [];
		Dt(e, (e) => {
			t.push(e);
		});
		let n = t.filter(q_).map((t) => [...t.getDataAncestors()].filter((t) => t === e || q_(t)).reverse());
		if (!n.length) {
			this.#t = void 0;
			return;
		}
		this.#t = h_(n);
	}
	#d() {
		let e = this.#e.genomeSpy.viewRoot, t = this.getVisibilities(), n = e ? Ln(e, t) : t, r = e ? Zn(e) : /* @__PURE__ */ new Set(), i = e ? Fn(e) : /* @__PURE__ */ new Map(), a = [], o = (t, s = -1) => {
			let c = t.item, l = Tn(n, c), u = l === void 0 ? c.isVisibleInSpec() : l, d = Sn(c), f = d && i.has(d) ? i.get(d) : void 0, p = !!(f && f.memberKeys.length > 1), m = [];
			c !== e && G_(c) && m.push(...K_(c, !0)), c instanceof Fp && (m.length && m.push({ type: "divider" }), m.push({
				label: "Sample metadata",
				type: "header"
			}, { type: "divider" }, {
				label: "Upload custom metadata",
				icon: kr,
				callback: () => this.#h()
			}));
			let h;
			if (c instanceof Fp) {
				let e = m.slice();
				h = async () => {
					let t = await this.#i.createImportMenuItem(this.#e.getSampleView(), this.#e.intentPipeline);
					return t ? [...e, t] : e;
				};
			} else m.length && (h = () => m);
			if (s >= 0) {
				let e = c.getTitleText() ?? c.name ?? "", n = !u && t.children.length > 0 ? e + "..." : e, i = R` <label
                    class="checkbox"
                    @mouseover=${(e) => this.#m(e, c)}
                    @mouseout=${(e) => this.#m(e, c)}
                >
                    <input
                        style=${`margin-left: ${s * 1.5}em;`}
                        type=${p ? "radio" : "checkbox"}
                        ?disabled=${!d || !r.has(d) || !mn(c)}
                        .checked=${p_(u)}
                        @change=${(e) => p ? this.#s(e, c, f.memberKeys) : this.#o(e, c)}
                    />${n}
                </label>`;
				a.push({
					customContent: h ? i : R`<li>${i}</li>`,
					submenu: h
				});
			}
			if (u) {
				s++;
				for (let e of t.children) o(e, s);
			}
		};
		if (!this.#t) return a;
		let s = this.#t.children.length || !this.#t.item.explicitName ? -1 : 0;
		return o(this.#t, s), a;
	}
	#f() {
		this.#u();
		let e = this.#e.genomeSpy.viewRoot, t = this.#d(), n = !Object.keys(this.getVisibilities()).length, r = [];
		e && G_(e) && r.push({
			label: "Parameters",
			submenu: () => K_(e, !1)
		}), t.length && (r.length && r.push({ type: "divider" }), r.push({
			label: "View visibility",
			type: "header"
		}, {
			label: "Restore defaults",
			callback: n ? void 0 : () => this.#l()
		}, { type: "divider" }, ...t)), Fd({ items: r }, this.#r.value, "bottom-start");
	}
	#p() {
		this.#f();
	}
	render() {
		return R`
            <div class="dropdown bookmark-dropdown">
                <button
                    ${Nt(this.#r)}
                    class="tool-btn"
                    title="View settings"
                    @click=${this.#p.bind(this)}
                >
                    ${W(Wr).node[0]}
                </button>
            </div>
        `;
	}
	getVisibilities() {
		return this.#e.store.getState().viewSettings.visibilities;
	}
	#m(e, t) {
		e.type == "mouseover" ? (this.#n = t, this.#e.genomeSpy.viewRoot.context.highlightView(t)) : (this.#n === t && (this.#n = null), this.#e.genomeSpy.viewRoot.context.highlightView(null));
	}
	#h() {
		let e = this.#e.getSampleView();
		if (e) T_(e);
		else throw Error("Cannot upload metadata without SampleView");
	}
}, G_ = (e) => [...e.paramRuntime.paramConfigs.values()].some((e) => Ue(e) && e.bind), K_ = (e, t) => {
	let n = [];
	return t && n.push({
		label: "Parameters",
		type: "header"
	}, { type: "divider" }), n.push({ customContent: R`<div class="gs-input-binding">
            ${S(e.paramRuntime)}
        </div>` }), n;
}, q_ = (e) => mn(e) && !!e.explicitName || G_(e) || e instanceof Fp;
customElements.define("genome-spy-view-visibility", W_);
//#endregion
//#region ../app/src/utils/ui/dropdown.js
var J_ = /* @__PURE__ */ new Set();
function Y_(e) {
	let t = e.currentTarget.parentNode, n = !t.classList.contains("show");
	for (let e of J_) e.classList.remove("show"), document.body.classList.remove(le), document.body.classList.remove(_e);
	return J_.clear(), e.stopPropagation(), n ? (J_.add(t), t.classList.add("show"), document.body.classList.add(le), document.body.classList.add(_e), window.addEventListener("click", (e) => {
		t.classList.contains("show") && (t.classList.remove("show"), document.body.classList.remove(le), document.body.classList.remove(_e), e.preventDefault());
	}, { once: !0 })) : window.dispatchEvent(new MouseEvent("click")), n;
}
//#endregion
//#region ../app/src/components/toolbar/provenanceToolbar.js
var X_ = class extends I {
	constructor() {
		super(), this.provenance = void 0, this._subscriptions = new a_(this);
	}
	connectedCallback() {
		super.connectedCallback();
		let e = this.provenance.store.subscribe(() => {
			this.requestUpdate();
		});
		this._subscriptions.addUnsubscribeCallback(e);
	}
	createRenderRoot() {
		return this;
	}
	render() {
		return R`
            <div
                class="btn-group"
                @click=${(e) => e.stopPropagation()}
            >
                <button
                    class="tool-btn"
                    title="Undo (Z)"
                    ?disabled=${!this.provenance.isUndoable()}
                    @click=${() => this.provenance.undo()}
                >
                    ${W(Hr).node[0]}
                </button>
                ${R`
            <div class="dropdown provenance-dropdown">
                <button
                    class="tool-btn"
                    title="Provenance"
                    ?disabled=${this.provenance.isEmpty()}
                    @click=${Y_}
                >
                    ${W(Xr).node[0]}
                </button>
                <ol class="gs-dropdown-menu provenance-menu">
                    ${this.provenance.getFullActionHistory().map((e, t) => {
			if (!e) return P;
			let n = em(e), r = n ? void 0 : this.provenance.getActionInfo(e);
			if (!n && !r) return P;
			let i = n ? R`${W(oi).node[0]} Initial state` : R` ${W(r.icon ?? Pr).node[0]}
                  ${r.provenanceTitle ?? r.title}`;
			return R`
                <li>
                    <a
                        @click=${() => this.provenance.activateState(e.provenanceId)}
                        class=${t == this.provenance.getCurrentIndex() ? "active-state" : ""}
                        >${i}</a
                    >
                </li>
            `;
		})}
                </ol>
            </div>
        `}
                <button
                    class="tool-btn"
                    title="Redo"
                    ?disabled=${!this.provenance.isRedoable()}
                    @click=${() => this.provenance.redo()}
                >
                    ${W(zr).node[0]}
                </button>
            </div>
        `;
	}
};
customElements.define("genome-spy-provenance-buttons", X_);
//#endregion
//#region ../../node_modules/lit-html/directives/private-async-helpers.js
var Z_ = class {
	constructor(e) {
		this.G = e;
	}
	disconnect() {
		this.G = void 0;
	}
	reconnect(e) {
		this.G = e;
	}
	deref() {
		return this.G;
	}
}, Q_ = class {
	constructor() {
		this.Y = void 0, this.Z = void 0;
	}
	get() {
		return this.Y;
	}
	pause() {
		this.Y ??= new Promise((e) => this.Z = e);
	}
	resume() {
		this.Z?.(), this.Y = this.Z = void 0;
	}
}, $_ = (e) => !Pt(e) && typeof e.then == "function", ev = 1073741823, tv = g(class extends Ft {
	constructor() {
		super(...arguments), this._$Cwt = ev, this._$Cbt = [], this._$CK = new Z_(this), this._$CX = new Q_();
	}
	render(...e) {
		return e.find((e) => !$_(e)) ?? xe;
	}
	update(e, t) {
		let n = this._$Cbt, r = n.length;
		this._$Cbt = t;
		let i = this._$CK, a = this._$CX;
		this.isConnected || this.disconnected();
		for (let e = 0; e < t.length && !(e > this._$Cwt); e++) {
			let o = t[e];
			if (!$_(o)) return this._$Cwt = e, o;
			e < r && o === n[e] || (this._$Cwt = ev, r = 0, Promise.resolve(o).then(async (e) => {
				for (; a.get();) await a.get();
				let t = i.deref();
				if (t !== void 0) {
					let n = t._$Cbt.indexOf(o);
					n > -1 && n < t._$Cwt && (t._$Cwt = n, t.setValue(e));
				}
			}));
		}
		return xe;
	}
	disconnected() {
		this._$CK.disconnect(), this._$CX.pause();
	}
	reconnected() {
		this._$CK.reconnect(this), this._$CX.resume();
	}
}), nv = document.createElement("i");
function rv(e) {
	let t = "&" + e + ";";
	nv.innerHTML = t;
	let n = nv.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" ? !1 : n !== t && n;
}
//#endregion
//#region ../../node_modules/micromark-util-chunked/index.js
function iv(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function J(e, t) {
	return e.length > 0 ? (iv(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/micromark-util-combine-extensions/index.js
var av = {}.hasOwnProperty;
function ov(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) sv(t, e[n]);
	return t;
}
function sv(e, t) {
	let n;
	for (n in t) {
		let r = (av.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			av.call(r, a) || (r[a] = []);
			let e = i[a];
			cv(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function cv(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	iv(e, 0, 0, r);
}
function lv(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) uv(t, e[n]);
	return t;
}
function uv(e, t) {
	let n;
	for (n in t) {
		let r = (av.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) r[a] = i[a];
	}
}
//#endregion
//#region ../../node_modules/micromark-util-decode-numeric-character-reference/index.js
function dv(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/micromark-util-encode/index.js
var fv = {
	"\"": "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};
function pv(e) {
	return e.replace(/["&<>]/g, t);
	function t(e) {
		return "&" + fv[e] + ";";
	}
}
//#endregion
//#region ../../node_modules/micromark-util-normalize-identifier/index.js
function mv(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/micromark-util-character/index.js
var hv = wv(/[A-Za-z]/), gv = wv(/[\dA-Za-z]/), _v = wv(/[#-'*+\--9=?A-Z^-~]/);
function vv(e) {
	return e !== null && (e < 32 || e === 127);
}
var yv = wv(/\d/), bv = wv(/[\dA-Fa-f]/), xv = wv(/[!-/:-@[-`{-~]/);
function Y(e) {
	return e !== null && e < -2;
}
function X(e) {
	return e !== null && (e < 0 || e === 32);
}
function Z(e) {
	return e === -2 || e === -1 || e === 32;
}
var Sv = wv(/\p{P}|\p{S}/u), Cv = wv(/\s/);
function wv(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-sanitize-uri/index.js
function Tv(e, t) {
	let n = pv(Ev(e || ""));
	if (!t) return n;
	let r = n.indexOf(":"), i = n.indexOf("?"), a = n.indexOf("#"), o = n.indexOf("/");
	return r < 0 || o > -1 && r > o || i > -1 && r > i || a > -1 && r > a || t.test(n.slice(0, r)) ? n : "";
}
function Ev(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && gv(e.charCodeAt(n + 1)) && gv(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/micromark/lib/compile.js
var Dv = {}.hasOwnProperty, Ov = /^(https?|ircs?|mailto|xmpp)$/i, kv = /^https?$/i;
function Av(e) {
	let t = e || {}, n = !0, r = {}, i = [[]], a = [], o = [], s = lv([{
		enter: {
			blockQuote: A,
			codeFenced: ee,
			codeFencedFenceInfo: h,
			codeFencedFenceMeta: h,
			codeIndented: I,
			codeText: Me,
			content: ve,
			definition: fe,
			definitionDestinationString: me,
			definitionLabelString: h,
			definitionTitleString: h,
			emphasis: Ae,
			htmlFlow: De,
			htmlText: ke,
			image: ne,
			label: h,
			link: re,
			listItemMarker: E,
			listItemValue: T,
			listOrdered: C,
			listUnordered: w,
			paragraph: M,
			reference: h,
			resource: se,
			resourceDestinationString: ce,
			resourceTitleString: h,
			setextHeading: be,
			strong: je
		},
		exit: {
			atxHeading: Se,
			atxHeadingSequence: ye,
			autolinkEmail: Be,
			autolinkProtocol: ze,
			blockQuote: j,
			characterEscapeValue: we,
			characterReferenceMarkerHexadecimal: Le,
			characterReferenceMarkerNumeric: Le,
			characterReferenceValue: Re,
			codeFenced: te,
			codeFencedFence: F,
			codeFencedFenceInfo: P,
			codeFencedFenceMeta: S,
			codeFlowValue: Te,
			codeIndented: te,
			codeText: Ne,
			codeTextData: we,
			data: we,
			definition: _e,
			definitionDestinationString: he,
			definitionLabelString: pe,
			definitionTitleString: ge,
			emphasis: Pe,
			hardBreakEscape: Ee,
			hardBreakTrailing: Ee,
			htmlFlow: Oe,
			htmlFlowData: we,
			htmlText: Oe,
			htmlTextData: we,
			image: de,
			label: ae,
			labelText: ie,
			lineEnding: R,
			link: de,
			listOrdered: D,
			listUnordered: O,
			paragraph: N,
			reference: S,
			referenceString: oe,
			resource: S,
			resourceDestinationString: le,
			resourceTitleString: ue,
			setextHeading: L,
			setextHeadingLineSequence: Ce,
			setextHeadingText: xe,
			strong: Fe,
			thematicBreak: Ie
		}
	}, ...t.htmlExtensions || []]), c = {
		definitions: r,
		tightStack: o
	}, l = {
		buffer: h,
		encode: x,
		getData: m,
		lineEndingIfNeeded: b,
		options: t,
		raw: v,
		resume: g,
		setData: p,
		tag: _
	}, u = t.defaultLineEnding;
	return d;
	function d(e) {
		let t = -1, n = 0, r = [], a = [], o = [];
		for (; ++t < e.length;) !u && (e[t][1].type === "lineEnding" || e[t][1].type === "lineEndingBlank") && (u = e[t][2].sliceSerialize(e[t][1])), (e[t][1].type === "listOrdered" || e[t][1].type === "listUnordered") && (e[t][0] === "enter" ? r.push(t) : f(e.slice(r.pop(), t))), e[t][1].type === "definition" && (e[t][0] === "enter" ? (o = J(o, e.slice(n, t)), n = t) : (a = J(a, e.slice(n, t + 1)), n = t + 1));
		a = J(a, o), a = J(a, e.slice(n)), t = -1;
		let c = a;
		for (s.enter.null && s.enter.null.call(l); ++t < e.length;) {
			let e = s[c[t][0]], n = c[t][1].type, r = e[n];
			Dv.call(e, n) && r && r.call({
				sliceSerialize: c[t][2].sliceSerialize,
				...l
			}, c[t][1]);
		}
		return s.exit.null && s.exit.null.call(l), i[0].join("");
	}
	function f(e) {
		let t = e.length, n = 0, r = 0, i = !1, a;
		for (; ++n < t;) {
			let t = e[n];
			if (t[1]._container) a = void 0, t[0] === "enter" ? r++ : r--;
			else switch (t[1].type) {
				case "listItemPrefix":
					t[0] === "exit" && (a = !0);
					break;
				case "linePrefix": break;
				case "lineEndingBlank":
					t[0] === "enter" && !r && (a ? a = void 0 : i = !0);
					break;
				default: a = void 0;
			}
		}
		e[0][1]._loose = i;
	}
	function p(e, t) {
		c[e] = t;
	}
	function m(e) {
		return c[e];
	}
	function h() {
		i.push([]);
	}
	function g() {
		return i.pop().join("");
	}
	function _(e) {
		n && (p("lastWasTag", !0), i[i.length - 1].push(e));
	}
	function v(e) {
		p("lastWasTag"), i[i.length - 1].push(e);
	}
	function y() {
		v(u || "\n");
	}
	function b() {
		let e = i[i.length - 1], t = e[e.length - 1], n = t ? t.charCodeAt(t.length - 1) : null;
		n === 10 || n === 13 || n === null || y();
	}
	function x(e) {
		return m("ignoreEncode") ? e : pv(e);
	}
	function S() {
		g();
	}
	function C(e) {
		o.push(!e._loose), b(), _("<ol"), p("expectFirstItem", !0);
	}
	function w(e) {
		o.push(!e._loose), b(), _("<ul"), p("expectFirstItem", !0);
	}
	function T(e) {
		if (m("expectFirstItem")) {
			let t = Number.parseInt(this.sliceSerialize(e), 10);
			t !== 1 && _(" start=\"" + x(String(t)) + "\"");
		}
	}
	function E() {
		m("expectFirstItem") ? _(">") : k(), b(), _("<li>"), p("expectFirstItem"), p("lastWasTag");
	}
	function D() {
		k(), o.pop(), y(), _("</ol>");
	}
	function O() {
		k(), o.pop(), y(), _("</ul>");
	}
	function k() {
		m("lastWasTag") && !m("slurpAllLineEndings") && b(), _("</li>"), p("slurpAllLineEndings");
	}
	function A() {
		o.push(!1), b(), _("<blockquote>");
	}
	function j() {
		o.pop(), b(), _("</blockquote>"), p("slurpAllLineEndings");
	}
	function M() {
		o[o.length - 1] || (b(), _("<p>")), p("slurpAllLineEndings");
	}
	function N() {
		o[o.length - 1] ? p("slurpAllLineEndings", !0) : _("</p>");
	}
	function ee() {
		b(), _("<pre><code"), p("fencesCount", 0);
	}
	function P() {
		_(" class=\"language-" + g() + "\"");
	}
	function F() {
		let e = m("fencesCount") || 0;
		e || (_(">"), p("slurpOneLineEnding", !0)), p("fencesCount", e + 1);
	}
	function I() {
		b(), _("<pre><code>");
	}
	function te() {
		let e = m("fencesCount");
		e !== void 0 && e < 2 && c.tightStack.length > 0 && !m("lastWasTag") && y(), m("flowCodeSeenData") && b(), _("</code></pre>"), e !== void 0 && e < 2 && b(), p("flowCodeSeenData"), p("fencesCount"), p("slurpOneLineEnding");
	}
	function ne() {
		a.push({ image: !0 }), n = void 0;
	}
	function re() {
		a.push({});
	}
	function ie(e) {
		a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function ae() {
		a[a.length - 1].label = g();
	}
	function oe(e) {
		a[a.length - 1].referenceId = this.sliceSerialize(e);
	}
	function se() {
		h(), a[a.length - 1].destination = "";
	}
	function ce() {
		h(), p("ignoreEncode", !0);
	}
	function le() {
		a[a.length - 1].destination = g(), p("ignoreEncode");
	}
	function ue() {
		a[a.length - 1].title = g();
	}
	function de() {
		let e = a.length - 1, i = a[e], o = i.referenceId || i.labelId, s = i.destination === void 0 ? r[mv(o)] : i;
		for (n = !0; e--;) if (a[e].image) {
			n = void 0;
			break;
		}
		i.image ? (_("<img src=\"" + Tv(s.destination, t.allowDangerousProtocol ? void 0 : kv) + "\" alt=\""), v(i.label), _("\"")) : _("<a href=\"" + Tv(s.destination, t.allowDangerousProtocol ? void 0 : Ov) + "\""), _(s.title ? " title=\"" + s.title + "\"" : ""), i.image ? _(" />") : (_(">"), v(i.label), _("</a>")), a.pop();
	}
	function fe() {
		h(), a.push({});
	}
	function pe(e) {
		g(), a[a.length - 1].labelId = this.sliceSerialize(e);
	}
	function me() {
		h(), p("ignoreEncode", !0);
	}
	function he() {
		a[a.length - 1].destination = g(), p("ignoreEncode");
	}
	function ge() {
		a[a.length - 1].title = g();
	}
	function _e() {
		let e = a[a.length - 1], t = mv(e.labelId);
		g(), Dv.call(r, t) || (r[t] = a[a.length - 1]), a.pop();
	}
	function ve() {
		p("slurpAllLineEndings", !0);
	}
	function ye(e) {
		m("headingRank") || (p("headingRank", this.sliceSerialize(e).length), b(), _("<h" + m("headingRank") + ">"));
	}
	function be() {
		h(), p("slurpAllLineEndings");
	}
	function xe() {
		p("slurpAllLineEndings", !0);
	}
	function Se() {
		_("</h" + m("headingRank") + ">"), p("headingRank");
	}
	function Ce(e) {
		p("headingRank", this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2);
	}
	function L() {
		let e = g();
		b(), _("<h" + m("headingRank") + ">"), v(e), _("</h" + m("headingRank") + ">"), p("slurpAllLineEndings"), p("headingRank");
	}
	function we(e) {
		v(x(this.sliceSerialize(e)));
	}
	function R(e) {
		if (!m("slurpAllLineEndings")) {
			if (m("slurpOneLineEnding")) {
				p("slurpOneLineEnding");
				return;
			}
			if (m("inCodeText")) {
				v(" ");
				return;
			}
			v(x(this.sliceSerialize(e)));
		}
	}
	function Te(e) {
		v(x(this.sliceSerialize(e))), p("flowCodeSeenData", !0);
	}
	function Ee() {
		_("<br />");
	}
	function De() {
		b(), ke();
	}
	function Oe() {
		p("ignoreEncode");
	}
	function ke() {
		t.allowDangerousHtml && p("ignoreEncode", !0);
	}
	function Ae() {
		_("<em>");
	}
	function je() {
		_("<strong>");
	}
	function Me() {
		p("inCodeText", !0), _("<code>");
	}
	function Ne() {
		p("inCodeText"), _("</code>");
	}
	function Pe() {
		_("</em>");
	}
	function Fe() {
		_("</strong>");
	}
	function Ie() {
		b(), _("<hr />");
	}
	function Le(e) {
		p("characterReferenceType", e.type);
	}
	function Re(e) {
		let t = this.sliceSerialize(e);
		v(x(m("characterReferenceType") ? dv(t, m("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : rv(t))), p("characterReferenceType");
	}
	function ze(e) {
		let n = this.sliceSerialize(e);
		_("<a href=\"" + Tv(n, t.allowDangerousProtocol ? void 0 : Ov) + "\">"), v(x(n)), _("</a>");
	}
	function Be(e) {
		let t = this.sliceSerialize(e);
		_("<a href=\"" + Tv("mailto:" + t) + "\">"), v(x(t)), _("</a>");
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-space/index.js
function Q(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return Z(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return Z(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/content.js
var jv = { tokenize: Mv };
function Mv(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Q(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return Y(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/document.js
var Nv = { tokenize: Fv }, Pv = { tokenize: Iv };
function Fv(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return iv(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Pv, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Pv, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return Y(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			iv(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Iv(e, t, n) {
	return Q(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/micromark-util-classify-character/index.js
function Lv(e) {
	if (e === null || X(e) || Cv(e)) return 1;
	if (Sv(e)) return 2;
}
//#endregion
//#region ../../node_modules/micromark-util-resolve-all/index.js
function Rv(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/attention.js
var zv = {
	name: "attention",
	resolveAll: Bv,
	tokenize: Vv
};
function Bv(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Hv(d, -c), Hv(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = J(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = J(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = J(l, Rv(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = J(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = J(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, iv(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Vv(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Lv(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Lv(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Hv(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/autolink.js
var Uv = {
	name: "autolink",
	tokenize: Wv
};
function Wv(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return hv(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || gv(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || gv(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || vv(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : _v(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return gv(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || gv(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/blank-line.js
var Gv = {
	partial: !0,
	tokenize: Kv
};
function Kv(e, t, n) {
	return r;
	function r(t) {
		return Z(t) ? Q(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || Y(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/block-quote.js
var qv = {
	continuation: { tokenize: Yv },
	exit: Xv,
	name: "blockQuote",
	tokenize: Jv
};
function Jv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return Z(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Yv(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Z(t) ? Q(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(qv, t, n)(r);
	}
}
function Xv(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-escape.js
var Zv = {
	name: "characterEscape",
	tokenize: Qv
};
function Qv(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return xv(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-reference.js
var $v = {
	name: "characterReference",
	tokenize: ey
};
function ey(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = gv, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = bv, u) : (e.enter("characterReferenceValue"), a = 7, o = yv, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === gv && !rv(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-fenced.js
var ty = {
	partial: !0,
	tokenize: iy
}, ny = {
	concrete: !0,
	name: "codeFenced",
	tokenize: ry
};
function ry(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), Z(t) ? Q(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || Y(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(ty, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || Y(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : Z(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Q(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || Y(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || Y(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && Z(t) ? Q(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || Y(t) ? e.check(ty, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || Y(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), Z(t) ? Q(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), Z(t) ? Q(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || Y(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function iy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-indented.js
var ay = {
	name: "codeIndented",
	tokenize: sy
}, oy = {
	partial: !0,
	tokenize: cy
};
function sy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), Q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : Y(t) ? e.attempt(oy, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || Y(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function cy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : Q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Y(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-text.js
var ly = {
	name: "codeText",
	previous: dy,
	resolve: uy,
	tokenize: fy
};
function uy(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function dy(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function fy(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || Y(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var py = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && my(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), my(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), my(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			my(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			my(this.left, t.reverse());
		}
	}
};
function my(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/index.js
function hy(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new py(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, gy(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return iv(e, 0, Infinity, u.slice(0)), !l;
}
function gy(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/content.js
var _y = {
	resolve: yy,
	tokenize: by
}, vy = {
	partial: !0,
	tokenize: xy
};
function yy(e) {
	return hy(e), e;
}
function by(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : Y(t) ? e.check(vy, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function xy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Q(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || Y(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-destination/index.js
function Sy(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || vv(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || Y(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || X(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || vv(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-label/index.js
function Cy(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : Y(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || Y(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !Z(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-title/index.js
function wy(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), Q(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || Y(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-whitespace/index.js
function Ty(e, t) {
	let n;
	return r;
	function r(i) {
		return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Z(i) ? Q(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/definition.js
var Ey = {
	name: "definition",
	tokenize: Oy
}, Dy = {
	partial: !0,
	tokenize: ky
};
function Oy(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return Cy.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = mv(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return X(t) ? Ty(e, l)(t) : l(t);
	}
	function l(t) {
		return Sy(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Dy, d, d)(t);
	}
	function d(t) {
		return Z(t) ? Q(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || Y(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function ky(e, t, n) {
	return r;
	function r(t) {
		return X(t) ? Ty(e, i)(t) : n(t);
	}
	function i(t) {
		return wy(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return Z(t) ? Q(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || Y(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Ay = {
	name: "hardBreakEscape",
	tokenize: jy
};
function jy(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return Y(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/heading-atx.js
var My = {
	name: "headingAtx",
	resolve: Ny,
	tokenize: Py
};
function Ny(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, iv(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Py(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || X(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || Y(n) ? (e.exit("atxHeading"), t(n)) : Z(n) ? Q(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || X(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/micromark-util-html-tag-name/index.js
var Fy = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Iy = [
	"pre",
	"script",
	"style",
	"textarea"
], Ly = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: By,
	tokenize: Vy
}, Ry = {
	partial: !0,
	tokenize: Uy
}, zy = {
	partial: !0,
	tokenize: Hy
};
function By(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Vy(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : F) : hv(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : hv(a) ? (e.consume(a), i = 4, r.interrupt ? t : F) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : F) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return hv(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || X(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Iy.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : Fy.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || gv(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return Z(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || hv(t) ? (e.consume(t), b) : Z(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || gv(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : Z(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : Z(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || Y(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || X(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || Z(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || Y(t) ? O(t) : Z(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), I) : t === 63 && i === 3 ? (e.consume(t), F) : t === 93 && i === 5 ? (e.consume(t), P) : Y(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ry, te, k)(t)) : t === null || Y(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(zy, A, te)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || Y(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), F) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", ee) : O(t);
	}
	function ee(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Iy.includes(n) ? (e.consume(t), I) : O(t);
		}
		return hv(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), ee) : O(t);
	}
	function P(t) {
		return t === 93 ? (e.consume(t), F) : O(t);
	}
	function F(t) {
		return t === 62 ? (e.consume(t), I) : t === 45 && i === 2 ? (e.consume(t), F) : O(t);
	}
	function I(t) {
		return t === null || Y(t) ? (e.exit("htmlFlowData"), te(t)) : (e.consume(t), I);
	}
	function te(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Hy(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Uy(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Gv, t, n);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/html-text.js
var Wy = {
	name: "htmlText",
	tokenize: Gy
};
function Gy(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : hv(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : hv(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : Y(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : Y(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : Y(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : Y(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return hv(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || gv(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return Y(t) ? (o = C, N(t)) : Z(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || gv(t) ? (e.consume(t), w) : t === 47 || t === 62 || X(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || hv(t) ? (e.consume(t), E) : Y(t) ? (o = T, N(t)) : Z(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || gv(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : Y(t) ? (o = D, N(t)) : Z(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : Y(t) ? (o = O, N(t)) : Z(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : Y(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || X(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || X(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return Z(t) ? Q(e, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : P(t);
	}
	function P(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-end.js
var Ky = {
	name: "labelEnd",
	resolveAll: Xy,
	resolveTo: Zy,
	tokenize: Qy
}, qy = { tokenize: $y }, Jy = { tokenize: eb }, Yy = { tokenize: tb };
function Xy(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && iv(e, 0, e.length, n), e;
}
function Zy(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = J(s, e.slice(a + 1, a + r + 3)), s = J(s, [[
		"enter",
		u,
		t
	]]), s = J(s, Rv(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = J(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = J(s, e.slice(o + 1)), s = J(s, [[
		"exit",
		c,
		t
	]]), iv(e, a, e.length, s), e;
}
function Qy(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(mv(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(qy, u, o ? u : d)(t) : t === 91 ? e.attempt(Jy, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Yy, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function $y(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return X(t) ? Ty(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : Sy(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return X(t) ? Ty(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? wy(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return X(t) ? Ty(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function eb(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return Cy.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(mv(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function tb(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-image.js
var nb = {
	name: "labelStartImage",
	resolveAll: Ky.resolveAll,
	tokenize: rb
};
function rb(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-link.js
var ib = {
	name: "labelStartLink",
	resolveAll: Ky.resolveAll,
	tokenize: ab
};
function ab(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/line-ending.js
var ob = {
	name: "lineEnding",
	tokenize: sb
};
function sb(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), Q(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/thematic-break.js
var cb = {
	name: "thematicBreak",
	tokenize: lb
};
function lb(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || Y(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), Z(t) ? Q(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/list.js
var $ = {
	continuation: { tokenize: pb },
	exit: hb,
	name: "list",
	tokenize: fb
}, ub = {
	partial: !0,
	tokenize: gb
}, db = {
	partial: !0,
	tokenize: mb
};
function fb(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : yv(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(cb, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return yv(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Gv, r.interrupt ? n : u, e.attempt(ub, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return Z(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function pb(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Gv, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Q(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !Z(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(db, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Q(e, e.attempt($, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function mb(e, t, n) {
	let r = this;
	return Q(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function hb(e) {
	e.exit(this.containerState.type);
}
function gb(e, t, n) {
	let r = this;
	return Q(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !Z(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/setext-underline.js
var _b = {
	name: "setextUnderline",
	resolveTo: vb,
	tokenize: yb
};
function vb(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function yb(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), Z(t) ? Q(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || Y(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/flow.js
var bb = { tokenize: xb };
function xb(e) {
	let t = this, n = e.attempt(Gv, r, e.attempt(this.parser.constructs.flowInitial, i, Q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(_y, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/text.js
var Sb = { resolveAll: Eb() }, Cb = Tb("string"), wb = Tb("text");
function Tb(e) {
	return {
		resolveAll: Eb(e === "text" ? Db : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Eb(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Db(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/constructs.js
var Ob = /* @__PURE__ */ e({
	attentionMarkers: () => Ib,
	contentInitial: () => Ab,
	disable: () => Lb,
	document: () => kb,
	flow: () => Mb,
	flowInitial: () => jb,
	insideSpan: () => Fb,
	string: () => Nb,
	text: () => Pb
}), kb = {
	42: $,
	43: $,
	45: $,
	48: $,
	49: $,
	50: $,
	51: $,
	52: $,
	53: $,
	54: $,
	55: $,
	56: $,
	57: $,
	62: qv
}, Ab = { 91: Ey }, jb = {
	[-2]: ay,
	[-1]: ay,
	32: ay
}, Mb = {
	35: My,
	42: cb,
	45: [_b, cb],
	60: Ly,
	61: _b,
	95: cb,
	96: ny,
	126: ny
}, Nb = {
	38: $v,
	92: Zv
}, Pb = {
	[-5]: ob,
	[-4]: ob,
	[-3]: ob,
	33: nb,
	38: $v,
	42: zv,
	60: [Uv, Wy],
	91: ib,
	92: [Ay, Zv],
	93: Ky,
	95: zv,
	96: ly
}, Fb = { null: [zv, Sb] }, Ib = { null: [42, 95] }, Lb = { null: [] };
//#endregion
//#region ../../node_modules/micromark/lib/create-tokenizer.js
function Rb(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = J(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Rv(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Bb(p(e), t);
	}
	function p(e) {
		return zb(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		Y(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && iv(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function zb(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Bb(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/micromark/lib/parse.js
function Vb(e) {
	let t = {
		constructs: ov([Ob, ...(e || {}).extensions || []]),
		content: n(jv),
		defined: [],
		document: n(Nv),
		flow: n(bb),
		lazy: {},
		string: n(Cb),
		text: n(wb)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Rb(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/postprocess.js
function Hb(e) {
	for (; !hy(e););
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/preprocess.js
var Ub = /[\0\t\n\r]/g;
function Wb() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Ub.lastIndex = u, c = Ub.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/micromark/index.js
function Gb(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), Av(n)(Hb(Vb(n).document().write(Wb()(e, t, !0))));
}
//#endregion
//#region ../app/src/utils/safeMarkdown.js
function Kb(e, t = {}) {
	let n = Gb(e), r = new DOMParser().parseFromString(`<!DOCTYPE html><html><body><div>${n}</div></body></html>`, "text/html");
	r.normalize(), qb(r.body);
	for (let e of r.querySelectorAll("a[href]")) e.setAttribute("target", "blank"), e.setAttribute("rel", "noopener noreferrer"), e.setAttribute("href", ze(e.getAttribute("href"), t.baseUrl));
	for (let e of r.querySelectorAll("img[src]")) e.setAttribute("src", ze(e.getAttribute("src"), t.baseUrl));
	let i = r.body.removeChild(r.querySelector("body > div"));
	return i.className = "markdown", i;
}
function qb(e) {
	if (e.nodeType !== 3) {
		if (e.nodeType !== 1 || /^(script|iframe|object|embed|svg)$/i.test(e.tagName)) return e.remove();
		for (let t = e.attributes.length; t--;) {
			let n = e.attributes[t].name;
			/^(class|id|name|href|src|alt|align|valign|(on[a-z]+))$/i.test(n) || e.attributes.removeNamedItem(n);
		}
		for (let t = e.childNodes.length; t--;) qb(e.childNodes[t]);
	}
}
//#endregion
//#region ../app/src/components/dialogs/bookmarkInfoBox.js
var Jb = L`
    dialog {
        position: fixed;
        bottom: var(--gs-basic-spacing);
        margin-right: var(--gs-basic-spacing);
        max-width: 600px;
    }

    .markdown {
        img {
            max-width: 350px;
            display: block;
            margin: 1em auto;
        }

        p:first-child {
            margin-top: 0;
        }

        p:last-child {
            margin-bottom: 0;
        }
    }

    .collapse {
        all: unset;
        position: absolute;
        right: var(--gs-basic-spacing);
        top: var(--gs-basic-spacing);
        background: none;
        border: none;
        font-size: 1.1em;

        border-radius: 2px;
        padding: 0 0.2em;
        cursor: pointer;

        &:focus {
            outline: revert;
        }

        svg {
            transition: transform 0.5s;
        }

        &:hover {
            background-color: #e8e8e8;
        }
    }

    dialog:not(.collapsed) .content:not(:hover) .collapse {
        animation: move 0.25s 0.5s 3 linear;

        @keyframes move {
            0% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-2px);
            }
            75% {
                transform: translateY(2px);
            }
            100% {
                transform: translateY(0);
            }
        }
    }

    dialog.collapsed {
        section,
        footer {
            display: none;
        }

        header {
            padding-bottom: var(--gs-basic-spacing);
            padding-right: 3em;
        }

        .collapse {
            svg {
                transform: rotate(180deg);
            }
        }
    }

    .non-modal-backdrop {
        pointer-events: none;

        position: fixed;
        inset: 0;

        opacity: 1;
        transition: opacity 0.2s ease-in-out;

        @starting-style {
            opacity: 0;
        }

        background: linear-gradient(
            160deg,
            transparent 70%,
            rgba(0, 0, 0, 0.2)
        );

        &.closing {
            opacity: 0;
        }
    }

    .bookmark-plot {
        margin-top: var(--gs-basic-spacing);
    }

    .bookmark-plot-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--gs-basic-spacing);
        margin-bottom: calc(var(--gs-basic-spacing) * 0.5);

        span {
            font-weight: bold;
            font-size: 90%;
        }
    }

    .bookmark-plot-preview {
        inline-size: min(520px, 70vw);
        block-size: 220px;
        border: 1px solid var(--gs-dialog-stroke-color, #d0d0d0);
    }

    .bookmark-plot-error {
        color: #8a1f11;
    }
`, Yb = class extends G {
	static properties = {
		...super.properties,
		entry: {},
		mode: { type: String },
		allowImport: { type: Boolean },
		baseUrl: { type: String },
		plotResults: { state: !0 },
		plotBookmarkContext: {},
		entryIndex: { state: !0 }
	};
	static styles = [...super.styles, Jb];
	constructor() {
		super(), this.entry = null, this.mode = "default", this.allowImport = !1, this.baseUrl = "", this.plotResults = [], this.plotBookmarkContext = void 0, this.modal = !1, this.names = [], this.entryIndex = -1, this.#e = [], this.#t = 0;
	}
	#e;
	#t;
	disconnectedCallback() {
		this.#i(), super.disconnectedCallback();
	}
	updated(e) {
		super.updated?.(e), e.has("plotResults") && this.#a();
	}
	willUpdate(e) {
		super.willUpdate(e);
		let t = this.names?.length ?? 0;
		t && (this.entryIndex = this.names.indexOf(this.entry?.name));
		let n = this.mode == "tour" && t ? ` ${this.entryIndex + 1} of ${this.names.length}` : "";
		this.dialogTitle = `${this.mode == "shared" ? "Shared bookmark" : "Bookmark"}${n}: ${this.entry.name ?? "Unnamed"}`;
	}
	async #n(e) {
		e < 0 || e >= this.names.length || this.dispatchEvent(new CustomEvent("gs-jump-to-bookmark", {
			bubbles: !0,
			composed: !0,
			detail: { name: this.names[e] }
		}));
	}
	renderHeader() {
		return R`${this.dialogTitle}
            <button
                title="Collapse"
                class="btn collapse"
                @click=${(e) => e.target.closest("dialog").classList.toggle("collapsed")}
            >
                ${W($r).node[0]}
            </button> `;
	}
	renderBody() {
		let e = this.entry;
		return R`<div class="notes">${e.notes ? Kb(e.notes, { baseUrl: this.baseUrl }) : R`<span class="no-notes">No notes provided</span>`}</div>
            ${this.#r()}`;
	}
	#r() {
		return this.plotResults.length ? R`<div class="bookmark-plots">
            ${this.plotResults.map((e, t) => e.error || !e.plot ? R`<div class="bookmark-plot bookmark-plot-error">
                        ${e.error ?? "Plot could not be rebuilt."}
                    </div>` : R`<div class="bookmark-plot">
                    <div class="bookmark-plot-title">
                        <span>${e.plot.title}</span>
                        <button
                            class="btn"
                            type="button"
                            @click=${() => Cp(e.plot, { bookmarkContext: this.plotBookmarkContext })}
                        >
                            ${W(ni).node[0]} Open larger
                        </button>
                    </div>
                    <div
                        class="bookmark-plot-preview"
                        data-plot-index=${t}
                    ></div>
                </div>`)}
        </div>` : "";
	}
	#i() {
		this.#t++;
		for (let e of this.#e) e.finalize();
		this.#e = [];
	}
	async #a() {
		this.#i();
		let e = this.#t;
		for (let [t, n] of this.plotResults.entries()) {
			if (!n.plot) continue;
			let r = this.renderRoot.querySelector(`.bookmark-plot-preview[data-plot-index="${t}"]`);
			if (r) {
				let t = await Gn(r, n.plot);
				e === this.#t && this.isConnected ? this.#e.push(t) : t.finalize();
			}
		}
	}
	renderButtons() {
		return [
			this.mode == "shared" && this.allowImport ? this.makeButton("Import bookmark", () => (this.dispatchEvent(new CustomEvent("gs-import-bookmark", {
				bubbles: !0,
				composed: !0,
				detail: { entry: this.entry }
			})), !0), { iconDef: Er }) : R``,
			this.makeCloseButton(this.mode == "tour" ? "End tour" : "Close"),
			this.names.length && this.mode == "tour" ? R`<button
                      class="btn"
                      @click=${async () => {
				await this.#n(this.entryIndex - 1);
			}}
                      ?disabled=${this.entryIndex <= 0}
                  >
                      ${W(Ur).node[0]} Previous
                  </button>` : R``,
			this.names.length && this.mode == "tour" ? R`<button
                      class="btn"
                      @click=${async () => {
				await this.#n(this.entryIndex + 1);
			}}
                      autofocus
                      ?disabled=${this.entryIndex >= this.names.length - 1}
                  >
                      Next ${W(yr).node[0]}
                  </button>` : R``
		];
	}
	closeDialog() {
		this.triggerClose();
	}
};
customElements.define("gs-bookmark-info-box", Yb);
//#endregion
//#region ../app/src/bookmark/scaleDomainUtils.js
function Xb(e) {
	return !e.getLinkedSelectionDomainInfo?.()?.persist;
}
function Zb(e, t) {
	let n = {};
	for (let [r, i] of e.getNamedScaleResolutions().entries()) t(i) && Xb(i) && (n[r] = i.getComplexDomain());
	return n;
}
//#endregion
//#region ../app/src/bookmark/bookmarkState.js
function Qb(e, t = {}) {
	let n = {
		name: void 0,
		actions: e.provenance.getBookmarkableActionHistory(),
		scaleDomains: {}
	}, r = e.store.getState().viewSettings, i = e.genomeSpy.viewRoot;
	if (i) {
		let e = bn(i, r);
		e && (n.viewSettings = e);
	}
	return n.scaleDomains = Zb(e.genomeSpy, (e) => e.isZoomable()), t.plots?.length && (n.plots = t.plots.slice()), n;
}
function $b(e) {
	return {
		getLocalBookmarkDatabase: () => e.localBookmarkDatabase,
		createBookmark: (t) => Qb(e, { plots: t }),
		saveLocalBookmark: (t) => e.localBookmarkDatabase.put(t)
	};
}
//#endregion
//#region ../app/src/bookmark/bookmark.js
function ex(e) {
	for (let t of e.genomeSpy.getNamedScaleResolutions().values()) t.isZoomable() && t.resetZoom();
	let t = e.store;
	e.provenance.isUndoable() && e.provenance.activateInitialState(), t.dispatch($n.actions.restoreDefaultVisibilities());
}
async function tx(e, t) {
	try {
		if (e.actions) {
			if (t.provenance.isUndoable() && (t.provenance.activateInitialState(), await t.getSampleView?.()?.awaitMetadataReady()), !t.intentPipeline) throw Error("Intent pipeline is required to restore bookmarks.");
			await t.intentPipeline.submit(e.actions, { submissionKind: "bookmark" }), await t.paramProvenanceBridge?.whenApplied();
		}
		let n = Un(e.viewSettings);
		t.store.dispatch($n.actions.setViewSettings(n));
		let r = [];
		for (let [n, i] of Object.entries(e.scaleDomains ?? {})) {
			let e = t.genomeSpy.getNamedScaleResolutions().get(n);
			e ? r.push(e.zoomTo(i)) : console.warn(`Cannot restore scale domain. Unknown name: ${n}`);
		}
		return await Promise.all(r), { plots: await nx(e, t) };
	} catch (e) {
		return console.error(e), t.store.getState().intentStatus?.status === "error" ? { plots: [] } : (q(R`<p>Cannot restore the state:</p>
                <p>${e}</p>`, { type: "error" }), t.provenance.activateInitialState(), { plots: [] });
	}
}
async function nx(e, t) {
	let n = e.plots ?? [];
	if (!n.length) return [];
	let r = await t.getAgentApi(), i = [];
	for (let e of n) try {
		let t = await r.buildSampleAttributePlot(e.definition);
		if (!t) throw Error("Plot could not be rebuilt.");
		i.push({ plot: t });
	} catch (e) {
		i.push({ error: e instanceof Error ? e.message : String(e) });
	}
	return i;
}
async function rx(e, t) {
	if (await rf(t.localBookmarkDatabase, e, "add")) try {
		await t.localBookmarkDatabase.put(e);
	} catch (e) {
		console.warn(e), q(`Cannot import bookmark: ${e}`, { type: "error" });
	}
}
async function ix(e, t, n = {}) {
	let r = await tx(e, t);
	if (r.plots.length || e.notes || n.mode == "shared" && (e.name || e.notes)) {
		await ax(e, t, {
			...n,
			plotResults: r.plots
		});
		return;
	}
	let i = document.body.querySelector("gs-bookmark-info-box");
	i && i.closeDialog();
}
async function ax(e, t, n = {}) {
	let r = document.body.querySelector("gs-bookmark-info-box");
	if (r) r.baseUrl = ox(t, n), r.entry = e, r.mode = n.mode ?? "default", r.plotResults = n.plotResults ?? [], r.plotBookmarkContext = $b(t);
	else {
		K("gs-bookmark-info-box", async (r) => {
			r.baseUrl = ox(t, n), r.entry = e, r.mode = n.mode ?? "default", r.plotResults = n.plotResults ?? [], r.plotBookmarkContext = $b(t), r.allowImport = !!n.database, n.database && (r.names = await n.database.getNames());
		}).then(async () => {
			if (n.mode == "tour") {
				let e = n.afterTourBookmark;
				if (typeof e == "string") {
					let r = await n.database.get(e);
					if (!r) throw Error(`No such bookmark: ${e}`);
					tx(r, t);
				} else e === null || ex(t);
			}
		});
		let r = document.body.querySelector("gs-bookmark-info-box");
		n.database && (r.addEventListener("gs-jump-to-bookmark", async (e) => {
			let r = e.detail.name;
			ix(await n.database.get(r), t, n);
		}), r.addEventListener("gs-import-bookmark", async (e) => {
			rx(e.detail.entry, t);
		}));
	}
}
function ox(e, t) {
	return t.database?.baseUrl ?? t.baseUrl ?? e.genomeSpy.spec.baseUrl;
}
//#endregion
//#region ../app/src/components/toolbar/bookmarkButton.js
var sx = class extends I {
	constructor() {
		super(), this.app = void 0;
	}
	connectedCallback() {
		super.connectedCallback(), this.dispatchEvent(m_("app", (e) => {
			this.app = e;
		}));
	}
	createRenderRoot() {
		return this;
	}
	#e() {
		return Qb(this.app);
	}
	async #t() {
		let e = this.#e();
		await rf(void 0, e, "share") && vp(e, !1);
	}
	async #n(e, t) {
		let n = t ? await e.get(t) : void 0, r = !!n, i = this.#e();
		if (i.name ??= n?.name, i.notes ??= n?.notes, i.plots ??= n?.plots, await rf(e, i, r ? "edit" : "add")) try {
			await e.put(i, n?.name), this.requestUpdate();
		} catch (e) {
			q(`${e}`, { title: "Cannot save the bookmark!" });
		}
	}
	async #r(e, t) {
		let n = await e.get(t);
		n && ix(n, this.app, { database: e });
	}
	#i(e, t, n) {
		n.stopPropagation();
		let r = n.target.closest("li"), i = () => q(R`The bookmark <em>${t}</em> will be deleted.`, {
			title: "Are you sure?",
			confirm: !0
		}).then(async (n) => {
			n && (await e.delete(t), this.requestUpdate());
		}), a = [], o = e == this.app.globalBookmarkDatabase;
		o || (a.push({
			label: "Edit and replace...",
			icon: Rr,
			callback: () => this.#n(e, t)
		}), a.push({
			label: "Delete",
			icon: Br,
			callback: i
		})), a.push({
			label: "Share...",
			icon: li,
			callback: async () => vp(await e.get(t), o)
		}), Fd({ items: a }, r, "right-start");
	}
	async #a(e, t) {
		let n = (await e.getNames()).map((t) => ({
			label: t,
			callback: () => this.#r(e, t),
			ellipsisCallback: (n) => this.#i(e, t, n)
		}));
		return n.length ? [
			{ type: "divider" },
			{
				label: t,
				type: "header"
			},
			...n
		].map((e) => Ad(e)) : P;
	}
	#o() {
		let e = (e, t) => e ? tv(this.#a(e, t), R`Loading...`) : P;
		return [e(this.app.globalBookmarkDatabase, "Bookmarks on the server"), e(this.app.localBookmarkDatabase, "Bookmarks in the web browser")];
	}
	render() {
		let e = this.app.localBookmarkDatabase, t = e ? R` <li>
                  <a @click=${() => this.#n(e)}
                      >Add bookmark...</a
                  >
              </li>` : P;
		return R`
            <div class="btn-group">
                ${e || this.app.globalBookmarkDatabase ? R`
                      <div class="dropdown bookmark-dropdown">
                          <button
                              class="tool-btn"
                              title="Bookmarks"
                              @click=${(e) => {
			Y_(e) && this.requestUpdate();
		}}
                          >
                              ${W(Er).node[0]}
                          </button>
                          <ul class="gs-dropdown-menu">
                              ${t} ${this.#o()}
                          </ul>
                      </div>
                  ` : P}
                <button
                    class="tool-btn"
                    title="Share"
                    @click=${() => this.#t()}
                >
                    ${W(li).node[0]}
                </button>
            </div>
        `;
	}
};
customElements.define("genome-spy-bookmark-button", sx);
//#endregion
//#region ../app/src/components/dialogs/aboutDialog.js
var cx = class extends G {
	constructor() {
		super(), this.dialogTitle = "About GenomeSpy";
	}
	renderBody() {
		return R` <div style="display: flex; gap: 1em">
            <div style="width: 8em">
                <img title="GenomeSpy" alt="GenomeSpy" src="${hr}" />
            </div>

            <div style="max-width: 28em">
                <p>
                    ${d_.description}<br />
                    Read more about it on
                    <a href="${d_.homepage}" target="_blank"
                        >${d_.homepage}</a
                    >.
                </p>
                <p>
                    Copyright 2026 ${d_.author?.name ?? "The author"}
                    and contributors.<br />
                    ${d_.license} license.
                </p>
                <p>
                    Version: ${f_(d_.version)}
                    ${"commitHash" in d_ ? `(${d_.commitHash})` : P}
                </p>

                <p style="font-size: 85%">
                    GenomeSpy is developed in
                    <a
                        href="https://www.helsinki.fi/en/researchgroups/systems-biology-of-drug-resistance-in-cancer"
                        target="_blank"
                        >The Systems Biology of Drug Resistance in Cancer</a
                    >
                    group at the
                    <a href="https://www.helsinki.fi/en" target="_blank"
                        >University of Helsinki</a
                    >.
                </p>

                <p style="font-size: 85%">
                    This project has received funding from the European Union's
                    Horizon 2020 research and innovation programme under grant
                    agreement No. 965193
                    <a href="https://www.deciderproject.eu/" target="_blank"
                        >DECIDER</a
                    >
                    and No. 847912
                    <a href="https://www.rescuer.uio.no/" target="_blank"
                        >RESCUER</a
                    >, as well as from the Biomedicum Helsinki Foundation, the
                    Sigrid Jusélius Foundation, and the Cancer Foundation
                    Finland.
                </p>
            </div>
        </div>`;
	}
};
customElements.define("gs-about-dialog", cx);
//#endregion
//#region ../app/src/components/toolbar/toolbar.js
var lx = class extends I {
	constructor() {
		super(), this.app = void 0;
	}
	static get properties() {
		return { app: { type: Object } };
	}
	createRenderRoot() {
		return this;
	}
	connectedCallback() {
		super.connectedCallback(), this.#e = Ep(this.app.store, (e) => e.lifecycle.appInitialized, () => this.requestUpdate()), this.app.ui.addEventListener("change", this.#t);
	}
	disconnectedCallback() {
		this.#e?.(), this.app.ui.removeEventListener("change", this.#t), super.disconnectedCallback();
	}
	#e = void 0;
	#t = () => {
		this.requestUpdate();
	};
	_getToolButtons() {
		let e = this.app.provenance, t = [];
		e.isEnabled() && t.push(R`
                <genome-spy-provenance-buttons
                    class="btn-group"
                    .provenance=${e}
                ></genome-spy-provenance-buttons>
            `), t.push(R`<genome-spy-view-visibility></genome-spy-view-visibility>`), this.app.isEmbedded() || t.push(R`
                <genome-spy-bookmark-button></genome-spy-bookmark-button>
            `);
		let n = this.app.rootSpec.description ? pt(this.app.rootSpec.description) : [];
		return n.length > 1 && t.push(R`
                <button
                    class="tool-btn"
                    title="Show a description of the visualization"
                    @click=${() => q(R`${n.slice(1).map((e) => R`<p>${e}</p>`)}`, {
			title: n[0],
			type: "info"
		})}
                >
                    ${W(Vr).node[0]}
                </button>
            `), n.length > 0 && t.push(R`
                <span class="vis-title">${n[0]}</span>
            `), t.push(R`
            <span class="spacer"></span>

            <span class="version"
                >${f_(d_.version)}</span
            >

            ${this.app.ui.toolbarButtons.size ? Array.from(this.app.ui.toolbarButtons).map((e) => this.#n(e)) : P}

            <div class="dropdown bookmark-dropdown">
                <button
                    class="tool-btn"
                    title="Additional functions"
                    @click=${(e) => Y_(e)}
                >
                    ${W(Gr).node[0]}
                </button>
                <ul class="gs-dropdown-menu gs-dropdown-menu-right">
                    ${this.#r()}
                </ul>
            </div>
        `), t;
	}
	#n(e) {
		return R`
            <button
                class="tool-btn"
                title=${e.title}
                aria-label=${e.title}
                @click=${() => {
			e.onClick();
		}}
            >
                ${W(e.icon).node[0]}
            </button>
        `;
	}
	#r() {
		let e = [];
		return e.push({
			label: "Save PNG",
			icon: Ir,
			callback: () => K("gs-save-image-dialog", (e) => {
				e.genomeSpy = this.app.genomeSpy;
			})
		}), e.push(...this.app.ui.toolbarMenuItems), this.app.appContainer.requestFullscreen && e.push({
			label: "Fullscreen",
			icon: Or,
			callback: () => this.app.toggleFullScreen()
		}), e.push({
			label: "About GenomeSpy",
			icon: Vr,
			callback: () => this.#i()
		}), e.push({
			label: "Help",
			icon: Lr,
			callback: () => window.open("https://genomespy.app/docs/sample-collections/analyzing/", "_blank")
		}), e.map(Ad);
	}
	#i() {
		K("gs-about-dialog");
	}
	render() {
		let e = this.app.genomeSpy;
		return R`
            <nav class="gs-toolbar">
                <a href="https://genomespy.app" target="_blank" class="logo">
                    <img title="GenomeSpy" alt="GenomeSpy" src="${hr}" />
                </a>

                ${this.app.store.getState().lifecycle.appInitialized && u_(e.viewRoot) ? R`
                          <genome-spy-search-field
                              .app=${this.app}
                          ></genome-spy-search-field>
                      ` : P}
                ${this._getToolButtons()}
            </nav>
        `;
	}
};
customElements.define("genome-spy-toolbar", lx);
//#endregion
//#region ../app/src/state/provenance.js
function ux() {
	let e = 0;
	return () => (t) => (n) => (n && typeof n == "object" && "type" in n && (n = {
		...n,
		provenanceId: `provenance-${e++}`
	}), t(n));
}
var dx = class {
	#e;
	constructor(e) {
		this.#e = e, this.actionInfoSources = [];
	}
	get store() {
		return this.#e;
	}
	get _provenanceState() {
		return this.#e.getState().provenance;
	}
	isEnabled() {
		return !!this.getPresentState();
	}
	getPresentState() {
		return this._provenanceState.present;
	}
	addActionInfoSource(e) {
		this.actionInfoSources.push(e);
	}
	getActionInfo(e) {
		for (let t of this.actionInfoSources) {
			let n = t(e);
			if (n) return n;
		}
	}
	isRedoable() {
		return this.isEnabled() && this._provenanceState.future.length > 0;
	}
	redo() {
		this.#e.dispatch(Wn.redo());
	}
	isUndoable() {
		return this.isEnabled() && this._provenanceState.past.length > 0;
	}
	undo() {
		this.#e.dispatch(Wn.undo());
	}
	isAtInitialState() {
		return !this.isUndoable();
	}
	isEmpty() {
		let e = this._provenanceState, t = e.present?.lastAction, n = !!t && !em(t);
		return !this.isEnabled() || e.past.length + e.future.length <= 0 && !n;
	}
	activateState(e) {
		let t = this.getFullActionHistory().findIndex((t) => t.provenanceId === e);
		if (t < 0) return;
		let n = this.getCurrentIndex();
		t < n ? this.#e.dispatch(Wn.jumpToPast(t)) : t > n && this.#e.dispatch(Wn.jumpToFuture(t - n - 1));
	}
	activateInitialState() {
		this.#e.dispatch(Wn.jumpToPast(0));
	}
	getCurrentIndex() {
		return this._provenanceState.past?.length;
	}
	getActionHistory() {
		let e = this._provenanceState;
		return e.present ? [...e.past, e.present].map((e) => e.lastAction) : [...e.past].map((e) => e.lastAction);
	}
	getFullActionHistory() {
		let e = this._provenanceState;
		return [
			...e.past,
			e.present,
			...e.future
		].map((e) => e.lastAction);
	}
	getBookmarkableActionHistory() {
		return this.getActionHistory().filter((e) => !em(e)).map((e) => {
			let { provenanceId: t, ...n } = e;
			return n;
		});
	}
};
//#endregion
//#region ../core/src/utils/kWayMerge.js
function fx(e, t, n = (e) => +e) {
	let r = e.length, i = new gt(), a = Array(r).fill(0);
	for (let [t, r] of e.entries()) r.length && i.push(t, n(r[0]));
	let o;
	for (; (o = i.pop()) !== void 0;) {
		let r = e[o], s = a[o], c = r[s++];
		if (t(c), s < r.length) {
			let e = n(r[s]);
			i.push(o, e), a[o] = s;
		}
	}
}
//#endregion
//#region ../app/src/sampleView/mergeFacets.js
var px = "sampleCount", mx = class extends Xe {
	#e = !0;
	#t;
	constructor(e, t) {
		super(), this.view = t;
		let n = t.context.animator;
		if (this.provenance = hx(t), !this.provenance) throw Error("No SampleView was found!");
		let r = () => {
			this.#n && (this.#e && (this.#e = !1, this.reset(), this.complete()), n.requestTransition(() => {
				this.reset(), this.complete();
			}));
		}, i = Ep(this.provenance.store, (e) => e.provenance.present[pn], () => {
			r();
		});
		this.view.registerDisposer(i);
		let a = this.#n, o = this.provenance.store.subscribe(() => {
			let e = this.#n;
			e !== a && (a = e, e && r());
		});
		this.view.registerDisposer(o);
	}
	get label() {
		return "MergeSampleFacets";
	}
	initialize() {
		this.#t = this.paramRuntime.allocateSetter(px, 0, !0);
		let e = this.view.getEncoding().x;
		if (Ke(e)) this.xAccessor = Ie(e.field);
		else throw Error("Sample summarization requires a FieldDef. This is not a FieldDef: " + JSON.stringify(e));
	}
	handle(e) {}
	get #n() {
		return this.view.isConfiguredVisible();
	}
	#r() {
		if (this.parent instanceof c) return this.parent;
		throw Error("MergeFacetsTransform must be a direct child of a Collector");
	}
	complete() {
		this.#n && this.#i(this.provenance.getPresentState()[pn]), super.complete();
	}
	#i(e) {
		let t = [...tr(e.rootGroup)].filter((e) => _n(ut(e)));
		for (let [e, n] of t.entries()) {
			let t = ut(n);
			if (_n(t)) {
				this.beginBatch({
					type: "facet",
					facetId: [e]
				}, !0), this.#t(t.samples.length);
				let n = t.samples, r = this.#r();
				fx(n.map((e) => r.facetBatches.get([e]) ?? []), (e) => this._propagate(e), this.xAccessor);
			}
		}
	}
	beginBatch(e, t) {
		if (t) for (let t of this.children) t.beginBatch(e);
	}
	setParent(e) {
		super.setParent(e);
	}
};
function hx(e) {
	for (let t of e.getLayoutAncestors()) if (t instanceof Tg) return t.provenance;
}
//#endregion
//#region ../app/src/bookmark/simpleBookmarkDatabase.js
var gx = class extends e_ {
	constructor(e, t = {}) {
		super(), this.baseUrl = t.baseUrl, this.bookmarks = e, this.names = e.map((e) => e.name);
	}
	async getNames() {
		return this.names;
	}
	async get(e) {
		return this.bookmarks.find((t) => t.name == e);
	}
}, _x = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	constructor(e) {
		this.#e = e;
	}
	dispatch(e) {
		if ("payload" in e) {
			let t = e;
			for (let e of this.#t) t = e(t);
			e = t;
		}
		return this.#e.dispatch(e);
	}
	dispatchBatch(e) {
		for (let t of e) this.dispatch(t);
	}
	addActionAugmenter(e) {
		this.#t.add(e);
	}
	removeActionAugmenter(e) {
		this.#t.delete(e);
	}
}, vx = vn({
	name: "lifecycle",
	initialState: { appInitialized: !1 },
	reducers: { setInitialized: (e) => {
		if (e.appInitialized) throw Error("App is already initialized");
		e.appInitialized = !0;
	} }
}), yx = { status: "idle" }, bx = vn({
	name: "intentStatus",
	initialState: yx,
	reducers: {
		setRunning: (e, t) => ({
			...e,
			status: "running",
			submissionKind: t.payload.submissionKind ?? "user",
			startIndex: t.payload.startIndex,
			lastSuccessfulIndex: t.payload.startIndex,
			totalActions: t.payload.totalActions,
			currentIndex: 0,
			currentAction: void 0,
			failedAction: void 0,
			error: void 0
		}),
		setProgress: (e, t) => ({
			...e,
			status: "running",
			currentIndex: t.payload.currentIndex ?? e.currentIndex ?? 0,
			totalActions: t.payload.totalActions ?? e.totalActions,
			currentAction: t.payload.currentAction ?? e.currentAction
		}),
		setError: (e, t) => ({
			...e,
			status: "error",
			startIndex: t.payload.startIndex ?? e.startIndex,
			lastSuccessfulIndex: t.payload.lastSuccessfulIndex ?? e.lastSuccessfulIndex,
			failedAction: t.payload.failedAction ?? e.failedAction,
			submissionKind: t.payload.submissionKind ?? e.submissionKind,
			error: t.payload.error
		}),
		setCanceled: (e) => ({
			...e,
			status: "canceled"
		}),
		resolveError: (e, t) => yx,
		clearStatus: () => yx
	}
});
//#endregion
//#region ../app/src/state/setupStore.js
function xx() {
	let e = Xt({
		[Ht.name]: Ht.reducer,
		[hg.name]: hg.reducer
	}, { groupBy: gg }), t = nr({
		lifecycle: vx.reducer,
		viewSettings: $n.reducer,
		intentStatus: bx.reducer,
		provenance: e
	});
	return ir({
		middleware: (e) => e({
			serializableCheck: !1,
			immutableCheck: !1
		}).concat(ux()),
		reducer: (n, r) => {
			let i = t(n, r);
			if (r.type === bx.actions.setError.type) {
				let t = r.payload?.submissionKind === "agent" ? r.payload?.startIndex ?? n?.intentStatus?.startIndex : r.payload?.lastSuccessfulIndex ?? n?.intentStatus?.lastSuccessfulIndex;
				if (typeof t == "number") return {
					...i,
					provenance: e(i.provenance, Wn.jumpToPast(t))
				};
			}
			if (r.type === bx.actions.resolveError.type && r.payload.decision === "rollbackBatch") {
				let t = n?.intentStatus?.startIndex;
				if (typeof t == "number") return {
					...i,
					provenance: e(i.provenance, Wn.jumpToPast(t))
				};
			}
			return i;
		}
	});
}
//#endregion
//#region ../app/src/state/intentPipeline.js
var Sx = class {
	#e;
	#t;
	#n;
	#r = [];
	#i = !1;
	#a = !1;
	#o;
	#s = /* @__PURE__ */ new Set();
	#c;
	constructor({ store: e, provenance: t, intentExecutor: n }) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	createContext(e) {
		return {
			store: this.#e,
			provenance: this.#t,
			intentExecutor: this.#n,
			getAttributeInfo: e?.getAttributeInfo ?? this.#o,
			signal: e?.signal
		};
	}
	setResolvers({ getAttributeInfo: e }) {
		this.#o = e;
	}
	registerActionHook(e) {
		return this.#s.add(e), () => {
			this.#s.delete(e);
		};
	}
	async submit(e, t) {
		let n = Array.isArray(e) ? e : [e], r = n.length > 1;
		if (this.#a) throw Error("Cannot submit actions while a batch is running.");
		if (r && this.#i) throw Error("Cannot submit a batch while actions are running.");
		return new Promise((e, r) => {
			let i = t?.signal ? void 0 : new AbortController(), a = i ? {
				...t,
				signal: i.signal
			} : t;
			this.#r.push({
				actions: n,
				options: a,
				resolve: e,
				reject: r,
				abortController: i
			}), this.#i || this.#l().catch(() => {});
		});
	}
	abortCurrent() {
		this.#c && this.#c.abort();
	}
	async #l() {
		if (this.#i) return;
		this.#i = !0;
		let e = !1;
		try {
			for (; this.#r.length;) {
				let t = this.#r.shift(), n = t.actions.length > 1;
				n && (this.#a = !0);
				let r = this.#e.getState().provenance.past.length, i = r;
				this.#e.dispatch(bx.actions.setRunning({
					startIndex: r,
					totalActions: t.actions.length,
					submissionKind: t.options?.submissionKind
				})), this.#c = t.abortController;
				let a;
				try {
					for (let [e, n] of t.actions.entries()) a = n, this.#e.dispatch(bx.actions.setProgress({
						currentIndex: e,
						currentAction: n
					})), await this.#u(n, t.options), i = this.#e.getState().provenance.past.length;
					t.resolve();
				} catch (n) {
					e = !0;
					let o = n instanceof Error ? n : Error(String(n)), s = t.options?.submissionKind;
					this.#e.dispatch(bx.actions.setError({
						startIndex: r,
						lastSuccessfulIndex: i,
						failedAction: a,
						submissionKind: s,
						error: o.message
					})), s === "agent" && this.#e.dispatch(bx.actions.clearStatus()), t.reject(o);
					let c = this.#r;
					this.#r = [];
					for (let e of c) e.reject(o);
					throw o;
				}
				n && (this.#a = !1);
			}
		} finally {
			this.#i = !1, this.#a = !1, this.#c = void 0, e || this.#e.dispatch(bx.actions.clearStatus());
		}
	}
	async #u(e, t) {
		let n = this.createContext(t);
		if (n.signal?.aborted) throw Error("Action processing was aborted.");
		let r = Cx(e), i = r && n.getAttributeInfo ? n.getAttributeInfo(r) : void 0;
		i?.ensureAvailability && await i.ensureAvailability({ signal: n.signal });
		let a = e;
		for (let e of this.#s) {
			if (!e.predicate(a) || !e.augment) continue;
			let t = await e.augment(n, a);
			t && (a = t);
		}
		n.intentExecutor.dispatch(a), i?.awaitProcessed && await i.awaitProcessed({ signal: n.signal });
		for (let e of this.#s) e.predicate(a) && (e.ensure && await e.ensure(n, a), e.awaitProcessed && await e.awaitProcessed(n, a));
	}
};
function Cx(e) {
	if (!("payload" in e)) return;
	let t = e.payload;
	if (!t || typeof t != "object" || !("attribute" in t)) return;
	let n = t.attribute;
	if (!(!n || typeof n != "object") && "type" in n) return n;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourcePayloadAugmentation.js
async function wx(e) {
	let { source: t, payload: n, sampleIds: r, baseUrl: i, signal: a, adapter: o, resolveColumns: s = !0 } = e;
	if (n._augmented?.metadata) return n;
	if (n.columnIds.length === 0) throw Error("No metadata columns requested from source.");
	if (n.columnIds.length > 100) throw Error("Metadata import exceeds the column limit (100).");
	let c = o ?? Pn(t, { baseUrl: i }), l = n.columnIds;
	if (s) {
		let e = await c.resolveColumns(l, a);
		if (e.columnIds.length === 0) throw Error(Tx(t, e));
		l = e.columnIds;
	}
	let u = await c.fetchColumns({
		columnIds: l,
		sampleIds: r,
		groupPath: n.groupPath,
		replace: n.replace
	}, a);
	return {
		...n,
		[Kt]: { metadata: u }
	};
}
function Tx(e, t) {
	let n = e.id ?? e.name ?? "(unnamed source)", r = [...t.missing ?? [], ...t.ambiguous ?? []], i = r.length > 0 ? ": " + r.join(", ") + "." : ".";
	return "None of the requested metadata columns could be resolved from source \"" + n + "\"" + i;
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceFlow.js
async function Ex(e, t, n) {
	if (e.type !== t.actions.addMetadataFromSource.type) return e;
	if (!("payload" in e)) throw Error("Metadata source action payload is missing.");
	let r = e.payload, i = t.sampleHierarchy.sampleData?.ids;
	if (!i) throw Error("Sample data has not been initialized.");
	let a = hn(t), o = await a.getSource(r.sourceId), s = await wx({
		source: o,
		payload: r,
		sampleIds: i,
		adapter: a.getAdapter(o),
		signal: n
	});
	return {
		...e,
		payload: s
	};
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceBootstrap.js
async function Dx(e) {
	let t = e.sampleHierarchy.sampleData?.ids;
	return t && t.length > 0 ? t : (await new Promise((t, n) => {
		let r = setTimeout(() => {
			i(), n(/* @__PURE__ */ Error("Timed out while waiting for sample identifiers."));
		}, 1e4), i = Ep(e.provenance.store, () => e.sampleHierarchy.sampleData?.ids, (e) => {
			!e || e.length === 0 || (clearTimeout(r), i(), t(void 0));
		});
	}), e.sampleHierarchy.sampleData?.ids ?? []);
}
async function Ox(e, t) {
	let n = hn(e), r = await n.getSources();
	if (r.length === 0) return;
	let i = await Dx(e);
	if (i.length === 0) throw Error("No sample identifiers are available for metadata.");
	let a = [], o = !0;
	for (let e of r) {
		let t = n.getAdapter(e), r = await yn(e, t);
		if (r.length === 0) continue;
		let s = Bn(r);
		for (let n of s) {
			let r = {
				columnIds: n,
				replace: o
			};
			e.id && (r.sourceId = e.id);
			let s = await wx({
				source: e,
				payload: r,
				sampleIds: i,
				adapter: t,
				resolveColumns: !1
			});
			a.push(Ht.actions.addMetadataFromSource(s)), o = !1;
		}
	}
	a.length !== 0 && (await t.submit(a), tm(e.provenance.store, Ht.name));
}
//#endregion
//#region ../app/src/sampleView/metadata/metadataSourceRuntime.js
async function kx(e, t) {
	t.setResolvers({ getAttributeInfo: e.compositeAttributeInfoSource.getAttributeInfo.bind(e.compositeAttributeInfoSource) });
	let n = t.registerActionHook({
		predicate: (e) => e.type === Ht.actions.addMetadata.type || e.type === Ht.actions.deriveMetadata.type || e.type === Ht.actions.addMetadataFromSource.type,
		awaitProcessed: (t) => e.awaitMetadataReady(t.signal)
	}), r = t.registerActionHook({
		predicate: (e) => e.type === Ht.actions.addMetadataFromSource.type,
		augment: (t, n) => Ex(n, e, t.signal)
	});
	e.registerDisposer(n), e.registerDisposer(r), await Ox(e, t);
}
//#endregion
//#region ../app/src/components/dialogs/intentStatusDialog.js
var Ax = class extends G {
	static properties = {
		...super.properties,
		message: {},
		cancelLabel: { type: String }
	};
	static styles = [...super.styles, L`
            dialog {
                width: 450px;
            }
        `];
	constructor() {
		super(), this.message = "", this.cancelLabel = "Cancel", this.dialogTitle = "Processing";
	}
	renderBody() {
		return R`${this.message}`;
	}
	renderButtons() {
		return [this.makeButton(this.cancelLabel, () => {
			this.finish({ ok: !0 });
		})];
	}
	closeDialog() {
		this.triggerClose();
	}
};
customElements.define("gs-intent-status-dialog", Ax);
function jx(e) {
	return kc("gs-intent-status-dialog", (t) => {
		t.message = e.message, t.dialogTitle = e.title ?? t.dialogTitle, e.cancelLabel && (t.cancelLabel = e.cancelLabel);
	});
}
//#endregion
//#region ../app/src/components/dialogs/intentErrorDialog.js
var Mx = class extends G {
	static properties = {
		...super.properties,
		message: {},
		rollbackLabel: { type: String },
		keepLabel: { type: String }
	};
	static styles = [...super.styles, L`
            dialog {
                max-width: 600px;
            }
        `];
	constructor() {
		super(), this.message = "", this.rollbackLabel = "Rollback entire batch", this.keepLabel = "Keep current state", this.dialogTitle = "Action interrupted";
	}
	renderBody() {
		return R`${this.message}`;
	}
	renderButtons() {
		return [this.makeButton(this.keepLabel, () => {
			this.finish({
				ok: !1,
				data: { decision: "accept" }
			});
		}), this.makeButton(this.rollbackLabel, () => {
			this.finish({
				ok: !0,
				data: { decision: "rollbackBatch" }
			});
		})];
	}
};
customElements.define("gs-intent-error-dialog", Mx);
function Nx(e) {
	return Dc("gs-intent-error-dialog", (t) => {
		t.message = e.message, t.dialogTitle = e.title ?? t.dialogTitle, e.rollbackLabel && (t.rollbackLabel = e.rollbackLabel), e.keepLabel && (t.keepLabel = e.keepLabel);
	}, (e) => e?.data?.decision ?? "accept");
}
//#endregion
//#region ../app/src/state/intentStatusUi.js
function Px({ store: e, intentPipeline: t, provenance: n, delayMs: r = 800, minVisibleMs: i = 400 }) {
	let a, o, s, c, l = (e = !1) => {
		if (!o) return;
		if (c &&= (clearTimeout(c), void 0), e || !s) {
			o.closeDialog(), o = void 0, s = void 0;
			return;
		}
		let t = Date.now() - s;
		if (t >= i) {
			o.closeDialog(), o = void 0, s = void 0;
			return;
		}
		c = setTimeout(() => {
			o && (o.closeDialog(), o = void 0, s = void 0, c = void 0);
		}, i - t);
	}, u = (e) => {
		let t = e?.currentAction ? Ix(n, e.currentAction) : P, r = typeof e?.currentIndex == "number" && typeof e?.totalActions == "number" ? R` (${e.currentIndex + 1} of ${e.totalActions})` : P;
		return R` ${t ? R`<div>Performing${r}:</div>
                  <div class="action-title">${t}</div>` : R`<div>Processing actions${r}.</div>`}
            <p>Cancel if it takes too long.</p>`;
	}, d = () => {
		if (o) return;
		let n = e.getState().intentStatus, { element: r, promise: i } = jx({
			title: "Working…",
			message: u(n),
			cancelLabel: "Cancel"
		});
		o = r, s = Date.now(), i.then((n) => {
			n.ok && e.getState().intentStatus?.status === "running" && t.abortCurrent();
		});
	}, f = async (t, r) => {
		let i = t ? Ix(n, t) : "action", a = Fx(r), o = R`
            <p>
                ${a ? "Canceled while performing:" : "Failed to perform:"}
                ${i}
            </p>
            <p>
                ${r ? R`<p>Details:<br />${r}</p>` : P}
            </p>
            <p>
                The failed action was rolled back.<br />
                Roll back the entire batch, or keep the current state?
            </p>
        `, s = await Nx({
			title: a ? "Action canceled" : "Action interrupted",
			message: o,
			rollbackLabel: "Rollback entire batch",
			keepLabel: "Keep current state"
		});
		e.dispatch(bx.actions.resolveError({ decision: s }));
	}, p = Ep(e, (e) => e.intentStatus, (t, n) => {
		if (t?.status === "running") {
			a ||= setTimeout(() => {
				a = void 0, e.getState().intentStatus?.status === "running" && d();
			}, r), c &&= (clearTimeout(c), void 0), o && (o.message = u(t));
			return;
		}
		a &&= (clearTimeout(a), void 0), t?.status === "error" ? l(!0) : l(), t?.status === "error" && n?.status !== "error" && t.submissionKind !== "agent" && f(t.failedAction, t.error);
	});
	return () => {
		a &&= (clearTimeout(a), void 0), c &&= (clearTimeout(c), void 0), l(), p();
	};
}
function Fx(e) {
	return typeof e == "string" && /abort|cancel/i.test(e);
}
function Ix(e, t) {
	let n = e.getActionInfo(t);
	return n?.provenanceTitle ?? n?.title ?? t.type ?? "action";
}
//#endregion
//#region ../core/src/utils/throttle.js
function Lx(e, t) {
	let n = null, r = null, i = null, a = null, o = function() {
		a = this, i = arguments;
		let o = Date.now();
		if (r === null) {
			e.apply(a, i), r = o;
			return;
		}
		let s = t - (o - r);
		if (s <= 0) {
			n &&= (clearTimeout(n), null), e.apply(a, i), r = o;
			return;
		}
		n && clearTimeout(n), n = setTimeout(() => {
			n = null, r !== null && Date.now() - r >= t && (e.apply(a, i), r = Date.now());
		}, s);
	};
	return o.cancel = () => {
		n &&= (clearTimeout(n), null), i = null, a = null, r = null;
	}, o;
}
//#endregion
//#region ../app/src/state/selectionExpansion.js
function Rx(e) {
	return "or" in e;
}
function zx(e) {
	return "and" in e;
}
function Bx(e) {
	return "not" in e;
}
function Vx(e, t) {
	return Bx(e) ? { not: Vx(e.not, t) } : zx(e) ? { and: e.and.map((e) => Vx(e, t)) } : Rx(e) ? { or: e.or.map((e) => Vx(e, t)) } : qx(e, t);
}
function Hx(e, t) {
	return Vx(Ux(e), t);
}
function Ux(e) {
	if (Yx(e)) {
		if (e.kind === "sameFieldValue") return {
			field: e.field,
			op: "eq",
			valueFromField: e.field
		};
		throw Error("Unknown selection expansion rule: " + JSON.stringify(e));
	}
	return e;
}
function Wx(e, t, n) {
	return t?.length ? { and: [e, ...t.map((e) => ({
		field: e,
		op: "eq",
		value: Kx(e)(n)
	}))] } : e;
}
function Gx(e) {
	if (Bx(e)) {
		let t = Gx(e.not);
		return (e) => !t(e);
	}
	if (zx(e)) {
		let t = e.and.map(Gx);
		return (e) => t.every((t) => t(e));
	}
	if (Rx(e)) {
		let t = e.or.map(Gx);
		return (e) => t.some((t) => t(e));
	}
	return Jx(e);
}
function Kx(e) {
	return (t) => t[e];
}
function qx(e, t) {
	if (e.op === "eq") {
		let n = "value" in e;
		if (n === "valueFromField" in e) throw Error("Selection expansion eq predicate must have exactly one of 'value' or 'valueFromField'.");
		if (n) return {
			field: e.field,
			op: "eq",
			value: e.value
		};
		if (!("valueFromField" in e)) throw Error("Selection expansion eq predicate is missing valueFromField.");
		let r = Kx(e.valueFromField);
		return {
			field: e.field,
			op: "eq",
			value: r(t)
		};
	}
	if (e.op === "in") {
		if (!Array.isArray(e.values)) throw Error("Selection expansion in predicate requires an array of values.");
		return {
			field: e.field,
			op: "in",
			values: [...e.values]
		};
	}
	throw Error("Unknown selection expansion predicate operator: " + JSON.stringify(e));
}
function Jx(e) {
	let t = Kx(e.field);
	if (e.op === "eq") {
		let n = e.value;
		return (e) => t(e) === n;
	}
	if (e.op === "in") {
		let n = new Set(e.values);
		return (e) => n.has(t(e));
	}
	throw Error("Unknown resolved selection expansion predicate operator: " + JSON.stringify(e));
}
function Yx(e) {
	return "kind" in e;
}
//#endregion
//#region ../app/src/state/selectionExpansionOrigin.js
function Xx(e, t) {
	let n = e.getCollector?.();
	if (!n) return { reason: "missingCollector" };
	if (!n.completed) return {
		reason: "collectorNotCompleted",
		collector: n
	};
	if (!Array.isArray(t.keyTuple) || t.keyTuple.length === 0) return { reason: "invalidOriginKeyTuple" };
	let r;
	try {
		r = bt(e.getEncoding());
	} catch {
		return { reason: "missingEncodingKey" };
	}
	if (!r.length || r.length !== t.keyTuple.length) return { reason: "incompatibleOriginKeyTuple" };
	if (Array.isArray(t.keyFields) && (t.keyFields.length !== r.length || t.keyFields.some((e, t) => e !== r[t]))) return {
		reason: "legacyKeyFieldsMismatch",
		keyFields: r,
		legacyKeyFields: t.keyFields
	};
	try {
		return {
			reason: "ok",
			keyFields: r,
			datum: n.findDatumByKey(r, t.keyTuple)
		};
	} catch (e) {
		return {
			reason: "lookupError",
			error: e
		};
	}
}
//#endregion
//#region ../app/src/state/paramValueSerialization.js
function Zx(e, t) {
	return !t || typeof t != "object" || t.type !== "interval" ? t : {
		type: "interval",
		intervals: Qx(e, "intervals" in t && t.intervals ? t.intervals : "value" in t && Array.isArray(t.value) ? { x: t.value } : {})
	};
}
function Qx(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(t)) {
		if (!i) continue;
		let t = r, a = e.getScaleResolution(t);
		n[r] = [a && a.type === "locus" ? a.toComplex(i[0]) : i[0], a && a.type === "locus" ? a.toComplex(i[1]) : i[1]];
	}
	return n;
}
//#endregion
//#region ../app/src/state/paramProvenanceBridge.js
var $x = 150, eS = class {
	#e;
	#t;
	#n;
	#r = [];
	#i = /* @__PURE__ */ new Map();
	#a = !1;
	#o = [];
	#s = /* @__PURE__ */ new Set();
	#c = /* @__PURE__ */ new Set();
	#l = /* @__PURE__ */ new Set();
	#u = /* @__PURE__ */ new Set();
	#d = !1;
	#f = !1;
	#p = /* @__PURE__ */ new WeakSet();
	#m = /* @__PURE__ */ new Map();
	#h = Promise.resolve();
	constructor({ root: e, store: t, intentExecutor: n }) {
		this.#e = e, this.#t = t, this.#n = n, this.#g(), this.#_(), this.#v();
		let r = this.#y();
		Object.keys(r).length > 0 && this.#F(r);
	}
	dispose() {
		for (let e of this.#o) e();
		this.#o.length = 0, this.#O();
	}
	#g() {
		this.#r = rt(this.#e), this.#i.clear(), this.#u.clear();
		for (let e of this.#r) {
			let t = st(e.selector);
			this.#i.set(t, e), this.#X(e, t);
		}
	}
	#_() {
		for (let e of this.#r) {
			let t = e.selector.param, n = e.view.paramRuntime.subscribe(t, () => {
				this.#b(e);
			});
			this.#o.push(n);
		}
	}
	#v() {
		let e = Ep(this.#t, (e) => e.provenance.present.paramProvenance.entries, Dp((e) => {
			this.#F(e);
		}));
		this.#o.push(e);
	}
	#y() {
		return this.#t.getState().provenance.present.paramProvenance.entries;
	}
	#b(e) {
		if (this.#a) return;
		let t = st(e.selector);
		if (this.#u.has(t)) return;
		let n = this.#L(e);
		if (n === void 0 || Re(e.param) && this.#Z(e.param, n) && this.#C(e, t)) return;
		let r = this.#P(e, n);
		if (r) {
			if (this.#x(e, n, t)) {
				this.#D(t), this.#t.dispatch(Wn.undo());
				return;
			}
			if (this.#w(e.param)) {
				this.#E(t)(e, r);
				return;
			}
			this.#T(e, r);
		}
	}
	#x(e, t, n) {
		if (!Re(e.param) || !this.#Z(e.param, t)) return !1;
		let { past: r, present: i } = this.#t.getState().provenance;
		if (r.length === 0) return !1;
		let a = i.lastAction;
		if (!a || !hg.actions.paramChange.match(a)) return !1;
		let o = a.payload.selector;
		if (st(o) !== n) return !1;
		let s = r[r.length - 1].paramProvenance.entries[n];
		return !s || this.#S(e.param, s.value);
	}
	#S(e, t) {
		if (!t || !Re(e)) return !0;
		if (t.type === "point") return t.keys.length === 0;
		if (t.type === "pointExpand") return !1;
		if (t.type === "interval") {
			let e = t.intervals ?? {};
			for (let t of Object.values(e)) if (t && t[0] != null && t[1] != null) return !1;
			return !0;
		}
		return !1;
	}
	#C(e, t) {
		let n = this.#y()[t];
		return !n || this.#S(e.param, n.value);
	}
	#w(e) {
		return Re(e) ? !0 : Ue(e) && !!e.bind;
	}
	#T(e, t) {
		let n = hg.actions.paramChange({
			selector: e.selector,
			value: t
		});
		this.#n.dispatch(n);
	}
	#E(e) {
		let t = this.#m.get(e);
		return t || (t = Lx((e, t) => {
			this.#a || this.#T(e, t);
		}, $x), this.#m.set(e, t)), t;
	}
	#D(e) {
		let t = this.#m.get(e);
		t && t.cancel();
	}
	#O() {
		for (let e of this.#m.values()) e.cancel();
		this.#m.clear();
	}
	#k(e) {
		return Ve(e.param, e.view.paramRuntime);
	}
	#A(e, t) {
		return this.#K(e.param, t), this.#k(e);
	}
	#j(e, t) {
		return this.#G(e.param, t), this.#k(e);
	}
	#M(e) {
		let t = e;
		if (typeof t.getCollector == "function") return t.getCollector();
	}
	#N(e, t) {
		let n;
		try {
			n = bt(e.view.getEncoding());
		} catch (n) {
			t === "persist" ? this.#q(e.param, `will not be saved because encoding.key is invalid: ${n}`) : this.#K(e.param, `cannot be restored because encoding.key is invalid: ${n}`);
			return;
		}
		if (!n) {
			t === "persist" ? this.#q(e.param, "will not be saved to bookmarks because encoding.key is missing on the owning view.") : this.#K(e.param, "cannot be restored because encoding.key is missing on the owning view.");
			return;
		}
		return n;
	}
	#P(e, t) {
		let n = e.param;
		if (Re(n)) {
			let r = Je(n.select);
			if (He(r)) {
				let r = this.#N(e, "persist");
				if (!r) return;
				let i = yt(t, r);
				if (!i) return;
				let a = this.#M(e.view);
				if (a && a.completed) try {
					for (let e of i) a.findDatumByKey(r, e);
				} catch (e) {
					this.#q(n, `will not be saved because encoding.key fields [${r.join(", ")}] are not unique in the current data: ${e}`);
					return;
				}
				return {
					type: "point",
					keyFields: r,
					keys: i
				};
			}
			if (Qe(r)) {
				if (!$e(t)) {
					this.#q(n, "has no value yet and will not be saved.");
					return;
				}
				return Zx(e.view, t);
			}
			throw Error(`Unsupported selection config for parameter "${n.name}".`);
		}
		if (Ue(n)) return {
			type: "value",
			value: t
		};
	}
	#F(e) {
		this.#a = !0;
		try {
			this.#e.paramRuntime.runInTransaction(() => {
				let t = new Set(this.#i.keys()), n = new Set(Object.keys(e));
				for (let t of this.#r) {
					let r = st(t.selector);
					if (n.delete(r), this.#u.has(r)) continue;
					let i = e[r], a = i ? this.#R(t, i) : this.#k(t);
					this.#I(t, a) || t.view.paramRuntime.setValue(t.selector.param, a, { animate: !1 });
				}
				for (let r of n) if (!t.has(r)) {
					let t = e[r].selector;
					this.#Y(t.param, t.scope);
				}
			}), this.#e.paramRuntime.flushNow(), this.#h = this.#e.paramRuntime.whenPropagated();
		} finally {
			this.#a = !1;
		}
	}
	#I(e, t) {
		return Ue(e.param) && Object.is(e.view.paramRuntime.getTargetValue(e.selector.param), t);
	}
	#L(e) {
		let t = e.selector.param;
		return Ue(e.param) ? e.view.paramRuntime.getTargetValue(t) : e.view.paramRuntime.getValue(t);
	}
	async whenApplied(e) {
		return await Promise.resolve(), await this.#h, this.#e.paramRuntime.whenPropagated(e);
	}
	#R(e, t) {
		let n = e.param, r = t.value;
		if (Re(n)) {
			let i = Je(n.select);
			if (He(i)) {
				if (r.type === "pointExpand") return this.#z(e, r, i);
				if (r.type !== "point") return this.#A(e, "cannot be restored because the bookmark stored a different selection type.");
				let t = this.#N(e, "restore");
				if (!t) return this.#k(e);
				if (!Array.isArray(r.keyFields) || !Array.isArray(r.keys) || r.keys.some((e) => !Array.isArray(e))) return this.#A(e, "cannot be restored because the bookmark stores an invalid key tuple structure.");
				if (r.keyFields.length !== t.length || r.keyFields.some((e, n) => e !== t[n])) return this.#A(e, `cannot be restored because the bookmark uses key fields [${r.keyFields.join(", ")}] but the view now uses [${t.join(", ")}]. Update encoding.key or recreate the bookmark.`);
				let a = r.keys, o = this.#M(e.view);
				if (!o) return this.#A(e, "cannot be restored because the view does not expose data for key lookup.");
				if (!o.completed) return this.#V(o), this.#k(e);
				let s = i.toggle ? "multi" : "single", c;
				try {
					c = Ct(s, t, a, (e, t) => o.findDatumByKey(e, t));
				} catch (r) {
					return String(r).includes("Duplicate key detected") ? this.#K(n, `cannot be restored because encoding.key fields [${t.join(", ")}] are not unique in the current data.`) : this.#K(n, `cannot be restored due to an error: ${r}`), this.#k(e);
				}
				return c.unresolved.length && this.#K(n, "has some points that could not be resolved. Ensure encoding.key is unique and present in the data."), c.selection;
			}
			if (Qe(i)) {
				if (r.type !== "interval") return this.#A(e, "cannot be restored because the bookmark stored a different selection type.");
				let n = Ze(i.encodings);
				this.#H(e.view, n, r.intervals);
				let a = this.#U(t.origin);
				return a && this.#H(e.view, n, a), n;
			}
			return this.#k(e);
		}
		return Ue(n) ? r.type === "value" ? r.value : this.#j(e, "cannot be restored because the bookmark stored a different value type.") : this.#k(e);
	}
	#z(e, t, n) {
		if (!n.toggle) return this.#K(e.param, "cannot apply expansion because the target selection is not multi-point."), this.#k(e);
		if (t.operation !== "replace") return this.#K(e.param, `uses unsupported operation "${t.operation}". Only "replace" is supported in this version.`), this.#k(e);
		if (!this.#N(e, "restore")) return this.#k(e);
		let r = this.#M(e.view);
		if (!r) return this.#A(e, "cannot apply expansion because the view does not expose data.");
		if (!r.completed) return this.#V(r), this.#k(e);
		let i = this.#B(t);
		if (!i) return this.#k(e);
		try {
			let e = Hx(tS(t), i);
			e = Wx(e, t.partitionBy, i);
			let n = Gx(e), a = [];
			return r.visitData((e) => {
				n(e) && a.push(e);
			}), Me(a);
		} catch (t) {
			return this.#K(e.param, `cannot apply expansion due to an error: ${t}`), this.#k(e);
		}
	}
	#B(e) {
		let t = e.origin, n = nt(this.#e, t.view);
		if (!n) {
			this.#J("the expansion origin view is missing in the current import scope.");
			return;
		}
		let r = Xx(n, t);
		switch (r.reason) {
			case "ok":
				if (!r.datum) {
					this.#J("the expansion origin datum is missing in current data.");
					return;
				}
				return r.datum;
			case "missingCollector":
				this.#J("the expansion origin view does not expose data.");
				return;
			case "collectorNotCompleted":
				this.#V(r.collector);
				return;
			case "invalidOriginKeyTuple":
				this.#J("the expansion origin key tuple is invalid.");
				return;
			case "missingEncodingKey":
				this.#J("the expansion origin view does not define encoding.key.");
				return;
			case "incompatibleOriginKeyTuple":
				this.#J("the expansion origin key tuple is incompatible with current encoding.key.");
				return;
			case "legacyKeyFieldsMismatch":
				this.#J(`the expansion origin key fields [${r.legacyKeyFields.join(", ")}] differ from current encoding.key [${r.keyFields.join(", ")}].`);
				return;
			case "lookupError":
				this.#J("failed to resolve expansion origin datum: " + String(r.error));
				return;
			default: throw Error("Unknown origin resolution status: " + JSON.stringify(r));
		}
	}
	#V(e) {
		if (this.#p.has(e)) return;
		this.#p.add(e);
		let t = e.observe(() => {
			this.#p.delete(e), t(), this.#F(this.#y());
		});
		this.#o.push(t);
	}
	#H(e, t, n) {
		for (let [r, i] of Object.entries(n)) if (i) {
			let n = r, a = e.getScaleResolution(n);
			t.intervals[r] = [a?.fromComplex ? a.fromComplex(i[0]) : i[0], a?.fromComplex ? a.fromComplex(i[1]) : i[1]];
		}
	}
	#U(e) {
		if (!e || e.type !== "datum" || !e.intervalSources) return;
		let t = nt(this.#e, e.view);
		if (!t) {
			this.#J("the source view is missing. Using stored coordinates instead.");
			return;
		}
		let n = this.#M(t);
		if (!n) {
			this.#J("the source view does not expose data. Using stored coordinates instead.");
			return;
		}
		let r;
		try {
			r = n.findDatumByKey([e.keyField], [e.key]);
		} catch (e) {
			this.#J(`an error occurred: ${e}`);
			return;
		}
		if (!r) {
			this.#J("the origin datum is missing. Using stored coordinates instead.");
			return;
		}
		let i = {};
		for (let [t, n] of Object.entries(e.intervalSources)) {
			let e = n.start, a = n.end ?? n.start;
			if (!e || !a) continue;
			let o = Ie(e), s = Ie(a);
			i[t] = [o(r), s(r)];
		}
		return i;
	}
	#W(e) {
		return JSON.stringify(e ?? []);
	}
	#G(e, t) {
		this.#$(`Parameter "${e.name}" ${t}`);
	}
	#K(e, t) {
		this.#$(`Selection "${e.name}" ${t}`);
	}
	#q(e, t) {
		this.#Q(`Selection "${e.name}" ${t}`);
	}
	#J(e) {
		this.#$(`Cannot resolve selection origin: ${e}`);
	}
	#Y(e, t) {
		this.#$(`Cannot restore parameter "${e}" in import scope ${this.#W(t)}. The parameter is missing or no longer unique in that scope. Check import names and parameter names.`);
	}
	#X(e, t) {
		let n = e.param;
		Re(n) && He(Je(n.select)) && (this.#N(e, "persist") || this.#u.add(t));
	}
	#Z(e, t) {
		let n = Je(e.select);
		return He(n) ? Ee(t) ? !t.datum : !tt(t) || t.data.size === 0 : Qe(n) ? !Fe(t) : !1;
	}
	#Q(e) {
		this.#l.has(e) || (this.#l.add(e), this.#s.add(e), !this.#d && (this.#d = !0, queueMicrotask(() => {
			this.#d = !1;
			let e = Array.from(this.#s);
			this.#s.clear(), e.length && q(R`<p>
                        Some interactive parameters cannot be saved to bookmarks
                        or provenance. The visualization is still usable, but
                        those selections will not be preserved.
                    </p>
                    <p>
                        To fix this, add <code>encoding.key</code> or set
                        <code>persist: false</code> on ephemeral params.
                    </p>
                    <ul>
                        ${e.map((e) => R`<li>${e}</li>`)}
                    </ul>`, {
				title: "Bookmark persistence warnings",
				type: "warning"
			});
		})));
	}
	#$(e) {
		this.#c.add(e), !this.#f && (this.#f = !0, queueMicrotask(() => {
			this.#f = !1;
			let e = Array.from(this.#c);
			this.#c.clear(), e.length && q(R`<p>
                        The visualization loaded, but some parameter state from
                        the bookmark could not be restored. Selections and bound
                        inputs may differ from the saved state.
                    </p>
                    <ul>
                        ${e.map((e) => R`<li>${e}</li>`)}
                    </ul>`, {
				title: "Parameter restore warnings",
				type: "warning"
			});
		}));
	}
};
function tS(e) {
	if ("rule" in e && e.rule) return e.rule;
	if ("predicate" in e && e.predicate) return e.predicate;
	throw Error("Point expansion payload must contain either 'rule' or 'predicate'.");
}
//#endregion
//#region ../app/src/state/paramActionInfo.js
var nS = /* @__PURE__ */ new WeakMap();
function rS(e, t) {
	let n = hg.actions.paramChange.match(e), r = hg.actions.expandPointSelection.match(e);
	if (!n && !r) return;
	let i = e.payload, a = i.selector, o = r && "rule" in i ? { rule: i.rule } : r ? { predicate: i.predicate } : {}, s = r ? {
		type: "pointExpand",
		operation: i.operation,
		partitionBy: i.partitionBy,
		origin: i.origin,
		...o
	} : i.value, c = i.origin, l = pS(lt, t, a), u = l ? l.view : void 0, d = u ? oS(u, t) : null, f = iS(e, u, a, s, c, t);
	return {
		title: d ? R`${f} in ${d}` : f,
		icon: fS(s)
	};
}
function iS(e, t, n, r, i, a) {
	let o = Lm(a, n);
	if (r.type === "value") return R`Set <strong>${o}</strong> =
            <strong>${sS(r.value)}</strong>${aS(i, a)}`;
	if (r.type === "point") return r.keys.length === 0 ? R`Clear selection
                <strong>${o}</strong> ${aS(i, a)}` : r.keys.length === 1 ? R`Select <strong>${o}</strong> =
                ${cS(lS(r.keys[0]))}${aS(i, a)}` : R`Select <strong>${o}</strong> (${cS(r.keys.length)}
            points)${aS(i, a)}`;
	if (r.type === "pointExpand") {
		let t = mS(r.operation), n = hS(SS(r), {
			action: e,
			root: a,
			origin: r.origin
		});
		return R`${t}
            <strong>${o}</strong>
            ${xS(r.partitionBy)} by ${n}`;
	}
	if (r.type === "interval") {
		let e = r.intervals ?? {}, n = e.x, s = e.y, c = dS(n && t ? Om(t, n) : uS(n), s ? uS(s) : null);
		return c ? R`Brush
            <strong>${o}</strong>
            ${c}${aS(i, a)}` : R`Clear selection
                <strong>${o}</strong> ${aS(i, a)}`;
	}
	return R`Update <strong>${o}</strong>`;
}
function aS(e, t) {
	if (!e || e.type !== "datum") return R``;
	let n = t ? pS(nt, t, e.view) : null;
	return n ? R` from ${oS(n, t)}` : R``;
}
function oS(e, t) {
	let n = (e.getTitleText ? e.getTitleText() : void 0) || e.explicitName || e.spec && e.spec.name || e.name || "view";
	return R`<strong>${Im(t, e, String(n))}</strong>`;
}
function sS(e) {
	return zt(e) || typeof e == "number" || typeof e == "boolean" ? String(e) : JSON.stringify(e);
}
function cS(e) {
	return R`<strong>${e}</strong>`;
}
function lS(e) {
	return e.length === 1 ? sS(e[0]) : "(" + e.map((e) => sS(e)).join(", ") + ")";
}
function uS(e) {
	return e ? `${e[0]} \u2013 ${e[1]}` : null;
}
function dS(e, t) {
	return e && t ? "(x: " + e + ", y: " + t + ")" : e ? "(" + e + ")" : t ? "(y: " + t + ")" : null;
}
function fS(e) {
	switch (e.type) {
		case "point":
		case "pointExpand": return Dr;
		case "interval": return di;
		case "value": return Fr;
		default: return;
	}
}
function pS(e, ...t) {
	try {
		return e(...t);
	} catch {
		return;
	}
}
function mS(e) {
	switch (e) {
		case "replace": return "Replace";
		case "add": return "Add expanded";
		case "remove": return "Remove expanded";
		case "toggle": return "Toggle expanded";
		default: return "Replace";
	}
}
function hS(e, t) {
	return gS(Ux(e), t);
}
function gS(e, t) {
	if (Bx(e)) return R`not (${gS(e.not, t)})`;
	if (zx(e)) return yS(e.and.map((e) => gS(e, t)), " and ");
	if (Rx(e)) return yS(e.or.map((e) => gS(e, t)), " or ");
	if (e.op === "eq") {
		if ("value" in e) return R`${_S(e.field)}
                <span class="operator">=</span>
                <strong>${sS(e.value)}</strong>`;
		if ("valueFromField" in e) {
			let n = bS(t.action, t.root, t.origin, e.valueFromField);
			if (n !== void 0) return R`${_S(e.field)}
                    <span class="operator">=</span>
                    <strong>${sS(n)}</strong>
                    (from clicked item)`;
			{
				let t = e.valueFromField === e.field ? "same as clicked item" : "same as clicked " + e.valueFromField;
				return R`${_S(e.field)}
                    <span class="operator">=</span>
                    <strong>${t}</strong>`;
			}
		}
	} else if (e.op === "in") return R`${_S(e.field)}
            <span class="operator">in</span>
            ${vS(e.values)}`;
	return R`predicate`;
}
function _S(e) {
	return R`<em>${e}</em>`;
}
function vS(e) {
	return R`{${e.map((e, t) => R`${t > 0 ? ", " : ""}<strong>${sS(e)}</strong>`)}}`;
}
function yS(e, t) {
	return R`${e.map((e, n) => R`${n > 0 ? t : ""}${e}`)}`;
}
function bS(e, t, n, r) {
	let i = nS.get(e);
	if (i?.has(r)) return i.get(r);
	if (!t) return;
	let a = pS(nt, t, n.view);
	if (!a) return;
	let o = Xx(a, n);
	if (o.reason !== "ok") return;
	let s = o.datum;
	if (!s) return;
	let c = Kx(r)(s);
	if (c !== void 0) return i || (i = /* @__PURE__ */ new Map(), nS.set(e, i)), i.set(r, c), c;
}
function xS(e) {
	if (!e?.length) return R` across all`;
	let t = e.map((e) => e.toLowerCase());
	return t.some((e) => e.includes("sample")) ? R` in current sample` : t.some((e) => e.includes("patient")) ? R` in current patient` : R` in current scope`;
}
function SS(e) {
	if ("rule" in e && e.rule) return e.rule;
	if ("predicate" in e && e.predicate) return e.predicate;
	throw Error("Point expansion payload must contain either 'rule' or 'predicate'.");
}
//#endregion
//#region ../app/src/viewSelectorConstraints.js
function CS(e) {
	let t = [...Tt(e)];
	return wS(e, t), TS(e, t), ES(e, t), t;
}
function wS(e, t) {
	Dt(e, (e) => {
		let n = kn(e);
		if (!(!n || typeof n != "object") && (typeof n.group != "string" || n.group.length === 0)) {
			let n = at(e);
			t.push({
				message: "Configurable visibility group must be a non-empty string in " + kS(n) + " for " + e.getPathString() + ".",
				scope: n
			});
		}
	});
}
function TS(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	Dt(e, (e) => {
		let i = at(e), a = OS(i);
		if (n.has(a) || (n.set(a, i), r.set(a, /* @__PURE__ */ new Map())), !mn(e)) return;
		let o = e.explicitName;
		if (!o) {
			if (!Dn(e)) return;
			t.push({
				message: "Configurable view must have an explicit name in " + kS(i) + ".",
				scope: i
			});
			return;
		}
		let s = r.get(a), c = s.get(o);
		c ? c.push(e) : s.set(o, [e]);
	});
	for (let [e, i] of r) {
		let r = n.get(e);
		for (let [e, n] of i) {
			if (n.length <= 1) continue;
			let i = n.map((e) => e.getPathString()).join(", ");
			t.push({
				message: "Configurable view name \"" + e + "\" is not unique within " + kS(r) + ". Found in: " + i + ".",
				scope: r
			});
		}
	}
}
function ES(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	Dt(e, (e) => {
		let t = _t(e), i = t ? t.name : void 0;
		if (typeof i != "string" || !i.length || !DS(e)) return;
		let a = at(e);
		if (!a.length) return;
		let o = a.slice(0, a.length - 1), s = OS(o);
		n.has(s) || (n.set(s, o), r.set(s, /* @__PURE__ */ new Map()));
		let c = r.get(s);
		c.set(i, (c.get(i) ?? 0) + 1);
	});
	for (let [e, i] of r) {
		let r = n.get(e);
		for (let [e, n] of i) n <= 1 || t.push({
			message: "Import instance name \"" + e + "\" is used multiple times for addressable instances in " + kS(r) + ".",
			scope: r
		});
	}
}
function DS(e) {
	let t = !1;
	return Dt(e, (e) => {
		if (mn(e) && (e.explicitName || Dn(e))) return t = !0, We;
	}), t;
}
function OS(e) {
	return JSON.stringify(e);
}
function kS(e) {
	return e.length ? "import scope [" + e.join(" / ") + "]" : "import scope (root)";
}
//#endregion
//#region ../app/src/state/selectionExpansionContextMenu.js
function AS({ viewRoot: e, intentExecutor: t }) {
	let n = !1, r = (r) => {
		if (r.stopped || jS(r.target)) return;
		let i = og(e, e.context.getCurrentHover());
		if (i.status === "disabled" && i.reason === "multiplePointSelectionParams") {
			n ||= (console.warn("Selection expansion is disabled because multiple multi-point selection parameters are configured in the same UnitView."), !0);
			return;
		}
		i.status === "available" && (Id({ items: [_g(i.context, (e) => t.dispatch(e))] }, r.mouseEvent), r.stopPropagation());
	};
	return e.addInteractionListener("contextmenu", r), () => e.removeInteractionListener("contextmenu", r);
}
function jS(e) {
	return e ? e.getLayoutAncestors().some((e) => e instanceof Tg) : !1;
}
//#endregion
//#region ../app/src/appKeyboardShortcuts.js
function MS({ viewRoot: e, shortcuts: t }) {
	e.context.addKeyboardListener("keydown", (e) => PS(e, t));
}
function NS({ provenance: e, focusSearchField: t }) {
	return [{
		code: "KeyZ",
		isEnabled: () => e.isUndoable(),
		run: () => (e.undo(), !0)
	}, {
		code: "KeyF",
		run: () => t()
	}];
}
function PS(e, t) {
	if (e.defaultPrevented) return !1;
	for (let n of t) if (FS(e, n.code) && !(n.allowEditableTarget !== !0 && IS(e.target)) && !(n.isEnabled && !n.isEnabled()) && n.run(e) !== !1) return e.preventDefault(), !0;
	return !1;
}
function FS(e, t) {
	return e.code == t && !e.repeat && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
}
function IS(e) {
	let t = e;
	if (!e || typeof e != "object" || typeof t.tagName != "string") return !1;
	if (t.isContentEditable === !0) return !0;
	let n = t.tagName.toUpperCase();
	return n == "INPUT" || n == "TEXTAREA" || n == "SELECT" || typeof t.closest == "function" && !!t.closest.call(e, "input, textarea, select, [contenteditable=true], [contenteditable='true']");
}
//#endregion
//#region ../app/src/appUiRegistry.js
var LS = class extends EventTarget {
	constructor() {
		super(), this.toolbarButtons = /* @__PURE__ */ new Set(), this.toolbarMenuItems = /* @__PURE__ */ new Set(), this.#n = void 0, this.#r = void 0;
	}
	toolbarButtons;
	toolbarMenuItems;
	#e = /* @__PURE__ */ new Map();
	#t = void 0;
	#n;
	#r;
	attachAppShell(e) {
		this.#n = e.querySelector(".genome-spy-side-panel-host") ?? this.#i(e), typeof ResizeObserver == "function" && (this.#r?.disconnect(), this.#r = new ResizeObserver(() => {
			this.#t && this.#a();
		}), this.#r.observe(e)), this.#a();
	}
	dispose() {
		this.#r?.disconnect(), this.#r = void 0;
		for (let e of this.#e.values()) e.element.remove();
		this.#e.clear(), this.#t = void 0, this.#n = void 0;
	}
	registerToolbarButton(e) {
		return this.toolbarButtons.add(e), this.#s(), () => {
			this.toolbarButtons.delete(e) && this.#s();
		};
	}
	registerToolbarMenuItem(e) {
		return this.toolbarMenuItems.add(e), this.#s(), () => {
			this.toolbarMenuItems.delete(e) && this.#s();
		};
	}
	registerSidePanel(e) {
		return this.#e.set(e.id, e), this.#a(), {
			show: () => {
				this.#t = e.id, this.#a();
			},
			hide: () => {
				this.#t === e.id && (this.#t = void 0, this.#a());
			},
			toggle: () => this.#t === e.id ? (this.#t = void 0, this.#a(), !1) : (this.#t = e.id, this.#a(), !0),
			isVisible: () => this.#t === e.id,
			dispose: () => {
				this.#e.delete(e.id) && (this.#t === e.id && (this.#t = void 0), e.element.remove(), this.#a());
			}
		};
	}
	#i(e) {
		let t = document.createElement("div");
		return t.className = "genome-spy-side-panel-host", e.append(t), t;
	}
	#a() {
		if (!this.#n) return;
		let e = this.#t ? this.#e.get(this.#t) : void 0;
		for (let t of this.#e.values()) t !== e && this.#c(t.element), t.element.parentElement !== this.#n && this.#n.append(t.element), t.element.hidden = t !== e;
		if (!e) {
			this.#n.classList.remove("is-open"), this.#n.style.removeProperty("width"), this.#s();
			return;
		}
		this.#n.classList.add("is-open"), this.#n.style.width = e.preferredWidth ?? "min(36vw, 600px)", this.#o(), this.#s();
	}
	#o() {
		if (!this.#n) return;
		let e = Math.round(this.#n.getBoundingClientRect().width);
		this.#n.style.width = e + "px";
	}
	#s() {
		this.dispatchEvent(new Event("change"));
	}
	#c(e) {
		let t = document.activeElement;
		if (!t || t === document.body || !e.contains(t)) return;
		let n = t;
		for (; n.shadowRoot?.activeElement;) n = n.shadowRoot.activeElement;
		e.contains(n) && n instanceof HTMLElement && n.blur();
	}
};
//#endregion
//#region ../app/src/app.js
h.mergeFacets = mx;
var RS = class {
	#e;
	#t = /* @__PURE__ */ new Set();
	#n = !1;
	constructor(e, t, n = {}) {
		this.rootSpec = t, this.options = {
			embedMode: "standalone",
			...n,
			inputBindingContainer: "none"
		}, this.ui = new LS(), this.#r(), this.#a(e), this.#i(), E(R`<div class="genome-spy-app">
                <genome-spy-toolbar .app=${this}></genome-spy-toolbar>
                <div class="genome-spy-workspace">
                    <div class="genome-spy-container"></div>
                    ${this.isEmbedded() ? P : R`<div class="genome-spy-side-panel-host"></div>`}
                </div>
            </div>`, this.appContainer), this.isEmbedded() || this.ui.attachAppShell(this.appContainer.querySelector(".genome-spy-app")), this.appContainer.querySelector(".genome-spy-app").addEventListener("query-dependency", (e) => {
			e.detail.name == "app" && (e.detail.setter(this), e.stopPropagation());
		}), this.genomeSpy = new D(this.appContainer.getElementsByClassName("genome-spy-container")[0], this.rootSpec, this.options), this.debug = {
			getViewRoot: () => this.genomeSpy?.viewRoot,
			getModules: () => this.getDebugModules()
		}, this.genomeSpy.viewFactory.addViewType(_m, ((e, t, n, r, i) => new Tg(e, t, n, r, i, this.provenance, this.intentExecutor, $b(this)))), this.#o();
	}
	getAgentApi() {
		return this.#e ||= import("./agentApi-D36QXXDg.js").then((e) => e.t).then((e) => e.createAgentApi(this)), this.#e;
	}
	async getDebugModules() {
		return import("./debug-DJKug_38.js");
	}
	#r() {
		this.store = xx(), this.intentExecutor = new _x(this.store), this.provenance = new dx(this.store), this.intentPipeline = new Sx({
			store: this.store,
			provenance: this.provenance,
			intentExecutor: this.intentExecutor
		}), tm(this.store, hg.name);
	}
	#i() {
		this.localBookmarkDatabase = this.isEmbedded() ? void 0 : typeof this.rootSpec.specId == "string" ? new n_(this.rootSpec.specId) : void 0, this.globalBookmarkDatabase = void 0;
	}
	#a(e) {
		this.appContainer = e, this.isFullPage() ? (this.appContainer.style.margin = "0", this.appContainer.style.padding = "0", this.appContainer.style.overflow = "hidden", BS(gr)) : this.appContainer.style.position = "relative";
	}
	#o() {
		let e = {}, t = (t) => t.viewSettings?.visibilities ?? e, n = e, r, i = e, a = () => {
			let e = t(this.store.getState()), a = this.genomeSpy.viewRoot;
			return e === n && a === r ? i : (n = e, r = a, i = a ? Ln(a, e) : e, i);
		}, o = this.genomeSpy.viewVisibilityPredicate;
		this.genomeSpy.viewVisibilityPredicate = (e) => {
			let t = Tn(a(), e);
			return t === void 0 ? o(e) : t;
		};
	}
	#s() {
		let e = this.genomeSpy.viewRoot;
		if (!e) return;
		let t = CS(e);
		t.length && q(R`<p>
                    The visualization loaded, but the view specification has
                    addressing problems. View visibility toggles, bookmarks, and
                    parameter bindings may be disabled or behave incorrectly
                    until these issues are fixed.
                </p>
                <ul>
                    ${t.map((e) => R`<li>${e.message}</li>`)}
                </ul>`, {
			title: "View specification warnings",
			type: "warning"
		});
	}
	toggleFullScreen() {
		document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : this.appContainer.requestFullscreen();
	}
	isFullPage() {
		return this.appContainer == document.body;
	}
	isEmbedded() {
		return this.options.embedMode === "embedded";
	}
	finalize() {
		if (!this.#n) {
			this.#n = !0;
			for (let e of Array.from(this.#t).reverse()) e();
			this.#t.clear(), this.ui.dispose();
		}
	}
	#c(e) {
		this.#t.add(e);
	}
	async launch() {
		let e = this.isEmbedded() ? Promise.resolve([]) : this.rootSpec.bookmarks?.remote ? ae({ baseURL: this.rootSpec.baseUrl }).load(this.rootSpec.bookmarks.remote.url).then((e) => Promise.resolve(JSON.parse(e))) : Promise.resolve([]);
		if (this.isEmbedded() || await this.#l(e), !await this.genomeSpy.launch()) return;
		this.#s();
		let t = this.genomeSpy.viewRoot;
		if (!t) throw Error("No view root after launch");
		this.paramProvenanceBridge = new eS({
			root: t,
			store: this.store,
			intentExecutor: this.intentExecutor
		}), t.registerDisposer(() => {
			this.paramProvenanceBridge.dispose();
		}), this.provenance.addActionInfoSource((e) => rS(e, t)), MS({
			viewRoot: t,
			shortcuts: NS({
				provenance: this.provenance,
				focusSearchField: () => {
					let e = this.appContainer.querySelector("genome-spy-search-field");
					return e && "focusInput" in e && typeof e.focusInput == "function" ? (e.focusInput(), !0) : !1;
				}
			})
		}), t.registerDisposer(AS({
			viewRoot: t,
			intentExecutor: this.intentExecutor
		}));
		let n = this.getSampleView();
		if (n) try {
			await kx(n, this.intentPipeline);
		} catch (e) {
			console.error(e), q("Could not load initial metadata sources: " + String(e), {
				title: "Metadata source warning",
				type: "warning"
			});
		}
		if (this.appContainer.querySelector("canvas").setAttribute("tabindex", "-1"), this.#c(Ep(this.store, (e) => e.viewSettings?.visibilities, Dp(() => {
			if (this.#n) return;
			this.genomeSpy.initializeVisibleViewData(), this.genomeSpy.viewRoot._invalidateCacheByPrefix("size", "progeny");
			let e = this.genomeSpy.viewRoot.context;
			VS(this.genomeSpy.viewRoot), e.highlightView(null), e.requestLayoutReflow();
		}))), this.#c(Px({
			store: this.store,
			intentPipeline: this.intentPipeline,
			provenance: this.provenance
		})), !this.isEmbedded()) {
			try {
				await this.#f(e);
			} catch (e) {
				throw Error(`Cannot load remote bookmarks: ${e}`, { cause: e });
			}
			try {
				await this._restoreStateFromUrlOrBookmark();
			} catch (e) {
				q(e.toString());
			}
			let t = () => this._restoreStateFromUrl().catch((e) => q(e.toString()));
			window.addEventListener("hashchange", t, !1), this.#c(() => window.removeEventListener("hashchange", t, !1));
			let n = ge(() => {
				this.#n || this._updateStateToUrl();
			}, 500, !1);
			this.#c(this.store.subscribe(n));
			for (let [, e] of this.genomeSpy.getNamedScaleResolutions()) e.isZoomable() && (e.addEventListener("domain", n), this.#c(() => e.removeEventListener("domain", n)));
		}
		let r = pt(this.genomeSpy.spec.description ?? []);
		this.isFullPage() && r.length > 0 && (document.title = "GenomeSpy - " + r), this.store.dispatch(vx.actions.setInitialized());
	}
	async #l(e) {
		let t = window.location.hash;
		if (t) try {
			let n = await this.#u(t, e);
			if (n?.viewSettings) {
				let e = Un(n.viewSettings);
				this.store.dispatch($n.actions.setViewSettings(e));
			}
		} catch {}
	}
	async _restoreStateFromUrlOrBookmark() {
		let e = this.rootSpec.bookmarks?.remote, t = this.globalBookmarkDatabase;
		if (!await this._restoreStateFromUrl() && e && t) {
			let n = e.initialBookmark ?? (e.tour && (await t.getNames())[0]);
			if (n) {
				let r = await t.get(n);
				if (!r) throw Error(`No such bookmark: ${n}`);
				e.tour ? await ix(r, this, {
					mode: "tour",
					database: t,
					afterTourBookmark: e.afterTourBookmark
				}) : await tx(r, this);
			}
		}
	}
	_updateStateToUrl() {
		let e = {
			actions: [],
			scaleDomains: {}
		}, t = this.provenance.getBookmarkableActionHistory();
		t?.length && (e.actions = t), e.scaleDomains = Zb(this.genomeSpy, (e) => e.isZoomed());
		let n = this.store.getState().viewSettings, r = this.genomeSpy.viewRoot;
		if (r) {
			let t = bn(r, n);
			t && (e.viewSettings = t);
		}
		let i = e.actions.length || Object.keys(e.scaleDomains).length || e.viewSettings ? mp(e) : "";
		window.history.replaceState(void 0, document.title, window.location.pathname + window.location.search + i);
	}
	async _restoreStateFromUrl() {
		let e = window.location.hash;
		if (e && e.length > 0) try {
			let t = await this.#d(e);
			if (!t) return !1;
			let { entry: n, mode: r, database: i, afterTourBookmark: a } = t;
			return await ix(n, this, {
				mode: r,
				database: i,
				afterTourBookmark: a
			}), !0;
		} catch (e) {
			console.error(e), q(R`<p>Cannot restore the state:</p>
                        <p>${e}</p>`);
		}
		return !1;
	}
	async #u(e, t) {
		if (e.startsWith("#bookmark:")) {
			if (!this.rootSpec.bookmarks?.remote) return;
			let n = this.globalBookmarkDatabase ?? (t ? await this.#f(t) : void 0);
			if (!n) return;
			let r = e.match(/^#bookmark:(.+)$/)?.[1];
			if (!r) return;
			let i = (await n.getNames()).find((e) => e.replaceAll(" ", "-") == r);
			if (!i) throw Error(`No such bookmark: ${r}`);
			let a = await n.get(i);
			if (!a) throw Error(`No such bookmark: ${i}`);
			return a;
		}
		return hp(e);
	}
	async #d(e) {
		let t = await this.#u(e);
		if (t) {
			if (e.startsWith("#bookmark:")) {
				let e = this.rootSpec.bookmarks?.remote;
				return {
					entry: t,
					mode: "tour",
					database: this.globalBookmarkDatabase,
					afterTourBookmark: e?.afterTourBookmark
				};
			}
			return {
				entry: t,
				mode: "shared",
				database: this.localBookmarkDatabase
			};
		}
	}
	async #f(e) {
		let t = await e;
		if (t.length) return this.globalBookmarkDatabase ||= new gx(t, { baseUrl: zS(this.rootSpec) }), this.globalBookmarkDatabase;
	}
	getSampleView() {
		if (!this.genomeSpy?.viewRoot) return;
		let e;
		return this.genomeSpy.viewRoot.visit((t) => {
			if (t instanceof Tg) return e = t, We;
		}), e;
	}
};
function zS(e) {
	let t = e.bookmarks?.remote;
	if (t) return Ne(Ae(e.baseUrl, t.url));
}
function BS(e) {
	let t = document.querySelector("head"), n = document.createElement("link");
	n.setAttribute("rel", "shortcut icon"), n.setAttribute("href", e), t.appendChild(n);
}
function VS(e) {
	e.visit((e) => {
		e.isVisible() || e.facetCoords.clear();
	});
}
//#endregion
//#region ../app/src/index.js
async function HS(e, t, n = {}) {
	let r = !0, i = () => r, a;
	if (zt(e)) {
		if (a = document.querySelector(e), !a) throw Error(`No such element: ${e}`);
	} else if (e instanceof HTMLElement) a = e;
	else throw Error(`Invalid element: ${e}`);
	let o, s, c = [];
	try {
		let e = nn(t) ? t : await ce(t);
		e.baseUrl ??= "", e.padding ??= 10;
		let { plugins: r = [], ...i } = {
			powerPreference: "high-performance",
			...n
		};
		s = new RS(a, e, i), o = s.genomeSpy, c = await WS(s, r), US(o, i), await s.launch();
	} catch (e) {
		a.innerText = e.toString(), console.error(e);
	}
	return {
		views: te(o, i),
		datasets: me(o, i),
		debug: s.debug,
		finalize() {
			r = !1;
			let e = c;
			c = [];
			for (let t = e.length - 1; t >= 0; --t) e[t]();
			for (s?.finalize(), o?.destroy(), o = void 0; a.firstChild;) a.firstChild.remove();
		},
		addEventListener(e, t) {
			o.addEventListener(e, t);
		},
		removeEventListener(e, t) {
			o.removeEventListener(e, t);
		},
		getScaleResolutionByName(e) {
			return o.getNamedScaleResolutions().get(e);
		},
		getParam: o.getParam.bind(o),
		awaitVisibleLazyData: o.awaitVisibleLazyData.bind(o),
		getRenderedBounds: o.getRenderedBounds.bind(o),
		updateNamedData: o.updateNamedData.bind(o),
		getLogicalCanvasSize: o.getLogicalCanvasSize.bind(o),
		exportCanvas: o.exportCanvas.bind(o)
	};
}
function US(e, t) {
	t.namedDataProvider && e.registerNamedDataProvider(t.namedDataProvider);
}
async function WS(e, t) {
	let n = [];
	try {
		for (let r of t) {
			let t = await r.install(e);
			typeof t == "function" && n.push(t);
		}
	} catch (e) {
		for (let e = n.length - 1; e >= 0; --e) n[e]();
		throw e;
	}
	return n;
}
//#endregion
//#region ../app/dist/style.css?inline
var GS = ":root,:host{--fa-font-solid:normal 900 1em/1 \"Font Awesome 6 Free\";--fa-font-regular:normal 400 1em/1 \"Font Awesome 6 Free\";--fa-font-light:normal 300 1em/1 \"Font Awesome 6 Pro\";--fa-font-thin:normal 100 1em/1 \"Font Awesome 6 Pro\";--fa-font-duotone:normal 900 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-light:normal 300 1em/1 \"Font Awesome 6 Duotone\";--fa-font-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Duotone\";--fa-font-brands:normal 400 1em/1 \"Font Awesome 6 Brands\";--fa-font-sharp-solid:normal 900 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-regular:normal 400 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-light:normal 300 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-thin:normal 100 1em/1 \"Font Awesome 6 Sharp\";--fa-font-sharp-duotone-solid:normal 900 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-regular:normal 400 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-light:normal 300 1em/1 \"Font Awesome 6 Sharp Duotone\";--fa-font-sharp-duotone-thin:normal 100 1em/1 \"Font Awesome 6 Sharp Duotone\"}svg.svg-inline--fa:not(:root),svg.svg-inline--fa:not(:host){box-sizing:content-box;overflow:visible}.svg-inline--fa{display:var(--fa-display,inline-block);vertical-align:-.125em;height:1em;overflow:visible}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.07143em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-pull-left{margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-li{width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{margin:auto;position:absolute;inset:0}.fa-layers-counter,.fa-layers-text{text-align:center;display:inline-block;position:absolute}.fa-layers{text-align:center;vertical-align:-.125em;width:1em;height:1em;display:inline-block;position:relative}.fa-layers svg.svg-inline--fa{transform-origin:50%}.fa-layers-text{transform-origin:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.fa-layers-counter{background-color:var(--fa-counter-background-color,#ff253a);border-radius:var(--fa-counter-border-radius,1em);box-sizing:border-box;color:var(--fa-inverse,#fff);line-height:var(--fa-counter-line-height,1);max-width:var(--fa-counter-max-width,5em);min-width:var(--fa-counter-min-width,1.5em);padding:var(--fa-counter-padding,.25em .5em);right:var(--fa-right,0);text-overflow:ellipsis;top:var(--fa-top,0);transform:scale(var(--fa-counter-scale,.25));transform-origin:100% 0;overflow:hidden}.fa-layers-bottom-right{bottom:var(--fa-bottom,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:100% 100%;top:auto}.fa-layers-bottom-left{bottom:var(--fa-bottom,0);left:var(--fa-left,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:0 100%;top:auto;right:auto}.fa-layers-top-right{top:var(--fa-top,0);right:var(--fa-right,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:100% 0}.fa-layers-top-left{left:var(--fa-left,0);right:auto;top:var(--fa-top,0);transform:scale(var(--fa-layers-scale,.25));transform-origin:0 0}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{vertical-align:.225em;font-size:.625em;line-height:.1em}.fa-xs{vertical-align:.125em;font-size:.75em;line-height:.08333em}.fa-sm{vertical-align:.05357em;font-size:.875em;line-height:.07143em}.fa-lg{vertical-align:-.075em;font-size:1.25em;line-height:.05em}.fa-xl{vertical-align:-.125em;font-size:1.5em;line-height:.04167em}.fa-2xl{vertical-align:-.1875em;font-size:2em;line-height:.03125em}.fa-fw{text-align:center;width:1.25em}.fa-ul{margin-left:var(--fa-li-margin,2.5em);padding-left:0;list-style-type:none}.fa-ul>li{position:relative}.fa-li{left:calc(-1 * var(--fa-li-width,2em));text-align:center;width:var(--fa-li-width,2em);line-height:inherit;position:absolute}.fa-border{border-color:var(--fa-border-color,#eee);border-radius:var(--fa-border-radius,.1em);border-style:var(--fa-border-style,solid);border-width:var(--fa-border-width,.08em);padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{animation-name:fa-beat;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-bounce{animation-name:fa-bounce;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.28, .84, .42, 1))}.fa-fade{animation-name:fa-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4, 0, .6, 1))}.fa-beat-fade{animation-name:fa-beat-fade;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4, 0, .6, 1))}.fa-flip{animation-name:fa-flip;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-shake{animation-name:fa-shake;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin{animation-name:fa-spin;animation-delay:var(--fa-animation-delay,0s);animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,2s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{animation-name:fa-spin;animation-direction:var(--fa-animation-direction,normal);animation-duration:var(--fa-animation-duration,1s);animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-bounce,.fa-fade,.fa-beat-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse{transition-duration:0s;transition-delay:0s;animation-duration:1ms;animation-iteration-count:1;animation-delay:-1ms}}@keyframes fa-beat{0%,90%{transform:scale(1)}45%{transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-bounce{0%{transform:scale(1)translateY(0)}10%{transform:scale(var(--fa-bounce-start-scale-x,1.1), var(--fa-bounce-start-scale-y,.9)) translateY(0)}30%{transform:scale(var(--fa-bounce-jump-scale-x,.9), var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))}50%{transform:scale(var(--fa-bounce-land-scale-x,1.05), var(--fa-bounce-land-scale-y,.95)) translateY(0)}57%{transform:scale(1, 1) translateY(var(--fa-bounce-rebound,-.125em))}64%{transform:scale(1)translateY(0)}to{transform:scale(1)translateY(0)}}@keyframes fa-fade{50%{opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-beat-fade{0%,to{opacity:var(--fa-beat-fade-opacity,.4);transform:scale(1)}50%{opacity:1;transform:scale(var(--fa-beat-fade-scale,1.125))}}@keyframes fa-flip{50%{transform:rotate3d(var(--fa-flip-x,0), var(--fa-flip-y,1), var(--fa-flip-z,0), var(--fa-flip-angle,-180deg))}}@keyframes fa-shake{0%{transform:rotate(-15deg)}4%{transform:rotate(15deg)}8%,24%{transform:rotate(-18deg)}12%,28%{transform:rotate(18deg)}16%{transform:rotate(-22deg)}20%{transform:rotate(22deg)}32%{transform:rotate(-12deg)}36%{transform:rotate(12deg)}40%,to{transform:rotate(0)}}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fa-rotate-90{transform:rotate(90deg)}.fa-rotate-180{transform:rotate(180deg)}.fa-rotate-270{transform:rotate(270deg)}.fa-flip-horizontal{transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}.fa-rotate-by{transform:rotate(var(--fa-rotate-angle,0))}.fa-stack{vertical-align:middle;width:2.5em;height:2em;display:inline-block;position:relative}.fa-stack-1x,.fa-stack-2x{z-index:var(--fa-stack-z-index,auto);margin:auto;position:absolute;inset:0}.svg-inline--fa.fa-stack-1x{width:1.25em;height:1em}.svg-inline--fa.fa-stack-2x{width:2.5em;height:2em}.fa-inverse{color:var(--fa-inverse,#fff)}.sr-only,.fa-sr-only,.sr-only-focusable:not(:focus),.fa-sr-only-focusable:not(:focus){clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}:root{--gs-font-family:system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--gs-font-size:14px;--gs-basic-spacing:10px}.gs-input-binding{grid-template-columns:max-content max-content;justify-items:start;gap:.3em 1em;display:grid}.gs-input-binding>select,.gs-input-binding>input:not([type=checkbox]){width:100%}.gs-input-binding input[type=range]+span{font-variant-numeric:tabular-nums;min-width:2.2em;margin-left:.3em;display:inline-block}.gs-input-binding input[type=range],.gs-input-binding input[type=radio]{vertical-align:text-bottom}.gs-input-binding .radio-group{align-items:center;display:flex}.gs-input-binding .description{color:#777;grid-column:1/-1;max-width:26em;margin-top:-.5em;font-size:90%}.gs-input-bindings{flex-basis:content;padding:10px;font-size:14px}.gs-menu,.gs-context-menu,.gs-dropdown-menu{z-index:100;cursor:default;background:#f6f6f6;border:#e0e0e0;border-radius:2px;max-height:calc(100vh - 60px);margin:0;padding:7px 0;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:13px;line-height:22px;overflow-y:auto;box-shadow:0 3px 15px #00000036}.gs-menu li,.gs-context-menu li,.gs-dropdown-menu li{padding:0;list-style:none;display:block;position:relative}.gs-menu li.active>:is(a:first-child,.submenu-item),.gs-context-menu li.active>:is(a:first-child,.submenu-item),.gs-dropdown-menu li.active>:is(a:first-child,.submenu-item){background-color:#e8e8e8}.gs-menu li>:is(a:first-child,label,.submenu-item):hover,.gs-context-menu li>:is(a:first-child,label,.submenu-item):hover,.gs-dropdown-menu li>:is(a:first-child,label,.submenu-item):hover{background-color:#e0e0e0}.gs-menu li>span.disabled-item,.gs-menu li>a:first-child,.gs-context-menu li>span.disabled-item,.gs-context-menu li>a:first-child,.gs-dropdown-menu li>span.disabled-item,.gs-dropdown-menu li>a:first-child{display:block}.gs-menu li>span.disabled-item svg:first-child,.gs-menu li>a:first-child svg:first-child,.gs-context-menu li>span.disabled-item svg:first-child,.gs-context-menu li>a:first-child svg:first-child,.gs-dropdown-menu li>span.disabled-item svg:first-child,.gs-dropdown-menu li>a:first-child svg:first-child,.gs-menu li>.submenu-item svg:first-child,.gs-context-menu li>.submenu-item svg:first-child,.gs-dropdown-menu li>.submenu-item svg:first-child{width:1em;margin-right:.2em}.gs-menu .context,.gs-context-menu .context,.gs-dropdown-menu .context{color:#666;font-size:.9em}.gs-menu .context:before,.gs-context-menu .context:before,.gs-dropdown-menu .context:before{content:\"(\"}.gs-menu .context:after,.gs-context-menu .context:after,.gs-dropdown-menu .context:after{content:\")\"}.gs-menu .menu-divider,.gs-context-menu .menu-divider,.gs-dropdown-menu .menu-divider{border-top:1px solid #e0e0e0;margin:5px 0}.gs-menu .menu-header,.gs-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label),.gs-context-menu .menu-header,.gs-context-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label),.gs-dropdown-menu .menu-header,.gs-dropdown-menu li>:is(span.disabled-item,a:first-child,.submenu-item,label){padding-left:15px;padding-right:15px}.gs-menu .menu-header,.gs-context-menu .menu-header,.gs-dropdown-menu .menu-header{color:#666;font-size:12px}.gs-menu li>:is(div.submenu-item,.choice-item),.gs-context-menu li>:is(div.submenu-item,.choice-item),.gs-dropdown-menu li>:is(div.submenu-item,.choice-item){justify-content:space-between;align-items:center;display:flex}.gs-menu li>:is(div.submenu-item,.choice-item)>:first-child,.gs-context-menu li>:is(div.submenu-item,.choice-item)>:first-child,.gs-dropdown-menu li>:is(div.submenu-item,.choice-item)>:first-child{flex-grow:1}.gs-menu li>.submenu-item:after,.gs-context-menu li>.submenu-item:after,.gs-dropdown-menu li>.submenu-item:after{content:\"\";border-top:.4em solid #0000;border-bottom:.4em solid #0000;border-left:.4em solid #000;width:0;height:0;margin-left:1em}.gs-menu li .kbd-shortcut,.gs-context-menu li .kbd-shortcut,.gs-dropdown-menu li .kbd-shortcut{color:#666;background-color:#ffffff80;border:1px solid #aaa;border-bottom-width:2px;border-radius:3px;margin-left:.5em;padding:3px;font-size:.9em;line-height:.7em}.gs-menu li>.disabled-item,.gs-context-menu li>.disabled-item,.gs-dropdown-menu li>.disabled-item{color:#999}.gs-menu a.menu-ellipsis,.gs-context-menu a.menu-ellipsis,.gs-dropdown-menu a.menu-ellipsis{color:#707070;background-color:#e0e0e0;border-radius:3em;align-items:center;height:22px;padding:0;display:flex;position:absolute;top:0;right:7.5px}.gs-menu a.menu-ellipsis svg,.gs-context-menu a.menu-ellipsis svg,.gs-dropdown-menu a.menu-ellipsis svg{width:22px;margin:0}.gs-menu a.menu-ellipsis:hover,.gs-context-menu a.menu-ellipsis:hover,.gs-dropdown-menu a.menu-ellipsis:hover{background-color:#e9e9e9}.gs-menu li:not(:hover) a.menu-ellipsis,.gs-context-menu li:not(:hover) a.menu-ellipsis,.gs-dropdown-menu li:not(:hover) a.menu-ellipsis{display:none}.gs-menu .gs-input-binding,.gs-context-menu .gs-input-binding,.gs-dropdown-menu .gs-input-binding{margin:0 15px;line-height:normal}.gs-menu .gs-input-binding .description,.gs-context-menu .gs-input-binding .description,.gs-dropdown-menu .gs-input-binding .description{margin-bottom:.2em}.gs-dropdown-menu-right{right:0}.gs-context-menu-backdrop{z-index:100;position:fixed;inset:0}.gs-context-menu{z-index:100;position:fixed}.gs-dropdown-menu{z-index:1;width:max-content;display:none;position:absolute;overflow:auto}.gs-dropdown-menu ul{padding-left:1.5em;list-style:none}.gs-dropdown-menu>li>ul{padding-left:0}label.checkbox{align-items:center;display:flex}label.checkbox input[type=checkbox]{flex:none;margin-right:.5em}:root{--gs-theme-primary:#6c82ab;--gs-theme-on-primary:#fff}.genome-spy-app{flex-direction:column;display:flex;position:absolute;inset:0}body>.genome-spy-app{background-color:#fff}.genome-spy-app{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:14px}.genome-spy-app .genome-spy-workspace{flex:auto;grid-template-columns:minmax(0,1fr) auto;min-width:0;min-height:0;display:grid}.genome-spy-app .genome-spy-container{min-width:0;min-height:0;position:relative;overflow:hidden}.genome-spy-app .genome-spy-side-panel-host{border-left:1px solid var(--gs-dialog-stroke-color,#d0d0d0);min-height:0;display:none;overflow:hidden}.genome-spy-app .genome-spy-side-panel-host.is-open{opacity:1;transition:opacity .26s,transform .28s;display:block;transform:translate(0)}@starting-style{.genome-spy-app .genome-spy-side-panel-host.is-open{opacity:0;transform:translate(20px)}}@media (prefers-reduced-motion:reduce){.genome-spy-app .genome-spy-side-panel-host.is-open{transition:none}}.gs-toolbar,.gs-toolbar .btn-group{flex-direction:row;align-items:center;display:flex}.gs-toolbar{--gs-toolbar-bg:var(--gs-theme-primary);--gs-toolbar-fg:var(--gs-theme-on-primary);--gs-toolbar-bg-hi:oklch(from var(--gs-toolbar-bg) calc(l + .06) c h);--gs-toolbar-bg-lo:oklch(from var(--gs-toolbar-bg) calc(l - .06) c h);--gs-toolbar-bg-dim:oklch(from var(--gs-toolbar-bg) calc(l - .05) c h);z-index:1;background-color:var(--gs-toolbar-bg);border-top:1px solid var(--gs-toolbar-bg-hi);border-bottom:1px solid var(--gs-toolbar-bg-lo);height:38px;box-shadow:0 0 3px #00000080}.gs-toolbar .spacer{flex-grow:1}.gs-toolbar .logo{display:block}.gs-toolbar .logo img{vertical-align:middle;width:34px}.gs-toolbar .vis-title,.gs-toolbar .version a{color:var(--gs-toolbar-fg);text-shadow:0 1px 2px #0003;font-weight:400}.gs-toolbar .version a{opacity:.5;font-size:80%;text-decoration:none}.gs-toolbar .version a:visited{color:var(--gs-toolbar-fg)}.gs-toolbar .search-input{background-color:var(--gs-toolbar-bg-dim);color:var(--gs-toolbar-fg);border:1px solid oklch(from var(--gs-toolbar-bg) calc(l - .1) c h);width:260px;box-shadow:0px 1px 3px #0000001a inset, 1px 1px 0px oklch(from var(--gs-toolbar-bg) calc(l + .04) c h);text-shadow:0 1px 2px #0000004d;outline:none;padding:3px 6px;font-size:1em;position:relative}.gs-toolbar .search-help{box-sizing:border-box;z-index:1000;visibility:hidden;background:#f6f6f6;border:none;padding:10px;font-size:90%;position:absolute;box-shadow:0 3px 14px #00000026}.gs-toolbar .search-help>:first-child{margin-top:0}.gs-toolbar .search-help>:last-child{margin-bottom:0}.gs-toolbar .search-help{opacity:0;transition:opacity .2s,transform .2s ease-in-out,visibility .2s;transform:translateY(13px)}.gs-toolbar .search-help p{margin-bottom:.5em}.gs-toolbar .search-help ul{margin-top:.5em;padding-left:2.5em}.gs-toolbar .search-help li{cursor:pointer}.gs-toolbar .search:focus-within .search-help{opacity:1;visibility:visible;transform:translateY(3px)}.gs-toolbar>*{padding-left:10px}.gs-toolbar>:last-child{margin-right:10px}.gs-toolbar .tool-btn{--gs-toolbar-btn-bg:oklch(from var(--gs-toolbar-bg) calc(l + .03) c h);background-color:var(--gs-toolbar-btn-bg);background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-btn-bg) calc(l + .05) calc(c - .005) h), oklch(from var(--gs-toolbar-btn-bg) calc(l - .02) c h));color:var(--gs-toolbar-fg);border:1px solid;border-top-color:oklch(from var(--gs-toolbar-btn-bg) calc(l + .08) c h);border-left-color:oklch(from var(--gs-toolbar-btn-bg) calc(l + .03) c h);border-right-color:oklch(from var(--gs-toolbar-btn-bg) calc(l - .08) c h);border-bottom-color:oklch(from var(--gs-toolbar-btn-bg) calc(l - .12) c h);border-radius:2px;justify-content:center;align-items:center;width:30px;height:26px;margin-left:10px;padding:0;font-size:1.15em;transition:color .15s;display:flex;box-shadow:0 1px 1px #00000026}.gs-toolbar .tool-btn>svg{filter:drop-shadow(0 0 1px #0000004d)}.gs-toolbar .tool-btn:active>*{position:relative;top:1px}.gs-toolbar .tool-btn:disabled{color:oklch(from var(--gs-toolbar-fg) l c h/.5)}.gs-toolbar .tool-btn:hover:not(:disabled){background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-btn-bg) calc(l + .07) c h), oklch(from var(--gs-toolbar-btn-bg) calc(l + .01) c h))}.gs-toolbar .tool-btn:hover:not(:disabled)>svg{filter:drop-shadow(0 0 3px #96c8ff)}.gs-toolbar .tool-btn:focus{outline:none}.gs-toolbar .btn-group .tool-btn,.gs-toolbar .dropdown .tool-btn{margin-left:0}.gs-toolbar .dropdown{position:relative}.gs-toolbar .dropdown.show .gs-dropdown-menu{display:block}.gs-toolbar .dropdown.show>button{background-image:linear-gradient(to bottom, oklch(from var(--gs-toolbar-bg) calc(l + .09) c h), oklch(from var(--gs-toolbar-bg) calc(l + .06) c h))}.provenance-menu .operator{font-size:125%;line-height:.8}.gs-dropdown-menu.provenance-menu .active-state{background-color:#e0e0e0;border-left:5px solid silver;padding-left:10px}.gs-suppress-tooltip .genome-spy .tooltip{display:none}";
//#endregion
export { GS as appStyles, HS as embed };
