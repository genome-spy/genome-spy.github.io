function e(e) {
	let t = [];
	for (let e = 0; e <= 127; e++) t.push(void 0);
	let n = /* @__PURE__ */ new Map();
	for (let r of e.chars) r.id <= 127 ? t[r.id] = r : n.set(r.id, r);
	let r = 8722;
	n.has(r) || n.set(r, t[45]);
	function i(e) {
		return (e <= 127 ? t[e] : n.get(e)) || t[63];
	}
	function a(e) {
		return i(e.charCodeAt(0));
	}
	let o = e.common.base, s = a("x"), c = a("X"), l = a("q"), u = s.height - 10, d = c.height - 10, f = l.height - s.height + l.yoffset - s.yoffset;
	function p(e, t = 1) {
		let n = 0;
		for (let t = 0; t < e.length; t++) n += i(e.charCodeAt(t)).xadvance;
		return n / o * t;
	}
	let m = 0;
	for (let t of e.chars) t.id > m && (m = t.id);
	return {
		measureWidth: p,
		getCharByCode: i,
		getChar: a,
		chars: e.chars,
		maxCharId: m,
		xHeight: u,
		capHeight: d,
		descent: f,
		common: e.common
	};
}
//#endregion
//#region ../core/src/view/layout/rectangle.js
function t(e) {
	return () => e;
}
var n = class e {
	static create(n, r, i, a) {
		return new e(t(n), t(r), t(i), t(a));
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
	modify(n) {
		if (!Object.keys(n).length) return this;
		let r = (e) => {
			let r = n[e];
			return typeof r == "number" ? t(r) : typeof r == "function" ? r : this._passThrough(e);
		};
		return new e(r("x"), r("y"), r("width"), r("height"));
	}
	translate(t, n) {
		return t === 0 && n === 0 ? this : new e(this._offset("x", t), this._offset("y", n), this._passThrough("width"), this._passThrough("height"));
	}
	translateBy(e) {
		return this.translate(e.x, e.y);
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
		return new e(t(this.x), t(this.y), t(this.width), t(this.height));
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
export { e as n, n as t };
