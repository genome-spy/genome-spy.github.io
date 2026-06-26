import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";var t=class extends SyntaxError{constructor(e,t,n,r){super(e),this.expected=t,this.found=n,this.location=r,this.name=`SyntaxError`}format(e){let t=`Error: `+this.message;if(this.location){let n=null,r=e.find(e=>e.source===this.location.source);r&&(n=r.text.split(/\r\n|\n|\r/g));let i=this.location.start,a=this.location.source&&typeof this.location.source.offset==`function`?this.location.source.offset(i):i,o=this.location.source+`:`+a.line+`:`+a.column;if(n){let e=this.location.end,r=``.padEnd(a.line.toString().length,` `),s=n[i.line-1],c=(i.line===e.line?e.column:s.length+1)-i.column||1;t+=`
 --> `+o+`
`+r+` |
`+a.line+` | `+s+`
`+r+` | `+``.padEnd(i.column-1,` `)+``.padEnd(c,`^`)}else t+=`
 at `+o}return t}static buildMessage(e,t){function n(e){return e.codePointAt(0).toString(16).toUpperCase()}let r=Object.prototype.hasOwnProperty.call(RegExp.prototype,`unicode`)?RegExp(`[\\p{C}\\p{Mn}\\p{Mc}]`,`gu`):null;function i(e){return r?e.replace(r,e=>`\\u{`+n(e)+`}`):e}function a(e){return i(e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\0/g,`\\0`).replace(/\t/g,`\\t`).replace(/\n/g,`\\n`).replace(/\r/g,`\\r`).replace(/[\x00-\x0F]/g,e=>`\\x0`+n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g,e=>`\\x`+n(e)))}function o(e){return i(e.replace(/\\/g,`\\\\`).replace(/\]/g,`\\]`).replace(/\^/g,`\\^`).replace(/-/g,`\\-`).replace(/\0/g,`\\0`).replace(/\t/g,`\\t`).replace(/\n/g,`\\n`).replace(/\r/g,`\\r`).replace(/[\x00-\x0F]/g,e=>`\\x0`+n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g,e=>`\\x`+n(e)))}let s={literal(e){return`"`+a(e.text)+`"`},class(e){let t=e.parts.map(e=>Array.isArray(e)?o(e[0])+`-`+o(e[1]):o(e));return`[`+(e.inverted?`^`:``)+t.join(``)+`]`+(e.unicode?`u`:``)},any(){return`any character`},end(){return`end of input`},other(e){return e.description}};function c(e){return s[e.type](e)}function l(e){let t=e.map(c);if(t.sort(),t.length>0){let e=1;for(let n=1;n<t.length;n++)t[n-1]!==t[n]&&(t[e]=t[n],e++);t.length=e}switch(t.length){case 1:return t[0];case 2:return t[0]+` or `+t[1];default:return t.slice(0,-1).join(`, `)+`, or `+t[t.length-1]}}function u(e){return e?`"`+a(e)+`"`:`end of input`}return`Expected `+l(e)+` but `+u(t)+` found.`}};function n(e,n){n=n===void 0?{}:n;let r={},i=n.grammarSource,a={declaration:W},o=W,s=`primary`,c=`index`,l=`unique`,u=`auto`,d=/^[a-zA-Z0-9_]/,f=/^[a-zA-Z_]/,p=/^[^\n\r]/,m=/^[0-9]/,h=/^[ \t\n\r]/,g=z(`(`,!1),_=z(`)`,!1),v=z(`simple`,!0),y=z(`object`,!0),b=z(`table`,!0),ee=z(`primary`,!1),x=B([[`a`,`z`],[`A`,`Z`],[`0`,`9`],`_`],!1,!1,!1),te=z(`index`,!1),ne=z(`unique`,!1),re=z(`#`,!1),S=z(`[`,!1),C=z(`]`,!1),ie=z(`auto`,!1),w=z(`;`,!1),T=z(`,`,!1),ae=z(`int`,!0),oe=z(`uint`,!0),se=z(`short`,!0),ce=z(`ushort`,!0),le=z(`byte`,!0),ue=z(`ubyte`,!0),de=z(`float`,!0),fe=z(`char`,!0),pe=z(`string`,!0),me=z(`lstring`,!0),he=z(`enum`,!0),ge=z(`double`,!0),_e=z(`bigint`,!0),ve=z(`set`,!0),ye=B([[`a`,`z`],[`A`,`Z`],`_`],!1,!1,!1),E=B([`
