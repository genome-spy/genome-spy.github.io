//#region ../../node_modules/@uwdata/flechette/src/constants.js
var e = Uint8Array.of(65, 82, 82, 79, 87, 49), t = {
	V1: 0,
	V2: 1,
	V3: 2,
	V4: 3,
	V5: 4
}, n = {
	NONE: 0,
	Schema: 1,
	DictionaryBatch: 2,
	RecordBatch: 3,
	Tensor: 4,
	SparseTensor: 5
}, r = {
	Dictionary: -1,
	NONE: 0,
	Null: 1,
	Int: 2,
	Float: 3,
	Binary: 4,
	Utf8: 5,
	Bool: 6,
	Decimal: 7,
	Date: 8,
	Time: 9,
	Timestamp: 10,
	Interval: 11,
	List: 12,
	Struct: 13,
	Union: 14,
	FixedSizeBinary: 15,
	FixedSizeList: 16,
	Map: 17,
	Duration: 18,
	LargeBinary: 19,
	LargeUtf8: 20,
	LargeList: 21,
	RunEndEncoded: 22,
	BinaryView: 23,
	Utf8View: 24,
	ListView: 25,
	LargeListView: 26
}, i = {
	HALF: 0,
	SINGLE: 1,
	DOUBLE: 2
}, a = {
	DAY: 0,
	MILLISECOND: 1
}, o = {
	SECOND: 0,
	MILLISECOND: 1,
	MICROSECOND: 2,
	NANOSECOND: 3
}, s = {
	YEAR_MONTH: 0,
	DAY_TIME: 1,
	MONTH_DAY_NANO: 2
}, c = {
	Sparse: 0,
	Dense: 1
}, l = {
	LZ4_FRAME: 0,
	ZSTD: 1
}, u = { BUFFER: 0 }, d = Uint8Array, f = Uint16Array, p = Uint32Array, m = BigUint64Array, h = Int8Array, ee = Int16Array, g = Int32Array, _ = BigInt64Array, te = Float32Array, v = Float64Array;
function y(e) {
	return Object.prototype.toString.call(e);
}
function ne(e) {
	return y(e) === "[object ArrayBuffer]" || y(e) === "[object SharedArrayBuffer]";
}
function re(e) {
	return y(e) === "[object Uint8Array]";
}
function ie(e, t) {
	let n = Math.log2(e) - 3;
	return (t ? [
		h,
		ee,
		g,
		_
	] : [
		d,
		f,
		p,
		m
	])[n];
}
function b(e, t) {
	let n = 0, r = e.length;
	if (r <= 2147483648) do {
		let i = n + r >>> 1;
		e[i] <= t ? n = i + 1 : r = i;
	} while (n < r);
	else do {
		let i = Math.trunc((n + r) / 2);
		e[i] <= t ? n = i + 1 : r = i;
	} while (n < r);
	return n;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/util/objects.js
function x(e, t, n) {
	if (t(e)) return e;
	throw Error(n(e));
}
function S(e, t, n) {
	return t = Array.isArray(t) ? t : Object.values(t), x(e, (e) => t.includes(e), n ?? (() => `${e} must be one of ${t}`));
}
function C(e, t) {
	for (let [n, r] of Object.entries(e)) if (r === t) return n;
	return "<Unknown>";
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/data-types.js
var w = (e) => `Unsupported data type: "${C(r, e)}" (id ${e})`, ae = (e, t, n = !0, r = null) => ({
	name: e,
	type: t,
	nullable: n,
	metadata: r
});
function oe(e) {
	return Object.hasOwn(e, "name") && se(e.type);
}
function se(e) {
	return typeof e?.typeId == "number";
}
function T(e, t = "", n = !0) {
	return oe(e) ? e : ae(t, x(e, se, () => "Data type expected."), n);
}
var ce = (e, t, n = !1, i = -1) => ({
	typeId: r.Dictionary,
	id: i,
	dictionary: e,
	indices: t || ue(),
	ordered: n
}), le = (e = 32, t = !0) => ({
	typeId: r.Int,
	bitWidth: S(e, [
		8,
		16,
		32,
		64
	]),
	signed: t,
	values: ie(e, t)
}), ue = () => le(32), de = (e = 2) => ({
	typeId: r.Float,
	precision: S(e, i),
	values: [
		f,
		te,
		v
	][e]
}), fe = () => ({
	typeId: r.Binary,
	offsets: g
}), pe = () => ({
	typeId: r.Utf8,
	offsets: g
}), me = (e, t, n = 128) => ({
	typeId: r.Decimal,
	precision: e,
	scale: t,
	bitWidth: S(n, [
		32,
		64,
		128,
		256
	]),
	values: n === 32 ? g : m
}), he = (e) => ({
	typeId: r.Date,
	unit: S(e, a),
	values: e === a.DAY ? g : _
}), ge = (e = o.MILLISECOND) => {
	e = S(e, o);
	let t = e === o.SECOND || e === o.MILLISECOND ? 32 : 64;
	return {
		typeId: r.Time,
		unit: e,
		bitWidth: t,
		values: t === 32 ? g : _
	};
}, _e = (e = o.MILLISECOND, t = null) => ({
	typeId: r.Timestamp,
	unit: S(e, o),
	timezone: t,
	values: _
}), ve = (e = s.MONTH_DAY_NANO) => ({
	typeId: r.Interval,
	unit: S(e, s),
	values: e === s.MONTH_DAY_NANO ? void 0 : g
}), ye = (e) => ({
	typeId: r.List,
	children: [T(e)],
	offsets: g
}), be = (e) => ({
	typeId: r.Struct,
	children: Array.isArray(e) && e.length > 0 && oe(e[0]) ? e : Object.entries(e).map(([e, t]) => ae(e, t))
}), xe = (e, t, n, i) => (n ??= t.map((e, t) => t), {
	typeId: r.Union,
	mode: S(e, c),
	typeIds: n,
	typeMap: n.reduce((e, t, n) => (e[t] = n, e), {}),
	children: t.map((e, t) => T(e, `_${t}`)),
	typeIdForValue: i,
	offsets: g
}), Se = (e) => ({
	typeId: r.FixedSizeBinary,
	stride: e
}), Ce = (e, t) => ({
	typeId: r.FixedSizeList,
	stride: t,
	children: [T(e)]
}), we = (e, t) => ({
	typeId: r.Map,
	keysSorted: e,
	children: [t],
	offsets: g
}), Te = (e = o.MILLISECOND) => ({
	typeId: r.Duration,
	unit: S(e, o),
	values: _
}), Ee = () => ({
	typeId: r.LargeBinary,
	offsets: _
}), De = () => ({
	typeId: r.LargeUtf8,
	offsets: _
}), Oe = (e) => ({
	typeId: r.LargeList,
	children: [T(e)],
	offsets: _
}), ke = (e, t) => ({
	typeId: r.RunEndEncoded,
	children: [x(T(e, "run_ends"), (e) => e.type.typeId === r.Int, () => "Run-ends must have an integer type."), T(t, "values")]
}), Ae = (e) => ({
	typeId: r.ListView,
	children: [T(e, "value")],
	offsets: g
}), je = (e) => ({
	typeId: r.LargeListView,
	children: [T(e, "value")],
	offsets: _
}), E = new v(2).buffer;
new _(E), new p(E), new g(E), new d(E);
function D(e) {
	if (e > 2 ** 53 - 1 || e < -(2 ** 53 - 1)) throw Error(`BigInt exceeds integer number representation: ${e}`);
	return Number(e);
}
function O(e, t) {
	return Number(e / t) + Number(e % t) / Number(t);
}
var k = (e) => BigInt.asUintN(64, e);
function Me(e, t) {
	return BigInt.asIntN(64, e[t]);
}
function Ne(e, t) {
	let n = t << 1, r;
	return BigInt.asIntN(64, e[n + 1]) < 0 ? (r = k(~e[n]) | k(~e[n + 1]) << 64n, r = -(r + 1n)) : r = e[n] | e[n + 1] << 64n, r;
}
function Pe(e, t) {
	let n = t << 2, r;
	return BigInt.asIntN(64, e[n + 3]) < 0 ? (r = k(~e[n]) | k(~e[n + 1]) << 64n | k(~e[n + 2]) << 128n | k(~e[n + 3]) << 192n, r = -(r + 1n)) : r = e[n] | e[n + 1] << 64n | e[n + 2] << 128n | e[n + 3] << 192n, r;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/util/strings.js
var Fe = new TextDecoder("utf-8");
new TextEncoder();
function A(e) {
	return Fe.decode(e);
}
function Ie(e, t) {
	return (e[t >> 3] & 1 << t % 8) != 0;
}
function j(e, t) {
	let n = t + L(e, t), r = n - L(e, n), i = I(e, r);
	return (t, a, o = null) => {
		if (t < i) {
			let i = I(e, r + t);
			if (i) return a(e, n + i);
		}
		return o;
	};
}
function M(e, t) {
	return t;
}
function N(e, t) {
	return !!P(e, t);
}
function P(e, t) {
	return F(e, t) << 24 >> 24;
}
function F(e, t) {
	return e[t];
}
function I(e, t) {
	return Le(e, t) << 16 >> 16;
}
function Le(e, t) {
	return e[t] | e[t + 1] << 8;
}
function L(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24;
}
function Re(e, t) {
	return L(e, t) >>> 0;
}
function R(e, t) {
	return D(BigInt.asIntN(64, BigInt(Re(e, t)) + (BigInt(Re(e, t + 4)) << 32n)));
}
function z(e, t) {
	let n = t + L(e, t), r = L(e, n);
	return n += 4, A(e.subarray(n, n + r));
}
function B(e, t, n, r) {
	if (!t) return [];
	let i = t + L(e, t);
	return Array.from({ length: L(e, i) }, (t, a) => r(e, i + 4 + a * n));
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/util/struct.js
var V = Symbol("rowIndex");
function H(e, t) {
	class n {
		constructor(e) {
			this[V] = e;
		}
		toJSON() {
			return Be(e, t, this[V]);
		}
	}
	let r = n.prototype;
	for (let n = 0; n < e.length; ++n) {
		if (Object.hasOwn(r, e[n])) continue;
		let i = t[n];
		Object.defineProperty(r, e[n], {
			get() {
				return i.at(this[V]);
			},
			enumerable: !0
		});
	}
	return (e) => new n(e);
}
function ze(e, t) {
	return (n) => Be(e, t, n);
}
function Be(e, t, n) {
	let r = {};
	for (let i = 0; i < e.length; ++i) r[e[i]] = t[i].at(n);
	return r;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/batch.js
function Ve(e) {
	return e instanceof W;
}
var U = class {
	static ArrayType = null;
	constructor({ length: e, nullCount: t, type: n, validity: r, values: i, offsets: a, sizes: o, children: s }) {
		this.length = e, this.nullCount = t, this.type = n, this.validity = r, this.values = i, this.offsets = a, this.sizes = o, this.children = s, (!t || !this.validity) && (this.at = (e) => this.value(e));
	}
	get [Symbol.toStringTag]() {
		return "Batch";
	}
	at(e) {
		return this.isValid(e) ? this.value(e) : null;
	}
	isValid(e) {
		return Ie(this.validity, e);
	}
	value(e) {
		return this.values[e];
	}
	slice(e, t) {
		let n = t - e, r = Array(n);
		for (let t = 0; t < n; ++t) r[t] = this.at(e + t);
		return r;
	}
	*[Symbol.iterator]() {
		for (let e = 0; e < this.length; ++e) yield this.at(e);
	}
}, W = class extends U {
	constructor(e) {
		super(e);
		let { length: t, values: n } = this;
		this.values = n.subarray(0, t);
	}
	slice(e, t) {
		return this.nullCount ? super.slice(e, t) : this.values.subarray(e, t);
	}
	[Symbol.iterator]() {
		return this.nullCount ? super[Symbol.iterator]() : this.values[Symbol.iterator]();
	}
}, G = class extends U {
	static ArrayType = v;
}, K = class extends U {
	static ArrayType = Array;
}, He = class extends K {
	value(e) {
		return null;
	}
}, q = class extends G {
	value(e) {
		return D(this.values[e]);
	}
}, Ue = class extends G {
	value(e) {
		let t = this.values[e], n = (t & 31744) >> 10, r = (t & 1023) / 1024, i = (-1) ** ((t & 32768) >> 15);
		switch (n) {
			case 31: return i * (r ? NaN : Infinity);
			case 0: return i * (r ? 6103515625e-14 * r : 0);
		}
		return i * 2 ** (n - 15) * (1 + r);
	}
}, We = class extends K {
	value(e) {
		return Ie(this.values, e);
	}
}, Ge = class extends G {
	constructor(e) {
		super(e);
		let { scale: t } = this.type;
		this.scale = 10 ** t;
	}
	value(e) {
		return this.values[e] / this.scale;
	}
}, Ke = class extends U {
	constructor(e) {
		super(e);
		let { bitWidth: t, scale: n } = this.type;
		this.decimal = t === 64 ? Me : t === 128 ? Ne : Pe, this.scale = 10n ** BigInt(n);
	}
}, qe = class extends Ke {
	static ArrayType = v;
	value(e) {
		return O(this.decimal(this.values, e), this.scale);
	}
}, Je = class extends Ke {
	static ArrayType = Array;
	value(e) {
		return this.decimal(this.values, e);
	}
}, Ye = class extends K {
	constructor(e) {
		super(e), this.source = e;
	}
	value(e) {
		return new Date(this.source.value(e));
	}
}, Xe = class extends G {
	value(e) {
		return 864e5 * this.values[e];
	}
}, Ze = q, Qe = class extends q {
	value(e) {
		return super.value(e) * 1e3;
	}
}, $e = q, et = class extends q {
	value(e) {
		return O(this.values[e], 1000n);
	}
}, tt = class extends q {
	value(e) {
		return O(this.values[e], 1000000n);
	}
}, nt = class extends K {
	value(e) {
		return this.values.subarray(e << 1, e + 1 << 1);
	}
}, rt = class extends K {
	value(e) {
		let t = this.values, n = e << 4;
		return Float64Array.of(L(t, n), L(t, n + 4), R(t, n + 8));
	}
}, it = ({ values: e, offsets: t }, n) => e.subarray(t[n], t[n + 1]), at = ({ values: e, offsets: t }, n) => e.subarray(D(t[n]), D(t[n + 1])), ot = class extends K {
	value(e) {
		return it(this, e);
	}
}, st = class extends K {
	value(e) {
		return at(this, e);
	}
}, ct = class extends K {
	value(e) {
		return A(it(this, e));
	}
}, lt = class extends K {
	value(e) {
		return A(at(this, e));
	}
}, ut = class extends K {
	value(e) {
		let t = this.offsets;
		return this.children[0].slice(t[e], t[e + 1]);
	}
}, dt = class extends K {
	value(e) {
		let t = this.offsets;
		return this.children[0].slice(D(t[e]), D(t[e + 1]));
	}
}, ft = class extends K {
	value(e) {
		let t = this.offsets[e], n = t + this.sizes[e];
		return this.children[0].slice(t, n);
	}
}, pt = class extends K {
	value(e) {
		let t = this.offsets[e], n = t + this.sizes[e];
		return this.children[0].slice(D(t), D(n));
	}
}, mt = class extends K {
	constructor(e) {
		super(e), this.stride = this.type.stride;
	}
}, ht = class extends mt {
	value(e) {
		let { stride: t, values: n } = this;
		return n.subarray(e * t, (e + 1) * t);
	}
}, gt = class extends mt {
	value(e) {
		let { children: t, stride: n } = this;
		return t[0].slice(e * n, (e + 1) * n);
	}
};
function _t({ children: e, offsets: t }, n) {
	let [r, i] = e[0].children, a = t[n], o = t[n + 1], s = [];
	for (let e = a; e < o; ++e) s.push([r.at(e), i.at(e)]);
	return s;
}
var vt = class extends K {
	value(e) {
		return _t(this, e);
	}
}, yt = class extends K {
	value(e) {
		return new Map(_t(this, e));
	}
}, bt = class extends K {
	constructor({ typeIds: e, ...t }) {
		super(t), this.typeIds = e, this.typeMap = this.type.typeMap;
	}
	value(e, t = e) {
		let { typeIds: n, children: r, typeMap: i } = this;
		return r[i[n[e]]].at(t);
	}
}, xt = class extends bt {
	value(e) {
		return super.value(e, this.offsets[e]);
	}
}, St = class extends K {
	constructor(e, t = ze) {
		super(e), this.names = this.type.children.map((e) => e.name), this.factory = t(this.names, this.children);
	}
	value(e) {
		return this.factory(e);
	}
}, Ct = class extends St {
	constructor(e) {
		super(e, H);
	}
}, wt = class extends K {
	value(e) {
		let [{ values: t }, n] = this.children;
		return n.at(b(t, e));
	}
}, Tt = class extends K {
	setDictionary(e) {
		return this.dictionary = e, this.cache = e.cache(), this;
	}
	value(e) {
		return this.cache[this.key(e)];
	}
	key(e) {
		return this.values[e];
	}
}, Et = class extends K {
	constructor({ data: e, ...t }) {
		super(t), this.data = e;
	}
	view(e) {
		let { values: t, data: n } = this, r = e << 4, i = r + 4, a = t, o = L(a, r);
		return o > 12 && (i = L(a, r + 12), a = n[L(a, r + 8)]), a.subarray(i, i + o);
	}
}, Dt = class extends Et {
	value(e) {
		return this.view(e);
	}
}, Ot = class extends Et {
	value(e) {
		return A(this.view(e));
	}
};
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/column.js
function kt(e) {
	let t = [];
	return {
		add(e) {
			return t.push(e), this;
		},
		clear: () => t = [],
		done: () => new J(t, e)
	};
}
var J = class {
	constructor(e, t = e[0]?.type) {
		this.type = t, this.length = e.reduce((e, t) => e + t.length, 0), this.nullCount = e.reduce((e, t) => e + t.nullCount, 0), this.data = e;
		let n = e.length, r = new Int32Array(n + 1);
		if (n === 1) {
			let [t] = e;
			r[1] = t.length, this.at = (e) => t.at(e);
		} else for (let t = 0, i = 0; t < n; ++t) r[t + 1] = i += e[t].length;
		this.offsets = r;
	}
	get [Symbol.toStringTag]() {
		return "Column";
	}
	[Symbol.iterator]() {
		let e = this.data;
		return e.length === 1 ? e[0][Symbol.iterator]() : At(e);
	}
	at(e) {
		let { data: t, offsets: n } = this, r = b(n, e) - 1;
		return t[r]?.at(e - n[r]);
	}
	get(e) {
		return this.at(e);
	}
	toArray() {
		let { length: e, nullCount: t, data: n } = this, r = !t && Ve(n[0]), i = n.length;
		if (r && i === 1) return n[0].values;
		let a = new (!i || t > 0 ? Array : n[0].constructor.ArrayType ?? n[0].values.constructor)(e);
		return r ? jt(a, n) : Mt(a, n);
	}
	cache() {
		return this._cache ??= this.toArray();
	}
};
function* At(e) {
	for (let t = 0; t < e.length; ++t) {
		let n = e[t][Symbol.iterator]();
		for (let e = n.next(); !e.done; e = n.next()) yield e.value;
	}
}
function jt(e, t) {
	for (let n = 0, r = 0; n < t.length; ++n) {
		let { values: i } = t[n];
		e.set(i, r), r += i.length;
	}
	return e;
}
function Mt(e, t) {
	let n = -1;
	for (let r = 0; r < t.length; ++r) {
		let i = t[r];
		for (let t = 0; t < i.length; ++t) e[++n] = i.at(t);
	}
	return e;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/table.js
var Nt = class e {
	constructor(e, t, n = !1) {
		let r = e.fields.map((e) => e.name);
		this.schema = e, this.names = r, this.children = t, this.factory = n ? H : ze;
		let i = [];
		this.getFactory = (e) => i[e] ?? (i[e] = this.factory(r, t.map((t) => t.data[e])));
	}
	get [Symbol.toStringTag]() {
		return "Table";
	}
	get numCols() {
		return this.names.length;
	}
	get numRows() {
		return this.children[0]?.length ?? 0;
	}
	getChildAt(e) {
		return this.children[e];
	}
	getChild(e) {
		let t = this.names.findIndex((t) => t === e);
		return t > -1 ? this.children[t] : void 0;
	}
	selectAt(t, n = []) {
		let { children: r, factory: i, schema: a } = this, { fields: o } = a;
		return new e({
			...a,
			fields: t.map((e, t) => Pt(o[e], n[t]))
		}, t.map((e) => r[e]), i === H);
	}
	select(e, t) {
		let n = this.names, r = e.map((e) => n.indexOf(e));
		return this.selectAt(r, t);
	}
	toColumns() {
		let { children: e, names: t } = this, n = {};
		return t.forEach((t, r) => n[t] = e[r]?.toArray() ?? []), n;
	}
	toArray() {
		let { children: e, getFactory: t, numRows: n } = this, r = e[0]?.data ?? [], i = Array(n);
		for (let e = 0, n = -1; e < r.length; ++e) {
			let a = t(e);
			for (let t = 0; t < r[e].length; ++t) i[++n] = a(t);
		}
		return i;
	}
	*[Symbol.iterator]() {
		let { children: e, getFactory: t } = this, n = e[0]?.data ?? [];
		for (let e = 0; e < n.length; ++e) {
			let r = t(e);
			for (let t = 0; t < n[e].length; ++t) yield r(t);
		}
	}
	at(e) {
		let { children: t, getFactory: n, numRows: r } = this;
		if (e < 0 || e >= r) return null;
		let [{ offsets: i }] = t, a = b(i, e) - 1;
		return n(a)(e - i[a]);
	}
	get(e) {
		return this.at(e);
	}
};
function Pt(e, t) {
	return t != null && t !== e.name ? {
		...e,
		name: t
	} : e;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/batch-type.js
function Ft(e, t = {}) {
	let { typeId: n, bitWidth: i, mode: c, precision: l, unit: u } = e, { useBigInt: d, useBigIntTimestamp: f, useDate: p, useDecimalInt: m, useMap: h, useProxy: ee } = t;
	switch (n) {
		case r.Null: return He;
		case r.Bool: return We;
		case r.Int:
		case r.Time:
		case r.Duration: return d || i < 64 ? W : q;
		case r.Float: return l ? W : Ue;
		case r.Date: return It(u === a.DAY ? Xe : Ze, p && Ye);
		case r.Timestamp: return f ? W : It(u === o.SECOND ? Qe : u === o.MILLISECOND ? $e : u === o.MICROSECOND ? et : tt, p && Ye);
		case r.Decimal: return i === 32 ? m ? W : Ge : m ? Je : qe;
		case r.Interval: return u === s.DAY_TIME ? nt : u === s.YEAR_MONTH ? W : rt;
		case r.FixedSizeBinary: return ht;
		case r.Utf8: return ct;
		case r.LargeUtf8: return lt;
		case r.Binary: return ot;
		case r.LargeBinary: return st;
		case r.BinaryView: return Dt;
		case r.Utf8View: return Ot;
		case r.List: return ut;
		case r.LargeList: return dt;
		case r.Map: return h ? yt : vt;
		case r.ListView: return ft;
		case r.LargeListView: return pt;
		case r.FixedSizeList: return gt;
		case r.Struct: return ee ? Ct : St;
		case r.RunEndEncoded: return wt;
		case r.Dictionary: return Tt;
		case r.Union: return c ? xt : bt;
	}
	throw Error(w(n));
}
function It(e, t) {
	return t ? class extends t {
		constructor(t) {
			super(new e(t));
		}
	} : e;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/compression.js
var Lt = -1, Rt = 8;
function zt(e) {
	return `Missing compression codec "${C(l, e)}" (id ${e})`;
}
var Bt = /* @__PURE__ */ new Map();
function Vt(e) {
	return e != null && Bt.get(e) || null;
}
function Ht(e, { offset: t, length: n }, r) {
	if (n === 0) return {
		bytes: /* @__PURE__ */ new Uint8Array(),
		offset: 0,
		length: 0
	};
	let i = R(e, t), a = e.subarray(t + Rt, t + n), o = i === Lt ? a : r.decode(a, i);
	return {
		bytes: o,
		offset: 0,
		length: o.length
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/block.js
function Ut(e, t) {
	return {
		offset: R(e, t),
		metadataLength: L(e, t + 8),
		bodyLength: R(e, t + 16)
	};
}
function Y(e, t) {
	return B(e, t, 24, Ut);
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/body-compression.js
function Wt(e, t) {
	let n = j(e, t);
	return {
		codec: n(4, P, l.LZ4_FRAME),
		method: n(6, P, u.BUFFER)
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/record-batch.js
function Gt(e, n, r) {
	let i = j(e, n), a = r < t.V4 ? 8 : 0;
	return {
		length: i(4, R, 0),
		nodes: B(e, i(6, M), 16, (e, t) => ({
			length: R(e, t),
			nullCount: R(e, t + 8)
		})),
		regions: B(e, i(8, M), 16 + a, (e, t) => ({
			offset: R(e, t + a),
			length: R(e, t + a + 8)
		})),
		compression: i(10, Wt),
		variadic: B(e, i(12, M), 8, R)
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/dictionary-batch.js
function Kt(e, t, n) {
	let r = j(e, t);
	return {
		id: r(4, R, 0),
		data: r(6, (e, t) => Gt(e, t, n)),
		isDelta: r(8, N, !1)
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/data-type.js
function qt(e, t, n, l) {
	S(n, r, w);
	let u = j(e, t);
	switch (n) {
		case r.Binary: return fe();
		case r.Utf8: return pe();
		case r.LargeBinary: return Ee();
		case r.LargeUtf8: return De();
		case r.List: return ye(l[0]);
		case r.ListView: return Ae(l[0]);
		case r.LargeList: return Oe(l[0]);
		case r.LargeListView: return je(l[0]);
		case r.Struct: return be(l);
		case r.RunEndEncoded: return ke(l[0], l[1]);
		case r.Int: return le(u(4, L, 0), u(6, N, !1));
		case r.Float: return de(u(4, I, i.HALF));
		case r.Decimal: return me(u(4, L, 0), u(6, L, 0), u(8, L, 128));
		case r.Date: return he(u(4, I, a.MILLISECOND));
		case r.Time: return ge(u(4, I, o.MILLISECOND));
		case r.Timestamp: return _e(u(4, I, o.SECOND), u(6, z));
		case r.Interval: return ve(u(4, I, s.YEAR_MONTH));
		case r.Duration: return Te(u(4, I, o.MILLISECOND));
		case r.FixedSizeBinary: return Se(u(4, L, 0));
		case r.FixedSizeList: return Ce(l[0], u(4, L, 0));
		case r.Map: return we(u(4, N, !1), l[0]);
		case r.Union: return xe(u(4, I, c.Sparse), l, B(e, u(6, M), 4, L));
	}
	return { typeId: n };
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/metadata.js
function X(e, t) {
	let n = B(e, t, 4, (e, t) => {
		let n = j(e, t);
		return [n(4, z), n(6, z)];
	});
	return n.length ? new Map(n) : null;
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/schema.js
function Jt(e, t, n) {
	let r = j(e, t);
	return {
		version: n,
		endianness: r(4, I, 0),
		fields: r(6, Yt, []),
		metadata: r(8, X)
	};
}
function Yt(e, t) {
	return B(e, t, 4, Z);
}
function Z(e, t) {
	let n = j(e, t), i = n(8, F, r.NONE), a = n(10, M, 0), o = n(12, Zt), s = qt(e, a, i, n(14, Xt, []));
	return o && (o.dictionary = s, s = o), {
		name: n(4, z),
		type: s,
		nullable: n(6, N, !1),
		metadata: n(16, X)
	};
}
function Xt(e, t) {
	return B(e, t, 4, Z);
}
function Zt(e, t) {
	if (!t) return null;
	let n = j(e, t);
	return ce(null, n(6, Qt, ue()), n(8, N, !1), n(4, R, 0));
}
function Qt(e, t) {
	return qt(e, t, r.Int);
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/message.js
var $t = (e, t) => `Expected to read ${e} metadata bytes, but only read ${t}.`, en = (e, t) => `Expected to read ${e} bytes for message body, but only read ${t}.`, tn = (e) => `Unsupported message type: ${e} (${C(n, e)})`;
function Q(e, r) {
	let i = L(e, r) || 0;
	if (r += 4, i === -1 && (i = L(e, r) || 0, r += 4), i === 0) return null;
	let a = e.subarray(r, r += i);
	if (a.byteLength < i) throw Error($t(i, a.byteLength));
	let o = j(a, 0), s = o(4, I, t.V1), c = o(6, F, n.NONE), l = o(8, M, 0), u = o(10, R, 0), d;
	if (l) {
		let t = c === n.Schema ? Jt : c === n.DictionaryBatch ? Kt : c === n.RecordBatch ? Gt : null;
		if (!t) throw Error(tn(c));
		if (d = t(a, l, s), u > 0) {
			let t = e.subarray(r, r += u);
			if (t.byteLength < u) throw Error(en(u, t.byteLength));
			d.body = t;
		} else c !== n.Schema && (d.body = /* @__PURE__ */ new Uint8Array());
	}
	return {
		version: s,
		type: c,
		index: r,
		content: d
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/decode-ipc.js
function nn(e) {
	let t = ne(e) ? new Uint8Array(e) : e;
	return re(t) && rn(t) ? on(t) : an(t);
}
function rn(t) {
	if (!t || t.length < 4) return !1;
	for (let n = 0; n < 6; ++n) if (e[n] !== t[n]) return !1;
	return !0;
}
function an(e) {
	let t = [e].flat(), r, i = [], a = [], o = [];
	for (let e of t) {
		if (!re(e)) throw Error("IPC data batch was not a Uint8Array.");
		let t = 0;
		for (;;) {
			let s = Q(e, t);
			if (s === null) break;
			if (t = s.index, s.content) switch (s.type) {
				case n.Schema:
					r ||= s.content;
					break;
				case n.RecordBatch:
					i.push(s.content), o.push(a.length);
					break;
				case n.DictionaryBatch:
					a.push(s.content);
					break;
			}
		}
	}
	return {
		schema: r,
		dictionaries: a,
		records: i,
		dictsBeforeRecord: o,
		metadata: null
	};
}
function on(n) {
	let r = n.byteLength - (e.length + 4), i = j(n, r - L(n, r)), a = i(4, I, t.V1), o = i(8, Y, []), s = i(10, Y, []), c = s.map((e) => o.filter((t) => t.offset < e.offset).length);
	return {
		schema: i(6, (e, t) => Jt(e, t, a)),
		dictionaries: o.map(({ offset: e }) => Q(n, e).content),
		records: s.map(({ offset: e }) => Q(n, e).content),
		dictsBeforeRecord: c,
		metadata: i(12, X)
	};
}
//#endregion
//#region ../../node_modules/@uwdata/flechette/src/decode/table-from-ipc.js
function sn(e, t) {
	return cn(nn(e), t);
}
function cn(e, t = {}) {
	let { schema: n = { fields: [] }, dictionaries: i, records: a, dictsBeforeRecord: o } = e, { version: s, fields: c } = n, l = /* @__PURE__ */ new Map(), u = un(t, s, l), d = /* @__PURE__ */ new Map();
	ln(n, (e) => {
		let t = e.type;
		t.typeId === r.Dictionary && d.set(t.id, t.dictionary);
	});
	let f = (e) => {
		let { id: t, data: n, isDelta: r, body: i } = e, a = d.get(t), o = $(a, u({
			...n,
			body: i
		})), s = l.get(t);
		if (s) r ? l.set(t, new J([...s.data, o], a)) : l.set(t, new J([o], a));
		else {
			if (r) throw Error("Delta update can not be first dictionary batch.");
			l.set(t, new J([o], a));
		}
	}, p = c.map((e) => kt(e.type)), m = 0;
	for (let e = 0; e < a.length; e++) {
		let t = o ? o[e] : i.length;
		for (; m < t;) f(i[m++]);
		let n = u(a[e]);
		c.forEach((e, t) => p[t].add($(e.type, n)));
	}
	for (; m < i.length;) f(i[m++]);
	return new Nt(n, p.map((e) => e.done()), t.useProxy);
}
function ln(e, t) {
	e.fields.forEach(function e(n) {
		t(n), n.type.dictionary?.children?.forEach(e), n.type.children?.forEach(e);
	});
}
function un(e, t, n) {
	let r = {
		version: t,
		options: e,
		dictionary: (e) => n.get(e)
	};
	return (e) => {
		let { length: t, nodes: n, regions: i, compression: a, variadic: o, body: s } = e, c = -1, l = -1, u = -1;
		return {
			...r,
			length: t,
			node: () => n[++c],
			buffer: (e) => {
				let { bytes: t, length: n, offset: r } = dn(s, i[++l], a);
				return e ? new e(t.buffer, t.byteOffset + r, n / e.BYTES_PER_ELEMENT) : t.subarray(r, r + n);
			},
			variadic: () => o[++u],
			visit(e) {
				return e.map((e) => $(e.type, this));
			}
		};
	};
}
function dn(e, t, n) {
	if (!n) return {
		bytes: e,
		...t
	};
	if (n.method !== u.BUFFER) throw Error(`Unknown compression method (${n.method})`);
	{
		let r = n.codec, i = Vt(r);
		if (!i) throw Error(zt(r));
		return Ht(e, t, i);
	}
}
function $(e, n) {
	let { typeId: i } = e, { options: a, node: o, buffer: s, variadic: l, version: u } = n, d = Ft(e, a), f = {
		...o(),
		type: e
	};
	if (i === r.Null) return new d({
		...f,
		nullCount: f.length
	});
	switch (i) {
		case r.Bool:
		case r.Int:
		case r.Time:
		case r.Duration:
		case r.Float:
		case r.Decimal:
		case r.Date:
		case r.Timestamp:
		case r.Interval:
		case r.FixedSizeBinary: return new d({
			...f,
			validity: s(),
			values: s(e.values)
		});
		case r.Utf8:
		case r.LargeUtf8:
		case r.Binary:
		case r.LargeBinary: return new d({
			...f,
			validity: s(),
			offsets: s(e.offsets),
			values: s()
		});
		case r.BinaryView:
		case r.Utf8View: return new d({
			...f,
			validity: s(),
			values: s(),
			data: Array.from({ length: l() }, () => s())
		});
		case r.List:
		case r.LargeList:
		case r.Map: return new d({
			...f,
			validity: s(),
			offsets: s(e.offsets),
			children: n.visit(e.children)
		});
		case r.ListView:
		case r.LargeListView: return new d({
			...f,
			validity: s(),
			offsets: s(e.offsets),
			sizes: s(e.offsets),
			children: n.visit(e.children)
		});
		case r.FixedSizeList:
		case r.Struct: return new d({
			...f,
			validity: s(),
			children: n.visit(e.children)
		});
		case r.RunEndEncoded: return new d({
			...f,
			children: n.visit(e.children)
		});
		case r.Dictionary: {
			let { id: t, indices: r } = e;
			return new d({
				...f,
				validity: s(),
				values: s(r.values)
			}).setDictionary(n.dictionary(t));
		}
		case r.Union: return u < t.V5 && s(), new d({
			...f,
			typeIds: s(h),
			offsets: e.mode === c.Sparse ? null : s(e.offsets),
			children: n.visit(e.children)
		});
		default: throw Error(w(i));
	}
}
new Uint16Array(new Uint8Array([1, 0]).buffer)[0];
//#endregion
export { sn as tableFromIPC };
