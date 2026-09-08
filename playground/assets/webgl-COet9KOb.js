import{E as e,I as t,It as n,J as r,Lt as i,P as a,Q as o,R as s,Rt as c,Vt as l,X as u,_t as d,at as f,b as p,cn as m,ct as h,d as g,dt as _,en as v,et as y,in as b,lt as x,n as ee,nn as S,nt as te,o as ne,rt as re,s as ie,st as C,ut as ae,zt as oe}from"./clipOptions-DTq05y76.js";import{T as se,b as w,g as ce,gt as le,v as T,x as ue,y as de}from"./vega-scale-Ciuin0nT.js";import{n as fe,r as pe,t as me}from"./indexer-DDIu5Q-Y.js";import{n as he,t as ge}from"./indexLikeDomainUtils-CtCqYOrV.js";import{n as _e,t as ve}from"./viewError-BeUp1kNb.js";import{t as ye}from"./rectangle-CAPGOw2x.js";import{n as be,t as xe}from"./layoutResult-BbpHOHQN.js";import{n as Se,r as Ce}from"./performanceProfiler-t6gLo5-8.js";import{t as we}from"./canvasSizeHelper-DjbYDXFa.js";import{n as Te,t as Ee}from"./rasterImage-CSBco7OJ.js";import{n as De,t as Oe}from"./renderingConstants-BWHEP8gH.js";var ke=5120,Ae=5121,je=5122,Me=5123,Ne=5124,Pe=5125,Fe=5126,Ie=32819,Le=32820,Re=33635,ze=5131,Be=33640,Ve=35899,He=35902,Ue=36269,We=34042,Ge={};{let e=Ge;e[ke]=Int8Array,e[Ae]=Uint8Array,e[je]=Int16Array,e[Me]=Uint16Array,e[Ne]=Int32Array,e[Pe]=Uint32Array,e[Fe]=Float32Array,e[Ie]=Uint16Array,e[Le]=Uint16Array,e[Re]=Uint16Array,e[ze]=Uint16Array,e[Be]=Uint32Array,e[Ve]=Uint32Array,e[He]=Uint32Array,e[Ue]=Uint32Array,e[We]=Uint32Array}function Ke(e){if(e instanceof Int8Array)return ke;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Ae;if(e instanceof Int16Array)return je;if(e instanceof Uint16Array)return Me;if(e instanceof Int32Array)return Ne;if(e instanceof Uint32Array)return Pe;if(e instanceof Float32Array)return Fe;throw Error(`unsupported typed array type`)}function qe(e){if(e===Int8Array)return ke;if(e===Uint8Array||e===Uint8ClampedArray)return Ae;if(e===Int16Array)return je;if(e===Uint16Array)return Me;if(e===Int32Array)return Ne;if(e===Uint32Array)return Pe;if(e===Float32Array)return Fe;throw Error(`unsupported typed array type`)}function Je(e){let t=Ge[e];if(!t)throw Error(`unknown gl type`);return t}var Ye=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};function Xe(...e){console.error(...e)}function Ze(...e){console.warn(...e)}function Qe(e,t){return typeof WebGLBuffer<`u`&&t instanceof WebGLBuffer}function $e(e,t){return typeof WebGLRenderbuffer<`u`&&t instanceof WebGLRenderbuffer}function et(e,t){return typeof WebGLTexture<`u`&&t instanceof WebGLTexture}function tt(e,t){return typeof WebGLSampler<`u`&&t instanceof WebGLSampler}var nt=35044,E=34962,rt=34963,it=34660,at=5120,ot=5121,st=5122,ct=5123,lt=5124,ut=5125,dt=5126,ft={attribPrefix:``};function pt(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||nt)}function mt(e,t,n,r){if(Qe(e,t))return t;n||=E;let i=e.createBuffer();return pt(e,n,i,t,r),i}function ht(e){return e===`indices`}function gt(e){return e instanceof Int8Array||e instanceof Uint8Array}function _t(e){return e===Int8Array||e===Uint8Array}function vt(e){return e.length?e:e.data}var yt=/coord|texture/i,bt=/color|colour/i;function xt(e,t){let n;if(n=yt.test(e)?2:bt.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function St(e,t){return e.numComponents||e.size||xt(t,vt(e).length)}function Ct(e,t){if(Ye(e))return e;if(Ye(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type;return n||=ht(t)?Uint16Array:Float32Array,new n(e.data)}function wt(e,t){let n={};return Object.keys(t).forEach(function(r){if(!ht(r)){let i=t[r],a=i.attrib||i.name||i.attribName||ft.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!Ye(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t,o,s,c;if(i.buffer&&i.buffer instanceof WebGLBuffer)t=i.buffer,c=i.numComponents||i.size,o=i.type,s=i.normalize;else if(typeof i==`number`||typeof i.data==`number`){let n=i.data||i,a=i.type||Float32Array,l=n*a.BYTES_PER_ELEMENT;o=qe(a),s=i.normalize===void 0?_t(a):i.normalize,c=i.numComponents||i.size||xt(r,n),t=e.createBuffer(),e.bindBuffer(E,t),e.bufferData(E,l,i.drawType||nt)}else{let n=Ct(i,r);t=mt(e,n,void 0,i.drawType),o=Ke(n),s=i.normalize===void 0?gt(n):i.normalize,c=St(i,r)}n[a]={buffer:t,numComponents:c,type:o,normalize:s,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(E,null),n}function Tt(e,t,n,r){n=Ct(n),r===void 0?pt(e,E,t.buffer,n,t.drawType):(e.bindBuffer(E,t.buffer),e.bufferSubData(E,r,n))}function Et(e,t){return t===at||t===ot?1:t===st||t===ct?2:t===lt||t===ut||t===dt?4:0}var Dt=[`position`,`positions`,`a_position`];function Ot(e,t){let n,r;for(r=0;r<Dt.length&&(n=Dt[r],!(n in t||(n=ft.attribPrefix+n,n in t)));++r);r===Dt.length&&(n=Object.keys(t)[0]);let i=t[n];if(!i.buffer)return 1;e.bindBuffer(E,i.buffer);let a=e.getBufferParameter(E,it);e.bindBuffer(E,null);let o=a/Et(e,i.type),s=i.numComponents||i.size,c=o/s;if(c%1!=0)throw Error(`numComponents ${s} not correct for length ${length}`);return c}function kt(e,t,n){let r=wt(e,t),i=Object.assign({},n||{});i.attribs=Object.assign({},n?n.attribs:{},r);let a=t.indices;if(a){let t=Ct(a,`indices`);i.indices=mt(e,t,rt),i.numElements=t.length,i.elementType=Ke(t)}else i.numElements||=Ot(e,i.attribs);return i}function At(e){return!!e.texStorage2D}var jt=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),D={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Mt=Ye,Nt=function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),Pt=6406,O=6407,k=6408,Ft=6409,It=6410,Lt=6402,Rt=34041,zt=33071,Bt=9728,Vt=9729,A=3553,j=34067,M=32879,N=35866,Ht=34069,Ut=34070,Wt=34071,Gt=34072,Kt=34073,qt=34074,Jt=10241,Yt=10240,Xt=10242,Zt=10243,Qt=32882,$t=33082,en=33083,tn=33084,nn=33085,rn=3317,an=3314,on=32878,sn=3316,cn=3315,ln=32877,un=37443,dn=37441,fn=37440,pn=33321,mn=36756,hn=33325,gn=33326,_n=33330,vn=33329,yn=33338,bn=33337,xn=33340,Sn=33339,Cn=33323,wn=36757,Tn=33327,En=33328,Dn=33336,On=33335,kn=33332,An=33331,jn=33334,Mn=33333,Nn=32849,Pn=35905,Fn=36194,In=36758,Ln=35898,Rn=35901,zn=34843,Bn=34837,Vn=36221,Hn=36239,Un=36215,Wn=36233,Gn=36209,Kn=36227,qn=32856,Jn=35907,Yn=36759,Xn=32855,Zn=32854,Qn=32857,$n=34842,er=34836,tr=36220,nr=36238,rr=36975,ir=36214,ar=36232,or=36226,sr=36208,cr=33189,lr=33190,ur=36012,dr=36013,fr=35056,P=5120,F=5121,pr=5122,mr=5123,hr=5124,I=5125,L=5126,gr=32819,_r=32820,vr=33635,R=5131,yr=36193,br=33640,xr=35899,Sr=35902,Cr=36269,wr=34042,Tr=33319,z=33320,Er=6403,B=36244,V=36248,H=36249,Dr={};{let e=Dr;e[Pt]={numColorComponents:1},e[Ft]={numColorComponents:1},e[It]={numColorComponents:2},e[O]={numColorComponents:3},e[k]={numColorComponents:4},e[Er]={numColorComponents:1},e[B]={numColorComponents:1},e[Tr]={numColorComponents:2},e[z]={numColorComponents:2},e[O]={numColorComponents:3},e[V]={numColorComponents:3},e[k]={numColorComponents:4},e[H]={numColorComponents:4},e[Lt]={numColorComponents:1},e[Rt]={numColorComponents:2}}var Or;function kr(e){if(!Or){let e={};e[Pt]={textureFormat:Pt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[F,R,yr,L]},e[Ft]={textureFormat:Ft,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[F,R,yr,L]},e[It]={textureFormat:It,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[F,R,yr,L]},e[O]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[F,R,yr,L,vr]},e[k]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[F,R,yr,L,gr,_r]},e[Lt]={textureFormat:Lt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[I,mr]},e[pn]={textureFormat:Er,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[F]},e[mn]={textureFormat:Er,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[P]},e[hn]={textureFormat:Er,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[L,R]},e[gn]={textureFormat:Er,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[L]},e[_n]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[F]},e[vn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[P]},e[kn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[mr]},e[An]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[pr]},e[jn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[Mn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[hr]},e[Cn]={textureFormat:Tr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[F]},e[wn]={textureFormat:Tr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[P]},e[Tn]={textureFormat:Tr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[L,R]},e[En]={textureFormat:Tr,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[L]},e[Dn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[F]},e[On]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[P]},e[yn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[mr]},e[bn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[pr]},e[xn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[I]},e[Sn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[hr]},e[Nn]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[F]},e[Pn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[F]},e[Fn]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[F,vr]},e[In]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[Ln]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[L,R,xr]},e[Rn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[L,R,Sr]},e[zn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[L,R]},e[Bn]={textureFormat:O,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[L]},e[Vn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[F]},e[Hn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[P]},e[Un]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[mr]},e[Wn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[pr]},e[Gn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[I]},e[Kn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[hr]},e[qn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[F]},e[Jn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[F]},e[Yn]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Xn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[F,_r,br]},e[Zn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[F,gr]},e[Qn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[br]},e[$n]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[L,R]},e[er]={textureFormat:k,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[L]},e[tr]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[nr]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[P]},e[rr]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[br]},e[ir]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[mr]},e[ar]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[pr]},e[or]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[hr]},e[sr]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[I]},e[cr]={textureFormat:Lt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[mr,I]},e[lr]={textureFormat:Lt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[ur]={textureFormat:Lt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[L]},e[fr]={textureFormat:Rt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[wr]},e[dr]={textureFormat:Rt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Cr]},Object.keys(e).forEach(function(t){let n=e[t];n.bytesPerElementMap={},n.bytesPerElement.forEach(function(e,t){let r=n.type[t];n.bytesPerElementMap[r]=e})}),Or=e}return Or[e]}function Ar(e,t){let n=kr(e);if(!n)throw`unknown internal format`;let r=n.bytesPerElementMap[t];if(r===void 0)throw`unknown internal format`;return r}function jr(e){let t=kr(e);if(!t)throw`unknown internal format`;return{format:t.textureFormat,type:t.type[0]}}function Mr(e){return(e&e-1)==0}function Nr(e,t,n,r){if(!At(e))return Mr(t)&&Mr(n);let i=kr(r);if(!i)throw`unknown internal format`;return i.colorRenderable&&i.textureFilterable}function Pr(e){let t=kr(e);if(!t)throw`unknown internal format`;return t.textureFilterable}function Fr(e,t,n){return Mt(t)?Ke(t):n||F}function Ir(e,t,n,r,i){if(i%1!=0)throw`can't guess dimensions`;if(!n&&!r){let e=Math.sqrt(i/(t===j?6:1));e%1==0?(n=e,r=e):(n=i,r=1)}else if(!r){if(r=i/n,r%1)throw`can't guess dimensions`}else if(!n&&(n=i/r,n%1))throw`can't guess dimensions`;return{width:n,height:r}}function Lr(e,t){t.colorspaceConversion!==void 0&&e.pixelStorei(un,t.colorspaceConversion),t.premultiplyAlpha!==void 0&&e.pixelStorei(dn,t.premultiplyAlpha),t.flipY!==void 0&&e.pixelStorei(fn,t.flipY)}function Rr(e){e.pixelStorei(rn,4),At(e)&&(e.pixelStorei(an,0),e.pixelStorei(on,0),e.pixelStorei(sn,0),e.pixelStorei(cn,0),e.pixelStorei(ln,0))}function zr(e,t,n,r){r.minMag&&(n.call(e,t,Jt,r.minMag),n.call(e,t,Yt,r.minMag)),r.min&&n.call(e,t,Jt,r.min),r.mag&&n.call(e,t,Yt,r.mag),r.wrap&&(n.call(e,t,Xt,r.wrap),n.call(e,t,Zt,r.wrap),(t===M||tt(e,t))&&n.call(e,t,Qt,r.wrap)),r.wrapR&&n.call(e,t,Qt,r.wrapR),r.wrapS&&n.call(e,t,Xt,r.wrapS),r.wrapT&&n.call(e,t,Zt,r.wrapT),r.minLod&&n.call(e,t,$t,r.minLod),r.maxLod&&n.call(e,t,en,r.maxLod),r.baseLevel&&n.call(e,t,tn,r.baseLevel),r.maxLevel&&n.call(e,t,nn,r.maxLevel)}function Br(e,t,n){let r=n.target||A;e.bindTexture(r,t),zr(e,r,e.texParameteri,n)}function Vr(e){return e||=D.textureColor,Mt(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Hr(e,t,n,r,i,a){n||=D.textureOptions,a||=k;let o=n.target||A;if(r||=n.width,i||=n.height,e.bindTexture(o,t),Nr(e,r,i,a))e.generateMipmap(o);else{let t=Pr(a)?Vt:Bt;e.texParameteri(o,Jt,t),e.texParameteri(o,Yt,t),e.texParameteri(o,Xt,zt),e.texParameteri(o,Zt,zt)}}function Ur(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function Wr(e,t){return t||={},t.cubeFaceOrder||[Ht,Ut,Wt,Gt,Kt,qt]}function Gr(e,t){let n=Wr(e,t).map(function(e,t){return{face:e,ndx:t}});return n.sort(function(e,t){return e.face-t.face}),n}function Kr(e,t,n,r){r||=D.textureOptions;let i=r.target||A,a=r.level||0,o=n.width,s=n.height,c=r.internalFormat||r.format||k,l=jr(c),u=r.format||l.format,d=r.type||l.type;if(Lr(e,r),e.bindTexture(i,t),i===j){let l=n.width,f=n.height,p,m;if(l/6===f)p=f,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(f/6===l)p=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3==f/2)p=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2==f/3)p=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw`can't figure out cube map from element: `+(n.src?n.src:n.nodeName);let h=Nt();h?(h.canvas.width=p,h.canvas.height=p,o=p,s=p,Gr(e,r).forEach(function(t){let r=m[t.ndx*2+0]*p,i=m[t.ndx*2+1]*p;h.drawImage(n,r,i,p,p,0,0,p,p),e.texImage2D(t.face,a,c,u,d,h.canvas)}),h.canvas.width=1,h.canvas.height=1):typeof createImageBitmap<`u`&&(o=p,s=p,Gr(e,r).forEach(function(l){let f=m[l.ndx*2+0]*p,h=m[l.ndx*2+1]*p;e.texImage2D(l.face,a,c,p,p,0,u,d,null),createImageBitmap(n,f,h,p,p,{premultiplyAlpha:`none`,colorSpaceConversion:`none`}).then(function(n){Lr(e,r),e.bindTexture(i,t),e.texImage2D(l.face,a,c,u,d,n),Ur(r)&&Hr(e,t,r,o,s,c)})}))}else if(i===M||i===N){let t=Math.min(n.width,n.height),r=Math.max(n.width,n.height),o=r/t;if(o%1!=0)throw`can not compute 3D dimensions of element`;let s=+(n.width===r),l=+(n.height===r);e.pixelStorei(rn,1),e.pixelStorei(an,n.width),e.pixelStorei(on,0),e.pixelStorei(ln,0),e.texImage3D(i,a,c,t,t,t,0,u,d,null);for(let r=0;r<o;++r){let o=r*t*s,c=r*t*l;e.pixelStorei(sn,o),e.pixelStorei(cn,c),e.texSubImage3D(i,a,0,0,r,t,t,1,u,d,n)}Rr(e)}else e.texImage2D(i,a,c,u,d,n);Ur(r)&&Hr(e,t,r,o,s,c),Br(e,t,r)}function qr(){}function Jr(e){if(typeof document<`u`){let t=document.createElement(`a`);return t.href=e,t.hostname===location.hostname&&t.port===location.port&&t.protocol===location.protocol}else{let t=new URL(location.href).origin;return new URL(e,location.href).origin===t}}function Yr(e,t){return t===void 0&&!Jr(e)?`anonymous`:t}function Xr(e,t,n){n||=qr;let r;if(t=t===void 0?D.crossOrigin:t,t=Yr(e,t),typeof Image<`u`){r=new Image,t!==void 0&&(r.crossOrigin=t);let i=function(){r.removeEventListener(`error`,a),r.removeEventListener(`load`,o),r=null},a=function(){let t=`couldn't load image: `+e;Xe(t),n(t,r),i()},o=function(){n(null,r),i()};return r.addEventListener(`error`,a),r.addEventListener(`load`,o),r.src=e,r}else if(typeof ImageBitmap<`u`){let i,a,o=function(){n(i,a)},s={};t&&(s.mode=`cors`),fetch(e,s).then(function(e){if(!e.ok)throw e;return e.blob()}).then(function(e){return createImageBitmap(e,{premultiplyAlpha:`none`,colorSpaceConversion:`none`})}).then(function(e){a=e,setTimeout(o)}).catch(function(e){i=e,setTimeout(o)}),r=null}return r}function Zr(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof ImageData<`u`&&e instanceof ImageData||typeof HTMLElement<`u`&&e instanceof HTMLElement}function Qr(e,t,n){return Zr(e)?(setTimeout(function(){n(null,e)}),e):Xr(e,t,n)}function $r(e,t,n){n||=D.textureOptions;let r=n.target||A;if(e.bindTexture(r,t),n.color===!1)return;let i=Vr(n.color);if(r===j)for(let t=0;t<6;++t)e.texImage2D(Ht+t,0,k,1,1,0,k,F,i);else r===M||r===N?e.texImage3D(r,0,k,1,1,1,0,k,F,i):e.texImage2D(r,0,k,1,1,0,k,F,i)}function ei(e,t,n,r){return r||=qr,n||=D.textureOptions,$r(e,t,n),n=Object.assign({},n),Qr(n.src,n.crossOrigin,function(i,a){i?r(i,t,a):(Kr(e,t,a,n),r(null,t,a))})}function ti(e,t,n,r){r||=qr;let i=n.src;if(i.length!==6)throw`there must be 6 urls for a cubemap`;let a=n.level||0,o=n.internalFormat||n.format||k,s=jr(o),c=n.format||s.format,l=n.type||F,u=n.target||A;if(u!==j)throw`target must be TEXTURE_CUBE_MAP`;$r(e,t,n),n=Object.assign({},n);let d=6,f=[],p=Wr(e,n),m;function h(i){return function(s,p){--d,s?f.push(s):p.width===p.height?(Lr(e,n),e.bindTexture(u,t),d===5?Wr().forEach(function(t){e.texImage2D(t,a,o,c,l,p)}):e.texImage2D(i,a,o,c,l,p),Ur(n)&&e.generateMipmap(u)):f.push(`cubemap face img is not a square: `+p.src),d===0&&r(f.length?f:void 0,t,m)}}m=i.map(function(e,t){return Qr(e,n.crossOrigin,h(p[t]))})}function ni(e,t,n,r){r||=qr;let i=n.src,a=n.internalFormat||n.format||k,o=jr(a),s=n.format||o.format,c=n.type||F,l=n.target||N;if(l!==M&&l!==N)throw`target must be TEXTURE_3D or TEXTURE_2D_ARRAY`;$r(e,t,n),n=Object.assign({},n);let u=i.length,d=[],f,p=n.level||0,m=n.width,h=n.height,g=i.length,_=!0;function v(i){return function(o,v){if(--u,o)d.push(o);else{if(Lr(e,n),e.bindTexture(l,t),_){_=!1,m=n.width||v.width,h=n.height||v.height,e.texImage3D(l,p,a,m,h,g,0,s,c,null);for(let t=0;t<g;++t)e.texSubImage3D(l,p,0,0,t,m,h,1,s,c,v)}else{let t=v,n;(v.width!==m||v.height!==h)&&(n=Nt(),t=n.canvas,n.canvas.width=m,n.canvas.height=h,n.drawImage(v,0,0,m,h)),e.texSubImage3D(l,p,0,0,i,m,h,1,s,c,t),n&&t===n.canvas&&(n.canvas.width=0,n.canvas.height=0)}Ur(n)&&e.generateMipmap(l)}u===0&&r(d.length?d:void 0,t,f)}}f=i.map(function(e,t){return Qr(e,n.crossOrigin,v(t))})}function ri(e,t,n,r){r||=D.textureOptions;let i=r.target||A;e.bindTexture(i,t);let a=r.width,o=r.height,s=r.depth,c=r.level||0,l=r.internalFormat||r.format||k,u=jr(l),d=r.format||u.format,f=r.type||Fr(e,n,u.type);Mt(n)?n instanceof Uint8ClampedArray&&(n=new Uint8Array(n.buffer)):n=new(Je(f))(n);let p=Ar(l,f),m=n.byteLength/p;if(m%1)throw`length wrong size for format: `+jt(e,d);let h;if(i===M||i===N)if(!a&&!o&&!s){let e=Math.cbrt(m);if(e%1!=0)throw`can't guess cube size of array of numElements: `+m;a=e,o=e,s=e}else a&&(!o||!s)?(h=Ir(e,i,o,s,m/a),o=h.width,s=h.height):o&&(!a||!s)?(h=Ir(e,i,a,s,m/o),a=h.width,s=h.height):(h=Ir(e,i,a,o,m/s),a=h.width,o=h.height);else h=Ir(e,i,a,o,m),a=h.width,o=h.height;if(Rr(e),e.pixelStorei(rn,r.unpackAlignment||1),Lr(e,r),i===j){let t=p/n.BYTES_PER_ELEMENT,i=m/6*t;Gr(e,r).forEach(t=>{let r=i*t.ndx,s=n.subarray(r,r+i);e.texImage2D(t.face,c,l,a,o,0,d,f,s)})}else i===M||i===N?e.texImage3D(i,c,l,a,o,s,0,d,f,n):e.texImage2D(i,c,l,a,o,0,d,f,n);return{width:a,height:o,depth:s,type:f}}function ii(e,t,n){let r=n.target||A;e.bindTexture(r,t);let i=n.level||0,a=n.internalFormat||n.format||k,o=jr(a),s=n.format||o.format,c=n.type||o.type;if(Lr(e,n),r===j)for(let t=0;t<6;++t)e.texImage2D(Ht+t,i,a,n.width,n.height,0,s,c,null);else r===M||r===N?e.texImage3D(r,i,a,n.width,n.height,n.depth,0,s,c,null):e.texImage2D(r,i,a,n.width,n.height,0,s,c,null)}function ai(e,t,n){n||=qr,t||=D.textureOptions;let r=e.createTexture(),i=t.target||A,a=t.width||1,o=t.height||1,s=t.internalFormat||k;e.bindTexture(i,r),i===j&&(e.texParameteri(i,Xt,zt),e.texParameteri(i,Zt,zt));let c=t.src;if(c)if(typeof c==`function`&&(c=c(e,t)),typeof c==`string`)ei(e,r,t,n);else if(Mt(c)||Array.isArray(c)&&(typeof c[0]==`number`||Array.isArray(c[0])||Mt(c[0]))){let n=ri(e,r,c,t);a=n.width,o=n.height}else Array.isArray(c)&&(typeof c[0]==`string`||Zr(c[0]))?i===j?ti(e,r,t,n):ni(e,r,t,n):(Kr(e,r,c,t),a=c.width,o=c.height);else ii(e,r,t);return Ur(t)&&Hr(e,r,t,a,o,s),Br(e,r,t),r}function oi(e,t,n,r,i,a){r||=n.width,i||=n.height,a||=n.depth;let o=n.target||A;e.bindTexture(o,t);let s=n.level||0,c=n.internalFormat||n.format||k,l=jr(c),u=n.format||l.format,d,f=n.src;if(d=f&&(Mt(f)||Array.isArray(f)&&typeof f[0]==`number`)?n.type||Fr(e,f,l.type):n.type||l.type,o===j)for(let t=0;t<6;++t)e.texImage2D(Ht+t,s,c,r,i,0,u,d,null);else o===M||o===N?e.texImage3D(o,s,c,r,i,a,0,u,d,null):e.texImage2D(o,s,c,r,i,0,u,d,null)}var si=Ze,ci=33984,li=35048,ui=34962,di=34963,fi=35345,pi=35718,mi=35721,hi=35971,gi=35382,_i=35396,vi=35398,yi=35392,bi=35395,xi=5126,Si=35664,Ci=35665,wi=35666,Ti=5124,Ei=35667,Di=35668,Oi=35669,ki=35670,Ai=35671,ji=35672,Mi=35673,Ni=35674,Pi=35675,Fi=35676,Ii=35678,Li=35680,Ri=35679,zi=35682,Bi=35685,Vi=35686,Hi=35687,Ui=35688,Wi=35689,Gi=35690,Ki=36289,qi=36292,Ji=36293,Yi=5125,Xi=36294,Zi=36295,Qi=36296,$i=36298,ea=36299,ta=36300,na=36303,ra=36306,ia=36307,aa=36308,oa=36311,sa=3553,ca=34067,la=32879,ua=35866,U={};function da(e,t){return U[t].bindPoint}function fa(e,t){return function(n){e.uniform1f(t,n)}}function pa(e,t){return function(n){e.uniform1fv(t,n)}}function ma(e,t){return function(n){e.uniform2fv(t,n)}}function ha(e,t){return function(n){e.uniform3fv(t,n)}}function ga(e,t){return function(n){e.uniform4fv(t,n)}}function _a(e,t){return function(n){e.uniform1i(t,n)}}function va(e,t){return function(n){e.uniform1iv(t,n)}}function ya(e,t){return function(n){e.uniform2iv(t,n)}}function ba(e,t){return function(n){e.uniform3iv(t,n)}}function xa(e,t){return function(n){e.uniform4iv(t,n)}}function Sa(e,t){return function(n){e.uniform1ui(t,n)}}function Ca(e,t){return function(n){e.uniform1uiv(t,n)}}function wa(e,t){return function(n){e.uniform2uiv(t,n)}}function Ta(e,t){return function(n){e.uniform3uiv(t,n)}}function Ea(e,t){return function(n){e.uniform4uiv(t,n)}}function Da(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function Oa(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function ka(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Aa(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function ja(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function Ma(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function Na(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function Pa(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function Fa(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function W(e,t,n,r){let i=da(e,t);return At(e)?function(t){let a,o;et(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(ci+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(ci+n),e.bindTexture(i,t)}}function G(e,t,n,r,i){let a=da(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return At(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(ci+o[r]);let i,s;et(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(ci+o[n]),e.bindTexture(a,t)})}}U[xi]={Type:Float32Array,size:4,setter:fa,arraySetter:pa},U[Si]={Type:Float32Array,size:8,setter:ma,cols:2},U[Ci]={Type:Float32Array,size:12,setter:ha,cols:3},U[wi]={Type:Float32Array,size:16,setter:ga,cols:4},U[Ti]={Type:Int32Array,size:4,setter:_a,arraySetter:va},U[Ei]={Type:Int32Array,size:8,setter:ya,cols:2},U[Di]={Type:Int32Array,size:12,setter:ba,cols:3},U[Oi]={Type:Int32Array,size:16,setter:xa,cols:4},U[Yi]={Type:Uint32Array,size:4,setter:Sa,arraySetter:Ca},U[Xi]={Type:Uint32Array,size:8,setter:wa,cols:2},U[Zi]={Type:Uint32Array,size:12,setter:Ta,cols:3},U[Qi]={Type:Uint32Array,size:16,setter:Ea,cols:4},U[ki]={Type:Uint32Array,size:4,setter:_a,arraySetter:va},U[Ai]={Type:Uint32Array,size:8,setter:ya,cols:2},U[ji]={Type:Uint32Array,size:12,setter:ba,cols:3},U[Mi]={Type:Uint32Array,size:16,setter:xa,cols:4},U[Ni]={Type:Float32Array,size:32,setter:Da,rows:2,cols:2},U[Pi]={Type:Float32Array,size:48,setter:Oa,rows:3,cols:3},U[Fi]={Type:Float32Array,size:64,setter:ka,rows:4,cols:4},U[Bi]={Type:Float32Array,size:32,setter:Aa,rows:2,cols:3},U[Vi]={Type:Float32Array,size:32,setter:Ma,rows:2,cols:4},U[Hi]={Type:Float32Array,size:48,setter:ja,rows:3,cols:2},U[Ui]={Type:Float32Array,size:48,setter:Pa,rows:3,cols:4},U[Wi]={Type:Float32Array,size:64,setter:Na,rows:4,cols:2},U[Gi]={Type:Float32Array,size:64,setter:Fa,rows:4,cols:3},U[Ii]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:sa},U[Li]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ca},U[Ri]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:la},U[zi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:sa},U[Ki]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ua},U[qi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ua},U[Ji]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ca},U[$i]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:sa},U[ea]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:la},U[ta]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ca},U[na]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ua},U[ra]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:sa},U[ia]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:la},U[aa]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ca},U[oa]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ua};function Ia(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(ui,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||xi,n.normalize||!1,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function K(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`);else e.bindBuffer(ui,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Ti,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function La(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`);else e.bindBuffer(ui,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Yi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function Ra(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(ui,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||xi,c=U[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),n.divisor!==void 0&&e.vertexAttribDivisor(t+r,n.divisor)}}var q={};q[xi]={size:4,setter:Ia},q[Si]={size:8,setter:Ia},q[Ci]={size:12,setter:Ia},q[wi]={size:16,setter:Ia},q[Ti]={size:4,setter:K},q[Ei]={size:8,setter:K},q[Di]={size:12,setter:K},q[Oi]={size:16,setter:K},q[Yi]={size:4,setter:La},q[Xi]={size:8,setter:La},q[Zi]={size:12,setter:La},q[Qi]={size:16,setter:La},q[ki]={size:4,setter:K},q[Ai]={size:8,setter:K},q[ji]={size:12,setter:K},q[Mi]={size:16,setter:K},q[Ni]={size:4,setter:Ra,count:2},q[Pi]={size:9,setter:Ra,count:3},q[Fi]={size:16,setter:Ra,count:4};function za(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}var Ba=/(\.|\[|]|\w+)/g,Va=e=>e>=`0`&&e<=`9`;function Ha(e,t,n,r){let i=e.split(Ba).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Va(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}else{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){eo(e,t)}}(s),o+=e}}}function Ua(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=U[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,pi);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(za(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Ha(s,e,a,i)}}return i}function Wa(e,t){let n={},r=e.getProgramParameter(t,hi);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function Ga(e,t){let n=e.getProgramParameter(t,pi),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,gi);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,_i),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,vi),size:e.getActiveUniformBlockParameter(t,n,yi),uniformIndices:e.getActiveUniformBlockParameter(t,n,bi)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}var Ka=/\[\d+\]\.$/,qa=(e,t)=>((e+(t-1))/t|0)*t;function Ja(e,t,n,r){if(t||n){r||=1;let t=e.length/4;return function(n){let i=0,a=0;for(let o=0;o<t;++o){for(let t=0;t<r;++t)e[i++]=n[a++];i+=4-r}}}else return function(t){t.length?e.set(t):e[0]=t}}function Ya(e,t,n,r){let i=n.blockSpecs,a=n.uniformData,o=i[r];if(!o)return si(`no uniform block object named:`,r),{name:r,uniforms:{}};let s=new ArrayBuffer(o.size),c=e.createBuffer(),l=o.index;e.bindBuffer(fi,c),e.uniformBlockBinding(t,o.index,l);let u=r+`.`;Ka.test(u)&&(u=u.replace(Ka,`.`));let d={},f={},p={};return o.uniformIndices.forEach(function(e){let t=a[e],n=t.name;n.startsWith(u)&&(n=n.substr(u.length));let r=n.endsWith(`[0]`);r&&(n=n.substr(0,n.length-3));let i=U[t.type],o=i.Type,c=r?qa(i.size,16)*t.size:i.size*t.size,l=new o(s,t.offset,c/o.BYTES_PER_ELEMENT);d[n]=l;let m=Ja(l,r,i.rows,i.cols);f[n]=m,Ha(n,m,p,f)}),{name:r,array:s,asFloat:new Float32Array(s),buffer:c,uniforms:d,setters:f}}function Xa(e,t,n){return Ya(e,t.program,t.uniformBlockSpec,n)}function Za(e,t,n){let r=(t.uniformBlockSpec||t).blockSpecs[n.name];if(r){let t=r.index;return e.bindBufferRange(fi,t,n.buffer,n.offset||0,n.array.byteLength),!0}return!1}function Qa(e,t,n){Za(e,t,n)&&e.bufferData(fi,n.array,li)}function $a(e,t){let n=e.setters;for(let e in t){let r=n[e];if(r){let n=t[e];r(n)}}}function eo(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):eo(e[n],t[n])}}function J(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)J(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function to(e,t){let n={},r=e.getProgramParameter(t,mi);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(za(r))continue;let a=e.getAttribLocation(t,r.name),o=q[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function no(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function Y(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(no(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(di,n.indices))}function ro(e,t){let n={program:t,uniformSetters:Ua(e,t),attribSetters:to(e,t)};return At(e)&&(n.uniformBlockSpec=Ga(e,t),n.transformFeedbackInfo=Wa(e,t)),n}var io=4,ao=5123;function oo(e,t,n,r,i,a){n=n===void 0?io:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?ao:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?ao:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var so=36160,X=36161,co=3553,lo=5121,uo=6402,fo=6408,po=33190,mo=36012,ho=35056,go=36013,_o=32854,vo=32855,yo=36194,bo=33189,xo=6401,So=36168,Co=34041,wo=36064,To=36096,Eo=36128,Do=33306,Oo=33071,ko=9729,Ao=[{format:fo,type:lo,min:ko,wrap:Oo},{format:Co}],Z={};Z[Co]=Do,Z[xo]=Eo,Z[So]=Eo,Z[uo]=To,Z[bo]=To,Z[po]=To,Z[mo]=To,Z[ho]=Do,Z[go]=Do;function jo(e,t){return Z[e]||Z[t]}var Q={};Q[_o]=!0,Q[vo]=!0,Q[yo]=!0,Q[Co]=!0,Q[bo]=!0,Q[xo]=!0,Q[So]=!0;function Mo(e){return Q[e]}function No(e){return e>=wo&&e<36096}function Po(e,t,n,r){let i=so,a=e.createFramebuffer();e.bindFramebuffer(i,a),n||=e.drawingBufferWidth,r||=e.drawingBufferHeight,t||=Ao;let o=[],s={framebuffer:a,attachments:[],width:n,height:r};return t.forEach(function(t,a){let c=t.attachment,l=t.samples,u=t.format,d=t.attachmentPoint||jo(u,t.internalFormat);if(d||=wo+a,No(d)&&o.push(d),!c)if(l!==void 0||Mo(u))c=e.createRenderbuffer(),e.bindRenderbuffer(X,c),l>1?e.renderbufferStorageMultisample(X,l,u,n,r):e.renderbufferStorage(X,u,n,r);else{let i=Object.assign({},t);i.width=n,i.height=r,i.auto===void 0&&(i.auto=!1,i.min=i.min||i.minMag||ko,i.mag=i.mag||i.minMag||ko,i.wrapS=i.wrapS||i.wrap||Oo,i.wrapT=i.wrapT||i.wrap||Oo),c=ai(e,i)}if($e(e,c))e.framebufferRenderbuffer(i,d,X,c);else if(et(e,c))t.layer===void 0?e.framebufferTexture2D(i,d,t.target||co,c,t.level||0):e.framebufferTextureLayer(i,d,c,t.level||0,t.layer);else throw Error(`unknown attachment type`);s.attachments.push(c)}),e.drawBuffers&&e.drawBuffers(o),s}function Fo(e,t,n,r,i){r||=e.drawingBufferWidth,i||=e.drawingBufferHeight,t.width=r,t.height=i,n||=Ao,n.forEach(function(n,a){let o=t.attachments[a],s=n.format,c=n.samples;if(c!==void 0||$e(e,o))e.bindRenderbuffer(X,o),c>1?e.renderbufferStorageMultisample(X,c,s,r,i):e.renderbufferStorage(X,s,r,i);else if(et(e,o))oi(e,o,n,r,i);else throw Error(`unknown attachment type`)})}function Io(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),t.length||(t=[t]),t.forEach(function(t){Y(e,t,n)}),e.bindVertexArray(null),{numElements:n.numElements,elementType:n.elementType,vertexArrayObject:r}}var Lo={addExtensionsToContext:!0},Ro=/^(.*?)_/;function zo(e,t){jt(e,0);let n=e.getExtension(t);if(n){let r={},i=Ro.exec(t)[1],a=`_`+i;for(let t in n){let o=n[t],s=typeof o==`function`,c=s?i:a,l=t;t.endsWith(c)&&(l=t.substring(0,t.length-c.length)),e[l]===void 0?s?e[l]=function(e){return function(){return e.apply(n,arguments)}}(o):(e[l]=o,r[l]=o):!s&&e[l]!==o&&Ze(l,e[l],o,t)}r.constructor={name:n.constructor.name},jt(r,0)}return n}var Bo=[`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_float`,`EXT_color_buffer_half_float`,`EXT_disjoint_timer_query`,`EXT_disjoint_timer_query_webgl2`,`EXT_frag_depth`,`EXT_sRGB`,`EXT_shader_texture_lod`,`EXT_texture_filter_anisotropic`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_atc`,`WEBGL_compressed_texture_etc1`,`WEBGL_compressed_texture_pvrtc`,`WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_depth_texture`,`WEBGL_draw_buffers`];function Vo(e){for(let t=0;t<Bo.length;++t)zo(e,Bo[t])}function Ho(e,t){let n=[`webgl2`,`webgl`,`experimental-webgl`],r=null;for(let i=0;i<n.length;++i)if(r=e.getContext(n[i],t),r){Lo.addExtensionsToContext&&Vo(r);break}return r}function Uo(e,t){return Ho(e,t)}function Wo(e,t,r,i,a=!1){let o=l(e)?e:e.name,s=!l(e)&&e.extent||[0,1];if(r===void 0&&!l(e)&&(r=e.count),o){let e=se(o);if(c(e)){let n=Jo(e,{extent:s,count:r,reverse:a});return Hs(t,{minMag:t.LINEAR,format:t.RGB,height:1,wrap:t.CLAMP_TO_EDGE},n,i)}else if(n(e))return qo(a?Array.from(e).reverse():e,t,r,i);else throw Error(`Unknown scheme: `+o)}}function Go(e,t=`rgb`,n,r){let i=Jo(ce(e,l(t)?t:t.type,l(t)?void 0:t.gamma));return Hs(n,{minMag:n.LINEAR,format:n.RGB,height:1,wrap:n.CLAMP_TO_EDGE},i,r)}function Ko(e,t,n,r){let i=Math.max(e.length,n||0),a=new Float32Array(i);for(let t=0;t<i;t++)a[t]=e[t%e.length];return Hs(t,{minMag:t.NEAREST,format:t.RED,internalFormat:t.R32F,height:1},a,r)}function qo(e,t,n,r){let i=Yo(e,n);return Hs(t,{minMag:t.NEAREST,format:t.RGB,height:1},i,r)}function Jo(e,{extent:t=[0,1],reverse:n=!1,count:r=256}={}){let i=t[0],a=S(t)-i,o=m(r).map(e=>e/(r-1)).map(e=>i+e/a).map(e);return n&&o.reverse(),Yo(o)}function Yo(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*3);for(let t=0;t<n;t++){let n=e[t%e.length],i=g(n);if(!i)throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);let a=i.rgb();r[t*3+0]=a.r,r[t*3+1]=a.g,r[t*3+2]=a.b}return r}function Xo(e){let t=g(e).rgb();return[t.r,t.g,t.b].map(e=>e/255)}var Zo=`attr_`,Qo=`uDomain_`,$o=`range_`,es=`accessor_`,ts=`scale_`,ns=`getScaled_`,rs=`uRangeTexture_`,is=`uParam_`,as=`checkSelection_`;function os(e){let t=e.match(/^(?:(\w+)-)?(\w+)$/);if(!t)throw Error(`Not a scale type: `+e);return{family:t[1]||`continuous`,transform:t[2]}}function ss(e){return e.type===`quantize`?e.thresholds():e.domain()}function cs(e){return e.type===`quantize`?e.range().length:e.type===`threshold`?e.domain().length+1:e.domain().length}function ls(e,t){return`${es}${e}_${t}`}function us(e,t,n){let r;if(x(e))r=$(o(e)(n));else if(l(n))if(C(e))r=ys(n);else throw Error(`String values are not supported on the "${e}" channel: ${n}`);else if(i(n))r=$(+!!n);else if(n===null)if(C(e))r=$([0,0,0]);else throw Error(`null value is not supported on the "${e}" chanel.`);else r=$(n);let a=ls(e,t);return{channel:e,accessorGlsl:`
${r.type} ${a}() {
    // Constant value
    return ${r};
}`,accessorFunctionName:a}}function ds(e,t){let n=`float`,r=e=>e;C(e)?(n=`vec3`,r=e=>Xo(e)):x(e)&&(r=o(e));let i=`u${ks(e)}_${t}`,a=`    // Dynamic value\n    uniform ${n} ${i};`,s=ls(e,t);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${n} ${s}() {
    // Dynamic value
    return ${i};
}`,accessorFunctionName:s,adjuster:r}}function fs(e,t,n,r=[e]){let{attributeType:i}=Ss(t,e),a=Os(r),o=`in highp ${i} ${a};`,s=ls(e,n);return{channel:e,attributeName:a,attributeGlsl:o,accessorGlsl:`
${i} ${s}() {
    return ${a};
}`,accessorFunctionName:s}}function ps(e,t,n){let{attributeType:r}=Ss(t,e),i=Os(e),a=`    uniform highp ${r} ${i};`,o=ls(e,n);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${r} ${o}() {
    return ${i};
}`,accessorFunctionName:o}}function ms(e,t,n){t??=fe();let r=te(e),i=Qo+r,a=$o+r,{hp:o,attributeType:s}=Ss(t,e),c=t.domain?w(t.type)?ss(t).length:t.domain().length:void 0,l,u=[];u.push(``),u.push(`/`.repeat(70)),u.push(`// Channel: ${e}`),u.push(``);let{transform:d}=os(t.type),f=(e,...t)=>xs.apply(null,[e,`value`,...t]),m;switch(d){case`linear`:m=f(`scaleLinear`,`domain`,a);break;case`log`:m=f(`scaleLog`,`domain`,a,t.base());break;case`symlog`:m=f(`scaleSymlog`,`domain`,a,t.constant());break;case`pow`:case`sqrt`:m=f(`scalePow`,`domain`,a,t.exponent());break;case`index`:case`locus`:m=f(`scaleBandHp`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`point`:case`band`:m=f(`scaleBand`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`ordinal`:case`null`:case`identity`:m=f(`scaleIdentity`);break;case`threshold`:case`quantize`:break;default:throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`)}let h=As(t,e),g;if(h&&e==r){let e=t.props.range??[];if(p(e)||e.some(p)){if(h.length<1||h.length>4)throw Error(`A range with ExprRefs must have 1-4 elements, not ${h.length}! Range: ${JSON.stringify(h)}`);g=`    uniform ${_s(h.length)} ${a};`}else if(h.length&&h.every(oe)){let e=bs(h);u.push(`const ${e.type} ${a} = ${e};`)}}let _=vs(e),v;if(C(e)){let n=rs+r;if(e==r&&u.push(`uniform sampler2D ${n};`),T(t.type))v=`getInterpolatedColor(${n}, transformed)`;else if(de(t.type)||w(t.type))v=`getDiscreteColor(${n}, int(transformed))`;else throw Error(`Problem with color scale!`)}else if(t.type===`ordinal`||w(t.type)){let t=rs+r;e==r&&u.push(`uniform sampler2D ${t};`),v=`getDiscreteColor(${t}, int(transformed)).r`}let y=[],b=T(t.type)&&c>2,x=w(t.type)||b;if(y.push(`int slot = 0;`),x){let e=i;y.push(b?`while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }`:`while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`)}let ee=T(t.type)||w(t.type)||[`band`,`point`].includes(t.type);if(m){let e=i;ee&&(o?y.push(`vec3 domain = ${e};`):y.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)),y.push(`float transformed = ${m};`),b&&y.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`)}else y.push(`float transformed = float(slot);`);`clamp`in t&&t.clamp()&&y.push(`transformed = clampToRange(transformed, ${bs(h)});`),y.push(`return ${v??`transformed`};`),u.push(`
${_} ${ts}${e}(${s} value) {
${y.map(e=>`    ${e}\n`).join(``)}
}`);let S=u.join(`
`);if(ee&&e==r){let e=T(t.type)||w(t.type)?c:2;l=o?`    highp vec3 ${i};`:`    mediump float ${i}[${e}];`}return{glsl:S,domainUniformName:i,domainUniform:l,rangeUniformName:a,rangeUniform:g}}function hs(e,t){let n=vs(e),r=[],i=[];for(let n=0;n<t.length;n++){let{accessor:a,predicate:o}=t[n],s=ls(e,n),{param:c,empty:l}=o;r.push(c?`${as}${c}(${!!l})`:null),i.push(a.scaleChannel?`return ${ts}${e}(${s}());`:`return ${s}();`)}return`${n} ${ns}${e}() {
${js(r,i)}
}

#define ${e}_DEFINED`}function gs(e){if(!oe(e))throw Error(`Not a number: ${e}`);if(e==1/0)return`3.402823466e+38`;if(e==-1/0)return`-3.402823466e+38`;{let t=`${e}`;return/^(-)?\d+$/.test(t)&&(t+=`.0`),t}}function $(e){typeof e==`number`&&(e=[e]);let t=e.length;if(t<1||t>4)throw Error(`Invalid number of components: `+t);let n=_s(t),r=`${n}(${e.map(gs).join(`, `)})`;return Object.assign(r,{type:n,numComponents:t})}function _s(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`Invalid number of components: `+e)}}function vs(e){return C(e)?`vec3`:e==`uniqueId`?`uint`:`float`}function ys(e){return $(Xo(e))}function bs(e){return $([e[0],S(e)])}function xs(e,...t){let r=[];for(let e of t)oe(e)?r.push(gs(e)):n(e)?r.push($(e)):r.push(e);return`${e}(${r.join(`, `)})`}function Ss(e,t){let n=e&&de(e.type),r=e&&ge(e.type),i=r&&he(e.domain()),a=i?{attributeType:`uvec2`,arrayConstructor:Uint32Array}:r?{attributeType:`uint`,arrayConstructor:Uint32Array}:n?{attributeType:`uint`,arrayConstructor:Uint16Array}:t==`uniqueId`?{attributeType:`uint`,arrayConstructor:Uint32Array}:{attributeType:`float`,arrayConstructor:Float32Array};return Object.assign(a,{numComponents:+(a.attributeType.match(/^(?:u)?vec([234])$/)?.[1]??1),discrete:n,hp:r,largeHp:i})}var Cs=2**12;Cs-1;function ws(e,t=[]){let n=e%Cs;return t[0]=(e-n)/Cs,t[1]=n,t}function Ts(e){let t=e%Cs;return[e-t,t]}function Es(e){return[...Ts(e[0]),e[1]-e[0]]}function Ds(e){let t=new le([],JSON.stringify);for(let[n,r]of Object.entries(e)){let e=r.channelDef;if(_(e)){let i=[e.field,r.scale?(T(r.scale.type)||w(r.scale.type))??!1:!1];t.set(i,[...t.get(i)??[],n])}}return t}function Os(e){return Zo+v(e).toSorted().join(`_`)}function ks(e){return e[0].toUpperCase()+e.slice(1)}var As=(e,t)=>ue(e.type)||T(e.type)&&C(t)?[0,1]:e.range?e.range():void 0;function js(e,t){if(e.length!=t.length)throw Error(`Unequal array lengths`);let n=e.length;if(n==0)return``;if(n==1&&e[0]==null)return t[0];let r=[];for(let i=0;i<n;i++){let a=e[i],o=i==0?`if (${a})`:a==null&&i==n-1?`else`:`else if (${a})`;r.push(`    ${o} {
        ${t[i]}
    }`)}return r.join(`
`)}var Ms=4294967295,Ns=4294967295;function Ps(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Fs(e,t={}){let n=Array.from(e,e=>Ls(e,`key`)),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??Rs(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a);o.fill(Ms);let s=a-1;for(let e of n){if(e===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let t=Ps(e)&s,n=!1;for(let r=0;r<a;r+=1){let r=o[t];if(r===4294967295||r===e){o[t]=e,n=!0;break}t=t+1&s}if(!n)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Is(e,t){if(!Number.isSafeInteger(e)||e<1)throw Error(`capacity must be a positive integer.`);if(e&e-1)throw Error(`capacity must be a power of two.`);if(!Number.isSafeInteger(t)||t<1)throw Error(`maxTextureSize must be a positive integer.`);if(e>t*t)throw Error(`Selection hash table exceeds maximum texture capacity.`);let n=1<<Math.floor(Math.log2(t)),r=Math.min(e,n),i=e/r;if(i>t)throw Error(`Selection hash table dimensions exceed maximum texture size.`);return{width:r,height:i}}function Ls(e,t){if(!Number.isSafeInteger(e)||e<0||e>Ns)throw Error(t+` must be a non-negative u32.`);return e>>>0}function Rs(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var zs=class{#e=!1;#t=()=>{};_ownedTextures=new Set;_placementDisposers=new Set;constructor(e,t,n={},r){let i=t??(()=>({width:void 0,height:void 0}));this._canvasSizeHelper=void 0,this._appliedCanvasSize=void 0,this._onCanvasResize=r??(()=>{}),this._shaderCache=new Map,this.rangeTextures=new WeakMap,this.placementTextures=new WeakMap,this.selectionTextures=new WeakMap;let a=document.createElement(`canvas`),o=Uo(a,{antialias:!0,depth:!1,premultipliedAlpha:!0,...n});if(!o)throw Error(`Unable to initialize WebGL. Your browser or machine may not support it.`);if(!At(o))throw Error(`Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.`);Vo(o);let s=o.getExtension(`WEBGL_provoking_vertex`);s&&s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),this.canvas=a,this.gl=o,this._pickingAttachmentOptions=[{format:o.RGBA,type:o.UNSIGNED_BYTE,minMag:o.LINEAR,wrap:o.CLAMP_TO_EDGE}],this._pickingBufferInfo=Po(o,this._pickingAttachmentOptions),o.bindFramebuffer(o.FRAMEBUFFER,null),e.appendChild(a);try{this._canvasSizeHelper=new we(e,a,i,()=>{this.adjustGl()&&this._onCanvasResize()}),this.adjustGl()}catch(e){throw this._canvasSizeHelper?.finalize(),a.remove(),e}}getPlacementTexture(e){let t=e.getSnapshot(),n=this.placementTextures.get(e);if(n?.geometryRevision===t.geometryRevision)return n.texture;let r=n?.data.length===t.rectangles.length/2?n.data:new Float32Array(t.rectangles.length/2);for(let e=0;e<t.rectangles.length/4;e++)r[e*2]=t.rectangles[e*4+1],r[e*2+1]=t.rectangles[e*4+3];let i=Hs(this.gl,{internalFormat:this.gl.RG32F,format:this.gl.RG,height:1},r,n?.texture);if(this.placementTextures.set(e,{texture:i,geometryRevision:t.geometryRevision,data:r}),this._ownedTextures.add(i),!n){let t;t=e.onDispose(()=>{this._placementDisposers.delete(t);let n=this.placementTextures.get(e);n&&(this._ownedTextures.delete(n.texture)&&this.gl.deleteTexture(n.texture),this.placementTextures.delete(e))}),this._placementDisposers.add(t)}return i}invalidateSize(){return this._canvasSizeHelper.invalidate(),this.adjustGl()}compileShader(e,t){n(t)&&(t=t.join(`

`));let r=this.gl,i=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,``),a=this._shaderCache.get(i);if(!a){let n=[`#version 300 es`,`precision mediump float;`,t].join(`

`);a=r.createShader(e),r.shaderSource(a,n),r.compileShader(a),this._shaderCache.set(i,a)}return a}adjustGl(){let e=this.getLogicalCanvasSize(),t=this.getPhysicalCanvasSize(e);return this._appliedCanvasSize&&this._appliedCanvasSize.logicalWidth==e.width&&this._appliedCanvasSize.logicalHeight==e.height&&this._appliedCanvasSize.physicalWidth==t.width&&this._appliedCanvasSize.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,Fo(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions),this._appliedCanvasSize={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},!0)}finalize(){if(!this.#e){this.#e=!0,this.#t();for(let e of this._placementDisposers)e();this._placementDisposers.clear();for(let e of this._ownedTextures)this.gl.deleteTexture(e);this._ownedTextures.clear();for(let e of this._shaderCache.values())this.gl.deleteShader(e);this._shaderCache.clear();for(let e of this._pickingBufferInfo.attachments)this.gl.deleteTexture(e);this.gl.deleteFramebuffer(this._pickingBufferInfo.framebuffer),this._canvasSizeHelper.finalize(),this.canvas.remove()}}setResourceFinalizer(e){this.#t=e}getPhysicalCanvasSize(e){return this._canvasSizeHelper.getPhysicalCanvasSize(e)}getDevicePixelRatio(e){return this._canvasSizeHelper.getDevicePixelRatio(e)}getLogicalCanvasSize(){return this._canvasSizeHelper.getLogicalCanvasSize()}createRangeTexture(e,t=!1){let n=this.rangeTextures.get(e.getScale());if(!t&&n)return;function r(e,t){return de(t.type)?t.domain().length:t.type==`threshold`||t.type==`quantize`?cs(t):t.type==`quantile`?e??4:e}let i=e.channel;if(C(i)){let t=e.getScale(),i=t.props,a=t.range(),o;if(i.scheme)if(de(t.type)||w(t.type))o=qo(a,this.gl,cs(t),n);else{let e=l(i.scheme)?void 0:i.scheme.count;e=r(e,t),o=Wo(i.scheme,this.gl,e,n,!!i.reverse)}else o=ue(t.type)||T(t.type)&&a.length>1?Go(a,i.interpolate,this.gl,n):qo(a,this.gl,w(t.type)?cs(t):t.domain().length,n);this.rangeTextures.set(t,o),this._ownedTextures.add(o)}else{let t=e.getScale();if(t.type===`ordinal`||w(t.type)){let e=x(i)?o(i):e=>e,r=Ko(t.range().map(e),this.gl,w(t.type)?cs(t):t.domain().length,n);this.rangeTextures.set(t,r),this._ownedTextures.add(r)}}}createSelectionTexture(e,n=!0){if(!t(e))throw Error(`Not a multi-point selection, cannot create texture`);let{table:r,capacity:i}=Fs(e.data.keys()),{width:a,height:o}=Is(i,this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),s=this.selectionTextures.get(e),c=this.gl,l=Hs(this.gl,{auto:!1,level:0,min:c.NEAREST,mag:c.NEAREST,format:c.RED_INTEGER,internalFormat:c.R32UI,width:a,height:o},r,n?s:!1);c.bindTexture(c.TEXTURE_2D,l),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_BASE_LEVEL,0),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAX_LEVEL,0),c.bindTexture(c.TEXTURE_2D,null),this.selectionTextures.set(e,l),this._ownedTextures.add(l)}};function Bs(e,t=``,n=0){let r=[...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Vs(e,t,n){let r=e.createProgram();e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);function i(){let i,a;if(!e.getProgramParameter(r,e.LINK_STATUS)){i=e.getProgramInfoLog(r);for(let r of[t,n])e.getShaderParameter(r,e.COMPILE_STATUS)||(i=e.getShaderInfoLog(r),a=Bs(e.getShaderSource(r),i,0)+`\nError compiling: ${i}`,e.deleteShader(r));e.deleteProgram(r)}if(i)return{message:i,detail:a}}return{program:r,getProgramErrors:i}}function Hs(e,t,n,r){return r?ri(e,r,n,t):r=ai(e,{...t,src:n}),r}function Us(e,t,n,r){let{height:i,framebuffer:a}=t,o=new Uint8Array(4);return e.bindFramebuffer(e.FRAMEBUFFER,a),e.readPixels(n,i-r-1,1,1,e.RGBA,e.UNSIGNED_BYTE,o),e.bindFramebuffer(e.FRAMEBUFFER,null),o}var Ws=class extends be{#e=[0,0,0,0];#t;#n=[];#r;#i;#a;#o=new Set;#s=new Set;#c;#l=void 0;#u=1;#d={width:0,height:0};#f;constructor(e,t){if(super(e),this.#i=t.webGLHelper,this.#a=t.markAdapter,this.#r=t.framebufferInfo,this.#u=t.devicePixelRatio,this.#d=t.canvasSize,this.#c=t.markPredicate??(()=>!0),this.#f=t.pixelOffset,t.clearColor){let e=g(t.clearColor).rgb();this.#e=[e.r/255,e.g/255,e.b/255,e.opacity]}}getDevicePixelRatio(){return this.#u}pushView(e,t){this.#s.add(e),this.#l=t}renderMark(e,t){if(!this.#c(e)||this.globalOptions.picking&&!e.isPickingParticipant())return;let n=ne(t);this.#n.push({mark:e,options:t,coords:this.#l,placement:t.placement,clip:ie(n,e.properties.clip,this.#l),cullClip:n})}render(){if(this.finish(),this.#a.synchronize(this.#o),this.#t.length==0)return;let e=this.#i.gl,t=this.#r;t?(e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.viewport(0,0,t.width,t.height)):e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.SCISSOR_TEST),e.clearColor(...this.#e),e.clear(e.COLOR_BUFFER_BIT);for(let e of this.#s)e.onBeforeRender();for(let e of this.#t)e();this.#r&&e.bindFramebuffer(e.FRAMEBUFFER,null)}finish(){if(!this.#t){let e=this.#n.map(e=>e.mark);this.#a.prepareMarks(e),this.#a.synchronize(e.map(e=>this.#a.getMarkEntry(e)).filter(e=>e)),this.#p()}}#p(){this.#t=[];let e=!0,t=!0,n=t=>()=>{e&&t()},r=n=>()=>{e&&t&&n()},i=pe(this.#n.reverse(),e=>e.mark);for(let[a,o]of[...i.entries()].reverse()){let i=this.#a.getMarkEntry(a);if(!i)continue;let s=i.graphics;if(!this.#a.isEntryDrawable(i))continue;this.#o.add(i);let c=o.map(e=>({...e,callback:s.render(e.options)})).filter(e=>e.callback);if(c.length==0)continue;this.#t.push(()=>{e=this.#a.isEntryDrawable(i)&&a.unitView.getEffectiveOpacity()>0});let l=c[0].placement,u=l?{...this.globalOptions,placement:l}:this.globalOptions;this.#t.push(...s.prepareRender(u).map(e=>n(e)));let d,f,p;for(let e of c){let i=e.coords;(!i.equals(d)||!ee(e.clip,f)||!ee(e.cullClip,p))&&this.#t.push(n(()=>{t=s.setViewport(this.#d,this.#u,i,e.clip,e.cullClip,this.#f)})),this.#t.push(r(e.callback)),d=e.coords,f=e.clip,p=e.cullClip}}}},Gs=class extends be{constructor(...e){super({}),this.contexts=e}beginSampleFacetBatch(){for(let e of this.contexts)e.beginSampleFacetBatch()}endSampleFacetBatch(){for(let e of this.contexts)e.endSampleFacetBatch()}pushView(e,t){for(let n of this.contexts)n.pushView(e,t)}popView(e){for(let t of this.contexts)t.popView(e)}renderMark(e,t){for(let n of this.contexts)n.renderMark(e,t)}},Ks=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;constructor({viewRoot:e,glHelper:t,markAdapter:n,getBackground:r,broadcast:i,onLayoutComputed:a}){this.#e=e,this.#t=t,this.#n=n,this.#r=r,this.#i=i,this.#a=a,this.#o=void 0,this.#s=void 0,this.#c=!1}computeLayout(){if(!this.#e)return;this.#i(`layout`),this.#t.invalidateSize();let e=5;for(;;){let t=this.#l();if(!t)return;if(!this.#t.invalidateSize()){this.#u(t),this.#a(),this.#i(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}#l(){let e=this.#e,t=this.#t.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height))return console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`),!1;let n=this.#t.getDevicePixelRatio(t);return{layoutResult:Ce(`layout`,()=>xe(e,ye.create(0,0,t.width,t.height),{devicePixelRatio:n})),canvasSize:t,devicePixelRatio:n}}#u({layoutResult:e,canvasSize:t,devicePixelRatio:n}){let r={webGLHelper:this.#t,markAdapter:this.#n,canvasSize:t,devicePixelRatio:n},i=new Ws({picking:!1},{...r,clearColor:this.#r()}),a=new Ws({picking:!0},{...r,framebufferInfo:this.#t._pickingBufferInfo});Ce(`layoutReplay`,()=>e.collectRenderCommands(new Gs(i,a))),i.finish(),a.finish(),this.#o=i,this.#s=a}renderAll(){let e=Se();e?.beginFrame(`webgl`),Ce(`render`,()=>this.#o?.render()),this.#c=!0,e?.endFrame()}renderPickingFramebuffer(){if(!this.#c)return;let e=Se();e?.beginFrame(`webgl`,`picking`),Ce(`picking`,()=>this.#s.render()),this.#c=!1,e?.endFrame()}};function qs(e,t,n={}){let r=n.x??0,i=n.y??0,a=n.width??t.width,o=n.height??t.height;Qs(t,r,i,a,o);let s=new Uint8Array(a*o*4);e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer);try{e.readPixels(r,t.height-i-o,a,o,e.RGBA,e.UNSIGNED_BYTE,s)}finally{e.bindFramebuffer(e.FRAMEBUFFER,null)}return{pixels:Zs(s,a,o,n.unpremultiplyAlpha??!1),width:a,height:o}}function Js(e,t,n=`image/png`,r={}){return Xs(e,t,r).toDataURL(n)}function Ys(e,t,n=`image/png`,r={}){let i=Xs(e,t,r);return new Promise((e,t)=>{i.toBlob(r=>{r?e(r):t(Error(`Could not encode framebuffer as ${n}.`))},n)})}function Xs(e,t,n){let{pixels:r,width:i,height:a}=qs(e,t,n),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=s.createImageData(i,a);return c.data.set(r),s.putImageData(c,0,0),o}function Zs(e,t,n,r){let i=new Uint8ClampedArray(e.length),a=t*4;for(let t=0;t<n;t++){let r=(n-t-1)*a,o=t*a;i.set(e.subarray(r,r+a),o)}if(r)for(let e=0;e<i.length;e+=4){let t=i[e+3];if(t==0)i[e]=0,i[e+1]=0,i[e+2]=0;else if(t<255){let n=255/t;i[e]=Math.round(i[e]*n),i[e+1]=Math.round(i[e+1]*n),i[e+2]=Math.round(i[e+2]*n)}}return i}function Qs(e,t,n,r,i){if(![t,n,r,i].every(Number.isInteger))throw RangeError(`Framebuffer readback bounds must be integers.`);if(t<0||n<0||r<=0||i<=0||t+r>e.width||n+i>e.height)throw RangeError(`Framebuffer readback bounds are out of range.`)}function $s({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,devicePixelRatio:a,clearColor:o=`white`}){let{gl:s,framebufferInfo:c}=tc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return Js(s,c,`image/png`)}finally{nc(s,c)}}async function ec({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o=`white`,mimeType:s=`image/png`}){if(s!=`image/png`)throw Error(`Unsupported raster export MIME type: ${s}`);let{gl:c,framebufferInfo:l}=tc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return await Ys(c,l,s)}finally{nc(c,l)}}function tc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o}){r??=e.getLogicalCanvasSize().width,i??=e.getLogicalCanvasSize().height,a??=window.devicePixelRatio??1;let s=e.gl,c=Math.floor(r*a),l=Math.floor(i*a),u=Po(s,[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],c,l),d;try{d=Po(s,[{format:s.RGBA8,samples:Math.min(4,s.getParameter(s.MAX_SAMPLES))}],c,l);let f=new Ws({picking:!1},{webGLHelper:e,markAdapter:t,canvasSize:{width:r,height:i},devicePixelRatio:a,clearColor:o,framebufferInfo:d});return xe(n,ye.create(0,0,r,i),{devicePixelRatio:a}).collectRenderCommands(f),f.finish(),f.render(),s.disable(s.SCISSOR_TEST),s.bindFramebuffer(s.READ_FRAMEBUFFER,d.framebuffer),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,u.framebuffer),s.blitFramebuffer(0,0,c,l,0,0,c,l,s.COLOR_BUFFER_BIT,s.NEAREST),{gl:s,framebufferInfo:u}}catch(e){throw nc(s,u),e}finally{d&&(s.deleteRenderbuffer(d.attachments[0]),s.deleteFramebuffer(d.framebuffer))}}function nc(e,t){e.deleteTexture(t.attachments[0]),e.deleteFramebuffer(t.framebuffer)}var rc=`flat out lowp vec4 vFillColor;
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
    bool headRepeat
) {
    if (
        headRepeat ||
        stemHalfWidth < 0.0
    ) {
        return configuredRHeadSlope;
    }

    if (uHeadPlacement == HEAD_PLACEMENT_OUTSIDE) {
        if (!uStartNotch || stemHalfWidth <= 0.0) {
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

    float maxJoinLength = max(
        halfLength * 2.0 - uMinStemLength,
        0.0
    );
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
    return direction == DIRECTION_REVERSE
        ? vec2(outsideHeadOffset, 0.0)
        : vec2(0.0, outsideHeadOffset);
}

void main(void) {
    vec2 a = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );
    vec2 b = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    );
    float direction = getScaled_direction();

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
    float rHeadSlope = effectiveHeadSlope(
        segmentLength * 0.5,
        headHalfWidth,
        stemHalfWidth,
        configuredRHeadSlope,
        configuredRHeadNotchSlope,
        uHeadSpacing >= 0.0
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
    vRStartNotchSlope = uStartNotch ? vRHeadSlope : 0.0;
    vDirection = direction;
    vHeadRepeatFootprintLength = headRepeatFootprintLength(
        vHeadHalfWidth,
        vRHeadSlope,
        vHeadStrokeWidth,
        vHalfStrokeWidth
    );
    vHeadSpacing = uHeadSpacing >= 0.0 ? uHeadSpacing * arrowSize : -1.0;
    vStrokeColor = vec4(getScaled_stroke() * strokeOpacity, strokeOpacity);

    gl_Position = unitToNdc(p);

    float fillOpacity = getScaled_fillOpacity() * uViewOpacity;
    vFillColor = vec4(getScaled_fill() * fillOpacity, fillOpacity);

    setupPicking();
}
`,ic=`in vec2 vPosInPixels;

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
        vec2 b = w - e*clamp( dot(w,e)/dot(e,e), 0.0, 1.0 );
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
    float rStartNotchSlope
) {
    if (halfWidth < 0.0) {
        return FAR_OUTSIDE;
    }

    float headSideLength = halfWidth * rHeadSlope;
    float startNotchLength = halfWidth * rStartNotchSlope;
    vec2 vertices[6] = vec2[6](
        vec2(-halfLength, 0.0),
        vec2(-halfLength + headSideLength, halfWidth),
        vec2(halfLength, halfWidth),
        vec2(halfLength - startNotchLength, 0.0),
        vec2(halfLength, -halfWidth),
        vec2(-halfLength + headSideLength, -halfWidth)
    );

    return sdPolygon(vertices, p);
}

// Inner corner of an open head, offset perpendicular to the outer edge.
vec2 headInnerCorner(float halfWidth, float rHeadSlope, float headStrokeWidth) {
    float headAxisLength = halfWidth * rHeadSlope;
    vec2 topOuter = vec2(headAxisLength, halfWidth);
    vec2 normalOffset = headStrokeWidth
        * normalize(vec2(halfWidth, -headAxisLength));
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

float sdArrow(vec2 arrowPos, float arrowHalfLength) {
    float stemDistance = sdStem(
        arrowPos,
        arrowHalfLength,
        vStemHalfWidth,
        vRHeadSlope,
        vRStartNotchSlope
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
    if (vDirection == DIRECTION_FORWARD) {
        arrowPos.x = -arrowPos.x;
    }
    float d = sdArrow(arrowPos, vArrowHalfLengthInPixels);

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
`,ac=`layout(std140) uniform Mark {
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

const int HEAD_SHAPE_TRIANGLE = 0;
const int HEAD_SHAPE_OPEN = 1;

const int HEAD_PLACEMENT_INSIDE = 0;
const int HEAD_PLACEMENT_OUTSIDE = 1;

// Arrow space uses x for arrow length and y for width perpendicular to it.
// Negative x points toward the arrowhead in the canonical "reverse" direction.
`,oc=1e4,sc=class{#e=!1;constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}configure(){if(this.#e)throw Error(`Already configured!`);this.#t(),this.#n(),this.#e=!0}addConverter(e,t){let n=this.createUpdater(e,t.numComponents||1,t.targetArrayType??Float32Array,t.arrayReference),r=t.f;this.dataUpdaters.push((t.arrayReference,e=>n(r(e))))}createUpdater(e,t,n=Float32Array,r=void 0){if(!oe(this.size))throw Error(`The number of vertices must be defined!`);let i,a,o=0,s=new n(this.size*t);if(this.arrays[e]={data:s,numComponents:t},t==1){let e=0;i=()=>{s[o++]=e},a=t=>{e=+t}}else{let e=r??[0],n=r?e=>{}:t=>{e=t};switch(t){case 1:break;case 2:i=()=>{s[o++]=e[0],s[o++]=e[1]},a=n;break;case 3:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2]},a=n;break;case 4:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2],s[o++]=e[3]},a=n;break;default:throw Error(`Invalid numComponents: `+t)}}return this.pushers.push(i),a}pushAll(){throw Error(`Call configure() first!`)}updateFromDatum(e){throw Error(`Call configure() first!`)}#t(){if(this.size>oc){let e=this.pushers.map((e,t)=>`const p${t} = that.pushers[${t}];`).join(`
`),t=this.pushers.map((e,t)=>`  p${t}();`).join(`
`);this.pushAll=Function(`that`,`${e}
return function unrolledPushAll() {
${t}
  that.vertexCount++;
};`)(this)}else this.pushAll=()=>{for(let e=0;e<this.pushers.length;e++)this.pushers[e]();this.vertexCount++}}#n(){if(this.size>oc){let e=this.dataUpdaters.map((e,t)=>`const u${t} = that.dataUpdaters[${t}];`).join(`
`),t=this.dataUpdaters.map((e,t)=>`  u${t}(datum);`).join(`
`);this.updateFromDatum=Function(`that`,`datum`,`${e}
return function unrolledUpdateFromDatum(datum) {
${t}
};`)(this)}else this.updateFromDatum=e=>{for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}},cc=2**31-1,lc=-(2**31);function uc(e,t,n,i=n,a=0,o=a){if(o<=a||t[1]<=t[0])return;let s=n===i,c=Array(e);c.fill(cc);let l=Array(e);l.fill(0);let u=t[0],d=(t[1]-t[0])/e,f=(t,n)=>{let i=(t-u)/d,a=Math.floor(i);return r(n&&a==i?a-1:a,0,e-1)},p=lc,m=-1/0,h=!1,g=(e,t,n=[0,0])=>{let r=f(e,!1),i=f(t,!0),a=c[r],o=Math.max(l[i],a);return n[0]=a,n[1]=o,n};for(let e=a;e<o;){let t=e,r=n(e),a=i(e);for(e+=1;e<o&&n(e)===r&&i(e)===a;)e+=1;if(t>p)p=t;else{h=!0;break}if(r<m||!s&&a<r){h=!0;break}m=r;let u=f(r,!1),d=s?u:f(a,!0);for(let n=u;n<=d;n++)c[n]>t&&(c[n]=t),l[n]<e&&(l[n]=e)}if(h)return;for(let e=1;e<l.length;e++)l[e]<l[e-1]&&(l[e]=l[e-1]);let _=!0;for(let e=c.length-1;e>0;e--)_&&c[e]==cc?(c[e]=l[e],_=!1):c[e-1]>c[e]&&(c[e-1]=c[e]);return g}var dc=class{constructor({encoders:e,numVertices:t=void 0,attributes:n=[]}){this.encoders=e,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([e,t])=>n.includes(e)&&t&&!t.constant));let r=[...Ds(e).entries()].filter(([e,t])=>e[1]&&t.length>1).map(([e,t])=>t);this.allocatedVertices=t,this.variableBuilder=new sc(t),this.attributeNames={};for(let[e,t]of Object.entries(this.variableEncoders)){let n=y(t);if(!n)continue;let i=r.find(t=>t.find(t=>t==e)),a=n.asNumberAccessor(),o=t.scale,{largeHp:s,arrayConstructor:c,discrete:l,numComponents:u}=Ss(o,e),d=[0,0],f;if(o&&l)if(`props`in o&&o.props.domainIndexer)f=o.props.domainIndexer;else if(`domain`in o)f=me(),f.addAll(o.domain());else throw Error(`Missing domain indexer for discrete scale.`);let p=f?e=>f(n(e)):s?e=>ws(a(e),d):a,m=Os(i??e);for(let t of i??[e])this.attributeNames[t]=m;i&&e!=i[0]||this.variableBuilder.addConverter(m,{f:p,numComponents:u,arrayReference:s?d:void 0,targetArrayType:c})}let i=this.variableEncoders.x,a=this.variableEncoders.x2,o=this.encoders.x?.channelDef,s=i?.scale;if(o?.buildIndex&&i&&s&&T(s.type)){let e=this.attributeNames.x;if(!e)throw Error(`Missing x attribute for x indexing.`);let t=a?.scale&&T(a.scale.type)?this.attributeNames.x2??e:e;this.xIndexConfig={domain:[s.domain()[0],s.domain()[1]],xAttributeName:e,x2AttributeName:t}}else this.xIndexConfig=void 0;this.lastOffset=0,this.rangeMap=new le([],JSON.stringify)}registerBatch(e){let t=this.lastOffset,n=this.variableBuilder.vertexCount,r=n-t;r&&this.rangeMap.set(e,{offset:t,count:r,xIndex:this.createXIndex(t,n)}),this.lastOffset=n}addBatches(e){for(let[t,n]of e)this.addBatch(t,n)}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}createXIndex(e,t){let n=this.xIndexConfig;if(!n)return;let r=e=>{let{data:t,numComponents:n}=this.variableBuilder.arrays[e];return n==2?e=>{let r=e*n;return t[r]*Cs+t[r+1]}:e=>t[e*n]},i=r(n.xAttributeName),a=n.x2AttributeName==n.xAttributeName?i:r(n.x2AttributeName);return uc(50,n.domain,i,a,e,t)}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}},fc=class extends dc{constructor({encoders:e,attributes:t,numItems:n}){super({encoders:e,attributes:t,numVertices:n*6}),this.variableBuilder.configure();let r=this.variableBuilder.pushAll;this.pushAllSixTimes=n>500?Function(`pushAll`,`return function unrolledPushAllSixTimes() {
  pushAll(); pushAll(); pushAll(); pushAll(); pushAll(); pushAll();
};`)(r):function(){r(),r(),r(),r(),r(),r()}}addBatch(e,t,n=0,r=t.length){if(!(r<=n)){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.pushAllSixTimes()}this.registerBatch(e)}}},pc=class extends dc{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:r=[-1/0,1/0],numItems:i}){super({encoders:e,attributes:t,numVertices:n==1/0?i*6:void 0}),this.visibleRange=r,this.tessellationThreshold=n||1/0,this.updateSide=this.variableBuilder.createUpdater(`side`,1),this.updatePos=this.variableBuilder.createUpdater(`pos`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();for(let e=0;e<=1;e++)this.updatePos(e/1),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll()}this.registerBatch(e)}},mc=class extends dc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}},hc=class extends dc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}toArrays(){let e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}},gc=class extends dc{constructor({encoders:e,attributes:t,fontMetrics:n,properties:r,numCharacters:i=void 0}){super({encoders:e,attributes:t,numVertices:i*6}),this.metadata=n,this.metrics=n,this.properties=r;let a=e.text.channelDef;this.numberFormat=!d(a)&&`format`in a&&a.format?b(a.format):e=>e,this.updateVertexCoord=this.variableBuilder.createUpdater(`vertexCoord`,2),this.updateTextureCoord=this.variableBuilder.createUpdater(`textureCoord`,2),this.updateWidth=this.variableBuilder.createUpdater(`width`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){let i=this.properties.align||`left`,a=this.properties.logoLetters??!1,o=this.metadata.common.base,s=this.metadata.common.scaleH,c=-5;switch(this.properties.baseline){case`top`:c+=this.metrics.capHeight;break;case`middle`:c+=this.metrics.capHeight/2;break;case`bottom`:c-=this.metrics.descent;break;default:}let u=this.encoders.text,d=[0,0];this.updateVertexCoord(d);let f=[0,0];this.updateTextureCoord(f);for(let e=n;e<r;e++){let n=t[e],r=this.numberFormat(u(n)),p=l(r)?r:r===null?``:``+r;if(p.length==0)continue;this.variableBuilder.updateFromDatum(n);let m=a?p.length:this.metrics.measureWidth(p);this.updateWidth(m);let h=i==`right`?-m:i==`center`?-m/2:0;if(!a){let e=this.metrics.getCharByCode(p.charCodeAt(0));h-=(e.width-e.xadvance)/o/2}let g,_,v;for(let e=0;e<p.length;e++){let t=this.metrics.getCharByCode(p.charCodeAt(e)),n=a?1:t.xadvance/o;if(t.id==32){h+=n;continue}a?(v=(t.width+10)/t.width,h=-v/2,_=(t.height+10)/t.height,g=-.5-5/t.height):(_=t.height/o,g=-(t.height+t.yoffset+c)/o,v=t.width/o);let r=t.x,i=t.y;d[0]=h,d[1]=g+_,f[0]=r/s,f[1]=i/s,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/s,f[1]=i/s,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/s,f[1]=(i+t.height)/s,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/s,f[1]=i/s,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/s,f[1]=(i+t.height)/s,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g,f[0]=(r+t.width)/s,f[1]=(i+t.height)/s,this.variableBuilder.pushAll(),h+=n}}this.registerBatch(e)}},_c=`#define PI 3.141593

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
`,vc=`uniform highp float uZero;

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
`,yc=`
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
`,bc=`/*
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
`,xc=`in highp vec4 vPickingColor;
`,Sc=`SAMPLE_FACET_UNIFORM`,Cc=`SAMPLE_FACET_TEXTURE`,wc=`uSelectionTexture_`,Tc=class{#e=[];#t=!1;constructor(e,t,n){this.mark=e,this._glHelper=t,this._rendererResources=n,this.bufferInfo=void 0,this.bytesPerElement=new Map,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.viewUniformInfo=void 0,this.markUniformInfo=void 0,this.markUniformsAltered=!0,this.selectionTextureOps=[],this.scaleResolutionDisposers=[],this.rangeMap=new Ec}get unitView(){return this.mark.unitView}get encoders(){return this.mark.encoders}get encoding(){return this.mark.encoding}get properties(){return this.mark.properties}get font(){return this.mark.font}get opaque(){return!1}get defaultHitTestMode(){return this.mark.defaultHitTestMode}getType(){return this.mark.getType()}getAttributes(){throw Error(`Not implemented.`)}initializeGraphics(){this.#n()}getSampleFacetMode(){if(this.encoders.facetIndex)return Cc;if(this.unitView.usesSampleFacetRendering())return Sc}createAndLinkShaders(n,r,i=[]){let o=this.getAttributes(),c=this.encoders,l=this.getSampleFacetMode(),m=!!this.properties.cullByVisibleRange;l&&i.push(`#define ${l}`),m&&i.push(`#define VISIBLE_RANGE_CULLING`);let g=`// view: `+this.unitView.getPathString(),v=[],y=new Set,b=Ds(c),x=[],ee=Object.values(c).flatMap(e=>e.branches??[]).map(e=>e.predicate).filter(e=>e.param),S=new Map;for(let n of ee){let r=n.param,i=this.unitView.paramRuntime,o=i.findValue(r);if(!o)throw Error(`Cannot infer selection type as the parameter "${r}" has no value. Please ensure that the parameter is properly defined!`);let c=Os(`uniqueId`);if(s(o)){if(!S.has(r)){S.set(r,`single`);let t=is+e(r);x.push(`    // Selection parameter`),x.push(`    uniform highp uint ${t};`),this.#e.push(()=>{this.registerMarkUniformValue(t,{expr:r},e=>e.uniqueId??0)}),v.push(`bool ${as}${r}(bool empty) {\n    return ${is}${r} == ${c} || (empty && ${is}${r} == 0u);\n}`)}}else if(t(o)){if(!S.has(r)){S.set(r,`multi`);let t=wc+e(r);v.push(`// Selection texture\nuniform highp usampler2D ${t};`);let n=this.glHelper,a=n.selectionTextures;this.selectionTextureOps.push(()=>{let e=i.getValue(r),n=a.get(e);if(!n)throw Error(`Bug: no selection texture found for "${r}"!`);J(this.programInfo,{[t]:n})});let s=wc+r;v.push(`bool ${as}${r}(bool empty) {\n   return hashContainsTexture(${s}, ${c}) || (empty && isEmptyHashTexture(${s}));\n}`),n.createSelectionTexture(o),i.watchExpression(r,()=>{let e=i.getValue(r);n.createSelectionTexture(e),this.unitView.context.animator.requestRender()})}}else if(a(o)&&!S.has(r)){S.set(r,`interval`);let t=[],n=[];for(let i of Object.keys(o.intervals)){if(![`x`,`y`].includes(i))continue;let a=is+e(r)+`_${i}`,{attributeType:o}=Ss(this.unitView.getScaleResolution(i).getScale(),i);x.push(`    // Selection parameter`),x.push(`    uniform highp ${o}[2] ${a};`),this.#e.push(()=>{this.registerMarkUniformValue(a,{expr:r},e=>e.intervals[i]??[1,0])});let s=e=>{for(let[t,n]of b.entries())if(t[1]&&n.includes(e))return Os(n);return Os(e)},c=s(i),l=a+`[0]`,u=a+`[1]`,d=re(i);if(this.encoding[d]){let e=s(d),n=this.defaultHitTestMode;if(n==`endpoints`)t.push(`((${l} <= ${c} && ${c} <= ${u}) || (${l} <= ${e} && ${e} <= ${u}))`);else if(n==`encloses`)t.push(`(${l} <= ${c} && ${e} <= ${u})`);else if(n==`intersects`)t.push(`(${l} <= ${e} && ${c} <= ${u})`);else throw new ve(`Unsupported hit test mode "${n}" for interval selection!`,this.unitView)}else t.push(`(${l} <= ${c} && ${c} <= ${u})`);n.push(`${l} > ${u}`)}v.push(`bool ${as}${r}(bool empty) {\n    return ${t.join(` && `)} || (empty && (${n.join(` || `)}));\n}`)}}let te=(e,t,n,r)=>{let i=t.channelDef;if(d(i))if(p(i.value)){let{uniformName:t,uniformGlsl:r,accessorGlsl:a,adjuster:o}=ds(e,n);v.push(a),x.push(r),this.#e.push(()=>{this.registerMarkUniformValue(t,i.value,o)})}else v.push(us(e,n,i.value).accessorGlsl);else if(h(i)){let{uniformName:t,uniformGlsl:a,accessorGlsl:o}=ps(e,r,n);x.push(a),v.push(o);let{largeHp:s,discrete:c}=Ss(r,e),l=c&&`domain`in r?e=>r.domain().indexOf(e):s?ws:e=>+e;this.#e.push(()=>{this.registerMarkUniformValue(t,i.datum,l)})}else if(_(i)){let t=b.get([i.field,!0]),{attributeGlsl:a,accessorGlsl:o}=fs(e,r,n,t?.includes(e)?t:void 0);y.add(a),v.push(o)}else if(ae(i)){let{attributeGlsl:t,accessorGlsl:i}=fs(e,r,n);y.add(t),v.push(i)}else throw new ve(`Unsupported channel definition: ${JSON.stringify(i)}`,this.unitView)};for(let[e,t]of Object.entries(c)){if(!o.includes(e))continue;let{branches:n,channelDef:r,scale:i}=t;for(let t=0;t<n.length;t++)te(e,n[t].accessor,t,i);if(i){let t=u(r),n=t&&t.resolutionChannel||e,a=f(n)?this.unitView.getScaleResolution(n):null,{glsl:o,domainUniform:s,domainUniformName:c,rangeUniform:l,rangeUniformName:d}=ms(e,i,r);v.push(o),x.push(s),x.push(l),l&&this.#e.push(()=>{let t=this.createMarkUniformSetter(d),n=()=>t(As(i,e));this.registerScaleResolutionListener(a,`range`,n),n()}),s&&this.#e.push(()=>{let e=this.createMarkUniformSetter(c),t=()=>{let t;t=de(i.type)?[0,i.domain().length]:w(i.type)?ss(i):i.domain(),e(ge(i.type)?Es(t):t)};this.registerScaleResolutionListener(a,`domain`,t),t()})}v.push(hs(e,n))}let ne=[...S.keys()].map(e=>`${as}${e}(false)`);v.push(`bool isDatumSelected() {
`+(this.encoders.uniqueId&&ne.length>0?`    return ${ne.join(` || `)};`:`    return false;`)+`
}`);let ie=`precision highp float;
precision highp int;`,C=e=>e.replace(`#pragma markUniforms`,x.join(`
`));i=i.map(C),n=C(n),r=C(r);let oe=[ie,g,...i,_c,vc,[...y].join(`
`),...v,yc,bc,n],se=[ie,g,...i,_c,xc,r],ce=this.gl;this.programStatus=Vs(ce,this.glHelper.compileShader(ce.VERTEX_SHADER,oe),this.glHelper.compileShader(ce.FRAGMENT_SHADER,se))}finalizeGraphicsInitialization(){if(this.#n(),this.programInfo)return;if(!this.programStatus)throw Error(`No program status found! `+this.unitView.getPathString());let e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);let t=Error(`Cannot create shader program: `+e.message);throw t.view=this.unitView,t}this.programInfo=ro(this.gl,this.programStatus.program),delete this.programStatus,this.viewUniformInfo=Xa(this.gl,this.programInfo,`View`),this.markUniformInfo=Xa(this.gl,this.programInfo,`Mark`),this.gl.useProgram(this.programInfo.program),J(this.programInfo,{uSampleFacet:[0,1],uZero:0});for(let e of this.#e)e();this.#e=void 0}createMarkUniformSetter(e){let t=this.markUniformInfo.setters[e];if(!t)throw Error(`Uniform "${e}" not found int the Mark block!`);return e=>{t(e),this.markUniformsAltered=!0,this.unitView.context.animator.requestRender()}}registerMarkUniformValue(e,t,n=e=>e){let r=this.createMarkUniformSetter(e),i=n=>{if(n==null)throw Error(`Trying to set null/undefined value for uniform: ${e}${p(t)?`Expr: ${t.expr}`:``}`);r(n)};if(p(t)){let e,r=()=>i(n(e(null)));e=this.unitView.paramRuntime.watchExpression(t.expr,r),r()}else i(n(t))}deleteGraphicsData(){let e=this.gl;this.vertexArrayInfo&&=(this.gl.bindVertexArray(null),e.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject),void 0),this.bufferInfo&&=(Object.values(this.bufferInfo.attribs).forEach(e=>this.gl.deleteBuffer(e.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),void 0)}registerScaleResolutionListener(e,t,n){e.addEventListener(t,n),this.scaleResolutionDisposers.push(()=>e.removeEventListener(t,n))}dispose(){if(this.#t)return;this.#t=!0;for(let e of this.scaleResolutionDisposers)e();this.scaleResolutionDisposers.length=0,this.deleteGraphicsData(),this.viewUniformInfo&&=(this.gl.deleteBuffer(this.viewUniformInfo.buffer),void 0),this.markUniformInfo&&=(this.gl.deleteBuffer(this.markUniformInfo.buffer),void 0);let e=this.programInfo?.program??this.programStatus?.program;e&&this.gl.deleteProgram(e),this.programInfo=void 0,this.programStatus=void 0}#n(){if(this.#t)throw Error(`WebGL mark resources have been disposed.`)}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.vertexCount<=this.bufferInfo.allocatedVertices)for(let[t,n]of Object.entries(e.arrays))n.data&&Tt(this.gl,this.bufferInfo.attribs[t],n.data,0);else{this.deleteGraphicsData(),this.bufferInfo=kt(this.gl,e.arrays,{numElements:e.vertexCount}),this.bufferInfo.allocatedVertices=e.allocatedVertices;for(let[t,n]of Object.entries(e.arrays))this.bytesPerElement.set(t,n.data.BYTES_PER_ELEMENT)}}get glHelper(){return this._glHelper}get rendererResources(){if(!this._rendererResources)throw Error(`WebGL renderer resources are not available.`);return this._rendererResources}get gl(){return this.glHelper.gl}isReady(){return!!(this.bufferInfo&&this.programInfo)}isPickingParticipant(){return this.mark.isPickingParticipant()}getDebugState(){return{markUniformsAltered:this.markUniformsAltered,vertexCount:this.bufferInfo?.numElements,allocatedVertices:this.bufferInfo?.allocatedVertices,rangeCount:this.rangeMap.size}}bindOrSetMarkUniformBlock(){this.markUniformsAltered?(Qa(this.gl,this.programInfo,this.markUniformInfo),this.markUniformsAltered=!1):Za(this.gl,this.programInfo,this.markUniformInfo)}prepareRender(e){let t=this.glHelper,n=this.gl,r=[];r.push(()=>{this.vertexArrayInfo||=Io(this.gl,this.programInfo,this.bufferInfo),n.useProgram(this.programInfo.program)});for(let[e,n]of Object.entries(this.encoders)){let i=t.rangeTextures.get(n.scale);i&&r.push(()=>J(this.programInfo,{[rs+e]:i}))}r.push(...this.selectionTextureOps),this.getSampleFacetMode()==Cc&&r.push(()=>{let t=e.placement?.source;if(!t)throw Error(`No placement source available.`);J(this.programInfo,{uSampleFacetTexture:this.glHelper.getPlacementTexture(t)})});let i=(e.picking??!1)&&this.isPickingParticipant();return r.push(()=>$a(this.viewUniformInfo,{uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:i})),this.opaque||e.picking?r.push(()=>n.disable(n.BLEND)):r.push(()=>n.enable(n.BLEND)),r}prepareSampleFacetRendering(e){let t=e.sampleFacetRenderingOptions,n=this.programInfo.uniformSetters.uSampleFacet;if(t&&n){let e=t.pixelToUnit,r=t.locSize.location*e,i=t.locSize.size*e;if(r>1||r+i<0)return!1;this.gl.uniform2f(n.location,r,i)}return!0}render(e){}createRenderCallback(e,t){if(!this.bufferInfo)return()=>void 0;let n=this,r,i=this.unitView.getScaleResolution(`x`)?.getScale(),a=i&&T(i.type),o=[`index`,`locus`].includes(i?.type)?-1:0,s=[0,0];r=t=>{if(a&&t.xIndex){let n=i.domain(),r=Math.abs(n[1]-n[0]),a=t.xIndex(n[0]+o-r,n[1]+r,s),c=a[0],l=a[1]-c;l>0&&e(c,l)}else e(t.offset,t.count)};let c=this.rangeMap.get(void 0).count==0?t.facetId:void 0,l=this.rangeMap.get(c);return t.sampleFacetRenderingOptions?function(){l.count&&n.prepareSampleFacetRendering(t)&&r(l)}:function(){l.count&&r(l)}}setViewport(e,t,n,r,i,a=Oe){n=n.flatten();let o=this.gl,s=this.properties,c=a,l=a,u,d=Dc(e,n,s.clip===`never`?void 0:r,!1),f=d.coords;if(d.requiresScissor){if(!f.isDefined())return!1;let r=[f.x,e.height-f.y2,f.width,f.height].map(e=>e*t),i=r.map(e=>Math.floor(e)),a=r[0]-i[0],s=r[1]-i[1];o.viewport(...i),o.scissor(...i),o.enable(o.SCISSOR_TEST),u={uViewOffset:[(n.x-f.x+c+a/t)/f.width,(f.y2-n.y2-l+s/t)/f.height],uViewScale:[n.width/f.width,n.height/f.height]}}else{if(!n.isDefined())return!1;o.viewport(0,0,Math.round(e.width*t),Math.round(e.height*t)),o.disable(o.SCISSOR_TEST),u={uViewOffset:[(n.x+c)/e.width,(e.height-n.y-l-n.height)/e.height],uViewScale:[n.width/e.width,n.height/e.height]}}return $a(this.viewUniformInfo,{...u,uViewportSize:[n.width,n.height],uLogicalVisibleRect:Oc(n,i),uCullByVisibleRange:[+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`x`),+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`y`)],uDevicePixelRatio:t}),Qa(this.gl,this.programInfo,this.viewUniformInfo),!0}},Ec=class extends le{constructor(){super([],JSON.stringify)}get(e){let t=super.get(e);return t===void 0&&(t={offset:0,count:0,xIndex:void 0},super.set(e,t)),t}migrateEntries(e){for(let[t,n]of this.entries())e.has(t)||(n.offset=0,n.count=0,n.xIndex=void 0);for(let[t,n]of e.entries())Object.assign(this.get(t),n)}};function Dc(e,t,n,r=!0){if(!n||!n.clipX&&!n.clipY)return{requiresScissor:!1,coords:t};let i=r?t.intersect(n.rect):n.rect;return n.clipX||(i=i.modify({x:0,width:e.width})),n.clipY||(i=i.modify({y:0,height:e.height})),{requiresScissor:!0,coords:i.flatten()}}function Oc(e,t){let n=t?.clipX?(t.rect.x-e.x)/e.width:0,r=t?.clipX?(t.rect.x2-e.x)/e.width:1;return[n,t?.clipY?(e.y2-t.rect.y2)/e.height:0,r,t?.clipY?(e.y2-t.rect.y)/e.height:1]}var kc=Math.PI/180,Ac=1e-6,jc=1,Mc=90,Nc=[`triangle`,`open`],Pc=[`inside`,`outside`],Fc=class extends Tc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`,`size`,`direction`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(rc,ic,[ac])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uHeadSlope`,e.headAngle,Lc),this.registerMarkUniformValue(`uHeadNotchSlope`,e.headNotchAngle,Lc),this.registerMarkUniformValue(`uHeadShape`,e.headShape,e=>Ic(Nc,e)),this.registerMarkUniformValue(`uMinSize`,e.minSize),this.registerMarkUniformValue(`uHeadWidth`,e.headWidth),this.registerMarkUniformValue(`uStartNotch`,e.startNotch),this.registerMarkUniformValue(`uMinStemLength`,e.minStemLength),this.registerMarkUniformValue(`uHeadSpacing`,e.headSpacing??-1,Rc),this.registerMarkUniformValue(`uStem`,e.stem),this.registerMarkUniformValue(`uHeadPlacement`,e.headPlacement,e=>Ic(Pc,e))}updateGraphicsData(e){let t=e.getItemCount(),n=new pc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{oo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}};function Ic(e,t){let n=e.indexOf(t);if(n<0)throw Error(`Unsupported arrow mark value: ${t}`);return n}function Lc(e){return Math.max(Math.tan(Math.min(Math.max(e,jc),Mc)*kc),Ac)}function Rc(e){return e??-1}var zc=`flat out vec4 vColor;

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
        uArcFadingDistance[1] > 0.0 &&
        (!uNoFadingOnPointSelection || !isDatumSelected()))
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
`,Bc=`flat in vec4 vColor;
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
`,Vc=`layout(std140) uniform Mark {
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
    uniform bool uNoFadingOnPointSelection;

    uniform int uSegmentBreaks;

#pragma markUniforms
};
`,Hc=[`arc`,`dome`,`diagonal`,`line`],Uc=[`vertical`,`horizontal`],Wc=class extends Tc{constructor(e,t,n){super(e,t,n),this._baseInstanceExt=void 0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics(),this._baseInstanceExt=this.gl.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),this.createAndLinkShaders(zc,Bc,[Vc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uArcFadingDistance`,e.arcFadingDistance,e=>e||[0,0]),this.registerMarkUniformValue(`uArcHeightFactor`,e.arcHeightFactor),this.registerMarkUniformValue(`uMinArcHeight`,e.minArcHeight),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize),this.registerMarkUniformValue(`uShape`,e.linkShape,e=>Hc.indexOf(e)),this.registerMarkUniformValue(`uOrient`,e.orient,e=>Uc.indexOf(e)),this.registerMarkUniformValue(`uClampApex`,e.clampApex,e=>!!e),this.registerMarkUniformValue(`uMaxChordLength`,e.maxChordLength),this.registerMarkUniformValue(`uSegmentBreaks`,e.segments,e=>e),this.registerMarkUniformValue(`uNoFadingOnPointSelection`,e.noFadingOnPointSelection,e=>!!e)}updateGraphicsData(e){let t=e.getItemCount(),n=new hc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.arrays=Object.fromEntries(Object.entries(r.arrays).map(([e,t])=>[e,{...t,data:void 0}])),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),this._baseInstanceExt?t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)):t.push(()=>this.gl.bindVertexArray(null)),t}render(e){let t=this.gl,n=()=>(this.markUniformInfo.uniforms.uSegmentBreaks[0]+1)*2;return this._baseInstanceExt?this.createRenderCallback((e,r)=>{this._baseInstanceExt.drawArraysInstancedBaseInstanceWEBGL(t.TRIANGLE_STRIP,0,n(),r,e)},e):this.createRenderCallback((e,r)=>{for(let t of Object.entries(this.bufferInfo.attribs)){let[n,r]=t;r.buffer&&r.numComponents&&r.divisor&&(r.offset=e*this.arrays[n].numComponents*this.bytesPerElement.get(n))}Y(t,this.programInfo,this.bufferInfo),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,n(),r)},e)}},Gc=`flat out float vRadius;
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
`,Kc=`const lowp vec4 white = vec4(1.0);
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
`,qc=`layout(std140) uniform Mark {
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
`,Jc=class extends Tc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`y`,`xOffset`,`yOffset`,`size`,`semanticScore`,`shape`,`strokeWidth`,`dx`,`dy`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(Gc,Kc,[qc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uInwardStroke`,e.inwardStroke,e=>!!e),this.registerMarkUniformValue(`uGradientStrength`,e.fillGradientStrength),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize)}updateGraphicsData(e){let t=e.getItemCount(),n=new mc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}#e(){let e=2**(this.properties.geometricZoomBound||0);return Math.min(1,this.unitView.getZoomLevel()/e)**(1/3)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{$a(this.markUniformInfo,{uScaleFactor:this.#e(),uSemanticThreshold:this.mark.getSemanticThreshold()}),this.markUniformsAltered=!0}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{n&&oo(t,this.vertexArrayInfo,t.POINTS,n,e)},e)}},Yc=`flat out lowp vec4 vFillColor;
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
`,Xc=`#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
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
`,Zc=`layout(std140) uniform Mark {
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
`,Qc=[`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`],$c=class extends Tc{get opaque(){return _e(this,`opaque`,()=>!this.#e()&&!this.#t()&&!this.properties.shadowOpacity&&d(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`]}#e(){let e=this.properties;return e.cornerRadius||e.cornerRadiusBottomLeft||e.cornerRadiusBottomRight||e.cornerRadiusTopLeft||e.cornerRadiusTopRight}#t(){let e=this.encoding.strokeWidth;return!(d(e)&&!e.value)||`condition`in e}initializeGraphics(){super.initializeGraphics();let e=[];this.#e()&&e.push(`ROUNDED_CORNERS`),this.#t()&&e.push(`STROKED`),this.properties.shadowOpacity&&e.push(`SHADOW`),this.createAndLinkShaders(Yc,Xc,[Zc,...e.map(e=>`#define `+e)])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinWidth`,e.minWidth),this.registerMarkUniformValue(`uMinHeight`,e.minHeight),this.registerMarkUniformValue(`uMinOpacity`,e.minOpacity),this.registerMarkUniformValue(`uCornerRadiusTopRight`,e.cornerRadiusTopRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomRight`,e.cornerRadiusBottomRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusTopLeft`,e.cornerRadiusTopLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomLeft`,e.cornerRadiusBottomLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uHatchPattern`,e.hatch,e=>Math.max(0,Qc.indexOf(e??`none`))),this.registerMarkUniformValue(`uShadowBlur`,e.shadowBlur??0),this.registerMarkUniformValue(`uShadowOpacity`,e.shadowOpacity??0),this.registerMarkUniformValue(`uShadowOffsetX`,e.shadowOffsetX??0),this.registerMarkUniformValue(`uShadowOffsetY`,e.shadowOffsetY??0),this.registerMarkUniformValue(`uShadowColor`,e.shadowColor??`black`,Xo)}updateGraphicsData(e){let t=e.getItemCount(),n=new fc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{oo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}},el=`// Line caps
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
`,tl=`// Line ending
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
`,nl=`layout(std140) uniform Mark {
    /** Minimum rule length in pixels */
    uniform mediump float uMinLength;

    uniform mediump float uDashTextureSize;
    uniform lowp int uStrokeCap;
    uniform mediump float uStrokeDashOffset;

#pragma markUniforms
};
`,rl=class extends Tc{constructor(e,t,n){super(e,t,n),this.dashTexture=void 0,this.dashTextureSize=0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics();let e=this.gl,t=il(this.properties.strokeDash);this.dashTexture=ai(e,{level:0,mag:e.NEAREST,min:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1}),this.dashTextureSize=t.length,this.createAndLinkShaders(el,tl,[nl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinLength`,e.minLength),this.registerMarkUniformValue(`uStrokeCap`,e.strokeCap??`butt`,e=>[`butt`,`square`,`round`].indexOf(e)),$a(this.markUniformInfo,{uDashTextureSize:+this.dashTextureSize}),this.markUniformsAltered=!0}updateGraphicsData(e){let t=e.getItemCount(),n=new pc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.programInfo,{uDashTexture:this.dashTexture})),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>oo(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e),e)}dispose(){this.dashTexture&&=(this.gl.deleteTexture(this.dashTexture),void 0),super.dispose()}};function il(e){if(!e)return new Uint8Array;if(e.length==0||e.length%2||e.findIndex(e=>Math.round(e)!=e||e<1||e>1e3)>=0)throw Error(`Invalid stroke dash pattern: `+JSON.stringify(e));let t=e.reduce((e,t)=>e+t),n=new Uint8Array(t),r=!0,i=0;for(let t of e){for(;t;)n[i++]=r&&255||0,t--;r=!r}return n}var al=`in mediump vec2 vertexCoord;
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
`,ol=`uniform sampler2D uTexture;

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
`,sl=`layout(std140) uniform Mark {
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
`,cl=1024,ll={left:-1,center:0,right:1},ul={top:-1,middle:0,bottom:1,alphabetic:1,baseline:1},dl={point:Jc,rect:$c,arrow:Fc,rule:rl,tick:rl,link:Wc,text:class extends Tc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`color`,`size`,`opacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(al,ol,[sl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uPaddingX`,e.paddingX),this.registerMarkUniformValue(`uPaddingY`,e.paddingY),this.registerMarkUniformValue(`uFlushX`,e.flushX,e=>!!e),this.registerMarkUniformValue(`uFlushY`,e.flushY,e=>!!e),this.registerMarkUniformValue(`uSqueeze`,e.squeeze,e=>!!e),this.registerMarkUniformValue(`uLogoLetter`,e.logoLetters,e=>!!e),this.registerMarkUniformValue(`uSdfNumerator`,e.logoLetters,e=>this.font.metrics.common.base*.35*(e?.5:1)),this.registerMarkUniformVector(`uViewportEdgeFadeWidth`,[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft]),this.registerMarkUniformVector(`uViewportEdgeFadeDistance`,[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]),$a(this.markUniformInfo,{uAlign:[ll[e.align],ul[e.baseline]],uD:[e.dx,-e.dy]})}registerMarkUniformVector(e,t){let n=this.createMarkUniformSetter(e),r=[],i=()=>n(r.map(e=>e()));for(let e of t)r.push(p(e)?this.unitView.paramRuntime.watchExpression(e.expr,i):()=>e);i()}updateGraphicsData(e){let t=e.getData(),n=this.encoding,r=this.properties,i=p(r.logoLetters)?this.unitView.paramRuntime.evaluateAndGet(r.logoLetters.expr):r.logoLetters,a=this.encoders.text,o=0,s=`format`in n.text?b(n.text.format):e=>e;for(let e of t){let t=s(a(e)),n=l(t)?t:t===null?``:``+t;o+=n&&n.length||0}let c=new gc({encoders:this.encoders,attributes:this.getAttributes(),properties:{align:r.align,baseline:r.baseline,logoLetters:i},fontMetrics:this.font.metrics,numCharacters:Math.max(o,cl)});c.addBatches(e.facetBatches);let u=c.toArrays();this.rangeMap.migrateEntries(u.rangeMap),this.updateBufferInfo(u)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{J(this.programInfo,{uTexture:this.rendererResources.getFontTexture(this.font.bitmapUrl)})}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>oo(t,this.vertexArrayInfo,t.TRIANGLES,n,e),e)}}};function fl(e,t,n){let r=dl[e.getType()];if(!r)throw Error(`Unsupported WebGL mark type: `+e.getType());return new r(e,t,n)}var pl=class{#e=!1;#t=new Map;#n=new Map;#r=new Map;constructor(e){this.glHelper=e,e.setResourceFinalizer(()=>this.dispose())}#i(e){this.#s();let t=fl(e,this.glHelper,this),n={mark:e,graphics:t,state:`compiling`,collector:void 0,dataRevision:-1,configurationRevision:-1,encodedDataRevision:-1,scaleResolutions:new Set};this.#t.set(e,n),e.unitView.registerDisposer(()=>this.releaseMark(e));try{this.#l(n),t.initializeGraphics()}catch(e){throw n.state=`failed`,this.#u(n),t.dispose(),e}return n}prepareMarks(e){let t=this.#a(e);try{this.#o(t.entries)}catch(e){t.firstError??=e}if(t.firstError)throw t.firstError}#a(e){this.#s();let t=[],n;for(let r of new Set(e))try{let e=r.font,n=r.getType()!=`text`||e?.metrics;!this.#t.has(r)&&r.encoders&&n&&t.push(this.#i(r))}catch(e){n??=e}return{entries:t,firstError:n}}#o(e){let t;for(let n of e)try{n.graphics.finalizeGraphicsInitialization(),n.state=`ready`}catch(e){n.state=`failed`,this.#u(n),n.graphics.dispose(),t??=e}if(t)throw t}releaseMark(e){let t=this.#t.get(e);t&&(this.#t.delete(e),t.state=`disposed`,t.graphics.dispose(),this.#u(t))}getMarkRenderingDebugState(e){let t=this.#t.get(e),n=t?.graphics.getDebugState();return{ready:!!(t?.state==`ready`&&t.graphics.isReady()),markUniformsAltered:n?.markUniformsAltered??!1,vertexCount:n?.vertexCount,allocatedVertices:n?.allocatedVertices,rangeCount:n?.rangeCount??0}}getMarkEntry(e){return this.#t.get(e)}isEntryActive(e){return e.state==`ready`&&this.#t.get(e.mark)===e}isEntryDrawable(e){return this.isEntryActive(e)&&e.graphics.isReady()}synchronize(e){if(!this.#e)for(let t of e){if(!this.isEntryActive(t))continue;let e=t.mark;e.initializeRenderingRevisions([],{trackResources:!1});let n=e.unitView.getCollector();n?.completed&&(t.collector!==n||t.dataRevision!=n.dataRevision||t.configurationRevision!=e.getRenderingRevision(`configuration`)||t.encodedDataRevision!=e.getEncodedDataRevision())&&(t.graphics.updateGraphicsData(n),this.#c(t))}}prepareFontBitmap(e){this.#s();let t=this.#r.get(e);if(t)return t.ready;let n=this.glHelper.gl,r,i=new Promise((t,i)=>{r=ai(n,{src:e,min:n.LINEAR},a=>{a?(this.#r.delete(e),n.deleteTexture(r),i(a)):this.#e?i(Error(`WebGL renderer resources were disposed while loading a font.`)):t()})});return this.#r.set(e,{texture:r,ready:i}),i}getFontTexture(e){this.#s();let t=this.#r.get(e);if(!t)throw Error(`Font bitmap has not been prepared: `+e);return t.texture}dispose(){if(this.#e)return;this.#e=!0;for(let e of Array.from(this.#t.keys()))this.releaseMark(e);let e=this.glHelper.gl;for(let{texture:t}of this.#r.values())e.deleteTexture(t);this.#r.clear()}#s(){if(this.#e)throw Error(`WebGL renderer resources have been disposed.`)}#c(e){let t=e.mark;t.initializeRenderingRevisions([],{trackResources:!1});let n=t.unitView.getCollector();e.collector=n,e.dataRevision=n?.dataRevision??-1,e.configurationRevision=t.getRenderingRevision(`configuration`)??-1,e.encodedDataRevision=t.getEncodedDataRevision()}#l(e){for(let[t,n]of Object.entries(e.mark.encoders)){if(!n.scale)continue;let r=u(n.channelDef)?.resolutionChannel??t;if(!f(r))continue;let i=e.mark.unitView.getScaleResolution(r);if(!i||e.scaleResolutions.has(i))continue;e.scaleResolutions.add(i);let a=this.#n.get(i);if(a){a.count++;continue}this.glHelper.createRangeTexture(i),this.#n.set(i,{count:1,dispose:i.observeMapping(()=>this.glHelper.createRangeTexture(i,!0))})}}#u(e){for(let t of e.scaleResolutions){let e=this.#n.get(t);e&&(e.count--,e.count==0&&(e.dispose(),this.#n.delete(t)))}e.scaleResolutions.clear()}};function ml({runs:e,viewRoot:t,layoutResult:n,webGLHelper:r,markAdapter:i,logicalWidth:a,logicalHeight:o,pixelRatio:s}){let c=r.gl,l=Math.ceil(a*s),u=Math.ceil(o*s);hl(c,l,u);let d=s==1&&n?n:xe(t,ye.create(0,0,a,o),{devicePixelRatio:s,renderingOptions:{firstFacet:!0}}),f=Po(c,[{format:c.RGBA,type:c.UNSIGNED_BYTE,minMag:c.LINEAR,wrap:c.CLAMP_TO_EDGE}],l,u);try{for(let t of e){let e=new Ws({picking:!1},{webGLHelper:r,markAdapter:i,canvasSize:{width:a,height:o},devicePixelRatio:s,framebufferInfo:f,markPredicate:e=>t.marks.has(e),pixelOffset:0});d.collectRenderCommands(e),e.finish(),e.render();let n=Ee(t.bounds,s,l,u);Te(t,n,s,Js(c,f,`image/png`,{...n,unpremultiplyAlpha:!0}))}}finally{c.bindFramebuffer(c.FRAMEBUFFER,null),c.deleteTexture(f.attachments[0]),c.deleteFramebuffer(f.framebuffer)}}function hl(e,t,n){let r=e.getParameter(e.MAX_RENDERBUFFER_SIZE),i=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(r,i);if(t<=0||n<=0||t>a||n>a)throw RangeError(`SVG raster dimensions ${t} x ${n} exceed the WebGL limit ${a}.`)}function gl(e){let t=new zs(e.container,e.sizeSource,{powerPreference:e.powerPreference},e.onCanvasResize),n=new pl(t);return{surface:t,defaultFontBitmapUrl:De,prepareFontBitmap:e=>n.prepareFontBitmap(e),getMarkRenderingDebugState:e=>n.getMarkRenderingDebugState(e),createRenderCoordinator:e=>new Ks({...e,glHelper:t,markAdapter:n}),exportCanvas:e=>$s({...e,glHelper:t,markAdapter:n}),exportRaster:e=>ec({...e,glHelper:t,markAdapter:n}),rasterizeSvgRuns:e=>ml({...e,webGLHelper:t,markAdapter:n}),readPickingId:(e,n)=>{let r=t.getDevicePixelRatio(),i=Us(t.gl,t._pickingBufferInfo,e*r,n*r);return i[0]|i[1]<<8|i[2]<<16|i[3]<<24}}}export{gl as createWebGLRenderingBackend};