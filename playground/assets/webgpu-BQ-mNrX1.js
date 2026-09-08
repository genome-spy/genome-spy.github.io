import{_t as e,a as t,b as n,ct as r,d as i,in as a,nn as o,o as s,rt as c,s as l}from"./clipOptions-DTq05y76.js";import{k as u}from"./vega-scale-Ciuin0nT.js";import{n as d}from"./indexLikeDomainUtils-CtCqYOrV.js";import{t as f}from"./rasterization-25yc2Doo.js";import{t as p}from"./rectangle-CAPGOw2x.js";import{n as m,t as h}from"./layoutResult-BbpHOHQN.js";import{n as g,r as _,t as v}from"./performanceProfiler-t6gLo5-8.js";import{l as y,o as b}from"./markEncoding-BfVF7NCl.js";import{n as x,r as S,t as C}from"./markXIndex-BcfuWosi.js";import{t as ee}from"./canvasSizeHelper-DjbYDXFa.js";import{n as te,t as ne}from"./rasterImage-CSBco7OJ.js";import{n as re,t as ie}from"./renderingConstants-BWHEP8gH.js";var ae=4096,oe=4294967295;function se(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`High-precision values must be non-negative safe integers.`);let t=e%ae,n=(e-t)/ae;if(n>oe)throw Error(`High-precision value exceeds the supported range for packed u32.`);return[n>>>0,t>>>0]}function ce(e){if(!Number.isFinite(e)||e<0)throw Error(`High-precision domain values must be finite and non-negative.`);let t=e%ae;return[e-t,t]}function le(e){let t=new Uint32Array(e.length*2);for(let n=0;n<e.length;n+=1){let[r,i]=se(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function ue(e,t){let n=e.length*2;if(t.length!==n)throw Error(`Packed target length (${t.length}) does not match ${n}.`);for(let n=0;n<e.length;n+=1){let[r,i]=se(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function de(e,t){let[n,r]=ce(e);return[n,r,Number(t)-Number(e)]}function w(e){return!!e&&`data`in e&&e.data!=null}function T(e){return!!e&&`value`in e&&e.value!=null}function fe(e){let t=new Map,n=0;for(let r of e){let e=r.arrayLength!=null,i=e?16:r.components===1?4:r.components===2?8:16,a=e?16*r.arrayLength:r.components===1?4:r.components===2?8:16,o=e?16:void 0;n=pe(n,i),t.set(r.name,{...r,offset:n,stride:o}),n+=a}return{entries:t,byteLength:pe(n,16)}}function pe(e,t){return Math.ceil(e/t)*t}var me=class{constructor(e){let t=fe(e);this.entries=t.entries,this.byteLength=t.byteLength,this.data=new ArrayBuffer(this.byteLength),this.view=new DataView(this.data)}setValue(e,t){let n=this.entries.get(e);if(!n)return;if(n.arrayLength!=null){if(!(Array.isArray(t)||ArrayBuffer.isView(t)))throw Error(`Uniform "${e}" expects an array value`);let r=t;if(r.length!==n.arrayLength)throw Error(`Uniform "${e}" expects ${n.arrayLength} elements`);let i=n.stride??16;for(let e=0;e<n.arrayLength;e++){let t=r[e],a=n.offset+e*i;this._writeElement(n,a,t)}return}let r=n.components;if(Array.isArray(t)||ArrayBuffer.isView(t)){let i=t;if(i.length!==r)throw Error(`Uniform "${e}" expects ${r} components`);for(let t=0;t<r;t++){let a=i[t];if(typeof a!=`number`)throw Error(`Uniform "${e}" expects ${r} components`);this._writeScalar(n,n.offset+t*4,a??0)}}else{if(r!==1)throw Error(`Uniform "${e}" expects ${r} components`);let i=t;this._writeScalar(n,n.offset,i??0);for(let e=1;e<r;e++)this._writeScalar(n,n.offset+e*4,0)}}_writeElement(e,t,n){if(e.components===1){if(typeof n!=`number`)throw Error(`Uniform "${e.name}" expects scalar elements`);this._writeScalar(e,t,n);return}if(!Array.isArray(n)||n.length!==e.components)throw Error(`Uniform "${e.name}" expects ${e.components} components`);for(let r=0;r<e.components;r++)this._writeScalar(e,t+r*4,n[r]??0)}_writeScalar(e,t,n){e.type===`u32`?this.view.setUint32(t,n>>>0,!0):e.type===`i32`?this.view.setInt32(t,n|0,!0):this.view.setFloat32(t,n??0,!0)}};function he(e,t,n=new Map){let r=new Map,i=new Map,a=0,o=0,s=0;for(let[c,l]of Object.entries(e)){if(!w(l))continue;let e=l.type??t[c]?.type;if(!e)throw Error(`Missing type for series channel "${c}".`);if(e!==`f32`&&e!==`u32`&&e!==`i32`)throw Error(`Packed series only supports f32/u32/i32 channels. "${c}" is ${e}.`);let u=l.inputComponents??l.components??1;if(u!==1&&u!==2&&u!==4)throw Error(`Packed series only supports 1, 2, or 4 components. "${c}" is ${u}.`);let d=n.get(c)??c,f=i.get(d);if(f){if(f.scalarType!==e||f.components!==u)throw Error(`Packed alias "${d}" must keep type/components consistent.`);r.set(c,f);continue}let p={name:c,scalarType:e,components:u,offset:e===`f32`?a:e===`u32`?o:s,stride:0};r.set(c,p),i.set(d,p),e===`f32`?a+=u:e===`u32`?o+=u:s+=u}for(let e of r.values())e.stride=e.scalarType===`f32`?a:e.scalarType===`u32`?o:s;return{entries:r,f32Stride:a,u32Stride:o,i32Stride:s}}function ge({channels:e,channelSpecs:t,layout:n,count:r}){let i=n.f32Stride>0?new Float32Array(r*n.f32Stride):null,a=n.u32Stride>0?new Uint32Array(r*n.u32Stride):null,o=n.i32Stride>0?new Int32Array(r*n.i32Stride):null,s=new Set;for(let t of n.entries.values()){if(s.has(t))continue;s.add(t);let n=e[t.name];if(!n||!w(n))throw Error(`Missing series data for "${t.name}".`);let c=n.inputComponents??n.components??t.components,l=r*c,u=n.data;if(!u)throw Error(`Missing data for "${t.name}".`);let d=n.scale?.type??`identity`;if(t.scalarType===`u32`&&d===`index`&&u instanceof Float64Array){if(c!==2)throw Error(`Channel "${t.name}" requires inputComponents: 2 when providing Float64Array data.`);let e=new Uint32Array(u.length*2);ue(u,e),u=e}if(t.scalarType===`f32`&&!(u instanceof Float32Array))throw Error(`Channel "${t.name}" expects a Float32Array for f32 data`);if(t.scalarType===`u32`&&!(u instanceof Uint32Array))throw Error(`Channel "${t.name}" expects a Uint32Array for u32 data`);if(t.scalarType===`i32`&&!(u instanceof Int32Array))throw Error(`Channel "${t.name}" expects an Int32Array for i32 data`);if(u.length<l)throw Error(`Channel "${t.name}" length (${u.length}) is less than count (${r}).`);let f=t.scalarType===`f32`?i:t.scalarType===`u32`?a:o;if(f)for(let e=0;e<r;e++){let n=e*t.stride+t.offset,r=e*c;for(let e=0;e<t.components;e++)f[n+e]=u[r+e]}}return{f32:i,u32:a,i32:o}}var _e=(globalThis.GPUTextureUsage?.TEXTURE_BINDING??0)|(globalThis.GPUTextureUsage?.COPY_DST??0);function ve(e){let t=xe(e.format),n=e.width*t,r=Se(n,256);if(r===n)return{...e,bytesPerRow:r};let i=Math.max(1,e.height),a=new Uint8Array(r*i),o=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);for(let e=0;e<i;e++){let t=e*n,i=e*r;a.set(o.subarray(t,t+n),i)}return{...e,data:a,bytesPerRow:r}}function ye(e,t,n=_e,r){let i=e.createTexture({label:r,size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:t.format,usage:n});return be(e,i,t),i}function be(e,t,n){let r=ve(n);e.queue.writeTexture({texture:t},E(r.data),{bytesPerRow:r.bytesPerRow,rowsPerImage:r.height},{width:r.width,height:r.height,depthOrArrayLayers:1})}function E(e){return e}function xe(e){switch(e){case`r8uint`:return 1;case`r32float`:return 4;case`rg32float`:return 8;case`rgba8unorm`:case`rgba8unorm-srgb`:return 4;case`rgba16float`:return 8;default:return 4}}function Se(e,t){return Math.ceil(e/t)*t}var D=`webgpu-renderer`;function O(e,t){return e+`: `+t}var Ce=class{constructor(e,t,n,r=`mark`){this._device=e,this._channels=t,this._channelSpecs=n,this._label=r,this._seriesBufferAliases=new Map,this._packedSeriesLayout=null,this._packedBuffers=new Map,this._initializeSeriesAliases()}get packedSeriesLayoutEntries(){return this._getPackedLayout()?.entries??null}getPackedSeriesInfo(){let e=this._getPackedLayout();if(!e)return new Map;let t=new Map;for(let[n,r]of e.entries){let e=r.scalarType===`f32`?`seriesF32`:r.scalarType===`u32`?`seriesU32`:`seriesI32`,i=this._seriesBufferAliases.get(n)??n,a=t.get(e);a||(a={stride:r.stride,channels:[]},t.set(e,a)),a.channels.push({name:n,alias:i,offset:r.offset,components:r.components,stride:r.stride})}return t}getBuffer(e){let t=this._packedBuffers.get(e);return t?t.buffer:null}inferCount(e){let t=null,n=!1;for(let[r,i]of Object.entries(this._channels)){if(!w(i))continue;n=!0;let a=e?.[r]??i.data;if(!a)throw Error(`Missing data for channel "${r}"`);let o=i.inputComponents??i.components??1,s=(i.scale?.type??`identity`)===`index`&&a instanceof Float64Array&&o===2?1:o;if(s<=0)throw Error(`Invalid input component count for "${r}"`);if(a.length%s!==0)throw Error(`Channel "${r}" length (${a.length}) must be divisible by ${s}.`);let c=a.length/s;if(t===null)t=c;else if(c!==t)throw Error(`Channel "${r}" count (${c}) does not match inferred count (${t}).`)}return n?t??0:null}_initializeSeriesAliases(){this._seriesBufferAliases.clear();let e=new Map;for(let[t,n]of Object.entries(this._channels)){if(!w(n))continue;let r=n.data;if(!r)continue;let i=e.get(r);i||(i=t,e.set(r,i)),this._seriesBufferAliases.set(t,i)}}updateSeries(e,t){return this._updatePackedSeries(e,t)}_updatePackedSeries(e,t){let n=this._getPackedLayout();if(!n)return!1;let r=new Map;for(let[t,n]of Object.entries(this._channels)){if(!w(n))continue;let i=e[t]??n.data;if(!i)throw Error(`Missing data for channel "${t}"`);let a=this._seriesBufferAliases.get(t)??t,o=r.get(a);if(o&&o!==i){let e=this._getAliasMembers(a);throw Error(`Series channels ${e.map(e=>`"${e}"`).join(`, `)} must share the same buffer.`)}r.set(a,i),n.data=i}let{f32:i,u32:a,i32:o}=ge({channels:this._channels,channelSpecs:this._channelSpecs,layout:n,count:t}),s=!1;return i&&(s=this._ensurePackedBuffer(`seriesF32`,i)||s),a&&(s=this._ensurePackedBuffer(`seriesU32`,a)||s),o&&(s=this._ensurePackedBuffer(`seriesI32`,o)||s),s}_getPackedLayout(){if(!this._packedSeriesLayout){let e=he(this._channels,this._channelSpecs,this._seriesBufferAliases);this._packedSeriesLayout=e}return this._packedSeriesLayout}_getAliasMembers(e){let t=[];for(let[n,r]of this._seriesBufferAliases.entries())r===e&&t.push(n);return t.length>0?t:[e]}_ensurePackedBuffer(e,t){let n=this._packedBuffers.get(e),r=Math.max(4,t.byteLength),i=n?.buffer??null,a=!i||n.byteLength<r;if(a){let t=i;i=this._device.createBuffer({label:O(this._label,`series `+e.slice(6).toLowerCase()),size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._packedBuffers.set(e,{buffer:i,byteLength:r}),t?.destroy()}return t.byteLength>0&&this._device.queue.writeBuffer(i,0,E(t)),a}destroy(){for(let{buffer:e}of this._packedBuffers.values())e.destroy();this._packedBuffers.clear()}};function we({device:e,label:t=`mark`,layout:n,uniformBuffer:r,resourceLayout:i,getSeriesBuffer:a,getScaleResources:o,extraTextures:s,extraBuffers:c}){let l=[{binding:0,resource:{buffer:r}}],u=1;for(let e of i){if(e.role===`series`){let t=a(e.name);if(!t)throw Error(`Missing buffer binding for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}let n=o(e.name);if(e.role===`ordinalRange`){let t=n?.ordinalRange?.buffer;if(!t)throw Error(`Missing buffer binding for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}if(e.role===`domainMap`){let t=n?.domainMap?.buffer;if(!t)throw Error(`Missing domain map buffer for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}if(e.role===`rangeTexture`){let r=n?.rangeTexture?.texture;if(!r)throw Error(`Missing range texture for "${e.name}".`);l.push({binding:u++,resource:r.createView({label:O(t,`scale ${e.name} range texture view`)})});continue}if(e.role===`rangeSampler`){let t=n?.rangeTexture?.sampler;if(!t)throw Error(`Missing range sampler for "${e.name}".`);l.push({binding:u++,resource:t});continue}if(e.role===`extraTexture`){let n=s.get(e.name)?.texture;if(!n)throw Error(`Missing extra texture for "${e.name}".`);l.push({binding:u++,resource:n.createView({label:O(t,`${e.name} texture view`)})});continue}if(e.role===`extraSampler`){let t=s.get(e.name)?.sampler;if(!t)throw Error(`Missing extra sampler for "${e.name}".`);l.push({binding:u++,resource:t});continue}if(e.role===`extraBuffer`){let t=c.get(e.name)??null;if(!t)throw Error(`Missing extra buffer for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}throw Error(`Unknown resource binding role "${e.role}".`)}return e.createBindGroup({label:O(t,`bind group`),layout:n,entries:l})}var k=`uDomain_`,A=`uRange_`,Te=`uRangeCount_`,Ee=`domainMap_`,De=`uDomainMapCount_`,Oe=`uRangeTexture_`,ke=`uRangeSampler_`,Ae=`getScaled_`,je=`uScaleBase_`,Me=`uScaleExponent_`,Ne=`uScaleConstant_`,Pe=`uScalePaddingInner_`,Fe=`uScalePaddingOuter_`,Ie=`uScaleAlign_`,Le=`uScaleBand_`,Re=`uSelection_`,ze=`uSelectionCount_`,Be=`selection_`,Ve=`checkSelection_`;function He(e,t){return`${Re}${e}_${t}_active`}function Ue(e,t){return`${Re}${e}_${t}`}function We(e,t){return t===`f32`?e:`f32(${e})`}function Ge(e){return e.replace(/^\n/,``).replace(/\n\s*$/,``)}function Ke(e,t){let n=Ge(t),r=e.body?`${e.body}\n${n}`:n;return{...e,body:r}}function qe(e,t){return`
    let unitValue = clamp(${t}, 0.0, 1.0);
    let rgb = getInterpolatedColor(${`${Oe}${e}`}, ${`${ke}${e}`}, unitValue);
    return vec4<f32>(rgb, 1.0);
`}function Je(e){let t={expr:e.rawValueExpr,body:``};for(let n of e.steps)t=n(t);let n=t.body?Ge(t.body):``,r=e.functionName??e.name,i=Ge(e.useRangeTexture?qe(e.name,t.expr):`
    return ${t.expr};
`),a=n?`${n}\n${i}`:i;return`fn ${Ae}${r}(i: u32) -> ${e.returnType} {
${a}
}`}function Ye(e){return t=>({...t,expr:We(t.expr,e)})}function Xe(e){return t=>({...t,expr:`clampToDomain(${t.expr}, ${e})`})}function Ze(e,t){return n=>({...n,expr:t({name:e,valueExpr:n.expr})})}function Qe(){return e=>({...e,expr:`roundLikeD3(${e.expr})`})}function $e({name:e,domainLength:t,outputComponents:n,outputScalarType:r,useRangeTexture:i}){let a=i||n===1?r:`vec4<f32>`,o=e=>i||n===1?`${e}.x`:e;return n=>({...Ke(n,`
    const DOMAIN_LEN: u32 = ${t}u;
    let value = ${n.expr};
    let descending = params.${k}${e}[DOMAIN_LEN - 1u].x <
        params.${k}${e}[0u].x;
    var slot: u32 = 0u;
    for (var i: u32 = 1u; i + 1u < DOMAIN_LEN; i = i + 1u) {
        let stop = params.${k}${e}[i].x;
        if (select(value >= stop, value <= stop, descending)) {
            slot = i;
        }
    }
    let d0 = params.${k}${e}[slot].x;
    let d1 = params.${k}${e}[slot + 1u].x;
    let denom = d1 - d0;
    var t = select(0.5, (value - d0) / denom, denom != 0.0);
    let r0: ${a} = ${o(`params.${A}${e}[slot]`)};
    let r1: ${a} = ${o(`params.${A}${e}[slot + 1u]`)};
    let unit = mix(r0, r1, t);
`),expr:`unit`})}function et({name:e,domainLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${A}${e}[slot].x`:`params.${A}${e}[slot]`;return n=>({...Ke(n,`
    let value = ${n.expr};
    const DOMAIN_LEN: u32 = ${t}u;
    var slot: u32 = 0u;
    for (var i: u32 = 0u; i < DOMAIN_LEN; i = i + 1u) {
        if (value >= params.${k}${e}[i].x) {
            slot = i + 1u;
        }
    }
    let out: ${i} = ${a};
`),expr:`out`})}function tt({name:e,rangeLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${A}${e}[slot].x`:`params.${A}${e}[slot]`;return n=>({...Ke(n,`
    let value = ${n.expr};
    let d0 = params.${k}${e}[0u].x;
    let d1 = params.${k}${e}[1u].x;
    let denom = d1 - d0;
    var t = select(0.0, (value - d0) / denom, denom != 0.0);
    t = clamp(t, 0.0, 1.0);
    const RANGE_LEN: u32 = ${t}u;
    let slot = min(RANGE_LEN - 1u, u32(floor(t * f32(RANGE_LEN))));
    let out: ${i} = ${a};
`),expr:`out`})}function nt(e,t,n=e){return`fn ${Ae}${n}(i: u32) -> ${t}`}function j(e){return`readPacked2(params.${k}${e})`}function rt(e){return`readPacked3(params.${k}${e})`}function M(e){return`readPacked2(params.${A}${e})`}function it(e,t){return t===`u32`?e:`u32(f32(${e}))`}function at({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,clamp:i,round:a,useRangeTexture:o},s){let c=[];return r!==`f32`&&c.push(Ye(r)),i&&c.push(Xe(j(e))),c.push(Ze(e,s)),a&&!o&&c.push(Qe()),Je({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:o?`vec4<f32>`:`f32`,useRangeTexture:o})}var ot={type:`identity`,input:`any`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:null,needsDomainMap:!1,needsOrdinalRange:!1},emit:st};Object.freeze(ot);function st({name:e,functionName:t,rawValueExpr:n,outputComponents:r,outputScalarType:i}){return`${nt(e,r===1?i:`vec${r}<f32>`,t)} { return ${n}; }`}function ct(e){if(!e||e.type==`identity`)return ot;if(!e.definition)throw Error(`Scale "${e.type}" has no definition. Import and use its scale factory.`);return e.definition}function lt(e){return ct(e).type}function ut(e,t){let n=e.resources;return{stopKind:n.stopKind&&n.supportsPiecewise&&t?`piecewise`:n.stopKind,needsDomainMap:!!n.needsDomainMap,needsOrdinalRange:!!n.needsOrdinalRange}}function dt(e){return{stopArrays:e.resources.stopKind!==null,params:e.params}}function ft(e,t){return e.output===`same`?t:`f32`}function pt(e,t){let n=typeof e==`function`||Array.isArray(e)?{scheme:e}:e;if(n.count===void 0&&t!==void 0&&(n.count=t),typeof n.scheme==`function`)return gt(n.scheme,n);if(Array.isArray(n.scheme))return n.mode===`interpolate`||n.interpolate?mt(n.scheme,n):ht(n.scheme,n.count)}function mt(e,t={}){return gt(yt(e,t.interpolate),t)}function ht(e,t){return _t(e.map(vt),t)}function gt(e,{extent:t=[0,1],reverse:n=!1,count:r=256}={}){let i=t[0],a=t[t.length-1]-i,o=a===0?1:a,s=Array(r);for(let t=0;t<r;t++)s[t]=e(i+(r>1?t/(r-1):0)/o);return n&&s.reverse(),_t(s)}function _t(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*4);for(let t=0;t<n;t++){let n=e[t%e.length],a=i(n);if(!a)throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);let o=a.rgb(),s=t*4;r[s]=o.r,r[s+1]=o.g,r[s+2]=o.b,r[s+3]=255}return{data:r,format:`rgba8unorm`,width:n,height:1}}function vt(e){if(typeof e==`string`)return e;if(!Array.isArray(e))throw Error(`Invalid color stop: ${String(e)}`);let[t=0,n=0,r=0,i=1]=e,a=Math.max(t,n,r,i),o=a<=1?255:1,s=a<=1?i:i/255;return`rgba(${t*o}, ${n*o}, ${r*o}, ${s})`}function yt(e,t){let n=e.map(vt),r=t??u,i=n.slice(0,-1).map((e,t)=>r(e,n[t+1]));return e=>{let t=e*i.length,n=Math.max(0,Math.min(i.length-1,Math.floor(t)));return i[n](t-n)}}function bt(e){let t=i(e).rgb();return[t.r,t.g,t.b].map(e=>e/255)}function xt(e){if(!e||!ct(e).resources.supportsPiecewise)return!1;let t=Array.isArray(e.domain)?e.domain.length:0,n=Array.isArray(e.range)?e.range.length:0;return t>2||n>2}var St={continuous:{label:`Continuous`,getLengths:()=>({domainLength:2,rangeLength:2}),normalizeStops:({name:e,scale:t,getDefaultScaleRange:n,domainLength:r,rangeLength:i})=>{let a=Array.isArray(t.domain)?t.domain:[0,1],o=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof o[0]!=`number`||typeof o[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let s=o;return{domain:[a[0]??0,a[1]??1],range:[s[0]??0,s[1]??1],domainLength:r,rangeLength:i}}},threshold:{label:`Threshold`,getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length===0)throw Error(`Threshold scale on "${e}" must define a non-empty domain.`);if(r.length<2)throw Error(`Threshold scale on "${e}" must define at least two range entries.`);if(r.length!==n.length+1)throw Error(`Threshold scale on "${e}" requires range length of ${n.length+1}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}},normalizeStops:({name:e,scale:t,channel:n,domainLength:r,rangeLength:i})=>({domain:t.domain??[],range:Tt(e,t.range,n.components??1,`threshold`),domainLength:r,rangeLength:i})},piecewise:{label:`Piecewise`,getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length<2)throw Error(`Piecewise scale on "${e}" must define at least two domain entries.`);if(r.length<2)throw Error(`Piecewise scale on "${e}" must define at least two range entries.`);if(r.length!==n.length)throw Error(`Piecewise scale on "${e}" requires range length of ${n.length}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}},normalizeStops:({name:e,scale:t,channel:n,domainLength:r,rangeLength:i})=>({domain:t.domain??[],range:Tt(e,t.range,n.components??1,`piecewise`),domainLength:r,rangeLength:i})}};function Ct(e){return St[e]}function wt(e,t,n){let r=ct(n);if(r.getStopLengths){let i=r.getStopLengths({name:e,kind:t,scale:n});if(i)return i}return Ct(t).getLengths({name:e,scale:n})}function Tt(e,t,n,r){let i=r===`threshold`?`Threshold`:`Piecewise`;if(!Array.isArray(t)||t.length<2)throw Error(`${i} scale on "${e}" must define at least two range entries.`);return t.map(t=>Et(e,t,n,i))}function Et(e,t,n,r){if(n===1){if(typeof t==`number`)return t;throw Error(`${r} scale on "${e}" expects numeric range values.`)}if(Array.isArray(t)){if(t.length===4)return t;if(t.length===3)return[...t,1]}if(typeof t==`string`)return[...bt(t),1];throw Error(`${r} scale on "${e}" expects vec4 range values or CSS colors.`)}function Dt(e,t,n){if(!Array.isArray(t)||t.length===0)throw Error(`Ordinal scale on "${e}" must define at least one range entry.`);return t.map(t=>Et(e,t,n,`Ordinal`))}function Ot(e){return!Array.isArray(e)||e.length===0?!1:e.every(e=>typeof e==`string`||Array.isArray(e)&&(e.length===3||e.length===4))}function kt(e){if(e<=0)return[];if(e===1)return[0];let t=e-1,n=Array(e);for(let r=0;r<e;r++)n[r]=r/t;return n}function At(e){return typeof e==`function`}function jt(e,t){if(!e)return!1;let n=ct(e),r=At(e.range),i=Ot(e.range);return!(r||e.interpolate!==void 0||i)||t!==4?!1:n.continuous}var Mt=4294967295,Nt=4294967295;function Pt(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Ft(e,t){let n=[];for(let t of e)n.push([t,1]);return It(n,t)}function It(e,t={}){let n=Array.from(e),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??Rt(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a*2);for(let e=0;e<a;e+=1)o[e*2]=Mt;let s=a-1;for(let[e,t]of n){let n=Lt(e,`key`);if(n===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let r=Lt(t,`value`),i=Pt(n)&s,c=!1;for(let e=0;e<a;e+=1){let e=i*2,t=o[e];if(t===4294967295||t===n){o[e]=n,o[e+1]=r,c=!0;break}i=i+1&s}if(!c)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Lt(e,t){if(!Number.isSafeInteger(e)||e<0||e>Nt)throw Error(`${t} must be a non-negative u32.`);return e>>>0}function Rt(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var zt=class{constructor({device:e,channels:t,analysisByChannel:n,label:r=`mark`,getDefaultScaleRange:i,setUniformValue:a}){this._device=e,this._channels=t,this._label=r,this._getDefaultScaleRange=i,this._setUniformValue=a,this._analysisByChannel=n,this._channelResources=new Map,this._scaleUpdaters=new Map}_getAnalysis(e){let t=this._analysisByChannel.get(e);if(!t)throw Error(`Missing channel analysis for "${e}".`);return t}getChannelResources(e){return this._channelResources.get(e)}_ensureChannelResources(e){let t=this._channelResources.get(e);return t||(t={},this._channelResources.set(e,t)),t}_getScaleStopInfo(e){return this._channelResources.get(e)?.scaleStops}addScaleUniforms(e,t,n){let r=this._getAnalysis(t),i=ut(r.scaleDef,r.isPiecewise),a=i.stopKind;if(a){let{domainLength:i,rangeLength:o}=wt(t,a,n.scale),s=r.outputComponents,c=r.useRangeTexture,l=s===1?r.outputScalarType:`f32`,u=c?1:s,d=c?`f32`:l;e.push({name:k+t,type:`f32`,components:1,arrayLength:i}),e.push({name:A+t,type:d,components:u,arrayLength:o})}let o=dt(r.scaleDef);for(let n of o.params)e.push({name:`${n.prefix}${t}`,type:`f32`,components:1});i.needsOrdinalRange&&e.push({name:Te+t,type:`f32`,components:1}),i.needsDomainMap&&e.push({name:De+t,type:`f32`,components:1})}initializeScale(e,t,n){let r=this._getAnalysis(e),i=ut(r.scaleDef,r.isPiecewise),a=i.stopKind;if(a){let{domainLength:t,rangeLength:i}=wt(e,a,n);this._ensureChannelResources(e).scaleStops={kind:a,domainLength:t,rangeLength:i},r.useRangeTexture&&i&&this._setUniformValue(A+e,kt(i))}let o=dt(r.scaleDef);for(let t of o.params){let r=t.defaultValue;t.prop&&n[t.prop]!==void 0&&(r=n[t.prop]),this._setUniformValue(`${t.prefix}${e}`,r)}this._registerScaleUpdaters(e,t,n,r,i,a)}getScaleUpdater(e){let t=this._scaleUpdaters.get(e);if(!t)throw Error(`Missing scale updater for "${e}".`);return t}_registerScaleUpdaters(e,t,n,r,i,a){this._scaleUpdaters.set(e,this._buildScaleUpdater({name:e,channel:t,scale:n,analysis:r,requirements:i,kind:a}))}_buildScaleUpdater({name:e,channel:t,scale:n,analysis:r,requirements:i,kind:a}){let o=r.useRangeTexture,s=i.needsDomainMap,c=i.needsOrdinalRange,l=r.scaleDef,u=a,d=u?this._getScaleStopInfo(e):void 0,f=k+e,p=A+e,m=u===`continuous`?this._getDefaultScaleRange(e):void 0,h=r.outputComponents??1,g=h===1?r.outputScalarType:`f32`,_=t.scale?.interpolate,v=(e,t)=>{if(Array.isArray(e)||ArrayBuffer.isView(e))return e;throw Error(t)},y=e=>{if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(typeof e[t]!=`number`)return!1;return!0},b=s?t=>{if(!l.normalizeDomainMap)throw Error(`Scale "${r.scaleType}" does not provide domain map normalization.`);if(!Array.isArray(t)&&!ArrayBuffer.isView(t))throw Error(`Scale on "${e}" requires an explicit domain array.`);let i=t,a=l.normalizeDomainMap({name:e,scale:n,domain:i});return a?{needsRebind:this._updateDomainMap(e,a.domainMap),domainUniform:a.domainUniform}:{needsRebind:!1}}:null,x=null,S=null;if(u)if(u===`continuous`){let t=d?.domainLength??2,r=l.normalizeDomain??(({name:e,domain:t,domainLength:n})=>{let r=v(t,`Scale on "${e}" expects a domain array.`);if(n&&r.length!==n)throw Error(`Scale domain for "${e}" expects ${n} entries, got ${r.length}.`);return r}),i=d?.rangeLength;x=i=>{let a=r({name:e,scale:n,domain:i,domainLength:t});a&&this._setUniformValue(f,a)},S=t=>{if(!Array.isArray(t))throw Error(`Scale on "${e}" expects a range array.`);if(i&&t.length!==i)throw Error(`Scale range for "${e}" expects ${i} entries, got ${t.length}.`);this._setUniformValue(p,t)}}else{if(!d)throw Error(`Scale on "${e}" has no recorded stop sizes.`);let t=d.domainLength,n=d.rangeLength,r=u===`threshold`?`Threshold`:`Piecewise`;x=n=>{let i=v(n,`${r} scale on "${e}" expects a domain array.`);if(i.length!==t)throw Error(`${r} scale on "${e}" expects ${t} domain entries, got ${i.length}.`);this._setUniformValue(f,i)},S=t=>{if(!Array.isArray(t))throw Error(`${r} scale on "${e}" expects a range array.`);if(t.length!==n)throw Error(`${r} scale on "${e}" expects ${n} range entries, got ${t.length}.`);if(h===1&&y(t)){this._setUniformValue(p,t);return}let i=Tt(e,t,h,u);this._setUniformValue(p,i)}}return{updateDomain:x&&b?e=>{let t=b(e);return x(t.domainUniform??e),t.needsRebind}:x?e=>(x(e),!1):b?e=>{let t=b(e);return t.domainUniform&&this._setUniformValue(f,t.domainUniform),t.needsRebind}:()=>!1,updateRange:o?t=>this._updateRangeTexture(e,t,d?.rangeLength,_):c?t=>{if(At(t))throw Error(`Ordinal scale on "${e}" does not support interpolator ranges.`);if(!Array.isArray(t))throw Error(`Ordinal scale on "${e}" expects a range array.`);let n=t,r=h===1&&y(n)?n:Dt(e,n,h),i=this._buildOrdinalRangeBufferData(r,h,g);return this._setOrdinalRangeBuffer(e,i,r.length)}:u?t=>{if(At(t))throw Error(`Scale on "${e}" does not support interpolator ranges.`);let n=t??(u===`continuous`?m??t:t);if(!Array.isArray(n))throw Error(`Scale on "${e}" expects a range array.`);return S(n),!1}:()=>!1}}_updateRangeTexture(e,t,n,r){let i=t,a;if(At(i))a=pt(i);else{if(!Ot(i))throw Error(`Interpolated color scale on "${e}" requires a color range.`);let t=i;if(n!==void 0&&t.length!==n)throw Error(`Scale on "${e}" expects ${n} range entries, got ${t.length}.`);a=pt({scheme:t,mode:`interpolate`,interpolate:r})}if(!a)throw Error(`Failed to build range texture for "${e}".`);return this._setRangeTexture(e,a)}_setRangeTexture(e,t){let n=ve(t),r=this._ensureChannelResources(e),i=r.rangeTexture,a=!i||i.width!==n.width||i.height!==n.height||i.format!==n.format,o=a?this._device.createTexture({label:O(this._label,`scale ${e} range texture`),size:{width:n.width,height:n.height,depthOrArrayLayers:1},format:n.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}):i.texture;return this._device.queue.writeTexture({texture:o},E(n.data),{bytesPerRow:n.bytesPerRow},{width:n.width,height:n.height}),r.rangeTexture={texture:o,sampler:i?.sampler??this._device.createSampler({label:O(this._label,`scale ${e} range sampler`)}),width:n.width,height:n.height,format:n.format},a&&i?.texture.destroy(),a}_updateDomainMap(e,t){let n=this._buildDomainMapBufferData(t);return this._setDomainMapBuffer(e,n.table,n.length)}_buildDomainMapBufferData(e){if(e.length===0)return{table:new Uint32Array([Mt,0]),length:0};let{table:t}=It(e.map((e,t)=>[e,t]));return{table:t,length:e.length}}_setDomainMapBuffer(e,t,n){let r=this._ensureChannelResources(e),i=r.domainMap,a=t.byteLength,o=r.domainMap?.buffer,s=!o||!i||i.size.byteLength!==a;if(s){let t=o;o=this._device.createBuffer({label:O(this._label,`scale ${e} domain map`),size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t?.destroy()}return this._device.queue.writeBuffer(o,0,E(t)),r.domainMap={buffer:o,size:{length:n,byteLength:a}},this._setUniformValue(De+e,n),s}_buildOrdinalRangeBufferData(e,t,n){if(t===1){let t=e;return n===`u32`?new Uint32Array(t):n===`i32`?new Int32Array(t):new Float32Array(t)}let r=new Float32Array(e.length*4);for(let t=0;t<e.length;t++)r.set(e[t],t*4);return r}_setOrdinalRangeBuffer(e,t,n){let r=this._ensureChannelResources(e),i=r.ordinalRange,a=t.byteLength,o=r.ordinalRange?.buffer,s=!o||!i||i.size.byteLength!==a;if(s){let t=o;o=this._device.createBuffer({label:O(this._label,`scale ${e} ordinal range`),size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t?.destroy()}return this._device.queue.writeBuffer(o,0,E(t)),r.ordinalRange={buffer:o,size:{length:n,byteLength:a}},this._setUniformValue(Te+e,n),s}destroy(){for(let e of this._channelResources.values())e.ordinalRange?.buffer.destroy(),e.domainMap?.buffer.destroy(),e.rangeTexture?.texture.destroy();this._channelResources.clear(),this._scaleUpdaters.clear()}};function Bt(e){return e===`u32`?`u32`:e===`i32`?`i32`:`f32`}function Vt(e){return e.data==null?e.value!=null||e.default!=null?`value`:`missing`:`series`}function Ht(e,t){let n=Vt(t),r=ct(t.scale),i=lt(t.scale),a=t.components??1,o=Bt(t.type),s=a===1?ft(r,o):`f32`,c=n===`series`||i===`identity`?a:1,l=t.inputComponents??c,u=t.scale?.range,d=At(u),f=Ot(u),p=d||t.scale?.interpolate!==void 0||f,m=jt(t.scale,a),h=xt(t.scale),g=ut(r,h),_=i!==`identity`||h||m||a!==l,v=g.needsOrdinalRange,y=g.needsDomainMap,b=r.continuous,x=r.vectorOutput??`never`,S=a>1&&l===1&&i!==`identity`&&(x===`always`||x===`interpolated`&&p);return{name:e,channel:t,sourceKind:n,scaleType:i,scaleDef:r,outputComponents:a,inputComponents:l,scalarType:o,outputScalarType:s,useRangeTexture:m,isPiecewise:h,needsScaleFunction:_,needsOrdinalRange:v,needsDomainMap:y,stopKind:g.stopKind,interpolateEnabled:p,allowsScalarToVector:S,isContinuousScale:b,rangeIsFunction:d,rangeIsColor:f}}function Ut(e){return e===`f32`||e===`u32`||e===`i32`}function Wt(e,t,n){let{scaleType:r,outputComponents:i,inputComponents:a,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l,isPiecewise:u,needsDomainMap:d,scalarType:f,outputScalarType:p,scaleDef:m,interpolateEnabled:h}=n,g=m?.vectorOutput??`never`,_=g===`always`||g===`interpolated`&&h,v=_&&o;if(i>1&&!(i===1||(r===`identity`?a===i:_)))return`Channel "${e}" uses vector components but scale "${r}" only supports scalars.`;if(c&&!s)return`Channel "${e}" only supports function ranges with continuous scales.`;if(c&&i!==4)return`Channel "${e}" requires vec4 outputs when using function ranges.`;if(t.scale?.interpolate!==void 0){if(!l)return`Channel "${e}" requires a color range when interpolate is set.`;if(!s)return`Channel "${e}" only supports color interpolation with continuous scales.`;if(i!==4)return`Channel "${e}" requires vec4 outputs when interpolate is set.`}if(s&&!c&&l&&i!==4)return`Channel "${e}" requires vec4 outputs when using color ranges.`;let y=m?.input??`any`;if(y===`numeric`&&!Ut(f))return`Channel "${e}" requires numeric input for "${r}" scale.`;if(y===`u32`&&f!==`u32`)return`Channel "${e}" requires u32 input for "${r}" scale.`;if(i>1&&f!==`f32`&&!v)return`Only f32 vectors are supported for "${e}" right now.`;let b=a===2&&i===1&&f===`u32`&&!!m?.allowsPackedScalarInput;return a>1&&f!==`f32`&&!b?`Only f32 vectors are supported for "${e}" input data.`:a!==i&&!v&&!b?`Channel "${e}" only supports mismatched input/output components when mapping scalars to vectors.`:m?.validate?.({name:e,channel:t,scaleType:r,outputComponents:i,inputComponents:a,scalarType:f,outputScalarType:p,isPiecewise:u,needsDomainMap:d,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l})||null}function Gt({channels:e,context:t}){let n={},r=new Map,{channelOrder:i}=t;for(let a of i){let i=Kt({name:a,configChannel:e?.[a],context:t});i&&(n[a]=i.channel,r.set(a,i.analysis))}return qt(n,r,t),{channels:n,analysisByChannel:r}}function Kt({name:e,configChannel:t,context:n}){let{channelOrder:r,optionalChannels:i,defaultChannelConfigs:a,defaultValues:o,channelSpecs:s}=n,c={...a[e]??{},...t??{}};if(c.components||=1,w(c)&&!c.inputComponents&&(c.inputComponents=(c.scale?.type??`identity`)===`identity`?c.components:1),w(c)&&(t?.value!==void 0||t?.default!==void 0))throw Error(`Channel "${e}" must not specify both data and value.`);return w(c)&&(delete c.value,delete c.default),!w(c)&&c.value===void 0&&(c.default===void 0?o[e]!==void 0&&(c.value=o[e]):c.value=c.default),i.includes(e)&&!w(c)&&!T(c)?null:{channel:c,analysis:Xt(e,c,{channelOrder:r,optionalChannels:i,channelSpecs:s})}}function qt(e,t,n){let r=0;for(let[i,a]of Object.entries(e)){let o=a.conditions??[];if(!o.length)continue;let s=[];for(let a of o){let o={...a,when:Jt(a.when)};if(!(`channel`in a)||!a.channel){s.push(o);continue}let c=`${i}__cond${r++}`,l=Yt({name:i,analysisName:c,configChannel:a.channel,context:n});e[c]=l.channel,t.set(c,l.analysis),s.push({...o,channelName:c})}a.conditions=s}}function Jt(e){return e.type===`interval`?{...e,targets:e.targets.map(e=>({...e,...e.secondaryInput!==void 0&&e.hitTest===void 0?{hitTest:`intersects`}:{}}))}:{...e}}function Yt({name:e,analysisName:t,configChannel:n,context:r}){let{channelOrder:i,channelSpecs:a}=r,o={...n??{}};if(o.conditions!==void 0)throw Error(`Channel "${e}" conditions must not nest other conditions.`);if(o.default!==void 0)throw Error(`Channel "${e}" conditions must not include defaults.`);if(o.components||=a[e]?.components??1,w(o)&&!o.inputComponents&&(o.inputComponents=(o.scale?.type??`identity`)===`identity`?o.components:1),w(o)&&o.value!==void 0)throw Error(`Channel "${e}" conditions must not specify both data and value.`);if(!w(o)&&o.value===void 0)throw Error(`Channel "${e}" conditions must specify either data or value.`);return w(o)&&(delete o.value,delete o.default),{channel:o,analysis:Xt(e,o,{channelOrder:i,optionalChannels:[],channelSpecs:a},t)}}function Xt(e,t,n,r=e){let{channelOrder:i,optionalChannels:a,channelSpecs:o}=n;if(!i.includes(e))throw Error(`Unknown channel: ${e}`);let s=o[e];if(s?.components&&t.components!==s.components)throw Error(`Channel "${e}" must use ${s.components} components`);let c=Ht(r,t),{scaleDef:l,outputComponents:u}=c,d=(l.allowsU32InputOverride===!0&&s?.type===`f32`&&t.type===`u32`||l.allowsF32InputOverride===!0&&s?.type===`u32`&&t.type===`f32`)&&(u===1||u===4);if(s?.type&&t.type&&t.type!==s.type&&!d)throw Error(`Channel "${e}" must use type "${s.type}"`);if(!a.includes(e)&&!w(t)&&!T(t))throw Error(`Channel "${e}" must specify either data or value.`);if(w(t)&&!t.type)throw Error(`Channel "${e}" requires a series data type.`);if(a.includes(e)&&!w(t)&&!T(t))return c;if(t.components&&![1,2,4].includes(t.components))throw Error(`Invalid component count for "${e}"`);if(t.inputComponents&&![1,2,4].includes(t.inputComponents))throw Error(`Invalid input component count for "${e}"`);let f=Wt(e,t,c);if(f)throw Error(f);if(t.conditions!==void 0&&!Array.isArray(t.conditions))throw Error(`Channel "${e}" conditions must be an array.`);if(Array.isArray(t.conditions))for(let n of t.conditions){if(!n||typeof n!=`object`)throw Error(`Channel "${e}" has an invalid condition entry.`);if(!n.when||typeof n.when!=`object`)throw Error(`Channel "${e}" conditions require a "when" predicate.`);let{when:t,value:r}=n;if(typeof t.selection!=`string`||t.selection.length<1)throw Error(`Channel "${e}" conditions require a selection name.`);if(t.type!==`single`&&t.type!==`multi`&&t.type!==`interval`)throw Error(`Channel "${e}" has invalid selection type "${t.type}".`);if(Object.hasOwn(t,`channel`))throw Error(`Selection "${t.selection}" uses the obsolete "channel" form; specify targets.`);if(Object.hasOwn(t,`secondaryChannel`))throw Error(`Selection "${t.selection}" uses the obsolete "secondaryChannel" form; specify secondaryInput.`);if(t.type===`interval`){if(!Array.isArray(t.targets)||t.targets.length===0)throw Error(`Interval selection "${t.selection}" must specify a non-empty targets array.`);let n=new Set;for(let r of t.targets){if(!r||typeof r!=`object`)throw Error(`Interval selection "${t.selection}" has an invalid target.`);if(typeof r.input!=`string`||r.input.length===0)throw Error(`Interval selection "${t.selection}" targets require an input name.`);if(n.has(r.input))throw Error(`Interval selection "${t.selection}" cannot target "${r.input}" more than once.`);if(n.add(r.input),r.secondaryInput!==void 0&&(typeof r.secondaryInput!=`string`||r.secondaryInput.length===0))throw Error(`Interval selection "${t.selection}" has an invalid secondary input.`);if(r.hitTest!==void 0&&r.hitTest!==`intersects`&&r.hitTest!==`encloses`&&r.hitTest!==`endpoints`)throw Error(`Interval selection "${t.selection}" has invalid hit-test mode "${r.hitTest}".`);if(r.hitTest!==void 0&&r.secondaryInput===void 0)throw Error(`Interval selection "${t.selection}" cannot specify a hit-test mode without a secondary input.`);if(r.input!==void 0&&!i.includes(r.input))throw Error(`Channel "${e}" references unknown selection input "${r.input}".`);if(r.secondaryInput!==void 0&&!i.includes(r.secondaryInput))throw Error(`Channel "${e}" references unknown selection input "${r.secondaryInput}".`)}}else if(Object.hasOwn(t,`targets`))throw Error(`Selection "${t.selection}" may only specify targets for interval selections.`);if(t.empty!==void 0&&typeof t.empty!=`boolean`)throw Error(`Selection "${t.selection}" empty flag must be boolean.`);if(n.channel){if(r!==void 0)throw Error(`Channel "${e}" conditions must not specify both channel and value.`);let t=n.channel;if(!t||typeof t!=`object`)throw Error(`Channel "${e}" conditions must include a channel config.`);if(`conditions`in t&&t.conditions!==void 0)throw Error(`Channel "${e}" conditions must not nest other conditions.`);if(`default`in t&&t.default!==void 0)throw Error(`Channel "${e}" conditions must not include defaults.`);if(!w(t)&&!T(t))throw Error(`Channel "${e}" conditions must supply data or value.`);if(w(t)&&!t.type)throw Error(`Channel "${e}" conditions require a series data type.`);continue}if(r===void 0)throw Error(`Channel "${e}" conditions require a value.`);if(c.outputComponents===1){if(typeof r!=`number`)throw Error(`Channel "${e}" conditions require scalar values.`)}else if(!Array.isArray(r)||r.length!==c.outputComponents)throw Error(`Channel "${e}" conditions require ${c.outputComponents}-component values.`)}return c}var Zt=`

fn getDiscreteColor(s: texture_2d<f32>, index: i32) -> vec3<f32> {
    let size = textureDimensions(s).x;
    let ix = i32(u32(index) % size);
    return textureLoad(s, vec2<i32>(ix, 0), 0).rgb;
}

fn getInterpolatedColor(s: texture_2d<f32>, samp: sampler, unitValue: f32) -> vec3<f32> {
    return textureSampleLevel(s, samp, vec2<f32>(unitValue, 0.0), 0.0).rgb;
}

fn clampToRange(value: f32, range: vec2<f32>) -> f32 {
    return clamp(value, min(range.x, range.y), max(range.x, range.y));
}

fn clampToDomain(value: f32, domain: vec2<f32>) -> f32 {
    return clamp(value, min(domain.x, domain.y), max(domain.x, domain.y));
}

// Matches Math.round, which d3-interpolate uses for rangeRound. Negative half
// ties round toward positive zero.
fn roundLikeD3(value: f32) -> f32 {
    return floor(value + 0.5);
}

// Uniform arrays must use 16-byte elements, so scalar pairs are packed into vec4 slots.
fn readPacked2(values: array<vec4<f32>, 2>) -> vec2<f32> {
    return vec2<f32>(values[0].x, values[1].x);
}

fn readPacked3(values: array<vec4<f32>, 3>) -> vec3<f32> {
    return vec3<f32>(values[0].x, values[1].x, values[2].x);
}

// Using max to prevent the shader compiler from wrecking the precision.
// Otherwise the compiler could optimize the expression into a form that
// does premature rounding. globals.uZero is a uniform (always 0.0) to
// keep the division from constant folding.
fn stableSub(a: f32, b: f32) -> f32 {
    let inf = 1.0 / globals.uZero;
    return max(a - b, -inf);
}
`;function Qt(e){let t=new Set,n=new Set,r=[];function i(e){if(!n.has(e)){if(t.has(e))throw Error(`Scale WGSL dependency cycle: ${e.type}`);t.add(e);for(let t of e.wgslDeps??[])i(t);e.wgsl&&r.push(e.wgsl),t.delete(e),n.add(e)}}for(let t of e)i(t);return`${Zt}\n${r.join(`
`)}`}var $t=`

const HASH_EMPTY_KEY: u32 = 0xffffffffu;
const HASH_NOT_FOUND: u32 = 0xffffffffu;

struct HashEntry {
    key: u32,
    value: u32,
};

// 32-bit integer hash for u32 keys. Keep in sync with JS hash32.
fn hash32(key: u32) -> u32 {
    var v = key;
    v ^= v >> 16u;
    v *= 0x7feb352du;
    v ^= v >> 15u;
    v *= 0x846ca68bu;
    v ^= v >> 16u;
    return v;
}
`;function en(e){return`hashLookup_${e}`}function tn(e){return`
fn ${en(e)}(key: u32, maxProbes: u32) -> u32 {
    let size = arrayLength(&${e});
    if (size == 0u) {
        return HASH_NOT_FOUND;
    }
    let mask = size - 1u;
    var index = hash32(key) & mask;
    for (var probe = 0u; probe < maxProbes; probe += 1u) {
        let entry = ${e}[index];
        if (entry.key == key) {
            return entry.value;
        }
        if (entry.key == HASH_EMPTY_KEY) {
            return HASH_NOT_FOUND;
        }
        index = (index + 1u) & mask;
    }
    return HASH_NOT_FOUND;
}
`}function nn(e,t){let n=[],r=!0,i=[];for(let[a,o]of e.split(/\r?\n/).entries()){let e=o.trim();if(!e.startsWith(`#`)){r&&i.push(o);continue}let s=e.match(/^#([A-Za-z]+)\b(.*)$/);if(!s)throw N(a,`Malformed directive`);let[,c,l]=s,u=l.trim();if(c===`if`){let e=rn(u,t);n.push({parentActive:r,condition:e,elseSeen:!1}),r&&=e}else if(c===`else`){if(u)throw N(a,`#else does not accept an argument`);let e=n.at(-1);if(!e)throw N(a,`#else has no matching #if`);if(e.elseSeen)throw N(a,`#if block contains more than one #else`);e.elseSeen=!0,r=e.parentActive&&!e.condition}else if(c===`endif`){if(u)throw N(a,`#endif does not accept an argument`);let e=n.pop();if(!e)throw N(a,`#endif has no matching #if`);r=e.parentActive}else throw N(a,`Unsupported directive #${c}`)}if(n.length)throw Error(`Unterminated shader #if block.`);return i.join(`
`)}function rn(e,t){let n=an(e),r=0,i=()=>n[r],a=()=>n[r++];function o(){if(i()===`!`)return a(),!o();if(i()===`(`){a();let e=c();if(a()!==`)`)throw Error(`Expected ")" in shader condition.`);return e}if(a()!==`defined`||a()!==`(`)throw Error(`Expected defined(NAME) in shader condition.`);let e=a();if(!e||!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Expected a symbol name in defined(NAME).`);if(a()!==`)`)throw Error(`Expected ")" after shader symbol name.`);return t.has(e)}function s(){let e=o();for(;i()===`&&`;){a();let t=o();e&&=t}return e}function c(){let e=s();for(;i()===`||`;){a();let t=s();e||=t}return e}if(!n.length)throw Error(`Shader #if requires a condition.`);let l=c();if(r!==n.length)throw Error(`Unexpected token "${n[r]}" in shader condition.`);return l}function an(e){let t=[],n=/defined|[A-Za-z_][A-Za-z0-9_]*|&&|\|\||!|\(|\)/gy,r=0;for(;r<e.length;){if(/\s/.test(e[r])){r+=1;continue}n.lastIndex=r;let i=n.exec(e);if(!i)throw Error(`Unexpected token near "${e.slice(r)}" in shader condition.`);t.push(i[0]),r=n.lastIndex}return t}function N(e,t){return Error(`${t} at shader line ${e+1}.`)}function on(e,t,n){let r=e===`u32`?`u32`:e===`i32`?`i32`:`f32`,i=t=>{let n=Number(t??0);return e===`u32`?`u32(${Math.trunc(n)})`:e===`i32`?`i32(${Math.trunc(n)})`:Number.isInteger(n)?`${n}.0`:`${n}`};if(t===1)return i(Array.isArray(n)?n[0]:n);let a=(Array.isArray(n)?n:[n]).slice(0,t);for(;a.length<t;)a.push(0);return`vec${t}<${r}>(${a.map(i).join(`, `)})`}var P={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}.DEV??!1;function sn({name:e,scaleDef:t,functionName:n,rawValueExpr:r,scalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,scaleConfig:c,domainMapName:l=null,useRangeTexture:u=!1}){let d=Array.isArray(c?.domain)?c.domain.length:0,f=Array.isArray(c?.range)?c.range.length:0,p=xt(c);if(u&&o!==4)throw Error(`Channel "${e}" requires vec4 output when using interpolate textures.`);let m=c?.round===!0&&o===1&&!u;return t.emit({name:e,functionName:n,scaleConfig:c,rawValueExpr:r,inputScalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,clamp:c?.clamp===!0,round:m,domainLength:d,rangeLength:f,isPiecewise:p,domainMapName:l,useRangeTexture:u})}function cn(e){return`u_scalar_${e}`}function ln(e){if(e===void 0)return;function t(e){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`Visibility predicate nodes must be objects.`);let n=e,r=[`compare`,`selection`,`all`,`any`].filter(e=>Object.hasOwn(n,e));if(r.length!==1)throw Error(`Visibility predicate nodes must specify exactly one of compare, selection, all, or any.`);let i=r[0];if(i===`all`||i===`any`){let e=n[i];if(!Array.isArray(e)||e.length===0)throw Error(`Visibility predicate ${i} nodes must not be empty.`);e.forEach(t)}return e}return t(e)}function un({predicate:e,channelIRs:t,channelNames:n,inputNames:r,scalarSlots:i,selectionDefs:a}){e=ln(e);let o=new Map(t.map(e=>[e.name,e])),s=new Set(a.map(e=>e.name));function c(e){if(!e||typeof e!=`object`)throw Error(`Visibility predicate operands must be objects.`);let t=Object.keys(e);if(t.length!==1)throw Error(`Visibility predicate operands must specify exactly one namespace.`);let a=t[0],s=e[a];if(typeof s!=`string`||s.length===0)throw Error(`Visibility predicate ${a} operands require a name.`);if(a===`channel`){if(!n.has(s))throw Error(`Visibility predicate references unknown channel "${s}".`);return l(s,o.get(s))}if(a===`input`){if(!r.has(s))throw Error(`Visibility predicate references unknown input "${s}".`);return l(s,o.get(s))}if(a===`slot`){let e=i[s];if(!e)throw Error(`Visibility predicate references unknown slot "${s}".`);return{expression:`params.${cn(s)}`,type:e.type}}throw Error(`Visibility predicate has unsupported operand namespace "${a}".`)}function l(e,t){if(!t)throw Error(`Visibility predicate references unavailable input "${e}".`);if(t.inputComponents!==1)throw Error(`Visibility predicate input "${e}" must be scalar, got ${t.inputComponents} components.`);return{expression:t.rawValueExpr,type:t.scalarType}}function u(e){if(`compare`in e){if(e.compare!==`<`&&e.compare!==`<=`&&e.compare!==`>`&&e.compare!==`>=`)throw Error(`Visibility predicate has unsupported comparison "${e.compare}".`);let t=c(e.left),n=c(e.right);if(t.type!==n.type)throw Error(`Visibility predicate comparison types must match: ${t.type} and ${n.type}.`);return`(${t.expression} ${e.compare} ${n.expression})`}if(`selection`in e){if(typeof e.selection!=`string`||!s.has(e.selection))throw Error(`Visibility predicate references unknown selection "${e.selection}".`);if(e.empty!==void 0&&typeof e.empty!=`boolean`)throw Error(`Visibility predicate selection "${e.selection}" empty policy must be boolean.`);return`${Ve}${e.selection}(i, ${e.empty===!0?`true`:`false`})`}if(`all`in e||`any`in e){let t=`all`in e?`&&`:`||`;return`(${(`all`in e?e.all:e.any).map(u).join(` ${t} `)})`}throw Error(`Visibility predicate has an unsupported node shape.`)}return`
fn isInstanceVisible(i: u32) -> bool {
    return ${e?u(e):`true`};
}
`}function dn({compiledChannels:e,uniformLayout:t,shaderBody:n,packedSeriesLayout:r,selectionDefs:i=[],visibleWhen:a,scalarSlots:o={},extraResources:s=[],placementIndex:c}){let{channels:l,channelIRs:u,channelNames:d,inputNames:f}=e,p=c&&`source`in c&&c.source===`draw`,m=[],h=[],g={},_=[],v=[],y=[],b=[],x=[];function S(e,t=e.name){return`fn ${Ae}${t}(i: u32) -> ${e.outputComponents===1?e.outputScalarType:`vec${e.outputComponents}<f32>`} { return ${e.rawValueExpr}; }`}let C=1,ee=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE,te=u.filter(e=>e.sourceKind===`series`),ne=u.filter(e=>e.sourceKind===`uniform`||e.sourceKind===`literal`),re=u.filter(e=>e.needsOrdinalRange),ie=u.filter(e=>e.needsDomainMap),ae=u.filter(e=>e.useRangeTexture),oe=new Set(t.map(({name:e})=>e)),se=new Map(u.map(e=>[e.name,e])),ce=new Map(i.map(e=>[e.name,e])),le=un({predicate:a,channelIRs:u,channelNames:d,inputNames:f,scalarSlots:o,selectionDefs:i}),ue=e=>(g[e]||(g[e]={}),g[e]);function de(e){let t=`${Ve}${e.name}`,n=se.get(`uniqueId`);if(P&&(e.type===`single`||e.type===`multi`)&&!n)throw Error(`Selection "${e.name}" requires a uniqueId channel.`);switch(e.type){case`single`:return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let selected = u32(params.${Re}${e.name});
    if (allowEmpty && selected == 0u) { return true; }
    if (selected == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return id == selected;
}
`;case`multi`:{let r=Be+e.name,i=en(r);return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let count = u32(params.${ze}${e.name});
    if (allowEmpty && count == 0u) { return true; }
    if (count == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return ${i}(id, arrayLength(&${r})) != HASH_NOT_FOUND;
}
`}case`interval`:{let n=e.targets??[];if(P&&n.length===0)throw Error(`Interval selection "${e.name}" must have at least one target.`);return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    var matches = true;
${n.map((t,n)=>{let r=se.get(t.input),i=t.secondaryInput?se.get(t.secondaryInput):null;if(P&&!r)throw Error(`Selection "${e.name}" references missing input "${t.input}".`);if(P&&t.secondaryInput&&!i)throw Error(`Selection "${e.name}" references missing input "${t.secondaryInput}".`);if(P&&t.hitTest!==void 0&&t.hitTest!==`intersects`&&!t.secondaryInput)throw Error(`Selection "${e.name}" cannot specify a hit-test mode without a secondary input.`);let a=He(e.name,n),o=Ue(e.name,n),s=r?.rawValueExpr??`0.0`,c=i?.rawValueExpr??null,l=t.hitTest??`intersects`,u;if(!c)u=`${o}_lo <= ${s} && ${s} <= ${o}_hi`;else if(l===`encloses`)u=`${o}_lo <= ${o}_dLo && ${o}_dHi <= ${o}_hi`;else if(l===`endpoints`)u=`(${o}_lo <= ${o}_d0 && ${o}_d0 <= ${o}_hi) || (${o}_lo <= ${o}_d1 && ${o}_d1 <= ${o}_hi)`;else if(l===`intersects`)u=`${o}_dHi >= ${o}_lo && ${o}_dLo <= ${o}_hi`;else throw Error(`Selection "${e.name}" has unsupported hit-test mode "${l}".`);return`
    if (params.${a} == 0u) {
        matches = matches && allowEmpty;
    } else {
        let ${o}_lo = min(params.${o}.x, params.${o}.y);
        let ${o}_hi = max(params.${o}.x, params.${o}.y);${c?`
        let ${o}_d0 = ${s};
        let ${o}_d1 = ${c};
        let ${o}_dLo = min(${o}_d0, ${o}_d1);
        let ${o}_dHi = max(${o}_d0, ${o}_d1);`:``}
        matches = matches && (${u});
    }`}).join(`
`)}
    return matches;
}
`}default:throw Error(`Selection "${e.name}" has unsupported type "${e.type}".`)}}function w(e,t){let{name:n,outputComponents:r,outputScalarType:i}=e;return`
fn ${Ae}${n}(i: u32) -> ${r===1?i:`vec${r}<f32>`} {
${(e.channel.conditions??[]).map(e=>{let t=e.when.selection,a=ce.get(t);if(P&&!a)throw Error(`Channel "${n}" references unknown selection "${t}".`);let o=e.when.empty===!0?`true`:`false`;return e.channelName?`    if (${Ve}${t}(i, ${o})) { return ${Ae}${e.channelName}(i); }`:`    if (${Ve}${t}(i, ${o})) { return ${on(r===1?i:`f32`,r,e.value)}; }`}).join(`
`)}
    return ${Ae}${t}(i);
}
`}let T=new Set;for(let e of Object.keys(l))T.add(`${e}_DEFINED`);c&&(T.add(`PLACEMENT_ENABLED`),p&&T.add(`DRAW_PLACEMENT`));let fe=new Set,pe=r??new Map;if(P&&te.length>0&&pe.size===0)throw Error(`Packed series layout is required for series channels.`);for(let e of pe.values())if(e.scalarType===`f32`||e.scalarType===`u32`||e.scalarType===`i32`)fe.add(e.scalarType);else if(P)throw Error(`Packed series only supports f32/u32/i32. Found "${e.scalarType}".`);if(fe.has(`f32`)){let e=C++;m.push({binding:e,visibility:ee,buffer:{type:`read-only-storage`}}),h.push({name:`seriesF32`,role:`series`}),_.push(`@group(1) @binding(${e}) var<storage, read> seriesF32: array<f32>;`)}if(fe.has(`u32`)){let e=C++;m.push({binding:e,visibility:ee,buffer:{type:`read-only-storage`}}),h.push({name:`seriesU32`,role:`series`}),_.push(`@group(1) @binding(${e}) var<storage, read> seriesU32: array<u32>;`)}if(fe.has(`i32`)){let e=C++;m.push({binding:e,visibility:ee,buffer:{type:`read-only-storage`}}),h.push({name:`seriesI32`,role:`series`}),_.push(`@group(1) @binding(${e}) var<storage, read> seriesI32: array<i32>;`)}for(let e of te){let{name:t}=e;if(e.inputComponents>1&&e.scalarType!==`f32`&&!(e.scalarType===`u32`&&e.inputComponents===2&&e.scaleType===`index`))throw Error(`Channel "${t}" does not support non-f32 vector inputs.`);let n=pe.get(t);if(P&&!n)throw Error(`Packed series layout is missing entry for "${t}".`);if(P&&n.scalarType!==e.scalarType)throw Error(`Packed series type mismatch for "${t}". Expected ${e.scalarType}, got ${n.scalarType}.`);if(P&&n.components!==e.inputComponents)throw Error(`Packed series component mismatch for "${t}". Expected ${e.inputComponents}, got ${n.components}.`);let r=n.scalarType===`f32`?`seriesF32`:n.scalarType===`u32`?`seriesU32`:`seriesI32`,i=n.offset,a=n.stride;n.components===1?v.push(`fn read_${t}(i: u32) -> ${n.scalarType} {
    return ${r}[${i}u + i * ${a}u];
}`):n.components===2?v.push(`fn read_${t}(i: u32) -> vec2<${n.scalarType}> {
    let base = ${i}u + i * ${a}u;
    return vec2<${n.scalarType}>(${r}[base], ${r}[base + 1u]);
}`):v.push(`fn read_${t}(i: u32) -> vec4<${n.scalarType}> {
    let base = ${i}u + i * ${a}u;
    return vec4<${n.scalarType}>(${r}[base], ${r}[base + 1u], ${r}[base + 2u], ${r}[base + 3u]);
}`);let o=Array.isArray(e.channel.conditions)&&e.channel.conditions.length>0,s=o?`${t}_base`:t;e.needsScaleFunction?y.push(sn({name:t,functionName:s,scaleDef:e.scaleDef,rawValueExpr:e.rawValueExpr,scalarType:e.scalarType,inputComponents:e.inputComponents,outputComponents:e.outputComponents,outputScalarType:e.outputScalarType,scaleConfig:e.channel.scale,useRangeTexture:e.useRangeTexture,domainMapName:e.needsDomainMap?`${Ee}${t}`:null})):y.push(S(e,s)),o&&y.push(w(e,s))}if(i.length>0)for(let e of i)b.push(de(e));let me=se.has(`uniqueId`)?i.map(e=>`${Ve}${e.name}(i, false)`):[];b.push(`
fn isDatumSelected(i: u32) -> bool {
    return ${me.join(` || `)||`false`};
}
`);for(let e of re){let{name:t}=e,n=ue(t);n.ordinalRange=!0,n.rangeCountUniform=!0;let r=C++;m.push({binding:r,visibility:ee,buffer:{type:`read-only-storage`}}),h.push({name:t,role:`ordinalRange`});let i=e.outputComponents===1?e.outputScalarType:`vec4<f32>`,a=`range_${t}`;_.push(`@group(1) @binding(${r}) var<storage, read> ${a}: array<${i}>;`)}for(let e of ie){let{name:t}=e,n=ue(t);n.domainMap=!0,n.domainMapCountUniform=!0;let r=C++;m.push({binding:r,visibility:ee,buffer:{type:`read-only-storage`}}),h.push({name:t,role:`domainMap`});let i=`${Ee}${t}`;_.push(`@group(1) @binding(${r}) var<storage, read> ${i}: array<HashEntry>;`)}for(let e of ae){let{name:t}=e,n=ue(t);n.rangeTexture=!0,n.rangeSampler=!0;let r=C++;m.push({binding:r,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:`float`}}),h.push({name:t,role:`rangeTexture`}),_.push(`@group(1) @binding(${r}) var ${Oe}${t}: texture_2d<f32>;`);let i=C++;m.push({binding:i,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,sampler:{type:`filtering`}}),h.push({name:t,role:`rangeSampler`}),_.push(`@group(1) @binding(${i}) var ${ke}${t}: sampler;`)}for(let e of s){let t=C++,n=e.visibility===`vertex`?GPUShaderStage.VERTEX:e.visibility===`fragment`?GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r=e.wgslName??e.name;if(e.kind===`buffer`){m.push({binding:t,visibility:n,buffer:{type:e.bufferType??`read-only-storage`}}),h.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var<storage, read> ${r}: ${e.wgslType??`array<f32>`};`);continue}if(e.kind===`texture`){let i=e.dimension??`2d`,a=e.sampleType??`float`,o=a===`uint`?`u32`:a===`sint`?`i32`:`f32`,s=i===`2d-array`?`texture_2d_array<${o}>`:`texture_2d<${o}>`;m.push({binding:t,visibility:n,texture:{sampleType:a,viewDimension:i===`2d-array`?`2d-array`:`2d`}}),h.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var ${r}: ${s};`);continue}e.kind===`sampler`&&(m.push({binding:t,visibility:n,sampler:{type:e.samplerType??`filtering`}}),h.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var ${r}: sampler;`))}for(let e of ne){let{name:t}=e,n=Array.isArray(e.channel.conditions)&&e.channel.conditions.length>0,r=n?`${t}_base`:t;e.needsScaleFunction?y.push(sn({name:t,functionName:r,scaleDef:e.scaleDef,rawValueExpr:e.rawValueExpr,scalarType:e.scalarType,inputComponents:e.inputComponents,outputComponents:e.outputComponents,outputScalarType:e.outputScalarType,scaleConfig:e.channel.scale,useRangeTexture:e.useRangeTexture,domainMapName:e.needsDomainMap?`${Ee}${t}`:null})):y.push(S(e,r)),n&&y.push(w(e,r))}if(P)for(let[e,t]of Object.entries(g)){if(t.rangeCountUniform&&!oe.has(`uRangeCount_${e}`))throw Error(`Ordinal scale on "${e}" requires uniform "${Te}${e}".`);if(t.domainMapCountUniform&&!oe.has(`uDomainMapCount_${e}`))throw Error(`Scale on "${e}" requires uniform "${De}${e}".`)}let he=t.map(({name:e,type:t,components:n,arrayLength:r})=>{let i=t===`u32`?`u32`:t===`i32`?`i32`:`f32`,a=n===1?i:n===2?`vec2<${i}>`:`vec4<${i}>`;return`    ${e}: ${r==null?a:`array<vec4<${i}>, ${r}>`},`}).join(`
`),ge=Qt(new Set(u.filter(e=>e.needsScaleFunction).map(e=>e.scaleDef))),_e=[...ie.map(e=>Ee+e.name),...i.filter(e=>e.type===`multi`).map(e=>Be+e.name)],ve=_e.map(tn).join(`
`);return{shaderCode:nn(`
struct Globals {
    width: f32,
    height: f32,
    dpr: f32,
    uZero: f32,
    logicalVisibleRect: vec4<f32>,
    cullByVisibleRange: vec4<f32>,
    viewport: vec4<f32>,
    placementIndex: u32,
    placementClipMode: u32,
    placementCount: u32,
    placementPadding: u32,
};

@group(0) @binding(0) var<uniform> globals: Globals;

#if defined(PLACEMENT_ENABLED)
@group(2) @binding(0) var<storage, read> placementRectangles: array<vec4<f32>>;

fn getPlacementIndex(i: u32) -> u32 {
#if defined(DRAW_PLACEMENT)
    return globals.placementIndex;
#else
    return u32(getScaled___placementIndex(i));
#endif
}

fn isPlacementVisible(i: u32) -> bool {
    let placementIndex = getPlacementIndex(i);
    if (placementIndex >= globals.placementCount) {
        return false;
    }
    let rect = placementRectangles[placementIndex];
    let bounds = vec4<f32>(
        globals.viewport.xy + rect.xy * globals.viewport.zw,
        globals.viewport.xy + (rect.xy + rect.zw) * globals.viewport.zw
    );
    return rect.z > 0.0 && rect.w > 0.0 &&
        bounds.x < globals.viewport.x + globals.viewport.z &&
        bounds.y < globals.viewport.y + globals.viewport.w &&
        bounds.z > globals.viewport.x && bounds.w > globals.viewport.y;
}

fn placementClipBounds(i: u32) -> vec4<f32> {
    let placementIndex = getPlacementIndex(i);
    if (placementIndex >= globals.placementCount) {
        return vec4<f32>(-1e9);
    }
    let rect = placementRectangles[placementIndex];
    return vec4<f32>(
        globals.viewport.x + rect.x * globals.viewport.z,
        globals.viewport.y + rect.y * globals.viewport.w,
        globals.viewport.x + (rect.x + rect.z) * globals.viewport.z,
        globals.viewport.y + (rect.y + rect.w) * globals.viewport.w
    );
}

fn applyPlacementPixel(pixel: vec2<f32>, i: u32) -> vec2<f32> {
    let placementIndex = getPlacementIndex(i);
    if (placementIndex >= globals.placementCount) {
        return vec2<f32>(0.0);
    }
    let rect = placementRectangles[placementIndex];
    return rect.xy * globals.viewport.zw + pixel * rect.zw;
}

fn applyTextPlacementClip(clip: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}

fn applyPlacementClipForRule(clip: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}

fn isInsidePlacementClip(position: vec4<f32>, placementClip: vec4<f32>) -> bool {
    let logicalPosition = position.xy / globals.dpr;
    return ((globals.placementClipMode & 1u) == 0u ||
        (logicalPosition.x >= placementClip.x && logicalPosition.x <= placementClip.z)) &&
        ((globals.placementClipMode & 2u) == 0u ||
        (logicalPosition.y >= placementClip.y && logicalPosition.y <= placementClip.w));
}

fn applyPlacementClip(clip: vec2<f32>, i: u32) -> vec2<f32> {
    let placementIndex = getPlacementIndex(i);
    if (placementIndex >= globals.placementCount) {
        return vec2<f32>(0.0);
    }
    let rect = placementRectangles[placementIndex];
    let pixel = vec2<f32>(
        (clip.x + 1.0) * globals.width * 0.5,
        (1.0 - clip.y) * globals.height * 0.5
    );
    let placed = rect.xy * globals.viewport.zw + pixel * rect.zw;
    return vec2<f32>(
        (placed.x / globals.width) * 2.0 - 1.0,
        1.0 - (placed.y / globals.height) * 2.0
    );
}

fn applyPlacementClipForPoint(clip: vec2<f32>, anchor: vec2<f32>, i: u32) -> vec2<f32> {
    let placementIndex = getPlacementIndex(i);
    if (placementIndex >= globals.placementCount) {
        return vec2<f32>(0.0);
    }
    let rect = placementRectangles[placementIndex];
    let pixel = vec2<f32>(
        (clip.x + 1.0) * globals.width * 0.5,
        (1.0 - clip.y) * globals.height * 0.5
    );
    let anchorPixel = vec2<f32>(
        (anchor.x + 1.0) * globals.width * 0.5,
        (1.0 - anchor.y) * globals.height * 0.5
    );
    let placed = rect.xy * globals.viewport.zw +
        anchorPixel * rect.zw + (pixel - anchorPixel);
    return vec2<f32>(
        (placed.x / globals.width) * 2.0 - 1.0,
        1.0 - (placed.y / globals.height) * 2.0
    );
}
#else
fn applyPlacementClipForPoint(clip: vec2<f32>, anchor: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}

fn isPlacementVisible(i: u32) -> bool {
    return true;
}

fn applyPlacementClip(clip: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}

fn applyPlacementPixel(pixel: vec2<f32>, i: u32) -> vec2<f32> {
    return pixel;
}

fn applyTextPlacementClip(clip: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}

fn applyPlacementClipForRule(clip: vec2<f32>, i: u32) -> vec2<f32> {
    return clip;
}
#endif

fn isOutsideVisibleRange(pos: vec2<f32>) -> bool {
    return (globals.cullByVisibleRange.x > 0.5 &&
                (pos.x < globals.logicalVisibleRect.x ||
                 pos.x > globals.logicalVisibleRect.z)) ||
           (globals.cullByVisibleRange.y > 0.5 &&
                (pos.y < globals.logicalVisibleRect.y ||
                 pos.y > globals.logicalVisibleRect.w));
}

${ge}
${_e.length>0?$t:``}

struct Params {
${he}
};

@group(1) @binding(0) var<uniform> params: Params;

${_.join(`
`)}

${v.join(`
`)}

${b.join(`
`)}

${y.join(`
`)}

${x.join(`
`)}

${ve}

${le}

fn premultiplyAlpha(color: vec4<f32>) -> vec4<f32> {
    return vec4<f32>(color.rgb * color.a, color.a);
}

${n}

fn encodePickId(id: u32) -> vec4<f32> {
    let r = f32(id & 255u);
    let g = f32((id >> 8u) & 255u);
    let b = f32((id >> 16u) & 255u);
    let a = f32((id >> 24u) & 255u);
    return vec4<f32>(r, g, b, a) / 255.0;
}

@fragment
fn fs_pick(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    if (in.pickId == 0u) {
        discard;
    }
    let color = shade(in);
    if (color.a <= 0.0) {
        discard;
    }
    return encodePickId(in.pickId);
}

`,T),resourceBindings:m,resourceLayout:h,resourceRequirements:g}}function fn(e,t,n,r,i){return JSON.stringify([e,t,n,r,i])}function pn({device:e,cache:t,globalBindGroupLayout:n,format:r,pickFormat:i,compiledChannels:a,uniformLayout:o,shaderBody:s,packedSeriesLayout:c,selectionDefs:l,visibleWhen:u,scalarSlots:d={},extraResources:f,primitiveTopology:p=`triangle-list`,placementBindGroupLayout:m,placementIndex:h,label:g}){let{shaderCode:_,resourceBindings:v,resourceLayout:y}=dn({compiledChannels:a,uniformLayout:o,shaderBody:s,packedSeriesLayout:c,selectionDefs:l,visibleWhen:u,scalarSlots:d,extraResources:f,placementIndex:h}),b=!!(h&&m),x=fn(v,r,i,p,b),S=t.getOrCreate(_,x,t=>{let a={id:t,firstBorrowerLabel:g,borrowerLabels:new Set([g])},o=`${D} program template #${t} (first used by ${g})`,s=e.createBindGroupLayout({label:O(o,`bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`}},...v]}),c=e.createShaderModule({label:O(o,`shader`),code:_}),l={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}},u={layout:e.createPipelineLayout({label:O(o,`pipeline layout`),bindGroupLayouts:[n,s,...b?[m]:[]]}),vertex:{module:c,entryPoint:`vs_main`},primitive:{topology:p}},d=new Map,f=t=>{let n=d.get(t);return n||(n=e.createRenderPipeline({label:O(o,t==1?`render pipeline`:`${t}x render pipeline`),...u,fragment:{module:c,entryPoint:`fs_main`,targets:[{format:r,blend:l}]},multisample:{count:t}}),d.set(t,n)),n},h=f(1),y;return{bindGroupLayout:s,pipeline:h,getPipeline:f,getPickPipeline:()=>(y??=e.createRenderPipeline({label:O(o,`picking pipeline`),...u,fragment:{module:c,entryPoint:`fs_pick`,targets:[{format:i}]}}),y),diagnostics:a}});S.diagnostics.borrowerLabels.add(g);let C=y.map(e=>Object.freeze({...e}));return Object.freeze(C),{...S,resourceLayout:C}}function mn(e){return Array.isArray(e)&&e.length===2&&typeof e[0]==`number`&&typeof e[1]==`number`}var hn=[0,0];function gn(e,t){return e.input===t.input&&e.secondaryInput===t.secondaryInput&&e.hitTest===t.hitTest}function _n(e,t){return e.length===t.length&&e.every((e,n)=>gn(e,t[n]))}function vn(e,t,n){if(t.type!==`interval`)throw Error(`Selection "${e}" is not an interval.`);if(!Array.isArray(t.targets)||t.targets.length===0)throw Error(`Interval selection "${e}" must specify a non-empty targets array.`);let r=new Set;return t.targets.map(t=>{if(r.has(t.input))throw Error(`Interval selection "${e}" cannot target "${t.input}" more than once.`);r.add(t.input);let i=n(t.input);if(i.inputComponents!==1)throw Error(`Interval selection "${e}" requires scalar input "${t.input}".`);let a;if(t.secondaryInput!==void 0){let r=n(t.secondaryInput);if(r.inputComponents!==1)throw Error(`Interval selection "${e}" requires scalar input "${t.secondaryInput}".`);if(r.scalarType!==i.scalarType)throw Error(`Interval selection "${e}" requires matching scalar types for inputs "${t.input}" and "${t.secondaryInput}".`);a=r.scalarType}return{input:t.input,secondaryInput:t.secondaryInput,hitTest:t.hitTest??`intersects`,scalarType:i.scalarType,secondaryScalarType:a}})}function yn(e,t,n){let r=t.selection,i=t.type,a=e.get(r);if(a){if(a.type!==i)throw Error(`Selection "${r}" must keep a single type.`);if(i===`interval`){let e=vn(r,t,n);if(!a.targets||!_n(a.targets,e))throw Error(`Selection "${r}" must keep the same interval targets.`)}return}i===`interval`?e.set(r,{name:r,type:i,targets:vn(r,t,n)}):e.set(r,{name:r,type:i})}function bn(e,t,n){if(!(!e||typeof e!=`object`)){if(`selection`in e)yn(t,e,n);else if(`all`in e)for(let r of e.all)bn(r,t,n);else if(`any`in e)for(let r of e.any)bn(r,t,n)}}function xn(e,t,n){let r=new Map,i=e=>{let n=t.get(e);if(!n)throw Error(`Selection references unknown input "${e}".`);return n};for(let t of Object.values(e))for(let e of t.conditions??[])yn(r,e.when,i);if(bn(ln(n),r,i),!e.uniqueId&&Array.from(r.values()).some(e=>e.type===`single`||e.type===`multi`))throw Error(`Selections of type "single" or "multi" require the "uniqueId" channel.`);return r}var Sn=class{constructor({device:e,channels:t,analysisByChannel:n,visibleWhen:r,label:i=`mark`,setUniformValue:a}){this._device=e,this._channels=t,this._label=i,this._setUniformValue=a,this._selectionDefs=xn(t,n,r),this._selectionBuffers=new Map}get selectionDefs(){return Array.from(this._selectionDefs.values())}addSelectionUniforms(e){for(let t of this._selectionDefs.values())if(t.type===`single`)e.push({name:Re+t.name,type:`u32`,components:1});else if(t.type===`interval`)for(let[n,r]of t.targets.entries())e.push({name:He(t.name,n),type:`u32`,components:1}),e.push({name:Ue(t.name,n),type:r.scalarType,components:2});else if(t.type===`multi`)e.push({name:ze+t.name,type:`u32`,components:1});else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}getExtraResourceDefs(){let e=[];for(let t of this._selectionDefs.values()){if(t.type!==`multi`)continue;let n=Be+t.name;e.push({name:n,kind:`buffer`,role:`extraBuffer`,wgslName:n,wgslType:`array<HashEntry>`,bufferType:`read-only-storage`,visibility:`vertex`})}return e}initializeSelections(e){for(let t of this._selectionDefs.values())if(t.type===`single`)this._setUniformValue(Re+t.name,0);else if(t.type===`interval`)for(let[e]of t.targets.entries())this._setUniformValue(He(t.name,e),0),this._setUniformValue(Ue(t.name,e),[0,0]);else if(t.type===`multi`){this._setUniformValue(ze+t.name,0);let n=Be+t.name,{table:r}=Ft([]),i=this._device.createBuffer({label:O(this._label,`selection ${t.name}`),size:r.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this._device.queue.writeBuffer(i,0,E(r)),e.set(n,i),this._selectionBuffers.set(t.name,{buffer:i,byteLength:r.byteLength})}else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}updateSelection(e,t,n){let r=this._selectionDefs.get(e);if(!r)throw Error(`Unknown selection "${e}".`);if(t.type!==r.type)throw Error(`Selection "${e}" must remain type "${r.type}".`);if(t.type===`single`)this._setUniformValue(Re+e,t.id);else if(t.type===`interval`){let n=t.intervals??{},i=r.targets??[];for(let t of Object.keys(n)){let n=!1;for(let e of i)if(e.input===t){n=!0;break}if(!n)throw Error(`Selection "${e}" cannot update unknown target "${t}".`)}for(let t of i){let r=Object.hasOwn(n,t.input),i=n[t.input];if(r&&i!==null&&!mn(i))throw Error(`Selection "${e}" target "${t.input}" requires two numeric bounds or null.`)}for(let[t,r]of i.entries()){let i=n[r.input],a=i==null?0:1;this._setUniformValue(He(e,t),a),this._setUniformValue(Ue(e,t),a?i:hn)}}else if(t.type===`multi`){let r=Be+e,i=this._selectionBuffers.get(e),a=i?.byteLength/(Uint32Array.BYTES_PER_ELEMENT*2),o=a!==void 0&&t.ids.length/a<=.6,{table:s,size:c}=Ft(t.ids,o?{capacity:a}:void 0);if(this._setUniformValue(ze+e,c),!i||i.byteLength<s.byteLength){let t=this._device.createBuffer({label:O(this._label,`selection ${e}`),size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return n.set(r,t),this._selectionBuffers.set(e,{buffer:t,byteLength:s.byteLength}),i?.buffer.destroy(),this._device.queue.writeBuffer(t,0,E(s)),!0}this._device.queue.writeBuffer(i.buffer,0,E(s))}else throw Error(`Selection "${e}" has unsupported type.`);return!1}};function Cn(e,t){if(e.sourceKind===`missing`)return null;let{name:n,outputComponents:r,inputComponents:i,scalarType:a,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}=e,p=e.channel;if(e.sourceKind===`series`)return{name:n,channel:p,sourceKind:`series`,rawValueExpr:`read_${n}(${t})`,scalarType:a,outputComponents:r,inputComponents:i,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f};let m=`dynamic`in p&&p.dynamic===!0,h=on(a,i,p.value??p.default),g=`u_${n}`,_=m?`params.${g}`:h;return{name:n,channel:p,sourceKind:m?`uniform`:`literal`,rawValueExpr:_,scalarType:a,outputComponents:r,inputComponents:i,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}}function wn(e,t){let n=[];for(let r of e.values()){let e=Cn(r,t);e&&n.push(e)}return n}function Tn({channels:e,analysisByChannel:t,channelNames:n,inputNames:r,seriesIndexExpression:i=`i`}){return{channels:e,analysisByChannel:t,channelIRs:wn(t,i),channelNames:n,inputNames:r}}function En(e,t){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "inputs" must be an object.`);let n={},r=e;for(let[e,i]of Object.entries(r)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar input "${e}" must be a valid identifier.`);if(t.has(e))throw Error(`Scalar input "${e}" conflicts with a visual channel.`);if(!i||typeof i!=`object`||!ArrayBuffer.isView(i.data)||i.data instanceof DataView)throw Error(`Scalar input "${e}" must specify typed-array data.`);if(i.type!==`f32`&&i.type!==`u32`&&i.type!==`i32`)throw Error(`Scalar input "${e}" must specify type "f32", "u32", or "i32".`);n[e]={data:i.data,type:i.type,components:1,inputComponents:1}}return n}function Dn(e){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "scalarSlots" must be an object.`);let t={},n=e;for(let[e,r]of Object.entries(n)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar slot "${e}" must be a valid identifier.`);if(!r||typeof r!=`object`)throw Error(`Scalar slot "${e}" must be an object.`);On(e,r.type,r.value),t[e]=r}return t}function On(e,t,n){if(t!==`f32`&&t!==`u32`&&t!==`i32`)throw Error(`Scalar slot "${e}" must specify type "f32", "u32", or "i32".`);if(typeof n!=`number`||Number.isNaN(n))throw Error(`Scalar slot "${e}" must not contain NaN.`);if(t===`u32`&&(!Number.isInteger(n)||n<0||n>4294967295))throw Error(`Scalar slot "${e}" requires a valid u32 value.`);if(t===`i32`&&(!Number.isInteger(n)||n<-2147483648||n>2147483647))throw Error(`Scalar slot "${e}" requires a valid i32 value.`)}var F=class{constructor(e,t,n={label:`mark`}){this.renderer=e,this.device=e.device,this.label=n.label,this._destroyed=!1,this._markConfig=t;let r=Gt({channels:t.channels,context:{channelOrder:this.channelOrder,optionalChannels:this.optionalChannels,defaultChannelConfigs:this.defaultChannelConfigs,defaultValues:this.defaultValues,channelSpecs:this.channelSpecs}});this._channels=r.channels,this.antialiasing=this._resolveAntialiasing(),this._visualChannelNames=new Set(Object.keys(this._channels)),this._conditionalChannelNames=this._collectConditionalChannelNames(),this._publicChannelNames=new Set(this._visualChannelNames);for(let e of this._conditionalChannelNames)this._publicChannelNames.delete(e);this._placementIndex=t.placementIndex;let i=this._placementIndex&&`data`in this._placementIndex?{...t.inputs??{},__placementIndex:this._placementIndex}:t.inputs;this._inputs=En(i,this._visualChannelNames),this._scalarSlots=Dn(t.scalarSlots),this._visibleWhen=ln(t.visibleWhen),this._channels={...this._channels,...this._inputs};for(let[e,t]of Object.entries(this._inputs))r.analysisByChannel.set(e,Ht(e,t));this._compiledChannels=Tn({channels:this._channels,analysisByChannel:r.analysisByChannel,channelNames:this._publicChannelNames,inputNames:new Set(Object.keys(this._inputs)),seriesIndexExpression:typeof t.seriesIndexExpression==`string`?t.seriesIndexExpression:void 0}),this._logicalSeriesTargets=this._collectLogicalSeriesTargets(),this._seriesBuffers=new Ce(this.device,this._channels,this.channelSpecs,this.label),this.count=t.count??this._seriesBuffers.inferCount()??1,this._scaleResources=new zt({device:this.device,channels:this._channels,analysisByChannel:this._compiledChannels.analysisByChannel,label:this.label,getDefaultScaleRange:e=>this.getDefaultScaleRange(e),setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this._selectionResources=new Sn({device:this.device,channels:this._channels,analysisByChannel:this._compiledChannels.analysisByChannel,visibleWhen:this._visibleWhen,label:this.label,setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this._resourceLayout=[],this._uniformLayout=[],this._uniformBufferState=null,this._extraTextures=new Map,this._extraBuffers=new Map,this._borrowedExtraTextures=new Set,this._borrowedExtraBuffers=new Set,this._slotUpdateDepth=0,this._slotUniformsDirty=!1,this._slotBindingsDirty=!1,this._slotPickingDirty=!1,this._slotHandles={batchUpdates:e=>this._batchSlotUpdates(e),series:{replace:(e,t)=>{this._assertAlive(),this.replaceSeries(e,t)}},scales:{},values:{},properties:{},extraValues:{},scalarSlots:{},selections:{}},this._buildUniformLayout(),this._validateUniformBufferCapacity(),this._initializeExtraResources(),this._selectionResources.initializeSelections(this._extraBuffers);let a=[...this._selectionResources.getExtraResourceDefs(),...this.getExtraResourceDefs()],{bindGroupLayout:o,pipeline:s,getPipeline:c,getPickPipeline:l,diagnostics:u,resourceLayout:d}=pn({device:this.device,cache:e._programTemplateCache,globalBindGroupLayout:e._globalBindGroupLayout,format:e.format,pickFormat:e.pickFormat,compiledChannels:this._compiledChannels,uniformLayout:this._uniformLayout,shaderBody:this.shaderBody,packedSeriesLayout:this._seriesBuffers.packedSeriesLayoutEntries??void 0,selectionDefs:this._selectionResources.selectionDefs,visibleWhen:this._visibleWhen,scalarSlots:this._scalarSlots,extraResources:a,primitiveTopology:this.primitiveTopology,placementBindGroupLayout:e._placementBindGroupLayout,placementIndex:this._placementIndex,label:this.label});this._resourceLayout=d,this._programTemplateDiagnostics=u,this._uniformBuffer=this.device.createBuffer({label:O(this.label,`uniforms`),size:this._uniformBufferState?.byteLength??0,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._initializeUniforms();let f=this._markConfig.dynamicValues??{};for(let[e,t]of Object.entries(f))this._setUniformValue(e,t.value);for(let[e,t]of Object.entries(this._scalarSlots))this._setUniformValue(cn(e),t.value);this._writeUniforms(),this._buildSlotHandles(),this._bindGroupLayout=o,this._pipeline=s,this._getPipeline=c,this._getPickPipeline=l,this.updateSeries(Object.fromEntries(Object.entries(this._channels).filter(([,e])=>w(e)).map(([e,t])=>[e,t.data])),this.count)}get drawCount(){return this.count}resolveDrawRange(e,t){return{firstInstance:e,instanceCount:t}}get channelOrder(){return[]}get optionalChannels(){return[]}get channelSpecs(){return{}}get defaultChannelConfigs(){return{}}get defaultValues(){return{}}getExtraUniformLayout(){return[]}getExtraResourceDefs(){return[]}_initializeExtraResources(){}get shaderBody(){return``}_resolveAntialiasing(){return`shader`}get primitiveTopology(){return`triangle-list`}getDefaultScaleRange(e){}updateSeries(e,t,n=!1){let r=t??this._seriesBuffers.inferCount(e);this.count=r??this.count??1,(this._seriesBuffers.updateSeries(e,this.count)||n||!this._bindGroup)&&this._rebuildBindGroup(),this.renderer.markPickingDirty()}replaceSeries(e,t){let n={};for(let[t,r]of this._logicalSeriesTargets){if(r.length>1)throw Error(`Series replacement for channel "${t}" is not supported because it has multiple series-backed branches.`);let i=e[t];if(i===void 0)throw Error(`Series replacement is missing channel "${t}".`);n[r[0]]=i}this.updateSeries(n,t)}_collectConditionalChannelNames(){let e=new Set;for(let t of Object.values(this._channels))for(let n of t.conditions??[])n.channelName&&e.add(n.channelName);return e}_collectLogicalSeriesTargets(){let e=new Map;for(let[t,n]of Object.entries(this._channels)){if(this._conditionalChannelNames.has(t))continue;let r=[];w(n)&&r.push(t);for(let e of n.conditions??[]){if(!e.channelName)continue;let t=this._channels[e.channelName];t&&w(t)&&r.push(e.channelName)}r.length>0&&e.set(t,r)}return e}_rebuildBindGroup(){this._bindGroup=we({device:this.device,label:this.label,layout:this._bindGroupLayout,uniformBuffer:this._uniformBuffer,resourceLayout:this._resourceLayout,getSeriesBuffer:e=>this._seriesBuffers.getBuffer(e),getScaleResources:e=>this._scaleResources.getChannelResources(e),extraTextures:this._extraTextures,extraBuffers:this._extraBuffers})}updateValues(e){for(let[t,n]of Object.entries(e)){let e=`u_${t}`;if(!this._uniformBufferState?.entries.has(e))throw Error(`Uniform "${e}" is not available for updates.`);this._setUniformValue(e,n)}this._writeUniforms(),this.renderer.markPickingDirty()}debugResources(e=this.constructor.name){}getSlotHandles(){return this._slotHandles}_buildSlotHandles(){let e=(e,t)=>(e[t]||(e[t]={}),e[t]),t=(e,t)=>(e[t]||(e[t]={}),e[t]),n=(e,t)=>{e.default=t,e.setDomain=t.setDomain,e.setRange=t.setRange},r=(e,t)=>{e.default=t,e.set=t.set};for(let[i,a]of Object.entries(this._channels)){if(this._conditionalChannelNames.has(i))continue;a.scale&&n(e(this._slotHandles.scales,i),this._createScaleSlot(i)),T(a)&&a.dynamic&&r(t(this._slotHandles.values,i),this._createValueSlot(i));let o=a.conditions??[];if(o.length)for(let n of o){if(!n.channelName)continue;let r=this._channels[n.channelName];if(r){if(r.scale){let t=e(this._slotHandles.scales,i);t.conditions||={},t.conditions[n.when.selection]=this._createScaleSlot(n.channelName)}if(T(r)&&r.dynamic){let e=t(this._slotHandles.values,i);e.conditions||={},e.conditions[n.when.selection]=this._createValueSlot(n.channelName)}}}}let i=this._markConfig.dynamicValues??{};for(let e of Object.keys(i))this._slotHandles.extraValues[e]=this._createExtraValueSlot(e);for(let e of Object.keys(this._scalarSlots))this._slotHandles.scalarSlots[e]=this._createScalarSlot(e);for(let e of this._selectionResources.selectionDefs)this._slotHandles.selections[e.name]=this._createSelectionSlot(e)}_createScaleSlot(e){let t=this._scaleResources.getScaleUpdater(e);return{setDomain:e=>{this._assertAlive();let n=t.updateDomain(e);this._queueSlotUpdate(n)},setRange:e=>{this._assertAlive();let n=t.updateRange(e);this._queueSlotUpdate(n)}}}_createValueSlot(e){let t=`u_${e}`;if(!this._uniformBufferState?.entries.has(t))throw Error(`Uniform "${t}" is not available for updates.`);return{set:e=>{this._assertAlive(),this._setUniformValue(t,e),this._queueSlotUpdate(!1)}}}_createExtraValueSlot(e){if(!this._uniformBufferState?.entries.has(e))throw Error(`Uniform "${e}" is not available for updates.`);return{set:t=>{this._assertAlive(),this._setExtraUniformValue(e,t),this._queueSlotUpdate(!1)}}}_createScalarSlot(e){let t=this._scalarSlots[e];if(!t)throw Error(`Unknown scalar slot "${e}".`);let n=cn(e);if(!this._uniformBufferState?.entries.has(n))throw Error(`Uniform "${n}" is not available for updates.`);return{set:r=>{this._assertAlive(),On(e,t.type,r),this._setUniformValue(n,r),this._queueSlotUpdate(!1)}}}_setExtraUniformValue(e,t){this._setUniformValue(e,t)}_createSelectionSlot(e){let t=t=>{this._assertAlive();let n=this._selectionResources.updateSelection(e.name,t,this._extraBuffers);this._queueSlotUpdate(n)};return e.type===`single`?{type:`single`,set:e=>t({type:`single`,id:e})}:e.type===`multi`?{type:`multi`,set:e=>t({type:`multi`,ids:e})}:{type:`interval`,targets:(e.targets??[]).map(e=>e.input),set:e=>t({type:`interval`,intervals:e})}}_batchSlotUpdates(e){this._assertAlive(),this._slotUpdateDepth++;try{e()}finally{this._slotUpdateDepth--,this._slotUpdateDepth===0&&this._flushSlotUpdates()}}_queueSlotUpdate(e){this._slotUniformsDirty=!0,this._slotBindingsDirty||=e,this._slotPickingDirty=!0,this._slotUpdateDepth===0&&this._flushSlotUpdates()}_flushSlotUpdates(){this._slotUniformsDirty&&this._writeUniforms(),this._slotBindingsDirty&&this._rebuildBindGroup(),this._slotPickingDirty&&this.renderer.markPickingDirty(),this._slotUniformsDirty=!1,this._slotBindingsDirty=!1,this._slotPickingDirty=!1}_validateUniformBufferCapacity(){let e=this.device.limits?.maxUniformBufferBindingSize,t=this._uniformBufferState?.byteLength??0;if(e===void 0||t<=e)return;let n=this._selectionResources.selectionDefs.filter(e=>e.type===`interval`).map(e=>`"${e.name}" (${e.targets?.length??0} targets)`).join(`, `);throw Error(`Uniform buffer for interval selection ${n||`mark`} requires ${t} bytes, exceeding the device limit of ${e} bytes.`)}_buildUniformLayout(){let e=[];for(let[t,n]of Object.entries(this._channels))T(n)&&n.dynamic&&e.push({name:`u_${t}`,type:n.type??`f32`,components:n.components??1}),w(n)&&n.scale&&this._scaleResources.addScaleUniforms(e,t,n),T(n)&&n.scale&&this._scaleResources.addScaleUniforms(e,t,n);for(let[t,n]of Object.entries(this._scalarSlots))e.push({name:cn(t),type:n.type,components:1});this._selectionResources.addSelectionUniforms(e),this._uniformLayout=e.concat(this.getExtraUniformLayout()),this._uniformLayout.length===0&&this._uniformLayout.push({name:`dummy`,type:`f32`,components:1}),this._uniformBufferState=new me(this._uniformLayout)}_initializeUniforms(){for(let[e,t]of Object.entries(this._channels)){if(w(t)&&t.scale){this._scaleResources.initializeScale(e,t,t.scale);let n=this._scaleResources.getScaleUpdater(e);n.updateDomain(t.scale.domain);let r=t.scale.range??this.getDefaultScaleRange(e);r!==void 0&&n.updateRange(r)}if(T(t)&&t.scale){this._scaleResources.initializeScale(e,t,t.scale);let n=this._scaleResources.getScaleUpdater(e);n.updateDomain(t.scale.domain);let r=t.scale.range??this.getDefaultScaleRange(e);r!==void 0&&n.updateRange(r)}T(t)&&t.dynamic&&this._setUniformValue(`u_${e}`,t.value)}this._initializeExtraUniforms()}_initializeExtraUniforms(){}_setUniformValue(e,t){this._uniformBufferState?.setValue(e,t)}_writeUniforms(){!this._uniformBufferState||this._uniformBufferState.byteLength===0||this.device.queue.writeBuffer(this._uniformBuffer,0,this._uniformBufferState.data)}prepareDraw(e,t){e.setPipeline(this._getPipeline(t.sampleCount)),e.setBindGroup(1,this._bindGroup)}preparePick(e){e.setPipeline(this._getPickPipeline()),e.setBindGroup(1,this._bindGroup)}draw(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}drawPick(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}destroy(){if(!this._destroyed){this._destroyed=!0,this._uniformBuffer.destroy(),this._seriesBuffers.destroy(),this._scaleResources.destroy();for(let[e,t]of this._extraBuffers)this._borrowedExtraBuffers.has(e)||t.destroy();this._extraBuffers.clear();for(let[e,{texture:t}]of this._extraTextures)this._borrowedExtraTextures.has(e)||t.destroy();this._extraTextures.clear()}}_assertAlive(){if(this.renderer._assertAlive(),this._destroyed)throw Error(`${this.constructor.name} has been destroyed.`)}};function kn(e){let t={},n={},r=[];for(let[i,a]of Object.entries(e)){a.optional&&r.push(i),a.default!==void 0&&(t[i]=a.default);let e={};a.type&&(e.type=a.type),a.components&&(e.components=a.components),a.scale&&(e.scale=a.scale),a.default!==void 0&&(e.value=a.default),Object.keys(e).length>0&&(n[i]=e)}return{channels:Object.keys(e),defaults:t,defaultConfigs:n,optionalChannels:r}}var An={type:`linear`,input:`numeric`,output:`f32`,params:[],continuous:!0,vectorOutput:`always`,wgsl:`
fn scaleLinear(value: f32, domain: vec2<f32>, range: vec2<f32>) -> f32 {
    let domainSpan = domain.y - domain.x;
    let rangeSpan = range.y - range.x;
    let unit = select(0.5, (value - domain.x) / domainSpan, domainSpan != 0.0);
    return unit * rangeSpan + range.x;
}
`,resources:{stopKind:`continuous`,supportsPiecewise:!0,needsDomainMap:!1,needsOrdinalRange:!1},validate:Mn,emit:jn};Object.freeze(An);function jn(e){let{name:t,functionName:n,rawValueExpr:r,inputScalarType:i,outputComponents:a,outputScalarType:o,clamp:s,round:c,useRangeTexture:l,domainLength:u,rangeLength:d}=e,f=u||2,p=d||2;if(f<2||p<2)throw Error(`Linear scale on "${t}" requires at least two domain and range entries.`);if(f!==p)throw Error(`Linear scale on "${t}" requires matching domain/range arrays.`);if(f===2&&p===2&&(l||a===1))return at({name:t,functionName:n,rawValueExpr:r,inputScalarType:i,clamp:s,round:c,useRangeTexture:l},({name:e,valueExpr:t})=>`scaleLinear(${t}, ${j(e)}, ${M(e)})`);let m=l?`vec4<f32>`:a===1?o:`vec${a}<f32>`,h=[];if(i!==`f32`&&h.push(Ye(i)),s){let e=`vec2<f32>(params.${k}${t}[0].x, params.${k}${t}[${f}u - 1u].x)`;h.push(Xe(e))}return h.push($e({name:t,domainLength:f,outputComponents:a,outputScalarType:o,useRangeTexture:l})),c&&!l&&h.push(Qe()),Je({name:t,functionName:n,rawValueExpr:r,steps:h,returnType:m,useRangeTexture:l})}function Mn({name:e,channel:t,outputComponents:n,inputComponents:r,isPiecewise:i}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but linear scales only support scalars or vec4 outputs.`;if(!i)return null;let a=t.scale?.domain,o=t.scale?.range;return!Array.isArray(a)||a.length<2?`Piecewise scale on "${e}" requires at least two domain entries.`:!Array.isArray(o)||o.length<2?`Piecewise scale on "${e}" requires at least two range entries.`:a.length===o.length?r===1?null:`Piecewise scale on "${e}" requires scalar input values.`:`Piecewise scale on "${e}" requires range length of ${a.length}, got ${o.length}.`}function I(e,t){return{...t,type:e.type,definition:e}}var Nn=An;function L(e={}){return I(Nn,e)}var Pn={uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:L(),default:.5},y:{components:1,scale:L(),default:.5},xOffset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:100},shape:{type:`u32`,components:1,default:0},strokeWidth:{type:`f32`,components:1,default:2},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.3,.5,.7,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},angle:{type:`f32`,components:1,default:0},gradientStrength:{type:`f32`,components:1,default:0},inwardStroke:{type:`u32`,components:1,default:0},minPickingSize:{type:`f32`,components:1,default:2}},{channels:Fn,defaults:In,defaultConfigs:Ln,optionalChannels:Rn}=kn(Pn),zn=`
const PI: f32 = 3.141592653589793;
const SQRT3: f32 = 1.7320508075688772;

// Copypaste from fragment shader
const CIRCLE: u32 = 0u;
const SQUARE: u32 = 1u;
const CROSS: u32 = 2u;
const DIAMOND: u32 = 3u;
const TRIANGLE_UP: u32 = 4u;
const TRIANGLE_RIGHT: u32 = 5u;
const TRIANGLE_DOWN: u32 = 6u;
const TRIANGLE_LEFT: u32 = 7u;
const TICK_UP: u32 = 8u;
const TICK_RIGHT: u32 = 9u;
const TICK_DOWN: u32 = 10u;
const TICK_LEFT: u32 = 11u;
const X: u32 = 12u;
const PLUS: u32 = 13u;

fn modf(x: f32, y: f32) -> f32 {
    return x - y * floor(x / y);
}

fn distanceToRatio(d: f32) -> f32 {
    return clamp(d * globals.dpr + 0.5, 0.0, 1.0);
}

fn distanceToColor(d: f32, fill: vec4<f32>, stroke: vec4<f32>, background: vec4<f32>, halfStrokeWidth: f32) -> vec4<f32> {
    if (halfStrokeWidth > 0.0) {
        let sd = abs(d) - halfStrokeWidth;
        return mix(stroke, select(background, fill, d <= 0.0), distanceToRatio(sd));
    }
    return mix(background, fill, distanceToRatio(-d));
}

// The distance functions are inspired by:
// http://www.iquilezles.org/www/articles/distfunctions2d/distfunctions2d.htm
// These are not true distance functions, because corners need to be sharp.
fn circle(p: vec2<f32>, r: f32) -> f32 {
    return length(p) - r;
}

fn square(p: vec2<f32>, r: f32) -> f32 {
    let q = abs(p);
    return max(q.x, q.y) - r;
}

fn tickUp(p: vec2<f32>, r: f32) -> f32 {
    let halfR = r * 0.5;
    var q = p;
    q.y += halfR;
    q = abs(q);
    return max(q.x - r * 0.15, q.y - halfR);
}

fn equilateralTriangle(p: vec2<f32>, r: f32) -> f32 {
    var q = p;
    q.y = -q.y;
    let k = SQRT3;
    let kr = k * r;
    q.y -= kr / 2.0;
    return max((abs(q.x) * k + q.y) / 2.0, -q.y - kr);
}

fn crossShape(p: vec2<f32>, r: f32, armHalfWidth: f32) -> f32 {
    let q = abs(p);
    let b = vec2<f32>(armHalfWidth, r);
    let v = abs(q) - b.xy;
    let h = abs(q) - b.yx;
    return min(max(v.x, v.y), max(h.x, h.y));
}

fn diamond(p: vec2<f32>, r: f32) -> f32 {
    let q = abs(p);
    return (max(abs(q.x - q.y), abs(q.x + q.y)) - r) / 1.41421356237;
}

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) local: vec2<f32>,
    @location(1) size: f32,
    @location(2) radius: f32,
    @location(3) radiusWithPadding: f32,
    @location(4) fill: vec4<f32>,
    @location(5) stroke: vec4<f32>,
    @location(6) fillOpacity: f32,
    @location(7) strokeOpacity: f32,
    @location(8) halfStrokeWidth: f32,
    @location(9) @interpolate(flat) shape: u32,
    @location(10) gradientStrength: f32,
    @location(11) @interpolate(flat) inwardStroke: u32,
    @location(12) rot0: vec2<f32>,
    @location(13) rot1: vec2<f32>,
    @location(14) @interpolate(flat) pickId: u32,
};

fn culledPoint() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.local = vec2<f32>(0.0);
    out.size = 0.0;
    out.radius = 0.0;
    out.radiusWithPadding = 0.0;
    out.fill = vec4<f32>(0.0);
    out.stroke = vec4<f32>(0.0);
    out.fillOpacity = 0.0;
    out.strokeOpacity = 0.0;
    out.halfStrokeWidth = 0.0;
    out.shape = 0u;
    out.gradientStrength = 0.0;
    out.inwardStroke = 0u;
    out.rot0 = vec2<f32>(0.0);
    out.rot1 = vec2<f32>(0.0);
    out.pickId = 0u;
    return out;
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledPoint();
    }

    var quad = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(1.0, 1.0)
    );

    let size = getScaled_size(i);
    let diameter = sqrt(size);

    var strokeWidth = getScaled_strokeWidth(i);
    let strokeOpacity = getScaled_strokeOpacity(i);
    let shapeRaw = getScaled_shape(i);
    var shape = u32(shapeRaw);

    var shapeAngle = 0.0;
    if (shape > TICK_UP && shape <= TICK_LEFT) {
        shapeAngle = f32(shape - TICK_UP) * 90.0;
        shape = TICK_UP;
    } else if (shape > TRIANGLE_UP && shape <= TRIANGLE_LEFT) {
        shapeAngle = f32(shape - TRIANGLE_UP) * 90.0;
        shape = TRIANGLE_UP;
    } else if (shape == X) {
        shapeAngle = -45.0;
    }

    // Line-only shapes use their width even when the stroke falls back to the
    // fill color. An invisible stroke must not inset other filled shapes.
    if (strokeOpacity <= 0.0 && shape != X && shape != PLUS) {
        strokeWidth = 0.0;
    }

    let angleInDegrees = getScaled_angle(i);
    let angle = -(shapeAngle + angleInDegrees) * PI / 180.0;
    let sinTheta = sin(angle);
    let cosTheta = cos(angle);
    let rot = mat2x2<f32>(cosTheta, sinTheta, -sinTheta, cosTheta);

    let circle = shape == CIRCLE;
    let roomForRotation = select(
        sin(modf(angle, PI / 2.0) + PI / 4.0) / sin(PI / 4.0),
        1.0,
        circle
    );

    let aaPadding = 1.0 / globals.dpr;
    let rotationPadding = (diameter * roomForRotation) - diameter;
    let strokePadding = select(
        strokeWidth * select(SQRT3, 1.0, circle),
        0.0,
        getScaled_inwardStroke(i) > 0u
    );
    let padding = rotationPadding + strokePadding + aaPadding;

    let total = diameter + padding;
    let local = quad[v];
    let centerX = getScaled_x(i) + getScaled_xOffset(i) + getScaled_dx(i);
    let centerY = getScaled_y(i) + getScaled_yOffset(i) + getScaled_dy(i);
    let px = centerX + (local.x - 0.5) * total;
    let py = centerY + (local.y - 0.5) * total;

    if (isOutsideVisibleRange(vec2<f32>(
        centerX,
        centerY
    ))) {
        return culledPoint();
    }

    let clip = vec2<f32>(
        (px / globals.width) * 2.0 - 1.0,
        1.0 - (py / globals.height) * 2.0
    );
    let centerClip = vec2<f32>(
        (centerX / globals.width) * 2.0 - 1.0,
        1.0 - (centerY / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(
        applyPlacementClipForPoint(clip, centerClip, i),
        0.0,
        1.0
    );
    out.local = local;
    out.size = total;
    out.radius = diameter * 0.5;
    out.radiusWithPadding = out.radius + padding * 0.5;
    out.fill = getScaled_fill(i);
    out.stroke = getScaled_stroke(i);
    out.fillOpacity = getScaled_fillOpacity(i);
    out.strokeOpacity = strokeOpacity;
    out.halfStrokeWidth = strokeWidth * 0.5;
    out.shape = shape;
    out.gradientStrength = getScaled_gradientStrength(i);
    out.inwardStroke = getScaled_inwardStroke(i);
    out.rot0 = rot[0];
    out.rot1 = rot[1];
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn shade(in: VSOut) -> vec4<f32> {
    let rot = mat2x2<f32>(in.rot0, in.rot1);
    let p = rot * ((in.local * 2.0 - vec2<f32>(1.0)) * in.radiusWithPadding);
    let r = in.radius;
    var d = 0.0;

    if (in.shape == CIRCLE) {
        d = circle(p, r);
    } else if (in.shape == SQUARE) {
        d = square(p, r);
    } else if (in.shape == CROSS) {
        d = crossShape(p, r, r * 0.4);
    } else if (in.shape == DIAMOND) {
        d = diamond(p, r);
    } else if (in.shape == TRIANGLE_UP) {
        d = equilateralTriangle(p, r);
    } else if (in.shape == TICK_UP) {
        d = tickUp(p, r);
    } else if (in.shape == X || in.shape == PLUS) {
        let lineLength = select(r, r * 1.41421356237, in.shape == X);
        d = crossShape(p, lineLength, in.halfStrokeWidth);
    } else {
        d = 0.0;
    }

    var fillColor = in.fill;
    var strokeColor = in.stroke;

    fillColor.a = fillColor.a * in.fillOpacity;
    strokeColor.a = strokeColor.a * in.strokeOpacity;

    if (in.gradientStrength > 0.0) {
        fillColor = mix(fillColor, vec4<f32>(1.0), -d * in.gradientStrength / max(r, 0.0001));
    }

    fillColor = premultiplyAlpha(fillColor);
    strokeColor = premultiplyAlpha(strokeColor);

    let lineShape = in.shape == X || in.shape == PLUS;
    if (lineShape && strokeColor.a == 0.0) {
        strokeColor = fillColor;
    }
    let offset = select(
        select(0.0, in.halfStrokeWidth, in.inwardStroke > 0u),
        0.0,
        lineShape
    );
    // TODO: Match SVG and Canvas by drawing the fill first and the stroke over it.
    let color = distanceToColor(
        d + offset,
        fillColor,
        strokeColor,
        vec4<f32>(0.0),
        select(in.halfStrokeWidth, 0.0, lineShape)
    );

    if (color.a == 0.0) {
        discard;
    }
    return color;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,Bn=class extends F{get channelOrder(){return Fn}get optionalChannels(){return Rn}get channelSpecs(){return Pn}get defaultChannelConfigs(){return Ln}get defaultValues(){return In}get shaderBody(){return zn}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`)return[0,this.renderer._globals.width];if(e===`y`)return[0,this.renderer._globals.height]}}},Vn=Object.freeze({type:`point`,createProgram(e,t,n){return new Bn(e,t,n)}}),Hn={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1,scale:L(),default:0},x2:{type:`f32`,components:1,scale:L(),default:10},y:{type:`f32`,components:1,scale:L(),default:0},y2:{type:`f32`,components:1,scale:L(),default:10},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.27,.49,.8,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},cornerRadiusTopRight:{type:`f32`,components:1,default:0},cornerRadiusBottomRight:{type:`f32`,components:1,default:0},cornerRadiusTopLeft:{type:`f32`,components:1,default:0},cornerRadiusBottomLeft:{type:`f32`,components:1,default:0},minWidth:{type:`f32`,components:1,default:0},minHeight:{type:`f32`,components:1,default:0},minOpacity:{type:`f32`,components:1,default:0},shadowOffsetX:{type:`f32`,components:1,default:0},shadowOffsetY:{type:`f32`,components:1,default:0},shadowBlur:{type:`f32`,components:1,default:0},shadowOpacity:{type:`f32`,components:1,default:0},shadowColor:{type:`f32`,components:4,default:[0,0,0,1]},hatchPattern:{type:`u32`,components:1,default:0}},{channels:Un,defaults:Wn,defaultConfigs:Gn,optionalChannels:Kn}=kn(Hn),qn=[`strokeWidth`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`shadowOpacity`,`hatchPattern`];function Jn(e){for(let t of qn){let n=e[t];if(!T(n)||n.dynamic||n.scale||n.conditions?.length)return`shader`}return qn.every(t=>Number(e[t].value)===0)?`multisample`:`shader`}var Yn=`
fn clampMinSize(pos: ptr<function, f32>, frac: f32, size: f32, minSize: f32) -> f32 {
    if (minSize > 0.0 && size < minSize) {
        (*pos) = (*pos) + (frac - 0.5) * (minSize - size);
        return size / minSize;
    }
    return 1.0;
}

fn sort(a: ptr<function, f32>, b: ptr<function, f32>) {
    if (*a > *b) {
        let tmp = *b;
        *b = *a;
        *a = tmp;
    }
}

fn sdRoundedBox(p: vec2<f32>, b: vec2<f32>, r: vec4<f32>) -> f32 {
    let pair = select(r.zw, r.xy, p.x > 0.0);
    let radius = select(pair.y, pair.x, p.y > 0.0);
    let q = abs(p) - b + radius;
    return min(max(q.x, q.y), 0.0) + length(max(q, vec2<f32>(0.0))) - radius;
}

fn sdSharpBox(p: vec2<f32>, b: vec2<f32>) -> f32 {
    let q = abs(p) - b;
    return max(q.x, q.y);
}

fn distanceToRatio(d: f32) -> f32 {
    return clamp(d * globals.dpr + 0.5, 0.0, 1.0);
}

fn distanceToColor(d: f32, fill: vec4<f32>, stroke: vec4<f32>, background: vec4<f32>, halfStrokeWidth: f32) -> vec4<f32> {
    if (halfStrokeWidth > 0.0) {
        let sd = abs(d) - halfStrokeWidth;
        return mix(stroke, select(background, fill, d <= 0.0), distanceToRatio(sd));
    }
    return mix(background, fill, distanceToRatio(-d));
}

fn gaussian(x: f32, sigma: f32) -> f32 {
    let pi = 3.141592653589793;
    return exp(-(x * x) / (2.0 * sigma * sigma)) /
        (sqrt(2.0 * pi) * sigma);
}

fn erf(x: vec2<f32>) -> vec2<f32> {
    let s = sign(x);
    var a = abs(x);
    a = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
    a = a * a;
    return s - s / (a * a);
}

fn roundedBoxShadowX(
    x: f32,
    y: f32,
    sigma: f32,
    corner: f32,
    halfSize: vec2<f32>
) -> f32 {
    let delta = min(halfSize.y - corner - abs(y), 0.0);
    let curved = halfSize.x - corner +
        sqrt(max(0.0, corner * corner - delta * delta));
    let integral = 0.5 + 0.5 * erf((x + vec2<f32>(-curved, curved)) *
        (sqrt(0.5) / sigma));
    return integral.y - integral.x;
}

fn roundedBoxShadow(
    lower: vec2<f32>,
    upper: vec2<f32>,
    point: vec2<f32>,
    sigma: f32,
    corner: f32
) -> f32 {
    let center = (lower + upper) * 0.5;
    let halfSize = (upper - lower) * 0.5;
    let centeredPoint = point - center;
    let low = centeredPoint.y - halfSize.y;
    let high = centeredPoint.y + halfSize.y;
    let start = clamp(-3.0 * sigma, low, high);
    let end = clamp(3.0 * sigma, low, high);
    let sampleStep = (end - start) / 4.0;
    var y = start + sampleStep * 0.5;
    var value = 0.0;
    for (var i = 0; i < 4; i++) {
        value += roundedBoxShadowX(
            centeredPoint.x,
            centeredPoint.y - y,
            sigma,
            corner,
            halfSize
        ) * gaussian(y, sigma) * sampleStep;
        y += sampleStep;
    }
    return value;
}

fn modf(x: f32, y: f32) -> f32 {
    return x - y * floor(x / y);
}

fn diagonalPattern(uv: vec2<f32>, spacing: f32, halfStrokeWidth: f32) -> f32 {
    // Using 1.5 to approximate sqrt(2.0) to reduce aliasing artifacts.
    let divisor = spacing * halfStrokeWidth * 2.0 * 1.5;
    return abs(modf(uv.x - uv.y, divisor) - 0.5 * divisor) / 1.5;
}

fn verticalPattern(x: f32, spacing: f32, halfStrokeWidth: f32) -> f32 {
    let divisor = spacing * halfStrokeWidth * 2.0;
    return abs(modf(x, divisor)) / 2.0;
}

fn circle(p: vec2<f32>, r: f32) -> f32 {
    return length(p) - r;
}

fn masonryCirclePattern(uv: vec2<f32>, spacing: f32, radius: f32) -> f32 {
    let halfSpacing = 0.5 * spacing;
    let row = floor(uv.y / spacing);
    let shift = (row % 2.0) * halfSpacing;

    let shifted = vec2<f32>(uv.x + shift, uv.y + halfSpacing);
    let cell = vec2<f32>(
        modf(shifted.x + 0.5 * spacing, spacing),
        modf(shifted.y + 0.5 * spacing, spacing)
    ) - halfSpacing;

    return abs(circle(cell, radius));
}

fn hatchPattern(uv: vec2<f32>, halfStrokeWidth: f32, patternType: i32) -> f32 {
    let spacing = 4.0;

    if (patternType == 1) {
        return diagonalPattern(vec2<f32>(uv.x, -uv.y), spacing, halfStrokeWidth);
    }
    if (patternType == 2) {
        return diagonalPattern(uv, spacing, halfStrokeWidth);
    }
    if (patternType == 3) {
        return min(
            diagonalPattern(uv, spacing, halfStrokeWidth),
            diagonalPattern(vec2<f32>(uv.x, -uv.y), spacing, halfStrokeWidth)
        );
    }
    if (patternType == 4) {
        return verticalPattern(uv.x, spacing, halfStrokeWidth);
    }
    if (patternType == 5) {
        return verticalPattern(uv.y, spacing, halfStrokeWidth);
    }
    if (patternType == 6) {
        return min(
            verticalPattern(uv.x, spacing, halfStrokeWidth),
            verticalPattern(uv.y, spacing, halfStrokeWidth)
        );
    }
    if (patternType == 7 || patternType == 8 || patternType == 9) {
        let spacing = halfStrokeWidth * 14.0;
        let radius = spacing * select(0.07, select(0.2, 0.35, patternType == 9), patternType == 8);
        return masonryCirclePattern(uv, spacing, radius);
    }

    return 1.0e20;
}

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) local: vec2<f32>,
    @location(1) size: vec2<f32>,
    @location(2) fill: vec4<f32>,
    @location(3) stroke: vec4<f32>,
    @location(4) fillOpacity: f32,
    @location(5) strokeOpacity: f32,
    @location(6) strokeWidth: f32,
    @location(7) cornerRadii: vec4<f32>,
    @location(8) shadowOffset: vec2<f32>,
    @location(9) shadowBlur: f32,
    @location(10) shadowOpacity: f32,
    @location(11) shadowColor: vec4<f32>,
    @location(12) @interpolate(flat) hatchPattern: u32,
    @location(13) @interpolate(flat) pickId: u32,
};

fn culledRect() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.local = vec2<f32>(0.0);
    out.size = vec2<f32>(0.0);
    out.fill = vec4<f32>(0.0);
    out.stroke = vec4<f32>(0.0);
    out.fillOpacity = 0.0;
    out.strokeOpacity = 0.0;
    out.strokeWidth = 0.0;
    out.cornerRadii = vec4<f32>(0.0);
    out.shadowOffset = vec2<f32>(0.0);
    out.shadowBlur = 0.0;
    out.shadowOpacity = 0.0;
    out.shadowColor = vec4<f32>(0.0);
    out.hatchPattern = 0u;
    out.pickId = 0u;
    return out;
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledRect();
    }

    var quad = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(1.0, 1.0)
    );

    var x = getScaled_x(i) + getScaled_xOffset(i);
    var x2 = getScaled_x2(i) + getScaled_x2Offset(i);
    var y = getScaled_y(i) + getScaled_yOffset(i);
    var y2 = getScaled_y2(i) + getScaled_y2Offset(i);
    sort(&x, &x2);
    sort(&y, &y2);

    // Keep far-off genomic endpoints close to the viewport. Without this,
    // rasterizing a rectangle whose other endpoint is visible can lose
    // precision when the GPU clips the very large triangle.
    let clampMargin = 1.0;
    x = clamp(x, 0.0 - clampMargin, globals.width + clampMargin);
    x2 = clamp(x2, 0.0 - clampMargin, globals.width + clampMargin);

    var w = x2 - x;
    var h = y2 - y;

    let local = quad[v];
    var px = x + local.x * w;
    var py = y + local.y * h;

    let minW = getScaled_minWidth(i);
    let minH = getScaled_minHeight(i);
    let minOpacity = getScaled_minOpacity(i);
    var opaFactor = max(minOpacity,
        clampMinSize(&px, local.x, w, minW) *
        clampMinSize(&py, local.y, h, minH));

    w = max(w, minW);
    h = max(h, minH);

    let strokeWidth = getScaled_strokeWidth(i);
    let shadowOffset = vec2<f32>(
        getScaled_shadowOffsetX(i),
        getScaled_shadowOffsetY(i)
    );
    let shadowBlur = getScaled_shadowBlur(i);
    let shadowOpacity = getScaled_shadowOpacity(i);
    let cornerRadii = vec4<f32>(
        getScaled_cornerRadiusTopRight(i),
        getScaled_cornerRadiusBottomRight(i),
        getScaled_cornerRadiusTopLeft(i),
        getScaled_cornerRadiusBottomLeft(i)
    );
    let hatchPattern = getScaled_hatchPattern(i);
    let hasDecoration = any(cornerRadii > vec4<f32>(0.0)) ||
        strokeWidth > 0.0 || shadowOpacity > 0.0;
    let shadowPadding = shadowBlur + max(abs(shadowOffset.x), abs(shadowOffset.y));
    var decorationPadding = 0.0;
    if (hasDecoration) {
        // Keep the SDF decoration outside the nominal rectangle. WebGL expands
        // decorated rects for stroke antialiasing and the shadow kernel's support.
        decorationPadding = strokeWidth + 1.0 / globals.dpr + shadowPadding * 2.0;
    }
    if (!USE_MULTISAMPLE_EDGE_COVERAGE) {
        // Shader coverage needs geometry on both sides of a currently plain
        // edge. The AA strategy is immutable even when decorations are dynamic.
        decorationPadding = max(decorationPadding, 2.0 / globals.dpr);
    }
    let centeredFrac = local - vec2<f32>(0.5);
    let expansion = centeredFrac * decorationPadding;
    px += expansion.x;
    py += expansion.y;

    let clip = vec2<f32>(
        (px / globals.width) * 2.0 - 1.0,
        1.0 - (py / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(applyPlacementClip(clip, i), 0.0, 1.0);
    out.local = centeredFrac * vec2<f32>(w, h) + expansion;
    out.size = vec2<f32>(w, h);
    out.fill = getScaled_fill(i);
    out.stroke = getScaled_stroke(i);
    out.fillOpacity = getScaled_fillOpacity(i) * opaFactor;
    out.strokeOpacity = getScaled_strokeOpacity(i) * opaFactor;
    out.strokeWidth = strokeWidth;
    let halfMinSize = min(w, h) * 0.5;
    out.cornerRadii = min(cornerRadii, vec4<f32>(halfMinSize));
    out.shadowOffset = shadowOffset;
    out.shadowBlur = shadowBlur;
    out.shadowOpacity = shadowOpacity;
    out.shadowColor = getScaled_shadowColor(i);
    out.hatchPattern = hatchPattern;
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn shade(in: VSOut) -> vec4<f32> {
    var fillColor = in.fill;
    fillColor.a = fillColor.a * in.fillOpacity;
    fillColor = premultiplyAlpha(fillColor);

    // Adjacent plain rectangles must share an exact rasterized edge. Applying
    // SDF coverage here would introduce translucent seams in dense heatmaps.
    if (USE_MULTISAMPLE_EDGE_COVERAGE &&
            all(in.cornerRadii <= vec4<f32>(0.0)) && in.strokeWidth <= 0.0 &&
            in.shadowOpacity <= 0.0) {
        return fillColor;
    }

    let halfSize = in.size * 0.5;
    let centered = in.local;
    var d: f32;
    if (all(in.cornerRadii <= vec4<f32>(0.0))) {
        d = sdSharpBox(centered, halfSize);
    } else {
        d = sdRoundedBox(centered, halfSize, in.cornerRadii);
    }

    var strokeColor = in.stroke;
    strokeColor.a = strokeColor.a * in.strokeOpacity;
    strokeColor = premultiplyAlpha(strokeColor);

    var background = vec4<f32>(0.0, 0.0, 0.0, 0.0);
    if (in.shadowOpacity > 0.0) {
        let maxCornerRadius = max(
            in.cornerRadii.x,
            max(in.cornerRadii.y, max(in.cornerRadii.z, in.cornerRadii.w))
        );
        let sigma = max(in.shadowBlur / 2.5, 0.25);
        if (d >= in.strokeWidth * 0.5 - 1.0) {
            let shadow = roundedBoxShadow(
                -halfSize - vec2<f32>(in.strokeWidth * 0.5),
                halfSize + vec2<f32>(in.strokeWidth * 0.5),
                centered - in.shadowOffset,
                sigma,
                maxCornerRadius + in.strokeWidth * 0.5
            ) * in.shadowOpacity;
            background = vec4<f32>(in.shadowColor.rgb * shadow, shadow);
        }
    }

    let halfStrokeWidth = in.strokeWidth * 0.5;
    let patternType = i32(in.hatchPattern);
    if (halfStrokeWidth > 0.0 && patternType > 0) {
        // Hatch coordinates in Core's GLSL rect shader use a bottom-left Y
        // axis, while WebGPU's pixel coordinates grow downward.
        d = max(
            d,
            -hatchPattern(
                vec2<f32>(centered.x, -centered.y),
                halfStrokeWidth,
                patternType
            )
        );
    }

    return distanceToColor(d, fillColor, strokeColor, background, halfStrokeWidth);
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,Xn=class extends F{_resolveAntialiasing(){return Jn(this._channels)}get channelOrder(){return Un}get optionalChannels(){return Kn}get channelSpecs(){return Hn}get defaultChannelConfigs(){return Gn}get defaultValues(){return Wn}get shaderBody(){return`const USE_MULTISAMPLE_EDGE_COVERAGE = ${this.antialiasing===`multisample`};\n${Yn}`}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`||e===`x2`)return[0,this.renderer._globals.width];if(e===`y`||e===`y2`)return[0,this.renderer._globals.height]}}},Zn=Object.freeze({type:`rect`,createProgram(e,t,n){return new Xn(e,t,n)}}),Qn=`
fn dashMask(atlas: texture_2d<u32>, patternIndex: u32, distancePx: f32, dashOffset: f32) -> f32 {
    if (params.uDashPatternCount == 0u) {
        return 1.0;
    }
    if (patternIndex >= params.uDashPatternCount) {
        return 1.0;
    }

    let lenUnits = textureLoad(atlas, vec2<i32>(0, i32(patternIndex)), 0).x;
    if (lenUnits == 0u) {
        return 1.0;
    }

    let lenPx = f32(lenUnits);
    if (lenPx <= 0.0) {
        return 1.0;
    }

    let t = distancePx + dashOffset;
    let u = fract(t / lenPx);
    let idx = 1u + u32(floor(u * f32(lenUnits)));
    let width = u32(textureDimensions(atlas).x);
    if (idx >= width) {
        return 1.0;
    }

    let sample = textureLoad(atlas, vec2<i32>(i32(idx), i32(patternIndex)), 0).x;
    return f32(sample) / 255.0;
}
`;function $n(e){if(!e||e.length===0)return{data:new Uint8Array([0]),width:1,height:1,patternCount:0};if(e.length>256)throw Error(`Dash pattern count (${e.length}) exceeds 256.`);let t=new Uint8Array(257*e.length);return e.forEach((e,n)=>{if(!Array.isArray(e)||e.length===0)throw Error(`Dash pattern at index ${n} must be a non-empty array.`);if(e.length%2!=0)throw Error(`Dash pattern at index ${n} must have an even number of segments.`);let r=0;for(let t of e){if(!Number.isFinite(t)||Math.round(t)!==t)throw Error(`Dash pattern at index ${n} must use integer segment lengths.`);if(t<0)throw Error(`Dash pattern at index ${n} must use segments >= 0.`);r+=t}if(r===0)throw Error(`Dash pattern at index ${n} must have a positive total length.`);if(r>256)throw Error(`Dash pattern at index ${n} has length ${r}, which exceeds 256.`);let i=n*257;t[i]=r;let a=1,o=!0;for(let n of e){for(let e=0;e<n;e++)t[i+a]=o?255:0,a++;o=!o}}),{data:t,width:257,height:e.length,patternCount:e.length}}var er={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},color:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1},minLength:{type:`f32`,components:1,default:0},strokeCap:{type:`u32`,components:1,default:0},strokeDash:{type:`u32`,components:1,default:0},strokeDashOffset:{components:1,default:0}},{channels:tr,defaults:nr,defaultConfigs:rr,optionalChannels:ir}=kn(er),ar=`
${Qn}

// Line caps and dashes are supported.
// Keep rule math in pixel coordinates to avoid unit-range indirection.

// Line caps
const BUTT: u32 = 0u;
const SQUARE: u32 = 1u;
const ROUND: u32 = 2u;

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) color: vec4<f32>,
    @location(1) normalDistance: f32,
    @location(2) halfWidth: f32,
    @location(3) opacity: f32,
    @location(4) posInPixels: vec2<f32>,
    @location(5) @interpolate(flat) strokeCap: u32,
    @location(6) @interpolate(flat) dashIndex: u32,
    @location(7) @interpolate(flat) dashOffset: f32,
    @location(8) @interpolate(flat) pickId: u32,
};

fn culledRule() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.color = vec4<f32>(0.0);
    out.normalDistance = 0.0;
    out.halfWidth = 0.0;
    out.opacity = 0.0;
    out.posInPixels = vec2<f32>(0.0);
    out.strokeCap = 0u;
    out.dashIndex = 0u;
    out.dashOffset = 0.0;
    out.pickId = 0u;
    return out;
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledRule();
    }

    var quad = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(1.0, 1.0)
    );

    let local = quad[v];

    let pixelSize = 1.0 / globals.dpr;

    // Stroke width in pixels.
    var width = getScaled_size(i);
    var opacity = getScaled_opacity(i);

    // Avoid artifacts in very thin lines by clamping the size and adjusting opacity respectively.
    if (width < pixelSize) {
        opacity *= width / pixelSize;
        width = pixelSize;
    }

    // Place the endpoints before extruding the stroke so that occurrence
    // scaling does not also scale pixel-sized widths, offsets, or line caps.
    let a = applyPlacementPixel(
        vec2<f32>(getScaled_x(i), getScaled_y(i)),
        i
    ) + vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i));
    let b = applyPlacementPixel(
        vec2<f32>(getScaled_x2(i), getScaled_y2(i)),
        i
    ) + vec2<f32>(getScaled_x2Offset(i), getScaled_y2Offset(i));

    // Avoid artifacts in degenerate rules by falling back to a unit tangent.
    var tangent = b - a;
    let len = length(tangent);
    if (len == 0.0) {
        tangent = vec2<f32>(1.0, 0.0);
    }
    let normal = normalize(vec2<f32>(-tangent.y, tangent.x));

    let strokeCap = u32(getScaled_strokeCap(i));
    let minLength = getScaled_minLength(i);
    var offset = 0.0;
    var relativeDiff = 0.0;
    if (minLength > 0.0 || strokeCap != BUTT) {
        var diff = max(0.0, minLength - len);
        // Add line caps
        if (strokeCap != BUTT) {
            diff = diff + width;
        }
        if (len > 0.0) {
            relativeDiff = diff / len;
            offset = relativeDiff * (local.x - 0.5);
        }
    }

    // Add an extra pixel to stroke width to accommodate edge antialiasing.
    let aaPadding = pixelSize;
    let paddedWidth = width + aaPadding;
    let halfWidth = 0.5 * width;
    let side = local.y - 0.5;

    // Apply caps and minimum length by spreading the vertices along the tangent.
    var position = a + tangent * (local.x + offset);

    // Extrude the quad along the normal direction.
    position = position + normal * side * paddedWidth;
    let clip = vec2<f32>(
        (position.x / globals.width) * 2.0 - 1.0,
        1.0 - (position.y / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(applyPlacementClipForRule(clip, i), 0.0, 1.0);
    out.color = getScaled_color(i);
    out.normalDistance = side * paddedWidth;
    out.halfWidth = halfWidth;
    out.opacity = opacity;
    // Distances from the line endings (pixels). Used for round caps.
    out.posInPixels = vec2<f32>(local.x, 1.0 - local.x) * (1.0 + relativeDiff) * len -
        vec2<f32>(select(0.0, width * 0.5, strokeCap != BUTT));
    // TODO: Precision issues can appear at extreme zoom levels.
    out.strokeCap = strokeCap;
    out.dashIndex = u32(getScaled_strokeDash(i));
    out.dashOffset = f32(getScaled_strokeDashOffset(i));
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn shade(in: VSOut) -> vec4<f32> {
    let distanceFromEnd = -min(in.posInPixels.x, in.posInPixels.y);
    var distance: f32;
    if (distanceFromEnd > 0.0 && in.strokeCap == ROUND) {
        // Round caps
        distance = length(vec2<f32>(distanceFromEnd, in.normalDistance));
    } else {
        distance = abs(in.normalDistance);
    }
    let width = in.halfWidth * 2.0;
    let dash = dashMask(
        dashAtlas,
        in.dashIndex,
        in.posInPixels.x,
        in.dashOffset
    );
    let alpha = clamp(((in.halfWidth - distance) * globals.dpr) + 0.5, 0.0, 1.0);
    let color = vec4<f32>(in.color.rgb, in.color.a * in.opacity);
    return premultiplyAlpha(color) * alpha * dash;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,or=class extends F{get channelOrder(){return tr}get optionalChannels(){return ir}get channelSpecs(){return er}get defaultChannelConfigs(){return rr}get defaultValues(){return nr}get shaderBody(){return ar}getExtraUniformLayout(){return[{name:`uDashPatternCount`,type:`u32`,components:1}]}getExtraResourceDefs(){return[{name:`dashAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`uint`,dimension:`2d`,visibility:`fragment`,wgslName:`dashAtlas`}]}_initializeExtraResources(){let e=$n(this._markConfig?.dashPatterns??null);this._dashPatternCount=e.patternCount;let t=ye(this.device,{format:`r8uint`,width:e.width,height:e.height,data:e.data},void 0,O(this.label,`dash atlas`));this._extraTextures.set(`dashAtlas`,{texture:t,width:e.width,height:e.height,format:`r8uint`});let n=this._channels.strokeDash;if(e.patternCount>0&&n&&n.value!==void 0){let t=Array.isArray(n.value)?n.value[0]:n.value;typeof t==`number`&&t>=e.patternCount&&console.warn(`[webgpu-renderer] strokeDash value ${t} exceeds pattern count ${e.patternCount}.`)}}_initializeExtraUniforms(){this._setUniformValue(`uDashPatternCount`,this._dashPatternCount??0)}},sr=Object.freeze({type:`rule`,createProgram(e,t,n){return new or(e,t,n)}});function cr(e,t){let n=e.getSlotHandles().properties;for(let[r,i]of Object.entries(t)){if(i.uniform&&!e._uniformBufferState?.entries.has(i.uniform))throw Error(`Property slot "${r}" targets unavailable uniform "${i.uniform}".`);if(!i.uniform&&!i.set)throw Error(`Property slot "${r}" has no update target.`);let t=t=>{if(i.set)i.set(t);else{let n=i.encode?i.encode(t):t;if(typeof n!=`number`&&(!Array.isArray(n)||!n.every(e=>typeof e==`number`)))throw Error(`Property "${r}" must encode to numeric uniform data.`);e._setUniformValue(i.uniform,n)}},a=e._markConfig[r];t(a===void 0?i.getDefault?i.getDefault():i.default:a),n[r]={set:n=>{e._assertAlive(),t(n),e._queueSlotUpdate(!1)}}}}var lr=[`arc`,`dome`,`diagonal`,`line`],ur=[`vertical`,`horizontal`];function dr(e){let t=lr.indexOf(e);if(t<0)throw Error(`Unknown link shape: ${String(e)}`);return t}function fr(e){let t=ur.indexOf(e);if(t<0)throw Error(`Unknown link orientation: ${String(e)}`);return t}var pr={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},color:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1}},{channels:mr,defaults:hr,defaultConfigs:gr,optionalChannels:_r}=kn(pr),vr=`
const SHAPE_ARC: u32 = 0u;
const SHAPE_DOME: u32 = 1u;
const SHAPE_DIAGONAL: u32 = 2u;
const SHAPE_LINE: u32 = 3u;
const ORIENT_VERTICAL: u32 = 0u;
const ORIENT_HORIZONTAL: u32 = 1u;

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) color: vec4<f32>,
    // Signed distance from the line center along the normal, in pixels.
    @location(1) normalDistance: f32,
    // Stroke width in pixels (with AA padding baked in).
    @location(2) size: f32,
    @location(3) @interpolate(flat) pickId: u32,
    @location(4) fadeDistance: f32,
};

fn culledLink() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.color = vec4<f32>(0.0);
    out.normalDistance = 0.0;
    out.size = 0.0;
    out.pickId = 0u;
    out.fadeDistance = -1.0;
    return out;
}

fn distanceFromLine(a: vec2<f32>, b: vec2<f32>, p: vec2<f32>) -> f32 {
    let ap = p - a;
    let ab = b - a;
    let proj = dot(ap, ab) / dot(ab, ab) * ab;
    return length(ap - proj);
}

fn isInsideViewport(p: vec2<f32>, marginFactor: f32) -> bool {
    let margin = vec2<f32>(globals.width, globals.height) * vec2<f32>(marginFactor);
    return p.x >= -margin.x &&
        p.x <= globals.width + margin.x &&
        p.y >= -margin.y &&
        p.y <= globals.height + margin.y;
}

fn inverseSmoothstep(t: f32) -> f32 {
    let clamped = clamp(t, 0.0, 1.0);
    return 0.5 - sin(asin(1.0 - 2.0 * clamped) / 3.0);
}

fn remapVisibleChordParameter(
    stripT: f32,
    chordStart: f32,
    chordEnd: f32,
    viewportLength: f32
) -> f32 {
    let chordMin = min(chordStart, chordEnd);
    let chordMax = max(chordStart, chordEnd);
    let chordSpan = chordMax - chordMin;
    if (chordSpan <= 0.0) {
        return 0.0;
    }

    let visibleChordMin = max(chordMin, 0.0);
    let visibleChordMax = min(chordMax, viewportLength);
    if (visibleChordMax <= visibleChordMin) {
        return stripT;
    }

    let visibleTMin = inverseSmoothstep(
        (visibleChordMin - chordMin) / chordSpan
    );
    let visibleTMax = inverseSmoothstep(
        (visibleChordMax - chordMin) / chordSpan
    );
    let visibleTSpan = visibleTMax - visibleTMin;
    let offscreenTSpan = visibleTMin + (1.0 - visibleTMax);
    if (offscreenTSpan <= 0.0) {
        return stripT;
    }

    let visibleShare = clamp(0.75 + (1.0 - visibleTSpan) * 0.2, 0.75, 0.95);
    let offscreenShare = 1.0 - visibleShare;
    let leftShare = offscreenShare * visibleTMin / offscreenTSpan;
    let rightShare = offscreenShare * (1.0 - visibleTMax) / offscreenTSpan;

    if (stripT <= leftShare) {
        if (leftShare > 0.0) {
            return mix(0.0, visibleTMin, stripT / leftShare);
        }
        return visibleTMin;
    }

    let visibleStart = leftShare;
    let visibleEnd = visibleStart + visibleShare;
    if (stripT <= visibleEnd) {
        if (visibleShare > 0.0) {
            return mix(
                visibleTMin,
                visibleTMax,
                (stripT - visibleStart) / visibleShare
            );
        }
        return visibleTMin;
    }

    if (rightShare > 0.0) {
        return mix(visibleTMax, 1.0, (stripT - visibleEnd) / rightShare);
    }
    return visibleTMax;
}

fn clampChordToViewport(
    p1: ptr<function, vec2<f32>>,
    p4: ptr<function, vec2<f32>>,
    chordLength: ptr<function, f32>
) {
    if (*chordLength > params.uMaxChordLength) {
        let chordVector = *p4 - *p1;
        let unitChordVector = normalize(chordVector);
        if (isInsideViewport(*p1, 2.0)) {
            (*chordLength) = params.uMaxChordLength;
            (*p4) = *p1 + unitChordVector * params.uMaxChordLength;
        } else if (isInsideViewport(*p4, 2.0)) {
            (*chordLength) = params.uMaxChordLength;
            (*p1) = *p4 - unitChordVector * params.uMaxChordLength;
        }
    }
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledLink();
    }

    let segment = v / 2u;
    let side = f32(v % 2u) - 0.5;
    let segmentCount = max(1u, u32(params.uSegmentBreaks));
    let tRaw = f32(segment) / f32(segmentCount);
    var t = tRaw;

    let pixelSize = 1.0 / globals.dpr;
    var opacity = getScaled_opacity(i);

    // The bezier's control points.
    var p1: vec2<f32>;
    var p2: vec2<f32>;
    var p3: vec2<f32>;
    var p4: vec2<f32>;

    let a = vec2<f32>(
        getScaled_x(i) + getScaled_xOffset(i),
        getScaled_y(i) + getScaled_yOffset(i)
    );
    let b = vec2<f32>(
        getScaled_x2(i) + getScaled_x2Offset(i),
        getScaled_y2(i) + getScaled_y2Offset(i)
    );

    if (params.uShape <= SHAPE_DOME) {
        if (params.uShape == SHAPE_DOME) {
            var height = vec2<f32>(0.0, 0.0);
            if (params.uOrient == ORIENT_VERTICAL) {
                p1 = vec2<f32>(min(a.x, b.x), b.y);
                p4 = vec2<f32>(max(a.x, b.x), b.y);
                height = vec2<f32>(0.0, a.y - b.y);
            } else {
                p1 = vec2<f32>(b.x, min(a.y, b.y));
                p4 = vec2<f32>(b.x, max(a.y, b.y));
                height = vec2<f32>(a.x - b.x, 0.0);
            }

            var chordLength = length(p4 - p1);
            clampChordToViewport(&p1, &p4, &chordLength);
            if (params.uClampApex != 0u) {
                if (params.uOrient == ORIENT_VERTICAL) {
                    if (p4.x > 0.0) {
                        p1.x = max(p1.x, -p4.x);
                    }
                    if (p1.x < globals.width) {
                        p4.x = min(p4.x, 2.0 * globals.width - p1.x);
                    }
                } else {
                    if (p4.y > 0.0) {
                        p1.y = max(p1.y, -p4.y);
                    }
                    if (p1.y < globals.height) {
                        p4.y = min(p4.y, 2.0 * globals.height - p1.y);
                    }
                }
            }

            let controlOffset = height / 0.75;
            p2 = p1 + controlOffset;
            p3 = p4 + controlOffset;
        } else if (params.uShape == SHAPE_ARC) {
            p1 = a;
            p4 = b;

            var chordVector = p4 - p1;
            let unitChordVector = normalize(chordVector);
            // Core's WebGL link geometry is expressed in bottom-left
            // coordinates. WebGPU positions use top-left coordinates, so the
            // arc normal must be inverted to keep the bow on the same side.
            let chordNormal = vec2<f32>(unitChordVector.y, -unitChordVector.x);
            var chordLength = length(chordVector);

            clampChordToViewport(&p1, &p4, &chordLength);

            let height = max(chordLength / 2.0 * params.uArcHeightFactor, params.uMinArcHeight);
            let controlOffset = chordNormal * height / 0.75;

            p2 = p1 + controlOffset;
            p3 = p4 + controlOffset;
        }
    } else if (params.uShape == SHAPE_DIAGONAL) {
        if (params.uOrient == ORIENT_VERTICAL) {
            p1 = a;
            p2 = vec2<f32>(a.x, (a.y + b.y) / 2.0);
            p3 = vec2<f32>(b.x, (a.y + b.y) / 2.0);
            p4 = b;
        } else {
            p1 = a;
            p2 = vec2<f32>((a.x + b.x) / 2.0, a.y);
            p3 = vec2<f32>((a.x + b.x) / 2.0, b.y);
            p4 = b;
        }
    } else if (params.uShape == SHAPE_LINE) {
        p1 = a;
        p2 = (a + b) / 2.0;
        p3 = p2;
        p4 = b;
    }

    if (params.uShape == SHAPE_DOME) {
        if (params.uOrient == ORIENT_VERTICAL) {
            t = remapVisibleChordParameter(tRaw, p1.x, p4.x, globals.width);
        } else {
            t = remapVisibleChordParameter(tRaw, p1.y, p4.y, globals.height);
        }
    } else if (params.uShape == SHAPE_ARC) {
        if (a.y == b.y) {
            t = remapVisibleChordParameter(tRaw, p1.x, p4.x, globals.width);
        } else if (a.x == b.x) {
            t = remapVisibleChordParameter(tRaw, p1.y, p4.y, globals.height);
        }
    }

    // Match Core's de Casteljau evaluation for stable long links.
    let q1 = mix(p1, p2, t);
    let q2 = mix(p2, p3, t);
    let q3 = mix(p3, p4, t);
    let r1 = mix(q1, q2, t);
    let r2 = mix(q2, q3, t);
    var p = mix(r1, r2, t);
    let tangent = normalize(3.0 * (r2 - r1));
    let normal = vec2<f32>(-tangent.y, tangent.x);

    var size = getScaled_size(i);
    // Avoid artifacts in very thin lines by clamping the size and adjusting
    // opacity accordingly.
    if (size < pixelSize) {
        opacity *= size / pixelSize;
        size = pixelSize;
    }

    // Add AA padding to the stroke width.
    let paddedSize = size + pixelSize;
    var normalDistance = side * paddedSize;

    var fadeDistance = -1.0;
    if ((params.uShape == SHAPE_ARC || params.uShape == SHAPE_DOME) &&
        params.uArcFadingDistance.x > 0.0 &&
        params.uArcFadingDistance.y > 0.0 &&
        (params.uNoFadingOnPointSelection == 0u || !isDatumSelected(i)))
    {
        fadeDistance = distanceFromLine(p1, p4, p);
        // Keep fully faded triangles collapsed to avoid fragment processing.
        if (1.0 - smoothstep(params.uArcFadingDistance.x, params.uArcFadingDistance.y, fadeDistance) <= 0.0) {
            normalDistance = 0.0;
        }
    }

    // Extrude along the normal.
    p = p + normal * normalDistance;

    let clip = vec2<f32>(
        (p.x / globals.width) * 2.0 - 1.0,
        1.0 - (p.y / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(applyPlacementClip(clip, i), 0.0, 1.0);
    let color = getScaled_color(i);
    out.color = premultiplyAlpha(vec4<f32>(color.rgb, color.a * opacity));
    out.normalDistance = normalDistance;
    out.fadeDistance = fadeDistance;
    out.size = paddedSize;
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn shade(in: VSOut) -> vec4<f32> {
    // Linear AA ramp based on distance from the line center.
    let distance = abs(in.normalDistance);
    var alpha = clamp(((in.size * 0.5 - distance) * globals.dpr), 0.0, 1.0);
    if (in.fadeDistance >= 0.0) {
        alpha *= 1.0 - smoothstep(params.uArcFadingDistance.x, params.uArcFadingDistance.y, in.fadeDistance);
    }
    return in.color * alpha;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,yr=class extends F{get propertySlotDefinitions(){return{arcFadingDistance:{uniform:`uArcFadingDistance`,default:[0,0]},noFadingOnPointSelection:{uniform:`uNoFadingOnPointSelection`,default:!0,encode:e=>+!!e},arcHeightFactor:{uniform:`uArcHeightFactor`,default:1},minArcHeight:{uniform:`uMinArcHeight`,default:1.5},linkShape:{uniform:`uShape`,default:`arc`,encode:dr},orient:{uniform:`uOrient`,default:`vertical`,encode:fr},clampApex:{uniform:`uClampApex`,default:!1,encode:e=>+!!e},maxChordLength:{uniform:`uMaxChordLength`,default:5e4},segments:{uniform:`uSegmentBreaks`,default:101,encode:e=>{let t=Math.round(Number(e));return this._segmentCount=t,t}}}}_initializeExtraUniforms(){cr(this,this.propertySlotDefinitions)}_setExtraUniformValue(e,t){super._setExtraUniformValue(e,t),e==`uSegmentBreaks`&&(this._segmentCount=Math.round(Number(t)))}get channelOrder(){return mr}get optionalChannels(){return _r}get channelSpecs(){return pr}get defaultChannelConfigs(){return gr}get defaultValues(){return hr}get shaderBody(){return vr}get primitiveTopology(){return`triangle-strip`}getExtraUniformLayout(){return[{name:`uArcFadingDistance`,type:`f32`,components:2},{name:`uNoFadingOnPointSelection`,type:`u32`,components:1},{name:`uArcHeightFactor`,type:`f32`,components:1},{name:`uMinArcHeight`,type:`f32`,components:1},{name:`uShape`,type:`u32`,components:1},{name:`uOrient`,type:`u32`,components:1},{name:`uClampApex`,type:`u32`,components:1},{name:`uMaxChordLength`,type:`f32`,components:1},{name:`uSegmentBreaks`,type:`f32`,components:1}]}draw(e,t){let n=(Math.max(1,this._segmentCount??1)+1)*2;e.draw(n,t.instanceCount,0,t.firstInstance)}drawPick(e,t){let n=(Math.max(1,this._segmentCount??1)+1)*2;e.draw(n,t.instanceCount,0,t.firstInstance)}},br=Object.freeze({type:`link`,createProgram(e,t,n){return new yr(e,t,n)}}),xr=[`triangle`,`open`],Sr=[`inside`,`outside`];function Cr(e){return 1/Math.max(Math.tan(Math.min(Math.max(e,1),90)*Math.PI/180),1e-6)}function wr(e){let t=xr.indexOf(e);if(t<0)throw Error(`Unknown arrow head shape: ${String(e)}`);return t}function Tr(e){let t=Sr.indexOf(e);if(t<0)throw Error(`Unknown arrow head placement: ${String(e)}`);return t}var Er={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[0,0,0,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},size:{type:`f32`,components:1,default:8},direction:{type:`u32`,components:1,default:0}},{channels:Dr,defaults:Or,defaultConfigs:kr,optionalChannels:Ar}=kn(Er),jr=`
const DIRECTION_FORWARD: u32 = 0u;
const HEAD_TRIANGLE: u32 = 0u;
const HEAD_OPEN: u32 = 1u;
const PLACEMENT_INSIDE: u32 = 0u;

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) local: vec2<f32>,
    @location(1) @interpolate(flat) halfLength: f32,
    @location(2) @interpolate(flat) headHalfWidth: f32,
    @location(3) @interpolate(flat) stemHalfWidth: f32,
    @location(4) @interpolate(flat) headSlope: f32,
    @location(5) @interpolate(flat) notchSlope: f32,
    @location(6) @interpolate(flat) fill: vec4<f32>,
    @location(7) @interpolate(flat) stroke: vec4<f32>,
    @location(8) @interpolate(flat) strokeWidth: f32,
    @location(9) @interpolate(flat) direction: u32,
    @location(10) @interpolate(flat) headSpacing: f32,
    @location(11) @interpolate(flat) pickId: u32,
    @location(12) @interpolate(flat) headStrokeWidth: f32,
};

fn culledArrow() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.local = vec2<f32>(0.0);
    out.halfLength = 0.0;
    out.headHalfWidth = 0.0;
    out.stemHalfWidth = 0.0;
    out.headSlope = 0.0;
    out.notchSlope = 0.0;
    out.fill = vec4<f32>(0.0);
    out.stroke = vec4<f32>(0.0);
    out.strokeWidth = 0.0;
    out.direction = 0u;
    out.headSpacing = 0.0;
    out.pickId = 0u;
    out.headStrokeWidth = 0.0;
    return out;
}

fn distanceToRatio(d: f32) -> f32 {
    return clamp(d * globals.dpr + 0.5, 0.0, 1.0);
}

fn distanceToColor(d: f32, fill: vec4<f32>, stroke: vec4<f32>, halfStroke: f32) -> vec4<f32> {
    let fillColor = premultiplyAlpha(fill);
    let strokeColor = premultiplyAlpha(stroke);
    if (halfStroke > 0.0) {
        return mix(strokeColor, select(vec4<f32>(0.0), fillColor, d <= 0.0),
            distanceToRatio(abs(d) - halfStroke));
    }
    return fillColor * distanceToRatio(-d);
}

fn boxDistance(p: vec2<f32>, halfSize: vec2<f32>) -> f32 {
    let q = abs(p) - halfSize;
    return length(max(q, vec2<f32>(0.0))) + min(max(q.x, q.y), 0.0);
}

fn stemDistance(
    p: vec2<f32>,
    halfLength: f32,
    halfWidth: f32,
    headSlope: f32
) -> f32 {
    if (halfWidth <= 0.0) {
        return 1e20;
    }
    let headSideLength = halfWidth * headSlope;
    var startNotchLength = 0.0;
    if (params.uStartNotch != 0u) {
        startNotchLength = min(
            halfWidth * headSlope,
            max(2.0 * halfLength - params.uMinStemLength, 0.0)
        );
    }
    return polygonDistance(
        p,
        array<vec2<f32>, 6>(
            vec2<f32>(halfLength, 0.0),
            vec2<f32>(halfLength - headSideLength, halfWidth),
            vec2<f32>(-halfLength, halfWidth),
            vec2<f32>(-halfLength + startNotchLength, 0.0),
            vec2<f32>(-halfLength, -halfWidth),
            vec2<f32>(halfLength - headSideLength, -halfWidth)
        )
    );
}

fn polygonDistance(p: vec2<f32>, vertices: array<vec2<f32>, 6>) -> f32 {
    var distance = length(p - vertices[0]);
    var inside = false;
    for (var i = 0u; i < 6u; i++) {
        let j = (i + 1u) % 6u;
        let a = vertices[i];
        let b = vertices[j];
        let edge = b - a;
        let projection = a + edge * clamp(dot(p - a, edge) / max(dot(edge, edge), 0.0001), 0.0, 1.0);
        distance = min(distance, length(p - projection));
        if ((a.y > p.y) != (b.y > p.y) && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x) {
            inside = !inside;
        }
    }
    return select(distance, -distance, inside);
}

fn repeatDistance(x: f32, spacing: f32) -> f32 {
    if (x >= spacing) {
        return x - floor(x / spacing) * spacing;
    }
    return x;
}

fn headNotchOffset(
    halfWidth: f32,
    headSlope: f32,
    notchSlope: f32,
    strokeWidth: f32
) -> f32 {
    if (halfWidth <= 0.0) {
        return 0.0;
    }
    let headAxisLength = halfWidth * headSlope;
    let topOuter = vec2<f32>(headAxisLength, halfWidth);
    let normalOffset = strokeWidth * normalize(vec2<f32>(halfWidth, -headAxisLength));
    let topInner = topOuter + normalOffset;
    return topInner.x - topInner.y * notchSlope;
}

fn headDistance(
    p: vec2<f32>,
    tip: f32,
    halfWidth: f32,
    headSlope: f32,
    notchSlope: f32,
    strokeWidth: f32
) -> f32 {
    if (halfWidth <= 0.0) {
        return 1e20;
    }
    let headAxisLength = halfWidth * headSlope;
    let topOuter = vec2<f32>(headAxisLength, halfWidth);
    let bottomOuter = vec2<f32>(headAxisLength, -halfWidth);
    let normalOffset = strokeWidth * normalize(vec2<f32>(halfWidth, -headAxisLength));
    let topInner = topOuter + normalOffset;
    let bottomInner = bottomOuter + vec2<f32>(normalOffset.x, -normalOffset.y);
    let notch = headNotchOffset(
        halfWidth,
        headSlope,
        notchSlope,
        strokeWidth
    );
    let headPosition = vec2<f32>(tip - p.x, p.y);
    if (strokeWidth <= 0.0) {
        return polygonDistance(
            headPosition,
            array<vec2<f32>, 6>(
                vec2<f32>(0.0, 0.0),
                topOuter,
                vec2<f32>(notch, 0.0),
                bottomOuter,
                vec2<f32>(-0.0001, -0.0001),
                vec2<f32>(-0.0001, 0.0001)
            )
        );
    }
    return polygonDistance(
        headPosition,
        array<vec2<f32>, 6>(
            vec2<f32>(0.0, 0.0),
            topOuter,
            topInner,
            vec2<f32>(notch, 0.0),
            bottomInner,
            bottomOuter
        )
    );
}

fn triangleHeadStemJoinLength(
    stemHalfWidth: f32,
    headHalfWidth: f32,
    headSlope: f32,
    notchSlope: f32
) -> f32 {
    let clampedNotchSlope = min(notchSlope, headSlope);
    return headHalfWidth * headSlope
        - (headHalfWidth - stemHalfWidth) * clampedNotchSlope;
}

fn effectiveHeadSlope(
    halfLength: f32,
    headHalfWidth: f32,
    stemHalfWidth: f32,
    configuredHeadSlope: f32,
    configuredNotchSlope: f32,
    headRepeat: bool
) -> f32 {
    if (headRepeat || stemHalfWidth < 0.0) {
        return configuredHeadSlope;
    }
    if (params.uHeadPlacement != PLACEMENT_INSIDE) {
        if (params.uStartNotch == 0u || stemHalfWidth <= 0.0) {
            return configuredHeadSlope;
        }
        let maxStartNotchLength = max(
            halfLength * 2.0 - params.uMinStemLength,
            0.0
        );
        return min(configuredHeadSlope, maxStartNotchLength / stemHalfWidth);
    }
    if (params.uHeadShape != HEAD_TRIANGLE) {
        return configuredHeadSlope;
    }

    let maxJoinLength = max(
        halfLength * 2.0 - params.uMinStemLength,
        0.0
    );
    let configuredJoinLength = triangleHeadStemJoinLength(
        stemHalfWidth,
        headHalfWidth,
        configuredHeadSlope,
        configuredNotchSlope
    );
    if (configuredJoinLength <= maxJoinLength) {
        return configuredHeadSlope;
    }

    let boundaryJoinLength = stemHalfWidth * configuredNotchSlope;
    if (maxJoinLength < boundaryJoinLength) {
        return clamp(maxJoinLength / stemHalfWidth, 0.0, configuredHeadSlope);
    }
    return clamp(
        (maxJoinLength + (headHalfWidth - stemHalfWidth) * configuredNotchSlope)
            / headHalfWidth,
        0.0,
        configuredHeadSlope
    );
}

fn shade(in: VSOut) -> vec4<f32> {
    var p = in.local;
    if (in.direction != DIRECTION_FORWARD) {
        p.x = -p.x;
    }

    let halfStroke = in.strokeWidth * 0.5;
    var stem = 1e20;
    if (in.stemHalfWidth > 0.0) {
        stem = stemDistance(
            p,
            in.halfLength,
            in.stemHalfWidth,
            in.headSlope
        );
    }

    var head = 1e20;
    if (in.headSpacing >= 0.0) {
        let halfStroke = in.strokeWidth * 0.5;
        let headAxisLength = in.headHalfWidth * in.headSlope;
        let headStrokeLength = in.headStrokeWidth
            / length(vec2<f32>(in.headSlope, 1.0));
        let headRepeatFootprintLength = headAxisLength
            + headStrokeLength
            + halfStroke * 2.0;
        let spacing = max(in.headSpacing, headRepeatFootprintLength);
        let distanceFromStart = in.halfLength - p.x;
        let headOffset = repeatDistance(distanceFromStart + halfStroke, spacing)
            - halfStroke;
        let headTipDistance = distanceFromStart - headOffset;
        let headEndDistance = headTipDistance
            + headRepeatFootprintLength
            - halfStroke;
        if (
            headTipDistance <= 0.0
            || headEndDistance <= in.halfLength * 2.0
        ) {
            head = headDistance(
                p,
                p.x + headOffset,
                in.headHalfWidth,
                in.headSlope,
                in.notchSlope,
                in.headStrokeWidth
            );
        }
    } else {
        head = headDistance(
            p,
            in.halfLength,
            in.headHalfWidth,
            in.headSlope,
            in.notchSlope,
            in.headStrokeWidth
        );
    }

    let d = min(stem, head);
    var fill = in.fill;
    var stroke = in.stroke;
    return distanceToColor(d, fill, stroke, halfStroke);
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledArrow();
    }

    var quad = array<vec2<f32>, 6>(
        vec2<f32>(0, 0), vec2<f32>(1, 0), vec2<f32>(0, 1),
        vec2<f32>(0, 1), vec2<f32>(1, 0), vec2<f32>(1, 1)
    );
    let local = quad[v];
    let a = vec2<f32>(getScaled_x(i) + getScaled_xOffset(i), getScaled_y(i) + getScaled_yOffset(i));
    let b = vec2<f32>(getScaled_x2(i) + getScaled_x2Offset(i), getScaled_y2(i) + getScaled_y2Offset(i));
    var tangent = b - a;
    let lengthInPixels = length(tangent);
    if (lengthInPixels == 0.0) {
        tangent = vec2<f32>(1, 0);
    }
    let axis = normalize(tangent);
    let normal = vec2<f32>(-axis.y, axis.x);
    let arrowSize = max(getScaled_size(i), params.uMinSize);
    let headHalfWidth = max(params.uHeadWidth * arrowSize * 0.5, 0.0);
    let stemHalfWidth = select(-arrowSize * 0.5, arrowSize * 0.5, params.uStem != 0u);
    let headRepeat = params.uHeadSpacing >= 0.0;
    let headSlope = effectiveHeadSlope(
        lengthInPixels * 0.5,
        headHalfWidth,
        stemHalfWidth,
        params.uHeadSlope,
        params.uHeadNotchSlope,
        headRepeat
    );
    let notchSlope = select(
        min(params.uHeadNotchSlope, headSlope),
        headSlope,
        params.uHeadShape == HEAD_OPEN
    );
    let headStrokeWidth = select(0.0, abs(stemHalfWidth) * 2.0, params.uHeadShape == HEAD_OPEN);
    let outsideHeadOffset = select(
        0.0,
        headNotchOffset(
            headHalfWidth,
            headSlope,
            notchSlope,
            headStrokeWidth
        ),
        params.uHeadPlacement != PLACEMENT_INSIDE
    );
    let padding = 1.0 / globals.dpr + getScaled_strokeWidth(i) * 0.5 + max(headHalfWidth, abs(stemHalfWidth));
    let geometryHalfLength = lengthInPixels * 0.5 + outsideHeadOffset * 0.5;
    let geometryCenter = outsideHeadOffset * 0.5;
    let quadHalfLength = geometryHalfLength + padding;
    let centre = (a + b) * 0.5;
    let axisPosition = geometryCenter + (local.x - 0.5) * (quadHalfLength * 2.0);
    let normalPosition = (local.y - 0.5) * (max(headHalfWidth, abs(stemHalfWidth)) * 2.0 + padding * 2.0);
    let position = centre + axis * axisPosition + normal * normalPosition;
    let clip = vec2<f32>((position.x / globals.width) * 2.0 - 1.0, 1.0 - (position.y / globals.height) * 2.0);
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(applyPlacementClip(clip, i), 0.0, 1.0);
    out.local = vec2<f32>(axisPosition - geometryCenter, normalPosition);
    out.halfLength = geometryHalfLength;
    out.headHalfWidth = headHalfWidth;
    out.stemHalfWidth = stemHalfWidth;
    out.headSlope = headSlope;
    out.notchSlope = notchSlope;
    let fill = getScaled_fill(i);
    let stroke = getScaled_stroke(i);
    out.fill = vec4<f32>(fill.rgb, fill.a * getScaled_fillOpacity(i));
    out.stroke = vec4<f32>(stroke.rgb, stroke.a * getScaled_strokeOpacity(i));
    out.strokeWidth = getScaled_strokeWidth(i);
    out.direction = u32(getScaled_direction(i));
    out.headSpacing = select(-1.0, params.uHeadSpacing * arrowSize, params.uHeadSpacing >= 0.0);
    out.headStrokeWidth = headStrokeWidth;
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,Mr=class extends F{get propertySlotDefinitions(){return{headAngle:{uniform:`uHeadSlope`,default:45,encode:Cr},headNotchAngle:{uniform:`uHeadNotchSlope`,default:90,encode:Cr},minSize:{uniform:`uMinSize`,default:1},headWidth:{uniform:`uHeadWidth`,default:3},startNotch:{uniform:`uStartNotch`,default:!1,encode:e=>+!!e},minStemLength:{uniform:`uMinStemLength`,default:0},headSpacing:{uniform:`uHeadSpacing`,default:null,encode:e=>e??-1},stem:{uniform:`uStem`,default:!0,encode:e=>e===!1?0:1},headShape:{uniform:`uHeadShape`,default:`triangle`,encode:wr},headPlacement:{uniform:`uHeadPlacement`,default:`inside`,encode:Tr}}}_initializeExtraUniforms(){cr(this,this.propertySlotDefinitions)}get channelOrder(){return Dr}get optionalChannels(){return Ar}get channelSpecs(){return Er}get defaultChannelConfigs(){return kr}get defaultValues(){return Or}get shaderBody(){return jr}get primitiveTopology(){return`triangle-list`}getExtraUniformLayout(){return[{name:`uHeadSlope`,type:`f32`,components:1},{name:`uHeadNotchSlope`,type:`f32`,components:1},{name:`uMinSize`,type:`f32`,components:1},{name:`uHeadWidth`,type:`f32`,components:1},{name:`uStartNotch`,type:`u32`,components:1},{name:`uMinStemLength`,type:`f32`,components:1},{name:`uHeadSpacing`,type:`f32`,components:1},{name:`uStem`,type:`u32`,components:1},{name:`uHeadShape`,type:`u32`,components:1},{name:`uHeadPlacement`,type:`u32`,components:1}]}draw(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}},Nr=Object.freeze({type:`arrow`,createProgram(e,t,n){return new Mr(e,t,n)}}),Pr=Object.freeze({thin:100,light:300,regular:400,normal:400,medium:500,bold:700,black:900}),Fr=new Map,Ir;function Lr(e){if(typeof e==`number`)return e;let t=Pr[e.toLowerCase()];if(!t)throw Error(`Unknown font weight: `+e);return t}function Rr(e,t=`normal`,n=`regular`){return`${e}\u0000${t}\u0000${Lr(n)}`}function zr(){return Fr}function Br(){return Ir===void 0?void 0:Fr.get(Ir)}var Vr=class{constructor(){this._fonts=new Map(zr()),this._defaultFontEntry=Br()}_getKey(e,t,n){return Rr(e,t,n)}registerFont({family:e,style:t=`normal`,weight:n=`regular`,metrics:r,bitmap:i}){let a=this._getKey(e,t,n);this._fonts.set(a,{metrics:r,bitmap:i})}getFont(e,t=`normal`,n=`regular`){let r=this._getKey(e,t,n),i=this._fonts.get(r);if(!i){if(!this._defaultFontEntry)throw Error(`Cannot find font: "${e}". Import a font preset or provide a font resource.`);return console.warn(`Cannot find font: "${e}". Using the registered default font.`),this._defaultFontEntry}return i}getDefaultFont(){if(!this._defaultFontEntry)throw Error(`No default font is registered. Import a font preset before using the default font.`);return this._defaultFontEntry}};async function Hr(e){let t=await fetch(e);if(!t.ok)throw Error(`Could not load BMFont bitmap: ${t.status}`);let n=await t.blob();return createImageBitmap(n)}function Ur({strings:e,fontManager:t=new Vr,font:n={family:`Lato`,style:`normal`,weight:400},fontSize:r=12,lineHeight:i=1,letterSpacing:a=0}){let o=Array.isArray(e)?e:[e],s=n.style===`italic`?`italic`:`normal`,c=t.getFont(n.family,s,n.weight??400).metrics,l=r/c.common.base,u=c.common.lineHeight*l*i,d=c.common.base*l,f=c.descent*l,p=a/l,m=0,h=!1;for(let e of o){e.includes(`
`)&&(h=!0);for(let t of e)t!==`
`&&(m+=1)}let g=new Uint32Array(m),_=new Uint32Array(m),v=new Float32Array(m),y=h?new Float32Array(m):null,b=new Float32Array(o.length),x=new Float32Array(o.length),S=0;for(let e=0;e<o.length;e++){let t=o[e],n=0,r=0,i=0,s=0,d=0,f=()=>{d>0&&a!==0&&(i-=a),i>r&&(r=i),i=0,d=0,n=0};for(let r of t){if(r===`
`){f(),s+=1;continue}let t=r.codePointAt(0),a=c.getCharByCode(t);d===0&&(n-=(a.width-a.xadvance)/2),g[S]=a.id>>>0,_[S]=e,v[S]=n*l,y&&(y[S]=-s*u),n+=a.xadvance+p,i+=(a.xadvance+p)*l,d+=1,S+=1}f(),b[e]=r,x[e]=Math.max(1,s+1)*u}return{glyphIds:g,stringIndex:_,xOffset:v,yOffset:y,textWidth:b,textHeight:x,fontSize:r,lineAdvance:u,ascent:d,descent:f}}var Wr=`
const BASELINE_ALPHABETIC: u32 = 0u;
const BASELINE_MIDDLE: u32 = 1u;
const BASELINE_TOP: u32 = 2u;
const BASELINE_BOTTOM: u32 = 3u;

fn baselineOffset(
    baseline: u32,
    sdfPadding: f32,
    capHeight: f32,
    descent: f32
) -> f32 {
    var offset = -sdfPadding;
    if (baseline == BASELINE_TOP) {
        offset = offset + capHeight;
    } else if (baseline == BASELINE_MIDDLE) {
        offset = offset + capHeight * 0.5;
    } else if (baseline == BASELINE_BOTTOM) {
        offset = offset - descent;
    }
    return offset;
}

// BMFont y offsets and line offsets use a baseline-origin, y-up coordinate
// system. Convert them to top-origin pixel coordinates while positioning the
// atlas quad from top (vertexY = 0) to bottom (vertexY = 1).
fn glyphVertexY(
    vertexY: f32,
    lineYOffset: f32,
    glyphHeight: f32,
    glyphYOffset: f32,
    sizeScale: f32,
    sizeRatio: f32,
    baseline: u32,
    sdfPadding: f32,
    capHeight: f32,
    descent: f32
) -> f32 {
    let baselineY = baselineOffset(
        baseline,
        sdfPadding,
        capHeight,
        descent
    );
    return -lineYOffset * sizeRatio +
        (glyphYOffset + baselineY + vertexY * glyphHeight) * sizeScale;
}
`,Gr={uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:L(),default:.5},x2:{components:1,scale:L(),optional:!0},y:{components:1,scale:L(),default:.5},y2:{components:1,scale:L(),optional:!0},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},text:{type:`u32`,components:1,default:0},size:{type:`f32`,components:1,default:12},angle:{type:`f32`,components:1,default:0},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},align:{type:`u32`,components:1,default:1},baseline:{type:`u32`,components:1,default:1},fill:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1}},{channels:Kr,defaults:qr,defaultConfigs:Jr,optionalChannels:Yr}=kn(Gr),Xr=`
struct GlyphInstance {
    stringIndex: u32,
    glyphId: u32,
    xOffset: f32,
    yOffset: f32,
};

struct StringMetrics {
    width: f32,
    height: f32,
};

struct GlyphMetrics {
    texRect: vec4<f32>,
    metrics: vec4<f32>,
};

const ALIGN_LEFT: u32 = 0u;
const ALIGN_CENTER: u32 = 1u;
const ALIGN_RIGHT: u32 = 2u;

const ALIGN_AXIS_LEFT: i32 = -1;
const ALIGN_AXIS_CENTER: i32 = 0;
const ALIGN_AXIS_RIGHT: i32 = 1;

${Wr}

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) uv: vec2<f32>,
    @location(1) color: vec4<f32>,
    @location(2) opacity: f32,
    @location(3) @interpolate(flat) slope: f32,
    @location(4) @interpolate(flat) gamma: f32,
    @location(5) @interpolate(flat) pickId: u32,
    @location(6) edgeFadeOpacity: f32,
};

fn culledText() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.uv = vec2<f32>(0.0);
    out.color = vec4<f32>(0.0);
    out.opacity = 0.0;
    out.slope = 0.0;
    out.gamma = 1.0;
    out.pickId = 0u;
    out.edgeFadeOpacity = 0.0;
    return out;
}

fn minValue(v: vec4<f32>) -> f32 {
    return min(min(v.x, v.y), min(v.z, v.w));
}

fn maxValue(v: vec4<f32>) -> f32 {
    return max(max(v.x, v.y), max(v.z, v.w));
}

fn alignOffset(align: u32, width: f32) -> f32 {
    if (align == ALIGN_CENTER) {
        return -0.5 * width;
    }
    if (align == ALIGN_RIGHT) {
        return -width;
    }
    return 0.0;
}

// Linear ramp used for squeeze fading (smoothstep is too soft for SDFs).
fn linearstep(edge0: f32, edge1: f32, x: f32) -> f32 {
    return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

struct RangeResult {
    pos: f32,
    scale: f32,
}

// Range fitting in local pixel space: returns the adjusted anchor and scale.
fn positionInsideRange(
    a: f32,
    b: f32,
    width: f32,
    padding: f32,
    align: i32,
    flush: bool,
    viewportSpan: f32
) -> RangeResult {
    let paddedWidth = width + 2.0 * padding;

    // Text clearly outside the viewport.
    if (a > viewportSpan || b < 0.0) {
        return RangeResult(0.0, 0.0);
    }

    let span = b - a;

    // Extra room for keeping text inside the range.
    let extra = max(0.0, span - paddedWidth);
    var pos = 0.0;

    if (align == ALIGN_AXIS_CENTER) {
        // Centered: slide within the range if flush is enabled.
        var centre = a + b;
        if (flush) {
            let leftOver = max(0.0, paddedWidth - centre);
            centre = centre + min(leftOver, extra);

            let rightOver = max(0.0, paddedWidth + centre - 2.0 * viewportSpan);
            centre = centre - min(rightOver, extra);
        }
        pos = centre / 2.0;
    } else if (align == ALIGN_AXIS_LEFT) {
        // Left aligned.
        var edge = a;
        if (flush) {
            let over = max(0.0, -edge);
            edge = edge + min(over, extra);
        }
        pos = edge + padding;
    } else {
        // Right aligned.
        var edge = b;
        if (flush) {
            let over = max(0.0, edge - viewportSpan);
            edge = edge - min(over, extra);
        }
        pos = edge - padding;
    }

    let scale = clamp((span - padding) / paddedWidth, 0.0, 1.0);
    return RangeResult(pos, scale);
}

// Axis-aligned bounding box size after rotation.
fn calculateRotatedDimensions(size: vec2<f32>, rotationMatrix: mat2x2<f32>) -> vec2<f32> {
    let half = size * 0.5;
    let a = abs(rotationMatrix * vec2<f32>(half.x, half.y));
    let b = abs(rotationMatrix * vec2<f32>(-half.x, half.y));
    let c = abs(rotationMatrix * vec2<f32>(half.x, -half.y));
    let d = abs(rotationMatrix * vec2<f32>(-half.x, -half.y));
    return vec2<f32>(
        max(max(a.x, b.x), max(c.x, d.x)),
        max(max(a.y, b.y), max(c.y, d.y))
    ) * 2.0;
}

fn alignCodeToAxis(align: u32) -> i32 {
    if (align == ALIGN_LEFT) {
        return ALIGN_AXIS_LEFT;
    }
    if (align == ALIGN_RIGHT) {
        return ALIGN_AXIS_RIGHT;
    }
    return ALIGN_AXIS_CENTER;
}

fn baselineCodeToAxis(baseline: u32) -> i32 {
    if (baseline == BASELINE_TOP) {
        return ALIGN_AXIS_LEFT;
    }
    if (baseline == BASELINE_BOTTOM || baseline == BASELINE_ALPHABETIC) {
        return ALIGN_AXIS_RIGHT;
    }
    return ALIGN_AXIS_CENTER;
}

// Align adjustment for ranged text when rotated.
fn fixAlignForAngle(align: vec2<i32>, angleInDegrees: f32) -> vec2<i32> {
    let a = (angleInDegrees + 45.0) % 360.0;
    let x = align.x;
    let y = -align.y;

    if (a < 90.0) {
        return vec2<i32>(x, y);
    } else if (a < 180.0) {
        return vec2<i32>(y, -x);
    } else if (a < 270.0) {
        return vec2<i32>(-x, y);
    }
    return vec2<i32>(-y, x);
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledText();
    }

    var quad = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(1.0, 1.0)
    );

    let glyph = glyphs[i];
    let textMetrics = stringMetrics[glyph.stringIndex];
    let metrics = glyphMetrics[glyph.glyphId];

    // Base font size before range fitting.
    var size = getScaled_size(i);
    var opacity = getScaled_opacity(i);

    // Rotation is applied both to range fitting and glyph placement.
    let angleDegrees = getScaled_angle(i);
    let angle = angleDegrees * 3.14159265 / 180.0;
    let sinTheta = sin(angle);
    let cosTheta = cos(angle);
    let rot = mat2x2<f32>(cosTheta, sinTheta, -sinTheta, cosTheta);

    // Text dimensions at the layout font size, scaled to the current size.
    let sizeRatioBase = size / params.uLayoutFontSize;
    let textSize = vec2<f32>(textMetrics.width, textMetrics.height) * sizeRatioBase;
    let flushSize = calculateRotatedDimensions(textSize, rot);

    // Resolve alignment axes for ranged fitting.
    var alignAxis = vec2<i32>(
        alignCodeToAxis(u32(getScaled_align(i))),
        baselineCodeToAxis(u32(getScaled_baseline(i)))
    );

#if defined(x2_DEFINED) || defined(y2_DEFINED)
    alignAxis = fixAlignForAngle(alignAxis, angleDegrees);
#endif

    // Anchor and ranged endpoints are in the configuration rectangle's local
    // pixel space. Apply the per-instance placement before fitting so that
    // faceted text uses the actual sample-row range, like the WebGL mark.
    let anchorPosition = vec2<f32>(getScaled_x(i), getScaled_y(i));
    // Core's applyOffset subtracts yOffset because unit y points upward. This
    // shader uses local pixel coordinates, where y points downward, so the
    // equivalent offset is positive here.
    let positionOffset = vec2<f32>(
        getScaled_xOffset(i),
        getScaled_yOffset(i)
    );
    var anchor = applyPlacementPixel(anchorPosition, i) + positionOffset;
    var rangeScale = 1.0;
    var logoSize = vec2<f32>(size);

#if defined(x2_DEFINED)
    let x2 = applyPlacementPixel(
        vec2<f32>(getScaled_x2(i), anchorPosition.y),
        i
    ).x + getScaled_x2Offset(i);
    if (params.uLogoLetters != 0u) {
        logoSize.x = abs(x2 - anchor.x);
    } else {
        let xRange = positionInsideRange(
            min(anchor.x, x2),
            max(anchor.x, x2),
            flushSize.x * rangeScale,
            params.uPaddingX,
            alignAxis.x,
            params.uFlushX != 0u,
            params.uViewport.z - params.uViewport.x
        );
        anchor.x = xRange.pos;
        rangeScale = rangeScale * xRange.scale;
    }
#endif

#if defined(y2_DEFINED)
    let y2 = applyPlacementPixel(
        vec2<f32>(anchorPosition.x, getScaled_y2(i)),
        i
    ).y + getScaled_y2Offset(i);
    if (params.uLogoLetters != 0u) {
        logoSize.y = abs(y2 - anchor.y);
        anchor.y = (anchor.y + y2) * 0.5;
    } else {
        let yRange = positionInsideRange(
            min(anchor.y, y2),
            max(anchor.y, y2),
            flushSize.y * rangeScale,
            params.uPaddingY,
            alignAxis.y,
            params.uFlushY != 0u,
            params.uViewport.w - params.uViewport.y
        );
        anchor.y = yRange.pos;
        rangeScale = rangeScale * yRange.scale;
    }
#endif

    // Range fitting uses viewport-local pixels. Add the configuration
    // rectangle's origin only for final placement and visible-range culling.
    // Source-backed draws use a zero-origin configuration rectangle and rely
    // on the GPU viewport for their canvas offset.
    let localAnchor = anchor;
    anchor = params.uViewport.xy + anchor;

    if (isOutsideVisibleRange(anchor)) {
        return culledText();
    }

    // Optional squeeze: scale down text or drop it if it no longer fits.
    if (rangeScale < 1.0) {
        if (params.uSqueeze != 0u) {
            let scaleFadeExtent = vec2<f32>(3.0, 6.0) / vec2<f32>(size);
            if (rangeScale < scaleFadeExtent.x) {
                return culledText();
            }
            size = size * rangeScale;
            opacity = opacity * linearstep(
                scaleFadeExtent.x,
                scaleFadeExtent.y,
                rangeScale
            );
        } else {
            return culledText();
        }
    }

    // Recompute size-dependent scales after range fitting.
    let sizeScale = size / params.uFontBase;
    let sizeRatio = size / params.uLayoutFontSize;

    let local = quad[v];
    var width = metrics.texRect.z * sizeScale;
    var height = metrics.texRect.w * sizeScale;
    var x = alignOffset(u32(getScaled_align(i)), textMetrics.width * sizeRatio) +
        glyph.xOffset * sizeRatio;
    var y = glyphVertexY(
        local.y,
        glyph.yOffset,
        metrics.texRect.w,
        metrics.metrics.x,
        sizeScale,
        sizeRatio,
        u32(getScaled_baseline(i)),
        params.uSdfPadding,
        params.uCapHeight,
        params.uDescent
    );
    if (params.uLogoLetters != 0u) {
        width = logoSize.x * 0.5 *
            (metrics.texRect.z + 2.0 * params.uSdfPadding) /
            metrics.texRect.z;
        height = logoSize.y *
            (metrics.texRect.w + 2.0 * params.uSdfPadding) /
            metrics.texRect.w;
        x = (local.x - 0.5) * width;
        y = (local.y - 0.5) * height;
    }
    // Core encodes dy as a negative y-up glyph offset. Convert it to the
    // screen-pixel direction before applying the screen-space rotation.
    let localPos = vec2<f32>(
        x + local.x * width + getScaled_dx(i),
        y + getScaled_dy(i)
    );
    let rotated = rot * localPos;
    let localPixel = localAnchor + rotated;
    let pixel = anchor + rotated;

    var edgeFadeOpacity = 1.0;
    if (maxValue(params.uViewportEdgeFadeDistance) > -1e10) {
        let viewportSize = params.uViewport.zw - params.uViewport.xy;
        let localUnit = localPixel / viewportSize;
        edgeFadeOpacity = minValue(
            ((vec4<f32>(1.0, 1.0, 0.0, 0.0) +
                vec4<f32>(-1.0, -1.0, 1.0, 1.0) * localUnit.yxyx) *
                viewportSize.yxyx - params.uViewportEdgeFadeDistance) /
                params.uViewportEdgeFadeWidth
        );
    }

    let clip = vec2<f32>(
        (pixel.x / globals.width) * 2.0 - 1.0,
        1.0 - (pixel.y / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(
        applyTextPlacementClip(clip, i),
        0.0,
        1.0
    );
    out.uv = (metrics.texRect.xy + local * metrics.texRect.zw) * params.uAtlasScale;
    out.color = getScaled_fill(i);
    out.opacity = opacity;
    out.slope = max(1.0, size / params.uSdfNumerator * globals.dpr);
    out.gamma = getGammaForColor(out.color.rgb);
    out.pickId = 0u;
    out.edgeFadeOpacity = edgeFadeOpacity;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn median(r: f32, g: f32, b: f32) -> f32 {
    return max(min(r, g), min(max(r, g), b));
}

fn sampleSdf(uv: vec2<f32>) -> f32 {
    let c = textureSample(fontAtlas, fontSampler, uv).rgb;
    return 1.0 - median(c.r, c.g, c.b);
}

fn sampleSuperSdf(uv: vec2<f32>) -> f32 {
    let dx = dpdx(uv);
    // WebGL derivatives use a bottom-left framebuffer origin, whereas WebGPU
    // derivatives use a top-left origin. Preserve the WebGL atlas offsets.
    let dy = -dpdy(uv);
    return (
        sampleSdf(uv + 0.25 * dx + 0.25 * dy) +
        sampleSdf(uv + 0.75 * dx + 0.25 * dy) +
        sampleSdf(uv + 0.25 * dx + 0.75 * dy) +
        sampleSdf(uv + 0.75 * dx + 0.75 * dy)
    ) * 0.25;
}

fn getGammaForColor(rgb: vec3<f32>) -> f32 {
    return mix(
        1.25,
        0.75,
        smoothstep(0.0, 1.0, dot(rgb, vec3<f32>(0.299, 0.587, 0.114)))
    );
}

fn shadeBase(in: VSOut, edgeFadeOpacity: f32) -> vec4<f32> {
    let sigDist = sampleSuperSdf(in.uv);
    var slope = in.slope;
    if (params.uLogoLetters != 0u) {
        slope = 0.7 / length(vec2<f32>(dpdy(sigDist), dpdx(sigDist)));
    }
    var alpha = clamp((sigDist - 0.5) * slope + 0.5, 0.0, 1.0);
    alpha = alpha * edgeFadeOpacity;
    alpha = pow(alpha, in.gamma);
    let color = vec4<f32>(in.color.rgb, in.color.a * in.opacity);
    return premultiplyAlpha(color) * alpha;
}

// Picking intentionally ignores edge fading, like the WebGL renderer.
fn shade(in: VSOut) -> vec4<f32> {
    return shadeBase(in, 1.0);
}

fn shadeText(in: VSOut) -> vec4<f32> {
    return shadeBase(in, clamp(in.edgeFadeOpacity, 0.0, 1.0));
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shadeText(in);
}
`;function Zr({channels:e={},count:t,textLayout:n,font:r,fontResource:i,fontStyle:a,fontWeight:o,fontSize:s,lineHeight:c,letterSpacing:l}={}){let u={...e},d=a===`italic`?`italic`:`normal`,f=typeof o==`number`||typeof o==`string`?o:400,p=new Vr;i&&p.registerFont({family:typeof r==`string`?r:`Lato`,style:d,weight:f,metrics:i.metrics,bitmap:i.bitmap});let m=p.getFont(typeof r==`string`?r:`Lato`,d,f),h=u.text,g;if(n){let e=n,r=e.textWidth.length;if(t!==void 0&&t!==r)throw Error(`Text layout count (${r}) does not match count (${t}).`);return u.text={value:0,type:`u32`,components:1,scale:{type:`identity`}},{normalized:{channels:u,count:r,seriesIndexExpression:`glyphs[i].stringIndex`},textLayout:e,fontEntry:m,fontManager:p}}if(h&&`data`in h&&h.data!==void 0)if(Array.isArray(h.data))g=h.data;else throw Error(`Text channel data must be a string array when no textLayout is provided.`);else if(h&&`value`in h&&h.value!==void 0){let e=h.value;if(typeof e!=`string`)throw Error(`Text channel value must be a string when no textLayout is provided.`);let n=t??1;g=Array.from({length:n},()=>e)}else{let e=t??0;g=Array.from({length:e},()=>``)}let _=Qr(g,{fontManager:p,font:r,fontStyle:a,fontWeight:o,fontSize:s,lineHeight:c,letterSpacing:l});return u.text={value:0,type:`u32`,components:1,scale:{type:`identity`}},{normalized:{channels:u,count:g.length,seriesIndexExpression:`glyphs[i].stringIndex`},textLayout:_,fontEntry:m,fontManager:p}}function Qr(e,{fontManager:t,font:n,fontStyle:r,fontWeight:i,fontSize:a,lineHeight:o,letterSpacing:s}){return Ur({strings:e,fontManager:t,font:{family:typeof n==`string`?n:`Lato`,style:r===`italic`?`italic`:`normal`,weight:typeof i==`number`||typeof i==`string`?i:400},fontSize:typeof a==`number`?a:12,lineHeight:typeof o==`number`?o:1,letterSpacing:typeof s==`number`?s:0})}async function $r(e){if(typeof ImageBitmap<`u`&&e instanceof ImageBitmap)return e;if(typeof e!=`string`)return null;try{return await Hr(e)}catch{}return typeof Image>`u`?null:new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`Could not load font bitmap.`)),r.src=e})}function ei(e,t){let{metrics:n,bitmap:r}=t,i=e._fontResourceCache.get(n),a=i?.get(r);if(a)return a;i||(i=new Map,e._fontResourceCache.set(n,i));let o=`${D} font #${e._nextFontResourceId++}`,s=new Float32Array((n.maxCharId+1)*8);for(let e of n.chars){let t=e.id*8;s[t]=e.x,s[t+1]=e.y,s[t+2]=e.width,s[t+3]=e.height,s[t+4]=e.yoffset}let c=e.device.createBuffer({label:O(o,`glyph metrics`),size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),l,u;try{e.device.queue.writeBuffer(c,0,s),l=e.device.createSampler({label:O(o,`atlas sampler`),magFilter:`linear`,minFilter:`linear`}),u=e.device.createTexture({label:O(o,`atlas`),size:{width:n.common.scaleW,height:n.common.scaleH,depthOrArrayLayers:1},format:`rgba8unorm`,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});let t=new Uint8Array(n.common.scaleW*n.common.scaleH*4);t.fill(255),be(e.device,u,{format:`rgba8unorm`,width:n.common.scaleW,height:n.common.scaleH,data:t})}catch(e){throw u?.destroy(),c.destroy(),e}let d=!1,f={glyphMetrics:c,atlas:{texture:u,sampler:l,width:n.common.scaleW,height:n.common.scaleH,format:`rgba8unorm`},upload(t){if(!(d||!e._isAlive())){if(t.width!==n.common.scaleW||t.height!==n.common.scaleH){console.warn(`Ignoring ${t.width}x${t.height} font bitmap; expected ${n.common.scaleW}x${n.common.scaleH}.`);return}e.device.queue.copyExternalImageToTexture({source:t},{texture:u},{width:t.width,height:t.height}),e._invalidate()}},destroy(){d||(d=!0,c.destroy(),u.destroy())}};return i.set(r,f),$r(r).then(e=>e&&f.upload(e)).catch(()=>{}),f}var ti=class extends F{get propertySlotDefinitions(){return{viewport:{uniform:`uViewport`,getDefault:()=>[0,0,this.renderer._globals.width,this.renderer._globals.height]},viewportEdgeFadeWidth:{uniform:`uViewportEdgeFadeWidth`,default:[0,0,0,0]},viewportEdgeFadeDistance:{uniform:`uViewportEdgeFadeDistance`,default:[-1/0,-1/0,-1/0,-1/0]},paddingX:{uniform:`uPaddingX`,default:0},paddingY:{uniform:`uPaddingY`,default:0},flushX:{uniform:`uFlushX`,default:!0,encode:e=>+!!e},flushY:{uniform:`uFlushY`,default:!0,encode:e=>+!!e},squeeze:{uniform:`uSqueeze`,default:!0,encode:e=>+!!e},logoLetters:{default:!1,set:e=>{this._setUniformValue(`uLogoLetters`,+!!e),this._setUniformValue(`uSdfNumerator`,this._sdfNumeratorBase*(e?.5:1))}}}}_initializeExtraUniforms(){cr(this,this.propertySlotDefinitions)}constructor(e,t,n){let{normalized:r,textLayout:i,fontEntry:a,fontManager:o}=Zr(t);super(e,{...t,...r,textLayout:i,fontEntry:a},n);let s;try{s=this._seriesBuffers.inferCount()}catch(e){throw this.destroy(),e}if(s!==null&&s!==r.count)throw this.destroy(),Error(`Text series data count (${s}) does not match text count (${r.count}).`);this._glyphOffsets=ni(i),this._fontManager=o,delete this._markConfig.textLayout,delete this._markConfig.fontEntry}get drawCount(){return this._glyphOffsets.length-1}resolveDrawRange(e,t){let n=this._glyphOffsets[e];return{firstInstance:n,instanceCount:this._glyphOffsets[e+t]-n}}get channelOrder(){return Kr}get optionalChannels(){return Yr}get defaultChannelConfigs(){return Jr}get defaultValues(){return qr}get channelSpecs(){return Gr}get shaderBody(){return Xr}getExtraUniformLayout(){return[{name:`uFontBase`,type:`f32`,components:1},{name:`uLayoutFontSize`,type:`f32`,components:1},{name:`uAtlasScale`,type:`f32`,components:2},{name:`uCapHeight`,type:`f32`,components:1},{name:`uDescent`,type:`f32`,components:1},{name:`uSdfPadding`,type:`f32`,components:1},{name:`uSdfNumerator`,type:`f32`,components:1},{name:`uPaddingX`,type:`f32`,components:1},{name:`uPaddingY`,type:`f32`,components:1},{name:`uFlushX`,type:`u32`,components:1},{name:`uFlushY`,type:`u32`,components:1},{name:`uSqueeze`,type:`u32`,components:1},{name:`uLogoLetters`,type:`u32`,components:1},{name:`uViewport`,type:`f32`,components:4},{name:`uViewportEdgeFadeWidth`,type:`f32`,components:4},{name:`uViewportEdgeFadeDistance`,type:`f32`,components:4}]}getExtraResourceDefs(){return[{name:`glyphs`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphs`,wgslType:`array<GlyphInstance>`},{name:`stringMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`stringMetrics`,wgslType:`array<StringMetrics>`},{name:`glyphMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphMetrics`,wgslType:`array<GlyphMetrics>`},{name:`fontAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`float`,dimension:`2d`,visibility:`fragment`,wgslName:`fontAtlas`},{name:`fontAtlas`,role:`extraSampler`,kind:`sampler`,samplerType:`filtering`,visibility:`fragment`,wgslName:`fontSampler`}]}_initializeExtraResources(){let e=this._markConfig.textLayout,t=this._markConfig.fontEntry,n=t.metrics,r=n.common.scaleW,i=n.common.scaleH;this._setUniformValue(`uFontBase`,n.common.base),this._setUniformValue(`uLayoutFontSize`,e.fontSize),this._setUniformValue(`uAtlasScale`,[1/r,1/i]),this._setUniformValue(`uCapHeight`,n.capHeight),this._setUniformValue(`uDescent`,n.descent),this._setUniformValue(`uSdfPadding`,5),this._sdfNumeratorBase=n.common.base*.35,this._updateTextLayoutBuffers(e);let a=ei(this.renderer,t);this._extraBuffers.set(`glyphMetrics`,a.glyphMetrics),this._extraTextures.set(`fontAtlas`,a.atlas),this._borrowedExtraBuffers.add(`glyphMetrics`),this._borrowedExtraTextures.add(`fontAtlas`)}_updateTextLayoutBuffers(e){let t=e.glyphIds.length,n=new ArrayBuffer(t*16),r=new Uint32Array(n),i=new Float32Array(n);for(let n=0;n<t;n++){let t=n*4;r[t]=e.stringIndex[n],r[t+1]=e.glyphIds[n],i[t+2]=e.xOffset[n],i[t+3]=e.yOffset?e.yOffset[n]:0}let a=this._writeExtraBuffer(`glyphs`,n),o=e.textWidth.length,s=new Float32Array(o*2);for(let t=0;t<o;t++){let n=t*2;s[n]=e.textWidth[t],s[n+1]=e.textHeight[t]}return a=this._writeExtraBuffer(`stringMetrics`,s)||a,a}_writeExtraBuffer(e,t){let n=t.byteLength,r=Math.max(4,n),i=this._extraBuffers.get(e),a=!i||i.size<r;return a&&(i?.destroy(),i=this.device.createBuffer({label:O(this.label,e),size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._extraBuffers.set(e,i)),n>0&&this.device.queue.writeBuffer(i,0,ArrayBuffer.isView(t)?E(t):t),a}replaceSeries(e,t){let n=e.text,r;if(typeof n==`string`){if(t===void 0)throw Error(`Replacing a scalar text series requires an explicit count.`);r=Array.from({length:t},()=>n)}else if(Array.isArray(n)){if(r=n,t!==void 0&&t!==r.length)throw Error(`Text series count (${r.length}) does not match count (${t}).`)}else throw Error(`Text series replacement requires a string or string[] "text" channel.`);let i=Qr(r,{fontManager:this._fontManager,font:this._markConfig.font,fontStyle:this._markConfig.fontStyle,fontWeight:this._markConfig.fontWeight,fontSize:this._markConfig.fontSize,lineHeight:this._markConfig.lineHeight,letterSpacing:this._markConfig.letterSpacing}),a={};for(let[t,n]of this._logicalSeriesTargets){if(n.length>1)throw Error(`Series replacement for channel "${t}" is not supported because it has multiple series-backed branches.`);let r=e[t];if(r===void 0)throw Error(`Series replacement is missing channel "${t}".`);a[n[0]]=r}let o=this._seriesBuffers.inferCount(a);if(o!==null&&o!==r.length)throw Error(`Text series data count (${o}) does not match text count (${r.length}).`);this._glyphOffsets=ni(i);let s=this._updateTextLayoutBuffers(i);this.updateSeries(a,r.length,s)}};function ni(e){let t=new Uint32Array(e.textWidth.length+1);for(let n of e.stringIndex)t[n+1]++;for(let e=1;e<t.length;e++)t[e]+=t[e-1];return t}var ri=Object.freeze({type:`text`,createProgram(e,t,n){return new ti(e,t,n)}});function ii(e,t,n){if(!n)return null;let r=Array.from(n,t=>{if(!Number.isFinite(t)||!Number.isInteger(t))throw Error(`Ordinal domain on "${e}" requires integer u32 values.`);if(t<0||t>4294967295)throw Error(`Ordinal domain on "${e}" must fit in u32 values.`);if(t===4294967295)throw Error(`Ordinal domain on "${e}" must not contain 0xffffffff.`);return t>>>0}),i=new Set;for(let t of r){if(i.has(t))throw Error(`Ordinal domain on "${e}" must not contain duplicates.`);i.add(t)}return r}var ai={type:`band`,input:`u32`,output:`f32`,params:[{prefix:Pe,defaultValue:0,prop:`paddingInner`},{prefix:Fe,defaultValue:0,prop:`paddingOuter`},{prefix:Ie,defaultValue:.5,prop:`align`},{prefix:Le,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,wgsl:`
// TODO: domainExtent should be uint
fn scaleBand(value: u32, domainExtent: vec2<f32>, range: vec2<f32>,
        paddingInner: f32, paddingOuter: f32,
        align: f32, band: f32) -> f32 {

    let reverse = range.y < range.x;
    var start = select(range.x, range.y, reverse);
    let stop = select(range.y, range.x, reverse);
    let rangeSpan = stop - start;

    let n = domainExtent.y - domainExtent.x;

    // This fix departs from Vega and d3: https://github.com/vega/vega/issues/3357#issuecomment-1063253596
    let paddingInnerAdjusted = select(paddingInner, 0.0, i32(n) <= 1);

    // Adapted from: https://github.com/d3/d3-scale/blob/master/src/band.js
    let step = rangeSpan / max(1.0, n - paddingInnerAdjusted + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInnerAdjusted)) * align;
    let bandwidth = step * (1.0 - paddingInnerAdjusted);

    var offset = f32(value) - domainExtent.x;
    if (reverse) {
        offset = (n - 1.0) - offset;
    }
    return start + offset * step + bandwidth * band;
}
`,resources:{stopKind:`continuous`,needsDomainMap:!0,needsOrdinalRange:!1},normalizeDomainMap:li,normalizeStops:ci,validate:si,emit:oi};Object.freeze(ai);function oi({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,domainMapName:i}){let a=it(n,r),o=De+e;return i?`${nt(e,`f32`,t)} {
    let raw = ${a};
    let mapCount = u32(params.${o});
    if (mapCount == 0u) {
        return scaleBand(
            raw,
            ${j(e)},
            ${M(e)},
            params.${Pe}${e},
            params.${Fe}${e},
            params.${Ie}${e},
            params.${Le}${e}
        );
    }
    let mapped = ${en(i)}(raw, arrayLength(&${i}));
    if (mapped == HASH_NOT_FOUND) { return ${M(e)}.x; }
    return scaleBand(
        mapped,
        ${j(e)},
        ${M(e)},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e},
        params.${Le}${e}
    );
}`:`${nt(e,`f32`,t)} {
    let v = ${a};
    return scaleBand(
        v,
        ${j(e)},
        ${M(e)},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e},
        params.${Le}${e}
    );
}`}function si({name:e,channel:t,inputComponents:n,needsDomainMap:r}){if(r){if(n!==1)return`Band scale on "${e}" requires scalar inputs when using an ordinal domain.`;if(T(t)&&typeof t.value==`number`&&!Number.isInteger(t.value))return`Band scale on "${e}" requires integer values when using an ordinal domain.`}return null}function ci({name:e,scale:t,getDefaultScaleRange:n}){let r=ii(e,`band`,Array.isArray(t.domain)||ArrayBuffer.isView(t.domain)?t.domain:void 0);if(!r)return;let i=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof i[0]!=`number`||typeof i[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let a=i;return{domain:[0,r.length],range:[a[0]??0,a[1]??1],domainLength:2,rangeLength:2}}function li({name:e,domain:t}){let n=ii(e,`band`,t);return n?{domainMap:n,domainUniform:[0,n.length]}:null}var ui=ai;function di(e={}){return I(ui,e)}var fi=ot;function pi(e={}){return I(fi,e)}var mi={type:`index`,input:`u32`,output:`f32`,params:[{prefix:Pe,defaultValue:0,prop:`paddingInner`},{prefix:Fe,defaultValue:0,prop:`paddingOuter`},{prefix:Ie,defaultValue:.5,prop:`align`},{prefix:Le,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,allowsPackedScalarInput:!0,wgsl:`
const lowBits: i32 = 12;
const lowDivisor: f32 = pow(2.0, f32(lowBits));
const lowMask: u32 = u32(lowDivisor - 1.0);

fn splitUint(value: u32) -> vec2<f32> {
    let valueLo = value & lowMask;
    let valueHi = value - valueLo;
    return vec2<f32>(f32(valueHi), f32(valueLo));
}

/**
 * High precision variant of scaleBand for the index scale
 */
fn scaleBandHp(value: u32, domainExtent: vec3<f32>, range: vec2<f32>,
        paddingInner: f32, paddingOuter: f32,
        align: f32, band: f32) -> f32 {

    let reverse = range.y < range.x;
    var start = select(range.x, range.y, reverse);
    let stop = select(range.y, range.x, reverse);
    let rangeSpan = stop - start;

    let domainStart = domainExtent.xy;
    let n = domainExtent.z;

    // The following computation is identical for every vertex. Could be done on the JS side.
    let step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    let bandwidth = step * (1.0 - paddingInner);

    // Split into to values with each having a reduced number of significant digits
    // to mitigate the lack of precision in float32 calculations.
    let splitValue = splitUint(value);

    // Using max to prevent the shader compiler from wrecking the precision.
    // Otherwise the compiler could optimize the sum of the four terms into
    // some equivalent form that does premature rounding.
    let hi = stableSub(splitValue.x, domainStart.x);
    let lo = stableSub(splitValue.y, domainStart.y);

    if (reverse) {
        let reverseStart = start + (n - 1.0) * step;
        return dot(
            vec4<f32>(reverseStart, -hi, -lo, bandwidth),
            vec4<f32>(1.0, step, step, band)
        );
    } else {
        return dot(
            vec4<f32>(start, hi, lo, bandwidth),
            vec4<f32>(1.0, step, step, band)
        );
    }
}

/**
 * High precision variant of scaleBand for the index scale where 32bit uints
 * are insufficient to address large indices.
 */
fn scaleBandHpU(value: vec2<u32>, domainExtent: vec3<f32>, range: vec2<f32>,
                paddingInner: f32, paddingOuter: f32,
                align: f32, band: f32) -> f32 {

    let reverse = range.y < range.x;
    var start = select(range.x, range.y, reverse);
    let stop = select(range.y, range.x, reverse);
    let rangeSpan = stop - start;

    let domainStart = domainExtent.xy;
    let n = domainExtent.z;

    // The following computation is identical for every vertex. Could be done on the JS side.
    let step = rangeSpan / max(1.0, n - paddingInner + paddingOuter * 2.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    let bandwidth = step * (1.0 - paddingInner);

    // Split into to values with each having a reduced number of significant digits
    // to mitigate the lack of precision in float32 calculations.
    let splitValue = vec2<f32>(f32(value.x) * lowDivisor, f32(value.y));

    // Using max to prevent the shader compiler from wrecking the precision.
    // Otherwise the compiler could optimize the sum of the four terms into
    // some equivalent form that does premature rounding.
    let hi = stableSub(splitValue.x, domainStart.x);
    let lo = stableSub(splitValue.y, domainStart.y);

    if (reverse) {
        let reverseStart = start + (n - 1.0) * step;
        return dot(
            vec4<f32>(reverseStart, -hi, -lo, bandwidth),
            vec4<f32>(1.0, step, step, band)
        );
    } else {
        return dot(
            vec4<f32>(start, hi, lo, bandwidth),
            vec4<f32>(1.0, step, step, band)
        );
    }
}
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:()=>({domainLength:3,rangeLength:2}),normalizeStops:gi,normalizeDomain:_i,emit:hi};Object.freeze(mi);function hi({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,inputComponents:i}){let a=i===2?n:it(n,r),o=i===2?`scaleBandHpU`:`scaleBandHp`;return`${nt(e,`f32`,t)} {
    let v = ${a};
    return ${o}(
        v,
        ${rt(e)},
        ${M(e)},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e},
        params.${Le}${e}
    );
}`}function gi({name:e,scale:t,getDefaultScaleRange:n}){let r=Array.isArray(t.domain)||ArrayBuffer.isView(t.domain)?t.domain:[0,1],i=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof i[0]!=`number`||typeof i[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let a=i;if(r.length===3)return{domain:[r[0],r[1],r[2]],range:[a[0]??0,a[1]??1],domainLength:3,rangeLength:2};if(r.length!==2)throw Error(`Scale domain for "${e}" must have 2 or 3 entries for "${t.type}" scales.`);return{domain:de(r[0],r[1]),range:[a[0]??0,a[1]??1],domainLength:3,rangeLength:2}}function _i({name:e,scale:t,domain:n}){if(!Array.isArray(n)&&!ArrayBuffer.isView(n))throw Error(`Scale on "${e}" expects a domain array.`);let r=n;if(r.length===3)return[r[0],r[1],r[2]];if(r.length===2)return de(r[0],r[1]);throw Error(`Scale domain for "${e}" must have 2 or 3 entries for "${t.type}" scales.`)}var vi=mi;function yi(e={}){return I(vi,e)}var bi={type:`log`,input:`numeric`,output:`f32`,params:[{prefix:je,defaultValue:10,prop:`base`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[An],wgsl:`
fn logTransform(value: f32, base: f32) -> f32 {
    return sign(value) * log(abs(value)) / log(base);
}

fn scaleLog(value: f32, domain: vec2<f32>, range: vec2<f32>, base: f32) -> f32 {
    // y = m log(x) + b
    // TODO: Perf optimization: precalculate log domain in js.
    return scaleLinear(
        logTransform(value, base),
        vec2<f32>(
            logTransform(domain.x, base),
            logTransform(domain.y, base)
        ),
        range
    );
}
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:xi};Object.freeze(bi);function xi(e){return at(e,({name:e,valueExpr:t})=>`scaleLog(${t}, ${j(e)}, ${M(e)}, params.${je}${e})`)}var Si=bi;function Ci(e={}){return I(Si,e)}var wi={type:`ordinal`,input:`u32`,output:`f32`,params:[],continuous:!1,vectorOutput:`always`,allowsU32InputOverride:!0,resources:{stopKind:null,needsDomainMap:!0,needsOrdinalRange:!0},normalizeDomainMap:Di,validate:Ei,emit:Ti};Object.freeze(wi);function Ti({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainMapName:o}){let s=i===1?a:`vec${i}<f32>`,c=`range_${e}`,l=i===1?a===`u32`?`0u`:a===`i32`?`0`:`0.0`:`vec4<f32>(0.0)`,u=it(n,r),d=De+e;return o?`${nt(e,s,t)} {
    let raw = ${u};
    let mapCount = u32(params.${d});
    if (mapCount == 0u) {
        let count = u32(params.${Te}${e});
        if (count == 0u) { return ${l}; }
        let slot = raw % count;
        return ${c}[slot];
    }
    let idx = ${en(o)}(raw, arrayLength(&${o}));
    if (idx == HASH_NOT_FOUND) { return ${l}; }
    let count = u32(params.${Te}${e});
    if (count == 0u) { return ${l}; }
    let slot = idx % count;
    return ${c}[slot];
}`:`${nt(e,s,t)} {
    let idx = ${u};
    let count = u32(params.${Te}${e});
    if (count == 0u) { return ${l}; }
    let slot = idx % count;
    return ${c}[slot];
}`}function Ei({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but ordinal scales only support scalars or vec4 outputs.`;let i=t.scale?.range;if(!Array.isArray(i)||i.length===0)return`Ordinal scale on "${e}" requires a non-empty range.`;if(r!==1)return`Ordinal scale on "${e}" requires scalar input values.`;if(T(t)){if(Array.isArray(t.value))return`Ordinal scale on "${e}" requires scalar integer values.`;if(typeof t.value==`number`&&!Number.isInteger(t.value))return`Ordinal scale on "${e}" requires integer values.`}return null}function Di({name:e,domain:t}){let n=ii(e,`ordinal`,t);return n?{domainMap:n}:null}var Oi=wi;function ki(e={}){return I(Oi,e)}var Ai={type:`pow`,input:`numeric`,output:`f32`,params:[{prefix:Me,defaultValue:1,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[An],wgsl:`
fn scalePow(value: f32, domain: vec2<f32>, range: vec2<f32>, exponent: f32) -> f32 {
    // y = mx^k + b
    // TODO: Perf optimization: precalculate pow domain in js.
    // TODO: Reversed domain, etc
    return scaleLinear(
        pow(abs(value), exponent) * sign(value),
        pow(abs(domain), vec2<f32>(exponent)) * sign(domain),
        range
    );
}
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:ji};Object.freeze(Ai);function ji(e){return at(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${j(e)}, ${M(e)}, params.${Me}${e})`)}var Mi=Ai;function Ni(e={}){return I(Mi,e)}var Pi={type:`quantize`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:Li,normalizeStops:Ri,validate:Ii,emit:Fi};Object.freeze(Pi);function Fi({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,rangeLength:o}){if(o<1)throw Error(`Quantize scale on "${e}" must define at least one range entry.`);let s=i===1?a:`vec${i}<f32>`,c=[];return r!==`f32`&&c.push(Ye(r)),c.push(tt({name:e,rangeLength:o,outputComponents:i,outputScalarType:a})),Je({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:s})}function Ii({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but quantize scales only support scalars or vec4 outputs.`;if(r!==1)return`Quantize scale on "${e}" requires scalar input values.`;let i=t.scale?.domain;if(Array.isArray(i)&&i.length!==2)return`Quantize scale on "${e}" requires a domain with exactly two entries.`;let a=t.scale?.range;return a!==void 0&&!Array.isArray(a)?`Quantize scale on "${e}" requires an explicit array range.`:Array.isArray(a)&&a.length<1?`Quantize scale on "${e}" requires at least one range entry.`:null}function Li({scale:e}){let t=Array.isArray(e.range)?e.range:[0,1];if(t.length<1)throw Error(`Quantize scale on "${e.type}" requires at least one range entry.`);return{domainLength:2,rangeLength:t.length}}function Ri({name:e,scale:t,channel:n,getDefaultScaleRange:r}){let i=Array.isArray(t.domain)?t.domain:[0,1];if(i.length!==2)throw Error(`Quantize scale on "${e}" requires a domain with exactly two entries.`);if(At(t.range))throw Error(`Quantize scale on "${e}" does not support interpolator ranges.`);let a=n.components??1,o=Array.isArray(t.range)?t.range:r(e)??[0,1];if(!Array.isArray(o)||o.length<1)throw Error(`Quantize scale on "${e}" requires at least one range entry.`);let s=o.map(t=>Et(e,t,a,`Quantize`));return{domain:[i[0]??0,i[1]??1],range:s,domainLength:2,rangeLength:s.length}}var zi=Pi;function Bi(e={}){return I(zi,e)}var Vi={type:`sqrt`,input:`numeric`,output:`f32`,params:[{prefix:Me,defaultValue:.5,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Ai],resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:Hi};Object.freeze(Vi);function Hi(e){return at(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${j(e)}, ${M(e)}, params.${Me}${e})`)}var Ui=Vi;function Wi(e={}){return I(Ui,e)}var Gi={type:`symlog`,input:`numeric`,output:`f32`,params:[{prefix:Ne,defaultValue:1,prop:`constant`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[An],wgsl:`
fn log1pPositive(value: f32) -> f32 {
    // Avoid cancellation in log(1 + x) near zero. The first three Taylor terms
    // are more accurate than the rounded sum in this range.
    if (value < 0.01) {
        return value * (1.0 + value * (-0.5 + value / 3.0));
    }
    return log(value + 1.0);
}

fn symlog(value: f32, constant: f32) -> f32 {
    return sign(value) * log1pPositive(abs(value / constant));
}

fn scaleSymlog(value: f32, domain: vec2<f32>, range: vec2<f32>, constant: f32) -> f32 {
    return scaleLinear(
        symlog(value, constant),
        vec2<f32>(symlog(domain.x, constant), symlog(domain.y, constant)),
        range
    );
}
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:Ki};Object.freeze(Gi);function Ki(e){return at(e,({name:e,valueExpr:t})=>`scaleSymlog(${t}, ${j(e)}, ${M(e)}, params.${Ne}${e})`)}var qi=Gi;function Ji(e={}){return I(qi,e)}var Yi={type:`threshold`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,allowsF32InputOverride:!0,resources:{stopKind:`threshold`,needsDomainMap:!1,needsOrdinalRange:!1},validate:Zi,emit:Xi};Object.freeze(Yi);function Xi({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainLength:o,rangeLength:s}){if(o<1||s!==o+1)throw Error(`Threshold scale on "${e}" requires domain length N and range length N+1.`);let c=i===1?a:`vec${i}<f32>`,l=[];return r!==`f32`&&l.push(Ye(r)),l.push(et({name:e,domainLength:o,outputComponents:i,outputScalarType:a})),Je({name:e,functionName:t,rawValueExpr:n,steps:l,returnType:c})}function Zi({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but threshold scales only support scalars or vec4 outputs.`;let i=t.scale?.domain,a=t.scale?.range;return!Array.isArray(i)||i.length===0?`Threshold scale on "${e}" requires a non-empty domain.`:!Array.isArray(a)||a.length<2?`Threshold scale on "${e}" requires at least two range entries.`:a.length===i.length+1?r===1?null:`Threshold scale on "${e}" requires scalar input values.`:`Threshold scale on "${e}" requires range length of ${i.length+1}, got ${a.length}.`}var Qi=Yi;function $i(e={}){return I(Qi,e)}var ea=new Map([`circle`,`square`,`cross`,`diamond`,`triangle-up`,`triangle-right`,`triangle-down`,`triangle-left`,`tick-up`,`tick-right`,`tick-down`,`tick-left`,`x`,`+`].map((e,t)=>[e,t])),ta=new Map([[`left`,0],[`center`,1],[`right`,2]]),na=new Map([[`alphabetic`,0],[`baseline`,0],[`middle`,1],[`top`,2],[`bottom`,3]]),ra=new Map([[`butt`,0],[`square`,1],[`round`,2]]),ia=new Map([[`forward`,0],[`reverse`,1]]),aa=new Map([`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`].map((e,t)=>[e,t])),oa=[`viewportEdgeFadeWidthTop`,`viewportEdgeFadeWidthRight`,`viewportEdgeFadeWidthBottom`,`viewportEdgeFadeWidthLeft`],sa=[`viewportEdgeFadeDistanceTop`,`viewportEdgeFadeDistanceRight`,`viewportEdgeFadeDistanceBottom`,`viewportEdgeFadeDistanceLeft`],ca=new WeakMap,la=new WeakMap;function ua(e,t,n,r=1,i,a){ma(e);let o=typeof r==`function`?r:()=>r,s=i??y(e,t);if(s.length==0)return;let c=e.encoders.facetIndex?{data:ga(e,s),type:`u32`}:a,l=e.getType();if(l==`point`)return da(Vn,ha(Sa(e,s,n,o),c));if(l==`rect`)return da(Zn,ha(xa(e,s,n,o,typeof r!=`function`),c));if(l==`rule`||l==`tick`)return da(sr,ha(Ta(e,s,n,o),c));if(l==`text`)return da(ri,ha(Ea(e,s,n,o),c));if(l==`link`)return da(br,ha(Da(e,s,n,o),c));if(l==`arrow`)return da(Nr,ha(Oa(e,s,n,o),c));throw X(e,`Mark type "${l}" is not supported.`)}function da(e,t){let n=t.retainedProperties??{};return delete t.retainedProperties,{definition:e,config:t,properties:n}}function fa(e){return ma(e),e.getRenderingRevision(`configuration`)}function pa(e){return ma(e),e.getRenderingRevision(`resources`)}function ma(e){e.initializeRenderingRevisions([])}function ha(e,t){return t?{...e,placementIndex:t}:e}function ga(e,t){let n=e.encoders.facetIndex,r=la.get(e);if(r?.data===t&&r.encoder===n)return r.values;let i=new Uint32Array(t.length);for(let r=0;r<t.length;r++){let a=Number(n(t[r]));if(!Number.isInteger(a)||a<0||a>4294967295)throw X(e,`Facet indices must be non-negative integers.`);i[r]=a}return la.set(e,{data:t,encoder:n,values:i}),i}function _a(e,t,n,r){let i=no(e,t),a=i.branches,o=a.at(-1);if(!o)throw X(e,`Channel "${t}" has no fallback branch.`);let s=r(va(e,i,o),o);return a.length==1||(s.conditions=a.slice(0,-1).map(n=>{let a=r(va(e,i,n),n);return{when:ya(e,t,n.predicate),channel:a}})),s}function va(e,t,n){let r=n.accessor,i=r.scaleChannel?e.unitView.getScaleResolution(r.scaleChannel)?.getScale():t.scale;if(r.scaleChannel&&!i)throw X(e,`Missing scale for conditional channel "${r.channel}".`);return Object.assign(e=>r(e),{constant:r.constant??t.constant,branches:[n],scale:i,channelDef:r.channelDef??t.channelDef})}function ya(e,t,n){if(!n.param)throw X(e,`Conditional channel "${t}" has no selection parameter.`);let r=e.unitView.paramRuntime.findValue(n.param);if(!r||![`single`,`multi`,`interval`].includes(r.type))throw X(e,`Selection "${n.param}" is not available for WebGPU.`);let i={selection:n.param,type:r.type,empty:n.empty??!0};if(r.type==`interval`){let t=i;return t.targets=Object.keys(r.intervals).map(t=>{if(t!=`x`&&t!=`y`)throw X(e,`Interval selection "${n.param}" has unsupported target "${String(t)}".`);ba(e,n.param,t);let r=c(t),i={input:t};return e.encoders[r]?(ba(e,n.param,r),{...i,secondaryInput:r,hitTest:e.defaultHitTestMode}):i}),t}return i}function ba(e,t,n){let r=e.encoders[n]?.scale;if(r&&(r.type==`index`||r.type==`locus`)&&d(r.domain().map(Number)))throw X(e,`Interval selection "${t}" cannot target two-component channel "${n}".`)}function xa(e,t,n,r,i){return e.initializeRenderingRevisions([`cornerRadius`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`minWidth`,`minHeight`,`minOpacity`,`shadowOffsetX`,`shadowOffsetY`,`shadowBlur`,`shadowOpacity`,`shadowColor`,`hatch`]),{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n),x2:R(e,`x2`,t,n),y:R(e,`y`,t,n),y2:R(e,`y2`,t,n),xOffset:z(e,`xOffset`,t),x2Offset:z(e,`x2Offset`,t),yOffset:z(e,`yOffset`,t),y2Offset:z(e,`y2Offset`,t),fill:V(e,`fill`,t),stroke:V(e,`stroke`,t),fillOpacity:B(e,`fillOpacity`,t,r),strokeOpacity:B(e,`strokeOpacity`,t,r),strokeWidth:z(e,`strokeWidth`,t,!0),cornerRadiusTopRight:Y(e,[`cornerRadius`,`cornerRadiusTopRight`],()=>po(e).topRight),cornerRadiusBottomRight:Y(e,[`cornerRadius`,`cornerRadiusBottomRight`],()=>po(e).bottomRight),cornerRadiusTopLeft:Y(e,[`cornerRadius`,`cornerRadiusTopLeft`],()=>po(e).topLeft),cornerRadiusBottomLeft:Y(e,[`cornerRadius`,`cornerRadiusBottomLeft`],()=>po(e).bottomLeft),minWidth:J(()=>G(e,`minWidth`)),minHeight:J(()=>G(e,`minHeight`)),minOpacity:J(()=>G(e,`minOpacity`)),shadowOffsetX:J(()=>K(e,`shadowOffsetX`,0)),shadowOffsetY:J(()=>K(e,`shadowOffsetY`,0)),shadowBlur:J(()=>K(e,`shadowBlur`,0)),shadowOpacity:Y(e,[`shadowOpacity`],()=>K(e,`shadowOpacity`,0)*r(),void 0,!i),shadowColor:J(()=>yo(e,q(e,`shadowColor`)??`black`)),hatchPattern:Y(e,[`hatch`],()=>mo(e,`hatch`,aa,`none`),`u32`)}}}function Sa(e,t,n,r){e.initializeRenderingRevisions([`fillGradientStrength`,`inwardStroke`,`semanticZoomFraction`]);let i=Ca(e,t);return{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n),y:R(e,`y`,t,n),size:z(e,`size`,t),shape:La(e,`shape`,t,ea),strokeWidth:z(e,`strokeWidth`,t),xOffset:z(e,`xOffset`,t),yOffset:z(e,`yOffset`,t),dx:Wa(e,`x`,t),dy:Wa(e,`y`,t),fill:V(e,`fill`,t),stroke:V(e,`stroke`,t),fillOpacity:B(e,`fillOpacity`,t,r),strokeOpacity:B(e,`strokeOpacity`,t,r),angle:z(e,`angle`,t),gradientStrength:J(()=>G(e,`fillGradientStrength`)),inwardStroke:J(()=>+!!q(e,`inwardStroke`),`u32`)},...i}}function Ca(e,t){let n=e.encoders.semanticScore;if(!n||(ro(e,`semanticScore`,n),n.constant))return{};let r=n.branches[0].accessor,i=U(e,`semanticScore`,t,r),a=wa(e),o={compare:`>=`,left:{input:`semanticScoreInput`},right:{slot:`semanticThreshold`}},s=a.length>0?{any:[...a,o]}:o;return{inputs:{semanticScoreInput:{data:i,type:`f32`}},scalarSlots:{semanticThreshold:ho(()=>e.getSemanticThreshold(),`f32`)},visibleWhen:s}}function wa(e){if(!e.encoders.uniqueId)return[];let t=[],n=new Set;for(let r of Object.values(e.encoders))for(let i of r.branches??[]){let r=i.predicate;if(!r?.param||n.has(r.param))continue;let a=ya(e,`semanticScore`,r);t.push({...a,empty:!1}),n.add(r.param)}return t}function Ta(e,t,n,r){e.initializeRenderingRevisions([`minLength`,`strokeCap`,`strokeDashOffset`]);let i=q(e,`strokeDash`);return{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n),x2:R(e,`x2`,t,n),y:R(e,`y`,t,n),y2:R(e,`y2`,t,n),xOffset:z(e,`xOffset`,t),x2Offset:z(e,`x2Offset`,t),yOffset:z(e,`yOffset`,t),y2Offset:z(e,`y2Offset`,t),size:z(e,`size`,t),color:V(e,`color`,t),opacity:B(e,`opacity`,t,r),minLength:J(()=>G(e,`minLength`)),strokeCap:J(()=>mo(e,`strokeCap`,ra),`u32`),strokeDashOffset:J(()=>G(e,`strokeDashOffset`)),strokeDash:{value:0,type:`u32`}},dashPatterns:i==null?null:[i]}}function Ea(e,t,n,r){let i=Ga(e,`size`,t[0]),a=e.encoders,o=e.font;return{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n,qa),...e.encoders.x2?{x2:R(e,`x2`,t,n,qa)}:{},y:R(e,`y`,t,n,qa),...e.encoders.y2?{y2:R(e,`y2`,t,n,qa)}:{},text:Ua(e,t),size:z(e,`size`,t),angle:z(e,`angle`,t),xOffset:z(e,`xOffset`,t),yOffset:z(e,`yOffset`,t),dx:Wa(e,`x`,t),dy:Wa(e,`y`,t),...a.x2Offset?{x2Offset:z(e,`x2Offset`,t)}:{},...a.y2Offset?{y2Offset:z(e,`y2Offset`,t)}:{},align:{value:mo(e,`align`,ta),type:`u32`},baseline:{value:mo(e,`baseline`,na),type:`u32`},fill:V(e,`color`,t),opacity:B(e,`opacity`,t,r)},font:ka(e),...o?.metrics&&o.bitmapUrl?{fontResource:{metrics:o.metrics,bitmap:o.bitmapUrl}}:{},fontStyle:q(e,`fontStyle`),fontWeight:q(e,`fontWeight`),fontSize:i,viewport:[n.x,n.y,n.x2,n.y2],viewportEdgeFadeWidth:lo(e,oa,[0,0,0,0]),viewportEdgeFadeDistance:lo(e,sa,[-1/0,-1/0,-1/0,-1/0]),paddingX:G(e,`paddingX`),paddingY:G(e,`paddingY`),flushX:!!q(e,`flushX`),flushY:!!q(e,`flushY`),squeeze:!!q(e,`squeeze`),logoLetters:!!q(e,`logoLetters`),retainedProperties:{viewport:go(()=>[n.x,n.y,n.x2,n.y2]),...vo(e,`viewportEdgeFadeWidth`,oa,[0,0,0,0]),...vo(e,`viewportEdgeFadeDistance`,sa,[-1/0,-1/0,-1/0,-1/0]),..._o(e,{paddingX:e=>e,paddingY:e=>e,flushX:e=>!!e,flushY:e=>!!e,squeeze:e=>!!e,logoLetters:e=>!!e})}}}function Da(e,t,n,r){return{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n),x2:R(e,`x2`,t,n),y:R(e,`y`,t,n),y2:R(e,`y2`,t,n),xOffset:z(e,`xOffset`,t),x2Offset:z(e,`x2Offset`,t),yOffset:z(e,`yOffset`,t),y2Offset:z(e,`y2Offset`,t),size:z(e,`size`,t),color:V(e,`color`,t),opacity:B(e,`opacity`,t,r)},linkShape:q(e,`linkShape`)??`arc`,orient:q(e,`orient`)??`vertical`,arcFadingDistance:fo(e,`arcFadingDistance`),noFadingOnPointSelection:!!q(e,`noFadingOnPointSelection`),arcHeightFactor:K(e,`arcHeightFactor`,1),minArcHeight:K(e,`minArcHeight`,1.5),clampApex:!!q(e,`clampApex`),maxChordLength:K(e,`maxChordLength`,5e4),segments:K(e,`segments`,101),retainedProperties:_o(e,{arcFadingDistance:e=>e||[0,0],noFadingOnPointSelection:e=>!!e,arcHeightFactor:e=>e,minArcHeight:e=>e,linkShape:e=>e??`arc`,orient:e=>e??`vertical`,clampApex:e=>!!e,maxChordLength:e=>e,segments:e=>e})}}function Oa(e,t,n,r){let i=K(e,`headAngle`,45),a=K(e,`headNotchAngle`,90);return{count:t.length,channels:{...eo(e,t),x:R(e,`x`,t,n),x2:R(e,`x2`,t,n),y:R(e,`y`,t,n),y2:R(e,`y2`,t,n),xOffset:z(e,`xOffset`,t),x2Offset:z(e,`x2Offset`,t),yOffset:z(e,`yOffset`,t),y2Offset:z(e,`y2Offset`,t),fill:V(e,`fill`,t),stroke:V(e,`stroke`,t),fillOpacity:B(e,`fillOpacity`,t,r),strokeOpacity:B(e,`strokeOpacity`,t,r),strokeWidth:z(e,`strokeWidth`,t),size:z(e,`size`,t),direction:La(e,`direction`,t,ia)},headAngle:i,headNotchAngle:a,minSize:K(e,`minSize`,1),headWidth:K(e,`headWidth`,3),startNotch:!!q(e,`startNotch`),minStemLength:K(e,`minStemLength`,0),headSpacing:uo(e,`headSpacing`),stem:q(e,`stem`)!==!1,headShape:q(e,`headShape`)??`triangle`,headPlacement:q(e,`headPlacement`)??`inside`,retainedProperties:_o(e,{headAngle:e=>e,headNotchAngle:e=>e,minSize:e=>e,headWidth:e=>e,startNotch:e=>!!e,minStemLength:e=>e,headSpacing:e=>e,stem:e=>e!==!1,headShape:e=>e??`triangle`,headPlacement:e=>e??`inside`})}}function ka(e){let t=q(e,`font`);if(t==null||t==`sans-serif`)return`Lato`;if(typeof t==`string`)return t;throw X(e,`Font "${String(t)}" is not supported.`)}function R(e,t,n,r,i=Ka){return _a(e,t,n,a=>Aa(e,t,n,r,a,i))}function Aa(t,n,r,i,a,o){let s=a.branches[0].accessor,c=e(a.channelDef)?void 0:a.scale,l=o(n,i,c),u=a.channelDef.band??.5;if(c?.type==`band`||c?.type==`point`||c?.type==`ordinal`){let{intern:e,readDomain:d}=co(t,n,c),f=a.constant?J(()=>e(s(r[0])),`u32`):{data:W(t,n,r,s,()=>Uint32Array.from(r,t=>e(s(t)))),type:`u32`};return Object.assign(f,{scale:c.type==`ordinal`?Ma(c,o(n,i,void 0),d):ja(c,l,d,u)})}else if(c?.type==`index`||c?.type==`locus`){let e=d(c.domain().map(Number)),i=a.constant?oo(t,n,()=>s(r[0]),e):{data:io(t,n,r,s,e),type:`u32`};return Object.assign(i,{...e?{inputComponents:2}:{},scale:Na(c,l,u)})}let f=a.constant?J(()=>{let e=Number(s(r[0]));if(!Number.isFinite(e))throw X(t,`Channel "${n}" is not finite.`);return e},`f32`):{data:U(t,n,r,s),type:`f32`};return Object.assign(f,{scale:Ja(t,n,c,l)})}function ja(e,t,n,r){let i=e;return H(di({domain:n(),range:t,paddingInner:e.type==`point`?1:i.paddingInner(),paddingOuter:i.paddingOuter(),align:i.align(),band:r}),n)}function Ma(e,t,n){let r=()=>e.range().map(e=>t[0]+Number(e)*(t[1]-t[0]));return H(ki({domain:n(),range:r()}),n,r)}function Na(e,t,n){let r=e;return H(yi({domain:e.domain().map(Number),range:t,paddingInner:r.paddingInner(),paddingOuter:r.paddingOuter(),align:r.align(),band:n}),()=>e.domain().map(Number))}function z(e,t,n,r=!1){return _a(e,t,n,i=>r&&Pa(i)?{value:Number(i(n[0]))}:Fa(e,t,n,i))}function Pa(t){let i=t.channelDef;return t.constant&&!t.scale&&(e(i)&&!n(i.value)||r(i)&&!n(i.datum))}function Fa(e,t,n,r){if(r.constant)return J(()=>Number(r(n[0])));let i=r.branches[0].accessor;if(r.scale?.type==`ordinal`||r.scale?.type==`band`||r.scale?.type==`point`){let{values:a,readDomain:o}=so(e,t,n,i,r.scale);return{data:a,type:`u32`,scale:r.scale.type==`ordinal`?Ya(e,t,r.scale,1,o):ja(r.scale,r.scale.range(),o,r.channelDef.band??.5)}}let a={data:U(e,t,n,i),type:`f32`},o=Ya(e,t,r.scale);return o?{...a,scale:o}:a}function B(e,t,n,r){return _a(e,t,n,i=>Ia(e,t,n,r,i))}function Ia(e,t,n,r,i){if(i.constant)return J(()=>Number(i(n[0]))*r());let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=so(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:Ya(e,t,i.scale,r,s)}}let o=i.scale?.type==`identity`?void 0:Ya(e,t,i.scale,r);return o?{data:U(e,t,n,a),type:`f32`,scale:o}:{data:U(e,t,n,a),type:`f32`,scale:H(L({domain:[0,1],range:[0,r()]}),void 0,()=>[0,r()])}}function La(e,t,n,r){return _a(e,t,n,i=>Ra(e,t,n,r,i))}function Ra(e,t,n,r,i){if(i.constant)return J(()=>Qa(e,t,r,i(n[0])),`u32`);let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=so(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:H(ki({domain:s(),range:i.scale.range().map(n=>Qa(e,t,r,n))}),s,()=>i.scale.range().map(n=>Qa(e,t,r,n)))}}return i.scale?.type==`threshold`?{data:U(e,t,n,a),type:`f32`,scale:H($i({domain:i.scale.domain().map(Number),range:$a(e,t,r,i.scale)}),()=>i.scale.domain().map(Number),()=>$a(e,t,r,i.scale))}:{data:W(e,t,n,a,()=>Uint32Array.from(n,n=>Qa(e,t,r,a(n)))),type:`u32`}}function V(e,t,n){return _a(e,t,n,r=>za(e,t,n,r))}function za(e,t,n,r){if(r.constant)return J(()=>yo(e,r(n[0])));let i=r.branches[0].accessor,a=r.scale;if(!a)return{data:W(e,t,n,i,()=>{let t=new Float32Array(n.length*4);return n.forEach((n,r)=>{t.set(yo(e,i(n)),r*4)}),t}),type:`f32`,inputComponents:4};if(a.type==`ordinal`){let{values:r,readDomain:o}=so(e,t,n,i,a);return{data:r,type:`u32`,inputComponents:1,scale:Ba(e,t,a,o)}}return{data:U(e,t,n,i),type:`f32`,inputComponents:1,scale:Ba(e,t,a)}}function Ba(e,t,n,r){let i=n;if(n.type==`ordinal`)return H(ki({domain:r?.(),range:n.range()}),r,()=>n.range());if(n.type==`sequential-linear`||n.type==`diverging-linear`)return H(L({domain:Ha(n),range:i.interpolator(),clamp:i.clamp()}),()=>Ha(n),()=>i.interpolator());if(n.type==`sequential-log`)return H(Ci({domain:Ha(n),range:i.interpolator(),base:i.base(),clamp:i.clamp()}),()=>Ha(n),()=>i.interpolator());if(n.type==`linear`)return H(L({domain:n.domain().map(Number),range:n.range(),interpolate:i.interpolate(),clamp:i.clamp()}),()=>n.domain().map(Number),()=>n.range());if(n.type==`threshold`)return H($i({domain:n.domain().map(Number),range:Va(e,n.range())}),()=>n.domain().map(Number),()=>Va(e,n.range()));if(n.type==`quantize`)return H(Bi({domain:n.domain().map(Number),range:Va(e,n.range())}),()=>n.domain().map(Number),()=>Va(e,n.range()));throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}function Va(e,t){return t.map(t=>typeof t==`string`?yo(e,t):t)}function Ha(e){let t=e.domain().map(Number);return[t[0],t.at(-1)]}function Ua(e,t){let n=no(e,`text`);ro(e,`text`,n);let r=n.channelDef,i=`format`in r?a(r.format):e=>e,o=e=>{let t=i(n(e));return t==null?``:String(t)};return n.constant?{value:o(t[0])}:{data:W(e,`text`,t,n.branches[0].accessor,()=>t.map(o))}}function Wa(e,t,n){let r=t==`x`?`dx`:`dy`,i=e.encoders[r];if(!i)return J(()=>G(e,r));ro(e,r,i);let a=va(e,i,i.branches[0]),o=e=>Number(a(e));return a.constant?J(()=>o(n[0])):{data:Float32Array.from(n,o),type:`f32`}}function Ga(e,t,n){let r=no(e,t),i=Number(r(n));if(!Number.isFinite(i))throw X(e,`Channel "${t}" is not finite.`);return i}function Ka(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.x2,t.x]:[t.x,t.x2]:r?[t.y,t.y2]:[t.y2,t.y]}function qa(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.width,0]:[0,t.width]:r?[0,t.height]:[t.height,0]}function Ja(e,t,n,r){return!n||n.type==`null`?L({domain:[0,1],range:r}):Xa(e,t,n,r)}function Ya(e,t,n,r=1,i){if(!n||n.type==`null`)return;if(n.type==`identity`)return pi();let a=typeof r==`function`?r:()=>r;return Xa(e,t,n,()=>n.range().map(e=>Number(e)*a()),i)}function Xa(e,t,n,r,i){let a=n,o=typeof i==`function`?i:i?()=>i:()=>n.domain().map(Number),s=typeof r==`function`?r:()=>r,c={domain:o(),range:s(),clamp:Za(a,`clamp`,!1)};Za(a,`round`,!1)&&(c.round=!0);let l;switch(n.type){case`linear`:case`sequential-linear`:case`diverging-linear`:l=L(c);break;case`log`:l=Ci({...c,base:Za(a,`base`,10)});break;case`pow`:l=Ni({...c,exponent:Za(a,`exponent`,1)});break;case`sqrt`:l=Wi(c);break;case`symlog`:l=Ji({...c,constant:Za(a,`constant`,1)});break;case`quantize`:l=Bi(c);break;case`threshold`:l=$i(c);break;case`ordinal`:l=ki(c);break;default:throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}return H(l,o,s)}function H(e,t,n){return Object.defineProperties(e,{...t?{domain:{enumerable:!0,get:t}}:{},...n?{range:{enumerable:!0,get:n}}:{}}),e}function Za(e,t,n){let r=e[t];return typeof r==`function`?r():r??n}function Qa(e,t,n,r){let i=n.get(String(r));if(i===void 0)throw X(e,`Unsupported ${t}: ${String(r)}`);return i}function $a(e,t,n,r){let i=r.domain(),a=r.range().map(r=>Qa(e,t,n,r));for(;a.length<i.length+1;)a.push(a.at(-1));return a}function eo(e,t){let n=e.encoders.uniqueId;if(!n)return{};if(ro(e,`uniqueId`,n),n.constant)return{uniqueId:J(()=>to(e,`uniqueId`,n(t[0])),`u32`)};let r=n.branches[0].accessor;return{uniqueId:{data:W(e,`uniqueId`,t,r,()=>Uint32Array.from(t,t=>to(e,`uniqueId`,r(t)))),type:`u32`}}}function to(e,t,n){let r=Number(n);if(!Number.isSafeInteger(r)||r<0||r>4294967295)throw X(e,`Channel "${t}" must contain u32 integers.`);return r}function no(e,t){let n=e.encoders[t];if(!n)throw X(e,`Missing encoder for channel "${t}".`);return n}function ro(e,t,n){if(n.branches.length!=1)throw X(e,`Conditional channel "${t}" is not supported.`)}function U(e,t,n,r){return W(e,t,n,r,()=>Float32Array.from(n,n=>{let i=Number(r(n));if(!Number.isFinite(i)&&!Number.isNaN(i))throw X(e,`Channel "${t}" contains an infinite value.`);return i}))}function io(e,t,n,r,i){return W(e,`${t}:${i?`large`:`regular`}`,n,r,()=>{let a=Array.from(n,n=>ao(e,t,r(n)));return i?le(a):Uint32Array.from(a)})}function ao(e,t,n){let r=Math.floor(Number(n));if(!Number.isSafeInteger(r)||r<0)throw X(e,`Channel "${t}" must contain finite non-negative values within the safe integer range.`);return r}function oo(e,t,n,r){if(!r)return J(()=>ao(e,t,n()),`u32`);let i=[0],a=new Uint32Array(2),o=[0,0];return J(()=>(i[0]=ao(e,t,n()),ue(i,a),o[0]=a[0],o[1]=a[1],o),`u32`)}function so(e,t,n,r,i){let{intern:a,readDomain:o}=co(e,t,i);return{values:W(e,t,n,r,()=>Uint32Array.from(n,e=>a(r(e)))),readDomain:o}}function co(e,t,n){let r=n.props?.domainIndexer,i=n=>to(e,t,r?r(n):n);return{intern:i,readDomain:()=>n.domain().map(i)}}function W(e,t,n,r,i){if(!(`field`in r.channelDef))return i();let a=ca.get(e);(!a||a.data!==n)&&(a={data:n,channels:new Map},ca.set(e,a));let o=a.channels.get(t);if(o?.accessor===r)return o.series;let s=i();return a.channels.set(t,{accessor:r,series:s}),s}function G(e,t){let n=q(e,t);if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function lo(e,t,n){return t.map((t,r)=>K(e,t,n[r]))}function K(e,t,n){let r=q(e,t)??n;if(typeof r!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return r}function uo(e,t){let n=q(e,t);if(n==null)return null;if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function fo(e,t){let n=q(e,t);if(n==null||n===!1)return[0,0];if(!Array.isArray(n)||n.length!=2||!n.every(e=>typeof e==`number`))throw X(e,`Property "${t}" must be a pair.`);return n}function po(e){let t=G(e,`cornerRadius`);return{topRight:K(e,`cornerRadiusTopRight`,t),bottomRight:K(e,`cornerRadiusBottomRight`,t),topLeft:K(e,`cornerRadiusTopLeft`,t),bottomLeft:K(e,`cornerRadiusBottomLeft`,t)}}function mo(e,t,n,r){let i=String(q(e,t)??r),a=n.get(i);if(a===void 0)throw X(e,`Unsupported ${t}: ${i}`);return a}function q(e,t){let n=e.properties[t];return b(e,n)}function J(e,t){return Object.assign(ho(e,t),{dynamic:!0})}function Y(e,t,r,i,a=!1){let o=e.properties;return a||t.some(e=>n(o[e]))?J(r,i):{value:r(),...i?{type:i}:{}}}function ho(e,t){return{get value(){return e()},...t?{type:t}:{}}}function go(e){return{get value(){return e()}}}function _o(e,t){e.initializeRenderingRevisions(Object.keys(t));let r={};for(let[i,a]of Object.entries(t)){let t=e.properties[i];n(t)&&(r[i]=go(()=>a(q(e,i))))}return r}function vo(e,t,r,i){let a=e.properties,o=r.filter(e=>n(a[e]));return e.initializeRenderingRevisions(o),o.length==0?{}:{[t]:go(()=>lo(e,r,i))}}function yo(e,t){if(t==null)return[0,0,0,0];let n=i(String(t));if(!n)throw X(e,`Invalid color: ${String(t)}`);let r=n.rgb();return[r.r/255,r.g/255,r.b/255,r.opacity]}function X(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var bo=new WeakMap;function xo(e,t){let n=e.unitView.getCollector();if(!n)throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);let r=t?.getSnapshot().topology,i=e.encoders?.x,a=e.encoders?.x2,o=i?e.unitView.getScaleResolution(`x`):void 0,s=o?.zoomExtent,c=bo.get(e);if(c?.collector===n&&c.revision===n.dataRevision&&c.topology===r&&c.xEncoder===i&&c.x2Encoder===a&&c.xScaleResolution===o&&c.xIndexDomainStart===s?.[0]&&c.xIndexDomainEnd===s?.[1])return c;let l=n.facetBatches.get(void 0),u=x(e),d=new Map,f,p;if(l?.length)p=l,d.set(l,So(u,p,0));else{let e=r?r.facetIds.map(e=>e?n.facetBatches.get(e)??[]:[]):Array.from(n.facetBatches.values());p=Array(e.reduce((e,t)=>e+t.length,0)),r&&(f=[]);let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=So(u,r,t);f?.push(i),d.set(r,i);for(let e of r)p[t++]=e}}let m={collector:n,revision:n.dataRevision,topology:r,xEncoder:i,x2Encoder:a,xScaleResolution:o,xIndexDomainStart:s?.[0],xIndexDomainEnd:s?.[1],xIndexSpec:u,data:p,ranges:d,placementRanges:f};return bo.set(e,m),m}function So(e,t,n){let r={firstInstance:n,instanceCount:t.length};if(!e||!t.length)return r;v(`webgpuXIndexBuilds`);let i=C(e,t,n);return i?(r.xIndex=i,r):(v(`webgpuXIndexRejectedBuilds`),r)}function Co(e,t,n){let r=t.placement?.index;return(r===void 0?void 0:n.placementRanges?.[r])??n.ranges.get(y(e,t))??{firstInstance:0,instanceCount:0}}var wo=class extends m{#e=[];#t=new Set;#n=new Map;#r=[];#i=[];#a=0;#o=!1;#s;#c;constructor(e){if(super({}),this.surface=e.surface,e.target)this.#c=e.target;else{let t=e.surface.getLogicalCanvasSize();this.#c={width:t.width,height:t.height,dpr:e.surface.getDevicePixelRatio()}}this.#s=e.markPredicate}getDevicePixelRatio(){return this.#c.dpr}beginSampleFacetBatch(){if(this.#a)throw Error(`Nested sample facet batches are not supported.`);this.#a++,this.#r.push({type:`beginSampleFacetBatch`})}endSampleFacetBatch(){if(!this.#a)throw Error(`Unbalanced sample facet batch scope.`);this.#a--,this.#r.push({type:`endSampleFacetBatch`})}pushView(e,t){this.#t.add(e),this.#e.push({view:e,coords:t}),this.#r.push({type:`pushView`,view:e,coords:[t],localOpacity:!1,clipX:!1,clipY:!1,bounds:Mo()})}popView(e){if(this.#e.pop()?.view!==e)throw Error(`Unbalanced WebGPU view rendering context stack.`);this.#r.push({type:`popView`})}renderMark(e,t){if(this.#o)throw Error(`Cannot collect WebGPU marks after finishing.`);if(this.#s&&!this.#s(e))return;let n=this.currentCoords,r=n.translate(ie,ie),i=this.#n.get(e);i||(i={mark:e,occurrences:[],packed:void 0,source:void 0,generatedSource:!1,facetIndexed:e.encoders.facetIndex!==void 0,xQueryDomain:[0,0],xIndexedRange:[0,0],xQueryEnabled:!1,updated:!1,active:!1,ownerCoords:void 0,definition:void 0,config:void 0,properties:void 0,configRevision:-1,resourceRevision:-1,resourcesDirty:!0,configX:NaN,configY:NaN,configWidth:NaN,configHeight:NaN,viewport:void 0,generatedRectangles:void 0},this.#n.set(e,i));let a=s(t),o={state:i,options:t,coords:n,markCoords:r,clip:l(a,e.properties.clip,n),cullClip:a,cull:e.properties.cullByVisibleRange,range:{firstInstance:0,instanceCount:0},placementIndex:i.occurrences.length,draw:void 0};i.occurrences.push(o),this.#r.push({type:`occurrence`,occurrence:o}),v(`markOccurrences`)}finish(){if(this.#o)throw Error(`The WebGPU rendering context is already finished.`);if(this.#e.length)throw Error(`Cannot finish with an open WebGPU view scope.`);if(this.#a)throw Error(`Cannot finish with an open sample facet batch.`);this.#o=!0;let e=p.create(0,0,this.#c.width,this.#c.height);for(let t of this.#n.values())this.#f(t,e);this.#i=To(this.#r),this.#u()}render(){return this.#l(!1)}renderPicking(){return this.#l(!0)}#l(e){if(!this.#o)throw Error(`Cannot render an unfinished WebGPU frame plan.`);for(let e of this.#t)_(`onBeforeRender`,()=>e.onBeforeRender()),v(`viewsVisited`);e||this.#d();let t=this.#c;for(let n of this.#n.values())n.updated=!1,n.active=!1,this.#p(n,e,t);let n=[],r=[],i=n,a=0,o=0,s=0;for(let n of e?this.#r:this.#i)if(n.type===`occurrence`){let r=this.#h(n.occurrence,e,t,i);r!==void 0&&(a++,o+=+(r>0),s+=r)}else if(n.type===`pushView`)if(e)r.push(void 0);else{let e=jo(n);i.push(e),r.push(i),i=e.items}else if(n.type===`popView`){let e=r.pop();e&&(i=e)}return v(`retainedMarkSyncChecks`,a),v(`retainedMarkSyncChanges`,o),v(`retainedResourceWrites`,s),n}#u(){let e,n=``;for(let r of this.#i)if(r.type===`pushView`){r.view!==e&&(e=r.view,n=r.view.getPathString()),r.label=n;let i=t(r.view);r.localOpacity=r.view.hasLocalOpacity(),r.clipX=i.clipX,r.clipY=i.clipY}}#d(){for(let e of this.#i)e.type===`pushView`&&zo(e,this.#c)}#f(e,t){let n=new Set(e.occurrences.map(t=>{let n=t.options.placement;return e.facetIndexed||n?.index!==void 0?n?.source:void 0}).filter(Boolean));if(n.size>1)throw Bo(e.mark,`One logical mark cannot use several placement sources.`);let r=n.values().next().value;if(e.generatedSource=!r&&e.occurrences.length>1,e.generatedSource){let n=e.generatedRectangles=new Float32Array(e.occurrences.length*4);Lo(e,t,n),e.source=this.surface.updateOccurrencePlacements(e.mark,n),e.ownerCoords=t}else e.source=r,e.ownerCoords=e.occurrences[0].markCoords;if(e.facetIndexed&&!e.source)throw Bo(e.mark,`Indexed placement requires a placement source.`);e.source&&(e.viewport=Mo());for(let t of e.occurrences)t.draw=No(t,e);this.#m(e)}#p(e,t,n){if(e.generatedRectangles&&(Lo(e,n,e.generatedRectangles),this.surface.updateOccurrencePlacements(e.mark,e.generatedRectangles)),e.viewport&&Io(e.viewport,e.ownerCoords),e.mark.unitView.getEffectiveOpacity()<=0||t&&!e.mark.isPickingParticipant())return;this.#m(e);let r=xo(e.mark,e.facetIndexed||!e.generatedSource?e.source:void 0);if(!r.data.length)return;e.xQueryEnabled=!e.facetIndexed&&!!r.xIndexSpec&&S(r.xIndexSpec,e.xQueryDomain),e.xQueryEnabled||v(`webgpuXIndexFallbackQueries`);let i=fa(e.mark),a=e.packed!==r,o=e.configRevision!==i,s=e.source?0:e.ownerCoords.x,c=e.source?0:e.ownerCoords.y,l=e.ownerCoords.width,u=e.ownerCoords.height,d=e.configX!==s||e.configY!==c||e.configWidth!==l||e.configHeight!==u;if(a||o||d){v(a?`markConfigurationPackedMiss`:o?`markConfigurationExpressionMiss`:`markConfigurationGeometryMiss`);let t=e.occurrences[0],n=e.source?p.create(0,0,e.ownerCoords.width,e.ownerCoords.height):e.ownerCoords,d=_(`markConfiguration`,()=>ua(e.mark,t.options,n,1,r.data,Po(e)));e.packed=r,e.definition=d?.definition,e.config=d?.config,e.properties=d?.properties,e.configRevision=i,e.configX=s,e.configY=c,e.configWidth=l,e.configHeight=u}if(a)for(let t of e.occurrences)t.range=Co(e.mark,t.options,r);let f=pa(e.mark);e.resourcesDirty||=f===void 0||a||o||d||e.resourceRevision!==f,e.resourceRevision=f??-1,e.active=!!e.config}#m(e){if(!e.source||e.generatedSource)return;let t=e.source.getSnapshot().topology.revision;for(let n of e.occurrences){let r=n.options.placement?.topologyRevision;if(r!==void 0&&r!==t)throw Bo(e.mark,`Placement topology changed after layout completion.`)}}#h(e,t,n,r){let i=e.state;if(!i.active||!i.config||!i.definition||!i.packed)return;let a=e.range;if(!a.instanceCount)return;let o=e.draw;if(!o)throw Error(`Occurrence draw has not been compiled.`);Fo(e,i,o,n);let s=i.generatedSource?e.placementIndex:e.options.placement?.index,c=i.facetIndexed?void 0:s;if(i.source&&!i.facetIndexed&&c===void 0)throw Bo(i.mark,`Draw-level placement requires a resolved placement index.`);if(i.source&&s!==void 0&&!Ro(i.source,s,i.viewport,o.scissor,n))return;let l=a.firstInstance,u=a.instanceCount;if(i.xQueryEnabled&&a.xIndex){if(a.xIndex(i.xQueryDomain[0],i.xQueryDomain[1],i.xIndexedRange),l=i.xIndexedRange[0],u=i.xIndexedRange[1]-l,v(`webgpuXIndexQueries`),v(`webgpuXIndexNativeItems`,a.instanceCount),v(`webgpuXIndexCandidateItems`,u),!u){v(`webgpuXIndexEmptyRanges`);return}}else i.xQueryEnabled&&v(`webgpuXIndexFallbackQueries`);let d;return i.updated||(i.updated=!0,i.resourcesDirty&&=(d=_(`retainedResourceSynchronization`,()=>this.surface.updateMark(i.mark,i.definition,i.config,i.properties??{})),!1)),o.firstInstance=l,o.instanceCount=u,o.placement&&(o.placement.index=c),this.surface.prepareDraw(i.mark,o,i.source),r.push(o),v(`drawCommands`),d}get currentCoords(){let e=o(this.#e);if(!e)throw Error(`No current view in WebGPU rendering context.`);return e.coords}};function To(e){let t=[],n,r=[];for(let i of e)i.type===`beginSampleFacetBatch`?n=Eo():i.type===`endSampleFacetBatch`?(Ao(n,t),n=void 0):n?i.type===`occurrence`?Oo(n,i.occurrence.state.mark,i):i.type===`pushView`?(r.push(n),n=ko(n,i)):n=r.pop():t.push(i);return t}function Eo(){return{slots:new Map,ordered:[]}}function Do(e,t){let n=e.slots.get(t);return n||(n={items:[]},e.slots.set(t,n),e.ordered.push(n)),n}function Oo(e,t,n){Do(e,t).items.push(n)}function ko(e,t){let n=Do(e,t.view);return n.command?n.command.coords.push(...t.coords):(n.command=t,n.collector=Eo()),n.collector}function Ao(e,t){for(let n of e.ordered)n.command&&n.collector?(t.push(n.command),Ao(n.collector,t),t.push({type:`popView`})):t.push(...n.items)}function jo(e){let t={bounds:e.bounds,items:[],label:e.label};return e.localOpacity&&(t.opacity=e.view.getOpacity()),t}function Mo(){return{x:0,y:0,width:0,height:0}}function No(e,t){let n={mark:{markId:-1},firstInstance:0,instanceCount:0};return t.viewport&&(n.viewport=t.viewport),e.clip&&(n.scissor=Mo()),e.cull&&(n.visibleRange={x1:0,y1:0,x2:0,y2:0,cullX:e.cull===!0||e.cull===`x`,cullY:e.cull===!0||e.cull===`y`}),t.source&&(n.placement={set:{placementSetId:-1},...e.options.placement?.clipToPlacement?{clipToPlacement:e.options.placement.clipToPlacement}:{}}),n}function Po(e){if(!e.facetIndexed&&e.source)return{source:`draw`}}function Fo(e,t,n,r){if(n.scissor){let t=e.clip;n.scissor.x=t.clipX?t.rect.x:0,n.scissor.y=t.clipY?t.rect.y:0,n.scissor.width=t.clipX?t.rect.width:r.width,n.scissor.height=t.clipY?t.rect.height:r.height}if(n.visibleRange){let r=e.coords,i=e.cullClip,a=r.x,o=r.y;if(n.visibleRange.x1=0,n.visibleRange.x2=a+r.width,n.visibleRange.y1=0,n.visibleRange.y2=o+r.height,n.visibleRange.cullX)if(i?.clipX){let e=i.rect.x;n.visibleRange.x1=e,n.visibleRange.x2=e+i.rect.width}else n.visibleRange.x1=a;if(n.visibleRange.cullY)if(i?.clipY){let e=i.rect.y;n.visibleRange.y1=e,n.visibleRange.y2=e+i.rect.height}else n.visibleRange.y1=o;t.viewport&&(n.visibleRange.x1-=t.viewport.x,n.visibleRange.x2-=t.viewport.x,n.visibleRange.y1-=t.viewport.y,n.visibleRange.y2-=t.viewport.y)}}function Io(e,t){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height}function Lo(e,t,n){for(let r of e.occurrences){let e=r.markCoords,i=r.placementIndex*4;n[i]=e.x/t.width,n[i+1]=e.y/t.height,n[i+2]=Math.max(e.width,1)/t.width,n[i+3]=Math.max(e.height,1)/t.height}}function Ro(e,t,n,r,i){let a=e.getSnapshot().rectangles,o=t*4;if(o+3>=a.length)return!1;let s=n.x+a[o]*n.width,c=n.y+a[o+1]*n.height,l=a[o+2]*n.width,u=a[o+3]*n.height;if(l<=0||u<=0)return!1;let d=Math.max(0,r?.x??0),f=Math.max(0,r?.y??0),p=Math.min(i.width,r?r.x+r.width:i.width),m=Math.min(i.height,r?r.y+r.height:i.height);return s<p&&c<m&&s+l>d&&c+u>f}function zo(e,t){let n=e.coords[0],r=n.x,i=n.y,a=r+n.width,o=i+n.height;for(let t=1;t<e.coords.length;t++){let n=e.coords[t];r=Math.min(r,n.x),i=Math.min(i,n.y),a=Math.max(a,n.x+n.width),o=Math.max(o,n.y+n.height)}e.bounds.x=e.clipX?r:0,e.bounds.y=e.clipY?i:0,e.bounds.width=e.clipX?a-r:t.width,e.bounds.height=e.clipY?o-i:t.height}function Bo(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var Vo={r:0,g:0,b:0,a:0};function Ho(e){if(e==null)return Vo;let t=i(e);if(!t)throw Error(`Invalid WebGPU canvas background color: ${e}`);let n=t.rgb();return{r:n.r/255,g:n.g/255,b:n.b/255,a:n.opacity}}var Uo=class{#e=!0;#t;constructor(e){this.viewRoot=e.viewRoot,this.surface=e.surface,this.getBackground=e.getBackground,this.broadcast=e.broadcast,this.onLayoutComputed=e.onLayoutComputed}computeLayout(){this.broadcast(`layout`),this.surface.invalidateSize();let e=5;for(;;){let t=this.#n();if(!t)return;if(!this.surface.invalidateSize()){this.#t=this.#r(t),this.#e=!0,this.onLayoutComputed(),this.broadcast(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}renderAll(){let e=this.#t;if(!e)return;let t=g();t?.beginFrame(`webgpu`);let n=_(`markTranslation`,()=>e.render());_(`surfaceRender`,()=>this.surface.render(n,Ho(this.getBackground()))),this.#e=!0,t?.endFrame()}renderPickingFramebuffer(){let e=this.#t;if(!e||!this.#e)return;let t=g();t?.beginFrame(`webgpu`,`picking`);let n=_(`markTranslation`,()=>e.renderPicking());_(`surfaceRender`,()=>this.surface.renderPicking(n)),this.#e=!1,t?.endFrame()}#n(){let e=this.surface.getLogicalCanvasSize();if(!(isNaN(e.width)||isNaN(e.height)))return _(`layout`,()=>h(this.viewRoot,p.create(0,0,e.width,e.height),{devicePixelRatio:this.surface.getDevicePixelRatio(),renderingOptions:{firstFacet:!0}}))}#r(e){let t=new wo({surface:this.surface});return _(`framePlanCompilation`,()=>{e.collectRenderCommands(t),t.finish()}),t}},Wo=class{constructor(e){this._count=e,this._templatesByShader=new Map,this._nextId=1}getOrCreate(e,t,n){let r=this._templatesByShader.get(e),i=r?.get(t);if(i)return this._count(`programTemplateCacheHits`),i;r||(r=new Map,this._templatesByShader.set(e,r));let a=n(this._nextId++);return r.set(t,a),this._count(`programTemplateCacheMisses`),a}},Go=`
struct CompositeParams {
    opacity: f32,
}

@group(0) @binding(0) var<uniform> params: CompositeParams;
@group(0) @binding(1) var source: texture_2d<f32>;

struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>,
}

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOut {
    let positions = array<vec2<f32>, 6>(
        vec2<f32>(-1.0, -1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(-1.0, 1.0),
        vec2<f32>(1.0, -1.0),
        vec2<f32>(1.0, 1.0)
    );
    let uvs = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(0.0, 0.0),
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 1.0),
        vec2<f32>(1.0, 0.0)
    );
    var out: VertexOut;
    out.position = vec4<f32>(positions[vertexIndex], 0.0, 1.0);
    out.uv = uvs[vertexIndex];
    return out;
}

@fragment
fn fs_main(in: VertexOut) -> @location(0) vec4<f32> {
    let dimensions = textureDimensions(source);
    let pixel = min(
        vec2<i32>(in.uv * vec2<f32>(dimensions)),
        vec2<i32>(dimensions) - vec2<i32>(1)
    );
    return textureLoad(source, pixel, 0) * params.opacity;
}
`,Ko=5e3,qo=class{constructor(e,t){this.device=e,this.format=t,this.free=[],this.all=new Set,this.generation=0,this.idleTimer=void 0}beginFrame(){this.generation++,this.#n()}acquire(e,t,n){let r=`${e}x${t}:${n}`,i=this.free.findLastIndex(e=>e.key===r);if(i>=0){let e=this.free.splice(i,1)[0];return e.generation=this.generation,e}let a=this.device.createTexture({label:O(D,`transient ${e}x${t} ${n}x color`),size:{width:e,height:t},format:this.format,sampleCount:n,usage:GPUTextureUsage.RENDER_ATTACHMENT|(n===1?GPUTextureUsage.TEXTURE_BINDING:0)}),o={key:r,texture:a,view:a.createView({label:O(D,`transient color view`)}),generation:this.generation,compositeBinding:null};return this.all.add(o),o}release(e){this.free.push(e)}endFrame(){for(let e=this.free.length-1;e>=0;e--){let t=this.free[e];t.generation!==this.generation&&(this.free.splice(e,1),this.#e(t))}this.#t()}destroy(){this.#n();for(let e of this.all)e.texture.destroy();this.all.clear(),this.free.length=0}#e(e){this.all.delete(e),e.texture.destroy()}#t(){this.#n(),this.free.length!==0&&(this.idleTimer=setTimeout(()=>{this.idleTimer=void 0;for(let e of this.free)this.#e(e);this.free.length=0},Ko))}#n(){this.idleTimer!==void 0&&(clearTimeout(this.idleTimer),this.idleTimer=void 0)}},Jo=class{constructor(e,t){this.device=e,this.stride=Math.max(16,e.limits.minUniformBufferOffsetAlignment),this.capacity=1,this.buffer=this.#e(this.capacity),this.staging=new Float32Array(this.capacity*this.stride/4),this.count=0;let n=e.createShaderModule({label:O(D,`composite shader`),code:Go});this.layout=e.createBindGroupLayout({label:O(D,`composite bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:16}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`,viewDimension:`2d`,multisampled:!1}}]}),this.pipeline=e.createRenderPipeline({label:O(D,`composite pipeline`),layout:e.createPipelineLayout({label:O(D,`composite pipeline layout`),bindGroupLayouts:[this.layout]}),vertex:{module:n,entryPoint:`vs_main`},fragment:{module:n,entryPoint:`fs_main`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}})}prepare(e){if(e>this.capacity){let t=this.capacity;for(;t<e;)t*=2;let n=this.buffer;this.capacity=t,this.buffer=this.#e(t),this.staging=new Float32Array(t*this.stride/4),n.destroy()}this.count=0}bind(e,t,n){let r=this.count++;this.staging[r*this.stride/4]=n;let i=t.compositeBinding;(i===null||i.buffer!==this.buffer)&&(i={buffer:this.buffer,bindGroup:this.device.createBindGroup({label:O(D,`composite bind group`),layout:this.layout,entries:[{binding:0,resource:{buffer:this.buffer,size:16}},{binding:1,resource:t.view}]})},t.compositeBinding=i),e.setBindGroup(0,i.bindGroup,[r*this.stride])}flush(){this.count&&this.device.queue.writeBuffer(this.buffer,0,this.staging.buffer,0,this.count*this.stride)}destroy(){this.buffer.destroy()}#e(e){return this.device.createBuffer({label:O(D,`composite uniforms`),size:e*this.stride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}},Yo=class{constructor(e){this.pass=e,this.pipeline=null,this.bindGroups=[],this.dynamicOffsets=[],this.viewport=[NaN,NaN,NaN,NaN,NaN,NaN],this.scissor=[NaN,NaN,NaN,NaN]}setPipeline(e){e!==this.pipeline&&(this.pass.setPipeline(e),this.pipeline=e)}setBindGroup(e,t,n){this.bindGroups[e]===t&&Xo(this.dynamicOffsets[e],n)||(n?this.pass.setBindGroup(e,t,n):this.pass.setBindGroup(e,t),this.bindGroups[e]=t,this.dynamicOffsets[e]=n)}setViewport(e,t,n,r,i,a){let o=this.viewport;o[0]===e&&o[1]===t&&o[2]===n&&o[3]===r&&o[4]===i&&o[5]===a||(this.pass.setViewport(e,t,n,r,i,a),o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=a)}setScissorRect(e,t,n,r){let i=this.scissor;i[0]===e&&i[1]===t&&i[2]===n&&i[3]===r||(this.pass.setScissorRect(e,t,n,r),i[0]=e,i[1]=t,i[2]=n,i[3]=r)}};function Xo(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Zo={r:0,g:0,b:0,a:0},Z=class extends Error{},Qo=Symbol.for(`genome-spy.performance-profiler`);function $o(){return globalThis[Qo]}function es(e,t){$o()?.addPhase(e,t)}function Q(e,t){$o()?.addCount(e,t)}function ts(){return $o()?.enabled?performance.now():0}function ns(e,t){t&&es(e,performance.now()-t)}var rs=class{constructor(e,t,n){this.renderer=e,this.placementSetId=t,this._labelOwner=`${D} placement set #${t}`,this._destroyed=!1,this._rectangles=is(n),this._buffer=as(e.device,this._rectangles,this._labelOwner),this._bindGroup=this._createBindGroup()}get count(){return this._rectangles.length/4}get bindGroup(){if(this.renderer._assertAlive(),this._destroyed)throw new Z(`Placement set has been destroyed.`);return this._bindGroup}_createBindGroup(){return this.renderer.device.createBindGroup({label:O(this._labelOwner,`bind group`),layout:this.renderer._placementBindGroupLayout,entries:[{binding:0,resource:{buffer:this._buffer}}]})}replace(e){if(this.renderer._assertAlive(),this._destroyed)throw new Z(`Placement set has been destroyed.`);let t=is(e);if(t.byteLength>this._buffer.size){Q(`placementBufferRecreations`);let e=this._buffer;this._buffer=as(this.renderer.device,t,this._labelOwner),this._bindGroup=this._createBindGroup(),e.destroy()}else t.byteLength&&(Q(`placementBufferReplacements`),Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),this.renderer.device.queue.writeBuffer(this._buffer,0,t));this._rectangles=t,this.renderer._renderFrame=null,this.renderer._pickingFrame=null,Q(`retainedNormalFrameInvalidations`),Q(`retainedPickingFrameInvalidations`),this.renderer.markPickingDirty()}destroy(){this._destroyed||(this._destroyed=!0,this._buffer.destroy(),this.renderer._placementSets.delete(this.placementSetId),this.renderer._renderFrame=null,this.renderer._pickingFrame=null,this.renderer.markPickingDirty())}};function is(e){if(!e||!(e.rectangles instanceof Float32Array))throw new Z(`Placement data must contain Float32Array rectangles.`);if(e.rectangles.length%4!=0)throw new Z(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.rectangles.length;t+=4){let n=e.rectangles[t],r=e.rectangles[t+1],i=e.rectangles[t+2],a=e.rectangles[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw new Z(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}if(!$o()?.enabled)return new Float32Array(e.rectangles);let t=performance.now(),n=new Float32Array(e.rectangles);return Q(`placementValidationSnapshotBytes`,n.byteLength),es(`placementValidationSnapshot`,performance.now()-t),n}function as(e,t,n){let r=e.createBuffer({label:O(n,`rectangles`),size:Math.max(16,t.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return t.byteLength&&(Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),e.queue.writeBuffer(r,0,t)),r}function os(e){return e===`x`?1:e===`y`?2:e===`xy`?3:0}function ss(e){let t=new ArrayBuffer(e);return{buffer:t,floats:new Float32Array(t),integers:new Uint32Array(t)}}async function cs(e,t={}){if(!navigator.gpu)throw new Z(`WebGPU is not supported in this browser.`);let n=await navigator.gpu.requestAdapter();if(!n)throw new Z(`WebGPU adapter not available.`);let r=Math.min(10,n.limits.maxStorageBuffersPerShaderStage),i=await n.requestDevice({requiredLimits:{maxStorageBuffersPerShaderStage:r}});ds(i);let a=e.getContext(`webgpu`);if(!a)throw new Z(`Could not create a WebGPU context.`);return new ls({device:i,context:a,format:t.format??navigator.gpu.getPreferredCanvasFormat(),canvas:e,alphaMode:t.alphaMode??`premultiplied`,onInvalidate:t.onInvalidate,onDeviceLoss:t.onDeviceLoss})}var ls=class{constructor({device:e,context:t,format:n,canvas:r,alphaMode:i,onInvalidate:a,onDeviceLoss:o}){this.device=e,this.context=t,this.format=n,this.canvas=r,this.alphaMode=i,this._onInvalidate=a??(()=>{}),this._onDeviceLoss=o??(()=>{}),this._state=`alive`,this._deviceLossError=null,e.lost.then(e=>this._handleDeviceLoss(e)),t.configure({device:e,format:n,alphaMode:i}),this.pickFormat=`rgba8unorm`,this._marks=new Map,this._placementSets=new Map,this._detachedTargets=new Set,this._programTemplateCache=new Wo(Q),this._transientTextures=new qo(e,n),this._textureCompositor=new Jo(e,n),this._fontResourceCache=new Map,this._nextFontResourceId=1,this._renderFrame=null,this._pickingFrame=null,this._nextMarkId=1,this._nextPlacementSetId=1,this._pickingDirty=!0,this._pickTexture=null,this._pickTextureView=null,this._pickReadbackBuffer=null,this._pickTextureSize={width:0,height:0},this._pickQueue=[],this._activePick=null,this._globalUniformStride=Math.max(80,e.limits.minUniformBufferOffsetAlignment),this._globalUniformCapacity=1,this._globalUniformStaging=ss(this._globalUniformStride),this._globalUniformBuffer=e.createBuffer({label:O(D,`global uniforms`),size:this._globalUniformStride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._globalBindGroupLayout=e.createBindGroupLayout({label:O(D,`global bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:80}}]}),this._globalBindGroup=e.createBindGroup({label:O(D,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this._globalUniformBuffer,size:80}}]}),this._placementBindGroupLayout=e.createBindGroupLayout({label:O(D,`placement bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}}]});let s=window.devicePixelRatio??1;this.updateGlobals({width:(r.width||1)/s,height:(r.height||1)/s,dpr:s})}updateGlobals(e){this._assertAlive(),this._globals=us(e),this.markPickingDirty()}createDetachedTarget(e,t){this._assertAlive();let n=e.getContext(`webgpu`);if(!n)throw new Z(`Could not create a detached WebGPU context.`);n.configure({device:this.device,format:this.format,alphaMode:this.alphaMode});let r=us(t),i=!1,a=()=>{if(this._assertAlive(),i)throw new Z(`Detached render target has been destroyed.`)},o={canvas:e,render:(t={})=>{a(),this._renderTarget(n,e,r,t,!1)},onSubmittedWorkDone:async()=>{a(),await this.device.queue.onSubmittedWorkDone()},destroy:()=>{i||(i=!0,n.unconfigure(),this._detachedTargets.delete(o))}};return this._detachedTargets.add(o),o}_ensureGlobalUniformCapacity(e){if(e<=this._globalUniformCapacity)return;let t=this._globalUniformCapacity;for(;t<e;)t*=2;let n=this._globalUniformBuffer;this._globalUniformBuffer=this.device.createBuffer({label:O(D,`global uniforms`),size:t*this._globalUniformStride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._globalUniformStaging=ss(t*this._globalUniformStride),this._globalBindGroup=this.device.createBindGroup({label:O(D,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this._globalUniformBuffer,size:80}}]}),this._globalUniformCapacity=t,n.destroy()}_writeDrawGlobals(e){let t=ts();if(!e.length){ns(`drawGlobals`,t);return}this._ensureGlobalUniformCapacity(e.length);let{buffer:n,floats:r,integers:i}=this._globalUniformStaging;for(let t=0;t<e.length;t++){let n=t*this._globalUniformStride/4,a=e[t];r[n]=a.viewport.width,r[n+1]=a.viewport.height,r[n+2]=this._globals.dpr,r[n+4]=a.visibleRange.x1,r[n+5]=a.visibleRange.y1,r[n+6]=a.visibleRange.x2,r[n+7]=a.visibleRange.y2,r[n+8]=+!!a.visibleRange.cullX,r[n+9]=+!!a.visibleRange.cullY,r[n+12]=a.viewport.x,r[n+13]=a.viewport.y,r[n+14]=a.viewport.width,r[n+15]=a.viewport.height,i[n+16]=a.placement?.index??0,i[n+17]=a.placement?.clipMode??0,i[n+18]=a.placement?.count??0}this.device.queue.writeBuffer(this._globalUniformBuffer,0,n,0,e.length*this._globalUniformStride),Q(`drawGlobalWrites`),Q(`drawGlobalBytes`,e.length*this._globalUniformStride),ns(`drawGlobals`,t)}createMark(e,t,n={}){this._assertAlive();let r=this._nextMarkId++,i=n.label??`${e.type} #${r}`,a=e.createProgram(this,t,{label:i});this._marks.set(r,a),this.markPickingDirty();let o=a.getSlotHandles();return{markId:r,batchUpdates:o.batchUpdates,series:o.series,scales:o.scales,values:o.values,properties:o.properties,extraValues:o.extraValues,scalarSlots:o.scalarSlots,selections:o.selections}}createPlacementSet(e){this._assertAlive();let t=new rs(this,this._nextPlacementSetId++,e);return this._placementSets.set(t.placementSetId,t),t}markPickingDirty(){this._state===`alive`&&(this._pickingDirty=!0)}_invalidate(){this._state===`alive`&&(this.markPickingDirty(),this._onInvalidate())}_ensurePickTarget(){let e=Math.max(1,this.canvas.width),t=Math.max(1,this.canvas.height);(!this._pickTexture||this._pickTextureSize.width!==e||this._pickTextureSize.height!==t)&&(this._pickTexture?.destroy(),this._pickTexture=this.device.createTexture({label:O(D,`picking texture`),size:{width:e,height:t},format:this.pickFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),this._pickTextureView=this._pickTexture.createView({label:O(D,`picking texture view`)}),this._pickTextureSize={width:e,height:t},this._pickReadbackBuffer?.destroy(),this._pickReadbackBuffer=this.device.createBuffer({label:O(D,`picking readback`),size:256,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}))}_renderPick(){Q(`pickingRenders`),this._ensurePickTarget();let e=this.device.createCommandEncoder({label:O(D,`picking command encoder`)}),t=e.beginRenderPass({label:O(D,`picking render pass`),colorAttachments:[{view:this._pickTextureView,loadOp:`clear`,storeOp:`store`,clearValue:{r:0,g:0,b:0,a:0}}]}),n=this._pickingFrame??this._renderFrame??this._normalizeDraws(this._marks.keys());this._writeDrawGlobals(n),this._encodeDraws(t,n,!0),t.end(),this.device.queue.submit([e.finish()]),this._pickingDirty=!1}pick(e,t){return this._assertAlive(),new Promise((n,r)=>{this._pickQueue.push({x:e,y:t,resolve:n,reject:r}),this._startNextPick()})}_startNextPick(){if(this._activePick||!this._pickQueue.length)return;let e=this._pickQueue.shift();this._activePick=e,Promise.resolve().then(()=>(this._assertAlive(),this._pickSingle(e.x,e.y))).then(t=>this._finishPick(e,t,!1),t=>this._finishPick(e,t,!0))}_finishPick(e,t,n){this._activePick===e&&(this._activePick=null,n?e.reject(t):e.resolve(t),this._state===`alive`&&this._startNextPick())}_handleDeviceLoss(e){if(this._state!==`alive`)return;let t=e.message?`: ${e.message}`:``,n=new Z(`WebGPU device was lost (${e.reason})${t}`);this._state=`lost`,this._deviceLossError=n;let r=this._activePick;this._activePick=null,r?.reject(n);for(let e of this._pickQueue)e.reject(n);this._pickQueue.length=0,this._onInvalidate=()=>{},this._onDeviceLoss(e)}async _pickSingle(e,t){if(!this._marks.size)return null;this._ensurePickTarget(),this._pickingDirty&&this._renderPick();let n=this._globals?.dpr??1,r=Math.floor(e*n),i=Math.floor(t*n);if(r<0||i<0||r>=this._pickTextureSize.width||i>=this._pickTextureSize.height)return null;let a=this.device.createCommandEncoder({label:O(D,`pick readback command encoder`)});a.copyTextureToBuffer({texture:this._pickTexture,origin:{x:r,y:i}},{buffer:this._pickReadbackBuffer,bytesPerRow:256},{width:1,height:1,depthOrArrayLayers:1}),this.device.queue.submit([a.finish()]),await this._pickReadbackBuffer.mapAsync(GPUMapMode.READ,0,4);let o=new Uint8Array(this._pickReadbackBuffer.getMappedRange(0,4)),s=o[0]|o[1]<<8|o[2]<<16|o[3]<<24;return this._pickReadbackBuffer.unmap(),s===0?null:s-1>>>0}debugResources(e,t){this._assertAlive();let n=this._marks.get(e);if(!n)throw new Z(`No such mark: ${e}`);n.debugResources(t)}render(e={}){this._assertAlive(),this._renderTarget(this.context,this.canvas,this._globals,e,!0)}_renderTarget(e,t,n,r,i){let a=this._globals;this._globals=n;try{this._renderTargetFrame(e,t,r,i)}finally{this._globals=a}}_renderTargetFrame(e,t,n,r){let{items:i,draws:a,groupCount:o}=this._normalizeRenderItems(n.items??n.draws??this._marks.keys());Q(`renderDraws`,a.length),Q(`renderGroups`,o),this._writeDrawGlobals(a),this._textureCompositor.prepare(a.length+o+1);let s=this.device.createCommandEncoder({label:O(D,`main command encoder`)}),c=e.getCurrentTexture().createView({label:O(D,`canvas texture view`)});this._transientTextures.beginFrame();try{let e=ts();this._encodeRenderItems(s,{view:c,width:t.width,height:t.height,logicalX:0,logicalY:0,label:D},i,1,n.clearColor??{r:1,g:1,b:1,a:1}),this._textureCompositor.flush(),ns(`commandEncoding`,e);let r=ts();this.device.queue.submit([s.finish()]),ns(`submission`,r)}finally{this._transientTextures.endFrame()}r&&(this._renderFrame=a,this._pickingDirty=!0)}renderPicking(e={}){this._assertAlive(),this._pickingFrame=e.draws?this._normalizeDraws(e.draws):this._pickingFrame??this._renderFrame??this._normalizeDraws(this._marks.keys()),this._pickingDirty=!0}_normalizeDraws(e){let t=ts(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[];for(let t of e){let e=this._normalizeDraw(t,n,r.length);e&&r.push(e)}return Q(`normalizedDraws`,r.length),ns(`drawNormalization`,t),r}_normalizeDraw(e,t,n){let r=typeof e==`number`?{mark:{markId:e}}:e,i=r.mark.markId,a=this._marks.get(i);if(!a)throw new Z(`No such mark: ${i}`);let o={...r.viewport??t};if(_s(`viewport`,o),o.x<0||o.y<0||o.x+o.width>t.width||o.y+o.height>t.height)throw new Z(`Viewport must be contained within the logical canvas.`);let s=ys(r.scissor??t,t),c=r.firstInstance??0;gs(`firstInstance`,c);let l=r.instanceCount??a.drawCount-c;if(gs(`instanceCount`,l),c+l>a.drawCount)throw new Z(`Instance range exceeds mark count: ${a.drawCount}.`);let u=a.resolveDrawRange(c,l),d=a._placementIndex,f;if(d){if(!r.placement)throw new Z(`Placement-enabled marks require a placement binding.`);let e=this._placementSets.get(r.placement.set.placementSetId);if(!e)throw new Z(`No such placement set: ${r.placement.set.placementSetId}`);let n=r.placement.index;if(`source`in d&&d.source===`draw`){if(!Number.isInteger(n)||n<0)throw new Z(`Draw placement marks require a non-negative index.`);if(n>=e.count)throw new Z(`Placement index ${n} exceeds set count ${e.count}.`)}else if(n!==void 0)throw new Z(`Per-instance placement marks forbid a draw-level index.`);if(f={bindGroup:e.bindGroup,count:e.count,index:n,clipToPlacement:r.placement.clipToPlacement,clipMode:os(r.placement.clipToPlacement)},n!==void 0&&f.clipToPlacement){let r=n*4,i=e._rectangles,a={x:o.x+i[r]*o.width,y:o.y+i[r+1]*o.height,width:i[r+2]*o.width,height:i[r+3]*o.height},c=f.clipToPlacement;s=ys(s,{x:c.includes(`x`)?a.x:t.x,y:c.includes(`y`)?a.y:t.y,width:c.includes(`x`)?a.width:t.width,height:c.includes(`y`)?a.height:t.height})}}else if(r.placement)throw new Z(`Placement bindings require a placement-enabled mark.`);if(!(s.width<=0||s.height<=0))return{type:`draw`,requiredSampleCount:a.antialiasing===`multisample`?4:1,uniformIndex:n,markId:i,viewport:o,scissor:s,visibleRange:vs(r.visibleRange,t),firstInstance:u.firstInstance,instanceCount:u.instanceCount,placement:f}}_normalizeRenderItems(e){let t=ts(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[],i=0,a=e=>{let t=[];for(let i of e)if(fs(i)){let e=Math.min(1,Math.max(0,i.opacity??1));if(Number.isNaN(e))throw new Z(`Render scope opacity must be a number.`);if(_s(`render scope bounds`,i.bounds,!0),e===0||i.bounds.width===0||i.bounds.height===0)continue;let n=a(i.items);if(!n.length)continue;t.push({type:`scope`,bounds:i.bounds,opacity:e,label:i.label,coverageOnly:n.every(ps),items:n})}else{let e=this._normalizeDraw(i,n,r.length);e&&(r.push(e),t.push(e))}return t},o=(e,t,n,r)=>{let a=[],s=[],c,l=()=>{s.length&&(i++,a.push({type:`group`,bounds:c,opacity:1,sampleCount:4,label:r,items:s}),s=[],c=void 0)};for(let u of e)if(u.type===`scope`){l();let e=ys(u.bounds,n);if(!e.width||!e.height)continue;let s=u.coverageOnly?4:1,c=u.label??r,d=o(u.items,s,e,c);if(!d.length)continue;u.opacity===1&&s===t?a.push(...d):(i++,a.push({type:`group`,bounds:e,opacity:u.opacity,sampleCount:s,label:c,items:d}))}else if(t===1&&u.requiredSampleCount===4){let e=ys(u.scissor,n);if(!e.width||!e.height)continue;s.push(u),c?ms(c,e):c=e}else l(),a.push(u);return l(),a},s=o(a(e),1,n,D);return Q(`normalizedDraws`,r.length),ns(`drawNormalization`,t),{items:s,draws:r,groupCount:i}}_encodeRenderItems(e,t,n,r,i){let a=!1,o=[],s=()=>{if(o.length){if(r===1)this._encodeDrawPass(e,t,o,a?void 0:i);else if(!a)this._encodeMultisampleDrawPass(e,t,o);else{let n=this._transientTextures.acquire(t.width,t.height,1),r={texture:n,...t,view:n.view};this._encodeMultisampleDrawPass(e,r,o),this._encodeCompositePass(e,t,r,1,a?void 0:i),this._transientTextures.release(r.texture)}a=!0,o=[]}};for(let r of n)if(r.type===`group`){s();let n=this._renderGroup(e,t,r);n&&(this._encodeCompositePass(e,t,n,r.opacity,a?void 0:i),this._transientTextures.release(n.texture),a=!0)}else o.push(r);s(),a||this._encodeDrawPass(e,t,[],i)}_renderGroup(e,t,n){let r=ys(n.bounds,{x:t.logicalX,y:t.logicalY,width:t.width/this._globals.dpr,height:t.height/this._globals.dpr}),i=this._globals.dpr,a=bs(r,i,Math.floor(t.logicalX*i)+t.width,Math.floor(t.logicalY*i)+t.height);if(!a.width||!a.height)return;let o=this._transientTextures.acquire(a.width,a.height,1),s={view:o.view,width:a.width,height:a.height,logicalX:a.x/i,logicalY:a.y/i,label:n.label};return this._encodeRenderItems(e,s,n.items,n.sampleCount,Zo),{texture:o,...s}}_encodeMultisampleDrawPass(e,t,n){let r=this._transientTextures.acquire(t.width,t.height,4),i=e.beginRenderPass({label:O(t.label,`multisample group pass`),colorAttachments:[{view:r.view,resolveTarget:t.view,clearValue:Zo,loadOp:`clear`,storeOp:`discard`}]});this._encodeDraws(i,n,!1,t,4),i.end(),this._transientTextures.release(r)}_encodeDrawPass(e,t,n,r){let i=e.beginRenderPass({label:O(t.label,`main render pass`),colorAttachments:[{view:t.view,...r?{clearValue:r}:{},loadOp:r?`clear`:`load`,storeOp:`store`}]});this._encodeDraws(i,n,!1,t),i.end()}_encodeCompositePass(e,t,n,r,i){let a=e.beginRenderPass({label:O(n.label,`group composite pass`),colorAttachments:[{view:t.view,...i?{clearValue:i}:{},loadOp:i?`clear`:`load`,storeOp:`store`}]}),o=Math.round((n.logicalX-t.logicalX)*this._globals.dpr),s=Math.round((n.logicalY-t.logicalY)*this._globals.dpr);a.setViewport(o,s,n.width,n.height,0,1),a.setScissorRect(o,s,n.width,n.height),a.setPipeline(this._textureCompositor.pipeline),this._textureCompositor.bind(a,n.texture,r),a.draw(6),a.end()}_encodeDraws(e,t,n,r={view:void 0,width:this.canvas.width,height:this.canvas.height,logicalX:0,logicalY:0,label:D},i=1){let a=this._globals.dpr,o=new Yo(e);for(let s of t){let t=this._marks.get(s.markId);if(!t)continue;o.setViewport((s.viewport.x-r.logicalX)*a,(s.viewport.y-r.logicalY)*a,s.viewport.width*a,s.viewport.height*a,0,1);let c=bs(ys(s.scissor,{x:r.logicalX,y:r.logicalY,width:r.width/a,height:r.height/a}),a,Math.floor(r.logicalX*a)+r.width,Math.floor(r.logicalY*a)+r.height);o.setScissorRect(c.x-Math.floor(r.logicalX*a),c.y-Math.floor(r.logicalY*a),c.width,c.height),o.setBindGroup(0,this._globalBindGroup,[s.uniformIndex*this._globalUniformStride]);let l={firstInstance:s.firstInstance,instanceCount:s.instanceCount,sampleCount:i};s.placement&&(l.placement=s.placement),n?t.preparePick(o,l):t.prepareDraw(o,l),s.placement&&o.setBindGroup(2,s.placement.bindGroup),n?t.drawPick(e,l):t.draw(e,l)}}destroyMark(e){if(this._state===`destroyed`)return;let t=this._marks.get(e);t&&(t.destroy(),this._marks.delete(e),this.markPickingDirty())}destroy(){if(this._state===`destroyed`)return;this._state=`destroyed`;for(let e of this._marks.values())e.destroy();this._marks.clear();for(let e of this._placementSets?.values()??[])e.destroy();this._placementSets?.clear();for(let e of this._detachedTargets)e.destroy();for(let e of this._fontResourceCache.values())for(let t of e.values())t.destroy();this._fontResourceCache.clear(),this._renderFrame=null,this._globalUniformBuffer.destroy(),this._transientTextures.destroy(),this._textureCompositor.destroy(),this._pickTexture?.destroy(),this._pickTexture=null,this._pickTextureView=null,this._pickReadbackBuffer?.destroy(),this._pickReadbackBuffer=null;for(let e of this._pickQueue)e.resolve(null);this._pickQueue.length=0;let e=this._activePick;this._activePick=null,e?.resolve(null),this._onInvalidate=()=>{},this.context.unconfigure(),this.device.destroy()}_assertAlive(){if(this._state===`lost`)throw this._deviceLossError;if(this._state===`destroyed`)throw new Z(`Renderer has been destroyed.`)}_isAlive(){return this._state===`alive`}};function us(e){let{width:t,height:n,dpr:r}=e;return hs(`width`,t),hs(`height`,n),hs(`dpr`,r),{width:t,height:n,dpr:r}}function ds(e){if(!$o()?.enabled)return;let t=e.queue;$(t,`writeBuffer`,e=>{let t=e[2],n=typeof e[3]==`number`?e[3]:0,r=e[4],i=typeof r==`number`?r:Math.max(0,(t?.byteLength??0)-n);Q(`writeBufferCalls`),Q(`writeBufferBytes`,i)}),$(t,`submit`,()=>Q(`queueSubmissions`)),$(e,`createBuffer`,()=>Q(`gpuBuffersCreated`)),$(e,`createTexture`,()=>Q(`gpuTexturesCreated`)),$(e,`createShaderModule`,()=>Q(`shaderModulesCreated`)),$(e,`createBindGroup`,()=>Q(`bindGroupsCreated`)),$(e,`createRenderPipeline`,()=>Q(`pipelinesCreated`)),$(e,`createCommandEncoder`,()=>Q(`commandEncodersCreated`))}function $(e,t,n){let r=e,i=r[t];if(typeof i==`function`)try{r[t]=function(...e){return n(e),i.apply(this,e)}}catch{}}function fs(e){return typeof e==`object`&&!!e&&`items`in e}function ps(e){return e.type===`scope`?e.coverageOnly:e.requiredSampleCount===4}function ms(e,t){let n=Math.max(e.x+e.width,t.x+t.width),r=Math.max(e.y+e.height,t.y+t.height);e.x=Math.min(e.x,t.x),e.y=Math.min(e.y,t.y),e.width=n-e.x,e.height=r-e.y}function hs(e,t){if(!Number.isFinite(t)||t<=0)throw new Z(`${e} must be a positive finite number.`)}function gs(e,t){if(!Number.isInteger(t)||t<0)throw new Z(`${e} must be a non-negative integer.`)}function _s(e,t,n=!1){if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.width)||!Number.isFinite(t.height)||(n?t.width<0:t.width<=0)||(n?t.height<0:t.height<=0))throw new Z(`${e} must have finite coordinates and ${n?`non-negative`:`positive`} dimensions.`)}function vs(e,t){if(!e)return{x1:t.x,y1:t.y,x2:t.x+t.width,y2:t.y+t.height,cullX:!1,cullY:!1};let{x1:n,y1:r,x2:i,y2:a,cullX:o,cullY:s}=e;if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||n>i||r>a||typeof o!=`boolean`||typeof s!=`boolean`)throw new Z(`visibleRange must have finite ordered bounds and boolean flags.`);return e}function ys(e,t){if(!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.width)||!Number.isFinite(e.height))throw new Z(`scissor must have finite coordinates and positive dimensions.`);if(e.width<=0||e.height<=0)return{x:e.x,y:e.y,width:0,height:0};let n=Math.max(e.x,t.x),r=Math.max(e.y,t.y),i=Math.min(e.x+e.width,t.x+t.width),a=Math.min(e.y+e.height,t.y+t.height);return{x:n,y:r,width:Math.max(0,i-n),height:Math.max(0,a-r)}}function bs(e,t,n,r){let i=Math.floor(e.x*t),a=Math.floor(e.y*t),o=Math.min(n,Math.ceil((e.x+e.width)*t)),s=Math.min(r,Math.ceil((e.y+e.height)*t));return{x:i,y:a,width:o-i,height:s-a}}var xs=class{#e={revision:0,facetIds:[]};#t={topology:this.#e,geometryRevision:0,rectangles:new Float32Array,overlap:`disjoint`};#n=new Set;#r=!1;getSnapshot(){if(this.#r)throw Error(`Cannot read a disposed placement source.`);return this.#t}replaceTopology(e,t,n=`disjoint`){this.#i(),Ss(t,e.length);let r=Object.freeze({revision:this.#e.revision+1,facetIds:Object.freeze(e.map(e=>e?Object.freeze(Array.from(e)):void 0))});this.#e=r,this.#t=Object.freeze({topology:r,geometryRevision:this.#t.geometryRevision+1,rectangles:_(`placementSourceSnapshot`,()=>(v(`placementSourceSnapshotBytes`,t.byteLength),new Float32Array(t))),overlap:n})}replaceGeometry(e,t=this.#t.overlap){this.#i(),Ss(e,this.#e.facetIds.length),this.#t=Object.freeze({topology:this.#e,geometryRevision:this.#t.geometryRevision+1,rectangles:_(`placementSourceSnapshot`,()=>(v(`placementSourceSnapshotBytes`,e.byteLength),new Float32Array(e))),overlap:t})}onDispose(e){return this.#i(),this.#n.add(e),()=>this.#n.delete(e)}dispose(){if(!this.#r){this.#r=!0;for(let e of this.#n)e();this.#n.clear()}}#i(){if(this.#r)throw Error(`Placement source has been disposed.`)}};function Ss(e,t){if(!(e instanceof Float32Array)||e.length!==t*4)throw Error(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.length;t+=4){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw Error(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}}var Cs=Object.freeze({});function ws(e){return`${e.unitView.getPathString()} [${e.getType()}]`}var Ts=class{#e;#t;#n=!1;#r=new Map;#i=new WeakMap;#a=new Map;#o=new WeakSet;#s;constructor(e){this.options=e,this.canvas=document.createElement(`canvas`),e.container.appendChild(this.canvas),this.#e=new ee(e.container,this.canvas,e.sizeSource,()=>{this.#c()&&e.onCanvasResize()}),this.#c()}async initialize(){this.#t=await cs(this.canvas,{onInvalidate:()=>{this.#t&&this.options.onRenderInvalidated?.()},onDeviceLoss:e=>{if(!this.#n){let t=e.message?`: ${e.message}`:``;this.options.onError?.(Error(`WebGPU device was lost (${e.reason})${t}`))}}}),this.#l()}invalidateSize(){return this.#e.invalidate(),this.#c()}#c(){let e=this.getLogicalCanvasSize(),t=this.#e.getPhysicalCanvasSize(e);return this.#s?.logicalWidth==e.width&&this.#s.logicalHeight==e.height&&this.#s.physicalWidth==t.width&&this.#s.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,this.#s={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},this.#l(),!0)}#l(){!this.#t||!this.#s||this.#s.logicalWidth<=0||this.#s.logicalHeight<=0||this.#t.updateGlobals({width:this.#s.logicalWidth,height:this.#s.logicalHeight,dpr:this.getDevicePixelRatio()})}getLogicalCanvasSize(){return this.#e.getLogicalCanvasSize()}getDevicePixelRatio(){return this.#e.getDevicePixelRatio()}createExportTarget(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=document.createElement(`canvas`);return r.width=Math.ceil(e*n),r.height=Math.ceil(t*n),{handle:this.#t.createDetachedTarget(r,{width:e,height:t,dpr:n}),canvas:r,logicalWidth:e,logicalHeight:t,pixelRatio:n}}renderLayoutToTarget(e,t,n,r){let i=new wo({surface:this,target:{width:t.logicalWidth,height:t.logicalHeight,dpr:t.pixelRatio},markPredicate:r});e.collectRenderCommands(i),i.finish(),t.handle.render({items:i.render(),clearColor:n})}getPlacementSet(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let t=e.getSnapshot(),n=this.#i.get(e);if(!n){let n=this.#t.createPlacementSet({rectangles:t.rectangles}),r={set:n,topologyRevision:t.topology.revision,geometryRevision:t.geometryRevision};return this.#i.set(e,r),e.onDispose(()=>{let t=this.#i.get(e);t&&(t.set.destroy(),this.#i.delete(e))}),n}return(n.topologyRevision!==t.topology.revision||n.geometryRevision!==t.geometryRevision)&&(n.set.replace({rectangles:t.rectangles}),n.topologyRevision=t.topology.revision,n.geometryRevision=t.geometryRevision),n.set}updateOccurrencePlacements(e,t){this.#u(e);let n=this.#a.get(e);if(!n)n=new xs,n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t),this.#a.set(e,n);else{let e=n.getSnapshot();e.rectangles.length===t.length?Es(e.rectangles,t)||n.replaceGeometry(t):n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t)}return n}updateMark(e,t,n,r=Cs){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#u(e);let i=this.#r.get(e);if(!i||i.definition!==t){i&&this.#t.destroyMark(i.handle.markId);let a=this.#t.createMark(t,n,{label:ws(e)});i={definition:t,handle:a,config:n,properties:r,bindings:Ds(a,n,r),series:Fs(n),count:n.count,selections:new Map},this.#r.set(e,i)}let a=0;return i.handle.batchUpdates(()=>{let t=i.config!==n;t&&Ps(i,n)&&(i.series=Fs(n),i.count=n.count,i.handle.series.replace(i.series,i.count),a++),(t||i.properties!==r)&&(i.bindings=Ds(i.handle,n,r,i.bindings),i.config=n,i.properties=r),a+=ks(i.bindings),a+=Ms(i,e)}),a}prepareDraw(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=this.#r.get(e);if(!r)throw Error(`Cannot draw a WebGPU mark before updating it.`);if(t.mark=r.handle,n){if(!t.placement)throw Error(`Placement source requires a materialized draw placement.`);t.placement.set=this.getPlacementSet(n)}}render(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.render({items:e,...t?{clearColor:t}:{}})}renderPicking(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.renderPicking({draws:e})}pick(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);return this.#t.pick(e,t)}finalize(){if(!this.#n){this.#n=!0;for(let e of this.#a.values())e.dispose();this.#t?.destroy(),this.#t=void 0,this.#r.clear(),this.#i=new WeakMap,this.#a.clear(),this.#o=new WeakSet,this.#e.finalize(),this.canvas.remove()}}#u(e){this.#o.has(e)||(this.#o.add(e),e.unitView?.registerDisposer?.(()=>this.#d(e)))}#d(e){let t=this.#r.get(e);t&&(this.#t?.destroyMark(t.handle.markId),this.#r.delete(e));let n=this.#a.get(e);n&&(n.dispose(),this.#a.delete(e))}};function Es(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ds(e,t,n,r=[]){let i=new Map(r.map(e=>[e.key,e.value])),a=[],o=(e,t,n,r=!1)=>{a.push({key:e,read:t,write:n,value:i.has(e)?i.get(e):As(t()),skipUndefined:r})};for(let[n,r]of Object.entries(t.channels)){Os(o,`channel:${n}:default`,e.scales[n]?.default,e.values[n]?.default,r);for(let t of r.conditions??[]){if(!t.channel)continue;let r=t.when.selection;Os(o,`channel:${n}:condition:${r}`,e.scales[n]?.conditions?.[t.when.selection],e.values[n]?.conditions?.[t.when.selection],t.channel)}}for(let[t,r]of Object.entries(n)){let n=e.properties?.[t];if(!n)throw Error(`Renderer mark has no property slot "${t}".`);o(`property:${t}`,()=>r.value,e=>n.set(e))}for(let[n,r]of Object.entries(t.scalarSlots??{})){let t=e.scalarSlots?.[n];t&&o(`scalar:${n}`,()=>r.value,e=>t.set(e))}return a}function Os(e,t,n,r,i){n&&i.scale&&(`domain`in i.scale&&e(t+`:domain`,()=>i.scale.domain,e=>n.setDomain(e),!0),`range`in i.scale&&e(t+`:range`,()=>i.scale.range,e=>n.setRange(e),!0)),r&&`value`in i&&e(t+`:value`,()=>i.value,e=>r.set(e),!0)}function ks(e){let t=0;for(let n of e){let e=n.read();n.skipUndefined&&e===void 0||js(n.value,e)||(n.write(e),t++,n.value=As(e))}return t}function As(e){return Array.isArray(e)?e.map(As):e}function js(e,t){return e===t?!0:Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every((e,n)=>js(e,t[n])):!1}function Ms(e,t){let n=t.unitView?.paramRuntime;if(!n)return 0;let r=0;for(let[t,i]of Object.entries(e.handle.selections??{})){let a=n.findValue(t);if(a){if(i.type==`single`){let n=a.uniqueId??0;e.selections.get(t)!==n&&(i.set(n),r++,e.selections.set(t,n))}else if(i.type==`multi`){let n=Uint32Array.from(a.data.keys());Ns(e.selections.get(t),n)||(i.set(n),r++,e.selections.set(t,n))}else if(i.type==`interval`){let n=e.selections.get(t);if(!n||n.type!=`interval`){let r={};for(let e of i.targets)r[e]=null;n={type:`interval`,intervals:r},e.selections.set(t,n)}let o=!1;for(let e of i.targets){let t=a.intervals?.[e]??null,r=n.intervals[e];(t==null?r!=null:r==null||r[0]!=t[0]||r[1]!=t[1])&&(n.intervals[e]=t?[t[0],t[1]]:null,o=!0)}o&&(i.set(n.intervals),r++)}}}return r}function Ns(e,t){return!(e instanceof Uint32Array)||e.length!=t.length?!1:e.every((e,n)=>e==t[n])}function Ps(e,t){if(e.count!=t.count)return!0;for(let[n,r]of Object.entries(t.channels)){let t=Ls(r);if(t!==void 0&&e.series[n]!==t)return!0}for(let[n,r]of Object.entries(t.inputs??{}))if(e.series[n]!==r.data)return!0;return!!(t.placementIndex?.data&&e.series.__placementIndex!==t.placementIndex.data)}function Fs(e){let t={};for(let[n,r]of Object.entries(e.channels)){let e=Ls(r);e!==void 0&&(t[n]=e)}for(let[n,r]of Object.entries(e.inputs??{}))t[n]=r.data;return e.placementIndex?.data&&(t.__placementIndex=e.placementIndex.data),t}function Is(e){if(e){if(ArrayBuffer.isView(e.data)||Array.isArray(e.data))return e.data;if(typeof e.value==`string`)return e.value}}function Ls(e){let t=Is(e);if(t!==void 0)return t;for(let t of e.conditions??[]){if(!t.channel)continue;let e=Is(t.channel);if(e!==void 0)return e}}async function Rs(e,t){let n=t.mimeType??`image/png`;if(n!=`image/png`)throw Error(`Unsupported raster export MIME type: ${n}`);let r=e.getLogicalCanvasSize(),i=t.logicalWidth??r.width,a=t.logicalHeight??r.height,o=t.pixelRatio??e.getDevicePixelRatio(),s=Bs(e,i,a,o);try{let r=Vs(t.viewRoot,i,a,o);return e.renderLayoutToTarget(r,s,Ho(t.clearColor)),await s.handle.onSubmittedWorkDone(),Hs(s.canvas,n)}finally{s.handle.destroy()}}async function zs(e,t){let n=Bs(e,t.logicalWidth,t.logicalHeight,t.pixelRatio);try{let r=document.createElement(`canvas`),i=r.getContext(`2d`);if(!i)throw new f(`Unable to initialize a WebGPU SVG crop context.`);let a=t.layoutResult&&t.pixelRatio==1?t.layoutResult:Vs(t.viewRoot,t.logicalWidth,t.logicalHeight,t.pixelRatio);for(let o of t.runs){e.renderLayoutToTarget(a,n,Vo,e=>o.marks.has(e)),await n.handle.onSubmittedWorkDone();let s=ne(o.bounds,t.pixelRatio,n.canvas.width,n.canvas.height);r.width=s.width,r.height=s.height,i.resetTransform(),i.clearRect(0,0,s.width,s.height),i.drawImage(n.canvas,s.x,s.y,s.width,s.height,0,0,s.width,s.height),te(o,s,t.pixelRatio,r.toDataURL(`image/png`))}}finally{n.handle.destroy()}}function Bs(e,t,n,r){try{return e.createExportTarget(t,n,r)}catch(e){throw new f(`Unable to initialize a detached WebGPU export target.`,{cause:e})}}function Vs(e,t,n,r){return h(e,p.create(0,0,t,n),{devicePixelRatio:r,renderingOptions:{firstFacet:!0}})}function Hs(e,t){return new Promise((n,r)=>{e.toBlob(e=>{e?n(e):r(Error(`WebGPU could not encode the raster export.`))},t)})}async function Us(e){let t=new Ts(e);try{await t.initialize()}catch(e){throw t.finalize(),e}let n=Promise.resolve(),r=e=>{let t=n.then(e);return n=t.catch(()=>{}),t};return{surface:t,glHelper:void 0,defaultFontBitmapUrl:re,createRenderCoordinator:e=>new Uo({...e,surface:t}),readPickingId:(e,n)=>t.pick(e,n),exportCanvas:()=>{throw Error(`Synchronous canvas export is unavailable with WebGPU. Use imageExport.raster() instead.`)},exportRaster:e=>r(()=>Rs(t,e)),rasterizeSvgRuns:e=>r(()=>zs(t,e))}}export{Us as createWebGpuRenderingBackend};