`,`\r`],!0,!1,!1),be=Ie(`integer`),D=B([[`0`,`9`]],!1,!1,!1),O=B([` `,`	`,`
`,`\r`],!1,!1,!1);function xe(e,t,n,r){return{type:e,name:t,comment:n,fields:r}}function Se(e){return e.toLowerCase()}function k(e,t){return t}function Ce(e,t){return[e,...t].filter(e=>e&&e.name)}function we(){return null}function Te(e,t,n){return{type:e,name:t,comment:n}}function Ee(e,t,n,r){return{type:e,size:t,name:n,comment:r}}function De(e,t,n,r){return{type:e,vals:t,name:n,comment:r}}function A(e,t){return t}function Oe(e,t){return t.unshift(e),t}function ke(e){return e.toLowerCase()}function Ae(e,t){return e+` `+t}function je(){return R()}function Me(e){let t=e.join(``).trim(),n=/^"(.*)".*$/.exec(t);return n?n[1]:t.replace(/^"|"$/g,``)}function Ne(){return parseInt(R(),10)}let j=n.peg$currPos|0,M=j,N=[{line:1,column:1}],P=j,F=n.peg$maxFailExpected||[],I=n.peg$silentFails|0,L;if(n.startRule){if(!(n.startRule in a))throw Error(`Can't start parsing from rule "`+n.startRule+`".`);o=a[n.startRule]}function R(){return e.substring(M,j)}function Pe(t=j){let n=e.codePointAt(t);return n===void 0?``:String.fromCodePoint(n)}function z(e,t){return{type:`literal`,text:e,ignoreCase:t}}function B(e,t,n,r){return{type:`class`,parts:e,inverted:t,ignoreCase:n,unicode:r}}function Fe(){return{type:`end`}}function Ie(e){return{type:`other`,description:e}}function V(t){let n=N[t],r;if(n)return n;if(t>=N.length)r=N.length-1;else for(r=t;!N[--r];);for(n=N[r],n={line:n.line,column:n.column};r<t;)e.charCodeAt(r)===10?(n.line++,n.column=1):n.column++,r++;return N[t]=n,n}function H(e,t,n){let r=V(e),a=V(t),o={source:i,start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:a.line,column:a.column}};return n&&i&&typeof i.offset==`function`&&(o.start=i.offset(o.start),o.end=i.offset(o.end)),o}function U(e){j<P||(j>P&&(P=j,F=[]),F.push(e))}function Le(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}function W(){let t,n,i,a,o,s,c;return t=j,Z(),n=G(),n===r?(j=t,t=r):(Z(),i=Y(),i===r?(j=t,t=r):(Z(),a=X(),Z(),e.charCodeAt(j)===40?(o=`(`,j++):(o=r,I===0&&U(g)),o===r?(j=t,t=r):(Z(),s=ze(),s===r?(j=t,t=r):(Z(),e.charCodeAt(j)===41?(c=`)`,j++):(c=r,I===0&&U(_)),c===r?(j=t,t=r):(Z(),M=t,t=xe(n,i,a,s)))))),t}function G(){let t,n;return t=j,n=e.substr(j,6),n.toLowerCase()===`simple`?j+=6:(n=r,I===0&&U(v)),n===r&&(n=e.substr(j,6),n.toLowerCase()===`object`?j+=6:(n=r,I===0&&U(y)),n===r&&(n=e.substr(j,5),n.toLowerCase()===`table`?j+=5:(n=r,I===0&&U(b)))),n!==r&&(M=t,n=Se(n)),t=n,t}function Re(){let t,n,i,a;return t=j,e.substr(j,7)===s?(n=s,j+=7):(n=r,I===0&&U(ee)),n===r?(j=t,t=r):(i=j,I++,a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x)),I--,a===r?i=void 0:(j=i,i=r),i===r?(j=t,t=r):(n=[n,i],t=n)),t===r&&(t=j,e.substr(j,5)===c?(n=c,j+=5):(n=r,I===0&&U(te)),n===r?(j=t,t=r):(i=j,I++,a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x)),I--,a===r?i=void 0:(j=i,i=r),i===r?(j=t,t=r):(n=[n,i],t=n)),t===r&&(t=j,e.substr(j,6)===l?(n=l,j+=6):(n=r,I===0&&U(ne)),n===r?(j=t,t=r):(i=j,I++,a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x)),I--,a===r?i=void 0:(j=i,i=r),i===r?(j=t,t=r):(n=[n,i],t=n)))),t}function ze(){let e,t,n,i,a;if(e=j,t=q(),t!==r){for(Z(),n=[],i=j,Z(),a=q(),a===r?(j=i,i=r):(M=i,i=k(t,a));i!==r;)n.push(i),i=j,Z(),a=q(),a===r?(j=i,i=r):(M=i,i=k(t,a));i=Z(),M=e,e=Ce(t,n)}else j=e,e=r;return e}function Be(){let t;return e.charCodeAt(j)===35?(t=`#`,j++):(t=r,I===0&&U(re)),t}function Ve(){let e,t;return e=j,Z(),t=Be(),t===r?(j=e,e=r):(X(),Z(),M=e,e=we()),e}function K(){let t,n,i,a,o,s,c,l,f;return t=j,n=Re(),n===r?(j=t,t=r):(i=j,a=Z(),e.charCodeAt(j)===91?(o=`[`,j++):(o=r,I===0&&U(S)),o===r?(j=i,i=r):(s=Z(),c=We(),c===r?(j=i,i=r):(l=Z(),e.charCodeAt(j)===93?(f=`]`,j++):(f=r,I===0&&U(C)),f===r?(j=i,i=r):(a=[a,o,s,c,l,f],i=a))),i===r&&(i=null),n=[n,i],t=n),t===r&&(t=j,e.substr(j,4)===u?(n=u,j+=4):(n=r,I===0&&U(ie)),n===r?(j=t,t=r):(i=j,I++,a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x)),I--,a===r?i=void 0:(j=i,i=r),i===r?(j=t,t=r):(n=[n,i],t=n))),t}function q(){let t,n,i,a,o,s,c,l,u,d,f,p,m,h;if(t=j,n=J(),n!==r)if(Z(),i=Y(),i!==r){for(a=[],o=j,s=Z(),c=K(),c===r?(j=o,o=r):(s=[s,c],o=s);o!==r;)a.push(o),o=j,s=Z(),c=K(),c===r?(j=o,o=r):(s=[s,c],o=s);o=Z(),e.charCodeAt(j)===59?(s=`;`,j++):(s=r,I===0&&U(w)),s===r?(j=t,t=r):(c=Z(),l=X(),M=t,t=Te(n,i,l))}else j=t,t=r;else j=t,t=r;if(t===r){if(t=j,n=J(),n!==r)if(Z(),e.charCodeAt(j)===91?(i=`[`,j++):(i=r,I===0&&U(S)),i!==r)if(a=Z(),o=Ue(),o!==r)if(s=Z(),e.charCodeAt(j)===93?(c=`]`,j++):(c=r,I===0&&U(C)),c!==r)if(l=Z(),u=Y(),u!==r){for(d=[],f=j,p=Z(),m=K(),m===r?(j=f,f=r):(p=[p,m],f=p);f!==r;)d.push(f),f=j,p=Z(),m=K(),m===r?(j=f,f=r):(p=[p,m],f=p);f=Z(),e.charCodeAt(j)===59?(p=`;`,j++):(p=r,I===0&&U(w)),p===r?(j=t,t=r):(m=Z(),h=X(),M=t,t=Ee(n,o,u,h))}else j=t,t=r;else j=t,t=r;else j=t,t=r;else j=t,t=r;else j=t,t=r;if(t===r){if(t=j,n=J(),n!==r)if(Z(),e.charCodeAt(j)===40?(i=`(`,j++):(i=r,I===0&&U(g)),i!==r)if(a=Z(),o=He(),o!==r)if(s=Z(),e.charCodeAt(j)===41?(c=`)`,j++):(c=r,I===0&&U(_)),c!==r)if(l=Z(),u=Y(),u!==r){for(d=[],f=j,p=Z(),m=K(),m===r?(j=f,f=r):(p=[p,m],f=p);f!==r;)d.push(f),f=j,p=Z(),m=K(),m===r?(j=f,f=r):(p=[p,m],f=p);f=Z(),e.charCodeAt(j)===59?(p=`;`,j++):(p=r,I===0&&U(w)),p===r?(j=t,t=r):(m=Z(),h=X(),M=t,t=De(n,o,u,h))}else j=t,t=r;else j=t,t=r;else j=t,t=r;else j=t,t=r;else j=t,t=r;t===r&&(t=Ve())}}return t}function He(){let t,n,i,a,o,s;if(t=j,n=Y(),n!==r){for(i=[],a=j,e.charCodeAt(j)===44?(o=`,`,j++):(o=r,I===0&&U(T)),o===r?(j=a,a=r):(Z(),s=Y(),s===r?(j=a,a=r):(M=a,a=A(n,s)));a!==r;)i.push(a),a=j,e.charCodeAt(j)===44?(o=`,`,j++):(o=r,I===0&&U(T)),o===r?(j=a,a=r):(Z(),s=Y(),s===r?(j=a,a=r):(M=a,a=A(n,s)));M=t,t=Oe(n,i)}else j=t,t=r;return t}function J(){let t,n,i;return t=j,n=e.substr(j,3),n.toLowerCase()===`int`?j+=3:(n=r,I===0&&U(ae)),n===r&&(n=e.substr(j,4),n.toLowerCase()===`uint`?j+=4:(n=r,I===0&&U(oe)),n===r&&(n=e.substr(j,5),n.toLowerCase()===`short`?j+=5:(n=r,I===0&&U(se)),n===r&&(n=e.substr(j,6),n.toLowerCase()===`ushort`?j+=6:(n=r,I===0&&U(ce)),n===r&&(n=e.substr(j,4),n.toLowerCase()===`byte`?j+=4:(n=r,I===0&&U(le)),n===r&&(n=e.substr(j,5),n.toLowerCase()===`ubyte`?j+=5:(n=r,I===0&&U(ue)),n===r&&(n=e.substr(j,5),n.toLowerCase()===`float`?j+=5:(n=r,I===0&&U(de)),n===r&&(n=e.substr(j,4),n.toLowerCase()===`char`?j+=4:(n=r,I===0&&U(fe)),n===r&&(n=e.substr(j,6),n.toLowerCase()===`string`?j+=6:(n=r,I===0&&U(pe)),n===r&&(n=e.substr(j,7),n.toLowerCase()===`lstring`?j+=7:(n=r,I===0&&U(me)),n===r&&(n=e.substr(j,4),n.toLowerCase()===`enum`?j+=4:(n=r,I===0&&U(he)),n===r&&(n=e.substr(j,6),n.toLowerCase()===`double`?j+=6:(n=r,I===0&&U(ge)),n===r&&(n=e.substr(j,6),n.toLowerCase()===`bigint`?j+=6:(n=r,I===0&&U(_e)),n===r&&(n=e.substr(j,3),n.toLowerCase()===`set`?j+=3:(n=r,I===0&&U(ve))))))))))))))),n!==r&&(M=t,n=ke(n)),t=n,t===r&&(t=j,n=G(),n===r?(j=t,t=r):(Z(),i=Y(),i===r?(j=t,t=r):(M=t,t=Ae(n,i)))),t}function Ue(){let e;return e=We(),e===r&&(e=Y()),e}function Y(){let t,n,i,a;if(t=j,n=e.charAt(j),f.test(n)?j++:(n=r,I===0&&U(ye)),n!==r){for(i=[],a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x));a!==r;)i.push(a),a=e.charAt(j),d.test(a)?j++:(a=r,I===0&&U(x));M=t,t=je()}else j=t,t=r;return t}function X(){let t,n,i;for(t=j,n=[],i=e.charAt(j),p.test(i)?j++:(i=r,I===0&&U(E));i!==r;)n.push(i),i=e.charAt(j),p.test(i)?j++:(i=r,I===0&&U(E));return M=t,n=Me(n),t=n,t}function We(){let t,n,i;if(I++,t=j,n=[],i=e.charAt(j),m.test(i)?j++:(i=r,I===0&&U(D)),i!==r)for(;i!==r;)n.push(i),i=e.charAt(j),m.test(i)?j++:(i=r,I===0&&U(D));else n=r;return n!==r&&(M=t,n=Ne()),t=n,I--,t===r&&(n=r,I===0&&U(be)),t}function Z(){let t,n;for(I++,t=[],n=e.charAt(j),h.test(n)?j++:(n=r,I===0&&U(O));n!==r;)t.push(n),n=e.charAt(j),h.test(n)?j++:(n=r,I===0&&U(O));return I--,t}L=o();let Q=L!==r&&j===e.length;function $(){throw L!==r&&j<e.length&&U(Fe()),Le(F,P<e.length?Pe(P):null,P<e.length?H(P,P+1):H(P,P))}if(n.peg$library)return{peg$result:L,peg$currPos:j,peg$FAILED:r,peg$maxFailExpected:F,peg$maxFailPos:P,peg$success:Q,peg$throw:Q?void 0:$};if(Q)return L;$()}var r=e({bigChain:()=>i,bigGenePred:()=>a,bigInteract:()=>o,bigLink:()=>s,bigMaf:()=>c,bigNarrowPeak:()=>l,bigPsl:()=>u,defaultBedSchema:()=>d,mafFrames:()=>f,mafSummary:()=>p}),i=`table bigChain
"bigChain pairwise alignment"
    (
    string chrom;       "Reference sequence chromosome or scaffold"
    uint   chromStart;  "Start position in chromosome"
    uint   chromEnd;    "End position in chromosome"
    string name;        "Name or ID of item, ideally both human readable and unique"
    uint score;         "Score (0-1000)"
    char[1] strand;     "+ or - for strand"
    uint tSize;         "size of target sequence"
    string qName;       "name of query sequence"
    uint qSize;         "size of query sequence"
    uint qStart;        "start of alignment on query sequence"
    uint qEnd;          "end of alignment on query sequence"
    uint chainScore;    "score from chain"
    )`,a=`table bigGenePred
