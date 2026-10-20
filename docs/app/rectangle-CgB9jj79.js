import { Tt as e, c as t, dt as n, ft as r, it as i, u as a } from "./clipOptions-BnC5TVd8.js";
//#region ../core/src/marks/markUtils.js
var o = Symbol("half-open interval peer");
function s(e) {
	return e?.[o];
}
function c(e, t) {
	let r = n(t), s = i(e[t]), c = i(e[r]);
	s && c && ["index", "locus"].includes(s.type) && (e[t] = a(e[t], {
		...e[t],
		[o]: r
	}), e[r] = a(e[r], {
		...e[r],
		[o]: t
	}));
}
function l(t) {
	for (let r of ["x", "y"]) {
		let a = n(r), o = t[r], s = t[a];
		if (o && s && e(o) && !i(o) && i(s)) throw Error(`Cannot combine encoding.${r}.value with scale-backed encoding.${a}. Use encoding.${r}.datum for a constant data-domain endpoint, or use encoding.${a}.value for a visual-domain endpoint.`);
	}
}
function u(t, i, o = !1) {
	let s = n(i);
	c(t, i);
	let l = t[i] && a(t[i], { ...t[i] }), u = t[s] && a(t[s], { ...t[s] });
	if (!(e(l) || e(u))) {
		if (l) {
			if (!r(t[i])) return;
			if (!u) {
				if (l.type == "quantitative") u = {
					datum: 0,
					domainInert: !0
				};
				else {
					u = a(l, { ...l });
					let e = (1 - (l.band ?? 1)) / 2;
					l.band = 0 + e, u.band = o ? l.band : 1 - e;
				}
			} else if (l.type != "quantitative") {
				let e = (1 - (l.band || 1)) / 2;
				l.band = e, u.band = -e;
			}
		} else l = { value: 0 }, u = { value: 1 };
		t[i] = l, t[s] = u;
	}
}
function d(t, i) {
	c(t, i);
	let o = n(i), s = t[i], l = t[o];
	if (!s || !l || e(s) || e(l) || !r(s) || !r(l) || !["index", "locus"].includes(s.type)) return;
	let u = s.band, d = l.band, f = u ?? d ?? 0;
	t[i] = a(s, {
		...s,
		band: f
	}), t[o] = a(l, {
		...l,
		band: d ?? f
	});
}
function f(e, t) {
	let n = i(e);
	n && (n.resolutionChannel = t);
}
function p(n, r) {
	n.stroke || (r ? n.stroke = { value: null } : (n.stroke = t(n.color), f(n.stroke, "color"))), e(n.stroke) && n.stroke.value === null && (n.strokeWidth = { value: 0 }), n.strokeOpacity || (n.strokeOpacity = t(n.opacity), f(n.strokeOpacity, "opacity"));
}
function m(n, r) {
	e(n.fill) && n.fill.value === null ? n.fillOpacity = { value: 0 } : n.fill || (n.fill = t(n.color), f(n.fill, "color"), !r && !n.fillOpacity && (n.fillOpacity = { value: 0 })), n.fillOpacity || (r ? (n.fillOpacity = t(n.opacity), f(n.fillOpacity, "opacity")) : n.fillOpacity = { value: 0 });
}
function h(e, t) {
	return e.properties.clamp === !0 || e.properties.clamp === t;
}
//#endregion
//#region ../core/src/view/layout/rectangle.js
function g(e) {
	return () => e;
}
var _ = class e {
	static create(t, n, r, i) {
		return new e(g(t), g(n), g(r), g(i));
	}
	static unionAll(t) {
		if (!t.length) return;
		let { x: n, y: r, x2: i, y2: a } = t[0];
		for (let e = 1; e < t.length; e++) {
			let o = t[e];
			n = Math.min(n, o.x), r = Math.min(r, o.y), i = Math.max(i, o.x2), a = Math.max(a, o.y2);
		}
		return e.create(n, r, i - n, a - r);
	}
	static ZERO = e.create(0, 0, 0, 0);
	_offset(e, t) {
		let n = this["_" + e];
		if (t === 0) return n;
		switch (typeof t) {
			case "number": return () => n() + t;
			case "function": return () => n() + t();
			default: throw Error("Not a number of function");
		}
	}
	_passThrough(e) {
		return this._offset(e, 0);
	}
	constructor(e, t, n, r) {
		this._x = e, this._y = t, this._width = n, this._height = r;
	}
	get x() {
		return this._x();
	}
	get y() {
		return this._y();
	}
	get width() {
		return this._width();
	}
	get height() {
		return this._height();
	}
	get x2() {
		return this._x() + this._width();
	}
	get y2() {
		return this._y() + this._height();
	}
	equals(e) {
		return e ? this === e || this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height : !1;
	}
	modify(t) {
		if (!Object.keys(t).length) return this;
		let n = (e) => {
			let n = t[e];
			return typeof n == "number" ? g(n) : typeof n == "function" ? n : this._passThrough(e);
		};
		return new e(n("x"), n("y"), n("width"), n("height"));
	}
	translate(t, n) {
		return t === 0 && n === 0 ? this : new e(this._offset("x", t), this._offset("y", n), this._passThrough("width"), this._passThrough("height"));
	}
	translateBy(e) {
		return this.translate(() => e.x, () => e.y);
	}
	expand(t, n = 1) {
		return t.left == 0 && t.top == 0 && t.right == 0 && t.bottom == 0 ? this : new e(t.left ? this._offset("x", -t.left * n) : this._passThrough("x"), t.top ? this._offset("y", -t.top * n) : this._passThrough("y"), t.width ? this._offset("width", t.width * n) : this._passThrough("width"), t.height ? this._offset("height", t.height * n) : this._passThrough("height"));
	}
	shrink(e) {
		return this.expand(e, -1);
	}
	intersect(t) {
		return this === t || t == null ? this : new e(() => Math.max(this.x, t.x), () => Math.max(this.y, t.y), () => Math.min(this.x2, t.x2) - Math.max(this.x, t.x), () => Math.min(this.y2, t.y2) - Math.max(this.y, t.y));
	}
	intersectX(t) {
		return this === t || t == null ? this : new e(() => Math.max(this.x, t.x), this._passThrough("y"), () => Math.min(this.x2, t.x2) - Math.max(this.x, t.x), this._passThrough("height"));
	}
	intersectY(t) {
		return this === t || t == null ? this : new e(this._passThrough("x"), () => Math.max(this.y, t.y), this._passThrough("width"), () => Math.min(this.y2, t.y2) - Math.max(this.y, t.y));
	}
	union(t) {
		return this === t || t == null ? this : new e(() => Math.min(this.x, t.x), () => Math.min(this.y, t.y), () => Math.max(this.x2, t.x2) - Math.min(this.x, t.x), () => Math.max(this.y2, t.y2) - Math.min(this.y, t.y));
	}
	isDefined() {
		return this.width >= 0 && this.height >= 0;
	}
	flatten() {
		return new e(g(this.x), g(this.y), g(this.width), g(this.height));
	}
	containsPoint(e, t) {
		return e >= this.x && e < this.x2 && t >= this.y && t < this.y2;
	}
	normalizePoint(e, t, n = !1) {
		let r = {
			x: (e - this.x) / this.width,
			y: (t - this.y) / this.height
		};
		return n && (r.y = 1 - r.y), r;
	}
	denormalizePoint(e, t, n = !1) {
		return n && (t = 1 - t), {
			x: this.x + e * this.width,
			y: this.y + t * this.height
		};
	}
	toString() {
		return `Rectangle: x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}`;
	}
	toRoundedString() {
		return `Rectangle: x: ${Math.round(this.x)}, y: ${Math.round(this.y)}, width: ${Math.round(this.width)}, height: ${Math.round(this.height)}`;
	}
};
//#endregion
export { m as a, s as c, u as i, h as l, o as n, d as o, c as r, p as s, _ as t, l as u };
