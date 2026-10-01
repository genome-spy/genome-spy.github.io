function e(e) {
	let t = 0, n = 0, r = e.length;
	for (let i = 0; i <= r; i++) if (i === r || e.charCodeAt(i) === 58) {
		if (i - n === 2 && e.charCodeAt(n) === 71 && e.charCodeAt(n + 1) === 84) return t;
		t++, n = i + 1;
	}
	return -1;
}
function t(t, n, r, i, a = 0, o = n.length) {
	let s = o, c = a;
	if (t === "GT") {
		for (let e = 0; e < r; e++) {
			let t = c;
			for (; c < s && n.charCodeAt(c) !== 9;) c++;
			i(n, t, c, e), c++;
		}
		return;
	}
	let l = e(t);
	if (l !== -1) {
		if (l === 0) {
			for (let e = 0; e < r; e++) {
				let t = c;
				for (; c < s && n.charCodeAt(c) !== 58 && n.charCodeAt(c) !== 9;) c++;
				i(n, t, c, e);
				let r = n.indexOf("	", c);
				c = (r === -1 || r > s ? s : r) + 1;
			}
			return;
		}
		for (let e = 0; e < r; e++) {
			let t = 0, r = c, a = -1, o = -1;
			for (; c < s;) {
				let e = n.charCodeAt(c);
				if (e === 9) break;
				e === 58 && a === -1 && (t === l ? (a = r, o = c) : (t++, r = c + 1)), c++;
			}
			a === -1 && (a = t === l ? r : c, o = c), i(n, a, o, e), c++;
		}
	}
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/parseGenotypesOnly.js
function n(e, n, r, i = 0, a = n.length) {
	let o = Object.create(null);
	return t(e, n, r.length, (e, t, n, i) => {
		o[r[i] ?? ""] = e.slice(t, n);
	}, i, a), o;
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/parseInfo.js
function r(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function i(e, t) {
	let n = {}, i = e.includes("%"), a = e.split(";"), o = a.length;
	for (let e = 0; e < o; e++) {
		let o = a[e] ?? "", s = o.indexOf("="), c = s === -1 ? o : o.slice(0, s), l = s === -1 ? void 0 : o.slice(s + 1), u = t[c]?.Type;
		if (u === "Flag" || !l) n[c] = !0;
		else {
			let e = u === "Integer" || u === "Float", t = l.split(","), a = t.length, o = [];
			for (let n = 0; n < a; n++) {
				let a = t[n] ?? "";
				if (a === ".") o.push(void 0);
				else {
					let t = i ? r(a) : a;
					o.push(e ? Number(t) : t);
				}
			}
			n[c] = o;
		}
	}
	return n;
}
function a(e, t) {
	let n = new Int32Array(t.length).fill(-1), r = 0, i = 0, a = e.length;
	for (let o = 0; o <= a; o++) if (o === a || e.charCodeAt(o) === 58) {
		let a = o - i;
		for (let o = 0; o < t.length; o++) {
			let s = t[o];
			if (n[o] === -1 && s.length === a) {
				let t = !0;
				for (let n = 0; n < a; n++) if (e.charCodeAt(i + n) !== s.charCodeAt(n)) {
					t = !1;
					break;
				}
				t && (n[o] = r);
			}
		}
		r++, i = o + 1;
	}
	return n;
}
function o(e, t, n, r, i, o = 0, s = t.length) {
	let c = r.length;
	if (c === 0) return;
	let l = a(e, r), u = -1;
	for (let e = 0; e < c; e++) l[e] > u && (u = l[e]);
	if (u === -1) return;
	let d = new Int32Array(c * 2), f = s, p = o;
	for (let e = 0; e < n; e++) {
		d.fill(-1);
		let n = 0, r = p, a = !1;
		for (; p < f;) {
			let e = t.charCodeAt(p);
			if (e === 9) break;
			if (e === 58) {
				for (let e = 0; e < c; e++) l[e] === n && (d[e * 2] = r, d[e * 2 + 1] = p);
				if (n++, r = p + 1, n > u) {
					a = !0;
					let e = t.indexOf("	", p);
					p = e === -1 || e > f ? f : e;
					break;
				}
			}
			p++;
		}
		if (!a) for (let e = 0; e < c; e++) l[e] === n && (d[e * 2] = r, d[e * 2 + 1] = p);
		i(t, d, e), p++;
	}
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/Variant.js
var s = class {
	formatMeta;
	line;
	restStart;
	restEnd;
	sampleNames;
	CHROM;
	POS;
	ID;
	REF;
	ALT;
	QUAL;
	FILTER;
	INFO;
	FORMAT;
	constructor(e, t, n, r, a) {
		let o = e.length;
		for (; o > 0;) {
			let t = e.charCodeAt(o - 1);
			if (t !== 10 && t !== 13) break;
			--o;
		}
		let s = 0, c = 0;
		for (; s < o && c < 9;) e.charCodeAt(s) === 9 && (c += 1), s += 1;
		let l = c === 9 ? s - 1 : s, u = e.slice(0, l).split("	"), [d, f, p, m, h, g, _] = u;
		if (a && !u[7]) throw Error("no INFO field specified, must contain at least a '.' (turn off strict mode to allow)");
		let v = _ === "." ? void 0 : _?.split(";");
		this.CHROM = d, this.POS = f === void 0 ? 0 : +f, this.ID = p === "." ? void 0 : p?.split(";"), this.REF = m, this.ALT = h === "." ? void 0 : h?.split(","), this.QUAL = g === void 0 || g === "." ? void 0 : +g, this.FILTER = v?.length === 1 && v[0] === "PASS" ? "PASS" : v, this.INFO = u[7] === void 0 || u[7] === "." ? {} : i(u[7], t), this.FORMAT = u[8], this.formatMeta = n, this.line = e, this.restStart = Math.min(l + 1, o), this.restEnd = o, this.sampleNames = r;
	}
	get rest() {
		return this.line.slice(this.restStart, this.restEnd);
	}
	SAMPLES() {
		let e = {}, t = this.FORMAT;
		if (t) {
			let n = this.rest.split("	"), r = t.split(":"), i = r.map((e) => {
				let t = this.formatMeta[e]?.Type;
				return t === "Integer" || t === "Float";
			}), a = r.length, o = this.sampleNames.length;
			for (let t = 0; t < o; t++) {
				let o = this.sampleNames[t] ?? "", s = {}, c = n[t] ?? "", l = c.length, u = 0, d = 0;
				for (let e = 0; e <= l; e++) if (e === l || c.charCodeAt(e) === 58) {
					let t = r[d] ?? "", n = c.slice(u, e), o = i[d];
					if (n === "" || n === ".") s[t] = void 0;
					else if (!n.includes(",")) s[t] = [o ? +n : n];
					else {
						let e = n.split(","), r = e.length, i = [];
						for (let t = 0; t < r; t++) {
							let n = e[t] ?? "";
							i.push(n === "." ? void 0 : o ? +n : n);
						}
						s[t] = i;
					}
					if (u = e + 1, d += 1, d >= a) break;
				}
				e[o] = s;
			}
		}
		return e;
	}
	GENOTYPES() {
		return n(this.FORMAT ?? "", this.line, this.sampleNames, this.restStart, this.restEnd);
	}
	processGenotypes(e) {
		t(this.FORMAT ?? "", this.line, this.sampleNames.length, e, this.restStart, this.restEnd);
	}
	processFormatFields(e, t) {
		o(this.FORMAT ?? "", this.line, this.sampleNames.length, e, t, this.restStart, this.restEnd);
	}
	toJSON() {
		return {
			CHROM: this.CHROM,
			POS: this.POS,
			ID: this.ID,
			REF: this.REF,
			ALT: this.ALT,
			QUAL: this.QUAL,
			FILTER: this.FILTER,
			INFO: this.INFO,
			FORMAT: this.FORMAT
		};
	}
};
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/parseMetaString.js
function c(e) {
	let t = [], n = !1, r = !1, i = 0, a = e.length;
	for (let o = 0; o < a; o++) {
		let a = e[o];
		a === "\"" ? n = !n : a === "[" ? r = !0 : a === "]" ? r = !1 : a === "," && !n && !r && (t.push(e.slice(i, o).trim()), i = o + 1);
	}
	return i < a && t.push(e.slice(i).trim()), t;
}
function l(e, t) {
	let n = e.indexOf(t);
	return n === -1 ? [e, ""] : [e.slice(0, n), e.slice(n + 1)];
}
function u(e) {
	let t = d(e), n = t.ID;
	if (delete t.ID, "Number" in t) {
		let e = Number(t.Number);
		Number.isNaN(e) || (t.Number = e);
	}
	return [n, t];
}
function d(e) {
	let t = c(e.slice(1, -1)), n = {};
	for (let e of t) {
		let [t, r] = l(e, "=");
		n[t] = r && r.startsWith("[") && r.endsWith("]") ? r.slice(1, -1).split(",").map((e) => e.trim()) : r && r.startsWith("\"") && r.endsWith("\"") ? r.slice(1, -1) : r;
	}
	return n;
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/vcfReserved.js
var f = {
	InfoFields: {
		AA: {
			Number: 1,
			Type: "String",
			Description: "Ancestral allele"
		},
		AC: {
			Number: "A",
			Type: "Integer",
			Description: "Allele count in genotypes, for each ALT allele, in the same order as listed"
		},
		AD: {
			Number: "R",
			Type: "Integer",
			Description: "Total read depth for each allele"
		},
		ADF: {
			Number: "R",
			Type: "Integer",
			Description: "Read depth for each allele on the forward strand"
		},
		ADR: {
			Number: "R",
			Type: "Integer",
			Description: "Read depth for each allele on the reverse strand"
		},
		AF: {
			Number: "A",
			Type: "Float",
			Description: "Allele frequency for each ALT allele in the same order as listed (estimated from primary data, not called genotypes)"
		},
		AN: {
			Number: 1,
			Type: "Integer",
			Description: "Total number of alleles in called genotypes"
		},
		BQ: {
			Number: 1,
			Type: "Float",
			Description: "RMS base quality"
		},
		CIGAR: {
			Number: 1,
			Type: "Float",
			Description: "Cigar string describing how to align an alternate allele to the reference allele"
		},
		DB: {
			Number: 0,
			Type: "Flag",
			Description: "dbSNP membership"
		},
		DP: {
			Number: 1,
			Type: "Integer",
			Description: "combined depth across samples"
		},
		END: {
			Number: 1,
			Type: "Integer",
			Description: "End position (for use with symbolic alleles)"
		},
		H2: {
			Number: 0,
			Type: "Flag",
			Description: "HapMap2 membership"
		},
		H3: {
			Number: 0,
			Type: "Flag",
			Description: "HapMap3 membership"
		},
		MQ: {
			Number: 1,
			Type: null,
			Description: "RMS mapping quality"
		},
		MQ0: {
			Number: 1,
			Type: "Integer",
			Description: "Number of MAPQ == 0 reads"
		},
		NS: {
			Number: 1,
			Type: "Integer",
			Description: "Number of samples with data"
		},
		SB: {
			Number: 4,
			Type: "Integer",
			Description: "Strand bias"
		},
		SOMATIC: {
			Number: 0,
			Type: "Flag",
			Description: "Somatic mutation (for cancer genomics)"
		},
		VALIDATED: {
			Number: 0,
			Type: "Flag",
			Description: "Validated by follow-up experiment"
		},
		"1000G": {
			Number: 0,
			Type: "Flag",
			Description: "1000 Genomes membership"
		},
		IMPRECISE: {
			Number: 0,
			Type: "Flag",
			Description: "Imprecise structural variation"
		},
		NOVEL: {
			Number: 0,
			Type: "Flag",
			Description: "Indicates a novel structural variation"
		},
		SVTYPE: {
			Number: 1,
			Type: "String",
			Description: "Type of structural variant"
		},
		SVLEN: {
			Number: null,
			Type: "Integer",
			Description: "Difference in length between REF and ALT alleles"
		},
		CIPOS: {
			Number: 2,
			Type: "Integer",
			Description: "Confidence interval around POS for imprecise variants"
		},
		CIEND: {
			Number: 2,
			Type: "Integer",
			Description: "Confidence interval around END for imprecise variants"
		},
		HOMLEN: {
			Type: "Integer",
			Description: "Length of base pair identical micro-homology at event breakpoints"
		},
		HOMSEQ: {
			Type: "String",
			Description: "Sequence of base pair identical micro-homology at event breakpoints"
		},
		BKPTID: {
			Type: "String",
			Description: "ID of the assembled alternate allele in the assembly file"
		},
		MEINFO: {
			Number: 4,
			Type: "String",
			Description: "Mobile element info of the form NAME,START,END,POLARITY"
		},
		METRANS: {
			Number: 4,
			Type: "String",
			Description: "Mobile element transduction info of the form CHR,START,END,POLARITY"
		},
		DGVID: {
			Number: 1,
			Type: "String",
			Description: "ID of this element in Database of Genomic Variation"
		},
		DBVARID: {
			Number: 1,
			Type: "String",
			Description: "ID of this element in DBVAR"
		},
		DBRIPID: {
			Number: 1,
			Type: "String",
			Description: "ID of this element in DBRIP"
		},
		MATEID: {
			Number: null,
			Type: "String",
			Description: "ID of mate breakends"
		},
		PARID: {
			Number: 1,
			Type: "String",
			Description: "ID of partner breakend"
		},
		EVENT: {
			Number: 1,
			Type: "String",
			Description: "ID of event associated to breakend"
		},
		CILEN: {
			Number: 2,
			Type: "Integer",
			Description: "Confidence interval around the inserted material between breakend"
		},
		DPADJ: {
			Type: "Integer",
			Description: "Read Depth of adjacency"
		},
		CN: {
			Number: 1,
			Type: "Integer",
			Description: "Copy number of segment containing breakend"
		},
		CNADJ: {
			Number: null,
			Type: "Integer",
			Description: "Copy number of adjacency"
		},
		CICN: {
			Number: 2,
			Type: "Integer",
			Description: "Confidence interval around copy number for the segment"
		},
		CICNADJ: {
			Number: null,
			Type: "Integer",
			Description: "Confidence interval around copy number for the adjacency"
		}
	},
	GenotypeFields: {
		AD: {
			Number: "R",
			Type: "Integer",
			Description: "Read depth for each allele"
		},
		ADF: {
			Number: "R",
			Type: "Integer",
			Description: "Read depth for each allele on the forward strand"
		},
		ADR: {
			Number: "R",
			Type: "Integer",
			Description: "Read depth for each allele on the reverse strand"
		},
		DP: {
			Number: 1,
			Type: "Integer",
			Description: "Read depth"
		},
		EC: {
			Number: "A",
			Type: "Integer",
			Description: "Expected alternate allele counts"
		},
		FT: {
			Number: 1,
			Type: "String",
			Description: "Filter indicating if this genotype was \"called\""
		},
		GL: {
			Number: "G",
			Type: "Float",
			Description: "Genotype likelihoods"
		},
		GP: {
			Number: "G",
			Type: "Float",
			Description: "Genotype posterior probabilities"
		},
		GQ: {
			Number: 1,
			Type: "Integer",
			Description: "Conditional genotype quality"
		},
		GT: {
			Number: 1,
			Type: "String",
			Description: "Genotype"
		},
		HQ: {
			Number: 2,
			Type: "Integer",
			Description: "Haplotype quality"
		},
		MQ: {
			Number: 1,
			Type: "Integer",
			Description: "RMS mapping quality"
		},
		PL: {
			Number: "G",
			Type: "Integer",
			Description: "Phred-scaled genotype likelihoods rounded to the closest integer"
		},
		PQ: {
			Number: 1,
			Type: "Integer",
			Description: "Phasing quality"
		},
		PS: {
			Number: 1,
			Type: "Integer",
			Description: "Phase set"
		}
	},
	AltTypes: {
		DEL: { Description: "Deletion relative to the reference" },
		INS: { Description: "Insertion of novel sequence relative to the reference" },
		DUP: { Description: "Region of elevated copy number relative to the reference" },
		INV: { Description: "Inversion of reference sequence" },
		CNV: { Description: "Copy number variable region (may be both deletion and duplication)" },
		"DUP:TANDEM": { Description: "Tandem duplication" },
		"DEL:ME": { Description: "Deletion of mobile element relative to the reference" },
		"INS:ME": { Description: "Insertion of a mobile element relative to the reference" },
		NON_REF: { Description: "Represents any possible alternative allele at this location" },
		"*": { Description: "Represents any possible alternative allele at this location" }
	},
	FilterTypes: { PASS: { Description: "Passed all filters" } }
}, p = [
	"#CHROM",
	"POS",
	"ID",
	"REF",
	"ALT",
	"QUAL",
	"FILTER",
	"INFO"
];
function m(e) {
	return typeof e == "object" && !!e;
}
var h = class {
	metadata;
	strict;
	samples;
	constructor({ header: e, strict: t = !0 }) {
		if (!e.length) throw Error("empty header received");
		let n = e.split(/[\r\n]+/).filter(Boolean);
		if (!n.length) throw Error("no non-empty header lines specified");
		this.strict = t, this.metadata = {
			INFO: { ...f.InfoFields },
			FORMAT: { ...f.GenotypeFields },
			ALT: { ...f.AltTypes },
			FILTER: { ...f.FilterTypes }
		};
		let r;
		for (let e of n) {
			if (!e.startsWith("#")) throw Error(`Bad line in header:\n${e}`);
			e.startsWith("##") ? this.parseMetadata(e) : r = e;
		}
		if (!r) throw Error("No format line found in header");
		let i = r.trim().split("	");
		if (i.length < 8) throw Error(`VCF header missing columns:\n${r}`);
		if (p.some((e, t) => i[t] !== e)) throw Error(`VCF column headers not correct:\n${r}`);
		this.samples = i.slice(9);
	}
	parseMetadata(e) {
		let t = /^##(.+?)=(.*)/.exec(e.trim());
		if (!t) throw Error(`Line is not a valid metadata line: ${e}`);
		let n = t[1] ?? "", r = t[2];
		if (r?.startsWith("<")) {
			let e = this.metadata[n], t = e && typeof e == "object" ? e : {}, [i, a] = u(r);
			typeof i == "string" ? (t[i] = a, this.metadata[n] = t) : this.metadata[n] = a;
		} else this.metadata[n] = r;
	}
	getMetadata(...e) {
		let t = this.metadata;
		for (let n of e) t = m(t) ? t[n] : void 0;
		return t;
	}
	parseLine(e) {
		return new s(e, this.metadata.INFO, this.metadata.FORMAT, this.samples, this.strict);
	}
};
//#endregion
export { h as default };
