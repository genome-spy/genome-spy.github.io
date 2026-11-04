import{$ as e,H as t,Y as n,tt as r}from"./vega-time-DA4kztHN.js";import{An as i,C as a,Et as o,Fn as s,J as c,Lt as l,Mn as u,Nn as d,S as f,St as p,T as m,Ut as h,Y as g,Z as _,bt as v,dn as y,et as ee,f as te,fn as b,g as ne,j as x,jn as S,ln as re,m as ie,mn as C,n as ae,nr as oe,o as se,pn as w,q as ce,s as le,st as ue,u as de,ut as fe,vn as pe,w as me,x as T,y as he,yt as ge,z as _e}from"./clipOptions-DVV_xV8j.js";import{f as ve,n as ye,r as be,t as xe}from"./scaleNull-BTYSjFQ2.js";import{n as Se,t as Ce}from"./viewError-CLKHmC0v.js";import{l as we,t as Te}from"./rectangle-CQx0FhVu.js";import{n as Ee,r as De}from"./performanceProfiler-t6gLo5-8.js";import{n as Oe,r as ke,t as Ae}from"./color-iUdYrH8w.js";import{t as je}from"./canvasSizeHelper-CKNOir0P.js";import{n as Me,t as Ne}from"./rasterImage-CSBco7OJ.js";var Pe=`/docs/api/embed-examples/assets/Lato-Regular-BLjP_sYx.webp`,Fe=5120,Ie=5121,Le=5122,Re=5123,ze=5124,Be=5125,Ve=5126,He=32819,Ue=32820,We=33635,Ge=5131,Ke=33640,qe=35899,Je=35902,Ye=36269,Xe=34042,Ze={};{let e=Ze;e[Fe]=Int8Array,e[Ie]=Uint8Array,e[Le]=Int16Array,e[Re]=Uint16Array,e[ze]=Int32Array,e[Be]=Uint32Array,e[Ve]=Float32Array,e[He]=Uint16Array,e[Ue]=Uint16Array,e[We]=Uint16Array,e[Ge]=Uint16Array,e[Ke]=Uint32Array,e[qe]=Uint32Array,e[Je]=Uint32Array,e[Ye]=Uint32Array,e[Xe]=Uint32Array}function Qe(e){if(e instanceof Int8Array)return Fe;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Ie;if(e instanceof Int16Array)return Le;if(e instanceof Uint16Array)return Re;if(e instanceof Int32Array)return ze;if(e instanceof Uint32Array)return Be;if(e instanceof Float32Array)return Ve;throw Error(`unsupported typed array type`)}function $e(e){if(e===Int8Array)return Fe;if(e===Uint8Array||e===Uint8ClampedArray)return Ie;if(e===Int16Array)return Le;if(e===Uint16Array)return Re;if(e===Int32Array)return ze;if(e===Uint32Array)return Be;if(e===Float32Array)return Ve;throw Error(`unsupported typed array type`)}function et(e){let t=Ze[e];if(!t)throw Error(`unknown gl type`);return t}var tt=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};function nt(...e){console.error(...e)}function rt(...e){console.warn(...e)}function it(e,t){return typeof WebGLBuffer<`u`&&t instanceof WebGLBuffer}function at(e,t){return typeof WebGLRenderbuffer<`u`&&t instanceof WebGLRenderbuffer}function ot(e,t){return typeof WebGLTexture<`u`&&t instanceof WebGLTexture}function st(e,t){return typeof WebGLSampler<`u`&&t instanceof WebGLSampler}var ct=35044,E=34962,lt={attribPrefix:``};function ut(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||ct)}function dt(e,t,n,r){if(it(e,t))return t;n||=E;let i=e.createBuffer();return ut(e,n,i,t,r),i}function ft(e){return e===`indices`}function pt(e){return e instanceof Int8Array||e instanceof Uint8Array}function mt(e){return e===Int8Array||e===Uint8Array}function ht(e){return e.length?e:e.data}var gt=/coord|texture/i,_t=/color|colour/i;function vt(e,t){let n;if(n=gt.test(e)?2:_t.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function yt(e,t){return e.numComponents||e.size||vt(t,ht(e).length)}function bt(e,t){if(tt(e))return e;if(tt(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type;return n||=ft(t)?Uint16Array:Float32Array,new n(e.data)}function xt(e,t){let n={};return Object.keys(t).forEach(function(r){if(!ft(r)){let i=t[r],a=i.attrib||i.name||i.attribName||lt.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!tt(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t,o,s,c;if(i.buffer&&i.buffer instanceof WebGLBuffer)t=i.buffer,c=i.numComponents||i.size,o=i.type,s=i.normalize;else if(typeof i==`number`||typeof i.data==`number`){let n=i.data||i,a=i.type||Float32Array,l=n*a.BYTES_PER_ELEMENT;o=$e(a),s=i.normalize===void 0?mt(a):i.normalize,c=i.numComponents||i.size||vt(r,n),t=e.createBuffer(),e.bindBuffer(E,t),e.bufferData(E,l,i.drawType||ct)}else{let n=bt(i,r);t=dt(e,n,void 0,i.drawType),o=Qe(n),s=i.normalize===void 0?pt(n):i.normalize,c=yt(i,r)}n[a]={buffer:t,numComponents:c,type:o,normalize:s,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(E,null),n}function St(e,t,n,r){n=bt(n),r===void 0?ut(e,E,t.buffer,n,t.drawType):(e.bindBuffer(E,t.buffer),e.bufferSubData(E,r,n))}function Ct(e){return!!e.texStorage2D}var wt=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),D={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Tt=tt,Et=function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),Dt=6406,O=6407,k=6408,Ot=6409,kt=6410,At=6402,jt=34041,Mt=33071,Nt=9728,Pt=9729,A=3553,j=34067,M=32879,N=35866,Ft=34069,It=34070,Lt=34071,Rt=34072,zt=34073,Bt=34074,Vt=10241,Ht=10240,Ut=10242,Wt=10243,Gt=32882,Kt=33082,qt=33083,Jt=33084,Yt=33085,Xt=3317,Zt=3314,Qt=32878,$t=3316,en=3315,tn=32877,nn=37443,rn=37441,an=37440,on=33321,sn=36756,cn=33325,ln=33326,un=33330,dn=33329,fn=33338,pn=33337,mn=33340,hn=33339,gn=33323,_n=36757,vn=33327,yn=33328,bn=33336,xn=33335,Sn=33332,Cn=33331,wn=33334,Tn=33333,En=32849,Dn=35905,On=36194,kn=36758,An=35898,jn=35901,Mn=34843,Nn=34837,Pn=36221,Fn=36239,In=36215,Ln=36233,Rn=36209,zn=36227,Bn=32856,Vn=35907,Hn=36759,Un=32855,Wn=32854,Gn=32857,Kn=34842,qn=34836,Jn=36220,Yn=36238,Xn=36975,Zn=36214,Qn=36232,$n=36226,er=36208,tr=33189,nr=33190,rr=36012,ir=36013,ar=35056,P=5120,F=5121,or=5122,sr=5123,cr=5124,I=5125,L=5126,lr=32819,ur=32820,dr=33635,R=5131,fr=36193,pr=33640,mr=35899,hr=35902,gr=36269,_r=34042,vr=33319,z=33320,yr=6403,B=36244,V=36248,H=36249,br={};{let e=br;e[Dt]={numColorComponents:1},e[Ot]={numColorComponents:1},e[kt]={numColorComponents:2},e[O]={numColorComponents:3},e[k]={numColorComponents:4},e[yr]={numColorComponents:1},e[B]={numColorComponents:1},e[vr]={numColorComponents:2},e[z]={numColorComponents:2},e[O]={numColorComponents:3},e[V]={numColorComponents:3},e[k]={numColorComponents:4},e[H]={numColorComponents:4},e[At]={numColorComponents:1},e[jt]={numColorComponents:2}}var xr;function Sr(e){if(!xr){let e={};e[Dt]={textureFormat:Dt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[F,R,fr,L]},e[Ot]={textureFormat:Ot,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[F,R,fr,L]},e[kt]={textureFormat:kt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[F,R,fr,L]},e[O]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[F,R,fr,L,dr]},e[k]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[F,R,fr,L,lr,ur]},e[At]={textureFormat:At,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[I,sr]},e[on]={textureFormat:yr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[F]},e[sn]={textureFormat:yr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[P]},e[cn]={textureFormat:yr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[L,R]},e[ln]={textureFormat:yr,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[L]},e[un]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[F]},e[dn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[P]},e[Sn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[sr]},e[Cn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[or]},e[wn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[Tn]={textureFormat:B,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[cr]},e[gn]={textureFormat:vr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[F]},e[_n]={textureFormat:vr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[P]},e[vn]={textureFormat:vr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[L,R]},e[yn]={textureFormat:vr,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[L]},e[bn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[F]},e[xn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[P]},e[fn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[sr]},e[pn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[or]},e[mn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[I]},e[hn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[cr]},e[En]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[F]},e[Dn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[F]},e[On]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[F,dr]},e[kn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[An]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[L,R,mr]},e[jn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[L,R,hr]},e[Mn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[L,R]},e[Nn]={textureFormat:O,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[L]},e[Pn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[F]},e[Fn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[P]},e[In]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[sr]},e[Ln]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[or]},e[Rn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[I]},e[zn]={textureFormat:V,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[cr]},e[Bn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[F]},e[Vn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[F]},e[Hn]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Un]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[F,ur,pr]},e[Wn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[F,lr]},e[Gn]={textureFormat:k,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[pr]},e[Kn]={textureFormat:k,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[L,R]},e[qn]={textureFormat:k,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[L]},e[Jn]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[Yn]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[P]},e[Xn]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[pr]},e[Zn]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[sr]},e[Qn]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[or]},e[$n]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[cr]},e[er]={textureFormat:H,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[I]},e[tr]={textureFormat:At,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[sr,I]},e[nr]={textureFormat:At,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[rr]={textureFormat:At,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[L]},e[ar]={textureFormat:jt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[_r]},e[ir]={textureFormat:jt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[gr]},Object.keys(e).forEach(function(t){let n=e[t];n.bytesPerElementMap={},n.bytesPerElement.forEach(function(e,t){let r=n.type[t];n.bytesPerElementMap[r]=e})}),xr=e}return xr[e]}function Cr(e,t){let n=Sr(e);if(!n)throw`unknown internal format`;let r=n.bytesPerElementMap[t];if(r===void 0)throw`unknown internal format`;return r}function wr(e){let t=Sr(e);if(!t)throw`unknown internal format`;return{format:t.textureFormat,type:t.type[0]}}function Tr(e){return!(e&e-1)}function Er(e,t,n,r){if(!Ct(e))return Tr(t)&&Tr(n);let i=Sr(r);if(!i)throw`unknown internal format`;return i.colorRenderable&&i.textureFilterable}function Dr(e){let t=Sr(e);if(!t)throw`unknown internal format`;return t.textureFilterable}function Or(e,t,n){return Tt(t)?Qe(t):n||F}function kr(e,t,n,r,i){if(i%1!=0)throw`can't guess dimensions`;if(!n&&!r){let e=Math.sqrt(i/(t===j?6:1));e%1==0?(n=e,r=e):(n=i,r=1)}else if(!r){if(r=i/n,r%1)throw`can't guess dimensions`}else if(!n&&(n=i/r,n%1))throw`can't guess dimensions`;return{width:n,height:r}}function Ar(e,t){t.colorspaceConversion!==void 0&&e.pixelStorei(nn,t.colorspaceConversion),t.premultiplyAlpha!==void 0&&e.pixelStorei(rn,t.premultiplyAlpha),t.flipY!==void 0&&e.pixelStorei(an,t.flipY)}function jr(e){e.pixelStorei(Xt,4),Ct(e)&&(e.pixelStorei(Zt,0),e.pixelStorei(Qt,0),e.pixelStorei($t,0),e.pixelStorei(en,0),e.pixelStorei(tn,0))}function Mr(e,t,n,r){r.minMag&&(n.call(e,t,Vt,r.minMag),n.call(e,t,Ht,r.minMag)),r.min&&n.call(e,t,Vt,r.min),r.mag&&n.call(e,t,Ht,r.mag),r.wrap&&(n.call(e,t,Ut,r.wrap),n.call(e,t,Wt,r.wrap),(t===M||st(e,t))&&n.call(e,t,Gt,r.wrap)),r.wrapR&&n.call(e,t,Gt,r.wrapR),r.wrapS&&n.call(e,t,Ut,r.wrapS),r.wrapT&&n.call(e,t,Wt,r.wrapT),r.minLod&&n.call(e,t,Kt,r.minLod),r.maxLod&&n.call(e,t,qt,r.maxLod),r.baseLevel&&n.call(e,t,Jt,r.baseLevel),r.maxLevel&&n.call(e,t,Yt,r.maxLevel)}function Nr(e,t,n){let r=n.target||A;e.bindTexture(r,t),Mr(e,r,e.texParameteri,n)}function Pr(e){return e||=D.textureColor,Tt(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Fr(e,t,n,r,i,a){n||=D.textureOptions,a||=k;let o=n.target||A;if(r||=n.width,i||=n.height,e.bindTexture(o,t),Er(e,r,i,a))e.generateMipmap(o);else{let t=Dr(a)?Pt:Nt;e.texParameteri(o,Vt,t),e.texParameteri(o,Ht,t),e.texParameteri(o,Ut,Mt),e.texParameteri(o,Wt,Mt)}}function Ir(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function Lr(e,t){return t||={},t.cubeFaceOrder||[Ft,It,Lt,Rt,zt,Bt]}function Rr(e,t){let n=Lr(e,t).map(function(e,t){return{face:e,ndx:t}});return n.sort(function(e,t){return e.face-t.face}),n}function zr(e,t,n,r){r||=D.textureOptions;let i=r.target||A,a=r.level||0,o=n.width,s=n.height,c=r.internalFormat||r.format||k,l=wr(c),u=r.format||l.format,d=r.type||l.type;if(Ar(e,r),e.bindTexture(i,t),i===j){let l=n.width,f=n.height,p,m;if(l/6===f)p=f,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(f/6===l)p=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3==f/2)p=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2==f/3)p=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw`can't figure out cube map from element: `+(n.src?n.src:n.nodeName);let h=Et();h?(h.canvas.width=p,h.canvas.height=p,o=p,s=p,Rr(e,r).forEach(function(t){let r=m[t.ndx*2+0]*p,i=m[t.ndx*2+1]*p;h.drawImage(n,r,i,p,p,0,0,p,p),e.texImage2D(t.face,a,c,u,d,h.canvas)}),h.canvas.width=1,h.canvas.height=1):typeof createImageBitmap<`u`&&(o=p,s=p,Rr(e,r).forEach(function(l){let f=m[l.ndx*2+0]*p,h=m[l.ndx*2+1]*p;e.texImage2D(l.face,a,c,p,p,0,u,d,null),createImageBitmap(n,f,h,p,p,{premultiplyAlpha:`none`,colorSpaceConversion:`none`}).then(function(n){Ar(e,r),e.bindTexture(i,t),e.texImage2D(l.face,a,c,u,d,n),Ir(r)&&Fr(e,t,r,o,s,c)})}))}else if(i===M||i===N){let t=Math.min(n.width,n.height),r=Math.max(n.width,n.height),o=r/t;if(o%1!=0)throw`can not compute 3D dimensions of element`;let s=+(n.width===r),l=+(n.height===r);e.pixelStorei(Xt,1),e.pixelStorei(Zt,n.width),e.pixelStorei(Qt,0),e.pixelStorei(tn,0),e.texImage3D(i,a,c,t,t,t,0,u,d,null);for(let r=0;r<o;++r){let o=r*t*s,c=r*t*l;e.pixelStorei($t,o),e.pixelStorei(en,c),e.texSubImage3D(i,a,0,0,r,t,t,1,u,d,n)}jr(e)}else e.texImage2D(i,a,c,u,d,n);Ir(r)&&Fr(e,t,r,o,s,c),Nr(e,t,r)}function Br(){}function Vr(e){if(typeof document<`u`){let t=document.createElement(`a`);return t.href=e,t.hostname===location.hostname&&t.port===location.port&&t.protocol===location.protocol}{let t=new URL(location.href).origin;return new URL(e,location.href).origin===t}}function Hr(e,t){return t===void 0&&!Vr(e)?`anonymous`:t}function Ur(e,t,n){n||=Br;let r;if(t=t===void 0?D.crossOrigin:t,t=Hr(e,t),typeof Image<`u`){r=new Image,t!==void 0&&(r.crossOrigin=t);let i=function(){r.removeEventListener(`error`,a),r.removeEventListener(`load`,o),r=null},a=function(){let t=`couldn't load image: `+e;nt(t),n(t,r),i()},o=function(){n(null,r),i()};return r.addEventListener(`error`,a),r.addEventListener(`load`,o),r.src=e,r}if(typeof ImageBitmap<`u`){let i,a,o=function(){n(i,a)},s={};t&&(s.mode=`cors`),fetch(e,s).then(function(e){if(!e.ok)throw e;return e.blob()}).then(function(e){return createImageBitmap(e,{premultiplyAlpha:`none`,colorSpaceConversion:`none`})}).then(function(e){a=e,setTimeout(o)}).catch(function(e){i=e,setTimeout(o)}),r=null}return r}function Wr(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof ImageData<`u`&&e instanceof ImageData||typeof HTMLElement<`u`&&e instanceof HTMLElement}function Gr(e,t,n){return Wr(e)?(setTimeout(function(){n(null,e)}),e):Ur(e,t,n)}function Kr(e,t,n){n||=D.textureOptions;let r=n.target||A;if(e.bindTexture(r,t),n.color===!1)return;let i=Pr(n.color);if(r===j)for(let t=0;t<6;++t)e.texImage2D(Ft+t,0,k,1,1,0,k,F,i);else r===M||r===N?e.texImage3D(r,0,k,1,1,1,0,k,F,i):e.texImage2D(r,0,k,1,1,0,k,F,i)}function qr(e,t,n,r){return r||=Br,n||=D.textureOptions,Kr(e,t,n),n=Object.assign({},n),Gr(n.src,n.crossOrigin,function(i,a){i?r(i,t,a):(zr(e,t,a,n),r(null,t,a))})}function Jr(e,t,n,r){r||=Br;let i=n.src;if(i.length!==6)throw`there must be 6 urls for a cubemap`;let a=n.level||0,o=n.internalFormat||n.format||k,s=wr(o),c=n.format||s.format,l=n.type||F,u=n.target||A;if(u!==j)throw`target must be TEXTURE_CUBE_MAP`;Kr(e,t,n),n=Object.assign({},n);let d=6,f=[],p=Lr(e,n),m;function h(i){return function(s,p){--d,s?f.push(s):p.width===p.height?(Ar(e,n),e.bindTexture(u,t),d===5?Lr().forEach(function(t){e.texImage2D(t,a,o,c,l,p)}):e.texImage2D(i,a,o,c,l,p),Ir(n)&&e.generateMipmap(u)):f.push(`cubemap face img is not a square: `+p.src),d===0&&r(f.length?f:void 0,t,m)}}m=i.map(function(e,t){return Gr(e,n.crossOrigin,h(p[t]))})}function Yr(e,t,n,r){r||=Br;let i=n.src,a=n.internalFormat||n.format||k,o=wr(a),s=n.format||o.format,c=n.type||F,l=n.target||N;if(l!==M&&l!==N)throw`target must be TEXTURE_3D or TEXTURE_2D_ARRAY`;Kr(e,t,n),n=Object.assign({},n);let u=i.length,d=[],f,p=n.level||0,m=n.width,h=n.height,g=i.length,_=!0;function v(i){return function(o,v){if(--u,o)d.push(o);else{if(Ar(e,n),e.bindTexture(l,t),_){_=!1,m=n.width||v.width,h=n.height||v.height,e.texImage3D(l,p,a,m,h,g,0,s,c,null);for(let t=0;t<g;++t)e.texSubImage3D(l,p,0,0,t,m,h,1,s,c,v)}else{let t=v,n;(v.width!==m||v.height!==h)&&(n=Et(),t=n.canvas,n.canvas.width=m,n.canvas.height=h,n.drawImage(v,0,0,m,h)),e.texSubImage3D(l,p,0,0,i,m,h,1,s,c,t),n&&t===n.canvas&&(n.canvas.width=0,n.canvas.height=0)}Ir(n)&&e.generateMipmap(l)}u===0&&r(d.length?d:void 0,t,f)}}f=i.map(function(e,t){return Gr(e,n.crossOrigin,v(t))})}function Xr(e,t,n,r){r||=D.textureOptions;let i=r.target||A;e.bindTexture(i,t);let a=r.width,o=r.height,s=r.depth,c=r.level||0,l=r.internalFormat||r.format||k,u=wr(l),d=r.format||u.format,f=r.type||Or(e,n,u.type);Tt(n)?n instanceof Uint8ClampedArray&&(n=new Uint8Array(n.buffer)):n=new(et(f))(n);let p=Cr(l,f),m=n.byteLength/p;if(m%1)throw`length wrong size for format: `+wt(e,d);let h;if(i===M||i===N){if(!a&&!o&&!s){let e=Math.cbrt(m);if(e%1!=0)throw`can't guess cube size of array of numElements: `+m;a=e,o=e,s=e}else a&&(!o||!s)?(h=kr(e,i,o,s,m/a),o=h.width,s=h.height):o&&(!a||!s)?(h=kr(e,i,a,s,m/o),a=h.width,s=h.height):(h=kr(e,i,a,o,m/s),a=h.width,o=h.height)}else h=kr(e,i,a,o,m),a=h.width,o=h.height;if(jr(e),e.pixelStorei(Xt,r.unpackAlignment||1),Ar(e,r),i===j){let t=p/n.BYTES_PER_ELEMENT,i=m/6*t;Rr(e,r).forEach(t=>{let r=i*t.ndx,s=n.subarray(r,r+i);e.texImage2D(t.face,c,l,a,o,0,d,f,s)})}else i===M||i===N?e.texImage3D(i,c,l,a,o,s,0,d,f,n):e.texImage2D(i,c,l,a,o,0,d,f,n);return{width:a,height:o,depth:s,type:f}}function Zr(e,t,n){let r=n.target||A;e.bindTexture(r,t);let i=n.level||0,a=n.internalFormat||n.format||k,o=wr(a),s=n.format||o.format,c=n.type||o.type;if(Ar(e,n),r===j)for(let t=0;t<6;++t)e.texImage2D(Ft+t,i,a,n.width,n.height,0,s,c,null);else r===M||r===N?e.texImage3D(r,i,a,n.width,n.height,n.depth,0,s,c,null):e.texImage2D(r,i,a,n.width,n.height,0,s,c,null)}function Qr(e,t,n){n||=Br,t||=D.textureOptions;let r=e.createTexture(),i=t.target||A,a=t.width||1,o=t.height||1,s=t.internalFormat||k;e.bindTexture(i,r),i===j&&(e.texParameteri(i,Ut,Mt),e.texParameteri(i,Wt,Mt));let c=t.src;if(c){if(typeof c==`function`&&(c=c(e,t)),typeof c==`string`)qr(e,r,t,n);else if(Tt(c)||Array.isArray(c)&&(typeof c[0]==`number`||Array.isArray(c[0])||Tt(c[0]))){let n=Xr(e,r,c,t);a=n.width,o=n.height}else Array.isArray(c)&&(typeof c[0]==`string`||Wr(c[0]))?i===j?Jr(e,r,t,n):Yr(e,r,t,n):(zr(e,r,c,t),a=c.width,o=c.height)}else Zr(e,r,t);return Ir(t)&&Fr(e,r,t,a,o,s),Nr(e,r,t),r}function $r(e,t,n,r,i,a){r||=n.width,i||=n.height,a||=n.depth;let o=n.target||A;e.bindTexture(o,t);let s=n.level||0,c=n.internalFormat||n.format||k,l=wr(c),u=n.format||l.format,d,f=n.src;if(d=f&&(Tt(f)||Array.isArray(f)&&typeof f[0]==`number`)?n.type||Or(e,f,l.type):n.type||l.type,o===j)for(let t=0;t<6;++t)e.texImage2D(Ft+t,s,c,r,i,0,u,d,null);else o===M||o===N?e.texImage3D(o,s,c,r,i,a,0,u,d,null):e.texImage2D(o,s,c,r,i,0,u,d,null)}var ei=rt,ti=33984,ni=35048,ri=34962,ii=34963,ai=35345,oi=35718,si=35721,ci=35971,li=35382,ui=35396,di=35398,fi=35392,pi=35395,mi=5126,hi=35664,gi=35665,_i=35666,vi=5124,yi=35667,bi=35668,xi=35669,Si=35670,Ci=35671,wi=35672,Ti=35673,Ei=35674,Di=35675,Oi=35676,ki=35678,Ai=35680,ji=35679,Mi=35682,Ni=35685,Pi=35686,Fi=35687,Ii=35688,Li=35689,Ri=35690,zi=36289,Bi=36292,Vi=36293,Hi=5125,Ui=36294,Wi=36295,Gi=36296,Ki=36298,qi=36299,Ji=36300,Yi=36303,Xi=36306,Zi=36307,Qi=36308,$i=36311,ea=3553,ta=34067,na=32879,ra=35866,U={};function ia(e,t){return U[t].bindPoint}function aa(e,t){return function(n){e.uniform1f(t,n)}}function oa(e,t){return function(n){e.uniform1fv(t,n)}}function sa(e,t){return function(n){e.uniform2fv(t,n)}}function ca(e,t){return function(n){e.uniform3fv(t,n)}}function la(e,t){return function(n){e.uniform4fv(t,n)}}function ua(e,t){return function(n){e.uniform1i(t,n)}}function da(e,t){return function(n){e.uniform1iv(t,n)}}function fa(e,t){return function(n){e.uniform2iv(t,n)}}function pa(e,t){return function(n){e.uniform3iv(t,n)}}function ma(e,t){return function(n){e.uniform4iv(t,n)}}function ha(e,t){return function(n){e.uniform1ui(t,n)}}function ga(e,t){return function(n){e.uniform1uiv(t,n)}}function _a(e,t){return function(n){e.uniform2uiv(t,n)}}function va(e,t){return function(n){e.uniform3uiv(t,n)}}function ya(e,t){return function(n){e.uniform4uiv(t,n)}}function ba(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function xa(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function Sa(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Ca(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function wa(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function Ta(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function Ea(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function Da(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function Oa(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function W(e,t,n,r){let i=ia(e,t);return Ct(e)?function(t){let a,o;ot(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(ti+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(ti+n),e.bindTexture(i,t)}}function G(e,t,n,r,i){let a=ia(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return Ct(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(ti+o[r]);let i,s;ot(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(ti+o[n]),e.bindTexture(a,t)})}}U[mi]={Type:Float32Array,size:4,setter:aa,arraySetter:oa},U[hi]={Type:Float32Array,size:8,setter:sa,cols:2},U[gi]={Type:Float32Array,size:12,setter:ca,cols:3},U[_i]={Type:Float32Array,size:16,setter:la,cols:4},U[vi]={Type:Int32Array,size:4,setter:ua,arraySetter:da},U[yi]={Type:Int32Array,size:8,setter:fa,cols:2},U[bi]={Type:Int32Array,size:12,setter:pa,cols:3},U[xi]={Type:Int32Array,size:16,setter:ma,cols:4},U[Hi]={Type:Uint32Array,size:4,setter:ha,arraySetter:ga},U[Ui]={Type:Uint32Array,size:8,setter:_a,cols:2},U[Wi]={Type:Uint32Array,size:12,setter:va,cols:3},U[Gi]={Type:Uint32Array,size:16,setter:ya,cols:4},U[Si]={Type:Uint32Array,size:4,setter:ua,arraySetter:da},U[Ci]={Type:Uint32Array,size:8,setter:fa,cols:2},U[wi]={Type:Uint32Array,size:12,setter:pa,cols:3},U[Ti]={Type:Uint32Array,size:16,setter:ma,cols:4},U[Ei]={Type:Float32Array,size:32,setter:ba,rows:2,cols:2},U[Di]={Type:Float32Array,size:48,setter:xa,rows:3,cols:3},U[Oi]={Type:Float32Array,size:64,setter:Sa,rows:4,cols:4},U[Ni]={Type:Float32Array,size:32,setter:Ca,rows:2,cols:3},U[Pi]={Type:Float32Array,size:32,setter:Ta,rows:2,cols:4},U[Fi]={Type:Float32Array,size:48,setter:wa,rows:3,cols:2},U[Ii]={Type:Float32Array,size:48,setter:Da,rows:3,cols:4},U[Li]={Type:Float32Array,size:64,setter:Ea,rows:4,cols:2},U[Ri]={Type:Float32Array,size:64,setter:Oa,rows:4,cols:3},U[ki]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ea},U[Ai]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ta},U[ji]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:na},U[Mi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ea},U[zi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ra},U[Bi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ra},U[Vi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ta},U[Ki]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ea},U[qi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:na},U[Ji]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ta},U[Yi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ra},U[Xi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ea},U[Zi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:na},U[Qi]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ta},U[$i]={Type:null,size:0,setter:W,arraySetter:G,bindPoint:ra};function ka(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(ri,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||mi,n.normalize||!1,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function K(e,t){return function(n){if(n.value){if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`)}else e.bindBuffer(ri,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||vi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function Aa(e,t){return function(n){if(n.value){if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`)}else e.bindBuffer(ri,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Hi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function ja(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(ri,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||mi,c=U[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),n.divisor!==void 0&&e.vertexAttribDivisor(t+r,n.divisor)}}var q={};q[mi]={size:4,setter:ka},q[hi]={size:8,setter:ka},q[gi]={size:12,setter:ka},q[_i]={size:16,setter:ka},q[vi]={size:4,setter:K},q[yi]={size:8,setter:K},q[bi]={size:12,setter:K},q[xi]={size:16,setter:K},q[Hi]={size:4,setter:Aa},q[Ui]={size:8,setter:Aa},q[Wi]={size:12,setter:Aa},q[Gi]={size:16,setter:Aa},q[Si]={size:4,setter:K},q[Ci]={size:8,setter:K},q[wi]={size:12,setter:K},q[Ti]={size:16,setter:K},q[Ei]={size:4,setter:ja,count:2},q[Di]={size:9,setter:ja,count:3},q[Oi]={size:16,setter:ja,count:4};function Ma(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}var Na=/(\.|\[|]|\w+)/g,Pa=e=>e>=`0`&&e<=`9`;function Fa(e,t,n,r){let i=e.split(Na).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Pa(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){qa(e,t)}}(s),o+=e}}}function Ia(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=U[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,oi);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(Ma(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Fa(s,e,a,i)}}return i}function La(e,t){let n={},r=e.getProgramParameter(t,ci);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function Ra(e,t){let n=e.getProgramParameter(t,oi),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,li);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,ui),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,di),size:e.getActiveUniformBlockParameter(t,n,fi),uniformIndices:e.getActiveUniformBlockParameter(t,n,pi)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}var za=/\[\d+\]\.$/,Ba=(e,t)=>((e+(t-1))/t|0)*t;function Va(e,t,n,r){if(t||n){r||=1;let t=e.length/4;return function(n){let i=0,a=0;for(let o=0;o<t;++o){for(let t=0;t<r;++t)e[i++]=n[a++];i+=4-r}}}return function(t){t.length?e.set(t):e[0]=t}}function Ha(e,t,n,r){let i=n.blockSpecs,a=n.uniformData,o=i[r];if(!o)return ei(`no uniform block object named:`,r),{name:r,uniforms:{}};let s=new ArrayBuffer(o.size),c=e.createBuffer(),l=o.index;e.bindBuffer(ai,c),e.uniformBlockBinding(t,o.index,l);let u=r+`.`;za.test(u)&&(u=u.replace(za,`.`));let d={},f={},p={};return o.uniformIndices.forEach(function(e){let t=a[e],n=t.name;n.startsWith(u)&&(n=n.substr(u.length));let r=n.endsWith(`[0]`);r&&(n=n.substr(0,n.length-3));let i=U[t.type],o=i.Type,c=r?Ba(i.size,16)*t.size:i.size*t.size,l=new o(s,t.offset,c/o.BYTES_PER_ELEMENT);d[n]=l;let m=Va(l,r,i.rows,i.cols);f[n]=m,Fa(n,m,p,f)}),{name:r,array:s,asFloat:new Float32Array(s),buffer:c,uniforms:d,setters:f}}function Ua(e,t,n){return Ha(e,t.program,t.uniformBlockSpec,n)}function Wa(e,t,n){let r=(t.uniformBlockSpec||t).blockSpecs[n.name];if(r){let t=r.index;return e.bindBufferRange(ai,t,n.buffer,n.offset||0,n.array.byteLength),!0}return!1}function Ga(e,t,n){Wa(e,t,n)&&e.bufferData(ai,n.array,ni)}function Ka(e,t){let n=e.setters;for(let e in t){let r=n[e];if(r){let n=t[e];r(n)}}}function qa(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):qa(e[n],t[n])}}function J(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)J(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function Ja(e,t){let n={},r=e.getProgramParameter(t,si);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(Ma(r))continue;let a=e.getAttribLocation(t,r.name),o=q[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function Ya(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function Y(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(Ya(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(ii,n.indices))}function Xa(e,t){let n={program:t,uniformSetters:Ia(e,t),attribSetters:Ja(e,t)};return Ct(e)&&(n.uniformBlockSpec=Ra(e,t),n.transformFeedbackInfo=La(e,t)),n}var Za=4,Qa=5123;function $a(e,t,n,r,i,a){n=n===void 0?Za:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?Qa:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?Qa:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var eo=36160,to=36161,no=3553,ro=5121,io=6402,ao=6408,oo=33190,so=36012,co=35056,lo=36013,uo=32854,fo=32855,po=36194,mo=33189,ho=6401,go=36168,_o=34041,vo=36064,yo=36096,bo=36128,xo=33306,So=33071,Co=9729,wo=[{format:ao,type:ro,min:Co,wrap:So},{format:_o}],X={};X[_o]=xo,X[ho]=bo,X[go]=bo,X[io]=yo,X[mo]=yo,X[oo]=yo,X[so]=yo,X[co]=xo,X[lo]=xo;function To(e,t){return X[e]||X[t]}var Z={};Z[uo]=!0,Z[fo]=!0,Z[po]=!0,Z[_o]=!0,Z[mo]=!0,Z[ho]=!0,Z[go]=!0;function Eo(e){return Z[e]}function Do(e){return e>=vo&&e<36096}function Oo(e,t,n,r){let i=eo,a=e.createFramebuffer();e.bindFramebuffer(i,a),n||=e.drawingBufferWidth,r||=e.drawingBufferHeight,t||=wo;let o=[],s={framebuffer:a,attachments:[],width:n,height:r};return t.forEach(function(t,a){let c=t.attachment,l=t.samples,u=t.format,d=t.attachmentPoint||To(u,t.internalFormat);if(d||=vo+a,Do(d)&&o.push(d),!c){if(l!==void 0||Eo(u))c=e.createRenderbuffer(),e.bindRenderbuffer(to,c),l>1?e.renderbufferStorageMultisample(to,l,u,n,r):e.renderbufferStorage(to,u,n,r);else{let i=Object.assign({},t);i.width=n,i.height=r,i.auto===void 0&&(i.auto=!1,i.min=i.min||i.minMag||Co,i.mag=i.mag||i.minMag||Co,i.wrapS=i.wrapS||i.wrap||So,i.wrapT=i.wrapT||i.wrap||So),c=Qr(e,i)}}if(at(e,c))e.framebufferRenderbuffer(i,d,to,c);else if(ot(e,c))t.layer===void 0?e.framebufferTexture2D(i,d,t.target||no,c,t.level||0):e.framebufferTextureLayer(i,d,c,t.level||0,t.layer);else throw Error(`unknown attachment type`);s.attachments.push(c)}),e.drawBuffers&&e.drawBuffers(o),s}function ko(e,t,n,r,i){r||=e.drawingBufferWidth,i||=e.drawingBufferHeight,t.width=r,t.height=i,n||=wo,n.forEach(function(n,a){let o=t.attachments[a],s=n.format,c=n.samples;if(c!==void 0||at(e,o))e.bindRenderbuffer(to,o),c>1?e.renderbufferStorageMultisample(to,c,s,r,i):e.renderbufferStorage(to,s,r,i);else if(ot(e,o))$r(e,o,n,r,i);else throw Error(`unknown attachment type`)})}function Ao(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),t.length||(t=[t]),t.forEach(function(t){Y(e,t,n)}),e.bindVertexArray(null),{numElements:n.numElements,elementType:n.elementType,vertexArrayObject:r}}var jo={addExtensionsToContext:!0},Mo=/^(.*?)_/;function No(e,t){wt(e,0);let n=e.getExtension(t);if(n){let r={},i=Mo.exec(t)[1],a=`_`+i;for(let t in n){let o=n[t],s=typeof o==`function`,c=s?i:a,l=t;t.endsWith(c)&&(l=t.substring(0,t.length-c.length)),e[l]===void 0?s?e[l]=function(e){return function(){return e.apply(n,arguments)}}(o):(e[l]=o,r[l]=o):!s&&e[l]!==o&&rt(l,e[l],o,t)}r.constructor={name:n.constructor.name},wt(r,0)}return n}var Po=[`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_float`,`EXT_color_buffer_half_float`,`EXT_disjoint_timer_query`,`EXT_disjoint_timer_query_webgl2`,`EXT_frag_depth`,`EXT_sRGB`,`EXT_shader_texture_lod`,`EXT_texture_filter_anisotropic`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_atc`,`WEBGL_compressed_texture_etc1`,`WEBGL_compressed_texture_pvrtc`,`WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_depth_texture`,`WEBGL_draw_buffers`];function Fo(e){for(let t=0;t<Po.length;++t)No(e,Po[t])}function Io(e,t){let n=[`webgl2`,`webgl`,`experimental-webgl`],r=null;for(let i=0;i<n.length;++i)if(r=e.getContext(n[i],t),r){jo.addExtensionsToContext&&Fo(r);break}return r}function Lo(e,t){return Io(e,t)}function Ro(e,t,n,r,a=!1){let o=s(e)?e:e.name,c=!s(e)&&e.extent||[0,1];if(n===void 0&&!s(e)&&(n=e.count),o){let e=pe(o);if(u(e)){let i=Ho(e,{extent:c,count:n,reverse:a});return Rs(t,{minMag:t.LINEAR,format:t.RGBA,height:1,wrap:t.CLAMP_TO_EDGE},i,r)}if(i(e))return Vo(a?Array.from(e).reverse():e,t,n,r);throw Error(`Unknown scheme: `+o)}}function zo(e,t=`rgb`,n,r){let i=Ho(re(e,s(t)?t:t.type,s(t)?void 0:t.gamma));return Rs(n,{minMag:n.LINEAR,format:n.RGBA,height:1,wrap:n.CLAMP_TO_EDGE},i,r)}function Bo(e,t,n,r){let i=Math.max(e.length,n||0),a=new Float32Array(i);for(let t=0;t<i;t++)a[t]=e[t%e.length];return Rs(t,{minMag:t.NEAREST,format:t.RED,internalFormat:t.R32F,height:1},a,r)}function Vo(e,t,n,r){let i=Uo(e,n);return Rs(t,{minMag:t.NEAREST,format:t.RGBA,height:1},i,r)}function Ho(e,{extent:t=[0,1],reverse:i=!1,count:a=256}={}){let o=t[0],s=r(t)-o,c=n(a).map(e=>e/(a-1)).map(e=>o+e/s).map(e);return i&&c.reverse(),Uo(c)}function Uo(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*4);for(let t=0;t<n;t++){let n=Ae(e[t%e.length]);for(let e=0;e<4;e++)r[t*4+e]=n[e]*255}return r}function Wo(e,t=!1){let n=e===`y`?`uViewportSize.y * getSampleFacetPos().height`:`uViewportSize.x`;return`
uniform highp usampler2D uGapCuts_${e};
uniform highp int uGapCount_${e};
uniform highp vec4 uGapGeometry_${e};

bool gapFits_${e}(vec2 range) {
    return abs(range.y - range.x) * ${n} >
        uGapGeometry_${e}.x * (uGapGeometry_${e}.z - uGapGeometry_${e}.y);
}

int gapRank_${e}(uvec2 value, bool before) {
    int lo = 0;
    int hi = uGapCount_${e};
    int width = textureSize(uGapCuts_${e}, 0).x;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        uvec2 cut = texelFetch(uGapCuts_${e}, ivec2(mid % width, mid / width), 0).rg;
        bool less = cut.x < value.x || (cut.x == value.x && cut.y < value.y);
        if (less || (!before && all(equal(cut, value)))) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

float scaleGaps_${e}(uvec2 value, vec3 domain, vec2 range,
    float paddingInner, float paddingOuter, float align, float band, bool before) {
    vec4 geometry = uGapGeometry_${e};
    float gap = geometry.x / ${n} * sign(range.y - range.x);
    float available = range.y - range.x - gap * (geometry.z - geometry.y);
    float space = max(geometry.w > 0.5 ? 1e-9 : ${t?`0.0`:`1.0`}, domain.z - paddingInner + 2.0 * paddingOuter);
    float step = available / (space > 0.0 ? space : 1.0);
    float start = range.x + (available - step * (domain.z - paddingInner)) * align;
    float inf = 1.0 / uZero;
    float hi = max(float(value.x) * 4096.0 - domain.x, -inf);
    float lo = max(float(value.y) - domain.y, -inf);
    float rank = float(gapRank_${e}(value, before));
    return start + hi * step + lo * step + gap * (rank - geometry.y) + step * (1.0 - paddingInner) * band;
}

float scaleGaps_${e}(uint value, vec3 domain, vec2 range,
    float paddingInner, float paddingOuter, float align, float band, bool before) {
    return scaleGaps_${e}(uvec2(value >> 12u, value & 4095u), domain, range,
        paddingInner, paddingOuter, align, band, before);
}
`+(t?`
float scaleBandGaps_${e}(uint value, vec2 domain, vec2 range,
    float paddingInner, float paddingOuter, float align, float band) {
    bool reverse = range.y < range.x;
    return scaleGaps_${e}(value, vec3(domain.x, 0.0, domain.y - domain.x), range,
        paddingInner, paddingOuter, reverse ? 1.0 - align : align,
        reverse ? 1.0 - band : band, false);
}
`:``)}var Go=`attr_`,Ko=`uDomain_`,qo=`range_`,Jo=`accessor_`,Yo=`scale_`,Xo=`getScaled_`,Zo=`uRangeTexture_`,Qo=`uDomainTexture_`,$o=`uParam_`,es=`isSelectionMember_`,Q=`isSelectionEmpty_`;function ts(e){let t=e.match(/^(?:(\w+)-)?(\w+)$/);if(!t)throw Error(`Not a scale type: `+e);return{family:t[1]||`continuous`,transform:t[2]}}function ns(e){return e.type===`quantize`?e.thresholds():e.domain()}function rs(e){return e.type===`quantize`?e.range().length:e.type===`threshold`?e.domain().length+1:e.domain().length}function is(e,t){return`${Jo}${e}_${t}`}function as(e,t,n){let r;if(a(e))r=$(te(e)(n));else if(s(n)){if(T(e))r=hs(n);else throw Error(`String values are not supported on the "${e}" channel: ${n}`)}else if(S(n))r=$(+!!n);else if(n===null){if(T(e))r=$([0,0,0,0]);else throw Error(`null value is not supported on the "${e}" chanel.`)}else r=$(n);let i=is(e,t);return{channel:e,accessorGlsl:`
${r.type} ${i}() {
    // Constant value
    return ${r};
}`,accessorFunctionName:i}}function os(e,t){let n=`float`,r=e=>e;T(e)?(n=`vec4`,r=e=>Ae(e)):a(e)&&(r=te(e));let i=`u${Ts(e)}_${t}`,o=`    // Dynamic value\n    uniform ${n} ${i};`,s=is(e,t);return{channel:e,uniformName:i,uniformGlsl:o,accessorGlsl:`
${n} ${s}() {
    // Dynamic value
    return ${i};
}`,accessorFunctionName:s,adjuster:r}}function ss(e,t,n,r=[e]){let{attributeType:i}=vs(t,e),a=ws(r),o=`in highp ${i} ${a};`,s=is(e,n);return{channel:e,attributeName:a,attributeGlsl:o,accessorGlsl:`
${i} ${s}() {
    return ${a};
}`,accessorFunctionName:s}}function cs(e,t,n){let{attributeType:r}=vs(t,e),i=ws(e),a=`    uniform highp ${r} ${i};`,o=is(e,n);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${r} ${o}() {
    return ${i};
}`,accessorFunctionName:o}}function ls(e,t,n){t??=xe();let r=ne(e),i=Ko+r,o=qo+r,{hp:s,attributeType:c}=vs(t,e),u=t.domain?w(t.type)?ns(t).length:t.domain().length:void 0,f,m=[];m.push(``),m.push(`/`.repeat(70)),m.push(`// Channel: ${e}`),m.push(``);let{transform:h}=ts(t.type),g=(e,...t)=>_s.apply(null,[e,`value`,...t]),_;switch(h){case`linear`:_=g(`scaleLinear`,`domain`,o);break;case`log`:_=g(`scaleLog`,`domain`,o,t.base());break;case`symlog`:_=g(`scaleSymlog`,`domain`,o,t.constant());break;case`pow`:case`sqrt`:_=g(`scalePow`,`domain`,o,t.exponent());break;case`index`:case`locus`:{let i=p(t.props),a=we(n),s=is(a,0);i&&e===r&&m.push(Wo(r)),i&&a&&m.push(`${c} ${s}();`),_=g(i?`scaleGaps_`+r:`scaleBandHp`,`domain`,o,t.paddingInner(),t.paddingOuter(),t.align(),fs(n.band??(i&&a?0:.5)),...i?[a?c===`uvec2`?`(value.x > ${s}().x || (value.x == ${s}().x && value.y > ${s}().y))`:`value > ${s}()`:!1]:[]);break}case`point`:case`band`:{let i=p(t.props);i&&e===r&&m.push(Wo(r,!0)),_=g(i?`scaleBandGaps_`+r:`scaleBand`,`domain`,o,h===`point`?1:t.paddingInner(),h===`point`?t.padding():t.paddingOuter(),t.align(),fs(n.band??.5));break}case`ordinal`:case`null`:case`identity`:_=g(`scaleIdentity`);break;case`threshold`:case`quantize`:break;default:throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`)}let v=Es(t,e),ee;if(v&&e==r&&t.type!==`ordinal`){let e=t.props.range??[];if(l(e)||e.some(l)){if(v.length<1||v.length>4)throw Error(`A range with ExprRefs must have 1-4 elements, not ${v.length}! Range: ${JSON.stringify(v)}`);ee=`    uniform ${ps(v.length)} ${o};`}else if(v.length&&v.every(d)){let e=gs(v);m.push(`const ${e.type} ${o} = ${e};`)}}let te=ms(e),x;if(T(e)){let n=Zo+r;if(e==r&&m.push(`uniform sampler2D ${n};`),y(t.type))x=`getInterpolatedColor(${n}, transformed)`;else if(b(t.type)||w(t.type))x=`getDiscreteColor(${n}, int(transformed))`;else throw Error(`Problem with color scale!`)}else if(t.type===`ordinal`||w(t.type)){let t=Zo+r;e==r&&m.push(`uniform sampler2D ${t};`),x=`getDiscreteColor(${t}, int(transformed)).r`}let S=[];if(b(t.type)){let t=Qo+r;e===r&&m.push(`uniform highp usampler2D ${t};`),S.push(`uint slotId = getCategorySlot(${t}, value);`);let n=T(e)?`vec4(0.0)`:a(e)?`0.0`:`uintBitsToFloat(0x7fc00000u)`;S.push(`if (slotId == 0u) return ${n};`),S.push(`value = slotId - 1u;`)}let re=y(t.type)&&u>2,ie=w(t.type)||re;if(S.push(`int slot = 0;`),ie){let e=i;S.push(re?`while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }`:`while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`)}let C=y(t.type)||w(t.type)||[`band`,`point`].includes(t.type);if(_){let e=i;C&&(s?S.push(`vec3 domain = ${e};`):S.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)),S.push(`float transformed = ${_};`),re&&S.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`)}else S.push(`float transformed = float(slot);`);`clamp`in t&&t.clamp()&&S.push(`transformed = clampToRange(transformed, ${gs(v)});`),S.push(`return ${x??`transformed`};`),m.push(`
${te} ${Yo}${e}(${c} value) {
${S.map(e=>`    ${e}\n`).join(``)}
}`);let ae=m.join(`
`);if(C&&e==r){let e=y(t.type)||w(t.type)?u:2;f=s?`    highp vec3 ${i};`:`    mediump float ${i}[${e}];`}return{glsl:ae,domainUniformName:i,domainUniform:f,rangeUniformName:o,rangeUniform:ee}}function us(e,t,n){let r=ms(e),i=[],a=[];for(let r=0;r<t.length;r++){let{accessor:o,predicate:s}=t[r],c=is(e,r),{selection:l}=s;i.push(l?ds(l,n):null),a.push(o.scaleChannel?`return ${Yo}${e}(${c}());`:`return ${c}();`)}return`${r} ${Xo}${e}() {
${Ds(i,a)}
}

#define ${e}_DEFINED`}function ds(e,t){return`all`in e?`(${e.all.map(e=>ds(e,t)).join(` && `)})`:`any`in e?`(${e.any.map(e=>ds(e,t)).join(` || `)})`:`not`in e?`(!${ds(e.not,t)})`:`selectionActive`in e?`(!${Q}${e.selectionActive.param}())`:t?.(e)??`isSelectionMember_${e.param}() || (${e.empty} && isSelectionEmpty_${e.param}())`}function fs(e){if(!d(e))throw Error(`Not a number: ${e}`);if(e==1/0)return`3.402823466e+38`;if(e==-1/0)return`-3.402823466e+38`;{let t=`${e}`;return/^(-)?\d+$/.test(t)&&(t+=`.0`),t}}function $(e){typeof e==`number`&&(e=[e]);let t=e.length;if(t<1||t>4)throw Error(`Invalid number of components: `+t);let n=ps(t),r=`${n}(${e.map(fs).join(`, `)})`;return Object.assign(r,{type:n,numComponents:t})}function ps(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`Invalid number of components: `+e)}}function ms(e){return T(e)?`vec4`:e==`uniqueId`?`uint`:`float`}function hs(e){return $(Ae(e))}function gs(e){return $([e[0],r(e)])}function _s(e,...t){let n=[];for(let e of t)d(e)?n.push(fs(e)):i(e)?n.push($(e)):n.push(e);return`${e}(${n.join(`, `)})`}function vs(e,t){let n=e&&b(e.type),r=e&&ye(e.type),i=r&&be(e.domain()),a=i?{attributeType:`uvec2`,arrayConstructor:Uint32Array}:r||n||t==`uniqueId`?{attributeType:`uint`,arrayConstructor:Uint32Array}:{attributeType:`float`,arrayConstructor:Float32Array};return Object.assign(a,{numComponents:+(a.attributeType.match(/^(?:u)?vec([234])$/)?.[1]??1),discrete:n,hp:r,largeHp:i})}var ys=4096;function bs(e,t=[]){let n=e%ys;return t[0]=(e-n)/ys,t[1]=n,t}function xs(e){let t=e%ys;return[e-t,t]}function Ss(e){return[...xs(e[0]),e[1]-e[0]]}function Cs(e){let t=new oe([],JSON.stringify);for(let[n,r]of Object.entries(e)){let e=r.channelDef;if(m(e)){let i=[e.field,r.scale?(y(r.scale.type)||w(r.scale.type))??!1:!1];t.set(i,[...t.get(i)??[],n])}}return t}function ws(t){return Go+e(t).toSorted().join(`_`)}function Ts(e){return e[0].toUpperCase()+e.slice(1)}var Es=(e,t)=>C(e.type)||y(e.type)&&T(t)?[0,1]:e.range?e.range():void 0;function Ds(e,t){if(e.length!=t.length)throw Error(`Unequal array lengths`);let n=e.length;if(n==0)return``;if(n==1&&e[0]==null)return t[0];let r=[];for(let i=0;i<n;i++){let a=e[i],o=i==0?`if (${a})`:a==null&&i==n-1?`else`:`else if (${a})`;r.push(`    ${o} {
        ${t[i]}
    }`)}return r.join(`
`)}var Os=4294967295,ks=4294967295;function As(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function js(e,t={}){let n=Array.from(e,e=>Ns(e,`key`)),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??Ps(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a);o.fill(Os);let s=a-1;for(let e of n){if(e===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let t=As(e)&s,n=!1;for(let r=0;r<a;r+=1){let r=o[t];if(r===4294967295||r===e){o[t]=e,n=!0;break}t=t+1&s}if(!n)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Ms(e,t){if(!Number.isSafeInteger(e)||e<1)throw Error(`capacity must be a positive integer.`);if(e&e-1)throw Error(`capacity must be a power of two.`);if(!Number.isSafeInteger(t)||t<1)throw Error(`maxTextureSize must be a positive integer.`);if(e>t*t)throw Error(`Selection hash table exceeds maximum texture capacity.`);let n=1<<Math.floor(Math.log2(t)),r=Math.min(e,n),i=e/r;if(i>t)throw Error(`Selection hash table dimensions exceed maximum texture size.`);return{width:r,height:i}}function Ns(e,t){if(!Number.isSafeInteger(e)||e<0||e>ks)throw Error(t+` must be a non-negative u32.`);return e>>>0}function Ps(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var Fs=class{#e=!1;#t=()=>{};_ownedTextures=new Set;_placementDisposers=new Set;constructor(e,t,n={},r){let i=t??(()=>({width:void 0,height:void 0}));this._canvasSizeHelper=void 0,this._appliedCanvasSize=void 0,this._onCanvasResize=r??(()=>{}),this._shaderCache=new Map,this.rangeTextures=new WeakMap,this.placementTextures=new WeakMap,this.selectionTextures=new WeakMap;let a=document.createElement(`canvas`),o=Lo(a,{antialias:!0,depth:!1,premultipliedAlpha:!0,...n});if(!o)throw Error(`Unable to initialize WebGL. Your browser or machine may not support it.`);if(!Ct(o))throw Error(`Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.`);Fo(o);let s=o.getExtension(`WEBGL_provoking_vertex`);s&&s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),this.canvas=a,this.gl=o,this._pickingAttachmentOptions=[{format:o.RGBA,type:o.UNSIGNED_BYTE,minMag:o.LINEAR,wrap:o.CLAMP_TO_EDGE}],this._pickingBufferInfo=Oo(o,this._pickingAttachmentOptions),o.bindFramebuffer(o.FRAMEBUFFER,null),e.appendChild(a);try{this._canvasSizeHelper=new je(e,a,i,()=>{this.adjustGl()&&this._onCanvasResize()}),this.adjustGl()}catch(e){throw this._canvasSizeHelper?.finalize(),a.remove(),e}}getPlacementTexture(e){let t=e.getSnapshot(),n=this.placementTextures.get(e);if(n?.geometryRevision===t.geometryRevision)return n.texture;let r=n?.data.length===t.rectangles.length/2?n.data:new Float32Array(t.rectangles.length/2);for(let e=0;e<t.rectangles.length/4;e++)r[e*2]=t.rectangles[e*4+1],r[e*2+1]=t.rectangles[e*4+3];let i=Rs(this.gl,{internalFormat:this.gl.RG32F,format:this.gl.RG,height:1},r,n?.texture);if(this.placementTextures.set(e,{texture:i,geometryRevision:t.geometryRevision,data:r}),this._ownedTextures.add(i),!n){let t;t=e.onDispose(()=>{this._placementDisposers.delete(t);let n=this.placementTextures.get(e);n&&(this._ownedTextures.delete(n.texture)&&this.gl.deleteTexture(n.texture),this.placementTextures.delete(e))}),this._placementDisposers.add(t)}return i}invalidateSize(){return this._canvasSizeHelper.invalidate(),this.adjustGl()}compileShader(e,t){i(t)&&(t=t.join(`

`));let n=this.gl,r=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,``),a=this._shaderCache.get(r);if(!a){let i=[`#version 300 es`,`precision mediump float;`,t].join(`

`);a=n.createShader(e),n.shaderSource(a,i),n.compileShader(a),this._shaderCache.set(r,a)}return a}adjustGl(){let e=this.getLogicalCanvasSize(),t=this.getPhysicalCanvasSize(e);return this._appliedCanvasSize&&this._appliedCanvasSize.logicalWidth==e.width&&this._appliedCanvasSize.logicalHeight==e.height&&this._appliedCanvasSize.physicalWidth==t.width&&this._appliedCanvasSize.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,ko(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions),this._appliedCanvasSize={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},!0)}finalize(){if(!this.#e){this.#e=!0,this.#t();for(let e of this._placementDisposers)e();this._placementDisposers.clear();for(let e of this._ownedTextures)this.gl.deleteTexture(e);this._ownedTextures.clear();for(let e of this._shaderCache.values())this.gl.deleteShader(e);this._shaderCache.clear();for(let e of this._pickingBufferInfo.attachments)this.gl.deleteTexture(e);this.gl.deleteFramebuffer(this._pickingBufferInfo.framebuffer),this._canvasSizeHelper.finalize(),this.gl.getExtension(`WEBGL_lose_context`)?.loseContext(),this.canvas.remove()}}setResourceFinalizer(e){this.#t=e}getPhysicalCanvasSize(e){return this._canvasSizeHelper.getPhysicalCanvasSize(e)}getDevicePixelRatio(e){return this._canvasSizeHelper.getDevicePixelRatio(e)}getLogicalCanvasSize(){return this._canvasSizeHelper.getLogicalCanvasSize()}createRangeTexture(e,t=!1){let n=this.rangeTextures.get(e.getScale());if(!t&&n)return;let r=e.channel;if(T(r)){let t=e.getScale(),r=t.props,i=t.range(),a;if(r.scheme){if(b(t.type)||w(t.type))a=Vo(i,this.gl,b(t.type)?i.length:rs(t),n);else{let e=s(r.scheme)?void 0:r.scheme.count;a=Ro(r.scheme,this.gl,e,n,!!r.reverse)}}else a=C(t.type)||y(t.type)&&i.length>1?zo(i,r.interpolate,this.gl,n):Vo(i,this.gl,w(t.type)?rs(t):i.length,n);this.rangeTextures.set(t,a),this._ownedTextures.add(a)}else{let t=e.getScale();if(t.type===`ordinal`||w(t.type)){let e=a(r)?te(r):e=>e,i=t.range(),o=Bo(i.map(e),this.gl,w(t.type)?rs(t):i.length,n);this.rangeTextures.set(t,o),this._ownedTextures.add(o)}}}createSelectionTexture(e,t=!0){if(!_(e))throw Error(`Not a multi-point selection, cannot create texture`);let n=this.createIntegerSetTexture(e.data.keys(),t?this.selectionTextures.get(e):void 0);this.selectionTextures.set(e,n),this._ownedTextures.add(n)}createIntegerSetTexture(e,t){let{table:n,capacity:r}=js(e),{width:i,height:a}=Ms(r,this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),o=this.gl,s=Rs(this.gl,{auto:!1,level:0,min:o.NEAREST,mag:o.NEAREST,format:o.RED_INTEGER,internalFormat:o.R32UI,width:i,height:a},n,t);return o.bindTexture(o.TEXTURE_2D,s),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_BASE_LEVEL,0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAX_LEVEL,0),o.bindTexture(o.TEXTURE_2D,null),s}};function Is(e,t=``,n=0){let r=[...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Ls(e,t,n){let r=e.createProgram();e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);function i(){if(e.isContextLost())return{message:`WebGL context lost during shader initialization.`,detail:void 0};let i,a;if(!e.getProgramParameter(r,e.LINK_STATUS)){i=e.getProgramInfoLog(r)||`Shader program linking failed.`;for(let r of[t,n])e.getShaderParameter(r,e.COMPILE_STATUS)||(i=e.getShaderInfoLog(r)||`Shader compilation failed.`,a=Is(e.getShaderSource(r)??``,i,0)+`\nError compiling: ${i}`,e.deleteShader(r));e.deleteProgram(r)}if(i)return{message:i,detail:a}}return{program:r,getProgramErrors:i}}function Rs(e,t,n,r){return r?Xr(e,r,n,t):r=Qr(e,{...t,src:n}),r}function zs(e,t,n,r){let{height:i,framebuffer:a}=t,o=new Uint8Array(4);return e.bindFramebuffer(e.FRAMEBUFFER,a),e.readPixels(n,i-r-1,1,1,e.RGBA,e.UNSIGNED_BYTE,o),e.bindFramebuffer(e.FRAMEBUFFER,null),o}var Bs=class extends ke{#e=[0,0,0,0];#t;#n;#r=[];#i;#a;#o;#s=new Set;#c=new Set;#l;#u=void 0;#d=1;#f={width:0,height:0};#p;constructor(e,t){super(e),this.#a=t.webGLHelper,this.#o=t.markAdapter,this.#i=t.framebufferInfo,this.#d=t.devicePixelRatio,this.#f=t.canvasSize,this.#l=t.markPredicate??(()=>!0),this.#p=t.pixelOffset,this.setClearColor(t.clearColor)}setClearColor(e){e!==this.#t&&(this.#t=e,this.#e=e==null?[0,0,0,0]:Ae(e))}getDevicePixelRatio(){return this.#d}pushView(e,t){this.#c.add(e),this.#u=t}renderMark(e,t){if(!this.#l(e)||this.globalOptions.picking&&!e.isPickingParticipant())return;let n=se(t);this.#r.push({mark:e,options:t,coords:this.#u,placement:t.placement,clip:le(n,e.properties.clip,this.#u),cullClip:n})}render(){if(this.finish(),this.#o.synchronize(this.#s),this.#n.length==0)return;let e=this.#a.gl,t=this.#i;t?(e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.viewport(0,0,t.width,t.height)):e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.SCISSOR_TEST),e.clearColor(...this.#e),e.clear(e.COLOR_BUFFER_BIT);for(let e of this.#c)e.onBeforeRender();for(let e of this.#n)e();this.#i&&e.bindFramebuffer(e.FRAMEBUFFER,null)}finish(){if(this.#n&&this.#o.hasStructuralChanges(this.#s)&&(this.#n=void 0,this.#s.clear()),!this.#n){let e=this.#r.map(e=>e.mark);this.#o.prepareMarks(e),this.#o.synchronize(e.map(e=>this.#o.getMarkEntry(e)).filter(e=>e)),this.#m()}}#m(){this.#n=[];let e=!0,t=!0,n=!1,r=t=>()=>{e&&t()},i=n=>()=>{e&&t&&n()},a=ve(this.#r.reverse(),e=>e.mark);for(let[o,s]of[...a.entries()].reverse()){let a=this.#o.getMarkEntry(o);if(!a)continue;let c=a.graphics;if(!this.#o.isEntryDrawable(a))continue;this.#s.add(a);let l=o.getOrder?.(),u=s.map(e=>({...e,callback:c.render(l?{...e.options,orderPass:`all`}:e.options),orderCallbacks:l&&!this.globalOptions.picking?l.passes.map((t,n)=>c.render({...e.options,orderPass:t,secondOrderPass:n===1})):void 0})).filter(e=>e.callback);if(u.length==0)continue;let d=u[0].placement,f=d?{...this.globalOptions,placement:d}:this.globalOptions,p=c.prepareRender(f).map(e=>r(e));this.#n.push(()=>{e=this.#o.isEntryDrawable(a)&&o.unitView.getEffectiveOpacity()>0,t=!0,n=!!l&&!this.globalOptions.picking&&l.isActive()}),this.#n.push(...p);let m,h,g;for(let e of u){let a=e.coords;(!a.equals(m)||!ae(e.clip,h)||!ae(e.cullClip,g))&&this.#n.push(r(()=>{t=c.setViewport(this.#f,this.#d,a,e.clip,e.cullClip,this.#p)}));let{callback:o,orderCallbacks:s}=e,l=s?()=>{if(n)for(let e of s)e();else o()}:o;this.#n.push(i(l)),m=e.coords,h=e.clip,g=e.cullClip}}}},Vs=class extends ke{constructor(...e){super({}),this.contexts=e}beginSampleFacetBatch(){for(let e of this.contexts)e.beginSampleFacetBatch()}endSampleFacetBatch(){for(let e of this.contexts)e.endSampleFacetBatch()}pushView(e,t){for(let n of this.contexts)n.pushView(e,t)}popView(e){for(let t of this.contexts)t.popView(e)}renderMark(e,t){for(let n of this.contexts)n.renderMark(e,t)}},Hs=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;constructor({viewRoot:e,glHelper:t,markAdapter:n,getBackground:r,broadcast:i,onLayoutComputed:a}){this.#e=e,this.#t=t,this.#n=n,this.#r=r,this.#i=i,this.#a=a,this.#o=void 0,this.#s=void 0,this.#c=!1}computeLayout(){if(!this.#e)return;this.#i(`layout`),this.#t.invalidateSize();let e=5;for(;;){let t=this.#l();if(!t)return;if(!this.#t.invalidateSize()){this.#u(t),this.#a(),this.#i(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}#l(){let e=this.#e,t=this.#t.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height))return console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`),!1;let n=this.#t.getDevicePixelRatio(t);return{layoutResult:De(`layout`,()=>Oe(e,Te.create(0,0,t.width,t.height),{devicePixelRatio:n})),canvasSize:t,devicePixelRatio:n}}#u({layoutResult:e,canvasSize:t,devicePixelRatio:n}){let r={webGLHelper:this.#t,markAdapter:this.#n,canvasSize:t,devicePixelRatio:n},i=new Bs({picking:!1},{...r,clearColor:this.#r()}),a=new Bs({picking:!0},{...r,framebufferInfo:this.#t._pickingBufferInfo});De(`layoutReplay`,()=>e.collectRenderCommands(new Vs(i,a))),i.finish(),a.finish(),this.#o=i,this.#s=a}renderAll(){this.#o?.setClearColor(this.#r());let e=Ee();e?.beginFrame(`webgl`),De(`render`,()=>this.#o?.render()),this.#c=!0,e?.endFrame()}renderPickingFramebuffer(){if(!this.#c)return;let e=Ee();e?.beginFrame(`webgl`,`picking`),De(`picking`,()=>this.#s.render()),this.#c=!1,e?.endFrame()}};function Us(e,t,n={}){let r=n.x??0,i=n.y??0,a=n.width??t.width,o=n.height??t.height;Js(t,r,i,a,o);let s=new Uint8Array(a*o*4);e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer);try{e.readPixels(r,t.height-i-o,a,o,e.RGBA,e.UNSIGNED_BYTE,s)}finally{e.bindFramebuffer(e.FRAMEBUFFER,null)}return{pixels:qs(s,a,o,n.unpremultiplyAlpha??!1),width:a,height:o}}function Ws(e,t,n=`image/png`,r={}){return Ks(e,t,r).toDataURL(n)}function Gs(e,t,n=`image/png`,r={}){let i=Ks(e,t,r);return new Promise((e,t)=>{i.toBlob(r=>{r?e(r):t(Error(`Could not encode framebuffer as ${n}.`))},n)})}function Ks(e,t,n){let{pixels:r,width:i,height:a}=Us(e,t,n),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=s.createImageData(i,a);return c.data.set(r),s.putImageData(c,0,0),o}function qs(e,t,n,r){let i=new Uint8ClampedArray(e.length),a=t*4;for(let t=0;t<n;t++){let r=(n-t-1)*a,o=t*a;i.set(e.subarray(r,r+a),o)}if(r)for(let e=0;e<i.length;e+=4){let t=i[e+3];if(t==0)i[e]=0,i[e+1]=0,i[e+2]=0;else if(t<255){let n=255/t;i[e]=Math.round(i[e]*n),i[e+1]=Math.round(i[e+1]*n),i[e+2]=Math.round(i[e+2]*n)}}return i}function Js(e,t,n,r,i){if(![t,n,r,i].every(Number.isInteger))throw RangeError(`Framebuffer readback bounds must be integers.`);if(t<0||n<0||r<=0||i<=0||t+r>e.width||n+i>e.height)throw RangeError(`Framebuffer readback bounds are out of range.`)}function Ys({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,devicePixelRatio:a,clearColor:o=`white`}){let{gl:s,framebufferInfo:c}=Zs({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return Ws(s,c,`image/png`)}finally{Qs(s,c)}}async function Xs({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o=`white`,mimeType:s=`image/png`}){if(s!=`image/png`)throw Error(`Unsupported raster export MIME type: ${s}`);let{gl:c,framebufferInfo:l}=Zs({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return await Gs(c,l,s)}finally{Qs(c,l)}}function Zs({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o}){r??=e.getLogicalCanvasSize().width,i??=e.getLogicalCanvasSize().height,a??=window.devicePixelRatio??1;let s=e.gl,c=Math.floor(r*a),l=Math.floor(i*a),u=Oo(s,[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],c,l),d;try{d=Oo(s,[{format:s.RGBA8,samples:Math.min(4,s.getParameter(s.MAX_SAMPLES))}],c,l);let f=new Bs({picking:!1},{webGLHelper:e,markAdapter:t,canvasSize:{width:r,height:i},devicePixelRatio:a,clearColor:o,framebufferInfo:d});return Oe(n,Te.create(0,0,r,i),{devicePixelRatio:a}).collectRenderCommands(f),f.finish(),f.render(),s.disable(s.SCISSOR_TEST),s.bindFramebuffer(s.READ_FRAMEBUFFER,d.framebuffer),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,u.framebuffer),s.blitFramebuffer(0,0,c,l,0,0,c,l,s.COLOR_BUFFER_BIT,s.NEAREST),{gl:s,framebufferInfo:u}}catch(e){throw Qs(s,u),e}finally{d&&(s.deleteRenderbuffer(d.attachments[0]),s.deleteFramebuffer(d.framebuffer))}}function Qs(e,t){e.deleteTexture(t.attachments[0]),e.deleteFramebuffer(t.framebuffer)}var $s=`flat out lowp vec4 vFillColor;
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

    vec2 a = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    ));
    vec2 b = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    ));

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
    vStrokeColor = premultiplyColor(getScaled_stroke(), strokeOpacity);

    gl_Position = unitToNdc(p);

    float fillOpacity = getScaled_fillOpacity() * uViewOpacity;
    vFillColor = premultiplyColor(getScaled_fill(), fillOpacity);

    setupPicking();
}
`,ec=`in vec2 vPosInPixels;

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
        return INFINITY_SUBSTITUTE;
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
        : INFINITY_SUBSTITUTE;
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
            headDistance = INFINITY_SUBSTITUTE;
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

    float cf = distanceToRatio(-d);
    if (vHalfStrokeWidth > 0.0) {
        float ci = distanceToRatio(-d - vHalfStrokeWidth);
        float co = distanceToRatio(vHalfStrokeWidth - d);
        fragColor = ci * vFillColor
            + (cf - ci) * (vStrokeColor + (1.0 - vStrokeColor.a) * vFillColor)
            + (co - cf) * vStrokeColor;
    } else {
        fragColor = cf * vFillColor;
    }

    if (uPickingEnabled) {
        if (d < vHalfStrokeWidth) {
            fragColor = vPickingColor;
        }
    } else if (fragColor.a == 0.0) {
        discard;
    }
}
`,tc=`layout(std140) uniform Mark {
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
`,nc=1e4,rc=class{#e=!1;constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}configure(){if(this.#e)throw Error(`Already configured!`);this.#t(),this.#n(),this.#e=!0}addConverter(e,t){let n=this.createUpdater(e,t.numComponents||1,t.targetArrayType??Float32Array,t.arrayReference),r=t.f;this.dataUpdaters.push((t.arrayReference,e=>n(r(e))))}createUpdater(e,t,n=Float32Array,r=void 0){if(!d(this.size))throw Error(`The number of vertices must be defined!`);let i,a,o=0,s=new n(this.size*t);if(this.arrays[e]={data:s,numComponents:t},t==1){let e=0;i=()=>{s[o++]=e},a=t=>{e=+t}}else{let e=r??[0],n=r?e=>{}:t=>{e=t};switch(t){case 1:break;case 2:i=()=>{s[o++]=e[0],s[o++]=e[1]},a=n;break;case 3:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2]},a=n;break;case 4:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2],s[o++]=e[3]},a=n;break;default:throw Error(`Invalid numComponents: `+t)}}return this.pushers.push(i),a}pushAll(){throw Error(`Call configure() first!`)}updateFromDatum(e){throw Error(`Call configure() first!`)}#t(){if(this.size>nc){let e=this.pushers.map((e,t)=>`const p${t} = that.pushers[${t}];`).join(`
`),t=this.pushers.map((e,t)=>`  p${t}();`).join(`
`);this.pushAll=Function(`that`,`${e}
return function unrolledPushAll() {
${t}
  that.vertexCount++;
};`)(this)}else this.pushAll=()=>{for(let e=0;e<this.pushers.length;e++)this.pushers[e]();this.vertexCount++}}#n(){if(this.size>nc){let e=this.dataUpdaters.map((e,t)=>`const u${t} = that.dataUpdaters[${t}];`).join(`
`),t=this.dataUpdaters.map((e,t)=>`  u${t}(datum);`).join(`
`);this.updateFromDatum=Function(`that`,`datum`,`${e}
return function unrolledUpdateFromDatum(datum) {
${t}
};`)(this)}else this.updateFromDatum=e=>{for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}},ic=127;function ac(e){let t=[];for(let e=0;e<=ic;e++)t.push(void 0);let n=new Map;for(let r of e.chars)r.id<=ic?t[r.id]=r:n.set(r.id,r);let r=8722;n.has(r)||n.set(r,t[45]);function i(e){return(e<=ic?t[e]:n.get(e))||t[63]}function a(e){return i(e.charCodeAt(0))}let o=e.common.base,s=a(`x`),c=a(`X`),l=a(`q`),u=s.height-10,d=c.height-10,f=l.height-s.height+l.yoffset-s.yoffset;function p(e,t=1){let n=0;for(let t=0;t<e.length;t++)n+=i(e.charCodeAt(t)).xadvance;return n/o*t}let m=0;for(let t of e.chars)t.id>m&&(m=t.id);return{measureWidth:p,getCharByCode:i,getChar:a,chars:e.chars,maxCharId:m,xHeight:u,capHeight:d,descent:f,common:e.common}}var oc=2**31-1,sc=-(2**31);function cc(e,t,n,r=n,i=0,a=i){if(a<=i||t[1]<=t[0])return;let s=n===r,c=Array(e);c.fill(oc);let l=Array(e);l.fill(0);let u=t[0],d=(t[1]-t[0])/e,f=(t,n)=>{let r=(t-u)/d,i=Math.floor(r);return o(n&&i==r?i-1:i,0,e-1)},p=sc,m=-1/0,h=!1,g=(e,t,n=[0,0])=>{let r=f(e,!1),i=f(t,!0),a=c[r],o=Math.max(l[i],a);return n[0]=a,n[1]=o,n};for(let e=i;e<a;){let t=e,i=n(e),o=r(e);for(e+=1;e<a&&n(e)===i&&r(e)===o;)e+=1;if(t>p)p=t;else{h=!0;break}if(i<m||!s&&o<i){h=!0;break}m=i;let u=f(i,!1),d=s?u:f(o,!0);for(let n=u;n<=d;n++)c[n]>t&&(c[n]=t),l[n]<e&&(l[n]=e)}if(h)return;for(let e=1;e<l.length;e++)l[e]<l[e-1]&&(l[e]=l[e-1]);let _=!0;for(let e=c.length-1;e>0;e--)_&&c[e]==oc?(c[e]=l[e],_=!1):c[e-1]>c[e]&&(c[e-1]=c[e]);return g}var lc=class{constructor({encoders:e,numVertices:t=void 0,attributes:n=[]}){this.encoders=e,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([e,t])=>n.includes(e)&&t&&!t.constant));let r=[...Cs(e).entries()].filter(([e,t])=>e[1]&&t.length>1).map(([e,t])=>t);this.allocatedVertices=t,this.variableBuilder=new rc(t),this.attributeNames={};for(let[e,t]of Object.entries(this.variableEncoders)){let n=ie(t);if(!n)continue;let i=r.find(t=>t.find(t=>t==e)),a=n.asNumberAccessor(),o=t.scale,{largeHp:s,arrayConstructor:c,discrete:l,numComponents:u}=vs(o,e),d=[0,0],f=l?o.props.domainIndexer:void 0,p=f?e=>f(n(e)):s?e=>bs(a(e),d):a,m=ws(i??e);for(let t of i??[e])this.attributeNames[t]=m;i&&e!=i[0]||this.variableBuilder.addConverter(m,{f:p,numComponents:u,arrayReference:s?d:void 0,targetArrayType:c})}let i=this.variableEncoders.x,a=this.variableEncoders.x2,o=this.encoders.x?.channelDef,s=i?.scale;if(o?.buildIndex&&i&&s&&y(s.type)){let e=this.attributeNames.x;if(!e)throw Error(`Missing x attribute for x indexing.`);let t=a?.scale&&y(a.scale.type)?this.attributeNames.x2??e:e;this.xIndexConfig={domain:[s.domain()[0],s.domain()[1]],xAttributeName:e,x2AttributeName:t}}else this.xIndexConfig=void 0;this.lastOffset=0,this.rangeMap=new oe([],JSON.stringify)}registerBatch(e){let t=this.lastOffset,n=this.variableBuilder.vertexCount,r=n-t;r&&this.rangeMap.set(e,{offset:t,count:r,xIndex:this.createXIndex(t,n)}),this.lastOffset=n}addBatches(e){for(let[t,n]of e)this.addBatch(t,n)}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}createXIndex(e,t){let n=this.xIndexConfig;if(!n)return;let r=e=>{let{data:t,numComponents:n}=this.variableBuilder.arrays[e];return n==2?e=>{let r=e*n;return t[r]*ys+t[r+1]}:e=>t[e*n]},i=r(n.xAttributeName),a=n.x2AttributeName==n.xAttributeName?i:r(n.x2AttributeName);return cc(50,n.domain,i,a,e,t)}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}},uc=class extends lc{constructor({encoders:e,attributes:t,numItems:n}){super({encoders:e,attributes:t,numVertices:n*6}),this.variableBuilder.configure();let r=this.variableBuilder.pushAll;this.pushAllSixTimes=n>500?Function(`pushAll`,`return function unrolledPushAllSixTimes() {
  pushAll(); pushAll(); pushAll(); pushAll(); pushAll(); pushAll();
};`)(r):function(){r(),r(),r(),r(),r(),r()}}addBatch(e,t,n=0,r=t.length){if(!(r<=n)){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.pushAllSixTimes()}this.registerBatch(e)}}},dc=class extends lc{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:r=[-1/0,1/0],numItems:i}){super({encoders:e,attributes:t,numVertices:n==1/0?i*6:void 0}),this.visibleRange=r,this.tessellationThreshold=n||1/0,this.updateSide=this.variableBuilder.createUpdater(`side`,1),this.updatePos=this.variableBuilder.createUpdater(`pos`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();for(let e=0;e<=1;e++)this.updatePos(e/1),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll()}this.registerBatch(e)}},fc=class extends lc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}},pc=class extends lc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}toArrays(){let e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}},mc=class extends lc{constructor({encoders:e,attributes:n,fontMetrics:r,properties:i,numCharacters:a=void 0}){super({encoders:e,attributes:n,numVertices:a*6}),this.metadata=r,this.metrics=r,this.properties=i;let o=e.text.channelDef;this.numberFormat=!x(o)&&`format`in o&&o.format?t(o.format):e=>e,this.updateVertexCoord=this.variableBuilder.createUpdater(`vertexCoord`,2),this.updateTextureCoord=this.variableBuilder.createUpdater(`textureCoord`,2),this.updateWidth=this.variableBuilder.createUpdater(`width`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){let i=this.properties.align||`left`,a=this.properties.logoLetters??!1,o=this.metadata.common.base,c=this.metadata.common.scaleH,l=-5;switch(this.properties.baseline){case`top`:l+=this.metrics.capHeight;break;case`middle`:l+=this.metrics.capHeight/2;break;case`bottom`:l-=this.metrics.descent}let u=this.encoders.text,d=[0,0];this.updateVertexCoord(d);let f=[0,0];this.updateTextureCoord(f);for(let e=n;e<r;e++){let n=t[e],r=this.numberFormat(u(n)),p=s(r)?r:r===null?``:``+r;if(p.length==0)continue;this.variableBuilder.updateFromDatum(n);let m=a?p.length:this.metrics.measureWidth(p);this.updateWidth(m);let h=i==`right`?-m:i==`center`?-m/2:0;if(!a){let e=this.metrics.getCharByCode(p.charCodeAt(0));h-=(e.width-e.xadvance)/o/2}let g,_,v;for(let e=0;e<p.length;e++){let t=this.metrics.getCharByCode(p.charCodeAt(e)),n=a?1:t.xadvance/o;if(t.id==32){h+=n;continue}a?(v=(t.width+10)/t.width,h=-v/2,_=(t.height+10)/t.height,g=-.5-5/t.height):(_=t.height/o,g=-(t.height+t.yoffset+l)/o,v=t.width/o);let r=t.x,i=t.y;d[0]=h,d[1]=g+_,f[0]=r/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g,f[0]=(r+t.width)/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),h+=n}}this.registerBatch(e)}},hc=`#define PI 3.141593

// Finite infinity substitute for pixel distances and spacing, far beyond any viewport.
// Constant infinity can make Firefox/ANGLE emit unsupported uintBitsToFloat calls.
// https://bugzilla.mozilla.org/show_bug.cgi?id=2078276
const highp float INFINITY_SUBSTITUTE = 1e20;

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

vec4 premultiplyColor(vec4 color, float opacity) {
    float alpha = color.a * opacity;
    return vec4(color.rgb * alpha, alpha);
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
`,gc=`uniform highp float uZero;

// Utils ------------

uint getCategorySlot(highp usampler2D domainMap, uint id) {
    uvec2 size = uvec2(textureSize(domainMap, 0));
    if (id >= size.x * size.y) return 0u;
    return texelFetch(domainMap, ivec2(id % size.x, id / size.x), 0).r;
}

vec4 getDiscreteColor(sampler2D s, int index) {
    return texelFetch(s, ivec2(index % textureSize(s, 0).x, 0), 0).rgba;
}

vec4 getInterpolatedColor(sampler2D s, float unitValue) {
    return texture(s, vec2(unitValue, 0.0)).rgba;
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

    bool reverse = range[1] < range[0];
    float start = min(range[0], range[1]);
    float stop = max(range[0], range[1]);
    float rangeSpan = stop - start;

    float n = domainExtent[1] - domainExtent[0];

    // Match the CPU's Vega bandSpace, including padded singleton domains.
    float space = n - paddingInner + paddingOuter * 2.0;
    float step = rangeSpan / (space > 0.0 ? space : 1.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    float bandwidth = step * (1.0 - paddingInner);

    float slot = float(value) - domainExtent[0];
    if (reverse) slot = n - 1.0 - slot;
    return start + slot * step + bandwidth * band;
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
`,_c=`
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

#if defined(CLAMP_X) || defined(CLAMP_Y)
vec2 clampPosition(vec2 pos) {
#ifdef CLAMP_X
    pos.x = clamp(pos.x, 0.0, 1.0);
#endif
#ifdef CLAMP_Y
    SampleFacetPosition facet = getSampleFacetPos();
    pos.y = clamp(pos.y, facet.pos, facet.pos + facet.height);
#endif
    return pos;
}
#else
#define clampPosition(pos) (pos)
#endif
`,vc=`/*
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
`,yc=`in highp vec4 vPickingColor;
`;function bc(e,t,n){let r=t.uniformBlockSpec,i=r.blockSpecs[n],a=t;return i&&i.size%16!=0&&(a={...t,uniformBlockSpec:{...r,blockSpecs:{...r.blockSpecs,[n]:{...i,size:Math.ceil(i.size/16)*16}}}}),Ua(e,a,n)}var xc=.5;function Sc(e){let t=e.unitView.context.textMetrics,n=e.properties;return t.getFont(n.font,n.fontStyle,n.fontWeight)}var Cc=`SAMPLE_FACET_UNIFORM`,wc=`SAMPLE_FACET_TEXTURE`,Tc=`uSelectionTexture_`,Ec={all:0,matching:1,nonmatching:2};function Dc(e,t){return e.replace(/#pragma orderGuard(?:[ \t]*\r?\n){0,2}/,t?t+`
`:``)}var Oc=class{#e=[];#t=!1;constructor(e,t,n){this.mark=e,this._glHelper=t,this._rendererResources=n,this.bufferInfo=void 0,this.bytesPerElement=new Map,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.viewUniformInfo=void 0,this.markUniformInfo=void 0,this.markUniformsAltered=!0,this.selectionTextureOps=[],this.scaleResolutionDisposers=[],this.rangeMap=new kc}get unitView(){return this.mark.unitView}get encoders(){return this.mark.encoders}get encoding(){return this.mark.encoding}get properties(){return this.mark.properties}get font(){return Sc(this.mark)}get opaque(){return!1}get defaultHitTestMode(){return this.mark.defaultHitTestMode}getType(){return this.mark.getType()}getAttributes(){throw Error(`Not implemented.`)}getEncodingAttributes(){return[...this.getAttributes(),...Array.from(this.mark.nonvisualInputs)]}initializeGraphics(){this.#n()}getSampleFacetMode(){if(this.encoders.facetIndex)return wc;if(this.unitView.usesSampleFacetRendering())return Cc}createAndLinkShaders(e,t,n=[]){for(let e of[`x`,`y`])(this.properties.clamp===!0||this.properties.clamp===e)&&n.push(`#define CLAMP_`+e.toUpperCase());let r=this.getEncodingAttributes(),i=this.encoders,a=this.mark.getOrder(),o=this.getSampleFacetMode(),s=!!this.properties.cullByVisibleRange;o&&n.push(`#define ${o}`),s&&n.push(`#define VISIBLE_RANGE_CULLING`);let u=`// view: `+this.unitView.getPathString(),d=[],v=new Set,y=Cs(i),te=e=>{for(let[t,n]of y.entries())if(t[1]&&n.includes(e))return ws(n);return ws(e)},ne=e=>vs(c(e)?void 0:this.unitView.getScaleResolution(e).getScale(),e),S=[],re=_e(i),ie=new Set(re.flatMap(fe));for(let e of a?.params??[])ie.add(e);Array.from(ie).some(e=>{let t=this.unitView.paramRuntime.findValue(e);return g(t)&&Object.keys(t.intervals).some(e=>ne(e).largeHp)})&&(d.push(`bool selectionLeq(uvec2 a, uvec2 b) { return a.x < b.x || (a.x == b.x && a.y <= b.y); }`),d.push(`bool selectionLt(uvec2 a, uvec2 b) { return a.x < b.x || (a.x == b.x && a.y < b.y); }`)),a&&(n.push(`#define CONDITIONAL_ORDER`),S.push(`    // Conditional order pass`),S.push(`    uniform int uOrderMode;`));for(let e of ie){let t=this.unitView.paramRuntime,n=t.getParamRef(e),r=n.get();if(!r)throw Error(`Cannot infer selection type as the parameter "${e}" has no value. Please ensure that the parameter is properly defined!`);let i=ws(`uniqueId`);if(ee(r)){let t=$o+h(e);S.push(`    // Selection parameter`),S.push(`    uniform highp uint ${t};`),this.#e.push(()=>{this.registerMarkUniformValue(t,{expr:e},e=>e.uniqueId??0)}),d.push(`bool ${es}${e}() {\n    return ${$o}${e} != 0u && ${$o}${e} == ${i};\n}`),d.push(`bool ${Q}${e}() {\n    return ${$o}${e} == 0u;\n}`)}else if(_(r)){let a=Tc+h(e);d.push(`// Selection texture\nuniform highp usampler2D ${a};`);let o=this.glHelper,s=o.selectionTextures;this.selectionTextureOps.push(()=>{let t=n.get(),r=s.get(t);if(!r)throw Error(`Bug: no selection texture found for "${e}"!`);J(this.programInfo,{[a]:r})});let c=Tc+e;d.push(`bool ${es}${e}() {\n    return hashContainsTexture(${c}, ${i});\n}`),d.push(`bool ${Q}${e}() {\n    return isEmptyHashTexture(${c});\n}`),o.createSelectionTexture(r),t.watchExpression(e,()=>{let e=n.get();o.createSelectionTexture(e),this.unitView.context.animator.requestRender()})}else if(ce(r)){let t=$o+e+`_categoryCount`;S.push(`    uniform highp uint ${t};`),this.#e.push(()=>this.registerMarkUniformValue(t,{expr:e},e=>e.values.size)),d.push(`bool ${Q}${e}() { return ${t} == 0u; }`)}else if(g(r)){let t=Object.keys(r.intervals);if(t.length==0)throw new Ce(`Interval selection "${e}" has no components.`,this.unitView);let n=[];for(let r of t){let t=$o+h(e)+`_${r}`,{attributeType:i,largeHp:a}=ne(r);S.push(`    // Selection parameter`),S.push(`    uniform highp ${i}[2] ${t};`),this.#e.push(()=>{this.registerMarkUniformValue(t,{expr:e},e=>{let t=e.intervals[r]??[1,0];return a?t.flatMap(e=>bs(e)):t})});let o=t+`[0]`,s=t+`[1]`;n.push(a?`!selectionLeq(${o}, ${s})`:`${o} > ${s}`)}d.push(`bool ${Q}${e}() {\n    return ${n.join(` || `)};\n}`)}else throw new Ce(`Unsupported selection type "${r.type}" for WebGL conditional encoding.`,this.unitView)}let C=new Map,ae=e=>{let{param:t,empty:n}=e;if(e.type===`categories`){let r=e.projections[0].input,i=t+`/`+r,a=C.get(i);if(!a){a=Tc+t+`_category`+C.size,C.set(i,a),d.push(`uniform highp usampler2D ${a};`);let e=this.encoders[r],n=this.unitView.getScaleResolution(e.branches[0].accessor.scaleChannel),o=this.unitView.paramRuntime,s=o.getParamRef(t),c,l=()=>{let e=n.getScale().props.domainIndexer;c=this.glHelper.createIntegerSetTexture(s.get().values.values().map(t=>e(t)),c),this.unitView.context.animator.requestRender()};l(),this.scaleResolutionDisposers.push(o.effect([s,n.getMappingRef()],l),()=>this.gl.deleteTexture(c));let u=a;this.selectionTextureOps.push(()=>J(this.programInfo,{[u]:c}))}return`(hashContainsTexture(${a}, ${te(r)}) || (${n} && ${Q}${t}()))`}if(e.type!==`interval`)return`(${es}${t}() || (${n} && ${Q}${t}()))`;let r=e.projections.map(e=>{let n=$o+t+`_${e.component}`,r=n+`[0]`,i=n+`[1]`,a=te(e.input),o=e.secondaryInput?te(e.secondaryInput):void 0,{largeHp:s}=ne(e.component),c=(e,t)=>s?`selectionLeq(${e}, ${t})`:`${e} <= ${t}`,l=(e,t)=>s?`selectionLt(${e}, ${t})`:`${e} < ${t}`,u=e=>`(${c(r,e)} && ${l(e,i)})`,d=o===void 0?a:s?`(${c(a,o)} ? ${a} : ${o})`:`min(${a}, ${o})`,f=o===void 0?a:s?`(${c(a,o)} ? ${o} : ${a})`:`max(${a}, ${o})`,p=o===void 0?u(a):e.hitTest===`endpoints`?`(${u(a)} || ${u(o)})`:e.hitTest===`encloses`?`(${c(r,d)} && ${c(f,i)})`:`(${l(r,f)} && ${l(d,i)})`;return`(${l(r,i)} && ${p})`}),i=`!${Q}${t}()`;return`((${i} && ${r.join(` && `)}) || (${n} && !${i}))`},oe=(e,t,n,r)=>{let i=t.channelDef;if(x(i)){if(l(i.value)){let{uniformName:t,uniformGlsl:r,accessorGlsl:a,adjuster:o}=os(e,n);d.push(a),S.push(r),this.#e.push(()=>{this.registerMarkUniformValue(t,i.value,o)})}else d.push(as(e,n,i.value).accessorGlsl)}else if(f(i)){let{uniformName:t,uniformGlsl:a,accessorGlsl:o}=cs(e,r,n);S.push(a),d.push(o);let{largeHp:s,discrete:c}=vs(r,e),l=c?r.props.domainIndexer:s?bs:e=>+e;this.#e.push(()=>{this.registerMarkUniformValue(t,i.datum,l)})}else if(m(i)){let t=y.get([i.field,!0]),{attributeGlsl:a,accessorGlsl:o}=ss(e,r,n,t?.includes(e)?t:void 0);v.add(a),d.push(o)}else if(me(i)){let{attributeGlsl:t,accessorGlsl:i}=ss(e,r,n);v.add(t),d.push(i)}else throw new Ce(`Unsupported channel definition: ${JSON.stringify(i)}`,this.unitView)};for(let[e,t]of Object.entries(i)){if(!r.includes(e))continue;let{branches:n,channelDef:i,scale:a}=t;for(let t=0;t<n.length;t++)oe(e,n[t].accessor,t,a);if(!this.mark.nonvisualInputs.has(e)){if(a){let t=de(i),n=t&&t.resolutionChannel||e,r=he(n)?this.unitView.getScaleResolution(n):null,{glsl:o,domainUniform:s,domainUniformName:c,rangeUniform:l,rangeUniformName:u}=ls(e,a,i);d.push(o),S.push(s),S.push(l),l&&this.#e.push(()=>{let t=this.createMarkUniformSetter(u),n=()=>t(Es(a,e));this.registerScaleResolutionListener(r,`range`,n),n()}),s&&this.#e.push(()=>{let e=this.createMarkUniformSetter(c),t=()=>{let t;b(a.type)?(t=`viewport`in a?a.viewport()?.interval:void 0,t??=[0,r.getDomainRef().get().length]):t=w(a.type)?ns(a):a.domain(),e(ye(a.type)?Ss(t):t)};this.registerScaleResolutionListener(r,`domain`,t),this.registerScaleResolutionListener(r,`viewport`,t),t()})}d.push(us(e,n,ae))}}let se=ue(re).map(e=>ds(e,ae));if(d.push(`bool isDatumSelected() {
`+(se.length>0?`    return ${se.join(` || `)};`:`    return false;`)+`
}`),a){let e=ds(a.predicate.selection,ae);d.push(`bool isOrderMatch() {
    return ${e};\n}`)}let le=`precision highp float;
precision highp int;`,pe=e=>e.replace(`#pragma markUniforms`,S.join(`
`)),T=[];o&&(this.properties.clamp||[`rect`,`rule`,`tick`].includes(this.mark.getType()))&&T.push(`getSampleFacetPos().height == 0.0`),a&&T.push(`(uOrderMode != 0 && (((uOrderMode & 3) == 1) != isOrderMatch()))`);for(let e of[`x`,`y`]){let t=i[e]?.scale;t&&p(t.props)&&T.push(`!gapFits_${e}(${qo}${e})`)}n=n.map(pe),e=pe(e),t=pe(t),e=Dc(e,T.length?`    if (${T.join(` || `)}) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }`:``);let ge=i.y?.scale&&p(i.y.scale.props),ve=[le,u,...n,hc,gc,[...v].join(`
`),...ge?[_c]:[],...d,...ge?[]:[_c],vc,e],be=[le,u,...n,hc,yc,t],xe=this.gl;this.programStatus=Ls(xe,this.glHelper.compileShader(xe.VERTEX_SHADER,ve),this.glHelper.compileShader(xe.FRAGMENT_SHADER,be))}finalizeGraphicsInitialization(){if(this.#n(),this.programInfo)return;if(!this.programStatus)throw Error(`No program status found! `+this.unitView.getPathString());let e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);let t=Error(`Cannot create shader program: `+e.message);throw t.view=this.unitView,t}this.programInfo=Xa(this.gl,this.programStatus.program),delete this.programStatus,this.viewUniformInfo=bc(this.gl,this.programInfo,`View`),this.markUniformInfo=bc(this.gl,this.programInfo,`Mark`),this.gl.useProgram(this.programInfo.program),J(this.programInfo,{uSampleFacet:[0,1],uZero:0});for(let e of this.#e)e();this.#e=void 0}createMarkUniformSetter(e){let t=this.markUniformInfo.setters[e];if(!t)throw Error(`Uniform "${e}" not found int the Mark block!`);return e=>{t(e),this.markUniformsAltered=!0,this.unitView.context.animator.requestRender()}}registerMarkUniformValue(e,t,n=e=>e){let r=this.createMarkUniformSetter(e),i=n=>{if(n==null)throw Error(`Trying to set null/undefined value for uniform: ${e}${l(t)?`Expr: ${t.expr}`:``}`);r(n)};if(l(t)){let e,r=()=>i(n(e(null)));e=this.unitView.paramRuntime.watchExpression(t,r),r()}else i(n(t))}deleteGraphicsData(){let e=this.gl;this.vertexArrayInfo&&=(this.gl.bindVertexArray(null),e.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject),void 0),this.bufferInfo&&=(Object.values(this.bufferInfo.attribs).forEach(e=>this.gl.deleteBuffer(e.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),void 0)}registerScaleResolutionListener(e,t,n){e.addEventListener(t,n),this.scaleResolutionDisposers.push(()=>e.removeEventListener(t,n))}dispose(){if(this.#t)return;this.#t=!0;for(let e of this.scaleResolutionDisposers)e();this.scaleResolutionDisposers.length=0,this.deleteGraphicsData(),this.viewUniformInfo&&=(this.gl.deleteBuffer(this.viewUniformInfo.buffer),void 0),this.markUniformInfo&&=(this.gl.deleteBuffer(this.markUniformInfo.buffer),void 0);let e=this.programInfo?.program??this.programStatus?.program;e&&this.gl.deleteProgram(e),this.programInfo=void 0,this.programStatus=void 0}#n(){if(this.#t)throw Error(`WebGL mark resources have been disposed.`)}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.allocatedVertices<=this.bufferInfo.allocatedVertices){this.bufferInfo.numElements=e.vertexCount;for(let[t,n]of Object.entries(e.arrays))n.data&&St(this.gl,this.bufferInfo.attribs[t],n.data,0)}else{this.deleteGraphicsData(),this.bufferInfo={attribs:xt(this.gl,e.arrays),numElements:e.vertexCount,allocatedVertices:e.allocatedVertices};for(let[t,n]of Object.entries(e.arrays))this.bytesPerElement.set(t,n.data.BYTES_PER_ELEMENT)}}get glHelper(){return this._glHelper}get rendererResources(){if(!this._rendererResources)throw Error(`WebGL renderer resources are not available.`);return this._rendererResources}get gl(){return this.glHelper.gl}isReady(){return!!(this.bufferInfo&&this.programInfo)}isPickingParticipant(){return this.mark.isPickingParticipant()}getDebugState(){return{markUniformsAltered:this.markUniformsAltered,vertexCount:this.bufferInfo?.numElements,allocatedVertices:this.bufferInfo?.allocatedVertices,rangeCount:this.rangeMap.size}}bindOrSetMarkUniformBlock(){this.markUniformsAltered?(Ga(this.gl,this.programInfo,this.markUniformInfo),this.markUniformsAltered=!1):Wa(this.gl,this.programInfo,this.markUniformInfo)}setOrderPass(e,t=!1){Ka(this.markUniformInfo,{uOrderMode:Ec[e]|(t?4:0)}),this.markUniformsAltered=!0}prepareRender(e){let t=this.glHelper,n=this.gl,r=[];r.push(()=>{this.vertexArrayInfo||=Ao(this.gl,this.programInfo,this.bufferInfo),n.useProgram(this.programInfo.program)});for(let[e,n]of Object.entries(this.encoders)){if(n.scale&&b(n.scale.type)){let t=de(n.channelDef).resolutionChannel??e;if(!he(t))throw Error(`Categorical encoding requires a scale channel.`);let i=this.unitView.getScaleResolution(t);r.push(()=>J(this.programInfo,{[Qo+e]:this.rendererResources.getCategoricalTexture(i)}))}if((e===`x`||e===`y`)&&n.scale&&p(n.scale.props)){let t=this.unitView.getScaleResolution(e);r.push(()=>{let n=t.getScale(),r=n.type===`band`||n.type===`point`,i=`viewport`in n?n.viewport():null,a=r?i?.interval??[0,t.getDomainRef().get().length]:n.domain().map(Number),o=n.gapPositions(),s=`gapDomain`in n?n.gapDomain():i?.gapRanks;J(this.programInfo,{[`uGapCuts_`+e]:this.rendererResources.getGapTexture(t),[`uGapCount_`+e]:o.length,[`uGapGeometry_`+e]:[n.gapWidth(),s?.[0]??ge(o,a[0]),s?.[1]??ge(o,a[1],!0),+!!s]})})}let i=t.rangeTextures.get(n.scale);i&&r.push(()=>J(this.programInfo,{[Zo+e]:i}))}r.push(...this.selectionTextureOps),this.getSampleFacetMode()==wc&&r.push(()=>{let t=e.placement?.source;if(!t)throw Error(`No placement source available.`);J(this.programInfo,{uSampleFacetTexture:this.glHelper.getPlacementTexture(t)})});let i=(e.picking??!1)&&this.isPickingParticipant();return r.push(()=>Ka(this.viewUniformInfo,{uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:i})),this.opaque||e.picking?r.push(()=>n.disable(n.BLEND)):r.push(()=>n.enable(n.BLEND)),r}prepareSampleFacetRendering(e){let t=e.sampleFacetRenderingOptions,n=this.programInfo.uniformSetters.uSampleFacet;if(t&&n){let e=t.pixelToUnit,r=t.locSize.location*e,i=t.locSize.size*e;if(r>1||r+i<0)return!1;this.gl.uniform2f(n.location,r,i)}return!0}render(e){}createRenderCallback(e,t){if(!this.bufferInfo)return()=>void 0;let n=this,r=t.orderPass,i=r?(i,a)=>{n.setOrderPass(r,t.secondOrderPass),n.bindOrSetMarkUniformBlock(),e(i,a)}:e,a,o=this.unitView.getScaleResolution(`x`)?.getScale(),s=o&&y(o.type),c=[`index`,`locus`].includes(o?.type)?-1:0,l=[0,0];a=e=>{if(s&&e.xIndex){let t=o.domain(),n=Math.abs(t[1]-t[0]),r=e.xIndex(t[0]+c-n,t[1]+n,l),a=r[0],s=r[1]-a;s>0&&i(a,s)}else i(e.offset,e.count)};let u=this.rangeMap.get(void 0),d=this.rangeMap.get(t.facetId);return function(){let e=u.count?u:d;e.count&&(!t.sampleFacetRenderingOptions||n.prepareSampleFacetRendering(t))&&a(e)}}setViewport(e,t,n,r,i,a=xc){n=n.flatten();let o=this.gl,s=this.properties,c=a,l=a,u,d=Ac(e,n,s.clip===`never`?void 0:r,!1),f=d.coords;if(d.requiresScissor){if(!f.isDefined())return!1;let r=[f.x,e.height-f.y2,f.width,f.height].map(e=>e*t),i=r.map(e=>Math.floor(e)),a=r[0]-i[0],s=r[1]-i[1];o.viewport(...i),o.scissor(...i),o.enable(o.SCISSOR_TEST),u={uViewOffset:[(n.x-f.x+c+a/t)/f.width,(f.y2-n.y2-l+s/t)/f.height],uViewScale:[n.width/f.width,n.height/f.height]}}else{if(!n.isDefined())return!1;o.viewport(0,0,Math.round(e.width*t),Math.round(e.height*t)),o.disable(o.SCISSOR_TEST),u={uViewOffset:[(n.x+c)/e.width,(e.height-n.y-l-n.height)/e.height],uViewScale:[n.width/e.width,n.height/e.height]}}return Ka(this.viewUniformInfo,{...u,uViewportSize:[n.width,n.height],uLogicalVisibleRect:jc(n,i),uCullByVisibleRange:[+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`x`),+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`y`)],uDevicePixelRatio:t}),Ga(this.gl,this.programInfo,this.viewUniformInfo),!0}},kc=class extends oe{constructor(){super([],JSON.stringify)}get(e){let t=super.get(e);return t===void 0&&(t={offset:0,count:0,xIndex:void 0},super.set(e,t)),t}migrateEntries(e){for(let[t,n]of this.entries())e.has(t)||(n.offset=0,n.count=0,n.xIndex=void 0);for(let[t,n]of e.entries())Object.assign(this.get(t),n)}};function Ac(e,t,n,r=!0){if(!n||!n.clipX&&!n.clipY)return{requiresScissor:!1,coords:t};let i=r?t.intersect(n.rect):n.rect;return n.clipX||(i=i.modify({x:0,width:e.width})),n.clipY||(i=i.modify({y:0,height:e.height})),{requiresScissor:!0,coords:i.flatten()}}function jc(e,t){let n=t?.clipX?(t.rect.x-e.x)/e.width:0,r=t?.clipX?(t.rect.x2-e.x)/e.width:1;return[n,t?.clipY?(e.y2-t.rect.y2)/e.height:0,r,t?.clipY?(e.y2-t.rect.y)/e.height:1]}var Mc=Math.PI/180,Nc=1e-6,Pc=1,Fc=90,Ic=[`triangle`,`open`],Lc=[`inside`,`outside`],Rc=class extends Oc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`,`size`,`direction`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders($s,ec,[tc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uHeadSlope`,e.headAngle,Bc),this.registerMarkUniformValue(`uHeadNotchSlope`,e.headNotchAngle,Bc),this.registerMarkUniformValue(`uHeadShape`,e.headShape,e=>zc(Ic,e)),this.registerMarkUniformValue(`uMinSize`,e.minSize),this.registerMarkUniformValue(`uHeadWidth`,e.headWidth),this.registerMarkUniformValue(`uStartNotch`,e.startNotch),this.registerMarkUniformValue(`uMinStemLength`,e.minStemLength),this.registerMarkUniformValue(`uHeadSpacing`,e.headSpacing??-1,Vc),this.registerMarkUniformValue(`uStem`,e.stem),this.registerMarkUniformValue(`uHeadPlacement`,e.headPlacement,e=>zc(Lc,e))}updateGraphicsData(e){let t=e.getItemCount(),n=new dc({encoders:this.encoders,attributes:this.getEncodingAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{$a(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}};function zc(e,t){let n=e.indexOf(t);if(n<0)throw Error(`Unsupported arrow mark value: ${t}`);return n}function Bc(e){return Math.max(Math.tan(Math.min(Math.max(e,Pc),Fc)*Mc),Nc)}function Vc(e){return e??-1}var Hc=`flat out vec4 vColor;
flat out vec4 vOrthogonalEndpoints;
flat out int vOrthogonalPart;
out vec2 vOrthogonalPosition;

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

    vec2 a = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    )) * uViewportSize;
    vec2 b = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    )) * uViewportSize;

    if (uShape == SHAPE_ORTHOGONAL && all(equal(a, b))) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }

#if defined(CLAMP_X) || defined(CLAMP_Y)
    if (all(equal(a, b))) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }
#endif

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
    vec2 normal;
    if (uShape == SHAPE_ORTHOGONAL) {
        p = a;
        normal = vec2(0.0);
    } else {
        // de Casteljau evaluation keeps the cubic stable for long chords.
        vec2 q1 = mix(p1, p2, t);
        vec2 q2 = mix(p2, p3, t);
        vec2 q3 = mix(p3, p4, t);
        vec2 r1 = mix(q1, q2, t);
        vec2 r2 = mix(q2, q3, t);
        p = mix(r1, r2, t);
        vec2 tangent = normalize(3.0 * (r2 - r1));
        normal = vec2(-tangent.y, tangent.x);
    }

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

    vOrthogonalEndpoints = vec4(a, b);
    vOrthogonalPart = 0;
    if (uShape == SHAPE_ORTHOGONAL) {
        // Three small quads, joined by degenerate triangles, keep fill work
        // proportional to stroke area even for long, widely separated legs.
        vOrthogonalPart = (gl_VertexID + 1) / 6;
        int corner = clamp((gl_VertexID + 1) % 6 - 1, 0, 3);
        float width = uPickingEnabled ? max(size, uMinPickingSize) : size;
        vec4 bounds = orthogonalBounds(vOrthogonalPart, a, b, width * 0.5);
        if (all(greaterThan(bounds.zw, bounds.xy))) {
            bounds += vec4(-pixelSize, -pixelSize, pixelSize, pixelSize);
        }
        p = mix(bounds.xy, bounds.zw, vec2(corner % 2, corner / 2));
    } else {
        p += normal * vNormalLengthInPixels;
    }
    vOrthogonalPosition = p;

    gl_Position = pixelsToNdc(p);

    vec4 color = getScaled_color();

    vColor = premultiplyColor(color, opacity);

    vGamma = getGammaForColor(color.rgb);

    vSize = uShape == SHAPE_ORTHOGONAL
        ? (uPickingEnabled ? max(size, uMinPickingSize) : size) : paddedSize;

    setupPicking();
}
`,Uc=`flat in vec4 vColor;
flat in vec4 vOrthogonalEndpoints;
flat in int vOrthogonalPart;
in vec2 vOrthogonalPosition;
flat in float vSize;
in float vNormalLengthInPixels;
flat in float vGamma;
in float vFadeDistance;

out lowp vec4 fragColor;

void main(void) {
    float dpr = uDevicePixelRatio;

    float distance = abs(vNormalLengthInPixels);
    float opacity = clamp(((vSize / 2.0 - distance) * dpr), 0.0, 1.0);

    if (uShape == SHAPE_ORTHOGONAL) {
        float nearest = 1e20;
        float coverageDistance = 1e20;
        int owner = 0;
        for (int part = 0; part < 4; part++) {
            float d = orthogonalDistance(vOrthogonalPosition,
                orthogonalBounds(part, vOrthogonalEndpoints.xy, vOrthogonalEndpoints.zw, vSize * 0.5));
            if (part < 3 && d < nearest) { nearest = d; owner = part; }
            coverageDistance = min(coverageDistance, d);
        }
        // Only one quad shades a pixel, including where short legs overlap.
        if (owner != vOrthogonalPart) discard;
        opacity = clamp((uPickingEnabled ? 0.0 : 0.5) - coverageDistance * dpr, 0.0, 1.0);
    }
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
`,Wc=`layout(std140) uniform Mark {
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

const int SHAPE_ORTHOGONAL = 4;

// Butt rectangles, the outer miter quadrant, and an interior rectangle for
// continuous antialiasing across their shared boundaries. The interior is
// already covered by the first three and needs no separate draw geometry.
vec4 orthogonalBounds(int part, vec2 a, vec2 b, float h) {
    vec2 c = uOrient == 1 ? vec2(a.x, b.y) : vec2(b.x, a.y);
    vec2 first = c - a;
    vec2 second = b - c;
    bool hasFirst = any(notEqual(first, vec2(0.0)));
    bool hasSecond = any(notEqual(second, vec2(0.0)));
    if (part < 2) {
        vec2 start = part == 0 ? a : c;
        vec2 end = part == 0 ? c : b;
        if (all(equal(start, end))) return vec4(c, c);
        vec2 pad = vec2(start.x == end.x ? h : 0.0, start.y == end.y ? h : 0.0);
        return vec4(min(start, end) - pad, max(start, end) + pad);
    }
    if (!hasFirst || !hasSecond) return vec4(c, c);
    vec2 t1 = sign(first);
    vec2 t2 = sign(second);
    if (part == 2) {
        vec2 outer = c + (t1 - t2) * h;
        return vec4(min(c, outer), max(c, outer));
    }
    float l1 = abs(first.x) + abs(first.y);
    float l2 = abs(second.x) + abs(second.y);
    vec2 low = c - t1 * min(l1, h) - t2 * h;
    vec2 high = c + t1 * h + t2 * min(l2, h);
    return vec4(min(low, high), max(low, high));
}

float orthogonalDistance(vec2 p, vec4 bounds) {
    if (any(lessThanEqual(bounds.zw, bounds.xy))) return 1e20;
    vec2 distance = max(bounds.xy - p, p - bounds.zw);
    return max(distance.x, distance.y);
}
`,Gc=[`arc`,`dome`,`diagonal`,`line`,`orthogonal`],Kc=[`vertical`,`horizontal`],qc=class extends Oc{constructor(e,t,n){super(e,t,n),this._baseInstanceExt=void 0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics(),this._baseInstanceExt=this.gl.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),this.createAndLinkShaders(Hc,Uc,[Wc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uArcFadingDistance`,e.arcFadingDistance,e=>e||[0,0]),this.registerMarkUniformValue(`uArcHeightFactor`,e.arcHeightFactor),this.registerMarkUniformValue(`uMinArcHeight`,e.minArcHeight),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize),this.registerMarkUniformValue(`uShape`,e.linkShape,e=>Gc.indexOf(e)),this.registerMarkUniformValue(`uOrient`,e.orient,e=>Kc.indexOf(e)),this.registerMarkUniformValue(`uClampApex`,e.clampApex,e=>!!e),this.registerMarkUniformValue(`uMaxChordLength`,e.maxChordLength),this.registerMarkUniformValue(`uSegmentBreaks`,e.segments,e=>e),this.registerMarkUniformValue(`uNoFadingOnSecondPass`,e.noFadingOnSecondPass,e=>!!e)}updateGraphicsData(e){let t=e.getItemCount(),n=new pc({encoders:this.encoders,attributes:this.getEncodingAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.arrays=Object.fromEntries(Object.entries(r.arrays).map(([e,t])=>[e,{...t,data:void 0}])),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),this._baseInstanceExt?t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)):t.push(()=>this.gl.bindVertexArray(null)),t}render(e){let t=this.gl,n=()=>this.markUniformInfo.uniforms.uShape[0]==Gc.indexOf(`orthogonal`)?16:(this.markUniformInfo.uniforms.uSegmentBreaks[0]+1)*2;return this._baseInstanceExt?this.createRenderCallback((e,r)=>{this._baseInstanceExt.drawArraysInstancedBaseInstanceWEBGL(t.TRIANGLE_STRIP,0,n(),r,e)},e):this.createRenderCallback((e,r)=>{for(let t of Object.entries(this.bufferInfo.attribs)){let[n,r]=t;r.buffer&&r.numComponents&&r.divisor&&(r.offset=e*this.arrays[n].numComponents*this.bytesPerElement.get(n))}Y(t,this.programInfo,this.bufferInfo),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,n(),r)},e)}},Jc=`flat out float vRadius;
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
    vec2 pos = vec2(getScaled_x(), getScaled_y());
#if defined(CLAMP_X) || defined(CLAMP_Y)
    // Positional aliases retain their pixel size in a clamped sample facet.
    vec2 placed = applySampleFacet(pos) + getDxDy();
#else
    vec2 placed = applySampleFacet(pos + getDxDy());
#endif
    vec2 facetedPos = clampPosition(applyOffset(
        placed,
        vec2(getScaled_xOffset(), getScaled_yOffset())
    ));

#ifdef VISIBLE_RANGE_CULLING
    if (isOutsideVisibleRange(facetedPos)) {
        gl_PointSize = 0.0;
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }
#endif

    gl_Position = unitToNdc(facetedPos);

    float strokeWidth = getScaled_strokeWidth();
    vec4 strokeColor = getScaled_stroke();
    float strokeOpacity = getScaled_strokeOpacity() * strokeColor.a;
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

    vFillColor = premultiplyColor(getScaled_fill(), fillOpa);
    vStrokeColor = premultiplyColor(vec4(strokeColor.rgb, 1.0), strokeOpa);

    setupPicking();
}
`,Yc=`const lowp vec4 white = vec4(1.0);
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
            : mix(vFillColor, white * vFillColor.a, -d * uGradientStrength / vRadius);

        float fillCoverage = distanceToRatio(-d);
        fragColor = fillColor * fillCoverage;
        if (!lineShape && vHalfStrokeWidth > 0.0) {
            float innerWidth = uInwardStroke ? 2.0 * vHalfStrokeWidth : vHalfStrokeWidth;
            float innerCoverage = distanceToRatio(-d - innerWidth);
            float outerCoverage = uInwardStroke ? fillCoverage : distanceToRatio(vHalfStrokeWidth - d);
            fragColor = innerCoverage * fillColor
                + (fillCoverage - innerCoverage) * (vStrokeColor + (1.0 - vStrokeColor.a) * fillColor)
                + (outerCoverage - fillCoverage) * vStrokeColor;
        }

	} else if (d - (lineShape ? 0.0 : vHalfStrokeWidth) <= 0.0) {
        fragColor = vPickingColor;

	} else {
		discard;
    }
}
`,Xc=`layout(std140) uniform Mark {
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
`,Zc=class extends Oc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`y`,`xOffset`,`yOffset`,`size`,`semanticScore`,`shape`,`strokeWidth`,`dx`,`dy`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(Jc,Yc,[Xc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uInwardStroke`,e.inwardStroke,e=>!!e),this.registerMarkUniformValue(`uGradientStrength`,e.fillGradientStrength),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize)}updateGraphicsData(e){let t=e.getItemCount(),n=new fc({encoders:this.encoders,attributes:this.getEncodingAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}#e(){let e=2**(this.properties.geometricZoomBound||0);return Math.min(1,this.unitView.getZoomLevel()/e)**(1/3)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{Ka(this.markUniformInfo,{uScaleFactor:this.#e(),uSemanticThreshold:this.mark.getSemanticThreshold()}),this.markUniformsAltered=!0}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{n&&$a(t,this.vertexArrayInfo,t.POINTS,n,e)},e)}},Qc=`flat out lowp vec4 vFillColor;
flat out float vOpacityFactor;
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

    vec2 pos1 = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    ));
    vec2 pos2 = clampPosition(applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    ));

    sort(pos1.x, pos2.x);
    sort(pos1.y, pos2.y);

    // Preserve ordinary rect overscan to prevent precision artifacts.
    pos1.x = clamp(pos1.x, -1.0, 2.0);
    pos2.x = clamp(pos2.x, -1.0, 2.0);

    vec2 size = pos2 - pos1;

    // Unclamped zero-sized rectangles remain eligible for minimum-size expansion.
    bool collapsed = false;
#ifdef CLAMP_X
    collapsed = size.x == 0.0;
#endif
#ifdef CLAMP_Y
    collapsed = collapsed || size.y == 0.0;
#endif
    if (collapsed) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }

    vec2 pos = pos1 + frac * size;

    // Clamp to minimum size, optionally compensate with opacity
    float opaFactor = uViewOpacity * max(uMinOpacity,
        clampMinSize(pos.x, frac.x, size.x, normalizedMinSize.x) *
        clampMinSize(pos.y, frac.y, size.y, normalizedMinSize.y));

    vOpacityFactor = opaFactor;
    size = max(size, normalizedMinSize);

#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
    // Add an extra pixel to the stroke width to accommodate edge antialiasing
    float aaPadding = 1.0 / uDevicePixelRatio;

    // TODO: Only expand to the offset direction. Now high offsets result in
    // a large expansion in all directions.
    float shadowPadding = uShadowBlur + max(abs(uShadowOffsetX), abs(uShadowOffsetY));

    float strokeWidth = getScaled_strokeWidth();
    float strokeOpacity = getScaled_strokeOpacity();

    vec2 centeredFrac = frac - 0.5;
    vec2 expand = centeredFrac * (strokeWidth + aaPadding + shadowPadding * 2.0) / uViewportSize;
    pos += expand;

    vec2 sizeInPixels = size * uViewportSize;
    vPosInPixels = (centeredFrac + expand / size) * sizeInPixels;

    vHalfSizeInPixels = sizeInPixels / 2.0;

    vCornerRadii = min(cornerRadii, min(vHalfSizeInPixels.x, vHalfSizeInPixels.y));
    vHalfStrokeWidth = strokeWidth / 2.0;
    vStrokeColor = premultiplyColor(getScaled_stroke(), strokeOpacity);
#endif

    gl_Position = unitToNdc(pos);

    float fillOpacity = getScaled_fillOpacity();
    vFillColor = premultiplyColor(getScaled_fill(), fillOpacity);

    setupPicking();
}
`,$c=`#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
in vec2 vPosInPixels;
#endif

flat in vec2 vHalfSizeInPixels;

flat in lowp vec4 vFillColor;
flat in float vOpacityFactor;
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
    return INFINITY_SUBSTITUTE;
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
    backgroundColor = premultiplyColor(uShadowColor, shadow);
#endif

    // Hatches change the stroke band, not the nominal fill beneath it.
    float fillDistance = d;
    if (vHalfStrokeWidth > 0.0 && uHatchPattern > 0) {
        d = max(d, -pattern());
    }

    float cf = distanceToRatio(-fillDistance);
    vec4 paint = cf * vFillColor;
    if (vHalfStrokeWidth > 0.0) {
        float ci = distanceToRatio(-d - vHalfStrokeWidth);
        float co = distanceToRatio(-fillDistance + vHalfStrokeWidth);
        paint = ci * vFillColor
            + (cf - ci) * (vStrokeColor + (1.0 - vStrokeColor.a) * vFillColor)
            + (co - cf) * vStrokeColor;
    }
    paint *= vOpacityFactor;
    fragColor = paint + (1.0 - paint.a) * backgroundColor;

    if (uPickingEnabled) {
        if (d < vHalfStrokeWidth) {
            fragColor = vPickingColor;
        }
    } else if (fragColor.a == 0.0) {
        discard;
    }
#else
    // The trivial, non-decorated case
    fragColor = vFillColor * vOpacityFactor;
    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
#endif
}
`,el=`layout(std140) uniform Mark {
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

    uniform vec4 uShadowColor;
    uniform float uShadowOpacity;
    uniform float uShadowBlur;
    uniform float uShadowOffsetX;
    uniform float uShadowOffsetY;

#pragma markUniforms
};
`,tl=[`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`],nl=class extends Oc{get opaque(){return Se(this,`opaque`,()=>!this.#e()&&!this.#t()&&!this.properties.shadowOpacity&&x(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`]}#e(){let e=this.properties;return e.cornerRadius||e.cornerRadiusBottomLeft||e.cornerRadiusBottomRight||e.cornerRadiusTopLeft||e.cornerRadiusTopRight}#t(){let e=this.encoding.strokeWidth;return!(x(e)&&!e.value)||`condition`in e}initializeGraphics(){super.initializeGraphics();let e=[];this.#e()&&e.push(`ROUNDED_CORNERS`),this.#t()&&e.push(`STROKED`),this.properties.shadowOpacity&&e.push(`SHADOW`),this.createAndLinkShaders(Qc,$c,[el,...e.map(e=>`#define `+e)])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinWidth`,e.minWidth),this.registerMarkUniformValue(`uMinHeight`,e.minHeight),this.registerMarkUniformValue(`uMinOpacity`,e.minOpacity),this.registerMarkUniformValue(`uCornerRadiusTopRight`,e.cornerRadiusTopRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomRight`,e.cornerRadiusBottomRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusTopLeft`,e.cornerRadiusTopLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomLeft`,e.cornerRadiusBottomLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uHatchPattern`,e.hatch,e=>Math.max(0,tl.indexOf(e??`none`))),this.registerMarkUniformValue(`uShadowBlur`,e.shadowBlur??0),this.registerMarkUniformValue(`uShadowOpacity`,e.shadowOpacity??0),this.registerMarkUniformValue(`uShadowOffsetX`,e.shadowOffsetX??0),this.registerMarkUniformValue(`uShadowOffsetY`,e.shadowOffsetY??0),this.registerMarkUniformValue(`uShadowColor`,e.shadowColor??`black`,Ae)}updateGraphicsData(e){let t=e.getItemCount(),n=new uc({encoders:this.encoders,attributes:this.getEncodingAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{$a(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}},rl=`// Line caps
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
flat out float vBodyFactor;
#ifdef RULE_STROKE
flat out vec4 vStroke;
flat out float vBorderWidth;
flat out float vPaintOpacity;
flat out float vNominalSize;
flat out float vSpan;
#endif

/** The distance from the line center to the direction of normal in pixels */
out float vNormalLengthInPixels;

/** Distances from the line endings. Used for rendering the round caps and dashes */
out highp vec2 vPosInPixels;

// Intersect the segment with a slab, preserving its direction. Centering the
// interpolation avoids subtracting two large positions at high zoom.
bool clipRuleAxis(inout vec2 a, inout vec2 b, int axis, vec2 bounds) {
    float delta = b[axis] - a[axis];
    if (delta == 0.0) {
        return a[axis] >= bounds.x && a[axis] <= bounds.y;
    }
    if (max(a[axis], b[axis]) < bounds.x || min(a[axis], b[axis]) > bounds.y) {
        return false;
    }
    vec2 center = (a + b) * 0.5;
    vec2 direction = (b - a) / delta;
    if (a[axis] < bounds.x || a[axis] > bounds.y) {
        float edge = clamp(a[axis], bounds.x, bounds.y);
        a = center + direction * (edge - center[axis]);
        a[axis] = edge;
    }
    if (b[axis] < bounds.x || b[axis] > bounds.y) {
        float edge = clamp(b[axis], bounds.x, bounds.y);
        b = center + direction * (edge - center[axis]);
        b[axis] = edge;
    }
    return true;
}

void main(void) {
#pragma orderGuard

    float pixelSize = 1.0 / uDevicePixelRatio;

    // Stroke width in pixels
    float size = getScaled_size();
    float nominalSize = size;
    float opacity = getScaled_opacity() * uViewOpacity;
    float border = 0.0;
#ifdef RULE_STROKE
    vec4 stroke = getScaled_stroke();
    if (stroke.a * getScaled_strokeOpacity() > 0.0) {
        border = max(0.0, getScaled_strokeWidth());
    }
    if (size <= 0.0) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }
#endif
    float outset = 0.0;
#ifdef RULE_STROKE
    outset = border * float(uStrokeAlign) * 0.5;
#endif
    float bodyFactor = min(1.0, size / pixelSize);
    size = max(size, pixelSize);
    // Minimum raster width must not elongate the nominal square caps.
    float capSize = uStrokeCap == SQUARE ? nominalSize : size;

    vec2 a = applyOffset(
        applySampleFacet(vec2(getScaled_x(), getScaled_y())),
        vec2(getScaled_xOffset(), getScaled_yOffset())
    );
    vec2 b = applyOffset(
        applySampleFacet(vec2(getScaled_x2(), getScaled_y2())),
        vec2(getScaled_x2Offset(), getScaled_y2Offset())
    );

    SampleFacetPosition facet = getSampleFacetPos();
    // Use the output viewport so clip:false can draw beyond the child view.
    vec2 lower = -uViewOffset / uViewScale;
    vec2 upper = (vec2(1.0) - uViewOffset) / uViewScale;
    // Keep artificial caps outside the viewport, including thick strokes.
    vec2 margin = max(upper - lower,
        vec2(size + 2.0 * outset + uMinLength + pixelSize) / uViewportSize);
    vec2 xBounds = vec2(lower.x - margin.x, upper.x + margin.x);
    vec2 yBounds = vec2(lower.y - margin.y, upper.y + margin.y);
#ifdef CLAMP_X
    xBounds = vec2(0.0, 1.0);
#endif
#ifdef CLAMP_Y
    yBounds = vec2(facet.pos, facet.pos + facet.height);
#endif
    if (!clipRuleAxis(a, b, 0, xBounds) || !clipRuleAxis(a, b, 1, yBounds) ||
        all(equal(a, b))) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }

    vec2 tangent = b - a;

    float offset = 0.0;
    float relativeDiff = 0.0;
    if (uMinLength > 0.0 || uStrokeCap != BUTT || border > 0.0) {
        float len = length(tangent * uViewportSize);

        // Elongate to reach the minimum length.
        // The length difference in pixels
        float diff = max(0.0, uMinLength - len);

        // Add line caps
        if (uStrokeCap != BUTT) {
            diff += capSize;
        }

        if (border > 0.0) diff += 2.0 * outset + pixelSize;
        relativeDiff = diff / len;
        offset = relativeDiff * (pos - 0.5);
    }

    // Apply caps and minimum length by spreading the vertices along the tangent
    vec2 p = pos < 1.0
        ? a + tangent * (pos + offset)
        : b + tangent * offset;

    // Add an extra pixel to stroke width to accommodate edge antialiasing
    float aaPadding = pixelSize + 2.0 * outset;

    // Extrude
    vec2 normal = normalize(vec2(-tangent.y, tangent.x) / uViewportSize);
    p += normal * side * (size + aaPadding) / uViewportSize;

    gl_Position = unitToNdc(p);

#ifdef RULE_STROKE
    vColor = premultiplyColor(getScaled_fill(), getScaled_fillOpacity());
    vStroke = premultiplyColor(stroke, getScaled_strokeOpacity());
    vBorderWidth = border;
    vPaintOpacity = opacity;
    vNominalSize = nominalSize;
    vSpan = max(length(tangent * uViewportSize), uMinLength);
#else
    vColor = premultiplyColor(getScaled_fill(), opacity);
#endif
    vBodyFactor = bodyFactor;
    vSize = size;
    vNormalLengthInPixels = side * (size + aaPadding);

    vPosInPixels = vec2(pos, (1.0 - pos)) * (1.0 + relativeDiff) * length(tangent * uViewportSize) -
        vec2((uStrokeCap != BUTT ? capSize / 2.0 : 0.0) + (border > 0.0 ? outset + 0.5 * pixelSize : 0.0));
    
    setupPicking();
}
`,il=`#ifdef RULE_STROKE
// Dash phase and interval endpoints use logical-pixel coordinates along long rules.
precision highp float;
#endif

// Line ending
const int BUTT = 0;
const int SQUARE = 1;
const int ROUND = 2;

uniform highp sampler2D uDashTexture;

flat in vec4 vColor;
flat in float vSize;
flat in float vBodyFactor;
#ifdef RULE_STROKE
flat in vec4 vStroke;
flat in float vBorderWidth;
flat in float vPaintOpacity;
flat in float vNominalSize;
flat in float vSpan;
#endif

/** Position on the rule along its length in pixels */
in highp vec2 vPosInPixels;
in float vNormalLengthInPixels;

out lowp vec4 fragColor;

#ifdef RULE_STROKE
// Cap the closest clipped dash using its signed longitudinal distance.
float ribbonDistance(float along, float radius) {
    if (uStrokeCap == ROUND) {
        return length(vec2(max(along, 0.0), vNormalLengthInPixels)) - radius;
    }
    float end = uStrokeCap == SQUARE ? 0.5 * vNominalSize : 0.0;
    vec2 q = vec2(along - end, abs(vNormalLengthInPixels) - radius);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
}

float boundaryCoverage(float along, float outset) {
    float width = max(0.0, vNominalSize + 2.0 * outset);
    if (width == 0.0) return 0.0;
    float radius = 0.5 * max(width, 1.0 / uDevicePixelRatio) - outset;
    float distance = ribbonDistance(along, radius) - outset;
    return clamp(0.5 - distance * uDevicePixelRatio, 0.0, 1.0) * min(1.0, width * uDevicePixelRatio);
}

vec3 ribbonCoverage(float along, float halfSpan) {
    float cf = boundaryCoverage(along, 0.0);
    if (vBorderWidth == 0.0) return vec3(cf);
    float outset = vBorderWidth * float(uStrokeAlign) * 0.5;
    float inset = vBorderWidth - outset;
    float co = outset > 0.0 ? boundaryCoverage(along, outset) : cf;
    float ci = cf;
    if (inset > 0.0) {
        float maxInset = vNominalSize * 0.5;
        if (uStrokeCap != ROUND) {
            float end = uStrokeCap == SQUARE ? vNominalSize * 0.5 : 0.0;
            maxInset = min(maxInset, halfSpan + end);
        }
        ci = inset >= maxInset ? 0.0 : boundaryCoverage(along, -inset);
    }
    return vec3(ci, cf, co);
}

vec3 ruleCoverage() {
    vec2 bounds = vec2(0.0, vSpan);
    if (uDashTextureSize == 0.0) {
        return ribbonCoverage(max(-vPosInPixels.x, vPosInPixels.x - vSpan), vSpan * 0.5);
    }
    float query = clamp(vPosInPixels.x, bounds.x, bounds.y);
    float local = mod(query + uStrokeDashOffset, uDashTextureSize);
    if (local == uDashTextureSize) local = 0.0;
    vec4 intervals = texelFetch(uDashTexture,
        ivec2(int(floor(local)), uStrokeCap == BUTT ? 1 : 0), 0) + query - fract(local);
    vec2 left = vec2(max(bounds.x, intervals.x), min(bounds.y, intervals.y));
    vec2 right = vec2(max(bounds.x, intervals.z), min(bounds.y, intervals.w));
    bool leftValid = left.x <= left.y && (left.x < left.y || uStrokeCap != BUTT);
    bool rightValid = right.x <= right.y && (right.x < right.y || uStrokeCap != BUTT);
    if (!leftValid && !rightValid) return vec3(0.0);

    float leftAlong = max(left.x - vPosInPixels.x, vPosInPixels.x - left.y);
    float rightAlong = max(right.x - vPosInPixels.x, vPosInPixels.x - right.y);
    // Contraction can consume a short dash, so retain its individual length.
    if (uStrokeAlign != 2 && vBorderWidth > 0.0) {
        return max(leftValid ? ribbonCoverage(leftAlong, (left.y - left.x) * 0.5) : vec3(0.0),
            rightValid ? ribbonCoverage(rightAlong, (right.y - right.x) * 0.5) : vec3(0.0));
    }
    float along = leftValid ? leftAlong : rightAlong;
    if (rightValid) along = min(along, rightAlong);

    // Both cap distances are monotone in along. Their minimum gives the coverage
    // union for each boundary, including its independent thin-width compensation.
    return ribbonCoverage(along, vSpan * 0.5);
}
#endif

void main(void) {
#ifdef RULE_STROKE
    vec3 coverage = ruleCoverage();
    vec4 overlap = vStroke + (1.0 - vStroke.a) * vColor;
    fragColor = (coverage.x * vColor + (coverage.y - coverage.x) * overlap +
        (coverage.z - coverage.y) * vStroke) * vPaintOpacity;
    if (uPickingEnabled) fragColor = vPickingColor;
#else
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
        highp float pos = (vPosInPixels[0] + uStrokeDashOffset) * dpr;
        highp float floored = floor(pos);
        vec2 texelPositions = (floored + vec2(0.5, 1.5)) / dpr / uDashTextureSize;
      
        // Do antialiasing
        opacity *= mix(
            texture(uDashTexture, vec2(texelPositions[0], 0)).r,
            texture(uDashTexture, vec2(texelPositions[1], 0)).r,
            clamp((pos - floored), 0.0, 1.0));
    }

    fragColor = vColor * opacity * vBodyFactor;

    if (uPickingEnabled) {
        fragColor = vPickingColor;
    }
#endif
}
`,al=`layout(std140) uniform Mark {
    /** Minimum rule length in pixels */
    uniform mediump float uMinLength;

    uniform highp float uDashTextureSize;
    uniform lowp int uStrokeCap;
    uniform lowp int uStrokeAlign;
    uniform highp float uStrokeDashOffset;

#pragma markUniforms
};
`;function ol(e){if(!e)return{data:new Float32Array(8),length:0};if(!e.length||e.length%2||e.some(e=>!Number.isInteger(e)||e<0||e>1e3)||!e.some(e=>e>0))throw Error(`Invalid stroke dash pattern: `+JSON.stringify(e));let t=e.reduce((e,t)=>e+t,0);if(e.every((e,t)=>t%2==0||e===0))return{data:new Float32Array(8),length:0};let n=[],r=0;for(let t=0;t<e.length;t++){let i=r+e[t];if(t%2==0){let e=n.at(-1);e&&e[1]===r?e[1]=i:n.push([r,i])}r=i}n.length>1&&n[0][0]===0&&n.at(-1)[1]===t&&(n.at(-1)[1]=n.shift()[1]+t);let i=new Float32Array(t*8);for(let e=0;e<2;e++){let r=n.filter(([t,n])=>e===0||t<n);if(!r.length){for(let n=0;n<t;n++)i.set([1,-1,1,-1],(e*t+n)*4);continue}let a=[-t,0,t].flatMap(e=>r.map(([t,n])=>[t+e,n+e])),o=0;for(let n=0;n<t;n++){for(;a[o][1]<=n;)o++;let r=a[o],s=r[0]<n?r:a[o-1];i.set([s[0]-n,s[1]-n,r[0]-n,r[1]-n],(e*t+n)*4)}}return{data:i,length:t}}var sl=class extends Oc{constructor(e,t,n){super(e,t,n),this.dashTexture=void 0,this.dashTextureSize=0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`fill`,`opacity`,...this.mark.getType()===`rule`?[`fillOpacity`,`stroke`,`strokeWidth`,`strokeOpacity`]:[]]}initializeGraphics(){super.initializeGraphics();let e=this.gl;if(this.mark.getType()===`rule`){let{data:t,length:n}=ol(this.properties.strokeDash);this.dashTextureSize=n,this.dashTexture=Qr(e,{level:0,minMag:e.NEAREST,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,src:t,height:2})}else{let t=cl(this.properties.strokeDash);this.dashTextureSize=t.length,this.dashTexture=Qr(e,{level:0,minMag:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1})}this.createAndLinkShaders(rl,il,[al,...this.mark.getType()===`rule`?[`#define RULE_STROKE`]:[]])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinLength`,e.minLength),this.registerMarkUniformValue(`uStrokeCap`,e.strokeCap??`butt`,e=>[`butt`,`square`,`round`].indexOf(e)),this.mark.getType()===`rule`&&this.registerMarkUniformValue(`uStrokeAlign`,this.properties.strokeAlign,e=>{let t=[`inside`,`center`,`outside`].indexOf(e);return t<0?2:t}),Ka(this.markUniformInfo,{uDashTextureSize:+this.dashTextureSize,uStrokeDashOffset:e.strokeDashOffset}),this.markUniformsAltered=!0}updateGraphicsData(e){let t=e.getItemCount(),n=new dc({encoders:this.encoders,attributes:this.getEncodingAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.programInfo,{uDashTexture:this.dashTexture})),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>$a(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e),e)}dispose(){this.dashTexture&&=(this.gl.deleteTexture(this.dashTexture),void 0),super.dispose()}};function cl(e){if(!e)return new Uint8Array;if(e.length==0||e.length%2||e.findIndex(e=>Math.round(e)!=e||e<1||e>1e3)>=0)throw Error(`Invalid stroke dash pattern: `+JSON.stringify(e));let t=e.reduce((e,t)=>e+t),n=new Uint8Array(t),r=!0,i=0;for(let t of e){for(;t;)n[i++]=r&&255||0,t--;r=!r}return n}var ll=`in mediump vec2 vertexCoord;
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
#ifdef CLAMP_X
    x = clamp(x, 0.0, 1.0);
#endif
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
#ifdef CLAMP_X
    x2 = clamp(x2, 0.0, 1.0);
    if (x == x2) {
        gl_Position = vec4(0.0);
        return;
    }
#endif

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
    vec2 pos = clampPosition(applyOffset(
        applySampleFacet(vec2(x, y)),
        vec2(0.0, getScaled_yOffset())
    ));

#ifdef y2_DEFINED
    float y2 = getScaled_y2();
    vec2 pos2 = clampPosition(applyOffset(
        applySampleFacet(vec2(x, y2)),
        vec2(0.0, getScaled_y2Offset())
    ));

#ifdef CLAMP_Y
    if (pos.y == pos2.y) {
        gl_Position = vec4(0.0);
        return;
    }
#endif

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

    vec4 color = getScaled_color();

    // Premultiply alpha
    vColor = premultiplyColor(color, opacity);

    // Do something like gamma correction for text when the color is close to black or white.
    vGamma = getGammaForColor(color.rgb);

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
`,ul=`uniform sampler2D uTexture;

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
`,dl=`layout(std140) uniform Mark {
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
`,fl={left:-1,center:0,right:1},pl={top:-1,middle:0,bottom:1,alphabetic:1,baseline:1},ml={point:Zc,rect:nl,arrow:Rc,rule:sl,tick:sl,link:qc,text:class extends Oc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`color`,`size`,`opacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(ll,ul,[dl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uPaddingX`,e.paddingX),this.registerMarkUniformValue(`uPaddingY`,e.paddingY),this.registerMarkUniformValue(`uFlushX`,e.flushX,e=>!!e),this.registerMarkUniformValue(`uFlushY`,e.flushY,e=>!!e),this.registerMarkUniformValue(`uSqueeze`,e.squeeze,e=>!!e),this.registerMarkUniformValue(`uLogoLetter`,e.logoLetters,e=>!!e),this.registerMarkUniformValue(`uSdfNumerator`,e.logoLetters,e=>this.font.metrics.common.base*.35*(e?.5:1)),this.registerMarkUniformVector(`uViewportEdgeFadeWidth`,[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft]),this.registerMarkUniformVector(`uViewportEdgeFadeDistance`,[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]),Ka(this.markUniformInfo,{uAlign:[fl[e.align],pl[e.baseline]],uD:[e.dx,-e.dy]})}registerMarkUniformVector(e,t){let n=this.createMarkUniformSetter(e),r=[],i=()=>n(r.map(e=>e()));for(let e of t)r.push(l(e)?this.unitView.paramRuntime.watchExpression(e,i):()=>e);i()}updateGraphicsData(e){let n=e.getData(),r=this.encoding,i=this.properties,a=l(i.logoLetters)?this.unitView.paramRuntime.evaluateAndGet(i.logoLetters):i.logoLetters,o=this.encoders.text,c=0,u=`format`in r.text?t(r.text.format):e=>e;for(let e of n){let t=u(o(e)),n=s(t)?t:t===null?``:``+t;c+=n&&n.length||0}let d=new mc({encoders:this.encoders,attributes:this.getEncodingAttributes(),properties:{align:i.align,baseline:i.baseline,logoLetters:a},fontMetrics:this.font.metrics,numCharacters:c});d.addBatches(e.facetBatches);let f=d.toArrays();this.rangeMap.migrateEntries(f.rangeMap),this.updateBufferInfo(f)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{J(this.programInfo,{uTexture:this.rendererResources.getFontTexture(this.font.bitmapUrl)})}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>Y(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>$a(t,this.vertexArrayInfo,t.TRIANGLES,n,e),e)}}};function hl(e,t,n){let r=ml[e.getType()];if(!r)throw Error(`Unsupported WebGL mark type: `+e.getType());return new r(e,t,n)}var gl=class{#e=!1;#t=new Map;#n=new Map;#r=new Map;#i=new Map;#a=new Map;getCategoricalTexture(e){return this.#a.get(e)}#o(e){let t=e.getScale(),n=this.#a.get(e);if(!b(t.type)){n&&this.glHelper.gl.deleteTexture(n),this.#a.delete(e);return}let r=t.props.domainIndexer,i=t.domain().map(e=>r(e)),a=i.reduce((e,t)=>Math.max(e,t+1),1),o=this.glHelper.gl,s=o.getParameter(o.MAX_TEXTURE_SIZE),c=Math.min(a,s),l=Math.ceil(a/c);if(l>s)throw Error(`Too many categorical IDs for a WebGL domain texture.`);let u=new Uint32Array(c*l);i.forEach((e,t)=>{u[e]=t+1});let d=n??o.createTexture();this.#s(d,u,c,l,o.R32UI,o.RED_INTEGER),this.#a.set(e,d)}getGapTexture(e){let t=e.getScale().gapPositions(),n=this.#i.get(e);if(n?.cuts===t)return n.texture;let r=this.glHelper.gl,i=Math.min(Math.max(1,t.length),r.getParameter(r.MAX_TEXTURE_SIZE)),a=Math.max(1,Math.ceil(t.length/i));if(a>r.getParameter(r.MAX_TEXTURE_SIZE))throw Error(`Too many grouping gaps for a WebGL cut texture.`);let o=new Uint32Array(i*a*2);for(let e=0;e<t.length;e++)o[2*e]=Math.floor(t[e]/4096),o[2*e+1]=t[e]%4096;let s=n?.texture??r.createTexture();return this.#s(s,o,i,a,r.RG32UI,r.RG_INTEGER),this.#i.set(e,{cuts:t,texture:s}),s}#s(e,t,n,r,i,a){let o=this.glHelper.gl,s=o.getParameter(o.TEXTURE_BINDING_2D);o.bindTexture(o.TEXTURE_2D,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_BASE_LEVEL,0),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAX_LEVEL,0),o.texImage2D(o.TEXTURE_2D,0,i,n,r,0,a,o.UNSIGNED_INT,t),o.bindTexture(o.TEXTURE_2D,s)}constructor(e){this.glHelper=e,e.setResourceFinalizer(()=>this.dispose())}#c(e){this.#d();let t=hl(e,this.glHelper,this),n={mark:e,graphics:t,state:`compiling`,collector:void 0,dataRevision:-1,configurationRevision:-1,encodedDataRevision:-1,gapKey:v(e.encoders),scaleResolutions:new Set};this.#t.set(e,n),e.unitView.registerDisposer(()=>this.releaseMark(e));try{this.#p(n),t.initializeGraphics()}catch(e){throw n.state=`failed`,this.#h(n),t.dispose(),e}return n}prepareMarks(e){let t=this.#l(e);try{this.#u(t.entries)}catch(e){t.firstError??=e}if(t.firstError)throw t.firstError}#l(e){this.#d();let t=[],n;for(let r of new Set(e))try{let e=this.#t.get(r);e&&e.gapKey!==v(r.encoders)&&this.releaseMark(r);let n=r.getType()!=`text`||Sc(r).metrics;!this.#t.has(r)&&r.encoders&&n&&t.push(this.#c(r))}catch(e){n??=e}return{entries:t,firstError:n}}hasStructuralChanges(e){return Array.from(e).some(e=>this.#t.get(e.mark)!==e||e.gapKey!==v(e.mark.encoders))}#u(e){let t;for(let n of e)try{n.graphics.finalizeGraphicsInitialization(),n.state=`ready`}catch(e){n.state=`failed`,this.#h(n),n.graphics.dispose(),t??=e}if(t)throw t}releaseMark(e){let t=this.#t.get(e);t&&(this.#t.delete(e),t.state=`disposed`,t.graphics.dispose(),this.#h(t))}getMarkRenderingDebugState(e){let t=this.#t.get(e),n=t?.graphics.getDebugState();return{ready:!!(t?.state==`ready`&&t.graphics.isReady()),markUniformsAltered:n?.markUniformsAltered??!1,vertexCount:n?.vertexCount,allocatedVertices:n?.allocatedVertices,rangeCount:n?.rangeCount??0}}getMarkEntry(e){return this.#t.get(e)}isEntryActive(e){return e.state==`ready`&&this.#t.get(e.mark)===e}isEntryDrawable(e){return this.isEntryActive(e)&&e.graphics.isReady()}synchronize(e){if(!this.#e)for(let t of e){if(!this.isEntryActive(t))continue;let e=t.mark;e.initializeRenderingRevisions([],{trackResources:!1});let n=e.unitView.getCollector();n?.completed&&(t.collector!==n||t.dataRevision!=n.dataRevision||t.configurationRevision!=e.getRenderingRevision(`configuration`)||t.encodedDataRevision!=e.getEncodedDataRevision())&&(t.graphics.updateGraphicsData(n),this.#f(t))}}prepareFontBitmap(e){this.#d();let t=this.#r.get(e);if(t)return t.ready;let n=this.glHelper.gl,r,i=new Promise((t,i)=>{r=Qr(n,{src:e,min:n.LINEAR},a=>{a?(this.#r.delete(e),n.deleteTexture(r),i(a)):this.#e?i(Error(`WebGL renderer resources were disposed while loading a font.`)):t()})});return this.#r.set(e,{texture:r,ready:i}),i}getFontTexture(e){this.#d();let t=this.#r.get(e);if(!t)throw Error(`Font bitmap has not been prepared: `+e);return t.texture}dispose(){if(this.#e)return;this.#e=!0;for(let e of Array.from(this.#t.keys()))this.releaseMark(e);let e=this.glHelper.gl;for(let{texture:t}of this.#r.values())e.deleteTexture(t);this.#r.clear();for(let{texture:t}of this.#i.values())e.deleteTexture(t);this.#i.clear()}#d(){if(this.#e)throw Error(`WebGL renderer resources have been disposed.`)}#f(e){let t=e.mark;t.initializeRenderingRevisions([],{trackResources:!1});let n=t.unitView.getCollector();e.collector=n,e.dataRevision=n?.dataRevision??-1,e.configurationRevision=t.getRenderingRevision(`configuration`)??-1,e.encodedDataRevision=t.getEncodedDataRevision()}#p(e){for(let[t,n]of Object.entries(e.mark.encoders)){if(!n.scale)continue;let r=de(n.channelDef)?.resolutionChannel??t;if(!he(r))continue;let i=e.mark.unitView.getScaleResolution(r);if(!i||e.scaleResolutions.has(i))continue;e.scaleResolutions.add(i),this.#m(i);let a=this.#n.get(i);if(a){a.count++;continue}this.glHelper.createRangeTexture(i),this.#o(i);let o=i.getScale(),s=b(o.type)?i.getDomainRef().get():void 0;this.#n.set(i,{count:1,dispose:i.observeMapping(()=>{this.#m(i),this.glHelper.createRangeTexture(i,!0);let e=i.getScale(),t=b(e.type)?i.getDomainRef().get():void 0;(t!==s||e!==o)&&(s=t,o=e,this.#o(i))})})}}#m(e){let t=this.#i.get(e);t&&!p(e.getScale().props)&&(this.glHelper.gl.deleteTexture(t.texture),this.#i.delete(e))}#h(e){for(let t of e.scaleResolutions){let e=this.#n.get(t);if(e&&(e.count--,e.count==0)){e.dispose(),this.#n.delete(t);let n=this.#i.get(t);n&&this.glHelper.gl.deleteTexture(n.texture),this.#i.delete(t);let r=this.#a.get(t);r&&this.glHelper.gl.deleteTexture(r),this.#a.delete(t)}}e.scaleResolutions.clear()}};function _l({runs:e,viewRoot:t,layoutResult:n,webGLHelper:r,markAdapter:i,logicalWidth:a,logicalHeight:o,pixelRatio:s}){let c=r.gl,l=Math.ceil(a*s),u=Math.ceil(o*s);vl(c,l,u);let d=s==1&&n?n:Oe(t,Te.create(0,0,a,o),{devicePixelRatio:s,renderingOptions:{firstFacet:!0}}),f=Oo(c,[{format:c.RGBA,type:c.UNSIGNED_BYTE,minMag:c.LINEAR,wrap:c.CLAMP_TO_EDGE}],l,u);try{for(let t of e){let e=new Bs({picking:!1},{webGLHelper:r,markAdapter:i,canvasSize:{width:a,height:o},devicePixelRatio:s,framebufferInfo:f,markPredicate:e=>t.marks.has(e),pixelOffset:0});d.collectRenderCommands(e),e.finish(),e.render();let n=Ne(t.bounds,s,l,u),p=Ws(c,f,`image/png`,{...n,unpremultiplyAlpha:!0});Me(t,n,s,p)}}finally{c.bindFramebuffer(c.FRAMEBUFFER,null),c.deleteTexture(f.attachments[0]),c.deleteFramebuffer(f.framebuffer)}}function vl(e,t,n){let r=e.getParameter(e.MAX_RENDERBUFFER_SIZE),i=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(r,i);if(t<=0||n<=0||t>a||n>a)throw RangeError(`SVG raster dimensions ${t} x ${n} exceed the WebGL limit ${a}.`)}var yl={pages:[`Lato-Regular.webp`],chars:[{id:87,width:53,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:43.491,chnl:15,x:0,y:0,page:0},{id:124,width:17,height:50,xoffset:0,yoffset:-32.193000000000005,xadvance:10.521,chnl:15,x:0,y:42,page:0},{id:40,width:20,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:94,page:0},{id:41,width:19,height:49,xoffset:0,yoffset:-32.571000000000005,xadvance:11.214,chnl:15,x:0,y:145,page:0},{id:36,width:32,height:49,xoffset:0,yoffset:-34.419000000000004,xadvance:24.360000000000003,chnl:15,x:0,y:196,page:0},{id:125,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:247,page:0},{id:91,width:22,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:297,page:0},{id:93,width:19,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.852,chnl:15,x:0,y:347,page:0},{id:123,width:21,height:48,xoffset:0,yoffset:-32.193000000000005,xadvance:12.642000000000001,chnl:15,x:0,y:397,page:0},{id:106,width:19,height:48,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:0,y:447,page:0},{id:81,width:43,height:47,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:21,y:447,page:0},{id:77,width:45,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:38.997,chnl:15,x:66,y:447,page:0},{id:64,width:43,height:44,xoffset:0,yoffset:-28.539,xadvance:35.133,chnl:15,x:23,y:397,page:0},{id:92,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:68,y:397,page:0},{id:47,width:28,height:43,xoffset:0,yoffset:-30.933000000000003,xadvance:18.984,chnl:15,x:98,y:397,page:0},{id:109,width:42,height:32,xoffset:0,yoffset:-21.609,xadvance:34.545,chnl:15,x:113,y:447,page:0},{id:119,width:42,height:31,xoffset:0,yoffset:-21.315,xadvance:32.991,chnl:15,x:157,y:447,page:0},{id:42,width:25,height:42,xoffset:0,yoffset:-31.626,xadvance:17.85,chnl:15,x:128,y:397,page:0},{id:37,width:42,height:41,xoffset:0,yoffset:-30.387,xadvance:33.663000000000004,chnl:15,x:155,y:397,page:0},{id:79,width:42,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:33.621,chnl:15,x:199,y:397,page:0},{id:102,width:24,height:41,xoffset:0,yoffset:-30.534000000000002,xadvance:14.721,chnl:15,x:243,y:397,page:0},{id:100,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:269,y:397,page:0},{id:98,width:32,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.520000000000003,chnl:15,x:302,y:397,page:0},{id:56,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:336,y:397,page:0},{id:38,width:40,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:29.904000000000003,chnl:15,x:370,y:397,page:0},{id:108,width:17,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:9.912,chnl:15,x:412,y:397,page:0},{id:107,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:21.336000000000002,chnl:15,x:431,y:397,page:0},{id:48,width:33,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:464,y:397,page:0},{id:71,width:38,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:30.681,chnl:15,x:21,y:347,page:0},{id:83,width:31,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:22.785,chnl:15,x:61,y:347,page:0},{id:63,width:27,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:18.795,chnl:15,x:94,y:347,page:0},{id:105,width:18,height:41,xoffset:0,yoffset:-30.639000000000003,xadvance:10.08,chnl:15,x:123,y:347,page:0},{id:51,width:32,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:143,y:347,page:0},{id:104,width:31,height:41,xoffset:0,yoffset:-30.933000000000003,xadvance:23.436,chnl:15,x:177,y:347,page:0},{id:67,width:37,height:41,xoffset:0,yoffset:-30.429000000000002,xadvance:28.056,chnl:15,x:210,y:347,page:0},{id:88,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.258000000000003,chnl:15,x:249,y:347,page:0},{id:68,width:40,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:31.941000000000003,chnl:15,x:288,y:347,page:0},{id:70,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:23.751,chnl:15,x:330,y:347,page:0},{id:34,width:23,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:15.561000000000002,chnl:15,x:364,y:347,page:0},{id:72,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:389,y:347,page:0},{id:73,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.760000000000002,chnl:15,x:429,y:347,page:0},{id:74,width:24,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:17.745,chnl:15,x:449,y:347,page:0},{id:75,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.825000000000003,chnl:15,x:24,y:297,page:0},{id:76,width:31,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:21.567,chnl:15,x:475,y:347,page:0},{id:66,width:35,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:27.153000000000002,chnl:15,x:64,y:297,page:0},{id:78,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:32.067,chnl:15,x:101,y:297,page:0},{id:33,width:18,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:11.298,chnl:15,x:141,y:297,page:0},{id:80,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.221,chnl:15,x:161,y:297,page:0},{id:65,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:197,y:297,page:0},{id:82,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.313000000000002,chnl:15,x:237,y:297,page:0},{id:35,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:275,y:297,page:0},{id:84,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.801000000000002,chnl:15,x:310,y:297,page:0},{id:85,width:37,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:30.891000000000002,chnl:15,x:346,y:297,page:0},{id:86,width:38,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:28.434,chnl:15,x:385,y:297,page:0},{id:39,width:16,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:8.568000000000001,chnl:15,x:425,y:297,page:0},{id:69,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.255000000000003,chnl:15,x:443,y:297,page:0},{id:89,width:36,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:26.208000000000002,chnl:15,x:23,y:247,page:0},{id:90,width:34,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:25.284000000000002,chnl:15,x:477,y:297,page:0},{id:49,width:31,height:40,xoffset:0,yoffset:-30.156000000000002,xadvance:24.360000000000003,chnl:15,x:61,y:247,page:0},{id:50,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:94,y:247,page:0},{id:57,width:32,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:24.360000000000003,chnl:15,x:128,y:247,page:0},{id:94,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:162,y:247,page:0},{id:96,width:21,height:40,xoffset:0,yoffset:-30.429000000000002,xadvance:16.8,chnl:15,x:196,y:247,page:0},{id:55,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:219,y:247,page:0},{id:54,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:254,y:247,page:0},{id:53,width:32,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:289,y:247,page:0},{id:52,width:33,height:40,xoffset:0,yoffset:-30.093000000000004,xadvance:24.360000000000003,chnl:15,x:323,y:247,page:0},{id:103,width:31,height:39,xoffset:0,yoffset:-21.630000000000003,xadvance:21.84,chnl:15,x:358,y:247,page:0},{id:112,width:32,height:39,xoffset:0,yoffset:-21.651,xadvance:23.541,chnl:15,x:391,y:247,page:0},{id:113,width:31,height:39,xoffset:0,yoffset:-21.651,xadvance:23.520000000000003,chnl:15,x:425,y:247,page:0},{id:116,width:25,height:39,xoffset:0,yoffset:-28.182000000000002,xadvance:15.057,chnl:15,x:458,y:247,page:0},{id:121,width:31,height:38,xoffset:0,yoffset:-21.273,xadvance:21.651,chnl:15,x:34,y:196,page:0},{id:59,width:18,height:36,xoffset:0,yoffset:-20.706,xadvance:10.983,chnl:15,x:485,y:247,page:0},{id:43,width:32,height:34,xoffset:0,yoffset:-24.486,xadvance:24.360000000000003,chnl:15,x:67,y:196,page:0},{id:60,width:30,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:101,y:196,page:0},{id:62,width:31,height:33,xoffset:0,yoffset:-23.331000000000003,xadvance:24.360000000000003,chnl:15,x:133,y:196,page:0},{id:117,width:30,height:32,xoffset:0,yoffset:-21.273,xadvance:23.415000000000003,chnl:15,x:166,y:196,page:0},{id:99,width:29,height:32,xoffset:0,yoffset:-21.609,xadvance:20.055,chnl:15,x:198,y:196,page:0},{id:110,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:23.436,chnl:15,x:229,y:196,page:0},{id:111,width:32,height:32,xoffset:0,yoffset:-21.609,xadvance:23.814,chnl:15,x:262,y:196,page:0},{id:126,width:32,height:26,xoffset:0,yoffset:-16.128,xadvance:24.360000000000003,chnl:15,x:201,y:447,page:0},{id:101,width:31,height:32,xoffset:0,yoffset:-21.609,xadvance:22.176000000000002,chnl:15,x:296,y:196,page:0},{id:114,width:25,height:32,xoffset:0,yoffset:-21.651,xadvance:15.288,chnl:15,x:329,y:196,page:0},{id:115,width:27,height:32,xoffset:0,yoffset:-21.609,xadvance:18.186,chnl:15,x:356,y:196,page:0},{id:97,width:28,height:32,xoffset:0,yoffset:-21.651,xadvance:20.874000000000002,chnl:15,x:385,y:196,page:0},{id:118,width:31,height:31,xoffset:0,yoffset:-21.273,xadvance:21.672,chnl:15,x:415,y:196,page:0},{id:61,width:31,height:29,xoffset:0,yoffset:-19.089000000000002,xadvance:24.360000000000003,chnl:15,x:448,y:196,page:0},{id:120,width:30,height:31,xoffset:0,yoffset:-21.273,xadvance:20.916,chnl:15,x:21,y:145,page:0},{id:58,width:18,height:31,xoffset:0,yoffset:-20.706,xadvance:10.5,chnl:15,x:53,y:145,page:0},{id:122,width:28,height:31,xoffset:0,yoffset:-21.273,xadvance:18.984,chnl:15,x:73,y:145,page:0},{id:95,width:28,height:16,xoffset:0,yoffset:0,xadvance:19.278000000000002,chnl:15,x:235,y:447,page:0},{id:45,width:23,height:24,xoffset:0,yoffset:-14.175,xadvance:15.603000000000002,chnl:15,x:481,y:196,page:0},{id:44,width:17,height:21,xoffset:0,yoffset:-4.956,xadvance:9.534,chnl:15,x:103,y:145,page:0},{id:46,width:18,height:15,xoffset:0,yoffset:-4.956,xadvance:9.912,chnl:15,x:0,y:497,page:0},{id:32,width:0,height:0,xoffset:0,yoffset:0,xadvance:10.752,chnl:15,x:20,y:497,page:0}],info:{face:`Lato Regular`,size:42,bold:0,italic:0,charset:` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`.split(``),unicode:1,stretchH:100,smooth:1,aa:1,padding:[0,0,0,0],spacing:[2,2]},common:{lineHeight:50.400000000000006,base:41.454,scaleW:512,scaleH:512,pages:1,packed:0,alphaChnl:0,redChnl:0,greenChnl:0,blueChnl:0},kernings:[]},bl={thin:100,light:300,regular:400,normal:400,medium:500,bold:700,black:900},xl={family:`Lato`,style:`normal`,weight:400},Sl=class{constructor(e,t){this._prepareBitmap=e,this.fontRepository=`https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/`,this._fonts=new oe([],JSON.stringify),this._metadataPromises=new Map,this._fontPromises=new Map,this._promises=[];let n=t&&e?.(t);this._defaultFontEntry={metrics:ac(yl),bitmapUrl:t,measurement:void 0},this._defaultFontEntry.measurement=this._createMeasurement(this._defaultFontEntry),n&&(n.catch(()=>{}),this._promises.push(n)),this._fonts.set(xl,this._defaultFontEntry)}async waitUntilReady(){await Promise.all(this._promises)}getFont(e=xl.family,t=`normal`,n=400){let r=Cl(e,t,n),i=this._fonts.get(r);return i||(i={metrics:void 0,bitmapUrl:void 0,measurement:void 0},i.measurement=this._createMeasurement(i),this._fonts.set(r,i),this._promises.push(this._loadFontEntry(i,r))),i}requestFont(e){return this.getFont(e.font,e.fontStyle,e.fontWeight).measurement}_createMeasurement(e){let t=()=>e.metrics??this._defaultFontEntry.metrics;return{measureWidth:(e,n)=>t().measureWidth(e,n),getHeight:e=>{let n=t();return(n.capHeight+n.descent)/n.common.base*e}}}async _loadFontEntry(e,t){try{let n=Dl(await this._loadMetadata(t.family),t),r=this.fontRepository+Tl(t.family)+`/`+n.replace(/\.\w+/,``);e.bitmapUrl=r+`.png`;let i=this._loadFont(r+`.json`),a=this._prepareBitmap?.(e.bitmapUrl),[o]=await Promise.all([i,a]);e.metrics=o}catch{console.warn(`Cannot load font: "${t.family}". Using the embedded default font.`),e.metrics=this._defaultFontEntry.metrics,e.bitmapUrl=this._defaultFontEntry.bitmapUrl}}_loadFont(e){let t=this._fontPromises.get(e);return t||(t=fetch(e).then(e=>{if(!e.ok)throw Error(`Could not load font: `+e.status);return e}).then(e=>e.json()).then(e=>ac(e)),this._fontPromises.set(e,t)),t}_loadMetadata(e){let t=Tl(e),n=this._metadataPromises.get(t);if(!n){let e=this.fontRepository+t+`/METADATA.pb`;n=fetch(e).then(t=>{if(!t.ok)throw Error(`Could not load font metadata. Response status: `+t.status+`, url: `+e);return t}).then(e=>e.text()).then(e=>El(e)).catch(e=>{console.warn(e.message)}),this._metadataPromises.set(t,n)}return n}getDefaultFont(){return this._defaultFontEntry}};function Cl(e,t,n){return{family:e.toLowerCase()==`sans-serif`?xl.family:e,style:t,weight:wl(n)}}function wl(e){if(s(e)){let t=bl[e.toLowerCase()];if(!t)throw Error(`Unknown font weight: `+e);return t}return e}function Tl(e){return e.toLowerCase().replaceAll(/[^\w]/g,``)}function El(e){let t=e.split(`
`),n=[],r;for(let e of t)if(e.startsWith(`fonts {`)&&(r={name:void 0,style:void 0,weight:void 0,filename:void 0,post_script_name:void 0,full_name:void 0,copyright:void 0}),e.startsWith(`}`)&&(n.push(r),r=void 0),r){let t=e.match(/^\s*([A-Za-z_]+):[ ]?"(.*)"$/);if(t){let e=t[1];r[e]=t[2]}if(t=e.match(/^\s*([A-Za-z_]+):[ ]?(\d+)$/),t){let e=t[1];r[e]=+t[2]}}return n}function Dl(e,t){let n,r=1/0;for(let i of e)if(t.family.localeCompare(i.name,void 0,{sensitivity:`accent`})==0&&t.style==i.style){let e=Math.abs(t.weight-i.weight);e<r&&(r=e,n=i)}return n?.filename}function Ol(e){let t=new Fs(e.container,e.sizeSource,{powerPreference:e.powerPreference},e.onCanvasResize),n=new gl(t);return{surface:t,textMetrics:new Sl(e=>n.prepareFontBitmap(e),Pe),getMarkRenderingDebugState:e=>n.getMarkRenderingDebugState(e),createRenderCoordinator:e=>new Hs({...e,glHelper:t,markAdapter:n}),exportCanvas:e=>Ys({...e,glHelper:t,markAdapter:n}),exportRaster:e=>Xs({...e,glHelper:t,markAdapter:n}),rasterizeSvgRuns:e=>_l({...e,webGLHelper:t,markAdapter:n}),readPickingId:(e,n)=>{let r=t.getDevicePixelRatio(),i=zs(t.gl,t._pickingBufferInfo,e*r,n*r);return i[0]|i[1]<<8|i[2]<<16|i[3]<<24}}}export{Ol as createWebGLRenderingBackend};