import{L as d}from"./__vite-browser-external-d053bc6e.js";import{R as b}from"./remoteFile-1948951e.js";import{b as i}from"./index-462333f7.js";import"./_commonjsHelpers-de833af9.js";function a(o){const r=new FileReader;return new Promise((n,e)=>{r.onerror=()=>{r.abort(),e(new Error("problem reading blob"))},r.onabort=()=>{e(new Error("blob reading was aborted"))},r.onload=()=>{r.result&&typeof r.result!="string"?n(r.result):e(new Error("unknown error reading blob"))},r.readAsArrayBuffer(o)})}function c(o){const r=new FileReader;return new Promise((n,e)=>{r.onerror=()=>{r.abort(),e(new Error("problem reading blob"))},r.onabort=()=>{e(new Error("blob reading was aborted"))},r.onload=()=>{r.result&&typeof r.result=="string"?n(r.result):e(new Error("unknown error reading blob"))},r.readAsText(o)})}class E{constructor(r){this.blob=r,this.size=r.size}async read(r,n=0,e,f=0){if(!e)return{bytesRead:0,buffer:r};const t=f,u=t+e,l=await a(this.blob.slice(t,u)),s=i.Buffer.from(l);return{bytesRead:s.copy(r,n),buffer:s}}async readFile(r){let n;if(typeof r=="string"?n=r:n=r&&r.encoding,n==="utf8")return c(this.blob);if(n)throw new Error(`unsupported encoding: ${n}`);const e=await a(this.blob);return i.Buffer.from(e)}async stat(){return{size:this.size}}async close(){}}function w(o,r={}){return new b(o,r)}function R(o,r,n,e={}){if(n!==void 0)return n;if(o!==void 0)return w(o,e);if(r!==void 0)return new d(r,e);throw new Error("no url, path, or filehandle provided, cannot open")}export{E as BlobFile,d as LocalFile,b as RemoteFile,w as fromUrl,R as open};