"bigGenePred gene models"
   (
   string chrom;       "Reference sequence chromosome or scaffold"
   uint   chromStart;  "Start position in chromosome"
   uint   chromEnd;    "End position in chromosome"
   string name;        "Name or ID of item, ideally both human readable and unique"
   uint score;         "Score (0-1000)"
   char[1] strand;     "+ or - for strand"
   uint thickStart;    "Start of where display should be thick (start codon)"
   uint thickEnd;      "End of where display should be thick (stop codon)"
   uint reserved;       "RGB value (use R,G,B string in input file)"
   int blockCount;     "Number of blocks"
   int[blockCount] blockSizes; "Comma separated list of block sizes"
   int[blockCount] chromStarts; "Start positions relative to chromStart"
   string name2;       "Alternative/human readable name"
   string cdsStartStat; "Status of CDS start annotation (none, unknown, incomplete, or complete)"
   string cdsEndStat;   "Status of CDS end annotation (none, unknown, incomplete, or complete)"
   int[blockCount] exonFrames; "Exon frame {0,1,2}, or -1 if no frame for exon"
   string type;        "Transcript type"
   string geneName;    "Primary identifier for gene"
   string geneName2;   "Alternative/human readable gene name"
   string geneType;    "Gene type"
   )`,o=`table interact
