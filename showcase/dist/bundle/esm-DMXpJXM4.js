import { t as e } from "./chunk-DmhlhrBa.js";
//#region ../../node_modules/@gmod/bed/esm/autoSql.js
function t(e, t) {
	function n() {
		this.constructor = e;
	}
	n.prototype = t.prototype, e.prototype = new n();
}
function n(e, t, r, i) {
	this.message = e, this.expected = t, this.found = r, this.location = i, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, n);
}
t(n, Error), n.buildMessage = function(e, t) {
	var n = {
		literal: function(e) {
			return "\"" + i(e.text) + "\"";
		},
		class: function(e) {
			var t = "", n;
			for (n = 0; n < e.parts.length; n++) t += e.parts[n] instanceof Array ? a(e.parts[n][0]) + "-" + a(e.parts[n][1]) : a(e.parts[n]);
			return "[" + (e.inverted ? "^" : "") + t + "]";
		},
		any: function(e) {
			return "any character";
		},
		end: function(e) {
			return "end of input";
		},
		other: function(e) {
			return e.description;
		}
	};
	function r(e) {
		return e.charCodeAt(0).toString(16).toUpperCase();
	}
	function i(e) {
		return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function a(e) {
		return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
			return "\\x0" + r(e);
		}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
			return "\\x" + r(e);
		});
	}
	function o(e) {
		return n[e.type](e);
	}
	function s(e) {
		var t = Array(e.length), n, r;
		for (n = 0; n < e.length; n++) t[n] = o(e[n]);
		if (t.sort(), t.length > 0) {
			for (n = 1, r = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[r] = t[n], r++);
			t.length = r;
		}
		switch (t.length) {
			case 1: return t[0];
			case 2: return t[0] + " or " + t[1];
			default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
		}
	}
	function c(e) {
		return e ? "\"" + i(e) + "\"" : "end of input";
	}
	return "Expected " + s(e) + " but " + c(t) + " found.";
};
function r(e, t) {
	t = t === void 0 ? {} : t;
	var r = {}, i = { declaration: $e }, a = $e, o = "(", s = G("(", !1), c = ")", l = G(")", !1), u = function(e, t, n, r) {
		return {
			type: e,
			name: t,
			comment: n,
			fields: r
		};
	}, d = "simple", f = G("simple", !1), p = "object", m = G("object", !1), h = "table", g = G("table", !1), _ = "auto", v = G("auto", !1), y = "primary", b = G("primary", !1), ee = "index", te = G("index", !1), ne = "unique", re = G("unique", !1), x = function(e, t) {
		return t;
	}, ie = function(e, t) {
		return e.name && t.unshift(e), t;
	}, ae = "#", oe = G("#", !1), S = ";", C = G(";", !1), se = function(e, t, n) {
		return {
			type: e,
			name: t,
			comment: n
		};
	}, ce = "[", le = G("[", !1), ue = "]", de = G("]", !1), fe = function(e, t, n, r) {
		return {
			type: e,
			size: t,
			name: n,
			comment: r
		};
	}, pe = function(e, t, n, r) {
		return {
			type: e,
			vals: t,
			name: n,
			comment: r
		};
	}, me = ",", he = G(",", !1), ge = function(e, t) {
		return t.unshift(e), t;
	}, _e = "int", ve = G("int", !1), w = "uint", ye = G("uint", !1), T = "short", be = G("short", !1), E = "ushort", xe = G("ushort", !1), D = "byte", Se = G("byte", !1), O = "ubyte", Ce = G("ubyte", !1), k = "float", we = G("float", !1), A = "char", Te = G("char", !1), j = "string", Ee = G("string", !1), M = "lstring", De = G("lstring", !1), N = "enum", Oe = G("enum", !1), P = "double", ke = G("double", !1), F = "bigint", Ae = G("bigint", !1), I = "set", je = G("set", !1), Me = function(e, t) {
		return e + " " + t;
	}, Ne = /^[a-zA-Z_]/, Pe = K([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1), L = /^[a-zA-Z0-9_]/, Fe = K([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1), Ie = function(e) {
		return qe();
	}, Le = /^[^\n\r]/, Re = K(["\n", "\r"], !0, !1), ze = function(e) {
		return e.join("").replace(/^"/, "").replace(/"$/, "");
	}, Be = Ye("integer"), Ve = /^[0-9]/, He = K([["0", "9"]], !1, !1), Ue = function() {
		return parseInt(qe(), 10);
	}, We = Ye("whitespace"), Ge = /^[ \t\n\r]/, Ke = K([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1), R = 0, z = 0, B = [{
		line: 1,
		column: 1
	}], V = 0, H = [], U = 0, W;
	if ("startRule" in t) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function qe() {
		return e.substring(z, R);
	}
	function G(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function K(e, t, n) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n
		};
	}
	function Je() {
		return { type: "end" };
	}
	function Ye(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Xe(t) {
		var n = B[t], r;
		if (n) return n;
		for (r = t - 1; !B[r];) r--;
		for (n = B[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return B[t] = n, n;
	}
	function Ze(e, t) {
		var n = Xe(e), r = Xe(t);
		return {
			start: {
				offset: e,
				line: n.line,
				column: n.column
			},
			end: {
				offset: t,
				line: r.line,
				column: r.column
			}
		};
	}
	function q(e) {
		R < V || (R > V && (V = R, H = []), H.push(e));
	}
	function Qe(e, t, r) {
		return new n(n.buildMessage(e, t), e, t, r);
	}
	function $e() {
		var t = R, n = $(), i, a, d, f, p, m, h, g, _, v, y, b;
		return n === r ? (R = t, t = r) : (i = J(), i === r ? (R = t, t = r) : (a = $(), a === r ? (R = t, t = r) : (d = et(), d === r ? (R = t, t = r) : (f = $(), f === r ? (R = t, t = r) : (p = Y(), p === r ? (R = t, t = r) : (m = $(), m === r ? (R = t, t = r) : (e.charCodeAt(R) === 40 ? (h = o, R++) : (h = r, U === 0 && q(s)), h === r ? (R = t, t = r) : (g = $(), g === r ? (R = t, t = r) : (_ = nt(), _ === r ? (R = t, t = r) : (v = $(), v === r ? (R = t, t = r) : (e.charCodeAt(R) === 41 ? (y = c, R++) : (y = r, U === 0 && q(l)), y === r ? (R = t, t = r) : (b = $(), b === r ? (R = t, t = r) : (z = t, n = u(i, d, p, _), t = n))))))))))))), t;
	}
	function J() {
		var t;
		return e.substr(R, 6) === d ? (t = d, R += 6) : (t = r, U === 0 && q(f)), t === r && (e.substr(R, 6) === p ? (t = p, R += 6) : (t = r, U === 0 && q(m)), t === r && (e.substr(R, 5) === h ? (t = h, R += 5) : (t = r, U === 0 && q(g)))), t;
	}
	function et() {
		var t = Q(), n, i, a;
		return t === r && (t = R, n = Q(), n === r ? (R = t, t = r) : (i = tt(), i === r ? (R = t, t = r) : (n = [n, i], t = n)), t === r && (t = R, n = Q(), n === r ? (R = t, t = r) : (e.substr(R, 4) === _ ? (i = _, R += 4) : (i = r, U === 0 && q(v)), i === r ? (R = t, t = r) : (n = [n, i], t = n)), t === r && (t = R, n = Q(), n === r ? (R = t, t = r) : (i = tt(), i === r ? (R = t, t = r) : (e.substr(R, 4) === _ ? (a = _, R += 4) : (a = r, U === 0 && q(v)), a === r ? (R = t, t = r) : (n = [
			n,
			i,
			a
		], t = n)))))), t;
	}
	function tt() {
		var t;
		return e.substr(R, 7) === y ? (t = y, R += 7) : (t = r, U === 0 && q(b)), t === r && (e.substr(R, 5) === ee ? (t = ee, R += 5) : (t = r, U === 0 && q(te)), t === r && (e.substr(R, 6) === ne ? (t = ne, R += 6) : (t = r, U === 0 && q(re)))), t;
	}
	function Y() {
		var e = st();
		return e === r && (e = $()), e;
	}
	function nt() {
		var e = R, t = X(), n, i, a, o, s;
		if (t !== r) if (n = $(), n !== r) {
			for (i = [], a = R, o = $(), o === r ? (R = a, a = r) : (s = X(), s === r ? (R = a, a = r) : (z = a, o = x(t, s), a = o)); a !== r;) i.push(a), a = R, o = $(), o === r ? (R = a, a = r) : (s = X(), s === r ? (R = a, a = r) : (z = a, o = x(t, s), a = o));
			i === r ? (R = e, e = r) : (a = $(), a === r ? (R = e, e = r) : (z = e, t = ie(t, i), e = t));
		} else R = e, e = r;
		else R = e, e = r;
		return e;
	}
	function rt() {
		var t;
		return e.charCodeAt(R) === 35 ? (t = ae, R++) : (t = r, U === 0 && q(oe)), t;
	}
	function it() {
		var e = R, t = $(), n, i, a;
		return t === r ? (R = e, e = r) : (n = rt(), n === r ? (R = e, e = r) : (i = st(), i === r ? (R = e, e = r) : (a = $(), a === r ? (R = e, e = r) : (t = [
			t,
			n,
			i,
			a
		], e = t)))), e;
	}
	function X() {
		var t = R, n = Z(), i, a, u, d, f, p, m, h, g, _, v, y;
		return n === r ? (R = t, t = r) : (i = $(), i === r ? (R = t, t = r) : (a = Q(), a === r ? (R = t, t = r) : (u = $(), u === r ? (R = t, t = r) : (e.charCodeAt(R) === 59 ? (d = S, R++) : (d = r, U === 0 && q(C)), d === r ? (R = t, t = r) : (f = $(), f === r ? (R = t, t = r) : (p = Y(), p === r ? (R = t, t = r) : (z = t, n = se(n, a, p), t = n))))))), t === r && (t = R, n = Z(), n === r ? (R = t, t = r) : (i = $(), i === r ? (R = t, t = r) : (e.charCodeAt(R) === 91 ? (a = ce, R++) : (a = r, U === 0 && q(le)), a === r ? (R = t, t = r) : (u = $(), u === r ? (R = t, t = r) : (d = ot(), d === r ? (R = t, t = r) : (f = $(), f === r ? (R = t, t = r) : (e.charCodeAt(R) === 93 ? (p = ue, R++) : (p = r, U === 0 && q(de)), p === r ? (R = t, t = r) : (m = $(), m === r ? (R = t, t = r) : (h = Q(), h === r ? (R = t, t = r) : (g = $(), g === r ? (R = t, t = r) : (e.charCodeAt(R) === 59 ? (_ = S, R++) : (_ = r, U === 0 && q(C)), _ === r ? (R = t, t = r) : (v = $(), v === r ? (R = t, t = r) : (y = Y(), y === r ? (R = t, t = r) : (z = t, n = fe(n, d, h, y), t = n))))))))))))), t === r && (t = R, n = Z(), n === r ? (R = t, t = r) : (i = $(), i === r ? (R = t, t = r) : (e.charCodeAt(R) === 40 ? (a = o, R++) : (a = r, U === 0 && q(s)), a === r ? (R = t, t = r) : (u = $(), u === r ? (R = t, t = r) : (d = at(), d === r ? (R = t, t = r) : (f = $(), f === r ? (R = t, t = r) : (e.charCodeAt(R) === 41 ? (p = c, R++) : (p = r, U === 0 && q(l)), p === r ? (R = t, t = r) : (m = $(), m === r ? (R = t, t = r) : (h = Q(), h === r ? (R = t, t = r) : (g = $(), g === r ? (R = t, t = r) : (e.charCodeAt(R) === 59 ? (_ = S, R++) : (_ = r, U === 0 && q(C)), _ === r ? (R = t, t = r) : (v = $(), v === r ? (R = t, t = r) : (y = Y(), y === r ? (R = t, t = r) : (z = t, n = pe(n, d, h, y), t = n))))))))))))), t === r && (t = it()))), t;
	}
	function at() {
		var t = R, n = Q(), i, a, o, s, c;
		if (n !== r) {
			for (i = [], a = R, e.charCodeAt(R) === 44 ? (o = me, R++) : (o = r, U === 0 && q(he)), o === r ? (R = a, a = r) : (s = $(), s === r ? (R = a, a = r) : (c = Q(), c === r ? (R = a, a = r) : (z = a, o = x(n, c), a = o))); a !== r;) i.push(a), a = R, e.charCodeAt(R) === 44 ? (o = me, R++) : (o = r, U === 0 && q(he)), o === r ? (R = a, a = r) : (s = $(), s === r ? (R = a, a = r) : (c = Q(), c === r ? (R = a, a = r) : (z = a, o = x(n, c), a = o)));
			i === r ? (R = t, t = r) : (z = t, n = ge(n, i), t = n);
		} else R = t, t = r;
		return t;
	}
	function Z() {
		var t, n, i, a;
		return e.substr(R, 3) === _e ? (t = _e, R += 3) : (t = r, U === 0 && q(ve)), t === r && (e.substr(R, 4) === w ? (t = w, R += 4) : (t = r, U === 0 && q(ye)), t === r && (e.substr(R, 5) === T ? (t = T, R += 5) : (t = r, U === 0 && q(be)), t === r && (e.substr(R, 6) === E ? (t = E, R += 6) : (t = r, U === 0 && q(xe)), t === r && (e.substr(R, 4) === D ? (t = D, R += 4) : (t = r, U === 0 && q(Se)), t === r && (e.substr(R, 5) === O ? (t = O, R += 5) : (t = r, U === 0 && q(Ce)), t === r && (e.substr(R, 5) === k ? (t = k, R += 5) : (t = r, U === 0 && q(we)), t === r && (e.substr(R, 4) === A ? (t = A, R += 4) : (t = r, U === 0 && q(Te)), t === r && (e.substr(R, 6) === j ? (t = j, R += 6) : (t = r, U === 0 && q(Ee)), t === r && (e.substr(R, 7) === M ? (t = M, R += 7) : (t = r, U === 0 && q(De)), t === r && (e.substr(R, 4) === N ? (t = N, R += 4) : (t = r, U === 0 && q(Oe)), t === r && (e.substr(R, 6) === P ? (t = P, R += 6) : (t = r, U === 0 && q(ke)), t === r && (e.substr(R, 6) === F ? (t = F, R += 6) : (t = r, U === 0 && q(Ae)), t === r && (e.substr(R, 3) === I ? (t = I, R += 3) : (t = r, U === 0 && q(je)), t === r && (t = R, n = J(), n === r ? (R = t, t = r) : (i = $(), i === r ? (R = t, t = r) : (a = et(), a === r ? (R = t, t = r) : (z = t, n = Me(n, a), t = n))))))))))))))))), t;
	}
	function ot() {
		var e = ct();
		return e === r && (e = Q()), e;
	}
	function Q() {
		var t = R, n = R, i, a, o;
		if (Ne.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = r, U === 0 && q(Pe)), i !== r) {
			for (a = [], L.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = r, U === 0 && q(Fe)); o !== r;) a.push(o), L.test(e.charAt(R)) ? (o = e.charAt(R), R++) : (o = r, U === 0 && q(Fe));
			a === r ? (R = n, n = r) : (i = [i, a], n = i);
		} else R = n, n = r;
		return n !== r && (z = t, n = Ie(n)), t = n, t;
	}
	function st() {
		var t = R, n = [], i;
		for (Le.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = r, U === 0 && q(Re)); i !== r;) n.push(i), Le.test(e.charAt(R)) ? (i = e.charAt(R), R++) : (i = r, U === 0 && q(Re));
		return n !== r && (z = t, n = ze(n)), t = n, t;
	}
	function ct() {
		var t, n, i, a;
		if (U++, t = R, n = $(), n !== r) {
			if (i = [], Ve.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = r, U === 0 && q(He)), a !== r) for (; a !== r;) i.push(a), Ve.test(e.charAt(R)) ? (a = e.charAt(R), R++) : (a = r, U === 0 && q(He));
			else i = r;
			i === r ? (R = t, t = r) : (z = t, n = Ue(), t = n);
		} else R = t, t = r;
		return U--, t === r && (n = r, U === 0 && q(Be)), t;
	}
	function $() {
		var t, n;
		for (U++, t = [], Ge.test(e.charAt(R)) ? (n = e.charAt(R), R++) : (n = r, U === 0 && q(Ke)); n !== r;) t.push(n), Ge.test(e.charAt(R)) ? (n = e.charAt(R), R++) : (n = r, U === 0 && q(Ke));
		return U--, t === r && (n = r, U === 0 && q(We)), t;
	}
	if (W = a(), W !== r && R === e.length) return W;
	throw W !== r && R < e.length && q(Je()), Qe(H, V < e.length ? e.charAt(V) : null, V < e.length ? Ze(V, V + 1) : Ze(V, V));
}
var i = {
	SyntaxError: n,
	parse: r
}, a = /* @__PURE__ */ e({
	bigChain: () => o,
	bigGenePred: () => s,
	bigInteract: () => c,
	bigLink: () => l,
	bigMaf: () => u,
	bigNarrowPeak: () => d,
	bigPsl: () => f,
	defaultBedSchema: () => p,
	mafFrames: () => m,
	mafSummary: () => h
}), o = "table bigChain\n\"bigChain pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint score;         \"Score (0-1000)\"\n    char[1] strand;     \"+ or - for strand\"\n    uint tSize;         \"size of target sequence\"\n    string qName;       \"name of query sequence\"\n    uint qSize;         \"size of query sequence\"\n    uint qStart;        \"start of alignment on query sequence\"\n    uint qEnd;          \"end of alignment on query sequence\"\n    uint chainScore;    \"score from chain\"\n    )", s = "table bigGenePred\n\"bigGenePred gene models\"\n   (\n   string chrom;       \"Reference sequence chromosome or scaffold\"\n   uint   chromStart;  \"Start position in chromosome\"\n   uint   chromEnd;    \"End position in chromosome\"\n   string name;        \"Name or ID of item, ideally both human readable and unique\"\n   uint score;         \"Score (0-1000)\"\n   char[1] strand;     \"+ or - for strand\"\n   uint thickStart;    \"Start of where display should be thick (start codon)\"\n   uint thickEnd;      \"End of where display should be thick (stop codon)\"\n   uint reserved;       \"RGB value (use R,G,B string in input file)\"\n   int blockCount;     \"Number of blocks\"\n   int[blockCount] blockSizes; \"Comma separated list of block sizes\"\n   int[blockCount] chromStarts; \"Start positions relative to chromStart\"\n   string name2;       \"Alternative/human readable name\"\n   string cdsStartStat; \"Status of CDS start annotation (none, unknown, incomplete, or complete)\"\n   string cdsEndStat;   \"Status of CDS end annotation (none, unknown, incomplete, or complete)\"\n   int[blockCount] exonFrames; \"Exon frame {0,1,2}, or -1 if no frame for exon\"\n   string type;        \"Transcript type\"\n   string geneName;    \"Primary identifier for gene\"\n   string geneName2;   \"Alternative/human readable gene name\"\n   string geneType;    \"Gene type\"\n   )", c = "table interact\n\"interaction between two regions\"\n    (\n    string chrom;        \"Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records\"\n    uint chromStart;     \"Start position of lower region. For interchromosomal, set to chromStart of this region\"\n    uint chromEnd;       \"End position of upper region. For interchromosomal, set to chromEnd of this region\"\n    string name;         \"Name of item, for display.  Usually 'sourceName/targetName/exp' or empty\"\n    uint score;          \"Score (0-1000)\"\n    double value;        \"Strength of interaction or other data value. Typically basis for score\"\n    string exp;          \"Experiment name (metadata for filtering). Use . if not applicable\"\n    string color;        \"Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score\"\n    string sourceChrom;  \"Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region.\"\n    uint sourceStart;    \"Start position in chromosome of source/lower/this region\"\n    uint sourceEnd;      \"End position in chromosome of source/lower/this region\"\n    string sourceName;   \"Identifier of source/lower/this region\"\n    string sourceStrand; \"Orientation of source/lower/this region: + or -.  Use . if not applicable\"\n    string targetChrom;  \"Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region\"\n    uint targetStart;    \"Start position in chromosome of target/upper/this region\"\n    uint targetEnd;      \"End position in chromosome of target/upper/this region\"\n    string targetName;   \"Identifier of target/upper/this region\"\n    string targetStrand; \"Orientation of target/upper/this region: + or -.  Use . if not applicable\"\n\n    )", l = "table bigLink\n\"bigLink pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint qStart;        \"start of alignment on query sequence\"\n    )", u = "table bedMaf\n\"Bed3 with MAF block\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start position in chromosome\"\n    uint   chromEnd;   \"End position in chromosome\"\n    lstring mafBlock;   \"MAF block\"\n    )", d = "table bigNarrowPeak\n\"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data.\"\n(\n    string chrom;        \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;   \"Start position in chromosome\"\n    uint   chromEnd;     \"End position in chromosome\"\n    string name;	 \"Name given to a region (preferably unique). Use . if no name is assigned\"\n    uint   score;        \"Indicates how dark the peak will be displayed in the browser (0-1000) \"\n    char[1]  strand;     \"+ or - or . for unknown\"\n    float  signalValue;  \"Measurement of average enrichment for the region\"\n    float  pValue;       \"Statistical significance of signal value (-log10). Set to -1 if not used.\"\n    float  qValue;       \"Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used.\"\n    int   peak;         \"Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called.\"\n)", f = "table bigPsl\n\"bigPsl pairwise alignment\"\n    (\n    string chrom;       \"Reference sequence chromosome or scaffold\"\n    uint   chromStart;  \"Start position in chromosome\"\n    uint   chromEnd;    \"End position in chromosome\"\n    string name;        \"Name or ID of item, ideally both human readable and unique\"\n    uint score;         \"Score (0-1000)\"\n    char[1] strand;     \"+ or - indicates whether the query aligns to the + or - strand on the reference\"\n    uint thickStart;    \"Start of where display should be thick (start codon)\"\n    uint thickEnd;      \"End of where display should be thick (stop codon)\"\n    uint reserved;       \"RGB value (use R,G,B string in input file)\"\n    int blockCount;     \"Number of blocks\"\n    int[blockCount] blockSizes; \"Comma separated list of block sizes\"\n    int[blockCount] chromStarts; \"Start positions relative to chromStart\"\n\n    uint    oChromStart;\"Start position in other chromosome\"\n    uint    oChromEnd;  \"End position in other chromosome\"\n    char[1] oStrand;    \"+ or -, - means that psl was reversed into BED-compatible coordinates\"\n    uint    oChromSize; \"Size of other chromosome.\"\n    int[blockCount] oChromStarts; \"Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand\"\n\n    lstring  oSequence;  \"Sequence on other chrom (or empty)\"\n    string   oCDS;       \"CDS in NCBI format\"\n\n    uint    chromSize;\"Size of target chromosome\"\n\n    uint match;        \"Number of bases matched.\"\n    uint misMatch; \" Number of bases that don't match \"\n    uint repMatch; \" Number of bases that match but are part of repeats \"\n    uint nCount;   \" Number of 'N' bases \"\n    uint seqType;    \"0=empty, 1=nucleotide, 2=amino_acid\"\n    )", p = "table defaultBedSchema\n\"BED12\"\n    (\n    string chrom;      \"The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671).\"\n    uint   chromStart; \"The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0.\"\n    uint   chromEnd;   \"The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99.\"\n    string   name;   \"Defines the name of the BED line.\"\n    float   score;   \"Feature score, doesn't care about the 0-1000 limit as in bed\"\n    char   strand;   \"Defines the strand. Either '.' (=no strand) or '+' or '-'\"\n    uint thickStart; \"The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position.\"\n    uint thickEnd; \"The ending position at which the feature is drawn thickly (for example the stop codon in gene displays).\"\n    string itemRgb; \"An RGB value of the form R,G,B (e.g. 255,0,0). \"\n    uint blockCount; \" The number of blocks (exons) in the BED line.\"\n    uint[blockCount] blockSizes; \" A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount.\"\n    uint[blockCount] blockStarts; \"A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount.\"\n    )", m = "table mafFrames\n\"codon frame assignment for MAF components\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start range in chromosome\"\n    uint   chromEnd;   \"End range in chromosome\"\n    string src;        \"Name of sequence source in MAF\"\n    ubyte frame;       \"frame (0,1,2) for first base(+) or last bast(-)\"\n    char[1] strand;    \"+ or -\"\n    string name;       \"Name of gene used to define frame\"\n    int    prevFramePos;  \"target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous\"\n    int    nextFramePos;  \"target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous\"\n    ubyte  isExonStart;  \"does this start the CDS portion of an exon?\"\n    ubyte  isExonEnd;    \"does this end the CDS portion of an exon?\"\n    )", h = "table mafSummary\n\"Positions and scores for alignment blocks\"\n    (\n    string chrom;      \"Reference sequence chromosome or scaffold\"\n    uint   chromStart; \"Start position in chromosome\"\n    uint   chromEnd;   \"End position in chromosome\"\n    string src;        \"Sequence name or database of alignment\"\n    float  score;      \"Floating point score.\"\n    char[1] leftStatus;  \"Gap/break annotation for preceding block\"\n    char[1] rightStatus; \"Gap/break annotation for following block\"\n    )", g = Object.fromEntries(Object.entries(a).map(([e, t]) => [e, i.parse(t.trim())]));
//#endregion
//#region ../../node_modules/@gmod/bed/esm/util.js
function _(e) {
	let t = new Set([
		"uint",
		"int",
		"float",
		"long"
	]);
	return {
		...e,
		fields: e.fields.map((e) => ({
			...e,
			isArray: e.size && e.type !== "char",
			arrayIsNumeric: e.size && t.has(e.type),
			isNumeric: !e.size && t.has(e.type)
		})).filter((e) => !!e.name)
	};
}
//#endregion
//#region ../../node_modules/@gmod/bed/esm/parser.js
var v = {
	".": 0,
	"-": -1,
	"+": 1
};
function y(e) {
	return e.length >= 12 && !Number.isNaN(Number.parseInt(e[9], 10)) && e[10]?.split(",").filter((e) => !!e).length === Number.parseInt(e[9], 10);
}
var b = class {
	autoSql;
	attemptDefaultBed;
	constructor(e = {}) {
		if (e.autoSql) this.autoSql = _(i.parse(e.autoSql));
		else if (e.type) {
			if (!g[e.type]) throw Error("Type not found");
			this.autoSql = _(g[e.type]);
		} else this.autoSql = _(g.defaultBedSchema), this.attemptDefaultBed = !0;
	}
	parseLine(e, t = {}) {
		let { autoSql: n } = this, { uniqueId: r } = t, i = Array.isArray(e) ? e : e.split("	"), a = {};
		if (!this.attemptDefaultBed || this.attemptDefaultBed && y(i)) for (let e = 0; e < n.fields.length; e++) {
			let t = n.fields[e], r = i[e], { isNumeric: o, isArray: s, arrayIsNumeric: c, name: l } = t;
			if (r == null) break;
			if (r !== ".") {
				if (o) {
					let e = Number(r);
					r = Number.isNaN(e) ? r : e;
				} else s && (r = r.split(","), r.at(-1) === "" && r.pop(), c && (r = r.map(Number)));
				a[l] = r;
			}
		}
		else {
			let e = [
				"chrom",
				"chromStart",
				"chromEnd",
				"name"
			];
			a = Object.fromEntries(i.map((t, n) => [e[n] || "field" + n, t])), a.chromStart = +a.chromStart, a.chromEnd = +a.chromEnd, Number.isNaN(Number.parseFloat(a.field4)) || (a.score = +a.field4, delete a.field4), (a.field5 === "+" || a.field5 === "-") && (a.strand = a.field5, delete a.field5);
		}
		return r && (a.uniqueId = r), a.strand = v[a.strand] || 0, a.chrom = decodeURIComponent(a.chrom), a;
	}
};
//#endregion
export { b as default };
