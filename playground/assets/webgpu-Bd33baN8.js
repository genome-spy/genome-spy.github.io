import{A as e,Ot as t,Sn as n,St as r,a as i,b as a,d as o,fn as s,mn as c,o as l,pt as u,s as d}from"./clipOptions-DzGYrai0.js";import{k as f}from"./vega-scale-DpTUb9Jq.js";import{n as p}from"./indexLikeDomainUtils-CtCqYOrV.js";import{t as m}from"./rasterization-CNVl9Z6z.js";import{t as h}from"./rectangle-CAPGOw2x.js";import{n as g,t as _}from"./layoutResult-BbpHOHQN.js";import{n as v,r as y,t as b}from"./performanceProfiler-t6gLo5-8.js";import{f as x,h as S,o as C,t as w}from"./nativeTextMetrics-CMFH1t6T.js";import{n as T,r as E,t as D}from"./markXIndex-045cFIth.js";import{t as O}from"./canvasSizeHelper-CKNOir0P.js";import{n as ee,t as te}from"./rasterImage-CSBco7OJ.js";import{t as ne}from"./renderingConstants-r_jqp-Og.js";var re=4096,ie=4294967295;function ae(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`High-precision values must be non-negative safe integers.`);let t=e%re,n=(e-t)/re;if(n>ie)throw Error(`High-precision value exceeds the supported range for packed u32.`);return[n>>>0,t>>>0]}function oe(e){if(!Number.isFinite(e)||e<0)throw Error(`High-precision domain values must be finite and non-negative.`);let t=e%re;return[e-t,t]}function se(e){let[t,n]=ae(e);return new Uint32Array([t,n])}function ce(e){let t=new Uint32Array(e.length*2);for(let n=0;n<e.length;n+=1){let[r,i]=ae(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function le(e,t){let n=e.length*2;if(t.length!==n)throw Error(`Packed target length (${t.length}) does not match ${n}.`);for(let n=0;n<e.length;n+=1){let[r,i]=ae(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function ue(e,t){let[n,r]=oe(e);return[n,r,Number(t)-Number(e)]}function k(e){return!!e&&`data`in e&&e.data!=null}function A(e){return!!e&&`value`in e&&e.value!=null}function de(e){let t=new Map,n=0;for(let r of e){let e=r.arrayLength!=null,i=e?16:r.components===1?4:r.components===2?8:16,a=e?16*r.arrayLength:r.components===1?4:r.components===2?8:16,o=e?16:void 0;n=fe(n,i),t.set(r.name,{...r,offset:n,stride:o}),n+=a}return{entries:t,byteLength:fe(n,16)}}function fe(e,t){return Math.ceil(e/t)*t}var pe=class{constructor(e){let t=de(e);this.entries=t.entries,this.byteLength=t.byteLength,this.data=new ArrayBuffer(this.byteLength),this.view=new DataView(this.data)}setValue(e,t){let n=this.entries.get(e);if(!n)return;if(n.arrayLength!=null){if(!(Array.isArray(t)||ArrayBuffer.isView(t)))throw Error(`Uniform "${e}" expects an array value`);let r=t;if(r.length!==n.arrayLength)throw Error(`Uniform "${e}" expects ${n.arrayLength} elements`);let i=n.stride??16;for(let e=0;e<n.arrayLength;e++){let t=r[e],a=n.offset+e*i;this._writeElement(n,a,t)}return}let r=n.components;if(Array.isArray(t)||ArrayBuffer.isView(t)){let i=t;if(i.length!==r)throw Error(`Uniform "${e}" expects ${r} components`);for(let t=0;t<r;t++){let a=i[t];if(typeof a!=`number`)throw Error(`Uniform "${e}" expects ${r} components`);this._writeScalar(n,n.offset+t*4,a??0)}}else{if(r!==1)throw Error(`Uniform "${e}" expects ${r} components`);let i=t;this._writeScalar(n,n.offset,i??0);for(let e=1;e<r;e++)this._writeScalar(n,n.offset+e*4,0)}}_writeElement(e,t,n){if(e.components===1){if(typeof n!=`number`)throw Error(`Uniform "${e.name}" expects scalar elements`);this._writeScalar(e,t,n);return}if(!Array.isArray(n)||n.length!==e.components)throw Error(`Uniform "${e.name}" expects ${e.components} components`);for(let r=0;r<e.components;r++)this._writeScalar(e,t+r*4,n[r]??0)}_writeScalar(e,t,n){e.type===`u32`?this.view.setUint32(t,n>>>0,!0):e.type===`i32`?this.view.setInt32(t,n|0,!0):this.view.setFloat32(t,n??0,!0)}};function me(e,t,n=new Map){let r=new Map,i=new Map,a=0,o=0,s=0;for(let[c,l]of Object.entries(e)){if(!k(l))continue;let e=l.type??t[c]?.type;if(!e)throw Error(`Missing type for series channel "${c}".`);if(e!==`f32`&&e!==`u32`&&e!==`i32`)throw Error(`Packed series only supports f32/u32/i32 channels. "${c}" is ${e}.`);let u=l.inputComponents??l.components??1;if(u!==1&&u!==2&&u!==4)throw Error(`Packed series only supports 1, 2, or 4 components. "${c}" is ${u}.`);let d=n.get(c)??c,f=i.get(d);if(f){if(f.scalarType!==e||f.components!==u)throw Error(`Packed alias "${d}" must keep type/components consistent.`);r.set(c,f);continue}let p={name:c,scalarType:e,components:u,offset:e===`f32`?a:e===`u32`?o:s,stride:0};r.set(c,p),i.set(d,p),e===`f32`?a+=u:e===`u32`?o+=u:s+=u}for(let e of r.values())e.stride=e.scalarType===`f32`?a:e.scalarType===`u32`?o:s;return{entries:r,f32Stride:a,u32Stride:o,i32Stride:s}}function he({channels:e,channelSpecs:t,layout:n,count:r}){let i=n.f32Stride>0?new Float32Array(r*n.f32Stride):null,a=n.u32Stride>0?new Uint32Array(r*n.u32Stride):null,o=n.i32Stride>0?new Int32Array(r*n.i32Stride):null,s=new Set;for(let t of n.entries.values()){if(s.has(t))continue;s.add(t);let n=e[t.name];if(!n||!k(n))throw Error(`Missing series data for "${t.name}".`);let c=n.inputComponents??n.components??t.components,l=r*c,u=n.data;if(!u)throw Error(`Missing data for "${t.name}".`);let d=n.scale?.type??`identity`;if(t.scalarType===`u32`&&d===`index`&&u instanceof Float64Array){if(c!==2)throw Error(`Channel "${t.name}" requires inputComponents: 2 when providing Float64Array data.`);let e=new Uint32Array(u.length*2);le(u,e),u=e}if(t.scalarType===`f32`&&!(u instanceof Float32Array))throw Error(`Channel "${t.name}" expects a Float32Array for f32 data`);if(t.scalarType===`u32`&&!(u instanceof Uint32Array))throw Error(`Channel "${t.name}" expects a Uint32Array for u32 data`);if(t.scalarType===`i32`&&!(u instanceof Int32Array))throw Error(`Channel "${t.name}" expects an Int32Array for i32 data`);if(u.length<l)throw Error(`Channel "${t.name}" length (${u.length}) is less than count (${r}).`);let f=t.scalarType===`f32`?i:t.scalarType===`u32`?a:o;if(f)for(let e=0;e<r;e++){let n=e*t.stride+t.offset,r=e*c;for(let e=0;e<t.components;e++)f[n+e]=u[r+e]}}return{f32:i,u32:a,i32:o}}var ge=(globalThis.GPUTextureUsage?.TEXTURE_BINDING??0)|(globalThis.GPUTextureUsage?.COPY_DST??0);function _e(e){let t=be(e.format),n=e.width*t,r=xe(n,256);if(r===n)return{...e,bytesPerRow:r};let i=Math.max(1,e.height),a=new Uint8Array(r*i),o=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);for(let e=0;e<i;e++){let t=e*n,i=e*r;a.set(o.subarray(t,t+n),i)}return{...e,data:a,bytesPerRow:r}}function ve(e,t,n=ge,r){let i=e.createTexture({label:r,size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:t.format,usage:n});return ye(e,i,t),i}function ye(e,t,n){let r=_e(n);e.queue.writeTexture({texture:t},j(r.data),{bytesPerRow:r.bytesPerRow,rowsPerImage:r.height},{width:r.width,height:r.height,depthOrArrayLayers:1})}function j(e){return e}function be(e){switch(e){case`r8uint`:return 1;case`r32float`:return 4;case`rg32float`:return 8;case`rgba8unorm`:case`rgba8unorm-srgb`:return 4;case`rgba16float`:return 8;default:return 4}}function xe(e,t){return Math.ceil(e/t)*t}var M=`webgpu-renderer`;function N(e,t){return e+`: `+t}var Se=class{constructor(e,t,n,r=`mark`){this._device=e,this._channels=t,this._channelSpecs=n,this._label=r,this._seriesBufferAliases=new Map,this._packedSeriesLayout=null,this._packedBuffers=new Map,this._initializeSeriesAliases()}get packedSeriesLayoutEntries(){return this._getPackedLayout()?.entries??null}getPackedSeriesInfo(){let e=this._getPackedLayout();if(!e)return new Map;let t=new Map;for(let[n,r]of e.entries){let e=r.scalarType===`f32`?`seriesF32`:r.scalarType===`u32`?`seriesU32`:`seriesI32`,i=this._seriesBufferAliases.get(n)??n,a=t.get(e);a||(a={stride:r.stride,channels:[]},t.set(e,a)),a.channels.push({name:n,alias:i,offset:r.offset,components:r.components,stride:r.stride})}return t}getBuffer(e){let t=this._packedBuffers.get(e);return t?t.buffer:null}inferCount(e){let t=null,n=!1;for(let[r,i]of Object.entries(this._channels)){if(!k(i))continue;n=!0;let a=e?.[r]??i.data;if(!a)throw Error(`Missing data for channel "${r}"`);let o=i.inputComponents??i.components??1,s=(i.scale?.type??`identity`)===`index`&&a instanceof Float64Array&&o===2?1:o;if(s<=0)throw Error(`Invalid input component count for "${r}"`);if(a.length%s!==0)throw Error(`Channel "${r}" length (${a.length}) must be divisible by ${s}.`);let c=a.length/s;if(t===null)t=c;else if(c!==t)throw Error(`Channel "${r}" count (${c}) does not match inferred count (${t}).`)}return n?t??0:null}_initializeSeriesAliases(){this._seriesBufferAliases.clear();let e=new Map;for(let[t,n]of Object.entries(this._channels)){if(!k(n))continue;let r=n.data;if(!r)continue;let i=e.get(r);i||(i=t,e.set(r,i)),this._seriesBufferAliases.set(t,i)}}updateSeries(e,t){return this._updatePackedSeries(e,t)}_updatePackedSeries(e,t){let n=this._getPackedLayout();if(!n)return!1;let r=new Map;for(let[t,n]of Object.entries(this._channels)){if(!k(n))continue;let i=e[t]??n.data;if(!i)throw Error(`Missing data for channel "${t}"`);let a=this._seriesBufferAliases.get(t)??t,o=r.get(a);if(o&&o!==i){let e=this._getAliasMembers(a);throw Error(`Series channels ${e.map(e=>`"${e}"`).join(`, `)} must share the same buffer.`)}r.set(a,i),n.data=i}let{f32:i,u32:a,i32:o}=he({channels:this._channels,channelSpecs:this._channelSpecs,layout:n,count:t}),s=!1;return i&&(s=this._ensurePackedBuffer(`seriesF32`,i)||s),a&&(s=this._ensurePackedBuffer(`seriesU32`,a)||s),o&&(s=this._ensurePackedBuffer(`seriesI32`,o)||s),s}_getPackedLayout(){if(!this._packedSeriesLayout){let e=me(this._channels,this._channelSpecs,this._seriesBufferAliases);this._packedSeriesLayout=e}return this._packedSeriesLayout}_getAliasMembers(e){let t=[];for(let[n,r]of this._seriesBufferAliases.entries())r===e&&t.push(n);return t.length>0?t:[e]}_ensurePackedBuffer(e,t){let n=this._packedBuffers.get(e),r=Math.max(4,t.byteLength),i=n?.buffer??null,a=!i||n.byteLength<r;if(a){let t=i;i=this._device.createBuffer({label:N(this._label,`series `+e.slice(6).toLowerCase()),size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._packedBuffers.set(e,{buffer:i,byteLength:r}),t?.destroy()}return t.byteLength>0&&this._device.queue.writeBuffer(i,0,j(t)),a}destroy(){for(let{buffer:e}of this._packedBuffers.values())e.destroy();this._packedBuffers.clear()}};function Ce({device:e,label:t=`mark`,layout:n,uniformBuffer:r,resourceLayout:i,getSeriesBuffer:a,getScaleResources:o,extraTextures:s,extraBuffers:c}){let l=[{binding:0,resource:{buffer:r}}],u=1;for(let e of i){if(e.role===`series`){let t=a(e.name);if(!t)throw Error(`Missing buffer binding for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}let n=o(e.name);if(e.role===`ordinalRange`){let t=n?.ordinalRange?.buffer;if(!t)throw Error(`Missing buffer binding for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}if(e.role===`domainMap`){let t=n?.domainMap?.buffer;if(!t)throw Error(`Missing domain map buffer for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}if(e.role===`rangeTexture`){let r=n?.rangeTexture?.texture;if(!r)throw Error(`Missing range texture for "${e.name}".`);l.push({binding:u++,resource:r.createView({label:N(t,`scale ${e.name} range texture view`)})});continue}if(e.role===`rangeSampler`){let t=n?.rangeTexture?.sampler;if(!t)throw Error(`Missing range sampler for "${e.name}".`);l.push({binding:u++,resource:t});continue}if(e.role===`extraTexture`){let n=s.get(e.name)?.texture;if(!n)throw Error(`Missing extra texture for "${e.name}".`);l.push({binding:u++,resource:n.createView({label:N(t,`${e.name} texture view`)})});continue}if(e.role===`extraSampler`){let t=s.get(e.name)?.sampler;if(!t)throw Error(`Missing extra sampler for "${e.name}".`);l.push({binding:u++,resource:t});continue}if(e.role===`extraBuffer`){let t=c.get(e.name)??null;if(!t)throw Error(`Missing extra buffer for "${e.name}".`);l.push({binding:u++,resource:{buffer:t}});continue}throw Error(`Unknown resource binding role "${e.role}".`)}return e.createBindGroup({label:N(t,`bind group`),layout:n,entries:l})}var P=`uDomain_`,F=`uRange_`,we=`uRangeCount_`,Te=`domainMap_`,Ee=`uDomainMapCount_`,De=`uRangeTexture_`,Oe=`uRangeSampler_`,ke=`getScaled_`,Ae=`uScaleBase_`,je=`uScaleExponent_`,Me=`uScaleConstant_`,Ne=`uScalePaddingInner_`,Pe=`uScalePaddingOuter_`,Fe=`uScaleAlign_`,Ie=`uScaleBand_`,Le=`uSelection_`,Re=`uSelectionCount_`,ze=`selection_`,Be=`checkSelection_`,Ve=`isSelectionEmpty_`;function He(e,t){return`${Le}${e}_${t}_active`}function Ue(e,t){return`${Le}${e}_${t}`}function We(e,t){return t===`f32`?e:`f32(${e})`}function Ge(e){return e.replace(/^\n/,``).replace(/\n\s*$/,``)}function Ke(e,t){let n=Ge(t),r=e.body?`${e.body}\n${n}`:n;return{...e,body:r}}function qe(e,t){return`
    let unitValue = clamp(${t}, 0.0, 1.0);
    let rgb = getInterpolatedColor(${`${De}${e}`}, ${`${Oe}${e}`}, unitValue);
    return vec4<f32>(rgb, 1.0);
`}function Je(e){let t={expr:e.rawValueExpr,body:``};for(let n of e.steps)t=n(t);let n=t.body?Ge(t.body):``,r=e.functionName??e.name,i=Ge(e.useRangeTexture?qe(e.name,t.expr):`
    return ${t.expr};
`),a=n?`${n}\n${i}`:i;return`fn ${ke}${r}(i: u32) -> ${e.returnType} {
${a}
}`}function Ye(e){return t=>({...t,expr:We(t.expr,e)})}function Xe(e){return t=>({...t,expr:`clampToDomain(${t.expr}, ${e})`})}function Ze(e,t){return n=>({...n,expr:t({name:e,valueExpr:n.expr})})}function Qe(){return e=>({...e,expr:`roundLikeD3(${e.expr})`})}function $e({name:e,domainLength:t,outputComponents:n,outputScalarType:r,useRangeTexture:i}){let a=i||n===1?r:`vec4<f32>`,o=e=>i||n===1?`${e}.x`:e;return n=>({...Ke(n,`
    const DOMAIN_LEN: u32 = ${t}u;
    let value = ${n.expr};
    let descending = params.${P}${e}[DOMAIN_LEN - 1u].x <
        params.${P}${e}[0u].x;
    var slot: u32 = 0u;
    for (var i: u32 = 1u; i + 1u < DOMAIN_LEN; i = i + 1u) {
        let stop = params.${P}${e}[i].x;
        if (select(value >= stop, value <= stop, descending)) {
            slot = i;
        }
    }
    let d0 = params.${P}${e}[slot].x;
    let d1 = params.${P}${e}[slot + 1u].x;
    let denom = d1 - d0;
    var t = select(0.5, (value - d0) / denom, denom != 0.0);
    let r0: ${a} = ${o(`params.${F}${e}[slot]`)};
    let r1: ${a} = ${o(`params.${F}${e}[slot + 1u]`)};
    let unit = mix(r0, r1, t);
`),expr:`unit`})}function et({name:e,domainLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${F}${e}[slot].x`:`params.${F}${e}[slot]`;return n=>({...Ke(n,`
    let value = ${n.expr};
    const DOMAIN_LEN: u32 = ${t}u;
    var slot: u32 = 0u;
    for (var i: u32 = 0u; i < DOMAIN_LEN; i = i + 1u) {
        if (value >= params.${P}${e}[i].x) {
            slot = i + 1u;
        }
    }
    let out: ${i} = ${a};
`),expr:`out`})}function tt({name:e,rangeLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${F}${e}[slot].x`:`params.${F}${e}[slot]`;return n=>({...Ke(n,`
    let value = ${n.expr};
    let d0 = params.${P}${e}[0u].x;
    let d1 = params.${P}${e}[1u].x;
    let denom = d1 - d0;
    var t = select(0.0, (value - d0) / denom, denom != 0.0);
    t = clamp(t, 0.0, 1.0);
    const RANGE_LEN: u32 = ${t}u;
    let slot = min(RANGE_LEN - 1u, u32(floor(t * f32(RANGE_LEN))));
    let out: ${i} = ${a};
`),expr:`out`})}function nt(e,t,n=e){return`fn ${ke}${n}(i: u32) -> ${t}`}function rt(e){return`readPacked2(params.${P}${e})`}function it(e){return`readPacked3(params.${P}${e})`}function I(e){return`readPacked2(params.${F}${e})`}function at(e,t){return t===`u32`?e:`u32(f32(${e}))`}function ot({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,clamp:i,round:a,useRangeTexture:o},s){let c=[];return r!==`f32`&&c.push(Ye(r)),i&&c.push(Xe(rt(e))),c.push(Ze(e,s)),a&&!o&&c.push(Qe()),Je({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:o?`vec4<f32>`:`f32`,useRangeTexture:o})}var st={type:`identity`,input:`any`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:null,needsDomainMap:!1,needsOrdinalRange:!1},emit:ct};Object.freeze(st);function ct({name:e,functionName:t,rawValueExpr:n,outputComponents:r,outputScalarType:i}){return`${nt(e,r===1?i:`vec${r}<f32>`,t)} { return ${n}; }`}function lt(e){if(!e||e.type==`identity`)return st;if(!e.definition)throw Error(`Scale "${e.type}" has no definition. Import and use its scale factory.`);return e.definition}function ut(e){return lt(e).type}function dt(e,t){let n=e.resources;return{stopKind:n.stopKind&&n.supportsPiecewise&&t?`piecewise`:n.stopKind,needsDomainMap:!!n.needsDomainMap,needsOrdinalRange:!!n.needsOrdinalRange}}function ft(e){return{stopArrays:e.resources.stopKind!==null,params:e.params}}function pt(e,t){return e.output===`same`?t:`f32`}function mt(e,t){let n=typeof e==`function`||Array.isArray(e)?{scheme:e}:e;if(n.count===void 0&&t!==void 0&&(n.count=t),typeof n.scheme==`function`)return _t(n.scheme,n);if(Array.isArray(n.scheme))return n.mode===`interpolate`||n.interpolate?ht(n.scheme,n):gt(n.scheme,n.count)}function ht(e,t={}){return _t(bt(e,t.interpolate),t)}function gt(e,t){return vt(e.map(yt),t)}function _t(e,{extent:t=[0,1],reverse:n=!1,count:r=256}={}){let i=t[0],a=t[t.length-1]-i,o=a===0?1:a,s=Array(r);for(let t=0;t<r;t++)s[t]=e(i+(r>1?t/(r-1):0)/o);return n&&s.reverse(),vt(s)}function vt(e,t){let n=Math.max(e.length,t||0),r=new Uint8Array(n*4);for(let t=0;t<n;t++){let n=e[t%e.length],i=o(n);if(!i)throw Error(`Invalid color "${n}" in the scheme ${JSON.stringify(e)}!`);let a=i.rgb(),s=t*4;r[s]=a.r,r[s+1]=a.g,r[s+2]=a.b,r[s+3]=255}return{data:r,format:`rgba8unorm`,width:n,height:1}}function yt(e){if(typeof e==`string`)return e;if(!Array.isArray(e))throw Error(`Invalid color stop: ${String(e)}`);let[t=0,n=0,r=0,i=1]=e,a=Math.max(t,n,r,i),o=a<=1?255:1,s=a<=1?i:i/255;return`rgba(${t*o}, ${n*o}, ${r*o}, ${s})`}function bt(e,t){let n=e.map(yt),r=t??f,i=n.slice(0,-1).map((e,t)=>r(e,n[t+1]));return e=>{let t=e*i.length,n=Math.max(0,Math.min(i.length-1,Math.floor(t)));return i[n](t-n)}}function xt(e){let t=o(e).rgb();return[t.r,t.g,t.b].map(e=>e/255)}function St(e){if(!e||!lt(e).resources.supportsPiecewise)return!1;let t=Array.isArray(e.domain)?e.domain.length:0,n=Array.isArray(e.range)?e.range.length:0;return t>2||n>2}var Ct={continuous:{label:`Continuous`,getLengths:()=>({domainLength:2,rangeLength:2}),normalizeStops:({name:e,scale:t,getDefaultScaleRange:n,domainLength:r,rangeLength:i})=>{let a=Array.isArray(t.domain)?t.domain:[0,1],o=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof o[0]!=`number`||typeof o[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let s=o;return{domain:[a[0]??0,a[1]??1],range:[s[0]??0,s[1]??1],domainLength:r,rangeLength:i}}},threshold:{label:`Threshold`,getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length===0)throw Error(`Threshold scale on "${e}" must define a non-empty domain.`);if(r.length<2)throw Error(`Threshold scale on "${e}" must define at least two range entries.`);if(r.length!==n.length+1)throw Error(`Threshold scale on "${e}" requires range length of ${n.length+1}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}},normalizeStops:({name:e,scale:t,channel:n,domainLength:r,rangeLength:i})=>({domain:t.domain??[],range:Et(e,t.range,n.components??1,`threshold`),domainLength:r,rangeLength:i})},piecewise:{label:`Piecewise`,getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length<2)throw Error(`Piecewise scale on "${e}" must define at least two domain entries.`);if(r.length<2)throw Error(`Piecewise scale on "${e}" must define at least two range entries.`);if(r.length!==n.length)throw Error(`Piecewise scale on "${e}" requires range length of ${n.length}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}},normalizeStops:({name:e,scale:t,channel:n,domainLength:r,rangeLength:i})=>({domain:t.domain??[],range:Et(e,t.range,n.components??1,`piecewise`),domainLength:r,rangeLength:i})}};function wt(e){return Ct[e]}function Tt(e,t,n){let r=lt(n);if(r.getStopLengths){let i=r.getStopLengths({name:e,kind:t,scale:n});if(i)return i}return wt(t).getLengths({name:e,scale:n})}function Et(e,t,n,r){let i=r===`threshold`?`Threshold`:`Piecewise`;if(!Array.isArray(t)||t.length<2)throw Error(`${i} scale on "${e}" must define at least two range entries.`);return t.map(t=>Dt(e,t,n,i))}function Dt(e,t,n,r){if(n===1){if(typeof t==`number`)return t;throw Error(`${r} scale on "${e}" expects numeric range values.`)}if(Array.isArray(t)){if(t.length===4)return t;if(t.length===3)return[...t,1]}if(typeof t==`string`)return[...xt(t),1];throw Error(`${r} scale on "${e}" expects vec4 range values or CSS colors.`)}function Ot(e,t,n){if(!Array.isArray(t)||t.length===0)throw Error(`Ordinal scale on "${e}" must define at least one range entry.`);return t.map(t=>Dt(e,t,n,`Ordinal`))}function kt(e){return!Array.isArray(e)||e.length===0?!1:e.every(e=>typeof e==`string`||Array.isArray(e)&&(e.length===3||e.length===4))}function At(e){if(e<=0)return[];if(e===1)return[0];let t=e-1,n=Array(e);for(let r=0;r<e;r++)n[r]=r/t;return n}function jt(e){return typeof e==`function`}function Mt(e,t){if(!e)return!1;let n=lt(e),r=jt(e.range),i=kt(e.range);return!(r||e.interpolate!==void 0||i)||t!==4?!1:n.continuous}var Nt=4294967295,Pt=4294967295;function Ft(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function It(e,t){let n=[];for(let t of e)n.push([t,1]);return Lt(n,t)}function Lt(e,t={}){let n=Array.from(e),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??zt(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a*2);for(let e=0;e<a;e+=1)o[e*2]=Nt;let s=a-1;for(let[e,t]of n){let n=Rt(e,`key`);if(n===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let r=Rt(t,`value`),i=Ft(n)&s,c=!1;for(let e=0;e<a;e+=1){let e=i*2,t=o[e];if(t===4294967295||t===n){o[e]=n,o[e+1]=r,c=!0;break}i=i+1&s}if(!c)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Rt(e,t){if(!Number.isSafeInteger(e)||e<0||e>Pt)throw Error(`${t} must be a non-negative u32.`);return e>>>0}function zt(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}var Bt=class{constructor({device:e,channels:t,analysisByChannel:n,label:r=`mark`,getDefaultScaleRange:i,setUniformValue:a}){this._device=e,this._channels=t,this._label=r,this._getDefaultScaleRange=i,this._setUniformValue=a,this._analysisByChannel=n,this._channelResources=new Map,this._scaleUpdaters=new Map}_getAnalysis(e){let t=this._analysisByChannel.get(e);if(!t)throw Error(`Missing channel analysis for "${e}".`);return t}getChannelResources(e){return this._channelResources.get(e)}_ensureChannelResources(e){let t=this._channelResources.get(e);return t||(t={},this._channelResources.set(e,t)),t}_getScaleStopInfo(e){return this._channelResources.get(e)?.scaleStops}addScaleUniforms(e,t,n){let r=this._getAnalysis(t),i=dt(r.scaleDef,r.isPiecewise),a=i.stopKind;if(a){let{domainLength:i,rangeLength:o}=Tt(t,a,n.scale),s=r.outputComponents,c=r.useRangeTexture,l=s===1?r.outputScalarType:`f32`,u=c?1:s,d=c?`f32`:l;e.push({name:P+t,type:`f32`,components:1,arrayLength:i}),e.push({name:F+t,type:d,components:u,arrayLength:o})}let o=ft(r.scaleDef);for(let n of o.params)e.push({name:`${n.prefix}${t}`,type:`f32`,components:1});i.needsOrdinalRange&&e.push({name:we+t,type:`f32`,components:1}),i.needsDomainMap&&e.push({name:Ee+t,type:`f32`,components:1})}initializeScale(e,t,n){let r=this._getAnalysis(e),i=dt(r.scaleDef,r.isPiecewise),a=i.stopKind;if(a){let{domainLength:t,rangeLength:i}=Tt(e,a,n);this._ensureChannelResources(e).scaleStops={kind:a,domainLength:t,rangeLength:i},r.useRangeTexture&&i&&this._setUniformValue(F+e,At(i))}let o=ft(r.scaleDef);for(let t of o.params){let r=t.defaultValue;t.prop&&n[t.prop]!==void 0&&(r=n[t.prop]),this._setUniformValue(`${t.prefix}${e}`,r)}this._registerScaleUpdaters(e,t,n,r,i,a)}getScaleUpdater(e){let t=this._scaleUpdaters.get(e);if(!t)throw Error(`Missing scale updater for "${e}".`);return t}_registerScaleUpdaters(e,t,n,r,i,a){this._scaleUpdaters.set(e,this._buildScaleUpdater({name:e,channel:t,scale:n,analysis:r,requirements:i,kind:a}))}_buildScaleUpdater({name:e,channel:t,scale:n,analysis:r,requirements:i,kind:a}){let o=r.useRangeTexture,s=i.needsDomainMap,c=i.needsOrdinalRange,l=r.scaleDef,u=a,d=u?this._getScaleStopInfo(e):void 0,f=P+e,p=F+e,m=u===`continuous`?this._getDefaultScaleRange(e):void 0,h=r.outputComponents??1,g=h===1?r.outputScalarType:`f32`,_=t.scale?.interpolate,v=(e,t)=>{if(Array.isArray(e)||ArrayBuffer.isView(e))return e;throw Error(t)},y=e=>{if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(typeof e[t]!=`number`)return!1;return!0},b=s?t=>{if(!l.normalizeDomainMap)throw Error(`Scale "${r.scaleType}" does not provide domain map normalization.`);if(!Array.isArray(t)&&!ArrayBuffer.isView(t))throw Error(`Scale on "${e}" requires an explicit domain array.`);let i=t,a=l.normalizeDomainMap({name:e,scale:n,domain:i});return a?{needsRebind:this._updateDomainMap(e,a.domainMap),domainUniform:a.domainUniform}:{needsRebind:!1}}:null,x=null,S=null;if(u)if(u===`continuous`){let t=d?.domainLength??2,r=l.normalizeDomain??(({name:e,domain:t,domainLength:n})=>{let r=v(t,`Scale on "${e}" expects a domain array.`);if(n&&r.length!==n)throw Error(`Scale domain for "${e}" expects ${n} entries, got ${r.length}.`);return r}),i=d?.rangeLength;x=i=>{let a=r({name:e,scale:n,domain:i,domainLength:t});a&&this._setUniformValue(f,a)},S=t=>{if(!Array.isArray(t))throw Error(`Scale on "${e}" expects a range array.`);if(i&&t.length!==i)throw Error(`Scale range for "${e}" expects ${i} entries, got ${t.length}.`);this._setUniformValue(p,t)}}else{if(!d)throw Error(`Scale on "${e}" has no recorded stop sizes.`);let t=d.domainLength,n=d.rangeLength,r=u===`threshold`?`Threshold`:`Piecewise`;x=n=>{let i=v(n,`${r} scale on "${e}" expects a domain array.`);if(i.length!==t)throw Error(`${r} scale on "${e}" expects ${t} domain entries, got ${i.length}.`);this._setUniformValue(f,i)},S=t=>{if(!Array.isArray(t))throw Error(`${r} scale on "${e}" expects a range array.`);if(t.length!==n)throw Error(`${r} scale on "${e}" expects ${n} range entries, got ${t.length}.`);if(h===1&&y(t)){this._setUniformValue(p,t);return}let i=Et(e,t,h,u);this._setUniformValue(p,i)}}return{updateDomain:x&&b?e=>{let t=b(e);return x(t.domainUniform??e),t.needsRebind}:x?e=>(x(e),!1):b?e=>{let t=b(e);return t.domainUniform&&this._setUniformValue(f,t.domainUniform),t.needsRebind}:()=>!1,updateRange:o?t=>this._updateRangeTexture(e,t,d?.rangeLength,_):c?t=>{if(jt(t))throw Error(`Ordinal scale on "${e}" does not support interpolator ranges.`);if(!Array.isArray(t))throw Error(`Ordinal scale on "${e}" expects a range array.`);let n=t,r=h===1&&y(n)?n:Ot(e,n,h),i=this._buildOrdinalRangeBufferData(r,h,g);return this._setOrdinalRangeBuffer(e,i,r.length)}:u?t=>{if(jt(t))throw Error(`Scale on "${e}" does not support interpolator ranges.`);let n=t??(u===`continuous`?m??t:t);if(!Array.isArray(n))throw Error(`Scale on "${e}" expects a range array.`);return S(n),!1}:()=>!1}}_updateRangeTexture(e,t,n,r){let i=t,a;if(jt(i))a=mt(i);else{if(!kt(i))throw Error(`Interpolated color scale on "${e}" requires a color range.`);let t=i;if(n!==void 0&&t.length!==n)throw Error(`Scale on "${e}" expects ${n} range entries, got ${t.length}.`);a=mt({scheme:t,mode:`interpolate`,interpolate:r})}if(!a)throw Error(`Failed to build range texture for "${e}".`);return this._setRangeTexture(e,a)}_setRangeTexture(e,t){let n=_e(t),r=this._ensureChannelResources(e),i=r.rangeTexture,a=!i||i.width!==n.width||i.height!==n.height||i.format!==n.format,o=a?this._device.createTexture({label:N(this._label,`scale ${e} range texture`),size:{width:n.width,height:n.height,depthOrArrayLayers:1},format:n.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}):i.texture;return this._device.queue.writeTexture({texture:o},j(n.data),{bytesPerRow:n.bytesPerRow},{width:n.width,height:n.height}),r.rangeTexture={texture:o,sampler:i?.sampler??this._device.createSampler({label:N(this._label,`scale ${e} range sampler`)}),width:n.width,height:n.height,format:n.format},a&&i?.texture.destroy(),a}_updateDomainMap(e,t){let n=this._buildDomainMapBufferData(t);return this._setDomainMapBuffer(e,n.table,n.length)}_buildDomainMapBufferData(e){if(e.length===0)return{table:new Uint32Array([Nt,0]),length:0};let{table:t}=Lt(e.map((e,t)=>[e,t]));return{table:t,length:e.length}}_setDomainMapBuffer(e,t,n){let r=this._ensureChannelResources(e),i=r.domainMap,a=t.byteLength,o=r.domainMap?.buffer,s=!o||!i||i.size.byteLength!==a;if(s){let t=o;o=this._device.createBuffer({label:N(this._label,`scale ${e} domain map`),size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t?.destroy()}return this._device.queue.writeBuffer(o,0,j(t)),r.domainMap={buffer:o,size:{length:n,byteLength:a}},this._setUniformValue(Ee+e,n),s}_buildOrdinalRangeBufferData(e,t,n){if(t===1){let t=e;return n===`u32`?new Uint32Array(t):n===`i32`?new Int32Array(t):new Float32Array(t)}let r=new Float32Array(e.length*4);for(let t=0;t<e.length;t++)r.set(e[t],t*4);return r}_setOrdinalRangeBuffer(e,t,n){let r=this._ensureChannelResources(e),i=r.ordinalRange,a=t.byteLength,o=r.ordinalRange?.buffer,s=!o||!i||i.size.byteLength!==a;if(s){let t=o;o=this._device.createBuffer({label:N(this._label,`scale ${e} ordinal range`),size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),t?.destroy()}return this._device.queue.writeBuffer(o,0,j(t)),r.ordinalRange={buffer:o,size:{length:n,byteLength:a}},this._setUniformValue(we+e,n),s}destroy(){for(let e of this._channelResources.values())e.ordinalRange?.buffer.destroy(),e.domainMap?.buffer.destroy(),e.rangeTexture?.texture.destroy();this._channelResources.clear(),this._scaleUpdaters.clear()}};function Vt(e){return e===`u32`?`u32`:e===`i32`?`i32`:`f32`}function Ht(e){return e.data==null?e.value!=null||e.default!=null?`value`:`missing`:`series`}function Ut(e,t){let n=Ht(t),r=lt(t.scale),i=ut(t.scale),a=t.components??1,o=Vt(t.type),s=a===1?pt(r,o):`f32`,c=n===`series`||i===`identity`?a:1,l=t.inputComponents??c,u=t.scale?.range,d=jt(u),f=kt(u),p=d||t.scale?.interpolate!==void 0||f,m=Mt(t.scale,a),h=St(t.scale),g=dt(r,h),_=i!==`identity`||h||m||a!==l,v=g.needsOrdinalRange,y=g.needsDomainMap,b=r.continuous,x=r.vectorOutput??`never`,S=a>1&&l===1&&i!==`identity`&&(x===`always`||x===`interpolated`&&p);return{name:e,channel:t,sourceKind:n,scaleType:i,scaleDef:r,outputComponents:a,inputComponents:l,scalarType:o,outputScalarType:s,useRangeTexture:m,isPiecewise:h,needsScaleFunction:_,needsOrdinalRange:v,needsDomainMap:y,stopKind:g.stopKind,interpolateEnabled:p,allowsScalarToVector:S,isContinuousScale:b,rangeIsFunction:d,rangeIsColor:f}}function Wt(e){return e===`f32`||e===`u32`||e===`i32`}function Gt(e,t,n){let{scaleType:r,outputComponents:i,inputComponents:a,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l,isPiecewise:u,needsDomainMap:d,scalarType:f,outputScalarType:p,scaleDef:m,interpolateEnabled:h}=n,g=m?.vectorOutput??`never`,_=g===`always`||g===`interpolated`&&h,v=_&&o;if(i>1&&!(i===1||(r===`identity`?a===i:_)))return`Channel "${e}" uses vector components but scale "${r}" only supports scalars.`;if(c&&!s)return`Channel "${e}" only supports function ranges with continuous scales.`;if(c&&i!==4)return`Channel "${e}" requires vec4 outputs when using function ranges.`;if(t.scale?.interpolate!==void 0){if(!l)return`Channel "${e}" requires a color range when interpolate is set.`;if(!s)return`Channel "${e}" only supports color interpolation with continuous scales.`;if(i!==4)return`Channel "${e}" requires vec4 outputs when interpolate is set.`}if(s&&!c&&l&&i!==4)return`Channel "${e}" requires vec4 outputs when using color ranges.`;let y=m?.input??`any`;if(y===`numeric`&&!Wt(f))return`Channel "${e}" requires numeric input for "${r}" scale.`;if(y===`u32`&&f!==`u32`)return`Channel "${e}" requires u32 input for "${r}" scale.`;if(i>1&&f!==`f32`&&!v)return`Only f32 vectors are supported for "${e}" right now.`;let b=a===2&&i===1&&f===`u32`&&!!m?.allowsPackedScalarInput;return a>1&&f!==`f32`&&!b?`Only f32 vectors are supported for "${e}" input data.`:a!==i&&!v&&!b?`Channel "${e}" only supports mismatched input/output components when mapping scalars to vectors.`:m?.validate?.({name:e,channel:t,scaleType:r,outputComponents:i,inputComponents:a,scalarType:f,outputScalarType:p,isPiecewise:u,needsDomainMap:d,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l})||null}function Kt(e,t){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`Predicate nodes must be objects.`);let n=e,r=Object.keys(n),i=[`compare`,`selection`,`selectionActive`,`all`,`any`,`not`].filter(e=>Object.hasOwn(n,e));if(i.length!==1)throw Error(`Predicate nodes must specify exactly one variant.`);let a=i[0];if(a===`all`||a===`any`){let e=n[a];if(!Array.isArray(e)||e.length===0)throw Error(`Predicate ${a} nodes must not be empty.`);if(r.length!==1)throw Error(`Predicate ${a} nodes cannot mix variants or leaf properties.`);e.forEach(e=>Kt(e,t))}else if(a===`not`){if(r.length!==1)throw Error(`Predicate not nodes cannot mix variants or leaf properties.`);Kt(n.not,t)}else if(a===`compare`){if(!t)throw Error(`Selection predicates cannot contain comparisons.`);if(r.some(e=>![`compare`,`left`,`right`].includes(e)))throw Error(`Comparison predicates cannot mix variants or leaf properties.`)}else if(a===`selectionActive`){let e=n.selectionActive;if(!e||typeof e!=`object`||r.length!==1)throw Error(`Selection activity requires a state reference.`);let t=e;if(typeof t.selection!=`string`||!t.selection)throw Error(`Selection activity requires a selection name.`);let i=t.type===`interval`;if(i){if(!Array.isArray(t.components)||!t.components.length||t.components.some(e=>typeof e!=`string`||!e)||new Set(t.components).size!==t.components.length)throw Error(`Interval selection activity requires distinct components.`)}else if(t.type!==`single`&&t.type!==`multi`)throw Error(`Selection activity has an invalid type.`);let a=i?[`selection`,`type`,`components`]:[`selection`,`type`];if(Object.keys(t).some(e=>!a.includes(e)))throw Error(i?`Interval selection activity has unsupported properties.`:`Selection activity has unsupported properties.`)}else{if(typeof n.selection!=`string`||!n.selection)throw Error(`Selection predicates require a selection name.`);if(n.empty!==void 0&&typeof n.empty!=`boolean`)throw Error(`Selection empty policy must be boolean.`);let e=n.type===`interval`;if(e){if(!Array.isArray(n.projections)||n.projections.length===0)throw Error(`Interval selections require non-empty projections.`)}else if(n.type!==`single`&&n.type!==`multi`||Object.hasOwn(n,`projections`))throw Error(`Selection predicates have an invalid type or projections.`);let t=e?[`selection`,`type`,`projections`,`empty`]:[`selection`,`type`,`empty`];if(r.some(e=>!t.includes(e)))throw Error(e?`Interval selection predicates cannot mix variants or leaf properties.`:`Selection predicates cannot mix variants or leaf properties.`)}return e}function qt(e){return e===void 0?void 0:Kt(e,!0)}function Jt(e){return e===void 0?void 0:Kt(e,!1)}function Yt(e,t,n){if(`all`in e||`any`in e){let r=`all`in e?`&&`:`||`;return`(${(`all`in e?e.all:e.any).map(e=>Yt(e,t,n)).join(` ${r} `)})`}if(`not`in e)return`(!${Yt(e.not,t,n)})`;if(`compare`in e){if(!n)throw Error(`Comparisons are only available in visibility predicates.`);return n(e)}let r=`selectionActive`in e?e.selectionActive:e,i=t.get(r.selection);if(!i||i.type!==r.type)throw Error(`Predicate references unknown or incompatible selection "${r.selection}".`);if(`selectionActive`in e)return`(!${Ve}${i.name}(i))`;if(e.type===`interval`){let t=e.projections.map(e=>{let t=i.projections?.findIndex(t=>t.component===e.component&&t.input===e.input&&t.secondaryInput===e.secondaryInput&&t.hitTest===(e.hitTest??`intersects`));if(t===void 0||t<0)throw Error(`Selection "${i.name}" has an unknown projection.`);return`${Be}${i.name}_p${t}(i)`}),n=`${Ve}${i.name}(i)`;return`(select(${t.join(` && `)}, ${e.empty===!1?`false`:`true`}, ${n}))`}return`${Be}${i.name}(i, ${e.empty===!1?`false`:`true`})`}function Xt(e){return`u_scalar_${e}`}function Zt({predicate:e,channelIRs:t,channelNames:n,inputNames:r,scalarSlots:i,selectionDefs:a,functionName:o=`isInstanceVisible`}){let s=new Map(t.map(e=>[e.name,e])),c=new Map(a.map(e=>[e.name,e]));function l(e){if(!e||typeof e!=`object`)throw Error(`Visibility predicate operands must be objects.`);let t=Object.keys(e);if(t.length!==1)throw Error(`Visibility predicate operands must specify exactly one namespace.`);let a=t[0],o=e[a];if(typeof o!=`string`||!o)throw Error(`Visibility predicate ${a} operands require a name.`);if(a===`slot`){let e=i[o];if(!e)throw Error(`Visibility predicate references unknown slot "${o}".`);return{expression:`params.${Xt(o)}`,type:e.type}}if(a===`channel`&&n.has(o)||a===`input`&&r.has(o)){let e=s.get(o);if(!e||e.inputComponents!==1)throw Error(`Visibility predicate input "${o}" must be scalar.`);return{expression:e.rawValueExpr,type:e.scalarType}}throw Error(`Visibility predicate references unknown ${a} "${o}".`)}function u(e){if(![`<`,`<=`,`>`,`>=`].includes(e.compare))throw Error(`Visibility predicate has unsupported comparison "${e.compare}".`);let t=l(e.left),n=l(e.right);if(t.type!==n.type)throw Error(`Visibility predicate comparison types must match: ${t.type} and ${n.type}.`);return`(${t.expression} ${e.compare} ${n.expression})`}return`
fn ${o}(i: u32) -> bool {
    return ${e?Yt(e,c,u):`true`};
}
`}function Qt({channels:e,context:t}){let n={},r=new Map,{channelOrder:i}=t;for(let a of i){let i=$t({name:a,configChannel:e?.[a],context:t});i&&(n[a]=i.channel,r.set(a,i.analysis))}return en(n,r,t),{channels:n,analysisByChannel:r}}function $t({name:e,configChannel:t,context:n}){let{channelOrder:r,optionalChannels:i,defaultChannelConfigs:a,defaultValues:o,channelSpecs:s}=n,c={...a[e]??{},...t??{}};if(c.components||=1,k(c)&&!c.inputComponents&&(c.inputComponents=(c.scale?.type??`identity`)===`identity`?c.components:1),k(c)&&(t?.value!==void 0||t?.default!==void 0))throw Error(`Channel "${e}" must not specify both data and value.`);return k(c)&&(delete c.value,delete c.default),!k(c)&&c.value===void 0&&(c.default===void 0?o[e]!==void 0&&(c.value=o[e]):c.value=c.default),i.includes(e)&&!k(c)&&!A(c)?null:{channel:c,analysis:nn(e,c,{channelOrder:r,optionalChannels:i,channelSpecs:s})}}function en(e,t,n){let r=0;for(let[i,a]of Object.entries(e)){let o=a.conditions??[];if(!o.length)continue;let s=[];for(let a of o){let o={...a,when:a.when};if(!(`channel`in a)||!a.channel){s.push(o);continue}let c=`${i}__cond${r++}`,l=tn({name:i,analysisName:c,configChannel:a.channel,context:n});e[c]=l.channel,t.set(c,l.analysis),s.push({...o,channelName:c})}a.conditions=s}}function tn({name:e,analysisName:t,configChannel:n,context:r}){let{channelOrder:i,channelSpecs:a}=r,o={...n??{}};if(o.conditions!==void 0)throw Error(`Channel "${e}" conditions must not nest other conditions.`);if(o.default!==void 0)throw Error(`Channel "${e}" conditions must not include defaults.`);if(o.components||=a[e]?.components??1,k(o)&&!o.inputComponents&&(o.inputComponents=(o.scale?.type??`identity`)===`identity`?o.components:1),k(o)&&o.value!==void 0)throw Error(`Channel "${e}" conditions must not specify both data and value.`);if(!k(o)&&o.value===void 0)throw Error(`Channel "${e}" conditions must specify either data or value.`);return k(o)&&(delete o.value,delete o.default),{channel:o,analysis:nn(e,o,{channelOrder:i,optionalChannels:[],channelSpecs:a},t)}}function nn(e,t,n,r=e){let{channelOrder:i,optionalChannels:a,channelSpecs:o}=n;if(!i.includes(e))throw Error(`Unknown channel: ${e}`);let s=o[e];if(s?.components&&t.components!==s.components)throw Error(`Channel "${e}" must use ${s.components} components`);let c=Ut(r,t),{scaleDef:l,outputComponents:u}=c,d=(l.allowsU32InputOverride===!0&&s?.type===`f32`&&t.type===`u32`||l.allowsF32InputOverride===!0&&s?.type===`u32`&&t.type===`f32`)&&(u===1||u===4);if(s?.type&&t.type&&t.type!==s.type&&!d)throw Error(`Channel "${e}" must use type "${s.type}"`);if(!a.includes(e)&&!k(t)&&!A(t))throw Error(`Channel "${e}" must specify either data or value.`);if(k(t)&&!t.type)throw Error(`Channel "${e}" requires a series data type.`);if(a.includes(e)&&!k(t)&&!A(t))return c;if(t.components&&![1,2,4].includes(t.components))throw Error(`Invalid component count for "${e}"`);if(t.inputComponents&&![1,2,4].includes(t.inputComponents))throw Error(`Invalid input component count for "${e}"`);let f=Gt(e,t,c);if(f)throw Error(f);if(t.conditions!==void 0&&!Array.isArray(t.conditions))throw Error(`Channel "${e}" conditions must be an array.`);if(Array.isArray(t.conditions))for(let n of t.conditions){if(!n||typeof n!=`object`)throw Error(`Channel "${e}" has an invalid condition entry.`);if(!n.when||typeof n.when!=`object`)throw Error(`Channel "${e}" conditions require a "when" predicate.`);let{when:t,value:r}=n;Jt(t);let a=t=>{if(`all`in t||`any`in t)for(let e of`all`in t?t.all:t.any)a(e);else if(`not`in t)a(t.not);else if(`selection`in t&&t.type===`interval`)for(let n of t.projections){if(!i.includes(n.input))throw Error(`Channel "${e}" references unknown selection input "${n.input}".`);if(n.secondaryInput!==void 0&&!i.includes(n.secondaryInput))throw Error(`Channel "${e}" references unknown selection input "${n.secondaryInput}".`)}};if(a(t),n.channel){if(r!==void 0)throw Error(`Channel "${e}" conditions must not specify both channel and value.`);let t=n.channel;if(!t||typeof t!=`object`)throw Error(`Channel "${e}" conditions must include a channel config.`);if(`conditions`in t&&t.conditions!==void 0)throw Error(`Channel "${e}" conditions must not nest other conditions.`);if(`default`in t&&t.default!==void 0)throw Error(`Channel "${e}" conditions must not include defaults.`);if(!k(t)&&!A(t))throw Error(`Channel "${e}" conditions must supply data or value.`);if(k(t)&&!t.type)throw Error(`Channel "${e}" conditions require a series data type.`);continue}if(r===void 0)throw Error(`Channel "${e}" conditions require a value.`);if(c.outputComponents===1){if(typeof r!=`number`)throw Error(`Channel "${e}" conditions require scalar values.`)}else if(!Array.isArray(r)||r.length!==c.outputComponents)throw Error(`Channel "${e}" conditions require ${c.outputComponents}-component values.`)}return c}var rn=`

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
`;function an(e){let t=new Set,n=new Set,r=[];function i(e){if(!n.has(e)){if(t.has(e))throw Error(`Scale WGSL dependency cycle: ${e.type}`);t.add(e);for(let t of e.wgslDeps??[])i(t);e.wgsl&&r.push(e.wgsl),t.delete(e),n.add(e)}}for(let t of e)i(t);return`${rn}\n${r.join(`
`)}`}var on=`

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
`;function sn(e){return`hashLookup_${e}`}function cn(e){return`
fn ${sn(e)}(key: u32, maxProbes: u32) -> u32 {
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
`}function ln(e,t){let n=[],r=!0,i=[];for(let[a,o]of e.split(/\r?\n/).entries()){let e=o.trim();if(!e.startsWith(`#`)){r&&i.push(o);continue}let s=e.match(/^#([A-Za-z]+)\b(.*)$/);if(!s)throw fn(a,`Malformed directive`);let[,c,l]=s,u=l.trim();if(c===`if`){let e=un(u,t);n.push({parentActive:r,condition:e,elseSeen:!1}),r&&=e}else if(c===`else`){if(u)throw fn(a,`#else does not accept an argument`);let e=n.at(-1);if(!e)throw fn(a,`#else has no matching #if`);if(e.elseSeen)throw fn(a,`#if block contains more than one #else`);e.elseSeen=!0,r=e.parentActive&&!e.condition}else if(c===`endif`){if(u)throw fn(a,`#endif does not accept an argument`);let e=n.pop();if(!e)throw fn(a,`#endif has no matching #if`);r=e.parentActive}else throw fn(a,`Unsupported directive #${c}`)}if(n.length)throw Error(`Unterminated shader #if block.`);return i.join(`
`)}function un(e,t){let n=dn(e),r=0,i=()=>n[r],a=()=>n[r++];function o(){if(i()===`!`)return a(),!o();if(i()===`(`){a();let e=c();if(a()!==`)`)throw Error(`Expected ")" in shader condition.`);return e}if(a()!==`defined`||a()!==`(`)throw Error(`Expected defined(NAME) in shader condition.`);let e=a();if(!e||!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Expected a symbol name in defined(NAME).`);if(a()!==`)`)throw Error(`Expected ")" after shader symbol name.`);return t.has(e)}function s(){let e=o();for(;i()===`&&`;){a();let t=o();e&&=t}return e}function c(){let e=s();for(;i()===`||`;){a();let t=s();e||=t}return e}if(!n.length)throw Error(`Shader #if requires a condition.`);let l=c();if(r!==n.length)throw Error(`Unexpected token "${n[r]}" in shader condition.`);return l}function dn(e){let t=[],n=/defined|[A-Za-z_][A-Za-z0-9_]*|&&|\|\||!|\(|\)/gy,r=0;for(;r<e.length;){if(/\s/.test(e[r])){r+=1;continue}n.lastIndex=r;let i=n.exec(e);if(!i)throw Error(`Unexpected token near "${e.slice(r)}" in shader condition.`);t.push(i[0]),r=n.lastIndex}return t}function fn(e,t){return Error(`${t} at shader line ${e+1}.`)}function pn(e,t,n){let r=e===`u32`?`u32`:e===`i32`?`i32`:`f32`,i=t=>{let n=Number(t??0);return e===`u32`?`u32(${Math.trunc(n)})`:e===`i32`?`i32(${Math.trunc(n)})`:Number.isInteger(n)?`${n}.0`:`${n}`};if(t===1)return i(Array.isArray(n)?n[0]:n);let a=(Array.isArray(n)?n:[n]).slice(0,t);for(;a.length<t;)a.push(0);return`vec${t}<${r}>(${a.map(i).join(`, `)})`}var mn={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}.DEV??!1;function hn({name:e,scaleDef:t,functionName:n,rawValueExpr:r,scalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,scaleConfig:c,domainMapName:l=null,useRangeTexture:u=!1}){let d=Array.isArray(c?.domain)?c.domain.length:0,f=Array.isArray(c?.range)?c.range.length:0,p=St(c);if(u&&o!==4)throw Error(`Channel "${e}" requires vec4 output when using interpolate textures.`);let m=c?.round===!0&&o===1&&!u;return t.emit({name:e,functionName:n,scaleConfig:c,rawValueExpr:r,inputScalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,clamp:c?.clamp===!0,round:m,domainLength:d,rangeLength:f,isPiecewise:p,domainMapName:l,useRangeTexture:u})}function gn({compiledChannels:e,uniformLayout:t,shaderBody:n,packedSeriesLayout:r,selectionDefs:i=[],visibleWhen:a,order:o,scalarSlots:s={},extraResources:c=[],placementIndex:l}){let{channels:u,channelIRs:d,channelNames:f,inputNames:p}=e,m=l&&`source`in l&&l.source===`draw`,h=[],g=[],_={},v=[],y=[],b=[],x=[],S=[];function C(e,t=e.name){return`fn ${ke}${t}(i: u32) -> ${e.outputComponents===1?e.outputScalarType:`vec${e.outputComponents}<f32>`} { return ${e.rawValueExpr}; }`}let w=1,T=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE,E=d.filter(e=>e.sourceKind===`series`),D=d.filter(e=>e.sourceKind===`uniform`||e.sourceKind===`literal`),O=d.filter(e=>e.needsOrdinalRange),ee=d.filter(e=>e.needsDomainMap),te=d.filter(e=>e.useRangeTexture),ne=new Set(t.map(({name:e})=>e)),re=new Map(d.map(e=>[e.name,e])),ie=new Map(i.map(e=>[e.name,e])),ae=Zt({predicate:a,functionName:o?`isInstanceVisibleBase`:`isInstanceVisible`,channelIRs:d,channelNames:f,inputNames:p,scalarSlots:s,selectionDefs:i}),oe=o?Zt({predicate:o.when,functionName:`isInstanceOrderMatch`,channelIRs:d,channelNames:f,inputNames:p,scalarSlots:s,selectionDefs:i}):``,se=o?`
fn isInstanceVisible(i: u32) -> bool {
    if (!isInstanceVisibleBase(i)) { return false; }
    if (globals.orderPass == 0u) { return true; }
    let matches = isInstanceOrderMatch(i);
    return ((globals.orderPass & 3u) == 1u && matches) ||
        ((globals.orderPass & 3u) == 2u && !matches);
}
`:``,ce=e=>(_[e]||(_[e]={}),_[e]);function le(e){let t=`${Be}${e.name}`,n=re.get(`uniqueId`);if(mn&&(e.type===`single`||e.type===`multi`)&&e.membershipUsed!==!1&&!n)throw Error(`Selection "${e.name}" requires a uniqueId channel.`);switch(e.type){case`single`:return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let selected = u32(params.${Le}${e.name});
    if (allowEmpty && selected == 0u) { return true; }
    if (selected == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return id == selected;
}
fn ${Ve}${e.name}(i: u32) -> bool {
    return params.${Le}${e.name} == 0u;
}
`;case`multi`:{let r=ze+e.name,i=sn(r);return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let count = u32(params.${Re}${e.name});
    if (allowEmpty && count == 0u) { return true; }
    if (count == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return ${i}(id, arrayLength(&${r})) != HASH_NOT_FOUND;
}
fn ${Ve}${e.name}(i: u32) -> bool {
    return params.${Re}${e.name} == 0u;
}
`}case`interval`:{let n=e.components??[],r=(e.projections??[]).map((r,i)=>{let a=n.indexOf(r.component),o=re.get(r.input),s=r.secondaryInput?re.get(r.secondaryInput):void 0;if(a<0||!o||r.secondaryInput&&!s)throw Error(`Selection "${e.name}" has an unresolved projection input or component.`);let c=He(e.name,a),l=Ue(e.name,a),u=r.inputComponents===2,d=(e,t)=>u?`hpLessEq(${e}, ${t})`:`(${e} <= ${t})`,f=(e,t)=>u?`hpLess(${e}, ${t})`:`(${e} < ${t})`,p=u?`lo`:`min(bound.x, bound.y)`,m=u?`hi`:`max(bound.x, bound.y)`,h=o.rawValueExpr,g=s?.rawValueExpr,_=u?`    let bound0 = params.${l}.xy;
    let bound1 = params.${l}.zw;
    let lo = select(bound1, bound0, hpLessEq(bound0, bound1));
    let hi = select(bound0, bound1, hpLessEq(bound0, bound1));`:`    let bound = params.${l};`,v;v=g?r.hitTest===`encloses`?`${d(p,`datumLo`)} && ${d(`datumHi`,m)}`:r.hitTest===`endpoints`?`(${d(p,`datum0`)} && ${f(`datum0`,m)}) || (${d(p,`datum1`)} && ${f(`datum1`,m)})`:`${f(p,`datumHi`)} && ${f(`datumLo`,m)}`:`${d(p,h)} && ${f(h,m)}`;let y=g?`    let datum0 = ${h};
    let datum1 = ${g};
    let datumLo = select(datum1, datum0, ${d(`datum0`,`datum1`)});
    let datumHi = select(datum0, datum1, ${d(`datum0`,`datum1`)});`:``;return`
fn ${t}_p${i}(i: u32) -> bool {
    if (params.${c} == 0u) { return false; }
${_}
${y}
    return ${v};
}
`});return`
fn ${Ve}${e.name}(i: u32) -> bool {
    return ${n.map((t,n)=>`params.${He(e.name,n)} == 0u`).join(` || `)||`true`};
}
${r.join(`
`)}
`}default:throw Error(`Selection "${e.name}" has unsupported type "${e.type}".`)}}function ue(e,t){let{name:n,outputComponents:r,outputScalarType:i}=e;return`
fn ${ke}${n}(i: u32) -> ${r===1?i:`vec${r}<f32>`} {
${(e.channel.conditions??[]).map(e=>{let t=Yt(e.when,ie);return e.channelName?`    if (${t}) { return ${ke}${e.channelName}(i); }`:`    if (${t}) { return ${pn(r===1?i:`f32`,r,e.value)}; }`}).join(`
`)}
    return ${ke}${t}(i);
}
`}let k=new Set;for(let e of Object.keys(u))k.add(`${e}_DEFINED`);l&&(k.add(`PLACEMENT_ENABLED`),m&&k.add(`DRAW_PLACEMENT`));let A=new Set,de=r??new Map;if(mn&&E.length>0&&de.size===0)throw Error(`Packed series layout is required for series channels.`);for(let e of de.values())if(e.scalarType===`f32`||e.scalarType===`u32`||e.scalarType===`i32`)A.add(e.scalarType);else if(mn)throw Error(`Packed series only supports f32/u32/i32. Found "${e.scalarType}".`);if(A.has(`f32`)){let e=w++;h.push({binding:e,visibility:T,buffer:{type:`read-only-storage`}}),g.push({name:`seriesF32`,role:`series`}),v.push(`@group(1) @binding(${e}) var<storage, read> seriesF32: array<f32>;`)}if(A.has(`u32`)){let e=w++;h.push({binding:e,visibility:T,buffer:{type:`read-only-storage`}}),g.push({name:`seriesU32`,role:`series`}),v.push(`@group(1) @binding(${e}) var<storage, read> seriesU32: array<u32>;`)}if(A.has(`i32`)){let e=w++;h.push({binding:e,visibility:T,buffer:{type:`read-only-storage`}}),g.push({name:`seriesI32`,role:`series`}),v.push(`@group(1) @binding(${e}) var<storage, read> seriesI32: array<i32>;`)}for(let e of E){let{name:t}=e;if(e.inputComponents>1&&e.scalarType!==`f32`&&!(e.scalarType===`u32`&&e.inputComponents===2&&e.scaleType===`index`))throw Error(`Channel "${t}" does not support non-f32 vector inputs.`);let n=de.get(t);if(mn&&!n)throw Error(`Packed series layout is missing entry for "${t}".`);if(mn&&n.scalarType!==e.scalarType)throw Error(`Packed series type mismatch for "${t}". Expected ${e.scalarType}, got ${n.scalarType}.`);if(mn&&n.components!==e.inputComponents)throw Error(`Packed series component mismatch for "${t}". Expected ${e.inputComponents}, got ${n.components}.`);let r=n.scalarType===`f32`?`seriesF32`:n.scalarType===`u32`?`seriesU32`:`seriesI32`,i=n.offset,a=n.stride;n.components===1?y.push(`fn read_${t}(i: u32) -> ${n.scalarType} {
    return ${r}[${i}u + i * ${a}u];
}`):n.components===2?y.push(`fn read_${t}(i: u32) -> vec2<${n.scalarType}> {
    let base = ${i}u + i * ${a}u;
    return vec2<${n.scalarType}>(${r}[base], ${r}[base + 1u]);
}`):y.push(`fn read_${t}(i: u32) -> vec4<${n.scalarType}> {
    let base = ${i}u + i * ${a}u;
    return vec4<${n.scalarType}>(${r}[base], ${r}[base + 1u], ${r}[base + 2u], ${r}[base + 3u]);
}`);let o=Array.isArray(e.channel.conditions)&&e.channel.conditions.length>0,s=o?`${t}_base`:t;e.needsScaleFunction?b.push(hn({name:t,functionName:s,scaleDef:e.scaleDef,rawValueExpr:e.rawValueExpr,scalarType:e.scalarType,inputComponents:e.inputComponents,outputComponents:e.outputComponents,outputScalarType:e.outputScalarType,scaleConfig:e.channel.scale,useRangeTexture:e.useRangeTexture,domainMapName:e.needsDomainMap?`${Te}${t}`:null})):b.push(C(e,s)),o&&b.push(ue(e,s))}if(i.length>0){i.some(e=>e.projections?.some(e=>e.inputComponents===2))&&x.push(`
fn hpLessEq(a: vec2<u32>, b: vec2<u32>) -> bool {
    return a.x < b.x || (a.x == b.x && a.y <= b.y);
}
fn hpLess(a: vec2<u32>, b: vec2<u32>) -> bool {
    return a.x < b.x || (a.x == b.x && a.y < b.y);
}
`);for(let e of i)x.push(le(e))}for(let e of O){let{name:t}=e,n=ce(t);n.ordinalRange=!0,n.rangeCountUniform=!0;let r=w++;h.push({binding:r,visibility:T,buffer:{type:`read-only-storage`}}),g.push({name:t,role:`ordinalRange`});let i=e.outputComponents===1?e.outputScalarType:`vec4<f32>`,a=`range_${t}`;v.push(`@group(1) @binding(${r}) var<storage, read> ${a}: array<${i}>;`)}for(let e of ee){let{name:t}=e,n=ce(t);n.domainMap=!0,n.domainMapCountUniform=!0;let r=w++;h.push({binding:r,visibility:T,buffer:{type:`read-only-storage`}}),g.push({name:t,role:`domainMap`});let i=`${Te}${t}`;v.push(`@group(1) @binding(${r}) var<storage, read> ${i}: array<HashEntry>;`)}for(let e of te){let{name:t}=e,n=ce(t);n.rangeTexture=!0,n.rangeSampler=!0;let r=w++;h.push({binding:r,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:`float`}}),g.push({name:t,role:`rangeTexture`}),v.push(`@group(1) @binding(${r}) var ${De}${t}: texture_2d<f32>;`);let i=w++;h.push({binding:i,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,sampler:{type:`filtering`}}),g.push({name:t,role:`rangeSampler`}),v.push(`@group(1) @binding(${i}) var ${Oe}${t}: sampler;`)}for(let e of c){let t=w++,n=e.visibility===`vertex`?GPUShaderStage.VERTEX:e.visibility===`fragment`?GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r=e.wgslName??e.name;if(e.kind===`buffer`){h.push({binding:t,visibility:n,buffer:{type:e.bufferType??`read-only-storage`}}),g.push({name:e.name,role:e.role}),S.push(`@group(1) @binding(${t}) var<storage, read> ${r}: ${e.wgslType??`array<f32>`};`);continue}if(e.kind===`texture`){let i=e.dimension??`2d`,a=e.sampleType??`float`,o=a===`uint`?`u32`:a===`sint`?`i32`:`f32`,s=i===`2d-array`?`texture_2d_array<${o}>`:`texture_2d<${o}>`;h.push({binding:t,visibility:n,texture:{sampleType:a,viewDimension:i===`2d-array`?`2d-array`:`2d`}}),g.push({name:e.name,role:e.role}),S.push(`@group(1) @binding(${t}) var ${r}: ${s};`);continue}e.kind===`sampler`&&(h.push({binding:t,visibility:n,sampler:{type:e.samplerType??`filtering`}}),g.push({name:e.name,role:e.role}),S.push(`@group(1) @binding(${t}) var ${r}: sampler;`))}for(let e of D){let{name:t}=e,n=Array.isArray(e.channel.conditions)&&e.channel.conditions.length>0,r=n?`${t}_base`:t;e.needsScaleFunction?b.push(hn({name:t,functionName:r,scaleDef:e.scaleDef,rawValueExpr:e.rawValueExpr,scalarType:e.scalarType,inputComponents:e.inputComponents,outputComponents:e.outputComponents,outputScalarType:e.outputScalarType,scaleConfig:e.channel.scale,useRangeTexture:e.useRangeTexture,domainMapName:e.needsDomainMap?`${Te}${t}`:null})):b.push(C(e,r)),n&&b.push(ue(e,r))}if(mn)for(let[e,t]of Object.entries(_)){if(t.rangeCountUniform&&!ne.has(`uRangeCount_${e}`))throw Error(`Ordinal scale on "${e}" requires uniform "${we}${e}".`);if(t.domainMapCountUniform&&!ne.has(`uDomainMapCount_${e}`))throw Error(`Scale on "${e}" requires uniform "${Ee}${e}".`)}let fe=t.map(({name:e,type:t,components:n,arrayLength:r})=>{let i=t===`u32`?`u32`:t===`i32`?`i32`:`f32`,a=n===1?i:n===2?`vec2<${i}>`:`vec4<${i}>`;return`    ${e}: ${r==null?a:`array<vec4<${i}>, ${r}>`},`}).join(`
`),pe=an(new Set(d.filter(e=>e.needsScaleFunction).map(e=>e.scaleDef))),me=[...ee.map(e=>Te+e.name),...i.filter(e=>e.type===`multi`).map(e=>ze+e.name)],he=me.map(cn).join(`
`);return{shaderCode:ln(`
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
    orderPass: u32,
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

${pe}
${me.length>0?on:``}

struct Params {
${fe}
};

@group(1) @binding(0) var<uniform> params: Params;

${v.join(`
`)}

${y.join(`
`)}

${x.join(`
`)}

${b.join(`
`)}

${S.join(`
`)}

${he}

${ae}

${oe}

${se}

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

`,k),resourceBindings:h,resourceLayout:g,resourceRequirements:_}}function _n(e,t,n,r,i){return JSON.stringify([e,t,n,r,i])}function vn({device:e,cache:t,globalBindGroupLayout:n,format:r,pickFormat:i,compiledChannels:a,uniformLayout:o,shaderBody:s,packedSeriesLayout:c,selectionDefs:l,visibleWhen:u,order:d,scalarSlots:f={},extraResources:p,primitiveTopology:m=`triangle-list`,placementBindGroupLayout:h,placementIndex:g,label:_}){let{shaderCode:v,resourceBindings:y,resourceLayout:b}=gn({compiledChannels:a,uniformLayout:o,shaderBody:s,packedSeriesLayout:c,selectionDefs:l,visibleWhen:u,order:d,scalarSlots:f,extraResources:p,placementIndex:g}),x=!!(g&&h),S=_n(y,r,i,m,x),C=t.getOrCreate(v,S,t=>{let a={id:t,firstBorrowerLabel:_,borrowerLabels:new Set([_])},o=`${M} program template #${t} (first used by ${_})`,s=e.createBindGroupLayout({label:N(o,`bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`}},...y]}),c=e.createShaderModule({label:N(o,`shader`),code:v}),l={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}},u={layout:e.createPipelineLayout({label:N(o,`pipeline layout`),bindGroupLayouts:[n,s,...x?[h]:[]]}),vertex:{module:c,entryPoint:`vs_main`},primitive:{topology:m}},d=new Map,f=t=>{let n=d.get(t);return n||(n=e.createRenderPipeline({label:N(o,t==1?`render pipeline`:`${t}x render pipeline`),...u,fragment:{module:c,entryPoint:`fs_main`,targets:[{format:r,blend:l}]},multisample:{count:t}}),d.set(t,n)),n},p=f(1),g;return{bindGroupLayout:s,pipeline:p,getPipeline:f,getPickPipeline:()=>(g??=e.createRenderPipeline({label:N(o,`picking pipeline`),...u,fragment:{module:c,entryPoint:`fs_pick`,targets:[{format:i}]}}),g),diagnostics:a}});C.diagnostics.borrowerLabels.add(_);let w=b.map(e=>Object.freeze({...e}));return Object.freeze(w),{...C,resourceLayout:w}}function yn(e){return Array.isArray(e)&&e.length===2&&typeof e[0]==`number`&&typeof e[1]==`number`}var bn=[0,0],xn=[0,0,0,0];function Sn(e,t,n){if(!t||typeof t.component!=`string`||!t.component)throw Error(`Interval selection "${e}" projections require a component.`);if(typeof t.input!=`string`||!t.input)throw Error(`Interval selection "${e}" projections require an input.`);if(Object.keys(t).some(e=>![`component`,`input`,`secondaryInput`,`hitTest`].includes(e)))throw Error(`Interval selection "${e}" projection has unsupported properties.`);let r=n(t.input);if(r.inputComponents!==1&&!(r.inputComponents===2&&r.scalarType===`u32`))throw Error(`Interval selection "${e}" requires a scalar or packed numeric input "${t.input}".`);if(t.secondaryInput!==void 0){let i=n(t.secondaryInput);if(i.inputComponents!==r.inputComponents||i.scalarType!==r.scalarType)throw Error(`Interval selection "${e}" requires matching representations for inputs "${t.input}" and "${t.secondaryInput}".`)}if(t.hitTest!==void 0&&(!t.secondaryInput||![`intersects`,`encloses`,`endpoints`].includes(t.hitTest)))throw Error(`Interval selection "${e}" has an invalid hit-test mode.`);return{...t,hitTest:t.hitTest??`intersects`,scalarType:r.scalarType,inputComponents:r.inputComponents}}function Cn(e,t){if(!t||typeof t.selection!=`string`||!t.selection||![`single`,`multi`,`interval`].includes(t.type))throw Error(`Selection predicates require a named selection and type.`);if(t.type===`interval`&&`components`in t&&(!Array.isArray(t.components)||t.components.length===0||t.components.some(e=>typeof e!=`string`||!e)||new Set(t.components).size!==t.components.length))throw Error(`Interval selection "${t.selection}" requires distinct components.`);let n=e.get(t.selection);if(n){if(n.type!==t.type)throw Error(`Selection "${t.selection}" must keep a single type.`);if(t.type===`interval`&&`components`in t){if(n.declaredComponents&&(n.declaredComponents.length!==t.components.length||n.declaredComponents.some(e=>!t.components.includes(e))))throw Error(`Selection "${t.selection}" must keep the same components.`);n.declaredComponents=Array.from(t.components);for(let e of t.components)n.components?.includes(e)||n.components?.push(e)}return n}let r={name:t.selection,type:t.type,membershipUsed:!1};return t.type===`interval`&&(r.components=`components`in t?Array.from(t.components):[],`components`in t&&(r.declaredComponents=Array.from(t.components)),r.representations=new Map,r.projections=[]),e.set(r.name,r),r}function wn(e,t,n){if(e){if(`all`in e||`any`in e)for(let r of`all`in e?e.all:e.any)wn(r,t,n);else if(`not`in e)wn(e.not,t,n);else if(`selectionActive`in e)Cn(t,e.selectionActive);else if(`selection`in e){let r=Cn(t,e);if(r.membershipUsed=!0,e.type!==`interval`)return;if(!Array.isArray(e.projections)||!e.projections.length)throw Error(`Interval selection "${e.selection}" must specify non-empty projections.`);for(let t of e.projections){let i=Sn(e.selection,t,n);r.components?.includes(i.component)||r.components?.push(i.component);let a=r.representations?.get(i.component);if(a&&(a.scalarType!==i.scalarType||a.inputComponents!==i.inputComponents))throw Error(`Interval selection "${e.selection}" component "${i.component}" must keep one comparison representation.`);r.representations?.set(i.component,{scalarType:i.scalarType,inputComponents:i.inputComponents}),r.projections?.some(e=>e.component===i.component&&e.input===i.input&&e.secondaryInput===i.secondaryInput&&e.hitTest===i.hitTest)||r.projections?.push(i)}}}}function Tn(e,t,n,r){let i=new Map,a=e=>{let n=t.get(e);if(!n)throw Error(`Selection references unknown input "${e}".`);return n};for(let t of Object.values(e))for(let e of t.conditions??[])wn(e.when,i,a);wn(n,i,a),wn(r?.when,i,a);for(let e of i.values())if(e.declaredComponents&&e.components?.some(t=>!e.declaredComponents?.includes(t)))throw Error(`Selection "${e.name}" projects an undeclared component.`);if(!e.uniqueId&&Array.from(i.values()).some(e=>e.membershipUsed&&(e.type===`single`||e.type===`multi`)))throw Error(`Selections of type "single" or "multi" require the "uniqueId" channel.`);return i}function En(e,t){return`all`in e||`any`in e?(`all`in e?e.all:e.any).some(e=>En(e,t)):`not`in e?En(e.not,t):`selectionActive`in e?e.selectionActive.selection===t:e.selection===t}var Dn=class{constructor({device:e,channels:t,analysisByChannel:n,visibleWhen:r,order:i,label:a=`mark`,setUniformValue:o}){this._device=e,this._label=a,this._setUniformValue=o,this._selectionDefs=Tn(t,n,r,i),this._orderSelectionActive=new Map(Array.from(this._selectionDefs.values()).filter(e=>i&&En(i.when,e.name)).map(e=>[e.name,!1])),this.orderActive=!1,this._selectionBuffers=new Map}_setOrderSelectionActive(e,t){this._orderSelectionActive.has(e)&&(this._orderSelectionActive.set(e,t),this.orderActive=this._orderSelectionActive.values().some(Boolean))}get selectionDefs(){return Array.from(this._selectionDefs.values())}addSelectionUniforms(e){for(let t of this._selectionDefs.values())if(t.type===`single`)e.push({name:Le+t.name,type:`u32`,components:1});else if(t.type===`interval`)for(let[n,r]of(t.components??[]).entries()){e.push({name:He(t.name,n),type:`u32`,components:1});let i=t.representations?.get(r);i&&e.push({name:Ue(t.name,n),type:i.scalarType,components:i.inputComponents===2?4:2})}else if(t.type===`multi`)e.push({name:Re+t.name,type:`u32`,components:1});else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}getExtraResourceDefs(){let e=[];for(let t of this._selectionDefs.values()){if(t.type!==`multi`)continue;let n=ze+t.name;e.push({name:n,kind:`buffer`,role:`extraBuffer`,wgslName:n,wgslType:`array<HashEntry>`,bufferType:`read-only-storage`,visibility:`vertex`})}return e}initializeSelections(e){for(let t of this._selectionDefs.values())if(t.type===`single`)this.updateSelection(t.name,{type:`single`,id:0},e);else if(t.type===`interval`)this.updateSelection(t.name,{type:`interval`,intervals:{}},e);else if(t.type===`multi`)this.updateSelection(t.name,{type:`multi`,ids:new Uint32Array},e);else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}updateSelection(e,t,n){let r=this._selectionDefs.get(e);if(!r)throw Error(`Unknown selection "${e}".`);if(t.type!==r.type)throw Error(`Selection "${e}" must remain type "${r.type}".`);if(t.type===`single`)this._setUniformValue(Le+e,t.id),this._setOrderSelectionActive(e,t.id!==0);else if(t.type===`interval`){let n=t.intervals??{},i=r.components??[];for(let t of Object.keys(n))if(!i.includes(t))throw Error(`Selection "${e}" cannot update unknown component "${t}".`);let a=i.map(t=>{let i=Object.hasOwn(n,t),a=n[t];if(i&&a!==null&&!yn(a))throw Error(`Selection "${e}" component "${t}" requires two numeric bounds or null.`);let o=a!=null,s=r.representations?.get(t);return{active:o,bounds:s?o?s.inputComponents===2?Array.from(a).flatMap(e=>Array.from(se(e))):Array.from(a):s.inputComponents===2?xn:bn:void 0}}),o=!0;for(let[t,{active:n,bounds:r}]of a.entries())o&&=n,this._setUniformValue(He(e,t),+!!n),r&&this._setUniformValue(Ue(e,t),r);this._setOrderSelectionActive(e,o)}else if(t.type===`multi`){let r=ze+e,i=this._selectionBuffers.get(e),a=i?.byteLength/(Uint32Array.BYTES_PER_ELEMENT*2),o=a!==void 0&&t.ids.length/a<=.6,{table:s,size:c}=It(t.ids,o?{capacity:a}:void 0);if(this._setUniformValue(Re+e,c),this._setOrderSelectionActive(e,c>0),!i||i.byteLength<s.byteLength){let t=this._device.createBuffer({label:N(this._label,`selection ${e}`),size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return n.set(r,t),this._selectionBuffers.set(e,{buffer:t,byteLength:s.byteLength}),i?.buffer.destroy(),this._device.queue.writeBuffer(t,0,j(s)),!0}this._device.queue.writeBuffer(i.buffer,0,j(s))}else throw Error(`Selection "${e}" has unsupported type.`);return!1}};function On(e,t){if(e.sourceKind===`missing`)return null;let{name:n,outputComponents:r,inputComponents:i,scalarType:a,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}=e,p=e.channel;if(e.sourceKind===`series`)return{name:n,channel:p,sourceKind:`series`,rawValueExpr:`read_${n}(${t})`,scalarType:a,outputComponents:r,inputComponents:i,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f};let m=`dynamic`in p&&p.dynamic===!0,h=pn(a,i,p.value??p.default),g=`u_${n}`,_=m?`params.${g}`:h;return{name:n,channel:p,sourceKind:m?`uniform`:`literal`,rawValueExpr:_,scalarType:a,outputComponents:r,inputComponents:i,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}}function kn(e,t){let n=[];for(let r of e.values()){let e=On(r,t);e&&n.push(e)}return n}function An({channels:e,analysisByChannel:t,channelNames:n,inputNames:r,seriesIndexExpression:i=`i`}){return{channels:e,analysisByChannel:t,channelIRs:kn(t,i),channelNames:n,inputNames:r}}function jn(e,t){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "inputs" must be an object.`);let n={},r=e;for(let[e,i]of Object.entries(r)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar input "${e}" must be a valid identifier.`);if(t.has(e))throw Error(`Scalar input "${e}" conflicts with a visual channel.`);if(!i||typeof i!=`object`||!ArrayBuffer.isView(i.data)||i.data instanceof DataView)throw Error(`Scalar input "${e}" must specify typed-array data.`);if(i.type!==`f32`&&i.type!==`u32`&&i.type!==`i32`)throw Error(`Scalar input "${e}" must specify type "f32", "u32", or "i32".`);n[e]={data:i.data,type:i.type,components:1,inputComponents:1}}return n}function Mn(e){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "scalarSlots" must be an object.`);let t={},n=e;for(let[e,r]of Object.entries(n)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar slot "${e}" must be a valid identifier.`);if(!r||typeof r!=`object`)throw Error(`Scalar slot "${e}" must be an object.`);Pn(e,r.type,r.value),t[e]=r}return t}function Nn(e){if(e===void 0)return;if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`Mark "order" must be an object.`);let t=e,n=Jt(t.when);if(!n)throw Error(`Mark "order" must specify a selection predicate.`);let r=t.matching??`last`;if(r!==`first`&&r!==`last`)throw Error(`Mark "order.matching" must be "first" or "last".`);return{when:n,matching:r}}function Pn(e,t,n){if(t!==`f32`&&t!==`u32`&&t!==`i32`)throw Error(`Scalar slot "${e}" must specify type "f32", "u32", or "i32".`);if(typeof n!=`number`||Number.isNaN(n))throw Error(`Scalar slot "${e}" must not contain NaN.`);if(t===`u32`&&(!Number.isInteger(n)||n<0||n>4294967295))throw Error(`Scalar slot "${e}" requires a valid u32 value.`);if(t===`i32`&&(!Number.isInteger(n)||n<-2147483648||n>2147483647))throw Error(`Scalar slot "${e}" requires a valid i32 value.`)}var Fn=class{constructor(e,t,n={label:`mark`}){this.renderer=e,this.device=e.device,this.label=n.label,this._destroyed=!1,this._markConfig=t;let r=Qt({channels:t.channels,context:{channelOrder:this.channelOrder,optionalChannels:this.optionalChannels,defaultChannelConfigs:this.defaultChannelConfigs,defaultValues:this.defaultValues,channelSpecs:this.channelSpecs}});this._channels=r.channels,this.antialiasing=this._resolveAntialiasing(),this._visualChannelNames=new Set(Object.keys(this._channels)),this._conditionalChannelNames=this._collectConditionalChannelNames(),this._publicChannelNames=new Set(this._visualChannelNames);for(let e of this._conditionalChannelNames)this._publicChannelNames.delete(e);this._placementIndex=t.placementIndex;let i=this._placementIndex&&`data`in this._placementIndex?{...t.inputs??{},__placementIndex:this._placementIndex}:t.inputs;this._inputs=jn(i,this._visualChannelNames),this._scalarSlots=Mn(t.scalarSlots),this._visibleWhen=qt(t.visibleWhen),this._order=Nn(t.order),this._channels={...this._channels,...this._inputs};for(let[e,t]of Object.entries(this._inputs))r.analysisByChannel.set(e,Ut(e,t));this._compiledChannels=An({channels:this._channels,analysisByChannel:r.analysisByChannel,channelNames:this._publicChannelNames,inputNames:new Set(Object.keys(this._inputs)),seriesIndexExpression:typeof t.seriesIndexExpression==`string`?t.seriesIndexExpression:void 0}),this._logicalSeriesTargets=this._collectLogicalSeriesTargets(),this._seriesBuffers=new Se(this.device,this._channels,this.channelSpecs,this.label),this.count=t.count??this._seriesBuffers.inferCount()??1,this._scaleResources=new Bt({device:this.device,channels:this._channels,analysisByChannel:this._compiledChannels.analysisByChannel,label:this.label,getDefaultScaleRange:e=>this.getDefaultScaleRange(e),setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this._selectionResources=new Dn({device:this.device,channels:this._channels,analysisByChannel:this._compiledChannels.analysisByChannel,visibleWhen:this._visibleWhen,order:this._order,label:this.label,setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this._resourceLayout=[],this._uniformLayout=[],this._uniformBufferState=null,this._extraTextures=new Map,this._extraBuffers=new Map,this._borrowedExtraTextures=new Set,this._borrowedExtraBuffers=new Set,this._slotUpdateDepth=0,this._slotUniformsDirty=!1,this._slotBindingsDirty=!1,this._slotPickingDirty=!1,this._slotHandles={batchUpdates:e=>this._batchSlotUpdates(e),series:{replace:(e,t)=>{this._assertAlive(),this.replaceSeries(e,t)}},scales:{},values:{},properties:{},extraValues:{},scalarSlots:{},selections:{}},this._buildUniformLayout(),this._validateUniformBufferCapacity(),this._initializeExtraResources(),this._selectionResources.initializeSelections(this._extraBuffers);let a=[...this._selectionResources.getExtraResourceDefs(),...this.getExtraResourceDefs()],{bindGroupLayout:o,pipeline:s,getPipeline:c,getPickPipeline:l,diagnostics:u,resourceLayout:d}=vn({device:this.device,cache:e._programTemplateCache,globalBindGroupLayout:e._globalBindGroupLayout,format:e.format,pickFormat:e.pickFormat,compiledChannels:this._compiledChannels,uniformLayout:this._uniformLayout,shaderBody:this.shaderBody,packedSeriesLayout:this._seriesBuffers.packedSeriesLayoutEntries??void 0,selectionDefs:this._selectionResources.selectionDefs,visibleWhen:this._visibleWhen,order:this._order,scalarSlots:this._scalarSlots,extraResources:a,primitiveTopology:this.primitiveTopology,placementBindGroupLayout:e._placementBindGroupLayout,placementIndex:this._placementIndex,label:this.label});this._resourceLayout=d,this._programTemplateDiagnostics=u,this._uniformBuffer=this.device.createBuffer({label:N(this.label,`uniforms`),size:this._uniformBufferState?.byteLength??0,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._initializeUniforms();let f=this._markConfig.dynamicValues??{};for(let[e,t]of Object.entries(f))this._setUniformValue(e,t.value);for(let[e,t]of Object.entries(this._scalarSlots))this._setUniformValue(Xt(e),t.value);this._writeUniforms(),this._buildSlotHandles(),this._bindGroupLayout=o,this._pipeline=s,this._getPipeline=c,this._getPickPipeline=l,this.updateSeries(Object.fromEntries(Object.entries(this._channels).filter(([,e])=>k(e)).map(([e,t])=>[e,t.data])),this.count)}get drawCount(){return this.count}get _orderActive(){return this._selectionResources.orderActive}resolveDrawRange(e,t){return{firstInstance:e,instanceCount:t}}get channelOrder(){return[]}get optionalChannels(){return[]}get channelSpecs(){return{}}get defaultChannelConfigs(){return{}}get defaultValues(){return{}}getExtraUniformLayout(){return[]}getExtraResourceDefs(){return[]}_initializeExtraResources(){}get shaderBody(){return``}_resolveAntialiasing(){return`shader`}get primitiveTopology(){return`triangle-list`}getDefaultScaleRange(e){}updateSeries(e,t,n=!1){let r=t??this._seriesBuffers.inferCount(e);this.count=r??this.count??1,(this._seriesBuffers.updateSeries(e,this.count)||n||!this._bindGroup)&&this._rebuildBindGroup(),this.renderer.markPickingDirty()}replaceSeries(e,t){let n={};for(let[t,r]of this._logicalSeriesTargets){if(r.length>1)throw Error(`Series replacement for channel "${t}" is not supported because it has multiple series-backed branches.`);let i=e[t];if(i===void 0)throw Error(`Series replacement is missing channel "${t}".`);n[r[0]]=i}this.updateSeries(n,t)}_collectConditionalChannelNames(){let e=new Set;for(let t of Object.values(this._channels))for(let n of t.conditions??[])n.channelName&&e.add(n.channelName);return e}_collectLogicalSeriesTargets(){let e=new Map;for(let[t,n]of Object.entries(this._channels)){if(this._conditionalChannelNames.has(t))continue;let r=[];k(n)&&r.push(t);for(let e of n.conditions??[]){if(!e.channelName)continue;let t=this._channels[e.channelName];t&&k(t)&&r.push(e.channelName)}r.length>0&&e.set(t,r)}return e}_rebuildBindGroup(){this._bindGroup=Ce({device:this.device,label:this.label,layout:this._bindGroupLayout,uniformBuffer:this._uniformBuffer,resourceLayout:this._resourceLayout,getSeriesBuffer:e=>this._seriesBuffers.getBuffer(e),getScaleResources:e=>this._scaleResources.getChannelResources(e),extraTextures:this._extraTextures,extraBuffers:this._extraBuffers})}updateValues(e){for(let[t,n]of Object.entries(e)){let e=`u_${t}`;if(!this._uniformBufferState?.entries.has(e))throw Error(`Uniform "${e}" is not available for updates.`);this._setUniformValue(e,n)}this._writeUniforms(),this.renderer.markPickingDirty()}debugResources(e=this.constructor.name){}getSlotHandles(){return this._slotHandles}_buildSlotHandles(){let e=(e,t)=>(e[t]||(e[t]={}),e[t]),t=(e,t)=>(e[t]||(e[t]={}),e[t]),n=(e,t)=>{e.default=t,e.setDomain=t.setDomain,e.setRange=t.setRange},r=(e,t)=>{e.default=t,e.set=t.set};for(let[i,a]of Object.entries(this._channels)){if(this._conditionalChannelNames.has(i))continue;a.scale&&n(e(this._slotHandles.scales,i),this._createScaleSlot(i)),A(a)&&a.dynamic&&r(t(this._slotHandles.values,i),this._createValueSlot(i));let o=a.conditions??[];if(o.length)for(let[n,r]of o.entries()){if(!r.channelName)continue;let a=this._channels[r.channelName];if(a){if(a.scale){let t=e(this._slotHandles.scales,i);t.conditions||={},t.conditions[n]=this._createScaleSlot(r.channelName)}if(A(a)&&a.dynamic){let e=t(this._slotHandles.values,i);e.conditions||={},e.conditions[n]=this._createValueSlot(r.channelName)}}}}let i=this._markConfig.dynamicValues??{};for(let e of Object.keys(i))this._slotHandles.extraValues[e]=this._createExtraValueSlot(e);for(let e of Object.keys(this._scalarSlots))this._slotHandles.scalarSlots[e]=this._createScalarSlot(e);for(let e of this._selectionResources.selectionDefs)this._slotHandles.selections[e.name]=this._createSelectionSlot(e)}_createScaleSlot(e){let t=this._scaleResources.getScaleUpdater(e);return{setDomain:e=>{this._assertAlive();let n=t.updateDomain(e);this._queueSlotUpdate(n)},setRange:e=>{this._assertAlive();let n=t.updateRange(e);this._queueSlotUpdate(n)}}}_createValueSlot(e){let t=`u_${e}`;if(!this._uniformBufferState?.entries.has(t))throw Error(`Uniform "${t}" is not available for updates.`);return{set:e=>{this._assertAlive(),this._setUniformValue(t,e),this._queueSlotUpdate(!1)}}}_createExtraValueSlot(e){if(!this._uniformBufferState?.entries.has(e))throw Error(`Uniform "${e}" is not available for updates.`);return{set:t=>{this._assertAlive(),this._setExtraUniformValue(e,t),this._queueSlotUpdate(!1)}}}_createScalarSlot(e){let t=this._scalarSlots[e];if(!t)throw Error(`Unknown scalar slot "${e}".`);let n=Xt(e);if(!this._uniformBufferState?.entries.has(n))throw Error(`Uniform "${n}" is not available for updates.`);return{set:r=>{this._assertAlive(),Pn(e,t.type,r),this._setUniformValue(n,r),this._queueSlotUpdate(!1)}}}_setExtraUniformValue(e,t){this._setUniformValue(e,t)}_createSelectionSlot(e){let t=t=>{this._assertAlive();let n=this._selectionResources.updateSelection(e.name,t,this._extraBuffers);this._queueSlotUpdate(n)};return e.type===`single`?{type:`single`,set:e=>t({type:`single`,id:e})}:e.type===`multi`?{type:`multi`,set:e=>t({type:`multi`,ids:e})}:{type:`interval`,components:e.components??[],set:e=>t({type:`interval`,intervals:e})}}_batchSlotUpdates(e){this._assertAlive(),this._slotUpdateDepth++;try{e()}finally{this._slotUpdateDepth--,this._slotUpdateDepth===0&&this._flushSlotUpdates()}}_queueSlotUpdate(e){this._slotUniformsDirty=!0,this._slotBindingsDirty||=e,this._slotPickingDirty=!0,this._slotUpdateDepth===0&&this._flushSlotUpdates()}_flushSlotUpdates(){this._slotUniformsDirty&&this._writeUniforms(),this._slotBindingsDirty&&this._rebuildBindGroup(),this._slotPickingDirty&&this.renderer.markPickingDirty(),this._slotUniformsDirty=!1,this._slotBindingsDirty=!1,this._slotPickingDirty=!1}_validateUniformBufferCapacity(){let e=this.device.limits?.maxUniformBufferBindingSize,t=this._uniformBufferState?.byteLength??0;if(e===void 0||t<=e)return;let n=this._selectionResources.selectionDefs.filter(e=>e.type===`interval`).map(e=>`"${e.name}" (${e.components?.length??0} components)`).join(`, `);throw Error(`Uniform buffer for interval selection ${n||`mark`} requires ${t} bytes, exceeding the device limit of ${e} bytes.`)}_buildUniformLayout(){let e=[];for(let[t,n]of Object.entries(this._channels))A(n)&&n.dynamic&&e.push({name:`u_${t}`,type:n.type??`f32`,components:n.components??1}),k(n)&&n.scale&&this._scaleResources.addScaleUniforms(e,t,n),A(n)&&n.scale&&this._scaleResources.addScaleUniforms(e,t,n);for(let[t,n]of Object.entries(this._scalarSlots))e.push({name:Xt(t),type:n.type,components:1});this._selectionResources.addSelectionUniforms(e),this._uniformLayout=e.concat(this.getExtraUniformLayout()),this._uniformLayout.length===0&&this._uniformLayout.push({name:`dummy`,type:`f32`,components:1}),this._uniformBufferState=new pe(this._uniformLayout)}_initializeUniforms(){for(let[e,t]of Object.entries(this._channels)){if(k(t)&&t.scale){this._scaleResources.initializeScale(e,t,t.scale);let n=this._scaleResources.getScaleUpdater(e);n.updateDomain(t.scale.domain);let r=t.scale.range??this.getDefaultScaleRange(e);r!==void 0&&n.updateRange(r)}if(A(t)&&t.scale){this._scaleResources.initializeScale(e,t,t.scale);let n=this._scaleResources.getScaleUpdater(e);n.updateDomain(t.scale.domain);let r=t.scale.range??this.getDefaultScaleRange(e);r!==void 0&&n.updateRange(r)}A(t)&&t.dynamic&&this._setUniformValue(`u_${e}`,t.value)}this._initializeExtraUniforms()}_initializeExtraUniforms(){}_setUniformValue(e,t){this._uniformBufferState?.setValue(e,t)}_writeUniforms(){!this._uniformBufferState||this._uniformBufferState.byteLength===0||this.device.queue.writeBuffer(this._uniformBuffer,0,this._uniformBufferState.data)}prepareDraw(e,t){e.setPipeline(this._getPipeline(t.sampleCount)),e.setBindGroup(1,this._bindGroup)}preparePick(e){e.setPipeline(this._getPickPipeline()),e.setBindGroup(1,this._bindGroup)}draw(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}drawPick(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}destroy(){if(!this._destroyed){this._destroyed=!0,this._uniformBuffer.destroy(),this._seriesBuffers.destroy(),this._scaleResources.destroy();for(let[e,t]of this._extraBuffers)this._borrowedExtraBuffers.has(e)||t.destroy();this._extraBuffers.clear();for(let[e,{texture:t}]of this._extraTextures)this._borrowedExtraTextures.has(e)||t.destroy();this._extraTextures.clear()}}_assertAlive(){if(this.renderer._assertAlive(),this._destroyed)throw Error(`${this.constructor.name} has been destroyed.`)}};function In(e){let t={},n={},r=[];for(let[i,a]of Object.entries(e)){a.optional&&r.push(i),a.default!==void 0&&(t[i]=a.default);let e={};a.type&&(e.type=a.type),a.components&&(e.components=a.components),a.scale&&(e.scale=a.scale),a.default!==void 0&&(e.value=a.default),Object.keys(e).length>0&&(n[i]=e)}return{channels:Object.keys(e),defaults:t,defaultConfigs:n,optionalChannels:r}}var Ln={type:`linear`,input:`numeric`,output:`f32`,params:[],continuous:!0,vectorOutput:`always`,wgsl:`
fn scaleLinear(value: f32, domain: vec2<f32>, range: vec2<f32>) -> f32 {
    let domainSpan = domain.y - domain.x;
    let rangeSpan = range.y - range.x;
    let unit = select(0.5, (value - domain.x) / domainSpan, domainSpan != 0.0);
    return unit * rangeSpan + range.x;
}
`,resources:{stopKind:`continuous`,supportsPiecewise:!0,needsDomainMap:!1,needsOrdinalRange:!1},validate:zn,emit:Rn};Object.freeze(Ln);function Rn(e){let{name:t,functionName:n,rawValueExpr:r,inputScalarType:i,outputComponents:a,outputScalarType:o,clamp:s,round:c,useRangeTexture:l,domainLength:u,rangeLength:d}=e,f=u||2,p=d||2;if(f<2||p<2)throw Error(`Linear scale on "${t}" requires at least two domain and range entries.`);if(f!==p)throw Error(`Linear scale on "${t}" requires matching domain/range arrays.`);if(f===2&&p===2&&(l||a===1))return ot({name:t,functionName:n,rawValueExpr:r,inputScalarType:i,clamp:s,round:c,useRangeTexture:l},({name:e,valueExpr:t})=>`scaleLinear(${t}, ${rt(e)}, ${I(e)})`);let m=l?`vec4<f32>`:a===1?o:`vec${a}<f32>`,h=[];if(i!==`f32`&&h.push(Ye(i)),s){let e=`vec2<f32>(params.${P}${t}[0].x, params.${P}${t}[${f}u - 1u].x)`;h.push(Xe(e))}return h.push($e({name:t,domainLength:f,outputComponents:a,outputScalarType:o,useRangeTexture:l})),c&&!l&&h.push(Qe()),Je({name:t,functionName:n,rawValueExpr:r,steps:h,returnType:m,useRangeTexture:l})}function zn({name:e,channel:t,outputComponents:n,inputComponents:r,isPiecewise:i}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but linear scales only support scalars or vec4 outputs.`;if(!i)return null;let a=t.scale?.domain,o=t.scale?.range;return!Array.isArray(a)||a.length<2?`Piecewise scale on "${e}" requires at least two domain entries.`:!Array.isArray(o)||o.length<2?`Piecewise scale on "${e}" requires at least two range entries.`:a.length===o.length?r===1?null:`Piecewise scale on "${e}" requires scalar input values.`:`Piecewise scale on "${e}" requires range length of ${a.length}, got ${o.length}.`}function L(e,t){return{...t,type:e.type,definition:e}}var Bn=Ln;function R(e={}){return L(Bn,e)}var Vn={uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:R(),default:.5},y:{components:1,scale:R(),default:.5},xOffset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:100},shape:{type:`u32`,components:1,default:0},strokeWidth:{type:`f32`,components:1,default:2},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.3,.5,.7,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},angle:{type:`f32`,components:1,default:0},gradientStrength:{type:`f32`,components:1,default:0},inwardStroke:{type:`u32`,components:1,default:0},minPickingSize:{type:`f32`,components:1,default:2}},{channels:Hn,defaults:Un,defaultConfigs:Wn,optionalChannels:Gn}=In(Vn),Kn=`
fn distanceToRatio(d: f32) -> f32 {
    return clamp(d * globals.dpr + 0.5, 0.0, 1.0);
}

fn sourceOver(above: vec4<f32>, below: vec4<f32>) -> vec4<f32> {
    return above + below * (1.0 - above.a);
}

fn circle(p: vec2<f32>, r: f32) -> f32 {
    return length(p) - r;
}

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) local: vec2<f32>,
    @location(1) radius: f32,
    @location(2) radiusWithPadding: f32,
    @location(3) fill: vec4<f32>,
    @location(4) stroke: vec4<f32>,
    @location(5) fillOpacity: f32,
    @location(6) strokeOpacity: f32,
    @location(7) halfStrokeWidth: f32,
    @location(8) gradientStrength: f32,
    @location(9) @interpolate(flat) inwardStroke: u32,
    @location(10) @interpolate(flat) pickId: u32,
};

fn culledPoint() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.local = vec2<f32>(0.0);
    out.radius = 0.0;
    out.radiusWithPadding = 0.0;
    out.fill = vec4<f32>(0.0);
    out.stroke = vec4<f32>(0.0);
    out.fillOpacity = 0.0;
    out.strokeOpacity = 0.0;
    out.halfStrokeWidth = 0.0;
    out.gradientStrength = 0.0;
    out.inwardStroke = 0u;
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

    if (strokeOpacity <= 0.0) {
        strokeWidth = 0.0;
    }

    let aaPadding = 1.0 / globals.dpr;
    let strokePadding = select(
        strokeWidth,
        0.0,
        getScaled_inwardStroke(i) > 0u
    );
    let padding = strokePadding + aaPadding;

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
    out.radius = diameter * 0.5;
    out.radiusWithPadding = out.radius + padding * 0.5;
    out.fill = getScaled_fill(i);
    out.stroke = getScaled_stroke(i);
    out.fillOpacity = getScaled_fillOpacity(i);
    out.strokeOpacity = strokeOpacity;
    out.halfStrokeWidth = strokeWidth * 0.5;
    out.gradientStrength = getScaled_gradientStrength(i);
    out.inwardStroke = getScaled_inwardStroke(i);
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn shade(in: VSOut) -> vec4<f32> {
    let p = (in.local * 2.0 - vec2<f32>(1.0)) * in.radiusWithPadding;
    let r = in.radius;
    let d = circle(p, r);

    var fillColor = in.fill;
    var strokeColor = in.stroke;

    fillColor.a = fillColor.a * in.fillOpacity;
    strokeColor.a = strokeColor.a * in.strokeOpacity;

    if (in.gradientStrength > 0.0) {
        fillColor = mix(fillColor, vec4<f32>(1.0), -d * in.gradientStrength / max(r, 0.0001));
    }

    fillColor = premultiplyAlpha(fillColor);
    strokeColor = premultiplyAlpha(strokeColor);

    let fillCoverage = distanceToRatio(-d);
    var strokeCoverage: f32;
    if (in.inwardStroke > 0u) {
        let innerCoverage = distanceToRatio(-d - 2.0 * in.halfStrokeWidth);
        strokeCoverage = max(fillCoverage - innerCoverage, 0.0);
    } else {
        let outerCoverage = distanceToRatio(in.halfStrokeWidth - d);
        let innerCoverage = distanceToRatio(-in.halfStrokeWidth - d);
        strokeCoverage = max(outerCoverage - innerCoverage, 0.0);
    }
    let fillLayer = fillColor * fillCoverage;
    let strokeLayer = strokeColor * strokeCoverage;
    let color = sourceOver(strokeLayer, fillLayer);

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
`,qn=class extends Fn{get channelOrder(){return Hn}get optionalChannels(){return Gn}get channelSpecs(){return Vn}get defaultChannelConfigs(){return Wn}get defaultValues(){return Un}get shaderBody(){return Kn}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`)return[0,this.renderer._globals.width];if(e===`y`)return[0,this.renderer._globals.height]}}},Jn=Math.PI/180,Yn=Math.PI/2,Xn=Math.PI*2;function Zn(e,t,n,r,i,a,o,s,c){let l=o*Jn,u=Math.sin(l),d=Math.cos(l);n=Math.abs(n),r=Math.abs(r);let f=(d*(s-e)+u*(c-t))*.5,p=(d*(c-t)-u*(s-e))*.5,m=f*f/(n*n)+p*p/(r*r);m>1&&(m=Math.sqrt(m),n*=m,r*=m);let h=d/n,g=u/n,_=-u/r,v=d/r,y=h*s+g*c,b=_*s+v*c,x=h*e+g*t,S=_*e+v*t,C=1/((x-y)**2+(S-b)**2)-.25;C<0&&(C=0);let w=Math.sqrt(C);a==i&&(w=-w);let T=.5*(y+x)-w*(S-b),E=.5*(b+S)+w*(x-y),D=Math.atan2(b-E,y-T),O=Math.atan2(S-E,x-T)-D;O<0&&a===1?O+=Xn:O>0&&a===0&&(O-=Xn);let ee=Math.ceil(Math.abs(O/(Yn+.001))),te=[];for(let e=0;e<ee;e++)te.push([T,E,D+e*O/ee,D+(e+1)*O/ee,n,r,u,d]);return te}function Qn(e){let[t,n,r,i,a,o,s,c]=e,l=c*a,u=-s*o,d=s*a,f=c*o,p=.5*(i-r),m=Math.sin(p*.5),h=8/3*m*m/Math.sin(p),g=Math.cos(r),_=Math.sin(r),v=Math.cos(i),y=Math.sin(i),b=t+g-h*_,x=n+_+h*g,S=t+v,C=n+y,w=S+h*y,T=C-h*v;return[l*b+u*x,d*b+f*x,l*w+u*T,d*w+f*T,l*S+u*C,d*S+f*C]}var $n={m:2,l:2,h:1,v:1,z:0,c:6,s:4,q:4,t:2,a:7},er=/[mlhvzcsqta]([^mlhvzcsqta]*)/gi,tr=/^[+-]?(([0-9]*\.[0-9]+)|([0-9]+\.)|([0-9]+))([eE][+-]?[0-9]+)?/,nr=/^((\s+,?\s*)|(,\s*))/,rr=/^[01]/;function ir(e){let t=[],n=e.match(er)||[];for(let e of n){let n=e[0],r=n.toLowerCase(),i=$n[r],a=ar(r,i,e.slice(1).trim()),o=a.length;if(o<i||o&&o%i!==0)throw Error(`Invalid SVG path, incorrect parameter count.`);if(t.push([n,...a.slice(0,i)]),o!==i){r===`m`&&(n=n===`M`?`L`:`l`);for(let e=i;e<o;e+=i)t.push([n,...a.slice(e,e+i)])}}if(t.length===0&&e.trim()!==``)throw Error(`Invalid SVG path, no commands found.`);return t}function ar(e,t,n){let r=[];for(let i=0;t&&i<n.length;)for(let a=0;a<t;a++){let t=e===`a`&&(a===3||a===4)?rr:tr,o=n.slice(i).match(t);if(o===null)throw Error(`Invalid SVG path, incorrect parameter type.`);i+=o[0].length,r.push(+o[0]);let s=n.slice(i).match(nr);s!==null&&(i+=s[0].length)}return r}function or(e){let t=ir(e),n=[],r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=``,f=1/0,p=1/0,m=-1/0,h=-1/0,g=(...e)=>{for(let t=0;t<e.length;t+=2)f=Math.min(f,e[t]),p=Math.min(p,e[t+1]),m=Math.max(m,e[t]),h=Math.max(h,e[t+1])};for(let e of t){let t=e[0],f=t===t.toLowerCase(),p=t.toUpperCase(),m=e=>f?r+e:e,h=e=>f?i+e:e;if(p===`M`)r=m(e[1]),i=h(e[2]),a=r,o=i,n.push({type:`M`,x:r,y:i}),g(r,i);else if(p===`L`)r=m(e[1]),i=h(e[2]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`H`)r=m(e[1]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`V`)i=h(e[1]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`C`){let t=m(e[1]),a=h(e[2]),o=m(e[3]),l=h(e[4]);r=m(e[5]),i=h(e[6]),n.push({type:`C`,x1:t,y1:a,x2:o,y2:l,x:r,y:i}),g(t,a,o,l,r,i),s=o,c=l}else if(p===`S`){let t=d===`C`||d===`S`,a=t?2*r-s:r,o=t?2*i-c:i,l=m(e[1]),u=h(e[2]);r=m(e[3]),i=h(e[4]),n.push({type:`C`,x1:a,y1:o,x2:l,y2:u,x:r,y:i}),g(a,o,l,u,r,i),s=l,c=u}else if(p===`Q`){let t=m(e[1]),a=h(e[2]);r=m(e[3]),i=h(e[4]),n.push({type:`Q`,x1:t,y1:a,x:r,y:i}),g(t,a,r,i),l=t,u=a}else if(p===`T`){let t=d===`Q`||d===`T`,a=t?2*r-l:r,o=t?2*i-u:i;r=m(e[1]),i=h(e[2]),n.push({type:`Q`,x1:a,y1:o,x:r,y:i}),g(a,o,r,i),l=a,u=o}else if(p===`A`){let t=m(e[6]),a=h(e[7]),o=e[1],l=e[2];if(o===0||l===0)n.push({type:`L`,x:t,y:a}),g(t,a);else{let u=Zn(t,a,o,l,e[4],e[5],e[3],r,i);for(let e of u){let[t,r,i,a,o,l]=Qn(e);n.push({type:`C`,x1:t,y1:r,x2:i,y2:a,x:o,y:l}),g(t,r,i,a,o,l),s=i,c=a}}r=t,i=a}else if(p===`Z`)n.push({type:`Z`}),r=a,i=o;else throw Error(`Unsupported SVG path command: ${t}`);p!==`C`&&p!==`S`&&p!==`A`&&(s=r,c=i),p!==`Q`&&p!==`T`&&(l=r,u=i),d=p}return{commands:n,bounds:f===1/0?null:{xMin:f,yMin:p,xMax:m,yMax:h}}}var sr=Object.freeze({tileSize:128,spread:32,shapePadding:40,gutter:1,cubicTolerance:.25}),cr=0,lr=1,ur=Math.sin(3),dr=12,fr=4;function pr(e,t){return Math.abs(e.x-t.x)<=1e-9&&Math.abs(e.y-t.y)<=1e-9}function mr(e,t){return{x:(e.x+t.x)*.5,y:(e.y+t.y)*.5}}function hr(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function z(e){let t=Math.hypot(e.x,e.y);return t<=1e-12?null:{x:e.x/t,y:e.y/t}}function gr(e,t){return{x:e.x-t.x,y:e.y-t.y}}function _r(e,t){return e.x*t.y-e.y*t.x}function vr(e,t){return e.x*t.x+e.y*t.y}function yr(e,t){return vr(e,t)<=0||Math.abs(_r(e,t))>ur}function br(e,t){return{x:e.x+t.x,y:e.y+t.y}}function xr(e){let t=[],n=null,r=null,i=null;for(let a of e.commands)if(a.type===`M`){if(n)throw Error(`Sparse path atlas requires closed contours.`);r={x:a.x,y:a.y},i=r,n=[]}else if(a.type===`L`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};pr(r,e)||n.push({kind:`line`,p0:r,p1:mr(r,e),p2:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`Q`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};n.push({kind:`quadratic`,p0:r,p1:{x:a.x1,y:a.y1},p2:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`C`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};n.push({kind:`cubic`,p0:r,p1:{x:a.x1,y:a.y1},p2:{x:a.x2,y:a.y2},p3:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`Z`){if(!n||!r||!i)throw Error(`Sparse path atlas close requires a contour.`);if(pr(r,i)||n.push({kind:`line`,p0:r,p1:mr(r,i),p2:i,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),n.length===0)throw Error(`Sparse path atlas contours must contain visible edges.`);t.push(n),n=null,r=null,i=null}if(n)throw Error(`Sparse path atlas requires closed contours.`);if(t.length===0)throw Error(`Sparse path atlas requires visible contours.`);return t}function Sr(e){return z(gr(e.p1,e.p0))??z(gr(e.p2,e.p0))}function Cr(e){return e.kind===`cubic`?z(gr(e.p3,e.p2))??z(gr(e.p3,e.p0)):e.kind===`quadratic`?z(gr(e.p2,e.p1))??z(gr(e.p2,e.p0)):z(gr(e.p2,e.p0))}function wr(e,t){return t>0?{x:e.y,y:-e.x}:{x:-e.y,y:e.x}}function Tr(e,t,n){let r=e.bounds,i=r.xMax-r.xMin,a=r.yMax-r.yMin,o=n??Math.max(i,a),s=[-i/o/2,-a/o/2,i/o/2,a/o/2],c=[1,1,1,1];for(let e of t){let t=Math.sign(e.reduce((e,t)=>e+_r(t.p0,t.p3??t.p2),0));if(t!==0)for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],i=e[n],a=Cr(r),o=Sr(i);if(!a||!o||!yr(a,o)||_r(a,o)*t<=1e-9)continue;let s=wr(a,t),l=wr(o,t),u=z(br(s,l)),d=u?vr(u,l):0;if(!(d>1e-9))continue;let f={x:Math.max(-4,Math.min(fr,u.x/d)),y:Math.max(-4,Math.min(fr,u.y/d))};c[0]=Math.max(c[0],-f.x),c[1]=Math.max(c[1],-f.y),c[2]=Math.max(c[2],f.x),c[3]=Math.max(c[3],f.y)}}return{localBounds:s,strokePadding:c}}function Er(e,t=0){let n=e&t;if(n===1||n===2||n===4)return n^7;let r=e<<1;return(r|r>>3)&7}function Dr(e,t){return Math.floor(3+2.875*e/(t-1)-1.4375+.5)-3}function Or(e,t){let n=e.map((t,n)=>{let r=e[(n+e.length-1)%e.length],i=Cr(r),a=Sr(t);return!i||!a||yr(i,a)}),r=n.flatMap((e,t)=>e?[t]:[]);if(r.length===0){t.colorMask=Er(t.colorMask);for(let n of e)n.colorMask=t.colorMask;return n}if(r.length===1){t.colorMask=Er(t.colorMask);let i=[t.colorMask,7];t.colorMask=Er(t.colorMask),i.push(t.colorMask);let a=r[0];if(e.length<3)for(let t of e)t.colorMask=7;else for(let t=0;t<e.length;t++){let n=1+Dr(t,e.length);e[(a+t)%e.length].colorMask=i[n]}return n}t.colorMask=Er(t.colorMask);let i=t.colorMask,a=0,o=r[0];for(let n=0;n<e.length;n++){let s=(o+n)%e.length;if(a+1<r.length&&r[a+1]===s){a++;let e=a===r.length-1?i:0;t.colorMask=Er(t.colorMask,e)}e[s].colorMask=t.colorMask}return n}function kr(e,t){for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],i=e[n],a=e[(n+1)%e.length],o=Cr(r),s=Sr(i),c=Cr(i),l=Sr(a),u=t[n]&&o&&s?z(br(o,s)):null,d=t[(n+1)%e.length]&&c&&l?z(br(c,l)):null;i.startPseudoDomain=u??{x:0,y:0},i.endPseudoDomain=d??{x:0,y:0},i.startPseudoMask=u?i.colorMask:0,i.endPseudoMask=d?i.colorMask:0}}function Ar(e,t,n,r){return{x:n+e.x*t,y:r+e.y*t}}function jr(e,t,n,r){let i=mr(e,t),a=mr(t,n),o=mr(n,r),s=mr(i,a),c=mr(a,o),l=mr(s,c);return[[e,i,s,l],[l,c,o,r]]}function Mr(e,t,n,r){let i={x:(3*(t.x+n.x)-e.x-r.x)*.25,y:(3*(t.y+n.y)-e.y-r.y)*.25},a={x:(e.x+2*i.x)/3,y:(e.y+2*i.y)/3},o={x:(2*i.x+r.x)/3,y:(2*i.y+r.y)/3};return{control:i,error:Math.max(hr(t,a),hr(n,o))}}function Nr(e,t,n,r,i,a,o,s=0){let c=Mr(e,t,n,r);if(c.error<=i||s>=dr){o.push({p0:e,p1:c.control,p2:r,kind:lr,...a});return}let[l,u]=jr(e,t,n,r);Nr(l[0],l[1],l[2],l[3],i,{...a,endPseudoMask:0,endPseudoDomain:{x:0,y:0}},o,s+1),Nr(u[0],u[1],u[2],u[3],i,{...a,startPseudoMask:0,startPseudoDomain:{x:0,y:0}},o,s+1)}function Pr(e){let t=new ArrayBuffer(e.length*64),n=new DataView(t);for(let t=0;t<e.length;t++){let r=e[t],i=t*64;[r.p0.x,r.p0.y,r.p1.x,r.p1.y,r.p2.x,r.p2.y,0,0].forEach((e,t)=>{n.setFloat32(i+t*4,e,!0)}),n.setFloat32(i+32,r.startPseudoDomain.x,!0),n.setFloat32(i+36,r.startPseudoDomain.y,!0),n.setFloat32(i+40,r.endPseudoDomain.x,!0),n.setFloat32(i+44,r.endPseudoDomain.y,!0),n.setUint32(i+48,r.kind,!0),n.setUint32(i+52,r.colorMask,!0),n.setUint32(i+56,r.jobIndex,!0),n.setUint32(i+60,r.startPseudoMask|r.endPseudoMask<<3,!0)}return t}function Fr(e){let t=new ArrayBuffer(e.length*32),n=new DataView(t);for(let t=0;t<e.length;t++){let r=e[t],i=t*32;[r.edgeOffset,r.edgeCount,r.slotX,r.slotY,r.slotWidth,r.slotHeight,r.gutter,0].forEach((e,t)=>n.setUint32(i+t*4,e,!0))}return t}function Ir(e,t){let n=e.reduce((e,t)=>e+t.slotWidth*t.slotHeight,0),r=Math.max(...e.map(e=>e.slotWidth)),i=t??Math.max(r,Math.ceil(Math.sqrt(n)));if(!Number.isInteger(i)||i<r)throw Error(`Invalid sparse path atlas packing width.`);let a=0,o=0,s=0,c=0;return{placements:e.map(e=>{a>0&&a+e.slotWidth>i&&(a=0,o+=s,s=0);let t={x:a,y:o};return a+=e.slotWidth,s=Math.max(s,e.slotHeight),c=Math.max(c,a),t}),get width(){return c},get height(){return o+s}}}function Lr(e,t={}){if(!Array.isArray(e)||e.length===0)throw Error(`Sparse path atlas requires a non-empty paths array.`);let n=t.tileSize??sr.tileSize,r=t.spread??sr.spread,i=t.shapePadding??sr.shapePadding,a=t.gutter??sr.gutter,o=t.cubicTolerance??sr.cubicTolerance,s=t.normalizationSpan,c=t.tightPacking??!1,l=n-i*2;if(!Number.isInteger(n)||n<=0||l<=0||r<=0||r>i||!Number.isInteger(a)||a<1||o<=0||s!==void 0&&!(s>0))throw Error(`Invalid sparse path atlas dimensions.`);for(let t of e)if(typeof t!=`string`||t.trim()===``)throw Error(`Sparse path atlas paths must be SVG strings.`);let u=Array.from(new Set(e)),d=n+a*2,f=Math.ceil(Math.sqrt(u.length)),p=u.map(e=>{let t=or(e);if(!t.bounds)throw Error(`Sparse path atlas path must have visible bounds.`);let r=t.bounds.xMax-t.bounds.xMin,o=t.bounds.yMax-t.bounds.yMin,u=Math.max(r,o);if(!(u>0))throw Error(`Sparse path atlas path must have non-zero bounds.`);let d=l/(s??u),f=c?Math.max(1,Math.ceil(r*d+i*2)):n,p=c?Math.max(1,Math.ceil(o*d+i*2)):n;return{pathString:e,path:t,pathWidth:r,pathHeight:o,scale:d,tileWidth:f,tileHeight:p,slotWidth:f+a*2,slotHeight:p+a*2}}),m=c?Ir(p,t.maxAtlasWidth):null,h=Math.ceil(u.length/f),g=m?.width??f*d,_=m?.height??h*d,v=[],y=[],b=new Map;for(let e=0;e<u.length;e++){let{pathString:t,path:n,pathWidth:r,pathHeight:i,scale:c,tileWidth:l,tileHeight:u,slotWidth:h,slotHeight:x}=p[e],S=e%f,C=Math.floor(e/f),w=m?.placements[e].x??S*d,T=m?.placements[e].y??C*d,E=w+a+(l-r*c)*.5-n.bounds.xMin*c,D=T+a+(u-i*c)*.5-n.bounds.yMin*c,O=v.length,ee=xr(n),te={colorMask:6};for(let t of ee){kr(t,Or(t,te));for(let n of t){let t=Ar(n.p0,c,E,D),r=Ar(n.p1,c,E,D),i=Ar(n.p2,c,E,D);n.kind===`cubic`?Nr(t,r,i,Ar(n.p3,c,E,D),o,{colorMask:n.colorMask,startPseudoMask:n.startPseudoMask,endPseudoMask:n.endPseudoMask,startPseudoDomain:n.startPseudoDomain,endPseudoDomain:n.endPseudoDomain,jobIndex:e},v):v.push({p0:t,p1:r,p2:i,kind:n.kind===`line`?cr:lr,colorMask:n.colorMask,startPseudoMask:n.startPseudoMask,endPseudoMask:n.endPseudoMask,startPseudoDomain:n.startPseudoDomain,endPseudoDomain:n.endPseudoDomain,jobIndex:e})}}y.push({edgeOffset:O,edgeCount:v.length-O,slotX:w,slotY:T,slotWidth:h,slotHeight:x,tileWidth:l,tileHeight:u,gutter:a});let{localBounds:ne,strokePadding:re}=Tr(n,ee,s);b.set(t,[(w+a+.5)/g,(T+a+.5)/_,(w+a+l-.5)/g,(T+a+u-.5)/_,...ne,...re])}let x=new Float32Array(e.length*12);for(let t=0;t<e.length;t++)x.set(b.get(e[t]),t*12);return{width:g,height:_,tileSize:n,shapePixels:l,spread:r,gutter:a,slotSize:d,maxSlotWidth:Math.max(...y.map(e=>e.slotWidth)),maxSlotHeight:Math.max(...y.map(e=>e.slotHeight)),columns:f,pathCount:e.length,uniquePathCount:u.length,entries:x,segments:v,jobs:y,segmentData:Pr(v),jobData:Fr(y)}}var Rr=`
struct Segment {
    p0p1: vec4<f32>,
    p2pad: vec4<f32>,
    pseudoDomains: vec4<f32>,
    metadata: vec4<u32>,
};
`,zr=`
struct Job {
    edgeRange: vec4<u32>,
    tileInfo: vec4<u32>,
};

struct Params {
    atlasSize: vec2<u32>,
    maxSlotSize: vec2<u32>,
    spread: f32,
    minDeviationRatio: f32,
    jobCount: u32,
    passMode: u32,
};
`,Br=`
fn quadraticPoint(
    p0: vec2<f32>,
    p1: vec2<f32>,
    p2: vec2<f32>,
    t: f32
) -> vec2<f32> {
    return mix(mix(p0, p1, t), mix(p1, p2, t), t);
}
`,Vr=`
${Rr}
${zr}

struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) @interpolate(flat) p0: vec2<f32>,
    @location(1) @interpolate(flat) p1: vec2<f32>,
    @location(2) @interpolate(flat) p2: vec2<f32>,
    @location(3) @interpolate(flat) kind: u32,
    @location(4) @interpolate(flat) colorMask: u32,
    @location(5) @interpolate(flat) pseudoMasks: u32,
    @location(6) @interpolate(flat) startPseudoDomain: vec2<f32>,
    @location(7) @interpolate(flat) endPseudoDomain: vec2<f32>,
};

@group(0) @binding(0) var<storage, read> segments: array<Segment>;
@group(0) @binding(1) var<storage, read> jobs: array<Job>;
@group(0) @binding(2) var<storage, read_write> scratch: array<atomic<u32>>;
@group(0) @binding(3) var<storage, read_write> trueScratch: array<atomic<u32>>;
@group(0) @binding(4) var<uniform> params: Params;

@vertex
fn vs_main(
    @builtin(vertex_index) vertexIndex: u32,
    @builtin(instance_index) instanceIndex: u32
) -> VertexOut {
    let segment = segments[instanceIndex];
    let job = jobs[segment.metadata.z];
    let p0 = segment.p0p1.xy;
    let p1 = segment.p0p1.zw;
    let p2 = segment.p2pad.xy;
    let margin = vec2<f32>(params.spread + 1.0);
    let slotMin = vec2<f32>(job.edgeRange.zw);
    let slotMax = slotMin + vec2<f32>(job.tileInfo.xy);
    let boundsMin = max(floor(min(p0, min(p1, p2)) - margin), slotMin);
    let boundsMax = min(ceil(max(p0, max(p1, p2)) + margin), slotMax);
    var corners = array<vec2<f32>, 6>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(1.0, 1.0)
    );
    let pixel = mix(boundsMin, boundsMax, corners[vertexIndex]);
    let clip = vec2<f32>(
        pixel.x / f32(params.atlasSize.x) * 2.0 - 1.0,
        1.0 - pixel.y / f32(params.atlasSize.y) * 2.0
    );
    var out: VertexOut;
    out.position = vec4<f32>(clip, 0.0, 1.0);
    out.p0 = p0;
    out.p1 = p1;
    out.p2 = p2;
    out.kind = segment.metadata.x;
    out.colorMask = segment.metadata.y;
    out.pseudoMasks = segment.metadata.w;
    out.startPseudoDomain = segment.pseudoDomains.xy;
    out.endPseudoDomain = segment.pseudoDomains.zw;
    return out;
}

struct DistanceSample {
    magnitude: f32,
    t: f32,
};

fn lineDistance(
    point: vec2<f32>,
    p0: vec2<f32>,
    p1: vec2<f32>
) -> DistanceSample {
    let edge = p1 - p0;
    let denominator = dot(edge, edge);
    if (denominator <= 1e-12) {
        return DistanceSample(distance(point, p0), 0.0);
    }
    let t = clamp(dot(point - p0, edge) / denominator, 0.0, 1.0);
    return DistanceSample(distance(point, p0 + edge * t), t);
}

${Br}

fn quadraticDistance(
    point: vec2<f32>,
    p0: vec2<f32>,
    p1: vec2<f32>,
    p2: vec2<f32>
) -> DistanceSample {
    var bestT = 0.0;
    var bestSquared = dot(point - p0, point - p0);
    for (var sample = 1u; sample <= 8u; sample++) {
        let t = f32(sample) / 8.0;
        let delta = point - quadraticPoint(p0, p1, p2, t);
        let squared = dot(delta, delta);
        if (squared < bestSquared) {
            bestSquared = squared;
            bestT = t;
        }
    }
    let secondDerivative = 2.0 * (p2 - 2.0 * p1 + p0);
    for (var iteration = 0u; iteration < 4u; iteration++) {
        let curve = quadraticPoint(p0, p1, p2, bestT);
        let derivative = 2.0 * (
            (1.0 - bestT) * (p1 - p0) + bestT * (p2 - p1)
        );
        let delta = curve - point;
        let numerator = dot(delta, derivative);
        let denominator = dot(derivative, derivative) +
            dot(delta, secondDerivative);
        if (abs(denominator) > 1e-8) {
            bestT = clamp(bestT - numerator / denominator, 0.0, 1.0);
        }
    }
    return DistanceSample(
        distance(point, quadraticPoint(p0, p1, p2, bestT)),
        bestT
    );
}

fn signedPerpendicularDistance(
    point: vec2<f32>,
    endpoint: vec2<f32>,
    direction: vec2<f32>,
    fallback: f32
) -> f32 {
    let lengthSquared = dot(direction, direction);
    if (lengthSquared <= 1e-12) {
        return fallback;
    }
    let delta = point - endpoint;
    let perpendicular =
        (delta.x * direction.y - delta.y * direction.x) /
        sqrt(lengthSquared);
    return select(fallback, perpendicular, abs(perpendicular) < abs(fallback));
}

fn channelDistance(
    base: f32,
    channel: u32,
    startMask: u32,
    endMask: u32,
    startDistance: f32,
    endDistance: f32
) -> f32 {
    var value = base;
    if ((startMask & channel) != 0u) {
        value = select(
            value,
            startDistance,
            abs(startDistance) < abs(value)
        );
    }
    if ((endMask & channel) != 0u) {
        value = select(value, endDistance, abs(endDistance) < abs(value));
    }
    return value;
}

// The high 31 bits rank the smallest magnitude first. The low bit retains the
// sign of the winning edge without changing that ordering.
fn candidatePriority(value: f32) -> u32 {
    let orderedMagnitude = bitcast<u32>(abs(value)) & 0xfffffffeu;
    let rank = 0xfffffffeu - orderedMagnitude;
    let positive = select(0u, 1u, value >= 0.0);
    return rank | positive;
}

fn priorityDistance(priority: u32) -> f32 {
    if (priority == 0u) {
        return params.spread;
    }
    let orderedMagnitude = 0xfffffffeu - (priority & 0xfffffffeu);
    let magnitude = bitcast<f32>(orderedMagnitude);
    return select(-magnitude, magnitude, (priority & 1u) != 0u);
}

fn matchesNearestTrueSign(
    pixelIndex: u32,
    channelIndex: u32,
    candidate: f32
) -> bool {
    let nearest = priorityDistance(
        atomicLoad(&trueScratch[pixelIndex * 3u + channelIndex])
    );
    return (candidate >= 0.0) == (nearest >= 0.0);
}

@fragment
fn fs_main(in: VertexOut) -> @location(0) vec4<f32> {
    let point = in.position.xy;
    var sample = lineDistance(point, in.p0, in.p2);
    if (in.kind == 1u) {
        sample = quadraticDistance(point, in.p0, in.p1, in.p2);
    }
    if (!(sample.magnitude >= 0.0)) {
        discard;
    }
    var direction = in.p2 - in.p0;
    var closestPoint = mix(in.p0, in.p2, sample.t);
    if (in.kind == 1u) {
        direction = 2.0 * (
            (1.0 - sample.t) * (in.p1 - in.p0) +
            sample.t * (in.p2 - in.p1)
        );
        closestPoint = quadraticPoint(in.p0, in.p1, in.p2, sample.t);
        if (dot(direction, direction) <= 1e-12) {
            direction = in.p2 - in.p0;
        }
    }
    let closestDelta = point - closestPoint;
    let edgeCross =
        closestDelta.x * direction.y - closestDelta.y * direction.x;
    let signedDistance = select(
        -sample.magnitude,
        sample.magnitude,
        edgeCross >= 0.0
    );
    let pixel = vec2<u32>(floor(point));
    let pixelIndex = pixel.y * params.atlasSize.x + pixel.x;
    if (params.passMode == 0u) {
        let priority = candidatePriority(signedDistance);
        if ((in.colorMask & 1u) != 0u) {
            atomicMax(&trueScratch[pixelIndex * 3u], priority);
        }
        if ((in.colorMask & 2u) != 0u) {
            atomicMax(&trueScratch[pixelIndex * 3u + 1u], priority);
        }
        if ((in.colorMask & 4u) != 0u) {
            atomicMax(&trueScratch[pixelIndex * 3u + 2u], priority);
        }
        return vec4<f32>(0.0);
    }
    var startDirection = in.p2 - in.p0;
    var endDirection = startDirection;
    if (in.kind == 1u) {
        startDirection = in.p1 - in.p0;
        endDirection = in.p2 - in.p1;
        if (dot(startDirection, startDirection) <= 1e-12) {
            startDirection = in.p2 - in.p0;
        }
        if (dot(endDirection, endDirection) <= 1e-12) {
            endDirection = in.p2 - in.p0;
        }
    }
    var startDistance = signedDistance;
    if (
        sample.t <= 1e-5 &&
        dot(point - in.p0, startDirection) < 0.0
    ) {
        let candidate = signedPerpendicularDistance(
            point,
            in.p0,
            startDirection,
            signedDistance
        );
        // Include the bisector itself so symmetric corners do not retain a
        // one-pixel radial seam.
        if (dot(point - in.p0, in.startPseudoDomain) >= 0.0) {
            startDistance = candidate;
        }
    }
    var endDistance = signedDistance;
    if (
        sample.t >= 1.0 - 1e-5 &&
        dot(point - in.p2, endDirection) > 0.0
    ) {
        let candidate = signedPerpendicularDistance(
            point,
            in.p2,
            endDirection,
            signedDistance
        );
        if (dot(point - in.p2, in.endPseudoDomain) <= 0.0) {
            endDistance = candidate;
        }
    }
    let startMask = in.pseudoMasks & 7u;
    let endMask = (in.pseudoMasks >> 3u) & 7u;
    let redDistance = channelDistance(
        signedDistance,
        1u,
        startMask,
        endMask,
        startDistance,
        endDistance
    );
    let greenDistance = channelDistance(
        signedDistance,
        2u,
        startMask,
        endMask,
        startDistance,
        endDistance
    );
    let blueDistance = channelDistance(
        signedDistance,
        4u,
        startMask,
        endMask,
        startDistance,
        endDistance
    );
    if (
        (in.colorMask & 1u) != 0u &&
        abs(redDistance) < sample.magnitude &&
        abs(redDistance) <= params.spread &&
        matchesNearestTrueSign(pixelIndex, 0u, redDistance)
    ) {
        atomicMax(
            &scratch[pixelIndex * 3u],
            candidatePriority(redDistance)
        );
    }
    if (
        (in.colorMask & 2u) != 0u &&
        abs(greenDistance) < sample.magnitude &&
        abs(greenDistance) <= params.spread &&
        matchesNearestTrueSign(pixelIndex, 1u, greenDistance)
    ) {
        atomicMax(
            &scratch[pixelIndex * 3u + 1u],
            candidatePriority(greenDistance)
        );
    }
    if (
        (in.colorMask & 4u) != 0u &&
        abs(blueDistance) < sample.magnitude &&
        abs(blueDistance) <= params.spread &&
        matchesNearestTrueSign(pixelIndex, 2u, blueDistance)
    ) {
        atomicMax(
            &scratch[pixelIndex * 3u + 2u],
            candidatePriority(blueDistance)
        );
    }
    return vec4<f32>(0.0);
}
`,Hr=`
${Rr}
${zr}

@group(0) @binding(0) var<storage, read> segments: array<Segment>;
@group(0) @binding(1) var<storage, read> jobs: array<Job>;
@group(0) @binding(2) var<storage, read_write> scratch: array<atomic<u32>>;
@group(0) @binding(3) var rawOutput: texture_storage_2d<rgba16float, write>;
@group(0) @binding(4) var<uniform> params: Params;
@group(0) @binding(5) var<storage, read> trueScratch: array<u32>;

${Br}

fn lineCrossesRay(point: vec2<f32>, p0: vec2<f32>, p1: vec2<f32>) -> bool {
    let straddles = (p0.y <= point.y && point.y < p1.y) ||
        (p1.y <= point.y && point.y < p0.y);
    if (!straddles) {
        return false;
    }
    let x = p0.x + (point.y - p0.y) * (p1.x - p0.x) / (p1.y - p0.y);
    return x > point.x;
}

// Apply the same lower-inclusive, upper-exclusive endpoint rule as line
// crossings. Whole quadratic roots cannot apply this rule consistently at a
// shared extremum and can leave a one-pixel sign streak across the tile.
fn monotonicQuadraticCrossesRay(
    point: vec2<f32>,
    p0: vec2<f32>,
    p1: vec2<f32>,
    p2: vec2<f32>
) -> bool {
    let straddles = (p0.y <= point.y && point.y < p2.y) ||
        (p2.y <= point.y && point.y < p0.y);
    if (!straddles) {
        return false;
    }
    let a = p0.y - 2.0 * p1.y + p2.y;
    let b = 2.0 * (p1.y - p0.y);
    let c = p0.y - point.y;
    var t = 0.0;
    if (abs(a) <= 1e-6) {
        if (abs(b) <= 1e-6) {
            return false;
        }
        t = -c / b;
    } else {
        let discriminant = max(b * b - 4.0 * a * c, 0.0);
        let root = sqrt(discriminant);
        let first = (-b - root) / (2.0 * a);
        let second = (-b + root) / (2.0 * a);
        t = select(second, first, first >= -1e-5 && first <= 1.0 + 1e-5);
    }
    return quadraticPoint(p0, p1, p2, clamp(t, 0.0, 1.0)).x > point.x;
}

fn quadraticCrossingParity(
    point: vec2<f32>,
    p0: vec2<f32>,
    p1: vec2<f32>,
    p2: vec2<f32>
) -> bool {
    let denominator = p0.y - 2.0 * p1.y + p2.y;
    if (abs(denominator) <= 1e-6) {
        return monotonicQuadraticCrossesRay(point, p0, p1, p2);
    }
    let extremum = (p0.y - p1.y) / denominator;
    if (extremum <= 1e-5 || extremum >= 1.0 - 1e-5) {
        return monotonicQuadraticCrossesRay(point, p0, p1, p2);
    }
    let p01 = mix(p0, p1, extremum);
    let p12 = mix(p1, p2, extremum);
    let split = mix(p01, p12, extremum);
    return monotonicQuadraticCrossesRay(point, p0, p01, split) !=
        monotonicQuadraticCrossesRay(point, split, p12, p2);
}

fn decodeDistance(priority: u32) -> f32 {
    if (priority == 0u) {
        return params.spread;
    }
    let orderedMagnitude = 0xfffffffeu - (priority & 0xfffffffeu);
    let magnitude = min(bitcast<f32>(orderedMagnitude), params.spread);
    return select(-magnitude, magnitude, (priority & 1u) != 0u);
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    if (gid.z >= params.jobCount) {
        return;
    }
    let job = jobs[gid.z];
    if (gid.x >= job.tileInfo.x || gid.y >= job.tileInfo.y) {
        return;
    }
    let pixel = job.edgeRange.zw + gid.xy;
    let point = vec2<f32>(pixel) + vec2<f32>(0.5);
    var inside = false;
    let edgeEnd = job.edgeRange.x + job.edgeRange.y;
    for (var edgeIndex = job.edgeRange.x; edgeIndex < edgeEnd; edgeIndex++) {
        let segment = segments[edgeIndex];
        let p0 = segment.p0p1.xy;
        let p1 = segment.p0p1.zw;
        let p2 = segment.p2pad.xy;
        var crosses = lineCrossesRay(point, p0, p2);
        if (segment.metadata.x == 1u) {
            crosses = quadraticCrossingParity(point, p0, p1, p2);
        }
        if (crosses) {
            inside = !inside;
        }
    }
    let pixelIndex = pixel.y * params.atlasSize.x + pixel.x;
    let expectedSign = select(-1.0, 1.0, inside);
    var value = vec3<f32>(
        decodeDistance(atomicLoad(&scratch[pixelIndex * 3u])),
        decodeDistance(atomicLoad(&scratch[pixelIndex * 3u + 1u])),
        decodeDistance(atomicLoad(&scratch[pixelIndex * 3u + 2u]))
    );
    let rawMedian = max(
        min(value.r, value.g),
        min(max(value.r, value.g), value.b)
    );
    // Like msdfgen's sign correction, preserve the independently signed color
    // distances and only invert the triplet when its median disagrees with the
    // shape fill. This channel topology is what keeps acute corners sharp when
    // neighboring texels are filtered.
    if ((rawMedian >= 0.0) != inside) {
        value = -value;
    }
    // Preserve a regular signed distance beside the colored distances. Wide,
    // soft effects need the nearest edge regardless of its MSDF color.
    let trueDistance = min(
        abs(decodeDistance(trueScratch[pixelIndex * 3u])),
        min(
            abs(decodeDistance(trueScratch[pixelIndex * 3u + 1u])),
            abs(decodeDistance(trueScratch[pixelIndex * 3u + 2u]))
        )
    ) * expectedSign;
    textureStore(
        rawOutput,
        vec2<i32>(pixel),
        vec4<f32>(value, trueDistance)
    );
}
`,Ur=`
${zr}

@group(0) @binding(0) var rawInput: texture_2d<f32>;
@group(0) @binding(1) var finalOutput: texture_storage_2d<rgba16float, write>;
@group(0) @binding(2) var<uniform> params: Params;
@group(0) @binding(3) var<storage, read> jobs: array<Job>;

fn median3(value: vec3<f32>) -> f32 {
    return max(min(value.r, value.g), min(max(value.r, value.g), value.b));
}

fn interpolatedMedian(a: vec3<f32>, b: vec3<f32>, t: f32) -> f32 {
    return median3(mix(a, b, t));
}

// This is the unprotected linear-neighbor subset of msdfgen's interpolation
// artifact classifier. The focused regression matrix guards the sharp corners
// that canonical msdfgen protects with a separate stencil.
fn isInterpolationArtifact(
    a: vec3<f32>,
    b: vec3<f32>,
    am: f32,
    bm: f32,
    firstChannel: u32,
    secondChannel: u32,
    span: f32
) -> bool {
    let differenceA = a[firstChannel] - a[secondChannel];
    let differenceB = b[firstChannel] - b[secondChannel];
    let denominator = differenceA - differenceB;
    if (abs(denominator) <= 1e-6) {
        return false;
    }
    let t = differenceA / denominator;
    if (t <= 0.01 || t >= 0.99) {
        return false;
    }
    let interpolated = interpolatedMedian(a, b, t);
    let invertsInside = am > 0.0 && bm > 0.0 && interpolated <= 0.0;
    let invertsOutside = am < 0.0 && bm < 0.0 && interpolated >= 0.0;
    let leavesEndpointRange =
        interpolated < min(am, bm) || interpolated > max(am, bm);
    if (!invertsInside && !invertsOutside && !leavesEndpointRange) {
        return false;
    }
    let distanceFromA = t * span;
    let distanceFromB = (1.0 - t) * span;
    let withinExpectedRange =
        interpolated >= am - distanceFromA &&
        interpolated <= am + distanceFromA &&
        interpolated >= bm - distanceFromB &&
        interpolated <= bm + distanceFromB;
    return !withinExpectedRange;
}

fn hasLinearArtifact(a: vec3<f32>, b: vec3<f32>) -> bool {
    let am = median3(a);
    let bm = median3(b);
    // Correct only the texel farther from the contour to minimize collateral
    // changes to edge and corner reconstruction.
    if (abs(am) < abs(bm)) {
        return false;
    }
    let span = params.minDeviationRatio;
    return
        isInterpolationArtifact(a, b, am, bm, 0u, 1u, span) ||
        isInterpolationArtifact(a, b, am, bm, 1u, 2u, span) ||
        isInterpolationArtifact(a, b, am, bm, 2u, 0u, span);
}

fn diagonalRootIsArtifact(
    a: vec3<f32>,
    linear: vec3<f32>,
    quadratic: vec3<f32>,
    am: f32,
    dm: f32,
    t: f32
) -> bool {
    if (t <= 0.01 || t >= 0.99) {
        return false;
    }
    let interpolated = median3(a + t * linear + t * t * quadratic);
    let invertsInside = am > 0.0 && dm > 0.0 && interpolated <= 0.0;
    let invertsOutside = am < 0.0 && dm < 0.0 && interpolated >= 0.0;
    if (!invertsInside && !invertsOutside) {
        return false;
    }
    let span = params.minDeviationRatio * sqrt(2.0);
    let distanceFromA = t * span;
    let distanceFromD = (1.0 - t) * span;
    let withinExpectedRange =
        interpolated >= am - distanceFromA &&
        interpolated <= am + distanceFromA &&
        interpolated >= dm - distanceFromD &&
        interpolated <= dm + distanceFromD;
    return !withinExpectedRange;
}

fn diagonalChannelPairHasArtifact(
    a: vec3<f32>,
    linear: vec3<f32>,
    quadratic: vec3<f32>,
    am: f32,
    dm: f32,
    firstChannel: u32,
    secondChannel: u32
) -> bool {
    let constant = a[firstChannel] - a[secondChannel];
    let linearCoefficient =
        linear[firstChannel] - linear[secondChannel];
    let quadraticCoefficient =
        quadratic[firstChannel] - quadratic[secondChannel];
    if (abs(quadraticCoefficient) <= 1e-6) {
        if (abs(linearCoefficient) <= 1e-6) {
            return false;
        }
        return diagonalRootIsArtifact(
            a,
            linear,
            quadratic,
            am,
            dm,
            -constant / linearCoefficient
        );
    }
    let discriminant =
        linearCoefficient * linearCoefficient -
        4.0 * quadraticCoefficient * constant;
    if (discriminant < 0.0) {
        return false;
    }
    let rootOffset = sqrt(discriminant);
    let denominator = 2.0 * quadraticCoefficient;
    return
        diagonalRootIsArtifact(
            a,
            linear,
            quadratic,
            am,
            dm,
            (-linearCoefficient - rootOffset) / denominator
        ) ||
        diagonalRootIsArtifact(
            a,
            linear,
            quadratic,
            am,
            dm,
            (-linearCoefficient + rootOffset) / denominator
        );
}

// This is the inversion-only part of msdfgen's diagonal bilinear classifier.
// It removes false inside/outside crossings without applying the broader
// unprotected correction that can erase legitimate acute tips.
fn hasDiagonalArtifact(
    a: vec3<f32>,
    b: vec3<f32>,
    c: vec3<f32>,
    d: vec3<f32>
) -> bool {
    let am = median3(a);
    let dm = median3(d);
    if (abs(am) < abs(dm)) {
        return false;
    }
    let abc = a - b - c;
    let linear = -a - abc;
    let quadratic = d + abc;
    return
        diagonalChannelPairHasArtifact(
            a, linear, quadratic, am, dm, 0u, 1u
        ) ||
        diagonalChannelPairHasArtifact(
            a, linear, quadratic, am, dm, 1u, 2u
        ) ||
        diagonalChannelPairHasArtifact(
            a, linear, quadratic, am, dm, 2u, 0u
        );
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    if (gid.z >= params.jobCount) {
        return;
    }
    let job = jobs[gid.z];
    if (gid.x >= job.tileInfo.x || gid.y >= job.tileInfo.y) {
        return;
    }
    let slotMin = vec2<i32>(job.edgeRange.zw);
    let slotMax = slotMin + vec2<i32>(job.tileInfo.xy);
    let coordinate = slotMin + vec2<i32>(gid.xy);
    let rawValue = textureLoad(rawInput, coordinate, 0);
    var value = rawValue.rgb;
    let trueDistance = rawValue.a;
    let offsets = array<vec2<i32>, 4>(
        vec2<i32>(-1, 0),
        vec2<i32>(1, 0),
        vec2<i32>(0, -1),
        vec2<i32>(0, 1)
    );
    var needsCorrection = false;
    for (var index = 0u; index < 4u; index++) {
        let neighbor = coordinate + offsets[index];
        if (
            neighbor.x < slotMin.x ||
            neighbor.y < slotMin.y ||
            neighbor.x >= slotMax.x ||
            neighbor.y >= slotMax.y
        ) {
            continue;
        }
        let neighborValue = textureLoad(rawInput, neighbor, 0).rgb;
        if (hasLinearArtifact(value, neighborValue)) {
            needsCorrection = true;
            break;
        }
    }
    let diagonalOffsets = array<vec2<i32>, 4>(
        vec2<i32>(-1, -1),
        vec2<i32>(1, -1),
        vec2<i32>(-1, 1),
        vec2<i32>(1, 1)
    );
    for (var index = 0u; index < 4u && !needsCorrection; index++) {
        let diagonalOffset = diagonalOffsets[index];
        let horizontal = coordinate + vec2<i32>(diagonalOffset.x, 0);
        let vertical = coordinate + vec2<i32>(0, diagonalOffset.y);
        let diagonal = coordinate + diagonalOffset;
        if (
            diagonal.x < slotMin.x ||
            diagonal.y < slotMin.y ||
            diagonal.x >= slotMax.x ||
            diagonal.y >= slotMax.y
        ) {
            continue;
        }
        let horizontalValue = textureLoad(rawInput, horizontal, 0).rgb;
        let verticalValue = textureLoad(rawInput, vertical, 0).rgb;
        let diagonalValue = textureLoad(rawInput, diagonal, 0).rgb;
        if (
            hasDiagonalArtifact(
                value,
                horizontalValue,
                verticalValue,
                diagonalValue
            )
        ) {
            needsCorrection = true;
        }
    }
    if (needsCorrection) {
        value = vec3<f32>(median3(value));
    }
    textureStore(finalOutput, coordinate, vec4<f32>(value, trueDistance));
}
`,Wr=new WeakMap;function Gr(e){let t=Wr.get(e);if(!t){let n=e.createShaderModule({label:`sparse path edge raster shader`,code:Vr}),r=e.createShaderModule({label:`sparse path raw distance shader`,code:Hr}),i=e.createShaderModule({label:`sparse path correction shader`,code:Ur});t={edge:e.createRenderPipeline({label:`sparse path edge raster pipeline`,layout:`auto`,vertex:{module:n,entryPoint:`vs_main`},fragment:{module:n,entryPoint:`fs_main`,targets:[{format:`rgba16float`}]},primitive:{topology:`triangle-list`}}),raw:e.createComputePipeline({label:`sparse path raw distance pipeline`,layout:`auto`,compute:{module:r,entryPoint:`main`}}),correction:e.createComputePipeline({label:`sparse path correction pipeline`,layout:`auto`,compute:{module:i,entryPoint:`main`}})},Wr.set(e,t)}return t}function Kr(e,t){let n=new ArrayBuffer(32),r=new DataView(n);return r.setUint32(0,e.width,!0),r.setUint32(4,e.height,!0),r.setUint32(8,e.maxSlotWidth,!0),r.setUint32(12,e.maxSlotHeight,!0),r.setFloat32(16,e.spread,!0),r.setFloat32(20,1.1111112,!0),r.setUint32(24,e.uniquePathCount,!0),r.setUint32(28,t,!0),n}var qr=32,Jr=64*1024*1024;function Yr(e){return Math.max(4,Math.ceil(e/4)*4)}function Xr(e,t){return JSON.stringify([e,t.tileSize??null,t.spread??null,t.shapePadding??null,t.gutter??null,t.cubicTolerance??null,t.normalizationSpan??null,t.tightPacking??!1,t.maxAtlasWidth??null])}var Zr=class{constructor(e,t={}){if(this.device=e,this.maxScratchBytes=t.maxScratchBytes??Jr,!Number.isSafeInteger(this.maxScratchBytes)||this.maxScratchBytes<qr)throw Error(`MSDF scratch limit must be a positive integer.`);this._destroyed=!1,this._width=0,this._height=0,this._segmentCapacity=0,this._jobCapacity=0,this._segmentBuffer=null,this._jobBuffer=null,this._trueParamsBuffer=null,this._pseudoParamsBuffer=null,this._scratchBuffer=null,this._trueScratchBuffer=null,this._rawTexture=null,this._retirements=new Set,this._atlasCache=new Map}_retire(e){if(!e)return;let t=this.device.queue.onSubmittedWorkDone().then(()=>e.destroy(),()=>e.destroy());this._retirements.add(t),t.finally(()=>this._retirements.delete(t))}_ensureInputBuffer(e,t){let n=t===`segments`?`_segmentCapacity`:`_jobCapacity`,r=t===`segments`?`_segmentBuffer`:`_jobBuffer`;if(e<=this[n])return;let i=Yr(e),a=Math.max(4,this[n]);for(;a<i;)a*=2;let o=this.device.limits.maxStorageBufferBindingSize??1/0;if(a>o)throw Error(`MSDF ${t} exceed the device buffer limit.`);let s=this[r];this[r]=this.device.createBuffer({label:`MSDF reusable ${t}`,size:a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this[n]=a,this._retire(s)}_ensureScratch(e,t){let n=Math.max(e,this._width),r=Math.max(t,this._height);if(n===this._width&&r===this._height)return;let i=this.device.limits.maxTextureDimension2D,a=n*r,o=a*qr,s=a*3*4,c=this.device.limits.maxStorageBufferBindingSize??1/0;if(n>i||r>i||o>this.maxScratchBytes||s>c)throw Error(`MSDF generation needs ${o} scratch bytes, exceeding its configured or device limit.`);let l=this._scratchBuffer,u=this._trueScratchBuffer,d=this._rawTexture;this._scratchBuffer=this.device.createBuffer({label:`MSDF reusable atomic scratch`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._trueScratchBuffer=this.device.createBuffer({label:`MSDF reusable true-distance scratch`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this._rawTexture=this.device.createTexture({label:`MSDF reusable raw distances`,size:[n,r],format:`rgba16float`,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this._width=n,this._height=r,this._retire(l),this._retire(u),this._retire(d)}_ensureParams(){this._trueParamsBuffer||(this._trueParamsBuffer=this.device.createBuffer({label:`MSDF true-distance parameters`,size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._pseudoParamsBuffer=this.device.createBuffer({label:`MSDF pseudo-distance parameters`,size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}))}createAtlas(e,t={},n=`path atlas`){if(this._destroyed)throw Error(`MSDF atlas generator has been destroyed.`);let r=Lr(e,t);this._ensureInputBuffer(r.segmentData.byteLength,`segments`),this._ensureInputBuffer(r.jobData.byteLength,`jobs`),this._ensureScratch(r.width,r.height),this._ensureParams();let i=this._segmentBuffer,a=this._jobBuffer,o=this._trueParamsBuffer,s=this._pseudoParamsBuffer,c=this._scratchBuffer,l=this._trueScratchBuffer,u=this._rawTexture,d=Gr(this.device);this.device.queue.writeBuffer(i,0,j(new Uint8Array(r.segmentData))),this.device.queue.writeBuffer(a,0,j(new Uint8Array(r.jobData))),this.device.queue.writeBuffer(o,0,j(new Uint8Array(Kr(r,0)))),this.device.queue.writeBuffer(s,0,j(new Uint8Array(Kr(r,1))));let f=this.device.createTexture({label:n,size:[r.width,r.height],format:`rgba16float`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),p=this.device.createBuffer({label:N(n,`entries`),size:r.entries.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.device.queue.writeBuffer(p,0,j(r.entries));let m=(e,t)=>this.device.createBindGroup({label:N(n,e+` edge raster bindings`),layout:d.edge.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:i}},{binding:1,resource:{buffer:a}},{binding:2,resource:{buffer:c}},{binding:3,resource:{buffer:l}},{binding:4,resource:{buffer:t}}]}),h=m(`true-distance`,o),g=m(`pseudo-distance`,s),_=this.device.createBindGroup({label:N(n,`raw distance bindings`),layout:d.raw.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:i}},{binding:1,resource:{buffer:a}},{binding:2,resource:{buffer:c}},{binding:3,resource:u.createView()},{binding:4,resource:{buffer:s}},{binding:5,resource:{buffer:l}}]}),v=this.device.createBindGroup({label:N(n,`correction bindings`),layout:d.correction.getBindGroupLayout(0),entries:[{binding:0,resource:u.createView()},{binding:1,resource:f.createView()},{binding:2,resource:{buffer:s}},{binding:3,resource:{buffer:a}}]}),y=r.width*r.height*3*4,b=this.device.createCommandEncoder({label:N(n,`generation commands`)}),x=(e,t,i)=>{let a=b.beginRenderPass({label:N(n,e+` edge raster pass`),colorAttachments:[i?{view:f.createView(),clearValue:[0,0,0,0],loadOp:`clear`,storeOp:`store`}:{view:f.createView(),loadOp:`load`,storeOp:`store`}]});a.setPipeline(d.edge),a.setBindGroup(0,t),a.draw(6,r.segments.length),a.end()},S=(e,t,i)=>{let a=b.beginComputePass({label:N(n,e+` pass`)});a.setPipeline(t),a.setBindGroup(0,i),a.dispatchWorkgroups(Math.ceil(r.maxSlotWidth/8),Math.ceil(r.maxSlotHeight/8),r.uniquePathCount),a.end()};b.clearBuffer(c,0,y),b.clearBuffer(l,0,y),x(`true-distance`,h,!0),b.copyBufferToBuffer(l,0,c,0,y),x(`pseudo-distance`,g,!1),S(`raw distance`,d.raw,_),S(`correction`,d.correction,v),this.device.queue.submit([b.finish()]);let C=!1;return{...r,texture:f,entryBuffer:p,completion:this.device.queue.onSubmittedWorkDone(),destroy:()=>{C||(C=!0,f.destroy(),p.destroy())}}}acquireAtlas(e,t={},n=`path atlas`){if(this._destroyed)throw Error(`MSDF atlas generator has been destroyed.`);let r=Xr(e,t),i=this._atlasCache.get(r);return i||(i=this.createAtlas(e,t,n),this._atlasCache.set(r,i),i.completion.catch(()=>{this._atlasCache.get(r)===i&&(this._atlasCache.delete(r),i.destroy())})),i}destroy(){if(!this._destroyed){this._destroyed=!0;for(let e of this._atlasCache.values())e.destroy();this._atlasCache.clear();for(let e of[this._segmentBuffer,this._jobBuffer,this._trueParamsBuffer,this._pseudoParamsBuffer,this._scratchBuffer,this._trueScratchBuffer,this._rawTexture])this._retire(e);this._segmentBuffer=null,this._jobBuffer=null,this._trueParamsBuffer=null,this._pseudoParamsBuffer=null,this._scratchBuffer=null,this._trueScratchBuffer=null,this._rawTexture=null}}},Qr=new WeakMap;function $r(e){let t=Qr.get(e);return t||(t=e._ownResource(new Zr(e.device)),Qr.set(e,t)),t}var ei=`
const PI: f32 = 3.141592653589793;
const AA_COVERAGE_RADIUS_PIXELS: f32 = 0.5;
const FILL_RASTER_SAFETY_PIXELS: f32 = 0.5;
const STROKE_RASTER_SAFETY_PIXELS: f32 = 3.0;

struct PathAtlasEntry {
    uvBounds: vec4<f32>,
    localBounds: vec4<f32>,
    strokePadding: vec4<f32>,
};

struct VSOut {
#if defined(PLACEMENT_ENABLED)
    @location(15) @interpolate(flat) placementClip: vec4<f32>,
#endif
    @builtin(position) pos: vec4<f32>,
    @location(0) uv: vec2<f32>,
    @location(1) fill: vec4<f32>,
    @location(2) stroke: vec4<f32>,
    @location(3) fillOpacity: f32,
    @location(4) strokeOpacity: f32,
    @location(5) halfStrokeWidth: f32,
    @location(6) @interpolate(flat) pickId: u32,
    @location(7) @interpolate(flat) devicePixelsPerAtlas: f32,
    @location(8) @interpolate(flat) inwardStroke: u32,
    @location(9) gradientStrength: f32,
    @location(10) @interpolate(flat) deviceRadius: f32,
};

fn culledPoint() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.uv = vec2<f32>(0.0);
    out.fill = vec4<f32>(0.0);
    out.stroke = vec4<f32>(0.0);
    out.fillOpacity = 0.0;
    out.strokeOpacity = 0.0;
    out.halfStrokeWidth = 0.0;
    out.pickId = 0u;
    out.devicePixelsPerAtlas = 0.0;
    out.inwardStroke = 0u;
    out.gradientStrength = 0.0;
    out.deviceRadius = 0.0;
    return out;
}

@vertex
fn vs_main(@builtin(vertex_index) v: u32, @builtin(instance_index) i: u32) -> VSOut {
    if (!isInstanceVisible(i) || !isPlacementVisible(i)) {
        return culledPoint();
    }

    let shape = u32(getScaled_shape(i));
    if (shape >= params.uPathCount) {
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

    let diameter = sqrt(max(getScaled_size(i), 0.0));
    if (diameter <= 0.0) {
        return culledPoint();
    }
    var strokeWidth = max(getScaled_strokeWidth(i), 0.0);
    let strokeOpacity = getScaled_strokeOpacity(i);
    if (strokeOpacity <= 0.0) {
        strokeWidth = 0.0;
    }
    let entry = pathAtlasEntries[shape];
    let inwardStroke = getScaled_inwardStroke(i);
    let devicePixelsPerAtlas = max(
        diameter * globals.dpr / params.uShapePixels,
        1.0 / params.uSpread
    );
    // The generated field saturates at uSpread. Clamp effects before their AA
    // transition reaches that boundary; otherwise tiny marks with thick
    // strokes sample the saturated tile edge and produce malformed contours.
    let strokeDistanceMultiplier = select(1.0, 2.0, inwardStroke != 0u);
    let maxHalfStrokeWidth = max(
        params.uSpread * devicePixelsPerAtlas - AA_COVERAGE_RADIUS_PIXELS,
        0.0
    ) / (strokeDistanceMultiplier * globals.dpr);
    let halfStrokeWidth = min(strokeWidth * 0.5, maxHalfStrokeWidth);
    let outwardStroke = halfStrokeWidth > 0.0 && inwardStroke == 0u;
    // The antialiased outer contour is another offset curve, so its radius
    // must use the path-specific miter extent too. Keep the remaining
    // pixel-center and rasterization safety isotropic.
    let coverageRadius = select(0.0, halfStrokeWidth, outwardStroke) +
        AA_COVERAGE_RADIUS_PIXELS / globals.dpr;
    let rasterSafety = select(
        FILL_RASTER_SAFETY_PIXELS,
        STROKE_RASTER_SAFETY_PIXELS,
        outwardStroke
    ) / globals.dpr;
    let localMin = entry.localBounds.xy * diameter -
        entry.strokePadding.xy * coverageRadius - rasterSafety;
    let localMax = entry.localBounds.zw * diameter +
        entry.strokePadding.zw * coverageRadius + rasterSafety;
    let localScreen = mix(localMin, localMax, quad[v]);

    // Local point coordinates use screen-space axes, so positive angles rotate
    // clockwise, matching Canvas, SVG, and the WebGPU text mark.
    let angle = getScaled_angle(i) * PI / 180.0;
    let sinTheta = sin(angle);
    let cosTheta = cos(angle);
    let rot = mat2x2<f32>(cosTheta, sinTheta, -sinTheta, cosTheta);
    let screenOffset = rot * localScreen;
    let centerX = getScaled_x(i) + getScaled_xOffset(i) + getScaled_dx(i);
    let centerY = getScaled_y(i) + getScaled_yOffset(i) + getScaled_dy(i);

    if (isOutsideVisibleRange(vec2<f32>(centerX, centerY))) {
        return culledPoint();
    }

    let pixel = vec2<f32>(centerX, centerY) + screenOffset;
    let clip = vec2<f32>(
        (pixel.x / globals.width) * 2.0 - 1.0,
        1.0 - (pixel.y / globals.height) * 2.0
    );
    let centerClip = vec2<f32>(
        (centerX / globals.width) * 2.0 - 1.0,
        1.0 - (centerY / globals.height) * 2.0
    );

    let atlasPixelsPerScreen = params.uShapePixels / max(diameter, 0.001);
    let tileCenter = vec2<f32>(params.uTileSize * 0.5);
    let tilePixel = clamp(
        tileCenter + localScreen * atlasPixelsPerScreen,
        vec2<f32>(0.5),
        vec2<f32>(params.uTileSize - 0.5)
    );
    let tileUnit = (tilePixel - vec2<f32>(0.5)) /
        max(params.uTileSize - 1.0, 1.0);

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(
        applyPlacementClipForPoint(clip, centerClip, i),
        0.0,
        1.0
    );
    out.uv = mix(entry.uvBounds.xy, entry.uvBounds.zw, tileUnit);
    out.fill = getScaled_fill(i);
    out.stroke = getScaled_stroke(i);
    out.fillOpacity = getScaled_fillOpacity(i);
    out.strokeOpacity = strokeOpacity;
    out.halfStrokeWidth = halfStrokeWidth;
    out.pickId = 0u;
    out.devicePixelsPerAtlas = devicePixelsPerAtlas;
    out.inwardStroke = inwardStroke;
    out.gradientStrength = getScaled_gradientStrength(i);
    out.deviceRadius = diameter * globals.dpr * 0.5;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

fn median3(value: vec3<f32>) -> f32 {
    return max(min(value.r, value.g), min(max(value.r, value.g), value.b));
}

fn sourceOver(above: vec4<f32>, below: vec4<f32>) -> vec4<f32> {
    return above + below * (1.0 - above.a);
}

fn signedDistanceInDevicePixels(
    uv: vec2<f32>,
    devicePixelsPerAtlas: f32
) -> f32 {
    let sample = textureSample(pathAtlas, pathAtlasSampler, uv).rgb;
    let median = median3(sample);
    return median * devicePixelsPerAtlas;
}

fn shade(in: VSOut) -> vec4<f32> {
    let distance = signedDistanceInDevicePixels(
        in.uv,
        in.devicePixelsPerAtlas
    );
    let shapeCoverage = clamp(distance + 0.5, 0.0, 1.0);
    let expandedCoverage = clamp(
        distance + in.halfStrokeWidth * globals.dpr + 0.5,
        0.0,
        1.0
    );
    var fillColor = in.fill;
    var strokeColor = in.stroke;
    fillColor.a *= in.fillOpacity;
    strokeColor.a *= in.strokeOpacity;
    if (in.gradientStrength > 0.0) {
        let gradient = max(distance, 0.0) * in.gradientStrength /
            max(in.deviceRadius, 0.0001);
        fillColor = mix(fillColor, vec4<f32>(1.0), gradient);
    }
    fillColor = premultiplyAlpha(fillColor);
    strokeColor = premultiplyAlpha(strokeColor);

    var strokeCoverage: f32;
    if (in.inwardStroke != 0u) {
        let innerCoverage = clamp(
            distance - 2.0 * in.halfStrokeWidth * globals.dpr + 0.5,
            0.0,
            1.0
        );
        strokeCoverage = max(shapeCoverage - innerCoverage, 0.0);
    } else {
        let innerCoverage = clamp(
            distance - in.halfStrokeWidth * globals.dpr + 0.5,
            0.0,
            1.0
        );
        strokeCoverage = max(expandedCoverage - innerCoverage, 0.0);
    }
    let fillLayer = fillColor * shapeCoverage;
    let strokeLayer = strokeColor * strokeCoverage;
    let color = sourceOver(strokeLayer, fillLayer);
    if (color.a <= 0.0) {
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
`,ti=class extends qn{get shaderBody(){return ei}getExtraUniformLayout(){return[{name:`uTileSize`,type:`f32`,components:1},{name:`uShapePixels`,type:`f32`,components:1},{name:`uSpread`,type:`f32`,components:1},{name:`uPathCount`,type:`u32`,components:1}]}getExtraResourceDefs(){return[{name:`pathAtlasEntries`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`pathAtlasEntries`,wgslType:`array<PathAtlasEntry>`},{name:`pathAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`float`,dimension:`2d`,visibility:`fragment`,wgslName:`pathAtlas`},{name:`pathAtlas`,role:`extraSampler`,kind:`sampler`,samplerType:`filtering`,visibility:`fragment`,wgslName:`pathAtlasSampler`}]}_initializeExtraResources(){let e=this._markConfig.paths;if(!Array.isArray(e))throw Error(`PathPoint config requires a paths array.`);let t=this._markConfig.atlasOptions??{},n=$r(this.renderer).acquireAtlas(e,t,N(this.label,`path atlas`));n.completion.catch(()=>{}),this._installPathAtlas(n,n.texture,n.entryBuffer,!0)}_installPathAtlas(e,t,n=null,r=!1,i=`rgba16float`){let a=this.device.createSampler({label:N(this.label,`path atlas sampler`),addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`,mipmapFilter:`nearest`}),o=n??this._createPathAtlasEntries(e.entries);this._extraBuffers.set(`pathAtlasEntries`,o),this._extraTextures.set(`pathAtlas`,{texture:t,sampler:a,width:e.width,height:e.height,format:i}),r&&(this._borrowedExtraBuffers.add(`pathAtlasEntries`),this._borrowedExtraTextures.add(`pathAtlas`)),this._setUniformValue(`uTileSize`,e.tileSize),this._setUniformValue(`uShapePixels`,e.shapePixels),this._setUniformValue(`uSpread`,e.spread),this._setUniformValue(`uPathCount`,e.pathCount)}_createPathAtlasEntries(e){let t=this.device.createBuffer({label:N(this.label,`path atlas entries`),size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(t,0,j(e)),t}};Object.freeze([`circle`,`square`,`cross`,`diamond`,`triangle-up`,`triangle-right`,`triangle-down`,`triangle-left`,`tick-up`,`tick-right`,`tick-down`,`tick-left`,`x`,`+`]);var ni=new Map([[`circle`,`M0-1A1 1 0 1 1 0 1A1 1 0 1 1 0-1Z`],[`square`,`M-1-1H1V1H-1Z`],[`cross`,`M-.4-1H.4V-.4H1V.4H.4V1H-.4V.4H-1V-.4H-.4Z`],[`diamond`,`M0-1L1 0 0 1-1 0Z`],[`triangle-up`,`M0-.866025L1 .866025H-1Z`],[`triangle-right`,`M.866025 0L-.866025 1V-1Z`],[`triangle-down`,`M0 .866025L-1-.866025H1Z`],[`triangle-left`,`M-.866025 0L.866025-1V1Z`],[`tick-up`,`M-.15-1H.15V0H-.15Z`],[`tick-right`,`M0-.15H1V.15H0Z`],[`tick-down`,`M-.15 0H.15V1H-.15Z`],[`tick-left`,`M-1-.15H0V.15H-1Z`],[`x`,`M-.7071-1L0-.2929.7071-1 1-.7071.2929 0 1 .7071.7071 1 0 .2929-.7071 1-1 .7071-.2929 0-1-.7071Z`],[`+`,`M-.15-1H.15V-.15H1V.15H.15V1H-.15V.15H-1V-.15H-.15Z`]]);function ri(e){let t=ni.get(e);if(t)return t;if(/^\s*[Mm]/.test(e))return e;throw Error(`Unknown point shape: ${e}`)}function ii(e){let t=e.shape,n=e.shapes;if(t!==void 0&&n!==void 0)throw Error(`Point config cannot define both shape and shapes.`);if(t===void 0&&n===void 0||t===`circle`)return null;let r=(n??[t]).map(ri);return{...e,paths:r,atlasOptions:{normalizationSpan:2},channels:{...e.channels,...t===void 0?{}:{shape:{value:0}}}}}var ai=Object.freeze({type:`point`,getProgramKey(e){return e.shape===void 0?e.shapes===void 0?`legacy`:`shapes:${JSON.stringify(e.shapes)}`:`shape:${e.shape}`},createProgram(e,t,n){let r=ii(t);return new(r?ti:qn)(e,r??t,n)}}),oi={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1,scale:R(),default:0},x2:{type:`f32`,components:1,scale:R(),default:10},y:{type:`f32`,components:1,scale:R(),default:0},y2:{type:`f32`,components:1,scale:R(),default:10},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.27,.49,.8,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},cornerRadiusTopRight:{type:`f32`,components:1,default:0},cornerRadiusBottomRight:{type:`f32`,components:1,default:0},cornerRadiusTopLeft:{type:`f32`,components:1,default:0},cornerRadiusBottomLeft:{type:`f32`,components:1,default:0},minWidth:{type:`f32`,components:1,default:0},minHeight:{type:`f32`,components:1,default:0},minOpacity:{type:`f32`,components:1,default:0},shadowOffsetX:{type:`f32`,components:1,default:0},shadowOffsetY:{type:`f32`,components:1,default:0},shadowBlur:{type:`f32`,components:1,default:0},shadowOpacity:{type:`f32`,components:1,default:0},shadowColor:{type:`f32`,components:4,default:[0,0,0,1]},hatchPattern:{type:`u32`,components:1,default:0}},{channels:si,defaults:ci,defaultConfigs:li,optionalChannels:ui}=In(oi),di=[`strokeWidth`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`shadowOpacity`,`hatchPattern`];function fi(e){for(let t of di){let n=e[t];if(!A(n)||n.dynamic||n.scale||n.conditions?.length)return`shader`}return di.every(t=>Number(e[t].value)===0)?`multisample`:`shader`}var pi=`
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
`,mi=class extends Fn{_resolveAntialiasing(){return fi(this._channels)}get channelOrder(){return si}get optionalChannels(){return ui}get channelSpecs(){return oi}get defaultChannelConfigs(){return li}get defaultValues(){return ci}get shaderBody(){return`const USE_MULTISAMPLE_EDGE_COVERAGE = ${this.antialiasing===`multisample`};\n${pi}`}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`||e===`x2`)return[0,this.renderer._globals.width];if(e===`y`||e===`y2`)return[0,this.renderer._globals.height]}}},hi=Object.freeze({type:`rect`,createProgram(e,t,n){return new mi(e,t,n)}}),gi=`
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
`;function _i(e){if(!e||e.length===0)return{data:new Uint8Array([0]),width:1,height:1,patternCount:0};if(e.length>256)throw Error(`Dash pattern count (${e.length}) exceeds 256.`);let t=new Uint8Array(257*e.length);return e.forEach((e,n)=>{if(!Array.isArray(e)||e.length===0)throw Error(`Dash pattern at index ${n} must be a non-empty array.`);if(e.length%2!=0)throw Error(`Dash pattern at index ${n} must have an even number of segments.`);let r=0;for(let t of e){if(!Number.isFinite(t)||Math.round(t)!==t)throw Error(`Dash pattern at index ${n} must use integer segment lengths.`);if(t<0)throw Error(`Dash pattern at index ${n} must use segments >= 0.`);r+=t}if(r===0)throw Error(`Dash pattern at index ${n} must have a positive total length.`);if(r>256)throw Error(`Dash pattern at index ${n} has length ${r}, which exceeds 256.`);let i=n*257;t[i]=r;let a=1,o=!0;for(let n of e){for(let e=0;e<n;e++)t[i+a]=o?255:0,a++;o=!o}}),{data:t,width:257,height:e.length,patternCount:e.length}}var vi={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},color:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1},minLength:{type:`f32`,components:1,default:0},strokeCap:{type:`u32`,components:1,default:0},strokeDash:{type:`u32`,components:1,default:0},strokeDashOffset:{components:1,default:0}},{channels:yi,defaults:bi,defaultConfigs:xi,optionalChannels:Si}=In(vi),Ci=`
${gi}

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
`,wi=class extends Fn{get channelOrder(){return yi}get optionalChannels(){return Si}get channelSpecs(){return vi}get defaultChannelConfigs(){return xi}get defaultValues(){return bi}get shaderBody(){return Ci}getExtraUniformLayout(){return[{name:`uDashPatternCount`,type:`u32`,components:1}]}getExtraResourceDefs(){return[{name:`dashAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`uint`,dimension:`2d`,visibility:`fragment`,wgslName:`dashAtlas`}]}_initializeExtraResources(){let e=_i(this._markConfig?.dashPatterns??null);this._dashPatternCount=e.patternCount;let t=ve(this.device,{format:`r8uint`,width:e.width,height:e.height,data:e.data},void 0,N(this.label,`dash atlas`));this._extraTextures.set(`dashAtlas`,{texture:t,width:e.width,height:e.height,format:`r8uint`});let n=this._channels.strokeDash;if(e.patternCount>0&&n&&n.value!==void 0){let t=Array.isArray(n.value)?n.value[0]:n.value;typeof t==`number`&&t>=e.patternCount&&console.warn(`[webgpu-renderer] strokeDash value ${t} exceeds pattern count ${e.patternCount}.`)}}_initializeExtraUniforms(){this._setUniformValue(`uDashPatternCount`,this._dashPatternCount??0)}},Ti=Object.freeze({type:`rule`,createProgram(e,t,n){return new wi(e,t,n)}});function Ei(e,t){let n=e.getSlotHandles().properties;for(let[r,i]of Object.entries(t)){if(i.uniform&&!e._uniformBufferState?.entries.has(i.uniform))throw Error(`Property slot "${r}" targets unavailable uniform "${i.uniform}".`);if(!i.uniform&&!i.set)throw Error(`Property slot "${r}" has no update target.`);let t=t=>{if(i.set)i.set(t);else{let n=i.encode?i.encode(t):t;if(typeof n!=`number`&&(!Array.isArray(n)||!n.every(e=>typeof e==`number`)))throw Error(`Property "${r}" must encode to numeric uniform data.`);e._setUniformValue(i.uniform,n)}},a=e._markConfig[r];t(a===void 0?i.getDefault?i.getDefault():i.default:a),n[r]={set:n=>{e._assertAlive(),t(n),e._queueSlotUpdate(!1)}}}}var Di=[`arc`,`dome`,`diagonal`,`line`],Oi=[`vertical`,`horizontal`];function ki(e){let t=Di.indexOf(e);if(t<0)throw Error(`Unknown link shape: ${String(e)}`);return t}function Ai(e){let t=Oi.indexOf(e);if(t<0)throw Error(`Unknown link orientation: ${String(e)}`);return t}var ji={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},color:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1}},{channels:Mi,defaults:Ni,defaultConfigs:Pi,optionalChannels:Fi}=In(ji),Ii=`
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
        (params.uNoFadingOnSecondPass == 0u || (globals.orderPass & 4u) == 0u))
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
`,Li=class extends Fn{get propertySlotDefinitions(){return{arcFadingDistance:{uniform:`uArcFadingDistance`,default:[0,0]},noFadingOnSecondPass:{uniform:`uNoFadingOnSecondPass`,default:!1,encode:e=>+!!e},arcHeightFactor:{uniform:`uArcHeightFactor`,default:1},minArcHeight:{uniform:`uMinArcHeight`,default:1.5},linkShape:{uniform:`uShape`,default:`arc`,encode:ki},orient:{uniform:`uOrient`,default:`vertical`,encode:Ai},clampApex:{uniform:`uClampApex`,default:!1,encode:e=>+!!e},maxChordLength:{uniform:`uMaxChordLength`,default:5e4},segments:{uniform:`uSegmentBreaks`,default:101,encode:e=>{let t=Math.round(Number(e));return this._segmentCount=t,t}}}}_initializeExtraUniforms(){Ei(this,this.propertySlotDefinitions)}_setExtraUniformValue(e,t){super._setExtraUniformValue(e,t),e==`uSegmentBreaks`&&(this._segmentCount=Math.round(Number(t)))}get channelOrder(){return Mi}get optionalChannels(){return Fi}get channelSpecs(){return ji}get defaultChannelConfigs(){return Pi}get defaultValues(){return Ni}get shaderBody(){return Ii}get primitiveTopology(){return`triangle-strip`}getExtraUniformLayout(){return[{name:`uArcFadingDistance`,type:`f32`,components:2},{name:`uNoFadingOnSecondPass`,type:`u32`,components:1},{name:`uArcHeightFactor`,type:`f32`,components:1},{name:`uMinArcHeight`,type:`f32`,components:1},{name:`uShape`,type:`u32`,components:1},{name:`uOrient`,type:`u32`,components:1},{name:`uClampApex`,type:`u32`,components:1},{name:`uMaxChordLength`,type:`f32`,components:1},{name:`uSegmentBreaks`,type:`f32`,components:1}]}draw(e,t){let n=(Math.max(1,this._segmentCount??1)+1)*2;e.draw(n,t.instanceCount,0,t.firstInstance)}drawPick(e,t){let n=(Math.max(1,this._segmentCount??1)+1)*2;e.draw(n,t.instanceCount,0,t.firstInstance)}},Ri=Object.freeze({type:`link`,createProgram(e,t,n){return new Li(e,t,n)}}),zi=[`triangle`,`open`],Bi=[`inside`,`outside`];function Vi(e){return 1/Math.max(Math.tan(Math.min(Math.max(e,1),90)*Math.PI/180),1e-6)}function Hi(e){let t=zi.indexOf(e);if(t<0)throw Error(`Unknown arrow head shape: ${String(e)}`);return t}function Ui(e){let t=Bi.indexOf(e);if(t<0)throw Error(`Unknown arrow head placement: ${String(e)}`);return t}var Wi={uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[0,0,0,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},size:{type:`f32`,components:1,default:8},direction:{type:`u32`,components:1,default:0}},{channels:Gi,defaults:Ki,defaultConfigs:qi,optionalChannels:Ji}=In(Wi),Yi=`
const DIRECTION_FORWARD: u32 = 0u;
const DIRECTION_REVERSE: u32 = 1u;
const DIRECTION_BOTH: u32 = 2u;
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
    headSlope: f32,
    bidirectional: bool
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
    if (bidirectional) {
        return polygonDistance(
            p,
            array<vec2<f32>, 6>(
                vec2<f32>(halfLength, 0.0),
                vec2<f32>(halfLength - headSideLength, halfWidth),
                vec2<f32>(-halfLength + headSideLength, halfWidth),
                vec2<f32>(-halfLength, 0.0),
                vec2<f32>(-halfLength + headSideLength, -halfWidth),
                vec2<f32>(halfLength - headSideLength, -halfWidth)
            )
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
    headRepeat: bool,
    bidirectional: bool
) -> f32 {
    if (headRepeat || stemHalfWidth < 0.0) {
        return configuredHeadSlope;
    }
    if (params.uHeadPlacement != PLACEMENT_INSIDE) {
        if (
            bidirectional
            || params.uStartNotch == 0u
            || stemHalfWidth <= 0.0
        ) {
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

    let availableJoinLength = max(
        halfLength * 2.0 - params.uMinStemLength,
        0.0
    );
    let maxJoinLength = select(
        availableJoinLength,
        availableJoinLength * 0.5,
        bidirectional
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
    let bidirectional = in.direction == DIRECTION_BOTH;
    if (in.direction == DIRECTION_REVERSE) {
        p.x = -p.x;
    }

    let halfStroke = in.strokeWidth * 0.5;
    var stem = 1e20;
    if (in.stemHalfWidth > 0.0) {
        stem = stemDistance(
            p,
            in.halfLength,
            in.stemHalfWidth,
            in.headSlope,
            bidirectional
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
        if (bidirectional) {
            head = min(
                head,
                headDistance(
                    vec2<f32>(-p.x, p.y),
                    in.halfLength,
                    in.headHalfWidth,
                    in.headSlope,
                    in.notchSlope,
                    in.headStrokeWidth
                )
            );
        }
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
        return culledArrow();
    }
    let axis = normalize(tangent);
    let normal = vec2<f32>(-axis.y, axis.x);
    let arrowSize = max(getScaled_size(i), params.uMinSize);
    let headHalfWidth = max(params.uHeadWidth * arrowSize * 0.5, 0.0);
    let stemHalfWidth = select(-arrowSize * 0.5, arrowSize * 0.5, params.uStem != 0u);
    let direction = u32(getScaled_direction(i));
    let bidirectional = direction == DIRECTION_BOTH;
    let headRepeat = params.uHeadSpacing >= 0.0 && !bidirectional;
    let headSlope = effectiveHeadSlope(
        lengthInPixels * 0.5,
        headHalfWidth,
        stemHalfWidth,
        params.uHeadSlope,
        params.uHeadNotchSlope,
        headRepeat,
        bidirectional
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
    var startExpansion = 0.0;
    var endExpansion = 0.0;
    if (direction == DIRECTION_REVERSE) {
        startExpansion = outsideHeadOffset;
    } else if (direction == DIRECTION_FORWARD) {
        endExpansion = outsideHeadOffset;
    } else {
        startExpansion = outsideHeadOffset;
        endExpansion = outsideHeadOffset;
    }
    let geometryStart = -lengthInPixels * 0.5 - startExpansion;
    let geometryEnd = lengthInPixels * 0.5 + endExpansion;
    let geometryHalfLength = (geometryEnd - geometryStart) * 0.5;
    let geometryCenter = (geometryStart + geometryEnd) * 0.5;
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
    out.direction = direction;
    out.headSpacing = select(-1.0, params.uHeadSpacing * arrowSize, headRepeat);
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
`,Xi=class extends Fn{get propertySlotDefinitions(){return{headAngle:{uniform:`uHeadSlope`,default:45,encode:Vi},headNotchAngle:{uniform:`uHeadNotchSlope`,default:90,encode:Vi},minSize:{uniform:`uMinSize`,default:1},headWidth:{uniform:`uHeadWidth`,default:3},startNotch:{uniform:`uStartNotch`,default:!1,encode:e=>+!!e},minStemLength:{uniform:`uMinStemLength`,default:0},headSpacing:{uniform:`uHeadSpacing`,default:null,encode:e=>e??-1},stem:{uniform:`uStem`,default:!0,encode:e=>e===!1?0:1},headShape:{uniform:`uHeadShape`,default:`triangle`,encode:Hi},headPlacement:{uniform:`uHeadPlacement`,default:`inside`,encode:Ui}}}_initializeExtraUniforms(){Ei(this,this.propertySlotDefinitions)}get channelOrder(){return Gi}get optionalChannels(){return Ji}get channelSpecs(){return Wi}get defaultChannelConfigs(){return qi}get defaultValues(){return Ki}get shaderBody(){return Yi}get primitiveTopology(){return`triangle-list`}getExtraUniformLayout(){return[{name:`uHeadSlope`,type:`f32`,components:1},{name:`uHeadNotchSlope`,type:`f32`,components:1},{name:`uMinSize`,type:`f32`,components:1},{name:`uHeadWidth`,type:`f32`,components:1},{name:`uStartNotch`,type:`u32`,components:1},{name:`uMinStemLength`,type:`f32`,components:1},{name:`uHeadSpacing`,type:`f32`,components:1},{name:`uStem`,type:`u32`,components:1},{name:`uHeadShape`,type:`u32`,components:1},{name:`uHeadPlacement`,type:`u32`,components:1}]}draw(e,t){e.draw(6,t.instanceCount,0,t.firstInstance)}},Zi=Object.freeze({forward:0,reverse:1,both:2}),Qi=Object.freeze({type:`arrow`,createProgram(e,t,n){return new Xi(e,t,n)}}),B=Object.freeze({tileSize:128,shapePadding:24,spread:24,gutter:1,tightPacking:!0});function $i(e){if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.getGlyph==`function`&&typeof t.getPairAdjustment==`function`&&typeof t.unitsPerEm==`number`}function ea(e,t,n={}){let r=n.fontSize??12,i=n.lineHeight??1,a=n.letterSpacing??0,o=t.unitsPerEm,s=r/o,c=a/s,l=(t.ascender-t.descender+t.lineGap)*s*i,u=[],d=[],f=[],p=[],m=new Float32Array(e.length),h=new Float32Array(e.length),g=[],_=Array(t.glyphCount),v=(B.tileSize-B.shapePadding*2)/o;for(let n=0;n<e.length;n++){let r=e[n].split(`
`),i=0;for(let e=0;e<r.length;e++){let o=Array.from(r[e],e=>t.getGlyph(e)),m=o.map(()=>({placement:0,advance:0}));for(let e=0;e+1<o.length;e++){let n=t.getPairAdjustment(o[e].glyphId,o[e+1].glyphId);m[e].placement+=n.firstPlacement,m[e].advance+=n.firstAdvance,m[e+1].placement+=n.secondPlacement,m[e+1].advance+=n.secondAdvance}let h=0;for(let t=0;t<o.length;t++){let r=o[t],i=m[t];if(r.path!==null&&r.bounds!==null){let t=_[r.glyphId];if(t===void 0){let e=r.bounds.xMax-r.bounds.xMin,n=r.bounds.yMax-r.bounds.yMin,i=Math.max(1,Math.ceil(e*v+B.shapePadding*2)),a=Math.max(1,Math.ceil(n*v+B.shapePadding*2));t=g.length,g.push({glyphId:r.glyphId,path:r.path,bounds:r.bounds,tileWidth:i,tileHeight:a}),_[r.glyphId]=t}let a=g[t],o=(r.bounds.xMin+r.bounds.xMax)*.5-a.tileWidth/v*.5;u.push(t),d.push(n),f.push((h+i.placement+o)*s),p.push(-e*l)}h+=r.advanceWidth+i.advance+c}let y=o.length>0?h*s-a:0;i=Math.max(i,y)}m[n]=i,h[n]=Math.max(1,r.length)*l}return{glyphIds:Uint32Array.from(u),stringIndex:Uint32Array.from(d),xOffset:Float32Array.from(f),yOffset:Float32Array.from(p),textWidth:m,textHeight:h,fontSize:r,lineAdvance:l,ascent:t.ascender*s,descent:-t.descender*s,outlineGlyphs:g}}var ta=class{constructor(e,t){if(this.device=e,this.format=t.format??`rgba16float`,this.label=t.label??`MSDF atlas`,this.growthFactor=t.growthFactor??2,!(this.growthFactor>1)||!Number.isFinite(this.growthFactor))throw Error(`MSDF atlas growth factor must be greater than one.`);this._validateDimensions(t.width,t.height),this.width=t.width,this.height=t.height,this.version=1,this.texture=this._createTexture(this.width,this.height),this._destroyed=!1,this._listeners=new Set,this._retirements=new Set}_validateDimensions(e,t){let n=this.device.limits.maxTextureDimension2D;if(!Number.isInteger(e)||!Number.isInteger(t)||e<=0||t<=0||e>n||t>n)throw Error(`Invalid MSDF atlas texture dimensions.`)}_createTexture(e,t){return this.device.createTexture({label:this.label,size:[e,t],format:this.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}_retire(e){let t=this.device.queue.onSubmittedWorkDone().then(()=>e.destroy(),()=>e.destroy());return this._retirements.add(t),t.finally(()=>this._retirements.delete(t)),t}subscribe(e){if(this._destroyed)throw Error(`MSDF atlas texture has been destroyed.`);return this._listeners.add(e),()=>this._listeners.delete(e)}grow(e,t){if(this._destroyed)throw Error(`MSDF atlas texture has been destroyed.`);if(this._validateDimensions(Math.max(this.width,e),Math.max(this.height,t)),e<=this.width&&t<=this.height)return!1;let n=this.width,r=this.height;for(;n<e;)n=Math.min(this.device.limits.maxTextureDimension2D,Math.ceil(n*this.growthFactor));for(;r<t;)r=Math.min(this.device.limits.maxTextureDimension2D,Math.ceil(r*this.growthFactor));this._validateDimensions(n,r);let i=this.texture,a=this._createTexture(n,r),o=this.device.createCommandEncoder({label:N(this.label,`growth copy`)});o.copyTextureToTexture({texture:i},{texture:a},[this.width,this.height]),this.device.queue.submit([o.finish()]),this.texture=a,this.width=n,this.height=r,this.version++,this._retire(i);for(let e of this._listeners)e(this);return!0}destroy(){this._destroyed||(this._destroyed=!0,this._listeners.clear(),this.texture.destroy())}},na=512,ra=128,ia=32,aa=class{constructor(e,t){this.renderer=e,this.device=e.device,this.font=t,this.generator=$r(e),this.storage=new ta(this.device,{width:na,height:ra,label:`outline font atlas`,growthFactor:1.5}),this.sampler=this.device.createSampler({label:`outline font atlas sampler`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`}),this._entryByGlyphId=Array(t.glyphCount),this._entryCount=0,this._shelfX=0,this._shelfY=0,this._shelfHeight=0,this._destroyed=!1,this._pendingBatches=new Set}get texture(){return this.storage.texture}get width(){return this.storage.width}get height(){return this.storage.height}get version(){return this.storage.version}get entryCount(){return this._entryCount}subscribe(e){return this.storage.subscribe(()=>e(this))}ensure(e){if(this._destroyed)throw Error(`Outline font atlas has been destroyed.`);let t=new Set,n=e.filter(e=>this._entryByGlyphId[e.glyphId]!==void 0||t.has(e.glyphId)?!1:(t.add(e.glyphId),!0));for(let e=0;e<n.length;e+=ia)this._appendBatch(n.slice(e,e+ia));return e.map(e=>this._entryByGlyphId[e.glyphId])}_appendBatch(e){let t=e.map(e=>e.path),n=this.generator.createAtlas(t,{...B,normalizationSpan:this.font.unitsPerEm},`outline glyph batch`);n.completion.catch(()=>{});let r=this._allocateBatch(n.jobs),i=this.device.createCommandEncoder({label:N(`outline font atlas`,`batch copy`)});for(let a=0;a<t.length;a++){let t=n.jobs[a],o=r[a];i.copyTextureToTexture({texture:n.texture,origin:[t.slotX,t.slotY,0]},{texture:this.texture,origin:[o.x,o.y,0]},[t.slotWidth,t.slotHeight,1]),this._entryByGlyphId[e[a].glyphId]={x:o.x+t.gutter+.5,y:o.y+t.gutter+.5,width:t.tileWidth-1,height:t.tileHeight-1},this._entryCount++}this.device.queue.submit([i.finish()]);let a=this.device.queue.onSubmittedWorkDone().then(()=>n.destroy(),()=>n.destroy());this._pendingBatches.add(a),a.finally(()=>this._pendingBatches.delete(a))}_allocateBatch(e){let t=this.width;for(let n of e)for(;t<n.slotWidth;)t*=2;let n=this._shelfX,r=this._shelfY,i=this._shelfHeight,a=e.map(e=>{n>0&&n+e.slotWidth>t&&(n=0,r+=i,i=0);let a={x:n,y:r};return n+=e.slotWidth,i=Math.max(i,e.slotHeight),a}),o=r+i;return this.storage.grow(t,o),this._shelfX=n,this._shelfY=r,this._shelfHeight=i,a}destroy(){this._destroyed||(this._destroyed=!0,this._entryByGlyphId.length=0,this._entryCount=0,this.storage.destroy())}},oa=new WeakMap;function sa(e,t){let n=oa.get(e);n||(n=new WeakMap,oa.set(e,n));let r=n.get(t);return r||(r=e._ownResource(new aa(e,t)),n.set(t,r)),r}var ca=`
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

// Font y offsets and line offsets use a baseline-origin, y-up coordinate
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
`;function la(e,t,n){if(!e)return n(t);if(e.data!==void 0||`dynamic`in e&&e.dynamic||n(e.value??(`default`in e?e.default:void 0)??t))return!0;let r=`conditions`in e?e.conditions:[];for(let e of r??[])if(e.value!==void 0){if(n(e.value))return!0}else if(la(e.channel,t,n))return!0;return!1}function ua(e){return typeof e!=`number`||e>0}function da(e){return!Array.isArray(e)||e.length<4||e[3]>0}function fa(e){let t=la(e?.strokeWidth,0,ua)&&la(e?.strokeOpacity,1,ua)&&la(e?.stroke,[0,0,0,1],da),n=la(e?.shadowOpacity,0,ua)&&la(e?.shadowColor,[0,0,0,1],da);return t*1+n*2}function pa(e){let t=fa(e),n=(t&1)!=0,r=(t&2)!=0;return{shadow:r,outline:n,enabled:r||n}}function ma(e){let t=new Uint32Array(e.textWidth.length+1);for(let n of e.stringIndex)t[n+1]++;for(let e=1;e<t.length;e++)t[e]+=t[e-1];return t}function ha(e,t){let n=ma(e),r=1+ +t.shadow+ +t.outline,i=new Uint32Array(e.glyphIds.length*r*2),a=new Uint32Array(e.textWidth.length+1),o=0,s=(e,t,n)=>{for(let r=e;r<t;r++){let e=o*2;i[e]=r,i[e+1]=n,o++}};for(let r=0;r<e.textWidth.length;r++){let e=n[r],i=n[r+1];t.shadow&&s(e,i,0),t.outline&&s(e,i,1),s(e,i,2),a[r+1]=o}return{data:i,offsets:a}}var ga={uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:R(),default:.5},x2:{components:1,scale:R(),optional:!0},y:{components:1,scale:R(),default:.5},y2:{components:1,scale:R(),optional:!0},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},text:{type:`u32`,components:1,default:0},size:{type:`f32`,components:1,default:12},angle:{type:`f32`,components:1,default:0},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},align:{type:`u32`,components:1,default:1},baseline:{type:`u32`,components:1,default:1},fill:{type:`f32`,components:4,default:[0,0,0,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:0},shadowColor:{type:`f32`,components:4,optional:!0},shadowOpacity:{type:`f32`,components:1,optional:!0},shadowOffsetX:{type:`f32`,components:1,optional:!0},shadowOffsetY:{type:`f32`,components:1,optional:!0},shadowBlur:{type:`f32`,components:1,optional:!0}},{channels:_a,defaults:va,defaultConfigs:ya,optionalChannels:ba}=In(ga);function xa(e){return`
struct GlyphInstance {
    stringIndex: u32,
    glyphId: u32,
    xOffset: f32,
    yOffset: f32,
};

struct RenderItem {
    glyphIndex: u32,
    layer: u32,
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

const TEXT_LAYER_SHADOW: u32 = 0u;
const TEXT_LAYER_OUTLINE: u32 = 1u;
const TEXT_LAYER_FILL: u32 = 2u;

${ca}

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
    @location(7) stroke: vec4<f32>,
    @location(8) strokeOpacity: f32,
    @location(9) halfStrokeWidth: f32,
    @location(10) @interpolate(flat) devicePixelsPerAtlas: f32,
    @location(11) tilePosition: vec2<f32>,
    @location(12) @interpolate(flat) shapeBounds: vec4<f32>,
    @location(13) @interpolate(flat) stemDarkening: f32,
    @location(14) @interpolate(flat) layer: u32,
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
    out.stroke = vec4<f32>(0.0);
    out.strokeOpacity = 0.0;
    out.halfStrokeWidth = 0.0;
    out.devicePixelsPerAtlas = 0.0;
    out.tilePosition = vec2<f32>(0.0);
    out.shapeBounds = vec4<f32>(0.0);
    out.stemDarkening = 0.0;
    out.layer = TEXT_LAYER_FILL;
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

${e.enabled?`
    let renderItem = renderItems[i];
    let layer = renderItem.layer;
    let glyph = glyphs[renderItem.glyphIndex];`:`
    let layer = TEXT_LAYER_FILL;
    let glyph = glyphs[i];`}
    let textMetrics = stringMetrics[glyph.stringIndex];
    let metrics = glyphMetrics[glyph.glyphId];
    let tileSize = metrics.texRect.zw + vec2<f32>(1.0);

    // Base font size before range fitting.
    var size = getScaled_size(i);
    var opacity = getScaled_opacity(i);
${e.enabled?`
    var layerColor = getScaled_fill(i);
    var layerOpacityMultiplier = 1.0;
    var layerExtent = 0.0;
    var effectOffset = vec2<f32>(0.0);
${e.outline?`    if (layer == TEXT_LAYER_OUTLINE) {
        layerColor = getScaled_stroke(i);
        layerOpacityMultiplier = getScaled_strokeOpacity(i);
        layerExtent = max(getScaled_strokeWidth(i), 0.0) * 0.5 * globals.dpr;
    }`:``}
${e.shadow?`    if (layer == TEXT_LAYER_SHADOW) {
        layerColor = getScaled_shadowColor(i);
        layerOpacityMultiplier = getScaled_shadowOpacity(i);
        layerExtent = max(getScaled_shadowBlur(i), 0.0) * globals.dpr;
        effectOffset = vec2<f32>(
            getScaled_shadowOffsetX(i),
            getScaled_shadowOffsetY(i)
        );
    }`:``}
    if (layerColor.a <= 0.0 || opacity * layerOpacityMultiplier <= 0.0 ||
            (layer == TEXT_LAYER_OUTLINE && layerExtent <= 0.0)) {
        return culledText();
    }`:`
    let layerColor = getScaled_fill(i);
    let layerOpacityMultiplier = 1.0;
    let layerExtent = getScaled_strokeWidth(i) * 0.5 * globals.dpr;
    let effectOffset = vec2<f32>(0.0);`}

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
        anchor.x = (anchor.x + x2) * 0.5;
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
    var width = tileSize.x * sizeScale;
    var height = tileSize.y * sizeScale;
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
        0.0,
        params.uCapHeight,
        params.uDescent
    );
    if (params.uLogoLetters != 0u) {
        let logoAtlasScale = metrics.texRect.zw / metrics.metrics.yz;
        width = logoSize.x * logoAtlasScale.x;
        height = logoSize.y * logoAtlasScale.y;
        x = -0.5 * width;
        y = (local.y - 0.5) * height;
    }
    // Core encodes dy as a negative y-up glyph offset. Convert it to the
    // screen-pixel direction before applying the screen-space rotation.
    let localPos = vec2<f32>(
        x + local.x * width + getScaled_dx(i),
        y + getScaled_dy(i)
    );
    let rotated = rot * localPos;
    let localPixel = localAnchor + rotated + effectOffset;
    let pixel = anchor + rotated + effectOffset;

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
    out.color = layerColor;
    out.opacity = opacity * layerOpacityMultiplier;
    out.slope = max(1.0, size / params.uSdfNumerator * globals.dpr);
    out.gamma = getGammaForColor(out.color.rgb);
    out.pickId = 0u;
    out.edgeFadeOpacity = edgeFadeOpacity;
    out.stroke = getScaled_stroke(i);
    out.strokeOpacity = getScaled_strokeOpacity(i);
    out.halfStrokeWidth = layerExtent;
    out.devicePixelsPerAtlas = max(
        size * globals.dpr / max(params.uShapePixels, 1.0),
        1.0 / max(params.uSpread, 1.0)
    );
    out.tilePosition = local * tileSize;
    out.shapeBounds = vec4<f32>(
        params.uSpread,
        params.uSpread,
        tileSize.x - params.uSpread,
        tileSize.y - params.uSpread
    );
    out.stemDarkening = freeTypeLikeStemDarkening(size * globals.dpr);
    out.layer = layer;
#if defined(uniqueId_DEFINED)
${e.enabled?`
    if (layer == TEXT_LAYER_FILL) {
        out.pickId = getScaled_uniqueId(i) + 1u;
    }`:`
    out.pickId = getScaled_uniqueId(i) + 1u;`}
#endif
    return out;
}

fn median(r: f32, g: f32, b: f32) -> f32 {
    return max(min(r, g), min(max(r, g), b));
}

fn sampleTrueDistance(uv: vec2<f32>) -> f32 {
    return textureSample(fontAtlas, fontSampler, uv).a;
}

fn freeTypeLikeStemDarkening(deviceFontSize: f32) -> f32 {
    // FreeType's auto-hinter estimates a 0.075 em standard stem when the font
    // provides no better value, then applies a piecewise darkening curve that
    // fades to zero for sufficiently wide stems. We do not analyze hinted stem
    // widths, so use the same fallback estimate and return half of FreeType's
    // width increase as a symmetric signed-distance contour outset.
    let estimatedStemWidth = deviceFontSize * 0.075;
    var widthIncrease: f32;
    if (estimatedStemWidth <= 0.5) {
        widthIncrease = 0.4;
    } else if (estimatedStemWidth < 1.0) {
        widthIncrease = mix(0.4, 0.275, (estimatedStemWidth - 0.5) / 0.5);
    } else if (estimatedStemWidth <= 1.667) {
        widthIncrease = 0.275;
    } else if (estimatedStemWidth < 2.333) {
        widthIncrease = mix(
            0.275,
            0.0,
            (estimatedStemWidth - 1.667) / (2.333 - 1.667)
        );
    } else {
        widthIncrease = 0.0;
    }
    return widthIncrease * 0.5;
}

fn sampleOutlineCoverage(
    uv: vec2<f32>,
    tilePosition: vec2<f32>,
    shapeBounds: vec4<f32>,
    devicePixelsPerAtlas: f32,
    halfStrokeWidth: f32,
    stemDarkening: f32
) -> vec2<f32> {
    let sample = textureSample(fontAtlas, fontSampler, uv).rgb;
    let distance = median(sample.r, sample.g, sample.b) * devicePixelsPerAtlas +
        stemDarkening;
    let aaAtlas = (0.5 + stemDarkening) / devicePixelsPerAtlas + 1.0;
    let fillMin = shapeBounds.xy - vec2<f32>(aaAtlas);
    let fillMax = shapeBounds.zw + vec2<f32>(aaAtlas);
    let strokeAtlas = halfStrokeWidth / devicePixelsPerAtlas;
    let strokeGuard = aaAtlas + 4.0 * strokeAtlas;
    let strokeMin = shapeBounds.xy - vec2<f32>(strokeGuard);
    let strokeMax = shapeBounds.zw + vec2<f32>(strokeGuard);
    let fillInside = all(tilePosition >= fillMin) && all(tilePosition <= fillMax);
    let strokeInside = all(tilePosition >= strokeMin) && all(tilePosition <= strokeMax);
    let fillCoverage = select(
        0.0,
        clamp(distance + 0.5, 0.0, 1.0),
        fillInside
    );
    let outerCoverage = select(
        0.0,
        clamp(distance + halfStrokeWidth + 0.5, 0.0, 1.0),
        strokeInside
    );
    // Use the same guard for both stroke contours so their difference is
    // exactly zero when the requested width is zero.
    return vec2<f32>(
        fillCoverage,
        max(outerCoverage - fillCoverage, 0.0)
    );
}

fn sampleSuperOutline(
    in: VSOut,
    uvDx: vec2<f32>,
    uvDy: vec2<f32>,
    tileDx: vec2<f32>,
    tileDy: vec2<f32>
) -> vec2<f32> {
    return (
        sampleOutlineCoverage(
            in.uv + 0.25 * uvDx + 0.25 * uvDy,
            in.tilePosition + 0.25 * tileDx + 0.25 * tileDy,
            in.shapeBounds,
            in.devicePixelsPerAtlas,
            in.halfStrokeWidth,
            in.stemDarkening
        ) +
        sampleOutlineCoverage(
            in.uv + 0.75 * uvDx + 0.25 * uvDy,
            in.tilePosition + 0.75 * tileDx + 0.25 * tileDy,
            in.shapeBounds,
            in.devicePixelsPerAtlas,
            in.halfStrokeWidth,
            in.stemDarkening
        ) +
        sampleOutlineCoverage(
            in.uv + 0.25 * uvDx + 0.75 * uvDy,
            in.tilePosition + 0.25 * tileDx + 0.75 * tileDy,
            in.shapeBounds,
            in.devicePixelsPerAtlas,
            in.halfStrokeWidth,
            in.stemDarkening
        ) +
        sampleOutlineCoverage(
            in.uv + 0.75 * uvDx + 0.75 * uvDy,
            in.tilePosition + 0.75 * tileDx + 0.75 * tileDy,
            in.shapeBounds,
            in.devicePixelsPerAtlas,
            in.halfStrokeWidth,
            in.stemDarkening
        )
    ) * 0.25;
}

fn shadowCoverageAt(in: VSOut, uv: vec2<f32>) -> f32 {
    let distance = sampleTrueDistance(uv) * in.devicePixelsPerAtlas +
        in.stemDarkening;
    let maxBlur = max(
        (params.uSpread - 1.0) * in.devicePixelsPerAtlas,
        0.0
    );
    let blur = min(in.halfStrokeWidth, maxBlur);
    if (blur <= 0.0) {
        return clamp(distance + 0.5, 0.0, 1.0);
    }
    return smoothstep(-blur, blur, distance);
}

fn sampleSuperShadow(
    in: VSOut,
    uvDx: vec2<f32>,
    uvDy: vec2<f32>
) -> f32 {
    return (
        shadowCoverageAt(in, in.uv + 0.25 * uvDx + 0.25 * uvDy) +
        shadowCoverageAt(in, in.uv + 0.75 * uvDx + 0.25 * uvDy) +
        shadowCoverageAt(in, in.uv + 0.25 * uvDx + 0.75 * uvDy) +
        shadowCoverageAt(in, in.uv + 0.75 * uvDx + 0.75 * uvDy)
    ) * 0.25;
}

fn getGammaForColor(rgb: vec3<f32>) -> f32 {
    return mix(
        1.25,
        0.75,
        smoothstep(0.0, 1.0, dot(rgb, vec3<f32>(0.299, 0.587, 0.114)))
    );
}

fn sourceOver(above: vec4<f32>, below: vec4<f32>) -> vec4<f32> {
    return above + below * (1.0 - above.a);
}

fn shadeBase(in: VSOut, edgeFadeOpacity: f32) -> vec4<f32> {
${e.enabled?`
        let uvDx = dpdx(in.uv);
        let uvDy = -dpdy(in.uv);
        let tileDx = dpdx(in.tilePosition);
        let tileDy = -dpdy(in.tilePosition);
        let outlineCoverage = sampleSuperOutline(
            in,
            uvDx,
            uvDy,
            tileDx,
            tileDy
        );
        var coverage = select(
            outlineCoverage.x,
            outlineCoverage.y,
            in.layer == TEXT_LAYER_OUTLINE
        );
${e.shadow?`        let shadowCoverage = sampleSuperShadow(in, uvDx, uvDy);
        coverage = select(
            coverage,
            shadowCoverage,
            in.layer == TEXT_LAYER_SHADOW
        );`:``}
        coverage = pow(coverage, getGammaForColor(in.color.rgb));
        let color = vec4<f32>(in.color.rgb, in.color.a * in.opacity);
        return premultiplyAlpha(color) * coverage * edgeFadeOpacity;`:`
        let uvDx = dpdx(in.uv);
        let uvDy = -dpdy(in.uv);
        let tileDx = dpdx(in.tilePosition);
        let tileDy = -dpdy(in.tilePosition);
        let coverage = sampleSuperOutline(
            in,
            uvDx,
            uvDy,
            tileDx,
            tileDy
        );
        var fillColor = in.color;
        var strokeColor = in.stroke;
        let fillCoverage = pow(
            coverage.x,
            getGammaForColor(fillColor.rgb)
        );
        let strokeCoverage = pow(
            coverage.y,
            getGammaForColor(strokeColor.rgb)
        );
        fillColor.a *= in.opacity;
        strokeColor.a *= in.opacity * in.strokeOpacity;
        fillColor = premultiplyAlpha(fillColor);
        strokeColor = premultiplyAlpha(strokeColor);
        let fillLayer = fillColor * fillCoverage;
        let strokeLayer = strokeColor * strokeCoverage;
        let color = sourceOver(strokeLayer, fillLayer);
        return color * edgeFadeOpacity;`}
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
`}function Sa({channels:e={},count:t,font:n,fontSize:r,lineHeight:i,letterSpacing:a}={}){let o={...e},s=o.text;o.text={value:0,type:`u32`,components:1,scale:{type:`identity`}};let c=pa(e);if(!$i(n))throw Error(`Text marks require a TrueType outline font.`);c.shadow&&(o.shadowColor??={value:[0,0,0,1]},o.shadowOpacity??={value:0},o.shadowOffsetX??={value:0},o.shadowOffsetY??={value:0},o.shadowBlur??={value:0});let l=c.enabled?`glyphs[renderItems[i].glyphIndex].stringIndex`:`glyphs[i].stringIndex`,u=wa(s,t),d=Ca(u,n,{fontSize:r,lineHeight:i,letterSpacing:a});return{normalized:{channels:o,count:u.length,seriesIndexExpression:l},textLayout:d,effects:c}}function Ca(e,t,n){return ea(e,t,{fontSize:typeof n.fontSize==`number`?n.fontSize:12,lineHeight:typeof n.lineHeight==`number`?n.lineHeight:1,letterSpacing:typeof n.letterSpacing==`number`?n.letterSpacing:0})}function wa(e,t){if(e&&`data`in e&&e.data!==void 0){if(Array.isArray(e.data))return e.data;throw Error(`Text channel data must be a string array when no textLayout is provided.`)}if(e&&`value`in e&&e.value!==void 0){if(typeof e.value!=`string`)throw Error(`Text channel value must be a string when no textLayout is provided.`);let n=e.value;return Array.from({length:t??1},()=>n)}return Array.from({length:t??0},()=>``)}function Ta(e){return{texture:e.texture,sampler:e.sampler,width:e.width,height:e.height,format:`rgba16float`}}var Ea=class extends Fn{get propertySlotDefinitions(){return{viewport:{uniform:`uViewport`,getDefault:()=>[0,0,this.renderer._globals.width,this.renderer._globals.height]},viewportEdgeFadeWidth:{uniform:`uViewportEdgeFadeWidth`,default:[0,0,0,0]},viewportEdgeFadeDistance:{uniform:`uViewportEdgeFadeDistance`,default:[-1/0,-1/0,-1/0,-1/0]},paddingX:{uniform:`uPaddingX`,default:0},paddingY:{uniform:`uPaddingY`,default:0},flushX:{uniform:`uFlushX`,default:!0,encode:e=>+!!e},flushY:{uniform:`uFlushY`,default:!0,encode:e=>+!!e},squeeze:{uniform:`uSqueeze`,default:!0,encode:e=>+!!e},logoLetters:{default:!1,set:e=>{this._setUniformValue(`uLogoLetters`,+!!e),this._setUniformValue(`uSdfNumerator`,this._sdfNumeratorBase*(e?.5:1))}}}}_initializeExtraUniforms(){Ei(this,this.propertySlotDefinitions)}constructor(e,t,n){let{normalized:r,textLayout:i,effects:a}=Sa(t);super(e,{...t,...r,textLayout:i,effects:a},n);let o;try{o=this._seriesBuffers.inferCount()}catch(e){throw this.destroy(),e}if(o!==null&&o!==r.count)throw this.destroy(),Error(`Text series data count (${o}) does not match text count (${r.count}).`);delete this._markConfig.textLayout}get drawCount(){return this._drawOffsets.length-1}resolveDrawRange(e,t){let n=this._drawOffsets[e];return{firstInstance:n,instanceCount:this._drawOffsets[e+t]-n}}get channelOrder(){return _a}get optionalChannels(){return ba}get defaultChannelConfigs(){return ya}get defaultValues(){return va}get channelSpecs(){return ga}get shaderBody(){let e=this._markConfig?.effects;return xa(e||{enabled:!1,shadow:!1,outline:!1})}getExtraUniformLayout(){return[{name:`uFontBase`,type:`f32`,components:1},{name:`uLayoutFontSize`,type:`f32`,components:1},{name:`uAtlasScale`,type:`f32`,components:2},{name:`uCapHeight`,type:`f32`,components:1},{name:`uDescent`,type:`f32`,components:1},{name:`uSdfNumerator`,type:`f32`,components:1},{name:`uShapePixels`,type:`f32`,components:1},{name:`uSpread`,type:`f32`,components:1},{name:`uPaddingX`,type:`f32`,components:1},{name:`uPaddingY`,type:`f32`,components:1},{name:`uFlushX`,type:`u32`,components:1},{name:`uFlushY`,type:`u32`,components:1},{name:`uSqueeze`,type:`u32`,components:1},{name:`uLogoLetters`,type:`u32`,components:1},{name:`uViewport`,type:`f32`,components:4},{name:`uViewportEdgeFadeWidth`,type:`f32`,components:4},{name:`uViewportEdgeFadeDistance`,type:`f32`,components:4}]}getExtraResourceDefs(){let e=[{name:`glyphs`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphs`,wgslType:`array<GlyphInstance>`},{name:`stringMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`stringMetrics`,wgslType:`array<StringMetrics>`},{name:`glyphMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphMetrics`,wgslType:`array<GlyphMetrics>`},{name:`fontAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`float`,dimension:`2d`,visibility:`fragment`,wgslName:`fontAtlas`},{name:`fontAtlas`,role:`extraSampler`,kind:`sampler`,samplerType:`filtering`,visibility:`fragment`,wgslName:`fontSampler`}];return this._markConfig.effects.enabled&&e.push({name:`renderItems`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`renderItems`,wgslType:`array<RenderItem>`}),e}_initializeExtraResources(){let e=this._markConfig.textLayout;this._initializeOutlineFontResources(e,this._markConfig.font),this._setUniformValue(`uLayoutFontSize`,e.fontSize),this._updateTextLayoutBuffers(e)}_initializeOutlineFontResources(e,t){let n=sa(this.renderer,t);this._updateOutlineGlyphMetrics(e,t,n);let r=B.tileSize-B.shapePadding*2,i=r/t.unitsPerEm;this._setUniformValue(`uFontBase`,r),this._setUniformValue(`uAtlasScale`,[1/n.width,1/n.height]),this._setUniformValue(`uCapHeight`,t.capHeight*i),this._setUniformValue(`uDescent`,-t.descender*i),this._setUniformValue(`uShapePixels`,r),this._setUniformValue(`uSpread`,B.spread),this._sdfNumeratorBase=r*.35,this._extraTextures.set(`fontAtlas`,Ta(n)),this._borrowedExtraTextures.add(`fontAtlas`),this._outlineAtlas=n,this._outlineAtlasUnsubscribe=n.subscribe(e=>{this._setUniformValue(`uAtlasScale`,[1/e.width,1/e.height]),this._extraTextures.set(`fontAtlas`,Ta(e)),this._writeUniforms(),this._rebuildBindGroup(),this.renderer._invalidate()})}_updateOutlineGlyphMetrics(e,t,n){let r=n.ensure(e.outlineGlyphs),i=(B.tileSize-B.shapePadding*2)/t.unitsPerEm,a=new Float32Array(e.outlineGlyphs.length*8);for(let t=0;t<e.outlineGlyphs.length;t++){let n=t*8,o=e.outlineGlyphs[t],s=r[t];a[n]=s.x,a[n+1]=s.y,a[n+2]=s.width,a[n+3]=s.height,a[n+4]=-(o.bounds.yMin+o.bounds.yMax)*.5*i-o.tileHeight*.5,a[n+5]=(o.bounds.xMax-o.bounds.xMin)*i,a[n+6]=(o.bounds.yMax-o.bounds.yMin)*i}return this._writeExtraBuffer(`glyphMetrics`,a)}_updateTextLayoutBuffers(e){let t=e.glyphIds.length,n=new ArrayBuffer(t*16),r=new Uint32Array(n),i=new Float32Array(n);for(let n=0;n<t;n++){let t=n*4;r[t]=e.stringIndex[n],r[t+1]=e.glyphIds[n],i[t+2]=e.xOffset[n],i[t+3]=e.yOffset?e.yOffset[n]:0}let a=this._writeExtraBuffer(`glyphs`,n),o=e.textWidth.length,s=new Float32Array(o*2);for(let t=0;t<o;t++){let n=t*2;s[n]=e.textWidth[t],s[n+1]=e.textHeight[t]}a=this._writeExtraBuffer(`stringMetrics`,s)||a;let c=this._markConfig.effects;if(c.enabled){let t=ha(e,c);a=this._writeExtraBuffer(`renderItems`,t.data)||a,this._drawOffsets=t.offsets}else this._drawOffsets=ma(e);return a}_writeExtraBuffer(e,t){let n=t.byteLength,r=Math.max(4,n),i=this._extraBuffers.get(e),a=!i||i.size<r;return a&&(i?.destroy(),i=this.device.createBuffer({label:N(this.label,e),size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._extraBuffers.set(e,i)),n>0&&this.device.queue.writeBuffer(i,0,ArrayBuffer.isView(t)?j(t):t),a}replaceSeries(e,t){let n=e.text,r;if(typeof n==`string`){if(t===void 0)throw Error(`Replacing a scalar text series requires an explicit count.`);r=Array.from({length:t},()=>n)}else if(Array.isArray(n)){if(r=n,t!==void 0&&t!==r.length)throw Error(`Text series count (${r.length}) does not match count (${t}).`)}else throw Error(`Text series replacement requires a string or string[] "text" channel.`);let i=Ca(r,this._markConfig.font,this._markConfig),a={};for(let[t,n]of this._logicalSeriesTargets){if(n.length>1)throw Error(`Series replacement for channel "${t}" is not supported because it has multiple series-backed branches.`);let r=e[t];if(r===void 0)throw Error(`Series replacement is missing channel "${t}".`);a[n[0]]=r}let o=this._seriesBuffers.inferCount(a);if(o!==null&&o!==r.length)throw Error(`Text series data count (${o}) does not match text count (${r.length}).`);let s=this._updateTextLayoutBuffers(i);s=this._updateOutlineGlyphMetrics(i,this._markConfig.font,this._outlineAtlas)||s,this.updateSeries(a,r.length,s)}destroy(){this._outlineAtlasUnsubscribe?.(),super.destroy()}},Da=new WeakMap;function Oa(e){if(!$i(e.font))throw TypeError(`Text marks require a TrueType outline font.`);let t=e.font,n=fa(e.channels);if(n===0)return t;let r=Da.get(t);return r||(r=[{},{},{},{}],Da.set(t,r)),r[n]}var ka=Object.freeze({type:`text`,getProgramKey:Oa,createProgram(e,t,n){return new Ea(e,t,n)}});function Aa(e,t,n){if(!n)return null;let r=Array.from(n,t=>{if(!Number.isFinite(t)||!Number.isInteger(t))throw Error(`Ordinal domain on "${e}" requires integer u32 values.`);if(t<0||t>4294967295)throw Error(`Ordinal domain on "${e}" must fit in u32 values.`);if(t===4294967295)throw Error(`Ordinal domain on "${e}" must not contain 0xffffffff.`);return t>>>0}),i=new Set;for(let t of r){if(i.has(t))throw Error(`Ordinal domain on "${e}" must not contain duplicates.`);i.add(t)}return r}var ja={type:`band`,input:`u32`,output:`f32`,params:[{prefix:Ne,defaultValue:0,prop:`paddingInner`},{prefix:Pe,defaultValue:0,prop:`paddingOuter`},{prefix:Fe,defaultValue:.5,prop:`align`},{prefix:Ie,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!0,needsOrdinalRange:!1},normalizeDomainMap:Fa,normalizeStops:Pa,validate:Na,emit:Ma};Object.freeze(ja);function Ma({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,domainMapName:i}){let a=at(n,r),o=Ee+e;return i?`${nt(e,`f32`,t)} {
    let raw = ${a};
    let mapCount = u32(params.${o});
    if (mapCount == 0u) {
        return scaleBand(
            raw,
            ${rt(e)},
            ${I(e)},
            params.${Ne}${e},
            params.${Pe}${e},
            params.${Fe}${e},
            params.${Ie}${e}
        );
    }
    let mapped = ${sn(i)}(raw, arrayLength(&${i}));
    if (mapped == HASH_NOT_FOUND) { return ${I(e)}.x; }
    return scaleBand(
        mapped,
        ${rt(e)},
        ${I(e)},
        params.${Ne}${e},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e}
    );
}`:`${nt(e,`f32`,t)} {
    let v = ${a};
    return scaleBand(
        v,
        ${rt(e)},
        ${I(e)},
        params.${Ne}${e},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e}
    );
}`}function Na({name:e,channel:t,inputComponents:n,needsDomainMap:r}){if(r){if(n!==1)return`Band scale on "${e}" requires scalar inputs when using an ordinal domain.`;if(A(t)&&typeof t.value==`number`&&!Number.isInteger(t.value))return`Band scale on "${e}" requires integer values when using an ordinal domain.`}return null}function Pa({name:e,scale:t,getDefaultScaleRange:n}){let r=Aa(e,`band`,Array.isArray(t.domain)||ArrayBuffer.isView(t.domain)?t.domain:void 0);if(!r)return;let i=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof i[0]!=`number`||typeof i[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let a=i;return{domain:[0,r.length],range:[a[0]??0,a[1]??1],domainLength:2,rangeLength:2}}function Fa({name:e,domain:t}){let n=Aa(e,`band`,t);return n?{domainMap:n,domainUniform:[0,n.length]}:null}var Ia=ja;function La(e={}){return L(Ia,e)}var Ra=st;function za(e={}){return L(Ra,e)}var Ba={type:`index`,input:`u32`,output:`f32`,params:[{prefix:Ne,defaultValue:0,prop:`paddingInner`},{prefix:Pe,defaultValue:0,prop:`paddingOuter`},{prefix:Fe,defaultValue:.5,prop:`align`},{prefix:Ie,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,allowsPackedScalarInput:!0,wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:()=>({domainLength:3,rangeLength:2}),normalizeStops:Ha,normalizeDomain:Ua,emit:Va};Object.freeze(Ba);function Va({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,inputComponents:i}){let a=i===2?n:at(n,r),o=i===2?`scaleBandHpU`:`scaleBandHp`;return`${nt(e,`f32`,t)} {
    let v = ${a};
    return ${o}(
        v,
        ${it(e)},
        ${I(e)},
        params.${Ne}${e},
        params.${Pe}${e},
        params.${Fe}${e},
        params.${Ie}${e}
    );
}`}function Ha({name:e,scale:t,getDefaultScaleRange:n}){let r=Array.isArray(t.domain)||ArrayBuffer.isView(t.domain)?t.domain:[0,1],i=Array.isArray(t.range)?t.range:n(e)??[0,1];if(typeof i[0]!=`number`||typeof i[1]!=`number`)throw Error(`Scale range for "${e}" must be numeric.`);let a=i;if(r.length===3)return{domain:[r[0],r[1],r[2]],range:[a[0]??0,a[1]??1],domainLength:3,rangeLength:2};if(r.length!==2)throw Error(`Scale domain for "${e}" must have 2 or 3 entries for "${t.type}" scales.`);return{domain:ue(r[0],r[1]),range:[a[0]??0,a[1]??1],domainLength:3,rangeLength:2}}function Ua({name:e,scale:t,domain:n}){if(!Array.isArray(n)&&!ArrayBuffer.isView(n))throw Error(`Scale on "${e}" expects a domain array.`);let r=n;if(r.length===3)return[r[0],r[1],r[2]];if(r.length===2)return ue(r[0],r[1]);throw Error(`Scale domain for "${e}" must have 2 or 3 entries for "${t.type}" scales.`)}var Wa=Ba;function Ga(e={}){return L(Wa,e)}var Ka={type:`log`,input:`numeric`,output:`f32`,params:[{prefix:Ae,defaultValue:10,prop:`base`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Ln],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:qa};Object.freeze(Ka);function qa(e){return ot(e,({name:e,valueExpr:t})=>`scaleLog(${t}, ${rt(e)}, ${I(e)}, params.${Ae}${e})`)}var Ja=Ka;function Ya(e={}){return L(Ja,e)}var Xa={type:`ordinal`,input:`u32`,output:`f32`,params:[],continuous:!1,vectorOutput:`always`,allowsU32InputOverride:!0,resources:{stopKind:null,needsDomainMap:!0,needsOrdinalRange:!0},normalizeDomainMap:$a,validate:Qa,emit:Za};Object.freeze(Xa);function Za({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainMapName:o}){let s=i===1?a:`vec${i}<f32>`,c=`range_${e}`,l=i===1?a===`u32`?`0u`:a===`i32`?`0`:`0.0`:`vec4<f32>(0.0)`,u=at(n,r),d=Ee+e;return o?`${nt(e,s,t)} {
    let raw = ${u};
    let mapCount = u32(params.${d});
    if (mapCount == 0u) {
        let count = u32(params.${we}${e});
        if (count == 0u) { return ${l}; }
        let slot = raw % count;
        return ${c}[slot];
    }
    let idx = ${sn(o)}(raw, arrayLength(&${o}));
    if (idx == HASH_NOT_FOUND) { return ${l}; }
    let count = u32(params.${we}${e});
    if (count == 0u) { return ${l}; }
    let slot = idx % count;
    return ${c}[slot];
}`:`${nt(e,s,t)} {
    let idx = ${u};
    let count = u32(params.${we}${e});
    if (count == 0u) { return ${l}; }
    let slot = idx % count;
    return ${c}[slot];
}`}function Qa({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but ordinal scales only support scalars or vec4 outputs.`;let i=t.scale?.range;if(!Array.isArray(i)||i.length===0)return`Ordinal scale on "${e}" requires a non-empty range.`;if(r!==1)return`Ordinal scale on "${e}" requires scalar input values.`;if(A(t)){if(Array.isArray(t.value))return`Ordinal scale on "${e}" requires scalar integer values.`;if(typeof t.value==`number`&&!Number.isInteger(t.value))return`Ordinal scale on "${e}" requires integer values.`}return null}function $a({name:e,domain:t}){let n=Aa(e,`ordinal`,t);return n?{domainMap:n}:null}var eo=Xa;function to(e={}){return L(eo,e)}var no={type:`pow`,input:`numeric`,output:`f32`,params:[{prefix:je,defaultValue:1,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Ln],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:ro};Object.freeze(no);function ro(e){return ot(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${rt(e)}, ${I(e)}, params.${je}${e})`)}var io=no;function ao(e={}){return L(io,e)}var oo={type:`quantize`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:lo,normalizeStops:uo,validate:co,emit:so};Object.freeze(oo);function so({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,rangeLength:o}){if(o<1)throw Error(`Quantize scale on "${e}" must define at least one range entry.`);let s=i===1?a:`vec${i}<f32>`,c=[];return r!==`f32`&&c.push(Ye(r)),c.push(tt({name:e,rangeLength:o,outputComponents:i,outputScalarType:a})),Je({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:s})}function co({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but quantize scales only support scalars or vec4 outputs.`;if(r!==1)return`Quantize scale on "${e}" requires scalar input values.`;let i=t.scale?.domain;if(Array.isArray(i)&&i.length!==2)return`Quantize scale on "${e}" requires a domain with exactly two entries.`;let a=t.scale?.range;return a!==void 0&&!Array.isArray(a)?`Quantize scale on "${e}" requires an explicit array range.`:Array.isArray(a)&&a.length<1?`Quantize scale on "${e}" requires at least one range entry.`:null}function lo({scale:e}){let t=Array.isArray(e.range)?e.range:[0,1];if(t.length<1)throw Error(`Quantize scale on "${e.type}" requires at least one range entry.`);return{domainLength:2,rangeLength:t.length}}function uo({name:e,scale:t,channel:n,getDefaultScaleRange:r}){let i=Array.isArray(t.domain)?t.domain:[0,1];if(i.length!==2)throw Error(`Quantize scale on "${e}" requires a domain with exactly two entries.`);if(jt(t.range))throw Error(`Quantize scale on "${e}" does not support interpolator ranges.`);let a=n.components??1,o=Array.isArray(t.range)?t.range:r(e)??[0,1];if(!Array.isArray(o)||o.length<1)throw Error(`Quantize scale on "${e}" requires at least one range entry.`);let s=o.map(t=>Dt(e,t,a,`Quantize`));return{domain:[i[0]??0,i[1]??1],range:s,domainLength:2,rangeLength:s.length}}var fo=oo;function po(e={}){return L(fo,e)}var mo={type:`sqrt`,input:`numeric`,output:`f32`,params:[{prefix:je,defaultValue:.5,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[no],resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:ho};Object.freeze(mo);function ho(e){return ot(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${rt(e)}, ${I(e)}, params.${je}${e})`)}var go=mo;function _o(e={}){return L(go,e)}var vo={type:`symlog`,input:`numeric`,output:`f32`,params:[{prefix:Me,defaultValue:1,prop:`constant`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Ln],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:yo};Object.freeze(vo);function yo(e){return ot(e,({name:e,valueExpr:t})=>`scaleSymlog(${t}, ${rt(e)}, ${I(e)}, params.${Me}${e})`)}var bo=vo;function xo(e={}){return L(bo,e)}var So={type:`threshold`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,allowsF32InputOverride:!0,resources:{stopKind:`threshold`,needsDomainMap:!1,needsOrdinalRange:!1},validate:wo,emit:Co};Object.freeze(So);function Co({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainLength:o,rangeLength:s}){if(o<1||s!==o+1)throw Error(`Threshold scale on "${e}" requires domain length N and range length N+1.`);let c=i===1?a:`vec${i}<f32>`,l=[];return r!==`f32`&&l.push(Ye(r)),l.push(et({name:e,domainLength:o,outputComponents:i,outputScalarType:a})),Je({name:e,functionName:t,rawValueExpr:n,steps:l,returnType:c})}function wo({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but threshold scales only support scalars or vec4 outputs.`;let i=t.scale?.domain,a=t.scale?.range;return!Array.isArray(i)||i.length===0?`Threshold scale on "${e}" requires a non-empty domain.`:!Array.isArray(a)||a.length<2?`Threshold scale on "${e}" requires at least two range entries.`:a.length===i.length+1?r===1?null:`Threshold scale on "${e}" requires scalar input values.`:`Threshold scale on "${e}" requires range length of ${i.length+1}, got ${a.length}.`}var To=So;function Eo(e={}){return L(To,e)}var Do=[`circle`,`square`,`cross`,`diamond`,`triangle-up`,`triangle-right`,`triangle-down`,`triangle-left`,`tick-up`,`tick-right`,`tick-down`,`tick-left`,`x`,`+`],Oo=new Map([[`left`,0],[`center`,1],[`right`,2]]),ko=new Map([[`alphabetic`,0],[`baseline`,0],[`middle`,1],[`top`,2],[`bottom`,3]]),Ao=new Map([[`butt`,0],[`square`,1],[`round`,2]]),jo=new Map(Object.entries(Zi)),Mo=new Map([`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`].map((e,t)=>[e,t])),No=[`viewportEdgeFadeWidthTop`,`viewportEdgeFadeWidthRight`,`viewportEdgeFadeWidthBottom`,`viewportEdgeFadeWidthLeft`],Po=[`viewportEdgeFadeDistanceTop`,`viewportEdgeFadeDistanceRight`,`viewportEdgeFadeDistanceBottom`,`viewportEdgeFadeDistanceLeft`],Fo=new WeakMap,Io=new WeakMap;function Lo(e,t,n,r=1,i,a){Vo(e);let o=typeof r==`function`?r:()=>r,s=i??S(e,t);if(s.length==0)return;let c=e.encoders.facetIndex?{data:Uo(e,s),type:`u32`}:a,l=e.getType();if(l==`point`)return Ro(ai,Ho(Jo(e,s,n,o),c),e);if(l==`rect`)return Ro(hi,Ho(qo(e,s,n,o,typeof r!=`function`),c),e);if(l==`rule`||l==`tick`)return Ro(Ti,Ho(Qo(e,s,n,o),c),e);if(l==`text`)return Ro(ka,Ho($o(e,s,n,o),c),e);if(l==`link`)return Ro(Ri,Ho(es(e,s,n,o),c),e);if(l==`arrow`)return Ro(Qi,Ho(ts(e,s,n,o),c),e);throw X(e,`Mark type "${l}" is not supported.`)}function Ro(e,t,n){let r=n.getOrder?.();r&&(t.order={when:Ko(n,r.predicate.selection),matching:r.passes[0]===`matching`?`first`:`last`});let i=t.retainedProperties??{};return delete t.retainedProperties,{definition:e,config:t,properties:i}}function zo(e){return Vo(e),e.getRenderingRevision(`configuration`)}function Bo(e){return Vo(e),e.getRenderingRevision(`resources`)}function Vo(e){e.initializeRenderingRevisions([])}function Ho(e,t){return t?{...e,placementIndex:t}:e}function Uo(e,t){let n=e.encoders.facetIndex,r=Io.get(e);if(r?.data===t&&r.encoder===n)return r.values;let i=new Uint32Array(t.length);for(let r=0;r<t.length;r++){let a=Number(n(t[r]));if(!Number.isInteger(a)||a<0||a>4294967295)throw X(e,`Facet indices must be non-negative integers.`);i[r]=a}return Io.set(e,{data:t,encoder:n,values:i}),i}function Wo(e,t,n,r){let i=Os(e,t),a=i.branches,o=a.at(-1);if(!o)throw X(e,`Channel "${t}" has no fallback branch.`);let s=r(Go(e,i,o),o);return a.length==1||(s.conditions=a.slice(0,-1).map(t=>{let n=r(Go(e,i,t),t);return{when:Ko(e,t.predicate.selection),channel:n}})),s}function Go(e,t,n){let r=n.accessor,i=r.scaleChannel?e.unitView.getScaleResolution(r.scaleChannel)?.getScale():t.scale;if(r.scaleChannel&&!i)throw X(e,`Missing scale for conditional channel "${r.channel}".`);return Object.assign(e=>r(e),{constant:r.constant??t.constant,branches:[n],scale:i,channelDef:r.channelDef??t.channelDef})}function Ko(e,t){if(`all`in t)return{all:t.all.map(t=>Ko(e,t))};if(`any`in t)return{any:t.any.map(t=>Ko(e,t))};if(`not`in t)return{not:Ko(e,t.not)};if(`selectionActive`in t){let{param:e,type:n,components:r}=t.selectionActive;return{selectionActive:n===`interval`?{selection:e,type:n,components:r}:{selection:e,type:n}}}return t.type===`interval`?{selection:t.param,type:`interval`,projections:t.projections.map(({component:e,input:t,secondaryInput:n,hitTest:r})=>({component:e,input:t,secondaryInput:n,hitTest:r})),empty:t.empty}:{selection:t.param,type:t.type,empty:t.empty}}function qo(e,t,n,r,i){return e.initializeRenderingRevisions([`cornerRadius`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`minWidth`,`minHeight`,`minOpacity`,`shadowOffsetX`,`shadowOffsetY`,`shadowBlur`,`shadowOpacity`,`shadowColor`,`hatch`]),{count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n),x2:V(e,`x2`,t,n),y:V(e,`y`,t,n),y2:V(e,`y2`,t,n),xOffset:H(e,`xOffset`,t),x2Offset:H(e,`x2Offset`,t),yOffset:H(e,`yOffset`,t),y2Offset:H(e,`y2Offset`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:U(e,`fillOpacity`,t,r),strokeOpacity:U(e,`strokeOpacity`,t,r),strokeWidth:H(e,`strokeWidth`,t,!0),cornerRadiusTopRight:Hs(e,[`cornerRadius`,`cornerRadiusTopRight`],()=>Bs(e).topRight),cornerRadiusBottomRight:Hs(e,[`cornerRadius`,`cornerRadiusBottomRight`],()=>Bs(e).bottomRight),cornerRadiusTopLeft:Hs(e,[`cornerRadius`,`cornerRadiusTopLeft`],()=>Bs(e).topLeft),cornerRadiusBottomLeft:Hs(e,[`cornerRadius`,`cornerRadiusBottomLeft`],()=>Bs(e).bottomLeft),minWidth:Y(()=>K(e,`minWidth`)),minHeight:Y(()=>K(e,`minHeight`)),minOpacity:Y(()=>K(e,`minOpacity`)),shadowOffsetX:Y(()=>q(e,`shadowOffsetX`,0)),shadowOffsetY:Y(()=>q(e,`shadowOffsetY`,0)),shadowBlur:Y(()=>q(e,`shadowBlur`,0)),shadowOpacity:Hs(e,[`shadowOpacity`],()=>q(e,`shadowOpacity`,0)*r(),void 0,!i),shadowColor:Y(()=>qs(e,J(e,`shadowColor`)??`black`)),hatchPattern:Hs(e,[`hatch`],()=>Vs(e,`hatch`,Mo,`none`),`u32`)}}}function Jo(e,t,n,r){e.initializeRenderingRevisions([`fillGradientStrength`,`inwardStroke`,`semanticZoomFraction`]);let i=Xo(e,t),a=Yo(e,t);return{...a.config,count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n),y:V(e,`y`,t,n),size:H(e,`size`,t),...a.channel,strokeWidth:H(e,`strokeWidth`,t),xOffset:H(e,`xOffset`,t),yOffset:H(e,`yOffset`,t),dx:gs(e,`x`,t),dy:gs(e,`y`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:U(e,`fillOpacity`,t,r),strokeOpacity:U(e,`strokeOpacity`,t,r),angle:H(e,`angle`,t),gradientStrength:Y(()=>K(e,`fillGradientStrength`)),inwardStroke:Y(()=>+!!J(e,`inwardStroke`),`u32`)},...i}}function Yo(e,t){let n=e.encoders.shape;if(n.constant)return{config:{shape:String(n(t[0]))},channel:{}};let r=Array.from(Do),i=new Set(r),a=e=>{let t=String(e);i.has(t)||(i.add(t),r.push(t))};for(let e of n.branches)if(n.scale)for(let e of n.scale.range())a(e);else for(let n of t)a(e.accessor(n));let o=new Map(r.map((e,t)=>[e,t]));return{config:{shapes:r},channel:{shape:ls(e,`shape`,t,o)}}}function Xo(e,t){let n=e.encoders.semanticScore;if(!n||(ks(e,`semanticScore`,n),n.constant))return{};let r=n.branches[0].accessor,i=As(e,`semanticScore`,t,r),a=Zo(e),o={compare:`>=`,left:{input:`semanticScoreInput`},right:{slot:`semanticThreshold`}},s=a.length>0?{any:[...a,o]}:o;return{inputs:{semanticScoreInput:{data:i,type:`f32`}},scalarSlots:{semanticThreshold:Us(()=>e.getSemanticThreshold(),`f32`)},visibleWhen:s}}function Zo(n){return n.encoders.uniqueId?e(n.encoders).map(e=>Ko(n,t(e))):[]}function Qo(e,t,n,r){e.initializeRenderingRevisions([`minLength`,`strokeCap`,`strokeDashOffset`]);let i=J(e,`strokeDash`);return{count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n),x2:V(e,`x2`,t,n),y:V(e,`y`,t,n),y2:V(e,`y2`,t,n),xOffset:H(e,`xOffset`,t),x2Offset:H(e,`x2Offset`,t),yOffset:H(e,`yOffset`,t),y2Offset:H(e,`y2Offset`,t),size:H(e,`size`,t),color:W(e,`color`,t),opacity:U(e,`opacity`,t,r),minLength:Y(()=>K(e,`minLength`)),strokeCap:Y(()=>Vs(e,`strokeCap`,Ao),`u32`),strokeDashOffset:Y(()=>K(e,`strokeDashOffset`)),strokeDash:{value:0,type:`u32`}},dashPatterns:i==null?null:[i]}}function $o(e,t,n,r){let i=_s(e,`size`,t[0]),a=e.encoders,o=e.unitView.context.textMetrics,s=e.properties,c=o.getPreparedFont(s);if(!c)throw X(e,`Outline font is not prepared.`);return{count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n,ys),...e.encoders.x2?{x2:V(e,`x2`,t,n,ys)}:{},y:V(e,`y`,t,n,ys),...e.encoders.y2?{y2:V(e,`y2`,t,n,ys)}:{},text:hs(e,t),size:H(e,`size`,t),angle:H(e,`angle`,t),xOffset:H(e,`xOffset`,t),yOffset:H(e,`yOffset`,t),dx:gs(e,`x`,t),dy:gs(e,`y`,t),...a.x2Offset?{x2Offset:H(e,`x2Offset`,t)}:{},...a.y2Offset?{y2Offset:H(e,`y2Offset`,t)}:{},align:{value:Vs(e,`align`,Oo),type:`u32`},baseline:{value:Vs(e,`baseline`,ko),type:`u32`},fill:W(e,`color`,t),opacity:U(e,`opacity`,t,r)},font:c,fontStyle:J(e,`fontStyle`),fontWeight:J(e,`fontWeight`),fontSize:i,viewport:[n.x,n.y,n.x2,n.y2],viewportEdgeFadeWidth:Ls(e,No,[0,0,0,0]),viewportEdgeFadeDistance:Ls(e,Po,[-1/0,-1/0,-1/0,-1/0]),paddingX:K(e,`paddingX`),paddingY:K(e,`paddingY`),flushX:!!J(e,`flushX`),flushY:!!J(e,`flushY`),squeeze:!!J(e,`squeeze`),logoLetters:!!J(e,`logoLetters`),retainedProperties:{viewport:Ws(()=>[n.x,n.y,n.x2,n.y2]),...Ks(e,`viewportEdgeFadeWidth`,No,[0,0,0,0]),...Ks(e,`viewportEdgeFadeDistance`,Po,[-1/0,-1/0,-1/0,-1/0]),...Gs(e,{paddingX:e=>e,paddingY:e=>e,flushX:e=>!!e,flushY:e=>!!e,squeeze:e=>!!e,logoLetters:e=>!!e})}}}function es(e,t,n,r){return{count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n),x2:V(e,`x2`,t,n),y:V(e,`y`,t,n),y2:V(e,`y2`,t,n),xOffset:H(e,`xOffset`,t),x2Offset:H(e,`x2Offset`,t),yOffset:H(e,`yOffset`,t),y2Offset:H(e,`y2Offset`,t),size:H(e,`size`,t),color:W(e,`color`,t),opacity:U(e,`opacity`,t,r)},linkShape:J(e,`linkShape`)??`arc`,orient:J(e,`orient`)??`vertical`,arcFadingDistance:zs(e,`arcFadingDistance`),noFadingOnSecondPass:!!J(e,`noFadingOnSecondPass`),arcHeightFactor:q(e,`arcHeightFactor`,1),minArcHeight:q(e,`minArcHeight`,1.5),clampApex:!!J(e,`clampApex`),maxChordLength:q(e,`maxChordLength`,5e4),segments:q(e,`segments`,101),retainedProperties:Gs(e,{arcFadingDistance:e=>e||[0,0],noFadingOnSecondPass:e=>!!e,arcHeightFactor:e=>e,minArcHeight:e=>e,linkShape:e=>e??`arc`,orient:e=>e??`vertical`,clampApex:e=>!!e,maxChordLength:e=>e,segments:e=>e})}}function ts(e,t,n,r){let i=q(e,`headAngle`,45),a=q(e,`headNotchAngle`,90);return{count:t.length,channels:{...Es(e,t),x:V(e,`x`,t,n),x2:V(e,`x2`,t,n),y:V(e,`y`,t,n),y2:V(e,`y2`,t,n),xOffset:H(e,`xOffset`,t),x2Offset:H(e,`x2Offset`,t),yOffset:H(e,`yOffset`,t),y2Offset:H(e,`y2Offset`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:U(e,`fillOpacity`,t,r),strokeOpacity:U(e,`strokeOpacity`,t,r),strokeWidth:H(e,`strokeWidth`,t),size:H(e,`size`,t),direction:ls(e,`direction`,t,jo)},headAngle:i,headNotchAngle:a,minSize:q(e,`minSize`,1),headWidth:q(e,`headWidth`,3),startNotch:!!J(e,`startNotch`),minStemLength:q(e,`minStemLength`,0),headSpacing:Rs(e,`headSpacing`),stem:J(e,`stem`)!==!1,headShape:J(e,`headShape`)??`triangle`,headPlacement:J(e,`headPlacement`)??`inside`,retainedProperties:Gs(e,{headAngle:e=>e,headNotchAngle:e=>e,minSize:e=>e,headWidth:e=>e,startNotch:e=>!!e,minStemLength:e=>e,headSpacing:e=>e,stem:e=>e!==!1,headShape:e=>e??`triangle`,headPlacement:e=>e??`inside`})}}function V(e,t,n,r,i=vs){return Wo(e,t,n,a=>ns(e,t,n,r,a,i))}function ns(e,t,n,i,a,o){let s=a.branches[0].accessor,c=r(a.channelDef)?void 0:a.scale,l=o(t,i,c),u=a.channelDef.band??.5;if(c?.type==`band`||c?.type==`point`||c?.type==`ordinal`){let{intern:r,readDomain:d}=Fs(e,t,c),f=a.constant?Y(()=>r(s(n[0])),`u32`):{data:Is(e,t,n,s,()=>Uint32Array.from(n,e=>r(s(e)))),type:`u32`};return Object.assign(f,{scale:c.type==`ordinal`?is(c,o(t,i,void 0),d):rs(c,l,d,u)})}else if(c?.type==`index`||c?.type==`locus`){let r=p(c.domain().map(Number)),i=a.constant?Ns(e,t,()=>s(n[0]),r):{data:js(e,t,n,s,r),type:`u32`};return Object.assign(i,{...r?{inputComponents:2}:{},scale:as(c,l,u)})}let d=a.constant?Y(()=>{let r=Number(s(n[0]));if(!Number.isFinite(r))throw X(e,`Channel "${t}" is not finite.`);return r},`f32`):{data:As(e,t,n,s),type:`f32`};return Object.assign(d,{scale:bs(e,t,c,l)})}function rs(e,t,n,r){let i=e;return G(La({domain:n(),range:t,paddingInner:e.type==`point`?1:i.paddingInner(),paddingOuter:i.paddingOuter(),align:i.align(),band:r}),n)}function is(e,t,n){let r=()=>e.range().map(e=>t[0]+Number(e)*(t[1]-t[0]));return G(to({domain:n(),range:r()}),n,r)}function as(e,t,n){let r=e;return G(Ga({domain:e.domain().map(Number),range:t,paddingInner:r.paddingInner(),paddingOuter:r.paddingOuter(),align:r.align(),band:n}),()=>e.domain().map(Number))}function H(e,t,n,r=!1){return Wo(e,t,n,i=>r&&os(i)?{value:Number(i(n[0]))}:ss(e,t,n,i))}function os(e){let t=e.channelDef;return e.constant&&!e.scale&&(r(t)&&!a(t.value)||u(t)&&!a(t.datum))}function ss(e,t,n,r){if(r.constant)return Y(()=>Number(r(n[0])));let i=r.branches[0].accessor;if(r.scale?.type==`ordinal`||r.scale?.type==`band`||r.scale?.type==`point`){let{values:a,readDomain:o}=Ps(e,t,n,i,r.scale);return{data:a,type:`u32`,scale:r.scale.type==`ordinal`?xs(e,t,r.scale,1,o):rs(r.scale,r.scale.range(),o,r.channelDef.band??.5)}}let a={data:As(e,t,n,i),type:`f32`},o=xs(e,t,r.scale);return o?{...a,scale:o}:a}function U(e,t,n,r){return Wo(e,t,n,i=>cs(e,t,n,r,i))}function cs(e,t,n,r,i){if(i.constant)return Y(()=>Number(i(n[0]))*r());let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=Ps(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:xs(e,t,i.scale,r,s)}}let o=i.scale?.type==`identity`?void 0:xs(e,t,i.scale,r);return o?{data:As(e,t,n,a),type:`f32`,scale:o}:{data:As(e,t,n,a),type:`f32`,scale:G(R({domain:[0,1],range:[0,r()]}),void 0,()=>[0,r()])}}function ls(e,t,n,r){return Wo(e,t,n,i=>us(e,t,n,r,i))}function us(e,t,n,r,i){if(i.constant)return Y(()=>ws(e,t,r,i(n[0])),`u32`);let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=Ps(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:G(to({domain:s(),range:i.scale.range().map(n=>ws(e,t,r,n))}),s,()=>i.scale.range().map(n=>ws(e,t,r,n)))}}return i.scale?.type==`threshold`?{data:As(e,t,n,a),type:`f32`,scale:G(Eo({domain:i.scale.domain().map(Number),range:Ts(e,t,r,i.scale)}),()=>i.scale.domain().map(Number),()=>Ts(e,t,r,i.scale))}:{data:Is(e,t,n,a,()=>Uint32Array.from(n,n=>ws(e,t,r,a(n)))),type:`u32`}}function W(e,t,n){return Wo(e,t,n,r=>ds(e,t,n,r))}function ds(e,t,n,r){if(r.constant)return Y(()=>qs(e,r(n[0])));let i=r.branches[0].accessor,a=r.scale;if(!a)return{data:Is(e,t,n,i,()=>{let t=new Float32Array(n.length*4);return n.forEach((n,r)=>{t.set(qs(e,i(n)),r*4)}),t}),type:`f32`,inputComponents:4};if(a.type==`ordinal`){let{values:r,readDomain:o}=Ps(e,t,n,i,a);return{data:r,type:`u32`,inputComponents:1,scale:fs(e,t,a,o)}}return{data:As(e,t,n,i),type:`f32`,inputComponents:1,scale:fs(e,t,a)}}function fs(e,t,n,r){let i=n;if(n.type==`ordinal`)return G(to({domain:r?.(),range:n.range()}),r,()=>n.range());if(n.type==`sequential-linear`||n.type==`diverging-linear`)return G(R({domain:ms(n),range:i.interpolator(),clamp:i.clamp()}),()=>ms(n),()=>i.interpolator());if(n.type==`sequential-log`)return G(Ya({domain:ms(n),range:i.interpolator(),base:i.base(),clamp:i.clamp()}),()=>ms(n),()=>i.interpolator());if(n.type==`linear`)return G(R({domain:n.domain().map(Number),range:n.range(),interpolate:i.interpolate(),clamp:i.clamp()}),()=>n.domain().map(Number),()=>n.range());if(n.type==`threshold`)return G(Eo({domain:n.domain().map(Number),range:ps(e,n.range())}),()=>n.domain().map(Number),()=>ps(e,n.range()));if(n.type==`quantize`)return G(po({domain:n.domain().map(Number),range:ps(e,n.range())}),()=>n.domain().map(Number),()=>ps(e,n.range()));throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}function ps(e,t){return t.map(t=>typeof t==`string`?qs(e,t):t)}function ms(e){let t=e.domain().map(Number);return[t[0],t.at(-1)]}function hs(e,t){let n=Os(e,`text`);ks(e,`text`,n);let r=n.channelDef,i=`format`in r?c(r.format):e=>e,a=e=>{let t=i(n(e));return t==null?``:String(t)};return n.constant?{value:a(t[0])}:{data:Is(e,`text`,t,n.branches[0].accessor,()=>t.map(a))}}function gs(e,t,n){let r=t==`x`?`dx`:`dy`,i=e.encoders[r];if(!i)return Y(()=>K(e,r));ks(e,r,i);let a=Go(e,i,i.branches[0]),o=e=>Number(a(e));return a.constant?Y(()=>o(n[0])):{data:Float32Array.from(n,o),type:`f32`}}function _s(e,t,n){let r=Os(e,t),i=Number(r(n));if(!Number.isFinite(i))throw X(e,`Channel "${t}" is not finite.`);return i}function vs(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.x2,t.x]:[t.x,t.x2]:r?[t.y,t.y2]:[t.y2,t.y]}function ys(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.width,0]:[0,t.width]:r?[0,t.height]:[t.height,0]}function bs(e,t,n,r){return!n||n.type==`null`?R({domain:[0,1],range:r}):Ss(e,t,n,r)}function xs(e,t,n,r=1,i){if(!n||n.type==`null`)return;if(n.type==`identity`)return za();let a=typeof r==`function`?r:()=>r;return Ss(e,t,n,()=>n.range().map(e=>Number(e)*a()),i)}function Ss(e,t,n,r,i){let a=n,o=typeof i==`function`?i:i?()=>i:()=>n.domain().map(Number),s=typeof r==`function`?r:()=>r,c={domain:o(),range:s(),clamp:Cs(a,`clamp`,!1)};Cs(a,`round`,!1)&&(c.round=!0);let l;switch(n.type){case`linear`:case`sequential-linear`:case`diverging-linear`:l=R(c);break;case`log`:l=Ya({...c,base:Cs(a,`base`,10)});break;case`pow`:l=ao({...c,exponent:Cs(a,`exponent`,1)});break;case`sqrt`:l=_o(c);break;case`symlog`:l=xo({...c,constant:Cs(a,`constant`,1)});break;case`quantize`:l=po(c);break;case`threshold`:l=Eo(c);break;case`ordinal`:l=to(c);break;default:throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}return G(l,o,s)}function G(e,t,n){return Object.defineProperties(e,{...t?{domain:{enumerable:!0,get:t}}:{},...n?{range:{enumerable:!0,get:n}}:{}}),e}function Cs(e,t,n){let r=e[t];return typeof r==`function`?r():r??n}function ws(e,t,n,r){let i=n.get(String(r));if(i===void 0)throw X(e,`Unsupported ${t}: ${String(r)}`);return i}function Ts(e,t,n,r){let i=r.domain(),a=r.range().map(r=>ws(e,t,n,r));for(;a.length<i.length+1;)a.push(a.at(-1));return a}function Es(e,t){let n=e.encoders.uniqueId;if(!n)return{};if(ks(e,`uniqueId`,n),n.constant)return{uniqueId:Y(()=>Ds(e,`uniqueId`,n(t[0])),`u32`)};let r=n.branches[0].accessor;return{uniqueId:{data:Is(e,`uniqueId`,t,r,()=>Uint32Array.from(t,t=>Ds(e,`uniqueId`,r(t)))),type:`u32`}}}function Ds(e,t,n){let r=Number(n);if(!Number.isSafeInteger(r)||r<0||r>4294967295)throw X(e,`Channel "${t}" must contain u32 integers.`);return r}function Os(e,t){let n=e.encoders[t];if(!n)throw X(e,`Missing encoder for channel "${t}".`);return n}function ks(e,t,n){if(n.branches.length!=1)throw X(e,`Conditional channel "${t}" is not supported.`)}function As(e,t,n,r){return Is(e,t,n,r,()=>Float32Array.from(n,n=>{let i=Number(r(n));if(!Number.isFinite(i)&&!Number.isNaN(i))throw X(e,`Channel "${t}" contains an infinite value.`);return i}))}function js(e,t,n,r,i){return Is(e,`${t}:${i?`large`:`regular`}`,n,r,()=>{let a=Array.from(n,n=>Ms(e,t,r(n)));return i?ce(a):Uint32Array.from(a)})}function Ms(e,t,n){let r=Math.floor(Number(n));if(!Number.isSafeInteger(r)||r<0)throw X(e,`Channel "${t}" must contain finite non-negative values within the safe integer range.`);return r}function Ns(e,t,n,r){if(!r)return Y(()=>Ms(e,t,n()),`u32`);let i=[0],a=new Uint32Array(2),o=[0,0];return Y(()=>(i[0]=Ms(e,t,n()),le(i,a),o[0]=a[0],o[1]=a[1],o),`u32`)}function Ps(e,t,n,r,i){let{intern:a,readDomain:o}=Fs(e,t,i);return{values:Is(e,t,n,r,()=>Uint32Array.from(n,e=>a(r(e)))),readDomain:o}}function Fs(e,t,n){let r=n.props?.domainIndexer,i=n=>Ds(e,t,r?r(n):n);return{intern:i,readDomain:()=>n.domain().map(i)}}function Is(e,t,n,r,i){if(!(`field`in r.channelDef))return i();let a=Fo.get(e);(!a||a.data!==n)&&(a={data:n,channels:new Map},Fo.set(e,a));let o=a.channels.get(t);if(o?.accessor===r)return o.series;let s=i();return a.channels.set(t,{accessor:r,series:s}),s}function K(e,t){let n=J(e,t);if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function Ls(e,t,n){return t.map((t,r)=>q(e,t,n[r]))}function q(e,t,n){let r=J(e,t)??n;if(typeof r!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return r}function Rs(e,t){let n=J(e,t);if(n==null)return null;if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function zs(e,t){let n=J(e,t);if(n==null||n===!1)return[0,0];if(!Array.isArray(n)||n.length!=2||!n.every(e=>typeof e==`number`))throw X(e,`Property "${t}" must be a pair.`);return n}function Bs(e){let t=K(e,`cornerRadius`);return{topRight:q(e,`cornerRadiusTopRight`,t),bottomRight:q(e,`cornerRadiusBottomRight`,t),topLeft:q(e,`cornerRadiusTopLeft`,t),bottomLeft:q(e,`cornerRadiusBottomLeft`,t)}}function Vs(e,t,n,r){let i=String(J(e,t)??r),a=n.get(i);if(a===void 0)throw X(e,`Unsupported ${t}: ${i}`);return a}function J(e,t){let n=e.properties[t];return x(e,n)}function Y(e,t){return Object.assign(Us(e,t),{dynamic:!0})}function Hs(e,t,n,r,i=!1){let o=e.properties;return i||t.some(e=>a(o[e]))?Y(n,r):{value:n(),...r?{type:r}:{}}}function Us(e,t){return{get value(){return e()},...t?{type:t}:{}}}function Ws(e){return{get value(){return e()}}}function Gs(e,t){e.initializeRenderingRevisions(Object.keys(t));let n={};for(let[r,i]of Object.entries(t)){let t=e.properties[r];a(t)&&(n[r]=Ws(()=>i(J(e,r))))}return n}function Ks(e,t,n,r){let i=e.properties,o=n.filter(e=>a(i[e]));return e.initializeRenderingRevisions(o),o.length==0?{}:{[t]:Ws(()=>Ls(e,n,r))}}function qs(e,t){if(t==null)return[0,0,0,0];let n=o(String(t));if(!n)throw X(e,`Invalid color: ${String(t)}`);let r=n.rgb();return[r.r/255,r.g/255,r.b/255,r.opacity]}function X(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var Js=new WeakMap;function Ys(e,t){let n=e.unitView.getCollector();if(!n)throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);let r=t?.getSnapshot().topology,i=e.encoders?.x,a=e.encoders?.x2,o=i?e.unitView.getScaleResolution(`x`):void 0,s=o?.zoomExtent,c=Js.get(e);if(c?.collector===n&&c.revision===n.dataRevision&&c.topology===r&&c.xEncoder===i&&c.x2Encoder===a&&c.xScaleResolution===o&&c.xIndexDomainStart===s?.[0]&&c.xIndexDomainEnd===s?.[1])return c;let l=n.facetBatches.get(void 0),u=T(e),d=new Map,f,p;if(l?.length)p=l,d.set(l,Xs(u,p,0));else{let e=r?r.facetIds.map(e=>e?n.facetBatches.get(e)??[]:[]):Array.from(n.facetBatches.values());p=Array(e.reduce((e,t)=>e+t.length,0)),r&&(f=[]);let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=Xs(u,r,t);f?.push(i),d.set(r,i);for(let e of r)p[t++]=e}}let m={collector:n,revision:n.dataRevision,topology:r,xEncoder:i,x2Encoder:a,xScaleResolution:o,xIndexDomainStart:s?.[0],xIndexDomainEnd:s?.[1],xIndexSpec:u,data:p,ranges:d,placementRanges:f};return Js.set(e,m),m}function Xs(e,t,n){let r={firstInstance:n,instanceCount:t.length};if(!e||!t.length)return r;b(`webgpuXIndexBuilds`);let i=D(e,t,n);return i?(r.xIndex=i,r):(b(`webgpuXIndexRejectedBuilds`),r)}function Zs(e,t,n){let r=t.placement?.index;return(r===void 0?void 0:n.placementRanges?.[r])??n.ranges.get(S(e,t))??{firstInstance:0,instanceCount:0}}var Qs=class extends g{#e=[];#t=new Set;#n=new Map;#r=[];#i=[];#a=0;#o=!1;#s;#c;constructor(e){if(super({}),this.surface=e.surface,e.target)this.#c=e.target;else{let t=e.surface.getLogicalCanvasSize();this.#c={width:t.width,height:t.height,dpr:e.surface.getDevicePixelRatio()}}this.#s=e.markPredicate}getDevicePixelRatio(){return this.#c.dpr}beginSampleFacetBatch(){if(this.#a)throw Error(`Nested sample facet batches are not supported.`);this.#a++,this.#r.push({type:`beginSampleFacetBatch`})}endSampleFacetBatch(){if(!this.#a)throw Error(`Unbalanced sample facet batch scope.`);this.#a--,this.#r.push({type:`endSampleFacetBatch`})}pushView(e,t){this.#t.add(e),this.#e.push({view:e,coords:t}),this.#r.push({type:`pushView`,view:e,coords:[t],localOpacity:!1,clipX:!1,clipY:!1,bounds:oc()})}popView(e){if(this.#e.pop()?.view!==e)throw Error(`Unbalanced WebGPU view rendering context stack.`);this.#r.push({type:`popView`})}renderMark(e,t){if(this.#o)throw Error(`Cannot collect WebGPU marks after finishing.`);if(this.#s&&!this.#s(e))return;let n=this.currentCoords,r=n.translate(ne,ne),i=this.#n.get(e);i||(i={mark:e,occurrences:[],packed:void 0,source:void 0,generatedSource:!1,facetIndexed:e.encoders.facetIndex!==void 0,xQueryDomain:[0,0],xIndexedRange:[0,0],xQueryEnabled:!1,updated:!1,active:!1,ownerCoords:void 0,definition:void 0,config:void 0,properties:void 0,configRevision:-1,resourceRevision:-1,resourcesDirty:!0,configX:NaN,configY:NaN,configWidth:NaN,configHeight:NaN,viewport:void 0,generatedRectangles:void 0},this.#n.set(e,i));let a=l(t),o={state:i,options:t,coords:n,markCoords:r,clip:d(a,e.properties.clip,n),cullClip:a,cull:e.properties.cullByVisibleRange,range:{firstInstance:0,instanceCount:0},placementIndex:i.occurrences.length,draw:void 0};i.occurrences.push(o),this.#r.push({type:`occurrence`,occurrence:o}),b(`markOccurrences`)}finish(){if(this.#o)throw Error(`The WebGPU rendering context is already finished.`);if(this.#e.length)throw Error(`Cannot finish with an open WebGPU view scope.`);if(this.#a)throw Error(`Cannot finish with an open sample facet batch.`);this.#o=!0;let e=h.create(0,0,this.#c.width,this.#c.height);for(let t of this.#n.values())this.#f(t,e);this.#i=$s(this.#r),this.#u()}render(){return this.#l(!1)}renderPicking(){return this.#l(!0)}#l(e){if(!this.#o)throw Error(`Cannot render an unfinished WebGPU frame plan.`);for(let e of this.#t)y(`onBeforeRender`,()=>e.onBeforeRender()),b(`viewsVisited`);e||this.#d();let t=this.#c;for(let n of this.#n.values())n.updated=!1,n.active=!1,this.#p(n,e,t);let n=[],r=[],i=n,a=0,o=0,s=0;for(let n of e?this.#r:this.#i)if(n.type===`occurrence`){let r=this.#h(n.occurrence,e,t,i);r!==void 0&&(a++,o+=+(r>0),s+=r)}else if(n.type===`pushView`)if(e)r.push(void 0);else{let e=ac(n);i.push(e),r.push(i),i=e.items}else if(n.type===`popView`){let e=r.pop();e&&(i=e)}return b(`retainedMarkSyncChecks`,a),b(`retainedMarkSyncChanges`,o),b(`retainedResourceWrites`,s),n}#u(){let e,t=``;for(let n of this.#i)if(n.type===`pushView`){n.view!==e&&(e=n.view,t=n.view.getPathString()),n.label=t;let r=i(n.view);n.localOpacity=n.view.hasLocalOpacity(),n.clipX=r.clipX,n.clipY=r.clipY}}#d(){for(let e of this.#i)e.type===`pushView`&&pc(e,this.#c)}#f(e,t){let n=new Set(e.occurrences.map(t=>{let n=t.options.placement;return e.facetIndexed||n?.index!==void 0?n?.source:void 0}).filter(Boolean));if(n.size>1)throw mc(e.mark,`One logical mark cannot use several placement sources.`);let r=n.values().next().value;if(e.generatedSource=!r&&e.occurrences.length>1,e.generatedSource){let n=e.generatedRectangles=new Float32Array(e.occurrences.length*4);dc(e,t,n),e.source=this.surface.updateOccurrencePlacements(e.mark,n),e.ownerCoords=t}else e.source=r,e.ownerCoords=e.occurrences[0].markCoords;if(e.facetIndexed&&!e.source)throw mc(e.mark,`Indexed placement requires a placement source.`);e.source&&(e.viewport=oc());for(let t of e.occurrences)t.draw=sc(t,e);this.#m(e)}#p(e,t,n){if(e.generatedRectangles&&(dc(e,n,e.generatedRectangles),this.surface.updateOccurrencePlacements(e.mark,e.generatedRectangles)),e.viewport&&uc(e.viewport,e.ownerCoords),e.mark.unitView.getEffectiveOpacity()<=0||t&&!e.mark.isPickingParticipant())return;this.#m(e);let r=Ys(e.mark,e.facetIndexed||!e.generatedSource?e.source:void 0);if(!r.data.length)return;e.xQueryEnabled=!e.facetIndexed&&!!r.xIndexSpec&&E(r.xIndexSpec,e.xQueryDomain),e.xQueryEnabled||b(`webgpuXIndexFallbackQueries`);let i=zo(e.mark),a=e.packed!==r,o=e.configRevision!==i,s=e.source?0:e.ownerCoords.x,c=e.source?0:e.ownerCoords.y,l=e.ownerCoords.width,u=e.ownerCoords.height,d=e.configX!==s||e.configY!==c||e.configWidth!==l||e.configHeight!==u;if(a||o||d){b(a?`markConfigurationPackedMiss`:o?`markConfigurationExpressionMiss`:`markConfigurationGeometryMiss`);let t=e.occurrences[0],n=e.source?h.create(0,0,e.ownerCoords.width,e.ownerCoords.height):e.ownerCoords,d=y(`markConfiguration`,()=>Lo(e.mark,t.options,n,1,r.data,cc(e)));e.packed=r,e.definition=d?.definition,e.config=d?.config,e.properties=d?.properties,e.configRevision=i,e.configX=s,e.configY=c,e.configWidth=l,e.configHeight=u}if(a)for(let t of e.occurrences)t.range=Zs(e.mark,t.options,r);let f=Bo(e.mark);e.resourcesDirty||=f===void 0||a||o||d||e.resourceRevision!==f,e.resourceRevision=f??-1,e.active=!!e.config}#m(e){if(!e.source||e.generatedSource)return;let t=e.source.getSnapshot().topology.revision;for(let n of e.occurrences){let r=n.options.placement?.topologyRevision;if(r!==void 0&&r!==t)throw mc(e.mark,`Placement topology changed after layout completion.`)}}#h(e,t,n,r){let i=e.state;if(!i.active||!i.config||!i.definition||!i.packed)return;let a=e.range;if(!a.instanceCount)return;let o=e.draw;if(!o)throw Error(`Occurrence draw has not been compiled.`);lc(e,i,o,n);let s=i.generatedSource?e.placementIndex:e.options.placement?.index,c=i.facetIndexed?void 0:s;if(i.source&&!i.facetIndexed&&c===void 0)throw mc(i.mark,`Draw-level placement requires a resolved placement index.`);if(i.source&&s!==void 0&&!fc(i.source,s,i.viewport,o.scissor,n))return;let l=a.firstInstance,u=a.instanceCount;if(i.xQueryEnabled&&a.xIndex){if(a.xIndex(i.xQueryDomain[0],i.xQueryDomain[1],i.xIndexedRange),l=i.xIndexedRange[0],u=i.xIndexedRange[1]-l,b(`webgpuXIndexQueries`),b(`webgpuXIndexNativeItems`,a.instanceCount),b(`webgpuXIndexCandidateItems`,u),!u){b(`webgpuXIndexEmptyRanges`);return}}else i.xQueryEnabled&&b(`webgpuXIndexFallbackQueries`);let d;return i.updated||(i.updated=!0,i.resourcesDirty&&=(d=y(`retainedResourceSynchronization`,()=>this.surface.updateMark(i.mark,i.definition,i.config,i.properties??{})),!1)),o.firstInstance=l,o.instanceCount=u,o.placement&&(o.placement.index=c),this.surface.prepareDraw(i.mark,o,i.source),r.push(o),b(`drawCommands`),d}get currentCoords(){let e=s(this.#e);if(!e)throw Error(`No current view in WebGPU rendering context.`);return e.coords}};function $s(e){let t=[],n,r=[];for(let i of e)i.type===`beginSampleFacetBatch`?n=ec():i.type===`endSampleFacetBatch`?(ic(n,t),n=void 0):n?i.type===`occurrence`?nc(n,i.occurrence.state.mark,i):i.type===`pushView`?(r.push(n),n=rc(n,i)):n=r.pop():t.push(i);return t}function ec(){return{slots:new Map,ordered:[]}}function tc(e,t){let n=e.slots.get(t);return n||(n={items:[]},e.slots.set(t,n),e.ordered.push(n)),n}function nc(e,t,n){tc(e,t).items.push(n)}function rc(e,t){let n=tc(e,t.view);return n.command?n.command.coords.push(...t.coords):(n.command=t,n.collector=ec()),n.collector}function ic(e,t){for(let n of e.ordered)n.command&&n.collector?(t.push(n.command),ic(n.collector,t),t.push({type:`popView`})):t.push(...n.items)}function ac(e){let t={bounds:e.bounds,items:[],label:e.label};return e.localOpacity&&(t.opacity=e.view.getOpacity()),t}function oc(){return{x:0,y:0,width:0,height:0}}function sc(e,t){let n={mark:{markId:-1},firstInstance:0,instanceCount:0};return t.viewport&&(n.viewport=t.viewport),e.clip&&(n.scissor=oc()),e.cull&&(n.visibleRange={x1:0,y1:0,x2:0,y2:0,cullX:e.cull===!0||e.cull===`x`,cullY:e.cull===!0||e.cull===`y`}),t.source&&(n.placement={set:{placementSetId:-1},...e.options.placement?.clipToPlacement?{clipToPlacement:e.options.placement.clipToPlacement}:{}}),n}function cc(e){if(!e.facetIndexed&&e.source)return{source:`draw`}}function lc(e,t,n,r){if(n.scissor){let t=e.clip;n.scissor.x=t.clipX?t.rect.x:0,n.scissor.y=t.clipY?t.rect.y:0,n.scissor.width=t.clipX?t.rect.width:r.width,n.scissor.height=t.clipY?t.rect.height:r.height}if(n.visibleRange){let r=e.coords,i=e.cullClip,a=r.x,o=r.y;if(n.visibleRange.x1=0,n.visibleRange.x2=a+r.width,n.visibleRange.y1=0,n.visibleRange.y2=o+r.height,n.visibleRange.cullX)if(i?.clipX){let e=i.rect.x;n.visibleRange.x1=e,n.visibleRange.x2=e+i.rect.width}else n.visibleRange.x1=a;if(n.visibleRange.cullY)if(i?.clipY){let e=i.rect.y;n.visibleRange.y1=e,n.visibleRange.y2=e+i.rect.height}else n.visibleRange.y1=o;t.viewport&&(n.visibleRange.x1-=t.viewport.x,n.visibleRange.x2-=t.viewport.x,n.visibleRange.y1-=t.viewport.y,n.visibleRange.y2-=t.viewport.y)}}function uc(e,t){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height}function dc(e,t,n){for(let r of e.occurrences){let e=r.markCoords,i=r.placementIndex*4;n[i]=e.x/t.width,n[i+1]=e.y/t.height,n[i+2]=Math.max(e.width,1)/t.width,n[i+3]=Math.max(e.height,1)/t.height}}function fc(e,t,n,r,i){let a=e.getSnapshot().rectangles,o=t*4;if(o+3>=a.length)return!1;let s=n.x+a[o]*n.width,c=n.y+a[o+1]*n.height,l=a[o+2]*n.width,u=a[o+3]*n.height;if(l<=0||u<=0)return!1;let d=Math.max(0,r?.x??0),f=Math.max(0,r?.y??0),p=Math.min(i.width,r?r.x+r.width:i.width),m=Math.min(i.height,r?r.y+r.height:i.height);return s<p&&c<m&&s+l>d&&c+u>f}function pc(e,t){let n=e.coords[0],r=n.x,i=n.y,a=r+n.width,o=i+n.height;for(let t=1;t<e.coords.length;t++){let n=e.coords[t];r=Math.min(r,n.x),i=Math.min(i,n.y),a=Math.max(a,n.x+n.width),o=Math.max(o,n.y+n.height)}e.bounds.x=e.clipX?r:0,e.bounds.y=e.clipY?i:0,e.bounds.width=e.clipX?a-r:t.width,e.bounds.height=e.clipY?o-i:t.height}function mc(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var hc={r:0,g:0,b:0,a:0};function gc(e){if(e==null)return hc;let t=o(e);if(!t)throw Error(`Invalid WebGPU canvas background color: ${e}`);let n=t.rgb();return{r:n.r/255,g:n.g/255,b:n.b/255,a:n.opacity}}var _c=class{#e=!0;#t;constructor(e){this.viewRoot=e.viewRoot,this.surface=e.surface,this.getBackground=e.getBackground,this.broadcast=e.broadcast,this.onLayoutComputed=e.onLayoutComputed}computeLayout(){this.broadcast(`layout`),this.surface.invalidateSize();let e=5;for(;;){let t=this.#n();if(!t)return;if(!this.surface.invalidateSize()){this.#t=this.#r(t),this.#e=!0,this.onLayoutComputed(),this.broadcast(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}renderAll(){let e=this.#t;if(!e)return;let t=v();t?.beginFrame(`webgpu`);let n=y(`markTranslation`,()=>e.render());y(`surfaceRender`,()=>this.surface.render(n,gc(this.getBackground()))),this.#e=!0,t?.endFrame()}renderPickingFramebuffer(){let e=this.#t;if(!e||!this.#e)return;let t=v();t?.beginFrame(`webgpu`,`picking`);let n=y(`markTranslation`,()=>e.renderPicking());y(`surfaceRender`,()=>this.surface.renderPicking(n)),this.#e=!1,t?.endFrame()}#n(){let e=this.surface.getLogicalCanvasSize();if(!(isNaN(e.width)||isNaN(e.height)))return y(`layout`,()=>_(this.viewRoot,h.create(0,0,e.width,e.height),{devicePixelRatio:this.surface.getDevicePixelRatio(),renderingOptions:{firstFacet:!0}}))}#r(e){let t=new Qs({surface:this.surface});return y(`framePlanCompilation`,()=>{e.collectRenderCommands(t),t.finish()}),t}},vc=class{constructor(e){this._count=e,this._templatesByShader=new Map,this._nextId=1}getOrCreate(e,t,n){let r=this._templatesByShader.get(e),i=r?.get(t);if(i)return this._count(`programTemplateCacheHits`),i;r||(r=new Map,this._templatesByShader.set(e,r));let a=n(this._nextId++);return r.set(t,a),this._count(`programTemplateCacheMisses`),a}},yc=`
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
`,bc=5e3,xc=class{constructor(e,t){this.device=e,this.format=t,this.free=[],this.all=new Set,this.generation=0,this.idleTimer=void 0}beginFrame(){this.generation++,this.#n()}acquire(e,t,n){let r=`${e}x${t}:${n}`,i=this.free.findLastIndex(e=>e.key===r);if(i>=0){let e=this.free.splice(i,1)[0];return e.generation=this.generation,e}let a=this.device.createTexture({label:N(M,`transient ${e}x${t} ${n}x color`),size:{width:e,height:t},format:this.format,sampleCount:n,usage:GPUTextureUsage.RENDER_ATTACHMENT|(n===1?GPUTextureUsage.TEXTURE_BINDING:0)}),o={key:r,texture:a,view:a.createView({label:N(M,`transient color view`)}),generation:this.generation,compositeBinding:null};return this.all.add(o),o}release(e){this.free.push(e)}endFrame(){for(let e=this.free.length-1;e>=0;e--){let t=this.free[e];t.generation!==this.generation&&(this.free.splice(e,1),this.#e(t))}this.#t()}destroy(){this.#n();for(let e of this.all)e.texture.destroy();this.all.clear(),this.free.length=0}#e(e){this.all.delete(e),e.texture.destroy()}#t(){this.#n(),this.free.length!==0&&(this.idleTimer=setTimeout(()=>{this.idleTimer=void 0;for(let e of this.free)this.#e(e);this.free.length=0},bc))}#n(){this.idleTimer!==void 0&&(clearTimeout(this.idleTimer),this.idleTimer=void 0)}},Sc=class{constructor(e,t){this.device=e,this.stride=Math.max(16,e.limits.minUniformBufferOffsetAlignment),this.capacity=1,this.buffer=this.#e(this.capacity),this.staging=new Float32Array(this.capacity*this.stride/4),this.count=0;let n=e.createShaderModule({label:N(M,`composite shader`),code:yc});this.layout=e.createBindGroupLayout({label:N(M,`composite bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:16}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`,viewDimension:`2d`,multisampled:!1}}]}),this.pipeline=e.createRenderPipeline({label:N(M,`composite pipeline`),layout:e.createPipelineLayout({label:N(M,`composite pipeline layout`),bindGroupLayouts:[this.layout]}),vertex:{module:n,entryPoint:`vs_main`},fragment:{module:n,entryPoint:`fs_main`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}})}prepare(e){if(e>this.capacity){let t=this.capacity;for(;t<e;)t*=2;let n=this.buffer;this.capacity=t,this.buffer=this.#e(t),this.staging=new Float32Array(t*this.stride/4),n.destroy()}this.count=0}bind(e,t,n){let r=this.count++;this.staging[r*this.stride/4]=n;let i=t.compositeBinding;(i===null||i.buffer!==this.buffer)&&(i={buffer:this.buffer,bindGroup:this.device.createBindGroup({label:N(M,`composite bind group`),layout:this.layout,entries:[{binding:0,resource:{buffer:this.buffer,size:16}},{binding:1,resource:t.view}]})},t.compositeBinding=i),e.setBindGroup(0,i.bindGroup,[r*this.stride])}flush(){this.count&&this.device.queue.writeBuffer(this.buffer,0,this.staging.buffer,0,this.count*this.stride)}destroy(){this.buffer.destroy()}#e(e){return this.device.createBuffer({label:N(M,`composite uniforms`),size:e*this.stride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}},Cc=class{constructor(e){this.pass=e,this.pipeline=null,this.bindGroups=[],this.dynamicOffsets=[],this.viewport=[NaN,NaN,NaN,NaN,NaN,NaN],this.scissor=[NaN,NaN,NaN,NaN]}setPipeline(e){e!==this.pipeline&&(this.pass.setPipeline(e),this.pipeline=e)}setBindGroup(e,t,n){this.bindGroups[e]===t&&wc(this.dynamicOffsets[e],n)||(n?this.pass.setBindGroup(e,t,n):this.pass.setBindGroup(e,t),this.bindGroups[e]=t,this.dynamicOffsets[e]=n)}setViewport(e,t,n,r,i,a){let o=this.viewport;o[0]===e&&o[1]===t&&o[2]===n&&o[3]===r&&o[4]===i&&o[5]===a||(this.pass.setViewport(e,t,n,r,i,a),o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=a)}setScissorRect(e,t,n,r){let i=this.scissor;i[0]===e&&i[1]===t&&i[2]===n&&i[3]===r||(this.pass.setScissorRect(e,t,n,r),i[0]=e,i[1]=t,i[2]=n,i[3]=r)}};function wc(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var Tc={r:0,g:0,b:0,a:0},Z=class extends Error{},Ec=Symbol.for(`genome-spy.performance-profiler`);function Dc(){return globalThis[Ec]}function Oc(e,t){Dc()?.addPhase(e,t)}function Q(e,t){Dc()?.addCount(e,t)}function kc(){return Dc()?.enabled?performance.now():0}function Ac(e,t){t&&Oc(e,performance.now()-t)}var jc=class{constructor(e,t,n){this.renderer=e,this.placementSetId=t,this._labelOwner=`${M} placement set #${t}`,this._destroyed=!1,this._rectangles=Mc(n),this._buffer=Nc(e.device,this._rectangles,this._labelOwner),this._bindGroup=this._createBindGroup()}get count(){return this._rectangles.length/4}get bindGroup(){if(this.renderer._assertAlive(),this._destroyed)throw new Z(`Placement set has been destroyed.`);return this._bindGroup}_createBindGroup(){return this.renderer.device.createBindGroup({label:N(this._labelOwner,`bind group`),layout:this.renderer._placementBindGroupLayout,entries:[{binding:0,resource:{buffer:this._buffer}}]})}replace(e){if(this.renderer._assertAlive(),this._destroyed)throw new Z(`Placement set has been destroyed.`);let t=Mc(e);if(t.byteLength>this._buffer.size){Q(`placementBufferRecreations`);let e=this._buffer;this._buffer=Nc(this.renderer.device,t,this._labelOwner),this._bindGroup=this._createBindGroup(),e.destroy()}else t.byteLength&&(Q(`placementBufferReplacements`),Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),this.renderer.device.queue.writeBuffer(this._buffer,0,t));this._rectangles=t,this.renderer._renderFrame=null,this.renderer._pickingFrame=null,Q(`retainedNormalFrameInvalidations`),Q(`retainedPickingFrameInvalidations`),this.renderer.markPickingDirty()}destroy(){this._destroyed||(this._destroyed=!0,this._buffer.destroy(),this.renderer._placementSets.delete(this.placementSetId),this.renderer._renderFrame=null,this.renderer._pickingFrame=null,this.renderer.markPickingDirty())}};function Mc(e){if(!e||!(e.rectangles instanceof Float32Array))throw new Z(`Placement data must contain Float32Array rectangles.`);if(e.rectangles.length%4!=0)throw new Z(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.rectangles.length;t+=4){let n=e.rectangles[t],r=e.rectangles[t+1],i=e.rectangles[t+2],a=e.rectangles[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw new Z(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}if(!Dc()?.enabled)return new Float32Array(e.rectangles);let t=performance.now(),n=new Float32Array(e.rectangles);return Q(`placementValidationSnapshotBytes`,n.byteLength),Oc(`placementValidationSnapshot`,performance.now()-t),n}function Nc(e,t,n){let r=e.createBuffer({label:N(n,`rectangles`),size:Math.max(16,t.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return t.byteLength&&(Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),e.queue.writeBuffer(r,0,t)),r}function Pc(e){return e===`x`?1:e===`y`?2:e===`xy`?3:0}function Fc(e){let t=new ArrayBuffer(e);return{buffer:t,floats:new Float32Array(t),integers:new Uint32Array(t)}}async function Ic(e,t={}){if(!navigator.gpu)throw new Z(`WebGPU is not supported in this browser.`);let n=await navigator.gpu.requestAdapter();if(!n)throw new Z(`WebGPU adapter not available.`);let r=Math.min(10,n.limits.maxStorageBuffersPerShaderStage),i=await n.requestDevice({requiredLimits:{maxStorageBuffersPerShaderStage:r}});zc(i);let a=e.getContext(`webgpu`);if(!a)throw new Z(`Could not create a WebGPU context.`);return new Lc({device:i,context:a,format:t.format??navigator.gpu.getPreferredCanvasFormat(),canvas:e,alphaMode:t.alphaMode??`premultiplied`,onInvalidate:t.onInvalidate,onDeviceLoss:t.onDeviceLoss})}var Lc=class{constructor({device:e,context:t,format:n,canvas:r,alphaMode:i,onInvalidate:a,onDeviceLoss:o}){this.device=e,this.context=t,this.format=n,this.canvas=r,this.alphaMode=i,this._onInvalidate=a??(()=>{}),this._onDeviceLoss=o??(()=>{}),this._state=`alive`,this._deviceLossError=null,e.lost.then(e=>this._handleDeviceLoss(e)),t.configure({device:e,format:n,alphaMode:i}),this.pickFormat=`rgba8unorm`,this._marks=new Map,this._placementSets=new Map,this._detachedTargets=new Set,this._programTemplateCache=new vc(Q),this._transientTextures=new xc(e,n),this._textureCompositor=new Sc(e,n),this._ownedResources=new Set,this._renderFrame=null,this._pickingFrame=null,this._nextMarkId=1,this._nextPlacementSetId=1,this._pickingDirty=!0,this._pickTexture=null,this._pickTextureView=null,this._pickReadbackBuffer=null,this._pickTextureSize={width:0,height:0},this._pickQueue=[],this._activePick=null,this._globalUniformStride=Math.max(80,e.limits.minUniformBufferOffsetAlignment),this._globalUniformCapacity=1,this._globalUniformStaging=Fc(this._globalUniformStride),this._globalUniformBuffer=e.createBuffer({label:N(M,`global uniforms`),size:this._globalUniformStride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._globalBindGroupLayout=e.createBindGroupLayout({label:N(M,`global bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:80}}]}),this._globalBindGroup=e.createBindGroup({label:N(M,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this._globalUniformBuffer,size:80}}]}),this._placementBindGroupLayout=e.createBindGroupLayout({label:N(M,`placement bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:`read-only-storage`}}]});let s=window.devicePixelRatio??1;this.updateGlobals({width:(r.width||1)/s,height:(r.height||1)/s,dpr:s})}updateGlobals(e){this._assertAlive(),this._globals=Rc(e),this.markPickingDirty()}createDetachedTarget(e,t){this._assertAlive();let n=e.getContext(`webgpu`);if(!n)throw new Z(`Could not create a detached WebGPU context.`);n.configure({device:this.device,format:this.format,alphaMode:this.alphaMode});let r=Rc(t),i=!1,a=()=>{if(this._assertAlive(),i)throw new Z(`Detached render target has been destroyed.`)},o={canvas:e,render:(t={})=>{a(),this._renderTarget(n,e,r,t,!1)},onSubmittedWorkDone:async()=>{a(),await this.device.queue.onSubmittedWorkDone()},destroy:()=>{i||(i=!0,n.unconfigure(),this._detachedTargets.delete(o))}};return this._detachedTargets.add(o),o}_ensureGlobalUniformCapacity(e){if(e<=this._globalUniformCapacity)return;let t=this._globalUniformCapacity;for(;t<e;)t*=2;let n=this._globalUniformBuffer;this._globalUniformBuffer=this.device.createBuffer({label:N(M,`global uniforms`),size:t*this._globalUniformStride,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._globalUniformStaging=Fc(t*this._globalUniformStride),this._globalBindGroup=this.device.createBindGroup({label:N(M,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this._globalUniformBuffer,size:80}}]}),this._globalUniformCapacity=t,n.destroy()}_writeDrawGlobals(e,t=!1){let n=kc();if(!e.length){Ac(`drawGlobals`,n);return}this._ensureGlobalUniformCapacity(e.length);let{buffer:r,floats:i,integers:a}=this._globalUniformStaging;for(let n=0;n<e.length;n++){let r=n*this._globalUniformStride/4,o=e[n];i[r]=o.viewport.width,i[r+1]=o.viewport.height,i[r+2]=this._globals.dpr,i[r+4]=o.visibleRange.x1,i[r+5]=o.visibleRange.y1,i[r+6]=o.visibleRange.x2,i[r+7]=o.visibleRange.y2,i[r+8]=+!!o.visibleRange.cullX,i[r+9]=+!!o.visibleRange.cullY,i[r+12]=o.viewport.x,i[r+13]=o.viewport.y,i[r+14]=o.viewport.width,i[r+15]=o.viewport.height,a[r+16]=o.placement?.index??0,a[r+17]=o.placement?.clipMode??0,a[r+18]=o.placement?.count??0,a[r+19]=t?0:o.orderPass}this.device.queue.writeBuffer(this._globalUniformBuffer,0,r,0,e.length*this._globalUniformStride),Q(`drawGlobalWrites`),Q(`drawGlobalBytes`,e.length*this._globalUniformStride),Ac(`drawGlobals`,n)}createMark(e,t,n={}){this._assertAlive();let r=this._nextMarkId++,i=n.label??`${e.type} #${r}`,a=e.createProgram(this,t,{label:i});this._marks.set(r,a),this.markPickingDirty();let o=a.getSlotHandles();return{markId:r,batchUpdates:o.batchUpdates,series:o.series,scales:o.scales,values:o.values,properties:o.properties,extraValues:o.extraValues,scalarSlots:o.scalarSlots,selections:o.selections}}createPlacementSet(e){this._assertAlive();let t=new jc(this,this._nextPlacementSetId++,e);return this._placementSets.set(t.placementSetId,t),t}markPickingDirty(){this._state===`alive`&&(this._pickingDirty=!0)}_invalidate(){this._state===`alive`&&(this.markPickingDirty(),this._onInvalidate())}_ownResource(e){return this._assertAlive(),this._ownedResources.add(e),e}_ensurePickTarget(){let e=Math.max(1,this.canvas.width),t=Math.max(1,this.canvas.height);(!this._pickTexture||this._pickTextureSize.width!==e||this._pickTextureSize.height!==t)&&(this._pickTexture?.destroy(),this._pickTexture=this.device.createTexture({label:N(M,`picking texture`),size:{width:e,height:t},format:this.pickFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),this._pickTextureView=this._pickTexture.createView({label:N(M,`picking texture view`)}),this._pickTextureSize={width:e,height:t},this._pickReadbackBuffer?.destroy(),this._pickReadbackBuffer=this.device.createBuffer({label:N(M,`picking readback`),size:256,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}))}_renderPick(){Q(`pickingRenders`),this._ensurePickTarget();let e=this.device.createCommandEncoder({label:N(M,`picking command encoder`)}),t=e.beginRenderPass({label:N(M,`picking render pass`),colorAttachments:[{view:this._pickTextureView,loadOp:`clear`,storeOp:`store`,clearValue:{r:0,g:0,b:0,a:0}}]}),n=this._pickingFrame??this._renderFrame??this._normalizeDraws(this._marks.keys());this._writeDrawGlobals(n,!0),this._encodeDraws(t,n,!0),t.end(),this.device.queue.submit([e.finish()]),this._pickingDirty=!1}pick(e,t){return this._assertAlive(),new Promise((n,r)=>{this._pickQueue.push({x:e,y:t,resolve:n,reject:r}),this._startNextPick()})}_startNextPick(){if(this._activePick||!this._pickQueue.length)return;let e=this._pickQueue.shift();this._activePick=e,Promise.resolve().then(()=>(this._assertAlive(),this._pickSingle(e.x,e.y))).then(t=>this._finishPick(e,t,!1),t=>this._finishPick(e,t,!0))}_finishPick(e,t,n){this._activePick===e&&(this._activePick=null,n?e.reject(t):e.resolve(t),this._state===`alive`&&this._startNextPick())}_handleDeviceLoss(e){if(this._state!==`alive`)return;let t=e.message?`: ${e.message}`:``,n=new Z(`WebGPU device was lost (${e.reason})${t}`);this._state=`lost`,this._deviceLossError=n;let r=this._activePick;this._activePick=null,r?.reject(n);for(let e of this._pickQueue)e.reject(n);this._pickQueue.length=0,this._onInvalidate=()=>{},this._onDeviceLoss(e)}async _pickSingle(e,t){if(!this._marks.size)return null;this._ensurePickTarget(),this._pickingDirty&&this._renderPick();let n=this._globals?.dpr??1,r=Math.floor(e*n),i=Math.floor(t*n);if(r<0||i<0||r>=this._pickTextureSize.width||i>=this._pickTextureSize.height)return null;let a=this.device.createCommandEncoder({label:N(M,`pick readback command encoder`)});a.copyTextureToBuffer({texture:this._pickTexture,origin:{x:r,y:i}},{buffer:this._pickReadbackBuffer,bytesPerRow:256},{width:1,height:1,depthOrArrayLayers:1}),this.device.queue.submit([a.finish()]),await this._pickReadbackBuffer.mapAsync(GPUMapMode.READ,0,4);let o=new Uint8Array(this._pickReadbackBuffer.getMappedRange(0,4)),s=o[0]|o[1]<<8|o[2]<<16|o[3]<<24;return this._pickReadbackBuffer.unmap(),s===0?null:s-1>>>0}debugResources(e,t){this._assertAlive();let n=this._marks.get(e);if(!n)throw new Z(`No such mark: ${e}`);n.debugResources(t)}render(e={}){this._assertAlive(),this._renderTarget(this.context,this.canvas,this._globals,e,!0)}_renderTarget(e,t,n,r,i){let a=this._globals;this._globals=n;try{this._renderTargetFrame(e,t,r,i)}finally{this._globals=a}}_renderTargetFrame(e,t,n,r){let{items:i,draws:a,groupCount:o}=this._normalizeRenderItems(n.items??n.draws??this._marks.keys());Q(`renderDraws`,a.length),Q(`renderGroups`,o),this._writeDrawGlobals(a),this._textureCompositor.prepare(a.length+o+1);let s=this.device.createCommandEncoder({label:N(M,`main command encoder`)}),c=e.getCurrentTexture().createView({label:N(M,`canvas texture view`)});this._transientTextures.beginFrame();try{let e=kc();this._encodeRenderItems(s,{view:c,width:t.width,height:t.height,logicalX:0,logicalY:0,label:M},i,1,n.clearColor??{r:1,g:1,b:1,a:1}),this._textureCompositor.flush(),Ac(`commandEncoding`,e);let r=kc();this.device.queue.submit([s.finish()]),Ac(`submission`,r)}finally{this._transientTextures.endFrame()}r&&(this._renderFrame=a,this._pickingDirty=!0)}renderPicking(e={}){this._assertAlive(),this._pickingFrame=e.draws?this._normalizeDraws(e.draws):this._pickingFrame??this._renderFrame??this._normalizeDraws(this._marks.keys()),this._pickingDirty=!0}_normalizeDraws(e){let t=kc(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[];for(let t of e){let e=this._normalizeDraw(t,n,r.length);e&&r.push(e)}return Q(`normalizedDraws`,r.length),Ac(`drawNormalization`,t),r}_normalizeDraw(e,t,n){let r=typeof e==`number`?{mark:{markId:e}}:e,i=r.mark.markId,a=this._marks.get(i);if(!a)throw new Z(`No such mark: ${i}`);let o={...r.viewport??t};if(Kc(`viewport`,o),o.x<0||o.y<0||o.x+o.width>t.width||o.y+o.height>t.height)throw new Z(`Viewport must be contained within the logical canvas.`);let s=Jc(r.scissor??t,t),c=r.firstInstance??0;Gc(`firstInstance`,c);let l=r.instanceCount??a.drawCount-c;if(Gc(`instanceCount`,l),c+l>a.drawCount)throw new Z(`Instance range exceeds mark count: ${a.drawCount}.`);let u=a.resolveDrawRange(c,l),d=a._placementIndex,f;if(d){if(!r.placement)throw new Z(`Placement-enabled marks require a placement binding.`);let e=this._placementSets.get(r.placement.set.placementSetId);if(!e)throw new Z(`No such placement set: ${r.placement.set.placementSetId}`);let n=r.placement.index;if(`source`in d&&d.source===`draw`){if(!Number.isInteger(n)||n<0)throw new Z(`Draw placement marks require a non-negative index.`);if(n>=e.count)throw new Z(`Placement index ${n} exceeds set count ${e.count}.`)}else if(n!==void 0)throw new Z(`Per-instance placement marks forbid a draw-level index.`);if(f={bindGroup:e.bindGroup,count:e.count,index:n,clipToPlacement:r.placement.clipToPlacement,clipMode:Pc(r.placement.clipToPlacement)},n!==void 0&&f.clipToPlacement){let r=n*4,i=e._rectangles,a={x:o.x+i[r]*o.width,y:o.y+i[r+1]*o.height,width:i[r+2]*o.width,height:i[r+3]*o.height},c=f.clipToPlacement;s=Jc(s,{x:c.includes(`x`)?a.x:t.x,y:c.includes(`y`)?a.y:t.y,width:c.includes(`x`)?a.width:t.width,height:c.includes(`y`)?a.height:t.height})}}else if(r.placement)throw new Z(`Placement bindings require a placement-enabled mark.`);if(!(s.width<=0||s.height<=0))return{type:`draw`,requiredSampleCount:a.antialiasing===`multisample`?4:1,uniformIndex:n,markId:i,viewport:o,scissor:s,visibleRange:qc(r.visibleRange,t),firstInstance:u.firstInstance,instanceCount:u.instanceCount,orderPass:0,placement:f}}_normalizeRenderItems(e){let t=kc(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[],i=0,a=e=>{let t=[];for(let i of e)if(Vc(i)){let e=Math.min(1,Math.max(0,i.opacity??1));if(Number.isNaN(e))throw new Z(`Render scope opacity must be a number.`);if(Kc(`render scope bounds`,i.bounds,!0),e===0||i.bounds.width===0||i.bounds.height===0)continue;let n=a(i.items);if(!n.length)continue;t.push({type:`scope`,bounds:i.bounds,opacity:e,label:i.label,coverageOnly:n.every(Hc),items:n})}else{let e=this._normalizeDraw(i,n,r.length);if(e){let n=this._marks.get(e.markId),i=n._order;if(r.push(e),t.push(e),i&&n._orderActive){let n=i.matching===`first`,a=n?1:2,o=(n?2:1)|4;e.orderPass=a;let s={...e,uniformIndex:r.length,orderPass:o};r.push(s),t.push(s)}}}return t},o=(e,t,n,r)=>{let a=[],s=[],c,l=()=>{s.length&&(i++,a.push({type:`group`,bounds:c,opacity:1,sampleCount:4,label:r,items:s}),s=[],c=void 0)};for(let u of e)if(u.type===`scope`){l();let e=Jc(u.bounds,n);if(!e.width||!e.height)continue;let s=u.coverageOnly?4:1,c=u.label??r,d=o(u.items,s,e,c);if(!d.length)continue;u.opacity===1&&s===t?a.push(...d):(i++,a.push({type:`group`,bounds:e,opacity:u.opacity,sampleCount:s,label:c,items:d}))}else if(t===1&&u.requiredSampleCount===4){let e=Jc(u.scissor,n);if(!e.width||!e.height)continue;s.push(u),c?Uc(c,e):c=e}else l(),a.push(u);return l(),a},s=o(a(e),1,n,M);return Q(`normalizedDraws`,r.length),Ac(`drawNormalization`,t),{items:s,draws:r,groupCount:i}}_encodeRenderItems(e,t,n,r,i){let a=!1,o=[],s=()=>{if(o.length){if(r===1)this._encodeDrawPass(e,t,o,a?void 0:i);else if(!a)this._encodeMultisampleDrawPass(e,t,o);else{let n=this._transientTextures.acquire(t.width,t.height,1),r={texture:n,...t,view:n.view};this._encodeMultisampleDrawPass(e,r,o),this._encodeCompositePass(e,t,r,1,a?void 0:i),this._transientTextures.release(r.texture)}a=!0,o=[]}};for(let r of n)if(r.type===`group`){s();let n=this._renderGroup(e,t,r);n&&(this._encodeCompositePass(e,t,n,r.opacity,a?void 0:i),this._transientTextures.release(n.texture),a=!0)}else o.push(r);s(),a||this._encodeDrawPass(e,t,[],i)}_renderGroup(e,t,n){let r=Jc(n.bounds,{x:t.logicalX,y:t.logicalY,width:t.width/this._globals.dpr,height:t.height/this._globals.dpr}),i=this._globals.dpr,a=Yc(r,i,Math.floor(t.logicalX*i)+t.width,Math.floor(t.logicalY*i)+t.height);if(!a.width||!a.height)return;let o=this._transientTextures.acquire(a.width,a.height,1),s={view:o.view,width:a.width,height:a.height,logicalX:a.x/i,logicalY:a.y/i,label:n.label};return this._encodeRenderItems(e,s,n.items,n.sampleCount,Tc),{texture:o,...s}}_encodeMultisampleDrawPass(e,t,n){let r=this._transientTextures.acquire(t.width,t.height,4),i=e.beginRenderPass({label:N(t.label,`multisample group pass`),colorAttachments:[{view:r.view,resolveTarget:t.view,clearValue:Tc,loadOp:`clear`,storeOp:`discard`}]});this._encodeDraws(i,n,!1,t,4),i.end(),this._transientTextures.release(r)}_encodeDrawPass(e,t,n,r){let i=e.beginRenderPass({label:N(t.label,`main render pass`),colorAttachments:[{view:t.view,...r?{clearValue:r}:{},loadOp:r?`clear`:`load`,storeOp:`store`}]});this._encodeDraws(i,n,!1,t),i.end()}_encodeCompositePass(e,t,n,r,i){let a=e.beginRenderPass({label:N(n.label,`group composite pass`),colorAttachments:[{view:t.view,...i?{clearValue:i}:{},loadOp:i?`clear`:`load`,storeOp:`store`}]}),o=Math.round((n.logicalX-t.logicalX)*this._globals.dpr),s=Math.round((n.logicalY-t.logicalY)*this._globals.dpr);a.setViewport(o,s,n.width,n.height,0,1),a.setScissorRect(o,s,n.width,n.height),a.setPipeline(this._textureCompositor.pipeline),this._textureCompositor.bind(a,n.texture,r),a.draw(6),a.end()}_encodeDraws(e,t,n,r={view:void 0,width:this.canvas.width,height:this.canvas.height,logicalX:0,logicalY:0,label:M},i=1){let a=this._globals.dpr,o=new Cc(e);for(let s of t){if(n&&s.orderPass&4)continue;let t=this._marks.get(s.markId);if(!t)continue;o.setViewport((s.viewport.x-r.logicalX)*a,(s.viewport.y-r.logicalY)*a,s.viewport.width*a,s.viewport.height*a,0,1);let c=Yc(Jc(s.scissor,{x:r.logicalX,y:r.logicalY,width:r.width/a,height:r.height/a}),a,Math.floor(r.logicalX*a)+r.width,Math.floor(r.logicalY*a)+r.height);o.setScissorRect(c.x-Math.floor(r.logicalX*a),c.y-Math.floor(r.logicalY*a),c.width,c.height),o.setBindGroup(0,this._globalBindGroup,[s.uniformIndex*this._globalUniformStride]);let l={firstInstance:s.firstInstance,instanceCount:s.instanceCount,sampleCount:i};s.placement&&(l.placement=s.placement),n?t.preparePick(o,l):t.prepareDraw(o,l),s.placement&&o.setBindGroup(2,s.placement.bindGroup),n?t.drawPick(e,l):t.draw(e,l)}}destroyMark(e){if(this._state===`destroyed`)return;let t=this._marks.get(e);t&&(t.destroy(),this._marks.delete(e),this.markPickingDirty())}destroy(){if(this._state===`destroyed`)return;this._state=`destroyed`;for(let e of this._marks.values())e.destroy();this._marks.clear();for(let e of this._placementSets?.values()??[])e.destroy();this._placementSets?.clear();for(let e of this._detachedTargets)e.destroy();for(let e of this._ownedResources)e.destroy();this._ownedResources.clear(),this._renderFrame=null,this._globalUniformBuffer.destroy(),this._transientTextures.destroy(),this._textureCompositor.destroy(),this._pickTexture?.destroy(),this._pickTexture=null,this._pickTextureView=null,this._pickReadbackBuffer?.destroy(),this._pickReadbackBuffer=null;for(let e of this._pickQueue)e.resolve(null);this._pickQueue.length=0;let e=this._activePick;this._activePick=null,e?.resolve(null),this._onInvalidate=()=>{},this.context.unconfigure(),this.device.destroy()}_assertAlive(){if(this._state===`lost`)throw this._deviceLossError;if(this._state===`destroyed`)throw new Z(`Renderer has been destroyed.`)}_isAlive(){return this._state===`alive`}};function Rc(e){let{width:t,height:n,dpr:r}=e;return Wc(`width`,t),Wc(`height`,n),Wc(`dpr`,r),{width:t,height:n,dpr:r}}function zc(e){if(!Dc()?.enabled)return;let t=e.queue;Bc(t,`writeBuffer`,e=>{let t=e[2],n=typeof e[3]==`number`?e[3]:0,r=e[4],i=typeof r==`number`?r:Math.max(0,(t?.byteLength??0)-n);Q(`writeBufferCalls`),Q(`writeBufferBytes`,i)}),Bc(t,`submit`,()=>Q(`queueSubmissions`)),Bc(e,`createBuffer`,()=>Q(`gpuBuffersCreated`)),Bc(e,`createTexture`,()=>Q(`gpuTexturesCreated`)),Bc(e,`createShaderModule`,()=>Q(`shaderModulesCreated`)),Bc(e,`createBindGroup`,()=>Q(`bindGroupsCreated`)),Bc(e,`createRenderPipeline`,()=>Q(`pipelinesCreated`)),Bc(e,`createCommandEncoder`,()=>Q(`commandEncodersCreated`))}function Bc(e,t,n){let r=e,i=r[t];if(typeof i==`function`)try{r[t]=function(...e){return n(e),i.apply(this,e)}}catch{}}function Vc(e){return typeof e==`object`&&!!e&&`items`in e}function Hc(e){return e.type===`scope`?e.coverageOnly:e.requiredSampleCount===4}function Uc(e,t){let n=Math.max(e.x+e.width,t.x+t.width),r=Math.max(e.y+e.height,t.y+t.height);e.x=Math.min(e.x,t.x),e.y=Math.min(e.y,t.y),e.width=n-e.x,e.height=r-e.y}function Wc(e,t){if(!Number.isFinite(t)||t<=0)throw new Z(`${e} must be a positive finite number.`)}function Gc(e,t){if(!Number.isInteger(t)||t<0)throw new Z(`${e} must be a non-negative integer.`)}function Kc(e,t,n=!1){if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.width)||!Number.isFinite(t.height)||(n?t.width<0:t.width<=0)||(n?t.height<0:t.height<=0))throw new Z(`${e} must have finite coordinates and ${n?`non-negative`:`positive`} dimensions.`)}function qc(e,t){if(!e)return{x1:t.x,y1:t.y,x2:t.x+t.width,y2:t.y+t.height,cullX:!1,cullY:!1};let{x1:n,y1:r,x2:i,y2:a,cullX:o,cullY:s}=e;if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||n>i||r>a||typeof o!=`boolean`||typeof s!=`boolean`)throw new Z(`visibleRange must have finite ordered bounds and boolean flags.`);return e}function Jc(e,t){if(!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.width)||!Number.isFinite(e.height))throw new Z(`scissor must have finite coordinates and positive dimensions.`);if(e.width<=0||e.height<=0)return{x:e.x,y:e.y,width:0,height:0};let n=Math.max(e.x,t.x),r=Math.max(e.y,t.y),i=Math.min(e.x+e.width,t.x+t.width),a=Math.min(e.y+e.height,t.y+t.height);return{x:n,y:r,width:Math.max(0,i-n),height:Math.max(0,a-r)}}function Yc(e,t,n,r){let i=Math.floor(e.x*t),a=Math.floor(e.y*t),o=Math.min(n,Math.ceil((e.x+e.width)*t)),s=Math.min(r,Math.ceil((e.y+e.height)*t));return{x:i,y:a,width:o-i,height:s-a}}var Xc=class{#e={revision:0,facetIds:[]};#t={topology:this.#e,geometryRevision:0,rectangles:new Float32Array,overlap:`disjoint`};#n=new Set;#r=!1;getSnapshot(){if(this.#r)throw Error(`Cannot read a disposed placement source.`);return this.#t}replaceTopology(e,t,n=`disjoint`){this.#i(),Zc(t,e.length);let r=Object.freeze({revision:this.#e.revision+1,facetIds:Object.freeze(e.map(e=>e?Object.freeze(Array.from(e)):void 0))});this.#e=r,this.#t=Object.freeze({topology:r,geometryRevision:this.#t.geometryRevision+1,rectangles:y(`placementSourceSnapshot`,()=>(b(`placementSourceSnapshotBytes`,t.byteLength),new Float32Array(t))),overlap:n})}replaceGeometry(e,t=this.#t.overlap){this.#i(),Zc(e,this.#e.facetIds.length),this.#t=Object.freeze({topology:this.#e,geometryRevision:this.#t.geometryRevision+1,rectangles:y(`placementSourceSnapshot`,()=>(b(`placementSourceSnapshotBytes`,e.byteLength),new Float32Array(e))),overlap:t})}onDispose(e){return this.#i(),this.#n.add(e),()=>this.#n.delete(e)}dispose(){if(!this.#r){this.#r=!0;for(let e of this.#n)e();this.#n.clear()}}#i(){if(this.#r)throw Error(`Placement source has been disposed.`)}};function Zc(e,t){if(!(e instanceof Float32Array)||e.length!==t*4)throw Error(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.length;t+=4){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw Error(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}}var Qc=Object.freeze({});function $c(e){return`${e.unitView.getPathString()} [${e.getType()}]`}var el=class{#e;#t;#n=!1;#r=new Map;#i=new WeakMap;#a=new Map;#o=new WeakSet;#s;constructor(e){this.options=e,this.canvas=document.createElement(`canvas`),e.container.appendChild(this.canvas),this.#e=new O(e.container,this.canvas,e.sizeSource,()=>{this.#c()&&e.onCanvasResize()}),this.#c()}async initialize(){this.#t=await Ic(this.canvas,{onInvalidate:()=>{this.#t&&this.options.onRenderInvalidated?.()},onDeviceLoss:e=>{if(!this.#n){let t=e.message?`: ${e.message}`:``;this.options.onError?.(Error(`WebGPU device was lost (${e.reason})${t}`))}}}),this.#l()}invalidateSize(){return this.#e.invalidate(),this.#c()}#c(){let e=this.getLogicalCanvasSize(),t=this.#e.getPhysicalCanvasSize(e);return this.#s?.logicalWidth==e.width&&this.#s.logicalHeight==e.height&&this.#s.physicalWidth==t.width&&this.#s.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,this.#s={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},this.#l(),!0)}#l(){!this.#t||!this.#s||this.#s.logicalWidth<=0||this.#s.logicalHeight<=0||this.#t.updateGlobals({width:this.#s.logicalWidth,height:this.#s.logicalHeight,dpr:this.getDevicePixelRatio()})}getLogicalCanvasSize(){return this.#e.getLogicalCanvasSize()}getDevicePixelRatio(){return this.#e.getDevicePixelRatio()}createExportTarget(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=document.createElement(`canvas`);return r.width=Math.ceil(e*n),r.height=Math.ceil(t*n),{handle:this.#t.createDetachedTarget(r,{width:e,height:t,dpr:n}),canvas:r,logicalWidth:e,logicalHeight:t,pixelRatio:n}}renderLayoutToTarget(e,t,n,r){let i=new Qs({surface:this,target:{width:t.logicalWidth,height:t.logicalHeight,dpr:t.pixelRatio},markPredicate:r});e.collectRenderCommands(i),i.finish(),t.handle.render({items:i.render(),clearColor:n})}getPlacementSet(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let t=e.getSnapshot(),n=this.#i.get(e);if(!n){let n=this.#t.createPlacementSet({rectangles:t.rectangles}),r={set:n,topologyRevision:t.topology.revision,geometryRevision:t.geometryRevision};return this.#i.set(e,r),e.onDispose(()=>{let t=this.#i.get(e);t&&(t.set.destroy(),this.#i.delete(e))}),n}return(n.topologyRevision!==t.topology.revision||n.geometryRevision!==t.geometryRevision)&&(n.set.replace({rectangles:t.rectangles}),n.topologyRevision=t.topology.revision,n.geometryRevision=t.geometryRevision),n.set}updateOccurrencePlacements(e,t){this.#u(e);let n=this.#a.get(e);if(!n)n=new Xc,n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t),this.#a.set(e,n);else{let e=n.getSnapshot();e.rectangles.length===t.length?tl(e.rectangles,t)||n.replaceGeometry(t):n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t)}return n}updateMark(e,t,n,r=Qc){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#u(e);let i=this.#r.get(e),a=t.getProgramKey?.(n);if(!i||i.definition!==t||!Object.is(i.programKey,a)){i&&this.#t.destroyMark(i.handle.markId);let o=this.#t.createMark(t,n,{label:$c(e)});i={definition:t,programKey:a,handle:o,config:n,properties:r,bindings:nl(o,n,r),series:ul(n),count:n.count,selections:new Map},this.#r.set(e,i)}let o=0;return i.handle.batchUpdates(()=>{let t=i.config!==n;t&&ll(i,n)&&(i.series=ul(n),i.count=n.count,i.handle.series.replace(i.series,i.count),o++),(t||i.properties!==r)&&(i.bindings=nl(i.handle,n,r,i.bindings),i.config=n,i.properties=r),o+=il(i.bindings),o+=sl(i,e)}),o}prepareDraw(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=this.#r.get(e);if(!r)throw Error(`Cannot draw a WebGPU mark before updating it.`);if(t.mark=r.handle,n){if(!t.placement)throw Error(`Placement source requires a materialized draw placement.`);t.placement.set=this.getPlacementSet(n)}}render(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.render({items:e,...t?{clearColor:t}:{}})}renderPicking(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.renderPicking({draws:e})}pick(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);return this.#t.pick(e,t)}finalize(){if(!this.#n){this.#n=!0;for(let e of this.#a.values())e.dispose();this.#t?.destroy(),this.#t=void 0,this.#r.clear(),this.#i=new WeakMap,this.#a.clear(),this.#o=new WeakSet,this.#e.finalize(),this.canvas.remove()}}#u(e){this.#o.has(e)||(this.#o.add(e),e.unitView?.registerDisposer?.(()=>this.#d(e)))}#d(e){let t=this.#r.get(e);t&&(this.#t?.destroyMark(t.handle.markId),this.#r.delete(e));let n=this.#a.get(e);n&&(n.dispose(),this.#a.delete(e))}};function tl(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function nl(e,t,n,r=[]){let i=new Map(r.map(e=>[e.key,e.value])),a=[],o=(e,t,n,r=!1)=>{a.push({key:e,read:t,write:n,value:i.has(e)?i.get(e):al(t()),skipUndefined:r})};for(let[n,r]of Object.entries(t.channels)){rl(o,`channel:${n}:default`,e.scales[n]?.default,e.values[n]?.default,r);for(let[t,i]of(r.conditions??[]).entries())i.channel&&rl(o,`channel:${n}:condition:${t}`,e.scales[n]?.conditions?.[t],e.values[n]?.conditions?.[t],i.channel)}for(let[t,r]of Object.entries(n)){let n=e.properties?.[t];if(!n)throw Error(`Renderer mark has no property slot "${t}".`);o(`property:${t}`,()=>r.value,e=>n.set(e))}for(let[n,r]of Object.entries(t.scalarSlots??{})){let t=e.scalarSlots?.[n];t&&o(`scalar:${n}`,()=>r.value,e=>t.set(e))}return a}function rl(e,t,n,r,i){n&&i.scale&&(`domain`in i.scale&&e(t+`:domain`,()=>i.scale.domain,e=>n.setDomain(e),!0),`range`in i.scale&&e(t+`:range`,()=>i.scale.range,e=>n.setRange(e),!0)),r&&`value`in i&&e(t+`:value`,()=>i.value,e=>r.set(e),!0)}function il(e){let t=0;for(let n of e){let e=n.read();n.skipUndefined&&e===void 0||ol(n.value,e)||(n.write(e),t++,n.value=al(e))}return t}function al(e){return Array.isArray(e)?e.map(al):e}function ol(e,t){return e===t?!0:Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every((e,n)=>ol(e,t[n])):!1}function sl(e,t){let n=t.unitView?.paramRuntime;if(!n)return 0;let r=0;for(let[t,i]of Object.entries(e.handle.selections??{})){let a=n.findValue(t);if(a){if(i.type==`single`){let n=a.uniqueId??0;e.selections.get(t)!==n&&(i.set(n),r++,e.selections.set(t,n))}else if(i.type==`multi`){let n=Uint32Array.from(a.data.keys());cl(e.selections.get(t),n)||(i.set(n),r++,e.selections.set(t,n))}else if(i.type==`interval`){let n=e.selections.get(t);if(!n||n.type!=`interval`){let r={};for(let e of i.components)r[e]=null;n={type:`interval`,intervals:r},e.selections.set(t,n)}let o=!1;for(let e of i.components){let t=a.intervals?.[e]??null,r=n.intervals[e];(t==null?r!=null:r==null||r[0]!=t[0]||r[1]!=t[1])&&(n.intervals[e]=t?[t[0],t[1]]:null,o=!0)}o&&(i.set(n.intervals),r++)}}}return r}function cl(e,t){return!(e instanceof Uint32Array)||e.length!=t.length?!1:e.every((e,n)=>e==t[n])}function ll(e,t){if(e.count!=t.count)return!0;for(let[n,r]of Object.entries(t.channels)){let t=fl(r);if(t!==void 0&&e.series[n]!==t)return!0}for(let[n,r]of Object.entries(t.inputs??{}))if(e.series[n]!==r.data)return!0;return!!(t.placementIndex?.data&&e.series.__placementIndex!==t.placementIndex.data)}function ul(e){let t={};for(let[n,r]of Object.entries(e.channels)){let e=fl(r);e!==void 0&&(t[n]=e)}for(let[n,r]of Object.entries(e.inputs??{}))t[n]=r.data;return e.placementIndex?.data&&(t.__placementIndex=e.placementIndex.data),t}function dl(e){if(e){if(ArrayBuffer.isView(e.data)||Array.isArray(e.data))return e.data;if(typeof e.value==`string`)return e.value}}function fl(e){let t=dl(e);if(t!==void 0)return t;for(let t of e.conditions??[]){if(!t.channel)continue;let e=dl(t.channel);if(e!==void 0)return e}}async function pl(e,t){let n=t.mimeType??`image/png`;if(n!=`image/png`)throw Error(`Unsupported raster export MIME type: ${n}`);let r=e.getLogicalCanvasSize(),i=t.logicalWidth??r.width,a=t.logicalHeight??r.height,o=t.pixelRatio??e.getDevicePixelRatio(),s=hl(e,i,a,o);try{let r=gl(t.viewRoot,i,a,o);return e.renderLayoutToTarget(r,s,gc(t.clearColor)),await s.handle.onSubmittedWorkDone(),_l(s.canvas,n)}finally{s.handle.destroy()}}async function ml(e,t){let n=hl(e,t.logicalWidth,t.logicalHeight,t.pixelRatio);try{let r=document.createElement(`canvas`),i=r.getContext(`2d`);if(!i)throw new m(`Unable to initialize a WebGPU SVG crop context.`);let a=t.layoutResult&&t.pixelRatio==1?t.layoutResult:gl(t.viewRoot,t.logicalWidth,t.logicalHeight,t.pixelRatio);for(let o of t.runs){e.renderLayoutToTarget(a,n,hc,e=>o.marks.has(e)),await n.handle.onSubmittedWorkDone();let s=te(o.bounds,t.pixelRatio,n.canvas.width,n.canvas.height);r.width=s.width,r.height=s.height,i.resetTransform(),i.clearRect(0,0,s.width,s.height),i.drawImage(n.canvas,s.x,s.y,s.width,s.height,0,0,s.width,s.height),ee(o,s,t.pixelRatio,r.toDataURL(`image/png`))}}finally{n.handle.destroy()}}function hl(e,t,n,r){try{return e.createExportTarget(t,n,r)}catch(e){throw new m(`Unable to initialize a detached WebGPU export target.`,{cause:e})}}function gl(e,t,n,r){return _(e,h.create(0,0,t,n),{devicePixelRatio:r,renderingOptions:{firstFacet:!0}})}function _l(e,t){return new Promise((n,r)=>{e.toBlob(e=>{e?n(e):r(Error(`WebGPU could not encode the raster export.`))},t)})}var vl=class e{constructor(e,t=0,n){if(e instanceof DataView)this._view=e;else if(e instanceof ArrayBuffer)this._view=new DataView(e);else if(ArrayBuffer.isView(e))this._view=new DataView(e.buffer,e.byteOffset,e.byteLength);else throw TypeError(`OpenType data must be an ArrayBuffer or view.`);let r=n??this._view.byteLength-t;if(!Number.isInteger(t)||!Number.isInteger(r)||t<0||r<0||t+r>this._view.byteLength)throw RangeError(`OpenType reader range is outside the buffer.`);this._start=t,this._length=r,this._position=0}get offset(){return this._position}get length(){return this._length}get remaining(){return this._length-this._position}_ensure(e){if(!Number.isInteger(e)||e<0||this._position+e>this._length)throw RangeError(`Unexpected end of OpenType data.`)}seek(e){if(!Number.isInteger(e)||e<0||e>this._length)throw RangeError(`OpenType seek is outside the table.`);this._position=e}skip(e){this._ensure(e),this._position+=e}slice(t,n){if(!Number.isInteger(t)||!Number.isInteger(n)||t<0||n<0||t+n>this._length)throw RangeError(`OpenType table range is outside the buffer.`);return new e(this._view,this._start+t,n)}uint8(){return this._ensure(1),this._view.getUint8(this._start+this._position++)}int8(){return this._ensure(1),this._view.getInt8(this._start+this._position++)}uint16(){this._ensure(2);let e=this._view.getUint16(this._start+this._position,!1);return this._position+=2,e}int16(){this._ensure(2);let e=this._view.getInt16(this._start+this._position,!1);return this._position+=2,e}uint32(){this._ensure(4);let e=this._view.getUint32(this._start+this._position,!1);return this._position+=4,e}tag(){return String.fromCharCode(this.uint8(),this.uint8(),this.uint8(),this.uint8())}bytes(e){this._ensure(e);let t=new Uint8Array(this._view.buffer,this._view.byteOffset+this._start+this._position,e);return this._position+=e,t}},yl=1,bl=2,xl=4,Sl=8,Cl=16,wl=32,Tl=64,El=128,Dl=2,Ol=9;function kl(){return{firstPlacement:0,firstAdvance:0,secondPlacement:0,secondAdvance:0}}function Al(e,t){e.firstPlacement+=t.firstPlacement,e.firstAdvance+=t.firstAdvance,e.secondPlacement+=t.secondPlacement,e.secondAdvance+=t.secondAdvance}function $(e,t){return e.slice(t,e.length-t)}function jl(e,t){let n={placement:0,advance:0};return t&yl&&(n.placement=e.int16()),t&bl&&e.int16(),t&xl&&(n.advance=e.int16()),t&Sl&&e.int16(),t&Cl&&e.uint16(),t&wl&&e.uint16(),t&Tl&&e.uint16(),t&El&&e.uint16(),n}function Ml(e,t){return{firstPlacement:e.placement,firstAdvance:e.advance,secondPlacement:t.placement,secondAdvance:t.advance}}function Nl(e,t){let n=$(e,t),r=n.uint16();if(r===1){let e=Array.from({length:n.uint16()},()=>n.uint16());return{indexOf(t){let n=0,r=e.length-1;for(;n<=r;){let i=n+r>>>1,a=e[i];if(t<a)r=i-1;else if(t>a)n=i+1;else return i}return-1},glyphAt(t){return e[t]}}}if(r===2){let e=Array.from({length:n.uint16()},()=>({start:n.uint16(),end:n.uint16(),startIndex:n.uint16()}));return{indexOf(t){for(let n of e){if(t<n.start)return-1;if(t<=n.end)return n.startIndex+t-n.start}return-1},glyphAt(t){for(let n of e){let e=n.end-n.start+1;if(t>=n.startIndex&&t<n.startIndex+e)return n.start+t-n.startIndex}}}}throw Error(`Unsupported OpenType coverage format ${r}.`)}function Pl(e,t){let n=$(e,t),r=n.uint16();if(r===1){let e=n.uint16(),t=Array.from({length:n.uint16()},()=>n.uint16());return n=>t[n-e]??0}if(r===2){let e=Array.from({length:n.uint16()},()=>({start:n.uint16(),end:n.uint16(),classId:n.uint16()}));return t=>{for(let n of e){if(t<n.start)return 0;if(t<=n.end)return n.classId}return 0}}throw Error(`Unsupported OpenType class definition format ${r}.`)}function Fl(e){let t=e.uint16(),n=e.uint16(),r=e.uint16(),i=e.uint16(),a=Array.from({length:i},()=>e.uint16()),o=Nl(e,t),s=new Map;for(let t=0;t<i;t++){let i=o.glyphAt(t);if(i===void 0)throw Error(`GPOS pair set has no matching coverage glyph.`);let c=$(e,a[t]),l=new Map;for(let e=0,t=c.uint16();e<t;e++){let e=c.uint16(),t=jl(c,n),i=jl(c,r);l.set(e,Ml(t,i))}s.set(i,l)}return(e,t)=>s.get(e)?.get(t)??null}function Il(e){let t=e.uint16(),n=e.uint16(),r=e.uint16(),i=e.uint16(),a=e.uint16(),o=e.uint16(),s=e.uint16(),c=o*s;if(!Number.isSafeInteger(c)||c>1e6)throw Error(`GPOS pair-class matrix is unreasonably large.`);let l=Array.from({length:c},()=>Ml(jl(e,n),jl(e,r))),u=Nl(e,t),d=Pl(e,i),f=Pl(e,a);return(e,t)=>{if(u.indexOf(e)<0)return null;let n=d(e),r=f(t);if(n>=o||r>=s)throw Error(`GPOS pair references an invalid glyph class.`);return l[n*s+r]}}function Ll(e){let t=e.uint16();if(t===1)return Fl(e);if(t===2)return Il(e);throw Error(`Unsupported GPOS pair adjustment format ${t}.`)}function Rl(e){let t=e.uint16(),n=Array.from({length:t},()=>({tag:e.tag(),offset:e.uint16()})),r=n.find(e=>e.tag===`latn`)??n.find(e=>e.tag===`DFLT`)??n[0];if(!r)return[];let i=$(e,r.offset),a=i.uint16(),o=i.uint16(),s=Array.from({length:o},()=>(i.tag(),i.uint16())),c=a||s[0];if(!c)return[];let l=$(i,c);l.uint16();let u=l.uint16(),d=Array.from({length:l.uint16()},()=>l.uint16());return u!==65535&&d.unshift(u),d}function zl(e,t){let n=e.uint16(),r=Array.from({length:n},()=>({tag:e.tag(),offset:e.uint16()})),i=new Set(t),a=[];for(let t=0;t<r.length;t++){let n=r[t];if(n.tag!==`kern`||!i.has(t))continue;let o=$(e,n.offset);o.uint16();let s=o.uint16();for(let e=0;e<s;e++)a.push(o.uint16())}return a}function Bl(e){let t=e.uint16(),n=e.uint16();if(t!==1||n!==0&&n!==1)throw Error(`Unsupported GPOS table version.`);let r=e.uint16(),i=e.uint16(),a=e.uint16();n===1&&e.uint32();let o=Rl($(e,r)),s=zl($(e,i),o);if(s.length===0)return null;let c=$(e,a),l=c.uint16(),u=Array.from({length:l},()=>c.uint16()),d=s.map(e=>{let t=u[e];if(t===void 0)throw Error(`GPOS kern feature references a missing lookup.`);let n=$(c,t),r=n.uint16();n.uint16();let i=Array.from({length:n.uint16()},()=>n.uint16()).map(e=>{let t=$(n,e);if(r===Dl)return Ll(t);if(r===Ol){let e=t.uint16(),n=t.uint16(),r=t.uint32();if(e!==1||n!==Dl)throw Error(`Unsupported GPOS extension positioning.`);return Ll($(t,r))}throw Error(`Unsupported GPOS kern lookup type ${r}.`)});return(e,t)=>{for(let n of i){let r=n(e,t);if(r)return r}return null}});return(e,t)=>{let n=kl();for(let r of d){let i=r(e,t);i&&Al(n,i)}return n}}function Vl(e){if(e.uint16()!==0)return null;let t=e.uint16(),n=new Map;for(let r=0;r<t;r++){let t=e.offset;e.uint16();let r=e.uint16(),i=e.uint16(),a=i>>8,o=!!(i&1),s=!!(i&2),c=!!(i&4),l=!!(i&8);if(a===0&&o&&!s&&!c){let t=e.uint16();e.skip(6);for(let r=0;r<t;r++){let t=e.uint16(),r=e.uint16(),i=e.int16(),a=t*65536+r;n.set(a,l?i:(n.get(a)??0)+i)}}if(r<6||t+r>e.length)throw RangeError(`Legacy kern subtable exceeds its table.`);e.seek(t+r)}return n.size===0?null:(e,t)=>({firstPlacement:0,firstAdvance:n.get(e*65536+t)??0,secondPlacement:0,secondAdvance:0})}function Hl(e,t){let n=t.get(`GPOS`);if(n){let t=Bl(e.slice(n.offset,n.length));if(t)return t}let r=t.get(`kern`);if(r){let t=Vl(e.slice(r.offset,r.length));if(t)return t}return()=>kl()}var Ul=1,Wl=2,Gl=4,Kl=8,ql=16,Jl=32,Yl=1,Xl=2,Zl=4,Ql=8,$l=32,eu=64,tu=128,nu=256,ru=2048,iu=4096;function au(e){let t=e.uint32();if(t===1330926671)throw Error(`CFF OpenType fonts are not supported by this PoC.`);if(t!==65536&&t!==1953658213)throw Error(`Expected an SFNT TrueType font.`);let n=e.uint16();e.skip(6);let r=new Map;for(let t=0;t<n;t++){let t=e.tag();e.skip(4);let n=e.uint32(),i=e.uint32();r.set(t,{offset:n,length:i})}return r}function ou(e,t,n){let r=t.get(n);if(!r)throw Error(`TrueType font is missing the ${n} table.`);return e.slice(r.offset,r.length)}function su(e){e.uint16();let t=e.uint16(),n=[];for(let r=0;r<t;r++)n.push({platformId:e.uint16(),encodingId:e.uint16(),offset:e.uint32()});let r=new Map([[`3-10`,0],[`0-4`,1],[`3-1`,2],[`0-3`,3],[`0-6`,4]]);n.sort((e,t)=>(r.get(`${e.platformId}-${e.encodingId}`)??100)-(r.get(`${t.platformId}-${t.encodingId}`)??100));for(let t of n){if(t.offset+2>e.length)continue;let n=e.slice(t.offset,e.length-t.offset),r=n.uint16();if(r===4)return cu(n);if(r===12)return lu(n)}throw Error(`TrueType font has no supported Unicode cmap table.`)}function cu(e){let t=e.uint16();if(t>e.length)throw RangeError(`TrueType cmap format 4 exceeds its table.`);e.uint16();let n=e.uint16()/2;e.skip(6);let r=Array.from({length:n},()=>e.uint16());e.uint16();let i=Array.from({length:n},()=>e.uint16()),a=Array.from({length:n},()=>e.int16()),o=e.offset,s=Array.from({length:n},()=>e.uint16());return c=>{for(let l=0;l<n;l++){if(c>r[l])continue;if(c<i[l])return 0;if(s[l]===0)return c+a[l]&65535;let n=o+l*2+s[l]+(c-i[l])*2;if(n+2>t)throw RangeError(`TrueType cmap glyph index is out of range.`);let u=e.offset;e.seek(n);let d=e.uint16();return e.seek(u),d!==0&&(d=d+a[l]&65535),d}return 0}}function lu(e){if(e.uint16(),e.uint32()>e.length)throw RangeError(`TrueType cmap format 12 exceeds its table.`);e.uint32();let t=e.uint32(),n=Array.from({length:t},()=>({start:e.uint32(),end:e.uint32(),glyphId:e.uint32()}));return e=>{let t=0,r=n.length-1;for(;t<=r;){let i=t+r>>>1,a=n[i];if(e<a.start)r=i-1;else if(e>a.end)t=i+1;else return a.glyphId+e-a.start}return 0}}function uu(e,t){let n=Array.from({length:t},()=>e.uint16()),r=n.at(-1)+1;e.skip(e.uint16());let i=[];for(;i.length<r;){let t=e.uint8();if(i.push(t),t&Kl){let n=e.uint8();for(let e=0;e<n;e++)i.push(t)}}if(i.length!==r)throw Error(`TrueType glyph flag repetition exceeds point count.`);let a=[],o=0;for(let t of i){if(t&Wl){let n=e.uint8();o+=t&ql?n:-n}else t&ql||(o+=e.int16());a.push(o)}let s=[],c=0;for(let t of i){if(t&Gl){let n=e.uint8();c+=t&Jl?n:-n}else t&Jl||(c+=e.int16());s.push(c)}let l=[],u=0;for(let e of n){let t=[];for(let n=u;n<=e;n++)t.push({x:a[n],y:s[n],onCurve:!!(i[n]&Ul)});l.push(t),u=e+1}return l}function du(e){return e.flatMap(e=>e)}function fu(e,t,n,r){let[i,a,o,s]=t;return e.map(e=>e.map(e=>({x:Math.round(i*e.x+o*e.y+n),y:Math.round(a*e.x+s*e.y+r),onCurve:e.onCurve})))}function pu(e){let t=new vl(e),n=au(t),r=ou(t,n,`head`);r.skip(18);let i=r.uint16();r.skip(30);let a=r.int16();if(i<16||i>16384)throw Error(`TrueType unitsPerEm is outside the valid range.`);if(a!==0&&a!==1)throw Error(`Unsupported TrueType loca offset format.`);let o=ou(t,n,`maxp`);o.skip(4);let s=o.uint16(),c=ou(t,n,`hhea`);c.skip(4);let l=c.int16(),u=c.int16(),d=c.int16();c.skip(24);let f=c.uint16();if(f<1||f>s)throw Error(`Invalid TrueType horizontal metric count.`);let p=ou(t,n,`hmtx`),m=new Uint16Array(s),h=new Int16Array(s),g=0;for(let e=0;e<f;e++)g=p.uint16(),m[e]=g,h[e]=p.int16();for(let e=f;e<s;e++)m[e]=g,h[e]=p.int16();let _=ou(t,n,`loca`),v=new Uint32Array(s+1);for(let e=0;e<=s;e++)v[e]=a===0?_.uint16()*2:_.uint32();let y=ou(t,n,`glyf`);if(v[s]>y.length)throw RangeError(`TrueType glyph locations exceed the glyf table.`);let b=su(ou(t,n,`cmap`)),x=Hl(t,n),S=new Map;function C(e,t=0){if(e>=s)throw RangeError(`TrueType cmap refers to a missing glyph.`);if(t>32)throw Error(`TrueType composite glyph nesting is too deep.`);let n=S.get(e);if(n)return n;let r=v[e],i=v[e+1]-r,a;if(i===0)a={glyphId:e,advanceWidth:m[e],leftSideBearing:h[e],bounds:null,contours:[]};else{let n=y.slice(r,i),o=n.int16(),s={xMin:n.int16(),yMin:n.int16(),xMax:n.int16(),yMax:n.int16()},c;if(o>=0)c=o===0?[]:uu(n,o);else{c=[];let e=[],r;do{r=n.uint16();let i=n.uint16(),a,o;r&Yl?r&Xl?(a=n.int16(),o=n.int16()):(a=n.uint16(),o=n.uint16()):r&Xl?(a=n.int8(),o=n.int8()):(a=n.uint8(),o=n.uint8());let s=[1,0,0,1];r&Ql?(s[0]=n.int16()/16384,s[3]=s[0]):r&eu?(s[0]=n.int16()/16384,s[3]=n.int16()/16384):r&tu&&(s[0]=n.int16()/16384,s[1]=n.int16()/16384,s[2]=n.int16()/16384,s[3]=n.int16()/16384);let l=C(i,t+1),u=du(l.contours),d,f;if(r&Xl)!(r&iu)&&(r&ru||s[0]!==1||s[1]!==0||s[2]!==0||s[3]!==1)?(d=s[0]*a+s[2]*o,f=s[1]*a+s[3]*o):(d=a,f=o),r&Zl&&(d=Math.round(d),f=Math.round(f));else{let t=e[a],n=u[o];if(!t||!n)throw Error(`TrueType composite point attachment is invalid.`);let r=s[0]*n.x+s[2]*n.y,i=s[1]*n.x+s[3]*n.y;d=t.x-r,f=t.y-i}let p=fu(l.contours,s,d,f);c.push(...p),e.push(...du(p))}while(r&$l);r&nu&&n.skip(n.uint16())}a={glyphId:e,advanceWidth:m[e],leftSideBearing:h[e],bounds:s,contours:c}}return S.set(e,a),a}function w(e){return C(b(e))}return{unitsPerEm:i,ascender:l,descender:u,lineGap:d,glyphCount:s,getGlyph:w,getPairAdjustment:x}}function mu(e,t,n){let r=e.getPairAdjustment(t,n);return r.firstAdvance+r.secondAdvance}function hu(e,t,n,r=0){let i=0,a,o=0;for(let n of t){let t=e.getGlyph(n);i+=t.advanceWidth,a&&(i+=mu(e,a.glyphId,t.glyphId)),a=t,o++}return i*n/e.unitsPerEm+Math.max(0,o-1)*r}function gu(e,t){return{x:(e.x+t.x)*.5,y:(e.y+t.y)*.5,onCurve:!0}}function _u(e){return Object.is(e,-0)?`0`:String(e)}function vu(e){return`${_u(e.x)} ${_u(-e.y)}`}function yu(e){if(e.length===0)throw Error(`TrueType contours must contain points.`);let t=[];for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.push(r),!r.onCurve&&!i.onCurve&&t.push(gu(r,i))}let n=t.findIndex(e=>e.onCurve);if(n<0)throw Error(`TrueType contour has no implied on-curve point.`);let r=[`M${vu(t[n])}`],i=1;for(;i<t.length;){let e=t[(n+i)%t.length];if(e.onCurve)r.push(`L${vu(e)}`),i++;else{let a=t[(n+i+1)%t.length];if(!a.onCurve)throw Error(`TrueType off-curve point lacks an endpoint.`);r.push(`Q${vu(e)} ${vu(a)}`),i+=2}}return r.push(`Z`),r.join(``)}function bu(e){return e.contours.length===0?null:e.contours.map(yu).join(``)}function xu(e){let t=pu(e),n=Array(128),r=new Map,i=Array(t.glyphCount);function a(e){let n=t.getGlyph(e),r=i[n.glyphId];return r===void 0&&(r=bu(n),i[n.glyphId]=r),Object.freeze({codePoint:e,glyphId:n.glyphId,advanceWidth:n.advanceWidth,leftSideBearing:n.leftSideBearing,bounds:n.bounds?Object.freeze({...n.bounds}):null,path:r})}function o(e){let t=typeof e==`number`?e:e.codePointAt(0);if(t===void 0||!Number.isInteger(t))throw TypeError(`A glyph requires a Unicode character or code point.`);let i=t>=0&&t<128,o=i?n[t]:r.get(t);return o===void 0&&(o=a(t),i?n[t]=o:r.set(t,o)),o}let s=t.getGlyph(`H`.codePointAt(0)).bounds?.yMax??t.ascender;return Object.freeze({unitsPerEm:t.unitsPerEm,ascender:t.ascender,descender:t.descender,lineGap:t.lineGap,capHeight:s,glyphCount:t.glyphCount,getGlyph:o,getPairAdjustment:t.getPairAdjustment})}var Su=new Map;function Cu(e){let t=String(e),n=Su.get(t);return n||(n=fetch(e).then(async e=>{if(!e.ok)throw Error(`Could not load TrueType font ${t}: ${e.status}.`);return xu(await e.arrayBuffer())}),Su.set(t,n),n.catch(()=>Su.delete(t))),n}function wu(e,t,n){let r=0;for(let i of t.split(`
`))r=Math.max(r,hu(e,i,n));return r}var Tu=new URL(``+new URL(`DefaultFont-DwM7drq1.ttf`,import.meta.url).href,``+import.meta.url);function Eu(){return Cu(Tu)}var Du=new Map([[`Indie Flower`,`normal`,400,`indieflower/v24/m8JVjfNVeKWVnh3QMuKkFcZlbkGA1dM.ttf`],[`Lato`,`normal`,400,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-Regular.ttf`],[`Lato`,`italic`,400,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-Italic.ttf`],[`Lato`,`normal`,600,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-SemiBold.ttf`],[`Lato`,`normal`,700,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-Bold.ttf`],[`Lato`,`italic`,700,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-BoldItalic.ttf`],[`Lato`,`normal`,900,`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/lato/Lato-Black.ttf`],[`Lobster`,`normal`,400,`lobster/v32/neILzCirqoswsqX9_oWsNKEy.ttf`],[`Oswald`,`normal`,400,`oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUFoYgaQ.ttf`],[`Oswald`,`normal`,700,`oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZogUFoYgaQ.ttf`],[`Radley`,`normal`,400,`radley/v24/LYjDdGzinEIjCN19oAlCpVo.ttf`],[`Roboto Condensed`,`normal`,700,`robotocondensed/v31/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpfBJ73tBKQ.ttf`],[`Source Sans Pro`,`normal`,400,`sourcesanspro/v23/6xK3dSBYKcSV-LCoeQqfX1RYOo3aP6TimDc.ttf`],[`Source Sans Pro`,`normal`,700,`sourcesanspro/v23/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkB1p_8E.ttf`],[`Teko`,`normal`,400,`teko/v23/LYjYdG7kmE0gV69VVPPdFl06VN8XG7Sy3TSEvw.ttf`]].map(([e,t,n,r])=>[Ou(String(e),String(t),Number(n)),String(r).startsWith(`https://`)?String(r):`https://fonts.gstatic.com/s/`+r]));function Ou(e,t,n){return JSON.stringify([e,t,n])}function ku(e){let t=new Map;for(let n of e){if(typeof n.family!=`string`||n.family.trim()===``)throw Error(`Font catalog families must be non-empty strings.`);let e=n.style??`normal`;if(e!==`normal`&&e!==`italic`)throw Error(`Unsupported font catalog style for ${n.family}: ${e}.`);let r=n.weight??400;if(!Number.isInteger(r)||r<1||r>1e3)throw Error(`Font catalog weight for ${n.family} must be an integer from 1 to 1000.`);if(!(n.source instanceof URL||typeof n.source==`string`&&n.source.trim()!==``))throw Error(`Font catalog source for ${n.family} must be a non-empty URL.`);let i=Ou(n.family,e,r);if(t.has(i))throw Error(`Duplicate font catalog entry for ${n.family} ${e} ${r}.`);t.set(i,n.source)}return t}function Au(e){if(e.implicitFamily&&e.style==`normal`&&e.weight==400)return;let t=e.implicitFamily?`Lato`:e.family,n=Du.get(Ou(String(t),e.style,e.weight));if(!n)throw Error(`No WebGPU TrueType font is available for ${t} ${e.style} ${e.weight}.`);return n}function ju(e=[]){let t=ku(e);return e=>{if(e.implicitFamily&&e.style===`normal`&&e.weight===400)return Eu();let n=e.implicitFamily?`Lato`:e.family,r=Ou(String(n),e.style,e.weight);return Cu(t.get(r)??Au(e))}}var Mu=class{constructor(e,t){this.prepareFont=e,this.provisionalProvider=t,this.entries=new n([],JSON.stringify),this.pending=[]}requestFont(e){return this.#e(e).measurement}getPreparedFont(e){return this.entries.get(Nu(e))?.outlineFont}async waitUntilReady(){await Promise.all(this.pending)}#e(e){let t=Nu(e),n=this.entries.get(t);if(!n){let r=this.provisionalProvider.requestFont(e);n={outlineFont:void 0,measurement:void 0};let i=n;n.measurement={measureWidth:(e,t)=>i.outlineFont?wu(i.outlineFont,e,t):r.measureWidth(e,t),getHeight:e=>i.outlineFont?(i.outlineFont.capHeight-i.outlineFont.descender)/i.outlineFont.unitsPerEm*e:r.getHeight(e)},this.entries.set(t,n),this.pending.push(this.prepareFont(t).then(e=>{i.outlineFont=e}))}return n}};function Nu(e){let t=e.font==null||e.font.toLowerCase()==`sans-serif`;return{family:t?void 0:e.font,style:e.fontStyle??`normal`,weight:C(e.fontWeight??`normal`),implicitFamily:t}}async function Pu(e){let t=new el(e);try{await t.initialize()}catch(e){throw t.finalize(),e}let n=Promise.resolve(),r=e=>{let t=n.then(e);return n=t.catch(()=>{}),t},i=ju(e.fontCatalog),a,o=()=>(a??=w(e.container.ownerDocument),a);return{surface:t,textMetrics:new Mu(i,{requestFont:e=>o().requestFont(e),waitUntilReady:()=>o().waitUntilReady()}),glHelper:void 0,createRenderCoordinator:e=>new _c({...e,surface:t}),readPickingId:(e,n)=>t.pick(e,n),exportCanvas:()=>{throw Error(`Synchronous canvas export is unavailable with WebGPU. Use imageExport.raster() instead.`)},exportRaster:e=>r(()=>pl(t,e)),rasterizeSvgRuns:e=>r(()=>ml(t,e))}}export{Pu as createWebGpuRenderingBackend};