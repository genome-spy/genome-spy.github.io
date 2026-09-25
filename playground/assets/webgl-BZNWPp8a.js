import{A as e,At as t,E as n,I as r,Jt as i,Kt as a,Ot as o,Q as s,R as c,Sn as l,St as u,V as d,Yt as f,Zt as p,at as m,b as h,d as g,fn as _,ft as v,gt as ee,ht as te,mn as y,mt as b,n as ne,o as x,pt as re,qt as ie,rt as ae,s as oe,st as se,tt as ce,un as le,ut as ue,vn as de}from"./clipOptions-DzGYrai0.js";import{T as fe,b as S,g as pe,v as C,x as me,y as he}from"./vega-scale-DpTUb9Jq.js";import{n as ge,r as _e,t as ve}from"./indexer-XlmRmJcM.js";import{n as ye,t as be}from"./indexLikeDomainUtils-CtCqYOrV.js";import{n as xe,t as Se}from"./viewError-BeUp1kNb.js";import{t as Ce}from"./rectangle-CAPGOw2x.js";import{n as we,t as Te}from"./layoutResult-BbpHOHQN.js";import{n as Ee,r as De}from"./performanceProfiler-t6gLo5-8.js";import{t as Oe}from"./canvasSizeHelper-CKNOir0P.js";import{n as ke,t as Ae}from"./rasterImage-CSBco7OJ.js";import{t as je}from"./renderingConstants-r_jqp-Og.js";var Me=``+new URL(`Lato-Regular-BEY4SZ9T.png`,import.meta.url).href,Ne=5120,Pe=5121,Fe=5122,Ie=5123,Le=5124,Re=5125,ze=5126,Be=32819,Ve=32820,He=33635,Ue=5131,We=33640,Ge=35899,Ke=35902,qe=36269,Je=34042,Ye={};{let e=Ye;e[Ne]=Int8Array,e[Pe]=Uint8Array,e[Fe]=Int16Array,e[Ie]=Uint16Array,e[Le]=Int32Array,e[Re]=Uint32Array,e[ze]=Float32Array,e[Be]=Uint16Array,e[Ve]=Uint16Array,e[He]=Uint16Array,e[Ue]=Uint16Array,e[We]=Uint32Array,e[Ge]=Uint32Array,e[Ke]=Uint32Array,e[qe]=Uint32Array,e[Je]=Uint32Array}function Xe(e){if(e instanceof Int8Array)return Ne;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Pe;if(e instanceof Int16Array)return Fe;if(e instanceof Uint16Array)return Ie;if(e instanceof Int32Array)return Le;if(e instanceof Uint32Array)return Re;if(e instanceof Float32Array)return ze;throw Error(`unsupported typed array type`)}function Ze(e){if(e===Int8Array)return Ne;if(e===Uint8Array||e===Uint8ClampedArray)return Pe;if(e===Int16Array)return Fe;if(e===Uint16Array)return Ie;if(e===Int32Array)return Le;if(e===Uint32Array)return Re;if(e===Float32Array)return ze;throw Error(`unsupported typed array type`)}function Qe(e){let t=Ye[e];if(!t)throw Error(`unknown gl type`);return t}var $e=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};function et(...e){console.error(...e)}function tt(...e){console.warn(...e)}function nt(e,t){return typeof WebGLBuffer<`u`&&t instanceof WebGLBuffer}function rt(e,t){return typeof WebGLRenderbuffer<`u`&&t instanceof WebGLRenderbuffer}function it(e,t){return typeof WebGLTexture<`u`&&t instanceof WebGLTexture}function at(e,t){return typeof WebGLSampler<`u`&&t instanceof WebGLSampler}var ot=35044,w=34962,st=34963,ct=34660,lt=5120,ut=5121,dt=5122,ft=5123,pt=5124,mt=5125,ht=5126,gt={attribPrefix:``};function _t(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||ot)}function vt(e,t,n,r){if(nt(e,t))return t;n||=w;let i=e.createBuffer();return _t(e,n,i,t,r),i}function yt(e){return e===`indices`}function bt(e){return e instanceof Int8Array||e instanceof Uint8Array}function xt(e){return e===Int8Array||e===Uint8Array}function St(e){return e.length?e:e.data}var Ct=/coord|texture/i,wt=/color|colour/i;function Tt(e,t){let n;if(n=Ct.test(e)?2:wt.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function Et(e,t){return e.numComponents||e.size||Tt(t,St(e).length)}function Dt(e,t){if($e(e))return e;if($e(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type;return n||=yt(t)?Uint16Array:Float32Array,new n(e.data)}function Ot(e,t){let n={};return Object.keys(t).forEach(function(r){if(!yt(r)){let i=t[r],a=i.attrib||i.name||i.attribName||gt.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!$e(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t,o,s,c;if(i.buffer&&i.buffer instanceof WebGLBuffer)t=i.buffer,c=i.numComponents||i.size,o=i.type,s=i.normalize;else if(typeof i==`number`||typeof i.data==`number`){let n=i.data||i,a=i.type||Float32Array,l=n*a.BYTES_PER_ELEMENT;o=Ze(a),s=i.normalize===void 0?xt(a):i.normalize,c=i.numComponents||i.size||Tt(r,n),t=e.createBuffer(),e.bindBuffer(w,t),e.bufferData(w,l,i.drawType||ot)}else{let n=Dt(i,r);t=vt(e,n,void 0,i.drawType),o=Xe(n),s=i.normalize===void 0?bt(n):i.normalize,c=Et(i,r)}n[a]={buffer:t,numComponents:c,type:o,normalize:s,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(w,null),n}function kt(e,t,n,r){n=Dt(n),r===void 0?_t(e,w,t.buffer,n,t.drawType):(e.bindBuffer(w,t.buffer),e.bufferSubData(w,r,n))}function At(e,t){return t===lt||t===ut?1:t===dt||t===ft?2:t===pt||t===mt||t===ht?4:0}var jt=[`position`,`positions`,`a_position`];function Mt(e,t){let n,r;for(r=0;r<jt.length&&(n=jt[r],!(n in t||(n=gt.attribPrefix+n,n in t)));++r);r===jt.length&&(n=Object.keys(t)[0]);let i=t[n];if(!i.buffer)return 1;e.bindBuffer(w,i.buffer);let a=e.getBufferParameter(w,ct);e.bindBuffer(w,null);let o=a/At(e,i.type),s=i.numComponents||i.size,c=o/s;if(c%1!=0)throw Error(`numComponents ${s} not correct for length ${length}`);return c}function Nt(e,t,n){let r=Ot(e,t),i=Object.assign({},n||{});i.attribs=Object.assign({},n?n.attribs:{},r);let a=t.indices;if(a){let t=Dt(a,`indices`);i.indices=vt(e,t,st),i.numElements=t.length,i.elementType=Xe(t)}else i.numElements||=Mt(e,i.attribs);return i}function Pt(e){return!!e.texStorage2D}var Ft=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),T={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},It=$e,Lt=function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),Rt=6406,E=6407,D=6408,zt=6409,Bt=6410,O=6402,Vt=34041,Ht=33071,Ut=9728,Wt=9729,k=3553,A=34067,j=32879,M=35866,Gt=34069,Kt=34070,qt=34071,Jt=34072,Yt=34073,Xt=34074,Zt=10241,Qt=10240,$t=10242,en=10243,tn=32882,nn=33082,rn=33083,an=33084,on=33085,sn=3317,cn=3314,ln=32878,un=3316,dn=3315,fn=32877,pn=37443,mn=37441,hn=37440,gn=33321,_n=36756,vn=33325,yn=33326,bn=33330,xn=33329,Sn=33338,Cn=33337,wn=33340,Tn=33339,En=33323,Dn=36757,On=33327,kn=33328,An=33336,jn=33335,Mn=33332,Nn=33331,Pn=33334,Fn=33333,In=32849,Ln=35905,Rn=36194,zn=36758,Bn=35898,Vn=35901,Hn=34843,Un=34837,Wn=36221,Gn=36239,Kn=36215,qn=36233,Jn=36209,Yn=36227,Xn=32856,Zn=35907,Qn=36759,$n=32855,er=32854,tr=32857,nr=34842,rr=34836,ir=36220,ar=36238,or=36975,sr=36214,cr=36232,lr=36226,ur=36208,dr=33189,fr=33190,pr=36012,mr=36013,hr=35056,N=5120,P=5121,gr=5122,_r=5123,vr=5124,F=5125,I=5126,yr=32819,br=32820,xr=33635,L=5131,Sr=36193,Cr=33640,wr=35899,Tr=35902,Er=36269,Dr=34042,Or=33319,R=33320,kr=6403,z=36244,B=36248,V=36249,Ar={};{let e=Ar;e[Rt]={numColorComponents:1},e[zt]={numColorComponents:1},e[Bt]={numColorComponents:2},e[E]={numColorComponents:3},e[D]={numColorComponents:4},e[kr]={numColorComponents:1},e[z]={numColorComponents:1},e[Or]={numColorComponents:2},e[R]={numColorComponents:2},e[E]={numColorComponents:3},e[B]={numColorComponents:3},e[D]={numColorComponents:4},e[V]={numColorComponents:4},e[O]={numColorComponents:1},e[Vt]={numColorComponents:2}}var jr;function Mr(e){if(!jr){let e={};e[Rt]={textureFormat:Rt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[P,L,Sr,I]},e[zt]={textureFormat:zt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[P,L,Sr,I]},e[Bt]={textureFormat:Bt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[P,L,Sr,I]},e[E]={textureFormat:E,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[P,L,Sr,I,xr]},e[D]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[P,L,Sr,I,yr,br]},e[O]={textureFormat:O,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[F,_r]},e[gn]={textureFormat:kr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[P]},e[_n]={textureFormat:kr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[N]},e[vn]={textureFormat:kr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[I,L]},e[yn]={textureFormat:kr,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[bn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[P]},e[xn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[N]},e[Mn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[_r]},e[Nn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[gr]},e[Pn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[Fn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[vr]},e[En]={textureFormat:Or,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[P]},e[Dn]={textureFormat:Or,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[N]},e[On]={textureFormat:Or,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[I,L]},e[kn]={textureFormat:Or,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[I]},e[An]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[P]},e[jn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[N]},e[Sn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[_r]},e[Cn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[gr]},e[wn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[F]},e[Tn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[vr]},e[In]={textureFormat:E,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[Ln]={textureFormat:E,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[Rn]={textureFormat:E,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[P,xr]},e[zn]={textureFormat:E,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[N]},e[Bn]={textureFormat:E,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[I,L,wr]},e[Vn]={textureFormat:E,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[I,L,Tr]},e[Hn]={textureFormat:E,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[I,L]},e[Un]={textureFormat:E,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[I]},e[Wn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[P]},e[Gn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[N]},e[Kn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[_r]},e[qn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[gr]},e[Jn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[F]},e[Yn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[vr]},e[Xn]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Zn]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Qn]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[N]},e[$n]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[P,br,Cr]},e[er]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[P,yr]},e[tr]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[Cr]},e[nr]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[I,L]},e[rr]={textureFormat:D,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[I]},e[ir]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[P]},e[ar]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[N]},e[or]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Cr]},e[sr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[_r]},e[cr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[gr]},e[lr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[vr]},e[ur]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[F]},e[dr]={textureFormat:O,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[_r,F]},e[fr]={textureFormat:O,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[pr]={textureFormat:O,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[hr]={textureFormat:Vt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Dr]},e[mr]={textureFormat:Vt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Er]},Object.keys(e).forEach(function(t){let n=e[t];n.bytesPerElementMap={},n.bytesPerElement.forEach(function(e,t){let r=n.type[t];n.bytesPerElementMap[r]=e})}),jr=e}return jr[e]}function Nr(e,t){let n=Mr(e);if(!n)throw`unknown internal format`;let r=n.bytesPerElementMap[t];if(r===void 0)throw`unknown internal format`;return r}function Pr(e){let t=Mr(e);if(!t)throw`unknown internal format`;return{format:t.textureFormat,type:t.type[0]}}function Fr(e){return(e&e-1)==0}function Ir(e,t,n,r){if(!Pt(e))return Fr(t)&&Fr(n);let i=Mr(r);if(!i)throw`unknown internal format`;return i.colorRenderable&&i.textureFilterable}function Lr(e){let t=Mr(e);if(!t)throw`unknown internal format`;return t.textureFilterable}function Rr(e,t,n){return It(t)?Xe(t):n||P}function zr(e,t,n,r,i){if(i%1!=0)throw`can't guess dimensions`;if(!n&&!r){let e=Math.sqrt(i/(t===A?6:1));e%1==0?(n=e,r=e):(n=i,r=1)}else if(!r){if(r=i/n,r%1)throw`can't guess dimensions`}else if(!n&&(n=i/r,n%1))throw`can't guess dimensions`;return{width:n,height:r}}function Br(e,t){t.colorspaceConversion!==void 0&&e.pixelStorei(pn,t.colorspaceConversion),t.premultiplyAlpha!==void 0&&e.pixelStorei(mn,t.premultiplyAlpha),t.flipY!==void 0&&e.pixelStorei(hn,t.flipY)}function Vr(e){e.pixelStorei(sn,4),Pt(e)&&(e.pixelStorei(cn,0),e.pixelStorei(ln,0),e.pixelStorei(un,0),e.pixelStorei(dn,0),e.pixelStorei(fn,0))}function Hr(e,t,n,r){r.minMag&&(n.call(e,t,Zt,r.minMag),n.call(e,t,Qt,r.minMag)),r.min&&n.call(e,t,Zt,r.min),r.mag&&n.call(e,t,Qt,r.mag),r.wrap&&(n.call(e,t,$t,r.wrap),n.call(e,t,en,r.wrap),(t===j||at(e,t))&&n.call(e,t,tn,r.wrap)),r.wrapR&&n.call(e,t,tn,r.wrapR),r.wrapS&&n.call(e,t,$t,r.wrapS),r.wrapT&&n.call(e,t,en,r.wrapT),r.minLod&&n.call(e,t,nn,r.minLod),r.maxLod&&n.call(e,t,rn,r.maxLod),r.baseLevel&&n.call(e,t,an,r.baseLevel),r.maxLevel&&n.call(e,t,on,r.maxLevel)}function Ur(e,t,n){let r=n.target||k;e.bindTexture(r,t),Hr(e,r,e.texParameteri,n)}function Wr(e){return e||=T.textureColor,It(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Gr(e,t,n,r,i,a){n||=T.textureOptions,a||=D;let o=n.target||k;if(r||=n.width,i||=n.height,e.bindTexture(o,t),Ir(e,r,i,a))e.generateMipmap(o);else{let t=Lr(a)?Wt:Ut;e.texParameteri(o,Zt,t),e.texParameteri(o,Qt,t),e.texParameteri(o,$t,Ht),e.texParameteri(o,en,Ht)}}function Kr(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function qr(e,t){return t||={},t.cubeFaceOrder||[Gt,Kt,qt,Jt,Yt,Xt]}function Jr(e,t){let n=qr(e,t).map(function(e,t){return{face:e,ndx:t}});return n.sort(function(e,t){return e.face-t.face}),n}function Yr(e,t,n,r){r||=T.textureOptions;let i=r.target||k,a=r.level||0,o=n.width,s=n.height,c=r.internalFormat||r.format||D,l=Pr(c),u=r.format||l.format,d=r.type||l.type;if(Br(e,r),e.bindTexture(i,t),i===A){let l=n.width,f=n.height,p,m;if(l/6===f)p=f,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(f/6===l)p=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3==f/2)p=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2==f/3)p=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw`can't figure out cube map from element: `+(n.src?n.src:n.nodeName);let h=Lt();h?(h.canvas.width=p,h.canvas.height=p,o=p,s=p,Jr(e,r).forEach(function(t){let r=m[t.ndx*2+0]*p,i=m[t.ndx*2+1]*p;h.drawImage(n,r,i,p,p,0,0,p,p),e.texImage2D(t.face,a,c,u,d,h.canvas)}),h.canvas.width=1,h.canvas.height=1):typeof createImageBitmap<`u`&&(o=p,s=p,Jr(e,r).forEach(function(l){let f=m[l.ndx*2+0]*p,h=m[l.ndx*2+1]*p;e.texImage2D(l.face,a,c,p,p,0,u,d,null),createImageBitmap(n,f,h,p,p,{premultiplyAlpha:`none`,colorSpaceConversion:`none`}).then(function(n){Br(e,r),e.bindTexture(i,t),e.texImage2D(l.face,a,c,u,d,n),Kr(r)&&Gr(e,t,r,o,s,c)})}))}else if(i===j||i===M){let t=Math.min(n.width,n.height),r=Math.max(n.width,n.height),o=r/t;if(o%1!=0)throw`can not compute 3D dimensions of element`;let s=+(n.width===r),l=+(n.height===r);e.pixelStorei(sn,1),e.pixelStorei(cn,n.width),e.pixelStorei(ln,0),e.pixelStorei(fn,0),e.texImage3D(i,a,c,t,t,t,0,u,d,null);for(let r=0;r<o;++r){let o=r*t*s,c=r*t*l;e.pixelStorei(un,o),e.pixelStorei(dn,c),e.texSubImage3D(i,a,0,0,r,t,t,1,u,d,n)}Vr(e)}else e.texImage2D(i,a,c,u,d,n);Kr(r)&&Gr(e,t,r,o,s,c),Ur(e,t,r)}function Xr(){}function Zr(e){if(typeof document<`u`){let t=document.createElement(`a`);return t.href=e,t.hostname===location.hostname&&t.port===location.port&&t.protocol===location.protocol}else{let t=new URL(location.href).origin;return new URL(e,location.href).origin===t}}function Qr(e,t){return t===void 0&&!Zr(e)?`anonymous`:t}function $r(e,t,n){n||=Xr;let r;if(t=t===void 0?T.crossOrigin:t,t=Qr(e,t),typeof Image<`u`){r=new Image,t!==void 0&&(r.crossOrigin=t);let i=function(){r.removeEventListener(`error`,a),r.removeEventListener(`load`,o),r=null},a=function(){let t=`couldn't load image: `+e;et(t),n(t,r),i()},o=function(){n(null,r),i()};return r.addEventListener(`error`,a),r.addEventListener(`load`,o),r.src=e,r}else if(typeof ImageBitmap<`u`){let i,a,o=function(){n(i,a)},s={};t&&(s.mode=`cors`),fetch(e,s).then(function(e){if(!e.ok)throw e;return e.blob()}).then(function(e){return createImageBitmap(e,{premultiplyAlpha:`none`,colorSpaceConversion:`none`})}).then(function(e){a=e,setTimeout(o)}).catch(function(e){i=e,setTimeout(o)}),r=null}return r}function ei(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof ImageData<`u`&&e instanceof ImageData||typeof HTMLElement<`u`&&e instanceof HTMLElement}function ti(e,t,n){return ei(e)?(setTimeout(function(){n(null,e)}),e):$r(e,t,n)}function ni(e,t,n){n||=T.textureOptions;let r=n.target||k;if(e.bindTexture(r,t),n.color===!1)return;let i=Wr(n.color);if(r===A)for(let t=0;t<6;++t)e.texImage2D(Gt+t,0,D,1,1,0,D,P,i);else r===j||r===M?e.texImage3D(r,0,D,1,1,1,0,D,P,i):e.texImage2D(r,0,D,1,1,0,D,P,i)}function ri(e,t,n,r){return r||=Xr,n||=T.textureOptions,ni(e,t,n),n=Object.assign({},n),ti(n.src,n.crossOrigin,function(i,a){i?r(i,t,a):(Yr(e,t,a,n),r(null,t,a))})}function ii(e,t,n,r){r||=Xr;let i=n.src;if(i.length!==6)throw`there must be 6 urls for a cubemap`;let a=n.level||0,o=n.internalFormat||n.format||D,s=Pr(o),c=n.format||s.format,l=n.type||P,u=n.target||k;if(u!==A)throw`target must be TEXTURE_CUBE_MAP`;ni(e,t,n),n=Object.assign({},n);let d=6,f=[],p=qr(e,n),m;function h(i){return function(s,p){--d,s?f.push(s):p.width===p.height?(Br(e,n),e.bindTexture(u,t),d===5?qr().forEach(function(t){e.texImage2D(t,a,o,c,l,p)}):e.texImage2D(i,a,o,c,l,p),Kr(n)&&e.generateMipmap(u)):f.push(`cubemap face img is not a square: `+p.src),d===0&&r(f.length?f:void 0,t,m)}}m=i.map(function(e,t){return ti(e,n.crossOrigin,h(p[t]))})}function ai(e,t,n,r){r||=Xr;let i=n.src,a=n.internalFormat||n.format||D,o=Pr(a),s=n.format||o.format,c=n.type||P,l=n.target||M;if(l!==j&&l!==M)throw`target must be TEXTURE_3D or TEXTURE_2D_ARRAY`;ni(e,t,n),n=Object.assign({},n);let u=i.length,d=[],f,p=n.level||0,m=n.width,h=n.height,g=i.length,_=!0;function v(i){return function(o,v){if(--u,o)d.push(o);else{if(Br(e,n),e.bindTexture(l,t),_){_=!1,m=n.width||v.width,h=n.height||v.height,e.texImage3D(l,p,a,m,h,g,0,s,c,null);for(let t=0;t<g;++t)e.texSubImage3D(l,p,0,0,t,m,h,1,s,c,v)}else{let t=v,n;(v.width!==m||v.height!==h)&&(n=Lt(),t=n.canvas,n.canvas.width=m,n.canvas.height=h,n.drawImage(v,0,0,m,h)),e.texSubImage3D(l,p,0,0,i,m,h,1,s,c,t),n&&t===n.canvas&&(n.canvas.width=0,n.canvas.height=0)}Kr(n)&&e.generateMipmap(l)}u===0&&r(d.length?d:void 0,t,f)}}f=i.map(function(e,t){return ti(e,n.crossOrigin,v(t))})}function oi(e,t,n,r){r||=T.textureOptions;let i=r.target||k;e.bindTexture(i,t);let a=r.width,o=r.height,s=r.depth,c=r.level||0,l=r.internalFormat||r.format||D,u=Pr(l),d=r.format||u.format,f=r.type||Rr(e,n,u.type);It(n)?n instanceof Uint8ClampedArray&&(n=new Uint8Array(n.buffer)):n=new(Qe(f))(n);let p=Nr(l,f),m=n.byteLength/p;if(m%1)throw`length wrong size for format: `+Ft(e,d);let h;if(i===j||i===M)if(!a&&!o&&!s){let e=Math.cbrt(m);if(e%1!=0)throw`can't guess cube size of array of numElements: `+m;a=e,o=e,s=e}else a&&(!o||!s)?(h=zr(e,i,o,s,m/a),o=h.width,s=h.height):o&&(!a||!s)?(h=zr(e,i,a,s,m/o),a=h.width,s=h.height):(h=zr(e,i,a,o,m/s),a=h.width,o=h.height);else h=zr(e,i,a,o,m),a=h.width,o=h.height;if(Vr(e),e.pixelStorei(sn,r.unpackAlignment||1),Br(e,r),i===A){let t=p/n.BYTES_PER_ELEMENT,i=m/6*t;Jr(e,r).forEach(t=>{let r=i*t.ndx,s=n.subarray(r,r+i);e.texImage2D(t.face,c,l,a,o,0,d,f,s)})}else i===j||i===M?e.texImage3D(i,c,l,a,o,s,0,d,f,n):e.texImage2D(i,c,l,a,o,0,d,f,n);return{width:a,height:o,depth:s,type:f}}function si(e,t,n){let r=n.target||k;e.bindTexture(r,t);let i=n.level||0,a=n.internalFormat||n.format||D,o=Pr(a),s=n.format||o.format,c=n.type||o.type;if(Br(e,n),r===A)for(let t=0;t<6;++t)e.texImage2D(Gt+t,i,a,n.width,n.height,0,s,c,null);else r===j||r===M?e.texImage3D(r,i,a,n.width,n.height,n.depth,0,s,c,null):e.texImage2D(r,i,a,n.width,n.height,0,s,c,null)}function ci(e,t,n){n||=Xr,t||=T.textureOptions;let r=e.createTexture(),i=t.target||k,a=t.width||1,o=t.height||1,s=t.internalFormat||D;e.bindTexture(i,r),i===A&&(e.texParameteri(i,$t,Ht),e.texParameteri(i,en,Ht));let c=t.src;if(c)if(typeof c==`function`&&(c=c(e,t)),typeof c==`string`)ri(e,r,t,n);else if(It(c)||Array.isArray(c)&&(typeof c[0]==`number`||Array.isArray(c[0])||It(c[0]))){let n=oi(e,r,c,t);a=n.width,o=n.height}else Array.isArray(c)&&(typeof c[0]==`string`||ei(c[0]))?i===A?ii(e,r,t,n):ai(e,r,t,n):(Yr(e,r,c,t),a=c.width,o=c.height);else si(e,r,t);return Kr(t)&&Gr(e,r,t,a,o,s),Ur(e,r,t),r}function li(e,t,n,r,i,a){r||=n.width,i||=n.height,a||=n.depth;let o=n.target||k;e.bindTexture(o,t);let s=n.level||0,c=n.internalFormat||n.format||D,l=Pr(c),u=n.format||l.format,d,f=n.src;if(d=f&&(It(f)||Array.isArray(f)&&typeof f[0]==`number`)?n.type||Rr(e,f,l.type):n.type||l.type,o===A)for(let t=0;t<6;++t)e.texImage2D(Gt+t,s,c,r,i,0,u,d,null);else o===j||o===M?e.texImage3D(o,s,c,r,i,a,0,u,d,null):e.texImage2D(o,s,c,r,i,0,u,d,null)}var ui=tt,di=33984,fi=35048,pi=34962,mi=34963,hi=35345,gi=35718,_i=35721,vi=35971,yi=35382,bi=35396,xi=35398,Si=35392,Ci=35395,wi=5126,Ti=35664,Ei=35665,Di=35666,Oi=5124,ki=35667,Ai=35668,ji=35669,Mi=35670,Ni=35671,Pi=35672,Fi=35673,Ii=35674,Li=35675,Ri=35676,zi=35678,Bi=35680,Vi=35679,Hi=35682,Ui=35685,Wi=35686,Gi=35687,Ki=35688,qi=35689,Ji=35690,Yi=36289,Xi=36292,Zi=36293,Qi=5125,$i=36294,ea=36295,ta=36296,na=36298,ra=36299,ia=36300,aa=36303,oa=36306,sa=36307,ca=36308,la=36311,ua=3553,da=34067,fa=32879,pa=35866,H={};function ma(e,t){return H[t].bindPoint}function ha(e,t){return function(n){e.uniform1f(t,n)}}function ga(e,t){return function(n){e.uniform1fv(t,n)}}function _a(e,t){return function(n){e.uniform2fv(t,n)}}function va(e,t){return function(n){e.uniform3fv(t,n)}}function ya(e,t){return function(n){e.uniform4fv(t,n)}}function ba(e,t){return function(n){e.uniform1i(t,n)}}function xa(e,t){return function(n){e.uniform1iv(t,n)}}function Sa(e,t){return function(n){e.uniform2iv(t,n)}}function Ca(e,t){return function(n){e.uniform3iv(t,n)}}function wa(e,t){return function(n){e.uniform4iv(t,n)}}function Ta(e,t){return function(n){e.uniform1ui(t,n)}}function Ea(e,t){return function(n){e.uniform1uiv(t,n)}}function Da(e,t){return function(n){e.uniform2uiv(t,n)}}function Oa(e,t){return function(n){e.uniform3uiv(t,n)}}function ka(e,t){return function(n){e.uniform4uiv(t,n)}}function Aa(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function ja(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function Ma(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Na(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function Pa(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function Fa(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function Ia(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function La(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function Ra(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function U(e,t,n,r){let i=ma(e,t);return Pt(e)?function(t){let a,o;it(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(di+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(di+n),e.bindTexture(i,t)}}function W(e,t,n,r,i){let a=ma(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return Pt(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(di+o[r]);let i,s;it(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(di+o[n]),e.bindTexture(a,t)})}}H[wi]={Type:Float32Array,size:4,setter:ha,arraySetter:ga},H[Ti]={Type:Float32Array,size:8,setter:_a,cols:2},H[Ei]={Type:Float32Array,size:12,setter:va,cols:3},H[Di]={Type:Float32Array,size:16,setter:ya,cols:4},H[Oi]={Type:Int32Array,size:4,setter:ba,arraySetter:xa},H[ki]={Type:Int32Array,size:8,setter:Sa,cols:2},H[Ai]={Type:Int32Array,size:12,setter:Ca,cols:3},H[ji]={Type:Int32Array,size:16,setter:wa,cols:4},H[Qi]={Type:Uint32Array,size:4,setter:Ta,arraySetter:Ea},H[$i]={Type:Uint32Array,size:8,setter:Da,cols:2},H[ea]={Type:Uint32Array,size:12,setter:Oa,cols:3},H[ta]={Type:Uint32Array,size:16,setter:ka,cols:4},H[Mi]={Type:Uint32Array,size:4,setter:ba,arraySetter:xa},H[Ni]={Type:Uint32Array,size:8,setter:Sa,cols:2},H[Pi]={Type:Uint32Array,size:12,setter:Ca,cols:3},H[Fi]={Type:Uint32Array,size:16,setter:wa,cols:4},H[Ii]={Type:Float32Array,size:32,setter:Aa,rows:2,cols:2},H[Li]={Type:Float32Array,size:48,setter:ja,rows:3,cols:3},H[Ri]={Type:Float32Array,size:64,setter:Ma,rows:4,cols:4},H[Ui]={Type:Float32Array,size:32,setter:Na,rows:2,cols:3},H[Wi]={Type:Float32Array,size:32,setter:Fa,rows:2,cols:4},H[Gi]={Type:Float32Array,size:48,setter:Pa,rows:3,cols:2},H[Ki]={Type:Float32Array,size:48,setter:La,rows:3,cols:4},H[qi]={Type:Float32Array,size:64,setter:Ia,rows:4,cols:2},H[Ji]={Type:Float32Array,size:64,setter:Ra,rows:4,cols:3},H[zi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[Bi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[Vi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[Hi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[Yi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:pa},H[Xi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:pa},H[Zi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[na]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[ra]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[ia]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[aa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:pa},H[oa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[sa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[ca]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[la]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:pa};function za(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(pi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||wi,n.normalize||!1,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function G(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`);else e.bindBuffer(pi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Oi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function Ba(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`);else e.bindBuffer(pi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Qi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function Va(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(pi,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||wi,c=H[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),n.divisor!==void 0&&e.vertexAttribDivisor(t+r,n.divisor)}}var K={};K[wi]={size:4,setter:za},K[Ti]={size:8,setter:za},K[Ei]={size:12,setter:za},K[Di]={size:16,setter:za},K[Oi]={size:4,setter:G},K[ki]={size:8,setter:G},K[Ai]={size:12,setter:G},K[ji]={size:16,setter:G},K[Qi]={size:4,setter:Ba},K[$i]={size:8,setter:Ba},K[ea]={size:12,setter:Ba},K[ta]={size:16,setter:Ba},K[Mi]={size:4,setter:G},K[Ni]={size:8,setter:G},K[Pi]={size:12,setter:G},K[Fi]={size:16,setter:G},K[Ii]={size:4,setter:Va,count:2},K[Li]={size:9,setter:Va,count:3},K[Ri]={size:16,setter:Va,count:4};function Ha(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}var Ua=/(\.|\[|]|\w+)/g,Wa=e=>e>=`0`&&e<=`9`;function Ga(e,t,n,r){let i=e.split(Ua).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Wa(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}else{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){ro(e,t)}}(s),o+=e}}}function Ka(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=H[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,gi);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(Ha(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Ga(s,e,a,i)}}return i}function qa(e,t){let n={},r=e.getProgramParameter(t,vi);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function Ja(e,t){let n=e.getProgramParameter(t,gi),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,yi);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,bi),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,xi),size:e.getActiveUniformBlockParameter(t,n,Si),uniformIndices:e.getActiveUniformBlockParameter(t,n,Ci)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}var Ya=/\[\d+\]\.$/,Xa=(e,t)=>((e+(t-1))/t|0)*t;function Za(e,t,n,r){if(t||n){r||=1;let t=e.length/4;return function(n){let i=0,a=0;for(let o=0;o<t;++o){for(let t=0;t<r;++t)e[i++]=n[a++];i+=4-r}}}else return function(t){t.length?e.set(t):e[0]=t}}function Qa(e,t,n,r){let i=n.blockSpecs,a=n.uniformData,o=i[r];if(!o)return ui(`no uniform block object named:`,r),{name:r,uniforms:{}};let s=new ArrayBuffer(o.size),c=e.createBuffer(),l=o.index;e.bindBuffer(hi,c),e.uniformBlockBinding(t,o.index,l);let u=r+`.`;Ya.test(u)&&(u=u.replace(Ya,`.`));let d={},f={},p={};return o.uniformIndices.forEach(function(e){let t=a[e],n=t.name;n.startsWith(u)&&(n=n.substr(u.length));let r=n.endsWith(`[0]`);r&&(n=n.substr(0,n.length-3));let i=H[t.type],o=i.Type,c=r?Xa(i.size,16)*t.size:i.size*t.size,l=new o(s,t.offset,c/o.BYTES_PER_ELEMENT);d[n]=l;let m=Za(l,r,i.rows,i.cols);f[n]=m,Ga(n,m,p,f)}),{name:r,array:s,asFloat:new Float32Array(s),buffer:c,uniforms:d,setters:f}}function $a(e,t,n){return Qa(e,t.program,t.uniformBlockSpec,n)}function eo(e,t,n){let r=(t.uniformBlockSpec||t).blockSpecs[n.name];if(r){let t=r.index;return e.bindBufferRange(hi,t,n.buffer,n.offset||0,n.array.byteLength),!0}return!1}function to(e,t,n){eo(e,t,n)&&e.bufferData(hi,n.array,fi)}function no(e,t){let n=e.setters;for(let e in t){let r=n[e];if(r){let n=t[e];r(n)}}}function ro(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):ro(e[n],t[n])}}function q(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)q(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function io(e,t){let n={},r=e.getProgramParameter(t,_i);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(Ha(r))continue;let a=e.getAttribLocation(t,r.name),o=K[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function ao(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function J(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(ao(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(mi,n.indices))}function oo(e,t){let n={program:t,uniformSetters:Ka(e,t),attribSetters:io(e,t)};return Pt(e)&&(n.uniformBlockSpec=Ja(e,t),n.transformFeedbackInfo=qa(e,t)),n}var so=4,co=5123;function lo(e,t,n,r,i,a){n=n===void 0?so:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?co:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?co:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var uo=36160,Y=36161,fo=3553,po=5121,mo=6402,ho=6408,go=33190,_o=36012,vo=35056,yo=36013,bo=32854,xo=32855,So=36194,Co=33189,wo=6401,To=36168,Eo=34041,Do=36064,Oo=36096,ko=36128,Ao=33306,jo=33071,Mo=9729,No=[{format:ho,type:po,min:Mo,wrap:jo},{format:Eo}],X={};X[Eo]=Ao,X[wo]=ko,X[To]=ko,X[mo]=Oo,X[Co]=Oo,X[go]=Oo,X[_o]=Oo,X[vo]=Ao,X[yo]=Ao;function Po(e,t){return X[e]||X[t]}var Z={};Z[bo]=!0,Z[xo]=!0,Z[So]=!0,Z[Eo]=!0,Z[Co]=!0,Z[wo]=!0,Z[To]=!0;function Fo(e){return Z[e]}function Io(e){return e>=Do&&e<36096}function Lo(e,t,n,r){let i=uo,a=e.createFramebuffer();e.bindFramebuffer(i,a),n||=e.drawingBufferWidth,r||=e.drawingBufferHeight,t||=No;let o=[],s={framebuffer:a,attachments:[],width:n,height:r};return t.forEach(function(t,a){let c=t.attachment,l=t.samples,u=t.format,d=t.attachmentPoint||Po(u,t.internalFormat);if(d||=Do+a,Io(d)&&o.push(d),!c)if(l!==void 0||Fo(u))c=e.createRenderbuffer(),e.bindRenderbuffer(Y,c),l>1?e.renderbufferStorageMultisample(Y,l,u,n,r):e.renderbufferStorage(Y,u,n,r);else{let i=Object.assign({},t);i.width=n,i.height=r,i.auto===void 0&&(i.auto=!1,i.min=i.min||i.minMag||Mo,i.mag=i.mag||i.minMag||Mo,i.wrapS=i.wrapS||i.wrap||jo,i.wrapT=i.wrapT||i.wrap||jo),c=ci(e,i)}if(rt(e,c))e.framebufferRenderbuffer(i,d,Y,c);else if(it(e,c))t.layer===void 0?e.framebufferTexture2D(i,d,t.target||fo,c,t.level||0):e.framebufferTextureLayer(i,d,c,t.level||0,t.layer);else throw Error(`unknown attachment type`);s.attachments.push(c)}),e.drawBuffers&&e.drawBuffers(o),s}function Ro(e,t,n,r,i){r||=e.drawingBufferWidth,i||=e.drawingBufferHeight,t.width=r,t.height=i,n||=No,n.forEach(function(n,a){let o=t.attachments[a],s=n.format,c=n.samples;if(c!==void 0||rt(e,o))e.bindRenderbuffer(Y,o),c>1?e.renderbufferStorageMultisample(Y,c,s,r,i):e.renderbufferStorage(Y,s,r,i);else if(it(e,o))li(e,o,n,r,i);else throw Error(`unknown attachment type`)})}function zo(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),t.length||(t=[t]),t.forEach(function(t){J(e,t,n)}),e.bindVertexArray(null),{numElements:n.numElements,elementType:n.elementType,vertexArrayObject:r}}var Bo={addExtensionsToContext:!0},Vo=/^(.*?)_/;function Ho(e,t){Ft(e,0);let n=e.getExtension(t);if(n){let r={},i=Vo.exec(t)[1],a=`_`+i;for(let t in n){let o=n[t],s=typeof o==`function`,c=s?i:a,l=t;t.endsWith(c)&&(l=t.substring(0,t.length-c.length)),e[l]===void 0?s?e[l]=function(e){return function(){return e.apply(n,arguments)}}(o):(e[l]=o,r[l]=o):!s&&e[l]!==o&&tt(l,e[l],o,t)}r.constructor={name:n.constructor.name},Ft(r,0)}return n}var Uo=[`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_float`,`EXT_color_buffer_half_float`,`EXT_disjoint_timer_query`,`EXT_disjoint_timer_query_webgl2`,`EXT_frag_depth`,`EXT_sRGB`,`EXT_shader_texture_lod`,`EXT_texture_filter_anisotropic`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_atc`,`WEBGL_compressed_texture_etc1`,`WEBGL_compressed_texture_pvrtc`,`WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_depth_texture`,`WEBGL_draw_buffers`];function Wo(e){for(let t=0;t<Uo.length;++t)Ho(e,Uo[t])}function Go(e,t){let n=[`webgl2`,`webgl`,`experimental-webgl`],r=null;for(let i=0;i<n.length;++i)if(r=e.getContext(n[i],t),r){Bo.addExtensionsToContext&&Wo(r);break}return r}function Ko(e,t){return Go(e,t)}function qo(e,t,n,r,o=!1){let s=p(e)?e:e.name,c=!p(e)&&e.extent||[0,1];if(n===void 0&&!p(e)&&(n=e.count),s){let e=fe(s);if(i(e)){let i=Zo(e,{extent:c,count:n,reverse:o});return Ks(t,{minMag:t.LINEAR,format:t.RGB,height:1,wrap:t.CLAMP_TO_EDGE},i,r)}else if(a(e))return Xo(o?Array.from(e).reverse():e,t,n,r);else throw Error(`Unknown scheme: `+s)}}function Jo(e,t=`rgb`,n,r){let i=Zo(pe(e,p(t)?t:t.type,p(t)?void 0:t.gamma));return Ks(n,{minMag:n.LINEAR,format:n.RGB,height:1,wrap:n.CLAMP_TO_EDGE},i,r)}function Yo(e,t,n,r){let i=Math.max(e.length,n||0),a=new Float32Array(i);for(let t=0;t<i;t++)a[t]=e[t%e.length];return Ks(t,{minMag:t.NEAREST,format:t.RED,internalFormat:t.R32F,height:1},a,r)}function Xo(e,t,n,r){let i=Qo(e,n);return Ks(t,{minMag:t.NEAREST,format:t.RGB,height:1},i,r)}function Zo(e,{extent:t=[0,1],reverse:n=!1,count:r=256}={}){let i=t[0],a=_(t)-i,o=de(r).map(e=>e/(r-1)).map(e=>i+e/a).map(e);return n&&o.reverse(),Qo(o)}function Qo(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*3);for(let t=0;t<n;t++){let n=e[t%e.length],i=g(n);if(!i)throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);let a=i.rgb();r[t*3+0]=a.r,r[t*3+1]=a.g,r[t*3+2]=a.b}return r}function $o(e){let t=g(e).rgb();return[t.r,t.g,t.b].map(e=>e/255)}var es=`attr_`,ts=`uDomain_`,ns=`range_`,rs=`accessor_`,is=`scale_`,as=`getScaled_`,os=`uRangeTexture_`,ss=`uParam_`,cs=`isSelectionMember_`,ls=`isSelectionEmpty_`;function us(e){let t=e.match(/^(?:(\w+)-)?(\w+)$/);if(!t)throw Error(`Not a scale type: `+e);return{family:t[1]||`continuous`,transform:t[2]}}function ds(e){return e.type===`quantize`?e.thresholds():e.domain()}function fs(e){return e.type===`quantize`?e.range().length:e.type===`threshold`?e.domain().length+1:e.domain().length}function ps(e,t){return`${rs}${e}_${t}`}function ms(e,t,n){let r;if(b(e))r=Q(ae(e)(n));else if(p(n))if(v(e))r=ws(n);else throw Error(`String values are not supported on the "${e}" channel: ${n}`);else if(ie(n))r=Q(+!!n);else if(n===null)if(v(e))r=Q([0,0,0]);else throw Error(`null value is not supported on the "${e}" chanel.`);else r=Q(n);let i=ps(e,t);return{channel:e,accessorGlsl:`
${r.type} ${i}() {
    // Constant value
    return ${r};
}`,accessorFunctionName:i}}function hs(e,t){let n=`float`,r=e=>e;v(e)?(n=`vec3`,r=e=>$o(e)):b(e)&&(r=ae(e));let i=`u${Ns(e)}_${t}`,a=`    // Dynamic value\n    uniform ${n} ${i};`,o=ps(e,t);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${n} ${o}() {
    // Dynamic value
    return ${i};
}`,accessorFunctionName:o,adjuster:r}}function gs(e,t,n,r=[e]){let{attributeType:i}=$(t,e),a=Ms(r),o=`in highp ${i} ${a};`,s=ps(e,n);return{channel:e,attributeName:a,attributeGlsl:o,accessorGlsl:`
${i} ${s}() {
    return ${a};
}`,accessorFunctionName:s}}function _s(e,t,n){let{attributeType:r}=$(t,e),i=Ms(e),a=`    uniform highp ${r} ${i};`,o=ps(e,n);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${r} ${o}() {
    return ${i};
}`,accessorFunctionName:o}}function vs(e,t,n){t??=ge();let r=se(e),i=ts+r,a=ns+r,{hp:o,attributeType:s}=$(t,e),c=t.domain?S(t.type)?ds(t).length:t.domain().length:void 0,l,u=[];u.push(``),u.push(`/`.repeat(70)),u.push(`// Channel: ${e}`),u.push(``);let{transform:d}=us(t.type),p=(e,...t)=>Es.apply(null,[e,`value`,...t]),m;switch(d){case`linear`:m=p(`scaleLinear`,`domain`,a);break;case`log`:m=p(`scaleLog`,`domain`,a,t.base());break;case`symlog`:m=p(`scaleSymlog`,`domain`,a,t.constant());break;case`pow`:case`sqrt`:m=p(`scalePow`,`domain`,a,t.exponent());break;case`index`:case`locus`:m=p(`scaleBandHp`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`point`:case`band`:m=p(`scaleBand`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`ordinal`:case`null`:case`identity`:m=p(`scaleIdentity`);break;case`threshold`:case`quantize`:break;default:throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`)}let g=Ps(t,e),_;if(g&&e==r){let e=t.props.range??[];if(h(e)||e.some(h)){if(g.length<1||g.length>4)throw Error(`A range with ExprRefs must have 1-4 elements, not ${g.length}! Range: ${JSON.stringify(g)}`);_=`    uniform ${Ss(g.length)} ${a};`}else if(g.length&&g.every(f)){let e=Ts(g);u.push(`const ${e.type} ${a} = ${e};`)}}let ee=Cs(e),te;if(v(e)){let n=os+r;if(e==r&&u.push(`uniform sampler2D ${n};`),C(t.type))te=`getInterpolatedColor(${n}, transformed)`;else if(he(t.type)||S(t.type))te=`getDiscreteColor(${n}, int(transformed))`;else throw Error(`Problem with color scale!`)}else if(t.type===`ordinal`||S(t.type)){let t=os+r;e==r&&u.push(`uniform sampler2D ${t};`),te=`getDiscreteColor(${t}, int(transformed)).r`}let y=[],b=C(t.type)&&c>2,ne=S(t.type)||b;if(y.push(`int slot = 0;`),ne){let e=i;y.push(b?`while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }`:`while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`)}let x=C(t.type)||S(t.type)||[`band`,`point`].includes(t.type);if(m){let e=i;x&&(o?y.push(`vec3 domain = ${e};`):y.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)),y.push(`float transformed = ${m};`),b&&y.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`)}else y.push(`float transformed = float(slot);`);`clamp`in t&&t.clamp()&&y.push(`transformed = clampToRange(transformed, ${Ts(g)});`),y.push(`return ${te??`transformed`};`),u.push(`
${ee} ${is}${e}(${s} value) {
${y.map(e=>`    ${e}\n`).join(``)}
}`);let re=u.join(`
`);if(x&&e==r){let e=C(t.type)||S(t.type)?c:2;l=o?`    highp vec3 ${i};`:`    mediump float ${i}[${e}];`}return{glsl:re,domainUniformName:i,domainUniform:l,rangeUniformName:a,rangeUniform:_}}function ys(e,t,n){let r=Cs(e),i=[],a=[];for(let r=0;r<t.length;r++){let{accessor:o,predicate:s}=t[r],c=ps(e,r),{selection:l}=s;i.push(l?bs(l,n):null),a.push(o.scaleChannel?`return ${is}${e}(${c}());`:`return ${c}();`)}return`${r} ${as}${e}() {
${Fs(i,a)}
}

#define ${e}_DEFINED`}function bs(e,t){return`all`in e?`(${e.all.map(e=>bs(e,t)).join(` && `)})`:`any`in e?`(${e.any.map(e=>bs(e,t)).join(` || `)})`:`not`in e?`(!${bs(e.not,t)})`:`selectionActive`in e?`(!${ls}${e.selectionActive.param}())`:t?.(e)??`isSelectionMember_${e.param}() || (${e.empty} && isSelectionEmpty_${e.param}())`}function xs(e){if(!f(e))throw Error(`Not a number: ${e}`);if(e==1/0)return`3.402823466e+38`;if(e==-1/0)return`-3.402823466e+38`;{let t=`${e}`;return/^(-)?\d+$/.test(t)&&(t+=`.0`),t}}function Q(e){typeof e==`number`&&(e=[e]);let t=e.length;if(t<1||t>4)throw Error(`Invalid number of components: `+t);let n=Ss(t),r=`${n}(${e.map(xs).join(`, `)})`;return Object.assign(r,{type:n,numComponents:t})}function Ss(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`Invalid number of components: `+e)}}function Cs(e){return v(e)?`vec3`:e==`uniqueId`?`uint`:`float`}function ws(e){return Q($o(e))}function Ts(e){return Q([e[0],_(e)])}function Es(e,...t){let n=[];for(let e of t)f(e)?n.push(xs(e)):a(e)?n.push(Q(e)):n.push(e);return`${e}(${n.join(`, `)})`}function $(e,t){let n=e&&he(e.type),r=e&&be(e.type),i=r&&ye(e.domain()),a=i?{attributeType:`uvec2`,arrayConstructor:Uint32Array}:r?{attributeType:`uint`,arrayConstructor:Uint32Array}:n?{attributeType:`uint`,arrayConstructor:Uint16Array}:t==`uniqueId`?{attributeType:`uint`,arrayConstructor:Uint32Array}:{attributeType:`float`,arrayConstructor:Float32Array};return Object.assign(a,{numComponents:+(a.attributeType.match(/^(?:u)?vec([234])$/)?.[1]??1),discrete:n,hp:r,largeHp:i})}var Ds=2**12;Ds-1;function Os(e,t=[]){let n=e%Ds;return t[0]=(e-n)/Ds,t[1]=n,t}function ks(e){let t=e%Ds;return[e-t,t]}function As(e){return[...ks(e[0]),e[1]-e[0]]}function js(e){let t=new l([],JSON.stringify);for(let[n,r]of Object.entries(e)){let e=r.channelDef;if(ee(e)){let i=[e.field,r.scale?(C(r.scale.type)||S(r.scale.type))??!1:!1];t.set(i,[...t.get(i)??[],n])}}return t}function Ms(e){return es+le(e).toSorted().join(`_`)}function Ns(e){return e[0].toUpperCase()+e.slice(1)}var Ps=(e,t)=>me(e.type)||C(e.type)&&v(t)?[0,1]:e.range?e.range():void 0;function Fs(e,t){if(e.length!=t.length)throw Error(`Unequal array lengths`);let n=e.length;if(n==0)return``;if(n==1&&e[0]==null)return t[0];let r=[];for(let i=0;i<n;i++){let a=e[i],o=i==0?`if (${a})`:a==null&&i==n-1?`else`:`else if (${a})`;r.push(`    ${o} {
        ${t[i]}
    }`)}return r.join(`
`)}var Is=4294967295,Ls=4294967295;function Rs(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function zs(e,t={}){let n=Array.from(e,e=>Vs(e,`key`)),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??Hs(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a);o.fill(Is);let s=a-1;for(let e of n){if(e===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let t=Rs(e)&s,n=!1;for(let r=0;r<a;r+=1){let r=o[t];if(r===4294967295||r===e){o[t]=e,n=!0;break}t=t+1&s}if(!n)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Bs(e,t){if(!Number.isSafeInteger(e)||e<1)throw Error(`capacity must be a positive integer.`);if(e&e-1)throw Error(`capacity must be a power of two.`);if(!Number.isSafeInteger(t)||t<1)throw Error(`maxTextureSize must be a positive integer.`);if(e>t*t)throw Error(`Selection hash table exceeds maximum texture capacity.`);let n=1<<Math.floor(Math.log2(t)),r=Math.min(e,n),i=e/r;if(i>t)throw Error(`Selection hash table dimensions exceed maximum texture size.`);return{width:r,height:i}}function Vs(e,t){if(!Number.isSafeInteger(e)||e<0||e>Ls)throw Error(t+` must be a non-negative u32.`);return e>>>0}function Hs(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var Us=class{#e=!1;#t=()=>{};_ownedTextures=new Set;_placementDisposers=new Set;constructor(e,t,n={},r){let i=t??(()=>({width:void 0,height:void 0}));this._canvasSizeHelper=void 0,this._appliedCanvasSize=void 0,this._onCanvasResize=r??(()=>{}),this._shaderCache=new Map,this.rangeTextures=new WeakMap,this.placementTextures=new WeakMap,this.selectionTextures=new WeakMap;let a=document.createElement(`canvas`),o=Ko(a,{antialias:!0,depth:!1,premultipliedAlpha:!0,...n});if(!o)throw Error(`Unable to initialize WebGL. Your browser or machine may not support it.`);if(!Pt(o))throw Error(`Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.`);Wo(o);let s=o.getExtension(`WEBGL_provoking_vertex`);s&&s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),this.canvas=a,this.gl=o,this._pickingAttachmentOptions=[{format:o.RGBA,type:o.UNSIGNED_BYTE,minMag:o.LINEAR,wrap:o.CLAMP_TO_EDGE}],this._pickingBufferInfo=Lo(o,this._pickingAttachmentOptions),o.bindFramebuffer(o.FRAMEBUFFER,null),e.appendChild(a);try{this._canvasSizeHelper=new Oe(e,a,i,()=>{this.adjustGl()&&this._onCanvasResize()}),this.adjustGl()}catch(e){throw this._canvasSizeHelper?.finalize(),a.remove(),e}}getPlacementTexture(e){let t=e.getSnapshot(),n=this.placementTextures.get(e);if(n?.geometryRevision===t.geometryRevision)return n.texture;let r=n?.data.length===t.rectangles.length/2?n.data:new Float32Array(t.rectangles.length/2);for(let e=0;e<t.rectangles.length/4;e++)r[e*2]=t.rectangles[e*4+1],r[e*2+1]=t.rectangles[e*4+3];let i=Ks(this.gl,{internalFormat:this.gl.RG32F,format:this.gl.RG,height:1},r,n?.texture);if(this.placementTextures.set(e,{texture:i,geometryRevision:t.geometryRevision,data:r}),this._ownedTextures.add(i),!n){let t;t=e.onDispose(()=>{this._placementDisposers.delete(t);let n=this.placementTextures.get(e);n&&(this._ownedTextures.delete(n.texture)&&this.gl.deleteTexture(n.texture),this.placementTextures.delete(e))}),this._placementDisposers.add(t)}return i}invalidateSize(){return this._canvasSizeHelper.invalidate(),this.adjustGl()}compileShader(e,t){a(t)&&(t=t.join(`

`));let n=this.gl,r=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,``),i=this._shaderCache.get(r);if(!i){let a=[`#version 300 es`,`precision mediump float;`,t].join(`

`);i=n.createShader(e),n.shaderSource(i,a),n.compileShader(i),this._shaderCache.set(r,i)}return i}adjustGl(){let e=this.getLogicalCanvasSize(),t=this.getPhysicalCanvasSize(e);return this._appliedCanvasSize&&this._appliedCanvasSize.logicalWidth==e.width&&this._appliedCanvasSize.logicalHeight==e.height&&this._appliedCanvasSize.physicalWidth==t.width&&this._appliedCanvasSize.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,Ro(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions),this._appliedCanvasSize={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},!0)}finalize(){if(!this.#e){this.#e=!0,this.#t();for(let e of this._placementDisposers)e();this._placementDisposers.clear();for(let e of this._ownedTextures)this.gl.deleteTexture(e);this._ownedTextures.clear();for(let e of this._shaderCache.values())this.gl.deleteShader(e);this._shaderCache.clear();for(let e of this._pickingBufferInfo.attachments)this.gl.deleteTexture(e);this.gl.deleteFramebuffer(this._pickingBufferInfo.framebuffer),this._canvasSizeHelper.finalize(),this.canvas.remove()}}setResourceFinalizer(e){this.#t=e}getPhysicalCanvasSize(e){return this._canvasSizeHelper.getPhysicalCanvasSize(e)}getDevicePixelRatio(e){return this._canvasSizeHelper.getDevicePixelRatio(e)}getLogicalCanvasSize(){return this._canvasSizeHelper.getLogicalCanvasSize()}createRangeTexture(e,t=!1){let n=this.rangeTextures.get(e.getScale());if(!t&&n)return;function r(e,t){return he(t.type)?t.domain().length:t.type==`threshold`||t.type==`quantize`?fs(t):t.type==`quantile`?e??4:e}let i=e.channel;if(v(i)){let t=e.getScale(),i=t.props,a=t.range(),o;if(i.scheme)if(he(t.type)||S(t.type))o=Xo(a,this.gl,fs(t),n);else{let e=p(i.scheme)?void 0:i.scheme.count;e=r(e,t),o=qo(i.scheme,this.gl,e,n,!!i.reverse)}else o=me(t.type)||C(t.type)&&a.length>1?Jo(a,i.interpolate,this.gl,n):Xo(a,this.gl,S(t.type)?fs(t):t.domain().length,n);this.rangeTextures.set(t,o),this._ownedTextures.add(o)}else{let t=e.getScale();if(t.type===`ordinal`||S(t.type)){let e=b(i)?ae(i):e=>e,r=Yo(t.range().map(e),this.gl,S(t.type)?fs(t):t.domain().length,n);this.rangeTextures.set(t,r),this._ownedTextures.add(r)}}}createSelectionTexture(e,t=!0){if(!c(e))throw Error(`Not a multi-point selection, cannot create texture`);let{table:n,capacity:r}=zs(e.data.keys()),{width:i,height:a}=Bs(r,this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),o=this.selectionTextures.get(e),s=this.gl,l=Ks(this.gl,{auto:!1,level:0,min:s.NEAREST,mag:s.NEAREST,format:s.RED_INTEGER,internalFormat:s.R32UI,width:i,height:a},n,t?o:!1);s.bindTexture(s.TEXTURE_2D,l),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_BASE_LEVEL,0),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAX_LEVEL,0),s.bindTexture(s.TEXTURE_2D,null),this.selectionTextures.set(e,l),this._ownedTextures.add(l)}};function Ws(e,t=``,n=0){let r=[...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Gs(e,t,n){let r=e.createProgram();e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);function i(){let i,a;if(!e.getProgramParameter(r,e.LINK_STATUS)){i=e.getProgramInfoLog(r);for(let r of[t,n])e.getShaderParameter(r,e.COMPILE_STATUS)||(i=e.getShaderInfoLog(r),a=Ws(e.getShaderSource(r),i,0)+`\nError compiling: ${i}`,e.deleteShader(r));e.deleteProgram(r)}if(i)return{message:i,detail:a}}return{program:r,getProgramErrors:i}}function Ks(e,t,n,r){return r?oi(e,r,n,t):r=ci(e,{...t,src:n}),r}function qs(e,t,n,r){let{height:i,framebuffer:a}=t,o=new Uint8Array(4);return e.bindFramebuffer(e.FRAMEBUFFER,a),e.readPixels(n,i-r-1,1,1,e.RGBA,e.UNSIGNED_BYTE,o),e.bindFramebuffer(e.FRAMEBUFFER,null),o}var Js=class extends we{#e=[0,0,0,0];#t;#n=[];#r;#i;#a;#o=new Set;#s=new Set;#c;#l=void 0;#u=1;#d={width:0,height:0};#f;constructor(e,t){if(super(e),this.#i=t.webGLHelper,this.#a=t.markAdapter,this.#r=t.framebufferInfo,this.#u=t.devicePixelRatio,this.#d=t.canvasSize,this.#c=t.markPredicate??(()=>!0),this.#f=t.pixelOffset,t.clearColor){let e=g(t.clearColor).rgb();this.#e=[e.r/255,e.g/255,e.b/255,e.opacity]}}getDevicePixelRatio(){return this.#u}pushView(e,t){this.#s.add(e),this.#l=t}renderMark(e,t){if(!this.#c(e)||this.globalOptions.picking&&!e.isPickingParticipant())return;let n=x(t);this.#n.push({mark:e,options:t,coords:this.#l,placement:t.placement,clip:oe(n,e.properties.clip,this.#l),cullClip:n})}render(){if(this.finish(),this.#a.synchronize(this.#o),this.#t.length==0)return;let e=this.#i.gl,t=this.#r;t?(e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.viewport(0,0,t.width,t.height)):e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.SCISSOR_TEST),e.clearColor(...this.#e),e.clear(e.COLOR_BUFFER_BIT);for(let e of this.#s)e.onBeforeRender();for(let e of this.#t)e();this.#r&&e.bindFramebuffer(e.FRAMEBUFFER,null)}finish(){if(!this.#t){let e=this.#n.map(e=>e.mark);this.#a.prepareMarks(e),this.#a.synchronize(e.map(e=>this.#a.getMarkEntry(e)).filter(e=>e)),this.#p()}}#p(){this.#t=[];let e=!0,t=!0,n=!1,r=t=>()=>{e&&t()},i=n=>()=>{e&&t&&n()},a=_e(this.#n.reverse(),e=>e.mark);for(let[o,s]of[...a.entries()].reverse()){let a=this.#a.getMarkEntry(o);if(!a)continue;let c=a.graphics;if(!this.#a.isEntryDrawable(a))continue;this.#o.add(a);let l=o.getOrder?.(),u=s.map(e=>({...e,callback:c.render(l?{...e.options,orderPass:`all`}:e.options),orderCallbacks:l&&!this.globalOptions.picking?l.passes.map((t,n)=>c.render({...e.options,orderPass:t,secondOrderPass:n===1})):void 0})).filter(e=>e.callback);if(u.length==0)continue;let d=u[0].placement,f=d?{...this.globalOptions,placement:d}:this.globalOptions,p=c.prepareRender(f).map(e=>r(e));this.#t.push(()=>{e=this.#a.isEntryDrawable(a)&&o.unitView.getEffectiveOpacity()>0,t=!0,n=!!l&&!this.globalOptions.picking&&l.isActive()}),this.#t.push(...p);let m,h,g;for(let e of u){let a=e.coords;(!a.equals(m)||!ne(e.clip,h)||!ne(e.cullClip,g))&&this.#t.push(r(()=>{t=c.setViewport(this.#d,this.#u,a,e.clip,e.cullClip,this.#f)}));let{callback:o,orderCallbacks:s}=e,l=s?()=>{if(n)for(let e of s)e();else o()}:o;this.#t.push(i(l)),m=e.coords,h=e.clip,g=e.cullClip}}}},Ys=class extends we{constructor(...e){super({}),this.contexts=e}beginSampleFacetBatch(){for(let e of this.contexts)e.beginSampleFacetBatch()}endSampleFacetBatch(){for(let e of this.contexts)e.endSampleFacetBatch()}pushView(e,t){for(let n of this.contexts)n.pushView(e,t)}popView(e){for(let t of this.contexts)t.popView(e)}renderMark(e,t){for(let n of this.contexts)n.renderMark(e,t)}},Xs=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;constructor({viewRoot:e,glHelper:t,markAdapter:n,getBackground:r,broadcast:i,onLayoutComputed:a}){this.#e=e,this.#t=t,this.#n=n,this.#r=r,this.#i=i,this.#a=a,this.#o=void 0,this.#s=void 0,this.#c=!1}computeLayout(){if(!this.#e)return;this.#i(`layout`),this.#t.invalidateSize();let e=5;for(;;){let t=this.#l();if(!t)return;if(!this.#t.invalidateSize()){this.#u(t),this.#a(),this.#i(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}#l(){let e=this.#e,t=this.#t.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height))return console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`),!1;let n=this.#t.getDevicePixelRatio(t);return{layoutResult:De(`layout`,()=>Te(e,Ce.create(0,0,t.width,t.height),{devicePixelRatio:n})),canvasSize:t,devicePixelRatio:n}}#u({layoutResult:e,canvasSize:t,devicePixelRatio:n}){let r={webGLHelper:this.#t,markAdapter:this.#n,canvasSize:t,devicePixelRatio:n},i=new Js({picking:!1},{...r,clearColor:this.#r()}),a=new Js({picking:!0},{...r,framebufferInfo:this.#t._pickingBufferInfo});De(`layoutReplay`,()=>e.collectRenderCommands(new Ys(i,a))),i.finish(),a.finish(),this.#o=i,this.#s=a}renderAll(){let e=Ee();e?.beginFrame(`webgl`),De(`render`,()=>this.#o?.render()),this.#c=!0,e?.endFrame()}renderPickingFramebuffer(){if(!this.#c)return;let e=Ee();e?.beginFrame(`webgl`,`picking`),De(`picking`,()=>this.#s.render()),this.#c=!1,e?.endFrame()}};function Zs(e,t,n={}){let r=n.x??0,i=n.y??0,a=n.width??t.width,o=n.height??t.height;nc(t,r,i,a,o);let s=new Uint8Array(a*o*4);e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer);try{e.readPixels(r,t.height-i-o,a,o,e.RGBA,e.UNSIGNED_BYTE,s)}finally{e.bindFramebuffer(e.FRAMEBUFFER,null)}return{pixels:tc(s,a,o,n.unpremultiplyAlpha??!1),width:a,height:o}}function Qs(e,t,n=`image/png`,r={}){return ec(e,t,r).toDataURL(n)}function $s(e,t,n=`image/png`,r={}){let i=ec(e,t,r);return new Promise((e,t)=>{i.toBlob(r=>{r?e(r):t(Error(`Could not encode framebuffer as ${n}.`))},n)})}function ec(e,t,n){let{pixels:r,width:i,height:a}=Zs(e,t,n),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=s.createImageData(i,a);return c.data.set(r),s.putImageData(c,0,0),o}function tc(e,t,n,r){let i=new Uint8ClampedArray(e.length),a=t*4;for(let t=0;t<n;t++){let r=(n-t-1)*a,o=t*a;i.set(e.subarray(r,r+a),o)}if(r)for(let e=0;e<i.length;e+=4){let t=i[e+3];if(t==0)i[e]=0,i[e+1]=0,i[e+2]=0;else if(t<255){let n=255/t;i[e]=Math.round(i[e]*n),i[e+1]=Math.round(i[e+1]*n),i[e+2]=Math.round(i[e+2]*n)}}return i}function nc(e,t,n,r,i){if(![t,n,r,i].every(Number.isInteger))throw RangeError(`Framebuffer readback bounds must be integers.`);if(t<0||n<0||r<=0||i<=0||t+r>e.width||n+i>e.height)throw RangeError(`Framebuffer readback bounds are out of range.`)}function rc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,devicePixelRatio:a,clearColor:o=`white`}){let{gl:s,framebufferInfo:c}=ac({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return Qs(s,c,`image/png`)}finally{oc(s,c)}}async function ic({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o=`white`,mimeType:s=`image/png`}){if(s!=`image/png`)throw Error(`Unsupported raster export MIME type: ${s}`);let{gl:c,framebufferInfo:l}=ac({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return await $s(c,l,s)}finally{oc(c,l)}}function ac({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o}){r??=e.getLogicalCanvasSize().width,i??=e.getLogicalCanvasSize().height,a??=window.devicePixelRatio??1;let s=e.gl,c=Math.floor(r*a),l=Math.floor(i*a),u=Lo(s,[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],c,l),d;try{d=Lo(s,[{format:s.RGBA8,samples:Math.min(4,s.getParameter(s.MAX_SAMPLES))}],c,l);let f=new Js({picking:!1},{webGLHelper:e,markAdapter:t,canvasSize:{width:r,height:i},devicePixelRatio:a,clearColor:o,framebufferInfo:d});return Te(n,Ce.create(0,0,r,i),{devicePixelRatio:a}).collectRenderCommands(f),f.finish(),f.render(),s.disable(s.SCISSOR_TEST),s.bindFramebuffer(s.READ_FRAMEBUFFER,d.framebuffer),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,u.framebuffer),s.blitFramebuffer(0,0,c,l,0,0,c,l,s.COLOR_BUFFER_BIT,s.NEAREST),{gl:s,framebufferInfo:u}}catch(e){throw oc(s,u),e}finally{d&&(s.deleteRenderbuffer(d.attachments[0]),s.deleteFramebuffer(d.framebuffer))}}function oc(e,t){e.deleteTexture(t.attachments[0]),e.deleteFramebuffer(t.framebuffer)}var sc=`flat out lowp vec4 vFillColor;
flat out lowp vec4 vStrokeColor;
flat out float vHalfStrokeWidth;
flat out float vArrowHalfLengthInPixels;
flat out float vHeadHalfWidth;
flat out float vStemHalfWidth;
flat out float vHeadStrokeWidth;
flat out float vRHeadSlope;
flat out float vRHeadNotchSlope;
flat out float vRStartNotchSlope;
flat out float vHeadRepeatFootprintLength;
flat out float vHeadSpacing;
flat out float vDirection;

out vec2 vPosInPixels;

/** Position along the arrow centerline. */
in float pos;

/** Which side of the extruded strip: -0.5 or 0.5. */
in float side;

float resolveStemHalfWidth(float arrowSize) {
    if (uStem) {
        return arrowSize * 0.5;
    } else {
        // The negative sign hides stem geometry; the magnitude remains
        // available for open-head thickness.
        return -arrowSize * 0.5;
    }
}

float resolveHeadHalfWidth(float arrowSize) {
    float headWidth = uHeadWidth * arrowSize;
    return max(headWidth, 0.0) * 0.5;
}

// Width along the arrow axis needed by one repeated head, including stroke.
float headRepeatFootprintLength(
    float halfWidth,
    float rHeadSlope,
    float headStrokeWidth,
    float halfStrokeWidth
) {
    float headAxisLength = halfWidth * rHeadSlope;
    float headStrokeLength = headStrokeWidth / length(vec2(rHeadSlope, 1.0));
    return headAxisLength + headStrokeLength + halfStrokeWidth * 2.0;
}

// Distance from the head tip to its centerline notch/join point.
float headNotchOffset(
    float headHalfWidth,
    float rHeadSlope,
    float rHeadNotchSlope,
    float headStrokeWidth
) {
    if (headHalfWidth <= 0.0) {
        return 0.0;
    }

    float headAxisLength = headHalfWidth * rHeadSlope;
    vec2 topOuter = vec2(headAxisLength, headHalfWidth);
    vec2 normalOffset = headStrokeWidth
        * normalize(vec2(headHalfWidth, -headAxisLength));
    vec2 topInner = topOuter + normalOffset;
    return topInner.x - topInner.y * rHeadNotchSlope;
}

// Distance from the arrow tip to where the stem outer edge meets a filled
// triangle head's notch edge. This is the effective occupied head length for
// deciding when a short inside arrow needs to blunt its head angle.
float triangleHeadStemJoinLength(
    float stemHalfWidth,
    float headHalfWidth,
    float rHeadSlope,
    float rHeadNotchSlope
) {
    float clampedRHeadNotchSlope = min(rHeadNotchSlope, rHeadSlope);
    return headHalfWidth * rHeadSlope
        - (headHalfWidth - stemHalfWidth) * clampedRHeadNotchSlope;
}

// Blunt non-repeated heads toward 90 degrees to preserve visible stem length.
float effectiveHeadSlope(
    float halfLength,
    float headHalfWidth,
    float stemHalfWidth,
    float configuredRHeadSlope,
    float configuredRHeadNotchSlope,
    bool headRepeat,
    bool bidirectional
) {
    if (
        headRepeat ||
        stemHalfWidth < 0.0
    ) {
        return configuredRHeadSlope;
    }

    if (uHeadPlacement == HEAD_PLACEMENT_OUTSIDE) {
        if (bidirectional || !uStartNotch || stemHalfWidth <= 0.0) {
            return configuredRHeadSlope;
        }

        // Outside heads start at the encoded endpoint. The preserved length is
        // therefore the encoded arrow length minus the start notch depth.
        float maxStartNotchLength = max(
            halfLength * 2.0 - uMinStemLength,
            0.0
        );
        return min(
            configuredRHeadSlope,
            maxStartNotchLength / stemHalfWidth
        );
    }

    if (uHeadShape != HEAD_SHAPE_TRIANGLE) {
        return configuredRHeadSlope;
    }

    float availableJoinLength = max(
        halfLength * 2.0 - uMinStemLength,
        0.0
    );
    float maxJoinLength = bidirectional
        ? availableJoinLength * 0.5
        : availableJoinLength;
    float configuredJoinLength = triangleHeadStemJoinLength(
        stemHalfWidth,
        headHalfWidth,
        configuredRHeadSlope,
        configuredRHeadNotchSlope
    );

    if (configuredJoinLength <= maxJoinLength) {
        return configuredRHeadSlope;
    }

    float boundaryJoinLength = stemHalfWidth * configuredRHeadNotchSlope;
    if (maxJoinLength < boundaryJoinLength) {
        return stemHalfWidth > 0.0
            ? clamp(maxJoinLength / stemHalfWidth, 0.0, configuredRHeadSlope)
            : 0.0;
    } else {
        return clamp(
            (
                maxJoinLength +
                (headHalfWidth - stemHalfWidth) * configuredRHeadNotchSlope
            ) / headHalfWidth,
            0.0,
            configuredRHeadSlope
        );
    }
}

// Outside placement extends the vertex quad so the head can protrude past the
// encoded interval while its notch/join point stays on the endpoint.
float getOutsideHeadOffset(
    float headHalfWidth,
    float rHeadSlope,
    float rHeadNotchSlope,
    float headStrokeWidth
) {
    if (uHeadPlacement != HEAD_PLACEMENT_OUTSIDE) {
        return 0.0;
    }

    return headNotchOffset(
        headHalfWidth,
        rHeadSlope,
        rHeadNotchSlope,
        headStrokeWidth
    );
}

vec2 getOutsideHeadExpansion(float outsideHeadOffset, float direction) {
    // Expansion is stored as negative/positive arrow-axis growth. In the
    // canonical reverse direction, the head is on the negative side.
    if (direction == DIRECTION_REVERSE) {
        return vec2(outsideHeadOffset, 0.0);
    } else if (direction == DIRECTION_FORWARD) {
        return vec2(0.0, outsideHeadOffset);
    } else {
        return vec2(outsideHeadOffset);
    }
}

void main(void) {
#pragma orderGuard

    vec2 a = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );
    vec2 b = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    );
    float direction = getScaled_direction();
    bool bidirectional = direction == DIRECTION_BOTH;

    vec2 segmentInPixels = (b - a) * uViewportSize;
    float segmentLength = length(segmentInPixels);
    if (segmentLength <= 0.0) {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float strokeWidth = getScaled_strokeWidth();
    float strokeOpacity = getScaled_strokeOpacity() * uViewOpacity;
    vHalfStrokeWidth = strokeWidth / 2.0;

    float arrowSize = max(getScaled_size(), uMinSize);
    float headHalfWidth = resolveHeadHalfWidth(arrowSize);
    float stemHalfWidth = resolveStemHalfWidth(arrowSize);
    float physicalStemHalfWidth = abs(stemHalfWidth);
    float headStrokeWidth = uHeadShape == HEAD_SHAPE_OPEN
        ? physicalStemHalfWidth * 2.0
        : 0.0;
    float configuredRHeadSlope = 1.0 / uHeadSlope;
    float configuredRHeadNotchSlope = 1.0 / uHeadNotchSlope;
    bool headRepeat = uHeadSpacing >= 0.0 && !bidirectional;
    float rHeadSlope = effectiveHeadSlope(
        segmentLength * 0.5,
        headHalfWidth,
        stemHalfWidth,
        configuredRHeadSlope,
        configuredRHeadNotchSlope,
        headRepeat,
        bidirectional
    );
    float rHeadNotchSlope = uHeadShape == HEAD_SHAPE_OPEN
        ? rHeadSlope
        : min(configuredRHeadNotchSlope, rHeadSlope);

    // Grow only the head side of the vertex quad for outside placement.
    float outsideHeadOffset = getOutsideHeadOffset(
        headHalfWidth,
        rHeadSlope,
        rHeadNotchSlope,
        headStrokeWidth
    );
    vec2 outsideHeadExpansion = getOutsideHeadExpansion(
        outsideHeadOffset,
        direction
    );

    float aaPadding = 1.0 / uDevicePixelRatio;
    float stripHalfWidth = max(headHalfWidth, physicalStemHalfWidth)
        + vHalfStrokeWidth
        + aaPadding;

    float reverseExpansion = outsideHeadExpansion.x;
    float forwardExpansion = outsideHeadExpansion.y;
    float geometryStart = -segmentLength * 0.5 - reverseExpansion;
    float geometryEnd = segmentLength * 0.5 + forwardExpansion;
    float geometryCenter = (geometryStart + geometryEnd) * 0.5;
    float geometryHalfLength = (geometryEnd - geometryStart) * 0.5;

    // The SDF geometry still uses the encoded arrow length, but the vertex
    // strip needs room for stroke and antialiasing beyond both endpoints.
    float axisPadding = vHalfStrokeWidth + aaPadding;
    float drawStart = geometryStart - axisPadding;
    float drawEnd = geometryEnd + axisPadding;
    float localAxisPosition = mix(drawStart, drawEnd, pos);
    float localX = localAxisPosition - geometryCenter;
    float localY = side * stripHalfWidth * 2.0;

    vec2 tangentInPixels = segmentInPixels / segmentLength;
    vec2 normalInPixels = vec2(-tangentInPixels.y, tangentInPixels.x);
    vec2 segmentCenter = (a + b) * 0.5;
    vec2 p = segmentCenter
        + (tangentInPixels * localAxisPosition + normalInPixels * localY)
            / uViewportSize;

    vPosInPixels = vec2(localX, localY);
    vArrowHalfLengthInPixels = geometryHalfLength;

    // These flat varyings are per-arrow geometry constants used by the fragment
    // SDF. Keeping them here avoids repeating this math per fragment.
    vHeadHalfWidth = headHalfWidth;
    vStemHalfWidth = stemHalfWidth;
    vHeadStrokeWidth = headStrokeWidth;
    vRHeadSlope = rHeadSlope;
    vRHeadNotchSlope = rHeadNotchSlope;
    vRStartNotchSlope = uStartNotch && !bidirectional ? vRHeadSlope : 0.0;
    vDirection = direction;
    vHeadRepeatFootprintLength = headRepeatFootprintLength(
        vHeadHalfWidth,
        vRHeadSlope,
        vHeadStrokeWidth,
        vHalfStrokeWidth
    );
    vHeadSpacing = headRepeat ? uHeadSpacing * arrowSize : -1.0;
    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);

    gl_Position = unitToNdc(p);

    float fillOpacity = getScaled_fillOpacity() * uViewOpacity;
    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);

    setupPicking();
}
`,cc=`in vec2 vPosInPixels;

flat in lowp vec4 vFillColor;
flat in lowp vec4 vStrokeColor;
flat in float vHalfStrokeWidth;
flat in float vArrowHalfLengthInPixels;
flat in float vHeadHalfWidth;
flat in float vStemHalfWidth;
flat in float vHeadStrokeWidth;
flat in float vRHeadSlope;
flat in float vRHeadNotchSlope;
flat in float vRStartNotchSlope;
flat in float vHeadRepeatFootprintLength;
flat in float vHeadSpacing;
flat in float vDirection;

out lowp vec4 fragColor;

const int N = 6;
const float FAR_OUTSIDE = 1e20;

// Adapted from: https://iquilezles.org/articles/distfunctions2d/
float sdPolygon(vec2[N] v, vec2 p) {
    float d = dot(p-v[0],p-v[0]);
    float s = 1.0;
    for( int i=0, j=N-1; i<N; j=i, i++ ) {
        vec2 e = v[j] - v[i];
        vec2 w =    p - v[i];
        vec2 b = w - e*clamp( dot(w,e)/max(dot(e,e), 1e-12), 0.0, 1.0 );
        d = min( d, dot(b,b) );
        bvec3 c = bvec3(p.y>=v[i].y,p.y<v[j].y,e.x*w.y>e.y*w.x);
        if( all(c) || all(not(c)) ) s*=-1.0;  
    }
    return s*sqrt(d);
}

float sdStem(
    vec2 p,
    float halfLength,
    float halfWidth,
    float rHeadSlope,
    float rStartNotchSlope,
    bool bidirectional
) {
    if (halfWidth < 0.0) {
        return FAR_OUTSIDE;
    }

    float headSideLength = halfWidth * rHeadSlope;
    float startNotchLength = halfWidth * rStartNotchSlope;
    vec2 vertices[6];
    if (bidirectional) {
        vertices = vec2[6](
            vec2(-halfLength, 0.0),
            vec2(-halfLength + headSideLength, halfWidth),
            vec2(halfLength - headSideLength, halfWidth),
            vec2(halfLength, 0.0),
            vec2(halfLength - headSideLength, -halfWidth),
            vec2(-halfLength + headSideLength, -halfWidth)
        );
    } else {
        vertices = vec2[6](
            vec2(-halfLength, 0.0),
            vec2(-halfLength + headSideLength, halfWidth),
            vec2(halfLength, halfWidth),
            vec2(halfLength - startNotchLength, 0.0),
            vec2(halfLength, -halfWidth),
            vec2(-halfLength + headSideLength, -halfWidth)
        );
    }

    return sdPolygon(vertices, p);
}

// Inner corner of an open head, offset perpendicular to the outer edge.
vec2 headInnerCorner(float halfWidth, float rHeadSlope, float headStrokeWidth) {
    float headAxisLength = halfWidth * rHeadSlope;
    vec2 topOuter = vec2(headAxisLength, halfWidth);
    vec2 normal = vec2(halfWidth, -headAxisLength);
    vec2 normalOffset = length(normal) > 0.0
        ? headStrokeWidth * normalize(normal)
        : vec2(0.0);
    return topOuter + normalOffset;
}

// X coordinate where the arrowhead notch edge crosses the centerline.
float headNotchX(
    float halfWidth,
    float rHeadSlope,
    float rHeadNotchSlope,
    float headStrokeWidth
) {
    vec2 topInner = headInnerCorner(halfWidth, rHeadSlope, headStrokeWidth);
    return topInner.x - topInner.y * rHeadNotchSlope;
}

float sdArrowHead(
    vec2 p,
    float halfWidth,
    float rHeadSlope,
    float rHeadNotchSlope,
    float headStrokeWidth
) {
    float headAxisLength = halfWidth * rHeadSlope;
    vec2 topOuter = vec2(headAxisLength, halfWidth);
    vec2 bottomOuter = vec2(headAxisLength, -halfWidth);
    vec2 topInner = headInnerCorner(halfWidth, rHeadSlope, headStrokeWidth);
    vec2 normalOffset = topInner - topOuter;
    vec2 bottomInner = bottomOuter + vec2(normalOffset.x, -normalOffset.y);
    float notchX = headNotchX(
        halfWidth,
        rHeadSlope,
        rHeadNotchSlope,
        headStrokeWidth
    );

    vec2 vertices[6] = vec2[6](
        vec2(0.0, 0.0),
        topOuter,
        topInner,
        vec2(notchX, 0.0),
        bottomInner,
        bottomOuter
    );

    return sdPolygon(vertices, p);
}

float repeat(float x, float spacing) {
    return x >= spacing ? x - floor(x / spacing) * spacing : x;
}

float sdArrow(vec2 arrowPos, float arrowHalfLength, bool bidirectional) {
    float stemDistance = sdStem(
        arrowPos,
        arrowHalfLength,
        vStemHalfWidth,
        vRHeadSlope,
        vRStartNotchSlope,
        bidirectional
    );

    bool headRepeat = vHeadSpacing >= 0.0;
    float spacing = headRepeat
        ? max(vHeadSpacing, vHeadRepeatFootprintLength)
        : 1.0 / 0.0;
    float distanceFromStart = arrowPos.x + arrowHalfLength;

    // Keep the stroked tip inside the repeated head's local window.
    float arrowHeadX = repeat(
        distanceFromStart + vHalfStrokeWidth,
        spacing
    ) - vHalfStrokeWidth;

    float headDistance = sdArrowHead(
        vec2(arrowHeadX, arrowPos.y),
        vHeadHalfWidth,
        vRHeadSlope,
        vRHeadNotchSlope,
        vHeadStrokeWidth
    );

    if (bidirectional) {
        float endHeadDistance = sdArrowHead(
            vec2(arrowHalfLength - arrowPos.x, arrowPos.y),
            vHeadHalfWidth,
            vRHeadSlope,
            vRHeadNotchSlope,
            vHeadStrokeWidth
        );
        headDistance = min(headDistance, endHeadDistance);
    }

    if (headRepeat) {
        // Cull heads that would be partially clipped.
        float headTipDistance = distanceFromStart - arrowHeadX;
        float headEndDistance = headTipDistance
            + vHeadRepeatFootprintLength
            - vHalfStrokeWidth;

        if (headTipDistance > 0.0 && headEndDistance > arrowHalfLength * 2.0) {
            headDistance = FAR_OUTSIDE;
        }
    }

    return min(stemDistance, headDistance);
}

void main(void) {
    vec2 arrowPos = vPosInPixels;
    bool bidirectional = vDirection == DIRECTION_BOTH;
    if (vDirection == DIRECTION_FORWARD) {
        arrowPos.x = -arrowPos.x;
    }
    float d = sdArrow(
        arrowPos,
        vArrowHalfLengthInPixels,
        bidirectional
    );

    fragColor = distanceToColor(
        d,
        vFillColor,
        vStrokeColor,
        vec4(0.0),
        vHalfStrokeWidth
    );

    if (uPickingEnabled) {
        if (d < vHalfStrokeWidth) {
            fragColor = vPickingColor;
        }
    } else if (fragColor.a == 0.0) {
        discard;
    }
}
`,lc=`layout(std140) uniform Mark {
    uniform int uHeadShape;

    uniform float uHeadSlope;
    uniform float uHeadNotchSlope;

    uniform float uMinSize;
    uniform float uHeadWidth;
    uniform bool uStartNotch;
    uniform float uMinStemLength;
    uniform float uHeadSpacing;
    uniform bool uStem;

    uniform int uHeadPlacement;

#pragma markUniforms
};

const float DIRECTION_FORWARD = 0.0;
const float DIRECTION_REVERSE = 1.0;
const float DIRECTION_BOTH = 2.0;

const int HEAD_SHAPE_TRIANGLE = 0;
const int HEAD_SHAPE_OPEN = 1;

const int HEAD_PLACEMENT_INSIDE = 0;
const int HEAD_PLACEMENT_OUTSIDE = 1;

// Arrow space uses x for arrow length and y for width perpendicular to it.
// Negative x points toward the arrowhead in the canonical "reverse" direction.
`,uc=1e4,dc=class{#e=!1;constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}configure(){if(this.#e)throw Error(`Already configured!`);this.#t(),this.#n(),this.#e=!0}addConverter(e,t){let n=this.createUpdater(e,t.numComponents||1,t.targetArrayType??Float32Array,t.arrayReference),r=t.f;this.dataUpdaters.push((t.arrayReference,e=>n(r(e))))}createUpdater(e,t,n=Float32Array,r=void 0){if(!f(this.size))throw Error(`The number of vertices must be defined!`);let i,a,o=0,s=new n(this.size*t);if(this.arrays[e]={data:s,numComponents:t},t==1){let e=0;i=()=>{s[o++]=e},a=t=>{e=+t}}else{let e=r??[0],n=r?e=>{}:t=>{e=t};switch(t){case 1:break;case 2:i=()=>{s[o++]=e[0],s[o++]=e[1]},a=n;break;case 3:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2]},a=n;break;case 4:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2],s[o++]=e[3]},a=n;break;default:throw Error(`Invalid numComponents: `+t)}}return this.pushers.push(i),a}pushAll(){throw Error(`Call configure() first!`)}updateFromDatum(e){throw Error(`Call configure() first!`)}#t(){if(this.size>uc){let e=this.pushers.map((e,t)=>`const p${t} = that.pushers[${t}];`).join(`
`),t=this.pushers.map((e,t)=>`  p${t}();`).join(`
`);this.pushAll=Function(`that`,`${e}
return function unrolledPushAll() {
${t}
  that.vertexCount++;
};`)(this)}else this.pushAll=()=>{for(let e=0;e<this.pushers.length;e++)this.pushers[e]();this.vertexCount++}}#n(){if(this.size>uc){let e=this.dataUpdaters.map((e,t)=>`const u${t} = that.dataUpdaters[${t}];`).join(`
`),t=this.dataUpdaters.map((e,t)=>`  u${t}(datum);`).join(`
`);this.updateFromDatum=Function(`that`,`datum`,`${e}
return function unrolledUpdateFromDatum(datum) {
${t}
};`)(this)}else this.updateFromDatum=e=>{for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}},fc=127;function pc(e){let t=[];for(let e=0;e<=fc;e++)t.push(void 0);let n=new Map;for(let r of e.chars)r.id<=fc?t[r.id]=r:n.set(r.id,r);let r=8722;n.has(r)||n.set(r,t[45]);function i(e){return(e<=fc?t[e]:n.get(e))||t[63]}function a(e){return i(e.charCodeAt(0))}let o=e.common.base,s=a(`x`),c=a(`X`),l=a(`q`),u=s.height-10,d=c.height-10,f=l.height-s.height+l.yoffset-s.yoffset;function p(e,t=1){let n=0;for(let t=0;t<e.length;t++)n+=i(e.charCodeAt(t)).xadvance;return n/o*t}let m=0;for(let t of e.chars)t.id>m&&(m=t.id);return{measureWidth:p,getCharByCode:i,getChar:a,chars:e.chars,maxCharId:m,xHeight:u,capHeight:d,descent:f,common:e.common}}var mc=2**31-1,hc=-(2**31);function gc(e,t,n,r=n,i=0,a=i){if(a<=i||t[1]<=t[0])return;let o=n===r,c=Array(e);c.fill(mc);let l=Array(e);l.fill(0);let u=t[0],d=(t[1]-t[0])/e,f=(t,n)=>{let r=(t-u)/d,i=Math.floor(r);return s(n&&i==r?i-1:i,0,e-1)},p=hc,m=-1/0,h=!1,g=(e,t,n=[0,0])=>{let r=f(e,!1),i=f(t,!0),a=c[r],o=Math.max(l[i],a);return n[0]=a,n[1]=o,n};for(let e=i;e<a;){let t=e,i=n(e),s=r(e);for(e+=1;e<a&&n(e)===i&&r(e)===s;)e+=1;if(t>p)p=t;else{h=!0;break}if(i<m||!o&&s<i){h=!0;break}m=i;let u=f(i,!1),d=o?u:f(s,!0);for(let n=u;n<=d;n++)c[n]>t&&(c[n]=t),l[n]<e&&(l[n]=e)}if(h)return;for(let e=1;e<l.length;e++)l[e]<l[e-1]&&(l[e]=l[e-1]);let _=!0;for(let e=c.length-1;e>0;e--)_&&c[e]==mc?(c[e]=l[e],_=!1):c[e-1]>c[e]&&(c[e-1]=c[e]);return g}var _c=class{constructor({encoders:e,numVertices:t=void 0,attributes:n=[]}){this.encoders=e,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([e,t])=>n.includes(e)&&t&&!t.constant));let r=[...js(e).entries()].filter(([e,t])=>e[1]&&t.length>1).map(([e,t])=>t);this.allocatedVertices=t,this.variableBuilder=new dc(t),this.attributeNames={};for(let[e,t]of Object.entries(this.variableEncoders)){let n=m(t);if(!n)continue;let i=r.find(t=>t.find(t=>t==e)),a=n.asNumberAccessor(),o=t.scale,{largeHp:s,arrayConstructor:c,discrete:l,numComponents:u}=$(o,e),d=[0,0],f;if(o&&l)if(`props`in o&&o.props.domainIndexer)f=o.props.domainIndexer;else if(`domain`in o)f=ve(),f.addAll(o.domain());else throw Error(`Missing domain indexer for discrete scale.`);let p=f?e=>f(n(e)):s?e=>Os(a(e),d):a,h=Ms(i??e);for(let t of i??[e])this.attributeNames[t]=h;i&&e!=i[0]||this.variableBuilder.addConverter(h,{f:p,numComponents:u,arrayReference:s?d:void 0,targetArrayType:c})}let i=this.variableEncoders.x,a=this.variableEncoders.x2,o=this.encoders.x?.channelDef,s=i?.scale;if(o?.buildIndex&&i&&s&&C(s.type)){let e=this.attributeNames.x;if(!e)throw Error(`Missing x attribute for x indexing.`);let t=a?.scale&&C(a.scale.type)?this.attributeNames.x2??e:e;this.xIndexConfig={domain:[s.domain()[0],s.domain()[1]],xAttributeName:e,x2AttributeName:t}}else this.xIndexConfig=void 0;this.lastOffset=0,this.rangeMap=new l([],JSON.stringify)}registerBatch(e){let t=this.lastOffset,n=this.variableBuilder.vertexCount,r=n-t;r&&this.rangeMap.set(e,{offset:t,count:r,xIndex:this.createXIndex(t,n)}),this.lastOffset=n}addBatches(e){for(let[t,n]of e)this.addBatch(t,n)}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}createXIndex(e,t){let n=this.xIndexConfig;if(!n)return;let r=e=>{let{data:t,numComponents:n}=this.variableBuilder.arrays[e];return n==2?e=>{let r=e*n;return t[r]*Ds+t[r+1]}:e=>t[e*n]},i=r(n.xAttributeName),a=n.x2AttributeName==n.xAttributeName?i:r(n.x2AttributeName);return gc(50,n.domain,i,a,e,t)}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}},vc=class extends _c{constructor({encoders:e,attributes:t,numItems:n}){super({encoders:e,attributes:t,numVertices:n*6}),this.variableBuilder.configure();let r=this.variableBuilder.pushAll;this.pushAllSixTimes=n>500?Function(`pushAll`,`return function unrolledPushAllSixTimes() {
  pushAll(); pushAll(); pushAll(); pushAll(); pushAll(); pushAll();
};`)(r):function(){r(),r(),r(),r(),r(),r()}}addBatch(e,t,n=0,r=t.length){if(!(r<=n)){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.pushAllSixTimes()}this.registerBatch(e)}}},yc=class extends _c{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:r=[-1/0,1/0],numItems:i}){super({encoders:e,attributes:t,numVertices:n==1/0?i*6:void 0}),this.visibleRange=r,this.tessellationThreshold=n||1/0,this.updateSide=this.variableBuilder.createUpdater(`side`,1),this.updatePos=this.variableBuilder.createUpdater(`pos`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();for(let e=0;e<=1;e++)this.updatePos(e/1),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll()}this.registerBatch(e)}},bc=class extends _c{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}},xc=class extends _c{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}toArrays(){let e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}},Sc=class extends _c{constructor({encoders:e,attributes:t,fontMetrics:n,properties:r,numCharacters:i=void 0}){super({encoders:e,attributes:t,numVertices:i*6}),this.metadata=n,this.metrics=n,this.properties=r;let a=e.text.channelDef;this.numberFormat=!u(a)&&`format`in a&&a.format?y(a.format):e=>e,this.updateVertexCoord=this.variableBuilder.createUpdater(`vertexCoord`,2),this.updateTextureCoord=this.variableBuilder.createUpdater(`textureCoord`,2),this.updateWidth=this.variableBuilder.createUpdater(`width`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){let i=this.properties.align||`left`,a=this.properties.logoLetters??!1,o=this.metadata.common.base,s=this.metadata.common.scaleH,c=-5;switch(this.properties.baseline){case`top`:c+=this.metrics.capHeight;break;case`middle`:c+=this.metrics.capHeight/2;break;case`bottom`:c-=this.metrics.descent;break;default:}let l=this.encoders.text,u=[0,0];this.updateVertexCoord(u);let d=[0,0];this.updateTextureCoord(d);for(let e=n;e<r;e++){let n=t[e],r=this.numberFormat(l(n)),f=p(r)?r:r===null?``:``+r;if(f.length==0)continue;this.variableBuilder.updateFromDatum(n);let m=a?f.length:this.metrics.measureWidth(f);this.updateWidth(m);let h=i==`right`?-m:i==`center`?-m/2:0;if(!a){let e=this.metrics.getCharByCode(f.charCodeAt(0));h-=(e.width-e.xadvance)/o/2}let g,_,v;for(let e=0;e<f.length;e++){let t=this.metrics.getCharByCode(f.charCodeAt(e)),n=a?1:t.xadvance/o;if(t.id==32){h+=n;continue}a?(v=(t.width+10)/t.width,h=-v/2,_=(t.height+10)/t.height,g=-.5-5/t.height):(_=t.height/o,g=-(t.height+t.yoffset+c)/o,v=t.width/o);let r=t.x,i=t.y;u[0]=h,u[1]=g+_,d[0]=r/s,d[1]=i/s,this.variableBuilder.pushAll(),u[0]=h+v,u[1]=g+_,d[0]=(r+t.width)/s,d[1]=i/s,this.variableBuilder.pushAll(),u[0]=h,u[1]=g,d[0]=r/s,d[1]=(i+t.height)/s,this.variableBuilder.pushAll(),u[0]=h+v,u[1]=g+_,d[0]=(r+t.width)/s,d[1]=i/s,this.variableBuilder.pushAll(),u[0]=h,u[1]=g,d[0]=r/s,d[1]=(i+t.height)/s,this.variableBuilder.pushAll(),u[0]=h+v,u[1]=g,d[0]=(r+t.width)/s,d[1]=(i+t.height)/s,this.variableBuilder.pushAll(),h+=n}}this.registerBatch(e)}},Cc=`#define PI 3.141593

uniform View {
    /** Offset in "unit" units */
    mediump vec2 uViewOffset;
    mediump vec2 uViewScale;
    /** Size of the logical viewport in pixels, i.e., the view */
    mediump vec2 uViewportSize;
    mediump vec4 uLogicalVisibleRect;
    lowp vec2 uCullByVisibleRange;
    lowp float uDevicePixelRatio;
    // TODO: Views with opacity less than 1.0 should be rendered into a texture
    // that is rendered with the specified opacity.
    lowp float uViewOpacity;
    bool uPickingEnabled;
};


/**
 * Maps a coordinate on the unit scale to a normalized device coordinate.
 * (0, 0) is at the bottom left corner.
 */
vec4 unitToNdc(vec2 coord) {
    return vec4((coord * uViewScale + uViewOffset) * 2.0 - 1.0, 0.0, 1.0);
}

vec4 unitToNdc(float x, float y) {
    return unitToNdc(vec2(x, y));
}

vec4 pixelsToNdc(vec2 coord) {
    return unitToNdc(coord / uViewportSize);
}

vec4 pixelsToNdc(float x, float y) {
    return pixelsToNdc(vec2(x, y));
}

/** Applies logical pixel offsets to a position in unit coordinates. */
vec2 applyOffset(vec2 pos, vec2 offset) {
    return pos + vec2(offset.x, -offset.y) / uViewportSize;
}

bool isOutsideVisibleRange(vec2 pos) {
    return (uCullByVisibleRange.x > 0.5 &&
                (pos.x < uLogicalVisibleRect.x ||
                 pos.x > uLogicalVisibleRect.z)) ||
           (uCullByVisibleRange.y > 0.5 &&
                (pos.y < uLogicalVisibleRect.y ||
                 pos.y > uLogicalVisibleRect.w));
}

float linearstep(float edge0, float edge1, float x) {
    return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

const highp uint HASH_EMPTY_KEY = 0xffffffffu;

highp uint hash32(highp uint key) {
    highp uint v = key;
    v ^= v >> 16u;
    v *= 0x7feb352du;
    v ^= v >> 15u;
    v *= 0x846ca68bu;
    v ^= v >> 16u;
    return v;
}

bool isEmptyHashTexture(highp usampler2D s) {
    // Empty selections are encoded as a single empty hash slot.
    ivec2 texSize = textureSize(s, 0);
    return texSize.x == 1 && texSize.y == 1 && texelFetch(s, ivec2(0, 0), 0).r == HASH_EMPTY_KEY;
}

bool hashContainsTexture(highp usampler2D s, highp uint value) {
    ivec2 texSize = textureSize(s, 0);
    highp uint width = uint(texSize.x);
    highp uint size = width * uint(texSize.y);
    highp uint mask = size - 1u;
    highp uint index = hash32(value) & mask;

    for (highp uint probe = 0u; probe < size; probe += 1u) {
        ivec2 coord = ivec2(int(index % width), int(index / width));
        highp uint entry = texelFetch(s, coord, 0).r;
        if (entry == value) {
            return true;
        }
        if (entry == HASH_EMPTY_KEY) {
            return false;
        }
        index = (index + 1u) & mask;
    }

    return false;
}

/**
 * Calculates a gamma for antialiasing opacity based on the color.
 */
float getGammaForColor(vec3 rgb) {
    return mix(
        1.25,
        0.75,
        // RGB should be linearized but this is good enough for now
        smoothstep(0.0, 1.0, dot(rgb, vec3(0.299, 0.587, 0.114))));
}

// Fragment shader stuff ////////////////////////////////////////////////////////

// TODO: include the following only in fragment shaders

/**
 * Specialized linearstep for doing antialiasing
 */
float distanceToRatio(float d) {
	return clamp(d * uDevicePixelRatio + 0.5, 0.0, 1.0);
}

vec4 distanceToColor(float d, vec4 fill, vec4 stroke, vec4 background, float halfStrokeWidth) {
    if (halfStrokeWidth > 0.0) {
        // Distance to stroke's edge. Negative inside the stroke.
        float sd = abs(d) - halfStrokeWidth;
        return mix(
            stroke,
            d <= 0.0 ? fill : background,
            distanceToRatio(sd));
    } else {
        return mix(background, fill, distanceToRatio(-d));
    }
}
`,wc=`uniform highp float uZero;

// Utils ------------

vec3 getDiscreteColor(sampler2D s, int index) {
    return texelFetch(s, ivec2(index % textureSize(s, 0).x, 0), 0).rgb;
}

vec3 getInterpolatedColor(sampler2D s, float unitValue) {
    return texture(s, vec2(unitValue, 0.0)).rgb;
}

float clampToRange(float value, vec2 range) {
    return clamp(value, min(range[0], range[1]), max(range[0], range[1]));
}

// Scales ------------
// Based on d3 scales: https://github.com/d3/d3-scale

float scaleIdentity(float value) {
    return value;
}

float scaleIdentity(uint value) {
    return float(value);
}

float scaleLinear(float value, vec2 domain, vec2 range) {
    float domainSpan = domain[1] - domain[0];
    float rangeSpan = range[1] - range[0];
    return (value - domain[0]) / domainSpan * rangeSpan + range[0];
}

float scaleLog(float value, vec2 domain, vec2 range, float base) {
    // y = m log(x) + b 
    // TODO: Perf optimization: precalculate log domain in js.
    // TODO: Reversed domain, etc
    return scaleLinear(log(value) / log(base), log(domain) / log(base), range);
}

float symlog(float value, float constant) {
    // WARNING: emulating log1p with log(x + 1). Small numbers are likely to
    // have significant precision problems.
    return sign(value) * log(abs(value / constant) + 1.0);
}

float scaleSymlog(float value, vec2 domain, vec2 range, float constant) {
    return scaleLinear(
        symlog(value, constant),
        vec2(symlog(domain[0], constant), symlog(domain[1], constant)),
        range
    );
}

float scalePow(float value, vec2 domain, vec2 range, float exponent) {
    // y = mx^k + b
    // TODO: Perf optimization: precalculate pow domain in js.
    // TODO: Reversed domain, etc
    return scaleLinear(
        pow(abs(value), exponent) * sign(value),
        pow(abs(domain), vec2(exponent)) * sign(domain),
        range
    );
}

// TODO: scaleThreshold
// TODO: scaleQuantile (special case of threshold scale)

// TODO: domainExtent should be uint
float scaleBand(uint value, vec2 domainExtent, vec2 range,
                float paddingInner, float paddingOuter,
                float align, float band) {

    // TODO: reverse
    float start = range[0];
    float stop = range[1];
    float rangeSpan = stop - start;

    float n = domainExtent[1] - domainExtent[0];

    // This fix departs from Vega and d3: https://github.com/vega/vega/issues/3357#issuecomment-1063253596
    paddingInner = int(n) > 1 ? paddingInner : 0.0;

    // Adapted from: https://github.com/d3/d3-scale/blob/master/src/band.js
    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    return start + (float(value) - domainExtent[0]) * step + bandwidth * band;
}

const int lowBits = 12;
const float lowDivisor = pow(2.0, float(lowBits));
const uint lowMask = uint(lowDivisor - 1.0);

vec2 splitUint(uint value) {
    uint valueLo = value & lowMask;
    uint valueHi = value - valueLo;
    return vec2(float(valueHi), float(valueLo));
}

/**
 * High precision variant of scaleBand for index/locus scales
 */
float scaleBandHp(uint value, vec3 domainExtent, vec2 range,
                 float paddingInner, float paddingOuter,
                 float align, float band) {

    // TODO: reverse
    float start = range[0];
    float stop = range[1];
    float rangeSpan = stop - start;

    vec2 domainStart = domainExtent.xy;
    float n = domainExtent[2];

    // The following computation is identical for every vertex. Could be done on the JS side.
    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    // Split into to values with each having a reduced number of significant digits
    // to mitigate the lack of precision in float32 calculations.
    vec2 splitValue = splitUint(value);

    // Using max to prevent the shader compiler from wrecking the precision.
    // Othwewise the compiler could optimize the sum of the four terms into
    // some equivalent form that does premature rounding.
    float inf = 1.0 / uZero;
    float hi = max(splitValue[0] - domainStart[0], -inf);
    float lo = max(splitValue[1] - domainStart[1], -inf);

    return dot(vec4(start, hi, lo, bandwidth), vec4(1.0, step, step, band));
}

/**
 * High precision variant of scaleBand for index/locus scales for large
 * domains where 32bit uints are not sufficient to represent the domain.
 */
float scaleBandHp(uvec2 value, vec3 domainExtent, vec2 range,
                 float paddingInner, float paddingOuter,
                 float align, float band) {

    // TODO: reverse
    float start = range[0];
    float stop = range[1];
    float rangeSpan = stop - start;

    vec2 domainStart = domainExtent.xy;
    float n = domainExtent[2];

    // The following computation is identical for every vertex. Could be done on the JS side.
    float step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    // Split into to values with each having a reduced number of significant digits
    // to mitigate the lack of precision in float32 calculations.
    vec2 splitValue = vec2(float(value[0]) * lowDivisor, float(value[1]));

    // Using max to prevent the shader compiler from wrecking the precision.
    // Othwewise the compiler could optimize the sum of the four terms into
    // some equivalent form that does premature rounding.
    float inf = 1.0 / uZero;
    float hi = max(splitValue[0] - domainStart[0], -inf);
    float lo = max(splitValue[1] - domainStart[1], -inf);

    return dot(vec4(start, hi, lo, bandwidth), vec4(1.0, step, step, band));
}
`,Tc=`
/** Describes where a sample facet should be shown. */
struct SampleFacetPosition {
    float pos;
    float height;
};

// ----------------------------------------------------------------------------

#if !defined(SAMPLE_FACET_UNIFORM) && !defined(SAMPLE_FACET_TEXTURE)

SampleFacetPosition getSampleFacetPos() {
    return SampleFacetPosition(0.0, 1.0);
}

#elif defined(SAMPLE_FACET_UNIFORM)

/**
 * Location and height of the band on the Y axis on a normalized [0, 1] scale.
 * Elements: position, height
 */
uniform vec2 uSampleFacet;

SampleFacetPosition getSampleFacetPos() {
    return SampleFacetPosition(
        1.0 - uSampleFacet.x - uSampleFacet.y,
        uSampleFacet.y
    );
}

#elif defined(SAMPLE_FACET_TEXTURE)

uniform sampler2D uSampleFacetTexture;

SampleFacetPosition getSampleFacetPos() {
    vec2 texel = texelFetch(
        uSampleFacetTexture,
        ivec2(int(attr_facetIndex), 0),
        0
    ).rg;
    return SampleFacetPosition(
        1.0 - texel.x - texel.y,
        texel.y
    );
}

#endif

vec2 applySampleFacet(vec2 pos) {
    SampleFacetPosition facetPos = getSampleFacetPos();
    return vec2(pos.x, facetPos.pos + pos.y * facetPos.height);
}
`,Ec=`/*
 * Based on concepts presented at:
 * https://webglfundamentals.org/webgl/lessons/webgl-picking.html
 * https://deck.gl/docs/developer-guide/custom-layers/picking
 */

out highp vec4 vPickingColor;

/**
 * Passes the unique id to the fragment shader as a color if picking is enabled.
 * Returns true if picking is enabled.
 */
bool setupPicking() {
    if (uPickingEnabled) {
#ifdef uniqueId_DEFINED
        uint id = attr_uniqueId;
        vPickingColor = vec4(
            ivec4(id >> 0, id >> 8, id >> 16, id >> 24) & 0xFF
        ) / float(0xFF);
#else
        vPickingColor = vec4(1.0);
#endif
        return true;
    }
    return false;
}
`,Dc=`in highp vec4 vPickingColor;
`;function Oc(e){let t=e.unitView.context.textMetrics,n=e.properties;return t.getFont(n.font,n.fontStyle,n.fontWeight)}var kc=`SAMPLE_FACET_UNIFORM`,Ac=`SAMPLE_FACET_TEXTURE`,jc=`uSelectionTexture_`,Mc={all:0,matching:1,nonmatching:2};function Nc(e,t){return e.replace(/#pragma orderGuard(?:[ \t]*\r?\n){0,2}/,t)}var Pc=class{#e=[];#t=!1;constructor(e,t,n){this.mark=e,this._glHelper=t,this._rendererResources=n,this.bufferInfo=void 0,this.bytesPerElement=new Map,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.viewUniformInfo=void 0,this.markUniformInfo=void 0,this.markUniformsAltered=!0,this.selectionTextureOps=[],this.scaleResolutionDisposers=[],this.rangeMap=new Fc}get unitView(){return this.mark.unitView}get encoders(){return this.mark.encoders}get encoding(){return this.mark.encoding}get properties(){return this.mark.properties}get font(){return Oc(this.mark)}get opaque(){return!1}get defaultHitTestMode(){return this.mark.defaultHitTestMode}getType(){return this.mark.getType()}getAttributes(){throw Error(`Not implemented.`)}initializeGraphics(){this.#n()}getSampleFacetMode(){if(this.encoders.facetIndex)return Ac;if(this.unitView.usesSampleFacetRendering())return kc}createAndLinkShaders(i,a,s=[]){let l=this.getAttributes(),f=this.encoders,p=this.mark.getOrder(),m=this.getSampleFacetMode(),g=!!this.properties.cullByVisibleRange;m&&s.push(`#define ${m}`),g&&s.push(`#define VISIBLE_RANGE_CULLING`);let _=`// view: `+this.unitView.getPathString(),v=[],y=new Set,b=js(f),ne=e=>{for(let[t,n]of b.entries())if(t[1]&&n.includes(e))return Ms(n);return Ms(e)},x=[],ie=e(f),ae=new Set(ie.flatMap(t));for(let e of p?.params??[])ae.add(e);Array.from(ae).some(e=>{let t=this.unitView.paramRuntime.findValue(e);return r(t)&&Object.keys(t.intervals).some(e=>$(this.unitView.getScaleResolution(e).getScale(),e).largeHp)})&&(v.push(`bool selectionLeq(uvec2 a, uvec2 b) { return a.x < b.x || (a.x == b.x && a.y <= b.y); }`),v.push(`bool selectionLt(uvec2 a, uvec2 b) { return a.x < b.x || (a.x == b.x && a.y < b.y); }`)),p&&(s.push(`#define CONDITIONAL_ORDER`),x.push(`    // Conditional order pass`),x.push(`    uniform int uOrderMode;`));for(let e of ae){let t=this.unitView.paramRuntime,i=t.findValue(e);if(!i)throw Error(`Cannot infer selection type as the parameter "${e}" has no value. Please ensure that the parameter is properly defined!`);let a=Ms(`uniqueId`);if(d(i)){let t=ss+n(e);x.push(`    // Selection parameter`),x.push(`    uniform highp uint ${t};`),this.#e.push(()=>{this.registerMarkUniformValue(t,{expr:e},e=>e.uniqueId??0)}),v.push(`bool ${cs}${e}() {\n    return ${ss}${e} != 0u && ${ss}${e} == ${a};\n}`),v.push(`bool ${ls}${e}() {\n    return ${ss}${e} == 0u;\n}`)}else if(c(i)){let r=jc+n(e);v.push(`// Selection texture\nuniform highp usampler2D ${r};`);let o=this.glHelper,s=o.selectionTextures;this.selectionTextureOps.push(()=>{let n=t.getValue(e),i=s.get(n);if(!i)throw Error(`Bug: no selection texture found for "${e}"!`);q(this.programInfo,{[r]:i})});let c=jc+e;v.push(`bool ${cs}${e}() {\n    return hashContainsTexture(${c}, ${a});\n}`),v.push(`bool ${ls}${e}() {\n    return isEmptyHashTexture(${c});\n}`),o.createSelectionTexture(i),t.watchExpression(e,()=>{let n=t.getValue(e);o.createSelectionTexture(n),this.unitView.context.animator.requestRender()})}else if(r(i)){let t=Object.keys(i.intervals).filter(e=>[`x`,`y`].includes(e));if(t.length==0)throw new Se(`Interval selection "${e}" has no supported x or y targets.`,this.unitView);let r=[];for(let i of t){let t=ss+n(e)+`_${i}`,{attributeType:a,largeHp:o}=$(this.unitView.getScaleResolution(i).getScale(),i);x.push(`    // Selection parameter`),x.push(`    uniform highp ${a}[2] ${t};`),this.#e.push(()=>{this.registerMarkUniformValue(t,{expr:e},e=>{let t=e.intervals[i]??[1,0];return o?t.flatMap(e=>Os(e)):t})});let s=t+`[0]`,c=t+`[1]`;r.push(o?`!selectionLeq(${s}, ${c})`:`${s} > ${c}`)}v.push(`bool ${ls}${e}() {\n    return ${r.join(` || `)};\n}`)}else throw new Se(`Unsupported selection type "${i.type}" for WebGL conditional encoding.`,this.unitView)}let oe=e=>{let{param:t,empty:n}=e;if(e.type!==`interval`)return`(${cs}${t}() || (${n} && ${ls}${t}()))`;let r=e.projections.map(e=>{let n=ss+t+`_${e.component}`,r=n+`[0]`,i=n+`[1]`,a=ne(e.input),o=e.secondaryInput?ne(e.secondaryInput):void 0,{largeHp:s}=$(this.unitView.getScaleResolution(e.component).getScale(),e.component),c=(e,t)=>s?`selectionLeq(${e}, ${t})`:`${e} <= ${t}`,l=(e,t)=>s?`selectionLt(${e}, ${t})`:`${e} < ${t}`,u=e=>`(${c(r,e)} && ${l(e,i)})`,d=o===void 0?a:s?`(${c(a,o)} ? ${a} : ${o})`:`min(${a}, ${o})`,f=o===void 0?a:s?`(${c(a,o)} ? ${o} : ${a})`:`max(${a}, ${o})`;return o===void 0?u(a):e.hitTest===`endpoints`?`(${u(a)} || ${u(o)})`:e.hitTest===`encloses`?`(${c(r,d)} && ${c(f,i)})`:`(${l(r,f)} && ${l(d,i)})`}),i=`!${ls}${t}()`;return`((${i} && ${r.join(` && `)}) || (${n} && !${i}))`},se=(e,t,n,r)=>{let i=t.channelDef;if(u(i))if(h(i.value)){let{uniformName:t,uniformGlsl:r,accessorGlsl:a,adjuster:o}=hs(e,n);v.push(a),x.push(r),this.#e.push(()=>{this.registerMarkUniformValue(t,i.value,o)})}else v.push(ms(e,n,i.value).accessorGlsl);else if(re(i)){let{uniformName:t,uniformGlsl:a,accessorGlsl:o}=_s(e,r,n);x.push(a),v.push(o);let{largeHp:s,discrete:c}=$(r,e),l=c&&`domain`in r?e=>r.domain().indexOf(e):s?Os:e=>+e;this.#e.push(()=>{this.registerMarkUniformValue(t,i.datum,l)})}else if(ee(i)){let t=b.get([i.field,!0]),{attributeGlsl:a,accessorGlsl:o}=gs(e,r,n,t?.includes(e)?t:void 0);y.add(a),v.push(o)}else if(te(i)){let{attributeGlsl:t,accessorGlsl:i}=gs(e,r,n);y.add(t),v.push(i)}else throw new Se(`Unsupported channel definition: ${JSON.stringify(i)}`,this.unitView)};for(let[e,t]of Object.entries(f)){if(!l.includes(e))continue;let{branches:n,channelDef:r,scale:i}=t;for(let t=0;t<n.length;t++)se(e,n[t].accessor,t,i);if(i){let t=ce(r),n=t&&t.resolutionChannel||e,a=ue(n)?this.unitView.getScaleResolution(n):null,{glsl:o,domainUniform:s,domainUniformName:c,rangeUniform:l,rangeUniformName:u}=vs(e,i,r);v.push(o),x.push(s),x.push(l),l&&this.#e.push(()=>{let t=this.createMarkUniformSetter(u),n=()=>t(Ps(i,e));this.registerScaleResolutionListener(a,`range`,n),n()}),s&&this.#e.push(()=>{let e=this.createMarkUniformSetter(c),t=()=>{let t;t=he(i.type)?[0,i.domain().length]:S(i.type)?ds(i):i.domain(),e(be(i.type)?As(t):t)};this.registerScaleResolutionListener(a,`domain`,t),t()})}v.push(ys(e,n,oe))}let le=ie.map(e=>bs(o(e),oe));if(v.push(`bool isDatumSelected() {
`+(this.encoders.uniqueId&&le.length>0?`    return ${le.join(` || `)};`:`    return false;`)+`
}`),p){let e=bs(p.predicate.selection,oe);v.push(`bool isOrderMatch() {
    return ${e};\n}`)}let de=`precision highp float;
precision highp int;`,fe=e=>e.replace(`#pragma markUniforms`,x.join(`
`));s=s.map(fe),i=fe(i),a=fe(a),i=(e=>Nc(e,p?`    if (uOrderMode != 0 &&
        (((uOrderMode & 3) == 1) != isOrderMatch())) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }`:``))(i);let pe=[de,_,...s,Cc,wc,[...y].join(`
`),...v,Tc,Ec,i],C=[de,_,...s,Cc,Dc,a],me=this.gl;this.programStatus=Gs(me,this.glHelper.compileShader(me.VERTEX_SHADER,pe),this.glHelper.compileShader(me.FRAGMENT_SHADER,C))}finalizeGraphicsInitialization(){if(this.#n(),this.programInfo)return;if(!this.programStatus)throw Error(`No program status found! `+this.unitView.getPathString());let e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);let t=Error(`Cannot create shader program: `+e.message);throw t.view=this.unitView,t}this.programInfo=oo(this.gl,this.programStatus.program),delete this.programStatus,this.viewUniformInfo=$a(this.gl,this.programInfo,`View`),this.markUniformInfo=$a(this.gl,this.programInfo,`Mark`),this.gl.useProgram(this.programInfo.program),q(this.programInfo,{uSampleFacet:[0,1],uZero:0});for(let e of this.#e)e();this.#e=void 0}createMarkUniformSetter(e){let t=this.markUniformInfo.setters[e];if(!t)throw Error(`Uniform "${e}" not found int the Mark block!`);return e=>{t(e),this.markUniformsAltered=!0,this.unitView.context.animator.requestRender()}}registerMarkUniformValue(e,t,n=e=>e){let r=this.createMarkUniformSetter(e),i=n=>{if(n==null)throw Error(`Trying to set null/undefined value for uniform: ${e}${h(t)?`Expr: ${t.expr}`:``}`);r(n)};if(h(t)){let e,r=()=>i(n(e(null)));e=this.unitView.paramRuntime.watchExpression(t.expr,r),r()}else i(n(t))}deleteGraphicsData(){let e=this.gl;this.vertexArrayInfo&&=(this.gl.bindVertexArray(null),e.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject),void 0),this.bufferInfo&&=(Object.values(this.bufferInfo.attribs).forEach(e=>this.gl.deleteBuffer(e.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),void 0)}registerScaleResolutionListener(e,t,n){e.addEventListener(t,n),this.scaleResolutionDisposers.push(()=>e.removeEventListener(t,n))}dispose(){if(this.#t)return;this.#t=!0;for(let e of this.scaleResolutionDisposers)e();this.scaleResolutionDisposers.length=0,this.deleteGraphicsData(),this.viewUniformInfo&&=(this.gl.deleteBuffer(this.viewUniformInfo.buffer),void 0),this.markUniformInfo&&=(this.gl.deleteBuffer(this.markUniformInfo.buffer),void 0);let e=this.programInfo?.program??this.programStatus?.program;e&&this.gl.deleteProgram(e),this.programInfo=void 0,this.programStatus=void 0}#n(){if(this.#t)throw Error(`WebGL mark resources have been disposed.`)}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.vertexCount<=this.bufferInfo.allocatedVertices)for(let[t,n]of Object.entries(e.arrays))n.data&&kt(this.gl,this.bufferInfo.attribs[t],n.data,0);else{this.deleteGraphicsData(),this.bufferInfo=Nt(this.gl,e.arrays,{numElements:e.vertexCount}),this.bufferInfo.allocatedVertices=e.allocatedVertices;for(let[t,n]of Object.entries(e.arrays))this.bytesPerElement.set(t,n.data.BYTES_PER_ELEMENT)}}get glHelper(){return this._glHelper}get rendererResources(){if(!this._rendererResources)throw Error(`WebGL renderer resources are not available.`);return this._rendererResources}get gl(){return this.glHelper.gl}isReady(){return!!(this.bufferInfo&&this.programInfo)}isPickingParticipant(){return this.mark.isPickingParticipant()}getDebugState(){return{markUniformsAltered:this.markUniformsAltered,vertexCount:this.bufferInfo?.numElements,allocatedVertices:this.bufferInfo?.allocatedVertices,rangeCount:this.rangeMap.size}}bindOrSetMarkUniformBlock(){this.markUniformsAltered?(to(this.gl,this.programInfo,this.markUniformInfo),this.markUniformsAltered=!1):eo(this.gl,this.programInfo,this.markUniformInfo)}setOrderPass(e,t=!1){no(this.markUniformInfo,{uOrderMode:Mc[e]|(t?4:0)}),this.markUniformsAltered=!0}prepareRender(e){let t=this.glHelper,n=this.gl,r=[];r.push(()=>{this.vertexArrayInfo||=zo(this.gl,this.programInfo,this.bufferInfo),n.useProgram(this.programInfo.program)});for(let[e,n]of Object.entries(this.encoders)){let i=t.rangeTextures.get(n.scale);i&&r.push(()=>q(this.programInfo,{[os+e]:i}))}r.push(...this.selectionTextureOps),this.getSampleFacetMode()==Ac&&r.push(()=>{let t=e.placement?.source;if(!t)throw Error(`No placement source available.`);q(this.programInfo,{uSampleFacetTexture:this.glHelper.getPlacementTexture(t)})});let i=(e.picking??!1)&&this.isPickingParticipant();return r.push(()=>no(this.viewUniformInfo,{uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:i})),this.opaque||e.picking?r.push(()=>n.disable(n.BLEND)):r.push(()=>n.enable(n.BLEND)),r}prepareSampleFacetRendering(e){let t=e.sampleFacetRenderingOptions,n=this.programInfo.uniformSetters.uSampleFacet;if(t&&n){let e=t.pixelToUnit,r=t.locSize.location*e,i=t.locSize.size*e;if(r>1||r+i<0)return!1;this.gl.uniform2f(n.location,r,i)}return!0}render(e){}createRenderCallback(e,t){if(!this.bufferInfo)return()=>void 0;let n=this,r=t.orderPass,i=r?(i,a)=>{n.setOrderPass(r,t.secondOrderPass),n.bindOrSetMarkUniformBlock(),e(i,a)}:e,a,o=this.unitView.getScaleResolution(`x`)?.getScale(),s=o&&C(o.type),c=[`index`,`locus`].includes(o?.type)?-1:0,l=[0,0];a=e=>{if(s&&e.xIndex){let t=o.domain(),n=Math.abs(t[1]-t[0]),r=e.xIndex(t[0]+c-n,t[1]+n,l),a=r[0],s=r[1]-a;s>0&&i(a,s)}else i(e.offset,e.count)};let u=this.rangeMap.get(void 0).count==0?t.facetId:void 0,d=this.rangeMap.get(u);return t.sampleFacetRenderingOptions?function(){d.count&&n.prepareSampleFacetRendering(t)&&a(d)}:function(){d.count&&a(d)}}setViewport(e,t,n,r,i,a=je){n=n.flatten();let o=this.gl,s=this.properties,c=a,l=a,u,d=Ic(e,n,s.clip===`never`?void 0:r,!1),f=d.coords;if(d.requiresScissor){if(!f.isDefined())return!1;let r=[f.x,e.height-f.y2,f.width,f.height].map(e=>e*t),i=r.map(e=>Math.floor(e)),a=r[0]-i[0],s=r[1]-i[1];o.viewport(...i),o.scissor(...i),o.enable(o.SCISSOR_TEST),u={uViewOffset:[(n.x-f.x+c+a/t)/f.width,(f.y2-n.y2-l+s/t)/f.height],uViewScale:[n.width/f.width,n.height/f.height]}}else{if(!n.isDefined())return!1;o.viewport(0,0,Math.round(e.width*t),Math.round(e.height*t)),o.disable(o.SCISSOR_TEST),u={uViewOffset:[(n.x+c)/e.width,(e.height-n.y-l-n.height)/e.height],uViewScale:[n.width/e.width,n.height/e.height]}}return no(this.viewUniformInfo,{...u,uViewportSize:[n.width,n.height],uLogicalVisibleRect:Lc(n,i),uCullByVisibleRange:[+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`x`),+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`y`)],uDevicePixelRatio:t}),to(this.gl,this.programInfo,this.viewUniformInfo),!0}},Fc=class extends l{constructor(){super([],JSON.stringify)}get(e){let t=super.get(e);return t===void 0&&(t={offset:0,count:0,xIndex:void 0},super.set(e,t)),t}migrateEntries(e){for(let[t,n]of this.entries())e.has(t)||(n.offset=0,n.count=0,n.xIndex=void 0);for(let[t,n]of e.entries())Object.assign(this.get(t),n)}};function Ic(e,t,n,r=!0){if(!n||!n.clipX&&!n.clipY)return{requiresScissor:!1,coords:t};let i=r?t.intersect(n.rect):n.rect;return n.clipX||(i=i.modify({x:0,width:e.width})),n.clipY||(i=i.modify({y:0,height:e.height})),{requiresScissor:!0,coords:i.flatten()}}function Lc(e,t){let n=t?.clipX?(t.rect.x-e.x)/e.width:0,r=t?.clipX?(t.rect.x2-e.x)/e.width:1;return[n,t?.clipY?(e.y2-t.rect.y2)/e.height:0,r,t?.clipY?(e.y2-t.rect.y)/e.height:1]}var Rc=Math.PI/180,zc=1e-6,Bc=1,Vc=90,Hc=[`triangle`,`open`],Uc=[`inside`,`outside`],Wc=class extends Pc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`,`size`,`direction`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(sc,cc,[lc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uHeadSlope`,e.headAngle,Kc),this.registerMarkUniformValue(`uHeadNotchSlope`,e.headNotchAngle,Kc),this.registerMarkUniformValue(`uHeadShape`,e.headShape,e=>Gc(Hc,e)),this.registerMarkUniformValue(`uMinSize`,e.minSize),this.registerMarkUniformValue(`uHeadWidth`,e.headWidth),this.registerMarkUniformValue(`uStartNotch`,e.startNotch),this.registerMarkUniformValue(`uMinStemLength`,e.minStemLength),this.registerMarkUniformValue(`uHeadSpacing`,e.headSpacing??-1,qc),this.registerMarkUniformValue(`uStem`,e.stem),this.registerMarkUniformValue(`uHeadPlacement`,e.headPlacement,e=>Gc(Uc,e))}updateGraphicsData(e){let t=e.getItemCount(),n=new yc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{lo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}};function Gc(e,t){let n=e.indexOf(t);if(n<0)throw Error(`Unsupported arrow mark value: ${t}`);return n}function Kc(e){return Math.max(Math.tan(Math.min(Math.max(e,Bc),Vc)*Rc),zc)}function qc(e){return e??-1}var Jc=`flat out vec4 vColor;

/** Stroke width */
flat out float vSize;

/** The distance from the line center to the direction of normal in pixels */
out float vNormalLengthInPixels;

flat out float vGamma;

// Centerline distance from the rendered endpoint baseline; negative disables fading.
out float vFadeDistance;

const int SHAPE_ARC = 0;
const int SHAPE_DOME = 1;
const int SHAPE_DIAGONAL = 2;
const int SHAPE_LINE = 3;
const int ORIENT_VERTICAL = 0;
const int ORIENT_HORIZONTAL = 1;

float distanceFromLine(vec2 pointOnLine1, vec2 pointOnLine2, vec2 point) {
    vec2 a = point - pointOnLine1;
    vec2 b = pointOnLine2 - pointOnLine1;
    vec2 proj = dot(a, b) / dot(b, b) * b;
    return length(a - proj);
}

bool isInsideViewport(vec2 point, float marginFactor) {
    vec2 margin = uViewportSize * vec2(marginFactor);
    return point.x >= -margin.x
        && point.x <= uViewportSize.x + margin.x
        && point.y >= -margin.y
        && point.y <= uViewportSize.y + margin.y;
}

float inverseSmoothstep(float t) {
    t = clamp(t, 0.0, 1.0);
    // The chord-axis coordinate of ARC/DOME follows the smoothstep curve.
    return 0.5 - sin(asin(1.0 - 2.0 * t) / 3.0);
}

/**
 * Remaps the parameter t to concentrate vertices to the part that is visible in the viewport.
 * This keeps the tightly bent endpoints smooth even when zooming in very close.
 */
float remapVisibleChordParameter(
    float stripT,
    float chordStart,
    float chordEnd,
    float viewportLength
) {
    // Concentrate samples in the viewport-visible chord interval without dropping the rest.
    float chordMin = min(chordStart, chordEnd);
    float chordMax = max(chordStart, chordEnd);
    float chordSpan = chordMax - chordMin;

    if (chordSpan <= 0.0) {
        return 0.0;
    }

    float visibleChordMin = max(chordMin, 0.0);
    float visibleChordMax = min(chordMax, viewportLength);

    if (visibleChordMax <= visibleChordMin) {
        return stripT;
    }

    float visibleTMin = inverseSmoothstep((visibleChordMin - chordMin) / chordSpan);
    float visibleTMax = inverseSmoothstep((visibleChordMax - chordMin) / chordSpan);
    float visibleTSpan = visibleTMax - visibleTMin;
    float offscreenTSpan = visibleTMin + (1.0 - visibleTMax);

    if (offscreenTSpan <= 0.0) {
        return stripT;
    }

    float visibleShare = clamp(0.75 + (1.0 - visibleTSpan) * 0.2, 0.75, 0.95);
    float offscreenShare = 1.0 - visibleShare;
    float leftShare = offscreenShare * visibleTMin / offscreenTSpan;
    float rightShare = offscreenShare * (1.0 - visibleTMax) / offscreenTSpan;

    if (stripT <= leftShare) {
        return leftShare > 0.0 ? mix(0.0, visibleTMin, stripT / leftShare) : visibleTMin;
    }

    float visibleStart = leftShare;
    float visibleEnd = visibleStart + visibleShare;

    if (stripT <= visibleEnd) {
        return visibleShare > 0.0
            ? mix(visibleTMin, visibleTMax, (stripT - visibleStart) / visibleShare)
            : visibleTMin;
    }

    return rightShare > 0.0
        ? mix(visibleTMax, 1.0, (stripT - visibleEnd) / rightShare)
        : visibleTMax;
}

void clampChordToViewport(inout vec2 p1, inout vec2 p4, inout float chordLength) {
    if (chordLength > uMaxChordLength) {
        vec2 chordVector = p4 - p1;
        vec2 unitChordVector = normalize(chordVector);

        if (isInsideViewport(p1, 2.0)) {
            chordLength = uMaxChordLength;
            p4 = p1 + unitChordVector * uMaxChordLength;
        } else if (isInsideViewport(p4, 2.0)) {
            chordLength = uMaxChordLength;
            p1 = p4 - unitChordVector * uMaxChordLength;
        }
    }
}

void clampDomeApex(inout vec2 p1, inout vec2 p4, int orient) {
    if (orient == ORIENT_VERTICAL) {
        if (p4.x > 0.0) {
            p1.x = max(p1.x, -p4.x);
        }
        if (p1.x < uViewportSize.x) {
            p4.x = min(p4.x, 2.0 * uViewportSize.x - p1.x);
        }
    } else {
        if (p4.y > 0.0) {
            p1.y = max(p1.y, -p4.y);
        }
        if (p1.y < uViewportSize.y) {
            p4.y = min(p4.y, 2.0 * uViewportSize.y - p1.y);
        }
    }
}

void main(void) {
#pragma orderGuard

    float pixelSize = 1.0 / uDevicePixelRatio;
    float opacity = getScaled_opacity() * uViewOpacity;

    // The bezier's control points
    vec2 p1, p2, p3, p4;

    vec2 a = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    ) * uViewportSize;
    vec2 b = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    ) * uViewportSize;

    if (uShape <= SHAPE_DOME) {
        if (uShape == SHAPE_DOME) {
            vec2 height = vec2(0.0);
            if (uOrient == ORIENT_VERTICAL) {
                p1 = vec2(min(a.x, b.x), b.y);
                p4 = vec2(max(a.x, b.x), b.y);
                height = vec2(0.0, a.y - b.y);

                float chordLength = length(p4 - p1);
                clampChordToViewport(p1, p4, chordLength);
                if (uClampApex) {
                    clampDomeApex(p1, p4, ORIENT_VERTICAL);
                }

            } else {
                p1 = vec2(b.x, min(a.y, b.y));
                p4 = vec2(b.x, max(a.y, b.y));
                height = vec2(a.x - b.x, 0.0);

                float chordLength = length(p4 - p1);
                clampChordToViewport(p1, p4, chordLength);
                if (uClampApex) {
                    clampDomeApex(p1, p4, ORIENT_HORIZONTAL);
                }
            }

            vec2 controlOffset = height / 0.75;
            p2 = p1 + controlOffset;
            p3 = p4 + controlOffset;

        } if (uShape == SHAPE_ARC) {
            p1 = a;
            p4 = b;

            vec2 chordVector = p4 - p1;
            vec2 unitChordVector = normalize(chordVector);
            vec2 chordNormal = vec2(-unitChordVector.y, unitChordVector.x);
            float chordLength = length(chordVector);
            clampChordToViewport(p1, p4, chordLength);

            float height = max(
                chordLength / 2.0 * uArcHeightFactor,
                uMinArcHeight
            );

            // This is a bit poor approximation of a circular arc, but it's probably enough for most purposes.
            // TODO: Consider a more sophisticated approach: https://stackoverflow.com/a/44829356/1547896
            vec2 controlOffset = chordNormal * height / 0.75;
            p2 = p1 + controlOffset;
            p3 = p4 + controlOffset;
        }

    } else if (uShape == SHAPE_DIAGONAL) {
        if (uOrient == ORIENT_VERTICAL) {
            p1 = a;
            p2 = vec2(a.x, (a.y + b.y) / 2.0);
            p3 = vec2(b.x, (a.y + b.y) / 2.0);
            p4 = b;
        } else {
            p1 = a;
            p2 = vec2((a.x + b.x) / 2.0, a.y);
            p3 = vec2((a.x + b.x) / 2.0, b.y);
            p4 = b;
        }
    } else if (uShape == SHAPE_LINE) {
        p1 = a;
        p2 = (a + b) / 2.0;
        p3 = p2;
        p4 = b;
    }

    vec2 strip = vec2(
        float(gl_VertexID / 2) / float(uSegmentBreaks),
        float(gl_VertexID % 2) - 0.5
    );

    float t = strip.x;

    if (uShape == SHAPE_DOME) {
        if (uOrient == ORIENT_VERTICAL) {
            t = remapVisibleChordParameter(strip.x, p1.x, p4.x, uViewportSize.x);
        } else {
            t = remapVisibleChordParameter(strip.x, p1.y, p4.y, uViewportSize.y);
        }
    } else if (uShape == SHAPE_ARC) {
        if (a.y == b.y) {
            t = remapVisibleChordParameter(strip.x, p1.x, p4.x, uViewportSize.x);
        } else if (a.x == b.x) {
            t = remapVisibleChordParameter(strip.x, p1.y, p4.y, uViewportSize.y);
        }
    }

    vec2 p;
    vec2 tangent;

    // de Casteljau evaluation keeps the cubic stable for long chords.
    vec2 q1 = mix(p1, p2, t);
    vec2 q2 = mix(p2, p3, t);
    vec2 q3 = mix(p3, p4, t);

    vec2 r1 = mix(q1, q2, t);
    vec2 r2 = mix(q2, q3, t);

    p = mix(r1, r2, t);
    tangent = 3.0 * (r2 - r1);

    tangent = normalize(tangent);
    vec2 normal = vec2(-tangent.y, tangent.x);

    float size = getScaled_size();

    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively
    if (size < pixelSize) {
        opacity *= size / pixelSize;
        size = pixelSize;
    }

    // Handle minimum picking size or add an extra pixel to the stroke width to accommodate edge antialiasing
    float paddedSize = uPickingEnabled
        ? max(size, uMinPickingSize)
        : size + pixelSize;

    vNormalLengthInPixels = strip.y * paddedSize;
    
    vFadeDistance = -1.0;
    if ((uShape == SHAPE_ARC || uShape == SHAPE_DOME) &&
        uArcFadingDistance[0] > 0.0 &&
        uArcFadingDistance[1] > 0.0
#ifdef CONDITIONAL_ORDER
        && (!uNoFadingOnSecondPass || (uOrderMode & 4) == 0)
#endif
        )
    {
        vFadeDistance = distanceFromLine(p1, p4, p);
        // Keep fully faded triangles collapsed to avoid fragment processing.
        if (1.0 - smoothstep(uArcFadingDistance[0], uArcFadingDistance[1], vFadeDistance) <= 0.0) {
            vNormalLengthInPixels = 0.0;
        }
    }

    // Extrude
    p += normal * vNormalLengthInPixels;

    gl_Position = pixelsToNdc(p);

    vec3 color = getScaled_color();

    vColor = vec4(color * opacity, opacity);

    vGamma = getGammaForColor(color);

    vSize = paddedSize;

    setupPicking();
}
`,Yc=`flat in vec4 vColor;
flat in float vSize;
in float vNormalLengthInPixels;
flat in float vGamma;
in float vFadeDistance;

out lowp vec4 fragColor;

void main(void) {
    float dpr = uDevicePixelRatio;

    float distance = abs(vNormalLengthInPixels);
    float opacity = clamp(((vSize / 2.0 - distance) * dpr), 0.0, 1.0);

    opacity = pow(opacity, vGamma);

    if (vFadeDistance >= 0.0) {
        opacity *= 1.0 - smoothstep(uArcFadingDistance[0], uArcFadingDistance[1], vFadeDistance);
    }
    if (opacity <= 0.0) {
        discard;
    }

    fragColor = vColor * opacity;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`,Xc=`layout(std140) uniform Mark {
    uniform float uArcHeightFactor;

    /** Make very small arcs visible */
    uniform float uMinArcHeight;

    /** The minimum stroke width in pixels when rendering into the picking buffer */
    uniform float uMinPickingSize;

    uniform int uShape;
    uniform int uOrient;
    uniform bool uClampApex;

    // In pixels
    uniform float uMaxChordLength;
    // In pixels
    uniform vec2 uArcFadingDistance;
    uniform bool uNoFadingOnSecondPass;

    uniform int uSegmentBreaks;

#pragma markUniforms
};
`,Zc=[`arc`,`dome`,`diagonal`,`line`],Qc=[`vertical`,`horizontal`],$c=class extends Pc{constructor(e,t,n){super(e,t,n),this._baseInstanceExt=void 0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics(),this._baseInstanceExt=this.gl.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),this.createAndLinkShaders(Jc,Yc,[Xc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uArcFadingDistance`,e.arcFadingDistance,e=>e||[0,0]),this.registerMarkUniformValue(`uArcHeightFactor`,e.arcHeightFactor),this.registerMarkUniformValue(`uMinArcHeight`,e.minArcHeight),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize),this.registerMarkUniformValue(`uShape`,e.linkShape,e=>Zc.indexOf(e)),this.registerMarkUniformValue(`uOrient`,e.orient,e=>Qc.indexOf(e)),this.registerMarkUniformValue(`uClampApex`,e.clampApex,e=>!!e),this.registerMarkUniformValue(`uMaxChordLength`,e.maxChordLength),this.registerMarkUniformValue(`uSegmentBreaks`,e.segments,e=>e),this.registerMarkUniformValue(`uNoFadingOnSecondPass`,e.noFadingOnSecondPass,e=>!!e)}updateGraphicsData(e){let t=e.getItemCount(),n=new xc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.arrays=Object.fromEntries(Object.entries(r.arrays).map(([e,t])=>[e,{...t,data:void 0}])),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),this._baseInstanceExt?t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)):t.push(()=>this.gl.bindVertexArray(null)),t}render(e){let t=this.gl,n=()=>(this.markUniformInfo.uniforms.uSegmentBreaks[0]+1)*2;return this._baseInstanceExt?this.createRenderCallback((e,r)=>{this._baseInstanceExt.drawArraysInstancedBaseInstanceWEBGL(t.TRIANGLE_STRIP,0,n(),r,e)},e):this.createRenderCallback((e,r)=>{for(let t of Object.entries(this.bufferInfo.attribs)){let[n,r]=t;r.buffer&&r.numComponents&&r.divisor&&(r.offset=e*this.arrays[n].numComponents*this.bytesPerElement.get(n))}J(t,this.programInfo,this.bufferInfo),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,n(),r)},e)}},el=`flat out float vRadius;
flat out float vRadiusWithPadding;
flat out lowp vec4 vFillColor;
flat out lowp vec4 vStrokeColor;
flat out lowp float vShape;
flat out lowp float vHalfStrokeWidth;
flat out mat2 vRotationMatrix;

// Copypaste from fragment shader
const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float CROSS = 2.0;
const float DIAMOND = 3.0;
const float TRIANGLE_UP = 4.0;
const float TRIANGLE_RIGHT = 5.0;
const float TRIANGLE_DOWN = 6.0;
const float TRIANGLE_LEFT = 7.0;
const float TICK_UP = 8.0;
const float TICK_RIGHT = 9.0;
const float TICK_DOWN = 10.0;
const float TICK_LEFT = 11.0;
const float X = 12.0;
const float PLUS = 13.0;

float computeSemanticThresholdFactor() {
    // TODO: add smooth transition
    return getScaled_semanticScore() >= uSemanticThreshold ? 1.0 : 0.0;
}

// TODO: Move this into common.glsl or something
vec2 getDxDy() {
#if defined(dx_DEFINED) || defined(dy_DEFINED)
    return vec2(getScaled_dx(), getScaled_dy()) / uViewportSize;
#else
    return vec2(0.0, 0.0);
#endif
}

void main(void) {
#pragma orderGuard

    float shapeAngle = 0.0;

    // Selected points should always be visible
    float semanticThresholdFactor = isDatumSelected()
        ? 1.0
        : computeSemanticThresholdFactor();

    if (semanticThresholdFactor <= 0.0) {
        gl_PointSize = 0.0;
        // Place the vertex outside the viewport. The default (0, 0) makes this super-slow
        // on Apple Silicon. Probably related to the tile-based GPU architecture.
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        // Exit early. MAY prevent some unnecessary calculations.
        return;
    }

    float size = getScaled_size();
    vec2 pos = vec2(getScaled_x(), getScaled_y()) + getDxDy();
    vec2 facetedPos = applyOffset(
        applySampleFacet(pos),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );

#ifdef VISIBLE_RANGE_CULLING
    if (isOutsideVisibleRange(facetedPos)) {
        gl_PointSize = 0.0;
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }
#endif

    gl_Position = unitToNdc(facetedPos);

    float strokeWidth = getScaled_strokeWidth();
    float strokeOpacity = getScaled_strokeOpacity();
    vShape = getScaled_shape();

    // Line-only shapes use their width even when the stroke falls back to the
    // fill color. An invisible stroke must not inset other filled shapes.
    if (strokeOpacity <= 0.0 && vShape != X && vShape != PLUS) {
        strokeWidth = 0.0;
    }

    float diameter = sqrt(size) *
        uScaleFactor *
        semanticThresholdFactor;

    // Clamp minimum size and adjust opacity instead. Yields more pleasing result,
    // no flickering etc.
    float opacity = uViewOpacity;
	if (strokeWidth <= 0.0 || uInwardStroke) {
		float minDiameter = 1.0 / uDevicePixelRatio;
		if (diameter < minDiameter) {
			// We do some "cheap" gamma correction here. It breaks on dark background, though.
			// First we take a square of the size and then apply "gamma" of 1.5.
			opacity *= pow(diameter / minDiameter, 2.5);
			diameter = minDiameter;
		}
	}

	float fillOpa = getScaled_fillOpacity() * opacity;
	float strokeOpa = strokeOpacity * opacity;

	// Circle doesn't have sharp corners. Do some special optimizations to minimize the point size.
	bool circle = vShape == 0.0;

    if (vShape > TICK_UP && vShape <= TICK_LEFT) {
        shapeAngle = (vShape - TICK_UP) * 90.0;
        vShape = TICK_UP;
    } else if (vShape > TRIANGLE_UP && vShape <= TRIANGLE_LEFT) {
        shapeAngle = (vShape - TRIANGLE_UP) * 90.0;
        vShape = TRIANGLE_UP;
    } else if (vShape == X) {
        // The x shape reuses the perpendicular stroke geometry of plus.
        shapeAngle = -45.0;
    }

	float angleInDegrees = getScaled_angle();
	float angle = -(shapeAngle + angleInDegrees) * PI / 180.0;
    float sinTheta = sin(angle);
    float cosTheta = cos(angle);
    vRotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);

    // Not needed if we would draw rotated quads instead of gl.POINTS
	float roomForRotation = circle ? 1.0 : sin(mod(angle, PI / 2.0) + PI / 4.0) / sin(PI / 4.0);

	float aaPadding = 1.0 / uDevicePixelRatio;
	float rotationPadding = (diameter * roomForRotation) - diameter;
	// sqrt(3.0) ensures that the angles of equilateral triangles have enough room
	float strokePadding = uInwardStroke ? 0.0 : strokeWidth * (circle ? 1.0 : sqrt(3.0));
	float padding = rotationPadding + strokePadding + aaPadding;

    gl_PointSize = max(
        (diameter + padding),
        uPickingEnabled ? uMinPickingSize : 0.0
    ) * uDevicePixelRatio;

	vRadius = diameter / 2.0;
	vRadiusWithPadding = vRadius + padding / 2.0;

    vHalfStrokeWidth = strokeWidth / 2.0;

    vFillColor = vec4(getScaled_fill() * fillOpa, fillOpa);
    vStrokeColor = vec4(getScaled_stroke() * strokeOpa, strokeOpa);

    setupPicking();
}
`,tl=`const lowp vec4 white = vec4(1.0);
const lowp vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

flat in float vRadius;
flat in float vRadiusWithPadding;

flat in lowp vec4 vFillColor;
flat in lowp vec4 vStrokeColor;
flat in lowp float vShape;
flat in lowp float vHalfStrokeWidth;

flat in mat2 vRotationMatrix;

out lowp vec4 fragColor;

// Copypaste from vertex shader
const float CIRCLE = 0.0;
const float SQUARE = 1.0;
const float CROSS = 2.0;
const float DIAMOND = 3.0;
const float TRIANGLE_UP = 4.0;
const float TICK_UP = 8.0;
const float X = 12.0;
const float PLUS = 13.0;

// The distance functions are inspired by:
// http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
// However, these are not true distance functions, because the corners need to be sharp.

float circle(vec2 p, float r) {
    return length(p) - r;
}

float square(vec2 p, float r) {
    p = abs(p);
    return max(p.x, p.y) - r;
}

float tickUp(vec2 p, float r) {
    float halfR = r * 0.5;
    p.y += halfR;
    p = abs(p);
    return max(p.x - r * 0.15, p.y - halfR);
}

float equilateralTriangle(vec2 p, float r) {
    p.y = -p.y;
    float k = sqrt(3.0);
    float kr = k * r;
    p.y -= kr / 2.0;
    return max((abs(p.x) * k + p.y) / 2.0, -p.y - kr);
}

float crossShape(vec2 p, float r, float armHalfWidth) {
    p = abs(p);

    vec2 b = vec2(armHalfWidth, r);
    vec2 v = abs(p) - b.xy;
    vec2 h = abs(p) - b.yx;
    return min(max(v.x, v.y), max(h.x, h.y));
}

float diamond(vec2 p, float r) {
    p = abs(p);
    return (max(abs(p.x - p.y), abs(p.x + p.y)) - r) / sqrt(2.0);
}

void main() {
    float d;
    bool lineShape = false;

	/** Normalized point coord */
    vec2 p = vRotationMatrix * (2.0 * gl_PointCoord - 1.0) * vRadiusWithPadding;
    float r = vRadius;

    // We could also use textures here. Could even be faster, because we have plenty of branching here.
    if (vShape == CIRCLE) {
        d = circle(p, r);

    } else if (vShape == SQUARE) {
        d = square(p, r);

    } else if (vShape == CROSS) {
        d = crossShape(p, r, r * 0.4);

    } else if (vShape == DIAMOND) {
        d = diamond(p, r);

    } else if (vShape == TRIANGLE_UP) {
        d = equilateralTriangle(p, r);

    } else if (vShape == TICK_UP) {
        d = tickUp(p, r);

    } else if (vShape == X || vShape == PLUS) {
        float lineLength = vShape == X ? r * sqrt(2.0) : r;
        d = crossShape(p, lineLength, vHalfStrokeWidth);
        lineShape = true;

    } else {
        d = 0.0;
    }

	if (!uPickingEnabled) {
		lowp vec4 fillColor = lineShape
            ? (vStrokeColor.a > 0.0 ? vStrokeColor : vFillColor)
            : mix(vFillColor, white, -d * uGradientStrength / vRadius);

		fragColor = distanceToColor(
			d + (!lineShape && uInwardStroke ? vHalfStrokeWidth : 0.0),
			fillColor,
			vStrokeColor,
            vec4(0.0),
			lineShape ? 0.0 : vHalfStrokeWidth);

	} else if (d - (lineShape ? 0.0 : vHalfStrokeWidth) <= 0.0) {
        fragColor = vPickingColor;

	} else {
		discard;
    }
}
`,nl=`layout(std140) uniform Mark {
    /**
    * The stroke should only grow inwards, e.g, the diameter/outline is not affected by the stroke width.
    * Thus, a point that has a zero size has no visible stroke. This allows strokes to be used with
    * geometric zoom, etc.
    */
    uniform bool uInwardStroke;

    /** The minimum point size in pixels when rendering into the picking buffer */
    uniform float uMinPickingSize;

    /** Scale factor for geometric zoom */
    uniform mediump float uScaleFactor;

    uniform mediump float uZoomLevel;
    uniform highp float uSemanticThreshold;

    uniform mediump float uGradientStrength;

#pragma markUniforms
};
`,rl=class extends Pc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`y`,`xOffset`,`yOffset`,`size`,`semanticScore`,`shape`,`strokeWidth`,`dx`,`dy`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(el,tl,[nl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uInwardStroke`,e.inwardStroke,e=>!!e),this.registerMarkUniformValue(`uGradientStrength`,e.fillGradientStrength),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize)}updateGraphicsData(e){let t=e.getItemCount(),n=new bc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}#e(){let e=2**(this.properties.geometricZoomBound||0);return Math.min(1,this.unitView.getZoomLevel()/e)**(1/3)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{no(this.markUniformInfo,{uScaleFactor:this.#e(),uSemanticThreshold:this.mark.getSemanticThreshold()}),this.markUniformsAltered=!0}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{n&&lo(t,this.vertexArrayInfo,t.POINTS,n,e)},e)}},il=`flat out lowp vec4 vFillColor;
flat out lowp vec4 vStrokeColor;
flat out float vHalfStrokeWidth;
flat out vec4 vCornerRadii;

#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
/** Position for SDF-strokes */
out vec2 vPosInPixels;
#endif

/** Size of the rect in pixels */
flat out vec2 vHalfSizeInPixels;

/**
 * Adjusts the vertex position to ensure that the rectangle is at least \`minSpan\`
 * wide or high. Returns a value that reflects the amount of clamping and can be
 * used to adjust the opacity of the rectangle.
 *
 * pos: vertex position
 * frac: vertex position within the rectangle, [0, 1]
 * size: width or height of the rectangle
 * minSize: minimum width or height of the rectangle
 */
float clampMinSize(inout float pos, float frac, float size, float minSize) {
    if (minSize > 0.0 && size < minSize) {
        pos += (frac - 0.5) * (minSize - size);
        return size / minSize;
    }

    return 1.0;
}

void sort(inout float a, inout float b) {
    if (a > b) {
        float tmp = b;
        b = a;
        a = tmp;
    }
}

/**
 * The vertex position wrt the rectangle specified by (x, x2, y, y2).
 * [0, 0] = [x, y], [1, 1] = [x2, y2]. 
 * The x or y component may contain fractional values if the rectangle 
 * have been tessellated.
 */
vec2 getVertexPos() {
    int index = gl_VertexID % 6;
    return vec2(
        index == 0 || index == 1 || index == 3 ? 0.0 : 1.0,
        index == 0 || index == 1 || index == 2 ? 0.0 : 1.0
    );
    
}

void main(void) {
#pragma orderGuard

    vec2 frac = getVertexPos();

    vec2 normalizedMinSize = vec2(uMinWidth, uMinHeight) / uViewportSize;
    vec4 cornerRadii = vec4(
        uCornerRadiusTopRight,
        uCornerRadiusBottomRight,
        uCornerRadiusTopLeft,
        uCornerRadiusBottomLeft
    );

    SampleFacetPosition sampleFacetPos = getSampleFacetPos();
    if (sampleFacetPos.height == 0.0) {
        // Filtered samples have no facet height. Cull them before minimum-size
        // clamping can expand their rectangles at the viewport boundary.
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }

    vec2 pos1 = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );
    vec2 pos2 = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    );

    sort(pos1.x, pos2.x);
    sort(pos1.y, pos2.y);

    // Clamp x to prevent precision artifacts when the scale is zoomed very close.
	// TODO: clamp y as well
	float clampMargin = 1.0;
    pos1.x = clamp(pos1.x, 0.0 - clampMargin, 1.0 + clampMargin);
    pos2.x = clamp(pos2.x, 0.0 - clampMargin, 1.0 + clampMargin);

    vec2 size = pos2 - pos1;

    if (size.x < 0.0 || size.y < 0.0) {
        // Keep zero-sized rects alive so min-size clamping can stabilize them.
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    vec2 pos = pos1 + frac * size;

    // Clamp to minimum size, optionally compensate with opacity
    float opaFactor = uViewOpacity * max(uMinOpacity,
        clampMinSize(pos.x, frac.x, size.x, normalizedMinSize.x) *
        clampMinSize(pos.y, frac.y, size.y, normalizedMinSize.y));

    size = max(size, normalizedMinSize);

#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
    // Add an extra pixel to the stroke width to accommodate edge antialiasing
    float aaPadding = 1.0 / uDevicePixelRatio;

    // TODO: Only expand to the offset direction. Now high offsets result in
    // a large expansion in all directions.
    float shadowPadding = uShadowBlur + max(abs(uShadowOffsetX), abs(uShadowOffsetY));

    float strokeWidth = getScaled_strokeWidth();
    float strokeOpacity = getScaled_strokeOpacity() * opaFactor;

    vec2 centeredFrac = frac - 0.5;
    vec2 expand = centeredFrac * (strokeWidth + aaPadding + shadowPadding * 2.0) / uViewportSize;
    pos += expand;

    vec2 sizeInPixels = size * uViewportSize;
    vPosInPixels = (centeredFrac + expand / size) * sizeInPixels;

    vHalfSizeInPixels = sizeInPixels / 2.0;

    vCornerRadii = min(cornerRadii, min(vHalfSizeInPixels.x, vHalfSizeInPixels.y));
    vHalfStrokeWidth = strokeWidth / 2.0;
    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);
#endif

    gl_Position = unitToNdc(pos);

    float fillOpacity = getScaled_fillOpacity() * opaFactor;
    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);

    setupPicking();
}
`,al=`#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
in vec2 vPosInPixels;
#endif

flat in vec2 vHalfSizeInPixels;

flat in lowp vec4 vFillColor;
flat in lowp vec4 vStrokeColor;
flat in float vHalfStrokeWidth;
flat in vec4 vCornerRadii;

out lowp vec4 fragColor;

// ----------------------------------------------------------------------------
// Shadow source: https://madebyevan.com/shaders/fast-rounded-rectangle-shadows/
// License: CC0 (http://creativecommons.org/publicdomain/zero/1.0/)

#ifdef SHADOW

// A standard gaussian function, used for weighting samples
float gaussian(float x, float sigma) {
  const float pi = 3.141592653589793;
  return exp(-(x * x) / (2.0 * sigma * sigma)) / (sqrt(2.0 * pi) * sigma);
}

// This approximates the error function, needed for the gaussian integral
vec2 erf(vec2 x) {
  vec2 s = sign(x), a = abs(x);
  x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
  x *= x;
  return s - s / (x * x);
}

// Return the blurred mask along the x dimension
float roundedBoxShadowX(float x, float y, float sigma, float corner, vec2 halfSize) {
  float delta = min(halfSize.y - corner - abs(y), 0.0);
  float curved = halfSize.x - corner + sqrt(max(0.0, corner * corner - delta * delta));
  vec2 integral = 0.5 + 0.5 * erf((x + vec2(-curved, curved)) * (sqrt(0.5) / sigma));
  return integral.y - integral.x;
}

// Return the mask for the shadow of a box from lower to upper
float roundedBoxShadow(vec2 lower, vec2 upper, vec2 point, float sigma, float corner) {
  // Center everything to make the math easier
  vec2 center = (lower + upper) * 0.5;
  vec2 halfSize = (upper - lower) * 0.5;
  point -= center;

  // The signal is only non-zero in a limited range, so don't waste samples
  float low = point.y - halfSize.y;
  float high = point.y + halfSize.y;
  float start = clamp(-3.0 * sigma, low, high);
  float end = clamp(3.0 * sigma, low, high);

  // Accumulate samples (we can get away with surprisingly few samples)
  float step = (end - start) / 4.0;
  float y = start + step * 0.5;
  float value = 0.0;
  for (int i = 0; i < 4; i++) {
    value += roundedBoxShadowX(point.x, point.y - y, sigma, corner, halfSize) * gaussian(y, sigma) * step;
    y += step;
  }

  return value;
}

// ----------------------------------------------------------------------------

#endif

// Source: https://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
    r.xy = p.x > 0.0 ? r.xy : r.zw;
    r.x  = p.y > 0.0 ? r.x  : r.y;
    vec2 q = abs(p) - b + r.x;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

// Not a true SDF. Makes the corners of strokes sharp and is faster.
float sdSharpBox(vec2 p, vec2 b) {
    vec2 q = abs(p) - b;
    return max(q.x, q.y);
}

float diagonalPattern(vec2 uv, float spacing) {
    // Using 1.5 to approximate sqrt(2.0) to reduce aliasing artifacts.
    float divisor = spacing * vHalfStrokeWidth * 2.0 * 1.5;
    return abs(mod(uv.x - uv.y, divisor) - 0.5 * divisor) / 1.5;
}

float verticalPattern(float x, float spacing) {
    float divisor = spacing * vHalfStrokeWidth * 2.0;
    return abs(mod(x, divisor)) / 2.0;
}

float circle(vec2 p, float r) {
    return length(p) - r;
}

float masonryCirclePattern(vec2 uv, float spacing, float radius) {
    float halfSpacing = 0.5 * spacing;

    float row = floor(uv.y / spacing);
    float shift = mod(row, 2.0) * halfSpacing;

    vec2 shifted = vec2(uv.x + shift, uv.y + halfSpacing);
    vec2 cell = mod(shifted + 0.5 * spacing, spacing) - halfSpacing;

    return abs(circle(cell, radius));
}

/**
 * Patterns:
 * 0  none
 * 1  diagonal (/)
 * 2  antiDiagonal (\\)
 * 3  cross (X)
 * 4  vertical (|)
 * 5  horizontal (-)
 * 6  grid (+)
 * 7  dots (.)
 * 8  rings (o)
 * 9  ringsLarge (O)
 */
float pattern() {
#ifdef STROKED
    int patternType = uHatchPattern;
    vec2 uv = vPosInPixels;
    float spacing = 4.0;

    switch (patternType) {
        case 1:
            return diagonalPattern(vec2(uv.x, -uv.y), spacing);
        case 2:
            return diagonalPattern(uv, spacing);
        case 3:
            return min(
                diagonalPattern(uv, spacing),
                diagonalPattern(vec2(uv.x, -uv.y), spacing)
            );
        case 4:
            return verticalPattern(uv.x, spacing);
        case 5:
            return verticalPattern(uv.y, spacing);
        case 6:
            return min(
                verticalPattern(uv.x, spacing),
                verticalPattern(uv.y, spacing)
            );
        case 7:
        case 8:
        case 9: {
            float spacing = vHalfStrokeWidth * 14.0;
            float radius = spacing * (
                patternType == 8 ? 0.2 :
                patternType == 9 ? 0.35 :
                0.07
            );
            return masonryCirclePattern(uv, spacing, radius);
        }
        default:
            break;
    }
#endif
    return 1.0 / 0.0; // Infinity
}

void main(void) {

#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
#ifdef ROUNDED_CORNERS
    // Distance from rectangle's edge in pixels. Negative inside the rectangle.
    float d = sdRoundedBox(vPosInPixels, vHalfSizeInPixels, vCornerRadii);
#else
    float d = sdSharpBox(vPosInPixels, vHalfSizeInPixels);
#endif

    vec4 backgroundColor = vec4(0.0, 0.0, 0.0, 0.0);

#ifdef SHADOW
    float maxCornerRadius = max(vCornerRadii.x, max(vCornerRadii.y, max(vCornerRadii.z, vCornerRadii.w)));

    float shadow = 0.0;
    // Only calculate shadow for the region outside the stroke.
    if (d >= vHalfStrokeWidth - 1.0 && uShadowOpacity > 0.0) {
        shadow = roundedBoxShadow(
            -vHalfSizeInPixels - vHalfStrokeWidth,
            vHalfSizeInPixels + vHalfStrokeWidth,
            vPosInPixels - vec2(uShadowOffsetX, -uShadowOffsetY),
            max(uShadowBlur / 2.5, 0.25),
            maxCornerRadius + vHalfStrokeWidth
        ) * uShadowOpacity * uViewOpacity;
    }
    backgroundColor = vec4(uShadowColor * shadow, shadow);
#endif

    if (vHalfStrokeWidth > 0.0 && uHatchPattern > 0) {
        d = max(d, -pattern());
    }

    fragColor = distanceToColor(
        d,
        vFillColor,
        vStrokeColor,
        backgroundColor,
        vHalfStrokeWidth
    );

    if (uPickingEnabled) {
        if (d < vHalfStrokeWidth) {
            fragColor = vPickingColor;
        }
    } else if (fragColor.a == 0.0) {
        discard;
    }
#else
    // The trivial, non-decorated case
    fragColor = vFillColor;
    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
#endif
}
`,ol=`layout(std140) uniform Mark {
    /** Minimum size (width, height) of the displayed rectangle in pixels */
    uniform float uMinWidth;
    uniform float uMinHeight;

    /** Minimum opacity for the size clamping */
    uniform float uMinOpacity;

    uniform float uCornerRadiusTopRight;
    uniform float uCornerRadiusBottomRight;
    uniform float uCornerRadiusTopLeft;
    uniform float uCornerRadiusBottomLeft;

    uniform int uHatchPattern;

    uniform vec3 uShadowColor;
    uniform float uShadowOpacity;
    uniform float uShadowBlur;
    uniform float uShadowOffsetX;
    uniform float uShadowOffsetY;

#pragma markUniforms
};
`,sl=[`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`],cl=class extends Pc{get opaque(){return xe(this,`opaque`,()=>!this.#e()&&!this.#t()&&!this.properties.shadowOpacity&&u(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`]}#e(){let e=this.properties;return e.cornerRadius||e.cornerRadiusBottomLeft||e.cornerRadiusBottomRight||e.cornerRadiusTopLeft||e.cornerRadiusTopRight}#t(){let e=this.encoding.strokeWidth;return!(u(e)&&!e.value)||`condition`in e}initializeGraphics(){super.initializeGraphics();let e=[];this.#e()&&e.push(`ROUNDED_CORNERS`),this.#t()&&e.push(`STROKED`),this.properties.shadowOpacity&&e.push(`SHADOW`),this.createAndLinkShaders(il,al,[ol,...e.map(e=>`#define `+e)])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinWidth`,e.minWidth),this.registerMarkUniformValue(`uMinHeight`,e.minHeight),this.registerMarkUniformValue(`uMinOpacity`,e.minOpacity),this.registerMarkUniformValue(`uCornerRadiusTopRight`,e.cornerRadiusTopRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomRight`,e.cornerRadiusBottomRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusTopLeft`,e.cornerRadiusTopLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomLeft`,e.cornerRadiusBottomLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uHatchPattern`,e.hatch,e=>Math.max(0,sl.indexOf(e??`none`))),this.registerMarkUniformValue(`uShadowBlur`,e.shadowBlur??0),this.registerMarkUniformValue(`uShadowOpacity`,e.shadowOpacity??0),this.registerMarkUniformValue(`uShadowOffsetX`,e.shadowOffsetX??0),this.registerMarkUniformValue(`uShadowOffsetY`,e.shadowOffsetY??0),this.registerMarkUniformValue(`uShadowColor`,e.shadowColor??`black`,$o)}updateGraphicsData(e){let t=e.getItemCount(),n=new vc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{lo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}},ll=`// Line caps
const int BUTT = 0;
const int SQUARE = 1;
const int ROUND = 2;

/** Position along the rule */
in float pos;

/** Which side of the stroke: -0.5 or 0.5 */
in float side;

flat out vec4 vColor;

/** Stroke width */
flat out float vSize;

/** The distance from the line center to the direction of normal in pixels */
out float vNormalLengthInPixels;

/** Distances from the line endings. Used for rendering the round caps and dashes */
out highp vec2 vPosInPixels;


void main(void) {
#pragma orderGuard

    float pixelSize = 1.0 / uDevicePixelRatio;

    // Stroke width in pixels
    float size = getScaled_size();
    float opacity = getScaled_opacity() * uViewOpacity;

    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively
    if (size < pixelSize) {
        opacity *= size / pixelSize;
        size = pixelSize;
    }

    vec2 a = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );
    vec2 b = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    );

    vec2 tangent = b - a;

    float offset = 0.0;
    float relativeDiff = 0.0;
    if (uMinLength > 0.0 || uStrokeCap != BUTT) {
        float len = length(tangent * uViewportSize);

        // Elongate to reach the minimum length.
        // The length difference in pixels
        float diff = max(0.0, uMinLength - len);

        // Add line caps
        if (uStrokeCap != BUTT) {
            diff += size;
        }

        relativeDiff = diff / len;
        offset = relativeDiff * (pos - 0.5);
    }

    // Apply caps and minimum length by spreading the vertices along the tangent
    vec2 p = pos < 1.0
        ? a + tangent * (pos + offset)
        : b + tangent * offset;

    // Add an extra pixel to stroke width to accommodate edge antialiasing
    float aaPadding = pixelSize;

    // Extrude
    vec2 normal = normalize(vec2(-tangent.y, tangent.x) / uViewportSize);
    p += normal * side * (size + aaPadding) / uViewportSize;

    gl_Position = unitToNdc(p);

    vColor = vec4(getScaled_color() * opacity, opacity);
    vSize = size;
    vNormalLengthInPixels = side * (size + aaPadding);

    // TODO: Here's a precision problem that breaks round caps when zoomed in enough
    vPosInPixels = vec2(pos, (1.0 - pos)) * (1.0 + relativeDiff) * length(tangent * uViewportSize) -
        vec2(uStrokeCap != BUTT ? size / 2.0 : 0.0);
    
    setupPicking();
}
`,ul=`// Line ending
const int BUTT = 0;
const int SQUARE = 1;
const int ROUND = 2;

uniform sampler2D uDashTexture;

flat in vec4 vColor;
flat in float vSize;

/** Position on the rule along its length in pixels */
in vec2 vPosInPixels;
in float vNormalLengthInPixels;

out lowp vec4 fragColor;

void main(void) {
    float dpr = uDevicePixelRatio;

    float distanceFromEnd = -min(vPosInPixels[0], vPosInPixels[1]);
    float distance; // from the rule centerline or end
    if (distanceFromEnd > 0.0 && uStrokeCap == ROUND) {
        // round cap
        distance = length(vec2(distanceFromEnd, vNormalLengthInPixels));
    } else {
        distance = abs(vNormalLengthInPixels);
    }

    // Use a signed distance field to implement edge antialiasing
    float opacity = clamp(((vSize / 2.0 - distance) * dpr), -0.5, 0.5) + 0.5;

    if (uDashTextureSize > 0.0) {
        float pos = (vPosInPixels[0] + uStrokeDashOffset) * dpr;
        float floored = floor(pos);
        vec2 texelPositions = (floored + vec2(0.5, 1.5)) / dpr / uDashTextureSize;
      
        // Do antialiasing
        opacity *= mix(
            texture(uDashTexture, vec2(texelPositions[0], 0)).r,
            texture(uDashTexture, vec2(texelPositions[1], 0)).r,
            clamp((pos - floored), 0.0, 1.0));
    }

    fragColor = vColor * opacity;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`,dl=`layout(std140) uniform Mark {
    /** Minimum rule length in pixels */
    uniform mediump float uMinLength;

    uniform mediump float uDashTextureSize;
    uniform lowp int uStrokeCap;
    uniform mediump float uStrokeDashOffset;

#pragma markUniforms
};
`,fl=class extends Pc{constructor(e,t,n){super(e,t,n),this.dashTexture=void 0,this.dashTextureSize=0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics();let e=this.gl,t=pl(this.properties.strokeDash);this.dashTexture=ci(e,{level:0,mag:e.NEAREST,min:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1}),this.dashTextureSize=t.length,this.createAndLinkShaders(ll,ul,[dl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinLength`,e.minLength),this.registerMarkUniformValue(`uStrokeCap`,e.strokeCap??`butt`,e=>[`butt`,`square`,`round`].indexOf(e)),no(this.markUniformInfo,{uDashTextureSize:+this.dashTextureSize}),this.markUniformsAltered=!0}updateGraphicsData(e){let t=e.getItemCount(),n=new yc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>q(this.programInfo,{uDashTexture:this.dashTexture})),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>lo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e),e)}dispose(){this.dashTexture&&=(this.gl.deleteTexture(this.dashTexture),void 0),super.dispose()}};function pl(e){if(!e)return new Uint8Array;if(e.length==0||e.length%2||e.findIndex(e=>Math.round(e)!=e||e<1||e>1e3)>=0)throw Error(`Invalid stroke dash pattern: `+JSON.stringify(e));let t=e.reduce((e,t)=>e+t),n=new Uint8Array(t),r=!0,i=0;for(let t of e){for(;t;)n[i++]=r&&255||0,t--;r=!r}return n}var ml=`in mediump vec2 vertexCoord;
in lowp vec2 textureCoord;

// Width of the text (all letters)
in float width;

out vec2 vTexCoord;
out float vEdgeFadeOpacity;
flat out vec4 vColor;
flat out float vSlope;
flat out float vGamma;

struct RangeResult {
    float pos;
    float scale;
};

float minValue(vec4 v) {
    return min(min(v.x, v.y), min(v.z, v.w));
}

float maxValue(vec4 v) {
    return max(max(v.x, v.y), max(v.z, v.w));
}

/**
 * All measures are in [0, 1]
 */
RangeResult positionInsideRange(float a, float b, float width, float padding,
                                int align, bool flush) {
    float span = b - a;
    float paddedWidth = width + 2.0 * padding;

    // Is the text clearly outside the viewport
    if (a > 1.0 || b < 0.0) {
        return RangeResult(0.0, 0.0);
    }

    // How much extra space we have for adjusting the position so that the
    // text stays inside the range.
    float extra = max(0.0, span - paddedWidth);

    float pos;

    // Align the text and try to keep it inside the range and the viewport
    if (align == 0) {
        float centre = a + b;

        if (flush) {
            float leftOver = max(0.0, paddedWidth - centre);
            centre += min(leftOver, extra);

            float rightOver = max(0.0, paddedWidth + centre - 2.0);
            centre -= min(rightOver, extra);
        }

        pos = centre / 2.0;

    } else if (align < 0) {
        float edge = a;

        if (flush) {
            float over = max(0.0, -edge);
            edge += min(over, extra);
        }

        pos = edge + padding;

    } else {
        float edge = b;

        if (flush) {
            float over = max(0.0, edge - 1.0);
            edge -= min(over, extra);
        }

		// TODO: If the text spans the whole viewport, try to keep it centered if possible.

        pos = edge - padding;
    }

    // How the text should be scaled to make it fit inside the range (if it didn't fit).
    float scale = clamp((span - padding) / paddedWidth, 0.0, 1.0);

    // TODO: Fix padding in scale factor. Padding should stay constant
    return RangeResult(pos, scale);
}

vec2 calculateRotatedDimensions(float width, mat2 rotationMatrix) {
    vec2 a = abs(rotationMatrix * vec2(width / 2.0, 0.5));
    vec2 b = abs(rotationMatrix * vec2(width / 2.0, -0.5));
    return vec2(max(a.x, b.x), max(a.y, b.y)) * 2.0;
}

/** Needed when using ranged text */
ivec2 fixAlignForAngle(ivec2 align, float angleInDegrees) {
    float a = mod(angleInDegrees + 45.0, 360.0);
    int x = align.x;
    int y = -align.y;

    // TODO: Optimize by avoiding branching
    if (a < 90.0) {
        return ivec2(x, y);
    } else if (a < 180.0) {
        return ivec2(y, -x);
    } else if (a < 270.0) {
        return ivec2(-x, y);
    } else {
        return ivec2(-y, x);
    }
}

void main(void) {
#pragma orderGuard

    float opacity = getScaled_opacity() * uViewOpacity;
    vec2 size = vec2(getScaled_size());
    float x = getScaled_x() + getScaled_xOffset() / uViewportSize.x;
    float y = getScaled_y();

    float scale = 1.0;

	float angleInDegrees = getScaled_angle();
	float angle = -angleInDegrees * PI / 180.0;
	
    float sinTheta = sin(angle);
    float cosTheta = cos(angle);
    mat2 rotationMatrix = mat2(cosTheta, sinTheta, -sinTheta, cosTheta);

    vec2 flushSize = calculateRotatedDimensions(width, rotationMatrix);

#if defined(x2_DEFINED) || defined(y2_DEFINED)
    ivec2 align = fixAlignForAngle(uAlign, angleInDegrees);
#else
    ivec2 align = uAlign;
#endif

#ifdef x2_DEFINED
    float x2 = getScaled_x2() + getScaled_x2Offset() / uViewportSize.x;

    if (uLogoLetter) {
        size.x = (x2 - x) * uViewportSize.x;
        x += (x2 - x) / 2.0;

    } else {
        RangeResult result = positionInsideRange(
            min(x, x2), max(x, x2),
            size.x * scale * flushSize.x / uViewportSize.x, uPaddingX / uViewportSize.x,
            align.x, uFlushX);
        
        x = result.pos;
        scale *= result.scale;
    }
#endif

    // Position of the text origo 
    vec2 pos = applyOffset(
        applySampleFacet(vec2(x, y)),
        vec2(0.0, getScaled_yOffset())
    );

#ifdef y2_DEFINED
    float y2 = getScaled_y2();
    vec2 pos2 = applyOffset(
        applySampleFacet(vec2(x, y2)),
        vec2(0.0, getScaled_y2Offset())
    );

    if (uLogoLetter) {
        size.y = (pos2.y - pos.y) * uViewportSize.y;
        pos.y += (pos2.y - pos.y) / 2.0;

    } else {
        RangeResult result = positionInsideRange(
            min(pos.y, pos2.y), max(pos.y, pos2.y),
            size.y * scale * flushSize.y / uViewportSize.y, uPaddingY / uViewportSize.y,
            align.y, uFlushY);
        
        pos.y = result.pos;
        scale *= result.scale;
    }
#endif

#ifdef VISIBLE_RANGE_CULLING
    if (isOutsideVisibleRange(pos)) {
        gl_Position = vec4(0.0);
        return;
    }
#endif

    if (scale < 1.0) {
        if (uSqueeze) {
            vec2 scaleFadeExtent = vec2(3.0, 6.0) / size;

            if (scale  < scaleFadeExtent[0]) {
                gl_Position = vec4(0.0);
                return;
            }

            size *= scale;
            opacity *= linearstep(scaleFadeExtent[0], scaleFadeExtent[1], scale);

        } else if (scale < 1.0) {
            // Eliminate the text
            gl_Position = vec4(0.0);
            return;
        }
    }

    // Position of the character vertex in relation to the text origo
    vec2 charPos = rotationMatrix * (vertexCoord * size + uD);

    // Position of the character vertex inside the unit viewport
    vec2 unitPos = pos + charPos / uViewportSize;

    gl_Position = unitToNdc(unitPos);

    // Controls antialiasing of the SDF
    vSlope = max(1.0, min(size.x, size.y) / uSdfNumerator * uDevicePixelRatio);

    vec3 color = getScaled_color();

    // Premultiply alpha
    vColor = vec4(color * opacity, opacity);

    // Do something like gamma correction for text when the color is close to black or white.
    vGamma = getGammaForColor(color);

    vTexCoord = textureCoord;

    // Edge fading. The implementation is simplistic and fails with primitives that
    // span the whole viewport. However, it works just fine with reasonable font sizes.
    // x: top, y: right, z: bottom, w: left
    if (maxValue(uViewportEdgeFadeDistance) > -pow(10.0, 10.0)) { // -Infinity would be nice
        vEdgeFadeOpacity = minValue(
            ((vec4(1.0, 1.0, 0.0, 0.0) + vec4(-1.0, -1.0, 1.0, 1.0) * unitPos.yxyx) *
                uViewportSize.yxyx - uViewportEdgeFadeDistance) / uViewportEdgeFadeWidth);
    } else {
        vEdgeFadeOpacity = 1.0;
    }

    setupPicking();
}
`,hl=`uniform sampler2D uTexture;

in vec2 vTexCoord;
in float vEdgeFadeOpacity;
flat in vec4 vColor;
flat in float vSlope;
flat in float vGamma;

out lowp vec4 fragColor;

float median(float r, float g, float b) {
    return max(min(r, g), min(max(r, g), b));
}

float getDist(vec2 uv) {
    vec3 c = texture(uTexture, uv).rgb;
    return 1.0 - median(c.r, c.g, c.b);
}

/**
 * Calculates the super-sampled distance to the edge.
 * This is used to avoid aliasing when rendering small text,
 * as mip-mapping cannot be used here.
 * The distance is averaged over a grid of n x n samples.
 */
float getSuperDist(vec2 uv) {
    vec2 dx = dFdx(uv);
    vec2 dy = dFdy(uv);

    float n = 2.0;

    float sum = 0.0;
    for (float x = 0.5; x < n; x++){
        for (float y = 0.5; y < n; y++) {
            sum += getDist(
                uv +
                x / n * dx +
                y / n * dy
            ); 
        }
    }

    return sum / (n * n);
}

void main() {
    float sigDist = getSuperDist(vTexCoord);

    float slope = vSlope;
    if (uLogoLetter) {
        // Using screen-space derivatives for logo letters because skewed aspect ratios
        // result in blurry edges otherwise. However, use of screen-space derivatives
        // results in crappy looking text with regular letters text.
        slope = 0.7 / length(vec2(dFdy(sigDist), dFdx(sigDist)));
    }

    float opa = clamp((sigDist - 0.5) * slope + 0.5, 0.0, 1.0);
    opa *= clamp(vEdgeFadeOpacity, 0.0, 1.0);

    opa = pow(opa, vGamma);

    fragColor = vColor * opa;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
}
`,gl=`layout(std140) uniform Mark {
    uniform mediump float uSdfNumerator;

    uniform mediump vec2 uD; // dx & dy

    uniform mediump vec4 uViewportEdgeFadeWidth;
    uniform mediump vec4 uViewportEdgeFadeDistance;
        
    uniform bool uSqueeze;
    uniform bool uLogoLetter;

    // x: -1, 0, 1 = left, center, right
    // y: -1, 0, 1 = top, middle, bottom 
    uniform lowp ivec2 uAlign;

    uniform mediump float uPaddingX;
    uniform bool uFlushX;
    uniform mediump float uPaddingY;
    uniform bool uFlushY;

#pragma markUniforms
};
`,_l=1024,vl={left:-1,center:0,right:1},yl={top:-1,middle:0,bottom:1,alphabetic:1,baseline:1},bl={point:rl,rect:cl,arrow:Wc,rule:fl,tick:fl,link:$c,text:class extends Pc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`color`,`size`,`opacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(ml,hl,[gl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uPaddingX`,e.paddingX),this.registerMarkUniformValue(`uPaddingY`,e.paddingY),this.registerMarkUniformValue(`uFlushX`,e.flushX,e=>!!e),this.registerMarkUniformValue(`uFlushY`,e.flushY,e=>!!e),this.registerMarkUniformValue(`uSqueeze`,e.squeeze,e=>!!e),this.registerMarkUniformValue(`uLogoLetter`,e.logoLetters,e=>!!e),this.registerMarkUniformValue(`uSdfNumerator`,e.logoLetters,e=>this.font.metrics.common.base*.35*(e?.5:1)),this.registerMarkUniformVector(`uViewportEdgeFadeWidth`,[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft]),this.registerMarkUniformVector(`uViewportEdgeFadeDistance`,[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]),no(this.markUniformInfo,{uAlign:[vl[e.align],yl[e.baseline]],uD:[e.dx,-e.dy]})}registerMarkUniformVector(e,t){let n=this.createMarkUniformSetter(e),r=[],i=()=>n(r.map(e=>e()));for(let e of t)r.push(h(e)?this.unitView.paramRuntime.watchExpression(e.expr,i):()=>e);i()}updateGraphicsData(e){let t=e.getData(),n=this.encoding,r=this.properties,i=h(r.logoLetters)?this.unitView.paramRuntime.evaluateAndGet(r.logoLetters.expr):r.logoLetters,a=this.encoders.text,o=0,s=`format`in n.text?y(n.text.format):e=>e;for(let e of t){let t=s(a(e)),n=p(t)?t:t===null?``:``+t;o+=n&&n.length||0}let c=new Sc({encoders:this.encoders,attributes:this.getAttributes(),properties:{align:r.align,baseline:r.baseline,logoLetters:i},fontMetrics:this.font.metrics,numCharacters:Math.max(o,_l)});c.addBatches(e.facetBatches);let l=c.toArrays();this.rangeMap.migrateEntries(l.rangeMap),this.updateBufferInfo(l)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{q(this.programInfo,{uTexture:this.rendererResources.getFontTexture(this.font.bitmapUrl)})}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>lo(t,this.vertexArrayInfo,t.TRIANGLES,n,e),e)}}};function xl(e,t,n){let r=bl[e.getType()];if(!r)throw Error(`Unsupported WebGL mark type: `+e.getType());return new r(e,t,n)}var Sl=class{#e=!1;#t=new Map;#n=new Map;#r=new Map;constructor(e){this.glHelper=e,e.setResourceFinalizer(()=>this.dispose())}#i(e){this.#s();let t=xl(e,this.glHelper,this),n={mark:e,graphics:t,state:`compiling`,collector:void 0,dataRevision:-1,configurationRevision:-1,encodedDataRevision:-1,scaleResolutions:new Set};this.#t.set(e,n),e.unitView.registerDisposer(()=>this.releaseMark(e));try{this.#l(n),t.initializeGraphics()}catch(e){throw n.state=`failed`,this.#u(n),t.dispose(),e}return n}prepareMarks(e){let t=this.#a(e);try{this.#o(t.entries)}catch(e){t.firstError??=e}if(t.firstError)throw t.firstError}#a(e){this.#s();let t=[],n;for(let r of new Set(e))try{let e=r.getType()!=`text`||Oc(r).metrics;!this.#t.has(r)&&r.encoders&&e&&t.push(this.#i(r))}catch(e){n??=e}return{entries:t,firstError:n}}#o(e){let t;for(let n of e)try{n.graphics.finalizeGraphicsInitialization(),n.state=`ready`}catch(e){n.state=`failed`,this.#u(n),n.graphics.dispose(),t??=e}if(t)throw t}releaseMark(e){let t=this.#t.get(e);t&&(this.#t.delete(e),t.state=`disposed`,t.graphics.dispose(),this.#u(t))}getMarkRenderingDebugState(e){let t=this.#t.get(e),n=t?.graphics.getDebugState();return{ready:!!(t?.state==`ready`&&t.graphics.isReady()),markUniformsAltered:n?.markUniformsAltered??!1,vertexCount:n?.vertexCount,allocatedVertices:n?.allocatedVertices,rangeCount:n?.rangeCount??0}}getMarkEntry(e){return this.#t.get(e)}isEntryActive(e){return e.state==`ready`&&this.#t.get(e.mark)===e}isEntryDrawable(e){return this.isEntryActive(e)&&e.graphics.isReady()}synchronize(e){if(!this.#e)for(let t of e){if(!this.isEntryActive(t))continue;let e=t.mark;e.initializeRenderingRevisions([],{trackResources:!1});let n=e.unitView.getCollector();n?.completed&&(t.collector!==n||t.dataRevision!=n.dataRevision||t.configurationRevision!=e.getRenderingRevision(`configuration`)||t.encodedDataRevision!=e.getEncodedDataRevision())&&(t.graphics.updateGraphicsData(n),this.#c(t))}}prepareFontBitmap(e){this.#s();let t=this.#r.get(e);if(t)return t.ready;let n=this.glHelper.gl,r,i=new Promise((t,i)=>{r=ci(n,{src:e,min:n.LINEAR},a=>{a?(this.#r.delete(e),n.deleteTexture(r),i(a)):this.#e?i(Error(`WebGL renderer resources were disposed while loading a font.`)):t()})});return this.#r.set(e,{texture:r,ready:i}),i}getFontTexture(e){this.#s();let t=this.#r.get(e);if(!t)throw Error(`Font bitmap has not been prepared: `+e);return t.texture}dispose(){if(this.#e)return;this.#e=!0;for(let e of Array.from(this.#t.keys()))this.releaseMark(e);let e=this.glHelper.gl;for(let{texture:t}of this.#r.values())e.deleteTexture(t);this.#r.clear()}#s(){if(this.#e)throw Error(`WebGL renderer resources have been disposed.`)}#c(e){let t=e.mark;t.initializeRenderingRevisions([],{trackResources:!1});let n=t.unitView.getCollector();e.collector=n,e.dataRevision=n?.dataRevision??-1,e.configurationRevision=t.getRenderingRevision(`configuration`)??-1,e.encodedDataRevision=t.getEncodedDataRevision()}#l(e){for(let[t,n]of Object.entries(e.mark.encoders)){if(!n.scale)continue;let r=ce(n.channelDef)?.resolutionChannel??t;if(!ue(r))continue;let i=e.mark.unitView.getScaleResolution(r);if(!i||e.scaleResolutions.has(i))continue;e.scaleResolutions.add(i);let a=this.#n.get(i);if(a){a.count++;continue}this.glHelper.createRangeTexture(i),this.#n.set(i,{count:1,dispose:i.observeMapping(()=>this.glHelper.createRangeTexture(i,!0))})}}#u(e){for(let t of e.scaleResolutions){let e=this.#n.get(t);e&&(e.count--,e.count==0&&(e.dispose(),this.#n.delete(t)))}e.scaleResolutions.clear()}};function Cl({runs:e,viewRoot:t,layoutResult:n,webGLHelper:r,markAdapter:i,logicalWidth:a,logicalHeight:o,pixelRatio:s}){let c=r.gl,l=Math.ceil(a*s),u=Math.ceil(o*s);wl(c,l,u);let d=s==1&&n?n:Te(t,Ce.create(0,0,a,o),{devicePixelRatio:s,renderingOptions:{firstFacet:!0}}),f=Lo(c,[{format:c.RGBA,type:c.UNSIGNED_BYTE,minMag:c.LINEAR,wrap:c.CLAMP_TO_EDGE}],l,u);try{for(let t of e){let e=new Js({picking:!1},{webGLHelper:r,markAdapter:i,canvasSize:{width:a,height:o},devicePixelRatio:s,framebufferInfo:f,markPredicate:e=>t.marks.has(e),pixelOffset:0});d.collectRenderCommands(e),e.finish(),e.render();let n=Ae(t.bounds,s,l,u);ke(t,n,s,Qs(c,f,`image/png`,{...n,unpremultiplyAlpha:!0}))}}finally{c.bindFramebuffer(c.FRAMEBUFFER,null),c.deleteTexture(f.attachments[0]),c.deleteFramebuffer(f.framebuffer)}}function wl(e,t,n){let r=e.getParameter(e.MAX_RENDERBUFFER_SIZE),i=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(r,i);if(t<=0||n<=0||t>a||n>a)throw RangeError(`SVG raster dimensions ${t} x ${n} exceed the WebGL limit ${a}.`)}var Tl={pages:[`Lato-Regular.png`],chars:[{id:87,width:53,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:43.491,chnl:15,x:0,y:0,page:0},{id:124,width:17,height:50,xoffset:0,yoffset:-32.193000000000005,xadvance:10.521,chnl:15,x:0,y:42,page:0},{id:40,width:20,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:94,page:0},{id:41,width:19,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:145,page:0},{id:36,width:32,height:49,xoffset:0,yoffset:-34.419000000000004,xadvance:24.360000000000003,chnl:15,x:0,y:196,page:0},{id:125,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:247,page:0},{id:91,width:22,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:297,page:0},{id:93,width:19,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:347,page:0},{id:123,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:397,page:0},{id:106,width:19,height:48,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:0,y:447,page:0},{id:81,width:43,height:47,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:21,y:447,page:0},{id:77,width:45,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:38.997,chnl:15,x:66,y:447,page:0},{id:64,width:43,height:44,xoffset:0,yoffset:-28.539,xadvance:35.133,chnl:15,x:23,y:397,page:0},{id:92,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:68,y:397,page:0},{id:47,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:98,y:397,page:0},{id:109,width:42,height:32,xoffset:0,yoffset:-21.609,xadvance:34.545,chnl:15,x:113,y:447,page:0},{id:119,width:42,height:31,xoffset:0,yoffset:-21.315,xadvance:32.991,chnl:15,x:157,y:447,page:0},{id:42,width:25,height:42,xoffset:0,yoffset:-31.626,xadvance:17.85,chnl:15,x:128,y:397,page:0},{id:37,width:42,height:41,xoffset:0,yoffset:-30.387,xadvance:33.663000000000004,chnl:15,x:155,y:397,page:0},{id:79,width:42,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:199,y:397,page:0},{id:102,width:24,height:41,xoffset:0,yoffset:-30.534000000000002,xadvance:14.721,chnl:15,x:243,y:397,page:0},{id:100,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:269,y:397,page:0},{id:98,width:32,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:302,y:397,page:0},{id:56,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:336,y:397,page:0},{id:38,width:40,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:29.904000000000003,chnl:15,x:370,y:397,page:0},{id:108,width:17,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:9.912,chnl:15,x:412,y:397,page:0},{id:107,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:21.336000000000002,chnl:15,x:431,y:397,page:0},{id:48,width:33,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:464,y:397,page:0},{id:71,width:38,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:30.681,chnl:15,x:21,y:347,page:0},{id:83,width:31,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:22.785,chnl:15,x:61,y:347,page:0},{id:63,width:27,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:18.795,chnl:15,x:94,y:347,page:0},{id:105,width:18,height:41,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:123,y:347,page:0},{id:51,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:143,y:347,page:0},{id:104,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.436,chnl:15,x:177,y:347,page:0},{id:67,width:37,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:28.056,chnl:15,x:210,y:347,page:0},{id:88,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.258000000000003,chnl:15,x:249,y:347,page:0},{id:68,width:40,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:31.941000000000003,chnl:15,x:288,y:347,page:0},{id:70,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:23.751,chnl:15,x:330,y:347,page:0},{id:34,width:23,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:15.561000000000002,chnl:15,x:364,y:347,page:0},{id:72,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:389,y:347,page:0},{id:73,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.760000000000002,chnl:15,x:429,y:347,page:0},{id:74,width:24,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:17.745,chnl:15,x:449,y:347,page:0},{id:75,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.825000000000003,chnl:15,x:24,y:297,page:0},{id:76,width:31,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:21.567,chnl:15,x:475,y:347,page:0},{id:66,width:35,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.153000000000002,chnl:15,x:64,y:297,page:0},{id:78,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:101,y:297,page:0},{id:33,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.298,chnl:15,x:141,y:297,page:0},{id:80,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.221,chnl:15,x:161,y:297,page:0},{id:65,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:197,y:297,page:0},{id:82,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.313000000000002,chnl:15,x:237,y:297,page:0},{id:35,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:275,y:297,page:0},{id:84,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.801000000000002,chnl:15,x:310,y:297,page:0},{id:85,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:30.891000000000002,chnl:15,x:346,y:297,page:0},{id:86,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:385,y:297,page:0},{id:39,width:16,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:8.568000000000001,chnl:15,x:425,y:297,page:0},{id:69,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.255000000000003,chnl:15,x:443,y:297,page:0},{id:89,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.208000000000002,chnl:15,x:23,y:247,page:0},{id:90,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.284000000000002,chnl:15,x:477,y:297,page:0},{id:49,width:31,height:40,xoffset:0,yoffset:-30.156000000000002,xadvance:24.360000000000003,chnl:15,x:61,y:247,page:0},{id:50,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:94,y:247,page:0},{id:57,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:128,y:247,page:0},{id:94,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:162,y:247,page:0},{id:96,width:21,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:16.8,chnl:15,x:196,y:247,page:0},{id:55,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:219,y:247,page:0},{id:54,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:254,y:247,page:0},{id:53,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:289,y:247,page:0},{id:52,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:323,y:247,page:0},{id:103,width:31,height:39,xoffset:0,yoffset:-21.630000000000003,xadvance:21.84,chnl:15,x:358,y:247,page:0},{id:112,width:32,height:39,xoffset:0,yoffset:-21.651,xadvance:23.541,chnl:15,x:391,y:247,page:0},{id:113,width:31,height:39,xoffset:0,yoffset:-21.651,xadvance:23.520000000000003,chnl:15,x:425,y:247,page:0},{id:116,width:25,height:39,xoffset:0,yoffset:-28.182000000000002,xadvance:15.057,chnl:15,x:458,y:247,page:0},{id:121,width:31,height:38,xoffset:0,yoffset:-21.273,xadvance:21.651,chnl:15,x:34,y:196,page:0},{id:59,width:18,height:36,xoffset:0,yoffset:-20.706,xadvance:10.983,chnl:15,x:485,y:247,page:0},{id:43,width:32,height:34,xoffset:0,yoffset:-24.486,xadvance:24.360000000000003,chnl:15,x:67,y:196,page:0},{id:60,width:30,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:101,y:196,page:0},{id:62,width:31,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:133,y:196,page:0},{id:117,width:30,height:32,xoffset:0,yoffset:-21.273,xadvance:23.415000000000003,chnl:15,x:166,y:196,page:0},{id:99,width:29,height:32,xoffset:0,yoffset:-21.609,xadvance:20.055,chnl:15,x:198,y:196,page:0},{id:110,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:23.436,chnl:15,x:229,y:196,page:0},{id:111,width:32,height:32,xoffset:0,yoffset:-21.609,xadvance:23.814,chnl:15,x:262,y:196,page:0},{id:126,width:32,height:26,xoffset:0,yoffset:-16.128,xadvance:24.360000000000003,chnl:15,x:201,y:447,page:0},{id:101,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:22.176000000000002,chnl:15,x:296,y:196,page:0},{id:114,width:25,height:32,xoffset:0,yoffset:-21.651,xadvance:15.288,chnl:15,x:329,y:196,page:0},{id:115,width:27,height:32,xoffset:0,yoffset:-21.609,xadvance:18.186,chnl:15,x:356,y:196,page:0},{id:97,width:28,height:32,xoffset:0,yoffset:-21.651,xadvance:20.874000000000002,chnl:15,x:385,y:196,page:0},{id:118,width:31,height:31,xoffset:0,yoffset:-21.273,xadvance:21.672,chnl:15,x:415,y:196,page:0},{id:61,width:31,height:29,xoffset:0,yoffset:-19.089000000000002,xadvance:24.360000000000003,chnl:15,x:448,y:196,page:0},{id:120,width:30,height:31,xoffset:0,yoffset:-21.273,xadvance:20.916,chnl:15,x:21,y:145,page:0},{id:58,width:18,height:31,xoffset:0,yoffset:-20.706,xadvance:10.5,chnl:15,x:53,y:145,page:0},{id:122,width:28,height:31,xoffset:0,yoffset:-21.273,xadvance:18.984,chnl:15,x:73,y:145,page:0},{id:95,width:28,height:16,xoffset:0,yoffset:0,xadvance:19.278000000000002,chnl:15,x:235,y:447,page:0},{id:45,width:23,height:24,xoffset:0,yoffset:-14.175,xadvance:15.603000000000002,chnl:15,x:481,y:196,page:0},{id:44,width:17,height:21,xoffset:0,yoffset:-4.956,xadvance:9.534,chnl:15,x:103,y:145,page:0},{id:46,width:18,height:15,xoffset:0,yoffset:-4.956,xadvance:9.912,chnl:15,x:0,y:497,page:0},{id:32,width:0,height:0,xoffset:0,yoffset:0,xadvance:10.752,chnl:15,x:20,y:497,page:0}],info:{face:`Lato Regular`,size:42,bold:0,italic:0,charset:` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`.split(``),unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[2,2]},common:{lineHeight:50.400000000000006,base:41.454,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},kernings:[]},El={thin:100,light:300,regular:400,normal:400,medium:500,bold:700,black:900},Dl={family:`Lato`,style:`normal`,weight:400},Ol=class{constructor(e,t){this._prepareBitmap=e,this.fontRepository=`https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/`,this._fonts=new l([],JSON.stringify),this._metadataPromises=new Map,this._fontPromises=new Map,this._promises=[];let n=t&&e?.(t);this._defaultFontEntry={metrics:pc(Tl),bitmapUrl:t,measurement:void 0},this._defaultFontEntry.measurement=this._createMeasurement(this._defaultFontEntry),n&&this._promises.push(n),this._fonts.set(Dl,this._defaultFontEntry)}async waitUntilReady(){await Promise.all(this._promises)}getFont(e=Dl.family,t=`normal`,n=400){let r=kl(e,t,n),i=this._fonts.get(r);return i||(i={metrics:void 0,bitmapUrl:void 0,measurement:void 0},i.measurement=this._createMeasurement(i),this._fonts.set(r,i),this._promises.push(this._loadFontEntry(i,r))),i}requestFont(e){return this.getFont(e.font,e.fontStyle,e.fontWeight).measurement}_createMeasurement(e){let t=()=>e.metrics??this._defaultFontEntry.metrics;return{measureWidth:(e,n)=>t().measureWidth(e,n),getHeight:e=>{let n=t();return(n.capHeight+n.descent)/n.common.base*e}}}async _loadFontEntry(e,t){try{let n=Nl(await this._loadMetadata(t.family),t),r=this.fontRepository+jl(t.family)+`/`+n.replace(/\.\w+/,``);e.bitmapUrl=r+`.png`;let i=this._loadFont(r+`.json`),a=this._prepareBitmap?.(e.bitmapUrl),[o]=await Promise.all([i,a]);e.metrics=o}catch{console.warn(`Cannot load font: "${t.family}". Using the embedded default font.`),e.metrics=this._defaultFontEntry.metrics,e.bitmapUrl=this._defaultFontEntry.bitmapUrl}}_loadFont(e){let t=this._fontPromises.get(e);return t||(t=fetch(e).then(e=>{if(!e.ok)throw Error(`Could not load font: `+e.status);return e}).then(e=>e.json()).then(e=>pc(e)),this._fontPromises.set(e,t)),t}_loadMetadata(e){let t=jl(e),n=this._metadataPromises.get(t);if(!n){let e=this.fontRepository+t+`/METADATA.pb`;n=fetch(e).then(t=>{if(!t.ok)throw Error(`Could not load font metadata. Response status: `+t.status+`, url: `+e);return t}).then(e=>e.text()).then(e=>Ml(e)).catch(e=>{console.warn(e.message)}),this._metadataPromises.set(t,n)}return n}getDefaultFont(){return this._defaultFontEntry}};function kl(e,t,n){return{family:e.toLowerCase()==`sans-serif`?Dl.family:e,style:t,weight:Al(n)}}function Al(e){if(p(e)){let t=El[e.toLowerCase()];if(!t)throw Error(`Unknown font weight: `+e);return t}return e}function jl(e){return e.toLowerCase().replaceAll(/[^\w]/g,``)}function Ml(e){let t=e.split(`
`),n=[],r;for(let e of t)if(e.startsWith(`fonts {`)&&(r={name:void 0,style:void 0,weight:void 0,filename:void 0,post_script_name:void 0,full_name:void 0,copyright:void 0}),e.startsWith(`}`)&&(n.push(r),r=void 0),r){let t=e.match(/^\s*([A-Za-z_]+):[ ]?"(.*)"$/);if(t){let e=t[1];r[e]=t[2]}if(t=e.match(/^\s*([A-Za-z_]+):[ ]?(\d+)$/),t){let e=t[1];r[e]=+t[2]}}return n}function Nl(e,t){let n,r=1/0;for(let i of e)if(t.family.localeCompare(i.name,void 0,{sensitivity:`accent`})==0&&t.style==i.style){let e=Math.abs(t.weight-i.weight);e<r&&(r=e,n=i)}return n?.filename}function Pl(e){let t=new Us(e.container,e.sizeSource,{powerPreference:e.powerPreference},e.onCanvasResize),n=new Sl(t);return{surface:t,textMetrics:new Ol(e=>n.prepareFontBitmap(e),Me),getMarkRenderingDebugState:e=>n.getMarkRenderingDebugState(e),createRenderCoordinator:e=>new Xs({...e,glHelper:t,markAdapter:n}),exportCanvas:e=>rc({...e,glHelper:t,markAdapter:n}),exportRaster:e=>ic({...e,glHelper:t,markAdapter:n}),rasterizeSvgRuns:e=>Cl({...e,webGLHelper:t,markAdapter:n}),readPickingId:(e,n)=>{let r=t.getDevicePixelRatio(),i=qs(t.gl,t._pickingBufferInfo,e*r,n*r);return i[0]|i[1]<<8|i[2]<<16|i[3]<<24}}}export{Pl as createWebGLRenderingBackend};