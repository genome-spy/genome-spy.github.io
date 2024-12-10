import{A as J,L as K}from"./index-MItgq5d9.js";import{b as Q}from"./index-D1-7ym7j.js";import{L as R}from"./__vite-browser-external-D80GqXp3.js";import{R as F}from"./remoteFile-Bm2xbUQM.js";import{u as $,L as H,a as Z}from"./long-CAmP1QdM.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-ClfaVKLN.js";function j(o){if(o.greaterThan(Number.MAX_SAFE_INTEGER)||o.lessThan(Number.MIN_SAFE_INTEGER))throw new Error("integer overflow");return o.toNumber()}class ee extends Error{}function _(o){if(o&&o.aborted){if(typeof DOMException<"u")throw new DOMException("aborted","AbortError");{const e=new ee("aborted");throw e.code="ERR_ABORTED",e}}}function te(o,e){return e.minv.blockPosition-o.maxv.blockPosition<65e3&&e.maxv.blockPosition-o.minv.blockPosition<5e6}function X(o,e){const t=[];let n=null;return o.length===0?o:(o.sort(function(i,s){const a=i.minv.blockPosition-s.minv.blockPosition;return a!==0?a:i.minv.dataPosition-s.minv.dataPosition}),o.forEach(i=>{(!e||i.maxv.compareTo(e)>0)&&(n===null?(t.push(i),n=i):te(n,i)?i.maxv.compareTo(n.maxv)>0&&(n.maxv=i.maxv):(t.push(i),n=i))}),t)}class V{constructor(e,t){this.blockPosition=e,this.dataPosition=t}toString(){return`${this.blockPosition}:${this.dataPosition}`}compareTo(e){return this.blockPosition-e.blockPosition||this.dataPosition-e.dataPosition}}function T(o,e=0,t=!1){if(t)throw new Error("big-endian virtual file offsets not implemented");return new V(o[e+7]*1099511627776+o[e+6]*4294967296+o[e+5]*16777216+o[e+4]*65536+o[e+3]*256+o[e+2],o[e+1]<<8|o[e])}class D{constructor(e,t,n,i=void 0){this.minv=e,this.maxv=t,this.bin=n,this._fetchedSize=i}toUniqueString(){return`${this.minv}..${this.maxv} (bin ${this.bin}, fetchedSize ${this.fetchedSize()})`}toString(){return this.toUniqueString()}compareTo(e){return this.minv.compareTo(e.minv)||this.maxv.compareTo(e.maxv)||this.bin-e.bin}fetchedSize(){return this._fetchedSize!==void 0?this._fetchedSize:this.maxv.blockPosition+65536-this.minv.blockPosition}}class W{constructor({filehandle:e,renameRefSeqs:t=n=>n}){this.filehandle=e,this.renameRefSeq=t}async getMetadata(e={}){const{indices:t,...n}=await this.parse(e);return n}_findFirstData(e,t){return e?e.compareTo(t)>0?t:e:t}async parse(e={}){return this.parseP||(this.parseP=this._parse(e).catch(t=>{throw this.parseP=void 0,t})),this.parseP}async hasRefSeq(e,t={}){var n;return!!(!((n=(await this.parse(t)).indices[e])===null||n===void 0)&&n.binIndex)}}const ne=21578324,U=14;function ie(o,e){return o+=1,e-=1,[[0,0],[1+(o>>26),1+(e>>26)],[9+(o>>23),9+(e>>23)],[73+(o>>20),73+(e>>20)],[585+(o>>17),585+(e>>17)],[4681+(o>>14),4681+(e>>14)]]}class y extends W{async lineCount(e,t={}){const n=await this.parse(t),i=n.refNameToId[e];if(i===void 0||!n.indices[i])return-1;const{stats:a}=n.indices[i];return a?a.lineCount:-1}async _parse(e={}){const t=await this.filehandle.readFile(e),n=await $(t);if(_(e.signal),n.readUInt32LE(0)!==ne)throw new Error("Not a TBI file");const i=n.readInt32LE(4),s=n.readInt32LE(8),a=s&65536?"zero-based-half-open":"1-based-closed",f={0:"generic",1:"SAM",2:"VCF"}[s&15];if(!f)throw new Error(`invalid Tabix preset format flags ${s}`);const d={ref:n.readInt32LE(12),start:n.readInt32LE(16),end:n.readInt32LE(20)},u=n.readInt32LE(24),h=5,c=((1<<(h+1)*3)-1)/7,b=2**(14+h*3),I=u?String.fromCharCode(u):null,m=n.readInt32LE(28),w=n.readInt32LE(32),{refNameToId:x,refIdToName:p}=this._parseNameBytes(n.slice(36,36+w));let l=36+w,g;return{indices:new Array(i).fill(0).map(()=>{const E=n.readInt32LE(l);l+=4;const v={};let N;for(let C=0;C<E;C+=1){const A=n.readUInt32LE(l);if(l+=4,A>c+1)throw new Error("tabix index contains too many bins, please use a CSI index");if(A===c+1){const k=n.readInt32LE(l);l+=4,k===2&&(N=this.parsePseudoBin(n,l)),l+=16*k}else{const k=n.readInt32LE(l);l+=4;const O=new Array(k);for(let M=0;M<k;M+=1){const q=T(n,l),Y=T(n,l+8);l+=16,g=this._findFirstData(g,q),O[M]=new D(q,Y,A)}v[A]=O}}const B=n.readInt32LE(l);l+=4;const L=new Array(B);for(let C=0;C<B;C+=1)L[C]=T(n,l),l+=8,g=this._findFirstData(g,L[C]);return{binIndex:v,linearIndex:L,stats:N}}),metaChar:I,maxBinNumber:c,maxRefLength:b,skipLines:m,firstDataLine:g,columnNumbers:d,coordinateType:a,format:f,refIdToName:p,refNameToId:x,maxBlockSize:65536}}parsePseudoBin(e,t){return{lineCount:j(H.fromBytesLE(e.slice(t+16,t+24),!0))}}_parseNameBytes(e){let t=0,n=0;const i=[],s={};for(let a=0;a<e.length;a+=1)if(!e[a]){if(n<a){let r=e.toString("utf8",n,a);r=this.renameRefSeq(r),i[t]=r,s[r]=t}n=a+1,t+=1}return{refNameToId:s,refIdToName:i}}async blocksForRange(e,t,n,i={}){t<0&&(t=0);const s=await this.parse(i),a=s.refNameToId[e];if(a===void 0)return[];const r=s.indices[a];if(!r)return[];(r.linearIndex.length?r.linearIndex[t>>U>=r.linearIndex.length?r.linearIndex.length-1:t>>U]:new V(0,0))||console.warn("querying outside of possible tabix range");const d=ie(t,n),u=[];for(const[m,w]of d)for(let x=m;x<=w;x++)if(r.binIndex[x])for(const p of r.binIndex[x])u.push(new D(p.minv,p.maxv,x));const h=r.linearIndex.length;let c=null;const b=Math.min(t>>14,h-1),I=Math.min(n>>14,h-1);for(let m=b;m<=I;++m){const w=r.linearIndex[m];w&&(!c||w.compareTo(c)<0)&&(c=w)}return X(u,c)}}const re=21582659,se=38359875;function ae(o,e){return o*2**e}function G(o,e){return Math.floor(o/2**e)}class z extends W{constructor(e){super(e),this.maxBinNumber=0,this.depth=0,this.minShift=0}async lineCount(e,t={}){const n=await this.parse(t),i=n.refNameToId[e];if(i===void 0||!n.indices[i])return-1;const{stats:a}=n.indices[i];return a?a.lineCount:-1}indexCov(){throw new Error("CSI indexes do not support indexcov")}parseAuxData(e,t){const n=e.readInt32LE(t),i=n&65536?"zero-based-half-open":"1-based-closed",s={0:"generic",1:"SAM",2:"VCF"}[n&15];if(!s)throw new Error(`invalid Tabix preset format flags ${n}`);const a={ref:e.readInt32LE(t+4),start:e.readInt32LE(t+8),end:e.readInt32LE(t+12)},r=e.readInt32LE(t+16),f=r?String.fromCharCode(r):null,d=e.readInt32LE(t+20),u=e.readInt32LE(t+24),{refIdToName:h,refNameToId:c}=this._parseNameBytes(e.slice(t+28,t+28+u));return{refIdToName:h,refNameToId:c,skipLines:d,metaChar:f,columnNumbers:a,format:s,coordinateType:i}}_parseNameBytes(e){let t=0,n=0;const i=[],s={};for(let a=0;a<e.length;a+=1)if(!e[a]){if(n<a){let r=e.toString("utf8",n,a);r=this.renameRefSeq(r),i[t]=r,s[r]=t}n=a+1,t+=1}return{refNameToId:s,refIdToName:i}}async _parse(e={}){const t=await $(await this.filehandle.readFile(e));let n;if(t.readUInt32LE(0)===re)n=1;else if(t.readUInt32LE(0)===se)n=2;else throw new Error("Not a CSI file");this.minShift=t.readInt32LE(4),this.depth=t.readInt32LE(8),this.maxBinNumber=((1<<(this.depth+1)*3)-1)/7;const i=2**(this.minShift+this.depth*3),s=t.readInt32LE(12),a=s&&s>=30?this.parseAuxData(t,16):{refIdToName:[],refNameToId:{},metaChar:null,columnNumbers:{ref:0,start:1,end:2},coordinateType:"zero-based-half-open",format:"generic"},r=t.readInt32LE(16+s);let f,d=16+s+4;const u=new Array(r).fill(0).map(()=>{const h=t.readInt32LE(d);d+=4;const c={};let b;for(let I=0;I<h;I+=1){const m=t.readUInt32LE(d);if(m>this.maxBinNumber)b=this.parsePseudoBin(t,d+4),d+=48;else{const w=T(t,d+4);f=this._findFirstData(f,w);const x=t.readInt32LE(d+12);d+=16;const p=new Array(x);for(let l=0;l<x;l+=1){const g=T(t,d),P=T(t,d+8);d+=16,p[l]=new D(g,P,m)}c[m]=p}}return{binIndex:c,stats:b}});return{...a,csi:!0,refCount:r,maxBlockSize:65536,firstDataLine:f,csiVersion:n,indices:u,depth:this.depth,maxBinNumber:this.maxBinNumber,maxRefLength:i}}parsePseudoBin(e,t){return{lineCount:j(H.fromBytesLE(e.slice(t+28,t+36),!0))}}async blocksForRange(e,t,n,i={}){t<0&&(t=0);const s=await this.parse(i),a=s.refNameToId[e];if(a===void 0)return[];const r=s.indices[a];if(!r)return[];const f=this.reg2bins(t,n),d=[];for(const[u,h]of f)for(let c=u;c<=h;c++)if(r.binIndex[c])for(const b of r.binIndex[c])d.push(new D(b.minv,b.maxv,c));return X(d,new V(0,0))}reg2bins(e,t){e-=1,e<1&&(e=1),t>2**50&&(t=2**34),t-=1;let n=0,i=0,s=this.minShift+this.depth*3;const a=[];for(;n<=this.depth;s-=3,i+=ae(1,n*3),n+=1){const r=i+G(e,s),f=i+G(t,s);if(f-r+a.length>this.maxBinNumber)throw new Error(`query ${e}-${t} is too large for current binning scheme (shift ${this.minShift}, depth ${this.depth}), try a smaller query or a coarser index binning scheme`);a.push([r,f])}return a}}function oe(o){return/^[\u0000-\u007F]*$/.test(o)}const S=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;class xe{constructor({path:e,filehandle:t,url:n,tbiPath:i,tbiUrl:s,tbiFilehandle:a,csiPath:r,csiUrl:f,csiFilehandle:d,renameRefSeqs:u=c=>c,chunkCacheSize:h=5*2**20}){if(t)this.filehandle=t;else if(e)this.filehandle=new R(e);else if(n)this.filehandle=new F(n);else throw new TypeError("must provide either filehandle or path");if(a)this.index=new y({filehandle:a,renameRefSeqs:u});else if(d)this.index=new z({filehandle:d,renameRefSeqs:u});else if(i)this.index=new y({filehandle:new R(i),renameRefSeqs:u});else if(r)this.index=new z({filehandle:new R(r),renameRefSeqs:u});else if(e)this.index=new y({filehandle:new R(`${e}.tbi`),renameRefSeqs:u});else if(f)this.index=new z({filehandle:new F(f)});else if(s)this.index=new y({filehandle:new F(s)});else if(n)this.index=new y({filehandle:new F(`${n}.tbi`)});else throw new TypeError("must provide one of tbiFilehandle, tbiPath, csiFilehandle, csiPath, tbiUrl, csiUrl");this.renameRefSeq=u,this.chunkCache=new J({cache:new K({maxSize:Math.floor(h/65536)}),fill:(c,b)=>this.readChunk(c,{signal:b})})}async getLines(e,t,n,i){var s,a;let r,f={},d;typeof i=="function"?d=i:(f=i,d=i.lineCallback,r=i.signal);const u=await this.index.getMetadata(f);_(r);const h=t??0,c=n??u.maxRefLength;if(!(h<=c))throw new TypeError("invalid start and end coordinates. start must be less than or equal to end");if(h===c)return;const b=await this.index.blocksForRange(e,h,c,f);_(r);for(const I of b){const{buffer:m,cpositions:w,dpositions:x}=await this.chunkCache.get(I.toString(),I,r);_(r);let p=0,l=0;const g=(s=S==null?void 0:S.decode(m))!==null&&s!==void 0?s:m.toString(),P=m.length<5e8&&oe(g);for(;p<g.length;){let E,v;if(P){if(v=g.indexOf(`
`,p),v===-1)break;E=g.slice(p,v)}else{if(v=m.indexOf(`
`,p),v===-1)break;const L=m.slice(p,v);E=(a=S==null?void 0:S.decode(L))!==null&&a!==void 0?a:L.toString()}if(x){for(;p+I.minv.dataPosition>=x[l++];);l--}const{startCoordinate:N,overlaps:B}=this.checkLine(u,e,h,c,E);if(B)d(E,w[l]*256+(p-x[l])+I.minv.dataPosition+1);else if(N!==void 0&&N>=c)return;p=v+1}}}async getMetadata(e={}){return this.index.getMetadata(e)}async getHeaderBuffer(e={}){const{firstDataLine:t,metaChar:n,maxBlockSize:i}=await this.getMetadata(e);_(e.signal);const s=((t==null?void 0:t.blockPosition)||0)+i,a=await this._readRegion(0,s,e),r=await $(a);if(n){let f=-1;const d=10,u=n.charCodeAt(0);for(let h=0;h<r.length&&!(h===f+1&&r[h]!==u);h+=1)r[h]===d&&(f=h);return r.subarray(0,f+1)}return r}async getHeader(e={}){return(await this.getHeaderBuffer(e)).toString("utf8")}async getReferenceSequenceNames(e={}){return(await this.getMetadata(e)).refIdToName}checkLine(e,t,n,i,s){const{columnNumbers:a,metaChar:r,coordinateType:f,format:d}=e;if(r&&s.startsWith(r))return{overlaps:!1};let{ref:u,start:h,end:c}=a;u||(u=0),h||(h=0),c||(c=0),d==="VCF"&&(c=8);const b=Math.max(u,h,c);let I=1,m=0,w="",x=-1/0;const p=s.length;for(let l=0;l<p+1;l++)if(s[l]==="	"||l===p){if(I===u){if(this.renameRefSeq(s.slice(m,l))!==t)return{overlaps:!1}}else if(I===h){if(x=parseInt(s.slice(m,l),10),f==="1-based-closed"&&(x-=1),x>=i)return{startCoordinate:x,overlaps:!1};if((c===0||c===h)&&x+1<=n)return{startCoordinate:x,overlaps:!1}}else if(d==="VCF"&&I===4)w=s.slice(m,l);else if(I===c&&(d==="VCF"?this._getVcfEnd(x,w,s.slice(m,l)):Number.parseInt(s.slice(m,l),10))<=n)return{overlaps:!1};if(m=l+1,I+=1,I>b)break}return{startCoordinate:x,overlaps:!0}}_getVcfEnd(e,t,n){let i=e+t.length;const s=n.includes("SVTYPE=TRA");if(n[0]!=="."&&!s){let a=";";for(let r=0;r<n.length;r+=1){if(a===";"&&n.slice(r,r+4)==="END="){let f=n.indexOf(";",r);f===-1&&(f=n.length),i=parseInt(n.slice(r+4,f),10);break}a=n[r]}}else if(s)return e+1;return i}async lineCount(e,t={}){return this.index.lineCount(e,t)}async _readRegion(e,t,n={}){const i=Q.Buffer.alloc(t),{bytesRead:s,buffer:a}=await this.filehandle.read(i,0,t,e,n);return a.subarray(0,s)}async readChunk(e,t={}){const n=await this._readRegion(e.minv.blockPosition,e.fetchedSize(),t);return Z(n,e)}}export{z as CSI,y as TBI,xe as TabixIndexedFile};
