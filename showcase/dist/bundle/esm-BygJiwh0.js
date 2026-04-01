//#region ../../node_modules/@gmod/vcf/esm/parseGenotypesOnly.js
function e(e, t, n) {
	let r = Object.create(null), i = n.length, a = t.length, o = 0;
	if (e === "GT") {
		for (let e = 0; e < i; e++) {
			let i = o;
			for (; o < a && t.charCodeAt(o) !== 9;) o++;
			r[n[e]] = t.slice(i, o), o++;
		}
		return r;
	}
	let s = e.indexOf("GT");
	if (s === -1) return r;
	if (s === 0) {
		for (let e = 0; e < i; e++) {
			let i = o;
			for (; o < a && t.charCodeAt(o) !== 58 && t.charCodeAt(o) !== 9;) o++;
			for (r[n[e]] = t.slice(i, o); o < a && t.charCodeAt(o) !== 9;) o++;
			o++;
		}
		return r;
	}
	let c = 0;
	for (let t = 0; t < s; t++) e.charCodeAt(t) === 58 && c++;
	for (let e = 0; e < i; e++) {
		let i = o, s = o;
		for (; s < a && t.charCodeAt(s) !== 9;) s++;
		let l = 0, u = i;
		for (let a = i; a <= s; a++) if (a === s || t.charCodeAt(a) === 58) {
			if (l === c) {
				r[n[e]] = t.slice(u, a);
				break;
			}
			l++, u = a + 1;
		}
		o = s + 1;
	}
	return r;
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/processGenotypes.js
function t(e, t, n, r) {
	let i = t.length, a = 0;
	if (e === "GT") {
		for (let e = 0; e < n; e++) {
			let e = a;
			for (; a < i && t.charCodeAt(a) !== 9;) a++;
			r(t, e, a), a++;
		}
		return;
	}
	let o = e.indexOf("GT");
	if (o === -1) return;
	if (o === 0) {
		for (let e = 0; e < n; e++) {
			let e = a;
			for (; a < i && t.charCodeAt(a) !== 58 && t.charCodeAt(a) !== 9;) a++;
			for (r(t, e, a); a < i && t.charCodeAt(a) !== 9;) a++;
			a++;
		}
		return;
	}
	let s = 0;
	for (let t = 0; t < o; t++) e.charCodeAt(t) === 58 && s++;
	for (let e = 0; e < n; e++) {
		let e = a, n = a;
		for (; n < i && t.charCodeAt(n) !== 9;) n++;
		let o = 0, c = e;
		for (let i = e; i <= n; i++) if (i === n || t.charCodeAt(i) === 58) {
			if (o === s) {
				r(t, c, i);
				break;
			}
			o++, c = i + 1;
		}
		a = n + 1;
	}
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/Variant.js
function n(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
var r = class {
	constructor(e, t, n, r, i) {
		let a = 0, o = 0;
		for (; a < e.length && o < 9;) e[a] === "	" && (o += 1), a += 1;
		let s = o === 9 ? a - 1 : a, c = e.slice(0, s).split("	"), l = e.slice(s + 1), [u, d, f, p, m, h, g] = c, _ = g === "." ? void 0 : g.split(";");
		if (i && !c[7]) throw Error("no INFO field specified, must contain at least a '.' (turn off strict mode to allow)");
		this.CHROM = u, this.POS = +d, this.ID = f === "." ? void 0 : f.split(";"), this.REF = p, this.ALT = m === "." ? void 0 : m.split(","), this.QUAL = h === "." ? void 0 : +h, this.FILTER = _?.length === 1 && _[0] === "PASS" ? "PASS" : _, this.INFO = c[7] === void 0 || c[7] === "." ? {} : this.parseInfo(c[7], t), this.FORMAT = c[8], this.formatMeta = n, this.rest = l, this.sampleNames = r;
	}
	parseInfo(e, t) {
		let r = {}, i = e.includes("%"), a = e.split(";"), o = a.length;
		for (let e = 0; e < o; e++) {
			let o = a[e], s = o.indexOf("="), c = s === -1 ? o : o.slice(0, s), l = s === -1 ? void 0 : o.slice(s + 1), u = t[c]?.Type;
			if (u === "Flag") r[c] = !0;
			else if (!l) r[c] = !0;
			else {
				let e = u === "Integer" || u === "Float", t = l.split(","), a = t.length;
				if (i) {
					let i = [];
					for (let r = 0; r < a; r++) {
						let a = t[r];
						if (a === ".") i.push(void 0);
						else {
							let t = n(a);
							i.push(e ? Number(t) : t);
						}
					}
					r[c] = i;
				} else {
					let n = [];
					for (let r = 0; r < a; r++) {
						let i = t[r];
						i === "." ? n.push(void 0) : n.push(e ? Number(i) : i);
					}
					r[c] = n;
				}
			}
		}
		return r;
	}
	SAMPLES() {
		let e = {}, t = this.FORMAT;
		if (t) {
			let n = this.rest.split("	"), r = t.split(":"), i = [];
			for (let e = 0; e < r.length; e++) {
				let t = this.formatMeta[r[e]]?.Type;
				i.push(t === "Integer" || t === "Float");
			}
			let a = r.length, o = this.sampleNames.length;
			for (let t = 0; t < o; t++) {
				let o = this.sampleNames[t], s = {}, c = n[t], l = c.length, u = 0, d = 0;
				for (let e = 0; e <= l; e++) if (e === l || c[e] === ":") {
					let t = c.slice(u, e);
					if (t === "" || t === ".") s[r[d]] = void 0;
					else {
						let e = t.split(","), n = [];
						if (i[d]) for (let t = 0; t < e.length; t++) {
							let r = e[t];
							n.push(r === "." ? void 0 : +r);
						}
						else for (let t = 0; t < e.length; t++) {
							let r = e[t];
							n.push(r === "." ? void 0 : r);
						}
						s[r[d]] = n;
					}
					if (u = e + 1, d += 1, d >= a) break;
				}
				e[o] = s;
			}
		}
		return e;
	}
	GENOTYPES() {
		return e(this.FORMAT ?? "", this.rest, this.sampleNames);
	}
	processGenotypes(e) {
		t(this.FORMAT ?? "", this.rest, this.sampleNames.length, e);
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
function i(e) {
	let t = [], n = [], r = !1, i = !1, a = e.length;
	for (let o = 0; o < a; o++) {
		let a = e[o];
		a === "\"" ? (r = !r, n.push(a)) : a === "[" ? (i = !0, n.push(a)) : a === "]" ? (i = !1, n.push(a)) : a === "," && !r && !i ? (t.push(n.join("").trim()), n.length = 0) : n.push(a);
	}
	return n.length > 0 && t.push(n.join("").trim()), t;
}
function a(e, t) {
	let n = e.indexOf(t);
	return [e.slice(0, n), e.slice(n + 1)];
}
function o(e) {
	let t = i(e.slice(1, -1)), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e], [i, o] = a(r, "=");
		if (o && o.startsWith("[") && o.endsWith("]")) {
			let e = o.slice(1, -1).split(",");
			for (let t = 0; t < e.length; t++) e[t] = e[t].trim();
			n.push([i, e]);
		} else o && o.startsWith("\"") && o.endsWith("\"") ? n.push([i, o.slice(1, -1)]) : n.push([i, o]);
	}
	return Object.fromEntries(n);
}
//#endregion
//#region ../../node_modules/@gmod/vcf/esm/vcfReserved.js
var s = {
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
}, c = class {
	constructor({ header: e, strict: t = !0 }) {
		if (!e.length) throw Error("empty header received");
		let n = e.split(/[\r\n]+/).filter(Boolean);
		if (!n.length) throw Error("no non-empty header lines specified");
		this.strict = t, this.metadata = {
			INFO: { ...s.InfoFields },
			FORMAT: { ...s.GenotypeFields },
			ALT: { ...s.AltTypes },
			FILTER: { ...s.FilterTypes }
		};
		let r;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			if (t.startsWith("#")) t.startsWith("##") ? this.parseMetadata(t) : r = t;
			else throw Error(`Bad line in header:\n${t}`);
		}
		if (!r) throw Error("No format line found in header");
		let i = r.trim().split("	"), a = i.slice(0, 8), o = [
			"#CHROM",
			"POS",
			"ID",
			"REF",
			"ALT",
			"QUAL",
			"FILTER",
			"INFO"
		];
		if (i.length < 8) throw Error(`VCF header missing columns:\n${r}`);
		if (a.length !== o.length || !a.every((e, t) => e === o[t])) throw Error(`VCF column headers not correct:\n${r}`);
		this.samples = i.slice(9);
	}
	parseMetadata(e) {
		let t = /^##(.+?)=(.*)/.exec(e.trim());
		if (!t) throw Error(`Line is not a valid metadata line: ${e}`);
		let [n, r] = t.slice(1, 3), i = n;
		if (r?.startsWith("<")) {
			i in this.metadata || (this.metadata[i] = {});
			let [e, t] = this.parseStructuredMetaVal(r);
			e ? this.metadata[i][e] = t : this.metadata[i] = t;
		} else this.metadata[i] = r;
	}
	parseStructuredMetaVal(e) {
		let t = o(e), n = t.ID;
		return delete t.ID, "Number" in t && (Number.isNaN(Number(t.Number)) || (t.Number = Number(t.Number))), [n, t];
	}
	getMetadata(...e) {
		let t = this.metadata, n = e.length;
		for (let r = 0; r < n; r++) if (t = t[e[r]], !t) return t;
		return t;
	}
	parseLine(e) {
		return new r(e, this.metadata.INFO, this.metadata.FORMAT, this.samples, this.strict);
	}
};
//#endregion
export { c as default };
