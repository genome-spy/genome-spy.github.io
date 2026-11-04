import{$ as e,Bt as t,Dt as n,Ir as r,Kr as i,Nt as a,T as o,Z as s,_n as c,a as l,ft as u,gn as d,ht as f,m as p,o as m,s as h,tr as g,vt as _}from"./clipOptions-CzevWfMN.js";import{n as v,t as y}from"./deepEqual-WLur0AJq.js";import{c as b,d as x,n as S,s as C,t as w}from"./index-T-K-co9-.js";import{n as T,r as E,t as D}from"./color-Bc_Bw1mB.js";import{n as O,r as k,t as A}from"./performanceProfiler-t6gLo5-8.js";import{f as ee,h as te,o as ne,t as re}from"./nativeTextMetrics-CVLqrI4z.js";import{i as ie,n as ae,r as oe,t as se}from"./markXIndex-Dvzuzg0Y.js";import{t as ce}from"./canvasSizeHelper-CKNOir0P.js";import{n as le,t as ue}from"./rasterImage-CSBco7OJ.js";import{t as de}from"./renderingConstants-r_jqp-Og.js";var fe=4096,pe=4294967295;function me(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`High-precision values must be non-negative safe integers.`);let t=e%fe,n=(e-t)/fe;if(n>pe)throw Error(`High-precision value exceeds the supported range for packed u32.`);return[n>>>0,t>>>0]}function he(e){if(!Number.isFinite(e)||e<0)throw Error(`High-precision domain values must be finite and non-negative.`);let t=e%fe;return[e-t,t]}function ge(e){let[t,n]=me(e);return new Uint32Array([t,n])}function _e(e){let t=new Uint32Array(e.length*2);for(let n=0;n<e.length;n+=1){let[r,i]=me(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function ve(e,t){let n=e.length*2;if(t.length!==n)throw Error(`Packed target length (${t.length}) does not match ${n}.`);for(let n=0;n<e.length;n+=1){let[r,i]=me(e[n]),a=n*2;t[a]=r,t[a+1]=i}return t}function ye(e,t){let[n,r]=he(e);return[n,r,Number(t)-Number(e)]}var be={xClampRange:{type:`f32`,components:2,optional:!0},yClampRange:{type:`f32`,components:2,optional:!0}},xe=`
fn clampPlacedPosition(position: vec2<f32>, i: u32) -> vec2<f32> {
    var result = position;
#if defined(xClampRange_DEFINED)
    let xBounds = getScaled_xClampRange(i);
    let xMin = applyPlacementPixel(vec2<f32>(xBounds.x, 0.0), i).x;
    let xMax = applyPlacementPixel(vec2<f32>(xBounds.y, 0.0), i).x;
    result.x = clamp(result.x, xMin, xMax);
#endif
#if defined(yClampRange_DEFINED)
    let yBounds = getScaled_yClampRange(i);
    let yMin = applyPlacementPixel(vec2<f32>(0.0, yBounds.x), i).y;
    let yMax = applyPlacementPixel(vec2<f32>(0.0, yBounds.y), i).y;
    result.y = clamp(result.y, yMin, yMax);
#endif
    return result;
}

// Clamped geometry is constructed after placement so pixel offsets and strokes
// keep their size inside smaller occurrences. The ordinary path is unchanged.
fn projectClampedPosition(position: vec2<f32>, offset: vec2<f32>, i: u32) -> vec2<f32> {
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
    return clampPlacedPosition(applyPlacementPixel(position, i) + offset, i);
#else
    return position + offset;
#endif
}

fn placeClampedGeometry(clip: vec2<f32>, i: u32) -> vec2<f32> {
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
    return clip;
#else
    return applyPlacementClip(clip, i);
#endif
}
`;function j(e){return!!e&&`data`in e&&e.data!=null}function M(e){return!!e&&`value`in e&&e.value!=null}function Se(e){let t=new Map,n=0;for(let r of e){let e=r.arrayLength!=null,i=e?16:r.components===1?4:r.components===2?8:16,a=e?16*r.arrayLength:r.components===1?4:r.components===2?8:16,o=e?16:void 0;n=Ce(n,i),t.set(r.name,{...r,offset:n,stride:o}),n+=a}return{entries:t,byteLength:Ce(n,16)}}function Ce(e,t){return Math.ceil(e/t)*t}var we=class{#e;constructor(e){let t=Se(e);this.entries=t.entries,this.byteLength=t.byteLength,this.data=new ArrayBuffer(this.byteLength),this.#e=new DataView(this.data)}setValue(e,t){let n=this.entries.get(e);if(!n)return;if(n.arrayLength!=null){if(!(Array.isArray(t)||ArrayBuffer.isView(t)))throw Error(`Uniform "${e}" expects an array value`);let r=t;if(r.length!==n.arrayLength)throw Error(`Uniform "${e}" expects ${n.arrayLength} elements`);let i=n.stride??16;for(let e=0;e<n.arrayLength;e++){let t=r[e],a=n.offset+e*i;this.#t(n,a,t)}return}let r=n.components;if(Array.isArray(t)||ArrayBuffer.isView(t)){let i=t;if(i.length!==r)throw Error(`Uniform "${e}" expects ${r} components`);for(let t=0;t<r;t++){let a=i[t];if(typeof a!=`number`)throw Error(`Uniform "${e}" expects ${r} components`);this.#n(n,n.offset+t*4,a??0)}}else{if(r!==1)throw Error(`Uniform "${e}" expects ${r} components`);let i=t;this.#n(n,n.offset,i??0)}}#t(e,t,n){if(e.components===1){if(typeof n!=`number`)throw Error(`Uniform "${e.name}" expects scalar elements`);this.#n(e,t,n)}else{if(!Array.isArray(n)||n.length!==e.components)throw Error(`Uniform "${e.name}" expects ${e.components} components`);for(let r=0;r<e.components;r++)this.#n(e,t+r*4,n[r]??0)}}#n(e,t,n){e.type===`u32`?this.#e.setUint32(t,n>>>0,!0):e.type===`i32`?this.#e.setInt32(t,n|0,!0):this.#e.setFloat32(t,n??0,!0)}};function Te(e,t,n=new Map){let r=new Map,i=new Map,a=0;for(let[o,s]of Object.entries(e)){if(!j(s))continue;let e=s.type??t[o]?.type;if(!e)throw Error(`Missing type for series channel "${o}".`);if(e!==`f32`&&e!==`u32`&&e!==`i32`)throw Error(`Packed series only supports f32/u32/i32 channels. "${o}" is ${e}.`);let c=s.inputComponents??s.components??1;if(c!==1&&c!==2&&c!==4)throw Error(`Packed series only supports 1, 2, or 4 components. "${o}" is ${c}.`);let l=n.get(o)??o,u=i.get(l);if(u){if(u.scalarType!==e||u.components!==c)throw Error(`Packed alias "${l}" must keep type/components consistent.`);r.set(o,u);continue}let d={name:o,scalarType:e,components:c,offset:a,stride:0};r.set(o,d),i.set(l,d),a+=c}for(let e of r.values())e.stride=a;return{entries:r,stride:a}}function Ee({channels:e,layout:t,count:n}){let r=new Uint32Array(n*t.stride),i=new Set;for(let a of t.entries.values()){if(i.has(a))continue;i.add(a);let t=e[a.name];if(!t||!j(t))throw Error(`Missing series data for "${a.name}".`);let o=t.inputComponents??t.components??a.components,s=n*o,c=t.data;if(!c)throw Error(`Missing data for "${a.name}".`);let l=t.scale?.type??`identity`;if(a.scalarType===`u32`&&l===`index`&&c instanceof Float64Array){if(o!==2)throw Error(`Channel "${a.name}" requires inputComponents: 2 when providing Float64Array data.`);let e=new Uint32Array(c.length*2);ve(c,e),c=e}if(a.scalarType===`f32`&&!(c instanceof Float32Array))throw Error(`Channel "${a.name}" expects a Float32Array for f32 data`);if(a.scalarType===`u32`&&!(c instanceof Uint32Array))throw Error(`Channel "${a.name}" expects a Uint32Array for u32 data`);if(a.scalarType===`i32`&&!(c instanceof Int32Array))throw Error(`Channel "${a.name}" expects an Int32Array for i32 data`);if(c.length<s)throw Error(`Channel "${a.name}" length (${c.length}) is less than count (${n}).`);let u=new Uint32Array(c.buffer,c.byteOffset,c.length),{stride:d,offset:f,components:p}=a;if(p===1)for(let e=0,t=f;e<n;e++,t+=d)r[t]=u[e*o];else for(let e=0;e<n;e++){let t=e*d+f,n=e*o;for(let e=0;e<p;e++)r[t+e]=u[n+e]}}return r}var De=(globalThis.GPUTextureUsage?.TEXTURE_BINDING??0)|(globalThis.GPUTextureUsage?.COPY_DST??0);function Oe(e,t,n=De,r){let i=e.createTexture({label:r,size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:t.format,usage:n});return ke(e,i,t),i}function ke(e,t,n){e.queue.writeTexture({texture:t},N(n.data),{bytesPerRow:n.width*Ae(n.format),rowsPerImage:n.height},{width:n.width,height:n.height,depthOrArrayLayers:1})}function N(e){return e}function Ae(e){switch(e){case`r8uint`:return 1;case`r32float`:return 4;case`rg32float`:return 8;case`rgba8uint`:case`rgba8unorm`:case`rgba8unorm-srgb`:return 4;case`rgba16float`:return 8;default:return 4}}function je(e,t,n){for(let r of[`maxStorageBufferBindingSize`,`maxBufferSize`])if(t>e.limits[r])throw Error(`${n} requires ${t} bytes; ${r} allows ${e.limits[r]} bytes.`)}var P=`webgpu-renderer`;function F(e,t){return e+`: `+t}var Me=class{#e;#t;#n;#r=new Map;#i;#a=null;constructor(e,t,n,r=`mark`){this.#e=e,this.#t=t,this.#n=r,this.#o(),this.#i=Te(t,n,this.#r)}get packedSeriesLayoutEntries(){return this.#i.entries}getPackedSeriesInfo(){let e=this.#i;return new Map([[`series`,{stride:e.stride,channels:Array.from(e.entries,([e,t])=>({name:e,scalarType:t.scalarType,alias:this.#r.get(e)??e,offset:t.offset,components:t.components,stride:t.stride}))}]])}getBuffer(){return this.#a}inferCount(e){let t=null,n=!1;for(let[r,i]of Object.entries(this.#t)){if(!j(i))continue;n=!0;let a=e?.[r]??i.data;if(!a)throw Error(`Missing data for channel "${r}"`);let o=i.inputComponents??i.components??1,s=(i.scale?.type??`identity`)===`index`&&a instanceof Float64Array&&o===2?1:o;if(s<=0)throw Error(`Invalid input component count for "${r}"`);if(a.length%s!==0)throw Error(`Channel "${r}" length (${a.length}) must be divisible by ${s}.`);let c=a.length/s;if(t===null)t=c;else if(c!==t)throw Error(`Channel "${r}" count (${c}) does not match inferred count (${t}).`)}return n?t??0:null}#o(){this.#r.clear();let e=new Map;for(let[t,n]of Object.entries(this.#t)){if(!j(n))continue;let r=n.data;if(!r)continue;let i=e.get(r);i||(i=t,e.set(r,i)),this.#r.set(t,i)}}updateSeries(e,t){let n=this.#i;if(!n.stride)return!1;je(this.#e,Math.max(4,t*n.stride*4),this.#n+` series`);let r=new Map;for(let[t,n]of Object.entries(this.#t)){if(!j(n))continue;let i=e[t]??n.data;if(!i)throw Error(`Missing data for channel "${t}"`);let a=this.#r.get(t)??t,o=r.get(a);if(o&&o!==i){let e=this.#s(a);throw Error(`Series channels ${e.map(e=>`"${e}"`).join(`, `)} must share the same buffer.`)}r.set(a,i),n.data=i}let i=Ee({channels:this.#t,layout:n,count:t});return this.#c(i)}#s(e){let t=[];for(let[n,r]of this.#r.entries())r===e&&t.push(n);return t.length>0?t:[e]}#c(e){let t=Math.max(4,e.byteLength),n=!this.#a||this.#a.size<t;if(n){let e=this.#a;this.#a=this.#e.createBuffer({label:F(this.#n,`series`),size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e?.destroy()}return e.byteLength&&this.#e.queue.writeBuffer(this.#a,0,N(e)),n}destroy(){this.#a?.destroy(),this.#a=null}};function Ne({device:e,label:t=`mark`,layout:n,uniformBuffer:r,resourceLayout:i,getSeriesBuffer:a,getScaleResources:o,getScaleTableBuffer:s,extraTextures:c,extraBuffers:l}){let u=[{binding:0,resource:{buffer:r}}],d=1;for(let e of i){if(e.role===`series`){let t=a();if(!t)throw Error(`Missing buffer binding for "${e.name}".`);u.push({binding:d++,resource:{buffer:t}});continue}let n=o(e.name);if(e.role===`scaleTables`)u.push({binding:d++,resource:{buffer:s()}});else if(e.role===`rangeTexture`){let r=n?.rangeTexture?.texture;if(!r)throw Error(`Missing range texture for "${e.name}".`);u.push({binding:d++,resource:r.createView({label:F(t,`scale ${e.name} range texture view`)})})}else if(e.role===`rangeSampler`){let t=n?.rangeTexture?.sampler;if(!t)throw Error(`Missing range sampler for "${e.name}".`);u.push({binding:d++,resource:t})}else if(e.role===`extraTexture`){let n=c.get(e.name)?.texture;if(!n)throw Error(`Missing extra texture for "${e.name}".`);u.push({binding:d++,resource:n.createView({label:F(t,`${e.name} texture view`)})})}else if(e.role===`extraSampler`){let t=c.get(e.name)?.sampler;if(!t)throw Error(`Missing extra sampler for "${e.name}".`);u.push({binding:d++,resource:t})}else if(e.role===`extraBuffer`){let t=l.get(e.name)??null;if(!t)throw Error(`Missing extra buffer for "${e.name}".`);u.push({binding:d++,resource:{buffer:t}})}else throw Error(`Unknown resource binding role "${e.role}".`)}return e.createBindGroup({label:F(t,`bind group`),layout:n,entries:u})}function Pe(e){if(e===null)return null;let{interval:t,gapRanks:n}=e;if(!Array.isArray(t)||t.length!==2||!t.every(Number.isFinite)||t[1]<t[0]||!n&&t[0]===t[1]||n&&(n.length!==2||!n.every(Number.isFinite)||n[1]<n[0]))throw Error(`A band viewport requires a finite increasing interval and optional gap ranks.`);return{interval:[t[0],t[1]],...n?{gapRanks:[n[0],n[1]]}:{}}}function Fe(e,{count:t=256,interpolate:n}={}){let r=typeof e==`function`?e:Le(e,n),i=new Uint8Array(t*4);for(let e=0;e<t;e++){let n=Re(r(t>1?e/(t-1):0)),a=e*4;for(let e=0;e<4;e++)i[a+e]=n[e]*255}return{data:i,format:`rgba8unorm`,width:t,height:1}}function Ie(e){if(typeof e==`string`)return e;if(!Array.isArray(e))throw Error(`Invalid color stop: ${String(e)}`);let[t=0,n=0,r=0,i=1]=e,a=Math.max(t,n,r,i),o=a<=1?255:1,s=a<=1?i:i/255;return`rgba(${t*o}, ${n*o}, ${r*o}, ${s})`}function Le(e,t){let n=e.map(Ie),r=t??d,i=n.slice(0,-1).map((e,t)=>r(e,n[t+1]));return e=>{let t=e*i.length,n=Math.max(0,Math.min(i.length-1,Math.floor(t)));return i[n](t-n)}}function Re(e){let t=c(e);if(!t)throw Error(`Invalid color: `+e);let n=t.rgb(),r=Math.max(0,Math.min(1,n.opacity));return r===0?[0,0,0,0]:[n.r/255,n.g/255,n.b/255,r]}var ze=`uRangeTable_`,Be=`uDomainMapTable_`,I=`uDomain_`,L=`uRange_`,Ve=`uRangeCount_`,He=`domainMap_`,Ue=`uDomainMapCount_`,We=`uRangeTexture_`,Ge=`uRangeSampler_`,Ke=`getScaled_`,qe=`uScaleBase_`,Je=`uScaleExponent_`,Ye=`uScaleConstant_`,Xe=`uScalePaddingInner_`,Ze=`uScalePaddingOuter_`,Qe=`uScaleAlign_`,$e=`uScaleBand_`,et=`uSelection_`,tt=`uSelectionCount_`,nt=`selection_`,rt=`checkSelection_`,it=`isSelectionEmpty_`;function at(e,t){return`${et}${e}_${t}_active`}function ot(e,t){return`${et}${e}_${t}`}function st(e,t){return t===`f32`?e:`f32(${e})`}function ct(e){return e.replace(/^\n/,``).replace(/\n\s*$/,``)}function lt(e,t){let n=ct(t),r=e.body?`${e.body}\n${n}`:n;return{...e,body:r}}function ut(e,t){return`
    let unitValue = clamp(${t}, 0.0, 1.0);
    return getInterpolatedColor(${`${We}${e}`}, ${`${Ge}${e}`}, unitValue);
`}function dt(e){let t={expr:e.rawValueExpr,body:``};for(let n of e.steps)t=n(t);let n=t.body?ct(t.body):``,r=e.functionName??e.name,i=ct(e.useRangeTexture?ut(e.name,t.expr):`
    return ${t.expr};
`),a=n?`${n}\n${i}`:i;return`fn ${Ke}${r}(i: u32) -> ${e.returnType} {
${a}
}`}function ft(e){return t=>({...t,expr:st(t.expr,e)})}function pt(e){return t=>({...t,expr:`clampToDomain(${t.expr}, ${e})`})}function mt(e,t){return n=>({...n,expr:t({name:e,valueExpr:n.expr})})}function ht(){return e=>({...e,expr:`roundLikeD3(${e.expr})`})}function gt({name:e,domainLength:t,outputComponents:n,outputScalarType:r,useRangeTexture:i}){let a=i||n===1?r:`vec4<f32>`,o=e=>i||n===1?`${e}.x`:e;return n=>({...lt(n,`
    const DOMAIN_LEN: u32 = ${t}u;
    let value = ${n.expr};
    let descending = params.${I}${e}[DOMAIN_LEN - 1u].x <
        params.${I}${e}[0u].x;
    var slot: u32 = 0u;
    for (var i: u32 = 1u; i + 1u < DOMAIN_LEN; i = i + 1u) {
        let stop = params.${I}${e}[i].x;
        if (select(value >= stop, value <= stop, descending)) {
            slot = i;
        }
    }
    let d0 = params.${I}${e}[slot].x;
    let d1 = params.${I}${e}[slot + 1u].x;
    let denom = d1 - d0;
    var t = select(0.5, (value - d0) / denom, denom != 0.0);
    let r0: ${a} = ${o(`params.${L}${e}[slot]`)};
    let r1: ${a} = ${o(`params.${L}${e}[slot + 1u]`)};
    let unit = mix(r0, r1, t);
`),expr:`unit`})}function _t({name:e,domainLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${L}${e}[slot].x`:`params.${L}${e}[slot]`;return n=>({...lt(n,`
    let value = ${n.expr};
    const DOMAIN_LEN: u32 = ${t}u;
    var slot: u32 = 0u;
    for (var i: u32 = 0u; i < DOMAIN_LEN; i = i + 1u) {
        if (value >= params.${I}${e}[i].x) {
            slot = i + 1u;
        }
    }
    let out: ${i} = ${a};
`),expr:`out`})}function vt({name:e,rangeLength:t,outputComponents:n,outputScalarType:r}){let i=n===1?r:`vec4<f32>`,a=n===1?`params.${L}${e}[slot].x`:`params.${L}${e}[slot]`;return n=>({...lt(n,`
    let value = ${n.expr};
    let d0 = params.${I}${e}[0u].x;
    let d1 = params.${I}${e}[1u].x;
    let denom = d1 - d0;
    var t = select(0.0, (value - d0) / denom, denom != 0.0);
    t = clamp(t, 0.0, 1.0);
    const RANGE_LEN: u32 = ${t}u;
    let slot = min(RANGE_LEN - 1u, u32(floor(t * f32(RANGE_LEN))));
    let out: ${i} = ${a};
`),expr:`out`})}function yt(e,t,n=e){return`fn ${Ke}${n}(i: u32) -> ${t}`}function bt(e){return`readPacked2(params.${I}${e})`}function xt(e){return`readPacked3(params.${I}${e})`}function St(e){return`readPacked2(params.${L}${e})`}function Ct(e,t){return t===`u32`?e:`u32(f32(${e}))`}function wt({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,clamp:i,round:a,useRangeTexture:o},s){let c=[];return r!==`f32`&&c.push(ft(r)),i&&c.push(pt(bt(e))),c.push(mt(e,s)),a&&!o&&c.push(ht()),dt({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:o?`vec4<f32>`:`f32`,useRangeTexture:o})}var Tt={type:`identity`,input:`any`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:null,needsDomainMap:!1,needsOrdinalRange:!1},emit:Et};Object.freeze(Tt);function Et({name:e,functionName:t,rawValueExpr:n,outputComponents:r,outputScalarType:i}){return`${yt(e,r===1?i:`vec${r}<f32>`,t)} { return ${n}; }`}function Dt(e){if(!e||e.type==`identity`)return Tt;if(!e.definition)throw Error(`Scale "${e.type}" has no definition. Import and use its scale factory.`);return e.definition}function Ot(e){return Dt(e).type}function kt(e,t){let n=e.resources;return{stopKind:n.stopKind&&n.supportsPiecewise&&t?`piecewise`:n.stopKind,needsDomainMap:!!n.needsDomainMap,needsOrdinalRange:!!n.needsOrdinalRange}}function At(e,t){return e.output===`same`?t:`f32`}var jt={continuous:{getLengths:()=>({domainLength:2,rangeLength:2})},threshold:{getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length===0)throw Error(`Threshold scale on "${e}" must define a non-empty domain.`);if(r.length<2)throw Error(`Threshold scale on "${e}" must define at least two range entries.`);if(r.length!==n.length+1)throw Error(`Threshold scale on "${e}" requires range length of ${n.length+1}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}}},piecewise:{getLengths:({name:e,scale:t})=>{let n=Array.isArray(t.domain)?t.domain:[],r=Array.isArray(t.range)?t.range:[];if(n.length<2)throw Error(`Piecewise scale on "${e}" must define at least two domain entries.`);if(r.length<2)throw Error(`Piecewise scale on "${e}" must define at least two range entries.`);if(r.length!==n.length)throw Error(`Piecewise scale on "${e}" requires range length of ${n.length}, got ${r.length}.`);return{domainLength:n.length,rangeLength:r.length}}}};function Mt(e){return jt[e]}function Nt(e,t,n){let r=Dt(n);if(r.getStopLengths){let i=r.getStopLengths({name:e,kind:t,scale:n});if(i)return i}return Mt(t).getLengths({name:e,scale:n})}function Pt(e,t,n,r){let i=r===`threshold`?`Threshold`:`Piecewise`;if(!Array.isArray(t)||t.length<2)throw Error(`${i} scale on "${e}" must define at least two range entries.`);return t.map(t=>Ft(e,t,n,i))}function Ft(e,t,n,r){if(n===1){if(typeof t==`number`)return t;throw Error(`${r} scale on "${e}" expects numeric range values.`)}if(Array.isArray(t)){if(t.length===4)return t;if(t.length===3)return[...t,1]}if(typeof t==`string`)return Re(t);throw Error(`${r} scale on "${e}" expects vec4 range values or CSS colors.`)}function It(e,t,n){if(!Array.isArray(t)||t.length===0)throw Error(`Ordinal scale on "${e}" must define at least one range entry.`);return t.map(t=>Ft(e,t,n,`Ordinal`))}function Lt(e){return!Array.isArray(e)||e.length===0?!1:e.every(e=>typeof e==`string`||Array.isArray(e)&&(e.length===3||e.length===4))}function Rt(e){if(e<=0)return[];if(e===1)return[0];let t=e-1,n=Array(e);for(let r=0;r<e;r++)n[r]=r/t;return n}function zt(e){return typeof e==`function`}function Bt(e,t){if(!e)return!1;let n=Dt(e),r=zt(e.range),i=Lt(e.range);return!(r||e.interpolate!==void 0||i)||t!==4?!1:n.continuous}var Vt=4294967295,Ht=4294967295;function Ut(e){let t=e>>>0;return t^=t>>>16,t=Math.imul(t,2146121005),t^=t>>>15,t=Math.imul(t,2221713035),t^=t>>>16,t>>>0}function Wt(e,t){let n=[];for(let t of e)n.push([t,1]);return Gt(n,t)}function Gt(e,t={}){let n=Array.from(e),r=n.length,i=t.maxLoadFactor??.6;if(!(i>0&&i<1))throw Error(`maxLoadFactor must be between 0 and 1.`);let a=t.capacity??qt(Math.ceil(r/i));if(!Number.isSafeInteger(a)||a<1)throw Error(`capacity must be a positive power of two.`);if(a&a-1)throw Error(`capacity must be a power of two.`);let o=new Uint32Array(a*2);for(let e=0;e<a;e+=1)o[e*2]=Vt;let s=a-1;for(let[e,t]of n){let n=Kt(e,`key`);if(n===4294967295)throw Error(`Hash table keys must not equal the empty sentinel (0xffffffff).`);let r=Kt(t,`value`),i=Ut(n)&s,c=!1;for(let e=0;e<a;e+=1){let e=i*2,t=o[e];if(t===4294967295||t===n){o[e]=n,o[e+1]=r,c=!0;break}i=i+1&s}if(!c)throw Error(`Hash table insertion failed. Increase capacity or lower load factor.`)}return{table:o,capacity:a,size:r}}function Kt(e,t){if(!Number.isSafeInteger(e)||e<0||e>Ht)throw Error(`${t} must be a non-negative u32.`);return e>>>0}function qt(e){let t=Math.max(1,e);return--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t+1}function Jt(e){return(e?.type===`index`||e?.type===`band`)&&(e.gapEnabled??(e.gapWidth!==0&&e.gapWidth!==null&&(e.gapPositions?.length??0)>0))}function Yt(e,t,n=!1){let r=0,i=e.length;for(;r<i;){let a=r+i>>>1;e[a]<t||!n&&e[a]===t?r=a+1:i=a}return r}function Xt(e){let t=Array.from(new Set(e??[])).sort((e,t)=>e-t);if(t.some(e=>!Number.isSafeInteger(e)||e<0||e>=2**44))throw Error(`Gap positions must be integers in [0, 2^44).`);return t}var Zt=`
fn gapKeyGreater(a: vec2<u32>, b: vec2<u32>) -> bool {
    return a.x > b.x || (a.x == b.x && a.y > b.y);
}

fn cutRank(value: vec2<u32>, table: vec2<u32>, before: bool) -> u32 {
    var lo = 0u;
    var hi = table.y;
    while (lo < hi) {
        let mid = (lo + hi) / 2u;
        let offset = table.x + mid * 2u;
        let cut = vec2<u32>(scaleTables[offset], scaleTables[offset + 1u]);
        let less = cut.x < value.x || (cut.x == value.x && cut.y < value.y);
        if (less || (!before && all(cut == value))) { lo = mid + 1u; }
        else { hi = mid; }
    }
    return lo;
}

fn gapPlacementFactor(i: u32, axis: u32) -> f32 {
#if defined(PLACEMENT_ENABLED)
    let placement = getPlacementIndex(i);
    return placementRectangles[placement][axis + 2u];
#else
    return 1.0;
#endif
}

fn groupingGapsFit(range: vec2<f32>, geometry: vec4<f32>, placement: f32) -> bool {
    return abs(range.y - range.x) * placement > geometry.x * (geometry.z - geometry.y);
}

fn scaleIndexGaps(value: vec2<u32>, domain: vec3<f32>, range: vec2<f32>,
    table: vec2<u32>, geometry: vec4<f32>, paddingInner: f32,
    paddingOuter: f32, align: f32, band: f32, before: bool, placement: f32, minimumSpan: f32) -> f32 {
    let gap = geometry.x * sign(range.y - range.x) / max(placement, 1e-9);
    let available = range.y - range.x - gap * (geometry.z - geometry.y);
    let denominator = max(select(minimumSpan, 1e-9, geometry.w > 0.5), domain.z - paddingInner + 2.0 * paddingOuter);
    let step = available / select(1.0, denominator, denominator > 0.0);
    let start = range.x + (available - step * (domain.z - paddingInner)) * align;
    let hi = stableSub(f32(value.x) * 4096.0, domain.x);
    let lo = stableSub(f32(value.y), domain.y);
    let rank = f32(cutRank(value, table, before));
    return start + hi * step + lo * step + gap * (rank - geometry.y) + step * (1.0 - paddingInner) * band;
}

#if defined(BAND_GAPS_ENABLED)
fn scaleBandGaps(value: u32, domain: vec2<f32>, range: vec2<f32>,
    table: vec2<u32>, geometry: vec4<f32>, paddingInner: f32,
    paddingOuter: f32, align: f32, band: f32, placement: f32) -> f32 {
    let reverse = range.y < range.x;
    // Category lookup supplies a dense rank; reuse index gap projection.
    let numericDomain = vec3<f32>(domain.x, 0.0, domain.y - domain.x);
    return scaleIndexGaps(vec2<u32>(value >> 12u, value & 4095u),
        numericDomain, range, table, geometry, paddingInner, paddingOuter,
        select(align, 1.0 - align, reverse), select(band, 1.0 - band, reverse), false, placement, 0.0);
}
#endif
`,Qt=class{#e;#t;#n;#r;#i;#a=new Map;#o=new Map;#s=new Map;#c=null;#l=new Map;constructor({device:e,analysisByChannel:t,label:n=`mark`,getDefaultScaleRange:r,setUniformValue:i}){this.#e=e,this.#t=n,this.#n=r,this.#r=i,this.#i=t}get tableBuffer(){return this.#c}#u(e,t,n){let r=new Uint32Array(t.buffer,t.byteOffset,t.byteLength/4),i=this.#l.get(e);if(i&&r.length<=i.capacity)return i.data=r,i.publish=n,n(i.offset),this.#e.queue.writeBuffer(this.#c,i.offset*4,N(r)),!1;this.#l.set(e,{data:r,offset:0,capacity:Math.max(1,r.length),publish:n});let a=0;for(let e of this.#l.values())e.offset=a,a+=e.capacity;let o=Math.min(this.#e.limits.maxStorageBufferBindingSize,this.#e.limits.maxBufferSize);if(a*4>o){a=0;for(let e of this.#l.values())e.offset=a,e.capacity=Math.max(1,e.data.length),a+=e.capacity}je(this.#e,a*4,this.#t+` scale/gap tables`);let s=this.#e.createBuffer({label:F(this.#t,`scale/gap tables`),size:a*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});for(let e of this.#l.values())e.publish(e.offset),this.#e.queue.writeBuffer(s,e.offset*4,N(e.data));return this.#c?.destroy(),this.#c=s,!0}#d(e){let t=this.#i.get(e);if(!t)throw Error(`Missing channel analysis for "${e}".`);return t}getChannelResources(e){return this.#a.get(e)}#f(e){let t=this.#a.get(e);return t||(t={},this.#a.set(e,t)),t}#p(e){return this.#a.get(e)?.scaleStops}addScaleUniforms(e,t,n){Jt(n.scale)&&e.push({name:`gapTable_`+t,type:`u32`,components:2},{name:`gapGeometry_`+t,type:`f32`,components:4});let r=this.#d(t),i=r.stopKind;if(i){let{domainLength:a,rangeLength:o}=Nt(t,i,n.scale),s=r.outputComponents,c=r.useRangeTexture,l=s===1?r.outputScalarType:`f32`,u=c?1:s,d=c?`f32`:l;e.push({name:I+t,type:`f32`,components:1,arrayLength:a}),e.push({name:L+t,type:d,components:u,arrayLength:o})}for(let n of r.scaleDef.params)e.push({name:`${n.prefix}${t}`,type:`f32`,components:1});r.needsOrdinalRange&&(e.push({name:ze+t,type:`u32`,components:1}),e.push({name:Ve+t,type:`f32`,components:1})),r.needsDomainMap&&(e.push({name:Be+t,type:`u32`,components:2}),e.push({name:Ue+t,type:`f32`,components:1}))}initializeScale(e,t,n){Jt(n)&&(this.#s.set(e,{cuts:Xt(n.gapPositions),domain:n.type===`band`?[0,n.domain?.length??0]:this.#h(n.domain??[0,1]),width:n.gapWidth===void 0?6:n.gapWidth??0,ranks:n.type===`index`?n.gapDomain:void 0}),this.#v(),this.updateGapWidth(e,n.gapWidth===void 0?6:n.gapWidth));let r=this.#d(e),i=r.stopKind;if(i){let{domainLength:t,rangeLength:a}=Nt(e,i,n);this.#f(e).scaleStops={kind:i,domainLength:t,rangeLength:a},r.useRangeTexture&&a&&this.#r(L+e,Rt(a))}for(let t of r.scaleDef.params){let r=t.defaultValue;t.prop&&n[t.prop]!==void 0&&(r=n[t.prop]),this.#r(`${t.prefix}${e}`,r)}r.needsDomainMap&&this.#r(Ue+e,-1),this.#o.set(e,this.#m({name:e,channel:t,scale:n,analysis:r}))}getScaleUpdater(e){let t=this.#o.get(e);if(!t)throw Error(`Missing scale updater for "${e}".`);return t}#m({name:e,channel:t,scale:n,analysis:r}){let i=r.useRangeTexture,a=r.needsDomainMap,o=r.needsOrdinalRange,s=r.scaleDef,c=r.stopKind,l=c?this.#p(e):void 0,u=I+e,d=L+e,f=c===`continuous`?this.#n(e):void 0,p=r.outputComponents??1,m=p===1?r.outputScalarType:`f32`,h=t.scale?.interpolate,g=(e,t)=>{if(Array.isArray(e)||ArrayBuffer.isView(e))return e;throw Error(t)},_=e=>{if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(typeof e[t]!=`number`)return!1;return!0},v=a?t=>{if(!s.normalizeDomainMap)throw Error(`Scale "${r.scaleType}" does not provide domain map normalization.`);if(!Array.isArray(t)&&!ArrayBuffer.isView(t))throw Error(`Scale on "${e}" requires an explicit domain array.`);let i=t,a=s.normalizeDomainMap({name:e,scale:n,domain:i});return a?{needsRebind:this.#x(e,a.domainMap),domainUniform:a.domainUniform}:{needsRebind:!1}}:null,y=null,b=null;if(c){if(c===`continuous`){let t=l?.domainLength??2,r=s.normalizeDomain??(({name:e,domain:t,domainLength:n})=>{let r=g(t,`Scale on "${e}" expects a domain array.`);if(n&&r.length!==n)throw Error(`Scale domain for "${e}" expects ${n} entries, got ${r.length}.`);return r}),i=l?.rangeLength;y=i=>{let a=r({name:e,scale:n,domain:i,domainLength:t});a&&this.#r(u,a)},b=t=>{if(!Array.isArray(t))throw Error(`Scale on "${e}" expects a range array.`);if(i&&t.length!==i)throw Error(`Scale range for "${e}" expects ${i} entries, got ${t.length}.`);this.#r(d,t)}}else{if(!l)throw Error(`Scale on "${e}" has no recorded stop sizes.`);let t=l.domainLength,n=l.rangeLength,r=c===`threshold`?`Threshold`:`Piecewise`;y=n=>{let i=g(n,`${r} scale on "${e}" expects a domain array.`);if(i.length!==t)throw Error(`${r} scale on "${e}" expects ${t} domain entries, got ${i.length}.`);this.#r(u,i)},b=t=>{if(!Array.isArray(t))throw Error(`${r} scale on "${e}" expects a range array.`);if(t.length!==n)throw Error(`${r} scale on "${e}" expects ${n} range entries, got ${t.length}.`);if(p===1&&_(t)){this.#r(d,t);return}let i=Pt(e,t,p,c);this.#r(d,i)}}}let x=Pe(n.viewport??null),S=n.domain?.length??0,C=t=>{if(n.type!==`band`)throw Error(`Scale viewport requires a band scale.`);x=Pe(t);let r=x?.interval??[0,S];this.#r(u,r);let i=this.#s.get(e);i&&(i.domain=r,i.ranks=x?.gapRanks,this.#_(e))},w=e=>{let t=v?.(e);return y?y(t?.domainUniform??e):t?.domainUniform&&this.#r(u,t.domainUniform),t?.needsRebind??!1};return{updateDomain:(t,r)=>{let i=w(t);if(n.type===`band`)return S=t.length,C(x),i;let a=this.#s.get(e);return a&&(a.domain=this.#h(t),a.ranks=r,this.#_(e)),i},updateRange:i?t=>this.#y(e,t,l?.rangeLength,h):o?t=>{if(zt(t))throw Error(`Ordinal scale on "${e}" does not support interpolator ranges.`);if(!Array.isArray(t))throw Error(`Ordinal scale on "${e}" expects a range array.`);let n=t,r=p===1&&_(n)?n:It(e,n,p),i=this.#w(r,p,m);return this.#T(e,i,r.length)}:c?t=>{if(zt(t))throw Error(`Scale on "${e}" does not support interpolator ranges.`);let n=t??(c===`continuous`?f??t:t);if(!Array.isArray(n))throw Error(`Scale on "${e}" expects a range array.`);return b(n),!1}:()=>!1,updateViewport:C}}#h(e){let t=e.length===3?e[0]+e[1]:e[0];return[t,e.length===3?t+e[2]:e[1]]}#g(e){let t=this.#s.get(e);if(!t)throw Error(`Scale "${e}" was created without grouping gaps.`);return t}updateGapPositions(e,t){let n=this.#g(e),r=Xt(t);if(r.length===n.cuts.length&&r.every((e,t)=>e===n.cuts[t]))return!1;n.cuts=r;let i=this.#v();return this.#_(e),i}updateGapWidth(e,t){if(t!=null&&(!Number.isFinite(t)||t<0))throw Error(`Gap width must be finite and nonnegative.`);this.#g(e).width=t??0,this.#_(e)}#_(e){let{cuts:t,domain:n,width:r,ranks:i}=this.#g(e);this.#r(`gapGeometry_`+e,[r,i?.[0]??Yt(t,n[0]),i?.[1]??Yt(t,n[1],!0),+!!i])}#v(){let e=[],t=[],n=[];for(let[r,{cuts:i}]of this.#s){let a=t.find(e=>e.cuts.length===i.length&&i.every((t,n)=>e.cuts[n]===t)),o=a?.offset??e.length/2;if(!a){for(let t of i)e.push(Math.floor(t/4096),t%4096);t.push({cuts:i,offset:o})}n.push({name:r,offset:o*2,length:i.length})}let r=new Uint32Array(e.length?e:[0,0]);return this.#u(`gapCuts`,r,e=>{for(let t of n)this.#r(`gapTable_`+t.name,[e+t.offset,t.length])})}#y(e,t,n,r){let i=t,a;if(zt(i))a=Fe(i);else{if(!Lt(i))throw Error(`Interpolated color scale on "${e}" requires a color range.`);let t=i;if(n!==void 0&&t.length!==n)throw Error(`Scale on "${e}" expects ${n} range entries, got ${t.length}.`);a=Fe(t,{interpolate:r})}return this.#b(e,a)}#b(e,t){let n=this.#f(e),r=n.rangeTexture,i=!r,a=i?this.#e.createTexture({label:F(this.#t,`scale ${e} range texture`),size:{width:t.width,height:t.height,depthOrArrayLayers:1},format:t.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}):r.texture;return ke(this.#e,a,t),n.rangeTexture={texture:a,sampler:r?.sampler??this.#e.createSampler({label:F(this.#t,`scale ${e} range sampler`)}),width:t.width,height:t.height,format:t.format},i}#x(e,t){let n=this.#S(t);return this.#C(e,n.table,n.length)}#S(e){if(e.length===0)return{table:new Uint32Array([Vt,0]),length:0};let{table:t}=Gt(e.map((e,t)=>[e,t]));return{table:t,length:e.length}}#C(e,t,n){return this.#r(Ue+e,n),this.#u(`domainMap_`+e,t,n=>{this.#r(Be+e,[n,t.length/2])})}#w(e,t,n){if(t===1){let t=e;return n===`u32`?new Uint32Array(t):n===`i32`?new Int32Array(t):new Float32Array(t)}let r=new Float32Array(e.length*4);for(let t=0;t<e.length;t++)r.set(e[t],t*4);return r}#T(e,t,n){return this.#r(Ve+e,n),this.#u(`range_`+e,t,t=>{this.#r(ze+e,t)})}destroy(){for(let e of this.#a.values())e.rangeTexture?.texture.destroy();this.#c?.destroy(),this.#c=null,this.#l.clear(),this.#a.clear(),this.#o.clear(),this.#s.clear()}};function $t(e){if(!e||!Dt(e).resources.supportsPiecewise)return!1;let t=Array.isArray(e.domain)?e.domain.length:0,n=Array.isArray(e.range)?e.range.length:0;return t>2||n>2}function en(e){return e===`u32`?`u32`:e===`i32`?`i32`:`f32`}function tn(e){return e.data==null?e.value!=null||e.default!=null?`value`:`missing`:`series`}function nn(e,t){let n=tn(t),r=Dt(t.scale),i=Ot(t.scale),a=t.components??1,o=en(t.type),s=a===1?At(r,o):`f32`,c=n===`series`||i===`identity`?a:1,l=t.inputComponents??c,u=t.scale?.range,d=zt(u),f=Lt(u),p=d||t.scale?.interpolate!==void 0||f,m=Bt(t.scale,a),h=$t(t.scale),g=kt(r,h),_=i!==`identity`||h||m||a!==l,v=g.needsOrdinalRange,y=g.needsDomainMap,b=r.continuous,x=r.vectorOutput??`never`,S=a>1&&l===1&&i!==`identity`&&(x===`always`||x===`interpolated`&&p);return{name:e,channel:t,sourceKind:n,scaleType:i,scaleDef:r,outputComponents:a,inputComponents:l,scalarType:o,outputScalarType:s,useRangeTexture:m,isPiecewise:h,needsScaleFunction:_,needsOrdinalRange:v,needsDomainMap:y,stopKind:g.stopKind,interpolateEnabled:p,allowsScalarToVector:S,isContinuousScale:b,rangeIsFunction:d,rangeIsColor:f}}function rn(e){return e===`f32`||e===`u32`||e===`i32`}function an(e,t,n){if(t.scale?.viewport!=null&&t.scale.type!==`band`)return`Scale viewport on "${e}" requires a band scale.`;let{scaleType:r,outputComponents:i,inputComponents:a,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l,isPiecewise:u,needsDomainMap:d,scalarType:f,outputScalarType:p,scaleDef:m,interpolateEnabled:h}=n,g=m?.vectorOutput??`never`,_=g===`always`||g===`interpolated`&&h,v=_&&o;if(i>1&&!(i===1||(r===`identity`?a===i:_)))return`Channel "${e}" uses vector components but scale "${r}" only supports scalars.`;if(c&&!s)return`Channel "${e}" only supports function ranges with continuous scales.`;if(c&&i!==4)return`Channel "${e}" requires vec4 outputs when using function ranges.`;if(t.scale?.interpolate!==void 0){if(!l)return`Channel "${e}" requires a color range when interpolate is set.`;if(!s)return`Channel "${e}" only supports color interpolation with continuous scales.`;if(i!==4)return`Channel "${e}" requires vec4 outputs when interpolate is set.`}if(s&&!c&&l&&i!==4)return`Channel "${e}" requires vec4 outputs when using color ranges.`;let y=m?.input??`any`;if(y===`numeric`&&!rn(f))return`Channel "${e}" requires numeric input for "${r}" scale.`;if(y===`u32`&&f!==`u32`)return`Channel "${e}" requires u32 input for "${r}" scale.`;if(i>1&&f!==`f32`&&!v)return`Only f32 vectors are supported for "${e}" right now.`;let b=a===2&&i===1&&f===`u32`&&!!m?.allowsPackedScalarInput;return a>1&&f!==`f32`&&!b?`Only f32 vectors are supported for "${e}" input data.`:a!==i&&!v&&!b?`Channel "${e}" only supports mismatched input/output components when mapping scalars to vectors.`:m?.validate?.({name:e,channel:t,scaleType:r,outputComponents:i,inputComponents:a,scalarType:f,outputScalarType:p,isPiecewise:u,needsDomainMap:d,allowsScalarToVector:o,isContinuousScale:s,rangeIsFunction:c,rangeIsColor:l})||null}function on(e,t){if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`Predicate nodes must be objects.`);let n=e,r=Object.keys(n),i=[`compare`,`selection`,`selectionActive`,`all`,`any`,`not`].filter(e=>Object.hasOwn(n,e));if(i.length!==1)throw Error(`Predicate nodes must specify exactly one variant.`);let a=i[0];if(a===`all`||a===`any`){let e=n[a];if(!Array.isArray(e)||e.length===0)throw Error(`Predicate ${a} nodes must not be empty.`);if(r.length!==1)throw Error(`Predicate ${a} nodes cannot mix variants or leaf properties.`);e.forEach(e=>on(e,t))}else if(a===`not`){if(r.length!==1)throw Error(`Predicate not nodes cannot mix variants or leaf properties.`);on(n.not,t)}else if(a===`compare`){if(!t)throw Error(`Selection predicates cannot contain comparisons.`);if(r.some(e=>![`compare`,`left`,`right`].includes(e)))throw Error(`Comparison predicates cannot mix variants or leaf properties.`)}else if(a===`selectionActive`){let e=n.selectionActive;if(!e||typeof e!=`object`||r.length!==1)throw Error(`Selection activity requires a state reference.`);let t=e;if(typeof t.selection!=`string`||!t.selection)throw Error(`Selection activity requires a selection name.`);let i=t.type===`interval`;if(i){if(!Array.isArray(t.components)||!t.components.length||t.components.some(e=>typeof e!=`string`||!e)||new Set(t.components).size!==t.components.length)throw Error(`Interval selection activity requires distinct components.`)}else if(t.type!==`single`&&t.type!==`multi`)throw Error(`Selection activity has an invalid type.`);let a=i?[`selection`,`type`,`components`]:[`selection`,`type`];if(Object.keys(t).some(e=>!a.includes(e)))throw Error(i?`Interval selection activity has unsupported properties.`:`Selection activity has unsupported properties.`)}else{if(typeof n.selection!=`string`||!n.selection)throw Error(`Selection predicates require a selection name.`);if(n.empty!==void 0&&typeof n.empty!=`boolean`)throw Error(`Selection empty policy must be boolean.`);let e=n.type===`interval`;if(e){if(!Array.isArray(n.projections)||n.projections.length===0)throw Error(`Interval selections require non-empty projections.`)}else if(n.type!==`single`&&n.type!==`multi`||Object.hasOwn(n,`projections`))throw Error(`Selection predicates have an invalid type or projections.`);let t=e?[`selection`,`type`,`projections`,`empty`]:n.type===`multi`?[`selection`,`type`,`input`,`empty`]:[`selection`,`type`,`empty`];if(n.type===`multi`&&n.input!==void 0&&(typeof n.input!=`string`||!n.input))throw Error(`Multi selection input must be a nonempty string.`);if(r.some(e=>!t.includes(e)))throw Error(e?`Interval selection predicates cannot mix variants or leaf properties.`:`Selection predicates cannot mix variants or leaf properties.`)}return e}function sn(e){return e===void 0?void 0:on(e,!0)}function cn(e){return e===void 0?void 0:on(e,!1)}function ln(e,t,n){if(`all`in e||`any`in e){let r=`all`in e?`&&`:`||`;return`(${(`all`in e?e.all:e.any).map(e=>ln(e,t,n)).join(` ${r} `)})`}if(`not`in e)return`(!${ln(e.not,t,n)})`;if(`compare`in e){if(!n)throw Error(`Comparisons are only available in visibility predicates.`);return n(e)}let r=`selectionActive`in e?e.selectionActive:e,i=t.get(r.selection);if(!i||i.type!==r.type)throw Error(`Predicate references unknown or incompatible selection "${r.selection}".`);if(`selectionActive`in e)return`(!${it}${i.name}(i))`;if(e.type===`interval`){let t=e.projections.map(e=>{let t=i.projections?.findIndex(t=>t.component===e.component&&t.input===e.input&&t.secondaryInput===e.secondaryInput&&t.hitTest===(e.hitTest??`intersects`));if(t===void 0||t<0)throw Error(`Selection "${i.name}" has an unknown projection.`);return`${rt}${i.name}_p${t}(i)`}),n=`${it}${i.name}(i)`;return`(select(${t.join(` && `)}, ${e.empty===!1?`false`:`true`}, ${n}))`}return`${rt}${i.name}(i, ${e.empty===!1?`false`:`true`})`}function un(e){return`u_scalar_${e}`}function dn({predicate:e,channelIRs:t,channelNames:n,inputNames:r,scalarSlots:i,selectionDefs:a,functionName:o=`isInstanceVisible`}){let s=new Map(t.map(e=>[e.name,e])),c=new Map(a.map(e=>[e.name,e]));function l(e){if(!e||typeof e!=`object`)throw Error(`Visibility predicate operands must be objects.`);let t=Object.keys(e);if(t.length!==1)throw Error(`Visibility predicate operands must specify exactly one namespace.`);let a=t[0],o=e[a];if(typeof o!=`string`||!o)throw Error(`Visibility predicate ${a} operands require a name.`);if(a===`slot`){let e=i[o];if(!e)throw Error(`Visibility predicate references unknown slot "${o}".`);return{expression:`params.${un(o)}`,type:e.type}}if(a===`channel`&&n.has(o)||a===`input`&&r.has(o)){let e=s.get(o);if(!e||e.inputComponents!==1)throw Error(`Visibility predicate input "${o}" must be scalar.`);return{expression:e.rawValueExpr,type:e.scalarType}}throw Error(`Visibility predicate references unknown ${a} "${o}".`)}function u(e){if(![`<`,`<=`,`>`,`>=`].includes(e.compare))throw Error(`Visibility predicate has unsupported comparison "${e.compare}".`);let t=l(e.left),n=l(e.right);if(t.type!==n.type)throw Error(`Visibility predicate comparison types must match: ${t.type} and ${n.type}.`);return`(${t.expression} ${e.compare} ${n.expression})`}return`
fn ${o}(i: u32) -> bool {
    return ${e?ln(e,c,u):`true`};
}
`}function fn({channels:e,context:t}){let n={},r=new Map,{channelSpecs:i}=t;for(let a of Object.keys(i)){let i=pn({name:a,configChannel:e?.[a],context:t});i&&(n[a]=i.channel,r.set(a,i.analysis))}return mn(n,r,t),{channels:n,analysisByChannel:r}}function pn({name:e,configChannel:t,context:n}){let{channelSpecs:r}=n,i=r[e],a={type:i.type,components:i.components,scale:i.scale,value:i.default,...t};if(a.components||=1,j(a)&&!a.inputComponents&&(a.inputComponents=(a.scale?.type??`identity`)===`identity`?a.components:1),j(a)&&(t?.value!==void 0||t?.default!==void 0))throw Error(`Channel "${e}" must not specify both data and value.`);return j(a)&&(delete a.value,delete a.default),!j(a)&&a.value===void 0&&(a.value=a.default??i.default),i.optional&&!j(a)&&!M(a)?null:{channel:a,analysis:gn(e,a,n)}}function mn(e,t,n){let r=0;for(let[i,a]of Object.entries(e)){let o=a.conditions??[];if(!o.length)continue;let s=[];for(let a of o){let o={...a,when:a.when};if(!(`channel`in a)||!a.channel){s.push(o);continue}let c=`${i}__cond${r++}`,l=hn({name:i,analysisName:c,configChannel:a.channel,context:n});e[c]=l.channel,t.set(c,l.analysis),s.push({...o,channelName:c})}a.conditions=s}}function hn({name:e,analysisName:t,configChannel:n,context:r}){let{channelSpecs:i}=r,a={...n??{}};if(a.conditions!==void 0)throw Error(`Channel "${e}" conditions must not nest other conditions.`);if(a.default!==void 0)throw Error(`Channel "${e}" conditions must not include defaults.`);if(a.components||=i[e]?.components??1,j(a)&&!a.inputComponents&&(a.inputComponents=(a.scale?.type??`identity`)===`identity`?a.components:1),j(a)&&a.value!==void 0)throw Error(`Channel "${e}" conditions must not specify both data and value.`);if(!j(a)&&a.value===void 0)throw Error(`Channel "${e}" conditions must specify either data or value.`);if(j(a)&&(delete a.value,delete a.default),j(a)&&!a.type)throw Error(`Channel "${e}" conditions require a series data type.`);return{channel:a,analysis:gn(e,a,r,t)}}function gn(e,t,n,r=e){let{channelSpecs:i}=n;if(!Object.hasOwn(i,e))throw Error(`Unknown channel: ${e}`);let a=i[e];if(a?.components&&t.components!==a.components)throw Error(`Channel "${e}" must use ${a.components} components`);let o=nn(r,t),{scaleDef:s,outputComponents:c}=o,l=(s.allowsU32InputOverride===!0&&a?.type===`f32`&&t.type===`u32`||s.allowsF32InputOverride===!0&&a?.type===`u32`&&t.type===`f32`)&&(c===1||c===4);if(a?.type&&t.type&&t.type!==a.type&&!l)throw Error(`Channel "${e}" must use type "${a.type}"`);if(!a.optional&&!j(t)&&!M(t))throw Error(`Channel "${e}" must specify either data or value.`);if(j(t)&&!t.type)throw Error(`Channel "${e}" requires a series data type.`);if(a.optional&&!j(t)&&!M(t))return o;if(t.components&&![1,2,4].includes(t.components))throw Error(`Invalid component count for "${e}"`);if(t.inputComponents&&![1,2,4].includes(t.inputComponents))throw Error(`Invalid input component count for "${e}"`);let u=an(e,t,o);if(u)throw Error(u);if(t.conditions!==void 0&&!Array.isArray(t.conditions))throw Error(`Channel "${e}" conditions must be an array.`);if(Array.isArray(t.conditions))for(let n of t.conditions){if(!n||typeof n!=`object`)throw Error(`Channel "${e}" has an invalid condition entry.`);if(!n.when||typeof n.when!=`object`)throw Error(`Channel "${e}" conditions require a "when" predicate.`);let{when:t,value:r}=n;cn(t);let a=t=>{if(`all`in t||`any`in t)for(let e of`all`in t?t.all:t.any)a(e);else if(`not`in t)a(t.not);else if(`selection`in t&&t.type===`interval`)for(let n of t.projections){if(!Object.hasOwn(i,n.input))throw Error(`Channel "${e}" references unknown selection input "${n.input}".`);if(n.secondaryInput!==void 0&&!Object.hasOwn(i,n.secondaryInput))throw Error(`Channel "${e}" references unknown selection input "${n.secondaryInput}".`)}};if(a(t),n.channel){if(r!==void 0)throw Error(`Channel "${e}" conditions must not specify both channel and value.`);let t=n.channel;if(!t||typeof t!=`object`)throw Error(`Channel "${e}" conditions must include a channel config.`)}else{if(r===void 0)throw Error(`Channel "${e}" conditions require a value.`);if(o.outputComponents===1){if(typeof r!=`number`)throw Error(`Channel "${e}" conditions require scalar values.`)}else if(!Array.isArray(r)||r.length!==o.outputComponents)throw Error(`Channel "${e}" conditions require ${o.outputComponents}-component values.`)}}return o}var _n=[{binding:0,visibility:3,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:80}}],vn=[{binding:0,visibility:1,buffer:{type:`read-only-storage`}}];function yn(e,t,n){if(t.length>e.limits.maxBindGroups)throw Error(`${n} requires ${t.length} bind groups; maxBindGroups allows ${e.limits.maxBindGroups}.`);for(let r of t)if(r.length>e.limits.maxBindingsPerBindGroup)throw Error(`${n} requires ${r.length} bindings in one group; maxBindingsPerBindGroup allows ${e.limits.maxBindingsPerBindGroup}.`);let r=t.flat();for(let[t,i]of[[`vertex`,1],[`fragment`,2],[`compute`,4]]){let a=new Map;for(let{entry:e,name:t}of r){if(!(e.visibility&i))continue;let n=e.buffer?!e.buffer.type||e.buffer.type===`uniform`?`maxUniformBuffersPerShaderStage`:`maxStorageBuffersPerShaderStage`:e.texture?`maxSampledTexturesPerShaderStage`:e.sampler?`maxSamplersPerShaderStage`:e.storageTexture?`maxStorageTexturesPerShaderStage`:null;if(n){let e=a.get(n)??[];e.push(t),a.set(n,e)}}for(let[r,i]of a)if(i.length>e.limits[r])throw Error(`${n} ${t} stage requires ${i.length} resources; ${r} allows ${e.limits[r]}. Resources: ${i.join(`, `)}.`)}}var bn=`

fn getDiscreteColor(s: texture_2d<f32>, index: i32) -> vec4<f32> {
    let size = textureDimensions(s).x;
    let ix = i32(u32(index) % size);
    return textureLoad(s, vec2<i32>(ix, 0), 0).rgba;
}

fn getInterpolatedColor(s: texture_2d<f32>, samp: sampler, unitValue: f32) -> vec4<f32> {
    return textureSampleLevel(s, samp, vec2<f32>(unitValue, 0.0), 0.0).rgba;
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
`;function xn(e){let t=new Set,n=new Set,r=[];function i(e){if(!n.has(e)){if(t.has(e))throw Error(`Scale WGSL dependency cycle: ${e.type}`);t.add(e);for(let t of e.wgslDeps??[])i(t);e.wgsl&&r.push(e.wgsl),t.delete(e),n.add(e)}}for(let t of e)i(t);return`${bn}\n${r.join(`
`)}`}var Sn=`

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
`;function Cn(e){return`hashLookup_${e}`}function wn(e,t){return`
fn ${Cn(e)}(key: u32, maxProbes: u32) -> u32 {
    let size = ${t?.capacity??`arrayLength(&${e})`};
    if (size == 0u) {
        return HASH_NOT_FOUND;
    }
    let mask = size - 1u;
    var index = hash32(key) & mask;
    for (var probe = 0u; probe < maxProbes; probe += 1u) {
        let entry = ${t?`HashEntry(${t.buffer}[${t.offset} + index * 2u], ${t.buffer}[${t.offset} + index * 2u + 1u])`:`${e}[index]`};
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
`}function Tn(e,t){let n=[],r=!0,i=[];for(let[a,o]of e.split(/\r?\n/).entries()){let e=o.trim();if(!e.startsWith(`#`)){r&&i.push(o);continue}let s=e.match(/^#([A-Za-z]+)\b(.*)$/);if(!s)throw On(a,`Malformed directive`);let[,c,l]=s,u=l.trim();if(c===`if`){let e=En(u,t);n.push({parentActive:r,condition:e,elseSeen:!1}),r&&=e}else if(c===`else`){if(u)throw On(a,`#else does not accept an argument`);let e=n.at(-1);if(!e)throw On(a,`#else has no matching #if`);if(e.elseSeen)throw On(a,`#if block contains more than one #else`);e.elseSeen=!0,r=e.parentActive&&!e.condition}else if(c===`endif`){if(u)throw On(a,`#endif does not accept an argument`);let e=n.pop();if(!e)throw On(a,`#endif has no matching #if`);r=e.parentActive}else throw On(a,`Unsupported directive #${c}`)}if(n.length)throw Error(`Unterminated shader #if block.`);return i.join(`
`)}function En(e,t){let n=Dn(e),r=0,i=()=>n[r],a=()=>n[r++];function o(){if(i()===`!`)return a(),!o();if(i()===`(`){a();let e=c();if(a()!==`)`)throw Error(`Expected ")" in shader condition.`);return e}if(a()!==`defined`||a()!==`(`)throw Error(`Expected defined(NAME) in shader condition.`);let e=a();if(!e||!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Expected a symbol name in defined(NAME).`);if(a()!==`)`)throw Error(`Expected ")" after shader symbol name.`);return t.has(e)}function s(){let e=o();for(;i()===`&&`;){a();let t=o();e&&=t}return e}function c(){let e=s();for(;i()===`||`;){a();let t=s();e||=t}return e}if(!n.length)throw Error(`Shader #if requires a condition.`);let l=c();if(r!==n.length)throw Error(`Unexpected token "${n[r]}" in shader condition.`);return l}function Dn(e){let t=[],n=/defined|[A-Za-z_][A-Za-z0-9_]*|&&|\|\||!|\(|\)/gy,r=0;for(;r<e.length;){if(/\s/.test(e[r])){r+=1;continue}n.lastIndex=r;let i=n.exec(e);if(!i)throw Error(`Unexpected token near "${e.slice(r)}" in shader condition.`);t.push(i[0]),r=n.lastIndex}return t}function On(e,t){return Error(`${t} at shader line ${e+1}.`)}function kn(e,t,n){let r=e===`u32`?`u32`:e===`i32`?`i32`:`f32`,i=t=>{let n=Number(t??0);return e===`u32`?`u32(${Math.trunc(n)})`:e===`i32`?`i32(${Math.trunc(n)})`:Number.isInteger(n)?`${n}.0`:`${n}`};if(t===1)return i(Array.isArray(n)?n[0]:n);let a=(Array.isArray(n)?n:[n]).slice(0,t);for(;a.length<t;)a.push(0);return`vec${t}<${r}>(${a.map(i).join(`, `)})`}var An={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1}.DEV??!1;function jn({name:e,scaleDef:t,functionName:n,rawValueExpr:r,scalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,scaleConfig:c,domainMapName:l=null,useRangeTexture:u=!1}){let d=Array.isArray(c?.domain)?c.domain.length:0,f=Array.isArray(c?.range)?c.range.length:0,p=$t(c);if(u&&o!==4)throw Error(`Channel "${e}" requires vec4 output when using interpolate textures.`);let m=c?.round===!0&&o===1&&!u;return t.emit({name:e,functionName:n,scaleConfig:c,rawValueExpr:r,inputScalarType:i,inputComponents:a,outputComponents:o,outputScalarType:s,clamp:c?.clamp===!0,round:m,domainLength:d,rangeLength:f,isPiecewise:p,domainMapName:l,useRangeTexture:u})}function Mn({compiledChannels:e,uniformLayout:t,shaderBody:n,packedSeriesLayout:r,selectionDefs:i=[],visibleWhen:a,order:o,scalarSlots:s={},extraResources:c=[],placementIndex:l}){let{channels:u,channelIRs:d,channelNames:f,inputNames:p}=e,m=l&&`source`in l&&l.source===`draw`,h=[],g=[],_=[],v=[],y=[],b=[],x=[];function S(e,t=e.name){return`fn ${Ke}${t}(i: u32) -> ${e.outputComponents===1?e.outputScalarType:`vec${e.outputComponents}<f32>`} { return ${e.rawValueExpr}; }`}let C=1,w=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE,T=d.filter(e=>e.sourceKind===`series`),E=d.filter(e=>e.needsOrdinalRange),D=d.filter(e=>e.needsDomainMap),O=d.filter(e=>Jt(e.channel.scale)),k=O.length>0;if(k||E.length||D.length){let e=C++;h.push({binding:e,visibility:w,buffer:{type:`read-only-storage`}}),g.push({name:`scaleTables`,role:`scaleTables`}),_.push(`@group(1) @binding(${e}) var<storage, read> scaleTables: array<u32>;`)}let A=d.filter(e=>e.useRangeTexture),ee=new Set(t.map(({name:e})=>e)),te=new Map(d.map(e=>[e.name,e])),ne=new Map(i.map(e=>[e.name,e])),re=dn({predicate:a,functionName:o||k?`isInstanceVisibleBase`:`isInstanceVisible`,channelIRs:d,channelNames:f,inputNames:p,scalarSlots:s,selectionDefs:i}),ie=o?dn({predicate:o.when,functionName:`isInstanceOrderMatch`,channelIRs:d,channelNames:f,inputNames:p,scalarSlots:s,selectionDefs:i}):``,ae=O.map(({name:e,channel:t})=>{let n=t.scale.gapAxis??(e.startsWith(`y`)?`y`:`x`);return`groupingGapsFit(${St(e)}, params.gapGeometry_${e}, gapPlacementFactor(i, ${+(n===`y`)}u))`}),oe=o||k?`
fn isInstanceVisible(i: u32) -> bool {
    if (!isInstanceVisibleBase(i)) { return false; }
    ${k?`if (!(${ae.join(` && `)})) { return false; }`:``}
    ${o?`
    if (globals.orderPass == 0u) { return true; }
    let matches = isInstanceOrderMatch(i);
    return ((globals.orderPass & 3u) == 1u && matches) ||
        ((globals.orderPass & 3u) == 2u && !matches);
    `:`return true;`}
}
`:``;function se(e){let t=`${rt}${e.name}`,n=te.get(`uniqueId`);if(An&&e.type===`single`&&e.membershipUsed!==!1&&!n)throw Error(`Selection "${e.name}" requires a uniqueId channel.`);switch(e.type){case`single`:return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let selected = u32(params.${et}${e.name});
    if (allowEmpty && selected == 0u) { return true; }
    if (selected == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return id == selected;
}
fn ${it}${e.name}(i: u32) -> bool {
    return params.${et}${e.name} == 0u;
}
`;case`multi`:{let n=te.get(e.input??`uniqueId`),r=nt+e.name,i=Cn(r);return`
fn ${t}(i: u32, allowEmpty: bool) -> bool {
    let count = u32(params.${tt}${e.name});
    if (allowEmpty && count == 0u) { return true; }
    if (count == 0u) { return false; }
    let id = ${n?.rawValueExpr??`0u`};
    return ${i}(id, arrayLength(&${r})) != HASH_NOT_FOUND;
}
fn ${it}${e.name}(i: u32) -> bool {
    return params.${tt}${e.name} == 0u;
}
`}case`interval`:{let n=e.components??[],r=(e.projections??[]).map((r,i)=>{let a=n.indexOf(r.component),o=te.get(r.input),s=r.secondaryInput?te.get(r.secondaryInput):void 0;if(a<0||!o||r.secondaryInput&&!s)throw Error(`Selection "${e.name}" has an unresolved projection input or component.`);let c=at(e.name,a),l=ot(e.name,a),u=r.inputComponents===2,d=(e,t)=>u?`hpLessEq(${e}, ${t})`:`(${e} <= ${t})`,f=(e,t)=>u?`hpLess(${e}, ${t})`:`(${e} < ${t})`,p=u?`lo`:`min(bound.x, bound.y)`,m=u?`hi`:`max(bound.x, bound.y)`,h=o.rawValueExpr,g=s?.rawValueExpr,_=u?`    let bound0 = params.${l}.xy;
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
    return ${f(p,m)} && (${v});
}
`});return`
fn ${it}${e.name}(i: u32) -> bool {
    return ${n.map((t,n)=>`params.${at(e.name,n)} == 0u`).join(` || `)||`true`};
}
${r.join(`
`)}
`}default:throw Error(`Selection "${e.name}" has unsupported type "${e.type}".`)}}function ce(e,t){let{name:n,outputComponents:r,outputScalarType:i}=e;return`
fn ${Ke}${n}(i: u32) -> ${r===1?i:`vec${r}<f32>`} {
${(e.channel.conditions??[]).map(e=>{let t=ln(e.when,ne);return e.channelName?`    if (${t}) { return ${Ke}${e.channelName}(i); }`:`    if (${t}) { return ${kn(r===1?i:`f32`,r,e.value)}; }`}).join(`
`)}
    return ${Ke}${t}(i);
}
`}let le=new Set(d.filter(e=>e.channel.scale?.type===`index`&&Jt(e.channel.scale)).map(e=>e.channel.scale.gapPeer).filter(e=>e!==void 0));for(let e of le){let t=te.get(e);if(!t)throw Error(`Unknown grouping-gap peer channel "${e}".`);let n=e=>{if(e.channel.scale?.type!==`index`)return`fallback`;if(e.inputComponents===2)return e.rawValueExpr;let t=`u32(${e.rawValueExpr})`;return`vec2<u32>(${t} >> 12u, ${t} & 4095u)`},r=(t.channel.conditions??[]).map(e=>`    if (${ln(e.when,ne)}) { return ${e.channelName?n(te.get(e.channelName)):`fallback`}; }`);y.push(`fn gapPeer_${e}(i: u32, fallback: vec2<u32>) -> vec2<u32> {
${r.join(`
`)}
    return ${n(t)};
}`)}let ue=new Set;for(let e of Object.keys(u))ue.add(`${e}_DEFINED`);O.some(({channel:e})=>e.scale.type===`band`)&&ue.add(`BAND_GAPS_ENABLED`),l&&(ue.add(`PLACEMENT_ENABLED`),m&&ue.add(`DRAW_PLACEMENT`));let de=r??new Map;if(An&&T.length>0&&de.size===0)throw Error(`Packed series layout is required for series channels.`);if(T.length){let e=C++;h.push({binding:e,visibility:w,buffer:{type:`read-only-storage`}}),g.push({name:`series`,role:`series`}),_.push(`@group(1) @binding(${e}) var<storage, read> series: array<u32>;`)}for(let e of T){let{name:t}=e;if(e.inputComponents>1&&e.scalarType!==`f32`&&(e.scalarType!==`u32`||e.inputComponents!==2||e.scaleType!==`index`))throw Error(`Channel "${t}" does not support non-f32 vector inputs.`);let n=de.get(t);if(An&&!n)throw Error(`Packed series layout is missing entry for "${t}".`);if(An&&n.scalarType!==e.scalarType)throw Error(`Packed series type mismatch for "${t}". Expected ${e.scalarType}, got ${n.scalarType}.`);if(An&&n.components!==e.inputComponents)throw Error(`Packed series component mismatch for "${t}". Expected ${e.inputComponents}, got ${n.components}.`);let{offset:r,stride:i,components:a,scalarType:o}=n,s=a===1?o:`vec${a}<${o}>`,c=Array.from({length:a},(e,t)=>`series[base${t?` + ${t}u`:``}]`),l=a===1?c[0]:`vec${a}<u32>(${c.join(`, `)})`;v.push(`fn read_${t}(i: u32) -> ${s} {
    let base = ${r}u + i * ${i}u;
    return ${o===`u32`?l:`bitcast<${s}>(${l})`};
}`)}if(i.length>0){i.some(e=>e.projections?.some(e=>e.inputComponents===2))&&b.push(`
fn hpLessEq(a: vec2<u32>, b: vec2<u32>) -> bool {
    return a.x < b.x || (a.x == b.x && a.y <= b.y);
}
fn hpLess(a: vec2<u32>, b: vec2<u32>) -> bool {
    return a.x < b.x || (a.x == b.x && a.y < b.y);
}
`);for(let e of i)b.push(se(e))}for(let e of E){let{name:t}=e,n=e.outputScalarType,r=e.outputComponents!==1,i=r?`vec4<f32>`:n,a=r?`vec4<u32>(scaleTables[offset], scaleTables[offset + 1u], scaleTables[offset + 2u], scaleTables[offset + 3u])`:`scaleTables[offset]`;v.push(`fn readRange_${t}(index: u32) -> ${i} {
    let offset = params.${ze}${t} + index * ${r?4:1}u;
    return ${!r&&n===`u32`?a:`bitcast<${i}>(${a})`};
}`)}for(let e of A){let{name:t}=e,n=C++;h.push({binding:n,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{sampleType:`float`}}),g.push({name:t,role:`rangeTexture`}),_.push(`@group(1) @binding(${n}) var ${We}${t}: texture_2d<f32>;`);let r=C++;h.push({binding:r,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,sampler:{type:`filtering`}}),g.push({name:t,role:`rangeSampler`}),_.push(`@group(1) @binding(${r}) var ${Ge}${t}: sampler;`)}for(let e of c){let t=C++,n=e.visibility===`vertex`?GPUShaderStage.VERTEX:e.visibility===`fragment`?GPUShaderStage.FRAGMENT:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,r=e.wgslName??e.name;if(e.kind===`buffer`)h.push({binding:t,visibility:n,buffer:{type:e.bufferType??`read-only-storage`}}),g.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var<storage, read> ${r}: ${e.wgslType??`array<f32>`};`);else if(e.kind===`texture`){let i=e.dimension??`2d`,a=e.sampleType??`float`,o=a===`uint`?`u32`:a===`sint`?`i32`:`f32`,s=i===`2d-array`?`texture_2d_array<${o}>`:`texture_2d<${o}>`;h.push({binding:t,visibility:n,texture:{sampleType:a,viewDimension:i===`2d-array`?`2d-array`:`2d`}}),g.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var ${r}: ${s};`)}else e.kind===`sampler`&&(h.push({binding:t,visibility:n,sampler:{type:e.samplerType??`filtering`}}),g.push({name:e.name,role:e.role}),x.push(`@group(1) @binding(${t}) var ${r}: sampler;`))}for(let e of d){let{name:t}=e,n=(e.channel.conditions?.length??0)>0,r=n?`${t}_base`:t;e.needsScaleFunction?y.push(jn({name:t,functionName:r,scaleDef:e.scaleDef,rawValueExpr:e.rawValueExpr,scalarType:e.scalarType,inputComponents:e.inputComponents,outputComponents:e.outputComponents,outputScalarType:e.outputScalarType,scaleConfig:e.channel.scale,useRangeTexture:e.useRangeTexture,domainMapName:e.needsDomainMap?`${He}${t}`:null})):y.push(S(e,r)),n&&y.push(ce(e,r))}if(An)for(let{name:e,needsOrdinalRange:t,needsDomainMap:n}of d){if(t&&!ee.has(`uRangeCount_${e}`))throw Error(`Ordinal scale on "${e}" requires uniform "${Ve}${e}".`);if(n&&!ee.has(`uDomainMapCount_${e}`))throw Error(`Scale on "${e}" requires uniform "${Ue}${e}".`)}let fe=t.map(({name:e,type:t,components:n,arrayLength:r})=>{let i=t===`u32`?`u32`:t===`i32`?`i32`:`f32`,a=n===1?i:n===2?`vec2<${i}>`:`vec4<${i}>`;return`    ${e}: ${r==null?a:`array<vec4<${i}>, ${r}>`},`}).join(`
`),pe=xn(new Set(d.filter(e=>e.needsScaleFunction).map(e=>e.scaleDef))),me=[...D.map(e=>He+e.name),...i.filter(e=>e.type===`multi`).map(e=>nt+e.name)],he=me.map(e=>{let t=D.find(t=>He+t.name===e);return t?wn(e,{buffer:`scaleTables`,offset:`params.${Be}${t.name}.x`,capacity:`params.${Be}${t.name}.y`}):wn(e)}).join(`
`),ge=me.length>0;return{shaderCode:Tn(`
// Pipeline specialization keeps picking geometry separate from visible geometry.
override pickingEnabled: bool = false;

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
${k?Zt:``}
${ge?Sn:``}

struct Params {
${fe}
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

${he}

${re}

${ie}

${oe}

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
    if (pickingEnabled && color.a <= 0.0) {
        discard;
    }
    return encodePickId(in.pickId);
}

`,ue),resourceBindings:h,resourceLayout:g}}function Nn(e,t,n,r,i,a){return JSON.stringify([e,t,n,r,i,a])}function Pn({device:e,cache:t,globalBindGroupLayout:n,format:r,pickFormat:i,compiledChannels:a,uniformLayout:o,shaderBody:s,usesPickingEnabledInVertex:c=!1,packedSeriesLayout:l,selectionDefs:u,visibleWhen:d,order:f,scalarSlots:p={},extraResources:m,primitiveTopology:h=`triangle-list`,placementBindGroupLayout:g,placementIndex:_,label:v}){let{shaderCode:y,resourceBindings:b,resourceLayout:x}=Mn({compiledChannels:a,uniformLayout:o,shaderBody:s,packedSeriesLayout:l,selectionDefs:u,visibleWhen:d,order:f,scalarSlots:p,extraResources:m,placementIndex:_}),S=!!(_&&g),C=[{entry:{binding:0,visibility:3,buffer:{type:`uniform`}},name:`mark uniforms`},...b.map((e,t)=>({entry:e,name:x[t].role+` `+x[t].name}))];yn(e,[_n.map(e=>({entry:e,name:`global uniforms`})),C,...S?[vn.map(e=>({entry:e,name:`placement rectangles`}))]:[]],v);let w=Nn(b,r,i,h,S,c),T=t.getOrCreate(y,w,t=>{let a={id:t,firstBorrowerLabel:v,borrowerLabels:new Set([v])},o=`${P} program template #${t} (first used by ${v})`,s=e.createBindGroupLayout({label:F(o,`bind group layout`),entries:C.map(({entry:e})=>e)}),l=e.createShaderModule({label:F(o,`shader`),code:y}),u={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}},d={layout:e.createPipelineLayout({label:F(o,`pipeline layout`),bindGroupLayouts:[n,s,...S?[g]:[]]}),vertex:{module:l,entryPoint:`vs_main`},primitive:{topology:h}},f=new Map,p=t=>{let n=f.get(t);return n||(n=e.createRenderPipeline({label:F(o,t==1?`render pipeline`:`${t}x render pipeline`),...d,fragment:{module:l,entryPoint:`fs_main`,targets:[{format:r,blend:u}]},multisample:{count:t}}),f.set(t,n)),n},m;return{bindGroupLayout:s,getPipeline:p,getPickPipeline:()=>{let t=c?{pickingEnabled:1}:void 0;return m??=e.createRenderPipeline({label:F(o,`picking pipeline`),...d,vertex:{...d.vertex,constants:t},fragment:{module:l,constants:{pickingEnabled:1},entryPoint:`fs_pick`,targets:[{format:i}]}}),m},diagnostics:a}});T.diagnostics.borrowerLabels.add(v);let E=x.map(e=>Object.freeze({...e}));return Object.freeze(E),{...T,resourceLayout:E}}function Fn(e){return Array.isArray(e)&&e.length===2&&typeof e[0]==`number`&&typeof e[1]==`number`}var In=[0,0],Ln=[0,0,0,0];function Rn(e,t,n){if(!t||typeof t.component!=`string`||!t.component)throw Error(`Interval selection "${e}" projections require a component.`);if(typeof t.input!=`string`||!t.input)throw Error(`Interval selection "${e}" projections require an input.`);if(Object.keys(t).some(e=>![`component`,`input`,`secondaryInput`,`hitTest`].includes(e)))throw Error(`Interval selection "${e}" projection has unsupported properties.`);let r=n(t.input);if(r.inputComponents!==1&&(r.inputComponents!==2||r.scalarType!==`u32`))throw Error(`Interval selection "${e}" requires a scalar or packed numeric input "${t.input}".`);if(t.secondaryInput!==void 0){let i=n(t.secondaryInput);if(i.inputComponents!==r.inputComponents||i.scalarType!==r.scalarType)throw Error(`Interval selection "${e}" requires matching representations for inputs "${t.input}" and "${t.secondaryInput}".`)}if(t.hitTest!==void 0&&(!t.secondaryInput||![`intersects`,`encloses`,`endpoints`].includes(t.hitTest)))throw Error(`Interval selection "${e}" has an invalid hit-test mode.`);return{...t,hitTest:t.hitTest??`intersects`,scalarType:r.scalarType,inputComponents:r.inputComponents}}function zn(e,t){if(!t||typeof t.selection!=`string`||!t.selection||![`single`,`multi`,`interval`].includes(t.type))throw Error(`Selection predicates require a named selection and type.`);if(t.type===`interval`&&`components`in t&&(!Array.isArray(t.components)||t.components.length===0||t.components.some(e=>typeof e!=`string`||!e)||new Set(t.components).size!==t.components.length))throw Error(`Interval selection "${t.selection}" requires distinct components.`);let n=e.get(t.selection);if(n){if(n.type!==t.type)throw Error(`Selection "${t.selection}" must keep a single type.`);if(t.type===`interval`&&`components`in t){if(n.declaredComponents&&(n.declaredComponents.length!==t.components.length||n.declaredComponents.some(e=>!t.components.includes(e))))throw Error(`Selection "${t.selection}" must keep the same components.`);n.declaredComponents=Array.from(t.components);for(let e of t.components)n.components?.includes(e)||n.components?.push(e)}return n}let r={name:t.selection,type:t.type,membershipUsed:!1};return t.type===`interval`&&(r.components=`components`in t?Array.from(t.components):[],`components`in t&&(r.declaredComponents=Array.from(t.components)),r.representations=new Map,r.projections=[]),e.set(r.name,r),r}function Bn(e,t,n){if(e){if(`all`in e||`any`in e)for(let r of`all`in e?e.all:e.any)Bn(r,t,n);else if(`not`in e)Bn(e.not,t,n);else if(`selectionActive`in e)zn(t,e.selectionActive);else if(`selection`in e){let r=zn(t,e);if(r.membershipUsed=!0,e.type===`multi`){let t=e.input??`uniqueId`,i=n(t);if(i.scalarType!==`u32`||i.inputComponents!==1)throw Error(`Multi selection "${e.selection}" requires a scalar u32 input "${t}".`);if(r.input&&r.input!==t)throw Error(`Multi selection "${e.selection}" must keep one input binding.`);r.input=t}if(e.type!==`interval`)return;if(!Array.isArray(e.projections)||!e.projections.length)throw Error(`Interval selection "${e.selection}" must specify non-empty projections.`);for(let t of e.projections){let i=Rn(e.selection,t,n);r.components?.includes(i.component)||r.components?.push(i.component);let a=r.representations?.get(i.component);if(a&&(a.scalarType!==i.scalarType||a.inputComponents!==i.inputComponents))throw Error(`Interval selection "${e.selection}" component "${i.component}" must keep one comparison representation.`);r.representations?.set(i.component,{scalarType:i.scalarType,inputComponents:i.inputComponents}),r.projections?.some(e=>e.component===i.component&&e.input===i.input&&e.secondaryInput===i.secondaryInput&&e.hitTest===i.hitTest)||r.projections?.push(i)}}}}function Vn(e,t,n,r){let i=new Map,a=e=>{let n=t.get(e);if(!n)throw Error(`Selection references unknown input "${e}".`);return n};for(let t of Object.values(e))for(let e of t.conditions??[])Bn(e.when,i,a);Bn(n,i,a),Bn(r?.when,i,a);for(let e of i.values())if(e.declaredComponents&&e.components?.some(t=>!e.declaredComponents?.includes(t)))throw Error(`Selection "${e.name}" projects an undeclared component.`);if(!e.uniqueId&&Array.from(i.values()).some(e=>e.membershipUsed&&e.type===`single`))throw Error(`Selections of type "single" require the "uniqueId" channel.`);return i}function Hn(e,t){return`all`in e||`any`in e?(`all`in e?e.all:e.any).some(e=>Hn(e,t)):`not`in e?Hn(e.not,t):`selectionActive`in e?e.selectionActive.selection===t:e.selection===t}var Un=class{#e;#t;#n;#r;#i;#a=new Map;constructor({device:e,channels:t,analysisByChannel:n,visibleWhen:r,order:i,label:a=`mark`,setUniformValue:o}){this.#e=e,this.#t=a,this.#n=o,this.#r=Vn(t,n,r,i),this.#i=new Map(Array.from(this.#r.values()).filter(e=>i&&Hn(i.when,e.name)).map(e=>[e.name,!1])),this.orderActive=!1}#o(e,t){this.#i.has(e)&&(this.#i.set(e,t),this.orderActive=this.#i.values().some(Boolean))}get selectionDefs(){return Array.from(this.#r.values())}addSelectionUniforms(e){for(let t of this.#r.values())if(t.type===`single`)e.push({name:et+t.name,type:`u32`,components:1});else if(t.type===`interval`)for(let[n,r]of(t.components??[]).entries()){e.push({name:at(t.name,n),type:`u32`,components:1});let i=t.representations?.get(r);i&&e.push({name:ot(t.name,n),type:i.scalarType,components:i.inputComponents===2?4:2})}else if(t.type===`multi`)e.push({name:tt+t.name,type:`u32`,components:1});else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}getExtraResourceDefs(){let e=[];for(let t of this.#r.values()){if(t.type!==`multi`)continue;let n=nt+t.name;e.push({name:n,kind:`buffer`,role:`extraBuffer`,wgslName:n,wgslType:`array<HashEntry>`,bufferType:`read-only-storage`,visibility:`vertex`})}return e}initializeSelections(e){for(let t of this.#r.values())if(t.type===`single`)this.updateSelection(t.name,{type:`single`,id:0},e);else if(t.type===`interval`)this.updateSelection(t.name,{type:`interval`,intervals:{}},e);else if(t.type===`multi`)this.updateSelection(t.name,{type:`multi`,ids:new Uint32Array},e);else throw Error(`Selection "${t.name}" has unsupported type "${t.type}".`)}updateSelection(e,t,n){let r=this.#r.get(e);if(!r)throw Error(`Unknown selection "${e}".`);if(t.type!==r.type)throw Error(`Selection "${e}" must remain type "${r.type}".`);if(t.type===`single`)this.#n(et+e,t.id),this.#o(e,t.id!==0);else if(t.type===`interval`){let n=t.intervals??{},i=r.components??[];for(let t of Object.keys(n))if(!i.includes(t))throw Error(`Selection "${e}" cannot update unknown component "${t}".`);let a=i.map(t=>{let i=Object.hasOwn(n,t),a=n[t];if(i&&a!==null&&!Fn(a))throw Error(`Selection "${e}" component "${t}" requires two numeric bounds or null.`);let o=a!=null,s=r.representations?.get(t);return{active:o,bounds:s?o?s.inputComponents===2?Array.from(a).flatMap(e=>Array.from(ge(e))):Array.from(a):s.inputComponents===2?Ln:In:void 0}}),o=!0;for(let[t,{active:n,bounds:r}]of a.entries())o&&=n,this.#n(at(e,t),+!!n),r&&this.#n(ot(e,t),r);this.#o(e,o)}else if(t.type===`multi`){let r=nt+e,i=this.#a.get(e),a=i?.buffer.size/(Uint32Array.BYTES_PER_ELEMENT*2),o=a!==void 0&&t.ids.length/a<=.6,{table:s,size:c}=Wt(t.ids,o?{capacity:a}:void 0);if(je(this.#e,s.byteLength,this.#t+` selection `+e),this.#n(tt+e,c),this.#o(e,c>0),!i||i.buffer.size<s.byteLength){let t=this.#e.createBuffer({label:F(this.#t,`selection ${e}`),size:s.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return n.set(r,t),this.#a.set(e,{buffer:t}),i?.buffer.destroy(),this.#e.queue.writeBuffer(t,0,N(s)),!0}this.#e.queue.writeBuffer(i.buffer,0,N(s))}else throw Error(`Selection "${e}" has unsupported type.`);return!1}};function Wn(e,t){if(e.sourceKind===`missing`)return null;let{name:n,outputComponents:r,inputComponents:i,scalarType:a,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}=e,p=e.channel,m=e.sourceKind===`series`?`series`:`dynamic`in p&&p.dynamic?`uniform`:`literal`;return{name:n,channel:p,sourceKind:m,rawValueExpr:m===`series`?`read_${n}(${t})`:m===`uniform`?`params.u_${n}`:kn(a,i,p.value??p.default),scalarType:a,outputComponents:r,inputComponents:i,outputScalarType:o,scaleType:s,scaleDef:c,useRangeTexture:l,needsScaleFunction:u,needsOrdinalRange:d,needsDomainMap:f}}function Gn(e,t){let n=[];for(let r of e.values()){let e=Wn(r,t);e&&n.push(e)}return n}function Kn({channels:e,analysisByChannel:t,channelNames:n,inputNames:r,seriesIndexExpression:i=`i`}){return{channels:e,analysisByChannel:t,channelIRs:Gn(t,i),channelNames:n,inputNames:r}}function qn(e,t){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "inputs" must be an object.`);let n={},r=e;for(let[e,i]of Object.entries(r)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar input "${e}" must be a valid identifier.`);if(t.has(e))throw Error(`Scalar input "${e}" conflicts with a visual channel.`);if(!i||typeof i!=`object`||!ArrayBuffer.isView(i.data)||i.data instanceof DataView)throw Error(`Scalar input "${e}" must specify typed-array data.`);if(i.type!==`f32`&&i.type!==`u32`&&i.type!==`i32`)throw Error(`Scalar input "${e}" must specify type "f32", "u32", or "i32".`);n[e]={data:i.data,type:i.type,components:1,inputComponents:1}}return n}function Jn(e){if(e==null)return{};if(typeof e!=`object`||Array.isArray(e))throw Error(`Mark "scalarSlots" must be an object.`);let t={},n=e;for(let[e,r]of Object.entries(n)){if(!/^[A-Za-z_][A-Za-z0-9_]*$/.test(e))throw Error(`Scalar slot "${e}" must be a valid identifier.`);if(!r||typeof r!=`object`)throw Error(`Scalar slot "${e}" must be an object.`);Xn(e,r.type,r.value),t[e]=r}return t}function Yn(e){if(e===void 0)return;if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`Mark "order" must be an object.`);let t=e,n=cn(t.when);if(!n)throw Error(`Mark "order" must specify a selection predicate.`);let r=t.matching??`last`;if(r!==`first`&&r!==`last`)throw Error(`Mark "order.matching" must be "first" or "last".`);return{when:n,matching:r}}function Xn(e,t,n){if(t!==`f32`&&t!==`u32`&&t!==`i32`)throw Error(`Scalar slot "${e}" must specify type "f32", "u32", or "i32".`);if(typeof n!=`number`||Number.isNaN(n))throw Error(`Scalar slot "${e}" must not contain NaN.`);if(t===`u32`&&(!Number.isInteger(n)||n<0||n>4294967295))throw Error(`Scalar slot "${e}" requires a valid u32 value.`);if(t===`i32`&&(!Number.isInteger(n)||n<-2147483648||n>2147483647))throw Error(`Scalar slot "${e}" requires a valid i32 value.`)}var Zn=class{#e=!1;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m=0;#h=!1;#g=!1;#_;constructor(e,t,n={label:`mark`}){this.renderer=e,this.device=e.device,this.label=n.label,this._markConfig=t;let r=fn({channels:t.channels,context:{channelSpecs:this.channelSpecs}});this._channels=r.channels,this.antialiasing=this._resolveAntialiasing();let i=new Set(Object.keys(this._channels));this.#n=this.#v();let a=new Set(i);for(let e of this.#n)a.delete(e);this._placementIndex=t.placementIndex;let o=qn(this._placementIndex&&`data`in this._placementIndex?{...t.inputs??{},__placementIndex:this._placementIndex}:t.inputs,i);this.#t=Jn(t.scalarSlots);let s=sn(t.visibleWhen);this._order=Yn(t.order),this._channels={...this._channels,...o};for(let[e,t]of Object.entries(o))r.analysisByChannel.set(e,nn(e,t));let c=Kn({channels:this._channels,analysisByChannel:r.analysisByChannel,channelNames:a,inputNames:new Set(Object.keys(o)),seriesIndexExpression:typeof t.seriesIndexExpression==`string`?t.seriesIndexExpression:void 0});this.#r=this.#y(),this._seriesBuffers=new Me(this.device,this._channels,this.channelSpecs,this.label),this.count=t.count??this._seriesBuffers.inferCount()??1,this.#i=new Qt({device:this.device,analysisByChannel:c.analysisByChannel,label:this.label,getDefaultScaleRange:e=>this.getDefaultScaleRange(e),setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this.#a=new Un({device:this.device,channels:this._channels,analysisByChannel:c.analysisByChannel,visibleWhen:s,order:this._order,label:this.label,setUniformValue:(e,t)=>this._setUniformValue(e,t)}),this._uniformBufferState=null,this._extraTextures=new Map,this._extraBuffers=new Map,this._borrowedExtraTextures=new Set,this._borrowedExtraBuffers=new Set,this.#_={batchUpdates:e=>this.#E(e),series:{replace:(e,t)=>{this._assertAlive(),this.replaceSeries(e,t)}},scales:{},values:{},properties:{},extraValues:{},scalarSlots:{},selections:{}},this.#k(),this.#O(),this._initializeExtraResources(),this.#a.initializeSelections(this._extraBuffers);let l=[...this.#a.getExtraResourceDefs(),...this.getExtraResourceDefs()],{bindGroupLayout:u,getPipeline:d,getPickPipeline:f,diagnostics:p,resourceLayout:m}=Pn({device:this.device,cache:e._programTemplateCache,globalBindGroupLayout:e._globalBindGroupLayout,format:e.format,pickFormat:e.pickFormat,compiledChannels:c,uniformLayout:this.#s,shaderBody:this.shaderBody,usesPickingEnabledInVertex:this.usesPickingEnabledInVertex,packedSeriesLayout:this._seriesBuffers.packedSeriesLayoutEntries??void 0,selectionDefs:this.#a.selectionDefs,visibleWhen:s,order:this._order,scalarSlots:this.#t,extraResources:l,primitiveTopology:this.primitiveTopology,placementBindGroupLayout:e._placementBindGroupLayout,placementIndex:this._placementIndex,label:this.label});this.#o=m,this.#p=p,this.#c=this.device.createBuffer({label:F(this.label,`uniforms`),size:this._uniformBufferState.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.#A();let h=this._markConfig.dynamicValues??{};for(let[e,t]of Object.entries(h))this._setUniformValue(e,t.value);for(let[e,t]of Object.entries(this.#t))this._setUniformValue(un(e),t.value);this._writeUniforms(),this.#b(),this.#l=u,this.#d=d,this.#f=f,this.updateSeries(Object.fromEntries(Object.entries(this._channels).filter(([,e])=>j(e)).map(([e,t])=>[e,t.data])),this.count)}get drawCount(){return this.count}get _orderActive(){return this.#a.orderActive}resolveDrawRange(e,t){return{firstInstance:e,instanceCount:t}}get channelSpecs(){return{}}getExtraUniformLayout(){return[]}getExtraResourceDefs(){return[]}_initializeExtraResources(){}get shaderBody(){return``}get usesPickingEnabledInVertex(){return!1}_resolveAntialiasing(){return`shader`}get primitiveTopology(){return`triangle-list`}get verticesPerInstance(){return 6}getDefaultScaleRange(e){}updateSeries(e,t,n=!1){let r=t??this._seriesBuffers.inferCount(e);this.count=r??this.count??1,(this._seriesBuffers.updateSeries(e,this.count)||n||!this.#u)&&this._rebuildBindGroup(),this.renderer.markPickingDirty()}replaceSeries(e,t){this.updateSeries(this._resolveSeries(e),t)}_resolveSeries(e){let t={};for(let[n,r]of this.#r){if(r.length>1)throw Error(`Series replacement for channel "${n}" is not supported because it has multiple series-backed branches.`);let i=e[n];if(i===void 0)throw Error(`Series replacement is missing channel "${n}".`);t[r[0]]=i}return t}#v(){let e=new Set;for(let t of Object.values(this._channels))for(let n of t.conditions??[])n.channelName&&e.add(n.channelName);return e}#y(){let e=new Map;for(let[t,n]of Object.entries(this._channels)){if(this.#n.has(t))continue;let r=[];j(n)&&r.push(t);for(let e of n.conditions??[]){if(!e.channelName)continue;let t=this._channels[e.channelName];t&&j(t)&&r.push(e.channelName)}r.length>0&&e.set(t,r)}return e}_rebuildBindGroup(){this.#u=Ne({device:this.device,label:this.label,layout:this.#l,uniformBuffer:this.#c,resourceLayout:this.#o,getScaleTableBuffer:()=>this.#i.tableBuffer,getSeriesBuffer:()=>this._seriesBuffers.getBuffer(),getScaleResources:e=>this.#i.getChannelResources(e),extraTextures:this._extraTextures,extraBuffers:this._extraBuffers})}debugResources(e=this.constructor.name){}getSlotHandles(){return this.#_}#b(){let e=(e,t)=>(e[t]||(e[t]={}),e[t]),t=(e,t)=>(e[t]||(e[t]={}),e[t]),n=(e,t)=>{e.default=t,e.setDomain=t.setDomain,e.setViewport=t.setViewport,e.setRange=t.setRange,e.setGapPositions=t.setGapPositions,e.setGapWidth=t.setGapWidth},r=(e,t)=>{e.default=t,e.set=t.set};for(let[i,a]of Object.entries(this._channels)){if(this.#n.has(i))continue;a.scale&&n(e(this.#_.scales,i),this.#x(i)),M(a)&&a.dynamic&&r(t(this.#_.values,i),this.#S(i));let o=a.conditions??[];if(o.length)for(let[n,r]of o.entries()){if(!r.channelName)continue;let a=this._channels[r.channelName];if(a){if(a.scale){let t=e(this.#_.scales,i);t.conditions||={},t.conditions[n]=this.#x(r.channelName)}if(M(a)&&a.dynamic){let e=t(this.#_.values,i);e.conditions||={},e.conditions[n]=this.#S(r.channelName)}}}}let i=this._markConfig.dynamicValues??{};for(let e of Object.keys(i))this.#_.extraValues[e]=this.#C(e);for(let e of Object.keys(this.#t))this.#_.scalarSlots[e]=this.#w(e);for(let e of this.#a.selectionDefs)this.#_.selections[e.name]=this.#T(e)}#x(e){let t=this.#i.getScaleUpdater(e);return{setViewport:e=>{this._assertAlive(),t.updateViewport(e),this._queueSlotUpdate(!1)},setGapPositions:t=>{this._assertAlive(),this._queueSlotUpdate(this.#i.updateGapPositions(e,t))},setGapWidth:t=>{this._assertAlive(),this.#i.updateGapWidth(e,t),this._queueSlotUpdate(!1)},setDomain:(e,n)=>{this._assertAlive();let r=t.updateDomain(e,n);this._queueSlotUpdate(r)},setRange:e=>{this._assertAlive();let n=t.updateRange(e);this._queueSlotUpdate(n)}}}#S(e){let t=`u_${e}`;if(!this._uniformBufferState?.entries.has(t))throw Error(`Uniform "${t}" is not available for updates.`);return{set:e=>{this._assertAlive(),this._setUniformValue(t,e),this._queueSlotUpdate(!1)}}}#C(e){if(!this._uniformBufferState?.entries.has(e))throw Error(`Uniform "${e}" is not available for updates.`);return{set:t=>{this._assertAlive(),this._setExtraUniformValue(e,t),this._queueSlotUpdate(!1)}}}#w(e){let t=this.#t[e];if(!t)throw Error(`Unknown scalar slot "${e}".`);let n=un(e);if(!this._uniformBufferState?.entries.has(n))throw Error(`Uniform "${n}" is not available for updates.`);return{set:r=>{this._assertAlive(),Xn(e,t.type,r),this._setUniformValue(n,r),this._queueSlotUpdate(!1)}}}_setExtraUniformValue(e,t){this._setUniformValue(e,t)}#T(e){let t=t=>{this._assertAlive();let n=this.#a.updateSelection(e.name,t,this._extraBuffers);this._queueSlotUpdate(n)};return e.type===`single`?{type:`single`,set:e=>t({type:`single`,id:e})}:e.type===`multi`?{type:`multi`,set:e=>t({type:`multi`,ids:e})}:{type:`interval`,components:e.components??[],set:e=>t({type:`interval`,intervals:e})}}#E(e){this._assertAlive(),this.#m++;try{e()}finally{this.#m--,this.#m===0&&this.#D()}}_queueSlotUpdate(e){this.#h=!0,this.#g||=e,this.#m===0&&this.#D()}#D(){this.#h&&(this._writeUniforms(),this.#g&&this._rebuildBindGroup(),this.renderer.markPickingDirty(),this.#h=!1,this.#g=!1)}#O(){let e=Math.min(this.device.limits.maxUniformBufferBindingSize,this.device.limits.maxBufferSize),t=this._uniformBufferState.byteLength;if(t<=e)return;let n=this.#a.selectionDefs.filter(e=>e.type===`interval`).map(e=>`"${e.name}" (${e.components?.length??0} components)`).join(`, `);throw Error(`Uniform buffer for interval selection ${n||`mark`} requires ${t} bytes, exceeding the device limit of ${e} bytes.`)}#k(){let e=[];for(let[t,n]of Object.entries(this._channels))M(n)&&n.dynamic&&e.push({name:`u_${t}`,type:n.type??`f32`,components:n.components??1}),j(n)&&n.scale&&this.#i.addScaleUniforms(e,t,n),M(n)&&n.scale&&this.#i.addScaleUniforms(e,t,n);for(let[t,n]of Object.entries(this.#t))e.push({name:un(t),type:n.type,components:1});this.#a.addSelectionUniforms(e),this.#s=e.concat(this.getExtraUniformLayout()),this.#s.length===0&&this.#s.push({name:`dummy`,type:`f32`,components:1}),this._uniformBufferState=new we(this.#s)}#A(){for(let[e,t]of Object.entries(this._channels)){if((j(t)||M(t))&&t.scale){this.#i.initializeScale(e,t,t.scale);let n=this.#i.getScaleUpdater(e);n.updateDomain(t.scale.domain,t.scale.gapDomain);let r=t.scale.range??this.getDefaultScaleRange(e);r!==void 0&&n.updateRange(r)}M(t)&&t.dynamic&&this._setUniformValue(`u_${e}`,t.value)}this._initializeExtraUniforms()}_initializeExtraUniforms(){}_setUniformValue(e,t){this._uniformBufferState?.setValue(e,t)}_writeUniforms(){this._uniformBufferState&&this._uniformBufferState.byteLength!==0&&this.device.queue.writeBuffer(this.#c,0,this._uniformBufferState.data)}prepareDraw(e,t){e.setPipeline(this.#d(t.sampleCount)),e.setBindGroup(1,this.#u)}preparePick(e){e.setPipeline(this.#f()),e.setBindGroup(1,this.#u)}draw(e,t){e.draw(this.verticesPerInstance,t.instanceCount,0,t.firstInstance)}destroy(){if(!this.#e){this.#e=!0,this.#c.destroy(),this._seriesBuffers.destroy(),this.#i.destroy();for(let[e,t]of this._extraBuffers)this._borrowedExtraBuffers.has(e)||t.destroy();this._extraBuffers.clear();for(let[e,{texture:t}]of this._extraTextures)this._borrowedExtraTextures.has(e)||t.destroy();this._extraTextures.clear()}}_assertAlive(){if(this.renderer._assertAlive(),this.#e)throw Error(`${this.constructor.name} has been destroyed.`)}},Qn={type:`linear`,input:`numeric`,output:`f32`,params:[],continuous:!0,vectorOutput:`always`,wgsl:`
fn scaleLinear(value: f32, domain: vec2<f32>, range: vec2<f32>) -> f32 {
    let domainSpan = domain.y - domain.x;
    let rangeSpan = range.y - range.x;
    let unit = select(0.5, (value - domain.x) / domainSpan, domainSpan != 0.0);
    return unit * rangeSpan + range.x;
}
`,resources:{stopKind:`continuous`,supportsPiecewise:!0,needsDomainMap:!1,needsOrdinalRange:!1},validate:er,emit:$n};Object.freeze(Qn);function $n(e){let{name:t,functionName:n,rawValueExpr:r,inputScalarType:i,outputComponents:a,outputScalarType:o,clamp:s,round:c,useRangeTexture:l,domainLength:u,rangeLength:d}=e,f=u||2,p=d||2;if(f<2||p<2)throw Error(`Linear scale on "${t}" requires at least two domain and range entries.`);if(f!==p)throw Error(`Linear scale on "${t}" requires matching domain/range arrays.`);if(f===2&&p===2&&(l||a===1))return wt({name:t,functionName:n,rawValueExpr:r,inputScalarType:i,clamp:s,round:c,useRangeTexture:l},({name:e,valueExpr:t})=>`scaleLinear(${t}, ${bt(e)}, ${St(e)})`);let m=l?`vec4<f32>`:a===1?o:`vec${a}<f32>`,h=[];if(i!==`f32`&&h.push(ft(i)),s){let e=`vec2<f32>(params.${I}${t}[0].x, params.${I}${t}[${f}u - 1u].x)`;h.push(pt(e))}return h.push(gt({name:t,domainLength:f,outputComponents:a,outputScalarType:o,useRangeTexture:l})),c&&!l&&h.push(ht()),dt({name:t,functionName:n,rawValueExpr:r,steps:h,returnType:m,useRangeTexture:l})}function er({name:e,channel:t,outputComponents:n,inputComponents:r,isPiecewise:i}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but linear scales only support scalars or vec4 outputs.`;if(!i)return null;let a=t.scale?.domain,o=t.scale?.range;return!Array.isArray(a)||a.length<2?`Piecewise scale on "${e}" requires at least two domain entries.`:!Array.isArray(o)||o.length<2?`Piecewise scale on "${e}" requires at least two range entries.`:a.length===o.length?r===1?null:`Piecewise scale on "${e}" requires scalar input values.`:`Piecewise scale on "${e}" requires range length of ${a.length}, got ${o.length}.`}function R(e,t){return{...t,type:e.type,definition:e}}var tr=Qn;function z(e={}){return R(tr,e)}var nr={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:z(),default:.5},y:{components:1,scale:z(),default:.5},xOffset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:100},shape:{type:`u32`,components:1,default:0},strokeWidth:{type:`f32`,components:1,default:2},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.3,.5,.7,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},angle:{type:`f32`,components:1,default:0},gradientStrength:{type:`f32`,components:1,default:0},inwardStroke:{type:`u32`,components:1,default:0},minPickingSize:{type:`f32`,components:1,default:2}},rr=`
${xe}

fn distanceToRatio(d: f32) -> f32 {
    return clamp(d * globals.dpr + 0.5, 0.0, 1.0);
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

    var quad = array<vec2<f32>, 4>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 1.0)
    );

    let size = getScaled_size(i);
    var diameter = sqrt(size);

    var strokeWidth = getScaled_strokeWidth(i);
    let strokeOpacity = getScaled_strokeOpacity(i);

    if (strokeOpacity <= 0.0) {
        strokeWidth = 0.0;
    }

    // WebGL clamps subpixel fill geometry before enlarging the picking sprite.
    if (pickingEnabled && (strokeWidth <= 0.0 || getScaled_inwardStroke(i) > 0u)) {
        diameter = max(diameter, 1.0 / globals.dpr);
    }

    let aaPadding = 1.0 / globals.dpr;
    let strokePadding = select(
        strokeWidth,
        0.0,
        getScaled_inwardStroke(i) > 0u
    );
    let padding = strokePadding + aaPadding;

    // Match WebGL's enlarged point sprite without expanding its silhouette
    // into the corners of the bounding quad.
    let total = select(diameter + padding,
        max(diameter + padding, getScaled_minPickingSize(i)), pickingEnabled);
    let local = quad[v];
    let center = projectClampedPosition(
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
        vec2<f32>(getScaled_x(i), getScaled_y(i)),
        vec2<f32>(getScaled_xOffset(i) + getScaled_dx(i), getScaled_yOffset(i) + getScaled_dy(i)), i);
#else
        vec2<f32>(getScaled_x(i) + getScaled_dx(i), getScaled_y(i) + getScaled_dy(i)),
        vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i)), i);
#endif
    let centerX = center.x;
    let centerY = center.y;
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
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
        clip,
#else
        applyPlacementClipForPoint(clip, centerClip, i),
#endif
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

    if (pickingEnabled) {
        if (d > in.halfStrokeWidth) { discard; }
        return vec4<f32>(1.0);
    }

    var fillColor = in.fill;
    var strokeColor = in.stroke;

    fillColor.a = fillColor.a * in.fillOpacity;
    strokeColor.a = strokeColor.a * in.strokeOpacity;

    if (in.gradientStrength > 0.0) {
        fillColor = mix(fillColor, vec4<f32>(vec3<f32>(1.0), fillColor.a), -d * in.gradientStrength / max(r, 0.0001));
    }

    fillColor = premultiplyAlpha(fillColor);
    strokeColor = premultiplyAlpha(strokeColor);

    let fillCoverage = distanceToRatio(-d);
    var color = fillColor * fillCoverage;
    if (in.halfStrokeWidth > 0.0) {
        let inward = in.inwardStroke > 0u;
        let innerCoverage = distanceToRatio(
            -d - select(in.halfStrokeWidth, 2.0 * in.halfStrokeWidth, inward)
        );
        let outerCoverage = select(distanceToRatio(in.halfStrokeWidth - d), fillCoverage, inward);
        color = innerCoverage * fillColor
            + (fillCoverage - innerCoverage) * (strokeColor + (1.0 - strokeColor.a) * fillColor)
            + (outerCoverage - fillCoverage) * strokeColor;
    }

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
`,ir=class extends Zn{get usesPickingEnabledInVertex(){return!0}get primitiveTopology(){return`triangle-strip`}get verticesPerInstance(){return 4}get channelSpecs(){return nr}get shaderBody(){return rr}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`)return[0,this.renderer._globals.width];if(e===`y`)return[0,this.renderer._globals.height]}}},ar=Math.PI/180,or=Math.PI/2,sr=Math.PI*2;function cr(e,t,n,r,i,a,o,s,c){let l=o*ar,u=Math.sin(l),d=Math.cos(l);n=Math.abs(n),r=Math.abs(r);let f=(d*(s-e)+u*(c-t))*.5,p=(d*(c-t)-u*(s-e))*.5,m=f*f/(n*n)+p*p/(r*r);m>1&&(m=Math.sqrt(m),n*=m,r*=m);let h=d/n,g=u/n,_=-u/r,v=d/r,y=h*s+g*c,b=_*s+v*c,x=h*e+g*t,S=_*e+v*t,C=1/((x-y)**2+(S-b)**2)-.25;C<0&&(C=0);let w=Math.sqrt(C);a==i&&(w=-w);let T=.5*(y+x)-w*(S-b),E=.5*(b+S)+w*(x-y),D=Math.atan2(b-E,y-T),O=Math.atan2(S-E,x-T)-D;O<0&&a===1?O+=sr:O>0&&a===0&&(O-=sr);let k=Math.ceil(Math.abs(O/(or+.001))),A=[];for(let e=0;e<k;e++)A.push([T,E,D+e*O/k,D+(e+1)*O/k,n,r,u,d]);return A}function lr(e){let[t,n,r,i,a,o,s,c]=e,l=c*a,u=-s*o,d=s*a,f=c*o,p=.5*(i-r),m=Math.sin(p*.5),h=8/3*m*m/Math.sin(p),g=Math.cos(r),_=Math.sin(r),v=Math.cos(i),y=Math.sin(i),b=t+g-h*_,x=n+_+h*g,S=t+v,C=n+y,w=S+h*y,T=C-h*v;return[l*b+u*x,d*b+f*x,l*w+u*T,d*w+f*T,l*S+u*C,d*S+f*C]}var ur={m:2,l:2,h:1,v:1,z:0,c:6,s:4,q:4,t:2,a:7},dr=/[mlhvzcsqta]([^mlhvzcsqta]*)/gi,fr=/^[+-]?(([0-9]*\.[0-9]+)|([0-9]+\.)|([0-9]+))([eE][+-]?[0-9]+)?/,pr=/^((\s+,?\s*)|(,\s*))/,mr=/^[01]/;function hr(e){let t=[],n=e.match(dr)||[];for(let e of n){let n=e[0],r=n.toLowerCase(),i=ur[r],a=gr(r,i,e.slice(1).trim()),o=a.length;if(o<i||o&&o%i!==0)throw Error(`Invalid SVG path, incorrect parameter count.`);if(t.push([n,...a.slice(0,i)]),o!==i){r===`m`&&(n=n===`M`?`L`:`l`);for(let e=i;e<o;e+=i)t.push([n,...a.slice(e,e+i)])}}if(t.length===0&&e.trim()!==``)throw Error(`Invalid SVG path, no commands found.`);return t}function gr(e,t,n){let r=[];for(let i=0;t&&i<n.length;)for(let a=0;a<t;a++){let t=e===`a`&&(a===3||a===4)?mr:fr,o=n.slice(i).match(t);if(o===null)throw Error(`Invalid SVG path, incorrect parameter type.`);i+=o[0].length,r.push(+o[0]);let s=n.slice(i).match(pr);s!==null&&(i+=s[0].length)}return r}function _r(e){let t=hr(e),n=[],r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0,d=``,f=1/0,p=1/0,m=-1/0,h=-1/0,g=(...e)=>{for(let t=0;t<e.length;t+=2)f=Math.min(f,e[t]),p=Math.min(p,e[t+1]),m=Math.max(m,e[t]),h=Math.max(h,e[t+1])};for(let e of t){let t=e[0],f=t===t.toLowerCase(),p=t.toUpperCase(),m=e=>f?r+e:e,h=e=>f?i+e:e;if(p===`M`)r=m(e[1]),i=h(e[2]),a=r,o=i,n.push({type:`M`,x:r,y:i}),g(r,i);else if(p===`L`)r=m(e[1]),i=h(e[2]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`H`)r=m(e[1]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`V`)i=h(e[1]),n.push({type:`L`,x:r,y:i}),g(r,i);else if(p===`C`){let t=m(e[1]),a=h(e[2]),o=m(e[3]),l=h(e[4]);r=m(e[5]),i=h(e[6]),n.push({type:`C`,x1:t,y1:a,x2:o,y2:l,x:r,y:i}),g(t,a,o,l,r,i),s=o,c=l}else if(p===`S`){let t=d===`C`||d===`S`,a=t?2*r-s:r,o=t?2*i-c:i,l=m(e[1]),u=h(e[2]);r=m(e[3]),i=h(e[4]),n.push({type:`C`,x1:a,y1:o,x2:l,y2:u,x:r,y:i}),g(a,o,l,u,r,i),s=l,c=u}else if(p===`Q`){let t=m(e[1]),a=h(e[2]);r=m(e[3]),i=h(e[4]),n.push({type:`Q`,x1:t,y1:a,x:r,y:i}),g(t,a,r,i),l=t,u=a}else if(p===`T`){let t=d===`Q`||d===`T`,a=t?2*r-l:r,o=t?2*i-u:i;r=m(e[1]),i=h(e[2]),n.push({type:`Q`,x1:a,y1:o,x:r,y:i}),g(a,o,r,i),l=a,u=o}else if(p===`A`){let t=m(e[6]),a=h(e[7]),o=e[1],l=e[2];if(o===0||l===0)n.push({type:`L`,x:t,y:a}),g(t,a);else{let u=cr(t,a,o,l,e[4],e[5],e[3],r,i);for(let e of u){let[t,r,i,a,o,l]=lr(e);n.push({type:`C`,x1:t,y1:r,x2:i,y2:a,x:o,y:l}),g(t,r,i,a,o,l),s=i,c=a}}r=t,i=a}else if(p===`Z`)n.push({type:`Z`}),r=a,i=o;else throw Error(`Unsupported SVG path command: ${t}`);p!==`C`&&p!==`S`&&p!==`A`&&(s=r,c=i),p!==`Q`&&p!==`T`&&(l=r,u=i),d=p}return{commands:n,bounds:f===1/0?null:{xMin:f,yMin:p,xMax:m,yMax:h}}}var vr=Object.freeze({tileSize:128,spread:32,shapePadding:40,gutter:1,cubicTolerance:.25}),yr=0,br=1,xr=Math.sin(3),Sr=12,Cr=4;function wr(e,t){return Math.abs(e.x-t.x)<=1e-9&&Math.abs(e.y-t.y)<=1e-9}function Tr(e,t){return{x:(e.x+t.x)*.5,y:(e.y+t.y)*.5}}function Er(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function B(e){let t=Math.hypot(e.x,e.y);return t<=1e-12?null:{x:e.x/t,y:e.y/t}}function Dr(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Or(e,t){return e.x*t.y-e.y*t.x}function kr(e,t){return e.x*t.x+e.y*t.y}function Ar(e,t){return kr(e,t)<=0||Math.abs(Or(e,t))>xr}function jr(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Mr(e){let t=[],n=null,r=null,i=null;for(let a of e.commands)if(a.type===`M`){if(n)throw Error(`Sparse path atlas requires closed contours.`);r={x:a.x,y:a.y},i=r,n=[]}else if(a.type===`L`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};wr(r,e)||n.push({kind:`line`,p0:r,p1:Tr(r,e),p2:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`Q`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};n.push({kind:`quadratic`,p0:r,p1:{x:a.x1,y:a.y1},p2:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`C`){if(!n||!r)throw Error(`Sparse path atlas edge requires a move.`);let e={x:a.x,y:a.y};n.push({kind:`cubic`,p0:r,p1:{x:a.x1,y:a.y1},p2:{x:a.x2,y:a.y2},p3:e,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),r=e}else if(a.type===`Z`){if(!n||!r||!i)throw Error(`Sparse path atlas close requires a contour.`);if(wr(r,i)||n.push({kind:`line`,p0:r,p1:Tr(r,i),p2:i,colorMask:0,startPseudoMask:0,endPseudoMask:0,startPseudoDomain:{x:0,y:0},endPseudoDomain:{x:0,y:0}}),n.length===0)throw Error(`Sparse path atlas contours must contain visible edges.`);t.push(n),n=null,r=null,i=null}if(n)throw Error(`Sparse path atlas requires closed contours.`);if(t.length===0)throw Error(`Sparse path atlas requires visible contours.`);return t}function Nr(e){return B(Dr(e.p1,e.p0))??B(Dr(e.p2,e.p0))}function Pr(e){return e.kind===`cubic`?B(Dr(e.p3,e.p2))??B(Dr(e.p3,e.p0)):e.kind===`quadratic`?B(Dr(e.p2,e.p1))??B(Dr(e.p2,e.p0)):B(Dr(e.p2,e.p0))}function Fr(e,t){return t>0?{x:e.y,y:-e.x}:{x:-e.y,y:e.x}}function Ir(e,t,n){let r=e.bounds,i=r.xMax-r.xMin,a=r.yMax-r.yMin,o=n??Math.max(i,a),s=[-i/o/2,-a/o/2,i/o/2,a/o/2],c=[1,1,1,1];for(let e of t){let t=Math.sign(e.reduce((e,t)=>e+Or(t.p0,t.p3??t.p2),0));if(t!==0)for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],i=e[n],a=Pr(r),o=Nr(i);if(!a||!o||!Ar(a,o)||Or(a,o)*t<=1e-9)continue;let s=Fr(a,t),l=Fr(o,t),u=B(jr(s,l)),d=u?kr(u,l):0;if(!(d>1e-9))continue;let f={x:Math.max(-4,Math.min(Cr,u.x/d)),y:Math.max(-4,Math.min(Cr,u.y/d))};c[0]=Math.max(c[0],-f.x),c[1]=Math.max(c[1],-f.y),c[2]=Math.max(c[2],f.x),c[3]=Math.max(c[3],f.y)}}return{localBounds:s,strokePadding:c}}function Lr(e,t=0){let n=e&t;if(n===1||n===2||n===4)return n^7;let r=e<<1;return(r|r>>3)&7}function Rr(e,t){return Math.floor(3+2.875*e/(t-1)-1.4375+.5)-3}function zr(e,t){let n=e.map((t,n)=>{let r=e[(n+e.length-1)%e.length],i=Pr(r),a=Nr(t);return!i||!a||Ar(i,a)}),r=n.flatMap((e,t)=>e?[t]:[]);if(r.length===0){t.colorMask=Lr(t.colorMask);for(let n of e)n.colorMask=t.colorMask;return n}if(r.length===1){t.colorMask=Lr(t.colorMask);let i=[t.colorMask,7];t.colorMask=Lr(t.colorMask),i.push(t.colorMask);let a=r[0];if(e.length<3)for(let t of e)t.colorMask=7;else for(let t=0;t<e.length;t++){let n=1+Rr(t,e.length);e[(a+t)%e.length].colorMask=i[n]}return n}t.colorMask=Lr(t.colorMask);let i=t.colorMask,a=0,o=r[0];for(let n=0;n<e.length;n++){let s=(o+n)%e.length;if(a+1<r.length&&r[a+1]===s){a++;let e=a===r.length-1?i:0;t.colorMask=Lr(t.colorMask,e)}e[s].colorMask=t.colorMask}return n}function Br(e,t){for(let n=0;n<e.length;n++){let r=e[(n+e.length-1)%e.length],i=e[n],a=e[(n+1)%e.length],o=Pr(r),s=Nr(i),c=Pr(i),l=Nr(a),u=t[n]&&o&&s?B(jr(o,s)):null,d=t[(n+1)%e.length]&&c&&l?B(jr(c,l)):null;i.startPseudoDomain=u??{x:0,y:0},i.endPseudoDomain=d??{x:0,y:0},i.startPseudoMask=u?i.colorMask:0,i.endPseudoMask=d?i.colorMask:0}}function Vr(e,t,n,r){return{x:n+e.x*t,y:r+e.y*t}}function Hr(e,t,n,r){let i=Tr(e,t),a=Tr(t,n),o=Tr(n,r),s=Tr(i,a),c=Tr(a,o),l=Tr(s,c);return[[e,i,s,l],[l,c,o,r]]}function Ur(e,t,n,r){let i={x:(3*(t.x+n.x)-e.x-r.x)*.25,y:(3*(t.y+n.y)-e.y-r.y)*.25},a={x:(e.x+2*i.x)/3,y:(e.y+2*i.y)/3},o={x:(2*i.x+r.x)/3,y:(2*i.y+r.y)/3};return{control:i,error:Math.max(Er(t,a),Er(n,o))}}function Wr(e,t,n,r,i,a,o,s=0){let c=Ur(e,t,n,r);if(c.error<=i||s>=Sr){o.push({p0:e,p1:c.control,p2:r,kind:br,...a});return}let[l,u]=Hr(e,t,n,r);Wr(l[0],l[1],l[2],l[3],i,{...a,endPseudoMask:0,endPseudoDomain:{x:0,y:0}},o,s+1),Wr(u[0],u[1],u[2],u[3],i,{...a,startPseudoMask:0,startPseudoDomain:{x:0,y:0}},o,s+1)}function Gr(e){let t=new ArrayBuffer(e.length*64),n=new DataView(t);for(let t=0;t<e.length;t++){let r=e[t],i=t*64;[r.p0.x,r.p0.y,r.p1.x,r.p1.y,r.p2.x,r.p2.y,0,0].forEach((e,t)=>{n.setFloat32(i+t*4,e,!0)}),n.setFloat32(i+32,r.startPseudoDomain.x,!0),n.setFloat32(i+36,r.startPseudoDomain.y,!0),n.setFloat32(i+40,r.endPseudoDomain.x,!0),n.setFloat32(i+44,r.endPseudoDomain.y,!0),n.setUint32(i+48,r.kind,!0),n.setUint32(i+52,r.colorMask,!0),n.setUint32(i+56,r.jobIndex,!0),n.setUint32(i+60,r.startPseudoMask|r.endPseudoMask<<3,!0)}return t}function Kr(e){let t=new ArrayBuffer(e.length*32),n=new DataView(t);for(let t=0;t<e.length;t++){let r=e[t],i=t*32;[r.edgeOffset,r.edgeCount,r.slotX,r.slotY,r.slotWidth,r.slotHeight,r.gutter,0].forEach((e,t)=>n.setUint32(i+t*4,e,!0))}return t}function qr(e,t){let n=e.reduce((e,t)=>e+t.slotWidth*t.slotHeight,0),r=Math.max(...e.map(e=>e.slotWidth)),i=t??Math.max(r,Math.ceil(Math.sqrt(n)));if(!Number.isInteger(i)||i<r)throw Error(`Invalid sparse path atlas packing width.`);let a=0,o=0,s=0,c=0;return{placements:e.map(e=>{a>0&&a+e.slotWidth>i&&(a=0,o+=s,s=0);let t={x:a,y:o};return a+=e.slotWidth,s=Math.max(s,e.slotHeight),c=Math.max(c,a),t}),get width(){return c},get height(){return o+s}}}function Jr(e,t={}){if(!Array.isArray(e)||e.length===0)throw Error(`Sparse path atlas requires a non-empty paths array.`);let n=t.tileSize??vr.tileSize,r=t.spread??vr.spread,i=t.shapePadding??vr.shapePadding,a=t.gutter??vr.gutter,o=t.cubicTolerance??vr.cubicTolerance,s=t.normalizationSpan,c=t.tightPacking??!1,l=n-i*2;if(!Number.isInteger(n)||n<=0||l<=0||r<=0||r>i||!Number.isInteger(a)||a<1||o<=0||s!==void 0&&!(s>0))throw Error(`Invalid sparse path atlas dimensions.`);for(let t of e)if(typeof t!=`string`||t.trim()===``)throw Error(`Sparse path atlas paths must be SVG strings.`);let u=Array.from(new Set(e)),d=n+a*2,f=Math.ceil(Math.sqrt(u.length)),p=u.map(e=>{let t=_r(e);if(!t.bounds)throw Error(`Sparse path atlas path must have visible bounds.`);let r=t.bounds.xMax-t.bounds.xMin,o=t.bounds.yMax-t.bounds.yMin,u=Math.max(r,o);if(!(u>0))throw Error(`Sparse path atlas path must have non-zero bounds.`);let d=l/(s??u),f=c?Math.max(1,Math.ceil(r*d+i*2)):n,p=c?Math.max(1,Math.ceil(o*d+i*2)):n;return{pathString:e,path:t,pathWidth:r,pathHeight:o,scale:d,tileWidth:f,tileHeight:p,slotWidth:f+a*2,slotHeight:p+a*2}}),m=c?qr(p,t.maxAtlasWidth):null,h=Math.ceil(u.length/f),g=m?.width??f*d,_=m?.height??h*d,v=[],y=[],b=new Map;for(let e=0;e<u.length;e++){let{pathString:t,path:n,pathWidth:r,pathHeight:i,scale:c,tileWidth:l,tileHeight:u,slotWidth:h,slotHeight:x}=p[e],S=e%f,C=Math.floor(e/f),w=m?.placements[e].x??S*d,T=m?.placements[e].y??C*d,E=w+a+(l-r*c)*.5-n.bounds.xMin*c,D=T+a+(u-i*c)*.5-n.bounds.yMin*c,O=v.length,k=Mr(n),A={colorMask:6};for(let t of k){Br(t,zr(t,A));for(let n of t){let t=Vr(n.p0,c,E,D),r=Vr(n.p1,c,E,D),i=Vr(n.p2,c,E,D);n.kind===`cubic`?Wr(t,r,i,Vr(n.p3,c,E,D),o,{colorMask:n.colorMask,startPseudoMask:n.startPseudoMask,endPseudoMask:n.endPseudoMask,startPseudoDomain:n.startPseudoDomain,endPseudoDomain:n.endPseudoDomain,jobIndex:e},v):v.push({p0:t,p1:r,p2:i,kind:n.kind===`line`?yr:br,colorMask:n.colorMask,startPseudoMask:n.startPseudoMask,endPseudoMask:n.endPseudoMask,startPseudoDomain:n.startPseudoDomain,endPseudoDomain:n.endPseudoDomain,jobIndex:e})}}y.push({edgeOffset:O,edgeCount:v.length-O,slotX:w,slotY:T,slotWidth:h,slotHeight:x,tileWidth:l,tileHeight:u,gutter:a});let{localBounds:ee,strokePadding:te}=Ir(n,k,s);b.set(t,[(w+a+.5)/g,(T+a+.5)/_,(w+a+l-.5)/g,(T+a+u-.5)/_,...ee,...te])}let x=new Float32Array(e.length*12);for(let t=0;t<e.length;t++)x.set(b.get(e[t]),t*12);return{width:g,height:_,tileSize:n,shapePixels:l,spread:r,gutter:a,slotSize:d,maxSlotWidth:Math.max(...y.map(e=>e.slotWidth)),maxSlotHeight:Math.max(...y.map(e=>e.slotHeight)),columns:f,pathCount:e.length,uniquePathCount:u.length,entries:x,segments:v,jobs:y,segmentData:Gr(v),jobData:Kr(y)}}var Yr=`
struct Segment {
    p0p1: vec4<f32>,
    p2pad: vec4<f32>,
    pseudoDomains: vec4<f32>,
    metadata: vec4<u32>,
};
`,Xr=`
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
`,Zr=`
fn quadraticPoint(
    p0: vec2<f32>,
    p1: vec2<f32>,
    p2: vec2<f32>,
    t: f32
) -> vec2<f32> {
    return mix(mix(p0, p1, t), mix(p1, p2, t), t);
}
`,Qr=`
${Yr}
${Xr}

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

${Zr}

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
`,$r=`
${Yr}
${Xr}

@group(0) @binding(0) var<storage, read> segments: array<Segment>;
@group(0) @binding(1) var<storage, read> jobs: array<Job>;
@group(0) @binding(2) var<storage, read_write> scratch: array<atomic<u32>>;
@group(0) @binding(3) var rawOutput: texture_storage_2d<rgba16float, write>;
@group(0) @binding(4) var<uniform> params: Params;
@group(0) @binding(5) var<storage, read> trueScratch: array<u32>;

${Zr}

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
`,ei=`
${Xr}

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
`,ti=new WeakMap;function ni(e){let t=ti.get(e);if(!t){let n=e.createShaderModule({label:`sparse path edge raster shader`,code:Qr}),r=e.createShaderModule({label:`sparse path raw distance shader`,code:$r}),i=e.createShaderModule({label:`sparse path correction shader`,code:ei});t={edge:e.createRenderPipeline({label:`sparse path edge raster pipeline`,layout:`auto`,vertex:{module:n,entryPoint:`vs_main`},fragment:{module:n,entryPoint:`fs_main`,targets:[{format:`rgba16float`}]},primitive:{topology:`triangle-list`}}),raw:e.createComputePipeline({label:`sparse path raw distance pipeline`,layout:`auto`,compute:{module:r,entryPoint:`main`}}),correction:e.createComputePipeline({label:`sparse path correction pipeline`,layout:`auto`,compute:{module:i,entryPoint:`main`}})},ti.set(e,t)}return t}function ri(e,t){let n=new ArrayBuffer(32),r=new DataView(n);return r.setUint32(0,e.width,!0),r.setUint32(4,e.height,!0),r.setUint32(8,e.maxSlotWidth,!0),r.setUint32(12,e.maxSlotHeight,!0),r.setFloat32(16,e.spread,!0),r.setFloat32(20,1.1111112,!0),r.setUint32(24,e.uniquePathCount,!0),r.setUint32(28,t,!0),n}var ii=32,ai=67108864;function oi(e){return Math.max(4,Math.ceil(e/4)*4)}function si(e,t){return JSON.stringify([e,t.tileSize??null,t.spread??null,t.shapePadding??null,t.gutter??null,t.cubicTolerance??null,t.normalizationSpan??null,t.tightPacking??!1,t.maxAtlasWidth??null])}var ci=class{#e;#t;#n=!1;#r=0;#i=0;#a;#o=null;#s=null;#c=null;#l=null;#u=null;#d=new Map;constructor(e,t={}){if(this.#e=e,this.#t=t.maxScratchBytes??ai,!Number.isSafeInteger(this.#t)||this.#t<ii)throw Error(`MSDF scratch limit must be a positive integer.`);this.#a={segments:null,jobs:null}}#f(e){e&&this.#e.queue.onSubmittedWorkDone().then(()=>e.destroy(),()=>e.destroy())}#p(e,t){let n=this.#a[t];if(e<=(n?.size??0))return;let r=oi(e),i=Math.max(4,n?.size??0);for(;i<r;)i*=2;let a=this.#e.limits.maxStorageBufferBindingSize??1/0;if(i>a)throw Error(`MSDF ${t} exceed the device buffer limit.`);let o=n;this.#a[t]=this.#e.createBuffer({label:`MSDF reusable ${t}`,size:i,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.#f(o)}#m(e,t){let n=Math.max(e,this.#r),r=Math.max(t,this.#i);if(n===this.#r&&r===this.#i)return;let i=this.#e.limits.maxTextureDimension2D,a=n*r,o=a*ii,s=a*3*4,c=this.#e.limits.maxStorageBufferBindingSize??1/0;if(n>i||r>i||o>this.#t||s>c)throw Error(`MSDF generation needs ${o} scratch bytes, exceeding its configured or device limit.`);let l=this.#c,u=this.#l,d=this.#u;this.#c=this.#e.createBuffer({label:`MSDF reusable atomic scratch`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.#l=this.#e.createBuffer({label:`MSDF reusable true-distance scratch`,size:s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.#u=this.#e.createTexture({label:`MSDF reusable raw distances`,size:[n,r],format:`rgba16float`,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.#r=n,this.#i=r,this.#f(l),this.#f(u),this.#f(d)}#h(){this.#o||(this.#o=this.#e.createBuffer({label:`MSDF true-distance parameters`,size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.#s=this.#e.createBuffer({label:`MSDF pseudo-distance parameters`,size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}))}createAtlas(e,t={},n=`path atlas`){if(this.#n)throw Error(`MSDF atlas generator has been destroyed.`);let r=Jr(e,t);this.#p(r.segmentData.byteLength,`segments`),this.#p(r.jobData.byteLength,`jobs`),this.#m(r.width,r.height),this.#h();let i=this.#a.segments,a=this.#a.jobs,o=this.#o,s=this.#s,c=this.#c,l=this.#l,u=this.#u,d=ni(this.#e);this.#e.queue.writeBuffer(i,0,N(new Uint8Array(r.segmentData))),this.#e.queue.writeBuffer(a,0,N(new Uint8Array(r.jobData))),this.#e.queue.writeBuffer(o,0,N(new Uint8Array(ri(r,0)))),this.#e.queue.writeBuffer(s,0,N(new Uint8Array(ri(r,1))));let f=this.#e.createTexture({label:n,size:[r.width,r.height],format:`rgba16float`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),p=this.#e.createBuffer({label:F(n,`entries`),size:r.entries.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});this.#e.queue.writeBuffer(p,0,N(r.entries));let m=(e,t)=>this.#e.createBindGroup({label:F(n,e+` edge raster bindings`),layout:d.edge.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:i}},{binding:1,resource:{buffer:a}},{binding:2,resource:{buffer:c}},{binding:3,resource:{buffer:l}},{binding:4,resource:{buffer:t}}]}),h=m(`true-distance`,o),g=m(`pseudo-distance`,s),_=this.#e.createBindGroup({label:F(n,`raw distance bindings`),layout:d.raw.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:i}},{binding:1,resource:{buffer:a}},{binding:2,resource:{buffer:c}},{binding:3,resource:u.createView()},{binding:4,resource:{buffer:s}},{binding:5,resource:{buffer:l}}]}),v=this.#e.createBindGroup({label:F(n,`correction bindings`),layout:d.correction.getBindGroupLayout(0),entries:[{binding:0,resource:u.createView()},{binding:1,resource:f.createView()},{binding:2,resource:{buffer:s}},{binding:3,resource:{buffer:a}}]}),y=r.width*r.height*3*4,b=this.#e.createCommandEncoder({label:F(n,`generation commands`)}),x=(e,t,i)=>{let a=b.beginRenderPass({label:F(n,e+` edge raster pass`),colorAttachments:[i?{view:f.createView(),clearValue:[0,0,0,0],loadOp:`clear`,storeOp:`store`}:{view:f.createView(),loadOp:`load`,storeOp:`store`}]});a.setPipeline(d.edge),a.setBindGroup(0,t),a.draw(6,r.segments.length),a.end()},S=(e,t,i)=>{let a=b.beginComputePass({label:F(n,e+` pass`)});a.setPipeline(t),a.setBindGroup(0,i),a.dispatchWorkgroups(Math.ceil(r.maxSlotWidth/8),Math.ceil(r.maxSlotHeight/8),r.uniquePathCount),a.end()};b.clearBuffer(c,0,y),b.clearBuffer(l,0,y),x(`true-distance`,h,!0),b.copyBufferToBuffer(l,0,c,0,y),x(`pseudo-distance`,g,!1),S(`raw distance`,d.raw,_),S(`correction`,d.correction,v),this.#e.queue.submit([b.finish()]);let C=!1;return{...r,texture:f,entryBuffer:p,completion:this.#e.queue.onSubmittedWorkDone(),destroy:()=>{C||(C=!0,f.destroy(),p.destroy())}}}acquireAtlas(e,t={},n=`path atlas`){if(this.#n)throw Error(`MSDF atlas generator has been destroyed.`);let r=si(e,t),i=this.#d.get(r);return i||(i=this.createAtlas(e,t,n),this.#d.set(r,i),i.completion.catch(()=>{this.#d.get(r)===i&&(this.#d.delete(r),i.destroy())})),i}destroy(){if(!this.#n){this.#n=!0;for(let e of this.#d.values())e.destroy();this.#d.clear();for(let e of[this.#a.segments,this.#a.jobs,this.#o,this.#s,this.#c,this.#l,this.#u])this.#f(e);this.#a.segments=null,this.#a.jobs=null,this.#o=null,this.#s=null,this.#c=null,this.#l=null,this.#u=null}}},li=new WeakMap;function ui(e){let t=li.get(e);return t||(t=e._ownResource(new ci(e.device)),li.set(e,t)),t}var di=`
${xe}
fn placeClampedPoint(clip: vec2<f32>, anchor: vec2<f32>, i: u32) -> vec2<f32> {
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
    return clip;
#else
    return applyPlacementClipForPoint(clip, anchor, i);
#endif
}

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

    var quad = array<vec2<f32>, 4>(
        vec2<f32>(0.0, 0.0),
        vec2<f32>(1.0, 0.0),
        vec2<f32>(0.0, 1.0),
        vec2<f32>(1.0, 1.0)
    );

    var diameter = sqrt(max(getScaled_size(i), 0.0));
    var strokeWidth = max(getScaled_strokeWidth(i), 0.0);
    let strokeOpacity = getScaled_strokeOpacity(i);
    if (strokeOpacity <= 0.0) {
        strokeWidth = 0.0;
    }
    let entry = pathAtlasEntries[shape];
    let inwardStroke = getScaled_inwardStroke(i);
    if (pickingEnabled && (strokeWidth <= 0.0 || inwardStroke != 0u)) {
        diameter = max(diameter, 1.0 / globals.dpr);
    }
    if (diameter <= 0.0) {
        return culledPoint();
    }
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
    // WebGL enlarges the padded sprite while retaining its local silhouette.
    let paddedDiameter = diameter + select(strokeWidth, 0.0, inwardStroke != 0u) + 1.0 / globals.dpr;
    let pickingScale = select(1.0,
        max(1.0, getScaled_minPickingSize(i) / paddedDiameter), pickingEnabled);
    let screenOffset = rot * localScreen * pickingScale;
    let center = projectClampedPosition(
#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
        vec2<f32>(getScaled_x(i), getScaled_y(i)),
        vec2<f32>(getScaled_xOffset(i) + getScaled_dx(i), getScaled_yOffset(i) + getScaled_dy(i)), i);
#else
        vec2<f32>(getScaled_x(i) + getScaled_dx(i), getScaled_y(i) + getScaled_dy(i)),
        vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i)), i);
#endif
    let centerX = center.x;
    let centerY = center.y;

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
        placeClampedPoint(clip, centerClip, i),
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
    if (pickingEnabled) {
        if (distance + in.halfStrokeWidth * globals.dpr < 0.0) { discard; }
        return vec4<f32>(1.0);
    }
    let shapeCoverage = clamp(distance + 0.5, 0.0, 1.0);
    var fillColor = in.fill;
    var strokeColor = in.stroke;
    fillColor.a *= in.fillOpacity;
    strokeColor.a *= in.strokeOpacity;
    if (in.gradientStrength > 0.0) {
        let gradient = max(distance, 0.0) * in.gradientStrength /
            max(in.deviceRadius, 0.0001);
        fillColor = mix(fillColor, vec4<f32>(vec3<f32>(1.0), fillColor.a), gradient);
    }
    fillColor = premultiplyAlpha(fillColor);
    strokeColor = premultiplyAlpha(strokeColor);

    var color = fillColor * shapeCoverage;
    if (in.halfStrokeWidth > 0.0) {
        let inward = in.inwardStroke != 0u;
        let width = in.halfStrokeWidth * globals.dpr;
        let innerCoverage = clamp(distance - select(width, 2.0 * width, inward) + 0.5, 0.0, 1.0);
        let outerCoverage = select(clamp(distance + width + 0.5, 0.0, 1.0), shapeCoverage, inward);
        color = innerCoverage * fillColor
            + (shapeCoverage - innerCoverage) * (strokeColor + (1.0 - strokeColor.a) * fillColor)
            + (outerCoverage - shapeCoverage) * strokeColor;
    }
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
`,fi=class extends ir{get shaderBody(){return di}getExtraUniformLayout(){return[{name:`uTileSize`,type:`f32`,components:1},{name:`uShapePixels`,type:`f32`,components:1},{name:`uSpread`,type:`f32`,components:1},{name:`uPathCount`,type:`u32`,components:1}]}getExtraResourceDefs(){return[{name:`pathAtlasEntries`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`pathAtlasEntries`,wgslType:`array<PathAtlasEntry>`},{name:`pathAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`float`,dimension:`2d`,visibility:`fragment`,wgslName:`pathAtlas`},{name:`pathAtlas`,role:`extraSampler`,kind:`sampler`,samplerType:`filtering`,visibility:`fragment`,wgslName:`pathAtlasSampler`}]}_initializeExtraResources(){let e=this._markConfig.paths;if(!Array.isArray(e))throw Error(`PathPoint config requires a paths array.`);let t=this._markConfig.atlasOptions??{},n=ui(this.renderer).acquireAtlas(e,t,F(this.label,`path atlas`));n.completion.catch(()=>{}),this._installPathAtlas(n,n.texture,n.entryBuffer,!0)}_installPathAtlas(e,t,n=null,r=!1,i=`rgba16float`){let a=this.device.createSampler({label:F(this.label,`path atlas sampler`),addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`,mipmapFilter:`nearest`}),o=n??this._createPathAtlasEntries(e.entries);this._extraBuffers.set(`pathAtlasEntries`,o),this._extraTextures.set(`pathAtlas`,{texture:t,sampler:a,width:e.width,height:e.height,format:i}),r&&(this._borrowedExtraBuffers.add(`pathAtlasEntries`),this._borrowedExtraTextures.add(`pathAtlas`)),this._setUniformValue(`uTileSize`,e.tileSize),this._setUniformValue(`uShapePixels`,e.shapePixels),this._setUniformValue(`uSpread`,e.spread),this._setUniformValue(`uPathCount`,e.pathCount)}_createPathAtlasEntries(e){let t=this.device.createBuffer({label:F(this.label,`path atlas entries`),size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(t,0,N(e)),t}};Object.freeze([`circle`,`square`,`cross`,`diamond`,`triangle-up`,`triangle-right`,`triangle-down`,`triangle-left`,`tick-up`,`tick-right`,`tick-down`,`tick-left`,`x`,`+`]);var pi=new Map([[`circle`,`M0-1A1 1 0 1 1 0 1A1 1 0 1 1 0-1Z`],[`square`,`M-1-1H1V1H-1Z`],[`cross`,`M-.4-1H.4V-.4H1V.4H.4V1H-.4V.4H-1V-.4H-.4Z`],[`diamond`,`M0-1L1 0 0 1-1 0Z`],[`triangle-up`,`M0-.866025L1 .866025H-1Z`],[`triangle-right`,`M.866025 0L-.866025 1V-1Z`],[`triangle-down`,`M0 .866025L-1-.866025H1Z`],[`triangle-left`,`M-.866025 0L.866025-1V1Z`],[`tick-up`,`M-.15-1H.15V0H-.15Z`],[`tick-right`,`M0-.15H1V.15H0Z`],[`tick-down`,`M-.15 0H.15V1H-.15Z`],[`tick-left`,`M-1-.15H0V.15H-1Z`],[`x`,`M-.7071-1L0-.2929.7071-1 1-.7071.2929 0 1 .7071.7071 1 0 .2929-.7071 1-1 .7071-.2929 0-1-.7071Z`],[`+`,`M-.15-1H.15V-.15H1V.15H.15V1H-.15V.15H-1V-.15H-.15Z`]]);function mi(e){let t=pi.get(e);if(t)return t;if(/^\s*[Mm]/.test(e))return e;throw Error(`Unknown point shape: ${e}`)}function hi(e){let t=e.shape,n=e.shapes;if(t!==void 0&&n!==void 0)throw Error(`Point config cannot define both shape and shapes.`);if(t===void 0&&n===void 0||t===`circle`)return null;let r=(n??[t]).map(mi);return{...e,paths:r,atlasOptions:{normalizationSpan:2},channels:{...e.channels,...t===void 0?{}:{shape:{value:0}}}}}var gi=Object.freeze({type:`point`,getProgramKey(e){return e.shape===void 0?e.shapes===void 0?`legacy`:`shapes:${JSON.stringify(e.shapes)}`:`shape:${e.shape}`},createProgram(e,t,n){let r=hi(t);return new(r?fi:ir)(e,r??t,n)}}),_i={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1,scale:z(),default:0},x2:{type:`f32`,components:1,scale:z(),default:10},y:{type:`f32`,components:1,scale:z(),default:0},y2:{type:`f32`,components:1,scale:z(),default:10},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[.27,.49,.8,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},cornerRadiusTopRight:{type:`f32`,components:1,default:0},cornerRadiusBottomRight:{type:`f32`,components:1,default:0},cornerRadiusTopLeft:{type:`f32`,components:1,default:0},cornerRadiusBottomLeft:{type:`f32`,components:1,default:0},minWidth:{type:`f32`,components:1,default:0},minHeight:{type:`f32`,components:1,default:0},minOpacity:{type:`f32`,components:1,default:0},shadowOffsetX:{type:`f32`,components:1,default:0},shadowOffsetY:{type:`f32`,components:1,default:0},shadowBlur:{type:`f32`,components:1,default:0},shadowOpacity:{type:`f32`,components:1,default:0},shadowColor:{type:`f32`,components:4,default:[0,0,0,1]},hatchPattern:{type:`u32`,components:1,default:0}},vi=[`strokeWidth`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`shadowOpacity`,`hatchPattern`];function yi(e){for(let t of vi){let n=e[t];if(!M(n)||n.dynamic||n.scale||n.conditions?.length)return`shader`}return vi.every(t=>Number(e[t].value)===0)?`multisample`:`shader`}var bi=`
${xe}

fn clampMinSize(pos: ptr<function, f32>, frac: f32, size: f32, minSize: f32) -> f32 {
    if (minSize > 0.0 && size < minSize) {
        (*pos) = (*pos) + (frac - 0.5) * (minSize - size);
        return size / minSize;
    }
    return 1.0;
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

fn distanceToColor(d: f32, strokeDistance: f32, fill: vec4<f32>, stroke: vec4<f32>, background: vec4<f32>, halfStrokeWidth: f32, opacityFactor: f32) -> vec4<f32> {
    let cf = distanceToRatio(-d);
    var color = cf * fill;
    if (halfStrokeWidth > 0.0) {
        let ci = distanceToRatio(-strokeDistance - halfStrokeWidth);
        let co = distanceToRatio(-d + halfStrokeWidth);
        color = ci * fill + (cf - ci) * (stroke + (1.0 - stroke.a) * fill)
            + (co - cf) * stroke;
    }
    color *= opacityFactor;
    return color + (1.0 - color.a) * background;
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
    @location(14) opacityFactor: f32,
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
    out.opacityFactor = 0.0;
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

    let a = projectClampedPosition(vec2<f32>(getScaled_x(i), getScaled_y(i)),
        vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i)), i);
    let b = projectClampedPosition(vec2<f32>(getScaled_x2(i), getScaled_y2(i)),
        vec2<f32>(getScaled_x2Offset(i), getScaled_y2Offset(i)), i);
    var x = min(a.x, b.x);
    var x2 = max(a.x, b.x);
    let y = min(a.y, b.y);
    let y2 = max(a.y, b.y);
#if defined(xClampRange_DEFINED)
    if (x == x2) { return culledRect(); }
#endif
#if defined(yClampRange_DEFINED)
    if (y == y2) { return culledRect(); }
#endif
#if !defined(xClampRange_DEFINED)
    // Keep far-off endpoints close enough to avoid triangle precision loss.
    x = clamp(x, -1.0, globals.width + 1.0);
    x2 = clamp(x2, -1.0, globals.width + 1.0);
#endif

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
    out.pos = vec4<f32>(placeClampedGeometry(clip, i), 0.0, 1.0);
    out.local = centeredFrac * vec2<f32>(w, h) + expansion;
    out.size = vec2<f32>(w, h);
    out.fill = getScaled_fill(i);
    out.stroke = getScaled_stroke(i);
    out.opacityFactor = opaFactor;
    out.fillOpacity = getScaled_fillOpacity(i);
    out.strokeOpacity = getScaled_strokeOpacity(i);
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
        return select(fillColor * in.opacityFactor, vec4<f32>(1.0), pickingEnabled);
    }

    let halfSize = in.size * 0.5;
    let centered = in.local;
    var d: f32;
    if (all(in.cornerRadii <= vec4<f32>(0.0))) {
        d = sdSharpBox(centered, halfSize);
    } else {
        d = sdRoundedBox(centered, halfSize, in.cornerRadii);
    }

    if (pickingEnabled) {
        if (d >= in.strokeWidth * 0.5) { discard; }
        return vec4<f32>(1.0);
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
    // Hatches affect the stroke band, never the nominal fill beneath it.
    let fillDistance = d;
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

    return distanceToColor(fillDistance, d, fillColor, strokeColor, background, halfStrokeWidth, in.opacityFactor);
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,xi=class extends Zn{_resolveAntialiasing(){return yi(this._channels)}get channelSpecs(){return _i}get shaderBody(){return`const USE_MULTISAMPLE_EDGE_COVERAGE = ${this.antialiasing===`multisample`};\n${bi}`}getDefaultScaleRange(e){if(this.renderer?._globals){if(e===`x`||e===`x2`)return[0,this.renderer._globals.width];if(e===`y`||e===`y2`)return[0,this.renderer._globals.height]}}},Si=Object.freeze({type:`rect`,createProgram(e,t,n){return new xi(e,t,n)}}),Ci=`
// dashAtlas.js stores two biased, little-endian interval endpoints per texel.
fn decodeDashInterval(packed: vec4<u32>) -> vec2<f32> {
    return vec2<f32>(f32(packed.x + 256u * packed.y),
        f32(packed.z + 256u * packed.w)) - 256.0;
}
`,wi=1025;function Ti(e){if(!e||e.length===0)return{data:new Uint8Array(4),width:1,height:1,patternCount:0};if(e.length>256)throw Error(`Dash pattern count (${e.length}) exceeds 256.`);let t=new Uint8Array(wi*e.length*4);return e.forEach((e,n)=>{if(!Array.isArray(e)||e.length===0)throw Error(`Dash pattern at index ${n} must be a non-empty array.`);if(e.length%2!=0)throw Error(`Dash pattern at index ${n} must have an even number of segments.`);let r=0;for(let t of e){if(!Number.isFinite(t)||Math.round(t)!==t)throw Error(`Dash pattern at index ${n} must use integer segment lengths.`);if(t<0)throw Error(`Dash pattern at index ${n} must use segments >= 0.`);r+=t}if(r===0)throw Error(`Dash pattern at index ${n} must have a positive total length.`);if(r>256)throw Error(`Dash pattern at index ${n} has length ${r}, which exceeds 256.`);let i=n*wi*4;t[i]=r&255,t[i+1]=r>>8;let a=[],o=0;for(let t=0;t<e.length;t++){let n=o+e[t];if(t%2==0){let e=a.at(-1);e&&e[1]===o?e[1]=n:a.push([o,n])}o=n}if(a.length===1&&a[0][1]-a[0][0]===r){t[i+2]=1;return}a.length>1&&a[0][0]===0&&a.at(-1)[1]===r&&(a[0][0]=a.pop()[0]-r);let s=a.filter(([e,t])=>e<t);t[i+3]=+(s.length===0);for(let[e,n]of[a,s].entries()){if(n.length===0)continue;let a=[-1,0,1].flatMap(e=>n.map(([t,n])=>[t+e*r,n+e*r]));for(let n=0;n<r;n++){let r=a.findLast(([e,t])=>e<n||e===n&&t===n),o=a.find(([,e])=>e>n);for(let[a,s]of[r,o].entries()){let r=i+(1+n*4+e*2+a)*4,o=s[0]-n+256,c=s[1]-n+256;t.set([o&255,o>>8,c&255,c>>8],r)}}}}),{data:t,width:wi,height:e.length,patternCount:e.length}}var Ei={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},fill:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeAlign:{type:`u32`,components:1,default:2},strokeWidth:{type:`f32`,components:1,default:0},minLength:{type:`f32`,components:1,default:0},strokeCap:{type:`u32`,components:1,default:0},strokeDash:{type:`u32`,components:1,default:0},strokeDashOffset:{components:1,default:0}},Di=`
${Ci}

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
    @location(0) fill: vec4<f32>,
    @location(1) normalDistance: f32,
    @location(2) halfWidth: f32,
    @location(3) opacity: f32,
    @location(4) along: f32,
    @location(11) @interpolate(flat) span: f32,
    @location(5) @interpolate(flat) strokeCap: u32,
    @location(6) @interpolate(flat) dashIndex: u32,
    @location(7) @interpolate(flat) dashOffset: f32,
    @location(8) @interpolate(flat) pickId: u32,
    @location(9) @interpolate(flat) stroke: vec4<f32>,
    @location(10) @interpolate(flat) outset: f32,
    @location(12) @interpolate(flat) inset: f32,
    @location(13) @interpolate(flat) nominalWidth: f32,
};

fn culledRule() -> VSOut {
    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = vec4<f32>(-1e9);
#endif
    out.pos = vec4<f32>(0.0);
    out.fill = vec4<f32>(0.0);
    out.normalDistance = 0.0;
    out.halfWidth = 0.0;
    out.opacity = 0.0;
    out.along = 0.0;
    out.span = 0.0;
    out.strokeCap = 0u;
    out.dashIndex = 0u;
    out.dashOffset = 0.0;
    out.stroke = vec4<f32>(0.0);
    out.outset = 0.0;
    out.inset = 0.0;
    out.nominalWidth = 0.0;
    out.pickId = 0u;
    return out;
}

// Preserve the line direction and interpolate around its center to avoid
// cancellation between large offscreen positions during close zooms.
fn clipRuleAxis(a: ptr<function, vec2<f32>>, b: ptr<function, vec2<f32>>,
    axis: u32, bounds: vec2<f32>) -> bool {
    let delta = (*b)[axis] - (*a)[axis];
    if (delta == 0.0) {
        return (*a)[axis] >= bounds.x && (*a)[axis] <= bounds.y;
    }
    if (max((*a)[axis], (*b)[axis]) < bounds.x ||
        min((*a)[axis], (*b)[axis]) > bounds.y) {
        return false;
    }
    let center = (*a + *b) * 0.5;
    let direction = (*b - *a) / delta;
    if ((*a)[axis] < bounds.x || (*a)[axis] > bounds.y) {
        let edge = clamp((*a)[axis], bounds.x, bounds.y);
        *a = center + direction * (edge - center[axis]);
        (*a)[axis] = edge;
    }
    if ((*b)[axis] < bounds.x || (*b)[axis] > bounds.y) {
        let edge = clamp((*b)[axis], bounds.x, bounds.y);
        *b = center + direction * (edge - center[axis]);
        (*b)[axis] = edge;
    }
    return true;
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
    if (width <= 0.0) { return culledRule(); }
    var borderWidth = max(getScaled_strokeWidth(i), 0.0);
    if (getScaled_stroke(i).a * getScaled_strokeOpacity(i) <= 0.0) { borderWidth = 0.0; }
    // Numeric alignment: inside=0, center=1, outside=2.
    let expansion = borderWidth * f32(getScaled_strokeAlign(i)) * 0.5;
    let nominalWidth = width;
    // Each boundary gets its own thin-width compensation in coverage space.
    // A thin body must not reduce the opacity of an independently opaque border.
    width = max(width, pixelSize);

    // Place the endpoints before extruding the stroke so that occurrence
    // scaling does not also scale pixel-sized widths, offsets, or line caps.
    var a = applyPlacementPixel(
        vec2<f32>(getScaled_x(i), getScaled_y(i)),
        i
    ) + vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i));
    var b = applyPlacementPixel(
        vec2<f32>(getScaled_x2(i), getScaled_y2(i)),
        i
    ) + vec2<f32>(getScaled_x2Offset(i), getScaled_y2Offset(i));

    let upper = vec2<f32>(globals.width, globals.height);
    // The overscan keeps artificial caps and thick strokes outside the image.
    let margin = max(upper, vec2<f32>(width + expansion + getScaled_minLength(i) + pixelSize));
    var xBounds = vec2<f32>(-margin.x, upper.x + margin.x);
    var yBounds = vec2<f32>(-margin.y, upper.y + margin.y);
#if defined(xClampRange_DEFINED)
    let xRange = getScaled_xClampRange(i);
    xBounds = vec2<f32>(applyPlacementPixel(vec2<f32>(xRange.x, 0.0), i).x,
        applyPlacementPixel(vec2<f32>(xRange.y, 0.0), i).x);
#endif
#if defined(yClampRange_DEFINED)
    let yRange = getScaled_yClampRange(i);
    yBounds = vec2<f32>(applyPlacementPixel(vec2<f32>(0.0, yRange.x), i).y,
        applyPlacementPixel(vec2<f32>(0.0, yRange.y), i).y);
#endif
    if (!clipRuleAxis(&a, &b, 0u, xBounds) ||
        !clipRuleAxis(&a, &b, 1u, yBounds) || all(a == b)) { return culledRule(); }

    let tangent = b - a;
    let len = length(tangent);
    let normal = normalize(vec2<f32>(-tangent.y, tangent.x));

    let strokeCap = u32(getScaled_strokeCap(i));
    let span = max(len, getScaled_minLength(i));
    let halfWidth = 0.5 * width;
    // Minimum raster width affects transverse coverage, not square-cap length.
    let capRadius = select(halfWidth, 0.5 * nominalWidth, strokeCap == SQUARE);
    let end = select(0.0, capRadius, strokeCap != BUTT);
    let padding = expansion + 0.5 * pixelSize;
    let along = mix(-end - padding, span + end + padding, local.x);
    let across = (local.y - 0.5) * (width + 2.0 * padding);
    let position = (a + b) * 0.5 + tangent / len * (along - span * 0.5) + normal * across;
    let clip = vec2<f32>(
        (position.x / globals.width) * 2.0 - 1.0,
        1.0 - (position.y / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(applyPlacementClipForRule(clip, i), 0.0, 1.0);
    out.fill = getScaled_fill(i);
    out.fill.a *= getScaled_fillOpacity(i);
    out.stroke = getScaled_stroke(i);
    out.stroke.a *= getScaled_strokeOpacity(i);
    out.outset = expansion;
    out.inset = borderWidth - expansion;
    out.normalDistance = across;
    out.halfWidth = halfWidth;
    out.opacity = getScaled_opacity(i);
    out.nominalWidth = nominalWidth;
    out.along = along;
    out.span = span;
    out.strokeCap = strokeCap;
    out.dashIndex = u32(getScaled_strokeDash(i));
    out.dashOffset = f32(getScaled_strokeDashOffset(i));
    out.pickId = 0u;
#if defined(uniqueId_DEFINED)
    out.pickId = getScaled_uniqueId(i) + 1u;
#endif
    return out;
}

// Cap each clipped centerline interval, including zero-length round/square dashes.
fn intervalDistance(in: VSOut, interval: vec2<f32>, radius: f32) -> f32 {
    let along = max(interval.x - in.along, in.along - interval.y);
    if (in.strokeCap == ROUND) {
        return length(vec2<f32>(max(along, 0.0), in.normalDistance)) - radius;
    }
    let end = select(0.0, in.nominalWidth * 0.5, in.strokeCap == SQUARE);
    let q = vec2<f32>(along - end, abs(in.normalDistance) - radius);
    return length(max(q, vec2<f32>(0.0))) + min(max(q.x, q.y), 0.0);
}

fn boundaryCoverage(in: VSOut, interval: vec2<f32>, offset: f32) -> f32 {
    let width = max(0.0, in.nominalWidth + 2.0 * offset);
    if (width == 0.0) { return 0.0; }
    let rasterWidth = max(width, 1.0 / globals.dpr);
    let radius = 0.5 * rasterWidth - offset;
    let distance = intervalDistance(in, interval, radius) - offset;
    return clamp(0.5 - distance * globals.dpr, 0.0, 1.0) * min(1.0, width * globals.dpr);
}

fn intervalCoverage(in: VSOut, interval: vec2<f32>) -> vec3<f32> {
    if (interval.x > interval.y ||
        (interval.x == interval.y && in.strokeCap == BUTT)) { return vec3<f32>(0.0); }
    let cf = boundaryCoverage(in, interval, 0.0);
    if (in.inset == 0.0 && in.outset == 0.0) { return vec3<f32>(cf); }
    var co = cf;
    if (in.outset > 0.0) { co = boundaryCoverage(in, interval, in.outset); }
    var ci = cf;
    if (in.inset > 0.0) {
        var maxInset = in.nominalWidth * 0.5;
        if (in.strokeCap != ROUND) {
            let end = select(0.0, in.nominalWidth * 0.5, in.strokeCap == SQUARE);
            maxInset = min(maxInset, (interval.y - interval.x) * 0.5 + end);
        }
        ci = select(boundaryCoverage(in, interval, -in.inset),
            0.0, in.inset >= maxInset);
    }
    return vec3<f32>(ci, cf, co);
}

fn ruleCoverage(in: VSOut) -> vec3<f32> {
    let bounds = vec2<f32>(0.0, in.span);
    if (params.uDashPatternCount == 0u || in.dashIndex >= params.uDashPatternCount) {
        return intervalCoverage(in, bounds);
    }
    let info = textureLoad(dashAtlas, vec2<i32>(0, i32(in.dashIndex)), 0);
    if (info.z == 1u) { return intervalCoverage(in, bounds); }
    if (info.w == 1u && in.strokeCap == BUTT) { return vec3<f32>(0.0); }
    let query = clamp(in.along, 0.0, in.span);
    let period = f32(info.x + 256u * info.y);
    let phase = fract((query + in.dashOffset) / period) * period;
    // A tiny negative phase can round fract() to one; wrap the lookup as well.
    let local = select(phase, 0.0, phase == period);
    var coverage = vec3<f32>(0.0);
    for (var side = 0u; side < 2u; side++) {
        let packed = textureLoad(dashAtlas,
            vec2<i32>(1 + i32(floor(local)) * 4 +
                select(0, 2, in.strokeCap == BUTT) + i32(side), i32(in.dashIndex)), 0);
        let interval = decodeDashInterval(packed) + query - fract(local);
        coverage = max(coverage, intervalCoverage(in,
            vec2<f32>(max(bounds.x, interval.x), min(bounds.y, interval.y))));
    }
    return coverage;
}

fn shade(in: VSOut) -> vec4<f32> {
    // WebGL picks the extruded rule quad, including dash gaps and cap corners.
    if (pickingEnabled) { return vec4<f32>(1.0); }
    let coverage = ruleCoverage(in);
    let ci = coverage.x;
    let cf = coverage.y;
    let co = coverage.z;
    let fill = premultiplyAlpha(in.fill);
    if (in.outset == 0.0 && in.inset == 0.0) { return cf * fill * in.opacity; }
    let stroke = premultiplyAlpha(in.stroke);
    return (ci * fill + (cf - ci) * (stroke + (1.0 - stroke.a) * fill) +
        (co - cf) * stroke) * in.opacity;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,Oi=class extends Zn{get channelSpecs(){return Ei}get shaderBody(){return Di}getExtraUniformLayout(){return[{name:`uDashPatternCount`,type:`u32`,components:1}]}getExtraResourceDefs(){return[{name:`dashAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`uint`,dimension:`2d`,visibility:`fragment`,wgslName:`dashAtlas`}]}_initializeExtraResources(){let e=Ti(this._markConfig?.dashPatterns??null);this._dashPatternCount=e.patternCount;let t=Oe(this.device,{format:`rgba8uint`,width:e.width,height:e.height,data:e.data},void 0,F(this.label,`dash atlas`));this._extraTextures.set(`dashAtlas`,{texture:t,width:e.width,height:e.height,format:`rgba8uint`});let n=this._channels.strokeDash;if(e.patternCount>0&&n&&n.value!==void 0){let t=Array.isArray(n.value)?n.value[0]:n.value;typeof t==`number`&&t>=e.patternCount&&console.warn(`[webgpu-renderer] strokeDash value ${t} exceeds pattern count ${e.patternCount}.`)}}_initializeExtraUniforms(){this._setUniformValue(`uDashPatternCount`,this._dashPatternCount??0)}},ki=Object.freeze({type:`rule`,createProgram(e,t,n){return new Oi(e,t,n)}});function Ai(e,t){let n=e.getSlotHandles().properties;for(let[r,i]of Object.entries(t)){if(i.uniform&&!e._uniformBufferState?.entries.has(i.uniform))throw Error(`Property slot "${r}" targets unavailable uniform "${i.uniform}".`);if(!i.uniform&&!i.set)throw Error(`Property slot "${r}" has no update target.`);let t=t=>{if(i.set)i.set(t);else{let n=i.encode?i.encode(t):t;if(typeof n!=`number`&&(!Array.isArray(n)||!n.every(e=>typeof e==`number`)))throw Error(`Property "${r}" must encode to numeric uniform data.`);e._setExtraUniformValue(i.uniform,n)}},a=e._markConfig[r];t(a===void 0?i.getDefault?i.getDefault():i.default:a),n[r]={set:n=>{e._assertAlive(),t(n),e._queueSlotUpdate(!1)}}}}var ji=[`arc`,`dome`,`diagonal`,`line`,`orthogonal`],Mi=[`vertical`,`horizontal`];function Ni(e){let t=ji.indexOf(e);if(t<0)throw Error(`Unknown link shape: ${String(e)}`);return t}function Pi(e){let t=Mi.indexOf(e);if(t<0)throw Error(`Unknown link orientation: ${String(e)}`);return t}var Fi={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},size:{type:`f32`,components:1,default:1},color:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1}},Ii=`
${xe}

const SHAPE_ARC: u32 = 0u;
const SHAPE_DOME: u32 = 1u;
const SHAPE_DIAGONAL: u32 = 2u;
const SHAPE_LINE: u32 = 3u;
const SHAPE_ORTHOGONAL: u32 = 4u;
const ORIENT_VERTICAL: u32 = 0u;
const ORIENT_HORIZONTAL: u32 = 1u;


fn orthogonalBounds(part: u32, a: vec2<f32>, b: vec2<f32>, h: f32) -> vec4<f32> {
    let c = select(vec2<f32>(b.x, a.y), vec2<f32>(a.x, b.y), params.uOrient == ORIENT_HORIZONTAL);
    let first = c - a;
    let second = b - c;
    if (part < 2u) {
        let start = select(c, a, part == 0u);
        let end = select(b, c, part == 0u);
        if (all(start == end)) { return vec4<f32>(c, c); }
        let pad = vec2<f32>(select(0.0, h, start.x == end.x), select(0.0, h, start.y == end.y));
        return vec4<f32>(min(start, end) - pad, max(start, end) + pad);
    }
    if (all(first == vec2<f32>(0.0)) || all(second == vec2<f32>(0.0))) { return vec4<f32>(c, c); }
    let t1 = sign(first);
    let t2 = sign(second);
    if (part == 2u) {
        let outer = c + (t1 - t2) * h;
        return vec4<f32>(min(c, outer), max(c, outer));
    }
    // This interior rectangle fills antialiasing seams without changing the union.
    let l1 = abs(first.x) + abs(first.y);
    let l2 = abs(second.x) + abs(second.y);
    let low = c - t1 * min(l1, h) - t2 * h;
    let high = c + t1 * h + t2 * min(l2, h);
    return vec4<f32>(min(low, high), max(low, high));
}

fn orthogonalDistance(p: vec2<f32>, bounds: vec4<f32>) -> f32 {
    if (any(bounds.zw <= bounds.xy)) { return 1e20; }
    let distance = max(bounds.xy - p, p - bounds.zw);
    return max(distance.x, distance.y);
}

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
    @location(5) @interpolate(flat) orthogonalEndpoints: vec4<f32>,
    @location(6) orthogonalPosition: vec2<f32>,
    @location(7) @interpolate(flat) orthogonalPart: u32,
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
    out.orthogonalEndpoints = vec4<f32>(0.0);
    out.orthogonalPosition = vec2<f32>(0.0);
    out.orthogonalPart = 0u;
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

    let a = projectClampedPosition(
        vec2<f32>(getScaled_x(i), getScaled_y(i)),
        vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i)), i);
    let b = projectClampedPosition(
        vec2<f32>(getScaled_x2(i), getScaled_y2(i)),
        vec2<f32>(getScaled_x2Offset(i), getScaled_y2Offset(i)), i);

    if (params.uShape == SHAPE_ORTHOGONAL && all(a == b)) { return culledLink(); }

#if defined(xClampRange_DEFINED) || defined(yClampRange_DEFINED)
    if (all(a == b)) { return culledLink(); }
#endif

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

    var p: vec2<f32>;
    var normal: vec2<f32>;
    if (params.uShape == SHAPE_ORTHOGONAL) {
        p = a;
        normal = vec2<f32>(0.0);
    } else {
        // Match Core's de Casteljau evaluation for stable long links.
        let q1 = mix(p1, p2, t);
        let q2 = mix(p2, p3, t);
        let q3 = mix(p3, p4, t);
        let r1 = mix(q1, q2, t);
        let r2 = mix(q2, q3, t);
        p = mix(r1, r2, t);
        let tangent = normalize(3.0 * (r2 - r1));
        normal = vec2<f32>(-tangent.y, tangent.x);
    }

    var size = getScaled_size(i);
    // Avoid artifacts in very thin lines by clamping the size and adjusting
    // opacity accordingly.
    if (size < pixelSize) {
        opacity *= size / pixelSize;
        size = pixelSize;
    }

    // Add AA padding to the stroke width.
    let paddedSize = select(size + pixelSize, max(size, params.uMinPickingSize), pickingEnabled);
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

    var orthogonalPart = 0u;
    let orthogonalWidth = select(size, max(size, params.uMinPickingSize), pickingEnabled);
    if (params.uShape == SHAPE_ORTHOGONAL) {
        // Three quads joined by degenerate triangles; fragment ownership
        // prevents overdraw while keeping fill proportional to stroke area.
        orthogonalPart = (v + 1u) / 6u;
        let corner = u32(clamp(i32((v + 1u) % 6u) - 1, 0, 3));
        var bounds = orthogonalBounds(orthogonalPart, a, b, orthogonalWidth * 0.5);
        if (all(bounds.zw > bounds.xy)) {
            bounds += vec4<f32>(-pixelSize, -pixelSize, pixelSize, pixelSize);
        }
        p = mix(bounds.xy, bounds.zw, vec2<f32>(f32(corner % 2u), f32(corner / 2u)));
    } else {
        p = p + normal * normalDistance;
    }

    let clip = vec2<f32>(
        (p.x / globals.width) * 2.0 - 1.0,
        1.0 - (p.y / globals.height) * 2.0
    );

    var out: VSOut;
#if defined(PLACEMENT_ENABLED)
    out.placementClip = placementClipBounds(i);
#endif
    out.pos = vec4<f32>(placeClampedGeometry(clip, i), 0.0, 1.0);
    let color = getScaled_color(i);
    out.color = premultiplyAlpha(vec4<f32>(color.rgb, color.a * opacity));
    out.normalDistance = normalDistance;
    out.fadeDistance = fadeDistance;
    out.size = select(paddedSize, orthogonalWidth, params.uShape == SHAPE_ORTHOGONAL);
    out.orthogonalEndpoints = vec4<f32>(a, b);
    out.orthogonalPosition = p;
    out.orthogonalPart = orthogonalPart;
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
    if (params.uShape == SHAPE_ORTHOGONAL) {
        var nearest = 1e20;
        var coverageDistance = 1e20;
        var owner = 0u;
        for (var part = 0u; part < 4u; part++) {
            let d = orthogonalDistance(in.orthogonalPosition,
                orthogonalBounds(part, in.orthogonalEndpoints.xy, in.orthogonalEndpoints.zw, in.size * 0.5));
            if (part < 3u && d < nearest) { nearest = d; owner = part; }
            coverageDistance = min(coverageDistance, d);
        }
        if (owner != in.orthogonalPart) { discard; }
        alpha = clamp(select(0.5, 0.0, pickingEnabled) - coverageDistance * globals.dpr, 0.0, 1.0);
    }
    if (in.fadeDistance >= 0.0) {
        alpha *= 1.0 - smoothstep(params.uArcFadingDistance.x, params.uArcFadingDistance.y, in.fadeDistance);
    }
    // Geometric coverage and arc fading affect hits; authored alpha does not.
    return select(in.color, vec4<f32>(1.0), pickingEnabled) * alpha;
}

@fragment
fn fs_main(in: VSOut) -> @location(0) vec4<f32> {
#if defined(PLACEMENT_ENABLED)
    if (!isInsidePlacementClip(in.pos, in.placementClip)) { discard; }
#endif
    return shade(in);
}
`,Li=class extends Zn{get propertySlotDefinitions(){return{minPickingSize:{uniform:`uMinPickingSize`,default:3},arcFadingDistance:{uniform:`uArcFadingDistance`,default:[0,0]},noFadingOnSecondPass:{uniform:`uNoFadingOnSecondPass`,default:!1,encode:e=>+!!e},arcHeightFactor:{uniform:`uArcHeightFactor`,default:1},minArcHeight:{uniform:`uMinArcHeight`,default:1.5},linkShape:{uniform:`uShape`,default:`arc`,encode:Ni},orient:{uniform:`uOrient`,default:`vertical`,encode:Pi},clampApex:{uniform:`uClampApex`,default:!1,encode:e=>+!!e},maxChordLength:{uniform:`uMaxChordLength`,default:5e4},segments:{uniform:`uSegmentBreaks`,default:101,encode:e=>Math.round(e)}}}_initializeExtraUniforms(){Ai(this,this.propertySlotDefinitions)}_setExtraUniformValue(e,t){super._setExtraUniformValue(e,t),e==`uShape`&&(this._shape=Number(t)),e==`uSegmentBreaks`&&(this._segmentCount=Math.round(Number(t)))}get channelSpecs(){return Fi}get shaderBody(){return Ii}get usesPickingEnabledInVertex(){return!0}get primitiveTopology(){return`triangle-strip`}getExtraUniformLayout(){return[{name:`uMinPickingSize`,type:`f32`,components:1},{name:`uArcFadingDistance`,type:`f32`,components:2},{name:`uNoFadingOnSecondPass`,type:`u32`,components:1},{name:`uArcHeightFactor`,type:`f32`,components:1},{name:`uMinArcHeight`,type:`f32`,components:1},{name:`uShape`,type:`u32`,components:1},{name:`uOrient`,type:`u32`,components:1},{name:`uClampApex`,type:`u32`,components:1},{name:`uMaxChordLength`,type:`f32`,components:1},{name:`uSegmentBreaks`,type:`f32`,components:1}]}draw(e,t){let n=Math.max(1,this._segmentCount??1),r=this._shape==ji.indexOf(`orthogonal`)?16:(n+1)*2;e.draw(r,t.instanceCount,0,t.firstInstance)}},Ri=Object.freeze({type:`link`,createProgram(e,t,n){return new Li(e,t,n)}}),zi=[`triangle`,`open`],Bi=[`inside`,`outside`];function Vi(e){return 1/Math.max(Math.tan(Math.min(Math.max(e,1),90)*Math.PI/180),1e-6)}function Hi(e){let t=zi.indexOf(e);if(t<0)throw Error(`Unknown arrow head shape: ${String(e)}`);return t}function Ui(e){let t=Bi.indexOf(e);if(t<0)throw Error(`Unknown arrow head placement: ${String(e)}`);return t}var Wi={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{type:`f32`,components:1},x2:{type:`f32`,components:1},y:{type:`f32`,components:1},y2:{type:`f32`,components:1},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},fill:{type:`f32`,components:4,default:[0,0,0,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},fillOpacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:1},size:{type:`f32`,components:1,default:8},direction:{type:`u32`,components:1,default:0}},Gi=`
${xe}

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
        let ci = distanceToRatio(-d - halfStroke);
        let cf = distanceToRatio(-d);
        let co = distanceToRatio(halfStroke - d);
        return ci * fillColor
            + (cf - ci) * (strokeColor + (1.0 - strokeColor.a) * fillColor)
            + (co - cf) * strokeColor;
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
    if (pickingEnabled) {
        if (d >= halfStroke) { discard; }
        return vec4<f32>(1.0);
    }
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
    let a = projectClampedPosition(vec2<f32>(getScaled_x(i), getScaled_y(i)),
        vec2<f32>(getScaled_xOffset(i), getScaled_yOffset(i)), i);
    let b = projectClampedPosition(vec2<f32>(getScaled_x2(i), getScaled_y2(i)),
        vec2<f32>(getScaled_x2Offset(i), getScaled_y2Offset(i)), i);
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
    out.pos = vec4<f32>(placeClampedGeometry(clip, i), 0.0, 1.0);
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
`,Ki=class extends Zn{get propertySlotDefinitions(){return{headAngle:{uniform:`uHeadSlope`,default:45,encode:Vi},headNotchAngle:{uniform:`uHeadNotchSlope`,default:90,encode:Vi},minSize:{uniform:`uMinSize`,default:1},headWidth:{uniform:`uHeadWidth`,default:3},startNotch:{uniform:`uStartNotch`,default:!1,encode:e=>+!!e},minStemLength:{uniform:`uMinStemLength`,default:0},headSpacing:{uniform:`uHeadSpacing`,default:null,encode:e=>e??-1},stem:{uniform:`uStem`,default:!0,encode:e=>e===!1?0:1},headShape:{uniform:`uHeadShape`,default:`triangle`,encode:Hi},headPlacement:{uniform:`uHeadPlacement`,default:`inside`,encode:Ui}}}_initializeExtraUniforms(){Ai(this,this.propertySlotDefinitions)}get channelSpecs(){return Wi}get shaderBody(){return Gi}get primitiveTopology(){return`triangle-list`}getExtraUniformLayout(){return[{name:`uHeadSlope`,type:`f32`,components:1},{name:`uHeadNotchSlope`,type:`f32`,components:1},{name:`uMinSize`,type:`f32`,components:1},{name:`uHeadWidth`,type:`f32`,components:1},{name:`uStartNotch`,type:`u32`,components:1},{name:`uMinStemLength`,type:`f32`,components:1},{name:`uHeadSpacing`,type:`f32`,components:1},{name:`uStem`,type:`u32`,components:1},{name:`uHeadShape`,type:`u32`,components:1},{name:`uHeadPlacement`,type:`u32`,components:1}]}},qi=Object.freeze({forward:0,reverse:1,both:2}),Ji=Object.freeze({type:`arrow`,createProgram(e,t,n){return new Ki(e,t,n)}}),V=Object.freeze({tileSize:128,shapePadding:24,spread:24,gutter:1,tightPacking:!0});function Yi(e){if(typeof e!=`object`||!e)return!1;let t=e;return typeof t.getGlyph==`function`&&typeof t.getPairAdjustment==`function`&&typeof t.unitsPerEm==`number`}function Xi(e,t,n={}){let r=n.fontSize??12,i=n.lineHeight??1,a=n.letterSpacing??0,o=t.unitsPerEm,s=r/o,c=a/s,l=(t.ascender-t.descender+t.lineGap)*s*i,u=[],d=[],f=[],p=[],m=new Float32Array(e.length),h=new Float32Array(e.length),g=[],_=Array(t.glyphCount),v=(V.tileSize-V.shapePadding*2)/o;for(let n=0;n<e.length;n++){let r=e[n].split(`
`),i=0;for(let e=0;e<r.length;e++){let o=Array.from(r[e],e=>t.getGlyph(e)),m=o.map(()=>({placement:0,advance:0}));for(let e=0;e+1<o.length;e++){let n=t.getPairAdjustment(o[e].glyphId,o[e+1].glyphId);m[e].placement+=n.firstPlacement,m[e].advance+=n.firstAdvance,m[e+1].placement+=n.secondPlacement,m[e+1].advance+=n.secondAdvance}let h=0;for(let t=0;t<o.length;t++){let r=o[t],i=m[t];if(r.path!==null&&r.bounds!==null){let t=_[r.glyphId];if(t===void 0){let e=r.bounds.xMax-r.bounds.xMin,n=r.bounds.yMax-r.bounds.yMin,i=Math.max(1,Math.ceil(e*v+V.shapePadding*2)),a=Math.max(1,Math.ceil(n*v+V.shapePadding*2));t=g.length,g.push({glyphId:r.glyphId,path:r.path,bounds:r.bounds,tileWidth:i,tileHeight:a}),_[r.glyphId]=t}let a=g[t],o=(r.bounds.xMin+r.bounds.xMax)*.5-a.tileWidth/v*.5;u.push(t),d.push(n),f.push((h+i.placement+o)*s),p.push(-e*l)}h+=r.advanceWidth+i.advance+c}let y=o.length>0?h*s-a:0;i=Math.max(i,y)}m[n]=i,h[n]=Math.max(1,r.length)*l}return{glyphIds:Uint32Array.from(u),stringIndex:Uint32Array.from(d),xOffset:Float32Array.from(f),yOffset:Float32Array.from(p),textWidth:m,textHeight:h,fontSize:r,lineAdvance:l,ascent:t.ascender*s,descent:-t.descender*s,outlineGlyphs:g}}var Zi=class{#e;#t;#n;#r;#i=!1;#a=new Set;constructor(e,t){if(this.#t=e,this.#e=t.format??`rgba16float`,this.#n=t.label??`MSDF atlas`,this.#r=t.growthFactor??2,!(this.#r>1)||!Number.isFinite(this.#r))throw Error(`MSDF atlas growth factor must be greater than one.`);this.#o(t.width,t.height),this.width=t.width,this.height=t.height,this.version=1,this.texture=this.#s(this.width,this.height)}#o(e,t){let n=this.#t.limits.maxTextureDimension2D;if(!Number.isInteger(e)||!Number.isInteger(t)||e<=0||t<=0||e>n||t>n)throw Error(`Invalid MSDF atlas texture dimensions.`)}#s(e,t){return this.#t.createTexture({label:this.#n,size:[e,t],format:this.#e,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}#c(e){return this.#t.queue.onSubmittedWorkDone().then(()=>e.destroy(),()=>e.destroy())}subscribe(e){if(this.#i)throw Error(`MSDF atlas texture has been destroyed.`);return this.#a.add(e),()=>this.#a.delete(e)}grow(e,t){if(this.#i)throw Error(`MSDF atlas texture has been destroyed.`);if(this.#o(Math.max(this.width,e),Math.max(this.height,t)),e<=this.width&&t<=this.height)return!1;let n=this.width,r=this.height;for(;n<e;)n=Math.min(this.#t.limits.maxTextureDimension2D,Math.ceil(n*this.#r));for(;r<t;)r=Math.min(this.#t.limits.maxTextureDimension2D,Math.ceil(r*this.#r));this.#o(n,r);let i=this.texture,a=this.#s(n,r),o=this.#t.createCommandEncoder({label:F(this.#n,`growth copy`)});o.copyTextureToTexture({texture:i},{texture:a},[this.width,this.height]),this.#t.queue.submit([o.finish()]),this.texture=a,this.width=n,this.height=r,this.version++,this.#c(i);for(let e of this.#a)e(this);return!0}destroy(){this.#i||(this.#i=!0,this.#a.clear(),this.texture.destroy())}},Qi=512,$i=128,ea=32,ta=class{#e;#t;#n;#r;#i=new Map;#a=0;#o=0;#s=0;#c=!1;constructor(e,t){this.#e=e.device,this.#t=t,this.#n=ui(e),this.#r=new Zi(this.#e,{width:Qi,height:$i,label:`outline font atlas`,growthFactor:1.5}),this.sampler=this.#e.createSampler({label:`outline font atlas sampler`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,magFilter:`linear`,minFilter:`linear`})}get texture(){return this.#r.texture}get width(){return this.#r.width}get height(){return this.#r.height}get version(){return this.#r.version}get entryCount(){return this.#i.size}subscribe(e){return this.#r.subscribe(()=>e(this))}ensure(e){if(this.#c)throw Error(`Outline font atlas has been destroyed.`);let t=new Set,n=e.filter(e=>this.#i.has(e.path)||t.has(e.path)?!1:(t.add(e.path),!0));for(let e=0;e<n.length;e+=ea)this.#l(n.slice(e,e+ea));return e.map(e=>this.#i.get(e.path))}#l(e){let t=e.map(e=>e.path),n=this.#n.createAtlas(t,{...V,normalizationSpan:this.#t.unitsPerEm},`outline glyph batch`);n.completion.catch(()=>{});let r=this.#u(n.jobs),i=this.#e.createCommandEncoder({label:F(`outline font atlas`,`batch copy`)});for(let e=0;e<t.length;e++){let a=n.jobs[e],o=r[e];i.copyTextureToTexture({texture:n.texture,origin:[a.slotX,a.slotY,0]},{texture:this.texture,origin:[o.x,o.y,0]},[a.slotWidth,a.slotHeight,1]),this.#i.set(t[e],{x:o.x+a.gutter+.5,y:o.y+a.gutter+.5,width:a.tileWidth-1,height:a.tileHeight-1})}this.#e.queue.submit([i.finish()]),this.#e.queue.onSubmittedWorkDone().then(()=>n.destroy(),()=>n.destroy())}#u(e){let t=this.width;for(let n of e)for(;t<n.slotWidth;)t*=2;let n=this.#a,r=this.#o,i=this.#s,a=e.map(e=>{n>0&&n+e.slotWidth>t&&(n=0,r+=i,i=0);let a={x:n,y:r};return n+=e.slotWidth,i=Math.max(i,e.slotHeight),a}),o=r+i;return this.#r.grow(t,o),this.#a=n,this.#o=r,this.#s=i,a}destroy(){this.#c||(this.#c=!0,this.#i.clear(),this.#r.destroy())}},na=new WeakMap;function ra(e,t){let n=na.get(e);n||(n=new WeakMap,na.set(e,n));let r=n.get(t);return r||(r=e._ownResource(new ta(e,t)),n.set(t,r)),r}var ia=`
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
`;function aa(e,t,n){if(!e)return n(t);if(e.data!==void 0||`dynamic`in e&&e.dynamic||n(e.value??(`default`in e?e.default:void 0)??t))return!0;let r=`conditions`in e?e.conditions:[];for(let e of r??[])if(e.value!==void 0){if(n(e.value))return!0}else if(aa(e.channel,t,n))return!0;return!1}function oa(e){return typeof e!=`number`||e>0}function sa(e){return!Array.isArray(e)||e.length<4||e[3]>0}function ca(e){let t=aa(e?.strokeWidth,0,oa)&&aa(e?.strokeOpacity,1,oa)&&aa(e?.stroke,[0,0,0,1],sa),n=aa(e?.shadowOpacity,0,oa)&&aa(e?.shadowColor,[0,0,0,1],sa);return t*1+n*2}function la(e){let t=ca(e),n=!!(t&1),r=!!(t&2);return{shadow:r,outline:n,enabled:r||n}}function ua(e){let t=new Uint32Array(e.textWidth.length+1);for(let n of e.stringIndex)t[n+1]++;for(let e=1;e<t.length;e++)t[e]+=t[e-1];return t}function da(e,t){let n=ua(e),r=1+ +t.shadow+ +t.outline,i=new Uint32Array(e.glyphIds.length*r*2),a=new Uint32Array(e.textWidth.length+1),o=0,s=(e,t,n)=>{for(let r=e;r<t;r++){let e=o*2;i[e]=r,i[e+1]=n,o++}};for(let r=0;r<e.textWidth.length;r++){let e=n[r],i=n[r+1];t.shadow&&s(e,i,0),t.outline&&s(e,i,1),s(e,i,2),a[r+1]=o}return{data:i,offsets:a}}var fa={...be,uniqueId:{type:`u32`,components:1,optional:!0},x:{components:1,scale:z(),default:.5},x2:{components:1,scale:z(),optional:!0},y:{components:1,scale:z(),default:.5},y2:{components:1,scale:z(),optional:!0},xOffset:{type:`f32`,components:1,default:0},x2Offset:{type:`f32`,components:1,default:0},yOffset:{type:`f32`,components:1,default:0},y2Offset:{type:`f32`,components:1,default:0},text:{type:`u32`,components:1,default:0},size:{type:`f32`,components:1,default:12},angle:{type:`f32`,components:1,default:0},dx:{type:`f32`,components:1,default:0},dy:{type:`f32`,components:1,default:0},align:{type:`u32`,components:1,default:1},baseline:{type:`u32`,components:1,default:1},fill:{type:`f32`,components:4,default:[0,0,0,1]},stroke:{type:`f32`,components:4,default:[0,0,0,1]},opacity:{type:`f32`,components:1,default:1},strokeOpacity:{type:`f32`,components:1,default:1},strokeWidth:{type:`f32`,components:1,default:0},shadowColor:{type:`f32`,components:4,optional:!0},shadowOpacity:{type:`f32`,components:1,optional:!0},shadowOffsetX:{type:`f32`,components:1,optional:!0},shadowOffsetY:{type:`f32`,components:1,optional:!0},shadowBlur:{type:`f32`,components:1,optional:!0}};function pa(e){return`
${xe}
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

${ia}

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
    if (pickingEnabled && layer != TEXT_LAYER_FILL) {
        return culledText();
    }
    if (!pickingEnabled && (layerColor.a <= 0.0 || opacity * layerOpacityMultiplier <= 0.0 ||
            (layer == TEXT_LAYER_OUTLINE && layerExtent <= 0.0))) {
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
    var anchor = clampPlacedPosition(applyPlacementPixel(anchorPosition, i) + positionOffset, i);
    var rangeScale = 1.0;
    var logoSize = vec2<f32>(size);

#if defined(x2_DEFINED)
    let x2 = clampPlacedPosition(applyPlacementPixel(vec2<f32>(getScaled_x2(i), anchorPosition.y), i) + vec2<f32>(getScaled_x2Offset(i), 0.0), i).x;
#if defined(xClampRange_DEFINED)
    if (anchor.x == x2) { return culledText(); }
#endif
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
    let y2 = clampPlacedPosition(applyPlacementPixel(vec2<f32>(anchorPosition.x, getScaled_y2(i)), i) + vec2<f32>(0.0, getScaled_y2Offset(i)), i).y;
#if defined(yClampRange_DEFINED)
    if (anchor.y == y2) { return culledText(); }
#endif
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
    // Like WebGL, pick glyph quads, including counters and transparent paint.
    if (pickingEnabled) { return vec4<f32>(1.0); }
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
`}function ma({channels:e={},count:t,font:n,fontSize:r,lineHeight:i,letterSpacing:a}={}){let o={...e},s=o.text;o.text={value:0,type:`u32`,components:1,scale:{type:`identity`}};let c=la(e);if(!Yi(n))throw Error(`Text marks require a TrueType outline font.`);c.shadow&&(o.shadowColor??={value:[0,0,0,1]},o.shadowOpacity??={value:0},o.shadowOffsetX??={value:0},o.shadowOffsetY??={value:0},o.shadowBlur??={value:0});let l=c.enabled?`glyphs[renderItems[i].glyphIndex].stringIndex`:`glyphs[i].stringIndex`,u=ga(s,t),d=ha(u,n,{fontSize:r,lineHeight:i,letterSpacing:a});return{normalized:{channels:o,count:u.length,seriesIndexExpression:l},textLayout:d,effects:c}}function ha(e,t,n){return Xi(e,t,{fontSize:typeof n.fontSize==`number`?n.fontSize:12,lineHeight:typeof n.lineHeight==`number`?n.lineHeight:1,letterSpacing:typeof n.letterSpacing==`number`?n.letterSpacing:0})}function ga(e,t){if(e&&`data`in e&&e.data!==void 0){if(Array.isArray(e.data))return e.data;throw Error(`Text channel data must be a string array when no textLayout is provided.`)}if(e&&`value`in e&&e.value!==void 0){if(typeof e.value!=`string`)throw Error(`Text channel value must be a string when no textLayout is provided.`);let n=e.value;return Array.from({length:t??1},()=>n)}return Array.from({length:t??0},()=>``)}function _a(e){return{texture:e.texture,sampler:e.sampler,width:e.width,height:e.height,format:`rgba16float`}}var va=class extends Zn{get usesPickingEnabledInVertex(){return this._markConfig.effects.enabled}get propertySlotDefinitions(){return{viewport:{uniform:`uViewport`,getDefault:()=>[0,0,this.renderer._globals.width,this.renderer._globals.height]},viewportEdgeFadeWidth:{uniform:`uViewportEdgeFadeWidth`,default:[0,0,0,0]},viewportEdgeFadeDistance:{uniform:`uViewportEdgeFadeDistance`,default:[-1/0,-1/0,-1/0,-1/0]},paddingX:{uniform:`uPaddingX`,default:0},paddingY:{uniform:`uPaddingY`,default:0},flushX:{uniform:`uFlushX`,default:!0,encode:e=>+!!e},flushY:{uniform:`uFlushY`,default:!0,encode:e=>+!!e},squeeze:{uniform:`uSqueeze`,default:!0,encode:e=>+!!e},logoLetters:{default:!1,set:e=>{this._setUniformValue(`uLogoLetters`,+!!e),this._setUniformValue(`uSdfNumerator`,this._sdfNumeratorBase*(e?.5:1))}}}}_initializeExtraUniforms(){Ai(this,this.propertySlotDefinitions)}constructor(e,t,n){let{normalized:r,textLayout:i,effects:a}=ma(t);super(e,{...t,...r,textLayout:i,effects:a},n);let o;try{o=this._seriesBuffers.inferCount()}catch(e){throw this.destroy(),e}if(o!==null&&o!==r.count)throw this.destroy(),Error(`Text series data count (${o}) does not match text count (${r.count}).`);delete this._markConfig.textLayout}get drawCount(){return this._drawOffsets.length-1}resolveDrawRange(e,t){let n=this._drawOffsets[e];return{firstInstance:n,instanceCount:this._drawOffsets[e+t]-n}}get channelSpecs(){return fa}get shaderBody(){let e=this._markConfig?.effects;return pa(e||{enabled:!1,shadow:!1,outline:!1})}getExtraUniformLayout(){return[{name:`uFontBase`,type:`f32`,components:1},{name:`uLayoutFontSize`,type:`f32`,components:1},{name:`uAtlasScale`,type:`f32`,components:2},{name:`uCapHeight`,type:`f32`,components:1},{name:`uDescent`,type:`f32`,components:1},{name:`uSdfNumerator`,type:`f32`,components:1},{name:`uShapePixels`,type:`f32`,components:1},{name:`uSpread`,type:`f32`,components:1},{name:`uPaddingX`,type:`f32`,components:1},{name:`uPaddingY`,type:`f32`,components:1},{name:`uFlushX`,type:`u32`,components:1},{name:`uFlushY`,type:`u32`,components:1},{name:`uSqueeze`,type:`u32`,components:1},{name:`uLogoLetters`,type:`u32`,components:1},{name:`uViewport`,type:`f32`,components:4},{name:`uViewportEdgeFadeWidth`,type:`f32`,components:4},{name:`uViewportEdgeFadeDistance`,type:`f32`,components:4}]}getExtraResourceDefs(){let e=[{name:`glyphs`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphs`,wgslType:`array<GlyphInstance>`},{name:`stringMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`stringMetrics`,wgslType:`array<StringMetrics>`},{name:`glyphMetrics`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`glyphMetrics`,wgslType:`array<GlyphMetrics>`},{name:`fontAtlas`,role:`extraTexture`,kind:`texture`,sampleType:`float`,dimension:`2d`,visibility:`fragment`,wgslName:`fontAtlas`},{name:`fontAtlas`,role:`extraSampler`,kind:`sampler`,samplerType:`filtering`,visibility:`fragment`,wgslName:`fontSampler`}];return this._markConfig.effects.enabled&&e.push({name:`renderItems`,role:`extraBuffer`,kind:`buffer`,bufferType:`read-only-storage`,visibility:`vertex`,wgslName:`renderItems`,wgslType:`array<RenderItem>`}),e}_initializeExtraResources(){let e=this._markConfig.textLayout;this._initializeOutlineFontResources(e,this._markConfig.font),this._setUniformValue(`uLayoutFontSize`,e.fontSize),this._updateTextLayoutBuffers(e)}_initializeOutlineFontResources(e,t){let n=ra(this.renderer,t);this._updateOutlineGlyphMetrics(e,t,n);let r=V.tileSize-V.shapePadding*2,i=r/t.unitsPerEm;this._setUniformValue(`uFontBase`,r),this._setUniformValue(`uAtlasScale`,[1/n.width,1/n.height]),this._setUniformValue(`uCapHeight`,t.capHeight*i),this._setUniformValue(`uDescent`,-t.descender*i),this._setUniformValue(`uShapePixels`,r),this._setUniformValue(`uSpread`,V.spread),this._sdfNumeratorBase=r*.35,this._extraTextures.set(`fontAtlas`,_a(n)),this._borrowedExtraTextures.add(`fontAtlas`),this._outlineAtlas=n,this._outlineAtlasUnsubscribe=n.subscribe(e=>{this._setUniformValue(`uAtlasScale`,[1/e.width,1/e.height]),this._extraTextures.set(`fontAtlas`,_a(e)),this._writeUniforms(),this._rebuildBindGroup(),this.renderer._invalidate()})}_updateOutlineGlyphMetrics(e,t,n){let r=n.ensure(e.outlineGlyphs),i=(V.tileSize-V.shapePadding*2)/t.unitsPerEm,a=new Float32Array(e.outlineGlyphs.length*8);for(let t=0;t<e.outlineGlyphs.length;t++){let n=t*8,o=e.outlineGlyphs[t],s=r[t];a[n]=s.x,a[n+1]=s.y,a[n+2]=s.width,a[n+3]=s.height,a[n+4]=-(o.bounds.yMin+o.bounds.yMax)*.5*i-o.tileHeight*.5,a[n+5]=(o.bounds.xMax-o.bounds.xMin)*i,a[n+6]=(o.bounds.yMax-o.bounds.yMin)*i}return this._writeExtraBuffer(`glyphMetrics`,a)}_updateTextLayoutBuffers(e){let t=e.glyphIds.length,n=new ArrayBuffer(t*16),r=new Uint32Array(n),i=new Float32Array(n);for(let n=0;n<t;n++){let t=n*4;r[t]=e.stringIndex[n],r[t+1]=e.glyphIds[n],i[t+2]=e.xOffset[n],i[t+3]=e.yOffset?e.yOffset[n]:0}let a=this._writeExtraBuffer(`glyphs`,n),o=e.textWidth.length,s=new Float32Array(o*2);for(let t=0;t<o;t++){let n=t*2;s[n]=e.textWidth[t],s[n+1]=e.textHeight[t]}a=this._writeExtraBuffer(`stringMetrics`,s)||a;let c=this._markConfig.effects;if(c.enabled){let t=da(e,c);a=this._writeExtraBuffer(`renderItems`,t.data)||a,this._drawOffsets=t.offsets}else this._drawOffsets=ua(e);return a}_writeExtraBuffer(e,t){let n=t.byteLength,r=Math.max(4,n),i=this._extraBuffers.get(e),a=!i||i.size<r;return a&&(i?.destroy(),i=this.device.createBuffer({label:F(this.label,e),size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._extraBuffers.set(e,i)),n>0&&this.device.queue.writeBuffer(i,0,ArrayBuffer.isView(t)?N(t):t),a}replaceSeries(e,t){let n=e.text,r;if(typeof n==`string`){if(t===void 0)throw Error(`Replacing a scalar text series requires an explicit count.`);r=Array.from({length:t},()=>n)}else if(Array.isArray(n)){if(r=n,t!==void 0&&t!==r.length)throw Error(`Text series count (${r.length}) does not match count (${t}).`)}else throw Error(`Text series replacement requires a string or string[] "text" channel.`);let i=ha(r,this._markConfig.font,this._markConfig),a=this._resolveSeries(e),o=this._seriesBuffers.inferCount(a);if(o!==null&&o!==r.length)throw Error(`Text series data count (${o}) does not match text count (${r.length}).`);let s=this._updateTextLayoutBuffers(i);s=this._updateOutlineGlyphMetrics(i,this._markConfig.font,this._outlineAtlas)||s,this.updateSeries(a,r.length,s)}destroy(){this._outlineAtlasUnsubscribe?.(),super.destroy()}},ya=new WeakMap;function ba(e){if(!Yi(e.font))throw TypeError(`Text marks require a TrueType outline font.`);let t=e.font,n=ca(e.channels);if(n===0)return t;let r=ya.get(t);return r||(r=[{},{},{},{}],ya.set(t,r)),r[n]}var xa=Object.freeze({type:`text`,getProgramKey:ba,createProgram(e,t,n){return new va(e,t,n)}});function Sa(e,t,n){if(!n)return null;let r=Array.from(n,t=>{if(!Number.isFinite(t)||!Number.isInteger(t))throw Error(`Ordinal domain on "${e}" requires integer u32 values.`);if(t<0||t>4294967295)throw Error(`Ordinal domain on "${e}" must fit in u32 values.`);if(t===4294967295)throw Error(`Ordinal domain on "${e}" must not contain 0xffffffff.`);return t>>>0}),i=new Set;for(let t of r){if(i.has(t))throw Error(`Ordinal domain on "${e}" must not contain duplicates.`);i.add(t)}return r}var Ca={type:`band`,input:`u32`,output:`f32`,params:[{prefix:Xe,defaultValue:0,prop:`paddingInner`},{prefix:Ze,defaultValue:0,prop:`paddingOuter`},{prefix:Qe,defaultValue:.5,prop:`align`},{prefix:$e,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,wgsl:`
// TODO: domainExtent should be uint
fn scaleBand(value: u32, domainExtent: vec2<f32>, range: vec2<f32>,
        paddingInner: f32, paddingOuter: f32,
        align: f32, band: f32) -> f32 {

    let reverse = range.y < range.x;
    var start = select(range.x, range.y, reverse);
    let stop = select(range.y, range.x, reverse);
    let rangeSpan = stop - start;

    let n = domainExtent.y - domainExtent.x;

    // Match Vega's band space, including singleton domains with padding.
    let space = n - paddingInner + paddingOuter * 2.0;
    let step = rangeSpan / select(1.0, space, space > 0.0);
    start += (rangeSpan - step * (n - paddingInner)) * align;
    let bandwidth = step * (1.0 - paddingInner);

    var offset = f32(value) - domainExtent.x;
    if (reverse) {
        offset = (n - 1.0) - offset;
    }
    return start + offset * step + bandwidth * band;
}
`,resources:{stopKind:`continuous`,needsDomainMap:!0,needsOrdinalRange:!1},normalizeDomainMap:Ea,validate:Ta,emit:wa};Object.freeze(Ca);function wa({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,domainMapName:i,scaleConfig:a}){let o=Ct(n,r),s=Ue+e,c=Jt(a),l=a?.gapAxis??(e.startsWith(`y`)?`y`:`x`),u=c?`params.gapTable_${e}, params.gapGeometry_${e}, `:``;return`${yt(e,`f32`,t)} {
    var mapped = ${o};
    ${i?`
    if (params.${s} >= 0.0) {
        mapped = ${Cn(i)}(mapped, params.${Be}${e}.y);
        if (mapped == HASH_NOT_FOUND) { return bitcast<f32>(mapped | 0x7fc00000u); }
    }`:``}
    return ${c?`scaleBandGaps`:`scaleBand`}(
        mapped,
        ${bt(e)},
        ${St(e)},
        ${u}params.${Xe}${e},
        params.${Ze}${e},
        params.${Qe}${e},
        params.${$e}${e}${c?`, gapPlacementFactor(i, ${+(l===`y`)}u)`:``}
    );
}`}function Ta({name:e,channel:t,inputComponents:n,needsDomainMap:r}){if(r){if(n!==1)return`Band scale on "${e}" requires scalar inputs when using an ordinal domain.`;if(M(t)&&typeof t.value==`number`&&!Number.isInteger(t.value))return`Band scale on "${e}" requires integer values when using an ordinal domain.`}return null}function Ea({name:e,domain:t}){let n=Sa(e,`band`,t);return n?{domainMap:n,domainUniform:[0,n.length]}:null}var Da=Ca;function Oa(e={}){return R(Da,e)}var ka=Tt;function Aa(e={}){return R(ka,e)}var ja={type:`index`,input:`u32`,output:`f32`,params:[{prefix:Xe,defaultValue:0,prop:`paddingInner`},{prefix:Ze,defaultValue:0,prop:`paddingOuter`},{prefix:Qe,defaultValue:.5,prop:`align`},{prefix:$e,defaultValue:.5,prop:`band`}],continuous:!1,vectorOutput:`never`,allowsU32InputOverride:!0,allowsPackedScalarInput:!0,wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:()=>({domainLength:3,rangeLength:2}),normalizeDomain:Na,emit:Ma};Object.freeze(ja);function Ma({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,inputComponents:i,scaleConfig:a}){let o=i===2?n:Ct(n,r),s=i===2?`scaleBandHpU`:`scaleBandHp`;if(Jt(a)){let n=i===2?o:`vec2<u32>(${o} >> 12u, ${o} & 4095u)`,r=a.gapAxis??(e.startsWith(`y`)?`y`:`x`),s=a.gapPeer?`gapKeyGreater(v, gapPeer_${a.gapPeer}(i, v))`:`${!!a.gapBefore}`;return`${yt(e,`f32`,t)} {
    let v = ${n};
    return scaleIndexGaps(v, ${xt(e)}, ${St(e)}, params.gapTable_${e}, params.gapGeometry_${e},
        params.${Xe}${e}, params.${Ze}${e},
        params.${Qe}${e}, params.${$e}${e}, ${s}, gapPlacementFactor(i, ${+(r===`y`)}u), 1.0);
}`}return`${yt(e,`f32`,t)} {
    let v = ${o};
    return ${s}(
        v,
        ${xt(e)},
        ${St(e)},
        params.${Xe}${e},
        params.${Ze}${e},
        params.${Qe}${e},
        params.${$e}${e}
    );
}`}function Na({name:e,scale:t,domain:n}){if(!Array.isArray(n)&&!ArrayBuffer.isView(n))throw Error(`Scale on "${e}" expects a domain array.`);let r=n;if(r.length===3)return[r[0],r[1],r[2]];if(r.length===2)return ye(r[0],r[1]);throw Error(`Scale domain for "${e}" must have 2 or 3 entries for "${t.type}" scales.`)}var Pa=ja;function Fa(e={}){return R(Pa,e)}var Ia={type:`log`,input:`numeric`,output:`f32`,params:[{prefix:qe,defaultValue:10,prop:`base`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Qn],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:La};Object.freeze(Ia);function La(e){return wt(e,({name:e,valueExpr:t})=>`scaleLog(${t}, ${bt(e)}, ${St(e)}, params.${qe}${e})`)}var Ra=Ia;function za(e={}){return R(Ra,e)}var Ba={type:`ordinal`,input:`u32`,output:`f32`,params:[],continuous:!1,vectorOutput:`always`,allowsU32InputOverride:!0,resources:{stopKind:null,needsDomainMap:!0,needsOrdinalRange:!0},normalizeDomainMap:Ua,validate:Ha,emit:Va};Object.freeze(Ba);function Va({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainMapName:o}){let s=i===1?a:`vec${i}<f32>`,c=i===1?a===`u32`?`0u`:a===`i32`?`0`:`0.0`:`vec4<f32>(0.0)`,l=Ct(n,r),u=Ue+e;if(o){let n=i===1&&a===`f32`?`bitcast<f32>(raw | 0x7fc00000u)`:c;return`${yt(e,s,t)} {
    let raw = ${l};
    var idx = raw;
    if (params.${u} >= 0.0) {
        idx = ${Cn(o)}(raw, params.${Be}${e}.y);
        if (idx == HASH_NOT_FOUND) { return ${n}; }
    }
    let count = u32(params.${Ve}${e});
    if (count == 0u) { return ${c}; }
    let slot = idx % count;
    return readRange_${e}(slot);
}`}return`${yt(e,s,t)} {
    let idx = ${l};
    let count = u32(params.${Ve}${e});
    if (count == 0u) { return ${c}; }
    let slot = idx % count;
    return readRange_${e}(slot);
}`}function Ha({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but ordinal scales only support scalars or vec4 outputs.`;let i=t.scale?.range;if(!Array.isArray(i)||i.length===0)return`Ordinal scale on "${e}" requires a non-empty range.`;if(r!==1)return`Ordinal scale on "${e}" requires scalar input values.`;if(M(t)){if(Array.isArray(t.value))return`Ordinal scale on "${e}" requires scalar integer values.`;if(typeof t.value==`number`&&!Number.isInteger(t.value))return`Ordinal scale on "${e}" requires integer values.`}return null}function Ua({name:e,domain:t}){let n=Sa(e,`ordinal`,t);return n?{domainMap:n}:null}var Wa=Ba;function Ga(e={}){return R(Wa,e)}var Ka={type:`pow`,input:`numeric`,output:`f32`,params:[{prefix:Je,defaultValue:1,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Qn],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:qa};Object.freeze(Ka);function qa(e){return wt(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${bt(e)}, ${St(e)}, params.${Je}${e})`)}var Ja=Ka;function Ya(e={}){return R(Ja,e)}var Xa={type:`quantize`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},getStopLengths:$a,validate:Qa,emit:Za};Object.freeze(Xa);function Za({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,rangeLength:o}){if(o<1)throw Error(`Quantize scale on "${e}" must define at least one range entry.`);let s=i===1?a:`vec${i}<f32>`,c=[];return r!==`f32`&&c.push(ft(r)),c.push(vt({name:e,rangeLength:o,outputComponents:i,outputScalarType:a})),dt({name:e,functionName:t,rawValueExpr:n,steps:c,returnType:s})}function Qa({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but quantize scales only support scalars or vec4 outputs.`;if(r!==1)return`Quantize scale on "${e}" requires scalar input values.`;let i=t.scale?.domain;if(Array.isArray(i)&&i.length!==2)return`Quantize scale on "${e}" requires a domain with exactly two entries.`;let a=t.scale?.range;return a!==void 0&&!Array.isArray(a)?`Quantize scale on "${e}" requires an explicit array range.`:Array.isArray(a)&&a.length<1?`Quantize scale on "${e}" requires at least one range entry.`:null}function $a({scale:e}){let t=Array.isArray(e.range)?e.range:[0,1];if(t.length<1)throw Error(`Quantize scale on "${e.type}" requires at least one range entry.`);return{domainLength:2,rangeLength:t.length}}var eo=Xa;function to(e={}){return R(eo,e)}var no={type:`sqrt`,input:`numeric`,output:`f32`,params:[{prefix:Je,defaultValue:.5,prop:`exponent`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Ka],resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:ro};Object.freeze(no);function ro(e){return wt(e,({name:e,valueExpr:t})=>`scalePow(${t}, ${bt(e)}, ${St(e)}, params.${Je}${e})`)}var io=no;function ao(e={}){return R(io,e)}var oo={type:`symlog`,input:`numeric`,output:`f32`,params:[{prefix:Ye,defaultValue:1,prop:`constant`}],continuous:!0,vectorOutput:`interpolated`,wgslDeps:[Qn],wgsl:`
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
`,resources:{stopKind:`continuous`,needsDomainMap:!1,needsOrdinalRange:!1},emit:so};Object.freeze(oo);function so(e){return wt(e,({name:e,valueExpr:t})=>`scaleSymlog(${t}, ${bt(e)}, ${St(e)}, params.${Ye}${e})`)}var co=oo;function lo(e={}){return R(co,e)}var uo={type:`threshold`,input:`numeric`,output:`same`,params:[],continuous:!1,vectorOutput:`always`,allowsF32InputOverride:!0,resources:{stopKind:`threshold`,needsDomainMap:!1,needsOrdinalRange:!1},validate:po,emit:fo};Object.freeze(uo);function fo({name:e,functionName:t,rawValueExpr:n,inputScalarType:r,outputComponents:i,outputScalarType:a,domainLength:o,rangeLength:s}){if(o<1||s!==o+1)throw Error(`Threshold scale on "${e}" requires domain length N and range length N+1.`);let c=i===1?a:`vec${i}<f32>`,l=[];return r!==`f32`&&l.push(ft(r)),l.push(_t({name:e,domainLength:o,outputComponents:i,outputScalarType:a})),dt({name:e,functionName:t,rawValueExpr:n,steps:l,returnType:c})}function po({name:e,channel:t,outputComponents:n,inputComponents:r}){if(n!==1&&n!==4)return`Channel "${e}" uses ${n} components but threshold scales only support scalars or vec4 outputs.`;let i=t.scale?.domain,a=t.scale?.range;return!Array.isArray(i)||i.length===0?`Threshold scale on "${e}" requires a non-empty domain.`:!Array.isArray(a)||a.length<2?`Threshold scale on "${e}" requires at least two range entries.`:a.length===i.length+1?r===1?null:`Threshold scale on "${e}" requires scalar input values.`:`Threshold scale on "${e}" requires range length of ${i.length+1}, got ${a.length}.`}var mo=uo;function ho(e={}){return R(mo,e)}var go=new WeakMap;function _o(e,t){return go.get(e)?.get(t)}function vo(e,t,n){let r=go.get(e);r||(r=new Map,go.set(e,r));for(let[e,i]of r)if(i.param===t&&i.input===n)return e;let i=r.size,a;do a=`__categorySelection`+i++;while(e.unitView.paramRuntime.findConfiguredParam(a)||r.has(a));return r.set(a,{param:t,input:n}),a}var yo=[`circle`,`square`,`cross`,`diamond`,`triangle-up`,`triangle-right`,`triangle-down`,`triangle-left`,`tick-up`,`tick-right`,`tick-down`,`tick-left`,`x`,`+`],bo=new Map([[`left`,0],[`center`,1],[`right`,2]]),xo=new Map([[`alphabetic`,0],[`baseline`,0],[`middle`,1],[`top`,2],[`bottom`,3]]),So=new Map([[`inside`,0],[`center`,1],[`outside`,2]]),Co=new Map([[`butt`,0],[`square`,1],[`round`,2]]),wo=new Map(Object.entries(qi)),To=new Map([`none`,`diagonal`,`antiDiagonal`,`cross`,`vertical`,`horizontal`,`grid`,`dots`,`rings`,`ringsLarge`].map((e,t)=>[e,t])),Eo=[`viewportEdgeFadeWidthTop`,`viewportEdgeFadeWidthRight`,`viewportEdgeFadeWidthBottom`,`viewportEdgeFadeWidthLeft`],Do=[`viewportEdgeFadeDistanceTop`,`viewportEdgeFadeDistanceRight`,`viewportEdgeFadeDistanceBottom`,`viewportEdgeFadeDistanceLeft`],Oo=new WeakMap,ko=new WeakMap;function Ao(e,t,n,r=1,i,a){Po(e);let o=typeof r==`function`?r:()=>r,s=i??te(e,t);if(s.length==0)return;let c=e.encoders.facetIndex?{data:Io(e,s),type:`u32`}:a,l=e.getType(),u,d;if(l==`point`)u=gi,d=Vo(e,s,n,o);else if(l==`rect`)u=Si,d=Bo(e,s,n,o,typeof r!=`function`);else if(l==`rule`||l==`tick`)u=ki,d=Go(e,s,n,o);else if(l==`text`)u=xa,d=Ko(e,s,n,o);else if(l==`link`)u=Ri,d=qo(e,s,n,o);else if(l==`arrow`)u=Ji,d=Jo(e,s,n,o);else throw X(e,`Mark type "${l}" is not supported.`);for(let t of e.nonvisualInputs){let n=e.encoders[t];d.inputs??={},d.inputs[t]={data:As(e,t,s,n.branches[0].accessor,n.scale).values,type:`u32`}}return jo(u,Fo(d,c,e,n),e)}function jo(e,t,n){let r=n.getOrder?.();r&&(t.order={when:zo(n,r.predicate.selection),matching:r.passes[0]===`matching`?`first`:`last`});let i=t.retainedProperties??{};return delete t.retainedProperties,{definition:e,config:t,properties:i}}function Mo(e){return Po(e),e.getRenderingRevision(`configuration`)}function No(e){return Po(e),e.getRenderingRevision(`resources`)}function Po(e){e.initializeRenderingRevisions([])}function Fo(e,t,n,r){t&&(e.placementIndex=t);for(let t of[`x`,`y`])if(b(n,t)){let i=n.getType()===`text`?0:t===`x`?r.x:r.y,a=t===`x`?r.width:r.height;e.channels[t+`ClampRange`]={value:[i,i+a],dynamic:!0}}return e}function Io(e,t){let n=e.encoders.facetIndex,r=ko.get(e);if(r?.data===t&&r.encoder===n)return r.values;let i=new Uint32Array(t.length);for(let r=0;r<t.length;r++){let a=Number(n(t[r]));if(!Number.isInteger(a)||a<0||a>4294967295)throw X(e,`Facet indices must be non-negative integers.`);i[r]=a}return ko.set(e,{data:t,encoder:n,values:i}),i}function Lo(e,t,n,r){let i=Cs(e,t),a=i.branches,o=a.at(-1);if(!o)throw X(e,`Channel "${t}" has no fallback branch.`);let s=r(Ro(e,i,o),o);return a.length==1||(s.conditions=a.slice(0,-1).map(t=>{let n=r(Ro(e,i,t),t);return{when:zo(e,t.predicate.selection),channel:n}})),s}function Ro(e,t,n){let r=n.accessor,i=r.scaleChannel?e.unitView.getScaleResolution(r.scaleChannel)?.getScale():t.scale;if(r.scaleChannel&&!i)throw X(e,`Missing scale for conditional channel "${r.channel}".`);return Object.assign(e=>r(e),{constant:r.constant??t.constant,branches:[n],scale:i,channelDef:r.channelDef??t.channelDef})}function zo(e,n){if(`all`in n)return{all:n.all.map(t=>zo(e,t))};if(`any`in n)return{any:n.any.map(t=>zo(e,t))};if(`not`in n)return{not:zo(e,n.not)};if(`selectionActive`in n){let{param:r,type:i,components:a}=n.selectionActive;if(i===`categories`){let n=t(e.encoding,a[0],t=>e.unitView.getScaleResolution(t).getScale()).input;return{selectionActive:{selection:vo(e,r,n),type:`multi`}}}return{selectionActive:i===`interval`?{selection:r,type:i,components:a}:{selection:r,type:i}}}if(n.type===`categories`){let t=n.projections[0].input;return{selection:vo(e,n.param,t),type:`multi`,input:e.getType()===`text`&&t===`color`?`fill`:t,empty:n.empty}}return n.type===`interval`?{selection:n.param,type:`interval`,projections:n.projections.map(({component:e,input:t,secondaryInput:n,hitTest:r})=>({component:e,input:t,secondaryInput:n,hitTest:r})),empty:n.empty}:{selection:n.param,type:n.type,empty:n.empty}}function Bo(e,t,n,r,i){return e.initializeRenderingRevisions([`cornerRadius`,`cornerRadiusTopRight`,`cornerRadiusBottomRight`,`cornerRadiusTopLeft`,`cornerRadiusBottomLeft`,`minWidth`,`minHeight`,`minOpacity`,`shadowOffsetX`,`shadowOffsetY`,`shadowBlur`,`shadowOpacity`,`shadowColor`,`hatch`]),{count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n),x2:H(e,`x2`,t,n),y:H(e,`y`,t,n),y2:H(e,`y2`,t,n),xOffset:U(e,`xOffset`,t),x2Offset:U(e,`x2Offset`,t),yOffset:U(e,`yOffset`,t),y2Offset:U(e,`y2Offset`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:ns(e,`fillOpacity`,t,r),strokeOpacity:ns(e,`strokeOpacity`,t,r),strokeWidth:U(e,`strokeWidth`,t,!0),cornerRadiusTopRight:Rs(e,[`cornerRadius`,`cornerRadiusTopRight`],()=>Is(e).topRight),cornerRadiusBottomRight:Rs(e,[`cornerRadius`,`cornerRadiusBottomRight`],()=>Is(e).bottomRight),cornerRadiusTopLeft:Rs(e,[`cornerRadius`,`cornerRadiusTopLeft`],()=>Is(e).topLeft),cornerRadiusBottomLeft:Rs(e,[`cornerRadius`,`cornerRadiusBottomLeft`],()=>Is(e).bottomLeft),minWidth:Y(()=>K(e,`minWidth`)),minHeight:Y(()=>K(e,`minHeight`)),minOpacity:Y(()=>K(e,`minOpacity`)),shadowOffsetX:Y(()=>q(e,`shadowOffsetX`,0)),shadowOffsetY:Y(()=>q(e,`shadowOffsetY`,0)),shadowBlur:Y(()=>q(e,`shadowBlur`,0)),shadowOpacity:Rs(e,[`shadowOpacity`],()=>q(e,`shadowOpacity`,0)*r(),void 0,!i),shadowColor:Y(()=>Us(e,J(e,`shadowColor`)??`black`)),hatchPattern:Rs(e,[`hatch`],()=>Ls(e,`hatch`,To,`none`),`u32`)}}}function Vo(e,t,n,r){e.initializeRenderingRevisions([`fillGradientStrength`,`inwardStroke`,`minPickingSize`,`semanticZoomFraction`]);let i=Uo(e,t),a=Ho(e,t);return{...a.config,count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n),y:H(e,`y`,t,n),size:U(e,`size`,t),...a.channel,strokeWidth:U(e,`strokeWidth`,t),xOffset:U(e,`xOffset`,t),yOffset:U(e,`yOffset`,t),dx:ds(e,`x`,t),dy:ds(e,`y`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:ns(e,`fillOpacity`,t,r),strokeOpacity:ns(e,`strokeOpacity`,t,r),angle:U(e,`angle`,t),gradientStrength:Y(()=>K(e,`fillGradientStrength`)),inwardStroke:Y(()=>+!!J(e,`inwardStroke`),`u32`),minPickingSize:Y(()=>q(e,`minPickingSize`,2))},...i}}function Ho(e,t){let n=e.encoders.shape;if(n.constant)return{config:{shape:String(n(t[0]))},channel:{}};let r=Array.from(yo),i=new Set(r),a=e=>{let t=String(e);i.has(t)||(i.add(t),r.push(t))};for(let e of n.branches)if(n.scale)for(let e of n.scale.range())a(e);else for(let n of t)a(e.accessor(n));let o=new Map(r.map((e,t)=>[e,t]));return{config:{shapes:r},channel:{shape:is(e,`shape`,t,o)}}}function Uo(e,t){let n=e.encoders.semanticScore;if(!n||(ws(e,`semanticScore`,n),n.constant))return{};let r=n.branches[0].accessor,i=Ts(e,`semanticScore`,t,r),a=Wo(e),o={compare:`>=`,left:{input:`semanticScoreInput`},right:{slot:`semanticThreshold`}},s=a.length>0?{any:[...a,o]}:o;return{inputs:{semanticScoreInput:{data:i,type:`f32`}},scalarSlots:{semanticThreshold:zs(()=>e.getSemanticThreshold(),`f32`)},visibleWhen:s}}function Wo(e){return a(o(e.encoders)).map(t=>zo(e,t))}function Go(e,t,n,r){e.initializeRenderingRevisions([`strokeAlign`,`minLength`,`strokeCap`,`strokeDashOffset`]);let i=J(e,`strokeDash`);return{count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n),x2:H(e,`x2`,t,n),y:H(e,`y`,t,n),y2:H(e,`y2`,t,n),xOffset:U(e,`xOffset`,t),x2Offset:U(e,`x2Offset`,t),yOffset:U(e,`yOffset`,t),y2Offset:U(e,`y2Offset`,t),size:U(e,`size`,t),fill:W(e,`fill`,t),...e.getType()===`rule`?{strokeAlign:Y(()=>So.get(J(e,`strokeAlign`))??2,`u32`),fillOpacity:U(e,`fillOpacity`,t),stroke:W(e,`stroke`,t),strokeWidth:U(e,`strokeWidth`,t),strokeOpacity:U(e,`strokeOpacity`,t)}:{},opacity:ns(e,`opacity`,t,r),minLength:Y(()=>K(e,`minLength`)),strokeCap:Y(()=>Ls(e,`strokeCap`,Co),`u32`),strokeDashOffset:Y(()=>K(e,`strokeDashOffset`)),strokeDash:{value:0,type:`u32`}},dashPatterns:i==null?null:[i]}}function Ko(e,t,n,r){let i=fs(e,`size`,t[0]),a=e.encoders,o=e.unitView.context.textMetrics,s=e.properties,c=o.getPreparedFont(s);if(!c)throw X(e,`Outline font is not prepared.`);return{count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n,ms),...e.encoders.x2?{x2:H(e,`x2`,t,n,ms)}:{},y:H(e,`y`,t,n,ms),...e.encoders.y2?{y2:H(e,`y2`,t,n,ms)}:{},text:us(e,t),size:U(e,`size`,t),angle:U(e,`angle`,t),xOffset:U(e,`xOffset`,t),yOffset:U(e,`yOffset`,t),dx:ds(e,`x`,t),dy:ds(e,`y`,t),...a.x2Offset?{x2Offset:U(e,`x2Offset`,t)}:{},...a.y2Offset?{y2Offset:U(e,`y2Offset`,t)}:{},align:{value:Ls(e,`align`,bo),type:`u32`},baseline:{value:Ls(e,`baseline`,xo),type:`u32`},fill:W(e,`color`,t),opacity:ns(e,`opacity`,t,r)},font:c,fontStyle:J(e,`fontStyle`),fontWeight:J(e,`fontWeight`),fontSize:i,viewport:[n.x,n.y,n.x2,n.y2],viewportEdgeFadeWidth:Ns(e,Eo,[0,0,0,0]),viewportEdgeFadeDistance:Ns(e,Do,[-1/0,-1/0,-1/0,-1/0]),paddingX:K(e,`paddingX`),paddingY:K(e,`paddingY`),flushX:!!J(e,`flushX`),flushY:!!J(e,`flushY`),squeeze:!!J(e,`squeeze`),logoLetters:!!J(e,`logoLetters`),retainedProperties:{viewport:Bs(()=>[n.x,n.y,n.x2,n.y2]),...Hs(e,`viewportEdgeFadeWidth`,Eo,[0,0,0,0]),...Hs(e,`viewportEdgeFadeDistance`,Do,[-1/0,-1/0,-1/0,-1/0]),...Vs(e,{paddingX:e=>e,paddingY:e=>e,flushX:e=>!!e,flushY:e=>!!e,squeeze:e=>!!e,logoLetters:e=>!!e})}}}function qo(e,t,n,r){return{count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n),x2:H(e,`x2`,t,n),y:H(e,`y`,t,n),y2:H(e,`y2`,t,n),xOffset:U(e,`xOffset`,t),x2Offset:U(e,`x2Offset`,t),yOffset:U(e,`yOffset`,t),y2Offset:U(e,`y2Offset`,t),size:U(e,`size`,t),color:W(e,`color`,t),opacity:ns(e,`opacity`,t,r)},minPickingSize:q(e,`minPickingSize`,3),linkShape:J(e,`linkShape`)??`arc`,orient:J(e,`orient`)??`vertical`,arcFadingDistance:Fs(e,`arcFadingDistance`),noFadingOnSecondPass:!!J(e,`noFadingOnSecondPass`),arcHeightFactor:q(e,`arcHeightFactor`,1),minArcHeight:q(e,`minArcHeight`,1.5),clampApex:!!J(e,`clampApex`),maxChordLength:q(e,`maxChordLength`,5e4),segments:q(e,`segments`,101),retainedProperties:Vs(e,{arcFadingDistance:e=>e||[0,0],noFadingOnSecondPass:e=>!!e,arcHeightFactor:e=>e,minArcHeight:e=>e,linkShape:e=>e??`arc`,orient:e=>e??`vertical`,clampApex:e=>!!e,maxChordLength:e=>e,segments:e=>e,minPickingSize:e=>e})}}function Jo(e,t,n,r){let i=q(e,`headAngle`,45),a=q(e,`headNotchAngle`,90);return{count:t.length,channels:{...xs(e,t),x:H(e,`x`,t,n),x2:H(e,`x2`,t,n),y:H(e,`y`,t,n),y2:H(e,`y2`,t,n),xOffset:U(e,`xOffset`,t),x2Offset:U(e,`x2Offset`,t),yOffset:U(e,`yOffset`,t),y2Offset:U(e,`y2Offset`,t),fill:W(e,`fill`,t),stroke:W(e,`stroke`,t),fillOpacity:ns(e,`fillOpacity`,t,r),strokeOpacity:ns(e,`strokeOpacity`,t,r),strokeWidth:U(e,`strokeWidth`,t),size:U(e,`size`,t),direction:is(e,`direction`,t,wo)},headAngle:i,headNotchAngle:a,minSize:q(e,`minSize`,1),headWidth:q(e,`headWidth`,3),startNotch:!!J(e,`startNotch`),minStemLength:q(e,`minStemLength`,0),headSpacing:Ps(e,`headSpacing`),stem:J(e,`stem`)!==!1,headShape:J(e,`headShape`)??`triangle`,headPlacement:J(e,`headPlacement`)??`inside`,retainedProperties:Vs(e,{headAngle:e=>e,headNotchAngle:e=>e,minSize:e=>e,headWidth:e=>e,startNotch:e=>!!e,minStemLength:e=>e,headSpacing:e=>e,stem:e=>e!==!1,headShape:e=>e??`triangle`,headPlacement:e=>e??`inside`})}}function H(e,t,n,r,i=ps){return Lo(e,t,n,a=>Yo(e,t,n,r,a,i))}function Yo(t,r,i,a,o,s){let c=o.branches[0].accessor,l=n(o.channelDef)?void 0:o.scale,u=s(r,a,l),d=o.channelDef.band??(C(o.channelDef)&&l&&e(l.props)?0:.5);if(l?.type==`band`||l?.type==`point`||l?.type==`ordinal`){let{intern:e,readDomain:n}=js(t,r,l),f=o.constant?Y(()=>e(c(i[0])),`u32`):{data:Ms(t,r,i,c,()=>Es(i,t=>e(c(t)))),type:`u32`};return Object.assign(f,{scale:l.type==`ordinal`?Zo(l,s(r,a,void 0),n):Xo(l,u,n,d,r)})}if(l?.type==`index`||l?.type==`locus`){let e=x(l.domain().map(Number)),n=o.constant?ks(t,r,()=>c(i[0]),e):{data:Ds(t,r,i,c,e),type:`u32`};return Object.assign(n,{...e?{inputComponents:2}:{},scale:Qo(l,u,d,r,C(o.channelDef))})}let f=o.constant?Y(()=>{let e=Number(c(i[0]));if(!Number.isFinite(e))throw X(t,`Channel "${r}" is not finite.`);return e},`f32`):{data:Ts(t,r,i,c),type:`f32`};return Object.assign(f,{scale:hs(t,r,l,u)})}function Xo(e,t,n,r,i){let a=e,o=G(Oa({domain:n(),range:t,paddingInner:e.type==`point`?1:a.paddingInner(),paddingOuter:a.paddingOuter(),align:a.align(),band:r}),n);return Object.defineProperty(o,"viewport",{enumerable:!0,get:()=>e.viewport()}),$o(o,e,i)}function Zo(e,t,n){let r=()=>e.range().map(e=>t[0]+Number(e)*(t[1]-t[0]));return G(Ga({domain:n(),range:r()}),n,r)}function Qo(e,t,n,r,i){let a=e;return $o(G(Fa({domain:e.domain().map(Number),range:t,paddingInner:a.paddingInner(),paddingOuter:a.paddingOuter(),align:a.align(),band:n}),()=>e.domain().map(Number)),e,r,i)}function $o(t,n,r,i){if(!e(n.props))return t;let a=n;Object.assign(t,{gapEnabled:!0,gapAxis:r[0]===`y`?`y`:`x`});let o=[`gapPositions`,`gapWidth`];`gapDomain`in a&&(Object.assign(t,{gapPeer:i}),o.push(`gapDomain`));for(let e of o)Object.defineProperty(t,e,{enumerable:!0,get:()=>a[e]()});return t}function U(e,t,n,r=!1){return Lo(e,t,n,i=>r&&es(i)?{value:Number(i(n[0]))}:ts(e,t,n,i))}function es(e){let t=e.channelDef;return e.constant&&!e.scale&&(n(t)&&!p(t.value)||_(t)&&!p(t.datum))}function ts(e,t,n,r){if(r.constant)return Y(()=>Number(r(n[0])));let i=r.branches[0].accessor;if(r.scale?.type==`ordinal`||r.scale?.type==`band`||r.scale?.type==`point`){let{values:a,readDomain:o}=As(e,t,n,i,r.scale);return{data:a,type:`u32`,scale:r.scale.type==`ordinal`?gs(e,t,r.scale,1,o):Xo(r.scale,r.scale.range(),o,r.channelDef.band??.5,t)}}let a={data:Ts(e,t,n,i),type:`f32`},o=gs(e,t,r.scale);return o?{...a,scale:o}:a}function ns(e,t,n,r){return Lo(e,t,n,i=>rs(e,t,n,r,i))}function rs(e,t,n,r,i){if(i.constant)return Y(()=>Number(i(n[0]))*r());let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=As(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:gs(e,t,i.scale,r,s)}}let o=i.scale?.type==`identity`?void 0:gs(e,t,i.scale,r);return o?{data:Ts(e,t,n,a),type:`f32`,scale:o}:{data:Ts(e,t,n,a),type:`f32`,scale:G(z({domain:[0,1],range:[0,r()]}),void 0,()=>[0,r()])}}function is(e,t,n,r){return Lo(e,t,n,i=>as(e,t,n,r,i))}function as(e,t,n,r,i){if(i.constant)return Y(()=>ys(e,t,r,i(n[0])),`u32`);let a=i.branches[0].accessor;if(i.scale?.type==`ordinal`){let{values:o,readDomain:s}=As(e,t,n,a,i.scale);return{data:o,type:`u32`,scale:G(Ga({domain:s(),range:i.scale.range().map(n=>ys(e,t,r,n))}),s,()=>i.scale.range().map(n=>ys(e,t,r,n)))}}return i.scale?.type==`threshold`?{data:Ts(e,t,n,a),type:`f32`,scale:G(ho({domain:i.scale.domain().map(Number),range:bs(e,t,r,i.scale)}),()=>i.scale.domain().map(Number),()=>bs(e,t,r,i.scale))}:{data:Ms(e,t,n,a,()=>Es(n,n=>ys(e,t,r,a(n)))),type:`u32`}}function W(e,t,n){return Lo(e,t,n,r=>os(e,t,n,r))}function os(e,t,n,r){if(r.constant)return Y(()=>Us(e,r(n[0])));let i=r.branches[0].accessor,a=r.scale;if(!a)return{data:Ms(e,t,n,i,()=>{let t=new Float32Array(n.length*4);return ie(n,(n,r)=>{t.set(Us(e,i(n)),r*4)}),t}),type:`f32`,inputComponents:4};if(a.type==`ordinal`){let{values:r,readDomain:o}=As(e,t,n,i,a);return{data:r,type:`u32`,inputComponents:1,scale:ss(e,t,a,o)}}return{data:Ts(e,t,n,i),type:`f32`,inputComponents:1,scale:ss(e,t,a)}}function ss(e,t,n,r){let i=n;if(n.type==`ordinal`)return G(Ga({domain:r?.(),range:n.range()}),r,()=>n.range());if(n.type==`sequential-linear`||n.type==`diverging-linear`)return G(z({domain:ls(n),range:i.interpolator(),clamp:i.clamp()}),()=>ls(n),()=>i.interpolator());if(n.type==`sequential-log`)return G(za({domain:ls(n),range:i.interpolator(),base:i.base(),clamp:i.clamp()}),()=>ls(n),()=>i.interpolator());if(n.type==`linear`)return G(z({domain:n.domain().map(Number),range:n.range(),interpolate:i.interpolate(),clamp:i.clamp()}),()=>n.domain().map(Number),()=>n.range());if(n.type==`threshold`)return G(ho({domain:n.domain().map(Number),range:cs(e,n.range())}),()=>n.domain().map(Number),()=>cs(e,n.range()));if(n.type==`quantize`)return G(to({domain:n.domain().map(Number),range:cs(e,n.range())}),()=>n.domain().map(Number),()=>cs(e,n.range()));throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}function cs(e,t){return t.map(t=>typeof t==`string`?Us(e,t):t)}function ls(e){let t=e.domain().map(Number);return[t[0],t.at(-1)]}function us(e,t){let n=Cs(e,`text`);ws(e,`text`,n);let i=n.channelDef,a=`format`in i?r(i.format):e=>e,o=e=>{let t=a(n(e));return t==null?``:String(t)};return n.constant?{value:o(t[0])}:{data:Ms(e,`text`,t,n.branches[0].accessor,()=>t.map(o))}}function ds(e,t,n){let r=t==`x`?`dx`:`dy`,i=e.encoders[r];if(!i)return Y(()=>K(e,r));ws(e,r,i);let a=Ro(e,i,i.branches[0]),o=e=>Number(a(e));if(a.constant)return Y(()=>o(n[0]));let s=new Float32Array(n.length);return ie(n,(e,t)=>{s[t]=o(e)}),{data:s,type:`f32`}}function fs(e,t,n){let r=Cs(e,t),i=Number(r(n));if(!Number.isFinite(i))throw X(e,`Channel "${t}" is not finite.`);return i}function ps(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.x2,t.x]:[t.x,t.x2]:r?[t.y,t.y2]:[t.y2,t.y]}function ms(e,t,n){let r=n?.props?.reverse;return e[0]==`x`?r?[t.width,0]:[0,t.width]:r?[0,t.height]:[t.height,0]}function hs(e,t,n,r){return!n||n.type==`null`?z({domain:[0,1],range:r}):_s(e,t,n,r)}function gs(e,t,n,r=1,i){if(!n||n.type==`null`)return;if(n.type==`identity`)return Aa();let a=typeof r==`function`?r:()=>r;return _s(e,t,n,()=>n.range().map(e=>Number(e)*a()),i)}function _s(e,t,n,r,i){let a=n,o=typeof i==`function`?i:i?()=>i:()=>n.domain().map(Number),s=typeof r==`function`?r:()=>r,c={domain:o(),range:s(),clamp:vs(a,`clamp`,!1)};vs(a,`round`,!1)&&(c.round=!0);let l;switch(n.type){case`linear`:case`sequential-linear`:case`diverging-linear`:l=z(c);break;case`log`:l=za({...c,base:vs(a,`base`,10)});break;case`pow`:l=Ya({...c,exponent:vs(a,`exponent`,1)});break;case`sqrt`:l=ao(c);break;case`symlog`:l=lo({...c,constant:vs(a,`constant`,1)});break;case`quantize`:l=to(c);break;case`threshold`:l=ho(c);break;case`ordinal`:l=Ga(c);break;default:throw X(e,`Scale type "${n.type}" on channel "${t}" is not supported.`)}return G(l,o,s)}function G(e,t,n){return Object.defineProperties(e,{...t?{domain:{enumerable:!0,get:t}}:{},...n?{range:{enumerable:!0,get:n}}:{}}),e}function vs(e,t,n){let r=e[t];return typeof r==`function`?r():r??n}function ys(e,t,n,r){let i=n.get(String(r));if(i===void 0)throw X(e,`Unsupported ${t}: ${String(r)}`);return i}function bs(e,t,n,r){let i=r.domain(),a=r.range().map(r=>ys(e,t,n,r));for(;a.length<i.length+1;)a.push(a.at(-1));return a}function xs(e,t){let n=e.encoders.uniqueId;if(!n)return{};if(ws(e,`uniqueId`,n),n.constant)return{uniqueId:Y(()=>Ss(e,`uniqueId`,n(t[0])),`u32`)};let r=n.branches[0].accessor;return{uniqueId:{data:Ms(e,`uniqueId`,t,r,()=>Es(t,t=>Ss(e,`uniqueId`,r(t)))),type:`u32`}}}function Ss(e,t,n){let r=Number(n);if(!Number.isSafeInteger(r)||r<0||r>4294967295)throw X(e,`Channel "${t}" must contain u32 integers.`);return r}function Cs(e,t){let n=e.encoders[t];if(!n)throw X(e,`Missing encoder for channel "${t}".`);return n}function ws(e,t,n){if(n.branches.length!=1)throw X(e,`Conditional channel "${t}" is not supported.`)}function Ts(e,t,n,r){return Ms(e,t,n,r,()=>{let i=new Float32Array(n.length);return ie(n,(n,a)=>{let o=Number(r(n));if(!Number.isFinite(o)&&!Number.isNaN(o))throw X(e,`Channel "${t}" contains an infinite value.`);i[a]=o}),i})}function Es(e,t){let n=new Uint32Array(e.length);return ie(e,(e,r)=>{n[r]=t(e)}),n}function Ds(e,t,n,r,i){return Ms(e,`${t}:${i?`large`:`regular`}`,n,r,()=>{if(!i)return Es(n,n=>Os(e,t,r(n)));let a=new Float64Array(n.length);return ie(n,(n,i)=>{a[i]=Os(e,t,r(n))}),_e(a)})}function Os(e,t,n){let r=Math.floor(Number(n));if(!Number.isSafeInteger(r)||r<0)throw X(e,`Channel "${t}" must contain finite non-negative values within the safe integer range.`);return r}function ks(e,t,n,r){if(!r)return Y(()=>Os(e,t,n()),`u32`);let i=[0],a=new Uint32Array(2),o=[0,0];return Y(()=>(i[0]=Os(e,t,n()),ve(i,a),o[0]=a[0],o[1]=a[1],o),`u32`)}function As(e,t,n,r,i){let{intern:a,readDomain:o}=js(e,t,i);return{values:Ms(e,t,n,r,()=>Es(n,e=>a(r(e)))),readDomain:o}}function js(e,t,n){let r=n.props?.domainIndexer,i=n=>Ss(e,t,r?r(n):n),a=t,o=e.encoders[a].branches.find(e=>e.accessor.scaleChannel)?.accessor.scaleChannel??u(a);if(!f(o))throw X(e,`Missing categorical scale channel.`);let s=e.unitView.getScaleResolution(o).getDomainRef(),c,l;return{intern:i,readDomain:()=>{let e=s.get();return e!==c&&(c=e,l=e.map(i)),l}}}function Ms(e,t,n,r,i){if(!(`field`in r.channelDef))return k(`seriesExtraction.`+t,i);let a=Oo.get(e);(!a||a.data!==n)&&(a={data:n,channels:new Map},Oo.set(e,a));let o=a.channels.get(t);if(o?.accessor===r)return o.series;let s=k(`seriesExtraction.`+t,i);return a.channels.set(t,{accessor:r,series:s}),s}function K(e,t){let n=J(e,t);if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function Ns(e,t,n){return t.map((t,r)=>q(e,t,n[r]))}function q(e,t,n){let r=J(e,t)??n;if(typeof r!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return r}function Ps(e,t){let n=J(e,t);if(n==null)return null;if(typeof n!=`number`)throw X(e,`Property "${t}" must be a number for the WebGPU renderer.`);return n}function Fs(e,t){let n=J(e,t);if(n==null||n===!1)return[0,0];if(!Array.isArray(n)||n.length!=2||!n.every(e=>typeof e==`number`))throw X(e,`Property "${t}" must be a pair.`);return n}function Is(e){let t=K(e,`cornerRadius`);return{topRight:q(e,`cornerRadiusTopRight`,t),bottomRight:q(e,`cornerRadiusBottomRight`,t),topLeft:q(e,`cornerRadiusTopLeft`,t),bottomLeft:q(e,`cornerRadiusBottomLeft`,t)}}function Ls(e,t,n,r){let i=String(J(e,t)??r),a=n.get(i);if(a===void 0)throw X(e,`Unsupported ${t}: ${i}`);return a}function J(e,t){let n=e.properties[t];return ee(e,n)}function Y(e,t){return Object.assign(zs(e,t),{dynamic:!0})}function Rs(e,t,n,r,i=!1){let a=e.properties;return i||t.some(e=>p(a[e]))?Y(n,r):{value:n(),...r?{type:r}:{}}}function zs(e,t){return{get value(){return e()},...t?{type:t}:{}}}function Bs(e){return{get value(){return e()}}}function Vs(e,t){e.initializeRenderingRevisions(Object.keys(t));let n={};for(let[r,i]of Object.entries(t)){let t=e.properties[r];p(t)&&(n[r]=Bs(()=>i(J(e,r))))}return n}function Hs(e,t,n,r){let i=e.properties,a=n.filter(e=>p(i[e]));return e.initializeRenderingRevisions(a),a.length==0?{}:{[t]:Bs(()=>Ns(e,n,r))}}function Us(e,t){if(t==null)return[0,0,0,0];try{return D(String(t))}catch{throw X(e,`Invalid color: ${String(t)}`)}}function X(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var Ws=new WeakMap;function Gs(e,t){let n=e.unitView.getCollector();if(!n)throw Error(`Cannot render an uninitialized mark. View: ${e.unitView.getPathString()}`);let r=t?.getSnapshot().topology,i=e.encoders?.x,a=e.encoders?.x2,o=i?e.unitView.getScaleResolution(`x`):void 0,s=o?.zoomExtent,c=Ws.get(e);if(c?.collector===n&&c.revision===n.dataRevision&&c.topology===r&&c.xEncoder===i&&c.x2Encoder===a&&c.xScaleResolution===o&&c.xIndexDomainStart===s?.[0]&&c.xIndexDomainEnd===s?.[1])return c;let l=n.facetBatches.get(void 0),u=ae(e),d=new Map,f,p;if(l?.length)p=l,d.set(l,Ks(u,p,0));else{let e=r?r.facetIds.map(e=>e?n.facetBatches.get(e)??[]:[]):Array.from(n.facetBatches.values());p=Array(e.reduce((e,t)=>e+t.length,0)),r&&(f=[]);let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=Ks(u,r,t);f?.push(i),d.set(r,i);for(let e of r)p[t++]=e}}let m={collector:n,revision:n.dataRevision,topology:r,xEncoder:i,x2Encoder:a,xScaleResolution:o,xIndexDomainStart:s?.[0],xIndexDomainEnd:s?.[1],xIndexSpec:u,data:p,ranges:d,placementRanges:f};return Ws.set(e,m),m}function Ks(e,t,n){let r={firstInstance:n,instanceCount:t.length};if(!e||!t.length)return r;A(`webgpuXIndexBuilds`);let i=se(e,t,n);return i?(r.xIndex=i,r):(A(`webgpuXIndexRejectedBuilds`),r)}function qs(e,t,n){let r=t.placement?.index;return(r===void 0?void 0:n.placementRanges?.[r])??n.ranges.get(te(e,t))??{firstInstance:0,instanceCount:0}}var Js=class extends E{#e=[];#t=new Set;#n=new Map;#r=[];#i=[];#a=0;#o=!1;#s;#c;constructor(e){if(super({}),this.surface=e.surface,e.target)this.#c=e.target;else{let t=e.surface.getLogicalCanvasSize();this.#c={width:t.width,height:t.height,dpr:e.surface.getDevicePixelRatio()}}this.#s=e.markPredicate}getDevicePixelRatio(){return this.#c.dpr}beginSampleFacetBatch(){if(this.#a)throw Error(`Nested sample facet batches are not supported.`);this.#a++,this.#r.push({type:`beginSampleFacetBatch`})}endSampleFacetBatch(){if(!this.#a)throw Error(`Unbalanced sample facet batch scope.`);this.#a--,this.#r.push({type:`endSampleFacetBatch`})}pushView(e,t){this.#t.add(e),this.#e.push({view:e,coords:t}),this.#r.push({type:`pushView`,view:e,coords:[t],localOpacity:!1,clipX:!1,clipY:!1,bounds:nc()})}popView(e){if(this.#e.pop()?.view!==e)throw Error(`Unbalanced WebGPU view rendering context stack.`);this.#r.push({type:`popView`})}renderMark(e,t){if(this.#o)throw Error(`Cannot collect WebGPU marks after finishing.`);if(this.#s&&!this.#s(e))return;let n=this.currentCoords,r=n.translate(de,de),i=this.#n.get(e);i||(i={mark:e,occurrences:[],packed:void 0,source:void 0,generatedSource:!1,facetIndexed:e.encoders.facetIndex!==void 0,xQueryDomain:[0,0],xIndexedRange:[0,0],xQueryEnabled:!1,updated:!1,active:!1,ownerCoords:void 0,definition:void 0,config:void 0,properties:void 0,configRevision:-1,resourceRevision:-1,resourcesDirty:!0,configX:NaN,configY:NaN,configWidth:NaN,configHeight:NaN,viewport:void 0,generatedRectangles:void 0},this.#n.set(e,i));let a=m(t),o={state:i,options:t,coords:n,markCoords:r,clip:h(a,e.properties.clip,n),cullClip:a,cull:e.properties.cullByVisibleRange,range:{firstInstance:0,instanceCount:0},placementIndex:i.occurrences.length,draw:void 0};i.occurrences.push(o),this.#r.push({type:`occurrence`,occurrence:o}),A(`markOccurrences`)}finish(){if(this.#o)throw Error(`The WebGPU rendering context is already finished.`);if(this.#e.length)throw Error(`Cannot finish with an open WebGPU view scope.`);if(this.#a)throw Error(`Cannot finish with an open sample facet batch.`);this.#o=!0;let e=S.create(0,0,this.#c.width,this.#c.height);for(let t of this.#n.values())this.#f(t,e);this.#i=Ys(this.#r),this.#u()}render(){return this.#l(!1)}renderPicking(){return this.#l(!0)}#l(e){if(!this.#o)throw Error(`Cannot render an unfinished WebGPU frame plan.`);for(let e of this.#t)k(`onBeforeRender`,()=>e.onBeforeRender()),A(`viewsVisited`);e||this.#d();let t=this.#c;for(let n of this.#n.values())n.updated=!1,n.active=!1,this.#p(n,e,t);let n=[],r=[],i=n,a=0,o=0,s=0;for(let n of e?this.#r:this.#i)if(n.type===`occurrence`){let r=this.#h(n.occurrence,e,t,i);r!==void 0&&(a++,o+=+(r>0),s+=r)}else if(n.type===`pushView`){if(e)r.push(void 0);else{let e=tc(n);i.push(e),r.push(i),i=e.items}}else if(n.type===`popView`){let e=r.pop();e&&(i=e)}return A(`retainedMarkSyncChecks`,a),A(`retainedMarkSyncChanges`,o),A(`retainedResourceWrites`,s),n}#u(){let e,t=``;for(let n of this.#i)if(n.type===`pushView`){n.view!==e&&(e=n.view,t=n.view.getPathString()),n.label=t;let r=l(n.view);n.localOpacity=n.view.hasLocalOpacity(),n.clipX=r.clipX,n.clipY=r.clipY}}#d(){for(let e of this.#i)e.type===`pushView`&&lc(e,this.#c)}#f(e,t){let n=new Set(e.occurrences.map(t=>{let n=t.options.placement;return e.facetIndexed||n?.index!==void 0?n?.source:void 0}).filter(Boolean));if(n.size>1)throw uc(e.mark,`One logical mark cannot use several placement sources.`);let r=n.values().next().value;if(e.generatedSource=!r&&e.occurrences.length>1,e.generatedSource){let n=e.generatedRectangles=new Float32Array(e.occurrences.length*4);sc(e,t,n),e.source=this.surface.updateOccurrencePlacements(e.mark,n),e.ownerCoords=t}else e.source=r,e.ownerCoords=e.occurrences[0].markCoords;if(e.facetIndexed&&!e.source)throw uc(e.mark,`Indexed placement requires a placement source.`);e.source&&(e.viewport=nc());for(let t of e.occurrences)t.draw=rc(t,e);this.#m(e)}#p(e,t,n){if(e.generatedRectangles&&(sc(e,n,e.generatedRectangles),this.surface.updateOccurrencePlacements(e.mark,e.generatedRectangles)),e.viewport&&oc(e.viewport,e.ownerCoords),e.mark.unitView.getEffectiveOpacity()<=0||t&&!e.mark.isPickingParticipant())return;this.#m(e);let r=Gs(e.mark,e.facetIndexed||!e.generatedSource?e.source:void 0);if(!r.data.length)return;e.xQueryEnabled=!e.facetIndexed&&!!r.xIndexSpec&&oe(r.xIndexSpec,e.xQueryDomain),e.xQueryEnabled||A(`webgpuXIndexFallbackQueries`);let i=Mo(e.mark),a=e.packed!==r,o=e.configRevision!==i,s=e.source?0:e.ownerCoords.x,c=e.source?0:e.ownerCoords.y,l=e.ownerCoords.width,u=e.ownerCoords.height,d=e.configX!==s||e.configY!==c||e.configWidth!==l||e.configHeight!==u;if(a||o||d){A(a?`markConfigurationPackedMiss`:o?`markConfigurationExpressionMiss`:`markConfigurationGeometryMiss`);let t=e.occurrences[0],n=e.source?S.create(0,0,e.ownerCoords.width,e.ownerCoords.height):e.ownerCoords,d=k(`markConfiguration`,()=>Ao(e.mark,t.options,n,1,r.data,ic(e)));e.packed=r,e.definition=d?.definition,e.config=d?.config,e.properties=d?.properties,e.configRevision=i,e.configX=s,e.configY=c,e.configWidth=l,e.configHeight=u}if(a)for(let t of e.occurrences)t.range=qs(e.mark,t.options,r);let f=No(e.mark);e.resourcesDirty||=f===void 0||a||o||d||e.resourceRevision!==f,e.resourceRevision=f??-1,e.active=!!e.config}#m(e){if(!e.source||e.generatedSource)return;let t=e.source.getSnapshot().topology.revision;for(let n of e.occurrences){let r=n.options.placement?.topologyRevision;if(r!==void 0&&r!==t)throw uc(e.mark,`Placement topology changed after layout completion.`)}}#h(e,t,n,r){let i=e.state;if(!i.active||!i.config||!i.definition||!i.packed)return;let a=e.range;if(!a.instanceCount)return;let o=e.draw;if(!o)throw Error(`Occurrence draw has not been compiled.`);ac(e,i,o,n);let s=i.generatedSource?e.placementIndex:e.options.placement?.index,c=i.facetIndexed?void 0:s;if(i.source&&!i.facetIndexed&&c===void 0)throw uc(i.mark,`Draw-level placement requires a resolved placement index.`);if(i.source&&s!==void 0&&!cc(i.source,s,i.viewport,o.scissor,n))return;let l=a.firstInstance,u=a.instanceCount;if(i.xQueryEnabled&&a.xIndex){if(a.xIndex(i.xQueryDomain[0],i.xQueryDomain[1],i.xIndexedRange),l=i.xIndexedRange[0],u=i.xIndexedRange[1]-l,A(`webgpuXIndexQueries`),A(`webgpuXIndexNativeItems`,a.instanceCount),A(`webgpuXIndexCandidateItems`,u),!u){A(`webgpuXIndexEmptyRanges`);return}}else i.xQueryEnabled&&A(`webgpuXIndexFallbackQueries`);let d;return i.updated||(i.updated=!0,i.resourcesDirty&&=(d=k(`retainedResourceSynchronization`,()=>this.surface.updateMark(i.mark,i.definition,i.config,i.properties??{})),!1)),o.firstInstance=l,o.instanceCount=u,o.placement&&(o.placement.index=c),this.surface.prepareDraw(i.mark,o,i.source),r.push(o),A(`drawCommands`),d}get currentCoords(){let e=g(this.#e);if(!e)throw Error(`No current view in WebGPU rendering context.`);return e.coords}};function Ys(e){let t=[],n,r=[];for(let i of e)i.type===`beginSampleFacetBatch`?n=Xs():i.type===`endSampleFacetBatch`?(ec(n,t),n=void 0):n?i.type===`occurrence`?Qs(n,i.occurrence.state.mark,i):i.type===`pushView`?(r.push(n),n=$s(n,i)):n=r.pop():t.push(i);return t}function Xs(){return{slots:new Map,ordered:[]}}function Zs(e,t){let n=e.slots.get(t);return n||(n={items:[]},e.slots.set(t,n),e.ordered.push(n)),n}function Qs(e,t,n){Zs(e,t).items.push(n)}function $s(e,t){let n=Zs(e,t.view);return n.command?n.command.coords.push(...t.coords):(n.command=t,n.collector=Xs()),n.collector}function ec(e,t){for(let n of e.ordered)n.command&&n.collector?(t.push(n.command),ec(n.collector,t),t.push({type:`popView`})):t.push(...n.items)}function tc(e){let t={bounds:e.bounds,items:[],label:e.label};return e.localOpacity&&(t.opacity=e.view.getOpacity()),t}function nc(){return{x:0,y:0,width:0,height:0}}function rc(e,t){let n={mark:{markId:-1},firstInstance:0,instanceCount:0};return t.viewport&&(n.viewport=t.viewport),e.clip&&(n.scissor=nc()),e.cull&&(n.visibleRange={x1:0,y1:0,x2:0,y2:0,cullX:e.cull===!0||e.cull===`x`,cullY:e.cull===!0||e.cull===`y`}),t.source&&(n.placement={set:{placementSetId:-1},...e.options.placement?.clipToPlacement?{clipToPlacement:e.options.placement.clipToPlacement}:{}}),n}function ic(e){if(!e.facetIndexed&&e.source)return{source:`draw`}}function ac(e,t,n,r){if(n.scissor){let t=e.clip;n.scissor.x=t.clipX?t.rect.x:0,n.scissor.y=t.clipY?t.rect.y:0,n.scissor.width=t.clipX?t.rect.width:r.width,n.scissor.height=t.clipY?t.rect.height:r.height}if(n.visibleRange){let r=e.coords,i=e.cullClip,a=r.x,o=r.y;if(n.visibleRange.x1=0,n.visibleRange.x2=a+r.width,n.visibleRange.y1=0,n.visibleRange.y2=o+r.height,n.visibleRange.cullX){if(i?.clipX){let e=i.rect.x;n.visibleRange.x1=e,n.visibleRange.x2=e+i.rect.width}else n.visibleRange.x1=a}if(n.visibleRange.cullY){if(i?.clipY){let e=i.rect.y;n.visibleRange.y1=e,n.visibleRange.y2=e+i.rect.height}else n.visibleRange.y1=o}t.viewport&&(n.visibleRange.x1-=t.viewport.x,n.visibleRange.x2-=t.viewport.x,n.visibleRange.y1-=t.viewport.y,n.visibleRange.y2-=t.viewport.y)}}function oc(e,t){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height}function sc(e,t,n){for(let r of e.occurrences){let e=r.markCoords,i=r.placementIndex*4;n[i]=e.x/t.width,n[i+1]=e.y/t.height,n[i+2]=Math.max(e.width,1)/t.width,n[i+3]=Math.max(e.height,1)/t.height}}function cc(e,t,n,r,i){let a=e.getSnapshot().rectangles,o=t*4;if(o+3>=a.length)return!1;let s=n.x+a[o]*n.width,c=n.y+a[o+1]*n.height,l=a[o+2]*n.width,u=a[o+3]*n.height;if(l<=0||u<=0)return!1;let d=Math.max(0,r?.x??0),f=Math.max(0,r?.y??0),p=Math.min(i.width,r?r.x+r.width:i.width),m=Math.min(i.height,r?r.y+r.height:i.height);return s<p&&c<m&&s+l>d&&c+u>f}function lc(e,t){let n=e.coords[0],r=n.x,i=n.y,a=r+n.width,o=i+n.height;for(let t=1;t<e.coords.length;t++){let n=e.coords[t];r=Math.min(r,n.x),i=Math.min(i,n.y),a=Math.max(a,n.x+n.width),o=Math.max(o,n.y+n.height)}e.bounds.x=e.clipX?r:0,e.bounds.y=e.clipY?i:0,e.bounds.width=e.clipX?a-r:t.width,e.bounds.height=e.clipY?o-i:t.height}function uc(e,t){let n=Error(`${t} Mark: ${e.getType()}. View: ${e.unitView.getPathString()}`);return n.view=e.unitView,n}var dc={r:0,g:0,b:0,a:0};function fc(e){if(e==null)return dc;try{let[t,n,r,i]=D(e);return{r:t,g:n,b:r,a:i}}catch{throw Error(`Invalid WebGPU canvas background color: ${e}`)}}var pc=class{#e=!0;#t;constructor(e){this.viewRoot=e.viewRoot,this.surface=e.surface,this.getBackground=e.getBackground,this.broadcast=e.broadcast,this.onLayoutComputed=e.onLayoutComputed}computeLayout(){this.broadcast(`layout`),this.surface.invalidateSize();let e=5;for(;;){let t=this.#n();if(!t)return;if(!this.surface.invalidateSize()){this.#t=this.#r(t),this.#e=!0,this.onLayoutComputed(),this.broadcast(`layoutComputed`);return}if(e--,e==0)throw Error(`Layout did not settle: canvas size kept changing.`)}}renderAll(){let e=this.#t;if(!e)return;let t=O();t?.beginFrame(`webgpu`);let n=k(`markTranslation`,()=>e.render());k(`surfaceRender`,()=>this.surface.render(n,fc(this.getBackground()))),this.#e=!0,t?.endFrame()}renderPickingFramebuffer(){let e=this.#t;if(!e||!this.#e)return;let t=O();t?.beginFrame(`webgpu`,`picking`);let n=k(`markTranslation`,()=>e.renderPicking());k(`surfaceRender`,()=>this.surface.renderPicking(n)),this.#e=!1,t?.endFrame()}#n(){let e=this.surface.getLogicalCanvasSize();if(!(isNaN(e.width)||isNaN(e.height)))return k(`layout`,()=>T(this.viewRoot,S.create(0,0,e.width,e.height),{devicePixelRatio:this.surface.getDevicePixelRatio(),renderingOptions:{firstFacet:!0}}))}#r(e){let t=new Js({surface:this.surface});return k(`framePlanCompilation`,()=>{e.collectRenderCommands(t),t.finish()}),t}},mc=class{#e;#t=new Map;#n=1;constructor(e){this.#e=e}getOrCreate(e,t,n){let r=this.#t.get(e),i=r?.get(t);if(i)return this.#e(`programTemplateCacheHits`),i;r||(r=new Map,this.#t.set(e,r));let a=n(this.#n++);return r.set(t,a),this.#e(`programTemplateCacheMisses`),a}},hc=`
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
`,gc=5e3,_c=class{#e;#t;#n=[];#r=new Set;#i=0;#a;constructor(e,t){this.#e=e,this.#t=t,this.#a=void 0}beginFrame(){this.#i++,this.#c()}acquire(e,t,n){let r=`${e}x${t}:${n}`,i=this.#n.findLastIndex(e=>e.key===r);if(i>=0){let e=this.#n.splice(i,1)[0];return e.generation=this.#i,e}let a=this.#e.createTexture({label:F(P,`transient ${e}x${t} ${n}x color`),size:{width:e,height:t},format:this.#t,sampleCount:n,usage:GPUTextureUsage.RENDER_ATTACHMENT|(n===1?GPUTextureUsage.TEXTURE_BINDING:0)}),o={key:r,texture:a,view:a.createView({label:F(P,`transient color view`)}),generation:this.#i,compositeBinding:null};return this.#r.add(o),o}release(e){this.#n.push(e)}endFrame(){for(let e=this.#n.length-1;e>=0;e--){let t=this.#n[e];t.generation!==this.#i&&(this.#n.splice(e,1),this.#o(t))}this.#s()}destroy(){this.#c();for(let e of this.#r)e.texture.destroy();this.#r.clear(),this.#n.length=0}#o(e){this.#r.delete(e),e.texture.destroy()}#s(){this.#c(),this.#n.length!==0&&(this.#a=setTimeout(()=>{this.#a=void 0;for(let e of this.#n)this.#o(e);this.#n.length=0},gc))}#c(){this.#a!==void 0&&(clearTimeout(this.#a),this.#a=void 0)}},vc=class{#e;#t;#n=1;#r;#i;#a=0;#o;constructor(e,t){this.#e=e,this.#t=Math.max(16,e.limits.minUniformBufferOffsetAlignment),this.#r=this.#s(this.#n),this.#i=new Float32Array(this.#n*this.#t/4);let n=e.createShaderModule({label:F(P,`composite shader`),code:hc});this.#o=e.createBindGroupLayout({label:F(P,`composite bind group layout`),entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:16}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`,viewDimension:`2d`,multisampled:!1}}]}),this.pipeline=e.createRenderPipeline({label:F(P,`composite pipeline`),layout:e.createPipelineLayout({label:F(P,`composite pipeline layout`),bindGroupLayouts:[this.#o]}),vertex:{module:n,entryPoint:`vs_main`},fragment:{module:n,entryPoint:`fs_main`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}})}prepare(e){if(e>this.#n){let t=this.#n;for(;t<e;)t*=2;let n=this.#r;this.#n=t,this.#r=this.#s(t),this.#i=new Float32Array(t*this.#t/4),n.destroy()}this.#a=0}bind(e,t,n){let r=this.#a++;this.#i[r*this.#t/4]=n;let i=t.compositeBinding;(i===null||i.buffer!==this.#r)&&(i={buffer:this.#r,bindGroup:this.#e.createBindGroup({label:F(P,`composite bind group`),layout:this.#o,entries:[{binding:0,resource:{buffer:this.#r,size:16}},{binding:1,resource:t.view}]})},t.compositeBinding=i),e.setBindGroup(0,i.bindGroup,[r*this.#t])}flush(){this.#a&&this.#e.queue.writeBuffer(this.#r,0,this.#i.buffer,0,this.#a*this.#t)}destroy(){this.#r.destroy()}#s(e){return this.#e.createBuffer({label:F(P,`composite uniforms`),size:e*this.#t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}},yc=class{#e;#t=null;#n=[];#r=[];#i;#a;constructor(e){this.#e=e,this.#i=[NaN,NaN,NaN,NaN,NaN,NaN],this.#a=[NaN,NaN,NaN,NaN]}setPipeline(e){e!==this.#t&&(this.#e.setPipeline(e),this.#t=e)}setBindGroup(e,t,n){this.#n[e]===t&&bc(this.#r[e],n)||(n?this.#e.setBindGroup(e,t,n):this.#e.setBindGroup(e,t),this.#n[e]=t,this.#r[e]=n)}setViewport(e,t,n,r,i,a){let o=this.#i;(o[0]!==e||o[1]!==t||o[2]!==n||o[3]!==r||o[4]!==i||o[5]!==a)&&(this.#e.setViewport(e,t,n,r,i,a),o[0]=e,o[1]=t,o[2]=n,o[3]=r,o[4]=i,o[5]=a)}setScissorRect(e,t,n,r){let i=this.#a;(i[0]!==e||i[1]!==t||i[2]!==n||i[3]!==r)&&(this.#e.setScissorRect(e,t,n,r),i[0]=e,i[1]=t,i[2]=n,i[3]=r)}};function bc(e,t){if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var xc={r:0,g:0,b:0,a:0},Z=class extends Error{},Sc=Symbol.for(`genome-spy.performance-profiler`);function Cc(){return globalThis[Sc]}function wc(e,t){Cc()?.addPhase(e,t)}function Q(e,t){Cc()?.addCount(e,t)}function Tc(){return Cc()?.enabled?performance.now():0}function Ec(e,t){t&&wc(e,performance.now()-t)}var Dc=class{#e;#t;#n=!1;#r;#i;constructor(e,t,n){this.#e=e,this.placementSetId=t,this.#t=`${P} placement set #${t}`,this._rectangles=Oc(n),this.#r=kc(e.device,this._rectangles,this.#t),this.#i=this.#a()}get count(){return this._rectangles.length/4}get bindGroup(){if(this.#e._assertAlive(),this.#n)throw new Z(`Placement set has been destroyed.`);return this.#i}#a(){return this.#e.device.createBindGroup({label:F(this.#t,`bind group`),layout:this.#e._placementBindGroupLayout,entries:[{binding:0,resource:{buffer:this.#r}}]})}replace(e){if(this.#e._assertAlive(),this.#n)throw new Z(`Placement set has been destroyed.`);let t=Oc(e);if(t.byteLength>this.#r.size){Q(`placementBufferRecreations`);let e=this.#r;this.#r=kc(this.#e.device,t,this.#t),this.#i=this.#a(),e.destroy()}else t.byteLength&&(Q(`placementBufferReplacements`),Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),this.#e.device.queue.writeBuffer(this.#r,0,t));this._rectangles=t,this.#e._renderFrame=null,this.#e._pickingFrame=null,Q(`retainedNormalFrameInvalidations`),Q(`retainedPickingFrameInvalidations`),this.#e.markPickingDirty()}destroy(){this.#n||(this.#n=!0,this.#r.destroy(),this.#e._placementSets.delete(this.placementSetId),this.#e._renderFrame=null,this.#e._pickingFrame=null,this.#e.markPickingDirty())}};function Oc(e){if(!e||!(e.rectangles instanceof Float32Array))throw new Z(`Placement data must contain Float32Array rectangles.`);if(e.rectangles.length%4!=0)throw new Z(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.rectangles.length;t+=4){let n=e.rectangles[t],r=e.rectangles[t+1],i=e.rectangles[t+2],a=e.rectangles[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw new Z(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}if(!Cc()?.enabled)return new Float32Array(e.rectangles);let t=performance.now(),n=new Float32Array(e.rectangles);return Q(`placementValidationSnapshotBytes`,n.byteLength),wc(`placementValidationSnapshot`,performance.now()-t),n}function kc(e,t,n){let r=e.createBuffer({label:F(n,`rectangles`),size:Math.max(16,t.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return t.byteLength&&(Q(`placementUploadCalls`),Q(`placementUploadBytes`,t.byteLength),e.queue.writeBuffer(r,0,t)),r}function Ac(e){return e===`x`?1:e===`y`?2:e===`xy`?3:0}function jc(e){let t=new ArrayBuffer(e);return{buffer:t,floats:new Float32Array(t),integers:new Uint32Array(t)}}async function Mc(e,t={}){if(!navigator.gpu)throw new Z(`WebGPU is not supported in this browser.`);let n=await navigator.gpu.requestAdapter();if(!n)throw new Z(`WebGPU adapter not available.`);let r=await n.requestDevice({requiredLimits:{maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxBufferSize:n.limits.maxBufferSize}});Fc(r);let i=e.getContext(`webgpu`);if(!i)throw new Z(`Could not create a WebGPU context.`);return new Nc({device:r,context:i,format:t.format??navigator.gpu.getPreferredCanvasFormat(),canvas:e,alphaMode:t.alphaMode??`premultiplied`,onInvalidate:t.onInvalidate,onDeviceLoss:t.onDeviceLoss})}var Nc=class{#e;#t;#n=`alive`;#r=null;#i=new Set;#a;#o;#s=new Set;#c=1;#l=1;#u=!0;#d=null;#f=null;#p=null;#m={width:0,height:0};#h=[];#g=null;#_;#v=1;#y;#b;#x;constructor({device:e,context:t,format:n,canvas:r,alphaMode:i,onInvalidate:a,onDeviceLoss:o}){this.device=e,this.context=t,this.format=n,this.canvas=r,this.alphaMode=i,this.#e=a??(()=>{}),this.#t=o??(()=>{}),e.lost.then(e=>this.#O(e)),t.configure({device:e,format:n,alphaMode:i}),this.pickFormat=`rgba8unorm`,this._marks=new Map,this._placementSets=new Map,this._programTemplateCache=new mc(Q),this.#a=new _c(e,n),this.#o=new vc(e,n),this._renderFrame=null,this._pickingFrame=null,this.#_=Math.max(80,e.limits.minUniformBufferOffsetAlignment),this.#y=jc(this.#_),this.#b=e.createBuffer({label:F(P,`global uniforms`),size:this.#_,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this._globalBindGroupLayout=e.createBindGroupLayout({label:F(P,`global bind group layout`),entries:_n}),this.#x=e.createBindGroup({label:F(P,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this.#b,size:80}}]}),this._placementBindGroupLayout=e.createBindGroupLayout({label:F(P,`placement bind group layout`),entries:vn});let s=window.devicePixelRatio??1;this.updateGlobals({width:(r.width||1)/s,height:(r.height||1)/s,dpr:s})}updateGlobals(e){this._assertAlive(),this._globals=Pc(e),this.markPickingDirty()}createDetachedTarget(e,t){this._assertAlive();let n=e.getContext(`webgpu`);if(!n)throw new Z(`Could not create a detached WebGPU context.`);n.configure({device:this.device,format:this.format,alphaMode:this.alphaMode});let r=Pc(t),i=!1,a=()=>{if(this._assertAlive(),i)throw new Z(`Detached render target has been destroyed.`)},o={canvas:e,render:(t={})=>{a(),this.#A(n,e,r,t,!1)},onSubmittedWorkDone:async()=>{a(),await this.device.queue.onSubmittedWorkDone()},destroy:()=>{i||(i=!0,n.unconfigure(),this.#i.delete(o))}};return this.#i.add(o),o}#S(e){if(e<=this.#v)return;let t=this.#v;for(;t<e;)t*=2;let n=this.#b;this.#b=this.device.createBuffer({label:F(P,`global uniforms`),size:t*this.#_,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.#y=jc(t*this.#_),this.#x=this.device.createBindGroup({label:F(P,`global bind group`),layout:this._globalBindGroupLayout,entries:[{binding:0,resource:{buffer:this.#b,size:80}}]}),this.#v=t,n.destroy()}#C(e,t=!1){let n=Tc();if(!e.length){Ec(`drawGlobals`,n);return}this.#S(e.length);let{buffer:r,floats:i,integers:a}=this.#y;for(let n=0;n<e.length;n++){let r=n*this.#_/4,o=e[n];i[r]=o.viewport.width,i[r+1]=o.viewport.height,i[r+2]=this._globals.dpr,i[r+4]=o.visibleRange.x1,i[r+5]=o.visibleRange.y1,i[r+6]=o.visibleRange.x2,i[r+7]=o.visibleRange.y2,i[r+8]=+!!o.visibleRange.cullX,i[r+9]=+!!o.visibleRange.cullY,i[r+12]=o.viewport.x,i[r+13]=o.viewport.y,i[r+14]=o.viewport.width,i[r+15]=o.viewport.height,a[r+16]=o.placement?.index??0,a[r+17]=o.placement?.clipMode??0,a[r+18]=o.placement?.count??0,a[r+19]=t?0:o.orderPass}this.device.queue.writeBuffer(this.#b,0,r,0,e.length*this.#_),Q(`drawGlobalWrites`),Q(`drawGlobalBytes`,e.length*this.#_),Ec(`drawGlobals`,n)}createMark(e,t,n={}){this._assertAlive();let r=this.#c++,i=n.label??`${e.type} #${r}`,a=e.createProgram(this,t,{label:i});this._marks.set(r,a),this.markPickingDirty();let o=a.getSlotHandles();return{markId:r,batchUpdates:o.batchUpdates,series:o.series,scales:o.scales,values:o.values,properties:o.properties,extraValues:o.extraValues,scalarSlots:o.scalarSlots,selections:o.selections}}createPlacementSet(e){this._assertAlive();let t=new Dc(this,this.#l++,e);return this._placementSets.set(t.placementSetId,t),t}markPickingDirty(){this.#n===`alive`&&(this.#u=!0)}_invalidate(){this.#n===`alive`&&(this.markPickingDirty(),this.#e())}_ownResource(e){return this._assertAlive(),this.#s.add(e),e}#w(){let e=Math.max(1,this.canvas.width),t=Math.max(1,this.canvas.height);this.#d&&this.#m.width===e&&this.#m.height===t||(this.#d?.destroy(),this.#d=this.device.createTexture({label:F(P,`picking texture`),size:{width:e,height:t},format:this.pickFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC}),this.#f=this.#d.createView({label:F(P,`picking texture view`)}),this.#m={width:e,height:t},this.#p?.destroy(),this.#p=this.device.createBuffer({label:F(P,`picking readback`),size:256,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}))}#T(){Q(`pickingRenders`),this.#w();let e=this.device.createCommandEncoder({label:F(P,`picking command encoder`)}),t=e.beginRenderPass({label:F(P,`picking render pass`),colorAttachments:[{view:this.#f,loadOp:`clear`,storeOp:`store`,clearValue:{r:0,g:0,b:0,a:0}}]}),n=this._pickingFrame??this._renderFrame??this.#M(this._marks.keys());this.#C(n,!0),this.#B(t,n,!0),t.end(),this.device.queue.submit([e.finish()]),this.#u=!1}pick(e,t){return this._assertAlive(),new Promise((n,r)=>{this.#h.push({x:e,y:t,resolve:n,reject:r}),this.#E()})}#E(){if(this.#g||!this.#h.length)return;let e=this.#h.shift();this.#g=e,Promise.resolve().then(()=>(this._assertAlive(),this.#k(e.x,e.y))).then(t=>this.#D(e,t,!1),t=>this.#D(e,t,!0))}#D(e,t,n){this.#g===e&&(this.#g=null,n?e.reject(t):e.resolve(t),this.#n===`alive`&&this.#E())}#O(e){if(this.#n!==`alive`)return;let t=e.message?`: ${e.message}`:``,n=new Z(`WebGPU device was lost (${e.reason})${t}`);this.#n=`lost`,this.#r=n;let r=this.#g;this.#g=null,r?.reject(n);for(let e of this.#h)e.reject(n);this.#h.length=0,this.#e=()=>{},this.#t(e)}async#k(e,t){if(!this._marks.size)return null;this.#w(),this.#u&&this.#T();let n=this._globals.dpr,r=Math.floor(e*n),i=Math.floor(t*n);if(r<0||i<0||r>=this.#m.width||i>=this.#m.height)return null;let a=this.device.createCommandEncoder({label:F(P,`pick readback command encoder`)});a.copyTextureToBuffer({texture:this.#d,origin:{x:r,y:i}},{buffer:this.#p,bytesPerRow:256},{width:1,height:1,depthOrArrayLayers:1}),this.device.queue.submit([a.finish()]),await this.#p.mapAsync(GPUMapMode.READ,0,4);let o=new Uint8Array(this.#p.getMappedRange(0,4)),s=o[0]|o[1]<<8|o[2]<<16|o[3]<<24;return this.#p.unmap(),s===0?null:s-1>>>0}debugResources(e,t){this._assertAlive();let n=this._marks.get(e);if(!n)throw new Z(`No such mark: ${e}`);n.debugResources(t)}render(e={}){this._assertAlive(),this.#A(this.context,this.canvas,this._globals,e,!0)}#A(e,t,n,r,i){let a=this._globals;this._globals=n;try{this.#j(e,t,r,i)}finally{this._globals=a}}#j(e,t,n,r){let{items:i,draws:a,groupCount:o}=this.#P(n.items??n.draws??this._marks.keys());Q(`renderDraws`,a.length),Q(`renderGroups`,o),this.#C(a),this.#o.prepare(a.length+o+1);let s=this.device.createCommandEncoder({label:F(P,`main command encoder`)}),c=e.getCurrentTexture().createView({label:F(P,`canvas texture view`)});this.#a.beginFrame();try{let e=Tc();this.#F(s,{view:c,width:t.width,height:t.height,logicalX:0,logicalY:0,label:P},i,1,n.clearColor??{r:1,g:1,b:1,a:1}),this.#o.flush(),Ec(`commandEncoding`,e);let r=Tc();this.device.queue.submit([s.finish()]),Ec(`submission`,r)}finally{this.#a.endFrame()}r&&(this._renderFrame=a,this.#u=!0)}renderPicking(e={}){this._assertAlive(),this._pickingFrame=e.draws?this.#M(e.draws):this._pickingFrame??this._renderFrame??this.#M(this._marks.keys()),this.#u=!0}#M(e){let t=Tc(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[];for(let t of e){let e=this.#N(t,n,r.length);e&&r.push(e)}return Q(`normalizedDraws`,r.length),Ec(`drawNormalization`,t),r}#N(e,t,n){let r=typeof e==`number`?{mark:{markId:e}}:e,i=r.mark.markId,a=this._marks.get(i);if(!a)throw new Z(`No such mark: ${i}`);let o={...r.viewport??t};if(Hc(`viewport`,o),o.x<0||o.y<0||o.x+o.width>t.width||o.y+o.height>t.height)throw new Z(`Viewport must be contained within the logical canvas.`);let s=Wc(r.scissor??t,t),c=r.firstInstance??0;Vc(`firstInstance`,c);let l=r.instanceCount??a.drawCount-c;if(Vc(`instanceCount`,l),c+l>a.drawCount)throw new Z(`Instance range exceeds mark count: ${a.drawCount}.`);let u=a.resolveDrawRange(c,l),d=a._placementIndex,f;if(d){if(!r.placement)throw new Z(`Placement-enabled marks require a placement binding.`);let e=this._placementSets.get(r.placement.set.placementSetId);if(!e)throw new Z(`No such placement set: ${r.placement.set.placementSetId}`);let n=r.placement.index;if(`source`in d&&d.source===`draw`){if(!Number.isInteger(n)||n<0)throw new Z(`Draw placement marks require a non-negative index.`);if(n>=e.count)throw new Z(`Placement index ${n} exceeds set count ${e.count}.`)}else if(n!==void 0)throw new Z(`Per-instance placement marks forbid a draw-level index.`);if(f={bindGroup:e.bindGroup,count:e.count,index:n,clipToPlacement:r.placement.clipToPlacement,clipMode:Ac(r.placement.clipToPlacement)},n!==void 0&&f.clipToPlacement){let r=n*4,i=e._rectangles,a={x:o.x+i[r]*o.width,y:o.y+i[r+1]*o.height,width:i[r+2]*o.width,height:i[r+3]*o.height},c=f.clipToPlacement;s=Wc(s,{x:c.includes(`x`)?a.x:t.x,y:c.includes(`y`)?a.y:t.y,width:c.includes(`x`)?a.width:t.width,height:c.includes(`y`)?a.height:t.height})}}else if(r.placement)throw new Z(`Placement bindings require a placement-enabled mark.`);if(!(s.width<=0||s.height<=0))return{type:`draw`,requiredSampleCount:a.antialiasing===`multisample`?4:1,uniformIndex:n,markId:i,viewport:o,scissor:s,visibleRange:Uc(r.visibleRange,t),firstInstance:u.firstInstance,instanceCount:u.instanceCount,orderPass:0,placement:f}}#P(e){let t=Tc(),n={x:0,y:0,width:this._globals.width,height:this._globals.height},r=[],i=0,a=e=>{let t=[];for(let i of e)if(Lc(i)){let e=Math.min(1,Math.max(0,i.opacity??1));if(Number.isNaN(e))throw new Z(`Render scope opacity must be a number.`);if(Hc(`render scope bounds`,i.bounds,!0),e===0||i.bounds.width===0||i.bounds.height===0)continue;let n=a(i.items);if(!n.length)continue;t.push({type:`scope`,bounds:i.bounds,opacity:e,label:i.label,coverageOnly:n.every(Rc),items:n})}else{let e=this.#N(i,n,r.length);if(e){let n=this._marks.get(e.markId),i=n._order;if(r.push(e),t.push(e),i&&n._orderActive){let n=i.matching===`first`,a=n?1:2,o=(n?2:1)|4;e.orderPass=a;let s={...e,uniformIndex:r.length,orderPass:o};r.push(s),t.push(s)}}}return t},o=(e,t,n,r)=>{let a=[],s=[],c,l=()=>{s.length&&(i++,a.push({type:`group`,bounds:c,opacity:1,sampleCount:4,label:r,items:s}),s=[],c=void 0)};for(let u of e)if(u.type===`scope`){l();let e=Wc(u.bounds,n);if(!e.width||!e.height)continue;let s=u.coverageOnly?4:1,c=u.label??r,d=o(u.items,s,e,c);if(!d.length)continue;u.opacity===1&&s===t?a.push(...d):(i++,a.push({type:`group`,bounds:e,opacity:u.opacity,sampleCount:s,label:c,items:d}))}else if(t===1&&u.requiredSampleCount===4){let e=Wc(u.scissor,n);if(!e.width||!e.height)continue;s.push(u),c?zc(c,e):c=e}else l(),a.push(u);return l(),a},s=o(a(e),1,n,P);return Q(`normalizedDraws`,r.length),Ec(`drawNormalization`,t),{items:s,draws:r,groupCount:i}}#F(e,t,n,r,i){let a=!1,o=[],s=()=>{if(o.length){if(r===1)this.#R(e,t,o,a?void 0:i);else if(!a)this.#L(e,t,o);else{let n=this.#a.acquire(t.width,t.height,1),r={texture:n,...t,view:n.view};this.#L(e,r,o),this.#z(e,t,r,1,a?void 0:i),this.#a.release(r.texture)}a=!0,o=[]}};for(let r of n)if(r.type===`group`){s();let n=this.#I(e,t,r);n&&(this.#z(e,t,n,r.opacity,a?void 0:i),this.#a.release(n.texture),a=!0)}else o.push(r);s(),a||this.#R(e,t,[],i)}#I(e,t,n){let r=Wc(n.bounds,{x:t.logicalX,y:t.logicalY,width:t.width/this._globals.dpr,height:t.height/this._globals.dpr}),i=this._globals.dpr,a=Gc(r,i,Math.floor(t.logicalX*i)+t.width,Math.floor(t.logicalY*i)+t.height);if(!a.width||!a.height)return;let o=this.#a.acquire(a.width,a.height,1),s={view:o.view,width:a.width,height:a.height,logicalX:a.x/i,logicalY:a.y/i,label:n.label};return this.#F(e,s,n.items,n.sampleCount,xc),{texture:o,...s}}#L(e,t,n){let r=this.#a.acquire(t.width,t.height,4),i=e.beginRenderPass({label:F(t.label,`multisample group pass`),colorAttachments:[{view:r.view,resolveTarget:t.view,clearValue:xc,loadOp:`clear`,storeOp:`discard`}]});this.#B(i,n,!1,t,4),i.end(),this.#a.release(r)}#R(e,t,n,r){let i=e.beginRenderPass({label:F(t.label,`main render pass`),colorAttachments:[{view:t.view,...r?{clearValue:r}:{},loadOp:r?`clear`:`load`,storeOp:`store`}]});this.#B(i,n,!1,t),i.end()}#z(e,t,n,r,i){let a=e.beginRenderPass({label:F(n.label,`group composite pass`),colorAttachments:[{view:t.view,...i?{clearValue:i}:{},loadOp:i?`clear`:`load`,storeOp:`store`}]}),o=Math.round((n.logicalX-t.logicalX)*this._globals.dpr),s=Math.round((n.logicalY-t.logicalY)*this._globals.dpr);a.setViewport(o,s,n.width,n.height,0,1),a.setScissorRect(o,s,n.width,n.height),a.setPipeline(this.#o.pipeline),this.#o.bind(a,n.texture,r),a.draw(6),a.end()}#B(e,t,n,r={view:void 0,width:this.canvas.width,height:this.canvas.height,logicalX:0,logicalY:0,label:P},i=1){let a=this._globals.dpr,o=new yc(e);for(let s of t){if(n&&s.orderPass&4)continue;let t=this._marks.get(s.markId);if(!t)continue;o.setViewport((s.viewport.x-r.logicalX)*a,(s.viewport.y-r.logicalY)*a,s.viewport.width*a,s.viewport.height*a,0,1);let c=Gc(Wc(s.scissor,{x:r.logicalX,y:r.logicalY,width:r.width/a,height:r.height/a}),a,Math.floor(r.logicalX*a)+r.width,Math.floor(r.logicalY*a)+r.height);o.setScissorRect(c.x-Math.floor(r.logicalX*a),c.y-Math.floor(r.logicalY*a),c.width,c.height),o.setBindGroup(0,this.#x,[s.uniformIndex*this.#_]);let l={firstInstance:s.firstInstance,instanceCount:s.instanceCount,sampleCount:i};s.placement&&(l.placement=s.placement),n?t.preparePick(o,l):t.prepareDraw(o,l),s.placement&&o.setBindGroup(2,s.placement.bindGroup),t.draw(e,l)}}destroyMark(e){if(this.#n===`destroyed`)return;let t=this._marks.get(e);t&&(t.destroy(),this._marks.delete(e),this.markPickingDirty())}destroy(){if(this.#n===`destroyed`)return;this.#n=`destroyed`;for(let e of this._marks.values())e.destroy();this._marks.clear();for(let e of this._placementSets.values())e.destroy();this._placementSets.clear();for(let e of this.#i)e.destroy();for(let e of this.#s)e.destroy();this.#s.clear(),this._renderFrame=null,this.#b.destroy(),this.#a.destroy(),this.#o.destroy(),this.#d?.destroy(),this.#d=null,this.#f=null,this.#p?.destroy(),this.#p=null;for(let e of this.#h)e.resolve(null);this.#h.length=0;let e=this.#g;this.#g=null,e?.resolve(null),this.#e=()=>{},this.context.unconfigure(),this.device.destroy()}_assertAlive(){if(this.#n===`lost`)throw this.#r;if(this.#n===`destroyed`)throw new Z(`Renderer has been destroyed.`)}};function Pc(e){let{width:t,height:n,dpr:r}=e;return Bc(`width`,t),Bc(`height`,n),Bc(`dpr`,r),{width:t,height:n,dpr:r}}function Fc(e){if(!Cc()?.enabled)return;let t=e.queue;Ic(t,`writeBuffer`,e=>{let t=e[2],n=typeof e[3]==`number`?e[3]:0,r=e[4],i=typeof r==`number`?r:Math.max(0,(t?.byteLength??0)-n);Q(`writeBufferCalls`),Q(`writeBufferBytes`,i)}),Ic(t,`submit`,()=>Q(`queueSubmissions`)),Ic(e,`createBuffer`,()=>Q(`gpuBuffersCreated`)),Ic(e,`createTexture`,()=>Q(`gpuTexturesCreated`)),Ic(e,`createShaderModule`,()=>Q(`shaderModulesCreated`)),Ic(e,`createBindGroup`,()=>Q(`bindGroupsCreated`)),Ic(e,`createRenderPipeline`,()=>Q(`pipelinesCreated`)),Ic(e,`createCommandEncoder`,()=>Q(`commandEncodersCreated`))}function Ic(e,t,n){let r=e,i=r[t];if(typeof i==`function`)try{r[t]=function(...e){return n(e),i.apply(this,e)}}catch{}}function Lc(e){return typeof e==`object`&&!!e&&`items`in e}function Rc(e){return e.type===`scope`?e.coverageOnly:e.requiredSampleCount===4}function zc(e,t){let n=Math.max(e.x+e.width,t.x+t.width),r=Math.max(e.y+e.height,t.y+t.height);e.x=Math.min(e.x,t.x),e.y=Math.min(e.y,t.y),e.width=n-e.x,e.height=r-e.y}function Bc(e,t){if(!Number.isFinite(t)||t<=0)throw new Z(`${e} must be a positive finite number.`)}function Vc(e,t){if(!Number.isInteger(t)||t<0)throw new Z(`${e} must be a non-negative integer.`)}function Hc(e,t,n=!1){if(!Number.isFinite(t.x)||!Number.isFinite(t.y)||!Number.isFinite(t.width)||!Number.isFinite(t.height)||(n?t.width<0:t.width<=0)||(n?t.height<0:t.height<=0))throw new Z(`${e} must have finite coordinates and ${n?`non-negative`:`positive`} dimensions.`)}function Uc(e,t){if(!e)return{x1:t.x,y1:t.y,x2:t.x+t.width,y2:t.y+t.height,cullX:!1,cullY:!1};let{x1:n,y1:r,x2:i,y2:a,cullX:o,cullY:s}=e;if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||n>i||r>a||typeof o!=`boolean`||typeof s!=`boolean`)throw new Z(`visibleRange must have finite ordered bounds and boolean flags.`);return e}function Wc(e,t){if(!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.width)||!Number.isFinite(e.height))throw new Z(`scissor must have finite coordinates and positive dimensions.`);if(e.width<=0||e.height<=0)return{x:e.x,y:e.y,width:0,height:0};let n=Math.max(e.x,t.x),r=Math.max(e.y,t.y),i=Math.min(e.x+e.width,t.x+t.width),a=Math.min(e.y+e.height,t.y+t.height);return{x:n,y:r,width:Math.max(0,i-n),height:Math.max(0,a-r)}}function Gc(e,t,n,r){let i=Math.floor(e.x*t),a=Math.floor(e.y*t),o=Math.min(n,Math.ceil((e.x+e.width)*t)),s=Math.min(r,Math.ceil((e.y+e.height)*t));return{x:i,y:a,width:o-i,height:s-a}}var Kc=class{#e={revision:0,facetIds:[]};#t={topology:this.#e,geometryRevision:0,rectangles:new Float32Array,overlap:`disjoint`};#n=new Set;#r=!1;getSnapshot(){if(this.#r)throw Error(`Cannot read a disposed placement source.`);return this.#t}replaceTopology(e,t,n=`disjoint`){this.#i(),qc(t,e.length);let r=Object.freeze({revision:this.#e.revision+1,facetIds:Object.freeze(e.map(e=>e?Object.freeze(Array.from(e)):void 0))});this.#e=r,this.#t=Object.freeze({topology:r,geometryRevision:this.#t.geometryRevision+1,rectangles:k(`placementSourceSnapshot`,()=>(A(`placementSourceSnapshotBytes`,t.byteLength),new Float32Array(t))),overlap:n})}replaceGeometry(e,t=this.#t.overlap){this.#i(),qc(e,this.#e.facetIds.length),this.#t=Object.freeze({topology:this.#e,geometryRevision:this.#t.geometryRevision+1,rectangles:k(`placementSourceSnapshot`,()=>(A(`placementSourceSnapshotBytes`,e.byteLength),new Float32Array(e))),overlap:t})}onDispose(e){return this.#i(),this.#n.add(e),()=>this.#n.delete(e)}dispose(){if(!this.#r){this.#r=!0;for(let e of this.#n)e();this.#n.clear()}}#i(){if(this.#r)throw Error(`Placement source has been disposed.`)}};function qc(e,t){if(!(e instanceof Float32Array)||e.length!==t*4)throw Error(`Placement rectangles must contain four values per entry.`);for(let t=0;t<e.length;t+=4){let n=e[t],r=e[t+1],i=e[t+2],a=e[t+3];if(!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(i)||!Number.isFinite(a)||i<0||a<0)throw Error(`Placement rectangles must contain finite coordinates and non-negative sizes.`)}}var Jc=Object.freeze({});function Yc(e){return`${e.unitView.getPathString()} [${e.getType()}]`}var Xc=class{#e;#t;#n=!1;#r=new Map;#i=new WeakMap;#a=new Map;#o=new WeakSet;#s;constructor(e){this.options=e,this.canvas=document.createElement(`canvas`),e.container.appendChild(this.canvas),this.#e=new ce(e.container,this.canvas,e.sizeSource,()=>{this.#c()&&e.onCanvasResize()}),this.#c()}async initialize(){this.#t=await Mc(this.canvas,{onInvalidate:()=>{this.#t&&this.options.onRenderInvalidated?.()},onDeviceLoss:e=>{if(!this.#n){let t=e.message?`: ${e.message}`:``;this.options.onError?.(Error(`WebGPU device was lost (${e.reason})${t}`))}}}),this.#l()}invalidateSize(){return this.#e.invalidate(),this.#c()}#c(){let e=this.getLogicalCanvasSize(),t=this.#e.getPhysicalCanvasSize(e);return this.#s?.logicalWidth==e.width&&this.#s.logicalHeight==e.height&&this.#s.physicalWidth==t.width&&this.#s.physicalHeight==t.height?!1:(this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.canvas.width=t.width,this.canvas.height=t.height,this.#s={logicalWidth:e.width,logicalHeight:e.height,physicalWidth:t.width,physicalHeight:t.height},this.#l(),!0)}#l(){this.#t&&this.#s&&(this.#s.logicalWidth<=0||this.#s.logicalHeight<=0||this.#t.updateGlobals({width:this.#s.logicalWidth,height:this.#s.logicalHeight,dpr:this.getDevicePixelRatio()}))}getLogicalCanvasSize(){return this.#e.getLogicalCanvasSize()}getDevicePixelRatio(){return this.#e.getDevicePixelRatio()}createExportTarget(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=document.createElement(`canvas`);return r.width=Math.ceil(e*n),r.height=Math.ceil(t*n),{handle:this.#t.createDetachedTarget(r,{width:e,height:t,dpr:n}),canvas:r,logicalWidth:e,logicalHeight:t,pixelRatio:n}}renderLayoutToTarget(e,t,n,r){let i=new Js({surface:this,target:{width:t.logicalWidth,height:t.logicalHeight,dpr:t.pixelRatio},markPredicate:r});e.collectRenderCommands(i),i.finish(),t.handle.render({items:i.render(),clearColor:n})}getPlacementSet(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let t=e.getSnapshot(),n=this.#i.get(e);if(!n){let n=this.#t.createPlacementSet({rectangles:t.rectangles}),r={set:n,topologyRevision:t.topology.revision,geometryRevision:t.geometryRevision};return this.#i.set(e,r),e.onDispose(()=>{let t=this.#i.get(e);t&&(t.set.destroy(),this.#i.delete(e))}),n}return(n.topologyRevision!==t.topology.revision||n.geometryRevision!==t.geometryRevision)&&(n.set.replace({rectangles:t.rectangles}),n.topologyRevision=t.topology.revision,n.geometryRevision=t.geometryRevision),n.set}updateOccurrencePlacements(e,t){this.#u(e);let n=this.#a.get(e);if(!n)n=new Kc,n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t),this.#a.set(e,n);else{let e=n.getSnapshot();e.rectangles.length===t.length?Zc(e.rectangles,t)||n.replaceGeometry(t):n.replaceTopology(Array.from({length:t.length/4},(e,t)=>[t]),t)}return n}updateMark(e,t,n,r=Jc){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#u(e);let i=this.#r.get(e),a=t.getProgramKey?.(n),o=s(e.encoders);if(!i||i.definition!==t||!Object.is(i.programKey,a)||i.gapKey!==o){i&&this.#t.destroyMark(i.handle.markId);let s=this.#t.createMark(t,n,{label:Yc(e)});i={definition:t,programKey:a,gapKey:o,handle:s,config:n,properties:r,bindings:Qc(s,n,r),series:al(n),count:n.count,selections:new Map},this.#r.set(e,i)}let c=0;return i.handle.batchUpdates(()=>{let t=i.config!==n;t&&il(i,n)&&(i.series=al(n),i.count=n.count,i.handle.series.replace(i.series,i.count),c++),(t||i.properties!==r)&&(i.bindings=Qc(i.handle,n,r,i.bindings),i.config=n,i.properties=r),c+=el(i.bindings),c+=nl(i,e)}),c}prepareDraw(e,t,n){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);let r=this.#r.get(e);if(!r)throw Error(`Cannot draw a WebGPU mark before updating it.`);if(t.mark=r.handle,n){if(!t.placement)throw Error(`Placement source requires a materialized draw placement.`);t.placement.set=this.getPlacementSet(n)}}render(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.render({items:e,...t?{clearColor:t}:{}})}renderPicking(e){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);this.#t.renderPicking({draws:e})}pick(e,t){if(!this.#t)throw Error(`The WebGPU surface has not been initialized.`);return this.#t.pick(e,t)}finalize(){if(!this.#n){this.#n=!0;for(let e of this.#a.values())e.dispose();this.#t?.destroy(),this.#t=void 0,this.#r.clear(),this.#i=new WeakMap,this.#a.clear(),this.#o=new WeakSet,this.#e.finalize(),this.canvas.remove()}}#u(e){this.#o.has(e)||(this.#o.add(e),e.unitView?.registerDisposer?.(()=>this.#d(e)))}#d(e){let t=this.#r.get(e);t&&(this.#t?.destroyMark(t.handle.markId),this.#r.delete(e));let n=this.#a.get(e);n&&(n.dispose(),this.#a.delete(e))}};function Zc(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Qc(e,t,n,r=[]){let i=new Map(r.map(e=>[e.key,e.value])),a=[],o=(e,t,n,r=!1)=>{a.push({key:e,read:t,write:n,value:i.has(e)?i.get(e):tl(t()),skipUndefined:r})};for(let[n,r]of Object.entries(t.channels)){$c(o,`channel:${n}:default`,e.scales[n]?.default,e.values[n]?.default,r);for(let[t,i]of(r.conditions??[]).entries())i.channel&&$c(o,`channel:${n}:condition:${t}`,e.scales[n]?.conditions?.[t],e.values[n]?.conditions?.[t],i.channel)}for(let[t,r]of Object.entries(n)){let n=e.properties?.[t];if(!n)throw Error(`Renderer mark has no property slot "${t}".`);o(`property:${t}`,()=>r.value,e=>n.set(e))}for(let[n,r]of Object.entries(t.scalarSlots??{})){let t=e.scalarSlots?.[n];t&&o(`scalar:${n}`,()=>r.value,e=>t.set(e))}return a}function $c(e,t,n,r,i){n&&i.scale&&(i.scale.gapEnabled&&i.scale.type===`index`?e(t+`:domain`,()=>[i.scale.domain,i.scale.gapDomain],([e,t])=>n.setDomain(e,t)):`domain`in i.scale&&e(t+`:domain`,()=>i.scale.domain,e=>n.setDomain(e),!0),`viewport`in i.scale&&e(t+`:viewport`,()=>i.scale.viewport,e=>n.setViewport(e)),`range`in i.scale&&e(t+`:range`,()=>i.scale.range,e=>n.setRange(e),!0),i.scale.gapEnabled&&(e(t+`:gapPositions`,()=>i.scale.gapPositions,e=>n.setGapPositions(e)),e(t+`:gapWidth`,()=>i.scale.gapWidth,e=>n.setGapWidth(e)))),r&&`value`in i&&e(t+`:value`,()=>i.value,e=>r.set(e),!0)}function el(e){let t=0;for(let n of e){let e=n.read();n.skipUndefined&&e===void 0||y(n.value,e)||(n.write(e),t++,n.value=tl(e))}return t}function tl(e){return Array.isArray(e)?e.map(tl):v(e)?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,tl(t)])):e}function nl(e,t){let n=t.unitView?.paramRuntime;if(!n)return 0;let r=0;for(let[i,a]of Object.entries(e.handle.selections??{})){let o=_o(t,i),s=n.findValue(o?.param??i);if(s){if(a.type==`single`){let t=s.uniqueId??0;e.selections.get(i)!==t&&(a.set(t),r++,e.selections.set(i,t))}else if(a.type==`multi`){let n=o?t.encoders[o.input].scale.props.domainIndexer:void 0,c=e.selections.get(i);if(c?.value===s&&c.indexer===n)continue;let l=Uint32Array.from(o?s.values.values().map(n):s.data.keys());rl(c?.ids,l)||(a.set(l),r++),e.selections.set(i,{value:s,indexer:n,ids:l})}else if(a.type==`interval`){let t=e.selections.get(i);if(!t||t.type!=`interval`){let n={};for(let e of a.components)n[e]=null;t={type:`interval`,intervals:n},e.selections.set(i,t)}let n=!1;for(let e of a.components){let r=s.intervals?.[e]??null,i=t.intervals[e];(r==null?i!=null:i==null||i[0]!=r[0]||i[1]!=r[1])&&(t.intervals[e]=r?[r[0],r[1]]:null,n=!0)}n&&(a.set(t.intervals),r++)}}}return r}function rl(e,t){return!(e instanceof Uint32Array)||e.length!=t.length?!1:e.every((e,n)=>e==t[n])}function il(e,t){if(e.count!=t.count)return!0;for(let[n,r]of Object.entries(t.channels)){let t=sl(r);if(t!==void 0&&e.series[n]!==t)return!0}for(let[n,r]of Object.entries(t.inputs??{}))if(e.series[n]!==r.data)return!0;return!!(t.placementIndex?.data&&e.series.__placementIndex!==t.placementIndex.data)}function al(e){let t={};for(let[n,r]of Object.entries(e.channels)){let e=sl(r);e!==void 0&&(t[n]=e)}for(let[n,r]of Object.entries(e.inputs??{}))t[n]=r.data;return e.placementIndex?.data&&(t.__placementIndex=e.placementIndex.data),t}function ol(e){if(e){if(ArrayBuffer.isView(e.data)||Array.isArray(e.data))return e.data;if(typeof e.value==`string`)return e.value}}function sl(e){let t=ol(e);if(t!==void 0)return t;for(let t of e.conditions??[]){if(!t.channel)continue;let e=ol(t.channel);if(e!==void 0)return e}}async function cl(e,t){let n=t.mimeType??`image/png`;if(n!=`image/png`)throw Error(`Unsupported raster export MIME type: ${n}`);let r=e.getLogicalCanvasSize(),i=t.logicalWidth??r.width,a=t.logicalHeight??r.height,o=t.pixelRatio??e.getDevicePixelRatio(),s=ul(e,i,a,o);try{let r=dl(t.viewRoot,i,a,o);return e.renderLayoutToTarget(r,s,fc(t.clearColor)),await s.handle.onSubmittedWorkDone(),fl(s.canvas,n)}finally{s.handle.destroy()}}async function ll(e,t){let n=ul(e,t.logicalWidth,t.logicalHeight,t.pixelRatio);try{let r=document.createElement(`canvas`),i=r.getContext(`2d`);if(!i)throw new w(`Unable to initialize a WebGPU SVG crop context.`);let a=t.layoutResult&&t.pixelRatio==1?t.layoutResult:dl(t.viewRoot,t.logicalWidth,t.logicalHeight,t.pixelRatio);for(let o of t.runs){e.renderLayoutToTarget(a,n,dc,e=>o.marks.has(e)),await n.handle.onSubmittedWorkDone();let s=ue(o.bounds,t.pixelRatio,n.canvas.width,n.canvas.height);r.width=s.width,r.height=s.height,i.resetTransform(),i.clearRect(0,0,s.width,s.height),i.drawImage(n.canvas,s.x,s.y,s.width,s.height,0,0,s.width,s.height),le(o,s,t.pixelRatio,r.toDataURL(`image/png`))}}finally{n.handle.destroy()}}function ul(e,t,n,r){try{return e.createExportTarget(t,n,r)}catch(e){throw new w(`Unable to initialize a detached WebGPU export target.`,{cause:e})}}function dl(e,t,n,r){return T(e,S.create(0,0,t,n),{devicePixelRatio:r,renderingOptions:{firstFacet:!0}})}function fl(e,t){return new Promise((n,r)=>{e.toBlob(e=>{e?n(e):r(Error(`WebGPU could not encode the raster export.`))},t)})}var pl=class e{constructor(e,t=0,n){if(e instanceof DataView)this._view=e;else if(e instanceof ArrayBuffer)this._view=new DataView(e);else if(ArrayBuffer.isView(e))this._view=new DataView(e.buffer,e.byteOffset,e.byteLength);else throw TypeError(`OpenType data must be an ArrayBuffer or view.`);let r=n??this._view.byteLength-t;if(!Number.isInteger(t)||!Number.isInteger(r)||t<0||r<0||t+r>this._view.byteLength)throw RangeError(`OpenType reader range is outside the buffer.`);this._start=t,this._length=r,this._position=0}get offset(){return this._position}get length(){return this._length}get remaining(){return this._length-this._position}_ensure(e){if(!Number.isInteger(e)||e<0||this._position+e>this._length)throw RangeError(`Unexpected end of OpenType data.`)}seek(e){if(!Number.isInteger(e)||e<0||e>this._length)throw RangeError(`OpenType seek is outside the table.`);this._position=e}skip(e){this._ensure(e),this._position+=e}slice(t,n){if(!Number.isInteger(t)||!Number.isInteger(n)||t<0||n<0||t+n>this._length)throw RangeError(`OpenType table range is outside the buffer.`);return new e(this._view,this._start+t,n)}uint8(){return this._ensure(1),this._view.getUint8(this._start+this._position++)}int8(){return this._ensure(1),this._view.getInt8(this._start+this._position++)}uint16(){this._ensure(2);let e=this._view.getUint16(this._start+this._position,!1);return this._position+=2,e}int16(){this._ensure(2);let e=this._view.getInt16(this._start+this._position,!1);return this._position+=2,e}uint32(){this._ensure(4);let e=this._view.getUint32(this._start+this._position,!1);return this._position+=4,e}tag(){return String.fromCharCode(this.uint8(),this.uint8(),this.uint8(),this.uint8())}bytes(e){this._ensure(e);let t=new Uint8Array(this._view.buffer,this._view.byteOffset+this._start+this._position,e);return this._position+=e,t}},ml=1,hl=2,gl=4,_l=8,vl=16,yl=32,bl=64,xl=128,Sl=2,Cl=9;function wl(){return{firstPlacement:0,firstAdvance:0,secondPlacement:0,secondAdvance:0}}function Tl(e,t){e.firstPlacement+=t.firstPlacement,e.firstAdvance+=t.firstAdvance,e.secondPlacement+=t.secondPlacement,e.secondAdvance+=t.secondAdvance}function $(e,t){return e.slice(t,e.length-t)}function El(e,t){let n={placement:0,advance:0};return t&ml&&(n.placement=e.int16()),t&hl&&e.int16(),t&gl&&(n.advance=e.int16()),t&_l&&e.int16(),t&vl&&e.uint16(),t&yl&&e.uint16(),t&bl&&e.uint16(),t&xl&&e.uint16(),n}function Dl(e,t){return{firstPlacement:e.placement,firstAdvance:e.advance,secondPlacement:t.placement,secondAdvance:t.advance}}function Ol(e,t){let n=$(e,t),r=n.uint16();if(r===1){let e=Array.from({length:n.uint16()},()=>n.uint16());return{indexOf(t){let n=0,r=e.length-1;for(;n<=r;){let i=n+r>>>1,a=e[i];if(t<a)r=i-1;else if(t>a)n=i+1;else return i}return-1},glyphAt(t){return e[t]}}}if(r===2){let e=Array.from({length:n.uint16()},()=>({start:n.uint16(),end:n.uint16(),startIndex:n.uint16()}));return{indexOf(t){for(let n of e){if(t<n.start)return-1;if(t<=n.end)return n.startIndex+t-n.start}return-1},glyphAt(t){for(let n of e){let e=n.end-n.start+1;if(t>=n.startIndex&&t<n.startIndex+e)return n.start+t-n.startIndex}}}}throw Error(`Unsupported OpenType coverage format ${r}.`)}function kl(e,t){let n=$(e,t),r=n.uint16();if(r===1){let e=n.uint16(),t=Array.from({length:n.uint16()},()=>n.uint16());return n=>t[n-e]??0}if(r===2){let e=Array.from({length:n.uint16()},()=>({start:n.uint16(),end:n.uint16(),classId:n.uint16()}));return t=>{for(let n of e){if(t<n.start)return 0;if(t<=n.end)return n.classId}return 0}}throw Error(`Unsupported OpenType class definition format ${r}.`)}function Al(e){let t=e.uint16(),n=e.uint16(),r=e.uint16(),i=e.uint16(),a=Array.from({length:i},()=>e.uint16()),o=Ol(e,t),s=new Map;for(let t=0;t<i;t++){let i=o.glyphAt(t);if(i===void 0)throw Error(`GPOS pair set has no matching coverage glyph.`);let c=$(e,a[t]),l=new Map;for(let e=0,t=c.uint16();e<t;e++){let e=c.uint16(),t=El(c,n),i=El(c,r);l.set(e,Dl(t,i))}s.set(i,l)}return(e,t)=>s.get(e)?.get(t)??null}function jl(e){let t=e.uint16(),n=e.uint16(),r=e.uint16(),i=e.uint16(),a=e.uint16(),o=e.uint16(),s=e.uint16(),c=o*s;if(!Number.isSafeInteger(c)||c>1e6)throw Error(`GPOS pair-class matrix is unreasonably large.`);let l=Array.from({length:c},()=>Dl(El(e,n),El(e,r))),u=Ol(e,t),d=kl(e,i),f=kl(e,a);return(e,t)=>{if(u.indexOf(e)<0)return null;let n=d(e),r=f(t);if(n>=o||r>=s)throw Error(`GPOS pair references an invalid glyph class.`);return l[n*s+r]}}function Ml(e){let t=e.uint16();if(t===1)return Al(e);if(t===2)return jl(e);throw Error(`Unsupported GPOS pair adjustment format ${t}.`)}function Nl(e){let t=e.uint16(),n=Array.from({length:t},()=>({tag:e.tag(),offset:e.uint16()})),r=n.find(e=>e.tag===`latn`)??n.find(e=>e.tag===`DFLT`)??n[0];if(!r)return[];let i=$(e,r.offset),a=i.uint16(),o=i.uint16(),s=Array.from({length:o},()=>(i.tag(),i.uint16())),c=a||s[0];if(!c)return[];let l=$(i,c);l.uint16();let u=l.uint16(),d=Array.from({length:l.uint16()},()=>l.uint16());return u!==65535&&d.unshift(u),d}function Pl(e,t){let n=e.uint16(),r=Array.from({length:n},()=>({tag:e.tag(),offset:e.uint16()})),i=new Set(t),a=[];for(let t=0;t<r.length;t++){let n=r[t];if(n.tag!==`kern`||!i.has(t))continue;let o=$(e,n.offset);o.uint16();let s=o.uint16();for(let e=0;e<s;e++)a.push(o.uint16())}return a}function Fl(e){let t=e.uint16(),n=e.uint16();if(t!==1||n!==0&&n!==1)throw Error(`Unsupported GPOS table version.`);let r=e.uint16(),i=e.uint16(),a=e.uint16();n===1&&e.uint32();let o=Nl($(e,r)),s=Pl($(e,i),o);if(s.length===0)return null;let c=$(e,a),l=c.uint16(),u=Array.from({length:l},()=>c.uint16()),d=s.map(e=>{let t=u[e];if(t===void 0)throw Error(`GPOS kern feature references a missing lookup.`);let n=$(c,t),r=n.uint16();n.uint16();let i=Array.from({length:n.uint16()},()=>n.uint16()).map(e=>{let t=$(n,e);if(r===Sl)return Ml(t);if(r===Cl){let e=t.uint16(),n=t.uint16(),r=t.uint32();if(e!==1||n!==Sl)throw Error(`Unsupported GPOS extension positioning.`);return Ml($(t,r))}throw Error(`Unsupported GPOS kern lookup type ${r}.`)});return(e,t)=>{for(let n of i){let r=n(e,t);if(r)return r}return null}});return(e,t)=>{let n=wl();for(let r of d){let i=r(e,t);i&&Tl(n,i)}return n}}function Il(e){if(e.uint16()!==0)return null;let t=e.uint16(),n=new Map;for(let r=0;r<t;r++){let t=e.offset;e.uint16();let r=e.uint16(),i=e.uint16(),a=i>>8,o=!!(i&1),s=!!(i&2),c=!!(i&4),l=!!(i&8);if(a===0&&o&&!s&&!c){let t=e.uint16();e.skip(6);for(let r=0;r<t;r++){let t=e.uint16(),r=e.uint16(),i=e.int16(),a=t*65536+r;n.set(a,l?i:(n.get(a)??0)+i)}}if(r<6||t+r>e.length)throw RangeError(`Legacy kern subtable exceeds its table.`);e.seek(t+r)}return n.size===0?null:(e,t)=>({firstPlacement:0,firstAdvance:n.get(e*65536+t)??0,secondPlacement:0,secondAdvance:0})}function Ll(e,t){let n=t.get(`GPOS`);if(n){let t=Fl(e.slice(n.offset,n.length));if(t)return t}let r=t.get(`kern`);if(r){let t=Il(e.slice(r.offset,r.length));if(t)return t}return()=>wl()}var Rl=1,zl=2,Bl=4,Vl=8,Hl=16,Ul=32,Wl=1,Gl=2,Kl=4,ql=8,Jl=32,Yl=64,Xl=128,Zl=256,Ql=2048,$l=4096;function eu(e){let t=e.uint32();if(t===1330926671)throw Error(`CFF OpenType fonts are not supported by this PoC.`);if(t!==65536&&t!==1953658213)throw Error(`Expected an SFNT TrueType font.`);let n=e.uint16();e.skip(6);let r=new Map;for(let t=0;t<n;t++){let t=e.tag();e.skip(4);let n=e.uint32(),i=e.uint32();r.set(t,{offset:n,length:i})}return r}function tu(e,t,n){let r=t.get(n);if(!r)throw Error(`TrueType font is missing the ${n} table.`);return e.slice(r.offset,r.length)}function nu(e){e.uint16();let t=e.uint16(),n=[];for(let r=0;r<t;r++)n.push({platformId:e.uint16(),encodingId:e.uint16(),offset:e.uint32()});let r=new Map([[`3-10`,0],[`0-4`,1],[`3-1`,2],[`0-3`,3],[`0-6`,4]]);n.sort((e,t)=>(r.get(`${e.platformId}-${e.encodingId}`)??100)-(r.get(`${t.platformId}-${t.encodingId}`)??100));for(let t of n){if(t.offset+2>e.length)continue;let n=e.slice(t.offset,e.length-t.offset),r=n.uint16();if(r===4)return ru(n);if(r===12)return iu(n)}throw Error(`TrueType font has no supported Unicode cmap table.`)}function ru(e){let t=e.uint16();if(t>e.length)throw RangeError(`TrueType cmap format 4 exceeds its table.`);e.uint16();let n=e.uint16()/2;e.skip(6);let r=Array.from({length:n},()=>e.uint16());e.uint16();let i=Array.from({length:n},()=>e.uint16()),a=Array.from({length:n},()=>e.int16()),o=e.offset,s=Array.from({length:n},()=>e.uint16());return c=>{for(let l=0;l<n;l++){if(c>r[l])continue;if(c<i[l])return 0;if(s[l]===0)return c+a[l]&65535;let n=o+l*2+s[l]+(c-i[l])*2;if(n+2>t)throw RangeError(`TrueType cmap glyph index is out of range.`);let u=e.offset;e.seek(n);let d=e.uint16();return e.seek(u),d!==0&&(d=d+a[l]&65535),d}return 0}}function iu(e){if(e.uint16(),e.uint32()>e.length)throw RangeError(`TrueType cmap format 12 exceeds its table.`);e.uint32();let t=e.uint32(),n=Array.from({length:t},()=>({start:e.uint32(),end:e.uint32(),glyphId:e.uint32()}));return e=>{let t=0,r=n.length-1;for(;t<=r;){let i=t+r>>>1,a=n[i];if(e<a.start)r=i-1;else if(e>a.end)t=i+1;else return a.glyphId+e-a.start}return 0}}function au(e,t){let n=Array.from({length:t},()=>e.uint16()),r=n.at(-1)+1;e.skip(e.uint16());let i=[];for(;i.length<r;){let t=e.uint8();if(i.push(t),t&Vl){let n=e.uint8();for(let e=0;e<n;e++)i.push(t)}}if(i.length!==r)throw Error(`TrueType glyph flag repetition exceeds point count.`);let a=[],o=0;for(let t of i){if(t&zl){let n=e.uint8();o+=t&Hl?n:-n}else t&Hl||(o+=e.int16());a.push(o)}let s=[],c=0;for(let t of i){if(t&Bl){let n=e.uint8();c+=t&Ul?n:-n}else t&Ul||(c+=e.int16());s.push(c)}let l=[],u=0;for(let e of n){let t=[];for(let n=u;n<=e;n++)t.push({x:a[n],y:s[n],onCurve:!!(i[n]&Rl)});l.push(t),u=e+1}return l}function ou(e){return e.flatMap(e=>e)}function su(e,t,n,r){let[i,a,o,s]=t;return e.map(e=>e.map(e=>({x:Math.round(i*e.x+o*e.y+n),y:Math.round(a*e.x+s*e.y+r),onCurve:e.onCurve})))}function cu(e){let t=new pl(e),n=eu(t),r=tu(t,n,`head`);r.skip(18);let i=r.uint16();r.skip(30);let a=r.int16();if(i<16||i>16384)throw Error(`TrueType unitsPerEm is outside the valid range.`);if(a!==0&&a!==1)throw Error(`Unsupported TrueType loca offset format.`);let o=tu(t,n,`maxp`);o.skip(4);let s=o.uint16(),c=tu(t,n,`hhea`);c.skip(4);let l=c.int16(),u=c.int16(),d=c.int16();c.skip(24);let f=c.uint16();if(f<1||f>s)throw Error(`Invalid TrueType horizontal metric count.`);let p=tu(t,n,`hmtx`),m=new Uint16Array(s),h=new Int16Array(s),g=0;for(let e=0;e<f;e++)g=p.uint16(),m[e]=g,h[e]=p.int16();for(let e=f;e<s;e++)m[e]=g,h[e]=p.int16();let _=tu(t,n,`loca`),v=new Uint32Array(s+1);for(let e=0;e<=s;e++)v[e]=a===0?_.uint16()*2:_.uint32();let y=tu(t,n,`glyf`);if(v[s]>y.length)throw RangeError(`TrueType glyph locations exceed the glyf table.`);let b=nu(tu(t,n,`cmap`)),x=Ll(t,n),S=new Map;function C(e,t=0){if(e>=s)throw RangeError(`TrueType cmap refers to a missing glyph.`);if(t>32)throw Error(`TrueType composite glyph nesting is too deep.`);let n=S.get(e);if(n)return n;let r=v[e],i=v[e+1]-r,a;if(i===0)a={glyphId:e,advanceWidth:m[e],leftSideBearing:h[e],bounds:null,contours:[]};else{let n=y.slice(r,i),o=n.int16(),s={xMin:n.int16(),yMin:n.int16(),xMax:n.int16(),yMax:n.int16()},c;if(o>=0)c=o===0?[]:au(n,o);else{c=[];let e=[],r;do{r=n.uint16();let i=n.uint16(),a,o;r&Wl?r&Gl?(a=n.int16(),o=n.int16()):(a=n.uint16(),o=n.uint16()):r&Gl?(a=n.int8(),o=n.int8()):(a=n.uint8(),o=n.uint8());let s=[1,0,0,1];r&ql?(s[0]=n.int16()/16384,s[3]=s[0]):r&Yl?(s[0]=n.int16()/16384,s[3]=n.int16()/16384):r&Xl&&(s[0]=n.int16()/16384,s[1]=n.int16()/16384,s[2]=n.int16()/16384,s[3]=n.int16()/16384);let l=C(i,t+1),u=ou(l.contours),d,f;if(r&Gl)!(r&$l)&&(r&Ql||s[0]!==1||s[1]!==0||s[2]!==0||s[3]!==1)?(d=s[0]*a+s[2]*o,f=s[1]*a+s[3]*o):(d=a,f=o),r&Kl&&(d=Math.round(d),f=Math.round(f));else{let t=e[a],n=u[o];if(!t||!n)throw Error(`TrueType composite point attachment is invalid.`);let r=s[0]*n.x+s[2]*n.y,i=s[1]*n.x+s[3]*n.y;d=t.x-r,f=t.y-i}let p=su(l.contours,s,d,f);c.push(...p),e.push(...ou(p))}while(r&Jl);r&Zl&&n.skip(n.uint16())}a={glyphId:e,advanceWidth:m[e],leftSideBearing:h[e],bounds:s,contours:c}}return S.set(e,a),a}function w(e){return C(b(e))}return{unitsPerEm:i,ascender:l,descender:u,lineGap:d,glyphCount:s,getGlyph:w,getPairAdjustment:x}}function lu(e,t,n){let r=e.getPairAdjustment(t,n);return r.firstAdvance+r.secondAdvance}function uu(e,t,n,r=0){let i=0,a,o=0;for(let n of t){let t=e.getGlyph(n);i+=t.advanceWidth,a&&(i+=lu(e,a.glyphId,t.glyphId)),a=t,o++}return i*n/e.unitsPerEm+Math.max(0,o-1)*r}function du(e,t){return{x:(e.x+t.x)*.5,y:(e.y+t.y)*.5,onCurve:!0}}function fu(e){return Object.is(e,-0)?`0`:String(e)}function pu(e){return`${fu(e.x)} ${fu(-e.y)}`}function mu(e){if(e.length===0)throw Error(`TrueType contours must contain points.`);let t=[];for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t.push(r),!r.onCurve&&!i.onCurve&&t.push(du(r,i))}let n=t.findIndex(e=>e.onCurve);if(n<0)throw Error(`TrueType contour has no implied on-curve point.`);let r=[`M${pu(t[n])}`],i=1;for(;i<t.length;){let e=t[(n+i)%t.length];if(e.onCurve)r.push(`L${pu(e)}`),i++;else{let a=t[(n+i+1)%t.length];if(!a.onCurve)throw Error(`TrueType off-curve point lacks an endpoint.`);r.push(`Q${pu(e)} ${pu(a)}`),i+=2}}return r.push(`Z`),r.join(``)}function hu(e){return e.contours.length===0?null:e.contours.map(mu).join(``)}function gu(e){let t=cu(e),n=Array(128),r=new Map,i=Array(t.glyphCount);function a(e){let n=t.getGlyph(e),r=i[n.glyphId];return r===void 0&&(r=hu(n),i[n.glyphId]=r),Object.freeze({codePoint:e,glyphId:n.glyphId,advanceWidth:n.advanceWidth,leftSideBearing:n.leftSideBearing,bounds:n.bounds?Object.freeze({...n.bounds}):null,path:r})}function o(e){let t=typeof e==`number`?e:e.codePointAt(0);if(t===void 0||!Number.isInteger(t))throw TypeError(`A glyph requires a Unicode character or code point.`);let i=t>=0&&t<128,o=i?n[t]:r.get(t);return o===void 0&&(o=a(t),i?n[t]=o:r.set(t,o)),o}let s=t.getGlyph(`H`.codePointAt(0)).bounds?.yMax??t.ascender;return Object.freeze({unitsPerEm:t.unitsPerEm,ascender:t.ascender,descender:t.descender,lineGap:t.lineGap,capHeight:s,glyphCount:t.glyphCount,getGlyph:o,getPairAdjustment:t.getPairAdjustment})}var _u=new Map;function vu(e){let t=String(e),n=_u.get(t);return n||(n=fetch(e).then(async e=>{if(!e.ok)throw Error(`Could not load TrueType font ${t}: ${e.status}.`);return gu(await e.arrayBuffer())}),_u.set(t,n),n.catch(()=>_u.delete(t))),n}function yu(e,t,n){let r=0;for(let i of t.split(`
`))r=Math.max(r,uu(e,i,n));return r}var bu=new URL(new URL(`DefaultFont-DwM7drq1.ttf`,import.meta.url).href,``+import.meta.url);function xu(){return vu(bu)}var Su=`https://raw.githubusercontent.com/google/fonts/f6b2b7e8545e086ad3f821af21895d732b6485cf/ofl/`,Cu=new Map([[`Indie Flower`,`normal`,400,`indieflower/v24/m8JVjfNVeKWVnh3QMuKkFcZlbkGA1dM.ttf`],[`Lato`,`normal`,400,Su+`lato/Lato-Regular.ttf`],[`Lato`,`italic`,400,Su+`lato/Lato-Italic.ttf`],[`Lato`,`normal`,600,Su+`lato/Lato-SemiBold.ttf`],[`Lato`,`normal`,700,Su+`lato/Lato-Bold.ttf`],[`Lato`,`italic`,700,Su+`lato/Lato-BoldItalic.ttf`],[`Lato`,`normal`,900,Su+`lato/Lato-Black.ttf`],[`Lobster`,`normal`,400,`lobster/v32/neILzCirqoswsqX9_oWsNKEy.ttf`],[`Oswald`,`normal`,400,`oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvgUFoYgaQ.ttf`],[`Oswald`,`normal`,700,`oswald/v57/TK3_WkUHHAIjg75cFRf3bXL8LICs1xZogUFoYgaQ.ttf`],[`Radley`,`normal`,400,`radley/v24/LYjDdGzinEIjCN19oAlCpVo.ttf`],[`Roboto Condensed`,`normal`,700,`robotocondensed/v31/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpfBJ73tBKQ.ttf`],[`Source Sans Pro`,`normal`,400,`sourcesanspro/v23/6xK3dSBYKcSV-LCoeQqfX1RYOo3aP6TimDc.ttf`],[`Source Sans Pro`,`normal`,700,`sourcesanspro/v23/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkB1p_8E.ttf`],[`Teko`,`normal`,400,`teko/v23/LYjYdG7kmE0gV69VVPPdFl06VN8XG7Sy3TSEvw.ttf`]].map(([e,t,n,r])=>[wu(String(e),String(t),Number(n)),String(r).startsWith(`https://`)?String(r):`https://fonts.gstatic.com/s/`+r]));function wu(e,t,n){return JSON.stringify([e,t,n])}function Tu(e){let t=new Map;for(let n of e){if(typeof n.family!=`string`||n.family.trim()===``)throw Error(`Font catalog families must be non-empty strings.`);let e=n.style??`normal`;if(e!==`normal`&&e!==`italic`)throw Error(`Unsupported font catalog style for ${n.family}: ${e}.`);let r=n.weight??400;if(!Number.isInteger(r)||r<1||r>1e3)throw Error(`Font catalog weight for ${n.family} must be an integer from 1 to 1000.`);if(!(n.source instanceof URL||typeof n.source==`string`&&n.source.trim()!==``))throw Error(`Font catalog source for ${n.family} must be a non-empty URL.`);let i=wu(n.family,e,r);if(t.has(i))throw Error(`Duplicate font catalog entry for ${n.family} ${e} ${r}.`);t.set(i,n.source)}return t}function Eu(e){if(e.implicitFamily&&e.style==`normal`&&e.weight==400)return;let t=e.implicitFamily?`Lato`:e.family,n=Cu.get(wu(String(t),e.style,e.weight));if(!n)throw Error(`No WebGPU TrueType font is available for ${t} ${e.style} ${e.weight}.`);return n}function Du(e=[]){let t=Tu(e);return e=>{if(e.implicitFamily&&e.style===`normal`&&e.weight===400)return xu();let n=e.implicitFamily?`Lato`:e.family,r=wu(String(n),e.style,e.weight);return vu(t.get(r)??Eu(e))}}var Ou=class{constructor(e,t){this.prepareFont=e,this.provisionalProvider=t,this.entries=new i([],JSON.stringify),this.pending=[]}requestFont(e){return this.#e(e).measurement}getPreparedFont(e){return this.entries.get(ku(e))?.outlineFont}async waitUntilReady(){await Promise.all(this.pending)}#e(e){let t=ku(e),n=this.entries.get(t);if(!n){let r=this.provisionalProvider.requestFont(e);n={outlineFont:void 0,measurement:void 0};let i=n;n.measurement={measureWidth:(e,t)=>i.outlineFont?yu(i.outlineFont,e,t):r.measureWidth(e,t),getHeight:e=>i.outlineFont?(i.outlineFont.capHeight-i.outlineFont.descender)/i.outlineFont.unitsPerEm*e:r.getHeight(e)},this.entries.set(t,n),this.pending.push(this.prepareFont(t).then(e=>{i.outlineFont=e}))}return n}};function ku(e){let t=e.font==null||e.font.toLowerCase()==`sans-serif`;return{family:t?void 0:e.font,style:e.fontStyle??`normal`,weight:ne(e.fontWeight??`normal`),implicitFamily:t}}async function Au(e){let t=new Xc(e);try{await t.initialize()}catch(e){throw t.finalize(),e}let n=Promise.resolve(),r=e=>{let t=n.then(e);return n=t.catch(()=>{}),t},i=Du(e.fontCatalog),a,o=()=>(a??=re(e.container.ownerDocument),a);return{surface:t,textMetrics:new Ou(i,{requestFont:e=>o().requestFont(e),waitUntilReady:()=>o().waitUntilReady()}),glHelper:void 0,createRenderCoordinator:e=>new pc({...e,surface:t}),readPickingId:(e,n)=>t.pick(e,n),exportCanvas:()=>{throw Error(`Synchronous canvas export is unavailable with WebGPU. Use imageExport.raster() instead.`)},exportRaster:e=>r(()=>cl(t,e)),rasterizeSvgRuns:e=>r(()=>ll(t,e))}}export{Au as createWebGpuRenderingBackend};