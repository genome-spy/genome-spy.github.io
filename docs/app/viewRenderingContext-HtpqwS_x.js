//#region ../core/src/view/layout/rectangle.js
function e(e) {
	return () => e;
}
var t = class t {
	static create(n, r, i, a) {
		return new t(e(n), e(r), e(i), e(a));
	}
	static ZERO = t.create(0, 0, 0, 0);
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
		let r = (t) => {
			let r = n[t];
			return typeof r == "number" ? e(r) : typeof r == "function" ? r : this._passThrough(t);
		};
		return new t(r("x"), r("y"), r("width"), r("height"));
	}
	translate(e, n) {
		return e === 0 && n === 0 ? this : new t(this._offset("x", e), this._offset("y", n), this._passThrough("width"), this._passThrough("height"));
	}
	translateBy(e) {
		return this.translate(e.x, e.y);
	}
	expand(e, n = 1) {
		return e.left == 0 && e.top == 0 && e.right == 0 && e.bottom == 0 ? this : new t(e.left ? this._offset("x", -e.left * n) : this._passThrough("x"), e.top ? this._offset("y", -e.top * n) : this._passThrough("y"), e.width ? this._offset("width", e.width * n) : this._passThrough("width"), e.height ? this._offset("height", e.height * n) : this._passThrough("height"));
	}
	shrink(e) {
		return this.expand(e, -1);
	}
	intersect(e) {
		return this === e || e == null ? this : new t(() => Math.max(this.x, e.x), () => Math.max(this.y, e.y), () => Math.min(this.x2, e.x2) - Math.max(this.x, e.x), () => Math.min(this.y2, e.y2) - Math.max(this.y, e.y));
	}
	intersectX(e) {
		return this === e || e == null ? this : new t(() => Math.max(this.x, e.x), this._passThrough("y"), () => Math.min(this.x2, e.x2) - Math.max(this.x, e.x), this._passThrough("height"));
	}
	intersectY(e) {
		return this === e || e == null ? this : new t(this._passThrough("x"), () => Math.max(this.y, e.y), this._passThrough("width"), () => Math.min(this.y2, e.y2) - Math.max(this.y, e.y));
	}
	union(e) {
		return this === e || e == null ? this : new t(() => Math.min(this.x, e.x), () => Math.min(this.y, e.y), () => Math.max(this.x2, e.x2) - Math.min(this.x, e.x), () => Math.max(this.y2, e.y2) - Math.min(this.y, e.y));
	}
	isDefined() {
		return this.width >= 0 && this.height >= 0;
	}
	flatten() {
		return new t(e(this.x), e(this.y), e(this.width), e(this.height));
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
}, n = class {
	constructor(e) {
		this.globalOptions = e;
	}
	beginSampleFacetBatch() {}
	endSampleFacetBatch() {}
	pushView(e, t) {}
	popView(e) {}
	renderMark(e, t) {}
	getDevicePixelRatio() {
		return 1;
	}
};
//#endregion
export { t as n, n as t };