"interaction between two regions"
    (
    string chrom;        "Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records"
    uint chromStart;     "Start position of lower region. For interchromosomal, set to chromStart of this region"
    uint chromEnd;       "End position of upper region. For interchromosomal, set to chromEnd of this region"
    string name;         "Name of item, for display.  Usually 'sourceName/targetName/exp' or empty"
    uint score;          "Score (0-1000)"
    double value;        "Strength of interaction or other data value. Typically basis for score"
    string exp;          "Experiment name (metadata for filtering). Use . if not applicable"
    string color;        "Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score"
    string sourceChrom;  "Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region."
    uint sourceStart;    "Start position in chromosome of source/lower/this region"
    uint sourceEnd;      "End position in chromosome of source/lower/this region"
    string sourceName;   "Identifier of source/lower/this region"
    string sourceStrand; "Orientation of source/lower/this region: + or -.  Use . if not applicable"
    string targetChrom;  "Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region"
    uint targetStart;    "Start position in chromosome of target/upper/this region"
    uint targetEnd;      "End position in chromosome of target/upper/this region"
    string targetName;   "Identifier of target/upper/this region"
    string targetStrand; "Orientation of target/upper/this region: + or -.  Use . if not applicable"

    )`,s=`table bigLink
"bigLink pairwise alignment"
    (
    string chrom;       "Reference sequence chromosome or scaffold"
    uint   chromStart;  "Start position in chromosome"
    uint   chromEnd;    "End position in chromosome"
    string name;        "Name or ID of item, ideally both human readable and unique"
    uint qStart;        "start of alignment on query sequence"
    )`,c=`table bedMaf
