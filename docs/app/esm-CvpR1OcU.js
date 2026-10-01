//#region ../../node_modules/@gmod/bed/esm/autoSql.js
var e = [
	"int",
	"uint",
	"short",
	"ushort",
	"byte",
	"ubyte",
	"float",
	"char",
	"string",
	"lstring",
	"enum",
	"double",
	"bigint",
	"set"
], t = [
	"simple",
	"object",
	"table"
], n = [
	"primary",
	"index",
	"unique"
], r = /[ \t\n\r]*/y, i = /[A-Za-z_][A-Za-z0-9_]*/y, a = /[0-9]+/y, o = /[^,)\s]+/y, s = /[A-Za-z0-9_]/;
function c(c) {
	let l = 0;
	function u(e) {
		let t = c.slice(0, l), n = t.split("\n").length, r = l - t.lastIndexOf("\n");
		throw Error(`autoSql parse error at line ${String(n)} column ${String(r)}: expected ${e}`);
	}
	function d(e) {
		e.lastIndex = l;
		let t = e.exec(c);
		return t && (l = e.lastIndex), t?.[0];
	}
	function f() {
		d(r);
	}
	function p(e) {
		return c.startsWith(e, l) ? (l += e.length, !0) : !1;
	}
	function m(e, t) {
		for (let n of e) {
			let e = c.slice(l, l + n.length);
			if ((t ? e.toLowerCase() : e) === n && !s.test(c[l + n.length] ?? "")) return l += n.length, n;
		}
	}
	function h() {
		let e = c[l];
		if (e !== "\"" && e !== "'") return;
		let t = c.indexOf(e, l + 1);
		if (t === -1) return;
		let n = c.slice(l + 1, t);
		return l = t + 1, n;
	}
	function g() {
		return d(i) ?? u("a name");
	}
	function _() {
		return h() ?? g();
	}
	function v() {
		let e = l;
		for (; e < c.length && c[e] !== "\n" && c[e] !== "\r";) e++;
		let t = c.slice(l, e), n = t.trim(), r = /^"(.*)".*$/.exec(n), i = t.lastIndexOf("\"");
		return l = r && t.slice(i + 1).includes(")") ? l + i + 1 : e, r ? r[1] : n.replace(/^"|"$/g, "");
	}
	function y() {
		for (f(); p("#");) v(), f();
	}
	function b() {
		let n = m(e, !0);
		if (n) return n;
		let r = m(t, !0);
		if (r) return f(), `${r} ${g()}`;
	}
	function x() {
		f();
		let e = d(a), t = e === void 0 ? g() : Number.parseInt(e);
		return f(), p("]") || u("']'"), t;
	}
	function S() {
		let e = [];
		for (;;) if (f(), e.push(h() ?? d(o) ?? u("an enum value")), f(), !p(",")) return p(")") || u("',' or ')'"), e;
	}
	function C() {
		for (;;) {
			let e = l;
			if (f(), m(n, !1)) {
				let e = l;
				f(), p("[") ? x() : l = e;
			} else if (!m(["auto"], !1)) {
				l = e;
				return;
			}
		}
	}
	function w() {
		return C(), f(), p(";") || u("';'"), f(), v();
	}
	function T() {
		if (p("#")) {
			v();
			return;
		}
		let e = b() ?? u("a field type");
		if (f(), p("[")) {
			let t = x();
			return f(), {
				type: e,
				size: t,
				name: _(),
				comment: w()
			};
		}
		if (p("(")) {
			let t = S();
			return f(), {
				type: e,
				vals: t,
				name: _(),
				comment: w()
			};
		}
		let t = _(), n = l;
		return f(), p("[") ? {
			type: e,
			size: x(),
			name: t,
			comment: w()
		} : (l = n, {
			type: e,
			name: t,
			comment: w()
		});
	}
	function E() {
		let e = [];
		f();
		let t = T();
		for (t && e.push(t);;) {
			if (f(), l >= c.length || c[l] === ")") return e;
			let t = T();
			t && e.push(t);
		}
	}
	y();
	let D = m(t, !0) ?? u("simple, object or table");
	f();
	let O = g();
	f();
	let k = v();
	y(), p("(") || u("'('");
	let A = E();
	return f(), p(")") || u("')'"), f(), l !== c.length && u("end of input"), {
		type: D,
		name: O,
		comment: k,
		fields: A
	};
}
//#endregion
//#region ../../node_modules/@gmod/bed/esm/numbers.js
function l(e, t, n) {
	let r = t, i = e.charCodeAt(r) === 45;
	if (i && r++, r === n) return i ? NaN : 0;
	if (n - r > 15) return Number(e.slice(t, n));
	let a = 0;
	for (; r < n; r++) {
		let i = e.charCodeAt(r) - 48;
		if (i < 0 || i > 9) return Number(e.slice(t, n));
		a = a * 10 + i;
	}
	return i ? -a : a;
}
function u(e) {
	return e === void 0 ? NaN : l(e, 0, e.length);
}
function d(e) {
	let t = [], n = 0;
	for (;;) {
		let r = e.indexOf(",", n), i = r === -1 ? e.length : r;
		if ((r !== -1 || i > n) && t.push(l(e, n, i)), r === -1) return t;
		n = r + 1;
	}
}
function f(e) {
	let t = 0, n = 0;
	for (;;) {
		let r = e.indexOf(",", n);
		if ((r === -1 ? e.length : r) > n && t++, r === -1) return t;
		n = r + 1;
	}
}
//#endregion
//#region ../../node_modules/@gmod/bed/esm/as/autoSqlSchemas.js
var p = {
	bigChain: "table bigChain\n\"bigChain pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint score;         \"Score (0-1000)\"\n    char[1] strand;     \"+ or - for strand\"\n    uint tSize;         \"size of target sequence\"\n    string qName;       \"name of query sequence\"\n    uint qSize;         \"size of query sequence\"\n    uint qStart;        \"start of alignment on query sequence\"\n    uint qEnd;          \"end of alignment on query sequence\"\n    uint chainScore;    \"score from chain\"\n    )",
	bigGenePred: "table bigGenePred\n\"bigGenePred gene models\"\n   (\n   string chrom;       \"Reference sequence chromosome or scaffold\"\n   uint   chromStart;  \"Start position in chromosome\"\n   uint   chromEnd;    \"End position in chromosome\"\n   string name;        \"Name or ID of item, ideally both human readable and unique\"\n   uint score;         \"Score (0-1000)\"\n   char[1] strand;     \"+ or - for strand\"\n   uint thickStart;    \"Start of where display should be thick (start codon)\"\n   uint thickEnd;      \"End of where display should be thick (stop codon)\"\n   uint reserved;       \"RGB value (use R,G,B string in input file)\"\n   int blockCount;     \"Number of blocks\"\n   int[blockCount] blockSizes; \"Comma separated list of block sizes\"\n   int[blockCount] chromStarts; \"Start positions relative to chromStart\"\n   string name2;       \"Alternative/human readable name\"\n   string cdsStartStat; \"Status of CDS start annotation (none, unknown, incomplete, or complete)\"\n   string cdsEndStat;   \"Status of CDS end annotation (none, unknown, incomplete, or complete)\"\n   int[blockCount] exonFrames; \"Exon frame {0,1,2}, or -1 if no frame for exon\"\n   string type;        \"Transcript type\"\n   string geneName;    \"Primary identifier for gene\"\n   string geneName2;   \"Alternative/human readable gene name\"\n   string geneType;    \"Gene type\"\n   )",
	bigInteract: "table interact\n\"interaction between two regions\"\n    (\n    string chrom;        \"Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records\"\n    uint chromStart;     \"Start position of lower region. For interchromosomal, set to chromStart of this region\"\n    uint chromEnd;       \"End position of upper region. For interchromosomal, set to chromEnd of this region\"\n    string name;         \"Name of item, for display.  Usually 'sourceName/targetName/exp' or empty\"\n    uint score;          \"Score (0-1000)\"\n    double value;        \"Strength of interaction or other data value. Typically basis for score\"\n    string exp;          \"Experiment name (metadata for filtering). Use . if not applicable\"\n    string color;        \"Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score\"\n    string sourceChrom;  \"Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region.\"\n    uint sourceStart;    \"Start position in chromosome of source/lower/this region\"\n    uint sourceEnd;      \"End position in chromosome of source/lower/this region\"\n    string sourceName;   \"Identifier of source/lower/this region\"\n    string sourceStrand; \"Orientation of source/lower/this region: + or -.  Use . if not applicable\"\n    string targetChrom;  \"Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region\"\n    uint targetStart;    \"Start position in chromosome of target/upper/this region\"\n    uint targetEnd;      \"End position in chromosome of target/upper/this region\"\n    string targetName;   \"Identifier of target/upper/this region\"\n    string targetStrand; \"Orientation of target/upper/this region: + or -.  Use . if not applicable\"\n\n    )",
	bigLink: "table bigLink\n\"bigLink pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint qStart;        \"start of alignment on query sequence\"\n    )",
	bigMaf: "table bedMaf\n\"Bed3 with MAF block\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start position in chromosome\"\n    uint   chromEnd;   \"End position in chromosome\"\n    lstring mafBlock;   \"MAF block\"\n    )",
	bigNarrowPeak: "table bigNarrowPeak\n\"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data.\"\n(\n    string chrom;        \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;   \"Start position in chromosome\"\n    uint   chromEnd;     \"End position in chromosome\"\n    string name;	 \"Name given to a region (preferably unique). Use . if no name is assigned\"\n    uint   score;        \"Indicates how dark the peak will be displayed in the browser (0-1000) \"\n    char[1]  strand;     \"+ or - or . for unknown\"\n    float  signalValue;  \"Measurement of average enrichment for the region\"\n    float  pValue;       \"Statistical significance of signal value (-log10). Set to -1 if not used.\"\n    float  qValue;       \"Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used.\"\n    int   peak;         \"Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called.\"\n)",
	bigPsl: "table bigPsl\n\"bigPsl pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint score;         \"Score (0-1000)\"\n    char[1] strand;     \"+ or - indicates whether the query aligns to the + or - strand on the reference\"\n    uint thickStart;    \"Start of where display should be thick (start codon)\"\n    uint thickEnd;      \"End of where display should be thick (stop codon)\"\n    uint reserved;       \"RGB value (use R,G,B string in input file)\"\n    int blockCount;     \"Number of blocks\"\n    int[blockCount] blockSizes; \"Comma separated list of block sizes\"\n    int[blockCount] chromStarts; \"Start positions relative to chromStart\"\n\n    uint    oChromStart;\"Start position in other chromosome\"\n    uint    oChromEnd;  \"End position in other chromosome\"\n    char[1] oStrand;    \"+ or -, - means that psl was reversed into BED-compatible coordinates\"\n    uint    oChromSize; \"Size of other chromosome.\"\n    int[blockCount] oChromStarts; \"Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand\"\n\n    lstring  oSequence;  \"Sequence on other chrom (or empty)\"\n    string   oCDS;       \"CDS in NCBI format\"\n\n    uint    chromSize;\"Size of target chromosome\"\n\n    uint match;        \"Number of bases matched.\"\n    uint misMatch; \" Number of bases that don't match \"\n    uint repMatch; \" Number of bases that match but are part of repeats \"\n    uint nCount;   \" Number of 'N' bases \"\n    uint seqType;    \"0=empty, 1=nucleotide, 2=amino_acid\"\n    )",
	defaultBedSchema: "table defaultBedSchema\n\"BED12\"\n    (\n    string chrom;      \"The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671).\"\n    uint   chromStart; \"The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0.\"\n    uint   chromEnd;   \"The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99.\"\n    string   name;   \"Defines the name of the BED line.\"\n    float   score;   \"Feature score, doesn't care about the 0-1000 limit as in bed\"\n    char   strand;   \"Defines the strand. Either '.' (=no strand) or '+' or '-'\"\n    uint thickStart; \"The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position.\"\n    uint thickEnd; \"The ending position at which the feature is drawn thickly (for example the stop codon in gene displays).\"\n    string itemRgb; \"An RGB value of the form R,G,B (e.g. 255,0,0). \"\n    uint blockCount; \" The number of blocks (exons) in the BED line.\"\n    uint[blockCount] blockSizes; \" A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount.\"\n    uint[blockCount] blockStarts; \"A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount.\"\n    )",
	mafFrames: "table mafFrames\n\"codon frame assignment for MAF components\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start range in chromosome\"\n    uint   chromEnd;   \"End range in chromosome\"\n    string src;        \"Name of sequence source in MAF\"\n    ubyte frame;       \"frame (0,1,2) for first base(+) or last bast(-)\"\n    char[1] strand;    \"+ or -\"\n    string name;       \"Name of gene used to define frame\"\n    int    prevFramePos;  \"target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous\"\n    int    nextFramePos;  \"target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous\"\n    ubyte  isExonStart;  \"does this start the CDS portion of an exon?\"\n    ubyte  isExonEnd;    \"does this end the CDS portion of an exon?\"\n    )",
	mafSummary: "table mafSummary\n\"Positions and scores for alignment blocks\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start position in chromosome\"\n    uint   chromEnd;   \"End position in chromosome\"\n    string src;        \"Sequence name or database of alignment\"\n    float  score;      \"Floating point score.\"\n    char[1] leftStatus;  \"Gap/break annotation for preceding block\"\n    char[1] rightStatus; \"Gap/break annotation for following block\"\n    )"
}, m = /* @__PURE__ */ new Set([
	"uint",
	"int",
	"short",
	"ushort",
	"byte",
	"ubyte",
	"float",
	"double",
	"bigint"
]);
function h(e) {
	return {
		...e,
		fields: e.fields.map((e) => ({
			...e,
			isArray: !!e.size && e.type !== "char",
			arrayIsNumeric: !!e.size && m.has(e.type),
			isNumeric: !e.size && m.has(e.type)
		}))
	};
}
var g = /* @__PURE__ */ new Map(), _;
function v() {
	if (!_) {
		_ = /* @__PURE__ */ new Map();
		for (let e of ["bigGenePred", "defaultBedSchema"]) for (let t of b(e).fields) _.set(t.name, t);
	}
	return _;
}
function y(e) {
	let t = v();
	return { fields: e.map((e) => t.get(e) ?? {
		name: e,
		type: "string",
		comment: ""
	}) };
}
function b(e) {
	let t = g.get(e);
	if (!t) {
		let n = p[e];
		if (n === void 0) throw Error(`Type not found: ${e}`);
		t = c(n), g.set(e, t);
	}
	return t;
}
//#endregion
//#region ../../node_modules/@gmod/bed/esm/parser.js
function x(e) {
	return e === "+" ? 1 : e === "-" ? -1 : 0;
}
function S(e) {
	return e.includes("%") ? e.replace(/%([0-9A-Fa-f]{2})/g, (e, t) => String.fromCharCode(Number.parseInt(t, 16))) : e;
}
function C(e) {
	if (e.length < 12) return !1;
	let t = Number.parseInt(e[9], 10);
	return !Number.isNaN(t) && f(e[10]) === t;
}
function w(e, t) {
	if (t.isNumeric) {
		if (e === "") return;
		let t = l(e, 0, e.length);
		return Number.isNaN(t) ? e : t;
	}
	if (t.isArray) {
		if (t.arrayIsNumeric) return d(e);
		let n = e.split(",");
		return n.at(-1) === "" && n.pop(), n;
	}
	return e;
}
function T(e) {
	let t = {};
	t.chrom = e[0], t.chromStart = u(e[1]), t.chromEnd = u(e[2]), e[3] !== void 0 && (t.name = e[3]);
	let n = e[4];
	if (n !== void 0) {
		let e = Number.parseFloat(n);
		Number.isNaN(e) ? t.field4 = n : t.score = e;
	}
	let r = e[5];
	r !== void 0 && (t[r === "+" || r === "-" ? "strand" : "field5"] = r);
	for (let n = 6; n < e.length; n++) t["field" + n] = e[n];
	return t;
}
var E = class {
	autoSql;
	attemptDefaultBed;
	constructor(e = {}) {
		let { autoSql: t, type: n, columnNames: r } = e;
		this.attemptDefaultBed = !t && !n && !r?.length, this.autoSql = h(t ? c(t) : r?.length ? y(r) : b(n ?? "defaultBedSchema"));
	}
	parseLine(e, t = {}) {
		let { uniqueId: n } = t, r = Array.isArray(e) ? e : e.split("	"), i = this.attemptDefaultBed && !C(r) ? T(r) : this.parseWithSchema(r);
		n && (i.uniqueId = n), i.strand = x(i.strand);
		let { chrom: a } = i;
		return typeof a == "string" && (i.chrom = S(a)), i;
	}
	parseWithSchema(e) {
		let t = this.autoSql.fields, n = {}, r = Math.min(e.length, t.length);
		for (let i = 0; i < r; i++) {
			let r = e[i];
			if (r !== ".") {
				let e = t[i], a = w(r, e);
				a !== void 0 && (n[e.name] = a);
			}
		}
		if (this.attemptDefaultBed) for (let r = t.length; r < e.length; r++) n["field" + r] = e[r];
		return n;
	}
};
//#endregion
export { E as default };
