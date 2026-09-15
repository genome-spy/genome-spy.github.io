import{A as e,E as t,Ht as n,I as r,Kt as i,Q as a,R as o,St as s,Ut as c,V as l,Vt as u,Wt as d,an as f,at as p,b as m,ct as h,d as g,ft as _,gt as v,ht as ee,ln as y,mt as b,n as x,o as te,pn as ne,pt as re,rt as S,s as ie,sn as ae,st as oe,tt as se,ut as ce}from"./clipOptions-BtlnCFCO.js";import{T as le,b as C,g as ue,gt as de,v as w,x as fe,y as pe}from"./vega-scale-CL4J5wYL.js";import{n as me,r as he,t as ge}from"./indexer-phptlkM-.js";import{n as _e,t as ve}from"./indexLikeDomainUtils-CtCqYOrV.js";import{n as ye,t as be}from"./viewError-BeUp1kNb.js";import{t as xe}from"./rectangle-CAPGOw2x.js";import{n as Se,t as Ce}from"./layoutResult-BbpHOHQN.js";import{n as we,r as Te}from"./performanceProfiler-t6gLo5-8.js";import{t as Ee}from"./canvasSizeHelper-DjbYDXFa.js";import{n as De,t as Oe}from"./rasterImage-CSBco7OJ.js";import{n as ke,t as Ae}from"./renderingConstants-BWHEP8gH.js";var je=5120,Me=5121,Ne=5122,Pe=5123,Fe=5124,Ie=5125,Le=5126,Re=32819,ze=32820,Be=33635,Ve=5131,He=33640,Ue=35899,We=35902,Ge=36269,Ke=34042,qe={};{let e=qe;e[je]=Int8Array,e[Me]=Uint8Array,e[Ne]=Int16Array,e[Pe]=Uint16Array,e[Fe]=Int32Array,e[Ie]=Uint32Array,e[Le]=Float32Array,e[Re]=Uint16Array,e[ze]=Uint16Array,e[Be]=Uint16Array,e[Ve]=Uint16Array,e[He]=Uint32Array,e[Ue]=Uint32Array,e[We]=Uint32Array,e[Ge]=Uint32Array,e[Ke]=Uint32Array}function Je(e){if(e instanceof Int8Array)return je;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return Me;if(e instanceof Int16Array)return Ne;if(e instanceof Uint16Array)return Pe;if(e instanceof Int32Array)return Fe;if(e instanceof Uint32Array)return Ie;if(e instanceof Float32Array)return Le;throw Error(`unsupported typed array type`)}function Ye(e){if(e===Int8Array)return je;if(e===Uint8Array||e===Uint8ClampedArray)return Me;if(e===Int16Array)return Ne;if(e===Uint16Array)return Pe;if(e===Int32Array)return Fe;if(e===Uint32Array)return Ie;if(e===Float32Array)return Le;throw Error(`unsupported typed array type`)}function Xe(e){let t=qe[e];if(!t)throw Error(`unknown gl type`);return t}var Ze=typeof SharedArrayBuffer<`u`?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};function Qe(...e){console.error(...e)}function $e(...e){console.warn(...e)}function et(e,t){return typeof WebGLBuffer<`u`&&t instanceof WebGLBuffer}function tt(e,t){return typeof WebGLRenderbuffer<`u`&&t instanceof WebGLRenderbuffer}function nt(e,t){return typeof WebGLTexture<`u`&&t instanceof WebGLTexture}function rt(e,t){return typeof WebGLSampler<`u`&&t instanceof WebGLSampler}var it=35044,T=34962,at=34963,ot=34660,st=5120,ct=5121,lt=5122,ut=5123,dt=5124,ft=5125,pt=5126,mt={attribPrefix:``};function ht(e,t,n,r,i){e.bindBuffer(t,n),e.bufferData(t,r,i||it)}function gt(e,t,n,r){if(et(e,t))return t;n||=T;let i=e.createBuffer();return ht(e,n,i,t,r),i}function _t(e){return e===`indices`}function vt(e){return e instanceof Int8Array||e instanceof Uint8Array}function yt(e){return e===Int8Array||e===Uint8Array}function bt(e){return e.length?e:e.data}var xt=/coord|texture/i,St=/color|colour/i;function Ct(e,t){let n;if(n=xt.test(e)?2:St.test(e)?4:3,t%n>0)throw Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function wt(e,t){return e.numComponents||e.size||Ct(t,bt(e).length)}function Tt(e,t){if(Ze(e))return e;if(Ze(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type;return n||=_t(t)?Uint16Array:Float32Array,new n(e.data)}function Et(e,t){let n={};return Object.keys(t).forEach(function(r){if(!_t(r)){let i=t[r],a=i.attrib||i.name||i.attribName||mt.attribPrefix+r;if(i.value){if(!Array.isArray(i.value)&&!Ze(i.value))throw Error(`array.value is not array or typedarray`);n[a]={value:i.value}}else{let t,o,s,c;if(i.buffer&&i.buffer instanceof WebGLBuffer)t=i.buffer,c=i.numComponents||i.size,o=i.type,s=i.normalize;else if(typeof i==`number`||typeof i.data==`number`){let n=i.data||i,a=i.type||Float32Array,l=n*a.BYTES_PER_ELEMENT;o=Ye(a),s=i.normalize===void 0?yt(a):i.normalize,c=i.numComponents||i.size||Ct(r,n),t=e.createBuffer(),e.bindBuffer(T,t),e.bufferData(T,l,i.drawType||it)}else{let n=Tt(i,r);t=gt(e,n,void 0,i.drawType),o=Je(n),s=i.normalize===void 0?vt(n):i.normalize,c=wt(i,r)}n[a]={buffer:t,numComponents:c,type:o,normalize:s,stride:i.stride||0,offset:i.offset||0,divisor:i.divisor===void 0?void 0:i.divisor,drawType:i.drawType}}}}),e.bindBuffer(T,null),n}function Dt(e,t,n,r){n=Tt(n),r===void 0?ht(e,T,t.buffer,n,t.drawType):(e.bindBuffer(T,t.buffer),e.bufferSubData(T,r,n))}function Ot(e,t){return t===st||t===ct?1:t===lt||t===ut?2:t===dt||t===ft||t===pt?4:0}var kt=[`position`,`positions`,`a_position`];function At(e,t){let n,r;for(r=0;r<kt.length&&(n=kt[r],!(n in t||(n=mt.attribPrefix+n,n in t)));++r);r===kt.length&&(n=Object.keys(t)[0]);let i=t[n];if(!i.buffer)return 1;e.bindBuffer(T,i.buffer);let a=e.getBufferParameter(T,ot);e.bindBuffer(T,null);let o=a/Ot(e,i.type),s=i.numComponents||i.size,c=o/s;if(c%1!=0)throw Error(`numComponents ${s} not correct for length ${length}`);return c}function jt(e,t,n){let r=Et(e,t),i=Object.assign({},n||{});i.attribs=Object.assign({},n?n.attribs:{},r);let a=t.indices;if(a){let t=Tt(a,`indices`);i.indices=gt(e,t,at),i.numElements=t.length,i.elementType=Je(t)}else i.numElements||=At(e,i.attribs);return i}function Mt(e){return!!e.texStorage2D}var Nt=function(){let e={},t={};function n(n){let r=n.constructor.name;if(!e[r]){for(let e in n)if(typeof n[e]==`number`){let r=t[n[e]];t[n[e]]=r?`${r} | ${e}`:e}e[r]=!0}}return function(e,r){return n(e),t[r]||(typeof r==`number`?`0x${r.toString(16)}`:r)}}(),E={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},Pt=Ze,Ft=function(){let e;return function(){return e||=typeof document<`u`&&document.createElement?document.createElement(`canvas`).getContext(`2d`):null,e}}(),It=6406,D=6407,O=6408,Lt=6409,Rt=6410,zt=6402,Bt=34041,Vt=33071,Ht=9728,Ut=9729,k=3553,A=34067,j=32879,M=35866,Wt=34069,Gt=34070,Kt=34071,qt=34072,Jt=34073,Yt=34074,Xt=10241,Zt=10240,Qt=10242,$t=10243,en=32882,tn=33082,nn=33083,rn=33084,an=33085,on=3317,sn=3314,cn=32878,ln=3316,un=3315,dn=32877,fn=37443,pn=37441,mn=37440,hn=33321,gn=36756,_n=33325,vn=33326,yn=33330,bn=33329,xn=33338,Sn=33337,Cn=33340,wn=33339,Tn=33323,En=36757,Dn=33327,On=33328,kn=33336,An=33335,jn=33332,Mn=33331,Nn=33334,Pn=33333,Fn=32849,In=35905,Ln=36194,Rn=36758,zn=35898,Bn=35901,Vn=34843,Hn=34837,Un=36221,Wn=36239,Gn=36215,Kn=36233,qn=36209,Jn=36227,Yn=32856,Xn=35907,Zn=36759,Qn=32855,$n=32854,er=32857,tr=34842,nr=34836,rr=36220,ir=36238,ar=36975,or=36214,sr=36232,cr=36226,lr=36208,ur=33189,dr=33190,fr=36012,pr=36013,mr=35056,N=5120,P=5121,hr=5122,gr=5123,_r=5124,F=5125,I=5126,vr=32819,yr=32820,br=33635,L=5131,xr=36193,Sr=33640,Cr=35899,wr=35902,Tr=36269,Er=34042,Dr=33319,R=33320,Or=6403,z=36244,B=36248,V=36249,kr={};{let e=kr;e[It]={numColorComponents:1},e[Lt]={numColorComponents:1},e[Rt]={numColorComponents:2},e[D]={numColorComponents:3},e[O]={numColorComponents:4},e[Or]={numColorComponents:1},e[z]={numColorComponents:1},e[Dr]={numColorComponents:2},e[R]={numColorComponents:2},e[D]={numColorComponents:3},e[B]={numColorComponents:3},e[O]={numColorComponents:4},e[V]={numColorComponents:4},e[zt]={numColorComponents:1},e[Bt]={numColorComponents:2}}var Ar;function jr(e){if(!Ar){let e={};e[It]={textureFormat:It,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[P,L,xr,I]},e[Lt]={textureFormat:Lt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1,2,2,4],type:[P,L,xr,I]},e[Rt]={textureFormat:Rt,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2,4,4,8],type:[P,L,xr,I]},e[D]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,6,6,12,2],type:[P,L,xr,I,br]},e[O]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,8,8,16,2,2],type:[P,L,xr,I,vr,yr]},e[zt]={textureFormat:zt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[F,gr]},e[hn]={textureFormat:Or,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[1],type:[P]},e[gn]={textureFormat:Or,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[1],type:[N]},e[_n]={textureFormat:Or,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4,2],type:[I,L]},e[vn]={textureFormat:Or,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[yn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[P]},e[bn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[1],type:[N]},e[jn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[gr]},e[Mn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[hr]},e[Nn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[Pn]={textureFormat:z,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[_r]},e[Tn]={textureFormat:Dr,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[2],type:[P]},e[En]={textureFormat:Dr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[2],type:[N]},e[Dn]={textureFormat:Dr,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[8,4],type:[I,L]},e[On]={textureFormat:Dr,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[8],type:[I]},e[kn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[P]},e[An]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2],type:[N]},e[xn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[gr]},e[Sn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[hr]},e[Cn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[F]},e[wn]={textureFormat:R,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[_r]},e[Fn]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[In]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[P]},e[Ln]={textureFormat:D,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[3,2],type:[P,br]},e[Rn]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[3],type:[N]},e[zn]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[I,L,Cr]},e[Bn]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6,4],type:[I,L,wr]},e[Vn]={textureFormat:D,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[12,6],type:[I,L]},e[Hn]={textureFormat:D,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[I]},e[Un]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[P]},e[Wn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[3],type:[N]},e[Gn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[gr]},e[Kn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[6],type:[hr]},e[qn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[F]},e[Jn]={textureFormat:B,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[12],type:[_r]},e[Yn]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Xn]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[P]},e[Zn]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[4],type:[N]},e[Qn]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2,4],type:[P,yr,Sr]},e[$n]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4,2],type:[P,vr]},e[er]={textureFormat:O,colorRenderable:!0,textureFilterable:!0,bytesPerElement:[4],type:[Sr]},e[tr]={textureFormat:O,colorRenderable:!1,textureFilterable:!0,bytesPerElement:[16,8],type:[I,L]},e[nr]={textureFormat:O,colorRenderable:!1,textureFilterable:!1,bytesPerElement:[16],type:[I]},e[rr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[P]},e[ir]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[N]},e[ar]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Sr]},e[or]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[gr]},e[sr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[8],type:[hr]},e[cr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[_r]},e[lr]={textureFormat:V,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[16],type:[F]},e[ur]={textureFormat:zt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[2,4],type:[gr,F]},e[dr]={textureFormat:zt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[F]},e[fr]={textureFormat:zt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[I]},e[mr]={textureFormat:Bt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Er]},e[pr]={textureFormat:Bt,colorRenderable:!0,textureFilterable:!1,bytesPerElement:[4],type:[Tr]},Object.keys(e).forEach(function(t){let n=e[t];n.bytesPerElementMap={},n.bytesPerElement.forEach(function(e,t){let r=n.type[t];n.bytesPerElementMap[r]=e})}),Ar=e}return Ar[e]}function Mr(e,t){let n=jr(e);if(!n)throw`unknown internal format`;let r=n.bytesPerElementMap[t];if(r===void 0)throw`unknown internal format`;return r}function Nr(e){let t=jr(e);if(!t)throw`unknown internal format`;return{format:t.textureFormat,type:t.type[0]}}function Pr(e){return(e&e-1)==0}function Fr(e,t,n,r){if(!Mt(e))return Pr(t)&&Pr(n);let i=jr(r);if(!i)throw`unknown internal format`;return i.colorRenderable&&i.textureFilterable}function Ir(e){let t=jr(e);if(!t)throw`unknown internal format`;return t.textureFilterable}function Lr(e,t,n){return Pt(t)?Je(t):n||P}function Rr(e,t,n,r,i){if(i%1!=0)throw`can't guess dimensions`;if(!n&&!r){let e=Math.sqrt(i/(t===A?6:1));e%1==0?(n=e,r=e):(n=i,r=1)}else if(!r){if(r=i/n,r%1)throw`can't guess dimensions`}else if(!n&&(n=i/r,n%1))throw`can't guess dimensions`;return{width:n,height:r}}function zr(e,t){t.colorspaceConversion!==void 0&&e.pixelStorei(fn,t.colorspaceConversion),t.premultiplyAlpha!==void 0&&e.pixelStorei(pn,t.premultiplyAlpha),t.flipY!==void 0&&e.pixelStorei(mn,t.flipY)}function Br(e){e.pixelStorei(on,4),Mt(e)&&(e.pixelStorei(sn,0),e.pixelStorei(cn,0),e.pixelStorei(ln,0),e.pixelStorei(un,0),e.pixelStorei(dn,0))}function Vr(e,t,n,r){r.minMag&&(n.call(e,t,Xt,r.minMag),n.call(e,t,Zt,r.minMag)),r.min&&n.call(e,t,Xt,r.min),r.mag&&n.call(e,t,Zt,r.mag),r.wrap&&(n.call(e,t,Qt,r.wrap),n.call(e,t,$t,r.wrap),(t===j||rt(e,t))&&n.call(e,t,en,r.wrap)),r.wrapR&&n.call(e,t,en,r.wrapR),r.wrapS&&n.call(e,t,Qt,r.wrapS),r.wrapT&&n.call(e,t,$t,r.wrapT),r.minLod&&n.call(e,t,tn,r.minLod),r.maxLod&&n.call(e,t,nn,r.maxLod),r.baseLevel&&n.call(e,t,rn,r.baseLevel),r.maxLevel&&n.call(e,t,an,r.maxLevel)}function Hr(e,t,n){let r=n.target||k;e.bindTexture(r,t),Vr(e,r,e.texParameteri,n)}function Ur(e){return e||=E.textureColor,Pt(e)?e:new Uint8Array([e[0]*255,e[1]*255,e[2]*255,e[3]*255])}function Wr(e,t,n,r,i,a){n||=E.textureOptions,a||=O;let o=n.target||k;if(r||=n.width,i||=n.height,e.bindTexture(o,t),Fr(e,r,i,a))e.generateMipmap(o);else{let t=Ir(a)?Ut:Ht;e.texParameteri(o,Xt,t),e.texParameteri(o,Zt,t),e.texParameteri(o,Qt,Vt),e.texParameteri(o,$t,Vt)}}function Gr(e){return e.auto===!0||e.auto===void 0&&e.level===void 0}function Kr(e,t){return t||={},t.cubeFaceOrder||[Wt,Gt,Kt,qt,Jt,Yt]}function qr(e,t){let n=Kr(e,t).map(function(e,t){return{face:e,ndx:t}});return n.sort(function(e,t){return e.face-t.face}),n}function Jr(e,t,n,r){r||=E.textureOptions;let i=r.target||k,a=r.level||0,o=n.width,s=n.height,c=r.internalFormat||r.format||O,l=Nr(c),u=r.format||l.format,d=r.type||l.type;if(zr(e,r),e.bindTexture(i,t),i===A){let l=n.width,f=n.height,p,m;if(l/6===f)p=f,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(f/6===l)p=l,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(l/3==f/2)p=l/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else if(l/2==f/3)p=l/2,m=[0,0,1,0,0,1,1,1,0,2,1,2];else throw`can't figure out cube map from element: `+(n.src?n.src:n.nodeName);let h=Ft();h?(h.canvas.width=p,h.canvas.height=p,o=p,s=p,qr(e,r).forEach(function(t){let r=m[t.ndx*2+0]*p,i=m[t.ndx*2+1]*p;h.drawImage(n,r,i,p,p,0,0,p,p),e.texImage2D(t.face,a,c,u,d,h.canvas)}),h.canvas.width=1,h.canvas.height=1):typeof createImageBitmap<`u`&&(o=p,s=p,qr(e,r).forEach(function(l){let f=m[l.ndx*2+0]*p,h=m[l.ndx*2+1]*p;e.texImage2D(l.face,a,c,p,p,0,u,d,null),createImageBitmap(n,f,h,p,p,{premultiplyAlpha:`none`,colorSpaceConversion:`none`}).then(function(n){zr(e,r),e.bindTexture(i,t),e.texImage2D(l.face,a,c,u,d,n),Gr(r)&&Wr(e,t,r,o,s,c)})}))}else if(i===j||i===M){let t=Math.min(n.width,n.height),r=Math.max(n.width,n.height),o=r/t;if(o%1!=0)throw`can not compute 3D dimensions of element`;let s=+(n.width===r),l=+(n.height===r);e.pixelStorei(on,1),e.pixelStorei(sn,n.width),e.pixelStorei(cn,0),e.pixelStorei(dn,0),e.texImage3D(i,a,c,t,t,t,0,u,d,null);for(let r=0;r<o;++r){let o=r*t*s,c=r*t*l;e.pixelStorei(ln,o),e.pixelStorei(un,c),e.texSubImage3D(i,a,0,0,r,t,t,1,u,d,n)}Br(e)}else e.texImage2D(i,a,c,u,d,n);Gr(r)&&Wr(e,t,r,o,s,c),Hr(e,t,r)}function Yr(){}function Xr(e){if(typeof document<`u`){let t=document.createElement(`a`);return t.href=e,t.hostname===location.hostname&&t.port===location.port&&t.protocol===location.protocol}else{let t=new URL(location.href).origin;return new URL(e,location.href).origin===t}}function Zr(e,t){return t===void 0&&!Xr(e)?`anonymous`:t}function Qr(e,t,n){n||=Yr;let r;if(t=t===void 0?E.crossOrigin:t,t=Zr(e,t),typeof Image<`u`){r=new Image,t!==void 0&&(r.crossOrigin=t);let i=function(){r.removeEventListener(`error`,a),r.removeEventListener(`load`,o),r=null},a=function(){let t=`couldn't load image: `+e;Qe(t),n(t,r),i()},o=function(){n(null,r),i()};return r.addEventListener(`error`,a),r.addEventListener(`load`,o),r.src=e,r}else if(typeof ImageBitmap<`u`){let i,a,o=function(){n(i,a)},s={};t&&(s.mode=`cors`),fetch(e,s).then(function(e){if(!e.ok)throw e;return e.blob()}).then(function(e){return createImageBitmap(e,{premultiplyAlpha:`none`,colorSpaceConversion:`none`})}).then(function(e){a=e,setTimeout(o)}).catch(function(e){i=e,setTimeout(o)}),r=null}return r}function $r(e){return typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof ImageData<`u`&&e instanceof ImageData||typeof HTMLElement<`u`&&e instanceof HTMLElement}function ei(e,t,n){return $r(e)?(setTimeout(function(){n(null,e)}),e):Qr(e,t,n)}function ti(e,t,n){n||=E.textureOptions;let r=n.target||k;if(e.bindTexture(r,t),n.color===!1)return;let i=Ur(n.color);if(r===A)for(let t=0;t<6;++t)e.texImage2D(Wt+t,0,O,1,1,0,O,P,i);else r===j||r===M?e.texImage3D(r,0,O,1,1,1,0,O,P,i):e.texImage2D(r,0,O,1,1,0,O,P,i)}function ni(e,t,n,r){return r||=Yr,n||=E.textureOptions,ti(e,t,n),n=Object.assign({},n),ei(n.src,n.crossOrigin,function(i,a){i?r(i,t,a):(Jr(e,t,a,n),r(null,t,a))})}function ri(e,t,n,r){r||=Yr;let i=n.src;if(i.length!==6)throw`there must be 6 urls for a cubemap`;let a=n.level||0,o=n.internalFormat||n.format||O,s=Nr(o),c=n.format||s.format,l=n.type||P,u=n.target||k;if(u!==A)throw`target must be TEXTURE_CUBE_MAP`;ti(e,t,n),n=Object.assign({},n);let d=6,f=[],p=Kr(e,n),m;function h(i){return function(s,p){--d,s?f.push(s):p.width===p.height?(zr(e,n),e.bindTexture(u,t),d===5?Kr().forEach(function(t){e.texImage2D(t,a,o,c,l,p)}):e.texImage2D(i,a,o,c,l,p),Gr(n)&&e.generateMipmap(u)):f.push(`cubemap face img is not a square: `+p.src),d===0&&r(f.length?f:void 0,t,m)}}m=i.map(function(e,t){return ei(e,n.crossOrigin,h(p[t]))})}function ii(e,t,n,r){r||=Yr;let i=n.src,a=n.internalFormat||n.format||O,o=Nr(a),s=n.format||o.format,c=n.type||P,l=n.target||M;if(l!==j&&l!==M)throw`target must be TEXTURE_3D or TEXTURE_2D_ARRAY`;ti(e,t,n),n=Object.assign({},n);let u=i.length,d=[],f,p=n.level||0,m=n.width,h=n.height,g=i.length,_=!0;function v(i){return function(o,v){if(--u,o)d.push(o);else{if(zr(e,n),e.bindTexture(l,t),_){_=!1,m=n.width||v.width,h=n.height||v.height,e.texImage3D(l,p,a,m,h,g,0,s,c,null);for(let t=0;t<g;++t)e.texSubImage3D(l,p,0,0,t,m,h,1,s,c,v)}else{let t=v,n;(v.width!==m||v.height!==h)&&(n=Ft(),t=n.canvas,n.canvas.width=m,n.canvas.height=h,n.drawImage(v,0,0,m,h)),e.texSubImage3D(l,p,0,0,i,m,h,1,s,c,t),n&&t===n.canvas&&(n.canvas.width=0,n.canvas.height=0)}Gr(n)&&e.generateMipmap(l)}u===0&&r(d.length?d:void 0,t,f)}}f=i.map(function(e,t){return ei(e,n.crossOrigin,v(t))})}function ai(e,t,n,r){r||=E.textureOptions;let i=r.target||k;e.bindTexture(i,t);let a=r.width,o=r.height,s=r.depth,c=r.level||0,l=r.internalFormat||r.format||O,u=Nr(l),d=r.format||u.format,f=r.type||Lr(e,n,u.type);Pt(n)?n instanceof Uint8ClampedArray&&(n=new Uint8Array(n.buffer)):n=new(Xe(f))(n);let p=Mr(l,f),m=n.byteLength/p;if(m%1)throw`length wrong size for format: `+Nt(e,d);let h;if(i===j||i===M)if(!a&&!o&&!s){let e=Math.cbrt(m);if(e%1!=0)throw`can't guess cube size of array of numElements: `+m;a=e,o=e,s=e}else a&&(!o||!s)?(h=Rr(e,i,o,s,m/a),o=h.width,s=h.height):o&&(!a||!s)?(h=Rr(e,i,a,s,m/o),a=h.width,s=h.height):(h=Rr(e,i,a,o,m/s),a=h.width,o=h.height);else h=Rr(e,i,a,o,m),a=h.width,o=h.height;if(Br(e),e.pixelStorei(on,r.unpackAlignment||1),zr(e,r),i===A){let t=p/n.BYTES_PER_ELEMENT,i=m/6*t;qr(e,r).forEach(t=>{let r=i*t.ndx,s=n.subarray(r,r+i);e.texImage2D(t.face,c,l,a,o,0,d,f,s)})}else i===j||i===M?e.texImage3D(i,c,l,a,o,s,0,d,f,n):e.texImage2D(i,c,l,a,o,0,d,f,n);return{width:a,height:o,depth:s,type:f}}function oi(e,t,n){let r=n.target||k;e.bindTexture(r,t);let i=n.level||0,a=n.internalFormat||n.format||O,o=Nr(a),s=n.format||o.format,c=n.type||o.type;if(zr(e,n),r===A)for(let t=0;t<6;++t)e.texImage2D(Wt+t,i,a,n.width,n.height,0,s,c,null);else r===j||r===M?e.texImage3D(r,i,a,n.width,n.height,n.depth,0,s,c,null):e.texImage2D(r,i,a,n.width,n.height,0,s,c,null)}function si(e,t,n){n||=Yr,t||=E.textureOptions;let r=e.createTexture(),i=t.target||k,a=t.width||1,o=t.height||1,s=t.internalFormat||O;e.bindTexture(i,r),i===A&&(e.texParameteri(i,Qt,Vt),e.texParameteri(i,$t,Vt));let c=t.src;if(c)if(typeof c==`function`&&(c=c(e,t)),typeof c==`string`)ni(e,r,t,n);else if(Pt(c)||Array.isArray(c)&&(typeof c[0]==`number`||Array.isArray(c[0])||Pt(c[0]))){let n=ai(e,r,c,t);a=n.width,o=n.height}else Array.isArray(c)&&(typeof c[0]==`string`||$r(c[0]))?i===A?ri(e,r,t,n):ii(e,r,t,n):(Jr(e,r,c,t),a=c.width,o=c.height);else oi(e,r,t);return Gr(t)&&Wr(e,r,t,a,o,s),Hr(e,r,t),r}function ci(e,t,n,r,i,a){r||=n.width,i||=n.height,a||=n.depth;let o=n.target||k;e.bindTexture(o,t);let s=n.level||0,c=n.internalFormat||n.format||O,l=Nr(c),u=n.format||l.format,d,f=n.src;if(d=f&&(Pt(f)||Array.isArray(f)&&typeof f[0]==`number`)?n.type||Lr(e,f,l.type):n.type||l.type,o===A)for(let t=0;t<6;++t)e.texImage2D(Wt+t,s,c,r,i,0,u,d,null);else o===j||o===M?e.texImage3D(o,s,c,r,i,a,0,u,d,null):e.texImage2D(o,s,c,r,i,0,u,d,null)}var li=$e,ui=33984,di=35048,fi=34962,pi=34963,mi=35345,hi=35718,gi=35721,_i=35971,vi=35382,yi=35396,bi=35398,xi=35392,Si=35395,Ci=5126,wi=35664,Ti=35665,Ei=35666,Di=5124,Oi=35667,ki=35668,Ai=35669,ji=35670,Mi=35671,Ni=35672,Pi=35673,Fi=35674,Ii=35675,Li=35676,Ri=35678,zi=35680,Bi=35679,Vi=35682,Hi=35685,Ui=35686,Wi=35687,Gi=35688,Ki=35689,qi=35690,Ji=36289,Yi=36292,Xi=36293,Zi=5125,Qi=36294,$i=36295,ea=36296,ta=36298,na=36299,ra=36300,ia=36303,aa=36306,oa=36307,sa=36308,ca=36311,la=3553,ua=34067,da=32879,fa=35866,H={};function pa(e,t){return H[t].bindPoint}function ma(e,t){return function(n){e.uniform1f(t,n)}}function ha(e,t){return function(n){e.uniform1fv(t,n)}}function ga(e,t){return function(n){e.uniform2fv(t,n)}}function _a(e,t){return function(n){e.uniform3fv(t,n)}}function va(e,t){return function(n){e.uniform4fv(t,n)}}function ya(e,t){return function(n){e.uniform1i(t,n)}}function ba(e,t){return function(n){e.uniform1iv(t,n)}}function xa(e,t){return function(n){e.uniform2iv(t,n)}}function Sa(e,t){return function(n){e.uniform3iv(t,n)}}function Ca(e,t){return function(n){e.uniform4iv(t,n)}}function wa(e,t){return function(n){e.uniform1ui(t,n)}}function Ta(e,t){return function(n){e.uniform1uiv(t,n)}}function Ea(e,t){return function(n){e.uniform2uiv(t,n)}}function Da(e,t){return function(n){e.uniform3uiv(t,n)}}function Oa(e,t){return function(n){e.uniform4uiv(t,n)}}function ka(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function Aa(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function ja(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Ma(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function Na(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function Pa(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function Fa(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function Ia(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function La(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function U(e,t,n,r){let i=pa(e,t);return Mt(e)?function(t){let a,o;nt(e,t)?(a=t,o=null):(a=t.texture,o=t.sampler),e.uniform1i(r,n),e.activeTexture(ui+n),e.bindTexture(i,a),e.bindSampler(n,o)}:function(t){e.uniform1i(r,n),e.activeTexture(ui+n),e.bindTexture(i,t)}}function W(e,t,n,r,i){let a=pa(e,t),o=new Int32Array(i);for(let e=0;e<i;++e)o[e]=n+e;return Mt(e)?function(t){e.uniform1iv(r,o),t.forEach(function(t,r){e.activeTexture(ui+o[r]);let i,s;nt(e,t)?(i=t,s=null):(i=t.texture,s=t.sampler),e.bindSampler(n,s),e.bindTexture(a,i)})}:function(t){e.uniform1iv(r,o),t.forEach(function(t,n){e.activeTexture(ui+o[n]),e.bindTexture(a,t)})}}H[Ci]={Type:Float32Array,size:4,setter:ma,arraySetter:ha},H[wi]={Type:Float32Array,size:8,setter:ga,cols:2},H[Ti]={Type:Float32Array,size:12,setter:_a,cols:3},H[Ei]={Type:Float32Array,size:16,setter:va,cols:4},H[Di]={Type:Int32Array,size:4,setter:ya,arraySetter:ba},H[Oi]={Type:Int32Array,size:8,setter:xa,cols:2},H[ki]={Type:Int32Array,size:12,setter:Sa,cols:3},H[Ai]={Type:Int32Array,size:16,setter:Ca,cols:4},H[Zi]={Type:Uint32Array,size:4,setter:wa,arraySetter:Ta},H[Qi]={Type:Uint32Array,size:8,setter:Ea,cols:2},H[$i]={Type:Uint32Array,size:12,setter:Da,cols:3},H[ea]={Type:Uint32Array,size:16,setter:Oa,cols:4},H[ji]={Type:Uint32Array,size:4,setter:ya,arraySetter:ba},H[Mi]={Type:Uint32Array,size:8,setter:xa,cols:2},H[Ni]={Type:Uint32Array,size:12,setter:Sa,cols:3},H[Pi]={Type:Uint32Array,size:16,setter:Ca,cols:4},H[Fi]={Type:Float32Array,size:32,setter:ka,rows:2,cols:2},H[Ii]={Type:Float32Array,size:48,setter:Aa,rows:3,cols:3},H[Li]={Type:Float32Array,size:64,setter:ja,rows:4,cols:4},H[Hi]={Type:Float32Array,size:32,setter:Ma,rows:2,cols:3},H[Ui]={Type:Float32Array,size:32,setter:Pa,rows:2,cols:4},H[Wi]={Type:Float32Array,size:48,setter:Na,rows:3,cols:2},H[Gi]={Type:Float32Array,size:48,setter:Ia,rows:3,cols:4},H[Ki]={Type:Float32Array,size:64,setter:Fa,rows:4,cols:2},H[qi]={Type:Float32Array,size:64,setter:La,rows:4,cols:3},H[Ri]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:la},H[zi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[Bi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[Vi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:la},H[Ji]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[Yi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[Xi]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[ta]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:la},H[na]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[ra]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[ia]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa},H[aa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:la},H[oa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:da},H[sa]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:ua},H[ca]={Type:null,size:0,setter:U,arraySetter:W,bindPoint:fa};function Ra(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw Error(`the length of a float constant value must be between 1 and 4!`)}else e.bindBuffer(fi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||Ci,n.normalize||!1,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function G(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw Error(`The length of an integer constant value must be 4!`);else e.bindBuffer(fi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Di,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function za(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw Error(`The length of an unsigned integer constant value must be 4!`);else e.bindBuffer(fi,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Zi,n.stride||0,n.offset||0),n.divisor!==void 0&&e.vertexAttribDivisor(t,n.divisor)}}function Ba(e,t,n){let r=n.size,i=n.count;return function(n){e.bindBuffer(fi,n.buffer);let a=n.size||n.numComponents||r,o=a/i,s=n.type||Ci,c=H[s].size*a,l=n.normalize||!1,u=n.offset||0,d=c/i;for(let r=0;r<i;++r)e.enableVertexAttribArray(t+r),e.vertexAttribPointer(t+r,o,s,l,c,u+d*r),n.divisor!==void 0&&e.vertexAttribDivisor(t+r,n.divisor)}}var K={};K[Ci]={size:4,setter:Ra},K[wi]={size:8,setter:Ra},K[Ti]={size:12,setter:Ra},K[Ei]={size:16,setter:Ra},K[Di]={size:4,setter:G},K[Oi]={size:8,setter:G},K[ki]={size:12,setter:G},K[Ai]={size:16,setter:G},K[Zi]={size:4,setter:za},K[Qi]={size:8,setter:za},K[$i]={size:12,setter:za},K[ea]={size:16,setter:za},K[ji]={size:4,setter:G},K[Mi]={size:8,setter:G},K[Ni]={size:12,setter:G},K[Pi]={size:16,setter:G},K[Fi]={size:4,setter:Ba,count:2},K[Ii]={size:9,setter:Ba,count:3},K[Li]={size:16,setter:Ba,count:4};function Va(e){let t=e.name;return t.startsWith(`gl_`)||t.startsWith(`webgl_`)}var Ha=/(\.|\[|]|\w+)/g,Ua=e=>e>=`0`&&e<=`9`;function Wa(e,t,n,r){let i=e.split(Ha).filter(e=>e!==``),a=0,o=``;for(;;){let e=i[a++];o+=e;let s=Ua(e[0]),c=s?parseInt(e):e;if(s&&(o+=i[a++]),a===i.length){n[c]=t;break}else{let e=i[a++],t=e===`[`,s=n[c]||(t?[]:{});n[c]=s,n=s,r[o]=r[o]||function(e){return function(t){no(e,t)}}(s),o+=e}}}function Ga(e,t){let n=0;function r(t,r,i){let a=r.name.endsWith(`[0]`),o=r.type,s=H[o];if(!s)throw Error(`unknown type: 0x${o.toString(16)}`);let c;if(s.bindPoint){let t=n;n+=r.size,c=a?s.arraySetter(e,o,t,i,r.size):s.setter(e,o,t,i,r.size)}else c=s.arraySetter&&a?s.arraySetter(e,i):s.setter(e,i);return c.location=i,c}let i={},a={},o=e.getProgramParameter(t,hi);for(let n=0;n<o;++n){let o=e.getActiveUniform(t,n);if(Va(o))continue;let s=o.name;s.endsWith(`[0]`)&&(s=s.substr(0,s.length-3));let c=e.getUniformLocation(t,o.name);if(c){let e=r(t,o,c);i[s]=e,Wa(s,e,a,i)}}return i}function Ka(e,t){let n={},r=e.getProgramParameter(t,_i);for(let i=0;i<r;++i){let r=e.getTransformFeedbackVarying(t,i);n[r.name]={index:i,type:r.type,size:r.size}}return n}function qa(e,t){let n=e.getProgramParameter(t,hi),r=[],i=[];for(let a=0;a<n;++a){i.push(a),r.push({});let n=e.getActiveUniform(t,a);r[a].name=n.name}[[`UNIFORM_TYPE`,`type`],[`UNIFORM_SIZE`,`size`],[`UNIFORM_BLOCK_INDEX`,`blockNdx`],[`UNIFORM_OFFSET`,`offset`]].forEach(function(n){let a=n[0],o=n[1];e.getActiveUniforms(t,i,e[a]).forEach(function(e,t){r[t][o]=e})});let a={},o=e.getProgramParameter(t,vi);for(let n=0;n<o;++n){let r=e.getActiveUniformBlockName(t,n),i={index:e.getUniformBlockIndex(t,r),usedByVertexShader:e.getActiveUniformBlockParameter(t,n,yi),usedByFragmentShader:e.getActiveUniformBlockParameter(t,n,bi),size:e.getActiveUniformBlockParameter(t,n,xi),uniformIndices:e.getActiveUniformBlockParameter(t,n,Si)};i.used=i.usedByVertexShader||i.usedByFragmentShader,a[r]=i}return{blockSpecs:a,uniformData:r}}var Ja=/\[\d+\]\.$/,Ya=(e,t)=>((e+(t-1))/t|0)*t;function Xa(e,t,n,r){if(t||n){r||=1;let t=e.length/4;return function(n){let i=0,a=0;for(let o=0;o<t;++o){for(let t=0;t<r;++t)e[i++]=n[a++];i+=4-r}}}else return function(t){t.length?e.set(t):e[0]=t}}function Za(e,t,n,r){let i=n.blockSpecs,a=n.uniformData,o=i[r];if(!o)return li(`no uniform block object named:`,r),{name:r,uniforms:{}};let s=new ArrayBuffer(o.size),c=e.createBuffer(),l=o.index;e.bindBuffer(mi,c),e.uniformBlockBinding(t,o.index,l);let u=r+`.`;Ja.test(u)&&(u=u.replace(Ja,`.`));let d={},f={},p={};return o.uniformIndices.forEach(function(e){let t=a[e],n=t.name;n.startsWith(u)&&(n=n.substr(u.length));let r=n.endsWith(`[0]`);r&&(n=n.substr(0,n.length-3));let i=H[t.type],o=i.Type,c=r?Ya(i.size,16)*t.size:i.size*t.size,l=new o(s,t.offset,c/o.BYTES_PER_ELEMENT);d[n]=l;let m=Xa(l,r,i.rows,i.cols);f[n]=m,Wa(n,m,p,f)}),{name:r,array:s,asFloat:new Float32Array(s),buffer:c,uniforms:d,setters:f}}function Qa(e,t,n){return Za(e,t.program,t.uniformBlockSpec,n)}function $a(e,t,n){let r=(t.uniformBlockSpec||t).blockSpecs[n.name];if(r){let t=r.index;return e.bindBufferRange(mi,t,n.buffer,n.offset||0,n.array.byteLength),!0}return!1}function eo(e,t,n){$a(e,t,n)&&e.bufferData(mi,n.array,di)}function to(e,t){let n=e.setters;for(let e in t){let r=n[e];if(r){let n=t[e];r(n)}}}function no(e,t){for(let n in t){let r=e[n];typeof r==`function`?r(t[n]):no(e[n],t[n])}}function q(e,...t){let n=e.uniformSetters||e,r=t.length;for(let e=0;e<r;++e){let r=t[e];if(Array.isArray(r)){let e=r.length;for(let t=0;t<e;++t)q(n,r[t])}else for(let e in r){let t=n[e];t&&t(r[e])}}}function ro(e,t){let n={},r=e.getProgramParameter(t,gi);for(let i=0;i<r;++i){let r=e.getActiveAttrib(t,i);if(Va(r))continue;let a=e.getAttribLocation(t,r.name),o=K[r.type],s=o.setter(e,a,o);s.location=a,n[r.name]=s}return n}function io(e,t){for(let n in t){let r=e[n];r&&r(t[n])}}function J(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(io(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(pi,n.indices))}function ao(e,t){let n={program:t,uniformSetters:Ga(e,t),attribSetters:ro(e,t)};return Mt(e)&&(n.uniformBlockSpec=qa(e,t),n.transformFeedbackInfo=Ka(e,t)),n}var oo=4,so=5123;function co(e,t,n,r,i,a){n=n===void 0?oo:n;let o=t.indices,s=t.elementType,c=r===void 0?t.numElements:r;i=i===void 0?0:i,s||o?a===void 0?e.drawElements(n,c,s===void 0?so:t.elementType,i):e.drawElementsInstanced(n,c,s===void 0?so:t.elementType,i,a):a===void 0?e.drawArrays(n,i,c):e.drawArraysInstanced(n,i,c,a)}var lo=36160,Y=36161,uo=3553,fo=5121,po=6402,mo=6408,ho=33190,go=36012,_o=35056,vo=36013,yo=32854,bo=32855,xo=36194,So=33189,Co=6401,wo=36168,To=34041,Eo=36064,Do=36096,Oo=36128,ko=33306,Ao=33071,jo=9729,Mo=[{format:mo,type:fo,min:jo,wrap:Ao},{format:To}],X={};X[To]=ko,X[Co]=Oo,X[wo]=Oo,X[po]=Do,X[So]=Do,X[ho]=Do,X[go]=Do,X[_o]=ko,X[vo]=ko;function No(e,t){return X[e]||X[t]}var Z={};Z[yo]=!0,Z[bo]=!0,Z[xo]=!0,Z[To]=!0,Z[So]=!0,Z[Co]=!0,Z[wo]=!0;function Po(e){return Z[e]}function Fo(e){return e>=Eo&&e<36096}function Io(e,t,n,r){let i=lo,a=e.createFramebuffer();e.bindFramebuffer(i,a),n||=e.drawingBufferWidth,r||=e.drawingBufferHeight,t||=Mo;let o=[],s={framebuffer:a,attachments:[],width:n,height:r};return t.forEach(function(t,a){let c=t.attachment,l=t.samples,u=t.format,d=t.attachmentPoint||No(u,t.internalFormat);if(d||=Eo+a,Fo(d)&&o.push(d),!c)if(l!==void 0||Po(u))c=e.createRenderbuffer(),e.bindRenderbuffer(Y,c),l>1?e.renderbufferStorageMultisample(Y,l,u,n,r):e.renderbufferStorage(Y,u,n,r);else{let i=Object.assign({},t);i.width=n,i.height=r,i.auto===void 0&&(i.auto=!1,i.min=i.min||i.minMag||jo,i.mag=i.mag||i.minMag||jo,i.wrapS=i.wrapS||i.wrap||Ao,i.wrapT=i.wrapT||i.wrap||Ao),c=si(e,i)}if(tt(e,c))e.framebufferRenderbuffer(i,d,Y,c);else if(nt(e,c))t.layer===void 0?e.framebufferTexture2D(i,d,t.target||uo,c,t.level||0):e.framebufferTextureLayer(i,d,c,t.level||0,t.layer);else throw Error(`unknown attachment type`);s.attachments.push(c)}),e.drawBuffers&&e.drawBuffers(o),s}function Lo(e,t,n,r,i){r||=e.drawingBufferWidth,i||=e.drawingBufferHeight,t.width=r,t.height=i,n||=Mo,n.forEach(function(n,a){let o=t.attachments[a],s=n.format,c=n.samples;if(c!==void 0||tt(e,o))e.bindRenderbuffer(Y,o),c>1?e.renderbufferStorageMultisample(Y,c,s,r,i):e.renderbufferStorage(Y,s,r,i);else if(nt(e,o))ci(e,o,n,r,i);else throw Error(`unknown attachment type`)})}function Ro(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),t.length||(t=[t]),t.forEach(function(t){J(e,t,n)}),e.bindVertexArray(null),{numElements:n.numElements,elementType:n.elementType,vertexArrayObject:r}}var zo={addExtensionsToContext:!0},Bo=/^(.*?)_/;function Vo(e,t){Nt(e,0);let n=e.getExtension(t);if(n){let r={},i=Bo.exec(t)[1],a=`_`+i;for(let t in n){let o=n[t],s=typeof o==`function`,c=s?i:a,l=t;t.endsWith(c)&&(l=t.substring(0,t.length-c.length)),e[l]===void 0?s?e[l]=function(e){return function(){return e.apply(n,arguments)}}(o):(e[l]=o,r[l]=o):!s&&e[l]!==o&&$e(l,e[l],o,t)}r.constructor={name:n.constructor.name},Nt(r,0)}return n}var Ho=[`ANGLE_instanced_arrays`,`EXT_blend_minmax`,`EXT_color_buffer_float`,`EXT_color_buffer_half_float`,`EXT_disjoint_timer_query`,`EXT_disjoint_timer_query_webgl2`,`EXT_frag_depth`,`EXT_sRGB`,`EXT_shader_texture_lod`,`EXT_texture_filter_anisotropic`,`OES_element_index_uint`,`OES_standard_derivatives`,`OES_texture_float`,`OES_texture_float_linear`,`OES_texture_half_float`,`OES_texture_half_float_linear`,`OES_vertex_array_object`,`WEBGL_color_buffer_float`,`WEBGL_compressed_texture_atc`,`WEBGL_compressed_texture_etc1`,`WEBGL_compressed_texture_pvrtc`,`WEBGL_compressed_texture_s3tc`,`WEBGL_compressed_texture_s3tc_srgb`,`WEBGL_depth_texture`,`WEBGL_draw_buffers`];function Uo(e){for(let t=0;t<Ho.length;++t)Vo(e,Ho[t])}function Wo(e,t){let n=[`webgl2`,`webgl`,`experimental-webgl`],r=null;for(let i=0;i<n.length;++i)if(r=e.getContext(n[i],t),r){zo.addExtensionsToContext&&Uo(r);break}return r}function Go(e,t){return Wo(e,t)}function Ko(e,t,n,r,a=!1){let o=i(e)?e:e.name,s=!i(e)&&e.extent||[0,1];if(n===void 0&&!i(e)&&(n=e.count),o){let e=le(o);if(c(e)){let i=Xo(e,{extent:s,count:n,reverse:a});return Gs(t,{minMag:t.LINEAR,format:t.RGB,height:1,wrap:t.CLAMP_TO_EDGE},i,r)}else if(u(e))return Yo(a?Array.from(e).reverse():e,t,n,r);else throw Error(`Unknown scheme: `+o)}}function qo(e,t=`rgb`,n,r){let a=Xo(ue(e,i(t)?t:t.type,i(t)?void 0:t.gamma));return Gs(n,{minMag:n.LINEAR,format:n.RGB,height:1,wrap:n.CLAMP_TO_EDGE},a,r)}function Jo(e,t,n,r){let i=Math.max(e.length,n||0),a=new Float32Array(i);for(let t=0;t<i;t++)a[t]=e[t%e.length];return Gs(t,{minMag:t.NEAREST,format:t.RED,internalFormat:t.R32F,height:1},a,r)}function Yo(e,t,n,r){let i=Zo(e,n);return Gs(t,{minMag:t.NEAREST,format:t.RGB,height:1},i,r)}function Xo(e,{extent:t=[0,1],reverse:n=!1,count:r=256}={}){let i=t[0],a=ae(t)-i,o=ne(r).map(e=>e/(r-1)).map(e=>i+e/a).map(e);return n&&o.reverse(),Zo(o)}function Zo(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*3);for(let t=0;t<n;t++){let n=e[t%e.length],i=g(n);if(!i)throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);let a=i.rgb();r[t*3+0]=a.r,r[t*3+1]=a.g,r[t*3+2]=a.b}return r}function Qo(e){let t=g(e).rgb();return[t.r,t.g,t.b].map(e=>e/255)}var $o=`attr_`,es=`uDomain_`,ts=`range_`,ns=`accessor_`,rs=`scale_`,is=`getScaled_`,as=`uRangeTexture_`,Q=`uParam_`,os=`checkSelection_`,ss=`isSelectionMember_`,cs=`isSelectionEmpty_`;function ls(e){let t=e.match(/^(?:(\w+)-)?(\w+)$/);if(!t)throw Error(`Not a scale type: `+e);return{family:t[1]||`continuous`,transform:t[2]}}function us(e){return e.type===`quantize`?e.thresholds():e.domain()}function ds(e){return e.type===`quantize`?e.range().length:e.type===`threshold`?e.domain().length+1:e.domain().length}function fs(e,t){return`${ns}${e}_${t}`}function ps(e,t,r){let a;if(b(e))a=$(S(e)(r));else if(i(r))if(_(e))a=Ss(r);else throw Error(`String values are not supported on the "${e}" channel: ${r}`);else if(n(r))a=$(+!!r);else if(r===null)if(_(e))a=$([0,0,0]);else throw Error(`null value is not supported on the "${e}" chanel.`);else a=$(r);let o=fs(e,t);return{channel:e,accessorGlsl:`
${a.type} ${o}() {
    // Constant value
    return ${a};
}`,accessorFunctionName:o}}function ms(e,t){let n=`float`,r=e=>e;_(e)?(n=`vec3`,r=e=>Qo(e)):b(e)&&(r=S(e));let i=`u${Ms(e)}_${t}`,a=`    // Dynamic value\n    uniform ${n} ${i};`,o=fs(e,t);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${n} ${o}() {
    // Dynamic value
    return ${i};
}`,accessorFunctionName:o,adjuster:r}}function hs(e,t,n,r=[e]){let{attributeType:i}=Ts(t,e),a=js(r),o=`in highp ${i} ${a};`,s=fs(e,n);return{channel:e,attributeName:a,attributeGlsl:o,accessorGlsl:`
${i} ${s}() {
    return ${a};
}`,accessorFunctionName:s}}function gs(e,t,n){let{attributeType:r}=Ts(t,e),i=js(e),a=`    uniform highp ${r} ${i};`,o=fs(e,n);return{channel:e,uniformName:i,uniformGlsl:a,accessorGlsl:`
${r} ${o}() {
    return ${i};
}`,accessorFunctionName:o}}function _s(e,t,n){t??=me();let r=oe(e),i=es+r,a=ts+r,{hp:o,attributeType:s}=Ts(t,e),c=t.domain?C(t.type)?us(t).length:t.domain().length:void 0,l,u=[];u.push(``),u.push(`/`.repeat(70)),u.push(`// Channel: ${e}`),u.push(``);let{transform:f}=ls(t.type),p=(e,...t)=>ws.apply(null,[e,`value`,...t]),h;switch(f){case`linear`:h=p(`scaleLinear`,`domain`,a);break;case`log`:h=p(`scaleLog`,`domain`,a,t.base());break;case`symlog`:h=p(`scaleSymlog`,`domain`,a,t.constant());break;case`pow`:case`sqrt`:h=p(`scalePow`,`domain`,a,t.exponent());break;case`index`:case`locus`:h=p(`scaleBandHp`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`point`:case`band`:h=p(`scaleBand`,`domain`,a,t.paddingInner(),t.paddingOuter(),t.align(),n.band??.5);break;case`ordinal`:case`null`:case`identity`:h=p(`scaleIdentity`);break;case`threshold`:case`quantize`:break;default:throw Error(`Unsupported scale type: ${t.type}! ${e}: ${JSON.stringify(n)}`)}let g=Ns(t,e),v;if(g&&e==r){let e=t.props.range??[];if(m(e)||e.some(m)){if(g.length<1||g.length>4)throw Error(`A range with ExprRefs must have 1-4 elements, not ${g.length}! Range: ${JSON.stringify(g)}`);v=`    uniform ${bs(g.length)} ${a};`}else if(g.length&&g.every(d)){let e=Cs(g);u.push(`const ${e.type} ${a} = ${e};`)}}let ee=xs(e),y;if(_(e)){let n=as+r;if(e==r&&u.push(`uniform sampler2D ${n};`),w(t.type))y=`getInterpolatedColor(${n}, transformed)`;else if(pe(t.type)||C(t.type))y=`getDiscreteColor(${n}, int(transformed))`;else throw Error(`Problem with color scale!`)}else if(t.type===`ordinal`||C(t.type)){let t=as+r;e==r&&u.push(`uniform sampler2D ${t};`),y=`getDiscreteColor(${t}, int(transformed)).r`}let b=[],x=w(t.type)&&c>2,te=C(t.type)||x;if(b.push(`int slot = 0;`),te){let e=i;b.push(x?`while (slot < ${e}.length() - 2 && value >= ${e}[slot + 1]) { slot++; }`:`while (slot < ${e}.length() && value >= ${e}[slot]) { slot++; }`)}let ne=w(t.type)||C(t.type)||[`band`,`point`].includes(t.type);if(h){let e=i;ne&&(o?b.push(`vec3 domain = ${e};`):b.push(`vec2 domain = vec2(${e}[slot], ${e}[slot + 1]);`)),b.push(`float transformed = ${h};`),x&&b.push(`transformed = (float(slot) + transformed) / (float(${e}.length() - 1));`)}else b.push(`float transformed = float(slot);`);`clamp`in t&&t.clamp()&&b.push(`transformed = clampToRange(transformed, ${Cs(g)});`),b.push(`return ${y??`transformed`};`),u.push(`
${ee} ${rs}${e}(${s} value) {
${b.map(e=>`    ${e}\n`).join(``)}
}`);let re=u.join(`
`);if(ne&&e==r){let e=w(t.type)||C(t.type)?c:2;l=o?`    highp vec3 ${i};`:`    mediump float ${i}[${e}];`}return{glsl:re,domainUniformName:i,domainUniform:l,rangeUniformName:a,rangeUniform:v}}function vs(e,t){let n=xs(e),r=[],i=[];for(let n=0;n<t.length;n++){let{accessor:a,predicate:o}=t[n],s=fs(e,n),{selection:c}=o;if(c&&!c.singleParam){let e=c.empty,t=c.params.map(e=>`${ss}${e}()`),n=c.params.map(e=>`${cs}${e}()`);r.push(`(${t.join(` || `)}${e?` || (${n.join(` && `)})`:``})`)}else r.push(c?`${os}${c.params[0]}(${c.empty})`:null);i.push(a.scaleChannel?`return ${rs}${e}(${s}());`:`return ${s}();`)}return`${n} ${is}${e}() {
${Ps(r,i)}
}

#define ${e}_DEFINED`}function ys(e){if(!d(e))throw Error(`Not a number: ${e}`);if(e==1/0)return`3.402823466e+38`;if(e==-1/0)return`-3.402823466e+38`;{let t=`${e}`;return/^(-)?\d+$/.test(t)&&(t+=`.0`),t}}function $(e){typeof e==`number`&&(e=[e]);let t=e.length;if(t<1||t>4)throw Error(`Invalid number of components: `+t);let n=bs(t),r=`${n}(${e.map(ys).join(`, `)})`;return Object.assign(r,{type:n,numComponents:t})}function bs(e){switch(e){case 1:return`float`;case 2:return`vec2`;case 3:return`vec3`;case 4:return`vec4`;default:throw Error(`Invalid number of components: `+e)}}function xs(e){return _(e)?`vec3`:e==`uniqueId`?`uint`:`float`}function Ss(e){return $(Qo(e))}function Cs(e){return $([e[0],ae(e)])}function ws(e,...t){let n=[];for(let e of t)d(e)?n.push(ys(e)):u(e)?n.push($(e)):n.push(e);return`${e}(${n.join(`, `)})`}function Ts(e,t){let n=e&&pe(e.type),r=e&&ve(e.type),i=r&&_e(e.domain()),a=i?{attributeType:`uvec2`,arrayConstructor:Uint32Array}:r?{attributeType:`uint`,arrayConstructor:Uint32Array}:n?{attributeType:`uint`,arrayConstructor:Uint16Array}:t==`uniqueId`?{attributeType:`uint`,arrayConstructor:Uint32Array}:{attributeType:`float`,arrayConstructor:Float32Array};return Object.assign(a,{numComponents:+(a.attributeType.match(/^(?:u)?vec([234])$/)?.[1]??1),discrete:n,hp:r,largeHp:i})}var Es=2**12;Es-1;function Ds(e,t=[]){let n=e%Es;return t[0]=(e-n)/Es,t[1]=n,t}function Os(e){let t=e%Es;return[e-t,t]}function ks(e){return[...Os(e[0]),e[1]-e[0]]}function As(e){let t=new de([],JSON.stringify);for(let[n,r]of Object.entries(e)){let e=r.channelDef;if(v(e)){let i=[e.field,r.scale?(w(r.scale.type)||C(r.scale.type))??!1:!1];t.set(i,[...t.get(i)??[],n])}}return t}function js(e){return $o+f(e).toSorted().join(`_`)}function Ms(e){return e[0].toUpperCase()+e.slice(1)}var Ns=(e,t)=>fe(e.type)||w(e.type)&&_(t)?[0,1]:e.range?e.range():void 0;function Ps(e,t){if(e.length!=t.length)throw Error(`Unequal array lengths`);let n=e.length;if(n==0)return``;if(n==1&&e[0]==null)return t[0];let r=[];for(let i=0;i<n;i++){let a=e[i],o=i==0?`if (${a})`:a==null&&i==n-1?`else`:`else if (${a})`;r.push(`    ${o} {
        ${t[i]}
    }`)}return r.join(`
`)}var Fs=4294967295,Is=4294967295;function Ls(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Rs(e,t={}){let n=Array.from(e,e=>Bs(e,`key`)),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??Vs(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a);o.fill(Fs);let s=a-1;for(let e of n){if(e===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let t=Ls(e)&s,n=!1;for(let r=0;r<a;r+=1){let r=o[t];if(r===4294967295||r===e){o[t]=e,n=!0;break}t=t+1&s}if(!n)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function zs(e,t){if(!Number.isSafeInteger(e)||e<1)throw Error(`capacity must be a positive integer.`);if(e&e-1)throw Error(`capacity must be a power of two.`);if(!Number.isSafeInteger(t)||t<1)throw Error(`maxTextureSize must be a positive integer.`);if(e>t*t)throw Error(`Selection hash table exceeds maximum texture capacity.`);let n=1<<Math.floor(Math.log2(t)),r=Math.min(e,n),i=e/r;if(i>t)throw Error(`Selection hash table dimensions exceed maximum texture size.`);return{width:r,height:i}}function Bs(e,t){if(!Number.isSafeInteger(e)||e<0||e>Is)throw Error(t+` must be a non-negative u32.`);return e>>>0}function Vs(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var Hs=class{#e=!1;#t=()=>{};_ownedTextures=new Set;_placementDisposers=new Set;constructor(e,t,n={},r){let i=t??(()=>({width:void 0,height:void 0}));this._canvasSizeHelper=void 0,this._appliedCanvasSize=void 0,this._onCanvasResize=r??(()=>{}),this._shaderCache=new Map,this.rangeTextures=new WeakMap,this.placementTextures=new WeakMap,this.selectionTextures=new WeakMap;let a=document.createElement(`canvas`),o=Go(a,{antialias:!0,depth:!1,premultipliedAlpha:!0,...n});if(!o)throw Error(`Unable to initialize WebGL. Your browser or machine may not support it.`);if(!Mt(o))throw Error(`Your web browser does not support WebGL 2.0. Chrome, Firefox, and Safari Tech Preview should work.`);Uo(o);let s=o.getExtension(`WEBGL_provoking_vertex`);s&&s.provokingVertexWEBGL(s.FIRST_VERTEX_CONVENTION_WEBGL),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),this.canvas=a,this.gl=o,this._pickingAttachmentOptions=[{format:o.RGBA,type:o.UNSIGNED_BYTE,minMag:o.LINEAR,wrap:o.CLAMP_TO_EDGE}],this._pickingBufferInfo=Io(o,this._pickingAttachmentOptions),o.bindFramebuffer(o.FRAMEBUFFER,null),e.appendChild(a);try{this._canvasSizeHelper=new Ee(e,a,i,()=>{this.adjustGl()&&this._onCanvasResize()}),this.adjustGl()}catch(e){throw this._canvasSizeHelper?.finalize(),a.remove(),e}}getPlacementTexture(e){let t=e.getSnapshot(),n=this.placementTextures.get(e);if(n?.geometryRevision===t.geometryRevision)return n.texture;let r=n?.data.length===t.rectangles.length/2?n.data:new Float32Array(t.rectangles.length/2);for(let e=0;e<t.rectangles.length/4;e++)r[e*2]=t.rectangles[e*4+1],r[e*2+1]=t.rectangles[e*4+3];let i=Gs(this.gl,{internalFormat:this.gl.RG32F,format:this.gl.RG,height:1},r,n?.texture);if(this.placementTextures.set(e,{texture:i,geometryRevision:t.geometryRevision,data:r}),this._ownedTextures.add(i),!n){let t;t=e.onDispose(()=>{this._placementDisposers.delete(t);let n=this.placementTextures.get(e);n&&(this._ownedTextures.delete(n.texture)&&this.gl.deleteTexture(n.texture),this.placementTextures.delete(e))}),this._placementDisposers.add(t)}return i}invalidateSize(){return this._canvasSizeHelper.invalidate(),this.adjustGl()}compileShader(e,t){u(t)&&(t=t.join(`

`));let n=this.gl,r=t.replaceAll(/ {2,}|^\s*\/\/.*$/gm,``),i=this._shaderCache.get(r);if(!i){let a=[`#version 300 es`,`precision mediump float;`,t].join(`

`);i=n.createShader(e),n.shaderSource(i,a),n.compileShader(i),this._shaderCache.set(r,i)}return i}adjustGl(){let e=this.getLogicalCanvasSize(),t=this.getPhysicalCanvasSize(e);return this._appliedCanvasSize&&this._appliedCanvasSize.logicalWidth==e.width&&this._appliedCanvasSize.logicalHeight==e.height&&this._appliedCanvasSize.physicalWidth==t.width&&this._appliedCanvasSize.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,Lo(this.gl,this._pickingBufferInfo,this._pickingAttachmentOptions),this._appliedCanvasSize={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},!0)}finalize(){if(!this.#e){this.#e=!0,this.#t();for(let e of this._placementDisposers)e();this._placementDisposers.clear();for(let e of this._ownedTextures)this.gl.deleteTexture(e);this._ownedTextures.clear();for(let e of this._shaderCache.values())this.gl.deleteShader(e);this._shaderCache.clear();for(let e of this._pickingBufferInfo.attachments)this.gl.deleteTexture(e);this.gl.deleteFramebuffer(this._pickingBufferInfo.framebuffer),this._canvasSizeHelper.finalize(),this.canvas.remove()}}setResourceFinalizer(e){this.#t=e}getPhysicalCanvasSize(e){return this._canvasSizeHelper.getPhysicalCanvasSize(e)}getDevicePixelRatio(e){return this._canvasSizeHelper.getDevicePixelRatio(e)}getLogicalCanvasSize(){return this._canvasSizeHelper.getLogicalCanvasSize()}createRangeTexture(e,t=!1){let n=this.rangeTextures.get(e.getScale());if(!t&&n)return;function r(e,t){return pe(t.type)?t.domain().length:t.type==`threshold`||t.type==`quantize`?ds(t):t.type==`quantile`?e??4:e}let a=e.channel;if(_(a)){let t=e.getScale(),a=t.props,o=t.range(),s;if(a.scheme)if(pe(t.type)||C(t.type))s=Yo(o,this.gl,ds(t),n);else{let e=i(a.scheme)?void 0:a.scheme.count;e=r(e,t),s=Ko(a.scheme,this.gl,e,n,!!a.reverse)}else s=fe(t.type)||w(t.type)&&o.length>1?qo(o,a.interpolate,this.gl,n):Yo(o,this.gl,C(t.type)?ds(t):t.domain().length,n);this.rangeTextures.set(t,s),this._ownedTextures.add(s)}else{let t=e.getScale();if(t.type===`ordinal`||C(t.type)){let e=b(a)?S(a):e=>e,r=Jo(t.range().map(e),this.gl,C(t.type)?ds(t):t.domain().length,n);this.rangeTextures.set(t,r),this._ownedTextures.add(r)}}}createSelectionTexture(e,t=!0){if(!o(e))throw Error(`Not a multi-point selection, cannot create texture`);let{table:n,capacity:r}=Rs(e.data.keys()),{width:i,height:a}=zs(r,this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),s=this.selectionTextures.get(e),c=this.gl,l=Gs(this.gl,{auto:!1,level:0,min:c.NEAREST,mag:c.NEAREST,format:c.RED_INTEGER,internalFormat:c.R32UI,width:i,height:a},n,t?s:!1);c.bindTexture(c.TEXTURE_2D,l),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_BASE_LEVEL,0),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAX_LEVEL,0),c.bindTexture(c.TEXTURE_2D,null),this.selectionTextures.set(e,l),this._ownedTextures.add(l)}};function Us(e,t=``,n=0){let r=[...t.matchAll(/ERROR:\s*\d+:(\d+)/gi)],i=new Map(r.map((e,n)=>{let i=parseInt(e[1]),a=r[n+1],o=a?a.index:t.length,s=t.substring(e.index,o);return[i-1,s]}));return e.split(`
`).map((e,t)=>{let r=i.get(t);return`${t+1+n}: ${e}${r?`\n\n^^^ ${r}`:``}`}).join(`
`)}function Ws(e,t,n){let r=e.createProgram();e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r);function i(){let i,a;if(!e.getProgramParameter(r,e.LINK_STATUS)){i=e.getProgramInfoLog(r);for(let r of[t,n])e.getShaderParameter(r,e.COMPILE_STATUS)||(i=e.getShaderInfoLog(r),a=Us(e.getShaderSource(r),i,0)+`\nError compiling: ${i}`,e.deleteShader(r));e.deleteProgram(r)}if(i)return{message:i,detail:a}}return{program:r,getProgramErrors:i}}function Gs(e,t,n,r){return r?ai(e,r,n,t):r=si(e,{...t,src:n}),r}function Ks(e,t,n,r){let{height:i,framebuffer:a}=t,o=new Uint8Array(4);return e.bindFramebuffer(e.FRAMEBUFFER,a),e.readPixels(n,i-r-1,1,1,e.RGBA,e.UNSIGNED_BYTE,o),e.bindFramebuffer(e.FRAMEBUFFER,null),o}var qs=class extends Se{#e=[0,0,0,0];#t;#n=[];#r;#i;#a;#o=new Set;#s=new Set;#c;#l=void 0;#u=1;#d={width:0,height:0};#f;constructor(e,t){if(super(e),this.#i=t.webGLHelper,this.#a=t.markAdapter,this.#r=t.framebufferInfo,this.#u=t.devicePixelRatio,this.#d=t.canvasSize,this.#c=t.markPredicate??(()=>!0),this.#f=t.pixelOffset,t.clearColor){let e=g(t.clearColor).rgb();this.#e=[e.r/255,e.g/255,e.b/255,e.opacity]}}getDevicePixelRatio(){return this.#u}pushView(e,t){this.#s.add(e),this.#l=t}renderMark(e,t){if(!this.#c(e)||this.globalOptions.picking&&!e.isPickingParticipant())return;let n=te(t);this.#n.push({mark:e,options:t,coords:this.#l,placement:t.placement,clip:ie(n,e.properties.clip,this.#l),cullClip:n})}render(){if(this.finish(),this.#a.synchronize(this.#o),this.#t.length==0)return;let e=this.#i.gl,t=this.#r;t?(e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer),e.viewport(0,0,t.width,t.height)):e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.disable(e.SCISSOR_TEST),e.clearColor(...this.#e),e.clear(e.COLOR_BUFFER_BIT);for(let e of this.#s)e.onBeforeRender();for(let e of this.#t)e();this.#r&&e.bindFramebuffer(e.FRAMEBUFFER,null)}finish(){if(!this.#t){let e=this.#n.map(e=>e.mark);this.#a.prepareMarks(e),this.#a.synchronize(e.map(e=>this.#a.getMarkEntry(e)).filter(e=>e)),this.#p()}}#p(){this.#t=[];let e=!0,t=!0,n=!1,r=t=>()=>{e&&t()},i=n=>()=>{e&&t&&n()},a=he(this.#n.reverse(),e=>e.mark);for(let[o,s]of[...a.entries()].reverse()){let a=this.#a.getMarkEntry(o);if(!a)continue;let c=a.graphics;if(!this.#a.isEntryDrawable(a))continue;this.#o.add(a);let l=o.getOrder?.(),u=s.map(e=>({...e,callback:c.render(l?{...e.options,orderPass:`all`}:e.options),orderCallbacks:l&&!this.globalOptions.picking?l.passes.map((t,n)=>c.render({...e.options,orderPass:t,secondOrderPass:n===1})):void 0})).filter(e=>e.callback);if(u.length==0)continue;let d=u[0].placement,f=d?{...this.globalOptions,placement:d}:this.globalOptions,p=c.prepareRender(f).map(e=>r(e));this.#t.push(()=>{e=this.#a.isEntryDrawable(a)&&o.unitView.getEffectiveOpacity()>0,t=!0,n=!!l&&!this.globalOptions.picking&&l.isActive()}),this.#t.push(...p);let m,h,g;for(let e of u){let a=e.coords;(!a.equals(m)||!x(e.clip,h)||!x(e.cullClip,g))&&this.#t.push(r(()=>{t=c.setViewport(this.#d,this.#u,a,e.clip,e.cullClip,this.#f)}));let{callback:o,orderCallbacks:s}=e,l=s?()=>{if(n)for(let e of s)e();else o()}:o;this.#t.push(i(l)),m=e.coords,h=e.clip,g=e.cullClip}}}},Js=class extends Se{constructor(...e){super({}),this.contexts=e}beginSampleFacetBatch(){for(let e of this.contexts)e.beginSampleFacetBatch()}endSampleFacetBatch(){for(let e of this.contexts)e.endSampleFacetBatch()}pushView(e,t){for(let n of this.contexts)n.pushView(e,t)}popView(e){for(let t of this.contexts)t.popView(e)}renderMark(e,t){for(let n of this.contexts)n.renderMark(e,t)}},Ys=class{#e;#t;#n;#r;#i;#a;#o;#s;#c;constructor({viewRoot:e,glHelper:t,markAdapter:n,getBackground:r,broadcast:i,onLayoutComputed:a}){this.#e=e,this.#t=t,this.#n=n,this.#r=r,this.#i=i,this.#a=a,this.#o=void 0,this.#s=void 0,this.#c=!1}computeLayout(){if(!this.#e)return;this.#i(`layout`),this.#t.invalidateSize();let e=5;for(;;){let t=this.#l();if(!t)return;if(!this.#t.invalidateSize()){this.#u(t),this.#a(),this.#i(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}#l(){let e=this.#e,t=this.#t.getLogicalCanvasSize();if(isNaN(t.width)||isNaN(t.height))return console.log(`NaN in canvas size: ${t.width}x${t.height}. Skipping computeLayout().`),!1;let n=this.#t.getDevicePixelRatio(t);return{layoutResult:Te(`layout`,()=>Ce(e,xe.create(0,0,t.width,t.height),{devicePixelRatio:n})),canvasSize:t,devicePixelRatio:n}}#u({layoutResult:e,canvasSize:t,devicePixelRatio:n}){let r={webGLHelper:this.#t,markAdapter:this.#n,canvasSize:t,devicePixelRatio:n},i=new qs({picking:!1},{...r,clearColor:this.#r()}),a=new qs({picking:!0},{...r,framebufferInfo:this.#t._pickingBufferInfo});Te(`layoutReplay`,()=>e.collectRenderCommands(new Js(i,a))),i.finish(),a.finish(),this.#o=i,this.#s=a}renderAll(){let e=we();e?.beginFrame(`webgl`),Te(`render`,()=>this.#o?.render()),this.#c=!0,e?.endFrame()}renderPickingFramebuffer(){if(!this.#c)return;let e=we();e?.beginFrame(`webgl`,`picking`),Te(`picking`,()=>this.#s.render()),this.#c=!1,e?.endFrame()}};function Xs(e,t,n={}){let r=n.x??0,i=n.y??0,a=n.width??t.width,o=n.height??t.height;tc(t,r,i,a,o);let s=new Uint8Array(a*o*4);e.bindFramebuffer(e.FRAMEBUFFER,t.framebuffer);try{e.readPixels(r,t.height-i-o,a,o,e.RGBA,e.UNSIGNED_BYTE,s)}finally{e.bindFramebuffer(e.FRAMEBUFFER,null)}return{pixels:ec(s,a,o,n.unpremultiplyAlpha??!1),width:a,height:o}}function Zs(e,t,n=`image/png`,r={}){return $s(e,t,r).toDataURL(n)}function Qs(e,t,n=`image/png`,r={}){let i=$s(e,t,r);return new Promise((e,t)=>{i.toBlob(r=>{r?e(r):t(Error(`Could not encode framebuffer as ${n}.`))},n)})}function $s(e,t,n){let{pixels:r,width:i,height:a}=Xs(e,t,n),o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`),c=s.createImageData(i,a);return c.data.set(r),s.putImageData(c,0,0),o}function ec(e,t,n,r){let i=new Uint8ClampedArray(e.length),a=t*4;for(let t=0;t<n;t++){let r=(n-t-1)*a,o=t*a;i.set(e.subarray(r,r+a),o)}if(r)for(let e=0;e<i.length;e+=4){let t=i[e+3];if(t==0)i[e]=0,i[e+1]=0,i[e+2]=0;else if(t<255){let n=255/t;i[e]=Math.round(i[e]*n),i[e+1]=Math.round(i[e+1]*n),i[e+2]=Math.round(i[e+2]*n)}}return i}function tc(e,t,n,r,i){if(![t,n,r,i].every(Number.isInteger))throw RangeError(`Framebuffer readback bounds must be integers.`);if(t<0||n<0||r<=0||i<=0||t+r>e.width||n+i>e.height)throw RangeError(`Framebuffer readback bounds are out of range.`)}function nc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,devicePixelRatio:a,clearColor:o=`white`}){let{gl:s,framebufferInfo:c}=ic({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return Zs(s,c,`image/png`)}finally{ac(s,c)}}async function rc({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o=`white`,mimeType:s=`image/png`}){if(s!=`image/png`)throw Error(`Unsupported raster export MIME type: ${s}`);let{gl:c,framebufferInfo:l}=ic({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o});try{return await Qs(c,l,s)}finally{ac(c,l)}}function ic({glHelper:e,markAdapter:t,viewRoot:n,logicalWidth:r,logicalHeight:i,pixelRatio:a,clearColor:o}){r??=e.getLogicalCanvasSize().width,i??=e.getLogicalCanvasSize().height,a??=window.devicePixelRatio??1;let s=e.gl,c=Math.floor(r*a),l=Math.floor(i*a),u=Io(s,[{format:s.RGBA,type:s.UNSIGNED_BYTE,minMag:s.LINEAR,wrap:s.CLAMP_TO_EDGE}],c,l),d;try{d=Io(s,[{format:s.RGBA8,samples:Math.min(4,s.getParameter(s.MAX_SAMPLES))}],c,l);let f=new qs({picking:!1},{webGLHelper:e,markAdapter:t,canvasSize:{width:r,height:i},devicePixelRatio:a,clearColor:o,framebufferInfo:d});return Ce(n,xe.create(0,0,r,i),{devicePixelRatio:a}).collectRenderCommands(f),f.finish(),f.render(),s.disable(s.SCISSOR_TEST),s.bindFramebuffer(s.READ_FRAMEBUFFER,d.framebuffer),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,u.framebuffer),s.blitFramebuffer(0,0,c,l,0,0,c,l,s.COLOR_BUFFER_BIT,s.NEAREST),{gl:s,framebufferInfo:u}}catch(e){throw ac(s,u),e}finally{d&&(s.deleteRenderbuffer(d.attachments[0]),s.deleteFramebuffer(d.framebuffer))}}function ac(e,t){e.deleteTexture(t.attachments[0]),e.deleteFramebuffer(t.framebuffer)}var oc=`flat out lowp vec4 vFillColor;
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
`,sc=`in vec2 vPosInPixels;

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
`,cc=`layout(std140) uniform Mark {
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
`,lc=1e4,uc=class{#e=!1;constructor(e){this.size=e,this.arrays={},this.pushers=[],this.dataUpdaters=[],this.vertexCount=0}configure(){if(this.#e)throw Error(`Already configured!`);this.#t(),this.#n(),this.#e=!0}addConverter(e,t){let n=this.createUpdater(e,t.numComponents||1,t.targetArrayType??Float32Array,t.arrayReference),r=t.f;this.dataUpdaters.push((t.arrayReference,e=>n(r(e))))}createUpdater(e,t,n=Float32Array,r=void 0){if(!d(this.size))throw Error(`The number of vertices must be defined!`);let i,a,o=0,s=new n(this.size*t);if(this.arrays[e]={data:s,numComponents:t},t==1){let e=0;i=()=>{s[o++]=e},a=t=>{e=+t}}else{let e=r??[0],n=r?e=>{}:t=>{e=t};switch(t){case 1:break;case 2:i=()=>{s[o++]=e[0],s[o++]=e[1]},a=n;break;case 3:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2]},a=n;break;case 4:i=()=>{s[o++]=e[0],s[o++]=e[1],s[o++]=e[2],s[o++]=e[3]},a=n;break;default:throw Error(`Invalid numComponents: `+t)}}return this.pushers.push(i),a}pushAll(){throw Error(`Call configure() first!`)}updateFromDatum(e){throw Error(`Call configure() first!`)}#t(){if(this.size>lc){let e=this.pushers.map((e,t)=>`const p${t} = that.pushers[${t}];`).join(`
`),t=this.pushers.map((e,t)=>`  p${t}();`).join(`
`);this.pushAll=Function(`that`,`${e}
return function unrolledPushAll() {
${t}
  that.vertexCount++;
};`)(this)}else this.pushAll=()=>{for(let e=0;e<this.pushers.length;e++)this.pushers[e]();this.vertexCount++}}#n(){if(this.size>lc){let e=this.dataUpdaters.map((e,t)=>`const u${t} = that.dataUpdaters[${t}];`).join(`
`),t=this.dataUpdaters.map((e,t)=>`  u${t}(datum);`).join(`
`);this.updateFromDatum=Function(`that`,`datum`,`${e}
return function unrolledUpdateFromDatum(datum) {
${t}
};`)(this)}else this.updateFromDatum=e=>{for(let t=0;t<this.dataUpdaters.length;t++)this.dataUpdaters[t](e)}}pushFromDatum(e){this.updateFromDatum(e),this.pushAll()}},dc=2**31-1,fc=-(2**31);function pc(e,t,n,r=n,i=0,o=i){if(o<=i||t[1]<=t[0])return;let s=n===r,c=Array(e);c.fill(dc);let l=Array(e);l.fill(0);let u=t[0],d=(t[1]-t[0])/e,f=(t,n)=>{let r=(t-u)/d,i=Math.floor(r);return a(n&&i==r?i-1:i,0,e-1)},p=fc,m=-1/0,h=!1,g=(e,t,n=[0,0])=>{let r=f(e,!1),i=f(t,!0),a=c[r],o=Math.max(l[i],a);return n[0]=a,n[1]=o,n};for(let e=i;e<o;){let t=e,i=n(e),a=r(e);for(e+=1;e<o&&n(e)===i&&r(e)===a;)e+=1;if(t>p)p=t;else{h=!0;break}if(i<m||!s&&a<i){h=!0;break}m=i;let u=f(i,!1),d=s?u:f(a,!0);for(let n=u;n<=d;n++)c[n]>t&&(c[n]=t),l[n]<e&&(l[n]=e)}if(h)return;for(let e=1;e<l.length;e++)l[e]<l[e-1]&&(l[e]=l[e-1]);let _=!0;for(let e=c.length-1;e>0;e--)_&&c[e]==dc?(c[e]=l[e],_=!1):c[e-1]>c[e]&&(c[e-1]=c[e]);return g}var mc=class{constructor({encoders:e,numVertices:t=void 0,attributes:n=[]}){this.encoders=e,this.variableEncoders=Object.fromEntries(Object.entries(e).filter(([e,t])=>n.includes(e)&&t&&!t.constant));let r=[...As(e).entries()].filter(([e,t])=>e[1]&&t.length>1).map(([e,t])=>t);this.allocatedVertices=t,this.variableBuilder=new uc(t),this.attributeNames={};for(let[e,t]of Object.entries(this.variableEncoders)){let n=p(t);if(!n)continue;let i=r.find(t=>t.find(t=>t==e)),a=n.asNumberAccessor(),o=t.scale,{largeHp:s,arrayConstructor:c,discrete:l,numComponents:u}=Ts(o,e),d=[0,0],f;if(o&&l)if(`props`in o&&o.props.domainIndexer)f=o.props.domainIndexer;else if(`domain`in o)f=ge(),f.addAll(o.domain());else throw Error(`Missing domain indexer for discrete scale.`);let m=f?e=>f(n(e)):s?e=>Ds(a(e),d):a,h=js(i??e);for(let t of i??[e])this.attributeNames[t]=h;i&&e!=i[0]||this.variableBuilder.addConverter(h,{f:m,numComponents:u,arrayReference:s?d:void 0,targetArrayType:c})}let i=this.variableEncoders.x,a=this.variableEncoders.x2,o=this.encoders.x?.channelDef,s=i?.scale;if(o?.buildIndex&&i&&s&&w(s.type)){let e=this.attributeNames.x;if(!e)throw Error(`Missing x attribute for x indexing.`);let t=a?.scale&&w(a.scale.type)?this.attributeNames.x2??e:e;this.xIndexConfig={domain:[s.domain()[0],s.domain()[1]],xAttributeName:e,x2AttributeName:t}}else this.xIndexConfig=void 0;this.lastOffset=0,this.rangeMap=new de([],JSON.stringify)}registerBatch(e){let t=this.lastOffset,n=this.variableBuilder.vertexCount,r=n-t;r&&this.rangeMap.set(e,{offset:t,count:r,xIndex:this.createXIndex(t,n)}),this.lastOffset=n}addBatches(e){for(let[t,n]of e)this.addBatch(t,n)}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}createXIndex(e,t){let n=this.xIndexConfig;if(!n)return;let r=e=>{let{data:t,numComponents:n}=this.variableBuilder.arrays[e];return n==2?e=>{let r=e*n;return t[r]*Es+t[r+1]}:e=>t[e*n]},i=r(n.xAttributeName),a=n.x2AttributeName==n.xAttributeName?i:r(n.x2AttributeName);return pc(50,n.domain,i,a,e,t)}toArrays(){return{arrays:this.variableBuilder.arrays,vertexCount:this.variableBuilder.vertexCount,allocatedVertices:this.allocatedVertices,rangeMap:this.rangeMap}}},hc=class extends mc{constructor({encoders:e,attributes:t,numItems:n}){super({encoders:e,attributes:t,numVertices:n*6}),this.variableBuilder.configure();let r=this.variableBuilder.pushAll;this.pushAllSixTimes=n>500?Function(`pushAll`,`return function unrolledPushAllSixTimes() {
  pushAll(); pushAll(); pushAll(); pushAll(); pushAll(); pushAll();
};`)(r):function(){r(),r(),r(),r(),r(),r()}}addBatch(e,t,n=0,r=t.length){if(!(r<=n)){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.pushAllSixTimes()}this.registerBatch(e)}}},gc=class extends mc{constructor({encoders:e,attributes:t,tessellationThreshold:n=1/0,visibleRange:r=[-1/0,1/0],numItems:i}){super({encoders:e,attributes:t,numVertices:n==1/0?i*6:void 0}),this.visibleRange=r,this.tessellationThreshold=n||1/0,this.updateSide=this.variableBuilder.createUpdater(`side`,1),this.updatePos=this.variableBuilder.createUpdater(`pos`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.updateFromDatum(n),this.updateSide(-.5),this.updatePos(0),this.variableBuilder.pushAll();for(let e=0;e<=1;e++)this.updatePos(e/1),this.updateSide(-.5),this.variableBuilder.pushAll(),this.updateSide(.5),this.variableBuilder.pushAll();this.variableBuilder.pushAll()}this.registerBatch(e)}},_c=class extends mc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}},vc=class extends mc{constructor({encoders:e,attributes:t,numItems:n=void 0}){super({encoders:e,attributes:t,numVertices:n}),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){for(let e=n;e<r;e++){let n=t[e];this.variableBuilder.pushFromDatum(n)}this.registerBatch(e)}toArrays(){let e=this.variableBuilder.arrays;for(let t of Object.values(e))t.divisor=1;return super.toArrays()}},yc=class extends mc{constructor({encoders:e,attributes:t,fontMetrics:n,properties:r,numCharacters:i=void 0}){super({encoders:e,attributes:t,numVertices:i*6}),this.metadata=n,this.metrics=n,this.properties=r;let a=e.text.channelDef;this.numberFormat=!s(a)&&`format`in a&&a.format?y(a.format):e=>e,this.updateVertexCoord=this.variableBuilder.createUpdater(`vertexCoord`,2),this.updateTextureCoord=this.variableBuilder.createUpdater(`textureCoord`,2),this.updateWidth=this.variableBuilder.createUpdater(`width`,1),this.variableBuilder.configure()}addBatch(e,t,n=0,r=t.length){let a=this.properties.align||`left`,o=this.properties.logoLetters??!1,s=this.metadata.common.base,c=this.metadata.common.scaleH,l=-5;switch(this.properties.baseline){case`top`:l+=this.metrics.capHeight;break;case`middle`:l+=this.metrics.capHeight/2;break;case`bottom`:l-=this.metrics.descent;break;default:}let u=this.encoders.text,d=[0,0];this.updateVertexCoord(d);let f=[0,0];this.updateTextureCoord(f);for(let e=n;e<r;e++){let n=t[e],r=this.numberFormat(u(n)),p=i(r)?r:r===null?``:``+r;if(p.length==0)continue;this.variableBuilder.updateFromDatum(n);let m=o?p.length:this.metrics.measureWidth(p);this.updateWidth(m);let h=a==`right`?-m:a==`center`?-m/2:0;if(!o){let e=this.metrics.getCharByCode(p.charCodeAt(0));h-=(e.width-e.xadvance)/s/2}let g,_,v;for(let e=0;e<p.length;e++){let t=this.metrics.getCharByCode(p.charCodeAt(e)),n=o?1:t.xadvance/s;if(t.id==32){h+=n;continue}o?(v=(t.width+10)/t.width,h=-v/2,_=(t.height+10)/t.height,g=-.5-5/t.height):(_=t.height/s,g=-(t.height+t.yoffset+l)/s,v=t.width/s);let r=t.x,i=t.y;d[0]=h,d[1]=g+_,f[0]=r/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g+_,f[0]=(r+t.width)/c,f[1]=i/c,this.variableBuilder.pushAll(),d[0]=h,d[1]=g,f[0]=r/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),d[0]=h+v,d[1]=g,f[0]=(r+t.width)/c,f[1]=(i+t.height)/c,this.variableBuilder.pushAll(),h+=n}}this.registerBatch(e)}},bc=`#define PI 3.141593

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
`,xc=`uniform highp float uZero;

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
`,Sc=`
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
`,Cc=`/*
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
`,wc=`in highp vec4 vPickingColor;
`,Tc=`SAMPLE_FACET_UNIFORM`,Ec=`SAMPLE_FACET_TEXTURE`,Dc=`uSelectionTexture_`,Oc={all:0,matching:1,nonmatching:2},kc=class{#e=[];#t=!1;constructor(e,t,n){this.mark=e,this._glHelper=t,this._rendererResources=n,this.bufferInfo=void 0,this.bytesPerElement=new Map,this.programInfo=void 0,this.vertexArrayInfo=void 0,this.viewUniformInfo=void 0,this.markUniformInfo=void 0,this.markUniformsAltered=!0,this.selectionTextureOps=[],this.scaleResolutionDisposers=[],this.rangeMap=new Ac}get unitView(){return this.mark.unitView}get encoders(){return this.mark.encoders}get encoding(){return this.mark.encoding}get properties(){return this.mark.properties}get font(){return this.mark.font}get opaque(){return!1}get defaultHitTestMode(){return this.mark.defaultHitTestMode}getType(){return this.mark.getType()}getAttributes(){throw Error(`Not implemented.`)}initializeGraphics(){this.#n()}getSampleFacetMode(){if(this.encoders.facetIndex)return Ec;if(this.unitView.usesSampleFacetRendering())return Tc}createAndLinkShaders(n,i,a=[]){let c=this.getAttributes(),u=this.encoders,d=this.mark.getOrder(),f=this.getSampleFacetMode(),p=!!this.properties.cullByVisibleRange;f&&a.push(`#define ${f}`),p&&a.push(`#define VISIBLE_RANGE_CULLING`);let g=`// view: `+this.unitView.getPathString(),_=[],y=new Set,b=As(u),x=[],te=e(u),ne=new Set(te.keys());for(let e of d?.params??[])ne.add(e);let S=new Set(te.keys().filter(e=>te.get(e)));if(d&&!d.predicate.selection.singleParam)for(let e of d.params)S.add(e);d&&(a.push(`#define CONDITIONAL_ORDER`),x.push(`    // Conditional order pass`),x.push(`    uniform int uOrderMode;`));for(let e of ne){let n=this.unitView.paramRuntime,i=n.findValue(e);if(!i)throw Error(`Cannot infer selection type as the parameter "${e}" has no value. Please ensure that the parameter is properly defined!`);let a=js(`uniqueId`);if(l(i)){let n=Q+t(e);x.push(`    // Selection parameter`),x.push(`    uniform highp uint ${n};`),this.#e.push(()=>{this.registerMarkUniformValue(n,{expr:e},e=>e.uniqueId??0)}),_.push(`bool ${os}${e}(bool empty) {\n    return ${Q}${e} == ${a} || (empty && ${Q}${e} == 0u);\n}`),S.has(e)&&(_.push(`bool ${ss}${e}() {\n    return ${Q}${e} != 0u && ${Q}${e} == ${a};\n}`),_.push(`bool ${cs}${e}() {\n    return ${Q}${e} == 0u;\n}`))}else if(o(i)){let r=Dc+t(e);_.push(`// Selection texture\nuniform highp usampler2D ${r};`);let o=this.glHelper,s=o.selectionTextures;this.selectionTextureOps.push(()=>{let t=n.getValue(e),i=s.get(t);if(!i)throw Error(`Bug: no selection texture found for "${e}"!`);q(this.programInfo,{[r]:i})});let c=Dc+e;_.push(`bool ${os}${e}(bool empty) {\n   return hashContainsTexture(${c}, ${a}) || (empty && isEmptyHashTexture(${c}));\n}`),S.has(e)&&(_.push(`bool ${ss}${e}() {\n    return hashContainsTexture(${c}, ${a});\n}`),_.push(`bool ${cs}${e}() {\n    return isEmptyHashTexture(${c});\n}`)),o.createSelectionTexture(i),n.watchExpression(e,()=>{let t=n.getValue(e);o.createSelectionTexture(t),this.unitView.context.animator.requestRender()})}else if(r(i)){let n=Object.keys(i.intervals).filter(e=>[`x`,`y`].includes(e));if(n.length==0)throw new be(`Interval selection "${e}" has no supported x or y targets.`,this.unitView);let r=[],a=[];for(let i of n){let n=Q+t(e)+`_${i}`,{attributeType:o}=Ts(this.unitView.getScaleResolution(i).getScale(),i);x.push(`    // Selection parameter`),x.push(`    uniform highp ${o}[2] ${n};`),this.#e.push(()=>{this.registerMarkUniformValue(n,{expr:e},e=>e.intervals[i]??[1,0])});let s=e=>{for(let[t,n]of b.entries())if(t[1]&&n.includes(e))return js(n);return js(e)},c=s(i),l=n+`[0]`,u=n+`[1]`,d=h(i);if(this.encoding[d]){let e=s(d),t=this.defaultHitTestMode;if(t==`endpoints`)r.push(`((${l} <= ${c} && ${c} <= ${u}) || (${l} <= ${e} && ${e} <= ${u}))`);else if(t==`encloses`)r.push(`(${l} <= ${c} && ${e} <= ${u})`);else if(t==`intersects`)r.push(`(${l} <= ${e} && ${c} <= ${u})`);else throw new be(`Unsupported hit test mode "${t}" for interval selection!`,this.unitView)}else r.push(`(${l} <= ${c} && ${c} <= ${u})`);a.push(`${l} > ${u}`)}if(_.push(`bool ${os}${e}(bool empty) {\n    return ${r.join(` && `)} || (empty && (${a.join(` || `)}));\n}`),!S.has(e))continue;let o=r.map((e,t)=>`(${a[t]} || ${e})`);_.push(`bool ${ss}${e}() {\n    return (!(${a.join(` && `)})) && (${o.join(` && `)});\n}`),_.push(`bool ${cs}${e}() {\n    return ${a.join(` && `)};\n}`)}else throw new be(`Unsupported selection type "${i.type}" for WebGL conditional encoding.`,this.unitView)}let ie=(e,t,n,r)=>{let i=t.channelDef;if(s(i))if(m(i.value)){let{uniformName:t,uniformGlsl:r,accessorGlsl:a,adjuster:o}=ms(e,n);_.push(a),x.push(r),this.#e.push(()=>{this.registerMarkUniformValue(t,i.value,o)})}else _.push(ps(e,n,i.value).accessorGlsl);else if(re(i)){let{uniformName:t,uniformGlsl:a,accessorGlsl:o}=gs(e,r,n);x.push(a),_.push(o);let{largeHp:s,discrete:c}=Ts(r,e),l=c&&`domain`in r?e=>r.domain().indexOf(e):s?Ds:e=>+e;this.#e.push(()=>{this.registerMarkUniformValue(t,i.datum,l)})}else if(v(i)){let t=b.get([i.field,!0]),{attributeGlsl:a,accessorGlsl:o}=hs(e,r,n,t?.includes(e)?t:void 0);y.add(a),_.push(o)}else if(ee(i)){let{attributeGlsl:t,accessorGlsl:i}=hs(e,r,n);y.add(t),_.push(i)}else throw new be(`Unsupported channel definition: ${JSON.stringify(i)}`,this.unitView)};for(let[e,t]of Object.entries(u)){if(!c.includes(e))continue;let{branches:n,channelDef:r,scale:i}=t;for(let t=0;t<n.length;t++)ie(e,n[t].accessor,t,i);if(i){let t=se(r),n=t&&t.resolutionChannel||e,a=ce(n)?this.unitView.getScaleResolution(n):null,{glsl:o,domainUniform:s,domainUniformName:c,rangeUniform:l,rangeUniformName:u}=_s(e,i,r);_.push(o),x.push(s),x.push(l),l&&this.#e.push(()=>{let t=this.createMarkUniformSetter(u),n=()=>t(Ns(i,e));this.registerScaleResolutionListener(a,`range`,n),n()}),s&&this.#e.push(()=>{let e=this.createMarkUniformSetter(c),t=()=>{let t;t=pe(i.type)?[0,i.domain().length]:C(i.type)?us(i):i.domain(),e(ve(i.type)?ks(t):t)};this.registerScaleResolutionListener(a,`domain`,t),t()})}_.push(vs(e,n))}let ae=Array.from(te,([e,t])=>`${t?ss:os}${e}(${t?``:`false`})`);if(_.push(`bool isDatumSelected() {
`+(this.encoders.uniqueId&&ae.length>0?`    return ${ae.join(` || `)};`:`    return false;`)+`
}`),d){let e=d.params.map(e=>{let t=!d.predicate.selection.singleParam;return`${t?ss:os}${e}(${t?``:String(d.predicate.selection.empty)})`});_.push(`bool isOrderMatch() {
    return ${e.join(` || `)};\n}`)}let oe=`precision highp float;
precision highp int;`,le=e=>e.replace(`#pragma markUniforms`,x.join(`
`));a=a.map(le),n=le(n),i=le(i),n=(e=>e.replace(`#pragma orderGuard

`,d?`    if (uOrderMode != 0 &&
        (((uOrderMode & 3) == 1) != isOrderMatch())) {
        gl_Position = vec4(100.0, 0.0, 0.0, 0.0);
        return;
    }`:``))(n);let ue=[oe,g,...a,bc,xc,[...y].join(`
`),..._,Sc,Cc,n],de=[oe,g,...a,bc,wc,i],w=this.gl;this.programStatus=Ws(w,this.glHelper.compileShader(w.VERTEX_SHADER,ue),this.glHelper.compileShader(w.FRAGMENT_SHADER,de))}finalizeGraphicsInitialization(){if(this.#n(),this.programInfo)return;if(!this.programStatus)throw Error(`No program status found! `+this.unitView.getPathString());let e=this.programStatus.getProgramErrors();if(e){e.detail&&console.warn(e.detail);let t=Error(`Cannot create shader program: `+e.message);throw t.view=this.unitView,t}this.programInfo=ao(this.gl,this.programStatus.program),delete this.programStatus,this.viewUniformInfo=Qa(this.gl,this.programInfo,`View`),this.markUniformInfo=Qa(this.gl,this.programInfo,`Mark`),this.gl.useProgram(this.programInfo.program),q(this.programInfo,{uSampleFacet:[0,1],uZero:0});for(let e of this.#e)e();this.#e=void 0}createMarkUniformSetter(e){let t=this.markUniformInfo.setters[e];if(!t)throw Error(`Uniform "${e}" not found int the Mark block!`);return e=>{t(e),this.markUniformsAltered=!0,this.unitView.context.animator.requestRender()}}registerMarkUniformValue(e,t,n=e=>e){let r=this.createMarkUniformSetter(e),i=n=>{if(n==null)throw Error(`Trying to set null/undefined value for uniform: ${e}${m(t)?`Expr: ${t.expr}`:``}`);r(n)};if(m(t)){let e,r=()=>i(n(e(null)));e=this.unitView.paramRuntime.watchExpression(t.expr,r),r()}else i(n(t))}deleteGraphicsData(){let e=this.gl;this.vertexArrayInfo&&=(this.gl.bindVertexArray(null),e.deleteVertexArray(this.vertexArrayInfo.vertexArrayObject),void 0),this.bufferInfo&&=(Object.values(this.bufferInfo.attribs).forEach(e=>this.gl.deleteBuffer(e.buffer)),this.bufferInfo.indices&&this.gl.deleteBuffer(this.bufferInfo.indices),void 0)}registerScaleResolutionListener(e,t,n){e.addEventListener(t,n),this.scaleResolutionDisposers.push(()=>e.removeEventListener(t,n))}dispose(){if(this.#t)return;this.#t=!0;for(let e of this.scaleResolutionDisposers)e();this.scaleResolutionDisposers.length=0,this.deleteGraphicsData(),this.viewUniformInfo&&=(this.gl.deleteBuffer(this.viewUniformInfo.buffer),void 0),this.markUniformInfo&&=(this.gl.deleteBuffer(this.markUniformInfo.buffer),void 0);let e=this.programInfo?.program??this.programStatus?.program;e&&this.gl.deleteProgram(e),this.programInfo=void 0,this.programStatus=void 0}#n(){if(this.#t)throw Error(`WebGL mark resources have been disposed.`)}updateBufferInfo(e){if(this.gl.bindVertexArray(null),this.bufferInfo&&e.vertexCount<=this.bufferInfo.allocatedVertices)for(let[t,n]of Object.entries(e.arrays))n.data&&Dt(this.gl,this.bufferInfo.attribs[t],n.data,0);else{this.deleteGraphicsData(),this.bufferInfo=jt(this.gl,e.arrays,{numElements:e.vertexCount}),this.bufferInfo.allocatedVertices=e.allocatedVertices;for(let[t,n]of Object.entries(e.arrays))this.bytesPerElement.set(t,n.data.BYTES_PER_ELEMENT)}}get glHelper(){return this._glHelper}get rendererResources(){if(!this._rendererResources)throw Error(`WebGL renderer resources are not available.`);return this._rendererResources}get gl(){return this.glHelper.gl}isReady(){return!!(this.bufferInfo&&this.programInfo)}isPickingParticipant(){return this.mark.isPickingParticipant()}getDebugState(){return{markUniformsAltered:this.markUniformsAltered,vertexCount:this.bufferInfo?.numElements,allocatedVertices:this.bufferInfo?.allocatedVertices,rangeCount:this.rangeMap.size}}bindOrSetMarkUniformBlock(){this.markUniformsAltered?(eo(this.gl,this.programInfo,this.markUniformInfo),this.markUniformsAltered=!1):$a(this.gl,this.programInfo,this.markUniformInfo)}setOrderPass(e,t=!1){to(this.markUniformInfo,{uOrderMode:Oc[e]|(t?4:0)}),this.markUniformsAltered=!0}prepareRender(e){let t=this.glHelper,n=this.gl,r=[];r.push(()=>{this.vertexArrayInfo||=Ro(this.gl,this.programInfo,this.bufferInfo),n.useProgram(this.programInfo.program)});for(let[e,n]of Object.entries(this.encoders)){let i=t.rangeTextures.get(n.scale);i&&r.push(()=>q(this.programInfo,{[as+e]:i}))}r.push(...this.selectionTextureOps),this.getSampleFacetMode()==Ec&&r.push(()=>{let t=e.placement?.source;if(!t)throw Error(`No placement source available.`);q(this.programInfo,{uSampleFacetTexture:this.glHelper.getPlacementTexture(t)})});let i=(e.picking??!1)&&this.isPickingParticipant();return r.push(()=>to(this.viewUniformInfo,{uViewOpacity:this.unitView.getEffectiveOpacity(),uPickingEnabled:i})),this.opaque||e.picking?r.push(()=>n.disable(n.BLEND)):r.push(()=>n.enable(n.BLEND)),r}prepareSampleFacetRendering(e){let t=e.sampleFacetRenderingOptions,n=this.programInfo.uniformSetters.uSampleFacet;if(t&&n){let e=t.pixelToUnit,r=t.locSize.location*e,i=t.locSize.size*e;if(r>1||r+i<0)return!1;this.gl.uniform2f(n.location,r,i)}return!0}render(e){}createRenderCallback(e,t){if(!this.bufferInfo)return()=>void 0;let n=this,r=t.orderPass,i=r?(i,a)=>{n.setOrderPass(r,t.secondOrderPass),n.bindOrSetMarkUniformBlock(),e(i,a)}:e,a,o=this.unitView.getScaleResolution(`x`)?.getScale(),s=o&&w(o.type),c=[`index`,`locus`].includes(o?.type)?-1:0,l=[0,0];a=e=>{if(s&&e.xIndex){let t=o.domain(),n=Math.abs(t[1]-t[0]),r=e.xIndex(t[0]+c-n,t[1]+n,l),a=r[0],s=r[1]-a;s>0&&i(a,s)}else i(e.offset,e.count)};let u=this.rangeMap.get(void 0).count==0?t.facetId:void 0,d=this.rangeMap.get(u);return t.sampleFacetRenderingOptions?function(){d.count&&n.prepareSampleFacetRendering(t)&&a(d)}:function(){d.count&&a(d)}}setViewport(e,t,n,r,i,a=Ae){n=n.flatten();let o=this.gl,s=this.properties,c=a,l=a,u,d=jc(e,n,s.clip===`never`?void 0:r,!1),f=d.coords;if(d.requiresScissor){if(!f.isDefined())return!1;let r=[f.x,e.height-f.y2,f.width,f.height].map(e=>e*t),i=r.map(e=>Math.floor(e)),a=r[0]-i[0],s=r[1]-i[1];o.viewport(...i),o.scissor(...i),o.enable(o.SCISSOR_TEST),u={uViewOffset:[(n.x-f.x+c+a/t)/f.width,(f.y2-n.y2-l+s/t)/f.height],uViewScale:[n.width/f.width,n.height/f.height]}}else{if(!n.isDefined())return!1;o.viewport(0,0,Math.round(e.width*t),Math.round(e.height*t)),o.disable(o.SCISSOR_TEST),u={uViewOffset:[(n.x+c)/e.width,(e.height-n.y-l-n.height)/e.height],uViewScale:[n.width/e.width,n.height/e.height]}}return to(this.viewUniformInfo,{...u,uViewportSize:[n.width,n.height],uLogicalVisibleRect:Mc(n,i),uCullByVisibleRange:[+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`x`),+(s.cullByVisibleRange===!0||s.cullByVisibleRange===`y`)],uDevicePixelRatio:t}),eo(this.gl,this.programInfo,this.viewUniformInfo),!0}},Ac=class extends de{constructor(){super([],JSON.stringify)}get(e){let t=super.get(e);return t===void 0&&(t={offset:0,count:0,xIndex:void 0},super.set(e,t)),t}migrateEntries(e){for(let[t,n]of this.entries())e.has(t)||(n.offset=0,n.count=0,n.xIndex=void 0);for(let[t,n]of e.entries())Object.assign(this.get(t),n)}};function jc(e,t,n,r=!0){if(!n||!n.clipX&&!n.clipY)return{requiresScissor:!1,coords:t};let i=r?t.intersect(n.rect):n.rect;return n.clipX||(i=i.modify({x:0,width:e.width})),n.clipY||(i=i.modify({y:0,height:e.height})),{requiresScissor:!0,coords:i.flatten()}}function Mc(e,t){let n=t?.clipX?(t.rect.x-e.x)/e.width:0,r=t?.clipX?(t.rect.x2-e.x)/e.width:1;return[n,t?.clipY?(e.y2-t.rect.y2)/e.height:0,r,t?.clipY?(e.y2-t.rect.y)/e.height:1]}var Nc=Math.PI/180,Pc=1e-6,Fc=1,Ic=90,Lc=[`triangle`,`open`],Rc=[`inside`,`outside`],zc=class extends kc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`,`size`,`direction`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(oc,sc,[cc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uHeadSlope`,e.headAngle,Vc),this.registerMarkUniformValue(`uHeadNotchSlope`,e.headNotchAngle,Vc),this.registerMarkUniformValue(`uHeadShape`,e.headShape,e=>Bc(Lc,e)),this.registerMarkUniformValue(`uMinSize`,e.minSize),this.registerMarkUniformValue(`uHeadWidth`,e.headWidth),this.registerMarkUniformValue(`uStartNotch`,e.startNotch),this.registerMarkUniformValue(`uMinStemLength`,e.minStemLength),this.registerMarkUniformValue(`uHeadSpacing`,e.headSpacing??-1,Hc),this.registerMarkUniformValue(`uStem`,e.stem),this.registerMarkUniformValue(`uHeadPlacement`,e.headPlacement,e=>Bc(Rc,e))}updateGraphicsData(e){let t=e.getItemCount(),n=new gc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{co(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}};function Bc(e,t){let n=e.indexOf(t);if(n<0)throw Error(`Unsupported arrow mark value: ${t}`);return n}function Vc(e){return Math.max(Math.tan(Math.min(Math.max(e,Fc),Ic)*Nc),Pc)}function Hc(e){return e??-1}var Uc=`flat out vec4 vColor;

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
`,Wc=`flat in vec4 vColor;
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
`,Gc=`layout(std140) uniform Mark {
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
`,Kc=[`arc`,`dome`,`diagonal`,`line`],qc=[`vertical`,`horizontal`],Jc=class extends kc{constructor(e,t,n){super(e,t,n),this._baseInstanceExt=void 0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics(),this._baseInstanceExt=this.gl.getExtension(`WEBGL_draw_instanced_base_vertex_base_instance`),this.createAndLinkShaders(Uc,Wc,[Gc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uArcFadingDistance`,e.arcFadingDistance,e=>e||[0,0]),this.registerMarkUniformValue(`uArcHeightFactor`,e.arcHeightFactor),this.registerMarkUniformValue(`uMinArcHeight`,e.minArcHeight),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize),this.registerMarkUniformValue(`uShape`,e.linkShape,e=>Kc.indexOf(e)),this.registerMarkUniformValue(`uOrient`,e.orient,e=>qc.indexOf(e)),this.registerMarkUniformValue(`uClampApex`,e.clampApex,e=>!!e),this.registerMarkUniformValue(`uMaxChordLength`,e.maxChordLength),this.registerMarkUniformValue(`uSegmentBreaks`,e.segments,e=>e),this.registerMarkUniformValue(`uNoFadingOnSecondPass`,e.noFadingOnSecondPass,e=>!!e)}updateGraphicsData(e){let t=e.getItemCount(),n=new vc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.arrays=Object.fromEntries(Object.entries(r.arrays).map(([e,t])=>[e,{...t,data:void 0}])),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),this._baseInstanceExt?t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)):t.push(()=>this.gl.bindVertexArray(null)),t}render(e){let t=this.gl,n=()=>(this.markUniformInfo.uniforms.uSegmentBreaks[0]+1)*2;return this._baseInstanceExt?this.createRenderCallback((e,r)=>{this._baseInstanceExt.drawArraysInstancedBaseInstanceWEBGL(t.TRIANGLE_STRIP,0,n(),r,e)},e):this.createRenderCallback((e,r)=>{for(let t of Object.entries(this.bufferInfo.attribs)){let[n,r]=t;r.buffer&&r.numComponents&&r.divisor&&(r.offset=e*this.arrays[n].numComponents*this.bytesPerElement.get(n))}J(t,this.programInfo,this.bufferInfo),t.drawArraysInstanced(t.TRIANGLE_STRIP,0,n(),r)},e)}},Yc=`flat out float vRadius;
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
`,Xc=`const lowp vec4 white = vec4(1.0);
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
`,Zc=`layout(std140) uniform Mark {
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
`,Qc=class extends kc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`y`,`xOffset`,`yOffset`,`size`,`semanticScore`,`shape`,`strokeWidth`,`dx`,`dy`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(Yc,Xc,[Zc])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uInwardStroke`,e.inwardStroke,e=>!!e),this.registerMarkUniformValue(`uGradientStrength`,e.fillGradientStrength),this.registerMarkUniformValue(`uMinPickingSize`,e.minPickingSize)}updateGraphicsData(e){let t=e.getItemCount(),n=new _c({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}#e(){let e=2**(this.properties.geometricZoomBound||0);return Math.min(1,this.unitView.getZoomLevel()/e)**(1/3)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{to(this.markUniformInfo,{uScaleFactor:this.#e(),uSemanticThreshold:this.mark.getSemanticThreshold()}),this.markUniformsAltered=!0}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{n&&co(t,this.vertexArrayInfo,t.POINTS,n,e)},e)}},$c=`flat out lowp vec4 vFillColor;
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
`,el=`#if defined(ROUNDED_CORNERS) || defined(STROKED) || defined(SHADOW)
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
`,tl=`layout(std140) uniform Mark {
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
`,nl=[`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`],rl=class extends kc{get opaque(){return ye(this,`opaque`,()=>!this.#e()&&!this.#t()&&!this.properties.shadowOpacity&&s(this.encoding.fillOpacity)&&this.encoding.fillOpacity.value==1&&this.properties.minOpacity==1)&&this.unitView.getEffectiveOpacity()==1}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`fill`,`stroke`,`fillOpacity`,`strokeOpacity`,`strokeWidth`]}#e(){let e=this.properties;return e.cornerRadius||e.cornerRadiusBottomLeft||e.cornerRadiusBottomRight||e.cornerRadiusTopLeft||e.cornerRadiusTopRight}#t(){let e=this.encoding.strokeWidth;return!(s(e)&&!e.value)||`condition`in e}initializeGraphics(){super.initializeGraphics();let e=[];this.#e()&&e.push(`ROUNDED_CORNERS`),this.#t()&&e.push(`STROKED`),this.properties.shadowOpacity&&e.push(`SHADOW`),this.createAndLinkShaders($c,el,[tl,...e.map(e=>`#define `+e)])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinWidth`,e.minWidth),this.registerMarkUniformValue(`uMinHeight`,e.minHeight),this.registerMarkUniformValue(`uMinOpacity`,e.minOpacity),this.registerMarkUniformValue(`uCornerRadiusTopRight`,e.cornerRadiusTopRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomRight`,e.cornerRadiusBottomRight??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusTopLeft`,e.cornerRadiusTopLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uCornerRadiusBottomLeft`,e.cornerRadiusBottomLeft??e.cornerRadius??0),this.registerMarkUniformValue(`uHatchPattern`,e.hatch,e=>Math.max(0,nl.indexOf(e??`none`))),this.registerMarkUniformValue(`uShadowBlur`,e.shadowBlur??0),this.registerMarkUniformValue(`uShadowOpacity`,e.shadowOpacity??0),this.registerMarkUniformValue(`uShadowOffsetX`,e.shadowOffsetX??0),this.registerMarkUniformValue(`uShadowOffsetY`,e.shadowOffsetY??0),this.registerMarkUniformValue(`uShadowColor`,e.shadowColor??`black`,Qo)}updateGraphicsData(e){let t=e.getItemCount(),n=new hc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>{co(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e)},e)}},il=`// Line caps
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
`,al=`// Line ending
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
`,ol=`layout(std140) uniform Mark {
    /** Minimum rule length in pixels */
    uniform mediump float uMinLength;

    uniform mediump float uDashTextureSize;
    uniform lowp int uStrokeCap;
    uniform mediump float uStrokeDashOffset;

#pragma markUniforms
};
`,sl=class extends kc{constructor(e,t,n){super(e,t,n),this.dashTexture=void 0,this.dashTextureSize=0}getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`size`,`color`,`opacity`]}initializeGraphics(){super.initializeGraphics();let e=this.gl,t=cl(this.properties.strokeDash);this.dashTexture=si(e,{level:0,mag:e.NEAREST,min:e.NEAREST,internalFormat:e.R8,format:e.RED,src:t,height:1}),this.dashTextureSize=t.length,this.createAndLinkShaders(il,al,[ol])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uMinLength`,e.minLength),this.registerMarkUniformValue(`uStrokeCap`,e.strokeCap??`butt`,e=>[`butt`,`square`,`round`].indexOf(e)),to(this.markUniformInfo,{uDashTextureSize:+this.dashTextureSize}),this.markUniformsAltered=!0}updateGraphicsData(e){let t=e.getItemCount(),n=new gc({encoders:this.encoders,attributes:this.getAttributes(),numItems:t});n.addBatches(e.facetBatches);let r=n.toArrays();this.rangeMap.migrateEntries(r.rangeMap),this.updateBufferInfo(r)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>q(this.programInfo,{uDashTexture:this.dashTexture})),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>co(t,this.vertexArrayInfo,t.TRIANGLE_STRIP,n,e),e)}dispose(){this.dashTexture&&=(this.gl.deleteTexture(this.dashTexture),void 0),super.dispose()}};function cl(e){if(!e)return new Uint8Array;if(e.length==0||e.length%2||e.findIndex(e=>Math.round(e)!=e||e<1||e>1e3)>=0)throw Error(`Invalid stroke dash pattern: `+JSON.stringify(e));let t=e.reduce((e,t)=>e+t),n=new Uint8Array(t),r=!0,i=0;for(let t of e){for(;t;)n[i++]=r&&255||0,t--;r=!r}return n}var ll=`in mediump vec2 vertexCoord;
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
`,fl=1024,pl={left:-1,center:0,right:1},ml={top:-1,middle:0,bottom:1,alphabetic:1,baseline:1},hl={point:Qc,rect:rl,arrow:zc,rule:sl,tick:sl,link:Jc,text:class extends kc{getAttributes(){return[`uniqueId`,`facetIndex`,`x`,`x2`,`y`,`y2`,`xOffset`,`yOffset`,`x2Offset`,`y2Offset`,`color`,`size`,`opacity`,`angle`]}initializeGraphics(){super.initializeGraphics(),this.createAndLinkShaders(ll,ul,[dl])}finalizeGraphicsInitialization(){super.finalizeGraphicsInitialization(),this.gl.useProgram(this.programInfo.program);let e=this.properties;this.registerMarkUniformValue(`uPaddingX`,e.paddingX),this.registerMarkUniformValue(`uPaddingY`,e.paddingY),this.registerMarkUniformValue(`uFlushX`,e.flushX,e=>!!e),this.registerMarkUniformValue(`uFlushY`,e.flushY,e=>!!e),this.registerMarkUniformValue(`uSqueeze`,e.squeeze,e=>!!e),this.registerMarkUniformValue(`uLogoLetter`,e.logoLetters,e=>!!e),this.registerMarkUniformValue(`uSdfNumerator`,e.logoLetters,e=>this.font.metrics.common.base*.35*(e?.5:1)),this.registerMarkUniformVector(`uViewportEdgeFadeWidth`,[e.viewportEdgeFadeWidthTop,e.viewportEdgeFadeWidthRight,e.viewportEdgeFadeWidthBottom,e.viewportEdgeFadeWidthLeft]),this.registerMarkUniformVector(`uViewportEdgeFadeDistance`,[e.viewportEdgeFadeDistanceTop,e.viewportEdgeFadeDistanceRight,e.viewportEdgeFadeDistanceBottom,e.viewportEdgeFadeDistanceLeft]),to(this.markUniformInfo,{uAlign:[pl[e.align],ml[e.baseline]],uD:[e.dx,-e.dy]})}registerMarkUniformVector(e,t){let n=this.createMarkUniformSetter(e),r=[],i=()=>n(r.map(e=>e()));for(let e of t)r.push(m(e)?this.unitView.paramRuntime.watchExpression(e.expr,i):()=>e);i()}updateGraphicsData(e){let t=e.getData(),n=this.encoding,r=this.properties,a=m(r.logoLetters)?this.unitView.paramRuntime.evaluateAndGet(r.logoLetters.expr):r.logoLetters,o=this.encoders.text,s=0,c=`format`in n.text?y(n.text.format):e=>e;for(let e of t){let t=c(o(e)),n=i(t)?t:t===null?``:``+t;s+=n&&n.length||0}let l=new yc({encoders:this.encoders,attributes:this.getAttributes(),properties:{align:r.align,baseline:r.baseline,logoLetters:a},fontMetrics:this.font.metrics,numCharacters:Math.max(s,fl)});l.addBatches(e.facetBatches);let u=l.toArrays();this.rangeMap.migrateEntries(u.rangeMap),this.updateBufferInfo(u)}prepareRender(e){let t=super.prepareRender(e);return t.push(()=>{q(this.programInfo,{uTexture:this.rendererResources.getFontTexture(this.font.bitmapUrl)})}),t.push(()=>this.bindOrSetMarkUniformBlock()),t.push(()=>J(this.gl,this.programInfo,this.vertexArrayInfo)),t}render(e){let t=this.gl;return this.createRenderCallback((e,n)=>co(t,this.vertexArrayInfo,t.TRIANGLES,n,e),e)}}};function gl(e,t,n){let r=hl[e.getType()];if(!r)throw Error(`Unsupported WebGL mark type: `+e.getType());return new r(e,t,n)}var _l=class{#e=!1;#t=new Map;#n=new Map;#r=new Map;constructor(e){this.glHelper=e,e.setResourceFinalizer(()=>this.dispose())}#i(e){this.#s();let t=gl(e,this.glHelper,this),n={mark:e,graphics:t,state:`compiling`,collector:void 0,dataRevision:-1,configurationRevision:-1,encodedDataRevision:-1,scaleResolutions:new Set};this.#t.set(e,n),e.unitView.registerDisposer(()=>this.releaseMark(e));try{this.#l(n),t.initializeGraphics()}catch(e){throw n.state=`failed`,this.#u(n),t.dispose(),e}return n}prepareMarks(e){let t=this.#a(e);try{this.#o(t.entries)}catch(e){t.firstError??=e}if(t.firstError)throw t.firstError}#a(e){this.#s();let t=[],n;for(let r of new Set(e))try{let e=r.font,n=r.getType()!=`text`||e?.metrics;!this.#t.has(r)&&r.encoders&&n&&t.push(this.#i(r))}catch(e){n??=e}return{entries:t,firstError:n}}#o(e){let t;for(let n of e)try{n.graphics.finalizeGraphicsInitialization(),n.state=`ready`}catch(e){n.state=`failed`,this.#u(n),n.graphics.dispose(),t??=e}if(t)throw t}releaseMark(e){let t=this.#t.get(e);t&&(this.#t.delete(e),t.state=`disposed`,t.graphics.dispose(),this.#u(t))}getMarkRenderingDebugState(e){let t=this.#t.get(e),n=t?.graphics.getDebugState();return{ready:!!(t?.state==`ready`&&t.graphics.isReady()),markUniformsAltered:n?.markUniformsAltered??!1,vertexCount:n?.vertexCount,allocatedVertices:n?.allocatedVertices,rangeCount:n?.rangeCount??0}}getMarkEntry(e){return this.#t.get(e)}isEntryActive(e){return e.state==`ready`&&this.#t.get(e.mark)===e}isEntryDrawable(e){return this.isEntryActive(e)&&e.graphics.isReady()}synchronize(e){if(!this.#e)for(let t of e){if(!this.isEntryActive(t))continue;let e=t.mark;e.initializeRenderingRevisions([],{trackResources:!1});let n=e.unitView.getCollector();n?.completed&&(t.collector!==n||t.dataRevision!=n.dataRevision||t.configurationRevision!=e.getRenderingRevision(`configuration`)||t.encodedDataRevision!=e.getEncodedDataRevision())&&(t.graphics.updateGraphicsData(n),this.#c(t))}}prepareFontBitmap(e){this.#s();let t=this.#r.get(e);if(t)return t.ready;let n=this.glHelper.gl,r,i=new Promise((t,i)=>{r=si(n,{src:e,min:n.LINEAR},a=>{a?(this.#r.delete(e),n.deleteTexture(r),i(a)):this.#e?i(Error(`WebGL renderer resources were disposed while loading a font.`)):t()})});return this.#r.set(e,{texture:r,ready:i}),i}getFontTexture(e){this.#s();let t=this.#r.get(e);if(!t)throw Error(`Font bitmap has not been prepared: `+e);return t.texture}dispose(){if(this.#e)return;this.#e=!0;for(let e of Array.from(this.#t.keys()))this.releaseMark(e);let e=this.glHelper.gl;for(let{texture:t}of this.#r.values())e.deleteTexture(t);this.#r.clear()}#s(){if(this.#e)throw Error(`WebGL renderer resources have been disposed.`)}#c(e){let t=e.mark;t.initializeRenderingRevisions([],{trackResources:!1});let n=t.unitView.getCollector();e.collector=n,e.dataRevision=n?.dataRevision??-1,e.configurationRevision=t.getRenderingRevision(`configuration`)??-1,e.encodedDataRevision=t.getEncodedDataRevision()}#l(e){for(let[t,n]of Object.entries(e.mark.encoders)){if(!n.scale)continue;let r=se(n.channelDef)?.resolutionChannel??t;if(!ce(r))continue;let i=e.mark.unitView.getScaleResolution(r);if(!i||e.scaleResolutions.has(i))continue;e.scaleResolutions.add(i);let a=this.#n.get(i);if(a){a.count++;continue}this.glHelper.createRangeTexture(i),this.#n.set(i,{count:1,dispose:i.observeMapping(()=>this.glHelper.createRangeTexture(i,!0))})}}#u(e){for(let t of e.scaleResolutions){let e=this.#n.get(t);e&&(e.count--,e.count==0&&(e.dispose(),this.#n.delete(t)))}e.scaleResolutions.clear()}};function vl({runs:e,viewRoot:t,layoutResult:n,webGLHelper:r,markAdapter:i,logicalWidth:a,logicalHeight:o,pixelRatio:s}){let c=r.gl,l=Math.ceil(a*s),u=Math.ceil(o*s);yl(c,l,u);let d=s==1&&n?n:Ce(t,xe.create(0,0,a,o),{devicePixelRatio:s,renderingOptions:{firstFacet:!0}}),f=Io(c,[{format:c.RGBA,type:c.UNSIGNED_BYTE,minMag:c.LINEAR,wrap:c.CLAMP_TO_EDGE}],l,u);try{for(let t of e){let e=new qs({picking:!1},{webGLHelper:r,markAdapter:i,canvasSize:{width:a,height:o},devicePixelRatio:s,framebufferInfo:f,markPredicate:e=>t.marks.has(e),pixelOffset:0});d.collectRenderCommands(e),e.finish(),e.render();let n=Oe(t.bounds,s,l,u);De(t,n,s,Zs(c,f,`image/png`,{...n,unpremultiplyAlpha:!0}))}}finally{c.bindFramebuffer(c.FRAMEBUFFER,null),c.deleteTexture(f.attachments[0]),c.deleteFramebuffer(f.framebuffer)}}function yl(e,t,n){let r=e.getParameter(e.MAX_RENDERBUFFER_SIZE),i=e.getParameter(e.MAX_TEXTURE_SIZE),a=Math.min(r,i);if(t<=0||n<=0||t>a||n>a)throw RangeError(`SVG raster dimensions ${t} x ${n} exceed the WebGL limit ${a}.`)}function bl(e){let t=new Hs(e.container,e.sizeSource,{powerPreference:e.powerPreference},e.onCanvasResize),n=new _l(t);return{surface:t,defaultFontBitmapUrl:ke,prepareFontBitmap:e=>n.prepareFontBitmap(e),getMarkRenderingDebugState:e=>n.getMarkRenderingDebugState(e),createRenderCoordinator:e=>new Ys({...e,glHelper:t,markAdapter:n}),exportCanvas:e=>nc({...e,glHelper:t,markAdapter:n}),exportRaster:e=>rc({...e,glHelper:t,markAdapter:n}),rasterizeSvgRuns:e=>vl({...e,webGLHelper:t,markAdapter:n}),readPickingId:(e,n)=>{let r=t.getDevicePixelRatio(),i=Ks(t.gl,t._pickingBufferInfo,e*r,n*r);return i[0]|i[1]<<8|i[2]<<16|i[3]<<24}}}export{bl as createWebGLRenderingBackend};