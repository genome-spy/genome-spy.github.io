import{L as g}from"./__vite-browser-external-D80GqXp3.js";import{b as m}from"./index-D1-7ym7j.js";import{L as _,u as b}from"./long-CAmP1QdM.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-ClfaVKLN.js";const w=1;class I{constructor({filehandle:e,path:t}){if(e)this.filehandle=e;else if(t)this.filehandle=new g(t);else throw new TypeError("either filehandle or path must be defined")}_readLongWithOverflow(e,t=0,s=!0){const n=_.fromBytesLE(e.slice(t,t+8),s);if(n.greaterThan(Number.MAX_SAFE_INTEGER)||n.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return n.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let e=m.Buffer.allocUnsafe(8);await this.filehandle.read(e,0,8,0);const t=this._readLongWithOverflow(e,0,!0);if(!t)return[[0,0]];const s=new Array(t+1);s[0]=[0,0];const n=8*2*t;if(n>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");e=m.Buffer.allocUnsafe(n),await this.filehandle.read(e,0,n,8);for(let r=0;r<t;r+=1){const i=this._readLongWithOverflow(e,r*16),l=this._readLongWithOverflow(e,r*16+8);s[r+1]=[i,l]}return s}async getLastBlock(){const e=await this._getIndex();if(e.length)return e[e.length-1]}async getRelevantBlocksForRead(e,t){const s=t+e;if(e===0)return[];const n=await this._getIndex(),r=[],i=(h,u)=>{const p=h[w],E=u?u[w]:1/0;return p<=t&&E>t?0:p<t?-1:1};let l=0,f=n.length-1,a=Math.floor(n.length/2),d=i(n[a],n[a+1]);for(;d!==0;)d>0?f=a-1:d<0&&(l=a+1),a=Math.ceil((f-l)/2)+l,d=i(n[a],n[a+1]);r.push(n[a]);let c=a+1;for(;c<n.length&&(r.push(n[c]),!(n[c][w]>=s));c+=1);return r[r.length-1][w]<s&&r.push([]),r}}class y{constructor({filehandle:e,path:t,gziFilehandle:s,gziPath:n}){if(e)this.filehandle=e;else if(t)this.filehandle=new g(t);else throw new TypeError("either filehandle or path must be defined");if(!s&&!n&&!t)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new I({filehandle:s,path:!s&&!n&&t?n:`${t}.gzi`})}async stat(){const e=await this.filehandle.stat();return Object.assign(e,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,e]=await this.gzi.getLastBlock(),{size:t}=await this.filehandle.stat(),s=m.Buffer.allocUnsafe(4),{bytesRead:n}=await this.filehandle.read(s,0,4,t-28-4);if(n!==4)throw new Error("read error");const r=s.readUInt32LE(0);return e+r}async _readAndUncompressBlock(e,[t],[s]){let n=s;n||(n=(await this.filehandle.stat()).size);const r=n-t;return await this.filehandle.read(e,0,r,t),await b(e.slice(0,r))}async read(e,t,s,n){const r=await this.gzi.getRelevantBlocksForRead(s,n),i=m.Buffer.allocUnsafe(32768*2);let l=t,f=0;for(let a=0;a<r.length-1;a+=1){const d=await this._readAndUncompressBlock(i,r[a],r[a+1]),[,c]=r[a],h=c>=n?0:n-c,u=Math.min(n+s,c+d.length)-c;h>=0&&h<d.length&&(d.copy(e,l,h,u),l+=u-h,f+=u-h)}return{bytesRead:f,buffer:e}}}function x(o,e){return o.offset+o.lineBytes*Math.floor(e/o.lineLength)+e%o.lineLength}async function S(o,e){const t=await o.readFile(e);if(!(t!=null&&t.length))throw new Error("No data read from FASTA index (FAI) file");let s=0,n;const r=t.toString("utf8").split(/\r?\n/).filter(i=>/\S/.test(i)).map(i=>i.split("	")).filter(i=>i[0]!=="").map(i=>((!n||n.name!==i[0])&&(n={name:i[0],id:s},s+=1),{id:n.id,name:i[0],length:+i[1],start:0,end:+i[1],offset:+i[2],lineLength:+i[3],lineBytes:+i[4]}));return{name:Object.fromEntries(r.map(i=>[i.name,i])),id:Object.fromEntries(r.map(i=>[i.id,i]))}}class B{constructor({fasta:e,fai:t,path:s,faiPath:n}){if(e)this.fasta=e;else if(s)this.fasta=new g(s);else throw new Error("Need to pass filehandle for fasta or path to localfile");if(t)this.fai=t;else if(n)this.fai=new g(n);else if(s)this.fai=new g(`${s}.fai`);else throw new Error("Need to pass filehandle for  or path to localfile")}async _getIndexes(e){return this.indexes||(this.indexes=S(this.fai,e)),this.indexes}async getSequenceNames(e){return Object.keys((await this._getIndexes(e)).name)}async getSequenceSizes(e){const t={},s=await this._getIndexes(e);for(const n of Object.values(s.id))t[n.name]=n.length;return t}async getSequenceSize(e,t){var s;return(s=(await this._getIndexes(t)).name[e])===null||s===void 0?void 0:s.length}async hasReferenceSequence(e,t){return!!(await this._getIndexes(t)).name[e]}async getResiduesById(e,t,s,n){const r=(await this._getIndexes(n)).id[e];if(r)return this._fetchFromIndexEntry(r,t,s,n)}async getResiduesByName(e,t,s,n){const r=(await this._getIndexes(n)).name[e];if(r)return this._fetchFromIndexEntry(r,t,s,n)}async getSequence(e,t,s,n){return this.getResiduesByName(e,t,s,n)}async _fetchFromIndexEntry(e,t=0,s,n){let r=s;if(t<0)throw new TypeError("regionStart cannot be less than 0");if((r===void 0||r>e.length)&&(r=e.length),t>=r)return"";const i=x(e,t),l=x(e,r)-i,f=m.Buffer.allocUnsafe(l);return await this.fasta.read(f,0,l,i,n),f.toString("utf8").replace(/\s+/g,"")}}class k extends B{constructor({fasta:e,path:t,fai:s,faiPath:n,gzi:r,gziPath:i}){super({fasta:e,path:t,fai:s,faiPath:n}),e&&r?this.fasta=new y({filehandle:e,gziFilehandle:r}):t&&i&&(this.fasta=new y({path:t,gziPath:i}))}}function F(o){return o.split(">").filter(e=>/\S/.test(e)).map(e=>{const[t,...s]=e.split(`
`),[n,...r]=t.split(" "),i=s.join("").replace(/\s/g,"");return{id:n,description:r.join(" "),sequence:i}})}class R{constructor({fasta:e,path:t}){if(e)this.fasta=e;else if(t)this.fasta=new g(t);else throw new Error("Need to pass fasta or path");this.data=this.fasta.readFile().then(s=>{const n=s.toString("utf8");return F(n)})}async fetch(e,t,s){const r=(await this.data).find(l=>l.id===e),i=s-t;if(!r)throw new Error(`no sequence with id ${e} exists`);return r.sequence.slice(t,i)}async getSequenceNames(){return(await this.data).map(t=>t.id)}}export{k as BgzipIndexedFasta,R as FetchableSmallFasta,B as IndexedFasta,F as parseSmallFasta};