"Bed3 with MAF block"
    (
    string chrom;      "Reference sequence chromosome or scaffold"
    uint   chromStart; "Start position in chromosome"
    uint   chromEnd;   "End position in chromosome"
    lstring mafBlock;   "MAF block"
    )`,l=`table bigNarrowPeak
"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data."
(
    string chrom;        "Reference sequence chromosome or scaffold"
    uint   chromStart;   "Start position in chromosome"
    uint   chromEnd;     "End position in chromosome"
    string name;	 "Name given to a region (preferably unique). Use . if no name is assigned"
    uint   score;        "Indicates how dark the peak will be displayed in the browser (0-1000) "
    char[1]  strand;     "+ or - or . for unknown"
    float  signalValue;  "Measurement of average enrichment for the region"
    float  pValue;       "Statistical significance of signal value (-log10). Set to -1 if not used."
    float  qValue;       "Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used."
    int   peak;         "Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called."
)`,u=`table bigPsl
"bigPsl pairwise alignment"
    (
    string chrom;       "Reference sequence chromosome or scaffold"
    uint   chromStart;  "Start position in chromosome"
    uint   chromEnd;    "End position in chromosome"
    string name;        "Name or ID of item, ideally both human readable and unique"
    uint score;         "Score (0-1000)"
    char[1] strand;     "+ or - indicates whether the query aligns to the + or - strand on the reference"
    uint thickStart;    "Start of where display should be thick (start codon)"
    uint thickEnd;      "End of where display should be thick (stop codon)"
    uint reserved;       "RGB value (use R,G,B string in input file)"
    int blockCount;     "Number of blocks"
    int[blockCount] blockSizes; "Comma separated list of block sizes"
    int[blockCount] chromStarts; "Start positions relative to chromStart"

    uint    oChromStart;"Start position in other chromosome"
    uint    oChromEnd;  "End position in other chromosome"
    char[1] oStrand;    "+ or -, - means that psl was reversed into BED-compatible coordinates"
    uint    oChromSize; "Size of other chromosome."
    int[blockCount] oChromStarts; "Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand"

    lstring  oSequence;  "Sequence on other chrom (or empty)"
    string   oCDS;       "CDS in NCBI format"

    uint    chromSize;"Size of target chromosome"

    uint match;        "Number of bases matched."
    uint misMatch; " Number of bases that don't match "
    uint repMatch; " Number of bases that match but are part of repeats "
    uint nCount;   " Number of 'N' bases "
    uint seqType;    "0=empty, 1=nucleotide, 2=amino_acid"
    )`,d=`table defaultBedSchema
"BED12"
    (
    string chrom;      "The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671)."
    uint   chromStart; "The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0."
    uint   chromEnd;   "The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99."
    string   name;   "Defines the name of the BED line."
    float   score;   "Feature score, doesn't care about the 0-1000 limit as in bed"
    char   strand;   "Defines the strand. Either '.' (=no strand) or '+' or '-'"
    uint thickStart; "The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position."
    uint thickEnd; "The ending position at which the feature is drawn thickly (for example the stop codon in gene displays)."
    string itemRgb; "An RGB value of the form R,G,B (e.g. 255,0,0). "
    uint blockCount; " The number of blocks (exons) in the BED line."
    uint[blockCount] blockSizes; " A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount."
    uint[blockCount] blockStarts; "A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount."
    )`,f=`table mafFrames
"codon frame assignment for MAF components"
    (
    string chrom;      "Reference sequence chromosome or scaffold"
    uint   chromStart; "Start range in chromosome"
    uint   chromEnd;   "End range in chromosome"
    string src;        "Name of sequence source in MAF"
    ubyte frame;       "frame (0,1,2) for first base(+) or last bast(-)"
    char[1] strand;    "+ or -"
    string name;       "Name of gene used to define frame"
    int    prevFramePos;  "target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"
    int    nextFramePos;  "target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"
    ubyte  isExonStart;  "does this start the CDS portion of an exon?"
    ubyte  isExonEnd;    "does this end the CDS portion of an exon?"
    )`,p=`table mafSummary
"Positions and scores for alignment blocks"
    (
    string chrom;      "Reference sequence chromosome or scaffold"
    uint   chromStart; "Start position in chromosome"
    uint   chromEnd;   "End position in chromosome"
    string src;        "Sequence name or database of alignment"
    float  score;      "Floating point score."
    char[1] leftStatus;  "Gap/break annotation for preceding block"
    char[1] rightStatus; "Gap/break annotation for following block"
    )`,m=Object.fromEntries(Object.entries(r).map(([e,t])=>[e,n(t.trim())])),h=new Set([`uint`,`int`,`short`,`ushort`,`byte`,`ubyte`,`float`,`double`]);function g(e){return{...e,fields:e.fields.map(e=>({...e,isArray:!!e.size&&e.type!==`char`,arrayIsNumeric:!!e.size&&h.has(e.type),isNumeric:!e.size&&h.has(e.type)}))}}var _={".":0,"-":-1,"+":1};function v(e){return e.replace(/%([0-9A-Fa-f]{2})/g,(e,t)=>String.fromCharCode(Number.parseInt(t,16)))}function y(e){let t=Number.parseInt(e[9],10);return e.length>=12&&!Number.isNaN(t)&&e[10]?.split(`,`).filter(e=>e).length===t}var b=class{autoSql;attemptDefaultBed;constructor(e={}){if(e.autoSql)this.autoSql=g(n(e.autoSql));else if(e.type){if(!m[e.type])throw Error(`Type not found`);this.autoSql=g(m[e.type])}else this.autoSql=g(m.defaultBedSchema),this.attemptDefaultBed=!0}parseLine(e,t={}){let{autoSql:n}=this,{uniqueId:r}=t,i=Array.isArray(e)?e:e.split(`	`),a={};if(!this.attemptDefaultBed||y(i))for(let e=0;e<n.fields.length;e++){let t=n.fields[e],r=i[e],{isNumeric:o,isArray:s,arrayIsNumeric:c,name:l}=t;if(r===void 0)break;if(r!==`.`)if(o){let e=Number(r);a[l]=Number.isNaN(e)?r:e}else if(s){let e=r.split(`,`);e.at(-1)===``&&e.pop(),a[l]=c?e.map(Number):e}else a[l]=r}else{a.chrom=i[0],a.chromStart=Number(i[1]),a.chromEnd=Number(i[2]),i[3]!==void 0&&(a.name=i[3]);let e=i[4];if(e!==void 0){let t=Number.parseFloat(e);Number.isNaN(t)?a.field4=e:a.score=t}let t=i[5];t!==void 0&&(a[t===`+`||t===`-`?`strand`:`field5`]=t);for(let e=6;e<i.length;e++)a[`field`+e]=i[e]}return r&&(a.uniqueId=r),a.strand=_[a.strand]??0,a.chrom=v(String(a.chrom)),a}};export{b as default};